# AI Open Source Trends 2026-08-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-11 00:52 UTC

---

# AI Open Source Trends Report — 2026-08-11

**Filter note:** Non-AI trending repos such as Ladybird, Dopamine, MediaCrawler, and RuView were excluded from this analysis. In tables below, **“—”** means the source trending snapshot did not include a total star count; only today’s delta was available.

---

## 1. Today's Highlights

AI agents dominate GitHub trending today. PrimeIntellect's **prime-agent** (+2,642) and **agency-agents** (+1,349) show that autonomous, self-improving agent frameworks are drawing the largest community response, while **agent-skills** (+659) and **paperclip** (+198) signal a shift toward production-grade agent engineering and management. The second major theme is context and retrieval infrastructure: **semantica** (+970), **code-graph-rag** (+682), and **firecrawl** (+835) all address how agents access, structure, and trust data. Meanwhile, **ComfyUI** (+922) confirms diffusion-based creative AI remains a massively active open-source segment. Overall, the ecosystem is moving from “can an agent do a task?” to “how do we run agents reliably, with memory, skills, security, and governed access?”

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,237 | Local LLM runtime now listing Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. It remains the default self-hosted inference engine for open-weight models. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,913 | The agent engineering platform and the most widely used framework for connecting LLMs, tools, and retrieval. Its ecosystem continues to define standard agent development patterns. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,558 | The model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal models. Still central to open-source training and inference workflows. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,998 | A collaborative workspace for building agentic workflows and RAG pipelines. Its cloud/VPC/self-hosted options make it a leading LLMOps platform. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 165,070 (+835) | The “context API” for searching, scraping, and interacting with the web at scale. Today’s +835 stars show intense demand for agent-ready web data connectivity. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,673 | Frontend stack for agents and generative UI across React, Angular, Mobile, and Slack. It is also a driver of the AG-UI protocol for agent interfaces. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 65,821 | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM. Reports 60–95% fewer tokens for JSON, making it a valuable cost-efficiency layer for agent workloads. |
| [apache/casbin-gateway](https://github.com/apache/casbin-gateway) | Go | 563 | Casbin AI & MCP security gateway for HTTP traffic. Tiny star count but strategically important as MCP security and policy enforcement emerge. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | — (+2,642) | Self-improving RLM agent for coding workflows and long-running autonomous tasks. Today’s largest agent-related star surge. |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | — (+1,349) | A complete “AI agency” composed of specialized agents with defined personalities and deliverables. Reflects the growing multi-agent team pattern. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | — (+659) | Production-grade engineering skills for AI coding agents. Shows how the community is packaging reusable agent abilities. |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | — (+198) | Open-source app for managing agents at work. Addresses the emerging need for agent fleet management and governance. |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | TypeScript | — (+315) | A general hill-climbing AI harness for moving from Current State to Ideal State in life and work. A notable agentic life/productivity system. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | — (+177) | Multi-agent LLM framework for financial trading. Illustrates the rapid spread of vertical agent applications into finance. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,246 | Agent harness performance optimization with skills, instincts, memory, and security. One of the most-starred toolkits for Claude Code, Codex, Cursor, and similar agents. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,501 | The classic open-source autonomous agent platform. Remains an important reference point for accessible multi-step AI agents. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | — (+922) | The most powerful modular diffusion model GUI, API, and backend using a graph/node interface. Today’s +922 stars confirm sustained creative-AI momentum. |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | Python | — (+325) | Google DeepMind’s weather-focused AI project. The +325 today shows AI-for-science still attracts strong community interest. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,421 | User-friendly AI interface for Ollama, OpenAI API, and other backends. The default self-hosted chat UI for local model stacks. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,569 | Local-first agent experience with RAG and full user ownership of intelligence. A strong pick for privacy-conscious AI deployment. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,497 | AI workflow that generates HD short videos from a topic or keyword. One of the most popular automated content-creation projects on GitHub. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,239 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Aggregates frontier LLMs into one desktop application. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 44,447 | AI turns documents or topics into native PowerPoint decks with charts, animations, and audio narration. Demonstrates structured document generation beyond plain text. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,441 | Open-source AI job search that scans portals, scores listings, tailors CVs, and tracks applications. A clear example of vertical agent-driven workflow. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,305 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. The essential educational resource for builders who want to understand LLMs deeply. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,537 | Trains a 64M-parameter LLM from scratch in roughly two hours. Makes custom model training approachable for individuals and small teams. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,465 | Learn LLM inference on Apple Silicon by building a tiny vLLM + Qwen. Important for systems engineers entering the AI inference world. |
| [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) | Jupyter Notebook | 2,593 | Comprehensive generative AI resources including roadmap, projects, interview prep, and coding prep. A practical onboarding path for practitioners. |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,424 | Curated overview of Japanese LLMs. Tracks the rapid growth of non-English model ecosystems. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) |  | 618 | Resource repository for machine unlearning in large language models. Reflects the emerging safety and compliance discipline around model behavior. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 75 | Decoder-only LLM built from scratch in pure Rust using Candle, with MoE and quantization-aware training. Signals interest in non-Python LLM training stacks. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | — (+970) | Graph-native infrastructure for context and accountable AI systems. A strong debut for knowledge-graph-based agent context. |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | Python | — (+682) | “Ultimate RAG for your monorepo”: query, understand, and edit multi-language codebases using AI and knowledge graphs. Addresses a major pain point in code retrieval. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,198 | Leading open-source RAG engine that combines RAG with agent capabilities. One of the most mature production-grade context layers for LLMs. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 104,996 | Turns codebases, docs, SQL schemas, configs, and PDFs into queryable knowledge graphs. Notably uses deterministic AST parsing instead of vector stores. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,336 | Captures agent session activity, compresses it with AI, and injects relevant context into future sessions. A critical memory layer for long-running agents. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,537 | Leading document agent and OCR platform. Powers a huge share of real-world RAG and data-agent applications. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,596 | High-performance, cloud-native vector database built for scalable ANN search. Core infrastructure for RAG at enterprise scale. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,904 | High-performance vector database and vector search engine for next-gen AI. Popular for on-prem and cloud similarity search workloads. |

