---
lang: ja
title: AI Workspace Platform
period: "2026.02 - present"
image: images/projects/IMG_AI_Workspace.png
repoUrl: https://github.com/k-kanke/ai-workspace-platform
projectTag: 個人開発
summary: 重いLLM処理を非同期化し、SSEでリアルタイム配信するAI Workspace（開発中）。
tags:
  - Go
  - SQS
  - PostgreSQL
---

開発中の AI Workspace プラットフォームです。

アーキテクチャは、`Web UI -> API (Go) -> SQS FIFO -> Worker -> PostgreSQL` の流れで、重いLLM処理をAPIから切り離しています。これにより、APIのレスポンス性能を維持しつつ、順序保証付きの非同期実行基盤を実現しています。

処理フロー:
1. Request
2. Queue
3. Poll
4. Save
5. SSE Streaming (LISTEN/NOTIFY)

DB更新は PostgreSQL の LISTEN/NOTIFY でAPIへ即時通知し、クライアントへは SSE でAIの回答をストリーミング配信します。耐障害性を高めながら、並行処理とリアルタイム性を両立する構成を目指しています。
