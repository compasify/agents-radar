# AI CLI Tools Community Digest 2026-05-15

> Generated: 2026-05-15 00:23 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-05-15

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has fragmented into distinct architectural philosophies: **closed-source model-tied tools** (Claude Code, Codex, Gemini CLI, Kimi CLI) competing with **open-source multi-provider alternatives** (OpenCode, Qwen Code, DeepSeek TUI, Pi). All major tools are converging on agent orchestration, MCP ecosystem integration, and session persistence as baseline capabilities, while struggling with platform-specific stability—particularly Windows ARM64 and terminal state management. The sector is experiencing acute growing pains around cost transparency, rate limiting, and trust in autonomous agent behavior.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Cadence | Notable |
|:---|:---:|:---:|:---|:---|:---|
| **Claude Code** | 50 | 4 | v2.1.142 | ~weekly | Agent flags expansion; no merge activity on critical bugs |
| **OpenAI Codex** | — | 10+ | rust-v0.131.0-alpha.16/18 | Daily alpha (Rust rewrite) | Aggressive PR landing; plugin hooks graduated |
| **Gemini CLI** | — | 10 | v0.44.0-nightly | Nightly | Security-focused merge queue; CI reliability emphasis |
| **GitHub Copilot CLI** | — | 0 | v1.0.48 (+2 hotfixes) | Rapid patch | Private dev branch suspected; no public PR review |
| **Kimi CLI** | — | 10 | v1.44.0 | ~bi-weekly | Community contributor surge (ktwu01, he-yufeng) |
| **OpenCode** | — | 10 | v1.14.50 | ~weekly | Architectural PRs: native LLM runtime, Effect-native events |
| **Pi** | — | 6 | None | Irregular | Refactor mode; heavy issue closure without migration paths |
| **Qwen Code** | — | 10 | Nightly failed | Nightly (broken) | Daemon architecture debate; wenshao design series |
| **DeepSeek TUI** | 40 | 50 | v0.8.37 | Daily | Hunter directly merging; highest PR velocity |

