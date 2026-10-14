import { productScreens } from "@/data/product-screens";

export const homepagePoints = [
  {
    number: "01",
    title: "29の訓練課題から選べる",
    description: "6つのカテゴリ、29の課題から、状態や目的に合わせて取り組む内容を選べます。",
    tags: ["6カテゴリ", "29課題", "目的に合わせて選択"],
    screens: [productScreens.trainingCategoriesTop, productScreens.taskListTop],
  },
  {
    number: "02",
    title: "その人に合わせて調整できる",
    description: "問題数や選択肢数、課題語などを、利用者ごと・課題ごとに調整できます。",
    tags: ["問題数", "選択肢数", "課題語", "利用者別設定"],
    screens: [productScreens.trainingSetupTop, productScreens.wordSettingsList],
  },
  {
    number: "03",
    title: "練習した結果が残る",
    description: "Training ResultとPatient Recordで、実施履歴や正答率を本人の振り返りにつなげます。",
    tags: ["Training Result", "Patient Record", "実施履歴", "正答率"],
    screens: [productScreens.trainingResult, productScreens.patientRecord],
  },
  {
    number: "04",
    title: "STの支援につなげられる",
    description: "ST Dashboard、課題分析、評価、SLTA、Rehab Recordを同じ利用者の流れで確認できます。",
    tags: ["ST Dashboard", "task analysis", "Evaluation / SLTA", "Rehab Record"],
    screens: [productScreens.stDashboard, productScreens.stTaskAnalysisTop],
  },
] as const;

export const concernGroups = [
  {
    label: "失語症のある方・ご家族",
    items: [
      "自宅でもことばの練習をしたい",
      "何を練習すればいいか分からない",
      "紙の教材だけでは続けにくい",
      "自分がどれくらい練習したか分からない",
    ],
  },
  {
    label: "言語聴覚士・支援者",
    items: [
      "自主練習用の教材準備に時間がかかる",
      "患者さんがどれくらい自主練習したか把握しづらい",
      "訓練結果の記録・集計が手作業",
      "訓練・評価・記録が別々になっている",
    ],
  },
] as const;

export const usageSteps = [
  { number: "1", title: "App Storeから無料でダウンロード", description: "iPhoneまたはiPadにインストールします。" },
  { number: "2", title: "利用者を登録", description: "必要な情報を設定して利用を始めます。" },
  { number: "3", title: "訓練を選んでスタート", description: "目的に合った課題と設定を選びます。" },
  { number: "4", title: "結果を振り返る", description: "Patient RecordやST Dashboardで確認します。" },
] as const;

export const usageScreens = [
  { step: "02", title: "利用者を登録", screen: productScreens.userInfo },
  { step: "03", title: "訓練をスタート", screen: productScreens.trainingQuestion },
  { step: "04", title: "結果を振り返る", screen: productScreens.patientRecord },
] as const;

// Grouped so a separate, verified STAMU clinical-evidence collection can be added later
// without mixing it into the currently published third-party research evidence.
export const researchEvidenceGroups = [
  {
    id: "prior-research",
    items: [
      {
        region: "海外・英国",
        type: "ランダム化比較試験",
        title: "自宅で行うコンピューター訓練",
        summary: "Big CACTUS試験では、通常ケアに自主的なコンピューター訓練を加えた群で、個人に関連する訓練語の呼称成績が向上しました。",
        limitation: "会話への般化は確認されず、訓練した語の成績と日常コミュニケーションは分けて考える必要があります。",
        citation: "Palmer R, et al. Lancet Neurology. 2019.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31397288/",
      },
      {
        region: "海外・国際",
        type: "システマティックレビュー",
        title: "モバイル技術を用いた失語症リハビリ",
        summary: "2024年のレビューは15研究を検討し、モバイル技術を用いた介入には言語機能を支える可能性があると報告しました。",
        limitation: "研究方法や対象、課題が多様で、領域ごとの効果を確かめる質の高い研究がさらに必要とされています。",
        citation: "Jiang Z, et al. Frontiers in Neurology. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38933323/",
      },
      {
        region: "海外・ノルウェー",
        type: "パイロットRCT",
        title: "ビデオ通話で届ける遠隔言語療法",
        summary: "脳卒中後失語症を対象に、通常ケアへ週5時間・4週間のビデオ会議による言語療法を追加し、一部の言語成績と遠隔提供の可能性を検討しました。",
        limitation: "少人数のパイロット研究で、主要評価の呼称では群間差が確認されず、結果を確かめる大規模試験が必要とされています。",
        citation: "Øra HP, et al. Clinical Rehabilitation. 2020.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31903800/",
      },
    ],
  },
] as const;

export const stFeatureCards = [
  { title: "ST Dashboard", copy: "訓練履歴、実施状況、正答率の推移を利用者ごとに振り返ります。" },
  { title: "Evaluation / SLTA", copy: "評価記録、SLTAの入力、2時点比較、PDF出力を支えます。" },
  { title: "Rehab Record / SOAP", copy: "実施訓練と観察をまとめ、SOAPやカルテ用テキストを確認できます。" },
  { title: "Research Mode", copy: "研究用訓練・評価・設定・履歴と、研究CSV書き出しを用意しています。" },
] as const;

// These answers intentionally describe only current, publicly approved Ver.1.2.0 capabilities.
export const faqItems = [
  {
    question: "無料で使えますか？",
    answer: "はい。STAMU Aphasiaは無料で利用できます。App Storeからダウンロードしてください。",
  },
  {
    question: "どんな端末で使えますか？",
    answer: "現在の公開版はiPhoneとiPadに対応しています。Android版は公開していません。対応OSの詳細はApp Storeでご確認ください。",
  },
  {
    question: "どんな訓練がありますか？",
    answer: "6つのカテゴリに29の訓練課題があります。ことばを聞く・読む・話す・書くなどの課題から選び、問題数や選択肢数、課題語などを調整できます。",
  },
  {
    question: "患者情報はクラウドへ送られますか？",
    answer: "STAMU Aphasia独自の患者データクラウドはなく、患者・臨床情報は端末内保存を基本としています。公式お知らせの取得など公開情報の通信はあります。詳しくは安全性ページをご確認ください。",
  },
  {
    question: "STも利用できますか？",
    answer: "はい。ST Dashboard、課題分析、評価・SLTA、Clinical Profile、Rehab Record、Research Modeなど、言語聴覚士による支援や記録を補助する機能があります。",
  },
  {
    question: "医療機器・診断アプリですか？",
    answer: "いいえ。STAMU Aphasiaは診断、予後予測、治療判断を行うものではなく、電子カルテの代替でもありません。訓練・記録・評価・支援を補助するアプリです。",
  },
] as const;
