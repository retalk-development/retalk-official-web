import { connection } from "next/server";
import { productionSiteUrl } from "@/config/site";

export const dynamic = "force-dynamic";

/**
 * Production Host/Sitemap must stay on stamu.jp.
 * Never fall back to module-level siteUrl (can be localhost when CONTEXT
 * is unset at Netlify runtime). Preview/branch deploys use DEPLOY_* only
 * when those URLs are explicitly present; otherwise productionSiteUrl.
 */
function robotsOrigin(): string {
  const context = process.env.CONTEXT;

  if (context === "deploy-preview" || context === "branch-deploy") {
    const previewUrl =
      process.env.DEPLOY_PRIME_URL ??
      process.env.DEPLOY_URL;

    if (previewUrl) {
      return previewUrl.replace(/\/$/, "");
    }
  }

  return productionSiteUrl;
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
