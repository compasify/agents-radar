# AI Open Source Trends 2026-06-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-23 00:28 UTC

---

Here is the AI Open Source Trends Report for 2026-06-23, based on the provided GitHub data.

---

### 1. Today's Highlights

The open-source AI ecosystem is experiencing a paradigm shift towards **"Agentic Infrastructure & Tooling,"** moving beyond building simple chatbots to creating robust, production-ready environments for autonomous agents. The dominant theme is the **"Agent Harness"** — opinionated, pre-configured environments that bundle tools, skills, and memories for specific developer workflows (coding, video production, cybersecurity). We are also seeing the rapid emergence of **Vertical-Specific Agent Kits**, such as *Anthropic-Cybersecurity-Skills* and *OpenMontage*, indicating a "sectorization" of AI agent capabilities. Finally, the **MCP (Model Context Protocol)** ecosystem is maturing, with high-performance servers like *codebase-memory-mcp* aiming to solve long-standing code context and memory problems for AI coding agents.

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)
- **[airllm](https://github.com/lyogavin/airllm)** [⭐0 / +193 today] — An inference engine that allows running 70B parameter models on a single 4GB GPU, democratizing access to large models for developers with limited hardware.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [⭐83,580 total] — The definitive high-throughput, memory-efficient LLM inference engine, crucial for serving models at scale.
- **[ollama/ollama](https://github.com/ollama/ollama)** [⭐174,745 total] — The standard for running a vast library of open-source models locally, now including Kimi-K2.6 and GLM-5.1, fueling the local-first AI movement.
- **[gstack](https://github.com/garrytan/gstack)** [⭐0 / +573 today] — A sharply opinionated, "CEO-style" set of 23 tools for Claude Code, designed to enforce a specific engineering workflow. A signal of the market for highly curated developer agent presets.

#### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent Systems)
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** [⭐73,238 total / +738 today] — ByteDance’s open-source SuperAgent harness for long-horizon tasks. Its advanced features (sandboxes, memories, subagents) make it a state-of-the-art reference for complex agent orchestration.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [⭐199,947 total] — An "agent that grows with you," indicating a focus on personalization and evolutionary AI. Its massive star count suggests a highly anticipated platform.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** [⭐78,028 total] — An "AI-Driven Development" platform, directly competing with commercial coding agents and popularizing the agentic software development workflow.
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** [⭐0 / +1185 today] — A record-setting MCP server for code intelligence, indexing entire codebases into a persistent knowledge graph in milliseconds. This is a critical component for making coding agents truly context-aware.

#### 📦 AI Applications (Specific Apps, Vertical Solutions)
- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** [⭐0 / +2938 today] — A revolutionary open-source agentic video production system. Its 500+ agent skills demonstrate the power of turning general AI assistants into specialized, production-ready studios.
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** [⭐0 / +956 today] — A structured skill set of 817 cybersecurity competencies for AI agents, mapped to industry frameworks. This is a leading indicator of the "skilling" trend in vertical AI.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [⭐45,799 total / +1557 today] — An LLM-powered, multi-market stock analysis system. Its automated, cost-free scheduling makes it a powerful tool for democratizing financial AI.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [⭐88,007 total] — A multi-agent LLM framework for financial trading, exemplifying the application of agent swarms to complex, high-value decision-making.

#### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-tuning Tools)
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [⭐161,819 total] — The undisputed standard model-definition framework supporting SOTA models across all modalities. Remains the bedrock of the entire open-source AI ecosystem.
- **[Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents)** [⭐6,000 total] — A new framework for building AI agents "atomically," suggesting a modular, component-based approach to agent construction.

#### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation, Knowledge Management)
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [⭐83,369 total] — A leading RAG engine that combines deep document understanding with agent capabilities, setting a high bar for context-aware AI.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** [⭐44,894 total] — A high-performance, cloud-native vector database, the backbone for many production-scale RAG and similarity search applications.
- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** [⭐12,508 total] — An MLsys paper implementation offering 97% storage savings for RAG. This represents a critical push for making personalized, on-device AI memory feasible.
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** [⭐70,720 total] — A novel skill for AI coding assistants that turns code, docs, and schemas into a unified, queryable knowledge graph, effectively solving "project context" for agents.

### 3. Trend Signal Analysis

The most explosive community attention is centered on **pre-packaged, vertical-specific "Agent Skill Sets" and "Agent Harnesses."** Projects like *OpenMontage*, *Anthropic-Cybersecurity-Skills*, and *gstack* are not just tools; they are **blueprints for production-grade agentic workflows.** The signal is clear: the community is moving from building *general-purpose agents* to **configuring domain-specific experts.** The massive star counts for projects like *codebase-memory-mcp* (+1185 today) and *deer-flow* (+738) confirm that solving the "memory and context" challenge for long-running, complex agent tasks is the single most important technical hurdle being addressed.

A new and significant direction is the **"Agent Operating System"** concept. *OpenMontage*’s "12 pipelines, 52 tools, 500+ skills" resembles a full operating system for video, not just an app. Similarly, *deer-flow's* architecture of sandboxes, memories, and subagents creates a runtime environment for agents. This suggests that the next wave of open-source AI will be about **creating platforms for agent work, rather than just individual tools.**

This surge in agent infrastructure is deeply connected to the maturation of **LLM providers' developer ecosystems**, particularly Anthropic's Claude Code. A huge percentage of the top trending projects are explicitly designed to plug into "Claude Code, Codex, Cursor, Gemini CLI," standardizing the "skill" format (e.g., `agentskills.io` standard). The ecosystem is coalescing around a **universal "skill" and "context" layer** that sits on top of the LLM APIs, turning them into fully operationalized digital workers.

### 4. Community Hot Spots

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — **Focus Resource.** ByteDance's "long-horizon agent" is a comprehensive reference architecture for anyone building advanced automation. Its use of sandboxes and subagents is state-of-the-art for complex task decomposition.
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — **Critical Infrastructure.** As coding agents become the norm, their biggest bottleneck is context. This project's promise of sub-ms codebase indexing and "99% fewer tokens" is a potential game-changer for agent efficiency and cost.
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — **Vertical Adoption Signal.** This is a blueprint for how to introduce AI agents into regulated, knowledge-intensive industries. It proves that structured skill databases (mapped to industry frameworks like MITRE ATT&CK) are more effective than generic prompts.
- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — **Creative Disruption.** This is the strongest signal that AI agents are moving beyond code into creative domains like video production. It validates the "agent studio" model and will likely inspire analogous projects for music, design, and 3D modeling.
- **[ZillizTech/claude-context](https://github.com/zilliztech/claude-context)** — **Developer UX.** As a code search MCP server, it directly addresses the friction of using coding agents on large projects. This is a perfect example of how vector databases are being abstracted into essential developer tooling.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*