# OpenClaw Ecosystem Digest 2026-05-30

> Issues: 326 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-30 00:25 UTC

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

# OpenClaw Project Digest — 2026-05-30

## 1. Today's Overview

OpenClaw shows **exceptionally high development velocity** with 326 issues and 500 PRs touched in 24 hours, indicating a mature project in active stabilization phase. The 4 beta releases (v2026.5.28-beta.1 through beta.4) focus heavily on **Codex runtime reliability**, suggesting the team is hardening agent execution infrastructure ahead of a stable release. With 341 open PRs against 159 merged/closed, the project maintains a healthy ~2:1 open-to-closed ratio, though the volume indicates significant feature work in flight. The community is highly engaged with complex, production-grade bug reports involving multi-provider OAuth, session state management, and event-loop performance at scale.

---

## 2. Releases

### v2026.5.28-beta.1 through v2026.5.28-beta.4
**Published:** 2026-05-28 (4 rapid iterations)

| Version | Focus |
|---------|-------|
| beta.1–beta.4 | Agent and Codex runtime recovery hardening |

**Key Changes (consistent across all beta releases):**
- **Subagent workspace isolation**: Subagents now preserve `cwd/workspace` separation, preventing cross-contamination
- **Prompt-local hook context**: Hook context no longer leaks between prompts
- **Session lock timeout cleanup**: `session locks release on timeout abort` — fixes deadlock scenarios
- **Stale restart continuation prevention**: Eliminates phantom turn completion bugs
- **Codex app-server/helper failure isolation**: Shared runtime state survives individual component failures

**Migration Notes:** No breaking changes documented; these are stability patches. Users on 2026.5.27 experiencing Codex runtime failures should upgrade immediately.

---

## 3. Project Progress

