# OpenClaw Ecosystem Digest 2026-05-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-24 00:23 UTC

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

# OpenClaw Project Digest — 2026-05-24

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active contributor base and rapid iteration cycle. The project released a new beta version (v2026.5.22-beta.1) focused on documentation improvements. However, the **issue closure rate is critically low** (only 16 of 500 issues closed, 3.2%), while PR merge/closure is healthier at 62% (311 of 500). This suggests a growing backlog with potential triage bottlenecks. The community is heavily engaged on platform expansion (Linux/Windows apps), security hardening, and messaging reliability across multiple channels.

---

## 2. Releases

### [v2026.5.22-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1)

| Aspect | Details |
|--------|---------|
| **Type** | Documentation-focused beta |
| **Breaking Changes** | None |
| **Migration Notes** | N/A |

**Changes:**
- README onboarding clarification and Gateway startup path documentation
- WhatsApp QR/408 recovery procedures
- Cron output language prompt documentation
- Skill advanced features documentation
- Gateway upstream 403 troubleshooting guide
- Plugin fallback override guidance

*Contributors: @deepujain, @Zacxxx, @Jah-yee, @neyric, @usimic*

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#85863](https://github.com/openclaw/openclaw/pull/85863) | **CLOSED** | Decouple dreaming from memory-core via provider interface [AI-assisted] | Memory architecture modularity |
| [#85873](https://github.com/openclaw/openclaw/pull/85873) | **CLOSED** | Skip one-shot ACP startup identity reconcile | Startup reliability fix |
| [#41172](https://github.com/openclaw/openclaw/pull/41172) | **CLOSED** | Recognize Groq tool call validation error format | Provider compatibility |
| [#41038](https://github.com/openclaw/openclaw/pull/41038) | **CLOSED** | Show stdout for structured tool results in chat UI | UX improvement |
| [#41037](https://github.com/openclaw/openclaw/pull/41037) | **CLOSED** | Infer auth profile providers from profile IDs | Config validation fix |
| [#39762](https://github.com/openclaw/openclaw/pull/39762) | **CLOSED** | Feishu read-only mode for group chats | Enterprise feature |
| [#39761](https://github.com/openclaw/openclaw/pull/39761) | **CLOSED** | Enrich message_sending plugin hook with agent reasoning context | Extensibility |

### Active PRs Advancing

| PR | Area | Status | Key Improvement |
|----|------|--------|---------------|
| [#85656](https://github.com/openclaw/openclaw/pull/85656) | Telegram | 🚀 **Automerge armed** | Fix durable group retry targets (message loss prevention) |
| [#85817](https://github.com/openclaw/openclaw/pull/85817) | Policy | 👀 Ready for maintainer | Agent-scoped policy overlays (security boundary) |
| [#85802](https://github.com/openclaw/openclaw/pull/85802) | CLI/Install | 👀 Ready for maintainer | Honor `OPENCLAW_HOME` defaults correctly |
| [#85865](https://github.com/openclaw/openclaw/pull/85865) | Supervisor | 👀 Ready for maintainer | Graceful escalation of process supervisor cancellations |
| [#85767](https://github.com/openclaw/openclaw/pull/85767) | Performance | 📣 Needs proof | Move memory flush off user-visible reply path (latency) |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Category | Underlying Need |
|------|-------|----------|-----|----------|---------------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 105 | 77 | **Platform expansion** | Cross-platform parity; enterprise deployment flexibility |
| 2 | [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to messaging | 26 | 0 | **Privacy/UX** | Clean separation of internal reasoning from user-visible output |
| 3 | [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases | 25 | 1 | **Distribution** | Lower barrier to entry for non-technical users |
| 4 | [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon stop() race condition | 17 | 0 | **Reliability** | Robust process lifecycle management |
| 5 | [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap file loading | 16 | 0 | **Cost optimization** | Token efficiency for large workspaces |

**Analysis:** The overwhelming engagement on #75 (105 comments, 77 upvotes) reveals **platform diversity as the #1 unmet need** — macOS/iOS/Android coverage exists, but Linux/Windows desktop apps are blocking enterprise and developer adoption. The "off-meta tidepool" rating suggests this is undervalued by maintainers relative to community demand.

---

## 5. Bugs & Stability

### P1 (Critical) Issues — Active Today

| Issue | Severity | Description | Fix PR? | Risk |
|-------|----------|-------------|---------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **P1** 🦞 | Tool-call interstitial text leaks to Slack/iMessage/etc. | ❌ No | **Privacy breach**, user trust erosion |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | **P1** 🦞 | Signal daemon race condition → orphaned processes, send failures | ❌ No | Message loss, resource leaks |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | **P1** 🦞 | Subagent completion silently lost (no retry/notification) | ❌ No | **Data loss**, workflow breakage |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | **P1** 🐚 | Agent replies to *previous* message (session context confusion) | ❌ No | Conversation corruption |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | **P1** 🦞 | `exec` tool ignores `skills.entries.*.env` (regression) | ❌ No | Secret injection failure, broken integrations |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | **P1** 🦞 | Exec approvals path ignores state root, writes to `~/.openclaw` | ❌ No | **Security**: state isolation violation |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | **P1** 🦞 | Discord leaks internal tool-call traces | ❌ No | **Security/UX**: internal protocol exposure |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | **P1** 🦞 | Session hangs on compaction timeout → duplicate message spam | ❌ No | **Availability**, user harassment |
| [#45269](https://github.com/openclaw/openclaw/issues/45269) | **P1** 🦞 | `apply_patch` treated as unknown tool (regression) | ❌ No | Core functionality broken |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | **P1** 🦞 | Sandbox `workspaceAccess: none` makes workspace read-only | ❌ No | Tool execution failure |

### Regression Cluster

**5 distinct regressions** identified today with `regression` label, indicating potential quality assurance gaps in recent releases. Most lack linked fix PRs.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Near-Term Features

| Feature | Issue | Signals | Prediction |
|---------|-------|---------|------------|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | 105 comments, 77 👍, oldest active issue | **v2026.H2** — blocking enterprise adoption |
| **Masked secrets system** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 12 👍, security-focused, linked to auth provider impact | **v2026.6.x** — security compliance requirement |
| **Per-agent cost budgets** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 13 comments, gateway-level enforcement | **v2026.6.x** — operational necessity |
| **Prebuilt Android APKs** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | AI-submitted (meta-signal), distribution gap | **Next beta** — CI/CD maturity |
| **Slack Block Kit support** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | Rich messaging demand | **v2026.6.x** |

### Architectural Directions

| Issue | Theme | Implication |
|-------|-------|-------------|
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | Multi-agent collaboration enhancement | Framework-level redesign incoming |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap loading | Token cost optimization as first-class concern |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks | Hard policy guarantees for regulated industries |

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Frequency | Specific Complaints |
|----------|-----------|-------------------|
| **Session reliability** | 🔴 High | "silently lost", "hangs indefinitely", "replies to previous message", "stale timestamps" |
| **Security model** | 🔴 High | Secrets in plaintext, exec approvals path confusion, sandbox workspace read-only |
| **Platform coverage** | 🔴 High | No Linux/Windows apps, no prebuilt Android APKs |
| **Message fidelity** | 🟡 Medium | Tool-call leaks to channels, Discord internal traces exposed, formatting lost |
| **Cost control** | 🟡 Medium | No per-agent budgets, ~3,500 token tool schema overhead |
| **Memory management** | 🟡 Medium | "In chaos" — inconsistent behavior across users, no recursive search |

### Satisfaction Indicators

- **Positive:** Active multi-channel support (Telegram, Signal, Slack, Feishu, Discord, Matrix, iMessage), rapid PR iteration, plugin extensibility, TTS improvements
- **Negative:** Configuration complexity ("onboarding wizard misses memory setup"), Docker sandbox bind-mount issues, proxy/NO_PROXY conflicts with local embeddings

### Enterprise Readiness Gaps

- No native secrets management (AWS SM, Vault) — [#13610](https://github.com/openclaw/openclaw/issues/13610)
- No backup/restore utility — [#13616](https://github.com/openclaw/openclaw/issues/13616)
- Missing AWS deployment guide — [#13597](https://github.com/openclaw/openclaw/issues/13597)

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Action

| Issue | Age | Blockers | Risk if Unaddressed |
|-------|-----|----------|---------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | **145 days** | `needs-product-decision`, `needs-security-review` | Platform lock-in, enterprise exclusion |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets | **108 days** | `needs-security-review`, `needs-product-decision` | Credential exposure liability |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot | **112 days** | `needs-product-decision`, `needs-security-review` | Sandboxing credibility |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem sandboxing config | **111 days** | `needs-security-review`, `needs-product-decision` | Data exfiltration risk |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals denylist | **113 days** | `needs-product-decision`, `needs-security-review` | Over-permissive defaults |

### PRs Stalled on Author/Proof

| PR | Status | Blocker | Days Open |
|----|--------|---------|-----------|
| [#82951](https://github.com/openclaw/openclaw/pull/82951) | ⏳ Waiting on author | Security boundary review | ~7 days |
| [#38295](https://github.com/openclaw/openclaw/pull/38295) | ⏳ Waiting on author | Config dedupe complexity | ~80 days |
| [#85643](https://github.com/openclaw/openclaw/pull/85643) | ⏳ Waiting on author | Session model pin logic | ~1 day |

### Triage Bottleneck Indicators

- **"clawsweeper:needs-maintainer-review"** appears on **28 of 50** top issues
- **"clawsweeper:needs-product-decision"** appears on **24 of 50** top issues
- **"clawsweeper:fix-shape-clear"** appears on **19 of 50** — indicates shape-analysis tooling may be creating review friction

---

## Project Health Assessment

| Metric | Score | Trend |
|--------|-------|-------|
| Development velocity | ⭐⭐⭐⭐⭐ Very High | Stable |
| Issue resolution rate | ⭐⭐⭐ Low (3.2%) | ⚠️ Declining |
| Security responsiveness | ⭐⭐⭐ Moderate | Multiple P1s unassigned |
| Community engagement | ⭐⭐⭐⭐⭐ Excellent | Growing |
| Platform maturity | ⭐⭐⭐⭐ Good | Desktop gaps remain |
| Enterprise readiness | ⭐⭐⭐ Needs work | Documentation/security gaps |

**Recommendation:** Prioritize triage automation and maintainer bandwidth allocation. The 484:16 open-to-closed issue ratio is unsustainable and risks contributor burnout and user attrition.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date: 2026-05-24**

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense fragmentation and parallel evolution**, with at least 12 active projects competing across similar functional domains. The landscape splits between **mature, high-velocity reference implementations** (OpenClaw, ZeroClaw, IronClaw) handling 500+ daily updates and **focused, smaller projects** (NanoBot, PicoClaw, NanoClaw) optimizing for specific use cases or constraints. A critical tension emerges between **rapid feature expansion** and **production stability**—most projects show healthy PR merge rates but critically low issue closure rates, suggesting triage bottlenecks are becoming systemic. Enterprise readiness (secrets management, auditability, cross-platform deployment) remains the largest unmet need across the board.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Issue Closure Rate | PR Merge/Closure Rate | Health Assessment |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 updated, 16 closed (3.2%) | 500 updated, 311 closed (62%) | v2026.5.22-beta.1 (docs) | ⭐⭐⭐ Low | ⭐⭐⭐⭐⭐ High | **Strained** — velocity masks triage crisis |
| **ZeroClaw** | 50 updated | 50 updated, 13 closed (26%) | None (v0.8.0-beta-1 current) | Not stated | ⭐⭐⭐⭐ Moderate | **Active but bottlenecked** — pre-1.0 stabilization |
| **IronClaw** | 15 active (2 days) | 50 updated, 17 closed (34%) | None | Not stated | ⭐⭐⭐⭐ Moderate | **Controlled sprint** — core-team only, security-focused |
| **Hermes Agent** | 50 updated, 5 closed (10%) | 50 updated, 10 closed (20%) | None | ⭐⭐⭐ Low | ⭐⭐⭐ Moderate | **Backlog growing** — gateway stability stress |
| **NanoBot** | 8 updated, 3 closed (38%) | 10 updated, 4 closed (40%) | None | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐ Good | **Healthy maintenance** — accumulating for release |
| **NanoClaw** | 4 updated, 3 closed (75%) | 17 updated, 13 closed (76%) | None | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | **Strong stabilization** — WhatsApp/agent reliability focus |
| **PicoClaw** | 6 updated, 4 closed (67%) | 9 updated, 6 closed (67%) | v0.2.9-nightly | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | **Healthy maintenance** — clearing backlog efficiently |
| **NullClaw** | 0 | 10 updated, 0 closed (0%) | None | N/A | ⭐ Low | **Accumulation phase** — all PRs awaiting review |
| **Moltis** | 8 updated, 3 closed (38%) | 4 updated, 3 closed (75%) | None | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent | **Responsive but small** — fix-driven, not shipping |
| **CoPaw/QwenPaw** | 11 updated, 1 closed (9%) | 2 new, 0 closed (0%) | None (v1.1.8.post1 current) | ⭐⭐⭐ Low | ⭐ Low | **Bug-surge phase** — MCP immaturity exposed |
| **ZeptoClaw** | 3 updated | 17 updated, 14 closed (82%) | None | Not stated | ⭐⭐⭐⭐⭐ Excellent | **Stabilization** — dependency bulk-clear, architecture restart |
| **LobsterAI** | 3 new, 0 closed (0%) | 2 updated, 0 closed (0%) | None | ⭐ Low | ⭐ Low | **Stagnant** — single contributor, no maintainer engagement |
| **TinyClaw** | 0 | 0 | None | N/A | N/A | **Dormant** |

---

## 3. OpenClaw's Position

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-50× larger than any peer; ZeroClaw nearest at 50/50 |
| **Community** | Largest contributor base, multi-channel support (8+ messaging platforms) | Hermes Agent, ZeroClaw, NanoClaw comparable on channels; others narrower |
| **Technical approach** | Monolithic core with plugin extensibility; heavy TypeScript/Node; memory-core + dreaming architecture | NanoBot similar memory focus; IronClaw diverges with Rust/Zig multi-tenant sandbox; ZeptoClaw middleware pipeline |
| **Advantages** | Deepest ecosystem (skills marketplace), most platform integrations, rapid iteration | — |
| **Vulnerabilities** | **3.2% issue closure rate** (worst-in-class), 5 active regressions, security review backlog (28/50 top issues blocked), no native secrets management | PicoClaw, NanoClaw, Moltis show 3-6× better issue resolution; IronClaw proactive security posture |
| **Enterprise gaps** | No Linux/Windows desktop apps (#75, 145 days), no masked secrets (#10659, 108 days), no backup/restore | ZeroClaw, Hermes Agent partially address; IronClaw targeting multi-tenant production |

**Verdict**: OpenClaw remains the **functional reference and ecosystem default** but is **operationally stressed**—its velocity has become a liability without proportional triage investment. Peers are narrowing the feature gap while OpenClaw accumulates technical debt.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **WhatsApp reliability** | OpenClaw, NanoClaw, NullClaw, PicoClaw | LID→JID mapping persistence (NanoClaw #2194), QR/408 recovery (OpenClaw), polling mode silent failures (NullClaw #928), multi-account (PicoClaw #2883) |
| **Memory system correctness** | OpenClaw, NanoBot, NanoClaw, NullClaw, ZeptoClaw | Dream consolidation MECE structuring (NanoBot #3952), context budget enforcement (PicoClaw #2895), global memory retrieval (NullClaw #929), transcript rotation (NanoClaw #2586), longterm_memory trigger phrases (ZeptoClaw #571) |
| **Security hardening** | OpenClaw, IronClaw, NullClaw, Moltis, ZeroClaw | Secrets masking (OpenClaw #10659), TOCTOU filesystem hardening (IronClaw #3952), curl→native HTTP migration (NullClaw #881), env var exposure to LLM (Moltis #1054), silent-fallback hardening (ZeroClaw #6127) |
| **Configuration validation** | OpenClaw, NanoBot, Hermes Agent, Moltis, ZeroClaw | "Config accepted but doesn't work" pattern; fail-fast schemas (NanoBot #3637), hooks registration (Moltis #1048), schema v3 migration friction (ZeroClaw #6856) |
| **Local/self-hosted inference** | OpenClaw, NanoClaw, ZeroClaw, Hermes Agent | Custom OpenAI endpoints (NanoClaw #1994), llama-server broken (ZeroClaw #6180), slow backend tunables (Hermes Agent #27059) |
| **TUI/terminal interface** | OpenClaw, ZeroClaw, ZeptoClaw, Hermes Agent | Ratatui-based chat (ZeroClaw #6848), ACP YOLO mode (Hermes Agent #31202), legacy terminal migration (ZeptoClaw #593) |
| **Multi-agent/collaboration** | OpenClaw, LobsterAI, Moltis | Agent capability boundaries (Moltis #1049), multi-agent task assignment (LobsterAI #1530), cross-task memory (OpenClaw #35203) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Ecosystem breadth (skills, channels, plugins) | Generalist developers, multi-platform deployers | TypeScript monolith, memory-core dreaming, plugin marketplace |
| **IronClaw** | Multi-tenant security, sandboxed execution | Enterprise SaaS, regulated industries | Rust/Zig, Docker sandbox, hook framework, `openat2` hardening |
| **ZeroClaw** | Pre-1.0 architectural flexibility, TUI-first | Systems programmers, Rust ecosystem | Rust, middleware pipeline (incomplete), strict `deny.toml` security |
| **NanoBot** | Subagent flexibility, Chinese AI ecosystem integration | Researchers, subagent workflow designers | Python, Dream memory, per-subagent temperature control |
| **NanoClaw** | WhatsApp Business API depth, agent-runner robustness | WhatsApp-first operators, SMB automation | TypeScript, fragment-based skills, transcript lifecycle management |
| **PicoClaw** | Lightweight, rapid fix turnaround, Chinese market focus | Resource-constrained deployers, WeChat users | Go, Seahorse assembler, minimal footprint |
| **Hermes Agent** | IDE integration (Cursor, Copilot), vault ecosystem | Developer tooling, DevSecOps | TypeScript, ACP protocol, plugin memory providers |
| **NullClaw** | Zig-native, subprocess-free HTTP | Security-minimalist, systems programmers | Zig, `std.http` migration, explicit trust configuration |
| **Moltis** | Agent-as-capability-boundary, family/multi-user safety | Consumer multi-user, parental control | TypeScript, per-agent sloopback/timeout, capability flags |
| **CoPaw/QwenPaw** | Alibaba Cloud integration, Chinese enterprise channels | China-market enterprise, DingTalk/Feishu users | Python, MCP protocol, console UI |
| **ZeptoClaw** | "Fast, small, secure, local-first" positioning | Privacy-conscious individual users | Rust, middleware pipeline research, Hermes Agent pattern adoption |
| **LobsterAI** | Evolutionary self-improvement (stalled) | AI researchers | Python, OpenClaw dependency, skill-self-evolver |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Rapid Iteration (Unsustainable)** | OpenClaw, ZeroClaw | 50-500 daily updates; high contributor counts; merge velocity < input velocity; triage crisis emerging |
| **🚀 Controlled Sprint** | IronClaw | Core-team only; security-critical; intentional accumulation for milestone; no external PRs |
| **✅ Healthy Maintenance** | NanoBot, NanoClaw, PicoClaw, Moltis | 4-17 daily items; closure rates 40-75%; responsive maintainer action; stabilization-focused |
| **⚠️ Accumulation Risk** | NullClaw, ZeptoClaw | 10-17 items; all or most PRs open; dependency on single maintainer or blocked architectural work |
| **🔴 Stagnant/Dormant** | LobsterAI, TinyClaw | Zero or near-zero activity; no maintainer engagement; contributor capital eroding |

**Key transitions**: NanoClaw and PicoClaw demonstrate that **smaller scope enables healthier closure rates**—both are successfully stabilizing production systems. OpenClaw and ZeroClaw face **scaling challenges** where process, not code, is the bottleneck. IronClaw is **deliberately gated** for security review, a valid but risky pre-1.0 strategy.

---

## 7. Trend Signals

| Trend | Evidence | Value for Developers |
|:---|:---|:---|
| **Agent middleware pipelines as architectural standard** | ZeptoClaw #399/#593, IronClaw hook framework, Moltis #1049 | Replace monolithic agent loops with composable, testable, observable middleware stages |
| **Memory as competitive battlefield** | MECE consolidation (NanoBot), context budget enforcement (PicoClaw), global memory semantics (NullClaw), trigger-phrase nudges (ZeptoClaw) | Invest in explicit memory architecture early; "it just remembers" is no longer sufficient |
| **Security-by-default as table stakes** | IronClaw `openat2`, NullClaw explicit allowlists, Moltis env var exposure fix, ZeroClaw silent-fallback hardening | Design for multi-tenant/untrusted execution from day one; retrofitting is expensive |
| **Channel diversity → channel standardization** | ZeroClaw 16-channel allowlist migration, OpenClaw Telegram/Signal/Discord parity demands | Abstract channel interface early; per-channel hand-rolled logic does not scale |
| **Local-first / self-hosted resurgence** | NanoClaw custom endpoints, ZeroClaw llama-server, Hermes Agent local backend tunables, PicoClaw resource constraints | Cloud-default assumptions are being challenged; provide escape hatches |
| **TUI as primary interface** | ZeroClaw Ratatui, Hermes Agent ACP YOLO, ZeptoClaw terminal migration | Terminal interfaces are not legacy—they're power-user preferred and CI-friendly |
| **MCP protocol maturation stress** | CoPaw #4643/#4646 OAuth/schema bugs | Early protocol adopters pay integration tax; validate aggressively |
| **"Silent failure" as critical anti-pattern** | NullClaw Telegram drops, NanoClaw slash commands, Moltis hooks unregistered, OpenClaw tool-call leaks | Observability and fail-closed design must be prioritized over feature velocity |

---

**Strategic Recommendation**: Developers evaluating this ecosystem should weigh **OpenClaw's ecosystem depth against its operational debt**, consider **IronClaw for security-critical deployments**, and monitor **NanoClaw and PicoClaw as emerging stability references**. The middleware pipeline and memory architecture patterns developing across ZeptoClaw, IronClaw, and Moltis represent the most likely architectural convergence points for 2026-H2.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-24

## 1. Today's Overview

NanoBot showed **strong daily activity** with 18 total updates (8 issues, 10 PRs) and healthy forward momentum. The project resolved 3 issues and merged/closed 4 PRs, while 6 new PRs entered review and 5 issues remain actively discussed. Notably, the community is driving substantial infrastructure work around provider extensibility (OpenAI API types, Azure Speech, Zhipu image generation, Xiaomi MiMo), subagent temperature control, and memory system refinements. No new releases were cut, suggesting maintainers are accumulating changes for a future version rather than shipping continuously.

---

## 2. Releases

**None** — No new releases published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|---|---|---|
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | **feat(memory): enhance Dream + Consolidator prompts for MECE long-term memory** | Major memory system refactor addressing duplication bloat, MECE (Mutually Exclusive, Collectively Exhaustive) structuring, and temporal decay. Closes architectural gaps in Dream consolidation. |
| [#3972](https://github.com/HKUDS/nanobot/pull/3972) | **docs: use xiaomi_mimo provider for MiMo token plan** | Provider documentation modernization — replaces legacy `custom` provider config with built-in `xiaomi_mimo` provider. |
| [#3967](https://github.com/HKUDS/nanobot/pull/3967) | **fix: uncap exec config timeout and normalize transcription apiBase** | Dual bugfix: removes 600s hard cap on `exec` timeout configuration (fixes [#3595](https://github.com/HKUDS/nanobot/issues/3595)) and fixes Groq transcription `apiBase` normalization (fixes [#3637](https://github.com/HKUDS/nanobot/issues/3637)). |
| [#3971](https://github.com/HKUDS/nanobot/pull/3971) | **feat: Add Zhipu (智谱) image generation provider** | Expands Chinese AI ecosystem support with native Zhipu image generation integration. |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) — Transcription Provider Configuration Transparency | 3 comments, **closed** | **Root need**: Developer experience around provider configuration is brittle. The `apiBase` normalization fix in [#3967](https://github.com/HKUDS/nanobot/pull/3967) reveals a pattern: chat-style API endpoints being reused for transcription without proper path handling. Community wants **configuration schemas that fail fast with clear errors**. |
| [#3047](https://github.com/HKUDS/nanobot/issues/3047) — Dream memory consolidation issues | 2 comments, **closed** | **Root need**: Memory system reliability at scale. Context overflow within 2-hour windows and write amplification to `history.jsonl` indicate Dream's batch-oriented design struggles with high-frequency agents. The merged [#3952](https://github.com/HKUDS/nanobot/pull/3952) partially addresses this via MECE structuring. |
| [#2182](https://github.com/HKUDS/nanobot/issues/2182) — Hooks feature request | 2 comments, 👍×2 | **Highest-voted open issue**. Users want lifecycle extensibility comparable to Claude Code/GitHub Copilot CLI (SessionStart, PreToolUse, PostToolUse). **Signal**: NanoBot's architecture may need plugin/hook system to compete with enterprise tools. |

**Emerging pattern**: The community is actively building around NanoBot's core limitations rather than waiting for maintainers — subagent temperature PR ([#3975](https://github.com/HKUDS/nanobot/pull/3975)), skill listing command ([#3968](https://github.com/HKUDS/nanobot/pull/3968)), and BM25 skill router ([#3865](https://github.com/HKUDS/nanobot/pull/3865)) all represent user-driven ecosystem expansion.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available? |
|---|---|---|---|
| 🔴 **High** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) — Duplicate item found with id error (GPT/Codex) | **Open**, active | ❌ No PR yet. Blocks agent resumption. Affects `gpt-5.5` model via Codex path. |
| 🟡 **Medium** | [#3637](https://github.com/HKUDS/nanobot/issues/3637) — Transcription `apiBase` misconfiguration | **Closed** | ✅ Fixed by [#3967](https://github.com/HKUDS/nanobot/pull/3967) |
| 🟡 **Medium** | [#3047](https://github.com/HKUDS/nanobot/issues/3047) — Dream context overflow | **Closed** | ✅ Mitigated by [#3952](https://github.com/HKUDS/nanobot/pull/3952) |
| 🟢 **Low** | [#3595](https://github.com/HKUDS/nanobot/issues/3595) — 600s exec timeout cap | **Closed** | ✅ Fixed by [#3967](https://github.com/HKUDS/nanobot/pull/3967) |

**Critical watch**: [#3633](https://github.com/HKUDS/nanobot/issues/3633) is the only unaddressed stability issue with no associated PR. The `Duplicate item found with id` error suggests a state management or deduplication bug in the agent loop that completely halts execution. Given it affects GPT-5.5 (latest OpenAI model), this may indicate compatibility drift.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Per-subagent temperature control** | [#3969](https://github.com/HKUDS/nanobot/issues/3969) → [#3975](https://github.com/HKUDS/nanobot/pull/3975) | **Very High** | PR already open, pipeline exists, backward-compatible. Enables deterministic vs. creative subagent workflows. |
| **Skill discovery (`/skill` command)** | [#3968](https://github.com/HKUDS/nanobot/pull/3968) | **High** | Small surface area, addresses documented gap (#3959). Improves DX significantly. |
| **OpenAI API type selection (chat_completions vs. responses)** | [#3974](https://github.com/HKUDS/nanobot/pull/3974) | **High** | Critical for OpenAI's evolving API landscape (Responses API is their new default). WebUI integration included. |
| **Azure Speech Service voice-to-text** | [#3970](https://github.com/HKUDS/nanobot/pull/3970) | **Medium** | Expands voice modality support, but niche (Telegram/WhatsApp + Azure ecosystem). |
| **BM25-lite skill router** | [#3865](https://github.com/HKUDS/nanobot/pull/3865) | **Medium** | ~60% system prompt reduction is compelling for cost/performance, but architectural review needed. |
| **Lifecycle hooks system** | [#2182](https://github.com/HKUDS/nanobot/issues/2182) | **Low-Medium** | High community demand (👍×2, most on open issues), but requires core architecture changes. No PR yet. |

**Prediction**: Next release likely focuses on **subagent flexibility** (temperature) + **provider modernization** (OpenAI API types, Azure Speech, Zhipu) + **DX improvements** (`/skill`, config transparency).

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|---|---|---|
| **Configuration opacity** | [#3637](https://github.com/HKUDS/nanobot/issues/3637) transcription setup, [#3595](https://github.com/HKUDS/nanobot/issues/3595) undocumented timeout cap | Medium — users waste time on "invalid" setups that should validate at config load |
| **Memory system starvation** | [#3973](https://github.com/HKUDS/nanobot/issues/3973) "Dream Hunger Problem", [#3047](https://github.com/HKUDS/nanobot/issues/3047) context overflow | High — core self-improvement mechanism fails under real workloads |
| **Agent loop crashes** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) unrecoverable GPT-5.5 error | High — breaks trust in autonomous operation |
| **Noisy human-bot handoff** | [#2837](https://github.com/HKUDS/nanobot/issues/2837) WhatsApp bot replies over human | Medium — social/operational friction in multi-user contexts |

### Positive Signals
- **Proactive ecosystem expansion**: Users building skill routers, subagent controls, and provider integrations rather than abandoning project
- **Responsive maintenance**: 2 issues closed with same-day PR merges (#3595/#3637 → #3967)
- **Multi-modal investment**: Voice (Azure Speech, transcription fixes), image (Zhipu), and text all receiving attention

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) — Decouple heartbeat reasoning from notification | **~12 weeks** (Mar 2) | Stale; may conflict with notification architecture changes | Maintainer decision: merge, close, or rebase. Silent-by-default heartbeat is UX-breaking change needing release notes. |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) — BM25-lite skill router | **1 week** (May 16) | Architectural review pending | Evaluate against existing skill system; ~60% token reduction is significant but may affect deterministic behavior. |
| [#2182](https://github.com/HKUDS/nanobot/issues/2182) — Hooks feature request | **~10 weeks** (Mar 17) | Highest-voted open issue; risk of community fork if ignored | Maintainer response needed: accept/reject/roadmap. Consider if plugin architecture exists to build upon. |
| [#2837](https://github.com/HKUDS/nanobot/issues/2837) — WhatsApp human-reply pause | **~7 weeks** (Apr 6) | Platform-specific; may not align with core priorities | Clarify scope: is WhatsApp a first-class platform or community-maintained? |

**Urgency**: [#1443](https://github.com/HKUDS/nanobot/pull/1443) and [#2182](https://github.com/HKUDS/nanobot/issues/2182) are the longest-running items with clear user value. Without maintainer engagement, they risk becoming "forever open" backlog items that deter contributors.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-23/24.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-24

## 1. Today's Overview

Hermes Agent shows **elevated community activity** with 50 issues and 50 PRs updated in the last 24 hours, though the 9:1 open-to-closed ratio for issues (45 open, 5 closed) and 4:1 for PRs (40 open, 10 merged/closed) indicates a **growing backlog** that may strain maintainer bandwidth. No new release was cut today, suggesting the project is in a stabilization phase rather than preparing for a versioned ship. The activity is heavily concentrated in gateway/platform stability and CLI/config robustness, with notable urgency around Telegram, Discord, and QQ Bot integrations. Multiple P1/P2 severity bugs around topic hijacking, CPU spin loops, and message dropping in production gateway deployments signal **operational stress for multi-platform users**. The maintainer team appears responsive with quick PR turnover on well-scoped fixes, but complex architectural issues (SQLite concurrency, streaming hangs) remain unresolved.

---

## 2. Releases

**No new releases** — None published as of 2026-05-24.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#31206](https://github.com/NousResearch/hermes-agent/pull/31206) | ArnBdev | Honor `TERMINAL_CWD` in local environment hints | CLI correctness for long-running processes |
| [#31207](https://github.com/NousResearch/hermes-agent/pull/31207) | ArnBdev | Write timeout diagnostics for in-flight subagent delegates | Better observability for delegation failures |
| [#29360](https://github.com/NousResearch/hermes-agent/pull/29360) | dskwe | Strip null bytes from `.env` before python-dotenv loads | Prevents startup crash from corrupted API keys |
| [#31211](https://github.com/NousResearch/hermes-agent/pull/31211) | teknium1 | Salvage of #29360: same null-byte fix onto current main | Maintainer-driven rebase for mergeability |
| [#30922](https://github.com/NousResearch/hermes-agent/issues/30922) → closed | WadydX | *(Issue closed)* `hermes doctor` and setup now report active plugin overrides | Config transparency improvement |
| [#26974](https://github.com/NousResearch/hermes-agent/issues/26974) → closed | elibroftw | *(Issue closed)* Corrected Docker SimpleX instructions | Docs fix |

### Notable Open PRs Advancing

| PR | Author | Summary | Status |
|:---|:---|:---|:---|
| [#31201](https://github.com/NousResearch/hermes-agent/pull/31201) | michaelkrauty | **New LLM Wiki memory provider** — standalone `hermes-llm-wiki` package integration | Under review; significant memory ecosystem expansion |
| [#31202](https://github.com/NousResearch/hermes-agent/pull/31202) | lsaether | **ACP YOLO session mode** — mirrors TUI `/yolo` for programmatic sessions | Under review; closes ACP/TUI parity gap |
| [#31203](https://github.com/NousResearch/hermes-agent/pull/31203) | apuodesu | **ScrapeCreators search provider** — new web search backend | Under review; diversifies web tooling |
| [#31209](https://github.com/NousResearch/hermes-agent/pull/31209) | vladsh | **Mem0 self-hosting support** via `MEM0_HOST` | Under review; addresses #16401, enterprise privacy need |
| [#30835](https://github.com/NousResearch/hermes-agent/pull/30835) | RobertoVillegas | **Cursor ACP provider** — native Cursor Composer integration | Under review; follows `copilot-acp` pattern |

---

## 4. Community Hot Topics

### Most Active by Engagement

| # | Issue/PR | Comments | 👍 | Analysis of Underlying Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#29125](https://github.com/NousResearch/hermes-agent/issues/29125) — Claude CLI integration broken | 19 | 7 | **Core provider reliability**: Users expect first-class Anthropic CLI parity; token handling flow is fragile, blocking Claude Pro/Max subscribers |
| 2 | [#7066](https://github.com/NousResearch/hermes-agent/issues/7066) — Install script blocked on Ubuntu | 7 | 2 | **Onboarding friction in restricted networks**: Mirror fallback logic missing; affects China/regional users behind aliun mirrors |
| 3 | [#27059](https://github.com/NousResearch/hermes-agent/issues/27059) — `session_search` hard-coded cost knobs | 4 | 0 | **Local/slow backend operability**: Default configs assume cloud-scale latency; self-hosters need tunable thresholds |
| 4 | [#22791](https://github.com/NousResearch/hermes-agent/issues/22791) — Infisical vault backend | 3 | 5 | **Enterprise secret management**: Phase 4 vault ecosystem incomplete; strong vote demand for modern DevSecOps toolchain |
| 5 | [#31000](https://github.com/NousResearch/hermes-agent/issues/31000) — OpenViking memory mirroring fails | 3 | 0 | **Plugin reliability expectations**: Memory plugins advertised as "mirroring" silently no-op; trust erosion in plugin ecosystem |

**Pattern**: The highest-engagement issues cluster around **"it doesn't work with my setup"** rather than feature requests — users are struggling with assumed defaults that don't match their environment (corporate Azure, local LLMs, regional networks, existing secret stores).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| **P1** | [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | Anthropic streaming: stale paths call `_replace_primary_openai_client`, causing **15-minute hangs** | None | Production outage for Anthropic-native users |
| **P1** | [#31086](https://github.com/NousResearch/hermes-agent/issues/31086) | Telegram DM topic hijack — every new topic routed to previous thread | [#31205](https://github.com/NousResearch/hermes-agent/pull/31205) open | Data leakage between conversations; user trust impact |
| **P1** | [#31165](https://github.com/NousResearch/hermes-agent/issues/31165) | Cron Telegram delivery **silently drops messages** after reconnect storms | None | Scheduled automation unreliable; "success" logging masks failure |
| **P2** | [#31193](https://github.com/NousResearch/hermes-agent/issues/31193) | QQ Bot reconnect busy loop → **100% CPU spin for hours** | None | Resource exhaustion; cloud cost/thermal issues |
| **P2** | [#31101](https://github.com/NousResearch/hermes-agent/issues/31101) | QQ Bot `_read_events()` **silent infinite loop** after reconnect failure | None | Permanent disconnection without alerting |
| **P2** | [#27282](https://github.com/NousResearch/hermes-agent/issues/27282) | Gateway exits mid-turn with stdin EOF on macOS TUI | None | macOS-specific stability gap |
| **P2** | [#30445](https://github.com/NousResearch/hermes-agent/issues/30445) | Kanban DB corruption risk from **multi-gateway concurrent SQLite** | None | Data loss in multi-profile deployments |
| **P2** | [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) | Kanban dispatcher **wedges** under multi-thread + subprocess concurrency | None | Requires gateway restart to recover |
| **P2** | [#31137](https://github.com/NousResearch/hermes-agent/issues/31137) | MEDIA directive drops `.html` due to **regex whitelist drift** | None | File routing inconsistency |
| **P2** | [#31155](https://github.com/NousResearch/hermes-agent/issues/31155) | `delegation.model` override **ignored** — subagents inherit parent model | None | Cost/speed control broken for delegated tasks |

**Critical gap**: Three independent QQ Bot failure modes (#31101, #31193, plus #31169 group command failure) suggest the QQ adapter is **effectively unmaintained** for production use.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Release |
|:---|:---|:---:|
| [#22791](https://github.com/NousResearch/hermes-agent/issues/22791) — Infisical vault | Phase 4 external vault ecosystem; 5 votes; clear enterprise demand | **High** — scoped, fits existing pattern |
| [#31201](https://github.com/NousResearch/hermes-agent/pull/31201) — LLM Wiki memory provider | PR open; standalone package ready; memory diversity priority | **High** |
| [#31209](https://github.com/NousResearch/hermes-agent/pull/31209) — Mem0 self-hosting | PR open; closes #16401; privacy/enterprise blocker | **High** |
| [#31202](https://github.com/NousResearch/hermes-agent/pull/31202) — ACP YOLO mode | Small surface; ACP parity gap; PR ready | **Medium-High** |
| [#31203](https://github.com/NousResearch/hermes-agent/pull/31203) — ScrapeCreators search | New web provider; tests included; low risk | **Medium** |
| [#30835](https://github.com/NousResearch/hermes-agent/pull/30835) — Cursor ACP provider | Follows established `copilot-acp` pattern; IDE integration trend | **Medium** |
| [#31167](https://github.com/NousResearch/hermes-agent/issues/31167) — Configurable Discord reaction emojis | Cosmetic customization; low complexity | **Medium** |
| [#30999](https://github.com/NousResearch/hermes-agent/issues/30999) — Custom skill subdirectories | Hardcoded `ALLOWED_SUBDIRS` limit; small fix | **Medium** |
| [#19615](https://github.com/NousResearch/hermes-agent/issues/19615) — Cron global vs pinned model distinction | Architectural config question; needs design decision | **Low-Medium** |
| [#18369](https://github.com/NousResearch/hermes-agent/issues/18369) — Nudge counters reset on `/new` | Behavioral change; affects core agent lifecycle | **Low** — needs product decision |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"It worked before / broke silently"** | OpenViking mirroring "never worked over 2-3 weeks"; cron "records delivery as successful" but drops messages; QQ Bot "permanently disconnected until restart" | **Critical trust erosion** |
| **Config ignored or misapplied** | `delegation.model` ignored; `HERMES_PROFILE` env var not honored; provider config changes not reflected after `/new` | **Operational confusion** |
| **Install/startup blocked** | `install.sh` needs `xz-utils` (silent fail); `.env` null bytes crash startup; Azure OpenAI "doesn't seem to work" | **Onboarding barrier** |
| **Platform-specific fragility** | macOS TUI EOF; Telegram topic hijack; QQ Bot multiple failure modes | **Cross-platform promise unfulfilled** |
| **Hardcoded limits for non-cloud users** | `session_search` "unturnable for slow/local backends"; `ALLOWED_SUBDIRS` blocks custom skill orgs | **Local/self-host second-class** |

### Satisfaction Signals

- Users actively **extending** the platform (Cursor ACP, ScrapeCreators, LLM Wiki, Mem0 self-hosting PRs)
- Strong **enterprise/security** engagement (Infisical, vault ecosystem, secret management)
- Quick maintainer response on **well-scoped, reproducible** bugs (null-byte fix merged same day)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (stale or complex)

| Issue | Age | Problem | Why It Needs Action |
|:---|:---|:---|:---|
| [#7066](https://github.com/NousResearch/hermes-agent/issues/7066) | ~6 weeks | Install blocked on Ubuntu mirrors | **Onboarding blocker**; affects global users; simple network fallback fix |
| [#11197](https://github.com/NousResearch/hermes-agent/issues/11197) | ~5 weeks | `install.sh` needs `xz-utils` | **Onboarding blocker**; silent failure mode; dependency check missing |
| [#18369](https://github.com/NousResearch/hermes-agent/issues/18369) | ~3 weeks | Nudge counters reset on `/new` | **Core feature broken for short-session users**; needs product decision on lifecycle |
| [#27059](https://github.com/NousResearch/hermes-agent/issues/27059) | ~1 week | `session_search` untunable | **Local backend operability**; config surface design needed |
| [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | ~6 days | Anthropic 15-min hang | **Production outage**; streaming architecture fix needed |
| [#27282](https://github.com/NousResearch/hermes-agent/issues/27282) | ~1 week | macOS TUI gateway exit | **Platform parity**; may be root cause class affecting other adapters |

### PRs At Risk of Stale

| PR | Age | Risk |
|:---|:---|:---|
| [#28074](https://github.com/NousResearch/hermes-agent/pull/28074) | ~6 days | P1 compressor fix; needs review |
| [#28039](https://github.com/NousResearch/hermes-agent/pull/28039) | ~6 days | P1 codex response status fix; needs review |
| [#27983](https://github.com/NousResearch/hermes-agent/pull/27983) | ~6 days | P1 Matrix reply context; needs review |
| [#29952](https://github.com/NousResearch/hermes-agent/pull/29952) | ~3 days | `HERMES_PROFILE` env var fix; config correctness |

**Recommendation**: The maintainer team should consider a **stability-focused release** (0.14.1 or 0.15.0) prioritizing the P1 gateway/telegram fixes and merged PR backlog, as the current `main` branch accumulation risks a painful integration window.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-24

## 1. Today's Overview

PicoClaw shows **healthy maintenance activity** with 15 items updated in the last 24 hours (6 issues, 9 PRs). The project is actively clearing backlog: 4 issues closed versus 2 remaining open, and 6 PRs merged/closed versus 3 open. A new nightly build was published, indicating continuous integration is operational. The focus areas today span **channel infrastructure** (Discord vision, WeChat multi-account), **context window management** (Seahorse budget enforcement), and **provider compatibility** (DeepSeek thinking fields). Notably, two significant bugs received fixes: a critical context budget overflow and Discord attachment handling for vision pipelines.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.9-nightly.20260523.f09a7d67](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)** | Nightly | Automated build from `main` branch; marked unstable. Includes all changes merged through 2026-05-23. |

**No stable release** published today. The changelog diff suggests accumulation of fixes since v0.2.9, including the Seahorse budget fix and DeepSeek thinking mapping. Users on v0.2.8 should consider the [gateway startup bug (#2742)](https://github.com/sipeed/picoclaw/issues/2742) before upgrading to nightly.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Description | Impact |
|----|--------|-------------|--------|
| [#2931](https://github.com/sipeed/picoclaw/pull/2931) | hschne | **fix(discord)**: Download all attachment types for vision pipeline; previously only audio was fetched, causing images/files to be dropped | **High** — Fixes vision capability for Discord channel |
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | afjcjsbx | **fix(seahorse)**: Enforce context budget on `FreshTail` messages; prevents budget bypass causing 400 BadRequestError | **Critical** — Resolves [#2894](https://github.com/sipeed/picoclaw/issues/2894) |
| [#2928](https://github.com/sipeed/picoclaw/pull/2928) | lc6464 | **feat(openai_compat)**: Map `thinking_level` to DeepSeek `thinking`/`reasoning_effort` fields | **Medium** — Improves provider abstraction completeness |
| [#2835](https://github.com/sipeed/picoclaw/pull/2835) | bogdanovich | **fix(agent)**: Always publish final reply after interim `message` tool use | **Medium** — Fixes suppressed final responses |
| [#2930](https://github.com/sipeed/picoclaw/pull/2930) | lc6464 | **build(deps)**: Bump `golang.org/x/net` to v0.55.0 for security | **Low** — Addresses `govulncheck` findings |
| [#1838](https://github.com/sipeed/picoclaw/pull/1838) | jonahzheng | **fix**: Correct prompt for `picoclaw onboard` command | **Low** — Typo fix |

**Key advancement**: The Seahorse assembler budget enforcement fix closes a **silent failure mode** where context overflow bypassed limits. The Discord vision fix unblocks multimodal use cases on that channel.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|------|----------|----------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) Email as native channel | **7 comments, 2 👍** | Longest-running active discussion (created April 8). Users in restricted environments (corporate, scientific) need email as fallback channel. **Underlying need**: Accessibility in low-trust or locked-down networks where Telegram/Discord are blocked. Stale label suggests maintainer hesitation—possibly due to async complexity vs. real-time chat assumptions. |
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) Gateway starts with no channels | **5 comments** | Active bug in v0.2.8 with Telegram config. User reports gateway initializes empty despite enabled channel. **Underlying need**: Reliability in configuration parsing—users expect "enabled: true" to guarantee channel registration. |

### Open PRs with Traction

| PR | Significance |
|----|-------------|
| [#2883](https://github.com/sipeed/picoclaw/pull/2883) WeChat multi-account support | **Stale but unmerged** — Chinese-market critical feature; dynamic `weixin_*` config key pattern. Contributor notes "mostly AI-generated" with significant human modification. Blocker may be review bandwidth or architectural concerns about config schema proliferation. |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **Critical** | [#2894](https://github.com/sipeed/picoclaw/issues/2894) / [#2895](https://github.com/sipeed/picoclaw/pull/2895) | Seahorse `FreshTailCount=32` bypasses budget, causes 400 BadRequestError when exceeding context window | **FIXED** in #2895 |
| 🟡 **High** | [#2931](https://github.com/sipeed/picoclaw/pull/2931) | Discord vision pipeline silently drops non-audio attachments | **FIXED** in #2931 |
| 🟡 **High** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) | Gateway starts with zero channels in v0.2.8; Telegram config ignored | **OPEN** — No linked fix PR |
| 🟠 **Medium** | [#2880](https://github.com/sipeed/picoclaw/issues/2880) | Android: "Start Service" crashes with permission denied on `Downloads/picoclaw` (Android 10, MIUI 12) | **OPEN** — 1 comment, no response; likely scoped storage enforcement issue on older Android |
| 🟢 **Low** | [#2835](https://github.com/sipeed/picoclaw/pull/2835) | Final reply suppressed after interim `message` tool use | **FIXED** in #2835 |

**Regression risk**: The v0.2.8 gateway bug (#2742) remains unaddressed and may affect users upgrading from earlier versions. The Android permission issue (#2880) suggests legacy storage compatibility gap.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **DeepSeek native thinking controls** | [#2903](https://github.com/sipeed/picoclaw/issues/2903) → [#2928](https://github.com/sipeed/picoclaw/pull/2928) | **Merged** | Already in main; completes provider abstraction |
| **Email native channel** | [#2421](https://github.com/sipeed/picoclaw/issues/2421) | **Medium** | High user demand (7 comments, corporate use case), but architectural complexity high; stale label suggests deferred |
| **WeChat multi-account** | [#2883](https://github.com/sipeed/picoclaw/pull/2883) | **Medium-High** | PR exists, stale but functional; critical for Chinese user base |
| **Code block UX improvements** | [#2933](https://github.com/sipeed/picoclaw/pull/2933) | **High** | Open PR, low risk, frontend-only; line numbers + wrap toggle |
| **Czech localization** | [#2932](https://github.com/sipeed/picoclaw/pull/2932) | **High** | Complete 792-string coverage, ready to merge |

**Predicted v0.3.0 or v0.2.10 scope**: DeepSeek thinking, Czech locale, code block UX, and WeChat multi-account are likely candidates. Email channel may require dedicated RFC.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Context | Severity |
|-------|-----------|----------|
| **Configuration reliability** | "enabled: true" not respected (#2742) | High — breaks trust in config system |
| **Android legacy support** | Pocophone F1 (2018) cannot start service (#2880) | Medium — excludes older device users |
| **Upgrade path clarity** | "I need tutorial how upgrade to new version (remove old)" (#2834) | Medium — documentation gap |
| **Context window explosions** | 400 BadRequestError when FreshTail exceeds budget (#2894) | High — silent failure, hard to debug |

### Satisfaction Indicators

- **Positive**: Rapid fix turnaround for critical bugs (Seahorse budget: 5 days from report to merge; Discord vision: same-day merge)
- **Negative**: Stale labels on legitimate features (email, WeChat multi-account) suggest maintainer bandwidth constraints

### Use Case Diversity

- **Enterprise/restricted networks**: Email channel request
- **Chinese market**: WeChat multi-account
- **Multimodal/vision**: Discord attachment fix
- **Developer experience**: Code block UX, Czech localization

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2883](https://github.com/sipeed/picoclaw/pull/2883) WeChat multi-account | 7 days, stale | **High** — Market-critical PR; bit-rotting | Maintainer review for config schema approval |
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) Email native channel | 45 days, stale | **Medium** — Longstanding user request | Architectural decision: async email vs. real-time chat model |
| [#2880](https://github.com/sipeed/picoclaw/issues/2880) Android permission crash | 8 days, 1 comment | **Medium** — No triage | Reproduction confirmation; scoped storage migration path |
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) Gateway no channels | 23 days | **High** — Active in v0.2.8 | Root cause analysis; likely config parsing regression |

**Maintainer attention recommended**: The WeChat multi-account PR (#2883) is the highest-value item at risk of abandonment due to stale status. The gateway bug (#2742) affects current stable version users and warrants priority investigation.

---

*Digest generated from GitHub activity 2026-05-23. All links reference github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-24

## 1. Today's Overview

NanoClaw showed **strong engineering velocity** with 17 PRs updated in the last 24 hours (13 merged/closed, 4 remaining open) and 4 issues processed (3 closed, 1 new open bug). No new releases were cut. Activity is heavily concentrated on **WhatsApp channel reliability**, **agent-runner robustness**, and **security hardening** — indicating a project maturing from feature development toward production stability. The single new open issue (#2603) reveals a v1→v2 migration pain point in the skill system that could affect adopters of the compact skill branch.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (13 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #2598 | jonnychesthair-crypto | **Fixes per-group memory loading**: Adds `'local'` to `settingSources` so `CLAUDE.local.md` is properly loaded by the SDK, resolving the issue reported in #2185 | [PR #2598](https://github.com/nanocoai/nanoclaw/pull/2598) |
| #2597 | kartast | **Agent-runner crash recovery**: Exits on persistent `inbound.db` corruption instead of infinite log-looping; prevents 25+ minute outages on Docker Desktop macOS | [PR #2597](https://github.com/nanocoai/nanoclaw/pull/2597) |
| #2596 | IamAdamJowett | **Test alignment**: Updates formatter test for `<messages>` envelope removal (follow-up to #2556) | [PR #2596](https://github.com/nanocoai/nanoclaw/pull/2596) |
| #2595 | IamAdamJowett | **Transcript rotation fix**: Honors `CLAUDE_TRANSCRIPT_ROTATE_AGE_DAYS=0` to disable age-based rotation; previously defaulted to 14 days | [PR #2595](https://github.com/nanocoai/nanoclaw/pull/2595) |
| #2586 | IamAdamJowett | **Session transcript rotation**: Proactively rotates oversized/old transcripts before resume, preventing unbounded growth blocking SDK reads | [PR #2586](https://github.com/nanocoai/nanoclaw/pull/2586) |
| #2554 | dvirarad | **WhatsApp channel bug fixes**: Addresses multiple WhatsApp routing issues (paired with issues #2193, #2194) | [PR #2554](https://github.com/nanocoai/nanoclaw/pull/2554) |
| #2553 | IamAdamJowett | **WhatsApp formatting skill**: New container skill enforcing `@<phone-digits>` mention syntax for proper WhatsApp notifications | [PR #2553](https://github.com/nanocoai/nanoclaw/pull/2553) |
| #2548 | alexli-77 | **Health monitor hardening**: Guards Keychain read to prevent OAuth token rollback; fixes silent-fail task prompt | [PR #2548](https://github.com/nanocoai/nanoclaw/pull/2548) |
| #2562 | kky | **Approval card delivery**: Delivers cards to origin chat + verifies clicker authorization | [PR #2562](https://github.com/nanocoai/nanoclaw/pull/2562) |
| #2600 | sumsumai | **Carousel MCP tool**: Adds `send_carousel` MCP tool for rich message templates | [PR #2600](https://github.com/nanocoai/nanoclaw/pull/2600) |
| #2601 | sumsumai | **User skills as fragments**: Refactors user skills to use fragment composition pattern | [PR #2601](https://github.com/nanocoai/nanoclaw/pull/2601) |
| #2602 | sumsumai | **Channel approval null check**: Defensive null checking in channel approval flow | [PR #2602](https://github.com/nanocoai/nanoclaw/pull/2602) |
| #2599 | Fede-ops | **Event prefill date fix**: Corrects date prefill for new calendar events | [PR #2599](https://github.com/nanocoai/nanoclaw/pull/2599) |

**Key advancements**: WhatsApp channel reached production-grade reliability with persistent LID→JID mapping and correct `platform_id` handling. Agent-runner gained critical crash-resistance and transcript lifecycle management. The approval flow received security and UX hardening.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#2194 WhatsApp LID→phone JID mapping](https://github.com/nanocoai/nanoclaw/issues/2194) | 2 comments, 0 👍 | **Highest engagement issue** — reveals deep architectural tension in WhatsApp's privacy-preserving LID system versus NanoClaw's phone-JID-based routing. The in-memory cache design is fundamentally fragile for production deployments with restart cycles. Fix in #2554 addresses symptoms but long-term may need persistent store. |
| [#2193 Native WhatsApp platform_id prefix bug](https://github.com/nanocoai/nanoclaw/issues/2193) | 1 comment, 0 👍 | Documentation/code mismatch in `init-first-agent.ts` — CLI accepts `whatsapp:<jid>` but adapter emits bare JIDs. Indicates need for validation/normalization layer at storage boundary. |
| [#2346 Unknown slash commands as passthrough](https://github.com/nanocoai/nanoclaw/pull/2346) | *Open, no comments* | **Open PR of concern** — silent message dropping is severe UX failure; fix is straightforward but unmerged for 15 days suggests reviewer bandwidth constraint or disagreement on approach. |

**Underlying needs**: WhatsApp users need **first-class channel stability** with persistent identity mapping. There's latent demand for **clearer CLI onboarding** (`init-first-agent` behavior mismatch). The slash-command routing issue (#2346) suggests the formatter/ categorization system needs architectural review to prevent "silent drop" failure modes.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **🔴 Critical** | [#2597 inbound.db corruption infinite loop](https://github.com/nanocoai/nanoclaw/pull/2597) | **Fixed** (merged) | Production outage on macOS Docker Desktop; agent-runner spins for 25+ minutes. Corruption detection + fatal exit prevents indefinite degradation. |
| **🟡 High** | [#2603 skill/compact v1→v2 merge breakage](https://github.com/nanocoai/nanoclaw/issues/2603) | **Open, unassigned** | Auto-merge succeeds but build fails due to v1-only symbol imports. **Regression risk for v2 adopters** using `skill/compact` branch. No fix PR yet. |
| **🟡 High** | [#2194 LID mapping lost on restart](https://github.com/nanocoai/nanoclaw/issues/2194) | **Fixed** (merged via #2554) | Routing failures for LID-based WhatsApp senders post-restart. In-memory cache design is brittle. |
| **🟡 High** | [#2193 platform_id prefix mismatch](https://github.com/nanocoai/nanoclaw/issues/2193) | **Fixed** (merged via #2554) | Silent routing failure for new WhatsApp agents; documentation vs. implementation divergence. |
| **🟢 Medium** | [#2595 transcript rotation override ignored](https://github.com/nanocoai/nanoclaw/pull/2595) | **Fixed** | Configuration intent (`0` = disabled) not honored; 14-day default forced. |
| **🟢 Medium** | [#2548 Keychain token rollback](https://github.com/nanocoai/nanoclaw/pull/2548) | **Fixed** | Race condition between OAuth refresh and Keychain read could invalidate fresh tokens. |

**Stability assessment**: Strong day for reliability fixes. The open #2603 is the **only unaddressed build-breaking issue** and should be prioritized for v2 branch health.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Custom OpenAI-compatible endpoints per group** | [#1994](https://github.com/nanocoai/nanoclaw/pull/1994) — *Open since 2026-04-24* | **High** — Well-scoped, follows existing `container.json` pattern; enables LiteLLM/vLLM/self-hosted deployments. Blocker may be security review of endpoint validation. |
| **WhatsApp carousel/rich messaging** | [#2600](https://github.com/nanocoai/nanoclaw/pull/2600) — *Merged* | **Shipped** — MCP tool for carousel templates indicates Meta Business API integration deepening. |
| **User skills as composable fragments** | [#2601](https://github.com/nanocoai/nanoclaw/pull/2601) — *Merged* | **Shipped** — Suggests v3 architecture direction: skills as fragment-based modules, not monolithic files. |
| **Container WORKDIR alignment** | [#2236](https://github.com/nanocoai/nanoclaw/pull/2236) — *Open since 2026-05-03* | **Medium** — Simple fix, but 20 days open suggests low priority or testing complexity with existing deployments. |

**Predicted next release themes**: Custom LLM endpoint flexibility, WhatsApp Business API richness, skill system composability.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Impact |
|:---|:---|:---|
| WhatsApp routing failures (LID, platform_id prefix) | Recurring | **High** — breaks message delivery for privacy-conscious WhatsApp users; required 3 coordinated PRs |
| Silent failures (slash commands dropped, task prompts failing) | Sporadic | **High** — invisible to users, hard to debug; #2346 and #2548 both address this class |
| Transcript unbounded growth | Long-running deployments | **Medium** — blocks SDK reads, affects hub/parent sessions with image-heavy workflows |
| v1→v2 migration friction | Skill branch users | **Medium** — #2603 shows auto-merge tooling insufficient for cross-version compatibility |

### Satisfaction Indicators
- Rapid closure of WhatsApp issues (21-day turnaround for #2193/#2194)
- Proactive infrastructure investment: transcript rotation, health monitoring, CSPRNG security
- Rich messaging capabilities (carousel, formatting skills) show product maturation

### Dissatisfaction Indicators
- 15-20 day PR review latency for non-urgent fixes (#2346, #2236)
- Single open bug (#2603) with no comments or assignment after 24 hours

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2603 skill/compact build breakage](https://github.com/nanocoai/nanoclaw/issues/2603) | 1 day | **Regression in v2 branch** — blocks `skill/compact` adopters | Assign maintainer; likely needs merge-time check or branch-specific symbol mapping |
| [#2346 slash command passthrough fix](https://github.com/nanocoai/nanoclaw/pull/2346) | 15 days | Silent message dropping in production | Reviewer decision: merge or request changes; straightforward fix |
| [#2236 WORKDIR alignment](https://github.com/nanocoai/nanoclaw/pull/2236) | 20 days | Developer experience friction in container debugging | Merge or close with explanation; low risk, low priority |
| [#1994 custom OpenAI endpoints](https://github.com/nanocoai/nanoclaw/pull/1994) | 30 days | **Enterprise/self-hosted blocker** | Security review for endpoint validation; high community value |

**Maintainer attention**: The 30-day-old #1994 is the highest-value unmerged PR, enabling enterprise deployments. #2603 is the most urgent new item. Consider establishing SLA targets for PR review to reduce contributor friction.

---

*Digest generated from GitHub activity 2026-05-23 to 2026-05-24. All links: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-24

## 1. Today's Overview

NullClaw saw **zero issue activity** but **10 open pull requests updated in the last 24 hours**, all created on 2026-05-23 and still awaiting review or merge. This represents a significant submission burst from a small set of contributors—primarily **raskevichai** (4 PRs) and **vernonstinebaker** (3 PRs)—suggesting focused development sprints around Telegram channel reliability, memory system correctness, test hygiene, and a long-running security/engineering refactor. No releases were cut, and with all PRs remaining open, the project is in an accumulation phase rather than delivery mode. The lack of merged code indicates either maintainer bandwidth constraints or intentional batching for a larger release.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

**No PRs were merged or closed today.** All 10 PRs remain open. However, several PRs received updates (last updated: 2026-05-23), indicating active refinement. Key advancement areas include:

| Area | PRs | Status |
|------|-----|--------|
| Telegram channel reliability | [#928](https://github.com/nullclaw/nullclaw/pull/928), [#930](https://github.com/nullclaw/nullclaw/pull/930), [#924](https://github.com/nullclaw/nullclaw/pull/924) | Open, awaiting merge |
| Memory system correctness | [#929](https://github.com/nullclaw/nullclaw/pull/929) | Open |
| HTTP/curl security refactor | [#881](https://github.com/nullclaw/nullclaw/pull/881), [#891](https://github.com/nullclaw/nullclaw/pull/891), [#907](https://github.com/nullclaw/nullclaw/pull/907) | Open, long-running |
| Test infrastructure | [#925](https://github.com/nullclaw/nullclaw/pull/925), [#926](https://github.com/nullclaw/nullclaw/pull/926), [#927](https://github.com/nullclaw/nullclaw/pull/927) | Open |

The project is **preparing substantial improvements** but has not yet integrated them.

---

## 4. Community Hot Topics

With **zero comments and zero reactions** across all PRs, there is no measurable community engagement on today's submissions. However, the **most substantively significant** PRs by scope and reported impact are:

- **[#907 — Security harden webhooks, HTTP secrets, and cron shell jobs](https://github.com/nullclaw/nullclaw/pull/907)** by `racribeiro` (created 2026-05-10, updated 2026-05-23)
  - **Underlying need:** Elimination of credential-bearing `curl` subprocesses from production paths; mandatory explicit trust configuration for Telegram/Discord/LINE channels. This addresses a **security architecture debt** where operators could inadvertently expose secrets via HTTP headers or query parameters. The requirement for non-empty `allow_from` lists prevents "open by default" deployments—a common misconfiguration vector in bot frameworks.

- **[#881 — refactor(http): remove runtime curl subprocesses](https://github.com/nullclaw/nullclaw/pull/881)** by `ncode` (created 2026-05-01, updated 2026-05-23)
  - **Underlying need:** Migration from `curl` to native Zig `std.http` across all runtime paths (providers, channels, gateway, tools, memory, voice, SSE). This is foundational infrastructure work that unblocks [#907](https://github.com/nullclaw/nullclaw/pull/907) and eliminates a subprocess dependency that complicates sandboxing, error handling, and security auditing.

These two PRs appear **interdependent** and represent a coordinated security hardening initiative that has been in progress for ~3 weeks.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#928](https://github.com/nullclaw/nullclaw/pull/928) | **Silent failure:** Subagent results disappear in Telegram polling mode—users never receive `spawn`-tool outputs. Production impact confirmed by "several reporters." | **Fix PR open** |
| **High** | [#929](https://github.com/nullclaw/nullclaw/pull/929) | **Data loss:** `memory_list` cannot retrieve global memory entries (`session_id = NULL`), breaking cross-session memory patterns. `memory_store` succeeds but `memory_list` silently omits. | **Fix PR open** |
| **Medium** | [#924](https://github.com/nullclaw/nullclaw/pull/924) | **Config parsing:** Numeric Telegram user IDs in `allow_from` silently dropped at runtime despite valid JSON display. Breaks natural integer-based ID configuration. | **Fix PR open** |
| **Medium** | [#925](https://github.com/nullclaw/nullclaw/pull/925) | **macOS dev experience:** Workspace paths under `/private/var/folders` (standard macOS temp directory) incorrectly blocked by path security rules. | **Fix PR open** |
| **Low** | [#926](https://github.com/nullclaw/nullclaw/pull/926), [#927](https://github.com/nullclaw/nullclaw/pull/927) | Test flakiness: Non-deterministic `web_search` tests when API keys present in environment; noisy `compatible` provider error logs during `zig test`. | **Fix PRs open** |

**Critical pattern:** Three Telegram-specific bugs ([#928](https://github.com/nullclaw/nullclaw/pull/928), [#930](https://github.com/nullclaw/nullclaw/pull/930), [#924](https://github.com/nullclaw/nullclaw/pull/924)) suggest the channel implementation has **context-handling fragility** around message threading, numeric type coercion, and async result delivery.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, **implied roadmap directions** from open PRs:

| Signal | Likely Near-Term Priority |
|--------|--------------------------|
| Native HTTP stack completion ([#881](https://github.com/nullclaw/nullclaw/pull/881)) | **Blocking release** — enables security hardening and removes curl dependency |
| Telegram channel robustness ([#928](https://github.com/nullclaw/nullclaw/pull/928), [#930](https://github.com/nullclaw/nullclaw/pull/930), [#924](https://github.com/nullclaw/nullclaw/pull/924)) | **High** — production bots failing silently |
| Memory system session semantics ([#929](https://github.com/nullclaw/nullclaw/pull/929)) | **Medium** — foundational for agent context management |
| Security-by-default configuration ([#907](https://github.com/nullclaw/nullclaw/pull/907)) | **High** — likely required for v1.0 or production certification |

**Prediction:** The next release will likely batch the Telegram fixes ([#928](https://github.com/nullclaw/nullclaw/pull/928), [#930](https://github.com/nullclaw/nullclaw/pull/930), [#924](https://github.com/nullclaw/nullclaw/pull/924)) and memory fix ([#929](https://github.com/nullclaw/nullclaw/pull/929)) as a **stability patch**, while the HTTP refactor ([#881](https://github.com/nullclaw/nullclaw/pull/881)) and security hardening ([#907](https://github.com/nullclaw/nullclaw/pull/907)) may form a **breaking minor/major release** requiring migration notes.

---

## 7. User Feedback Summary

**Direct user pain points (from PR descriptions):**

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Silent production failures** | "Several reporters have hit this on production Telegram bots" ([#928](https://github.com/nullclaw/nullclaw/pull/928)) | Critical — no error visibility |
| **Configuration that looks correct but fails silently** | Numeric IDs valid in JSON but dropped at runtime ([#924](https://github.com/nullclaw/nullclaw/pull/924)) | High — trust erosion in config system |
| **Asymmetric memory operations** | Can store global memory but cannot retrieve it ([#929](https://github.com/nullclaw/nullclaw/pull/929)) | High — breaks expected data persistence |
| **Missing reply context in conversations** | Reply-to messages discarded except for `from` field ([#930](https://github.com/nullclaw/nullclaw/pull/930)) | Medium — degrades conversational coherence |

**Satisfaction indicator:** Contributors are actively diagnosing and fixing their own production issues—suggesting **committed user-operators** rather than casual adopters. However, the prevalence of "silently fails" patterns indicates **insufficient observability** in error paths.

---

## 8. Backlog Watch

| PR | Age | Risk | Needs Attention |
|----|-----|------|---------------|
| [#881](https://github.com/nullclaw/nullclaw/pull/881) | 23 days | **High** — blocks security work, wide blast radius | Review for merge; may need rebase as other HTTP PRs (#891, #907) accumulate |
| [#907](https://github.com/nullclaw/nullclaw/pull/907) | 14 days | **High** — security critical, depends on #881 | Maintainer security review; possible dependency on #881 merge |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | 19 days | **Medium** — provider health probe accuracy | Review; likely mergeable independently if #881 delayed |

**Recommendation:** The maintainer team should prioritize **sequencing clarity** for the HTTP refactor (#881) and security hardening (#907) pair. If #881 is stalled on review bandwidth, consider merging the independent Telegram fixes (#928, #929, #930, #924) and test fixes (#925, #926, #927) as a **patch release** to address active production issues while the architectural work continues.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-05-24.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-24

## 1. Today's Overview

IronClaw saw **exceptionally high development velocity** with 50 PRs updated in 24 hours (33 open, 17 merged/closed) and 15 active issues—all opened or updated within the past two days. The project is in an intense **"Reborn" integration sprint**, with core contributors zmanian, serrrfirat, and ilblackdragon driving security-hardening, hook framework productionization, and host runtime modularization. Zero releases were cut, indicating the team is accumulating changes for a significant milestone rather than shipping incrementally. The concentration of `[security-review-required]` and `[reborn]` tags suggests IronClaw is approaching a critical multi-tenant production readiness gate. All activity is contributor-driven (no external community PRs merged), pointing to a tightly controlled core development phase.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (17 total; key items highlighted)

| PR | Author | Summary | Significance |
|---|---|---|---|
| [#3950](https://github.com/nearai/ironclaw/pull/3950) | serrrfirat | Reborn setup marker skill parity | Skill activation lifecycle now has deterministic setup markers |
| [#3943](https://github.com/nearai/ironclaw/pull/3943) | zmanian | Dead/speculative public-API guardrails (workspace lints + pre-commit grep) | Maintainability tooling to prevent API surface creep |
| [#3935](https://github.com/nearai/ironclaw/pull/3935) | serrrfirat | Reborn skill management tools (`skill_list`, `skill_install`, `skill_remove`) | First-party skill management without `skill_search` dependency |
| [#3900](https://github.com/nearai/ironclaw/pull/3900) | serrrfirat | Docker sandbox command transport | Tenant sandbox execution now uses native Docker transport |

### Major Feature Advancement

**Hook Framework Production Activation** — The dominant theme across ~10 PRs is moving the hook framework from substrate to live:
- [#3938](https://github.com/nearai/ironclaw/pull/3938) activates hooks behind `HOOKS_ENABLED` (default OFF) — ships dark
- [#3931](https://github.com/nearai/ironclaw/pull/3931) closes three **critical security bugs** in event-triggered hooks (cross-tenant leakage, replay attacks, provider spoofing)
- [#3951](https://github.com/nearai/ironclaw/pull/3951) adds third-party extension hook activation behind `HOOKS_THIRD_PARTY_ENABLED`
- [#3933](https://github.com/nearai/ironclaw/pull/3933), [#3936](https://github.com/nearai/ironclaw/pull/3936), [#3937](https://github.com/nearai/ironclaw/pull/3937) complete the 4-PR durable predicate backend split (Postgres → libSQL → adversarial parity suite)

**Filesystem Security Hardening**:
- [#3952](https://github.com/nearai/ironclaw/pull/3952) TOCTOU-hardens `LocalFilesystem` via `openat2`/`O_NOFOLLOW` fd-relative traversal — described as "highest-leverage security item for multi-tenant prod"

---

## 4. Community Hot Topics

| Item | Type | Comments | Analysis |
|---|---|---|---|
| [#3889](https://github.com/nearai/ironclaw/issues/3889) | Issue | 1 | **Approval interaction service architecture** — serrrfirat splitting auth vs. approval concerns from #3094; signals growing complexity in permission workflows |
| *All other items* | — | 0 | No comment activity indicates either: (a) rapid async coordination outside GitHub, or (b) PR-driven development where design discussion happens in review |

**Underlying need**: The single commented issue (#3889) reveals a **systematic decomposition pattern** — the team is aggressively splitting monolithic issues into focused, trackable slices to prevent "parallel auth or interaction flow" recreation. This suggests lessons learned from earlier architecture debt.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR? |
|---|---|---|---|
| **CRITICAL (fixed)** | [#3931](https://github.com/nearai/ironclaw/pull/3931) | Cross-tenant leakage + replay + provider spoofing in event-triggered hooks | **Merged** (security fixes in #3931) |
| **HIGH** | [#3945](https://github.com/nearai/ironclaw/issues/3945) | `select_archive_for_arch()` and `download_binary_and_run_installer()` **broken on macOS/Linux since 0.26** (~1 month ago) | **NONE** — installer completely non-functional for Unix users |
| **HIGH** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failing since 2026-05-10 | **NONE** — 14 days without resolution; blocking signal |
| **MEDIUM** | [#3915](https://github.com/nearai/ironclaw/issues/3915) | Default-to-no-op guardrails silently bypassed (3 instances) | Partial — pattern identified, systemic fix needed |
| **MEDIUM** | [#3917](https://github.com/nearai/ironclaw/issues/3917) | `RuntimeCredentialTarget::PathPlaceholder` — credential injection into URL paths | Under debate (kill vs. harden) |
| **MEDIUM** | [#3916](https://github.com/nearai/ironclaw/issues/3916) | `LocalFilesystem` doesn't honor `CAS::Absent` + lacks durable writes | **NONE** — backend-level correctness gap |
| **MEDIUM** | [#3956](https://github.com/nearai/ironclaw/issues/3956) | `RESOLVE_NO_XDEV` bind-mount containment not implemented | Deferred from #3952 |

**Stability assessment**: The **installer regression (#3945)** is the most visible user-facing failure — a month-long breakage with no fix is severe for adoption. The persistent nightly E2E failure (#3447) suggests either flaky infrastructure or deeper instability being deprioritized against Reborn integration.

---

## 6. Feature Requests & Roadmap Signals

| Item | Requester | Signal Strength | Likely Version |
|---|---|---|---|
| [#3953](https://github.com/nearai/ironclaw/issues/3953) — OpenAPI/AsyncAPI canonical contracts | Leamsi9 | **HIGH** | Post-Reborn stabilization |
| [#3954](https://github.com/nearai/ironclaw/issues/3954) — Rename `CLAUDE.md` to semantic naming | Leamsi9 | **MEDIUM** | Near-term (cosmetic, low risk) |
| [#3955](https://github.com/nearai/ironclaw/pull/3955) — Manifest v2 progressive capability disclosure | serrrfirat | **IN PROGRESS** | Reborn launch |
| [#3899](https://github.com/nearai/ironclaw/pull/3899) — Reborn budgets end-to-end | ilblackdragon | **IN PROGRESS** | Reborn launch |

**Prediction**: The contract-first API request (#3953) aligns with Leamsi9's other contribution patterns and addresses a genuine ecosystem need for IronClaw integrations. Most likely to follow the Reborn milestone once the internal architecture stabilizes.

---

## 7. User Feedback Summary

### Explicit Pain Points
- **Installer completely broken for macOS/Linux users** (#3945) — "since 0.26, a month ago"; no workaround stated
- **Naming confusion**: `CLAUDE.md` convention is "confusing to parse" for non-Claude contributors (#3954)

### Implicit Signals
- **No external PRs or community comments** on any issue/PR suggests either: (a) project pre-1.0 with narrow early adopter base, or (b) development happening in private/Discord channels with GitHub as broadcast-only
- **All `[security-review-required]` items authored by core team**, not external researchers — indicates proactive security posture rather than reactive vulnerability response

### Satisfaction/Dissatisfaction
- **Positive**: Rapid security iteration, clear architecture decomposition, "fail-closed" security fixes
- **Negative**: Installer neglect, E2E reliability, documentation naming debt

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failed | **14 days** | HIGH | Root cause analysis; may indicate flaky test or real regression |
| [#3945](https://github.com/nearai/ironclaw/issues/3945) Installer broken macOS/Linux | **1+ month** | **CRITICAL** | Immediate fix or hotfix release; blocks Unix adoption |
| [#3916](https://github.com/nearai/ironclaw/issues/3916) LocalFilesystem CAS/durability | New | MEDIUM | Backend refactor; affects all checkpoint stores |
| [#3915](https://github.com/nearai/ironclaw/issues/3915) Default-to-no-op guardrail pattern | New | MEDIUM | Systemic refactoring across 3+ integration points |

**Maintainer attention priority**: The **installer regression (#3945)** stands out as a user-facing failure with no owner assigned and no fix PR linked, despite being known for a full month. The nightly E2E failure (#3447) running for two weeks without resolution suggests either resource starvation or deliberate deprioritization that should be explicitly communicated.

---

*Digest generated from nearai/ironclaw GitHub activity for 2026-05-24. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-24

## 1. Today's Overview

LobsterAI shows **minimal but focused activity** on 2026-05-24 with 3 new issues and 2 stale PRs receiving updates, though no actual merges or releases. All activity originates from a single contributor (`woxinsj`) raising architectural concerns, suggesting the project is in a **critical introspection phase** rather than active feature development. The absence of closed issues or merged PRs indicates **stagnant velocity**—open items are accumulating without resolution. Notably, both updated PRs (#1529, #1530) remain open since early April with "stale" labels, pointing to **reviewer bandwidth constraints**. Overall project health appears **fragile**: thoughtful community analysis exists, but engineering throughput to address it does not.

---

## 2. Releases

**No new releases.** The project has not published any versioned release as of this digest.

---

## 3. Project Progress

**No merged or closed PRs today.** Both updated pull requests remain open:

| PR | Status | Age | Blocker |
|---|---|---|---|
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) feat(cowork): batch export to JSON | Open, stale | ~7 weeks | Awaiting review/merge |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) feat(scheduledTask): multi-Agent task assignment | Open, stale | ~7 weeks | Awaiting review/merge |

**Assessment:** Zero forward progress on features. Both PRs represent legitimate UX improvements (data portability, multi-Agent clarity) but lack maintainer engagement.

---

## 4. Community Hot Topics

All three issues were opened by `woxinsj` on 2026-05-23 with zero comments or reactions—indicating **limited community engagement** despite substantive content.

| Issue | Link | Core Theme |
|---|---|---|
| #2041: "最大的瓶颈不是进化算法，而是记忆系统" | [Issue #2041](https://github.com/netease-youdao/LobsterAI/issues/2041) | Architectural gap analysis: ideal memory systems vs. LobsterAI's `skill-self-evolver` implementation |
| #2040: "OpenClaw 的五大薄弱点" | [Issue #2040](https://github.com/netease-youdao/LobsterAI/issues/2040) | Competitive/security audit of OpenClaw (upstream dependency) |
| #2039: Dreaming toggle bug upstream from OpenClaw | [Issue #2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | Configuration persistence failure requiring schema fix |

**Underlying needs:** The contributor is performing **unofficial project stewardship**—auditing dependencies, documenting architectural debt, and flagging integration bugs. This signals either (a) absent maintainers or (b) a contributor preparing for a larger refactoring proposal. The comparative analysis framework (tables, severity ratings) suggests enterprise/serious production use.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | Dreaming toggle (`/dreaming on`) writes config to path unrecognized by `memory-core`; **lost on Gateway restart** | Workaround script (`check_dreaming_schema.py`) exists; **root fix requires upstream OpenClaw schema change** |
| 🔴 **Critical** (dependency) | [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040) | OpenClaw: **1,467 malicious skills** out of 5,700; 138 vulnerabilities in 63 days | No LobsterAI-side fix; dependency risk |
| 🟡 **Medium-High** (dependency) | [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040) | OpenClaw: zero cross-task memory accumulation | Architectural limitation, not crash bug |

**Key concern:** LobsterAI's tight coupling to OpenClaw creates **cascading stability and security exposure**. The Dreaming bug is a concrete regression with data loss characteristics (config not persisted). No PRs address these issues.

---

## 6. Feature Requests & Roadmap Signals

**Implicit from issues rather than explicit requests:**

| Signal | Source | Likelihood in Next Version |
|---|---|---|
| **Memory system overhaul** — trajectory/declarative/structured memory tiers | #2041 | Medium-High if maintainers engage; currently blocked by architectural review |
| **OpenClaw fork/abstraction layer** — to address security, cost, deployment issues | #2040 | Low without maintainer commitment; massive scope |
| **Robust configuration persistence** — schema-level `dreaming` property support | #2039 | High — small, well-scoped, critical path |
| **Batch data export** (JSON) | #1529 | High — PR already exists, needs merge |
| **Multi-Agent task visibility** | #1530 | High — PR exists, clear UX improvement |

**Prediction:** If any release occurs, it will likely include #1529/#1530 (low-risk UX) and possibly #2039's schema fix. The memory architecture (#2041) and OpenClaw decoupling (#2040) require roadmap-level decisions absent from current activity.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|---|---|---|
| **Configuration fragility** | Dreaming toggle silently fails, requires manual script re-run | Power users, self-hosters |
| **Opaque multi-Agent behavior** | Scheduled tasks implicitly bind to "main Agent"; users cannot perceive or control assignment | Multi-Agent deployers |
| **Data lock-in / portability anxiety** | No batch export existed until #1529 | Enterprise, compliance-conscious users |
| **Dependency trust collapse** | OpenClaw's 25%+ malicious skill rate, uncontrolled token costs | Security-conscious, cost-sensitive operators |
| **Architectural ceiling** | Current memory system inadequate for "long-cycle cross-scenario" agent evolution | Researchers, advanced automation users |

**Satisfaction:** Contributors demonstrate **deep investment** (comparative analysis, security auditing).  
**Dissatisfaction:** **Execution gap** — identified problems lack responsive fixes; workarounds proliferate.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) Batch JSON export | ~7 weeks, stale | Low-risk feature atrophying; contributor may abandon | Maintainer review, merge, or explicit feedback |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) Multi-Agent task selector | ~7 weeks, stale | UX confusion persists; PR solves documented problem | Same as above |
| OpenClaw dependency strategy | N/A (ongoing) | **Existential** — security, cost, deployment blockers all upstream | Maintainer decision: fork, pin, replace, or negotiate upstream |

**Critical gap:** No maintainer response visible to `woxinsj`'s trilogy of issues (#2039-#2041). This contributor is effectively performing **free technical program management** without engagement. If unaddressed, this represents **community capital erosion** — the most informed external voice may disengage.

---

*Digest generated from GitHub activity 2026-05-23 to 2026-05-24. All links: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-24

## 1. Today's Overview

Moltis saw **moderate-to-high activity** on 2026-05-23 with **8 issues updated** (5 open, 3 closed) and **4 pull requests** (1 open, 3 merged). The project demonstrates **responsive maintenance** — all three closed issues received same-day fixes from core contributor `penso`. However, the **absence of any releases** and a growing backlog of unaddressed enhancement requests suggest development is currently fix-driven rather than feature-shipping. The single open PR (#1049) represents a significant architectural shift, indicating the project is at an inflection point for its agent model.

---

## 2. Releases

**No new releases** (latest: none published).

---

## 3. Project Progress

Three PRs merged/closed on 2026-05-23, all with same-day turnaround from issue report to fix:

| PR | Fix | Author | Link |
|---|---|---|---|
| **#1048** | `[hooks]` config section now properly registered at runtime — resolves parsing/validation gap where hooks were configured but never executed | [penso](https://github.com/penso) | [moltis-org/moltis#1048](https://github.com/moltis-org/moltis/pull/1048) |
| **#1050** | Vault initialization for existing password setups — fixes false "password unset" state blocking encryption setup | [penso](https://github.com/penso) | [moltis-org/moltis#1050](https://github.com/moltis-org/moltis/pull/1050) |
| **#1047** | Restored Shiki syntax highlighting in light mode — transparent backgrounds preserved, Playwright regression test added | [penso](https://github.com/penso) | [moltis-org/moltis#1047](https://github.com/moltis-org/moltis/pull/1047) |

**Notable pattern**: All fixes include regression tests, indicating maturing QA practices. The hooks fix (#1048) is particularly significant as it resolves a **silent failure** — configuration was accepted but non-functional.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| **[#1049] feat: agents as capability boundaries** | Open PR, high architectural significance | [moltis-org/moltis#1049](https://github.com/moltis-org/moltis/pull/1049) |
| **[#553] Per-agent sloopback and timeout settings** | Oldest open issue (created 2026-04-04), only enhancement request with any comment activity | [moltis-org/moltis#553](https://github.com/moltis-org/moltis/issues/553) |

**Underlying need**: The open PR #1049 directly addresses #553's domain (per-agent configuration), suggesting the maintainers are **consolidating agent-level controls into a unified architecture** rather than implementing one-off settings. Community demand centers on **multi-tenancy and isolation** — different users/contexts (e.g., "kids vs parents") needing constrained agent capabilities. The lack of comments on most issues suggests either low community engagement or issues being clear enough to not need discussion.

---

## 5. Bugs & Stability

| Severity | Issue | Reporter | Fix PR | Link |
|---|---|---|---|---|
| **🔴 High** | **#1054**: Env vars from stdio MCP server config exposed to LLM via `mcp_list` — **security vulnerability**: secrets leak to model context | [IlyaBizyaev](https://github.com/IlyaBizyaev) | **None yet** | [moltis-org/moltis#1054](https://github.com/moltis-org/moltis/issues/1054) |
| **🟡 Medium** | **#1053**: Automatic session title generation broken — UX degradation, manual management burden | [IlyaBizyaev](https://github.com/IlyaBizyaev) | **None yet** | [moltis-org/moltis#1053](https://github.com/moltis-org/moltis/issues/1053) |
| **🟡 Medium** | **#1052**: Model picker UI doesn't fit model versions — usability, likely affects long version strings (e.g., `gpt-4-turbo-2024-04-09`) | [IlyaBizyaev](https://github.com/IlyaBizyaev) | **None yet** | [moltis-org/moltis#1052](https://github.com/moltis-org/moltis/issues/1052) |
| **🟡 Medium** | **#1051**: OpenAI-compatible `baseUrl` not validated, failed URL not logged — debugging friction, potential misconfiguration | [sayotte](https://github.com/sayotte) | **None yet** | [moltis-org/moltis#1051](https://github.com/moltis-org/moltis/issues/1051) |

**Critical concern**: **#1054 is unpatched** and represents a **secrets exposure vulnerability**. The fact that `mcp_list` surfaces environment variables to the LLM suggests inadequate sandboxing between configuration and model context. This should be prioritized for a hotfix release.

---

## 6. Feature Requests & Roadmap Signals

| Request | Status | Prediction |
|---|---|---|
| **Per-agent sloopback/timeout (#553)** | Open since April | **Likely superseded by #1049** — will be resolved as part of agent capability boundary refactor |
| **Agent-level capability boundaries (#1049)** | In PR review | **High probability in next release** — core architectural change with clear design doc |

**Roadmap signal**: The project is pivoting from "global configuration" to "agent-scoped configuration" as the primary abstraction. This aligns with broader AI assistant trends (OpenAI's GPTs, Anthropic's projects) and suggests Moltis is positioning for **multi-user/multi-context deployments**.

---

## 7. User Feedback Summary

**Pain points (from issue patterns)**:

| Theme | Evidence | Severity |
|---|---|---|
| **Security/secret handling** | #1054 (env var exposure), #1046 (vault password confusion) | High — two vault-related issues in 2 days suggests encryption UX is fragile |
| **Visual polish** | #1045 (light mode highlighting), #1052 (model picker overflow) | Medium — indicates theming system has edge cases |
| **Configuration validation gaps** | #1051 (unvalidated URLs), #1024 (unregistered hooks) | Medium — "config accepted but doesn't work" is recurring anti-pattern |
| **Session management** | #1053 (auto-titles broken) | Low — convenience feature |

**Satisfaction indicator**: Rapid fix turnaround (same-day for #1045, #1046, #1024) suggests healthy maintainer responsiveness. However, **IlyaBizyaev filed 4 of 5 open bugs** — either a power user stress-testing edge cases, or a concentration of friction points for active users.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| **[#553] Per-agent sloopback/timeout** | 49 days | **Decision needed** — clarify if #1049 supersedes or if independent timing controls still needed | Maintainer comment on relationship to #1049 |
| **#1054 (env var exposure)** | 1 day | **Security hotfix required** | Immediate patch + advisory; consider emergency release |
| **#1049 (agents as boundaries)** | 1 day | **Review bandwidth** — large architectural PR needs thorough review | Assign reviewers, establish merge criteria |

**Maintainer attention**: The project would benefit from a **security response process** for #1054 and a **public roadmap clarification** on whether #553-era requests are being absorbed into the #1049 architecture or remain independent backlog items.

---

*Digest generated from GitHub activity 2026-05-23. Moltis repository: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-24

## 1. Today's Overview

CoPaw (QwenPaw) shows **elevated community activity** with 11 issues updated in the past 24 hours and 2 new pull requests from first-time contributors, though no releases were cut. The project is experiencing a **bug-reporting surge** with 5 new issues filed on 2026-05-23 alone, concentrated in MCP (Model Context Protocol) OAuth compliance, schema sanitization, and console UI reliability. Memory management remains a concern following the resolution of a critical memory exhaustion bug (#4265). The maintainer response rate appears moderate with one issue closed, but 10 active issues remain open with minimal community engagement (zero upvotes across all items). Two promising plugin/extensions PRs are awaiting review, suggesting healthy external contribution interest.

---

## 2. Releases

**No new releases** — Version 1.1.8.post1 remains current.

---

## 3. Project Progress

| Item | Status | Details |
|------|--------|---------|
| [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | **CLOSED** | Critical memory exhaustion bug resolved: AI reading conversation logs triggered infinite loop compression, causing system lockup requiring SSH recovery. Fixed after 5 comments of community debugging. |

**No PRs merged today.** Both open PRs (#4630, #4622) remain under review from first-time contributors.

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|:---:|------|:--------:|----------|
| 1 | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) — Memory exhaustion on log reading | 5 | **Resolved crisis** revealing architectural vulnerability: recursive self-monitoring without circuit breakers. Community collaboratively diagnosed the compression loop. |
| 2 | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) — Console UI tool calls not displaying | 3 | **Silent failure pattern**: WebSocket/real-time sync issues with no error logging. Suggests observability gaps in frontend-backend event pipeline. |
| 3 | [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) — Mobile-friendly client | 2 | **Platform expansion demand**: DingTalk/Feishu/QQ channels exist but full console mobile access lacking. Indicates user desire for unified management interface beyond chat bots. |

**Underlying needs identified:**
- **Reliability engineering**: Silent failures (#4644) and resource exhaustion (#4265) point to missing guardrails
- **Multi-platform parity**: Mobile gap (#4635) and remote daemon support (#4645) show users want server-client architecture flexibility
- **Observability**: Token metrics (#4647) and real-time visibility into tool execution are becoming standard expectations

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:--------:|-------|-------------|:-------:|
| 🔴 **High** | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Console UI: tool calls silently fail to display without page refresh; zero logging for debugging | ❌ No |
| 🔴 **High** | [#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643) | MCP OAuth missing `client_secret` in token exchange — **breaks confidential OAuth 2.0 clients** | ❌ No |
| 🟡 **Medium** | [#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646) | MCP schema sanitizer corrupts boolean JSON Schema keywords into invalid objects | ❌ No |
| 🟡 **Medium** | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | `env set` variables invisible to subprocesses; no runtime retrieval mechanism | ❌ No |
| 🟢 **Low** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | ~~Memory exhaustion on log reading~~ **FIXED** | ✅ #4265 closed |

**Critical pattern**: Two MCP-related bugs (#4643, #4646) from same reporter (`bernt-vibe`) suggest **MCP integration is immature** and may block production adoption for enterprise OAuth providers.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Predicted Priority | Rationale |
|-------|---------|:------------------:|-----------|
| [#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647) | Token speed/usage display per reply | **High** | Low-cost, high-visibility; standard in Claude/Cursor; cost-conscious user demand |
| [#4645](https://github.com/agentscope-ai/QwenPaw/issues/4645) | Remote daemon support for QwenPaw Pet | **Medium-High** | Enables server-client architecture; aligns with #4635 mobile needs |
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) | Mobile-friendly console | **Medium** | Large effort; workarounds exist via chat channels |
| [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642) | Non-intrusive plugin extension system | **Medium** | Strategic differentiation vs. OpenClaw; requires architecture redesign |
| [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) / [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) | Auto-summarization on session end | **Medium** | Memory system underutilization; duplicate issues suggest demand |

**Likely next version inclusions**: Token metrics (#4647) as quick win; MCP bug fixes (#4643, #4646) as stability requirement.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Impact |
|-------|-----------|--------|
| [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642) | *"Many [extensions] require intrusive source code modification"* | **Extensibility friction** — power users comparing unfavorably to OpenClaw |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | Environment variables don't propagate to subprocesses | **Workflow breakage** — scripting and automation unreliable |
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Tool calls invisible without manual refresh | **Trust erosion** — users can't verify AI actions in real-time |

### Use Cases Emerging
- **Remote/server deployment** (#4645): Power users want persistent daemon + lightweight client
- **BI/data analysis** (PR #4622): DataPaw plugin with 12 skills indicates enterprise analytics demand
- **Memory as competitive advantage** (#4640/#4639): Users want automatic knowledge capture vs. manual "did you remember?"

### Satisfaction Signals
- Chat channel diversity (DingTalk, Feishu, QQ) appreciated as pragmatic mobile workaround
- Memory system *tools* considered "complete" — just lacking automatic *input* triggers

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|:---:|------|---------------|
| [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) | 2 days | **Contributor attrition** (first-time) | Maintainer review for MCP marketplace + health check features |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | 2 days | **Contributor attrition** (first-time) | Review DataPaw plugin (12 BI skills) — high community value |
| [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) / [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640) | 1 day | **Duplicate management** | Deduplicate; RFC design for hook system |
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) | 2 days | **Platform gap persistence** | Needs triage: full responsive redesign vs. mobile app vs. PWA |

**Immediate attention recommended**: Two first-time contributor PRs (#4630, #4622) risk stalling if unreviewed; rapid response would signal healthy contribution culture.

---

*Digest generated from agentscope-ai/QwenPaw repository data. All links: https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-24

## 1. Today's Overview

ZeptoClaw showed **moderate maintenance activity** over the past 24 hours with 17 PR updates and 3 issue updates, though no new releases. The project is in a **stabilization phase**: a major security-related dependency PR (#594) is currently open and blocking CI, while 14 PRs were merged/closed—predominantly Dependabot dependency bumps that had accumulated since early May. The core development focus remains on the agent middleware pipeline refactor (#399), with Phase 2b now formally scoped as issue #593 after the previous attempt (#583) was abandoned as incomplete. No community engagement (comments, reactions) was observed on any item, indicating either low external contributor involvement or effective maintainer self-management.

---

## 2. Releases

**No new releases** in the past 24 hours. The project remains without a recent tagged version.

---

## 3. Project Progress

### Merged/Closed PRs (14 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#583](https://github.com/qhkm/zeptoclaw/pull/583) | **CLOSED** — Agent pipeline wiring (Phase 2 of #399) | **Intentionally abandoned**; landed scaffolding (`LegacyTerminal` stub, `build_pipeline` helpers) but failed to actually cut `process_message` over to the new middleware Pipeline. Maintainer closed this to restart with cleaner Phase 2b approach. |
| [#591](https://github.com/qhkm/zeptoclaw/pull/591) | Bump `taiki-e/install-action` 2.75.17 → 2.77.3 | CI infrastructure maintenance |
| [#573](https://github.com/qhkm/zeptoclaw/pull/573) | Bump `tokio` 1.51.1 → 1.52.1 | Core async runtime patch update |
| [#581](https://github.com/qhkm/zeptoclaw/pull/581) | Bump `rustyline` 17.0.2 → 18.0.0 | REPL/CLI library major version (breaking changes expected) |
| [#575](https://github.com/qhkm/zeptoclaw/pull/575) | Bump `axum` 0.8.8 → 0.8.9 | Web framework patch |
| [#577](https://github.com/qhkm/zeptoclaw/pull/577) | Bump `libc` 0.2.185 → 0.2.186 | System bindings patch |
| [#579](https://github.com/qhkm/zeptoclaw/pull/579) | Bump `rustls` 0.23.37 → 0.23.39 | TLS library patch (security-relevant) |
| [#576](https://github.com/qhkm/zeptoclaw/pull/576) | Bump `astro` 6.1.6 → 6.1.9 in `/landing/r8r/docs` | Documentation site framework |
| [#580](https://github.com/qhkm/zeptoclaw/pull/580) | Bump `@astrojs/starlight` 0.38.3 → 0.38.4 in `/landing/zeptoclaw/docs` | Documentation site theme |
| [#582](https://github.com/qhkm/zeptoclaw/pull/582) | Bump `globals` 17.3.0 → 17.5.0 in `/panel` | Dev dependency for panel frontend |
| [#585](https://github.com/qhkm/zeptoclaw/pull/585) | Bump `debian` base image digest (`trixie-slim`) | Docker base image security update |
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | **feat(tools): trigger-phrase nudges in `longterm_memory` description** | **Feature landed** — Implements Hermes Agent-style self-improving loop guidance; adds doc-test guard for trigger phrases |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | **docs: align positioning claims** | **Docs landed** — Closes #565; softens unsupported competitor comparisons, updates metadata |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) | **docs: refresh positioning, channel/provider counts, test status** | **Docs landed** — Updates AGENTS.md with accurate LOC (~154k), clarifies MQTT feature status, removes stale test blockers |

**Key Advancement**: The `longterm_memory` tool now includes explicit trigger-phrase guidance (#571), adopting a pattern from Hermes Agent to nudge the LLM toward self-improving knowledge persistence behavior. This is positioned as "Phase 1.5" of a broader research direction.

---

## 4. Community Hot Topics

**No items with comments or reactions** were observed in the dataset. All issues and PRs show 0 comments and 0 👍 reactions. This indicates:

- **Low external community engagement**: The project appears to be primarily maintainer-driven (`qhkm` authored all non-Dependabot items)
- **Effective self-management**: The maintainer is actively closing stale/abandoned work (#583) and scoping replacements (#593)

### Most Structurally Significant Items (by project impact):

| Item | Link | Underlying Need |
|:---|:---|:---|
| #593 — Phase 2b pipeline refactor (OPEN) | [Issue #593](https://github.com/qhkm/zeptoclaw/issues/593) | **Technical debt reduction**: The agent's core `process_message` loop still runs on legacy code despite middleware framework (#564) being ready. Need: cleaner architecture for extensible agent behavior |
| #594 — RUSTSEC advisory clearance (OPEN) | [PR #594](https://github.com/qhkm/zeptoclaw/pull/594) | **Supply chain security**: Zero-tolerance `deny.toml` policy creates hard CI failures on new advisories. Need: automated or rapid-response dependency patching workflow |

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical (CI-blocking)** | [#594](https://github.com/qhkm/zeptoclaw/pull/594) | Six new RUSTSEC advisories (affecting `lettre` 0.11.22, `diesel` 2.3.8) broke all CI jobs due to zero-tolerance `deny.toml` config | **Fix PR open** — #594 bumps affected crates; needs review/merge |
| **🟡 Moderate (architecture risk)** | [#583](https://github.com/qhkm/zeptoclaw/pull/583) (closed) | Incomplete pipeline migration left dead code (`LegacyTerminal` stub, unused helpers) in tree | **Mitigated** — Explicitly abandoned; #593 tracks proper restart |
| **🟢 Low** | Multiple Dependabot bumps | Accumulated dependency drift across Rust, JS, Docker, GitHub Actions ecosystems | **Resolved** — Bulk-closed today |

**Assessment**: The project's strict security posture (`ignore = []` in `deny.toml`) creates a **single point of fragility** where advisory DB updates can instantly block all development. Consider whether a staged response (e.g., temporary exceptions with ticketed remediation) would improve resilience.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Work

| Item | Signal | Likely Next Version Inclusion |
|:---|:---|:---|
| **Agent middleware pipeline (Phase 2b)** | #593 opened as direct replacement for failed #583 | **High** — Core architecture priority; Phase 1 (#564) already landed 11 middleware implementations |
| **Hermes Agent self-improving loop** | #571 landed Phase 1.5 (trigger phrases); #569 closed tracking issue | **Medium** — Research direction; may expand to full loop implementation |
| **Documentation site modernization** | Astro/Starlight bumps in both `/landing/` paths | **Low (infrastructure)** — Ongoing maintenance, not user-facing feature |

### Predicted Near-Term Roadmap

1. **Immediate**: Merge #594 to restore CI greenness
2. **Short-term**: Complete Phase 2b pipeline cutover (#593) — likely requires new PR within 1-2 weeks
3. **Medium-term**: Phase 3+ of #399 likely involves actual middleware replacement of legacy terminal handling; possible removal of `LegacyTerminal` stub

---

## 7. User Feedback Summary

**No direct user feedback** (comments, issues filed by external users, reaction data) was present in this dataset. Inferred signals:

| Source | Pain Point / Satisfaction | Confidence |
|:---|:---|:---|
| #565 / #570 / #566 docs PRs | **Dissatisfaction with positioning accuracy** — maintainer proactively corrected comparison claims against competitors (Aisar, ZeptoStack, NemoClaw) that "are not backed by public sources" | High (explicit in issue text) |
| #569 / #571 | **Interest in agent self-improvement** — adopting Hermes Agent's behavioral nudge pattern suggests competitive analysis of peer projects | Medium |
| Absence of external PRs/issues | **Low community penetration or high bar to contribution** — 100% of non-Dependabot authorship is `qhkm` | High |

**Positioning insight**: The project explicitly markets as "fast, small, secure, local-first personal AI assistant infrastructure" — the docs refresh suggests this positioning is being actively refined for clarity and defensibility.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#578](https://github.com/qhkm/zeptoclaw/pull/578) — Astro 6.1.6 → 6.3.1 in `/landing/zeptoclaw/docs` | 18 days open | **Staleness** — Superseded by intermediate versions?; docs site drift | Merge or close; check if 6.3.1 still current |
| [#572](https://github.com/qhkm/zeptoclaw/pull/572) — `@astrojs/starlight` 0.38.3 → 0.39.2 in `/landing/r8r/docs` | 18 days open | **Staleness** — Different landing path than #580 (which was merged at 0.38.4) | Investigate why this path is treated differently; may be intentional separation |
| [#593](https://github.com/qhkm/zeptoclaw/issues/593) — Phase 2b RFC | 1 day open | **Architecture risk** — Second attempt at same refactor; failure pattern from #583 | Needs rapid scoping and PR assignment to maintain momentum on #399 |

**Maintainer attention priority**: #594 (CI unblock) → #593 (architecture continuity) → stale Dependabot PRs evaluation (#578, #572).

---

*Digest generated from GitHub activity 2026-05-23 to 2026-05-24. All links reference `https://github.com/qhkm/zeptoclaw`.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-24

---

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though **merge throughput remains a bottleneck** with only 13 PRs merged/closed versus 37 still open. The project is in active pre-1.0 stabilization: no new releases were cut today, and significant architectural debt is being addressed alongside user-facing features. The community is particularly focused on **channel allowlist standardization** (a 16-channel migration effort), **TUI/chat interface improvements**, and **runtime configuration correctness**. Maintainer attention appears stretched across many blocked items needing review or author action.

---

## 2. Releases

**No new releases** (v0.8.0-beta-1 remains current).

---

## 3. Project Progress

### Merged/Closed PRs (13 total, notable items):

| PR | Description | Significance |
|:---|:---|:---|
| [#6843](https://github.com/zeroclaw-labs/zeroclaw/pull/6843) | Expose `message_id` in agent channel context | Small but important observability fix for channel debugging |
| [#6692](https://github.com/zeroclaw-labs/zeroclaw/pull/6692) | Fix stale `RUST_LOG` targets in docs | Documentation accuracy; closes [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) |
| [#6868](https://github.com/zeroclaw-labs/zeroclaw/pull/6868) | Stabilize gettext catalog diffs for docs sync | Developer experience; addresses broad `.po` churn problem |

### Active Development (Open PRs advancing):

| PR | Description | Status |
|:---|:---|:---|
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | **Integration: ZeroClaw TUI** — Major Ratatui-based terminal interface | In progress; foundational for [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) |
| [#6882](https://github.com/zeroclaw-labs/zeroclaw/pull/6882) | Fix: sanitize compressor media markers before truncation | High-risk runtime fix; prevents marker splitting |
| [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) | Add NEAR AI Cloud provider | New provider expansion |
| [#6840](https://github.com/zeroclaw-labs/zeroclaw/pull/6840) | Signal outbound emoji reactions via `sendReaction` | Feature completion for Signal channel |
| [#6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) | Add WeCom AI Bot WebSocket channel | XL-sized enterprise channel addition |

### Channel Allowlist Migration (ICSE 2027 M1 Evaluation):
A **systematic 16-channel refactoring** is underway by `yijunyu` to replace hand-rolled allowlist predicates with `aspect_std::AllowlistAspect`. PRs [#6792](https://github.com/zeroclaw-labs/zeroclaw/pull/6792), [#6794](https://github.com/zeroclaw-labs/zeroclaw/pull/6794), [#6795](https://github.com/zeroclaw-labs/zeroclaw/pull/6795), [#6796](https://github.com/zeroclaw-labs/zeroclaw/pull/6796), [#6797](https://github.com/zeroclaw-labs/zeroclaw/pull/6797), [#6798](https://github.com/zeroclaw-labs/zeroclaw/pull/6798), [#6799](https://github.com/zeroclaw-labs/zeroclaw/pull/6799), [#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6800) cover Lark, Mochat, Wati, LinQ, WhatsApp, Discord-history, Signal, and iMessage. **All marked `needs-author-action`** — may indicate review backlog or test failures.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | 5 | `show_tool_calls` missing from channel schema v3 | **Transparency/debuggability**: Users need visibility into agent tool execution for trust and debugging |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | 4 | Gateway silent-fallback hardening (follow-up to #6099) | **Security posture**: Fail-closed credential resolution; silent failures are attack surface |
| [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) | 3 | Add ZeroClaw logo to Agent Skills client list | **Ecosystem legitimacy**: Marketing/standards participation for adoption |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 3 | Channels supervisor crashloops with all `enabled=false` | **Operational robustness**: Graceful degradation vs. infinite restart loops |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | 3 | Qwen provider 405 Method Not Allowed | **Provider compatibility**: Broader model support (blocking users on Alibaba Cloud) |
| [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | 3 | Cannot use llama-server services | **Local/self-hosted inference**: llama.cpp integration is broken for privacy-conscious users |

**Analysis**: The top issues reveal a tension between **enterprise features** (auditability, security hardening) and **individual developer needs** (local inference, easy setup). The schema v3 migration is causing friction — multiple bugs trace to configuration field moves or omissions.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **S0 — Data loss / security risk** | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | Qwen provider: `405 Method Not Allowed` on `coding.dashscope.aliyuncs.com` | Blocked, needs-author-action |
| **S0** | [#6063](https://github.com/zeroclaw-labs/zeroclaw/issues/6063) | Web search for "openclaw" returns no results | Blocked, needs-author-action |
| **S1 — Workflow blocked** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | llama-server integration broken | Blocked, needs-repro |
| **S1** | [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | Gateway SPA fallback serves `index.html` for `/api/*` routes, breaking dashboard JSON.parse | Accepted, no PR yet |
| **S1** | [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881) | Email channel: blank SMTP credential overrides not ignored | New today, accepted |
| **S2 — Degraded behavior** | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | `show_tool_calls` missing from channel schema v3 | Accepted |
| **S2** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channels supervisor crashloops | Blocked, needs-author-action |
| **S2** | [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | `runtime_profiles.*.max_tool_iterations` has no effect | New today, unassigned |
| **S2** | [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | Manual `cron_run` persists delivery failures as `ok` | Accepted |
| **S2** | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context overflow causes hallucination/topic drift | Blocked, needs-author-action |

**Regressions from v0.8.0-beta-1**: [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) (gateway SPA fallback) and [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) (config field ignored) are fresh beta regressions. **Fix PR [#6882](https://github.com/zeroclaw-labs/zeroclaw/pull/6882)** addresses a related runtime truncation bug.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **TUI Agent Chat** | [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824), [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | **High** | Active PR, `in-progress`, `no-stale`; major UX differentiator |
| **ACP protocol extensions (diff/file-proposal)** | [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) | High | Supports TUI; already partially shipped |
| **MemoryStrategy trait decoupling** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Medium | Blocked, needs-maintainer-review; architectural RFC |
| **Agent capability flags (shared/ access, workspace escape)** | [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | Medium | Accepted, security-focused; v0.8.x scope |
| **Channel layer dependency inversion** | [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | Low | Architectural, breaking; likely 1.0 or post-1.0 |
| **NEAR AI Cloud provider** | [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) | Medium | Small, provider addition; pending review |
| **WeCom AI Bot WebSocket** | [#6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) | Medium | XL PR, enterprise channel; may need iteration |

**Roadmap signal**: The [1.0 Refactor Tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/6060) issue was closed, suggesting maintainers are **consolidating toward a 1.0 release** rather than letting tracking issues proliferate. The bulk revert recovery audit [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (153 commits lost) remains open — a blocker for confidence in master branch history.

---

## 7. User Feedback Summary

### Pain Points:

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Configuration confusion** | [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) (wrong config level), [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) (missing v3 field), [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) (dashboard UX creates broken config) | High — recurring pattern |
| **Local/self-hosted inference broken** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) (llama-server), [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) (Qwen) | High — blocks privacy-conscious users |
| **Memory/context management failures** | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) (overflow hallucination), [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (strategy tightly coupled) | Medium — scaling limitation |
| **Documentation stale** | [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) (RUST_LOG targets), [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) (Docker docs needed) | Medium — fixed reactively |
| **Setup friction on constrained devices** | [#3852](https://github.com/zeroclaw-labs/zeroclaw/issues/3852) (Orange Pi, podman) | Low — niche but vocal |

### Positive Signals:
- **TUI enthusiasm**: [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) active development suggests terminal-first users are a valued segment
- **Channel diversity**: Continued investment in Signal, WeCom, Lark, etc. indicates global/enterprise messaging ambitions
- **Security-conscious design**: [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) silent-fallback hardening, [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) capability flags show proactive security posture

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action:

| Issue/PR | Age | Blocker | Risk if Unaddressed |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~1 month | 153 commits lost in bulk revert; recovery tracking | **Code archaeology burden**; duplicate work, lost fixes |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | ~1 month | Gateway silent-fallback security hardening | **Security debt**; credential leaks via silent failures |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 2 days | MemoryStrategy trait RFC | **Architecture lock-in**; harder to change later |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) | 1 week | Remove remote-markdown-link block from skill audit | **False positive fatigue**; skill ecosystem friction |
| [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) | 1 month | MCP to Xcode integration | Developer workflow expansion blocked |
| **All `yijunyu` allowlist PRs** | 5 days | `needs-author-action` on 8 PRs | **ICSE evaluation timeline risk**; contributor burnout |

### Long-Unanswered (Created before 2026-05-01, still open):

| Issue | Created | Last Activity | Problem |
|:---|:---|:---|:---|
| [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) | 2026-04-03 | 2026-05-23 | Agent Skills marketing/standards participation — 7+ weeks open |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) | 2026-04-22 | 2026-05-23 | Nix flake support — Nix community contribution at risk of bitrot |

---

**Project Health Assessment**: 🟡 **Active but strained**. High contributor engagement (50+50 daily updates) is not matched by merge velocity. The v0.8.0-beta-1 release is generating expected beta feedback. Critical needs: (1) **unblock the allowlist migration PRs**, (2) **resolve config schema v3 documentation gaps**, (3) **address the 153-commit revert recovery** before 1.0 planning solidifies.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*