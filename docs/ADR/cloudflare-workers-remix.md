# ADR: Cloudflare WorkersでのRemixアプリケーション運用

## ステータス

検討中

## コンテキスト

我々のWebアプリケーションの開発と運用において、高パフォーマンス、スケーラビリティ、そしてグローバルな配信が求められています。Cloudflare WorkersとRemixの組み合わせは、これらの要件を満たす可能性のある魅力的なソリューションです。

## 決定

Cloudflare WorkersプラットフォームでRemixフレームワークを使用してアプリケーションを開発・運用することを検討しています

## 基本概念

1. **Cloudflare Workers**: エッジで実行されるサーバーレスコンピューティングプラットフォーム。
2. **Remix**: React ベースのフルスタックWebフレームワーク。
3. **エッジコンピューティング**: ユーザーに近い場所でコードを実行し、レイテンシーを低減。

## ユースケースと構成

1. **グローバルWebアプリケーション**
   - Remixアプリケーションをグローバルに展開し、各地域のユーザーに最適なパフォーマンスを提供。
   - Cloudflare's CDNを活用して静的アセットを配信。

2. **動的コンテンツ生成**
   - Remixのサーバーサイドレンダリング機能を使用して、Workersでダイナミックなコンテンツを生成。
   - KV StorageやDurable Objectsを利用してデータを保存・取得。

3. **APIプロキシとバックエンド統合**
   - WorkersをAPIゲートウェイとして使用し、複数のバックエンドサービスを統合。
   - Remixのloader関数を活用してデータフェッチングを最適化。

4. **認証と認可**
   - Cloudflare Access と統合して、アプリケーションレベルの認証を実装。
   - Remixのセッション管理機能を使用してユーザー状態を維持。

## 技術的な考慮事項

1. **デプロイメント**
   - `wrangler`CLIツールを使用してWorkersにデプロイ。
   - GitHub ActionsなどのCI/CDパイプラインと統合。

2. **パフォーマンス最適化**
   - Remixのアセットプリフェッチ機能を活用。
   - Workers KVを使用してキャッシュを実装。

3. **データ永続化**
   - Prisma Data Proxyを使用してデータベース接続を最適化。
   - Workers KVやDurable Objectsを適切に使い分けてデータを保存。

4. **モニタリングとロギング**
   - Cloudflare Analyticsを使用してパフォーマンスと使用状況を監視。
   - WorkersのログをCloudflare Logs（旧LogPush）と統合。

## 利点

- グローバルな低レイテンシー配信
- スケーラビリティの向上
- サーバーレスアーキテクチャによる運用コストの削減
- 強力なセキュリティ機能の統合

## 欠点

- Cloudflareプラットフォームへのベンダーロックイン
- 一部のNode.js APIが利用できないなどの制限

## 参考リンク

- [Remix on Cloudflare Pages](https://blog.cloudflare.com/remix-on-cloudflare-pages/)
- [Remix Docs: Cloudflare Workers](https://remix.run/docs/en/v1/guides/deployment/cloudflare-workers)
- [GitHub: remix-run/remix](https://github.com/remix-run/remix)

## 結論

Cloudflare WorkersとRemixの組み合わせは、我々のアプリケーションに求められる高パフォーマンス、スケーラビリティ、グローバル配信の要件を満たすことができます。この決定により、開発効率の向上とユーザー体験の改善が期待できます。ただし、プラットフォーム固有の制限や学習曲線については注意が必要です。