### Merged/Closed PRs (Selected High-Impact)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [#88107](https://github.com/openclaw/openclaw/pull/88107) | RomneyDa | **Merged** | Release automation: tarball now includes only current changelog section |
| [#88160](https://github.com/openclaw/openclaw/pull/88160) | RomneyDa | **Merged** | Test infra: isolated fake-timer tests to prevent parallel flakiness |
| [#84535](https://github.com/openclaw/openclaw/pull/84535) | funmerlin | **Merged** | Discord: message actions now resolve against runtime config, fixing `configured_unavailable` errors with SecretRef tokens |

### Ready for Merge (Maintainer-Reviewed)

| PR | Focus | Risk Level |
|----|-------|------------|
| [#88161](https://github.com/openclaw/openclaw/pull/88161) | **Restart sentinel internal continuations** — prevents synthetic restart turns from auto-delivering output to channels | 🚨 compatibility, 🚨 message-delivery |
| [#88130](https://github.com/openclaw/openclaw/pull/88130) | **Codex auth preservation for compaction fallback** — fixes OAuth → direct API key regression | 🚨 compatibility, 🚨 auth-provider |
| [#88135](https://github.com/openclaw/openclaw/pull/88135) | **Codex stale managed runtime plugin refresh** — fixes post-`doctor --fix` runtime mismatch | 🚨 compatibility, 🚨 auth-provider |
| [#84814](https://github.com/openclaw/openclaw/pull/84814) | **Embedded provider business denial classification** — enables proper fallback routing | 🚀 automerge armed |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count & Engagement)

| Issue | Comments | Status | Core Problem |
|-------|----------|--------|--------------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 13 | **OPEN** | Windows chat UI regression: input swallowed, streamed replies invisible — **platinum hermit** rated, affects basic usability |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | 12 | **CLOSED** | `doctor --fix` silently migrates `openai-codex/` → `openai/`, breaking PI+OAuth and causing **3-4× token inflation** |
| [#88102](https://github.com/openclaw/openclaw/issues/88102) | 11 | **CLOSED** | Codex runtime rejects `openai/gpt-5.5`; workaround drops Telegram `/status` |
| [#86820](https://github.com/openclaw/openclaw/issues/86820) | 10 | **OPEN** | Codex OAuth compaction falls back to direct OpenAI API, fails without `OPENAI_API_KEY` |
| [#75378](https://github.com/openclaw/openclaw/issues/75378) | 8 | **OPEN** | Gateway event loop saturation on parallel subagent spawn → **1012 restart** |

**Underlying Needs Analysis:**
- **Windows users** need reliable web UI (long-standing regression since 2026.4.14)
- **Codex runtime users** need stable OAuth → provider routing without silent config mutations
- **Multi-agent deployments** need event-loop isolation to prevent cascade failures
- **Production operators** need `doctor --fix` to be non-destructive to intentional configurations

---

## 5. Bugs & Stability

### Critical (P1) Regressions — Active or Recently Fixed

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| 🔴 **CRITICAL** | [#88102](https://github.com/openclaw/openclaw/issues/88102) | CLOSED | [#88135](https://github.com/openclaw/openclaw/pull/88135) | Codex runtime model rejection post-2026.5.27 |
| 🔴 **CRITICAL** | [#87650](https://github.com/openclaw/openclaw/issues/87650) | OPEN | [#88135](https://github.com/openclaw/openclaw/pull/88135) | `doctor --fix` + `onboard` fail to recover Codex provider/runtime mismatch |
| 🔴 **CRITICAL** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | OPEN | — | Codex-backed Telegram turns **timeout waiting for turn/completed** |
| 🔴 **CRITICAL** | [#87646](https://github.com/openclaw/openclaw/issues/87646) | OPEN | — | Feishu channel **completely broken** after 2026.5.27 — `TypeError: read property 'run' of undefined` |
| 🟡 **HIGH** | [#67035](https://github.com/openclaw/openclaw/issues/67035) | OPEN | — | Windows chat UI **unusable** since April |
| 🟡 **HIGH** | [#54155](https://github.com/openclaw/openclaw/issues/54155) | OPEN | — | Gateway **memory leak**: 389MB → 14.7GB over 4 days |
| 🟡 **HIGH** | [#75378](https://github.com/openclaw/openclaw/issues/75378) | OPEN | — | Event loop saturation → **1012 restart** on parallel subagents |

### Stability Patterns
- **Codex runtime** is the dominant failure mode in 2026.5.27 (4+ P1 issues)
- **Event loop blocking** recurring theme: compaction, model resolution, subagent spawn all cause multi-second stalls
- **Session state corruption**: write-lock races, stale lock files, transcript lock leaks

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Description | Likelihood in Next Release |
|-------|-------|-------------|---------------------------|
| [#17925](https://github.com/openclaw/openclaw/issues/17925) | 👍 5 | Native `web_search` passthrough for ZAI (GLM) and Google (Gemini) providers | **HIGH** — infrastructure exists for xAI Grok; pattern is clear |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | 👍 3 | TUI: `Shift+Enter` for newline | **MEDIUM** — small UX fix, low risk |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 👍 3 | Per-agent dreaming configuration | **MEDIUM** — memory pressure concern, architectural change |
| [#82596](https://github.com/openclaw/openclaw/pull/82596) | — | **Exec denylist** feature (bridge between allowlist and full YOLO) | **HIGH** — XL PR in progress, security-critical |

**Emerging Signals:**
- **A2A (agent-to-agent) protocol** maturation: [#88158](https://github.com/openclaw/openclaw/pull/88158) fixes `send_to_task` body alias normalization for Anthropic/Pi agents
- **Telegram interleaved progress**: [#87072](https://github.com/openclaw/openclaw/pull/87072) adds opt-in reasoning lane — matches CLI ergonomics

---

## 7. User Feedback Summary

### Pain Points (Explicit User Statements)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent config destruction** | "doctor --fix silently migrates intentional openai-codex/ config to openai/" — causes production auth breakage + 3-4× cost inflation | 🔴 Critical |
| **Upgrade fragility** | Multiple reports of 2026.5.27 breaking previously working Codex + Telegram/Feishu setups | 🔴 Critical |
| **Windows neglect** | Chat UI "regressed badly" since 2026.4.14, no fix in 6+ weeks | 🟡 High |
| **Opaque failures** | "Provider returned error" (reason=format) with no actionable detail for `kimi-k2.6` | 🟡 High |
| **Memory unbounded growth** | 14.7GB gateway process on 24GB Mac Mini — production unsustainable | 🟡 High |

### Positive Signals
- **Active-memory plugin** users appreciate subagent recall (despite deadlock risk now fixed)
- **Codex OAuth** users value PI runtime cost savings when working
- **Multi-channel** (Telegram, Feishu, Discord, Matrix) support is a key differentiator

---

## 8. Backlog Watch

### Long-Standing Important Issues Needing Attention

| Issue | Age | Last Update | Blocker |
|-------|-----|-------------|---------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 6+ weeks | 2026-05-29 | **No fix PR**, needs live repro, Windows-specific |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | 9+ weeks | 2026-05-29 | **No fix PR**, memory leak reproduction complex |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) | 10+ weeks | 2026-05-29 | **No fix PR**, Moonshot/Kimi duplicate tool-call IDs — WhatsApp exposes, not causes |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) | 7+ weeks | 2026-05-29 | **No fix PR**, `node:sqlite` missing FTS5 — needs Node.js upstream or build change |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | 16+ weeks | 2026-05-29 | **No fix PR**, TUI UX papercut |

### PRs Waiting on Author (>1 week stale)

| PR | Age | Status | Risk |
|----|-----|--------|------|
| [#82596](https://github.com/openclaw/openclaw/pull/82596) | 2 weeks | ⏳ waiting on author | XL feature PR — exec denylist, security boundary |
| [#86138](https://github.com/openclaw/openclaw/pull/86138) | 1 week | ⏳ waiting on author | XS security hardening — bundled plugin discovery |
| [#87796](https://github.com/openclaw/openclaw/pull/87796) | 2 days | ⏳ waiting on author | CI automation — lockfile scrubbing |

### Maintainer Attention Needed
- **ClawSweeper bot** has [#84814](https://github.com/openclaw/openclaw/pull/84814) automerge-armed but blocked on validation — may need human override
- **Event loop performance** cluster: [#75378](https://github.com/openclaw/openclaw/issues/75378), [#86358](https://github.com/openclaw/openclaw/issues/86358), [#86635](https://github.com/openclaw/openclaw/issues/86635) — systemic architectural concern, not isolated bugs

---

*Digest generated from 326 issues, 500 PRs, and 4 releases as of 2026-05-30.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-05-30 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **intense stabilization pressure** as projects transition from feature expansion to production hardening. Multi-channel integration (Telegram, Slack, Feishu, Discord, Matrix) has become table stakes, while **security boundary enforcement**, **memory reliability**, and **multi-agent orchestration** are emerging as the next competitive battlegrounds. The field is bifurcating: mature projects (OpenClaw, Hermes Agent, CoPaw) are wrestling with regression management at scale, while newer entrants (NanoClaw, NullClaw, PicoClaw) are building credential architecture and observability foundations from first principles. A notable industry-wide trend is the tension between **cloud-optimized defaults** and growing **local-first/edge deployment** demand, particularly from cost-sensitive and privacy-conscious users.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:--------|:-----------:|:---------:|:---------|:-------------|:-----------|
| **OpenClaw** | 326 | 500 | 4 betas (v2026.5.28-beta.1–4) | 🟡 Stabilizing | Exceptional volume; regression-heavy; mature stabilization |
| **NanoBot** | 33 | 43 | None | 🔴 Security audit | 64% security-related; urgent release needed |
| **Hermes Agent** | 50 | 50 | v0.15.1, v0.15.2 (emergency) | 🟡 Stressed | Same-day hotfixes; packaging crisis; responsive but strained |
| **PicoClaw** | 3 | 8 | v0.2.9 | 🟢 Healthy | Moderate pace; security + i18n maturation |
| **NanoClaw** | 2 | 8 | None | 🟡 Active | Burst contribution; observability + security focus |
| **NullClaw** | 3 resolved | 12 | v2026.5.29 | 🟢 Stable | All issues closed; zero backlog; Zig-based efficiency |
| **IronClaw** | 18 | 46 | None | 🟡 Rewriting | "Reborn" architecture; auth-intensive; E2E failing |
| **LobsterAI** | 1 new | 14 | None | 🟡 Performance focus | Renderer scaling; 5 stale community PRs; production regression |
| **Moltis** | 4 | 2 | None | 🟢 Constrained | macOS sandbox gaps; strategic feature latency |
| **CoPaw** | 46 | 34 | v1.1.10-beta.1 | 🟡 Stabilizing | v1.1.9 regression wave; multi-agent architecture advance |
| **ZeroClaw** | 17 | 41 | None (v0.7.5 stale) | 🔴 Bottlenecked | 7.3% PR merge rate; security boundary erosion; version confusion |
| **TinyClaw** | 0 | 0 | None | ⚫ Dormant | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚫ Dormant | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peers |
|:----------|:---------|:------|
| **Scale** | 326 issues / 500 PRs in 24h — 10× NanoBot, 7× Hermes | Largest active codebase by raw activity |
| **Release velocity** | 4 beta iterations in 2 days | Hermes: 2 emergency patches; most: none |
| **Multi-channel depth** | 8+ production channels with OAuth, PI runtime, Codex integration | NanoBot: fewer channels; NullClaw: Telegram/LINE only |
| **Codex runtime** | Native OpenAI Codex agent execution with OAuth compaction | Unique; competitors use direct API or lack equivalent |

### Technical Approach Differences
- **OpenClaw**: Event-loop driven Node.js/TypeScript architecture with heavy emphasis on **session state management**, **subagent workspace isolation**, and **provider OAuth routing**. Codex runtime is a differentiated proprietary integration point.
- **NanoBot/CoPaw**: Python-first with stronger desktop/Tauri integration and "skills" plugin systems; more consumer-oriented.
- **NullClaw**: Zig-based systems programming approach — smaller footprint, faster execution, but narrower channel coverage.
- **IronClaw**: Rust with "Reborn" WASM extension model; blockchain-adjacent (NEAR AI); enterprise auth-heavy.

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale** — its issue/PR volume exceeds all non-CoPaw projects combined. However, this scale brings **coordination costs**: 341 open PRs vs. 159 closed indicates a broader contributor base but higher review latency. NullClaw achieves better closure rates with fewer contributors; Hermes and CoPaw show similar "responsive but overwhelmed" patterns.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:------------|:---------|:---------------|
| **Multi-agent orchestration** | OpenClaw, CoPaw, PicoClaw, Hermes (#514 A2A), Moltis (#235) | Hierarchical → peer-to-peer delegation; workspace isolation; A2A protocol interoperability |
| **Security boundary enforcement** | NanoBot (21 disclosures), ZeroClaw (#6699, #6991), OpenClaw (exec denylist #82596), PicoClaw (Tirith #2877) | Tool filter governance; sandbox escape prevention; MCP server audit; credential zeroization |
| **Memory reliability** | NanoBot (#4044 short-term loss), OpenClaw (session lock races), CoPaw (#4795 37GB ChromaDB), NullClaw (#917 global memory fix) | Context preservation across turns; compaction without data loss; vector DB bounded growth |
| **Observability/tracing** | NanoClaw (#2456 LangFuse), IronClaw (design docs), OpenClaw (event-loop metrics) | Per-session cost/latency tracking; production debugging; provider-agnostic instrumentation |
| **Local/edge deployment** | PicoClaw (#2625 ARM builds), ZeroClaw (#5287 Local-First), Moltis (Docker sandbox) | ARM build matrices; prompt compression; small-model optimization; offline capability |
| **Enterprise channel robustness** | OpenClaw (Feishu broken #87646), CoPaw (Feishu restructure #4742), ZeroClaw (WeCom #3090, Slack #6992), NullClaw (LINE #934) | Socket mode reliability; OAuth refresh; E2EE verification; corporate proxy traversal |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:--------|:----------------------|:------------|:-----------------------|
| **OpenClaw** | Codex runtime + multi-provider OAuth | Power users, multi-channel operators | Event-loop TS; plugin ecosystem; PI runtime cost optimization |
| **NanoBot** | Rapid security response + manual memory mode | Security-conscious deployers | Python; skills-based; active memory plugin |
| **Hermes Agent** | Local model optimization + dashboard UX | Self-hosters, privacy-focused | Python; lazy loading (#6839); boundary-aware compression |
| **PicoClaw** | Hardware maker integration (Sipeed) | Edge/IoT builders | Go; embedded-friendly; Tirith security scanning |
| **NanoClaw** | OneCLI credential architecture + LangFuse | DevOps-integrated teams | TypeScript; v2 security model; Claude tracing |
| **NullClaw** | Zig performance + zero backlog | Systems programmers, minimalists | Zig; ACP protocol; macOS sandbox |
| **IronClaw** | NEAR blockchain + WASM extensions | Web3/enterprise auth | Rust; "Reborn" WASM; durable product auth |
| **LobsterAI** | Desktop-native renderer performance | Windows desktop users | Tauri; deferred rendering; cowork sessions |
| **CoPaw** | Desktop pet + Chinese market channels | Consumer China market | Python/Tauri; Qwen integration; Feishu/WeCom depth |
| **ZeroClaw** | Schema-Guided Reasoning + sandbox RFC | Compliance-sensitive enterprise | TypeScript; granular sandbox policy; TUI investment |
| **Moltis** | PTY-based agent interoperability | Autonomous coding agent builders | TypeScript; Claude Code orchestration; sandbox abstraction |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, High Risk)
| Project | Characteristics |
|:--------|:----------------|
| **OpenClaw** | 800+ items/day; regression management at scale; pre-stable release |
| **CoPaw** | 80 items/day; v1.1.9 regression wave; first-time contributor surge |
| **IronClaw** | 64 items/day; "Reborn" rewrite; auth system critical path; E2E red |

### Tier 2: Stabilizing (Moderate Velocity, Production Hardening)
| Project | Characteristics |
|:--------|:----------------|
| **Hermes Agent** | 100 items/day; emergency patches; packaging CI gaps; v0.15.x consolidation |
| **NanoBot** | 76 items/day; security audit cycle; unpatched criticals; release-blocked |
| **ZeroClaw** | 58 items/day; review bottleneck; security boundary erosion; version confusion |

### Tier 3: Active Maintenance (Focused, Lower Volume)
| Project | Characteristics |
|:--------|:----------------|
| **NanoClaw** | 10 items/day; burst contributions; observability + security focus |
| **NullClaw** | 15 items/day; zero backlog; all issues resolved; Zig efficiency |
| **LobsterAI** | 15 items/day; renderer scaling; stale community PRs; production regression |
| **PicoClaw** | 11 items/day; i18n + security maturation; edge deployment friction |

### Tier 4: Constrained / Dormant
| Project | Characteristics |
|:--------|:----------------|
| **Moltis** | 6 items/day; macOS sandbox gaps; strategic feature #235 unaddressed 94 days |
| **TinyClaw, ZeptoClaw** | Zero activity; likely abandoned or paused |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:------|:---------|:------------------------------|
| **A2A protocol maturation** | Hermes #514 (23 comments); OpenClaw #88158 (send_to_task normalization); PicoClaw #2929 (peer-to-peer request); industry Google A2A standard | Build for interoperability; avoid monolithic agent architectures; invest in protocol adapters early |
| **Security boundary as first-class concern** | NanoBot 21 disclosures; ZeroClaw tool_filter_groups no-op; OpenClaw exec denylist; PicoClaw Tirith integration | Assume tool execution is adversarial; design auditability into MCP/native tool boundaries; implement defense-in-depth |
| **Memory architecture as competitive moat** | NanoBot #4044 (context "snapping"); CoPaw #4795 (37GB ChromaDB); OpenClaw session lock races; Hermes paginated memory #34745 | Context window pressure is universal; invest in compaction, summarization, and retrieval reliability; bounded growth guarantees |
| **Local-first / small-model constituency** | ZeroClaw #5287 (only upvoted feature); PicoClaw #2625 (ARM edge); Hermes lazy loading #6839; Moltis #1085 (Docker ARM) | Prompt compression, parser strictness, and offline capability are underserved; config profiles for "cloud vs. edge" may be needed |
| **Credential architecture centralization** | IronClaw "durable product auth"; NanoClaw OneCLI v2; NullClaw hashed paired tokens; OpenClaw OAuth → direct API key regression | Treat credentials as infrastructure, not configuration; centralize rotation, audit, and provider abstraction |
| **Observability as production prerequisite** | NanoClaw #2456 (LangFuse); IronClaw design docs; OpenClaw event-loop metrics | Per-session tracing is no longer optional for cost control and debugging; provider-agnostic instrumentation reduces lock-in |
| **Desktop/consumer UX vs. server reliability tension** | CoPaw pet + cron loops; LobsterAI scroll freeze; NanoBot Windows exec fix | Desktop polish and server stability require separate test matrices; "works on my machine" packaging failures are systemic (Hermes v0.15.0, OpenClaw Windows UI) |

---

## Executive Summary

OpenClaw maintains **ecosystem leadership by scale and integration depth** but faces **stabilization challenges** common to mature projects. The field is converging on **security boundaries**, **memory reliability**, and **multi-agent protocols** as the next differentiation layer. Projects with **zero backlog discipline** (NullClaw) or **security-first architecture** (NanoClaw v2, ZeroClaw RFCs) are building sustainable foundations, while **volume leaders** must balance velocity with regression control. The **local-first/edge deployment** segment remains underserved and represents a strategic opportunity for projects with ARM build infrastructure and prompt compression expertise.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-30

## 1. Today's Overview

NanoBot experienced **exceptionally high activity** with 76 total updates (33 issues, 43 PRs) in the past 24 hours, indicating a major development sprint or security audit cycle. The project shows **strong maintainer responsiveness** with 16 merged/closed PRs against 27 open ones, though the volume of new security disclosures from contributor `hamb1y` suggests either an ongoing security review or recent vulnerability discovery. No new releases were cut despite the substantial merge activity. The community remains engaged with active discussion on memory architecture and WeChat integration limits.

---

## 2. Releases

**No new releases** were published today. The last release remains prior to this reporting period.

---

## 3. Project Progress

### Merged/Closed PRs Today (16 total, key items shown)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) | chengyongru | **Model presets with automatic failover** — `ModelPresetConfig` bundles model + provider + generation parameters with runtime switching | Major UX enhancement for multi-model deployments |
| [#4051](https://github.com/HKUDS/nanobot/pull/4051) | chengyongru | **Windows exec fix** — bypasses `cmd.exe` for multi-line Python commands using PowerShell | Reliability fix for Windows developers |
| [#4043](https://github.com/HKUDS/nanobot/issues/4043) | tjc0726 | Config to disable automatic document extraction *(issue closed)* | Addresses workflow flexibility needs |

### Features Advanced

- **Manual memory mode** ([PR #4050](https://github.com/HKUDS/nanobot/pull/4050) by `outlook84`): Isolated memory flow from automatic mode, addressing long-standing user requests for explicit memory control ([#3885](https://github.com/HKUDS/nanobot/issues/3885), [#3948](https://github.com/HKUDS/nanobot/issues/3948))
- **SSRF hardening** ([PR #4086](https://github.com/HKUDS/nanobot/pull/4086) by `yorkhellen`): IPv6-mapped IPv4 normalization for SSRF checks

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) — WeChat 10-message context limit | **7 comments**, closed | **Core platform limitation**: WeChat's `context_token` caps responses at 10 messages. Users need workarounds for longer conversations; solution likely requires pagination or external memory bridging. |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) — Short-term memory loss | **4 comments**, open | **Critical UX regression**: Conversational thread "snaps" between turns. Root cause identified as context window pressure from system prompts (SOUL.md, USER.md, MEMORY.md, skills) or prompt caching failures. High user frustration evident. |
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) — Matrix E2EE verification handling | **1 comment**, open | **Cross-platform trust issue**: Element X clients flag unverified devices. Requires `m.key.verification.*` event handling in Matrix channel. Blocks enterprise Matrix adoption. |

**Underlying needs**: Memory architecture reliability, platform-specific integration depth (WeChat, Matrix), and transparent handling of external API constraints.

---

## 5. Bugs & Stability

### Critical/High Severity (Security & Data Integrity)

| Issue | Severity | Description | Fix PR |
|:---|:---|:---|:---|
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) | **Critical** | OpenAI-compatible API accepts **unauthenticated requests** to agent loop | *Pending* |
| [#4077](https://github.com/HKUDS/nanobot/issues/4077) | **Critical** | WebSocket token route mints tokens **without authentication** when `tokenIssueSecret` empty | [#4103](https://github.com/HKUDS/nanobot/pull/4103) |
| [#4076](https://github.com/HKUDS/nanobot/issues/4076) | **Critical** | `message` tool sends to **unauthorized recipients** with arbitrary media paths | [#4102](https://github.com/HKUDS/nanobot/pull/4102) |
| [#4075](https://github.com/HKUDS/nanobot/issues/4075) | **High** | Dream overwrites **user skills without ownership check** | [#4101](https://github.com/HKUDS/nanobot/pull/4101) |
| [#4074](https://github.com/HKUDS/nanobot/issues/4074) | **High** | MCP HTTP probes **loopback before SSRF rejection** | [#4100](https://github.com/HKUDS/nanobot/pull/4100) |
| [#4073](https://github.com/HKUDS/nanobot/issues/4073) | **High** | `extra_allowed_dirs` treated as **writable instead of read-only** | [#4099](https://github.com/HKUDS/nanobot/pull/4099) |
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | **High** | ExecTool **workspace escape via relative symlinks** | [#4098](https://github.com/HKUDS/nanobot/pull/4098) |
| [#4081](https://github.com/HKUDS/nanobot/issues/4081) | **High** | `MemoryStore.append_history` **duplicate cursors under concurrency** | *Pending* |
| [#4080](https://github.com/HKUDS/nanobot/issues/4080) | **High** | `process_direct` **bypasses session dispatch locks** | *Pending* |
| [#4079](https://github.com/HKUDS/nanobot/issues/4079) | **High** | API retry **duplicates user turns** | *Pending* |

### Medium Severity (Reliability & Correctness)

| Issue | Description | Fix PR |
|:---|:---|:---|
| [#4068](https://github.com/HKUDS/nanobot/issues/4068) | Matrix stream buffer keyed by chat_id only, corrupts overlapping streams | [#4096](https://github.com/HKUDS/nanobot/pull/4096) |
| [#4067](https://github.com/HKUDS/nanobot/issues/4067) | Invalid config **silently falls back to defaults** | [#4095](https://github.com/HKUDS/nanobot/pull/4095) |
| [#4066](https://github.com/HKUDS/nanobot/issues/4066) | High `last_consolidated` **hides entire session history** | [#4090](https://github.com/HKUDS/nanobot/pull/4090) |
| [#4065](https://github.com/HKUDS/nanobot/issues/4065) | Invalid `NANOBOT_STREAM_IDLE_TIMEOUT_S` **crashes streaming** | [#4095](https://github.com/HKUDS/nanobot/pull/4095) |
| [#4063](https://github.com/HKUDS/nanobot/issues/4063) | Stream delta coalescing **ignores `_stream_id`**, merges distinct streams | [#4094](https://github.com/HKUDS/nanobot/pull/4094) |
| [#4062](https://github.com/HKUDS/nanobot/issues/4062) | WebSocket **drops proactive messages** without subscribers | [#4094](https://github.com/HKUDS/nanobot/pull/4094) |
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | OpenAI-compatible **text-format tool calls not parsed** | [#4092](https://github.com/HKUDS/nanobot/pull/4092) |
| [#4060](https://github.com/HKUDS/nanobot/issues/4060) | Anthropic provider **missing required block type** | [#4093](https://github.com/HKUDS/nanobot/pull/4093) |
| [#4059](https://github.com/HKUDS/nanobot/issues/4059) | OpenAI non-stream parser **preserves duplicate tool call IDs** | [#4092](https://github.com/HKUDS/nanobot/pull/4092) |
| [#4058](https://github.com/HKUDS/nanobot/issues/4058) | Tool-result protocol **allows orphan/duplicate states** | [#4091](https://github.com/HKUDS/nanobot/pull/4091) |
| [#4057](https://github.com/HKUDS/nanobot/issues/4057) | Session keys **collide after filename sanitization** | [#4090](https://github.com/HKUDS/nanobot/pull/4090) |

**Remarkable pattern**: 21 of 33 issues (64%) and 14 of 43 PRs (33%) originate from single contributor `hamb1y` in a single day, suggesting either a comprehensive security audit or automated vulnerability discovery. Fix PRs exist for most findings with `[codex]` prefix, indicating systematic remediation.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Manual memory mode** | [PR #4050](https://github.com/HKUDS/nanobot/pull/4050), issues [#3885](https://github.com/HKUDS/nanobot/issues/3885), [#3948](https://github.com/HKUDS/nanobot/issues/3948) | **High** — PR open, addresses core architecture |
| **Model preset switching** | [PR #3696](https://github.com/HKUDS/nanobot/pull/3696) (merged) | **Shipped** — Available now |
| **Disable automatic document extraction** | [#4043](https://github.com/HKUDS/nanobot/issues/4043) (closed) | **High** — Config option likely added |
| **Matrix E2EE verification support** | [#4042](https://github.com/HKUDS/nanobot/issues/4042) | **Medium** — Requires protocol implementation |
| **WeChat context expansion** | [#2772](https://github.com/HKUDS/nanobot/issues/2772) | **Low** — Platform API limitation, not NanoBot |

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Severity |
|:---|:---|:---|
| **Memory loss in conversation** ([#4044](https://github.com/HKUDS/nanobot/issues/4044)) | Bot "forgets" it asked a question; breaks trust in multi-turn interactions | **Critical UX** |
| **WeChat message limit** ([#2772](https://github.com/HKUDS/nanobot/issues/2772)) | Hard 10-message cap forces artificial conversation segmentation | **High** |
| **Silent API key failures** ([#3006](https://github.com/HKUDS/nanobot/issues/3006)) | No user-facing error when API credits exhausted; appears as "no response" | **Medium** (fixed) |
| **Inflexible document extraction** ([#4043](https://github.com/HKUDS/nanobot/issues/4043)) | Conflicts with user-preferred OCR/docling workflows | **Medium** (addressed) |

### Satisfaction Indicators

- **Strong maintainer response**: Multiple same-day fix PRs for reported issues
- **Active community contribution**: External contributors (`outlook84`, `yorkhellen`, `chengyongru`) delivering substantial features
- **Transparent security handling**: Systematic `[codex]`-prefixed security PRs with clear issue linkage

### Dissatisfaction Risks

- **Memory reliability** remains the #1 user-facing concern; [#4044](https://github.com/HKUDS/nanobot/issues/4044) comments suggest this is a recurring regression
- **Security surface area**: Volume of same-day security disclosures may erode production confidence if not rapidly released

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) Short-term memory loss | 2 days | **4 comments**, active user discussion, no linked fix PR | Root cause confirmation; memory architecture review |
| [#4050](https://github.com/HKUDS/nanobot/pull/4050) Manual memory mode | 1 day | Major feature PR, undefined comment count | Code review, merge decision for next release |
| [#4086](https://github.com/HKUDS/nanobot/pull/4086) IPv6 SSRF normalization | 1 day | Security fix, `[valid]` label | Merge to close SSRF bypass vector |
| Unauthenticated API ([#4078](https://github.com/HKUDS/nanobot/issues/4078)) | 1 day | **No fix PR** despite critical severity | Immediate patch required before any release |
| Concurrency bugs ([#4080](https://github.com/HKUDS/nanobot/issues/4080), [#4081](https://github.com/HKUDS/nanobot/issues/4081)) | 1 day | No fix PRs; data integrity risks | Session locking and cursor allocation fixes |

### Recommendation

The project should **prioritize a security release** given the volume of unpatched critical/high vulnerabilities. The unauthenticated API endpoint ([#4078](https://github.com/HKUDS/nanobot/issues/4078)) is particularly urgent as it exposes the agent loop to arbitrary external requests. Consider coordinating with `hamb1y` on disclosure timing if this was a responsible security audit.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-30. All links reference `https://github.com/HKUDS/nanobot`.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-30

## 1. Today's Overview

Hermes Agent shows **high-velocity maintenance mode** with 100 items updated in 24 hours (50 issues, 50 PRs) and two rapid-fire patch releases (v0.15.1 and v0.15.2) following the v0.15.0 major release. The 35:15 open-to-closed issue ratio and 40:10 open-to-merged PR ratio indicate heavy triage load with a backlog accumulating faster than resolution. Activity is concentrated in packaging fixes, gateway platform adapters, and Docker deployment issues—suggesting v0.15.0 introduced significant regression surface across distribution channels. The project health is **operationally stressed but responsive**, with same-day hotfixes demonstrating maintainer urgency.

---

## 2. Releases

### [v2026.5.29.2 — Hermes Agent v0.15.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2)
| Attribute | Detail |
|-----------|--------|
| **Type** | Emergency patch |
| **Critical fix** | [`827f7f07`](https://github.com/NousResearch/hermes-agent/commit/827f7f07825be57108cbea18325e8f5e9fb5d2f2): Bundled `plugin.yaml` manifests now ship in wheel and sdist |
| **Context** | v0.15.1 pip installs broke all platform adapters due to missing plugin manifests; this was a **production-critical packaging regression** |

### [v2026.5.29 — Hermes Agent v0.15.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29)
| Attribute | Detail |
|-----------|--------|
| **Type** | Same-day hotfix |
| **Since v0.15.0** | 28 commits · 21 merged PRs · 9 contributors |
| **Headline fix** | Dashboard infinite-reload loop in loopback mode ([details](https://github.com/NousResearch/hermes-agent/issues/34071-adjacent)) |
| **Breaking/Action required** | None explicit; immediate upgrade from v0.15.0 strongly advised |

**Migration Notes:** Users on v0.15.0 should upgrade immediately—both Docker and pip installs are affected by manifest/packaging defects. Cron users should verify `~/.hermes/cron/jobs.json` integrity post-upgrade (see [Issue #34600](https://github.com/NousResearch/hermes-agent/issues/34600)).

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total, selected critical)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [#34835](https://github.com/NousResearch/hermes-agent/pull/34835) / [#34538](https://github.com/NousResearch/hermes-agent/pull/34538) | teknium1 / Bartok9 | **Merged** | `hermes uninstall` now cleans up Node symlinks, preventing dead links shadowing nvm |
| [#34845](https://github.com/NousResearch/hermes-agent/pull/34845) | teknium1 | **Merged** | Auxiliary LLM calls stop capping with `max_tokens` by default; fixes GitHub Copilot GPT-5 compression failures |
| [#34851](https://github.com/NousResearch/hermes-agent/pull/34851) | teknium1 | **Merged** | Declares `setuptools` in dev extras; fixes CI packaging test failures |
| [#34503](https://github.com/NousResearch/hermes-agent/pull/34503) | SkYNewZ | **Merged** | Lifts `mistralai` blanket ban for versions ≥2.4.8 (post-"Mini Shai-Hulud" PyPI quarantine) |
| [#34491](https://github.com/NousResearch/hermes-agent/pull/34491) | Jasper-1222 | **Merged** | Fixes stale "1 commit behind" cache after pip upgrades |

### Features Advanced

- **Channel-based profile routing** ([PR #20096](https://github.com/NousResearch/hermes-agent/pull/20096)): Long-running feature PR updated; enables multi-tenant Discord/Slack routing with isolated sessions and identities
- **Boundary-aware compression** ([PR #35048](https://github.com/NousResearch/hermes-agent/pull/35048)): New `/compress here [N]` command inspired by Claude Code; preserves recent N exchanges verbatim

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Type | Comments | 👍 | Analysis |
|------|------|------|----------|-----|----------|
| 1 | [#514](https://github.com/NousResearch/hermes-agent/issues/514) A2A Protocol Support | Feature | 23 | 12 | **Strategic inflection point**: Community wants Google A2A (Linux Foundation) interoperability alongside MCP. Signals demand for federated agent ecosystems beyond tool-calling. |
| 2 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Improved Dashboard Themes | Bug/Feature | 22 | 32 | **Accessibility crisis**: Serif fonts, low contrast, and non-standard color choices make dashboard "hard to read." High 👍 count = broad user pain, not niche. |
| 3 | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema Loading | Feature | 20 | 13 | **Cost/performance bottleneck**: 3,500-5,000 token overhead per call for 50+ tools hits local model users hardest. Two-pass injection would be major efficiency win. |

### Underlying Needs Analysis

- **A2A (#514)**: Users want Hermes to participate in multi-agent marketplaces, not just be a monolithic assistant. MCP answered "what tools"; A2A answers "who can help."
- **Themes (#18080)**: Dashboard UX debt is becoming a competitive disadvantage. 32 upvotes suggest this blocks adoption for vision-impaired or design-conscious users.
- **Lazy loading (#6839)**: Token economics matter for local/self-hosted deployments—Hermes's core differentiator against cloud APIs.

---

## 5. Bugs & Stability

### Critical (P1) — Production-Impacting

| Issue | Component | Description | Fix Status |
|-------|-----------|-------------|------------|
| [#34071](https://github.com/NousResearch/hermes-agent/issues/34071) | Docker | v0.15.0 image missing `stage2-hook.sh`, `main-wrapper.sh`; container crashes with exit 127 | **Partial**: v0.15.1/2 addressed manifest issue; container_boot module removal may need follow-up |
| [#34091](https://github.com/NousResearch/hermes-agent/issues/34091) | TUI/Docker | Dashboard TUI unusable: "events feed disconnected" | **Open**, no PR linked |
| [#13356](https://github.com/NousResearch/hermes-agent/issues/13356) | Gateway/Telegram | File attachments report success but never arrive (v0.10.0→persistent) | **Open**, 5 comments, zero engagement—stale? |
| [#32646](https://github.com/NousResearch/hermes-agent/issues/32646) | Agent/zai | `fallback_providers` fail after timeout→429 sequence | **Open**, edge case in provider resilience |
| [#34966](https://github.com/NousResearch/hermes-agent/issues/34966) | Gateway/MCP | MCP process leak on reload—RAM exhaustion over time | **Open**, no PR; memory leak pattern |
| [#34443](https://github.com/NousResearch/hermes-agent/issues/34443) | Gateway/MCP | **CLOSED** via PR: TaskGroup crash on single MCP server failure |

### High-Volume Regression Pattern: v0.15.0 Packaging

- **Root cause**: `plugin.yaml` manifests excluded from wheel/sdist
- **Manifestations**: [#34576](https://github.com/NousResearch/hermes-agent/issues/34576) platform adapters dead, [#34871](https://github.com/NousResearch/hermes-agent/issues/34871) `mcp_serve` module missing, [#34857](https://github.com/NousResearch/hermes-agent/issues/34857) Nix package missing `dashboard_auth`
- **Resolution**: v0.15.2 + pending PRs [#35044](https://github.com/NousResearch/hermes-agent/pull/35044) (mcp_serve), [#35049](https://github.com/NousResearch/hermes-agent/pull/35049)/[#35050](https://github.com/NousResearch/hermes-agent/pull/35050) (setuptools CI)

### Stability Concern: Cron Data Loss

- [#34600](https://github.com/NousResearch/hermes-agent/issues/34600): Config migration 23→24 **silently clears** `cron/jobs.json` (17 jobs lost). **CLOSED** but traumatic—users may distrust future migrations.
- [#32164](https://github.com/NousResearch/hermes-agent/issues/32164): `disk-cleanup` plugin misclassifies and deletes `jobs.json`. **CLOSED** but reveals dangerous overlap between cleanup heuristics and durable state.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **A2A Protocol Support** | [#514](https://github.com/NousResearch/hermes-agent/issues/514) | Medium (v0.16+) | 23 comments, 12 👍, strategic alignment with industry standard. Requires significant gateway refactoring. |
| **Lazy Tool Schema Loading** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | High (v0.15.x) | Clear performance win, local-model user base demands it. Architecture sketched in issue. |
| **Paginated Memory + Search** | [#34745](https://github.com/NousResearch/hermes-agent/issues/34745) | Medium | Addresses 2,200 char limit pain. Competes with compression heuristics; may be alternative path. |
| **Automatic Reasoning Fallback** | [#34786](https://github.com/NousResearch/hermes-agent/issues/34786) | High | Small surface area, high UX value. Provider API drift is recurring pain. |
| **Channel-based Profile Routing** | [#20096](https://github.com/NousResearch/hermes-agent/pull/20096) | Medium | PR active since May 5; complex but complete. Multi-tenant hosting use case. |
| **Mattermost Interactive Buttons** | [#27587](https://github.com/NousResearch/hermes-agent/issues/27587) | Low | Platform-specific, low engagement (4 comments). Slash-command architecture conflict. |

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Docker deployment fragility** | [#34071](https://github.com/NousResearch/hermes-agent/issues/34071), [#34091](https://github.com/NousResearch/hermes-agent/issues/34091), [#35025](https://github.com/NousResearch/hermes-agent/issues/35025), [#35026](https://github.com/NousResearch/hermes-agent/issues/35026) | 🔴 Critical |
| **Silent data loss** | [#34600](https://github.com/NousResearch/hermes-agent/issues/34600) (cron), [#34850](https://github.com/NousResearch/hermes-agent/issues/34850) (model switch not persisted) | 🔴 Critical |
| **Dashboard accessibility** | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | 🟡 High |
| **Packaging/distribution gaps** | [#34576](https://github.com/NousResearch/hermes-agent/issues/34576), [#34857](https://github.com/NousResearch/hermes-agent/issues/34857), [#34871](https://github.com/NousResearch/hermes-agent/issues/34871) | 🟡 High (improving) |
| **Token/cost overhead** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 🟡 High |
| **Provider API drift** | [#34786](https://github.com/NousResearch/hermes-agent/issues/34786), [#34530](https://github.com/NousResearch/hermes-agent/issues/34530) | 🟢 Medium |

### Satisfaction Signals

- **Responsive maintainers**: Same-day hotfixes for v0.15.0 regressions (v0.15.1, v0.15.2)
- **Community contribution quality**: PRs with detailed root-cause analysis (e.g., [#30472](https://github.com/NousResearch/hermes-agent/pull/30472) delegate_task truncation)
- **Feature creativity**: `/compress here [N]` ([PR #35048](https://github.com/NousResearch/hermes-agent/pull/35048)) shows healthy CLI UX innovation

### Dissatisfaction Signals

- **Upgrade anxiety**: Multiple issues report post-upgrade breakage (Docker, cron, themes, Feishu buttons)
- **"Works on my machine" packaging**: Wheel, sdist, Nix, and Docker all had distinct failures—CI coverage gaps
- **Silent failures**: File attachments "report success but never arrive" ([#13356](https://github.com/NousResearch/hermes-agent/issues/13356)), model switch not persisted ([#34850](https://github.com/NousResearch/hermes-agent/issues/34850))

---

## 8. Backlog Watch

### Long-Running Items Needing Maintainer Decision

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) A2A Protocol | ~3 months (Mar 6) | Open, 23 comments | **Architecture decision needed**: Will Hermes adopt A2A natively or via bridge? Industry momentum increasing. |
| [#20096](https://github.com/NousResearch/hermes-agent/pull/20096) Channel-based Profile Routing | ~3 weeks (May 5) | Open, active updates | **Merge-ready?** Complex feature with multi-tenant implications. Needs final review. |
| [#26480](https://github.com/NousResearch/hermes-agent/pull/26480) SimpleX WebSocket Reliability | ~2 weeks (May 15) | Open | Platform adapter quality. Related to [#35046](https://github.com/NousResearch/hermes-agent/pull/35046) (group sender fix)—should batch review. |
| [#8008](https://github.com/NousResearch/hermes-agent/pull/8008) Discord Channel Name Matching | ~7 weeks (Apr 12) | Open | P1 bug fix languishing. Production impact for Discord users. |
| [#25442](https://github.com/NousResearch/hermes-agent/pull/25442) GIF→PNG Vision Conversion | ~2 weeks (May 14) | Open | Small, well-scoped. Vision pipeline completeness. |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Dashboard Themes | ~1 month (Apr 30) | Open, 32 👍 | **Highest community demand by reaction count**. No assignee visible. Accessibility liability. |

### Maintainer Attention Recommended

1. **Immediate**: Audit all Docker/packaging CI for manifest inclusion (prevent v0.15.0 recurrence)
2. **This week**: Assign [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) themes issue; 32 upvotes = user exodus risk
3. **This sprint**: Decision on A2A roadmap ([#514](https://github.com/NousResearch/hermes-agent/issues/514))—competitive positioning vs. implementation cost
4. **Ongoing**: Cron data loss post-mortem; migration testing protocol for config version bumps

---

*Digest generated from GitHub activity 2026-05-29 to 2026-05-30. All links reference `github.com/NousResearch/hermes-agent`.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-30

## 1. Today's Overview

PicoClaw shows **moderate-to-healthy activity** with 11 updated items (3 issues, 8 PRs) and a fresh v0.2.9 release alongside its nightly build. The project demonstrates active maintenance with 5 of 8 PRs merged/closed, though the 3 remaining open PRs suggest some review backlog. Notably, the release cadence is accelerating with same-day patch releases, indicating responsive maintenance. Community interest spans infrastructure (WhatsApp builds), security (pre-exec scanning), and multi-agent cooperation—signals of a maturing project expanding beyond core functionality.

---

## 2. Releases

### v0.2.9 (Stable)
| Attribute | Detail |
|-----------|--------|
| **Date** | 2026-05-29 |
| **Key Changes** | • MCP section added to configuration web UI ([#2770](https://github.com/sipeed/picoclaw/pull/2770))<br>• Enhanced `tool_feedback` defaults with `pretty_print` and `disable_escape_html`<br>• Unspecified fix (commit `569939a`) |
| **Breaking Changes** | None identified |
| **Migration Notes** | Users leveraging custom `tool_feedback` formatting should verify defaults don't override intentional configurations |

### Nightly Build
- **Version**: `v0.2.9-nightly.20260529.85751492`
- **Status**: Automated, potentially unstable; use for testing only
- [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Description | Significance |
|----|--------|-------------|------------|
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) | sheeki03 | **feat(security)**: Optional Tirith pre-exec scanning | Security hardening for shell tool; replaces stalled #1932 |
| [#2932](https://github.com/sipeed/picoclaw/pull/2932) | KrtCZ | **feat(i18n)**: Czech (cs) locale — 792/792 strings | Complete localization including new MQTT, MCP, model catalog, evolution, turn-profile sections |
| [#2961](https://github.com/sipeed/picoclaw/pull/2961) | dependabot[bot] | **build(deps)**: Bump `github.com/pion/rtp` 1.10.1 → 1.10.2 | WebRTC/media stack maintenance |
| [#2960](https://github.com/sipeed/picoclaw/pull/2960) | dependabot[bot] | **build(deps)**: Bump `github.com/caarlos0/env/v11` 11.4.0 → 11.4.1 | Configuration parsing maintenance |
| [#2966](https://github.com/sipeed/picoclaw/pull/2966) | imguoguo | **docs**: Update WeChat QR code | Community channel maintenance |

**Progress Assessment**: Security tooling matured (Tirith integration), internationalization expanded (Czech), dependencies kept current. The Tirith PR revival after #1932 stalled shows maintainer persistence on security features.

---

## 4. Community Hot Topics

### Most Active Discussion: WhatsApp Build Support
| | Detail |
|--|--------|
| **Issue** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) — [Feature] Provide compiled builds with WhatsApp support |
| **Author** | duckida |
| **Activity** | 7 comments, 1 👍, last updated 2026-05-29 |
| **Core Need** | **Embedded/IoT deployment friction**: Raspberry Pi Zero 2 users cannot use prebuilt arm64 binaries with WhatsApp; must compile from source |

**Underlying Analysis**: This reveals a **platform-distribution mismatch**—PicoClaw's build matrix doesn't cover channel-specific variants for constrained ARM devices. The user represents a "deploy-to-edge" use case that's growing as PicoClaw targets hardware makers (Sipeed's core business). The `stale` tag despite active discussion suggests classification misfit.

### Emerging Architectural Discussion: Agent-to-Agent Communication
| | Detail |
|--|--------|
| **Issue** | [#2929](https://github.com/sipeed/picoclaw/issues/2929) — [Task] Add first-class agent-to-agent communication for cooperative workflows |
| **Author** | afjcjsbx |
| **Activity** | 2 comments, 1 👍, created 2026-05-22 |

**Underlying Analysis**: Identifies a **paradigm gap**: current `spawn`/`subagent`/`delegate` are hierarchical, not peer-to-peer. Request signals user demand for **multi-agent orchestration patterns** (swarm, negotiation, consensus) beyond simple delegation. This aligns with broader industry movement toward agentic systems.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|----------|------|--------|---------|
| **Medium** | [#2965](https://github.com/sipeed/picoclaw/pull/2965) | **Fix PR OPEN** | Workspace guard misreads scheme-less URLs (`curl wttr.in/Beijing?T`) as absolute paths when `restrict_to_workspace` enabled |
| **Low** | [#2351](https://github.com/sipeed/picoclaw/issues/2351) | **CLOSED** (resolved) | Skills injected into system prompt despite missing required binaries; validation now implemented |

**Stability Assessment**: No critical crashes reported. The scheme-less URL bug (#2965) is a **security-adjacent functional bug**—breaks legitimate use cases without being an exploit vector. Fix PR is same-day (2026-05-29), showing responsive patching. Closed issue #2351 removes a class of "phantom capability" failures where LLMs promise actions they cannot execute.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Image input compression pipeline** | [#2964](https://github.com/sipeed/picoclaw/pull/2964) | **High** | PR open, addresses concrete cost/performance pain; configurable multi-level compression fills architecture gap |
| **Czech i18n** | [#2932](https://github.com/sipeed/picoclaw/pull/2932) | **Shipped in v0.2.9** | Complete coverage, merged |
| **MCP config UI** | [#2770](https://github.com/sipeed/picoclaw/pull/2770) | **Shipped in v0.2.9** | Merged |
| **Agent-to-agent peer communication** | [#2929](https://github.com/sipeed/picoclaw/issues/2929) | **Medium-term** (v0.3.x+) | Architectural, requires protocol design; author offers to contribute |
| **WhatsApp-included ARM builds** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | **Uncertain** | Build matrix complexity vs. niche demand; may need community CI contribution |
| **Tirith security scanning** | [#2877](https://github.com/sipeed/picoclaw/pull/2877) | **Shipped** | Merged |

**Prediction**: v0.3.0 will likely formalize multi-agent primitives (addressing #2929's architectural request) and expand vision pipeline capabilities (#2964).

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Embedded deployment complexity** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Raspberry Pi/ARM edge users |
| **Vision API cost overruns** | [#2964](https://github.com/sipeed/picoclaw/pull/2964) description | Cost-conscious production users |
| **"Phantom" skill capabilities** | [#2351](https://github.com/sipeed/picoclaw/issues/2351) | All users with binary-dependent skills |
| **Workspace restriction false positives** | [#2965](https://github.com/sipeed/picoclaw/pull/2965) | Security-hardened deployments |

### Satisfaction Signals
- Responsive security integration (Tirith merged after #1932 revival)
- Rapid i18n expansion (Czech complete coverage)
- Same-day bug fix PRs

### Dissatisfaction Signals
- `stale` tags on actively-discussed issues (#2625, #2929) suggest stale-bot aggression may discourage users
- No maintainer response visible in #2929's 8-day lifespan despite architectural significance

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) — Unify vendors table in providers documentation | Since 2026-04-24 (36 days) | **Low** | Documentation-only; merge or close to clear queue |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) — WhatsApp ARM builds | Since 2026-04-22 (38 days) | **Medium** | Decision on build matrix scope; consider community CI contribution path |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) — Agent-to-agent communication | Since 2026-05-22 (8 days) | **High** | Architectural response needed; author explicitly offers implementation help |

**Maintainer Attention Priority**: 
1. **#2929** — Architectural direction required before community effort is wasted
2. **#2625** — Build infrastructure decision affects Sipeed hardware ecosystem positioning
3. **#2662** — Simple queue-clearing merge

---

*Digest generated from GitHub activity 2026-05-29. All links reference https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-30

## 1. Today's Overview

NanoClaw showed **moderate-to-high development velocity** with 10 tracked items updated in the past 24 hours (2 issues, 8 PRs), though no new release was cut. The project is actively iterating on **platform reliability** (iOS, Telegram routing), **observability infrastructure**, and **security posture** around MCP tool installation. Notably, all 5 open PRs were opened today, suggesting a burst of coordinated contribution activity—possibly a sprint or community hackathon. The closure of 3 PRs including a significant LangFuse observability integration indicates maintainers are processing backlog items, though comment counts across all items are near-zero, suggesting either lightweight review culture or automated merging.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2456](https://github.com/nanocoai/nanoclaw/pull/2456) | dustinlucien | **LangFuse observability for Claude provider** — full tracing per agent session with latency, API errors, tool call timing, context compaction metrics | Major operational maturity: closes observability gap for Claude users; enables production debugging and cost optimization |
| [#1961](https://github.com/nanocoai/nanoclaw/pull/1961) | grtwrn | **OneCLI-native Gmail MCP tool** (`/add-gmail-tool`) | Security architecture compliance for v2: eliminates raw API key exposure in containers |
| [#2639](https://github.com/nanocoai/nanoclaw/pull/2639) | vasechko-sergey | iOS reliability improvements | Platform stability; follows contribution guidelines |

**Key Advances:**
- **Observability stack** now covers Claude (previously gap vs. other providers)
- **Credential architecture** enforced: Gmail integration aligns with v2's OneCLI-only invariant
- **Mobile reliability** addressed for iOS deployment scenarios

---

## 4. Community Hot Topics

| Item | Heat Indicator | Analysis |
|:---|:---|:---|
| [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) Supply chain risk — `@gongrzhe/server-gmail-autoauth-mcp` | 🔥🔥🔥 **High** — security narrative, external blog citation | **Underlying need:** Trust and auditability of third-party MCP servers. User cites real-world attack vector (Medium article: [AI installed stranger's code, asked for Gmail password](https://wiiwrite.medium.com/my-ai-installed-a-strangers-code-on-my-machine-and-asked-for-my-gmail-password-70d7708b4636)). This directly challenges NanoClaw's MCP curation/gating model. |
| [#2646](https://github.com/nanocoai/nanoclaw/pull/2646) Street Wind Shadow Map | 🔥 **Medium** — substantial new capability | **Underlying need:** Geospatial visualization tools for agent outputs; suggests users want NanoClaw to host interactive data apps, not just chat |
| [#2645](https://github.com/nanocoai/nanoclaw/pull/2645) Per-agent-group context window | 🔥 **Medium** — core routing improvement | **Underlying need:** Better group chat UX—agents currently lose conversational thread context when mentioned |

**Pattern:** Zero comments on all items indicates either (a) rapid async approval, (b) maintainer bandwidth constraints, or (c) community size too small for debate. The security issue (#2641) warrants urgent discussion given its external amplification.

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#2640](https://github.com/nanocoai/nanoclaw/issues/2640) | **SQLITE_READONLY_ROLLBACK race condition**: `outbound.db` opened readonly every 1s poll tick conflicts with container's transient `-journal` files during write transactions. Emits error log; potential message delivery failure or corruption. | **No fix PR** — root cause identified (journal_mode=DELETE + polling architecture) |
| 🟡 **Medium** | [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Telegram `extractReplyContext` failed to set `isReplyToBot`, breaking reply-to-bot routing | **Fix PR open** — #2644 by yairixStudio |
| 🟡 **Medium** | [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | `pattern`-mode wirings ignored direct @mentions/DMs/replies without keyword match, causing silent failures | **Fix PR open** — #2643 by yairixStudio |
| 🟡 **Medium** | [#2642](https://github.com/nanocoai/nanoclaw/pull/2642) | `/add-telegram` skill installs incompatible `@chat-adapter/telegram@4.27.0` vs. pinned `chat@4.26.0`; `minimumReleaseAge` (4320h = 180 days) blocks resolution | **Fix PR open** — #2642 pins to 4.26.0 |

**Stability Assessment:** The SQLite race (#2640) is the standout risk—a classic filesystem-level concurrency bug in core delivery infrastructure. The Telegram cluster (#2642-2644) suggests recent regression in adapter versioning or routing logic, possibly from 4.27.0 release.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Version | Rationale |
|:---|:---|:---|
| **LangFuse for additional providers** (OpenAI, Gemini, local) | High | #2456 establishes pattern; dustinlucien's instrumentation is provider-agnostic |
| **Geospatial skill framework** (generalized from wind map) | Medium | #2646 is large standalone app; may prompt reusable `claude/skills/maps/` abstraction |
| **Group chat context management** | High | #2645 is narrowly scoped, addresses clear UX gap, author has 3 related PRs today |
| **MCP server registry/audit UI** | Medium-High | #2641 security pressure + v2 credential architecture suggests need for provenance display |
| **iOS platform tier-1 support** | Medium | #2639 indicates investment; may expand to CI/CD and documentation |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Security trust deficit** | #2641 — user explicitly warns against MCP auto-auth pattern, cites external breach narrative | Critical for adoption |
| **Telegram integration fragility** | #2642-2644 — version skew, routing edge cases, reply context failures | High — affects active channel |
| **Group chat agent amnesia** | #2645 — agents don't see conversation history when mentioned | High — core product promise |
| **Database reliability at scale** | #2640 — filesystem-level SQLite races in delivery path | High — infrastructure risk |
| **Observability blind spots** | (resolved by #2456) — previously no Claude tracing | (Addressed) |

**Satisfaction signals:** Active contribution from repeat authors (yairixStudio: 3 PRs; dustinlucien: mature observability work).  
**Dissatisfaction signals:** Security issue opened without prior maintainer engagement; zero-comment PRs may indicate review bottleneck.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2640](https://github.com/nanocoai/nanoclaw/issues/2640) SQLite race | 1 day | **Infrastructure corruption risk** — delivery path | Assign core maintainer; evaluate WAL mode or connection pooling |
| [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) Supply chain security | 1 day | **Reputational/liability risk** — cited externally | Security response: audit `@gongrzhe/server-gmail-autoauth-mcp`, document MCP verification process |
| [#1961](https://github.com/nanocoai/nanoclaw/pull/1961) Gmail MCP | ~5 weeks | Closed today, but pattern for other tools (Calendar, Drive) | Template for OneCLI-native tool skills; document for contributors |
| LangFuse → other providers | — | Observability parity gap | Create tracking issue or bounty |

**Maintainer attention priority:** #2640 (technical debt → incident risk) > #2641 (security narrative → trust erosion) > #2645-2646 (feature velocity).

---

*Digest generated from NanoClaw GitHub activity 2026-05-29 to 2026-05-30. All links: https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-30

## 1. Today's Overview

NullClaw shows **strong maintenance velocity** with 12 PRs updated in the last 24 hours (9 merged/closed, 3 open) and all 3 active issues resolved. The project shipped **v2026.5.29** with infrastructure improvements including GitHub workflow centralization and a new native ACP stdio adapter. The close rate indicates a healthy, responsive maintainer team. Three critical Telegram and memory-related bugs were fixed in this cycle, suggesting production stability is a current priority. The 3 open PRs all address configuration and runtime behavior gaps, indicating polish work on existing features rather than new architecture.

---

## 2. Releases

### [v2026.5.29](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.29)

| Change | Author | PR |
|--------|--------|-----|
| Version bump to v2026.5.4 baseline | @DonPrus | [#888](https://github.com/nullclaw/nullclaw/pull/888) |
| **Move GitHub workflows to nullbuilder** (CI infrastructure centralization) | @DonPrus | [#889](https://github.com/nullclaw/nullclaw/pull/889) |
| **Add native ACP stdio adapter** (new protocol adapter for Agent Communication Protocol) | @DonPrus | [#896](https://github.com/nullclaw/nullclaw/pull/896) |
| Documentation updates (truncated in release notes) | — | — |

**Breaking Changes:** None indicated. The ACP stdio adapter is additive.

**Migration Notes:** Users relying on custom GitHub Actions workflows should verify compatibility with the centralized `nullbuilder` setup.

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#934](https://github.com/nullclaw/nullclaw/pull/934) | @supersonictw | **LINE channel: replyToken cache + sendMessage routing fix** — Thread-safe static cache (16 entries, 30s TTL) for webhook replyTokens; token buffer 512 bytes | Fixes message delivery reliability in LINE; prevents replyToken expiration race conditions |
| [#935](https://github.com/nullclaw/nullclaw/pull/935) | @Codom | **Nix: update lockfiles for Zig 0.16.0** | Restores Nix build compatibility; unblocks reproducible builds |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | @DonPrus | **Gateway: authenticated `/media/transcribe`, wizard JSON extensions, hashed paired tokens with timeout** | Expands gateway API surface; security hardening for token storage |
| [#930](https://github.com/nullclaw/nullclaw/pull/930) | @raskevichai | **Telegram: include `reply_to_message` text in inbound context** — Closes [#916](https://github.com/nullclaw/nullclaw/issues/916) | **Critical UX fix**: Replied message content now visible to agent for conversation continuity |
| [#928](https://github.com/nullclaw/nullclaw/pull/928) | @raskevichai | **Channels: deliver subagent results to Telegram in polling mode** — Closes [#918](https://github.com/nullclaw/nullclaw/issues/918) | **Critical bugfix**: `spawn` tool results no longer silently lost |
| [#929](https://github.com/nullclaw/nullclaw/pull/929) | @raskevichai | **Tools/memory_list: default `session_id` to null** — Closes [#917](https://github.com/nullclaw/nullclaw/issues/917) | **Critical bugfix**: Global memory entries now retrievable |
| [#927](https://github.com/nullclaw/nullclaw/pull/927) | @vernonstinebaker | **Test: suppress API error logs under `zig test`** | Cleaner CI output; no functional change |
| [#926](https://github.com/nullclaw/nullclaw/pull/926) | @vernonstinebaker | **Test(web_search): isolate API key env in aggregate failure case** | Deterministic tests regardless of host environment |
| [#925](https://github.com/nullclaw/nullclaw/pull/925) | @vernonstinebaker | **Path security: allow macOS workspace under `/private/var/folders`** | Fixes false-positive sandbox blocking on macOS |

**Thematic progress:** Channel reliability (Telegram, LINE), memory system correctness, build system maintenance, test hygiene.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | 👍 | Analysis |
|------|----------|-----|----------|
| [#940](https://github.com/nullclaw/nullclaw/pull/940) | undefined* | 0 | **Custom OpenAI provider discovery broken** — Interactive `/models` menu hardcodes Claude models instead of querying provider catalog. *Underlying need: Users want plug-and-play compatibility with arbitrary OpenAI-compatible endpoints (local LLMs, enterprise proxies).* |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) | undefined* | 0 | **`compact_context` flag ignored** — Agent always compacts history regardless of config. *Underlying need: Users want deterministic context window management for cost control and debugging.* |
| [#938](https://github.com/nullclaw/nullclaw/pull/938) | undefined* | 0 | Version bump PR (mechanical) |

*GitHub API returned `undefined` for comments; all three open PRs were created and updated same-day, suggesting rapid review cycle.

**Community signal:** Strong demand for **configuration predictability** — users expect flags to actually control behavior, and custom providers to be discoverable. These are "trust erosion" bugs where the system silently ignores user intent.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR | Details |
|----------|------|--------|--------|---------|
| **Critical** | [#918](https://github.com/nullclaw/nullclaw/issues/918) — Subagent results lost in Telegram | **FIXED** | [#928](https://github.com/nullclaw/nullclaw/pull/928) | `bus=null` in `channel_loop.zig:1296`; `SubagentManager` initialized without message bus in polling mode. **Production impact**: Silent data loss for any `spawn` usage via Telegram. |
| **Critical** | [#917](https://github.com/nullclaw/nullclaw/issues/917) — Global memory entries invisible | **FIXED** | [#929](https://github.com/nullclaw/nullclaw/pull/929) | `memory_list` always passes current `session_id`, filtering out `NULL` entries. **Impact**: Core memory categorization broken; agents cannot access persistent cross-session knowledge. |
| **High** | [#916](https://github.com/nullclaw/nullclaw/issues/916) — Missing reply context in Telegram | **FIXED** | [#930](https://github.com/nullclaw/nullclaw/pull/930) | `reply_to_message.text` discarded after `isReplyToBotMessage()` check. **Impact**: Agents respond without conversational context in group threads. |
| **Medium** | macOS workspace false block | **FIXED** | [#925](https://github.com/nullclaw/nullclaw/pull/925) | `/private/var/folders` (legitimate temp workspace) blocked by overly broad `/private/var` rule. |
| **Medium** | Nix builds broken on Zig 0.16.0 | **FIXED** | [#935](https://github.com/nullclaw/nullclaw/pull/935) | Lockfile drift from flake.nix update. |

**Stability assessment:** All known critical bugs from the past 2 weeks were resolved in this release. The pattern suggests **intensive production hardening** — three Telegram/memory fixes by the same author (@raskevichai) in rapid succession indicates either a single user's deep debugging or a coordinated bug bash.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|--------|--------|---------------------------|
| **Custom provider model discovery** | [#940](https://github.com/nullclaw/nullclaw/pull/940) | **High** — PR open, targeted fix |
| **Configurable context compaction** | [#939](https://github.com/nullclaw/nullclaw/pull/939) | **High** — PR open, simple flag wiring |
| **ACP stdio adapter expansion** | v2026.5.29 release | **Medium** — New adapter landed; likely more protocol variants |
| **Gateway media pipeline (STT)** | [#933](https://github.com/nullclaw/nullclaw/pull/933) | **Medium** — Infrastructure in place; may extend to TTS |
| **LINE channel parity with Telegram** | [#934](https://github.com/nullclaw/nullclaw/pull/934) | **Medium** — ReplyToken caching suggests ongoing investment |

**No explicit feature requests** in open issues — all recent issues were bug reports. The project appears in **stabilization mode** rather than expansion.

---

## 7. User Feedback Summary

### Pain Points (from issue/PR analysis)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Silent failures** | [#918](https://github.com/nullclaw/nullclaw/issues/918): subagent results "silently lost" | Critical |
| **Configuration ignored** | [#939](https://github.com/nullclaw/nullclaw/pull/939): `compact_context` dead flag | High |
| **Incomplete Telegram integration** | [#916](https://github.com/nullclaw/nullclaw/issues/916): reply context discarded | High |
| **Memory system opacity** | [#917](https://github.com/nullclaw/nullclaw/issues/917): stored entries invisible | High |
| **Build fragility** | [#935](https://github.com/nullclaw/nullclaw/pull/935): Nix lockfile drift | Medium |

### Use Cases Emerging
- **Telegram group chat bots** with threaded reply handling (not just mention-triggered)
- **Multi-session persistent memory** (global entries for user profiles, preferences)
- **Local/enterprise LLM integration** via custom OpenAI-compatible endpoints
- **Voice-enabled gateways** (STT endpoint added)

### Satisfaction Signal
All three issue reporters (weissfl) had their bugs fixed within 12 days with zero comments needed — indicates **responsive maintainers**, though also suggests issues were clear enough not to need clarification (or community is small/technical).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#940](https://github.com/nullclaw/nullclaw/pull/940) — Custom provider `base_url` fix | 1 day | **Low** (active) | Review/merge — blocks local LLM users |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) — `compact_context` flag | 1 day | **Low** (active) | Review/merge — trivial wiring fix |
| [#938](https://github.com/nullclaw/nullclaw/pull/938) — Version bump | 1 day | **Low** (mechanical) | Merge to complete release |

**No stale items detected.** All open PRs are from 2026-05-29. The project shows **no backlog accumulation** — either issues are resolved quickly or not filed until well-scoped.

---

*Digest generated from GitHub activity 2026-05-29. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-30

## 1. Today's Overview

IronClaw shows **very high development velocity** with 46 PRs and 18 issues updated in the last 24 hours, indicating an active push toward a major milestone. The project is heavily focused on the **"Reborn" architectural rewrite**, with particular intensity around authentication systems, credential management, and MCP (Model Context Protocol) extension porting. No new releases were cut today, and the crates.io publication gap (stuck at 0.24.0 despite tags through 0.27.0) remains unresolved. The contributor base appears concentrated among core maintainers (serrrfirat, henrypark133, zmanian) with minimal community engagement metrics (zero reactions across all items). Nightly E2E tests are failing, suggesting stability concerns amid rapid feature landings.

---

## 2. Releases

**No new releases today.** 

**Ongoing concern:** Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) remains open — crates.io lags **three minor versions behind** tagged releases (0.24.0 published vs. 0.27.0 tagged), blocking downstream consumers due to wasmtime 28.x CVEs. This 54-day publication gap represents a **supply chain security risk**.

---

## 3. Project Progress

### Merged/Closed PRs (21 total, selected highlights)

| PR | Author | Description | Significance |
|---|---|---|---|
| [#4228](https://github.com/nearai/ironclaw/pull/4228) | serrrfirat | **Port Notion MCP extension to Reborn** — full host-mediated MCP runtime with reads/writes/comments/views/teams/users | Major feature: completes Notion integration for Reborn architecture |
| [#4233](https://github.com/nearai/ironclaw/pull/4233) | serrrfirat | **Migrate GitHub WASM credentials to product auth** — account-backed runtime credential source | Security architecture: eliminates static secrets for GitHub integration |
| [#4234](https://github.com/nearai/ironclaw/pull/4234) | serrrfirat | **Durable product auth** — filesystem-backed adapter, replay-safe OAuth callbacks | Foundation for all auth flows; addresses code-review findings |
| [#4231](https://github.com/nearai/ironclaw/pull/4231) | serrrfirat | **Wire Reborn auth consumers through staged credentials** — GSuite credential stager, `InjectSecretOnce` | Critical path for Google Workspace integration |
| [#4232](https://github.com/nearai/ironclaw/pull/4232) | serrrfirat | **Verify auth gate blocked exits** — durable `BeforeBlock` checkpointing | Reliability: prevents spurious recovery states |
| [#4223](https://github.com/nearai/ironclaw/pull/4223) | serrrfirat | **Port NEAR AI MCP to Reborn extensions** — `nearai.search` capability | Ecosystem expansion: NEAR blockchain AI search |
| [#4244](https://github.com/nearai/ironclaw/pull/4244) | henrypark133 | **Refine trigger loop and delivery resolution specs** | Design foundation for scheduled/cron agent workflows |
| [#4243](https://github.com/nearai/ironclaw/pull/4243) | serrrfirat | **Fix `RecordingFlowManager` trait drift** — `mark_continuation_dispatched` | CI stability fix |
| [#4240](https://github.com/nearai/ironclaw/pull/4240) | henrypark133 | **Communication delivery resolution design doc** | Architectural specification for notification routing |
| [#3874](https://github.com/nearai/ironclaw/pull/3874) | henrypark133 | **Trigger loop design spec** (merged earlier, updated today) | Enables cron-driven agent workflows |

**Pattern:** Heavy concentration in **auth/credentials** (6 PRs) and **MCP extensions** (3 PRs), with **design documentation** (3 PRs) preceding implementation.

---

## 4. Community Hot Topics

### Most Active by Engagement (comments)

| Item | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 11 | crates.io publication lag | **Downstream dependency management** — users cannot consume security fixes via standard Rust ecosystem channels; forces git-based dependencies |
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | 5 | Slack ProductAdapter MVP | **Enterprise messaging integration** — preconfigured credentials suggest "works out of box" demand vs. OAuth complexity |
| [#3917](https://github.com/nearai/ironclaw/issues/3917) | 5 | `PathPlaceholder` security review | **Principle of least privilege** — community questioning whether convenience feature (URL path secret injection) justifies expanded attack surface |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | 4 | Binary-E2E test framework | **Quality assurance at scale** — 88 test files need systematic reborn parity; concern about architectural drift |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | 3 | EventStreamManager for durable projection fanout | **Real-time UX** — WebSocket/SSE streaming for reactive agent interfaces |

**Analysis:** The crates.io issue dominates engagement despite being oldest, indicating **ecosystem friction is the #1 user pain point**. Security review culture is healthy (PathPlaceholder debate). The Reborn migration's test coverage gap (#3702) represents technical debt risk.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **Nightly E2E failed** — `extensions` job failing since 2026-05-27 | **No fix PR identified**; failing for 3+ days |
| 🟡 **Medium** | [#4237](https://github.com/nearai/ironclaw/issues/4237) | `cargo test -p ironclaw_product_workflow` compile failure from #4234 | **Fix likely needed** — PR merged without full test coverage |
| 🟡 **Medium** | [#4241](https://github.com/nearai/ironclaw/issues/4241) | **KV cache invalidation** across conversation turns with live workspace prompt inputs | **No fix** — performance regression affecting LLM inference costs |
| 🟢 **Low** | [#4226](https://github.com/nearai/ironclaw/issues/4226) | Unbounded `cleaned_process_handoffs` set growth | **No fix** — memory leak in long-lived processes |
| 🟢 **Low** | [#4222](https://github.com/nearai/ironclaw/issues/4222) | Secret material not zeroized in HTTP request carriers (`String` fields) | **No fix** — security hygiene gap, credentials persist in memory longer than necessary |

**Stability assessment:** ⚠️ **Concerning**. Nightly E2E red for 3 days with no visible remediation. Compile break from merged PR suggests CI gap. KV cache issue could significantly increase inference costs for users.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Source | Likely Version |
|---|---|---|---|
| **WebChat v2 SSO (GitHub + NEAR)** | ⭐⭐⭐⭐⭐ | [#4204](https://github.com/nearai/ironclaw/issues/4204), [#4179](https://github.com/nearai/ironclaw/issues/4179) closed, [#4112](https://github.com/nearai/ironclaw/issues/4112) open | 0.28.0 or next Reborn beta |
| **GSuite OAuth E2E in WebUI** | ⭐⭐⭐⭐⭐ | [#4112](https://github.com/nearai/ironclaw/issues/4112), design PR [#4247](https://github.com/nearai/ironclaw/pull/4247) opened today | Next 2-4 weeks |
| **Slack ProductAdapter** | ⭐⭐⭐⭐☆ | [#3857](https://github.com/nearai/ironclaw/issues/3857) with preconfigured credentials MVP spec | Post-auth completion |
| **Trigger loop / cron scheduling** | ⭐⭐⭐⭐☆ | Specs merged [#3874](https://github.com/nearai/ironclaw/pull/3874), [#4244](https://github.com/nearai/ironclaw/pull/4244); implementation pending | 0.29.0+ |
| **EventStreamManager (SSE/WebSocket streaming)** | ⭐⭐⭐☆☆ | [#3281](https://github.com/nearai/ironclaw/issues/3281) marked `suggested_P0` | Reborn stable |
| **TrustEnrollment / connected wallet** | ⭐⭐⭐☆☆ | [#4055](https://github.com/nearai/ironclaw/pull/4055) open, large PR | Post-Reborn |
| **Reasoning summary preservation** | ⭐⭐☆☆☆ | [#4230](https://github.com/nearai/ironclaw/pull/4230) open — OpenAI/Codex/Anthropic | Near-term |

**Prediction:** The **auth system completion** is the critical path. Once [#4245](https://github.com/nearai/ironclaw/pull/4245) (product-facing auth HTTP surfaces) and [#4239](https://github.com/nearai/ironclaw/pull/4239) (credential broker projection) merge, GSuite/GitHub/NEAR SSO will rapidly follow. Trigger loop scheduling appears next major feature wave.

---

## 7. User Feedback Summary

### Explicit Pain Points

| Issue | User Impact | Severity |
|---|---|---|
| **crates.io lag** [#3259](https://github.com/nearai/ironclaw/issues/3259) | Cannot `cargo add ironclaw` with security fixes; forced to git pin | 🔴 Critical |
| **KV cache invalidation** [#4241](https://github.com/nearai/ironclaw/issues/4241) | Higher latency + cost per conversation turn; degraded UX | 🟡 High |
| **Nightly E2E failures** [#4108](https://github.com/nearai/ironclaw/issues/4108) | Confidence in release quality; may block adoption | 🟡 High |

### Inferred from Design/Implementation

- **"Preconfigured credentials"** pattern (Slack [#3857](https://github.com/nearai/ironclaw/issues/3857)) suggests users want **reduced OAuth friction** — enterprise admins prefer setup-once, not per-user consent flows
- **Local-dev approval gates** [#4186](https://github.com/nearai/ironclaw/pull/4186) indicates developer-experience tension between safety and velocity
- **Zeroize gap** [#4222](https://github.com/nearai/ironclaw/issues/4222) reveals security-conscious users auditing memory safety

### Satisfaction Signals

- Rapid auth feature delivery (3 major auth PRs merged in 24h)
- Comprehensive design documentation preceding implementation
- Active security review (PathPlaceholder debate)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io publication | **55 days** | 🔴 **Supply chain security** — CVE exposure | **Executive decision**: automate crates.io publish or document intentional hold |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failure | 3 days | 🔴 **CI health** | Triage: extensions job specific — likely MCP/auth interaction |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) Binary-E2E test framework | 14 days | 🟡 **Reborn quality gate** | Resource allocation for 88-file test migration |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) EventStreamManager | 24 days | 🟡 **P0 streaming feature** | Implementation unblocked? Depends on auth completion |
| [#4055](https://github.com/nearai/ironclaw/pull/4055) TrustEnrollment | 5 days open | 🟡 **Large PR** (#4052) | Review bandwidth; blockchain wallet integration |
| [#4060](https://github.com/nearai/ironclaw/pull/4060) Attested-signing fixes | 5 days open | 🟡 **Security-critical** | Cross-PR coherence review completion |

**Recommendation:** The crates.io and nightly E2E issues are **blocker-class** that undermine project credibility. Consider assigning dedicated owner or pausing feature merge until resolved.

---

*Digest generated from GitHub activity 2026-05-29 to 2026-05-30. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-30

## 1. Today's Overview

LobsterAI shows **high engineering velocity** with 14 PRs updated in the last 24 hours and a 64% merge/close rate (9 of 14). The project is actively iterating on **renderer performance, cowork session stability, and artifact handling** — all critical to the core AI assistant experience. However, no new releases were cut today, and a single but notable UI freeze bug was reported in the latest production build (2026.5.27). The maintainers appear focused on **stabilization over shipping**, with multiple PRs addressing large-output rendering, connection reliability, and startup optimization. Community contribution remains present but stalled, with 5 open PRs from April still awaiting review.

---

## 2. Releases

**None today.**

No new versions were published. The latest reported production build in the wild is **2026.5.27**, which contains a confirmed regression (see Bugs & Stability).

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Focus | Key Impact |
|:---|:---|:---|:---|
| [#2078](https://github.com/netease-youdao/LobsterAI/pull/2078) | fisherdaddy | **feat(cowork)**: emit `selected-skill` routing metadata | Decouples skill routing from prompt inlining — enables cleaner multi-skill orchestration |
| [#2077](https://github.com/netease-youdao/LobsterAI/pull/2077) | btc69m979y-dotcom | **perf+fix**: large exec output rendering & WS stability | Defers >20KB tool results, fixes tick watchdog starvation during MB-scale output — **critical for agent tool use** |
| [#2076](https://github.com/netease-youdao/LobsterAI/pull/2076) | liugang519 | **feat**: artifact toolbar UX cleanup | Consolidates actions into overflow menu, clarifies copy semantics, adds HTML share docs |
| [#2075](https://github.com/netease-youdao/LobsterAI/pull/2075) | btc69m979y-dotcom | **fix**: avoid oversized markdown default render | Head/tail preview with explicit expand — prevents UI blocking on large assistant outputs |
| [#2074](https://github.com/netease-youdao/LobsterAI/pull/2074) | btc69m979y-dotcom | **fix**: subagent session deletion | Completes lifecycle management for nested agent sessions with tracker tests |
| [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | liuzhq1986 | **fix(artifacts)**: missing local file error handling | User-visible toasts for moved/deleted artifact files instead of silent failures |
| [#2072](https://github.com/netease-youdao/LobsterAI/pull/2072) | btc69m979y-dotcom | **fix(openclaw)**: startup gateway optimization | Eliminates redundant config syncs, plugin re-registration, and dev-mode path errors |
| [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) | fisherdaddy | **fix(app-update)**: replace VBScript with PowerShell | Removes deprecated Windows launcher tech — security/maintenance win |
| [#2063](https://github.com/netease-youdao/LobsterAI/pull/2063) | fisherdaddy | **fix(im)**: scope reply assembly, strip thinking blocks | Prevents context pollution from prior turns and internal reasoning leakage |

**Thematic summary**: Today's merges concentrate on **three pillars**: (1) **performance at scale** (large output handling, deferred rendering), (2) **session lifecycle completeness** (subagent deletion, draft persistence), and (3) **Windows/desktop polish** (updater modernization, artifact error UX).

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Status | Activity | Analysis |
|:---|:---|:---|:---|
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) — "执行结果窗口滚动到顶端会假死" | **OPEN** | 1 comment, reported today | **Production regression in 2026.5.27** — UI freeze on scrolling execution results. Reproducible. Indicates virtualized list or synchronous render blocking on scroll-to-top. |

### Stale but Significant Community PRs (5 open, all from April)

| PR | Author | Topic | Days Open | Underlying Need |
|:---|:---|:---|:---|:---|
| [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473) | MaoQianTu | Unsaved confirmation: AgentCreateModal | ~56 | **Data loss prevention** — users accidentally close modals and lose configuration work |
| [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474) | MaoQianTu | Unsaved confirmation: AgentSettingsPanel | ~56 | Same pattern — settings mutation without guardrails |
| [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475) | MaoQianTu | Unsaved confirmation: McpServerFormModal | ~56 | MCP server config is complex; accidental closure is costly |
| [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476) | MaoQianTu | Draft persistence on component unmount | ~56 | **Core UX reliability** — input drafts lost during navigation/session switching |
| [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477) | MaoQianTu | Overwrite confirmation on message re-edit | ~56 | **Destructive action protection** — re-edit clobbers unsent composition |

**Community signal**: A single contributor (MaoQianTu) identified a **systematic UX gap around data loss prevention** and submitted a comprehensive 5-PR fix. The lack of maintainer engagement suggests either: (a) prioritization conflict with performance work, (b) review bandwidth constraints, or (c) architectural concerns about the implementation approach. These PRs represent **low-risk, high-user-impact** improvements that align with today's stability theme.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) — Scroll-to-top freeze in execution results | **OPEN** | ❌ No | Reproducible UI freeze in production build 2026.5.27. Likely related to synchronous markdown/virtualized list rendering on scroll boundary. **May connect to #2075/#2077 fixes** — today's merged deferred rendering work could be extended to this component. |
| 🟡 **Medium** | Large exec output WS disconnects (pre-#2077) | **FIXED** | ✅ #2077 | Tick watchdog starvation during >1MB stdout streams. Mitigated by treating any WS event as activity evidence. |
| 🟡 **Medium** | Missing local file silent failures in artifacts | **FIXED** | ✅ #2073 | Previously failed invisibly; now surfaces toast errors. |
| 🟢 **Low** | Deprecated VBScript launcher | **FIXED** | ✅ #2057 | Technical debt removal, no user-facing crash. |

**Assessment**: One **live production regression** remains unaddressed. The freeze in #2079 should be the top priority for the next 24-48 hours, especially given the concentrated renderer fixes already in flight.

---

## 6. Feature Requests & Roadmap Signals

### Implied from Today's Work

| Signal | Likely Near-Term Direction |
|:---|:---|
| Deferred/head-tail rendering for oversized content (#2075, #2077) | **Streaming/virtualized rendering architecture** becoming standard across all output surfaces |
| Skill routing metadata extraction (#2078) | **Pluggable skill orchestration** — foundation for skill marketplace or dynamic skill loading |
| Subagent lifecycle management (#2074) | **Hierarchical/multi-agent sessions** as first-class feature, not experimental |
| OpenClaw startup optimization (#2072) | **Plugin system hardening** — possibly preparing for third-party plugin ecosystem |
| HTML share integration docs (#2076) | **Collaborative/sharing features** expansion beyond local use |

### From Community PRs

| Request | PRs | Likelihood in Next Release |
|:---|:---|:---|
| Systematic unsaved-change guards | #1473–#1477 | **High** — complete, well-scoped, matches stability focus; needs maintainer review |
| Draft persistence reliability | #1476 | **High** — same as above |

---

## 7. User Feedback Summary

### Explicit Pain Points (from issues)

| Issue | User Impact | Emotional Valence |
|:---|:---|:---|
| #2079 scroll freeze | **Workflow interruption** — cannot review execution results without app restart | Frustrated (production regression) |

### Implicit Pain Points (from PR analysis)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Data loss anxiety** | 5 stale PRs all addressing unsaved state | High — systematic gap |
| **Performance at scale** | #2077 explicitly addresses >1MB, >20KB thresholds | High — power users hitting limits |
| **Opaque failures** | #2073 fixes silent artifact file errors | Medium — trust erosion |
| **Startup fragility** | #2072 resolves multiple gateway init issues | Medium — first-run experience |

### Satisfaction Indicators

- ✅ Rapid iteration on performance/reliability (9 PRs merged in 1 day)
- ✅ Proactive documentation (#2076, #2077)
- ❌ Production regression in latest build
- ❌ Community contributions languishing without response

---

## 8. Backlog Watch

### Critical: Needs Immediate Attention

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) — Production scroll freeze | 0 days | **User churn, support burden** | P0 fix; likely apply #2075/#2077 deferred rendering pattern to execution result component |
| [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473) – [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477) — Data loss prevention suite | ~56 days | **Contributor disengagement, reputational** | Batch review or provide architectural feedback; these are complete, tested UX improvements |

### Watch: Architectural Debt

| Item | Concern |
|:---|:---|
| #2077's "degraded backoff" for `sessions.list` RPC timeout | Documented as "known expected behavior" — suggests **systemic load issue during exec storms** that may resurface under higher concurrency |

---

## Project Health Scorecard

| Dimension | Rating | Notes |
|:---|:---|:---|
| Engineering velocity | 🟢 Strong | 9 merges/day, focused thematically |
| Release discipline | 🟡 Cautious | No release despite active fixes; may indicate 2026.5.27 hotfix pending |
| Production stability | 🔴 Concerning | Live regression unfixed >24h after report |
| Community responsiveness | 🔴 Weak | 5 complete PRs unreviewed for 8 weeks |
| Code quality trend | 🟢 Improving | Systematic test additions (#2074 tracker tests), documentation updates |

**Bottom line**: LobsterAI is executing well on **technical debt and performance scaling** but faces a **trust deficit** — both with users (production freeze) and contributors (stale PRs). Resolving #2079 and engaging with MaoQianTu’s UX suite would demonstrate balanced prioritization.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-30

## 1. Today's Overview

Moltis showed **moderate maintenance activity** over the past 24 hours with 4 issues and 2 PRs updated, though no new releases were cut. The project demonstrates **active bug triage** with a same-day fix merge for a skills configuration issue, but appears to be in a **stabilization phase** rather than feature expansion. Two new sandbox-related bugs on Apple Silicon suggest **platform compatibility remains a pain point**, particularly for enterprise macOS users. The most significant signal is the long-running PTY orchestration issue (#235) continuing to attract discussion, indicating sustained community interest in autonomous multi-agent capabilities. Overall project health appears **stable but resource-constrained**, with dependabot handling routine maintenance while core maintainers focus on reactive fixes.

---

## 2. Releases

**No new releases** were published today.

---

## 3. Project Progress

| PR | Status | Impact |
|:---|:---|:---|
| [#1084](https://github.com/moltis-org/moltis/pull/1084) — fix(skills): track bundled skill disables individually | **Merged/Closed** | **Bug fix merged same-day**: Resolves granular skill enable/disable logic across chat discovery, web API, and skill detail responses. Adds regression tests. |

**Technical advancement**: The skills system now correctly handles individual skill states independently from category-level toggles—a UI/UX correctness fix that prevents users from accidentally enabling/disabling entire skill bundles.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#235](https://github.com/moltis-org/moltis/issues/235) — PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration | **6 comments, 1 👍** | **Highest-engagement open issue** (created Feb 25, last active yesterday). Core technical blocker: Claude Code's TTY detection prevents non-interactive spawning, breaking agent-to-agent delegation. Underlying need: **True headless orchestration of LLM-powered coding agents**—foundational for Moltis's multi-agent thesis. Community wants either PTY emulation or official Claude Code API/sdk support. |
| [#1084](https://github.com/moltis-org/moltis/pull/1084) | Rapid merge | Demonstrates responsive maintainer bandwidth for scoped fixes. |

**Signal**: #235 represents a **strategic capability gap**. If unresolved, competitors with native agent interoperability (e.g., OpenAI's Codex CLI, Anthropic's own tooling) may subsume this use case.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **High** | [#1085](https://github.com/moltis-org/moltis/issues/1085) — Docker sandbox fails on arm64: /sys/class/dmi mount error | **No fix PR** | **Platform regression on Apple Silicon**. Hardcoded x86-specific sysfs paths (`/sys/class/dmi`, `/sys/devices/virtual/dmi`) fail in Docker Desktop's Linux VM. Blocks Docker sandbox usage for all M1/M2/M3 Mac users. |
| **High** | [#1086](https://github.com/moltis-org/moltis/issues/1086) — Apple Containers backend: sandbox image build fails (no DNS behind corporate proxy) | **No fix PR** | **Enterprise deployment blocker**. Zscaler/proxy environments cannot resolve DNS inside Apple Containers builder VM. Suggests missing proxy configuration pass-through or alternative DNS strategy. |
| **Medium** | [#1083](https://github.com/moltis-org/moltis/issues/1083) — Skills enabled/disabled per-category, unable to enable/disable one skill | **Fixed by [#1084](https://github.com/moltis-org/moltis/pull/1084)** | Same-day resolution. |

**Pattern**: Both open high-severity bugs are **sandbox infrastructure issues on macOS**, suggesting the container abstraction layer needs platform-specific validation expansion.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Version | Rationale |
|:---|:---|:---|
| **PTY/spawn emulation for agent interoperability** (implied by #235) | Medium-High | Long-running, well-scoped; may require upstream coordination with Anthropic or adoption of `node-pty`/`conpty` equivalent |
| **arm64 Docker sandbox compatibility** (from #1085) | High | Critical path fix; likely conditional mount logic based on `uname -m` |
| **Corporate proxy support for Apple Containers** (from #1086) | Medium | Requires design decision: proxy env var injection, custom DNS, or documented workaround |
| **Skills system refinements** | Low | Recently stabilized; no pending feature requests |

**Prediction**: Next release will likely prioritize **#1085 and #1086 fixes** for macOS sandbox parity, plus routine dependency updates (#1087).

---

## 7. User Feedback Summary

| Pain Point | Source | User Profile |
|:---|:---|:---|
| **"I can't use Moltis on my work Mac"** | #1086 | Enterprise developer behind corporate proxy; Apple Containers backend selected for security policy compliance |
| **"Docker sandbox broken on Apple Silicon"** | #1085 | Developer preferring Docker backend for reproducibility; blocked by architecture-specific assumptions |
| **"I want to chain agents but Claude Code won't cooperate"** | #235 | Power user/builder of autonomous systems; evaluating Moltis as orchestration layer vs. building custom |
| **"Skill toggles are unpredictable"** | #1083 | End user of chat/web interfaces; expects individual control |

**Satisfaction**: Responsive fix turnaround for UI bugs (#1083→#1084).
**Dissatisfaction**: **Platform coverage gaps** (macOS arm64, proxied environments) and **strategic feature latency** (#235, 3+ months open).

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#235](https://github.com/moltis-org/moltis/issues/235) | **94 days open** | **Strategic drift** | Maintainer decision: commit to PTY implementation, document limitation, or pivot to alternative agent protocols. Community energy exists but may dissipate without signal. |
| [#1085](https://github.com/moltis-org/moltis/issues/1085), [#1086](https://github.com/moltis-org/moltis/issues/1086) | 1 day | Escalation risk | Triage confirmation; likely quick fixes but unassigned as of digest. |

**Recommendation**: #235 warrants **explicit roadmap communication**—even a "not planned" resolution would clarify positioning versus emerging alternatives.

---

*Digest generated from github.com/moltis-org/moltis activity 2026-05-29 to 2026-05-30.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-30

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 46 issues and 34 PRs updated in the last 24 hours, indicating an active release cycle around the v1.1.9/v1.1.10-beta.1 versions. The project is in a **stabilization phase** with 26 issues closed versus 20 remaining open, and 18 PRs merged/closed against 16 open. The community is heavily engaged in bug reporting following the v1.1.9 release, with particular focus on desktop experience, cron job reliability, and memory management. A new beta release (v1.1.10-beta.1) dropped today with minor infrastructure improvements. The high volume of first-time contributors suggests growing ecosystem interest.

---

## 2. Releases

### [v1.1.10-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.1)

| Aspect | Detail |
|--------|--------|
| **Type** | Beta pre-release |
| **Changes** | 3 items |
| **Breaking** | None identified |

**What's Changed:**
- **Chore**: Refined README news section and version bump to v1.1.9 ([#4726](https://github.com/agentscope-ai/QwenPaw/pull/4726)) by @rayrayraykk
- **CI**: Dropped redundant `unit-tests.yml` workflow ([#4748](https://github.com/agentscope-ai/QwenPaw/pull/4748)) by @yutai78786
- **Chore**: Additional release preparation

**Assessment**: Minimal release — primarily housekeeping. No migration notes required.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, key items)

| PR | Author | Description | Impact |
|:---|:-------|:------------|:-------|
| [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806) | @rayrayraykk | **`spawn_subagent` tool** — Adds ephemeral in-workspace sub-agent execution with three collaboration modes | **Major feature**: Expands multi-agent architecture beyond cross-workspace `chat_with_agent` |
| [#4809](https://github.com/agentscope-ai/QwenPaw/pull/4809) | @rayrayraykk | OpenRouter app attribution headers for ranking visibility | Provider integration improvement |
| [#4742](https://github.com/agentscope-ai/QwenPaw/pull/4742) | @hongxicheng | Feishu card system restructure + streaming mode fix | Channel reliability |
| [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) | @jinglinpeng | Bundled desktop `qwenpaw` CLI for Tauri | Fixes desktop cron path issues |
| [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) | @wangfei010313 | Auto-install missing `pyside6-essentials` for Pet plugin | Desktop stability fix |
| [#4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) | @jinglinpeng | Hide Windows git console windows in coding mode | UX polish |
| [#4728](https://github.com/agentscope-ai/QwenPaw/pull/4728) | @qbc2016 | Preserve `reasoning_content` across file blocks | Prevents message vanishing bug |
| [#4805](https://github.com/agentscope-ai/QwenPaw/pull/4805) | @zhaozhuang521 | Clear editor tabs on project switch in coding mode | UX fix |

**Architecture Evolution**: The `spawn_subagent` PR ([#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)) is particularly significant — it creates a three-tier collaboration model:

| Mode | Workspace | History | Use Case |
|:-----|:----------|:--------|:---------|
| `chat_with_agent` | Cross-workspace | Shared | Long-term collaboration |
| `spawn_subagent` | Same workspace | Isolated | Ephemeral delegation |
| Direct tool call | Same workspace | Inline | Simple tasks |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | Status | Core Need |
|:---|:------|:---------|:-------|:----------|
| 1 | [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) Tool call hangs — agent waits for user input instead of continuing | 8 | **CLOSED** | **Reliability**: Tool execution loop integrity |
| 2 | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) Cron jobs share session with user messages, causing interruption | 7 | **CLOSED** | **Isolation**: Background task independence |
| 3 | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) v1.1.9-beta.1 cannot run local CLI commands (Feishu CLI, etc.) | 6 | **CLOSED** | **Integration**: Local tool ecosystem access |
| 4 | [#4802](https://github.com/agentscope-ai/QwenPaw/issues/4802) v1.1.9 cannot conduct normal Q&A — chat freezes | 6 | **CLOSED** | **Critical stability**: Basic functionality |
| 5 | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) **CoPaw Agent Teams** — Natural language-driven self-evolving multi-agent collaboration | 6 | **OPEN** | **Vision**: Autonomous team formation |

### Underlying Needs Analysis

- **#4739 & #4653**: Users need **deterministic execution guarantees** — background tasks must complete without interference, and tool calls must always resolve to agent continuation, not hung states.
- **#3224**: This is a **strategic feature request** with detailed architecture proposal. It asks for "natural language-driven" team creation vs. current "manual transmission" (手动挡) approach. The 6 comments and 2-month lifespan suggest sustained community interest.
- **#4712**: Windows subprocess/WebSocket isolation issues indicate **environment boundary problems** when AI agents spawn local tools.

---

## 5. Bugs & Stability

### Severity-Ranked Issues

| Severity | Issue | Status | Fix PR | Details |
|:---------|:------|:-------|:-------|:--------|
| **🔴 Critical** | [#4802](https://github.com/agentscope-ai/QwenPaw/issues/4802) Chat freezes on message send | **CLOSED** | Unknown | Complete UI lockup in v1.1.9 |
| **🔴 Critical** | [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) Vector index inflates to 37GB, crashes `memory_search` | **OPEN** | None | ChromaDB `link_lists.bin` unbounded growth; workaround: delete `file_store/` |
| **🟡 High** | [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) Streaming output causes system-level client lag | **OPEN** | None | Remote console access triggers local machine performance collapse |
| **🟡 High** | [#4791](https://github.com/agentscope-ai/QwenPaw/issues/4791) Last messages lost on SIGTERM restart | **OPEN** (wontfix?) | None | `shutdown_handler` empty in `runner.py` |
| **🟡 High** | [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) Tool call hangs → waits for user input | **CLOSED** | Yes | Post-tool execution state machine bug |
| **🟢 Medium** | [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) Disabled built-in skills re-enable after upgrade | **OPEN** | None | State persistence across updates |
| **🟢 Medium** | [#4783](https://github.com/agentscope-ai/QwenPaw/issues/4783) Desktop pet fails to open, terminal loops | **CLOSED** | [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) | Missing `pyside6-essentials` dependency |
| **🟢 Medium** | [#4773](https://github.com/agentscope-ai/QwenPaw/issues/4773) Desktop cron always tries to `pip install qwenpaw` | **CLOSED** | [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) | Missing bundled CLI in PATH |

**Stability Assessment**: v1.1.9 introduced **regressions in core chat functionality** (#4802) and **memory management degradation** (#4795). The ChromaDB unbounded growth issue is particularly concerning for long-running deployments. The fix rate is good (4/8 critical-high closed), but two severe issues remain unaddressed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Status | Likelihood in Next Version |
|:--------|:---------|:-------|:---------------------------|
| **Agent Teams / Self-evolving multi-agent** | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | Open, 6 comments | **Medium** — Architecture proposal exists, aligns with `spawn_subagent` direction |
| **VSCode-like checkpoint/revert per conversation** | [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) | Closed | **High** — User explicitly says "copy Trae"; closed without PR suggests may be planned |
| **Slash skill autocomplete (`/skills` + Tab)** | [#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) | Open | **High** — PR [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) already in review |
| **IDE-style file/code references in chat** | [#4823](https://github.com/agentscope-ai/QwenPaw/issues/4823) | Open, 1 comment | **Medium** — Detailed implementation proposal provided |
| **VSCode-compatible coding mode + direct folder import** | [#4759](https://github.com/agentscope-ai/QwenPaw/issues/4759) | Closed | **Medium** — Clear developer workflow need |
| **Plugin-registered custom channels** | [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) | Open | **High** — PR in progress, schema-driven config UI |
| **Prompt Section Registry for plugins** | [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) | Open | **Medium** — First-time contributor, clean architecture |

**Predicted v1.2.0 Themes**: Multi-agent orchestration (Teams), developer experience (coding mode parity with Trae/Cursor), plugin ecosystem maturity.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:------|:---------|:---------|
| **"Every upgrade breaks my setup"** | #4807 (skills re-enabled), #4795 (37GB index), #4802 (chat freezes) | High |
| **Desktop experience is fragile** | #4783 (pet loop), #4773 (pip install loop), #4712 (CLI broken), #4792 (streaming lag) | High |
| **Cron/job system unreliable** | #4653 (session sharing), #4649 (orphaned jobs), #4773 (PATH issues) | Medium-High |
| **UI/UX friction** | #4780 (small click targets), #4774 (input persistence), #4789 (no checkpointing) | Medium |

### Use Cases (Positive/Desired)

| Use Case | Source | Implication |
|:---------|:-------|:------------|
| **Long-running personal knowledge base** | #2880 (10MB upload limit for ebooks), #4795 (3-month vector DB) | Users treat CoPaw as persistent memory system |
| **Multi-agent life/work separation** | #3224, #2115, #2569 | Identity isolation is valued but incomplete |
| **Enterprise integration** (Feishu, WeCom) | #4821, #4708, #4742 | Channel robustness critical for B2B adoption |
| **Local CLI tool ecosystem** | #4712 | Users want CoPaw to orchestrate their existing tools |

### Satisfaction Signals
- Active first-time contributors (4 PRs tagged)
- Detailed feature proposals with mockups (#4789, #4823)
- Users providing log evidence and reproduction steps

### Dissatisfaction Signals
- "我要这个！" (I want this!) — demanding tone in #4789, #4823 suggests frustration with gap vs. competitors
- Workarounds required for basic stability (#4795: "delete `file_store/` to fix")
- Wontfix label on data loss issue #4791

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Risk |
|:------|:----|:--------|:-----|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) Agent Teams | ~7 weeks | Highest-commented open enhancement; strategic direction unclear | Competitor advance (AutoGPT, MetaGPT) |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) **AgentScope 2.0 migration** | 3 days | Breaking change; backend architecture upgrade | **Blocked on this**: Many features may wait |
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) 37GB vector index crash | 1 day | Production data loss risk; no PR | User trust erosion |
| [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) Streaming client lag | 1 day | System-level performance bug; remote access broken | Accessibility for server deployments |
| [#4791](https://github.com/agentscope-ai/QwenPaw/issues/4791) SIGTERM message loss | 1 day | Tagged `wontfix`? — data loss on restart | Reliability perception |

### PRs Stalled/Needing Review

| PR | Age | Blocker |
|:---|:----|:--------|
| [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) Plugin custom channels | 4 days | Complex; cross-cutting (backend + frontend) |
| [#4683](https://github.com/agentscope-ai/QwenPaw/pull/4683) Tauri desktop external links | 5 days | Desktop packaging complexity |
| [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) Prompt Section Registry | 1 day | New contributor; needs architecture review |

### Strategic Concern
The **AgentScope 2.0 migration** ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)) is a foundational breaking change that will likely gate many other enhancements. With only 3 comments and 2 upvotes, it appears under-discussed relative to its impact. Maintainers should prioritize communication on timeline and migration path.

---

*Digest generated from GitHub activity 2026-05-29 to 2026-05-30. All links reference `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-30

---

## 1. Today's Overview

ZeroClaw shows **elevated but concentrated activity** with 17 issues and 41 PRs updated in the last 24 hours, though only 1 issue closure and 3 merged/closed PRs indicate a **bottleneck at the review/merge stage**. The project is navigating a critical v0.8.0-beta-2 integration cycle with a massive XL-sized integration PR (#6848) pending feedback. Security and channel reliability dominate the agenda, with multiple P1 bugs around MCP tool filtering, token redaction, and Slack/Telegram channel breakages surfacing simultaneously. The 153-commit bulk revert recovery (#6074) remains an unresolved technical debt concern. Overall project health is **stable but strained** — high issue volume with low closure ratio suggests maintainer bandwidth constraints.

---

## 2. Releases

**No new releases.** The latest official release remains **v0.7.5**, while documentation and codebase have diverged toward **v0.8.0-beta-1** — creating a documented version mismatch ([Issue #6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997)). The v0.8.0-beta-2 pre-release is in preparation via [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848).

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Status | Significance |
|----------|--------|------------|
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) WeCom channel support | **Closed** | Enterprise WeChat (WxWork) channel support completed after ~2.5 months |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) Native extended thinking for Anthropic/Bedrock | **Closed** | Major provider capability (native reasoning budgets) — closure reason unclear, may need follow-up |
| [#7007](https://github.com/zeroclaw-labs/zeroclaw/pull/7007) WhatsApp LID JID fix | **Closed** | Duplicate/superseded by [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) |

### Active Development (Open PRs with Progress)

| PR | Focus | Status |
|----|-------|--------|
| [#7012](https://github.com/zeroclaw-labs/zeroclaw/pull/7012) | Onboarding wizard i18n localization | Fixes [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005), ready for review |
| [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) | WhatsApp LID→phone JID resolution | Active replacement for closed #7007 |
| [#6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988) | Gateway token invalidation on rotation/delete | Security fix for documented-but-broken behavior |
| [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) | Stream error fallback recovery | Restores #4675 behavior conservatively |

---

## 4. Community Hot Topics

### Most Discussed

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` no-op for MCP tools | **7 comments** | **Core architecture gap**: Filter system designed for native tools fails at MCP prefix boundaries. Community needs deterministic tool governance for security/compliance. Deferred loading integration missing compounds the problem. |
| 2 | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) WeCom channel | 5 comments (now closed) | Enterprise China-market demand; reference to OpenClaw extensions shows ecosystem portability expectations |
| 3 | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First Mode | 3 comments, **2 👍** | **Emerging user segment**: Small-model local deployment (Ollama) users hitting prompt bloat and instruction leakage. Only item with community upvotes — signals underrepresented but growing constituency. |

### Underlying Needs Analysis

- **Tool governance maturity**: [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) + [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) reveal the serialization/execution boundary as a systemic weak point
- **Enterprise deployment readiness**: WeCom + sandbox RFC + token redaction = compliance-sensitive production use cases
- **Local/edge deployment**: [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) indicates hobbyist/small-team users feel underserved by cloud-optimized defaults

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk Profile |
|----------|-------|-------------|---------|--------------|
| **S1 — Workflow Blocked** | [#6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) | Slack Socket Mode rejects ALL messages as "unauthorized user" | ❌ None | Authentication regression — complete channel failure |
| **S1 — Workflow Blocked** | [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) | Telegram voice transcription fails — `transcription_provider` alias never wired | ❌ None | Silent message dropping; broken feature |
| **S1 — Workflow Blocked** | [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) | Documentation version mismatch (docs show v0.8.0-beta-1, release is v0.7.5) | ❌ None | User confusion, onboarding friction |
| **S2 — Degraded** | [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) | Native tool serialization ignores Risk Profile + Tool Filter in v0.8.0-beta-1 | ❌ None | **Security boundary failure** — tools may execute despite restrictions |
| **S2 — Degraded** | [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) | TTS voice replies resolve wrong agent's `tts_provider` in multi-agent configs | ❌ None | Cross-agent config pollution |
| **S2 — Degraded** | [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) | Onboarding wizard has bare user-facing strings (i18n bypass) | ✅ [#7012](https://github.com/zeroclaw-labs/zeroclaw/pull/7012) | Localization debt |
| **S2 — Degraded** | [#6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) | CLI backspace deletes bytes not characters (CJK broken) | ❌ None | Accessibility/i18n UX bug |

### Critical Pattern: **Security Boundary Erosion**

Three high-risk bugs ([#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699), [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991), [#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989)) involve tool/config security controls failing to apply at runtime. This suggests v0.8.0-beta-1's architecture changes introduced systematic gaps between declared policy and execution.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in v0.8.x | Rationale |
|-------|---------|----------------------|-----------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | Granular sandbox policy (fs/network restrictions) | **High** | RFC with maintainer review tag; aligns with security focus; Landlock/Bubblewrap/Seatbelt already exist |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Schema-Guided Reasoning (SGR) cross-provider | **Medium** | Supersedes #4760; prior art exists; complex but strategically important for structured output |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode (compact prompts, strict parser, no leakage) | **Medium** | Community demand evidenced; conflicts with cloud-optimized defaults; may need config profile system |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Skills support and UX (v0.7.6 tracker) | **High** | Explicit release theme; in-progress |
| [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) | TUI UX improvements | **High** | Cross-cutting tracker active; #6848 integration includes zerocode TUI |

### Integration PR #6848 as Roadmap Consolidator

[PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) bundles: zerocode TUI, RPC socket transport, DenyWithEdit approval flow, and beta-2 prep. **Known gaps**: Delegates need reintroduction; model-provider fallback behaviors need rewiring. This is the critical path for next release.

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Pain | User Segment |
|--------|------|------------|
| [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999), [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) | Telegram channel half-broken (voice + TTS) | Telegram-first deployers |
| [#6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) | Slack Socket Mode completely non-functional | Enterprise Slack users |
| [#6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) | CJK input broken in CLI | East Asian users |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Small models overwhelmed by prompt bloat | Local/self-hosters, cost-sensitive |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 153 commits lost in bulk revert — recovery unclear | Contributors, downstream maintainers |

### Satisfaction Signals

- WeCom support completion ([#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)) — enterprise channel coverage expanding
- Active TUI investment — developer experience priority maintained
- Security token invalidation fix ([#6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988)) — responsive to reported vulnerabilities

### Dissatisfaction Signals

- **Version confusion**: Docs/code/release three-way split causing "which version should I use?" friction
- **Merge velocity**: 3/41 PRs closed/merged suggests contributor PRs may languish
- **Silent failures**: Voice transcription drops messages without clear error; TTS fails silently in multi-agent configs

---

## 8. Backlog Watch

### Long-Duration Items Needing Action

| Issue | Age | Blocker | Urgency |
|-------|-----|---------|---------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153-commit recovery audit | **62 days** since revert (2026-03-28) | Requires dedicated recovery branch + cherry-pick review | **High** — blocks feature resurrection, demoralizes contributors whose work was erased |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First Mode | **56 days** | Needs architectural decision on config profiles vs. runtime detection | Medium — growing constituency, only upvoted feature request |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) MCP tool_filter_groups no-op | **14 days** | Accepted, no assignee; touches runtime + config + MCP | **High** — security boundary failure, 7 comments, no PR |

### Maintainer Attention Needed

| PR/Issue | Flag | Action Required |
|----------|------|-----------------|
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | "DO NOT MERGE" — seeking first-round feedback | Core maintainers must provide structural review to unblock beta-2 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | `needs-maintainer-review` | Sandbox policy RFC — security-critical, no comments |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | `needs-maintainer-review` | SGR RFC — complex cross-provider change, no comments |
| [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | `needs-author-action` | Per-recipient reply pacing — 9-channel XL PR, stalled |

---

## Health Metrics Summary

| Indicator | Value | Assessment |
|-----------|-------|------------|
| Issue closure rate (24h) | 1/17 (5.9%) | ⚠️ Low — backlog growing |
| PR merge rate (24h) | 3/41 (7.3%) | ⚠️ Low — review bottleneck |
| P1 bugs open | 4 | 🔴 Elevated — security/channel critical |
| Security issues | 3 (#6699, #6989, #6991) | 🔴 Cluster — v0.8.0-beta-1 regression pattern |
| Community engagement | 2 👍 on #5287 only | ⚠️ Low visible enthusiasm; may indicate silent majority or fatigue |
| Release cadence | 0 new; v0.7.5 stale | 🔴 Blocked on #6848 integration |

**Recommendation**: Prioritize security boundary fixes (#6699, #6991, #6989) and #6848 review to unblock beta-2; establish triage rotation for S1 bugs to prevent channel regressions from lingering.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*