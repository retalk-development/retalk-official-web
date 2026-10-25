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
    id: "stamu-aphasia-ver-1-3-1-release",
    publishedAt: "2026-10-22",
    type: "update",
    title: "STAMU Aphasia Ver.1.3.1を公開しました",
    summary: "STAMU Aphasia Ver.1.3.1をApp Storeで公開しました。臨床情報の管理と、安全なデータ移行を中心に改善しています。",
    body: [
      "STAMU Aphasia Ver.1.3.1をApp Storeで公開しました。",
      "今回のアップデートでは、利用者ごとの臨床情報を記録し、日々の支援や端末間の引き継ぎに活用しやすくするための改善を行いました。",
      "主な更新内容:",
      "・STAMU導入判定を保存し、訂正の履歴を確認できるようにしました。",
      "・基本情報、臨床情報、評価記録、リハビリ記録などを患者単位の暗号化ファイルとして書き出し・取り込みできる臨床データ移行（Clinical Transfer）を追加しました。",
      "・リハビリ時間の集計と、カルテ用テキストのコピー・共有を改善しました。",
      "・自主練習データを期間指定で書き出す機能を改善しました。",
      "・語彙表記や誤答フィードバックなど、訓練画面の見やすさを改善しました。",
      "臨床データ移行（Clinical Transfer）と自主練習データの移行は、ファイルを書き出して確認後に取り込む機能です。クラウド同期やリアルタイム同期ではありません。",
      "リハビリ時間は推定値であり、診療報酬上の実施時間を証明するものではありません。",
      "本アプリは、ことばのリハビリ、記録、評価、支援を補助するもので、診断、予後予測、治療判断を行いません。",
      "App Storeで公開中です。",
    ],
  },
  {
    id: "stamu-aphasia-ver-1-3-0-release",
    publishedAt: "2026-10-17",
    type: "update",
    title: "STAMU Aphasia Ver.1.3.0を公開しました",
    summary: "STAMU Aphasia Ver.1.3.0をApp Storeで公開しました。自主練習と振り返りを使いやすくする更新です。",
    body: [
      "STAMU Aphasia Ver.1.3.0をApp Storeで公開しました。",
      "今回のアップデートでは、日々の自主練習と臨床での振り返りをより使いやすくするため、複数の更新を行いました。",
      "主な更新内容:",
      "・訓練中のフィードバックや画面表示を改善しました。",
      "・「あなたの訓練」の開始・再開と結果画面を使いやすくしました。",
      "・リハビリ時間（推定）の表示を追加しました。",
      "・研究モードの操作性を改善しました。",
      "・SLTAのグラフ表示とPDF出力を改善しました。",
      "・絵カードや文字選択肢の表示を改善しました。",
      "・完了したリハビリ記録のSOAPを後から編集できるようにしました。",
      "リハビリ時間は推定値であり、診療報酬上の実施時間を証明するものではありません。",
      "本アプリは、ことばの自主練習と記録の支援を目的としています。診断、予後の予測、治療効果の保証は行いません。",
      "App Storeで公開中です。",
    ],
  },
  {
    id: "stamu-aphasia-ver-1-2-release",
    publishedAt: "2026-10-08",
    type: "update",
    title: "STAMU Aphasia Ver.1.2をリリースしました",
    summary:
      "STAMU Aphasia Ver.1.2を公開しました。言語聴覚士・研究利用を支える機能を中心に改善しています。",
    body: [
      "STAMU Aphasia Ver.1.2を公開しました。",
      "今回のアップデートでは、言語聴覚士・研究利用を支える機能を中心に改善しています。",
      "主な更新内容:",
      "・研究用モード／研究データ出力の改善",
      "・端末間でデータを引き継ぐ Transfer 機能",
      "・Research CSV の日本語ラベル・項目説明の充実",
      "・SLTA入力画面など各種UIの改善",
      "・データ移行時の安全性・エラー表示の改善",
      "STAMU Aphasiaは、失語症の自主訓練を「やって終わり」にせず、訓練・記録・振り返りを次の支援につなげることを目指しています。",
      "今後も、臨床で使いやすい形を少しずつ改善していきます。",
    ],
  },
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
