# AI CLI Tools Community Digest 2026-05-23

> Generated: 2026-05-23 00:24 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-23

## 1. Ecosystem Overview

The AI CLI tools landscape in mid-2026 is characterized by **intense feature parity competition** across seven major players, with all tools converging on agentic workflows, MCP ecosystem integration, and enterprise-grade observability. **Stability has overtaken novelty as the primary battleground**: every major tool faces critical regressions in session persistence, permission systems, or terminal rendering. The Rust and TypeScript rewrites (Codex, Kimi) signal performance maturation, while incumbent tools (Claude Code, Copilot CLI) prioritize incremental reliability over architectural overhauls. Documentation debt and Windows platform parity remain universal blind spots despite expanding user bases.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Releases (24h) | Release Velocity Pattern |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 10 hot issues tracked | 5 (2 spam) | **2** (v2.1.148 hotfix + v2.1.149) | Rapid patch cadence; cost/usage features |
| **OpenAI Codex** | 10 hot issues | **10** substantive | **2** alpha (0.134.0-alpha.1/2) | Telemetry-heavy; alpha iteration |
| **Gemini CLI** | 10 hot issues | **10** (all security/stability fixes) | **2** (v0.43.0 stable + v0.44.0-preview) | Security-first; stable + preview dual track |
| **GitHub Copilot CLI** | 10 hot issues | 1 (spam only) | **4** rapid-fire (v1.0.52-1 through -4) | Patch-release driven; minimal community PR |
| **Kimi CLI** | 5 hot issues | 4 | 0 | Maintenance mode; Python→TS rewrite ongoing |
| **OpenCode** | 10 hot issues | 9 | **1** (v1.15.9, immediate hotfix needed) | Feature-rich but regression-prone |
| **Pi** | 10 hot issues | **10** | 0 | Extension ecosystem focus; auth expansion |
| **Qwen Code** | 10 hot issues | 9 | **1** nightly (CI failed initially) | Daemon mode architecture; memory crisis |
| **DeepSeek TUI** | 6 hot issues | 8 | 0 | Permission system construction; TUI polish |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Session portability & resume robustness** | Claude Code (#58554, #58591), OpenAI Codex (#18993, #20952), Kimi (#2269), Pi (#4874), Copilot CLI (#2012, #2209) | Cross-device handoff, deterministic session IDs, `cwd` relocation, branch state refresh, parentUuid chain integrity |
| **Context/token transparency** | OpenAI Codex (#23794, 97 👍), Claude Code (#18241, /usage breakdown), Copilot CLI (v1.0.52-2 tier enforcement), Qwen Code (#4444) | Real-time budget burn visibility, context window pressure indicators, per-category cost breakdowns, cache hit metrics |
| **Programmatic permission automation** | Claude Code (#51798, hook regression), DeepSeek TUI (#1189→#1509 execpolicy chain), OpenCode (#13827, #28921), Codex (#14774) | PreToolUse/PostToolUse hooks, typed execpolicy rules, CI/CD sandboxing, `allow` persistence without interactive prompts |
| **MCP ecosystem resilience** | Claude Code (#49979, #53408, #60929), Kimi (#2343), Gemini CLI (#27383, #27377), OpenCode (#7334, #28732), Qwen Code (#4410) | Graceful degradation on timeout, blacklist/whitelist enforcement, tool quantity scaling (>128), atomic refresh, SSRF prevention |
| **Windows platform parity** | Codex (#19365, #21781, #23740, #23031), Claude Code (#49979 cluster), Gemini CLI (#21983), Qwen Code (#4420 P1), Pi (#4780, #4399), DeepSeek TUI (#1615) | TUI ANSI rendering, browser tool exposure, sandbox policy compatibility, path handling, IME support |
| **Subagent/orchestration reliability** | Gemini CLI (#21409 hangs, #22323 false success, #21968 underutilization), OpenCode (#28738 interrupt propagation, #4865 sidebar), Claude Code (#51798) | Lifecycle management, success/failure accuracy, turn limit handling, interrupt propagation, discoverability |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Differentiation |
|:---|:---|:---|
| **Enterprise automation & CI/CD** | Claude Code, Copilot CLI | Claude Code: granular cost visibility (`/usage` categories), workload identity federation (#61584). Copilot CLI: context tier enforcement, Autopilot permission suppression, but remote session policy confusion (#3442) |
| **Telemetry & observability depth** | OpenAI Codex, Qwen Code | Codex: W3C traceparent, per-turn timing decomposition, app-server/thread/turn lifecycle granularity. Qwen: subagent span isolation, retry visibility, deterministic `/review` gates |
| **Security hardening velocity** | Gemini CLI | MCP RCE blacklist bypass fix (#27377), SSRF redirect prevention (#27335), PTY memory leak fixes (#27154, #27372) — most concentrated security push |
| **Extension ecosystem openness** | Pi, OpenCode | Pi: message decorators (#4904), `promptGuidelines` API (#4879), Codex device code auth (#4911). OpenCode: provider cache config (#5422), Kiro/Bedrock (#9164), OpenTelemetry (#5245) |
| **Terminal-native UX** | DeepSeek TUI | Ratatui-based with explicit Claude Code parity targets (#1916 statusline); structured approval previews (#1765); YAML SKILL.md parsing (#1908) |
| **Architectural transition** | Kimi, Codex | Kimi: 32k-line Python→Bun/TypeScript/React Ink rewrite (#1707). Codex: Rust CLI alpha series (0.134.x) with zsh fork bundling |
| **Multi-modal / memory features** | Gemini CLI | Auto Memory skill proposal system (not auto-application), server-driven model routing proposal (#20878) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **🔥 Highest velocity** | Claude Code, Copilot CLI, Gemini CLI | Multiple releases/24h; rapid security patches; enterprise feature depth. Claude Code's 11 docs issues from single contributor suggests scale of systematic quality investment |
| **🏗️ Active construction** | OpenAI Codex, Qwen Code, OpenCode | Codex: 10 substantive PRs with telemetry infrastructure. Qwen: daemon mode architecture (#4175, 31 comments). OpenCode: 9 open feature PRs but v1.15.9 regression crisis shows QA gap |
| **🔄 Transition/rewrite phase** | Kimi | Python→TS rewrite (#1707) absorbing maintainer attention; minimal releases; community filing polish issues against stagnant stable |
| **🌱 Ecosystem building** | Pi, DeepSeek TUI | Pi: extension API expansion with HF co-founder involvement. DeepSeek TUI: permission system foundation being laid (3-PR chain); early-stage hook architecture proposal (#1917) |

**Maturity signals**: Claude Code and Copilot CLI show operational maturity (cost controls, enterprise auth, fleet management). OpenCode and Qwen Code exhibit **growth pain patterns** — rich feature pipelines coexisting with critical stability regressions. Gemini CLI's security-focused PR cluster indicates production-readiness prioritization over feature expansion.

---

## 6. Trend Signals

| Trend | Signal Strength | Implications for Developers |
|:---|:---:|:---|
| **Cost observability as core requirement** | ⬆️⬆️⬆️ | Per-category usage breakdowns (Claude Code), reasoning token display (Copilot), cache metrics (Qwen) — budget-aware development is now table stakes. Expect SDK-level metering APIs. |
| **Permission systems as automation gate** | ⬆️⬆️⬆️ | The gap between "interactive allow" and "programmatic grant" is blocking CI/CD adoption across all tools. Typed policy engines (DeepSeek) and hook regressions (Claude #51798) indicate this is unsolved. |
| **MCP as liability surface** | ⬆️⬆️⬆️ | Security issues (RCE, SSRF, blacklist bypass) and reliability failures (timeout cascades, tool quantity limits) now dominate PR pipelines. MCP client hardening is becoming as important as MCP server authoring. |
| **Session state as distributed systems problem** | ⬆️⬆️ | Cross-device handoff, resume with `cwd` changes, branch refresh, and `parentUuid` integrity all expose that "chat persistence" is really a distributed state management challenge. |
| **Windows as persistent tax** | ⬆️⬆️ | Every tool has a Windows-specific issue cluster. Terminal escape sequences, sandbox policies, and path handling are not one-time fixes but ongoing maintenance burdens. |
| **Context window tiering friction** | ⬆️⬆️ | Copilot's 200K vs 1M enforcement (#3355) and Claude's percentage mismatch (#18241) reveal that "bigger context" features are operationally immature — accounting, compaction behavior, and user expectations are misaligned. |
| **Documentation as competitive moat** | ⬆️ | Claude Code's systematic docs debt (11 issues/1 day) and Codex's permission configuration confusion (#14774, #16845) show that implementation speed is outpacing explainability — tools that solve self-service documentation will reduce support burden and improve adoption. |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-23 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal pain point identified; affects every document Claude generates; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **ODT/OpenDocument** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Full ODT/ODS lifecycle: create, fill templates, parse to HTML; LibreOffice/ISO standard compliance | Enterprise open-source document workflow demand; bridges gap between proprietary formats and open standards |
| 3 | **Frontend Design** (Improvement) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and actionability—every instruction executable within single conversation | Meta-quality concern: making skills actually *usable* by Claude vs. human-readable documentation |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skills across 5 dimensions (structure, documentation, examples, security, resources) | First systematic approach to skill validation; 20% weight on SKILL.md quality signals ecosystem maturity needs |
| 5 | **PDF Fixes** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Case-sensitive file reference corrections (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) | Cross-platform reliability; breaks on Linux/containers—indicates production deployment friction |
| 6 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation for unquoted descriptions containing `:` | Silent failure prevention; developer experience improvement for skill authors |
| 7 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Prevents `w:id` collision between tracked changes and existing bookmarks | Deep OOXML expertise; document corruption root cause analysis |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |

**Note:** All top PRs show `Comments: undefined` in raw data, but ranking reflects community attention via update frequency, cross-references, and issue linkage. All remain **open**—no merges in top tier indicates review bottleneck.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Priority Signal |
|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) | 🔥 Highest |
| **Skill Distribution Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 2 👍) | 🔥 High |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#1102](https://github.com/anthropics/skills/issues/1102) | High |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍) | High |
| **Plugin Architecture Fixes** | [#189](https://github.com/anthropics/skills/issues/189), [#1087](https://github.com/anthropics/skills/issues/1087) | Medium-High |
| **Cloud/Bedrock Deployment** | [#29](https://github.com/anthropics/skills/issues/29) | Medium |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (closed) | Emerging |

**Key Insight:** The #1 demand is not *more skills* but *skill infrastructure*—sharing, trust boundaries, evaluation frameworks, and MCP standardization.

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal problem; clear scope; no dependencies | Maintainer review bandwidth |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive coverage (Testing Trophy, React, E2E, mocking); fills major gap | Scope creep—may need splitting |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | Live service integration (appdeploy.ai); full-stack deployment from Claude | External service dependency review |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Unique capability—AppleScript vs. screenshot-based; two-tier permission model | Security review for OS-level access |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Broad enterprise ITSM coverage; ITOM/ITAM/SecOps/FSM/SPM/CSDM | Scope very broad; may need modularization |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 4-skill cognitive framework (kernel, advisor, agent, memory); structured knowledge management | Complexity; ecosystem dependency |
| **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent context across conversations; `proactive_context` pattern | Overlap with AURELION memory; may consolidate |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for more individual skills, but for *skill infrastructure*—org-wide sharing mechanisms, trust-verified distribution, reliable evaluation frameworks, and MCP-native interoperability—revealing a maturation phase where quantity gives way to quality assurance and enterprise governance.**

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills repository. All links verified as of 2026-05-23.*

---

# Claude Code Community Digest — 2026-05-23

## Today's Highlights

Anthropics shipped two releases in 24 hours, with v2.1.149 adding granular cost visibility via `/usage` per-category breakdowns and keyboard-navigable `/diff` views—while a rapid v2.1.148 hotfix addressed a Bash exit code 127 regression. Meanwhile, the community continues to surface documentation gaps at scale, with contributor **coygeek** filing or updating **11 distinct docs issues** in a single day, suggesting a systematic documentation quality push alongside core stability concerns.

---

## Releases

| Version | Key Changes |
|--------|-------------|
| **[v2.1.149](https://github.com/anthropics/claude-code/releases/tag/v2.1.149)** | `/usage` now breaks down limits consumption by category (skills, subagents, plugins, per-MCP-server cost); `/diff` detail view gains full keyboard navigation (arrows, `j`/`k`, `PgUp`/`PgDn`, `Space`, `Home`/`End`); Markdown output rendering restored |
| **[v2.1.148](https://github.com/anthropics/claude-code/releases/tag/v2.1.148)** | Hotfix: Bash tool no longer returns spurious exit code 127 (regression from 2.1.147) |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#51798](https://github.com/anthropics/claude-code/issues/51798)** | `PreToolUse` hook `permissionDecision: "allow"` fails to suppress Bash sandbox prompt (2.1.116+ regression) | Breaks automated CI/CD workflows relying on programmatic permission grants; 24 comments indicate active enterprise use of hooks | 🔴 24 comments, 3 👍 — highest engagement |
| **[#18241](https://github.com/anthropics/claude-code/issues/18241)** | Context percentage mismatch across `/context`, statusline API, and internal limit trigger | Core reliability issue: developers can't trust context accounting, leading to silent truncation or premature failures | 🔴 4 comments, 13 👍 — strong upvote signal |
| **[#44536](https://github.com/anthropics/claude-code/issues/44536)** | Lazy context loading: extend `ToolSearch` pattern to all context components | Performance optimization with 5 upvotes; addresses startup latency for large codebases | 🟡 4 comments, 5 👍 |
| **[#49979](https://github.com/anthropics/claude-code/issues/49979)** | Claude in Chrome MCP: navigate/read_page denied on ALL domains from Claude Desktop (Windows 11) | Complete MCP browser automation failure on Windows; no approval popup renders, blocking web-based workflows | 🟡 6 comments, 1 👍 |
| **[#58554](https://github.com/anthropics/claude-code/issues/58554)** | Resume loses most context: `parentUuid` chain breaks on unpersisted messages | Data loss on session resume undermines core product promise of persistent, long-running sessions | 🟡 5 comments |
| **[#53408](https://github.com/anthropics/claude-code/issues/53408)** | MCP claude.ai Microsoft 365 connector rejects personal Microsoft accounts | Blocks individual developers/prosumers from M365 integration; 7 upvotes show demand beyond enterprise tenants | 🟡 2 comments, 7 👍 |
| **[#61456](https://github.com/anthropics/claude-code/issues/61456)** | Scheduled tasks: sidebar section and "Run now" button removed (regression) | UI regression breaks automation workflows; suggests recent redesign disrupted existing functionality | 🟡 2 comments, 1 👍 |
| **[#58591](https://github.com/anthropics/claude-code/issues/58591)** | Resume sessions in different working directory: `--cwd` flag | Addresses session portability for renamed/moved projects; companion to #61589 (closed as related) | 🟡 2 comments, 2 👍 |
| **[#60929](https://github.com/anthropics/claude-code/issues/60929)** | FleetView desktop session returns 403 for cloud MCP connectors (Slack) | Enterprise fleet management feature blocked from cloud integrations; affects multi-user deployments | 🟡 3 comments |
| **[#55123](https://github.com/anthropics/claude-code/issues/55123)** | Dispatch session wedged after April 28 app update; server-side pairing state stuck | Cowork/dispatch feature remains broken post-update; server-side state management issue | 🟡 3 comments |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#61584](https://github.com/anthropics/claude-code/pull/61584)** | Use workload identity federation for Claude auth in CI workflows | Security hardening: replaces static `ANTHROPIC_API_KEY` with OIDC-based short-lived tokens via GitHub Actions | ✅ **Merged** |
| **[#61373](https://github.com/anthropics/claude-code/pull/61373)** | `security-guidance`: add `exclude_substrings` to cut false positives | Fixes well-known false positives (`ast.literal_eval`, `db.exec(...)`) in security scanning; references #55464 | 🔄 Open |
| **[#60813](https://github.com/anthropics/claude-code/pull/60813)** | Fix excessive token consumption on initial prompt and simple continuations | Claims #56136; appears to be an external contributor's optimization attempt | 🔄 Open |
| **[#61478](https://github.com/anthropics/claude-code/pull/61478)** | Claude/marketing management system t97e l | Spam/low-quality submission | 🔄 Open |
| **[#58673](https://github.com/anthropics/claude-code/pull/58673)** | `s` | Spam/minimal content | 🔄 Open |

*Note: Only 5 PRs had 24h activity. Two appear to be spam from user `sjbrenchley89`; one is a legitimate security fix, one infrastructure improvement, and one unverified optimization claim.*

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session portability & resume robustness** | #58554 (broken `parentUuid`), #58591 (`--cwd` flag), #61589 (cwd relocation for dead remotes) | 🔥 Active — core workflow reliability |
| **Lazy/eager context loading controls** | #44536 (extend `ToolSearch` pattern), related performance asks | 🟡 Steady — scale-related |
| **Programmatic permission automation** | #51798 (hook regression), #57439 (plan mode docs clarify `Edit` rules) | 🔥 Active — enterprise automation |
| **MCP ecosystem expansion** | #53408 (M365 personal accounts), #60929 (FleetView cloud MCP), #49979/#58464 (Chrome MCP domain issues) | 🔥 Active — integration breadth |
| **Documentation completeness** | 11 issues from coygeek alone covering `/mcp`, `/doctor`, `/clear`, WSL, VS Code, skills, PR review, agent view | 🔥 Surge — systematic docs debt |

---

## Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Permission system regressions & opacity** | #51798 (hook bypass broken), #57439 (unclear `Edit` allow rules), sandbox prompt inconsistencies | 🔴 **High** — breaks automation contracts |
| **Session state fragility** | #58554 (context loss on resume), #58591/#61589 (cwd rigidity), #61456 (scheduled tasks UI removal) | 🔴 **High** — erodes trust in persistence |
| **MCP domain/approval handling** | #49979, #58464, #51850 (Chrome MCP blocks), #53408 (auth scope limits) | 🟡 **Medium-High** — integration friction |
| **Documentation drift from implementation** | Massive cluster from coygeek: `/simplify`→`/code-review` migration incomplete, missing env vars, outdated tool behavior descriptions | 🟡 **Medium** — onboarding/self-service cost |
| **Context accounting accuracy** | #18241 (percentage mismatch across surfaces) | 🟡 **Medium** — silent operational risk |
| **Windows-specific instability** | #49979, #58464, #51850, #61414 (limit bug video) cluster on Windows | 🟡 **Medium** — platform parity gap |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-23

---

## 1. Today's Highlights

The Codex team is actively shipping Rust CLI alphas (0.134.x) while a major telemetry instrumentation push landed across app-server, thread, and turn lifecycle events. The community is intensely focused on **Windows TUI regressions** and **context transparency**, with a top-voted issue (97 👍) demanding the return of visible token/context usage indicators in the Desktop app.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **[rust-v0.134.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.2)** | Second alpha in the 0.134 series; no detailed changelog published |
| **[rust-v0.134.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.1)** | Initial 0.134.0 alpha |

*Both releases are minimal GitHub-generated release notes without enumerated changes—typical for rapid alpha iteration.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#23794](https://github.com/openai/codex/issues/23794)** | Codex Desktop no longer shows visible context/token usage indicator | **Most-voted issue (97 👍, 87 comments)**. Users lost critical visibility into budget burn and context window pressure—essential for iterative AI dev workflows. | Strong demand for restoration; cross-platform reports |
| **[#18993](https://github.com/openai/codex/issues/18993)** | Unable to open past conversation history in VS Code extension | **Regression breaking core IDE workflow**; 47 👍 indicates widespread VS Code extension users blocked from session continuity. | Frustration over data accessibility; "plus" subscriber impact |
| **[#19365](https://github.com/openai/codex/issues/19365)** | Windows Codex App: Browser Use unavailable because Node REPL tool is not exposed | **Platform-parity gap**: Browser Use (a headline feature) silently fails on Windows due to missing tool exposure. 14 👍. | Windows users feel second-class; skills marketplace promise unfulfilled |
| **[#23031](https://github.com/openai/codex/issues/23031)** | Regression: Codex CLI 0.131.0-alpha.22 prints raw ANSI escape sequences in Windows TUI | **Closed** but emblematic of recurring Windows TUI quality issues; bisected to specific alpha range. | User did excellent regression analysis; fix validated |
| **[#10185](https://github.com/openai/codex/issues/10185)** | Mode switch Plan → Code still behaves like Plan | **Long-standing TUI state bug** (since Jan); mode confusion wastes tokens and user time. | Persistent despite multiple versions; Linux/Pro user |
| **[#17320](https://github.com/openai/codex/issues/17320)** | Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG | **Performance regression**: Uncontrolled TRACE logging hammers disk, ignores standard Rust log filtering. | Linux Mint/VSCodium user; infrastructure concern for long sessions |
| **[#21781](https://github.com/openai/codex/issues/21781)** | [Windows] Browser plugin fails with "browser-client is not trusted" | **Security/policy friction** on Windows blocking browser automation; contradicts advertised Chrome/IAB backend support. | Pro user; trust model unclear |
| **[#23195](https://github.com/openai/codex/issues/23195)** | Mac OS could not open codex because it's malware | **Gatekeeper/notarization failure** mid-session; breaks trust and workflow continuity. Business subscriber. | macOS code-signing/stapling issue; 5 👍, growing |
| **[#23740](https://github.com/openai/codex/issues/23740)** | Latest npm Codex CLI renders raw ANSI/control sequences in Windows Terminal | **New Windows TUI regression** (0.131.0–0.132.0); 0.130.0 known-good baseline. 4 👍. | Pattern of Windows terminal handling degradation |
| **[#23984](https://github.com/openai/codex/issues/23984)** | Meta: /goal failures hide DB/schema/process mismatch after goal storage changes | **Observability gap**: Generic error messages mask root causes across multiple failure modes. | Fresh meta-issue (May 22); calls for better error taxonomy |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Impact |
|---|-----|-------------|--------|
| **[#24126](https://github.com/openai/codex/pull/24126)** | feat(next-prompt): add suggestion engine [1 of 3] | Core suggestion engine for next-prompt feature; decoupled from API/UI for clean review | Enables proactive prompt assistance; foundational for UX improvements |
| **[#24164](https://github.com/openai/codex/pull/24164)** | fix(remote-control): cap reconnect backoff | Caps websocket reconnect delay ceiling for remote-control sessions | Prevents indefinite retry stretching; improves debuggability |
| **[#24154](https://github.com/openai/codex/pull/24154)** | Add experimental turn additional context | `additionalContext` field for `turn/start` and `turn/steer` for ephemeral external state (browser, automation) | Critical for computer-use and browser-use integrations without prompt pollution |
| **[#24144](https://github.com/openai/codex/pull/24144)** | Track turn timing in ChatGPT telemetry | Per-turn timing decomposition: request-start delay, sampling, blocking tool critical path | Enables precise latency attribution; product optimization data |
| **[#24143](https://github.com/openai/codex/pull/24143)** | Track thread start in ChatGPT telemetry | Separates thread initialization latency from turn telemetry | Cleaner metrics for forked/resumed threads |
| **[#24142](https://github.com/openai/codex/pull/24142)** | Track app-server start in ChatGPT telemetry | App-server startup as standalone signal | Process start-to-ready measurement; separates from thread/turn noise |
| **[#23757](https://github.com/openai/codex/pull/23757)** | Default function tools into tool hooks | Auto-wires `PreToolUse`/`PostToolUse`/`updatedInput` for local function tools | Eliminates coverage gaps as new tools added; maintainability win |
| **[#24118](https://github.com/openai/codex/pull/24118)** | feat: support oneOf and allOf in tool input schemas | JSON Schema composition keyword preservation for MCP connector tools | Unblocks richer connector schemas; MCP ecosystem compatibility |
| **[#23756](https://github.com/openai/codex/pull/23756)** | package: include zsh fork in Codex package | Bundles prebuilt zsh fork in package layout; eliminates manual `zsh_path` config | Simplifies `shell_zsh_fork` enablement; packaging completeness |
| **[#24160](https://github.com/openai/codex/pull/24160)** / **[#24161](https://github.com/openai/codex/pull/24161)** | Add forked_from_thread_id / subagent lineage turn metadata | Provenance tracking for forked threads and subagent spawning chains | Enables downstream consumers to reconstruct history graphs; observability |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Context/Token Transparency** | #23794 (97 👍), #20952 (session JSONL schema docs) | **Highest demand**; users need visibility into spend and window pressure |
| **Subagent Workspace Control** | #23095 (spawn_agent `cwd` parameter) | Multi-agent orchestration emerging as power-user pattern |
| **Session Portability & Schema Stability** | #20952, #17900 (thread/read vs resume semantics) | External integrations (CI, dashboards) need contracts |
| **Windows Parity** | #19365, #21781, #23740, #23031, #24098 | Persistent theme: browser use, sandboxing, TUI rendering all lag |
| **Sandbox/Permission Clarity** | #14774 (`allow_login_shell` vs `shell_environment_policy`), #16845 (misleading prefix prompts) | Configuration surface is powerful but poorly documented |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Windows TUI/ANSI regressions** | 🔴 High | High | #23031, #23740, #23043 — repeated cycle of broken terminal rendering across alpha bumps |
| **Opaque/misleading error messages** | 🔴 High | Medium-High | #23984 (`/goal` generic failures), #22423 (CLI binary missing), #24021 (can't open CLI) — errors don't point to actionable fixes |
| **Desktop app configuration drift** | 🟡 Medium | Medium | #22075 (rename stale metadata), #24065 (config.toml concurrent modification), #24158 (unclickable controls) — settings layer is fragile |
| **macOS trust/notarization** | 🟡 Medium | High | #23195 — Gatekeeper blocking app as malware; breaks user trust |
| **Browser/Computer Use platform gaps** | 🟡 Medium | High | #19365, #21781, #24086 — headline features fail on Windows or locked Mac setups |
| **Corporate proxy/enterprise auth** | 🟢 Low but chronic | High | #6849 — OAuth behind custom CA; enterprise deployment blocker since Nov 2025 |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-22/23.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-23

## Today's Highlights

The project shipped **v0.43.0 stable** and **v0.44.0-preview.0** with improved edit tool steering and Auto Memory documentation clarifications. Security and stability dominated the PR pipeline with fixes for MCP RCE vulnerabilities, PTY memory leaks, and SSRF via open redirects. Agent reliability remains the top community concern, with multiple P1 bugs tracking subagent hangs, incorrect success reporting, and insufficient skill utilization.

---

## Releases

### [v0.43.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.43.0)
- **feat(core):** Steer model to use edit tool for surgical edits, reducing unnecessary file rewrites ([PR #26480](https://github.com/google-gemini/gemini-cli/pull/26480))
- **docs:** Clarify that Auto Memory proposes memory updates and skills rather than applying them automatically ([PR #26](https://github.com/google-gemini/gemini-cli/pull/26))

### [v0.44.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0)
- Version bump to `0.44.0-nightly.20260512.g022e8baef` ([PR #26957](https://github.com/google-gemini/gemini-cli/pull/26957))
- Changelog automation and continued `no-unsafe` refactoring work

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | EPIC to mature the behavioral eval test suite (76 tests across 6 models); critical for preventing regressions in agent quality | 7 comments, maintainer-only, actively tracked |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could reduce token waste and misaligned reads by using syntax-aware boundaries instead of line-based heuristics | 7 comments, 1 👍, linked to tooling investigations |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** | Severe UX bug: subagent defers hang indefinitely (up to 1 hour observed), forcing users to disable subagents entirely | 7 comments, 8 👍, high user impact |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Silent failure mode hides interruption; `codebase_investigator` claims success despite hitting turn limits with zero analysis | 6 comments, 2 👍, reliability concern |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills and sub-agents enough** | Custom skills (gradle, git) ignored even for relevant tasks, forcing explicit user prompts—undermines core value proposition | 6 comments, anecdotal but widely echoed |
| [#27035](https://github.com/google-gemini/gemini-cli/issues/27035) | **Shift+Tab does not change mode** | Regression broke key UI navigation; now closed but indicates UI stability issues | 4 comments, recently closed |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck with "Waiting input"** | Simple commands falsely appear to await input, breaking automation trust | 4 comments, 3 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails in Wayland** | Linux compatibility gap for browser automation, limiting platform support | 4 comments, 1 👍 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction and reduce Auto Memory logging** | Security: secrets reach model context before redaction; service-side logging of skills data | 3 comments, privacy-focused |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done output hook causes crash** | Crash near completion of long-running task output, losing work and context | 3 comments, disruptive UX |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#27383](https://github.com/google-gemini/gemini-cli/pull/27383) | **fix(mcp-client): prevent eager tool wipe on network timeout** | Atomic MCP tool refresh—retains existing tools during transient network drops, eliminating "tool not found" errors | Open |
| [#27377](https://github.com/google-gemini/gemini-cli/pull/27377) | **fix(core): prevent blacklist bypass in mcp list** | Critical RCE fix: stops malicious workspace MCP servers from bypassing `mcp.excluded`/`mcp.allowed` restrictions | Open |
| [#27348](https://github.com/google-gemini/gemini-cli/pull/27348) | **fix: wrap Ajv validate() in try/catch** | Prevents crashes from malformed LLM parameter shapes in `write_file`/`replace` tools | Open |
| [#27349](https://github.com/google-gemini/gemini-cli/pull/27349) | **fix: strip CJK characters from model thought output** | Sanitizes non-English text leaking into English thought streams, reducing token noise | Open |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | **fix(core): prevent PTY memory leak** | Synchronous cleanup of PTY entries fixes file descriptor exhaustion in long sessions | Open |
| [#27372](https://github.com/google-gemini/gemini-cli/pull/27372) | **fix(core): catch EBADF when resizing exited PTY** | Race condition fix for terminal resize after shell process exit | Open |
| [#27335](https://github.com/google-gemini/gemini-cli/pull/27335) | **fix(core): prevent SSRF via open redirect in web-fetch** | Closes SSRF vector where redirect destinations bypass `isBlockedHost` checks (e.g., to 169.254.169.254) | Open |
| [#27341](https://github.com/google-gemini/gemini-cli/pull/27341) | **fix(core): strip functionCall.id and functionResponse.id** | Resolves 400 "Unknown name 'id'" errors post-tool-call by sanitizing ACP internal IDs from API payload | Open |
| [#27365](https://github.com/google-gemini/gemini-cli/pull/27365) | **Add ephemeral session mode (--ephemeral)** | New CLI flag for headless/automated runs that suppresses session log accumulation | Open |
| [#27071](https://github.com/google-gemini/gemini-cli/pull/27071) | **Update default auto routing** | Upgrades `flash-lite` alias to `gemini-3.1-flash-lite` for internal tools | Open |

---

## Feature Request Trends

1. **AST-aware tooling integration** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) investigate syntax-aware reads, search, and codebase mapping via tools like `ast-grep`, `tilth`, and `glyph`. Goal: precise method-boundary extraction and reduced token noise.

2. **Agent self-awareness and discoverability** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests the CLI accurately explain its own flags, hotkeys, and execution modes; [#22741](https://github.com/google-gemini/gemini-cli/issues/22741) wants backgroundable local agents with Ctrl+B.

3. **Server-driven model management** — [#20878](https://github.com/google-gemini/gemini-cli/issues/20878) proposes centralized model routing via `LoadCodeAssist`, deprecating hardcoded client-side model lists.

4. **Enhanced browser automation resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery instead of fail-fast on locked profiles.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Subagent reliability failures** | Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), unauthorized activation ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) | **Critical** — Core feature unusable for many |
| **Skill/sub-agent underutilization** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) documents custom skills ignored despite relevance; degrades investment in skill authoring | **High** |
| **Shell/PTY lifecycle bugs** | "Waiting input" ghosts ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), memory leaks ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154)), EBADF races ([#27372](https://github.com/google-gemini/gemini-cli/pull/27372)) | **High** |
| **Security hardening gaps** | MCP blacklist bypass ([#27377](https://github.com/google-gemini/gemini-cli/pull/27377)), SSRF via redirects ([#27335](https://github.com/google-gemini/gemini-cli/pull/27335)), Auto Memory secret handling ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) | **High** — Active remediation |
| **Terminal UI stability** | Resize flicker ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), external editor corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), mode switching regressions ([#27035](https://github.com/google-gemini/gemini-cli/issues/27035)) | **Medium** |
| **Tool quantity limits** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246): 400 error with >128 tools; needs smarter scoping | **Medium** |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-23

---

## 1. Today's Highlights

Three rapid-fire releases (v1.0.52-1 through v1.0.52-4) landed in 24 hours, delivering end-to-end context window tier enforcement, mouse-driven scrollbar support, and critical fixes for Autopilot permission prompts and session resume branch refresh. The community is actively debating sandboxed file access, project-scoped plugins, and enterprise remote session enablement as the CLI matures into multi-developer and CI/CD workflows.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.52-4** | **Added:** Vertical scrollbar with mouse drag support in conversation view. **Fixed:** Autopilot mode no longer spuriously requests tool/path/URL permissions; `copilot --continue` properly refreshes saved branch state. |
| **v1.0.52-2** | **Added:** Context window tier selection (~200K vs 1M) now actually constrains compaction, truncation, and token display end-to-end. **Improved:** Reasoning tokens shown parenthetically in usage summary. |
| **v1.0.52-1** | **Improved:** `/statusline` supports plain shell commands (not just script paths); auto-prunes `~/.copilot/logs/` at startup; cleaner picker UI. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#700](https://github.com/github/copilot-cli/issues/700) | **List all supported models** (`copilot --list-models`) | Transparency gap: developers can't discover model capabilities, pricing multipliers, or availability without trial-and-error. | 13 comments, 3 👍 — long-running request, author actively engaged |
| [#892](https://github.com/github/copilot-cli/issues/892) | **Sandbox mode for filesystem restriction** | Critical for CI/CD and untrusted codebases; current unrestricted access is a security blocker for enterprise adoption. | 44 👍, 9 comments — **highest-voted open feature** |
| [#1665](https://github.com/github/copilot-cli/issues/1665) | **Project-scoped plugins (not per-user)** | Team workflows require reproducible plugin environments; global install breaks shared project setups. | 13 👍, 7 comments — configuration management pain |
| [#1999](https://github.com/github/copilot-cli/issues/1999) | **German keyboard: `@` (Alt-Gr+Q) broken** | Complete usability blocker for DE layout users; `@` is essential for mentions and references. | 6 comments, 1 👍 — regression since v1.0.2 |
| [#2216](https://github.com/github/copilot-cli/issues/2216) | **Text selection invisible on dark terminals** | Accessibility failure; selection color (dark purple) matches common dark backgrounds. | 5 comments, 1 👍 — theming oversight |
| [#3439](https://github.com/github/copilot-cli/issues/3439) | **TUI lag regression in tmux/mintty/Cygwin (v1.0.49)** | Windows developer workflow broken; bisected to v1.0.49, v1.0.48 clean. | 4 comments — precise repro, awaiting fix |
| [#3304](https://github.com/github/copilot-cli/issues/3304) | **`ERR_HTTP2_INVALID_SESSION` mid-reasoning** | Destroys long reasoning sessions; transient retry logic fails on destroyed HTTP/2 sessions. | 4 comments — frequent, disruptive |
| [#3355](https://github.com/github/copilot-cli/issues/3355) | **Claude Opus 4.6 capped at 200K vs native 1M** | v1.0.52-2's tier enforcement highlights this: 80% context loss forces premature compaction. | 2 👍, 1 comment — directly related to release changes |
| [#3442](https://github.com/github/copilot-cli/issues/3442) | **Remote sessions disabled in v1.0.51** | Enterprise users suddenly blocked from `/remote on`; unclear if policy or bug. | 8 👍, 2 comments — urgent support escalation pattern |
| [#3459](https://github.com/github/copilot-cli/issues/3459) | **Auto-update check causes NAT rate limits** | Unauthenticated API calls from shared IPs hit GitHub rate limits; breaks corporate networks. | Support escalation — infrastructure blocker |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#3473](https://github.com/github/copilot-cli/pull/3473) | README update (spam/phishing) | **OPEN** | Malicious/spam PR — contains GCash/TEMU referral links and unrelated hardware IDs. Requires immediate triage/closure. |

*No substantive PRs merged or actively reviewed in the last 24 hours. Engineering activity focused on rapid patch releases rather than community PR integration.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Observability & cost control** | [#3474](https://github.com/github/copilot-cli/issues/3474) (dollar tracking), [#3477](https://github.com/github/copilot-cli/issues/3477) (enterprise OTel/mTLS) | Rising — API pricing transition driving urgency |
| **Security isolation** | [#892](https://github.com/github/copilot-cli/issues/892) (sandbox), [#1665](https://github.com/github/copilot-cli/issues/1665) (project-scoped plugins) | High — enterprise/team adoption gate |
| **Model transparency & control** | [#700](https://github.com/github/copilot-cli/issues/700) (list models), [#3355](https://github.com/github/copilot-cli/issues/3355) (context window config) | Sustained — tier enforcement in v1.0.52-2 validates demand |
| **Non-interactive ergonomics** | [#3398](https://github.com/github/copilot-cli/issues/3398) (`--prompt-file`), [#3475](https://github.com/github/copilot-cli/issues/3475) (iTerm2/Shift+Enter) | Growing — automation and power-user workflows |
| **Enterprise hardening** | [#3442](https://github.com/github/copilot-cli/issues/3442) (remote sessions), [#3459](https://github.com/github/copilot-cli/issues/3459) (NAT-friendly updates), [#3477](https://github.com/github/copilot-cli/issues/3477) (mTLS OTel) | Critical — org admin features lagging user needs |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Session corruption & resume fragility** | Multiple issues: [#2012](https://github.com/github/copilot-cli/issues/2012), [#2209](https://github.com/github/copilot-cli/issues/2209), [#2607](https://github.com/github/copilot-cli/issues/2607), [#2490](https://github.com/github/copilot-cli/issues/2490) | **High** — U+2028/U+2029 Unicode line separators repeatedly break `events.jsonl` parsing; authors withdrawing content suggests frustration |
| **Keyboard/terminal compatibility** | [#1999](https://github.com/github/copilot-cli/issues/1999) (German layout), [#3475](https://github.com/github/copilot-cli/issues/3475) (iTerm2), [#3470](https://github.com/github/copilot-cli/issues/3470) (scroll-back) | **High** — international users and terminal emulator diversity poorly supported |
| **Enterprise configuration gaps** | [#3442](https://github.com/github/copilot-cli/issues/3442) (remote sessions), [#3459](https://github.com/github/copilot-cli/issues/3459) (NAT rate limits), [#3477](https://github.com/github/copilot-cli/issues/3477) (OTel auth) | **High** — "contact your administrator" messaging without self-service diagnostics |
| **Agent orchestration reliability** | [#2923](https://github.com/github/copilot-cli/issues/2923) (sub-agent notifications), [#2892](https://github.com/github/copilot-cli/issues/2892) (MCP stdio timeout) | **Medium-High** — multi-agent patterns failing silently |
| **Context window underutilization** | [#3355](https://github.com/github/copilot-cli/issues/3355) | **Medium** — 1M models artificially capped, causing unnecessary compaction |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-05-22 to 2026-05-23.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-23

## Today's Highlights

No new releases shipped in the last 24h, but community activity remains focused on **MCP infrastructure resilience** and **web UI polish**. A critical bug report highlights that MCP connection timeouts can brick the entire CLI, while two new PRs address error message accuracy and RTK tooling defaults. The long-running Python→TypeScript rewrite PR (#1707) saw renewed maintainer attention.

---

## Releases

*No releases in the last 24 hours. Latest stable remains v1.44.0.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2343](https://github.com/MoonshotAI/kimi-cli/issues/2343) | **MCP connection timeout causes entire CLI to be unavailable** | Single-point-of-failure in MCP integration breaks all workflows, not just MCP-dependent ones | Fresh report (0 comments), high severity—needs immediate triage |
| [#2142](https://github.com/MoonshotAI/kimi-cli/issues/2142) | **Agent loops on same shell command; output truncated** | Core agent reliability issue—wasted tokens and broken iteration loops | Persistent since May 1, only 1 comment—may be under-prioritized |
| [#2346](https://github.com/MoonshotAI/kimi-cli/issues/2346) | **Web UI: queued text disappears from input textbox** | Data loss in user input undermines trust in web mode | Same-day report, no comments yet—regression risk |
| [#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269) | **Remote Control / Multi-Device Session Handoff** | Cross-device workflow is a major competitive gap vs. Cursor/Copilot | 4 comments show organic demand, no upvotes yet—feature positioning opportunity |
| [#2345](https://github.com/MoonshotAI/kimi-cli/issues/2345) | **Web UI: truncated paths in processing steps** | Poor information density in status UI forces users to guess what files are being modified | Same author as #2346, bundled UX feedback—polish debt accumulating |

---

## Key PR Progress

| # | PR | Description | Status Signal |
|---|-----|-------------|-------------|
| [#2342](https://github.com/MoonshotAI/kimi-cli/pull/2342) | **Fix misleading "Quota exceeded" prefix on every 403 error** | Corrects error classification—403s from non-quota causes (auth, rate limits, config) were all bucketed as quota issues, causing bad debugging | Fresh, targeted fix; reduces support burden |
| [#2344](https://github.com/MoonshotAI/kimi-cli/pull/2344) | **Add default RTK tool hooks for KimiCLI** | Extends tool ecosystem with Redux Toolkit defaults—signals investment in frontend dev workflows | Community contribution, needs maintainer review |
| [#2215](https://github.com/MoonshotAI/kimi-cli/pull/2215) | **Editable path bar with autocomplete in Workspace sidebar** | Deep-navigation UX improvement for web UI; reduces click-depth in large repos | 12-day-old, active—likely near merge |
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **Rewrite: Python → Bun + TypeScript + React Ink** | Massive 32k-line refactor with 211 commits; promises better performance and terminal-native UI | Controversial ("Python is a complete failure" framing), but updated yesterday—maintainers engaging |

---

## Feature Request Trends

1. **Cross-device session continuity** (#2269) — Users expect seamless handoff between laptop, web, and mobile, matching modern IDE expectations.
2. **Web UI information density** (#2345, #2346) — Status displays need richer context (full paths, preserved input state) without clutter.
3. **MCP ecosystem robustness** (#2343) — Beyond feature requests, users need graceful degradation when external tools fail.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **MCP failures are catastrophic, not graceful** | #2343 — timeout in one MCP server kills entire CLI session | 🔴 Critical |
| **Agent reliability in shell execution** | #2142 — infinite loops and truncated output waste time and tokens | 🟡 High |
| **Error message accuracy** | #2342 — misclassified 403s lead to wrong remediation paths | 🟡 High |
| **Web UI state management fragility** | #2346 — lost user input destroys trust | 🟡 High |
| **Deep directory navigation friction** | #2215 (PR addressing), #2345 — repetitive clicking in large codebases | 🟢 Moderate |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli · 2026-05-23*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-23

## Today's Highlights

OpenCode v1.15.9 shipped with a redesigned diff viewer featuring a file tree and refreshed layout, alongside clearer error handling for invalid models. However, the release introduced immediate regressions: multiple users report the Plan/Build agent selector disappearing and file tree navigation buttons failing in the Desktop app. The community is actively filing detailed bug reports, with the maintainers already responding with a hotfix PR to restore legacy desktop flows.

---

## Releases

**[v1.15.9](https://github.com/anomalyco/opencode/releases/tag/v1.15.9)** — Core improvements to the diff viewer with a new file tree and refreshed layout. Bugfixes include proper screen navigation when closing the diff viewer, clearer errors for invalid/unavailable default models, and better PTY session error surfacing.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#16100](https://github.com/anomalyco/opencode/issues/16100) | Numpad keys broken in VS Code 1.110 integrated terminal | Affects a major IDE integration path; 27 comments show broad impact on daily workflows | 18 👍, active troubleshooting |
| [#28908](https://github.com/anomalyco/opencode/issues/28908) | Plan/Build agent selector disappeared after v1.15.9 update | **Critical regression** — blocks agent selection entirely in Desktop TUI | 10 comments, 3 👍, multiple confirmations |
| [#27530](https://github.com/anomalyco/opencode/issues/27530) | "4 of 5 requests failed" server errors on startup | Prevents app initialization entirely; suggests infrastructure/health check fragility | 10 comments, 8 👍, high severity |
| [#8836](https://github.com/anomalyco/opencode/issues/8836) | Session list shows all sessions instead of directory-scoped ones | Breaks workspace isolation — privacy and context leakage concern | 10 comments, 8 👍, long-running (since Jan) |
| [#28732](https://github.com/anomalyco/opencode/issues/28732) | Gemini 3.5 Flash on Vertex warns about missing `thought_signature` | Vertex AI integration bug affecting multi-tool-call sessions | 12 comments, active investigation |
| [#17648](https://github.com/anomalyco/opencode/issues/17648) | Infinite retry loop with unbounded exponential backoff | **Reliability threat** — no circuit breaker, burns tokens/credits indefinitely | 4 comments, detailed technical report |
| [#28916](https://github.com/anomalyco/opencode/issues/28916) | File list/overview panel button broken in Desktop v1.15.9 | Companion regression to #28908, confirms v1.15.9 Desktop QA gap | 3 comments, Windows-specific |
| [#13827](https://github.com/anomalyco/opencode/issues/13827) | Cannot completely disable the `question` tool | Permission system design flaw — "deny" ≠ "disable", conflicts with wildcard grants | 7 comments, 5 👍, philosophical debate |
| [#15161](https://github.com/anomalyco/opencode/issues/15161) | Noisy "unknown format google-duration" warnings from Firebase MCP | UX papercut cluttering startup; schema compatibility gap | 4 comments, 11 👍, high interest |
| [#28738](https://github.com/anomalyco/opencode/issues/28738) | Interrupting main agent doesn't stop background subagents | Safety/control issue for experimental native subagents | 3 comments, edge case but critical for subagent reliability |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#28919](https://github.com/anomalyco/opencode/pull/28919) | fix(app): restore desktop prod legacy flows | **OPEN** | Emergency fix for v1.15.9 regressions; reverts Desktop prod to pre-v2 Home UI while keeping v2 gated |
| [#28788](https://github.com/anomalyco/opencode/pull/28788) | [beta] feat(app): improve desktop v2 startup and controls | OPEN | Desktop v2 refinements: branch-aware worktree creation, non-blocking MCP status, reduced startup fanout |
| [#28921](https://github.com/anomalyco/opencode/pull/28921) | fix(acp): include shell command and file path in permission prompts | OPEN | Security/UX improvement — permission prompts now show full context of requested actions |
| [#5422](https://github.com/anomalyco/opencode/pull/5422) | feat(provider): provider-specific cache configuration system | OPEN | **Major optimization** — significant token usage reduction for Claude Opus 4.5 via intelligent caching |
| [#9545](https://github.com/anomalyco/opencode/pull/9545) | feat(usage): unified usage tracking with auth refresh | OPEN | Built-in usage monitoring for Claude, Copilot, ChatGPT OAuth; includes SDK/OpenAPI regeneration |
| [#4865](https://github.com/anomalyco/opencode/pull/4865) | feat: add subagents sidebar with clickable navigation | OPEN | Subagent discoverability — sidebar integration with `<leader>+Up` parent return keybind |
| [#9871](https://github.com/anomalyco/opencode/pull/9871) | feat: add /reload slash command | OPEN | Hot-reload config/plugins/MCP without TUI restart; waits for LLM turn completion |
| [#9164](https://github.com/anomalyco/opencode/pull/9164) | feat: add Kiro provider | OPEN | AWS CodeWhisperer/Kiro integration for Claude via Bedrock; plugin-based auth |
| [#5245](https://github.com/anomalyco/opencode/pull/5245) | feat: integrate OpenTelemetry | OPEN | Observability foundation — needs merge conflict resolution from author |
| [#7334](https://github.com/anomalyco/opencode/pull/7334) | feat: Implement MCP server instruction fetching | OPEN | Surfaces previously ignored MCP initialization instructions to the LLM |

---

## Feature Request Trends

1. **TUI/Desktop UI hardening** — Multiple requests for keyboard shortcuts (toggle tool output, numpad support, IDE forwarding), panel visibility controls, and agent selector reliability
2. **Permission system granularity** — Requests for true tool disabling (not just deny), granular URL permissions for `webfetch`, and more contextual permission prompts
3. **Subagent/orchestration visibility** — Sidebar navigation, parent session return, and proper lifecycle management (interrupt propagation)
4. **Provider ecosystem expansion** — Azure Foundry, Kiro, Google Vertex service account auth; plus provider-specific optimizations (cache, reasoning block handling)
5. **Session/workflow management** — Directory-scoped sessions, session list limits, post-chat automation hooks, and configuration hot-reloading

---

## Developer Pain Points

| Theme | Frequency | Details |
|-------|-----------|---------|
| **Desktop release stability** | 🔥 Critical | v1.15.9 introduced multiple UI regressions (agent selector, file tree, panels) suggesting insufficient pre-release testing on Desktop |
| **Terminal/IDE integration fragility** | High | Numpad keys, keyboard shortcuts, and PTY sessions break in VS Code, Cursor, Windsurf — integrated terminal is a second-class citizen |
| **Retry/circuit breaker gaps** | High | Infinite loops on provider errors (unbounded backoff, wrapped stream errors) waste tokens and freeze sessions |
| **MCP/schema compatibility noise** | Medium | Repeated warnings (`google-duration`, `thought_signature`, tool count limits) clutter output and erode trust |
| **Authentication churn** | Medium | OAuth re-authentication triggers (Claude usage resets) and provider-specific auth complexity (Vertex service accounts) |
| **Permission model ambiguity** | Medium | "Deny" vs "disable" confusion, wildcard grant interactions, and lack of fine-grained control frustrate power users |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-23

## Today's Highlights

The Pi team shipped a flurry of cross-platform stability fixes, with **path handling on Windows** getting a major cleanup and **IME preedit flicker** resolved for CJK users. Meanwhile, the **Codex device code login** PR opened, signaling expanded provider authentication options beyond GitHub Copilot. Extension lifecycle management saw significant attention with three related PRs merging to fix git ref reconciliation during updates.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **Official local LLM provider extension** | Top-voted open issue (30 👍); dynamic model list fetching would unlock Ollama/llama.cpp/LM Studio integration without manual configuration. Critical for privacy-conscious and self-hosted workflows. | 20 comments, active design discussion; julien-c (Hugging Face co-founder) authoring signals ecosystem importance |
| [#4801](https://github.com/earendil-works/pi/issues/4801) | **DeepSeek v4 pro `reasoning_effort` rejected on OpenRouter** | OpenRouter compatibility breakage for a trending model; enum mismatch between Pi's `"xhigh"` and API's expected format blocks premium reasoning features. | Reported with clear repro, 4 comments; provider-specific quirk highlighting fragmentation in OpenAI-compatible implementations |
| [#4874](https://github.com/earendil-works/pi/issues/4874) | **Allow CLI callers to provide session ID** | Enables deterministic session resumption for CI/CD and automated workflows; current auto-generation breaks idempotent tooling. | 3 comments; ertygiq notes `--session` file-path workaround is insufficient for ephemeral environments |
| [#4876](https://github.com/earendil-works/pi/issues/4876) | **`pi update` silently stays on 0.74.1 under Node 20** | Silent failure mode is dangerous; engine requirement bump to Node ≥22.19 stranded users without clear messaging. | 4 comments; choilive requests Node 20 compatibility or explicit error—debate on LTS support vs. feature velocity |
| [#4888](https://github.com/earendil-works/pi/issues/4888) | **Prevent TUI background renders from erasing IME preedit** | Accessibility for CJK/Korean users; terminal IME preedit state corruption makes Pi unusable for large global developer population. | 2 comments; Aronvision followed with implementation PR #4887, showing responsive maintainer engagement |
| [#4849](https://github.com/earendil-works/pi/issues/4849) | **`pi-ai` cannot build on vanilla Linux+Node v22** | Build regression blocks contributions; ESM loader failure in `generate-models.ts` suggests toolchain fragility. | 5 comments; knocte flags as "possibly-openclaw-clanker"—internal codename for build system instability |
| [#4879](https://github.com/earendil-works/pi/issues/4879) | **Expose `promptGuidelines` on `ToolInfo`** | Extension API gap; runtime introspection of tool guidelines enables dynamic prompt assembly and better extension interoperability. | 2 comments, 1 👍; kylesnowschwartz provides precise implementation sketch, lowering contribution barrier |
| [#4707](https://github.com/earendil-works/pi/issues/4707) | **Agent hangs permanently on 429 rate limits** | Production reliability; Undici fetch regression causes indefinite "Working" state instead of graceful degradation. | 2 comments, 3 👍; javargasm identifies root cause in connection-drop handling—regression from earlier fetch implementation |
| [#2870](https://github.com/earendil-works/pi/issues/2870) | **Follow XDG Base Directory on Linux** | Long-standing hygiene issue; home directory clutter violates platform conventions and annoys dotfiles managers. | 13 comments, 23 👍; finally closed after community persistence—mks-h's initial report from April resolved |
| [#4399](https://github.com/earendil-works/pi/issues/4399) | **Fresh Windows install fails silently via npm/pnpm** | Onboarding friction for largest desktop platform; no error message makes debugging impossible for new users. | 8 comments; closed-because-refactor suggests architectural fix incoming—KrofDrakula's detailed Node 26 logs helped isolate |

---

## Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#4911](https://github.com/earendil-works/pi/pull/4911) | **feat(ai): add Codex device code login** | New OAuth device flow for OpenAI Codex, following Copilot refactor pattern | Expands authentication beyond GitHub ecosystem; vegarsti building on own #4788 foundation |
| [#4756](https://github.com/earendil-works/pi/pull/4756) | **fix(coding-agent): use async operations in tools** | Moves sync fs operations to async, image resizing to worker thread | Critical Windows fix—Microsoft Defender-induced hangs resolved; mitsuhiko addressing TUI lockups at root |
| [#4873](https://github.com/earendil-works/pi/pull/4873) | **fix(coding-agent): clean up path handling** | Comprehensive path.join audit, fixes cross-drive Windows paths | Closes #4780; mitsuhiko's systematic approach prevents class of platform-specific bugs |
| [#4887](https://github.com/earendil-works/pi/pull/4887) | **Fix IME preedit flicker in TUI renders** | Debounced background renders during IME composition, configurable via `PI_TUI_IME_QUIET_MS` | Merged same day as issue #4888; Aronvision's rapid turnaround demonstrates responsive accessibility fixes |
| [#4890](https://github.com/earendil-works/pi/pull/4890) | **fix(ai): omit store for Google OpenAI-compatible completions** | Detects Google endpoints, strips `store: false` to avoid 400 errors | Shuntagami closes own #4891 with regression test; provider-compatibility engineering at scale |
| [#4895](https://github.com/earendil-works/pi/pull/4895) | **fix(coding-agent): reconcile git ref on install, update settings on ref change** | `ensureGitRef` extraction, checkout on existing dirs, settings synchronization | haoqixu's third git-ref PR in 24h—systematic fix for extension version drift |
| [#4898](https://github.com/earendil-works/pi/pull/4898) | **fix(coding-agent): use the right basedir for patterns** | Pattern matching directory resolution fix | Closes #4761; small but precise correctness fix |
| [#4899](https://github.com/earendil-works/pi/pull/4899) | **fix(coding-agent): reconcile git package ref on settings change** | Detects ref mismatches between disk and settings, auto-reconciles | Complements #4895; haoqixu eliminating entire category of "update didn't update" bugs |
| [#4904](https://github.com/earendil-works/pi/pull/4904) | **feat: add message decorators to allow extensions** | Decorator API for message transformation (timestamps, etc.) | imjimmeh fills extension API gap; enables ecosystem customization without core changes |
| [#4905](https://github.com/earendil-works/pi/pull/4905) | **Add promptLogFormat setting and improve UX** | Token speed display in prompt labels, generation speed indicators | alx77-copilot's UX polish; performance visibility increasingly important as model costs vary |

---

## Feature Request Trends

1. **Local/self-hosted LLM integration** — #3357 dominates voting; dynamic model discovery from `{baseUrl}/models` would reduce configuration friction for Ollama/llama.cpp/LM Studio users. Pattern: users want Pi to "just work" with local infrastructure without manual `models.json` curation.

2. **Deterministic session management** — #4874 and related requests show demand for CLI-controlled session IDs, enabling CI/CD integration, test reproducibility, and cross-invocation context sharing. The `--session` file-path workaround is insufficient for ephemeral and automated environments.

3. **Extension API surface expansion** — #4879 (`promptGuidelines` exposure), #4904 (message decorators), and #4912 (`silent` session option) indicate ecosystem maturation. Extension authors need deeper hooks into core behavior, not just command registration.

4. **Provider compatibility breadth** — Device code flows (#4911, #4809), Google OpenAI compatibility (#4890), and Bedrock defaults (#4871) show Pi chasing the expanding long tail of provider quirks. The "OpenAI-compatible" label is increasingly insufficient.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Silent failures during updates** | #4876 (Node version), #4869/#4889 (git-pinned extensions skipped), #4907 (peer dependency conflicts) | **High** — Users believe update succeeded when it didn't; trust erosion in `pi update` reliability |
| **Windows as second-class citizen** | #4780 (cross-drive paths), #4756 (Defender hangs), #4399 (fresh install failure), #4651 (portable git bash experiment) | **High** — Multiple platform-specific bugs suggest insufficient CI coverage; mitsuhiko's concentrated fixes indicate acknowledged gap |
| **Build toolchain fragility** | #4849 (ESM loader failure on Node 22), #4680 (static headers generation) | **Medium-High** — Contributors blocked from building; `generate-models.ts` is recurring failure point |
| **IME/input method breakage** | #4888/#4887 (preedit flicker) | **Medium** — Affects significant global user base; rapid fix suggests good prioritization when flagged |
| **Rate limit / error handling regressions** | #4707 (indefinite hang on 429), #4801 (DeepSeek enum mismatch) | **Medium** — Production reliability concerns; error states should degrade gracefully, not hang or cryptically fail |
| **Extension lifecycle inconsistency** | #4869, #4889, #4895, #4899 (git ref reconciliation) | **Medium** — "Update didn't update" is recurring support burden; haoqixu's PR cluster addresses systematically |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-23

## 1. Today's Highlights

The v0.16.0 release train is in motion with a new nightly build (`v0.16.0-nightly.20260522.48b0a8bfc`) landing today, though release workflows experienced transient failures. Memory stability and CLI rendering remain the dominant themes: multiple OOM crashes, `MaxListenersExceededWarning` leaks, and Windows UI corruption are drawing urgent community attention alongside continued architectural work toward production-ready daemon mode.

---

## 2. Releases

**[v0.16.0-nightly.20260522.48b0a8bfc](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.0-nightly.20260522.48b0a8bfc)** — Latest nightly on the v0.16.0 branch. Contains a critical fix closing the `tool_use`↔`tool_result` invariant across all failure paths (prevents malformed API request errors where tool calls lack matching result blocks). Note: Release workflow initially failed ([#4418](https://github.com/QwenLM/qwen-code/issues/4418), [#4443](https://github.com/QwenLM/qwen-code/issues/4443)), suggesting CI instability on this tag.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | **Mode B feature-priority roadmap toward v0.16 production-ready** | The authoritative tracking issue for `qwen serve` daemon stabilization. Stage 1 daemon is merged and runnable; this defines the remaining polish for production. 31 comments indicate active design iteration. | High engagement from core contributors; seen as the gateway to enterprise/remote workspace adoption. |
| [#4420](https://github.com/QwenLM/qwen-code/issues/4420) | **UI bug causing token doubling on Windows (v0.16.0)** | P1 priority. CLI UI completely garbled after 0.15.11→0.16.0 upgrade on Windows 11/Git Bash, rendering tool unusable. | Immediate regression report with screenshots; blocking Windows users from upgrading. |
| [#4276](https://github.com/QwenLM/qwen-code/issues/4276) | **OOM crash with GC pressure** | V8 fatal OOM during long sessions (4GB+ heap). Suggests unbounded memory growth in core runtime. | Reproducible report with GC logs; linked to other memory issues as systemic problem. |
| [#4116](https://github.com/QwenLM/qwen-code/issues/4116) | **Critical error in session management** | Terminal UI hard-freezes with Cyrillic prompt corruption; session recovery fails. | 12 comments, cross-platform reports; severity flagged but needs clearer repro steps. |
| [#4423](https://github.com/QwenLM/qwen-code/issues/4423) | **MaxListenersExceededWarning: 1596 abort listeners** | Node.js `EventTarget` leak in long-running iTerm2 sessions. Signals resource cleanup failure in abort controller chains. | User-provided stack traces; PR [#4366](https://github.com/QwenLM/qwen-code/pull/4366) already in flight to fix. |
| [#4435](https://github.com/QwenLM/qwen-code/issues/4435) | **内存溢出报错 (Memory overflow error)** | Another V8 fatal OOM variant, distinct stack from #4276. Indicates multiple leak paths. | Fresh report (May 22); pattern suggests memory issues are the #1 stability threat in v0.16. |
| [#4429](https://github.com/QwenLM/qwen-code/issues/4429) | **CI flake: CLI UI tests fail across all platforms** | Vitest rendering/key-sequence flakes blocking reliable CI. AppContainer footer remeasure, InputPrompt submission, and dialog key handling all unstable. | 0 upvotes but critical for velocity; flakes obscure real regressions and burn maintainer time. |
| [#4425](https://github.com/QwenLM/qwen-code/issues/4425) | **P0: Credential redaction in extension source diagnostics** | Security-critical. Extension URLs can embed `user:token@` credentials that leak into logs/diagnostics. | P0 priority; zero comments suggests maintainers have taken immediate ownership. |
| [#4437](https://github.com/QwenLM/qwen-code/issues/4437) | **Auto-skill creation silently overwrites existing skills** | Data loss bug in memory feature. `memory.enableAutoSkill` lacks collision detection. | P2 priority; affects users relying on persistent skill library. |
| [#4444](https://github.com/QwenLM/qwen-code/issues/4444) | **Token Plan not enabling session cache** | `/stats model` missing cache metrics for Token Plan users. Suggests provider-specific feature gap in caching layer. | Reported with expected vs. actual output; impacts cost-conscious users. |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4411](https://github.com/QwenLM/qwen-code/pull/4411) | **F2 cleanup PR A — R9/W11/W12/R10** | Post-merge refactors from F2 milestone: `McpClientManager` constructor options object, test factory cleanup. No behavior change. | Closed |
| [#4431](https://github.com/QwenLM/qwen-code/pull/4431) | **Preserve uid/gid in atomicWriteFile** | Fixes POSIX `rename()` inode ownership reset that broke Docker/shared-workspace file permissions. Follow-up to #4095 Phase 1. | Open |
| [#4410](https://github.com/QwenLM/qwen-code/pull/4410) | **Telemetry Phase 3: `qwen-code.subagent` span** | Isolates subagent telemetry into proper trace subtrees, eliminating interleaving with concurrent siblings. Closes #3731 Phase 3. | Open |
| [#4333](https://github.com/QwenLM/qwen-code/pull/4333) | **Atomic write rollout for credentials, memory, config, JSONL** | Phase 2 of #4095: replaces bare `fs.writeFile` in security-sensitive paths with crash-atomic helpers. Closes #3681. | Open |
| [#4438](https://github.com/QwenLM/qwen-code/pull/4438) | **Deterministic /review rules for weak models** | Hardens PR review compliance by moving `SKILL.md` prose rules into enforced preconditions; adds `autofix-gate` subcommand. | Open |
| [#4366](https://github.com/QwenLM/qwen-code/pull/4366) | **Fix AbortSignal listener leak** | Addresses #4423: stops unbounded `abort` listener accumulation in nested `AbortController` chains during long sessions. | Open |
| [#4432](https://github.com/QwenLM/qwen-code/pull/4432) | **Telemetry Phase 4b: retry visibility** | Exposes previously invisible `retryWithBackoff` behavior in LLM call traces with per-attempt HTTP status logging. | Open |
| [#4414](https://github.com/QwenLM/qwen-code/pull/4414) | **Background housekeeping for stale file-history** | Adds configurable 30-day mtime cleanup for `~/.qwen/file-history/` directories; framework extensible to other accumulators. | Open |
| [#4359](https://github.com/QwenLM/qwen-code/pull/4359) | **Preflight-triage AI review + PR compliance gates** | `pr-gate.yml` merge blockers + tiered AI review (`ULTRA_LIGHT` to `DEEP`) with fallback. Infrastructure for maintainer velocity. | Open |
| [#4434](https://github.com/QwenLM/qwen-code/pull/4434) | **Prevent system sleep while running** | Runtime sleep inhibitor for long-running Qwen Code tasks (builds, reviews, batch edits). | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Daemon / server mode (`qwen serve`)** | [#4175](https://github.com/QwenLM/qwen-code/issues/4175), [#3803](https://github.com/QwenLM/qwen-code/issues/3803), PR [#4412](https://github.com/QwenLM/qwen-code/pull/4412) docs | High — architectural foundation merged, now in polish phase for v0.16 production |
| **Telemetry & observability** | [#3731](https://github.com/QwenLM/qwen-code/issues/3731) phases, PRs [#4410](https://github.com/QwenLM/qwen-code/pull/4410), [#4432](https://github.com/QwenLM/qwen-code/pull/4432), [#4390](https://github.com/QwenLM/qwen-code/pull/4390) | Active — W3C traceparent propagation, retry visibility, subagent spans all in flight |
| **Local diagnostics / self-service debugging** | [#4421](https://github.com/QwenLM/qwen-code/issues/4421) ring buffer + `/bug collect bundle` | Emerging — addresses gap between "no debug mode" and "full telemetry export" |
| **Atomicity & durability** | [#4095](https://github.com/QwenLM/qwen-code/issues/4095), PRs [#4333](https://github.com/QwenLM/qwen-code/pull/4333), [#4431](https://github.com/QwenLM/qwen-code/pull/4431) | Sustained — file writes, JSONL sessions, now POSIX ownership preservation |
| **Developer experience hardening** | PRs [#4419](https://github.com/QwenLM/qwen-code/pull/4419) kebab-case linting, [#4445](https://github.com/QwenLM/qwen-code/pull/4445) test splits, [#4359](https://github.com/QwenML/qwen-code/pull/4359) CI gates | Growing — codebase scaling demands mechanical enforcement |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Tracking |
|------------|-----------|----------|
| **Memory stability (OOM + listener leaks)** | 🔥 Critical — 5+ distinct issues (#4276, #4435, #4399, #4423, #4116) | PR [#4366](https://github.com/QwenLM/qwen-code/pull/4366) fixes listener leak; OOM root causes under investigation |
| **Windows CLI rendering regressions** | High — #4420 (P1), #4430 (closed), #4442 | v0.16.0-specific; likely terminal escape sequence or encoding handling |
| **Authentication / provider configuration friction** | High — #4424 (key deletion UX), #4382 (connection errors), #4035 (DashScope-intl) | Token Plan migration pain especially acute; manual model config required |
| **CI reliability** | Medium — #4429 flakes, #4418/#4443 release failures | Blocking merge confidence; platform-specific rendering tests are fragile |
| **Build system hygiene** | Medium — #4447 stale dist artifacts, #4446 NOTICES.txt drift | TS5055 errors on incremental builds; workspace versioning edge cases |
| **Long-session UX degradation** | Medium — #4442 UI freezes on bulk edits, choppy long chats | Performance + rendering interaction; may share root cause with memory issues |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-23

## 1. Today's Highlights

The community is actively shaping DeepSeek TUI's core architecture with a major proposal for universal tool lifecycle hooks (#1917) that would unify Cancel/Pause/Resume across all action types. Meanwhile, terminal control sequence pollution remains a persistent battle, with two related bugs (#1915, #1418) highlighting ongoing challenges with escape code handling in the input area. The permission system continues maturing through a three-PR chain from contributor `greyfreedom` establishing typed execpolicy rules.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1917](https://github.com/Hmbown/DeepSeek-TUI/issues/1917) | **Universal PreToolUse/PostToolUse hook layer** | Architectural proposal to unify Cancel (with rollback), Pause, and Resume across all tool executions—addresses fragmentation from #1886-#1900 refactoring | Early-stage; 2 comments, seeking design consensus |
| [#1916](https://github.com/Hmbown/DeepSeek-TUI/issues/1916) | **Customizable statusline** | Direct competitive parity request vs. Claude Code's `ccstatusline`; ratatui's hardcoded 5-field limit is a migration blocker for power users | 1 upvote; no maintainer response yet |
| [#1915](https://github.com/Hmbown/DeepSeek-TUI/issues/1915) | **Garbage strings in composer during agent runs** | Terminal control sequence pollution (`[<35;44;18M`, `]8;;http...`) corrupting input field during streaming—indicates parser boundary leak | Fresh report; likely related to #1418 |
| [#1853](https://github.com/Hmbown/DeepSeek-TUI/issues/1853) | **TUI copy includes visual line breaks** | Terminal-native selection captures ratatui's wrapped line breaks, breaking code paste into editors—fundamental TUI UX issue | 1 comment; needs terminal emulator cooperation |
| [#1914](https://github.com/Hmbown/DeepSeek-TUI/issues/1914) | **npm upgrade fails due to mirror sync lag** | Distribution/infrastructure issue blocking users from latest version; template-filled report suggests reporter frustration | No engagement yet; needs triage |
| [#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615) | **[CLOSED] Docker run produces garbled output** | 182-comment thread with hostile user sentiment ("什么垃圾玩意")—extreme case of onboarding friction for API-key-only swap | Closed 2026-05-22; high emotional cost to community |
| [#1418](https://github.com/Hmbown/DeepSeek-TUI/issues/1418) | **[CLOSED] Draft mode activation + escape code injection** | Root-cause sibling to #1915; escape sequences auto-typed into input during tool execution—indicates event loop pollution | Closed same day as #1915 update; possible duplicate closure |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#1918](https://github.com/Hmbown/DeepSeek-TUI/pull/1918) | **Image URL attachment support** (`/attach-url`) | SSRF-protected image download with SHA-256 caching, Content-Type validation, vision pipeline integration; closed same day | ❌ Closed |
| [#1865](https://github.com/Hmbown/DeepSeek-TUI/pull/1865) | **Pro Plan model routing** | New TUI mode: `deepseek-v4-pro` for planning/review, `deepseek-v4-flash` for execution; preserves Plan Confirmation gate with phase-resolved semantics | 🟡 Open |
| [#1765](https://github.com/Hmbown/DeepSeek-TUI/pull/1765) | **Structured approval details + shell previews** | Replaces raw JSON with formatted fields; readable `printf`-based file write previews; preserves diff/pager scrolling; adds regression tests | 🟡 Open |
| [#1509](https://github.com/Hmbown/DeepSeek-TUI/pull/1509) | **Persist permission rules from approval prompts** | TUI flow to save scoped `allow` rules during tool approval with config preview; builds on execpolicy foundation | 🟡 Open |
| [#1413](https://github.com/Hmbown/DeepSeek-TUI/pull/1413) | **Route approvals through typed execpolicy rules** | Wires `ExecPolicyEngine` into shell/file tool execution; supports prefix/path-pattern rules with allow/deny/ask decisions | 🟡 Open |
| [#1189](https://github.com/Hmbown/DeepSeek-TUI/pull/1189) | **Typed permission rules + config schema** | Foundation PR: tool-scoped rules with command prefix and workspace-relative path patterns; `allow`/`deny`/`ask` decisions | 🟡 Open |
| [#1908](https://github.com/Hmbown/DeepSeek-TUI/pull/1908) | **YAML block scalar parsing in SKILL.md** | Fixes `>` and `|` multi-line frontmatter descriptions previously parsed as literal indicator strings | 🟡 Open |
| [#1633](https://github.com/Hmbown/DeepSeek-TUI/pull/1633) | **Fix false positive Trojan/Linux.Agent.bp** | Antivirus heuristic triggered by `rusqlite` bundled `libsqlite3-sys v0.28`; affects all Rust projects using this dependency; CNB pip improvements included | ✅ Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Lifecycle control architecture** | #1917 hooks proposal; implicit in #1886-#1900 series | 🔥 Emerging—seeking unification |
| **Statusline/widget customization** | #1916 explicit Claude Code parity request | 📈 Growing—migration friction |
| **Permission system maturation** | 3-PR chain: #1189 → #1413 → #1509; execpolicy engine | 🏗️ Active construction |
| **Model routing / tiered execution** | #1865 Pro Plan mode with phase-based model selection | 🆕 New direction |
| **Streaming robustness** | #1915, #1418, #1615 all involve output handling failures | ⚠️ Persistent gap |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|-----------|-----------|--------|----------|
| **Terminal escape sequence pollution** | 3+ issues (#1915, #1418, #1615) | 🔴 Critical—corrupts input, forces server reboots | Needs event loop audit |
| **Copy-paste fidelity from TUI** | #1853 | 🟡 High—breaks developer workflow with wrapped output | Requires ratatui/terminal coordination |
| **Distribution/mirror lag** | #1914 | 🟡 High—blocks version access | Infrastructure fix needed |
| **Onboarding fragility (Docker/API swap)** | #1615 (182 comments) | 🟡 High—user hostility indicates failure mode | Documentation + validation gap |
| **Antivirus false positives** | #1633, #1422 | 🟢 Moderate—systemic Rust/sqlite issue | Resolved per-project; upstream awareness |

---

*Digest compiled from github.com/Hmbown/DeepSeek-TUI activity 2026-05-22 → 2026-05-23.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*