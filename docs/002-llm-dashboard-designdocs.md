# マルチLLM APIダッシュボード システム設計書

## 1. システムアーキテクチャ

### 1.1 全体構成
- フロントエンド: Remix.js + Tailwind CSS + shadcn/ui
- バックエンド: Remix.js (loader/action) + Prisma + WebSocket
- データベース: PostgreSQL
- ORM: Prisma
- リアルタイム通信: WebSocket (Socket.io)
- タスク管理: Apache Kafka
- LLMインテグレーション: LangChain
- インフラ: GCP (Cloud Run, Cloud Storage, Cloud SQL, Vertex AI)
- IaC: Terraform
- CI/CD: GitHub Actions

### 1.2 システム構成図
```
[ユーザー] <-> [CDN] <-> [Cloud Run (Remix.js App)] <-> [Cloud SQL (PostgreSQL)]
                                ^
                                |
                                v
                        [Cloud Storage]
                                ^
                                |
                                v
                        [外部LLM API]
                                ^
                                |
                                v
                        [Apache Kafka]
                                ^
                                |
                                v
                        [LangChain]
```

### 1.3 コンポーネント説明
- Remix.js App: フロントエンドとバックエンドを統合したアプリケーション
- Cloud SQL: ユーザーデータ、プロジェクト情報、タスク情報を保存
- Cloud Storage: 大容量データ（タスク結果など）の保存
- 外部LLM API: GPT-4, Claude, PaLM等の外部APIとの連携
- Apache Kafka: タスク管理とメッセージングシステム
- LangChain: LLMインテグレーションと自律的フィードバックループ

## 2. データモデル

### 2.1 エンティティ関連図
```
[User] 1 -- * [Project]
[Project] 1 -- * [TaskAgent]
[TaskAgent] 1 -- * [Execution]
[User] 1 -- * [APIKey]
```

### 2.2 テーブル定義

#### Users
- id: UUID (PK)
- name: String
- email: String (Unique)
- password_hash: String
- role: Enum (ADMIN, USER)
- created_at: DateTime
- updated_at: DateTime

#### Projects
- id: UUID (PK)
- name: String
- description: Text
- owner_id: UUID (FK to Users)
- created_at: DateTime
- updated_at: DateTime

#### TaskAgents
- id: UUID (PK)
- project_id: UUID (FK to Projects)
- name: String
- configuration: JSON
- substeps: JSON
- created_at: DateTime
- updated_at: DateTime

#### Executions
- id: UUID (PK)
- task_agent_id: UUID (FK to TaskAgents)
- start_time: DateTime
- end_time: DateTime
- status: Enum (PENDING, RUNNING, COMPLETED, FAILED)
- result: JSON
- created_at: DateTime
- updated_at: DateTime

#### APIKeys
- id: UUID (PK)
- user_id: UUID (FK to Users)
- provider: String
- key: String (Encrypted)
- created_at: DateTime
- updated_at: DateTime

## 3. APIエンドポイント

### 3.1 認証
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/register

### 3.2 プロジェクト
- GET /api/projects
- POST /api/projects
- GET /api/projects/:id
- PUT /api/projects/:id
- DELETE /api/projects/:id

### 3.3 タスクエージェント
- GET /api/projects/:projectId/agents
- POST /api/projects/:projectId/agents
- GET /api/agents/:id
- PUT /api/agents/:id
- DELETE /api/agents/:id

### 3.4 実行
- POST /api/agents/:agentId/execute
- GET /api/executions/:id
- GET /api/executions/:id/status

### 3.5 API管理
- GET /api/apikeys
- POST /api/apikeys
- DELETE /api/apikeys/:id

## 4. ユーザーインターフェース設計

### 4.1 画面一覧
1. ログイン/登録画面
2. ダッシュボード
3. プロジェクト一覧
4. プロジェクト詳細
5. タスクエージェント作成/編集
6. タスク実行画面
7. チャットルーム
8. 結果分析画面
9. API管理画面

### 4.2 ワイヤーフレーム
(各画面のワイヤーフレームをここに挿入)

## 5. セキュリティ設計

### 5.1 認証・認可
- JWT (JSON Web Token) を使用したトークンベースの認証
- RBAC (Role-Based Access Control) による権限管理

### 5.2 データ保護
- データベースの暗号化（Cloud SQLの暗号化機能を使用）
- APIキーの暗号化保存
- HTTPS通信の強制

### 5.3 セキュリティ監査
- Cloud Audit Logsを使用したアクティビティログの記録
- 定期的なセキュリティスキャンの実施

## 6. パフォーマンス最適化

### 6.1 データベース最適化
- インデックスの適切な設定
- クエリの最適化

### 6.2 キャッシング戦略
- Redis を使用したアプリケーションレベルのキャッシング
- CDN によるスタティックアセットのキャッシング

### 6.3 非同期処理
- タスク実行の非同期化（Cloud Tasks の利用）

## 7. テスト戦略

### 7.1 単体テスト
- Jest を使用したユニットテスト
- コンポーネントごとのテストケース作成

### 7.2 統合テスト
- API エンドポイントの統合テスト
- データベース操作の統合テスト

### 7.3 E2E テスト
- Cypress を使用したE2Eテスト
- 主要ユースケースのシナリオテスト

### 7.4 負荷テスト
- Apache JMeter を使用した負荷テスト
- 同時接続ユーザー数に対するパフォーマンス検証

## 8. デプロイメント計画

### 8.1 CI/CD パイプライン
1. GitHub リポジトリへのプッシュ
2. GitHub Actions による自動テスト実行
3. テスト成功時、Terraform による GCP リソースの更新
4. Cloud Run へのデプロイ

### 8.2 環境構成
- 開発環境 (dev)
- ステージング環境 (staging)
- 本番環境 (prod)

### 8.3 ロールバック戦略
- バージョン管理されたデプロイ
- 即時ロールバック機能の実装

## 9. 監視とログ

### 9.1 アプリケーション監視
- Cloud Monitoring を使用したパフォーマンス監視
- カスタムメトリクスの設定（API呼び出し数、タスク実行時間など）

### 9.2 ログ管理
- Cloud Logging を使用したログの集中管理
- ログレベルに応じたアラート設定

### 9.3 アラート設定
- リソース使用率のしきい値アラート
- エラー率のアラート
- レスポンスタイムのアラート

## 10. 拡張性と将来計画

### 10.1 スケーリング戦略
- Cloud Run の自動スケーリング設定
- データベースの読み取りレプリカの追加

### 10.2 将来の機能拡張
- 自然言語によるタスク定義機能
- AI による自動最適化機能
- 他のクラウドプロバイダーとの連携

### 10.3 国際化対応
- 多言語サポートの実装計画
- 地域ごとのデータセンター展開計画