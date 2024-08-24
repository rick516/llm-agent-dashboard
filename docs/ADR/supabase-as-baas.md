# ADR: RemixフロントエンドとSupabaseバックエンドを利用したLLMアプリケーションのGCP上での構築

## ステータス

提案済み

## コンテキスト

我々は、大規模言語モデル（LLM）を活用したWebアプリケーションの開発を計画しています。フロントエンドにはRemix、バックエンドにはSupabaseを使用し、これらをGoogle Cloud Platform（GCP）上に展開することを検討しています。この組み合わせにより、高性能で拡張性の高いアプリケーションを構築できる可能性があります。

## 決定

Remixをフロントエンドフレームワークとして使用し、SupabaseをBaaSとして利用して、GCP上でLLMアプリケーションを構築することを決定しました。

## アーキテクチャ概要

1. **フロントエンド (Remix)**:
   - GCP Cloud Run上で動作
   - ユーザーインターフェースの提供
   - サーバーサイドレンダリングとクライアントサイドの機能を組み合わせて使用

2. **バックエンド (Supabase)**:
   - PostgreSQLデータベース
   - 認証・認可
   - リアルタイムサブスクリプション
   - ストレージ
   - エッジ関数

3. **LLMサービス**:
   - Vertex AIを使用
   - テキスト生成や分析タスクの実行

4. **インフラストラクチャ (GCP)**:
   - Cloud Run: Remixアプリケーションのホスティング
   - Cloud Storage: 静的アセットの保存
   - Cloud CDN: コンテンツ配信の最適化
   - Cloud Monitoring: アプリケーションの監視

## 具体的な構成

1. **Remix on Cloud Run**:
   - Dockerコンテナ化されたRemixアプリケーションをCloud Runにデプロイ
   - 環境変数を使用してSupabase接続情報を設定

2. **Supabase設定**:
   - プロジェクトの作成とデータベーススキーマの設定
   - Row Level Security (RLS)ポリシーの実装
   - 認証プロバイダーの設定（例：メール/パスワード、OAuth）

3. **GCPリソース**:
   - VPCネットワークの設定
   - Cloud Storageバケットの作成
   - Cloud CDNの設定

4. **Vertex AI統合**:
   - LLMモデルのデプロイ
   - Remixアプリケーションからのエンドポイント呼び出し

## ユースケースと構成例

1. **AIチャットボット**:
   - Remixフロントエンドでチャットインターフェースを提供
   - SupabaseのRealtimeを使用してリアルタイムメッセージング
   - Vertex AIのLLMを使用して応答生成
   - 会話履歴をSupabaseのPostgreSQLに保存

2. **コンテンツ生成プラットフォーム**:
   - ユーザーがトピックを入力
   - RemixサーバーサイドでVertex AIのLLMを呼び出し
   - 生成されたコンテンツをSupabaseに保存
   - リアルタイム更新をクライアントに配信

3. **多言語翻訳サービス**:
   - ユーザーが翻訳したいテキストを入力
   - Vertex AIの翻訳モデルを使用
   - 翻訳履歴をSupabaseに保存
   - ユーザー認証とクレジット管理にSupabaseを使用

## 技術的考慮事項

1. **認証とセキュリティ**:
   - SupabaseのJWTトークンをRemixセッションに保存
   - RemixのローダーとアクションでSupabaseクライアントを初期化する際にトークンを使用
   - RLSポリシーを適切に設定し、データアクセスを制御

2. **パフォーマンス最適化**:
   - Remixのサーバーサイドレンダリングを活用
   - SupabaseのPostgreSQLインデックスを適切に設定
   - Cloud CDNを使用して静的アセットを配信

3. **スケーラビリティ**:
   - Cloud Runの自動スケーリング機能を活用
   - Supabaseのコネクションプーリングを適切に設定

4. **開発者体験**:
   - Supabase CLIを使用してローカル開発環境をセットアップ
   - TypeScriptを使用してエンドツーエンドの型安全性を確保

## 利点

- Remixの優れたパフォーマンスとDXの活用
- Supabaseによる迅速なバックエンド開発
- GCPの堅牢なインフラストラクチャとAI機能の活用
- スケーラブルで柔軟なアーキテクチャ

## 欠点

- 複数のサービスの組み合わせによる複雑性の増加
- SupabaseとGCPの両方に依存することによるベンダーロックインのリスク
- サービス間の連携における潜在的な課題

## 参考リンク

- [Remix Documentation](https://remix.run/docs/en/v1)
- [Supabase Documentation](https://supabase.com/docs)
- [Google Cloud Platform Documentation](https://cloud.google.com/docs)
- [Authenticating users with Remix and Supabase](https://makerkit.dev/blog/tutorials/remix-supabase-auth)

## 結論

RemixフロントエンドとSupabaseバックエンドをGCP上で組み合わせることで、高性能で拡張性の高いLLMアプリケーションを構築できます。この組み合わせにより、開発速度の向上と運用の簡素化が期待できます。ただし、複数のサービスを統合する際の複雑性とベンダーロックインのリスクについては慎重に評価し、適切に管理する必要があります。
