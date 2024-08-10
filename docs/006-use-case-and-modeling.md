# マルチLLM APIダッシュボード ユースケースとモデリング

## 1. ユースケース図

```mermaid
graph TD
    User((ユーザー))
    Admin((管理者))
    
    User --> Login[ログイン]
    User --> CreateProject[プロジェクト作成]
    User --> CreateTaskAgent[タスクエージェント作成]
    User --> ExecuteTask[タスク実行]
    User --> ViewResults[結果閲覧]
    User --> ManageAPI[API管理]
    User --> ViewProjectDetails[プロジェクト詳細]
    User --> EditProject[プロジェクト編集]
    User --> DeleteProject[プロジェクト削除]
    User --> ViewTaskAgentDetails[タスクエージェント詳細]
    User --> EditTaskAgent[タスクエージェント編集]
    User --> DeleteTaskAgent[タスクエージェント削除]
    User --> StartConversation[会話開始]
    User --> SendMessage[メッセージ送信]
    User --> ViewFeedback[フィードバック閲覧]
    User --> ProvideFeedback[フィードバック提供]
    
    Admin --> ManageUsers[ユーザー管理]
    Admin --> MonitorSystem[システム監視]
    Admin --> ManageAPIProviders[APIプロバイダ管理]
    
    subgraph ダッシュボード
        CreateProject
        CreateTaskAgent
        ExecuteTask
        ViewResults
        ManageAPI
    end
```

## 2. ドメインモデル

```mermaid
classDiagram
    User "1" -- "*" Project
    Project "1" -- "*" TaskAgent
    TaskAgent "1" -- "*" Substep
    TaskAgent "1" -- "*" ExecutionResult
    User "1" -- "*" APIKey
    LLMProvider "1" -- "*" APIKey
    
    class User {
        +id
        +name
        +email
        +password
        +role
    }
    
    class Project {
        +id
        +name
        +description
        +ownerId
    }
    
    class TaskAgent {
        +id
        +name
        +projectId
        +configuration
    }
    
    class Substep {
        +id
        +taskAgentId
        +description
        +order
    }
    
    class ExecutionResult {
        +id
        +taskAgentId
        +startTime
        +endTime
        +status
        +result
    }
    
    class APIKey {
        +id
        +userId
        +provider
        +key
    }
    
    class LLMProvider {
        +id
        +name
        +description
    }
```

## 3. シーケンス図（タスク実行）

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant Backend
    participant LLM_API
    participant Database
    
    User->>Frontend: タスク実行リクエスト
    Frontend->>Backend: タスク実行API呼び出し
    Backend->>Database: タスクエージェント取得
    Database-->>Backend: タスクエージェント情報
    Backend->>Backend: サブステップ分割
    loop 各サブステップ
        Backend->>LLM_API: API呼び出し
        LLM_API-->>Backend: 結果
        Backend->>Backend: 結果処理
    end
    Backend->>Database: 実行結果保存
    Backend-->>Frontend: 実行完了通知
    Frontend-->>User: 結果表示
    note "エラーハンドリング"
    Backend->>Frontend: エラーメッセージ
    Frontend-->>User: エラーメッセージ表示
```

## 4. ER図

```mermaid
erDiagram
    USERS ||--o{ PROJECTS : creates
    USERS ||--o{ API_KEYS : owns
    PROJECTS ||--o{ TASK_AGENTS : contains
    TASK_AGENTS ||--o{ SUBSTEPS : has
    TASK_AGENTS ||--o{ EXECUTION_RESULTS : produces
    LLM_PROVIDERS ||--o{ API_KEYS : provides
    
    USERS {
        int id PK
        string name
        string email
        string password_hash
        enum role
    }
    
    PROJECTS {
        int id PK
        string name
        string description
        int owner_id FK
    }
    
    TASK_AGENTS {
        int id PK
        string name
        int project_id FK
        json configuration
    }
    
    SUBSTEPS {
        int id PK
        int task_agent_id FK
        string description
        int order
    }
    
    EXECUTION_RESULTS {
        int id PK
        int task_agent_id FK
        datetime start_time
        datetime end_time
        enum status
        json result
    }
    
    API_KEYS {
        int id PK
        int user_id FK
        string provider
        string key_encrypted
    }
    
    LLM_PROVIDERS {
        int id PK
        string name
        string description
    }
```

## 5. コンVERSATIONモデル

```mermaid
classDiagram
    User "1" -- "*" Conversation
    TaskAgent "1" -- "*" Conversation
    Conversation "1" -- "*" Message
    
    class Conversation {
        +id
        +taskAgentId
        +startTime
        +endTime
        +status
    }
    
    class Message {
        +id
        +conversationId
        +sender
        +content
        +timestamp
        +type
    }
```

## 6. フィードバックループモデル

```mermaid
classDiagram
    TaskAgent "1" -- "*" FeedbackLoop
    FeedbackLoop "1" -- "*" EvaluationMetric
    FeedbackLoop "1" -- "*" Adjustment
    
    class FeedbackLoop {
        +id
        +taskAgentId
        +evaluationMetrics
        +adjustments
        +timestamp
    }
    
    class EvaluationMetric {
        +id
        +feedbackLoopId
        +metric
        +value
    }
    
    class Adjustment {
        +id
        +feedbackLoopId
        +adjustment
    }
```

これらの図表は、マルチLLM APIダッシュボードのシステム構造と動作を視覚的に表現しています。