# AI Open Source Trends 2026-07-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-28 01:25 UTC

---

# AI Open Source Trends Report — 2026-07-28

## 1. Today’s Highlights

The AI open-source ecosystem saw explosive activity around **locally-hosted, autonomous agents** and **enterprise-grade LLM tooling**. The standout repo of the day is **alibaba/open-code-review** (+979 stars), a battle-tested hybrid code review platform combining deterministic pipelines with LLM agents — signaling that large-scale production AI code verification is maturing rapidly. On the consumer-agent side, **moeru-ai/airi** (+572 stars) introduced a self-hosted, multi-modal companion capable of real-time voice chat and game-playing, while **bradautomates/claude-video** (+434 stars) enables Claude to "watch" and reason over videos via frame extraction and transcription. The topic-search data reveals that **agent frameworks (e.g., NousResearch/hermes-agent with 221k+ stars)** and **RAG infrastructure** continue to dominate the long-tail, with financial AI (Kronos, Vibe-Trading) emerging as a focused vertical.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+979) | Open-source, Alibaba-scale code review tool that combines deterministic pipelines with LLM agents for precise line-level comments. Includes built-in rulesets for NPE, thread-safety, XSS, and SQL injection, making it enterprise-ready out of the box. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,032 | The most popular local LLM runner, now supporting Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, and more. Essential infrastructure for anyone deploying models locally. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 142,714 | The leading agent engineering platform with a unified API over 100+ LLM providers and vector stores. Pervasive in production agent systems. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 146,981 | User-friendly AI interface supporting Ollama and OpenAI APIs. The go-to self-hosted chat frontend with growing enterprise adoption. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,460 | Collaborative workspace for building agentic workflows and RAG pipelines. Supports cloud, VPC, and self-hosted deployment with rich model integration. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,706 | Idiomatic Java library for building LLM apps, with unified API for providers and vector stores. Integrates with Quarkus and Spring Boot for enterprise JVM environments. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 221,429 | The "agent that grows with you" — an autonomous agent framework designed for adaptability and continuous self-improvement. By far the most-starred agent project in today's data. |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | TypeScript | 0 (+572) | Self-hosted, multi-modal companion inspired by Neuro-sama, capable of real-time voice chat, Minecraft and Factorio gameplay. A standout for its combination of game interaction, voice, and local ownership. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,052 | AI productivity studio with smart chat, autonomous agents, and 300+ pre-built assistants. Unifies access to frontier LLMs in a single desktop environment. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 46,306 | Ultra-lightweight, self-hosted personal AI agent framework with WebUI, tools, memory, MCP support, and multi-agent workflows. Designed for one-line installation and extensibility. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 46,159 | Open-source super AI assistant and agent harness that plans tasks, runs tools, self-evolves with memory. Multi-model and multi-channel, formerly chatgpt-on-wechat. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Python | 0 (+434) | Gives Claude the ability to "watch" videos — downloads, extracts frames, transcribes audio, and feeds everything to the LLM. A creative bridge between video content and AI reasoning. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+240) | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web, then synthesizes a grounded summary. Shows demand for agents that aggregate web intelligence. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 99,565 | Automated short-video generation from any topic or keyword using LLM-driven workflows. Extremely popular for content creation automation. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 97,172 | Turns codebases, docs, SQL schemas, configs, and PDFs into queryable knowledge graphs. Designed as a skill for Claude Code, Cursor, and Gemini CLI with deterministic AST parsing. |
| [samchon/nestia](https://github.com/samchon/nestia) | TypeScript | 2,172 | NestJS helper for AI chatbot development. Bridges Node.js backend patterns with LLM-powered conversational interfaces. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,046 | The de facto standard framework for state-of-the-art ML models across text, vision, audio, and multimodal tasks. Supports both inference and training for virtually every modern architecture. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+441) | A foundation model for the language of financial markets, indicating a growing trend of domain-specific LLMs trained on niche data (market charts, filings, news). |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,906 | Demonstrates how to train a 64M-parameter LLM from scratch in just 2 hours. Lowers the barrier to LLM training education and experimentation. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 99,984 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. The gold standard for learning how LLMs work under the hood. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 63,982 | Everything needed for a local-first RAG agent experience. "Stop renting your intelligence. Own it" — a flagship for self-hosted document retrieval and chat. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,391 | High-performance, cloud-native vector database for scalable ANN search. The most widely adopted open-source vector DB in production. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,169 | Leading open-source RAG engine fusing retrieval with agent capabilities. Builds a superior context layer for LLMs. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,146 | The leading document agent and OCR platform for building RAG pipelines. Essential middleware for connecting documents to LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | TypeScript | 61,861 | Universal memory layer for AI agents, enabling persistent, cross-session context. Addresses a critical gap in agent reliability. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Jupyter Notebook | 28,841 | Collection of advanced RAG techniques with detailed notebook tutorials. The go-to educational resource for practitioners. |

## 3. Trend Signal Analysis

Several clear patterns emerge from today’s data.

**1. The Agent Explosion Continues — With a "Local First" Twist**  
The most aggressive star growth today comes from agent frameworks that emphasize **self-hosting, privacy, and personal ownership**. Projects like moeru-ai/airi (a companion agent that runs your own hardware), NousResearch/hermes-agent (the most-starred agent repo overall), and zhayujie/CowAgent (formerly chatgpt-on-wechat) all share a common ethos: agents should not depend on third-party cloud APIs. This signals that the community is moving beyond toy demos toward daily-use utility agents that users can control.

**2. Multimodal Capabilities Go Mainstream**  
The high traction of bradautomates/claude-video (+434 stars) indicates developers are demanding agents that can process **video as a first-class input** — not just text and images. Combined with airi’s real-time voice chat, the trend is clear: the next generation of AI tools will be natively multimodal, combining vision, audio, and text understanding without manual pipeline stitching.

**3. Enterprise Code Review Meets LLM — and It Works**  
Alibaba’s open-code-review (+979 stars) is one of the fastest-rising repos today. Its hybrid architecture (deterministic rules + LLM agents) is a pragmatic answer to the criticism that LLMs alone are unreliable for code review. By grounding the LLM in static analysis (NPE, thread-safety, XSS), it achieves production-grade precision at Alibaba’s scale. Expect more enterprise tools to adopt this pattern.

**4. Financial AI Is an Emerging Vertical**  
The presence of two financial-native AI projects (shiyu-coder/Kronos for foundation modeling, HKUDS/Vibe-Trading for agentic trading) alongside the enormous OpenBB platform (71k stars) shows that **quantitative and investment-focused AI is becoming a distinct, fast-growing niche**. These projects leverage LLMs for market language and agent frameworks for execution — a powerful combination.

**5. RAG Infrastructure Is Mature but Still Growing**  
The topic-search data reveals an incredibly dense RAG ecosystem: milvus, qdrant, weaviate, lancedb, orama, and the new alibaba/zvec all compete in vector databases, while anything-llm, ragflow, and llama_index dominate the middleware layer. The emergence of cognee (AI memory for agents) and mem0 (universal memory layer) suggests that **persistent, cross-session memory** is the next RAG frontier.

## 4. Community Hot Spots

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** (221k+ stars) — The highest-starred agent repo by far. Watch for its "grows with you" architecture to influence how agents handle long-term adaptation.
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** (+979 today) — Sets a new standard for production code review by combining deterministic pipelines with LLM agents. Likely to inspire many forks and enterprise integrations.
- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** (+572 today) — The most creative application of local AI: a self-hosted waifu companion that plays games and chats in real-time. Demonstrates that open-source AI can match commercial products in user experience.
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** (+441 today) — Flagship example of domain-specific foundation models. Financial LLMs could become a major ingredient in trading automation, risk analysis, and portfolio management.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** (61,861 stars) — "Universal memory layer for AI agents" addresses the biggest pain point in agent reliability: forgetting context. Essential infrastructure for any long-running agent system.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*