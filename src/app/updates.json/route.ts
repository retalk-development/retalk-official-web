import { buildUpdatesFeed } from "@/data/announcements";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildUpdatesFeed());
}
