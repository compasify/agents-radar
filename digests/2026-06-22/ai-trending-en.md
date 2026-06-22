# AI Open Source Trends 2026-06-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-22 00:30 UTC

---

# AI Open Source Trends Report — 2026-06-22

## Step 1: Filtering for AI/ML Relevance

From the trending list and topic search results, I have excluded clearly unrelated projects:
- **Excluded**: `tw93/Pake` (webpage-to-desktop-app tool), `smicallef/spiderfoot` (OSINT, not AI-specific), `byoungd/English-level-up-tips` (language learning guide), `mikumifa/biliTickerBuy` (ticket buying helper), `thedaviddias/Front-End-Checklist` (frontend checklist), `JuliaLang/julia` (general-purpose language), `Developer-Y/cs-video-courses` (curated list), `mattpocock/skills` (developer skills — though relevant to AI agents as context, it's not AI software itself).

All remaining projects are AI/ML-related and are included in the report.

---

## Step 2: Categorization & Report

# 1. Today's Highlights

Today's AI open-source landscape is defined by an explosive surge in **agent memory and context optimization tools**. The top trending project, `chopratejas/headroom` (+2,624 stars today), tackles the critical cost bottleneck of LLM usage by compressing token consumption by 60-95% without answer degradation. Meanwhile, `DeusData/codebase-memory-mcp` (+1,032 stars) introduces a sub-millisecond code knowledge graph MCP server, and `thedotmack/claude-mem` (83,565 total) provides persistent context across sessions for coding agents. The **AI video production** space sees major entries: `calesthio/OpenMontage` (+987 today) as the first open-source agentic video production system, and `palmier-io/palmier-pro` (+1,834 today) as a macOS AI video editor. Notably, `bytedance/deer-flow` (72,564 total, +442 today) emerges as a production-grade long-horizon SuperAgent harness from a major tech company. The **cybersecurity AI agent** space is also maturing, with `mukul975/Anthropic-Cybersecurity-Skills` (+361 today) mapping 754 structured skills to 5 industry frameworks.

---

# 2. Top Projects by Category

## 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)

| Project | Stars | Description |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐174,675 (trending) | The go-to local LLM runner, now supporting Kimi-K2.6, GLM-5.1, MiniMax, DeepSeek, and more |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,488 | High-throughput LLM inference and serving engine — essential for production deployments |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐139,822 | The agent engineering platform, evolving as the standard for building LLM-powered applications |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,065 | Production-ready platform for agentic workflow development |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐142,539 | User-friendly AI interface supporting Ollama, OpenAI API, and more |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | +1,032 today | High-performance code intelligence MCP server — indexes entire codebases into knowledge graphs in milliseconds; 158 languages, 99% fewer tokens |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | +2,624 today (44,323 total) | 🏆 **Today's #1 trending** — Compress tool outputs, logs, and RAG chunks before LLM processing; 60-95% token reduction with same answer quality |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐136,324 | Web search/scrape API built for AI agents at scale |

## 🤖 AI Agents / Workflows

| Project | Stars | Description |
|---|---|---|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,062 | The original accessible AI agent framework — still the community standard |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐77,935 | AI-driven development platform — a leading coding agent |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐72,564 (+442 today) | Long-horizon SuperAgent harness from ByteDance — researches, codes, and creates with sandboxes, memories, tools, and subagents |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐198,994 | "The agent that grows with you" — a major player in agentic AI |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐87,821 | Multi-agent LLM financial trading framework — specialized vertical agent system |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐219,321 | Agent harness performance optimization — skills, instincts, memory, security for Claude Code, Codex, Cursor and beyond |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | +361 today | 754 structured cybersecurity skills for AI agents mapped to MITRE ATT&CK, NIST CSF 2.0, and more — works with 20+ platforms |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐44,515 | Lightweight open-source AI agent for tools, chats, and workflows |

## 📦 AI Applications (Specific Apps, Vertical Solutions)

| Project | Stars | Description |
|---|---|---|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | +987 today | 🏆 **World's first open-source, agentic video production system** — 12 pipelines, 52 tools, 500+ agent skills; turns AI coding assistants into video studios |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | +1,834 today | macOS video editor built for AI — native app leveraging AI for video production |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐44,412 (+568 today) | LLM-powered multi-market stock analysis with real-time news, decision dashboard, and automated push |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | +163 today | Real-time global intelligence dashboard: AI-powered news aggregation and geopolitical monitoring |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐29,886 | AI generates editable PowerPoint from documents — native shapes, animations, audio narration |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,626 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐69,517 | Financial data platform for analysts, quants, and AI agents |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐36,838 | Give AI agents access to Twitter, Reddit, YouTube, GitHub, Bilibili — one CLI, zero API fees |

## 🧠 LLMs / Training

| Project | Stars | Description |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,776 | The model-definition framework for state-of-the-art ML — text, vision, audio, multimodal |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐100,929 | Tensors and dynamic neural networks with strong GPU acceleration |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐195,787 | An open-source ML framework for everyone |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐58,633 | Ultralytics YOLO — leading computer vision framework |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐266 | Reliable, minimal library for pretraining foundation and world models |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,109 | LLM evaluation platform supporting 100+ datasets and all major models |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐509 | Universal LLM gateway — one API, every LLM, with multi-provider translation and load-balancing |

## 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation)

| Project | Stars | Description |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,292 | Leading open-source RAG engine fusing cutting-edge RAG with agent capabilities |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐83,190 | Turn PDFs/images into structured data for LLMs — 100+ languages supported |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐59,047 | Universal memory layer for AI agents |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐44,866 | High-performance, cloud-native vector database for scalable ANN search |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐32,521 | High-performance vector database — also available as cloud service |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐18,630 (+347 today) | Open-source AI memory platform for agents — persistent long-term memory via knowledge graph engine |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐83,565 | 📌 **Key RAG tool** — captures all agent session activity, compresses with AI, injects context into future sessions |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐70,301 | Turn any code, docs, or data into queryable knowledge graphs — works with Claude Code, Codex, Cursor, etc. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | ⭐10,670 | Developer-friendly embedded retrieval library for multimodal AI |

---

# 3. Trend Signal Analysis

## Token and Context Optimization — The New Infrastructure Priority

The single strongest signal today is the explosive community interest in **reducing LLM token consumption and managing agent context**. `headroom` (+2,624 today) and `codebase-memory-mcp` (+1,032) represent a new category: "LLM cost compression" tools that sit between user input and the model, aggressively filtering, compressing, and indexing data. This trend reflects the growing reality that as AI agents become autonomous and long-running, token costs and context windows become the primary bottlenecks — not model capability. The simultaneous rise of `claude-mem` (83,565 total), `cognee` (+347), and `mem0` (59,047) confirms that **persistent memory and context management** is moving from nice-to-have to essential infrastructure.

## Agentic Video Production Emerges as a Vertical

`OpenMontage` (+987) and `palmier-pro` (+1,834) together signal the birth of a new application category: **AI-powered video production through agentic systems**. Rather than simple generation, these are multi-pipeline systems with hundreds of agent skills — mimicking a full production studio workflow. This suggests the market sees video as the next frontier for AI automation, following code generation.

## Cybersecurity Becomes a Structured Agent Domain

`mukul975/Anthropic-Cybersecurity-Skills` (+361) with its 754 skills mapped to MITRE ATT&CK, NIST CSF 2.0, and other frameworks represents a maturing of **domain-specific agent skills**. The move toward standardized, interoperable skill definitions (via `agentskills.io` standard) signals that the ecosystem is professionalizing beyond generic agents.

## Major-Tech-Backed Agent Frameworks

ByteDance's `deer-flow` (72,564 total) joining the top ranks alongside AutoGPT and OpenHands confirms that **large tech companies are now competing in the open-source agent framework space**. Deer-flow's long-horizon task handling with sandboxes and subagents pushes the frontier of autonomous task completion.

## RAG Continues to Converge with Agents

The blurred line between RAG and agents is evident: `ragflow`, `mem0`, `cognee`, `graphify`, and `claude-mem` all combine retrieval with agent memory management. The rise of **knowledge-graph-based RAG** (codebase-memory-mcp, graphify, cognee) over simpler vector search represents a qualitative shift toward structured, relational AI memory.

---

# 4. Community Hot Spots — What to Watch

- **🟢 [headroom](https://github.com/chopratejas/headroom)** (+2,624 today) — **Token compression middleware**: Every AI agent builder needs to solve the token cost problem. Headroom's 60-95% reduction without quality loss is a game-changer for RAG and agent-heavy workflows.

- **🟢 [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** (+1,032 today) — **Sub-millisecond code intelligence**: The fastest code knowledge graph to date, supporting 158 languages. Essential for any coding agent system looking to minimize token usage while maximizing context.

- **🟢 [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** (+987 today) — **Agentic video production**: The first open-source system of its kind. If this gains traction, it could define a new category of AI applications beyond text and images.

- **🟢 [bytedance/deer-flow](https://github.com/bytedance/deer-flow)** (72,564 total) — **Production-grade long-horizon agents**: With sandboxing, memory, and multi-agent support, this is a serious contender for enterprise agent deployments. Open-source contributions from ByteDance warrant close monitoring.

- **🟢 [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** (+361 today) — **Domain-specific agent skills standardization**: The move toward structured, framework-mapped agent skills could become the template for other verticals (healthcare, legal, finance). The `agentskills.io` standard is worth watching.

---

*Report generated from GitHub trending data for 2026-06-22. Stars counts reflect approximate totals at time of analysis; trending counts represent day-of-new stars.*

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*