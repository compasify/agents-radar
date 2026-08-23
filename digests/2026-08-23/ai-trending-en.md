# AI Open Source Trends 2026-08-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-22 23:10 UTC

---

# AI Open Source Trends Report — 2026-08-23

**Note:** Non-AI trending repos were excluded (e.g., Plane, TypeScript, free-for-dev, OpenLogi, Google Timeline Visualizer). Some trending entries report total stars as `0` because the source only exposed today's delta.

---

## 1. Today's Highlights

Terminal-native coding agents and "agent skills" are the day's two dominant forces: OpenAI Codex added **+1,978** stars while community skill repos like `mattpocock/skills` (+2,684), `obra/superpowers` (+592), `ECC` (+428), and `andrej-karpathy-skills` (+379) collectively pulled in thousands of stars. This suggests agent behavior is becoming a packageable artifact — skills, `CLAUDE.md` files, and `.agents` directories are emerging as the new plugins. Meanwhile, production middleware is heating up: the multi-provider LLM relay `sub2api` (+264), AI observability platform PostHog (+288), and Tencent's AI red-teaming tool `AI-Infra-Guard` (+161) all gained traction. Mojo-based AI infrastructure also remains relevant, with `modular/modular` at +395 today.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0 (+395) | The Modular Platform includes MAX & Mojo, aiming to unify high-performance AI compute in one stack. Today's +395 shows continued developer interest in Mojo as an AI-native language. |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | Go | 0 (+264) | An open-source relay that unifies Claude, OpenAI, Gemini, and Grok subscriptions with native tool support. It addresses cost pooling and multi-provider access for teams. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0 (+286) | Official plugin specification and plugins for Cursor. This is an early signal of a standardized extension ecosystem around AI coding IDEs. |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | 0 (+288) | Product analytics platform adding AI observability, agent telemetry, and MCP control. Developers are starting to debug agents with the same rigor as production software. |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | Python | 0 (+161) | Full-stack AI red-teaming platform covering agent, skill, MCP, AI infrastructure, and LLM jailbreak scans. Early but clear momentum for AI security tooling. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,203 | The de facto local LLM runner; updated model list now includes Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. Continues as the default self-hosted entry point. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,720 | High-throughput, memory-efficient inference and serving engine for LLMs. Core infrastructure for anyone deploying open-weight models at scale. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,344 | The model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal. Still the baseline against which new AI infrastructure is built. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [openai/codex](https://github.com/openai/codex) | Rust | 0 (+1,978) | A lightweight coding agent that runs in the terminal. Today's highest-trending agent CLI, showing the continued shift from IDE-centric to terminal-native coding. |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Python | 0 (+141) | Claude Code is an agentic coding tool that understands codebases and handles routine tasks via natural language. It remains a reference point for agent-harness UX. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+2,684) | "Skills for Real Engineers" straight from the author's `.agents` directory. The top star-gainer today, demonstrating that shareable skill files are becoming a hot artifact type. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+592) | An agentic skills framework and software development methodology. It signals that teams are codifying entire workflows rather than just individual prompts. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 242,159 (+428) | Agent harness performance optimization system for Claude Code, Codex, Cursor, and more. Its large total and today's +428 show cross-agent demand. |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | | 0 (+379) | A single `CLAUDE.md` file that improves Claude Code behavior using Karpathy's observations on LLM coding pitfalls. A notable example of expertise-as-a-file. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 0 (+202) | Fair-code workflow automation platform with native AI capabilities and 400+ integrations. Bridges traditional automation with agentic workflows. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,215 | Build agentic workflows, RAG pipelines, and AI apps on a collaborative workspace. One of the most established open-source platforms for productionizing agents. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,920 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Represents the all-in-one prosumer AI app trend. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,627 | AI generates native PowerPoint decks with shapes, transitions, charts, and audio narration. A strong example of a focused vertical AI application. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,633 | LLM-powered multi-market stock analysis with real-time news, dashboards, and automated notifications. Shows AI agents applied to live finance workflows. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 67,783 | Open-source AI job search that scans portals, scores listings, and tailors CVs locally in AI coding CLIs. A rapidly adopted personal-agent use case. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 114,628 | Generate HD short videos from a topic or keyword with automated AI workflows. One of the most-starred AI content generation apps. |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | Python | 29,818 | AI-powered web scraping library. Makes site extraction accessible to LLM-based pipelines. |
| [zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN) | Python | 1,791 | AI-driven multi-agent research assistant that automates hypothesis generation, analysis, and reporting. A strong signal for the research-copilot niche. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,592 | User-friendly AI interface for local models. Remains the default self-hosted frontend for Ollama and OpenAI-compatible backends. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,926 | Train a 64M-parameter LLM from scratch in about two hours. A practical educational training repo attracting huge community attention. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,512 | Build a tiny vLLM + Qwen on Apple Silicon for systems engineers. Bridges low-level systems engineering with LLM serving. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,327 | LLM evaluation platform supporting 100+ datasets and many model families. Increasingly critical as the model landscape diversifies. |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,426 | Overview of Japanese LLMs. Signals that non-English model ecosystems are becoming a distinct and important category. |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | HTML | 113 | A survey on test-time scaling in LLMs. Academic interest in inference-time compute may drive future agent and serving design. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,039 | Leading open-source RAG engine that fuses RAG with agent capabilities. The go-to self-hosted context layer for LLMs. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,801 | Leading document agent and OCR platform. De facto RAG framework for Python developers. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,737 | Cloud-native vector database built for scalable ANN search. Core infrastructure for production RAG. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,127 | High-performance vector database and search engine. Popular for performance-sensitive agent memory and retrieval. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,832 | Universal memory layer for AI agents. Moves RAG from document chunks to persistent, personalized agent memory. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,529 | Captures agent sessions, compresses them with AI, and injects relevant context back into future sessions. Supports Claude Code, Codex, Gemini, and more; effectively a cross-session memory standard in the making. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,553 | Turns codebases, docs, SQL schemas, configs, and PDFs into queryable knowledge graphs using local AST parsing; no vector store. A major shift toward deterministic, explainable knowledge for agents. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,294 | Document index for vectorless, reasoning-based RAG. Challenges the assumption that retrieval requires embeddings. |

