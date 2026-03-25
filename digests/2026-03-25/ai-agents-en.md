# OpenClaw Ecosystem Digest 2026-03-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-25 00:09 UTC

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

# OpenClaw Project Digest — 2026-03-25

## 1. Today's Overview

OpenClaw shows **exceptionally high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project under significant user demand. The project is in a **stabilization phase** following the problematic 2026.3.22 release, with multiple regression fixes in flight and no new version published today. Platform expansion is accelerating with major PRs for Linux GTK4 companion app, Wear OS, and QQ channel support. The maintainer team appears responsive with 71 issues and 97 PRs closed, though the 429 open issues suggest backlog pressure. Critical stability concerns persist around OAuth token handling, plugin API compatibility, and memory indexing regressions.

---

## 2. Releases

**No new releases** (2026-03-25).

The project remains on **2026.3.23-2** (released 2026-03-24 per issue timestamps). The 2026.3.22 release introduced significant regressions (Control UI assets missing, WhatsApp plugin crashes, QMD memory index failures) that are driving today's urgent fix activity.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#108](https://github.com/openclaw/openclaw/pull/108) | UI: Update connections UIs for Discord, Signal, iMessage | **Closed** — Connection node parity across platforms |
| [#54097](https://github.com/openclaw/openclaw/pull/54097) | Fix: require `operator.admin` for mutating `/allowlist` commands | **Closed** — Security hardening for internal channel commands |
| [#43788](https://github.com/openclaw/openclaw/pull/43788) | Fix: prevent silent Feishu group message drops on bot-info timeout | **Closed** — Reliability for enterprise messaging |
| [#53715](https://github.com/openclaw/openclaw/pull/53715) | Fix: mark card field as optional in message tool schema | **Closed** — Unblocks Feishu/media-only sends |
| [#53992](https://github.com/openclaw/openclaw/pull/53992) | Feat: add missing OpenAI-compatible endpoints (`/v1/models`, `/v1/embeddings`) | **Closed** — Major compatibility win for Open WebUI, LobeChat, LibreChat |
| [#44969](https://github.com/openclaw/openclaw/pull/44969) | Fix: normalize baseUrl for custom Google Generative AI providers | **Closed** — Enables provider isolation for Google AI |
| [#44083](https://github.com/openclaw/openclaw/pull/44083) | Gateway: parse Compose-style gateway port env values | **Closed** — Fixes Docker/env port parsing bugs |

### Significant Open PRs Advancing

| PR | Description | Stage |
|:---|:---|:---|
| [#53905](https://github.com/openclaw/openclaw/pull/53905) | **Linux: Introduce native GTK4 companion app (v1)** | Implements #75 — Major platform gap closure |
| [#47604](https://github.com/openclaw/openclaw/pull/47604) | **Android: add Wear OS app MVP** | XL feature — Wearable expansion |
| [#52986](https://github.com/openclaw/openclaw/pull/52986) | **Feature: add QQ channel** | XL feature — China market expansion |
| [#54088](https://github.com/openclaw/openclaw/pull/54088) | **Feat: add `/tools` runtime availability view** | XL — Critical UX improvement for tool transparency |
| [#53520](https://github.com/openclaw/openclaw/pull/53520) | **Feat: migrate export/import for cross-device migration** | XL — Data portability, user retention |
| [#53948](https://github.com/openclaw/openclaw/pull/53948) | **Local models: standardize tool calling with ReAct fallback** | L — Addresses "infinite recursion" with small models |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 48 | 65 | **Platform parity** | Users demand desktop apps matching macOS feature set; Linux PR #53905 in progress, Windows still unaddressed |
| [#49836](https://github.com/openclaw/openclaw/issues/49836) Phishing scam — fake airdrop | 33 | 18 | **Security/brand protection** | Project popularity attracting scammers; need proactive monitoring |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) WeChat plugin incompatible with 2026.3.22+ | 31 | 0 | **Plugin API stability** | Third-party plugins breaking on SDK changes; ESM/CJS migration pain |
| [#52823](https://github.com/openclaw/openclaw/issues/52823) Control UI assets not found (regression) | 31 | 12 | **Release quality** | Build process gaps; fix PR #53373 adds release checks |
| [#52808](https://github.com/openclaw/openclaw/issues/52808) dist/control-ui/ missing from npm package | 30 | 61 | **Critical regression** | Packaging pipeline failure; highest user impact |

### Analysis

The top issues reveal **tension between rapid iteration and stability**: users want new platforms (Linux/Windows) but core functionality broke in 2026.3.22. The WeChat plugin incompatibility (#52885) signals ecosystem fragility — third-party developers struggle to track internal API changes. The phishing issue (#49836) suggests the project has reached visibility threshold requiring security operations investment.

---

## 5. Bugs & Stability

### Critical (Data Loss / Security / Complete Failure)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#53955](https://github.com/openclaw/openclaw/issues/53955) | **QMD Memory Index Bug: 0/10 files indexed after 2026.3.23-2** — `memory_search` returns empty | **REGRESSION** — No fix PR identified |
| [#53317](https://github.com/openclaw/openclaw/issues/53317) | Gateway overwrites fresh OAuth token with stale cache on startup (openai-codex) | **REGRESSION** — No fix PR identified |
| [#53247](https://github.com/openclaw/openclaw/issues/53247) | WhatsApp plugin crashes agent — missing `light-runtime-api` | **REGRESSION** — Plugin files incomplete in package |
| [#52037](https://github.com/openclaw/openclaw/issues/52037) | OpenAI Codex OAuth token refresh not persisting to disk | Open — Token lifecycle reliability |

### High (Feature Broken / Workaround Required)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#53644](https://github.com/openclaw/openclaw/issues/53644) | Discord WebSocket 1006 crashes gateway instead of reconnecting | Open — Crash resilience |
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | `session_send` gives "no session found" — agent-to-agent communication broken | **REGRESSION 2026.3.22** |
| [#52081](https://github.com/openclaw/openclaw/issues/52081) | Feishu plugin fails: `buildChannelConfigSchema is not a function` | **REGRESSION** — Runtime API change |
| [#54039](https://github.com/openclaw/openclaw/issues/54039) | `read` tool prepends workspace root to absolute Windows paths | Open — Path handling bug |

### Medium (Degraded Experience)

| Issue | Description |
|:---|:---|
| [#53363](https://github.com/openclaw/openclaw/issues/53363) | Mistral AI still fails with 422 (supposedly fixed) |
| [#51629](https://github.com/openclaw/openclaw/issues/51629) | Gemini 2.5 Flash `model_not_found` in embedded runtime |
| [#50999](https://github.com/openclaw/openclaw/issues/50999) | Telegram polling stall/restart loop on macOS |
| [#52116](https://github.com/openclaw/openclaw/issues/52116) | Telegram polling client permanently stuck after network failure |

### Stability Assessment

**Concerning pattern**: Three "REGRESSION" labels in 2026.3.22/2026.3.23 releases affecting core features (Control UI, WhatsApp, Feishu, memory search, agent communication). The OAuth token handling has multiple related issues (#53317, #52037, #26322) suggesting systemic auth state management problems.

---

## 6. Feature Requests & Roadmap Signals

### Likely Next Version (2026.3.24+)

| Feature | Signal Strength | Evidence |
|:---|:---|:---|
| **Linux GTK4 companion app** | ⭐⭐⭐ HIGH | PR #53905 open, implements #75 (48 comments, 65👍) |
| **Runtime tools visibility (`/tools`)** | ⭐⭐⭐ HIGH | PR #54088 XL priority — addresses user confusion |
| **Cross-device migration** | ⭐⭐⭐ HIGH | PR #53520 XL — user retention critical |
| **Wear OS support** | ⭐⭐ MEDIUM | PR #47604 active, builds on prior Android work |
| **QQ channel** | ⭐⭐ MEDIUM | PR #52986 XL — market expansion |
| **Local model ReAct fallback** | ⭐⭐ MEDIUM | PR #53948 — addresses small model reliability |

### User-Requested (Not Yet PR'd)

| Issue | Request | Predicted Priority |
|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Windows desktop app | High — Linux in progress, Windows logical next |
| [#21097](https://github.com/openclaw/openclaw/issues/21097) | `thinkingDefault` per-agent config | Medium — cost optimization use case |
| [#50096](https://github.com/openclaw/openclaw/issues/50096) | Long-term memory & knowledge management | High — "agent value proportional to memory" |
| [#41553](https://github.com/openclaw/openclaw/issues/41553) | Layer-specific diagnostics for WSL2 + Windows CDP | Medium — developer experience |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Release quality regressions** | Multiple "worked before, now fails" labels; 2026.3.22 broke Control UI, WhatsApp, memory | 🔴 Critical |
| **OAuth/auth reliability** | Token refresh races, persistence failures, cache corruption | 🔴 Critical |
| **Plugin API instability** | WeChat, Feishu, WhatsApp plugins breaking on SDK changes | 🟡 High |
| **Platform gaps** | No Linux/Windows desktop apps (macOS only) | 🟡 High |
| **Memory/knowledge limitations** | "Agent starts every conversation from zero" — #50096 | 🟡 High |
| **Windows path handling** | Multiple path-related bugs (#54039) | 🟢 Medium |

### Positive Signals

- **Responsive maintainers**: 97 PRs merged/closed in 24h
- **Platform expansion momentum**: Linux, Wear OS, QQ all in active development
- **OpenAI compatibility investment**: #53992 adds endpoints for major third-party UIs
- **Security awareness**: Phishing scam (#49836) rapidly flagged and closed

### Use Cases Emerging

- **Enterprise messaging**: Feishu/Lark, WeChat, QQ — China/Asia market focus
- **Multi-agent orchestration**: PRs #54090, #54089 for `agent.abort`, `runId` in hooks
- **Local/self-hosted AI**: ReAct fallback for small models (#53948), memory indexing (#53955)

---

## 8. Backlog Watch

### Stale Important Issues (Updated but long-running)

| Issue | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#25215](https://github.com/openclaw/openclaw/issues/25215) | ~1 month | SSRF check blocks Clash/mihomo fake-ip range | VPN/proxy users affected; networking compatibility |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) | ~1.5 months | Workspace/extraDirs skills not discovered | Custom skill development blocked |
| [#27473](https://github.com/openclaw/openclaw/issues/27473) | ~1 month | Gateway fails to start: non-loopback Control UI requires `allowedOrigins` | Docker/Podman deployment friction |
| [#23829](https://github.com/openclaw/openclaw/issues/23829) | ~1 month | Fallback chain doesn't traverse across providers | Reliability/cost optimization gap |

### Needs Maintainer Decision

| Issue/PR | Status | Action Needed |
|:---|:---|:---|
| [#50096](https://github.com/openclaw/openclaw/issues/50096) | 10 comments | Memory architecture roadmap — user retention critical |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | 8 comments, 9👍 | OAuth token refresh race — systemic fix needed |
| [#45153](https://github.com/openclaw/openclaw/issues/45153) | 8 comments | SSRF policy configuration ignored — security/compliance |

### Recommendation

The project should consider a **stability sprint** before 2026.4.x feature development. The concentration of OAuth, memory indexing, and plugin API regressions suggests architectural debt in state management and release testing. PR #53373 (release check for Control UI assets) is a good start but needs expansion to plugin validation and token lifecycle testing.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
## Community Digest Analysis — 2026-03-25

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense parallel development** across 11+ active projects, with aggregate daily activity exceeding 800 PR/issue updates. The landscape shows clear bifurcation: **mature platforms** (OpenClaw, LobsterAI, Moltis) are stabilizing enterprise features while **emerging projects** (TinyClaw, EasyClaw, ZeptoClaw) rapidly iterate on core orchestration. A critical **supply chain security incident** (NanoBot's litellm compromise) has triggered industry-wide dependency audits. Voice/multimodal integration, memory architecture, and enterprise channel support (WeChat, DingTalk, WeCom) are universal priorities, with most projects racing toward production readiness ahead of anticipated H2 2026 commercial deployments.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | None (stabilizing) | ⭐⭐⭐⭐☆ | High volume, regression recovery |
| **NanoBot** | 21 | 51 | None | ⭐⭐⭐☆☆ | Security crisis response |
| **Zeroclaw** | 50 | 50 | v0.6.0→v0.6.2 | ⭐⭐⭐⭐☆ | Rapid patch cycle, branch chaos |
| **PicoClaw** | 17 | 68 | v0.2.3-nightly | ⭐⭐⭐⭐☆ | Feature expansion, config debt |
| **NanoClaw** | 13 | 50 | None | ⭐⭐⭐☆☆ | High velocity, low community voice |
| **NullClaw** | 0 | 6 | None | ⭐⭐⭐☆☆ | Maintainer-driven, zero backlog |
| **IronClaw** | 14 | 49 | None | ⭐⭐⭐⭐☆ | Enterprise pivot, pre-release push |
| **LobsterAI** | 23 | 50 | None (post-v2026.3.24) | ⭐⭐⭐⭐⭐ | Performance focus, MCP maturation |
| **TinyClaw** | 0 | 8 | v0.0.17→v0.0.19 | ⭐⭐⭐⭐☆ | Solo sprint, zero community |
| **Moltis** | 4 | 17 | None | ⭐⭐⭐⭐⭐ | Surgical precision, infrastructure |
| **CoPaw** | 50 | 50 | v0.2.0 | ⭐⭐⭐☆☆ | Release stress, regression cluster |
| **ZeptoClaw** | 2 | 29 | v0.8.1→v0.8.2 | ⭐⭐⭐⭐☆ | Telegram hardening, protocol work |
| **EasyClaw** | 0 | 3 | None | ⭐⭐☆☆☆ | UI polish, insular development |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Gap |
|:---|:---|:---|
| **Platform coverage** | macOS (mature), Linux GTK4 (PR #53905), Wear OS, QQ | Most peers: 2-3 channels; OpenClaw: 8+ |
| **OpenAI compatibility** | `/v1/models`, `/v1/embeddings` endpoints (#53992) | LobsterAI building; others fragmented |
| **Community scale** | 500 issues/PRs daily = 10x median project | ZeptoClaw: 29 PRs; Moltis: 17 |
| **Enterprise messaging** | Feishu, WeChat plugin ecosystem, Signal, iMessage | IronClaw: NEAR-coupled; NanoClaw: messenger-only |

### Technical Approach Differences
- **OpenClaw**: Plugin-centric architecture with formalized SDK; third-party WeChat/Feishu plugins create ecosystem network effects
- **IronClaw**: WASM extension model with NEAR blockchain integration; heavier runtime, different trust model
- **Moltis**: Rust-native, memory-system-first; tiered recall architecture vs. OpenClaw's QMD indexing
- **NanoBot**: Direct SDK migration post-litellm; simpler stack, fewer abstractions

### Community Size Comparison
OpenClaw operates at **ecosystem scale** (500 daily items) comparable to combined activity of NanoBot + Zeroclaw + PicoClaw + CoPaw. This creates **feedback velocity advantages** (71 issues closed in 24h) but also **backlog pressure** (429 open issues). Only LobsterAI matches per-contributor efficiency (50 PRs with 23 issues).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Memory architecture overhaul** | OpenClaw, Moltis, NullClaw, NanoClaw, PicoClaw | OpenClaw #53955 QMD regression; Moltis #483 tiered recall; NullClaw #711/#712 cross-sync + knowledge graph; PicoClaw #1919 "Seahorse" biological memory |
| **Voice/ASR-TTS integration** | PicoClaw, LobsterAI, Moltis | PicoClaw #1648 (22 comments); LobsterAI #722 voice input request; Moltis Matrix voice STT (#482) |
| **Enterprise channel hardening** | OpenClaw, PicoClaw, CoPaw, IronClaw, ZeptoClaw | WeCom WebSocket (PicoClaw #1408), WeChat QR login (CoPaw #2123), DingTalk robustness (LobsterAI #751/#691), Telegram multimodal (ZeptoClaw #420) |
| **MCP ecosystem integration** | LobsterAI, Moltis, NanoClaw | LobsterAI #728/#724 MCP onboarding pain; Moltis #479 Docker+Node.js for MCP; NanoClaw native SDK pivot |
| **Cost/token optimization** | NanoBot, OpenClaw, CoPaw | NanoBot #2375 560k token/heartbeat; OpenClaw local model ReAct fallback (#53948); CoPaw #2215 compaction skip-summary |
| **Multi-agent orchestration** | CoPaw, Zeroclaw, IronClaw, NanoClaw | CoPaw v0.2.0 inter-agent; Zeroclaw #4166 A2A protocol; IronClaw #1557 engine v2; NanoClaw #1273 multi-session web |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Universal channel reach + plugin ecosystem | Power users, cross-platform deployers | TypeScript/Node.js, plugin SDK, multi-runtime |
| **IronClaw** | NEAR AI integration + WASM extensions | Blockchain-adjacent developers, decentralized apps | Rust + WASM, libsql/PostgreSQL, crypto-native auth |
| **Moltis** | Performance-optimized local LLM inference | Self-hosters, latency-sensitive deployments | Rust-native, KV cache optimization, SQLite knowledge graph |
| **LobsterAI** | Polished desktop UX + enterprise observability | Knowledge workers, team collaboration | Electron + React, Opik/LangFuse tracing, Youdao ecosystem |
| **NanoBot** | Minimal abstraction, rapid security response | Security-conscious operators, cost-optimizers | Direct SDK calls, stateless architecture, Honcho memory |
| **Zeroclaw** | Agent self-improvement + memory isolation | Experimenters, multi-agent researchers | SkillImprover pipeline, MuninnDB backend, per-agent memory |
| **CoPaw** | Inter-agent communication foundation | Enterprise teams, workflow automation | Built-in QA agent, local judge routing, skill marketplace |
| **TinyClaw** | Extreme minimalism + rapid iteration | Embedded/edge deployers, solo operators | Single-maintainer velocity, zero backlog, grammY Telegram |
| **PicoClaw** | Biological memory inspiration | Research-oriented builders, long-horizon agents | Seahorse hippocampus-inspired architecture |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Pre-1.0 Velocity)
| Project | Signal | Risk |
|:---|:---|:---|
| **TinyClaw** | 3 releases/24h, 8 PRs solo | Zero community validation |
| **Zeroclaw** | v0.6.0→v0.6.2 same day | Branch management failures (#4093, #4537) |
| **CoPaw** | v0.2.0 major release | CPU spin regression (#2218), Docker data loss |

### Tier 2: Stabilization with Feature Expansion
| Project | Signal | Focus |
|:---|:---|:---|
| **OpenClaw** | No release, 500 items, regression fixes | Platform parity (Linux, Wear OS), OAuth hardening |
| **LobsterAI** | Post-release polish, performance PRs | Virtual scroll, MCP reliability, Copilot integration |
| **ZeptoClaw** | Patch releases, Telegram hardening | Multimodal support, ACP protocol standardization |
| **PicoClaw** | Nightly builds, WeCom consolidation | Voice integration, config durability |

### Tier 3: Architectural/Foundation Work
| Project | Signal | Trajectory |
|:---|:---|:---|
| **Moltis** | 17 PRs, 4 issues, 100% merge rate | Infrastructure maturity; awaiting macOS signing (#422) |
| **NullClaw** | 6 open PRs, 0 issues, no releases | Memory system unification; pre-community |
| **IronClaw** | Enterprise P1/P2 issues filed by maintainer | NEAR→enterprise pivot; SSO/RBAC buildout |

### Tier 4: Insular/Pre-Launch
| Project | Signal | Concern |
|:---|:---|:---|
| **EasyClaw** | 3 UI PRs, zero issues/comments | No external feedback loops; test coverage unknown |
| **NanoClaw** | 50 PRs, zero reactions/comments | Self-merging pattern; messenger-centric limits adoption |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Supply chain security as first-class concern** | NanoBot litellm incident → #2448 native SDK migration; Moltis #419 configurable MCP timeouts | Audit abstraction layers; prefer direct SDKs; implement dependency pinning + SBOM |
| **Local-first AI acceleration** | Moltis #476 KV cache optimization (2-3x speedup); OpenClaw #53948 local model ReAct; IronClaw #1611 Ollama instability priority | Design for offline operation; expect provider-agnostic tooling demand |
| **Memory as competitive moat** | "Agent value proportional to memory" — OpenClaw #50096; tiered recall (Moltis #483); biological memory (PicoClaw #1919); cross-instance sync (NullClaw #711) | Invest in memory architecture early; vector → graph → sync is emerging stack |
| **Enterprise messaging as distribution channel** | WeChat ClawBot urgency (CoPaw #2043: 9👍); DingTalk/WeCom/QQ across all China-facing projects | Prioritize official IM SDKs over webhooks; expect QR-login patterns |
| **Cost predictability as UX requirement** | NanoBot #2375 "$10+ per heartbeat" shock; CoPaw #2215 compaction cost control | Implement token budgets, visibility tools; stateless background operations |
| **MCP as table stakes, configuration as friction** | LobsterAI #728/#724 MCP "0 tools" confusion; Moltis #479 Docker+Node.js for MCP | Simplify MCP onboarding; consider hosted MCP marketplaces |
| **Agent-to-agent protocols emerging** | CoPaw v0.2.0 inter-agent; Zeroclaw #4166 A2A; ZeptoClaw #356 ACP; NanoClaw #1273 multi-session | Design for composability; expect ACP/MCP convergence |

---

**Report compiled from 11 project digests covering 1,000+ GitHub items, 24-hour window ending 2026-03-25.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-25

## 1. Today's Overview

NanoBot shows **extremely high community activity** with 51 PRs and 21 issues updated in 24 hours, indicating a rapidly evolving codebase under active development. However, **no new releases** were published today, leaving users exposed to critical security vulnerabilities in the wild. The project is experiencing a **supply chain security crisis** following the discovery of malicious code in the `litellm` dependency, with the community scrambling to respond. Multiple architectural fixes are in flight for memory/heartbeat token bloat issues that cause catastrophic cost spikes. Overall project health is **stressed but responsive** — high velocity with urgent security and stability challenges requiring immediate maintainer attention.

---

## 2. Releases

**None today.**

---

## 3. Project Progress

### Merged/Closed PRs (11 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#2448](https://github.com/HKUDS/nanobot/pull/2448) | **refactor: replace litellm with native openai + anthropic SDKs** — Complete removal of `litellm` dependency, replaced with direct SDK calls | **Critical security response** — eliminates compromised dependency entirely |
| [#2441](https://github.com/HKUDS/nanobot/pull/2441) | **security: prevent litellm 1.82.7+** — Version pinning to block poisoned releases | Short-term mitigation, superseded by #2448 |
| [#2428](https://github.com/HKUDS/nanobot/pull/2428) | **Fix/Feat(WeiXin): Adapt to WeChat plugin 1.0.3** — `routeTag`/`SKRouteTag` header support, QR code auto-refresh, persistent `context_token` | Enterprise WeChat integration stability |
| [#2423](https://github.com/HKUDS/nanobot/pull/2423) | **fix: cherry-pick shell zombie process reaping from upstream** — Prevents zombie process accumulation on long-running agents | Infrastructure reliability |
| [#2426](https://github.com/HKUDS/nanobot/issues/2426) | *(Issue closed)* SkillHub installation crash resolved | User support |

### Key Advances

- **Security architecture overhaul**: Native SDK migration (#2448) represents a major architectural pivot away from abstraction-layer dependencies
- **Enterprise channel hardening**: WeChat plugin modernization for production deployments
- **Process management**: Zombie reaping fix addresses operational issues in daemonized deployments

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments/Reactions | Analysis |
|:---|:---|:---|:---|
| 1 | [#2375](https://github.com/HKUDS/nanobot/issues/2375) Heartbeat session history causes **560k token usage per heartbeat** | 9 comments, 👍1 | **Cost catastrophe** — users face $10+ per automated check; architectural flaw in session persistence |
| 2 | [#2443](https://github.com/HKUDS/nanobot/issues/2443) LiteLLM quarantined — credential stealer discovered | 5 comments | **Supply chain attack** — PyPI security incident affecting entire dependency tree |
| 3 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) **Critical**: Malicious `litellm_init.pth` data-exfiltration code in `nanobot-ai` v0.1.4.post5 | 4 comments, 👍3 | **Active malware in distributed package** — immediate user action required |
| 4 | [#2329](https://github.com/HKUDS/nanobot/issues/2329) Custom model provider works in CLI but fails in Feishu channel | 5 comments | Configuration propagation inconsistency across channels |
| 5 | [#2442](https://github.com/HKUDS/nanobot/issues/2442) Cannot perform continuous/autonomous actions | 3 comments | Core agent autonomy limitations — user expectation vs. architecture gap |

### Underlying Needs

- **Cost control**: Users need predictable, bounded token usage for background operations
- **Security transparency**: Dependency auditing and reproducible builds
- **Cross-channel parity**: Configuration behavior must be identical across all interfaces
- **Agent autonomy**: Users expect "set and forget" continuous operation, not turn-based interaction

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | Malicious code in distributed PyPI package (`nanobot-ai` v0.1.4.post5) | **Mitigated** by #2448 (remove litellm), #2441 (version block) |
| 🔴 **Critical** | [#2443](https://github.com/HKUDS/nanobot/issues/2443) | LiteLLM supply chain compromise — credential stealing | **Same root cause**, same fixes |
| 🟡 **High** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Unbounded token consumption (560k/heartbeat) due to session history accumulation | **PR #2430** in review — makes heartbeat stateless |
| 🟡 **High** | [#2369](https://github.com/HKUDS/nanobot/issues/2369) | Cron reminders silently dropped by evaluator | **PR #2449** open — fixes notification logic |
| 🟡 **High** | [#2437](https://github.com/HKUDS/nanobot/issues/2437) | Tool output truncation inconsistency — 16k disk vs. full context in LLM request | No fix yet — architectural mismatch |
| 🟡 **High** | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | `minimax-m2.7` via Ollama Cloud fails on 2nd+ request | No fix yet — provider-specific |
| 🟡 **High** | [#2432](https://github.com/HKUDS/nanobot/issues/2432) | `'NoneType' object is not subscriptable` — null handling in agent loop | No fix yet — user-provided patch unverified |
| 🟠 **Medium** | [#2298](https://github.com/HKUDS/nanobot/issues/2298) | Infinite tool calling loops with smaller/local models | No fix yet — needs loop detection |
| 🟠 **Medium** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) | `openai_codex` prompt cache key changes every turn — no actual caching | No fix yet — provider implementation bug |
| 🟠 **Medium** | [#2373](https://github.com/HKUDS/nanobot/issues/2373) | MiniMax API error on invalid function arguments JSON | No fix yet — provider/tool interface issue |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Stateless heartbeat / token optimization** | #2430, #2435 | **Very High** | Critical cost issue, multiple PRs in flight, user pain extreme |
| **Native SDK provider architecture** | #2448 | **Merged** | Already landed — will be in next release |
| **Long-term memory (Honcho integration)** | #2183 | High | Roadmap item #39, substantial PR open, opt-in design reduces risk |
| **Event-driven hook system + skill disable** | #1934 | Medium | Large architectural change, needs review bandwidth |
| **Gateway Web UI** | #1650 | Medium | Demo video provided, fixes #510, UI completeness unclear |
| **OpenAI-compatible endpoint channel** | #1861 | Medium | Enables external integrations, significant new surface area |
| **Sandboxed exec (bubblewrap)** | #1940 | Medium | Security improvement, ~50 lines, needs testing |
| **MCP ImageContent support** | #2438 | Medium | Specific capability gap, well-scoped |
| **VOIP memory context** | #2444 | Low | New PR, unclear scope |
| **Matrix streaming support** | #2447 | Low | New PR, niche channel |

**Predicted v0.1.5 contents**: LiteLLM removal, stateless heartbeat, Honcho memory (opt-in), security hardening, WeChat fixes.

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Feedback | Frequency |
|:---|:---|:---|
| **Cost shock** | "560k tokens in ONE go" — heartbeat costs exceeding human conversation budgets | Repeated, urgent |
| **Security fear** | Active malware discovery erodes trust in package distribution | Acute, today |
| **Silent failures** | Cron reminders, tool errors fail without user notification | Multiple reports |
| **Channel inconsistency** | CLI works, Feishu/WeChat/Discord behave differently | Recurring pattern |
| **Autonomy gap** | Cannot delegate continuous background tasks | Expectation mismatch |
| **Model-specific fragility** | Smaller models cause loops; specific providers (MiniMax, Ollama Cloud) fail | Integration depth issues |

### Use Cases Emerging

- **Email monitoring agent**: Automated inbox checking with skill installation (blocked by cost/token issues)
- **Log analysis assistant**: Reading application logs (blocked by truncation/context mismatch)
- **Voice transcription**: Whisper integration working but needs language specification
- **Enterprise messaging**: WeChat/Feishu/QQ as primary interfaces (active development)

### Satisfaction Signals

- Transcription skill "not fast but very accurate" — capability appreciation
- Active PR contributions — engaged developer community
- Rapid security response — organizational responsiveness

---

## 8. Backlog Watch

| Item | Age | Issue | Risk |
|:---|:---|:---|:---|
| Matrix auth encryption | 18 days | [#1681](https://github.com/HKUDS/nanobot/issues/1681) | E2EE broken — privacy-sensitive users affected |
| Gemini API key handling | 48 days | [#144](https://github.com/HKUDS/nanobot/issues/144) | Provider support gap |
| OAuth subscription alternatives | 8 days | [#2170](https://github.com/HKUDS/nanobot/issues/2170) | Business model flexibility |
| Vietnamese README | 28 days | [#1164](https://github.com/HKUDS/nanobot/pull/1164) | Localization contribution stalled |
| OpenAI Codex Docker auth | 25 days | [#1358](https://github.com/HKUDS/nanobot/issues/1358) | Deployment friction |

### Maintainer Attention Needed

1. **Immediate**: Security incident coordination — advisory, release timeline, migration guide
2. **This week**: Token/cost architecture review — #2375, #2430, #2435, #2437 are related
3. **Ongoing**: Channel parity testing framework — prevent CLI vs. channel divergence

---

*Digest generated from 51 PRs and 21 issues updated 2026-03-24. Data source: github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-03-25

## 1. Today's Overview

Zeroclaw shows **exceptional velocity** with 100 items updated in 24 hours (50 issues, 50 PRs) and 4 rapid-fire releases (v0.6.0 → v0.6.2). The project is in active stabilization mode following the v0.6.x series launch, with maintainers aggressively triaging user-reported regressions. A critical pattern emerges: **branch management failures** — multiple PRs merged to deleted dev branches never reached master, causing feature loss and user confusion. Community engagement is strong with multilingual participation (Chinese, English), though severity S0/S1 bugs indicate production-readiness gaps.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| **v0.6.2** | 2026-03-24 | Incremental polish; no breaking changes |
| **v0.6.1** | 2026-03-24 | Incremental polish |
| **v0.6.1-beta.637** | 2026-03-24 | Pre-release; no changelog |
| **v0.6.0** | 2026-03-24 | Incremental polish |

**Assessment:** Rapid patch releases suggest hotfix mode. Changelogs are **concerningly sparse** ("incremental improvements and polish" repeated verbatim) — users cannot assess upgrade risk. No migration notes provided despite v0.5 → v0.6 behavioral changes reported (see #4496).

---

## 3. Project Progress

### Merged/Closed PRs Today (31 total, selected highlights)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | @theonlyhennygod | **Skill self-improvement + pipeline tool** — `SkillImprover` with cooldown tracking, atomic writes | Major agent autonomy feature |
| [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) | @theonlyhennygod | **Safety prompt rewrite** — reduces AI conservatism, "Execute tools directly" vs. restrictive language | Fixes #4496 "IQ drop" complaints |
| [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) | @theonlyhennygod | **Media marker leak detection fix** — exempts `[IMAGE:...]` etc. from false "high-entropy token" redaction | Fixes #4604 image delivery breakage |
| [#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613) | @theonlyhennygod | **Windows `sync_directory` implementation** | Cross-platform parity |
| [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) | @theonlyhennygod | **WhatsApp Web in Docker/releases** — adds feature to official builds | Eliminates custom build need |
| [#4618](https://github.com/zeroclaw-labs/zeroclaw/pull/4618) | @theonlyhennygod | **Onboarding fixes** — `--quick` flag, `ZEROCLAW_INTERACTIVE` env override | Fixes #3658 regression |
| [#4620](https://github.com/zeroclaw-labs/zeroclaw/pull/4620) | @joehoyle | **Streaming REPL + Ctrl+C cancellation** | UX improvement for `zeroclaw agent` |
| [#4424](https://github.com/zeroclaw-labs/zeroclaw/pull/4424) | @aecs4u | ~~Daemon hot-reload on SIGHUP~~ **CLOSED unmerged** | Lost to branch mishap? |

**Pattern:** @theonlyhennygod is carrying critical stabilization work (6 PRs merged today). @aecs4u's hot-reload and compaction engine PRs (#4424, #4423) were **closed without merge** — potential feature loss.

---

## 4. Community Hot Topics

| Issue/PR | Comments | 🔍 Underlying Need |
|----------|----------|------------------|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) — Invalid schema for `channel_ack_config` | 7 | **Runtime stability** — function schema validation failing with OpenAI |
| [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) — Inter-process communication for agents | 7 | **Multi-agent orchestration** — users want distributed agent systems on single host |
| [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) — FreeBSD platform support | 6 | **Enterprise/server deployment** — TrueNAS, jails, BSD infrastructure |
| [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454) — Web Dashboard 404 | 5 | **First-run experience** — dashboard assets missing in fresh installs |
| [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093) — Streaming work stranded on deleted dev branch | 4 | **Process failure** — critical feature loss due to branch management |

**Analysis:** Users are pushing Zeroclaw into production environments (FreeBSD servers, multi-agent setups, IDE integrations via ACP #2456). The "stranded code" issue (#4093) reveals **infrastructure debt** threatening feature reliability.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** — Data loss/security | [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) — (unspecified, image-only report) | **OPEN** | None |
| **S0** — Data loss/security | [#4532](https://github.com/zeroclaw-labs/zeroclaw/issues/4532) — `.secret_key` wrong owner | CLOSED | [#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613) area |
| **S0** — Data loss/security | [#4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445) — Docker/Podman file I/O denied | CLOSED | — |
| **S0** — Data loss/security | [#4576](https://github.com/zeroclaw-labs/zeroclaw/issues/4576) — WhatsApp Web Docker hardcoded | CLOSED | [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) |
| **S1** — Workflow blocked | [#4496](https://github.com/zeroclaw-labs/zeroclaw/issues/4496) — "IQ drop" in v0.5+, over-conservative AI | CLOSED | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) |
| **S1** — Workflow blocked | [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485) — Security policy ignored | CLOSED | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) related |
| **S1** — Workflow blocked | [#4604](https://github.com/zeroclaw-labs/zeroclaw/issues/4604) — Image delivery broken by leak detector | CLOSED | [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) |
| **S1** — Workflow blocked | [#4567](https://github.com/zeroclaw-labs/zeroclaw/issues/4567) — Azure AI streaming error | CLOSED | — |
| **S1** — Workflow blocked | [#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523) — Web chat "unknown does not support streaming" | CLOSED | — |
| **S1** — Workflow blocked | [#4550](https://github.com/zeroclaw-labs/zeroclaw/issues/4550) — QQ channel websocket loop | CLOSED | — |
| **S1** — Workflow blocked | [#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623) — ARMv6 binary segfault | **OPEN** | [#4569](https://github.com/zeroclaw-labs/zeroclaw/pull/4569) insufficient |
| **S1** — Workflow blocked | [#4537](https://github.com/zeroclaw-labs/zeroclaw/issues/4537) — WhatsApp cron delivery broken (PR to wrong branch) | **OPEN** | Needs re-merge |

**Critical Concern:** Two S1 bugs remain open with **infrastructure-level failures** — ARMv6 support broken despite CI fix, and WhatsApp cron delivery stranded by branch mishap (echo of #4093 pattern).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.7 |
|---------|----------|-------------------|
| **A2A (Agent-to-Agent) protocol** | [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) — OPEN | **High** — PR active, multi-agent demand confirmed |
| **ACP Server Mode** (Zed/IDE integration) | [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) — CLOSED | **Medium** — closed but not implemented? Needs verification |
| **MuninnDB memory backend** | [#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607) — OPEN | **High** — PR active, external memory demand |
| **Per-agent memory isolation** | [#4626](https://github.com/zeroclaw-labs/zeroclaw/pull/4626) — OPEN | **High** — PR active today |
| **Discord streaming** | [#4551](https://github.com/zeroclaw-labs/zeroclaw/pull/4551) — OPEN | **Medium** — UX improvement, community PR |
| **Claude Code full agent mode** | [#3911](https://github.com/zeroclaw-labs/zeroclaw/pull/3911) — OPEN | **Medium** — stalled? Last update 6 days |
| **FreeBSD binaries** | [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) — CLOSED | **Unclear** — closed without merge? User may reopen |
| **Autonomous skill creation/self-improvement** | [#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) — CLOSED | **Shipped** — [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) merged |

---

## 7. User Feedback Summary

### 😤 Pain Points
- **"IQ drop" regression** (#4496): v0.5+ default prompts made AI "极度保守" (extremely conservative), refusing basic commands like `ls /` despite full autonomy settings — **fixed in #4615**
- **Branch management chaos**: Users discovering features were "merged" but never shipped (#4093, #4537)
- **Windows friction**: Setup complexity, npm path errors (#4494), missing feishu in prerelease (#3693)
- **Docker gaps**: Missing WhatsApp Web support, file I/O permission issues

### ✅ Satisfaction Drivers
- **Rapid maintainer response**: Critical bugs closed same day (#4604, #4485)
- **Memory/skill system maturation**: Self-improvement, pipeline tools, MuninnDB integration
- **Multi-platform expansion**: FreeBSD request shows enterprise interest

### 🎯 Use Cases Emerging
- **Raspberry Pi multi-agent clusters** (#4166: "8 MB each, different personas")
- **IDE-integrated coding agents** (#2456: ACP for Zed)
- **Enterprise messaging** (WhatsApp Web, QQ, Discord with streaming)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) — S0 bug (image-only, no text) | 8 days | **High** — S0 open with no assignee | Maintainer triage, request info |
| [#4298](https://github.com/zeroclaw-labs/zeroclaw/issues/4298) — Partnership inquiry | 1 day | Low | Commercial decision, not technical |
| [#4363](https://github.com/zeroclaw-labs/zeroclaw/issues/4363) — Push fixups vs. superseding PRs | 1 day | **Medium** — contributor experience | Process adoption |
| [#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623) — ARMv6 segfault | 0 days | **High** — CI fix failed | Hardware-specific debugging |
| [#4537](https://github.com/zeroclaw-labs/zeroclaw/issues/4537) — WhatsApp cron to wrong branch | 0 days | **High** — feature regression | Re-merge #2116 or equivalent |

**Infrastructure Debt Alert:** The "merged to wrong branch" pattern (#4093, #4537) suggests **Git workflow review needed** to prevent feature loss.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-25

---

## 1. Today's Overview

PicoClaw shows **high development velocity** with 68 PRs updated in 24 hours (44 merged/closed, 24 open) and 17 active issues. The project is in active feature expansion mode, particularly around **voice/ASR-TTS integration**, **WeCom channel consolidation**, and **configuration system hardening**. A nightly build for v0.2.3 was released, indicating preparation for a stable release. The community is actively engaged with substantial technical discussions on architecture proposals. However, **configuration persistence bugs** and **WebSocket/port detection issues** remain pain points affecting user experience.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.3-nightly.20260324.4d7a629b](https://github.com/sipeed/picoclaw/compare/v0.2.3...main) | Nightly | Automated build; may be unstable. No breaking changes documented. |

**Migration/Usage:** Caution advised for production deployments. Full changelog compares against v0.2.3 stable.

---

## 3. Project Progress

### Merged/Closed PRs Today (44 total, key highlights)

| PR | Type | Description | Impact |
|:---|:---|:---|:---|
| [#1929](https://github.com/sipeed/picoclaw/pull/1929) | Bug Fix | Security credentials now applied before config validation in web handlers | Fixes config save failures when tokens stored in `.security.yml` |
| [#1979](https://github.com/sipeed/picoclaw/pull/1979) | Bug Fix | Skip heartbeat when agent has active turn | Prevents conversation interruption by autonomous heartbeat |
| [#1967](https://github.com/sipeed/picoclaw/pull/1967) | Feature | Web authentication to prevent LLM sandbox bypass | Security hardening for HTTP API |
| [#1787](https://github.com/sipeed/picoclaw/pull/1787) | Feature | WeCom media upload via WebSocket API | Enables rich media in Enterprise WeChat |
| [#1408](https://github.com/sipeed/picoclaw/pull/1408) | Feature | WeCom WebSocket (`wecom_ws`) channel support | Stable 2-day tested channel with auto-reconnect |
| [#1955](https://github.com/sipeed/picoclaw/pull/1955) | Refactor | Unified `channels.wecom` replacing legacy split | Consolidates `wecom`/`wecom_app`/`wecom_aibot` into single channel |
| [#1977](https://github.com/sipeed/picoclaw/pull/1977) | Bug Fix | Prevent virtual models from being persisted | Fixes multi-key model expansion pollution |
| [#1902](https://github.com/sipeed/picoclaw/pull/1902) | Bug Fix | Persist disabled placeholder settings | Resolves [#1774](https://github.com/sipeed/picoclaw/issues/1774) |
| [#1975](https://github.com/sipeed/picoclaw/pull/1975) | Build Fix | Exclude matrix on unsupported mipsle/netbsd targets | CI stability |
| [#1241](https://github.com/sipeed/picoclaw/pull/1241) | Bug Fix | WeCom bot XML message parsing | Channel reliability |

**Key Advancement:** WeCom ecosystem is being **completely rebuilt** around WebSocket with unified architecture, replacing fragmented legacy implementations.

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1648](https://github.com/sipeed/picoclaw/issues/1648) TTS/ASR Support | 22 | **Highest community interest**. Architecture proposal for voice interaction; PR [#1642](https://github.com/sipeed/picoclaw/pull/1642) exists but needs gateway integration. Underlying need: **multimodal AI agents** for voice-enabled applications. |
| 2 | [#1941](https://github.com/sipeed/picoclaw/issues/1941) Config Wiped | 11 | **Critical user pain**. Configuration loss on Telegram channel setup. Suggests **state management fragility** in config system. |
| 3 | [#1737](https://github.com/sipeed/picoclaw/issues/1737) Missing port 18800 docs | 7 | Documentation gap causing WebSocket connection failures. Underlying need: **better launcher mode documentation** for Docker/networked deployments. |

**Emerging Pattern:** Users are pushing for **production-ready deployment** (voice, stable config, documented networking), moving beyond hobbyist use.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#1941](https://github.com/sipeed/picoclaw/issues/1941) Config Wiped | Open | None | Complete configuration loss; affects Telegram users specifically |
| 🔴 **High** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron `deliver=false` discards LLM response | Open | None | Silent message loss; root cause identified in `pkg/tools/cron.go` |
| 🟡 **Medium** | [#1737](https://github.com/sipeed/picoclaw/issues/1737) Port 18800 undocumented | Open | [#1957](https://github.com/sipeed/picoclaw/pull/1957) | WebSocket port detection fix in progress |
| 🟡 **Medium** | [#1901](https://github.com/sipeed/picoclaw/issues/1901) No API key for model mode | Open | None | Startup crash with Step model; config validation issue |
| 🟡 **Medium** | [#1936](https://github.com/sipeed/picoclaw/issues/1936) Telegram failing in Termux | Open | None | Mobile/ARM deployment issue |
| 🟡 **Medium** | [#1946](https://github.com/sipeed/picoclaw/issues/1946) Cron not working | Open | None | Time-range scheduling fails; immediate scheduling works |
| 🟢 **Low** | [#1973](https://github.com/sipeed/picoclaw/issues/1973) Missing restart indicator | Open | [#1978](https://github.com/sipeed/picoclaw/pull/1978) | UX inconsistency; unified fix proposed |

**Stability Assessment:** Config system reliability is the **primary risk area**. Multiple related bugs suggest architectural tension between `.security.yml`, web UI, and runtime config.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood v0.2.3+ | Rationale |
|:---|:---|:---:|:---|
| **TTS/ASR Voice Integration** | [#1648](https://github.com/sipeed/picoclaw/issues/1648), [#1939](https://github.com/sipeed/picoclaw/pull/1939) | ⭐⭐⭐⭐⭐ | PR exists, tested in Discord/Telegram/WeChat; aligns with "PicoClaw Audio" architecture |
| **Biological Memory System (Seahorse)** | [#1919](https://github.com/sipeed/picoclaw/issues/1919) | ⭐⭐⭐⭐☆ | Research-stage but high ambition; hippocampus-inspired short/long-term memory |
| **Web Chat Streaming** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | ⭐⭐⭐⭐☆ | Marked roadmap-aligned; common user expectation |
| **Line-based File Reading** | [#1974](https://github.com/sipeed/picoclaw/issues/1974), [#1981](https://github.com/sipeed/picoclaw/pull/1981) | ⭐⭐⭐⭐⭐ | PR open; addresses LLM-usability of byte-based pagination |
| **Azure Skills Whitelisting** | [#1963](https://github.com/sipeed/picoclaw/pull/1963) | ⭐⭐⭐⭐☆ | Security hardening + provider expansion; enterprise-ready |
| **Web Authentication** | [#1967](https://github.com/sipeed/picoclaw/pull/1967) | ⭐⭐⭐⭐⭐ | **Merged**; security-critical for sandboxed deployments |

**Prediction:** v0.2.3 stable will likely include voice (TTS/ASR), unified WeCom, web auth, and line-based file reading.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Impact |
|:---|:---|:---|
| Configuration loss/corruption | Multiple reports | **Production blocker**; destroys trust |
| WebSocket port detection | Docker/Tailscale users | Deployment friction |
| Cron scheduling reliability | Automation users | Core feature unreliable |
| Missing restart notifications | All web UI users | Confusion about config application |

### Positive Signals
- **WeCom WebSocket stability**: "stable communication for two days" ([#1408](https://github.com/sipeed/picoclaw/pull/1408))
- **Voice feature enthusiasm**: 22 comments on architecture proposal
- **Security appreciation**: Authentication PR addresses sandbox bypass concerns

### Use Case Evolution
Users are deploying PicoClaw in **enterprise contexts** (WeCom, Azure, scheduled automation) rather than just personal Telegram bots. This demands **config durability**, **observability**, and **documentation**.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron message loss | 21 days | **Data loss** | Maintainer review; fix PR welcome |
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) TTS/ASR | 9 days | High interest, integration blocked | Decision on [#1642](https://github.com/sipeed/picoclaw/pull/1642) vs [#1939](https://github.com/sipeed/picoclaw/pull/1939) approach |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) Seahorse memory | 2 days | Research scope | Architecture feedback from maintainers |
| [#1936](https://github.com/sipeed/picoclaw/issues/1936) Termux Telegram | 2 days | Mobile platform gap | ARM/Android testing resources |

**Recommendation:** Prioritize [#1058](https://github.com/sipeed/picoclaw/issues/1058) cron fix and [#1941](https://github.com/sipeed/picoclaw/issues/1941) config durability before v0.2.3 stable release.

---

*Digest generated from GitHub activity 2026-03-24. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-25

## 1. Today's Overview

NanoClaw shows **high development velocity** with 50 PRs and 13 issues updated in the last 24 hours, though no new releases were cut. The project is experiencing **active feature expansion** alongside **recurring infrastructure pain points**—particularly around skill branch maintenance automation, which generated 8 nearly identical bot-created issues for merge-forward failures. Community interest remains strong with cross-platform compatibility (OpenCode, GitHub Copilot) and alternative deployment modes (web UI, native credential proxy) emerging as key themes. The maintainer team appears responsive with 15 PRs merged/closed, but the backlog of 35 open PRs suggests review bandwidth constraints.

---

## 2. Releases

**No new releases** (v0.0.0 or otherwise).

---

## 3. Project Progress

### Merged/Closed PRs (15 total, key items):

| PR | Description | Significance |
|:---|:---|:---|
| [#799](https://github.com/qwibitai/nanoclaw/pull/799) | Timezone-aware context for LLM agents | Fixes agents reporting wrong day of week on UTC servers |
| [#1397](https://github.com/qwibitai/nanoclaw/pull/1397) | Fix IPC permission errors when host runs as root | Critical stability fix—prevented infinite `EACCES` loops |
| [#1410](https://github.com/qwibitai/nanoclaw/pull/1410) | Skill: add log analyzer | New operational capability |
| [#1072](https://github.com/qwibitai/nanoclaw/pull/1072) | `/remote-control` command for host-level Claude Code | Feature completed |
| [#1372](https://github.com/qwibitai/nanoclaw/pull/1372) | Fix diagnostics prompt never shown to user | UX improvement |
| [#1400](https://github.com/qwibitai/nanoclaw/pull/1400) | Document OneCLI secrets management | Security documentation |
| [#1399](https://github.com/qwibitai/nanoclaw/pull/1399) | Skill: `/use-native-credential-proxy` | Alternative to OneCLI gateway |

**Key advancement**: Root-cause fixes for production reliability (timezone, IPC permissions) landed alongside security-hardening documentation.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) — Multi-session web channel | 3 comments, 👍×2 | **Strong demand for non-messenger UIs**. User built working alternative; signals messenger-centric design limits adoption in educational/enterprise contexts |
| [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) — OpenCode/JS SDK support | 1 comment, 👍×3 | **Vendor lock-in concern**. Enterprises need multi-provider flexibility; author has working parallel implementation to contribute |

**Underlying needs**: 
- **Deployment flexibility** (web UI, not just Telegram/WhatsApp/Slack/Discord)
- **AI backend portability** (beyond Claude Code/Anthropic)
- **Simplified installation** (reducing OneCLI dependency)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **High** | [#1391](https://github.com/qwibitai/nanoclaw/issues/1391), [#1390](https://github.com/qwibitai/nanoclaw/issues/1390) — `CLAUDE.md` never created for new groups | **Open, 0 comments** | ❌ No PR yet |
| 🟡 **Medium** | [#1412](https://github.com/qwibitai/nanoclaw/issues/1412), [#1411](https://github.com/qwibitai/nanoclaw/issues/1411), [#1406](https://github.com/qwibitai/nanoclaw/issues/1406), [#1405](https://github.com/qwibitai/nanoclaw/issues/1405), [#1404](https://github.com/qwibitai/nanoclaw/issues/1404), [#1403](https://github.com/qwibitai/nanoclaw/issues/1403), [#1396](https://github.com/qwibitai/nanoclaw/issues/1396), [#1395](https://github.com/qwibitai/nanoclaw/issues/1395) — Skill branch merge-forward failures | **Open, bot-created** | ❌ Requires manual resolution |
| 🟢 **Low** | [#1407](https://github.com/qwibitai/nanoclaw/issues/1407) — Telegram emoji reaction MCP tool | **Open, feature request** | ❌ No PR yet |

**Critical gap**: The `CLAUDE.md` creation bug (#1390/#1391) breaks agent identity initialization for new groups—reported twice independently, indicating real user impact. No fix PR exists.

**Infrastructure debt**: 8 identical merge-forward failure issues suggest the skill branch automation is **noisy and potentially ignored** by maintainers.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Version |
|:---|:---|:---|
| **Multi-provider AI backends** | [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) OpenCode, [#1351](https://github.com/qwibitai/nanoclaw/pull/1351) GitHub Copilot SDK | **High** — PR #1351 already open |
| **Web-based channel/UI** | [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) | **Medium** — external implementation exists, needs upstreaming decision |
| **Plugin system** | [#1387](https://github.com/qwibitai/nanoclaw/pull/1387) | **Medium** — PR open, architecture review needed |
| **Persistent graph memory** | [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) mem0 integration | **Medium** — leverages existing infrastructure |
| **Security policy enforcement** | [#1380](https://github.com/qwibitai/nanoclaw/pull/1380) agentsh integration | **Medium** — security-focused, v0.16.6 dependency |
| **Container management CLI** | [#1408](https://github.com/qwibitai/nanoclaw/pull/1408) `clawps` utility | **High** — operational necessity, small scope |
| **CJK name support** | [#1340](https://github.com/qwibitai/nanoclaw/pull/1340) | **High** — fix PR ready, Unicode regex |

**Prediction**: Next release likely includes Copilot SDK support (#1351), `clawps` utility (#1408), and CJK trigger fixes (#1340).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence |
|:---|:---|
| **Messenger-only operation limiting** | "I personally have no use for an agent system that can only be operated from a messenger" — [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) |
| **Claude Code vendor lock-in** | "many companies have other AI providers for different reasons" — [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) |
| **OneCLI complexity** | Native credential proxy skill (#1399) created as escape hatch |
| **Production reliability** | Timezone bugs, stuck sessions, IPC permission errors — all recently fixed |

### Satisfaction Drivers
- **Extensibility**: Users building and contributing skills (log analyzer, mem0, Tirith security scan)
- **Container isolation**: Security-conscious deployments with agentsh integration
- **Active maintenance**: Rapid fixes for production blockers

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) Web channel | 6 days | **High** — addresses adoption barrier | Maintainer decision on upstreaming external implementation |
| [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) OpenCode support | 9 days | **Medium** — PR-ready contribution available | Review author's parallel implementation approach |
| [#1390](https://github.com/qwibitai/nanoclaw/issues/1390)/[#1391](https://github.com/qwibitai/nanoclaw/issues/1391) `CLAUDE.md` bug | 1 day | **High** — breaks new group setup | Assign fix or request PR from reporter |
| Skill branch merge-forward failures (×8) | 1 day | **Medium** — noise vs. signal | Tune automation threshold or batch notifications |

**Recommendation**: The `CLAUDE.md` creation bug should be prioritized as it affects first-time user experience. The web channel (#1273) represents the largest strategic opportunity for user base expansion.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-25

---

## 1. Today's Overview

NullClaw shows **moderate development velocity** with 6 active pull requests updated in the last 24 hours, though no issues activity or releases. The project appears healthy with sustained engineering focus on **memory systems**, **multi-agent synchronization**, **cron reliability**, and **documentation polish**. Notably, all 6 PRs remain open, suggesting either active review cycles or a maintainer bottleneck. The absence of bug reports indicates either stability or underreporting. Development is **internationalized** (Chinese/English bilingual PRs), reflecting a global contributor base.

---

## 2. Releases

**No new releases** — latest release data unavailable.

---

## 3. Project Progress

**No merged or closed PRs today.** All 6 PRs remain in open state, indicating active development but pending integration:

| PR | Focus Area | Status |
|:---|:---|:---|
| [#689](https://github.com/nullclaw/nullclaw/pull/689) | Cron scheduler stability (race conditions, memory leaks) | Awaiting review |
| [#711](https://github.com/nullclaw/nullclaw/pull/711) | Cross-agent memory synchronization | Awaiting review |
| [#669](https://github.com/nullclaw/nullclaw/pull/669) | vLLM/Qwen reasoning compatibility | Awaiting review |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) | Knowledge Graph memory backend (SQLite) | Awaiting review |
| [#707](https://github.com/nullclaw/nullclaw/pull/707) | Pushover environment credential support | Awaiting review |
| [#713](https://github.com/nullclaw/nullclaw/pull/713) | Documentation navigation improvements | Awaiting review |

**Technical momentum areas:**
- **Memory architecture**: Two complementary PRs (#711 cross-instance sync, #712 knowledge graph backend) suggest major memory subsystem expansion
- **Production hardening**: #689 addresses critical daemon reliability issues
- **Ecosystem compatibility**: #669 extends reasoning support to popular open-source inference stacks

---

## 4. Community Hot Topics

**No commented or reacted items** — all PRs show 0 comments and 0 reactions. This indicates:
- Either **early-stage PRs** not yet under community scrutiny
- Or **low community engagement** with the review process
- Possible **maintainer-driven development** with external contributors awaiting feedback

**Most technically significant open PRs by scope:**

| PR | Link | Underlying Need |
|:---|:---|:---|
| #711 Cross-memory synchronization | [PR #711](https://github.com/nullclaw/nullclaw/pull/711) | **Multi-agent deployment** — users need agent state portability across instances for production scaling and failover |
| #689 Cron reliability fixes | [PR #689](https://github.com/nullclaw/nullclaw/pull/689) | **Production stability** — scheduler races and memory leaks blocking reliable background job execution |
| #712 Knowledge Graph memory | [PR #712](https://github.com/nullclaw/nullclaw/pull/712) | **Structured memory retrieval** — moving beyond vector search to relational/semantic entity traversal |

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#689](https://github.com/nullclaw/nullclaw/pull/689) | Scheduler/worker race condition, memory leak, mutex lifetime issues | **Fix proposed**, awaiting merge |
| **Medium** | [#669](https://github.com/nullclaw/nullclaw/pull/669) | Reasoning disabled for custom vLLM/Qwen endpoints (regression/compat gap) | **Fix proposed**, awaiting merge |

**No new bug reports filed today** — stability assessment relies entirely on PR-authored fixes.

---

## 6. Feature Requests & Roadmap Signals

| Signal | PR | Likelihood in Next Release |
|:---|:---|:---|
| **Cross-agent memory sync** | [#711](https://github.com/nullclaw/nullclaw/pull/711) | High — foundational for enterprise/multi-instance deployments |
| **Knowledge Graph memory backend** | [#712](https://github.com/nullclaw/nullclaw/pull/712) | High — SQLite-based, low operational overhead |
| **Enhanced reasoning for open models** | [#669](https://github.com/nullclaw/nullclaw/pull/669) | High — addresses #698, community-requested |
| **Environment-based secrets** | [#707](https://github.com/nullclaw/nullclaw/pull/707) | Medium — operational improvement, resolves #698 |
| **Documentation restructuring** | [#713](https://github.com/nullclaw/nullclaw/pull/713) | Medium — user experience, not blocking |

**Predicted vNext themes**: Memory system unification (vector + graph + sync), production reliability, open-source LLM ecosystem parity.

---

## 7. User Feedback Summary

**Explicit feedback channels**: Minimal — no issues filed, no PR comments.

**Inferred from PR content:**

| Pain Point | Evidence | Satisfaction Indicator |
|:---|:---|:---|
| Cron job reliability in production | #689's comprehensive race/leak fixes | 🔴 **Dissatisfied** — systemic issues being patched |
| Need for stateful multi-agent deployments | #711's "Agent B knows your preferences" use case | 🟡 **Unmet need** — infrastructure gap being filled |
| Documentation discoverability | #713's navigation restructuring | 🟡 **Friction acknowledged** — being addressed |
| Open-source model compatibility | #669's vLLM/Qwen reasoning fix | 🟡 **Partial support** — gaps being closed |
| Secrets management in containerized environments | #707's environment variable fallback | 🟢 **Responsive** — quick turnaround on #698 |

---

## 8. Backlog Watch

| Risk Indicator | Details |
|:---|:---|
| **All PRs unmerged (6/6)** | Potential maintainer bandwidth constraint or rigorous review standards |
| **Zero issue activity** | May indicate: (a) highly stable software, (b) issue triage backlog, or (c) community discussion happening off-GitHub |
| **No release since data available** | Suggests either rolling release model or accumulation of changes for milestone |

**Recommended maintainer attention:**
- [#689](https://github.com/nullclaw/nullclaw/pull/689) — Production stability critical path
- [#711](https://github.com/nullclaw/nullclaw/pull/711) — Architectural direction for multi-agent scaling

---

*Digest generated from GitHub activity 2026-03-24 to 2026-03-25. Data source: nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-25

## 1. Today's Overview

IronClaw shows **extremely high development velocity** with 49 PRs and 14 issues updated in the last 24 hours, indicating an active pre-release push. The project is undergoing a major architectural transformation: enterprise features (SSO, RBAC, workspaces, multi-tenancy) are being implemented in parallel with core engine refactoring. Notably, four new P1/P2 priority issues were filed today by core maintainer `ilblackdragon`, signaling a strategic pivot toward enterprise readiness. The CI/CD pipeline is highly active with automated staging promotions, though this volume suggests potential instability as large changes land rapidly. No new releases were cut, indicating the team is accumulating changes for a significant version bump.

---

## 2. Releases

**No new releases** — None published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (15 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1625](https://github.com/nearai/ironclaw/pull/1625) | Restore owner-scoped gateway startup | Fixes E2E test harness masking of server boot failures; preserves single-user gateway auth model |
| [#1602](https://github.com/nearai/ironclaw/pull/1602) | Fix hosted OAuth refresh via proxy | Routes token refreshes through compose-api proxy; adds Rust + Python E2E coverage |
| [#1592](https://github.com/nearai/ironclaw/pull/1592) | Optimize approval thread resolution | Resolves two MEDIUM-severity CI-flagged issues (#1488, #1489): UUID parsing hot path + lock contention |
| [#1623](https://github.com/nearai/ironclaw/pull/1623) | Remove stale stream_token gate from channel-relay | Fixes channel-relay activation bug post-webhook migration |
| [#1483](https://github.com/nearai/ironclaw/pull/1483), [#1451](https://github.com/nearai/ironclaw/pull/1451), [#1624](https://github.com/nearai/ironclaw/pull/1624), [#1627](https://github.com/nearai/ironclaw/pull/1627) | Automated staging promotions | CI batch promotions indicating rapid iteration on staging branch |

### Major Features Advancing

- **DB-backed user management** ([#1626](https://github.com/nearai/ironclaw/pull/1626)): XL-sized PR implementing #1605 — replaces static `GATEWAY_USER_TOKENS` env var with runtime user creation, API tokens, invitations. PostgreSQL + libsql support.
- **Multi-tenant isolation completion** ([#1614](https://github.com/nearai/ironclaw/pull/1614)): Phases 2–4 of #59 — DB scoping fixes, workspace membership enforcement, cross-tenant leak prevention.
- **Unified execution engine v2** ([#1557](https://github.com/nearai/ironclaw/pull/1557)): 7,275-line new crate `ironclaw_engine` — 5 primitives replacing ~10 fragmented abstractions. Parallel development, swap-in ready via bridge adapters.
- **Per-tool reasoning threading** ([#1513](https://github.com/nearai/ironclaw/pull/1513)): End-to-end LLM reasoning visibility through all surfaces (REPL, HTTP, SSE/WS, DB).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Engagement | Analysis |
|:---|:---|:---|
| [#1584](https://github.com/nearai/ironclaw/issues/1584) WeChat channel | 3 comments, 2 👍 | **Platform expansion demand** — Third-party WeChat plugin available for OpenClaw; community wants IronClaw parity. Signals China market interest and multi-channel strategy gap. |
| [#99](https://github.com/nearai/ironclaw/issues/99) Authentication alternatives | 2 comments, 2 👍, **CLOSED today** | **Decentralization tension** — User questioned mandatory NEAR AI coupling; closed without clear resolution. Underlying need: self-hosted/auth-flexible deployments for security-conscious users. |
| [#846](https://github.com/nearai/ironclaw/issues/846) `onboard` fails but `ironclaw` starts | 2 comments | **UX friction in setup** — Database error during onboarding doesn't block runtime; indicates brittle initialization flow. |

### Underlying Needs Identified

- **Enterprise identity integration**: SSO/OIDC requests (#1610 filed today) validate #99's concern — users want auth decoupled from NEAR-specific infrastructure.
- **Multi-channel deployment**: WeChat (#1584) plus existing web/CLI/WASM channels suggests users want agent ubiquity.
- **Setup reliability**: Onboarding fragility (#846) conflicts with "security-focused" positioning.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **HIGH** | [#1611](https://github.com/nearai/ironclaw/issues/1611) Execution failed: max iterations (50) exceeded | **OPEN**, 0 comments | None identified |
| **HIGH** | [#1610](https://github.com/nearai/ironclaw/issues/1610), [#1608](https://github.com/nearai/ironclaw/issues/1608), [#1607](https://github.com/nearai/ironclaw/issues/1607), [#1605](https://github.com/nearai/ironclaw/issues/1605) — Enterprise features marked [risk: high] | OPEN (feature requests) | In progress: #1626, #1614 |
| MEDIUM | [#846](https://github.com/nearai/ironclaw/issues/846) Onboard database save failure | OPEN | None |
| MEDIUM | [#1538](https://github.com/nearai/ironclaw/issues/1538) Microsoft Defender Trojan flagging | **CLOSED** | Likely external/FP; no PR linked |
| MEDIUM | [#1489](https://github.com/nearai/ironclaw/issues/1489), [#1488](https://github.com/nearai/ironclaw/issues/1488) Lock contention, UUID parsing | **CLOSED** | [#1592](https://github.com/nearai/ironclaw/pull/1592) |

### Critical Stability Concern

**[#1611](https://github.com/nearai/ironclaw/issues/1611) — Docker Sandbox Worker iteration loop**: Local models (Ollama API) returning empty tool completions cause infinite retry loops until 50-iteration cap. Post-#502 fix regression. **No fix PR yet** — this is a runtime failure mode affecting local/self-hosted deployments.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Prediction |
|:---|:---|:---|
| [#1610](https://github.com/nearai/ironclaw/issues/1610) SSO/OIDC (Google, Okta, generic OIDC) | P1 | **Next release (v0.x)** — PR #1626 already implements DB layer; OIDC is enterprise blocker |
| [#1607](https://github.com/nearai/ironclaw/issues/1607) First-class workspaces | P1 | **Next release** — #1614 in progress, foundational for multi-tenancy |
| [#1605](https://github.com/nearai/ironclaw/issues/1605) DB-backed user management | P1 | **Next release** — PR #1626 open, implementation complete |
| [#1608](https://github.com/nearai/ironclaw/issues/1608) RBAC with permission matrix | P2 | **v0.x+1** — Depends on #1607 workspaces |
| [#1609](https://github.com/nearai/ironclaw/issues/1609) Admin management panel | P2 | **v0.x+1 or later** — Web UI layer, API foundation required first |
| [#59](https://github.com/nearai/ironclaw/issues/59) Multi-tenancy | Long-term | **Partial in next release** — #1614 completes phases 2–4; full isolation ongoing |
| [#1584](https://github.com/nearai/ironclaw/issues/1584) WeChat channel | Community | **Post-enterprise** — Third-party plugin exists; likely extension ecosystem play |

**Architecture signal**: PR [#1615](https://github.com/nearai/ironclaw/pull/1615) extracts `AppEvent` to `ironclaw_common` crate — indicates modularization push for library-ization or external SDK consumption.

---

## 7. User Feedback Summary

### Pain Points

| Source | Issue | Severity |
|:---|:---|:---|
| Self-hosted users | [#1611](https://github.com/nearai/ironclaw/issues/1611) Ollama/local model instability | **Runtime-blocking** |
| New users | [#846](https://github.com/nearai/ironclaw/issues/846) Onboarding failures with misleading errors | **Onboarding friction** |
| Security-conscious | [#99](https://github.com/nearai/ironclaw/issues/99), [#1538](https://github.com/nearai/ironclaw/issues/1538) Auth coupling, AV false positives | **Trust erosion** |
| Enterprise evaluators | [#1610](https://github.com/nearai/ironclaw/issues/1610) No SSO = procurement blocker | **Adoption-blocking** |

### Positive Signals

- Active CI/CD and rapid bug fixes (e.g., #1592 resolving two MEDIUM issues in 24h)
- Comprehensive WASM extension ecosystem (near-intents in #1622)
- Reasoning transparency (#1513) for debugging agent behavior

### Satisfaction Gap

Users deploying locally (Ollama) report more instability than cloud-model users. The project's NEAR AI sponsorship creates perception issues for decentralization/security advocates despite open-source licensing.

---

## 8. Backlog Watch

| Issue | Age | Risk | Notes |
|:---|:---|:---|:---|
| [#59](https://github.com/nearai/ironclaw/issues/59) Multi-tenancy | 40 days | **Strategic** | Core architectural debt; #1614 addresses but full solution long-term |
| [#1584](https://github.com/nearai/ironclaw/issues/1584) WeChat channel | 2 days | Community growth | Third-party solution exists; official stance unclear |
| [#846](https://github.com/nearai/ironclaw/issues/846) Onboard DB failure | 14 days | Onboarding | No maintainer response; may indicate prioritization conflict |

### Maintainer Attention Needed

- **#1611 iteration limit**: Zero comments, no assignee — self-hosted deployment regression
- **Security PRs #1590, #1591**: Cross-channel thread hijacking and TOCTOU fixes — need review for merge confidence
- **#1557 engine v2**: 7K+ line architectural change — requires careful review before bridge adapter integration

---

*Generated from GitHub activity 2026-03-24. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-25

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 50 PRs updated in 24 hours (26 open, 24 merged/closed) and 23 active issues. The project is in an intense bug-fixing and feature-shipping phase following the v2026.3.24 release, with no new release cut today. Community engagement is strong with detailed technical reports, particularly around MCP integration failures, DingTalk robot issues, and performance bottlenecks. The codebase appears mature enough to attract sophisticated bug reports (duplicate SQL writes, React render optimization) indicating real production usage.

---

## 2. Releases

**No new releases** — Latest public build remains **v2026.3.24** (released 2026-03-24).

---

## 3. Project Progress

### Merged/Closed PRs (24 total — key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#760](https://github.com/netease-youdao/LobsterAI/pull/760) | swuzjb | Remove duplicate session status update on start | Fixes SQLite I/O waste per session creation |
| [#739](https://github.com/netease-youdao/LobsterAI/pull/739) | OnePieceJoker | Prefer system Node.js over Electron runtime for MCP bridge | Resolves MCP server spawn failures |
| [#736](https://github.com/netease-youdao/LobsterAI/pull/736), [#770](https://github.com/netease-youdao/LobsterAI/pull/770) | vdorchan, stone333 | React.memo for MarkdownContent | Eliminates streaming re-render cascade |
| [#764](https://github.com/netease-youdao/LobsterAI/pull/764) | wuzi-spark | Virtual scrolling for chat area | Fixes "white screen" with 200+ messages |
| [#762](https://github.com/netease-youdao/LobsterAI/pull/762) | Aoxiang-001 | "Auto-detect" API format for custom models | Removes user guesswork (DeepSeek/Zhipu/MiniMax) |
| [#755](https://github.com/netease-youdao/LobsterAI/pull/755) | flowell | Export chat history to Markdown/JSON | Data portability feature |
| [#772](https://github.com/netease-youdao/LobsterAI/pull/772) | kingtao | Multi-select message deletion (Doubao-style UX) | Polish competitive with ByteDance |
| [#773](https://github.com/netease-youdao/LobsterAI/pull/773) | vdorchan | File browser panel in Cowork | In-app directory navigation |
| [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | darknesstm | GitHub Copilot OAuth + API integration | Major provider expansion |
| [#766](https://github.com/netease-youdao/LobsterAI/pull/766) | Alex-wuhu | Novita AI provider | Cost-competitive open-source models |
| [#768](https://github.com/netease-youdao/LobsterAI/pull/768) | mmengLong | Opik observability via OpenClaw plugin | Enterprise tracing (LangFuse-ready architecture) |
| [#767](https://github.com/netease-youdao/LobsterAI/pull/767) | gongzhi-netease | AI response timeout detection + error classification | 60s first-byte timeout, 30s/90s stall warnings |
| [#717](https://github.com/netease-youdao/LobsterAI/pull/717) | Angus2333 | Focus input shortcut + settings page shortcut isolation | UX polish |
| [#690](https://github.com/netease-youdao/LobsterAI/pull/690) | happyoung | Windows foreground window fix | Startup focus stealing resolved |
| [#726](https://github.com/netease-youdao/LobsterAI/pull/726) | Angus2333 | i18n hardcoded Chinese strings | Localization completeness |

**Key Trajectory**: Heavy investment in **performance** (virtual scroll, memoization), **reliability** (MCP fixes, timeout handling), and **enterprise features** (observability, export, Copilot).

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | Core Problem | Underlying Need |
|:---|:---:|:---|:---|
| [#703](https://github.com/netease-youdao/LobsterAI/issues/703) | 4 | Windows update from 2026.3.17→3.22 takes 2+ min, stalls at 30-40% and 85% | **Trust in auto-updater** — users fear broken updates; CDN/delta update optimization needed |
| [#728](https://github.com/netease-youdao/LobsterAI/issues/728) | 4 | MCP configured but never invoked | **MCP discoverability** — users don't understand tool-calling triggers; needs UX education or explicit "force tool" UI |
| [#751](https://github.com/netease-youdao/LobsterAI/issues/751) | 2 | DingTalk robot "fetch failed" after v2026.3.24 | **Integration stability** — enterprise IM connectors are fragile, need regression testing |
| [#691](https://github.com/netease-youdao/LobsterAI/issues/691) | 2 | DingTalk robot double-replies | **Race condition in webhook handling** — deduplication logic missing |
| [#724](https://github.com/netease-youdao/LobsterAI/issues/724) | 1 | MCP shows "0 tools" despite sync | **Onboarding friction** — MCP is powerful but configuration UX is failing non-technical users |

**Pattern**: MCP integration is **strategically critical but operationally painful**. Three separate issues (#728, #724, #739 fix) indicate this is the primary adoption blocker.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#734](https://github.com/netease-youdao/LobsterAI/issues/734) | Deleting running OpenClaw session doesn't abort — background run continues with side effects | **No PR** — resource leak, potential data corruption |
| 🔴 **High** | [#735](https://github.com/netease-youdao/LobsterAI/issues/735) | `executionMode` config silently reverts to `local` — `auto`/`sandbox` don't work | **No PR** — security/execution policy bypass |
| 🟡 **Medium** | [#732](https://github.com/netease-youdao/LobsterAI/issues/732) | Alibaba Bailian Coding Plan: "invalid access token" in v2026.3.24, works in v0.2.2 | **No PR** — regression, credential handling changed |
| 🟡 **Medium** | [#763](https://github.com/netease-youdao/LobsterAI/issues/763) | Disabled skills still callable | **No PR** — permission model bug |
| 🟡 **Medium** | [#754](https://github.com/netease-youdao/LobsterAI/issues/754), [#753](https://github.com/netease-youdao/LobsterAI/issues/753) | Memory entry management corrupts MEMORY.md structure; single-char entries invisible | **No PR** — data integrity risk |
| 🟡 **Medium** | [#743](https://github.com/netease-youdao/LobsterAI/issues/743) | After network recovery, send button doesn't become stop button | **No PR** — state machine desync |
| 🟢 **Low** | [#692](https://github.com/netease-youdao/LobsterAI/issues/692) | v2026.3.22 auto-start on boot broken | **No PR** — Windows startup integration |
| 🟢 **Low** | [#761](https://github.com/netease-youdao/LobsterAI/issues/761) | Web vs APP points display inconsistent | **No PR** — sync lag between services |

**Notable**: Two high-severity execution-related bugs (#734, #735) without fixes suggest **Cowork/OpenClaw execution layer** needs dedicated QA pass.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release |
|:---|:---|:---:|
| **Voice input** | [#722](https://github.com/netease-youdao/LobsterAI/issues/722) | ⭐⭐⭐⭐⭐ **High** — Youdao has speech tech; trivial UI addition |
| **English localization polish** | [#568](https://github.com/netease-youdao/LobsterAI/issues/568) | ⭐⭐⭐⭐⭐ **High** — Active i18n work in [#726](https://github.com/netease-youdao/LobsterAI/pull/726) |
| **MCP configuration wizard** | Implied by #728, #724 | ⭐⭐⭐⭐☆ **Likely** — Pain point is clear; needs UX not just docs |
| **Memory system v2** | #754, #753, #741 | ⭐⭐⭐⭐☆ **Likely** — Performance + integrity issues converging |
| **DingTalk robustness** | #751, #691 | ⭐⭐⭐☆☆ **Medium** — Enterprise priority but specific to China market |
| **Long-context handling** | [#774](https://github.com/netease-youdao/LobsterAI/issues/774) — 65536 token limit | ⭐⭐⭐☆☆ **Medium** — Architecture change needed (summarization/sliding window) |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

> *"折腾几天了，MCP服务安装配置总是提示已同步，0tools"* — [#724](https://github.com/netease-youdao/LobsterAI/issues/724)

> *"更新很慢，在30~40%左右的时候，等了超过1分钟"* — [#703](https://github.com/netease-youdao/LobsterAI/issues/703)

> *"能不能支持语音输入啊？有时候打字太多，太费劲儿了"* — [#722](https://github.com/netease-youdao/LobsterAI/issues/722)

### Satisfaction Signals

- **Performance fixes welcomed**: Virtual scroll PR [#764](https://github.com/netease-youdao/LobsterAI/pull/764) has video evidence of before/after
- **Export feature requested/implemented**: [#755](https://github.com/netease-youdao/LobsterAI/pull/755) closes user need for data ownership
- **Copilot integration**: [#707](https://github.com/netease-youdao/LobsterAI/pull/707) shows ambition to match Cursor/GitHub ecosystem

### Use Case Evolution

| Early Adopter | Power User | Enterprise |
|:---|:---|:---|
| Basic chat | MCP tool chains | DingTalk integration |
| | Cowork multi-turn coding | Observability (Opik) |
| | Custom model endpoints | Team memory/points system |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>3 days old, high impact)

| Issue | Age | Risk |
|:---|:---|:---|
| [#568](https://github.com/netease-youdao/LobsterAI/issues/568) — English UI adaptation | 5 days | International expansion blocker |
| [#703](https://github.com/netease-youdao/LobsterAI/issues/703) — Update slowness | 2 days | **Escalating** — affects all Windows users |

### PRs At Risk of Stale

| PR | Status | Concern |
|:---|:---|:---|
| [#609](https://github.com/netease-youdao/LobsterAI/pull/609) — Scheduled task refactor | Open since 2026-03-21 | Large refactor, needs rebase |
| [#534](https://github.com/netease-youdao/LobsterAI/pull/534) — Skill version fields | Open since 2026-03-19 | Simple fix, should merge |

### Critical Unassigned

- **#734** (OpenClaw abort leak) — No assignee, no PR
- **#735** (executionMode ignored) — Configuration system bug, security implications

---

**Project Health**: 🟢 **Strong momentum** — 24 PRs merged, active feature shipping. 🟡 **Stability debt** accumulating in execution layer and MCP onboarding. 🔴 **Action needed** on high-severity Cowork bugs before next release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-25

## 1. Today's Overview

TinyClaw (TinyAGI) demonstrated **exceptional development velocity** on 2026-03-25, with **8 PRs merged/closed in 24 hours** and **3 consecutive patch releases** (v0.0.17–v0.0.19). All activity was driven by a single contributor (@jlia0), indicating either a solo maintainer push or coordinated sprint. The project shows **zero open issues**, suggesting either aggressive triage or low community bug reporting. The focus areas—message persistence, streaming reliability, and skills extensibility—signal maturation toward production-ready agent orchestration.

---

## 2. Releases

### [v0.0.19](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.19) — Latest
| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Breaking Changes** | None |
| **Migration** | Automatic |

**Bug Fixes:**
- **Scheduled message persistence** ([PR #259](https://github.com/TinyAGI/tinyagi/pull/259)): Fixed scheduled messages not being saved to `agent_messages` table—critical for scheduled workflows
- **`signalDone` race condition** ([PR #258](https://github.com/TinyAGI/tinyagi/pull/258)): Resolved premature completion in invoke flow due to SIGTERM/exit code 143 timing conflict

---

### [v0.0.18](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.18)
| Aspect | Details |
|--------|---------|
| **Type** | Patch release |

**Bug Fixes:**
- **Duplicate response stream elimination** ([8dd7f42](https://github.com/TinyAGI/tinyagi/commit/8dd7f42)): Removed redundant output in `handleTeamResponse` for team message processing

---

### [v0.0.17](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.17)
| Aspect | Details |
|--------|---------|
| **Type** | Minor release |
| **Breaking Changes** | Telegram migration (see below) |

**Highlights:**
- **Skills Manager** ([PR #254](https://github.com/TinyAGI/tinyagi/pull/254)): Agents can now dynamically search, install, and manage skills from a registry—major extensibility milestone
- **Telegram Rewrite (grammY)** ([PR #257](https://github.com/TinyAGI/tinyagi/pull/257)): Migrated from `node-telegram-bot-api` to `grammY` framework; improves reliability and type safety

**Migration Note for v0.0.17:** Users with custom Telegram bot integrations should verify webhook/polling configurations work with grammY's different middleware patterns.

---

## 3. Project Progress

### Merged PRs (8 total, all closed 2026-03-24)

| PR | Category | Impact |
|:---|:---|:---|
| [#259](https://github.com/TinyAGI/tinyagi/pull/259) | Data integrity | **Critical fix**: Scheduled messages now properly persisted |
| [#258](https://github.com/TinyAGI/tinyagi/pull/258) | Reliability | **Critical fix**: Invoke flow race condition eliminated |
| [#257](https://github.com/TinyAGI/tinyagi/pull/257) | Channels | Proactive messages now emit SSE events for Telegram delivery |
| [#256](https://github.com/TinyAGI/tinyagi/pull/256) | Architecture | Streaming responses + agent signatures implemented |
| [#255](https://github.com/TinyAGI/tinyagi/pull/255) | UX | Dashboard shows true queued/processing status |
| [#254](https://github.com/TinyAGI/tinyagi/pull/254) | **Feature** | **Skills Manager** — dynamic skill installation |
| [#251](https://github.com/TinyAGI/tinyagi/pull/251) | Stability | Subprocess lifecycle management + manual kill API |
| [#250](https://github.com/TinyAGI/tinyagi/pull/250) | UX | Immediate message persistence for responsive UI |

**Technical Arc:** The PR cluster reveals a coordinated effort to solve **message delivery reliability**—from enqueue-time persistence (#250, #256, #259) through streaming (#256) to channel-specific delivery (#257). The Skills Manager (#254) represents a strategic pivot toward agent self-modification capabilities.

---

## 4. Community Hot Topics

**Status: No active community discussion detected.**

| Metric | Value |
|:---|:---|
| Open issues with comments | 0 |
| PRs with >0 reactions | 0 |
| PRs with >0 comments | 0 |

All 8 merged PRs show **zero comments and zero reactions**, suggesting:
- Either rapid maintainer self-merging without review
- Or minimal external contributor engagement

**Underlying Need:** The project would benefit from visible community validation of the Skills Manager feature (#254) and the grammY migration—both are significant architectural changes that typically warrant discussion.

---

## 5. Bugs & Stability

### Fixed in Today's Releases

| Severity | Issue | Fix PR | Risk if Unfixed |
|:---|:---|:---|:---|
| **High** | Scheduled messages lost (not persisted) | [#259](https://github.com/TinyAGI/tinyagi/pull/259) | Data loss for scheduled workflows |
| **High** | `signalDone` race causing premature completion | [#258](https://github.com/TinyAGI/tinyagi/pull/258) | Incomplete agent task execution |
| **Medium** | Proactive messages stuck until user action | [#257](https://github.com/TinyAGI/tinyagi/pull/257) | Broken push notification UX |
| **Medium** | Dashboard status display incorrect | [#255](https://github.com/TinyAGI/tinyagi/pull/255) | Operator confusion on queue state |
| **Medium** | Subprocess hangs on unclean exit | [#251](https://github.com/TinyAGI/tinyagi/pull/251) | Resource exhaustion, queue stalls |

### Open Bugs
**None identified** — zero open issues.

**Stability Assessment:** The bugfix pattern (message persistence, race conditions, subprocess management) indicates the project is hardening **core orchestration reliability**—typical of pre-1.0 maturation.

---

## 6. Feature Requests & Roadmap Signals

### Shipped Features (User-Visible)
| Feature | PR | Maturity Signal |
|:---|:---|:---|
| **Skills Manager** — agent self-modification | [#254](https://github.com/TinyAGI/tinyagi/pull/254) | **Foundation for marketplace/ecosystem** |
| Streaming responses with signatures | [#256](https://github.com/TinyAGI/tinyagi/pull/256) | Production observability |
| Manual session kill API | [#251](https://github.com/TinyAGI/tinyagi/pull/251) | Operational control |

### Predicted Next Version Priorities

Based on commit patterns and gaps:

| Likely Feature | Rationale |
|:---|:---|
| **Skills registry web UI** | #254 added CLI/bash skill management; graphical discovery likely follows |
| **Multi-agent team coordination** | `handleTeamResponse` fixes (#256, #250) suggest active team feature development |
| **Webhook reliability enhancements** | SSE + Telegram fixes indicate channel infrastructure still evolving |
| **Metrics/observability exports** | Agent signatures (#256) suggest audit trail needs |

---

## 7. User Feedback Summary

**Direct user feedback: None captured** — no issues, no PR comments, no discussions referenced.

**Inferred Pain Points from Fix Patterns:**

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| Message delivery uncertainty | 3 PRs on persistence/streaming | High |
| Scheduled workflow reliability | #259 specifically | High |
| Subprocess/orchestration hangs | #251, #258 | High |
| Real-time visibility | #255, #256 dashboard fixes | Medium |

**Satisfaction Indicator:** The rapid iteration (3 releases in 1 day) suggests maintainer responsiveness, but **zero community engagement** is atypical for a healthy open-source project. Possible explanations: (a) very early stage, (b) primarily corporate/stealth usage, or (c) discussion happening outside GitHub.

---

## 8. Backlog Watch

**Critical Finding: No backlog detected.**

| Category | Count | Items |
|:---|:---|:---|
| Issues open >30 days | 0 | — |
| Stale PRs | 0 | — |
| Awaiting maintainer review | 0 | — |

**Assessment:** The project operates with **zero queue depth**—all work is either merged or not started. This is sustainable for a solo/small team but carries risks:
- No community contributions in flight to evaluate
- No feature requests captured for prioritization
- No bug reports to validate real-world usage

**Recommendation:** If TinyClaw aims to grow community adoption, establishing visible discussion channels (Discord, GitHub Discussions) and encouraging issue reporting would provide roadmap validation beyond single-maintainer intuition.

---

## Project Health Score

| Dimension | Score | Notes |
|:---|:---|:---|
| Development velocity | ⭐⭐⭐⭐⭐ | 8 PRs, 3 releases in 24h |
| Code stability | ⭐⭐⭐⭐☆ | Active hardening, no regressions reported |
| Community engagement | ⭐⭐☆☆☆ | Zero visible participation |
| Documentation | ⭐⭐⭐☆☆ | Release notes present; SKILLS.md added |
| Production readiness | ⭐⭐⭐⭐☆ | Core reliability fixes indicate approaching maturity |

**Overall:** TinyClaw is in **intensive development phase** with strong technical progress but unvalidated by external users. The Skills Manager feature positions it competitively against AutoGPT-like frameworks; community building is the clear next priority.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-25

## 1. Today's Overview

Moltis shows **exceptional engineering velocity** with 17 merged/closed PRs against just 1 open PR, demonstrating a mature, well-maintained codebase. The project is actively addressing infrastructure pain points (Docker MCP support, IPv6 networking, macOS signing) while advancing core AI capabilities (memory systems, multi-modal inputs, provider APIs). No new releases were cut, suggesting the team is accumulating changes for a significant version bump. Community engagement remains healthy with 4 active open issues receiving sustained discussion, particularly around datetime context and provider compatibility.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Major Infrastructure & Platform Hardening

| PR | Description | Impact |
|:---|:---|:---|
| [#479](https://github.com/moltis-org/moltis/pull/479) | **Docker + Node.js for MCP servers** — adds `nodejs`/`npm` to runtime image | MCP ecosystem now works out-of-the-box; closes [#118](https://github.com/moltis-org/moltis/issues/118) |
| [#481](https://github.com/moltis-org/moltis/pull/481) | **IPv6 bind address support** — fixes `:::8080` parsing crash | Resolves deployment blocker on IPv6-only networks; closes [#447](https://github.com/moltis-org/moltis/issues/447) |
| [#422](https://github.com/moltis-org/moltis/pull/422) | **macOS release signing & notarization** | Unblocks official macOS distribution; still open, needs final review |
| [#477](https://github.com/moltis-org/moltis/pull/477) | **Browser container permissions fix** — `chmod 777` on profile dirs | Fixes Chrome crash in browserless workflows |

### AI/LLM Core Improvements

| PR | Description | Impact |
|:---|:---|:---|
| [#476](https://github.com/moltis-org/moltis/pull/476) | **Stabilized system prompt for KV cache** — moves datetime out of prompt | 2-3x speedup for local LLMs (Ollama/LM Studio) via prefix caching; addresses [#176](https://github.com/moltis-org/moltis/issues/176) |
| [#482](https://github.com/moltis-org/moltis/pull/482) | **Matrix full media support** — images, voice STT, files | Achieves parity with Telegram; multimodal expansion |
| [#361](https://github.com/moltis-org/moltis/pull/361) | **OpenAI Responses API SSE support** | New OpenAI API compatibility |
| [#484](https://github.com/moltis-org/moltis/pull/484) | **Skill name validation fallback** — uses `slug` when `name` fails | Fixes silent skill omission bug; closes [#452](https://github.com/moltis-org/moltis/issues/452) |

### Developer Experience & Reliability

| PR | Description | Impact |
|:---|:---|:---|
| [#465](https://github.com/moltis-org/moltis/pull/465) | **Extract `moltis-httpd` crate** | Cleaner architecture; enables TUI/test consumers without HTTP stack |
| [#480](https://github.com/moltis-org/moltis/pull/480) | **Cron tool JSON parsing resilience** | Fixes Qwen3-Coder compatibility |
| [#478](https://github.com/moltis-org/moltis/pull/478) | **Preserve config comments in OpenClaw import** | Fixes 700→20 line comment loss; closes [#458](https://github.com/moltis-org/moltis/issues/458) |
| [#419](https://github.com/moltis-org/moltis/pull/419) | **Configurable MCP timeouts** | Unblocks `codex mcp-server` integration |

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Analysis |
|:---|:---|:---|
| [#176](https://github.com/moltis-org/moltis/issues/176) — *Add datetime to system prompt context* | **14 comments, 👍1** | **Core architectural tension**: Users want temporal awareness, but [#476](https://github.com/moltis-org/moltis/pull/476) reveals the team solved this *without* modifying the system prompt (injecting as trailing message instead). Discussion reflects evolving understanding of prompt engineering vs. caching optimization. |
| [#414](https://github.com/moltis-org/moltis/issues/414) — *z.ai does not work out of the box* | **7 comments** | **Provider onboarding friction**: Network errors suggest either (a) missing default configuration, (b) CORS/proxy issues, or (c) documentation gap. "Out of the box" failures are high-churn risks for new users. |
| [#118](https://github.com/moltis-org/moltis/issues/118) / [#479](https://github.com/moltis-org/moltis/pull/479) | Resolved today | Strong signal that MCP ecosystem maturity is a priority. |

**Underlying Needs**: 
- **Zero-config provider setup** — users expect `z.ai`, `OpenAI`, `Anthropic` to work with minimal friction
- **Observable/debuggable networking** — "network errors" without detail blocks self-service resolution
- **Temporal reasoning** — datetime context is clearly valued, but implementation must balance functionality vs. performance

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#414](https://github.com/moltis-org/moltis/issues/414) z.ai network errors — blocks new user onboarding | **Open** — needs repro/debug info | None |
| 🟡 **Medium** | [#485](https://github.com/moltis-org/moltis/issues/485) Built-in tools generate invalid JSON Schema for strict providers | **Open — 0 comments** | None — *new today* |
| 🟡 **Medium** | [#430](https://github.com/moltis-org/moltis/issues/430) Agent unable to use cron tools | **Closed** | [#480](https://github.com/moltis-org/moltis/pull/480) |
| 🟢 **Low** | [#452](https://github.com/moltis-org/moltis/issues/452) Skills silently omitted with invalid names | **Closed** | [#484](https://github.com/moltis-org/moltis/pull/484) |
| 🟢 **Low** | [#447](https://github.com/moltis-org/moltis/issues/447) IPv6 bind crash | **Closed** | [#481](https://github.com/moltis-org/moltis/pull/481) |
| 🟢 **Low** | [#458](https://github.com/moltis-org/moltis/issues/458) Config comments lost in OpenClaw import | **Closed** | [#478](https://github.com/moltis-org/moltis/pull/478) |

**Regressions**: None identified. The JSON Schema issue (#485) is concerning for "strict" providers (likely OpenAI's `strict: true` or similar) and may affect tool reliability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Tiered memory/recall system** | [#483](https://github.com/moltis-org/moltis/issues/483) | **High** | Revives stale PR #253; architecturally aligned with [#476](https://github.com/moltis-org/moltis/pull/476)'s prompt optimization work. 764 commits behind suggests fresh implementation needed. |
| **Multi-agent architecture** | [#34](https://github.com/moltis-org/moltis/pull/34) | **Medium** | Design merged; foundational but not yet user-facing. |
| **Datetime in context** (resolved alternatively) | [#176](https://github.com/moltis-org/moltis/issues/176) | **N/A — solved** | [#476](https://github.com/moltis-org/moltis/pull/476) provides better solution |
| **MCP timeout configurability** | — | **Shipped** | [#419](https://github.com/moltis-org/moltis/pull/419) merged |

**Emerging Pattern**: Heavy investment in **memory systems** (tiered recall, KV cache optimization, prompt stabilization) suggests Moltis is positioning for long-horizon agent workflows.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Severity |
|:---|:---|:---|
| "Out of the box" provider failures | Recurring | High — churn risk |
| Silent failures (skills omitted, memories truncated) | Multiple instances | Medium — erodes trust |
| Docker/MCP friction | Addressed | Was blocking |
| IPv6 deployment issues | Niche but critical | Infrastructure |

### Satisfaction Signals
- **Responsive maintainer team**: 6/10 issues closed same day as update
- **Architectural quality**: Refactoring (#465), performance optimization (#476) show investment in sustainability
- **Platform parity**: Matrix media support matches Telegram

### Use Cases Emerging
- **Business automation**: [#453](https://github.com/moltis-org/moltis/issues/453) (closed) asked about managerial agents spawning workers — enterprise interest
- **Local-first AI**: KV cache optimization, Ollama support prioritization
- **Multi-channel deployments**: WhatsApp, Matrix, Telegram all actively maintained

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#422](https://github.com/moltis-org/moltis/pull/422) macOS signing | 12 days | **Blocks release** | Final review/merge for macOS distribution |
| [#176](https://github.com/moltis-org/moltis/issues/176) datetime context | 36 days | Discussion divergence | Close or redirect to [#476](https://github.com/moltis-org/moltis/pull/476) solution |
| [#414](https://github.com/moltis-org/moltis/issues/414) z.ai failures | 14 days | User churn | Needs maintainer repro or user-provided logs |
| [#485](https://github.com/moltis-org/moltis/issues/485) JSON Schema strict mode | **New** | Provider compatibility | Triage for severity; may need schema generator fixes |

---

**Overall Assessment**: Moltis demonstrates **strong operational health** — high merge velocity, systematic bug closure, and architectural investment. The primary risks are (1) unblocking macOS release distribution, and (2) resolving the "strict provider" JSON Schema issue before it affects more users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-25

---

## 1. Today's Overview

CoPaw demonstrates **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, alongside the **v0.2.0 release** introducing inter-agent communication capabilities. The community is actively stress-testing the new release, with bug reports clustering around Docker deployment regressions, channel-specific integration issues (WeCom, DingTalk, QQ), and memory/context management problems. The 33:17 merged-to-open PR ratio indicates strong maintainer throughput, though the 39:11 open-to-closed issue ratio suggests incoming bug reports are outpacing resolutions. Critical stability concerns have emerged around CPU busy-looping, WebSocket duplicate processing, and approval timeout handling that warrant immediate attention.

---

## 2. Releases

### [v0.2.0](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.2.0) — Major Feature Release

| Aspect | Details |
|--------|---------|
| **Headline Feature** | **Inter-Agent Communication** — Foundation for multi-agent orchestration |
| **New CLI Commands** | `copaw agents` (list agents), `copaw message` (push messages to channels, send inter-agent requests) |
| **Related PRs** | [#1959](https://github.com/agentscope-ai/CoPaw/pull/1959), [#2161](https://github.com/agentscope-ai/CoPaw/pull/2161) |

**Breaking Changes / Migration Notes:**
- None explicitly documented; however, Docker users report **data persistence regressions** when upgrading from 0.07→0.1.0→0.2.0 (see [#2097](https://github.com/agentscope-ai/CoPaw/issues/2097))
- Users with custom `~/.copaw` mounts should verify volume bindings post-upgrade

---

## 3. Project Progress

### Merged/Closed PRs (33 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#2217](https://github.com/agentscope-ai/CoPaw/pull/2217) | Fix heartbeat cron expression validation | Resolves [#2207](https://github.com/agentscope-ai/CoPaw/issues/2207) — cron `"0 6 * * *"` now accepted |
| [#2208](https://github.com/agentscope-ai/CoPaw/pull/2208) | Version bump to 0.2.0 | Release coordination |
| [#2206](https://github.com/agentscope-ai/CoPaw/pull/2206) | Update reme-ai to 0.3.1.3, remove litellm | Dependency hardening |
| [#2186](https://github.com/agentscope-ai/CoPaw/pull/2186) | Enhance grep/glob search tools | Developer experience |
| [#2189](https://github.com/agentscope-ai/CoPaw/pull/2189) | Built-in QA Agent with source code indexing | Self-documenting system |
| [#1913](https://github.com/agentscope-ai/CoPaw/pull/1913) | Universal `/stop` command across all channels | **Critical UX** — task interruption |
| [#2203](https://github.com/agentscope-ai/CoPaw/pull/2203), [#2194](https://github.com/agentscope-ai/CoPaw/pull/2194), [#2198](https://github.com/agentscope-ai/CoPaw/pull/2198) | Bot maintenance, test cleanup | Infrastructure |

### Active Development (Open PRs)

| PR | Description | Status |
|:---|:---|:---|
| [#2144](https://github.com/agentscope-ai/CoPaw/pull/2144) | Local judge routing v1 — upgrades from fixed heuristics | **Core architecture** |
| [#2219](https://github.com/agentscope-ai/CoPaw/pull/2219) | Unified skill management with per-agent customization | **Highly requested** |
| [#2199](https://github.com/agentscope-ai/CoPaw/pull/2199) | Automatic model fallback with cooldown | Reliability |
| [#2123](https://github.com/agentscope-ai/CoPaw/pull/2123) | Built-in WeChat channel with QR login | **Major channel expansion** |
| [#2131](https://github.com/agentscope-ai/CoPaw/pull/2131) | Browser multi-workspace cookie isolation | Security/isolation |
| [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) | `/stop` soft interrupt (alternative implementation) | Overlaps with [#1913](https://github.com/agentscope-ai/CoPaw/pull/1913) |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Core Need |
|:---|:---|:---:|:---|
| 1 | [#2097](https://github.com/agentscope-ai/CoPaw/issues/2097) Docker upgrade data loss: skills/workspace files invisible post-0.1.0 | **12** | **Data integrity & migration trust** — Docker volume mounting regression is blocking upgrades |
| 2 | [#2047](https://github.com/agentscope-ai/CoPaw/issues/2047) Context Recovery Enhancement for Memory Compaction | **8** | **Task continuity** — users need visibility into what survives memory compression |
| 3 | [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043) WeChat ClawBot channel support | **7** | **Platform expansion** — 9 👍 indicates strong demand; WeChat's March 22 ClawBot release created urgency |
| 4 | [#2152](https://github.com/agentscope-ai/CoPaw/issues/2152) WeCom multi-user visibility scope not working | **5** | **Enterprise access control** — only creator can interact, breaking team workflows |
| 5 | [#2175](https://github.com/agentscope-ai/CoPaw/issues/2175) Group chat sessions collapsing into single view | **4** | **UI state management** — session ID conflation in DingTalk groups |

**Underlying Pattern:** Enterprise channel integrations (WeCom, DingTalk, WeChat) are **high-friction points** — authentication, session handling, and multi-user permissions need systematic hardening.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | **100% CPU busy-polling epoll loop** at idle — regression in v0.2.0 | **No fix PR yet** — requires immediate investigation |
| 🔴 **Critical** | [#2193](https://github.com/agentscope-ai/CoPaw/issues/2193) | Approval timeout stuck in waiting state (2928s) — user never prompted | **No fix PR yet** — breaks tool execution flow |
| 🟡 **High** | [#2213](https://github.com/agentscope-ai/CoPaw/issues/2213) | WebSocket reconnect causes duplicate message processing | **No fix PR yet** |
| 🟡 **High** | [#2175](https://github.com/agentscope-ai/CoPaw/issues/2175) | Group chat session conflation in UI | **No fix PR yet** |
| 🟡 **High** | [#2097](https://github.com/agentscope-ai/CoPaw/issues/2097) | Docker data persistence regression | **No fix PR yet** — workaround: manual volume inspection |
| 🟡 **High** | [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) | Memory compaction interrupts active tasks, loses session | **Related:** [#2047](https://github.com/agentscope-ai/CoPaw/issues/2047) context recovery request |
| 🟢 **Medium** | [#2196](https://github.com/agentscope-ai/CoPaw/issues/2196) | QQ channel + Qianfan model BadRequestError | [#2205](https://github.com/agentscope-ai/CoPaw/pull/2205) may address |
| 🟢 **Medium** | [#2153](https://github.com/agentscope-ai/CoPaw/issues/2153) | DingTalk sessionWebhook expiration not stored | **No fix PR yet** |
| 🟢 **Medium** | [#2190](https://github.com/agentscope-ai/CoPaw/issues/2190) | Missing stop button in Windows desktop (v0.1.0.post1) | **Partially addressed** by [#1913](https://github.com/agentscope-ai/CoPaw/pull/1913) `/stop` command |

**Regression Cluster:** v0.2.0 introduced [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) (CPU spin) — suggests event loop or async handling changes need audit.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **ACP (Agent Communication Protocol)** | [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | **High** | Aligns with v0.2.0 inter-agent direction; enables IDE integration (Codex, Claude Code) |
| **WeChat ClawBot support** | [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043) | **High** | [#2123](https://github.com/agentscope-ai/CoPaw/pull/2123) in active development; 9 👍 demand signal |
| **Context recovery post-compaction** | [#2047](https://github.com/agentscope-ai/CoPaw/issues/2047) | **Medium-High** | Critical for long-running task reliability; memory management is active focus |
| **Skill execution tracking/metrics** | [#2216](https://github.com/agentscope-ai/CoPaw/issues/2216) | **Medium** | Observability trend; complements [#2215](https://github.com/agentscope-ai/CoPaw/issues/2215) memory optimization |
| **Memory compaction skip-summary option** | [#2215](https://github.com/agentscope-ai/CoPaw/issues/2215) | **Medium** | Token cost optimization; follows [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) pain point |
| **Console Markdown formatting** | [#2214](https://github.com/agentscope-ai/CoPaw/issues/2214) | **Medium** | UI polish; low risk |
| **Image display in chat UI** | [#2220](https://github.com/agentscope-ai/CoPaw/issues/2220) | **Medium** | Multimodal completeness |
| **Self-improving/learning skills** | [#2166](https://github.com/agentscope-ai/CoPaw/issues/2166) | **Lower** | Architectural complexity; user comparing to OpenClaw |

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Quote/Pattern | Frequency |
|:---|:---|:---:|
| **Reliability** | *"定时任务极其不稳定"* / Cron tasks unreliable | High |
| **Learning/Memory** | *"记吃不记打"* / Doesn't retain successful strategies | Medium |
| **Basic UX** | *"没有停止按钮"* / Missing stop controls | Medium |
| **Version Quality** | *"目前这个版本问题挺多的"* / v0.1.0.post1 stability concerns | Medium |
| **Channel Integration** | WeCom/DingTalk/QQ-specific breakages | High |

### Use Cases Emerging
- **Multi-agent team coordination** ([#2099](https://github.com/agentscope-ai/CoPaw/issues/2099)) — WeCom group visibility
- **Scheduled autonomous operations** — Cron + heartbeat reliability critical
- **Long-horizon task execution** — Context preservation across compaction events

### Satisfaction Signals
- Active engagement with new v0.2.0 features (inter-agent communication)
- Strong demand for WeChat/WeCom enterprise integration
- Appreciation for `/stop` command implementation

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) ACP Support | ~16 days | **Strategic alignment** | Roadmap confirmation — fits v0.2.0+ architecture |
| [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) Context compression task interruption | ~4 days | **UX degradation** | Link to [#2047](https://github.com/agentscope-ai/CoPaw/issues/2047) solution or prioritize fix |
| [#1932](https://github.com/agentscope-ai/CoPaw/issues/1932) DingTalk 50MB buffer limit | ~4 days | **Production blocker** | Infrastructure limit — needs streaming or chunking strategy |
| [#2166](https://github.com/agentscope-ai/CoPaw/issues/2166) Self-improving skills | ~1 day | **Expectation management** | Clarify scope vs. OpenClaw comparison |

### PRs Stalled/Requiring Review

| PR | Status | Blocker |
|:---|:---|:---|
| [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067) `/stop` soft interrupt | Open | Overlaps with merged [#1913](https://github.com/agentscope-ai/CoPaw/pull/1913) — needs reconciliation or closure |
| [#2205](https://github.com/agentscope-ai/CoPaw/pull/2205) MiniMax-cn connection fix | Open | First-time contributor — needs review cycle |

---

**Project Health Assessment:** 🟡 **Active but Stressed**

- **Strengths:** Rapid feature delivery (v0.2.0 inter-agent), strong PR throughput, responsive to channel expansion needs
- **Risks:** v0.2.0 regression (CPU spin), Docker upgrade path fragility, enterprise channel reliability gaps
- **Recommendation:** Prioritize [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) hotfix and [#2097](https://github.com/agentscope-ai/CoPaw/issues/2097) migration documentation before next feature push

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-25

## 1. Today's Overview

ZeptoClaw shows **high development velocity** with 29 PRs updated in 24 hours (21 merged/closed, 8 open) and 2 patch releases. The project is in active stabilization mode, with heavy focus on Telegram channel reliability fixes and dependency maintenance. Community interest is growing—evidenced by a resolved community-building issue—while core contributors rapidly address production bugs. The 72% merge rate indicates healthy code review throughput.

---

## 2. Releases

### v0.8.2 (2026-03-24)
- **Infrastructure**: CI/CD dependency bumps (rust-cache 2.8.2→2.9.1, docker/metadata-action 5.10.0→6.0.0)
- **Impact**: No breaking changes; maintenance release for build pipeline reliability

### v0.8.1 (2026-03-24)
- **Security/Reliability**: Hardened embedded ZeptoAgent tool execution ([PR #402](https://github.com/qhkm/zeptoclaw/pull/402))
- **Features**: Tool conformance fixtures, edit fuzzy matching improvements, output truncation ([PR #398](https://github.com/qhkm/zeptoclaw/pull/398))
- **Telegram**: Channel security improvements
- **Migration**: No explicit notes; patch-level backward compatible

---

## 3. Project Progress

### Merged/Closed PRs (21 total)

| PR | Author | Summary |
|:---|:---|:---|
| [#409](https://github.com/qhkm/zeptoclaw/pull/409) | stuartbowness | **feat(telegram)**: Split long messages at markdown boundaries instead of silent failure |
| [#402](https://github.com/qhkm/zeptoclaw/pull/402) | qhkm | **fix(lib)**: Harden embedded ZeptoAgent tool execution |
| [#398](https://github.com/qhkm/zeptoclaw/pull/398) | qhkm | **feat(tools)**: Conformance fixtures, edit fuzzy matching, output truncation |
| [#412](https://github.com/qhkm/zeptoclaw/pull/412) | dependabot[bot] | chore(deps): rust-cache 2.8.2→2.9.1 |
| [#382](https://github.com/qhkm/zeptoclaw/pull/382) | dependabot[bot] | chore(deps): docker/metadata-action 5.10.0→6.0.0 |
| [#377](https://github.com/qhkm/zeptoclaw/pull/377), [#381](https://github.com/qhkm/zeptoclaw/pull/381) | dependabot[bot] | chore(deps): astro 5.17.3→5.18.0 (docs sites) |
| [#380](https://github.com/qhkm/zeptoclaw/pull/380) | dependabot[bot] | chore(deps): docker/login-action 3.7.0→4.0.0 |
| [#375](https://github.com/qhkm/zeptoclaw/pull/375) | dependabot[bot] | chore(deps): docker/build-push-action 6.19.2→7.0.0 |
| [#411](https://github.com/qhkm/zeptoclaw/pull/411) | dependabot[bot] | chore(deps): cargo-deny-action bump |
| [#385](https://github.com/qhkm/zeptoclaw/pull/385) | dependabot[bot] | chore(deps): rustyline 15.0.0→17.0.2 |
| [#413](https://github.com/qhkm/zeptoclaw/pull/413) | dependabot[bot] | chore(deps): bcrypt 0.18.0→0.19.0 |
| [#374](https://github.com/qhkm/zeptoclaw/pull/374) | dependabot[bot] | chore(deps): debian base image update |
| [#378](https://github.com/qhkm/zeptoclaw/pull/378), [#383](https://github.com/qhkm/zeptoclaw/pull/383) | dependabot[bot] | chore(deps): @astrojs/starlight 0.37.6→0.37.7 |
| [#384](https://github.com/qhkm/zeptoclaw/pull/384) | dependabot[bot] | chore(deps-dev): @types/node 25.3.0→25.3.5 |

**Key Advances**: Telegram UX significantly improved (long message splitting); tool execution hardened for security; extensive dependency modernization across Rust, Docker, and JavaScript ecosystems.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#397](https://github.com/qhkm/zeptoclaw/issues/397) — Community request | 2 comments, closed | **User need**: Configuration help for Qwen model integration. **Signal**: Documentation gap for non-OpenAI providers; community infrastructure (Discord/forum) requested |
| [#403](https://github.com/qhkm/zeptoclaw/issues/403) — Critical tool bug | 1 comment, closed | **Technical debt**: Fuzzy matching edge cases in `edit_file`; rapid maintainer response demonstrates prioritization |

### Open PRs with Traction

| PR | Focus | Community Need |
|:---|:---|:---|
| [#420](https://github.com/qhkm/zeptoclaw/pull/420) | Telegram photo support | **High-demand UX gap** — users expect multimodal interaction |
| [#418](https://github.com/qhkm/zeptoclaw/pull/418) | Typing indicator race fix | Production reliability for concurrent users |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) | ACP (Agent Client Protocol) | **Strategic**: Stdio + HTTP implementation for MCP/ACPX ecosystem integration |

**Underlying Pattern**: Telegram channel maturation is the dominant user-facing theme; protocol standardization (ACP) indicates positioning for broader AI agent ecosystem interoperability.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **P1-Critical** | [#416](https://github.com/qhkm/zeptoclaw/issues/416) — Model discoverability regressions | **Open** | [#417](https://github.com/qhkm/zeptoclaw/pull/417) | `provider_name_for_model()` breaks OpenRouter routing; `fetch_provider_models()` ignores `RuntimeProvider` overrides |
| **P1-Critical** | [#415](https://github.com/qhkm/zeptoclaw/issues/415) — Telegram typing race condition | **Open** | [#418](https://github.com/qhkm/zeptoclaw/pull/418) | Concurrent messages cancel wrong typing indicators; refcount fix in review |
| **High** | [#419](https://github.com/qhkm/zeptoclaw/issues/419) — Telegram photo messages dropped | **Open** | [#420](https://github.com/qhkm/zeptoclaw/pull/420) | Silent failure on all photo/document messages; root cause identified, fix pending |
| **Resolved** | [#403](https://github.com/qhkm/zeptoclaw/issues/403) — `edit_file` fuzzy-match bugs | Closed | [#398](https://github.com/qhkm/zeptoclaw/pull/398) | NFC fallback range mapping errors; whitespace normalization hangs |

**Stability Assessment**: Three active P1/high issues all cluster around **Telegram channel reliability** and **provider routing logic**. Maintainer response is rapid (all have fix PRs within 24h). No systemic architectural concerns—surface area bugs in recently shipped features.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in v0.9 |
|:---|:---|:---|
| **Multimodal Telegram support** (photos, documents) | [#419](https://github.com/qhkm/zeptoclaw/issues/419), [#420](https://github.com/qhkm/zeptoclaw/pull/420) | **High** — PR ready, addresses silent failure UX |
| **ACP protocol standardization** | [#356](https://github.com/qhkm/zeptoclaw/pull/356) | **Medium-High** — 11 days old, substantial implementation, positions for MCP compatibility |
| **Discord text attachment support** | [#414](https://github.com/qhkm/zeptoclaw/pull/414) | **Medium** — Channel parity effort |
| **Claude Code workflow documentation** | [#421](https://github.com/qhkm/zeptoclaw/pull/421) | **High** — Low-risk docs PR, improves contributor experience |

**Predicted v0.9 Themes**: Channel ecosystem completeness (Telegram multimodal, Discord parity), protocol interoperability (ACP), and developer experience (Claude Code guidelines, model configuration docs).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | Photos dropped, long messages rejected without error | **High UX impact** — users cannot diagnose problems |
| **Model configuration complexity** | [#397](https://github.com/qhkm/zeptoclaw/issues/397) Qwen setup struggles | **Medium** — documentation/validation gap for non-OpenAI providers |
| **Concurrent message handling** | [#415](https://github.com/qhkm/zeptoclaw/issues/415) race condition | **Medium** — affects group chat / high-throughput scenarios |

### Positive Signals
- Rapid maintainer response to critical issues (24h fix cycle)
- Active dependency maintenance indicates project health
- Community interest in non-OpenAI providers (Qwen) suggests diverse adoption

### Use Case Evolution
Users are pushing ZeptoClaw beyond simple text bots into **multimodal, multi-user production deployments**—stress-testing channel implementations that were originally minimal viable products.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP implementation | 11 days | **Medium** — large feature, may need rebase | Maintainer review for architectural alignment; contributor `starsy` active |
| [#414](https://github.com/qhkm/zeptoclaw/pull/414) Discord attachment fix | 1 day | **Low** — new, incomplete description | Author `rafaellin` to complete PR template |
| [#421](https://github.com/qhkm/zeptoclaw/pull/421) Claude Code docs | 1 day | **Low** | Quick win—docs review and merge |

**No critical stale items**. The ACP PR (#356) is the most significant long-running contribution—strategic value for ecosystem positioning warrants prioritization.

---

*Digest generated from GitHub activity 2026-03-24. Project health: **Strong** — high velocity, responsive maintainers, clear technical direction toward channel reliability and protocol interoperability.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-25

**Repository:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw shows **moderate development velocity** with three PRs closed in the past 24 hours, all authored by `chinayin` and merged on March 24. No new issues were opened or active, indicating either a stable codebase or limited community engagement. The project appears to be in an **intensive UI/UX refinement phase**, with all recent work focused on authentication flows, account interfaces, and component architecture. Zero releases and zero open issues suggest the maintainers are prioritizing internal polish over public-facing version increments. Overall project health appears **stable but insular**—heavy contributor activity without visible external feedback loops.

---

## 2. Releases

**No new releases** — No version tags or release notes published.

---

## 3. Project Progress

Three PRs were **merged/closed today** (2026-03-24), representing a coordinated UI modernization push:

| PR | Title | Key Advancements |
|:---|:---|:---|
| [#24](https://github.com/gaoyangz77/rivonclaw/pull/24) | Account UI redesign popover | **Navigation pattern change**: Eliminated dedicated `/account` page in favor of popover dropdown on avatar click. Introduces `UserPopover` component with contextual states (logged-in vs. logged-out), theme-consistent styling matching `theme-menu-popup`, and plan/subscription visibility. |
| [#23](https://github.com/gaoyangz77/rivonclaw/pull/23) | Redesign auth modal & account page | **Authentication UX overhaul**: Pill-style tab switcher, password visibility toggle with eye icons, strength indicator, compact CAPTCHA layout, input validation limits, legal compliance links (privacy/terms), and auto-registration flow for unknown emails. Account page migrated to split-card layout matching settings aesthetic. |
| [#20](https://github.com/gaoyangz77/rivonclaw/pull/20) | UI Migration: Component Refactor + Theme Separation + Skills Page | **Architecture foundation**: Extracted `BottomActions` component consolidating sidebar controls (theme, language, help, user), centralized all SVG icons into `icons.tsx` with `Icon` base class, and introduced Skills Page scaffolding. |

**Pattern identified**: Sequential dependency—#20 established component infrastructure, #23/#24 built atop it for auth and account experiences.

---

## 4. Community Hot Topics

**No active community discussion detected.**

| Metric | Value |
|:---|:---|
| Issues with comments (24h) | 0 |
| PRs with comments (24h) | 0 (all show `undefined` comment count) |
| Total reactions (👍) across 3 PRs | 0 |

**Analysis**: The `undefined` comment counts and zero reactions suggest either:
- GitHub API data truncation in source feed
- **Silent merge pattern** — PRs being merged without review discussion
- Small core team with out-of-band communication (Discord/Slack)

**Underlying need signal**: Absence of external engagement indicates project may be **pre-launch or team-internal**, with community building deferred until MVP stabilization.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions identified in 24h.**

| Severity | Count | Details |
|:---|:---|:---|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

**Stability note**: The UI refactor scope (#20, #23, #24) carries **inherent regression risk**—navigation pattern changes and component extraction can introduce state management edge cases. No post-merge issues suggests either robust testing or limited production usage.

---

## 6. Feature Requests & Roadmap Signals

**No explicit user feature requests** found in issues.

**Inferred roadmap from merged PRs:**

| Likely Near-Term | Evidence |
|:---|:---|
| **Subscription/billing integration** | "plan card" in #24 popover, "plan" field in account UI |
| **Skills marketplace/feature system** | Dedicated Skills Page introduced in #20 |
| **Internationalization (i18n)** | `LangToggle` component in #20, though no locale files visible |
| **Mobile-responsive polish** | Popover patterns typically precede mobile breakpoint work |

**Prediction**: Next version likely to include **subscription tier management** and **skills onboarding flow**, given UI groundwork laid.

---

## 7. User Feedback Summary

**No direct user feedback available** — zero issues, zero PR comments from external users.

**Proxy indicators from implementation choices:**

| Observation | Implied Pain Point Addressed |
|:---|:---|
| Auto-register on unknown email (#23) | Reduces friction vs. "user not found" errors |
| Password strength bar + toggle | Security anxiety, input error recovery |
| Popover vs. page navigation (#24) | Context preservation, faster access |
| Split-card layout matching settings | **Consistency** as explicit design priority |

**Satisfaction hypothesis**: Target users appear to be **productivity-focused professionals** valuing speed, visual consistency, and minimal context-switching.

---

## 8. Backlog Watch

| Category | Items | Risk Level |
|:---|:---|:---|
| Stale issues (>30 days) | 0 | — |
| Unreviewed PRs | 0 | — |
| Maintainer attention needed | **None identified** | — |

**Watch items for monitoring:**

1. **Skills Page (#20)** — Scaffolded but no visible functionality; may need feature completion PR
2. **Test coverage** — No test files mentioned in any PR summary; implicit technical debt
3. **Documentation** — No README/docs updates in UI refactor wave; onboarding friction risk

---

*Digest generated from GitHub activity 2026-03-24. Data source: gaoyangz77/easyclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*