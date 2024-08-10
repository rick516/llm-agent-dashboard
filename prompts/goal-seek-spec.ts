// 要件定義特化ゴールシークプロンプト

export function generateRequirementsDefinitionPrompt(
  productName: string,
  customerNeeds: string,
  businessGoals: string,
  mainFeatures: string,
  useCases: string,
  performanceMetrics: string,
  securityRequirements: string,
  scalability: string,
  technicalConstraints: string,
  budget: string,
  timeConstraints: string,
  uiDesign: string,
  apiSpecifications: string,
  dataModel: string,
  dataFlow: string,
  qualityMetrics: string,
  testCriteria: string,
  verificationMethods: string,
  priorityMatrix: string,
  documentStructure: string,
  reviewPlan: string,
  approvalProcess: string,
  feedbackManagement: string
): string {
  const requirements_definition_prompt = `
あなたは経験豊富なシステムアナリストです。新しい製品やシステム「{product_name}」の要件定義を行うために、以下のステップに従ってください。

1. 要求の明確化
   [変数: 顧客ニーズ="{customer_needs}", ビジネス目標="{business_goals}"]
   - 顧客やステークホルダーの要求を明確に理解し、リストアップしてください。
   - 各要求の優先順位を決定してください。

2. 機能要件の特定
   [変数: 主要機能="{main_features}", ユースケース="{use_cases}"]
   - システムが実行すべき具体的な機能を列挙してください。
   - 各機能に対するユースケースを作成してください。

3. 非機能要件の定義
   [変数: パフォーマンス指標="{performance_metrics}", セキュリティ要件="{security_requirements}", 拡張性="{scalability}"]
   - システムの性能、信頼性、セキュリティなどの非機能要件を定義してください。
   - 各非機能要件に対する具体的な指標を設定してください。

4. 制約条件の特定
   [変数: 技術的制約="{technical_constraints}", 予算="{budget}", 時間制約="{time_constraints}"]
   - プロジェクトに影響を与える制約条件を明確にしてください。
   - 各制約条件がプロジェクトに与える影響を評価してください。

5. インターフェース要件の定義
   [変数: UI設計="{ui_design}", API仕様="{api_specifications}"]
   - ユーザーインターフェースの要件を詳細に記述してください。
   - 外部システムとの連携に必要なインターフェース要件を定義してください。

6. データ要件の特定
   [変数: データモデル="{data_model}", データフロー="{data_flow}"]
   - システムで扱うデータの構造と関係を定義してください。
   - データの流れと処理方法を明確にしてください。

7. 品質要件の設定
   [変数: 品質指標="{quality_metrics}", テスト基準="{test_criteria}"]
   - システムの品質に関する具体的な要件を設定してください。
   - 品質を測定するための指標と基準を定義してください。

8. 要件の検証と優先順位付け
   [変数: 検証方法="{verification_methods}", 優先度マトリックス="{priority_matrix}"]
   - 定義した要件が要求を満たしているか検証してください。
   - 要件の優先順位を決定し、優先度マトリックスを作成してください。

9. 要件定義書の作成
   [変数: 文書構造="{document_structure}", レビュー計画="{review_plan}"]
   - これまでの結果を統合し、包括的な要件定義書を作成してください。
   - 要件定義書のレビュー計画を立案してください。

10. ステークホルダーの承認
    [変数: 承認プロセス="{approval_process}", フィードバック管理="{feedback_management}"]
    - 要件定義書をステークホルダーに提示し、承認を得てください。
    - フィードバックを収集し、必要に応じて要件を修正してください。

各ステップを実行する際は、以下の点に注意してください：

- 要件と要求の違いを常に意識し、具体的で測定可能な要件を定義すること。
- 第一原理に基づいて思考し、革新的なソリューションを探求すること。
- ユーザー体験を中心に据え、構造的なUXシナリオを考慮すること。
- 成功指標を明確に定義し、要件がそれらの指標にどのように貢献するか説明すること。
- 各ステップで中間結果を評価し、必要に応じて計画を修正すること。

このプロンプトに従って要件定義を行うことで、プロジェクトの成功に不可欠な、包括的で精度の高い要件定義書を作成することができます。
`;

  return requirements_definition_prompt
    .replace(/\{product_name\}/g, productName)
    .replace(/\{customer_needs\}/g, customerNeeds)
    .replace(/\{business_goals\}/g, businessGoals)
    .replace(/\{main_features\}/g, mainFeatures)
    .replace(/\{use_cases\}/g, useCases)
    .replace(/\{performance_metrics\}/g, performanceMetrics)
    .replace(/\{security_requirements\}/g, securityRequirements)
    .replace(/\{scalability\}/g, scalability)
    .replace(/\{technical_constraints\}/g, technicalConstraints)
    .replace(/\{budget\}/g, budget)
    .replace(/\{time_constraints\}/g, timeConstraints)
    .replace(/\{ui_design\}/g, uiDesign)
    .replace(/\{api_specifications\}/g, apiSpecifications)
    .replace(/\{data_model\}/g, dataModel)
    .replace(/\{data_flow\}/g, dataFlow)
    .replace(/\{quality_metrics\}/g, qualityMetrics)
    .replace(/\{test_criteria\}/g, testCriteria)
    .replace(/\{verification_methods\}/g, verificationMethods)
    .replace(/\{priority_matrix\}/g, priorityMatrix)
    .replace(/\{document_structure\}/g, documentStructure)
    .replace(/\{review_plan\}/g, reviewPlan)
    .replace(/\{approval_process\}/g, approvalProcess)
    .replace(/\{feedback_management\}/g, feedbackManagement);
}

// 使用例
// const formattedPrompt = generateRequirementsDefinitionPrompt(
//   "革新的なスマートホームアシスタント",
//   "音声制御による家電操作、省エネ管理、セキュリティ強化",
//   "市場シェア20%獲得、年間売上100億円達成",
//   "音声認識、AIによる学習機能、IoTデバイス連携",
//   "照明制御、温度調整、セキュリティ監視",
//   "応答時間0.5秒以内、99.9%の稼働率",
//   "エンドツーエンド暗号化、二段階認証",
//   "1000万台までのデバイス接続に対応",
//   "クラウドベースのアーキテクチャ、5G対応",
//   "開発予算50億円",
//   "18ヶ月以内の市場投入",
//   "直感的な音声インターフェース、モバイルアプリ連携",
//   "RESTful API、OAuth2.0認証",
//   "ユーザープロファイル、デバイス状態、使用履歴",
//   "デバイス→クラウド→モバイルアプリ",
//   "ユーザー満足度90%以上、バグ発生率0.1%未満",
//   "自動化されたユニットテスト、負荷テスト、ユーザビリティテスト",
//   "要件トレーサビリティマトリックス、プロトタイピング",
//   "MoSCoW法による優先順位付け",
//   "エグゼクティブサマリー、詳細要件、技術仕様書",
//   "週次の内部レビュー、月次のステークホルダーレビュー",
//   "部門長承認→経営陣最終承認",
//   "フィードバックトラッキングシステム、定期的な改善会議"
// );

// formattedPromptを使用してAIに要件定義を依頼する