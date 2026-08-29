# Re:Talk Official Website

Re:Talk公式Webサイトの初期実装です。Nativeアプリとは独立したNext.js repositoryとして管理します。

## Development

```bash
npm run dev
```

標準の検証:

```bash
npm run lint
npm run typecheck
npm run build
```

## Product screenshots

仮スクリーンショットは `public/product/` に置き、参照先は `src/data/product-screens.ts` に集約しています。正式画像へ差し替える際は、同名ファイルを置き換えるか、このmappingのみを更新してください。

## Production TODO

- `src/config/site.ts` のApp Store URL
- App Store badge
- 正式Nativeスクリーンショット
- FAQ／法務文言の最終確認
- production公開前にmetadataのrobots設定を変更
