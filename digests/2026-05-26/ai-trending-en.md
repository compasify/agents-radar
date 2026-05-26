# AI Open Source Trends 2026-05-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-26 00:24 UTC

---

# AI Open Source Trends Report — May 26, 2026

---

## 1. Today's Highlights

Today's GitHub trending reveals an explosive surge in **AI coding agent tooling**, with [Understand-Anything](https://github.com/Lum1104/Understand-Anything) gaining **5,604 stars in a single day** for transforming codebases into interactive knowledge graphs. The ecosystem is consolidating around **"agent harness" patterns** — performance optimization layers for Claude Code, Codex, Cursor, and Gemini CLI — with multiple projects ([ECC](https://github.com/affaan-m/ECC), [codegraph](https://github.com/colbymchenry/codegraph)) hitting 2,000+ daily stars. Notably, **skill files** (structured behavioral prompts) have emerged as a distinct artifact category, with Andrej Karpathy-derived configurations and "anti-slop" prose tuning gaining rapid traction. Anthropic's official plugin ecosystem ([knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)) is now open-sourced, validating the enterprise shift toward customizable agent workflows.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars | Description |
|--------|-------|-------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 172,304 total | Local LLM inference engine now supporting Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss — the default self-hosting stack |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,995 total | High-throughput inference engine; critical infrastructure for production serving |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,615 total | Production-ready agentic workflow development platform; enterprise orchestration standard |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 138,622 total | User-friendly AI interface unifying Ollama, OpenAI API, and local models |
| [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | 0 +5,604 today | **Today's breakout**: Interactive code knowledge graphs reducing token/tool-call overhead for all major coding agents |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | 0 +3,161 today | Pre-indexed local knowledge graphs for 100% private agent context — zero cloud dependency |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 0 +603 today | Ghostty-based macOS terminal with vertical tabs and notifications purpose-built for AI coding agents |

### 🤖 AI Agents / Workflows
| Project | Stars | Description |
|--------|-------|-------------|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,552 total | Pioneer accessible AI agent framework; evolving toward sustainable agent ecosystems |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 167,228 total | "The agent that grows with you" — adaptive personal agent with continuous learning |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 95,508 total | Makes websites accessible for AI agents; web automation primitive |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 74,851 total | AI-driven development environment; full software engineering agent |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 192,314 total, +2,025 today | **Agent harness performance optimization**: skills, instincts, memory, security for Claude Code/Codex/Cursor/Opencode |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 62,581 total | Nano agent harness built from 0 to 1 — educational minimalism for agent architecture |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 55,074 total | Enterprise multi-agent swarm orchestration with native Claude Code/Codex integration |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 0 +640 today | YC CEO's exact Claude Code setup: 23 opinionated tools as specialized roles (CEO, Designer, Eng Manager, QA) |

### 🔍 RAG / Knowledge
| Project | Stars | Description |
|--------|-------|-------------|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 111,738 total [topic:rag] | 100+ runnable AI Agent & RAG applications — clone, customize, ship |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,230 total | Leading open-source RAG engine fusing retrieval with agent capabilities |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 78,120 total | Persistent cross-session memory with AI compression for all major agents |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 56,698 total | Universal memory layer for AI agents; foundational context infrastructure |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 53,697 total | Code-to-knowledge-graph skill for unified app+database+infrastructure querying |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,452 total | Cloud-native vector database for scalable ANN search at production scale |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,732 total [topic:vector-db] | Lightning-fast hybrid search engine bringing AI-powered search to applications |
| [cognee/cognee](https://github.com/topoteretes/cognee) | 17,506 total | Memory control plane for AI agents in 6 lines of code — developer ergonomics focus |

### 🧠 LLMs / Training
| Project | Stars | Description |
|--------|-------|-------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160,951 total | De facto model-definition framework for text, vision, audio, multimodal |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 95,943 total | Educational PyTorch implementation of ChatGPT-like LLM; canonical learning resource |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,583 total | Unified efficient fine-tuning of 100+ LLMs & VLMs; ACL 2024, production-proven |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 26,044 total | LLM-powered Python scraper — model application for unstructured data extraction |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,205 total | Apple Silicon-optimized inference serving course; vLLM+Qwen for systems engineers |

### 📦 AI Applications
| Project | Stars | Description |
|--------|-------|-------------|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 0 +3,154 today | **Today's educational hit**: End-to-end AI engineering curriculum — learn, build, ship |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 0 +1,004 today | 754 structured cybersecurity skills mapped to 5 frameworks (MITRE ATT&CK, NIST CSF 2.0, etc.) |
| [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | 0 +317 today | Modern finance terminal with LLM-powered market analytics and investment research |
| [Kronos](https://github.com/shiyu-coder/Kronos) | 0 +245 today | Foundation model for the language of financial markets — domain-specific LLM |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 0 +62 today | Self-hosted Grok Companion with realtime voice, Minecraft/Factorio agents — "container of souls" |

---

## 3. Trend Signal Analysis

**Explosive attention is concentrating on "agent harness" infrastructure** — middleware that optimizes how developers use Claude Code, Codex, Cursor, Gemini CLI, and emerging alternatives. This isn't merely about wrappers; it's about **structured augmentation**: persistent memory ([claude-mem](https://github.com/thedotmack/claude-mem)), pre-computed knowledge graphs ([codegraph](https://github.com/colbymchenry/codegraph), [Understand-Anything](https://github.com/Lum1104/Understand-Anything)), behavioral skill files ([andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills), [stop-slop](https://github.com/hardikpandya/stop-slop)), and performance optimization systems ([ECC](https://github.com/affaan-m/ECC)). The 5,604-star single-day launch of Understand-Anything signals developer frustration with token limits and tool-call latency — pre-indexed, queryable code representations are becoming essential infrastructure.

A **new artifact category has crystallized: the "skill file"** — structured behavioral configurations (often single `.md` or `.yaml` files) that tune agent behavior without code changes. Andrej Karpathy's coding observations, anti-"slop" prose tuning, and cybersecurity skill frameworks ([Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)) all share this pattern. This democratizes agent customization: non-engineers can shape AI behavior through declarative configuration.

The trend directly connects to **Claude 4's recent release** and Anthropic's aggressive enterprise push — [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) going open-source validates the ecosystem. Simultaneously, [gstack](https://github.com/garrytan/gstack) (Garry Tan's CEO setup) and [ruflo](https://github.com/ruvnet/ruflo) (enterprise swarms) show agent tooling maturing from personal productivity to organizational orchestration. The stack is bifurcating: **minimalist educational harnesses** (learn-claude-code, tiny-llm) versus **enterprise-grade control planes** (ruflo, Dify, Flowise).

---

## 4. Community Hot Spots

- **[Understand-Anything](https://github.com/Lum1104/Understand-Anything) & [codegraph](https://github.com/colbymchenry/codegraph)** — Knowledge graphs as agent context layer. With 8,765 combined daily stars, this is the most validated new pattern. Pre-indexing codebases eliminates repetitive parsing, reduces API costs, and enables 100% local operation. Expect every major IDE/agent to integrate or acquire this capability.

- **[ECC](https://github.com/affaan-m/ECC) — "Agent harness performance optimization"** — The term "agent harness" is proliferating across 5+ trending repos, indicating ecosystem vocabulary consolidation. ECC's 192K total stars (likely inflated by topic misclassification, but 2K+ real daily growth) reflects genuine interest in systematic agent performance engineering.

- **[Skill files as configuration layer](https://github.com/multica-ai/andrej-karpathy-skills) + [stop-slop](https://github.com/hardikpandya/stop-slop)** — Declarative agent behavior tuning is becoming a craft. The "anti-slop" movement specifically addresses LLM prose degradation — a quality-control niche with broad applicability.

- **[Anthropics official plugin ecosystem](https://github.com/anthropics/knowledge-work-plugins)** — Enterprise validation of the open agent plugin model. With 1,441 daily stars, this signals vendor buy-in to community-extensible agent architectures rather than closed vertical integration.

- **[learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — "Bash is all you need"** — Minimalist agent harnesses built from first principles (62K stars). The "nano agent" educational approach contrasts with bloated frameworks, suggesting a pendulum swing toward understandable, auditable agent systems — critical for security-conscious deployments.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*