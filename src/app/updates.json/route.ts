import { buildUpdatesFeed } from "@/data/announcements";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildUpdatesFeed(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
