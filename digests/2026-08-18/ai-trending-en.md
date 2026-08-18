# AI Open Source Trends 2026-08-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-17 23:11 UTC

---

**Filtering note:** I excluded non-AI general-purpose tools from the trending list (`nautilus_trader`, `immich`, `cordis`, `Motrix`). For trending-only repositories where the total star count was not captured in the input, I marked total stars as “—”.

## 1. Today's Highlights

Today’s AI trending is dominated by agentic memory, local inference, and AI security. The top AI gainer was [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) at +1,275 stars, while [strix](https://github.com/usestrix/strix) (+656) and [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) (+156) showed security becoming a core agent-skill category. New tools like [ai-memory](https://github.com/akitaonrails/ai-memory) (+207), [llmfit](https://github.com/AlexsJones/llmfit) (+239), and [omlx](https://github.com/jundot/omlx) (+96) point to a fast-growing demand for local, hardware-aware agent infrastructure. In the broader topic search, agent harnesses remain the center of gravity: [ECC](https://github.com/affaan-m/ECC) now sits at 240,694 stars and [hermes-agent](https://github.com/NousResearch/hermes-agent) at 232,003.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,807 | Local LLM runtime that makes state-of-the-art open models runnable with one command. Ollama remains the default entry point for private, hardware-native inference and is actively tracking new open-weight releases. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 168,616 | Context API for searching, scraping, and interacting with the web at scale. It is a key piece of web-to-agent infrastructure, giving LLMs and agents live internet access. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,275 | High-throughput, memory-efficient LLM inference and serving engine. It is the de facto serving layer for self-hosted production LLMs and continuously adds support for new model architectures. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 66,666 | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM. Reports 20% fewer tokens for coding agents and 60–95% fewer for JSON, addressing the rising cost of long agent sessions. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,300 | Modular Rust framework for building scalable LLM applications. It signals growing demand for performance-critical, type-safe AI infrastructure outside Python. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | Python | 543 | Universal LLM gateway exposing OpenAI/Anthropic-compatible endpoints with multi-provider translation and load balancing. It reduces vendor lock-in friction for teams using many model APIs. |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Rust | — (+239 today) | CLI that tests hundreds of models and providers to find what runs on a user's hardware. Today's fast star growth highlights the pain of matching open-weight models to local compute. |
| [jundot/omlx](https://github.com/jundot/omlx) | Python | — (+96 today) | LLM inference server for Apple Silicon with continuous batching and SSD caching, managed from the macOS menu bar. It targets the growing local-first Mac developer segment. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 240,694 | Agent harness performance optimization system with skills, instincts, memory, and security. It is one of the highest-starred agent-engineering projects and central to the Claude Code / Codex / Cursor ecosystem. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 232,003 | “The agent that grows with you” from Nous Research. Its rapid star growth shows strong demand for self-improving, long-lived personal agents. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,655 | The long-standing autonomous agent framework. It remains a major reference point for building goal-driven agent workflows. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 152,721 | Collaborative workspace for agentic workflows, RAG pipelines, and comprehensive model/tool support. Dify is becoming the default open LLMOps platform for teams moving from prototype to production. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,414 | Agent engineering platform with broad integrations for tools, models, and vector stores. It remains the most widely used framework for production Python agent development. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,524 | Makes websites accessible to AI agents and automates online tasks. It is a leading open-source browser-agent library for web automation. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 34,683 | DeepSeek-native AI coding agent for the terminal, engineered around prefix-cache stability. It shows the move toward vendor-specific, reasoning-optimized coding agents. |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | Python | — (+156 today) | 817 structured cybersecurity skills for AI agents mapped to MITRE ATT&CK, NIST CSF, and other frameworks. Works with Claude Code, Copilot, Cursor, Gemini CLI and 20+ platforms; today's trending shows security skills becoming a first-class agent artifact. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,046 | User-friendly self-hosted AI interface supporting Ollama, OpenAI API, and more. It is the most popular frontend for private LLM deployments. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 105,927 (+1,275) | Generates HD short videos from a topic or keyword using AI models and automated workflows. It was the top trending AI gainer today, showing continued demand for AI content creation tools. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,834 | Local-first agent experience and all-in-one LLM app. The “stop renting your intelligence” positioning resonates as teams seek private alternatives to hosted AI. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 64,584 (+147) | Open-source AI job search that scans job portals, scores listings A–F, tailors CVs, and tracks applications in your AI coding CLI. It is a strong example of vertical AI workflow apps going mainstream. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,167 | LLM-powered multi-market stock analysis system with real-time news, decision dashboards, and automated push notifications. It represents the boom in AI personal finance and analyst agents. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,663 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs makes it a popular cross-provider client. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 47,490 | Turns documents or topics into native PowerPoint decks with transitions, charts, and audio narration. Vertical AI productivity apps are becoming more sophisticated and data-backed. |
| [usestrix/strix](https://github.com/usestrix/strix) | Python | — (+656 today) | Open-source AI penetration testing tool that finds and fixes application vulnerabilities. Today’s +656 stars signal that AI security is an exploding application area. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,990 | General machine learning framework with a massive production ecosystem. It remains foundational for applied ML despite the continuing rise of PyTorch. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,195 | Model-definition framework for state-of-the-art text, vision, audio, and multimodal models. It remains the central open-source hub for model weights and training/inference. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,439 | Deep learning framework with dynamic graphs and strong GPU acceleration. It is the default research-to-production framework for modern LLM work. |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | Python | 66,963 | Classical machine learning library for classification, regression, and clustering. It remains a stable foundation for data science and MLOps pipelines. |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,236 | High-level deep learning API for fast experimentation. Its simplicity keeps it relevant for prototyping and education. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,696 | YOLO object detection, instance segmentation, and classification toolkit. It is the leading open-source computer vision model suite, continuously updated with new YOLO versions. |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 49,479 | Reusable end-to-end computer vision tools. It complements Ultralytics and simplifies building real-world vision applications. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,310 | LLM evaluation platform supporting 100+ datasets and major open/closed models. As models proliferate, rigorous evaluation is becoming critical infrastructure. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 107,494 | Turns codebases, docs, SQL schemas, configs, and PDFs into a queryable knowledge graph. It uses deterministic AST parsing and no vector store, making it popular for coding-agent knowledge. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,010 | Captures everything an agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. It is becoming the standard for persistent agent memory across Claude Code, Codex, Gemini, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,678 | Leading open-source RAG engine that fuses retrieval-augmented generation with agent capabilities. It provides a superior context layer for LLMs in production. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,466 | Universal memory layer for AI agents. It is increasingly important as developers build long-term, personalized agent experiences. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,707 | Leading document agent and OCR platform. It remains a core framework for RAG, document understanding, and knowledge workflows. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,666 | High-performance, cloud-native vector database built for scalable vector ANN search. It is foundational infrastructure for large RAG deployments. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,029 | High-performance, massive-scale vector database and search engine. It continues to be a top choice for AI-native search use cases. |
| [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | — (+207 today) | Long-term memory solution for agent coding CLIs that also facilitates handoff between different agent vendors. Its strong trending today highlights the demand for cross-agent memory portability. |

## 3. Trend Signal Analysis

The most explosive attention today is in **agent memory and context engineering**. [ai-memory](https://github.com/akitaonrails/ai-memory) and [claude-mem](https://github.com/thedotmack/claude-mem) are attacking the same core problem: agents forget everything between sessions. With [mem0](https://github.com/mem0ai/mem0) and [Graphify](https://github.com/Graphify-Labs/graphify) also growing, persistent memory is becoming a core layer of agent infrastructure rather than a nice-to-have.

A second breakout is **AI security**. [strix](https://github.com/usestrix/strix) gained +656 stars today, and [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) added +156. The mapping of agent skills to MITRE and NIST frameworks indicates that the ecosystem is professionalizing agent security. This aligns with enterprise adoption: before autonomous agents touch code or data, teams need red-teaming, guardrails, and security policies.

A third signal is **local and edge inference**. [llmfit](https://github.com/AlexsJones/llmfit) and [omlx](https://github.com/jundot/omlx) are new on the hot list, while [ollama](https://github.com/ollama/ollama) now highlights the latest open-weight models from Kimi, GLM, MiniMax, DeepSeek, Qwen, and Gemma. The bottleneck is moving from “can I run a model” to “which model runs best on my exact hardware.” Rust also appears more often in AI infrastructure—[rig](https://github.com/0xPlaygrounds/rig), [llmfit](https://github.com/AlexsJones/llmfit), and [ai-memory](https://github.com/akitaonrails/ai-memory)—pointing to performance-sensitive, memory-safe systems beyond Python.

Finally, **token cost is becoming a design constraint**. [headroom](https://github.com/headroomlabs-ai/headroom) compresses context before it reaches the LLM, and [caveman](https://github.com/JuliusBrussee/caveman) cuts tokens inside Claude Code. As agents run longer and cost more, token-conscious tooling will become mandatory.

## 4. Community Hot Spots

- **Agent memory / long-term context:** [ai-memory](https://github.com/akitaonrails/ai-memory), [claude-mem](https://github.com/thedotmack/claude-mem), [mem0](https://github.com/mem0ai/mem0), and [cognee](https://github.com/topoteretes/cognee) are the most relevant for developers building persistent agents. The “memory layer” is becoming as important as the model itself.

- **AI security and red teaming:** [strix](https://github.com/usestrix/strix), [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills), and [casbin-gateway](https://github.com/apache/casbin-gateway) are worth watching. Agent security is still early, but the pace of new projects is accelerating quickly.

- **Local-first LLM on Apple Silicon:** [omlx](https://github.com/jundot/omlx), [llmfit](https://github.com/AlexsJones/llmfit), [picollm](https://github.com/Picovoice/picollm), and [tiny-llm](https://github.com/skyzh/tiny-llm) serve developers who want private, cheap, hardware-adapted inference without cloud dependencies.

- **Token compression for agent economics:** [headroom](https://github.com/headroomlabs-ai/headroom) and [caveman](https://github.com/JuliusBrussee/caveman) show that reducing token spend is a new competitive axis for agent tooling.

- **Vertical AI workflows:** [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo), [career-ops](https://github.com/santifer/career-ops), [ppt-master](https://github.com/hugohe3/ppt-master), and [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) demonstrate that AI is moving rapidly into specific job functions and everyday productivity tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*