# AI Open Source Trends 2026-08-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-23 23:10 UTC

---

*Filtering note: Non-AI trending repos (`basecamp/omarchy`, `AprilNEA/OpenLogi`, `block/buzz`, `vaultwarden`, `free-for-dev`) were excluded. Tables below highlight the most relevant AI/ML projects from both sources.*

## 1. Today's Highlights

The standout is **openai/codex**, an official Rust-based terminal coding agent that gained **+2,729 stars today**, reinforcing the shift toward lightweight, local-first agent CLIs. The “agent skills” ecosystem went mainstream: **mattpocock/skills** (+2,448), **VoltAgent/awesome-agent-skills** (+223), **affaan-m/ECC** (+427), and **anthropics/claude-plugins-community** (+257) are all pushing portable skills across Claude Code, Codex, Cursor, and Gemini CLI. On the access side, **free-claude-code** (+1,040) advertises 1.3B+ free tokens through a ToS-friendly gateway, while **NousResearch/hermes-agent** (+519) and **tinyhumansai/openhuman** (+106) advance personal, memory-driven agents. **ComfyUI** (+179) remains the default diffusion-model GUI/backend, and **apache/maka** shows agent workspaces entering foundation-level governance.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,375 | End-to-end open-source ML framework. Still the largest ML repository by total stars in the topic data, making it a baseline for production ML infrastructure. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,560 | Dynamic tensor computation and neural-network library. Core training stack for most open-source AI projects today. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,374 | Model-definition framework for state-of-the-art text, vision, audio, and multimodal models. The de facto compatibility layer for open model weights. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,806 | High-throughput, memory-efficient LLM inference and serving engine. The leading self-hosted serving layer for open-weight models. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,276 | One-command local model runner. Its continued star growth reflects sustained demand for private, local LLM execution. |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 0 (+1040) | CLI gateway offering free access to Claude Code, Codex, Pi, OpenCode, with voice support. The +1,040 surge signals rising demand for cheaper agent access and API aggregation. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | 0 (+2729) | Official lightweight coding agent from OpenAI, designed for terminal use. Today’s fastest-growing repo, signaling that terminal-native agent CLIs are becoming a default developer tool. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+2448) | Real-world agent skills from the author’s `.agents` directory. The +2,448 surge shows strong community appetite for reusable, portable agent skills. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 242,532 (+427) | Agent harness performance optimization system — skills, instincts, memory, security, and research-first development. One of the highest-starred agent-ecosystem projects. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 234,949 (+519) | “The agent that grows with you.” Its large star base and today’s +519 reinforce the move toward personal, self-evolving agents. |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | 0 (+423) | Turns any technical book PDF into a ready-to-use Claude Code skill. This is a novel workflow connecting learning content to agent skill libraries. |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) |  | 0 (+223) | Curated collection of 1,000+ agent skills compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. The closest thing to a cross-tool skill registry. |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 0 (+257) | Official community plugin marketplace for Claude Cowork and Claude Code. Its appearance shows vendors moving toward plugin-style agent extensibility. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,841 | The agent engineering platform for LLM applications. Even outside today’s trending list, it remains the most widely used orchestration layer for agents and RAG. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | 0 (+179) | The most powerful and modular diffusion model GUI, API, and backend. Still the standard tool for image/video generation workflows. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,680 | User-friendly AI interface supporting Ollama, OpenAI API, and more. The default self-hosted chat frontend for local and cloud LLMs. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,111 | Local-first all-in-one agent experience with RAG and document support. Strong positioning for “own your AI stack” users. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 115,270 | Automated AI short-video generation from a topic or keyword. One of the most popular vertical AI content-production apps. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,962 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs is a key differentiator. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,787 | Turns documents or topics into native PowerPoint decks with shapes, animations, charts, and narration. A standout document-to-deck vertical tool. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,710 | LLM-powered multi-market stock analysis with real-time news, dashboards, and automated notifications. Highlights the growing finance-agent application space. |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 0 (+440) | “Prompt as Code” — a GPT-Image2 prompt engine with 470+ reverse-engineered cases and 20+ industrial templates. Demonstrates prompt engineering becoming a software discipline. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,945 | Train a 64M-parameter LLM from scratch in about two hours. Popular entry point for hands-on LLM training education. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,330 | LLM evaluation platform supporting 100+ datasets and many major models. Increasingly important as model releases accelerate. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,512 | Learn LLM inference systems on Apple Silicon by building a tiny vLLM + Qwen. Bridges systems engineering and LLM practice. |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | HTML | 113 | Survey website on test-time scaling in large language models. Useful reference for one of the most active inference-time research directions. |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) |  | 98 | Curated paper list on large-language-diffusion models. Early-stage signal of convergence between diffusion models and LLMs. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,290 | Build agentic workflows and RAG pipelines with rich model/tool support. The most complete open-source LLM app platform by star count in this data. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,085 | Leading open-source RAG engine that fuses RAG with agent capabilities. Strong choice for document-heavy enterprise retrieval. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,824 | The leading document agent and OCR platform. Core data framework for connecting LLMs to private knowledge. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,888 | Universal memory layer for AI agents. Persistent memory remains one of the most demanded agent capabilities. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,817 | Turns codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs. Notable “no vector store” approach to agent knowledge. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,300 | Document index for vectorless, reasoning-based RAG. Represents a new direction that challenges the necessity of vector databases. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,147 | High-performance, massive-scale vector database and search engine. Popular Rust-based infrastructure for AI retrieval. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,751 | Cloud-native vector database built for scalable ANN search. Standard production infrastructure for large RAG deployments. |

