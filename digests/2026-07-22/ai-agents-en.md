# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-22 01:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest
**Date:** 2026-07-22

---

## 1. Today's Overview

OpenClaw remains in a period of **very high activity** with 500 issues and 500 PRs updated in the last 24 hours. Of these, 393 issues are open/active and 107 were closed, while 337 PRs are open and 163 merged/closed. There were **zero new releases** today. The project continues to focus heavily on **security hardening**, **session state integrity**, and **sub-agent reliability**, with multiple high-severity bugs (P0/P1) across CLI startup corruption, MCP tool injection, and subagent output delivery still awaiting maintainer review. The community is actively contributing, with several new small-batch fixes being submitted today. No new releases were cut, suggesting a stabilization cycle is in progress.

---

## 2. Releases

**No new releases today.** The latest tagged version remains **2026.7.1** (referenced in issues #106779 and #108473).

---

## 3. Project Progress

**163 PRs were merged or closed in the last 24 hours.** Notable advancements include:

- **Security:** PR [#112288](https://github.com/openclaw/openclaw/pull/112288) (`fix(security): close Host-header Origin spoof bypass in gateway browser origin check`) — a security fix submitted by community member `tzy-17`.

- **Outbound Hook Consistency:** PR [#107890](https://github.com/openclaw/openclaw/pull/107890) (`fix: make outbound hooks consistent for streamed replies`) — merged across Matrix, Mattermost, Telegram, Feishu, and CLI channels; rated P1 with sufficient proof.

- **Discord Webhook Reliability:** PR [#109076](https://github.com/openclaw/openclaw/pull/109076) (`fix(discord): bound webhook send body reads`) — prevents indefinite hangs on Discord outbound sends.

- **Subagent Orphan Recovery:** PR [#103823](https://github.com/openclaw/openclaw/pull/103823) (`fix(agents): guard subagent orphan recovery against concurrent double-resume`) — prevents double side-effects from concurrent recovery scans after gateway restart.

- **Completion Delivery Verification:** PR [#89287](https://github.com/openclaw/openclaw/pull/89287) (`fix(agents): verify completion delivery target`) — tightens ACP/subagent completion delivery accounting.

- **Live Model Discovery:** PR [#112412](https://github.com/openclaw/openclaw/pull/112412) (`feat: discover models from live provider catalogs`) — a large feature addition enabling users to select newly published provider models without waiting for static catalog updates.

- **Model Catalog Coherence:** PR [#112331](https://github.com/openclaw/openclaw/pull/112331) (`fix: keep model catalog coherent across config reloads`) — prevents runtime generation mixing during Gateway config reloads.

- **Claude CLI Integration:** Two PRs [#112458](https://github.com/openclaw/openclaw/pull/112458) and [#112457](https://github.com/openclaw/openclaw/pull/112457) improve Anthropic/Claude CLI profile forwarding and cron tool policy enforcement.

---

## 4. Community Hot Topics

**Most Discussed Issues (by comment count):**

1. **#10659** — [Feature Request: Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) (15 comments, 4 👍)
   - **Underlying need:** Users want agents to *use* API keys without *seeing* them, to prevent prompt injection extraction.
   
2. **#101290** — [CLI startup preflight corrupts live state DB](https://github.com/openclaw/openclaw/issues/101290) (13 comments, 1 👍, **P0**)
   - **Underlying need:** Production reliability — database corruption occurring 4× on macOS under normal gateway operation.

3. **#86996** — [Active Memory + Codex causes long response latency](https://github.com/openclaw/openclaw/issues/86996) (11 comments, 2 👍, **P1**)
   - **Underlying need:** Combination of active-memory + Honcho + Codex pipeline creates hook timeouts and event-loop stalls.

4. **#85030** — [MCP tools not injected into subagent sessions](https://github.com/openclaw/openclaw/issues/85030) (11 comments, 5 👍, **P1**)
   - **Underlying need:** Multi-agent orchestration is broken — `sessions_spawn` ignores all MCP tool configuration.

5. **#106779** — [Issue with 2026.7.1](https://github.com/openclaw/openclaw/issues/106779) (11 comments, 2 👍, **P1**)
   - **Underlying need:** Local llama.cpp provider fails on MacBook Pro M5 Max with template parsing error.

**Most Upvoted (reactions):**
- **#84527** — [Add Antigravity CLI (agy)](https://github.com/openclaw/openclaw/issues/84527) (11 👍) — migration from deprecated Google Gemini CLI.
- **#20786** — [Telegram Business Bot support](https://github.com/openclaw/openclaw/issues/20786) (6 👍) — enterprise Telegram integration.
- **#85030** — [MCP tools not injected into subagent sessions](https://github.com/openclaw/openclaw/issues/85030) (5 👍) — critical for multi-agent workflows.

---

## 5. Bugs & Stability

**Critical (P0):**
- **#101290** — [CLI startup preflight corrupts live state DB](https://github.com/openclaw/openclaw/issues/101290) — Database corruption 4× on macOS 2026.6.6 while gateway running. **No fix PR exists.** Needs maintainer review + product decision.

**High Severity (P1):**
- **#86996** — [Active Memory + Codex causes long response latency](https://github.com/openclaw/openclaw/issues/86996) — Hook timeouts, startup aborts, event-loop stalls. **No fix PR.**
- **#85030** — [MCP tools not injected into subagent sessions](https://github.com/openclaw/openclaw/issues/85030) — `sessions_spawn` ignores entire MCP tool configuration. **No fix PR.**
- **#106779** — [2026.7.1 breaks local llama.cpp](https://github.com/openclaw/openclaw/issues/106779) — Template parsing error on M5 Max. **Needs info** from maintainers.
- **#53408** — [Write/exec tool parameters silently dropped](https://github.com/openclaw/openclaw/issues/53408) — After 15+ turns, parameters go missing. **No fix PR.**
- **#90840** — [Subagent run completion delivered as raw output](https://github.com/openclaw/openclaw/issues/90840) — Regression; raw worker output sent to user instead of summary. **No fix PR.**
- **#88562** — [models.json generator writes apiKey as plain string](https://github.com/openclaw/openclaw/issues/88562) — Secret leakage via incorrect serialization. **No fix PR.**
- **#95441** — [encrypted_content persists after prior fixes](https://github.com/openclaw/openclaw/issues/95441) — GitHub Copilot/gpt-5.5 thinkingSignature still breaks LLM requests. **Closed** but may warrant re-opening.
- **#111498** — [Main agent blocked by workspace-state migration after Anthropic auth recovery](https://github.com/openclaw/openclaw/issues/111498) — Regression on macOS. **Needs info.**
- **#108473** — [cron tool schema breaks llama.cpp tool-calling](https://github.com/openclaw/openclaw/issues/108473) — Regression; unanchored regex pattern breaks local models. **No fix PR.**

**Notable Fix PRs Submitted Today:**
- [#112288](https://github.com/openclaw/openclaw/pull/112288) — Host-header Origin spoof bypass (security)
- [#109076](https://github.com/openclaw/openclaw/pull/109076) — Discord webhook send body reads (availability)
- [#103823](https://github.com/openclaw/openclaw/pull/103823) — Subagent orphan recovery double-resume (session state)
- [#105806](https://github.com/openclaw/openclaw/pull/105806) — Stuck-session recovery terminal-phase reply (session state)

---

## 6. Feature Requests & Roadmap Signals

**High-Community-Interest Features:**

1. **#10659 — Masked Secrets** (P1, diamond lobster) — Protect API keys from agent visibility. Strong candidate for next release given security focus.

2. **#84527 — Antigravity CLI (agy) as CLI backend** (11 👍) — Google Gemini CLI deprecation (June 18 deadline past) makes this urgent. Likely in next release.

3. **#20786 — Telegram Business Bot support** (6 👍, linked PR open) — Enterprise Telegram feature for Business-connected personal chats.

4. **#7722 — Filesystem Sandboxing Config** (P2, diamond lobster) — `tools.fileAccess` with allow/deny paths. High security value.

5. **#16670 — Onboarding Wizard should include Memory setup** (P2, diamond lobster) — UX improvement; memory is a core feature but not mentioned during setup.

6. **#13616 — Backup/Restore utility** (P2, off-meta tidepool) — Standardized backup for config, cron jobs, session history. Important for production deployments.

7. **#13364 — before_tool_call/after_tool_call hooks** (P2, diamond lobster) — Expose internal hooks for managed plugin interception.

8. **#12678 — Capability-based permissions for skills** (P2, diamond lobster) — Default-deny high-risk actions. Security-driven roadmap signal.

**Likely for Next Version (v2026.8.x):**
- Antigravity CLI backend (urgency from Google deprecation)
- Masked secrets (high security impact)
- Telegram Business bot support (linked PR open)
- Capability-based permissions (security focus)
- Live model discovery (PR #112412 merged today)

---

## 7. User Feedback Summary

**Pain Points:**
- **Database corruption** (#101290): Production users on macOS experiencing repeated SQLite corruption under normal load — "no power loss, no OS crash, no unclean shutdown."
- **Local model incompatibility** (#106779, #108473): M5 Max MacBook users and llama.cpp users facing broken tool-calling after 2026.7.1 update.
- **Subagent tool isolation broken** (#85030): Users building multi-agent pipelines cannot restrict MCP tools — "bundle-mcp + per-tool subagent allowlist ... all ignored."
- **Silent parameter dropping** (#53408): After 15+ turns, `write` and `exec` tools lose all parameters — "arrives with an empty arguments object."
- **Secret leakage risk** (#88562): `models.json` generator writes `apiKey` as plain string instead of secret-ref — "no way for users to review permissions before installation."

**Use Cases Emerging:**
- **Enterprise multi-agent orchestration** (sessions_spawn, MCP tool injection)
- **Production deployment** (backup/restore, safe update with rollback)
- **Security-conscious operations** (masked secrets, filesystem sandboxing, capability-based permissions)
- **Local-first AI** (llama.cpp, local models on Apple Silicon)

**Satisfaction Signals:**
- Active community submitting 163 PRs merged/closed today
- High engagement on security and reliability features
- 11 👍 on Antigravity CLI migration — shows users actively planning infrastructure changes

---

## 8. Backlog Watch

**Critical Backlog Items (No Fix PRs, Needs Maintainer Action):**

| Issue | Priority | Days Since Updated | Why It Matters |
|-------|----------|-------------------|----------------|
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | **P0** | 1 day | Database corruption on normal operation — production blocker |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | P1 | 1 day | Event-loop stalls under active-memory + Codex |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | P1 | 1 day | MCP tools completely broken for subagents |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | P1 | 1 day | Silent parameter dropping after long conversations |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) | P1 | 1 day | Subagent output leaked to wrong user |
| [#88562](https://github.com/openclaw/openclaw/issues/88562) | P1 | 1 day | Secret leakage via models.json |

**Long-Pending Issues (Created February 2026, Still Open):**
- [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem Sandboxing (created 2026-02-03)
- [#20786](https://github.com/openclaw/openclaw/issues/20786) — Telegram Business Bot (created 2026-02-19)
- [#16670](https://github.com/openclaw/openclaw/issues/16670) — Memory setup in onboarding (created 2026-02-15)
- [#12678](https://github.com/openclaw/openclaw/issues/12678) — Capability-based permissions (created 2026-02-09)
- [#13616](https://github.com/openclaw/openclaw/issues/13616) — Backup/restore utility (created 2026-02-10)

**PRs Waiting for Maintainer Look (Status: 👀 ready for maintainer look):**
- [#107890](https://github.com/openclaw/openclaw/pull/107890) — Outbound hooks consistency for streamed replies (P1)
- [#105884](https://github.com/openclaw/openclaw/pull/105884) — Vydra media generation request policy (P1)
- [#89287](https://github.com/openclaw/openclaw/pull/89287) — Completion delivery target verification (P1)
- [#111636](https://github.com/openclaw/openclaw/pull/111636) — Zalo Bot API hang fix (P1)

**PRs Waiting on Author (Status: ⏳ waiting on author):**
- [#89039](https://github.com/openclaw/openclaw/pull/89039) — Silent message loss from EmbeddedAttemptSessionTakeoverError (since June 1)
- [#103823](https://github.com/openclaw/openclaw/pull/103823) — Subagent orphan recovery (since July 10)
- [#97845](https://github.com/openclaw/openclaw/pull/97845) — Namespaced tool-call XML leaks (since June 29)

---

**Project Health Assessment:** OpenClaw is in a **stabilization phase** with high activity but no new release today. The community is highly engaged (163 merged/closed PRs), but **five P1 critical issues** remain without fix PRs, and one P0 database corruption bug is unresolved. Security features dominate the roadmap. The lack of a new release suggests maintainers are prioritizing quality over velocity, which is appropriate given the regression volume.

---

## Cross-Ecosystem Comparison

# AI Agent Open-Source Ecosystem Cross-Project Comparison
**Date:** 2026-07-22

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **maturation phase** following the rapid expansion of 2025–early 2026. Projects are now consolidating architectures, hardening security, and addressing production-grade reliability concerns. A clear split is emerging between **general-purpose agent frameworks** (OpenClaw, NanoBot, Hermes, IronClaw) and **lightweight/specialized implementations** (PicoClaw, NanoClaw, ZeroClaw, CoPaw). The ecosystem's collective focus has shifted from "can we build it" to "can we run it safely and reliably at scale," with security vulnerabilities (secret leakage, workspace bypasses, tool injection) and data integrity (database corruption, session contamination) dominating today's bug reports. Community engagement remains high, with over **1,300 combined PRs and issues** updated across tracked projects in the last 24 hours alone.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release in 24h? | Health Score | Trend |
|---------|---------------------|-------------------|-----------------|-------------|-------|
| **OpenClaw** | 500 | 500 | No | 🟡 Stabilizing | Very high activity, 5 P1 bugs unfixed |
| **NanoBot** | ~20 | ~22 merged | No | 🟢 Healthy | Strong bug-fix cadence, RC imminent |
| **Hermes** | 50 | 50 | No | 🟡 Active | Critical upgrade data loss reported |
| **PicoClaw** | 8 | 8 | No | 🟡 Moderate | Steady fixes, stale security item |
| **NanoClaw** | 1 | 12 | No | 🟢 Healthy | Moderate, channel expansion focus |
| **NullClaw** | 0 | 0 | — | ⚪ Inactive | No activity in 24h |
| **IronClaw** | 41 | 50 | No (rc.1 active) | 🟢 Pre-v1 Sprint | Intense architectural consolidation |
| **LobsterAI** | 1 | 10 | No | 🟢 Healthy | Steady fix-and-refine cadence |
| **Moltis** | 0 | 1 (Dependabot) | No | ⚪ Low Activity | Maintenance-only phase |
| **CoPaw** | 42 | 50 | **Yes** (v2.0.1b1) | 🟢 High Momentum | Post-major-release hardening |
| **ZeptoClaw** | 0 | 0 | — | ⚪ Inactive | No activity in 24h |
| **ZeroClaw** | 50 | 50 | No | 🟡 Feature-Heavy | Critical S0 bugs unfixed |

**Key observations:**
- 9/12 projects showed activity; 3 were completely inactive.
- Only **CoPaw** shipped a new release today.
- **OpenClaw** dominates in raw volume (1,000+ updates) but carries significant unresolved P0/P1 bugs.
- **IronClaw** and **CoPaw** represent the most active core-team-driven development.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Advantage | Peer Weakness |
|-----------|-------------------|---------------|
| **Community size** | Largest ecosystem (500+ daily contributors) | Hermes (~50), PicoClaw (~8) |
| **Platform coverage** | 7+ messaging channels (Matrix, Telegram, Discord, etc.) | ZeroClaw lacks Telegram reliability |
| **Feature breadth** | Live model discovery, masked secrets RFC, Antigravity CLI | NanoBot lacks session persistence |
| **Security focus** | Dedicated security PRs merged today, masked secrets RFC | ZeroClaw has 2 open S0 security bypasses |

### Technical Approach Differences
- **Architecture**: OpenClaw uses a **monolithic gateway + plugin** model vs. IronClaw's **Reborn micro-service architecture** and ZeroClaw's **Rust-native type-safe** approach.
- **Agent model**: OpenClaw's sub-agent spawning (`sessions_spawn`) is unique — only CoPaw has a comparable multi-agent primitive in its OMP workflow modes.
- **MCP integration**: OpenClaw's MCP tool injection is broken (P1 bug #85030) — Hermes and ZeroClaw have more reliable MCP implementations but with their own bugs (Hermes: re-registration failure; ZeroClaw: memory leaks).

### Community Size Comparison
| Metric | OpenClaw | Next Largest (Hermes) | Ratio |
|--------|----------|----------------------|-------|
| Issues updated/24h | 500 | 50 | 10:1 |
| PRs updated/24h | 500 | 50 | 10:1 |
| Contributors today | ~50 unique | ~15 unique | 3:1 |
| Unresolved P0 bugs | 1 | 0 (but 1 P1 data loss) | — |

**Verdict:** OpenClaw is the **undisputed leader in community size and activity**, but its bug backlog (5 P1 issues without fix PRs) and CLI database corruption (P0 #101290) make it less production-ready than IronClaw or CoPaw.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **3+ projects** today:

| Requirement | Projects Affected | Specific Needs |
|-------------|------------------|----------------|
| **Secret/Masked Secrets** | OpenClaw (#10659), NanoBot (#5010), ZeroClaw (#88562) | API keys visible to agents via prompt injection; need env-var refs or masked fields |
| **Subagent Tool Isolation** | OpenClaw (#85030), ZeroClaw (#8279), Hermes (#67187) | MCP tools & permissions not inherited by spawned agents |
| **Database Corruption / Session Integrity** | OpenClaw (#101290), Hermes (#68474), CoPaw (#6299) | SQLite state corruption under normal operations; session contamination across deletions |
| **Provider Compatibility (Local Models)** | OpenClaw (#106779, #108473), CoPaw (#6324), NanoBot (#4867) | Local LLM tool-calling broken after updates; model caching issues |
| **OAuth / Authentication Reliability** | PicoClaw (#3278, #3274), ZeroClaw (#8505) | Google OAuth policy blocks; silent auth failures in channels |
| **Configuration Friction** | ZeroClaw (#8718, #8810), NanoClaw (#2236), PicoClaw (#303) | Broken defaults, incorrect docs, WORKDIR mismatches in containers |
| **Performance Regressions** | OpenClaw (#86996), CoPaw (#6307), NanoBot (#4867) | Event-loop stalls, fixed 2s overhead, no prompt caching |

**Implication:** These are **ecosystem-wide unsolved problems**, not project-specific issues. Any agent framework aiming for production readiness must address all seven.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|--------|----------|-------|----------|
| **Primary Language** | Python | Python | Rust | Python | Rust |
| **Target User** | General developers | Power users / tinkerers | Enterprise operators | Chinese-market devs | Security-conscious devs |
| **Unique Feature** | sessions_spawn (multi-agent) | Kanban system, TUI | Reborn architecture (distributed) | OMP workflow modes, Scroll mode | Type safety, eval harness |
| **Channel Breadth** | 7+ (broadest) | Desktop + TUI | MCP-centric | Chinese platforms (DingTalk, Feishu) | Telegram-focused |
| **Key Weakness** | Bug backlog | Upgrade data loss | Pre-v1 instability | Non-Qwen model issues | Onboarding friction |
| **Release Cadence** | Monthly-ish | Weekly-ish | RC phase | Weekly (post-v2) | Monthly-ish |

**Key Insight:** The ecosystem is **stratifying by language and deployment model**:
- **Python frameworks** (OpenClaw, Hermes, CoPaw, NanoBot) prioritize **rapid feature iteration** and broad platform support but struggle with reliability.
- **Rust frameworks** (IronClaw, ZeroClaw) promise **memory safety and performance** but have smaller communities and slower iteration.
- **Go frameworks** (PicoClaw) occupy a middle ground, smaller but stable.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Hyper-Active (500+ updates/24h)**
| Project | Phase | Signal |
|---------|-------|--------|
| **OpenClaw** | Stabilization | High bug-fix velocity, unresolved critical bugs |
| **ZeroClaw** | Heavy feature dev | Major RFCs in flight, security debt accumulating |

**Tier 2 — High Activity (40-50 updates/24h)**
| Project | Phase | Signal |
|---------|-------|--------|
| **Hermes** | Active development | Critical data loss but rapid response |
| **IronClaw** | Pre-v1 sprint | Architectural consolidation nearing completion |
| **CoPaw** | Post-major-release | v2.0.1b1 released; hardening phase |

**Tier 3 — Moderate Activity (1-20 updates/24h)**
| Project | Phase | Signal |
|---------|-------|--------|
| **NanoBot** | Bug-fix cadence | RC candidate, strong maintainer responsiveness |
| **PicoClaw** | Steady state | Incremental improvements, stale security item |
| **NanoClaw** | Channel expansion | Community-driven feature additions |
| **LobsterAI** | Fix-and-refine | Minor improvements, dependency debt |

**Tier 4 — Low / No Activity**
| Project | Phase | Signal |
|---------|-------|--------|
| **Moltis** | Maintenance | Dependabot only; no community engagement |
| **NullClaw** | Inactive | No activity |
| **ZeptoClaw** | Inactive | No activity |

---

## 7. Trend Signals

### From Community Feedback to Industry Directions

**Trend 1: Security is the #1 adoption blocker**
- 4 of 7 shared focus areas are security-related (secrets, isolation, OAuth, configuration leaks).
- ZeroClaw's two S0 bugs (workspace bypass, delegate bypass) and OpenClaw's P0 database corruption represent existential risks for production deployments.
- **Takeaway for developers:** Prioritize secret management (env-var or masked refs) and subagent permission inheritance before multi-agent features.

**Trend 2: Local-first AI is a growing requirement but poorly supported**
- OpenClaw, CoPaw, and NanoBot all have active issues about local model (llama.cpp, Ollama) compatibility breaking after updates.
- Users with 32GB+ VRAM hardware report "unusable" performance without prompt prefix caching.
- **Takeaway for developers:** Test every release against Ollama and llama.cpp before shipping. Implement prompt caching as a core feature, not optional.

**Trend 3: Multi-agent orchestration is the defining use case**
- OpenClaw's sessions_spawn, ZeroClaw's goal mode, Hermes' kanban system, and CoPaw's OMP workflows all aim at bounded autonomous multi-agent execution.
- Yet every implementation has bugs: MCP tool injection broken (OpenClaw), allowlist bypass (ZeroClaw), orphan processes (Hermes).
- **Takeaway for developers:** Multi-agent is not a feature — it's an architectural commitment. Solve subagent isolation and session integrity first.

**Trend 4: Channel parity remains fragmented**
- LINE (Japan/Taiwan/Thailand), DingTalk (China), and Telegram (Global) dominate requests, but no project supports all three reliably.
- NanoClaw is adding LINE; CoPaw has Chinese channels; PicoClaw covers Telegram/Matrix but not LINE.
- **Takeaway for developers:** Geographic expansion requires channel investment. Choose your target market.

**Trend 5: Obsolescence of third-party CLIs is accelerating**
- OpenClaw's #84527 (Antigravity CLI migration, 11 👍) follows Google Gemini CLI deprecation.
- The ecosystem is standardizing on a single CLI interface — Antigravity is becoming the default.
- **Takeaway for developers:** If you plan a new CLI, build on Antigravity, not custom.

**Trend 6: Telemetry and observability are becoming table stakes**
- NanoClaw merged Langfuse tracing; IronClaw landed QA trace catalog (42 harvested traces); ZeroClaw built eval harness.
- Production users need debugging, performance monitoring, and replay capabilities.
- **Takeaway for developers:** Build observability into the agent runtime, not as a post-hoc bolt-on.

---

## Executive Summary

The AI agent open-source ecosystem is **maturing rapidly but unevenly**. OpenClaw leads in community size and feature breadth but carries a concerning bug backlog that undermines its production readiness. IronClaw and CoPaw are executing disciplined architectural overhauls with fewer critical issues. ZeroClaw is the most ambitious in new features but has the most alarming security debt.

**For technical decision-makers:** If you need the broadest platform support and largest community today, choose **OpenClaw** — but budget for database corruption workarounds and missing subagent tools. For production deployments requiring stability, **IronClaw** (once v1.0 ships) or **CoPaw** (for Chinese markets) are safer bets. For security-first use cases, **ZeroClaw**'s Rust foundations are promising, but resolve the two S0 bypasses before deploying.

**The ecosystem's collective message is clear:** Security, session integrity, and local model support are the non-negotiable foundations. Everything else is decoration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for **2026-07-22**.

---

## NanoBot Project Digest — 2026-07-22

### 1. Today's Overview
Project activity is **very high**, driven by a continued focus on closing long-standing bugs and hardening core infrastructure. 9 issues were closed in the last 24 hours, alongside 22 merged/closed pull requests, indicating a strong maintainer cadence. The community is highly engaged, with 11 open issues and 11 open PRs still in flight. While there were no new releases published today, the volume of merged fixes—particularly around tool protocol errors, memory leaks, and security—suggests a release candidate may be imminent.

### 2. Releases
**None.** No new releases were published on 2026-07-22. The project relies on daily `main` branch development.

### 3. Project Progress
22 PRs were merged or closed in the last 24 hours, representing significant progress across several subsystems:

- **Fix: Quarantine Invalid Tool Results (PR [#4663](https://github.com/HKUDS/nanobot/pull/4663))**: A major fix for the tool-result protocol repair logic. It now drops missing, duplicate, or orphaned tool results before provider replay, preventing corrupted session history.
- **Security: Documentation & Atomic Writes (PR [#5010](https://github.com/HKUDS/nanobot/pull/5010), PR [#4984](https://github.com/HKUDS/nanobot/pull/4984))**: Updated SECURITY.md to recommend env-var references for API keys over plaintext, and fixed the config writer to use atomic writes (`temp+replace`) to prevent file corruption on crash.
- **Provider: ModelScope Support (PR [#4965](https://github.com/HKUDS/nanobot/pull/4965))**: Added ModelScope as a built-in provider via its OpenAI-compatible API.
- **Provider: UTF-16 Sanitization (PR [#4952](https://github.com/HKUDS/nanobot/pull/4952))**: Fixed a blocking `UnicodeEncodeError` on emoji-heavy content by sanitizing surrogates at the provider request boundary.
- **Provider: Codex Fast Mode (PR [#5019](https://github.com/HKUDS/nanobot/pull/5019))**: Added support for Codex Fast mode via `service_tier: "priority"` field.
- **Transcription Fix (PR [#4989](https://github.com/HKUDS/nanobot/pull/4989))**: Resolved `401 Unauthorized` errors for voice transcription by ensuring `api_key` and `api_base` fields are correctly interpolated for environment variables.
- **Cron Schedule Fix (PR [#4983](https://github.com/HKUDS/nanobot/pull/4983))**: Fixed a `TypeError` in cron scheduling caused by `jobs.json` storing timestamps as strings instead of ints.
- **WebUI Polish (PR [#5020](https://github.com/HKUDS/nanobot/pull/5020))**: Feature highlight added: skill references (e.g., `$skillname`) in sent user messages are now visually marked.

### 4. Community Hot Topics
- **Prompt Prefix Caching (Issue [#4867](https://github.com/HKUDS/nanobot/pull/4867))**: *Closed*. The most active issue (22 comments) requested preserving exact prompt prefixes to leverage caching in Ollama. The discussion highlights a critical pain point for users with large local models (32GB VRAM), where every turn adds 60 seconds of overhead. This was resolved.
- **Endless Loop on Goal Completion (Issue [#4864](https://github.com/HKUDS/nanobot/pull/4864))**: *Open*. A bug where `complete_goal` enters an endless loop due to a serialization change in the gateway. The user requests a `/cancel-goal` command (see PR [#5022](https://github.com/HKUDS/nanobot/pull/5022) for a proposed fix).
- **Guarded Tool Gateway Seam (Issue [#4911](https://github.com/HKUDS/nanobot/pull/4911))**: *Closed*. Request to allow channels (e.g., voice agents) to run the agent's tools. This signals growing demand for multi-modal channels that need direct tool access, not just text forwarding.

### 5. Bugs & Stability
Three new bugs were reported today, all with associated fix PRs already in the pipeline:

| Issue | Severity | Summary | Status | Fix PR |
|---|---|---|---|---|
| [#5023](https://github.com/HKUDS/nanobot/pull/5023) | P2 | Qwen models expose thinking/reasoning content in chat responses on some providers | **Open** | PR [#5023](https://github.com/HKUDS/nanobot/pull/5023) (open) |
| (implied by Issue [#4864](https://github.com/HKUDS/nanobot/pull/4864)) | P1 | Tool function call serialization change causing infinite loops | **Open** | PR [#5022](https://github.com/HKUDS/nanobot/pull/5022) (open) |
| (implied by Issue [#5013](https://github.com/HKUDS/nanobot/pull/5013)) | P2 | Missing user confirmation before shell execution (security risk) | **Closed** | N/A (feature request, not a fix) |

Additionally, a **regression** was reported: WebUI sessions stored on legacy file paths are not being read after restart (PR [#4941](https://github.com/HKUDS/nanobot/pull/4941), open).

### 6. Feature Requests & Roadmap Signals
- **Shell Execution User Confirmation (Issue [#5013](https://github.com/HKUDS/nanobot/pull/5013))**: *Closed*. A user requested a human-in-the-loop confirmation before shell commands execute in the WebUI and loop. This is likely to land as a middleware pattern in an upcoming release.
- **Explicit Skill Context Loading (PR [#5018](https://github.com/HKUDS/nanobot/pull/5018))**: *Open*. A feature to allow direct callers to preload explicitly requested skills (vs. only `always: true` skills). This could land in the next minor release.
- **Model Presets Bound to Sessions (PR [#4866](https://github.com/HKUDS/nanobot/pull/4866))**: *Open*. A major feature (P1) to persist model overrides in session metadata, allowing different conversations to use different models without changing global config.
- **Configurable Hidden Settings Sections (PR [#4399](https://github.com/HKUDS/nanobot/pull/4399))**: *Open*. A long-running PR (since June 18) to allow admins to hide WebUI settings. This has merge conflicts but is a high-value request for multi-instance deployments.

### 7. User Feedback Summary
- **Satisfaction**: Users are clearly benefiting from the rapid bug-fix cadence. The 9 closed bugs and 22 merged PRs in a single day indicate maintainer responsiveness.
- **Dissatisfaction**: The **biggest pain point** is performance with local models (Ollama) and caching (Issue [#4867](https://github.com/HKUDS/nanobot/pull/4867)). The "unusable with 32GB VRAM" comment signals that this is a top-tier performance blocker for power users. A second major pain point is **tool call serialization errors** causing infinite loops (Issue [#4864](https://github.com/HKUDS/nanobot/pull/4864)), which break user workflows entirely.
- **Pain Points**: Users also reported leaking thinking tokens (Qwen models), orphaned child processes from exec sessions, and unresponsive `/stop` commands when `long_task` goals are active.

### 8. Backlog Watch
- **PR [#4399](https://github.com/HKUDS/nanobot/pull/4399)**: *Open since 2026-06-18*. Feature to hide WebUI settings sections. Stalled with merge conflicts. High value for multi-tenant/admin use cases.
- **PR [#4594](https://github.com/HKUDS/nanobot/pull/4594)**: *Open since 2026-06-29*. Security fix: shell workspace guard fails to block `curl --output=/etc/passwd` style commands. Still unmerged despite being a **P1 security fix**. Needs maintainer attention.
- **PR [#4987](https://github.com/HKUDS/nanobot/pull/4987)**: *Open since 2026-07-19*. A **P0 (critical)** security fix to bind workspace checks to opened file handles. This has a conflict flag and appears blocked; it is a potential exploit vector.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-22

## 1. Today's Overview

Hermes Agent is experiencing **very high activity** today, with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a **healthy open/closed ratio** of approximately 44:6 across both issues and PRs, indicating active triage and merging. No new releases were cut today, but the development velocity is substantial, with critical P1 and P2 bugs being filed alongside several major feature PRs. The community is highly engaged, contributing detailed bug reports, feature requests, and multi-file PRs touching core subsystems like kanban, gateway, MCP, compression, and the TUI.

## 2. Releases

**No new releases today.** The last available version is presumed to be v0.19.x based on issue references. Users are actively reporting upgrade-related issues (see Bugs & Stability).

## 3. Project Progress

Six PRs were merged/closed today:

- **[#68997 — fix(windows): share one bounded, tree-killing git probe across both probe call sites](https://github.com/NousResearch/hermes-agent/pull/68997)** (CLOSED) — Fixes Windows git subprocess deadlocks by sharing a bounded, tree-killing git probe across two call sites. Supersedes two older PRs.
- **[#68896 — fix(tests): anchor MCP breaker opened_at to monotonic now, not a literal](https://github.com/NousResearch/hermes-agent/pull/68896)** (CLOSED) — Kills a CI-only flake in MCP circuit-breaker tests by anchoring `opened_at` to `time.monotonic()` instead of a fixed literal.
- **[#69019 — fix(desktop): stop long-session transcript from drifting to old turns](https://github.com/NousResearch/hermes-agent/pull/69019)** (OPEN) — Fixes a visual regression where long desktop-session transcripts drift to old turns while waiting.
- **[#68857 — feat(themes): cross-surface theme SDK — one skin themes CLI, TUI, and desktop, live](https://github.com/NousResearch/hermes-agent/pull/68857)** (OPEN) — Introduces a Python skin engine as the single source of truth for theming across CLI, TUI, and desktop GUI, applying live.
- **[#69002 — fix(tui-gateway): fail closed on session reasoning scope](https://github.com/NousResearch/hermes-agent/pull/69002)** (OPEN) — Makes `config.set` with `scope=session` fail closed when the target session no longer exists.

Six issues were also closed today, including #38786 (Image blocked on Windows desktop), #54675 (Multiplexed gateway token leak), #65677 (MCP server connection failures), and #62212 (MCP keepalive infinite reconnect loop).

## 4. Community Hot Topics

The most active discussions today center around **memory configuration**, **access controls**, and **MCP reliability**:

1. **[#47349 — Configurable Memory Backends](https://github.com/NousResearch/hermes-agent/issues/47349)** (13 comments, 1 👍) — *Type: feature/needs-decision*  
   The community's top-voted feature request asks to rename `memory.md` to `rules.md` and make memory backends configurable (disable fixed files, use only honcho/fact_store). This reflects a strong desire for more modular, user-controlled memory architectures.

2. **[#25083 — Immutable/protected skills](https://github.com/NousResearch/hermes-agent/issues/25083)** (7 comments) — *Type: feature*  
   Users want the ability to protect critical skills (governance rules, safety constraints) from agent modification without explicit approval. This signals a growing need for **safety boundaries** in agent tooling.

3. **[#67187 — MCP parked server revival reconnects but does not re-register tools](https://github.com/NousResearch/hermes-agent/issues/67187)** (7 comments) — *Type: bug/needs-repro*  
   A reproducible bug where MCP server reconnection after being parked fails to restore tool registrations, breaking the toolset until a full restart. This is a **critical usability issue** for users relying on MCP.

4. **[#64900 — Allow plugins to extend send_message with platform-specific schema](https://github.com/NousResearch/hermes-agent/issues/64900)** (5 comments) — *Type: feature/needs-decision*  
   Plugin authors request the ability to add custom parameters and dispatch handlers for messaging platforms without editing core code.

Several issues filed today (e.g., #68915, #68920, #68858) received 4+ comments immediately, indicating high community engagement with new bug reports.

## 5. Bugs & Stability

**Critical/P1 bugs filed today:**

- **[#68915 — Worker deadlocks when agent backgrounds a server via shell `&`](https://github.com/NousResearch/hermes-agent/issues/68915)** (P1) — The LLM running a `cd X && node server.js &` command causes a permanent Python-level deadlock because an orphaned subshell holds the stdout pipe open. No fix PR yet.

- **[#68474 — state.db zeroed (95MB of null bytes) during desktop update to v0.19.0 on Windows](https://github.com/NousResearch/hermes-agent/issues/68474)** (P1) — Desktop update completely destroys the SQLite session database on Windows 10. The pre-update snapshot is intact, but no clear root cause yet. This is a **severe upgrade bug**.

**High/P2 bugs filed today:**

- **[#68920 — Desktop/TUI sessions leak active-session leases](https://github.com/NousResearch/hermes-agent/issues/68920)** (P2) — `max_concurrent_sessions` blocks new sessions over time due to lease accumulation in `active_sessions.json`. Root cause identified: TUI garbage collection is missing.

- **[#68858 — v0.19 in-place compaction saturates disk I/O and wedges gateway shutdown](https://github.com/NousResearch/hermes-agent/issues/68858)** (P2) — Large `state.db` files trigger repeated in-place compaction that saturates disk I/O and can wedge the gateway shutdown process.

- **[#69008 — OpenRouter deepseek-v4-flash tool continuation fails: `content[].thinking` must be passed back](https://github.com/NousResearch/hermes-agent/issues/69008)** (P2) — Tool-calling continuation fails with OpenRouter when thinking mode is enabled, because the `thinking` field is not passed back. Needs repro.

- **[#68990 — Thai combining marks dropped/doubled in TUI during streamed rendering](https://github.com/NousResearch/hermes-agent/issues/68990)** (P2) — Unicode rendering issue in the TUI that corrupts Thai text display (stored content is correct).

- **[#68944 — `hermes mcp add` silently absorbs `--env` into `--args`](https://github.com/NousResearch/hermes-agent/issues/68944)** (P2) — A command-line parsing bug where `--env KEY=VALUE` following `--args` is silently treated as a positional argument instead of populating the env block.

**Fix PRs in progress for today's bugs:**
- PR #68899 addresses the compression death spiral (related to #68858)
- PR #69002 addresses session reasoning scope (new feature hardening)
- PR #69013 fixes oneshot MCP discovery for explicitly requested tools

## 6. Feature Requests & Roadmap Signals

**Today's most significant feature requests:**

1. **[#68964 — Per-function tool filtering](https://github.com/NousResearch/hermes-agent/issues/68964)** — Finer-grained control than toolset-level enable/disable. Currently `skills` bundles 3 tools that cannot be separated. Likely to land in v0.20 given the architectural change.

2. **[#68970 — Searchable timezone dropdown in Desktop Settings](https://github.com/NousResearch/hermes-agent/issues/68970)** — Usability improvement for timezone configuration. Small scope, likely for next desktop patch.

3. **[#68951 — Support Atomic Hermes (mobile) as a `send_message` delivery target](https://github.com/NousResearch/hermes-agent/issues/68951)** — Users want to send messages from desktop agents to the mobile Atomic Hermes app. Roadmap signal for cross-device integration.

4. **[#69021 — Kanban tutorial Story 3 contradiction: how does reviewer feedback reach dev worker before dev completes?](https://github.com/NousResearch/hermes-agent/issues/69021)** — Documentation/docs bug showing confusion about the kanban role pipeline. Suggests the kanban system's asynchronous feedback model needs clearer documentation or design changes.

**Predictions for next version (v0.20/v0.19.1):**
- Memory backend configurability (#47349) — high community demand, needs-decision tag suggests active discussion
- Immutable/protected skills (#25083) — growing safety concerns may push this forward
- MCP server re-registration fix (#67187) — critical for MCP reliability
- Cross-surface theme SDK (#68857) — already merged as open PR, likely to land soon
- Session lease leak fix (#68920) — P2 with identified root cause

## 7. User Feedback Summary

**Pain points expressed today:**

- **Data loss during upgrades** (#68474): "After updating the Hermes desktop app to v0.19.0 on Windows 10, the state.db file was completely destroyed." — *This is the most severe user issue this week.*
- **Session blocking over time** (#68920): "Active-session leases accumulate over time and eventually block new sessions entirely — even though only one session is actually active."
- **PDF links don't open** (#68937): "On macOS, clicking a file link in the desktop chat fails to open it. shell.openPath returns 'Failed to open path'."
- **Provider removal doesn't work** (#68943): "Removed API/Provider isn't truly removed from models list."
- **Kanban feedback loop confusing** (#69021): "How does reviewer feedback reach the dev worker before dev completes?" — *Documentation clarity issue.*
- **Immutable skills needed** (#25083): "There is no way to protect critical skills from being modified or shadow-cloned." — *Safety/control concern.*

**Satisfaction signals:** High velocity of PRs, active community filing detailed bug reports with root cause analysis (e.g., #68915 provides the exact shell pipe deadlock mechanism). The react-to-issue ratio is low (max 2 👍), suggesting users are engaged in reporting but not necessarily upvoting.

## 8. Backlog Watch

**Issues requiring maintainer attention (long-unanswered, high impact):**

1. **[#23207 — How to use web search/fetch using ollama search feature](https://github.com/NousResearch/hermes-agent/issues/23207)** (P3, 3 comments, last updated 2026-07-21) — Opened 2026-05-10, no maintainer response for 72+ days. A user is asking how to replicate OpenClaw's Ollama search feature in Hermes. *Needs: either a documentation update or a feature decision.*

2. **[#34385 — Kanban DB index corruption under concurrent multi-process access](https://github.com/NousResearch/hermes-agent/issues/34385)** (P3, needs-decision, 5 comments) — Opened 2026-05-29. Root cause attached as a detailed report. A related issue #53819 was filed later. *Needs: maintainer decision on fix approach.*

3. **[#53819 — Kanban DB corruption under high concurrent-worker load](https://github.com/NousResearch/hermes-agent/issues/53819)** (P3, needs-decision, 3 comments) — Opened 2026-06-27. References same root cause as #34385. *Needs: serialization fix for SQLite writes.*

4. **[#61042 — TUI: /compress should allow type-ahead and queue the next message](https://github.com/NousResearch/hermes-agent/issues/61042)** (P3, 3 comments, last updated 2026-07-21) — Opened 2026-07-08. UX improvement request with no response from maintainers.

5. **[#64900 — Allow plugins to extend send_message with platform-specific schema](https://github.com/NousResearch/hermes-agent/issues/64900)** (P3, needs-decision, 5 comments) — Opened 2026-07-15. Plugin architecture enhancement with no maintainer decision.

These items have been open for 1–7 weeks with "needs-decision" tags, indicating they are acknowledged but not yet prioritized. The kanban corruption issues (#34385, #53819) pose a stability risk for users running concurrent workers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-22  
**Data Period:** 2026-07-21 – 2026-07-22 (24h analysis)

---

## 1. Today's Overview

PicoClaw sees **moderate activity** today with 8 issues updated (4 closed) and 8 PRs updated (3 merged/closed). No new releases. The project's pulse is steady, driven by bug fixes and incremental platform improvements rather than major feature rollouts. Notable convergence between issues and PRs on the same topics (OAuth, tool-call leakage) suggests the team is actively closing feedback loops. A medium-priority regression in the Antigravity provider and a Matrix sync reliability gap remain open concerns. Community engagement is moderate, with several stale items aging into possible neglect.

---

## 2. Releases

**No new releases** in the past 24 hours.  
Latest stable: v0.3.1 (based on issue references). No migration notes or changelog entries to report.

---

## 3. Project Progress

**3 PRs merged/closed today:**

- **#3282 [CLOSED]** – `feat(nodes): add policy-gated system exec`  
  *Author: bogdanovich*  
  Adds an opt-in `system.exec.v1` capability to the slim node companion: direct canonical argv execution (no shell), companion-owned binary enforcement, and durable resource limits (executable, working directory, environment, timeout, output size) applied before acceptance and again before execution. This is a **security-forward feature** that gives PicoClaw nodes a controlled execution primitive.  
  👉 [PR #3282](https://github.com/sipeed/picoclaw/pull/3282)

- **#303 [CLOSED]** – `fix: make bot greeting name configurable via bot_name setting`  
  *Author: AtharvaGurao*  
  Fixes hardcoded "PicoClaw" in Telegram `/start` and DingTalk reply titles by adding a configurable `bot_name` field. Addresses a **long-standing UX pain** for users who customize their bot identity via `soul.md`.  
  👉 [PR #303](https://github.com/sipeed/picoclaw/pull/303)

- **#3233 [CLOSED]** – `Fix pr 3222 backward compat`  
  *Author: yaotukeji*  
  Ensures backward compatibility for a previous PR (#3222). Likely a stability patch.  
  👉 [PR #3233](https://github.com/sipeed/picoclaw/pull/3233)

---

## 4. Community Hot Topics

**Most commented/reactive items today:**

1. **#3088 [OPEN]** – *[Feature] use vodozemac instead of libolm*  
   **9 comments, 2 👍** | Stale (last updated July 21)  
   **What:** Replace the unmaintained/insecure `libolm` with official Matrix replacement `vodozemac`, making libolm optional at compile time.  
   **Underlying need:** Security maintenance — `libolm` is a rotting dependency, and the Matrix ecosystem has already standardized on the replacement.  
   👉 [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)

2. **#3153 [CLOSED]** – *Volcengine Doubao Seed tool calls leak as <seed:tool_call> text*  
   **5 comments** | Stale  
   **What:** Tool calls from `doubao-seed-2.0-pro` leak raw XML to users instead of executing.  
   **Underlying need:** Critical reliability — tool-call leakage is a **data exposure and UX failure** that breaks agentic workflows.  
   👉 [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

3. **#3203 [OPEN]** – *Matrix sync loop has no reconnection logic*  
   **4 comments, 1 👍**  
   **What:** Matrix `/sync` long-poll dies after any network/server disruption with no auto-reconnect; process stays alive so systemd `Restart=on-failure` does not trigger.  
   **Underlying need:** **Silent death** is worse than a crash — operators lose service without alerts.  
   👉 [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

---

## 5. Bugs & Stability

**Bugs reported today (July 21–22):**

| Severity | Issue | Description | Fix Exists? |
|----------|-------|-------------|-------------|
| 🔴 **Critical** | #3278 [CLOSED] | *Antigravity OAuth login blocked by Google: "doesn't comply with Google's OAuth 2.0 policy"* — users cannot authenticate at all. | **Yes** — PR #3280 addresses the OAuth flow. But this is a policy compliance issue, not just code fix. |
| 🟠 **High** | #3274 [CLOSED] | *Antigravity provider: INVALID_ARGUMENT regression* — `tool_schema_transform "simple"` no longer sufficient on main branch. Regression from v0.3.1. | **Not yet linked** to a PR. |
| 🟡 **Medium** | #3281 [OPEN] | *Web UI chat input very laggy with long history* — typing becomes unusable as session history grows. | None yet. |
| 🟡 **Medium** | #3255 [OPEN] [stale] | *DingTalk chat list preview shows fixed "PicoClaw"* instead of message content in conversation list. | Merged in PR #303 (bot_name fix), so now **resolved** — status may update soon. |
| 🟠 **High** | #3203 [OPEN] | *Matrix sync loop silent death* — no reconnection after network/server disruption. | None yet. |

**Today's PRs that fix bugs:**
- **#3280 [OPEN]** — `fix(auth): make browser OAuth login survive real-world callback conditions` (addresses #3278 root causes)  
- **#3279 [OPEN]** — `fix(seahorse): prevent tool-call format leakage into LLM summaries` (addresses the class of bug seen in #3153, triggered via seahorse summaries)  
- **#303 [CLOSED]** — bot greeting name fix (merged, addresses #3255)  

**Regression alert:** The Antigravity provider (`#3274`) broke between v0.3.1 and current `main`. Users on the cutting-edge build are affected. The OAuth policy block (`#3278`) is potentially a bigger concern — if Google enforces this broadly, Antigravity authentication could be broken for all users.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Predicted Timeline |
|-------|---------|-------------------|
| #3088 | Replace `libolm` with `vodozemac` | **Likely next minor version** — security-critical, author pbsds has done analysis, Matrix maintainers endorse the swap. |
| #3200 [PR, OPEN] | Configurable default fallback chain with Web UI support | **Could land in v0.3.2** — PR by lc6464 already open since July 1, persists chain via backend API. |
| #3256 [PR, OPEN] | Feishu native audio/video message types | **Mid-term** — improves Feishu channel parity, not critical. |
| #3228 [PR, OPEN] | Anthropic prompt caching support via `SystemParts` | **Mid-term** — addresses a performance gap for Anthropic users. |

**Pattern:** The project is evolving toward **better OAuth reliability**, **channel-specific media support**, and **model fallback configuration**. The vodozemac swap signals a security-conscious roadmap.

---

## 7. User Feedback Summary

**Common pain points observed across issues and PRs:**

1. **"Silent failures are the worst"** — Matrix sync death (#3203) and tool-call leakage (#3153, #3279) both manifest as invisible failures: the app appears to work but silently corrupts behavior. Users want **explicit error states and reconnection logic**.

2. **"OAuth is unreliable in real-world deploys"** — honbou's back-to-back Antigravity issues (#3274, #3278) and the resulting PR #3280 show that headless/remote OAuth flows break in varied, frustrating patterns. Multiple users (including the submitter of the Google OAuth block) are blocked from using the Antigravity provider at all.

3. **"Custom bot identity is important"** — PR #303 was filed back in February 2026 and only merged now, suggesting the community has been asking for configurable bot names for **5 months**. Users who invest in `soul.md` customization want consistency across all channels.

4. **"DingTalk preview limitations frustrate enterprise users"** — #3255 shows that on DingTalk, users see a generic "PicoClaw" label rather than message content in chat lists. This is a **discoverability issue** for busy conversation lists.

5. **"Web UI lag with history"** (#3281) — A straightforward UX regression with 0 comments, suggesting it's a fresh report but not yet validated by others. However, "laggy input with long history" is a classic symptom of **unoptimized re-rendering** — a common problem in Go-based Web UIs.

---

## 8. Backlog Watch

**Items needing maintainer attention:**

| Item | Age | Concern |
|------|-----|---------|
| **#3088** [OPEN, stale since July 21] | 6+ weeks | Vodozemac replacement — security-critical dependency swap. Labeled `help wanted, priority: high` yet stale. No assignee. Risk of `libolm` vulnerability exposure grows. |
| **#3203** [OPEN] | 19 days | Matrix sync silent death — no reconnection logic. Only 4 comments but functionally important for any production Matrix deployment. No assigned fix. |
| **#3200** [OPEN, stale] | 20 days | Configurable fallback chain PR — functional but gathering dust with no merge activity. |
| **#3255** [OPEN, stale since July 14] | 1 week | DingTalk preview bug — low severity but consistent with other UX issues. Merged PR #303 may resolve it but issue not yet closed. |
| **#3228** [OPEN, stale since July 6] | 15 days | Anthropic SystemParts / prompt caching PR — moderate complexity, no recent activity. |

**Verdict on backlog health:** The high-priority `vodozemac` replacement (#3088) is the **most worrying stale item** — it's labeled high priority yet untouched for weeks. The Matrix sync death (#3203) is a silent reliability risk. Several open PRs (especially #3200 and #3228) have author investment but are stalled. The project would benefit from a triage pass to either merge, request changes, or close these aging items.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for **2026-07-22**.

---

# NanoClaw Project Digest — 2026-07-22

## Today’s Overview
NanoClaw saw moderate activity over the past 24 hours, driven primarily by a surge in pull request traffic (12 PRs updated) and a single open feature request. The project merged 3 PRs, including a Langfuse tracing skill and a sync PR following contributor guidelines. Most open work centers on container fixes (SELinux, WORKDIR alignment) and new channel integrations (LINE, Dial). No new releases were published today. Overall, the project is in a healthy state with a steady cadence of community contributions and core-team maintenance.

## Releases
*No new releases were published in the last 24 hours. The latest release information is unchanged.*

## Project Progress
Three pull requests were merged or closed today:

- **[CLOSED] Langfuse tracing skill** (#3114) — Adds an observability integration skill, indicating a push toward better telemetry and debugging for agents in production.
- **[CLOSED] Sync PR** (#3116) — A standard synchronization pull request aligning the repository with upstream guidelines.
- **[CLOSED] Branch maintenance guide** (#3095) — Updates documentation for the registry-branch model, improving maintainer workflow transparency.

These moves suggest the core team is focused on stabilizing the skill ecosystem and refining contributor documentation.

## Community Hot Topics
- **#3096 — [OPEN] feat: Add /add-line skill for LINE Official Account channel support** (3 comments)
  - Author: joshm1230212 | [Issue #3096](https://github.com/nanocoai/nanoclaw/issues/3096)
  - This is the only new issue, and it has generated discussion. The request points to a clear gap: LINE is the dominant messenger in Japan, Taiwan, and Thailand, but no `@chat-adapter/line` package exists yet. The underlying need is geographic market expansion and channel parity with other major platforms.

- **#3050 — [OPEN] feat(setup): add Dial to the channel picker + wizard/skills** (updated today)
  - Author: OmriBenShoham | [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)
  - A feature skill PR adding Dial as a supported channel. This reflects growing demand for European and emerging-market communication channels.

- **#2950 — [OPEN] docs: add Traditional Chinese README (README_zh-TW.md)** (updated today)
  - Author: joshm1230212 | [PR #2950](https://github.com/nanocoai/nanoclaw/pull/2950)
  - This PR (still open since July 4) signals strong community interest from the Traditional Chinese-speaking region (Taiwan, Hong Kong), complementing the LINE channel request above.

## Bugs & Stability
Several bugs were addressed or remain open, ranked by severity:

1. **High — SELinux volume mount failure** (#1530)
   - [PR #1530](https://github.com/nanocoai/nanoclaw/pull/1530) — Fix adds `:z` label to Docker volume mounts. This is a blocker for Fedora/RHEL users. Still open since March 29; recently updated. *No fix merged yet.*

2. **Medium — WhatsApp inbound media staging** (#3113)
   - [PR #3113](https://github.com/nanocoai/nanoclaw/pull/3113) — Fixes where the container cannot read staged media files. A functional gap for WhatsApp channel reliability.

3. **Medium — Telegram legacy Markdown URL stripping** (#3111)
   - [PR #3111](https://github.com/nanocoai/nanoclaw/pull/3111) — Bare URLs with underscores (e.g., GitLab paths) break Telegram’s legacy Markdown parser, causing silent message drops. Produces no error to operator or agent.

4. **Low-Medium — Container WORKDIR mismatch** (#2236)
   - [PR #2236](https://github.com/nanocoai/nanoclaw/pull/2236) — The container runner mounts the agent group at `/workspace/agent`, but the Dockerfile sets `/workspace/group` as WORKDIR, making the agent workspace invisible when executing commands. Still open since May 3.

5. **Low — Gmail API legacy route blocking** (#3115)
   - [PR #3115](https://github.com/nanocoai/nanoclaw/pull/3115) — A core-team fix adding idempotent blocks for legacy Gmail API routes via OneCLI to prevent traffic from bypassing the newer API.

## Feature Requests & Roadmap Signals
- **LINE channel support** (#3096) — High-impact request. Given the progress on Dial (#3050) and earlier WhatsApp fixes, the channel expansion pattern is clear. Likely to be accepted and developed in the next minor release.
- **Traditional Chinese documentation** (#2950) — Indicates a push for i18n and broader Asian market adoption.
- **Langfuse tracing** (merged #3114) — Signals that observability is becoming a priority for the agent runtime, possibly a prelude to more telemetry-related skills.
- **OneCLI PostgreSQL port collision** (#3112) — A documentation PR noting that `onecli` bundled Postgres collides with host Postgres on port 5432. This suggests users are hitting configuration friction, and a future version may randomize or detect port conflicts.

## User Feedback Summary
- **Pain Points:** SELinux compatibility is a long-standing blocker (PR #1530). Container WORKDIR confusion (#2236) causes subtle bugs. Telegram silently dropping URLs is a critical reliability issue for operators (PR #3111).
- **Use Cases:** Expanding to LINE and Dial reflects a desire to deploy NanoClaw agents on non-US messaging platforms. The Langfuse tracing integration suggests production-grade observability is in demand.
- **Satisfaction:** The high number of skill-related PRs and channel integrations indicates strong community engagement and satisfaction with the extensibility model.

## Backlog Watch
These items require maintainer attention:

- **[PR #1530 — SELinux fix](https://github.com/nanocoai/nanoclaw/pull/1530)** (open since March 29, updated yesterday) — A straightforward fix for Docker on SELinux systems. Three months with no merge is a red flag for Linux users on Fedora/RHEL.
- **[PR #2236 — WORKDIR misalignment](https://github.com/nanocoai/nanoclaw/pull/2236)** (open since May 3, updated yesterday) — This bug directly impacts agent execution in containers. Needs prioritization.
- **[PR #2896 — WhatsApp media-failure regression](https://github.com/nanocoai/nanoclaw/pull/2896)** (open since June 30, updated yesterday) — A follow-up to a merged PR that surfaced a regression on the approval-answer path. This should be reviewed promptly given it affects a core workflow (pending-question handling).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-22

## Today's Overview

IronClaw remains in an intense pre-v1 release cycle, with the `v1.0.0-rc.1` candidate now live and the team executing against the "Reborn architecture" landing strategy tracked in epic #2987. Activity is extremely high: 41 issues updated in the last 24 hours (27 open, 14 closed) and 50 PRs updated (33 open, 17 merged/closed), indicating sustained core-team velocity and growing community dependency maintenance. The project is consolidating runtime store implementations, unifying dispatch models around an "authorization witness" pattern, and aggressively closing technical debt items ahead of the final v1 stable release. Data suggests IronClaw is roughly in the **stabilization and hardening phase** of its major architectural rewrite, with significant production-wiring work still in flight.

## Releases

**`ironclaw-v1.0.0-rc.1`** (released 2026-07-20) — this is a **ground-up rebuild** of the agent runtime, storage, extension host, and web UI. It is **not** an increment on the legacy 0.29.x line. The `ironclaw` binary now builds as the rearchitected CLI monolith. **Breaking change warning**: operators upgrading from 0.29.x must perform a fresh migration; no backward compatibility or incremental upgrade path exists. The release notes indicate this RC is the first stable evaluation point for the new architecture.

## Project Progress

Today saw 17 PRs merged or closed, with significant structural advances:

- **Authorization Witness Model (#6396 / #6432 / #6436 / #6438)**: A major architectural simplification was delivered — the "witness always-present" pattern now routes all sealed mounts, reservations, and dispatches through a sealed `Authorized` witness, consolidating what were previously five separate policy checks (trust, runtime-policy planning, credential pre-flight, persistence, and execution) into a single authority site. PRs #6432 and #6438 implement this for synchronous dispatch and process re-dispatch respectively.

- **In-Memory Store Removal (#6430)**: All remaining in-memory ratchet store allowances have been removed. Subagent goals, OpenAI-compatible refs, and instruction materialization now use filesystem-backed stores (`FilesystemSubagentGoalStore`, `FilesystemOpenAiCompatRefStore`, `EphemeralInstructionStore`), marking the completion of the `InMemoryTurnStateStore` retirement tracked in issue #6263.

- **WebUI SSE Lifecycle Fix (#6425)**: SSE stream reliability across navigation was restored — live cursor caching was removed in favor of route-local replay cursors with fresh state hydration on route mount, fixing what was likely a persistent UX regression.

- **QA Trace Catalog (#6422 / #6439)**: 42 harvested model traces were collected and parameterized as replayable executable tests using a new mock-LLM adapter (`RecordingLlm`), enabling hermetic multi-turn QA without external LLM dependencies.

- **Runtime Store Graph Unification (#6442)**: Production runtime stores now build over `CompositeRootFilesystem` instead of exposing libSQL/Postgres types, and the duplicated `RebornProductionRuntimeServices` facade was removed.

- **Dependency Updates**: Four separate Dependabot PRs updated the `tokio-ecosystem`, `serialization`, `everything-else`, and `dompurify` dependencies, indicating active dependency hygiene.

## Community Hot Topics

1. **[#2987 — Track Reborn architecture landing strategy](https://github.com/nearai/ironclaw/issues/2987)** (44 comments, open since April 27): The parent epic tracking all Reborn delivery continues to attract the most discussion. Comments focus on the grouped PR plan, integration sequencing, and gate dependencies. This is the single most important coordination issue for understanding what lands and when.

2. **[#6263 — Retire InMemoryTurnStateStore](https://github.com/nearai/ironclaw/issues/6263)** (10 comments, now closed): The final debt entry in the in-memory store ratchet generated significant discussion around migration strategy and the "no-livelock" evidence requirement. Its closure today is a milestone.

3. **[#6389 — Collapse build_local_runtime and build_production_shaped](https://github.com/nearai/ironclaw/issues/6389)** (10 comments, opened today): This Phase 4 issue has already attracted substantial attention for its goal of unifying two parallel runtime-assembly paths into one `build_runtime(cfg)` function — a critical simplification for operator understanding.

4. **[#6436 / #6438 — Sole-witness dispatch and seal process re-dispatch](https://github.com/nearai/ironclaw/pull/6436)** : These two XL-sized PRs are the day's most technically dense contributions, implementing the authorization witness model that several prior architectural simplification documents called for. Their review is likely the highest-priority activity for core reviewers.

**Analysis**: The community and core team are deeply aligned around the architectural consolidation theme. Discussion patterns show a clear arc from "how do we land Reborn" → "which specific pieces need to be unified" → "reviewing the unification PRs." The lack of external contributor questions on these threads suggests the active discussion is primarily among core maintainers.

## Bugs & Stability

**Critical/High Severity (None reported)** — No crash, data loss, or security vulnerabilities were documented today.

**Medium Severity**:
- **SSE streams broken across navigation (#6425)**: Users experienced lost server-sent events when navigating between threads, tabs, or extensions during an active run. **Fix status**: PR #6425 is open and addresses the issue by replacing volatile cached live cursors with route-local replay cursors. In review.
- **model-visible failures not recoverable (#6437)**: Request, sandbox-plan, WASM guest, and capability failures were being surfaced as opaque executor failures instead of model-visible recovery paths. **Fix status**: PR #6437 is open and routes these through typed recovery outcomes. In review.

**Low Severity**:
- **dompurify dependency version bump (CVE mitigation)**: PRs #6440 and #6196 updated dompurify from 3.2.3 to 3.4.12/3.4.11 across the frontend, addressing multiple fixes and security patches in the sanitization library. No active exploit reported.

**Regression Watch**: The removal of in-memory store allowances (#6430) could surface latent latency issues in filesystem-backed replacements — operators should monitor store performance in RC testing.

## Feature Requests & Roadmap Signals

1. **Dedicated custom instructions / master prompt section (#6433)**: A user requested a UI panel for persistent personalization settings (analogous to ChatGPT's "Custom Instructions"). Currently, users must feed instructions into each chat manually. **Prediction**: Likely lands in v1.1 or v1.0.x patch given its simplicity and alignment with the Reborn WebUI v2 design system work (PR #5563).

2. **Per-user hosted-MCP discovery (#6365)**: A reference PR adds worker-agent MCP connector tools. This is a draft/porting PR from a `deploy/managed-agents-mcp` fork and may signal broader multi-agent infrastructure work. **Prediction**: Likely post-v1, pending the Reborn capability policy work (#5261).

3. **Design system tokens + /playground (#5563)**: The WebUI v2 design system work is paused on deeper product integration per design leadership feedback, but the token documentation is proceeding independently. **Prediction**: The design system will land as documentation/artifact before or alongside v1 stable, with full integration in v1.1.

**Roadmap Signal**: Today's activity strongly suggests the v1.0 stable release is gated on completing the authorization witness model PRs (currently under review) and the runtime store graph unification. Expect v1.0.0-rc.2 or v1.0.0 within 1-2 weeks.

## User Feedback Summary

**Pain Points**:
- **Personalization friction (#6433)**: Users want a persistent "custom instructions" UI — the current chat-only context approach is perceived as cumbersome compared to ChatGPT/Claude. This is the clearest UX signal from an end user this week.
- **Configuration complexity**: Several open epics (#3036 for declarative config, #4533 for operator setup) indicate that operators still find Reborn configuration and debugging difficult without tooling. The closed issue #4596 (operator doctor diagnostics) directly addresses this.

**Satisfaction Signals**:
- **Release candidate progress**: The team's ability to land the in-memory store removal and authorization witness model in the same window suggests strong forward momentum, which is likely positively perceived by downstream adopters watching the project.
- **Extension capability additions**: PR #5503 (Google extension capabilities) adds Gmail summary fetches and Calendar event creation, directly addressing user requests for richer built-in tooling.

**Unaddressed Signals**: The multi-account channel support epic (#2392, open since April 13) continues without visible progress — users needing WeCom, Telegram, or Slack multi-account setups may be experiencing workflow blockers.

## Backlog Watch

**Long-unanswered but important**:

- **[#2392 — Host-level multi-account support for all messaging channels](https://github.com/nearai/ironclaw/issues/2392)** (open since April 13, 0 comments, 1 reaction): No activity in the last 24 hours. This is a blocking requirement for multi-tenant or enterprise deployments. The 0 comment activity despite its "epic" label suggests it may be deprioritized until after v1.

- **[#2828 — Harness testing epic](https://github.com/nearai/ironclaw/issues/2828)** (open since April 22, 0 comments): This parent testing epic has seen no direct activity despite today's QA trace work. The recorded-behavior QA scenarios (#6067) and live QA harvesting (#6422) are being executed under this umbrella, but the epic itself has no recent maintainer triage note or status update.

**PRs needing review**:
- **[#5563 — Design system tokens + /playground](https://github.com/nearai/ironclaw/pull/5563)** (core contributor, open since July 2, sized XL): A design leadership feedback item that has been open for 20 days. The author indicates they are "pausing deeper product integration" pending the design system documentation — this may be blocked on design team cycles rather than code review.

- **[#6365 — Per-user hosted-MCP discovery](https://github.com/nearai/ironclaw/pull/6365)** (new contributor, open since July 20): A draft/reference PR from a fork. The author notes "57 ahead / 54 behind" main — this is a significant divergence that would require dedicated maintainer attention to land, but its reference status suggests it may be intended for post-v1 consideration.

**Observation**: The project is in excellent health for a pre-v1 state. Backlog issues are not being abandoned — they are being deferred in favor of the architectural consolidation sprint. Maintainers should ensure no community contributor is blocked waiting for reviews on their porting or feature work, particularly the MCP discovery reference PR where the contributor has made substantial effort.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-22

## Today's Overview

The project shows **moderate activity** on July 21, 2026, with **10 pull requests updated** and **1 active issue**. Five PRs were merged or closed, and five remain open. No new releases were published. The team is actively shipping fixes in the **cowork (browser annotation)** and **artifacts** areas, while also addressing a long-standing image attachment synchronization bug. Three stale dependency update PRs remain open without maintainer attention, indicating some backlog pressure. Overall, the project maintains a healthy fix-and-refine cadence.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Five PRs were merged/closed today, advancing several areas:

- **Image attachment sync with model capability (fix/cowork)** — PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) ensures that when a user switches between vision and non-vision models, image attachment behavior (dataUrl vs. file path) updates accordingly. Directly addresses the bug in Issue #1861.
- **Browser annotation improvements (cowork)** — PR [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) supports style-only comments without text, shows before/after values in prompts and attachment badges, clears webview annotation sessions when draft comments are discarded, and preserves screenshot metadata.
- **Artifact sharing & deployment subscription gating** — PRs [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370) and [#2369](https://github.com/netease-youdao/LobsterAI/pull/2369) unify subscription checks for artifact sharing and local deployment, add explicit create/update share actions, and improve permission flow UX.
- **Silent Windows updates** — PR [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) enables silent NSIS installer updates on Windows with UAC handling and localized error messages.

A minor fix for **OpenClaw token proxy SSE truncation** was also merged in PR [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372).

## Community Hot Topics

The most active item today is the **only open issue**, which is also directly linked to a fix PR:

- **Issue #1861** — [图片附件不随模型切换重新处理](https://github.com/netease-youdao/LobsterAI/issues/1861) (*Image attachments not reprocessed when switching models*)  
  *2 comments, open since April 28*  
  This issue describes three specific failure scenarios when switching between vision and non-vision models: stale base64 data, missing file paths, and outdated hint text. It has been addressed by PR #2373 merged today. The underlying need is **consistent multimodal state management** — users expect attachments to behave correctly regardless of model context.

No other issues or PRs received comments or reactions in the last 24 hours.

## Bugs & Stability

One bug was directly fixed today:

| Severity | Bug Description | Status | Fix PR |
|----------|----------------|--------|--------|
| **High** | Image attachment state not synced when switching between vision/non-vision models — causes visual models to miss image content or non-visual models to send unnecessary base64 data | Fixed in today's merge | [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) |
| **Medium** | SSE truncation in OpenClaw token proxy | Fixed in today's merge | [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372) |
| **Medium** | Artifact sharing auto-creates shares on dialog open; deployment permission selection initiated before draft submission | Fixed in today's merge | [#2369](https://github.com/netease-youdao/LobsterAI/pull/2369) |
| **Low** | Windows update installer showed wizard UX instead of silent install | Fixed yesterday, merged today | [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) |

No new crashes, regressions, or freshly reported bugs were recorded today.

## Feature Requests & Roadmap Signals

- **Permanent sidebar ad banner hiding** — PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374), still open, adds a **Settings → General** toggle to permanently hide the ad banner. This is a user-requested feature (referencing Issue #2342) and is likely to be included in the next minor release.
- **Subscription gating for artifacts** — The merged PRs #2370 and #2369 indicate the team is actively building **monetization infrastructure** around artifact sharing and deployment. This suggests a roadmap focus on controlled feature access.
- **Browser annotation polish** — PR #2371 shows continued investment in the **cowork/annotation feature**, with improved prompt formatting and state cleanup. Users can expect smoother annotation workflows in upcoming builds.

## User Feedback Summary

While limited direct user feedback appears in today's data, the following pain points are inferred from issues and PRs:

- **Model switching confusion** (Issue #1861): Users are confused when image attachments behave inconsistently after model changes. This has been open for nearly three months, suggesting it was a persistent annoyance. The fix in PR #2373 should resolve this.
- **Ad banner annoyance** (Issue #2342, referenced in PR #2374): Users wanted a permanent disable option rather than per-session dismissal. The project is responding.
- **Artifact sharing workflow friction** (PR #2369): Users may have experienced unexpected auto-creation of shares or confusing permission flows. The cleanup in today's merges improves the UX.

## Backlog Watch

Three **stale dependency update PRs** have been open for **over 3 months** without maintainer engagement:

| PR | Dependency | Created | Last Updated |
|----|------------|---------|--------------|
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | cross-env (7.0.3 → 10.1.0) | 2026-04-02 | 2026-07-21 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | react-dom (18.3.1 → 19.2.4) | 2026-04-02 | 2026-07-21 |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | vite (5.4.21 → 8.0.9) | 2026-04-02 | 2026-07-21 |

These are automated dependabot bumps but represent **major version jumps** — especially React 18→19 and Vite 5→8. Merge conflicts or breaking changes may be blocking review. The project should prioritize evaluating these updates to avoid accumulating technical debt.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-22

## Today's Overview
Project activity is minimal today, with no new issues or releases reported. A single open pull request (#1161) updates the Astro dependency in the documentation directory from 7.0.9 to 7.1.3, submitted by Dependabot. No community discussion, bug reports, or feature requests surfaced in the last 24 hours. Overall, the project appears to be in a low-activity maintenance phase with no visible blocking issues. The lack of user engagement may indicate either project stability or low contributor attention.

## Releases
No new releases were published in the last 24 hours. The project has no release history to report.

## Project Progress
No pull requests were merged or closed today. The only open PR (#1161) is a routine dependency bump for the documentation build tooling (Astro). No features, fixes, or improvements advanced beyond this automated maintenance task.

**Open PR:**
- [#1161 chore(deps): bump astro from 7.0.9 to 7.1.3 in /docs](https://github.com/moltis-org/moltis/pull/1161) — Automated dependency update, submitted 2026-07-21.

## Community Hot Topics
No community discussions, issues, or pull requests generated comments or reactions today. The project shows zero user engagement in the last 24 hours.

## Bugs & Stability
No bugs, crashes, or regressions were reported today. The project has no active stability issues recorded in the last 24 hours.

## Feature Requests & Roadmap Signals
No feature requests were submitted today. Without recent user input or roadmap documentation, no predictions can be made about upcoming features.

## User Feedback Summary
No user feedback, pain points, or use-case discussions occurred in the last 24 hours. The project appears to have no active user community engagement on GitHub during this period.

## Backlog Watch
There are no long-unanswered issues or PRs requiring maintainer attention in the current data. The only open PR (#1161) was submitted today and is awaiting standard review. The project backlog is effectively empty.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** (github.com/agentscope-ai/CoPaw) based on data from **2026-07-22**.

---

## CoPaw Project Digest – 2026-07-22

### 1. Today's Overview
CoPaw is in a period of **high stability and rapid iteration** following the `v2.0.1-beta.1` release. Activity is extremely high, with **42 issues** and **50 PRs** updated in the last 24 hours—a near-perfect 50/50 split between open/closed items, indicating a healthy merge cycle. The project is heavily focused on **hardening the 2.0 architecture**, specifically around context management (Scroll mode), governance/safety, and cross-session data consistency. The community remains highly engaged, contributing bug reports, feature requests, and first-time pull requests, suggesting a growing and active contributor base.

### 2. Releases
- **v2.0.1-beta.1** was released today.
    - **What's Changed:** This is a patch release focused on fixing critical boot issues.
        - `fix: use absolute import in Tauri entry point` – Resolves a startup crash for the Desktop (Tauri) application.
        - `fix(memoryspace): catch OSError in _saved_tool_refs` – Prevents crashes when the memory backend encounters file system errors.
    - **Migration Notes:** This is a minor version bump (`2.0.1b1`). No breaking changes introduced; users are encouraged to upgrade to resolve the reported Tauri and memory-space errors.

### 3. Project Progress
Today saw significant advancement in core architecture and user-facing features, with **30 PRs closed/merged**.

- **Governance & Safety (Landing):**
    - [#6190](https://github.com/agentscope-ai/CoPaw/pull/6190) **Merged:** Unifies tool registration via `@tool_descriptor`, ensuring governance whitelists and UI configs are derived from a single source of truth.
    - [#6079](https://github.com/agentscope-ai/CoPaw/pull/6079) **Merged:** `fix: ASK user for permission for sudo` – Enhances security by explicitly asking users before executing privileged commands.
    - [#5546](https://github.com/agentscope-ai/CoPaw/pull/5546) **Merged:** Generalizes the governance policy pattern, making it more extensible.
- **Workflow Modes (OMP):**
    - [#5882](https://github.com/agentscope-ai/CoPaw/pull/5882) **Merged:** Integrates five new workflow modes (UltraQA, Ralph, Ultrawork, etc.) as a plugin and extends `spawn_subagent` capabilities.
- **Agent Configuration QoL:**
    - [#6270](https://github.com/agentscope-ai/CoPaw/pull/6270) **Merged:** Adds support for user-editable agent modes.
    - [#6262](https://github.com/agentscope-ai/CoPaw/pull/6262) **Merged:** Adds a one-click "Copy Agent Configuration" feature.
- **Logging & Debugging:**
    - [#6183](https://github.com/agentscope-ai/CoPaw/pull/6183) **Merged:** Makes log rotation limits (`max size`, `backups`) configurable via environment variables.

### 4. Community Hot Topics

1.  **[[CLOSED] #2291 – Help Wanted: Open Tasks](https://github.com/agentscope-ai/CoPaw/issues/2291)** (65 Comments)
    - *Analysis:* This is a permanent "call to contributions" issue. It’s the most commented on, serving as a launchpad for new contributors. Notable progress today includes a draft PR for a configurable theme/skin module (#6312) claimed from this list.

2.  **[[CLOSED] #6257 – Multiple tool calls produce identical thinking output](https://github.com/agentscope-ai/CoPaw/issues/6257)** (13 Comments)
    - *Analysis:* A high-severity bug where a single agent response containing multiple tool calls repeats the same reasoning text for every call. This indicates a flaw in the prompt construction or response parsing logic for multi-tool turns, undermining the model’s ability to reason about each call independently.

3.  **[[OPEN] #6324 – Model response is truncated (MiniMax-M3)](https://github.com/agentscope-ai/CoPaw/issues/6324)** (1 Comment)
    - *Analysis:* A new report of response truncation with a specific third-party model. This highlights a potential ongoing compatibility issue with non-Qwen models, likely related to max token handling.

### 5. Bugs & Stability
**High Severity:**
- **Response Truncation:** [#6324](https://github.com/agentscope-ai/CoPaw/issues/6324) reports responses being cut off with the MiniMax-M3 model. No fix PR linked yet.
- **Cross-Session Context Contamination:** [#6299](https://github.com/agentscope-ai/CoPaw/issues/6299) (Closed) reported a dangerous bug where deleted sessions persist in the `history.db` database, causing sequence collisions and new conversations to leak data from old, deleted ones. A fix is included in PR [#6068](https://github.com/agentscope-ai/CoPaw/pull/6068) (still open).

**Medium Severity:**
- **Performance Regression:** [#6307](https://github.com/agentscope-ai/CoPaw/issues/6307) reports a 2-second fixed overhead for every simple reply in v2.0 compared to v1.x, unrelated to model latency.
- **Identical Thinking Output:** [#6257](https://github.com/agentscope-ai/CoPaw/issues/6257) (Closed) was resolved, but the underlying pattern suggests fragility in multi-tool call management.

**Low Severity:**
- **LaTeX Rendering Failure:** [#6320](https://github.com/agentscope-ai/CoPaw/issues/6320) reports that equations with square roots fail to render in the frontend.
- **Timezone Confusion:** [#6301](https://github.com/agentscope-ai/CoPaw/issues/6301) reports incorrect timestamp conversion for naive UTC timestamps. A fix exists in PR [#6309](https://github.com/agentscope-ai/CoPaw/pull/6309).

### 6. Feature Requests & Roadmap Signals

- **Desktop Usability (Likely v2.1):**
    - [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) requests a "workspace quick access" button in the Desktop app to open agent output files (reports, images) without leaving the window.
    - [#6281](https://github.com/agentscope-ai/CoPaw/issues/6281) requests mobile-friendly web console UI.
- **Prompt & Context Control (High Demand):**
    - [#6283](https://github.com/agentscope-ai/CoPaw/issues/6283) asks for automatic injection of the current date/time into context to prevent models from confusing old chat dates with the present.
    - [#6321](https://github.com/agentscope-ai/CoPaw/issues/6321) proposes support for "pre-condition rules" in `AGENTS.md` so agents must verify context (e.g., check MEMORY.md) before acting.
- **Model Compatibility:**
    - [#6285](https://github.com/agentscope-ai/CoPaw/issues/6285) requests to add the new `qwen3.8-max-preview` to the Aliyun model list.
    - [#6324](https://github.com/agentscope-ai/CoPaw/issues/6324) and [#6292](https://github.com/agentscope-ai/CoPaw/issues/6292) indicate ongoing community pressure to improve compatibility with non-Qwen models.

### 7. User Feedback Summary
- **Pain Points:**
    - **Context Loss & Loops:** Multiple users report v2.0 still suffers from context loss, infinite loops, and "hallucinated" progress in task execution ([#5860](https://github.com/agentscope-ai/CoPaw/issues/5860), [#6241](https://github.com/agentscope-ai/CoPaw/issues/6241)).
    - **Tool Call Verbosity:** Users want to truncate or suppress long tool call results sent to external channels to reduce noise ([#5976](https://github.com/agentscope-ai/CoPaw/issues/5976)).
    - **Token Consumption:** A user quantifies a concern noted by many: the 22 built-in tool descriptions consume ~8-10k tokens per request, requesting the ability to disable or customize them ([#6286](https://github.com/agentscope-ai/CoPaw/issues/6286)).
- **Use Cases:** Power users are deploying CoPaw for complex, multi-step tasks like contract review (requiring drag-and-drop document uploads) and script execution in a "coding mode" terminal ([#6297](https://github.com/agentscope-ai/CoPaw/issues/6297), [#6308](https://github.com/agentscope-ai/CoPaw/issues/6308)).
- **Satisfaction:** The community is highly engaged and technical, suggesting satisfaction with the project's direction despite the inevitable 2.0 migration pains.

### 8. Backlog Watch
- **[OPEN] #6068 – fix(scroll): preserve session IDs during history migration**
    - *Age:* 10 days
    - *Issue:* This PR is critical as it aims to fix a major data corruption bug (session contamination) reported in #6299. It has been held up for review for over a week. This is a **blocking issue** for users migrating to v2.0 with legacy history.
- **[OPEN] #6083 – Desktop 窗口增加工作区产出物快捷访问按钮**
    - *Age:* 8 days
    - *Issue:* A high-quality feature request with a clear UX problem statement. It has received no maintainer comments. This is a prime candidate for community contribution or a quick win for the next release.
- **[OPEN] #6307 – v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x**
    - *Age:* 1 day (Reported today)
    - *Issue:* While new, this is a significant performance regression that will affect all users on v2.0. It requires immediate attention from the core team to diagnose the architectural root cause.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-22

## Today's Overview

ZeroClaw shows **sustained high development activity** with 50 issues and 50 PRs updated in the last 24 hours, though only 3 issues and 9 PRs reached closure. The project remains in a **heavy feature-development phase**, with major RFCs (goal mode, OpenAI compatibility adapter, Gemini Live speech-to-speech) all actively discussed. No new releases were published. Three critical-severity bugs — a shell tool workspace bypass, a delegate tool allowlist bypass, and an MCP memory leak — remain open, indicating ongoing security and stability concerns alongside ambitious feature work.

## Releases

**No new releases** in the last 24 hours. The latest available version remains v0.8.2 (per documentation references).

## Project Progress

**Merged/closed items today:**

| Item | Type | Summary |
|------|------|---------|
| [#7082](https://github.com/zeroclaw-labs/zeroclaw/issues/7082) | Issue (closed) | Mattermost WebSocket listener mode — feature completed |
| [#8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756) | PR (merged) | Fix Windows portability in media marker assertions |
| [#9120](https://github.com/zeroclaw-labs/zeroclaw/issues/9120) | Issue (closed) | SOP routing bug: false `when` clauses incorrectly skipping switch evaluation |
| [#9086](https://github.com/zeroclaw-labs/zeroclaw/issues/9086) | Issue (closed) | Security audit pipeline RFC — author closed after feedback |

**Key areas that advanced:**
- **Eval infrastructure**: Three PRs landed eval history receipts ([#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)), isolated case memory seeding ([#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244)), and judge calibration tooling ([#9245](https://github.com/zeroclaw-labs/zeroclaw/pull/9245))
- **Goal mode**: Five stacked PRs from @vrurg ([#8687-#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)) progressing goal controller, delegation boundaries, and goal persistence
- **Documentation**: New Telegram end-to-end setup guide ([#9242](https://github.com/zeroclaw-labs/zeroclaw/pull/9242))

## Community Hot Topics

**Most discussed issues:**

1. **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** — Typed per-agent git identity (6 comments)  
   *Need:* Multi-tenancy for built-in git operations, separating credential and non-credential configuration blocks for shared MCP instances.

2. **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** — Telegram channel cannot be configured (6 comments, S1 severity)  
   *Need:* A clear, working setup flow for Telegram bots; users are stuck because `zeroclaw channels doctor` reports misconfiguration even when setup appears correct.

3. **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — RFC: Goal mode for bounded autonomous sessions (4 comments, 1 👍)  
   *Need:* A durable "pursue objective until done" mode that survives interruptions and respects budgets — currently missing from turn-based, cron, and sub-agent workflows.

**Most active PR stacks:**
- @vrurg's **goal mode stack** ([#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687)→[#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)) — 4 open PRs converging on goal admission, controllers, delegation, and persistence
- @REL-mame's **OpenAI compatibility adapter** ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)) — enables standard LLM clients to use ZeroClaw

## Bugs & Stability

### Critical (S0) — active today:
| Bug | Description | Fix PR? |
|-----|-------------|---------|
| [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | **Shell tool workspace boundary bypass**: symlink traversal lets shell commands read/write outside workspace | None yet |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | **Delegate tool allowlist bypass**: sub-agents can invoke parent-excluded tools | None yet |

### High Severity (S1-S2):
| Bug | Description | Status |
|-----|-------------|--------|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel non-functional despite correct setup | Accepted |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP tool-schema cloning causes unbounded RSS growth | In progress |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Stdio MCP servers accumulate as zombie processes | In progress |
| [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | `zeroclaw config init` ships broken silent transcription config | In progress |
| [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) | `save_dirty` silently drops writes with dotted map keys (e.g., `gpt-4.1`) | None yet |
| [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram documentation is incorrect, producing non-functional examples | Accepted |

**Regressions:** None noted in last 24h (the SOP routing bug [#9120](https://github.com/zeroclaw-labs/zeroclaw/issues/9120) was closed).

## Feature Requests & Roadmap Signals

**High-priority requested features:**
1. **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — **Goal mode** (RFC, 1 👍): *Likely next major version* — 5 stacked PRs from @vrurg already in progress
2. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — **OpenAI Chat Completions adapter** (RFC): *Strong candidate* — implementation PR [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) is XL-sized and actively developed
3. **[#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)** — **Per-chat model switching** (1 👍): User request from Moltis migration, enabling provider-model selection per conversation
4. **[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)** — **Gemini Live speech-to-speech channel** (RFC): Long-term — runtime-agnostic realtime multimodal channel
5. **[#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)** — **Mixture-of-Agents provider** (RFC): Parallel multi-model aggregation for hard tasks

**Emerging pattern:** Users want **session persistence** (remote session backends, PR [#9249](https://github.com/zeroclaw-labs/zeroclaw/pull/9249)), **standard protocol compatibility** (OpenAI adapter), and **bounded autonomous execution** (goal mode).

## User Feedback Summary

**Pain points expressed this week:**
- **MCP stability**: Zombie processes ([#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)) and memory leaks ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)) degrade long-running deployments
- **Onboarding friction**: Telegram setup fails silently ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)), config init ships broken defaults ([#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)), and documentation errors ([#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)) frustrate new users
- **Provider compatibility**: Bedrock Nova 2 caching errors ([#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)), `<think>` tag stripping deletes content silently ([#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615))
- **Configuration bugs**: `save_dirty` silently drops dotted model keys ([#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240))

**Positive signals:** Users praise Rust type safety and memory safety (per [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) commenter), and the eval harness work ([#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)) shows demand for quality measurement tooling.

## Backlog Watch

**Stale high-priority items requiring maintainer attention:**

| Item | Created | Last Update | Concern |
|------|---------|-------------|---------|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | 2026-06-29 | 2026-07-21 | S1 Telegram bug with no fix PR — 3 weeks open |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 2026-06-24 | 2026-07-21 | S0 security bypass — 4 weeks open, no fix |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | 2026-06-25 | 2026-07-21 | SkillForge orphaned — no decision to wire or remove |
| [#8296](https://github.com/zeroclaw-labs/zeroclaw/issues/8296)* | 2026-06-24 | — | (Not in top 30 but notable) — likely a SOP/config issue |

*Note: Several items labeled `needs-author-action` (marked in PR list) may be blocked waiting for reporter responses.

**PRs needing review:**
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (OpenAI adapter, size:XL, 23 days open) — high community interest
- [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) (Config refactor, size:XL, 10 days open) — controversial change moving TodoWrite config
- [#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638) (SkillForge replacement, size:L, 19 days open) — re-architects skill installation

**Project health assessment:** **Moderately healthy** with high contributor velocity but concerning accumulation of critical bugs (S0-S1) without fix PRs. The community is active and engaged in RFCs, but the project could benefit from a stabilization sprint to clear the security bypasses and onboarding failures before the next feature release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*