---

## 3. Trend Signal Analysis

The strongest community attention today is going to **agent harnesses and agent operations**, not to new model weights. prime-agent’s “self-improving RLM” framing, agency-agents’ multi-agent team model, and agent-skills’ reusable engineering abilities all point in the same direction: developers are now optimizing how agents run, remember, and cooperate. Memory and context tools like claude-mem, mem0, and ECC reinforce this “agent infrastructure” wave.

A second signal is the shift from naive vector retrieval to **graph-native structural context**. semantica, code-graph-rag, Graphify, and similar projects are moving RAG beyond chunked embeddings toward deterministic knowledge graphs, explainable edges, and code-structure awareness. This appears directly connected to the growing use of AI coding agents on large monorepos, where semantic chunking often fails.

A third signal is the continued normalization of **local, open-weight LLMs as commodity infrastructure**. Ollama’s model list now includes Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. Around that, tools like Open WebUI, AnythingLLM, and nanobot make self-hosted deployment easy. Meanwhile, protocol-level infrastructure is forming: MCP servers and security gateways such as casbin-gateway, plus UI protocols like AG-UI from CopilotKit, suggest the next phase will be interoperability, governance, and fleet management.

---

## 4. Community Hot Spots

- **Agent skills and harnesses:** [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [affaan-m/ECC](https://github.com/affaan-m/ECC), and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) are making coding agents more reliable with production-grade skills, persistent memory, and performance optimization.
- **Graph RAG for codebases:** [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), and [semantica-agi/semantica](https://github.com/semantica-agi/semantica) represent a clear move toward explainable, structure-aware retrieval.
- **Web/context acquisition for agents:** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl), [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach), and [browser-use/browser-use](https://github.com/browser-use/browser-use) are building the data-access layer agents need to act on real-world information.
- **Agent operations and management:** [paperclipai/paperclip](https://github.com/paperclipai/paperclip), [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi), and [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) are emerging as control planes for teams running many agents across different CLI environments.
- **Self-hosted local AI:** [ollama/ollama](https://github.com/ollama/ollama), [open-webui/open-webui](https://github.com/open-webui/open-webui), [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm), and [HKUDS/nanobot](https://github.com/HKUDS/nanobot) continue to be the backbone of the privacy-first, cost-controlled AI stack.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*