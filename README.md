# Re:Talk Official Website

Re:Talk公式Webサイトの初期実装です。Nativeアプリとは独立したNext.js repositoryとして管理します。

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

No environment variable is required for local development. For Preview or production, set the public origin used by canonical URLs, Open Graph metadata, sitemap, robots, and JSON-LD:

```bash
NEXT_PUBLIC_SITE_URL=https://your-preview-or-production-domain.example
```

When it is omitted on Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used. Local development falls back to `http://localhost:3000`.

## Final App Store URL

Set `siteConfig.appStoreUrl` in `src/config/site.ts`. Until a confirmed URL is provided, the CTA remains disabled and displays `App Store公開準備中`; it never points to a placeholder URL.

## Contact destination

Set `publicContactEmail` in `src/config/contact.ts` after the public address is confirmed. Do not commit a fabricated destination. Until then, `/contact` displays a preparation notice and safe contact guidance.

## Product screenshots

仮スクリーンショットは `public/product/` に置き、参照先は `src/data/product-screens.ts` に集約しています。正式画像へ差し替える際は、同名ファイルを置き換えるか、このmappingのみを更新してください。

## Remaining release inputs

- confirmed App Store URL
- confirmed public contact email
- approved Terms and Privacy text
- final Native screenshots
