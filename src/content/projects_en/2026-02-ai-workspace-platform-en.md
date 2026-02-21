---
lang: en
title: AI Workspace Platform
period: "2026.02 - present"
image: images/projects/IMG_AI_Workspace.png
projectTag: Personal
summary: An in-progress AI workspace that decouples heavy LLM jobs and streams results in real time with SSE.
tags:
  - Go
  - SQS
  - PostgreSQL
---

An AI workspace platform currently under development.

The architecture follows `Web UI -> API (Go) -> SQS FIFO -> Worker -> PostgreSQL`, decoupling heavy LLM workloads from the API layer. This keeps API latency stable while providing an asynchronous execution pipeline with FIFO ordering guarantees.

Processing flow:
1. Request
2. Queue
3. Poll
4. Save
5. SSE Streaming (LISTEN/NOTIFY)

Database updates are pushed to the API immediately via PostgreSQL LISTEN/NOTIFY, and responses are streamed to clients in real time using SSE. The goal is to balance fault tolerance, concurrency, and real-time UX.
