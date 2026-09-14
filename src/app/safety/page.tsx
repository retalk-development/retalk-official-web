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
          paragraphs: ["氏名の入力は必須ではありません。現行版には、住所・電話番号・メールアドレスの専用入力欄はありません。ただし、自由入力欄に入力した内容は端末内に保存され得ます。表示名、生年月日、発症日など入力した情報と、訓練・評価・リハビリ記録は、端末内のデータベースに保存されます。"],
        },
        {
          title: "音声認識と録音について",
          paragraphs: ["音声認識を使う訓練ではマイクと音声認識の許可が必要です。現行のiOS版では端末内音声認識を必須とし、利用できない場合はサーバーでの音声認識へ切り替えず、手動判定へ移行します。録音ファイルは保存しません。音声認識に成功した場合、認識結果のテキストを訓練記録として端末内に保存することがあります。"],
        },
        {
          title: "通信とオフライン利用について",
          paragraphs: ["患者情報を同期するRe:Talk独自のクラウド機能と、患者・利用者データを送信するAPIはありません。ただし、アプリの入手や更新などではネットワーク通信が発生する場合があります。すべての対応端末で完全オフラインであることは保証していません。"],
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
