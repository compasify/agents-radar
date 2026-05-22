# AI Open Source Trends 2026-05-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-22 00:25 UTC

---

Here is the structured AI Open Source Trends Report for **2026-05-22**.

---

## 1. Today's Highlights

The open-source ecosystem is undergoing a **paradigm shift towards "Agent-Native" tooling**. The single biggest signal today is the explosive growth of **skill-based agent orchestration**—projects like `codegraph`, `andrej-karpathy-skills`, and `superpowers` are not just gaining stars; they are redefining how coding agents (Claude Code, Codex, Cursor) interact with context and toolchains. This is coupled with a surge in **multi-agent platforms** (e.g., `multica`, `agency-agents`), moving beyond simple single-agent scripts to production-grade team-like workflows. The landscape is clearly pivoting from "how to prompt an LLM" to "how to structure the environment and skills for autonomous agents."

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference, CLI Tools)

- **[codegraph](https://github.com/colbymchenry/codegraph)** ⭐ +4,294 today — A pre-indexed code knowledge graph designed to reduce token and tool call usage for coding agents, making it highly efficient for large codebases.
- **[Oh-My-Pi](https://github.com/can1357/oh-my-pi)** ⭐ +500 today — A terminal-native AI coding agent with hash-anchored edits, LSP integration, and a subagent architecture, challenging the GUI-centric agent model.
- **[CLI-Anything](https://github.com/HKUDS/CLI-Anything)** ⭐ +656 today — A framework that makes any software "agent-native" by exposing it via a universal CLI interface, directly linking to a CLI-Hub.
- **[forge](https://github.com/antoinezambelli/forge)** ⭐ +398 today — A Python framework for self-hosted LLM tool-calling and multi-step agentic workflows, filling the gap for developers who want local control.
- **[vllm](https://github.com/vllm-project/vllm)** ⭐ 80,669 (topic search) — The leading high-throughput LLM inference engine, continuing to be the backbone for self-hosted model serving.

### 🤖 AI Agents / Workflows (Frameworks & Multi-Agent Systems)

- **[multica](https://github.com/multica-ai/multica)** ⭐ +534 today — An open-source managed agents platform with task assignment, progress tracking, and skill compounding, effectively turning AI agents into "teammates."
- **[superpowers](https://github.com/obra/superpowers)** ⭐ +1,576 today — An agentic skills framework and software development methodology that gained massive traction for its structured approach to agent collaboration.
- **[agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐ +1,018 today — A complete "AI agency" in a box, providing pre-built expert agents (from frontend devs to community managers) with defined processes and deliverables.
- **[ruflo](https://github.com/ruvnet/ruflo)** ⭐ 53,925 (topic search) — A leading agent orchestration platform for Claude, featuring multi-agent swarms and enterprise-grade architecture.
- **[nanobot](https://github.com/HKUDS/nanobot)** ⭐ 42,948 (topic search) — A lightweight, open-source AI agent for integrating tools, chats, and workflows, notable for its simplicity.

### 📦 AI Applications (Specific Vertical Solutions)

- **[streambert](https://github.com/truelockmc/streambert)** ⭐ +1,094 today — An Electron desktop app for streaming/downloading media, applying AI to content discovery and delivery (Zero Ads).
- **[OpenWA](https://github.com/rmyndharis/OpenWA)** ⭐ +730 today — A free, open-source, self-hosted WhatsApp API gateway, enabling AI agent integration with a massive messaging platform.
- **[Understand-Anything](https://github.com/Lum1104/Understand-Anything)** ⭐ +666 today — Turns code into interactive, queryable knowledge graphs, demonstrating a "visual RAG" approach for software comprehension.
- **[TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐ 78,261 (topic search) — A multi-agent LLM financial trading framework, showing an advanced, real-world application of agent cooperation.

### 🧠 LLMs / Training (Model Weights, Training, Fine-tuning)

- **[minimind](https://github.com/jingyaogong/minimind)** ⭐ 50,344 (topic search) — A popular tutorial for training a 64M-parameter LLM from scratch in two hours, democratizing model training knowledge.
- **[stable-pretraining](https://github.com/galilai-group/stable-pretraining)** ⭐ +234 (topic search) — A new, reliable, and scalable library for pretraining foundation models, indicating a maturing of the training toolchain.
- **[LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐ 95,356 (topic search) — The definitive educational resource for building a ChatGPT-like LLM, continuously referenced by the community.

### 🔍 RAG / Knowledge (Vector DBs, Retrieval, Knowledge Management)

- **[claude-mem](https://github.com/thedotmack/claude-mem)** ⭐ 77,283 (topic search) — A persistent context management system for agents that compresses and injects relevant context across sessions, solving the "memory" problem for coding agents.
- **[graphify](https://github.com/safishamsi/graphify)** ⭐ 50,764 (topic search) — Turns any code, schema, or document folder into a queryable knowledge graph, a direct competitor to `codegraph` with broader scope.
- **[academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** ⭐ +2,579 today — A skill pack for Claude Code that automates the research workflow (research → write → review → finalize), applying RAG to academic literature.
- **[LEANN](https://github.com/yichuan-w/LEANN)** ⭐ 11,647 (topic search) — A MLsys2026 paper implementation offering 97% storage savings for private RAG, highlighting innovation in resource-efficient retrieval.

## 3. Trend Signal Analysis

The most explosive community attention today is on **"Agent Skill Systems"** —not just agent frameworks, but collections of specialized, composable skills (e.g., `andrej-karpathy-skills`, `academic-research-skills`). The star counts of `codegraph` (+4,294) and `andrej-karpathy-skills` (+2,614) dwarf the growth of even well-established libraries, signaling a new "app store" mentality for coding agents. Developers want to plug in pre-optimized behaviors (like Karpathy's coding habits) rather than writing prompts from scratch.

A new tech stack direction emerging is **"Agent-Native Infrastructure."** Projects like `CLI-Anything` and `Oh-My-Pi` are designed from the ground up for agent consumption (CLI-first, hash-anchored edits), contrasting with traditional "API-for-humans" tools. The presence of `chrome-devtools-mcp` from the Chrome DevTools team officially confirms that browser-level tooling (MCP servers) is becoming a standard interface for agents.

This spike in skill-and-orchestration tooling likely connects to recent LLM releases that have stabilized agentic behavior (e.g., improved context windows, tool-calling reliability). As LLMs become more competent, the bottleneck shifts to **environment and workflow structure**, which is exactly what today's trending projects address.

## 4. Community Hot Spots

- **🚀 Skill Packs for Coding Agents**: Watch `andrej-karpathy-skills` and `superpowers`. They represent the easiest way to dramatically improve agent output without changing the LLM itself. Expect a proliferation of domain-specific skill packs.
- **⚡ Persistent Context Management**: `claude-mem` (77k stars) and `codegraph` are solving the "short-term memory" problem for code agents. As agents run longer, this becomes mission-critical.
- **🌍 Multi-Agent Orchestration**: `multica` and `agency-agents` indicate the community is moving past single-agent demos to production-grade systems that manage multiple specialized agents as a team.
- **🖥️ Agent-Native CLIs**: `OpenCLI` and `CLI-Anything` are pioneering the idea that every tool should have an agent-first interface. This is a foundational shift for developer tooling.
- **📚 RAG for Research & Code**: `academic-research-skills` and `graphify` show a powerful trend: combining RAG with structured knowledge graphs to automate high-value workflows like research and codebase onboarding.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*