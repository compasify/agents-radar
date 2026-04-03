# AI Open Source Trends 2026-03-30

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-03-30 00:57 UTC

---

# AI Open Source Trends Report — March 30, 2026

---

## 1. Today's Highlights

Today's GitHub trending reveals an **intense focus on Claude Code ecosystem tooling**, with four projects in the top 12 dedicated to extending, documenting, or reimplementing Anthropic's agentic coding interface. This signals a maturation wave where developers move from experimenting with AI coding assistants to building infrastructure around them—memory systems, skill frameworks, and educational resources. Simultaneously, **voice AI and real-time media manipulation** are gaining traction with Microsoft's VibeVoice and Deep-Live-Cam both surging. The emergence of "agent harness" as a distinct architectural pattern—lightweight, bash-based wrappers for LLM agents—suggests a push toward simpler, more transparent agent orchestration.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [obra/superpowers](https://github.com/obra/superpowers) | +2,230 today | Agentic skills framework & software development methodology—highest velocity today, defining how teams structure AI-augmented workflows |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 42,668 total, +919 today | "Bash is all you need"—nano agent harness built from scratch, educational breakthrough for understanding Claude Code internals |
| [ollama/ollama](https://github.com/ollama/ollama) | 166,424 total | Local LLM runtime now supporting Kimi-K2.5, GLM-5, MiniMax—expanding beyond Western model ecosystem |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74,643 total | High-throughput inference engine, critical infrastructure for production agent deployments |
| [langgenius/dify](https://github.com/langgenius/dify) | 134,914 total | Production-ready agentic workflow platform, bridging prototype-to-production gap |

### 🤖 AI Agents / Workflows
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 16,750 total, +917 today | "The agent that grows with you"—research lab's take on adaptive, evolving agents |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | +1,308 today | Cross-platform research agent (Reddit, X, YouTube, HN, Polymarket)—signals demand for grounded, multi-source intelligence |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 84,938 total | Web automation for agents, core infrastructure for computer-use capabilities |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 70,126 total | AI-driven development platform, OpenDevin evolution |
| [trycua/cua](https://github.com/trycua/cua) | 13,325 total | Open-source infrastructure for computer-use agents with sandboxed environments |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,481 total | ~400 MCP servers for AI agents, showing MCP protocol adoption acceleration |

### 📦 AI Applications
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | +1,056 today | "Open-Source Frontier Voice AI"—Microsoft's entry into open voice synthesis, likely competitive response to ElevenLabs |
| [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | +1,132 today | Real-time face swap with single image—surging interest in accessible deepfake/media manipulation |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | +224 today | Self-hosted Grok Companion with realtime voice, Minecraft/Factorio playing—"Neuro-sama" inspired AI companions |
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | +447 today | Open-source Salesforce alternative with AI integration, vertical SaaS disruption |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 64,019 total, +137 today | Financial data platform explicitly built for AI agents, fintech-agent convergence |

### 🧠 LLMs / Training
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,531 total | Foundational model framework, now with expanded multimodal support |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,214 total | Unified fine-tuning for 100+ LLMs/VLMs, democratizing model customization |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,481 total | Educational implementation, continued relevance as developers seek fundamentals |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 44,523 total | Train 64M-parameter GPT in 2 hours—extreme accessibility for LLM education |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,701 total | Modular Rust LLM framework, systems language trend for agent infrastructure |

### 🔍 RAG / Knowledge
| Project | Stars | Why It Matters Today |
|--------|-------|----------------------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 42,591 total, +373 today | Claude Code memory plugin using agent-sdk—solves critical context persistence problem |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76,525 total | RAG engine fused with Agent capabilities, "knowledge engine" evolution |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,397 total | Universal memory layer for AI agents, cross-platform memory infrastructure |
| [cognee-ai/cognee](https://github.com/cognee-ai/cognee) | 14,765 total | Knowledge engine for agent memory in 6 lines—extreme developer experience focus |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 23,241 total | Vectorless, reasoning-based RAG—potential paradigm shift away from embedding dependency |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,489 total | Cloud-native vector database, enterprise-scale retrieval infrastructure |

---

## 3. Trend Signal Analysis

**The Claude Code Ecosystem Explosion** dominates today's signals. Four trending projects directly extend or document Anthropic's coding agent, indicating developers have moved from passive consumption to active infrastructure building. This mirrors patterns seen with VS Code extensions and Chrome DevTools—platform maturity creating secondary tooling markets. The "agent harness" pattern ([shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code), [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)) represents a significant architectural simplification: bash-based, transparent wrappers replacing complex orchestration frameworks.

**Voice AI is having a moment** with Microsoft's [VibeVoice](https://github.com/microsoft/VibeVoice) entering open source, suggesting Big Tech is responding to closed-source dominance (ElevenLabs, Hume). The simultaneous surge of [Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) indicates continued appetite for real-time media AI, now with lower hardware barriers.

**MCP (Model Context Protocol) adoption is accelerating**, evidenced by [activepieces/activepieces](https://github.com/activepieces/activepieces) promoting ~400 MCP servers. This standardization effort—connecting agents to external tools—is becoming table stakes for agent frameworks.

**Memory systems are crystallizing** as a distinct category. [claude-mem](https://github.com/thedotmack/claude-mem), [mem0](https://github.com/mem0ai/mem0), and [cognee](https://github.com/cognee-ai/cognee) all address the same problem: agents forget. The compression + injection pattern (capture, compress, retrieve) is emerging as best practice.

Notably absent: heavy new model releases or training infrastructure. The action has shifted to **application layer and developer experience tooling**—signs of an ecosystem transitioning from research to production deployment.

---

## 4. Community Hot Spots

- **[obra/superpowers](https://github.com/obra/superpowers)** — Highest velocity today (+2,230). "Agentic skills framework" suggests methodology, not just tooling. Watch for emergence of "AI-native SDLC" patterns.

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** — Educational resource with 42K stars. "Built from 0 to 1" approach demystifies agent architecture. Likely to become canonical reference.

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "Vectorless RAG" challenges embedding orthodoxy. If reasoning-based retrieval proves viable, could disrupt $B+ vector database market.

- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** — Microsoft's "frontier voice AI" open sourcing. Strategic move with implications for Azure AI services positioning against OpenAI.

- **[cognee-ai/cognee](https://github.com/cognee-ai/cognee)** — "6 lines of code" knowledge engine. Extreme abstraction of agent memory suggests developer experience is now the primary battleground for RAG infrastructure.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*