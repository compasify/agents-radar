# AI Open Source Trends 2026-08-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-14 00:59 UTC

---

# AI Open Source Trends Report — 2026-08-14

**Filter step**: Excluded non-AI trending repos (`holehe`, `SpiderFoot`, `manim`) and non-AI topic-search results (`Front-End-Checklist`, `Julia`, `Airflow`, etc.). Remaining projects were grouped by primary category.

---

## 1. Today's Highlights

Today's trending list is dominated by agent tooling rather than raw model releases: `diagram-design` added 4,475 stars, `macro` added 1,239, and `agency-agents`, `needle`, and `semantica` each gained more than 700. Anthropics' public `skills` repo and `obsidian-skills` are pushing "Agent Skills" toward becoming a standardized, portable unit of agent capability. Meanwhile, edge AI is emerging as a serious category, led by a 14MB foundation model from `needle` and on-device dictation in `FluidVoice`. NVIDIA's `Switchyard`, Unsloth, and continuing RAGFlow momentum show that model routing, fine-tuning, and retrieval infrastructure are all staying hot as new open-weight models enter the ecosystem.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+4475) | 29 editorial diagram types for Claude Code, built as self-contained HTML + SVG. Its explosive one-day star gain signals huge demand for higher-quality agent-generated output. |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | 0 (+713) | Graph-native infrastructure for context and accountable AI systems. It bridges knowledge-graph and agent-memory design, gaining rapid traction today. |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Rust | 0 (+408) | LLM traffic router across models/providers while preserving OpenAI and Anthropic API compatibility. Points to enterprise demand for model benchmarking, fallback, and cost optimization. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Python | 0 (+328) | Local UI to run and train LLMs and diffusion models, including Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, and FLUX. It combines fine-tuning and inference in an accessible interface. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,484 | The default local LLM runtime, updated for Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. Continues to be the backbone of self-hosted AI experimentation. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,079 | The standard model-definition framework for text, vision, audio, and multimodal models. Remains the baseline for open-weight model distribution and interoperability. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 166,981 | Context API to search, scrape, and interact with the web at scale for LLM applications. Increasingly essential for agent and RAG pipelines that need live web data. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,261 | Modular Rust framework for building LLM applications. Shows the Rust-based AI infrastructure wave expanding beyond inference into agent tooling. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,979 | Agent harness performance optimization with skills, instincts, memory, and security for Claude Code, Codex, Cursor, and more. Its scale indicates how fiercely the coding-agent ecosystem is competing. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,593 | The original accessible AI agent platform. Still a major reference for autonomous task automation. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,187 | Agent engineering platform that standardizes tools, models, and memory. Remains the default starting point for many production agent stacks. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,120 | Makes websites accessible to AI agents and automates online tasks. Core infrastructure for web-browsing agents and AI process automation. |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+312) | Official public repository for Agent Skills. This is a strong signal that portable, reusable agent capabilities are becoming a first-class ecosystem. |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | TypeScript | 0 (+241) | All-in-one AI agent workspace that runs Claude Code/Codex across 100+ integrations, MCP, apps, browser, and files with shared memory. One-click or BYOK model support makes it a compelling "agent desktop." |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | | 0 (+292) | Agent skills for Obsidian, teaching agents to use Obsidian CLI and open formats including Markdown, Bases, and JSON Canvas. Aligns with the trend toward knowledge-worker agents. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0 (+778) | A "complete AI agency" packaged as specialized agents with personalities and processes. Its +778 today shows appetite for ready-made agent teams, even in shell form. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,718 | Self-hosted AI interface over Ollama and OpenAI-compatible APIs. The de facto local chat UI for users who want private model access. |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | 0 (+1239) | Unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM, all @-linked with shared AI memory. The second-biggest star gain of the day shows strong pull for AI-native productivity suites. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,429 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unifies access to frontier LLMs in one desktop-style app. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 103,131 | Automated AI workflow that generates HD short videos from a topic or keyword. A popular vertical application of LLM + media automation. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,748 | Open-source AI job-search agent that scores listings and tailors CVs, designed to run inside Claude Code/Codex. Demonstrates practical "agent as career tool" workflows. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 62,743 | LLM-driven multi-market stock analysis with real-time news, dashboards, and automated alerts. A strong example of domain-specific AI application momentum. |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | TypeScript | 0 (+118) | Desktop app generating 3D models from images using local AI entirely on the GPU. Fits the trend toward private, local generative content tools. |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Swift | 0 (+76) | On-device macOS dictation app with custom-trained AI enhancement; a local alternative to Wispr Flow. Windows, iOS, and Linux versions are planned. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0 (+769) | A 14MB foundation model for phones, wearables, smart home, and robots. Huge one-day gain underscores the move to ultra-small local models. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,612 | Step-by-step PyTorch implementation of a ChatGPT-like LLM. The standard educational resource for understanding LLM internals. |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Python | 0 (+205) | Official Python inference and LoRA trainer for the LTX-2 audio-video generative model. A direct signal that open-weights video generation is moving into developer hands. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 76 | Decoder-only LLM built from scratch in Rust with Candle, including MoE, sparse attention, and quantization-aware training. Pure-Rust training/inference is an emerging niche to watch. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,359 | Core deep learning framework underlying most open LLM training and fine-tuning. Its continued centrality shapes the entire AI ecosystem. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,006 | Still a major ML framework for production and research. Even in the LLM era, TensorFlow remains a key part of the AI infrastructure landscape. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,604 | YOLO26/YOLO11/YOLOv8 training and inference for detection, segmentation, and tracking. The default open-source CV toolkit for applied AI teams. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,013 (+465) | Leading open-source RAG engine that combines RAG with agent capabilities. Trending again today with +465 stars. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,654 | Persistent context across agent sessions: captures, compresses, and reinjects relevant context. Essential for long-running coding agents. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 106,041 | Turns codebases, docs, SQL schemas, and PDFs into a queryable knowledge graph with deterministic AST parsing and no vector store. Integrates as a skill for Claude Code, Cursor, Codex, and Gemini CLI. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,623 | Leading document agent and OCR platform for RAG workflows. Continues to bridge enterprise data with agentic LLMs. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,628 | Cloud-native vector database for scalable ANN search. Core infrastructure for production RAG systems. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,967 | High-performance vector database with filtering and cloud support. Strong choice for teams seeking Rust-based retrieval infrastructure. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 30,004 | Self-hosted knowledge graph engine that gives agents long-term memory. Moves agent memory beyond vector stores into structured graph context. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,209 | Universal memory layer for AI agents. Persists user/agent memory across sessions and is becoming a standard component in agent stacks. |

