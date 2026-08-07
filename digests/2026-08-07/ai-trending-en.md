# AI Open Source Trends 2026-08-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-07 02:02 UTC

---

# AI Open Source Trends Report — 2026-08-07

## 1. Today's Highlights

The clear story in today's GitHub trending is the rise of **agent skills** and **durable agent memory**. `cloudflare/computer` (+2,802 stars) and `mattpocock/skills` (+1,873) show developers standardizing reusable capabilities for coding agents, while `TencentDB-Agent-Memory` (+1,057) and `loopx` (+847) attack the persistence and state problem for long-running agent teams. `DeepSeek-Reasonix` (+888) demonstrates a DeepSeek-native terminal agent engineered around prefix-cache stability, and `firecrawl/pdf-inspector` (+1,190) adds a fast Rust document-understanding component to AI data pipelines. Older platforms like AutoGPT continue to accumulate stars, but the momentum is clearly in lightweight, local-first, agent-centric tools.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/computer](https://github.com/cloudflare/computer) | TypeScript | 0 (+2802) | Gives AI agents a real, remotely controllable computer environment. The +2.8k star spike in one day makes it the most explosive agent-infrastructure project in today's trending list. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0 (+1190) | Fast Rust library for PDF inspection, classification, and text extraction. It intelligently detects scanned vs text-based PDFs, enabling smarter routing in document-heavy AI pipelines. |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Python | 0 (+237) | Local-first code intelligence graph for MCP and CLI. It builds a persistent codebase map so AI coding tools read only relevant context, with benchmarked context reductions. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,377 | High-throughput, memory-efficient inference and serving engine for LLMs. It remains a core deployment layer for open-weight models in production. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,948 | Run frontier open models like Kimi, GLM, DeepSeek, and Qwen locally with ease. Its README now highlights the latest model families, signaling rapid ecosystem support. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,421 | The model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal models. It continues to be the default hub for sharing and running pretrained models. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,190 | Rust framework for building modular and scalable LLM applications. It shows increasing demand for type-safe, high-performance agent infrastructure outside Python. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,250 | Core deep learning framework with strong GPU acceleration. Its sustained popularity underpins a large share of AI training and inference projects. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 226,623 | Agent that grows with you, from Nous Research. Its massive star count makes it one of the most adopted personal agent frameworks in the ecosystem. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,031 (+37) | The vision of accessible AI for everyone, to use and build on. It remains a reference point for autonomous agents and continues to see steady daily traction. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,579 | The agent engineering platform for LLM applications. It is the de facto standard for chaining models, tools, and memory into agentic workflows. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,100 | Makes websites accessible to AI agents and automates online tasks. It is a key enabler for web-native agents and browser automation. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 32,467 (+888) | DeepSeek-native AI coding agent for the terminal, engineered around prefix-cache stability. The design lets it run continuously with lower API cost and latency, explaining today's +888 star jump. |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | Python | 0 (+847) | Lightweight loop-engineering state kernel for long-running AI agent teams. It adds durable goals, quota-aware auto-wake, executable todos, and verifiable handoffs across coding agents. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+858) | Agentic skills framework and software development methodology. It packages repeatable agent workflows into an opinionated "superpowers" system. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+593) | Production-grade engineering skills for AI coding agents. It distills expert engineering practice into reusable skill packs for agent workflows. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,082 | User-friendly AI interface supporting Ollama, OpenAI API, and other backends. It is the leading self-hosted chat UI for local and cloud models. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,925 | Turns topics or keywords into HD short videos using AI and automated workflows. This remains one of the most popular vertical AI applications for content creation. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 67,660 | Gives AI agents eyes to read and search Twitter, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu via one CLI with no API fees. It is a striking example of community-built agent data access. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,084 | Open-source AI job search that scans portals, evaluates listings with a structured rubric, and tailors CVs. It runs locally inside AI coding CLIs, showing agent-native vertical apps. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,269 | LLM-driven multi-market stock analysis with multi-source data, real-time news, and decision dashboards. It supports zero-cost scheduled runs, lowering the barrier to automated trading research. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,911 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. It unifies access to frontier LLMs in a desktop application. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,537 | AI turns documents or topics into real native PowerPoint decks with shapes, transitions, charts, and narration. Its focus on native, editable output differentiates it from image-based slide generators. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,413 | Train a 64M-parameter LLM from scratch in about 2 hours. It is a go-to resource for developers who want to understand pretraining mechanics with small compute. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,281 | LLM evaluation platform supporting 100+ datasets and major model families. It is important for verifying model quality as new open-weight releases proliferate. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,444 | Course for learning LLM inference serving on Apple Silicon by building a tiny vLLM + Qwen. It addresses the systems side of serving, which is critical for on-device and edge AI. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 64 | Decoder-only LLM built from scratch in pure Rust using Candle, with Gated DeltaNet, sparse attention, and MoE. It shows a new wave of no-Python, performance-portable model implementations. |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) | — | 96 | Curated papers on large-language-diffusion-models. It tracks an emerging research direction that applies diffusion to LLM generation. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | — | 617 | Resources for machine unlearning in LLMs. It is increasingly relevant for compliance and safety in production AI. |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,424 | Overview of Japanese LLMs. It highlights the global expansion of open model ecosystems beyond English-centric releases. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | On-device LLM inference using X-bit quantization. It represents the push toward private, low-latency inference on edge devices. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,601 | Build agentic workflows and RAG pipelines with rich model and tool support. It is a major platform for moving from prototype to production. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 103,546 | Turns any codebase, docs, SQL schemas, configs, and PDFs into a queryable knowledge graph using deterministic AST parsing, with no vector store. It integrates as a skill for Claude Code, Cursor, Codex, and Gemini CLI. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,879 | Captures agent sessions, compresses them with AI, and injects relevant context into future sessions. It solves persistent context for Claude Code, Codex, Gemini, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,981 | Open-source RAG engine fusing RAG with agent capabilities to create a superior context layer for LLMs. It is a leading choice for production-grade RAG. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,716 | Universal memory layer for AI agents. It provides persistent, self-hosted memory infrastructure across different agent frameworks. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,434 | Leading document agent and OCR platform for RAG. It provides data connectors and indexing tools for LLM applications. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,541 | High-performance cloud-native vector database built for scalable ANN search. It anchors many RAG stacks requiring production vector storage. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0 (+1057) | Team-level memory hub for AI agents that turns conversations, docs, and code into shared Chat Memory, Skill, LLM-Wiki, and Code-Graph assets. The +1,057 star spike proves strong demand for governed, shared agent memory. |

