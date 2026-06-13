# AI Open Source Trends 2026-06-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-13 00:32 UTC

---

# AI Open Source Trends Report
**Date:** 2026-06-13

---

## 1. Today's Highlights

The open-source AI landscape today is dominated by an explosive wave of **agent skill frameworks** and **agentic software development methodologies**. The GitHub trending list is unusually concentrated: three of the top repos—`agent-skills`, `superpowers`, and `pm-skills`—are directly about packaging engineering and product management capabilities into reusable "skills" for AI coding agents. Meanwhile, `LMCache` continues to push the frontier of LLM inference optimization with KV cache acceleration. In the broader ecosystem, the `ai-agent` topic cluster reveals massive community investment in agent harnesses, with projects like `hermes-agent`, `CowAgent`, and `nanobot` all crossing 40K stars. The "agent + RAG + memory" stack is converging rapidly, as seen in the simultaneous popularity of memory layers (`mem0`, `claude-mem`) and graph-based knowledge tools (`graphify`).

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- **[LMCache](https://github.com/LMCache/LMCache)** ⭐0 (+28 today) — Supercharges LLM inference with the fastest KV cache layer; critical for production deployments where latency and throughput matter.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐82,722 [llm] — High-throughput, memory-efficient LLM inference engine that has become the de facto standard for serving large models.

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐173,974 [llm] — The most user-friendly way to run local LLMs; now supports Kimi-K2.6, GLM-5.1, and other cutting-edge models out of the box.

- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** ⭐312 [llm-model] — On-device LLM inference using X-bit quantization; important for edge AI and privacy-preserving deployments.

- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** ⭐4,272 [llm-model] — An educational course teaching LLM inference serving on Apple Silicon by building a tiny vLLM + Qwen; valuable for systems engineers entering AI infra.

### 🤖 AI Agents / Workflows

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐0 (+2,656 today) — Production-grade engineering skills for AI coding agents; today's hottest trending repo, signaling a shift toward skill-packaged agent capabilities.

- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+1,275 today) — An agentic skills framework and software development methodology that works; complements `agent-skills` with a methodology layer.

- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐0 (+1,026 today) — A complete AI agency at your fingertips — from frontend wizards to Reddit community ninjas; represents the "agent-as-a-service" paradigm.

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐191,979 [ai-agent] — "The agent that grows with you" — one of the most-starred agent projects on GitHub, built by a leading open-source AI research lab.

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐184,915 [llm] — The pioneering autonomous agent project that sparked the agent movement; continues to evolve as a platform for accessible AI.

- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐144,996 [llm] — Production-ready platform for agentic workflow development; bridges the gap between prototyping and deployment.

- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐76,657 [llm] — AI-driven development platform that gives agents full access to coding environments.

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐98,516 [llm] — Makes websites accessible for AI agents; critical infrastructure for web automation and data extraction agents.

### 📦 AI Applications

- **[maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed)** ⭐0 (+515 today) — Open-source healthcare AI; a vertical application gaining traction for medical use cases.

