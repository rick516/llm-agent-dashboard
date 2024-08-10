# マルチLLM APIダッシュボード（WIP）

# ※ 下記は開発中であり順次実装中です

## プロジェクト概要

このプロジェクトは、複数のLLM (Large Language Model) APIを統合し、効率的なタスク管理と実行を可能にするダッシュボードアプリケーションです。ユーザーはリアルタイムで対話しながら、AIエージェントを活用して複雑な問題解決を行うことができます。

## 主要機能

1. マルチLLM API統合
2. リアルタイム対話型タスク管理
3. 自律的フィードバックループ
4. カスタマイズ可能なタスクエージェント
5. 高度な分析とモニタリング

## アーキテクチャ

### フロントエンド
- Remix.js
- Tailwind CSS
- shadcn/ui

### バックエンド
- FastAPI
- WebSocket (Socket.io)
- Celery

### データベース
- PostgreSQL
- Redis (キャッシュ)

### インフラストラクチャ
- Google Cloud Platform (GCP)
- Terraform (IaC)

## 主要コンポーネント

1. [要求定義](docs/001-llm-dashboard-requirements.md)
2. [システム設計](docs/002-llm-dashboard-designdocs.md)
3. [アプリケーションアーキテクチャ](docs/003-llm-app-boilerplate-architecture.md)
4. [インフラストラクチャ設計](docs/004-iac-design-document.md)
5. [フロントエンド設計](docs/005-frontend-design-document.md)
6. [ユースケースとモデリング](docs/006-use-case-and-modeling.md)
7. [リアルタイム対話アーキテクチャ](docs/007-realtime-interactive-architecture.md)
8. [FastAPI LLM統合設計](docs/008-fastapi-llm-integration-design.md)

## セットアップ手順

1. リポジトリのクローン
   ```
   git clone https://github.com/your-repo/multi-llm-dashboard.git
   cd multi-llm-dashboard
   ```

2. 環境変数の設定
   ```
   cp .env.example .env
   # .envファイルを編集し、必要な環境変数を設定
   ```

3. インフラストラクチャのセットアップ
   ```
   cd terraform
   terraform init
   terraform apply
   ```

4. バックエンドのセットアップ
   ```
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

5. フロントエンドのセットアップ
   ```
   cd frontend
   npm install
   npm run dev
   ```

## 開発ガイドライン

- コーディング規約: [PEP 8](https://www.python.org/dev/peps/pep-0008/) (Python), [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) (JavaScript)
- コミットメッセージ: [Conventional Commits](https://www.conventionalcommits.org/)
- ブランチ戦略: GitHub Flow

## テスト

- バックエンド: pytest
- フロントエンド: Vitest, React Testing Library
- E2Eテスト: Cypress

## デプロイメント

CI/CDパイプラインはGitHub Actionsを使用しています。main ブランチへのマージ後、自動的にステージング環境にデプロイされます。

## 貢献

プロジェクトへの貢献を歓迎します。詳細は[CONTRIBUTING.md](CONTRIBUTING.md)を参照してください。

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。