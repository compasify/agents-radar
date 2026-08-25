# AI Open Source Trends 2026-08-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-24 23:13 UTC

---

# AI Open Source Trends Report — 2026-08-25

Non-AI trending repos such as `makeplane/plane`, `AprilNEA/OpenLogi`, `basecamp/omarchy`, and `vaultwarden` were excluded. The table below includes projects from both today's trending list and the AI topic search; `—` means the trending feed did not provide a current total, only today's delta.

## 1. Today's Highlights

The most explosive AI attention today is around the **agent layer**, not raw models: [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) (+2,442), [openai/codex](https://github.com/openai/codex) (+1,990), [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) (+899), and [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) (+889) lead daily star growth. The **Claude Code ecosystem** is becoming a distribution platform, with an official plugin marketplace ([anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)), Karpathy-derived skill files, Obsidian knowledge graphs, and forkable job-search agents all built on it. Memory and local-first design are converging: [apache/maka](https://github.com/apache/maka) logs every agent action, [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) builds lifelong local memory, and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) compresses cross-session context. Cost control is also a hot new sub-layer, from [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) token compression to [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) free-provider aggregation. Rust and Go are steadily gaining ground in agent runtimes and RAG engines, as seen in Codex, OpenHuman, [infiniflow/ragflow](https://github.com/infiniflow/ragflow), and [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix).

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,352 | Local LLM runtime now tracking the latest open-weight models including Kimi, GLM, MiniMax, and gpt-oss. The default on-prem layer for AI developers. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,912 | Agent engineering platform with model/tool abstraction and RAG hooks. Still the broadest framework for building LLM applications across providers. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 171,839 | Context API to search, scrape, and interact with the web at scale for AI agents. Demand for agent-ready web data keeps it in the top infrastructure tier. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 67,415 | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM, cutting tokens by 20–95%. A practical cost-control layer for coding agents. |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | TypeScript | — (+153) | Exposes 34 free LLM providers and 635 model endpoints behind one `/v1` API with routing and failover. Signals a fast-growing free-tier gateway layer. |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | — (+889) | CLI for using Claude Code, Codex, Pi, and OpenCode with 1.3B+ free tokens. Its +889 star spike shows massive appetite for low-cost coding-agent access. |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | — (+490) | Community plugin marketplace for Claude Cowork and Claude Code. Official backing for plugins makes this a strategic distribution point for agent capabilities. |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | — (+106) | Product analytics platform adding AI observability, session replay, and MCP-driven debugging. Targets builders of "self-driving products" who need full agent context. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 235,763 (+899) | "The agent that grows with you." Already the most-starred agent repo in the topic set, and still gaining 899 stars today. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,852 | The vision of accessible AI for everyone and one of the oldest autonomous agent frameworks. Continues to be a primary reference for agent workflows. |
| [openai/codex](https://github.com/openai/codex) | Rust | — (+1,990) | OpenAI's lightweight terminal coding agent. Today's +1,990 star jump makes it the hottest coding-agent CLI. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 110,363 | Makes websites accessible to AI agents, enabling web automation at scale. A core bridge between LLMs and the live web. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | — (+408) | Apache Incubating local-first AI agent workspace that records messages, tool calls, permission decisions, and termination events in an append-only log. Brings auditability and replay to agents. |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | TypeScript | — (+160) | Personal AI assistant that runs on any OS or platform. Part of the "own your agent" local-first movement. |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Rust | — (+515) | Personal AI superintelligence with local-first life memory, agent-fleet orchestration, and deep research. Rust signals performance-focused personal agent infrastructure. |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) |  | — (+600) | Curated collection of 1,000+ agent skills compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. Shows rapid adoption of "skills" as a distributable agent format. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | — (+2,442) | "Prompt as Code" engine and template library for GPT-Image2 with 530+ reverse-engineered cases and 20+ industrial templates. The highest daily star gain on today's AI list. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,802 | User-friendly self-hosted AI interface supporting Ollama and OpenAI-compatible APIs. The most popular community frontend for local model deployment. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 115,938 | Generates HD short videos from a topic or keyword using automated AI workflows. A practical content automation tool with a very large install base. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,152 | All-in-one local-first AI workspace ("stop renting your intelligence"). Positions itself as the everything app for local agents and private RAG. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 68,148 | AI job search that scans portals, evaluates listings into a structured report, and tailors CVs locally in Claude Code/Codex. A strong example of agent-native vertical applications. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,779 | LLM-powered multi-market stock analysis system with news, dashboards, and automated notifications. Popular for zero-cost scheduled runs. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 51,007 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs appeals to power users. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 49,034 | Turns documents or topics into real native PowerPoint decks with transitions, charts, and audio narration. Shows agent-driven office productivity gaining traction. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,402 | The standard framework for state-of-the-art text, vision, audio, and multimodal models. Still the foundation of most open-source LLM work. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,578 | Primary deep learning framework with GPU acceleration. The training substrate for almost every open-weight model. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,559 | General ML framework. Less central to today's LLM hype but remains a massive open-source AI infrastructure project. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 103,682 | Build a ChatGPT-like LLM in PyTorch step by step. The canonical educational path for understanding LLM internals. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,972 | Train a 64M-parameter LLM from scratch in about 2 hours. Lowers the barrier to entry for hands-on model training. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,333 | LLM evaluation platform supporting 100+ datasets and many model families. Evaluation infrastructure becomes critical as open models multiply. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,515 | Learn LLM inference systems by building a tiny vLLM-like runtime for Apple Silicon. Addresses the gap in inference engineering education. |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 48,255 (+330) | "Learn it. Build it. Ship it." AI engineering curriculum. Trending +330 today shows continued demand for structured, project-based AI education. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 110,118 | Turns any codebase, docs, SQL, or PDFs into a queryable knowledge graph using local deterministic AST parsing, with no vector store. A strong signal against pure-embedding RAG. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,718 | Captures everything an agent does across sessions, compresses it with AI, and injects relevant context back. Solves persistent memory for Claude Code, Codex, OpenClaw, Gemini, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,162 | Leading open-source RAG engine combining retrieval with agent capabilities. A production-grade context layer for LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,964 | Universal memory layer for AI agents. Memory is becoming a required component for long-running, self-evolving agents. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,849 | Document agent and OCR platform, and one of the main RAG frameworks. Critical for connecting enterprise and private data to LLMs. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,771 | Cloud-native vector database for scalable vector ANN search. A standard high-scale vector store for RAG and agent memory. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,314 | Document index for "vectorless, reasoning-based RAG." Another indicator that structured retrieval is challenging embeddings-only approaches. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | — (+272) | Self-organizing AI second brain for Obsidian + Claude Code, built on Karpathy's LLM Wiki pattern. Turns notes into a connected Markdown knowledge graph you own. |

## 3. Trend Signal Analysis

Today's data points to an **agent-layer gold rush**. The highest-velocity projects are not new LLMs but reusable skills ([VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)), coding-agent CLIs ([openai/codex](https://github.com/openai/codex)), free access gates ([Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)), and prompt-to-code templates ([freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)). The community is productizing the infrastructure around frontier models: plugins, skills, memory, and cost controls.

The second big theme is **memory and local-first agent state**. [apache/maka](https://github.com/apache/maka) logs every tool call, [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) builds life-long local memory, [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) compresses session context, and [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) creates a Markdown knowledge graph. RAG is also moving beyond vector databases: [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) uses deterministic AST parsing, [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) does reasoning-based retrieval, and [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) claims 97% storage savings. These projects explicitly position themselves as alternatives to embedding-only pipelines.

Cost optimization is now a named engineering layer. [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) cuts tokens before they reach the LLM, [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) reduces token use via minimal phrasing, [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) aggregates 34 free providers, and [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) promises 1.3B+ free tokens. This correlates with long-running agents becoming an expensive production problem.

The connection to model releases is also clear: [ollama/ollama](https://github.com/ollama/ollama)'s model list — Kimi-K2.6, GLM-5.2, MiniMax, gpt-oss — shows open-weight model proliferation, while GPT-Image2's prompt-as-code ecosystem expands multimodal use cases. Karpathy's LLM coding pitfalls are now being encoded directly into `CLAUDE.md` skill files, meaning community wisdom is becoming packaged agent configuration. If this trajectory holds, open-source AI competition will shift from model benchmarks to skill ecosystems, memory quality, and total cost of operation.

## 4. Community Hot Spots

- **Claude Code / Codex skill & plugin marketplaces** — [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills), [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community), and [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills). Skills are becoming the "packages" of the agent era, and both community and official marketplaces are forming fast.

- **Agent memory & auditability** — [apache/maka](https://github.com/apache/maka), [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), and [mem0ai/mem0](https://github.com/mem0ai/mem0). Persistent context and append-only logs are prerequisites for trustworthy long-running agents.

- **Token/cost optimization & free API gateways** — [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi), and [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code). These projects directly attack token bills and access barriers, unlocking broader experimentation.

- **Terminal-native coding agents** — [openai/codex](https://github.com/openai/codex), [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale), and [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix). Rust/Go CLIs offer fast, lightweight alternatives to IDE-heavy workflows and are exploding in popularity.

- **Agent-native vertical apps** — [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search), [santifer/career-ops](https://github.com/santifer/career-ops), [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master), and [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2). Users increasingly want forkable, local, AI-driven tools that replace SaaS workflows for job search, presentations, and media generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*