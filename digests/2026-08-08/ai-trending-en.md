# AI Open Source Trends 2026-08-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-08 00:46 UTC

---

After filtering out the six non-AI trending repos (`authentik`, `mise`, `guava`, `celld`, `Legendary_OSINT`, `witr`), **11 of 17 today’s trending repos are AI-relevant**. The report below focuses on those plus the most relevant AI-topic search results.

## 1. Today's Highlights

Today’s GitHub trending is dominated by **agent-skills** and **computer-use** projects: four skills repositories ([addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [mattpocock/skills](https://github.com/mattpocock/skills), [google/skills](https://github.com/google/skills), [obra/superpowers](https://github.com/obra/superpowers)) appeared alongside [cloudflare/computer](https://github.com/cloudflare/computer). The largest single-day gain is [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) at **+2,293 stars** — a self-improving RLM agent for long-running autonomous coding tasks. Established agent platforms such as [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) and [hermes-agent](https://github.com/NousResearch/hermes-agent) continue to hold high attention, while graph-native context/memory tools like [semantica-agi/semantica](https://github.com/semantica-agi/semantica), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) signal a maturing “context engineering” layer. The center of gravity is moving from raw model APIs toward **reusable agent skills, persistent memory, and computer use**.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,909 | The foundational production ML framework. At ~197k stars, it remains one of the most-starred AI repositories. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,269 | The leading dynamic-graph framework for deep learning research and deployment. It underpins many agent/model projects in this report. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,448 | The model-definition framework for SOTA text/vision/audio/multimodal models. It is the default interface for most open-weight models. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,022 | Local LLM runtime with one-command model serving. Its support for Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, GPT-OSS, Qwen, and Gemma shows it tracking the latest open-weight releases. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 162,905 | Context API for search, scrape, and web interaction at scale. Increasingly important as agents need live web data. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 65,401 | Compresses tool outputs, logs, and RAG chunks before they reach the LLM. Claims 20–95% token reduction with same answers, making it a high-leverage efficiency layer. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,206 | Modular Rust framework for building LLM applications. Signals rising Rust adoption in the AI toolchain. |
| [chenyme/grok2api](https://github.com/chenyme/grok2api) | Go | 0 (+55) | Multi-account API gateway for Grok Build/Web/Console. Its +55 stars today highlight demand for unified multi-account Grok access. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0 (+2,293) | Self-improving RLM agent for coding workflows and long-running autonomous tasks. Today’s highest-gaining new agent repo. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+1,131) | Production-grade engineering skills for AI coding agents. Part of today’s explosive “skills as code” trend. |
| [cloudflare/computer](https://github.com/cloudflare/computer) | TypeScript | 0 (+872) | “Give your agent a computer” — Cloudflare’s entry into computer-use automation. Strong day-one traction. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,319 (+355) | Accessible AI platform for building autonomous agents. Continues to gain stars and remains a reference project. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,652 | The agent engineering platform with tools, memory, and model orchestration. Central to the Python LLM app stack. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,205 | Makes websites accessible to AI agents for online automation. Leading open-source browser-agent layer. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 238,580 | Agent harness performance optimization system covering skills, instincts, memory, and security. A massive hub for coding-agent enhancement. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 227,092 | “The agent that grows with you” from Nous Research. One of the most-starred AI-agent projects in the dataset. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,181 | User-friendly AI interface for Ollama/OpenAI API. The de facto local chat UI. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,472 | Local-first agent experience with RAG and data ownership. Positions itself as an alternative to renting intelligence. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,101 | One-click HD short-video generation from a topic or keyword. Huge community interest in AI content automation. |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | Python | 57,385 | Deepfakes software for all, a long-running ML application. Remains relevant for face synthesis research. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,347 | YOLO object detection/segmentation toolkit. The most widely used CV model suite. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,019 | AI productivity studio with smart chat and 300+ assistants. Aggregates frontier LLMs in one desktop app. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,790 | AI generates native PowerPoint decks with transitions, charts, and narration. Strong vertical productivity use case. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 68,364 | CLI that gives AI agents eyes to search/read major platforms with zero API fees. 68k stars show demand for agent data access. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,449 | Train a 64M-parameter LLM from scratch in 2 hours. Popular for hands-on LLM education. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,283 | LLM evaluation platform supporting 100+ datasets and many models. Key for model benchmarking. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,446 | Course on LLM inference serving on Apple Silicon; build a tiny vLLM + Qwen. Bridges systems engineering and LLM serving. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | On-device LLM inference powered by X-bit quantization. Points to edge/private inference trend. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 65 | Decoder-only LLM from scratch in pure Rust using Candle, with MoE and tool agents. Early-stage but noteworthy for Rust-native training. |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,424 | Overview of Japanese LLMs. Important for the non-English open-source LLM landscape. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | | 617 | Resources for machine unlearning in LLMs. Niche but emerging safety/alignment direction. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,727 | Build agentic workflows and RAG pipelines with rich model/tool support. One of the leading open-source LLM app platforms. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 104,025 | Turns codebases/docs/SQL/PDFs into queryable knowledge graphs. Local deterministic AST parsing with no vector store, already a 104k-star project. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,010 | Captures agent sessions, compresses them, and injects relevant context into future sessions. Persists memory across Claude Code, Codex, Gemini, Copilot, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,039 | Open-source RAG engine fusing RAG with agent capabilities. A leading context layer for LLMs. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,783 | Universal memory layer for AI agents. Key infrastructure for long-term agent memory. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,448 | Leading document agent and OCR platform. Evolved from RAG framework to agentic document understanding. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,553 | Cloud-native vector database for scalable ANN search. Core component in RAG stacks. |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | 0 (+122) | Graph-native infrastructure for context and accountable AI systems. Trending today, suggesting interest in graph-based context over vector-only approaches. |

## 3. Trend Signal Analysis

Today’s clearest signal is the emergence of **“agent skills” as a first-class artifact**. Repositories such as [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [mattpocock/skills](https://github.com/mattpocock/skills), [google/skills](https://github.com/google/skills), and [obra/superpowers](https://github.com/obra/superpowers) all teach coding agents reusable engineering procedures. Combined with [affaan-m/ECC](https://github.com/affaan-m/ECC), this is a shift from single prompts to composable, version-controlled agent capabilities.

Second, **computer-use is heating up**: [cloudflare/computer](https://github.com/cloudflare/computer) and [browser-use/browser-use](https://github.com/browser-use/browser-use) target the challenge of giving agents hands, not just chat. Third, **context engineering is becoming as important as model choice**: [semantica-agi/semantica](https://github.com/semantica-agi/semantica), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) focus on graph memory and token compression, while [mem0ai/mem0](https://github.com/mem0ai/mem0) provides a universal memory layer.

Fourth, **API aggregation and multi-provider access** are growing ([chenyme/grok2api](https://github.com/chenyme/grok2api), [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude), [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi)), reflecting a landscape where teams route across many frontier models and CLI agents. This connects to the diverse open-weight model ecosystem that [ollama/ollama](https://github.com/ollama/ollama) now advertises — Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, GPT-OSS, Qwen, Gemma — pushing developers to build middleware and skill layers rather than rely on one vendor. Finally, **swarm-style coordination** ([666ghj/MiroFish](https://github.com/666ghj/MiroFish), [unclebob/swarm-forge](https://github.com/unclebob/swarm-forge)) and **self-improving agents** ([PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)) remain early but are gathering attention. Overall, the community is investing less in raw model training and more in orchestration: skills, memory, computer access, and multi-agent workflows.

## 4. Community Hot Spots

- **Agent Skills / “skills as code”**: [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [mattpocock/skills](https://github.com/mattpocock/skills), [google/skills](https://github.com/google/skills), [obra/superpowers](https://github.com/obra/superpowers), and [affaan-m/ECC](https://github.com/affaan-m/ECC) — explosive star growth around packaging engineering knowledge into reusable agent instructions.

- **Computer-use / browser autonomy**: [cloudflare/computer](https://github.com/cloudflare/computer), [browser-use/browser-use](https://github.com/browser-use/browser-use), and [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — the move from text agents to agents that can actually operate websites and machines.

- **Context & memory layer**: [semantica-agi/semantica](https://github.com/semantica-agi/semantica), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — solving long-running agent memory and token efficiency.

- **Self-improving / long-running agents**: [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent), [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT), and [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — autonomous coding and continuous self-improvement are the new frontier.

- **Multi-provider / agent orchestration**: [chenyme/grok2api](https://github.com/chenyme/grok2api), [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude), and [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) — demand for gateways that unify access to multiple models and CLI agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*