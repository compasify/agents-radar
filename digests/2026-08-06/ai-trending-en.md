# AI Open Source Trends 2026-08-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-06 01:24 UTC

---

## AI Open Source Trends Report — 2026-08-06

After filtering out non-AI trending repos (e.g. `next.js`, `tailwindcss`, `system-design-primer`) and general-purpose projects from topic search (e.g. Julia, Airflow, Netdata), the following report focuses on AI-relevant projects. Today's trending list is 10/13 AI-related, with agent infrastructure and memory systems dominating.

---

### 1. Today's Highlights

Today's trending list is overwhelmingly agent-centric. The fastest-growing projects are not new model weights but the infrastructure around agents: memory hubs, reusable skills, computer-use environments, and state kernels. TencentDB-Agent-Memory (+1,892) and firecrawl/pdf-inspector (+1,582) led the day, signaling that persistent memory and document understanding are key bottlenecks. Cloudflare's `computer` (+891), `obra/superpowers` (+931), and `DeepSeek-Reasonix` (+747) show strong community demand for agents that can act, remember, and work reliably over long horizons. Meanwhile, `AirLLM` (+833) and `Uber/ADR` (+354) highlight efficiency and enterprise security as parallel priorities.

---

### 2. Top Projects by Category

> Note: For repos appearing only in the trending list, the source exposed today's delta but not a real total; the total is shown as `0` as provided.

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,283 | High-throughput LLM inference and serving engine. It remains the default self-hosted serving layer for open-weight models. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,874 | Local LLM runtime with support for a rapidly growing model lineup. It is the go-to tool for private, offline LLM usage. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,377 | The standard model-definition framework for text, vision, audio, and multimodal models. Still the foundation of most open-source ML work. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,224 | Core deep learning framework and tensor library. Its ecosystem remains the primary substrate for training and inference. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 161,759 | Context API to search, scrape, and interact with the web at scale for LLMs. Increasingly important for agent context and data ingestion. |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 48,929 (+146) | Reusable computer vision tools for detection, tracking, and annotation. Appears in both today's trending and ML topic search, showing steady CV community momentum. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 0 (+833) | Runs 70B-class LLM inference on a single 4GB GPU via memory-efficient methods. Its popularity today reflects demand for low-cost local large-model inference. |
| [uber/ADR](https://github.com/uber/ADR) | Python | 0 (+354) | Enterprise AI agent security with observability, threat detection, and security benchmarking. Signals that agent security is becoming a production requirement. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/computer](https://github.com/cloudflare/computer) | TypeScript | 0 (+891) | "Give your agent a computer" — Cloudflare's entry into computer-use agent environments. This is a major infrastructure player moving into agent runtime territory. |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | Python | 0 (+326) | Lightweight loop-engineering state kernel for long-running AI agent teams. Introduces durable goals, quota-aware auto-wake, executable todos, and verifiable handoffs. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+931) | Agentic skills framework and software development methodology. High daily star growth showing the "skills" pattern is resonating widely. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 31,636 (+747) | DeepSeek-native terminal coding agent built around prefix-cache stability. Shows a new wave of coding agents optimized for specific models. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+226) | Production-grade engineering skills for AI coding agents. Represents the push toward versionable, reusable agent capabilities. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,509 | The agent engineering platform for LLM applications. Continues to be the reference orchestration and tool-calling framework. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,990 | Makes websites accessible to AI agents for automated web tasks. Strong momentum in web-capable agents. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,835 | The vision of accessible AI for everyone. Remains one of the most-starred autonomous agent platforms. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,978 | User-friendly AI interface for local/cloud LLMs. The default self-hosted ChatGPT-style experience for many users. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,395 | Local-first AI agent experience and all-in-one workspace. Brings RAG, chat, and agent features to personal data. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,770 | Generates HD short videos from a topic or keyword using AI workflows. Demonstrates the growing power of automated content creation. |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | Python | 57,247 | Deepfake software for face swapping. A long-running, high-profile CV application with continued relevance. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,190 | LLM-powered multi-market stock analysis with live news, dashboards, and notifications. A strong vertical AI finance app. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,954 | Open-source AI job search that scans portals, scores listings, tailors CVs, and tracks applications. Practical agent-driven workflow. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,265 | AI turns documents or topics into native PowerPoint decks with animations, charts, and audio narration. Office productivity vertical is hot. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,680 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,277 | LLM evaluation platform supporting 100+ datasets and many model families. Evaluation is becoming critical as open-weight models multiply. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,444 | Course for building a tiny vLLM + Qwen on Apple Silicon. Hands-on systems education for LLM serving and inference. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | On-device LLM inference powered by X-bit quantization. Relevant for edge and privacy-preserving deployments. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 63 | Decoder-only LLM built from scratch in Rust using Candle, with MoE, sparse attention, and quantization-aware training. Niche but notable new implementation. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) |  | 617 | Resource repository for machine unlearning in large language models. Emerging safety and compliance research area. |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) |  | 804 | Awesome list for on-policy distillation. Captures growing interest in efficient LLM training methods. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0 (+1892) | Team-level memory hub for AI agents, turning conversations, docs, and code into reusable memory assets. Fastest-growing repo today. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0 (+1582) | Fast PDF inspection, classification, and text extraction. Detects scanned vs text-based PDFs to enable smart routing for RAG pipelines. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 103,057 | Turns any codebase, docs, SQL schemas, and PDFs into a queryable knowledge graph. A `/graphify` skill for Claude Code, Cursor, Codex, and Gemini CLI. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,748 | Captures agent session activity, compresses it with AI, and injects relevant context into future sessions. Persistent context for many coding agents. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,910 | Leading open-source RAG engine combining retrieval with agent capabilities. A strong production context layer for LLMs. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,407 | The leading document agent and OCR platform. Core RAG framework for connecting data to LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,612 | Universal memory layer for AI agents. Provides cross-framework persistent memory. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,804 | High-performance vector database and vector search engine. A top choice for AI retrieval infrastructure. |

---

### 3. Trend Signal Analysis

The explosive community attention today is on **agent operations**, not model training. The rapid rise of "agent skills" (`addyosmani/agent-skills`, `obra/superpowers`), "loop-engineering state" (`loopx`), and "agent memory hubs" (`TencentDB-Agent-Memory`) signals a shift toward making agents reliable, resumable, and shareable across teams and sessions.

New abstraction layers are emerging. "Skills" are becoming versionable, reusable files — essentially the libraries of the agent era. "Prefix-cache stability" as a design goal in `DeepSeek-Reasonix` shows coding agents are being optimized for specific model serving characteristics. `cloudflare/computer` pushes further into computer-use agents, a direction previously dominated by smaller startups. The popularity of `firecrawl/pdf-inspector` and `Graphify-Labs/graphify` shows that document and codebase understanding remains a practical bottleneck for RAG.

The connection to recent model releases and industry events is visible. `ollama` now advertises Kimi, GLM, MiniMax, DeepSeek, and gpt-oss models, while `DeepSeek-Reasonix` rides the DeepSeek wave. `AirLLM`'s approach to running 70B-class models on a single 4GB GPU speaks to the continuing demand for frontier-class capability on commodity hardware. Finally, `Uber/ADR` signals that enterprises are already deploying agents at scale — and need security, observability, and threat detection as first-class concerns.

---

### 4. Community Hot Spots

- **Agent memory and context persistence** — [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0). Long-horizon agent work depends on durable memory; this is where the largest daily star gains landed today.

- **Reusable agent skills / methodologies** — [obra/superpowers](https://github.com/obra/superpowers), [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills). Skills as shareable, versionable building blocks are becoming the standard way to level up coding agents.

- **Computer-use agents** — [cloudflare/computer](https://github.com/cloudflare/computer). A major cloud infrastructure vendor entering the agent-environment space marks a platform shift.

- **Document understanding for RAG** — [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify). Scanned PDFs, codebases, and mixed-format documents remain one of the hardest real-world RAG problems.

- **Secure, enterprise-ready agents** — [uber/ADR](https://github.com/uber/ADR). As agents move into production, observability, security benchmarking, and threat detection become non-optional.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*