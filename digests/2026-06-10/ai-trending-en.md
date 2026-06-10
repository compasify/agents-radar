# AI Open Source Trends 2026-06-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-10 00:30 UTC

---

# AI Open Source Trends Report — June 10, 2026

---

## 1. Today's Highlights

Today's GitHub trending data reveals an explosive surge in **AI agent skills and harnesses**—reusable, modular capabilities that extend coding agents like Claude Code, Codex, and OpenCode beyond simple code completion into full task automation. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) rocketed to +3,191 stars with a cross-platform research agent skill, while [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) and [phuryn/pm-skills](https://github.com/phuryn/pm-skills) signal mainstream adoption of "skill marketplaces" for AI agents. The community is rapidly standardizing around **agent harness architectures**—persistent memory, tool use, and skill composition—rather than building monolithic agents from scratch. Rust is emerging as a preferred systems language for performance-critical AI infrastructure, seen in [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) and [aaif-goose/goose](https://github.com/aaif-goose/goose). Meanwhile, local LLM optimization remains urgent, with [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) addressing the hardware-performance matching problem with real benchmarks.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | 0 total / +1,801 today | Rust-based vector index on TurboQuant with Python bindings—addresses the performance gap in embedding retrieval with quantized acceleration |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 0 total / +489 today | Extensible Rust agent that installs, executes, edits, and tests with any LLM—open-source answer to closed coding agents |
| [ollama/ollama](https://github.com/ollama/ollama) | 173,713 total [topic:llm] | Now supports Kimi-K2.6, GLM-5.1, MiniMax—continues to dominate local model serving with expanding frontier model support |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,359 total [topic:llm] | High-throughput inference engine critical for production LLM deployment; PagedAttention remains industry standard |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 76,331 total [topic:llm] | AI-driven development platform approaching autonomous software engineering with sandboxed execution |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 72,032 total [topic:llm] | Unified fine-tuning for 100+ LLMs/VLMs—essential infrastructure as model proliferation accelerates |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,900 total [topic:rag] | The "agent engineering platform"—pivoted from chains to agent-native architecture reflecting market evolution |

### 🤖 AI Agents / Workflows

| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 0 total / +3,191 today | Cross-platform research agent skill (Reddit, X, YouTube, HN, Polymarket, web)—highest velocity today, signals skill-as-product trend |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 0 total / +443 today | Production-grade engineering skills for AI coding agents from a Google Chrome lead—legitimizes agent skill ecosystem |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 0 total / +806 today | 100+ agentic PM skills from discovery to growth—proves agent skills expanding beyond engineering to knowledge work |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 0 total / +1,110 today (51,644 topic) | Claude Code-based job search with 14 skill modes—highest trending agent application, shows vertical specialization |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 70,829 total [topic:llm] | ByteDance's long-horizon SuperAgent with sandboxes, memories, subagents—handles minutes-to-hours tasks |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 188,811 total [topic:llm] | "The agent that grows with you"—open-source challenger to commercial agent platforms with strong research backing |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 211,885 total [topic:llm] | Agent harness performance optimization: skills, instincts, memory, security—most starred agent infrastructure project |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 97,980 total [topic:llm] | Makes websites accessible for AI agents—critical web automation primitive for agent ecosystems |

### 📦 AI Applications

| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 0 total / +633 today | Hardware-aware local LLM ranking with real benchmarks—solves the "what actually runs on my machine" problem |
| [roboflow/supervision](https://github.com/roboflow/supervision) | 0 total / +733 today | Reusable computer vision tools—steady growth shows CV tooling consolidation around composable primitives |
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | 0 total / +191 today | Open-source healthcare AI—vertical AI application with societal impact potential |
| [francescopace/espectre](https://github.com/francescopace/espectre) | 0 total / +134 today | Wi-Fi CSI motion detection with Home Assistant—edge AI for smart home, novel sensing modality |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 0 total / +402 today | Monetization-focused AI application—signals growing commercialization layer in open-source AI |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 81,643 total [topic:rag] | Production OCR bridging documents to LLMs—100+ languages, critical RAG input pipeline component |

### 🧠 LLMs / Training

| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,459 total [topic:llm] | The model-definition framework—now covers text, vision, audio, multimodal; inference and training |
| [f/prompts.chat](https://github.com/f/prompts.chat) | 163,474 total [topic:llm] | Community prompt sharing evolved into organizational self-hosting—privacy-first prompt engineering infrastructure |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,075 total [topic:llm-model] | Comprehensive LLM evaluation across 100+ datasets—essential as model proliferation demands rigorous comparison |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,263 total [topic:llm-model] | Educational vLLM+Qwen on Apple Silicon—democratizes inference serving knowledge for systems engineers |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) | 603 total [topic:llm-model] | On-Policy Distillation survey—emerging efficient training direction for model compression |
| [RyanLiu112/Awesome-Process-Reward-Models](https://github.com/RyanLiu112/Awesome-Process-Reward-Models) | 165 total [topic:llm-model] | Process reward models for reasoning—key to improving LLM chain-of-thought reliability |

### 🔍 RAG / Knowledge

| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [langgenius/dify](https://github.com/langgenius/dify) | 144,587 total [topic:rag] | Production agentic workflow platform—highest starred RAG infrastructure, visual + code hybrid development |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 140,858 total [topic:rag] | User-friendly AI interface with Ollama/OpenAI support—dominant local-first chat UI standard |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 82,312 total [topic:rag] | Fuses RAG with Agent capabilities for "superior context layer"—next-gen retrieval architecture |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 81,483 total [topic:rag] | Persistent cross-session memory with AI compression—solves critical agent continuity problem |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,201 total [topic:rag] | Universal memory layer for AI agents—embedding-agnostic, multi-tenant memory infrastructure |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 64,224 total [topic:rag] | Code-to-knowledge-graph for multiple agents—unifies code, schema, infrastructure in queryable graphs |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,812 total [topic:vector-db] | "Vectorless, reasoning-based RAG"—challenges embedding-based retrieval with pure reasoning approach |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,745 total [topic:vector-db] | Self-hosted knowledge graph engine for agent long-term memory—open-source alternative to proprietary memory services |

---

## 3. Trend Signal Analysis

The most explosive pattern in today's data is the **commoditization of agent skills as reusable, composable units**. Where 2024-2025 saw monolithic agent frameworks (AutoGPT, LangChain), June 2026 reveals a maturation into **skill marketplaces**—modular capabilities that snap into existing agent harnesses. The +3,191 star velocity of [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) and the parallel rise of [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [phuryn/pm-skills](https://github.com/phuryn/pm-skills), and [santifer/career-ops](https://github.com/santifer/career-ops) demonstrate that developers are now building *for* agents rather than *building* agents. This mirrors the app store economy—skills as the new apps.

**Rust is crystallizing as the systems language of AI infrastructure**, not merely for performance but for memory safety in long-running agent processes. [turbovec](https://github.com/RyanCodrai/turbovec) and [goose](https://github.com/aaif-goose/goose) both leverage Rust for core operations with Python bindings for accessibility—a "Rust core, Python skin" pattern becoming standard.

A novel direction is **"vectorless RAG"** exemplified by [PageIndex](https://github.com/VectifyAI/PageIndex)—challenging the embedding-heavy paradigm with reasoning-based document indexing. This responds to embedding saturation and hallucination risks in dense retrieval, potentially signaling a post-vector-DB phase for certain use cases.

The timing correlates with **Claude Code's ecosystem maturation** and recent LLM releases (Kimi-K2.6, GLM-5.1, gpt-oss per Ollama's update). The community is racing to build the "missing middleware"—memory, skills, evaluation, hardware matching—that makes these models practically useful for sustained autonomous operation.

---

## 4. Community Hot Spots

- **🔥 Agent Skill Marketplaces** — [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill), [phuryn/pm-skills](https://github.com/phuryn/pm-skills), [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills): The skill-as-product model is the fastest way to contribute value in AI open source today; expect standardization efforts (skill manifest formats, compatibility layers) within months.

- **🦀 Rust-Based Agent Infrastructure** — [goose](https://github.com/aaif-goose/goose), [turbovec](https://github.com/RyanCodrai/turbovec): Rust's combination of performance and safety is winning for agent runtimes and vector operations; Python-Rust hybrid teams will dominate this space.

- **🧠 Persistent Agent Memory** — [claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [cognee](https://github.com/topoteretes/cognee): Cross-session memory is the critical gap between demo agents and production agents; knowledge graph approaches (cognee, graphify) show particular promise for structured domain knowledge.

- **⚡ Local LLM Hardware Optimization** — [whichllm](https://github.com/Andyyyy64/whichllm): As frontier models compress and edge hardware improves, the "run what fits" problem demands better benchmarking; this project's recency-aware, hardware-specific ranking fills a real user pain point.

- **🌐 Web-Native Agent Primitives** — [browser-use/browser-use](https://github.com/browser-use/browser-use), [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl): Agents that can't interact with the live web are handicapped; these projects are becoming standard dependencies for any agent with external data needs.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*