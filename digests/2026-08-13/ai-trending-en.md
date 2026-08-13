# AI Open Source Trends 2026-08-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-13 01:00 UTC

---

## Filtering Note

I excluded non-AI/general-purpose repos: **MediaCrawler** (crawler), **SpiderFoot** (OSINT), **LocalSend** (file transfer), **everyone-can-use-english** (language learning), **Front-End-Checklist**, **Julia** (language), and **Airflow** (generic orchestration). For trending-only projects, the source snapshot lists total stars as `0`, so today’s stars are the meaningful momentum signal. Duplicates between the trending list and topic search were merged.

---

# AI Open Source Trends Report — 2026-08-13

## 1. Today's Highlights

Today’s GitHub AI ecosystem is all about the layer above the model. The #1 trending repo, **diagram-design** (+2,855), is a set of Claude Code output artifacts — proof that prompt/artifact design is becoming a product category. Agent orchestration is the second major story: **orca** (+1,235) runs fleets of parallel agents, **paperclip** (+571) manages agents at work, **agency-agents** (+1,873) ships a ready-made AI team, and **macro** (+227) embeds agents into a team workspace. On the model side, **semantica** (+845) is building graph-native context infrastructure, **needle** (+315) shrinks a foundation model to 14MB, and **Kronos** (+266) targets financial markets. The common thread: the community is moving from single-model APIs to multi-agent systems, persistent context, and specialized/edge models.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,369 | Local LLM runtime now supporting open-weight families including Kimi, GLM, MiniMax, DeepSeek, Qwen and more. It remains the default self-hosted inference layer for the open-source ecosystem. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,018 | The standard model-definition framework for text, vision, audio, and multimodal models. Its sustained positioning anchors virtually all open-source LLM work. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,097 | The agent-engineering platform with tools, memory, and retrieval abstractions. Still the baseline for many production LLM applications. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 166,454 | Search, scrape, and interact with the web at scale to produce LLM-ready context. High star count shows how critical web grounding has become for agents. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,251 | Modular Rust framework for building LLM applications. Represents the fast-growing Rust AI infrastructure stack. |
| [apache/casbin-gateway](https://github.com/apache/casbin-gateway) | Go | 563 | AI and MCP security gateway for HTTP. Early-stage but important for enterprise authorization in agent and tool ecosystems. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 66,096 | Compresses tool outputs, logs, and RAG chunks before they reach the LLM, cutting token consumption for coding agents. Token-efficiency tooling is becoming a core runtime layer. |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Rust | 0 (+421) | NVIDIA NeMo’s Rust-based project, trending with +421 today. No detailed description was in the snapshot, but the NVIDIA + Rust combination signals continued investment in high-performance AI infrastructure. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,759 | Agent-harness performance optimization system with skills, instincts, memory, and security for Claude Code, Codex, Cursor, and more. Its enormous star count reflects demand for cross-CLI agent enhancement. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,563 | The long-running autonomous agent platform. Remains the most recognizable open-source brand in agentic AI. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,970 | Makes websites accessible to AI agents and automates online tasks. A key enabler for practical web-agent workflows. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+2,855) | 29 editorial diagram types for Claude Code, self-contained in HTML + SVG, explicitly avoiding “Mermaid-slop.” The #1 trending repo today — artifact/prompt design for coding agents is now a standalone category. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0 (+1,873) | A “complete AI agency” in shell scripts, from frontend wizards to Reddit community specialists. +1,873 today shows strong appetite for out-of-the-box, personality-driven agent teams. |
| [stablyai/orca](https://github.com/stablyai/orca) | TypeScript | 0 (+1,235) | An ADE for working with fleets of parallel agents; runs any coding agent with your own subscription, on desktop, mobile, or VPS. +1,235 today signals a new “multi-agent control plane” category. |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 0 (+571) | Open-source app built to manage agents at work. Today’s +571 indicates growing demand for agent observability and management. |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | 0 (+227) | Unified team workspace — email, chat, docs, tasks, agents, calls, CRM — @-linked with shared AI memory. A Rust-based bet on the AI-native collaboration suite. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,612 | User-friendly self-hosted AI interface compatible with Ollama and OpenAI-style APIs. It is the default local-first “ChatGPT replacement” for many users. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,814 | Generates short videos from a topic or keyword using AI models and automated workflows. Its viral popularity shows strong demand for turnkey content generation. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 71,151 | CLI that gives AI agents access to Twitter, Reddit, YouTube, GitHub, Bilibili, and more with zero API fees. Expands the data surface available to agentic systems. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,662 | Local-first agent experience and RAG workspace. Positions itself as an alternative to renting hosted intelligence. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 62,572 | LLM-driven multi-market stock analysis system with real-time news, decision dashboards, and automated notifications. A strong example of vertical AI in finance. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,355 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Representative of the emerging “agent desktop” app category. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 45,575 (+476) | AI turns documents or topics into native PowerPoint decks with real shapes, transitions, charts, animations, and audio narration. +476 today confirms productivity-vertical AI apps remain hot. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,532 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. The gold-standard educational resource for understanding LLM internals. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,297 | LLM evaluation platform supporting 100+ datasets and many model families. Evaluation infrastructure is becoming critical as open-weight models proliferate. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,480 | Teaches LLM inference on Apple Silicon by building a tiny vLLM + Qwen. Reflects the community’s desire for accessible, efficient inference knowledge. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+266) | A foundation model for the language of financial markets. Its +266 today signals continued interest in domain-specific foundation models. |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0 (+315) | A 14MB foundation model for phones, wearables, smart home, and robots. The push toward extremely small, on-device models is a clear trend. |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Python | 0 (+65) | Official Python inference and LoRA trainer package for the LTX-2 audio–video generative model. Shows open-source momentum in multimodal generation. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 75 | Decoder-only LLM built from scratch in pure Rust/Candle with MoE and quantization-aware training. A representative example of Rust-native LLM projects. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 105,685 | Turns any codebase, docs, SQL schemas, and PDFs into a queryable knowledge graph for Claude Code, Cursor, Codex, and Gemini CLI. Its star count highlights the shift from vector-only retrieval to graph-based context. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,553 | Captures agent session activity, compresses it with AI, and injects relevant context into future sessions. Persistent memory is one of the biggest unsolved problems for agent users. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,550 (+139) | Leading open-source RAG engine combining deep retrieval with agent capabilities. Trending again today, showing sustained enterprise RAG demand. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,136 | Universal memory layer for AI agents. Memory abstraction is quickly becoming as important as retrieval itself. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,615 | High-performance, cloud-native vector database for scalable ANN search. A core backbone for production RAG pipelines. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,941 | High-performance vector database and search engine. Rust-based vector DBs are gaining meaningful production share. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,980 | Open-source AI memory platform that gives agents persistent long-term memory using self-hosted knowledge graphs. Strong fit with the graph-memory trend. |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | 0 (+845) | Graph-native infrastructure for context and accountable AI systems. Today’s +845 suggests “context infrastructure” is emerging as a distinct category beyond traditional RAG. |

---

## 3. Trend Signal Analysis

The clearest signal is the community’s shift from single-agent demos to the **operational layer around agents**. Four of today’s top repos — **diagram-design**, **agency-agents**, **orca**, and **paperclip** — target how agent prompts, personas, and fleets are created and managed. **diagram-design** taking the #1 trending spot with +2,855 is remarkable because it is neither a model nor a framework, but a set of Claude Code output artifacts; this indicates that prompt and artifact design is becoming a distributable product category.

The second wave is **context and memory infrastructure**. **semantica** (+845) and **Graphify-Labs/graphify** are pushing graph-native context rather than vector-only retrieval. **claude-mem** and **cognee** provide persistent memory across agent sessions, directly addressing the biggest failure mode of current agents: forgetting previous decisions and losing project state.

On the model side, diversification continues. **needle**’s 14MB foundation model for tiny devices, **Kronos** for financial markets, and **LTX-2** for audio-video generation show the center of gravity expanding beyond general-purpose chatbots. **Rust** is also appearing across the stack — in **rig**, **Switchyard**, **qdrant**, **lancedb**, and **macro** — as a performance-oriented layer for AI infrastructure. JVM agent frameworks such as **embabel-agent** and **langchain4j** are also emerging, making agent development more polyglot.

Finally, the open-weight ecosystem is visibly feeding these tools. **Ollama**’s headline models — Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma — make local model deployment easy, which in turn drives demand for agent management, security gateways like **casbin-gateway**, and token-efficiency layers like **headroom**.

---

## 4. Community Hot Spots

- **Agent fleet control planes** — [stablyai/orca](https://github.com/stablyai/orca), [paperclipai/paperclip](https://github.com/paperclipai/paperclip), and [macro-inc/macro](https://github.com/macro-inc/macro) represent a new layer of tooling for running, managing, and observing multiple agents at once. This is where the operational complexity of agentic AI is moving.

- **Packaged agent personas and skills** — [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) and [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) show that ready-made prompts, output artifacts, and “AI team” scripts are becoming shareable, viral products.

- **Graph-native memory and context** — [semantica-agi/semantica](https://github.com/semantica-agi/semantica), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) are pushing beyond vector DBs toward persistent, explainable, knowledge-graph-based memory.

- **Small and domain-specific foundation models** — [cactus-compute/needle](https://github.com/cactus-compute/needle) (14MB edge model), [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) (finance), and [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) (audio-video) show the market fragmenting into specialized, deployable model niches.

- **Security and token efficiency** — [apache/casbin-gateway](https://github.com/apache/casbin-gateway) and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) address two rising enterprise concerns: authorization for AI/MCP access, and reducing the token cost of running agents at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*