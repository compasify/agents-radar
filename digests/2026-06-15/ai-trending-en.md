# AI Open Source Trends 2026-06-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-15 00:30 UTC

---

Here is the AI Open Source Trends Report for **2026-06-15**.

---

## 1. Today's Highlights

Today's AI landscape is dominated by a rapid commoditization of AI agent infrastructure. While the broader GitHub trending list was largely non-AI (IPTV, testing, and web frameworks), the AI-tagged ecosystem tells a different story: **Agentic memory and security are the new frontiers.** Projects like `mem0ai/mem0` and `claude-mem` are standardizing persistent context for agents, while NVIDIA’s `SkillSpector` (trending with +964 stars today) signals a growing industry need for trust and safety in autonomous workflows. The rise of low-code AI development platforms (e.g., `Flowise`, `JeecgBoot`) and deeply integrated agent harnesses (e.g., `AutoGPT`, `hermes-agent`) indicates that the community is moving beyond "chat with a model" toward building **reliable, stateful, and auditable AI co-workers.**

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐82,853 total. High-throughput inference engine; the de-facto standard for serving open-weights LLMs in production.
- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐174,167 total. The simplest way to run local LLMs (DeepSeek, Qwen, Gemma); essential for local-first agent setups.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐161,587 total. The universal model-definition framework; every new model release lands here first.
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** — ⭐7,616 total. A rising Rust-based LLM application framework for building modular, high-performance agents.
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** — ⭐4,278 total. Educational project teaching LLM inference serving on Apple Silicon; excellent for systems engineers entering AI.

### 🤖 AI Agents / Workflows
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — ⭐184,940 total. The original autonomous agent vision; still the most starred agent project, now evolving towards a mature harness.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐193,517 total. Leading agent framework designed for growth and extensibility; a top community pick for building custom agents.
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — ⭐141,518 total. User-friendly interface for agents, supporting Ollama and OpenAI; the go-to for visual agent management.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — ⭐139,281 total. The foundational agent engineering platform; still the most common backend for complex agent chains.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — ⭐86,145 total. Multi-agent LLM framework for financial trading; highlights the verticalization of agents into finance.
- **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** — ⭐0 (+964 today). *Today's Trending.* Security scanner for AI agent skills; detects vulnerabilities and malicious patterns. Critical for enterprise agent adoption.

### 📦 AI Applications
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — ⭐47,324 total. AI productivity studio with 300+ assistants; a Swiss-army knife for daily AI use.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** — ⭐77,060 total. AI-driven development environment; letting agents write, test, and deploy code autonomously.
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — ⭐0 (+244 today). *Today's Trending.* Foundation model for the language of financial markets; a vertical AI application gaining steam.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐42,529 total. LLM-powered stock analysis dashboard; zero-cost, automated financial analysis.
- **[ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai)** — ⭐27,205 total. Python scraper based on AI; turning web scraping into a natural-language task.

### 🧠 LLMs / Training
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** — ⭐100,754 total. Core training framework; every new model arch and fine-tuning method depends on it.
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** — ⭐195,659 total. Mature ML framework; still essential for production MLOps and TFLite deployments.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — ⭐7,083 total. Comprehensive LLM evaluation platform; critical for benchmarking and model selection.
- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** — ⭐58,384 total. Leading vision model suite (YOLO); bridges vision and LLM agents.

### 🔍 RAG / Knowledge
- **[langgenius/dify](https://github.com/langgenius/dify)** — ⭐145,202 total. Production-ready RAG platform with agentic workflow; the most integrated RAG solution.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐82,718 total. Leading open-source RAG engine; fuses retrieval with agent capabilities.
- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** — ⭐82,192 total. Turns images/PDFs into structured data for LLMs; key bridge between unstructured documents and RAG.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐58,554 total. Universal memory layer for AI agents; enables persistent long-term context across sessions.
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** — ⭐17,827 total. Self-hosted knowledge graph engine for agent memory; a rising star in durable agent state.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — ⭐44,774 total. High-performance cloud-native vector database; cornerstone of enterprise RAG stacks.

## 3. Trend Signal Analysis

The data reveals a decisive shift from **one-shot LLM calls** to **stateful, multi-session agent systems.** The explosive growth of `mem0` (58k stars), `cognee`, and `claude-mem` (82k stars) indicates that the community is actively solving the "amnesia" problem of AI agents. The second major trend is **agent security as a prerequisite for adoption**—NVIDIA’s `SkillSpector` trending with +964 stars today shows that as agents gain tool access (file systems, APIs, code execution), the community is demanding guardrails.

A new technical direction emerging is the **knowledge graph as agent memory.** Projects like `cognee` and `graphify` (67k stars) are moving away from flat vector stores toward structured, queryable graphs that allow agents to reason about their own history. Combined with the rise of **"agent harnesses"** (`hermes-agent`, `AutoGPT`), we are seeing the early shape of a standardized runtime for AI workers.

The financial AI vertical is also carving out a distinct niche, with `TradingAgents` (86k stars) and `Kronos` (+244 today) signaling that domain-specific LLMs and multi-agent systems for finance are no longer niche research but mainstream open-source efforts. This is likely connected to recent advances in chain-of-thought reasoning and tool-use reliability.

**Key industry connection:** The massive star count for `ollama` (174k) and `vllm` (82k), combined with `ollama`'s description listing Kimi-K2.6, GLM-5.1, and other recent model releases, implies the community is rapidly adopting the latest open-weight models. The ecosystem is now relying on local inference for sensitive agent tasks, driving demand for both lightweight LLMs and robust local infrastructure.

## 4. Community Hot Spots

- **`NousResearch/hermes-agent` (⭐193,517)** — Biggest agent harness by stars. The community is betting this will become the "Linux kernel of AI agents." Worth deep diving for anyone building custom autonomous workflows.
- **`NVIDIA/SkillSpector` (+964 today)** — Agent security is a greenfield opportunity. This project signals that the next bottleneck is not capability but trust. Developers should watch for forks and competing security scanners.
- **`mem0ai/mem0` (⭐58,554)** — Persistent memory is the missing piece for production agents. This project is likely to be integrated into every major agent framework within months.
- **`TauricResearch/TradingAgents` (⭐86,145)** — Finance is the fastest vertical adopters. This project proves that multi-agent systems for specialized domains can go viral. Developers in fintech should study its architecture.
- **`FlowiseAI/Flowise` (⭐53,573)** — Visual agent building is going mainstream. Low-code RAG and agent tools will dominate enterprise adoption. This is the no-code front-end that pairs with LangChain/vLLM backends.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*