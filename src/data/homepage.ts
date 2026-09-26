import { productScreens } from "@/data/product-screens";

export const heroScreens = [
  productScreens.launch,
  productScreens.patientHomeTop,
  productScreens.patientHomeBottom,
  productScreens.trainingCategoriesTop,
  productScreens.trainingQuestion,
  productScreens.trainingResult,
  productScreens.patientRecord,
  productScreens.stDashboard,
];

export const continuityFlow = [
  productScreens.trainingQuestion,
  productScreens.trainingResult,
  productScreens.patientRecord,
  productScreens.stDashboard,
];

export const patientFlow = [
  productScreens.trainingCategoriesTop,
  productScreens.taskListTop,
  productScreens.trainingSetupTop,
  productScreens.trainingQuestion,
];

export const analysisFlow = [
  productScreens.stDashboard,
  productScreens.stTaskAnalysisTop,
  productScreens.stTaskAnalysisBottom,
];

export const efficiencyStories = [
  {
    eyebrow: "01 / 課題語設定",
    title: "教材を探す、準備する。その時間まで減らしていく。",
    copy: "検索・カテゴリ・頻度・使用状態から課題語を絞り、その人に合わせた語を選べます。",
    screens: [productScreens.wordSettingsList],
  },
  {
    eyebrow: "02 / 評価記録",
    title: "評価を記録し、変化を比べる。",
    copy: "SLTAの記録と2時点比較を、同じ利用者の流れの中で確認できます。",
    screens: [
      productScreens.sltaDetailTop,
      productScreens.sltaDetailGraph,
      productScreens.evaluationRecords,
      productScreens.sltaComparisonTop,
      productScreens.sltaComparisonDiff,
    ],
  },
  {
    eyebrow: "03 / リハビリ記録",
    title: "訓練記録を、臨床で振り返れる形へ。",
    copy: "実施した訓練、SOAP、カルテ用テキストをひとつの記録として扱えます。",
    screens: [
      productScreens.rehabRecordTop,
      productScreens.rehabRecordSoap,
      productScreens.rehabRecordKarte,
    ],
  },
];

export const platformItems = [
  { label: "Training", caption: "訓練", screen: productScreens.patientRecord },
  { label: "Evaluation", caption: "評価", screen: productScreens.evaluationRecords },
  { label: "Rehab Record", caption: "リハビリ記録", screen: productScreens.rehabRecordList },
  { label: "Clinical Profile", caption: "プロフィール", screen: productScreens.userInfo },
];

// These answers intentionally describe only current, publicly approved capabilities.
export const faqItems = [
  {
    question: "STAMU Aphasiaは無料ですか？",
    answer: "はい。STAMU Aphasiaは無料で利用できます。失語症のある方の自主練習・自主訓練と、それを支える言語聴覚士の記録や振り返りに活用できます。",
  },
  {
    question: "iPhone / iPadで使えますか？",
    answer: "iPhoneとiPadに対応しています。正式な対応OSの条件は、App Store公開時の案内をご確認ください。",
  },
  {
    question: "どんな訓練がありますか？",
    answer: "失語症リハビリに活用できる6つの訓練カテゴリと29の訓練課題を用意しています。課題によって選べる設定や教材の内容は異なります。",
  },
  {
    question: "医療機関や介護施設でも使えますか？",
    answer: "失語症のある方の自主練習支援や、訓練・評価・リハビリ記録の振り返りに活用できます。施設での運用は、各施設の方針と情報管理ルールに沿ってご検討ください。",
  },
  {
    question: "ST以外の医療・介護職も使えますか？",
    answer: "STAMU Aphasiaは言語聴覚士による支援を中心に設計しています。チームで参照する場合は、各施設の役割と情報管理方針に沿ってご利用ください。",
  },
  {
    question: "患者さんの情報はどこに保存されますか？",
    answer: "患者さんの情報をできるだけ端末内で扱う設計を基本にしています。独自の患者データ送信や外部AIへの送信は行いません。詳しくは安全性ページをご確認ください。",
  },
  {
    question: "STAMU Aphasiaは診断や治療判断を行いますか？",
    answer: "いいえ。STAMU Aphasiaは診断、予後予測、治療判断を行うものではありません。訓練・記録・評価・支援を補助するツールです。",
  },
  {
    question: "困ったときはどこに問い合わせればよいですか？",
    answer: "お問い合わせページで、メール窓口とご連絡時の注意事項をご案内しています。",
  },
] as const;
