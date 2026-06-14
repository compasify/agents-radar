# AI Open Source Trends 2026-06-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-14 00:28 UTC

---

# AI Open Source Trends Report — 2026-06-14

## 1. Today's Highlights

The open-source AI ecosystem is witnessing an unprecedented wave of **AI agent skill and security tooling**, driven by the rapid adoption of coding agents like Claude Code, Codex, and OpenClaude. Today's trending list is dominated by three major themes: **agent skill frameworks** (addyosmani/agent-skills, obra/superpowers), **agent session analytics** (kenn-io/agentsview), and **security scanning for agent skills** (NVIDIA/SkillSpector). Meanwhile, the search data reveals a massive surge in agent-oriented infrastructure, with projects like NousResearch/hermes-agent and langgenius/dify crossing into the 100K+ star territory. The convergence of LLM-powered coding agents with skills/memory/knowledge graph layers signals a shift from "use an AI" to "build with AI agents" as the dominant development paradigm.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- **[LMCache/LMCache](https://github.com/LMCache/LMCache)** ⭐0 (+238 today) — A KV cache acceleration layer for LLM inference, promising to supercharge throughput by optimizing memory reuse, critical for production deployments.
- **[andrewyng/aisuite](https://github.com/andrewyng/aisuite)** ⭐0 (+127 today) — Andrew Ng's unified Python interface across multiple generative AI providers, reducing integration friction for multi-model pipelines.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐82,776 — The go-to high-throughput inference engine for LLMs, now at 82K+ stars, serving as the backbone for countless production deployments.
- **[samchon/nestia](https://github.com/samchon/nestia)** ⭐2,159 (topic:llm-model) — NestJS helper for building AI chatbot backends, bridging TypeScript server frameworks with LLM integrations.

### 🤖 AI Agents / Workflows
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐0 (+1,514 today) — Production-grade engineering skills for AI coding agents, the #1 trending project today, addressing the critical need for reusable agent behaviors.
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+924 today) — An agentic skills framework and software development methodology that "works" — attracting massive attention for its pragmatic approach to agent-based development.
- **[kenn-io/agentsview](https://github.com/kenn-io/agentsview)** ⭐0 (+190 today) — Local-first session intelligence for 20+ coding agents, including Claude Code and Codex — billed as a 100× faster replacement for ccusage.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐192,760 — "The agent that grows with you" — a personal AI agent framework that has exploded to 192K stars, reflecting the hunger for continuously adapting agents.
- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐145,086 — Production-ready platform for agentic workflow development, a key infrastructure piece for enterprise agent orchestration.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐184,930 — The original autonomous agent framework, still a foundational reference for the agent ecosystem.

### 🔍 RAG / Knowledge
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐58,492 — Universal memory layer for AI agents, enabling persistent context across sessions — a crucial missing piece for agent reliability.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐82,143 — Captures agent session data, compresses with AI, and injects relevant context back — solving the "amnesia" problem for coding agents.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐82,657 — Leading open-source RAG engine with agent capabilities, providing a superior context layer for LLMs.
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** ⭐66,727 — Turns code folders, schemas, docs into queryable knowledge graphs for AI agents — a novel approach to codebase understanding.
- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** ⭐82,109 — Bridges PDFs/images with LLMs, supporting 100+ languages — essential for document-heavy RAG pipelines.

### 🛡️ AI Security & Safety
- **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** ⭐0 (+804 today) — Security scanner for AI agent skills, detecting vulnerabilities and malicious patterns — a direct response to the "skills explosion" and associated risks.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐214,905 — Agent harness performance optimization system with security and research-first development, now at 214K stars.

### 🧠 LLMs / Training
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐174,072 — The easiest way to run LLMs locally, now supporting Kimi-K2.6, GLM-5.1, MiniMax, DeepSeek, and more — the default choice for local model experimentation.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐161,567 — The undisputed model definition framework, supporting text, vision, audio, and multimodal models for both inference and training.
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** ⭐7,610 (topic:llm-model) — Build modular, scalable LLM applications in Rust — a growing trend for performance-critical agent infrastructure.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,082 (topic:llm-model) — Comprehensive LLM evaluation platform supporting 100+ datasets across models like Llama3, Mistral, GPT-4, Qwen — essential for model selection.

### 🚀 AI Applications
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐85,821 — Multi-agent LLM financial trading framework, demonstrating vertical agent applications in finance.
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐47,279 — AI productivity studio with autonomous agents and 300+ assistants, a unified interface for frontier LLMs.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐27,234 — AI generates editable PowerPoint from any document with native shapes and animations — practical productivity tooling.

---

## 3. Trend Signal Analysis

### What's getting explosive attention?

**Agent skill ecosystems** are the most explosive trend today. Projects like `addyosmani/agent-skills` (+1,514 stars/day) and `obra/superpowers` (+924) are not just popular — they signal a structural shift. The community is moving from "building single agents" to "building composable agent skills." The 214K-star `affaan-m/ECC` and 192K-star `NousResearch/hermes-agent` further confirm this: developers want frameworks that support skill-driven, memory-enabled, growing agents.

**Agent observability and security** are emerging as critical adjacencies. `kenn-io/agentsview` (+190) addresses debugging and analytics for agent sessions, while NVIDIA's `SkillSpector` (+804) addresses the security vacuum — scanning agent skills for vulnerabilities. As agent skills proliferate, so does the attack surface; NVIDIA is betting that security tooling will become a prerequisite for production agent deployments.

### What's new or first-time appearing?

- **Agent session analytics** as a distinct category: `agentsview` and `claude-mem` (82K stars) are reifying the concept of "agent observability" — treating agent runs as datasets to be analyzed, compressed, and re-injected.
- **Knowledge graph-based code understanding**: `safishamsi/graphify` (66K stars) turns any codebase into a knowledge graph for AI agents — a novel approach that combines RAG with structured code representation.
- **Rust for LLM infrastructure**: `rig`, `meilisearch`, and `qdrant` all leverage Rust for performance-critical AI layers, a trend that's accelerating.

### Connection to industry events

The rise of Claude Code, Codex, Gemini CLI, and other coding agents has created a **skills marketplace dynamic**. Projects like `system-prompts-and-models-of-ai-tools` (+109 today) compile system prompts and internal tools from 20+ AI coding tools — indicating a community eager to reverse-engineer and standardize agent behaviors. The bumper star counts on `hermes-agent` (192K) and `ECL` (214K) suggest that 2026 is the year of "agentic development platforms" — and the open-source community is racing to build the de facto standards.

---

## 4. Community Hot Spots

- **Agent Skill Frameworks** — `addyosmani/agent-skills`, `obra/superpowers`, `affaan-m/ECC`: The community is actively standardizing how skills are written, shared, and composed. Developers should watch these as potential predecessors to a "npm for agent skills."
- **Agent Memory & Persistence** — `mem0ai/mem0`, `thedotmack/claude-mem`: Solving the core limitation of stateless agents. These projects are critical infrastructure for long-running, context-aware agents.
- **Agent Security Scanning** — `NVIDIA/SkillSpector`: As agent skills become the new "apps," security scanning becomes table stakes. NVIDIA's entry signals institutional validation of this need.
- **Local-First Agent Tools** — `kenn-io/agentsview`, `CherryHQ/cherry-studio`, `iOfficeAI/AionUi`: The shift toward local-first, privacy-preserving agent tools is gaining momentum. Developers concerned about data sovereignty should explore these.
- **Multi-Agent Financial Systems** — `TauricResearch/TradingAgents` (85K stars): Vertical agent applications are hitting mainstream adoption. The intersection of LLMs and quantitative finance is a hot cross-domain area.

---

*Report generated from GitHub trending data (2026-06-14) and AI topic search results. Star counts reflect GitHub's reported figures at time of analysis.*

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*