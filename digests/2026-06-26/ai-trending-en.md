# AI Open Source Trends 2026-06-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-26 00:29 UTC

---

# AI Open Source Trends Report — 2026-06-26

## 1. Today's Highlights

The open-source AI ecosystem is experiencing an **explosive surge in agent-centric development**, with today's trending data revealing a clear shift from general-purpose AI tools to tightly integrated, multi-agent production systems. The standout launch is **OpenMontage**, the world's first open-source agentic video production system, which gained 3,434 stars in a single day—signaling strong community appetite for domain-specific agent harnesses. Meanwhile, the ecosystem is consolidating around **Claude Code as a de facto runtime**, with multiple projects (gstack, claude-mem, claude-context, learn-claude-code) building opinionated tooling and context management layers on top of it. A third major signal is the **commoditization of AI agent skills**, exemplified by the Anthropic-Cybersecurity-Skills repository which packages 817 structured skills mapped to 6 industry frameworks, making enterprise-grade agent capabilities freely available. The RAG and vector database space remains hyperactive, with established projects like Milvus, Qdrant, and Weaviate continuing to grow alongside novel approaches like PageIndex's vectorless reasoning-based RAG.

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐174,910 — Leading local LLM runtime now supporting K2.6, GLM-5.1, DeepSeek and more; essential for offline agent deployments.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐84,325 — High-throughput inference engine powering production LLM deployments; key infrastructure for agent serving.
- **[aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws)** ⭐47 (+47 today) — Official AWS MCP servers and plugins for AI agents building on AWS; signals major cloud provider commitment to agent ecosystems.
- **[googleworkspace/cli](https://github.com/googleworkspace/cli)** ⭐28,685 — Google Workspace CLI with built-in AI agent skills for Drive, Gmail, Calendar; bridges productivity suites with agent workflows.
- **[jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)** ⭐25,281 — Converts any website into a CLI usable by AI agents, enabling logged-in browser-based automation.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐139,225 — Web scraping API optimized for LLM consumption; critical infrastructure for agents needing real-time web data.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐100,684 — Makes websites accessible to AI agents for task automation; foundational for GUI-based agent interactions.
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** ⭐163 today — JavaScript in-page GUI agent for natural language web control; direct competitor to browser-use from a major Chinese tech firm.

### 🤖 AI Agents / Workflows (Agent Frameworks, Multi-Agent Systems, Automation)

- **[Calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** ⭐3,434 today — World's first open-source agentic video production system with 12 pipelines and 500+ agent skills; today's most explosive trending repo.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐203,059 — The agent that grows with you; one of the most-starred agent frameworks with continuous development momentum.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐185,154 — The pioneering autonomous agent framework that defined the category; still actively maintained and evolving.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐78,336 — AI-driven development platform; leading the "coding agent" sub-category with strong community adoption.
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐74,713 — ByteDance's open-source long-horizon SuperAgent harness for research, coding, and creation tasks lasting minutes to hours.
- **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** ⭐61,769 — Comprehensive Chinese-language tutorial "Building Agents from Scratch"; reflects the educational demand around agent development.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐88,548 — Multi-agent LLM financial trading framework; demonstrates vertical specialization of agent architectures.
- **[Google-Labs-Code/design.md](https://github.com/google-labs-code/design.md)** ⭐1,475 today — Format specification for design system documentation for coding agents; Google's entry into agent UX standards.

### 📦 AI Applications (Domain-Specific Solutions, Vertical AI Products)

- **[Xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)** ⭐309 today — AI-era value investing research framework using Claude Code with multi-agent adversarial analysis; financial vertical agent application.
- **[JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)** ⭐1,024 today — One-click website cloning via AI coding agents; practical automation for web development workflows.
- **[Garrytan/gstack](https://github.com/garrytan/gstack)** ⭐767 today — Opinionated Claude Code setup with 23 tools mimicking CEO/Designer/Engineer roles; meta-agent for software development management.
- **[Mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** ⭐571 today — 817 structured cybersecurity skills mapped to MITRE ATT&CK, NIST, D3FEND frameworks; enterprise-grade agent skill library.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐49,489 — LLM-powered multi-market stock analysis with real-time news and automated notifications; retail investor AI tool.
- **[Hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐31,354 — AI generates editable PowerPoint presentations from documents with native shapes and animations; productivity vertical.
- **[Zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** ⭐45,606 — Open-source super AI assistant with task planning, tool execution, and self-evolution; wechat-integrated agent.

### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning)

- **[Huggingface/transformers](https://github.com/huggingface/transformers)** ⭐161,923 — The definitive model-definition framework for state-of-the-art ML models across text, vision, and audio.
- **[Pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐101,024 — Dynamic neural network framework with strong GPU acceleration; backbone of most LLM training pipelines.
- **[Tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** ⭐195,910 — Google's ML framework; still relevant for production deployments despite PyTorch's research dominance.
- **[Open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,120 — Comprehensive LLM evaluation platform supporting 100+ datasets and major models; essential for model quality assessment.
- **[Galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** ⭐267 — Minimal, reliable library for pretraining foundation and world models; signals growing interest in reproducible training pipelines.
- **[Zjunlp/LightThinker](https://github.com/zjunlp/LightThinker)** ⭐164 — EMNLP 2025 paper on step-by-step compression for reasoning; research that could reduce inference costs for agent thinking.
- **[Testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)** ⭐104 — Survey on test-time scaling in LLMs; academic interest in inference-time compute optimization.

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation, Knowledge Management)

- **[Langgenius/dify](https://github.com/langgenius/dify)** ⭐146,575 — Production-ready platform for agentic workflow development with RAG capabilities; the most comprehensive agent+RAG platform.
- **[Open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐143,009 — User-friendly AI interface supporting Ollama and OpenAI APIs; primary frontend for local RAG deployments.
- **[Infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐83,633 — Leading open-source RAG engine fusing retrieval with agent capabilities for superior LLM context layers.
- **[Milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐44,957 — High-performance cloud-native vector database for scalable ANN search; production RAG infrastructure.
- **[Qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐32,651 — High-performance vector search engine; popular for self-hosted RAG deployments requiring speed.
- **[Weaviate/weaviate](https://github.com/weaviate/weaviate)** ⭐16,435 — Open-source vector database with hybrid search combining vector and structured filtering; cloud-native design.
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐33,420 — Document index for vectorless, reasoning-based RAG; novel approach challenging traditional vector database assumptions.
- **[Mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐59,460 — Universal memory layer for AI agents; persistent context management critical for long-running agent sessions.

## 3. Trend Signal Analysis

**Dominant Trend: Agent Engineering Goes Mainstream**

The most explosive community attention today is directed at **production-ready agent harnesses and skill libraries**. OpenMontage's 3,434 daily stars signals that developers are hungry for domain-specific agent systems that go beyond chat interfaces. The project's 12 pipelines and 500+ agent skills represent a new paradigm: treating agents as composable, skill-based factories rather than monolithic assistants.

**Emerging Stack: Claude Code as Agent Runtime**

A remarkable cluster of projects is building directly on Claude Code: gstack (767 stars) provides an opinionated CEO/Engineer toolchain, claude-mem (84,291 total) offers persistent context compression, and claude-context (11,962) enables whole-codebase search. This suggests Claude Code is becoming a de facto **agent operating system**, with developers adding memory, tooling, and orchestration layers. The 817 structured cybersecurity skills from Anthropic-Cybersecurity-Skills (571 stars today) further validates that **skill commoditization** is accelerating—enterprises can now download entire agent capability catalogs.

**New Directions: Agentic Video Production & GUI Control**

OpenMontage's emergence pioneers **agentic video production** as a new vertical for AI agents, combining multiple pipeline stages (scripting, footage, editing, rendering) under agent orchestration—a significant expansion beyond text/code domains. Meanwhile, Alibaba's page-agent (163 stars today) and browser-use (100,684 total) represent competing approaches to **GUI agent control**, suggesting the browser-as-agent-interface pattern is becoming a contested space between Chinese and Western open-source projects.

**Industry Connection: LLM Release Cycle Drives Agent Tooling**

The mention of "Kimi-K2.6, GLM-5.1, MiniMax, DeepSeek, gpt-oss" in Ollama's description (174,910 stars) confirms rapid model churn—new LLMs from Chinese labs and open-weight releases are driving demand for flexible agent runtimes. The RAG ecosystem continues to absorb these models, with RAGflow (83,633 stars) and Dify (146,575 stars) acting as the middleware layer between models and applications.

## 4. Community Hot Spots

- **OpenMontage** — The 3,434-star day signals that **multimodal agent production systems** are the next frontier. Developers building video, audio, or 3D content generation pipelines should study its architecture of 12 composable pipelines and 500+ skills.

- **Claude Code Skill Stack** — The ecosystem around gstack, claude-mem, claude-context, and Anthropic-Cybersecurity-Skills represents a **rapidly maturing platform play**. Developers building on Claude Code should integrate these skill libraries and context management tools to stay competitive.

- **Vectorless RAG with PageIndex** — At 33,420 total stars, PageIndex's reasoning-based approach challenges the dominance of vector databases. This represents a **paradigm shift in RAG architecture** worth monitoring for anyone building knowledge retrieval systems.

- **GUI Agent Competition** — The simultaneous growth of browser-use (100,684 stars) and Alibaba's page-agent (163 today) indicates that **web browser automation via natural language** is becoming a critical capability for agents. Open-source implementations are now competing with proprietary solutions like Anthropic's Computer Use.

- **AI Verticalization in Finance** — The combination of ai-berkshire (309 today), TradingAgents (88,548 total), and daily_stock_analysis (49,489 total) reveals **finance as the most active vertical** for specialized agents. The multi-agent adversarial analysis approach in ai-berkshire is particularly innovative for institutional-grade investment research.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*