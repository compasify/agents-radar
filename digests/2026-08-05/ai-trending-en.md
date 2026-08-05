# AI Open Source Trends 2026-08-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-05 01:26 UTC

---

# AI Open Source Trends Report — 2026-08-05

**Filtering note:** Non-AI trending repos (Cypress, webpack, spdlog, Deno, Angular, Tailwind, kaneo) were excluded. The tables below highlight the most significant AI/ML projects from today’s trending list and the active topic-search dataset.

---

## 1. Today's Highlights

Today’s GitHub AI landscape is dominated by **agent memory, skill packs, and inference efficiency**. The hottest movers include Firecrawl’s `pdf-inspector` (+2,540), a Rust PDF routing library for AI document pipelines; `reverse-skill` (+2,297), a security-research skill router for Claude Code/Cursor/Cline; and TencentDB Agent Memory (+1,111), which turns conversations, docs, and code into reusable team-level agent memory. The rapid rise of "skill packs" and "memory assets" signals a shift from raw model access toward reusable, toolchain-specific agent capabilities. At the same time, `AirLLM` (+1,711) and `DeepSeek-Reasonix` (+922) show strong community interest in low-cost inference and terminal-native coding agents. Enterprise trust is also emerging, with Uber open-sourcing `ADR` for agent observability and security benchmarking.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,794 | The standard local LLM runner, now supporting Kimi, GLM, DeepSeek, Qwen, and more. It remains the default self-hosted inference layer for agent and RAG projects. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 161,058 | A web context API for searching, scraping, and interacting with websites at scale. It is central to modern AI agent data acquisition and RAG pipelines. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,191 | High-throughput, memory-efficient LLM inference and serving engine. It continues to be the backbone for open-model deployments in production. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0 (+2,540) | Fast PDF inspection, classification, and text extraction library that detects scanned vs. text-based PDFs. Its +2,540 today shows strong demand for document preprocessing in AI pipelines. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 0 (+1,711) | Runs 70B LLM inference on a single 4GB GPU via aggressive memory optimization. Lowers the hardware barrier for local large-model experimentation. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 0 (+922) | DeepSeek-native AI coding agent for the terminal, engineered around prefix-cache stability. Signals a new wave of cost-optimized, long-running CLI agents. |
| [livekit/agents](https://github.com/livekit/agents) | Python | 0 (+432) | Framework for building realtime voice AI agents with audio pipeline, LLM, and tool calling built in. A strong pick for voice-agent product development. |
| [uber/ADR](https://github.com/uber/ADR) | Python | 0 (+148) | Uber’s observability, security benchmarking, and threat-detection layer for enterprise AI agents. Shows that agent governance is becoming a mainstream infrastructure concern. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 237,710 | Agent harness performance optimization system with skills, instincts, memory, and security. It has become a go-to enhancement layer for Claude Code, Codex, and Cursor. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 225,513 | "The agent that grows with you" — a highly configurable personal AI agent framework. Its popularity reflects the broad demand for adaptive, memory-enabled agent systems. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,817 | The long-standing open-source vision for accessible autonomous agents. Remains a reference point for agent platforms and tool-building communities. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,346 | A collaborative workspace for building agentic workflows and RAG pipelines. It bridges prototype-to-production deployment across cloud, VPC, and self-hosted setups. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,428 | The agent engineering platform powering thousands of LLM applications. Its continued star growth reflects its central role in the agent ecosystem. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,882 | Makes websites accessible to AI agents and automates online tasks. The browser-agent category remains one of the most active in open source AI. |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 0 (+2,297) | AI-powered security research skill router for authorized penetration testing and reverse engineering. Its self-evolving knowledge base and multi-client support drove explosive growth today. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+653) | Agentic skills framework and software development methodology. It is part of a fast-growing wave of "skill packs" designed to make agent workflows repeatable. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,859 | User-friendly AI interface supporting Ollama, OpenAI API, and more. It remains a leading self-hosted frontend for local LLM usage. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,617 | AI-driven short-video generation from a topic or keyword. Its continued popularity shows demand for vertical AI creator tools. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 71,383 | Open data platform for analysts, quants, and AI agents. It is a strong example of AI-augmented financial workflows. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,339 | Local-first "own your intelligence" AI workspace with full document and agent support. It remains a popular choice for private AI applications. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,800 | Open-source AI job search that scans portals, scores listings, and tailors CVs in your coding CLI. Shows the rise of personal AI productivity agents. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,410 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. It is a notable example of a unified multi-model desktop app. |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Jupyter Notebook | 0 (+783) | Microsoft’s 21-lesson course for building with generative AI. Its continued daily star growth shows sustained demand for structured AI learning content. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | 0 (+320) | Edit videos with coding agents. It extends the browser-agent paradigm into multimedia production and gained strong traction today. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,804 | The foundational open-source ML framework. Still one of the most-starred AI projects and a core training/inference platform. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,338 | The model-definition framework for state-of-the-art text, vision, audio, and multimodal models. It remains the bridge between open models and application developers. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,182 | Tensors and dynamic neural networks with strong GPU acceleration. It is the default research and production framework for modern LLM work. |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | Python | 66,881 | The classic Python machine learning library. Its continued high star count reflects the enduring value of traditional ML alongside generative AI. |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,219 | Deep learning API for humans. It remains a practical entry point for building and training neural networks. |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 45,934 | Learn-it/build-it/ship-it AI engineering resource. Its popularity shows strong community appetite for hands-on AI training material. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,273 | LLM evaluation platform supporting 100+ datasets and major model families. Essential for benchmarking open and commercial models. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,441 | A course on building a tiny vLLM + Qwen inference engine on Apple Silicon. It targets systems engineers who want to understand LLM serving internals. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | --- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 102,525 | Turns codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs without vector stores. Its deterministic AST parsing model is a notable alternative to vector RAG. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,572 | Persistent context across sessions for every agent. It compresses agent activity and injects relevant context into future sessions. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,823 | Leading open-source RAG engine combining deep document understanding with agent capabilities. It is a primary choice for production-grade RAG systems. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0 (+1,111) | Team-level memory hub for AI agents, creating reusable Chat Memory, Skill, LLM-Wiki, and Code-Graph assets. It points toward governed, shared agent memory across frameworks. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,527 | Universal memory layer for AI agents. Its cross-session memory approach is now a standard building block in agent stacks. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,375 | Leading document agent and OCR platform for connecting data to LLMs. It remains a major RAG framework for complex enterprise data. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,510 | High-performance, cloud-native vector database built for scalable ANN search. It remains a cornerstone of production RAG infrastructure. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,780 | High-performance vector database and search engine for AI applications. Its Rust implementation and cloud offering make it a strong engine choice for vector workloads. |

---

## 3. Trend Signal Analysis

Today’s hot list shows an **explosive shift toward agent skills, memory, and cost optimization**. The fastest-growing repos are not model releases but "skill packs" and "memory layers": `reverse-skill` (+2,297), `pdf-inspector` (+2,540), TencentDB Agent Memory (+1,111), and `superpowers` (+653) all point to a community that wants reusable, portable capabilities for existing AI coding clients like Claude Code, Cursor, Codex, and Cline.

Several new directions are emerging. First, **"skills as a distribution format"** has become a first-class concept — routing packs, agentic methodologies, and self-evolving knowledge bases are being packaged for multiple CLI agents at once. Second, **context efficiency is now a design priority**: `headroom` compresses JSON token usage by 60–95%, `caveman` reduces Claude Code tokens by ~65%, and `DeepSeek-Reasonix` is engineered around prefix-cache stability. Third, **memory is becoming an enterprise infrastructure layer**, with TencentDB’s team-level memory hub and `claude-mem` both treating agent experience as a governed, shared asset.

The connection to recent LLM releases is clear: DeepSeek-native tools, 4GB-GPU inference via `AirLLM`, and local model runners like `ollama` all reinforce the direction of cheaper, more private, and more efficient open-weight AI. Meanwhile, the proliferation of agent security tools like Uber’s `ADR` signals that enterprise adoption is moving beyond prototypes into production governance.

---

## 4. Community Hot Spots

- **Agent skills and memory layers** — [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [claude-mem](https://github.com/thedotmack/claude-mem), [superpowers](https://github.com/obra/superpowers), and [ECC](https://github.com/affaan-m/ECC) are turning agent experience into reusable, shareable assets. This is the strongest community signal today.

- **Token and cost optimization** — [headroom](https://github.com/headroomlabs-ai/headroom), [caveman](https://github.com/JuliusBrussee/caveman), and [AirLLM](https://github.com/lyogavin/airllm) attack the cost/context bottleneck from different angles. Expect more "compression-first" tooling in agent pipelines.

- **Document preprocessing for RAG** — [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector), [Graphify](https://github.com/Graphify-Labs/graphify), and [PageIndex](https://github.com/VectifyAI/PageIndex) highlight a move beyond simple vector retrieval toward classification, knowledge graphs, and reasoning-based RAG.

- **Agent security and trust** — [uber/ADR](https://github.com/uber/ADR) and [reverse-skill](https://github.com/zhaoxuya520/reverse-skill) represent two sides of agent safety: enterprise guardrails and authorized security research. This niche is likely to grow as agents gain more tool access.

- **AI coding agents in the terminal** — [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix), [browser-use/video-use](https://github.com/browser-use/video-use), and the [compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) show that CLI-native, long-running agents are becoming a primary interface for developer work.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*