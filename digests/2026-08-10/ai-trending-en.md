# AI Open Source Trends 2026-08-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-10 00:52 UTC

---

# AI Open Source Trends Report — 2026-08-10

**Filtering note:** Excluded non-AI trending entries: `witr` and `authentik`. `t3code` was also left out of the primary tables because the source packet provided no clear description; the topic-search results below are AI-tagged.

---

## 1. Today's Highlights

Today's open-source AI pulse is unmistakably agent-first. The hottest repo, [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent), added **+2,356** stars for a self-improving RLM agent aimed at coding and long-running autonomy. It was joined by [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (+858), [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (+680), and [google/skills](https://github.com/google/skills) (+528), turning "agent skills" into a clear packaging trend. In parallel, knowledge-graph RAG is accelerating with [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) (+96) and the huge [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) (104k stars). Vertical AI apps are also drawing steady attention: LLM stock analysis gained +306 stars, ComfyUI +365, and DeepMind weathernext +86.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,812 | The agent-engineering platform for LLM applications. It remains the central abstraction layer for RAG, tool use, and agent orchestration. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,505 | The standard open-source framework for state-of-the-art text, vision, audio, and multimodal models. It is still the first stop for new open-model experimentation. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,140 | Local model runtime now listing Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. It is the clearest signal of a multi-model, local-first deployment world. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,942 | The original broad ML framework. Its continued presence in topic search shows enterprise/legacy ML still matters. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,301 | The dominant deep learning framework for research and production. Nearly every agent/training project in this report depends on it. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 164,204 | A web-scraping and context API built for LLM ingestion and agent actions. It shows how critical external data access is for agent workflows. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,655 | Frontend stack for agents and generative UI, including the AG-UI protocol. It enables embedding agent workflows into web, mobile, and Slack apps. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 65,653 | Compresses tool outputs, logs, and RAG chunks before they reach an LLM, cutting JSON token use by 60–95%. It represents a new "token-efficiency layer" for agent infrastructure. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0 (+2,356) | A self-improving RLM agent for coding workflows and long-running autonomous tasks. It was today's single hottest repo, signaling demand for agents that improve without human supervision. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,027 | An agent-harness performance optimization system with skills, instincts, memory, and security. Its massive star count makes it a core reference point for the agent-harness movement. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 227,935 | "The agent that grows with you" — a personal, continuously adaptable agent framework. It aligns with today's focus on self-evolving agents. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,462 | The long-running open-source project for accessible autonomous AI agents. It remains one of the most-starred agent platforms. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,484 | Makes websites accessible to AI agents via browser automation. It is foundational for agents that must take real web actions. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0 (+858) | A packaged "AI agency" of specialized agents, from frontend wizards to Reddit community ninjas. The +858 today shows strong appetite for role-based multi-agent automation. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+680) | Production-grade engineering skills for AI coding agents. It is helping turn skills into the next packaging format for agent capabilities. |
| [google/skills](https://github.com/google/skills) | Python | 0 (+528) | Agent Skills for Google products and technologies. A rare first-party contribution, signaling vendor-level adoption of the skills pattern. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,328 | User-friendly AI interface supporting Ollama, OpenAI, and many other backends. It remains the default self-hosted chat/agent front end. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,336 | Generates short videos from a topic using AI and automated workflows. It illustrates the continued popularity of content-generation vertical apps. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,528 | Local-first, all-in-one desktop/server app for RAG and agent experiences. "Stop renting your intelligence" positions it against hosted AI SaaS. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 61,190 (+306) | LLM-powered multi-market stock analysis with live news, dashboards, notifications, and scheduled free runs. A clear signal that retail-investor AI tools are a fast-moving vertical. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,181 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. It offers unified access to frontier LLMs in one desktop app. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 44,096 | Turns documents or topics into native PowerPoint decks with charts, animations, narration, and templates. A strong example of "agent replaces office work." |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | 0 (+365) | The most powerful modular diffusion model GUI, API, and backend with a graph/nodes interface. The +365 today confirms generative-image workflows remain a major community focus. |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | Python | 0 (+86) | DeepMind's weather-forecasting model repo, new to trending. Scientific AI and earth-systems ML still generate immediate developer attention. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,049 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. It remains the canonical educational resource for understanding LLM internals. |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 89,209 | A 12-week classic ML curriculum with 26 lessons and 52 quizzes. It anchors the broader AI/ML education category. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,498 | Train a 64M-parameter LLM from scratch in about two hours. It makes LLM training accessible to a wide audience. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,287 | LLM evaluation platform supporting 100+ datasets. Agentic behavior increasingly demands standardized benchmarks and evals. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,456 | Learn LLM inference on Apple Silicon by building a tiny vLLM + Qwen. It represents new systems-level education for local model deployment. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | On-device LLM inference powered by X-bit quantization. It shows the edge/embedded direction of LLM deployment. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,870 | Build agentic workflows and RAG pipelines with rich model/tool support. It remains one of the most popular full-stack LLM app platforms. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 104,619 | Turns codebases, docs, schemas, and PDFs into a queryable knowledge graph using deterministic AST parsing — no vector store needed. Graph-based RAG is a major emerging direction. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,215 | Captures agent session activity, compresses it with AI, and injects relevant context into future sessions. "Memory as infrastructure" is becoming a standard agent layer. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,126 | A leading open-source RAG engine that fuses retrieval with agent capabilities. It is a serious enterprise-grade context layer for LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,880 | Universal memory layer for AI agents. Persistent memory across sessions remains one of the most requested features for production agents. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,573 | High-performance, cloud-native vector database built for scalable vector ANN search. It is still a reference open-source vector DB. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,889 | High-performance vector database and vector search engine. Its Rust implementation makes it a top choice for latency-sensitive RAG. |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | Python | 0 (+96) | "The ultimate RAG for your monorepo" — query, understand, and edit multi-language codebases with AI and knowledge graphs. Early traction (+96 today) points to code-aware RAG demand. |

---

## 3. Trend Signal Analysis

Today's hot list and topic search both point to one theme: **agents are eating the open-source AI stack**. The hottest entry, [prime-agent](https://github.com/PrimeIntellect-ai/prime-agent), added +2,356 stars for a self-improving RLM agent designed for coding and long-running autonomy. It was flanked by [agency-agents](https://github.com/msitarzewski/agency-agents) (+858), [agent-skills](https://github.com/addyosmani/agent-skills) (+680), and [google/skills](https://github.com/google/skills) (+528), making **skills and role-based agent teams** the dominant pattern of the day. Skills are quickly becoming the unit of agent capability: versioned, reviewable, executable packs that can be mixed into Claude Code, Codex, Cursor, or other agent harnesses.

At the same time, context and memory are becoming first-class infrastructure. Projects like [claude-mem](https://github.com/thedotmack/claude-mem), [mem0](https://github.com/mem0ai/mem0), [cognee](https://github.com/topoteretes/cognee), and [headroom](https://github.com/headroomlabs-ai/headroom) all address persistent state, token efficiency, and long-session context. Headroom's promise of 20–95% token reduction shows that **cost optimization is now a core engineering problem** for agent deployments.

Another clear signal is **graph-based RAG**. [code-graph-rag](https://github.com/vitali87/code-graph-rag) and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) favor ASTs and knowledge graphs over pure vector search, producing explainable, edit-friendly retrieval for codebases and enterprises. Finally, the model landscape is unmistakably multi-vendor: [ollama](https://github.com/ollama/ollama) now supports Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. Agent harnesses are deliberately model-agnostic, so **local runtimes, skills, memory, and evaluation matter more than any single model**.

---

## 4. Community Hot Spots

- **Agent Skill packages** — [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [google/skills](https://github.com/google/skills), [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), and [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents). Skills are becoming a shareable, executable layer on top of agent harnesses; ponytail's 99k stars show even prompt-style skills can reach huge audiences.

- **Self-improving / long-running agents** — [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent), [affaan-m/ECC](https://github.com/affaan-m/ECC), and [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent). The +2,356-star day for prime-agent is the strongest signal that autonomous self-improvement is the current frontier.

- **Graph/code RAG** — [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify). Monorepo-scale code understanding is moving toward deterministic AST/knowledge-graph retrieval instead of pure vector similarity.

- **Memory/context layers** — [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), [topoteretes/cognee](https://github.com/topoteretes/cognee), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom). Persistent memory and token compression are prerequisites for production-grade agents.

- **Vertical AI applications** — [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis), [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo), [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master), [harveyai/harvey-labs](https://github.com/harveyai/harvey-labs), and [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext). Finance, content creation, legal work, and scientific forecasting are emerging as the earliest concrete ROI areas for agentic AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*