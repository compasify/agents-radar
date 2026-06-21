# OpenClaw Ecosystem Digest 2026-06-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-21 00:29 UTC

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

# OpenClaw Project Digest
**Date:** 2026-06-21

---

## 1. Today's Overview

OpenClaw shows **intense activity** with 500 issues and 500 PRs updated in the last 24 hours — an exceptionally high volume indicating a major triage and merge push. The project maintains **480 open issues** (96%) and **472 open PRs** (94.4%), with only 20 issues and 28 PRs closed/merged today. This closure rate (4%) is low relative to total volume, suggesting the maintainer team is highly active in review and labeling but bottlenecked on merging. No new releases were published today, and the most recent stable version in the issue tracker is **2026.6.5/2026.6.6**. The project remains in a **high-churn stability phase** with numerous P1 regressions clustered around session state, message delivery, and auth-provider integration.

---

## 2. Releases

**No new releases today.** The latest release remains the 2026.6.x series (references in issues to 2026.6.5 and 2026.6.6). Previous 2026.5.20 release introduced several performance regressions that remain open.

---

## 3. Project Progress

Today's merged/closed activity (28 PRs) advanced:

- **Codex integration**: PR #94833 [auto-merged] fixes timed-out app-server lane release
- **Telegram reply fix**: PR #95390 merges session-level transcript context for shared-channel replies
- **Cron whitespace key handling**: PR #95424 fixes local-LLM-parsed cron job key corruption
- **Doctor false warning fix**: PR #95393 resolves local memory embeddings false positive
- **Feishu bitable schema fix**: PR #94990 serializes valid TypeBox schemas for write tools
- **Gateway restart delivery**: PR #95154 writes unresumable notices to transcript for non-deliverable channels

Closed issues include #91949 (Anthropic `invalid_request_error` not triggering fallback) — a critical session-stability bug.

---

## 4. Community Hot Topics

### Most Active Issues (by Comments)

| Issue | Title | Comments | Reactions | Link |
|-------|-------|----------|-----------|------|
| #88838 | Track core session/transcript SQLite migration via accessor seam | 31 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/88838) |
| #85333 | `openclaw doctor --fix` 4-5x slower on 2026.5.20 vs 2026.5.19 | 13 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/85333) |
| #92201 | Embedded runner: Anthropic thinking signatures invalid on replay | 10 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/92201) |
| #86519 | Agent repeats identical replies 2-10x on Telegram after 5.20 | 10 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/86519) |
| #84583 | Cron announce triggers `EmbeddedAttemptSessionTakeoverError` | 9 | 👍3 | [Link](https://github.com/openclaw/openclaw/issues/84583) |

### Underlying Need Analysis

The **#88838 discussion (31 comments)** reveals strategic infrastructure work: the team is breaking a massive session/transcript SQLite migration into small reviewable PRs via branch-by-abstraction. This is a **healthy architectural decision** to avoid repeating the risk of prior full migrations that caused widespread regressions.

The **#85333 performance regression (13 comments)** shows clear user frustration: a `doctor --fix` command degrading from 55s to 229s+. The root cause — session snapshot path traversal — indicates a **fundamental performance design issue** in how session state is accessed, likely from the SQLite migration work.

### Most Active PRs (by Engagement)

| PR | Title | Comments | Status | Link |
|----|-------|----------|--------|------|
| #94707 | Add Slack relay mode for incoming messages | — | Needs proof | [Link](https://github.com/openclaw/openclaw/pull/94707) |
| #95424 | Fix cron whitespace-padded keys | — | Actively grinding | [Link](https://github.com/openclaw/openclaw/pull/95424) |
| #95432 | Suppress per-message finals across multi-message block streaming | — | New today | [Link](https://github.com/openclaw/openclaw/pull/95432) |
| #95278 | Avoid copying `process.env` in ingress queue state DB opens | — | **Automerge armed** | [Link](https://github.com/openclaw/openclaw/pull/95278) |

---

## 5. Bugs & Stability

### Critical (P1 — Session/Crash/Message Loss)

| Issue | Title | Has Fix PR? | Link |
|-------|-------|-------------|------|
| #92201 | Anthropic thinking signatures invalid on replay | **Yes — PR #95430** | [Link](https://github.com/openclaw/openclaw/issues/92201) |
| #86519 | Agent repeats identical replies 2-10x on Telegram | Partial (5.22 reduced severity) | [Link](https://github.com/openclaw/openclaw/issues/86519) |
| #85333 | `doctor --fix` 4-5x slower (55s → 229s+) | No | [Link](https://github.com/openclaw/openclaw/issues/85333) |
| #92043 | Compaction timeout causes repeated failure (180s wall clock) | No | [Link](https://github.com/openclaw/openclaw/issues/92043) |
| #92460 | Isolated cron drops `delivery.channel` on final return | No | [Link](https://github.com/openclaw/openclaw/issues/92460) |
| #92415 | `/model` switch never refreshes `AgentSession.this.model` | No | [Link](https://github.com/openclaw/openclaw/issues/92415) |
| #93375 | Telegram polling enters silent crash loop after timeout | No | [Link](https://github.com/openclaw/openclaw/issues/93375) |
| #90325 | Matrix channel dispatch broken — `TypeError: Cannot read properties of undefined (reading 'run')` | No | [Link](https://github.com/openclaw/openclaw/issues/90325) |
| #91363 | Isolated cron fails "LLM request failed" consistently (4 reactions) | No | [Link](https://github.com/openclaw/openclaw/issues/91363) |

### High Severity (P1-P2 — Data Loss / Security)

| Issue | Title | Impact | Link |
|-------|-------|--------|------|
| #91804 | Internal reasoning leakage exposed to users in 2026.6.5 | **Privacy/UX regression** | [Link](https://github.com/openclaw/openclaw/issues/91804) |
| #90945 | `channel_ingress_events` stale claims deadlock Telegram DMs | **Session deadlock** | [Link](https://github.com/openclaw/openclaw/issues/90945) |
| #92273 | Tool Search silently breaks pre-compaction memory flush — durable memories lost | **Data loss** | [Link](https://github.com/openclaw/openclaw/issues/92273) |
| #94032 | `exec` private-LAN access fails while GUI succeeds | **Security boundary** | [Link](https://github.com/openclaw/openclaw/issues/94032) |

### Stability Pattern Analysis