- **[phuryn/pm-skills](https://github.com/phuryn/pm-skills)** ⭐0 (+827 today) — 100+ agentic skills for product management — discovery, strategy, execution, launch, and growth; extends the "skills" trend beyond engineering.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐47,251 [ai-agent] — AI productivity studio with smart chat, autonomous agents, and 300+ assistants; unified access to frontier LLMs.

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐42,325 [ai-agent] — LLM-powered stock analysis system for A/H/US markets; zero-cost, scheduled execution — a popular "AI for finance" template.

- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** ⭐69,023 [ml] — Financial data platform for analysts, quants, and AI agents; the leading open-source alternative to Bloomberg Terminal.

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐26,992 [ai-agent] — AI generates real, editable PowerPoint presentations from any document; demonstrates AI's encroachment into office productivity.

### 🧠 LLMs / Training

- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐161,548 [llm] — The foundational framework for state-of-the-art ML models across text, vision, audio, and multimodal; backbone of the OSS AI ecosystem.

- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐72,117 [llm] — Unified efficient fine-tuning for 100+ LLMs and VLMs; making model customization accessible.

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,081 [llm-model] — Comprehensive LLM evaluation platform supporting 100+ datasets; critical for model selection and quality assurance.

- **[LiberCoders/FeatureBench](https://github.com/LiberCoders/FeatureBench)** ⭐75 [llm-model] — [ICLR 2026] Benchmark for agentic coding on complex feature development; formalizing evaluation of AI coding agents.

- **[testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)** ⭐105 [llm-model] — Survey on test-time scaling in LLMs; reflects growing interest in inference-time compute strategies.

### 🔍 RAG / Knowledge

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐82,576 [rag] — Leading open-source RAG engine combining cutting-edge retrieval with agent capabilities for a superior LLM context layer.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐58,453 [rag] — Universal memory layer for AI agents; enables persistence and context across agent sessions.

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐82,002 [rag] — Captures everything an agent does, compresses with AI, and injects relevant context into future sessions; works across multiple agent frameworks.

- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** ⭐66,299 [rag] — Turns any folder of code, docs, or media into a queryable knowledge graph for AI coding assistants.

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐44,748 [rag] — High-performance, cloud-native vector database; backbone infrastructure for RAG systems.

- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐32,063 [vector-db] — High-performance vector search engine; one of the most popular dedicated vector databases.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** ⭐11,913 [vector-db] — [MLsys2026] RAG on everything with 97% storage savings; enables fast, accurate, 100% private RAG on personal devices.

---

## 3. Trend Signal Analysis

**The "Skills" Paradigm Explodes.** The most striking signal today is the emergence of **packaged agent skills** as first-class artifacts. Three trending repos — `agent-skills` (engineering), `superpowers` (methodology), and `pm-skills` (product management) — collectively gathered ~4,700 stars today alone. This suggests the community is moving beyond "build an agent" toward "build with reusable agent skills." The trend mirrors how npm packages or Docker images standardized earlier software ecosystems. Notably, these are not just toy examples — `agent-skills` describes itself as "production-grade," and `superpowers` comes with a full software development methodology.

**Agent Harnesses Reach Critical Mass.** The `ai-agent` topic search reveals dozens of projects with 40K–190K stars. Projects like `hermes-agent`, `CowAgent`, `nanobot`, and `CherryHQ` are converging on a similar architecture: multi-model support, tool calling, memory/context persistence, and plugin ecosystems. This signals that the "agent harness" category is maturing — no longer experimental, but infrastructure.

**New Tech Stack: Memory + Knowledge Graphs.** The simultaneous rise of memory layers (`mem0`, `claude-mem`) and graph-based knowledge tools (`graphify`, `cognee`) points to a new architectural pattern: agents with persistent, structured memory that survives sessions. `LEANN`'s 97% storage savings for RAG on-device suggests this stack is going from cloud to edge.

**From General to Vertical.** `openmed` (healthcare AI, +515 today) and `daily_stock_analysis` (finance AI, 42K stars) show that vertical AI applications are gaining momentum independently from general-purpose agent frameworks.

**Apple Silicon Inference.** `tiny-llm` (4.2K stars) and Apple's own `container` tool (Swift-based Linux container runtime) both target Apple Silicon — a growing niche for local AI development and inference on Mac hardware.

---

## 4. Community Hot Spots

- **⚡ Agent Skills Marketplaces** — Projects like `agent-skills`, `superpowers`, and `pm-skills` are creating the foundation for a "package manager for agent capabilities." Worth watching as this could become the dominant pattern for agent development.

- **🧠 Persistent Memory for Agents** — `mem0`, `claude-mem`, and `graphify` are solving the critical "forgetting" problem. Agents that remember across sessions will be the next leap in capability.

- **🏗️ Multi-Agent Agency Frameworks** — `agency-agents` (+1,026 today) represents a shift from single agents to coordinated teams of specialized agents. Expect more "AI agency" frameworks targeting business workflows.

- **🏥 Vertical AI: Healthcare** — `openmed` (+515 today) is gaining rapid traction. Healthcare remains one of the largest underserved markets for open-source AI.

- **📏 Agent Coding Benchmarks** — `FeatureBench` (ICLR 2026) and `tiny-llm` (educational) signal that the community is investing in standardized evaluation and training for agent-based software engineering.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*