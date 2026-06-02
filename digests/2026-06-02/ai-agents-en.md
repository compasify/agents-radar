# OpenClaw Ecosystem Digest 2026-06-02

> Issues: 469 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-02 00:31 UTC

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

# OpenClaw Project Digest — 2026-06-02

---

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 469 issues and 500 PRs touched in the last 24 hours, indicating a project in active stabilization mode ahead of a major release. The 292:177 open-to-closed issue ratio and 396:104 open-to-merged PR ratio suggest heavy triage activity with significant in-flight work. Three beta releases dropped in quick succession (v2026.6.1-beta.1 through beta.2, plus v2026.5.31-beta.4), all focused on runtime recovery robustness and channel stability. The dominant themes are **Codex runtime maturation**, **session state hardening**, and **multi-channel delivery reliability** (Telegram, WhatsApp, iMessage, Slack, Feishu, QQBot). The project appears to be executing a coordinated "stability sprint" with multiple contributors landing fixes for race conditions, OAuth flows, and message delivery edge cases.

---

## 2. Releases

### v2026.6.1-beta.2
- **Codex/Harmony runtime recovery**: Agents and CLI-backed runtimes now recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries ([#88129](https://github.com/openclaw/openclaw/issues/88129), [#88136](https://github.com/openclaw/openclaw/issues/88136), [#88141](https://github.com/openclaw/openclaw/issues/88141), [#88162](https://github.com/openclaw/openclaw/issues/88162), [#88182](https://github.com/openclaw/openclaw/issues/88182))
- **Channel stability**: Telegram, WhatsApp, and iMe mobile delivery improved

### v2026.6.1-beta.1
- Identical recovery improvements as beta.2
- **Broader channel coverage**: Telegram, WhatsApp, iMessage, Slack

### v2026.5.31-beta.4
- Same core recovery fixes
- **Partial channel list**: Telegram, WhatsApp, iM (truncated)

**Migration note**: These are rapid iterative betas with identical core changelogs—users on 2026.5.27 should upgrade directly to v2026.6.1-beta.2 for the most complete channel fixes.

---

## 3. Project Progress

### Merged/Closed PRs (implied from issue closures)
- **Codex OAuth compaction fix**: [#86820](https://github.com/openclaw/openclaw/issues/86820) closed — resolved fallback to direct OpenAI API without `OPENAI_API_KEY`
- **Doctor migration fix**: [#84038](https://github.com/openclaw/openclaw/issues/84038) closed — prevented silent migration of `openai-codex/` config to `openai/` that broke PI+OAuth and caused 3-4x token inflation
- **Session write lock race**: [#57019](https://github.com/openclaw/openclaw/issues/57019) closed — fixed async release deleting newly-acquired locks
- **Native hook relay bridge**: [#87536](https://github.com/openclaw/openclaw/issues/87536) closed — resolved "Native hook relay unavailable" on 2026.5.26
- **Discord gateway READY event**: [#79794](https://github.com/openclaw/openclaw/issues/79794) closed — fixed guild message receipt regression from 2026.5.7
- **Cron dashboard display**: [#51871](https://github.com/openclaw/openclaw/issues/51871) closed — fixed Control UI cron job visibility
- **QQBot message duplication**: [#87177](https://github.com/openclaw/openclaw/issues/87177) closed — resolved heartbeat session leakage and duplicate dispatch
- **Codex runtime model rejection**: [#88102](https://github.com/openclaw/openclaw/issues/88102) closed — fixed `openai/gpt-5.5` rejection and `/status` usage drops
- **Unclosed FileHandle crash**: [#84820](https://github.com/openclaw/openclaw/issues/84820) closed — fixed Node ≥24 fatal `ERR_INVALID_STATE` under sustained load
- **OpenAI responses 404**: [#88499](https://github.com/openclaw/openclaw/issues/88499) closed — fixed `previous_response_id` with `store=false`

### In-Flight Features Advancing
- **Transcript identity API** ([#89261](https://github.com/openclaw/openclaw/pull/89261), [#89262](https://github.com/openclaw/openclaw/pull/89262)): Foundation for SQLite migration via accessor seam, unblocks session state refactoring
- **Telegram interleaved progress lane** ([#87072](https://github.com/openclaw/openclaw/pull/87072)): CLI-like reasoning visibility in Telegram
- **Gemini OAuth CLI bridge** ([#88748](https://github.com/openclaw/openclaw/pull/88748)): Full OAuth credential forwarding to `gemini` subprocess
- **Mistral prompt cache compatibility** ([#88976](https://github.com/openclaw/openclaw/pull/88976)): Cache key support for bundled models

---

## 4. Community Hot Topics

| Topic | Activity | Link | Underlying Need |
|-------|----------|------|---------------|
| **Codex-vs-Pi runtime parity QA harness** | 15 comments, closed | [#80171](https://github.com/openclaw/openclaw/issues/80171) | **Strategic inflection point**: OpenClaw is migrating default runtime from Pi to Codex; community needs confidence in functional equivalence, token efficiency, and backward compatibility |
| **Gemini 3.1 Flash-Lite GA upgrade** | 14 comments, 4 👍, open | [#80380](https://github.com/openclaw/openclaw/issues/80380) | Cost optimization urgency—users want stable GA model, not preview deprecation risk |
| **SQLite session/transcript migration** | 12 comments, open | [#88838](https://github.com/openclaw/openclaw/issues/88838) | **Architectural debt**: File-based session state is hitting scaling limits; needs incremental, reviewable migration path |
| **Doctor config migration bug** | 12 comments, 3 👍, closed | [#84038](https://github.com/openclaw/openclaw/issues/84038) | **Data integrity fear**: Automated "fix" tools that break working configs erode trust in `doctor` command |
| **Codex OAuth compaction failure** | 12 comments, 6 👍, closed | [#86820](https://github.com/openclaw/openclaw/issues/86820) | **Auth reliability**: OAuth flows must degrade gracefully without manual API key fallback |
| **Channel-mediated MCP approval** | 11 comments, open | [#78308](https://github.com/openclaw/openclaw/issues/78308) | **Security governance**: Users want same consent envelope for MCP tools as shell-exec, for audit/compliance |
| **QQBot message duplication** | 11 comments, closed | [#87177](https://github.com/openclaw/openclaw/issues/87177) | **Production reliability**: Chinese market (QQ) needs same stability as Western channels |

**Key insight**: The community is simultaneously navigating **runtime transition anxiety** (Codex adoption), **cost pressure** (model selection, token efficiency), and **enterprise readiness** (audit trails, stable auth, session durability).

---

## 5. Bugs & Stability

### 🔴 P1 Critical (Active/Recent)

| Bug | Status | PR Fix? | Link | Risk |
|-----|--------|---------|------|------|
| **Codex turn-completion stall regression** | Open | No fix PR linked | [#88312](https://github.com/openclaw/openclaw/issues/88312) | **Regression of prior fix** (#85107); multi-tool turns fail on ChatGPT Plus sub |
| **Codex Telegram timeout** | Open | No fix PR linked | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Turns do work but never reach `turn/completed`; user-visible failure |
| **Agent duplicate replies on Telegram (5.20+)** | Open | No fix PR linked | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Reduced but not fixed in 2026.5.22; 2-3x duplication persists |
| **Cron self-conflict on isolated agent** | Open | No fix PR linked | [#88369](https://github.com/openclaw/openclaw/issues/88369) | `EmbeddedAttemptSessionTakeoverError` despite isolation |
| **Feishu DM session rebuild/duplicate keys** | Open | No fix PR linked | [#87938](https://github.com/openclaw/openclaw/issues/87938) | Data integrity; maintenance pruning destroys sessions |
| **Feishu silent failure (replies=0)** | Open | No fix PR linked | [#85692](https://github.com/openclaw/openclaw/issues/85692) | No error logged; extremely hard to debug |
| **Codex OAuth refresh wedging** | Open | No fix PR linked | [#86215](https://github.com/openclaw/openclaw/issues/86215) | Hours-long retries without alerting or profile rotation |
| **Feishu bot identity race → permanent disconnect** | Open | No fix PR linked | [#77717](https://github.com/openclaw/openclaw/issues/77717) | Config reload triggers unrecoverable state |
| **Subagent stale output + history pollution** | Open | No fix PR linked | [#78055](https://github.com/openclaw/openclaw/issues/78055) | User-visible stale completions; privacy cross-contamination risk |
| **Cascading auth → duplicate tool exec → context loss** | Open | No fix PR linked | [#80040](https://github.com/openclaw/openclaw/issues/80040) | Triple failure mode; compound reliability crisis |

### 🟡 P2 Significant

| Bug | Status | PR Fix? | Link |
|-----|--------|---------|------|
| **MiniMax 503 cron overload (05:00-07:30 CST)** | Open | No | [#85888](https://github.com/openclaw/openclaw/issues/85888) |
| **Session-selected model in fallback list** | Open | No | [#88039](https://github.com/openclaw/openclaw/issues/88039) |
| **Feishu group messages replies=0 (2026.5.3+)** | Open | No | [#77666](https://github.com/openclaw/openclaw/issues/77666) |
| **ACP runtime ignores per-agent model.primary** | Open | No | [#87381](https://github.com/openclaw/openclaw/issues/87381) |
| **ACPX Codex worker crash with model overrides** | Open | No | [#74305](https://github.com/openclaw/openclaw/issues/74305) |
| **Gateway hang on macOS SMB mounts** | Open | No | [#75767](https://github.com/openclaw/openclaw/issues/75767) |
| **Webchat prompt cache destruction (93%→29%)** | Open | No | [#89139](https://github.com/openclaw/openclaw/issues/89139) |
| **Plugin loader silent failures** | Open | No | [#78301](https://github.com/openclaw/openclaw/issues/78301) |

### 🟢 Recently Fixed (Validation Period)

| Bug | Fixed In | Link |
|-----|----------|------|
| Unclosed FileHandle crash (Node ≥24) | 2026.6.1-beta.x | [#84820](https://github.com/openclaw/openclaw/issues/84820) |
| Doctor silent config migration | 2026.6.1-beta.x | [#84038](https://github.com/openclaw/openclaw/issues/84038) |
| Codex OAuth compaction fallback | 2026.6.1-beta.x | [#86820](https://github.com/openclaw/openclaw/issues/86820) |
| Session write lock race | 2026.6.1-beta.x | [#57019](https://github.com/openclaw/openclaw/issues/57019) |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Support | Link | Likelihood in Next Version |
|---------|---------|------|---------------------------|
| **Multi-Agent Collaboration Enhancement** (capability profiling, shared blackboard, layered memory, token governance) | 8 comments, 0 👍 | [#35203](https://github.com/openclaw/openclaw/issues/35203) | **Medium** — Large RFC scope, but addresses core architecture; may see incremental PRs |
| **Telegram bot-to-bot + guest-bot modes** (May 2026 Telegram API) | 7 comments, 7 👍 | [#79077](https://github.com/openclaw/openclaw/issues/79077) | **High** — High engagement, platform-native feature, competitive necessity |
| **Channel-mediated MCP tool approval** (consent envelope) | 11 comments, 1 👍 | [#78308](https://github.com/openclaw/openclaw/issues/78308) | **High** — Security-critical; parity with existing shell-exec approval; enterprise blocker |
| **i18n slash command descriptions** | 5 comments, 1 👍 | [#79458](https://github.com/openclaw/openclaw/issues/79458) | **Medium** — Straightforward, accessibility win, but not on critical path |
| **Per-agent/cron provider request headers** | PR in flight | [#79990](https://github.com/openclaw/openclaw/pull/79990) | **High** — PR exists, multi-tenant/enterprise need |
| **Zulip channel catalog entry** | PR in flight | [#89144](https://github.com/openclaw/openclaw/pull/89144) | **High** — Trivial merge, community channel expansion |
| **TTS audio on WhatsApp** | PR in flight | [#89251](https://github.com/openclaw/openclaw/pull/89251) | **High** — Small scope, clear user value |

**Predicted 2026.6.x themes**: Codex runtime as default (with Pi deprecation path), SQLite session store (incremental via #88838 seam), expanded channel coverage (Telegram guest bots, Zulip), enterprise governance (MCP approval, per-agent auth isolation).

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Message duplication/loss** | Telegram (2-10x), QQBot, Feishu (replies=0), Discord thread binding | 🔴 Critical |
| **Codex runtime instability** | Turn stalls, timeouts, OAuth failures, model rejection, token inflation | 🔴 Critical |
| **Session state fragility** | Lock races, FileHandle leaks, compaction failures, history pollution | 🔴 Critical |
| **Feishu as second-class channel** | Multiple open bugs, silent failures, identity races, DM rebuilds | 🟡 High |
| **Cron reliability** | MiniMax overload, deleteAfterRun consumption, undefined sourceDelivery | 🟡 High |
| **Auth/OAuth opacity** | Refresh failures without alerting, profile rotation missing, config migration surprises | 🟡 High |

### Use Cases Emerging
- **Multi-account Feishu enterprise deployments** — complex session management at scale
- **Telegram as primary CLI replacement** — interleaved progress, TTS, bot-to-bot automation
- **Cost-optimized model routing** — Gemini Flash-Lite, prompt caching, fallback list intelligence
- **Compliance-sensitive MCP usage** — audit trails, explicit consent for external mutations

### Satisfaction Signals
- Rapid beta iteration (3 releases in ~2 days) shows responsive maintainers
- Large PR batch from `Jerry-Xin` (6+ PRs) indicates coordinated community push for stability
- QA lab infrastructure (#80171, #80397, #80365) suggests investment in quality engineering

### Dissatisfaction Signals
- **Regression velocity**: Multiple "regression of #XXXX (fixed by #YYYY)" patterns suggest fix fragility
- **Silent failures** dominate: replies=0, unlogged errors, stale completions without user notification
- **"clawsweeper" label overload**: Many issues tagged `no-new-fix-pr`, `needs-maintainer-review`, `needs-product-decision` — triage bottleneck

---

## 8. Backlog Watch

### Stale Issues Needing Maintainer Decision

| Issue | Age | Last Activity | Blocker | Link |
|-------|-----|---------------|---------|------|
| **Multi-Agent Collaboration RFC** | ~3 months | 2026-06-01 | Needs product decision, security review | [#35203](https://github.com/openclaw/openclaw/issues/35203) |
| **Telegram bot-to-bot/guest-bot** | ~4 weeks | 2026-06-01 | Platform API released, no implementation plan | [#79077](https://github.com/openclaw/openclaw/issues/79077) |
| **Chrome MCP existing-session timeout** | ~3 weeks | 2026-06-01 | Needs live repro, macOS-specific | [#80036](https://github.com/openclaw/openclaw/issues/80036) |
| **Android node.event handshake race** | ~4 weeks | 2026-06-01 | Mobile platform gap | [#79552](https://github.com/openclaw/openclaw/issues/79552) |
| **Discord gzip decompression (Node v26)** | ~3 weeks | 2026-06-01 | Node version compatibility | [#79752](https://github.com/openclaw/openclaw/issues/79752) |
| **Cascading auth failure cascade** | ~3 weeks | 2026-06-01 | Complex multi-factor, needs architectural review | [#80040](https://github.com/openclaw/openclaw/issues/80040) |

### PRs Waiting on Author/Proof

| PR | Age | Status | Blocker | Link |
|----|-----|--------|---------|------|
| **Cron manual run preservation** | ~2 weeks | ⏳ waiting on author | Needs real-behavior proof | [#83933](https://github.com/openclaw/openclaw/pull/83933) |
| **TTS text settlement churn** | ~2 weeks | 📣 needs proof | Screenshot/video proof gate | [#83988](https://github.com/openclaw/openclaw/pull/83988) |
| **Per-agent provider headers** | ~3 weeks | 📣 needs proof | Large scope, security review | [#79990](https://github.com/openclaw/openclaw/pull/79990) |

### Maintainer Attention Needed

- **#88838** (SQLite migration seam

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Comparison Report
*Based on 2026-06-02 Community Digests*

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing intense stabilization pressure as projects race from prototype to production reliability. A dominant pattern emerges: **runtime transitions** (Pi→Codex in OpenClaw, ENGINE_V2 in IronClaw, AgentScope 2.0 in CoPaw) are creating temporary fragility across session state, auth flows, and message delivery. Channel diversity has become table stakes—Telegram, WhatsApp, Feishu, QQ, Discord, and emerging enterprise channels (DingTalk, Lark) all require first-class treatment. Cost optimization and enterprise governance (audit trails, consent envelopes, per-agent isolation) are rapidly shifting from nice-to-have to adoption blockers.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Phase |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 469 touched (292 open, 177 closed) | 500 touched (396 open, 104 merged) | 3 betas (v2026.6.1-beta.1/2, v2026.5.31-beta.4) | ⚠️ Stressed — high velocity, regression risk, triage bottleneck | Pre-major-release stabilization |
| **NanoBot** | 28 (25 closed, 3 open) | 30 (17 merged, 13 open) | **v0.2.1 shipped** | ✅ Healthy — responsive maintainers, clean close rate | Active feature delivery |
| **Hermes Agent** | 50 (41 open, 9 closed) | 50 (25 merged, 25 open) | None (last: v0.15.1, 2026-05-29) | ⚠️ Strained — 82% open issue rate, zero releases | Stabilization with stretched bandwidth |
| **PicoClaw** | 7 | 11 (5 merged, 6 open) | Nightly (v0.2.9-nightly) | ⚠️ Moderate — stale PRs unmerged, contributor friction | Pre-release consolidation |
| **NanoClaw** | 3 (1 closed, 2 open) | 5 (1 merged, 4 open) | None | ⚠️ Early — small but responsive, production pain driving fixes | Stabilization (small scale) |
| **NullClaw** | 0 | 1 open | None | ✅ Stable — minimal activity, no fires | Maintenance |
| **IronClaw** | 12 (11 open, 1 closed) | 47 (33 merged, 14 open) | None | ⚠️ High velocity, architectural debt accumulating | Reborn architecture overhaul |
| **LobsterAI** | 1 new | 12 (11 merged, 1 open) | **2026.6.1 shipped** | ✅ Strong delivery — low community engagement, commercial friction | Feature delivery (internal-driven) |
| **Moltis** | 0 | 4 (3 merged, 1 open) | None | ✅ Stable — clean merges, zero issues | Maintenance |
| **CoPaw** | 50 (32 open, 18 closed) | 35 (9 merged, 26 open) | **v1.1.10 + beta.2 shipped** | ⚠️ Active but bottlenecked — 74% open PR rate | Dual-track: stable + v2.0 refactor |
| **ZeptoClaw** | 2 open | 18 (17 merged, 1 open) | None | ✅ Disciplined — CI-hardened, binary-size obsessed | Infrastructure hardening |
| **ZeroClaw** | 36 (8 closed, 28 open) | 37 (13 merged, 24 open) | None (v0.8.0-beta-2 pending) | ⚠️ Pre-release pressure — integration PR blocking | Pre-beta consolidation |

---

## 3. OpenClaw's Position

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 469 issues / 500 PRs in 24h | **10-50x larger** than all peers; NanoBot (58 items) and CoPaw (85) are nearest |
| **Channel breadth** | 7+ channels (Telegram, WhatsApp, iMessage, Slack, Feishu, QQBot, Discord) | **Widest coverage** — Hermes (Discord, Weixin), NanoBot (Telegram, QQ/Napcat, DingTalk), ZeroClaw (Telegram, Discord, WhatsApp, email) trail significantly |
| **Runtime strategy** | Aggressive Codex migration with Pi deprecation path | **Most exposed to OpenAI platform shifts** — IronClaw (Reborn), CoPaw (AgentScope 2.0) also re-architecting but with more abstraction |
| **Community model** | Open, high-contribution with triage bottleneck | **Most "true open source"** — LobsterAI (NetEase internal), NanoClaw (small operator-driven), ZeptoClaw (solo maintainer) are more closed |
| **Enterprise readiness** | Emerging (MCP approval, per-agent auth, SQLite migration) | **Behind ZeroClaw** (multi-tenant Linq, evaluation harness) and **NanoClaw** (provider resilience framework) on governance tooling |

**Key vulnerability**: Regression velocity ("regression of prior fix" patterns) and silent failure modes (replies=0, unlogged errors) suggest **testing infrastructure not keeping pace with code volume**. Peers like ZeptoClaw (zero-tolerance `deny.toml`, binary-size gates) and NanoBot (same-day critical bug closure) demonstrate more disciplined quality boundaries at smaller scale.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Codex/OpenAI runtime integration** | OpenClaw, Moltis, ZeroClaw | OpenClaw: Codex default migration; Moltis: Codex streaming edge case (#1088); ZeroClaw: compatible provider abstraction tax (#6302, #7022) |
| **Session state durability** | OpenClaw, NanoBot, NanoClaw, IronClaw | OpenClaw: SQLite migration (#88838); NanoBot: retention result refactoring (#4143); NanoClaw: crash-loop on corrupt resume (#2669); IronClaw: compaction/checkpoint races (#4309-#4314) |
| **Channel-mediated consent/approval** | OpenClaw, ZeroClaw | OpenClaw: MCP approval envelope (#78308); ZeroClaw: gate cancellation terminal state (pattern) |
| **Cost optimization (token/model)** | OpenClaw, NanoBot, Hermes, PicoClaw, ZeroClaw | OpenClaw: Gemini Flash-Lite GA (#80380), prompt caching; NanoBot: heartbeat LLM skip (#2482); Hermes: Gemini `service_tier: flex` (#12700); PicoClaw: 50% skill catalog token reduction (#2781); ZeroClaw: skill compilation (#5146) |
| **Per-agent/cron isolation** | OpenClaw, CoPaw, NanoBot | OpenClaw: cron self-conflict (#88369); CoPaw: spawn_subagent + SharedMCPPool (#4849); NanoBot: DingTalk group user isolation (#4016) |
| **Silent failure elimination** | OpenClaw, NanoBot, Hermes, NanoClaw, ZeroClaw | Universal pattern: message loss, stale completions, unlogged errors dominate P1s across all projects |
| **OAuth/auth reliability** | OpenClaw, IronClaw, CoPaw | OpenClaw: OAuth refresh wedging (#86215); IronClaw: GSuite/Notion OAuth (#4297, #4300); CoPaw: ACP protocol mismatch (#4824) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Universal channel router + Codex-native | Power users, multi-platform operators | Monolithic Node.js, file→SQLite session migration |
| **NanoBot** | WebUI-first "work surface" | Desktop users, small teams | Event-bus decoupled WebUI, local Whisper |
| **Hermes Agent** | Honcho memory integration, broad skill ecosystem | Memory-heavy personal use | Python, Honcho workspace memory, Kanban orchestration (aspirational) |
| **PicoClaw** | Embedded/edge readiness (Sipeed hardware alignment) | IoT/edge developers, RISC-V | Rust, extreme minimalism, binary-size discipline |
| **NanoClaw** | Container-native A2A, provider resilience | DevOps, multi-agent orchestrators | Containerized, rootless Podman, crash-loop self-healing |
| **IronClaw** | Cloud-native "Reborn" stateless runtime, TEE | Enterprise, NEAR ecosystem | WASM-compiled skills, libSQL/PostgreSQL, event-sourced |
| **LobsterAI** | Kit/Expert marketplace (NetEase commercial) | Chinese consumers, plugin buyers | Electron desktop, Redux state, internal-driven |
| **ZeroClaw** | Security-hardened, evaluation-driven, WASI plugins | Security-conscious enterprises | Rust, Tower/axum, `deny.toml` zero-tolerance, lean channel bundles |
| **ZeptoClaw** | Extreme binary minimalism (~7MB target) | Container/edge deployers | Rust, LTO tuning, dependency pruning obsession |
| **CoPaw** | IDE-like desktop experience (Trae parity) | Windows desktop developers | TypeScript, browser automation, spawn_subagent |

**Architectural fault lines**:
- **Monolithic vs. modular**: OpenClaw/CoPaw (monolithic) vs. IronClaw/ZeroClaw (WASM/microkernel-inspired)
- **Stateful vs. stateless**: OpenClaw/NanoBot (session-heavy) vs. IronClaw Reborn (stateless, checkpointed)
- **Channel-first vs. platform-first**: OpenClaw (channel router) vs. LobsterAI (desktop IDE) vs. NanoClaw (container runtime)

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🚀 Rapid Iteration** | OpenClaw, IronClaw, CoPaw | 35-500 items/day, major architecture in flight, release pressure high, regression risk elevated |
| **✅ Healthy Delivery** | NanoBot, LobsterAI | Clean close rates, shipped releases, focused scope; LobsterAI lower community engagement |
| **⚠️ Stabilization Strain** | Hermes Agent, ZeroClaw, PicoClaw | High open rates, stale items, review bottlenecks; ZeroClaw blocked on integration PR, Hermes at 82% open issues |
| **🔧 Disciplined Hardening** | ZeptoClaw, Moltis, NanoClaw | Small, controlled changes, strong CI gates; NanoClaw responding to production pain with same-day fixes |
| **💤 Maintenance** | NullClaw | Minimal activity, stable, no urgent work |

**Velocity-quality tradeoff**: OpenClaw and IronClaw show **highest item volume but also highest regression density**. ZeptoClaw and NanoBot demonstrate **higher merge quality at lower scale**. The critical question for OpenClaw is whether its triage infrastructure (469 issues/day) can mature into ZeptoClaw-like discipline without throttling innovation.

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Runtime abstraction fatigue** | OpenClaw's Codex migration pain, ZeroClaw's "compatible provider whack-a-mole", CoPaw's ACP mismatch | **Design provider-agnostic runtimes early** — model-specific quirks (temperature, tool serialization, streaming deltas) are recurring tax |
| **Consent as infrastructure** | OpenClaw #78308, ZeroClaw gate patterns, NanoClaw MCP timeout | **Build approval envelopes into channel layer**, not as afterthought — enterprise/compliance demand is accelerating |
| **Cost as architectural constraint** | Token minimization (#5146, #2781), heartbeat skipping (#2482), prompt caching (#89139), model fallback chains (#4882) | **Token budgets must be first-class in loop design**, not optimization pass — users are price-sensitive at scale |
| **Silent failure = trust erosion** | "Replies=0" across Feishu, Telegram, QQ, WhatsApp; unlogged OAuth refresh failures; stale completions | **Invest in observable delivery pipelines** — every silent drop is a user churn event |
| **Multi-agent orchestration emerging** | PicoClaw #2937 (agent mailboxes), CoPaw spawn_subagent, NanoClaw A2A routing, OpenClaw multi-agent collaboration RFC | **Inter-agent protocols (A2A, ACP) are premature standardization territory** — expect churn, but engage early |
| **Edge/embedded deployment demand** | PicoClaw RISC-V, ZeptoClaw 7MB target, NanoClaw rootless containers | **Binary size and cross-compilation are competitive moats** for non-cloud deployments |
| **Evaluation/observability gap** | ZeroClaw #7065 (`zeroclaw eval`), OpenClaw QA harness #80171 | **"Works on my machine" is insufficient** — systematic agent evaluation tooling is underserved |

---

*Report generated from 12 project digests dated 2026-06-02. Data reflects 24-hour GitHub activity windows.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-02

## 1. Today's Overview

NanoBot shows **strong sustained momentum** with 58 total items updated in the last 24 hours (28 issues, 30 PRs) and a fresh v0.2.1 release landing. The project demonstrates healthy maintainer responsiveness: 25 of 28 issues were closed, with only 3 remaining open. The WebUI is clearly the strategic focus area, with v0.2.1 positioning it as "the place where work actually happens." However, the 13 open PRs suggest some review backlog building, particularly around channel integrations and provider authentication.

---

## 2. Releases

### [v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1) — Latest

| Attribute | Detail |
|-----------|--------|
| **Scope** | 84 PRs merged, 17 new contributors |
| **Headline** | WebUI becomes the primary work surface |

**Key Changes:**
- **Live file editing visibility** — edits now surface as activity in chat
- **Enhanced tool trace rendering** — improved transparency for agent reasoning
- **Smoother, faster chat surface** — UX polish for trust and responsiveness

**Migration Notes:** No breaking changes flagged; appears to be incremental enhancement release.

---

## 3. Project Progress

### Merged/Closed PRs (17 total — selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4143](https://github.com/HKUDS/nanobot/pull/4143) | hamb1y | **Refactor session retention result** — `RetentionResult` named tuple replaces inferred return values | Code quality; fixes archive semantics from #4136 |
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | chengyongru | **Refactor WebUI runtime state onto event bus** — typed events, `RuntimeEventPublisher`, `WebuiTurnCoordinator` | Architecture: decouples WebUI from `AgentLoop` internals |
| [#3509](https://github.com/HKUDS/nanobot/pull/3509) | LZDQ | **Napcat (QQ) channel** — OneBot v11 Forward WebSocket, images, group reply policies | Major channel expansion; backported to main as #4146 |
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | dilidin2 | **Local Whisper transcription** — `faster-whisper` C++/ONNX, zero API dependency | Privacy/cost win; offline-first capability |
| [#4016](https://github.com/HKUDS/nanobot/pull/4016) | lmzopq | **DingTalk group user isolation** — `group_user_isolation` config for per-user sessions | Enterprise UX fix; privacy in shared spaces |
| [#3126](https://github.com/HKUDS/nanobot/pull/3126) | yeyitech | **Silent cron runs** — suppress progress/tool-hints until final output | Fixes noise issue #3064 |
| [#2482](https://github.com/HKUDS/nanobot/pull/2482) / [#2435](https://github.com/HKUDS/nanobot/pull/2435) / [#2415](https://github.com/HKUDS/nanobot/pull/2415) | yonghuname, c7ozkan | **Heartbeat LLM skip optimization** — avoid calls when HEARTBEAT.md has no active tasks | Cost reduction; merged via multiple PRs |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Type | Comments | 👍 | Underlying Need |
|:---|:---|:---|:---:|:---:|:---|
| 1 | [#2880](https://github.com/HKUDS/nanobot/issues/2880) | Closed bug | 18 | 0 | **Reliability trust** — "replies with errors no matter what" destroys user confidence; agent-mode workaround suggests core chat path fragility |
| 2 | [#1932](https://github.com/HKUDS/nanobot/issues/1932) | Closed feature | 8 | 0 | **Configuration ergonomics** — skill disable vs. delete reflects power-user need for reversible experimentation |
| 3 | [#101](https://github.com/HKUDS/nanobot/issues/101) | Closed question | 6 | 0 | **Cost sensitivity** — free-tier API routing (Google, Grok) for low-budget/self-hosted use cases |
| 4 | [#49](https://github.com/HKUDS/nanobot/issues/49) | Closed feature | 4 | 6 | **Privacy-first messaging** — Signal integration demand (highest 👍 count) |
| 5 | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | Closed feature | 4 | 3 | **Production resilience** — MCP retry logic for infrastructure volatility |

**Pattern:** Chinese-speaking users dominate bug reports (稳定性, 配置灵活性); English-speaking users drive feature requests (privacy, cost, enterprise resilience).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#4133](https://github.com/HKUDS/nanobot/issues/4133) | Closed (today) | #4080 follow-up | **Silent message loss after tool calls** — Claude/DeepSeek V4 Flash complete tool execution but final response never delivers to Telegram; persists post-#4080 |
| **🟠 High** | [#4128](https://github.com/HKUDS/nanobot/issues/4128) | Closed (today) | #4129 | **Duplicate user message archiving** — `retain_recent_legal_suffix` else branch corrupts session state; LLM context inconsistency risk |
| **🟠 High** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | Closed | — | **GPT-5.5 "Duplicate item found with id"** — Codex-specific, blocks resume |
| **🟡 Medium** | [#2880](https://github.com/HKUDS/nanobot/issues/2880) | Closed | — | Universal error replies — likely config/initialization path |
| **🟡 Medium** | [#3028](https://github.com/HKUDS/nanobot/issues/3028) | Closed | — | Heartbeat double-creating cron tasks — scheduling logic bug |
| **🟡 Medium** | [#4069](https://github.com/HKUDS/nanobot/issues/4069) | Closed | — | Dream cron registers without enable gate — unconditional job registration |
| **🟢 Low** | [#2071](https://github.com/HKUDS/nanobot/issues/2071) | Closed | — | DUCKDUCKGO search default not recognized without explicit config |

**Stability Assessment:** Two critical-silent-failure bugs (#4133, #4128) resolved same-day indicates responsive maintainers, but the *recurrence* of silent-delivery issues suggests systemic testing gaps in the message delivery pipeline.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Custom image generation providers** | [#4132](https://github.com/HKUDS/nanobot/issues/4132) Agnes AI support | **High** | Small surface, clear config pattern; follows #3903 image generation fixes |
| **WebSocket server channel** | [#2819](https://github.com/HKUDS/nanobot/issues/2819) | **High** | Architecture aligns with v0.2.1 WebUI focus; enables custom clients |
| **Signal channel** | [#49](https://github.com/HKUDS/nanobot/issues/49) | **Medium** | 6 👍, strong privacy narrative; `signal-cli` dependency complexity |
| **Hooks/lifecycle events** | [#2182](https://github.com/HKUDS/nanobot/issues/2182) | **Medium** | Ecosystem play (Claude Code parity); needs design review |
| **Streaming CLI output** | [#1547](https://github.com/HKUDS/nanobot/issues/1547) | **Medium** | UX quality; may depend on provider API streaming support |
| **Azure AAD auth** | [#4126](https://github.com/HKUDS/nanobot/pull/4126) | **High** | PR open, enterprise blocker, clean identity-based flow |
| **Volcengine search** | [#4141](https://github.com/HKUDS/nanobot/pull/4141) | **High** | PR open, follows existing provider model |
| **Cloud deployment layer (HF/ModelScope)** | [#4139](https://github.com/HKUDS/nanobot/pull/4139) | **Medium** | +851 lines, new abstraction; valuable but review-heavy |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Cost anxiety** | [#4142](https://github.com/HKUDS/nanobot/issues/4142) cache-miss optimization discussion; [#101](https://github.com/HKUDS/nanobot/issues/101) free API seeking; multiple heartbeat token-saving PRs | 🔴 High |
| **Silent failures** | [#4133](https://github.com/HKUDS/nanobot/issues/4133) message loss; [#4128](https://github.com/HKUDS/nanobot/issues/4128) duplicate archiving — both invisible to users | 🔴 High |
| **Chat noise** | [#3064](https://github.com/HKUDS/nanobot/issues/3064) cron thinking messages; [#2126](https://github.com/HKUDS/nanobot/issues/2126) heartbeat status clutter | 🟠 Medium |
| **Configuration friction** | [#1932](https://github.com/HKUDS/nanobot/issues/1932) skill disable; [#115](https://github.com/HKUDS/nanobot/issues/115) WhatsApp chatid syntax; [#1862](https://github.com/HKUDS/nanobot/issues/1862) `restrictToWorkspace` media paths | 🟠 Medium |
| **Multi-user session hygiene** | [#4016](https://github.com/HKUDS/nanobot/pull/4016) DingTalk isolation; implies similar needs in other group channels | 🟡 Medium |

### Satisfaction Drivers
- **WebUI maturation** (v0.2.1) — live edits, tool traces build trust
- **Local/offline capabilities** — Whisper transcription, faster-whisper
- **Channel breadth** — QQ/Napcat, DingTalk enterprise features

---

## 8. Backlog Watch

| Item | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [#4142](https://github.com/HKUDS/nanobot/issues/4142) Cache-miss cost optimization | <1 day | Open, 1 comment | Discussion may stall without maintainer cost-model input | Needs core team API cost analysis |
| [#4136](https://github.com/HKUDS/nanobot/issues/4136) Refactor session retention API clarity | <1 day | Open, 0 comments | Post-#4143 follow-up; technical debt tracking | Decide if #4143 resolution is sufficient; close or schedule |
| [#4132](https://github.com/HKUDS/nanobot/issues/4132) Custom image generation provider | <1 day | Open, 0 comments | Duplicate of #3903 pattern; may need consolidation | Triage against existing provider registry work |

**No stale critical items** — all pre-June issues with substantive engagement were closed today. The 3 open issues are all from 2026-06-01 and appear actively triaged.

---

*Digest generated from HKUDS/nanobot GitHub activity through 2026-06-02. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-02

## 1. Today's Overview

Hermes Agent shows **high velocity with mixed health signals**: 50 issues and 50 PRs touched in 24 hours indicates an active, growing community, but the 82% open issue rate (41/50) and zero releases suggest maintenance bandwidth is stretched. The project is in a **stabilization phase for v0.15.x** with significant bug-fix activity on gateway reliability, cron subsystem robustness, and CLI edge cases. Notably, three critical Discord/gateway bugs were closed today, while fresh P1 crashes in cron loading and security false-positives emerged. The contributor base appears broad (20+ distinct authors in sample), but umbrella issues for Kanban orchestration and long-standing feature requests indicate architectural debt accumulating.

---

## 2. Releases

**No new releases.**  
Last release appears to be v0.15.1 (build 2026.5.29) per issue #35703. No migration notes or breaking changes to report.

---

## 3. Project Progress

### Merged/Closed PRs Today (25 total, highlights):

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#35117](https://github.com/NousResearch/hermes-agent/pull/35117) | banditburai | **Weixin gateway timeout fix** — resolves `asyncio.wait_for` cluster of failures with regression tests | Production stability for enterprise WeChat users |
| [#34336](https://github.com/NousResearch/hermes-agent/pull/34336) | banditburai | **Fixes silent response loss after tool calls** — closes #29346, adds invariant to prevent empty responses after "response ready" | Critical Discord/gateway reliability |
| [#35988](https://github.com/NousResearch/hermes-agent/pull/35988) | athebolt | **Honcho memory `workspace_id` fix** — `honcho_conclude` was silently failing all writes | Memory subsystem functional again |
| [#30849](https://github.com/NousResearch/hermes-agent/pull/30849) | munim | **Fuzzy model search in WebUI + TUI** | UX polish |
| [#31818](https://github.com/NousResearch/hermes-agent/pull/31818) | bernardopg | **Babel deprecation warning cleanup** | Developer experience |
| [#7](https://github.com/NousResearch/hermes-agent/pull/7) | teknium1 | Miscellaneous cleanups | Maintenance |

### Key Advancements:
- **Gateway reliability**: Two major silent-failure modes (Weixin timeout, Discord tool-response drop) are now hardened with regression tests
- **Cron awareness**: PRs [#37073](https://github.com/NousResearch/hermes-agent/pull/37073) and [#37071](https://github.com/NousResearch/hermes-agent/pull/37071) in review would finally solve the "agent forgets its own cron jobs" problem (#37070)

---

## 4. Community Hot Topics

### Most Active by Engagement:

| Issue/PR | Type | Comments | 👍 | Underlying Need |
|:---|:---|:---:|:---:|:---|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) Searxng search provider | Feature | 5 | **30** | **Sovereign/self-hosted search** — users reject vendor lock-in (Firecrawl/Tavily), want privacy-preserving alternative |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) Brave Search native backend | Feature | 5 | 23 | **Cost reduction + accessibility** — Brave's free tier appeals to hobbyist/self-hosters |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) Auto-backup & version control | Feature | 3 | 13 | **Data sovereignty anxiety** — users fear losing trained agent state, want git-like safety |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) Multi-Role Auto-Routing v2 | Feature | 5 | 14 | **Enterprise multi-tenancy** — v0.14.0 architecture alignment shows this is being actively redesigned |
| [#10149](https://github.com/NousResearch/hermes-agent/issues/10149) "No auxiliary LLM provider" | Bug | 1 | 16 | **Onboarding friction** — config discovery is broken; high 👍 despite low comments = silent majority pain |

**Analysis**: The search-provider proliferation (Searxng, Brave, existing Firecrawl/Tavily/Exa) signals **fragmentation risk** — users want pluggable backends but maintenance burden grows. The backup request's 13 👍 with only 3 comments suggests **lurking enterprise demand** not being vocalized.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **P1** | [#36867](https://github.com/NousResearch/hermes-agent/issues/36867) | **`cron/jobs.json` parse crash kills entire cron subsystem** — uncaught `AttributeError` on non-dict JSON | ❌ None |
| **P1** | [#37036](https://github.com/NousResearch/hermes-agent/issues/37036) | **`skills_guard` false-positive blocks legitimate skill** — 12 "DANGEROUS" verdicts on instructional prose | ❌ None |
| **P1** | [#29346](https://github.com/NousResearch/hermes-agent/issues/29346) | ~~Discord tool responses silently dropped~~ | ✅ [#34336](https://github.com/NousResearch/hermes-agent/pull/34336) merged |
| **P2** | [#19776](https://github.com/NousResearch/hermes-agent/issues/19776) | Discord connect timeout too short for slash-command sync (>30s) | ❌ None |
| **P2** | [#29711](https://github.com/NousResearch/hermes-agent/issues/29711) | Discord mixed attachments send non-images as `input_image`, causing 400 errors | ❌ None |
| **P2** | [#37044](https://github.com/NousResearch/hermes-agent/issues/37044) | API server strips reasoning/thinking blocks from responses | ❌ None |
| **P2** | [#35703](https://github.com/NousResearch/hermes-agent/issues/35703) | ~~MCP tools missing from api_server platform~~ | ✅ Closed (fix in v0.15.1) |

**Trend**: Gateway platform adapters (Discord, Weixin, api_server) are the **highest-bug-density component**. Cron subsystem fragility (#36867) is a new regression class — JSON schema validation missing at load boundary.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Cron job awareness in agent context** | [#37070](https://github.com/NousResearch/hermes-agent/issues/37070) + PRs [#37073](https://github.com/NousResearch/hermes-agent/pull/37073), [#37071](https://github.com/NousResearch/hermes-agent/pull/37071) | **High** | PRs already open, fresh issue, clear user pain |
| **Document extraction (.ipynb/.docx/.xlsx)** | PR [#37082](https://github.com/NousResearch/hermes-agent/pull/37082) | **High** | Teknium1 authored, ports proven Kilo Code feature |
| **Searxng/Brave search providers** | [#5941](https://github.com/NousResearch/hermes-agent/issues/5941), [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Medium | High 👍, but competes for maintainer review bandwidth |
| **Deterministic Workflow Engine ("Lobster-style")** | [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | Medium | 7 comments, 8 👍 — architectural, not quick win |
| **Google Vertex AI native provider** | [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | Low-Medium | Complex auth machinery (OAuth tokens), enterprise niche |
| **Gemini `service_tier: flex`** | [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Medium | 6 👍, cost optimization aligns with cron use case |
| **Multi-profile shared memory** | [#31388](https://github.com/NousResearch/hermes-agent/issues/31388) | Low | RFC stage, competes with Honcho integration |
| **Kanban orchestration reliability** | [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) | Low | Umbrella issue — needs sustained design effort |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):

> *"Agent has no awareness of what its own cron jobs deliver"* — [#37070](https://github.com/NousResearch/hermes-agent/issues/37070)  
> *"Relying on an LLM to re-plan every step introduces unnecessary token costs"* — [#5354](https://github.com/NousResearch/hermes-agent/issues/5354)  
> *"Hermes update overwrites [systemd working directory]"* — [#11312](https://github.com/NousResearch/hermes-agent/issues/11312)  
> *"No working path for Google Cloud Vertex AI"* — [#13484](https://github.com/NousResearch/hermes-agent/issues/13484)  
> *"50% cost reduction for batch/background workloads"* — [#12700](https://github.com/NousResearch/hermes-agent/issues/12700)

### Satisfaction Signals:
- Active PR contribution for fixes (banditburai, briandevans carrying multiple security/reliability patches)
- Community skill ecosystem (`mksglu/context-mode`) despite guard false-positives

### Dissatisfaction Signals:
- **Configuration fragility**: working directory, auth, provider setup all have open issues
- **Silent failures** predominate over loud crashes (tool responses dropped, Honcho writes failing silently, cron jobs invisible)
- **Platform inconsistency**: MCP tools work on Slack/CLI but not api_server; Discord has 3+ open bugs

---

## 8. Backlog Watch

| Issue | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#10149](https://github.com/NousResearch/hermes-agent/issues/10149) "No auxiliary LLM provider configured" | ~7 weeks | **High** | 16 👍, 1 comment — **onboarding blocker**, likely docs/config discovery fix, low effort/high impact |
| [#9220](https://github.com/NousResearch/hermes-agent/issues/9220) WhatsApp `/sethome` not persisting | ~7 weeks | Medium | Platform state management — may share root cause with other platform config issues |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) Deterministic Workflow Engine | ~8 weeks | Medium | Architectural RFC needs maintainer design review |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) Multi-Role Auto-Routing v2 | ~8 weeks | Medium | v0.14.0 alignment claimed, but no PR linked — stalled? |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) Auto-backup & version control | ~6 weeks | **High** | 13 👍, enterprise-ready feature, no PR activity |

**Maintainer attention most needed for**: #10149 (silent onboarding failure with high 👍), #12238 (data loss anxiety), and the P1 cron crash #36867 (subsystem availability).

---

*Digest generated from 50 issues and 50 PRs updated 2026-06-01 to 2026-06-02.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-02

## 1. Today's Overview

PicoClaw shows **moderate-to-high activity** with 18 items updated in the last 24 hours (7 issues, 11 PRs) and a fresh nightly build published. The project is actively iterating toward **v0.2.9** with significant focus on **provider compatibility fixes** (Anthropic, AWS Bedrock, OpenAI) and **agent reliability improvements**. Notably, 5 PRs were merged/closed today, indicating maintainers are processing backlog items. However, 6 open PRs remain in limbo, several marked stale, suggesting review bandwidth constraints. The community is vocal about **model-specific API quirks** and **safety guard false positives**, reflecting growing production usage.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.9-nightly.20260601.ba806592](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)** | Nightly | Automated build; may be unstable. Precedes upcoming v0.2.9 stable. |

**Implied changes in v0.2.9 pipeline** (based on merged PRs):
- Cron tool enhancements (`get`/`update` actions)
- Bedrock temperature deprecation fix for Claude Opus 4.8
- Skill catalog token optimization

**Migration note**: Users on Claude Opus 4.x should verify temperature handling after upgrade.

---

## 3. Project Progress

### Merged/Closed Today (5 PRs)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| **[#2982](https://github.com/sipeed/picoclaw/pull/2982)** | loafoe | **fix(bedrock)**: Drop `temperature` for Claude Opus 4.8 on AWS Bedrock | **Critical fix** — unblocks Bedrock users on latest Anthropic model |
| **[#2977](https://github.com/sipeed/picoclaw/pull/2977)** | SutraHsing | **feat(cron)**: Add `get`/`update` actions to cron tool | Agent can now inspect and partially update cron jobs without destructive remove/add cycles |
| **[#2781](https://github.com/sipeed/picoclaw/pull/2781)** | cstroie | **perf**: Reduce skill catalog token usage on tool iterations | **~50% token reduction** on multi-turn sessions; significant cost/performance win |
| **[#2893](https://github.com/sipeed/picoclaw/pull/2893)** | dtapps | **feat**: Server酱³ Bot (SC3Bot) channel support | New notification channel for Chinese users; **closed without merge** — reason unclear |
| **[#2890](https://github.com/sipeed/picoclaw/pull/2890)** | dtapps | **fix**: Resolve symlinks in `cwdPath` on macOS | **Closed without merge** despite fixing real macOS path validation bug |

**Assessment**: Core infrastructure (Bedrock, cron, token efficiency) advanced well. Two dtapps PRs closed unmerged raises questions about external contributor experience.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | 🔥 Heat Analysis |
|------|------|----------|----------------|
| 1 | **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** — `exec` tool `guardCommand` false positive | **15 comments** | **Long-running pain point** (since March). Safety guard regex incorrectly flags URL parameters as relative path traversal (`../../../../Beijing?T`). Underlying need: **smarter path vs. argument parsing** in command safety. Users want `restrict_to_workspace` without breaking common CLI patterns (curl, wget). |
| 2 | **[#2887](https://github.com/sipeed/picoclaw/issues/2887)** — .deb on RISC-V broken with OpenAI | **8 comments** | **Platform parity demand**. RISC-V growing in edge/embedded (Sipeed's core market). Suggests need for CI coverage on non-x64 architectures. |
| 3 | **[#2720](https://github.com/sipeed/picoclaw/issues/2720)** — Stale PID crash loop | **7 comments** | **Reliability at scale**. Production deployments hitting PID reuse edge case. Fix PR exists ([#2813](https://github.com/sipeed/picoclaw/pull/2813)) but **unmerged since May 7**. |

**Underlying community needs**: 
- **Safety without friction** — guards must understand command semantics, not just regex
- **Embedded/edge readiness** — RISC-V support aligns with Sipeed hardware business
- **Production hardening** — PID management, crash recovery for daemon deployments

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available? |
|----------|-------|--------|--------------|
| 🔴 **High** | **[#2720](https://github.com/sipeed/picoclaw/issues/2720)** — Stale PID causes infinite crash loop | Open, stale | **Yes**: [#2813](https://github.com/sipeed/picoclaw/pull/2813) (unmerged) |
| 🟡 **Medium** | **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** — `guardCommand` false blocks legitimate commands | Open, stale | No dedicated PR; needs architectural fix |
| 🟡 **Medium** | **[#2887](https://github.com/sipeed/picoclaw/issues/2887)** — RISC-V .deb non-functional with OpenAI | Open | No PR identified |
| 🟡 **Medium** | **[#2796](https://github.com/sipeed/picoclaw/issues/2796)** — History only shows last user message in multi-message turns | Open, stale | No PR; likely frontend/history compression logic |
| 🟢 **Low** | **[#2941](https://github.com/sipeed/picoclaw/issues/2941)** — Default config seeds invalid model ID (`claude-sonnet-4.6` vs `claude-sonnet-4-6`) | Open, stale | **Yes**: [#2942](https://github.com/sipeed/picoclaw/pull/2942) (unmerged) |
| 🟢 **Low** | **[#2939](https://github.com/sipeed/picoclaw/issues/2939)** — `temperature` deprecated for `claude-opus-4-7` | Open, stale | **Yes**: [#2940](https://github.com/sipeed/picoclaw/pull/2940) (unmerged); **superseded by #2982 for Bedrock** |

**Critical gap**: Three fix PRs ([#2813](https://github.com/sipeed/picoclaw/pull/2813), [#2940](https://github.com/sipeed/picoclaw/pull/2940), [#2942](https://github.com/sipeed/picoclaw/pull/2942)) for known bugs are **stale and unmerged**, suggesting reviewer bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in v0.3.0 |
|--------|--------|----------------------|
| **Agent-to-agent collaboration bus** | **[#2937](https://github.com/sipeed/picoclaw/pull/2937)** — Per-agent mailboxes, threads, permission-aware routing | **High** — Large, well-structured PR; aligns with multi-agent trend. Risk: complexity, needs thorough review |
| **NEAR AI Cloud provider** | **[#2917](https://github.com/sipeed/picoclaw/pull/2917)** — TEE-capable models, decentralized AI | Medium — Niche but growing; TEE narrative strong for privacy |
| **Empty LLM response retry** | **[#2983](https://github.com/sipeed/picoclaw/pull/2983)** | **High** — Small, targeted reliability fix; likely merges soon |
| **Cron get/update** | **[#2977](https://github.com/sipeed/picoclaw/pull/2977)** | ✅ **Shipped** |

**Predicted v0.2.9 scope**: Provider compatibility (Anthropic/Bedrock temperature), cron enhancements, token optimization. **v0.3.0 preview**: Agent collaboration if [#2937](https://github.com/sipeed/picoclaw/pull/2937) lands.

---

## 7. User Feedback Summary

### 😤 Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Safety guards too aggressive** | #1042 — curl blocked for "path traversal" in URL query params | High — breaks common workflows |
| **Model-specific config fragility** | #2941, #2939, #2982 — Anthropic/Bedrock IDs and parameters keep changing | Medium — maintenance burden on users |
| **Platform support gaps** | #2887 — RISC-V .deb non-functional | Medium — core to Sipeed's hardware audience |
| **History/data loss** | #2796 — prior messages invisible | Medium — trust issue for conversation review |

### 😊 Satisfaction Drivers
- **Token cost reduction** (#2781 merged) — direct financial impact
- **Cron tool maturation** (#2977) — agents can self-manage scheduling more robustly

### Use Case Signals
- **Embedded/edge deployment** (RISC-V, PID file daemon mode)
- **Multi-agent orchestration** (#2937)
- **Chinese notification ecosystem** (SC3Bot, though unmerged)

---

## 8. Backlog Watch

### ⚠️ Needs Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[#2813](https://github.com/sipeed/picoclaw/pull/2813)** — PID identity verification fix | 25 days | **Production crash loops** | Merge or request changes |
| **[#2940](https://github.com/sipeed/picoclaw/pull/2940)** — Omit temperature for claude-opus-4-7 | 7 days | API breakage for Anthropic users | Merge (Bedrock fix #2982 already in; need parity) |
| **[#2942](https://github.com/sipeed/picoclaw/pull/2942)** — Hyphenated model ID default | 7 days | First-run failure for new Anthropic users | Trivial fix; should merge |
| **[#2937](https://github.com/sipeed/picoclaw/pull/2937)** — Agent collaboration bus | 8 days | Large feature; may bit-rot | Schedule review or provide feedback |
| **[#2917](https://github.com/sipeed/picoclaw/pull/2917)** — NEAR AI provider | 11 days | Community provider addition | Review for scope/compliance |
| **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** — guardCommand regex | 90 days | Chronic user friction | Assign owner; likely needs parser rewrite |

**Meta-concern**: "Stale" label applied aggressively to items <30 days old. May discourage contributors. Consider adjusting stale bot thresholds or adding "awaiting-review" exemption.

---

*Digest generated from GitHub activity 2026-06-01. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-02

## 1. Today's Overview

NanoClaw saw moderate development activity over the past 24 hours with **8 tracked items** (3 issues, 5 PRs) indicating active community engagement around production stability concerns. No new releases were published. The project is currently in a **stabilization phase** with heavy focus on agent-runner reliability, container infrastructure fixes, and A2A (agent-to-agent) communication robustness. Two critical crash-loop and timeout bugs were reported and are already receiving community fixes. The contributor base appears responsive, with same-day PRs opened for reported issues.

---

## 2. Releases

**No new releases** — Version unchanged. Last release timeline not available from current data.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|:---|:---|:---|
| [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) | Browser scraping sidecar in v2 container | **Infrastructure expansion** — Enables web scraping capabilities within containerized agent environments |

### Closed Issue

| Issue | Resolution |
|:---|:---|
| [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) | **High-priority A2A routing bug fixed** — `findSessionByAgentGroup` was incorrectly routing replies to newest session instead of correct channel context in multi-channel agent groups. Recency-based SQL query (`ORDER BY created_at DESC LIMIT 1`) replaced with proper channel-aware routing. |

---

## 4. Community Hot Topics

### Most Critical: Self-Healing Crash Loops ([#2669](https://github.com/nanocoai/nanoclaw/issues/2669) → [#2670](https://github.com/nanocoai/nanoclaw/pull/2670))

**Reporter/Fixer:** `ddaniels` (same-day fix PR)

| Aspect | Detail |
|:---|:---|
| **Root cause** | Corrupt resumed transcripts with unmodifiable `thinking`/`redacted_thinking` blocks trigger 400 errors from Claude API |
| **Failure mode** | `isSessionInvalid` recovery never fires because SDK surfaces 400 as **result event**, not thrown exception |
| **Impact** | Session permanently stuck in tight crash-loop; requires manual intervention |
| **Fix approach** | PR #2670 adds explicit detection and transcript sanitization before resume |

**Underlying need:** Production-grade fault isolation — users need agents that degrade gracefully, not require manual pod restarts.

### Provider Resilience Architecture ([#2666](https://github.com/nanocoai/nanoclaw/pull/2666))

**Author:** `dtreskunov`

| Aspect | Detail |
|:---|:---|
| **Scope** | Rollback, replay, in-turn acknowledgment, friendly fallback for LLM provider failures |
| **Dependency chain** | Blocked on [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) (rootless Podman) |
| **Significance** | Indicates maturity push toward enterprise SLAs |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) | Open | [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) | **Crash-loop forever** on corrupt resume; no self-healing |
| **🟠 High** | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) | Open | **None yet** | **30-minute hung session** on blocked MCP tool; no per-tool timeout |
| **🟡 Medium** (resolved) | [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) | Closed | N/A | A2A reply misrouting in multi-channel groups |

### Stability Assessment

**Concerning pattern:** Two independent failure modes (#2669, #2668) both result in **session stuckness** — one unbounded in time (crash-loop), one unbounded in duration (30-min hang). This suggests the agent-runner's failure boundary design needs systematic review. The heartbeat mechanism (`/workspace/.heartbeat`) only updates between stream events, leaving blind spots during synchronous tool execution.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Per-tool timeouts** | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) | **High** — Small surface area, critical for production; likely fast-tracked |
| **Provider failure recovery framework** | [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) | **Medium** — Large PR, dependency chain, but enterprise-critical |
| **Rootless container security** | [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) | **High** — Blocks #2666, security hardening trend |
| **Slash command robustness** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | **Medium** — UX polish, 3+ weeks old |

**Predicted vNext focus:** Reliability engineering (timeouts, crash recovery, provider resilience) over feature expansion.

---

## 7. User Feedback Summary

### Explicit Pain Points

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Production operability** | Crash-loops require manual intervention | Blocking adoption |
| **Observability gaps** | No visibility into hung tool calls during 30-min window | Operational risk |
| **Container security friction** | Rootless Podman + root user conflicts with Claude Code permissions model | Deployment complexity |

### Implicit Signals

- **Same-day fix PRs** (#2670 for #2669) indicate contributors are *also* operators feeling production pain
- **No 👍 reactions** on issues suggests small but deeply engaged user base (not mass-market yet)
- **A2A multi-channel bug** (#2331) reveals advanced use cases: multi-agent orchestration in complex channel topologies

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) — Unknown slash commands as normal chat | **25 days** (2026-05-08) | Stale; merge conflicts likely | Maintainer review for low-risk UX fix |
| [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) fix follow-up | Resolved but pattern may recur | **A2A routing logic** may need broader audit | Consider adding channel-aware session selection tests |

### Attention Required

- **#2668 has no fix PR** — 30-minute timeout is a clear production SLA violation; community or maintainer should prioritize
- **#2666/#2667 dependency chain** — Risk of merge conflicts if #2667 lingers; `dtreskunov` has cross-PR coordination burden

---

*Digest generated from GitHub activity 2026-06-01 → 2026-06-02. Data source: github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-02

---

## 1. Today's Overview

NullClaw exhibits minimal activity today with only a single open pull request and zero issues in any state. The project appears to be in a stable maintenance phase with no urgent fires requiring community attention. The sole active contribution targets a specific Telegram UX friction point—typing indicator visibility during callback processing—suggesting incremental polish rather than architectural work. With no releases, no merged changes, and no open issues, this is a quiet day indicative of either a mature codebase or temporarily reduced development velocity. Project health reads as stable but not actively accelerating.

---

## 2. Releases

**No new releases** — NullClaw has not published any version today.

---

## 3. Project Progress

**No merged or closed PRs today.**

| PR | Status | Impact |
|---|---|---|
| [#943 fix(telegram): show typing indicator during callback-query processing](https://github.com/nullclaw/nullclaw/pull/943) | **Open** | Pending — addresses UX gap where Telegram inline button interactions feel unresponsive during agent processing |

This PR, if merged, would close [#942](https://github.com/nullclaw/nullclaw/issues/942). The fix targets a specific Telegram Bot API behavior: `callback_query` handlers previously failed to trigger the typing indicator that users expect during 5–30 second model inference delays. This is a quality-of-life improvement for conversational agent deployments.

---

## 4. Community Hot Topics

**Most active (and only) PR:** [#943](https://github.com/nullclaw/nullclaw/pull/943)

| Metric | Value |
|---|---|
| Author | @raskevichai |
| Age | 1 day |
| Engagement | 0 comments, 0 reactions |

**Underlying need analysis:** The PR description reveals a critical UX pattern for production AI assistants — **perceived responsiveness**. Users pressing inline buttons in Telegram experienced "complete silence" during processing, creating abandonment risk. The contributor identified that regular text messages trigger typing indicators automatically, but `callback_query` paths bypass this. This signals that NullClaw's Telegram adapter may have inconsistent platform-native behavior across interaction modalities. The community need is **predictable, platform-appropriate feedback loops** for all user input types.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|---|---|---|---|
| **Medium** | [#942](https://github.com/nullclaw/nullclaw/issues/942) Telegram typing indicator missing on callback queries | Open | **Yes** — PR [#943](https://github.com/nullclaw/nullclaw/pull/943) pending review |

**No new bugs reported today.** The only stability-relevant item is the above UX-class bug, which affects user trust but not system crashes. No regressions, security issues, or critical failures identified in 24h window.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests opened today.**

**Inferred roadmap signals from PR #943:**

| Signal | Likelihood in Next Version |
|---|---|
| Telegram platform parity improvements (consistent UX across message types) | **High** — active PR suggests maintainer priority |
| Broader "perceived performance" enhancements (skeleton loaders, progress indicators for other platforms) | Medium — pattern may extend to Discord, Slack adapters |
| Callback query handler refactoring for better async lifecycle management | Medium — typing indicator fix may expose deeper architectural needs |

---

## 7. User Feedback Summary

**No direct user feedback captured in issues today.**

**Derived pain points from PR #943 context:**

| Pain Point | Evidence | Affected Use Case |
|---|---|---|
| Uncertain if agent received input | "chat completely silent" during processing | Interactive multi-step workflows (forms, `nc_choices` selections) |
| Inconsistent feedback across interaction modes | Typing works for text, not buttons | Production deployments where user retention matters |

**Satisfaction note:** The contribution itself (community member identifying and fixing platform-specific UX gap) suggests engaged users invested in production readiness.

---

## 8. Backlog Watch

**No long-unanswered items visible in today's data** — zero total issues and the sole PR is only 1 day old.

**Recommended maintainer attention:**

| Item | Action Needed | Risk if Neglected |
|---|---|---|
| [#943](https://github.com/nullclaw/nullclaw/pull/943) | Review, test, merge or request changes | Small PR backlog accumulation; contributor momentum loss |

Given the project's zero-issue state, maintainers may want to verify whether issue tracking is actively used or if discussion/Discord channels absorb user reports. The absence of any open issues (even historical) is atypical for an active open-source project and may warrant process review.

---

*Digest generated from NullClaw GitHub data for 2026-06-02. All links reference `github.com/nullclaw/nullclaw`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-02

## 1. Today's Overview

IronClaw saw **exceptionally high development velocity** on 2026-06-01 with **47 PRs updated** (33 merged/closed, 14 open) and **12 issues updated** (11 open, 1 closed). Activity is heavily concentrated in the **"Reborn" architecture overhaul** — a stateless, cloud-native agent runtime — with parallel work on **event streaming**, **trigger infrastructure**, **OAuth integrations**, and **capability porting**. No new releases were cut. The project shows strong maintainer throughput but also reveals **growing architectural debt** as Reborn's internals (compaction, error handling, checkpointing) are being actively debugged while new surface features ship. The 5-day-old nightly E2E failure (#4108) remains unresolved, suggesting test infrastructure strain.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (33 total; key highlights)

| PR | Author | What Shipped |
|:---|:---|:---|
| [#4301](https://github.com/nearai/ironclaw/pull/4301) | henrypark133 | **Trigger poller core** — backend-agnostic `TriggerPollerWorker::tick_once()` for Reborn scheduled triggers with injected ports for prompt materialization and trusted fire submission |
| [#4306](https://github.com/nearai/ironclaw/pull/4306) | serrrfirat | **Provider capability input validation** — JSON Schema validation after coercion, before WASM dispatch; closes schema bypass vulnerability |
| [#4305](https://github.com/nearai/ironclaw/pull/4305) | serrrfirat | **Progressive skill activation disclosure** — filters model-selected skills by requested names before loading full SKILL.md bodies; aligns local-dev context budget with 6000-token legacy limit |
| [#4297](https://github.com/nearai/ironclaw/pull/4297) | serrrfirat | **GSuite OAuth setup/recovery** — Google-specific auth routes with PKCE, Reborn serve/runtime config wiring, full test coverage |
| [#4293](https://github.com/nearai/ironclaw/pull/4293) | serrrfirat | **Surface activated GSuite capabilities to model** — dynamic secret visibility without static grants, Google API network policy, regression coverage; includes **DB migration** |
| [#4300](https://github.com/nearai/ironclaw/pull/4300) | serrrfirat | **Notion OAuth provider** — replaces Google-only adapter with shared host-mediated OAuth client, data-driven provider composition |
| [#4292](https://github.com/nearai/ironclaw/pull/4292) | henrypark133 | **Trigger materialization turn-state seams** — `TriggerPromptMaterializer` port, `active_run_ref_state` classification for poller integration |
| [#4280](https://github.com/nearai/ironclaw/pull/4280) | serrrfirat | **Full GitHub capabilities in Reborn** — expands from issue-only to full v1 surface, host-stamped invocation context, auth behind host HTTP egress; includes **DB migration** |
| [#4299](https://github.com/nearai/ironclaw/pull/4299) | serrrfirat | **Extension manifest hash migration** — auto-migrates bundled extension manifests on startup instead of hard-failing after binary updates |
| [#3899](https://github.com/nearai/ironclaw/pull/3899) | ilblackdragon | **Reborn budgets end-to-end** — real token usage in `LoopModelResponse`, cost attribution, provider token tracking, budget enforcement |
| [#4277](https://github.com/nearai/ironclaw/pull/4277) | henrypark133 | **Product outbound orchestration seam** — policy-validated outbound helpers, verified reply targets, delivery/failure routing |
| [#4295](https://github.com/nearai/ironclaw/pull/4295) | serrrfirat | **Gate cancellation terminal state** — stops WebUI returning to processing after denied/cancelled gates, clears stale pending state |

### Open PRs Advancing

| PR | Author | Status |
|:---|:---|:---|
| [#4308](https://github.com/nearai/ironclaw/pull/4308) | henrypark133 | **Trigger poller harness coverage** (XL) — crash/replay behavior, active-run cleanup fairness, cursor-based scans across libSQL/PostgreSQL |
| [#4307](https://github.com/nearai/ironclaw/pull/4307) | serrrfirat | **WebUI v2 extension registry management** — install/activate/remove/setup routes with `LifecyclePackageRef` |
| [#4304](https://github.com/nearai/ironclaw/pull/4304) | henrypark133 | **Runtime context prompt stage plan** — capability-scoped context in Reborn prompt bundles |
| [#4294](https://github.com/nearai/ironclaw/pull/4294) | italic-jinxin | **OAuth (Google/GitHub) on WebUI v2** — production wiring for previously test-only auth router |
| [#4286](https://github.com/nearai/ironclaw/pull/4286) | serrrfirat | **NEAR AI credit exhaustion surfacing** — maps payment failures through to user-visible "out-of-credits" messages |
| [#4302](https://github.com/nearai/ironclaw/pull/4302) | thisisjoshford | **Docs: reconcile crate AGENTS.md maps** — accuracy pass, no behavior change |
| [#4298](https://github.com/nearai/ironclaw/pull/4298) | octo-patch | **MiniMax default model upgrade to M3** |
| [#4178](https://github.com/nearai/ironclaw/pull/4178) | hanakannzashi | **Feishu websocket event intake** — long-connection binary protobuf frame handling |

---

## 4. Community Hot Topics

**Most active by engagement:**

| Item | Comments | Topic | Analysis |
|:---|:---|:---|:---|
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | **6 comments** | EventStreamManager for durable projection fanout | **Closed** — foundational Reborn infrastructure; high cross-reference count (9 linked issues) shows this was a coordination hub for event streaming architecture |

**Emerging hot cluster: Reborn compaction/agent loop correctness**

Five issues opened **same day** by `henrypark133` reveal intense internal debugging of Reborn's core state management:

| Issue | Link | Core Concern |
|:---|:---|:---|
| #4314 | [nearai/ironclaw#4314](https://github.com/nearai/ironclaw/issues/4314) | Dead milestone `CompactionLeakDetected` — emit or remove |
| #4313 | [nearai/ironclaw#4313](https://github.com/nearai/ironclaw/issues/4313) | Compaction milestone payload schema mismatch with live enums |
| #4312 | [nearai/ironclaw#4312](https://github.com/nearai/ironclaw/issues/4312) | Compaction progress invisible to users (looks like stall) |
| #4311 | [nearai/ironclaw#4311](https://github.com/nearai/ironclaw/issues/4311) | Budget governance failures misclassified as context-overflow |
| #4310 | [nearai/ironclaw#4310](https://github.com/nearai/ironclaw/issues/4310) | Context-shrink retry not actually shrinking |
| #4309 | [nearai/ironclaw#4309](https://github.com/nearai/ironclaw/issues/4309) | Compaction summary durability vs. checkpoint failure race |

**Underlying need:** The Reborn agent loop's **compaction subsystem** (state summarization to manage context windows) has **semantic gaps between design, implementation, and user-facing behavior**. These issues suggest the team is doing **post-hoc design reconciliation** — compressing what should have been architecture review into rapid issue filing.

---

## 5. Bugs & Stability

| Severity | Issue | Link | Description | Fix PR? |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | Nightly E2E failure (v2-engine) | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Full E2E suite failing since 2026-05-27; no comments, no assigned fix | **None visible** |
| **🟡 High** | Context-shrink retry ineffective | [#4310](https://github.com/nearai/ironclaw/issues/4310) | `ShrinkContext` emitted but not applied; retries rebuild same oversized prompt | None yet |
| **🟡 High** | Compaction summary/checkpoint race | [#4309](https://github.com/nearai/ironclaw/issues/4309) | Durable summary artifact outlives failed checkpoint; retry reconstructs stale range | None yet |
| **🟡 High** | Budget governance misclassified | [#4311](https://github.com/nearai/ironclaw/issues/4311) | Non-context budget failures become `ContextOverflow`, wrong recovery path | None yet |
| **🟠 Medium** | Unbounded conversation growth (ENGINE_V2) | [#4278](https://github.com/nearai/ironclaw/issues/4278) | All session messages as single JSON object; context window exhaustion | None yet |
| **🟠 Medium** | TriggerPollerWorker monolith | [#4303](https://github.com/nearai/ironclaw/issues/4303) | 2500-line file combining multiple concerns; acknowledged tech debt | [#4301](https://github.com/nearai/ironclaw/pull/4301) merged, [#4308](https://github.com/nearai/ironclaw/pull/4308) open for harness |

**Stability assessment:** The **nightly E2E failure is a red flag** — 5 days without comment suggests either (a) known flake being ignored, or (b) team capacity fully absorbed by Reborn integration. The **compaction issue cluster** indicates Reborn's core loop is **not yet production-hardened** despite surface features shipping rapidly.

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#4279](https://github.com/nearai/ironclaw/issues/4279) | Roadmap clarity for Reborn branch + cloud-native architecture | **High** — community demand for migration guidance; team may need to publish formal transition docs |
| [#4287](https://github.com/nearai/ironclaw/issues/4287) | OAuth login on WebUI (general) | **In progress** — [#4294](https://github.com/nearai/ironclaw/pull/4294) open for Google/GitHub; [#4297](https://github.com/nearai/ironclaw/pull/4297) merged for GSuite |
| [#4303](https://github.com/nearai/ironclaw/issues/4303) | Split TriggerPollerWorker | **High** — follow-up to merged #4301, #4308 open |
| [#4312](https://github.com/nearai/ironclaw/issues/4312) | Live compaction progress in WebUI | **Medium-High** — user-visible stall is UX regression; small surface area |
| [#4278](https://github.com/nearai/ironclaw/issues/4278) | ENGINE_V2 conversation growth limits | **Medium** — architectural, may be Reborn-only fix |

**Predicted next release themes:** OAuth completion (Notion + general availability), trigger infrastructure stabilization, compaction UX visibility, and **critical E2E fix**.

---

## 7. User Feedback Summary

### Explicit user pain points

| User | Issue | Pain Point |
|:---|:---|:---|
| `liaoqianchuan` | [#4279](https://github.com/nearai/ironclaw/issues/4279) | **Uncertainty about Reborn roadmap** — wants clarity on feature parity, migration path, cloud-native deployment guidance |
| `liaoqianchuan` | [#4278](https://github.com/nearai/ironclaw/issues/4278) | **ENGINE_V2 scalability concern** — unbounded conversation growth, context window exhaustion, single JSON storage |
| `italic-jinxin` | [#4287](https://github.com/nearai/ironclaw/issues/4287) | **OAuth login incomplete** — SPA renders providers but no production wiring |

### Inferred dissatisfaction

- **Reborn "looks stalled" during compaction** (#4312) — users cannot distinguish between healthy long operation and failure
- **Extension updates break startup** (fixed in #4299, but affected users before fix)

### Satisfaction signals

- Strong engagement with Reborn architecture direction ("impressed by shift to stateless agent model")
- Active community exploring `reborn-integration` branch

---

## 8. Backlog Watch

| Issue/PR | Age | Why It Needs Attention |
|:---|:---|:---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | **5 days** | Only automated report, zero human response; blocks release confidence |
| [#4279](https://github.com/nearai/ironclaw/issues/4279) Reborn roadmap inquiry | **1 day** | High-engagement user, legitimate migration planning need; no maintainer reply |
| [#4278](https://github.com/nearai/ironclaw/issues/4278) ENGINE_V2 unbounded growth | **1 day** | Architectural scalability concern from same engaged user; may affect Reborn design if not addressed |
| [#4303](https://github.com/nearai/ironclaw/issues/4303) TriggerPollerWorker split | **1 day** | Acknowledged 2500-line tech debt; has follow-up PR but issue itself needs triage/assignment |

**Maintainer attention gap:** The **E2E failure silence** is the most concerning — it suggests either test desensitization or capacity crisis. The **two issues from `liaoqianchuan`** represent a **power user doing pre-adoption diligence**; slow response risks losing an early adopter willing to engage deeply with Reborn architecture.

---

*Digest generated from GitHub activity 2026-06-01 → 2026-06-02. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-02

## 1. Today's Overview

LobsterAI (NetEase Youdao's open-source AI agent/personal AI assistant) showed **high development velocity** on June 1, 2026, with 12 PRs updated (11 merged/closed, 1 open) and a fresh release cut. The project is in active feature delivery mode, centered on the **Kit (Expert Suite) ecosystem** and **Cowork conversation management**. Community interaction remains limited—only 1 new issue surfaced, and it reflects a commercial/business model concern rather than technical feedback. No external contributor PRs were merged today; all activity came from core team members (@fisherdaddy, @btc69m979y-dotcom, @liuzhq1986).

---

## 2. Releases

### [LobsterAI 2026.6.1](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.1) — New Release

| Attribute | Detail |
|-----------|--------|
| **Date** | 2026-06-01 |
| **Key Deliverables** | Expert Kit Store, Plugin Update Checking, MCP Fix |

**What's Changed:**
- **feat: Expert Kit Store and Conversation Integration** ([#2060](https://github.com/netease-youdao/LobsterAI/pull/2060)) by @btc69m979y-dotcom — Core marketplace infrastructure for discoverable, installable expert kits with conversational integration
- **feat: Plugin Update Check for npm/clawhub Sources** ([#2069](https://github.com/netease-youdao/LobsterAI/pull/2069)) by @btc69m979y-dotcom — Automated version checking against npm and ClawHub registries
- **fix(mcp):** [description truncated in source] — MCP-related stability fix

**Breaking Changes / Migration Notes:** None explicitly documented. The Kit Store introduces new Redux state shape; existing plugin installations should migrate automatically.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total)

| PR | Author | Area | Summary | Impact |
|:---|:---|:---|:---|:---|
| [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090) | @fisherdaddy | Multi-area release | **Release 2026.5.28** — 73 commits merging `release/2026.5.28` to `main` | Major version consolidation |
| [#2089](https://github.com/netease-youdao/LobsterAI/pull/2089) | @fisherdaddy | renderer, main, openclaw | Add MiniMax M3 model; update BYOK default context windows | Model ecosystem expansion |
| [#2088](https://github.com/netease-youdao/LobsterAI/pull/2088) | @fisherdaddy | renderer | Update Kits UI | Visual polish for marketplace |
| [#2087](https://github.com/netease-youdao/LobsterAI/pull/2087) | @fisherdaddy | renderer, cowork | Optimize kits | Performance/stability refinements |
| [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | @fisherdaddy | Multi-platform | **Fix WeChat bug during updates/reinstalls** | Critical IM stability |
| [#2085](https://github.com/netease-youdao/LobsterAI/pull/2085) | @liuzhq1986 | renderer, main, cowork | **feat(cowork): Add local conversation forking** | Major UX feature — session branching |
| [#2084](https://github.com/netease-youdao/LobsterAI/pull/2084) | @btc69m979y-dotcom | renderer | **fix(kits): Confirm before uninstalling kits** | Safety guardrail |
| [#2083](https://github.com/netease-youdao/LobsterAI/pull/2083) | @btc69m979y-dotcom | renderer, main, cowork | **feat(kits): Localize installed skill descriptions** | i18n infrastructure for Kit ecosystem |
| [#2082](https://github.com/netease-youdao/LobsterAI/pull/2082) | @fisherdaddy | main | Add diagnostic logs | Observability improvement |
| [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | @liuzhq1986 | renderer, main, cowork, artifacts | **fix(artifacts): Show errors for missing local files** | Clear user-facing error handling |
| [#2080](https://github.com/netease-youdao/LobsterAI/pull/2080) | @fisherdaddy | Multi-area | Optimize kits and upload file UI | UX polish |

**Feature Advancement Themes:**
1. **Kit Ecosystem Maturation** (4 PRs): Store → Installation → Uninstall safety → Localization → UI optimization
2. **Cowork Conversation Management** (2 PRs): Local forking with context preservation
3. **Platform Stability**: WeChat fix, artifact error handling, logging

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) — "订阅" (Subscription) | 1 comment, 0 reactions | **Only active issue**; user reports 5,500 subscription credits expired without use at month-end |

**Underlying Need Analysis:**
- The issue reveals a **business model friction point**: time-bounded credit expiration creates user distrust
- User tone ("来搞笑的吧???") indicates surprise and perceived unfairness—suggests poor communication of terms
- No maintainer response yet; risk of churn if subscription mechanics aren't clarified or adjusted
- **Not actionable as code**, but signals monetization strategy may need UX transparency improvements

**No highly-commented PRs today** — all merged PRs had `undefined` comment counts, indicating streamlined internal review process.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **High** | WeChat update/reinstall bug ([#2086](https://github.com/netease-youdao/LobsterAI/pull/2086)) | **Fixed** | Platform-specific failure during app updates/reinstalls on Windows; could block IM integration entirely |
| **Medium** | Artifact missing local file errors ([#2073](https://github.com/netease-youdao/LobsterAI/pull/2073)) | **Fixed** | Silent failures when generated file links become stale; now shows clear toast messages |
| **Medium** | Unintentional kit uninstallation ([#2084](https://github.com/netease-youdao/LobsterAI/pull/2084)) | **Fixed** | No confirmation dialog = accidental data loss risk |
| **Low** | MCP-related fix in 2026.6.1 release | **Fixed** | Details truncated; likely protocol-level stability |

**Regressions:** None reported today.

**Open Risk:** PR [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) (stale, open since April 4) addresses IM duplicate validation—unmerged but marked stale; potential for duplicate bot instances causing message processing conflicts.

---

## 6. Feature Requests & Roadmap Signals

**Implicit Signals from Today's Merges:**

| Predicted Near-Term Feature | Evidence |
|:---|:---|
| **Kit Store v2** (ratings, reviews, paid kits?) | Rapid iteration on marketplace UX; localization infrastructure suggests global audience |
| **Cloud conversation forking/sync** | Local forking landed; natural extension to cross-device sync |
| **Plugin dependency management** | Update checking exists; auto-update and rollback likely next |
| **More BYOK model providers** | MiniMax M3 added; pattern suggests continuous model expansion |
| **Enhanced i18n (beyond zh/en)** | Skill description localization framework established |

**No explicit user feature requests** in today's data—project is primarily **internally driven** by NetEase Youdao team.

---

## 7. User Feedback Summary

| Dimension | Assessment |
|:---|:---|
| **Technical Satisfaction** | Neutral-to-positive (no bug reports, active feature delivery) |
| **Commercial Trust** | **Negative** — credit expiration issue (#2081) threatens subscription model credibility |
| **Feature Engagement** | High (Kit ecosystem suggests users are expected to build/buy extensions) |
| **Communication Gap** | User unaware of credit terms until expiry; needs in-app transparency |

**Key Pain Point:** Subscription value proposition undermined by rigid expiration policy without usage-based rollover or clear warnings.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) — IM duplicate validation | **58 days** (since 2026-04-04) | Medium | Merge or close; addresses real data integrity issue for DingTalk/Feishu/QQ multi-instance setups. Stale label suggests deprioritization, but no conflicts noted. |

**No other long-unanswered critical issues** visible in today's data. The single open issue (#2081) is fresh but requires **business team response**, not engineering.

---

## Project Health Scorecard

| Metric | Rating | Note |
|:---|:---|:---|
| Development Velocity | ⭐⭐⭐⭐⭐ | 11 PRs merged, release shipped |
| Code Quality Process | ⭐⭐⭐⭐☆ | ESLint, TypeScript checks enforced; undefined comment counts suggest light review |
| Community Responsiveness | ⭐⭐⭐☆☆ | Only 1 issue, no maintainer response yet; PR #1464 stale |
| User Trust (Commercial) | ⭐⭐☆☆☆ | Credit expiry complaint unaddressed |
| Feature Completeness | ⭐⭐⭐⭐☆ | Kit ecosystem advancing rapidly; conversation management improving |

**Overall:** Technically healthy, commercially fragile. The engineering team is delivering aggressively on the "Expert AI Assistant" vision, but subscription mechanics need urgent attention to prevent user churn.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-02

## 1. Today's Overview

Moltis shows **moderate development velocity** with 4 PRs updated in the past 24 hours, of which 3 were merged/closed and 1 remains open under active review. No new releases were cut, and the issue tracker remains completely quiet with zero open or recently updated issues. The project appears to be in a **stable maintenance phase** focused on provider ecosystem expansion and reliability hardening rather than major feature development. The absence of issues suggests either a mature, stable codebase or limited community engagement—likely a combination given the small reaction counts on PRs. Core contributors s-salamatov and penso are driving most recent activity.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#1090](https://github.com/moltis-org/moltis/pull/1090) | **refactor(providers): use explicit OpenAI capabilities** by penso | **Architecture improvement**: Replaces fragile URL/name heuristic detection for OpenAI-compatible providers with explicit capability policies. Reduces provider misconfiguration bugs and enables safer custom provider defaults. Includes regression tests. |
| [#1031](https://github.com/moltis-org/moltis/pull/1031) | **Add NEAR AI Cloud provider** by PierreLeGuen | **Ecosystem expansion**: Adds TEE-aware (Trusted Execution Environment) AI inference provider with model discovery from public catalog. Signals positioning for privacy/security-conscious enterprise users. |
| [#1088](https://github.com/moltis-org/moltis/pull/1088) | **[codex] Handle OpenAI Codex final tool-call arguments** by s-salamatov | **Reliability fix**: Fixes edge case where OpenAI Codex streams final tool arguments without preceding deltas, preventing silent argument loss in agent tool execution. |

### Open PR Under Review

| PR | Description | Status |
|:---|:---|:---|
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | **Cap persisted tool results before rehydration** by s-salamatov | **Open** — Addresses memory/performance boundary for long-running agent sessions by limiting tool result history size across all chat modes (normal, streaming, retry, compaction, inspection). |

---

## 4. Community Hot Topics

**No active community discussions detected.** All PRs show `👍: 0` and `Comments: undefined` (no comments). This indicates:

- **Low community engagement** relative to development activity
- Decisions are likely made through core team coordination outside GitHub (Discord, internal chat, or synchronous review)
- No controversial changes requiring community debate

**Underlying need**: The project would benefit from visible discussion threads, particularly for architecture changes like #1090 that affect third-party provider integrations. The NEAR AI addition (#1031) could attract Web3/TEE-interested developers if documented with clear onboarding paths.

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix Status |
|:---|:---|:---|:---|
| **Medium** | [#1088](https://github.com/moltis-org/moltis/pull/1088) — Codex tool argument streaming | OpenAI Codex could silently drop final tool-call arguments when no streaming deltas preceded the `function_call_arguments.done` event | **Fixed** in #1088 |
| **Medium-Low** | [#1089](https://github.com/moltis-org/moltis/pull/1089) — Unbounded tool result growth | Long agent sessions risk memory exhaustion/performance degradation from unbounded `tool`/`tool_result` persistence | **Fix pending review** |

**No new bug reports filed today.** All stability work is proactive hardening.

---

## 6. Feature Requests & Roadmap Signals

**No explicit user feature requests** (zero issues). Inferred roadmap signals from merged PRs:

| Signal | Likely Priority | Rationale |
|:---|:---|:---|
| **TEE/verifiable inference support** | Medium-High | NEAR AI Cloud integration with TEE-aware recommendations suggests enterprise/security positioning |
| **Explicit provider capability system** | High | #1090 refactor indicates architectural commitment to scalable provider ecosystem |
| **Session memory management** | High | #1089 and compaction-related retry logic show focus on long-running agent reliability |
| **OpenAI Codex deep integration** | Medium | Dedicated handler for Codex-specific streaming behavior |

**Predicted for next version**: Session capping (#1089) merge, possible additional TEE providers following NEAR AI pattern, expanded capability policy coverage beyond OpenAI-compatible providers.

---

## 7. User Feedback Summary

**No direct user feedback available** — zero issues, zero PR comments, zero reactions.

**Inferred pain points from PR content**:
- **Provider configuration fragility**: #1090 explicitly replaces "URL/name behavior checks" that were evidently error-prone
- **Agent session longevity**: #1089 addresses practical limits of tool-heavy conversations—suggesting real-world usage hitting memory boundaries
- **Streaming edge cases**: #1088's synthetic delta generation implies Codex integration was broken for certain tool-calling patterns

**Satisfaction indicator**: Steady merge velocity (3/4 PRs closed) with focused, well-scoped changes suggests healthy development process. Low engagement may indicate either small user base or effective documentation reducing support burden.

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| [#1031](https://github.com/moltis-org/moltis/pull/1031) NEAR AI Cloud | ~11 days open before merge | Extended review period for provider addition | None — now merged; monitor for follow-up integration issues |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) Cap persisted tool results | 1 day open | **Currently awaiting review** — blocks session reliability improvements | Maintainer review needed; affects 6 chat code paths |

**No stale issues requiring attention** — issue tracker empty.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-06-02.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-02

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 50 issues and 35 PRs updated in the last 24 hours, indicating an active release cycle around v1.1.10. The project is stabilizing its v1.1.x branch while simultaneously preparing a **major v2.0.0 breaking refactor** ([PR #4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)). Community engagement is strong with 32 open/active issues, though the high ratio of open PRs (26/35) suggests a potential review bottleneck. Two releases shipped today—stable v1.1.10 and beta v1.1.10-beta.2—focusing on agent sub-spawning capabilities and UI fixes.

---

## 2. Releases

### [v1.1.10](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10) (Stable)
| Aspect | Detail |
|--------|--------|
| **New Features** | **Spawn Subagent tool** (`spawn_subagent`): Enables ephemeral in-workspace sub-agent execution for dynamic task delegation ([#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)); **Open Directory** tab in Coding Mode for local project reference |
| **Breaking Changes** | None documented |
| **Migration Notes** | Users upgrading from v1.1.7-1.1.9 should note that disabled built-in skills may reset to enabled (known issue [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807), fixed in this release per changelog) |

### [v1.1.10-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.2) (Pre-release)
| Aspect | Detail |
|--------|--------|
| **Fixes** | Website header styling; auto-continue video playback ([#4812](https://github.com/agentscope-ai/QwenPaw/pull/4812)); skill tag preservation and enable/disable state handling |
| **Target** | Early adopters testing skill state persistence fixes |

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Impact |
|----|--------|--------|
| [#4867](https://github.com/agentscope-ai/QwenPaw/pull/4867) | rayrayraykk | **Release orchestration**: Version bump to v1.1.10 with release notes |
| [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | wangfei010313 | **Performance**: `SharedMCPPool` reuses MCP servers across agents—fixes [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) where 300+ agents spawned hundreds of processes |
| [#4839](https://github.com/agentscope-ai/QwenPaw/pull/4839) | heyxiong22-lang | **Bug fix**: Eliminates `~`-prefixed ghost skill directories on Windows pip upgrades |

### Key Features Advancing

| PR | Status | Description |
|----|--------|-------------|
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | 🚧 **[WIP] Breaking Change** | **AgentScope 2.0.0 migration**—fundamental architectural refactor |
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | Under Review | Windows browser process tree cleanup + lock file removal |
| [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) | Under Review | Windows startup optimization (~40ms responsive time via lazy loading) |
| [#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) | Open | Feishu interactive card content extraction |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | Open | MiniMax M3 model support |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Status | Core Need |
|-------|----------|--------|-----------|
| [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) — Cron tasks interrupted by user messages sharing session | 9 | ✅ CLOSED | **Session isolation for background tasks**—users need reliable cron execution without user interaction interference |
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) — Trae-like per-conversation delete/rollback with file state management | 9 | ✅ CLOSED | **Version control for AI-generated changes**—users want granular undo beyond whole-sandbox reset |
| [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) — `person_stat_skill` not found despite SKILL.md configuration | 7 | 🔴 OPEN | **Skill discovery/debuggability**—documentation-to-execution gap in custom skills |
| [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) — Orphaned cron jobs persist after jobs.json update | 6 | ✅ CLOSED | **Configuration hot-reload reliability**—dynamic job management without restarts |

### Underlying Needs Analysis

- **Task reliability**: Cron/job system is a major friction point (3 of top 4 issues)
- **Developer experience**: Users want IDE-like features (rollback, version control, better debugging)
- **State management**: Confusion around `active_model`, context windows, and session boundaries

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Description |
|----------|-------|--------|-------------|
| 🔴 **Critical** | [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) — One invalid job crashes entire workspace | None yet | Single point of failure in `jobs.json` validation; no graceful degradation |
| 🔴 **Critical** | [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872) — New sessions load raw context without compression, infinite inflation | None yet | Memory/cost escalation risk; architecture-level context handling bug |
| 🟡 **High** | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) — MCP processes accumulate across restarts | [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) merged | **Fixed** via `SharedMCPPool` |
| 🟡 **High** | [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) — Browser processes/locks persist on Windows | [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) under review | Affects backup operations, cascading failures |
| 🟡 **High** | [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) — ACP protocol mismatch with Claude Code | None yet | Interoperability blocker for external agent delegation |
| 🟡 **High** | [#4880](https://github.com/agentscope-ai/QwenPaw/issues/4880) — Custom LiteLLM provider fails with Responses API routes | None yet | OpenAI compatibility gap for advanced models |
| 🟢 **Medium** | [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) — WeChat cron delivery fails with `ret=-3` | [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883), [#4884](https://github.com/agentscope-ai/QwenPaw/pull/4884) open | Channel routing bug for `share_session=false` |
| 🟢 **Medium** | [#4864](https://github.com/agentscope-ai/QwenPaw/issues/4864) — v1.1.9 silent failure on message send | ✅ CLOSED | Installation/runtime regression, resolved in v1.1.10 |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Model fallback chains** | [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) | Medium | Infrastructure reliability; aligns with existing `RetryChatModel`/`RoutingChatModel` patterns |
| **Agent-scoped web login accounts** | [#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859) | Medium | Multi-tenant deployments; security hardening |
| **Per-conversation version control** (Trae-like) | [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) | Medium-High | Strong user demand (9 comments, +1); competitive parity |
| **Silent shell execution on Windows** | [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) | High | Desktop UX polish; small scope |
| **Session restore on desktop restart** | [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) | High | Friction point for daily users |
| **Font scaling / accessibility** | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | Medium | Accessibility compliance; long-standing request |
| **Token usage visibility** | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | Medium-High | PR already under review; cost transparency trend |

### v2.0.0 Signals
The [AgentScope 2.0.0 refactor PR](https://github.com/agentscope-ai/QwenPaw/pull/4846) suggests major architectural changes incoming—contributors should monitor for breaking API changes.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Cron/job system fragility** | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653), [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649), [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835), [#4818](https://github.com/agentscope-ai/QwenPaw/issues/4818), [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | Critical—core automation use case |
| **Windows-specific issues** | [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844), [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839), [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777), [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) | High—desktop user base affected |
| **Context/session management confusion** | [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872), [#4871](https://github.com/agentscope-ai/QwenPaw/issues/4871), [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) | High—silent failures, memory issues |
| **Upgrade state loss** | [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) | Medium—recurring maintenance burden |

### Positive Signals
- **Spawn subagent** feature well-received for dynamic task delegation
- Strong community contribution (first-time contributors: [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772), [#4794](https://github.com/agentscope-ai/QwenPaw/pull/4794))
- Active channel ecosystem expansion (Feishu, Telegram, QQ, WeChat)

### Use Cases Emerging
- **Multi-agent enterprise deployments** (300+ agents, MCP sharing)
- **Desktop daily driver** (session restore, silent execution, font scaling)
- **Automation platform** (cron reliability, webhook integrations)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) — Font size, headless mode, clickable file paths | 24 days | Accessibility compliance; user retention | Triage for v1.2 or v2.0 |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) — Token usage visibility | 18 days | Cost transparency; competitive feature | Final review, merge decision |
| [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) — ACP protocol mismatch with Claude Code | 3 days | **Interoperability commitment** | Protocol spec clarification, assign owner |
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) — v2.0.0 refactor | New | **Roadmap communication** | Community migration guide, timeline |
| [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) — Model fallback chains | New | Infrastructure resilience | Design review, prioritize post-v2.0 |

### Review Bottleneck Indicator
26 open PRs vs. 9 merged/closed suggests **maintainer bandwidth constraints**. Consider:
- Expanding reviewer pool for non-critical PRs
- Automated CI/CD gates to reduce manual review load
- Clear contribution tiering (community vs. core team review paths)

---

*Digest generated from GitHub activity data for 2026-06-01/02. All links reference `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-02

## 1. Today's Overview

ZeptoClaw showed **high maintenance velocity** with 18 PRs updated in the last 24 hours, though 17 of these were batch-merged dependency updates rather than feature work. The sole open PR (#611) and active issue (#612) reveal a strategic tension: the project is aggressively pursuing binary size discipline (targeting ~7MB for its stripped Rust binary) but had to accept a temporary 7.5MB ceiling due to platform-specific size drift. No new releases were cut. Activity is concentrated around CI hardening and security hygiene rather than user-facing features, suggesting a **stability-focused phase** ahead of a potential milestone release.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (17 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #610 | qhkm | **fix(providers): keyword fallback must not claim unconfigured provider** — Cherry-picked fix from community contributor Sisuthros; resolves critical production bug where `infer_provider_name_for_model` returned unconfigured providers, causing 100% error rate on NIM-served Photon instances with `openai/gpt-oss-120b` | [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) |
| #592 | Sisuthros | *Original community PR* — Same fix as above, superseded by #610 due to rebase/CI issues | [PR #592](https://github.com/qhkm/zeptoclaw/pull/592) |
| #594 | qhkm | **Security: cleared RUSTSEC advisories** — Bumped `lettre` 0.11.22 and `diesel` 2.3.8 to resolve six new advisory entries that blocked all PRs via zero-tolerance `deny.toml` | [PR #594](https://github.com/qhkm/zeptoclaw/pull/594) |
| #604 | dependabot[bot] | `taiki-e/install-action` 2.77.3 → 2.78.2 | [PR #604](https://github.com/qhkm/zeptoclaw/pull/604) |
| #597 | dependabot[bot] | `EmbarkStudios/cargo-deny-action` 2.0.17 → 2.0.18 | [PR #597](https://github.com/qhkm/zeptoclaw/pull/597) |
| #603 | dependabot[bot] | `mail-parser` 0.11.2 → 0.11.3 | [PR #603](https://github.com/qhkm/zeptoclaw/pull/603) |
| #601 | dependabot[bot] | `uuid` 1.23.0 → 1.23.1 | [PR #601](https://github.com/qhkm/zeptoclaw/pull/601) |
| #598 | dependabot[bot] | `bcrypt` 0.19.0 → 0.19.1 | [PR #598](https://github.com/qhkm/zeptoclaw/pull/598) |
| #606 | dependabot[bot] | `tower-http` 0.6.8 → 0.6.10 | [PR #606](https://github.com/qhkm/zeptoclaw/pull/606) |
| #605 | dependabot[bot] | `clap` 4.6.0 → 4.6.1 | [PR #605](https://github.com/qhkm/zeptoclaw/pull/605) |
| #602 | dependabot[bot] | `@astrojs/starlight` 0.38.4 → 0.39.2 (`/landing/zeptoclaw/docs`) | [PR #602](https://github.com/qhkm/zeptoclaw/pull/602) |
| #600 | dependabot[bot] | `astro` 6.1.9 → 6.3.3 (`/landing/r8r/docs`) | [PR #600](https://github.com/qhkm/zeptoclaw/pull/600) |
| #599 | dependabot[bot] | `@astrojs/starlight` 0.38.3 → 0.39.2 (`/landing/r8r/docs`) | [PR #599](https://github.com/qhkm/zeptoclaw/pull/599) |
| #607 | dependabot[bot] | `astro` 6.1.6 → 6.3.1 (`/landing/zeptoclaw/docs`) | [PR #607](https://github.com/qhkm/zeptoclaw/pull/607) |
| #608 | dependabot[bot] | `eslint` 10.0.2 → 10.3.0 (`/panel`) | [PR #608](https://github.com/qhkm/zeptoclaw/pull/608) |
| #596 | dependabot[bot] | `rust` Docker image 1.93-slim-trixie → 1.95-slim-trixie | [PR #596](https://github.com/qhkm/zeptoclaw/pull/596) |
| #595 | dependabot[bot] | `debian` Docker image digest update (`trixie-slim`) | [PR #595](https://github.com/qhkm/zeptoclaw/pull/595) |

**Key advances:** Provider resolution reliability improved; security audit pipeline restored; CI toolchain modernized across Rust, Docker, GitHub Actions, and JavaScript documentation stacks.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| **#611** — Promote binary-size to PR gate at 7.5MB | Open, 0 comments, 0 reactions | [PR #611](https://github.com/qhkm/zeptoclaw/pull/611) |
| **#612** — Audit ~800KB binary-size drift, tighten gate to 7MB | Open, 0 comments, 0 reactions | [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) |

**Underlying needs:** Despite zero visible engagement, these items represent a **foundational infrastructure debate**. The maintainer (qhkm) is publicly negotiating with themselves between pragmatism (7.5MB ceiling to unblock CI) and strategic discipline (7MB target). The ~800KB drift from a 6.2MB low-water mark suggests either feature bloat or compiler/dependency inflation—critical for a project whose name ("Zepto-" prefix, implying 10⁻²¹ scale) signals extreme minimalism. The lack of community comments indicates either (a) trust in maintainer judgment, or (b) a contributor base not yet deep enough in systems Rust to engage on binary size optimization.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|:---|:---|:---|:---|
| **P1 — Critical (Production Impact)** | Provider keyword fallback claiming unconfigured providers → 100% error rate on NIM/Photon deployments | **Fixed** via #610/#592 | #610 (merged) |
| **P2 — High** | Binary size regression (~6.98MB current vs. 6.2MB historical low, ~800KB unexplained drift) | **Open, tracked** | #611 (partial mitigation), #612 (audit request) |
| **P2 — High** | RUSTSEC advisories blocking all CI (lettre, diesel) | **Fixed** | #594 (merged) |

**Stability assessment:** Two distinct risk patterns: (1) **logic bugs in provider inference** with direct production impact—now resolved; (2) **accumulating technical debt in binary size**, which threatens the project's core value proposition if unaddressed. The batch dependency updates reduce attack surface but do not address root causes of size growth.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** surfaced in today's data. However, roadmap signals emerge from infrastructure work:

| Signal | Likely Near-Term Priority |
|:---|:---|
| Binary-size gate institutionalization (#611-612) | **Performance engineering sprint** — likely LTO tuning, feature-gating, or dependency pruning |
| Provider inference hardening (#610) | **Multi-provider reliability** — better configuration validation, explicit provider-model binding |
| Security audit zero-tolerance policy | **Supply-chain security** — SBOM generation, reproducible builds, or sigstore integration |
| Astro/Starlight doc site updates | **Documentation refresh** — possibly ahead of a release announcement |

**Predicted next version focus:** A "performance & trust" release combining binary size wins, provider stability, and hardened CI—likely **v0.x or v1.0-beta** if semantic versioning applies.

---

## 7. User Feedback Summary

**No direct user feedback** (issues, discussions, or comment threads) present in today's data. Indirect signals:

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Silent misconfiguration failures** | #610's production impact on NIM-served Photon | High — users cannot detect unconfigured providers until runtime failure |
| **Deployment size constraints** | #612's 7MB strategic target | Moderate — implies edge/container deployment scenarios where MB matter |
| **CI fragility blocking contributions** | #594's repo-wide red status | Moderate — external contributors (Sisuthros) hit rebase/auth barriers |

**Satisfaction/dissatisfaction:** The Sisuthros contribution workflow (#592 → #610) reveals friction: original PRs from forks can fail due to CI secrets/OAuth limitations, requiring maintainer intervention. This may discourage external contribution.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#612** — Binary-size audit to 7MB target | 1 day (new, but strategic) | **Medium** — 7.5MB "temporary" ceiling risks becoming permanent without accountability | Maintainer commitment to root-cause analysis; community call for size profiling expertise |
| **#611** — 7.5MB gate merge decision | 1 day | **Low** — blocked by #612's explicit request for tighter target | Merge with documented tech-debt, or reject and demand 7MB compliance first |

**No long-unanswered critical items** — project appears well-tended with 1-day response cycles. The sole concern is whether #612 receives engineering time or lingers as aspirational.

---

*Digest generated from GitHub activity 2026-06-01 to 2026-06-02. All links: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-02

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 36 issues and 37 PRs active in the last 24 hours, though **no new releases** were cut. The project is in a **pre-release consolidation phase** for v0.8.0-beta-2, with the massive integration PR #6848 still open and accumulating fixes. Community engagement is strong with 8 closed issues and 13 merged/closed PRs, but the **24 open PRs** suggest a bottleneck around the beta-2 integration branch. Security and runtime stability dominate today's merged fixes, while long-term architectural work (WASI plugins, evaluation harness, multi-tenant gateway) is ramping up for post-beta cycles.

---

## 2. Releases

**No new releases.** The project remains on its last published version; v0.8.0-beta-2 is pending resolution of PR #6848.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total, selected highlights):

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | Yyukan | **fix(providers): omit temperature for kimi-k2 models** — Resolves [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) where `compatible.rs` hardcoded `temperature: 0.7` breaking Moonshot/Kimi models | **S1 blocker fix** for Kimi users |
| [#7031](https://github.com/zeroclaw-labs/zeroclaw/pull/7031) | Audacity88 | **fix(channels): redact Discord delivery failure targets** — Security hardening: prevents raw marker target leakage in error messages | Privacy/security improvement |
| [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) | Audacity88 | **fix(runtime): fall back before visible stream errors** — Restores stream-error recovery path from #4675, retrying non-streaming on early failures | Reliability for streaming users |
| [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) | Audacity88 | **fix(email): ignore blank SMTP credential overrides** — Closes [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881); blank `smtp_username/password` now falls back to shared credentials | **S1 blocker fix** for email channel |
| [#6974](https://github.com/zeroclaw-labs/zeroclaw/pull/6974) | Audacity88 | **fix(web_fetch): honor private DNS host allowlist** — Allows explicit `allowed_private_hosts` to bypass public-IP validation | Corporate/self-hosted enablement |
| [#6972](https://github.com/zeroclaw-labs/zeroclaw/pull/6972) | Audacity88 | **fix(tools): resolve image_info paths through policy** — Security: `image_info` now respects `PathGuardedTool` policy gates | Defense in depth |
| [#6931](https://github.com/zeroclaw-labs/zeroclaw/pull/6931) | Audacity88 | **fix(channels): restore date-only channel prompt context** — Restores #3271 recovery slice; changes prompt date context to date+UTC offset to reduce cache churn | Performance + correctness |
| [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) | Audacity88 | **feat(channels): define lean default channel bundle** — Narrows default build to ACP server, webhook, email, Telegram; stops binary bloat | **v0.7.6 release gate** |
| [#6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833) | h03-xydt | **feat(tools): add Jina AI as web_search provider** — New provider with 10M free requests/key, no CC required | User-facing capability expansion |

**Pattern:** Audacity88 is the dominant merger today (7 PRs), focusing on **security hardening, runtime reliability, and release gating** for v0.7.6/0.8.0.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | 8 | **Token consumption minimization via skill compilation** | Cost optimization at scale — users hitting LLM token limits/bills from verbose SKILL.md injection |
| [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | 6 | **Ollama Provider call failed when tools are needed** | Local-first deployment reliability — Ollama is critical for privacy-conscious/self-hosted users |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | 6 | **Discord Bot respond only in specific channels** | Multi-tenant bot hygiene — enterprise Discord deployments need isolation controls |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | 4 | **Gemini 400 — assistant tool_call before first user turn** | Google's strict API semantics vs. ZeroClaw's history serialization — provider compatibility gap |

### Analysis:
- **Cost control** (#5146) and **local model support** (#5962) reflect production deployment pressures
- **Channel governance** (#6378, #6345, #6350) shows WhatsApp/Discord/enterprise use cases maturing
- **Provider compatibility** (#6302, #7022→#7049) is a recurring tax from the "compatible provider" abstraction

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **S1** | [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) | **CLOSED** | ✅ [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | Kimi-k2.6 400 invalid temperature — hardcoded baseline |
| **S1** | [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881) | **CLOSED** | ✅ [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) | Blank SMTP overrides break email channel |
| **S1** | [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) | OPEN | ❌ | Delegate agents ignore `prompt_injection_mode`, always inject full skills |
| **S1** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | OPEN | ❌ | Ollama provider crashes when tools needed — session-killing |
| **S2** | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | OPEN | ❌ | Gateway cannot use PostgreSQL — `Cannot start a runtime from within a runtime` panic |
| **S2** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | OPEN | ❌ | WhatsApp LID-based contacts bypass `allowed-numbers`, silent message drops |
| **S2** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | OPEN | ❌ | Channel runtime replies bypass Fluent localization |
| **S2** | [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) | OPEN | 🔄 [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) | "Default model provider" credential fallback excision |

**Concerns:** 
- **Two S1 bugs remain open** with no linked fix PRs (Ollama tools, delegate skill injection)
- **PostgreSQL gateway support** (#6472) is a significant infrastructure blocker for production deployments
- **Silent failures** in WhatsApp (#6350) and localization gaps (#6548) degrade user trust

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.8.x | Signal Strength |
|:---|:---|:---|:---|
| **Agent evaluation harness (`zeroclaw eval`)** | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065), [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) | **High** — Phase 0 PR open | Strong: addresses "no shipped way to evaluate agent behavior" |
| **WASI Component Model / plugin interface** | [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | **Medium** — FND-001 foundation | Architectural; long-term but actively staffed |
| **Skill compilation / token minimization** | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | **Medium** — accepted, p2 | Cost pressure will force prioritization |
| **Per-channel reply throttling** | [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | **High** — in-progress, p1 | Enterprise WhatsApp deployments need this |
| **Real heartbeat tracking for daemon nodes** | [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | **Medium** — blocked | Depends on #6346/#6390 node CLI work |
| **Dashboard "Update ZeroClaw" button** | [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) | **High** — in-progress | Low-hanging UX win |
| **Multi-tenant Linq channel** | [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) | **High** — PR open | Enterprise gateway requirement |

**Prediction:** v0.8.0 will ship with the evaluation harness Phase 0, multi-tenant Linq, and dashboard update flow. WASI plugins and skill compilation are v0.9+ material.

---

## 7. User Feedback Summary

### Pain Points:
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Cost/Token bloat** | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) — "Every 'what's the weather' sends 400+ lines of SKILL.md" | High — recurring operational cost |
| **Local model fragility** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) — Ollama tool-calling crashes sessions | High — blocks self-hosted workflows |
| **Silent failures / invisible drops** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp LID messages dropped with no error | Critical — erodes trust |
| **Provider compatibility whack-a-mole** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) (Gemini), [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) (Kimi) | Medium — abstraction tax |
| **Enterprise governance gaps** | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) (Discord channels), [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) (throttling) | Medium — adoption blocker for teams |

### Positive Signals:
- **Jina AI integration** (#6827/#6833) — "great free tier, no credit card required" shows responsiveness to cost-sensitive users
- **Lean default channel bundle** (#6904) — acknowledges binary bloat concern
- **Evaluation harness** (#7065/#7067) — community-requested quality/observability tooling

---

## 8. Backlog Watch

### Issues needing maintainer attention (long-running, high-impact, stalled):

| Issue | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | ~2 months | accepted, p2, no-stale | **Cost explosion at scale** | Design review for skill compilation; no assignee |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | ~2 months | accepted, help wanted | **Standards alignment** (`.well-known` skills) | Community skill ecosystem depends on this |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | ~4 weeks | **blocked**, accepted | Production node monitoring | Unblock dependency: #6346/#6390 node CLI |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | ~4 weeks | accepted, p1, **follow-up** | Security architecture (auth middleware) | Tower/axum middleware implementation |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | ~2 weeks | in-progress | **Unbounded skill patches** — rate limit missing | Code path integration; tests exist but not wired |

### PR Bottleneck:
- **[#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)** — The v0.8.0-beta-2 integration PR (XL, 30+ labels) has been open since May 22 with **undefined comment count** (likely high). Known issues listed include fallback behavior rewiring. This is **blocking the beta tag** and creating queue pressure behind it.

---

*Digest generated from GitHub activity 2026-06-01/02. All links: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*