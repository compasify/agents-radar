# AI CLI Tools Community Digest 2026-05-28

> Generated: 2026-05-28 00:27 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report — 2026-05-28

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation across all major platforms, with Claude Code v2.1.152, OpenAI Codex Rust alphas, and GitHub Copilot CLI's five rapid releases in 24 hours signaling a shift toward stabilization and workflow integration. A clear pattern emerges: tools are moving beyond chat interfaces toward agentic autonomy, with MCP (Model Context Protocol) interoperability becoming the universal integration layer despite persistent fragility across all implementations. The ecosystem is bifurcating—established players focus on enterprise hardening and reliability (Claude Code, Copilot CLI), while newer entrants (CodeWhale, Qwen Code) race toward feature parity with daemon modes, multi-model routing, and cross-IDE support. Windows remains the underserved platform universally, and cost/quota visibility is emerging as a top-tier concern as autonomous agent usage scales.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Key Release | Community Signal |
|-----|-------------|-----------|----------------|-------------|------------------|
| **Claude Code** | 9 hot issues | 5 PRs | Stable v2.1.152 | `/code-review --fix`, `/simplify` promotion | High engagement; data loss & MCP fragility top concerns |
| **OpenAI Codex** | 10 hot issues | 20+ PRs merged | Alpha (v0.135.0-alpha.2) | Rust core alphas, sandbox hardening | Highest issue activity; token indicator regression (#23794) has 142 comments |
| **Gemini CLI** | 10 hot issues | 10 PRs | Preview (v0.45.0-preview.0) | PTY hardening, shell parsing, devtools bundling | Steady cadence; agent observability gap growing |
| **Copilot CLI** | 33 updated issues | 0 public PRs | Hotfix (v1.0.55-7) | `/autopilot`, crash fallback, cell renderer | Highest issue volume; Linux clipboard regressions dominate |
| **Kimi Code CLI** | 6 hot issues | 7 PRs | Stable (v1.45.0) | Error handling fixes, deprecation notices | Transitioning to TypeScript successor; low engagement |
| **OpenCode** | 10 hot issues | 10 PRs | Stable (v1.15.11) | `headerTimeout`, background agents | DeepSeek `reasoning_content` hell; provider proliferation |
| **Pi** | 10 hot issues | 10 PRs | Stable (v0.76.0) | `--session-id`, RPC context exclusion | High velocity; terminal compatibility matrix stress |
| **Qwen Code** | 10 hot issues | 10 PRs | Stable (v0.16.2) | Daemon mode infrastructure (6 PRs) | Explosive daemon development; auth fragility |
| **CodeWhale** | 10 hot issues | 10 PRs | Stable (v0.8.47) | Rebrand to CodeWhale, deprecation shims | Post-rebrand cleanup; Windows shell abstraction stack |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **MCP Ecosystem Maturity** | All 9 tools | Server discovery/visibility (Claude #12164, Codex #24698), instruction truncation (Claude #43474), approval UX friction (Codex #16911), context bloat (Copilot #3539), log noise (Kimi #1637), conditional startup (OpenCode #28937) |
| **Windows Support** | All 9 tools | Shell detection (Qwen #4562, CodeWhale #1779), path normalization (Codex #23803, Pi #5095), PowerShell schema (Claude #62537), pipe automation (Copilot #3188), sandbox provisioning (Codex #24831) |
| **Cost/Quota Transparency & Control** | Claude, Codex, Copilot, Gemini, Pi, Qwen, CodeWhale | Token indicator visibility (Codex #23794), quota burn by autonomous agents (Claude #51609), balance display (CodeWhale #2257), token usage export (Qwen #4564), per-session budgets |
| **Subagent/Multi-Agent Observability** | Claude, Gemini, Copilot, Qwen, CodeWhale | Real-time visibility (Gemini #22571), hidden termination reasons (Gemini #22323), TUI saturation (CodeWhale #2211), parallel rate limiting (Kimi #2368) |
| **Context Window Management** | All 9 tools | System prompt bloat (Copilot #3539), artificial caps (Codex #20742), compaction deadlocks (Codex #24388), compression errors (Qwen #4579), metadata drift (Pi #5086) |
| **Cross-Platform Session Portability** | Claude, Codex, Copilot, Gemini | Remote control isolation (Claude #49501), mobile/desktop parity (Codex #23952), session sharing (Copilot #3537), per-session identity (Claude #62821) |
| **Enterprise Auth & Compliance** | Claude, Codex, Copilot, Qwen | OAuth fragility (Codex #24665, Qwen #4317), org-scoped tokens (Copilot #223), SSL/proxy support (Copilot #333), transcript trust (Claude #45811) |
| **Multi-Model Routing** | OpenCode, Pi, CodeWhale, Qwen | Dedicated reasoning models for planning + cheaper models for execution (CodeWhale #1676), provider proliferation (OpenCode #26338), local LLM discovery (Pi #3357) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|-------------|--------------|------------|-------------|----------|----|-----------|-----------|
| **Core Differentiator** | Code quality workflow (code-review --fix, simplify) | Sandbox-first security, Rust core performance | Google infrastructure integration, AST-aware tooling | GitHub/VS Code ecosystem lock-in, enterprise auth | Provider-agnostic, plugin architecture | Lightweight extensibility, local-first LLM support | Daemon/serve mode innovation, MCP bridge | DeepSeek-native optimization, cost-efficient routing |
| **Target User** | Professional developers, teams | Enterprise, security-conscious | Google Cloud/GCP ecosystem | GitHub ecosystem, CI/CD | Multi-provider power users | Self-hosters, automation | Chinese market, JetBrains users | Cost-sensitive, DeepSeek users |
| **Technical Approach** | Monolithic CLI + remote control | Rust rewrite, sandbox (bwrap/Windows) | TypeScript, PTY-centric, server mode | Node.js, rapid hotfix cycles | TypeScript, plugin system, WebSocket | Rust + TypeScript hybrid, extension API | TypeScript, daemon-first architecture | Rust CLI, crate consolidation |
| **Unique Strengths** | First-class code review command, `/simplify` | Sandbox isolation, Windows sandbox provisioning | Google model integration, AST mapping | GitHub API depth, 5 releases/24h responsiveness | Provider breadth, Realtime API support | Session ID automation, cross-ecosystem | Daemon mode + MCP bridge, telemetry | Cost-optimization ("Dual" mode), prefix caching |
| **Notable Gaps** | Data durability, MCP tool exposure | Context visibility regression, mobile parity | Agent observability, subagent control | Linux clipboard, MCP context bloat | DeepSeek compatibility, timeout tuning | Terminal compatibility matrix, Windows config | Windows shell, OAuth reliability, compression errors | Rebrand confusion, Windows shell, TUI layout |

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
- **OpenAI Codex** — 20+ PRs/24h, Rust alpha progression, most engaged issue (#23794 at 142 comments). The token indicator regression is the highest-velocity signal across the entire ecosystem, indicating deep reliance on context visibility.
- **GitHub Copilot CLI** — 33 issues updated, 5 releases in 24 hours. Extremely responsive maintenance but high user pain (Linux clipboard, context bloat). Zero public PRs suggests internal-only development.
- **Pi (earendil-works)** — 15 PRs merged, 16 issues closed, v0.76.0 with session ID automation. Strong community contribution flow with `doudouOUC`-level single-contributor dominance (6 of 10 key PRs).
- **Qwen Code** — Daemon mode infrastructure exploding (6+ PRs from `doudouOUC`). The `qwen-serve-bridge` MCP server is a significant interoperability milestone—positioning Qwen as an MCP host for other tools.

### Mature / Steady
- **Claude Code** — Stable release cadence, broadest feature surface. Community deeply engaged but frustrated by MCP ecosystem fragility and data durability bugs. The open-source PR (#41447) remains a sustained community signal.
- **Gemini CLI** — Steady 10 PRs, preview channel stabilizing. Lower user engagement volume per issue but higher-quality architectural discussion (AST-aware tools, agent observability).

### Transitioning / Lower Engagement
- **Kimi Code CLI** — Formally steering users to TypeScript successor. Low issue freshness. The rate-limit contention bug (#2368) is technically interesting but unlikely to receive deep investment.
- **CodeWhale** — Rebrand complete, active development continues but at lower scale than top-tier tools. The "Dual" model routing proposal (#1676) is conceptually innovative—could influence the entire ecosystem's cost optimization approach.

---

## 6. Trend Signals

### 1. MCP Has Won the Integration Layer—But Fragility Is the Cost
Every tool now supports MCP, but Claude Code (#12164, #43474), Copilot CLI (#3539), and OpenCode (#28937) all report systemic issues: tool exposure failures, instruction truncation, context bloat, and noisy logging. The ecosystem needs a standardized MCP diagnostics API, graceful degradation when servers fail, and context budget accounting for MCP server inclusion.

### 2. Context Window Management Is the New UX Frontier
The #1 most active issue across the ecosystem (Codex #23794—142 comments) is about token visibility. Claude Code users report system prompts consuming 73% of context (Copilot #3539). Copilot sees compaction loops triggered by enterprise MCP allowlists. **Users cannot manage what they cannot see**—tools that ship transparent context budgets with per-component breakdowns will win developer trust.

### 3. "Dual" Multi-Model Routing Emerges as Cost Strategy
CodeWhale's explicit proposal (#1676) for using reasoning models (Pro) for planning and cheaper models (Flash) for execution mirrors patterns emerging in OpenCode and Pi communities. As agent autonomy scales token consumption, the single-model paradigm is economically unsustainable. Expect native multi-model routing to become a differentiator in 2026-2027.

### 4. Daemon/Server Mode Becomes Standard Architecture
Qwen Code's explosive daemon development (6 PRs from one contributor), CodeWhale's mobile serve mode (#1968), and Copilot CLI's session management all point to a shift: CLI tools are becoming background services with RPC interfaces. The `qwen-serve-bridge` MCP server enabling Qwen Code to act as an MCP host for Claude Desktop is the clearest signal of ecosystem convergence.

### 5. Windows Remains the Universal Weak Point
Windows-specific bugs appear across every tool tracked: Copilot CLI (pipe automation), Codex (path normalization, sandbox provisioning), Claude Code (PowerShell schema detection, HKLM settings), Pi (config corruption), Qwen Code (cmd.exe vs PowerShell), CodeWhale (shell hardcoding, focus leak). No vendor has achieved Windows parity, creating a significant market opportunity for the first tool that delivers.

### 6. Cost Transparency Becomes Table Stakes
Qwen Code (#4564) and CodeWhale (#2257) both shipped token usage/cost display features in this cycle. Claude Code users report Opus 4.7 burning quota by ignoring delegation rules (#51609). As agentic workflows scale, **cost observability is no longer optional**—users need real-time budget tracking, per-subagent accounting, and configurable spending limits.

### 7. Plugin/Skill System Maturation Creates Migration Anxiety
Gemini CLI (#27325), Kimi Code CLI (#2376), and CodeWhale (rebrand) all face user concern about breaking changes to custom commands/skills. The tension between stability and evolution is acute—tools that provide explicit deprecation windows, migration guides, and backward-compatible shims will retain community trust.

---

*Analysis compiled from public GitHub activity across 9 AI CLI tools for 2026-05-28. Community metrics reflect issue/PR activity and engagement levels as reported in community digests.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-28 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description & Discussion |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Addresses universal pain point in Claude's document output. |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Full ODT/ODS lifecycle: creation, template filling, parsing to HTML. Targets open-source/ISO standard document workflows. Strong enterprise appeal. |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability. Meta-improvement: making skills actually executable by Claude within context limits. |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating other skills across 5 quality dimensions and security posture. First systematic approach to skill governance. |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack: Testing Trophy, AAA pattern, React Testing Library, E2E. Fills critical gap in Claude's code quality skills. |
| 6 | **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | 4-skill cognitive framework: structured thinking templates, advisor mode, agent orchestration, persistent memory. Ambitious knowledge-management ecosystem. |
| 7 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub. Largest vertical-specific skill proposed. |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data. Bridges AI/ML with enterprise ERP workflows. |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) | Enterprise teams need centralized skill libraries, not manual file passing |
| **Skill Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments), [#1175](https://github.com/anthropics/skills/issues/1175) | Namespace impersonation risks, access control in SKILL.md files |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) | Skills-as-MCPs, context compression for data-heavy integrations |
| **Windows Compatibility** | [#556](https://github.com/anthropics/skills/issues/556) (9 comments, 6 👍), [#1099](https://github.com/anthropics/skills/issues/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | `run_eval.py`, `claude -p`, subprocess failures on Windows |
| **Plugin System Integrity** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍), [#1087](https://github.com/anthropics/skills/issues/1087) | Duplicate skills, marketplace.json enforcement |
| **skill-creator Best Practices** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments) | Meta-tooling needs to model optimal skill structure itself |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal problem, focused scope, no external dependencies |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills documented gap; aligns with Claude Code's core code-generation use case |
| **Windows Fixes (skill-creator)** | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | Critical path bugfixes with minimal diff; maintainer attention on #556 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | Strong enterprise demand; open standards alignment |
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | Trivial fix, clear bug, ready to merge |

> **Note:** All top PRs remain **OPEN** as of 2026-05-28. No merged skills in the top 20 by discussion volume indicates either maintainer backlog or rigorous review standards.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *enterprise-grade document and workflow skills with trustworthy distribution infrastructure*—specifically, the ability to generate production-ready outputs (typographically correct, standards-compliant documents), share them securely within organizations, and verify skill integrity against namespace abuse, all while maintaining cross-platform tooling reliability.**

---

---

# Claude Code Community Digest — 2026-05-28

## Today's Highlights

Claude Code v2.1.152 shipped with a significant workflow improvement: `/code-review --fix` now automatically applies review findings to your working tree, and `/simplify` has been promoted to a first-class command leveraging this capability. Meanwhile, the community is actively stress-testing the platform with multiple high-visibility bugs around MCP server tool exposure, data loss on macOS, and cascading failures in remote control sessions. The open-source movement continues with PR #41447 gaining sustained attention.

---

## Releases

**[v2.1.152](https://github.com/anthropics/claude-code/releases/tag/v2.1.152)** — Released 2026-05-28

| Change | Impact |
|--------|--------|
| `/code-review --fix` auto-applies review findings to working tree | Eliminates manual copy-paste of suggestions; surfaces reuse, simplification, and efficiency patterns automatically |
| `/simplify` now invokes `/code-review --fix` | Unified command surface for code quality workflows |
| Skills/slash commands can set `disallowed-tools` in frontmatter | Finer-grained capability control for custom automations |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#12164](https://github.com/anthropics/claude-code/issues/12164) | **MCP servers connect but tools not exposed to assistant** (macOS) | Breaks core MCP value proposition—servers appear healthy but are invisible to the model. Has repro, 13 comments. | Active debugging; users sharing server configs and logs. 4 👍 |
| [#62272](https://github.com/anthropics/claude-code/issues/62272) | **Chat JSONLs deleted despite high cleanupPeriodDays** — triggered by updates/restarts | **Data loss bug** with community-built recovery tool published. Affects session continuity and trust. | Author published [Time Machine recovery script](https://github.com/garrettmoss/restore-claude-history); 7 comments, urgent tone |
| [#45811](https://github.com/anthropics/claude-code/issues/45811) | **Documentation contradicts session transcript sharing prompt** | Trust/consent issue: CLI asks to share transcripts while docs claim "we do not collect or store any conversation transcripts" | 5 👍; users flagging as potential compliance/legal concern |
| [#49501](https://github.com/anthropics/claude-code/issues/49501) | **Ultrareview crash kills Remote Control session** — cascading failure, no isolation | Architectural reliability: two independent subsystems (cloud skill + mobile RC) share failure mode | Closed but notable for systemic failure pattern discussion |
| [#51609](https://github.com/anthropics/claude-code/issues/51609) | **Opus 4.7 ignores delegation rules, burns quota** | Cost control: model ignores `.claude/rules/*.md` prescribing sub-agent delegation for mechanical work | 5 comments; frustration about autonomous workflow economics |
| [#62537](https://github.com/anthropics/claude-code/issues/62537) | **PowerShell tool absent when Git Bash on PATH** (Windows) | Tooling availability bug on Windows—schema detection fails despite `pwsh.exe` present | Has repro; 4 comments on PATH precedence investigation |
| [#62146](https://github.com/anthropics/claude-code/issues/62146) | **Recurring fetch() socket disconnects** — n=81 corpus, correlated with status.claude.com "Elevated errors" | Infrastructure reliability at scale; cross-client cascade (Claude Code + Desktop simultaneously) | Data-rich report with temporal correlation to status page; 4 comments |
| [#43474](https://github.com/anthropics/claude-code/issues/43474) | **MCP server instructions silently truncated with multiple servers** | Silent data loss in system prompt construction; last server gets cut off mid-sentence | Has repro; 2 👍; affects multi-MCP workflows |
| [#62942](https://github.com/anthropics/claude-code/issues/62942) | **claude-in-chrome: Browser extension never connects on Linux** | `tabs_context_mcp` permanently returns 'not connected'; breaks browser automation on Linux | Has repro; Manjaro-specific investigation ongoing |
| [#62947](https://github.com/anthropics/claude-code/issues/62947) | **`gitStatus` snapshot stale at process launch, not prompt submit** | Race condition in multi-worker environments: commits by other workers invisible until restart | Has repro; affects team/collaborative workflows |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#62941](https://github.com/anthropics/claude-code/pull/62941) | **fix(ralph-wiggum): correctly read last assistant text from transcript** | Fixes silent loop termination in stop hook by parsing full transcript blocks instead of grepping single lines | Open |
| [#62906](https://github.com/anthropics/claude-code/pull/62906) | **fix(ralph-wiggum): prefix Stop hook with bash for Windows spaced-path safety** | Adds `bash` interpreter prefix to prevent MSYS path resolution failures when plugin path contains spaces | Open |
| [#61742](https://github.com/anthropics/claude-code/pull/61742) | **[docs] Document Agent View TUI working directory limitation** | Documents that agent sessions inherit TUI cwd; workaround: separate terminals/tmux panes | Open |
| [#62821](https://github.com/anthropics/claude-code/pull/62821) | **docs: env-bridge workaround for plugin-MCP session-id** | Documents community pattern for per-session identity in plugin MCP servers pending #61752 fix | Open |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: open source claude code ✨** | Long-running community request; references 5 related issues (#59, #456, #2846, #22002, #41434) | Open, sustained interest |

*Note: Only 5 PRs had activity in the last 24h. The list above covers all significant open PRs.*

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Granular memory controls** | [#52488](https://github.com/anthropics/claude-code/issues/52488) — decouple `CLAUDE.md` and `MEMORY.md` toggles | Closed but concept validated; `autoMemoryEnabled` bundling seen as too coarse |
| **Model-aware UX filtering** | [#52566](https://github.com/anthropics/claude-code/issues/52566) — hide `/effort` levels incompatible with current model | Closed; pattern suggests need for more adaptive command surfaces |
| **GUI project/session switcher** | [#62960](https://github.com/anthropics/claude-code/issues/62960) — Desktop app lacks visual project navigation | New (1 comment); fills gap between CLI flexibility and Desktop discoverability |
| **Per-session plugin MCP identity** | [#62821](https://github.com/anthropics/claude-code/pull/62821) docs workaround, [#61752](https://github.com/anthropics/claude-code/issues/61752) tracked | Active; env-bridge pattern indicates demand for proper API support |

---

## Developer Pain Points

| Theme | Frequency | Specific Manifestations |
|-------|-----------|------------------------|
| **MCP ecosystem fragility** | 🔥 High | Tool exposure failures (#12164, #59310), instruction truncation (#43474), plugin-registered servers not callable (#59310), browser extension connectivity (#62942) |
| **Data durability & trust** | 🔥 High | Silent chat deletion (#62272), documentation contradictions on transcript handling (#45811), resumed sessions losing history (#52146) |
| **Windows as second-class platform** | 🔥 High | PowerShell schema absence (#62537), hook path handling (#62906), enterprise HKLM settings ignored (#52546), cowork unavailability (#62755) |
| **Cost/quota control in autonomous modes** | Medium | Opus 4.7 ignoring effort settings (#52534) and delegation rules (#51609); cowork forcing 1M context (#62949) |
| **Cross-session/cross-worker state coherence** | Medium | Stale `gitStatus` (#62947), preview panel opening in wrong Desktop session (#62290), RC skills missing from app autocomplete (#62482) |
| **Linux Desktop/Chrome integration gaps** | Medium | Browser extension never connects (#62942), auto-update failures (#62950), pyright LSP venv handling (#58365) |

---

*Digest compiled from github.com/anthropics/claude-code activity through 2026-05-28.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-28

---

## 1. Today's Highlights

The Codex team pushed two Rust alpha releases (v0.135.0-alpha.1/2) as development accelerates toward a stable v0.135.0. Community attention remains heavily focused on the **disappearing context/token usage indicator in Codex Desktop** ([#23794](https://github.com/openai/codex/issues/23794)), which has generated 142 comments and 130 upvotes in a week—making it the most active issue by far. Meanwhile, the maintainers are actively landing sandbox hardening improvements and SDK infrastructure changes across 20+ PRs merged or updated in the last 24 hours.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.135.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.2) | Second alpha in the v0.135.0 series; no detailed changelog provided |
| [rust-v0.135.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.1) | Initial alpha for v0.135.0 |

*No substantive release notes were published for either alpha. The rapid successive alphas suggest active iteration on the Rust core ahead of a broader release.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#23794](https://github.com/openai/codex/issues/23794) **Codex Desktop no longer shows visible context/token usage indicator** | Critical UX regression: users flying blind on token budgets, risking hard cutoffs mid-task | **142 comments, 130 👍** — overwhelming demand for restoration; users sharing workarounds and version rollback strategies |
| [#24665](https://github.com/openai/codex/issues/24665) **HERMES AGENT OAUTH BROKEN — "NoneType object is not iterable"** | Team-wide OAuth failure blocking entire orgs from Codex access; ChatGPT/Codex auth path broken | 31 comments, 51 👍; **closed same day** — rapid fix deployed, but pattern of OAuth fragility concerns enterprise users |
| [#24260](https://github.com/openai/codex/issues/24260) **gpt-5.5 xhigh turn stalled 30m before first output** | Extreme latency undermines "xhigh" reasoning tier value proposition; 30min "Thinking" state is productivity-killing | 12 comments, 8 👍; users questioning reliability guarantees for paid tiers |
| [#24373](https://github.com/openai/codex/issues/24373) **Google Drive Sheets connector: read works, write fails; shared quota 429s** | Breaks a core enterprise integration; read/write asymmetry suggests scope/permission regression | 11 comments, 3 👍; plugin reinstall ineffective — deeper auth scope issue suspected |
| [#24269](https://github.com/openai/codex/issues/24269) **/Goal Always Fails** | New "Goal" feature completely non-functional for Pro users — feature shipped broken | 9 comments, 5 👍; frustration at QA gap for marketed feature |
| [#23952](https://github.com/openai/codex/issues/23952) **Codex Mobile only shows projects with recent chats** | Mobile/desktop parity broken; remote control workflow unreliable for project access | 12 comments, 1 👍; logout/login workaround tedious |
| [#16911](https://github.com/openai/codex/issues/16911) **Constant ask for MCP Tool approvals** | MCP workflow friction: users drowning in repetitive approval dialogs despite "remember" settings | 7 comments, 9 👍; high upvote ratio signals broad pain in MCP UX |
| [#23803](https://github.com/openai/codex/issues/23803) **Windows: cannot resume thread due to C:\ vs \\?\C:\ path mismatch** | Session persistence broken on Windows; path normalization bug blocks core workflow | 4 comments, 0 👍; duplicate of [#22854](https://github.com/openai/codex/issues/22854) (closed) — regression or incomplete fix suspected |
| [#23807](https://github.com/openai/codex/issues/23807) **codex-cli stalls exactly 300s between tool result and next model request** | Precise 300s timeout suggests hardcoded stream disconnect; reproducible on Windows with gpt-5.5 | 3 comments, 0 👍; "exactly 300s" pattern indicates infrastructure-level timeout misconfiguration |
| [#20742](https://github.com/openai/codex/issues/20742) **Input exceeds maximum length of 1048576 characters** | Character cap (~300k tokens effective) far below gpt-5.4's 922k token limit; artificial constraint | 3 comments, 0 👍; users hitting ceiling on legitimate large-context workflows |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#24805](https://github.com/openai/codex/pull/24805) **Add CODEX_ENV_FILE for SessionStart hooks** | Persist shell state (PATH, venv, conda) across hook and main session commands | Unblocks Python/conda workflows where env activation was lost between hook and execution |
| [#17931](https://github.com/openai/codex/pull/17931) **fix: support encrypted local secrets for keyring auth** | Compress large auth payloads to fit Windows Credential Manager's 2,560-byte limit | Fixes Windows auth failures for ChatGPT OAuth and MCP tokens; long-running PR finally moving |
| [#24834](https://github.com/openai/codex/pull/24834) **Mask user-session sockets in restricted Linux sandbox views** | Hide host session sockets from sandboxed processes in SSH/devbox contexts | Security hardening for remote Linux development; prevents sandbox escape via inherited sockets |
| [#24651](https://github.com/openai/codex/pull/24651) **Add app-server startup benchmark crate** | Instrumented benchmarking for app-server cold-start performance | Foundation for latency regression detection; signals focus on startup time optimization |
| [#24698](https://github.com/openai/codex/pull/24698) **Expose MCP server info as part of server status** | Richer MCP server metadata for app UI rendering | Enables better MCP discovery and status visualization in Codex clients |
| [#24816](https://github.com/openai/codex/pull/24816) **Deduplicate invalid skill load warnings** | Suppress repeated identical SKILL.md parse errors on skill refresh | Reduces TUI noise; quality-of-life fix for skill development workflow |
| [#24108](https://github.com/openai/codex/pull/24108) **windows-sandbox: pass workspace roots to runner** | Complete Windows sandbox workspace root resolution for PermissionProfile | Follow-up to [#23813](https://github.com/openai/codex/pull/23813); fixes multi-root workspace scenarios |
| [#24828](https://github.com/openai/codex/pull/24828) **Add independent beta release for the Python SDK** | Decouple `openai-codex` SDK beta from runtime package versioning | Enables faster SDK iteration without forcing runtime betas; initial beta `0.1.0b1` |
| [#24831](https://github.com/openai/codex/pull/24831) **Add Windows sandbox provisioning setup command** | Admin-preparable sandbox setup for non-admin users | Enterprise/IT deployment critical; removes elevation barrier for locked-down Windows environments |
| [#24723](https://github.com/openai/codex/pull/24723) **Add feature-gated standalone image generation extension** | Local image generation path independent of hosted Responses API | Reduces latency and cost for image workflows; fallback to hosted tool preserved |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Conversation/session management** | `/archive` command request ([#14076](https://github.com/openai/codex/issues/14076)), thread resume failures, pagination types in PR [#24829](https://github.com/openai/codex/pull/24829) | Strong — CLI users need better lifecycle control beyond delete/keep |
| **Scheduled/background task execution** | Time-based scheduling ([#8317](https://github.com/openai/codex/issues/8317)): delay, interval, conditional polling | 28 👍, oldest active request; no implementation visible |
| **Improved context visibility & control** | Token indicator regression ([#23794](https://github.com/openai/codex/issues/23794)), input length cap ([#20742](https://github.com/openai/codex/issues/20742)), compaction deadlock ([#24388](https://github.com/openai/codex/issues/24388)) | Urgent — users need transparency into and control over context window consumption |
| **Cross-platform mobile/desktop parity** | iOS/Android remote control gaps ([#23952](https://github.com/openai/codex/issues/23952), [#22762](https://github.com/openai/codex/issues/22762), [#22750](https://github.com/openai/codex/issues/22750)) | Persistent — remote control remains secondary-class experience |
| **MCP ecosystem polish** | Constant approvals ([#16911](https://github.com/openai/codex/issues/16911)), server info exposure ([#24698](https://github.com/openai/codex/pull/24698)), OAuth/token issues | Growing — MCP adoption creating UX scaling challenges |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows path normalization bugs** | [#23803](https://github.com/openai/codex/issues/23803), [#22854](https://github.com/openai/codex/issues/22854), [#24108](https://github.com/openai/codex/pull/24108) | **High** — session resume broken, sandbox workspace roots misresolved; suggests systemic `std::path`/`PathBuf` handling gaps in Rust core |
| **OAuth/auth fragility** | [#24665](https://github.com/openai/codex/issues/24665), [#17931](https://github.com/openai/codex/pull/17931), [#24830](https://github.com/openai/codex/pull/24830) | **High** — team-wide outages, token reuse misclassification, platform-specific credential limits; auth is a reliability surface |
| **Sandbox execution failures (Linux/Windows)** | [#24341](https://github.com/openai/codex/issues/24341), [#24278](https://github.com/openai/codex/issues/24278), [#24834](https://github.com/openai/codex/pull/24834), [#24831](https://github.com/openai/codex/pull/24831) | **High** — `bwrap` path issues, Windows admin requirements; sandbox is core differentiator but deployment-sensitive |
| **Latency and stalls under gpt-5.5 / xhigh** | [#24260](https://github.com/openai/codex/issues/24260), [#23807](https://github.com/openai/codex/issues/23807) | **Medium-High** — 30min stalls, 300s timeouts; reasoning tiers not meeting reliability expectations |
| **Context window opacity and artificial limits** | [#23794](https://github.com/openai/codex/issues/23794), [#20742](https://github.com/openai/codex/issues/20742) | **Medium-High** — users cannot manage what they cannot see; 1M character cap underutilizes model capacity |
| **Skill system rough edges** | [#16479](https://github.com/openai/codex/issues/16479), [#24816](https://github.com/openai/codex/pull/24816), [#15939](https://github.com/openai/codex/issues/15939) | **Medium** — ambiguous prompt instructions, warning spam, custom command regressions; skills need stabilization |

---

*Digest compiled from github.com/openai/codex activity for 2026-05-28.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-28

---

## 1. Today's Highlights

The project is accelerating toward v0.45 with a preview release cutting today alongside aggressive nightly cadence. Core infrastructure work dominates: PTY hardening, shell parsing fixes, and devtools bundling address reliability gaps, while the community continues pushing on agent observability and subagent control. The closed PR volume (8 merges in 24h) signals maintainers are clearing backlog ahead of the next stable release.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.45.0-preview.0** | Preview | Termux relaunch/resize loop fix; devtools package bundling to resolve module resolution errors |
| **v0.45.0-nightly.20260527** | Nightly | Changelog prep for v0.43.0-preview.1; devtools bundling fix; partial PowerShell integration |
| **v0.44.0** | Stable | Refactored unsafe patterns; cumulative fixes from 0.42.0 cycle |

The preview channel is stabilizing Termux mobile support and packaging hygiene. Notably, the devtools bundling fix ([PR #27250](https://github.com/google-gemini/gemini-cli/pull/27250)) resolves a class of "module not found" errors that broke fresh installs.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | EPIC for scaling behavioral evals (76 tests, 6 Gemini variants). Quality infrastructure underpins trust in agent outputs. | 7 comments, maintainer-only; foundational work |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, mapping | Could reduce token waste and misaligned reads via precise method-boundary extraction. Major efficiency lever. | 7 comments, 👍1; investigation phase |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | Critical reliability bug: simple operations (folder creation) hang indefinitely. Workaround exists but degrades UX. | 7 comments, 👍8; high user pain |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery hides MAX_TURNS interruption | Silent failure mode: subagents report success when actually exhausted. Masks real problems in multi-repo analysis. | 6 comments, 👍2; fix merged in [#22325](https://github.com/google-gemini/gemini-cli/pull/22325) |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini underuses skills and sub-agents | Core UX gap: users must explicitly prompt for custom skills. Suggests routing/prompting improvements needed. | 6 comments; anecdotal but widespread |
| [#22571](https://github.com/google-gemini/gemini-cli/issues/22571) | Real-time observability gap in subagent delegation | Architectural critique: no visibility or control over delegated subagents. Blocks production adoption for teams. | 5 comments; enterprise-relevant |
| [#27392](https://github.com/google-gemini/gemini-cli/issues/27392) | Managed agent support for Enterprise/API users | Forward-looking: aligns with Google's managed agents API announcement. Unclear roadmap commitment. | 5 comments; strategic ask |
| [#27325](https://github.com/google-gemini/gemini-cli/issues/27325) | Antigravity CLI: custom slash command migration path | Breaking change anxiety: existing `commands/` folder investments may need full skill rewrite. | 4 comments, 👍2; migration clarity needed |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck "Waiting input" | Phantom hang after simple commands complete. Destroys interactive flow. | 4 comments, 👍3; recurring |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux desktop compatibility gap. Fixed in [#23236](https://github.com/google-gemini/gemini-cli/pull/23236) but issue still open pending verification. | 4 comments, 👍1; platform parity |

---

## 4. Key PR Progress

| # | Title | Feature/Fix | Status |
|---|-------|-------------|--------|
| [#27467](https://github.com/google-gemini/gemini-cli/pull/27467) | Handle multi-line escaped quotes in `stripShellWrapper` | Replaces naive parsing with `shell-quote` library; fixes `hg commit -m "title\n\nbody"` style commands | **Open**, P1 |
| [#27496](https://github.com/google-gemini/gemini-cli/pull/27496) | Harden PTY resize against native crashes | "Defense in depth" against `libc++abi: terminating` race conditions on process exit during resize | **Open**, P1 |
| [#27215](https://github.com/google-gemini/gemini-cli/pull/27215) | Allow configured MCP servers in non-interactive mode | Security fix: default-DENY + explicit opt-in for headless MCP auto-approval | **Closed** |
| [#22590](https://github.com/google-gemini/gemini-cli/pull/22590) | Include all Executing subagent tool calls in `useToolScheduler` state | Fixes state synchronization gap where subagent executions dropped from UI | **Open**, help wanted |
| [#27101](https://github.com/google-gemini/gemini-cli/pull/27101) | Stop after unsupported metadata listing (A2A) | Fixes 501 handling for persistent task stores; adds GCS regression test | **Open**, P1 |
| [#26088](https://github.com/google-gemini/gemini-cli/pull/26088) | F10 fallback for approval mode cycling | Accessibility/compat: Windows/WezTerm users where `Shift+Tab` misparse | **Open**, help wanted |
| [#27497](https://github.com/google-gemini/gemini-cli/pull/27497) | Prompt Replay Cache | Local `CachingContentGenerator` for `generateContent`/`generateContentStream`; reduces token usage and latency | **Closed** |
| [#23236](https://github.com/google-gemini/gemini-cli/pull/23236) | Auto-fallback to headless on Linux without display server | Wayland/headless/SSH compatibility for browser agent; uses native Wayland when available | **Closed** |
| [#23189](https://github.com/google-gemini/gemini-cli/pull/23189) | Prevent fatal crash on loop detection abort during streaming | Fixes unhandled `AbortError` when `LoopDetectionService` triggers during streaming | **Closed** |
| [#22325](https://github.com/google-gemini/gemini-cli/pull/22325) | Surface recovered subagent termination reasons | Preserves original stop reason through recovery; prevents false "GOAL success" reporting | **Closed** |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling integration** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) | Strong: 3 linked issues, maintainer EPIC, tools identified (tilth, glyph, ast-grep) |
| **Subagent observability & control** | [#22571](https://github.com/google-gemini/gemini-cli/issues/22571), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#27392](https://github.com/google-gemini/gemini-cli/issues/27392) | Growing: architectural critiques + enterprise API alignment |
| **Managed/enterprise agent support** | [#27392](https://github.com/google-gemini/gemini-cli/issues/27392) | Early: tied to Google product announcements, awaiting CLI roadmap |
| **Skill system maturity** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#27325](https://github.com/google-gemini/gemini-cli/issues/27325) | Tension: migration path from legacy commands unclear, discovery/routing underpowered |
| **Memory system robustness** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | Concentrated: security (redaction), patch validation, retry logic |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Agent hangs & phantom states** | Very high | Workflow-breaking | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) |
| **Subagent misreporting / hidden failures** | High | Trust erosion, debug difficulty | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) |
| **Terminal/PTY reliability** | High | Crashes, resize corruption | [#27496](https://github.com/google-gemini/gemini-cli/pull/27496), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) |
| **Browser agent platform gaps** | Medium | Linux desktop exclusion | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| **Shell escaping/parsing edge cases** | Medium | Command injection or misparsing | [#27467](https://github.com/google-gemini/gemini-cli/pull/27467), [#22466](https://github.com/google-gemini/gemini-cli/issues/22466) |
| **Breaking change communication** | Emerging | Migration anxiety | [#27325](https://github.com/google-gemini/gemini-cli/issues/27325) |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity through 2026-05-27.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-28

---

## 1. Today's Highlights

GitHub shipped **five rapid-fire releases (v1.0.55-2 through v1.0.55-7)** in 24 hours, with the standout addition being **`/autopilot <objective>`** for focused agent sessions alongside a major reliability fix for native binary crashes on macOS. The issue tracker remains highly active with **33 updated issues**, dominated by Linux clipboard regressions, enterprise authentication gaps, and emerging concerns around MCP server bloat consuming context windows.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.55-7** | `exit_plan_mode` tool restricted to plan-mode sessions only; **native binary crashes (SIGSEGV) now fall through to JavaScript fallback** instead of silent exit — critical fix for stability |
| **v1.0.55-6** | Added **`/autopilot <objective>`** with `/goal` alias for focused autopilot sessions; **cell-based terminal renderer enabled by default** for all users; org-policy warning for remote-controlled sessions; improved extension log capture |
| **v1.0.55-5** | MCP configuration gets **dedicated scrollable screen** for server/tool lists |
| **v1.0.55-4** | Fixes and changes (no details) |
| **v1.0.55-3** | **Hook progress streaming** for real-time long-running hook status; **`pluginDirectories`** on `session.create`/`session.resume` RPC for per-session Open Plugin mounts; **delete remote sessions from session picker** |
| **v1.0.55-2** | Fixes and changes (no details) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#223** | [Copilot Requests permission missing for org-owned fine-grained tokens](https://github.com/github/copilot-cli/issues/223) | **Enterprise blocker**: Orgs can't use organization-scoped tokens for automation, forcing risky user PATs. 72 upvotes, 22 comments spanning 8 months. | 🔥🔥🔥 Strong consensus; security/compliance critical |
| **#2205** | [Mouse scroll navigates inputs instead of history in Terminator](https://github.com/github/copilot-cli/issues/2205) | **Terminal compatibility regression**: New renderer broke expected scroll behavior. Affects productivity in popular terminal emulators. | 12 👍, active troubleshooting |
| **#146** | [Respect VS Code User Settings for CLI config](https://github.com/github/copilot-cli/issues/146) | **DX consistency gap**: CLI ignores `mcp.json` and other VS Code settings, forcing duplicate configuration. Cross-ecosystem friction point. | 10 👍, well-specified proposal |
| **#333** | [SSL inspection proxies break CLI with "fetch failed"](https://github.com/github/copilot-cli/issues/333) | **Enterprise adoption barrier**: Corporate MITM proxies render CLI unusable despite proper cert installation. No viable workaround documented. | 4 👍, detailed repro, networking/enterprise tags |
| **#1826** | [Support multi-root workspaces via `.code-workspace`](https://github.com/github/copilot-cli/issues/1826) | **Context quality**: Missing workspace roots means ignored `AGENTS.md` instructions and incomplete project understanding. | 11 👍, clear use case with `/ide` integration |
| **#3545** | [Auto-install updates at startup](https://github.com/github/copilot-cli/issues/3545) | **Daily friction**: Daily update nag → manual restart cycle disrupts flow. Simple UX fix with high impact. | Fresh (1 comment), relatable pain |
| **#3543** | [15–30s startup freeze from unbounded recursive glob](https://github.com/github/copilot-cli/issues/3543) | **Performance regression**: `COPILOT_CUSTOM_INSTRUCTIONS_DIRS=$HOME` triggers catastrophic path traversal. Clear root cause identified. | Fresh, reproducible, affects monorepo users |
| **#3539** | [System/Tools consume 73% of context window](https://github.com/github/copilot-cli/issues/3539) | **MCP scalability ceiling**: ~10 MCP servers + plugins exhaust 146k/200k tokens before first user message. Architecture concern. | 1 👍, quantified impact, emerging pattern |
| **#3188** | [Windows: empty stdout when piped, breaks all non-PowerShell automation](https://github.com/github/copilot-cli/issues/3188) | **CI/CD blocker**: `FlushFileBuffers` error breaks every Windows automation scenario outside PowerShell native redirects. | 3 👍, v1.0.44-0, still open |
| **#3541** | [Large responses clipped, prompt lost in terminal](https://github.com/github/copilot-cli/issues/3541) | **Output reliability**: Content truncation makes tool untrustworthy for substantial outputs. Affects v1.0.55-4. | Fresh, no comments yet |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.** All recent activity is release-driven with changes landing directly. The absence of visible PR flow suggests either:
- Internal development with private branches
- Fast-track hotfix releases bypassing public PR review
- Potential gap in community contribution visibility

---

## 5. Feature Request Trends

| Trend | Evidence | Maturity |
|-------|----------|----------|
| **Enterprise hardening** | #223 (org tokens), #333 (SSL/proxy), #3542 (enterprise MCP allowlists), org-policy warnings in releases | Active; authentication and compliance gaps being addressed |
| **MCP ecosystem scaling** | #3539 (context bloat), #3258 (structured vs unstructured content), #3486 (scrollable tool lists → shipped), #2717 (OAuth clientId) | **Inflection point**: MCP success creating new bottleneck in context management |
| **Cross-tool configuration unification** | #146 (VS Code settings), #1826 (`.code-workspace`), #3531 (Claude-style tool aliases) | Early; ecosystem fragmentation pain |
| **Session portability & collaboration** | #3537 (share sessions across machines/people), #3543 (remote session management → shipped) | Emerging; team workflows underserved |
| **Non-interactive/automation robustness** | #3188 (Windows pipes), #3544 (stdout in `-p` mode, closed), #333 (corporate non-interactive auth) | Critical for CI/CD adoption; partially addressed |
| **Plugin lifecycle management** | #2734 (auto-update plugins), #3546 (skill visibility bugs) | Marketplace maturing; operational needs rising |

---

## 6. Developer Pain Points

### 🔴 Critical & Recurring

| Pain Point | Frequency | Latest Manifestation |
|------------|-----------|-------------------|
| **Linux clipboard regressions** | **4 issues in 7 days** | #3483, #3414, #3395, #3467 (copy/paste broken on Ubuntu/GNOME/Wayland); #3534 (WSL2 ARM64 `/copy` fails) — v1.0.49-1.0.55 range |
| **Context window exhaustion from tooling** | Emerging pattern | #3539 (146k/200k consumed by system/tools), #3542 (enterprise allowlist triggers compaction loop) — MCP success becoming own bottleneck |
| **Silent failures / crash handling** | Addressed in latest release | #2812 (SIGSEGV silent exit), fixed in v1.0.55-7 with JS fallback |
| **Startup performance degradation** | New in 1.0.52+ | #3543 (recursive glob freeze), #3545 (update nag friction) |

### 🟡 Persistent Friction

- **Windows automation brittleness**: #3188 remains open since v1.0.44-0, blocking non-PowerShell pipelines
- **Configuration drift between editor and CLI**: #146 highlights ongoing VS Code ↔ CLI settings gap
- **Agent governance**: #3540 reports skill hard-gates being ignored — safety/control concern for autonomous actions

### 📊 Community Health Signal

- **33 issues updated in 24h** with **zero PRs** suggests high user engagement but low visible community contribution throughput
- **Rapid patch velocity** (5 releases/24h) indicates responsive maintenance but potentially reactive stabilization cycle
- **Fresh issues (#3540–#3546)** cluster around agent reliability, context management, and plugin ecosystem — signs of feature maturation stress

---

*Digest compiled from github.com/github/copilot-cli public data as of 2026-05-28.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-28

## 1. Today's Highlights

The v1.45.0 release landed with critical error-handling fixes and toolset deduplication improvements. Meanwhile, the community is actively confronting the project's transition: two PRs merged yesterday to add deprecation notices across docs and README, formally steering users toward the TypeScript successor **Kimi Code** (`MoonshotAI/kimi-code`). Active development continues on the Python CLI with fresh bug reports around TUI rendering and subagent rate-limiting.

---

## 2. Releases

### [v1.45.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.45.0)
| PR | Change | Author |
|---|---|---|
| [#2342](https://github.com/MoonshotAI/kimi-cli/pull/2342) | **fix(shell):** Eliminated misleading "Quota exceeded" prefix on all 403 errors—now correctly surfaces the actual error cause | [@liruifengv](https://github.com/liruifengv) |
| [#23](https://github.com/MoonshotAI/kimi-cli/pull/23) | **feat(toolset):** Improved deduplication via sparse reminders and canonical argument normalization, reducing redundant tool calls | [@jackfish212](https://github.com/jackfish212) |

---

## 3. Hot Issues

| # | Status | Title | Why It Matters | Community Signal |
|---|--------|-------|--------------|----------------|
| [#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) | 🔴 OPEN | Foreground subagents exhaust single API key rate limit | **Architectural bottleneck**: Concurrent `coder`/`explore` subagents share one API key, triggering 429s and hangs—blocks serious multi-agent workflows | 0 👍, 1 comment; author already drafted PR [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) |
| [#2379](https://github.com/MoonshotAI/kimi-cli/issues/2379) | 🔴 OPEN | Markdown list items in TUI drop characters when wrapped | **Regression in v1.45.0**: Breaks readability of model outputs; affects Linux users immediately | Fresh (0 comments), PR [#2380](https://github.com/MoonshotAI/kimi-cli/pull/2380) already opened |
| [#2375](https://github.com/MoonshotAI/kimi-cli/issues/2375) | 🔴 OPEN | Propagate abort signal to HTTP fetch for instant cancellation | **Performance/correctness**: Current cooperative cancellation leaves streams dangling; wastes tokens and delays UX feedback | 0 👍; deep technical analysis, no maintainer response yet |
| [#2376](https://github.com/MoonshotAI/kimi-cli/issues/2376) | 🔴 OPEN | Add deprecation banner on GitHub Pages | **Migration clarity**: Old docs still rank in search; users install deprecated Python CLI unknowingly | 0 👍; PRs [#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377)/[#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378) merged to address |
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) | 🔴 OPEN | Kimi Web refreshes sporadically, breaking session state | **Persistent UX bug**: 2+ months old, affects Windows users, erodes trust in web integration | 1 👍, 5 comments; no resolution path visible |
| [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) | ✅ CLOSED | `@mention` file path error in `~` directory | Fixed path expansion bug for macOS home directory references | 0 👍, 3 comments; clean resolution |

---

## 4. Key PR Progress

| # | Status | Title | Technical Summary | Author |
|---|--------|-------|-------------------|--------|
| [#2380](https://github.com/MoonshotAI/kimi-cli/pull/2380) | 🔴 OPEN | fix(tui): preserve characters when wrapping markdown lists | Corrects text-wrapping logic that was slicing Unicode characters mid-grapheme in rendered markdown | [@bdragan](https://github.com/bdragan) |
| [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) | 🔴 OPEN | feat(subagent): add API key pool for parallel execution | Introduces `APIKeyPool` with round-robin allocation; closes [#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) | [@Liewzheng](https://github.com/Liewzheng) |
| [#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377) | ✅ CLOSED | docs: announce evolution to Kimi Code successor | Adds dismissible banner + README notice redirecting to TypeScript rewrite; locale-aware (zh/en) | [@RealKai42](https://github.com/RealKai42) |
| [#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378) | ✅ CLOSED | docs: fix router auto language redirect | Fixes `useRouter()` timing and `withBase()` wrapping for GitHub Pages subpath deployment | [@RealKai42](https://github.com/RealKai42) |
| [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) | 🔴 OPEN | fix: route MCP server log notifications to loguru | Prevents MCP log spam from corrupting TUI; redirects to structured logging | [@he-yufeng](https://github.com/he-yufeng) |
| [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) | 🔴 OPEN | fix: tolerate non-utf8 worker output | Replaces strict UTF-8 decoding with `errors="replace"`; fixes Windows cp1252 crashes masking real errors | [@he-yufeng](https://github.com/he-yufeng) |
| [#2335](https://github.com/MoonshotAI/kimi-cli/pull/2335) | 🔴 OPEN | docs: fix Notification hook matcher example | Corrects broken `permission_prompt` example in hook documentation; updates test fixtures | [@he-yufeng](https://github.com/he-yufeng) |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-agent scalability** | [#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) + PR [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) | 🔥 Active — author driving implementation |
| **Responsive cancellation / signal propagation** | [#2375](https://github.com/MoonshotAI/kimi-cli/issues/2375) | 🆕 Emerging — infrastructure-level request |
| **Project sunsetting / migration tooling** | [#2376](https://github.com/MoonshotAI/kimi-cli/issues/2376), PRs [#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377)/[#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378) | ✅ Addressed — docs now redirect |
| **Cross-platform encoding resilience** | [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) | 🔄 Ongoing — Windows-specific fixes |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Current Mitigation |
|------------|-----------|--------|------------------|
| **Rate-limit contention under parallelism** | High (blocking multi-agent use) | Severe — workflow hangs | PR [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) under review |
| **TUI text rendering corruption** | Recurring (lists, wrapping, encoding) | Moderate — breaks output readability | [#2380](https://github.com/MoonshotAI/kimi-cli/pull/2380) fixes latest instance |
| **Unclear project status / migration path** | High (new user confusion) | Moderate — wasted onboarding effort | Docs banners now live; README updated |
| **Cooperative-only cancellation leaving dangling streams** | Low but deep | Moderate — token waste, latency | No active PR; [#2375](https://github.com/MoonshotAI/kimi-cli/issues/2375) awaits triage |
| **MCP integration log noise polluting interface** | Low | Low-Moderate | [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) pending review |

---

*Digest compiled from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity 2026-05-27 → 2026-05-28.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-28

## Today's Highlights

The v1.15.11 release landed with a new `headerTimeout` config for provider requests, though it immediately drew reports of 10s timeouts being too aggressive for OpenAI users. DeepSeek's `reasoning_content` handling remains the hottest friction point, with three separate active issues spanning tool calls, thinking mode, and model variants. Meanwhile, the community continues pushing for provider ecosystem expansion with new requests for CommandCode, freemodel.dev, and Kimi K2.6 fixes.

---

## Releases

**v1.15.11** — [Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.15.11)
- Added `headerTimeout` configuration for provider requests (10s default for OpenAI setups)
- Experimental background agents now push updates without polling
- Granular `modalities.input` / `modalities.output` config support (@robposch)
- Remote-backed improvements (details truncated in source)

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1505](https://github.com/anomalyco/opencode/issues/1505) | **Shift+Enter keybinding broken in TUI** | Closed after massive 125-comment thread; fundamental text input UX | 🔥 125 comments, 100 👍 — one of the most engaged issues ever |
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | **GPT models intermittently slow (minutes for simple prompts)** | Performance regression affecting daily productivity; GPT 5.4 xhigh cited | 96 comments, 46 👍; users comparing provider latency patterns |
| [#24569](https://github.com/anomalyco/opencode/issues/24569) | **DeepSeek V4 Pro `reasoning_content` error** | Closed but pattern persists — DeepSeek's thinking mode requires bidirectional `reasoning_content` | 28 comments, 12 👍; fix in v1.14.27 didn't fully resolve |
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | **v1.15.1+ breaks Bun installs** | Package manager compatibility; postinstall scripts blocked by default in Bun/pnpm | 17 comments, 9 👍; blocking for Bun-native workflows |
| [#17796](https://github.com/anomalyco/opencode/issues/17796) | **TUI copy-via-selection broken** | Clipboard integration silently fails despite "copied" confirmation | 15 comments, 1 👍; regression from ~2 weeks ago |
| [#20802](https://github.com/anomalyco/opencode/issues/20802) | **Custom OpenAI providers: image attachments not reaching vision models** | Vision pipeline broken for non-standard providers; affects longent, others | 12 comments, 2 👍; blocking multimodal workflows |
| [#18567](https://github.com/anomalyco/opencode/issues/18567) | **Shared conversation UI confusing** | `opncd.ai/share/*` landing on oldest message, poor navigation | 9 comments, 1 👍; UX debt for collaboration features |
| [#14891](https://github.com/anomalyco/opencode/issues/14891) | **Realtime API with WebSocket support** | Major architectural shift from REST to WebSocket for OpenAI | 8 comments, 20 👍; high demand, closed but likely tracked internally |
| [#26338](https://github.com/anomalyco/opencode/issues/26338) | **Add CommandCode as provider** | Expanding provider ecosystem for enterprise auth patterns | 6 comments, 7 👍; active community request |
| [#29548](https://github.com/anomalyco/opencode/issues/29548) | **OpenAI headers timeout after 10000ms on 1.15.11** | Direct v1.15.11 regression; default too aggressive | 5 comments, fresh report with workaround documented |

---

## Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|-------------|
| [#29637](https://github.com/anomalyco/opencode/pull/29637) | **Session status in terminal tab title** | 🟢 Open | TUI quality-of-life: idle/working indicator in terminal chrome |
| [#29615](https://github.com/anomalyco/opencode/pull/29615) | **Replay remote next session events** | 🟢 Open | Fixes central instance → remote workspace event sync; stacked on #29458 |
| [#29458](https://github.com/anomalyco/opencode/pull/29458) | **Forward remote workspace request bodies** | 🟢 Open | Core proxy fix: Node HTTP `request.stream` vs Web `Request.body` handling |
| [#27231](https://github.com/anomalyco/opencode/pull/27231) | **Edit button for connected providers** | 🟢 Open | UI improvement for provider management; closes #20598 |
| [#28937](https://github.com/anomalyco/opencode/pull/28937) | **Start MCP servers only for open directories** | 🟢 Open | Performance: lazy MCP initialization, reduces startup overhead |
| [#26090](https://github.com/anomalyco/opencode/pull/26090) | **Expose LLM response headers on assistant messages** | 🟢 Open | Enables LiteLLM proxy routing visibility (`x-litellm-model-id`) |
| [#29635](https://github.com/anomalyco/opencode/pull/29635) | **Report invalid agent/mode configs** | 🟢 Open | Graceful degradation vs. crash on bad config files |
| [#28071](https://github.com/anomalyco/opencode/pull/28071) | **Well-known auth service** | 🟢 Open | Auth architecture: legacy `auth.json` → `well-known.json` migration |
| [#24680](https://github.com/anomalyco/opencode/pull/24680) | **Case-insensitive `--agent` names** | ✅ Closed | CLI ergonomics: `--agent Explore` now matches `explore` |
| [#24666](https://github.com/anomalyco/opencode/pull/24666) | **Plugin `model.before` hook** | ✅ Closed | Plugin system extensibility: intercept and rewrite model selection |

---

## Feature Request Trends

1. **Provider Proliferation** — CommandCode (#26338), freemodel.dev (#29617), native Kimi/Moonshot (#12156, #29619). Community wants breadth of auth and model access.

2. **Realtime / WebSocket Architecture** — OpenAI Realtime API (#14891) and streaming improvements signal demand for lower-latency, bidirectional interaction models.

3. **MCP Ecosystem Maturity** — Async loading (#20755), resource reading (#29245), prompt notifications (#29631), and conditional startup (#28937). MCP is becoming a first-class citizen.

4. **Structured Output Robustness** — JSON schema constraints for `opencode run` (#9320), `retryCount` actually being honored (#25430). Users need deterministic programmatic output.

5. **Plugin Context Injection** — Hooks need ability to inject AI-visible messages (#17412), not just intercept. Deeper plugin integration into conversation flow.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **DeepSeek `reasoning_content` Hell** | HTTP 400s, missing fields in tool calls, thinking mode breakage | 🔴 4+ active issues (#24569, #28945, #29618, #29619) |
| **Timeout Tuning Whiplash** | v1.15.11's 10s default too aggressive; prior versions had no limit | 🟡 Fresh regression with clear workaround |
| **Package Manager Friction** | Bun/pnpm postinstall blocks, global install differences | 🟡 Chronic (#27906) |
| **TUI Selection/Clipboard Regressions** | Copy-on-select broken, keybindings flaky across terminals | 🟡 Recurring theme (#17796, #1505, #16043) |
| **Config Validation Gaps** | Invalid configs crash startup or silently drop; subagent permission inheritance changed without docs | 🟡 #29635, #27497 |
| **Windows Desktop Stability** | File watcher handle errors, undici terminations interrupting tasks | 🟡 #29589 |

---

*Digest compiled from github.com/anomalyco/opencode activity on 2026-05-27/28.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-28

## Today's Highlights

Pi shipped **v0.76.0** with explicit session ID control for automation workflows and RPC bash output exclusion from model context. Meanwhile, the community closed 16 issues and merged 15 PRs in 24 hours, with heavy activity around terminal compatibility fixes, Windows config corruption, and provider metadata accuracy.

---

## Releases

**[v0.76.0](https://github.com/earendil-works/pi/releases/tag/v0.76.0)**

- **`--session-id <id>`** — Scripts can now create or resume exact project-local sessions by ID, enabling deterministic automation and CI/CD integration. Replaces the prefix-matching behavior of `--session`.
- **RPC `excludeFromContext` for `bash`** — RPC clients can now run bash commands without polluting the model's context window, critical for long-running background operations.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` hangs on "Working..." with zero-usage aborted turns | **Top community pain point** — TUI deadlock with gpt-5.5 requiring Escape to recover; 37 comments suggest widespread impact on daily workflows | 🔥 21 👍, active investigation |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | Official local LLM provider extension | Long-standing request for dynamic model list fetching from `{baseUrl}/models` to unify Ollama/llama.cpp/LM Studio workflows | 33 👍, 22 comments |
| [#3259](https://github.com/earendil-works/pi/issues/3259) | Shift+Enter newline regression in Zellij | Terminal multiplexer compatibility breakage affecting tmux/Zellij power users; keyboard protocol negotiation remains fragile | 16 comments, in progress |
| [#2023](https://github.com/earendil-works/pi/issues/2023) | `pi.runWhenIdle()` for post-settlement scheduling | Extension API gap — current `sendUserMessage` workarounds race with agent state, causing timing bugs in runtime reload scenarios | 11 comments, in progress |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | Terminal scrolls to beginning without reason | **Closed** — Random viewport jumps during model streaming severely disrupted focus; fix landed in v0.76 cycle | 7 comments, resolved |
| [#4160](https://github.com/earendil-works/pi/issues/4160) | Pi extensions incompatible with Bun | **Closed** — Bun users blocked from installing extensions due to hardcoded `npm` dependency; closed pending big refactor | 7 comments |
| [#5089](https://github.com/earendil-works/pi/issues/5089) | `timeoutMs` not respected past certain value | Local inference on underpowered hardware (Qwen 3.6 27B Q8 on CPU) hits hardcoded limits; affects self-hosting community | 6 comments, closed |
| [#3146](https://github.com/earendil-works/pi/issues/3146) | Sticky bottom TUI layout | **Closed** — Editor/footer jumping during streaming/tool expansion was highly disorienting; UX polish landed | 5 👍, 5 comments |
| [#3627](https://github.com/earendil-works/pi/issues/3627) | Expose timeout/retry on OpenAI providers | **Closed** — 10-minute default timeout broke local inference; third duplicate of this request class | 4 comments, in progress |
| [#5095](https://github.com/earendil-works/pi/issues/5095) | `resolveConfigValue` corrupts literal API keys on Windows | Windows `PUBLIC` env var case-insensitivity collision causes config parsing to return `C:\Users\Public` instead of `"public"`; breaks opencode free tier keys | 1 comment, fix in PR #5093 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#5100](https://github.com/earendil-works/pi/pull/5100) | Track remote default branch when no `@ref` configured | Fixes git package drift when upstream branch changes after initial install; resolves [#5099](https://github.com/earendil-works/pi/issues/5099) | ✅ Merged |
| [#5097](https://github.com/earendil-works/pi/pull/5097) | Inline images + arrow keys inside tmux | DCS passthrough for image protocols + CSI-u key sequence parsing; unblocks tmux users entirely | ✅ Merged |
| [#5093](https://github.com/earendil-works/pi/pull/5093) | Fix `resolveConfigValue` Windows corruption | Case-sensitive env var lookup to prevent `PUBLIC`→`C:\Users\Public` substitution; critical for Windows reliability | ✅ Merged |
| [#5091](https://github.com/earendil-works/pi/pull/5091) | Harden keyboard protocol negotiation | Attempts final fix for [#3259](https://github.com/earendil-works/pi/issues/3259) Zellij/Shift+Enter regression; uses progressive enhancement | 🔄 Open |
| [#5090](https://github.com/earendil-works/pi/pull/5090) | NVIDIA NIM provider | OpenAI-compatible provider for `integrate.api.nvidia.com/v1`; expands enterprise GPU hosting options | ✅ Merged |
| [#5086](https://github.com/earendil-works/pi/pull/5086) | Fix GPT-5.5 context window (272K → 1.05M) | Corrects model metadata to match OpenAI docs; prevents premature context truncation on long sessions | ✅ Merged |
| [#5076](https://github.com/earendil-works/pi/pull/5076) | Explicit `--session-id` naming | v0.76.0 headline feature; deterministic session lifecycle for automation | ✅ Merged |
| [#5088](https://github.com/earendil-works/pi/pull/5088) | Collapse grouped tool calls | Experimental UX for reducing TUI noise during multi-tool execution; marked "not ready for human consumption" | 🔄 Open |
| [#5081](https://github.com/earendil-works/pi/pull/5081) | `--no-system-prompt-docs` flag | Opt-out of Pi documentation tokens in system prompt; saves context budget for power users | ✅ Merged |
| [#4911](https://github.com/earendil-works/pi/pull/4911) | Codex device code login | OAuth2 device flow for OpenAI Codex; second auth path beyond default, closes [#3424](https://github.com/earendil-works/pi/issues/3424) | 🔄 Open |

---

## Feature Request Trends

1. **Local/self-hosted LLM ergonomics** — Dynamic model discovery ([#3357](https://github.com/earendil-works/pi/issues/3357)), timeout controls ([#3627](https://github.com/earendil-works/pi/issues/3627)), and provider flexibility ([#3987](https://github.com/earendil-works/pi/issues/3987)) dominate. Users want Pi to "just work" with Ollama, llama.cpp, and vLLM without manual `models.json` curation.

2. **Multi-agent orchestration** — [#5077](https://github.com/earendil-works/pi/issues/5077) and [#2844](https://github.com/earendil-works/pi/issues/2844) show demand for routing between specialized models (reasoning vs. tool-calling) and coordinated agent swarms with independent context.

3. **Extension API surface expansion** — `runWhenIdle` ([#2023](https://github.com/earendil-works/pi/issues/2023)), custom fetch hooks ([#3987](https://github.com/earendil-works/pi/issues/3987)), freeform tool shapes ([#4948](https://github.com/earendil-works/pi/issues/4948)), and UI components like multi-select ([#5025](https://github.com/earendil-works/pi/issues/5025)) indicate Pi is being pushed beyond its original design as a framework.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Terminal compatibility matrix** | 🔴 Chronic | Zellij ([#3259](https://github.com/earendil-works/pi/issues/3259)), tmux ([#5098](https://github.com/earendil-works/pi/issues/5098)), JetBrains ([#5037](https://github.com/earendil-works/pi/issues/5037)) — keyboard protocols and image rendering break across environments |
| **Windows second-class citizenship** | 🔴 High | Config corruption ([#5095](https://github.com/earendil-works/pi/issues/5095)), path handling, case-insensitive env vars — suggests insufficient CI coverage on Windows |
| **Timeout/retry opacity** | 🟡 Recurring | Hardcoded 10m limits ([#3627](https://github.com/earendil-works/pi/issues/3627)), `timeoutMs` ignored ([#5089](https://github.com/earendil-works/pi/issues/5089)), websocket inactivity ([#4979](https://github.com/earendil-works/pi/pull/4979)) — local inference users hit these constantly |
| **Context window metadata drift** | 🟡 Sporadic | GPT-5.5 272K→1.05M fix ([#5086](https://github.com/earendil-works/pi/pull/5086)) reveals provider metadata maintenance burden; likely affects other models |
| **Session storage semantics** | 🟡 Emerging | `PI_CODING_AGENT_SESSION_DIR` flat storage ([#5040](https://github.com/earendil-works/pi/issues/5040)), session ID control ([#4874](https://github.com/earendil-works/pi/issues/4874)) — users need predictable, scopable session lifecycle for automation |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-28

## Today's Highlights

The Qwen Code team shipped **v0.16.2** with a critical TypeScript build fix, while the daemon mode ecosystem accelerated dramatically with 6+ PRs targeting `qwen serve` infrastructure. A notable surge in authentication-related bugs (OAuth timeouts, IDE login failures) and Windows-specific terminal issues signals growing mainstream adoption beyond the core Linux/Unix developer base.

---

## Releases

| Version | Notes |
|---------|-------|
| **[v0.16.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.2)** | Patch release fixing TS5055 build errors by cleaning stale outputs before `tsc --build` ([#4453](https://github.com/QwenLM/qwen-code/pull/4453)) |
| [v0.16.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-preview.0) | Preview channel with same build fix |
| [v0.16.1-nightly.20260527](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260527.641a1a739) | Nightly build for early adopters |

---

## Hot Issues

| # | Status | Title | Why It Matters |
|---|--------|-------|--------------|
| **[#656](https://github.com/QwenLM/qwen-code/issues/656)** | 🔴 OPEN, P1 | API Error 400 `InternalError.Algo.InvalidParameter` for every message | **6-month chronic** — affects all messages without config changes. Suggests upstream API breakage or regression in parameter serialization. 10 comments, no resolution path. |
| **[#4493](https://github.com/QwenLM/qwen-code/issues/4493)** | 🔴 OPEN | Rider IDE cannot login to Qwen Code (OAuth redirect loop) | JetBrains ecosystem blocker. Chinese users specifically blocked from Aliyun token plan integration. 4 comments, active triage. |
| **[#4317](https://github.com/QwenLM/qwen-code/issues/4317)** | 🔴 OPEN | Google Auth 504 Gateway Timeout on device token poll | OAuth infrastructure reliability issue. Affects Google Workspace users; 504 suggests load/autoscaling problems on Qwen's auth backend. |
| **[#4562](https://github.com/QwenLM/qwen-code/issues/4562)** | 🔴 OPEN | Windows: `qwen-code` runs in `cmd.exe` not PowerShell, `!ls` fails | **Windows adoption friction**. Shell environment detection is broken; users expect WSL-like experience on native Windows. 3 comments in 24h. |
| **[#4568](https://github.com/QwenLM/qwen-code/issues/4568)** | 🔴 OPEN, P2 | `@` file completion shows submodule folders but no files inside | Git submodule workflow blocker. Monorepo users cannot reference nested files via completion. |
| **[#4579](https://github.com/QwenLM/qwen-code/issues/4579)** | 🔴 OPEN | False "compressed turn" error when mid-turn messages exist | UX regression in rewind functionality. New issue with **active PR fix** ([#4580](https://github.com/QwenLM/qwen-code/pull/4580)) already submitted. |
| **[#4575](https://github.com/QwenLM/qwen-code/issues/4575)** | 🔴 OPEN | Auto-mode and auto-accept edits share identical yellow indicator | Accessibility/UX issue — users cannot distinguish autonomous action levels. One of several theming inconsistencies. |
| **[#4537](https://github.com/QwenLM/qwen-code/issues/4537)** | 🟢 CLOSED | CLI crash: AI `taskkill /F /IM node.exe` kills Qwen CLI itself | **Hilarious and serious** — agent self-termination via overly broad process kill. Closed but exemplifies shell safety gap. |
| **[#4452](https://github.com/QwenLM/qwen-code/issues/4452)** | 🟢 CLOSED | Microsoft Claude Code plugin fails to install properly | Extension ecosystem interoperability. Closed with fix for slash command/skill resolution. |
| **[#4513](https://github.com/QwenLM/qwen-code/issues/4513)** | 🟢 CLOSED | PNG `inlineData` rejected by qwen3.7-max OpenAI-compatible interface | Multimodal format mismatch between Qwen Code's output and upstream API expectations. Closed rapidly — model API compatibility layer needs hardening. |

---

## Key PR Progress

| # | Author | Title | Impact |
|---|--------|-------|--------|
| **[#4580](https://github.com/QwenLM/qwen-code/pull/4580)** | doudouOUC | Fix false "compressed turn" rewind error | Corrects turn-count mismatch by retyping mid-turn messages as `notification`. Unblocks rewind UX. |
| **[#4552](https://github.com/QwenLM/qwen-code/pull/4552)** | doudouOUC | Runtime MCP server add/remove for daemon | **Major daemon milestone** — hot-reload MCP servers without restart. Closes T2.8 from roadmap. |
| **[#4576](https://github.com/QwenLM/qwen-code/pull/4576)** | doudouOUC | Server-side shell execution for `!` bang prefix | Daemon-mode shell bypass for direct command execution. Streaming SSE output. |
| **[#4578](https://github.com/QwenLM/qwen-code/pull/4578)** | doudouOUC | Session tasks snapshot endpoint | Background task introspection for web-shell. Enables monitoring long-running agent operations. |
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** | doudouOUC | Extract `DaemonWorkspaceService` from `AcpSessionBridge` | **Architecture refactor** — cleaner separation of concerns in daemon; 4 sub-services (File/Auth/Agents/Memory). |
| **[#4556](https://github.com/QwenLM/qwen-code/pull/4556)** | doudouOUC | Trace daemon prompt lifecycle with OTel | End-to-end telemetry propagation across HTTP → ACP bridge → child execution. Fixes trace ID escape bug. |
| **[#4570](https://github.com/QwenLM/qwen-code/pull/4570)** | yiliang114 | `/triage` skill for AI-native PR/issue intake | **New skill** — maintainer automation for repository hygiene. Consolidates 4 prior workflow designs. |
| **[#4573](https://github.com/QwenLM/qwen-code/pull/4573)** | ytahdn | Context-usage API + daemon-react-sdk refactor | Full context-window visibility in web-shell. Modularizes webui providers. |
| **[#4555](https://github.com/QwenLM/qwen-code/pull/4555)** | jifeng | `qwen-serve-bridge` MCP server | **Interoperability breakthrough** — Qwen Code daemon as MCP host for Claude Desktop, Cursor, Qoder via stdio. |
| **[#4564](https://github.com/QwenLM/qwen-code/pull/4564)** | shenyankm | Token usage exposure for cost visibility | Financial transparency feature: daily/monthly breakdowns, CSV/JSON export. Critical for enterprise adoption. |

> **Note:** `doudouOUC` authored **6 of 10** key PRs — dominant contributor to daemon infrastructure this cycle.

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Daemon/Server Mode Maturity** | #2271, #4552, #4555, #4556, #4576, #4578, #4573 | 🔥 **Explosive** — 7+ PRs in 48h. Web-shell, MCP bridge, telemetry, shell execution all landing. |
| **Cost/Usage Transparency** | #4564, #385 (GitHub Actions CI cost control) | Growing — token accounting now implemented; CI integration still requested. |
| **`/simplify` Skill Parity** | #3565 | Moderate — explicit Claude Code feature port. 1 👍, maintainer-welcomed. |
| **Lite/Low-Resource Mode** | #1277 | Stalled — closed without resolution. Local model deployment still underserved. |
| **Terminal UX Unification** | #4566 (WinkTerm), #4387 (stream-driven tools), #4562 (Windows shell) | Active — external integrations proposing PTY-sharing architectures. |

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Authentication Fragility** | OAuth 504s (#4317), redirect loops (#4493), token expiry edge cases | **High** — 3 open issues, cross-IDE (JetBrains, VS Code, web) |
| **Windows Second-Class Citizenship** | cmd vs PowerShell (#4562), screen flicker in compact mode (#4561), `!` command failures | **High** — 3 issues in 24h from `YANGSROOT` alone |
| **Context/History Management** | False compression errors (#4579), oversized history crashes (#4531), OOM (#4276) | **Medium-High** — core reliability; multiple active PR fixes |
| **Shell Safety Gaps** | Self-termination (#4537), command substitution bypass (#4093), inconsistent security policies | **Medium** — agent autonomy vs. self-preservation tension |
| **IDE Integration Polish** | Submodule file completion (#4568), Android Studio detection (#1368), settings.json validation (#4448 → #4560) | **Medium** — enterprise IDE matrix complexity |

---

*Digest compiled from github.com/QwenLM/qwen-code public activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-05-28

---

## 1. Today's Highlights

The project officially completes its rebrand to **CodeWhale** with v0.8.47, shipping deprecation shims for legacy `deepseek` binaries that will be removed in v0.9.0. The community is actively pushing Windows stability fixes and shell abstraction layers, while a major architectural debate around "Dual" model routing (Pro for reasoning + Flash for execution) gains traction as a cost-optimization strategy. Meanwhile, maintainer Hmbown opened three crate consolidation PRs signaling a post-rebrand codebase cleanup sprint.

---

## 2. Releases

**[v0.8.47](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.47)** — "Verification Gate, Goal Tools, DuckDuckGo Default"
- **Rebrand to CodeWhale**: Project renamed with legacy `deepseek`/`deepseek-tui` binaries as deprecation shims printing warnings before forwarding to `codewhale`/`codewhale-tui`
- Shims will be **removed in v0.9.0**; users should migrate immediately
- See migration guide: [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1757](https://github.com/Hmbown/CodeWhale/issues/1757) | **Ctrl+C cancel with input restoration** — Cancelled requests lose user input permanently; requesting auto-restore to composer | Core UX friction for iterative prompting; terminal copy-paste is unreliable | 10 comments, active design discussion on distinguishing "cancel" vs "clear" |
| [#1676](https://github.com/Hmbown/CodeWhale/issues/1676) | **"Dual" mode: Pro for reasoning + Flash for execution** | Cost optimization (~6× cheaper tool calls) without sacrificing reasoning quality; challenges OpenAI's single-model paradigm | 4 comments, strong conceptual support; needs architectural buy-in |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | **TUI crash leaks input to PowerShell** — Focus loss causes keystrokes to execute as shell commands | **Security-critical**: Accidental command execution on Windows; data loss risk | 3 comments, fresh report needing repro confirmation |
| [#2244](https://github.com/Hmbown/CodeWhale/issues/2244) | **Statusline covers scrolled content** | Breaks readability of long model outputs; basic TUI layout bug | 2 comments, clear repro, likely quick fix |
| [#1779](https://github.com/Hmbown/CodeWhale/issues/1779) | **Windows shell hardcodes cmd.exe** — Ignores PowerShell/pwsh/WSL, breaking quoting | Fundamental Windows compatibility gap; affects all Windows users with modern shells | 2 comments, linked to active PR stack (#2290/#2294) |
| [#2247](https://github.com/Hmbown/CodeWhale/issues/2247) | **Custom DeepSeek-compatible API providers** | Vendor lock-in concern; blocks local deployments and third-party routing | 2 comments, high-demand for OpenAI-compatible endpoint flexibility |
| [#2264](https://github.com/Hmbown/CodeWhale/issues/2264) | **Systematic prefix-cache stability** | 99%+ cache hit architecture from `deepseek-reasonix` could dramatically reduce API costs; currently best-effort conventions | 1 comment, 1 👍, technical deep-dive with implementation sketch |
| [#2211](https://github.com/Hmbown/CodeWhale/issues/2211) | **Sub-agent fanout saturates TUI** — Max agents (5/5) hit during release work | Scalability ceiling for complex workflows; compound pressure from hidden worktrees + background shells | 1 comment, maintainer-flagged, release-blocker label |
| [#2254](https://github.com/Hmbown/CodeWhale/issues/2254) | **Premature update banner overrides cost display** | Forced UI noise blocking user-configured metrics; no dismissal mechanism | 1 comment, clearly regressive UX decision |
| [#2159](https://github.com/Hmbown/CodeWhale/issues/2159) | **Large paste auto-converts to @file then hangs** | Data loss/corruption path; auto-detection heuristic is over-aggressive | 1 comment, Indonesian reporter indicates global user base |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-----------|--------|
| [#2298](https://github.com/Hmbown/CodeWhale/pull/2298) | **Activity detail context enrichment** — Ctrl+O position tracking, artifact handles, reasoning chunk previews | Fixes #1547; avoids raw tool dump in pager | Open |
| [#2297](https://github.com/Hmbown/CodeWhale/pull/2297) | **Cap live tool outputs with SHA receipts** — Prevents oversized results from flooding context window | Fixes #2021; bounded `TOOL_OUTPUT_RECEIPT` text | Open |
| [#2296](https://github.com/Hmbown/CodeWhale/pull/2296) | **Docker toolbox compose template** — Opt-in sudo/dev packages, per-project state isolation | Fixes #2217; keeps default image minimal/non-root | Open |
| [#2290](https://github.com/Hmbown/CodeWhale/pull/2290) + [#2294](https://github.com/Hmbown/CodeWhale/pull/2294) | **ShellDispatcher + ExternalTool abstraction** — Isolates shell selection logic, extracts hardcoded subprocess spawning | Stacked PRs replacing #1848; unblocks #1779 Windows shell fix | Open |
| [#2113](https://github.com/Hmbown/CodeWhale/pull/2113) | **Independent scroll regions** — Split chat vs. tool output with separate scroll state/cache | Major TUI navigation improvement; mouse wheel routing | Open |
| [#2242](https://github.com/Hmbown/CodeWhale/pull/2242) | **Typed persistent tool permissions** — `allow`/`deny`/`ask` by tool name, command prefix, path pattern | Supersedes split PRs; end-to-end approval flow with TUI persistence | Open |
| [#2240](https://github.com/Hmbown/CodeWhale/pull/2240) | **Xiaomi MiMo provider** — `mimo-v2.5-pro`/`mimo-v2.5` via token-plan endpoint | First Chinese third-party flagship integration; thinking toggle | Open |
| [#2257](https://github.com/Hmbown/CodeWhale/pull/2257) | **Account balance status bar** — DeepSeek balance fetch, opt-in via `/statusline` | Carried from #1970; cost transparency without default clutter | Open |
| [#2267](https://github.com/Hmbown/CodeWhale/pull/2267) | **Claude theme** — 9th preset matching Claude Code's color surface | Aesthetic parity with competitor; screenshot-validated | Open |
| [#1968](https://github.com/Hmbown/CodeWhale/pull/1968) | **Mobile control page restoration** — `codewhale serve --mobile` for LAN entry | Rebased from pre-rebrand #852; SSE-based mobile companion | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Multi-model routing / "Dual" architecture** | #1676 (explicit proposal), #2264 (cache optimization for model switching) | High — cost pressure driving architectural innovation |
| **Windows-native experience** | #1779, #2261, #2295, #2290/#2294 stack | Very high — multiple concurrent PRs, shell abstraction is foundational |
| **Vendor/provider flexibility** | #2247 (custom APIs), #2240 (MiMo), #2201 (PROVIDERS.md registry), #1224 (config consolidation) | High — ecosystem expansion critical for adoption |
| **Permission/execution policy hardening** | #1186, #2242, #1786 | Medium-high — enterprise readiness signal |
| **Session lifecycle UX** | #1757 (cancel+restore), #2234 (`/new` command, merged) | Medium — polish gap vs. competitors |

---

## 6. Developer Pain Points

**Windows as second-class citizen**: Three open issues (#1779, #2261, #2295) plus a two-PR stack (#2290/#2294) address shell detection, focus management, and logging leaks. The hardcoded `cmd.exe` and PowerShell quoting breakage suggest Windows was not in the initial design target.

**Rebrand transition friction**: Homebrew users hit PATH issues (#2104), macOS notarization blocks installs (#2052), and legacy binary confusion persists. The one-release deprecation window for shims may be aggressive.

**TUI rendering reliability**: Statusline overflow (#2244), background image loss (#2230), PDF parsing mess (#2226), and paste-induced hangs (#2159) indicate the terminal UI layer is under stress from feature accumulation without sufficient layout regression testing.

**Cost visibility vs. noise tension**: Users want balance display (#2257, opt-in) but reject forced update banners (#2254). The status bar is becoming contested UI real estate.

**Crate architecture debt**: Hmbown's three same-day consolidation PRs (#2249, #2250, #2251) deleting 1,027 lines of orphaned/underutilized crate code suggest the Rust workspace grew organically and needs structural simplification before further scaling.

---

*Digest compiled from github.com/Hmbown/CodeWhale (formerly DeepSeek-TUI) public activity through 2026-05-28.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*