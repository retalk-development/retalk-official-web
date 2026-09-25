// Source: Native legal text — Privacy Ver.1.0

import {
  LEGAL_ADDRESS_DISCLOSURE_POLICY,
  LEGAL_CONTACT_EMAIL,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_OFFICIAL_URLS,
  LEGAL_OPERATOR,
  LEGAL_VERSION,
  type LegalDocumentContent,
} from './types';

export const PRIVACY_VERSION = LEGAL_VERSION;

export const PRIVACY_DOCUMENT: LegalDocumentContent = {
  title: 'STAMU Aphasia プライバシーポリシー',
  blocks: [
    {
      kind: 'table',
      headers: ['項目', '内容'],
      rows: [
        ['バージョン', PRIVACY_VERSION],
        ['効力発生日', LEGAL_EFFECTIVE_DATE],
      ],
    },
    {
      kind: 'heading',
      text: '1. 基本方針',
    },
    {
      kind: 'paragraph',
      text: `${LEGAL_OPERATOR}（以下「運営者」）は、モバイルアプリケーション「STAMU Aphasia」（以下「本アプリ」）において、失語症等の当事者、家族、支援者、医療従事者等の情報を適切に取り扱います。`,
    },
    {
      kind: 'paragraph',
      text: '本アプリは、医療・リハビリ用途を想定し、**個人情報の最小化**と**端末内保存**を基本とします。本ポリシーは、STAMU Aphasia Ver.1.0 時点の**実装に基づく事実**を記載します。将来の機能追加により取扱いが変更される場合は、本ポリシーを改定します。',
    },
    {
      kind: 'paragraph',
      text: '本アプリ内から、いつでも本ポリシーを閲覧できます。Ver.1.0 では、初回起動時の強制同意や、版ごとの同意記録の保存は行いません。',
    },
    {
      kind: 'heading',
      text: '2. 運営者',
    },
    {
      kind: 'table',
      headers: ['項目', '内容'],
      rows: [
        ['運営者', LEGAL_OPERATOR],
        ['問い合わせ', LEGAL_CONTACT_EMAIL],
        ['住所', LEGAL_ADDRESS_DISCLOSURE_POLICY],
      ],
    },
    {
      kind: 'table',
      headers: ['公式ページ', 'URL'],
      rows: [
        ['公式 Web サイト', LEGAL_OFFICIAL_URLS.website],
        ['プライバシーポリシー', LEGAL_OFFICIAL_URLS.privacy],
        ['利用規約', LEGAL_OFFICIAL_URLS.terms],
        ['お問い合わせ', LEGAL_OFFICIAL_URLS.contact],
        ['安全性について', LEGAL_OFFICIAL_URLS.safety],
      ],
    },
    {
      kind: 'heading',
      text: '3. STAMU Aphasia が取り扱う情報',
    },
    {
      kind: 'paragraph',
      text: '本アプリが端末内に保存し得る情報は、次のとおりです。**実装されていない項目は保存しません。**',
    },
    {
      kind: 'heading',
      text: '3.1 利用者（User）情報',
    },
    {
      kind: 'table',
      headers: ['情報', '必須/任意', '備考'],
      rows: [
        ['表示名（display name）', '必須', '氏名の入力は必須ではない'],
        ['管理用識別子（local identifier）', '任意', '施設内管理用'],
        ['利用者コード（user code）', '任意', '設定後変更不可'],
        ['訓練モード（training mode）', '自動', 'st_supported / self_guided'],
        ['内部 UUID', '自動', 'UI 非表示'],
      ],
    },
    {
      kind: 'heading',
      text: '3.2 臨床プロフィール（Clinical Profile）',
    },
    {
      kind: 'paragraph',
      text: '生年月日、発症日、利き手、性別、利用開始日、病因、失語タイプ、病変側、構音・失行・高次脳機能・身体機能・補助具に関する項目等（user_profiles）。',
    },
    {
      kind: 'heading',
      text: '3.3 生活・療養状況（living status）',
    },
    {
      kind: 'paragraph',
      text: '入院／外来／在宅等の status、入院フェーズ、適用開始日（追記履歴として保持）。',
    },
    {
      kind: 'heading',
      text: '3.4 訓練記録（Training Session）',
    },
    {
      kind: 'unordered',
      items: [
        '課題種別、開始・完了日時、実施形態（自主練習 / ST 同席等）',
        '課題設定（config）、出題 snapshot（questions）',
        '回答結果（正誤、選択肢、発話判定、書字判定）',
        '発話課題: 試行回数、ヒント使用、誤り分類、**音声認識テキスト**（認識成功時）',
        'Session 観察メモ（memo）',
        'Rehab Record との関連（任意）',
      ],
    },
    {
      kind: 'paragraph',
      text: '**音声とテキストの区別:** 本アプリは訓練発話の**録音ファイル**を保存しません。音声認識が成功した場合に限り、認識結果テキスト（recognizedText）を訓練記録の一部として端末内に保存し得ます。認識結果は、利用者の発話内容を含み得ます。',
    },
    {
      kind: 'paragraph',
      text: '**保存しないもの:** 録音ファイル、音声 blob、手書き stroke / 画像',
    },
    {
      kind: 'heading',
      text: '3.5 評価記録（Evaluation）',
    },
    {
      kind: 'paragraph',
      text: '実施済み検査結果（RCPM、TMT-A/B、Digit Span、Tapping Span、BIT、WAB 失行、FIM、SLTA 等）の得点、実施日、メモ。',
    },
    {
      kind: 'paragraph',
      text: '本アプリは検査刺激を提供せず、**実施済み結果の記録・確認**を支援します。',
    },
    {
      kind: 'heading',
      text: '3.6 Rehab Record',
    },
    {
      kind: 'paragraph',
      text: '介入の開始・終了日時、SOAP 相当メモ（S/O/A/P）、標準タグ、関連 Training Session。',
    },
    {
      kind: 'heading',
      text: '3.7 設定・プリセット',
    },
    {
      kind: 'paragraph',
      text: '見やすさ設定、課題語設定、お気に入り訓練 preset。',
    },
    {
      kind: 'heading',
      text: '3.8 専用入力欄のない情報',
    },
    {
      kind: 'unordered',
      items: [
        '氏名専用の入力項目はありません。ただし、利用者が表示名その他の自由入力欄（Session 観察メモ、Rehab Record の SOAP 相当メモ、評価メモ等）に氏名を入力した場合、その内容は端末内に保存されます。',
        '現行版には、住所・電話番号・メールアドレスを専用項目として入力する欄はありません。ただし、上記と同様の自由入力欄に利用者が自主的に入力した場合、その内容は端末内に保存され得ます。',
        '訓練発話の録音ファイル',
        '手書き stroke / 画像 blob',
      ],
    },
    {
      kind: 'heading',
      text: '4. 利用目的',
    },
    {
      kind: 'paragraph',
      text: '本アプリ内に保存された情報は、次の目的で端末内処理されます。運営者が患者・利用者データをクラウド上で取得・保存するものではありません。',
    },
    {
      kind: 'ordered',
      items: [
        '失語症等に関する**自主訓練**機能の提供',
        '**訓練結果・履歴**の表示、再開、集計',
        '**利用者情報・臨床プロフィール**の管理と表示',
        '**評価記録**の保存、一覧、比較、SLTA 表示・PDF 生成',
        '**Rehab Record**の作成、保存、カルテ転記用テキストの生成',
        '**ST Dashboard**による訓練結果の確認・分析',
        '本アプリの品質維持、不具合対応、機能改善（端末内処理を基本）',
        '法令への対応',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 では、患者・利用者データを広告、マーケティング、第三者 analytics の目的で利用しません。',
    },
    {
      kind: 'heading',
      text: '5. 保存場所',
    },
    {
      kind: 'ordered',
      items: [
        '本アプリのデータは、原則として**利用者の端末内**に保存されます。',
        '本アプリのデータは、端末内の本アプリ専用の保存領域に保存されます。',
        '運営者が運営する、患者・利用者データを同期するクラウドサーバーは、Ver.1.0 時点では**存在しません**。',
      ],
    },
    {
      kind: 'heading',
      text: '6. 外部送信',
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 時点で、運営者が本アプリから**患者・利用者データを送信する API**は実装されていません。',
    },
    {
      kind: 'table',
      headers: ['通信・処理', '内容'],
      rows: [
        [
          'アプリ更新',
          'アプリ更新の取得等のため通信が発生する場合があります。患者・利用者データを送信するための通信ではありません',
        ],
        [
          '音声認識（iOS）',
          'on-device 認識を必須とする設計。STAMU Aphasia 側から server ASR へ fallback しない',
        ],
        ['TTS', '端末内テキスト読み上げ'],
        [
          'SLTA PDF 共有',
          'ユーザーが明示的に OS 共有操作を行った場合のみ、生成 PDF が外部アプリへ渡り得る（iOS）',
        ],
        ['クリップボード', 'Rehab カルテ用テキストの端末内コピー'],
      ],
    },
    {
      kind: 'paragraph',
      text: '**注意:** 上記は Ver.1.0 時点の事実です。将来、クラウド同期、外部 AI、analytics 等を追加する場合は、本ポリシーを改定し、必要な同意を取得します。',
    },
    {
      kind: 'heading',
      text: '7. 音声・マイク',
    },
    {
      kind: 'ordered',
      items: [
        '発話を要する訓練課題（呼称、復唱、音読等）では、端末の**マイク**および**音声認識**機能を利用し得ます。',
        'iOS では、音声認識開始時に requiresOnDeviceRecognition=true を設定し、on-device 認識が利用できない場合は STAMU Aphasia 側から server モードへ再試行せず、支援者による手動判定へ移行します。',
        '本アプリは recordingOptions.persist=false を設定し、**録音ファイルを STAMU Aphasia 側で保存しません**。',
        '音声認識が成功し、非空の final transcript が得られた場合に限り、認識結果テキスト（recognizedText）を訓練記録として保存し得ます。音声そのものではなく、認識されたテキストが端末内の訓練データとして扱われます。',
        'マイク権限または音声認識権限が拒否された場合、本アプリは vendor エラーを患者向けに表示せず、手動判定を維持します。',
        'Ver.1.0 の初期公開対象は iPhone / iPad を想定しています。将来 Android 版を提供する場合、端末の音声認識サービス（端末 OS 提供）を利用する場合があります。iOS 版とは設定が異なる場合があります。',
      ],
    },
    {
      kind: 'paragraph',
      text: '**注意:** すべての対応端末で完全オフラインであることは、現時点では断定しません。',
    },
    {
      kind: 'heading',
      text: '8. 第三者提供',
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 時点で、運営者は本アプリを通じて取得した患者・利用者の訓練記録、評価記録、Rehab Record 等を、第三者へ提供する仕組みを実装していません。',
    },
    {
      kind: 'heading',
      text: '8.1 利用者による外部共有（User-initiated sharing）',
    },
    {
      kind: 'paragraph',
      text: '利用者自身が、次の手段等によりデータを外部へ送る場合は、運営者による第三者提供とは別です。',
    },
    {
      kind: 'unordered',
      items: [
        'OS Share（Share Sheet）',
        'PDF 共有（SLTA PDF 等）',
        'クリップボードへのコピー',
        'ファイル出力',
      ],
    },
    {
      kind: 'paragraph',
      text: '運営者は、利用者が自発的に行った外部共有の内容、先、タイミングを管理しません。外部共有先での取扱いは、利用者または施設の責任において確認してください。',
    },
    {
      kind: 'heading',
      text: '8.2 法令上の例外',
    },
    {
      kind: 'paragraph',
      text: '法令により第三者提供が必要となる場合は、法令の範囲内で対応します。',
    },
    {
      kind: 'heading',
      text: '9. 外部 AI',
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 時点で、本アプリは次の情報を外部 AI サービス（大規模言語モデル等）へ送信する機能を実装していません。',
    },
    {
      kind: 'unordered',
      items: [
        '患者情報',
        '訓練記録',
        '評価記録',
        'Rehab Record',
        '音声',
        '音声認識結果テキスト（recognized text）',
      ],
    },
    {
      kind: 'paragraph',
      text: '将来、外部 AI 処理を導入する場合は、本ポリシーを更新し、必要な説明および必要に応じた同意を行います。',
    },
    {
      kind: 'heading',
      text: '10. クラウド同期',
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 時点で、STAMU Aphasia 独自のクラウドへの患者・利用者データの同期または backup 機能は実装されていません。データは端末ローカルに保持されます。',
    },
    {
      kind: 'paragraph',
      text: 'アプリ更新の取得等による通信は、患者データのクラウド同期とは別の仕組みです。将来クラウド同期を導入する場合は、本ポリシーを改定します。',
    },
    {
      kind: 'heading',
      text: '11. 広告・Analytics・Tracking',
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 時点で、本アプリには次のものは含まれません。',
    },
    {
      kind: 'unordered',
      items: [
        '広告 SDK',
        '広告（advertising）',
        'tracking',
        'analytics',
        'crash reporting SDK（Sentry 等）',
      ],
    },
    {
      kind: 'paragraph',
      text: '患者・利用者データをマーケティング目的で利用する機能もありません。将来変更する場合は、本ポリシーを改定します。',
    },
    {
      kind: 'heading',
      text: '12. データ保持',
    },
    {
      kind: 'ordered',
      items: [
        '本アプリは、利用者が削除するまで、または端末からアプリを削除するまで、端末内にデータを保持します。',
        '自動的な保持期限（TTL）や、一定期間経過後の自動削除（自動 purge）機能は、Ver.1.0 時点では実装されていません。',
        'データの保管期間は、利用者または施設側による端末管理に委ねられます。運営者は、固定の保存年数を設定しません。',
      ],
    },
    {
      kind: 'heading',
      text: '13. データ削除',
    },
    {
      kind: 'table',
      headers: ['操作', '挙動'],
      rows: [
        [
          '利用者削除',
          '**論理削除**（一覧非表示）。関連する訓練・評価・Rehab・プロフィール等は端末内 DB に残存',
        ],
        ['評価記録削除', '当該評価記録を**物理削除**'],
        ['Rehab Record', '物理削除機能なし。discarded 状態で監査用に保持'],
        ['Training Session', '通常は保持。abandoned は archive 履歴'],
        ['アプリ削除', '端末からアプリデータごと削除される場合がある（OS 依存）'],
      ],
    },
    {
      kind: 'paragraph',
      text: '**完全削除について:** Ver.1.0 では、利用者単位で関連データをすべて物理削除する**完全削除機能は実装していません**。利用者削除は論理削除であり、「削除するとすべて完全に消去される」とは記載しません。将来的な完全削除機能の提供を検討しています。実装により取扱いが変更される場合は、本ポリシーを改定します。',
    },
    {
      kind: 'paragraph',
      text: 'データ削除の取扱いに関する問い合わせは、retalk.app.info@gmail.com までお願いします。Ver.1.0 では、利用者単位ですべての関連データを物理削除する機能は提供していません。',
    },
    {
      kind: 'heading',
      text: '14. Backup / Device Loss',
    },
    {
      kind: 'ordered',
      items: [
        '端末の OS 設定（iCloud Backup、端末バックアップ等）により、本アプリのデータが OS の backup 対象となり、復元され得る場合があります。運営者は、OS や外部サービスによるバックアップの実行、保存、復元を管理または保証するものではありません。',
        'iCloud Backup の対象外であること、または必ず backup されることは断定しません。STAMU Aphasia 独自の backup / restore 機能は、Ver.1.0 時点では提供していません。',
        '端末紛失・盗難・故障時、本アプリ内データが第三者にアクセスされるリスクがあります。端末のパスコード、生体認証、自動ロック、遠隔消去等は、利用者または施設の責任において設定してください。',
      ],
    },
    {
      kind: 'heading',
      text: '15. セキュリティ',
    },
    {
      kind: 'paragraph',
      text: 'Ver.1.0 時点で確認できる内容:',
    },
    {
      kind: 'table',
      headers: ['項目', '状態'],
      rows: [
        ['端末内 SQLite 保存', '実装済み'],
        ['SQLCipher / アプリ独自暗号化', '未導入'],
        ['SecureStore / Keychain', '未使用'],
        ['アプリ内 PIN / 生体認証', '未実装'],
        ['ST 領域保護', '未実装（Security 候補）'],
        ['開発ログへの個人情報出力', '方針上禁止。Release 経路では患者向け汎用文言'],
      ],
    },
    {
      kind: 'paragraph',
      text: '運営者は、合理的な範囲でセキュリティ確保に努めますが、端末内保存である以上、端末管理の不備に起因するリスクを完全に排除することはできません。',
    },
    {
      kind: 'heading',
      text: '16. 未成年者・代理利用',
    },
    {
      kind: 'ordered',
      items: [
        '本アプリは、18 歳以上に限定しません。未成年者も利用可能です。年齢や状況に応じて、保護者・家族・支援者・医療従事者等の関与のもとで利用してください。',
        '一律の年齢下限は設けません。未成年者本人が単独で全ての法的判断を行うと断定する表現は用いません。',
        '家族、支援者、医療従事者が当事者に代わって操作する場合、操作者は適法な権限と同意の下で情報を取り扱う責任を負います。',
      ],
    },
    {
      kind: 'heading',
      text: '17. 施設での利用',
    },
    {
      kind: 'paragraph',
      text: '施設で患者情報を入力する場合、運営者は患者データをクラウドで受領・管理している構造ではありません。端末内での入力、閲覧、権限、保管、backup 設定等は、利用者または施設側の運用責任において行われます。',
    },
    {
      kind: 'paragraph',
      text: '共有端末、ST 専用端末、患者本人端末等、さまざまな利用形態が存在し得ます。端末の OS パスコード、自動ロック、保管、紛失時対応、MDM、backup 設定等の端末管理は、施設または端末管理者の責任において行ってください。',
    },
    {
      kind: 'heading',
      text: '18. Privacy Policy の変更',
    },
    {
      kind: 'ordered',
      items: [
        '運営者は、法令の改正、本アプリの機能変更等に応じ、本ポリシーを変更することがあります。',
        `本ポリシーを変更する場合、原則として**アプリ内表示**および**公式 Web（${LEGAL_OFFICIAL_URLS.privacy}）への掲載**により周知します。効力発生日は周知時に定めます。`,
        '正式公開後は Web 側を最新の公開正本として管理する方向です。アプリ内には副本（bundled copy）を保持し、オフラインでも閲覧可能にします。',
        '重要な変更時に追加通知が必要かは、将来検討します。',
      ],
    },
    {
      kind: 'heading',
      text: '19. 問い合わせ',
    },
    {
      kind: 'contact',
      intro: '本ポリシーに関する問い合わせは、次までお願いします。',
      email: LEGAL_CONTACT_EMAIL,
    },
    {
      kind: 'paragraph',
      text: `お問い合わせフォーム: ${LEGAL_OFFICIAL_URLS.contact}`,
    },
    {
      kind: 'heading',
      text: '20. 効力発生日',
    },
    {
      kind: 'paragraph',
      text: `本ポリシー（${PRIVACY_VERSION}）は、${LEGAL_EFFECTIVE_DATE}から効力を生じます。`,
    },
  ],
};
