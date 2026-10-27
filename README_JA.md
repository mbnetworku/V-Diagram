<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/v-diagram-lockup-dark.svg" />
    <img src="docs/assets/v-diagram-lockup-light.svg" alt="V-Diagram" width="440" height="121" />
  </picture>
</p>
<h3 align="center">理解したいこと、計画したいこと、共有したいことを、触れるビジュアルに変えます。</h3>

<p align="center"><img src="docs/assets/v-diagram-readme-hero.png" alt="V-Diagram — インタラクティブな図" width="960" /></p>

<p align="center">アイデア、疑問、計画のどれから始めても構いません。AI エージェントに説明すれば、V-Diagram が探索・カスタマイズ・共有できるインタラクティブな HTML を生成します。旅行の行程や学習マップから複雑なシステムまで、あなた自身のものに作り込めます。</p>

<p align="center">
  <a href="https://mbnetworku.github.io/V-Diagram/gallery.html"><strong>ライブデモ</strong></a> &nbsp;·&nbsp;
  <a href="#start"><strong>使ってみる</strong></a> &nbsp;·&nbsp;
  <a href="https://mbnetworku.github.io/V-Diagram/guide.html"><strong>シナリオガイド</strong></a> &nbsp;·&nbsp;
  <a href="./README.md"><strong>English</strong></a> &nbsp;·&nbsp;
  <a href="./README_ZH.md"><strong>简体中文</strong></a>
</p>

<p align="center">
  <a href="https://github.com/mbnetworku/V-Diagram/stargazers"><img src="https://img.shields.io/github/stars/mbnetworku/V-Diagram?style=flat-square&amp;color=E5B650&amp;logo=github&amp;label=Stars" alt="GitHub stars" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-22c55e?style=flat-square" alt="Apache License 2.0" /></a>
  <a href="#インストール方法"><img src="https://img.shields.io/badge/works_with-Claude_Code_%7C_Codex_%7C_Cursor_%7C_OpenCode-7C3AED?style=flat-square" alt="Works with Claude Code, Codex, Cursor, and OpenCode" /></a>
  <a href="CHANGELOG.md#320--2026-10-18"><img src="https://img.shields.io/badge/version-3.2.0-0891b2?style=flat-square" alt="Stable version 3.2.0" /></a>
</p>

## 実際の V-Diagram

<!-- v-diagram-launch-video -->

https://github.com/user-attachments/assets/78570807-ba1d-4737-953f-55504a378a87

