# AI Open Source Trends 2026-07-31

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-31 01:46 UTC

---

Filter note: From the 14 trending repos, I removed clearly non-AI projects such as Baileys, pascalorg/editor, ASP.NET Core, PowerToys, Ansible, Jenkins, tuicr, and paperswithbacktest/awesome-systematic-trading (not AI/ML-specific). For repos appearing only in the trending dataset, the source reports total stars as 0, so today’s gain is the key momentum signal.

## 1. Today's Highlights

Today’s open-source activity is dominated by the **agent-harness layer**: [different-ai/openwork](https://github.com/different-ai/openwork) (+915) and [affaan-m/ECC](https://github.com/affaan-m/ECC) (+804) are both focused on making coding agents faster, more controllable, and more persistent. Hugging Face’s [speech-to-speech](https://github.com/huggingface/speech-to-speech) (+628) points to voice as the next agent interface, while MCP-based tooling such as [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) is becoming a standard connector for coding agents. In the broader topic search, agent frameworks, memory layers, and RAG engines continue to accumulate stars, with ECC crossing 236k and the “agent skills” packaging format consolidating across Claude Code, Codex, and OpenCode.

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,343 | Local LLM runtime now supporting Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek and Qwen. It remains the default inference layer for self-hosted agents and RAG stacks. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,182 | The model-definition framework for state-of-the-art text, vision, audio, and multimodal models. Its centrality makes it baseline infrastructure for nearly every open-source AI project. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 158,374 | Search/scrape API purpose-built for LLM data ingestion. The star count shows how critical high-quality web access is for AI agents and RAG. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 63,428 | Compresses tool outputs, logs, and RAG chunks before they reach the LLM, reducing token use up to 95% in JSON-heavy paths. It attacks the cost bottleneck of agent pipelines. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,376 | Frontend stack for agents and generative UI with AG-UI protocol support. It signals the industry standardizing agent-interface components. |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | Rust | 30,082 | One CLI for Drive, Gmail, Calendar, Sheets, Docs and Chat, with AI agent skills. Official vendor tooling with agent-native access marks a new integration pattern. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,747 | Idiomatic Java library for LLM apps, agents, MCP, and RAG. It is the key bridge for enterprise JVM workloads entering the agent ecosystem. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+80) | Official Chrome DevTools MCP server for coding agents. Today’s +80 stars show browser-level observability becoming a standard agent capability. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 236,245 (+804) | Agent-harness performance optimization system for Claude Code, Codex, Opencode and Cursor. It combines skills, memory, and security with research-first development; today’s +804 confirms this is the hottest agent-engineering niche. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 222,904 | “The agent that grows with you” — a personal agent framework with a very large community. Its star count demonstrates that general-purpose agents are now a mainstream open-source category. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,756 | The classic autonomous agent project remains one of the highest-starred agent frameworks. Its continued relevance shows sustained demand for autonomous task execution. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,842 | Collaborative workspace for agentic workflows, RAG pipelines, and multi-model tools. It is a production-oriented platform moving from prototype to deployment. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,033 | The agent-engineering platform and de facto standard for chaining LLMs, tools, and memory. Its ecosystem reach makes it a fundamental building block. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,344 | Library for making websites accessible to AI agents, enabling browser automation at scale. Essential infrastructure for any agent that needs to act online. |
| [different-ai/openwork](https://github.com/different-ai/openwork) | TypeScript | 0 (+915) | Open-source alternative to Claude Cowork, powered by opencode. Today’s +915 is the top trending gain in the dataset and signals demand for transparent, self-hosted agent coworking UIs. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+378) | Agent skill that researches Reddit, X, YouTube, HN, Polymarket, and the web, then synthesizes grounded summaries. Its +378 today highlights the fast-moving “agent skills” ecosystem. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,393 | The most popular self-hosted AI interface, supporting Ollama and OpenAI-compatible APIs. It is the default frontend for local chat and agent interactions. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 100,672 | One-click short-video generation from a topic or keyword using AI workflows. Its star total shows generative video remains a highly popular consumer AI app category. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,321 | AI job-search assistant that scans job portals, scores listings, tailors CVs, and tracks applications inside coding CLIs. It is a canonical example of vertical agent apps. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,618 | LLM-driven multi-market stock analysis with dashboards and automated notifications. It represents the growing wave of AI-native finance tools. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,172 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants. It shows the consumerization of the agent experience. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,034 | AI converts documents or topics into real native PowerPoint decks with charts, animations, and narration. This is a strong example of narrow, high-value agent applications. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | 0 (+628) | Hugging Face’s toolkit for building local voice agents with open-source models. Today’s +628 is the second-highest trending gain, pointing to voice as the next agent interface. |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 0 (+155) | Microsoft’s 12-week, 24-lesson AI curriculum. Its appearance on the trending list shows continued appetite for foundational AI education even as tooling moves fast. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,619 | Foundational ML framework. Though no longer the center of LLM research, it remains a core production training/inference platform. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,080 | The dominant framework for neural network research and LLM training. It hosts the ecosystem for Hugging Face, LLaMA fine-tuning, and countless model implementations. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,183 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. Its high star count reflects strong demand for deep, hands-on LLM fundamentals. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,248 | LLM evaluation platform supporting 100+ datasets and a wide range of models. Evaluation tooling is increasingly important as open-weight models multiply. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,427 | Course that teaches LLM inference serving by building a tiny vLLM + Qwen on Apple Silicon. It addresses the systems-side skill gap in LLM infrastructure. |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,422 | Overview of the Japanese LLM ecosystem. Regional model hubs are an important signal of globalization in open-source AI. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) |  | 615 | Curated resources for machine unlearning in LLMs. It is a niche but growing area for AI safety, compliance, and model rectification. |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 51 | Decoder-only LLM from scratch in pure Rust using Candle, with MoE and sparse attention. It demonstrates the frontier of Rust-native LLM training/inference. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 99,155 | Turns codebases, docs, schemas, and PDFs into queryable knowledge graphs via deterministic AST parsing, with no vector store. This “vectorless” approach is one of the most interesting retrieval directions today. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,089 | Captures agent session history, compresses it with AI, and injects relevant context into future sessions. It is rapidly becoming the standard for persistent agent memory. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,450 | Leading open-source RAG engine that combines RAG with agent capabilities. It provides a production-grade context layer for LLM applications. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,151 | Universal memory layer for AI agents. Memory as dedicated infrastructure is one of the clearest emerging trends in the agent stack. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,247 | Document agent and OCR platform for RAG workloads. It remains a core tool for connecting enterprise documents to LLMs. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,435 | Cloud-native vector database built for scalable vector ANN search. It is a backbone of many commercial RAG deployments. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 34,922 | Document indexing approach for “vectorless, reasoning-based RAG.” The high star count for a new RAG paradigm suggests practitioners are looking beyond embeddings. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,685 | High-performance vector database and search engine for AI applications. Its Rust implementation and cloud option make it a crucial piece of the RAG stack. |

## 3. Trend Signal Analysis

Today’s hot list shows explosive attention around the **agent harness** and **agent skills**. [ECC](https://github.com/affaan-m/ECC) (+804) and [openwork](https://github.com/different-ai/openwork) (+915) are not new model projects; they are operational tooling for coding agents. This is a maturation signal: the community has moved from “can agents work?” to “how do we make agents predictable, persistent, and cheap?” The spread of “skills” — from [last30days-skill](https://github.com/mvanhorn/last30days-skill) to [googleworkspace/cli](https://github.com/googleworkspace/cli) — defines a lightweight package format for agent capabilities, particularly for Claude Code and similar CLIs. MCP continues to become the universal connector; Chrome DevTools now ships an official MCP server, and [CopilotKit](https://github.com/CopilotKit/CopilotKit) is promoting the AG-UI protocol.

A new application frontier is voice: [Hugging Face speech-to-speech](https://github.com/huggingface/speech-to-speech) (+628) makes local voice agents approachable with open models. This likely rides on recent improvements in open ASR/TTS and the availability of fast local LLMs via [ollama](https://github.com/ollama/ollama). On the knowledge side, RAG is no longer synonymous with vector search. [Graphify](https://github.com/Graphify-Labs/graphify) and [PageIndex](https://github.com/VectifyAI/PageIndex) both emphasize vectorless, reasoning-based retrieval, while classic vector DBs like [Milvus](https://github.com/milvus-io/milvus) and [Qdrant](https://github.com/qdrant/qdrant) remain core. Memory is also emerging as standalone infrastructure: [claude-mem](https://github.com/thedotmack/claude-mem) and [mem0](https://github.com/mem0ai/mem0) are solving cross-session context.

Finally, new model releases are quickly absorbed into local inference: ollama’s description already lists Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, and Gemma. Combined with the Rust-based tools appearing across the topic search, the overall direction is toward a more distributed, agent-native, and performance-conscious open-source AI stack.

## 4. Community Hot Spots

- **Agent-harness optimization** — [affaan-m/ECC](https://github.com/affaan-m/ECC) is the clearest momentum signal: 236k stars, +804 today, and cross-CLI support for Claude Code, Codex, Opencode, and Cursor. Focus areas are skills, memory, and security, not just model calls.
- **Open coworking UIs** — [different-ai/openwork](https://github.com/different-ai/openwork) hit +915 today as an open-source alternative to Claude Cowork. Watch for more teams building transparent, self-hosted agent workspaces.
- **Local voice agents** — [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) (+628) brings voice interaction to local agents. Speech may become the next major interface after chat and coding.
- **Agent memory & context** — [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) and [mem0ai/mem0](https://github.com/mem0ai/mem0) are making persistent memory a first-class infrastructure layer for agents.
- **Vectorless RAG** — [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) and [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) are challenging the assumption that RAG requires embeddings. If this direction matures, it could reshape the retrieval stack.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*