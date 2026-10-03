export const ANNOUNCEMENT_TYPES = ["update", "important", "news"] as const;

export type AnnouncementType = (typeof ANNOUNCEMENT_TYPES)[number];

export type Announcement = {
  id: string;
  publishedAt: string;
  type: AnnouncementType;
  title: string;
  summary: string;
  body: readonly string[];
};

export const UPDATES_SCHEMA_VERSION = 1;

export type UpdatesFeed = {
  schemaVersion: typeof UPDATES_SCHEMA_VERSION;
  items: readonly Announcement[];
};

const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MARKUP_PATTERN = /[<>]|<\/?[a-z][\s\S]*?>|javascript:/i;
const EXTERNAL_URL_PATTERN = /(?:https?:\/\/|\/\/|www\.|mailto:|data:)/i;

export const announcementTypeLabels: Record<AnnouncementType, string> = {
  update: "アップデート",
  important: "重要",
  news: "ニュース",
};

export const announcements = [
  {
    id: "stamu-aphasia-ver-1-0-app-store",
    publishedAt: "2026-10-03",
    type: "update",
    title: "STAMU Aphasia Ver.1.0 App Store公開",
    summary: "STAMU Aphasia Ver.1.0をApp Storeで公開しました。",
    body: ["2026年10月3日、STAMU Aphasia Ver.1.0をApp Storeで公開しました。"],
  },
] as const satisfies readonly Announcement[];

export function findAnnouncementViolations(items: readonly Announcement[]): string[] {
  const violations: string[] = [];
  const seenIds = new Set<string>();

  items.forEach((item, index) => {
    const label = `items[${index}]`;
    if (!ID_PATTERN.test(item.id)) {
      violations.push(`${label}.id must be a lowercase slug`);
    }
    if (seenIds.has(item.id)) {
      violations.push(`${label}.id duplicates ${item.id}`);
    }
    seenIds.add(item.id);

    if (!isIsoDate(item.publishedAt)) {
      violations.push(`${label}.publishedAt must be a real YYYY-MM-DD date`);
    }
    if (!ANNOUNCEMENT_TYPES.includes(item.type)) {
      violations.push(`${label}.type must be update, important, or news`);
    }
    violations.push(...textViolations(`${label}.title`, item.title));
    violations.push(...textViolations(`${label}.summary`, item.summary));
    if (!Array.isArray(item.body) || item.body.length === 0) {
      violations.push(`${label}.body must be a non-empty string array`);
    } else {
      item.body.forEach((paragraph, paragraphIndex) => {
        violations.push(...textViolations(`${label}.body[${paragraphIndex}]`, paragraph));
      });
    }
  });

  return violations;
}

export function compareAnnouncementsNewestFirst(left: Announcement, right: Announcement): number {
  if (left.publishedAt !== right.publishedAt) {
    return left.publishedAt < right.publishedAt ? 1 : -1;
  }
  if (left.id === right.id) {
    return 0;
  }
  return left.id < right.id ? 1 : -1;
}

export function listAnnouncementsNewestFirst(): readonly Announcement[] {
  return [...announcements].sort(compareAnnouncementsNewestFirst);
}

export function getAnnouncement(id: string): Announcement | undefined {
  return announcements.find((item) => item.id === id);
}

export function formatAnnouncementDate(publishedAt: string): string {
  const match = DATE_PATTERN.exec(publishedAt);
  if (!match || !isIsoDate(publishedAt)) {
    throw new Error(`Invalid announcement date: ${publishedAt}`);
  }
  return `${match[1]}年${Number(match[2])}月${Number(match[3])}日`;
}

export function buildUpdatesFeed(): UpdatesFeed {
  return {
    schemaVersion: UPDATES_SCHEMA_VERSION,
    items: listAnnouncementsNewestFirst().map((item) => ({
      id: item.id,
      publishedAt: item.publishedAt,
      type: item.type,
      title: item.title,
      summary: item.summary,
      body: [...item.body],
    })),
  };
}

function textViolations(label: string, value: string): string[] {
  if (typeof value !== "string" || value.trim().length === 0) {
    return [`${label} must be a non-empty string`];
  }
  const violations: string[] = [];
  if (MARKUP_PATTERN.test(value)) {
    violations.push(`${label} must not contain HTML or script`);
  }
  if (EXTERNAL_URL_PATTERN.test(value)) {
    violations.push(`${label} must not contain an external URL`);
  }
  return violations;
}

function isIsoDate(value: string): boolean {
  const match = DATE_PATTERN.exec(value);
  if (!match) {
    return false;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

const sourceViolations = findAnnouncementViolations(announcements);
if (sourceViolations.length > 0) {
  throw new Error(`Invalid announcements:\n${sourceViolations.join("\n")}`);
}
