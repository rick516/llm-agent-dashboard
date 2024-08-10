/*
  内部リフレクシュングモデリング
  ドメインモデリングを行うためのプロンプト
*/
export function generateDomainModelingPrompt(
  productName: string,
  mainFeatures: string,
  useCases: string,
  dataModel: string,
  dataFlow: string
): string {
  const domainModelingPrompt = `
あなたは世界最高峰のドメインモデリングエキスパートです。以下の情報を基に、「{product_name}」のドメインモデリングを行ってください。

提供された情報：
- 製品名: {product_name}
- 主要機能: {main_features}
- ユースケース: {use_cases}
- データモデル: {data_model}
- データフロー: {data_flow}

以下の手順に従って、ドメインモデリングを行い、結果をmermaid記法で出力してください。

1. ユースケース図の作成
   - アクターとユースケースを特定し、その関係を示す図を作成してください。
   - mermaid記法で出力してください。

2. ユーザーストーリーの記述
   - 主要なユーザーストーリーを特定し、「ユーザーとして、〜したい。なぜなら〜だからだ。」の形式で記述してください。
   - 箇条書きで出力してください。

3. ドメインモデルの作成
   - 主要なエンティティ、その属性、および関係を特定し、クラス図を作成してください。
   - mermaid記法で出力してください。

4. シーケンス図の作成
   - 主要なユースケースについて、オブジェクト間の相互作用を示すシーケンス図を作成してください。
   - mermaid記法で出力してください。

各図の作成後、簡単な説明を追加してください。

出力例：

## 1. ユースケース図

\`\`\`mermaid
graph TD
    User((ユーザー))
    Admin((管理者))
    User --> |ログイン| A[認証]
    User --> |データ閲覧| B[データ表示]
    Admin --> |ユーザー管理| C[ユーザー管理]
    Admin --> A
\`\`\`

この図は、システムの主要なユースケースとアクターを示しています。

## 2. ユーザーストーリー

- ユーザーとして、簡単にログインしたい。なぜなら、素早くシステムにアクセスしたいからだ。
- 管理者として、ユーザーを効率的に管理したい。なぜなら、セキュリティを維持しつつ、ユーザーエクスペリエンスを向上させたいからだ。

## 3. ドメインモデル

\`\`\`mermaid
classDiagram
    User "1" -- "*" Data
    User : +int id
    User : +string name
    User : +string email
    Data : +int id
    Data : +string type
    Data : +date timestamp
\`\`\`

このドメインモデルは、ユーザーとデータの関係を示しています。

## 4. シーケンス図

\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant A as AuthService
    participant D as DataService
    U->>A: ログインリクエスト
    A->>A: 認証
    A->>U: ログイン結果
    U->>D: データリクエスト
    D->>D: データ取得
    D->>U: データ返送
\`\`\`

この図は、ユーザーがログインしてデータを取得するまでの一連の流れを示しています。

提供された情報を基に、上記の形式でドメインモデリングを行い、結果を出力してください。
`;

  return domainModelingPrompt
    .replace(/{product_name}/g, productName)
    .replace(/{main_features}/g, mainFeatures)
    .replace(/{use_cases}/g, useCases)
    .replace(/{data_model}/g, dataModel)
    .replace(/{data_flow}/g, dataFlow);
}

// 使用例
// const formattedPrompt = generateDomainModelingPrompt(
//   "スマートホームアシスタント",
//   "音声制御、AIによる学習機能、IoTデバイス連携",
//   "照明制御、温度調整、セキュリティ監視",
//   "ユーザープロファイル、デバイス状態、使用履歴",
//   "デバイス→クラウド→モバイルアプリ"
// );

// formattedPromptを使用してAIにドメインモデリングを依頼する