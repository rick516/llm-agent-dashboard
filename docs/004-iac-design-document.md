# マルチLLM APIダッシュボード IaC設計ドキュメント

## 1. 概要

このドキュメントは、マルチLLM APIダッシュボードのインフラストラクチャをコードとして実装するための設計を詳述します。Infrastructure as Code (IaC)アプローチを採用し、Terraformを使用してGCP上にインフラストラクチャを構築します。

## 2. アーキテクチャ概要

![アーキテクチャ図](./architecture-diagram.png)

- フロントエンド: Cloud Run (Remix)
- バックエンド: Cloud Run (FastAPI)
- データベース: Cloud SQL (PostgreSQL)
- 認証: Firebase Authentication, Identity Platform
- ストレージ: Cloud Storage
- CI/CD: GitHub Actions, Cloud Build
- シークレット管理: Secret Manager
- LLM: Vertex AI
- メッセージング: Apache Kafka

## 3. Terraformモジュール構成

```
terraform/
├── modules/
│   ├── cloud_run/
│   ├── cloud_sql/
│   ├── cloud_storage/
│   ├── firebase/
│   ├── identity_platform/
│   ├── secret_manager/
│   ├── vpc/
│   ├── vertex_ai/
│   └── kafka/
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
└── main.tf
```

## 4. モジュール詳細

### 4.1 Cloud Run (フロントエンド & バックエンド)

- Remixアプリケーションのデプロイ
- FastAPIアプリケーションのデプロイ
- オートスケーリング設定
- カスタムドメインマッピング
- WebSocketサポートの設定

### 4.2 Cloud SQL (PostgreSQL)

- PostgreSQLインスタンスのプロビジョニング
- データベース作成
- ユーザー管理
- バックアップ設定

### 4.3 Cloud Storage

- バケット作成
- アクセス制御設定
- ライフサイクル管理

### 4.4 Firebase & Identity Platform

- プロジェクト設定
- 認証方法の設定
- セキュリティルールの定義

### 4.5 Secret Manager

- シークレットの作成と管理
- アクセス制御設定

### 4.6 VPC

- ネットワーク設定
- サブネット設定
- ファイアウォールルール

### 4.7 Vertex AI

- LLMモデルのデプロイ設定
- スケーリング設定

### 4.8 Apache Kafka

- Kafkaクラスターのプロビジョニング
- トピックの作成と設定

## 5. 環境別設定

dev、staging、prod環境ごとに以下の設定を行います：

- リソース名のプレフィックス
- スケーリング設定
- バックアップ頻度
- ログレベル

## 6. CI/CD パイプライン

GitHub Actionsを使用して以下のパイプラインを実装します：

1. Terraform計画の自動生成（プルリクエスト時）
2. Terraform適用の自動実行（マージ時）
3. アプリケーションのビルドとデプロイ

## 7. セキュリティ考慮事項

- IAMロールと権限の最小化
- VPCサービスコントロールの実装
- 暗号化の適用（転送中および保存時）
- セキュリティスキャンの定期実行

## 8. モニタリングとロギング

- Cloud Monitoringダッシュボードの設定
- アラートポリシーの定義
- ログエクスポートの設定

## 9. コスト最適化

- リソースの自動スケーリング設定
- 未使用リソースの定期的なクリーンアップ
- コストアラートの設定

## 10. ディザスタリカバリ

- リージョン間バックアップの設定
- フェイルオーバー手順の文書化

## 11. コンプライアンスと監査

- リソースの変更履歴の追跡
- コンプライアンスチェックの自動化

## 12. 次のステップ

1. 各Terraformモジュールの詳細実装
2. CI/CDパイプラインのセットアップ
3. 環境別の変数ファイルの作成
4. セキュリティレビューの実施
5. パフォーマンステストの実行

## 13. 参考資料

- [Terraform GCPプロバイダドキュメント](https://registry.terraform.io/providers/hashicorp/google/latest/docs)
- [GCP アーキテクチャベストプラクティス](https://cloud.google.com/architecture/framework)