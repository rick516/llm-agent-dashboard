export const productDevelopmentPrompt = `
<productDevelopment>
    <title>プロダクト開発要求定義とゴールシーク</title>
    <description>あなたは優秀なプロダクトマネージャーです。以下の手順に従って、革新的な新製品「{product_name}」の要求定義とゴールシークを行ってください。</description>
    
    <step number="1">
        <title>要件と要求の違いの明確化</title>
        <instruction>要件と要求の違いを明確に説明し、本プロダクトにおける両者の重要性を述べてください。</instruction>
    </step>
    
    <step number="2">
        <title>プロダクトビジョンの定義</title>
        <variables>
            <variable name="product_vision">{product_vision}</variable>
            <variable name="core_problem">{core_problem}</variable>
        </variables>
        <instruction>プロダクトの長期的なビジョンと、それが解決する本質的な問題を定義してください。</instruction>
    </step>
    
    <step number="3">
        <title>ターゲットユーザーと市場分析</title>
        <variables>
            <variable name="target_audience">{target_audience}</variable>
            <variable name="market_size">{market_size}</variable>
            <variable name="competitors">{competitors}</variable>
            <variable name="differentiators">{differentiators}</variable>
        </variables>
        <instruction>ターゲットユーザー、市場規模、競合他社、差別化要因を詳細に分析してください。</instruction>
    </step>
    
    <step number="4">
        <title>主要機能と技術要件</title>
        <variables>
            <variable name="main_features">{main_features}</variable>
            <variable name="technical_requirements">{technical_requirements}</variable>
        </variables>
        <instruction>プロダクトの主要機能と、それを実現するための技術要件を列挙してください。</instruction>
    </step>
    
    <step number="5">
        <title>ユーザーエクスペリエンスの設計</title>
        <variables>
            <variable name="user_experience">{user_experience}</variable>
            <variable name="user_stories">{user_stories}</variable>
        </variables>
        <instruction>理想的なユーザーエクスペリエンスを設計し、ユーザーストーリーを作成してください。</instruction>
    </step>
    
    <step number="6">
        <title>ビジネスモデルと収益化戦略</title>
        <variables>
            <variable name="business_model">{business_model}</variable>
            <variable name="revenue_strategy">{revenue_strategy}</variable>
            <variable name="price_range">{price_range}</variable>
        </variables>
        <instruction>プロダクトのビジネスモデルと収益化戦略を策定してください。</instruction>
    </step>
    
    <step number="7">
        <title>開発ロードマップ</title>
        <variables>
            <variable name="development_roadmap">{development_roadmap}</variable>
            <variable name="milestones">{milestones}</variable>
        </variables>
        <instruction>プロダクト開発のロードマップを作成し、主要なマイルストーンを設定してください。</instruction>
    </step>
    
    <step number="8">
        <title>成功指標の設定</title>
        <variables>
            <variable name="success_metrics">{success_metrics}</variable>
            <variable name="kpis">{kpis}</variable>
        </variables>
        <instruction>プロダクトの成功を測定するための具体的な指標を設定してください。</instruction>
    </step>
    
    <step number="9">
        <title>リスク分析と軽減策</title>
        <variables>
            <variable name="potential_risks">{potential_risks}</variable>
            <variable name="risk_mitigation_strategies">{risk_mitigation_strategies}</variable>
        </variables>
        <instruction>潜在的なリスクを特定し、それらを軽減するための戦略を立案してください。</instruction>
    </step>
    
    <step number="10">
        <title>ゴールシークと反復</title>
        <variables>
            <variable name="optimization_areas">{optimization_areas}</variable>
            <variable name="plan_adjustments">{plan_adjustments}</variable>
        </variables>
        <instruction>設定したゴールに向けて、各要素を最適化し、必要に応じて計画を調整してください。</instruction>
    </step>
    
    <conclusion>
        <instruction>このプロンプトを使用することで、プロダクト開発の要求定義とゴールシークを体系的かつ効果的に行うことができます。各ステップで変数を具体化し、行動計画を実行・調整することで、より精度の高い要求定義と目標達成が可能になります。</instruction>
    </conclusion>
</productDevelopment>
`;