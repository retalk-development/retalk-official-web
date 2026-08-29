export type ProductScreen = {
  src: string;
  alt: string;
  label: string;
  objectPosition?: string;
};

const screen = (
  filename: string,
  label: string,
  alt: string,
  objectPosition = "center top",
): ProductScreen => ({
  src: `/product/${filename}`,
  label,
  alt,
  objectPosition,
});

/**
 * Temporary development screenshots.
 * Replace files in public/product or update this map when final Native captures arrive.
 * Homepage sections never reference screenshot paths directly.
 */
export const productScreens = {
  launch: screen("launch-screen.jpg", "起動", "Re:Talkの起動画面", "center center"),
  patientHomeTop: screen(
    "patient-home-top.jpg",
    "ホーム",
    "利用者ホーム上部。いつもの訓練と記録への導線",
  ),
  patientHomeBottom: screen(
    "patient-home-bottom.jpg",
    "ホーム下部",
    "利用者ホーム下部。ST・支援者メニューへの導線",
  ),
  trainingCategoriesTop: screen(
    "training-categories-top.jpg",
    "カテゴリ",
    "6つの訓練カテゴリ一覧の上部",
  ),
  trainingCategoriesBottom: screen(
    "training-categories-bottom.jpg",
    "カテゴリ下部",
    "6つの訓練カテゴリ一覧の下部",
  ),
  taskListTop: screen(
    "task-list-top.jpg",
    "課題",
    "単語を理解・表出する課題一覧の上部",
  ),
  taskListBottom: screen(
    "task-list-bottom.jpg",
    "課題下部",
    "単語を理解・表出する課題一覧の下部",
  ),
  trainingSetupTop: screen(
    "training-setup-top.jpg",
    "設定",
    "問題数や選択肢数を選ぶ訓練設定画面",
  ),
  trainingSetupBottom: screen(
    "training-setup-bottom.jpg",
    "設定下部",
    "出題語と課題語を選ぶ訓練設定画面下部",
  ),
  trainingQuestion: screen(
    "training-question.jpg",
    "練習する",
    "言葉を聞いて絵を選ぶ訓練の未回答画面",
  ),
  trainingCorrect: screen(
    "training-correct.jpg",
    "正答",
    "言葉を聞いて絵を選ぶ訓練の正答後画面",
  ),
  trainingResult: screen(
    "training-result.jpg",
    "記録する",
    "訓練終了後の結果画面",
  ),
  patientRecord: screen(
    "patient-record.jpg",
    "振り返る",
    "利用者がこれまでの練習結果を確認する、あなたの記録画面",
  ),
  stDashboard: screen(
    "st-dashboard-overview.jpg",
    "支援につなぐ",
    "STダッシュボードの利用状況と最近の訓練",
  ),
  stTaskAnalysisTop: screen(
    "st-task-analysis-top.jpg",
    "分析",
    "課題分析の利用状況と正答率推移",
  ),
  stTaskAnalysisBottom: screen(
    "st-task-analysis-bottom.jpg",
    "履歴",
    "課題分析の正答率推移と最近の訓練",
  ),
  stSupportMenu: screen(
    "st-support-menu.jpg",
    "支援者メニュー",
    "ST・支援者向け機能のメニュー",
  ),
  wordSettingsFilter: screen(
    "word-settings-filter.jpg",
    "課題語を絞る",
    "課題語設定の検索、カテゴリ、頻度フィルター",
  ),
  wordSettingsList: screen(
    "word-settings-list.jpg",
    "課題語を選ぶ",
    "訓練で使用する課題語の一覧",
  ),
  sltaDetailGraph: screen(
    "slta-detail-graph.jpg",
    "SLTAの記録",
    "SLTA評価詳細のプロフィールグラフ",
  ),
  sltaDetailTop: screen(
    "slta-detail-top.jpg",
    "評価詳細",
    "SLTA評価詳細の検査日とプロフィール",
  ),
  evaluationRecords: screen(
    "evaluation-records-top.jpg",
    "評価記録",
    "評価記録で比較対象を選ぶ画面",
  ),
  sltaComparisonTop: screen(
    "slta-comparison-top.jpg",
    "2時点比較",
    "SLTAの2時点比較グラフ",
  ),
  sltaComparisonDiff: screen(
    "slta-comparison-diff.jpg",
    "差分",
    "SLTAの2時点比較の差分一覧",
  ),
  rehabRecordList: screen(
    "rehab-record-list.jpg",
    "リハビリ記録",
    "過去のリハビリ記録一覧",
  ),
  rehabRecordTop: screen(
    "rehab-record-detail-top.jpg",
    "訓練記録",
    "リハビリ記録詳細の基本情報と実施した訓練",
  ),
  rehabRecordSoap: screen(
    "rehab-record-detail-soap.jpg",
    "SOAP",
    "リハビリ記録詳細のSOAP表示",
  ),
  rehabRecordKarte: screen(
    "rehab-record-detail-karte.jpg",
    "カルテ用テキスト",
    "リハビリ記録からまとめたカルテ用テキスト",
  ),
  userInfo: screen(
    "user-info-overview.jpg",
    "プロフィール",
    "利用者情報の基本情報と臨床プロフィール",
  ),
  examSelect: screen(
    "exam-select.jpg",
    "検査を選ぶ",
    "記録する評価検査を選ぶ画面",
  ),
} as const;
