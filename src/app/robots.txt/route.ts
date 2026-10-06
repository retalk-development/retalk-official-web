import { connection } from "next/server";
import { productionSiteUrl, siteUrl } from "@/config/site";

export const dynamic = "force-dynamic";

/**
 * Production Host/Sitemap must stay on stamu.jp even when Netlify's URL is
 * still the retalk-app.com alias. Preview and branch deploys keep siteUrl.
 * This route is dynamic so Netlify cannot keep serving a year-old static
 * robots.txt from the durable cache after the origin changes.
 */
function robotsOrigin(): string {
  const context = process.env.CONTEXT;
  if (context === "deploy-preview" || context === "branch-deploy") {
    return siteUrl;
  }

  if (context === "production") {
    return productionSiteUrl;
  }

  return siteUrl;
}

export async function GET() {
  await connection();
  const origin = robotsOrigin().replace(/\/$/, "");
  const body = [
    "User-Agent: *",
    "Allow: /",
    "",
    `Host: ${origin}`,
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "CDN-Cache-Control": "no-store",
      "Netlify-CDN-Cache-Control": "no-store",
    },
  });
}
