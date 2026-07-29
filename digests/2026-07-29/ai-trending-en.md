# AI Open Source Trends 2026-07-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-29 01:26 UTC

---

# AI Open Source Trends Report — 2026-07-29

## 1. Today’s Highlights

Today’s AI open-source landscape is dominated by **agent tooling that extends Claude Code, Codex, and other coding agents**. The top trending repos are almost entirely agent‑centric: `affaan-m/ECC` (+636 stars) touts a “harness” for performance optimization, `bradautomates/claude-video` (+988) gives Claude video understanding via frame extraction and transcription, and `huggingface/speech-to-speech` (+227) enables local voice agents. At the same time, infrastructure projects like `andrewyng/aisuite` (+62) and `microsoft/agent-governance-toolkit` (+46) signal that the community is maturing beyond single agents toward **unified provider abstractions and enterprise security**. The strong showing of “skills” and “harness” libraries suggests that the coding‑agent ecosystem (Claude, Codex, OpenCode) is becoming a platform of its own.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,137 | Get up and running with Kimi‑K2.6, GLM‑5.2, DeepSeek, and other models. The most popular local inference engine, recently updated to support multiple new model families. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,074 | The de‑facto model‑definition framework for text, vision, audio, and multimodal models. Still the central hub for state‑of‑the‑art ML. |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Python | – (+62 today) | Simple, unified interface to multiple generative AI providers. Gains traction as a lightweight abstraction layer for switching between OpenAI, Anthropic, Google, etc. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,042 | Core deep‑learning framework with strong GPU acceleration. Every AI agent and model release depends on it – still the default for research and production. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,716 | Idiomatic Java library for building LLM‑powered applications with tool calling, MCP support, and agent RAG. Gains importance as enterprise Java teams adopt AI. |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | Python | 11,057 | A 100‑line LLM framework that lets agents build agents. Stands out for its minimal design and ability to bootstrap meta‑agent loops. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 234,826 (+636 today) | Agent harness for performance optimization: skills, instincts, memory, and security for Claude Code, Codex, Cursor, and more. Leading the “harness” trend with explosive daily growth. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Python | – (+988 today) | Gives Claude the ability to watch any video (download, extract frames, transcribe, hand to Claude). Top trending today – video understanding becomes a first‑class agent capability. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 221,914 | The agent that grows with you – a self‑learning, persistent agent framework. High total stars reflect strong community belief in adaptive agents. |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | TypeScript | – (+797 today) | Self‑hosted Grok companion with realtime voice chat, Minecraft and Factorio integration. Brings the “Neuro‑sama” vision to open‑source, attracting huge interest in gaming AI companions. |
| [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | Python | – (+46 today) | Enterprise‑grade governance: policy enforcement, zero‑trust identity, execution sandboxing, and reliability engineering. Covers OWASP Agentic Top 10, important for production deployments. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,344 | Frontend stack for agents & generative UI – React, Angular, Mobile, Slack support. Makers of the AG‑UI Protocol, bridging agent logic with user interfaces. |
| [langgraph](https://github.com/langchain-ai/langgraph) | Python | 38,362 | Build resilient agents using LangChain’s graph‑based orchestration. Now the backbone for many production multi‑agent systems. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | – (+227 today) | Build local voice agents with open‑source models. Capitalises on the surge of voice‑interactive agents, enabling on‑device speech pipelines. |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | – (+423 today) | Turns any technical PDF into a Claude Code skill – ready to study and reference while working. Reinforces the “skillification” of knowledge for AI coding agents. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,094 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs; strong daily momentum as a desktop AI hub. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 99,785 | Generates HD short videos from a topic using AI and automation workflows. Remains a top application for content creation. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 71,132 | Open data platform for analysts, quants, and AI agents. Widely adopted as the foundation for AI‑powered trading agents (see Vibe‑Trading, daily_stock_analysis). |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,059 | Step‑by‑step implementation of a ChatGPT‑like LLM in PyTorch. The definitive educational resource for understanding Transformer internals. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,956 | Train a 64M‑parameter LLM from scratch in just 2 hours. Democratises LLM pretraining, lowering the barrier for enthusiasts and researchers. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,421 | A course on LLM inference serving on Apple Silicon – builds a tiny vLLM + Qwen. Targeted at systems engineers looking to understand deployment. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,241 | LLM evaluation platform supporting 100+ datasets. Essential for benchmarking new models and agent systems. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,270 | Leading open‑source RAG engine with agent capabilities. Combines advanced retrieval with LLM orchestration – the most starred RAG‑specific project. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | TypeScript | 61,952 | Universal memory layer for AI agents. Enables persistent, cross‑session context for any agent framework – a key enabler for long‑running assistants. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 88,878 | Persistent context across sessions for every agent; compresses session data and injects relevant context. Hugely popular as the “memory” patch for Claude Code. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Jupyter Notebook | 28,856 | Notebooks showcasing advanced RAG techniques. A go‑to reference for practitioners building production retrieval systems. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,405 | High‑performance cloud‑native vector database. The standard choice for large‑scale ANN search in RAG pipelines. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 62,962 | Compresses tool outputs, logs, and RAG chunks before reaching the LLM – claims 20–95% fewer tokens. Critical for reducing cost and latency in agent loops. |

## 3. Trend Signal Analysis

The clearest signal today is the **explosive growth of the “agent harness” ecosystem**, particularly around Claude Code and its siblings (Codex, OpenCode, Cursor). Projects like `affaan-m/ECC`, `bradautomates/claude-video`, `virgiliojr94/book-to-skill`, and `thedotmack/claude-mem` are not just wrappers – they are building a new layer of capabilities: persistent memory, video understanding, skill creation, and governance. This mirrors the trajectory of early LLM frameworks (LangChain, LlamaIndex) but now targets **code‑generation agents** as the primary runtime.

A second emerging trend is the **“voice‑first” agent**. `huggingface/speech-to-speech` and `moeru-ai/airi` (with realtime voice chat) show that open‑source is catching up to commercial voice assistants. The combination of local speech‑to‑speech models (e.g., from Hugging Face) and gaming integration (Minecraft, Factorio) points toward a future where agents are both vocal and embodied.

Third, the **governance and safety layer** is finally getting attention. Microsoft’s `agent-governance-toolkit` covers the OWASP Agentic Top 10, and `headroomlabs-ai/headroom` addresses token cost and privacy. This suggests the community is preparing for enterprise deployment of autonomous agents.

Fourth, several “awesome‑list” repos (Finance‑LLMs, Japanese‑LLM, MLSecOps) have high star counts, indicating a **strong curation demand** as the AI space grows too fast for individuals to track. These lists act as community‑maintained highways to relevant projects.

Finally, the mention of Kimi‑K2.6, GLM‑5.2, and MiniMax in `ollama/ollama`’s description ties today’s activity to **recent Asian‑origin model releases**, confirming that the multi‑model ecosystem is becoming truly global.

## 4. Community Hot Spots

- **`affaan-m/ECC` (agent harness)** – The highest‑starred trending AI project today. Its “skills, instincts, memory, security” approach is becoming the template for coding‑agent tooling. Developers should watch how it evolves into a general‑purpose agent runtime.

- **`bradautomates/claude-video`** – With +988 stars in a single day, this project proves that video understanding for agents is a massive unmet need. Expect many forks and integrations with other agents soon.

- **`microsoft/agent-governance-toolkit`** – Enterprise AI teams should evaluate this for production governance. It covers zero‑trust, sandboxing, and reliability – areas where most open‑source agents currently fall short.

- **`moeru-ai/airi`** – A unique blend of companion AI, voice, and gaming. Its rapid star growth (+797) indicates strong interest in “living” agents that exist both in‑game and on the desktop.

- **`headroomlabs-ai/headroom`** – Token compression is a critical cost‑saving technique for any agent workflow. With 62k+ total stars and active development, it’s a must‑consider dependency for anyone building agent loops.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*