---

## 3. Trend Signal Analysis

Today's explosive attention is concentrated in agent skills and terminal-native coding agents. Projects like `mattpocock/skills` (+2,684), `obra/superpowers` (+592), `ECC` (+428), and `andrej-karpathy-skills` (+379) collectively outpaced the agent CLIs themselves. This points to a layer above models and tools: reproducible, promptable skill packages that can be plugged into Claude Code, Codex, Cursor, and OpenCode. Conventions such as `.agents`, `CLAUDE.md`, and `AGENTS.md` are rapidly becoming de facto standards — an "agent package manager" moment.

The second signal is middleware for production. `sub2api` (+264) and projects like `LLM-API-Key-Proxy` offer unified access to Claude/OpenAI/Gemini/Grok subscriptions, while Tencent's `AI-Infra-Guard`, Apache Casbin Gateway, and PostHog's MCP observability address security, authorization, and debugging for agent traffic. As coding agents leave personal laptops, teams need cost pooling, red-teaming, and telemetry. RAG is also mutating toward memory and context layers: mem0, cognee, claude-mem, and persistent session memory are becoming as important as vector search. New "vectorless" approaches such as PageIndex and LEANN, plus codebase knowledge graphs like Graphify, are starting to challenge the assumption that every agent needs a vector database.

Finally, model diversity is visible in Ollama's updated model list — Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. With more open-weight releases, gateways, evaluation platforms like OpenCompass, and test-time scaling research become core infrastructure. Rust continues to gain ground in AI systems (rig, Qdrant, LanceDB, tiny-llm), while Mojo remains a distinct bet via the Modular platform.

---

## 4. Community Hot Spots

- **Agent skills as first-class artifacts** — [mattpocock/skills](https://github.com/mattpocock/skills), [obra/superpowers](https://github.com/obra/superpowers), [affaan-m/ECC](https://github.com/affaan-m/ECC), and [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) are defining how expertise is packaged for agents. This is today's fastest-moving direction.

- **Terminal-native coding agents** — [openai/codex](https://github.com/openai/codex) and [anthropics/claude-code](https://github.com/anthropics/claude-code) are the center of gravity. The terminal is becoming the new IDE, and skills form the emerging app store.

- **LLM gateways and API economics** — [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) and [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) show that subscription sharing, load balancing, and unified endpoints are becoming team-scale requirements.

- **Memory / RAG 2.0** — [mem0ai/mem0](https://github.com/mem0ai/mem0), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), and [topoteretes/cognee](https://github.com/topoteretes/cognee) are pushing beyond naive embeddings toward persistent agent memory and knowledge graphs.

- **AI security and observability** — [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard), [PostHog/posthog](https://github.com/PostHog/posthog), and [apache/casbin-gateway](https://github.com/apache/casbin-gateway) are early indicators that production readiness now includes red-teaming, MCP authorization, and agent telemetry.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*