# OpenClaw Ecosystem Digest 2026-05-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-13 00:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-13

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a project in active development with substantial community engagement. The 86% open rate for issues (431/500) and 88% open rate for PRs (438/500) suggests a growing backlog that may strain maintainer capacity. Three beta releases shipped today (v2026.5.12-beta.1 through beta.3), all focused on Codex harness stability and security hardening. The project is clearly in a **Codex migration sprint**, with multiple PRs addressing runtime parity, native plugin integration, and context-engine compatibility. Community heat is concentrated around messaging platform reliability (Slack, WhatsApp, Telegram, Discord) and the Codex transition experience.

---

## 2. Releases

### [v2026.5.12-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3)
**Fixes:**
- **Codex harness auth-profile media tools**: Restores `image_generate` and other auth-profile-backed media tools when OpenAI credentials live in the agent's auth-profile store rather than environment variables. Critical for users migrating to profile-based secrets management.
- **WhatsApp/Baileys pnpm 11 compatibility**: Allows Baileys' pinned `libsignal` git subdependency to resolve under pnpm 11, unblocking source installs.

### [v2026.5.12-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.2)
*(Same fixes as beta.3 — likely rapid iteration on beta.1 issues)*

### [v2026.5.12-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.1)
**Security & build fixes:**
- **[#80897](https://github.com/openclaw/openclaw/issues/80897)**: `memory-wiki` ingest now requires `admin` scope (AI-assisted, thanks @pgondhi987)
- **[#80904](https://github.com/openclaw/openclaw/issues/80904)**: `memory-wiki` Obsidian search now requires `write` scope (AI-assisted, thanks @pgondhi987)
- **Build optimization**: Skip copied metadata for bundled plugins excluded from build entries, preventing stale update/status artifacts

**Breaking/Security Note:** The scope changes in beta.1 are **hardening fixes** that may break existing automation using unscoped tokens for wiki operations.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| **[#79112](https://github.com/openclaw/openclaw/pull/79112)** | kevinslin | Preserve runtime alias with compat wrappers | Fixes TUI/local run failures from stale wrapper chunks |
| **[#78444](https://github.com/openclaw/openclaw/pull/78444)** | kevinslin | **Codex native plugin migration** (XL docs) | Migrates `openai-curated` plugins to Codex app-server activations |
| **[#78443](https://github.com/openclaw/openclaw/pull/78443)** | kevinslin | Use Codex native plugin thread | Codex plugins now run as native apps, not dynamic tools |

### Active Development (Open PRs with Recent Updates)

| PR | Author | Summary | Status |
|:---|:---|:---|:---|
| **[#81224](https://github.com/openclaw/openclaw/pull/81224)** | hclsys | Self-hosted wildcard discovery with explicit config | Fresh today |
| **[#81206](https://github.com/openclaw/openclaw/pull/81206)** | pashpashpash | Trust installed Codex for private task runtime | Fixes beta migration blocker |
| **[#81223](https://github.com/openclaw/openclaw/pull/81223)** | jalehman | **Rotate incompatible context-engine threads** | Critical for Codex session stability |
| **[#81217](https://github.com/openclaw/openclaw/pull/81217)** | JARVIS-Glasses | Normalize array tool schemas | AI-assisted, schema robustness |
| **[#80807](https://github.com/openclaw/openclaw/pull/80807)** | hclsys | Fix 1ms busy-loop on exhausted image budget | Performance fix for media understanding |
| **[#81215](https://github.com/openclaw/openclaw/pull/81215)** | giodl73-repo | Fix JSON output routing for commitments CLI | UX fix for automation |
| **[#81219](https://github.com/openclaw/openclaw/pull/81219)** | sjf | Add `suppressPlanLog` for embedding callers | Onboarding polish |

**Key Advancement:** The Codex migration is reaching **production readiness** with [#81206](https://github.com/openclaw/openclaw/pull/81206) and [#81223](https://github.com/openclaw/openclaw/pull/81223) addressing runtime aliasing and context-engine thread compatibility — previously blockers for users on the beta path.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | 👍 | Core Need |
|:---|:---|:---:|:---:|:---|
| **[#72808](https://github.com/openclaw/openclaw/issues/72808)** | Silently lost connection to Slack | 16 | 2 | **Reliability transparency** — users need detection + auto-recovery, not silent failure |
| **[#80319](https://github.com/openclaw/openclaw/issues/80319)** | QA tool-defaults conflates Codex-native vs. dynamic tools | 14 | 1 | **Test fidelity** — harness accuracy for Codex parity validation |
| **[#68596](https://github.com/openclaw/openclaw/issues/68596)** | Configurable streaming watchdog timeout | 12 | 7 | **Model diversity** — reasoning models (Kimi K2.5, DeepSeek-R1) need longer thresholds |
| **[#80171](https://github.com/openclaw/openclaw/issues/80171)** | Codex-vs-Pi runtime parity QA harness (RFC) | 11 | 1 | **Migration confidence** — systematic proof that Codex matches legacy behavior |
| **[#73148](https://github.com/openclaw/openclaw/issues/73148)** | Opaque "Failed to optimize image" without sharp | 10 | 2 | **Dependency clarity** — graceful degradation + actionable errors |

### Underlying Pattern Analysis

- **Slack/Telegram/WhatsApp reliability** dominates the top issues — these are **production deployment blockers** for business users
- **Codex migration anxiety** is driving QA/infrastructure investment (#80171, #80319, #80397, #80411, #80936) — users need proof of parity
- **Reasoning model support** (#68596, #71491) signals user adoption beyond fast LLMs

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---:|:---|
| **🔴 Critical** | **[#71127](https://github.com/openclaw/openclaw/issues/71127)** | Open | ❌ | Stuck sessions detected but never aborted — requires **external gateway restart** |
| **🔴 Critical** | **[#81114](https://github.com/openclaw/openclaw/issues/81114)** | Open | ❌ | Codex app-server timeout/fallback during large-context turns — **silent model downgrade** |
| **🟠 High** | **[#72808](https://github.com/openclaw/openclaw/issues/72808)** | Open | ❌ | Slack silent disconnection — no recovery mechanism |
| **🟠 High** | **[#71992](https://github.com/openclaw/openclaw/issues/71992)** | Open | ❌ | Control UI webchat **duplicates every reply** — regression from #5964/#39469 |
| **🟠 High** | **[#71412](https://github.com/openclaw/openclaw/issues/71412)** | Open | ❌ | `stopChannel` zombie tasks prevent health-monitor restart |
| **🟠 High** | **[#78435](https://github.com/openclaw/openclaw/issues/78435)** | Open | ❌ | Slack `start-account` blocks event loop 5+ min on Windows |
| **🟡 Medium** | **[#72879](https://github.com/openclaw/openclaw/issues/72879)** | Open | ❌ | `thought_signature` 400 regression in Google Generative AI |
| **🟡 Medium** | **[#72087](https://github.com/openclaw/openclaw/issues/72087)** | Open | ❌ | Codex OAuth image generation broken on `dist/entry.js` path vs. direct run |
| **🟢 Fixed** | **[#80437](https://github.com/openclaw/openclaw/issues/80437)** | **Closed** | ✅ | Discord native-slash-command deploy failed |
| **🟢 Fixed** | **[#80777](https://github.com/openclaw/openclaw/issues/80777)** | **Closed** | ✅ | Plaintext tokens never scrubbed from config-audit logs |
| **🟢 Fixed** | **[#70856](https://github.com/openclaw/openclaw/issues/70856)** | **Closed** | ✅ | WhatsApp listener disconnects on Windows |
| **🟢 Fixed** | **[#72867](https://github.com/openclaw/openclaw/issues/72867)** | **Closed** | ✅ | Telegram agent reply delivery failure |

**Stability Assessment:** Two **critical unpatched bugs** involve session/gateway recovery failures requiring manual intervention. The Codex timeout/fallback issue (#81114) is particularly concerning as it causes **undetected model degradation**. Windows users face disproportionate Slack/loop-blocking issues.

---

## 6. Feature Requests & Roadmap Signals

| Issue | 👍 | Signal Strength | Likely Version |
|:---|:---:|:---|:---|
| **[#68596](https://github.com/openclaw/openclaw/issues/68596)** Configurable streaming watchdog | 7 | ⭐⭐⭐⭐⭐ | Near-term — small surface, high demand for reasoning models |
| **[#80213](https://github.com/openclaw/openclaw/issues/80213)** Skill setup hook | 4 | ⭐⭐⭐⭐⭐ | Near-term — closes install gap, author-requested |
| **[#37634](https://github.com/openclaw/openclaw/issues/37634)** Sandbox `workspaceAccess: none` writable workspaces | 4 | ⭐⭐⭐⭐☆ | Medium-term — security/usability tension |
| **[#53599](https://github.com/openclaw/openclaw/issues/53599)** Chrome extension cross-machine replacement | 4 | ⭐⭐⭐⭐☆ | Unclear — architectural decision needed on remote relay |
| **[#71195](https://github.com/openclaw/openclaw/issues/71195)** OpenAI Realtime for macOS Talk Mode | 1 | ⭐⭐⭐☆☆ | Medium-term — parity with voice-call plugin |
| **[#37487](https://github.com/openclaw/openclaw/issues/37487)** Per-agent isolated browsers with proxy | 0 | ⭐⭐⭐☆☆ | Hard — requires sandbox architecture changes |
| **[#71058](https://github.com/openclaw/openclaw/issues/71058)** Multiple Azure/Teams bots per gateway | 1 | ⭐⭐⭐☆☆ | Medium-term — enterprise ask |
| **[#71736](https://github.com/openclaw/openclaw/issues/71736)** Control UI plugin contribution slots | 0 | ⭐⭐⭐⭐☆ | Near-term — RFC already in progress |

**Prediction:** The configurable watchdog (#68596) and skill setup hook (#80213) are **most likely to land in next release** due to focused scope and clear user demand. The Control UI contribution slots (#71736) has maintainer engagement and aligns with the plugin ecosystem expansion.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Silent failures everywhere** | Slack disconnects, WhatsApp undelivered replies, stuck sessions, Telegram DM fabrications | 🔴 Critical |
| **Codex migration uncertainty** | Multiple QA parity issues, tool conflation, timeout fallbacks | 🟠 High |
| **Windows second-class experience** | Event loop blocking, WhatsApp disconnects, path-specific bugs | 🟠 High |
| **Opaque errors** | "Failed to optimize image" without `sharp`, `[object Object]` hallucinations | 🟡 Medium |
| **Configuration rigidity** | Plugin config requires image rebuild, hard upload limits, no env-var overlay | 🟡 Medium |
| **Mid-update message loss** | `openclaw update` during active turns drops all messages | 🟡 Medium |

### Satisfaction Signals
- Active **QA lab infrastructure** (#80171, #80397, #80936) shows investment in quality
- Rapid **security hardening** (beta.1 scope fixes, config audit scrubbing)
- **Multi-platform expansion**: Feishu, Teams, Android release handoff in progress

### Dissatisfaction Signals
- **Duplicate replies in webchat** (#71992) — "Every assistant reply appears exactly twice"
- **Gateway stop doesn't stop** (#72948) — "returns 'Gateway service disabled' without killing"
- **Session lane starvation** (#54488) — "blocks inbound dispatch for 20-30min"

---

## 8. Backlog Watch

### Long-Unanswered Critical Issues Needing Maintainer Attention

| Issue | Age | Last Update | Risk |
|:---|:---|:---|:---|
| **[#54488](https://github.com/openclaw/openclaw/issues/54488)** Session lane starvation | ~7 weeks | 2026-05-12 | **Production outage risk** — multi-channel gateways stall |
| **[#37634](https://github.com/openclaw/openclaw/issues/37634)** Sandbox workspaceAccess none writable | ~10 weeks | 2026-05-12 | Security vs. usability deadlock |
| **[#37487](https://github.com/openclaw/openclaw/issues/37487)** Per-agent isolated browsers | ~10 weeks | 2026-05-12 | Enterprise proxy compliance |
| **[#53599](https://github.com/openclaw/openclaw/issues/53599)** Chrome extension cross-machine regression | ~8 weeks | 2026-05-12 | **Hosting provider breakage** — no migration path offered |
| **[#57901](https://github.com/openclaw/openclaw/issues/57901)** Safeguard compaction ignores config | ~6 weeks | 2026-05-12 | Cost/safety issue — uses wrong model |
| **[#63557](https://github.com/openclaw/openclaw/pull/63557)** Gateway audit logging | ~5 weeks | 2026-05-13 | **Compliance need** — marked "dirty-candidate" |

### Stale PRs at Risk of Bitrot

| PR | Age | Blocker |
|:---|:---|:---|
| **[#63057](https://github.com/openclaw/openclaw/pull/63057)** Anthropic budget_tokens guard | ~5 weeks | Needs merge — trivial fix, safety issue |
| **[#63321](https://github.com/openclaw/openclaw/pull/63321)** Tailscale JSON.parse crash | ~5 weeks | Trivial, unmerged — resiliency gap |
| **[#63320](https://github.com/openclaw/openclaw/pull/63320)** SSRF typo fix | ~5 weeks | Refactor-only, low risk |
| **[#63193](https://github.com/openclaw/openclaw/pull/63193)** Android release handoff | ~5 weeks | Release infrastructure — high value |

**Recommendation:** The project would benefit from a **bug squash sprint** focusing on the top 5 reliability issues (Slack, session recovery, stuck processing, duplicate replies, zombie tasks) before further Codex feature expansion. The 5-week-old PR backlog suggests **reviewer bandwidth constraints** that automated triage or contributor office hours could address.

---

*Digest generated from GitHub data for openclaw/openclaw on 2026-05-13. All links verified against provided dataset.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
## 2026-05-13 Community Digest Analysis

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **intense maturation pressure** in mid-2026, with projects racing to transition from experimental prototypes to production-deployable infrastructure. A dominant theme is the **Codex migration sprint** (OpenClaw, ZeroClaw, NanoBot), as OpenAI's Codex model forces architectural rewrites across runtime, plugin, and context-engine layers. Concurrently, **multi-channel reliability** (Slack, WhatsApp, Telegram, Discord, WeCom, Feishu) has emerged as the critical production blocker, with silent failures and connection drops dominating user pain points. The ecosystem is bifurcating between **heavyweight reference implementations** (OpenClaw, IronClaw) optimized for extensibility and **lightweight alternatives** (NanoBot, PicoClaw, NanoClaw) prioritizing deployment simplicity, though the latter struggle with security and configuration rigidity tradeoffs.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.5.12-beta.1–3 | 🟡 Active/stressed | Exceptional velocity, severe backlog strain, Codex sprint |
| **NanoBot** | 8 | 18 | None (v0.1.5.post3 current) | 🟢 Healthy | Rapid iteration, architectural cleanup, DeepSeek V4 crisis |
| **Hermes Agent** | 50 | 50 | None (v0.13.0 current) | 🟡 Active/stressed | High throughput, duplicate PRs, data-loss critical bug |
| **PicoClaw** | 16 | 16 | v0.2.8-nightly | 🟡 Stabilizing | Security fixes pending, approaching release |
| **NanoClaw** | 5 | 19 | None | 🟡 Active/growing | Security hardening, OneCLI tension, backlog accumulation |
| **NullClaw** | 1 | 2 | None | 🟢 Stable/low-velocity | Soak-tested gateway fixes, A2A performance concern |
| **IronClaw** | 29 | 50 | None | 🟡 Active/stressed | Reborn architecture sprint, P1 auth bugs under-triaged |
| **LobsterAI** | 0 | 25 | None (2026.5.11 via PR) | 🟢 Internal-disciplined | Zero external issues, core-team dominated, enterprise polish |
| **CoPaw (QwenPaw)** | 31 | 39 | v1.1.7-beta.1 | 🟢 Healthy/iterating | Strong merge ratio, ACP maturation, browser automation pain |
| **ZeroClaw** | 13 | 50 | None | 🟡 Active/review-constrained | Rate-limiting architecture cleanup, media pipeline fixes |
| **ZeptoClaw** | 0 | 3 | None | 🔴 Stagnant | Automated-only activity, zero community engagement |
| **TinyClaw** | 0 | 0 | None | ⚪ Dormant | No activity |
| **Moltis** | 0 | 0 | None | ⚪ Dormant | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = 10–25× nearest active competitor | CoPaw (70 items), IronClaw (79), ZeroClaw (63) |
| **Release velocity** | 3 beta releases in 24 hours | Most projects: zero releases; LobsterAI bundles via PR |
| **Platform coverage** | 8+ messaging channels (Slack, WhatsApp, Telegram, Discord, Feishu, Teams, etc.) | ZeroClaw lacks WeCom; NanoBot building Feishu; Hermes adding Matrix |
| **Codex readiness** | Native plugin migration, runtime parity harness, context-engine rotation | ZeroClaw has Codex onboarding confusion; NanoBot has DeepSeek V4 issues |
| **Security investment** | Scope hardening (memory-wiki), config audit scrubbing, auth-profile media tools | NanoClaw catching up on OneCLI exposure; PicoClaw has sandbox escape unpatched |

### Technical Approach Differences

| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Runtime model** | Codex-native app-server activations; dynamic tool → native plugin migration | CoPaw: ACP (Agent Communication Protocol) with async delegation; IronClaw: "Reborn" loop with SkillContextService |
| **Plugin architecture** | Native Codex apps with thread isolation | NanoBot: Self-describing tools (#3729); CoPaw: FastAPI router registration (#4255) |
| **Memory system** | `memory-wiki` with scope-based access control | CoPaw: Auto-memory with vector index desync issues; LobsterAI: "Dreaming" background consolidation |
| **Configuration** | Auth-profile store, env-var overlay limited | NanoBot: ModelPresetConfig with runtime switching; PicoClaw: `.security.yml` for secrets |
| **Deployment target** | Docker, source install (pnpm), multi-gateway | NanoClaw: OneCLI container orchestration; NullClaw: RISC-V, Android, musl cross-platform |

### Community Size Comparison

OpenClaw operates at **ecosystem-defining scale**: its daily issue/PR volume exceeds the *combined* 24-hour activity of NanoBot, Hermes, PicoClaw, NanoClaw, NullClaw, and ZeptoClaw. However, this scale creates **maintainer bandwidth constraints** (88% open PR rate) that smaller projects avoid. LobsterAI demonstrates the alternative: zero external issues with 25 same-day merges, suggesting either elite internal QA or limited adoption visibility.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Codex / reasoning model compatibility** | OpenClaw, ZeroClaw, NanoBot, Hermes | Runtime parity validation; `thinking`/`reasoning_content` handling; timeout/watchdog configuration for long inference |
| **Multi-channel reliability & silent failure detection** | OpenClaw, Hermes, PicoClaw, CoPaw, NanoClaw | Auto-recovery from Slack/WhatsApp/Telegram disconnects; delivery acknowledgment; zombie session cleanup |
| **Streaming infrastructure** | PicoClaw, CoPaw, OpenClaw, LobsterAI | Real-time UX parity (CLI vs. Web); SSE broadcast; HTTP/2 to LLM backends; Telegram streaming |
| **Memory consistency & persistence** | CoPaw, LobsterAI, OpenClaw, NanoBot | Vector index synchronization; session deserialization robustness; interrupt-resilient context; per-user isolation |
| **Security hardening** | NanoClaw, PicoClaw, OpenClaw, IronClaw | Container network binding restrictions; sandbox escape prevention; OAuth flow reliability; scope-based access control |
| **Cross-platform shell/execution** | CoPaw, Hermes, PicoClaw | POSIX on Windows (Cygwin/MSYS2); configurable default/login shell; PATH/environment inheritance |
| **Rate-limiting & tool governance** | ZeroClaw, OpenClaw | Centralized policy wrappers; per-tool budget guards; `RateLimitedTool` architectural pattern |
| **A2P/ACP agent interoperability** | CoPaw, NullClaw | Async delegation; official SDK adoption; synchronous webhook workers; performance benchmarking |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation breadth; Codex migration leadership | Power users, multi-channel deployers, plugin developers | Modular gateway + agent core; native plugin runtime; extensive channel adapters |
| **NanoBot** | Lightweight Python agent; rapid provider ecosystem expansion | China-market users, quick deployers, education | File-based memory (`USER.md`/`MEMORY.md`); slash-command UX; minimal container footprint |
| **Hermes Agent** | Speed-to-deployment; education/college segment; multi-agent Discord ops | Students, small teams, hobbyist fleet operators | Homebrew packaging; cron delivery; inline keyboard abstraction |
| **PicoClaw** | Edge/embedded hardware focus (Sipeed, RISC-V, NXP) | IoT developers, hardware-integrated agents, offline deployments | Rust-based; workspace embedding; ARM64 optimization; Android builds |
| **NanoClaw** | "Lightweight, reasonable alternative to OpenClaw" | Self-hosters rejecting complexity, bare-metal operators | OneCLI container orchestration; Google Workspace skill suite; MCP-first tools |
| **NullClaw** | Cross-platform extreme (RISC-V, Android, musl) | Embedded systems, protocol researchers | A2A protocol implementation; soak-tested gateway; minimal dependencies |
| **IronClaw** | NEAR blockchain integration; "Reborn" next-gen architecture | Web3 developers, crypto-native agents, enterprise payroll | Loop hooks framework; memory as userland capability; SkillContextService |
| **LobsterAI** | Desktop productivity suite; Chinese market integration; voice input | Knowledge workers, Youdao ecosystem users, accessibility needs | Electron-based; per-agent working directories; "Dreaming" autonomous memory |
| **CoPaw (QwenPaw)** | ACP (Agent Communication Protocol) ecosystem; Qwen model optimization | Multi-agent workflow builders, enterprise team automation | Async delegation; AgentLoop framework; browser automation; plugin FastAPI routers |
| **ZeroClaw** | Media generation pipeline (ComfyUI, RunPod); Home Assistant integration | Creative automation, smart home operators, visual content workflows | Claude Code vision; `RateLimitedTool` wrappers; Docker observability |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Architecture Sprints)

| Project | Sprint Focus | Risk |
|:---|:---|:---|
| **OpenClaw** | Codex native migration; runtime parity | Maintainer burnout from 88% open PR rate; critical unpatched session bugs |
| **IronClaw** | Reborn architecture maturation; AgentLoop framework | P1 auth/setup bugs under-triaged relative to architecture work |
| **CoPaw** | ACP official SDK; async delegation; plugin ecosystem | Browser automation brittleness; configuration unpredictability |

### Tier 2: Active Stabilization (Production Readiness)

| Project | Stabilization Target | Blocker |
|:---|:---|:---|
| **PicoClaw** | v0.2.8 stable release | Unmerged security fix (#2693 sandbox escape) and PID crash fix (#2813) |
| **NanoBot** | v0.1.6 with DeepSeek V4 compatibility | `reasoning_content` injection logic breaking flash/pro variants |
| **ZeroClaw** | Post-rate-limiting refactor consolidation | 153 commits lost in bulk revert (#6074); review bottleneck (64% open PRs) |
| **Hermes Agent** | v0.13.0 stabilization | Data-loss bug (#24541 `git reset --hard`); duplicate PR coordination needed |

### Tier 3: Healthy Maintenance

| Project | Characteristics |
|:---|:---|
| **NanoClaw** | Security-driven; OneCLI tension unresolved; growing backlog |
| **NullClaw** | Low velocity, high quality; soak-tested; A2A credibility question |
| **LobsterAI** | Elite internal discipline; zero external community; potential feedback funnel failure |

### Tier 4: Stagnant / Dormant

| Project | Status |
|:---|:---|
| **ZeptoClaw** | Automated-only; no human contributions; security exposure from pending Docker bump |
| **TinyClaw, Moltis** | Zero activity |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|:---|:---|:---|
| **Reasoning model operationalization** | Watchdog timeouts (#68596 OpenClaw, #68596), `thinking` mode API incompatibilities (#3753/#3760 NanoBot), prompt caching (#24639 Hermes) | Agent frameworks need **model-agnostic inference lifecycle management** — not just API wrappers, but timeout policies, token budget guards, and reasoning content protocol normalization |
| **Silent failure as existential risk** | Slack disconnects (#72808 OpenClaw), WhatsApp cron drops (#22997 Hermes), delivery retry exhaustion (#2423 NanoClaw), session lane starvation (#54488 OpenClaw) | Production agents require **observable, recoverable channel infrastructure** — not just adapters, but health monitoring, circuit breakers, and dead-letter queues |
| **Memory as differentiated capability** | "Dreaming" consolidation (LobsterAI), auto-memory index desync (#4220 CoPaw), vector search vs. file persistence gap, per-user isolation (#3744 NanoBot) | **Memory architecture is becoming the moat** — simple RAG insufficient; developers need transactional consistency between persistence and search, plus multi-tenancy primitives |
| **Agent-to-agent protocol maturation** | ACP SDK adoption (#3589 CoPaw), A2A performance scrutiny (#913 NullClaw), multi-agent Discord collaboration (#14853 Hermes), Matrix orchestration (#22714 Hermes) | **Interoperability is shifting from demo to infrastructure** — protocols need benchmark transparency, lifecycle guards against infinite loops, and dispatcher-level control |
| **Security as deployment prerequisite** | Scope hardening (OpenClaw), OneCLI network binding (#2433 NanoClaw), sandbox escapes (#2688 PicoClaw), OAuth PKCE (#4256 CoPaw) | **Self-hosted agents are attack surfaces** — secrets management, container network policies, and safe execution environments are no longer optional |
| **Desktop + voice as emerging UX** | macOS dictation 3-tier fallback (LobsterAI), system tray (#4041 CoPaw), Tauri 2.x migration (#3813 CoPaw), voice permission UX (#1952 LobsterAI) | **Multimodal input is converging on ambient assistance** — developers should plan for hands-free, background-operation, and cross-device state synchronization |
| **China-market provider ecosystem** | VolcEngine (#3738 NanoBot), DeepSeek V4 (#3760 NanoBot), Kimi K2.6 (#24268 Hermes), MiMo (#24662 Hermes), Feishu (#3747 NanoBot, #3515 IronClaw), WeCom (#3090 ZeroClaw) | **Global agent frameworks must treat Chinese LLM providers as first-class** — with dedicated compatibility testing, not afterthought adapters |

---

*Report compiled from 2026-05-13 community digests across 13 projects. Data reflects 24-hour GitHub activity windows where specified.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-13

## 1. Today's Overview

NanoBot showed **strong development velocity** with 18 PRs updated in the last 24 hours (10 merged/closed, 8 open) and 8 active issues. The project is in a **rapid iteration phase** focused on provider stability, channel UX parity, and architectural cleanup. No new release was cut, suggesting the team is accumulating changes for a larger version bump. Community engagement is healthy with cross-language participation (Chinese and English), though issue resolution speed varies by complexity.

---

## 2. Releases

**None** — No new releases published today. The latest version remains **v0.1.5.post3**, which appears to be the source of several reported regressions (see Bugs & Stability).

---

## 3. Project Progress

### Merged/Closed PRs Today (10 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3759](https://github.com/HKUDS/nanobot/pull/3759) | XJPeng12 | WebUI defaults to new chat on load, preserves scroll position | UX polish |
| [#3757](https://github.com/HKUDS/nanobot/pull/3757) | chengyongru | **Remove `ask_user` tool** — model now asks naturally in text | Architectural simplification; removes exception-based control flow |
| [#3758](https://github.com/HKUDS/nanobot/pull/3758) | Re-bin | Preserve Bedrock `toolConfig` for historical tool calls | AWS Bedrock compatibility fix |
| [#3755](https://github.com/HKUDS/nanobot/pull/3755) | chengyongru | Remove 103 lines of dead code (vulture + coverage verified) | Code health |
| [#3714](https://github.com/HKUDS/nanobot/pull/3714) | chengyongru | **ModelPresetConfig with runtime preset switching** | Major config infrastructure |
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | Re-bin | Soften SSRF guard recovery — return tool error instead of aborting | Security UX balance |
| [#3747](https://github.com/HKUDS/nanobot/pull/3747) | yorkhellen | **Feishu topic isolation config switch** | Closes [#3692](https://github.com/HKUDS/nanobot/issues/3692) |
| [#3738](https://github.com/HKUDS/nanobot/pull/3738) | AlbertWang688 | Fix VolcEngine `max_tokens`/`max_completion_tokens` conflict | ByteDance cloud provider fix |
| [#3729](https://github.com/HKUDS/nanobot/pull/3729) | chengyongru | **Plugin architecture with self-describing tools** | Major tool system refactor |
| [#3751](https://github.com/HKUDS/nanobot/pull/3751) | 04cb | Fix WeCom filename preservation from SDK | Closes [#3737](https://github.com/HKUDS/nanobot/issues/3737) |

**Key architectural advances:** The `ask_user` tool removal (#3757) and plugin-based tool architecture (#3729) represent significant simplification of the agent loop. Model preset infrastructure (#3714) enables the `/model` slash command feature users are requesting.

---

## 4. Community Hot Topics

| Item | Comments | Engagement | Underlying Need |
|:---|:---|:---|:---|
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) Session-level MEMORY for multi-user agents | 3 | 👍 0 | **Multi-tenancy isolation** — teams need per-user memory boundaries when sharing one agent deployment |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) Interrupted sessions lose chat history | 2 | 👍 0 | **Task continuity** — users expect interrupt-resilient context, especially for long-running test/debug loops |
| [#3742](https://github.com/HKUDS/nanobot/issues/3742) `/model` slash command for dynamic switching | 1 | 👍 0 | **Provider resilience** — China mainland users need on-the-fall model failover due to instability |

**Analysis:** The multi-user memory question (#3744) reveals a deployment pattern gap — NanoBot's `USER.md`/`MEMORY.md` files appear designed for single-user scenarios. The session directory mechanism is under-documented, causing confusion. The `/model` request (#3742) is functionally addressed by today's merged #3714 (preset switching), suggesting imminent CLI/UX exposure.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **🔴 High** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) `deepseek-v4-flash` + post3: `reasoning_content` 400 error | **OPEN** | No | Invalid request error on first turn; affects both flash and pro variants |
| **🔴 High** | [#3753](https://github.com/HKUDS/nanobot/issues/3753) Same `reasoning_content` issue (closed as duplicate?) | **CLOSED** | No | Same root cause as #3760; user workaround: disable `thinking_style` or switch to `deepseek-chat` |
| **🟡 Medium** | [#3754](https://github.com/HKUDS/nanobot/issues/3754) `deepseek-v4-flash` ignores external file content | **OPEN** | No | Model skips `read_file` tool, hallucinates content for small/common-knowledge files (element period table). **Not** reproducible on large files |
| **🟡 Medium** | [#3752](https://github.com/HKUDS/nanobot/pull/3752) Voice transcription leaves stale `media_paths` | **OPEN** | **Yes — PR open** | WhatsApp `.ogg` path persists, LLM sees `[file: ...]` tag post-transcription |

**Pattern:** `deepseek-v4-flash` compatibility is today's **critical stability theme**. The `reasoning_content` injection logic (introduced in post3) is incompatible with DeepSeek's API expectations for this model family. Two distinct symptoms: (1) hard 400 errors, (2) tool call avoidance for file reading. The model-specific `thinking_style` auto-detection requested in #3753 is becoming urgent.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **`/model` slash command** | [#3742](https://github.com/HKUDS/nanobot/issues/3742) | **High** | Infrastructure merged (#3714); needs CLI/UX wiring |
| **Model failover with fallback chains** | [#3756](https://github.com/HKUDS/nanobot/pull/3756) | **High** | PR open today; builds directly on #3714 presets |
| **Streaming tool progress (SSE)** | [#3745](https://github.com/HKUDS/nanobot/pull/3745) | **Medium-High** | PR open; addresses #3698; enhances API transparency |
| **LongTaskTool for multi-step agents** | [#3460](https://github.com/HKUDS/nanobot/pull/3460) | **Medium** | Open since April 26; significant architectural addition |
| **Feishu topic isolation toggle** | [#3692](https://github.com/HKUDS/nanobot/issues/3692) | **Shipped** | Merged via [#3747](https://github.com/HKUDS/nanobot/pull/3747) |
| **Session-level multi-user memory** | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | **Low-Medium** | Requires design decision on memory architecture |
| **Atomic Chat provider support** | [#3750](https://github.com/HKUDS/nanobot/pull/3750) | **Medium** | Straightforward OpenAI-compatible addition; pattern established |

---

## 7. User Feedback Summary

### Pain Points
- **DeepSeek V4 reliability:** China-based users hitting breaking API incompatibilities with `thinking` mode (#3753, #3760, #3754)
- **Context fragility:** Interrupting long tasks causes complete context loss (#3689)
- **File handling inconsistency:** Small files trigger hallucination instead of tool use (#3754); voice message cleanup failure (#3752)
- **WeCom/enterprise integration:** Filename detection was broken (#3737, now fixed)

### Use Cases Emerging
- **Team-shared agents** with per-user memory isolation (#3744)
- **Unstable network environments** requiring dynamic model switching (#3742, #3756)
- **Long-running test/debug workflows** needing interrupt resilience (#3689, #3460)

### Satisfaction Signals
- Rapid fix for Feishu topic isolation (#3747 closing #3692)
- Active provider ecosystem expansion (VolcEngine, Bedrock, Atomic Chat)
- Tool architecture becoming more extensible (#3729)

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) LongTaskTool | ~17 days | **Stagnation** | Review bandwidth; complex multi-step agent architecture |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) Display reasoning content during streaming | ~7 days | **Merge conflict risk** | TUI rendering fix validation; `show_reasoning` config design review |
| [#3744](https://github.com/HKUDS/nanobot/issues/3744) Multi-user session memory | 2 days | **Design needed** | Maintainer decision on memory architecture (file-based vs. database-backed) |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) Interrupt context preservation | 5 days | **User frustration** | Clarification on whether this is bug or expected behavior; may relate to #3460 |

**Recommendation:** The DeepSeek V4 compatibility cluster (#3753/#3760/#3754) should be prioritized for a hotfix release given user-visible breakage in post3. The LongTaskTool PR (#3460) risks bit-rot without maintainer engagement given ongoing architectural changes (#3729, #3757).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-13

## 1. Today's Overview

Hermes Agent shows **high velocity but significant quality pressure** with 50 issues and 50 PRs updated in the last 24 hours. The project is actively maintained with a 22% close rate on issues and 40% merge rate on PRs, though zero new releases suggests the v0.13.0 cycle (released 2026-05-07) is still stabilizing. A notable pattern is the concentration of gateway-related bugs (Telegram, Matrix, webhook) alongside core agent provider integrations (Kimi, DeepSeek, MiMo, MiniMax). The community is particularly engaged on output truncation and multi-agent collaboration workflows, indicating production deployment scaling pains.

---

## 2. Releases

**No new releases** — v0.13.0 (2026-05-07) remains current.

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total, notable items):

| PR | Description | Significance |
|:---|:---|:---|
| [#17065](https://github.com/NousResearch/hermes-agent/pull/17065) | Suppress Anthropic `thinking` on Kimi-compatible custom endpoints | Closes Kimi coding endpoint validation failures |
| [#24659](https://github.com/NousResearch/hermes-agent/pull/24659) | Include `whatsapp` in `_HOME_TARGET_ENV_VARS` for cron delivery | Fixes silent cron delivery failures to WhatsApp |
| [#24658](https://github.com/NousResearch/hermes-agent/pull/24658) | Add Bearer auth header for Tavily `/crawl` endpoint | Restores Tavily web crawling functionality |

### Active Development (Open PRs):

- **Concurrency hardening**: Two competing PRs ([#24668](https://github.com/NousResearch/hermes-agent/pull/24668), [#24666](https://github.com/NousResearch/hermes-agent/pull/24666)) fix the same non-atomic OpenRouter prewarm race condition — indicates either parallel discovery or merge coordination needed
- **Reasoning model expansion**: MiMo support ([#24662](https://github.com/NousResearch/hermes-agent/pull/24662), [#24638](https://github.com/NousResearch/hermes-agent/pull/24638)) and DeepSeek prompt caching ([#24639](https://github.com/NousResearch/hermes-agent/pull/24639)) being actively implemented
- **Gateway security**: Telegram auth fail-close ([#24667](https://github.com/NousResearch/hermes-agent/pull/24667)) addresses critical unauthorized access vector

---

## 4. Community Hot Topics

### Most Active Discussions:

| Issue/PR | Comments | Engagement | Core Need |
|:---|:---|:---|:---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) — Response truncation on output length limit | 24 comments, 4 👍 | **Highest** | Long-form content generation reliability across all interfaces (CLI, Telegram, Discord, Slack) |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) — Matrix: no in-band channel for per-message LLM orchestration | 7 comments | High | Enterprise Matrix deployments need dispatcher-level control over which messages trigger agent responses |
| [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) — Multi-Agent Discord channel collaboration | 6 comments, 1 👍 | Moderate | Shared channel history visibility for specialized agent fleets |
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) — Generic action buttons / inline keyboard support | 5 comments, 4 👍 | Moderate | Platform-agnostic interactive UI primitives |

**Underlying needs analysis**: The truncation bug (#7237) dominates community pain — users need streaming/long-output resilience. Matrix/Discord multi-agent orchestration reveals Hermes being used as infrastructure for team-based AI operations, not just individual assistants. The 4 👍 on inline keyboards vs. 0 on Matrix orchestration suggests UI polish matters more to voters than architectural depth, though the latter may represent larger deployments.

---

## 5. Bugs & Stability

### Critical (P1) — Fix PRs Exist or Urgent:

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#24268](https://github.com/NousResearch/hermes-agent/issues/24268) | **Kimi-k2.6 context length wrong**: OpenRouter returns 32K, blocking initialization (min 64K required) | **No PR yet** — hardcoded 256K default being overridden |
| [#24592](https://github.com/NousResearch/hermes-agent/issues/24592) | **API server strips whitespace** from LLM responses (regression, #2049 not fully fixed) | **No PR yet** — affects all api_server consumers |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix gateway lacks per-message orchestration channel | **No PR yet** — architectural gap |

### High (P2) — Multiple Fix PRs Active:

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#24640](https://github.com/NousResearch/hermes-agent/issues/24640) / [#24644](https://github.com/NousResearch/hermes-agent/issues/24644) | `gateway_restart_notification` config silently ignored | **2 PRs open**: [#24661](https://github.com/NousResearch/hermes-agent/pull/24661), [#24665](https://github.com/NousResearch/hermes-agent/pull/24665) — merge coordination needed |
| [#24067](https://github.com/NousResearch/hermes-agent/issues/24067) | macOS PID lock zombie on gateway restart | **No PR yet** — system process PID collision |
| [#24541](https://github.com/NousResearch/hermes-agent/issues/24541) | `hermes update` triggers `git reset --hard`, destroying user assistants | **No PR yet** — data loss severity |
| [#24544](https://github.com/NousResearch/hermes-agent/issues/24544) | Homebrew `--tui` crashes (missing `ui-tui` directory) | **No PR yet** — packaging gap |

### Medium (P3) — Race Conditions & Provider Edge Cases:

- [#24651](https://github.com/NousResearch/hermes-agent/issues/24651) / PRs [#24668](https://github.com/NousResearch/hermes-agent/pull/24668), [#24666](https://github.com/NousResearch/hermes-agent/pull/24666): OpenRouter prewarm duplicate threads (TOCTOU race)
- [#24623](https://github.com/NousResearch/hermes-agent/issues/24623) / PR [#24636](https://github.com/NousResearch/hermes-agent/pull/24636): URL safety `_global_allow_private_urls` TOCTOU race
- [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) / PRs [#24662](https://github.com/NousResearch/hermes-agent/pull/24662), [#24638](https://github.com/NousResearch/hermes-agent/pull/24638): MiMo reasoning_content not echoed back

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Searxng search provider** | [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) (28 👍) | **High** | Most upvoted open feature; self-hosted alternative to Firecrawl/Tavily aligns with open-source ethos |
| **Groq provider** | [#24512](https://github.com/NousResearch/hermes-agent/issues/24512) | Moderate | "Super fast + free tier" appeals to student/education segment; low implementation cost |
| **Multi-agent Discord collaboration** | [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) | Moderate | Production use case but requires architectural decisions on shared memory |
| **Generic inline keyboards** | [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | Moderate-High | Platform abstraction aligns with existing gateway architecture; 4 👍 indicates demand |
| **Persistent specialized subagents** | [#21303](https://github.com/NousResearch/hermes-agent/issues/21303) | Lower | Architectural proposal for self-improvement signal isolation; needs design review |
| **User profile auto-update diffs** | [#24642](https://github.com/NousResearch/hermes-agent/issues/24642) | High | Small UX improvement, trivial implementation |

**Prediction**: Searxng (#5941) and Groq (#24512) are most likely v0.14.0 candidates due to clear scope and community demand. The inline keyboard abstraction (#15311) may land sooner if it unblocks Telegram clarify tool wiring (related closed #24191).

---

## 7. User Feedback Summary

### Pain Points:

| Category | Evidence | Severity |
|:---|:---|:---|
| **Data loss** | [#24541](https://github.com/NousResearch/hermes-agent/issues/24541): `git reset --hard` on update destroys 12 assistants | Critical — trust erosion |
| **Silent failures** | [#22997](https://github.com/NousResearch/hermes-agent/issues/22997): WhatsApp cron delivery silently dropped; [#24644](https://github.com/NousResearch/hermes-agent/issues/24644): config ignored | High — operational reliability |
| **Output quality** | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237): Truncation mid-stream; [#24592](https://github.com/NousResearch/hermes-agent/issues/24592): Whitespace stripped | High — core product experience |
| **Platform packaging** | [#24544](https://github.com/NousResearch/hermes-agent/issues/24544): Homebrew missing TUI; [#13548](https://github.com/NousResearch/hermes-agent/issues/13548): ACP install confusion | Moderate — onboarding friction |
| **macOS-specific** | [#16376](https://github.com/NousResearch/hermes-agent/issues/16376), [#24067](https://github.com/NousResearch/hermes-agent/issues/24067): PID lock/token staleness | Moderate — platform parity |

### Use Cases Emerging:
- **Education/college deployments**: Speed-critical, cost-sensitive (Groq request #24512)
- **Enterprise team operations**: Multi-agent Matrix/Discord rooms with dispatcher control (#22714, #14853)
- **Self-hosted privacy**: Searxng preference over commercial search APIs (#5941)

---

## 8. Backlog Watch

### Issues Needing Maintainer Triage/Response:

| Issue | Age | Risk |
|:---|:---|:---|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) Searxng provider | ~5 weeks, 28 👍 | Highest community demand; no maintainer response visible |
| [#5352](https://github.com/NousResearch/hermes-agent/issues/5352) Open WebUI tool progress visibility | ~5 weeks, 3 👍 | Integration ecosystem health |
| [#10175](https://github.com/NousResearch/hermes-agent/issues/10175) GPT-5 Responses abort on encrypted content | ~4 weeks | Forward compatibility with OpenAI's latest API patterns |
| [#21303](https://github.com/NousResearch/hermes-agent/issues/21303) Persistent specialized subagents | ~6 days | Architectural direction — needs design decision before implementation |

### Merge Coordination Needed:
- **Duplicate PRs**: [#24661](https://github.com/NousResearch/hermes-agent/pull/24661) vs [#24665](https://github.com/NousResearch/hermes-agent/pull/24665) (gateway_restart_notification), [#24668](https://github.com/NousResearch/hermes-agent/pull/24668) vs [#24666](https://github.com/NousResearch/hermes-agent/pull/24666) (prewarm race) — risk of merge conflicts and contributor friction if not triaged promptly.

---

**Project Health Assessment**: 🟡 **Active but stressed** — High throughput (100 items/day) with good community engagement, but accumulation of P1/P2 bugs without releases, duplicate PRs, and a critical data-loss issue (#24541) suggest maintainers should prioritize stabilization over feature expansion before v0.14.0.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-13

## 1. Today's Overview

PicoClaw shows **healthy sustained activity** with 16 issues and 16 PRs updated in the last 24 hours, though the merge ratio indicates ongoing review backlog (4 merged/closed PRs vs. 12 open). The project released **v0.2.8-nightly.20260512.777269b4**, continuing rapid iteration toward a stable v0.2.8. Community focus centers on **security hardening** (sandbox escapes, PID management), **streaming infrastructure**, and **configuration system reliability**. Notably, two high-priority bugs related to gateway stability and filesystem sandboxing remain open with fix PRs awaiting review, suggesting potential v0.2.8 blockers.

---

## 2. Releases

### [v0.2.8-nightly.20260512.777269b4](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) (Nightly Build)
- **Type:** Automated nightly from `main` branch
- **Status:** ⚠️ Unstable, use with caution
- **Scope:** Pre-release accumulation of all changes since v0.2.8 tag divergence
- **Migration Notes:** None specific; standard nightly precautions apply

No stable release today. The nightly cadence suggests v0.2.8 stable release is approaching but not yet finalized.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | MichelSantos | **fix(build):** Improve workspace file embedding — ensures only latest `workspace/` contents are embedded, eliminating stale files from binary | Reduces binary bloat, prevents outdated template leakage |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | MichelSantos | **fix(config):** Correct onboarding advisory for v0.2.5+ config/security file structure | UX fix, reduces new user confusion |
| [#2852](https://github.com/sipeed/picoclaw/pull/2852) | lxowalle | **docs:** Document agent self-evolution config controls + Web UI exposure | New feature documentation for `evolution` block |
| [#2854](https://github.com/sipeed/picoclaw/pull/2854) | lxowalle | **docs:** Add LicheeRV-Claw AliExpress news | Hardware ecosystem expansion |

**Key Advancement:** Agent self-evolution feature is now documented and UI-configurable, indicating maturity of this experimental capability.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments/Reactions | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| 1 | [#2513](https://github.com/sipeed/picoclaw/issues/2513) (closed) | 9 comments | Gateway startup abnormal with DignTalk channel | **Reliability of channel subsystem** — users need predictable gateway lifecycle management |
| 2 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | 8 comments, open | Streaming output for Web Chat | **Real-time UX parity** — web interface lags behind CLI streaming experience |
| 3 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 8 comments, open | Cron-triggered tasks cause channel errors | **Agent scheduling robustness** — power users need reliable automation |
| 4 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 6 comments, +1, open | Configurable streaming HTTP requests to LLM backends | **Performance/efficiency** — reduce latency, improve token economics |
| 5 | [#2444](https://github.com/sipeed/picoclaw/issues/2444) (closed) | 5 comments, +2 | MCP server secrets in `.security.yml` | **Security hygiene** — centralized secret management, avoiding env var sprawl |

**Analysis:** The community is pushing toward **production readiness** — streaming, scheduling, secrets management, and gateway stability are all operational concerns, not experimental features. The +2 reactions on #2444 indicate strong latent demand for security improvements.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| 🔴 **HIGH** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Open | [#2813](https://github.com/sipeed/picoclaw/pull/2813) (open, updated) | **Stale PID crash loop:** Singleton check doesn't verify process identity; reused PIDs from unrelated processes (e.g., `systemd-resolved`) block gateway startup |
| 🔴 **HIGH** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Open | [#2693](https://github.com/sipeed/picoclaw/pull/2693) (open, stale) | **Sandbox escape:** `find /` bypasses workspace safety guards, enabling filesystem enumeration |
| 🟡 **MEDIUM** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) | Open | None identified | Gateway starts with no channels in v0.2.8 — config parsing regression? |
| 🟡 **MEDIUM** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Open | None identified | Build from source: `picoclaw-launcher` binary missing — build system/docs drift |
| 🟢 **LOW** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | **Closed** | N/A | Gateway start abnormal (DignTalk) — resolved |

**Critical Concern:** Both HIGH severity bugs have open fix PRs ([#2813](https://github.com/sipeed/picoclaw/pull/2813), [#2693](https://github.com/sipeed/picoclaw/pull/2693)) that are **stale/unmerged**. The PID fix was updated 2026-05-12 but remains open. These are **likely v0.2.8 release blockers** if the project maintains quality gates.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.8+ | Signal Strength |
|:---|:---|:---|:---|
| **Streaming HTTP config** | [#2404](https://github.com/sipeed/picoclaw/issues/2400), [#1950](https://github.com/sipeed/picoclaw/issues/1950) | High | Multiple related issues, aligns with performance theme |
| **Gemini web search provider** | [#2763](https://github.com/sipeed/picoclaw/pull/2763) | High | PR open, well-scoped, provider expansion |
| **Intel OpenVINO local inference** | [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Medium | Hardware diversification trend, but niche |
| **Xiaomi Mimo multimodal support** | [#2755](https://github.com/sipeed/picoclaw/pull/2755) | Medium | Streaming reasoning + video, but stale |
| **Session management commands** (`/status`, `/compact`, `/new`) | [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Medium | UX improvement, but stale since April |
| **WhatsApp in default arm64 builds** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Low | Build complexity, legal/licensing concerns |
| **Mission Control integration** | [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Low | Closed as likely out of scope for PicoClaw vs. OpenClaw |
| **Context/memory management (magic-context)** | [#2774](https://github.com/sipeed/picoclaw/issues/2774) | Low | Research-stage, no PR |

**Prediction:** Streaming infrastructure (#2404, #1950) and Gemini search (#2763) are strongest candidates for near-term merge. The OpenVINO PR (#2703) signals strategic interest in **edge/embedded deployment** consistent with Sipeed's hardware focus.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Configuration fragility** | [#2771](https://github.com/sipeed/picoclaw/issues/2771) (example config outdated), [#2753](https://github.com/sipeed/picoclaw/issues/2753) (build docs wrong), [#2490](https://github.com/sipeed/picoclaw/issues/2490) (onboarding outdated) | 🔴 High — recurring pattern |
| **Gateway reliability** | [#2720](https://github.com/sipeed/picoclaw/issues/2720), [#2742](https://github.com/sipeed/picoclaw/issues/2742), [#2513](https://github.com/sipeed/picoclaw/issues/2513), [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 🔴 High — core functionality |
| **Security gaps** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) (sandbox escape), [#2444](https://github.com/sipeed/picoclaw/issues/2444) (secrets management) | 🟡 Medium — awareness growing |
| **Build/distribution limitations** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) (WhatsApp missing from arm64), [#2753](https://github.com/sipeed/picoclaw/issues/2753) | 🟡 Medium — deployment friction |

### Positive Signals
- **Hardware compatibility expanding:** [#2646](https://github.com/sipeed/picoclaw/issues/2646) (NXP i.MX93 EVK verified working)
- **Android deployment active:** [#2695](https://github.com/sipeed/picoclaw/issues/2695), [#2694](https://github.com/sipeed/picoclaw/issues/2694) — niche but engaged user segment

### Satisfaction/Dissatisfaction Ratio
- **Dissatisfaction drivers:** Configuration/docs drift, gateway instability, build friction
- **Satisfaction drivers:** Hardware flexibility, active feature development, responsive issue closure on some items

---

## 8. Backlog Watch

### Stale Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2693](https://github.com/sipeed/picoclaw/pull/2693) Fix sandbox bypass | ~2 weeks | 🔴 **Security fix unmerged** | Review/merge for v0.2.8 |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) Fix stale PID crash | ~5 days | 🔴 **Stability fix updated but unmerged** | Final review, merge |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) Xiaomi Mimo multimodal | ~9 days | 🟡 Feature drift | Decision: merge, request changes, or close |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) Intel OpenVINO | ~2 weeks | 🟡 Hardware partnership potential | Review for strategic alignment |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) Session management commands | ~1 month | 🟡 UX improvement languishing | Rebase check, merge decision |
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) Config reliability overhaul | ~1 week | 🟡 Meta-issue, no PR yet | Needs triage/assignment |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) Magic-context memory | ~1 week | 🟢 Research stage | Acknowledge, roadmap discussion |

**Recommendation:** Prioritize [#2693](https://github.com/sipeed/picoclaw/pull/2693) and [#2813](https://github.com/sipeed/picoclaw/pull/2813) as v0.2.8 blockers. The configuration system issues (#2771, #2753, #2490) suggest a **docs/config working group** would reduce recurring support burden.

---

*Digest generated from GitHub activity 2026-05-12 to 2026-05-13. All links reference github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-13

## Today's Overview

NanoClaw saw significant development activity in the last 24 hours with **19 PRs updated** (15 open, 4 merged/closed) and **5 new issues** opened, though no new releases were published. The project is actively addressing security concerns around its OneCLI dependency, expanding channel integrations (webhooks, WhatsApp media, Slack threading), and improving attachment handling across multiple adapters. Notably, several PRs from April received renewed attention, suggesting maintainers are working through backlog items alongside new submissions. The high open-to-closed PR ratio (15:4) indicates a growing review queue that may need attention.

---

## Releases

*No new releases published.*

---

## Project Progress

### Merged/Closed PRs

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| **#2439** | jesolsen | **Webhook channel type** — Closed without merge; proposed push-based inbound from Supabase/GitHub Actions via `POST /v1/inbound/webhook/:mgId` with bearer/static-key auth | [nanocoai/nanoclaw#2439](https://github.com/nanocoai/nanoclaw/pull/2439) |
| **#2422** | TriKro | **Google Auth foundation skill** — Closed; added `/add-google-auth` with diagnostic MCP tools (`check_google_auth`, `list_google_services`) as prerequisite for Google integrations | [nanocoai/nanoclaw#2422](https://github.com/nanocoai/nanoclaw/pull/2422) |
| **#2425** | davekim917 | **Container CLI version bump** — Merged; pinned `@anthropic-ai/claude-code` 2.1.119→2.1.139, `agent-browser` to 0.27.0, and others (excluded Vercel major bump) | [nanocoai/nanoclaw#2425](https://github.com/nanocoai/nanoclaw/pull/2425) |
| **#1912** | boskodev790 | **Empty container stdout fix** — Closed; fixed fallback parser in `runContainerAgent` to surface clear errors when containers exit without parseable output | [nanocoai/nanoclaw#1912](https://github.com/nanocoai/nanoclaw/pull/1912) |

### Notable Open PRs Advancing

- **#2438** (joedanz): Discord attachment URL fetching when adapters lack `fetchData` — directly addresses Issue #2426
- **#2434** (glifocat): **High-priority security fix** restricting OneCLI admin API/Postgres to loopback
- **#2430** (abarbaccia): Google Drive MCP skill via OneCLI, following Gmail/Calendar pattern
- **#2431** (jumprope-jesse): Conditional Slack threading (DMs top-level, channels threaded)

---

## Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **#2437** — Remove/improve OneCLI dependency | [Issue](https://github.com/nanocoai/nanoclaw/issues/2437) | **Philosophical tension in project identity**: carderne argues OneCLI undermines NanoClaw's "lightweight, reason-able alternative to OpenClaw" positioning. Zero engagement yet, but touches core architecture debate |
| **#2433 / #2434** — OneCLI security binding | [Issue](https://github.com/nanocoai/nanoclaw/issues/2433) / [PR](https://github.com/nanocoai/nanoclaw/pull/2434) | **Highest-priority active work**: glifocat identified critical security issue (admin API + Postgres exposed on docker0 bridge). Fix PR follows guidelines and is ready for review |
| **#2426 / #2427 / #2438** — Discord image visibility | [Issue](https://github.com/nanocoai/nanoclaw/issues/2426) / [PR #2427](https://github.com/nanocoai/nanoclaw/pull/2427) / [PR #2438](https://github.com/nanocoai/nanoclaw/pull/2438) | **Converging fix**: Two PRs address same bug where LLM sees `[image: file.png]` instead of actual image content. PR #2438 is more comprehensive (fetchData bridge fix) |

**Underlying needs detected:**
- Reduced friction in self-hosted deployment (OneCLI controversy)
- First-class multimodal support (images in Discord, WhatsApp media)
- Security hardening for production bare-metal installs

---

## Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | **#2433** — OneCLI admin API/Postgres exposed on docker0 | On bare-metal Linux, OneCLI binds admin API (`:10254`) and Postgres (`:5432`) to docker0 bridge, accessible from agent containers | **Fix PR #2434** open, high-priority |
| 🟡 **High** | **#2424** — Container survives daemon restart with partial mount config | `/workspace/agent` bind missing after host rename + daemon restart; no error surfaced | No fix PR yet |
| 🟡 **High** | **#2423** — Silent outbound delivery failures | Agent receives no signal when message fails after 3 retries (Telegram API errors, rate limits, etc.) | No fix PR yet |
| 🟡 **High** | **#2426** — LLM can't see Discord images | Images reduced to `[image: file.png]` placeholder | **PR #2427** and **#2438** both address; #2438 preferred |
| 🟢 **Medium** | **#2435** — Webhook server hardcoded to port 3000 | `EADDRINUSE` crash when port occupied | **Fix PR #2435** open |

---

## Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Webhook channel type** (push-based inbound) | PR #2439 (closed) | **High** — Closed PR suggests demand; likely to resurface refined |
| **Google Drive MCP tool** | PR #2430 (open) | **High** — Follows established Gmail/GCalendar pattern; OneCLI dependency |
| **Per-invocation model config** (`/add-model-config`) | PR #1545 (updated today, from March) | **Medium** — Long-running PR getting attention; complexity in "effort/thinking" config |
| **Configurable container mounts via CLI** | PR #2432 | **Medium-High** — Operational need; patterns on existing `config` verbs |
| **Remove/improve OneCLI** | Issue #2437 | **Uncertain** — Architectural debate; may drive alternative installer work |

**Predicted v-next themes:** Security hardening, multimodal attachment pipeline, Google workspace expansion, deployment flexibility.

---

## User Feedback Summary

### Pain Points
| Theme | Evidence |
|:---|:---|
| **OneCLI complexity/security** | Issue #2437 (philosophical objection), #2433 (critical security bug), multiple skills depend on it (#2430, #2422) |
| **Silent failures** | #2423 (delivery failures swallowed), #2424 (mount failures silent) — operators flying blind |
| **Attachment handling fragility** | #2426 (Discord images), #2429 (WhatsApp media pathing), #2438 (fetchData bridge gap) |
| **Port/config rigidity** | #2435 (hardcoded webhook port), #1916 (unguarded numeric env vars) |

### Use Cases Emerging
- **Production bare-metal deployment** (security-conscious, not just `pnpm run dev`)
- **Multi-channel agents** requiring consistent media handling (Discord, WhatsApp, Slack)
- **Enterprise Google Workspace integration** (Drive following Mail/Calendar)

---

## Backlog Watch

| PR/Issue | Age | Risk | Notes |
|:---|:---|:---|:---|
| **PR #1845** — Normalize timestamps to ISO 8601 | ~25 days | **Medium** | v2 branch; affects session DB compatibility. Updated today—maintainer attention returning |
| **PR #1545** — `/add-model-config` skill | ~44 days | **Medium** | Community skill; complex "effort/thinking" abstraction may need design review |
| **PR #1913 / #1917** — Rename `@Andy` triggers | ~21 days | **Low** | Related fixes for `ASSISTANT_NAME` customization; #1917 extends #1913. Both updated today |
| **PR #1916** — Guard numeric env vars | ~21 days | **Low** | Straightforward defensive fix; pattern already exists in codebase |

**Maintainer attention needed:** The April backlog (#1845, #1913-1917) is seeing renewed activity but risks competing with May's higher-priority security and attachment fixes for review bandwidth.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-13

## 1. Today's Overview

NullClaw shows moderate development activity with **2 open PRs** and **1 open issue** updated in the last 24 hours, though no releases were cut. The project appears to be in an active stabilization and integration phase, with work focused on gateway reliability and worker dispatch infrastructure. No merged or closed PRs indicates potential code review bottlenecks or ongoing refinement needs. The single issue raises performance concerns about the A2A (Agent-to-Agent) protocol implementation—a critical area for an AI agent framework. Overall project health appears **stable but velocity-constrained**, with cross-platform deployment validation suggesting production readiness efforts.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

**No PRs merged or closed today.** Both active PRs remain in open state:

| PR | Status | Impact |
|---|---|---|
| [#912](https://github.com/nullclaw/nullclaw/pull/912) feat(gateway): synchronous /webhook for paired-token workers | Open | Would close **Gap 3 (HIGH PRIORITY)** from integration analysis—enabling worker endpoint for nullboiler dispatch |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) fix(discord,websocket): gateway stability | Open | Five stability fixes soak-tested across 4 nodes/3 architectures (macOS arm64, Linux aarch64/musl, Linux riscv64/musl, Android aarch64) |

**Advancement assessment:** The webhook sync PR addresses a documented high-priority integration gap, while the gateway stability PR has undergone substantial real-world validation. Neither has cleared review for merge.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [#913](https://github.com/nullclaw/nullclaw/issues/913) a2a performance? | 0 comments, 0 reactions | **Underlying need:** Benchmark transparency and protocol optimization guidance. Reporter observes raw NullClaw messaging outperforms A2A implementation—suggests either A2A overhead is unexpectedly high or documentation lacks performance characterization |

| [#912](https://github.com/nullclaw/nullclaw/pull/912) synchronous /webhook | undefined comments, 0 reactions | **Underlying need:** Enterprise/worker integration pattern completion. References `docs/integration-analysis.md` Gap 3, indicating architectural debt being addressed |

| [#910](https://github.com/nullclaw/nullclaw/pull/910) gateway stability | undefined comments, 0 reactions | **Underlying need:** Production-grade Discord gateway reliability across exotic architectures (notably RISC-V and Android) |

**Community signal:** Low comment/reaction counts suggest either (a) small but focused contributor base, or (b) PRs are well-scoped with minimal open questions. The A2A performance issue is notable as the only user-reported concern in this period.

---

## 5. Bugs & Stability

| Severity | Item | Fix Status |
|---|---|---|
| **Medium-High** | [#910](https://github.com/nullclaw/nullclaw/pull/910) Discord gateway stability: watchdog failures, backoff issues, interrupt-unsafe stop, TLS memory leak | **Fix PR open** — 12-hour soak test passed across 4 nodes. Specific fixes: watchdog, backoff, interrupt-safe stop, TLS leak |
| **Medium** (indirect) | [#913](https://github.com/nullclaw/nullclaw/issues/913) A2A performance regression vs. raw messaging | **No fix identified** — requires maintainer/benchmark response |

**Stability assessment:** The gateway fixes represent mature engineering (soak testing, multi-architecture validation). The TLS leak fix is particularly critical for long-running agents. No *new* crashes reported today.

---

## 6. Feature Requests & Roadmap Signals

| Source | Signal | Likelihood in Next Version |
|---|---|---|
| [#912](https://github.com/nullclaw/nullclaw/pull/912) | Synchronous webhook for paired-token workers (nullboiler integration) | **High** — Explicitly closes documented HIGH PRIORITY gap |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) | Cross-platform gateway stability (incl. RISC-V, Android) | **High** — PR is validated and ready for merge |
| [#913](https://github.com/nullclaw/nullclaw/issues/913) | A2A performance benchmarks/optimization | **Medium** — Requires maintainer prioritization; may trigger docs or code work |

**Predicted vNext contents:** Webhook sync worker endpoint + gateway stability hardening. A2A optimization possible if performance gap is confirmed significant.

---

## 7. User Feedback Summary

| Pain Point | Source | Context |
|---|---|---|
| **A2A protocol slower than expected** | [#913](https://github.com/nullclaw/nullclaw/issues/913) | User `jacktang` comparing raw NullClaw messaging vs. A2A implementation; seeking benchmark data. Suggests either: (1) A2A spec overhead, (2) implementation inefficiency, or (3) missing optimization guidance |
| **Need for worker dispatch integration** | [#912](https://github.com/nullclaw/nullclaw/pull/912) | Internal roadmap item (Gap 3) now being addressed—validates user/integrator need for synchronous webhook patterns |
| **Production reliability demands** | [#910](https://github.com/nullclaw/nullclaw/pull/910) | Soak-testing across 4 architectures indicates deployment diversity and uptime requirements |

**Satisfaction indicator:** Mixed. Gateway stability work shows responsiveness to production needs. A2A performance question unanswered suggests potential friction in core value proposition (agent interoperability).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#913](https://github.com/nullclaw/nullclaw/issues/913) A2A performance | 1 day | **Medium** — Could escalate if other users confirm; core protocol credibility | Maintainer response with benchmark data or optimization roadmap |
| [#912](https://github.com/nullclaw/nullclaw/pull/912) Webhook sync | 1 day | **Low** — Fresh PR, but HIGH PRIORITY gap closure | Code review and merge decision |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) Gateway stability | 2 days | **Low** — Well-tested, ready for integration | Final review and merge |

**Emerging concern:** The A2A performance issue, while new, touches a core differentiator for NullClaw as an AI agent framework. Without benchmark data or maintainer engagement, it risks becoming a trust gap for protocol adoption.

---

*Digest generated from github.com/nullclaw/nullclaw data for 2026-05-13.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-13

## 1. Today's Overview

IronClaw shows **high development velocity** with 79 items updated in 24 hours (29 issues, 50 PRs), indicating active sprint momentum. The project is heavily focused on **Reborn architecture maturation**, with 8+ merged/closed Reborn-related items in the last day. However, **zero new releases** and persistent QA-reported bugs in core user flows (Gmail auth, Telegram setup, V2 engine approvals) suggest stabilization work is outpacing shipping. The contributor base is expanding with both core team (serrrfirat, zmanian) and new contributors (thisisjoshford, errol-t3) landing substantial PRs. Overall health: **strong engineering progress, moderate user-facing stability concerns**.

---

## 2. Releases

**No new releases** (0 releases in last 24h). Latest release remains unspecified in provided data.

---

## 3. Project Progress

### Merged/Closed PRs (27 total; key items highlighted)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#3355](https://github.com/nearai/ironclaw/pull/3355) | serrrfirat | Telegram v2 ProductAdapter "tracer bullet" — outbound rendering + payload fixtures | Reborn channel infrastructure |
| [#3493](https://github.com/nearai/ironclaw/pull/3493) | serrrfirat | Fix Reborn memory error redaction + SQL replay cursors | Security hardening |
| [#3476](https://github.com/nearai/ironclaw/pull/3476) | serrrfirat | Wire SkillContextService into loop prompt path | Core Reborn loop functionality |
| [#3538](https://github.com/nearai/ironclaw/pull/3538) | serrrfirat | First-party builtin tool capabilities (echo, time, json) | Reborn runtime foundation |
| [#3546](https://github.com/nearai/ironclaw/pull/3546) | errol-t3 | **Payroll v2 sidecar** — credential injection + SSE hardening | Enterprise feature (DB migration) |
| [#3357](https://github.com/nearai/ironclaw/pull/3357) | serrrfirat | ProductAdapter contract docs | Documentation freeze |

**Architecture theme**: serrrfirat landed 6+ PRs consolidating Reborn's loop, memory, skill context, and runtime adapter layers. The "tracer bullet" pattern suggests iterative delivery toward a stable Reborn core.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Status | Topic |
|---|---|---|---|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | 11 | **CLOSED** | Google Sheets OAuth 400 error |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | 4 | **CLOSED** | Ship Reborn as separate binary |
| [#3092](https://github.com/nearai/ironclaw/issues/3092) | 2 | **OPEN** | [Reborn] AgentLoop reference implementations |
| [#3128](https://github.com/nearai/ironclaw/issues/3128) | 2 | **CLOSED** | Gmail 502 error |
| [#2991](https://github.com/nearai/ironclaw/issues/2991) | 1 | **OPEN** | V2 approval flow broken |

### Underlying Needs Analysis

- **OAuth reliability** (#2229, #3128, #3319, #3320): Users need **stable third-party auth flows** across Google services. The repeated Gmail/Google Sheets failures suggest architectural fragility in the secrets/extensions boundary, not just one-off bugs.
- **Reborn as product boundary** (#3069 closed, #3092 open): Strong signal that Reborn is transitioning from research to **shippable architecture** — the community needs clear executable separation and reference implementations to build against.
- **Approval flow trust** (#2991): V2 engine's approval UX is **blocking user trust** in autonomous agent execution.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|---|---|---|---|---|
| **P1** | [#3533](https://github.com/nearai/ironclaw/issues/3533) | OPEN | No | Telegram auto-setup broken in v0.28.1 — regression in onboarding flow |
| **P1** | [#3319](https://github.com/nearai/ironclaw/issues/3319) | OPEN | No | Gmail auth 400 from Telegram — blocks conversation continuation (#3320) |
| **P1** | [#3320](https://github.com/nearai/ironclaw/issues/3320) | OPEN | No | IronClaw hangs after Gmail auth failure — **state machine bug** |
| **P1** | [#2752](https://github.com/nearai/ironclaw/issues/2752) | OPEN | No | `onboard` command DB error on provider step — **setup blocker** |
| **P1** | [#3535](https://github.com/nearai/ironclaw/issues/3535) | OPEN | No | UI timestamps incorrect — data integrity issue |
| **P2** | [#2991](https://github.com/nearai/ironclaw/issues/2991) | OPEN | No | V2 approval flow: unclear prompts, wrong routing, sequential forcing |
| **P2** | [#2283](https://github.com/nearai/ironclaw/issues/2283) | OPEN | No | Web UI missing file upload — **feature gap** |
| **P2** | [#3034](https://github.com/nearai/ironclaw/issues/3034) | **CLOSED** | N/A | HTTP tool disabled by default — fixed (onboarding issue) |

**Critical pattern**: 4 open P1 bugs are **auth/setup/onboarding regressions** in production-adjacent flows (Telegram, Gmail, local setup). No linked fix PRs suggest these may be under-triaged relative to Reborn architecture work.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Reborn binary shipping** (#3069 closed, foundation laid) | Architecture | **High** | Closed issue established executable boundary; #3092 tracks reference loop implementations |
| **AgentLoop framework** (#3092, #3544) | Core feature | **High** | PR #3544 landed spec with 9 workstream briefs; implementation PRs in flight |
| **Loop hooks framework** (#3523 closed, #3524 open roadmap) | Extensibility | **Medium-High** | Closed issue established framework; open issue tracks full roadmap — inline + out-of-band hooks |
| **Memory as userland capability** (#3537) | Architecture | **Medium** | Explicitly framed as "intended shape" — may require migration period |
| **Skill-context trust enforcement** (#3547) | Security | **High** | Blocker for production traffic; two open items from #3476 review |
| **Outbound policy service** (#3542) | Security | **Medium** | PR open; gates projection subscriptions |
| **WeChat channel docs** (#3515) | Documentation | **High** | Channel working since v0.28.1; docs-only, low risk |
| **Local web UI discoverability** (#3500 → #3510) | UX | **High** | PR #3510 open, fixes clear user pain point |

---

## 7. User Feedback Summary

### Pain Points (from QA + user reports)

| Theme | Evidence | Severity |
|---|---|---|
| **OAuth flows fail unpredictably** | #2229, #3128, #3319, #3320 | 🔴 Critical |
| **Onboarding drops users without guidance** | #3500, #3533 | 🔴 Critical |
| **Bot state recovery after errors** | #3320 (hangs after auth failure) | 🔴 Critical |
| **V2 engine approval UX breaks trust** | #2991 | 🟡 High |
| **Missing web capabilities** | #2283 (no file upload) | 🟡 High |
| **Timestamp/data accuracy** | #3535 | 🟡 High |

### Positive Signals
- WeChat channel working (#3515) — channel expansion succeeding
- Payroll v2 sidecar merged (#3546) — enterprise use case advancing
- Reborn architecture showing systematic maturity (multiple closed foundational PRs)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs Attention Because |
|---|---|---|---|
| [#2283](https://github.com/nearai/ironclaw/issues/2283) Web UI file upload | ~33 days | **High** | Core feature gap; only 1 comment; blocks document-heavy workflows |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) Telegram NEAR Foundation instance | ~20 days | **High** | Production instance broken; minimal engagement |
| [#2752](https://github.com/nearai/ironclaw/issues/2752) `onboard` DB error | ~23 days | **High** | **Setup blocker for new contributors**; local dev friction |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failed | 2 days | **High** | Automated testing failing; no human response visible |
| [#3469](https://github.com/nearai/ironclaw/pull/3469) HostManagedModelGateway tests | 1 day | **Medium** | XL PR open; needs review to unblock Reborn model gateway hardening |
| [#3356](https://github.com/nearai/ironclaw/pull/3356) Telegram v2 config guard | 5 days | **Medium** | Large scope PR (16 labels); v1/v2 exclusivity validator — needs merge decision |

**Maintainer attention recommended**: The P1 auth/setup bugs (#3533, #3319, #3320, #2752) and nightly E2E failure (#3447) represent **user-facing stability debt** that risks undermining Reborn architecture investment if not balanced.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-13

## 1. Today's Overview

LobsterAI showed **intense development velocity** on 2026-05-12 with **25 merged/closed PRs** against only **1 open PR** (a Dependabot Electron dependency bump). No new issues were opened or active, indicating either a mature codebase with low bug incidence or limited external community reporting. The project appears to be in a **release consolidation phase**, with PR #1961 representing a major version release (2026.5.11) bundling multiple feature areas. Activity is dominated by core team members (`fisherdaddy`, `liuzhq1986`, `liugang519`) with minimal external contributor engagement. The high merge rate with zero open issues suggests **strong internal QA and rapid iteration cycles**, though the lack of community issues may also indicate limited adoption visibility.

---

## 2. Releases

**No new releases published** on 2026-05-12 or 2026-05-13.

However, **PR #1961** ([`Release/2026.5.11`](https://github.com/netease-youdao/LobsterAI/pull/1961)) was merged as a **release consolidation PR** containing version 2026.5.11 changes:

| Component | Change |
|-----------|--------|
| **Memory System** | **Dreaming memory consolidation**: Background memory consolidation with toggle, cron scheduling, timezone support, and model override; refactored memory settings into tabbed layout with Dreaming status and diary display |
| **Skills** | Youdao Note Skill upgraded to v1.0.9 |
| Bug fixes | Multiple fixes (details truncated in data) |

---

## 3. Project Progress

### Merged/Closed PRs (2026-05-12): 25 items

#### Major Feature Advancements

| PR | Author | Description | Areas |
|---|---|---|---|
| [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) | `liuzhq1986` | **Release 2026.5.11**: Dreaming memory consolidation, Youdao Note Skill v1.0.9 | renderer, docs, main, openclaw, skills, cowork, im, artifacts |
| [#1956](https://github.com/netease-youdao/LobsterAI/pull/1956) | `liuzhq1986` | **macOS dictation via system menu**: 3-tier fallback (Edit menu → key code 96 → Fn+Fn), scheduled task prompt voice input wiring | renderer, docs, main, cowork |
| [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) | `liugang519` | **Artifact image copy + Mermaid fix**: PNG/JPEG clipboard copy via `nativeImage`, filter non-copyable formats (GIF/WebP), Mermaid zoom scroll container fix | renderer, main, artifacts |

#### Bug Fixes & Polish

| PR | Author | Description | Severity |
|---|---|---|---|
| [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) | `fisherdaddy` | **IM multi-agent switching fix**: IM failed when switching between multiple agents | High |
| [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) | `btc69m979y-dotcom` | **Chinese path fix**: `shell.openPath` replaces `shell.openExternal` for Unicode paths on Windows | Medium |
| [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | `btc69m979y-dotcom` | **macOS voice permission UX**: Toast notification when accessibility permission denied | Medium |
| [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | `fisherdaddy` | **Model persistence**: Default model now restores to last-selected after restart | Medium |
| [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | `fisherdaddy` | **IM timestamp fix**: Incorrect time in chat history + display optimization | Low |

#### UI/UX Optimization Batch (5 PRs)

| PR | Author | Focus |
|---|---|---|
| [#1959](https://github.com/netease-youdao/LobsterAI/pull/1959) | `fisherdaddy` | General UI optimization |
| [#1954](https://github.com/netease-youdao/LobsterAI/pull/1954) | `fisherdaddy` | Model select, input UI, selected skills UI |
| [#1953](https://github.com/netease-youdao/LobsterAI/pull/1953) | `fisherdaddy` | Same areas (likely split commit) |
| [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937) | `fisherdaddy` | Main UI optimization |
| [#1924](https://github.com/netease-youdao/LobsterAI/pull/1924) | `fisherdaddy` | Agents layout optimization |

#### Infrastructure & Agent Features

| PR | Author | Description |
|---|---|---|
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | `fisherdaddy` | **Per-agent working directories** |
| [#1929](https://github.com/netease-youdao/LobsterAI/pull/1929) | `fisherdaddy` | Override local agent avatar |
| [#1935](https://github.com/netease-youdao/LobsterAI/pull/1935) | `fisherdaddy` | Default empty history title style |
| [#1911](https://github.com/netease-youdao/LobsterAI/pull/1911) | `fisherdaddy` | Agents UI optimization |

---

## 4. Community Hot Topics

**No community-driven hot topics identified.** All 26 PRs were team-authored; zero issues exist for analysis. The project shows **minimal external community engagement** — no comments, no reactions (👍: 0 across all items).

| Observation | Implication |
|-------------|-------------|
| Zero comment threads | Either: (a) decisions made offline/internal tools, (b) low external adoption, or (c) very mature self-service documentation |
| Dependabot PR #1277 is **only open PR** ([Electron 40.2.1 → 42.0.1](https://github.com/netease-youdao/LobsterAI/pull/1277)) | Major Electron version bump pending since April 2; may indicate caution about breaking changes or testing backlog |
| `fisherdaddy` authored **14 of 26 PRs** (54%) | Heavy reliance on single contributor for UI/UX and agent features |

**Underlying need**: The project would benefit from **community onboarding initiatives** — issue templates, discussion forums, or contributor documentation — to diversify feedback channels and reduce bus factor.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **High** | [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) | IM completely non-functional during multi-agent switching | **Fixed** |
| **Medium** | [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) | Silent failure on "Open in Browser" for Chinese paths (Windows) | **Fixed** |
| **Medium** | [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | macOS voice input: zero feedback after permission denial | **Fixed** |
| **Medium** | [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | Model selection not persisted across restarts | **Fixed** |
| **Low** | [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | Incorrect timestamps in IM chat history | **Fixed** |
| **Low** | [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) | Mermaid diagram zoom/scroll misbehavior | **Fixed** |

**Stability assessment**: All identified bugs have **same-day fix merges**. No regressions or crashes reported in open issues. The pattern suggests **proactive internal QA** rather than reactive firefighting.

**Risk**: PR #1950 was "[wrongly pushed to upstream repo](https://github.com/netease-youdao/LobsterAI/pull/1950)" — indicates potential process gap in branch protection or contributor workflow.

---

## 6. Feature Requests & Roadmap Signals

**No explicit user feature requests** (zero issues). Inferred roadmap from merged PRs:

| Signal | Likely Near-Term Priority |
|--------|---------------------------|
| Dreaming memory consolidation (background, cron, timezone) | **Autonomous agent memory** — long-running agents with scheduled self-optimization |
| Per-agent working directories | **Multi-tenant agent isolation** — enterprise/team use cases |
| Voice input infrastructure (3-tier macOS fallback, scheduled task prompts) | **Hands-free operation**, accessibility compliance |
| Youdao Note Skill v1.0.9 | **Ecosystem integration depth** — proprietary service bindings |
| Electron 42 upgrade pending | **Security/chromium baseline maintenance** |

**Predicted next version features** (2026.5.x+):
- Windows voice input parity (currently macOS-focused)
- Memory consolidation analytics/observability
- Agent-to-agent message routing improvements (post-#1960)
- More third-party skill integrations (pattern established with Youdao Note)

---

## 7. User Feedback Summary

**No direct user feedback available** (zero issues, zero comments, zero reactions).

**Inferred pain points from fix patterns**:

| Pain Point | Evidence | Satisfaction Impact |
|------------|----------|---------------------|
| **Cross-platform path handling** | #1955 Chinese path fix | High — silent failures are frustrating |
| **Permission discovery** | #1952 macOS accessibility toast | Medium — users didn't know why voice failed |
| **State persistence** | #1905 model selection lost | Medium — breaks workflow continuity |
| **Multi-agent complexity** | #1960 IM switching bug | High — core value proposition at risk |
| **Visual polish** | 5 UI optimization PRs | Positive — team investing in fit-and-finish |

**Use case signals**: Heavy focus on **desktop productivity** (Electron, voice input, artifacts, Mermaid diagrams), **team collaboration** (IM, multi-agent, cowork), and **Chinese market** (Youdao integration, Chinese path handling).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Dependabot: Electron 40.2.1 → 42.0.1 | **40 days** (since 2026-04-02) | **Security/compat debt** | Merge or explicitly defer; Electron 42 includes Chromium security fixes |
| PR #1950 "wrongly pushed" | 1 day | **Process hygiene** | Review branch protection rules, contributor docs |

**No long-unanswered issues** exist (zero open issues total).

**Maintainer attention recommended for**: 
- **Electron upgrade decision**: 40-day open Dependabot PR is unusual given otherwise rapid merge velocity; may indicate compatibility testing burden or known blockers
- **Community health**: Zero external issues/PRs suggests either perfect software (unlikely) or **feedback funnel failure** — consider adding GitHub Discussions or public roadmap

---

## Project Health Scorecard

| Metric | Assessment |
|--------|------------|
| Development velocity | ⭐⭐⭐⭐⭐ Exceptional (25 merges/day) |
| Issue responsiveness | N/A (zero issues) |
| Release cadence | ⭐⭐⭐⭐ Regular (2026.5.11 release) |
| Community diversity | ⭐⭐ Low (core team only) |
| Code stability | ⭐⭐⭐⭐⭐ All known bugs same-day fixed |
| Dependency freshness | ⭐⭐⭐ Electron upgrade lagging |

**Overall**: LobsterAI demonstrates **enterprise-grade internal engineering discipline** with potential **community growth constraints**. The project appears production-ready for its target use case but may benefit from opening feedback channels to validate market fit beyond NetEase Youdao's internal roadmap.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-13

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 31 issues and 39 PRs updated in the last 24 hours, indicating an active, fast-moving project. The community is particularly engaged around provider configuration reliability, memory system consistency, and browser automation stability. With 26 PRs merged/closed versus 13 open, maintainers are keeping pace with contributions. A new beta release (v1.1.7-beta.1) addresses VOLCENGINE provider model fixes and console text contrast improvements. The project appears healthy but faces recurring patterns around configuration parsing edge cases and async lifecycle management in multi-agent scenarios.

---

## 2. Releases

### [v1.1.7-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7-beta.1)

| Change | Author | PR |
|--------|--------|-----|
| Fix VOLCENGINE Provider model configuration | @Nioolek | [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169) |
| Version bump to 1.1.7b1 | @xieyxclack | [#4196](https://github.com/agentscope-ai/QwenPaw/pull/4196) |
| Console text contrast improvement in Plan Panel | — | — |

**Assessment:** Minor beta with provider-specific fixes. No breaking changes noted. The VOLCENGINE fix follows user reports of parameter passthrough issues (see [#4199](https://github.com/agentscope-ai/QwenPaw/issues/4199) on `thinking` parameter).

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Description | Significance |
|-----|-------------|--------------|
| [#4248](https://github.com/agentscope-ai/QwenPaw/pull/4248) | **Qwen-Image & Wan 2.7 plugins** — DashScope-based image/video generation tools + frontend tool config UI fixes | Expands multimodal capabilities; fixes critical frontend bugs |
| [#4250](https://github.com/agentscope-ai/QwenPaw/pull/4250) | **Agent stats refactor** — Streamline session file handling, remove unused code | Technical debt reduction |
| [#4197](https://github.com/agentscope-ai/QwenPaw/pull/4197) | **Async `delegate_external_agent`** — Long-running ACP workflow support | Major ACP (Agent Communication Protocol) maturity milestone |
| [#3589](https://github.com/agentscope-ai/QwenPaw/pull/3589) | **ACP official SDK adoption** — Upgrades delegated workflow with proper SDK | Architecture modernization |
| [#3859](https://github.com/agentscope-ai/QwenPaw/pull/3859) | **ACP agent rename/delete in WebUI** | UX completeness for ACP management |
| [#3741](https://github.com/agentscope-ai/QwenPaw/pull/3741) | **ACP documentation polish** | Developer experience |
| [#4228](https://github.com/agentscope-ai/QwenPaw/pull/4228) | **Feishu large file support** (30MB+) | Channel reliability |
| [#4216](https://github.com/agentscope-ai/QwenPaw/pull/4216) | **Console newline preservation fix** | UI polish |
| [#2986](https://github.com/agentscope-ai/QwenPaw/pull/2986) | **POSIX tools on Windows** (Cygwin/MSYS2) | Cross-platform shell compatibility |
| [#712](https://github.com/agentscope-ai/QwenPaw/pull/712) | **Configurable default shell / login shell** | Addresses long-standing PATH/environment issues |

**Key Themes:** ACP ecosystem maturing rapidly; shell execution environment getting proper cross-platform attention; multimodal tooling expanding.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Core Tension |
|------|----------|----------|--------------|
| 1 | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) — DashScope provider config ignored, `api_key` empty (401) | 6 | **Configuration loading race condition or precedence bug** — user has valid `dashscope.json` but runtime falls back to `openai` backend with empty key. Suggests provider resolution logic is fragile when multiple config sources exist. |
| 2 | [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) — API response latency inconsistency | 6 | Performance regression or resource contention; closed without clear resolution |
| 3 | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) — `auto_memory_interval` writes file but doesn't refresh vector index | 4 | **Memory consistency gap** — architectural separation between file persistence and vector search indexing. Fix PR [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) open. |
| 4 | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) — `FunctionCallOutput` validation + `loop_config.json` corruption | 4 | Data model strictness causing crashes; config file corruption suggests unsafe writes |
| 5 | [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) — Chat unopenable due to malformed `tool_use` in persisted history | 4 | **Session deserialization fragility** — missing schema migration/validation on load |

**Underlying Needs:** Users need **configuration reliability** (provider selection predictable), **memory system consistency** (write = searchable), and **session durability** (corrupted history shouldn't brick chats).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | **MCP stream_http 401 blocks indefinitely** — any non-404 error code causes hang until timeout; affects all MCP error handling | **NO FIX YET** — code analysis provided, needs maintainer response |
| 🔴 **Critical** | [#4251](https://github.com/agentscope-ai/QwenPaw/issues/4251) | **Matrix Team Room ack mirror loop** — Team Leader ↔ specialist worker infinite ack cycle; missing task lifecycle guards | Closed as root-cause identified; needs runtime-level primitive |
| 🟡 **High** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope config loading failure — 401 errors despite correct setup | Under investigation; config precedence issue |
| 🟡 **High** | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | Auto-memory index desync — new sessions can't search summarized memories | **PR [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) open** with fix |
| 🟡 **High** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | `shell_evasion_checks.newlines=True` silently blocks multiline commands, breaks agent reasoning chains | No fix yet; security UX conflict |
| 🟡 **High** | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257) | Browser zombie processes, premature idle timeout, crash recovery missing | **PR [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254) open** addressing this |
| 🟢 **Medium** | [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) | Web UI loads entire multi-million-token history at once, causing browser freeze | Needs pagination/streaming architecture |
| 🟢 **Medium** | [#4239](https://github.com/agentscope-ai/QwenPaw/issues/4239) | Packaged desktop client external links don't open browser | Platform integration gap |
| 🟢 **Medium** | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | macOS Desktop `file://` links unclickable | Electron/Tauri security policy likely |
| 🟢 **Medium** | [#4243](https://github.com/agentscope-ai/QwenPaw/issues/4243) | Browser file download non-functional | Needs reproduction details |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Session lifecycle hooks** (`session.create`, `session.reset`) | [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) | **High** | Clean architecture, frequent request pattern, enables plugins |
| **In-chat shell observability** (see/kill/extend running commands) | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | **Medium-High** | Builds on existing ApprovalCard infrastructure; safety-critical |
| **Message rollback + collaborative diary** | [#4258](https://github.com/agentscope-ai/QwenPaw/issues/4258) | **Medium** | User prototyped themselves; memory management is active dev area |
| **Telegram streaming support** | [#4247](https://github.com/agentscope-ai/QwenPaw/issues/4247) | **Medium** | Competitors (OpenClaw, Hermes) have it; channel parity pressure |
| **Tauri 2.x desktop app** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **Medium** | Large PR under review since April; packaging pain (#4230) drives need |
| **System tray / background operation** | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | **Medium** | Win32 implemented; cross-platform expansion needed |
| **Cron job inbox + scheduled execution** | [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | **High** | PR open, comprehensive feature set |
| **OAuth 2.1 PKCE for remote MCP** | [#4256](https://github.com/agentscope-ai/QwenPaw/pull/4256) | **High** | PR open; critical for enterprise MCP adoption |
| **Plugin FastAPI router registration** | [#4255](https://github.com/agentscope-ai/QwenPaw/pull/4255) | **High** | PR open; ecosystem extensibility |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Configuration unpredictability** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159), [#4183](https://github.com/agentscope-ai/QwenPaw/issues/4183), [#4199](https://github.com/agentscope-ai/QwenPaw/issues/4199) | 🔥🔥🔥 High — "configured correctly but doesn't work" is recurring |
| **Memory/search inconsistency** | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | 🔥🔥🔥 High — breaks core value proposition of persistent agent memory |
| **Browser automation brittleness** | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257), [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254) | 🔥🔥🔥 High — zombie processes, crashes, timeouts |
| **Desktop packaging/deployment** | [#4230](https://github.com/agentscope-ai/QwenPaw/issues/4230), [#4239](https://github.com/agentscope-ai/QwenPaw/issues/4239), [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | 🔥🔥 Medium — "black window then closes" frustrates non-technical users |
| **Shell environment mismatch** | [#4103](https://github.com/agentscope-ai/QwenPaw/issues/4103), [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767), [#712](https://github.com/agentscope-ai/QwenPaw/issues/712) | 🔥🔥 Medium — now largely addressed in recent PRs |
| **UI performance at scale** | [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213), [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | 🔥🔥 Medium — "millions of tokens" loading at once |

### Satisfaction Signals
- ACP ecosystem maturing well (multiple PRs, official SDK adoption)
- Active maintainer response (most issues updated same-day)
- Plugin system expanding (Qwen-Image, Wan 2.7, OAuth PKCE)

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — Tauri 2.x desktop | ~3 weeks | **High** — packaging issues (#4230) multiplying; community wants native desktop | Review/merge or provide feedback timeline |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) — System tray (Win32) | ~1 week | Medium — background operation critical for autonomous agents | Cross-platform plan; merge Win32 as incremental? |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) — Matrix E2EE verification | ~5 days | Medium — security-sensitive channel | Security review |
| [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) — MCP 401 hang | **Same day** | **Critical** — any MCP error hangs agent | Immediate triage; fix pattern likely extends to all non-200 responses |
| [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) — Silent multiline shell block | **Same day** | High — security default breaks legitimate use | UX decision: warn vs. block? Config guidance? |
| [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) — Plan gate bypass fix | ~2 days | Medium — safety-critical for plan mode | Review for v1.1.7 |

---

*Digest generated from GitHub activity 2026-05-12 to 2026-05-13. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-13

---

## 1. Today's Overview

ZeptoClaw (qhkm/zeptoclaw) showed **minimal development activity** in the past 24 hours, with all three PR updates being automated dependency bumps from Dependabot rather than human-contributed code changes. The project currently has **zero open issues**, suggesting either effective issue resolution or limited community engagement. Two dependency-related PRs remain open awaiting review, while one GitHub Actions bump was closed. No new releases were published. Overall project health appears **stable but stagnant** — maintenance is ongoing, but no feature development or bug fixes are visible in this reporting period.

---

## 2. Releases

**No new releases** for 2026-05-13.

---

## 3. Project Progress

### Merged/Closed PRs (Last 24h)

| PR | Status | Description | Link |
|:---|:---|:---|:---|
| #574 | **CLOSED** | Bumped `taiki-e/install-action` from 2.75.17 to 2.75.22 | [qhkm/zeptoclaw#574](https://github.com/qhkm/zeptoclaw/pull/574) |

**Note:** This PR was superseded by the newer #586, which proposes a more recent version (2.75.29) of the same action. The closure appears to be routine Dependabot housekeeping rather than an active merge.

**No feature advancement or bug fixes** were delivered today. All activity is confined to CI/CD infrastructure maintenance.

---

## 4. Community Hot Topics

**No community-driven discussions** are active. The three PRs in the dataset are exclusively automated, with:

- **0 comments** across all PRs
- **0 reactions/thumbs up** on any item

### Open PRs Requiring Attention

| PR | Topic | Age | Link |
|:---|:---|:---|:---|
| #586 | GitHub Actions dependency bump (taiki-e/install-action → 2.75.29) | 1 day | [qhkm/zeptoclaw#586](https://github.com/qhkm/zeptoclaw/pull/586) |
| #585 | Docker base image update (debian:trixie-slim digest) | 1 day | [qhkm/zeptoclaw#585](https://github.com/qhkm/zeptoclaw/pull/585) |

**Underlying need:** The accumulation of unmerged dependency PRs suggests either (a) maintainer bandwidth constraints for review, or (b) a conservative merge policy requiring manual validation. The open Docker image bump (#585) is particularly notable as it may contain security updates for the project's containerized deployment.

---

## 5. Bugs & Stability

| Severity | Count | Details |
|:---|:---|:---|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

**No bugs, crashes, or regressions** reported today. The absence of issues is statistically anomalous for an active open-source project and may indicate:
- Low adoption/user base
- Effective issue triage and resolution
- Users reporting issues through alternative channels

**Security consideration:** The pending Debian base image update (#585) may address vulnerabilities in the current `cedb1ef` digest; delay in merging could expose containerized deployments.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests** were submitted or discussed today.

Given the project's nature as an AI agent/personal assistant framework (inferred from context), the **complete absence of feature-oriented activity** suggests:

| Predicted Priority | Likely Feature Area | Confidence |
|:---|:---|:---|
| Low | Core agent capabilities | No data |
| Low | LLM integration enhancements | No data |
| Low | Memory/persistence features | No data |

Without issue or discussion data, no reliable roadmap prediction is possible. The project may be in **maintenance mode** or pre-1.0 stabilization.

---

## 7. User Feedback Summary

**No direct user feedback** captured in the reporting period.

| Metric | Value | Assessment |
|:---|:---|:---|
| User-reported issues | 0 | — |
| Feature requests | 0 | — |
| Community reactions | 0 | — |
| Maintainer responses | 0 | — |

**Pain point inference:** The dependency-only activity pattern suggests the project may lack sufficient **contributor onboarding documentation** or **clear contribution pathways** to attract non-automated contributions. Alternatively, the project may be early-stage with limited production usage.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| #585 — Debian Docker image bump | 1 day | **Medium** (security exposure) | Maintainer review and merge |
| #586 — taiki-e/install-action bump | 1 day | Low | Merge or close as duplicate of future bump |

**No long-unanswered items** exist in the current dataset. However, the pattern of Dependabot PRs remaining open for 24+ hours without human interaction warrants monitoring. If this extends beyond typical CI validation windows (usually 1-3 days), it may indicate:

- Insufficient maintainer availability
- Complex integration testing requirements
- Unclear ownership of dependency review

---

## Project Health Scorecard

| Dimension | Rating | Notes |
|:---|:---|:---|
| Code activity | ⚠️ Low | Automated only |
| Issue responsiveness | ⚠️ N/A | Zero issues |
| Release cadence | ⚠️ Stalled | No releases in period |
| Security maintenance | ⚠️ At risk | Docker bump pending |
| Community engagement | 🔴 Concern | Zero human interaction |

**Overall assessment:** ZeptoClaw requires **active maintainer engagement** to clear the dependency backlog and demonstrate project vitality. The absence of issues and human contributions is atypical and warrants investigation into project visibility and adoption metrics.

---

*Digest generated from GitHub data for 2026-05-13. All links: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-13

## 1. Today's Overview

ZeroClaw shows **elevated development velocity** with 50 PRs and 13 issues updated in the last 24 hours, though the 64% open PR rate (32 open vs. 18 merged/closed) suggests a potential review bottleneck. The project is actively stabilizing core infrastructure—observability, provider reliability, and channel media handling—while expanding into new integration territory (Home Assistant, ComfyUI, RunPod). Notably, **zero new releases** were cut today despite significant merge activity, indicating maintainers may be accumulating changes for a larger release or addressing stability concerns first. The community is particularly engaged around enterprise channel support (WeCom) and media generation pipelines. Overall project health appears **solid but review-constrained**.

---

## 2. Releases

**No new releases** were published today. The latest release remains unspecified in available data.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) | FTDGRT | Runtime tracing and SSE broadcast for agent turn lifecycle — **superseded by #6553** | Observability foundation laid, then consolidated |
| [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772) | yijunyu | Delegate rate-limiting to wrappers for `glob_search` and `content_search` | Code quality: eliminates duplication, centralizes policy |
| [#4947](https://github.com/zeroclaw-labs/zeroclaw/pull/4947)–[#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954) | yijunyu | Systematic `RateLimitedTool` refactoring across 5 PRs (AI CLI tools, Cron tools, network tools, ClaudeCodeRunner) | **Major architectural cleanup** — 8+ tools unified under wrapper pattern |

**Key advancement**: The `RateLimitedTool` wrapper pattern is now **fully rolled out** across the codebase, replacing ~15+ inline guard implementations. This reduces bug surface and makes rate-limiting policy maintainable in one place.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Underlying Need |
|:---|:---|:---|:---|
| 1 | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) WeCom channel support | 4 | **Enterprise China market penetration** — WeChat Work is dominant corporate IM in China; OpenClaw already has this, creating competitive pressure |
| 2 | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) Local image reading failed | 3 | Skill-generated assets need **first-class media pipeline integration**, not filesystem paths |
| 3 | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG + CAPTCHA robustness | 3 | **Privacy-conscious users** want DuckDuckGo alternatives; autonomous agents need graceful degradation when search hits bot protection |
| 4 | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) OpenAI Codex onboarding confusion | 2 | **UX clarity for model vs. provider abstraction** — users conflate "Codex" model with "OpenAI" provider API keys |

**Analysis**: The WeCom issue (#3090) has been open since March with `help wanted` and `status:accepted` labels but **no assignee**, suggesting a maintainer bandwidth gap for channel expansions. The SearXNG proposal (#5316) is `needs-maintainer-review` and touches core web search architecture — likely blocked on design approval.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| **S1 — Workflow blocked** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) Onboarding prompts for wrong API key | Open | ❌ No | Medium |
| **S2 — Degraded** | [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) Discord media pipeline broken (inbound images lost, outbound markers leak) | **Closed today** | ✅ #6555 (related) | **High** |
| **S2 — Degraded** | [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) TTS disabled in Telegram `stream_mode="partial"` | **Closed today** | ✅ Implied in merge | Medium |
| **S2 — Degraded** | [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) WebSocket `/ws/chat` ignores `[IMAGE:]` markers | **Closed today** | ✅ Likely #6549 | **High** |
| **S2 — Degraded** | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) Local image reading failed | **Closed today** | ✅ Yes | Low |
| S3 — Minor | [#5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687) rust-analyzer error | **Closed today** | ✅ Yes | Low |
| S3 — Minor | [#6359](https://github.com/zeroclaw-labs/zeroclaw/issues/6359) CI labeler misses `crates/**` paths | **Closed today** | ✅ Yes | Low |

**Critical open**: [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) remains the only **S1** issue — new users cannot complete Codex onboarding without manually overriding to OpenAI API key flow.

**Regressions addressed**: Three high-risk channel/media bugs were resolved today, significantly improving Discord and Telegram reliability. The WebSocket multimodal fix unblocks desktop client image interactions.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Maturity Signal | Likelihood in Next Release |
|:---|:---|:---|:---|
| **ComfyUI / Comfy Cloud media provider** | [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | Open, 1 comment, `needs-maintainer-review` | Medium — large scope (image + video gen) |
| **RunPod ComfyUI provider** | [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) | Open, `needs-author-action` | Medium — blocked on author revisions |
| **Home Assistant integration** | [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) | Open, large PR, no comments | Medium-High — fills declared `ComingSoon` gap |
| **SearXNG search** | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | Open, `needs-maintainer-review` | Low-Medium — architectural review pending |
| **WeCom channel** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | Open, `help wanted`, `status:accepted` | Low — needs community champion |
| **Claude Code vision** | [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) | Open, ready for review | **High** — completes provider parity |

**Prediction**: Claude Code vision support (#6549) and Home Assistant (#6464) are most likely to land in the next release. Both address clear gaps with relatively contained scope. The ComfyUI ecosystem (#6563 + #6555) may converge into a unified media provider abstraction.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Onboarding friction** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) — Codex vs. OpenAI key confusion | High for new users |
| **Media pipeline fragility** | [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556), [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453), [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) — Discord, WebSocket, Telegram all had image/TTS bugs | High for multimodal users |
| **Enterprise channel gaps** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) — WeCom missing despite competitor support | Medium for China market |
| **Search reliability** | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — DuckDuckGo CAPTCHA breaks autonomous agents | Medium for web-dependent workflows |

### Positive Signals

- **Rate-limiting architecture** is being praised implicitly by its systematic rollout (5 PRs by same author)
- **Observability investments** (#6553, #6596) show production-readiness focus for Docker/remote deployments
- **Provider robustness** fixes (#6597 vision detection, #6598 Anthropic temperature, #6600 TLS roots) demonstrate mature edge-case handling

---

## 8. Backlog Watch

| Item | Age | Blocker | Action Needed |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) Audit: 153 commits lost in bulk revert | ~3 weeks | `status:in-progress` | **Critical infrastructure debt** — 153 commits from March 28 revert need triage for recovery; only 2 comments suggests this is under-resourced |
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) WeCom support | ~2 months | No assignee, `help wanted` | Needs community contributor or maintainer sponsorship |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG + CAPTCHA | ~5 weeks | `needs-maintainer-review` | Design review for search provider abstraction |
| [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) Image gen RunPod | 4 days | `needs-author-action` | Author needs to address review feedback |

**Red flag**: [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) represents significant **unrecovered work** — 153 commits of bug fixes and features were bulk-reverted and remain un-triaged. With only 2 comments in 3 weeks, this risks permanent loss of contributions or duplicated effort.

---

*Digest compiled from GitHub activity 2026-05-12 to 2026-05-13. All links: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*