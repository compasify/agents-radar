# AI Open Source Trends 2026-08-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-14 23:11 UTC

---

# AI Open Source Trends Report — 2026-08-15

## 1. Today's Highlights

Today's AI trending list is led by agent-context and developer-experience projects rather than raw model releases. The biggest AI star-gainer is [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) with +3,651 stars today, a Claude Code diagram pack that shows strong demand for higher-quality agent output. [semantica-agi/semantica](https://github.com/semantica-agi/semantica) (+1,183) points to graph-native context as the next evolution of RAG, while [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) (+769) and [macro-inc/macro](https://github.com/macro-inc/macro) (+435) push the "all-in-one AI agent workspace" pattern. On the model side, [cactus-compute/needle](https://github.com/cactus-compute/needle) (+661) delivers a 14MB foundation model for edge devices, and [unslothai/unsloth](https://github.com/unslothai/unsloth) (+502) makes local training and inference for Qwen3.8-class models easier. The overall center of gravity is shifting from model weights to the memory, workspace, and tooling layers around them.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,106 | The de-facto model-definition framework for state-of-the-art ML models across text, vision, audio, and multimodal inputs. It remains the baseline for both inference and training in the open-source AI ecosystem. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,375 | Core dynamic neural network framework with strong GPU acceleration. It underpins most LLM training and research workloads today. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,545 | Local model runner supporting Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, and more. Its continued popularity reflects the shift toward private, on-device inference. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 167,433 | Context API to search, scrape, and interact with the web at scale. It is essential infrastructure for grounding LLM applications with live data. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,262 | The agent engineering platform with unified APIs over LLM providers, tools, and memory. It remains a central hub for building production agent workflows. |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 0 (+153) | A purpose-built browser for AI agents to run browser automation while sharing a logged-in browser state without disturbing the user. Its zero-cost, zero-config approach is a notable new pattern for agent infrastructure. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0 (+69) | Official plugin specification and plugins for Cursor, showing how AI code editors are opening up to third-party extensions. Signals an ecosystem race around agent-native developer tools. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+3651) | A collection of 29 editorial diagram types for Claude Code, packaged as self-contained HTML + SVG with no external dependencies. It exploded with +3,651 stars today, indicating huge demand for better visual output from agentic coding tools. |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | TypeScript | 0 (+769) | Open-source all-in-one AI agent workspace supporting Claude Code, Codex, 100+ integrations, MCP, apps, browser, and files with shared memory. Its +769 stars today show the market pulling toward unified agent control planes. |
| [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) |  | 0 (+203) | Curated list of DeepSeek agent tooling and ecosystem resources. It gained +203 stars today, making it a quick navigation point for the fast-growing DeepSeek agent ecosystem. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 230,638 | Self-described "agent that grows with you" from Nous Research. The massive star count signals strong community trust in adaptive personal agents. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 240,165 | Agent harness performance optimization system for Claude Code, Codex, Opencode, Cursor, and beyond. Its popularity highlights demand for skills, memory, security, and research-first development in agent harnesses. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,245 | Makes websites accessible for AI agents and automates online tasks with ease. It remains one of the most visible browser-agent projects. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 47,002 | Ultra-lightweight, self-hosted personal AI agent framework in Python with WebUI, tools, memory, MCP, and multi-agent workflows. Its low footprint makes it a strong contender for local-first agent deployments. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 34,586 | DeepSeek-native AI coding agent for the terminal, engineered around prefix-cache stability for long-running sessions. It is highly relevant to the current DeepSeek wave and cost-efficient coding agents. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | 0 (+435) | Unified workspace for teams combining email, chat, docs, tasks, agents, calls, and CRM with @-linked shared AI memory. Its +435 stars today show appetite for AI-native team collaboration. |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | TypeScript | 0 (+580) | Desktop app for generating 3D models from images or prompts using local AI entirely on GPU. It gained +580 stars today, embodying local-first generative 3D. |
| [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | JavaScript | 0 (+302) | Open-source foundation of ToolJet AI, an enterprise app-generation platform for internal tools, dashboards, workflows, and AI agents. Its +302 stars today show continued interest in low-code AI application building. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,478 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. It offers unified access to frontier LLMs and is a strong example of the AI-native desktop app category. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 103,559 | Generates HD short videos from a topic or keyword using AI models and automated workflows. It demonstrates the maturity of verticalized AI content creation. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 46,833 | Turns documents or topics into native PowerPoint decks with shapes, transitions, charts, and audio narration. It is a practical AI productivity tool for business presentations. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,851 | Open-source AI job search that scans job portals, evaluates listings with an A-F rubric, tailors CVs, and tracks applications. It runs locally in AI coding CLIs such as Claude Code and Codex. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 62,877 | LLM-powered multi-market stock analysis system with real-time news, decision dashboards, and automated notifications. It is a notable vertical AI application in finance. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Python | 0 (+502) | Local UI to run and train LLMs and diffusion models, supporting Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, FLUX, and more. Its +502 stars today show strong demand for accessible fine-tuning and inference on consumer hardware. |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0 (+661) | A 14MB foundation model designed for tiny devices such as phones, wearables, smart home, and robots. It gained +661 stars today and pushes the frontier of ultra-small on-device AI. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,666 | Step-by-step PyTorch implementation of a ChatGPT-like LLM from scratch. It is the go-to educational resource for understanding LLM internals. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,627 | YOLO26, YOLO11, and YOLOv8 hub for object detection, segmentation, classification, pose estimation, and tracking. It remains the mainstream computer vision training and inference suite. |
| [opencompass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,301 | LLM evaluation platform supporting 100+ datasets and a wide range of open and commercial models. It is essential for benchmarking the rapidly expanding open-weight model ecosystem. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,487 | Hands-on project for building a tiny vLLM + Qwen inference system on Apple Silicon. It gives systems engineers a practical path into LLM inference engineering. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,387 (+474) | Leading open-source RAG engine that fuses retrieval-augmented generation with agent capabilities. It gained +474 stars today and remains a central hub for context-layer LLM deployments. |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | 0 (+1183) | Graph-native infrastructure for context and accountable AI systems. Its +1,183 stars today make it one of the strongest signals on the list, pointing to graph-based context as the next RAG evolution. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,270 | Universal memory layer for AI agents, giving persistent long-term memory across sessions. Memory is becoming a core primitive for agent architectures. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,764 | Captures everything an agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. It works across Claude Code, Codex, Gemini, Copilot, and more. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,716 | Local-first AI agent experience with everything needed for RAG and LLM app deployment. Its "stop renting your intelligence" positioning makes it a strong private LLM stack option. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,641 | Leading document agent and OCR platform for connecting enterprise data to LLMs. It is widely used in production RAG systems. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,637 | High-performance, cloud-native vector database built for scalable vector ANN search. It is a standard choice for large-scale RAG infrastructure. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,977 | High-performance vector database and search engine for next-generation AI applications. It is popular for production similarity search and semantic memory. |

## 3. Trend Signal Analysis

The explosive community attention today is concentrated in agent infrastructure and agent output quality, not in raw model weights. The +3,651 stars for [diagram-design](https://github.com/cathrynlavery/diagram-design) show that developers are investing in how Claude Code presents and structures results. At the same time, [holaOS](https://github.com/holaboss-ai/holaOS), [macro](https://github.com/macro-inc/macro), and [ego-lite](https://github.com/citrolabs/ego-lite) are pulling the ecosystem toward unified agent workspaces and agent-native browser infrastructure.

Several new directions are appearing for the first time in this data. [semantica](https://github.com/semantica-agi/semantica) brings graph-native infrastructure for accountable AI, signaling a move beyond vector-only retrieval toward knowledge-graph context layers. [needle](https://github.com/cactus-compute/needle) shows that foundation models are shrinking dramatically — 14MB is enough for phones and wearables. Meanwhile, [modly](https://github.com/lightningpixel/modly) demonstrates local AI 3D generation on consumer GPUs, and [unsloth](https://github.com/unslothai/unsloth) makes training and running the latest open models dramatically more accessible.

The connection to recent LLM releases is clear. [Ollama](https://github.com/ollama/ollama) and [Unsloth](https://github.com/unslothai/unsloth) both reference Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek-V4, Qwen3.8, Gemma 4, and FLUX-class models. The rise of [awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) and [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) further confirms that new open-weight releases immediately trigger derivative agent tooling. As model capabilities become commoditized, value is accruing to the context, memory, graph, and workspace layers around the models.

## 4. Community Hot Spots

- **Claude Code skill/plugin economy** — [diagram-design](https://github.com/cathrynlavery/diagram-design), [cursor/plugins](https://github.com/cursor/plugins), and [ECC](https://github.com/affaan-m/ECC) all show that agent harnesses are becoming extensible platforms. Developers are willing to star specialized "skills" that improve agent output quality.
- **Graph-native context and agent memory** — [semantica](https://github.com/semantica-agi/semantica), [ragflow](https://github.com/infiniflow/ragflow), [claude-mem](https://github.com/thedotmack/claude-mem), and [mem0](https://github.com/mem0ai/mem0) signal that persistent, connected context is the next battleground in RAG and agent systems.
- **Edge and local-first AI** — [needle](https://github.com/cactus-compute/needle), [unsloth](https://github.com/unslothai/unsloth), and [modly](https://github.com/lightningpixel/modly) show strong momentum behind on-device and consumer-GPU AI, driven by privacy and cost concerns.
- **Unified AI agent workspaces** — [holaOS](https://github.com/holaboss-ai/holaOS), [macro](https://github.com/macro-inc/macro), and [ToolJet](https://github.com/ToolJet/ToolJet) are consolidating agents, tools, integrations, and memory into single control planes.
- **DeepSeek ecosystem expansion** — [awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) and [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) show how quickly a new open-weight model family generates its own agent-native tooling and curated resource lists.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*