## 3. Trend Signal Analysis

The clearest signal is the explosion of **agent skills**. Today’s trending list contains multiple skills-focused repositories — `mattpocock/skills`, `VoltAgent/awesome-agent-skills`, `affaan-m/ECC`, and `anthropics/claude-plugins-community` — signaling that the community is standardizing a portable skill/plugin layer on top of Claude Code, Codex, Gemini CLI, and Cursor. Meanwhile, `openai/codex` shows official vendors pushing terminal-native coding agents written in Rust, a stack that favors local-first, low-latency operation.

A second emerging direction is the **agent harness / meta-harness** layer. Projects like `ECC`, `ruvnet/ruflo`, `apache/maka`, and `tinyhumansai/openhuman` treat agents as composable systems with memory, skills, security, and append-only logs. The appearance of `apache/maka` in incubation indicates this layer is moving from startup experiments toward broader governance. Cost optimization is also accelerating: `free-claude-code` (+1,040) promotes free token access, while token-compression tools such as `headroom` and `caveman` show that context-window economics are a real bottleneck.

In RAG, vectorless approaches such as `PageIndex` and knowledge-graph extraction such as `Graphify` suggest retrieval is moving beyond pure vector search toward reasoning-based memory. Combined with recent open-weight and multimodal model releases, the center of gravity is shifting from model training to agent orchestration, skill portability, and persistent memory.

## 4. Community Hot Spots

- **openai/codex** — Official OpenAI terminal agent with **+2,729 today**. A strong indicator that coding-agent UX and Rust-based CLI stacks are now a major battleground.
- **mattpocock/skills + VoltAgent/awesome-agent-skills** — Portable skills are becoming the “plugins” of the agent era. These projects are effectively defining cross-tool skill formats.
- **free-claude-code** — With **1.3B+ free tokens** and **+1,040 today**, it highlights the growing market for zero-cost agent access and token aggregation.
- **NousResearch/hermes-agent** — At **234,949 total stars** and **+519 today**, “the agent that grows with you” captures the memory/personalization wave.
- **Comfy-Org/ComfyUI** — Still the default GUI/backend for diffusion models. Its continued momentum shows generative media remains a top open-source AI workload.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*