---

## 3. Trend Signal Analysis

Today's community attention is concentrated in the agent tooling layer rather than in raw model releases. The biggest one-day star movements belong to `diagram-design` (+4,475), `macro` (+1,239), `agency-agents` (+778), `needle` (+769), `semantica` (+713), and `Switchyard` (+408). That mix shows three simultaneous pulls: making agent output more usable, packaging agents into turnkey "teams," and adding infrastructure for routing and context.

Agent Skills are emerging as the dominant distribution unit. Anthropics' official `skills` repo, `obsidian-skills`, and `diagram-design` are all examples of capabilities being packaged as reusable skills for coding agents. Combined with MCP integration, this is becoming the open-source equivalent of an "agent app store."

Edge inference is another clear first-time wave. A 14MB foundation model (`needle`) and on-device dictation (`FluidVoice`) are early signals that tiny models will be the default for privacy-sensitive work. This is possible because of quantization and small open-weight releases from the latest model cycles.

Model routing and graph-native memory are also becoming necessary layers. `Switchyard` and OpenCompass address the crowded field of recent releases — Qwen3.8, Kimi K3, GLM-5.2, DeepSeek-V4, MiniMax-H3, and others. Meanwhile, `semantica`, `Graphify`, and `cognee` challenge pure vector-RAG with graph-structured context. Rust is also gaining ground across AI infrastructure, appearing in `Switchyard`, `rig`, `macro`, and `aarambh-studio`.

---

## 4. Community Hot Spots

- **Agent Skills as portable packages** — [anthropics/skills](https://github.com/anthropics/skills), [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills), and [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) show that agents are becoming composable through skills. Developers should standardize skills early to avoid agent-vendor lock-in.

- **AI-native workspaces** — [macro-inc/macro](https://github.com/macro-inc/macro) and [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) are reimagining productivity suites around agents, MCP, and shared memory. Their star gains today (+1,239 and +241) show strong validation.

- **Edge and tiny models** — [cactus-compute/needle](https://github.com/cactus-compute/needle), [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice), and [Picovoice/picollm](https://github.com/Picovoice/picollm) indicate on-device inference is viable for phones, wearables, and robots. Privacy and latency are the main drivers.

- **Model gateways and evaluation** — [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) and [open-compass/opencompass](https://github.com/open-compass/opencompass) are becoming essential as multiple open-weight releases make model routing, benchmarking, and cost control must-haves.

- **Graph and memory RAG** — [infiniflow/ragflow](https://github.com/infiniflow/ragflow), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [topoteretes/cognee](https://github.com/topoteretes/cognee), and [mem0ai/mem0](https://github.com/mem0ai/mem0) are moving beyond vector-only retrieval toward structured knowledge graphs and long-term agent memory.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*