*Note: Issue counts marked "—" where digest aggregated without explicit 24h count.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Agent orchestration & background tasks** | Claude Code, Codex, Kimi CLI, Qwen Code, Gemini CLI | Claude: `/resume` for bg sessions (#58725); Codex: SubagentStart/Stop hooks (#22720); Kimi: configurable >4 task limit (#2157); Qwen: daemon mode (#3803); Gemini: Ctrl+B for subagents (#22741) |
| **MCP multi-tenancy & robustness** | Claude Code, Kimi CLI, Copilot CLI, OpenCode | Claude: multiple Gmail accounts (#36024); Kimi: tool name collision prefixing (#2282); Copilot: startup race condition (#3329); OpenCode: outputSchema exposure (#27577) |
| **Session persistence & fork/branch** | Codex, Kimi CLI, Qwen Code, OpenCode, Pi | Codex: thread artifacts in SQLite (#22722); Kimi: web upload state (#2279); Qwen: `--fork-session` (#4159), `/rewind` file restore (#4064); OpenCode: child session visibility (#27621); Pi: `runWhenIdle()` (#2023) |
| **Cost/usage transparency & control** | Codex, Claude Code, Gemini CLI, Kimi CLI, OpenCode | Codex: 575-comment token burn thread (#14593); Claude: `/ultrareview` credit consumption (#52819); Gemini: 429 capacity tracker (#24937); Kimi: K2.6 overload crisis; OpenCode: usage tracking with auth refresh (#9545) |
| **Windows ARM64 support** | Claude Code, Codex, Copilot CLI, Pi, DeepSeek TUI | Claude: Cowork VM failure (#40198); Codex: cross-compile CI (#22686); Copilot: native addon missing (#3306); Pi: ARM64 binary merged (#4458); DeepSeek TUI: legacy conhost fixes (#1655) |
| **Local/self-hosted provider flexibility** | OpenCode, DeepSeek TUI, Qwen Code, Pi | OpenCode: LAN mDNS discovery (#27554); DeepSeek TUI: provider-aware `/model` (#1201); Qwen: Ollama fix (#4152); Pi: OpenAI Codex SSE retry (#4486) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach & Target Users |
|:---|:---|:---|
| **Enterprise integration depth** | Claude Code, Codex, Copilot CLI | Tied to cloud model subscriptions; emphasis on org-wide governance, RBAC (Codex permissions stack), IDE ecosystem lock-in. Target: Fortune 500, regulated industries. |
| **Open-source multi-provider agility** | OpenCode, DeepSeek TUI, Qwen Code, Pi | Swappable providers, local model support, transparent internals. OpenCode leads on architectural ambition (Effect-native, native LLM runtime). Target: indie developers, privacy-conscious, AI infrastructure builders. |
| **Rust/core-native performance** | Codex (Rust rewrite), DeepSeek TUI (Rust) | Memory safety, cross-platform binaries, terminal control precision. Codex's aggressive Rust migration contrasts with Node.js-based tools' OOM crises (Qwen #4149, Kimi implicit). |
| **China-market localization** | Kimi CLI, DeepSeek TUI, Qwen Code | Feishu integration (#1659), ¥ pricing (#1607), domestic model defaults (K2.6, DeepSeek V4). Target: Chinese enterprises and developers. |
| **Plugin/hook extensibility** | Codex, Claude Code, Gemini CLI | Codex graduated plugin hooks (#22552); Claude agents support `--plugin-dir`; Gemini skills composition. Divergence: Codex emphasizes subagent lifecycle, Claude emphasizes dispatch configuration. |
| **TUI/renderer sophistication** | DeepSeek TUI, OpenCode | DeepSeek: granular terminal quirk detection, vision bounding boxes; OpenCode: virtualization, mobile touch. Both struggle with cross-platform renderer cascade failures. |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **🔥 Highest velocity** | DeepSeek TUI, Codex, Gemini CLI | DeepSeek: 50 PRs, daily releases, maintainer directly merging; Codex: 10+ PRs/day, Rust alpha cadence; Gemini: security-focused nightly pipeline |
| **⚡ Active iteration** | Kimi CLI, OpenCode, Qwen Code | Kimi: concentrated community contributor batch; OpenCode: ambitious architectural PRs; Qwen: daemon design series attracting sustained engagement |
| **🔄 Stabilizing/refactoring** | Claude Code, Pi, Copilot CLI | Claude: feature expansion (agents) but bug backlog accumulating; Pi: heavy refactor with trust risk from issue closures; Copilot: rapid hotfixes suggest reactive posture |
| **⚠️ Reliability concerns** | Kimi CLI (K2.6), Qwen Code (OOM), OpenCode (billing) | Model-side capacity crises and client-side memory regressions threatening user retention |

**Maturity signals**: Codex's plugin hooks graduation and permissions RBAC stack suggest production-readiness; Claude Code's agent flags indicate feature completeness but Windows stability debt; OpenCode's architectural PRs (Effect-native, native LLM runtime) signal long-term infrastructure investment over immediate UX polish.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|:---|:---|:---|
| **Agent orchestration as core competency** | Every tool investing in background tasks, subagent lifecycle, session fork/resume | Developers should design workflows assuming multi-agent parallelism; single-session tools are legacy |
| **MCP as universal integration layer** | Multi-tenancy, auth refresh, startup race fixes across all tools | Prioritize MCP-native tool design; expect provider-agnostic tool markets |
| **Cost anxiety driving observability demands** | Token burn threads, credit consumption bugs, usage tracking PRs | Build usage instrumentation early; users will demand per-operation cost visibility |
| **Terminal state management as unsolved problem** | Raw-mode cleanup, charset corruption, spinner artifacts, SIGINT handling across 6+ tools | TUI frameworks need systematic terminal capability detection; avoid assuming POSIX compliance |
| **Model capacity as single point of failure** | K2.6 overload, Gemini 429s, Claude Opus version pinning | Architect for model fallback; treat "engine_overloaded" as expected, not exceptional |
| **Cross-device session continuity emerging** | Codex remote control, Kimi session handoff (#2269), Claude `/resume` gaps | Users expect ChatGPT-like continuity; CLI tools must sync state or lose to web-native competitors |
| **Reasoning content as protocol friction point** | K2.6 400-errors (#4251, #4514), MiMo parity (#4505), Copilot prefill (#13768) | Reasoning payload schemas are unstable across providers; abstraction layers premature |

---

*Report compiled from 9 community digests covering 2026-05-14/15 activity. For methodological questions or data corrections, contact the analyst.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-15 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | Quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Broadly applicable to all Claude document output; author argues this affects "every document Claude generates." Awaiting maintainer review since March. |
| 2 | **PDF Skill Fixes** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 OPEN | Case-sensitivity fix for `skills/pdf/SKILL.md` breaking on Linux/macOS. Small but critical infrastructure repair; 8 broken references corrected. Part of a cluster of quality fixes from contributor Lubrsy706. |
| 3 | **Frontend Design Enhancement** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 OPEN | Revises frontend-design skill for "actionability"—ensuring every instruction is executable in a single conversation. Meta-conversation about what makes a skill *usable* vs. merely descriptive. |
| 4 | **Meta-Skills: Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN | Self-referential tooling: skills that evaluate other skills across 5 quality dimensions and security posture. Novel "meta-skill" category; stalled since November, suggesting governance questions about scope. |
| 5 | **ODT (OpenDocument) Support** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 OPEN | Full ODT lifecycle: create, fill templates, parse to HTML. Targets open-source/ISO standard document workflows as alternative to proprietary formats. Active updates through April. |
| 6 | **YAML Validation Fix** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 OPEN | Pre-parse validation for unquoted descriptions containing `:` — prevents silent YAML truncation. Infrastructure reliability; part of Lubrsy706's quality-fix series. |
| 7 | **DOCX Bookmark Collision Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 OPEN | Fixes document corruption from `w:id` space collisions between tracked changes and existing bookmarks. Deep OOXML domain expertise; addresses production-grade document generation. |
| 8 | **System Documentation Suite** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 OPEN | Evidence management system docs with architecture and flowcharts. Appears enterprise/vertical-specific; limited cross-community relevance. |

> **Note:** All top PRs show `Comments: undefined` in raw data, suggesting either API limitation or low actual comment volume. Ranking inferred from position in sorted feed and update recency.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Intensity |
|:---|:---|:---:|
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — 13 comments, 7 👍 | 🔥🔥🔥 |
| Enterprise deployment friction: manual `.skill` file passing via Slack/Teams, no shared libraries or deep links. | | |
| **Skill Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) — 8 comments, 6 👍 | 🔥🔥🔥 |
| `claude -p` fails to trigger skills/commands at 0% rate; fundamental runtime mechanism broken for eval/automation workflows. | | |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — 6 comments, 2 👍 | 🔥🔥 |
| Community skills impersonating official `anthropic/` namespace; permission escalation risk. Governance gap. | | |
| **Plugin Architecture Cleanup** | [#189](https://github.com/anthropics/skills/issues/189), [#1087](https://github.com/anthropics/skills/issues/1087) | 🔥🔥 |
| Duplicate skills across `document-skills`/`example-skills`; plugin loads undeclared content. Marketplace manifest system not enforced. | | |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#1102](https://github.com/anthropics/skills/issues/1102) | 🔥🔥 |
| Skills-as-MCPs protocol exposure; MCP data compression for large database returns. Standards integration demand. | | |
| **Platform Expansion** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock; [#532](https://github.com/anthropics/skills/issues/532) — Enterprise SSO | 🔥 |
| Authentication and runtime portability beyond Anthropic-managed Claude Code. | | |

---

## 3. High-Potential Pending Skills

These active PRs show recent maintainer attention or community momentum, suggesting near-term merge probability:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack (Trophy model, AAA, React Testing Library, E2E). Fills major gap in code quality skills. Updated April 21. |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Broad enterprise ITSM coverage (ITOM, ITAM, SecOps, FSM, SPM). Large addressable market; updated April 23. |
| **AURELION Cognitive Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 4-skill framework (kernel, advisor, agent, memory). Structured knowledge management; updated May 6. |
| **Sensory / macOS Automation** | [#806](https://github.com/anthropics/skills/pull/806) | Native AppleScript automation as screenshot-free alternative. Addresses accessibility/efficiency; tiered permission model well-designed. |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | Full-stack deployment to public URLs. Updated May 4; commercial partner integration (`appdeploy.ai`). |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | Orphaned code detection, documentation gaps, infrastructure bloat. DevOps/SDLC hygiene; updated February. |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | SAP's open-source tabular foundation model. Vertical enterprise analytics; updated March 16. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability and distribution infrastructure* — not more skill variety, but trustworthy mechanisms to share, trigger, secure, and port skills across organizational boundaries and runtime environments.**

The gap between skill *creation* (abundant, 800+ PRs) and skill *operationalization* (org sharing, trigger reliability, namespace trust, SSO/auth, MCP bridging) defines the ecosystem's current maturity bottleneck.

---

*Report generated from public GitHub data. PR/Issue links verified against `anthropics/skills` repository.*

---

# Claude Code Community Digest — 2026-05-15

---

## 1. Today's Highlights

Anthropic shipped **v2.1.142** with significant expansion of the `claude agents` CLI, adding eight new configuration flags for background agent dispatch and upgrading Fast mode to **Opus 4.7**. The community is actively stress-testing these new agent controls, with multiple bug reports surfacing around flag propagation and version resolution in FleetView. Meanwhile, a critical `[object Object]` rendering crash is dominating Windows/VS Code user reports, accumulating 50+ comments and 62 upvotes in 24 hours.

---

## 2. Releases

**[v2.1.142](https://github.com/anthropics/claude-code/releases/tag/v2.1.142)** — *2026-05-14*

| Change | Impact |
|--------|--------|
| New `claude agents` flags: `--add-dir`, `--settings`, `--mcp-config`, `--plugin-dir`, `--permission-mode`, `--model`, `--effort`, `--dangerously-skip-permissions` | Enables full programmatic configuration of dispatched background sessions without interactive setup |
| Fast mode default: Opus 4.7 (was 4.6) | Performance/responsibility upgrade for speed-prioritized workflows |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#59033](https://github.com/anthropics/claude-code/issues/59033)** `[BUG] Unhandled Case [object Object]` | **Top crash** on Windows/VS Code: webview renders raw object on SDK stream errors. Affects basic usability; 50 comments suggest rapid spread. | 🔥 62 👍, 50 comments, duplicate cluster forming |
| **[#40198](https://github.com/anthropics/claude-code/issues/40198)** Cowork VM fails on Windows ARM64 (Snapdragon) | Blocks enterprise adoption of Samsung Galaxy Book4 Edge and similar Copilot+ PCs. No workaround identified since March. | 46 comments, only 4 👍 — persistent but niche |
| **[#36024](https://github.com/anthropics/claude-code/issues/36024)** Support multiple Gmail accounts in MCP | High-value productivity gap: personal/work account siloing breaks email automation workflows. Clear use case, awaiting prioritization. | 50 👍, 18 comments |
| **[#52819](https://github.com/anthropics/claude-code/issues/52819)** `/ultrareview` crash consumes free credit | Trust issue: users charged for failed operations. "Free credit" scarcity (3/month) amplifies frustration. | 15 comments, 6 👍 |
| **[#37796](https://github.com/anthropics/claude-code/issues/37796)** Copied text includes 2-space indentation | Daily papercut degrading clipboard UX. Has repro, fixable. Strong signal (23 👍) relative to comment volume. | 23 👍, 6 comments |
| **[#59248](https://github.com/anthropics/claude-code/issues/59248)** Silent retention cleanup deletes transcripts | **Data loss** with no warning or recovery. Session history critical for audit/compliance contexts. | 2 comments, 0 👍 — underreported severity |
| **[#58725](https://github.com/anthropics/claude-code/issues/58725)** `/resume` should include background sessions | Fragmented session management: `/resume` vs `claude agents` split breaks mental model. Requested by power users. | 3 comments, 1 👍 |
| **[#59246](https://github.com/anthropics/claude-code/issues/59246)** "Shape" terminology proliferation | Quality signal: model drift in system prompts (0→37 in 10 weeks) degrading output precision. Meta-bug on prompt engineering. | 1 comment, 1 👍 |
| **[#58905](https://github.com/anthropics/claude-code/issues/58905)** Terminal charset corruption after spinner | Low-level TTY bug: G1 alternate charset stuck state corrupts terminal. Linux-specific, reproducible. | 3 comments, 2 👍 |
| **[#59266](https://github.com/anthropics/claude-code/issues/59266)** Webview `[object Object]` on `had_error: true` | Root-cause analysis of #59033 cluster: missing error handler in SDK stream termination. Good diagnostic contribution. | 1 comment, 0 👍 |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| **[#59222](https://github.com/anthropics/claude-code/pull/59222)** First WSL-originated Dockerized Claude Code | ❌ Closed | Enterprise fork adding Docker Compose setup, `.env` templating, and org-specific bootstrap. Not upstreamed. |
| **[#59151](https://github.com/anthropics/claude-code/pull/59151)** fix(hookify): map prompt patterns to `user_prompt` | 🟡 Open | Fixes legacy `event: prompt` + `pattern:` rules failing to match `UserPromptSubmit.user_prompt`. Adds regression tests. |
| **[#23660](https://github.com/anthropics/claude-code/pull/23660)** feat(plugin): `timestamp-context` plugin | ❌ Closed | Injects local ISO 8601 time into every message via `UserPromptSubmit` hook. Addresses long-standing time-awareness gap. |
| **[#16228](https://github.com/anthropics/claude-code/pull/16228)** chore: Update Node.js 20 → 24 in devcontainer | 🟡 Open | Maintenance upgrade; Node 20 in maintenance LTS. Author reports local testing clean. |

*Note: Only 4 PRs updated in tracking window. No merge activity on agent flags or critical bugfixes.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Agent/orchestration UX** | #58725 (`/resume` for bg sessions), #59273 (`/exit` hooks for memory/decision records), #59267 (`sessionTitle` in `SessionStart` hooks) | High — v2.1.142 agent expansion driving follow-on requests |
| **Session management consistency** | #59268 (unified rename across clients), #59267 (hook-driven naming) | Medium — fragmentation between CLI/web/desktop |
| **MCP multi-tenancy** | #36024 (multiple Gmail accounts) | Medium — identity/auth siloing limits integration value |
| **Time/context awareness** | #23660 (timestamp plugin), implied by #59246 | Low-medium — infrastructure exists, needs systematization |

---

## 6. Developer Pain Points

| Theme | Manifestations | Severity |
|-------|---------------|----------|
| **Windows/VS Code stability** | #59033, #59266, #59253 (`[object Object]`); #59250 (ANSI artifacts); #59203 (plan mode injection) | 🔴 Critical — appears to be the highest-friction platform |
| **Agent dispatch reliability** | #58624, #59193, #58560 (flag/version resolution in `claude agents`); #48889 (Homebrew path hardcoding) | 🟡 High — new feature, rough edges expected, but blocking automation |
| **Silent data loss / retention** | #59248 (transcript deletion), #52819 (credit consumption on crash) | 🟡 High — trust erosion in billing and data governance |
| **Authentication/account fragmentation** | #36797, #51002 (redirect loops, duplicate accounts, Google Drive lockout) | 🟡 High — Max subscriber impact |
| **TUI rendering/copy UX** | #37796 (indentation), #44696 (table collapse), #58905 (charset corruption) | 🟢 Medium — persistent polish gaps |

---

*Digest compiled from 50 issues, 4 PRs, and 1 release in the 24-hour window ending 2026-05-15.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-15

## 1. Today's Highlights

The Codex team shipped two Rust alpha releases (v0.131.0-alpha.16/18) while community attention remains fixated on a 575-comment thread about runaway token consumption. On the engineering front, maintainers are aggressively landing PRs around graceful shell command cancellation, subagent lifecycle hooks, and a major permissions system refactor with workspace-scoped profiles—suggesting the CLI core is stabilizing for broader enterprise adoption.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.131.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.18) | Latest alpha in the 0.131 series; no detailed changelog provided |
| [rust-v0.131.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.16) | Preceding alpha; typical rapid iteration pattern for the Rust rewrite |

Both releases follow the project's established alpha cadence. No breaking changes or feature announcements were documented in release notes.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business tier user reports rapid token depletion | The longest-running active issue (575 comments, 253 👍) with no resolution; strikes at cost trust for paying customers | Sustained outrage; users sharing mitigation scripts and demanding usage caps/visibility |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** *(closed)* | Closed after 176 comments; remote dev was a major gap vs. VS Code | 655 👍 shows massive demand; closure suggests either shipped or deprioritized—community seeking clarity |
| [#9224](https://github.com/openai/codex/issues/9224) | **Codex Remote Control** *(closed)* | Phone-to-CLI remote control via ChatGPT app; 401 👍 | Closed status contradicts active remote-control bugs filed this week; may indicate partial implementation |
| [#9203](https://github.com/openai/codex/issues/9203) | **Please make "/undo" back** | Critical safety feature for destructive edits; 227 👍 | Persistent pleas since January; absence hurts confidence for non-git workflows |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage while "thinking" due to tiny animation** | Performance regression on Apple Silicon; GPU burn for purely cosmetic effect | Niche but emblematic of polish gaps; users profiling with Activity Monitor |
| [#11956](https://github.com/openai/codex/issues/11956) | **Multi-repo support** | Competitive parity with Claude Code's cross-directory workflows | 19 👍 understates impact; CLI users staying on CLI specifically for this |
| [#19909](https://github.com/openai/codex/issues/19909) | **Make "Chats" project directory configurable** | `~/Documents/Codex` hardcoded; iCloud sync corruption risk for code | Practical DevOps concern; small 👍 but zero-workaround blocker |
| [#22085](https://github.com/openai/codex/issues/22085) | **Windows: Many Git processes causing sustained high CPU** | Recent regression; manual-Git users penalized by background scanning | 9 👍, active this week; Windows performance debt accumulating |
| [#22696](https://github.com/openai/codex/issues/22696) | **Failed to authorize remote control** | Fresh 5/14 report on new build (26.513); remote-control launch friction | 9 👍 in <24h; pairs with [#22700](https://github.com/openai/codex/issues/22700) and [#22715](https://github.com/openai/codex/issues/22715) showing systemic remote pairing failures |
| [#20769](https://github.com/openai/codex/issues/20769) | **Codex App resets Speed from Fast to Standard after restart** | Preference non-persistence; daily friction for Pro subscribers | 7 👍; quality-of-life regression in recent builds |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#22729](https://github.com/openai/codex/pull/22729) | **Let interrupted shell commands clean up before kill** | SIGTERM-before-SIGKILL grace period for cancelled shell tools | Fixes data corruption risk from hard-killed long-running commands; production reliability |
| [#22720](https://github.com/openai/codex/pull/22720) | **Add SubagentStart and SubagentStop hooks** | Context-injection hooks for thread-spawned subagents | Enables plugin ecosystem to observe/intercept agent delegation; extensibility foundation |
| [#22552](https://github.com/openai/codex/pull/22552) | **Remove plugin hooks feature flag** | Graduates plugin hooks from gated to default behavior | Signals confidence in plugin architecture; reduces configuration matrix |
| [#22728](https://github.com/openai/codex/pull/22728) | **Move pending input into input queue** | Consolidates scattered input state (Session/TurnState/mailbox) into single queue | Critical refactoring for race-condition prevention; TUI reliability |
| [#22683](https://github.com/openai/codex/pull/22683) | **permissions: resolve profile identity with constraints** | Invariant cleanup for permission profile system | Part of 4-PR permissions stack; enterprise RBAC precursor |
| [#22610](https://github.com/openai/codex/pull/22610) | **permissions: support workspace roots in profiles** | Separates raw profiles from runtime-effective profiles with workspace scoping | Enables "read-only here, writeable there" policies; monorepo security |
| [#22722](https://github.com/openai/codex/pull/22722) | **persist thread artifacts in app-server runtime** | SQLite-cached artifact storage with patch-based persistence in rollout metadata | Foundation for cross-session build artifact inspection; CI integration potential |
| [#22710](https://github.com/openai/codex/pull/22710) | **Prevent Esc from dismissing or rewinding `/side`** | Fixes [#22599](https://github.com/openai/codex/issues/22599): Esc key collision between side-chat dismissal and queued steering | UX polish with immediate community-requested fix |
| [#22718](https://github.com/openai/codex/pull/22718) | **Add local thread turn item views** | Response-only/event-only/response-plus-event view modes for local rollout storage | Decouples client from app-server for offline/historical browsing; performance |
| [#22686](https://github.com/openai/codex/pull/22686) | **Add Windows ARM64 cross-compiled archive path** | CI infrastructure for Windows on ARM builds | Hardware diversity; Surface Pro X and Snapdragon X Elite support |

---

## 5. Feature Request Trends

| Trend | Evidence | Maturity |
|-------|----------|----------|
| **Remote/mobile-to-desktop orchestration** | [#9224](https://github.com/openai/codex/issues/9224), [#21849](https://github.com/openai/codex/issues/21849), [#22707](https://github.com/openai/codex/issues/22707), [#22692](https://github.com/openai/codex/issues/22692) | Partially shipped; pairing/authorization UX still rough per 5/14 bug surge |
| **Multi-repo / workspace-scoped context** | [#11956](https://github.com/openai/codex/issues/11956), [#22610](https://github.com/openai/codex/pull/22610) stack | Infrastructure landing in permissions refactor; CLI parity coming |
| **Undo/safety mechanisms for destructive ops** | [#9203](https://github.com/openai/codex/issues/9203) | Stalled; no PR activity visible |
| **Configurable storage paths** | [#19909](https://github.com/openai/codex/issues/19909) | Straightforward; awaiting prioritization |
| **Per-chat profiles for skills/plugins/rules** | [#22692](https://github.com/openai/codex/issues/22692) | Emerging; would complement recent plugin hooks graduation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Cost opacity / runaway token burn** | Chronic | Critical | [#14593](https://github.com/openai/codex/issues/14593) — 575 comments, 6+ months |
| **Remote control auth/pairing fragility** | Spiking (3 new issues 5/14) | High | [#22696](https://github.com/openai/codex/issues/22696), [#22700](https://github.com/openai/codex/issues/22700), [#22715](https://github.com/openai/codex/issues/22715) |
| **Windows-specific performance regressions** | Recurring | Moderate-High | [#22085](https://github.com/openai/codex/issues/22085), [#21862](https://github.com/openai/codex/issues/21862), clippy fixes in [#22687](https://github.com/openai/codex/pull/22687) |
| **Preference/state non-persistence** | Intermittent | Moderate | [#20769](https://github.com/openai/codex/issues/20769), [#17413](https://github.com/openai/codex/issues/17413) |
| **macOS update/permissions reliability** | Steady | Moderate | [#17413](https://github.com/openai/codex/issues/17413), [#21846](https://github.com/openai/codex/issues/21846) |
| **Context compaction failures at scale** | Emerging | Moderate | [#22467](https://github.com/openai/codex/issues/22467) — GPT-5.5 xhigh specific |

---

*Digest compiled from openai/codex GitHub activity 2026-05-14/15. For corrections or additions, reply in thread.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-15

## Today's Highlights

The v0.44.0 nightly landed with a skills-based composition refactor for the repo agent and CI reliability fixes. Security and stability dominated the merge queue: dependency bumps for critical CVEs, A2A server policy parity, and multiple file-handling edge cases resolved. Meanwhile, capacity issues (429 errors) remain the top user-facing pain point with 104 comments and growing.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.44.0-nightly.20260514](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260514.g77078b3e8)** | CI fix replacing brittle `--no-tag` logic; incremental refactor of repo agent toward skills-based composition |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#24937](https://github.com/google-gemini/gemini-cli/issues/24937)** | Tracking: 429 / Capacity Issues | Centralized tracker for rate-limiting and capacity errors; affects basic usability at scale | 🔥 **104 comments** — highest engagement by far; zero upvotes suggests frustration fatigue |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | Assess AST-aware file reads, search, mapping | EPIC for precision tooling — could reduce token waste and misaligned reads | 7 comments; recognized as foundational quality work |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** | Robust component-level evaluations | Follow-up to behavioral evals; 76 tests running across 6 models — reliability at scale | 6 comments; infra-critical |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Subagent recovery after MAX_TURNS reported as GOAL success | Silent failures corrupt trust in agent autonomy; misreports interruption as completion | 6 comments, 2 👍; needs retesting |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | Gemini does not use skills and sub-agents enough | Core UX gap — users build skills that go unused without explicit prompting | 6 comments; anecdotal but widely felt |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | Browser subagent fails on Wayland | Linux display server compatibility blocking headless/automated workflows | 4 comments, 1 👍; platform parity issue |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell execution hangs with "Waiting input" after completion | Deadlock in basic shell interaction — breaks fundamental CLI loop | 3 comments, 3 👍; high severity |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** | Model creates tmp scripts in random spots | Workspace hygiene; cleanup overhead blocks clean commits | 3 comments; workflow friction |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** | Browser Agent ignores settings.json overrides | Configuration system partially broken for browser subagent | 3 comments; settings integrity |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** | Deterministic redaction + reduce Auto Memory logging | Security: secrets hit model context before redaction; logging leakage | 2 comments; privacy-critical |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **[#27071](https://github.com/google-gemini/gemini-cli/pull/27071)** | Update default auto routing | Bumps flash-lite alias to `gemini-3.1-flash-lite`; modernizes model registry | Open |
| **[#27078](https://github.com/google-gemini/gemini-cli/pull/27078)** | Fix text duplication in AfterAgent hook | Eliminates double-spaced and massively duplicated `prompt_response` output from chunk-joining bug | Open, bot-authored |
| **[#26939](https://github.com/google-gemini/gemini-cli/pull/26939)** | Fix snapshot recovery across sessions | Resolves context/session continuity failures | Open |
| **[#26951](https://github.com/google-gemini/gemini-cli/pull/26951)** | Implement issue-fixer skill + mandate selection | Bot skill expansion: manual mandate selection (auto/issue-fixer/metrics/interactive) | Open |
| **[#27073](https://github.com/google-gemini/gemini-cli/pull/27073)** | A2A server default policy loading | Security parity: A2A server inherits CLI's read-only default policies | Open |
| **[#27077](https://github.com/google-gemini/gemini-cli/pull/27077)** | Security dependency updates | Critical/high CVE fixes in `@grpc/grpc-js` and `@opentelemetry` packages | Open |
| **[#27070](https://github.com/google-gemini/gemini-cli/pull/27070)** | Optimize VirtualizedList + scrolling checkpoint | Performance: terminal rendering and scroll optimization | Open |
| **[#27054](https://github.com/google-gemini/gemini-cli/pull/27054)** | Windows image pasting + clipboard styling | UX parity: bracketed-paste image support in Windows Terminal | Open |
| **[#27047](https://github.com/google-gemini/gemini-cli/pull/27047)** | AfterAgent prompt_response matches streamed answer | Correctness: hook output mirrors actual streamed text, avoids rebuild corruption | Open |
| **[#25900](https://github.com/google-gemini/gemini-cli/pull/25900)** | Prefer pwsh.exe over Windows PowerShell 5.1 | Fixes embedded quote stripping in shell commands; long-standing Windows issue | Open, help wanted |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | #22745, #22746, #22747 | High — triangulated investigation across reads, search, and codebase mapping |
| **Agent self-awareness / introspection** | #21432 (accurate flags/hotkeys), #22672 (discourage destructive ops) | Growing — meta-cognition as reliability strategy |
| **Backgroundable local agents** | #22741 (Ctrl+B for subagents) | Moderate — 2 👍; async workflow enabler |
| **Browser agent resilience** | #22232 (session takeover/lock recovery), #22267 (settings override) | Active — stability before features |
| **Build-fix delegation to Generalist** | #22602 | Niche but targeted — token efficiency for repetitive fixes |

---

## Developer Pain Points

| Theme | Manifestations | Severity |
|-------|---------------|----------|
| **Capacity / rate limiting (429s)** | #24937 (tracker), scattered reports | 🔴 **Critical** — blocks basic usage, 104-comment megathread |
| **Agent reliability & honesty** | #22323 (false success on MAX_TURNS), #21968 (skills unused), #22093 (unauthorized subagents) | 🔴 **Critical** — trust erosion in autonomous behavior |
| **Shell / terminal robustness** | #25166 (hanging), #21461 (no aliases), #25900 (PowerShell quoting), #21924 (resize flicker) | 🟡 **High** — core interaction layer fragility |
| **Auto Memory quality & security** | #26525 (redaction timing), #26523 (invalid patches), #26522 (infinite retry), #26516 (tracker) | 🟡 **High** — memory system immaturity |
| **Browser agent platform gaps** | #21983 (Wayland), #22267 (ignored settings) | 🟡 **Moderate-High** — Linux/headless environments underserved |
| **Workspace hygiene** | #23571 (tmp scripts scattered) | 🟢 **Moderate** — cleanup friction, easily workaroundable |

---

*Digest compiled from google-gemini/gemini-cli public activity. For full context, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-15

---

## 1. Today's Highlights

GitHub shipped three rapid-fire patches for v1.0.48 within 24 hours, addressing token billing transparency, glob pattern parsing in instruction files, and CJK/emoji rendering. Meanwhile, Windows ARM64 users hit a critical native addon failure on v1.0.48-0, generating urgent community reports that were partially resolved in subsequent hotfixes.

---

## 2. Releases

### [v1.0.48](https://github.com/github/copilot-cli/releases/tag/v1.0.48) (2026-05-14)
- **Token price transparency**: Model picker now displays actual token prices for token-based billing users, replacing opaque dot indicators
- **Glob pattern fix**: Instruction files with unquoted glob patterns in `applyTo` frontmatter (e.g., `applyTo: **/*.ts`) now apply correctly
- **CJK/emoji rendering**: Fixed blank gaps between lines when input contains CJK characters or emoji

### [v1.0.48-1](https://github.com/github/copilot-cli/releases/tag/v1.0.48-1) (2026-05-14)
- **Fixed**: CJK/emoji rendering gaps (duplicate of main release fix)

### [v1.0.48-2](https://github.com/github/copilot-cli/releases/tag/v1.0.48-2) (2026-05-14)
- **Fixed**: Unquoted glob patterns in `applyTo` frontmatter (duplicate of main release fix)

> **Note**: The rapid v1.0.48-1 and v1.0.48-2 patches suggest GitHub deployed hotfixes for specific distribution channels or cherry-picked fixes before the main release propagated.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3181](https://github.com/github/copilot-cli/issues/3181) | Remove automatic co-author to Copilot CLI commits | Philosophical debate: Should AI tools be credited as co-authors? User argues AI is "a tool and nothing else," not a collaborative partner. | **CLOSED** after 6 comments; no upvotes suggests polarizing but niche concern |
| [#3288](https://github.com/github/copilot-cli/issues/3288) | [Linux] Copilot CLI crashes on editing big diffs | **Production blocker**: Rust runtime panics on 14,950-line files with 850+ insert hunks. Affects large-scale refactoring workflows. | **CLOSED** after 6 comments; 1 upvote; Linux stability concern |
| [#3304](https://github.com/github/copilot-cli/issues/3304) | `[ERR_HTTP2_INVALID_SESSION]`: Session destroyed, repeated transient retries | **Reliability crisis**: HTTP/2 session teardown mid-stream kills long reasoning responses. Users lose progress on complex tasks. | **OPEN**, 2 comments; frequent occurrence reported; no workaround |
| [#3306](https://github.com/github/copilot-cli/issues/3306) | Error: Native addon "runtime" not found for win32-arm64 | **Critical platform regression**: Windows ARM64 completely broken post-update. Winget reinstall fails. | **OPEN**, 2 comments, 1 upvote; urgent user impact |
| [#3310](https://github.com/github/copilot-cli/issues/3310) | Windows ARM64: v1.0.48-0 fails with missing native addons | **Same root cause as #3306**, with detailed diagnosis: missing `runtime.node`, `pty.node`, `win32-native.node` prebuilds | **CLOSED**; superseded by #3306 or resolved in later hotfix |
| [#3314](https://github.com/github/copilot-cli/issues/3314) | Significant reduction in context windows (304k → 128k) on v1.0.47 | **Silent capability regression**: Users lose 58% of context window without warning. Breaks large codebase workflows. | **CLOSED** after 2 comments; likely fixed in v1.0.48's `/context` token limit fix |
| [#3330](https://github.com/github/copilot-cli/issues/3330) | macOS: `tls.getCACertificates("system")` adds 5+ seconds to every invocation | **Performance regression**: Synchronous XPC calls to `trustd` on every startup. macOS users pay heavy latency tax. | **OPEN**, 1 comment; root cause identified; needs caching fix |
| [#3328](https://github.com/github/copilot-cli/issues/3328) | Auto-update silently prevents custom agents from loading | **Stealth failure mode**: Update-in-progress breaks agent loading with no user-visible error. Wastes debugging time. | **OPEN**, 0 comments; high severity, low visibility |
| [#3329](https://github.com/github/copilot-cli/issues/3329) | CLI executes prompt before MCP servers finish connecting | **Race condition**: Single-command/CI workflows fail because tool schema isn't ready on first turn. | **OPEN**, 0 comments; affects automation use cases |
| [#1826](https://github.com/github/copilot-cli/issues/1826) | Support multi-root workspaces via `.code-workspace` file | **Ecosystem gap**: CLI ignores VS Code's workspace definitions, missing instruction files in additional roots. 11 upvotes shows sustained demand. | **OPEN** since March; 2 comments, **11 upvotes**; top-voted feature request |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

The absence of visible PR activity suggests GitHub may be using a private development branch or the public PR workflow is not actively used for these rapid hotfixes. All v1.0.48 patches appear to have been directly committed and released without public PR review.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Workspace/IDE integration depth** | #1826 (multi-root workspaces), #3320 (model switching without losing drafts), #3324 (viewport anchoring) | High — users want CLI to respect IDE conventions and preserve state |
| **MCP server reliability & UX** | #2779 (auto token refresh), #2536 (Atlassian re-auth), #3329 (startup race condition), #2394 (xcode failures) | Critical — MCP is core architecture but auth and lifecycle are fragile |
| **Observability & control** | #3326 (session config events), #3305 (org-wide usage monitoring), #3327 (title-bar status indicators), #2372 (disable auto-scroll) | Growing — enterprise and power users need visibility into agent state |
| **Terminal rendering & internationalization** | #3325 (CJK text wrapping), #2372 (scroll control), #3324 (viewport anchoring) | Active — v1.0.48 fixed emoji/CJK but text layout remains problematic |
| **Plugin lifecycle management** | #3331 (auto-update plugins), #2286 (Windows symlink support), #2652 (extension hook bugs) | Emerging — marketplace maturation needs better tooling |

---

## 6. Developer Pain Points

### 🔴 Critical Stability Issues
- **Windows ARM64 native module delivery**: #3306/#3310 show prebuild distribution is broken for emerging architecture. Repeated uninstall/reinstall cycles fail. Suggests CI/CD gap in ARM64 artifact pipeline.
- **HTTP/2 session management**: #3304's mid-stream destruction kills long-running reasoning tasks. Retry logic is insufficient; users need session resumption or graceful degradation.

### 🟡 Authentication & Token Lifecycle
- **MCP OAuth is not production-ready**: #2779 (token expiry mid-workflow), #2536 (Atlassian per-invocation re-auth). "Silent tool failures" on `AADSTS9010010` are debug nightmares. Automatic refresh is essential for autonomous agents.

### 🟢 Configuration & Context Management
- **Context window confusion**: #3314's 304k→128k regression, plus #1826's multi-root workspace gaps, reveal context assembly as opaque and under-documented. Users cannot predict or control what the agent sees.
- **Startup latency**: #3330's 5+ second macOS TLS penalty, combined with #3328's silent update failures, makes CLI feel heavyweight and unpredictable.

### 🔵 Enterprise Governance Gaps
- **No organizational visibility**: #3305 highlights blind spot for Copilot CLI adoption, skill usage, and reliability at scale. Contrast with VS Code Copilot's richer telemetry.

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-05-14.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-15

## 1. Today's Highlights

The v1.44.0 release landed with telemetry refinements, but community attention is dominated by **K2.6 model reliability crises**—multiple critical reports of `429 engine_overloaded` errors rendering the CLI unusable for paid subscribers. On the engineering front, contributor `ktwu01` submitted a concentrated batch of quality-of-life fixes (install script robustness, README clarity, security hardening) while `he-yufeng` drove several targeted bug fixes for Windows console handling, notification hooks, and web upload state persistence.

---

## 2. Releases

**v1.44.0** ([release](https://github.com/MoonshotAI/kimi-cli/pull/2262))
- Telemetry refactor: "btw side question" interactions now tracked as `tool_call` events ([PR #2257](https://github.com/MoonshotAI/kimi-cli/pull/2257))
- Routine version bump with no user-facing feature changes

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2077](https://github.com/MoonshotAI/kimi-cli/issues/2077) | **K2.6 model overloaded — unusable under normal load** (Critical) | 10-day-running incident; Allegretto-tier subscriber completely blocked. Suggests capacity provisioning failure on Moonshot's highest-tier model. | 🔥 10 comments, sustained activity |
| [#2268](https://github.com/MoonshotAI/kimi-cli/issues/2268) | **Insane degradation since model change** | Regression narrative: v1.30.0 + `kimi-for-coding` worked reliably; v1.43.0 + `k2.6` fails repeatedly. Model swap, not CLI version, appears causal. | 👍 2, growing |
| [#2209](https://github.com/MoonshotAI/kimi-cli/issues/2209) | **Cloud-deployed kimiclaw: 48h+ of 429 engine_overloaded** | Remote server workflows completely broken; user already provided diagnostics. Indicates systemic overload, not client-specific throttling. | 👍 3 |
| [#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) | **Subagent infinite loop** | `kimi-for-coding` re-reads same file hundreds of times. Core agent orchestration bug affecting task reliability. | 5 comments, long-running |
| [#2279](https://github.com/MoonshotAI/kimi-cli/issues/2279) | **Web mode: historical images re-sent after session restore** | Duplicate context bloats token usage and degrades responses. State management gap in web↔CLI sync. | Fresh, has fix in flight |
| [#2281](https://github.com/MoonshotAI/kimi-cli/issues/2281) | **Notification hook never fires** | Documentation promises desktop notifications for approvals; implementation silently broken. Trust gap between docs and behavior. | Fresh |
| [#2273](https://github.com/MoonshotAI/kimi-cli/issues/2273) | **[Security] Auto-updater lacks integrity verification, uses unsafe tarfile.extractall** | Supply-chain attack surface: no SHA256/signatures, path traversal vulnerability (CVE-2007-4559). Professional users cannot safely deploy. | 👍 0 but critical severity |
| [#2252](https://github.com/MoonshotAI/kimi-cli/issues/2252) | **Request /goal command + Codex-compatible coding plan export** | Feature parity pressure from OpenAI Codex and Claude Code 138. Ecosystem lock-in risk if Kimi plans remain siloed. | 👍 1 |
| [#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269) | **Remote control / multi-device session handoff** | Mobility workflow gap; competitors solving this. Long-tail but high-value for professional users. | Fresh |
| [#2157](https://github.com/MoonshotAI/kimi-cli/issues/2157) | **Hard limit of 4 background/subagent tasks blocks multi-agent workflows** | Architectural ceiling on agent scaling; "fails instead of queues" is poor UX for complex automation. | 1 comment |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2289](https://github.com/MoonshotAI/kimi-cli/pull/2289) | **fix: avoid Windows console font reset** | Passes `CREATE_NO_WINDOW` flag in `LocalKaos.exec()` subprocess creation; fixes [#2197](https://github.com/MoonshotAI/kimi-cli/issues/2197) with regression test | Open |
| [#2288](https://github.com/MoonshotAI/kimi-cli/pull/2288) | **fix: avoid resending web uploads after restart** | Persists `.sent` marker across `SessionProcess` restarts; fixes [#2279](https://github.com/MoonshotAI/kimi-cli/issues/2279) | Open |
| [#2287](https://github.com/MoonshotAI/kimi-cli/pull/2287) | **docs(readme): add prerequisites list to Development section** | Closes contributor onboarding gap; fixes [#2274](https://github.com/MoonshotAI/kimi-cli/issues/2274) | Open |
| [#2286](https://github.com/MoonshotAI/kimi-cli/pull/2286) | **fix(install): source uv env after installing uv** | Bash installer parity with PowerShell; fixes `uv not found` for first-time users. Fixes [#2272](https://github.com/MoonshotAI/kimi-cli/issues/2272) | Open |
| [#2285](https://github.com/MoonshotAI/kimi-cli/pull/2285) | **fix(update): use filter='data' on tarfile.extractall** | PEP 706 defense against path traversal; partial fix for [#2273](https://github.com/MoonshotAI/kimi-cli/issues/2273). Still needs signature verification | Open |
| [#2284](https://github.com/MoonshotAI/kimi-cli/pull/2284) | **fix: fire notification hooks for approvals** | Wires `Notification` hook to `permission_prompt` matcher; fixes [#2281](https://github.com/MoonshotAI/kimi-cli/issues/2281) | Open |
| [#2276](https://github.com/MoonshotAI/kimi-cli/pull/2276) | **feat(soul): add /goal slash command** | Stateful goal management with budget tracking, subcommands (`set`, `pause`, `resume`, `status`, `clear`). Codex parity play; closes [#2218](https://github.com/MoonshotAI/kimi-cli/issues/2218) | Open |
| [#2282](https://github.com/MoonshotAI/kimi-cli/pull/2282) | **fix(mcp): prefix mcp tool names with server name** | Prevents collision when multiple MCP servers expose identical tool names (e.g., `query` from multiple Postgres instances) | Open |
| [#2280](https://github.com/MoonshotAI/kimi-cli/pull/2280) | **feat(toolset): trigger cross-step dedup reminder only after 7 consecutive repeats** | Tunes heuristic to reduce false positives on legitimate repeated tool use while catching stuck loops | Open |
| [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) | **fix(utils): bound broadcast queues and cap web store cache** | Memory leak prevention: bounded `asyncio.Queue` for slow consumers, LRU cache for web sessions instead of unbounded list | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Codex/Claude Code parity** | `/goal` command ([#2252](https://github.com/MoonshotAI/kimi-cli/issues/2252), [#2276](https://github.com/MoonshotAI/kimi-cli/pull/2276)), coding plan export | High — explicit competitive benchmarking |
| **Cross-device workflow continuity** | Session handoff ([#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269)) | Emerging — remote work norm |
| **Agent orchestration scaling** | Configurable background task limits ([#2157](https://github.com/MoonshotAI/kimi-cli/issues/2157)), subagent queueing | Moderate — power-user blocker |
| **MCP ecosystem robustness** | Tool name collision ([#2282](https://github.com/MoonshotAI/kimi-cli/pull/2282)), stderr logging ([#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259), [#2275](https://github.com/MoonshotAI/kimi-cli/pull/2275)) | Active — infrastructure maturation |

---

## 6. Developer Pain Points

**Model Reliability Crisis (K2.6)**
The dominant frustration: `429 engine_overloaded` errors are pervasive across tiers (Allegretto, Moderato, free), platforms (macOS, Linux cloud), and use cases (CLI, kimiclaw). Multiple users report **downgrading to `kimi-for-coding` or v1.30.0** as workaround. Moonshot faces a capacity/quality perception problem with its flagship model.

**Installation & Onboarding Friction**
First-time setup failures cluster around `uv` PATH propagation ([#2272](https://github.com/MoonshotAI/kimi-cli/issues/2272)), missing prerequisite documentation ([#2274](https://github.com/MoonshotAI/kimi-cli/issues/2274)), and buried install commands ([#2271](https://github.com/MoonshotAI/kimi-cli/issues/2271)). `ktwu01`'s PR batch directly addresses this, suggesting the current flow loses contributors before `make prepare`.

**Security Trust Deficit**
The auto-updater's lack of cryptographic verification ([#2273](https://github.com/MoonshotAI/kimi-cli/issues/2273)) is a red flag for enterprise adoption. The `tarfile.extractall` fix ([#2285](https://github.com/MoonshotAI/kimi-cli/pull/2285)) is necessary but insufficient—no SHA256 or code signing remains a gap.

**Subagent Loop Instability**
Infinite loops in subagent execution ([#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927)) and overly aggressive deduplication heuristics (being tuned in [#2280](https://github.com/MoonshotAI/kimi-cli/pull/2280)) indicate the agent runtime still struggles with deterministic task completion.

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-05-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-15

## Today's Highlights

OpenCode v1.14.50 shipped with critical HTTP streaming fixes and proper session busy-state handling, while the community grapples with a wave of TUI renderer failures and ongoing `opencode-go` provider billing errors affecting deepseek-v4 models. Meanwhile, ambitious architectural work advances on native LLM runtimes, Effect-native event systems, and local LAN provider discovery.

---

## Releases

**[v1.14.50](https://github.com/anomalyco/opencode/releases/tag/v1.14.50)** — Core stability release:
- Fixed HTTP event streams closing prematurely after initial connect, restoring live instance update subscriptions
- Added proper busy error responses when sessions attempt concurrent prompt or shell operations
- Hardened `small_model` config validation with graceful fallback instead of crashes

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | **"Preparing write..." infinite loop** | Core workflow blocker — tool execution aborts repeatedly during file writes, rendering basic editing unusable | 66 comments, 30 👍; persistent since January; users cycling retries with no recovery path |
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | **Assistant prefill unsupported with Copilot + Opus 4.6** | Breaks GitHub Copilot integration with Anthropic's latest model; conversation protocol mismatch | 65 comments, 27 👍; active debugging of message sequencing edge cases |
| [#27593](https://github.com/anomalyco/opencode/issues/27593) | **402 Insufficient Balance on opencode-go / ds4-flash** | Billing logic failure despite active subscriptions; follows pattern from [#25209](https://github.com/anomalyco/opencode/issues/25209) | 12 comments, 12 👍; model-specific, not account-wide — suggests provider-side routing bug |
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | **TUI crashes on Alpine Linux: `getcontext` symbol not found** | musl libc incompatibility introduced between 1.14.48→1.14.50; breaks container/embedded deployments | 6 comments; regression flagged immediately after release; ncopa (Alpine maintainer) authored |
| [#6217](https://github.com/anomalyco/opencode/issues/6217) | **Multiple instances of same provider** | Power-user need for account segregation (work/personal OpenRouter, etc.); config architecture limitation | 17 comments, 19 👍; long-standing request with clear UX proposal for grouped provider selection |
| [#26063](https://github.com/anomalyco/opencode/issues/26063) | **Tool execution aborted with LM Studio local models** | Local/self-hosted provider ecosystem fragility; Qwen3.6-specific compatibility gap | 12 comments; reproducible with exact local setup; highlights testing coverage gaps for OSS model backends |
| [#27418](https://github.com/anomalyco/opencode/issues/27418) | **Linux TUI fails to start in foot terminal** | Terminal emulator compatibility regression; 1.14.49-specific, works in kitty/TTY | 10 comments; narrow but disruptive for foot users; bisected to release boundary |
| [#7555](https://github.com/anomalyco/opencode/issues/7555) | **Session Changes showing origin/main diffs** | UX confusion — displays irrelevant upstream changes as session modifications; branch detection logic flawed | 8 comments, 3 👍; affects both Desktop and TUI; undermines trust in change review |
| [#27594](https://github.com/anomalyco/opencode/issues/27594) | **Session permanently stuck post-compaction** | Critical state corruption: auto-compaction orphans tool_use without tool_result, unrecoverable | 2 comments; links to [#14367](https://github.com/anomalyco/opencode/issues/14367) root cause; session-killing severity |
| [#23442](https://github.com/anomalyco/opencode/issues/23442) | **SSE JSON parse failure with GLM-5.1 (Z.AI)** | Provider API non-conformance — model hallucinates SSE syntax into content, unescaped quotes kill parser | 6 comments; upstream vs. client hardening debate; affects Z.AI specifically |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | **Local LAN provider discovery + auto-discover models** | mDNS-based scanning for OpenAI-compatible endpoints on local network; closes long-standing local-first workflow gap | Open |
| [#27114](https://github.com/anomalyco/opencode/pull/27114) | **Preview native LLM runtime stack** | Opt-in bypass of AI SDK for direct native provider streaming; shared `LLMEvent` abstraction; OpenAI Responses native support | Open, beta |
| [#27415](https://github.com/anomalyco/opencode/pull/27415) | **Effect-native core event system** | Typed, versioned, instance-aware pub/sub with legacy bridge; foundational for distributed/session-scoped architectures | Open |
| [#26949](https://github.com/anomalyco/opencode/pull/26949) | **Virtualize session timeline rows** | Granular row-level virtualization replacing full-turn rendering; virtua upgrade for 80+ message session performance | Open, beta |
| [#9545](https://github.com/anomalyco/opencode/pull/9545) | **Unified usage tracking with auth refresh** | Cross-provider OAuth usage aggregation (Claude, Copilot, ChatGPT); `Usage.Service` + HTTP API + SDK regeneration | Open |
| [#8535](https://github.com/anomalyco/opencode/pull/8535) | **Bi-directional cursor-based pagination** | Server/app/TUI/HttpApi cursor pagination for message history; scalable session loading | Open |
| [#7156](https://github.com/anomalyco/opencode/pull/7156) | **Agent default variant handling in TUI/desktop** | Respects agent-configured model variants when supported; fixes silent fallback to base model | Open |
| [#27628](https://github.com/anomalyco/opencode/pull/27628) | **Missing context overflow pattern for OpenAI-compatible providers** | Prevents infinite retry loops on context window exceeded; hardens provider error classification | Open |
| [#27621](https://github.com/anomalyco/opencode/pull/27621) | **Show child sessions in session list** | Fixes `parent_id` sessions being invisible; corrects hierarchical session tree rendering | Open |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile touch optimization** | Touch-first UI adaptations preserving desktop experience; addresses growing mobile/tablet use case | Open |

---

## Feature Request Trends

1. **Provider Multiplicity & Local-First** — [#6217](https://github.com/anomalyco/opencode/issues/6217) (multiple provider instances) and [#27554](https://github.com/anomalyco/opencode/pull/27554) (LAN discovery) signal demand for treating AI providers as composable, swappable infrastructure rather than singleton configs.

2. **TUI Hardening & Customization** — [#27566](https://github.com/anomalyco/opencode/issues/27566) (`--no-banner`), [#22129](https://github.com/anomalyco/opencode/issues/22129) (skills in TUI autocomplete), and multiple session UX fixes reveal TUI as the power-user surface needing parity with web/desktop.

3. **MCP Ecosystem Maturity** — [#27577](https://github.com/anomalyco/opencode/issues/27577) (outputSchema exposure) indicates MCP tool integration is deepening beyond basic call-and-response toward structured contract-aware workflows.

4. **Session State Reliability** — Pagination ([#8535](https://github.com/anomalyco/opencode/pull/8535)), isolation ([#21372](https://github.com/anomalyco/opencode/issues/21372)), and compaction safety ([#27594](https://github.com/anomalyco/opencode/issues/27594)) dominate as users scale from demos to production sessions.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **TUI Renderer Cascade Failures** | 6+ "No renderer found" issues in 24h ([#27452](https://github.com/anomalyco/opencode/issues/27452), [#27522](https://github.com/anomalyco/opencode/issues/27522), [#27591](https://github.com/anomalyco/opencode/issues/27591), etc.) | 🔴 Critical — widespread, cross-platform, likely shared dependency break |
| **opencode-go Billing/Quota Errors** | [#25209](https://github.com/anomalyco/opencode/issues/25209), [#27593](https://github.com/anomalyco/opencode/issues/27593), [#27598](https://github.com/anomalyco/opencode/issues/27598), [#27595](https://github.com/anomalyco/opencode/issues/27595) | 🔴 Critical — erodes trust in managed service; model-specific pattern suggests backend routing |
| **musl/Embedded Linux Regressions** | [#27589](https://github.com/anomalyco/opencode/issues/27589) `getcontext`, [#27418](https://github.com/anomalyco/opencode/issues/27418) terminal-specific failures | 🟡 High — container/Alpine deployments breaking between patch releases |
| **Tool Execution Reliability** | [#11112](https://github.com/anomalyco/opencode/issues/11112) write loops, [#26063](https://github.com/anomalyco/opencode/issues/26063) local model aborts, [#27594](https://github.com/anomalyco/opencode/issues/27594) compaction corruption | 🟡 High — core value proposition (agentic editing) unstable |
| **Provider-Specific Quirks** | [#13768](https://github.com/anomalyco/opencode/issues/13768) Copilot prefill, [#23442](https://github.com/anomalyco/opencode/issues/23442) Z.AI SSE, [#23926](https://github.com/anomalyco/opencode/issues/23926) Bedrock thinking blocks | 🟡 High — N×M provider×model matrix testing burden visible |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-15

## Today's Highlights

The Pi project is in heavy refactoring mode, with maintainers closing numerous issues under the `closed-because-refactor` and `closed-because-bigrefactor` labels as they consolidate toward a major architectural overhaul. Meanwhile, Kimi K2.6 integration issues dominate the bug report pipeline, with multiple distinct 400-error patterns emerging from reasoning content handling in the OpenCode Go provider. The community also saw a critical fix land for browser compatibility in the agent package after a Node-only module regression broke the web UI example entirely.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4251](https://github.com/earendil-works/pi/issues/4251) | **Kimi k2.6: `reasoning_content` missing in assistant tool call message** | Blocks all tool-use workflows with Kimi K2.6's reasoning mode; affects OpenCode Go provider specifically. Root cause appears to be incomplete reasoning payload serialization in multi-turn agent loops. | 10 comments, 3 👍 — active debugging with user-provided traces; tagged for big refactor |
| [#2023](https://github.com/earendil-works/pi/issues/2023) | **Add `pi.runWhenIdle()` for post-settlement scheduling** | Extension API gap: current `sendUserMessage` with `deliverAs: "followUp"` races against agent state, causing reload-runtime and similar patterns to fail unpredictably. | 10 comments, 2 👍 — marked `inprogress` and `possibly-openclaw-clanker`; core architecture concern |
| [#2733](https://github.com/earendil-works/pi/issues/2733) | **Backspace/Delete broken in Windows Terminal** | Terminal input regression from 0.62.0→0.64.0; affects daily usability for Windows users. **Closed** after fix verification. | 10 comments — resolved, confirms Windows Terminal compatibility remains fragile |
| [#4514](https://github.com/earendil-works/pi/issues/4514) | **Kimi K2.6: `Extra inputs are not permitted` on `messages[N].reasoning`** | *Different* K2.6 400-error than #4251 — here the provider rejects reasoning fields as unexpected payload. Suggests provider-side schema drift or version mismatch. | 4 comments, 2 👍 — fresh report, same refactor batch |
| [#4307](https://github.com/earendil-works/pi/issues/4307) | **macOS bun binary missing `@mariozechner/clipboard` dep** | Image paste broken in production builds; native clipboard module not bundled, no shell fallback on macOS. Reproducible via `mise` install path. | 4 comments — platform-specific packaging debt in Bun compilation pipeline |
| [#4315](https://github.com/earendil-works/pi/issues/4315) | **package-lock.json missing resolved/integrity since v0.74.0** | Breaks reproducible builds for Nix and offline CI; registry metadata stripped from lockfile. **In progress** with weekend refactor tags. | 3 comments, 6 👍 — highest vote count in batch; supply-chain/build reproducibility concern |
| [#4501](https://github.com/earendil-works/pi/issues/4501) | **pnpm 11: repeated global install on every startup** | Boot-time performance regression; `settings.json` package declarations not reconciled against pnpm 11's changed global list format. | 3 comments — package manager compatibility matrix widening |
| [#4519](https://github.com/earendil-works/pi/issues/4519) | **Edit timeout after 5 minutes with "terminated"** | Hard timeout regression in recent versions (0.72+); breaks long-running file operations. No configuration escape hatch. | 2 comments — critical workflow disruption, no workaround stated |
| [#4522](https://github.com/earendil-works/pi/issues/4522) | **Anthropic streaming not decompressed on Node.js v26** | Forward-compatibility break; Node v26 changes response object shape, empty Headers break gzip detection in `@mariozechner/pi-ai`. | 2 comments — runtime version support gap |
| [#4505](https://github.com/earendil-works/pi/issues/4505) | **MiMo models: `reasoning_content` not preserved in multi-turn tool use** | Pattern match to K2.6 issues — Xiaomi's MiMo provider hits identical 400 error on reasoning payload in tool-call chains. Suggests systemic reasoning-content lifecycle bug across providers. | 2 comments, 1 👍 — emerging provider-class issue |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#4458](https://github.com/earendil-works/pi/pull/4458) | **Add Windows ARM64 Binary Output** | Native ARM64 Windows builds; bumps minimum Bun to 1.3.10 for platform support. Expands hardware coverage for Surface/X Elite devices. | **Merged** |
| [#4516](https://github.com/earendil-works/pi/pull/4516) | **Fix blocked edit tool call error styling** | Visual bug: blocked edits rendered as successful (green) instead of failed (red) in TUI. Corrects user trust in tool-call status indicators. | **Merged** |
| [#4486](https://github.com/earendil-works/pi/pull/4486) | **OpenAI Codex SSE: prefer `retry-after` headers** | Respects server-side backpressure signals (`retry-after-ms`, `retry-after`) instead of fixed fallback timeouts. Reduces 429 loops and improves rate-limit handling. | **Merged** |
| [#4463](https://github.com/earendil-works/pi/pull/4463) | **Make `markdown.ts` robust to large files** | Fixes `RangeError: Invalid array length` from spread operator limit (65,535 args) on large markdown. Replaces spread with safer array construction. | **Merged** |
| [#4521](https://github.com/earendil-works/pi/pull/4521) | **Split browser-safe and Node-only agent entries** | Critical fix: `node:*` modules in main entry broke `packages/web-ui/example` entirely (blank page). Separates entry points for bundler compatibility. | **Merged** |
| [#4518](https://github.com/earendil-works/pi/pull/4518) | **Daily upstream-sync workflow** | Automated fork maintenance: cron-based PR from upstream with conflict detection and labeling. Reduces manual merge overhead for downstream maintainers. | **Merged** |

---

## Feature Request Trends

1. **Agent lifecycle hooks** — `runWhenIdle()` (#2023) exemplifies demand for explicit extension points around agent state transitions, not just message-passing primitives.

2. **Reasoning content transparency** — Multiple issues request better control over reasoning payload visibility: suppress warnings (#4534), case-insensitive tool names (#4517), and conflict resolution for overlapping tools (#4533).

3. **Keyboard/input customization** — Hardcoded hints (#4508) and broken keybindings (#4520, #2733) signal TUI input layer needs deeper configurability.

4. **Package ecosystem robustness** — Tool name collisions (#4533), dependency bundling gaps (#4307, #4528), and lockfile integrity (#4315) point to packaging as scaling bottleneck.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Refactor-driven issue closure without migration path** | 15+ issues tagged `closed-because-refactor` or `closed-because-bigrefactor` in 24h; users report regressions re-emerging or losing tracking | High — community trust risk |
| **Reasoning-content handling across providers** | #4251, #4514, #4505 — K2.6 and MiMo both hit 400s; suggests abstraction layer insufficient for provider-specific reasoning schemas | High — blocks model adoption |
| **Bun compilation / bundling edge cases** | #4307 (clipboard), #4490 (`proxy-from-env`), #4521 (Node-only modules) — production binaries differ behaviorally from dev | Medium-High — deployment reliability |
| **pnpm version compatibility** | #4501 (pnpm 11 global install loop) — package manager churn not abstracted | Medium |
| **Timeout configurability** | #4519 (5min edit hard limit) — no user-visible knob for long operations | Medium |
| **Frontmatter/parser strictness** | #4532 — Pi rejects valid Claude Code agent files; interoperability friction with competing tools | Medium |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-15

## 1. Today's Highlights

The Qwen Code community is actively pushing toward a production-ready daemon architecture with competing proposals for `qwen serve` modes, while grappling with critical stability issues including memory exhaustion crashes and broken tool call registries. Two significant UX improvements—session forking and skill priority sorting—landed as paired issues and PRs, reflecting accelerated feature development alongside urgent bug triage.

---

## 2. Releases

**No releases in the last 24 hours.** The nightly release `v0.15.10-nightly.20260514.d343e2c15` [failed](https://github.com/QwenLM/qwen-code/issues/4128) due to workflow errors, blocking automated distribution.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3730](https://github.com/QwenLM/qwen-code/issues/3730) | Auto-stop task regression | Breaks long-running automation workflows that previously ran for weeks; indicates behavioral change in recent versions | Closed after 8 comments, root cause unclear—user reported P1 severity |
| [#3926](https://github.com/QwenLM/qwen-code/issues/3926) | Input editing/selection gaps | Missing `Ctrl+Backspace`, text selection, and cut/paste cripples interactive CLI productivity | 7 comments, `welcome-pr` tagged—clear community demand for TUX improvements |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | Daemon mode architecture proposal | wenshao's 14-chapter design series is becoming the de facto reference for `qwen serve`; Stage 1 merged | 5 comments, 👍1—established as foundational roadmap item |
| [#4116](https://github.com/QwenLM/qwen-code/issues/4116) | Critical session error | Unhandled exception with Cyrillic UI strings suggests localization-related crash in session management | 4 comments, no repro yet—needs urgent triage |
| [#4156](https://github.com/QwenLM/qwen-code/issues/4156) | `qwen --serve` Mode A proposal | Complements #3803 with concrete 3-phase plan for TUI+HTTP daemon coexistence; addresses "only headless exists" gap | 3 comments, fresh—active architectural debate |
| [#4152](https://github.com/QwenLM/qwen-code/issues/4152) | Ollama connection failures | Local LLM integration broken for macOS users; `curl` works but Qwen Code doesn't—suggests client-side regression | 3 comments, reported by multiple users implicitly |
| [#4139](https://github.com/QwenLM/qwen-code/issues/4139) | Invalid tool result ID error | Minimax provider-specific bug corrupts tool call state, rendering sessions permanently unusable | 2 comments, "后续任何新的对话都无法执行"—session killer severity |
| [#4149](https://github.com/QwenLM/qwen-code/issues/4149) | JS heap OOM crash | Node.js hitting ~4GB heap during normal operation; second OOM report in 24h (#4134) confirms pattern | 2 comments, reproducible on v0.15.11 |
| [#4141](https://github.com/QwenLM/qwen-code/issues/4141) | Context compression not working | Long-context model users see spinning notification with no actual compression—memory pressure unrelieved | 2 comments, Russian report—international user base affected |
| [#4135](https://github.com/QwenLM/qwen-code/issues/4135) | Legacy tool name migrations broken | `task`→`agent`, `replace`→`edit` renames fail at dispatch—breaks backward compatibility for model outputs | 0 comments, fresh—silent breakage risk for existing integrations |

---

## 4. Key PR Progress

| # | Title | Feature/Fix | Status |
|---|-------|-------------|--------|
| [#4113](https://github.com/QwenLM/qwen-code/pull/4113) | 1 daemon = 1 workspace refactor | Reverses Stage 1's multi-workspace routing to isolation model per §02 of daemon design; critical for security boundaries | Open, wenshao |
| [#4160](https://github.com/QwenLM/qwen-code/pull/4160) | Extract `createInMemoryChannel` helper | Pure refactor enabling Mode A daemon (#4156); zero behavior change, unblocks downstream work | Open, doudouOUC |
| [#3828](https://github.com/QwenLM/qwen-code/pull/3828) | Standalone hosted install/uninstall | Eliminates npm dependency for enterprise deployments; adds checksum verification and OSS publishing | Open, yiliang114 |
| [#4107](https://github.com/QwenLM/qwen-code/pull/4107) | Text JSON fallback in `generateJson` | Fixes schema function call absence with visible-text parsing; preserves thought parts | Open, Jerry2003826 |
| [#4064](https://github.com/QwenLM/qwen-code/pull/4064) | File restoration in `/rewind` | Closes #3697; ports claude-code's `fileHistory` for true undo capability beyond conversation truncation | Open, doudouOUC |
| [#4161](https://github.com/QwenLM/qwen-code/pull/4161) | `/improve` self-improve command | Meta-coding feature: Qwen Code improves its own codebase in isolated git worktrees | Open, DragonnZhang |
| [#3865](https://github.com/QwenLM/qwen-code/pull/3865) | Persist channel sessions across restarts | Fixes `AcpBridge.loadSession()` always returning undefined; Ctrl+C no longer destroys context | Open, Mr-Maidong |
| [#4097](https://github.com/QwenLM/qwen-code/pull/4097) | Telemetry: interaction spans + sensitive attributes | Claude Code parity for observability; enables prompt/tool I/O tracing when opted in | Open, doudouOUC |
| [#4159](https://github.com/QwenLM/qwen-code/pull/4159) | `--fork-session` resume flag | Implements #4158; branches existing sessions for exploration without losing original context | Open, qqqys |
| [#4070](https://github.com/QwenLM/qwen-code/pull/4070) | Code-split `lowlight` for startup perf | Cuts 36–60ms V8 parse cost from critical path; ~1.5MB syntax highlighter loaded on demand | Open, chiga0 |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Daemon/server architecture** | #3803, #4156, #4113, #4160, #4132 | 🔥 Highest—competing proposals converging on production serve mode |
| **Session management enhancements** | #4158, #4159, #4085, #3865 | Strong—forking, persistence, history control |
| **Skill system extensibility** | #4136, #4155, #4154, #4009 | Moderate—priority sorting, bailian plugin, frontmatter expansion |
| **Configuration granularity** | #4091, #4062, #4138, #4137 | Steady—local context files, custom plans dirs, provider types, revert dynamic commands |
| **Telemetry/observability** | #4097 | Emerging—enterprise readiness signal |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Memory exhaustion (OOM)** | 3 reports in 24h (#4149, #4134, #4116-related) | 🔴 Critical | v0.15.11 regression suspected; Node 25.9.0, 24.13.0, 26.0.0 all affected |
| **Tool/registry brittleness** | 2 distinct failures (#4139, #4135) | 🔴 Critical | Legacy name migrations and provider-specific ID corruption |
| **Node.js version compatibility** | #4140 (Node 26 broken), #4134 (Node 25) | 🟡 High | Fetch layer instability across Node versions |
| **Provider integration gaps** | Ollama (#4152), Minimax (#4139), DashScope private gateways (#4138, #4157) | 🟡 High | Enterprise proxy and local LLM scenarios under-supported |
| **Interactive CLI UX friction** | #3926 (input editing), #4142 (language switch requires restart) | 🟢 Moderate | ink 7 migration debt, settings hot-reload missing |
| **Release pipeline reliability** | #4128 (nightly failed) | 🟢 Moderate | Blocking automated testing and distribution |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-05-14 to 2026-05-15.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-15

---

## 1. Today's Highlights

The project shipped **v0.8.37** with a concentrated bug-bash addressing terminal state corruption, Windows rendering glitches, and package manager friction. Hunter (Hmbown) directly merged **8 PRs** in 24 hours, signaling an aggressive stabilization push ahead of broader feature work. Community energy remains high with 40 active issues and 50 PRs in motion, though a persistent naming/branding debate continues around DeepSeek-only vs. multi-provider support.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **[v0.8.37](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.37)** | 2026-05-14 | Bug-bash release: fixes terminal raw-mode cleanup on SIGINT, Windows PowerShell flicker, pnpm postinstall hangs, OpenAI-compat provider payload strictness, and API key validation ordering. |
| **[v0.8.36](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.36)** | 2026-05-13 | Preceding stable release; v0.8.37 supersedes immediately. |

**Install:** `npm install -g deepseek-tui` (recommended) or `docker run --rm -it ghcr.io/hmbown/deepseek-tui`

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|--------------|
| **[#978](https://github.com/Hmbown/DeepSeek-TUI/issues/978)** WeChat group proposal | CLOSED | 11 comments | Highest-comment issue in dataset. Reflects strong Chinese community demand for localized support channels; closed without resolution, suggesting maintainer preference for GitHub-native coordination. |
| **[#1411](https://github.com/Hmbown/DeepSeek-TUI/issues/1411)** Text wrapping failure in novel outline reading | OPEN | 8 comments | Core TUI rendering bug blocking real-world use case (long-form content). User-provided screenshot shows single-line truncation at 2587px width — indicates `wrap_text` implementation gaps. |
| **[#1579](https://github.com/Hmbown/DeepSeek-TUI/issues/1579)** "This color is really ugly" | OPEN | 5 comments | Surfaces accumulating UX debt in default theme. Low-effort high-impact fix; community awaiting palette modernization (see PR #1654). |
| **[#1582](https://github.com/Hmbown/DeepSeek-TUI/issues/1582)** Ubuntu 20.04 crash loop on cargo install | CLOSED | 4 comments | Installation path fragility for Linux source builds. Closed likely via v0.8.37 fixes; cargo `--locked` behavior vs. system dependencies remains a support vector. |
| **[#1293](https://github.com/Hmbown/DeepSeek-TUI/issues/1293)** DeepSeek-only naming/API limitation | OPEN | 4 comments | Strategic product question. Users want OpenAI-compatible local endpoints (Ollama, vLLM); name "DeepSeek-TUI" creates expectation mismatch. Blocker for broader adoption. |
| **[#1606](https://github.com/Hmbown/DeepSeek-TUI/issues/1606)** Homebrew stale at 0.8.27 | CLOSED | 3 comments | Distribution lag affected macOS users for ~10 days. Resolved by PR #1631 (auto-update CI) and v0.8.37 release. |
| **[#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615)** Docker garbled output, requires server reboot | OPEN | 3 comments | Severe severity: user reports forced Linux server restarts. Likely terminal init/cleanup race; PR #1630 (API key pre-validation) may partially address but Docker-specific path needs investigation. |
| **[#1620](https://github.com/Hmbown/DeepSeek-TUI/issues/1620)** Thinking process extremely slow, token-by-token | OPEN | 3 comments | Performance regression or configuration issue with reasoning models. Screenshot shows 1761×1230 capture of sluggish streaming — could be model-side (DeepSeek V4) or TUI buffering. |
| **[#1524](https://github.com/Hmbown/DeepSeek-TUI/issues/1524)** Workspace sandbox boundary too restrictive | CLOSED | 3 comments | Common developer workflow: reading config/logs outside project root. Closed without clear resolution; "read outside, write inside" mode requested repeatedly. |
| **[#1422](https://github.com/Hmbown/DeepSeek-TUI/issues/1422)** Huorong AV flags Linux binary as Trojan/Linux.Agent.bp | OPEN | 1 comment | Security/reputation risk. False positive likely due to Rust binary packing or UPX-like compression, but needs proactive vendor outreach to prevent user panic. |

---

## 4. Key PR Progress

| # | PR | Status | Feature / Fix |
|---|-----|--------|---------------|
| **[#1659](https://github.com/Hmbown/DeepSeek-TUI/pull/1659)** Feishu Helm streaming-card bridge | OPEN | Enterprise integration: adds opt-in CardKit streaming markdown cards for Feishu (Lark), complementing existing plain-text bridge. Targets corporate China deployments. |
| **[#1658](https://github.com/Hmbown/DeepSeek-TUI/pull/1658)** Loop guard blocks as failures | OPEN | Reliability: treats identical-call loop-guard blocks as failed tool results, preventing silent success on blocked operations. Regression test + docs included. |
| **[#1654](https://github.com/Hmbown/DeepSeek-TUI/pull/1654)** Claude Code-style transparent background | OPEN | UX modernization: `Color::Reset` background + refreshed semantic palette (INK, SLATE, ELEVATED, AMBER, GREEN, RED, BLUE, SKY). Directly addresses #1579 theme complaints. |
| **[#1653](https://github.com/Hmbown/DeepSeek-TUI/pull/1653)** Todo list sliding window scroll | OPEN | TUX polish: keeps in-progress todo item visible with "+N earlier, +N more" context, matching Work sidebar behavior. |
| **[#1642](https://github.com/Hmbown/DeepSeek-TUI/pull/1642)** Image vision analysis + first-message 400 fix | OPEN | Major feature: vision bridge with bounding boxes (0–1000 normalized coords), `/model` default reset fix. Restructures `vision/` module for maintainability. |
| **[#1201](https://github.com/Hmbown/DeepSeek-TUI/pull/1201)** Provider-aware `/model` picker | OPEN | Core architecture: dynamic model catalog fetching per provider, replacing static DeepSeek list. Critical for #1293 multi-provider direction. |
| **[#1647](https://github.com/Hmbown/DeepSeek-TUI/pull/1647)** v0.8.38 bug-bash preparation | CLOSED | Meta-fix: aggregates website update path, OpenAI-compat strictness (#1592), pnpm hang (#1637), terminal cleanup, legacy provider aliases. Shipped in v0.8.37. |
| **[#1631](https://github.com/Hmbown/DeepSeek-TUI/pull/1631)** Auto-update Homebrew tap on release | CLOSED | CI/CD: eliminates manual tap lag. Closes #1602; `brew install` now stays current. |
| **[#1630](https://github.com/Hmbown/DeepSeek-TUI/pull/1630)** Pre-validate API key before terminal init | CLOSED | Robustness: prevents garbled escape sequences when `DEEPSEEK_API_KEY` missing. Fixes root cause of #1615-class issues. |
| **[#1655](https://github.com/Hmbown/DeepSeek-TUI/pull/1655)** Legacy Windows console rendering calm | CLOSED | Platform parity: detects unmarked legacy conhosts, disables animations/synchronized output. Supersedes #1591 with broader quirk detection. |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Multi-provider / local model support** | #1293, #1632, #1594, PR #1201, PR #1645 | 🔥 High — naming and static model lists are friction points |
| **Theme / visual customization** | #1579, PR #1654, PR #1653 | Medium — transparent backgrounds, semantic tokens, scroll UX |
| **Workspace / sandbox flexibility** | #1524 | Medium — read-outside-write-inside mode requested |
| **Internationalization & regional UX** | #978, #1607 (¥ currency), #1659 (Feishu) | Growing — China-specific features emerging |
| **Vision / multimodal** | PR #1642 | Early — bounding box analysis landed, needs stabilization |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Terminal state corruption** | 4+ issues (#1583, #1593, #1615, #1630) | Critical | v0.8.37 largely addressed; Docker path (#1615) remains open |
| **Windows rendering / input quirks** | 5+ issues/PRs (#1590, #1559, #1255, PR #1655, PR #1567) | High | Legacy conhost detection now shipped; Kitty keyboard gating fixed |
| **Installation / package manager friction** | 4+ issues (#1606, #1637, #1639, #1582) | High | Auto-brew CI (#1631), pnpm hang fix, FreeBSD compile gate |
| **Model/provider discovery & selection** | 3+ issues (#1293, #1632, #1594) | Medium-High | PR #1201 in flight; #1649 preserves selections across restarts |
| **Performance / streaming latency** | #1620, #1657 | Medium | Unclear if TUI-side or model-side; needs profiling |
| **Security false positives** | #1422 | Medium | AV vendor outreach needed |

---

*Digest compiled from 40 issues and 50 PRs updated 2026-05-14 to 2026-05-15. Data source: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*