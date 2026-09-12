import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "Re:Talkにおける患者情報の端末内保存、外部送信、プライバシー、診断・治療判断との境界についてご案内します。";

export const metadata: Metadata = createPageMetadata({
  title: "患者情報の端末内保存と安全性",
  description,
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <InfoPage
      eyebrow="SAFETY & PRIVACY"
      title="安全性について"
      description={description}
      updatedAt="2026年9月12日"
      sections={[
        {
          title: "患者さんの情報は、端末内で扱うことを基本に",
          paragraphs: ["Re:Talkは、患者さんの情報をできるだけ端末内で扱う設計を基本にしています。独自の患者データ送信や外部AIへの送信は行いません。"],
        },
        {
          title: "入力する個人情報を必要最小限に",
          paragraphs: ["氏名の入力は必須ではありません。住所や電話番号は入力項目として設けず、保存しません。表示名、生年月日、発症日など入力した情報と、訓練・評価・リハビリ記録は、端末内のデータベースに保存されます。"],
        },
        {
          title: "音声認識と録音について",
          paragraphs: ["音声認識を使う訓練ではマイクと音声認識の許可が必要です。録音ファイルは継続的に保存しません。音声認識の処理方法や通信の有無は、OSや音声認識サービスの提供条件、端末の設定、利用環境によって異なる場合があります。"],
        },
        {
          title: "通信とオフライン利用について",
          paragraphs: ["患者情報を同期するRe:Talk独自のクラウド機能はありません。ただし、アプリの入手や更新、OS・App Storeが提供する機能、音声認識などではネットワーク通信が発生する場合があります。そのため、通信が一切発生しないことや、完全なオフライン動作を保証するものではありません。"],
        },
        {
          title: "情報管理は、利用する端末と施設の方針に沿って",
          paragraphs: ["Re:Talkは個人情報の入力を必要最小限にする考え方で設計しています。医療機関・介護施設で利用する場合は、端末の管理方法や入力する情報の範囲を含め、各施設の情報管理方針に沿ってご利用ください。特定の暗号化方式や認証取得を保証する表現は行っていません。"],
        },
        {
          title: "診断・予後予測・治療判断は行いません",
          paragraphs: ["Re:Talkは電子カルテの代替ではなく、診断・予後予測・治療判断を行うものではありません。失語症の訓練・記録・評価・支援を補助するツールとして、臨床上の判断は専門職が必要な情報を確認したうえで行ってください。"],
        },
      ]}
      relatedLinks={[
        { href: "/privacy", label: "プライバシーポリシー" },
        { href: "/faq", label: "よくあるご質問" },
      ]}
    />
  );
}