The **dominant failure pattern** is **session/message state corruption** across channel boundaries:
- **Session takeover errors** (#84583, #90945) when cron and user interactions collide
- **Message duplication** (#86519) when delivery completion is mis-tracked
- **Stale model snapshots** (#92415) after runtime configuration switches
- **Recovery failures** (#91212) because transports aren't ready when recovery starts

This cluster suggests **fundamental issues in how session state is synchronized** — likely related to the ongoing SQLite migration tracked in #88838.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Proposals

| Issue | Title | Priority | Comments | 👍 | Link |
|-------|-------|----------|----------|----|------|
| #90916 | Topic-session families for one assistant across multiple context lanes | P2 | 7 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/90916) |
| #90354 | Bounded/validated append semantics for pre-compaction memory flush | P2 | 8 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/90354) |
| #92105 | Configurable page groups for memory-wiki with custom directories | P3 | 4 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/92105) |
| #14785 | Reduce tool schema token overhead (~3,500 tok/session) | P2 | 8 | 👍0 | [Link](https://github.com/openclaw/openclaw/issues/14785) |
| #91455 | Documentation update for Kubernetes | P3 | 7 | 👍1 | [Link](https://github.com/openclaw/openclaw/issues/91455) |

### Likely Next-Version Candidates

1. **Topic-session families (#90916)** — Tags as `P2` but addresses community demand for multi-context AI assistants. With 7 comments and a linked PR, likely to land in 2026.7.x
2. **Bounded memory flush (#90354)** — Directly related to the crash-loop prevention pattern. High-value stability improvement.
3. **Tool schema token optimization (#14785)** — Would reduce per-session overhead by ~3,500 tokens. Long-standing (since Feb 2026) but still P2.

---

## 7. User Feedback Summary

### Reported Pain Points

1. **"Update quality has declined"** — Multiple users report upgrading from 2026.5.12 (stable) to 2026.5.20/2026.6.1 and encountering regressions:
   - "Agent repeats identical replies 2-10x" (#86519)
   - "Matrix channel completely broken" (#90325)
   - "Cron run failed notifications during hot reload" (#90595)

2. **"Diagnostics are noisy and unreliable"** — `openclaw doctor` produces false warnings (#92582) and runs 4-5x slower (#85333), eroding user trust in the diagnostic tool.

3. **"Channel integration is fragile"** — Matrix (#90325), Telegram (#93375), Feishu (#90945), and Google Chat (#95084) all have active P1 regressions. Users express frustration that "it worked before, now fails."

4. **"Session persistence is opaque"** — Users report blank UIs on reconnect (#95154), lost messages (#91212), and stuck sessions (#88870) with no clear recovery path.

### Positive Signals

- **Bot operator demand for advanced features**: #90916 (topic families) and #92105 (custom wiki groups) show sophisticated use cases
- **High bug report quality**: Issues consistently include reproduction steps, version numbers, and root cause analysis — indicating an engaged technical user base

---

## 8. Backlog Watch

### Stale High-Priority Issues Needing Maintainer Attention

| Issue | Title | Created | Priority | Last Updated | Link |
|-------|-------|---------|----------|-------------|------|
| #84583 | Cron announce triggers `EmbeddedAttemptSessionTakeoverError` | 2026-05-20 | P2 | 2026-06-20 | [Link](https://github.com/openclaw/openclaw/issues/84583) |
| #85334 | `doctor --fix` adds circular plugin path entry | 2026-05-22 | P2 | 2026-06-20 | [Link](https://github.com/openclaw/openclaw/issues/85334) |
| #14785 | Reduce tool schema token overhead | 2026-02-12 | P2 | 2026-06-20 | [Link](https://github.com/openclaw/openclaw/issues/14785) |

### Long-Standing Architectural Debt

| Issue | Title | Age | Impact | Link |
|-------|-------|-----|--------|------|
| #88838 | SQLite session/transcript migration (31 comments) | 20 days | **Strategic — shapes all session stability** | [Link](https://github.com/openclaw/openclaw/issues/88838) |
| #91285 | Tool lifecycle / gateway recovery field report | 13 days | **Comprehensive stability audit** | [Link](https://github.com/openclaw/openclaw/issues/91285) |

### ClawSweeper Automated PRs in Merge Queue

| PR | Title | Status | Link |
|----|-------|--------|------|
| #95278 | Avoid copying `process.env` in ingress queue state DB opens | **Automerge armed** | [Link](https://github.com/openclaw/openclaw/pull/95278) |
| #95084 | Fix Google Chat tool-trace line sanitization | **Automerge armed** | [Link](https://github.com/openclaw/openclaw/pull/95084) |
| #94833 | Fix Codex timed-out app-server lanes | **Automerge armed** | [Link](https://github.com/openclaw/openclaw/pull/94833) |

---

## Project Health Summary

**Score: ⚠️ Caution (6/10)**

**Strengths:**
- Extremely high community engagement (1000+ updated items/day)
- Strong automated triage (ClawSweeper bot automerging fixes)
- Proactive architectural migration (branch-by-abstraction for SQLite)

**Risks:**
- **Merge bottleneck**: Only 28/500 PRs merged today (5.6%) — backlog is growing
- **Regression cascade**: 5.20 → 6.x series introduced multiple interconnected session-state bugs
- **Channel fragmentation**: 5 different chat platforms have active P1 regressions
- **Diagnostic tools broken**: `doctor` is both slow and inaccurate, reducing debug capability

**Recommendation**: The team should prioritize closing the P1 session/message-loss regressions cluster before introducing new features. The SQLite migration (#88838) must maintain backward compatibility to avoid further stability erosion.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-06-21
**Ecosystem:** Open-source Personal AI Assistant / Agent Frameworks

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a **rapid diversification phase**, with at least 12 active projects targeting different deployment scales—from lightweight embedded agents (PicoClaw, NullClaw) to full-stack production frameworks (OpenClaw, ZeroClaw, IronClaw). The ecosystem is converging on several architectural patterns: SQLite-based session persistence, manifest-driven channel abstraction, and provider-agnostic tool-use standards. However, **fragmentation in provider compatibility** (especially for non-OpenAI reasoning models) and **session state synchronization** remain persistent pain points across all projects. Community engagement is strongest in the mid-size projects (OpenClaw, ZeroClaw, Hermes Agent), while smaller projects show high user dependency with limited maintainer bandwidth. A notable trend is the emergence of dedicated "reborn" or v2 architectures in IronClaw and ZeroClaw, signaling the ecosystem's maturation beyond MVP prototypes.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | Release Today? | Health Score | Dominant Activity Type |
|---------|-------------|----------|----------------|--------------|------------------------|
| **OpenClaw** | 480 | 472 | No | ⚠️ 6/10 | Triage crunch, regression fixes |
| **ZeroClaw** | ~50 (high volume) | ~50 (high volume) | No | ⚠️ 6/10 | Security auth work, bug fixes |
| **Hermes Agent** | ~50 | ~50 | No | ⚠️ 6/10 | v0.17.0 regression fixes |
| **IronClaw** | 1 | 22 | No | ✅ 8/10 | Architecture consolidation (reborn) |
| **NanoBot** | 5 | 14 | No | ✅ 7/10 | Feature dev, concurrency fixes |
| **CoPaw** | 3 | 8 | No | ✅ 7/10 | Memory migration, context tools |
| **LobsterAI** | 0 | 0 | No | ✅ 7/10 | Stale issue housekeeping |
| **NanoClaw** | 1 | 6 | No | ✅ 7/10 | Security fix, prompt cleanup |
| **PicoClaw** | 2 | 1 | Yes (nightly) | ⚠️ 5/10 | Stale bug + feature |
| **NullClaw** | 2 | 0 | No | ⚠️ 5/10 | Critical bug opened |
| **TinyClaw** | 1 | 0 | No | ⚠️ 4/10 | Security vulnerability report |
| **Moltis** | 0 | 1 | No | ✅ 7/10 | Dependency maintenance |
| **ZeptoClaw** | 0 | 0 | No | 💤 3/10 | No activity |

**Key insight:** Projects with heavy community engagement (OpenClaw, ZeroClaw, Hermes) exhibit lower health scores due to merge bottlenecks and regression cascades, while smaller projects maintain stability through limited feature velocity.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community mass:** 480 open issues and 472 open PRs is ~10x the engagement of any competitor. This creates both a rich bug-report corpus and a diverse contributor base.
- **Most comprehensive channel support:** Active regressions on 5 different platforms (Telegram, Matrix, Feishu, Google Chat, Slack) demonstrate unmatched multi-channel ambition.
- **Proactive infrastructure migration:** The SQLite session migration (#88838) using branch-by-abstraction is a mature engineering practice that IronClaw and ZeroClaw have yet to adopt at this scale.
- **Automated triage infrastructure:** ClawSweeper bot automerging fixes is ahead of most peers, though still bottlenecked (5.6% merge rate today).

**Technical Approach Differences:**
- OpenClaw uses **Python as its core runtime** (vs. Go for IronClaw/ZeroClaw), which enables faster prototyping but creates performance ceiling concerns in session state traversal (demonstrated by the 4-5x `doctor` slowdown in issue #85333).
- OpenClaw's **codex integration** (PR #94833) provides a unique bridge to AI-assisted development workflows that Hermes and ZeroClaw lack—positioning OpenClaw as both an assistant and a development platform.

**Community Size Comparison:**
- OpenClaw: ~1,000 updated items/day — **dominant in raw engagement**
- ZeroClaw: ~100 updated items/day — **second tier, fast-growing**
- Hermes Agent: ~100 updated items/day — **similar to ZeroClaw**
- IronClaw: ~23 updated items/day — **smaller but higher-quality contributions**
- Others: 1-10 items/day — **niche communities**

**Risk:** OpenClaw's merge bottleneck could lead to contributor burnout as PRs accumulate (472 open). If not addressed, the project risks losing its community leadership to faster-moving competitors like ZeroClaw.

---

## 4. Shared Technical Focus Areas

### 4.1 Session State Synchronization
**Projects affected:** OpenClaw, ZeroClaw, Hermes Agent, NanoBot, CoPaw
**Specific needs:**
- OpenClaw: SQLite session migration via branch-by-abstraction (#88838)
- ZeroClaw: Context overflow causing hallucination (#6517); cron jobs race-conditioned (#6037)
- Hermes Agent: Session tool-output bloat causing multi-minute slowdowns (#49673)
- NanoBot: Concurrency-safe hooks for `run()` with different session keys (#4408)
- CoPaw: Silent message drops when agent is busy (#5344)

### 4.2 Provider Compatibility Gaps
**Projects affected:** Every project
**Specific needs:**
- **Reasoning/thinking block parsing:** OpenClaw (#92201), ZeroClaw (#6672), CoPaw (#5208) all struggle with Anthropic's thinking signatures or custom reasoning blocks from Chinese providers (Xiaomi, LongCat-2.0-Preview)
- **OpenAI-compatible API variations:** NullClaw (#967), CoPaw (#5345), Hermes Agent (timestamp metadata rejection) hit provider-specific failures
- **Custom provider auth flows:** ZeroClaw (#6558), Hermes Agent (#49821) report OAuth failures with Aliyun and Anthropic respectively

### 4.3 Security Hardening
**Projects affected:** NanoClaw, TinyClaw, CoPaw, IronClaw
**Specific items:**
- Path traversal vulnerabilities: NanoClaw CVE-2026-29611 (#2799), TinyClaw (#285)
- Sandboxing for tool execution: CoPaw (#5346) adds Docker container isolation; IronClaw works on workspace entities
- OIDC/OAuth infrastructure: ZeroClaw (#7141) building pluggable auth provider seam; IronClaw fixing stale OAuth guard tests (#5105)

### 4.4 Memory & Context Management
**Projects affected:** OpenClaw, ZeroClaw, CoPaw, NanoClaw, Hermes Agent
**Specific approaches:**
- ZeroClaw: Dream Mode for periodic memory consolidation (#5849)
- CoPaw: ReMe4 memory migration (#5349); scroll context manager (#5321)
- OpenClaw: Pre-compaction memory flush (#90354); memory-wiki with page groups (#92105)
- Hermes Agent: Automated workspace memory (#38552)
- NanoClaw: Prompt caching for Claude provider (#2768)

### 4.5 Multi-Channel Integration
**Projects affected:** OpenClaw, Hermes Agent, NanoBot, ZeroClaw
**Patterns:**
- iMessage: NanoBot adds Photon Spectrum bridge (#4426)
- WhatsApp: Hermes Agent fixing Docker bridge (#49569); NanoBot working on first-message resolution (#4407)
- Telegram: All major projects support it; NanoBot adding rich message rendering (#4422)
- Matrix: OpenClaw (#90325) and Hermes Agent (#18507) both working on stability
- Chinese platforms: ZeroClaw targets WeChat Work; OpenClaw targets Feishu

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | Hermes Agent | NanoBot | CoPaw | TinyClaw |
|-----------|----------|----------|----------|--------------|---------|-------|----------|
| **Primary Language** | Python | Go/TypeScript | Rust | Python | Python | Python | Go |
| **Target User** | Bot operators, developers | Power users, self-hosters | Infrastructure teams | Hobbyists, researchers | Developers building agents | Enterprise bots | Lightweight testers |
| **Key Differentiator** | Largest channel matrix | OIDC auth, skills platform | Rust performance, manifest-driven | TUI-first, Kanban | SDK-centric, concurrency safety | ReMe4 memory, Langfuse | Minimal, experimental |
| **Deployment Scale** | Medium-large | Small-medium | Large (rebranding) | Small | Small-medium | Medium | Tiny |
| **Release Cadence** | Weekly releases | ~Biweekly | Pre-release phase | ~Monthly | ~Biweekly | ~Biweekly | Ad-hoc |
| **Security Posture** | Weak (multiple P1s open) | Improving (OIDC work) | Strong (Rust memory safety) | Weak (security PR stale since Apr) | Neutral (concurrency bugs) | Improving (Docker sandbox) | **Critical** (#285) |

**Notable Gap:** No project has achieved a "production-grade" security posture. TinyClaw and NanoClaw have active CVEs unpatched, OpenClaw has 6 P1 regressions open, and Hermes Agent's security PR has sat unmerged for 2 months.

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity / Cautionary
| Project | Velocity | Stability | Maturity | Assessment |
|---------|----------|-----------|----------|------------|
| **OpenClaw** | 🟢 Extremely High | 🔴 Low | 🟡 Medium | Market leader by engagement, but regression cascade threatens user trust |
| **ZeroClaw** | 🟢 High | 🟡 Medium | 🟡 Medium | Fastest growing; v0.9.0 auth push could be breakthrough |
| **Hermes Agent** | 🟢 High | 🔴 Low | 🟡 Medium | v0.17.0 regression cycle is painful, but community remains loyal |

### Tier 2: Steady Growth
| Project | Velocity | Stability | Maturity | Assessment |
|---------|----------|-----------|----------|------------|
| **IronClaw** | 🟡 Medium | 🟢 High | 🟢 High | Most architecturally mature; reborn v2 consolidation promising |
| **NanoBot** | 🟡 Medium | 🟢 High | 🟡 Medium | SDK focus attracts dev tooling users; concurrency fix needed |
| **CoPaw** | 🟡 Medium | 🟡 Medium | 🟡 Medium | ReMe4 migration signals long-term thinking; interoperability gaps remain |

### Tier 3: Maintenance / Niche
| Project | Velocity | Stability | Maturity | Assessment |
|---------|----------|-----------|----------|------------|
| **NanoClaw** | 🔴 Low | 🟢 High | 🟡 Medium | Stable but stalled; security fix awaiting review for 4 days |
| **PicoClaw** | 🔴 Low | 🟡 Medium | 🟡 Medium | Stale bugs unresolved; nightly builds continue |
| **NullClaw** | 🔴 Low | 🟡 Medium | 🔴 Low | Critical reliability bug (#967) threatens Windows user base |
| **TinyClaw** | 🟢 Zero | 🔴 Low | 🔴 Low | Security vulnerability unpatched; project may be abandoned (0 PRs) |
| **LobsterAI** | 🔴 Zero | 🟢 High | 🟡 Medium | Inactive; all issues closed; likely maintenance-only |
| **Moltis** | 🔴 Zero | 🟢 High | 🔴 Low | Dependency updates only; unclear if actively developed |
| **ZeptoClaw** | 🔴 Zero | 🟢 High | 🔴 Low | No activity; likely dormant |

**Momentum Leaders:** OpenClaw (by volume), ZeroClaw (by growth rate), IronClaw (by engineering quality)

**Risk of Abandonment:** TinyClaw, ZeptoClaw, LobsterAI, Moltis

---

## 7. Trend Signals for AI Agent Developers

### Trend 1: "Reasoning Model Fragmentation" is the New Norm
**Signal:** 4 of 7 active projects (OpenClaw, ZeroClaw, Hermes, CoPaw) report reasoning block parsing failures.
**Impact:** AI agent developers cannot assume Anthropic/OpenAI format compatibility. Expect a "thousands-of-blocks" problem as each provider (Xiaomi, LongCat, Groq) implements reasoning differently. **Tooling for provider-agnostic thinking extraction** is an immediate ecosystem need.

### Trend 2: Memory is Becoming an Infrastructure Concern, Not a Feature
**Signal:** ZeroClaw's Dream Mode (#5849), CoPaw's ReMe4 migration (#5349), OpenClaw's pre-compaction flush (#90354) all treat memory as a managed system resource.
**Impact:** The era of "append-only memory" is ending. Developers must plan for **memory consolidation pipelines, confidence scoring, and context window budgets**—not just storage. Projects without explicit memory management (NullClaw, TinyClaw) will fall behind.

### Trend 3: Authentication is the Last Frontier for Self-Hosted Agents
**Signal:** ZeroClaw dedicating v0.9.0 exclusively to OIDC/auth (#7141); IronClaw fixing stale OAuth tests (#5105); OpenClaw's auth-provider integration regressions.
**Impact:** Self-hosted agents are transitioning from "localhost toys" to "production-exposed services." OIDC, scoped API tokens, and pluggable auth providers are becoming **table stakes** for deployment. Projects ignoring this (TinyClaw, PicoClaw) risk security incidents.

### Trend 4: Channel Abstraction is Converging on Manifest-Driven Design
**Signal:** IronClaw's manifest-driven channel ingress (PR #5107) consolidates 4 separate PRs; NanoBot's iMessage channel follows the WhatsApp "bridge pattern"; OpenClaw's per-channel P1 regressions reveal the cost of ad-hoc implementations.
**Impact:** Expect a **single channel abstraction API** to emerge across the ecosystem (likely a superset of IronClaw's manifest approach). Developers building new channels should design for this abstraction or risk rework.

### Trend 5: CI/CD Performance as a Competitive Advantage
**Signal:** IronClaw's experimental full-suite gate (PR #5086) with nextest/mold/sccache produced real performance data; OpenClaw's merge bottleneck is its biggest weakness; ZeroClaw's stale E2E failure (#4108) remains unresolved for 25 days.
**Impact:** Project velocity is increasingly gated by CI infrastructure. **Rust-based projects (IronClaw) have a natural compilation-speed advantage** that Python-based projects (OpenClaw, Hermes) must compensate for with smarter parallelization and caching.

### Trend 6: The "Agent-to-Agent Protocol" Gap is Widening
**Signal:** ZeroClaw's "does not know it can add cron" (#5862) and "unable to answer questions about its own features" (#7950) reveal a **self-awareness deficit** in current agents.
**Impact:** Without a standardized protocol for agents to describe their own capabilities to other agents (or themselves), the ecosystem will remain siloed. Projects like IronClaw's one-shot triggers (#5065) and concurrent turn execution (#5085) are enabling infrastructure for this future, but the protocol layer is missing.

---

## Summary for Decision-Makers

| For | Recommended Project | Rationale |
|-----|-------------------|-----------|
| **Production multi-channel bot** | OpenClaw (with caution) | Largest channel matrix, but monitor regression rate |
| **Security-consious deployment** | ZeroClaw (v0.9.0) | OIDC/auth focus makes it the safest bet for exposed services |
| **High-performance edge agent** | IronClaw | Rust-based, manifest-driven, best CI practices |
| **Developer SDK for custom agents** | NanoBot | Concurrency-safe SDK, good channel abstractions |
| **Enterprise memory-heavy bot** | CoPaw | ReMe4 migration, scroll context, Langfuse observability |
| **Mobile/lightweight testing** | PicoClaw or NullClaw | Low overhead, but expect reliability gaps |
| **Avoid** | TinyClaw, LobsterAI, ZeptoClaw | Inactive or unresolved security vulnerabilities |

---

*Report generated from 13 project digests on 2026-06-21. Data reflects last 24 hours of GitHub activity.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-21

## Today's Overview
NanoBot shows **moderate-to-high activity** today with 5 open issues and 18 updated pull requests (14 open, 4 merged/closed). No new releases were published. The project is in a **productive development phase**, with significant work on concurrency safety, performance optimization, channel expansion (iMessage, Telegram rich messages), and SDK enhancements. The community is actively submitting both bug reports and feature contributions, indicating healthy engagement.

## Releases
**No new releases today.** The latest release remains unchanged.

## Project Progress
**4 pull requests were merged/closed today:**

- **#4426 (Closed)** — [channel] **feat(channels): add iMessage channel via Photon Spectrum** by morandot. Adds an iMessage chat channel following the existing WhatsApp bridge pattern (Python + Node sidecar). Enables iMessage on NanoBot without Mac relay or self-hosting.
- **#4427 (Closed)** — [fix(webui)] **prevent iOS Safari auto-zoom on textarea focus** by axelray-dev. Fixes mobile UX issue where iOS Safari zooms page when focusing text input, by setting 16px base font-size on mobile.
- **#4303 (Closed)** — [fix(mcp)] **close tracked generators in _close_server to prevent GC crash** by michaelxer. Fixes a `RuntimeError` crash in `streamableHttp` MCP server sessions when reconnecting after session termination.
- **#4321 (Closed)** — [bug] **fix: advance dream cursor when Dream is disabled to prevent prompt bloat** by michaelxer. Fixes prompt size inflation when `dream.enabled` is false, by ensuring the dream cursor is advanced even when the Dream cron job is not registered.

## Community Hot Topics

1. **#4408 ([bug] Concurrency-safe hooks)** — *5 comments, 0 reactions*
   - **URL:** HKUDS/nanobot Issue #4408
   - **Analysis:** This bug report about `_extra_hooks` being clobbered during concurrent `run()` calls has sparked two competing fix PRs (#4425 and #4409). The high engagement reflects deep interest in SDK reliability for production deployments.

2. **#4425 ([fix] use contextvars for per-call hooks)** — *New PR, no comments yet*
   - **URL:** HKUDS/nanobot PR #4425
   - **Analysis:** The direct fix for #4408 using `contextvars` — community seems to favor this approach over the alternative #4409 which changes method signatures.

3. **#4420 ([enhancement] Performance optimization: estimate_prompt_tokens)** — *1 comment*
   - **URL:** HKUDS/nanobot Issue #4420
   - **Analysis:** A real-world user (building their own "nanobee" project) identified redundant `json.dumps` + `tiktoken.encode` calls per agent turn. Two competing PRs already exist (#4421, #4428), showing strong community consensus on the fix.

**Underlying need:** The community is pushing for **production-grade reliability** (concurrency safety) and **performance** (token estimation caching), indicating scaling use cases beyond simple demos.

## Bugs & Stability

### High Severity

1. **#4408 — Concurrency bug in `Nanobot.run()` (shared `_extra_hooks` clobbered)**
   - **Fix PRs:** #4425 (contextvars approach), #4409 (pass hooks to process_direct)
   - **Risk:** Concurrent `run()` calls with different `session_key` values overwrite each other's hooks, causing data races. **Critical for multi-user deployments.**

### Medium Severity

2. **#4303 (Fixed today) — MCP server crash on reconnect (`RuntimeError: cancel scope in different task`)**
   - **Status:** Fixed via PR #4303 (closed today). A `streamableHttp` MCP server crash when `_close_server` reconnects after session termination.

3. **#4321 (Fixed today) — Prompt bloat when Dream is disabled (cursor never advances)**
   - **Status:** Fixed via PR #4321 (closed today). History prompt grows indefinitely because `dream_cursor` is never advanced when `dream.enabled` is false.

### Low Severity

4. **#4423 — Telegram `_is_rich_capability_error` too broad (matching "not found")**
   - **Status:** Fix PR #4423 open. Overly broad error matching can permanently disable rich sending for channels with transient "chat not found" errors.

## Feature Requests & Roadmap Signals

### Likely for Next Version

1. **#4429 — Custom provider thinking style configuration** (Issue, 1 comment)
   - Users need per-provider thinking parameters (e.g., VolcEngine/Doubao use `{"thinking": {"type": "enabled"}}` vs OpenAI's `reasoning_effort`). **High priority** as more reasoning models emerge.

2. **#4419 — Automatic reasoning effort escalation** (Issue, 1 comment)
   - Automatic dynamic adjustment of `reasoningEffort` based on task complexity. **Suggests future direction** toward adaptive AI agent behavior.

3. **#4422 — Telegram Bot API 10.1 `sendRichMessage` support** (Issue, new)
   - Native rendering of tables, task lists, collapsible details, and math blocks. **Feature-complete community contribution** likely to merge quickly.

### Longer-term Signals

4. **#4414 — Sub-agent aggregated result mode** (PR #4414, open)
   - Buffering completed sub-agent results per session and publishing combined messages. **Enhances multi-agent orchestration** patterns.

5. **#4416 — Cron job model presets** (PR #4416, open)
   - Per-run provider/model/context-window overrides for cron turns without mutating live agent. **Improves scheduled task flexibility.**

## User Feedback Summary

### Pain Points

- **Concurrency safety** (Issue #4408): Users deploying NanoBot in production with concurrent sessions are hitting race conditions. *"Two `run()` calls with different `session_key` values executing concurrently overwrite each other's hook lists."*
- **Performance degradation** (Issue #4420): Real-world user reports "very slow responses" in their "nanobee" project, traced to redundant `tiktoken` encoding of tools per turn. *"I found that program response is very slow... tool definitions remain unchanged throughout the session."* — codeLong1024
- **Mobile WebUI UX** (PR #4427): iOS Safari auto-zoom on textarea focus. *Addressed today with 16px base font-size fix.*
- **WhatsApp first-message resolution** (PR #4407): Sender LID (not phone number) causes `allowFrom` matching failures on first contact message. *Fix in progress.*

### Satisfaction Signals

- **Channel expansion is well-received:** The iMessage channel addition follows the established WhatsApp bridge pattern — users appreciate consistent bridging approaches.
- **Community contributes production fixes:** Two independent PRs (#4425, #4409) submitted for the same concurrency bug, showing strong community ownership.

## Backlog Watch

### Issues/PRs Needing Maintainer Attention

1. **#4256 — fix(memory): keep history cursor monotonic** (PR, open since 2026-06-08)
   - **URL:** HKUDS/nanobot PR #4256
   - **Age:** 13 days without merge. Fixes cursor allocation when `.cursor` is stale or contains negative values. A **stability regression fix** that has been open for nearly two weeks.

2. **#4296 — feat(sdk): expand Python SDK runtime controls** (PR, open since 2026-06-11)
   - **URL:** HKUDS/nanobot PR #4296
   - **Age:** 10 days without significant activity. A large feature PR adding `RunResult` metadata, session/memory helpers, and Cursor-like API. **May need design review** due to scope.

3. **#4329 — feat(cli): add inline TUI for nanobot agent** (PR, open since 2026-06-13)
   - **URL:** HKUDS/nanobot PR #4329
   - **Age:** 8 days. Adds terminal UI for `nanobot agent`. No conflicts but **no maintainer feedback** yet despite its size.

4. **#4395 — Improve onboard wizard setup flow** (PR, open since 2026-06-18)
   - **URL:** HKUDS/nanobot PR #4395
   - **Age:** 3 days. TTY-aware wizard with JetBrains-inspired palette. Likely waiting for review.

### Recommendation
The **history cursor monotonic fix (#4256)** and the **SDK expansion (#4296)** are the highest-priority backlog items — the former is a regression fix, the latter a major API addition. Both should be reviewed soon to avoid blocking downstream work.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for June 21, 2026.

***

# Hermes Agent Project Digest
**Date:** 2026-06-21
**Repository:** github.com/nousresearch/hermes-agent

---

## Today's Overview
The Hermes Agent project is experiencing a **high-activity phase** with significant community engagement and developer throughput. Over the last 24 hours, there were 50 updated Issues and 50 updated Pull Requests, though the merge/close rate remains moderate (13 for PRs, 19 for Issues). A large portion of recent activity is centered around the **v0.17.0 release**, which appears to have introduced several regressions, particularly in Docker environments, the WhatsApp integration, and for provider API compatibility. Despite these stability hiccups, the community remains highly engaged, submitting a high volume of bug reports, feature suggestions, and rapid fix PRs. The project is currently in a reactive cycle of bug-fixing and polish following the latest release, with significant focus on the TUI and gateway components.

## Releases
There were **no new releases** published in the last 24 hours.

## Project Progress
The community and core developers merged or closed **13 pull requests** today. Key areas of progress include:
- **WhatsApp Platform Fixes:** Multiple PRs were merged to address the Docker bridge `npm install` failure caused by read-only filesystem issues (#49584, #49654, #49839). A shared helper `resolve_whatsapp_bridge_dir()` was introduced to route dependencies to a writable `HERMES_HOME` location.
- **Provider Compatibility:** A recurring bug where strict OpenAI-compatible providers (e.g., Fireworks-backed endpoints) rejected internal `timestamp` metadata was fixed across multiple PRs (#47875, #49840).
- **Telegram Rendering:** A fix was merged (#49850) to replace the broken table-to-bullet conversion in Telegram messages with a monospaced code block, preserving original pipe-table syntax.
- **Installer & Canonical:** PR #22275 (introducing minimal install modes) was closed/merged, adding flexibility for smaller environments.
- **Git Worktrees:** A fix (#49855) was merged to materialize per-task linked git worktrees in the Kanban system, preventing tasks from sharing directories or incorrectly using the dispatcher’s CWD.

## Community Hot Topics
The following discussions drew the most attention (comments and reactions) in the last 24 hours:

- **Issue #48061 - Empty runtime model/provider on Linux (P1):** [Link](https://github.com/NousResearch/hermes-agent/issues/48061) — A critical bug report detailing a regression in v0.16.0 where requests fail due to empty `MODEL` and `PROVIDER` values. This affects users installing via `pipx` on Linux and is one of the highest-severity open issues.
- **Issue #29846 - Gateway shutdown notification (CLOSED):** [Link](https://github.com/NousResearch/hermes-agent/issues/29846) — A feature request with 5 upvotes requesting the ability to disable or customize the "Gateway shutting down" notification. The interest here indicates a desire for less intrusive update processes or better user-facing communication during maintenance.
- **Issue #45935 - WhatsApp template support (P3):** [Link](https://github.com/NousResearch/hermes-agent/issues/45935) — A feature request for WhatsApp Cloud API message templates. The author provides a real production use case, signaling a growing need for business-grade WhatsApp integrations and re-engagement features outside the 24-hour window.
- **Issue #43784 - Shareable Profile Templates (P3):** [Link](https://github.com/NousResearch/hermes-agent/issues/43784) — A request for a way to export and share agent profile configurations. The desire for reusability and community sharing of specialized "roles" is a clear signal for a plugin-like ecosystem.

## Bugs & Stability
The report period reveals a **concerning number of regressions** tied to the recent v0.17.0 release.

- **[P1] v0.17.0 Gateway Fails on Startup (ModuleNotFoundError):** Issue #49824 reports a crash due to a missing module (`cron.scheduler_provider`). This is a critical blocker for users upgrading to v0.17.0.
- **[P1] Anthropic OAuth Login 404s:** Issue #49821 reports that `hermes auth add anthropic` fails because the token exchange endpoint was migrated by Anthropic. This blocks users from authenticating with Claude Pro/Max entirely.
- **[P2] macOS Desktop Reinstall Prompt Loop:** Issues #49787 & #49788 report that the Desktop app (v0.17.0) prompts for a reinstall/setup on every launch on macOS, even with a valid config file present.
- **[P2] WhatsApp Bridge Broken in Docker:** Issue #49569 (and related fix PRs #49584, #49654) confirmed that the WhatsApp bridge is entirely non-functional in Docker due to `EACCES` errors during `npm install`.
- **[P2] Security: `execute_code` Bypasses File Edit Restrictions:** Issue #49578 highlights a security concern where Python tools (`execute_code`) can bypass the file edit restrictions that protect `patch` and `write_file`, potentially allowing modification of sensitive configuration files.
- **[P2] Session Tool-Output Bloat:** Issue #49673 describes a performance degradation where long-running sessions become multi-minute slow due to retained raw tool output bloating the context.

## Feature Requests & Roadmap Signals
The pipeline of feature requests suggests the community is pushing Hermes toward being a more **robust, shareable, and enterprise-ready** platform.

- **Shareable Profiles (#43784):** Likely to be implemented in the next minor version to improve user onboarding and community sharing.
- **WhatsApp Message Templates (#45935):** A strong candidate for v0.18.0 given the production use case and the current focus on WhatsApp reliability.
- **Automated Workspace Memory (#38552):** A "complementary" proposal to allow agents to remember directory purposes across sessions, reducing token waste. This signals a need for persistent, semantic file system awareness.
- **Android Mobile Client (#49834):** A draft PR introduces a Capacitor-based Android thin client. While far from production-ready, it indicates official interest in mobile access.
- **Linear Controls for Kanban (#49856):** A plugin to integrate Linear task management into the Hermes Kanban dashboard, pointing toward deeper DevOps/Project management integrations.

## User Feedback Summary
- **Pain Points / Dissatisfaction:**
    - **Stability of v0.17.0:** Users are expressing frustration with the number of regressions in the latest release, from startup crashes to broken integrations.
    - **Docker Experience:** The WhatsApp bridge issue and the macOS permission loop highlight a fragile Docker experience. Fix PRs are already in review.
    - **Desktop App UX:** The reinstall prompt bug on macOS is a poor first-run experience for new users.
    - **Strict Provider Compatibility:** Power users running custom or strict OpenAI providers are encountering schema validation errors (e.g., `timestamp` field).
- **Satisfaction / Use Cases:**
    - **WhatsApp in Production:** Despite the bugs, users are actively using Hermes for WhatsApp business automation (e.g., engine-machining business scheduling in Issue #45935).
    - **Docker Deployments:** A significant portion of the community is using Docker for deployment, evidenced by the volume of Docker-related issues and PRs.
    - **Kanban/DevOps Workflows:** There is active interest and development in the Kanban worker and Git integration features, suggesting Hermes is being used for structured project management.

## Backlog Watch
Several issues and PRs remain open for extended periods, requiring maintainer attention:

- **PR #13336 - Webhook Chunked Body Cap (P1/Security):** Open since April 21. This is a security fix to prevent OOM attacks on webhook endpoints via chunked requests. This is a critical vulnerability patch that should be prioritized.
- **Issue #17144 - Docker Root-Owned Files (P2):** Open since April 28. A persistent bug where Docker agent memory writes create root-owned files, making them unreadable by the gateway user. It has been open for nearly two months.
- **Issue #20815 - False Positive API Key Warning (P3):** Open since May 6. A UI bug causing dashboard warnings for local providers. While low severity, it creates confusion for users running local models.
- **PR #18507 - Matrix Platform Hardenings (P2):** Open since May 1. A large feature PR adding E2EE, media, and rendering to the Matrix gateway. Its long gestation may require maintainer attention to merge or steer.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**  
**Date:** 2026-06-21  
**Analysis Period:** Last 24 Hours  

---

## 1. Today's Overview

PicoClaw shows moderate activity today with 2 open issues and 1 open pull request updated in the last 24 hours, and a new nightly release. No items were closed or merged, indicating a pause in feature integration. The project remains in active development, with one stale open bug and one stale feature PR that have received recent maintainer attention. The new nightly build (v0.3.0-nightly) suggests ongoing automation despite low community-facing churn.

---

## 2. Releases

A new **nightly build** was released today:

- **Version:** v0.3.0-nightly.20260620.287853ab  
- **Note:** Unstable automated build, use with caution.  
- **Changelog:** [Compare v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)  
- **Changes:** No explicit breaking changes or migration notes provided; diff against v0.3.0 stable.

*Recommendation:* Users on stable v0.3.0 should not upgrade to this nightly unless testing new features.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only open PR that received an update:

- **#2964 (OPEN)** – *Feat/image input compression*  
  - Status: Stale (since May 28), updated Jun 20.  
  - Adds configurable inbound image compression for the vision pipeline. No reviewer activity or merge available yet.  
  - Link: [PR #2964](https://github.com/sipeed/picoclaw/pull/2964)

*Conclusion:* No feature advancement was finalized today.

---

## 4. Community Hot Topics

Two open issues are receiving community engagement:

1. **#2984 (OPEN)** – [Feature][Protocol] *Add explicit turn completion signal for Pico WebSocket clients*  
   - Created Jun 2, updated Jun 20. 2 👍, 3 comments.  
   - **Need:** Developers building WebSocket clients require a deterministic `turn.complete` event to know when the agent finishes processing a user message. Current events are ambiguous.  
   - Underlying need: Protocol clarity for external integrations, likely important for multi-turn applications.  
   - Link: [Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)

2. **#3012 (OPEN)** – [BUG] *Continuous consumption of tokens every minute when evolution is enabled*  
   - Created Jun 5, updated Jun 20. 4 comments.  
   - **Need:** Token usage spikes every minute under Evolution (Draft mode) on FreeBSD with MiniMax. Users may be burning credits unexpectedly.  
   - Link: [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)

Both issues are considered "stale" (no maintainer response in 14+ days) but were recently updated, suggesting maintainer awareness.

---

## 5. Bugs & Stability

One confirmed bug reported (no new bugs today):

- **#3012 (OPEN)** – Token consumption bug (Severity: Medium-High)  
  - **Symptoms:** Token consumption repeats every minute when Evolution is enabled.  
  - **Affects:** v0.2.9, MiniMax, FreeBSD.  
  - **Status:** No fix PR exists. 4 comments, no maintainer resolution.  
  - **Risk:** Financial impact for users on pay-per-token model.  

No crashes, regressions, or security issues reported today.

---

## 6. Feature Requests & Roadmap Signals

One new feature request is active:

- **#2984** – Explicit turn completion signal (WebSocket protocol)  
  - Likely to be prioritized given its lightweight, non-breaking nature and 2 thumbs-up.  
  - Predicted for next minor release (v0.3.1 or v0.4.0) if maintainer bandwidth permits.

The open PR **#2964** (image compression) is stalled but could land in a future nightly if reviewed. No roadmap is published.

---

## 7. User Feedback Summary

From the two active issues:

- **Pain point – Token waste:** A FreeBSD user reports involuntary token consumption (Issue #3012). This is a clear financial pain point.  
- **Use case – Custom UIs:** Developer Brook-sys requests WebSocket protocol improvements for building custom WebSocket clients (Issue #2984). Indicates demand for PicoClaw as a backend for external UIs.  
- **Satisfaction:** No positive feedback captured in the last 24h. Largely silent community.

---

## 8. Backlog Watch

Two important items are **stale and awaiting maintainer response** (updated but unresolved for >14 days):

1. **Bug #3012** – Token consumption with Evolution  
   - Last updated Jun 20, no fix. Critical for budget-sensitive users.  
   - Link: [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)

2. **Feature #2984** – WebSocket turn signal  
   - Last updated Jun 20, no assignee. Needed for external integrations.  
   - Link: [Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)

3. **PR #2964** – Image compression feature  
   - Created May 28, last updated Jun 20. No reviewer assigned. Could become problematic if left unmerged.  
   - Link: [PR #2964](https://github.com/sipeed/picoclaw/pull/2964)

*Recommendation:* Maintainers should provide status updates or assign reviewers to reduce community stagnation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-21

## Today's Overview

NanoClaw's development activity is moderate today with 6 open pull requests updated in the last 24 hours, all awaiting review or merge, and zero new releases. One open issue remains active, centered on a performance improvement for the Claude provider. The project appears in a stable state with a focused pipeline of fixes, refactors, and documentation improvements, though no feature work is being merged today. Maintainer attention is distributed across security fixes, code cleanup, and addressing a prompt caching gap that could affect production agents with rich system prompts. No regressions or crashes were reported, but two security-related PRs highlight ongoing hardening efforts.

## Releases

No new releases were published today. The latest available version remains unreported in this dataset.

## Project Progress

No pull requests were merged or closed today. The open PRs represent a significant cleanup and security push:

- **#2824** (CutSnake01) — Fix: drops a stale "Global Memory" instruction from the main seed prompt, reducing prompt pollution in agent sessions.
- **#2823** (CutSnake01) — Fix: removes the `groups/global/CLAUDE.md` file that the host deletes on every startup, eliminating a persistent inconsistency between repo state and runtime.
- **#2822** (CutSnake01) — Refactor: removes a dead `/workspace/global` mount from the container runner, cleaning up unused infrastructure.
- **#2821** (chandrameenamohan) — Docs: documents assistant-name environment variables, improving onboarding for self-hosting users.
- **#2799** (sturdy4days) — Security fix: confines `send_file` reads to `/workspace` (CVE-2026-29611), closing a path traversal vulnerability that could let a compromised agent read arbitrary container files.
- **#2801** (sturdy4days) — Fix: guards `safeParseContent` against non-object JSON parsing results, preventing `undefined` errors when message content arrives as primitives.

## Community Hot Topics

**Most active issue:**  
[#2768 Enable prompt caching by default in Claude provider](https://github.com/nanocoai/nanoclaw/issues/2768) (open, 1 comment) — Author galmorduku identifies that `sdkQuery()` calls the Anthropic Agent SDK without enabling prompt caching, causing every agent turn to re-send the full system prompt uncached. This is a latent performance issue for agents with large or dynamic system prompts. The single comment indicates at least some community engagement, but no resolution is recorded.

**Most active PRs:**  
All six PRs have zero comments and zero reactions, indicating that while the code contributions are flowing, community discussion is minimal. The security fix PRs (#2799, #2801) are the most substantive and are likely the highest priority for maintainers.

**Underlying need:** The cached prompt discussion reveals a community desire for production-grade performance tuning, especially as agents scale. The silence on the PRs may indicate that the primary maintainers are reviewing independently or that the community is small and discussion occurs elsewhere.

## Bugs & Stability

No new bugs, crashes, or regressions were reported today.

**Existing bugs with fix PRs in flight:**

| Severity | Issue/PR | Description | Fix PR |
|----------|----------|-------------|--------|
| **Critical** | CVE-2026-29611 (PR #2799) | Path traversal in `send_file` — compromised agent can read any container-visible file | #2799 (open, since Jun-17) |
| **Medium** | PR #2801 | `safeParseContent` returns `undefined` for non-object JSON primitives, breaking downstream callers | #2801 (open, since Jun-17) |
| **Low** | PR #2824 | Stale "Global Memory" instruction in seed prompt causes prompt pollution | #2824 (open, since today) |

The path traversal vulnerability is the most severe item, as it could allow credential exfiltration. The fix has been open for 4 days without merge.

## Feature Requests & Roadmap Signals

**Strongest request:** Prompt caching in the Claude provider (#2768). This is a performance optimization that would benefit any agent deployment using Anthropic's Claude, especially those with:
- Long or dynamic system prompts
- High-turn-rate conversations
- Cost-sensitive deployments (caching reduces token consumption)

**Prediction for next version:** Given that all open PRs are fixes, refactors, or documentation, the next version will likely be a maintenance release incorporating:
1. The security fix for `send_file` path traversal (CVE-2026-29611)
2. The `safeParseContent` robustness fix
3. Seed prompt cleanup and dead mount removal
4. Environment variable documentation

The prompt caching feature (#2768) may be deferred to a subsequent minor release unless it gains more community traction or maintainer prioritization.

## User Feedback Summary

User feedback is limited but reveals two pain points:

1. **Performance anxiety on Claude costs** — The prompt caching issue (#2768) implies users are experiencing unnecessary token consumption in multi-turn agent sessions. No explicit dissatisfaction is voiced, but the fact that a community member filed a detailed issue suggests real-world pain.

2. **Transparent operation is weak** — The `groups/global/CLAUDE.md` fix (PR #2823) and dead mount removal (PR #2822) indicate that users or operators have observed inconsistencies between the repository state and actual runtime behavior. The "host deletes it on every startup" comment suggests confusion for anyone following the repository structure for customization.

No satisfaction signals (e.g., praise, positive adoption stories) are present in this dataset.

## Backlog Watch

| Item | Age | Type | Status | Concern |
|------|-----|------|--------|---------|
| [PR #2799 — CVE-2026-29611](https://github.com/nanocoai/nanoclaw/pull/2799) | 4 days (since Jun-17) | Security fix | Open, unreviewed | Critical vulnerability unpatched; could allow credential exfiltration |
| [PR #2801 — safeParseContent fix](https://github.com/nanocoai/nanoclaw/pull/2801) | 4 days (since Jun-17) | Bug fix | Open, unreviewed | Medium-severity parsing issue; no workaround documented |
| [Issue #2768 — Prompt caching](https://github.com/nanocoai/nanoclaw/issues/2768) | 7 days (since Jun-14) | Feature request | Open, 1 comment | Performance gap; could increase deployment costs significantly |

**Maintainer attention needed:** PR #2799 is the most urgent item — a critical security vulnerability with a fix already submitted but awaiting review for 4 days. If no review pipeline exists, it may be worth establishing a security response SLA.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-21

## Today's Overview
Project activity remains low today, with two issues updated in the last 24 hours (one closed, one newly opened) and no pull request activity or new releases. The closed bug (#952) regarding incomplete local model responses suggests a resolution was reached, while a fresh critical error report (#967) about `NoResponseContent` on Windows signals a persistent reliability concern. Overall, the project appears stable but with limited development momentum; no features, fixes, or merges are visible today.

## Releases
**None.** No new releases were published in the last 24 hours. The latest available release remains v2026.5.29.

## Project Progress
**No pull requests were merged or closed today.** No features, bug fixes, or code changes were committed via PRs.

## Community Hot Topics
Two issues attracted community attention recently:

- **#952 [CLOSED] — [bug] Local model using ollama returns incomplete answers**  
  *Author: bloodgroup-cplusplus | 3 comments*  
  [Link](https://github.com/nullclaw/nullclaw/issues/952)  
  This issue, created 10 days ago and closed today, describes a problem where the agent using Gemma via Ollama failed to produce complete sentences. The resolution (likely a fix or workaround) addresses a core user expectation — reliable local model output. The discussion may contain valuable troubleshooting steps for similar setups.

- **#967 [OPEN] — [bug] error: NoResponseContent**  
  *Author: svier0 | 0 comments, newly opened today*  
  [Link](https://github.com/nullclaw/nullclaw/issues/967)  
  This critical issue reports a high-frequency error (over 50% of conversations) on Windows 11 using the Agnes-2.0-Flash model. The error occurs despite using the same model and API key that works in another application (picocla…). Underlying need: users expect consistent, reliable responses from the agent; a 12-out-of-21 failure rate undermines trust.

## Bugs & Stability
**One new bug reported today, severity high:**

- **#967 — error: NoResponseContent (Windows, high-frequency)**  
  *Severity: Critical*  
  The error appears more than half the time during conversations, on Windows 11 with v2026.5.29, using model Agnes-2.0-Flash. Response time is 27 seconds. The user explicitly notes the same configuration works in picocla…, suggesting a NullClaw-specific issue (possibly timeout handling, response parsing, or API communication). No fix PR exists yet.

**One bug resolved today:**
- **#952 — Incomplete local model answers (Ollama/Gemma)** — closed, resolution likely found or workaround provided.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the repeated pattern of reliability issues (incomplete answers, NoResponseContent) strongly signals that **robust error handling, retry logic, and clearer error messages** are the community's top unspoken needs. Future releases may prioritize:
- Fallback mechanisms for model communication failures
- Improved Windows compatibility testing
- User-configurable timeout or retry settings

## User Feedback Summary
- **Pain points:** High inconsistency in model response quality (both local and remote). On Windows, over 50% conversation failure rate is reported — a severely degraded user experience. Local model users also report truncated or incomplete answers.
- **Use cases:** Running NullClaw as a personal AI assistant on Windows with local (Ollama) or remote (Flash) models. Users expect conversational continuity and reliability comparable to other client applications.
- **Satisfaction/dissatisfaction:** The closure of #952 may improve satisfaction for local model users. However, the new #967 indicates persistent dissatisfaction among Windows users regarding response reliability. The 27-second response time also likely frustrates users expecting near-instant interactions.

## Backlog Watch
No long-unanswered issues or PRs are currently flagged. The open issue #967 is only a few hours old and has not yet received maintainer attention — it should be triaged promptly given its severity.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-21

## 1. Today's Overview

IronClaw shows high activity with **22 PRs updated in the last 24 hours**, 9 of which were merged or closed. The single open issue is an automated nightly E2E failure, with no user-reported regression flags. The project is in a **major consolidation phase**: multiple stacked PRs from the reborn (v2) architecture were folded into single integrated PRs (#5103, #5106, #5102 → #5107), and a CI modernization spike (#5086) produced real performance measurements. One stale nightly E2E failure (#4108) remains unaddressed for 25 days, but no critical regressions are blocking active development. Overall health is strong with core contributors driving large-scale architectural changes (manifest-driven channels, concurrent turn execution, one-shot triggers) across the reborn stack.

## 2. Releases

**No new releases** in the last 24 hours. The project continues in a pre-release phase for reborn features.

## 3. Project Progress

**9 PRs merged/closed in the last 24 hours**, representing significant architectural advancement:

### Merged Architectural Changes
- **PR #5107** ([OPEN] - serrrfirat) — Manifest-driven channel ingress contract: collapses Slack/Telegram-specific ingress, auth, transport, and credential logic into a single generic manifest-defined framework. This consolidated four prior stacked PRs (#5103, #5102, #5106).
- **PR #5105** (serrrfirat) — Fixed three stale provider/OAuth guard tests broken on `main` that went undetected due to being outside the reborn CI closure.
- **PR #5104** (serrrfirat) — Move 2 of manifest-driven channels: typed auth verifier + transport discriminator, net −54 lines.
- **PR #5103** (serrrfirat) — Move 1: manifest-projected ingress policy + typed auth + transport discriminator (closed in favor of #5107).
- **PR #5102** (serrrfirat) — Move 3: cross-contract credential coherence in v2 extension-manifest projection.
- **PR #5106** (serrrfirat) — Move 4: collapsed per-channel host-ingress mount sprawl into one generic plan.
- **PR #4829** (serrrfirat) — CI: retired dormant reborn-integration workflow, added reborn suites to nightly deep CI.
- **PR #5086** (serrrfirat) — Experimental full-suite gate with nextest archive + mold + sccache + sharding performance measurements.
- **PR #4777** (serrrfirat) — [codex] Fixed Slack reconnect loop in WebUI by persisting connected state.

### Key Feature Progression
- **One-shot scheduled triggers** (`TriggerSchedule::Once`) added as first-class schedule variant (PR #5065, open)
- **Concurrent turn execution** via `TurnRunScheduler` with per-user/per-type caps (PR #5085, open)
- **Proactive Google OAuth token refresh** before expiry (PR #5087, open)
- **Memory learning semantics** with confidence scoring + A/B gate (PR #4937, open)
- **Hosted single-tenant Postgres profile** for reborn (PR #5081, open)

## 4. Community Hot Topics

**No issues or PRs with significant community engagement.** All 22 PRs and the single issue have **0 comments** and **0 reactions**. This suggests the community is not actively participating in discussion—all activity is from core contributors and automated systems (GitHub Actions, Dependabot). The project appears to be in an internal development phase without external community involvement in the tracked surface.

## 5. Bugs & Stability

### Active Bugs

| Issue | Severity | Age | Status |
|-------|----------|-----|--------|
| **#4108** — Nightly E2E failed | **Medium** | 25 days open | No fix PR identified; automated report only |
| **#5105** — 3 stale OAuth guard tests broken on main | **Fixed** (merged today) | Resolved | Fix merged in PR #5105 |
| **#5108** — Reborn dependency-closure tail failures | **Low** | Opened today | Fix PR #5108 open |

**Analysis:** The sole active issue (#4108) is an automated nightly E2E failure with no comments or assignee. It has been open for 25 days without resolution, which is concerning for continuous integration health. The other three stale test failures were fixed today (PR #5105). No user-facing regressions have been reported.

### Recent Fixes (merged today)
- **PR #5105**: Fixed three stale security-relevant guard tests (provider/OAuth) that broke on `main`
- **PR #5108**: Automated agent-authored fix for reborn dependency-closure CI failures (3 remaining issues)

## 6. Feature Requests & Roadmap Signals

**No explicit user feature requests** appear in the tracked data. However, the PR backlog reveals clear roadmap signals:

### Likely Next Version Features (from open PRs)
1. **Manifest-driven channel ingress** (PR #5107) — Currently the most active area; consolidates all channel integration into manifest-defined contracts. Likely to land within days.
2. **Concurrent turn execution** (PR #5085) — Breaks the serial execution bottleneck for LLM inference runs. Critical for production scaling.
3. **One-shot scheduled triggers** (PR #5065) — First-class fire-once schedule variant alongside recurring Cron.
4. **Memory learning system** (PR #4937) — First PR of the reborn learning stack; "learn from mistakes, never repeat" parity with Hermes.
5. **Hosted single-tenant Postgres profile** (PR #5081) — Enables durable state for reborn hosted preview.

### CI Infrastructure Signals
- **Experimental full-suite gate** (PR #5086) — Proving out nextest + mold + sccache + sharding for merge-gate feasibility
- **Dependency bump** (PR #4002) — 16 GitHub Actions updates, including `actions/checkout` v4.3.1 → v7.0.0

## 7. User Feedback Summary

**No direct user feedback captured** in the tracked data. All activity is from:
- Core contributors (henrypark133, serrrfirat, standardtoaster)
- Automated bots (dependabot[bot], github-actions[bot])
- A single new contributor (theredspoon) submitting a CI improvement

The project appears to be in an **internal engineering phase** without visible end-user engagement on the public issue tracker.

## 8. Backlog Watch

### Critical Attention Needed
- **Issue #4108** — Nightly E2E failure, 25 days unresolved. No assignee, no comments. Automated failures that persist this long may indicate flaky tests or an infrastructure issue that needs diagnosis.

### Long-Standing Items
- **PR #4002** (dependabot) — Dependency bump with 16 GitHub Actions updates, open for 28 days. While automated, large action version bumps (e.g., `actions/checkout` v4→v7, `anthropics/claude-code-action` v1.0.88→v1.0.152) could have breaking changes that require human review.
- **PR #2548** (standardtoaster) — Workspace entities with membership and cross-workspace sharing, closed/merged today after being open since April 16 (66 days). This large PR (DB migration, risk: high) completed after a long cycle, suggesting it was a complex integration effort.

### New Contributor PR
- **PR #5101** (theredspoon) — CI improvement to reuse cargo-component installer in live canary. This is the only PR from a non-core contributor; it has been open for 1 day without maintainer engagement. Prompt response would encourage further contributions.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-21

## Today's Overview
The project shows low activity over the last 24 hours, with no new releases, no pull request activity, and no freshly opened issues. However, a batch of five long-standing issues (all opened in early April) were closed today after being marked as stale. These closures indicate a housekeeping effort by maintainers rather than recent feature or fix development. Overall, the project appears to be in a maintenance phase with no active user-reported bugs or feature requests currently open.

## Releases
No new releases were published in the last 24 hours. The latest release remains unchanged.

## Project Progress
No pull requests were merged or closed in the last 24 hours. No new PRs were opened or updated.

## Community Hot Topics
There were no highly active issues or PRs with significant new comments or reactions in the last 24 hours. The five issues closed today are the only items updated, and they are now stale/closed. Historical discussions worth noting:

- **Issue #1495** – [CLOSED] "无缘无故中断进程" (Process interrupted for no reason)  
  Author: xuzhiwu123  
  Updated: 2026-06-20  
  👤 2 comments, 1 👍  
  URL: [Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495)  
  This issue received the only positive reaction among the batch, suggesting other users may have experienced similar process interruption problems. The user questioned whether the cause is client-side or LLM-related.

- **Issue #1496, #1468, #1469, #1470** – All [CLOSED] – Multiple UX bugs related to unsaved changes in different modal/settings panels (Agent creation, Agent settings, MCP server config) were reported by the same user (MaoQianTu). These represent a systemic UX concern — silent data loss when closing dialogs — that received 2 comments each but no reactions.

## Bugs & Stability
All five bugs closed today are stale and were resolved without a specific fix PR associated in the available data. They are ranked by original severity:

1. **[High] Issue #1495** – Process interruption without clear cause. Affects runtime stability. User experience: tasks terminating unexpectedly. No fix PR visible; likely resolved via client/server updates outside the issue tracker.
2. **[Medium] Issue #1496** – Task showing as "completed" but returning no output. A functional bug that undermines trust in task execution reporting. No fix PR documented.
3. **[Medium] Issues #1468, #1469, #1470** – Silent data loss on closing modals (AgentCreateModal, AgentSettingsPanel, McpServerFormModal). UX regression affecting data integrity. No fix PR documented.

No new bugs were reported in the last 24 hours.

## Feature Requests & Roadmap Signals
No new feature requests were submitted in the last 24 hours. No roadmap signals from PRs or releases.

## User Feedback Summary
User pain points surfaced in the closed issues:

- **Process instability** (Issue #1495): A user reports frequent, unexplained process interruptions, questioning whether the problem lies in the client or the underlying LLM. This suggests reliability concerns among users.
- **Silent data loss** (Issues #1468–1470): A power user (MaoQianTu) filed three separate but related bugs about missing unsaved-changes confirmation dialogs across different configuration modals. This indicates a real friction point in the UX: users lose time re-entering system prompts, environment variables, and agent configurations.
- **Inconsistent task feedback** (Issue #1496): A user encountered a task that showed as complete but produced no result, a confusing and potentially blocking issue.

Overall sentiment appears to be moderate dissatisfaction around reliability and UX attention to detail, but these issues have now been closed (likely resolved or acknowledged as known limitations).

## Backlog Watch
No outstanding issues or PRs currently require maintainer attention. All past items have been closed. The backlog is effectively empty; however, the closure of several medium-severity UX bugs without visible fix PRs may warrant a follow-up check to confirm resolution strategies.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the TinyClaw project digest for 2026-06-21.

---

## TinyClaw Project Digest – 2026-06-21

### 1. Today's Overview
The project is in a low-activity state today, with no pull requests or releases. A single new issue has been filed, indicating a critical security vulnerability, which should be the maintainers' top priority. The lack of new code merges suggests the core team may be focusing on bug triage or preparation for the next sprint. Overall, the project is stable but facing a serious security incident that requires immediate attention to protect user environments.

### 2. Releases
**None** – No new releases were published in the last 24 hours. The latest stable version remains `0.0.20`.

### 3. Project Progress
**No PRs merged or closed today.** There is no record of any feature advancement or bug fix deployment in the last 24 hours.

### 4. Community Hot Topics
- **[Issue #285 (OPEN) – Security: Unauthenticated `prompt_file` update allows arbitrary local file read](https://github.com/TinyAGI/tinyagi/issues/285)**
    - *Author:* YLChen-007 | *Created:* 2026-06-20 | *Comments:* 0 | *Reactions:* 0
    - *Analysis:* This is the only active discussion. While it has no comments or reactions yet, it represents a **high-severity security concern**. The underlying need is for tightened authentication and input validation on the HTTP management API to prevent malicious clients from reading arbitrary local files through prompt injection.

### 5. Bugs & Stability
- **Severity: Critical** – **Issue #285** – **Unauthenticated `prompt_file` update allows arbitrary local file read**
    - *Description:* Any client with network access to the HTTP management API can set an agent’s `prompt_file` to an arbitrary local path (e.g., `/etc/passwd`), causing the provider to read and potentially leak sensitive files.
    - *Status:* No fix PR exists yet. Urgent action recommended.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were submitted today. However, the security gap exposed in Issue #285 strongly signals that the community expects:
- **Authentication middleware** for the management API.
- **Path validation/sanitization** for file-based prompt sources.
- **Least-privilege defaults** (e.g., restricting `prompt_file` to a designated config directory).

It is likely that the next patch release (v0.0.21) will be a security hotfix addressing this vulnerability.

### 7. User Feedback Summary
**Pain Points:**
- **Security fragility:** The report indicates that the current API security model is insufficient for production use, especially in multi-tenant or exposed environments.
- **Lack of access control:** Users relying on the HTTP management API are exposed to read-arbitrary-file attacks without authentication.

**Satisfaction/Dissatisfaction:**
- No positive or negative sentiment was expressed today beyond the security disclosure.

### 8. Backlog Watch
**No long-unanswered issues or PRs currently require maintainer attention.** The only item in the backlog is today’s newly filed security issue. The maintainers are urged to respond to and patch Issue #285 before it escalates.

---

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-21

## Today's Overview
Moltis saw a quiet day with no new issues, no new releases, and no community activity beyond automated dependency maintenance. Two dependency update pull requests were updated in the last 24 hours: one remains open (#1134), and one was merged/closed (#1133). Both are standard `npm_and_yarn` group bumps handled by Dependabot, indicating the project is in a stable, low-activity maintenance phase. There is no evidence of feature development, bug reporting, or user discussion today.

## Releases
None. No new releases were published.

## Project Progress
One pull request was merged/closed today:
- **#1133** — [CLOSED] chore(deps): bump astro from 6.3.3 to 6.4.8 in /docs in the npm_and_yarn group across 1 directory. This is a routine dependency update for the documentation site's Astro framework. No functional changes to the Moltis core product. ([PR #1133](https://github.com/moltis-org/moltis/pull/1133))

One pull request remains open:
- **#1134** — [OPEN] chore(deps): bump the npm_and_yarn group across 2 directories with 2 updates. This updates Astro (to 6.4.8) in `/docs` and Undici in `/website`. No discussion or review activity. ([PR #1134](https://github.com/moltis-org/moltis/pull/1134))

## Community Hot Topics
No community activity today. The two pull requests had zero comments and zero reactions. The repository shows no open issue threads with discussion.

## Bugs & Stability
No bugs, crashes, or regressions were reported today. The project appears stable with no known stability concerns surfaced in the last 24 hours.

## Feature Requests & Roadmap Signals
No user-submitted feature requests were observed today. The absence of any open feature issues or discussions suggests either the project's roadmap is being executed offline, or the community is not actively requesting new capabilities at this time.

## User Feedback Summary
No user feedback (positive or negative) was recorded today. There are no support requests, pain points, or satisfaction signals to analyze.

## Backlog Watch
No long-unanswered issues or pull requests requiring maintainer attention were identified. The only open item (#1134) is a fresh Dependabot PR with no aging concerns. The project backlog appears empty or fully addressed.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-21

## 1. Today's Overview
CoPaw shows **moderate development activity** with 6 issues and 9 PRs updated in the last 24 hours. Three issues were closed, and one PR was merged, indicating steady progress on bug fixes and feature work. The community has 8 open PRs, including three from first-time contributors, signaling healthy external engagement. No new releases were published today. Activity is concentrated around context management, provider compatibility, and sandbox security — areas critical for production deployments.

## 2. Releases
**No new releases.** The latest version remains `v1.1.12.post1` (referenced in Issue #5344). Users should monitor for the next release, which may include ReMe4 memory migration (#5349) and the scroll context manager (#5321).

## 3. Project Progress
**One PR merged today:**

- **#5128** ([closed](https://github.com/agentscope-ai/CoPaw/pull/5128)) — **Group Langfuse observations by agent loop** — Improves observability by grouping one full agent ReAct loop into a single trace, fixing the problem of disconnected LLM call traces. Useful for debugging production agents.

**Key open PRs advancing features:**

- **#5349** — Migrate memory runtime to **ReMe4** framework, keeping backward compatibility  
- **#5348** — Freeze `env_context` date per session to preserve KV cache prefix (performance optimization)  
- **#5346** — Run tools in Docker containers for sandbox isolation (security)  
- **#5347** — Fix cron job corruption by dropping invalid entries on startup  
- **#5321** — **Scroll context manager** — retrieval-driven alternative to native compression (under review)

## 4. Community Hot Topics
- **#5208** — *Bug: Assistant message count mismatch when model returns reasoning blocks with type "reasoning" instead of "thinking"* (6 comments, **CLOSED**). High interest: users of LongCat-2.0-Preview and similar models encountering silent message drops. The fix addresses a previously unhandled reasoning block type variant.

- **#5250** — *Cron scheduled tasks interrupt main chat conversation* (2 comments, **CLOSED**). A UX design tension: scheduled tasks being injected as user messages, derailing active conversations. Solved with PR #5347 which validates cron jobs and drops invalid entries.

- **#5345** — *Custom OpenAI-compatible providers don't support function calling* (1 comment, **OPEN**). User `qiyuanlicn` reports that OMLX works in Reasonix but not in CoPaw. Underlying need: full tool-use support for any OpenAI-compatible provider, not just Ollama.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) | `/api/console/chat` returns 200 but silently drops messages when agent is busy | **OPEN** — no fix PR yet |
| **High** | [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) | Tool results unpruned when LLM calls fail (502 errors), causing context explosion | **OPEN** — feat request, no fix PR |
| **Medium** | [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | Custom OpenAI providers (OMLX) don't support function calling | **OPEN** — provider-level gap |
| **Low** | [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) | Reasoning block type mismatch (LongCat-2.0-Preview) | **CLOSED** |
| **Low** | [#5250](https://github.com/agentscope-ai/CoPaw/issues/5250) | Cron tasks interrupt chat conversations | **CLOSED** — fixed in PR #5347 |

**Critical concern:** #5344 (silent message drops) and #5342 (context explosion) both pose real reliability risks for production agents. No fix PRs currently exist for either.

## 6. Feature Requests & Roadmap Signals

**Likely in next version:**
- **ReMe4 memory migration** (PR #5349) — upgrading from legacy `ReMeLight` to the ReMe4 framework
- **Scroll context manager** (PR #5321) — durable, retrieval-driven context strategy (under review)
- **Session-date KV cache freeze** (PR #5348) — performance improvement for overnight sessions

**Community-requested features:**
- **Hard cap on tool result size** (#5342) — defense-in-depth against context explosion when LLM calls fail
- **Docker sandbox for tool execution** (#5346) — first-time contributor adding container isolation
- **Workspace-constrained file tools** (#5341) — security hardening for `read_file`/`write_file` to prevent path traversal

## 7. User Feedback Summary

**Pain Points:**
- **Silent message loss** (#5344): "Messages sent via POST /api/console/chat return HTTP 200 but are silently discarded" — erodes user trust in API reliability
- **Provider fragmentation** (#5345): OMLX works in competing projects but not in CoPaw — users want "plug and play" OpenAI-compatible support
- **Cron interruption UX** (#5250): scheduled tasks derailing active conversations — users want smarter task prioritization

**Satisfaction signals:**
- Closed issue #5208 (reasoning block mismatch) shows maintainers are responsive to model provider quirks
- PR #5128 (Langfuse trace grouping) addresses a long-standing observability pain point — merged today

## 8. Backlog Watch

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) | 1 day | **OPEN** | No fix PR — silent message drops is a critical reliability bug |
| [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) | 1 day | **OPEN** | Context explosion vulnerability — defense-in-depth request with no assignee |
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | 1 day | **OPEN** | Provider interoperability gap — may affect many self-hosted users |

*Note: All open issues are very recent (1 day old). No long-unanswered issues were present in this snapshot.*

---

*Digest generated 2026-06-21 from CoPaw GitHub activity (agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for June 21, 2026.

***

# ZeroClaw Project Digest — 2026-06-21

## 1. Today's Overview
The ZeroClaw project is in a **high-velocity development phase**, with 50 issues and 50 PRs updated in the last 24 hours. Activity is heavily concentrated on **security infrastructure (OIDC/auth)** and **observability enhancements**, alongside a steady stream of bug fixes for the agent loop, provider compatibility, and channel integrations. The project maintains a significant backlog of high-severity bugs (many `priority:p1`), but the PR pipeline shows strong momentum in addressing them. There were no new releases today, though work is progressing toward v0.9.0.

## 2. Releases
No new releases were reported for 2026-06-21.

## 3. Project Progress
10 pull requests were merged or closed in the last 24 hours. Key developments include:
- **[PR #7932] fix(docker): correct Node 24 digest pins** — A CI fix ensuring Docker build integrity by refreshing pinned digests.
- **[PR #8036] test(runtime): pin system prompt in cache-hit test to kill date flake** — A test stability fix that prevents flaky CI results by freezing the date in test system prompts.
- **[PR #7616] fix(providers): strip assistant reasoning on outbound replay for Groq** — Fixes a provider compatibility issue where Groq rejected messages containing `reasoning_content`.
- **[PR #7877] [Bug]: external coding tools resolve relative working_directory from daemon cwd** — Closed; addresses a bug where external tool working directories were resolved incorrectly.
- **[PR #7795] [Bug]: static_voice_peers caches config-derived voice peers on the channel handle (latent SSOT violation)** — Closed; resolves a config caching violation in Telegram voice channels.

## 4. Community Hot Topics
The most active discussions reflect deep architectural and usability concerns:

- **[#5849] Dream Mode — Periodic Memory Consolidation & Reflective Learning** (18 comments) — The most-discussed issue. Users are requesting a background process for memory consolidation during idle times, indicating a strong desire for **autonomous memory management** that can self-improve without manual prompting. This suggests ZeroClaw's current memory model is powerful but requires constant user input to stay relevant.

- **[#5862] zeroclaw does not know it can add cron** (13 comments) — A fundamental discoverability issue: the agent fails to recognize its own scheduling capabilities. This highlights a **user experience gap** where the agent's tool-aware system prompt is not comprehensive enough to describe its own features.

- **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup** (11 comments) — A governance-focused RFC that has attracted significant attention, indicating maintainers are actively working to **scale their development process** as the project grows.

- **[#7141] OIDC Authentication Provider support** (6 comments) — A high-priority security feature tracking issue that is central to the upcoming v0.9.0 release. The community is engaged in defining the pluggable auth provider seam.

## 5. Bugs & Stability
Several critical and high-severity bugs were active or reported today:

**S0 / Critical (Data loss / Security risk):**
- **[#6672] reasoning_content not passed back in agentic tool-call loops (Xiaomi models)** — Open; an S0 bug where reasoning content is lost in multi-turn agent loops, breaking thinking-mode compatibility. *No fix PR yet.*
- **[#6558] providers erro** — Blocked; a custom provider (Aliyun DashScope) returns a 405 error. *Blocked awaiting author action.*

**S1 / Blocker:**
- **[#5808] Default 32k context budget exceeded by system prompt + tool definitions** — Open; a fundamental scaling issue where fresh conversations exceed budget by 3.3x on iteration 1, causing perpetual unnecessary trimming. *Status: in-progress.*
- **[#6037] Cron jobs can be launched repeatedly while still running** — Open; a critical scheduling bug that can cause task bursts (20x execution in 3 minutes).
- **[#6036] Agent enters infinite tool-call loop on Termux/Android** — Closed; a new issue was filed today ([#8047](#8047)) with similar symptoms, suggesting the root cause may not be fully eliminated.

**S2 / Degraded behavior:**
- **[#8047] ReadSkillTool looks in `data_dir` but skills live in agent workspace** — Filed today; a broken link between the skill reading tool and the actual skill storage location.
- **[#6517] Context Overflow Causes Hallucination / Topic Drift** — Open; long-running conversations lead to context window overflow and hallucination.
- **[#5844] Too much emphasis on memory** — Open; cron jobs over-prioritize historical memory over current task context, causing degraded performance.

## 6. Feature Requests & Roadmap Signals
The following features point toward the project's near-term direction:

**Likely in v0.9.0 (Auth & Security):**
- **[#7141] OIDC Authentication Provider support** — Already accepted; PRs like [#8063](#8063) (Principal type + AuthProvider seam) are landing now.
- **[#7432] v0.9.0 auth, security, gateway, and breaking-change queue** — This tracker issue indicates a major security-focused release is the immediate priority.

**Likely in v0.8.2 (Skills Platform):**
- **[#7852] v0.8.2 skills platform** — A tracker for registries, plugin-bundled skills, and operator-visible skill facts.
- **[#5262] Add ZeroClaw logo to official Agent Skills client list** — A small but strategic community-facing feature request.

**Emerging trends:**
- **Voice & Multi-Channel UI** — [#7944](#7944) proposes a voice satellite device, and [#7531](#7531) requests streaming card messages for Chinese messaging platforms.
- **Observability** — [#7232](#7232) and [#6641](#6641) signal a push toward structured, correlated observability with OpenTelemetry. PRs [#8066](#8066) and [#8065](#8065) were filed today, adding opt-in LLM payload capture and trace_id correlation.
- **LSP Support for Coding** — [#5907](#5907) RFC remains blocked but accepted; this could be a major differentiator for agentic coding.

## 7. User Feedback Summary
Real user pain points reveal a pattern: **ZeroClaw is powerful but struggles with self-awareness and reliability in edge cases.**
- **Discoverability:** Users report ZeroClaw "does not know it can add cron" ([#5862](#5862)), and agents "seem unable to answer questions about ZeroClaw features" ([#7950](#7950)). Users want the agent to be competent at describing its own capabilities.
- **Memory vs. Context Balance:** Multiple users report that memories overwhelm current task context, especially in cron jobs ([#5844](#5844)), and that context overflow causes hallucinations ([#6517](#6517)).
- **Provider Compatibility:** Users are actively testing custom and Chinese providers (DashScope, Xiaomi, Groq) and hitting non-trivial compatibility issues in streaming, reasoning, and error handling.
- **Android/Termux Stability:** The Android platform continues to suffer from reliability issues (infinite loops, service startup failures), though closing of issue [#6036](#6036) suggests some progress.

## 8. Backlog Watch
Several important items risk stalling without maintainer attention:

- **[#5907] RFC: Opt-in LSP support for ZeroCode coding workflows** — Last updated 2026-06-20, but remains *blocked* since Apr 2026. No PR activity. This is a high-value feature for developer users.
- **[#6672] reasoning_content not passed back in agentic tool-call loops (Xiaomi)** — *Blocked, needs-author-action* since May 15. This is an S0 bug; if the author is unresponsive, maintainers may need to pick this up.
- **[#6037] Cron jobs launched repeatedly** — A `priority:p1` bug with only 1 comment, last updated June 20. No fix PR exists. This is a significant reliability issue for production users.
- **[#6558] providers erro (Aliyun DashScope 405)** — Blocked since May 10. Custom provider configuration is not well-documented, and this user's issue may represent a broader problem with custom OpenAI-compatible endpoints.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*