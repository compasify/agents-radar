# AI Open Source Trends 2026-08-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-26 00:00 UTC

---

# AI Open Source Trends Report — 2026-08-26

## Step 1: Filter

Filtered out clearly non-AI/general-purpose entries: `basecamp/omarchy` (Linux distribution), `asciimoo/hister` (general search engine), `JuliaLang/julia` (language), `Developer-Y/cs-video-courses` (general CS list), and `netdata` (observability platform). The remaining AI/ML-related projects were grouped by primary use case.

> **Star-count note:** Some GitHub Trending rows only expose today’s star increment, with total displayed as `0` in the source data. I preserve that verbatim. Where a project also appeared in Topic Search, I merged the topic-search total with the trending today increment.

---

## Step 2 + Step 3: Categorized Report

### 1. Today’s Highlights

Today’s open-source AI activity is dominated by the Claude Code ecosystem: Anthropic now has both an official and a community plugin marketplace, and community “skills” such as Karpathy-derived `CLAUDE.md` and `ponytail` are turning agent behavior into shareable code. OpenAI’s `codex` terminal agent and Apache Maka’s local-first agent workspace also gained strong traction, while GPT-Image2 prompt engineering saw the day’s biggest spike at +1,698 stars. Vertical AI agents are becoming practical — AI job search, financial trading, and Obsidian-based knowledge memory all hit the trending list. Across categories, local-first memory and token/context optimization are the underlying themes.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,633 | Open-source ML framework for large-scale production machine learning. Still a core foundation for training and serving. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,428 | Local model runner now supporting Kimi, GLM, DeepSeek, Qwen, Gemma and more. The center of the local-first LLM deployment wave. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,440 | Model-definition framework for state-of-the-art text, vision, audio, and multimodal models. The standard open-source model hub interface. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,982 | Agent engineering platform for building LLM applications with tools, RAG, and orchestration. Remains the most widely used LLM app SDK. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,592 | Dynamic neural network framework with strong GPU acceleration. Foundational for modern model training and research. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 67,578 | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM, cutting 20–95% of tokens. Directly addresses LLM cost and context limits. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,952 | Idiomatic Java library for LLM-powered applications with MCP support and RAG abstractions. The key bridge for JVM/enterprise adoption. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,402 | Modular Rust framework for building scalable LLM applications. Shows Rust gaining momentum in agent/inference infrastructure. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | 0 (+1,181) | Lightweight coding agent that runs in the terminal. OpenAI’s CLI agent gained +1,181 today, confirming strong demand for terminal-native coding agents. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 0 (+982) | Makes AI agents behave like “the laziest senior dev in the room,” reducing unnecessary code. Part of the new token/code-frugality movement. |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | | 0 (+830) | A single `CLAUDE.md` file that improves Claude Code behavior, derived from Karpathy’s observations on LLM coding pitfalls. Signals that “agent presets” are becoming a distribution format. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 0 (+543) | Local-first AI agent workspace with an append-only log of messages, tool calls, permission decisions, and termination events. Notable for auditability and agent traceability. |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Rust | 0 (+542) | Personal AI “superintelligence” with local-first memory, agent fleet orchestration, and deep research. Represents the shift toward personal AI ownership. |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 0 (+351) | Community plugin marketplace for Claude Cowork and Claude Code. Centralizes the fast-growing Claude Code plugin ecosystem. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 0 (+55) | Anthropic-managed directory of high-quality Claude Code Plugins. Official curation signals ecosystem maturation. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 40,440 | Framework for building resilient, stateful, graph-based agent workflows. Core infrastructure for production multi-agent systems. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 0 (+1,698) | “Prompt as Code” engine and template library for GPT-Image2, with 530+ reverse-engineered cases. Largest one-day momentum in today’s dataset. |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | Python | 0 (+1,265) | AI job application framework built on Claude Code: evaluates postings, tailors CVs, writes cover letters, and preps interviews. Job search is a breakout vertical. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+218) | Multi-agent LLM framework for financial trading. Demonstrates LLM agents moving into finance with specialized workflows. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 134,216 (+161) | Collection of 100+ AI agents, agent skills, and RAG apps. The de facto catalog for reusable LLM application patterns. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,919 | User-friendly self-hosted AI interface supporting Ollama and OpenAI-compatible APIs. One of the most popular local LLM frontends. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 68,401 | Open-source AI job search: scans job portals, scores listings with a 1–5 rating, tailors CVs, and tracks applications. Runs locally inside Claude Code, Codex, and other AI CLIs. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 49,314 | AI turns documents or topics into native PowerPoint decks with animations, charts, narration, and custom templates. Strong productivity-app use case. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 116,446 | Automated AI workflow that generates HD short videos from a topic or keyword. Popular proof point for AI content generation at scale. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 48,937 (+569) | “Learn it. Build it. Ship it.” Educational AI engineering path with heavy momentum today. Reflects strong demand for structured, hands-on AI learning. |
| [marin-community/marin](https://github.com/marin-community/marin) | Python | 0 (+231) | Open-source framework for foundation model research and development. A new entrant in model-building infrastructure. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 103,778 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. The canonical hands-on resource for understanding LLM internals. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 55,001 | Train a 64M-parameter LLM from scratch in about 2 hours. Lowers the barrier for model training experimentation. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,519 | Build a tiny vLLM + Qwen inference system on Apple Silicon. Excellent for learning LLM inference from a systems perspective. |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,426 | Curated overview of Japanese LLMs. Shows regional model ecosystems becoming important community resources. |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | HTML | 113 | Survey on “what, how, where, and how well” for test-time scaling in LLMs. Reflects the industry shift toward inference-time compute. |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) | | 98 | Curated list of papers on large-language-diffusion models. Emerging research direction combining diffusion and LLM architectures. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 0 (+813) | Self-organizing AI second brain for Obsidian + Claude Code. Builds a connected Markdown knowledge graph from any source; +813 today. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 110,491 | Turns codebases, docs, schemas, and PDFs into a queryable knowledge graph with no vector store. Works as a skill for Claude Code, Cursor, Codex, and Gemini CLI. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,838 | Captures agent sessions, compresses them with AI, and injects relevant context into future sessions. Provides persistent context across Claude Code, Codex, Gemini, Copilot, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,241 | Leading open-source RAG engine that fuses retrieval-augmented generation with agent capabilities. A major layer for LLM context pipelines. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 64,029 | Universal memory layer for AI agents. Enables cross-session personalization and persistent agent memory. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,870 | Leading document agent and OCR platform. Core framework for RAG and enterprise document workflows. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,788 | High-performance, cloud-native vector database for scalable approximate nearest-neighbor search. Standard infrastructure for RAG at scale. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | Python | 39,174 | Simple and fast RAG framework from an EMNLP 2025 paper. A research-backed alternative designed for efficiency. |

---

### 3. Trend Signal Analysis

Today’s list is dominated by the Claude Code ecosystem and by “agent skills” as a reusable format. Anthropic shipped both official and community plugin marketplaces, while community authors published skills such as Karpathy-derived `CLAUDE.md`, `ponytail`, and `caveman`. Combined with `claude-mem` and `claude-obsidian`, this points to a workflow where the coding agent is the operating system and “skills” are its distributable apps.

A second signal is local-first, self-hosted agents. Apache Maka’s append-only agent log, TinyHumans/openhuman, and Ollama’s expanding local model support all reinforce privacy and ownership as core requirements. “Memory” is the layer everyone is building: mem0, claude-mem, and claude-obsidian all treat persistent context as infrastructure rather than an optional feature.

A third signal is vertical AI applications. AI job search, financial trading, and PPT/video generation show agents moving from generic demos to measurable personal and business workflows. Token economics is also becoming a new competitive axis: headroom, caveman, and ponytail optimize token use, which is increasingly as important as model quality. On the generative side, GPT-Image2 prompt-as-code had the largest one-day jump, indicating prompt engineering is being industrialized as a library artifact. New directions such as Apache Maka, the `marin` foundation-model framework, and test-time-scaling surveys confirm that auditable agents, model R&D, and inference-time compute are now mainstream open-source concerns.

---

### 4. Community Hot Spots

- **Claude Code plugins and skills**: [claude-plugins-community](https://github.com/anthropics/claude-plugins-community), [claude-plugins-official](https://github.com/anthropics/claude-plugins-official), [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills), and [ponytail](https://github.com/DietrichGebert/ponytail). The official + community marketplace is turning agent behavior into a new “app store” layer.

- **Local-first agent memory**: [apache/maka](https://github.com/apache/maka), [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman), [claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian), and [claude-mem](https://github.com/thedotmack/claude-mem). Auditability, privacy, and persistent context are converging.

- **Terminal-native coding agents**: [openai/codex](https://github.com/openai/codex), [CodeWhale](https://github.com/Hmbown/CodeWhale), and [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix). Lightweight CLI agents are gaining ground over heavyweight IDE integrations.

- **AI job-search vertical**: [ai-job-search](https://github.com/MadsLorentzen/ai-job-search) and [career-ops](https://github.com/santifer/career-ops). Practical, personal, high-value workflows are driving fast adoption.

- **Foundation-model education and training**: [marin-community/marin](https://github.com/marin-community/marin), [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch), and [minimind](https://github.com/jingyaogong/minimind). The barrier to learning and building foundation models continues to drop.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*