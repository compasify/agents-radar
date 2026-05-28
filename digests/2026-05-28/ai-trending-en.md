# AI Open Source Trends 2026-05-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-28 00:27 UTC

---

# AI Open Source Trends Report — 2026-05-28

## 1. Today's Highlights

The AI open-source ecosystem today is dominated by **agent skill/harness frameworks** and **anti-"slop" tooling**, reflecting a community backlash against generic AI outputs. **Understand-Anything** exploded with +4,465 stars, turning codebases into interactive knowledge graphs for AI coding agents. **Leonxlnx/taste-skill** (+2,715 stars) and **hardikpandya/stop-slop** (+664 stars) both target AI content quality — taste-skill injects aesthetic guardrails, while stop-slop strips out "AI tells" from prose. On the cybersecurity front, **mukul975/Anthropic-Cybersecurity-Skills** (+886 stars) offers 754 structured skills mapped to MITRE/NIST frameworks, signaling a push toward domain-specialized agent skills. The **memory and RAG ecosystem** continues maturing, with projects like `thedotmack/claude-mem` (79K stars) and `topoteretes/cognee` (17.5K stars) providing persistent context layers for agents. Notably, **Kronos** (+401 stars) introduces a foundation model specifically for financial language, hinting at vertical LLM specialization.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐172,460 — The go-to local LLM runner now supports Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma, etc., making it the de facto standard for on-device inference.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐81,183 — High-throughput LLM inference/serving engine, essential for production deployments.
- **[picovoice/picollm](https://github.com/Picovoice/picollm)** ⭐311 — On-device LLM inference using X-Bit quantization, targeting edge/embedded deployments.
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** ⭐4,211 — Educational project building a tiny vLLM + Qwen on Apple Silicon; great for systems engineers learning LLM serving.
- **[f/prompts.chat](https://github.com/f/prompts.chat)** ⭐162,924 — The definitive prompt engineering resource, now with self-hosted enterprise privacy support.
- **[iii-hq/iii](https://github.com/iii-hq/iii)** ⭐0 (+376 today) — Real-time service orchestration/observability platform with Rust performance.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐196,001 (+2,062 today) — Agent harness performance optimization system (skills, instincts, memory, security) for Claude Code, Codex, Cursor, etc.

### 🤖 AI Agents / Workflows

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐170,231 — Agent framework designed to grow with users; one of the most starred agent projects.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐184,593 — The original autonomous agent project, still actively maintained as a vision for accessible AI.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** ⭐137,809 — The leading agent engineering platform, now evolved into a full-stack agent ecosystem.
- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐142,902 — Production-ready agentic workflow development platform.
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐138,917 — User-friendly AI interface supporting Ollama, OpenAI API, and more.
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** ⭐63,058 — A nano agent harness built from 0 to 1; "bash is all you need" philosophy — educational and practical.
- **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** ⭐44,899 — Open-source super AI assistant with task planning, tools, skills, memory, and multi-model support.
- **[santifer/career-ops](https://github.com/santifer/career-ops)** ⭐47,495 — AI-powered job search system built on Claude Code with 14 skill modes.
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** ⭐22,440 — AI agent & MCP workflow automation with ~400 MCP servers for AI agents.
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** ⭐55,800 — Multi-agent orchestration platform for Claude with swarm intelligence and RAG integration.
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+1,511 today) — Agentic skills framework and software development methodology — trending today.

### 📦 AI Applications

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐0 (+1,742 today) — AI-powered short video generation; practical content creation tool for social media.
- **[twentyhq/twenty](https://github.com/twentyhq/twenty)** ⭐0 (+519 today) — Open-source Salesforce alternative designed for AI-native CRM.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐21,754 — AI generates natively editable PPTX from documents (not images) — real PowerPoint shapes with animations.
- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** ⭐0 (+72 today) — Self-hosted companion AI capable of real-time voice chat, Minecraft, Factorio — aiming for Neuro-sama-level interaction.
- **[jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot)** ⭐46,473 — AI low-code platform; "low-code + no-code" dual mode with AI skills for generating enterprise systems.
- **[nocobase/nocobase](https://github.com/nocobase/nocobase)** ⭐22,545 — AI + no-code platform for building business systems fast; AI works on top of production infrastructure.
- **[acon96/home-llm](https://github.com/acon96/home-llm)** ⭐1,349 — Home Assistant integration for controlling smart home using local LLM — practical edge AI.

### 🧠 LLMs / Training

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐96,113 — Step-by-step implementation of a ChatGPT-like LLM in PyTorch — gold standard for LLM education.
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐71,657 — Unified fine-tuning for 100+ LLMs & VLMs (ACL 2024) — the go-to fine-tuning toolkit.
- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** ⭐111,911 — 100+ AI Agent & RAG apps you can actually run — practical deployment patterns.
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** ⭐0 (+401 today) — Foundation model for financial markets language — vertical domain specialization.
- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** ⭐236 — Reliable, minimal, scalable library for pretraining foundation and world models.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,037 — Comprehensive LLM evaluation platform over 100+ datasets.

### 🔍 RAG / Knowledge

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐81,377 — Leading open-source RAG engine with agent capabilities and advanced context layer.
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** ⭐60,689 — All-in-one AI productivity accelerator; privacy first, no annoying setup.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐56,904 — Universal memory layer for AI agents — key infrastructure for persistent agent state.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐79,148 — Persistent context across sessions for any agent — captures, compresses, and injects relevant context.
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** ⭐55,012 — Turn any code, docs, images, videos into queryable knowledge graphs for AI agents.
- **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** ⭐11,775 — [MLsys2026]: RAG with 97% storage savings while maintaining speed, accuracy, and 100% privacy on personal devices.
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** ⭐17,545 — Memory control plane for AI Agents in 6 lines of code.
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** ⭐49,706 — Leading document agent and OCR platform for RAG pipelines.

## 3. Trend Signal Analysis

**Explosive attention to agent skill/harness ecosystems.** Today's trending list reveals a clear shift: agent frameworks are no longer about building agents from scratch, but about **extending existing agent CLIs (Claude Code, Codex, Cursor, Gemini CLI) with structured skills and memory**. Projects like `ECC` (+2,062 today), `superpowers` (+1,511 today), `Understand-Anything` (+4,465 today), and `taste-skill` (+2,715 today) all extend agent capabilities rather than reinvent them. This indicates the ecosystem is standardizing around agent harnesses (Claude Code as the default) and commoditizing skill distribution.

**Anti-"slop" and quality tooling is an emerging category.** Multiple trending projects target AI-generated content quality: `stop-slop` strips AI tells from prose, `taste-skill` adds aesthetic guardrails, and `heretic` performs automatic censorship removal. This suggests community fatigue with generic, safe, "GPT-sounding" outputs, and demand for tools that make AI content more human-like and stylistically customizable.

**Memory and context persistence become infrastructure.** The RAG/knowledge category projects like `claude-mem` (79K stars), `mem0` (56.9K), and `cognee` (17.5K) show that persistent, cross-session memory for AI agents is now treated as essential infrastructure rather than optional feature. The zero-effort "memory control plane" pattern (6 lines of code in cognee, automatic capture in claude-mem) signals commoditization.

**Vertical domain specialization accelerates.** `Kronos` (financial markets) and `mukul975/Anthropic-Cybersecurity-Skills` (cybersecurity frameworks) indicate a move toward domain-specific foundation models and structured skill taxonomies. The cybersecurity skills project's mapping to 5 industry frameworks makes it particularly enterprise-relevant.

## 4. Community Hot Spots

- **[Understand-Anything](https://github.com/Lum1104/Understand-Anything)** — Interactive knowledge graphs from codebases; +4,465 stars today. Ideal for developers using AI coding agents who need to explore and query complex codebases. The ability to "ask questions about your code" is a killer feature for agent-assisted development.

- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** — Injecting "good taste" into AI outputs; +2,715 stars today. For anyone building AI writing tools or agents that generate content — this addresses the growing demand for non-generic, stylistically aware AI.

- **[claude-mem](https://github.com/thedotmack/claude-mem)** — Persistent context across sessions; 79,148 stars. Essential for any developer building multi-turn agent applications. The "capture→compress→inject" pattern is becoming the de facto memory architecture.

- **[ECC](https://github.com/affaan-m/ECC)** — Agent harness performance optimization; 196K total stars, +2,062 today. The comprehensive skill/memory/security system for agent CLIs makes it a must-watch for anyone building on Claude Code, Codex, or Cursor.

- **[LEANN](https://github.com/yichuan-w/LEANN)** — 97% storage savings for RAG on personal devices; 11,775 stars. For developers building privacy-preserving RAG applications — this is a significant optimization that makes on-device RAG practical at scale.

- **[picovoice/picollm](https://github.com/Picovoice/picollm)** — Edge LLM inference with X-bit quantization; worth watching for embedded/edge AI developers. As LLMs move to mobile and IoT, lightweight inference engines will be critical.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*