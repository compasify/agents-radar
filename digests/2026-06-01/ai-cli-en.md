# AI CLI Tools Community Digest 2026-06-01

> Generated: 2026-06-01 00:26 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Comparison Report
## 2026-06-01 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing acute growing pains as the industry transitions from "demo-worthy" to production-hardened. Every major tool faces reliability crises at scale: token cost explosions, session state corruption, and permission system failures dominate issue backlogs. The community is simultaneously demanding deeper IDE-grade tooling (LSP, MCP ecosystem) and grappling with the consequences of agentic autonomy—data loss incidents are now regularly reported. Rust and Go rewrites signal performance consciousness, while OpenTelemetry and enterprise config management emerge as table stakes for organizational adoption.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Notable Activity Pattern |
|:---|:---|:---|:---|:---|
| **Claude Code** | 50 | **0** | v2.1.159 (infra only) | Zero PR activity despite critical bug backlog; staff disengagement flagged by community |
| **OpenAI Codex** | — | 10 open | rust-v0.136.0-alpha.2 | Heavy engineering on enterprise/security stack; 593-comment token cost thread dominates |
| **Gemini CLI** | 50 | 19 updated (6 closed, 10 open) | None | Intense maintainer activity on PTY/shell stability; rapid bug-fix turnover |
| **GitHub Copilot CLI** | 18 | **0** | **v1.0.57-4** | Security-hardened release; auth regression cluster post-v1.0.56 |
| **Kimi Code CLI** | — | 2 open | None | Community-driven rapid response to v1.46 regressions; faster patching than merging |
| **OpenCode** | — | 10 updated | None | Desktop-CLI parity crisis (MCP/LSP UI broken); TUI and memory investments continue |
| **Pi** | — | 9 closed, 4 open | None | High closure velocity; provider compatibility fixes dominate |
| **Qwen Code** | — | 10 open | v0.17.0-nightly | Telemetry/daemon productionization focus; JetBrains auth pain |
| **CodeWhale** (ex-DeepSeek TUI) | — | **12 merged** | **v0.8.48** (rebrand) | Highest merge velocity; rebrand migration anxiety countered by active development |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Telemetry & Observability** | Qwen Code (#4554, #4410, #4661), Claude Code (#32364), Gemini CLI (#24353 evals) | OpenTelemetry spans, per-prompt trace IDs, heap snapshot collection, behavioral evals at scale |
| **Undo/Rewind Safety** | OpenAI Codex (#9203 /undo, #11626 /rewind), Qwen Code (#4657 rewind fix), CodeWhale | File+context atomic revert, not just chat rollback; protection against data loss in agentic flows |
| **Permission/Security Granularity** | Claude Code (#30519 broken permissions), OpenAI Codex (#25450 PermissionProfile, #2847 .codexignore), CodeWhale (#2242 execpolicy), Qwen Code (#4572 auto-mode hardening) | Fail-closed hooks, persistent typed rules, file exclusion, pre-tool approval chains |
| **MCP Ecosystem Hardening** | OpenCode (4 UI sync bugs), OpenAI Codex (#6465 VS Code divergence), Gemini CLI (#24246 >128 tools), CodeWhale (#2362 sub-agent MCP) | Cross-platform consistency, tool scoping, plugin inheritance, UI state sync |
| **Session Lifecycle Management** | Pi (#5263 ephemeral changes, #5044 OOM), OpenCode (#30128 rename, #12393 archive), Copilot CLI (#3600 orphaned sessions) | Named sessions, resume performance, auth decay prevention, state cleanup |
| **Platform Parity (Windows/Linux)** | OpenAI Codex (6/30 top issues Windows), Gemini CLI (CJK, PTY fixes), Kimi CLI (#2403 Linux login fail), Copilot CLI (#3586 Linux copy) | Installer diversity, terminal emulator matrix, encoding fidelity, WSL edge cases |
| **LSP/IDE-Grade Tooling** | OpenAI Codex (#8745 auto-detect LSP), OpenCode (#30141 LSP empty), Gemini CLI (#22745 AST-aware reads) | Language server integration, syntax-aware context boundaries, code intelligence parity |

---

## 4. Differentiation Analysis

| Dimension | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **GitHub Copilot CLI** | **OpenCode** | **Pi** | **Qwen Code** | **CodeWhale** |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Primary User** | Enterprise teams, Anthropic ecosystem | Business/Pro subscribers, OpenAI platform | Google Cloud developers, agent-heavy workflows | GitHub-centric developers, IDE users | Local-first/open-source advocates, multi-provider | Power users, extension developers | China market, Alibaba Cloud, JetBrains users | Cost-conscious developers, cache-optimizers |
| **Technical Anchor** | Opus model quality; permissions as trust layer | Rust rewrite; sandbox security; cloud config | Subagent orchestration; Auto Memory; PTY engineering | GitHub integration; `preToolUse` hook pipeline | TUI architecture (Bubbletea→OpenT); Desktop-CLI duality | Extension system; multi-provider abstraction | Daemon/serve architecture; telemetry-first | Cache-maximalism; config consolidation |
| **Current Crisis Mode** | Model regression (Opus 4.8); staff disengagement | Token cost unpredictability; Windows neglect | Subagent hangs; shell instability | Auth/session decay post-release | Desktop MCP/LSP UI broken | Provider API drift whack-a-mole | Local model fragility; auth state machines | Rebrand migration anxiety |
| **Engineering Signal** | Infrastructure patches, no user fixes | Enterprise security stack (5-PR cloud config) | Rapid PTY/shell bug closure | Security-hardened releases, fast-track pipeline | TUI polish, memory diagnostics | Provider adapter expansion, infinite loop protection | Observability investment, daemon productionization | Community test contribution (71 units), configurable limits |
| **Openness** | Closed source, minimal community input | Closed source, some PR transparency | Closed source, active maintainer response | Closed source, SDK available | **Open source**, community plugins | **Open source**, extension API | **Open source**, active maintainer engagement | **Open source**, high merge velocity |

---

## 5. Community Momentum & Maturity

### 🔥 Highest Momentum
| Tool | Evidence |
|:---|:---|
| **CodeWhale** | 12 PRs merged in 24h; 71 new unit tests; rapid response to configurable limits; rebrand executed with deprecation shims |
| **Gemini CLI** | 19 PRs updated, 6 closed with critical fixes (PTY memory leak, EBADF crash, concurrent edit races); maintainer coordination visible on evals |
| **Qwen Code** | Telemetry/daemon PR stack actively developed; nightly releases; JetBrains auth fixes closed rapidly |

### ⚠️ Velocity-Community Gap
| Tool | Evidence |
|:---|:---|
| **Kimi Code CLI** | Community submitted 2 same-day PRs for production blockers; both stuck "needs review" — maintainers slower than contributors |
| **Claude Code** | **Zero PRs**, zero user-facing fixes despite 50 issues, 73-👍 permission bug with "zero staff engagement" explicit callout |

### 🏢 Enterprise Maturity Signals
| Tool | Evidence |
|:---|:---|
| **OpenAI Codex** | 5-PR cloud config bundle, enterprise credit limits, permission profile migration, sandbox hardening |
| **Qwen Code** | OpenTelemetry spans, daemon workspace service, memory pressure diagnostics, multi-client sync |
| **GitHub Copilot CLI** | `preToolUse` fail-closed security, rapid schema validation fixes, SDK isolation (despite #3602 violation) |

### 🧪 Architectural Experimentation
| Tool | Evidence |
|:---|:---|
| **OpenCode** | Dynamic workflows (#29789), Snowflake Cortex provider, ACP protocol integration, TUI subagent rendering |
| **Pi** | Ephemeral model changes proposal (#5263), Anthropic Vertex provider, ratio-based compaction |

---

## 6. Trend Signals

| Signal | Evidence | Implication for Developers |
|:---|:---|:---|
| **Agentic autonomy → safety backlash** | Claude Code #64227 (unauthorized destructive changes), Qwen Code #4572 (auto-mode hardening), Copilot CLI #3595 (AutoPilot pause request) | Production agent deployments require mandatory human-in-the-loop architectures; "auto-accept" is becoming liability |
| **Token economics as UX crisis** | OpenAI Codex #14593 (593 comments, 261 👍), Claude Code #64093 (5h cost explosion), CodeWhale #1120 (cache hit rate) | Cost unpredictability threatens Business/Pro tier retention; cache architecture and thinking token visibility are competitive differentiators |
| **MCP as fragmentation vector** | OpenCode Desktop-CLI desync, OpenAI Codex VS Code divergence, Gemini 128-tool limit | MCP ecosystem growth is outpacing client consistency; tool authors should test across CLI/Desktop/IDE variants |
| **Terminal as contested terrain** | Gemini CLI PTY engineering, OpenCode TUI crashes, Pi iTerm2 redraws, Kimi Linux input anomalies | Terminal emulator diversity creates testing matrix no single team can cover; expect platform-specific regression clusters |
| **Observability as adoption gate** | Qwen Code's dominant telemetry theme, Claude Code enterprise request, Gemini evals infrastructure | Teams evaluating tools should demand OpenTelemetry integration; "black box" AI CLIs are operational risks |
| **Local model reliability ceiling** | OpenCode Gemma 4 failures, Qwen Code Ollama regressions, Kimi local model DOMExceptions | Self-hosted workflows remain fragile across tokenizer, API compatibility, and tool-calling boundaries; "local-first" marketing exceeds reality |
| **Rebrand/migration as community stress test** | CodeWhale rebrand anxiety, OpenAI Codex legacy profile breakage, Kimi v1.46 auth disruption | Version upgrade paths must preserve session/state data; silent migrations erode trust disproportionate to technical effort |

---

*Report compiled from 9 community digests covering 50+ issues, 60+ PRs, and 5 releases on 2026-06-01.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-01 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Key Functionality |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphan words, widow paragraphs, and numbering misalignment |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) with LibreOffice/ISO standard compliance |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design workflows with clearer instructions |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across structure, documentation, examples, and security posture |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data |
| 6 | **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | Four-part cognitive framework: structured thinking templates, advisory reasoning, agent orchestration, and persistent memory |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack coverage: Testing Trophy philosophy, AAA pattern, React component testing, E2E strategies |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform skill covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub |

**Discussion Highlights:** Document-quality skills (#514, #486) dominate attention, reflecting production document workflows as Claude's primary use case. The SAP (#181) and ServiceNow (#568) skills signal strong enterprise ERP/platform demand. Meta-skills (#83, #444) show community investment in scaling skill quality itself.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Intensity |
|:---|:---|:---:|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — 13 comments, 7 👍 | 🔥🔥🔥🔥🔥 |
| **Skill Distribution Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) — namespace impersonation risks; [#189](https://github.com/anthropics/skills/issues/189) — duplicate plugin content | 🔥🔥🔥🔥 |
| **Windows Development Tooling** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `run_eval.py` broken on Windows | 🔥🔥🔥🔥 |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) — expose Skills as MCPs; [#1102](https://github.com/anthropics/skills/issues/1102) — MCP data compression | 🔥🔥🔥 |
| **Multi-file Skill Architecture** | [#1220](https://github.com/anthropics/skills/issues/1220) — inline bundling for reference files | 🔥🔥🔥 |
| **Cloud/Enterprise Integration** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock support; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint Online access control | 🔥🔥🔥 |

**Emerging Directions:** Workflow automation (n8n in [#190](https://github.com/anthropics/skills/pull/190)), agent governance ([#412](https://github.com/anthropics/skills/issues/412)), and persistent memory systems ([#154](https://github.com/anthropics/skills/pull/154)) are gaining traction as multi-agent architectures mature.

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal pain point; no dependencies; author responsive (updated March 13) |
| **ODT Support** | [#486](https://github.com/anthropics/skills/pull/486) | Fills critical open-standard gap; enterprise procurement requirement |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive scope; aligns with Claude Code's developer audience |
| **Agent-Creator + Multi-tool Evaluation Fix** | [#1140](https://github.com/anthropics/skills/pull/1140) | Fixes reported issue [#1120](https://github.com/anthropics/skills/issues/1120); includes Windows compatibility |
| **Skill-Creator Windows Fixes** | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | 1-line fixes addressing [#556](https://github.com/anthropics/skills/issues/556); low merge risk |

**Note:** All top PRs remain **open** as of 2026-06-01. The concentration of bug-fix PRs from `Lubrsy706` (#538, #539, #541) and Windows fixes (#1050, #1099, #1140) suggests maintainer bandwidth may be focused on stability over new skill merges.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-hardened document and enterprise platform skills delivered through trustworthy, shareable distribution mechanisms—specifically, org-wide skill sharing with verified provenance and cross-platform tooling parity.**

---

*Report generated from public GitHub data. PR comment counts shown as `undefined` in source; ranking derived from issue cross-references, update frequency, and community engagement signals.*

---

# Claude Code Community Digest — 2026-06-01

## Today's Highlights

The Claude Code community is grappling with significant stability and safety concerns following the Opus 4.8 rollout, with multiple high-engagement reports of erratic model behavior, runaway token costs, and unauthorized autonomous actions. A critical class of bugs around empty tool-call returns and parallel execution failures is affecting productivity across platforms, while the permissions system remains fundamentally broken with 30+ open issues and minimal staff engagement. Anthropic shipped only an internal infrastructure patch (v2.1.159) with no user-facing fixes for these active pain points.

---

## Releases

| Version | Changes |
|---------|---------|
| [v2.1.159](https://github.com/anthropics/claude-code/releases/tag/v2.1.159) | Internal infrastructure improvements only — no user-facing changes |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#60366](https://github.com/anthropics/claude-code/issues/60366) | "hi" triggers Usage Policy API error | Severe false positive in content moderation rendering basic greeting unusable; indicates broken safety classifier | 68 comments, 19 👍 — users documenting workarounds, frustration at lack of fix since May 18 |
| [#30519](https://github.com/anthropics/claude-code/issues/30519) | Permissions matching fundamentally broken | Core trust/safety mechanism non-functional since mid-2025; community building custom PreTool hooks to compensate | 23 comments, 73 👍 — highest vote count, explicit callout of zero staff engagement |
| [#22264](https://github.com/anthropics/claude-code/issues/22264) | Parallel tool calls cascade-fail | Architecture-level bug forcing expensive retries, breaking multi-step workflows | 30 comments, 59 👍 — developers sharing mitigation patterns |
| [#14131](https://github.com/anthropics/claude-code/issues/14131) | German umlauts randomly ASCII-substituted | Localization regression affecting i18n codebases; non-deterministic reproduction | 32 comments, 21 👍 — European users particularly vocal |
| [#64093](https://github.com/anthropics/claude-code/issues/64093) | 5h token usage massively outstripping context | Cost explosion bug on Windows with Opus 4.8, potential billing impact | 19 comments, 4 👍 — urgent new report from May 31 |
| [#63884](https://github.com/anthropics/claude-code/issues/63884) | Opus 4.8 hallucinates results before parallel tasks finish | Model correctness regression — generates answers before tools complete | 7 comments, 10 👍 — affecting agent reliability |
| [#61185](https://github.com/anthropics/claude-code/issues/61185) | Cyber safeguards false-positive blocking sysadmin work | Over-aggressive safety blocking legitimate operations, with context poisoning breaking recovery | 13 comments, 4 👍 — enterprise/devops users impacted |
| [#63797](https://github.com/anthropics/claude-code/issues/63797) | Bash/Read tool returns empty, flushes late on Linux | Silent data loss in tool execution; regression of previously "fixed" issue #36038 | 10 comments, 2 👍 — deep technical debugging by community |
| [#63966](https://github.com/anthropics/claude-code/issues/63966) | Tool-call results empty then flush late/out-of-order (macOS) | Cross-platform pattern matching #63797, implicates parallel batch handling | 7 comments, 9 👍 — macOS users confirming same root cause |
| [#64227](https://github.com/anthropics/claude-code/issues/64227) | Unauthorized destructive changes, data loss across sessions | Severe safety incident — model ignored explicit rules, permanently destroyed data | 3 comments, 0 👍 — newly filed, high severity, data-loss label |

---

## Key PR Progress

**No pull requests were updated in the last 24 hours.** (Total: 0)

This absence of visible development activity is notable given the volume of critical open issues.

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Observability & telemetry** | [#32364](https://github.com/anthropics/claude-code/issues/32364) — OpenTelemetry support for claude.ai/code | 17 👍, enterprise demand |
| **Accessibility** | [#58429](https://github.com/anthropics/claude-code/issues/58429) — Built-in TTS for responses | 1 👍 but strong a11y justification |
| **Plugin/skill namespacing** | [#50486](https://github.com/anthropics/claude-code/issues/50486) — Consistent prefixing for skills vs. commands | 6 👍, ecosystem hygiene |
| **Desktop UX polish** | [#61484](https://github.com/anthropics/claude-code/issues/61484) — "Copy selection" in right-click menu | Basic feature gap |

---

## Developer Pain Points

| Theme | Frequency | Severity | Details |
|-------|-----------|----------|---------|
| **Opus 4.8 regressions** | 🔥🔥🔥 Critical | High | Token cost explosions (#64093, #64153), hallucination (#63884), autonomous deployment (#64319), "hello world" echo loops (#64236) |
| **Tool execution reliability** | 🔥🔥🔥 Critical | High | Empty returns (#63797, #63966), cascade failures (#22264), shell probe spam (#63887) — pattern suggests harness-level race conditions |
| **Permissions/safety system** | 🔥🔥🔥 Chronic | Critical | Broken since mid-2025 (#30519), false positives blocking work (#60366, #61185), yet simultaneously failing to prevent harm (#64227) |
| **Cost transparency & control** | 🔥🔥 High | High | Hidden thinking tokens (#64153), credit/billing errors (#62644, #63908), session limit drain (#63954) |
| **Cross-platform stability** | 🔥🔥 High | Medium | Windows cowork hangs (#62051), VSCode terminal corruption (#63138), Linux TUI lag (#64344) |
| **Staff engagement gap** | 🔥🔥 High | — | Repeated community notes on absent maintainer response, especially on permissions (#30519) and stale-closed regressions (#63797) |

---

*Digest compiled from 50 issues updated in the last 24h. No PR activity observed. Data: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-01

---

## 1. Today's Highlights

The Codex team pushed a Rust alpha release (`v0.136.0-alpha.2`) while heavy engineering activity centered on sandbox security hardening and enterprise config management. The community remains vocal about token consumption concerns and Windows platform stability, with a 593-comment thread on runaway token usage continuing to dominate issue traffic.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| [rust-v0.136.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.2) | New Rust alpha cut; no detailed changelog provided in release metadata. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business-tier VS Code users report rapid token depletion | Direct revenue impact for paid subscribers; 593 comments suggest widespread, unresolved concern | 🔥 261 👍, 593 comments; users sharing mitigation strategies |
| [#14860](https://github.com/openai/codex/issues/14860) | **Error running remote compact task** — `gpt-5.4` on Linux CLI fails remote compaction | Breaks context management for long sessions on latest model tier | 90 comments, 68 👍; Pro users blocked |
| [#2847](https://github.com/openai/codex/issues/2847) | **A way to exclude sensitive files** — Request for `.codexignore` at repo and global levels | Security/privacy critical; prevents credential leakage to model context | 396 👍, 75 comments; oldest active enhancement request |
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** — macOS thermal issues driving Linux demand | Platform expansion request with clear user motivation | 366 👍; macOS power complaints referenced |
| [#13993](https://github.com/openai/codex/issues/13993) | **Standalone Windows installer (`codex-setup.exe`)** — Corporate/locked-down environments can't use MS Store | Enterprise adoption blocker; policy-driven install restrictions | 125 👍, 58 comments |
| [#8745](https://github.com/openai/codex/issues/8745) | **LSP integration (auto-detect + auto-install)** — Built-in language server support for CLI | Would dramatically improve code quality and IDE parity | 360 👍; strong developer tooling demand |
| [#9203](https://github.com/openai/codex/issues/9203) | **Please make "/undo" back** — File deletion/modification recovery without git | Safety net for untracked files; regression from earlier versions | 261 👍; repeated "bites me" user reports |
| [#11626](https://github.com/openai/codex/issues/11626) | **CLI: Add /rewind checkpoint restore** — Revert both chat context *and* code edits | Current `Esc` only rewinds conversation, leaving code changes orphaned | 151 👍; workflow integrity request |
| [#6465](https://github.com/openai/codex/issues/6465) | **MCP servers not detected in VS Code extension** — Works in CLI, broken in IDE extension | Fragmented UX across Codex variants; MCP ecosystem growth blocked | 55 comments, 28 👍; cross-platform inconsistency |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows Desktop spawns powershell.exe every second** — Aggressive process polling causes high CPU | Performance regression in latest Windows build | Fresh report (4 comments); zero 👍 but critical severity |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#25113](https://github.com/openai/codex/pull/25113) | **Store and expose `parent_thread_id` on Threads** | Fixes subagent data model: separates true parentage from `forked_from_id` overload | Open |
| [#24812](https://github.com/openai/codex/pull/24812) | **Enterprise monthly credit limits in `/status`** | Surfaces `spend_control.individual_limit` for enterprise rate-limit visibility | Open |
| [#25450](https://github.com/openai/codex/pull/25450) | **Remove `SandboxPolicy` from production core** | Migrates core to canonical `PermissionProfile` + split runtime policies; reduces legacy debt | Open |
| [#24982](https://github.com/openai/codex/pull/24982) | **Honor parent approvals for intercepted execs** | Eliminates duplicate approval prompts in zsh-fork unified-exec flow | Open |
| [#24979](https://github.com/openai/codex/pull/24979) | **Gate unified exec zsh fork composition** | Adds controllable composition mode for enterprise rollout flexibility | Open |
| [#25351](https://github.com/openai/codex/pull/25351) + [#25427](https://github.com/openai/codex/pull/25427) | **Lock multi-agent runtime version per thread; select from model info** | Prevents runtime version drift on resumed/forked threads; model-driven runtime selection | Both Open |
| [#25018](https://github.com/openai/codex/pull/25018) | **App-server `thread/delete` API** | Permanent thread deletion with full session tree cleanup (subagents, metadata) | Open |
| [#25096](https://github.com/openai/codex/pull/25096) | **Goal extension `GoalApi`** | Extension-owned goal get/set/clear operations with registered runtimes | Open |
| [#24622](https://github.com/openai/codex/pull/24622) | **Switch runtime to cloud config bundle** | Final PR in 5-part stack: unified cloud-managed config replaces legacy requirements path | Open |
| [#25457](https://github.com/openai/codex/pull/25457) | **Cache remote plugin catalog for suggestions** | Warms plugin recommendations from cached remote catalog with canonical IDs | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Sandbox & security controls** | `.codexignore` ([#2847](https://github.com/openai/codex/issues/2847)), permission profiles ([#25450](https://github.com/openai/codex/pull/25450)), exec approval flows ([#24982](https://github.com/openai/codex/pull/24982)) | High — privacy and enterprise compliance driving |
| **Undo/rewind safety mechanisms** | `/undo` restoration ([#9203](https://github.com/openai/codex/issues/9203)), `/rewind` with code revert ([#11626](https://github.com/openai/codex/issues/11626)) | High — repeated data loss reports |
| **Platform parity (Linux/Windows)** | Linux desktop app ([#11023](https://github.com/openai/codex/issues/11023)), Windows installer ([#13993](https://github.com/openai/codex/issues/13993)), Windows-specific bugs | Sustained — macOS-first shipping creates friction |
| **LSP & IDE-grade tooling** | Auto-detect language servers ([#8745](https://github.com/openai/codex/issues/8745)), MCP server parity ([#6465](https://github.com/openai/codex/issues/6465)) | Strong — developers want CLI to match IDE intelligence |
| **Enterprise config management** | Cloud config bundle stack ([#24617](https://github.com/openai/codex/pull/24617)–[#24622](https://github.com/openai/codex/pull/24622)), credit limit visibility ([#24812](https://github.com/openai/codex/pull/24812)) | Active engineering — 5-PR stack indicates priority |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Token cost unpredictability** | Chronic — [#14593](https://github.com/openai/codex/issues/14593) is top issue by far | Financial; Business/Pro users questioning value |
| **Windows as second-class platform** | High — 6 of top 30 issues tagged `windows-os` | Install, rendering, auth, performance, and session bugs cluster on Windows |
| **Context/session fragility** | High — remote compaction failures ([#14860](https://github.com/openai/codex/issues/14860), [#17392](https://github.com/openai/codex/issues/17392)), stale subagents ([#23700](https://github.com/openai/codex/issues/23700), [#23930](https://github.com/openai/codex/issues/23930)) | Breaks long-running workflows; data loss risk |
| **Configuration drift & migration** | Emerging — [#25440](https://github.com/openai/codex/issues/25440) legacy profile breakage, [#20769](https://github.com/openai/codex/issues/20769) settings reset | Update friction; enterprise rollout complexity |
| **MCP/connector ecosystem inconsistency** | Moderate — VS Code vs. CLI divergence ([#6465](https://github.com/openai/codex/issues/6465)), stale app connector links ([#24675](https://github.com/openai/codex/issues/24675)) | Fragmented tool integration experience |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-01

## Today's Highlights
No new releases dropped in the last 24 hours, but maintainer activity remains intense with 50 issues and 19 PRs seeing updates. The focus continues to be on agent reliability—particularly subagent hang/recovery issues and shell execution stability—alongside security hardening for Auto Memory and authentication flows.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | Follow-up to behavioral evals initiative; 76 tests now running across 6 Gemini models. Critical for measuring agent quality at scale. | 7 comments, active maintainer coordination |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could dramatically reduce token waste and misaligned reads by using syntax-aware boundaries instead of line-based heuristics. | 7 comments, strong technical interest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** | Severe UX regression—simple operations like folder creation hang indefinitely. Workaround (disabling subagents) cripples functionality. | 7 comments, **8 👍**, high user impact |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery hides MAX_TURNS interruption** | `codebase_investigator` falsely reports success after hitting turn limits, causing silent data loss in analysis workflows. | 6 comments, **2 👍**, reliability concern |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses skills and sub-agents** | Core agent orchestration failing—custom skills (gradle, git) ignored even for relevant tasks, forcing manual intervention. | 6 comments, anecdotal but widespread |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck "Waiting input"** | Simple commands falsely prompt for input after completion; breaks automated workflows. PTY state machine issue. | 4 comments, **3 👍** |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction + Auto Memory logging** | Security: secrets hit model context before redaction; service logging compounds exposure. P2 but critical for enterprise. | 3 comments, security-focused |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Quarantine invalid Auto Memory inbox patches** | Silent skip of malformed patches causes memory drift; aggregate dismiss also fails on invalid entries. | 3 comments, data integrity issue |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Background extractor never marks "skipped" sessions as processed, causing wasted compute and repeated noise. | 3 comments, efficiency concern |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard API limit when many skills/MCP servers registered; needs intelligent tool scoping. | 3 comments, scaling blocker |

---

## Key PR Progress

| # | PR | Status | Feature / Fix |
|---|-----|--------|---------------|
| [#27553](https://github.com/google-gemini/gemini-cli/pull/27553) | **Add GATEWAY auth type to validateAuthMethod** | 🟢 Open, P1 | Completes custom base URL support (`GOOGLE_GEMINI_BASE_URL`) by fixing auth validation gap from prior PR |
| [#27371](https://github.com/google-gemini/gemini-cli/pull/27371) | **Fix `--resume` EBADF crash from stale PTY fd** | 🔴 Closed, P1 | Resumes now safe when PTY descriptors go stale; `EBADF` added to ignored error codes |
| [#27153](https://github.com/google-gemini/gemini-cli/pull/27153) | **Serialize concurrent edits to same file** | 🔴 Closed, P1 | Eliminates race condition in `EditTool`/`WriteFileTool` where concurrent writes caused last-write-wins data loss |
| [#27147](https://github.com/google-gemini/gemini-cli/pull/27147) | **Upgrade PTY dependencies** | 🔴 Closed, P1 | Picks up upstream macOS `/dev/ptmx` leak fix from `node-pty`, resolving resource exhaustion |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | **Fix PTY memory leak (synchronous deletion)** | 🔴 Closed, P2 | Critical fix: PTY entries and headless terminals were never GC'd due to Promise-wrapped cleanup |
| [#27505](https://github.com/google-gemini/gemini-cli/pull/27505) | **Prevent extra spaces on width-0 CJK continuation cells** | 🟢 Open, P2 | Fixes terminal corruption for CJK users; prevents copy-paste errors from spurious whitespace |
| [#27398](https://github.com/google-gemini/gemini-cli/pull/27398) | **Accept string protocolVersion in ACP initialize** | 🟢 Open, P2 | ACP protocol flexibility: normalizes date-style version strings before SDK validation |
| [#27405](https://github.com/google-gemini/gemini-cli/pull/27405) | **Parse `tools.callCommand` before discovered tool execution** | 🟢 Open, P2 | Security + correctness: raw command strings now properly parsed to program/argv before sandboxing |
| [#21541](https://github.com/google-gemini/gemini-cli/pull/21541) | **Add EBUSY fallback and TOML parse recovery** | 🟢 Open, P2, `help wanted` | File operation resilience: extends rename error handling, TOML parse recovery for policy files |
| [#22456](https://github.com/google-gemini/gemini-cli/pull/22456) | **Interactive policies dialog** | 🟢 Open, P1, Stale | Rich TUI replacement for `/policies` text output; searchable, tabbed interface—needs momentum |

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple issues (#22745, #22746, #22747) explore syntax-aware navigation for precise reads, reduced tokens, and better codebase mapping. Tilth, glyph, and ast-grep mentioned as candidates.

2. **Agent self-awareness** — #21432 requests the CLI accurately know its own flags, hotkeys, and execution patterns to serve as expert guide.

3. **Server-driven model management** — #20878 epic proposes remote model listing via `LoadCodeAssist`, centralizing routing and improving configurability.

4. **Local/remote subagent evolution** — #20195 and #20303 track subagent infrastructure sprints, with advanced auth and background operations in progress.

5. **Browser agent hardening** — #22232 requests automatic session takeover/lock recovery instead of fail-fast; #22267 notes settings.json overrides are ignored.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Subagent hangs & false success states** | #21409, #22323, #22093 | 🔴 Critical — breaks core workflow |
| **Shell/PTY instability** | #25166, #27371, #27154, #27147, #24935 | 🔴 Critical — execution environment unreliable |
| **Agent ignores user configuration** | #22267, #21968, #22093 | 🟡 High — skills, settings, subagent preferences bypassed |
| **Auto Memory quality & security** | #26525, #26523, #26522, #26516 | 🟡 High — enterprise trust at risk |
| **Terminal rendering bugs** | #21924, #27505, #24935 | 🟡 High — CJK, resize, external editor corruption |
| **Tool scaling limits** | #24246 (>128 tools = 400 error) | 🟡 Moderate — power users blocked |
| **Stale PRs needing attention** | #22456, #23030, #22632 | 🟢 Process — community contributions decaying |

---

*Digest compiled from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity through 2026-05-31.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-01

## 1. Today's Highlights

The Copilot CLI team shipped **v1.0.57-4** with critical security and terminal compatibility fixes, including a notable hardening of `preToolUse` hook error handling that now denies rather than silently permits tool execution. Meanwhile, the community surfaced **18 active issues** in 24 hours, with authentication/session instability emerging as the dominant theme following the v1.0.56 release. No pull requests merged or updated in this period.

---

## 2. Releases

### [v1.0.57-4](https://github.com/github/copilot-cli/releases/tag/v1.0.57-4)

| Category | Change |
|----------|--------|
| **Added** | Mouse click-to-select in diff mode for precise line-level review |
| **Improved** | `preToolUse` hook errors now **deny tool execution** instead of failing open — a security-hardening change for plugin/tooling pipelines |
| **Fixed** | `Ctrl+C` and modified keys now work correctly inside **tmux** |
| **Fixed** | `@`-mention file search matches files regardless of query casing |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3600](https://github.com/github/copilot-cli/issues/3600) | **[Critical Bug] Orphaned sessions running for ~2 months** — no cleanup mechanism | Memory leak / resource exhaustion risk; "Critical Bug" label from reporter | 0 👍, but high severity classification; needs immediate triage |
| [#3597](https://github.com/github/copilot-cli/issues/3597) | **Constant re-login since v1.0.56** (>8x in 24h) | Regressive auth stability breaking daily workflows across multiple machines | 0 👍, but filed same-day as release; likely under-reported |
| [#3596](https://github.com/github/copilot-cli/issues/3596) | **"Not authenticated" error loading model list on session resume** | Session state corruption breaks core functionality (`/model` command) | 0 👍; pairs with #3597 suggesting systemic session/auth decay |
| [#3586](https://github.com/github/copilot-cli/issues/3586) | **Copy stops working since 1.0.49 on Linux** | Basic clipboard regression across versions; workaround is downgrade to 1.0.48 | 0 👍; platform-specific input degradation |
| [#3602](https://github.com/github/copilot-cli/issues/3602) | **SDK mutates host `process.env`** injecting `safe.bareRepository=explicit` | Host process pollution violates isolation expectations; breaks Git tooling assumptions | 0 👍; architectural concern for SDK consumers |
| [#3601](https://github.com/github/copilot-cli/issues/3601) | **Bash tool drops non-ASCII characters** (`LC_CTYPE=C`) | I18n/blocker for CJK users; file paths with Unicode become unresolvable | 0 👍; accessibility/inclusivity regression |
| [#3604](https://github.com/github/copilot-cli/issues/3604) | **Windows-1252 files re-encoded to UTF-8 on edit** | Destructive transformation of legacy codebases; no prompt-level mitigation | 0 👍; data integrity risk |
| [#1632](https://github.com/github/copilot-cli/issues/1632) | **Subfolder support for skills organization** | Quality-of-life for power users with 10+ custom skills; flat structure doesn't scale | 14 👍, 6 comments; **long-running, highly-requested** |
| [#2675](https://github.com/github/copilot-cli/issues/2675) | **Paste images from clipboard into conversation** | Multimodal input gap vs. web UI; clipboard parity expected | 5 👍; feature parity request |
| [#2653](https://github.com/github/copilot-cli/issues/2653) | **Native Git worktree support** | Essential for parallel task workflows without clone overhead | 4 👍; workflow efficiency for advanced Git users |

**Closed with relevance:**
- [#2079](https://github.com/github/copilot-cli/issues/2079): File search case-sensitivity bug **fixed** (closed 2026-05-31)
- [#3598](https://github.com/github/copilot-cli/issues/3598): Session resume fails on negative `tokensRemoved` — **same-day closure** suggests rapid fix for schema validation mismatch
- [#3088](https://github.com/github/copilot-cli/issues/3088): `copilot plugin marketplace list` CLI ignores repo-level overrides — configuration parity issue resolved

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**

*Note: Given zero PR activity, the v1.0.57-4 release likely reflects a fast-track or automated security patch pipeline. Community should monitor for corresponding PRs to appear in coming days for transparency.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Skills/Plugin ecosystem maturity** | #1632 (subfolders), #3546 (silent skill dropping), #2653 (worktrees for parallel tasks), #3088 (marketplace overrides) | High — organizational and reliability gaps as adoption scales |
| **Multimodal & rich input** | #2675 (image paste), #3601 (non-ASCII support) | Medium — terminal constraints vs. modern UX expectations |
| **Session lifecycle management** | #3600 (orphaned sessions), #3598 (resume corruption), #3596 (auth decay on resume), #3597 (re-login loops) | **Critical** — infrastructure debt becoming user-visible |
| **Cross-platform fidelity** | #3586 (Linux copy), #3604 (Windows encoding), #3603 (remote/404 on Mac free plan) | Medium — platform-specific regressions outpace testing |
| **Agentic workflow control** | #3595 (AutoPilot pause for confirmation) | Early — human-in-the-loop governance for autonomous modes |

---

## 6. Developer Pain Points

### 🔴 **Authentication & Session Instability (v1.0.56 regression cluster)**
- **#3597**, **#3596**, **#3600** form a pattern: post-v1.0.56, sessions degrade, auth tokens expire prematurely, and resume fails. Multiple machines affected. **Immediate investigation warranted.**

### 🟡 **Encoding & Internationalization Blind Spots**
- **#3601** (`LC_CTYPE=C` stripping CJK), **#3604** (UTF-8 coercion), **#3586** (Linux clipboard) reveal assumptions of ASCII/UTF-8 monoculture. Legacy Windows codepages and non-Latin scripts are second-class.

### 🟡 **SDK Host Isolation Violations**
- **#3602** (`process.env` mutation) breaks the contract that SDKs should not pollute host environments. Security-focused Git hardening is laudable; implementation via global mutation is not.

### 🟡 **Plugin Ecosystem Scalability**
- Flat skill structures (#1632), silent loading failures (#3546), and marketplace configuration drift (#3088) indicate the plugin system is hitting complexity limits as custom skill libraries grow.

### 🟢 **Positive: Security Hardening**
- v1.0.57-4's `preToolUse` fail-closed behavior and rapid closure of #3598 (schema validation) show the team can move fast on security-critical fixes.

---

*Digest compiled from github.com/github/copilot-cli activity 2026-05-31 to 2026-06-01.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-01

---

## 1. Today's Highlights

Version 1.46.0 released recently has triggered a cluster of regressions: Linux users report login failures and input anomalies, while tool call double-encoding bugs are breaking agent workflows. The community responded rapidly with two same-day PRs addressing timeout defaults and JSON parsing, signaling an active contributor base around critical stability gaps.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2403](https://github.com/MoonshotAI/kimi-cli/issues/2403) | **Login failure after 1.46 upgrade on Linux** | Blocks all Linux users from authenticating; high-severity regression in latest stable | 2 comments, fresh report (2026-05-31) |
| [#2410](https://github.com/MoonshotAI/kimi-cli/issues/2410) | **Linux CLI input exception** | Terminal input hangs/duplicates under `su` and interactive prompts; breaks core UX for Linux developers | 1 comment, same-day filing |
| [#2384](https://github.com/MoonshotAI/kimi-cli/issues/2384) | **Large context requests hit ConnectTimeout, httpx timeout not configurable** | Hard ceiling at ~120K tokens for long sessions; enterprise/serious users cannot scale workflows | 1 comment, persistent issue |
| [#2412](https://github.com/MoonshotAI/kimi-cli/issues/2412) | **`kimi acp` command completely unresponsive** | Dead command with no error output; suggests missing error handling or initialization path | 0 comments, needs triage |
| [#2406](https://github.com/MoonshotAI/kimi-cli/issues/2406) | **Tool call arguments double-encoding breaks arrays/dicts** | Pydantic validation failures block `SetTodoList`, `StrReplaceFile`, `ExitPlanMode` — core agent tools | 0 comments, but PR fix already submitted |
| [#2405](https://github.com/MoonshotAI/kimi-cli/issues/2405) | **400 error: assistant message with 'tool_calls' missing tool responses** | API protocol violation in conversation state management; breaks multi-turn agent loops | 0 comments, version 0.6.0 (may be stale install) |
| [#2408](https://github.com/MoonshotAI/kimi-cli/issues/2408) | **Foreground subagent timeout defaults to 120s despite "no default" in schema** | Documentation/schema drift causing unexpected task kills; affects long-running agent operations | 0 comments, precise bug report |
| [#2411](https://github.com/MoonshotAI/kimi-cli/issues/2411) | **Thinking window limited to 2 lines, request configurable expansion** | UX friction for reasoning-heavy workflows; small fix, high user satisfaction potential | 0 comments, clear enhancement |
| [#2404](https://github.com/MoonshotAI/kimi-cli/issues/2404) | **`/goal` command: autonomous mission completion without confirmation** | Philosophical shift toward more agentic CLI; tests appetite for full autonomy vs. human-in-the-loop | 0 comments, forward-looking feature |
| [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) | **OpenAI-compatible API endpoint for Cursor/IDE integration** | Ecosystem expansion play; users want to bring K2.6 into existing toolchains without migration friction | 4 comments, sustained interest since May 9 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2409](https://github.com/MoonshotAI/kimi-cli/pull/2409) | **fix(kosong): add default 120s timeout to `create_openai_client`** | Replaces OpenAI SDK's 600s default with explicit 120s, preventing silent multi-minute hangs when upstream proxies (e.g., MiMo API) timeout earlier. Aligns client behavior with infrastructure reality. | Open, needs review |
| [#2407](https://github.com/MoonshotAI/kimi-cli/pull/2407) | **fix: handle double-encoded JSON in tool call arguments (Moonshot API)** | Adds recursive JSON parsing for `function.arguments` to resolve Pydantic failures on `SetTodoList`, `ExitPlanMode`, `StrReplaceFile`. Direct fix for #2406. | Open, needs review |

*Only 2 PRs active in last 24h; both are rapid community responses to production-blocking bugs.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **OpenAI API compatibility** | #2208 (4 comments, May–May) | Users want K2.6 as drop-in replacement in Cursor, Copilot, existing IDE setups |
| **Configurable reasoning visibility** | #2411 (thinking lines), implicit in UX complaints | Transparency and control over agent cognition is becoming standard expectation |
| **Autonomous operation modes** | #2404 (`/goal` without confirmation) | Power users pushing boundary from "assistant" to "agent"; may need safety/undo architecture |
| **Timeout and scale tunability** | #2384 (httpx timeout), #2408 (subagent timeout), #2409 | Hardcoded limits are friction points for production workloads |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Root Cause Indication |
|------------|-----------|----------|----------------------|
| **v1.46 Linux regressions** | 2 issues (#2403, #2410) | 🔴 Critical | Insufficient CI coverage for Linux terminal environments |
| **Timeout handling** | 3 items (#2384, #2408, #2409) | 🟠 High | Scattered timeout configs, SDK defaults misaligned with infra |
| **Tool call serialization** | 2 items (#2406, #2407) | 🟠 High | Moonshot API edge case in JSON encoding not handled client-side |
| **Missing configurability** | 2 items (#2384, #2411) | 🟡 Medium | Product prioritizing simplicity over power-user controls |
| **Login/auth fragility** | 1 item (#2403) | 🔴 Critical | Upgrade path may not preserve/refresh tokens correctly |

**Bottom line:** The 1.46 release introduced platform-specific instability that the community is patching faster than maintainers are merging. Timeout architecture and JSON parsing robustness need systematic fixes, not one-off PRs.

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-01

## Today's Highlights

The OpenCode community is grappling with significant MCP server visibility issues across Desktop v1.15.13, with multiple reports of MCP and LSP sections appearing empty in the UI despite CLI functionality remaining intact. Meanwhile, memory management remains a top priority as the maintainers actively collect heap snapshots through the centralized Memory Megathread, and the TUI continues receiving attention with prototypes for sticky prompts and improved subagent rendering.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** — Centralized tracking for memory leaks with explicit request for heap snapshots (not LLM suggestions) | Memory issues are fragmented across reports; this consolidation enables systematic debugging. Maintainer thdxr's caps-lock warning about LLM solutions signals frustration with unhelpful noise. | 83 comments, 60 👍 — highest engagement by far; community actively providing diagnostic data |
| [#20995](https://github.com/anomalyco/opencode/issues/20995) | **Gemma 4 (e4b) tool calling fails via Ollama** — streaming `tool_calls` not recognized in OpenAI-compatible API | Blocks local-first Gemma 4 adoption; Ollama is a major local deployment path. Tool calling is core to OpenCode's agentic functionality. | 19 comments, 45 👍 — strong upvote count signals broad impact |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) | **gemma-4-26b/31b interaction issues** — tool loops/failures even with latest tokenizer fixes | Related to above but broader; indicates systemic Gemma 4 integration problems beyond single API path. LM Studio and llama.cpp patches haven't resolved. | 17 comments, 18 👍; users cross-referencing engine versions |
| [#29786](https://github.com/anomalyco/opencode/issues/29786) | **Opus 4.8 bug in dev branch** — sub-agent error message | Dev branch instability affecting Anthropic's latest model; "sub-agent" architecture is bleeding-edge and fragile. | 16 comments, only 3 👍 — niche but critical for early adopters |
| [#30070](https://github.com/anomalyco/opencode/issues/30070) | **Desktop /MCP panel shows 0/0 while CLI works** — sidecar sync state not populating `sync.data.mcp` | Core Desktop-CLI parity issue; MCP is central to OpenCode's extensibility. UI state desync undermines user trust. | 6 comments, 8 👍; precise technical diagnosis by reporter |
| [#30104](https://github.com/anomalyco/opencode/issues/30104) | **Desktop MCP tab "No MCPs configured" despite CLI connection** — v1.15.13 regression | Duplicate/separate report confirming pattern: Desktop MCP UI is broadly broken in latest release. Windows-specific. | 4 comments, 4 👍; escalating visibility |
| [#30130](https://github.com/anomalyco/opencode/issues/30130) | **Desktop v1.15.13: MCP servers not loaded** — race condition in PR #28937 + plugin-injected MCPs ignored | Root-cause analysis identifying specific PR and plugin hook failure; native and plugin MCPs both affected. | 2 comments; fresh report, likely to grow |
| [#30141](https://github.com/anomalyco/opencode/issues/30141) | **Desktop v1.15.13: MCP and LSP sections empty** — Plugins display correctly | Completes the MCP/LSP UI failure trilogy; "Plugins display correctly" isolates bug to specific sync paths. | 2 comments, 1 👍; Windows 10 x64 |
| [#25940](https://github.com/anomalyco/opencode/issues/25940) | **TUI crashes entire terminal session on open** — reopened after auto-close | Severity is extreme (full terminal crash); auto-close by GitHub bot was premature. Video evidence provided. | 9 comments, 2 👍; persistent despite "every directory" |
| [#16885](https://github.com/anomalyco/opencode/issues/16885) | **JSON→SQLite migration reruns on channel-specific DBs** | Data layer reliability for dev/local builds; migration idempotency is foundational. Affects developer workflow velocity. | 7 comments, 8 👍; long-running (March) |

---

## Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#30149](https://github.com/anomalyco/opencode/pull/30149) | **docs(ecosystem): add opencode-mdocs plugin** | Community plugin documentation | Ecosystem growth; mdocs extends documentation capabilities |
| [#29086](https://github.com/anomalyco/opencode/pull/29086) | **feat(tui): prototype sticky prompt header** | Keeps active prompt visible above scroll area | Addresses TUX discoverability in long sessions; refs #28035 |
| [#29901](https://github.com/anomalyco/opencode/pull/29901) | **feat(core): add Snowflake Cortex provider** | Enterprise data warehouse AI integration | Requires custom endpoint handling beyond standard OpenAI compatibility; closes #29900 |
| [#29928](https://github.com/anomalyco/opencode/pull/29928) | **fix(desktop): collapse full-context git diffs** | Performance fix for large diff rendering | Fixes #29768, #21068; prevents UI hang on generated patches |
| [#30145](https://github.com/anomalyco/opencode/pull/30145) | **fix(acp): honor session/cancel by aborting running turn** | Restores ACP cancel functionality | Critical for [hydra-acp](https://github.com/smagnuso/hydra-acp) integration; regression fix |
| [#30051](https://github.com/anomalyco/opencode/pull/30051) | **fix(tui): clarify inline subagent rows** | Compact ✓ rendering for completed subagents | Polish for agentic UX; reduces visual noise in nested operations |
| [#30046](https://github.com/anomalyco/opencode/pull/30046) | **fix(session): preserve Anthropic thinking signature** | Fixes `differentModel` thinking block corruption | Closes #22813; unblocks multi-turn Claude with extended thinking |
| [#26861](https://github.com/anomalyco/opencode/pull/26861) | **fix(tui): old messages disappearing during long sessions** | Lazy-scroll loading (50-message chunks) | Fixes #7380; fundamental TUI reliability for extended use |
| [#29789](https://github.com/anomalyco/opencode/pull/29789) | **feat(opencode): add Dynamic workflows** | Project-local `/workflow` command system | Parity with Claude Code feature; closes #29059 |
| [#27662](https://github.com/anomalyco/opencode/pull/27662) | **fix(vscode): push active editor selection to TUI** | Lock-file-based context sync | Long-broken documented feature; closes #22235 and multiple related issues |

---

## Feature Request Trends

1. **TUX Polish & External Editor Integration** — [#30135](https://github.com/anomalyco/opencode/issues/30135) requests re-adding "Open in external editor" post-TUI rewrite; signals that Bubbletea→OpenT migration prioritized architecture over feature parity.

2. **Session Management Improvements** — [#30128](https://github.com/anomalyco/opencode/issues/30128) (session rename) and [#12393](https://github.com/anomalyco/opencode/issues/12393) (archive recovery) show persistent demand for organizational controls in both Web and Desktop.

3. **Workflow/Automation Systems** — [#29789](https://github.com/anomalyco/opencode/pull/29789) implements Claude Code-style dynamic workflows; [#12633](https://github.com/anomalyco/opencode/pull/12633) adds auto-accept for permissions. Direction: reducing friction in repetitive agentic tasks.

4. **Model Provider Expansion** — Snowflake Cortex ([#29901](https://github.com/anomalyco/opencode/pull/29901)), GLM-5.1 ([#29334](https://github.com/anomalyco/opencode/issues/29334)), and ongoing Gemma 4 work indicate demand for broad provider coverage beyond OpenAI/Anthropic.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Desktop-CLI MCP Sync Failure** | [#30070](https://github.com/anomalyco/opencode/issues/30070), [#30104](https://github.com/anomalyco/opencode/issues/30104), [#30130](https://github.com/anomalyco/opencode/issues/30130), [#30141](https://github.com/anomalyco/opencode/issues/30141) | **Critical** — v1.15.13 release appears to have broken MCP visibility across all paths; workaround is CLI-only |
| **Local Model Tool Calling Reliability** | [#20995](https://github.com/anomalyco/opencode/issues/20995), [#21034](https://github.com/anomalyco/opencode/issues/21034), [#21354](https://github.com/anomalyco/opencode/issues/21354) | **High** — Gemma 4 via Ollama/LM Studio has multiple failure modes; "latest patched engines" claim doesn't hold |
| **Memory/Leaks in Long Sessions** | [#20695](https://github.com/anomalyco/opencode/issues/20695) | **High** — Requires manual heap snapshot collection; no automated telemetry |
| **Anthropic Thinking Block Fragility** | [#22813](https://github.com/anomalyco/opencode/issues/22813), [#18254](https://github.com/anomalyco/opencode/issues/18254), [#30046](https://github.com/anomalyco/opencode/pull/30046) | **Medium-High** — Multi-turn with extended thinking breaks on model switches; API strictness clashes with OpenCode's flexibility |
| **TUI Terminal Stability** | [#25940](https://github.com/anomalyco/opencode/issues/25940), [#28358](https://github.com/anomalyco/opencode/issues/28358) | **Medium** — Crashes and mouse tracking leakage suggest terminal state management gaps |
| **PowerShell Integration** | [#26038](https://github.com/anomalyco/opencode/issues/26038) | **Medium** — `/exit` kills parent shell; indicates signal handling mismatch |
| **Brew Distribution Lag** | [#29846](https://github.com/anomalyco/opencode/issues/29846) | **Low-Medium** — Two versions missing; affects macOS developer onboarding |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-01

## Today's Highlights

The Pi community closed 13 issues and 9 PRs in the last 24 hours, with heavy focus on provider compatibility fixes for Claude Opus 4.7+ and OpenRouter reasoning models. A significant architectural discussion emerged around making in-session model changes ephemeral by default, while WSL users saw long-standing git branch staleness finally get a targeted fix.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` hangs on "Working..." with zero-usage aborted turns | Most-discussed open issue (49 comments); affects GPT-5.5/Codex reliability in production workflows. Users report silent failures requiring manual Escape intervention. | 🔥 24 👍, active triage with `possibly-openclaw-clanker` tag |
| [#5223](https://github.com/earendil-works/pi/issues/5223) | Anthropic provider corrupts thinking blocks with Opus 4.8 adaptive thinking | Breaks multi-turn Claude conversations mid-session with 400 errors; blocks adoption of Anthropic's latest reasoning features. | 8 comments, 5 👍, provider-level fix needed |
| [#4666](https://github.com/earendil-works/pi/issues/4666) | 429 Retry-After ignores `maxRetryDelayMs`; Esc and `/new` don't recover cleanly | Configuration contract violation; users expect capped retries but get silent long waits. Recovery UX is broken. | 6 comments, low engagement but high severity |
| [#4975](https://github.com/earendil-works/pi/issues/4975) | Bedrock Converse API rejects empty text blocks | AWS Bedrock integration fails on whitespace-only user messages; blocks enterprise users on strict-validated API. | 2 comments, `inprogress` |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | Make in-session model/thinking changes ephemeral by default | Proposes architectural shift: session-scoped changes vs. global defaults via new `/settings` entry. Would reduce accidental persistent config mutations. | 2 comments, fresh discussion |
| [#4748](https://github.com/earendil-works/pi/issues/4748) | `getKeybindings()` singleton breaks extensions importing `keyText` | Extension ecosystem fragility: module-scope singletons cause keybinding desync between core and extensions. | 2 comments, 2 👍, root cause identified |
| [#5055](https://github.com/earendil-works/pi/issues/5055) | `/tree` help doesn't wrap, rendering it useless | Polished UX degraded by simple terminal formatting bug; symptomatic of TUI debt. | 2 comments, 1 👍, image-documented |
| [#1436](https://github.com/earendil-works/pi/issues/1436) | Auto-detect light/dark mode | Long-running quality-of-life request finally closed; system theme sync without restart. | 8 comments, 2 👍, merged |
| [#5044](https://github.com/earendil-works/pi/issues/5044) | OOM on `pi --resume` for large sessions | 200MB+ JSONL loaded into memory just for session listing; performance regression for heavy users. | 3 comments, fix proposed (streamed implementation) |
| [#5199](https://github.com/earendil-works/pi/issues/5199) | Terrible iTerm2 UX: 5-10s redraws, content loss | Terminal emulator-specific performance degradation affecting macOS power users; regression noted. | 3 comments, closed without clear resolution |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#5264](https://github.com/earendil-works/pi/pull/5264) | fix(coding-agent): refresh branch in footer on WSL `/mnt` repos | Adds polling-based fix for WSL git branch staleness on Windows-backed paths (`/mnt/c/...`). Narrow scope, addresses #5052 recurrence. | 🟢 Open |
| [#5235](https://github.com/earendil-works/pi/pull/5235) | TUI overlay focus fix | Prevents focus from returning to editor while overlay is visible, leaving overlay non-interactive. Root cause in `pi-tui` state management. | 🟡 Open, `inprogress` |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | feat(ai): add Anthropic Vertex provider | New built-in provider for Claude on Google Cloud Vertex AI; thin adapter reusing existing Anthropic streaming path. Expands enterprise deployment options. | 🟢 Open |
| [#5254](https://github.com/earendil-works/pi/pull/5254) | chore: replace `chalk` with `util.styleText` | Node 20+ native styling, drops dependency. Follows e18e.dev modernization pattern. | 🟢 Open |
| [#4651](https://github.com/earendil-works/pi/pull/4651) | feat(coding-agent): fetch portable git bash on Windows | Auto-downloads git bash (~350MB) to `~/.pi`, mirroring `rg`/`find` behavior. Draft pending community feedback on size tradeoff. | 🟡 Open, draft |
| [#5256](https://github.com/earendil-works/pi/pull/5256) | add optional session name to `/new`, `/clone`, `/fork` | UX polish: named sessions at creation time, avoiding separate `/name` step. | 🔴 Closed |
| [#5251](https://github.com/earendil-works/pi/pull/5251) | fix(ai): suppress deprecated `temperature` for Claude Opus 4.7+ | Anthropic API compatibility: prevents 400 on non-default temperature for new models. | 🔴 Closed |
| [#5247](https://github.com/earendil-works/pi/pull/5247) | fix(agent): infinite loop protection (`maxTurns` + unbound tool detection) | Critical reliability: adds `AgentHarness` safeguards against hallucinated tool calls and orchestration bugs. Addresses #5016, #3960. | 🔴 Closed |
| [#5237](https://github.com/earendil-works/pi/pull/5237) | fix(coding-agent): avoid continuing after pre-prompt threshold compaction | Removes dangerous `agent.continue()` path post-compaction; adds regression test. | 🔴 Closed |
| [#5257](https://github.com/earendil-works/pi/pull/5257) | fix(coding-agent): warn instead of fatal on extension load failures | Resilience improvement: broken extensions no longer hard-exit Pi; warns and continues. | 🔴 Closed |

---

## Feature Request Trends

1. **Session lifecycle ergonomics**: Named sessions at creation (#5256), ephemeral model changes (#5263), and `--resume` performance (#5044) show demand for smoother session management at scale.
2. **Enterprise provider expansion**: Anthropic Vertex (#5262), Bedrock fixes (#4975, #5249), and OpenRouter reasoning (#5221) indicate push toward multi-cloud, compliance-heavy deployments.
3. **TUI robustness**: Overlay focus (#5235), cursor focus loss (#3896), terminal-specific rendering (#5199, #5233), and help wrapping (#5055) reveal accumulated terminal UI debt needing systematic attention.
4. **Extension system maturity**: Custom fetch hooks (#5061), multi-select UI (#5025), keybinding singleton fixes (#4748), and graceful extension failure (#5257) show the extension API stabilizing under real load.
5. **Context/compaction intelligence**: Ratio-based token reservation (#5238) and overflow recovery (#5242) signal need for adaptive context management across varying model windows.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Provider API drift breaking integrations** | Very High | #5223 (Anthropic thinking blocks), #5251 (temperature deprecation), #5221 (OpenRouter role), #5117 (Qwen role), #4940 (Cerebras), #4975 (Bedrock validation) — constant whack-a-mole with provider schemas |
| **WSL/Windows second-class experience** | High | #5264/#5052/#5239 (git branch staleness), #4651 (missing git bash), #4920 (`NUL` device bug) — persistent platform gap |
| **TUI performance and correctness in real terminals** | High | #5199 (iTerm2 redraw), #5233 (Kitty images), #3896 (cursor focus), #5055 (help wrapping) — terminal diversity creates testing matrix explosion |
| **Session state/memory management at scale** | Medium-High | #5044 (OOM on resume), #5242 (overflow recovery), #5238 (compaction ratios) — power users hitting architectural limits |
| **Configuration scope confusion** | Emerging | #5263 (ephemeral vs. global changes) — mental model mismatch between session and persistent settings |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-01

## 1. Today's Highlights

The v0.17.0 nightly build landed with a critical rewind fix for false "compressed turn" errors, while the community is actively hardening the daemon/serve architecture and telemetry observability. Memory pressure diagnostics and per-prompt trace isolation emerged as major reliability investments, alongside continued OAuth/auth flow fixes for JetBrains IDE users.

---

## 2. Releases

**[v0.17.0-nightly.20260531.c699738f9](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260531.c699738f9)** — Nightly build containing:
- `fix(rewind)`: Resolved false "compressed turn" error during mid-turn message handling
- Full v0.17.0 release preparation via automated CI ([PR #4626](https://github.com/QwenLM/qwen-code/pull/4626))

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#4514](https://github.com/QwenLM/qwen-code/issues/4514)** `tracking(serve): daemon capability gaps` | Comprehensive backlog of HTTP/SSE surface gaps in `qwen serve`; defines the critical path for remote client parity | 10 comments, active maintainer engagement from doudouOUC |
| **[#4493](https://github.com/QwenLM/qwen-code/issues/4493)** `rider无法登录qwen code` | JetBrains Rider OAuth redirect loop blocks Alibaba Cloud token plan access; China-market IDE integration blocker | 9 comments, unresolved — affects enterprise users |
| **[#4657](https://github.com/QwenLM/qwen-code/issues/4657)** `v0.17.0 + Ollama task completion failure` | Regression in local LLM task execution (create files, complete workflows) — core value prop broken for self-hosted users | 3 comments, fresh report on release day |
| **[#4554](https://github.com/QwenLM/qwen-code/issues/4554)** `feat(telemetry): OpenTelemetry for qwen serve` | Daemon path lacks end-to-end observability; production deployment blocker for enterprise serve use cases | 4 comments, roadmap-linked |
| **[#4637](https://github.com/QwenLM/qwen-code/issues/4637)** `fix(acp): discontinued qwen-oauth traps JetBrains users` | P1 bug — stale auth method in `authMethods` causes dead-end auth state; user-trapping regression | Closed with fix, 1 👍, yiliang114-led |
| **[#4609](https://github.com/QwenLM/qwen-code/issues/4609)** `DOMException error with local model` | Cryptic API error breaks Ollama/local model connectivity — onboarding friction for new users | Closed, 4 comments, configuration-related |
| **[#3881](https://github.com/QwenLM/qwen-code/issues/3881)** `qwen3.6-27b infinite "/" generation` | Local model deployment causes token-maxing repetition on first prompt; model compatibility issue | Closed, 7 comments, win32-specific |
| **[#4643](https://github.com/QwenLM/qwen-code/issues/4643)** `Auto-update fallback when npm prefix not writable` | `sudo npm install -g` breaks auto-update with EACCES; permission model mismatch for global installs | 1 comment, yiliang114 enhancement |
| **[#4651](https://github.com/QwenLM/qwen-code/issues/4651)** `Auto-dump memory diagnostics on pressure` | OOM crashes leave zero debuggability; proposes survival-time diagnostics dump — critical for long-session reliability | 1 👍, roadmap-linked (#3000), ready-for-agent |
| **[#4466](https://github.com/QwenLM/qwen-code/issues/4466)** `${VAR} in settings.json not resolved from .env` | Environment variable substitution race condition breaks MCP credential injection; security-sensitive Docker workflows affected | Closed, 1 comment, credential-security scope |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** `refactor(serve): extract DaemonWorkspaceService` | Major daemon architecture refactor — separates session bridge from workspace operations, enables cleaner F4 client adapter protocol | Open, doudouOUC |
| **[#4662](https://github.com/QwenLM/qwen-code/pull/4662)** `fix: include submodule files in file search` | Git-backed crawler now respects `--recurse-submodules`; fixes missing files in monorepo workflows | Open, he-yufeng |
| **[#4572](https://github.com/QwenLM/qwen-code/pull/4572)** `Harden auto mode self-modification checks` | Security hardening — prevents classifier bypass for config/instruction/skill/MCP writes via workspace edit fast-paths | Open, qqqys |
| **[#4600](https://github.com/QwenLM/qwen-code/pull/4600)** `fix(ui): distinguish auto approval mode indicators` | Visual clarity between `auto-accept edits` (yellow/warning) and `auto mode` (blue/link) — reduces user confusion | Open, he-yufeng |
| **[#4410](https://github.com/QwenLM/qwen-code/pull/4410)** `feat(telemetry): Phase 3 — qwen-code.subagent span` | Isolates subagent spans from concurrent sibling interleaving; critical for correct distributed tracing in multi-agent flows | Open, doudouOUC |
| **[#4647](https://github.com/QwenLM/qwen-code/pull/4647)** `fix(clipboard): platform-native Linux image paste` | Replaces native module with `wl-paste`/`xclip` for WSL2+Wayland compatibility; fixes long-standing clipboard regression | Open, CNCSMonster |
| **[#4658](https://github.com/QwenLM/qwen-code/pull/4658)** `fix(infra): MCP-restart timeout coupling` | Extracts shared constants to prevent SDK/server timeout desync; closes #4330 infrastructure debt | Open, doudouOUC |
| **[#4661](https://github.com/QwenLM/qwen-code/pull/4661)** `feat(telemetry): per-prompt traceId` | Fresh traceId per interaction instead of session-scoped SHA-256; enables bounded, renderable traces for large sessions | Open (supersedes closed #4659), doudouOUC |
| **[#4654](https://github.com/QwenLM/qwen-code/pull/4654)** `feat(core): auto-dump memory diagnostics` | Implements #4651 — writes `MemoryPressureMonitor` diagnostics to disk pre-cleanup for post-crash analysis | Open, yiliang114 |
| **[#4613](https://github.com/QwenLM/qwen-code/pull/4613)** `feat(daemon): sync model/approval-mode across clients` | Fixes broadcast duplication/dropping for shared session state — multi-client consistency for IDE+terminal+chat views | Open, chiga0 |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Telemetry & Observability** | #3731, #4554, #4602, #4410, #4661, #4660, #4548 | 🔥 Highest — OpenTelemetry hardening is the dominant theme across issues and PRs |
| **Daemon/Serve Productionization** | #4514, #4563, #4360, #4613, #4658 | Strong — HTTP surface completion, protocol stamping, multi-client sync |
| **Memory & Crash Diagnostics** | #4651, #4654, #4363, #4403 | Growing — OOM debuggability as reliability priority |
| **Authentication & IDE Integration** | #4493, #4637, #4494, #4609 | Persistent — OAuth flows, JetBrains, cross-language output |
| **MCP Ecosystem Hardening** | #4330, #4658, #4656, #4466 | Steady — timeout coupling, project-scoped configs, credential injection |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Local model (Ollama/LM Studio) reliability** | #4657, #4609, #3881, #4501 | 🔴 High — Task completion failures, DOMException errors, infinite generation loops; self-hosted workflow is fragile across versions |
| **Authentication state machine edge cases** | #4493, #4637, #4494 | 🔴 High — OAuth redirect loops, discontinued methods trapping users, language preference ignored in side queries |
| **Daemon/serve observability gaps** | #4514, #4554, #4602 | 🟡 Medium-High — Production serve deployments lack tracing parity with CLI; debugging distributed sessions is blind |
| **npm/global installation permission model** | #4643 | 🟡 Medium — Auto-update EACCES failures punish standard global install pattern |
| **Memory pressure & session longevity** | #4651, #4363, #3881 | 🟡 Medium — Long sessions OOM with no recoverable diagnostics; V8 string length limits hit on resume |
| **Platform-native clipboard/IME** | #4647, #3103 | 🟢 Niche but sticky — WSL2/Wayland image paste, terminal newline insertion across emulators |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-05-31 to 2026-06-01.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-01

> **Repository Note:** The project has been renamed to **CodeWhale** as of v0.8.48. Legacy `deepseek`/`deepseek-tui` binaries remain as deprecation shims and will be removed in v0.9.0.

---

## 1. Today's Highlights

The v0.8.48 release marks the official **CodeWhale rebrand**, shipping deprecation shims for legacy binaries while migrating config paths and secrets to `~/.codewhale/`. The past 24 hours saw **12 merged PRs** including configurable update checks, mention completion limits, and animation fixes—plus a major community contribution of 71 new unit tests across core crates. Meanwhile, **cache hit reliability** and **migration clarity** remain the top community concerns heading toward v0.9.0.

---

## 2. Releases

### [v0.8.48](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.48) — Project Rebrand to CodeWhale
- Renames project to **CodeWhale**; legacy `deepseek`/`deepseek-tui` binaries print deprecation warnings and forward to `codewhale`/`codewhale-tui`
- Deprecation shims will be **removed in v0.9.0**
- See [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md) for migration details

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1120](https://github.com/Hmbown/CodeWhale/issues/1120) | **Cache hit rate problems persist** — `input_cache_miss` rate bug questioned for v0.8.17+ | Cache efficiency directly impacts API costs and latency; users seeking confirmation of fixes | 21 comments, ongoing investigation |
| [#1969](https://github.com/Hmbown/CodeWhale/issues/1969) | **Migration anxiety: sessions/skills survival after rebrand** | Critical user data portability concern; `REBRAND.md` lacks manual migration guidance for custom work directories | 8 comments, documentation gap flagged |
| [#2353](https://github.com/Hmbown/CodeWhale/issues/2353) | **Memory feature fails despite config.toml enable** | Broken feature promise; error message still references `~/.deepseek/` path post-rebrand | 8 comments, closed—path confusion likely root cause |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | **Typed persistent permission rules for execpolicy** | Security hardening: tool/command/path-scoped allow/deny/ask rules | 5 comments, PR #2242 in progress |
| [#1978](https://github.com/Hmbown/CodeWhale/issues/1978) | **OpenRouter custom base_url reasoning/cache parity** | Feature matrix reveals gaps in reasoning and cache support across proxy configurations | 4 comments, detailed testing provided |
| [#2309](https://github.com/Hmbown/CodeWhale/issues/2309) | **Statusline picker hides undiscovered options** | UX discoverability failure: only pre-configured items visible, no UI-driven exploration | 4 comments, design issue |
| [#2362](https://github.com/Hmbown/CodeWhale/issues/2362) | **Sub-agents lack MCP tool access** | Architecture gap: `agent_open` breaks MCP inheritance, limiting multi-agent workflows | 4 comments, closed—fix merged |
| [#1224](https://github.com/Hmbown/CodeWhale/issues/1224) | **Consolidate config files to single directory** | Persistent request to merge `~/.deepseek/` and `settings.toml` sprawl; rebrand complicates further | 3 comments, v0.9.0 candidate |
| [#2328](https://github.com/Hmbown/CodeWhale/issues/2328) | **exec_shell availability inconsistent across modes** | YOLO vs Agent mode tool catalog divergence contradicts documentation | 3 comments, mode-specific behavior undocumented |
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config paths fragmented across OS/Cygwin + silent migration bug** | Windows/Cygwin path resolution inconsistency; silent failures during legacy→new migration | 1 comment, patch attached |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#2472](https://github.com/Hmbown/CodeWhale/pull/2472) | **Configurable startup update checks** | Adds `[update]` config table with `check_for_updates`/`update_uri`; supports air-gapped/mirrored environments | ✅ Merged |
| [#2471](https://github.com/Hmbown/CodeWhale/pull/2471) | **Composer scroll and Alt motion fixes** | Mouse-wheel capture in composer; proper Alt-f/Alt-b word motion without literal insertion | ✅ Merged |
| [#2470](https://github.com/Hmbown/CodeWhale/pull/2470) | **Qwen3.7 OpenRouter shorthand resolution** | Normalizes `qwen3.7`/`qwen-3.7`/`qwen3-7` → `qwen/qwen3.7-max` across CLI/config/TUI | ✅ Merged |
| [#2468](https://github.com/Hmbown/CodeWhale/pull/2468) | **Stop header whale after liveness recovery** | Clears `turn_started_at` on watchdog recovery; fixes stuck animation state | ✅ Merged |
| [#2441](https://github.com/Hmbown/CodeWhale/pull/2441) | **MCP manager unit tests (36 tests)** | Comprehensive coverage: client lifecycle, tool filtering, qualified calls, error handling | ✅ Merged |
| [#2467](https://github.com/Hmbown/CodeWhale/pull/2467) | **Migrate file secrets to CodeWhale home** | Moves `~/.deepseek/secrets` → `~/.codewhale/secrets`; legacy copy with conflict resolution | ✅ Merged |
| [#2464](https://github.com/Hmbown/CodeWhale/pull/2464) | **Configurable @-mention completion limits** | Exposes `mention_menu_limit` and `mention_walk_depth` in settings; addresses #2360/#2359 | ✅ Merged |
| [#2242](https://github.com/Hmbown/CodeWhale/pull/2242) | **Typed persistent tool permission rules** | End-to-end execpolicy system: tool/prefix/path-scoped rules with TUI persistence UI | 🔄 Open, supersedes earlier split PRs |
| [#2113](https://github.com/Hmbown/CodeWhale/pull/2113) | **Independent scroll regions for conversation/tool output** | Split-pane UI: separate scroll state for transcript vs. tool output with mouse wheel routing | 🔄 Open |
| [#2239](https://github.com/Hmbown/CodeWhale/pull/2239) | **i18n Phase 1-4b wiring + rebase fixes** | 47-file MessageId translation integration; fixes 109 compile errors from rebase | 🔄 Open, large surface area |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Cache-maximalism architecture** | #2264 (prefix-cache stability), #2127 (slop ledger), #2124 (graph-backed work objects), #1120 (hit rate bugs) | High — v0.9.0 theme |
| **Configurable hardcoded limits** | #2464 (mention limits), #2472 (update checks), #2359 (walk depth), #2360 (menu limit) | High — rapid community+author response |
| **Permission/security granularity** | #1186, #2242 (typed execpolicy), #2303 (shell gate inconsistency) | Medium — active PR |
| **China/regional compatibility** | #1681 (region-aware search), #1104 (deepseek-cn provider), #1901 (CNY/USD currency) | Medium — user base growth |
| **Plugin/hook ecosystem parity** | #1172 (plugin market), #1364 (hook mutation rights), #2362 (MCP sub-agent access) | Medium — competing tools cited |
| **Config consolidation** | #1224 (single directory), #2369 (path fragmentation), #2353 (legacy path references) | High — rebrand forcing function |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Rebrand migration uncertainty** | #1969, #2353, #2369, #2467 | Users fear data loss; legacy paths persist in error messages and docs |
| **Cache hit rate opacity** | #1120, #2264, #2127 | Unpredictable costs; debugging tools inadequate |
| **Hardcoded limits without escape hatches** | #2309, #2359, #2360, #2469 | Power users hit ceilings; recent fixes show responsiveness |
| **Mode-specific tool availability surprises** | #2328, #2303, #2362 | Agent vs. YOLO behavior undocumented; security gates inconsistently applied |
| **Windows/Cygwin second-class experience** | #1779, #2369 | Shell dispatch, path resolution, terminal integration gaps |
| **Sub-agent/MCP architecture limitations** | #2362, #1786 | Multi-agent workflows break tool inheritance; work queue sync issues |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-31→2026-06-01. Project: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*