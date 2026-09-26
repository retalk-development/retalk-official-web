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

製品画面は `public/product/` に置き、参照先は `src/data/product-screens.ts` に集約しています。差し替え時は同名ファイルを置き換えるか、このmappingのみを更新してください。

`launch-screen.jpg` と `patient-home-bottom.jpg` は Native Preview DEVICE PASS 済みの正式スクリーンショットに同期済みです。

## Brand icon status

`favicon.ico` / `icon.png` / `apple-icon.png` は公式 STAMU | Aphasia wordmark から STAMU 部分のみを切り出し、白地・navy STAMU の正方形アイコンとして配置しています（Aphasia 表記・旧 Re:Talk シンボルなし）。

## Remaining release inputs

- confirmed App Store URL
- post-release contact email migration to a STAMU-branded address (current: `retalk.app.info@gmail.com`)