**ひと言で、リポジトリを可視化。** 約35秒の英語デモで、図の操作、ソースコードへのリンク、経路の追跡をご覧ください。[インタラクティブな作例を試す ↗](https://mbnetworku.github.io/V-Diagram/gallery.html)

<a id="start"></a>

### インストールして、アイデアを説明する

Cursor、Claude Code、Codex CLI、OpenCode で利用できます。その他の連携については下記のインストール方法を参照してください。

```bash
npx skills add mbnetworku/V-Diagram -g
```

エージェントにこう送ってください:

```text
Use V-Diagram to diagram a web request: Browser calls the API,
the API checks Redis, and a cache miss queries PostgreSQL and fills the cache.
```

そのまま「認証を追加して」「キャッシュミスの経路を強調して」「ライトテーマに切り替えて」と続けられます。

**リポジトリは不要です:** 説明から始めることも、リポジトリを読ませてソースに基づくアーキテクチャ図を作らせることもできます。

[エージェントを選ぶ](https://mbnetworku.github.io/V-Diagram/start.html?agent=cursor&type=architecture) · [インストールの詳細と更新チェック](#クイックスタート)

## 質問すると、1 ページで答えが返る

答えがいつも 1 枚の図とは限りません。エージェントに「1 ページで答えて」と頼むと、V-Diagram は **explainer** を作ります。結論を先に示し、質問ごとのパネルで、表・手順・チャート・コード・検証済みの図を使って理由を説明します。

[![explainer の例：結論が先頭にあり、手順がそれを説明するシーケンス図の横に並ぶ](docs/assets/explainer-tls-en.png)](https://mbnetworku.github.io/V-Diagram/cases/explainer/tls-first-visit.html)

- **結論が先。** 答えと理由が先頭に来て、各パネルは 1 つの質問に答えます。
- **図と文章が連動する。** 手順は説明対象の図の横に並び、読んでいる手順に合わせて図の該当部分が光ります。ノードをクリックすると完全なインタラクティブ表示が開きます。
- **確かめられる。** 主張には番号付きの出典が付き、リポジトリの抜粋は特定のコミットに固定され、ソースカードで開けます。
- **共有しやすい。** 1 つの HTML ファイルに 4 つのスタイルとライト／ダークテーマ。PNG・WebP・JPG の縦長画像や PDF 印刷で書き出せます。どのパネルにも追加の質問ができ、エージェントはそのパネルだけを直せます。

```text
V-Diagram で 1 ページにまとめて答えて：API の P99 が 80 ms から 600 ms に上がったが、
平均はほとんど変わらない。考えられる原因と調べ方は？
```

ライブ例：[初めての HTTPS 接続（英語）](https://mbnetworku.github.io/V-Diagram/cases/explainer/tls-first-visit.html) · [P99 レイテンシ（中国語）](https://mbnetworku.github.io/V-Diagram/cases/explainer/p99-tail-latency.html) · [V-Diagram の finalize をリポジトリから読む（中国語）](https://mbnetworku.github.io/V-Diagram/cases/explainer/finalize-delivery.html) · [初めての賃貸チェックリスト（中国語）](https://mbnetworku.github.io/V-Diagram/cases/explainer/first-rental.html)

## 伝えたいことを見せる

| エージェントのワークフローを説明する | キャッシュミスを追う | サービス間の関係を調べる |
|---|---|---|
| [![プランナーから下流をすべてたどるエージェントワークフロー](docs/assets/v-diagram-demo-reach.png)](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/agent-tool-call.workflow.html?theme=dark&present=1#focus=planner&reach=downstream) | [![Web アプリから Postgres への経路を示すキャッシュミスのシーケンス](docs/assets/v-diagram-demo-route.png)](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/cache-miss.sequence.html?theme=dark&present=1#route=web~db) | [![バックエンドとデータベースのロールを比較する本番アーキテクチャ](docs/assets/v-diagram-demo-lens.png)](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/production-deployment.architecture.html?theme=dark&present=1#lens=backend~database) |
| 1 つのステップから下流をすべてたどります。 | Web アプリからデータベースまでの経路を強調します。 | 記述されたバックエンドとデータベースの接続に絞って見ます。 |

[Proof Lab](https://mbnetworku.github.io/V-Diagram/gallery.html) には、チェックイン済みの 11 シナリオすべてと、その JSON ソース、検証レシートが含まれています。

### 実際のリポジトリを理解する

<sub>CODE → DIAGRAM · ソースに基づくシステムマップ</sub>

[![公開リポジトリ mco-org/mco から生成した MCO ランタイムアーキテクチャ](docs/assets/mco-runtime-share-card.png)](https://mbnetworku.github.io/V-Diagram/cases/mco-runtime.architecture.html?theme=dark&present=1)

V-Diagram は [`mco-org/mco`](https://github.com/mco-org/mco) の `9f1a1cf` を解析し、この検証済みマップを生成しました。**[開く ↗](https://mbnetworku.github.io/V-Diagram/cases/mco-runtime.architecture.html?theme=dark&present=1)** · [到達範囲をトレース ↗](https://mbnetworku.github.io/V-Diagram/cases/mco-runtime.architecture.html?theme=dark#focus=router&reach=downstream) · [型付きソース](docs/cases/mco-runtime.architecture.json)

### 拡張しやすい。自分のものにする方法はいくつもある。

<sub>COMMUNITY STORIES · ユーザーが共有してくれた事例の一部</sub>

**図ができたあとも作り続けられます。** V-Diagram はオープンソースで、出力は単体で動く HTML です。エージェントに頼んで手を加えたり、役立つリンクをつないだり、自分のワークフロー向けのインタラクションを足したりできます。コミュニティの作例はチームのコラボレーション、旅行の計画、法令引用のチェック、契約レビュー、インシデントの振り返りにまで広がっています。ここに挙げたのはその一部です。

あるユーザーは手描きのマルチエージェント構成図から始めてインタラクティブな図に変え、さらに会話を重ねて Kimi の実行プールを追加しました。別のユーザーはエージェントにプロジェクトを読ませ、できあがったアーキテクチャを Feishu や DingTalk に持ち込んでチームで議論しています。

上海 CityWalk のガイドを 4 日間の行程表に変えたユーザーもいます。日ごとに切り替え、立ち寄り先を確認し、Amap・Xiaohongshu・Dianping へ飛べます。作者は到着時のチェックインや立ち寄り先のメモも追加し、旅行中に使える小さなツールに仕立てました。これらの拡張は、この成果物のためにコミュニティの作者自身が加えたものです。

**[▶ インタラクティブな上海 CityWalk を見る](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)**

[![コミュニティが作成した 4 日間の上海 CityWalk 行程表](docs/assets/community/shanghai-citywalk.png)](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)

**[▶ インタラクティブ版を試す](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)** · D1〜D4 を切り替え、場所をクリックして探索できます。

<sub>コミュニティ成果物 · 上海 CityWalk · 4 日分のルートと場所のリンク</sub>

### ダウンロードして、開いて、探索する

出力は単体で完結する HTML ファイルです。ダウンロードしてブラウザで開けば、その成果物に含まれるノードの詳細と経路の探索をそのまま使えます。閲覧に V-Diagram のインストールは必要ありません。HTML を誰かに送れば操作性もそのまま届きます。外部サイトや地図のリンクにはネットワーク接続が必要です。

**[上海 CityWalk を見る ↗](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)** · **[HTML をダウンロード ↓](https://github.com/mbnetworku/V-Diagram/raw/refs/heads/main/docs/cases/community/shanghai-citywalk.html)**

<sub>D1〜D4 の切り替え、場所カードを開く、地図リンクをたどる、といった操作を試してみてください。時刻や場所の情報は作者の元の行程に基づいています。</sub>

## プレビュー

<details>
<summary>テーマ、エクスポート、シェアカード</summary>

同じ図を 2 つのテーマで、ワンクリック切り替え:

| ダーク | ライト |
|---|---|
| ![ダークテーマ](docs/assets/v-diagram-dark.png) | ![ライトテーマ](docs/assets/v-diagram-light.png) |

Export メニューから PNG をクリップボードにコピーしたり、静止画・モーション形式でダウンロードできます:

![Export メニュー](docs/assets/v-diagram-menu.png)

ルートをトレースしたあと、**Export → Route Share Card** を選ぶと、その記述済みパスを 1200×630 の PNG としてダウンロードできます。図全体も文脈として保持されます。

![Users から API Server への正確な経路を、アーキテクチャ全体を文脈として保持したまま示す Route Share Card](docs/assets/v-diagram-route-share-card.png)

記述された `Upstream` / `Downstream` の到達範囲をトレースしたあと、**Export → Reach Share Card** はランタイム上の影響を主張することなく、その読み取り結果をそのまま切り出します。

![Command Router からの記述済み関係を示す MCO の下流 Reach Share Card](docs/assets/mco-runtime-reach-share-card.png)

完全なビューアを試すには、[`examples/web-app.html`](examples/web-app.html) をローカルで開いてください。

</details>

## クイックスタート

**現在の安定版:** `v3.2.0`。[変更履歴](CHANGELOG.md#320--2026-10-18)を参照してください。

### 1. インストール

```bash
npx skills add mbnetworku/V-Diagram -g
```

<details>
<summary>その他のインストール方法と更新チェックの詳細</summary>

Cursor に明示的・非対話的にインストールする場合:

```bash
npx -y skills add mbnetworku/V-Diagram --skill v-diagram --agent cursor --global --copy --yes
```

インストールせずに試す場合:

```bash
npx skills use mbnetworku/V-Diagram@v-diagram --agent codex
```


[エージェント切り替え](https://mbnetworku.github.io/V-Diagram/start.html?agent=cursor&type=architecture)は `cursor`、`codex`、`claude-code`、`opencode` に対応しています。

V-Diagram は固定の安定版マニフェストを GET して任意の更新リマインダーを表示することがありますが、更新をダウンロードしたりインストールしたりすることはありません。チェックに成功すると次回まで約 24 時間（±20%）待機し、失敗した場合はアクティブに使用していれば 6 時間後、その後は 24 時間後に再試行します。サーバーが受け取るのは通常の HTTP メタデータ（IP と時刻）だけで、バージョン、Agent、プロジェクトデータ、プロンプト、アカウント／デバイス ID、ETag は送信されません。更新するかどうか、いつ更新するかは常にあなたが決めます。`ARCHIFY_UPDATE_CHECK_DISABLED=1` を設定すると、ネットワーク通信とリマインダー状態の書き込みを無効化できます。

</details>

### 2. 説明から始める — リポジトリは不要

```text
Use V-Diagram to draw: Browser -> API -> Redis cache -> PostgreSQL fallback.
```

ソースを根拠にしたい場合は、リポジトリを開いてこう依頼します:

```text
Analyze this repository, then use v-diagram to create a high-level runtime architecture diagram.
Show 8–12 core components, one primary path, external dependencies, and trust boundaries.
Put supporting detail in cards instead of adding more edges.
```

### 3. チャットで調整する

`add Redis`、`move auth to the left`、`highlight the rollback path` のように、焦点を絞った依頼を続けてください。V-Diagram は型付きソースを保持しているため、狙った箇所だけを反復できます。

## 適切な図を選ぶ

<details>
<summary>10 種類の図、アーキテクチャの比較、サンプル</summary>


| 種類 | 向いている対象 | プロンプトに含めるもの |
|---|---|---|
| **Architecture** | コンポーネント、サービス、ストレージ、境界 | スコープ、主要コンポーネント、主経路 |
| **Workflow** | CI/CD、承認、ツール呼び出し、ランブック | 参加者、順序、分岐、例外 |
| **Sequence** | API 呼び出し、キャッシュフォールバック、認証、非同期トレース | 呼び出し元、呼び出し先、戻り、タイミング |
| **Data Flow** | パイプライン、リネージ、PII、コンシューマ | ソース、変換、ストア、境界 |
| **Lifecycle** | 状態、リトライ、待機、終端結果 | 状態、イベント、リトライとキャンセルの経路 |
| **ERD** | データベーススキーマ: テーブル、カラム、キー、カーディナリティ | テーブル、各カラムと型、主キー・外部キー・ユニークキー、リレーションのカーディナリティ |
| **Class** | クラス、インターフェース、主要メンバー、型同士の関係 | 型、主要メンバー、継承とインターフェース実装、コンポジション、依存 |
| **Tree** | 親が 1 つの階層: リポジトリ、モジュール、機能の分解 | ルート、階層、各ブランチの中身 |
| **Timeline** | いつ何が起きたか: インシデントレビュー、リリース履歴 | タイムゾーン付きのタイムスタンプ、イベント、ソースレーン、時刻が実測か説明用か |
| **Waterfall** | 1 つのリクエストやエージェント実行の時間の内訳 | スパン、開始時刻と所要時間、ネスト、所要時間が実測か説明用か |

Architecture の任意プロファイル `deployment-ownership` は、記述されたオーナー、リージョン配置、データベースのプライベートスコープ、名前付きの境界越えが欠けている場合は fail-closed で停止します。暗黙的に有効化されることはなく、ライブのインフラを検査することもありません。[検証済みのデプロイ実証](https://mbnetworku.github.io/V-Diagram/gallery.html#proof-deployment-ownership)を参照してください。

設計や PR のレビューでは、Architecture Delta が検証済みの Before / Delta / After スナップショットを機械可読なレシート付きで比較します。記述された変更を選ぶか、有限でビューア専用の Review を 1 つ再生してください。影響度・リスク・マージ安全性を推測することはありません。

`node v-diagram/bin/v-diagram.mjs compare architecture base.json head.json architecture-delta.html --json`

[![追加・削除・変更・移動された記述済みの事実を示す Architecture Delta](docs/assets/architecture-delta-proof.jpg)](examples/checkout-platform-delta.html)

どれを選べばよいか分からない場合は、[インタラクティブなシナリオガイド](https://mbnetworku.github.io/V-Diagram/guide.html)を使うか、依存関係ゼロの CLI に尋ねてください:

```bash
node v-diagram/bin/v-diagram.mjs guide "Show an API request with Redis cache miss"
node v-diagram/bin/v-diagram.mjs guide "Map Kafka topics, consumer groups, replay, and DLQ" --json
```

Workflow はレーンをまたいでもハッピーパスを明確に保ちます:

![Workflow の例](docs/assets/v-diagram-workflow.png)

Sequence は 1 つのやり取りを時間軸で説明します:

![Sequence の例](docs/assets/v-diagram-sequence.png)

Data Flow はデータの移動と機密性の境界を明示します:

![Data Flow の例](docs/assets/v-diagram-dataflow.png)

Lifecycle は進行、待機、リトライ、終端結果を切り分けます:

![Lifecycle の例](docs/assets/v-diagram-lifecycle.png)

3.1 で ERD、Class、Tree、Timeline、Waterfall が追加されました。

ERD は、テーブル、すべてのカラムとキー、リレーションのカーディナリティをまとめて示します:

![ERD の例: customer、order、payment、inventory、product、order_item テーブルをドメインごとにまとめた注文管理スキーマ](docs/assets/v-diagram-erd.png)

Class は契約、主要メンバー、どの型がそれに依存し実装しているかを示します:

![Class の例: OrderService が PaymentGateway インターフェースに依存し、カードとウォレットのゲートウェイが実装する](docs/assets/v-diagram-class.png)

Tree は機能の分解のような、親が 1 つの包含関係を示します:

![Tree の例: 注文、決済、運用の機能に分解された決済プラットフォーム](docs/assets/v-diagram-tree.png)

Timeline はイベントを実時間に比例した 1 本の時間軸に置き、ソースごとにレーンを分けます:

![Timeline の例: リリース、監視、対応のイベントを 1 本の時間軸に並べた説明用の決済障害](docs/assets/v-diagram-timeline.png)

Waterfall はネストや重なりのあるスパンのどこで時間がかかったかを示します:

![Waterfall の例: 在庫照会と割引計算が並行して走るチェックアウトリクエストの説明用の所要時間](docs/assets/v-diagram-waterfall.png)

サンプルを開く: [`ERD`](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/orders.erd.html) · [`Class`](examples/class-payments-rendered.html) · [`Tree`](examples/tree-payment-platform-rendered.html) · [`Timeline`](examples/timeline-payment-incident-rendered.html) · [`Waterfall`](examples/waterfall-checkout-request-rendered.html)。Timeline と Waterfall の例は説明用のデータを使用しています。ログやトレースに基づく時刻や所要時間だけを実データとして扱ってください。

Architecture の例: [`web-app`](examples/web-app.html) · [`V-Diagram pipeline`](examples/v-diagram-repo.html) · [`grid placement`](examples/v-diagram-repo-grid.html) · [`desktop agent`](examples/maka-architecture.html)

</details>

## V-Diagram を選ぶ理由

| 構造を理解する | ストーリーをたどる |
|---|---|
| コードや説明から、コンポーネント、ワークフロー、関係を整理します。 | ノードを探索し、経路をたどり、任意のビューをリンクで共有します。 |
| **自分のやり方で拡張する** | **結果を共有する** |
| 編集可能なソースを保持したまま、オープンソースのコードや生成された HTML に独自のインタラクションやユースケースを積み上げられます。 | 単体で完結する HTML ファイルを共有するか、画像・動画・シェアカードとして書き出せます。 |

<details>
<summary>この体験を支えているエンジニアリング</summary>


- **汎用オートレイアウトではなくレイアウトの判断** — 階層、余白、経路、強調をエージェントが選択します。共有される自動接続点は決定論的に分散し、1 点に矢印が集中することはありません。
- **型付き JSON IR** — レンダラーが担うすべてのモードにスキーマと再現可能なソースがあります。
- **提供前のアトミックな検証** — スキーマ、レイアウト、HTML/SVG、経路、ラベルと経路のクリアランスのすべてのチェックに合格して初めて、ショーケース成果物が直前の正常な出力を置き換えます。
- **失敗には修復レシートが付く** — `validate --json` と `deliver --json` は、Node のスタックトレースや当てずっぽうのリトライではなく、安定したルールコード、対象、計測された根拠、サポートされている修復手段のみを返します。
- **last-good のライブプレビュー** — 任意のデスクトップループが 1 つの JSON ファイルを監視し、最新の候補がすべてのゲートを通過したときだけ更新します。保存が不完全または不正な場合は、直前の検証済み図を表示し続けます。
- **誠実なインタラクション** — フォーカス、上流/下流の到達範囲、正確な経路、ロール比較、ストーリーは、記述済みのノードと関係のみを再利用し、トポロジーを捏造したりランタイム上の影響を主張したりしません。
- **ソース根拠は要求されたときだけ** — 根拠付きの Architecture ノードは自らを `SRC n` と示し、1 つの公開コミットに固定された Git 検証済みのファイルと行範囲を開きます。通常の成果物はソース非依存のままです。
- **既定でポータブル** — 出力は 1 つの HTML ファイルです。エクスポートは常に図全体で、一時的なビューア状態を含みません。

V-Diagram は汎用の作図エディタでも Mermaid のテーマでもありません。技術的な意図をコミュニケーションのための成果物に変えるツールです。

</details>

## 仕組み

<details>
<summary>生成、検証、プレビュー、デリバリーの詳細</summary>

| ステップ | 内容 |
|---|---|
| **Generate** | エージェントが説明から型付き JSON IR を生成します。 |
| **Validate** | 同梱のバリデータとレイアウトルールがソースを検査します。失敗時は、機械可読な JSON で修復すべき箇所を正確に示します。 |
| **Preview（任意）** | ループバック限定のデスクトップセッションが 1 つのソースを監視し、検証済みのリビジョンだけを再読み込みします。失敗時は last-good の成果物を保持します。 |
| **Deliver** | 同一ディレクトリに候補をレンダリングして検査し、合格したものだけがアトミックに対象を置き換えます。その後、任意の `--open` でそのファイルを開きます。 |
| **Iterate** | 無関係な構造は安定させたまま、エージェントがソースを更新します。 |

よく使うリポジトリコマンド:

```bash
cd v-diagram
node bin/v-diagram.mjs doctor
node bin/v-diagram.mjs demo /tmp/v-diagram-demo
node bin/v-diagram.mjs guide "Show CI/CD checks, approval, deploy, and rollback"
node bin/v-diagram.mjs validate workflow examples/agent-tool-call.workflow.json --quality showcase --json
node bin/v-diagram.mjs preview workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase
node bin/v-diagram.mjs deliver workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase --open --json
```

`preview` はループバック限定の明示的なデスクトップモードです。`127.0.0.1` のランダムポートで 1 つの JSON ファイルを監視し、失敗時も直前の検証済み出力を保持し、Ctrl-C で停止し、生成 HTML にランタイムを追加しません。テスト時や URL を自分で開きたい場合は `--no-open` を使ってください。

`deliver --open` は、コミット後に一度だけ実行されるオプトインの受け渡しです。オープナーが失敗しても成功は維持され、JSON は stdout に、手動で開くための絶対パスは stderr に出力されます。

失敗時でも、`validate --json` と `deliver --json` は 1 つの JSON オブジェクトを出力します。`diagnostics[]` の各対象について、その `supportedFixes` だけを Skill が定める 2 回の修正ラウンド内で適用してください。視覚的なレビューは引き続き分離されています。

設定:

```json
{
  "meta": {
    "locale": "en",
    "animation": "trace",
    "visual_preset": "signal-flow"
  }
}
```

`meta.locale=en|zh-CN|zh-TW|es|ko|ar` はページタイトル、Legend、状態／エラー、アクセシビリティ、HTML/SVG の `lang` をローカライズします（記述された内容自体は変更しません）。該当しない場合は省略し、要求された言語の文言はそのまま維持し、英語へフォールバックした場合はその旨を明示してください。静止出力では `animation` は省略され、`classic` が既定になります。

</details>

## 出力を探索して共有する

| 操作 | ショートカット |
|---|---|
| 事実ベースの Diagram Guide を開く | <kbd>?</kbd> |
| セマンティックノードを検索してフォーカス | <kbd>/</kbd> |
| 記述された上流/下流の到達範囲をトレース | ノードをフォーカス → `Upstream` / `Downstream` |
| 有向ルートを調べて経路を確認 | <kbd>R</kbd> または `PATH` |
| 1〜2 個のセマンティックロールを比較 | <kbd>L</kbd> または `LENS` |
| ライブの全体レーダーを開く | <kbd>M</kbd> または `MAP` |
| プレゼンテーションステージに入る | <kbd>F</kbd> |
| ビジュアルスタイルを選択（`S` で循環）/ テーマ切り替え / Export を開く | <kbd>S</kbd> / <kbd>T</kbd> / <kbd>E</kbd> |
| ズーム / リセット | <kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd> |

安定したリンクで `#focus=<id>`、`#focus=<id>&reach=upstream|downstream`、`#relation=<id>`、`#route=<source>~<target>`、`#lens=<kind>~<kind>` を復元できます。Live は一時停止するまで接続の流れを繰り返し、意味的なプレビューは有限のままです。モーションは `prefers-reduced-motion` を尊重し、正規のエクスポートには含まれません。

生成とビューアの完全な仕様は [`v-diagram/SKILL.md`](v-diagram/SKILL.md) にあります。

## インストール方法

| 環境 | インストール先または方法 | 機能 |
|---|---|---|
| **Claude Code** | `~/.claude/skills/` または `.claude/skills/` | レンダラー + 検証ワークフローのフル機能 |
| **Codex CLI** | `~/.agents/skills/` または `.agents/skills/` | レンダラー + 検証ワークフローのフル機能 |
| **opencode** | `~/.config/opencode/skills/`、`.opencode/skills/`、または `.agents/skills/` | レンダラー + 検証ワークフローのフル機能 |
| **Claude.ai** | Settings → Capabilities → Skills から `v-diagram.zip` をアップロード | サンドボックスでの Node.js 利用可否に依存 |
| **Project Knowledge** | プロジェクトに `v-diagram.zip` をアップロード | プロンプト駆動のアーキテクチャフォールバック |

## リファレンスとスコープ

- [スキーマリファレンス](v-diagram/schemas/README.md) · [Skill](v-diagram/SKILL.md) · [サンプル](v-diagram/examples/) · [エージェント向けクックブック](docs/authoring-cookbook.md)
- [変更履歴](CHANGELOG.md)
- [生成された Proof Lab](https://mbnetworku.github.io/V-Diagram/gallery.html)

Mermaid の自動パース、汎用オートレイアウト、ホスティング型の共有、WYSIWYG 編集は、現時点では意図的にスコープ外としています。

## ライセンス

[Apache-2.0](LICENSE) — 自由に利用・改変・配布できます。

過去の MIT 許諾は引き続き有効です。[NOTICE](NOTICE) と [LICENSE-MIT](LICENSE-MIT) を参照してください。第三者コンポーネントには各自のライセンスが適用されます。ソフトウェアの許諾はユーザー作成コンテンツの権利を変更せず、V-Diagram の商標を一般的に使用する権利も付与しません。

## コントリビュート

Issue、プルリクエスト、実際の図の投稿を歓迎します。まずは[コントリビューションガイド](CONTRIBUTING.md)をご覧ください。不具合は再現可能なバグ報告フォームから、検証済みの図は[コミュニティショーケースフォーム](https://github.com/mbnetworku/V-Diagram/issues/new?template=showcase.yml)から投稿できます。&nbsp;·&nbsp;[LINUX&nbsp;DO](https://linux.do)

## クレジットと免責事項

<sub>V-Diagram は tt-a1i による [Archify](https://github.com/tt-a1i/archify) の改変版で、[Apache License 2.0](LICENSE) に基づいて使用しています。元の著作権表示は [NOTICE](NOTICE) と [LICENSE-MIT](LICENSE-MIT) に保持されています。V-Diagram は独立して保守されており、Archify の作者とは提携しておらず、承認も受けていません。</sub>
