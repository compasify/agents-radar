# AI Open Source Trends 2026-09-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-23 00:59 UTC

---

# **AI Open Source Trends Report – 2026-09-23**

---

## **1. Today's Highlights**

Google’s open agentic orchestration runtime, [`google/ax`](https://github.com/google/ax), surged with **+2,305 stars today**, signaling strong momentum in AI agent infrastructure. Meanwhile, `dream-num/univer` emerged as a standout for AI-native productivity, combining spreadsheets, docs, and PDFs into a unified agent runtime — a clear sign of the growing demand for *integrated AI workspaces*. The rise of **RAG + persistent memory systems** like `mem0ai/mem0`, `thedotmack/claude-mem`, and `Cognee` reflects a maturing ecosystem focused on long-term context retention. Notably, **open-source LLM agents are increasingly self-hosted, modular, and terminal-first**, exemplified by `Hmbown/Codewhale` (Rust) and `esengine/DeepSeek-Reasonix`.

---

## **2. Top Projects by Category**

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 146,896 | The foundational agent engineering platform; now central to multi-agent, tool-using workflows across enterprise and research. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 265,450 | A performance-optimized agent harness for Claude Code and other models — key for reducing token usage and improving reliability in real-world agent execution. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 248,120 | An evolving agent that learns over time; represents the shift toward adaptive, personalizable AI assistants beyond static prompting. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 52,083 | A full-stack AI productivity studio with 300+ autonomous assistants and unified access to frontier LLMs — ideal for developers seeking plug-and-play agent experiences. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 48,491 | Ultra-lightweight, self-hosted personal agent framework with WebUI, memory, MCP, and multi-agent support — a compelling entry point for DIY AI agents. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 91,174 | Leading open-source RAG engine that fuses retrieval with agent logic — enables intelligent, dynamic knowledge grounding for LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,844 | Drop-in memory layer for AI agents with production-grade persistence — critical for maintaining context across sessions. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 94,486 | Persistent context system that compresses session history and injects it back — works with multiple agents and LLMs, enabling true continuity. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 73,533 | Compresses tool outputs and logs before LLM input — reduces tokens by up to 95% while preserving accuracy, crucial for cost-efficient agent pipelines. |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 30,922 | Self-hosted AI memory platform using knowledge graphs — gives agents persistent, structured long-term memory across sessions. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 62,192 | Train a 64M-parameter LLM from scratch in just 2 hours — democratizes small-model training for developers and researchers. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,468 | Comprehensive LLM evaluation platform supporting 100+ datasets across reasoning, coding, safety — essential for benchmarking new models. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,680 | Builds a tiny vLLM + Qwen stack optimized for Apple Silicon — ideal for edge inference and local LLM experimentation. |

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 2305 | Google’s open agentic orchestration runtime — a major infrastructure push toward scalable, production-ready agent systems. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 181,492 | Enables rapid local deployment of Kimi, GLM, DeepSeek, Qwen, Gemma, and more — remains the go-to for local LLM experimentation. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 42,152 | Build resilient, stateful agents with graph-based control flow — a key enabler for complex, multi-step automation. |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Go | 245 | Core agent system framework — emerging as a foundational component for next-gen agent architectures. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 255 | The Office Harness for AI Agents — integrates spreadsheets, docs, slides, and PDFs into one runtime for powerful, multimodal agent workflows. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 125,168 | Generates HD short videos from topics via automated AI workflows — shows rising interest in AI-driven content creation. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 65,505 | LLM-powered stock analysis system with real-time news, decision dashboards, and auto-notifications — a prime example of vertical AI tools. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 72,446 | Open-source AI job search agent that scans portals, scores listings, tailors CVs — runs locally in CLI environments like Claude Code. |

---

## **3. Trend Signal Analysis**

The most explosive trend today is the **maturation of AI agent infrastructure**, particularly around **persistent memory, context compression, and agent orchestration**. Projects like `mem0ai/mem0`, `headroomlabs-ai/headroom`, and `thedotmack/claude-mem` show a clear industry pivot from single-task agents to long-lived, context-aware systems capable of sustained reasoning and learning. This aligns with recent LLM advancements such as **Claude 3.5 Sonnet** and **Qwen-VL 2.5**, which emphasize reasoning and multimodal integration — driving demand for better memory and retrieval layers.

A new tech stack is emerging: **terminal-first, self-hosted, Rust- or Go-based agents** (`Hmbown/Codewhale`, `esengine/DeepSeek-Reasonix`, `agent-substrate/substrate`) — indicating a shift toward lightweight, high-performance, low-latency agent execution. These tools are designed for developers who want full control and privacy, not cloud dependency.

Notably, **RAG is no longer just retrieval** — it’s evolving into **agent-enabling knowledge engines** (`infiniflow/ragflow`, `Cognee`). The convergence of RAG, memory, and agent workflows suggests we’re moving beyond “chatbots” toward **autonomous digital workers**. Google’s `ax` launch signals institutional validation of this direction, reinforcing the belief that agent orchestration will be the next layer of AI infrastructure.

---

## **4. Community Hot Spots**

- **[google/ax](https://github.com/google/ax)** — Google’s open agentic orchestration runtime is a landmark release; expect it to become the de facto standard for building scalable, production-grade agent systems.
- **[dream-num/univer](https://github.com/dream-num/univer)** — The first truly integrated AI office suite (spreadsheets, docs, PDFs, canvas) built for agents — a visionary project for future AI productivity.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Best-in-class drop-in memory layer; critical for any developer building long-running, context-aware AI applications.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — Combines RAG with agent capabilities in a single open-source engine — a must-have for advanced knowledge-grounded AI apps.
- **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** — Enables robust, stateful agent workflows; essential for building reliable, multi-step AI automation systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*