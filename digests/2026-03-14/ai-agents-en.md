# OpenClaw Ecosystem Digest 2026-03-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-14 00:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-14

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a major release cycle following v2026.3.12. The release has introduced significant instability: **regression reports dominate the issue tracker**, particularly around memory leaks, WhatsApp connectivity, and Control UI authentication. The community is actively engaged with 101 comments on the long-standing i18n request, while maintainers are pushing rapid fixes through PRs targeting dashboard performance, CLI reliability, and channel stability. The project appears to be in a **stabilization phase** post-feature-release, with architectural refactoring (Signal/iMessage extensions) progressing alongside critical bug triage.

---

## 2. Releases

### v2026.3.12 — Released 2026-03-12

| Aspect | Details |
|--------|---------|
| **Major Changes** | Complete Control UI/dashboard-v2 overhaul: modular gateway dashboard with overview, chat, config, agent, and session views; command palette; mobile bottom tabs; enhanced chat tools (slash commands, search, export, pinned messages) |
| **Breaking Changes** | None explicitly documented, but **widespread regressions reported** (see Bugs & Stability) |
| **Migration Notes** | Users on Raspberry Pi and low-memory (4GB) servers should delay upgrade; WhatsApp channel configurations may need re-authentication; `dangerouslyDisableDeviceAuth` flag behavior changed (see [#45512](https://github.com/openclaw/openclaw/pull/45512)) |

**Release PR:** [#41503](https://github.com/openclaw/openclaw/pull/41503) — Thanks @BunsDev

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|----|-------------|--------|
| [#45533](https://github.com/openclaw/openclaw/pull/45533) | UI: Fix chat context notice icon sizing | Resolves visual regression where warning icon obscured chat interface |
| [#45518](https://github.com/openclaw/openclaw/pull/45518) | test: Preserve wrapper behavior for targeted runs | CI/test infrastructure reliability |
| [#13694](https://github.com/openclaw/openclaw/pull/13694) | feat(cron): Structured output via responseSchema | Enables JSON schema validation for cron job outputs |
| [#45361](https://github.com/openclaw/openclaw/pull/45361) | test: Annotate CI fixture cases | Type safety improvements for gateway config tests |
| [#27009](https://github.com/openclaw/openclaw/issues/27009) | Support for OpenCode Go subscription | **Closed** — Provider integration completed |

### Active Development (Open PRs)

| PR | Description | Status |
|----|-------------|--------|
| [#45531](https://github.com/openclaw/openclaw/pull/45531) | **Signal extension refactor** — Move 9K LOC to extensions | XL architectural change, 8 channels affected |
| [#45539](https://github.com/openclaw/openclaw/pull/45539) | **iMessage extension refactor** — Move 5K LOC to extensions | XL architectural change, matches Signal pattern |
| [#45132](https://github.com/openclaw/openclaw/pull/45132) | Slack mux receiver for multi-gateway deployments | Enterprise scaling feature |
| [#45541](https://github.com/openclaw/openclaw/pull/45541) | Fix dashboard chat history reload storm | Performance critical for tool-heavy runs |
| [#45512](https://github.com/openclaw/openclaw/pull/45512) | **Restore Control UI auth bypass** | Fixes #29801, #45398, #45401, #41618 — **critical for remote access** |
| [#41496](https://github.com/openclaw/openclaw/pull/41496) | Plugin hooks for AI provider capabilities (TTS/ASR/Embedding/Image/Video) | Major extensibility enhancement |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Analysis |
|------|-------|----------|-----|----------|
| 1 | [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n & Localization Support | 101 | 3 | **Longest-running community request** — maintainers explicitly declined due to bandwidth constraints, but community continues pushing PRs. Signals global adoption demand vs. core team resource limits. |
| 2 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 38 | 60 | **Highest voted open issue** — platform parity gap for desktop apps. macOS/iOS/Android covered; Linux/Windows desktop apps missing. Community willing to contribute ("help wanted" label). |
| 3 | [#45471](https://github.com/openclaw/openclaw/issues/45471) UI chat not opening (regression) | 33 | 0 | **v2026.3.12 critical regression** — Chat UI completely broken for some users. PopOS/Linux affected. No fix PR identified yet. |
| 4 | [#27009](https://github.com/openclaw/openclaw/issues/27009) OpenCode Go subscription support | 23 | 25 | **Closed today** — Provider integration demand for cost-effective open-weight models (Kimi K2.5, GLM-5, Minimax M2.5). |
| 5 | [#45289](https://github.com/openclaw/openclaw/issues/45289) Telegram reaction notifications broken | 16 | 0 | v2026.3.12 regression — `message_reaction` updates not received despite configuration. |

### Underlying Community Needs

- **Accessibility**: i18n request demonstrates non-English user base growth
- **Platform equity**: Linux/Windows desktop gap creates "second-class citizen" perception
- **Release quality**: Rapid regression volume suggests testing/QA gaps in release pipeline
- **Provider diversity**: Strong demand for non-OpenAI/Anthropic options (OpenCode, xAI, MiniMax, Moonshot)

---

## 5. Bugs & Stability

### Critical Severity (System Unusable / Data Loss / Security)

| Issue | Description | Environment | Fix Status |
|-------|-------------|-------------|------------|
| [#45440](https://github.com/openclaw/openclaw/issues/45440) | **Rapid memory growth → OOM on Raspberry Pi 4**; UI disconnected after restart | RPi 4, 2GB RAM, v2026.3.12 | 🔴 **No fix PR** |
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | **Memory leak — OOM on basic commands** (`gateway status`, `doctor`) | v2026.3.12, CLI | 🔴 **No fix PR** |
| [#45474](https://github.com/openclaw/openclaw/issues/45474) | **WhatsApp inbound messages not delivered**; 440/401 reconnect loop | v2026.3.12 | 🔴 **No fix PR** |
| [#45171](https://github.com/openclaw/openclaw/issues/45171) | **WhatsApp outbound broken** — auto-reply works, message tool/CLI fails | v2026.3.12 | 🔴 **No fix PR** |
| [#45471](https://github.com/openclaw/openclaw/issues/45471) | **UI chat not opening** — regression from working state | PopOS, latest | 🔴 **No fix PR** |

### High Severity (Feature Broken / Workaround Required)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#44755](https://github.com/openclaw/openclaw/issues/44755) | `/compact` command crashes main webchat — unrecoverable white triangle logo | 🔴 No fix PR |
| [#44835](https://github.com/openclaw/openclaw/issues/44835) | Config loop: `models.0.id undefined` validation error despite filled fields | 🔴 No fix PR |
| [#45504](https://github.com/openclaw/openclaw/issues/45504) | `devices list` / `devices approve` fail against local loopback gateway | 🔴 No fix PR |
| [#45419](https://github.com/openclaw/openclaw/issues/45419) | CLI WebSocket handshake timeout (3000ms) while web UI works | 🔴 No fix PR |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | `openclaw logs --follow` fails with handshake timeout | 🔴 No fix PR |
| [#45287](https://github.com/openclaw/openclaw/issues/45287) | Update rolls back: `plugins.slots.memory: plugin not found: memory-core` | 🔴 No fix PR |
| [#44906](https://github.com/openclaw/openclaw/issues/44906) | Context limit warning icon scales abnormally, blocks chat view | 🟡 **PR [#45533](https://github.com/openclaw/openclaw/pull/45533) merged** |

### Medium Severity (Degraded Experience)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#45251](https://github.com/openclaw/openclaw/issues/45251) | "Weird pages in browser" — rendering corruption during GitHub PR search | 🔴 No fix PR |
| [#45089](https://github.com/openclaw/openclaw/issues/45089) | Chat box GUI view problems — layout/rendering issues | 🔴 No fix PR |
| [#45271](https://github.com/openclaw/openclaw/issues/45271) | Model does "tool calling narrations" since 2026.3.7 — unwanted text output | 🔴 No fix PR |
| [#44869](https://github.com/openclaw/openclaw/issues/44869) | Control UI shows error triangle with no input box when switching to main session | 🟡 **PR [#45512](https://github.com/openclaw/openclaw/pull/45512) addresses** |

### Regression Pattern Analysis

**v2026.3.12 specific regressions**: 15+ confirmed regressions tagged, concentrated in:
- Memory management (leaks, OOM)
- WhatsApp channel (inbound/outbound/listener state)
- Control UI authentication and session handling
- CLI WebSocket connectivity

---

## 6. Feature Requests & Roadmap Signals

### Likely Next Version (v2026.3.13)

| Feature | Signal Strength | Evidence |
|---------|-----------------|----------|
| Memory leak fixes | **Very High** | 5+ critical OOM reports, RPi/low-memory server impact |
| WhatsApp channel stability | **Very High** | 4+ interconnected regressions, core messaging functionality |
| Control UI auth restoration | **High** | PR [#45512](https://github.com/openclaw/openclaw/pull/45512) active, multiple related issues |
| Dashboard performance fixes | **High** | PR [#45541](https://github.com/openclaw/openclaw/pull/45541) active (reload storm) |

### Medium-Term (v2026.4.x)

| Feature | Signal Strength | Evidence |
|---------|-----------------|----------|
| Extension architecture completion | **High** | Signal (#45531) and iMessage (#45539) refactors in progress |
| Multi-gateway Slack deployments | **Medium** | PR [#45132](https://github.com/openclaw/openclaw/pull/45132) open, enterprise demand |
| Provider capability plugins (TTS/ASR/Embedding) | **Medium** | PR [#41496](https://github.com/openclaw/openclaw/pull/41496) open, extensibility focus |
| xAI/Grok native tools support | **Medium** | Issue [#6872](https://github.com/openclaw/openclaw/issues/6872) (15 comments), competitive parity demand |

### Long-Term / Backlog

| Feature | Signal Strength | Blocker |
|---------|-----------------|---------|
| i18n/Localization | **High demand, low priority** | Maintainer bandwidth explicitly cited |
| Linux/Windows desktop apps | **High demand, unassigned** | "Help wanted" — community contribution needed |
| Outbound message approval gate | **Medium** | Issue [#25145](https://github.com/openclaw/openclaw/issues/25145), safety/compliance use case |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Category | Quote/Example | Frequency |
|----------|-------------|-----------|
| **Release stability** | "After updating the Chat isn't working" — [#45471](https://github.com/openclaw/openclaw/issues/45471) | Very High |
| **Memory/resource usage** | "OOM on basic commands" — [#45064](https://github.com/openclaw/openclaw/issues/45064); "500MB+ before crashing" — [#41778](https://github.com/openclaw/openclaw/issues/41778) | Very High |
| **WhatsApp reliability** | "No active WhatsApp Web listener" — 5+ variations | Very High |
| **Authentication complexity** | "device identity required" errors despite valid tokens — [#29801](https://github.com/openclaw/openclaw/issues/29801), [#44967](https://github.com/openclaw/openclaw/issues/44967) | High |
| **CLI/WebSocket flakiness** | "handshake timeout while web UI works" — [#45419](https://github.com/openclaw/openclaw/issues/45419) | High |

### Use Cases (Implicit from Issues)

| Pattern | Evidence |
|---------|----------|
| **Low-resource/edge deployment** | Raspberry Pi 4, 4GB cloud servers — cost-conscious self-hosting |
| **Multi-channel operations** | WhatsApp + Telegram + Discord + Signal simultaneously — business/personal automation |
| **Remote/mobile management** | Control UI LAN access, device approval workflows — away-from-keyboard operation |
| **Agent-to-agent orchestration** | `sessions_spawn`, sub-agents, ACP — complex multi-agent workflows |

### Satisfaction Indicators

- **Positive**: Rapid maintainer response to critical issues; active PR review; architectural improvements (extensions)
- **Negative**: Regression density in "stable" releases; unresolved long-term requests (i18n, desktop apps); memory efficiency degradation over versions

---

## 8. Backlog Watch

### Issues Needing Maintainer Decision (>30 days, high engagement)

| Issue | Age | Comments | Status | Action Needed |
|-------|-----|----------|--------|---------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n | 45 days | 101 | Open | **Policy decision**: Accept community maintenance or formally defer |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 73 days | 38 | Open | **Resource allocation** or community handoff |
| [#5813](https://github.com/openclaw/openclaw/issues/5813) `agentToAgent.enabled` breaks `sessions_spawn` | 42 days | 11 | Open | **Bug triage** — core functionality broken |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Skill install fails in Docker (brew dependency) | 31 days | 11 | Open | **Container build fix** — affects onboarding |
| [#9030](https://github.com/openclaw/openclaw/issues/9030) "Discriminator Layer" middleware architecture | 39 days | 9 | Open | **RFC review** — safety architecture proposal |
| [#8619](https://github.com/openclaw/openclaw/issues/8619) Gateway install fails (launchctl domain) | 39 days | 9 | Open | **macOS install reliability** |

### Stale PRs at Risk

| PR | Age | Description | Risk |
|----|-----|-------------|------|
| [#22607](https://github.com/openclaw/openclaw/pull/22607) | 22 days | `--omit-system-prompt` flag for CLI | Low — simple, needs review |
| [#27727](https://github.com/openclaw/openclaw/pull/27727) | 17 days | Compaction safeguard summary budget | Low — performance fix |

---

## Project Health Assessment

| Metric | Status | Notes |
|--------|--------|-------|
| **Activity** | 🟢 Excellent | 1000 items updated/24h |
| **Release Quality** | 🔴 Critical | v2026.3.12 introduced widespread regressions |
| **Response Velocity** | 🟡 Moderate | Fixes in progress but backlog growing |
| **Community Engagement** | 🟢 Strong | High comment counts, detailed reports |
| **Technical Debt** | 🟡 Concerning | Extension refactors indicate architectural strain |
| **Stability Trend** | 🔴 Declining | Memory and connectivity issues increasing |

**Recommendation**: Immediate v2026.3.13 hotfix release prioritizing memory leaks, WhatsApp channel, and Control UI authentication; consider extended beta period for dashboard-v2 features.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-14

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing **explosive growth and fragmentation**, with 10+ active projects pursuing convergent visions through divergent architectures. The sector has shifted from "chatbot wrappers" to **full agent frameworks** with memory systems, multi-channel deployment, and tool ecosystems. Three distinct tiers have emerged: mature platforms (OpenClaw, NanoBot) handling enterprise scale; rapid innovators (ZeroClaw, PicoClaw, NullClaw) optimizing for specific deployment contexts; and integration layers (LobsterAI, CoPaw) building atop existing infrastructure. **Memory management, local LLM compatibility, and enterprise messaging channels** dominate cross-project development priorities, while **release stability and security hardening** remain systemic challenges across the ecosystem.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.3.12 (2 days ago) | 🔴 **Stressed** | Post-release stabilization crisis |
| **NanoBot** | 26 | 154 | None (v0.1.4.post2 current) | 🟢 **Strong** | High velocity, responsive maintenance |
| **ZeroClaw** | 37 | 50 | v0.1.9-beta.140, v0.1.9-beta.136 | 🟡 **Recovering** | Branch migration instability |
| **PicoClaw** | 35 | 109 | v0.2.2-nightly.20260313 | 🟡 **Active** | Agent refactor sprint, security focus |
| **NanoClaw** | 18 | 37 | None | 🟡 **Moderate** | Maintainer bandwidth constrained |
| **NullClaw** | 30 | 35 | v2026.3.13, v2026.3.12 | 🟢 **Strong** | Rapid patch cycle, enterprise focus |
| **IronClaw** | 25 | 50 | None (v0.18.0 current) | 🟢 **Strong** | Feature expansion, security-conscious |
| **LobsterAI** | 12 | 9 | None | 🟡 **Moderate** | OpenClaw-dependent, local LLM friction |
| **TinyClaw** | 2 | 4 | v0.0.13 | 🟢 **Healthy** | Maintainer-driven, low community |
| **Moltis** | 11 | 11 | None | 🟡 **Stable** | Backlog clearing, node execution focus |
| **CoPaw** | 50 | 44 | None (v0.0.7 current) | 🟡 **Pressured** | Growing pains, context management debt |
| **ZeptoClaw** | 8 | 6 | None | 🟢 **Healthy** | Security sprint, ACP expansion |
| **EasyClaw** | 0 | 0 | None | ⚫ **Inactive** | No activity |

*Health scoring: activity volume + maintainer responsiveness + stability indicators*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 1000 items/day activity; largest absolute volume | 5-10x higher than NanoBot (#2 by volume) |
| **Feature breadth** | Most complete channel ecosystem (15+ platforms) | NanoBot/NullClaw catching up; others specialized |
| **Architectural maturity** | Extensions system, plugin hooks, dashboard-v2 | ZeroClaw/PicoClaw still refactoring core |
| **Community size** | 101 comments on i18n issue alone | Order of magnitude larger engagement |

### Technical Approach Differences

| Aspect | OpenClaw | Peer Alternatives |
|:---|:---|:---|
| **Core language** | TypeScript/Node.js | Rust (ZeroClaw), Python (NanoBot, PicoClaw), Go (NullClaw) |
| **Deployment model** | Gateway + Control UI (web-centric) | CLI-first (ZeptoClaw), Electron-embedded (LobsterAI), embedded/IoT (IronClaw) |
| **Memory architecture** | Conversation history + external vector stores | Hierarchical YAML (TinyClaw), FTS5 + LanceDB (NanoClaw), semantic search (PicoClaw) |
| **Extension mechanism** | Extensions + plugin hooks (evolving) | Native plugins (NanoBot), MCP-first (ZeroClaw, LobsterAI) |

### Critical Vulnerabilities

- **Release quality**: v2026.3.12 introduced 15+ regressions; peers (NullClaw, NanoBot) demonstrate faster critical fix cycles
- **Resource efficiency**: Memory leaks and OOM issues on low-end hardware; PicoClaw/NanoBot optimize for edge deployment
- **Maintainer bandwidth**: Explicit i18n decline due to resource constraints; NanoBot/NullClaw show more sustainable response patterns

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Memory & context management** | OpenClaw, NanoBot, PicoClaw, CoPaw, Moltis | Token compression, conversation summarization, persistent retrieval, "amnesia" prevention |
| **Local LLM compatibility** | NanoBot, PicoClaw, LobsterAI, CoPaw, Moltis | Ollama integration, context length handling, tool-calling reliability without API-grade fine-tuning |
| **Enterprise messaging channels** | OpenClaw, NullClaw, CoPaw, ZeroClaw, IronClaw | WeCom, Feishu/Lark, DingTalk, Teams, Slack Socket Mode — Chinese market + Western enterprise parity |
| **MCP (Model Context Protocol) ecosystem** | ZeroClaw, LobsterAI, IronClaw, NanoClaw | Tool exposure, server lifecycle management, delegation across agent hierarchies |
| **Security & sandboxing** | ZeptoClaw, PicoClaw, IronClaw, NanoClaw | Approval workflows, filesystem restrictions, prompt injection defense, credential encryption |
| **Sub-agent / multi-agent orchestration** | OpenClaw, NanoBot, ZeroClaw, CoPaw | Execution tracing, hierarchical delegation, ACP protocol adoption |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Feature completeness, web-native dashboard | Power users, multi-channel operators | Gateway + Control UI, TypeScript extensions |
| **NanoBot** | Lightweight, rapid iteration, "soul.md" paradigm | Developers, self-hosters | Python, minimal core, plugin channels |
| **ZeroClaw** | Rust performance, MCP-first, dynamic node discovery | Systems builders, IoT/edge | Rust, on-demand tool loading, runtime capability advertisement |
| **PicoClaw** | Agent steering, event-driven loops, embedded focus | Researchers, interactive agent designers | Rust, interruptibility, hardware-adjacent |
| **NullClaw** | Windows-native reliability, enterprise channels | Solo developers, small teams | Go, SCM service integration, tunnel automation |
| **IronClaw** | NEAR AI integration, embedded/IoT (Pattern A), LLM-as-Judge | Web3 builders, edge hardware | Rust, blockchain-adjacent, safety layers |
| **LobsterAI** | OpenClaw integration layer, Electron UX, Chinese market | Non-technical Windows users | Electron + OpenClaw gateway, IM plugin ecosystem |
| **CoPaw** | LobeHub skill marketplace, multi-agent IDE | Agent developers, visual builders | TypeScript, skill import, web console |
| **ZeptoClaw** | Safety-first CLI, streaming by default, TTY trust model | Security-conscious CLI users | Rust, approval callbacks, session trust |
| **Moltis** | Distributed node execution, "vault" privacy marketing | Privacy-focused team collaboration | Rust, sealed vaults, node mesh |
| **TinyClaw** | Rapid UX iteration, AGI rebrand positioning | Individual developers, early adopters | TypeScript, office workspace metaphor |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity Risk)

| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day, major release instability | Burnout, regression debt |
| **CoPaw** | 94 items/day, growing issue backlog | Quality degradation under growth |
| **PicoClaw** | 144 items/day, security sprint | Security vs. feature tension |

### Tier 2: Sustained Velocity (Healthy)

| Project | Pattern | Indicator |
|:---|:---|:---|
| **NanoBot** | 180 items/day, 24-48h critical fix cycle | Responsive, sustainable |
| **NullClaw** | 65 items/day, zero open PRs | Well-groomed, enterprise-ready |
| **IronClaw** | 75 items/day, automated CI security review | Mature process |
| **ZeroClaw** | 87 items/day, post-migration recovery | Resilient to structural change |

### Tier 3: Stabilizing / Niche

| Project | Pattern | Trajectory |
|:---|:---|:---|
| **ZeptoClaw** | 14 items/day, security-focused | Deliberate, quality-over-quantity |
| **Moltis** | 22 items/day, backlog clearing | Maintenance mode between features |
| **TinyClaw** | 6 items/day, maintainer-driven | Needs community growth |
| **LobsterAI** | 21 items/day, OpenClaw-dependent | Integration risk if upstream unstable |

### Tier 4: Inactive

| Project | Status |
|:---|:---|
| **EasyClaw** | Zero activity — likely abandoned |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Action Implication |
|:---|:---|:---|
| **MCP as interoperability standard** | ZeroClaw, LobsterAI, IronClaw, NanoClaw all investing | Build MCP-native tools; expect protocol competition with ACP |
| **Local-first deployment demand** | Ollama issues across 6+ projects; PicoClaw #1161, LobsterAI #112/#405 | Optimize for 7-14B parameter models; tool-calling fine-tuning critical |
| **Chinese enterprise market prioritization** | WeCom/Feishu/DingTalk in 5+ projects; NullClaw v2026.3.13 rate limit fixes for Alibaba | Internationalize channel strategy; expect API divergence (DashScope tool_choice issues) |
| **Safety/approval UX as differentiator** | ZeptoClaw #353, PicoClaw security cluster, IronClaw LLM-as-Judge | Design for human-in-the-loop at architecture level, not bolt-on |
| **Memory system consolidation** | Competing implementations (FTS5, LanceDB, hybrid) in NanoClaw, CoPaw | Expect 12-18 month shakeout; prioritize migration paths |
| **Context compression as core competency** | CoPaw #1437 "hallucinates fake messages", OpenClaw memory leaks | Invest in evals for summarization quality; silent data corruption risk |
| **Release quality > feature velocity** | OpenClaw v2026.3.12 regression crisis, community feedback | Extended beta periods, canary channels, automated regression testing becoming table stakes |

### Strategic Positioning

- **For enterprise adoption**: NullClaw and NanoBot demonstrate sustainable quality; OpenClaw offers features at stability cost
- **For edge/embedded**: PicoClaw (steering) and IronClaw (Pattern A GPIO) lead; ZeroClaw (dynamic discovery) emerging
- **For developer experience**: ZeptoClaw (streaming, safety) and NanoBot (lightweight, responsive) optimize for daily use satisfaction
- **For ecosystem integration**: LobsterAI's OpenClaw dependency is cautionary; MCP-native approaches reduce coupling risk

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-14

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 154 PRs updated in 24 hours (117 merged/closed, 37 open) and 26 active issues. The project demonstrates strong maintainer responsiveness with rapid turnaround on critical bugs. Key themes today include **provider ecosystem expansion** (Azure OAuth, Ollama fixes, Mistral), **channel architecture modernization** (plugin system, XMPP, A2A protocol), and **memory/consolidation reliability improvements**. The community is actively stress-testing multi-model deployments, with particular friction around DashScope/Alibaba Cloud compatibility and local LLM integration. No new releases were published today, suggesting the team is accumulating changes for a significant version bump.

---

## 2. Releases

**No new releases** (0 published today).  
Last release activity: v0.1.4.post2 (referenced in [Issue #1139](https://github.com/HKUDS/nanobot/issues/1139)) remains the latest available version. PyPI publication lag noted in [Issue #1059](https://github.com/HKUDS/nanobot/issues/1059) (now closed).

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1984](https://github.com/HKUDS/nanobot/pull/1984) / [#1982](https://github.com/HKUDS/nanobot/pull/1982) | **Channel plugin architecture with decoupled configs** — Python entry_points-based plugin discovery, 11 built-in channels refactored | **Major architectural milestone** — enables third-party channel extensions without core code changes |
| [#1909](https://github.com/HKUDS/nanobot/pull/1909) | Force `tool_choice="required"` in memory consolidation | Fixes silent memory consolidation failures ([Issue #1931](https://github.com/HKUDS/nanobot/issues/1931)) |
| [#1983](https://github.com/HKUDS/nanobot/pull/1983) | Restore Ollama provider compatibility | Fixes local LLM deployment blocker ([Issue #1947](https://github.com/HKUDS/nanobot/issues/1947)) |
| [#1941](https://github.com/HKUDS/nanobot/pull/1941) | Restore QQ plain text replies for legacy clients | Regression fix for markdown payload breaking old clients ([Issue #1936](https://github.com/HKUDS/nanobot/issues/1936)) |
| [#1981](https://github.com/HKUDS/nanobot/pull/1981) | Bump wecom-aibot-sdk-python to ≥0.1.5 | Fixes duplicate recv loops, heartbeat timeouts |
| [#605](https://github.com/HKUDS/nanobot/pull/605) | Harden WhatsApp bridge security (mandatory auth) | **Breaking change** — requires `BRIDGE_TOKEN` configuration |
| [#157](https://github.com/HKUDS/nanobot/pull/157) | Add NVIDIA Integrate support + Telegram polling fixes | Addresses [Issue #1822](https://github.com/HKUDS/nanobot/issues/1822) NVIDIA model support gap |
| [#247](https://github.com/HKUDS/nanobot/pull/247) | Generic CalendarProvider abstraction | Foundation for Outlook/Apple Calendar support |
| [#1959](https://github.com/HKUDS/nanobot/pull/1959) / [#1942](https://github.com/HKUDS/nanobot/pull/1942) | Documentation typo fixes (schedule.gif) | CI pipeline validation |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1955](https://github.com/HKUDS/nanobot/issues/1955) — Sub-agent execution observability | 9 | **Core UX gap**: Users need visibility into nested agent execution loops (currently "black box"). Suggests demand for hierarchical tracing/telemetry |
| 2 | [#1931](https://github.com/HKUDS/nanobot/issues/1931) — Memory consolidation LLM skip | 8 | Closed via [#1909](https://github.com/HKUDS/nanobot/pull/1909). Reveals fragility in token-based memory management at scale (89K+ tokens) |
| 3 | [#1822](https://github.com/HKUDS/nanobot/issues/1822) — NVIDIA model support regression | 7 | Hardware vendor compatibility critical for enterprise adoption. Partially addressed by [#157](https://github.com/HKUDS/nanobot/pull/157) |
| 4 | [#1927](https://github.com/HKUDS/nanobot/issues/1927) — DashScope `tool_choice="required"` incompatibility | 6 | **China-market blocker**: Alibaba Cloud's DashScope API divergence from OpenAI spec causing memory archival failures |
| 5 | [#1139](https://github.com/HKUDS/nanobot/issues/1139) — Moonshot AI `reasoning_content` missing | 4 | Closed. Provider-specific response format handling remains fragile |

### Underlying Needs
- **Observability**: Deep demand for execution tracing across agent hierarchies
- **Multi-cloud resilience**: Users deploying across Western (OpenAI/Azure) and Chinese (DashScope/Moonshot) providers hitting API divergence edge cases
- **Enterprise readiness**: Security hardening (WhatsApp), authentication flexibility (Azure OAuth), and stable long-running sessions

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1979](https://github.com/HKUDS/nanobot/issues/1979) | Context window overflow in long sessions — `ContextWindowExceededError` kills LLM calls | **Open** — no PR yet |
| 🔴 **Critical** | [#1927](https://github.com/HKUDS/nanobot/issues/1927) | DashScope `tool_choice` incompatibility breaks memory archival | **Open** — needs provider-specific workaround |
| 🟡 **High** | [#1948](https://github.com/HKUDS/nanobot/issues/1948) | `/tmp` read-only in `exec` tool (npx/npm commands) — sandboxing issue | **Open** — root cause identified |
| 🟡 **High** | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | DashScope code model rejects non-JSON `function.arguments` | **Open** — provider-specific |
| 🟡 **High** | [#1829](https://github.com/HKUDS/nanobot/issues/1829) | Custom commands fail after Docker restart | **Open** — 3 comments, config persistence issue |
| 🟡 **High** | [#1988](https://github.com/HKUDS/nanobot/issues/1988) | WeCom channel completely non-functional ("No Channels Enabled") | **Open** — configuration detection bug |
| 🟢 **Medium** | [#1956](https://github.com/HKUDS/nanobot/issues/1956) | CLI progress indicator "nanobot is thinking..." not clearing | **Open** — UI polish |
| 🟢 **Medium** | [#1969](https://github.com/HKUDS/nanobot/issues/1969) | Rate limiting errors (ZaiException) | **Open** — needs retry/backoff logic |
| 🟢 **Medium** | [#1968](https://github.com/HKUDS/nanobot/issues/1968) / [#1946](https://github.com/HKUDS/nanobot/issues/1946) | Matrix channel test failures | **Open** — test infrastructure |

**Regressions Fixed Today**: QQ markdown breaking legacy clients, Ollama API key validation, memory consolidation silent failures.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Sub-agent execution tracing** | [#1955](https://github.com/HKUDS/nanobot/issues/1955) | High | 9 comments, core architecture gap, aligns with agent observability trends |
| **Dynamic provider/model switching** | [#1954](https://github.com/HKUDS/nanobot/issues/1954) | Medium | User workflow need, but requires session state management changes |
| **Skill enable/disable toggle** | [#1934](https://github.com/HKUDS/nanobot/pull/1934) | **Merged** | Already implemented |
| **`/status` runtime diagnostics** | [#1985](https://github.com/HKUDS/nanobot/pull/1985) | High | PR open, addresses production deployment pain point |
| **XMPP channel** | [#1945](https://github.com/HKUDS/nanobot/pull/1945) | Medium | PR open, federated messaging demand |
| **A2A protocol support** | [#1368](https://github.com/HKUDS/nanobot/pull/1368) | Medium | Google's agent interoperability standard, PR open |
| **SearXNG search backend** | [#927](https://github.com/HKUDS/nanobot/issues/927) | Medium | Privacy-focused alternative to Brave, 3 👍 |
| **CI/CD pipeline** | [#1915](https://github.com/HKUDS/nanobot/issues/1915) | High | Maintainer endorsed, contributor volunteered |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Profile |
|:---|:---:|:---|
| Provider API divergence (DashScope, Moonshot, Ollama) | 🔥🔥🔥 | China-based + self-hosting users |
| Memory management at scale (token limits, consolidation) | 🔥🔥🔥 | Power users with long conversations |
| Channel configuration fragility (WeCom, QQ, custom commands) | 🔥🔥 | Enterprise/team deployments |
| Sub-agent opacity | 🔥🔥 | Advanced workflow builders |

### Satisfaction Drivers
- **Lightweight architecture** praised vs. heavier frameworks ([Issue #1977](https://github.com/HKUDS/nanobot/issues/1977))
- **Rapid maintainer response** — most critical bugs closed within 24-48h
- **Soul.md/User.md control paradigm** seen as elegant differentiation

### Dissatisfaction Drivers
- **Documentation gaps** for provider-specific configurations (Alibaba Cloud API base URL confusion in [#1869](https://github.com/HKUDS/nanobot/issues/1869))
- **Docker deployment friction** — command persistence, restart behavior
- **Windows support** — path issues ([Issue #1937](https://github.com/HKUDS/nanobot/issues/1937), closed)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#1246](https://github.com/HKUDS/nanobot/pull/1246) — Model-controlled turn ending | ~16 days | Stale innovation | Draft PR with promising UX improvement; needs maintainer review |
| [#126](https://github.com/HKUDS/nanobot/pull/126) — Docker CI/CD to GHCR/DockerHub | ~37 days | Release bottleneck | Community-contributed, unmerged — blocking automated distribution |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) — Mistral provider + transcription | ~7 days | Feature gap | Open, needs review for provider diversity |
| [#1368](https://github.com/HKUDS/nanobot/pull/1368) — A2A protocol channel | ~13 days | Strategic positioning | Large PR, Google ecosystem alignment — worth prioritizing |
| [#1976](https://github.com/HKUDS/nanobot/issues/1976) — Global lock blocking messages | New | Architecture concern | Design question on async processing — maintainer input needed |

---

**Project Health Assessment**: 🟢 **Strong** — High velocity, responsive maintainers, active community. Risks: accumulating provider-specific technical debt, need for automated testing across diverse API implementations.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-14

## 1. Today's Overview

ZeroClaw shows **extremely high velocity** with 87 items updated in 24 hours (37 issues, 50 PRs) and 2 beta releases shipped. The project is in active stabilization mode following a major branch restructuring: the default branch switched from `main` to `master`, causing temporary feature regressions that the team is rapidly addressing. Windows platform support has become a critical focus, with multiple PRs targeting compilation failures, shell execution, and CI coverage. The community is actively stress-testing MCP (Model Context Protocol) integration and channel extensibility, indicating strong adoption among power users building complex agent workflows.

---

## 2. Releases

### v0.1.9-beta.140 (2026-03-13)
- **Documentation Internationalization**: Complete documentation hub translations for all 30 languages, including full Chinese (zh-CN) translation of 58 core documents
- **Migration**: No breaking changes; purely additive i18n coverage

### v0.1.9-beta.136 (2026-03-13)
- **Browser Compatibility**: Added `crypto.randomUUID` fallback for older browsers lacking native support
- **Ollama Provider**: Fixed `reasoning_enabled` handling for unsupported Ollama models
- **Migration**: No breaking changes

---

## 3. Project Progress

### Major Features Merged

| PR | Description | Impact |
|:---|:---|:---|
| [#3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450) | 30-language documentation hub | Global accessibility milestone |
| [#3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429) | Complete Chinese documentation translation | Largest single i18n contribution |
| [#3442](https://github.com/zeroclaw-labs/zeroclaw/pull/3442) | Windows shell tool_call execution | Unblocks Windows-native agent workflows |
| [#3446](https://github.com/zeroclaw-labs/zeroclaw/pull/3446) | On-demand MCP tool loading via `tool_search` | Major context window optimization |
| [#3448](https://github.com/zeroclaw-labs/zeroclaw/pull/3448) | Dynamic node discovery & capability advertisement | Runtime-pluggable tool surface (IoT/microservices) |
| [#3421](https://github.com/zeroclaw-labs/zeroclaw/pull/3421) | Persist/resume interactive agent sessions | External session managers now supported |
| [#3443](https://github.com/zeroclaw-labs/zeroclaw/pull/3443) | Preserve message drafts across view switches | UX polish for web dashboard |
| [#3445](https://github.com/zeroclaw-labs/zeroclaw/pull/3445) | Electric blue dashboard restyle with animations | Complete visual refresh |
| [#3447](https://github.com/zeroclaw-labs/zeroclaw/pull/3447) | Custom API path suffix for custom providers | Self-hosted LLM flexibility |
| [#3405](https://github.com/zeroclaw-labs/zeroclaw/pull/3405) | Cron resilience: skip unparseable jobs | Scheduler no longer fails catastrophically |

### Platform & Infrastructure
- [#3449](https://github.com/zeroclaw-labs/zeroclaw/pull/3449): Windows CI/CD build matrix expansion (x86_64-pc-windows-msvc)
- [#3390](https://github.com/zeroclaw-labs/zeroclaw/pull/3390): Fixed Windows test deadlocks in onboard wizard

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| # | Topic | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) | Matrix `channel-matrix` flag missing in official builds | 5 | 2 | **Enterprise deployment blocker** — users need Matrix for internal communications; flag availability gap between source and releases suggests build pipeline issue |
| [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) | MCP support in `zeroclaw agent` subcommand | 5 | 1 | Core architecture gap: MCP only works via `start_channels`, not direct agent invocation — limits headless/scripted usage |
| [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069) | MCP tools not exposed to delegate subagents | 3 | 0 | **Critical for complex workflows** — subagents can't call MCP tools despite seeing descriptions, causing silent failures in multi-agent hierarchies |
| [#3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131) | Branch policy confusion (master/main/dev/main-fix) | 1 | 4 | High confusion cost from branch restructuring; needs clear canonical guidance |

**Underlying Needs**: Users are pushing ZeroClaw into production multi-agent orchestration (MCP delegation, Matrix enterprise messaging) and hitting friction between "works in dev" vs. "works in release builds." The branch chaos exacerbates this.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **S0** | [#3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397) — Features lost after master switch | **CLOSED** | Multiple | "Data loss/security risk" — MCP, agent_ipc missing post-migration; resolved by rapid PR merges |
| **S0** | [#3379](https://github.com/zeroclaw-labs/zeroclaw/issues/3379) — MCP missing from config.toml | **CLOSED** | Same as above | Duplicate of #3397; same root cause |
| **S1** | [#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) — `AtomicU32` undeclared on 32-bit | **OPEN** | None yet | Compilation failure on 32-bit targets; regression from #3432 |
| **S1** | [#3425](https://github.com/zeroclaw-labs/zeroclaw/issues/3425) — Matrix channel compilation failure | **CLOSED** | [#3368](https://github.com/zeroclaw-labs/zeroclaw/pull/3368) | Missing `Relation` import; fixed |
| **S1** | [#3430](https://github.com/zeroclaw-labs/zeroclaw/issues/3430) — `AtomicU64` in mcp_client.rs (32-bit) | **CLOSED** | #3409 follow-up | Partial fix from #3409 missed this file |
| **S1** | [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) — Mistral 422 "Extra inputs not permitted" | **CLOSED** | Unknown | Provider-specific parameter handling |
| **S2** | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) — Matrix flag missing in builds | **OPEN** | None yet | Build pipeline configuration gap |
| **S3** | [#3417](https://github.com/zeroclaw-labs/zeroclaw/issues/3417) — Unwanted `~` folder created | **CLOSED** | Unknown | Path expansion bug in daemon |

**Stability Assessment**: The 32-bit architecture support is fragile with two `AtomicU64`→`AtomicU32` regressions in 24 hours. The master branch migration caused significant temporary instability (S0 issues). Matrix channel remains problematic at build and runtime levels.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.0 | Rationale |
|:---|:---|:---:|:---|
| **Bridge WebSocket channel** | [#3401](https://github.com/zeroclaw-labs/zeroclaw/pull/3401) | **HIGH** | Re-implementation of lost `dev` branch feature; actively developed |
| **LinkedIn tool integration** | [#3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400) | MEDIUM | Social media expansion; OAuth2 complexity may delay |
| **WeChat Enterprise (WeCom) channel** | [#3396](https://github.com/zeroclaw-labs/zeroclaw/issues/3396) | MEDIUM | Enterprise China market; significant implementation effort |
| **Avian provider** | [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) | MEDIUM | Long-running PR, needs rebase to master |
| **Cron run history API/dashboard** | [#3299](https://github.com/zeroclaw-labs/zeroclaw/issues/3299) | HIGH | Operational necessity; clear user demand |
| **Verbose mode** | [#3316](https://github.com/zeroclaw-labs/zeroclaw/issues/3316) | HIGH | Low effort, high UX value; "like OpenClaw" parity request |
| **Custom headers for providers** | [#3189](https://github.com/zeroclaw-labs/zeroclaw/issues/3189) | HIGH | Blocking Chinese LLM providers (Kimi, Aliyun) |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Branch chaos** | #3131, #3397, #3379 | 🔴 Critical |
| **Windows as second-class citizen** | #3327, #3442, #3390, #3451 | 🟡 High |
| **MCP integration gaps** | #3153, #3069, #3095 | 🟡 High |
| **Release build vs. source drift** | #2953, #3425 | 🟡 High |
| **Documentation lags features** | i18n push suggests prior gap | 🟢 Medium |

### Use Cases Emerging
- **Enterprise messaging**: Matrix, Slack, WeCom integrations indicate corporate deployment
- **IoT/microservice orchestration**: Dynamic node discovery (#3448) suggests edge computing use cases
- **Multi-agent research**: Subagent delegation with MCP tools (#3069) indicates academic/research adoption

### Satisfaction Signals
- Rapid maintainer response (most issues closed same-day)
- Active community contributions (30-language i18n, Chinese docs)
- Feature parity requests ("like OpenClaw") suggest competitive positioning success

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---:|:---:|:---|
| [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) Avian provider | ~2 weeks | Stale | Rebase to `master`, conflict resolution |
| [#3180](https://github.com/zeroclaw-labs/zeroclaw/pull/3180) Docker buildx bump | ~3 days | Low | Routine dependency update; merge queue |
| [#3451](https://github.com/zeroclaw-labs/zeroclaw/pull/3451) Windows wizard deadlock | 1 day | **Active** | Review for test infrastructure fix |

**Critical Attention Needed**: The Avian provider PR (#2017) targets `dev` branch which no longer exists. Author needs guidance on migration path.

---

*Digest generated from 87 GitHub events on 2026-03-14. ZeroClaw is a high-velocity project in stabilization phase post-branch-restructuring, with strong community momentum around enterprise features and Windows platform parity.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-14

## 1. Today's Overview

PicoClaw shows **exceptionally high development velocity** with 109 PRs and 35 issues updated in the last 24 hours, indicating an active sprint period likely tied to the ongoing **Agent Refactor** initiative. The project released a new nightly build (v0.2.2-nightly.20260313.19835b2f) as development accelerates toward v0.2.2. Security hardening has emerged as a parallel priority with 5 new security-focused issues filed by a single contributor addressing default configurations, file permissions, and sandbox escapes. The community is heavily engaged in architectural discussions around agent identity and event-driven loops, while practical integration issues with local models (Ollama) and enterprise providers (Azure OpenAI) continue to surface.

---

## 2. Releases

**v0.2.2-nightly.20260313.19835b2f** — [Compare to main](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)

| Attribute | Details |
|-----------|---------|
| **Type** | Automated nightly build |
| **Stability** | ⚠️ Unstable — use with caution |
| **Notable inclusion** | Agent steering infrastructure, credential encryption (part 1), Feishu file path exposure |

**Migration notes:** Nightly builds are not recommended for production. Users on v0.2.1 stable should wait for the official v0.2.2 release.

---

## 3. Project Progress

### Merged/Closed PRs (49 total — selected highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#90](https://github.com/sipeed/picoclaw/pull/90) | Vector search for memory + lifecycle hooks | **Major feature** — semantic memory retrieval, opt-in via `memory_search` tool |
| [#1494](https://github.com/sipeed/picoclaw/pull/1494) | Cron service performance optimization | Closed duplicate; optimization landed via [#1518](https://github.com/sipeed/picoclaw/pull/1518) |
| [#1242](https://github.com/sipeed/picoclaw/issues/1242) | QQ channel agent binding fix | Channel-specific routing correction |

### Active Development (Open PRs advancing)

| PR | Feature | Status |
|----|---------|--------|
| [#1517](https://github.com/sipeed/picoclaw/pull/1517) | **Agent Steering** — mid-execution user intervention | Under review; core refactor component |
| [#1516](https://github.com/sipeed/picoclaw/pull/1516) | Feishu non-image file path exposure | Addresses [#1506](https://github.com/sipeed/picoclaw/issues/1506) |
| [#1521](https://github.com/sipeed/picoclaw/pull/1521) / [#1522](https://github.com/sipeed/picoclaw/pull/1522) | AES-GCM credential encryption + passphrase UI | Two-part security enhancement |
| [#1514](https://github.com/sipeed/picoclaw/pull/1514) | Kimi For Coding model support | Provider expansion with Claude Code header spoofing |

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| Rank | Issue | Comments | Core Tension |
|------|-------|----------|--------------|
| 1 | [#1218](https://github.com/sipeed/picoclaw/issues/1218) — Agent identity: `SOUL.md` vs `AGENT.md` | 24 | **Philosophy vs. engineering**: How to define agent personality without over-structuring |
| 2 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) — Ollama local model configuration | 17 | **On-premise friction**: Local AI adoption blocked by unclear docs/config paths |
| 3 | [#1316](https://github.com/sipeed/picoclaw/issues/1316) — Event-driven agent loop with hooks | 9 | **Observability gap**: Production deployments need interruptibility and steering |
| 4 | [#1506](https://github.com/sipeed/picoclaw/issues/1506) — Feishu file path exposure | 9 | **Multimodal completeness**: Documents trapped in media store, invisible to agents |

### Underlying Needs Analysis

- **Agent Refactor (#1216 meta-issue)** is the dominant narrative — users want **composability** (steering, hooks, interrupts) without sacrificing **simplicity** for basic use cases
- **Local-first deployment** (#1161 Ollama, #1424 Azure OpenAI) signals enterprise/self-hosted demand outpacing cloud-native defaults
- **Security consciousness rising**: Multiple security issues filed same day suggests either external audit or new contributor with security focus

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#1150](https://github.com/sipeed/picoclaw/issues/1150) | Pool factory panic → permanent deadlock for target | **No PR** — orphaned `inflight` entry, needs immediate attention |
| 🟠 **High** | [#1529](https://github.com/sipeed/picoclaw/issues/1529) | Public web mode exposes console without IP allowlist | **No PR** — config validation gap |
| 🟠 **High** | [#1530](https://github.com/sipeed/picoclaw/issues/1530) | Setup enables query-token auth + wildcard origins by default | **No PR** — secure-by-default violation |
| 🟠 **High** | [#1526](https://github.com/sipeed/picoclaw/issues/1526) | `exec` symlink escape despite `restrict_to_workspace` | **No PR** — sandbox bypass |
| 🟡 **Medium** | [#1502](https://github.com/sipeed/picoclaw/issues/1502) | Mistral integration fails with "Extra inputs..." | **No PR** — provider compatibility |
| 🟡 **Medium** | [#1493](https://github.com/sipeed/picoclaw/issues/1493) | New models require gateway restart to activate | **No PR** — hot-reload failure |
| 🟡 **Medium** | [#1437](https://github.com/sipeed/picoclaw/issues/1437) | Feishu message loss on mobile hotspot networking | **No PR** — network resilience |

**Regression risk:** The security-focused issue cluster (#1525-1530) suggests v0.2.2 may need a security-hardening release candidate before stable.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in v0.2.2 | Rationale |
|---------|-------|----------------------|-----------|
| **Agent Steering** | [#1316](https://github.com/sipeed/picoclaw/issues/1316) / [#1517](https://github.com/sipeed/picoclaw/pull/1517) | ⭐⭐⭐⭐⭐ HIGH | PR open, core refactor priority |
| **Azure OpenAI provider** | [#1424](https://github.com/sipeed/picoclaw/issues/1424) | ⭐⭐⭐⭐☆ MODERATE-HIGH | Enterprise demand, straightforward implementation |
| **Pluggable speech I/O** | [#1503](https://github.com/sipeed/picoclaw/issues/1503) | ⭐⭐⭐☆☆ MODERATE | Architecture aligns with provider refactor |
| **Capability discovery endpoint** | [#1474](https://github.com/sipeed/picoclaw/issues/1474) | ⭐⭐⭐☆☆ MODERATE | Orchestration need, but post-refactor likely |
| **OpenIM channel plugin** | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | ⭐⭐☆☆☆ LOW | Community plugin, not core priority |
| **Model-side search + fastembed** | [#1498](https://github.com/sipeed/picoclaw/issues/1498) | ⭐⭐☆☆☆ LOW | Needs architectural evaluation |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Category | Quote/Paraphrase | Source |
|----------|------------------|--------|
| **Configuration complexity** | "How to correctly configure PicoClaw with local Ollama models?" | [#1161](https://github.com/sipeed/picoclaw/issues/1161) |
| **Documentation gaps** | "Incomplete configuration parameter documentation in README and guides" | [#1489](https://github.com/sipeed/picoclaw/issues/1489) |
| **Operational opacity** | "How can I view my scheduled tasks?" | [#1501](https://github.com/sipeed/picoclaw/issues/1501) |
| **Security surprises** | "pico setup should not enable query-token auth and wildcard origins by default" | [#1530](https://github.com/sipeed/picoclaw/issues/1530) |
| **Provider fragmentation** | "新增一个模型在会话中不生效，需重启gateway后才生效" | [#1493](https://github.com/sipeed/picoclaw/issues/1493) |

### Satisfaction Indicators

- ✅ Strong engagement with architectural proposals (24 comments on agent identity)
- ✅ Active community translations (Spanish README in [#1448](https://github.com/sipeed/picoclaw/pull/1448))
- ⚠️ Frustration with "black box" agent behavior driving refactor demand

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) — Pool deadlock | 8 days | **Production stability** | Maintainer assignment for panic recovery |
| [#528](https://github.com/sipeed/picoclaw/issues/528) — Cron scheduling bugs | 22 days | Reliability | Reproduction confirmation, possibly related to [#757](https://github.com/sipeed/picoclaw/pull/757) |
| [#751](https://github.com/sipeed/picoclaw/pull/751) — WebSocket gateway | 17 days | Feature completeness | Review stalled? Needs rebase or decision |
| [#1050](https://github.com/sipeed/picoclaw/pull/1050) — MiniMax adapter | 10 days | Provider coverage | Merge decision pending |

**Maintainer attention recommended:** The security issue cluster (#1525-1530) and critical deadlock (#1150) should triage ahead of feature work.

---

*Digest generated from 109 PRs and 35 issues updated 2026-03-13. Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-14

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 37 PRs and 18 issues updated in the last 24 hours, indicating active community engagement despite zero new releases. The project is experiencing a **channel expansion phase** with multiple Signal and WhatsApp integrations in flight, alongside critical stability work on credential management and message handling. Security hardening is a notable theme, with prompt injection sanitization and token validation receiving urgent attention. The maintainer review queue appears strained with 21 open PRs and several "Blocked" status items. Overall health is **moderate-to-strong** on feature development but **concerning on merge velocity** for external contributions.

---

## 2. Releases

**No new releases** — version remains unchanged.

---

## 3. Project Progress

### Merged/Closed Today (4 PRs)

| PR | Description | Significance |
|:---|:---|:---|
| [#1040](https://github.com/qwibitai/nanoclaw/pull/1040) | Drain all per-group messages to prevent LIMIT 200 drop | **Critical reliability fix** — prevents message loss in high-volume groups |
| [#1038](https://github.com/qwibitai/nanoclaw/pull/1038) | Chrome extension for real browser control via WebSocket bridge | **Major capability** — enables non-headless browser automation for agents |
| [#1037](https://github.com/qwibitai/nanoclaw/pull/1037) | Typed Tanren API client module | Infrastructure for worker-manager API integration |
| [#1036](https://github.com/qwibitai/nanoclaw/pull/1036) | Security: sanitize WebFetch/WebSearch output via PostToolUse hook | **Security hardening** — prompt injection defense (superseded #1032, #1035) |
| [#1034](https://github.com/qwibitai/nanoclaw/pull/1034) | Trivy container/dependency scanning in CI | DevOps security posture improvement |

### Key Advances

- **Message reliability**: [#1040](https://github.com/qwibitai/nanoclaw/pull/1040) resolves a long-standing data loss risk where >200 queued messages were silently dropped
- **Browser automation**: Real Chrome control (not headless) opens new agent capabilities for web-based tasks
- **Security baseline**: Trivy scanning + output sanitization establishes defense-in-depth against supply chain and prompt injection attacks

---

## 4. Community Hot Topics

### Highest Activity Items

| Item | Comments/Reactions | Analysis |
|:---|:---|:---|
| [#908](https://github.com/qwibitai/nanoclaw/issues/908) FTS5 conversation indexing | 2 comments, High priority | **Core memory infrastructure** — enables agents to recall past conversations by keyword; paired with [#909](https://github.com/qwibitai/nanoclaw/issues/909) for MCP tool exposure |
| [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) WhatsApp crashes on QR/logout | 1 comment, High priority | **Production blocker** for WhatsApp channel — `process.exit()` calls make service unrecoverable; fix PR [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) already submitted |
| [#1043](https://github.com/qwibitai/nanoclaw/pull/1043) memory-lancedb-pro upgrade | undefined comments | **Competing memory architecture** — hybrid BM25+vector vs. [#979](https://github.com/qwibitai/nanoclaw/pull/979)'s LanceDB skill; community evaluating approaches |

### Underlying Needs

- **Persistent, searchable memory** is the dominant feature gap — three parallel implementations in flight (FTS5, LanceDB skill, memory-lancedb-pro)
- **WhatsApp reliability** blocking production deployments; community self-organizing fix before maintainer response
- **Credential management UX** — token validation only failing at first message is friction point

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| **High** | [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) WhatsApp `process.exit()` crashes on QR scan (non-macOS) and logout | Open | ✅ [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) |
| **High** | [#1046](https://github.com/qwibitai/nanoclaw/issues/1046) Scheduled tasks lack MCP credential mounts | Open | ✅ [#1049](https://github.com/qwibitai/nanoclaw/pull/1049) |
| **High** | [#1020](https://github.com/qwibitai/nanoclaw/issues/1020) Duplicate messages sent when SDK returns multiple results | Open | ❌ No PR yet |
| **High** | [#960](https://github.com/qwibitai/nanoclaw/issues/960) MCP env vars not passed post-credential-proxy migration | **Closed** | ✅ Fixed |
| **Medium** | [#1045](https://github.com/qwibitai/nanoclaw/issues/1045) No token validation during setup | Open | ✅ [#1044](https://github.com/qwibitai/nanoclaw/pull/1044), [#1048](https://github.com/qwibitai/nanoclaw/pull/1048) (duplicate PRs) |
| **Medium** | [#829](https://github.com/qwibitai/nanoclaw/issues/829) SOUL.md lacks rule against fabricating tool execution claims | Open | ❌ No PR |
| **Medium** | [#835](https://github.com/qwibitai/nanoclaw/pull/835) Duplicate Telegram messages in multi-container scenarios | Blocked | 🔄 Needs review |

**Stability Assessment**: WhatsApp channel is **not production-ready** due to crash-on-logout behavior. Scheduled task reliability compromised by missing credentials. Message duplication bugs affect user experience across channels.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Release |
|:---|:---|:---|
| **FTS5 conversation search** | [#908](https://github.com/qwibitai/nanoclaw/issues/908) + [#909](https://github.com/qwibitai/nanoclaw/issues/909) | **High** — infrastructure complete, needs IPC wiring |
| **Hybrid memory retrieval** (BM25+vector) | [#1043](https://github.com/qwibitai/nanoclaw/pull/1043) | **Medium** — competing with [#979](https://github.com/qwibitai/nanoclaw/pull/979), maintainer decision needed |
| **Signal channel** | [#1023](https://github.com/qwibitai/nanoclaw/pull/1023), [#1016](https://github.com/qwibitai/nanoclaw/pull/1016) | **Medium-High** — two competing implementations, privacy-focused user demand |
| **Nostr DM channel + Lightning wallet** | [#1041](https://github.com/qwibitai/nanoclaw/pull/1041), [#1042](https://github.com/qwibitai/nanoclaw/pull/1042) | **Low-Medium** — blocked status, niche but complete implementation |
| **Prompt caching** | [#1033](https://github.com/qwibitai/nanoclaw/issues/1033) | **Low** — closed as question, cost optimization not prioritized |
| **BoxLite sandbox backend** | [#520](https://github.com/qwibitai/nanoclaw/issues/520) | **Low** — experimental, closed without merge |

**Prediction**: Next release likely includes FTS5 search + one memory system (LanceDB or hybrid) + WhatsApp stability fixes. Signal channel possible if maintainer bandwidth allows.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Quote/Context | Severity |
|:---|:---|:---|
| **WhatsApp reliability** | "service unrecoverable on session expiry" — hostile to headless/Linux | Production-blocking |
| **Token validation UX** | "invalid tokens only surface on first message" — late failure, poor setup experience | Onboarding friction |
| **Claude subscription integration** | OAuth token expires "every few hours" — can't use paid subscription vs. API key | Cost/access barrier |
| **LLM provider flexibility** | DeepInfra/GLM-5 fails with model access error — hardcoded Anthropic assumptions | Vendor lock-in concern |
| **Documentation accuracy** | "CLAUDE.md instructs write to read-only paths" — agent confusion, failed operations | Operational reliability |

### Satisfaction Signals

- Active skill development (Signal, WhatsApp, Chrome extension) indicates engaged power users
- Security-conscious contributions (Trivy, sanitization hooks) suggest production deployments
- Memory system competition shows healthy architectural debate

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Item | Age | Issue | Action Needed |
|:---|:---|:---|:---|
| [#835](https://github.com/qwibitai/nanoclaw/pull/835) | 6 days | Telegram duplicate messages fix — **Blocked** | Maintainer review; race condition fix ready |
| [#753](https://github.com/qwibitai/nanoclaw/issues/753) | 9 days | Assistant name not updated in `groups/main/CLAUDE.md` — `good first issue` | Easy fix, unassigned |
| [#698](https://github.com/qwibitai/nanoclaw/issues/698) | 10 days | Agent cannot determine day of week — `good first issue` | Prompt engineering fix, unassigned |
| [#527](https://github.com/qwibitai/nanoclaw/issues/527) | 16 days | Documentation: write access to read-only paths — `good first issue` | Docs fix, has 👍 reaction |
| [#447](https://github.com/qwibitai/nanoclaw/issues/447) | 18 days | WhatsApp phone number prompt misleading — `good first issue` | UX fix, unassigned |
| [#411](https://github.com/qwibitai/nanoclaw/issues/411) | 19 days | Document indirect prompt injection risks — `good first issue` | Security docs, unassigned |

### Maintainer Attention Required

1. **PR triage**: 21 open PRs with 4+ in "Blocked" state — risk of contributor burnout
2. **Duplicate PRs**: [#1044](https://github.com/qwibitai/nanoclaw/pull/1044) and [#1048](https://github.com/qwibitai/nanoclaw/pull/1048) both address #1045 — coordination needed
3. **Memory architecture decision**: Three competing implementations need consolidation strategy

---

*Digest generated from GitHub activity 2026-03-13 to 2026-03-14*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-14

## 1. Today's Overview

NullClaw shows **exceptionally high development velocity** with 35 PRs merged/closed in 24 hours and zero open PRs, indicating a well-maintained, actively groomed codebase. The project released two versions (v2026.3.12–v2026.3.13) addressing critical WebSocket/TLS regressions and expanding platform support. Community activity is robust with 30 issues updated, split evenly between open and closed. The focus areas are **enterprise channel integrations** (Teams, Slack, Lark, DingTalk), **Windows usability improvements**, and **session management reliability**. Notably, the maintainer team is responsive—multiple user-reported bugs from earlier this week were resolved within 24–48 hours.

---

## 2. Releases

### [v2026.3.13](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.13)
| Change | PR | Author |
|--------|-----|--------|
| fix(agent): avoid immediate retries after rate limits | [#474](https://github.com/nullclaw/nullclaw/pull/474) | @manelsen |
| v2026.3.12 bump | [#476](https://github.com/nullclaw/nullclaw/pull/476) | @DonPrus |
| docs: Windows binary usage instructions (中文) | [#479](https://github.com/nullclaw/nullclaw/pull/479) | @neoliuhua |

**Migration notes:** Rate limit handling now includes backoff logic; users experiencing Alibaba/Qwen rate limits (see [#341](https://github.com/nullclaw/nullclaw/issues/341)) should upgrade immediately.

### [v2026.3.12](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.12)
| Change | PR | Author |
|--------|-----|--------|
| v2026.3.11 bump | [#443](https://github.com/nullclaw/nullclaw/pull/443) | @DonPrus |
| fix: harden Telegram forum topics and configurable command menus | [#436](https://github.com/nullclaw/nullclaw/pull/436) | @vedmalex |
| fix(lark): use HEAVY_RUNTIME_STACK_SIZE for websocket thread | — | — |

**Breaking change risk:** The Telegram forum topic fix (#436) changes how topic-specific agent bindings are resolved; users with custom Telegram routing should verify behavior.

---

## 3. Project Progress

### Major Features Advanced

| Feature | PR | Description |
|---------|-----|-------------|
| **Microsoft Teams channel** | [#438](https://github.com/nullclaw/nullclaw/pull/438) | Full Bot Framework v4 REST API implementation with webhook listener |
| **Tunnel integration** | [#502](https://github.com/nullclaw/nullclaw/pull/502) | Cloudflare/ngrok/tailscale/custom tunnels now auto-start with gateway |
| **models.dev discovery** | [#480](https://github.com/nullclaw/nullclaw/pull/480) | Auto-detect latest models via models.dev API (OpenCode-style) |
| **Slack interactive callbacks** | [#505](https://github.com/nullclaw/nullclaw/pull/505) | Persistent button interactions across HTTP requests |

### Critical Fixes

| Issue | PR | Impact |
|-------|-----|--------|
| TLS WebSocket premature close | [#487](https://github.com/nullclaw/nullclaw/pull/487) | Fixed regression breaking Discord, Lark, DingTalk, QQ wss:// channels |
| Windows service timeout (1053) | [#467](https://github.com/nullclaw/nullclaw/pull/467) | SCM-aware service entrypoint; services now start reliably |
| Claude CLI session scoping | [#478](https://github.com/nullclaw/nullclaw/pull/478), [#481](https://github.com/nullclaw/nullclaw/pull/481) | Resume state now bound to NullClaw sessions, not global |
| Named-agent session dangling pointer | [#500](https://github.com/nullclaw/nullclaw/pull/500) | Fixed `/bind <agent>` hangs and missing responses |

### Developer Experience

- **Auto-detect file paths in system_prompt**: [#459](https://github.com/nullclaw/nullclaw/pull/459) — external prompt files now load automatically
- **Skill installation resilience**: [#494](https://github.com/nullclaw/nullclaw/pull/494) — continues on individual skill failures
- **Documentation alignment**: [#483](https://github.com/nullclaw/nullclaw/pull/483) — AGENTS.md now matches actual codebase conventions

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | Topic | Underlying Need |
|----------|----------|-------|---------------|
| [#17](https://github.com/nullclaw/nullclaw/issues/17) — Termux installation guide | 7 comments | Mobile/ARM deployment | **Accessibility**: Users with limited resources want smartphone-hosted agents |
| [#222](https://github.com/nullclaw/nullclaw/issues/222) — MiniMax-M2.5 initialization failure | 6 comments | Provider compatibility | **LLM ecosystem breadth**: Niche Chinese models need first-class support |
| [#341](https://github.com/nullclaw/nullclaw/issues/341) — Alibaba coding plan rate limits | 5 comments | Rate limiting | **Enterprise reliability**: Production users hitting provider quotas need graceful handling |
| [#477](https://github.com/nullclaw/nullclaw/issues/477) — 飞书WS断开 (Lark WS disconnect) | 3 comments | Enterprise channel stability | **Mission-critical uptime**: Lark (Chinese Slack) users need resilient WebSocket |
| [#505](https://github.com/nullclaw/nullclaw/pull/505) — Slack interactive callbacks | merged | Stateful HTTP interactions | **Rich UX**: Button workflows must survive serverless/stateless deployments |

### Analysis

The community is split between **platform expansion** (mobile, Chinese enterprise tools) and **production hardening** (rate limits, session reliability). The rapid closure of #222, #341 with corresponding fixes indicates strong maintainer prioritization of user blockers.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **Critical** | TLS WebSocket premature close | **FIXED** | [#487](https://github.com/nullclaw/nullclaw/pull/487) | Broke all wss:// channels in v2026.3.12; regression from ws:// refactor |
| 🔴 **Critical** | Windows service timeout 1053 | **FIXED** | [#467](https://github.com/nullclaw/nullclaw/pull/467) | SCM handshake missing; service unstartable |
| 🟡 **High** | Named-agent session hangs | **FIXED** | [#500](https://github.com/nullclaw/nullclaw/pull/500) | Post-#450 regression; `/bind` and `/new` broken |
| 🟡 **High** | Slack HTTP callbacks lost | **FIXED** | [#505](https://github.com/nullclaw/nullclaw/pull/505) | `pending_interactions` in instance memory, not shared state |
| 🟡 **High** | Lark WebSocket disconnect | **OPEN** | — | [#477](https://github.com/nullclaw/nullclaw/issues/477) — no response yet |
| 🟡 **High** | `gateway --help` starts runtime | **OPEN** | — | [#504](https://github.com/nullclaw/nullclaw/issues/504) — CLI parsing bug |
| 🟢 **Medium** | Telegram voice/file attachments ignored | **OPEN** | — | [#503](https://github.com/nullclaw/nullclaw/issues/503) — missing media handler |
| 🟢 **Medium** | DingTalk send-only mode | **OPEN** | — | [#376](https://github.com/nullclaw/nullclaw/issues/376) — bidirectional support unclear |

**Stability assessment:** Two critical regressions introduced in v2026.3.12 were patched within 24 hours—indicates mature CI/CD but risky rapid releases. No unpatched critical bugs remain.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Qwen OAuth native support** | [#492](https://github.com/nullclaw/nullclaw/issues/492) | **High** | Pattern exists (Gemini `oauth_creds.json`); user contributed PR likely |
| **MCP documentation/examples** | [#497](https://github.com/nullclaw/nullclaw/issues/497) | **High** | Closed as docs-needed; team actively writing guides |
| **Subagents binding/routing docs** | [#496](https://github.com/nullclaw/nullclaw/issues/496), [#508](https://github.com/nullclaw/nullclaw/issues/508) | **High** | Duplicate filed = demand signal; PR #501 started ecosystem docs |
| **Identity in AIEOS v1.1 JSON** | [#507](https://github.com/nullclaw/nullclaw/issues/507) | **Medium** | Documentation gap; may require schema work |
| **Local web channel + tunnels** | [#495](https://github.com/nullclaw/nullclaw/issues/495) | **Low (already shipped)** | Tunnel module merged in #502; user may not have seen release |
| **Self-hosting privacy services** | [#485](https://github.com/nullclaw/nullclaw/issues/485) | **Low** | Out of scope (Invidious, .onion); likely wontfix |
| **models.dev auto-discovery** | [#196](https://github.com/nullclaw/nullclaw/issues/196) | **Shipped** | Implemented in #480 |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Sentiment |
|-------|-----------|-----------|
| Windows installation friction | Repeated (3 PRs: #482, #488, #489) | 😤 → 😊 (resolved) |
| Chinese enterprise tools (Lark/DingTalk) instability | 4+ issues | 😤 (ongoing) |
| Documentation gaps for advanced features | 3 issues (#496, #497, #507) | 😐 (acknowledged) |
| Rate limiting without backoff | 2 issues | 😤 → 😊 (fixed) |

### Positive Signals
- **"Subagents is a really great feature!"** — [#496](https://github.com/nullclaw/nullclaw/issues/496)
- **"nullclaw elegantly parses `~/.gemini/oauth_creds.json`"** — [#492](https://github.com/nullclaw/nullclaw/issues/492) (pattern appreciation)
- Rapid maintainer response praised in closed issues

### Use Case Patterns
1. **Solo developers**: Windows binary + CLI agent for personal automation
2. **Small teams**: Telegram/DingTalk/Lark gateways for group chatops
3. **Enterprise**: Microsoft Teams integration, rate-limited Alibaba Cloud models

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#376](https://github.com/nullclaw/nullclaw/issues/376) DingTalk bidirectional | 5 days | **High** | Clarify if receive-mode is implemented or documentation gap |
| [#413](https://github.com/nullclaw/nullclaw/issues/413) file_read tool_call stopped | 4 days | **Medium** | Weather skill example broken; may indicate broader tool-handling regression |
| [#473](https://github.com/nullclaw/nullclaw/issues/473) README benchmark outdated | 1 day | **Low** | Marketing/comms issue; binary size claims no longer accurate |
| [#485](https://github.com/nullclaw/nullclaw/issues/485) Self-hosting services | 1 day | **Low** | Scope clarification needed |

**Maintainer attention recommended:** DingTalk bidirectional support (#376) is the highest-risk backlog item—multiple users confused about "send-only" limitation, unclear if feature incomplete or undocumented.

---

*Generated from NullClaw GitHub activity 2026-03-13 to 2026-03-14. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-14

## 1. Today's Overview

IronClaw shows **high development velocity** with 50 PRs and 25 issues updated in the last 24 hours, though no new release was cut. The project is in active feature expansion mode with significant CLI enhancements, multi-channel improvements, and architectural refactors landing simultaneously. Security and stability remain priorities with multiple HIGH-severity issues flagged by automated CI review. The contributor base is diversifying with both new and experienced contributors landing substantial changes. Overall health appears strong but release cadence may need attention given the volume of merged changes without versioned releases.

---

## 2. Releases

**No new releases** — Version 0.18.0 remains current despite substantial merged changes.

---

## 3. Project Progress

### Closed Issues (7 total — key items)

| Issue | Description | Significance |
|-------|-------------|--------------|
| [#1126](https://github.com/nearai/ironclaw/issues/1126) | Fixed: time/routine tools fail on empty string optional params | Core tool reliability |
| [#1123](https://github.com/nearai/ironclaw/issues/1123) | Image upload support — **closed as duplicate** | User demand signal (see #1122) |
| [#134](https://github.com/nearai/ironclaw/issues/134) | Edge Hardware Support (Pattern A): MCP GPIO Daemon | Major embedded/IoT capability |
| [#764](https://github.com/nearai/ironclaw/issues/764) | Infrastructure capacity alerts | Ops reliability |
| [#825](https://github.com/nearai/ironclaw/issues/825) | HIGH: ReDoS risk in event trigger regex — **fixed** | Security hardening |
| [#639](https://github.com/nearai/ironclaw/issues/639) | Custom headers for MCP auth | Auth flexibility |
| [#1027](https://github.com/nearai/ironclaw/issues/1027) | BYOK model configuration — **completed** | Enterprise/self-hosting feature |

### Key Merged/Advanced PRs

- **Multi-tenant auth** ([#1118](https://github.com/nearai/ironclaw/pull/1118)): Per-user workspace isolation — addresses same vulnerability class as #760
- **LLM-as-Judge safety layer** ([#614](https://github.com/nearai/ironclaw/pull/614)): Semantic tool call evaluation for safety
- **OpenAI Codex provider** ([#744](https://github.com/nearai/ironclaw/pull/744)): ChatGPT Pro/Plus subscription support without API key
- **CLI expansion**: `models` ([#1043](https://github.com/nearai/ironclaw/pull/1043)), `hooks list` ([#1023](https://github.com/nearai/ironclaw/pull/1023)), `logs` ([#1105](https://github.com/nearai/ironclaw/pull/1105)), `gateway` lifecycle ([#1050](https://github.com/nearai/ironclaw/pull/1050))
- **Feishu/Lark channel** ([#1110](https://github.com/nearai/ironclaw/pull/1110)): Enterprise messaging platform support
- **Owner scope refactor** ([#1151](https://github.com/nearai/ironclaw/pull/1151)): Fixes cross-channel data inconsistency (#994)

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Analysis |
|------|------|-----------|----------|
| 1 | [#728](https://github.com/nearai/ironclaw/issues/728) kimi-k2.5 compatibility | 4 comments, 3 👍 | **Model ecosystem expansion** — Temperature constraints and reasoning_content handling needed for Moonshot AI integration. Signals demand for broader model provider support beyond OpenAI/Anthropic. |
| 2 | [#1126](https://github.com/nearai/ironclaw/issues/1126) time/routine empty param bug | 2 comments | **Tool robustness** — Models sending unexpected empty strings breaking typed parameters. Fixed quickly, shows responsive maintenance. |
| 3 | [#846](https://github.com/nearai/ironclaw/issues/846) onboard DB save failure | 1 comment | **Onboarding friction** — Critical first-run experience issue; `ironclaw` works after failure suggests race condition or migration ordering bug. |

**Underlying needs**: Broader LLM provider compatibility, resilient tool parameter handling, and smoother onboarding experiences.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **HIGH** | [#1103](https://github.com/nearai/ironclaw/issues/1103) SSRF via embedding base URL | Open | None identified |
| **HIGH** | [#1150](https://github.com/nearai/ironclaw/issues/1150) Version mismatch in registry manifests | Open | None identified |
| **HIGH** | [#1142](https://github.com/nearai/ironclaw/issues/1142) O(n²) SSE parsing allocations | **Fix in progress** | [#1153](https://github.com/nearai/ironclaw/pull/1153) |
| **HIGH** | [#1141](https://github.com/nearai/ironclaw/issues/1141) AuthError type erasure in static cache | **Fix in progress** | [#1152](https://github.com/nearai/ironclaw/pull/1152) |
| **P1** | [#991](https://github.com/nearai/ironclaw/issues/991) Telegram token validation 404 | Open | None |
| **P1** | [#1002](https://github.com/nearai/ironclaw/issues/1002) Google Sheets silent write failure | Open | None |
| **P1** | [#1051](https://github.com/nearai/ironclaw/issues/1051) Event-triggered routines never fire | Open | None |
| **P2** | [#1139](https://github.com/nearai/ironclaw/issues/1139) Safari IME Enter key triggers send | Open | None |
| **P2** | [#1136](https://github.com/nearai/ironclaw/issues/1136) Anthropic OAuth token expiry | Open | None |

**Assessment**: Automated CI review is catching architectural issues early. Two HIGH-severity items have active fixes; SSRF and manifest version issues need immediate attention.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release |
|---------|----------|---------------------------|
| Image file upload/analysis | [#1122](https://github.com/nearai/ironclaw/issues/1122) | **High** — Duplicate closed, strong user demand |
| Human-readable cron schedules | [#1131](https://github.com/nearai/ironclaw/issues/1131), [#1154](https://github.com/nearai/ironclaw/pull/1154) | **Very High** — PR already open |
| Slack Socket Mode | [#1155](https://github.com/nearai/ironclaw/issues/1155) | Medium — Enterprise demand, architectural work needed |
| Configuration hot-reload | [#1119](https://github.com/nearai/ironclaw/issues/1119), [#1124](https://github.com/nearai/ironclaw/pull/1124) | **High** — Prerequisite work in progress |
| Follow-up suggestion chips | [#1156](https://github.com/nearai/ironclaw/pull/1156) | **Very High** — PR open, UX enhancement |
| MCP registry data-driven | [#1144](https://github.com/nearai/ironclaw/pull/1144) | **High** — Architectural refactor in progress |

---

## 7. User Feedback Summary

### Pain Points
- **Setup friction**: Database errors during `onboard` (#846), token validation flakiness (#991)
- **Model compatibility**: kimi-k2.5 constraints (#728), OpenAI-compatible auth issues (#1116)
- **Silent failures**: Google Sheets writes incomplete (#1002), event routines not firing (#1051)
- **Input handling**: Safari IME composition broken (#1139) — affects CJK users significantly

### Positive Signals
- Strong CLI tooling expansion (multiple `reidliu41` PRs)
- Rapid security response (ReDoS fixed same day)
- Multi-platform channel support (Feishu, Telegram improvements)

### Use Case Evolution
- Enterprise/team usage: Multi-tenant auth, workspace isolation, BYOK configuration
- Embedded/IoT: Pattern A GPIO support for Raspberry Pi
- Non-technical users: Human-readable cron, suggestion chips

---

## 8. Backlog Watch

| Issue | Age | Risk | Needs |
|-------|-----|------|-------|
| [#763](https://github.com/nearai/ironclaw/issues/763) NEAR AI "No user query" on routines | 4 days | **Functional breakage** | Core routine engine fix — affects lightweight and full_job routines |
| [#1116](https://github.com/nearai/ironclaw/issues/1116) openai_compatible 401 unless env vars exported | 1 day | **Regression risk** | Environment handling consistency |
| [#614](https://github.com/nearai/ironclaw/pull/614) LLM-as-Judge | 8 days | **Large feature** | Final review, safety system integration |
| [#744](https://github.com/nearai/ironclaw/pull/744) OpenAI Codex provider | 6 days | **Large feature** | Review, OAuth flow validation |

**Maintainer attention needed**: The routine engine issue (#763) is particularly critical as it breaks core agent functionality for NEAR AI provider users. The two large feature PRs (#614, #744) have been open 6-8 days and may need prioritization decisions to prevent branch divergence.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-14

## 1. Today's Overview

LobsterAI shows **high development velocity** with 9 PRs merged/closed in 24 hours against 12 active issues, indicating aggressive iteration on the OpenClaw integration. The team is prioritizing **gateway performance optimization** and **MCP ecosystem expansion**, with no new releases cut today. Community activity is **moderate-to-high** with concentrated pain points around local model compatibility, token management, and execution reliability. The project appears healthy with rapid bug-fix cycles, though user-reported stability issues with local LLM deployments remain unresolved.

---

## 2. Releases

**None today.** No new version tags or release notes published.

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#395](https://github.com/netease-youdao/LobsterAI/pull/395) | @btc69m979y-dotcom | **OpenClaw gateway startup optimization**: esbuild bundle + compile cache + plugin precompilation — reduces startup from 180s+ timeout to ~85s (first) / ~15s (subsequent) | **Critical performance fix** for Windows Electron users |
| [#408](https://github.com/netease-youdao/LobsterAI/pull/408) | @btc69m979y-dotcom | **MCP Bridge for OpenClaw embedded agent**: Exposes LobsterAI's MCP servers (Tavily, Context7, GitHub) as tools via HTTP callback proxy; adds hot-reload for MCP lifecycle | Major ecosystem integration milestone |
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) | @btc69m979y-dotcom | **OpenClaw plugin preinstall system + IM channel config sync**: Auto-download/packaging for DingTalk, Feishu, QQ, WeCom plugins | Enterprise IM integration readiness |
| [#411](https://github.com/netease-youdao/LobsterAI/pull/411) | @liuzhq1986 | Migrate settings memory tab to OpenClaw MEMORY.md storage | UX consolidation |
| [#412](https://github.com/netease-youdao/LobsterAI/pull/412) | @liuzhq1986 | Force `executionMode: local`, fix Docker dependency error for upgrade users; remove execution mode tag from chat header | Installation/upgrade reliability |
| [#403](https://github.com/netease-youdao/LobsterAI/pull/403) | @liuzhq1986 | Remove built-in sandbox and build scripts; merge system prompts with OpenClaw defaults | Architecture simplification |
| [#409](https://github.com/netease-youdao/LobsterAI/pull/409) | @liugang519 | Scheduled tasks support for OpenClaw | Feature parity expansion |
| [#410](https://github.com/netease-youdao/LobsterAI/pull/410) | @liugang519 | Fix incorrect reference in scheduled task deletion | Bug fix |
| [#401](https://github.com/netease-youdao/LobsterAI/pull/401) | @btc69m979y-dotcom | Gateway startup deduplication lock; fix duplicate assistant messages in channel sync | Stability improvements |

**Key Technical Direction**: The project is aggressively consolidating around **OpenClaw as the core execution engine**, shedding legacy components (built-in sandbox, separate execution modes) and optimizing for the Windows Electron environment where most users appear to be deployed.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Core Problem |
|:---|:---:|:---:|:---|
| [#112](https://github.com/netease-youdao/LobsterAI/issues/112) | 2 | 0 | **Local model skill invocation failure**: Ollama + Qwen3:14b cannot trigger skills via natural language, while API models work fine |
| [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 2 | 0 | **Token overflow on minimal input**: "Hello" triggers 8961 input tokens / 32000 output request, exceeding model context |
| [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | 1 | 0 | **DingTalk bot notifications silently failing** for scheduled tasks on Windows/Tianyi Cloud |
| [#405](https://github.com/netease-youdao/LobsterAI/issues/405) | 1 | 0 | **Local Ollama "chat-only" mode**: Cannot execute commands despite `tools.profile: "full"` config |

### Underlying Needs Analysis

- **Local-first deployment demand**: Issues #112, #405 reveal strong user preference for local LLM (Ollama/Qwen/DeepSeek) execution, but LobsterAI's tool-calling pipeline appears optimized for cloud API models with stronger function-calling fine-tuning
- **Token economics transparency**: #370 suggests prompt construction or conversation history management issues causing unexpected token bloat
- **Reliability expectations for automation**: #285, #407 indicate scheduled tasks are a key use case, but cron generation and notification delivery remain flaky

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | Token explosion on simple greetings blocks basic usage | No fix PR |
| **🔴 Critical** | [#112](https://github.com/netease-youdao/LobsterAI/issues/112) | Core functionality (skills) broken for local model users | No fix PR |
| **🟡 High** | [#405](https://github.com/netease-youdao/LobsterAI/issues/405) | Command execution fails locally despite correct config | No fix PR |
| **🟡 High** | [#402](https://github.com/netease-youdao/LobsterAI/issues/402) | Sandbox startup crash on Debian 12.2/ESXi VM | No fix PR |
| **🟡 High** | [#399](https://github.com/netease-youdao/LobsterAI/issues/399) | Claude run failed on Alibaba Cloud BaiLian GLM 4.5 | No fix PR |
| **🟡 High** | [#406](https://github.com/netease-youdao/LobsterAI/issues/406) | Baidu Qianfan CodingPlan API connection failure | No fix PR |
| **🟡 High** | [#407](https://github.com/netease-youdao/LobsterAI/issues/407) | Cron expression generation incorrect ("every 10 min" wrong) | No fix PR (related PR #409 merged but may not cover this) |
| **🟡 High** | [#358](https://github.com/netease-youdao/LobsterAI/issues/358) | Premature task completion ("done" before actually finished) | No fix PR |
| **🟢 Medium** | [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | DingTalk notifications auto-expire | No fix PR |
| **🟢 Medium** | [#400](https://github.com/netease-youdao/LobsterAI/issues/400) | General slowness and unexplained waits | No fix PR |
| **🟢 Medium** | [#404](https://github.com/netease-youdao/LobsterAI/issues/404) | Cannot select custom skills from dialog button | Feature gap, not crash |

**Pattern**: 6 of 11 open issues are **local model / alternative API provider compatibility**, suggesting the OpenClaw integration's abstraction layer hasn't fully normalized across the diverse LLM landscape.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|:---|:---|:---:|
| [#404](https://github.com/netease-youdao/LobsterAI/issues/404) | Select custom skills from dialog UI | **High** — small UX gap, clear user need |
| [#353](https://github.com/netease-youdao/LobsterAI/issues/353) | Performance parity with "shell" OpenClaw; unified runtime environment | **Medium** — architectural, conflicts with current Electron+OpenClaw direction |
| Implicit in #112, #405 | Robust local model tool-calling (Ollama native function calling support) | **High** — blocking core user segment |

**Predicted v0.2.5 focus**: Local LLM compatibility fixes, custom skill UI completion, scheduled task reliability improvements.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **"Local model second-class citizenship"** | #112, #405: "lobsterai + ollama + qwen3:14b 模型（本地）时不能调用技能" / "本地ollama只能聊天，不能执行命令" | 🔴 Critical |
| **"Speed = experience"** | #353: "虽然但是套壳的openclaw执行起来比你快，多了" / #400: "速度太慢，总是莫名等待" | 🟡 High |
| **Token/cost unpredictability** | #370: "输入一个你好，怎么就超token数了？" | 🟡 High |
| **Reliability of automation** | #358: "经常出现没跑完就任务完成了" / #285: DingTalk silent failures / #407: wrong cron generation | 🟡 High |
| **Deployment fragility** | #402: ESXi/Debian sandbox crash | 🟡 High |

### Use Cases Emerging

- **Personal automation hub**: Scheduled tasks + notifications (DingTalk) = cron replacement for non-technical users
- **Local privacy-first assistant**: Strong demand for Ollama/Qwen/DeepSeek integration without cloud dependency
- **Enterprise IM integration**: DingTalk, Feishu, QQ, WeCom plugin ecosystem suggests B2B2C strategy

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#112](https://github.com/netease-youdao/LobsterAI/issues/112) | 16 days | **Blocking local LLM adoption** | Maintainer acknowledgment + reproduction guide |
| [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | 9 days | Automation reliability credibility | Windows-specific debugging guidance |
| [#358](https://github.com/netease-youdao/LobsterAI/issues/358) | 4 days | Core execution correctness | Investigation of completion detection logic |

**Recommendation**: Issue #112 should be **priority P0** — it represents a fundamental capability gap for a significant user segment (local model users) and has persisted without maintainer response despite clear reproduction steps.

---

*Digest generated from GitHub activity 2026-03-13 to 2026-03-14. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-14

## 1. Today's Overview

TinyClaw (github.com/TinyAGI/tinyclaw) experienced **exceptionally high development velocity** on 2026-03-13, with **4 PRs merged** and **1 new release** (v0.0.13) shipping substantial agent infrastructure improvements. The project demonstrates strong maintainer throughput with @jlia0 landing four major features in a single day. Activity remains code-heavy with minimal community discussion (only 2 issues with 1 comment each), suggesting the project is currently **maintainer-driven rather than community-driven**. A pending rebrand PR (#191) signals potential strategic positioning shift toward broader AGI branding.

---

## 2. Releases

### [v0.0.13](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13) — 2026-03-13

| Component | Change | Migration Notes |
|-----------|--------|---------------|
| **Agent Configuration UI** | New tabbed interface for skills, system prompts, memory, and heartbeat monitoring | No breaking changes; new UI available at agent detail pages |
| **Agent Provisioning** | Consolidated workspace creation with symlink-based skill deployment | Existing agents auto-migrate; disk space reduction for multi-agent setups |
| **Hierarchical Memory** | Persistent memory system with YAML-frontmatter markdown storage | New `memory/` directory created per agent; no action required |
| **System Prompts** | In-memory AGENTS.md injection eliminates file I/O | Removes stale file issues; dynamic teammate info at runtime |

**Risk Assessment**: Low migration friction. Changes are additive or internal refactoring.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Description | Impact |
|:---|:-------|:------------|:-------|
| [#207](https://github.com/TinyAGI/tinyclaw/pull/207) | @jlia0 | Agent configuration page with skills/prompts/heartbeat tabs | **Major UX improvement** — enables non-technical agent management |
| [#211](https://github.com/TinyAGI/tinyclaw/pull/211) | @jlia0 | Consolidated agent provisioning + symlink skills | **Technical debt reduction** — deduplicates 3 implementations, reduces disk I/O |
| [#209](https://github.com/TinyAGI/tinyclaw/pull/209) | @jlia0 | Hierarchical memory system for agents | **Core capability** — enables persistent knowledge across sessions |
| [#208](https://github.com/TinyAGI/tinyclaw/pull/208) | @jlia0 | In-memory AGENTS.md system prompt injection | **Performance/reliability** — eliminates file race conditions |

**Pattern**: All 4 PRs form a coherent **agent infrastructure sprint** — configuration UI, provisioning reliability, memory persistence, and prompt handling. Suggests v0.0.13 was a planned milestone release.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---------|:---------|
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191): Rebrand to TinyAGI | Open, updated 2026-03-13 | **Strategic inflection point**. Complete namespace migration (@tinyclaw/* → @tinyagi/*) suggests project scope expansion beyond "claw" (CLI tool) toward general AGI platform. Risk: breaking change for existing installs. |
| [#212](https://github.com/TinyAGI/tinyclaw/pull/212): Live office workspace redesign | Open, created 2026-03-13 | Real-time collaboration UI investment indicates **team/enterprise use case** targeting. Complements agent configuration work. |
| [#57](https://github.com/TinyAGI/tinyclaw/issues/57): Google Chat/Slack/Teams integration | Open since 2026-02-14, updated 2026-03-13 | **Long-standing feature request** for enterprise messaging. 1 month without implementation suggests prioritization gap between core infrastructure and integrations. |

**Underlying Need**: Users want TinyClaw/TinyAGI as a **team-accessible agent platform**, not just individual developer tool. The office redesign + messaging integrations + rebrand all point to collaborative/enterprise positioning.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix Available |
|:---|:---------|:-------|:--------------|
| [#210](https://github.com/TinyAGI/tinyclaw/issues/210): `ReferenceError: exports is not defined in ES module scope` | **High** | ✅ Closed 2026-03-13 | Fixed in same-day release |

**Assessment**: Single critical bug reported and resolved within 24 hours. Error appeared post-#205 fixes, indicating **regression risk in rapid release cycles**. ES module/CommonJS boundary issues are recurring class of problems in Node.js projects.

**Stability Score**: 🟢 Good — fast turnaround, but monitor for ES module pattern consistency.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in v0.0.14 | Rationale |
|:---|:-------|:----------------------|:----------|
| **Enterprise messaging** (Google Chat, Slack, Teams) | [#57](https://github.com/TinyAGI/tinyclaw/issues/57) | Medium | 1 month old, aligns with rebrand/enterprise pivot; blocked by no assignee |
| **Office workspace v2** | [#212](https://github.com/TinyAGI/tinyclaw/pull/212) | **High** | Active PR, likely merges soon |
| **Rebrand completion** | [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | **High** | Infrastructure complete; pending decision |
| **Additional MCP integrations** | [#57](https://github.com/TinyAGI/tinyclaw/issues/57) mentions MCP | Medium | MCP (Model Context Protocol) is trending; would fit agent architecture |

**Prediction**: v0.0.14 likely contains office redesign + rebrand finalization. Messaging integrations may slip unless contributor emerges.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|:---|:---------|:---------|
| Runtime ES module errors | [#210](https://github.com/TinyAGI/tinyclaw/issues/210) — "tried two nodejs versions" | High (fixed) |
| Limited communication channels | [#57](https://github.com/TinyAGI/tinyclaw/issues/57) — explicit request for 3 platforms | Medium |

### Use Cases Emerging
- **Multi-agent team coordination** (office workspace redesign)
- **Persistent knowledge management** (hierarchical memory)
- **Non-technical agent administration** (configuration UI)

### Satisfaction Signals
- Rapid bug resolution (same-day fix)
- Consistent feature delivery (4 PRs/1 release in 24h)

### Dissatisfaction Signals  
- 1-month-old feature request without engagement ([#57](https://github.com/TinyAGI/tinyclaw/issues/57))
- No community PRs merged — entirely maintainer-driven

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:----|:-----|:--------------|
| [#57](https://github.com/TinyAGI/tinyclaw/issues/57): Messaging integrations | **28 days** | Medium | Assign or provide roadmap timeline; risk: user attrition to competitors with Slack/Teams support |
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191): Rebrand | 3 days | Low | Decision on merge timing; coordinate with documentation updates |

**Critical Gap**: No open issues/PRs tagged for **testing infrastructure**, **documentation**, or **security review** despite rapid feature velocity. Recommend maintainer attention to prevent technical debt accumulation.

---

*Digest generated from GitHub activity 2026-03-13 to 2026-03-14. Data source: github.com/TinyAGI/tinyclaw*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-14

## 1. Today's Overview

Moltis shows **high development velocity** with 11 issues and 11 PRs updated in the last 24 hours, split evenly between open/active items and closed/merged ones. No new release was cut today, but the project is actively merging bug fixes and iterating on user-reported issues. The community is particularly engaged around **agent execution reliability**, **node management**, and **security/privacy concerns** with sealed vaults. Several long-standing issues (#184, #186, #183, #316, #244) were closed, indicating maintainers are clearing backlog debt. Overall project health appears **stable with active maintenance**, though the volume of new bug reports suggests the codebase is still maturing.

---

## 2. Releases

**No new releases** — Version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#418](https://github.com/moltis-org/moltis/pull/418) | **Persist aborted partial history** — Saves partial assistant output and tool-call frames when chats are interrupted | Fixes data loss on interruption; closes [#186](https://github.com/moltis-org/moltis/issues/186) |
| [#402](https://github.com/moltis-org/moltis/pull/402) | **Fix QMD install instructions** — Corrects package name from `@anthropic/qmd` to `@tobilu/qmd` | Resolves onboarding friction; closes [#184](https://github.com/moltis-org/moltis/issues/184) |
| [#406](https://github.com/moltis-org/moltis/pull/406) | **Improve onboarding password autofill** — Adds `autocomplete="new-password"` and proper field metadata | Better UX for password managers; closes [#183](https://github.com/moltis-org/moltis/issues/183) |
| [#415](https://github.com/moltis-org/moltis/pull/415) | **Keep onboarding accessible after auth reset** — Fixes redirect loop when authentication is reset | Restores access after lockout; closes [#316](https://github.com/moltis-org/moltis/issues/316) |
| [#409](https://github.com/moltis-org/moltis/pull/409) | **Clarify cron setup modal copy** — Renames "one-shot" to "Run Once", shows timezone defaults | Better UX for scheduling; closes [#244](https://github.com/moltis-org/moltis/issues/244) |

**Key advancement**: The project closed **5 backlog issues** spanning documentation, UX, and data integrity — demonstrating effective maintenance velocity.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Activity | Analysis |
|:---|:---|:---|:---|
| 1 | [#426](https://github.com/moltis-org/moltis/issues/426) "wrong address in nodes" | 1 comment, updated today | **Critical infrastructure bug** — Node addressing is fundamental to distributed execution; user @rlex actively engaged |
| 2 | [#430](https://github.com/moltis-org/moltis/issues/430) "Agent unable to use cron tools" | 1 comment | **Core functionality breakage** — Cron is a headline feature; this blocks scheduled automation workflows |
| 3 | [#383](https://github.com/moltis-org/moltis/issues/383) "Support Lark/Feishu" | 1 comment, **2 👍** | **Enterprise integration demand** — Lark/Feishu is dominant in Chinese market; vote count signals real user need |

### Underlying Needs Analysis

- **Reliability**: Users need agent execution to be deterministic across nodes and scheduled tasks
- **Enterprise connectivity**: Lark/Feishu request indicates expansion into Chinese enterprise market
- **Security transparency**: [#428](https://github.com/moltis-org/moltis/issues/428) reveals tension between "vault sealed" marketing and actual data exposure

---

## 5. Bugs & Stability

### New/Active Bugs (Ranked by Severity)

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#428](https://github.com/moltis-org/moltis/issues/428) | **Security**: Full chat history exposed via "context" button despite "vault is sealed" | No fix PR |
| 🔴 **High** | [#430](https://github.com/moltis-org/moltis/issues/430) | **Functional**: Agent cannot use cron tools — scheduled automation broken | No fix PR |
| 🟡 **Medium** | [#426](https://github.com/moltis-org/moltis/issues/426) | **Infrastructure**: Wrong address in nodes — distributed execution unreliable | No fix PR |
| 🟡 **Medium** | [#427](https://github.com/moltis-org/moltis/issues/427) | **UX**: Agent confused about nodes when executing commands | No fix PR |
| 🟡 **Medium** | [#317](https://github.com/moltis-org/moltis/issues/317) | **Compatibility**: Jinja template error with Qwen models via llama.cpp | **Fix PR open**: [#431](https://github.com/moltis-org/moltis/pull/431) |

### Closed Today
- [#186](https://github.com/moltis-org/moltis/issues/186) — Interrupted agent memory loss (fixed by [#418](https://github.com/moltis-org/moltis/pull/418))
- [#184](https://github.com/moltis-org/moltis/issues/184) — QMD install docs wrong (fixed by [#402](https://github.com/moltis-org/moltis/pull/402))
- [#316](https://github.com/moltis-org/moltis/issues/316) — Cannot reset authentication (fixed by [#415](https://github.com/moltis-org/moltis/pull/415))

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Prediction |
|:---|:---|:---|:---|
| **Lark/Feishu integration** | [#383](https://github.com/moltis-org/moltis/issues/383) | ⭐⭐⭐ Strong — 2 votes, enterprise use case | **Likely v-next or v+1** — Team collaboration is core to Moltis positioning |
| Cron setup clarity | [#244](https://github.com/moltis-org/moltis/issues/244) | Completed | Shipped |
| Password manager support | [#183](https://github.com/moltis-org/moltis/issues/183) | Completed | Shipped |

### Technical Debt Signals
- **Model compatibility**: [#431](https://github.com/moltis-org/moltis/pull/431) addresses Qwen/llama.cpp compatibility — suggests investment in local LLM ecosystem
- **Node execution reliability**: Multiple open PRs ([#410](https://github.com/moltis-org/moltis/pull/410), [#432](https://github.com/moltis-org/moltis/pull/432)) targeting tool/node execution edge cases

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Security expectation mismatch** | [#428](https://github.com/moltis-org/moltis/issues/428) — "vault is sealed" but history visible | High — Trust erosion risk |
| **Node execution confusion** | [#426](https://github.com/moltis-org/moltis/issues/426), [#427](https://github.com/moltis-org/moltis/issues/427) — Addressing and command execution unreliable | High — Core feature instability |
| **Cron reliability** | [#430](https://github.com/moltis-org/moltis/issues/430) — Scheduled automation non-functional | High — Breaks key use case |
| **Local LLM friction** | [#317](https://github.com/moltis-org/moltis/issues/317) — Template errors with popular models | Medium — Power user blocker |

### Positive Signals
- **Responsive maintenance**: 5 backlog issues closed in one day
- **Documentation fixes**: Rapid correction of install instructions ([#402](https://github.com/moltis-org/moltis/pull/402))
- **UX polish**: Password manager and cron clarity improvements

### Use Case Patterns
- **Distributed/multi-node execution** — Emerging as primary stress point
- **Scheduled automation** — Cron features actively used but fragile
- **Privacy-conscious deployment** — "Vault sealed" feature attracts users with strict data requirements

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#410](https://github.com/moltis-org/moltis/pull/410) "retry empty structured tool names" | 3 days | **Regression risk** — Empty tool names crash runner | Review/merge — has validation completed |
| [#417](https://github.com/moltis-org/moltis/pull/417) "restore custom GGUF setup without restart" | 3 days | **Local LLM UX** — Restart requirement hurts iteration | Review — Rust tests included |
| [#317](https://github.com/moltis-org/moltis/issues/317) Jinja template error | 11 days | **Compatibility** — Blocks Qwen users | **Fix ready** — [#431](https://github.com/moltis-org/moltis/pull/431) needs merge |
| [#383](https://github.com/moltis-org/moltis/issues/383) Lark/Feishu support | 4 days | **Market expansion** — Enterprise China opportunity | Triage for roadmap inclusion |

### Dependency Alert
- [#433](https://github.com/moltis-org/moltis/pull/433) — `undici` security bump (dependabot) — Routine but should merge promptly

---

*Digest generated from github.com/moltis-org/moltis activity on 2026-03-14*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-14

## 1. Today's Overview

CoPaw shows **very high community activity** with 50 issues and 44 PRs updated in the last 24 hours, indicating a rapidly maturing AI agent framework. The project is experiencing growing pains typical of fast adoption: critical stability issues (CPU spikes, memory management, tool execution failures) are emerging alongside strong demand for enterprise channel integrations (WeCom, Feishu, QQ). The maintainer team is responsive with 23 merged/closed PRs, but the 41 open/active issues suggest backlog pressure. Notably, timezone handling and context compression have become recurring architectural pain points requiring systematic fixes.

---

## 2. Releases

**No new releases** (v0.0.7 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total, key highlights):

| PR | Description | Impact |
|:---|:---|:---|
| [#943](https://github.com/agentscope-ai/CoPaw/pull/943) | Unify allowlist access control across all channels | **Architecture**: Eliminates duplicated auth code, improves security maintainability |
| [#1350](https://github.com/agentscope-ai/CoPaw/pull/1350) | Import skills from LobeHub marketplace | **Ecosystem**: Expands skill library, lowers barrier for skill discovery |
| [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432) | Inject UTC time context to fix timezone mismatch in cron scheduling | **Reliability**: Addresses root cause of [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) — weak models failing to call time tools |
| [#1396](https://github.com/agentscope-ai/CoPaw/pull/1396) | Deduplicate built-in skill listings | **UX**: Fixes visual clutter reported in [#1370](https://github.com/agentscope-ai/CoPaw/issues/1370) |
| [#1433](https://github.com/agentscope-ai/CoPaw/pull/1433) | Document Ollama/LM Studio context length warnings | **Docs**: Prevents misconfiguration causing "amnesia" issues |
| [#1071](https://github.com/agentscope-ai/CoPaw/pull/1071) | Mattermost channel integration | **Channel**: New enterprise messaging support |
| [#1250](https://github.com/agentscope-ai/CoPaw/pull/1250) | Shell tool execution + implicit user context passing | **Core**: Critical infrastructure for secure multi-user agent execution |
| [#1267](https://github.com/agentscope-ai/CoPaw/pull/1267) | WeCom (Enterprise WeChat) long-connection robot | **Channel**: Major enterprise demand addressed |

**Technical Direction**: Heavy investment in channel ecosystem (4 enterprise messaging platforms), context/timezone architecture fixes, and skill marketplace integration.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement + underlying needs analysis):

| Issue | Comments | Core Need |
|:---|:---:|:---|
| [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) — *Why no fixed local time in context?* | 7 | **Model capability bridging**: Users need CoPaw to compensate for weak models' failure to invoke tools proactively. Closed with architectural fix in [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432). |
| [#51](https://github.com/agentscope-ai/CoPaw/issues/51) — *Enterprise WeChat support* | 7 | **Enterprise deployment**: Long-standing demand finally addressed by [#1267](https://github.com/agentscope-ai/CoPaw/pull/1267) and [#1407](https://github.com/agentscope-ai/CoPaw/pull/1407). |
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) — *CPU 100% spike (Ubuntu)* | 6 | **Production stability**: Critical resource leak, root-caused to MCP/read_file, fix PR submitted. |
| [#1293](https://github.com/agentscope-ai/CoPaw/issues/1293) — *write_file/execute_shell failing* | 6 | **Tool reliability**: Token overflow in context management — suggests need for better truncation/prioritization. |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) — *Feishu "delayed reply" bug* | 5 | **Message ordering**: Race condition in async message processing, affects user trust in conversational flow. |

**Pattern**: Issues cluster around **context management** (time, history, compression) and **channel reliability** — suggesting the core agent loop needs architectural hardening for production workloads.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) — CPU 100% infinite loop (MCP/read_file related) | Open | ✅ Fix PR submitted by reporter |
| 🔴 **Critical** | [#1437](https://github.com/agentscope-ai/CoPaw/issues/1437) — Compactor "hallucinates" fake user messages | Open | ❌ No fix yet |
| 🟡 **High** | [#1293](https://github.com/agentscope-ai/CoPaw/issues/1293) — File/shell tools fail (token overflow) | Open | ❌ Needs context management fix |
| 🟡 **High** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) — Feishu message ordering corruption | Open | ❌ No fix yet |
| 🟡 **High** | [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270) — Agent silent stop (token limit) | Open | ❌ Needs graceful degradation |
| 🟡 **High** | [#1431](https://github.com/agentscope-ai/CoPaw/issues/1431) — Cross-disk file move fails (Windows) | Open | ❌ Path handling bug |
| 🟢 **Medium** | [#1458](https://github.com/agentscope-ai/CoPaw/issues/1458) — Ollama LAN connection fails | Open | ❌ Network config issue |
| 🟢 **Medium** | [#1388](https://github.com/agentscope-ai/CoPaw/issues/1388) — "INVALID_ARGUMENT" with GrsAI API | Open | ❌ Provider compatibility |

**Stability Assessment**: Two critical bugs threaten production deployment — resource exhaustion (#1385) and data integrity (#1437). The compactor hallucination bug is particularly concerning as it corrupts conversation state silently.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **ACP (Agent Communication Protocol)** | [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | Medium | Strategic for IDE integration; no PR yet but high architectural value |
| **Multi-agent concurrent execution** | [#1298](https://github.com/agentscope-ai/CoPaw/issues/1298) | Low | Complex architectural change; referenced OpenClaw UI pattern |
| **Image upload in web console** | [#1045](https://github.com/agentscope-ai/CoPaw/issues/1045) | Medium | Clear UX need, multi-modal trend; implementation complexity moderate |
| **Xiaoyi (Huawei) platform channel** | [#1085](https://github.com/agentscope-ai/CoPaw/issues/1085) | Medium | Follows pattern of rapid channel expansion; OpenClaw compatibility mentioned |
| **Session compression hooks / auto-summary persistence** | [#1439](https://github.com/agentscope-ai/CoPaw/issues/1439) | High | Directly addresses #1437 data loss; architectural necessity |
| **Custom skill resource files** | [#1316](https://github.com/agentscope-ai/CoPaw/issues/1316), [#1430](https://github.com/agentscope-ai/CoPaw/issues/1430) | High | Repeated demand, [#1316](https://github.com/agentscope-ai/CoPaw/issues/1316) already closed suggesting partial implementation |

**Prediction**: v0.0.8 will likely focus on **stability** (compactor fixes, context management) with **custom skill enhancements** and **one additional enterprise channel**.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):

| Theme | Evidence | Intensity |
|:---|:---|:---:|
| **Context/memory fragility** | "压缩后原始对话内容不可恢复", "Agent 执行中途静默停止", "对话历史丢失" | 🔥🔥🔥🔥🔥 |
| **Timezone confusion** | "创建定时任务依然调用UTC时区", multiple closed issues | 🔥🔥🔥🔥 |
| **Token/context limits** | "上下文很快超限", "token 超限" errors | 🔥🔥🔥🔥 |
| **Enterprise channel gaps** | WeCom, Xiaoyi, Nextcloud requests | 🔥🔥🔥 |
| **Weak model compatibility** | Models failing to invoke tools, needing explicit time context | 🔥🔥🔥 |

### Satisfaction Drivers:
- Responsive maintainer team (multiple issues closed same-day)
- Rapid channel expansion (Mattermost, WeCom shipped)
- Skill ecosystem growth (LobeHub import)

### Dissatisfaction Drivers:
- v0.0.7 regression: skill duplication, Ollama amnesia
- Silent failures (no error logs when agent stops)
- Windows-specific path issues

---

## 8. Backlog Watch

### Issues/PRs needing maintainer attention (>5 days old, high impact):

| Item | Age | Risk if Neglected |
|:---|:---:|:---|
| [#749](https://github.com/agentscope-ai/CoPaw/pull/749) — Console event stream interruption handling | 8 days | Message loss in web UI |
| [#419](https://github.com/agentscope-ai/CoPaw/pull/419) — OpenAI-compatible custom headers | 11 days | Provider flexibility blocked |
| [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) — `copaw update` CLI command | 3 days | Upgrade friction causing support burden |
| [#1210](https://github.com/agentscope-ai/CoPaw/pull/1210) — Telegram comprehensive fixes | 3 days | Channel reliability |
| [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) — ACP protocol support | 5 days | Strategic positioning vs. competitors |

**Recommendation**: Prioritize [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) (reduces support load) and [#749](https://github.com/agentscope-ai/CoPaw/pull/749) (data loss risk). Consider design review for [#1437](https://github.com/agentscope-ai/CoPaw/issues/1437) compactor architecture given data integrity implications.

---

*Digest generated from 50 issues, 44 PRs, 0 releases on 2026-03-14*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-14

---

## 1. Today's Overview

ZeptoClaw saw **exceptionally high maintainer activity** on 2026-03-13, with 6 PRs and 8 issues processed—primarily driven by lead maintainer @qhkm. The project is in a **security-hardening sprint**, closing 6 issues and merging 3 PRs focused on safer defaults, approval workflows, and filesystem safety. Notably, **zero new releases** were cut despite significant changes, suggesting either a pending version bump or intentional stabilization period. Three substantial PRs remain open, including a major protocol implementation (ACP), indicating active architectural expansion. Overall project health appears strong with rapid maintainer response times (same-day closures), though community contributions remain limited relative to core team velocity.

---

## 2. Releases

**No new releases** for 2026-03-13–14.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#342](https://github.com/qhkm/zeptoclaw/pull/342) | @qhkm | **Streaming by default + metadata footer** — CLI now streams tokens live; `--no-stream` to disable; adds token/tool/time footer | Major UX improvement; breaking config change (`streaming: true` default) |
| [#353](https://github.com/qhkm/zeptoclaw/pull/353) | @qhkm | **Interactive approval prompts, streaming parity, safer defaults** — TTY-gated `[y/N]` prompts, `/trust` session command, streaming path feature parity | Critical safety infrastructure; closes 4 related issues |
| [#349](https://github.com/qhkm/zeptoclaw/pull/349) | @qhkm | **Fix: AgentLoop respects config streaming default** — Constructor bugfix for streaming config propagation | Stability fix supporting #342 |

**Key Advancements:**
- **Safety architecture**: New `ApprovalHandler` callback system with TTY detection
- **Session trust model**: `/trust on|off` for interactive CLI bypass (non-automatable)
- **Streaming maturity**: Full parity between streaming and non-streaming execution paths

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#354](https://github.com/qhkm/zeptoclaw/issues/354) — Filesystem safety carve-out | 1 comment, closed | **Technical debt recognition**: Merged safety gate was overbroad; maintainer self-flagged for refinement |
| [#348](https://github.com/qhkm/zeptoclaw/issues/348) — Harden default agent mode | 1 comment, closed | **Security philosophy debate**: Autonomous-by-default vs. assistant-by-default; resolved for stricter defaults |
| [#352](https://github.com/qhkm/zeptoclaw/issues/352) — Trusted CLI TTY checks | 1 comment, closed | **Automation safety**: Preventing `/trust` in CI/piped environments |

**Underlying Needs:**
- **Enterprise/CI safety**: Users need guarantees that "trust" cannot accidentally activate in automated contexts
- **UX vs. security tension**: Desire for fluid local development without sacrificing remote/CI safety
- **Observability**: Token/tool/time footers address "black box" criticism of agent systems

**Open PRs Gaining Attention:**
- [#356](https://github.com/qhkm/zeptoclaw/pull/356) — ACP (Agent Client Protocol) stdio + HTTP: Major architectural expansion for external client integration; no comments yet but high strategic importance

---

## 5. Bugs & Stability

| Issue/PR | Severity | Status | Details |
|:---|:---|:---|:---|
| [#351](https://github.com/qhkm/zeptoclaw/issues/351) — Streaming tool execution parity | **P2-high** | **Fixed in #353** | Missing hooks, metrics, logs in streaming path |
| [#355](https://github.com/qhkm/zeptoclaw/pull/355) — Image content handling in loop | Unspecified | **Open** | Loop-level image processing fix; needs review |
| [#346](https://github.com/qhkm/zeptoclaw/pull/346) — Discord channel ignores image-only messages | Unspecified | **Open** | Integration bug; multimedia message edge case |
| [#347](https://github.com/qhkm/zeptoclaw/issues/347) — Harden default agent mode | Unspecified | **Open** (duplicate of #348?) | Appears to be partial duplicate; needs triage |
| [#354](https://github.com/qhkm/zeptoclaw/issues/354) — Filesystem safety carve-out | **P1-critical** | **Closed** | Overbroad scanning in `write_file`/`edit_file` |

**Stability Assessment:** 
- **No active crashes** in production reported
- **Two open image-handling PRs** (#355, #346) suggest multimedia robustness is ongoing concern
- **Config system maturing**: #349 fix indicates streaming rollout had edge cases

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#334](https://github.com/qhkm/zeptoclaw/issues/334) — Add to Shelldex directory | Marketing/visibility | High (trivial, community-submitted) |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) — ACP protocol implementation | External client ecosystem | **Very High** — major architectural PR in progress |
| Implicit from #353 | WebSocket/sse streaming for non-CLI channels | Medium — HTTP ACP channel suggests this direction |
| Implicit from safety work | Granular tool categories in approval policy | High — foundation laid in #353 |

**Predicted vNext Features:**
1. **ACP protocol stabilization** — stdio + HTTP channels for IDE/editor integrations
2. **Directory listing** — Shelldex submission
3. **Extended trust boundaries** — Per-project or per-directory trust scopes

---

## 7. User Feedback Summary

**Observed Pain Points:**
| Issue | Evidence | Severity |
|:---|:---|:---|
| False positives in safety scanning | #354 | Workflow friction for developers |
| "Black box" agent execution | Addressed by #342 metadata footer | Observability gap |
| Approval fatigue in local development | #350, #353 | UX friction; resolved via `/trust` |
| Discord integration limitations | #346 | Community platform gaps |

**Satisfaction Indicators:**
- ✅ **Rapid maintainer response** — All critical issues closed same day
- ✅ **Safety-first evolution** — Community concern → immediate architectural response
- ⚠️ **Limited external contribution** — 6/6 PRs from 2 maintainers; 1/8 issues from external user

**Missing Voice:** No user complaints about performance, model quality, or documentation in this period—suggests core functionality is stable.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#334](https://github.com/qhkm/zeptoclaw/issues/334) Shelldex submission | 2 days | Low | Maintainer acknowledgment; likely external PR |
| [#347](https://github.com/qhkm/zeptoclaw/issues/347) Harden defaults (open) | 1 day | **Medium** | Triage—appears duplicate of closed #348; may need closure |
| [#355](https://github.com/qhkm/zeptoclaw/pull/355) Image loop fix | 1 day | Medium | Code review; conflicts with #353 possible? |
| [#346](https://github.com/qhkm/zeptoclaw/pull/346) Discord image fix | 1 day | Low | Review; may batch with #355 |

**Attention Required:**
- **#347**: Potential duplicate cluttering tracker; needs maintainer triage
- **External contributions**: Two PRs from @rafaellin (#355, #346) await review—critical for community health

---

*Digest generated from GitHub activity 2026-03-13 to 2026-03-14. All links: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*