## 3. Trend Signal Analysis

The explosive attention today is around **reusable agent skills** and **persistent agent state**. `cloudflare/computer` (+2,802) and `mattpocock/skills` (+1,873) show that the community is shifting from raw model prompts to shareable, productionized capability packs. `TencentDB-Agent-Memory` (+1,057) and `loopx` (+847) address the other half of the problem: long-running agents cannot rely on stateless conversations, so memory hubs, durable goals, and verifiable handoffs are becoming essential infrastructure.

A new stack is taking shape around **MCP, local-first code intelligence, and context compression**. `tirth8205/code-review-graph` builds a persistent codebase graph so coding agents read only what matters, while `Graphify-Labs/graphify` does the same for entire repositories without a vector store. Meanwhile, `firecrawl/pdf-inspector` applies Rust-level speed to document understanding, and `DeepSeek-Reasonix` demonstrates a Go-based terminal agent optimized for prefix-cache stability. These projects reflect growing emphasis on cost control and determinism rather than just model capability.

The timing connects with the current multi-model wave: `ollama` now lists Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma as first-class options, and DeepSeek-native tools are gaining traction. As frontier models become interchangeable, the competitive moat is moving to memory, skills, evaluation, and agent infrastructure.

## 4. Community Hot Spots

- **Agent skills & methodology packs**: [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [mattpocock/skills](https://github.com/mattpocock/skills), and [obra/superpowers](https://github.com/obra/superpowers). Standardized skills are becoming the "packages" of agent development; the 500–1,900 stars each earned today signals a new distribution pattern.

- **Computer use as an agent primitive**: [cloudflare/computer](https://github.com/cloudflare/computer). The +2,802 stars today suggest developers want secure remote environments for autonomous agents to act in real systems.

- **Memory / state for agent teams**: [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [huangruiteng/loopx](https://github.com/huangruiteng/loopx), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), and [mem0ai/mem0](https://github.com/mem0ai/mem0). Long-running and collaborative agents require durable state and shared memory; this is moving from a nice-to-have to core infrastructure.

- **Context-efficient local intelligence**: [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom). Deterministic, local-first knowledge graphs and token compression cut costs and improve latency, especially for coding agents.

- **DeepSeek-native coding terminals**: [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix). Engineering around prefix-cache stability is a fresh angle; it aims to make continuous agentic coding economically viable on DeepSeek models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*