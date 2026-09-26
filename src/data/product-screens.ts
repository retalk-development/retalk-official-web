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
  launch: screen("launch-screen.jpg", "起動", "STAMU Aphasiaアプリの起動画面", "center center"),
  patientHomeTop: screen(
    "patient-home-top.jpg",
    "ホーム",
    "STAMU Aphasiaの利用者ホームで、いつもの訓練と記録を選ぶ画面",
  ),
  patientHomeBottom: screen(
    "patient-home-bottom.jpg",
    "ホーム下部",
    "STAMU Aphasiaの利用者ホーム下部。ST・支援者メニューと、STAMU Aphasiaについて・プライバシーポリシー・利用規約への導線",
  ),
  trainingCategoriesTop: screen(
    "training-categories-top.jpg",
    "カテゴリ",
    "STAMU Aphasiaの失語症訓練カテゴリ一覧画面",
  ),
  trainingCategoriesBottom: screen(
    "training-categories-bottom.jpg",
    "カテゴリ下部",
    "STAMU Aphasiaの失語症訓練カテゴリ一覧下部",
  ),
  taskListTop: screen(
    "task-list-top.jpg",
    "課題",
    "STAMU Aphasiaで単語の理解・表出に取り組む訓練課題一覧画面",
  ),
  taskListBottom: screen(
    "task-list-bottom.jpg",
    "課題下部",
    "STAMU Aphasiaの単語理解・表出の訓練課題一覧下部",
  ),
  trainingSetupTop: screen(
    "training-setup-top.jpg",
    "設定",
    "STAMU Aphasiaで問題数や選択肢数を選ぶ訓練設定画面",
  ),
  trainingSetupBottom: screen(
    "training-setup-bottom.jpg",
    "設定下部",
    "STAMU Aphasiaで出題語と課題語を選ぶ訓練設定画面下部",
  ),
  trainingQuestion: screen(
    "training-question.jpg",
    "練習する",
    "STAMU Aphasiaで言葉を聞いて絵を選ぶ失語症訓練画面",
  ),
  trainingCorrect: screen(
    "training-correct.jpg",
    "正答",
    "STAMU Aphasiaで言葉を聞いて絵を選ぶ訓練の正答画面",
  ),
  trainingResult: screen(
    "training-result.jpg",
    "記録する",
    "STAMU Aphasiaの訓練終了後に成績を確認する結果画面",
  ),
  patientRecord: screen(
    "patient-record.jpg",
    "振り返る",
    "STAMU Aphasiaで利用者がこれまでの自主練習結果を確認する画面",
  ),
  stDashboard: screen(
    "st-dashboard-overview.jpg",
    "支援につなぐ",
    "STAMU AphasiaのSTダッシュボードで訓練履歴と成績を確認する画面",
  ),
  stTaskAnalysisTop: screen(
    "st-task-analysis-top.jpg",
    "分析",
    "STAMU AphasiaのST向け課題分析で利用状況と正答率推移を確認する画面",
  ),
  stTaskAnalysisBottom: screen(
    "st-task-analysis-bottom.jpg",
    "履歴",
    "STAMU AphasiaのST向け課題分析で正答率推移と最近の訓練を確認する画面",
  ),
  stSupportMenu: screen(
    "st-support-menu.jpg",
    "支援者メニュー",
    "STAMU AphasiaのST・支援者向け機能メニュー画面",
  ),
  wordSettingsList: screen(
    "word-settings-list.jpg",
    "課題語を選ぶ",
    "STAMU Aphasiaの課題語設定で訓練に使う語を選ぶ画面",
  ),
  sltaDetailGraph: screen(
    "slta-detail-graph.jpg",
    "SLTAの記録",
    "STAMU AphasiaのSLTA評価詳細でプロフィールグラフを確認する画面",
  ),
  sltaDetailTop: screen(
    "slta-detail-top.jpg",
    "評価詳細",
    "STAMU AphasiaのSLTA評価詳細で検査日とプロフィールを確認する画面",
  ),
  evaluationRecords: screen(
    "evaluation-records-top.jpg",
    "評価記録",
    "STAMU Aphasiaの評価記録で比較する検査結果を選ぶ画面",
  ),
  sltaComparisonTop: screen(
    "slta-comparison-top.jpg",
    "2時点比較",
    "STAMU AphasiaでSLTA評価を2時点比較するグラフ画面",
  ),
  sltaComparisonDiff: screen(
    "slta-comparison-diff.jpg",
    "差分",
    "STAMU AphasiaでSLTA評価の2時点差分を確認する画面",
  ),
  rehabRecordList: screen(
    "rehab-record-list.jpg",
    "リハビリ記録",
    "STAMU Aphasiaの過去のリハビリ記録一覧画面",
  ),
  rehabRecordTop: screen(
    "rehab-record-detail-top.jpg",
    "訓練記録",
    "STAMU Aphasiaのリハビリ記録で基本情報と実施した訓練を確認する画面",
  ),
  rehabRecordSoap: screen(
    "rehab-record-detail-soap.jpg",
    "SOAP",
    "STAMU Aphasiaのリハビリ記録でSOAPを確認する画面",
  ),
  rehabRecordKarte: screen(
    "rehab-record-detail-karte.jpg",
    "カルテ用テキスト",
    "STAMU Aphasiaのリハビリ記録からまとめたカルテ用テキスト画面",
  ),
  userInfo: screen(
    "user-info-overview.jpg",
    "プロフィール",
    "STAMU Aphasiaの利用者情報で基本情報と臨床プロフィールを確認する画面",
  ),
  examSelect: screen(
    "exam-select.jpg",
    "検査を選ぶ",
    "STAMU Aphasiaで記録する評価検査を選ぶ画面",
  ),
} as const;
