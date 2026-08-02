# AI Open Source Trends 2026-08-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-02 01:43 UTC

---

## AI Open Source Trends Report — 2026-08-02

**Filter note:** Of the 15 trending repos, 10 are clearly AI/ML-related. Excluded as non-AI: `awesome-systematic-trading`, `kaneo`, `gh-stack`, `invidious`, and `ansible`. Topic-search results are all AI/ML-tagged; the tables below highlight the highest-signal projects per category.

**Data note:** The trending source only exposed today’s star delta and listed totals as `0`; those values are reproduced verbatim. Topic-search entries show total stars only.

---

### 1. Today's Highlights

Today’s AI open-source momentum is centered on **agent infrastructure** rather than new model weights. The biggest AI gainer is [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) at **+1,320 stars today**, an AI-powered skill router for security workflows. Microsoft’s [AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) (+949) shows sustained demand for structured AI education, while [Hugging Face’s speech-to-speech](https://github.com/huggingface/speech-to-speech) (+442) signals a breakout moment for local voice agents. Bytedance’s [deer-flow](https://github.com/bytedance/deer-flow) (+209) and Tencent’s [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) (+227) show major vendors shipping long-horizon and memory layers for agents. GitHub also open-sourced its [Copilot SDK](https://github.com/github/copilot-sdk) (+142), signaling that Copilot Agent is becoming an embeddable platform.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,526 | Local LLM runner now supports Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, and more. It remains the default tool for running open models on laptops and servers. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,229 | The standard framework for using and fine-tuning state-of-the-art text, vision, audio, and multimodal models. Still the backbone of open-source model consumption. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 159,118 | API for search, scraping, and web interaction built for LLM agents. Its popularity shows that data access is a core requirement for agentic AI. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,185 | The agent engineering platform, widely used to compose LLMs, tools, and memory. It remains central to production LLM application development. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 87,883 | High-throughput and memory-efficient inference and serving engine for LLMs. It is the critical deployment layer for open-weight models. |
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | Java | 0 (+142) | Official multi-platform SDK for integrating GitHub Copilot Agent into apps and services. The +142 today suggests developers are eager to build on Copilot as a platform. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,400 | Frontend stack for agents and generative UI across React, Angular, mobile, and Slack. It brings agent capabilities into end-user interfaces. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,126 | Modular Rust framework for building scalable LLM applications. Its presence signals growing interest in high-performance, low-level agent infrastructure. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,751 | The original open-source autonomous agent project. It continues to define the accessible-agent vision and remains a reference architecture. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,523 | Makes websites accessible to AI agents and automates online tasks. It is a leading library for browser-based agent workflows. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Python | 0 (+209) | Open-source long-horizon SuperAgent harness from Bytedance. It handles minute-to-hour tasks using sandboxes, memory, tools, skills, and subagents. |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 0 (+1,320) | AI-powered routing and toolchain bootstrapping for security research and authorized pentesting. Today’s fastest-rising AI repo (+1,320) shows demand for specialized agent skill packs. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 72,928 | A nano Claude Code–like agent harness built from zero to one. It is a valuable educational path for understanding agent implementations. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 46,502 | Ultra-lightweight, self-hosted personal AI agent framework with WebUI, tools, memory, MCP, and multi-agent workflows. It is a strong option for local-first agents. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 46,267 | Open-source super AI assistant and agent harness, formerly chatgpt-on-wechat. It plans tasks, runs tools/skills, and self-evolves with memory across channels. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,252 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. It is one of the most-used multi-model agent workbenches. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 0 (+949) | 12-week, 24-lesson AI curriculum from Microsoft. It gained +949 today, the second-highest AI increase in the trending list, reflecting continued mass onboarding. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | 0 (+442) | Build local voice agents with open-source models. The +442 today signals a wave of interest in private, on-device voice AI. |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Jupyter Notebook | 0 (+108) | 21-lesson course for building with generative AI. It pairs with the beginner ML course and keeps Microsoft’s education suite highly visible. |
| [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | Python | 0 (+107) | Native and compact structured latents for 3D generation. It pushed +107 today and represents a new frontier in cost-efficient 3D asset creation. |
| [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) | Python | 0 (+58) | Gradio WebUI for TTS, zero-shot voice cloning, Whisper processing, and vocal isolation. It is a practical creative toolkit for multilingual audio production. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,014 | Automated AI workflow that generates HD short videos from a topic or keyword. It remains one of the most used open-source content-generation apps. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,783 | LLM-powered multi-market stock analysis system with real-time news, dashboards, and notifications. It shows demand for vertical AI analyst applications. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,395 | AI converts documents or topics into native PowerPoint decks with shapes, transitions, charts, and narration. It targets the huge office-automation market. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,113 | The core deep learning framework with strong GPU acceleration. It underpins nearly all modern LLM training and fine-tuning. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,315 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. It is the canonical hands-on resource for LLM internals. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,256 | LLM evaluation platform covering 100+ datasets and major open/closed models. Evaluations are becoming an essential part of the open-model release cycle. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,428 | Build a tiny vLLM plus Qwen on Apple Silicon. It bridges LLM systems engineering with practical inference learning. |
| [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) | Jupyter Notebook | 2,580 | Comprehensive generative AI resources including roadmap, projects, and interview prep. It is a one-stop learning path for GenAI skills. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 56 | Decoder-only LLM built from scratch in pure Rust/Candle, with Gated DeltaNet, sparse attention, and MoE. It represents an emerging pure-Rust training/agent direction. |
| [ai-glimpse/toyllm](https://github.com/ai-glimpse/toyllm) | Python | 25 | ToyLLM learns LLMs from scratch. It is a minimalist educational project for understanding transformer training. |
| [AmirMotefaker/Create-your-own-ChatGPT](https://github.com/AmirMotefaker/Create-your-own-ChatGPT) | Jupyter Notebook | 23 | Educational notebook guiding users to create their own ChatGPT model. It reinforces the community’s appetite for from-scratch LLM builds. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,575 | Leading open-source RAG engine that fuses retrieval, agents, and context management. It is a strong choice for production RAG applications. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,262 | Captures agent session data, compresses it, and injects relevant context into future sessions. It directly attacks the multi-session memory problem. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,278 | Universal memory layer for AI agents. It is becoming a standard primitive for long-term agent memory. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,211 | Local-first agent experience with RAG, document management, and multi-model support. It lets users own their intelligence without cloud dependencies. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,281 | Leading document agent and OCR platform. It is a core toolbox for connecting private data to LLMs. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0 (+227) | Team-level memory hub for AI agents, turning conversations, docs, and code into chat memory, skills, LLM-wiki, and code-graph. Its +227 today highlights memory as dedicated infrastructure. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,457 | High-performance cloud-native vector database for scalable ANN search. It remains a primary vector store for RAG systems. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,712 | High-performance vector database and search engine for next-generation AI. It has become a common backend for embedding retrieval. |

---

### 3. Trend Signal Analysis

Today’s data sends one clear message: the open-source community is **industrializing agents**. The fastest-growing AI repos are not new model weights, but agent harnesses, skill packs, and memory layers. [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) (+1,320), [bytedance/deer-flow](https://github.com/bytedance/deer-flow) (+209), and [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) (+227) point to a world where models are commodity and orchestration is the value.

The “skill” concept is becoming the new plugin format for AI coding clients — portable, self-evolving knowledge packs that route tasks and bootstrap tools on demand. At the same time, memory is separating into its own infrastructure layer: TencentDB, [mem0ai/mem0](https://github.com/mem0ai/mem0), and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) all treat persistent context as a managed service.

Voice is another breakout: [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) (+442) and [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) (+58) indicate local voice agents and zero-shot cloning are moving from research to creator tools. On the model side, no new foundation model appeared in today’s trending list, but [ollama/ollama](https://github.com/ollama/ollama) now advertises support for Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma — reinforcing a fragmented, multi-model local inference ecosystem.

[github/copilot-sdk](https://github.com/github/copilot-sdk) (+142) also signals that agents are becoming embeddable platforms. New directions worth watching include vectorless/reasoning-based RAG in [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), pure-Rust LLM building in [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio), LLM unlearning/MLSecOps resource lists, and structured-latent 3D generation in [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2).

---

### 4. Community Hot Spots

- **Portable agent skill packs** — [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill), [NomaDamas/k-skill](https://github.com/NomaDamas/k-skill), and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify). Skills are replacing monolithic prompts and plugins; reverse-skill’s +1,320 today is the strongest signal.

- **Agent memory and context persistence** — [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem). Cross-session memory is the missing piece for production agents; expect more managed memory backends.

- **Long-horizon autonomous agents** — [bytedance/deer-flow](https://github.com/bytedance/deer-flow), [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT), and [browser-use/browser-use](https://github.com/browser-use/browser-use). The goal is agents that work for minutes to hours, with sandboxes, memory, and subagents.

- **Local voice agents and audio apps** — [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) and [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro). Privacy-preserving voice cloning and TTS are now accessible in local WebUIs; +442 today for the Hugging Face project.

- **Embeddable agent SDKs** — [github/copilot-sdk](https://github.com/github/copilot-sdk) and [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit). GitHub’s SDK is a landmark: the Copilot Agent is becoming a platform component rather than a standalone product.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*