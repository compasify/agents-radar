# OpenClaw Ecosystem Digest 2026-07-26

> Issues: 332 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-26 01:44 UTC

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

# OpenClaw Project Digest – 2026-07-26

## 1. Today’s Overview
The project remains in a period of intense activity, with **332 issues** and **500 pull requests** updated in the last 24 hours. Of those, **100 issues were closed** and **211 PRs were merged or closed**, indicating a healthy pace of bug-fixing and feature work. No new releases were cut today; the latest stable version remains **2026.7.1** (with beta releases in the field). The open issue count (232) and open PR count (289) are both high, suggesting the maintainer team is actively triaging but also facing a growing backlog. Security, session-state integrity, and provider compatibility continue to dominate the conversation.

## 2. Releases
*No new releases were published on this date.*

## 3. Project Progress
Today’s merged/closed PRs (211 total) include several important fixes and refactors:

- **Browser reliability**:  
  - `fix(browser): recover remote node after failed startup` ([#113926](https://github.com/openclaw/openclaw/pull/113926)) – prevents permanent failure after transient browser startup issues.  
  - `fix(browser): one unresponsive shared tab no longer hangs every browser tool` ([#113921](https://github.com/openclaw/openclaw/pull/113921)) – key fix for a widespread tab-wedging issue (#113787).

- **Cron & task health**:  
  - `fix(cron): fail originating media cron on detached errors` ([#113750](https://github.com/openclaw/openclaw/pull/113750)) – ensures media generation failures are visible in cron health audits.

- **Config & docs cleanup**:  
  - `docs(logging): remove retired redactSensitive guidance` ([#113963](https://github.com/openclaw/openclaw/pull/113963)) – aligns docs with current schema.  
  - `refactor(tasks): classify harness-owned subagent rows without plugin ids` ([#113964](https://github.com/openclaw/openclaw/pull/113964)) – removes hardcoded plugin identifiers.

- **UI testing**:  
  - `test(ui): align sidebar end-to-end coverage with current navigation` ([#113942](https://github.com/openclaw/openclaw/pull/113942)) – updates stale regression coverage.

- **Infrastructure**:  
  - `fix(infra): keep valid exec approvals under same-process lock contention` ([#113929](https://github.com/openclaw/openclaw/pull/113929)) – prevents intermittent “exec not available” errors on permissive configs.

Other notable open PRs that saw activity today:  
- `feat: add standard hosting profiles` ([#113422](https://github.com/openclaw/openclaw/pull/113422)) – large feature for deployment profiles.  
- `feat(ui): drag custom sidebar groups between built-in session zones` ([#113948](https://github.com/openclaw/openclaw/pull/113948)) – improves Control UI customization.  
- `refactor(talk): split realtime relay owners` ([#113967](https://github.com/openclaw/openclaw/pull/113967)) – reduces a 1,647-line module.

## 4. Community Hot Topics
The most active discussions (by comment count) reveal three major areas of concern:

### Memory & Context Management
- **Memory Trust Tagging by Source** ([#7707](https://github.com/openclaw/openclaw/issues/7707), 21 comments) – request to tag memory entries by trust level to prevent prompt injection via web content. High engagement, multiple `clawsweeper` labels.  
- **Session context bloat** ([#67419](https://github.com/openclaw/openclaw/issues/67419), 10 comments) – bootstrap files re-injected every turn waste 20–30% of tokens. Users are frustrated by the token overhead.  
- **Memory management chaos** ([#43747](https://github.com/openclaw/openclaw/issues/43747), 10 comments) – different users see wildly different memory storage behavior, indicating a regression or config issue.

### Security & Approval Pipelines
- **Channel-mediated approval for MCP tool calls** ([#78308](https://github.com/openclaw/openclaw/issues/78308), 15 comments) – proposal to let MCP servers opt into the same `/approve` pipeline used for shell exec, addressing a key security gap.  
- **Filesystem Sandboxing Config** ([#7722](https://github.com/openclaw/openclaw/issues/7722), 10 comments) – need for declarative file access restrictions, with 4 👍.  
- **Agent loop allows simulated tool calls** ([#45049](https://github.com/openclaw/openclaw/issues/45049), 7 comments) – models generate text descriptions of tool usage instead of real calls, bypassing security checks.

### Crash & Data Loss Regressions
- **SQLite snapshot restore lacks crash guarantees** ([#113306](https://github.com/openclaw/openclaw/issues/113306), 13 comments) – a P1 bug affecting data durability.  
- **Gateway fails to start after update** ([#108435](https://github.com/openclaw/openclaw/issues/108435), 11 comments) – P0 regression on v2026.7.1 blocking many users.  
- **Upgrade corrupts email channel config** ([#95515](https://github.com/openclaw/openclaw/issues/95515), 6 comments) – P0 data-loss bug during update from 2026.6.8 to 6.9.

### Telegram & Messaging Issues
- **Telegram permanent inbound black hole** ([#91564](https://github.com/openclaw/openclaw/issues/91564), 7 comments) – messages to a specific forum topic are acknowledged but never dispatched.  
- **Quote/reply handling regresses** ([#88032](https://github.com/openclaw/openclaw/issues/88032), 7 comments) – requires local patching to work.  
- **Foreground reply fence cancels earlier group replies** ([#92186](https://github.com/openclaw/openclaw/issues/92186), 5 comments) – in WhatsApp groups, concurrent mentions lose replies.

## 5. Bugs & Stability
**P0 (release-blocker / crash loop):**  
- `[Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error` ([#108435](https://github.com/openclaw/openclaw/issues/108435)) – regression affecting systemd, Ollama, and manual launch. No fix PR linked yet.  
- `Upgrade 2026.6.8→2026.6.9 corrupts email channel config with spurious groupAllowFrom field` ([#95515](https://github.com/openclaw/openclaw/issues/95515)) – data loss during upgrade. PR #?? may be open.  
- `Gateway HTTP server listens but does not accept connections (v2026.7.1-beta.5)` ([#109145](https://github.com/openclaw/openclaw/issues/109145)) – socket never accepts TCP connections after upgrade.  
- `[Bug]: /new and /reset don't actually create a new session in 2026.7.1-2` ([#113466](https://github.com/openclaw/openclaw/issues/113466)) – critical session lifecycle bug.  
- `docs/channels/telegram.md documents streaming.preview.toolProgress but 6.11 schema rejects it` ([#103162](https://github.com/openclaw/openclaw/issues/103162)) – docs out of sync, causing CLI breakage.  
- `Live Docs are ahead of release` ([#48920](https://github.com/openclaw/openclaw/issues/48920)) – documented features not yet shipped.

**P1 (high severity):**  
- `SQLite snapshot restore lacks end-to-end crash and identity guarantees` ([#113306](https://github.com/openclaw/openclaw/issues/113306)) – reported today, 13 comments.  
- `Gateway heap grows to 1073MB+ at idle on macOS` ([#87109](https://github.com/openclaw/openclaw/issues/87109)) – chronic memory leak causing silent cron failures.  
- `Agent loop allows simulated tool calls` ([#45049](https://github.com/openclaw/openclaw/issues/45049)) – security bypass.  
- `Session model pinning persists indefinitely` ([#92776](https://github.com/openclaw/openclaw/issues/92776)) – snap-back fix rendered inert by upstream bug.  
- `Isolated cron lanes leak on claude-cli backend` ([#89766](https://github.com/openclaw/openclaw/issues/89766)) – lanes accumulate until restart.

**Fix PRs in flight for major bugs:**  
- `fix(browser): one unresponsive shared tab...` ([#113921](https://github.com/openclaw/openclaw/pull/113921)) – closed, addresses tab-wedging.  
- `fix(browser): recover remote node after failed startup` ([#113926](https://github.com/openclaw/openclaw/pull/113926)) – open, awaiting maintainer review.  
- `fix(infra): keep valid exec approvals under lock contention` ([#113929](https://github.com/openclaw/openclaw/pull/113929)) – closed, fixes intermittent denial.  
- `fix(cron): fail originating media cron on detached errors` ([#113750](https://github.com/openclaw/openclaw/pull/113750)) – open.

## 6. Feature Requests & Roadmap Signals
Today’s top feature requests point to a strong user demand for **security, context efficiency, and provider flexibility**:

- **Memory Trust Tagging by Source** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) – likely to be prioritized given the security rating (🦞 diamond lobster) and 21 comments.
- **Channel-mediated approval for MCP tool calls** ([#78308](https://github.com/openclaw/openclaw/issues/78308)) – consensus envelope pattern, strong community support.
- **Filesystem Sandboxing Config** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) – 4 👍, necessary for enterprise deployments.
- **Per-spawn tool restrictions for sub-agents** ([#15032](https://github.com/openclaw/openclaw/issues/15032)) – DMZ web search use case, PR #78441 open with `feat(subagents): forward toolsAllow from sessions_spawn`.
- **Skill Permission Manifest Standard (skill.yaml)** ([#12219](https://github.com/openclaw/openclaw/issues/12219)) – informed consent for skill installation.
- **Expose OpenRouter usage cost to agent runtime** ([#9016](https://github.com/openclaw/openclaw/issues/9016)) – cost transparency.
- **Model fallback on context length exceeded** ([#9986](https://github.com/openclaw/openclaw/issues/9986)) – requested fallback beyond API errors.
- **Telegram parseMode config** ([#10944](https://github.com/openclaw/openclaw/issues/10944)) – hardcoded Markdown causes emoji/formatting issues.
- **Per-model generation timeout** ([#8724](https://github.com/openclaw/openclaw/issues/8724)) – Google models stuck in thinking loops.
- **TUI accessibility: disable emojis** ([#9637](https://github.com/openclaw/openclaw/issues/9637)) – screenreader usability.
- **WhatsApp sticker send support** ([#7476](https://github.com/openclaw/openclaw/issues/7476)) – niche but simple.
- **Pre-compaction agent notification** ([#38520](https://github.com/openclaw/openclaw/issues/38520)) – structured handoff for long workflows.

**Roadmap predictions**: The next minor release (2026.7.x) will likely include the MCP approval pipeline (consent envelope), filesystem sandboxing, and a fix for the memory trust tagging, given the diamond lobster ratings and maintainer attention. The subagent tool restriction PR (#78441) is actively being worked and may land soon.

## 7. User Feedback Summary
**Pain points** (from issue descriptions):  
- **Memory chaos**: Users report inconsistent memory management between instances – some chunk & embed into SQLite, others store in different locations.  
- **Context bloat**: Bootstrap files waste 20-30% of tokens, making sessions expensive and slow.  
- **Gateway crashes on update**: Multiple users report that v2026.7.1 fails to start (systemd, Ollama, manual).  
- **Telegram message loss**: Messages acknowledged but never dispatched; forum topics become black holes.  
- **Cron silent failures**: Memory pressure causes heap growth and cron tasks fail without notification.  
- **Config corruption during upgrade**: Upgrade from 6.8 to 6.9 corrupts email channel config (data loss).  
- **Accessibility**: TUI emojis create poor screenreader experience.  
- **Missing features**: No sticker support in WhatsApp, no per-model timeouts, no cost tracking.

**Satisfaction signals**:  
- The volume of enhancements shows an engaged community that trusts the project will address their needs.  
- Rapid PR merging (211 today) indicates responsive maintainers.  
- Diamond lobster ratings on security issues show community is actively helping prioritize.

**Dissatisfaction**:  
- Regressions in recent releases (v2026.7.1) are causing frustration, with two P0 bugs blocking production use.  
- Telegram quote/reply handling still requires local patches after multiple regressions.  
- The gap between documentation and shipped features (e.g., IsolatedSessions, toolProgress config) undermines trust.

## 8. Backlog Watch
Issues and PRs that have gone stale or lack maintainer review, potentially blocking progress:

| Issue/PR | Created | Last Update | Notes |
|----------|---------|-------------|-------|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) – Fully dynamic model discovery | 2026-02-06 | 2026-07-25 | Stale, needs product decision; 10 comments, 3 👍 |
| [#87299](https://github.com/openclaw/openclaw/issues/87299) – Spurious "Something went wrong" and Codex failures | 2026-05-27 | 2026-07-25 | Closed, but root cause may not be fully resolved (linked to compaction) |
| [#89147](https://github.com/openclaw/openclaw/issues/89147) – Native hook relay starves mid-turn | 2026-06-01 | 2026-07-25 | Needs security review, low maintainer activity |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) – Auto-update leaves stale hashed bundle imports | 2026-05-23 | 2026-07-25 | P1, needs live repro and product decision |
| [#54634](https://github.com/openclaw/openclaw/issues/54634) – Update 2026.3.24 silently drops config when HOME changes | 2026-03-25 | 2026-07-25 | Stale P1 impacting data loss; needs maintainer review |
| [#77298](https://github.com/openclaw/openclaw/issues/77298) – Cron consecutiveErrors increments on gateway restart | 2026-05-04 | 2026-07-25 | Labels indicate fix shape unclear, needs product decision |
| [#92776](https://github.com/openclaw/openclaw/issues/92776) – Session model pinning persists indefinitely | 2026-06-13 | 2026-07-25 | Linked PR open but upstream bug remains |
| [#113422](https://github.com/openclaw/openclaw/pull/113422) – feat: add standard hosting profiles | 2026-07-24 | 2026-07-26 | Large PR needing proof, merge-risk high |
| [#104018](https://github.com/openclaw/openclaw/pull/104018) – feat: add readiness conditions and providers | 2026-07-11 | 2026-07-26 | Stale, needs proof and maintainer look |

**Recommendation**: The two **P0 release blockers** (#108435, #109145) should receive immediate attention. The **memory bloat** (#67419) and **heap growth** (#87109) are chronic issues that degrade user trust. **Backlog items** like dynamic model discovery (#10687) and auto-update bundle staleness (#85844) have been open for months and need a product decision or assignment.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-07-26

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a period of intense maturation, characterized by rapid feature iteration, growing security awareness, and increasing production deployment pressure. Activity across the ten tracked projects reveals a bifurcation: several mature platforms (OpenClaw, ZeroClaw) are grappling with scaling pains—regressions, memory bloat, and crash loops—while newer entrants (NanoBot, Moltis) capitalize on leaner codebases to ship transformative releases. Cross-cutting concerns dominate community discussions: memory management integrity, provider flexibility, sandboxing, and approval pipeline security are no longer aspirational but operational necessities. The ecosystem is converging on a shared architectural pattern—pluggable providers, sandboxed execution, and channel-agnostic messaging—while individual projects differentiate through target audience (Raspberry Pi vs. enterprise), deployment model (containerized vs. native), and integration depth (Matrix, Nostr, Slack). The overall health is robust but uneven: rapid merge velocity coexists with P0 regressions that erode trust, and the gap between documented features and shipped code remains a persistent friction point across projects.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Release Status | Health Assessment |
|---------|----------------------|-------------------|-------------|----------|----------------|-------------------|
| OpenClaw | 332 | 500 | 232 | 289 | Stable 2026.7.1; beta field-testing | High activity, critical regressions (2 P0 blockers) |
| NanoBot | ~1 | 12 | ~10 | 5 | **v0.3.0 released** today | Strong: major release, rapid iteration |
| Hermes Agent | 50 | 50 | 45 | 35 | No new release | Active: 15 merged PRs, Windows stability gap |
| PicoClaw | 2 | 3 | ~15 | ~8 | No new release | Moderate: steady fixes, one high-severity Matrix bug |
| NanoClaw | 2 | 11 | ~10 | ~8 | No new release | Stable: responsive maintainer, security hardening |
| NullClaw | 0 | 0 | — | — | No activity | Dormant |
| IronClaw | 11 | 19 | 7 | 10 | No new release | Healthy: bundle size cut 69%, active refactoring |
| LobsterAI | 1 | 11 | 1 | 0 | No new release | Clean: 11 PRs merged, 8 stale issues closed |
| Moltis | 0 | 5 | ~3 | 3 | No new release | Niche: steady Slack/Nostr features, zero bugs |
| CoPaw | 8 | 8 | 8 | 6 | No new release | Stressed: 3 users report same MCP transport bug |
| ZeptoClaw | 0 | 0 | — | — | No activity | Dormant |
| ZeroClaw | 19 | 50 | 16 | 48 | v0.8.3 stable; v0.8.4 in prep (PR #9376) | Very high activity, security bugs under active fix |

**Health notes:** OpenClaw dominates raw volume but carries 2 P0 release blockers. ZeroClaw shows comparable activity with better bug-response velocity. Moltis and LobsterAI have the cleanest backlogs. NullClaw and ZeptoClaw show zero community engagement.

## 3. OpenClaw's Position

**Advantages over peers:**
- **Scale:** 332 issues and 500 PRs in 24 hours—an order of magnitude more activity than any competitor. This reflects a contributor base likely 10–20× larger than the next busiest project.
- **Maturity:** The only project with a stable release cadence (2026.7.1) plus active beta field-testing. Session management, cron systems, and browser tooling are considerably more mature than NanoBot or PicoClaw equivalents.
- **Integration surface:** Telegram, WhatsApp, email, MCP, and browser automation depth far exceeds any peer. No other project attempts shared browser tabs or same-process exec approval locking.

**Technical approach differences:**
- OpenClaw uses a monolithic core with plugin-based extension, whereas NanoBot and ZeroClaw favor microkernel/service-oriented architectures. IronClaw's composition-based design is closest but less proven.
- Memory management is shared context (bootstrap files, session bloat)—a known pain point. NanoBot and Moltis avoid this by design (stateless or per-turn context).
- Approval pipeline is channel-mediated; only OpenClaw and ZeroClaw implement `/approve` flows. Hermes and NanoBot lack equivalent security gates.

**Community size comparison:**
- OpenClaw effectively operates at web-scale engagement (332 daily issues). Next closest: ZeroClaw (19), Hermes (50). The gap suggests OpenClaw is the de facto reference implementation for personal AI agents, but also the primary surface for user frustration.
- Diamond lobster ratings (security tags) indicate a more security-conscious contributor base than any peer.

## 4. Shared Technical Focus Areas

The following requirements emerge across multiple projects, indicating ecosystem-wide priorities:

1. **Memory & Context Management** — *OpenClaw, Hermes, CoPaw, ZeroClaw*
   - Trust tagging by source (OpenClaw #7707), context bloat reduction (OpenClaw #67419, 20–30% token waste), memory isolation between agents (CoPaw #6461), and reranker enhancements (CoPaw #5691, #5692). The ecosystem is converging on the need for provenance-aware, bounded-context memory.

2. **Configuration Consistency & Validation** — *OpenClaw, Hermes, ZeroClaw*
   - Dual storage between CLI and GUI (Hermes #71298), docs out of sync with schema (OpenClaw #103162), config corruption during upgrade (OpenClaw #95515), and silent config drops (ZeroClaw #9239). All projects lack a single source of truth for configuration; schema-gated validation is the emerging solution.

3. **Security & Approval Pipelines** — *OpenClaw, CoPaw, NanoClaw, ZeroClaw*
   - Channel-mediated approval for MCP tool calls (OpenClaw #78308), filesystem sandboxing (OpenClaw #7722), agent container hardening with cap-drop (NanoClaw #2748), agent isolation for multi-tenant deployments (CoPaw #6461), and verifiable-intent cryptographic verification (ZeroClaw #9328). The community is shifting from perimeter security to intra-agent access control.

4. **Platform-specific Rendering & Reliability** — *OpenClaw, Hermes, CoPaw*
   - Telegram MarkdownV2 escaping (Hermes #6388), Telegram inbound black hole (OpenClaw #91564), WhatsApp quote/reply regression (OpenClaw #92186), Matrix reconnection logic (PicoClaw #3203). Messaging platforms are the most brittle integration point across all projects.

5. **Cross-platform Stability (Windows/Linux/macOS)** — *Hermes, LobsterAI, NanoBot, CoPaw*
   - Windows gateway crash on no-console launch (Hermes #71671), Windows installer foreign content protection (LobsterAI #2383), Wayland+Edge high CPU (CoPaw #6460), macOS memory leak (OpenClaw #87109). Windows remains the weakest platform; Linux consistency is improving.

6. **Model Provider Compatibility** — *OpenClaw, Hermes, CoPaw, PicoClaw*
   - OpenAI Codex tool_choice incompatibility (Hermes #31335), Ollama context length resolution (Hermes #71675), Kimi K3 integration (LobsterAI #2381), MCP transport SSE vs. Streamable HTTP conflict (CoPaw #6470). Provider fragmentation is intensifying; no project has achieved plug-and-play parity.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | PicoClaw |
|-----------|----------|---------|--------------|----------|-------|----------|
| **Primary user** | Power user, self-hoster | Developer, quick-start | Enterprise, desktop | DevOps, plugin ecosystem | Chinese market, multi-agent | Edge/IoT, Raspberry Pi |
| **Deployment model** | Native + Docker | One-command WebUI | Desktop app + CLI | Containerized/crates | AgentScope Platform | ARMv7, low-resource |
| **Architecture** | Monolithic + plugin | Unified single-binary | Composition-based | Microkernel (crates) | AgentScope SDK | Minimal core |
| **Key differentiator** | Deepest integration (browser, cron, channels) | Easiest onboarding (WebUI) | Desktop UX + curator skills | Plugin catalog, crates.io publishing | QQ/WeChat, Chinese i18n | Simplex, Matrix, ARM |
| **Weakest area** | Regressions, memory bloat | Missing security pipeline | Windows stability, config dual storage | CI flakiness, backlog PRs | MCP transport, model connectivity | Matrix reliability, low contributor count |
| **Release cadence** | Monthly stable + beta | SemVer (v0.3.0 today) | No pattern | v0.8.x maintenance track | No pattern | No pattern |

**Key takeaways:**
- OpenClaw competes on breadth; ZeroClaw on modularity and Rust ecosystem integration; NanoBot on developer experience.
- Hermes Agent is positioning for enterprise desktop with curator/skill management—unique in the landscape.
- CoPaw is the only project with explicit Chinese-language community support (QQ, WeChat, AgentScope Platform).
- PicoClaw is the only project targeting ARMv7 and Simplex (decentralized messaging)—a strategic niche.

## 6. Community Momentum & Maturity

**Tier 1: High intensity, production-grade (OpenClaw, ZeroClaw)**
- OpenClaw processes 500+ PRs daily but is slowed by regression debt (2 P0 blockers). Merge velocity is exceptional, but quality gates may need tightening.
- ZeroClaw is preparing v0.8.4 with first crates.io publishing—a milestone toward modular distribution. Security bugs are fixed within 24 hours (WhatsApp, verifiable-intent). Community engagement is growing (19 issues/day).

**Tier 2: Rapid iteration, stabilizing (NanoBot, LobsterAI, IronClaw)**
- NanoBot's v0.3.0 release (260 PRs, 38 new contributors) marks a step-change in maturity. WebUI as primary entry point simplifies adoption. Deferred compatibility cleanup (v0.3.1) is wise.
- LobsterAI closed 8 stale issues and merged 11 PRs today, including significant UX improvements (time-grouped sessions, input history). Backlog is essentially zero—a model of hygiene.
- IronClaw's bundle size reduction (1,227 kB to 377 kB) is a hard performance win. Error recoverability epic (#6284) suggests team is investing in robustness for non-trivial workloads.

**Tier 3: Niche or moderate activity (Hermes Agent, PicoClaw, NanoClaw, CoPaw)**
- Hermes Agent has high activity (50 issues, 50 PRs daily) but many open bugs (2 P2s without fix PRs). Desktop and curator features are promising, but cross-platform gaps (Windows, Telegram) persist.
- NanoClaw's security hardening (cap-drop, containerization) indicates a focus on safe multi-tenant use, but low issue engagement suggests a small user base.
- PicoClaw is steady and niche (ARM, Simplex) but Matrix reliability bug (#3203) is unresolved for 3+ months.
- CoPaw shows stress from rapid reporting (3 users same MCP bug) and unresolved privacy concerns (agent isolation). Feature momentum (reranker) is positive, but bugs may stall adoption.

**Tier 4: Dormant (NullClaw, ZeptoClaw)**
- No activity. May be abandoned or maintainer-unavailable.

**Overall maturity assessment:** The ecosystem is moving from prototype to production. OpenClaw and ZeroClaw are closest to production readiness but carry debt. NanoBot's momentum suggests it could close the gap within 2–3 releases. Moltis and LobsterAI are exemplars of focused scope and clean execution.

## 7. Trend Signals

1. **Memory as a first-class security concern.** The convergence on trust tagging (OpenClaw), isolation (CoPaw), and per-turn cost tracking (ZeroClaw) signals that memory is no longer a storage detail but a security boundary. Expect memory provenance verification to become a standard feature in the next 6 months.

2. **MCP as the integration bottleneck.** MCP transport compatibility (CoPaw #6470, OpenClaw #78308) and approval pipeline integration are the most contentious cross-project issues. The ecosystem lacks a canonical MCP client implementation; each project reinvents the transport layer. A shared MCP library or reference client could reduce fragmentation.

3. **Container sandboxing becomes default.** NanoClaw's cap-drop and pids-limit hardening, OpenClaw's filesystem sandboxing request, and Hermes' exec approval pipeline point to containerization as the baseline for agent execution in 2027. Projects without sandboxing (Moltis, PicoClaw) will face adoption barriers for enterprise use.

4. **Windows remains the weakest link.** Every project with a Windows story (Hermes gateway crash, Lobster installer recovery, CoPaw test scripts) reports platform-specific failures. No project has achieved Windows parity. This is a gap for developer workstation adoption.

5. **Decentralized messaging gains traction.** PicoClaw's Simplex channel (#3193) and Moltis's Nostr NIP-29 group chat (#1168) indicate growing demand for self-sovereign AI agent communication, particularly among privacy-conscious users and FOSS advocates.

6. **Configuration UI inconsistency erodes trust.** The dual-storage pattern (CLI vs. GUI) in Hermes, docs-schema mismatch in OpenClaw, and silent config drops in ZeroClaw suggest the ecosystem needs a unified configuration contract—possibly built on JSON Schema or similar. Projects that solve this first will gain developer mindshare.

7. **AI-assisted PR review is on the horizon.** ZeroClaw's RFC #9330 proposes CI-driven pre-review of PRs. If adopted, this could accelerate review cycles across the ecosystem. Given the backlog pressure (OpenClaw 289 open PRs, ZeroClaw 48), AI review may become standard tooling within 12 months.

8. **Cost transparency is a rising demand.** ZeroClaw's cost_usd tracking (#9349), OpenClaw's OpenRouter cost exposure request (#9016), and per-model timeout for Google models (OpenClaw #8724) indicate that agent budgeting is becoming a production requirement. Projects that surface token/cost analytics will differentiate in enterprise contexts.

**Value for AI agent developers:** These trends suggest that differentiation will increasingly come from security architecture (sandboxing, approval pipelines), integration reliability (Windows, MCP transport), and configuration management (single-source-of-truth, schema validation). Feature breadth alone (more channels, more models) is becoming commoditized; execution quality on these cross-cutting concerns will define the winning platforms.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-26

## 1. Today’s Overview
NanoBot saw high activity in the last 24 hours, driven by the official release of **v0.3.0**. Of the 12 pull requests updated, 7 were merged or closed, and the remaining 5 are open. The release marks a major milestone — “the agent gained agency” — with 260 PRs merged since v0.2.x and 38 new contributors. One issue was closed (CI test coverage), indicating continued focus on quality infrastructure. Overall project health is strong, with rapid iteration on both core agent features, WebUI, and developer tooling.

## 2. Releases
### v0.3.0 — 2026-07-25
- **Summary**: “the agent gained agency”. Highlights include a unified one-command WebUI experience (`nanobot webui`), 260 merged PRs, and 38 new contributors.
- **Breaking changes**: None announced. The release notes state that v0.3.0 is the final compatibility window for legacy session paths and deprecated configuration keys.
- **Migration notes**: Users on v0.2.x can upgrade directly; existing configurations remain supported. A compatibility cleanup is deferred to **v0.3.1** (see PR #5083). The quick-start documentation now recommends `nanobot webui` as the primary path (PR #5082).
- **Related PRs**:  
  - [chore(release): prepare v0.3.0 (#5081)](https://github.com/HKUDS/nanobot/pull/5081) — version bumps and composer model badge fix.  
  - [chore: defer compatibility cleanup to v0.3.1 (#5083)](https://github.com/HKUDS/nanobot/pull/5083) — moves three cleanup TODOs.

## 3. Project Progress
**Merged/closed PRs today (7):**
- [#1284](https://github.com/HKUDS/nanobot/pull/1284) — **CI/CD pipeline** with quality checks, coverage, and tool validation tests (closes issue #1131).
- [#5085](https://github.com/HKUDS/nanobot/pull/5085) — **Feature**: Automatically open WebUI after a fresh desktop install, preserving wizard for SSH sessions.
- [#4696](https://github.com/HKUDS/nanobot/pull/4696) — **Enhancement**: Smooth streaming viewport with ease-out camera and frame-coalesced scroll.
- [#5083](https://github.com/HKUDS/nanobot/pull/5083) — **Chore**: Compatibility cleanup deferred.
- [#5082](https://github.com/HKUDS/nanobot/pull/5082) — **Docs**: Readme restructured to promote WebUI and clarify gateway/CLI entry points.
- [#4954](https://github.com/HKUDS/nanobot/pull/4954) — **Fix**: Keep late subagent turns visible in WebUI by preserving delivery metadata.
- [#5081](https://github.com/HKUDS/nanobot/pull/5081) — **Chore**: Release preparation.

**Closed issue:**
- [#1131](https://github.com/HKUDS/nanobot/issues/1131) — CI test coverage question, resolved by PR #1284.

## 4. Community Hot Topics
The only issue updated in the last 24 hours was the now-closed [#1131](https://github.com/HKUDS/nanobot/issues/1131) (4 comments) about CI test coverage. The user’s underlying need — clear visibility into automated testing — was addressed by the new CI pipeline (#1284). No other issues or PRs showed unusually high comment counts; the community appears to be focused on reviewing and merging code rather than debating open topics.

## 5. Bugs & Stability
**Open bugs (ranked by estimated severity):**
1. **[#5084](https://github.com/HKUDS/nanobot/pull/5084)** — **High**: `fix(agent): preserve pending message runtime context` — resolves #4064. Ensures correct context for queued mid-turn messages; if unaddressed, agents could lose channel/sender info. Fix PR is open.
2. **[#4928](https://github.com/HKUDS/nanobot/pull/4928)** — **High**: `fix(heartbeat): route unified sessions to last channel` — heartbeat delivery could go to wrong channel in unified sessions. Fix PR is open.
3. **[#3035](https://github.com/HKUDS/nanobot/pull/3035)** — **Medium**: `fix(cron): grace window for at-type tasks` — tasks expiring within 10 minutes now execute immediately. Prevents silent scheduling failures due to LLM delays. Open.
4. **[#1073](https://github.com/HKUDS/nanobot/pull/1073)** — **Medium**: `fix: preserve unknown config keys when saving` — manually added provider keys (e.g. `openai-codex`) were silently dropped. Open since February.

**Closed bugs today:**
- [#4954](https://github.com/HKUDS/nanobot/pull/4954) — Subagent turn visibility in WebUI (bug fix).
- [#4696](https://github.com/HKUDS/nanobot/pull/4696) — Streaming scroll/viewport smoothness (enhancement that also addresses visual stutter bugs).

No crashes or regressions were reported.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today, but several in-progress PRs hint at upcoming capabilities:
- **[#4625](https://github.com/HKUDS/nanobot/pull/4625)** — **Extra bwrap bind roots**: Allows user-level tool directories (e.g. `~/.local/bin`) inside the sandbox. Likely to land in v0.3.1.
- **[#5085](https://github.com/HKUDS/nanobot/pull/5085)** — **Auto open WebUI on install**: Already merged, improves onboarding.
- The deferral of compatibility cleanup to **v0.3.1** (#5083) suggests the next release will focus on housekeeping and minor breaking changes.

**Predictions for next version (v0.3.1):**
- Compatibility cleanup (legacy session paths, deprecated config warning).
- Merging of open bug fixes (#5084, #4928, #3035, #1073).
- Potentially the bwrap bind root feature (#4625).

## 7. User Feedback Summary
Indirect feedback from issues and PRs reveals several pain points and use cases:
- **Usability**: Users wanted a simpler first-run experience — PR #5085 directly addresses the need to open WebUI without manual steps.
- **Documentation**: PR #5082 clarifies multi-entry-point confusion (WebUI vs. gateway vs. CLI).
- **Agent reliability**: Fixes for pending message context (#5084) and heartbeat routing (#4928) indicate real-world problems with cross-channel session management.
- **Configuration friction**: The long-standing config save bug (#1073) (unknown keys dropped) has been a frustration for users with custom providers.
- **Cron timing**: Chinese-speaking user reported LLM delays causing missed scheduled tasks (#3035) — resolved with a grace window.

Overall sentiment appears satisfied with the rapid iteration pace, especially the v0.3.0 release.

## 8. Backlog Watch
Several important issues/PRs remain unresolved for extended periods, requiring maintainer attention:

| Item | Created | Last Update | Remarks |
|------|---------|-------------|---------|
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) | 2026-02-23 | 2026-07-25 | Config data loss fix; marked `conflict`. Stale for 5 months. |
| [#3035](https://github.com/HKUDS/nanobot/pull/3035) | 2026-04-11 | 2026-07-25 | Cron grace window; marked `conflict`. 3.5 months old. |

Both have good implementations but require conflict resolution and review. The v0.3.1 planning (#5083) may be a good opportunity to address them.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-26

## 1. Today's Overview

Hermes Agent shows **high activity** with 50 issues and 50 pull requests updated in the last 24 hours. Of those, 45 issues remain open and 5 were closed; 35 PRs are open while 15 have been merged or closed. No new releases were published. The project maintains a strong community engagement with multiple bugs and feature requests receiving detailed discussion, and the core team is actively merging fixes across the desktop CLI, curator, gateway, and platform adapters. Stability remains a focus, especially around Windows compatibility and session state management.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

All 15 merged/closed PRs today are bug fixes or minor improvements. Notable merges include:

- **#71678** – *fix(desktop): keep code and diffs out of the tool overflow window* – Improves the desktop UI by preventing code blocks from being clipped inside scroll windows. [PR #71678](https://github.com/NousResearch/hermes-agent/pull/71678)
- **#71665** – *fix(project-tree): absorb deleted-worktree sessions into the parent home checkout* – Prevents orphaned sidebar projects when Git worktrees are removed. [PR #71665](https://github.com/NousResearch/hermes-agent/pull/71665)
- **#64479** – *fix(#64393): relabel curator status from "agent-created" to "curator-managed skills"* – Corrects a misleading label in the `hermes curator status` output. [PR #64479](https://github.com/NousResearch/hermes-agent/pull/64479)
- **#64452** – *fix: curator labels bundled skills as agent-created (#64393)* – Duplicate fix for the same curator label issue. [PR #64452](https://github.com/NousResearch/hermes-agent/pull/64452)

Several open PRs that advanced today address session state, desktop reasoning effort, and gateway resilience (see Bugs & Stability section).

## 4. Community Hot Topics

The most active issues this week, ranked by comment count and reactions:

- **#6388** (7 comments, 1 👍) – *[Telegram] MarkdownV2 escape breaks bullet list display* – Users report that Telegram’s MarkdownV2 escaping of `-` into `\-` prevents bullet lists from rendering. The root cause is in the Telegram platform adapter. [Issue #6388](https://github.com/NousResearch/hermes-agent/issues/6388)
- **#62726** (7 comments) – *[Bug]: Dashboard cross-tab session bleed + /new hang requiring full container restart* – Two related bugs: session state leaking across browser tabs and the `/new` command freezing the dashboard. [Issue #62726](https://github.com/NousResearch/hermes-agent/issues/62726)
- **#71298** (6 comments) – *Bug: providers vs custom_providers dual storage causes CLI/GUI mismatch* – Models and providers are inconsistent between the CLI `hermes setup model` and the Desktop GUI due to parallel storage sections in `config.yaml`. [Issue #71298](https://github.com/NousResearch/hermes-agent/issues/71298)
- **#31335** (6 comments) – *hermes-codex-bug-report: image_gen/openai-codex fails* – The Codex Responses API does not support `tool_choice` for image generation, causing HTTP 400 errors. [Issue #31335](https://github.com/NousResearch/hermes-agent/issues/31335)

**Underlying needs**: The community is demanding consistent configuration handling across CLI and GUI, reliable platform-specific markdown rendering, stateless dashboard sessions, and stable third-party API integrations (especially OpenAI Codex).

## 5. Bugs & Stability

High-severity bugs reported or updated in the last 24 hours, ranked by priority label:

- **[P1]** **#71671** – *fix(gateway): survive faulthandler.enable() when sys.stderr is None* – Gateway crashes on Windows when launched without a console. Fix PR #71671 is **open**. [Issue #71671](https://github.com/NousResearch/hermes-agent/issues/71671)
- **[P2]** **#71675** – *[Bug]: Local Ollama context resolved from GGUF max instead of Modelfile num_ctx* – Model context length is incorrectly determined, leading to premature compression. No fix PR yet. [Issue #71675](https://github.com/NousResearch/hermes-agent/issues/71675)
- **[P2]** **#71298** – *providers vs custom_providers dual storage* – Configuration mismatch between CLI and GUI. Fix needed in config parser. [Issue #71298](https://github.com/NousResearch/hermes-agent/issues/71298)
- **[P2]** **#62726** – *Dashboard cross-tab session bleed + /new hang* – Session state leaks across browser tabs; `/new` can hang until container restart. Open. [Issue #62726](https://github.com/NousResearch/hermes-agent/issues/62726)
- **[P2]** **#63177** – *search_files silently returns 0 results on Windows with absolute path* – ripgrep MSYS_NO_PATHCONV conflict on Windows. Open, needs platform-specific fix. [Issue #63177](https://github.com/NousResearch/hermes-agent/issues/63177)
- **[P2]** **#71047** – *config set duplicates top-level key + Telegram streaming duplicates final message* – Configuration and Telegram duplication bugs on Windows. Open. [Issue #71047](https://github.com/NousResearch/hermes-agent/issues/71047)
- **[P2]** **#67140** – *bug(skills): background skill-review prompt conflicts with write guard* – Curator background actors clash on write policy. Fix PR #71680 **open**. [Issue #67140](https://github.com/NousResearch/hermes-agent/issues/67140)
- **[P2]** **#39418** – */reload-mcp freezes the CLI terminal* – Session becomes unresponsive when reloading MCP tools. Open. [Issue #39418](https://github.com/NousResearch/hermes-agent/issues/39418)

Fix PRs exist for several of these: #71676 (system prompt rebuild on cwd change), #71680 (curator write policy), #71672 (desktop session naming), #71671 (gateway startup crash).

## 6. Feature Requests & Roadmap Signals

Requests with the most potential for inclusion in the next release:

- **#67139** – *feat(curator): add a supported adoption path for legacy and unmanaged local skills* – Users want to bring existing skills under curator management without manual edits. Likely to be implemented given the curator rework in progress. [Issue #67139](https://github.com/NousResearch/hermes-agent/issues/67139)
- **#56989** – *Document and harden fully local STT for voice messages (MLX + CUDA)* – A push for on-device speech transcription without external APIs. Aligns with privacy-focused usage. [Issue #56989](https://github.com/NousResearch/hermes-agent/issues/56989)
- **#52612** – *verify-on-stop trigger is path-agnostic – fires on every file edit* – Users want smarter verification that only triggers for impactful files (e.g., source code, not `README.md`). [Issue #52612](https://github.com/NousResearch/hermes-agent/issues/52612)
- **#62944** – *feat: single gateway, multiple agents – rebased onto current main* – Ambitious feature to allow one gateway to route to multiple agent profiles. Still open; could be merged in a future major update. [PR #62944](https://github.com/NousResearch/hermes-agent/pull/62944)

## 7. User Feedback Summary

Common pain points from active issues:

- **Configuration inconsistency**: Multiple users report that settings changed in one interface (CLI vs GUI) are not reflected in the other, causing confusion (#71298, #45448).
- **Platform-specific rendering**: Telegram bullet lists broken (#6388), Discord attachment size limits ignored (#40332), and iMessage streaming artefacts (#49793) frustrate daily users.
- **Session management fragility**: Cross-tab session bleed, `/new` hangs, and `/reload-mcp` freezes degrade the dashboard experience (#62726, #39418).
- **Windows stability**: Degraded experiences on Windows include search_files returning no results (#63177), desktop update failures (#63717), Unicode path issues (#60447), and the gateway startup crash (#71671).
- **Third-party integration friction**: OpenAI Codex image generation fails (#31335, #49008), Azure Foundry vision fails with misleading 401 (#39750), and Xiaomi MiMo vision degrades images to text (#49388).

Overall sentiment is engaged but frustrated by lingering cross-platform and integration bugs. The team’s quick response on desktop fixes (e.g., #71672, #71678) is appreciated.

## 8. Backlog Watch

Issues and PRs that have remained open for an extended period or lack maintainer attention:

- **#6388** (created 2026-04-09) – *Telegram bullet list display bug* – 3.5 months old with a clear root cause but no fix PR. [Issue #6388](https://github.com/NousResearch/hermes-agent/issues/6388)
- **#31043** (created 2026-05-23) – *CLI /new does not refresh context_length after provider config changes* – 2 months old, affects daily use of CLI. [Issue #31043](https://github.com/NousResearch/hermes-agent/issues/31043)
- **#27300** (created 2026-05-17) – *WeChat voice messages use Tencent Cloud STT which garbles non-Chinese languages* – Non-English users are effectively blocked from voice input. No fix PR. [Issue #27300](https://github.com/NousResearch/hermes-agent/issues/27300)
- **#11515** (created 2026-04-17) – *ACP session cwd used for tool execution but not for project context file discovery* – Inconsistency in ACP mode; no PR. [Issue #11515](https://github.com/NousResearch/hermes-agent/issues/11515)
- **#59929** (created 2026-07-07) – *fix(gateway): don't capture full process argv in shutdown forensics* – Security fix still open after three weeks. [PR #59929](https://github.com/NousResearch/hermes-agent/pull/59929)
- **#62944** (created 2026-07-12) – *feat: single gateway, multiple agents* – Large feature PR awaiting maintainer review and merge. [PR #62944](https://github.com/NousResearch/hermes-agent/pull/62944)

These items, especially those with clear reproduction steps and proposed fixes, would benefit from prioritization to improve project health and user trust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-26

## Today’s Overview
Activity was moderate over the past 24 hours. Two issues were updated, both still open, and three pull requests received updates—two were merged/closed after a long idle period. No new releases were published. The project shows steady community engagement around reliability bugs (Matrix channel reconnection) and feature integration (email, calendar, ARM builds). A new bug report about model listing behaviour arrived, indicating closer attention to command-line UX.

## Releases
*No new releases this period.*

## Project Progress
Two pull requests were closed/merged between July 25 and July 26:

- **[PR #339 (closed)]** — *Added Email Tool, Calendar Integration and System Stats Overview Tool*  
  Author: udbhav-44  
  A large feature PR introducing Google Calendar tooling, enhanced email polling/content fetching, and new developer tools (GitHub, System Stats). This PR had been open since February 2026 and was finally merged.  
  [🔗 sipeed/picoclaw PR #339](https://github.com/sipeed/picoclaw/pull/339)

- **[PR #3205 (closed)]** — *[stale] fix: support 9router gateway responses and add Linux ARMv7 build target*  
  Author: sarwonous  
  Fixes parsing of 9router (OpenAI-compatible gateway) responses and adds a Linux ARMv7 build target, enabling use on Raspberry Pi 3 B+.  
  [🔗 sipeed/picoclaw PR #3205](https://github.com/sipeed/picoclaw/pull/3205)

## Community Hot Topics
- **Issue #3203** – *[BUG] Matrix sync loop has no reconnection logic — silent death after network/server disruption*  
  Comments: 6 | Reactions: 👍2  
  This remains the most active discussion, reflecting a high-priority stability concern for users relying on the Matrix channel. Community members are digging into the root cause and possible workarounds, but no fix PR exists yet.  
  [🔗 sipeed/picoclaw Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

- **Issue #3294** – *[BUG] /list models only shows the current model instead of all configured models*  
  New today (0 comments, 0 reactions), but likely to attract attention given the command’s naming and description.  
  [🔗 sipeed/picoclaw Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)

- **PR #3193 (open, stale)** – *Added simplex channel type*  
  No new comments, but remains open since June 27. This feature would add a new communication channel (Simplex) and could be a roadmap signal.  
  [🔗 sipeed/picoclaw PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

## Bugs & Stability
| Severity | Issue | Summary | Status |
|----------|-------|---------|--------|
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop silently dies after network disruption; no reconnection logic, systemd can’t restart process. | Open, no fix PR |
| **Medium** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` shows only the current model instead of all configured models – a confusing UX bug. | Open, reported today |

The only fix-related PR closed today (#3205) addressed a different bug (9router response parsing), not directly related to the two open bugs above.

## Feature Requests & Roadmap Signals
- **Calendar & Email Integration** (PR #339, just merged) – This brings Google Calendar and enhanced email tooling into the core, likely appearing in the next release.
- **Simplex Channel** (PR #3193) – Still pending review; if merged, PicoClaw would support a decentralised messaging channel alongside Matrix and Telegram.
- **Better Model Listing** (Issue #3294) – The user expectation is clear: `/list models` should enumerate all configured models. A fix will likely be prioritised in a patch release.

## User Feedback Summary
- **Pain points**: Matrix reliability tops the list – users experiencing silent crashes after network blips (Issue #3203). Also, the model listing command fails to meet its documented purpose (Issue #3294).
- **Satisfaction**: Positive sentiment around the newly merged feature PR (#339) and the ARMv7 build fix (#3205), which directly improves usability on Raspberry Pi hardware.
- **Use cases**: The community appears to be split between server-hosted deployments (requiring robust Matrix sync) and edge/IoT setups (ARM builds, simplex support).

## Backlog Watch
- **PR #3193** – *Added simplex channel type* (open since June 27, marked stale) has not received any maintainer feedback. If the team intends to broaden communication channels, this deserves review.
- **Issue #3203** – While not a backlog item (it has recent activity), the absence of a linked fix PR is notable given its high severity. Maintainer attention is needed to triage or assign.

*All data from sipeed/picoclaw repository as of 2026-07-26.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-26

## 1. Today's Overview
The project saw moderate activity: two new bugs were reported, and 11 pull requests were updated, with one significant security PR merged. Both new issues have corresponding fix PRs already open, indicating a responsive maintainer team. No new releases were cut today. Overall project health is stable, with ongoing work on security hardening, skill contributions, and internal validation logic.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
One pull request was **merged/closed** today:
- **#2748** – security: harden agent containers with cap-drop, no-new-privileges, and pids-limit *(closed 2026-07-25)* – [PR #2748](https://github.com/nanocoai/nanoclaw/pull/2748)
  - Spawns per-session agent containers with `--cap-drop=ALL`, `--security-opt no-new-privileges:true`, and `--pids-limit 2048` by default. Overridable per agent group. This is a defense-in-depth improvement for compromised containers.

## 4. Community Hot Topics
No issues or pull requests attracted comments or reactions today. The most notable items in terms of longevity and recent updates are:
- **#2211** (open since May 3, resynced 2026-07-25) – tool-visibility skill for live tool-call previews – [PR #2211](https://github.com/nanocoai/nanoclaw/pull/2211)
- **#3122** (open since July 23) – opencode compatibility, custom-endpoint transport, memory parity – [PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122)

These represent community-driven features that have been dormant for some time but were recently refreshed. The lack of discussion suggests either low community engagement or that most feedback happens elsewhere.

## 5. Bugs & Stability
Two bugs were reported today, both with fix PRs already submitted:

| Issue | Summary | Severity | Fix PR |
|-------|---------|----------|--------|
| [#3134](https://github.com/nanocoai/nanoclaw/issues/3134) (open) | Host-sent messages (approval cards, rejection prompts, registration notices) are absent from the agent’s context, breaking conversation memory. | **High** – affects agent memory integrity for host-initiated interactions. | [#3135](https://github.com/nanocoai/nanoclaw/pull/3135) |
| [#3132](https://github.com/nanocoai/nanoclaw/issues/3132) (open) | Follow-up poll loop pushes `trigger=0` messages into an active query, bypassing the accumulate gate. | **Medium** – can cause unintended message consumption in active queries, leading to duplicate or out-of-order processing. | [#3133](https://github.com/nanocoai/nanoclaw/pull/3133) |

Both bugs are actively being fixed. No crashes or regressions were reported.

## 6. Feature Requests & Roadmap Signals
Several pull requests indicate upcoming features and improvements that are likely to land in the next release:

- **Skill contributions** – Flight check-in container skill ([#3128](https://github.com/nanocoai/nanoclaw/pull/3128)) and tool-visibility skill ([#2211](https://github.com/nanocoai/nanoclaw/pull/2211)) expand the agent ecosystem.
- **Security & validation** – Block access to `~/.config/nanoclaw` and `~/.local/bin` as mount roots ([#3129](https://github.com/nanocoai/nanoclaw/pull/3129)), validate `container_configs.image_tag` at write ([#3130](https://github.com/nanocoai/nanoclaw/pull/3130)), remove per-agent-group derived images during uninstall ([#3131](https://github.com/nanocoai/nanoclaw/pull/3131)).
- **Reliability** – Report unavailable MCP servers instead of failing silently ([#3124](https://github.com/nanocoai/nanoclaw/pull/3124)), sanitize inbox attachment paths ([#3127](https://github.com/nanocoai/nanoclaw/pull/3127)).

These signals point toward a release focused on **security hardening**, **validation gates**, and **agent skill usability**.

## 7. User Feedback Summary
Direct user feedback is minimal in the public repository today. The two bug reporters (`brianjcohen`, `buzali`) describe real-world pain points:
- **Missing context** bugs frustrate users running workflows that rely on host‑sent messages (e.g., approval flows).
- **Accumulate gate bypass** affects users of the polling mechanism, likely in high‑throughput scenarios.

No expressions of satisfaction or dissatisfaction were recorded. The merged security PR (#2748) was authored by `boazdori`, presumably from the core team, and may reflect internal user feedback about container security.

## 8. Backlog Watch
The following items have been open for an extended period without significant maintainer attention:

- **#2211** – tool-visibility skill (open since 2026-05-03) – [PR #2211](https://github.com/nanocoai/nanoclaw/pull/2211)  
  *Recently resynced after three months of production use on a fork. No maintainer comments.*
- **#3122** – opencode compatibility (open since 2026-07-23) – [PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122)  
  *A larger change touching multiple source files; may require architectural review.*

Both PRs are tagged `follows-guidelines` and are ready for review. They represent features that have been tested by their authors but are waiting for maintainer bandwidth.

---

*Generated from GitHub data for NanoClaw (github.com/qwibitai/nanoclaw) on 2026-07-26.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-26

## 1. Today's Overview
Activity remained high over the past 24 hours, with **11 issues updated** (7 open, 4 closed) and **19 PRs updated** (10 open, 9 merged/closed). The team continued applying pressure on **error recoverability** (epic #6284) and **WebUI performance** (epic #6628), while merging a wave of bug fixes and structural refactors. No new releases were published today. Project health appears strong: most bug reports were swiftly closed with corresponding fix PRs, and major architectural clean-ups advanced (extension host ownership, dead-code ratchet, route-level code splitting).

## 2. Releases
**No new releases today.** The latest release remains the one tracked in pending PR #5598 (see _Backlog Watch_).

## 3. Project Progress – Merged/Closed PRs
Nine PRs were merged or closed today, spanning frontend performance, accessibility, state management, and core architecture:

| PR | Title | Impact |
|----|-------|--------|
| [#6632](https://github.com/nearai/ironclaw/pull/6632) | perf(webui): add route-level code splitting and improve tree-shaking | **Reduced initial JS bundle from 1,227 kB to 377 kB (gzip: 349→116 kB)** – major load-time win for business pages |
| [#6624](https://github.com/nearai/ironclaw/pull/6624) | fix(webui): trap and restore focus in extension configuration modal | Accessibility fix: keyboard focus now correctly trapped and restored |
| [#6627](https://github.com/nearai/ironclaw/pull/6627) | fix(webui): preserve active run state when cancellation fails | Prevents frontend from showing idle state if backend cancellation request fails |
| [#6626](https://github.com/nearai/ironclaw/pull/6626) | fix(webui): preserve automation list during filter changes | Eliminates full-page loading flash when switching between All/Completed filters |
| [#6680](https://github.com/nearai/ironclaw/pull/6680) | fix(webui): preserve workspace tree state across root navigation | Expands/collapses stay stable during breadcrumb navigation |
| [#6673](https://github.com/nearai/ironclaw/pull/6673) | Add production struct dead-code ratchet | New architecture test that flags test-only fields/methods in production code – freezes baseline, prevents regressions |
| [#6669](https://github.com/nearai/ironclaw/pull/6669) | Move extension host ownership out of composition | Refactors extension-host modules from `ironclaw_reborn_composition` into dedicated crate |
| [#6670](https://github.com/nearai/ironclaw/pull/6670) | Consolidate Reborn guidance and remove stale plans | Removes 11 outdated documents, repairs stale references across codebase |
| [#6616](https://github.com/nearai/ironclaw/pull/6616) | Shrink composition extension host and retire product workflow facades | Generic extension-host behaviour migrated out of composition, reducing coupling |

## 4. Community Hot Topics
- **[EPIC] Error-recoverability endgame (#6284)** – 6 comments, 0 👍  
  This long-running epic continues to draw attention. It mandates that every mid-run error must survive, be visible to the model, carry cause+fix hints, and never bubble as a non-success. While it’s a core architectural goal, it has zero upvotes – suggesting it is driven by internal QA rather than community demand.  
  → [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)

- **Centralize shared Rust dependencies (#6675)** – 2 👍 (new today)  
  A clean-up proposal to move dependency version/feature declarations into `[workspace.dependencies]`. Its two upvotes indicate community agreement with the direction, though no comments yet.  
  → [Issue #6675](https://github.com/nearai/ironclaw/issues/6675)

- **Daily failure taxonomy (#6676)** – 0 comments, 0 👍  
  The daily benchmark report highlights that most test failures are genuine model shortfalls (especially deepseek-v4-flash), not harness defects. This is a valuable signal for model provider evaluation.  
  → [Issue #6676](https://github.com/nearai/ironclaw/issues/6676)

## 5. Bugs & Stability
Bugs reported today are **low-to-medium severity**, and all three WebUI bugs from yesterday (#6621, #6622, #6620) were **closed via fix PRs**. New user-facing bugs are:

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#6667](https://github.com/nearai/ironclaw/issues/6667) | **High** | GitHub PAT rejection silently loops auth prompt with no error – user cannot identify invalid token | No fix PR yet |
| [#6671](https://github.com/nearai/ironclaw/issues/6671) | **Medium** | Telegram setup dead-ends on "admin must configure" – only accessible via obscure scroll path | No fix PR yet |
| [#6668](https://github.com/nearai/ironclaw/issues/6668) | **Low** | Agent does not inform users that Slack can be connected (guidance gap only) | No fix PR yet |

Additionally, the **daily failure taxonomy** (#6676) reports 85 non-passing tests in `clawbench`, dominated by model limitations rather than harness defects – an important stability observation, though not a software bug per se.

## 6. Feature Requests & Roadmap Signals
- **Error recoverability conformance** – PR [#6677](https://github.com/nearai/ironclaw/pull/6677) adds an exhaustive classification matrix for seven error enums, aligned with epic #6284. Likely to merge before the next release.
- **Attested signing Phase B** – PR [#6672](https://github.com/nearai/ironclaw/pull/6672) implements signed intent + per-agent key lifecycle. This is significant for ledger integration and may land in the next major version.
- **Product command pipeline live** – PR [#6678](https://github.com/nearai/ironclaw/pull/6678) brings `/model` and `/status` commands to Slack, Telegram, and WebChat with zero per-command logic. A strong candidate for next minor release.
- **Mutation testing harness** – PR [#6674](https://github.com/nearai/ironclaw/pull/6674) introduces mutation auditing to catch untested code paths. Likely to be merged as a quality gate.

The **WebUI bundle size** epic (#6628) was advanced today with the merged code-splitting PR (#6632). Remaining work (image optimization, compression) may appear in the next sprint.

## 7. User Feedback Summary
Direct user pain points emerged from the **[v1-launch-checklist]** triage:
- **GitHub PAT integration is frustrating** – silent loops with no error message (#6667).
- **Telegram setup is poorly discoverable** – users hit dead-ends and cannot find the admin configuration path (#6671).
- **Agent guidance is inconsistent** – Slack connection is possible but the agent denies it exists (#6668).

These issues reflect a gap in onboarding/error messaging for integration setup. The three WebUI bugs (focus trap, loading flash, cancellation state) were quickly fixed, showing good responsiveness to user-reported regressions.

## 8. Backlog Watch
- **[Release PR #5598](https://github.com/nearai/ironclaw/pull/5598)** – Open since July 3, updated today. This PR bumps `ironclaw_common` to 0.5.0 and `ironclaw_skills` to 0.4.0 (both with breaking changes). Despite frequent updates, it has not been merged. This blocks any public release cadence and should be prioritized.
- **Dependency bumps** – Two Dependabot PRs ([#6428](https://github.com/nearai/ironclaw/pull/6428) tokio-ecosystem, [#6361](https://github.com/nearai/ironclaw/pull/6361) serialization) remain open with no recent activity beyond automated updates. While low risk, they could accumulate merge conflicts.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-26

## Today’s Overview
Project activity today was moderate, driven by the closure of eight stale issues and the merger of eleven pull requests. While no new releases were tagged, the team merged several long-standing feature branches that had been open since April, including batch tool‑call controls, session list grouping, message timestamps, and input history navigation. One new issue was filed about the file‑picker dialog not supporting folder selection, indicating a continued user demand for richer input capabilities. Overall, the project is in good health, with steady progress toward feature completeness and a clean backlog.

## Releases
No new releases were published on 2026-07-26.

## Project Progress
Eleven pull requests were merged/closed today, reflecting both new features and stability fixes:

- **Feature – Kimi K3 support** ([PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)): Added support for the Kimi K3 model across renderer, docs, main, openclaw, and cowork areas.
- **Fix – Windows install root foreign content protection** ([PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383)): Hardened the Windows installer against foreign content protection.
- **Fix – Windows install recovery** ([PR #2384](https://github.com/netease-youdao/LobsterAI/pull/2384)): Improved update recovery logic for Windows.
- **Feature – Batch expand/collapse tool call blocks** ([PR #1327](https://github.com/netease-youdao/LobsterAI/pull/1327), closes #1326): When an AI turn contains 2+ tool calls, a “Expand All / Collapse All” button is shown.
- **Feature – Error status red dot on session list** ([PR #1331](https://github.com/netease-youdao/LobsterAI/pull/1331), closes #1330): Sessions with `status: 'error'` now display a red static dot with a soft glow.
- **Feature – Session list grouped by time** ([PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338), closes #1337): Sessions are now organised into Pinned, Today, Yesterday, This Week, and Earlier groups.
- **Feature – Message timestamp on user bubbles** ([PR #1340](https://github.com/netease-youdao/LobsterAI/pull/1340), closes #1339): User messages show an `HH:MM` timestamp with full date on hover.
- **Feature – Up/Down arrow history navigation in input** ([PR #1342](https://github.com/netease-youdao/LobsterAI/pull/1342), closes #1341): The input box now supports browsing up to 50 recently sent messages.
- **Feature – MCP server config JSON import** ([PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)): Adds a “JSON Import” tab to the MCP custom server dialog.
- **Feature – Workdays (Mon–Fri) schedule option** ([PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335)): Scheduled tasks can now be set to run only on weekdays.
- **Fix – i18n attachment label, Escape close, delete guard** ([PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333)): Fixed multiple UX/i18n gaps in Cowork and Agent flows.

## Community Hot Topics
The most active issue today is a single newly opened report:

- **[#2385 – Dialog cannot add folders, only files](https://github.com/netease-youdao/LobsterAI/issues/2385)** (1 comment, created 2026-07-25)  
  *User request*: “对话框没办法添加文件夹，没办法像其他agent一样@文件。”  
  The inability to attach entire folders in the file picker disrupts workflows that rely on directory-level context (e.g., “@folder” syntax seen in other AI assistants). This feature gap is now the only open issue, suggesting strong user interest in richer file/context handling.

All other updated issues are old, closed, and have only 2 comments each – they represent historical feature requests that were resolved by the PRs merged today.

## Bugs & Stability
No new bugs were reported today. Two stability‑related fixes were merged:

- **Windows installer hardening** ([PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383), [PR #2384](https://github.com/netease-youdao/LobsterAI/pull/2384)): These patches protect against foreign content protection and improve recovery during Windows updates. Severity: high (affects Windows users’ ability to install/update reliably). Both are now closed.

- **i18n attachment label & UI guards** ([PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333)): Corrected missing translation keys, improved Escape‑close behavior, and added a delete confirmation. Severity: medium (affects user experience but not data integrity).

A stale bug from April – “新建定时任务通知渠道没有选项，只能选不通知” ([#1329](https://github.com/netease-youdao/LobsterAI/issues/1329)) – was closed as stale without a fix. This may still affect users on the v2026.4.1 release, but no fix PR exists.

## Feature Requests & Roadmap Signals
Multiple feature requests filed in April by user **MaoQianTu** were closed today after their corresponding implementations were merged. These signal the team’s roadmap priorities:

- **Tool call batch controls** (expand/collapse all) – *implemented* ✅
- **Error state visual indicators** – *implemented* ✅
- **Session list time‑grouping** – *implemented* ✅
- **Message timestamps** – *implemented* ✅
- **Input history navigation** (Up/Down arrows) – *implemented* ✅
- **Full‑text search within messages** ([#1343](https://github.com/netease-youdao/LobsterAI/issues/1343)) – *closed stale, not implemented yet* ❌
- **Export session as Markdown** ([#1345](https://github.com/netease-youdao/LobsterAI/issues/1345)) – *closed stale, not implemented yet* ❌

The next version (likely v2026.8.x) can be expected to include all the merged features above. The two unimplemented requests (full‑text search and Markdown export) remain strong candidates for future releases, given that they were authored by the same active contributor and address common user pain points.

Additionally, the new MCP JSON import ([PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)) and Kimi K3 model support ([PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)) indicate a trend toward enabling advanced model integrations and flexible configuration.

## User Feedback Summary
Real user pain points captured in today’s data:

- **Folder attachment missing** (#2385): Users want to `@` folders like in other AI tools to provide contextual directories.
- **Notification channel options unavailable** (#1329, stale): New scheduled tasks could only select “no notification”. The issue was closed without a fix, so this may still be broken for some users.
- **Session disorganisation** (#1337): Large session lists without time grouping frustrated users – now addressed.
- **No message timestamps** (#1339): Users lacked temporal context – now addressed.
- **Inefficient tool call review** (#1326): Manual expand/collapse of many tool blocks was tedious – now addressed.
- **Keyboard history missing** (#1341): Re‑running similar prompts required retyping – now addressed.

Satisfaction signals: The rapid closure of these requests (within the same day) shows the team values user experience and is responsive to community‑sourced enhancements. The new Kimi K3 integration and MCP JSON import also reflect a user‑centric approach to expanding model choice and configuration convenience.

## Backlog Watch
No long‑unanswered critical issues or PRs remain open. The only open item is the new folder‑attachment request [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385), which was created on the same day and has already received one comment. It requires a maintainer response or triage to decide whether to implement, defer, or close.

**Historical note**: A total of eight stale issues from April (all authored by `MaoQianTu`) were closed today, likely by an automated stale‑bot or manual cleanup. While these were all resolved by the corresponding PRs, the repository maintainers should verify that none of the closed issues represent unresolved regressions (e.g., [#1329 – notification channel options](https://github.com/netease-youdao/LobsterAI/issues/1329) was closed without a fix).

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-26

## Today’s Overview
Activity is moderate, focused on **feature development** and **process documentation**. No new issues were opened or updated in the last 24 hours, and no releases were cut. The project saw five pull requests updated, with two merged (documentation + Slack reaction feature) and three still open. The open PRs continue to extend **Nostr group chat support**, **Slack message acknowledgments & Block Kit rendering**, and a **Zvec vector memory backend**. The absence of bug reports or community issue activity suggests a stable codebase, but also low external engagement over the past day. Overall, the project is steadily shipping incremental features and refining its workflow rules.

## Releases
*No new releases for this date.*

## Project Progress
**Merged/Closed PRs (2):**
- [#1167 (closed)](https://github.com/moltis-org/moltis/pull/1167) – **docs: forbid Claude session URLs in commits and PRs** – Extends the CLAUDE.md workflow rule to explicitly ban AI-assistant session links in commit messages and PR descriptions. No code changed.
- [#1165 (closed)](https://github.com/moltis-org/moltis/pull/1165) – **feat(slack): acknowledge messages with reactions and add reaction triggers** – Adds Slack acknowledgment reactions (since bots cannot show typing indicators) and inbound reaction triggers, fixing a threaded reply bug. This is the base for the still-open #1166.

These merged PRs indicate progress in both **process hygiene** (documentation) and **core Slack integration** (user feedback via reactions).

## Community Hot Topics
All three open PRs have zero comments and no reactions, so there is no community discussion yet. The most impactful open topics:

- [#1168 (open)](https://github.com/moltis-org/moltis/pull/1168) – **feat(nostr): add NIP-29 group chat support for Buzz channels** – Integrates Moltis with Block’s open-source workspace Buzz, enabling AI agents to participate in Nostr-based team channels. This is a significant new integration path.
- [#1166 (open)](https://github.com/moltis-org/moltis/pull/1166) – **feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit** – Builds on #1165, adding phase feedback, Block Kit rendering, and better supervision under real conditions.
- [#1158 (open)](https://github.com/moltis-org/moltis/pull/1158) – **feat(memory): add zvec vector database memory backend** – An experimental backend using Zvec and redb, gated behind a `zvec` feature. Author describes it as “vibe-coded” but uses it as their daily setup.

**Underlying needs:** The Nostr PR addresses demand for **decentralized, self-hosted AI agent workspaces**; the Slack PRs tackle **user experience gaps** (no typing indicator in Slack); the memory backend reflects interest in **lightweight, embeddable vector storage** alternatives to heavier options.

## Bugs & Stability
No bugs, crashes, or regressions were reported today. Both merged PRs (#1165) and open PRs (#1166) fix confirmed bugs (e.g., a wrong-message bug in threaded replies), indicating that stability improvements are embedded in feature work. No severity ranking needed.

## Feature Requests & Roadmap Signals
No new feature requests appeared as issues. However, the open PRs themselves signal project direction:

- **Nostr NIP-29 group chat** (Buzz integration) is likely targeted for the next minor release, as it adds a major new platform.
- **Slack acknowledgment phases & Block Kit** will follow soon after #1165 is built upon.
- **Zvec memory backend** is experimental but may be included in a future release if testing proves stable.

Users driving these features are the core contributors (penso, demyanrogozhin), so no external demand signals are visible.

## User Feedback Summary
No direct user feedback (comments, reactions) was recorded today. The motivational context in PR #1166 notes that Slack bots lacking typing indicators is a known UX pain point, which the project is actively addressing. The absence of community complaints is neutral.

## Backlog Watch
No long-unanswered issues or PRs are present in the data. The oldest open PR is #1158 (created 2026-07-17, updated 2026-07-25). It is active and receiving attention. No maintainer attention gaps detected.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-26

## 1. Today's Overview
The project shows **moderate activity** with 8 issues and 8 pull requests updated in the last 24 hours. No new releases were published. The issue tracker reveals several critical bugs—most notably a hardcoded SSE transport in the MCP driver that breaks Streamable HTTP servers, and a widespread model connection failure on the AgentScope Platform. On the positive side, two long-running PRs for reranker UI and backend were merged today, advancing memory search capabilities. A significant community concern about agent memory isolation (privacy leak) has gained traction with 2 upvotes. Overall, the project is actively developed but faces several stability challenges that may impact user trust.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Two pull requests were closed/merged today, both related to reranker support for memory search:

- **[#5691 – feat(console): add reranker config UI for reme0.4 memory search](https://github.com/agentscope-ai/QwenPaw/pull/5691)**  
  Adds a collapsible “Search Result Reranker” section in the ReMeLightMemoryCard component, allowing users to configure model name, base URL, API key, and temperature from the Web UI. Includes full i18n (Chinese/English).

- **[#5692 – feat(memory): add reranker for search results on reme0.4](https://github.com/agentscope-ai/QwenPaw/pull/5692)**  
  Implements a post-retrieval reranking stage on top of the hybrid BM25 + vector search pipeline. After top-K results are fetched, a dedicated reranker API re-ranks them for improved relevance.

These PRs were originally opened on July 1 and have now been merged, indicating the team has completed a significant memory enhancement cycle.

## 4. Community Hot Topics
- **[#6461 – [Feature] Agent full isolation](https://github.com/agentscope-ai/QwenPaw/issues/6461)**  
  *2 reactions, 1 comment*  
  A server administrator reports that two QQ-bound agents are not isolated: a group chat assistant could read and manipulate the memory of a private chat agent. The request is for a “fully isolated” mode where agents cannot read or modify each other’s data. This highlights a fundamental privacy/security concern in multi-agent deployments.

- **[#6460 – QwenPaw 2.0.1 high CPU on Edge+Wayland](https://github.com/agentscope-ai/QwenPaw/issues/6460)**  
  *2 comments*  
  User reports sustained high CPU usage in a single Edge tab when viewing QwenPaw pages with many session results and WebSocket updates. Likely related to rendering large result sets or push notifications.

- **[#6470, #6469, #6468 – MCP driver hardcoded SSE client (triplicate reports)](https://github.com/agentscope-ai/QwenPaw/issues/6470)**  
  Each has 1 comment. Three users independently report that the MCP driver ignores the `transport: streamable_http` YAML configuration and hardcodes `sse_client`, causing all Streamable HTTP MCP servers to fail. This is a high-impact bug affecting many users—likely the most urgent issue today.

## 5. Bugs & Stability
All bugs reported today are open with no fix PRs yet. Ranked by severity:

| Severity | Issue | Description |
|----------|-------|-------------|
| **High** | [#6470 (#6469, #6468)](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver hardcodes SSE client, breaks `streamable_http` transport. Triplicate reports indicate widespread reproduction. |
| **High** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Model connection failure on AgentScope Platform: cannot connect to any model, model dropdown empty. Affects both Pro and Free tiers. |
| **Medium** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | High CPU on Edge+Wayland when viewing session-heavy pages. Performance regression. |
| **Low** | [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | User question about building a VPN node (probably mis-categorized, not a project bug). |

The MCP driver bug is the most critical: three nearly identical reports suggest a regression or incomplete implementation.

## 6. Feature Requests & Roadmap Signals
Two notable enhancement requests:

- **[#6466 – Clickable folder/file path buttons](https://github.com/agentscope-ai/QwenPaw/issues/6466)**  
  Users want agents to output clickable buttons that open file paths directly in File Explorer. Low implementation effort; likely to be considered for next minor release.

- **[#6461 – Agent full isolation](https://github.com/agentscope-ai/QwenPaw/issues/6461)**  
  Strong community backing (2 👍) and a clear security/privacy requirement. May become a roadmap item for multi-agent deployment safety.

In addition, the open PR [#6276 – Unified browser (one SDK, any backend)](https://github.com/agentscope-ai/QwenPaw/pull/6276) is a large architectural change that may land in a future release. The merged reranker PRs signal that memory quality improvements are a current focus.

## 7. User Feedback Summary
Real user pain points reported today:
- **Privacy leak**: Agents in multi-agent setups can see each other’s memory and settings (Issue #6461). This is a deal-breaker for enterprise or shared server deployments.
- **MCP transport incompatibility**: Users relying on Streamable HTTP MCP servers are completely blocked (Issues #6470, #6469, #6468).
- **Platform connectivity**: Pro/Free users cannot connect any model on AgentScope Platform (Issue #6464).
- **Performance**: Linux users with Edge on Wayland suffer high CPU usage (Issue #6460).
- **UX friction**: Manual copy-paste of file paths is tedious (Issue #6466).

Satisfaction is mixed: while memory improvements are being merged, the high-impact bugs undermine user confidence, especially for production use.

## 8. Backlog Watch
No issues have been left unanswered for an extended period—all reported issues are from the last two days. However, a few open PRs may require maintainer attention:

- **[PR #6276 – feat(browser): unified browser](https://github.com/agentscope-ai/QwenPaw/pull/6276)** (opened July 20)  
  Large architectural change; no recent activity aside from an update. May need review or approval.

- **[PR #6365 – fix(console): run test scripts on Windows](https://github.com/agentscope-ai/QwenPaw/pull/6365)** (opened July 22)  
  First-time contributor. Blocks Windows development setup. Should be reviewed soon to encourage contributions.

- **[PR #6399 – feat: add reranker UI config panel](https://github.com/agentscope-ai/QwenPaw/pull/6399)** (opened July 23)  
  Still open with “Under Review” label. Appears to be a newer version of the now-merged PR #5691; may be a duplicate or superseded.

Maintainers should prioritize the MCP and model connection bugs (Issues #6470 and #6464) as they block core functionality for many users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest — 2026-07-26

### 1. Today's Overview
Project activity is very high: 19 issues were updated in the last 24 hours (16 open, 3 closed), and 50 pull requests saw updates (48 open, 2 merged/closed). The team is actively preparing the **v0.8.4 maintenance release** (PR #9376), while tackling several **high-severity security bugs** in WhatsApp Web and the verifiable-intent subsystem. A major refactoring effort around a unified plugin catalog (Issue #6489) and channel/source cleanup (Issue #8583) continues to draw community and maintainer attention. Test stability remains a concern, with a flaky runtime test cluster (Issue #9357) causing CI failures on master.

### 2. Releases
No new releases were published today. The latest stable release remains **v0.8.3**. The v0.8.4 maintenance train is in progress (tracked by Issue #8357, target date July 31), with release PR #9376 opened today that renames the root package to `zeroclaw` and prepares 18 crates for publishing.

### 3. Project Progress
Two PRs were merged or closed in the last 24 hours:
- **PR #9123** (merged) – `fix(plugins): host-stamp channel plugin routes` – improves routing isolation for WASM plugin channels.
- **PR #9270** (merged) – `fix(web/deps): resolve npm audit advisories` – pins `@redocly/openapi-core`, upgrades `js-yaml` and `brace-expansion` to remove high-severity findings.

Three issues were closed, including the npm audit CI failure (#9235) and a runtime test flake (#8962). Several important fix PRs were opened today, notably:
- **PR #9376** – chore(release): cut v0.8.4 (crates.io publishing, changelog, crate removals).
- **PR #9349** – `fix(observability): report per-turn cost_usd in AgentEnd events` (high priority).
- **PR #9371** – `ci(tests): parallelize runtime stress gate` to reduce CI test latency.
- **PR #9375** – `fix(sop): recover fenced/prose-wrapped JSON in step outputs`.

### 4. Community Hot Topics
| Item | Type | Comments | Key Concern |
|------|------|----------|-------------|
| [#9348 – WhatsApp Web security bug](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | Issue | 6 | Agent replies to all DMs/groups despite locked-down config |
| [#6489 – "Everything is a plugin" RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Issue | 5 | Architectural direction to unify integrations & plugins |
| [#8357 – v0.8.4 maintenance tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) | Issue | 0 | Scope tracking for upcoming release |
| [#9330 – AI-assisted PR pre-review RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | Issue | 2 | Proposal to use CI for AI-driven code review |
| [#9376 – v0.8.4 release PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) | PR | - | First crates.io publishing since microkernel split |

The community is most vocal about **security misconfiguration** (WhatsApp behavior) and the **long-term architecture** of plugins. The AI-assisted PR review RFC has gathered interest as a way to scale maintainer bandwidth.

### 5. Bugs & Stability
**High severity (S1/S2) bugs reported today:**
- **#9348** – WhatsApp Web in business mode ignores `dm_policy`/`group_policy`; agent replies to all inbound messages. Fix PR #9354 opened (warns on misconfiguration).
- **#9328** – `verifiable-intent` evaluates constraints without verifying the credential chain – cryptographic bypass risk.
- **#9357** – `cargo test -p zeroclaw-runtime --lib` fails ~19/20 runs on master; flaky assertion poisons global mutex.
- **#9340** – CLI-created cron jobs hardcode `delivery.mode = "none"`; agent output silently discarded.
- **#9373** – Peer-agent delivery runs recipient turn without cost-tracking context; spend unrecorded.
- **#9374** – `agent::run` open-codes lifecycle bracket, leaking `AgentStart` on 12 exit paths (S3 minor but systematic).
- **#9366** – WhatsApp Web accepts but never reads `approval_timeout_secs` (split from #9348).
- **#9239** – `config patch --json` emits plaintext errors on two failure paths (medium severity).

**Stability improvements in flight:**
- PR #9371 parallelizes runtime stress gate to reduce CI flakiness.
- PR #9349 fixes `AgentEnd.cost_usd` being hardcoded `None`.

### 6. Feature Requests & Roadmap Signals
- **#6489** – (RFC) Collapse separate integrations/plugins into a unified catalog. Likely targets v0.9.0.
- **#8583** – Tracker for channel/source shared-boundary cleanup and orchestrator line-culling.
- **#8357** – v0.8.4 maintenance train (Jul 31 target) – includes bug fixes and minor enhancements for channels, config, and CI.
- **#7130** – Forbid `unsafe_code` workspace-wide with one carve-out – could land in v0.8.4 or later.
- **#9330** – AI-assisted PR pre-review/re-review workflow – early RFC, may be implemented in CI pipeline.
- **#9363** – Localize config metadata in ZeroCode and web dashboard – improvements for non-English users.
- **#9359** – Telegram multi-message narration pacing per-draft (split from #8561) – incoming fix.
- **#9370** – ACP near-live JSON-RPC transport smoke test for `deliver_file` – integration testing enhancement.

These signals indicate a strong focus on **developer experience** (plugins, AI review), **security hardening**, and **internationalization**. The v0.8.4 release is likely to include the plugin routing fixes, cost observation fix, and various config validation improvements.

### 7. User Feedback Summary
- **Pain point (security):** WhatsApp Web administrators expecting restrictive behavior via `dm_policy=/group_policy=` got a fully open agent (Issue #9348). User confusion led to the discovery of an unused config field (Issue #9366).
- **Pain point (usability):** CLI-created cron jobs silently discard output (Issue #9340) – user expectation of usable delivery is unmet.
- **Pain point (localization):** Users in non-English locales find that ZeroCode TUI and web dashboard remain partially English despite locale selection (Issue #9363).
- **Pain point (config validation):** `config patch --json` errors are inconsistently formatted (Issue #9239), making automation harder.
- **User request:** AI-assisted pre-review of PRs (Issue #9330) – desire to accelerate review cycles while keeping human final approval.
- **Architecture enthusiasm:** The “Everything is a plugin” RFC (#6489) has received positive engagement, indicating community alignment with the long-term plugin direction.

Overall satisfaction appears moderate; there is frustration with unexpected security behaviors and silent failures, but the project's responsiveness (many fix PRs opened same day) and transparency (trackers, RFCs) is valued.

### 8. Backlog Watch
Items that have been open for an extended period and may require maintainer action:

| Item | Type | Created | Last Updated | Notes |
|------|------|---------|--------------|-------|
| [#6489 – Everything is a plugin](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Issue | 2026-05-06 | 2026-07-25 | Large architectural RF, needs updated design doc |
| [#7130 – Forbid unsafe_code](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | Issue | 2026-06-03 | 2026-07-25 | No PR yet; carve-out for aardvark-sys |
| [#8357 – v0.8.4 maintenance tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) | Issue | 2026-06-26 | 2026-07-25 | Live scope but many subtasks may lack assignees |
| [#8583 – Channel/source cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) | Issue | 2026-07-01 | 2026-07-25 | Active, but progress tracking could be clearer |
| PRs with **needs-author-action** (8 open today): | #7821, #9115, #9200, #8438, #9354, #9137, #8964, #9134, #9229 | Various | Various | These PRs are waiting on author updates; review load is skewed |
| [#9330 – AI-assisted PR review](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | Issue | 2026-07-24 | 2026-07-25 | Needs maintainer review to proceed |

The project is healthy but has a growing backlog of PRs in “needs-author-action” state. Maintainers may need to nudge authors or set expiration policies. The v0.8.4 release cut (#9376) should help close several fix PRs and stabilise the codebase.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*