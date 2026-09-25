# STAMU Aphasia Official Website

STAMU Aphasia公式Webサイトです。Nativeアプリとは独立したNext.js repositoryとして管理します。

## Development

```bash
npm install
npm run dev
```

標準の検証:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment variables

No environment variable is required for local development. Canonical URLs, Open Graph metadata, sitemap, robots, and JSON-LD resolve as follows:

1. `NEXT_PUBLIC_SITE_URL` when explicitly set
2. Netlify Deploy Preview / branch deploy: `DEPLOY_PRIME_URL` (or `DEPLOY_URL`)
3. Netlify production: `https://retalk-app.com` (`CONTEXT=production`)
4. Vercel: `VERCEL_PROJECT_PRODUCTION_URL`
5. Local development: `http://localhost:3000`

## Final App Store URL

Set `siteConfig.appStoreUrl` in `src/config/site.ts`. Until a confirmed URL is provided, the CTA remains disabled and displays `App Store公開準備中`; it never points to a placeholder URL.

## Contact destination

The current public contact address remains `retalk.app.info@gmail.com` until the planned post-release migration to a STAMU-branded address.

## Product screenshots

仮スクリーンショットは `public/product/` に置き、参照先は `src/data/product-screens.ts` に集約しています。正式画像へ差し替える際は、同名ファイルを置き換えるか、このmappingのみを更新してください。

`SCREENSHOT_REPLACEMENT_PENDING`: 次の画像には旧Re:Talk表記が写っているため、新Nativeスクリーンショット到着後に差し替えます。

- `public/product/launch-screen.jpg`
- `public/product/patient-home-bottom.jpg`

## Brand icon status

`NEEDS_ICON_POLISH`: 正式ロゴは横長wordmarkのため、`favicon.ico`、`icon.png`、`apple-icon.png` は既存の正方形アイコンを維持しています。承認済みの正方形STAMUアイコン到着後に差し替えます。

## Remaining release inputs

- confirmed App Store URL
- final Native screenshots without former Re:Talk branding
- approved square STAMU icon assets for favicon and app icons
