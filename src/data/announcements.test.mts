import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  type Announcement,
  announcements,
  buildUpdatesFeed,
  compareAnnouncementsNewestFirst,
  findAnnouncementViolations,
  getAnnouncement,
  listAnnouncementsNewestFirst,
} from "./announcements.ts";

const sourceFiles = [
  "src/app/news/page.tsx",
  "src/app/news/[id]/page.tsx",
  "src/app/updates.json/route.ts",
  "src/app/sitemap.ts",
];

test("announcement source matches the updates feed schema", () => {
  const feed = buildUpdatesFeed();
  const serialized = JSON.stringify(feed);
  const parsed = JSON.parse(serialized) as {
    schemaVersion: number;
    items: Announcement[];
  };

  assert.deepEqual(Object.keys(parsed).sort(), ["items", "schemaVersion"]);
  assert.equal(parsed.schemaVersion, 1);
  assert.equal(findAnnouncementViolations(announcements).length, 0);
  assert.deepEqual(
    parsed.items,
    listAnnouncementsNewestFirst().map((item) => ({
      id: item.id,
      publishedAt: item.publishedAt,
      type: item.type,
      title: item.title,
      summary: item.summary,
      body: [...item.body],
    })),
  );
  assert.equal(parsed.items[0]?.id, "stamu-aphasia-ver-1-0-app-store");
  assert.equal(parsed.items[0]?.publishedAt, "2026-10-03");
  assert.equal(parsed.items[0]?.type, "update");
  assert.doesNotMatch(serialized, /<script|<\/?[a-z][\s\S]*?>|javascript:|https?:\/\/|www\.|mailto:|data:/i);
});

test("announcements are ordered newest first", () => {
  const older: Announcement = {
    id: "older-note",
    publishedAt: "2026-09-01",
    type: "news",
    title: "古いお知らせ",
    summary: "古い要約です。",
    body: ["古い本文です。"],
  };
  const newer: Announcement = {
    id: "newer-note",
    publishedAt: "2026-10-03",
    type: "update",
    title: "新しいお知らせ",
    summary: "新しい要約です。",
    body: ["新しい本文です。"],
  };
  const sameDayLaterId: Announcement = { ...newer, id: "zzz-note" };

  assert.deepEqual(
    [older, newer].sort(compareAnnouncementsNewestFirst).map((item) => item.id),
    ["newer-note", "older-note"],
  );
  assert.deepEqual(
    [newer, sameDayLaterId].sort(compareAnnouncementsNewestFirst).map((item) => item.id),
    ["zzz-note", "newer-note"],
  );
  assert.deepEqual(
    listAnnouncementsNewestFirst().map((item) => item.id),
    [...announcements].sort(compareAnnouncementsNewestFirst).map((item) => item.id),
  );
});

test("unknown announcement ids are absent from the source", () => {
  assert.equal(getAnnouncement("stamu-aphasia-ver-1-0-app-store")?.title, "STAMU Aphasia Ver.1.0 App Store公開");
  assert.equal(getAnnouncement("missing-announcement"), undefined);
});

test("schema rejects markup, script, and external URLs", () => {
  const valid = announcements[0];
  assert.ok(valid);

  assert.deepEqual(
    findAnnouncementViolations([{ ...valid, body: ["<script>alert(1)</script>"] }]),
    ["items[0].body[0] must not contain HTML or script"],
  );
  assert.deepEqual(
    findAnnouncementViolations([{ ...valid, summary: "詳細は https://example.com を参照" }]),
    ["items[0].summary must not contain an external URL"],
  );
  assert.deepEqual(
    findAnnouncementViolations([{ ...valid, title: "詳細は www.example.com を参照" }]),
    ["items[0].title must not contain an external URL"],
  );
  assert.ok(findAnnouncementViolations([{ ...valid, publishedAt: "2026-02-31" }]).length > 0);
  assert.ok(findAnnouncementViolations([{ ...valid, id: "../secret" }]).length > 0);
  assert.ok(findAnnouncementViolations([valid, valid]).some((violation) => violation.includes("duplicates")));
});

test("updates.json is served as UTF-8 JSON", () => {
  const source = readFileSync("src/app/updates.json/route.ts", "utf8");
  assert.match(source, /application\/json;\s*charset=utf-8/);
});

test("news pages and the JSON feed use the announcement source", () => {
  for (const file of sourceFiles) {
    const source = readFileSync(file, "utf8");
    assert.match(source, /@\/data\/announcements/);
    assert.doesNotMatch(source, /publishedAt\s*:/);
    assert.doesNotMatch(source, /schemaVersion\s*:/);
  }
});
