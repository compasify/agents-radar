# AI CLI Tools Community Digest 2026-05-22

> Generated: 2026-05-22 00:25 UTC | Tools covered: 9

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

## Cross-Tool Comparison Report: AI CLI Developer Tools — 2026-05-22

### 1. Ecosystem Overview

The AI CLI tools ecosystem continues accelerating, with six major open-source projects shipping releases or fixes this week. The competitive landscape is characterized by rapid feature parity chases—when one tool introduces remote sessions or code-review commands, others follow within weeks. Memory management emerges as a **critical cross-cutting crisis**: every major tool reported OOM-related issues, session corruption under pressure, or context transparency regressions. Enterprise adoption pressures are driving demand for OAuth hardening, model provider flexibility, and compliance hooks, while terminal compatibility (Windows, WezTerm, tmux) remains a persistent friction point. The community is maturing, with power users increasingly filing instrumented bug reports with profiling data and competing tools cited as reference implementations.

---

### 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Release Today | Release Velocity |
|------|-------------------|------------------|---------------|------------------|
| **Claude Code** | 10 hot issues | 7 open PRs | v2.1.146–147 (2 releases) | High — rapid-fire, but regression-prone |
| **Codex CLI** | 10 hot issues | 10 open PRs | rust-v0.133.0 | Steady weekly cadence |
| **Gemini CLI** | 7 hot issues | 8 open PRs | v0.44.0-nightly | Daily nightlies; stable releases weekly |
| **Copilot CLI** | 10 hot issues | 0 PRs (24h) | v1.0.52-0 | Moderate; lull in public contributions |
| **Kimi Code CLI** | 9 issues | 0 PRs | None | Low; maintenance mode cadence |
| **OpenCode** | 10 hot issues | 10 open PRs | v1.15.7 | Rapid — multiple releases per week |
| **Pi CLI** | 10 hot issues | 10 open PRs | v0.74.2 | Steady patch/feature mix |
| **Qwen Code** | 9 hot issues | 10 open PRs | v0.16.0 | Moderate; CI flakiness slowing cadence |
| **DeepSeek TUI** | 10 hot issues | 10 open PRs | v0.8.40 | Rapid — multiple weekly releases |

**Key observations:**
- Claude Code and OpenCode lead in **release velocity** but show higher regression risk
- Copilot CLI and Kimi Code show **lowest public contribution velocity** — Copilot CLI had zero PR activity in 24h
- Gemini CLI and Qwen Code are investing in **nightly automation** and infrastructure hardening
- DeepSeek TUI demonstrates strong **maintainer-led momentum** with coordinated architecture issues

---

### 3. Shared Feature Directions

| Theme | Tools Involved | Specific Common Needs |
|-------|---------------|----------------------|
| **Remote Session / Multi-Device** | Claude Code, Codex, Copilot CLI, Kimi Code, OpenCode, DeepSeek TUI | Session persistence across devices, `/remote` commands, handoff between mobile/desktop |
| **Context Transparency & Token Visibility** | Codex, Copilot CLI, OpenCode, Qwen Code | Live token counters, compaction telemetry, context health indicators |
| **Code Review / Simplify Commands** | Claude Code (renamed), OpenCode, Copilot CLI (requested), DeepSeek TUI | Agent-driven `/code-review`, security audits, compliance checks |
| **MCP Authentication & OAuth** | Claude Code, Codex, Copilot CLI, Kimi Code, OpenCode, DeepSeek TUI | OAuth 2.1 support, token refresh, federated auth for enterprise MCP servers |
| **Enterprise Compliance & Safety** | Claude Code, Gemini CLI, OpenCode, Qwen Code, Pi CLI | Custom safety checkers, permission hooks, audit trails, deterministic redaction |
| **Windows Platform Parity** | Claude Code, Codex, Copilot CLI, Gemini CLI, Pi CLI, DeepSeek TUI | PowerShell support, WSL interop, path normalization, terminal rendering |
| **Agent Orchestration Depth** | Claude Code, Copilot CLI, OpenCode, Gemini CLI | Sub-agent delegation, hierarchical workflows, turn-limit management |
| **Daemon / Server Mode** | Qwen Code, DeepSeek TUI, Pi CLI | Long-running background processes, IDE integration, web shells |
| **Cost / Token Optimization** | OpenCode, DeepSeek TUI, Gemini CLI, Qwen Code | Prompt replay caching, AST-aware reads, `/dryrun` preview, token budget enforcement |

---

### 4. Differentiation Analysis

| Dimension | Claude Code | Codex CLI | Gemini CLI | Copilot CLI | OpenCode | Qwen Code | DeepSeek TUI |
|-----------|-------------|-----------|------------|-------------|----------|-----------|--------------|
| **Primary Model** | Anthropic Claude | OpenAI GPT | Google Gemini | Multi-model* | Multi-model | Qwen 3.x | DeepSeek V4 |
| **Core Differentiator** | Agent-heavy / MCP ecosystem maturity | Goals system / remote control | Multi-agent skills / TUI testing | GitHub ecosystem lock-in | Plugin architecture / ACP | Daemon mode / web-shell | Cost transparency / Chinese i18n |
| **Target User** | Power developers / MCP builders | OpenAI ecosystem / enterprise | Google Cloud / enterprise | GitHub Copilot subscribers | Plugin developers / Zed users | Qwen ecosystem / Chinese market | Cost-sensitive / Chinese market |
| **Technical Approach** | Binary distribution / rapid iteration | Rust-based / semantic versioning | TypeScript / nightly CI | OAuth + GitHub identity | TypeScript / plugin framework | Node.js / daemon-first | Rust / minimal dependencies |
| **Key Weakness (Today)** | Bash tool regressions | Windows stability | Agent non-determinism | Closed-source / contribution velocity | OpenAI OAuth broken | Memory exhaustion | macOS file I/O bugs |
| **Unique Strength** | Largest MCP plugin ecosystem | Goals persistence | Multi-model routing | Remote session + `/remote` | Plugin extensibility | Web-shell / daemon | Container support / cost tools |

*\*Copilot CLI supports multiple models via GitHub Copilot platform, but model visibility lags behind VS Code.*

---

### 5. Community Momentum & Maturity

| Tool | Community Size (Activity Signal) | Iteration Velocity | Maturity Indicators | Risk Factors |
|------|----------------------------------|--------------------|---------------------|--------------|
| **Claude Code** | 🔥 Highest — 38+ comments per critical issue | Very high (2 releases/day) | MCP ecosystem largest; rapid patch cycles | Regression-prone; Bash tool critical failure |
| **Codex CLI** | High — 135 comments on auth issue | High (weekly releases) | Goals system live; remote control hardening | Windows crash cluster; token visibility regression |
| **Gemini CLI** | Moderate — 7+ comments per issue | Medium (nightly + weekly) | Public roadmap (#4191); TUI testing skills | Agent behavior unpredictability; feature request backlog |
| **Copilot CLI** | Moderate — 53 upvotes on top request | Low (no PRs in 24h) | GitHub ecosystem leverage; `/remote` differentiator | Closed-source; enterprise model sync lag |
| **Kimi Code CLI** | Low — 0-3 comments per issue | Minimal (no releases this week) | ACP integration in progress | Session corruption critical; low community engagement |
| **OpenCode** | High — 172 upvotes on top feature | Very high (multiple releases/week) | Plugin system mature; ACP/Zed focus | OpenAI OAuth broken for 6+ versions |
| **Pi CLI** | Moderate-High — 28 issues closed in 24h | High (multiple patches/week) | Extension API expansion; Bedrock fixes | Node version migration friction |
| **Qwen Code** | Moderate — 26 comments on roadmap issue | Medium (CI flakiness slowing) | Daemon mode maturing; observability investment | Memory OOM cluster; release automation failures |
| **DeepSeek TUI** | Moderate — 180 comments on docker issue | High (v0.8.40 + 8 architecture issues) | Container support; slash command overhaul | Docker corruption; Windows logging leaks |

**Maturity score (subjective):**
1. Claude Code — Most mature ecosystem, highest risk
2. Pi CLI — Strong foundation, growing extension API
3. OpenCode — Rapid iteration, mature plugin system
4. Codex CLI — Solid semantic versioning, enterprise focus
5. Gemini CLI — Public roadmap, but agent unpredictability
6. Qwen Code — Daemon direction promising, OOM blocking production
7. DeepSeek TUI — High maintainer momentum, platform gaps
8. Copilot CLI — Ecosystem leverage strong, but closed-source limits trust
9. Kimi Code CLI — Early stage, session reliability critical

---

### 6. Trend Signals

#### For Tool Developers

1. **Memory Management is the New Portability** — Every major tool (Claude Code, Qwen Code, Codex CLI, Pi CLI) reported OOM or session corruption under memory pressure. This is the most significant cross-cutting infrastructure debt — tools must invest in memory budgets, cache pressure monitors, and container-aware limits before enterprise adoption scales.

2. **OAuth/Security Hardening is Table Stakes** — MCP OAuth regressions hit Claude Code, Codex, Copilot CLI, and OpenCode simultaneously. The community expects RFC-compliant refresh token rotation, device code flows, and revocation handling. Any tool without robust auth infrastructure will be blocked from security-conscious deployments.

3. **Terminal Compatibility Wars Intensify** — Focus escape sequences, Windows alt-screen corruption, tmux rendering lag, WezTerm input corruption — every tool reported terminal-specific bugs. Cross-platform TUI testing frameworks are an urgent investment area.

4. **Enterprise Compliance Hooks Are Coming** — Custom safety checkers (Gemini CLI), approval flow events (Kimi Code), W3C traceparent propagation (Qwen Code), and permission hook events (Pi CLI) signal that enterprise customers want programmable audit trails and policy enforcement, not just permission dialogs.

5. **Session Durability Becomes a Differentiator** — Multiple tools (Claude Code, Codex, Copilot CLI, Kimi Code) broke session resumption or persistence this week. Reliable session state is emerging as a core competitive dimension.

#### For Developers Choosing a Tool

| Decision Factor | Recommended Tools | Why |
|-----------------|-------------------|-----|
| **Best MCP ecosystem** | Claude Code or OpenCode | Largest plugin libraries, active MCP development |
| **Most stable Windows support** | Pi CLI or Codex CLI (with caveats) | Pi's Windows path normalization PR; Codex CLI's Rust foundation |
| **Best for cost-sensitive workflows** | DeepSeek TUI or OpenCode | Cost preview tools, token budget controls |
| **Best for enterprise compliance** | Gemini CLI or Qwen Code | Custom safety checkers (Gemini); distributed tracing (Qwen) |
| **Best for multi-model flexibility** | OpenCode or Gemini CLI | Model provider plugins (OpenCode); auto-routing (Gemini) |
| **Best for GitHub ecosystem** | Copilot CLI | `/remote` sessions, GitHub identity, but closed-source concerns |
| **Best for rapid prototyping** | Claude Code or Pi CLI | Fastest iteration cycles, largest immediate ecosystem |

#### Industry-Level Signals

- **The "Claude Code Effect"** continues: Remote sessions, code-review commands, and `/compact` features from Claude Code are being replicated across all tools within 2-4 weeks. Claude Code remains the trendsetter.
- **Container-native AI CLI** emerges: DeepSeek TUI's GHCR support and Qwen Code's web-shell point to CI/CD and cloud IDE integration becoming primary use cases, not afterthoughts.
- **Chinese-market tools gain sophistication**: DeepSeek TUI, Kimi Code, and Qwen Code show strong feature velocity targeting cost-sensitive and localization-prioritizing users — a market segment Western tools largely ignore.
- **The "GitHub lock-in" debate intensifies**: Copilot CLI's 53-upvote open-source request (#3241) and model visibility disparity (#1703) suggest developers want both ecosystem integration and freedom from single-vendor dependency.
- **AI-assisted code quality concerns surface**: Qwen Code's #4369 controversy ("Stop using AI to fix AI issues") and OpenCode's thinking-chain leakage (#28659) indicate growing awareness that AI tools require human oversight even (especially) in their own development.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-22 | github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents: prevents orphan words, widow paragraphs, and numbering misalignment | Universal pain point identified—"affects every document Claude generates"; debate on whether this should be core behavior vs. optional skill |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert OpenDocument Format files (.odt, .ods); LibreOffice/ISO standard interoperability | Enterprise demand for open-source document standards; fills gap in Microsoft-centric document skill set |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design tasks | Focus on token efficiency and executability—moving from educational docs to operational instructions |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills: automated quality scoring (5 dimensions) and security review for Claude Skills | Meta-cognitive tooling; community appetite for self-improving skill ecosystem |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, Playwright E2E | Addresses critical gap in Claude's code generation—test generation as first-class citizen |
| 6 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Deploy full-stack web apps directly from Claude to public URLs via [appdeploy.ai](https://appdeploy.ai/) | "Vibe coding" to production; concerns about vendor lock-in vs. portability |
| 7 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via AppleScript/`osascript` as alternative to screenshot-based computer use | Privacy/permission architecture (two-tier system); performance vs. accessibility tradeoffs |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Comprehensive enterprise ServiceNow coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub | Breadth vs. depth tension; enterprise IT workflow integration |

---

## 2. Community Demand Trends

Derived from top Issues by engagement:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Org-wide Skill Distribution** | 13 comments, 7 👍 | [#228](https://github.com/anthropics/skills/issues/228) — Shared skill libraries, direct links replacing Slack/Teams file passing |
| **Skill Trigger Reliability** | 8 comments, 6 👍 | [#556](https://github.com/anthropics/skills/issues/556) — `claude -p` 0% trigger rate; evaluation infrastructure broken |
| **Trust & Security Boundaries** | 6 comments, 2 👍 | [#492](https://github.com/anthropics/skills/issues/492) — `anthropic/` namespace impersonation risk for community skills |
| **Plugin Architecture Cleanup** | 6 comments, 8 👍 | [#189](https://github.com/anthropics/skills/issues/189), [#1087](https://github.com/anthropics/skills/issues/1087) — Duplicate skills, marketplace.json enforcement |
| **MCP Interoperability** | 4 comments | [#16](https://github.com/anthropics/skills/issues/16) — Skills-as-MCPs for standardized API signaling |
| **Enterprise Auth/SSO Compatibility** | 2 comments, 1 👍 | [#532](https://github.com/anthropics/skills/issues/532) — `ANTHROPIC_API_KEY` requirement blocks enterprise users |

**Emerging themes:** Workflow automation (n8n: [#190](https://github.com/anthropics/skills/pull/190)), AI memory/persistence ([shodh-memory #154](https://github.com/anthropics/skills/pull/154), [AURELION #444](https://github.com/anthropics/skills/pull/444)), and enterprise platform integration (SAP [#181](https://github.com/anthropics/skills/pull/181), ServiceNow).

---

## 3. High-Potential Pending Skills

Active PRs with strong engagement signals, likely to merge with revision:

| Skill | PR | Key Strength | Blocker/Next Step |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal applicability; zero-config improvement for all document output | Awaiting core team decision: built-in vs. opt-in skill |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | Fills open-standard gap; enterprise procurement compliance | Template library expansion; LibreOffice version testing |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Critical developer workflow; aligns with "testing trophy" best practices | Framework version pinning; CI/CD integration examples |
| **Sensory** | [#806](https://github.com/anthropics/skills/pull/806) | Performance breakthrough over screenshot-based automation | Accessibility permission UX; security review of System Events access |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Most ambitious cognitive architecture: 4-skill memory + reasoning framework | Complexity vs. adoption barrier; cognitive overhead validation |

**Bugfix cluster:** Three precision PRs from `Lubrsy706` ([#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)) addressing case-sensitivity, YAML parsing, and OOXML ID collision—indicate maturing codebase with enterprise-grade edge case handling.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for Claude Skills to function as reliable, distributable infrastructure—moving from individual "prompt packs" to organization-governed, version-controlled, trigger-guaranteed capabilities that interoperate with enterprise auth, open standards, and existing automation ecosystems (MCP, n8n, ServiceNow, SAP).**

---

*Report methodology: PRs ranked by comment volume and qualitative engagement; Issues analyzed for demand clustering. All data sourced from github.com/anthropics/skills as of 2026-05-22.*

---

# Claude Code Community Digest — 2026-05-22

## Today's Highlights

Anthropic shipped two rapid-fire releases (v2.1.146–147) that renamed `/simplify` to `/code-review` and hardened background agent sessions against memory pressure, but a critical regression in v2.1.147 broke the Bash tool entirely on Linux (exit code 127). Meanwhile, a high-severity MCP permissions bug affecting scheduled routines was patched after 38 comments of community triage, and longstanding TUI corruption and OAuth token revocation issues received closure.

---

## Releases

| Version | Key Changes |
|--------|-------------|
| **v2.1.147** | Pinned background sessions (`Ctrl+T` in `claude agents`) now persist through idle periods, restart in-place for updates, and are shed last under memory pressure. `/simplify` renamed to `/code-review`; now reports correctness bugs. |
| **v2.1.146** | `/simplify` → `/code-review` with optional effort levels (e.g., `/code-review high`). Auto mode no longer suppresses `AskUserQuestion` when explicitly relied upon. Fixed Windows PowerShell "command line is invalid" error when `pwsh` is invoked. |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#61015](https://github.com/anthropics/claude-code/issues/61015) | **CLOSED** MCP tool calls in scheduled routines fail with "requires approval" on custom connectors | Regression ~2026-05-20 broke automated workflows; affected users with custom MCP connectors in unattended scenarios. Root cause was permission gate misfiring in routine context. | 38 comments, 52 👍 — intense triage, rapid fix appreciated |
| [#10375](https://github.com/anthropics/claude-code/issues/10375) | Focus escape sequences `[I`/`[O` leak into input on mouse/modifier use in WezTerm | Terminal compatibility bug corrupting user input; affects any focus-reporting terminal beyond WezTerm. Reproducible, long-standing. | 26 comments, 28 👍 — persistent user pain, awaiting prioritization |
| [#60366](https://github.com/anthropics/claude-code/issues/60366) | "hi" triggers Usage Policy API error | Overly broad safety filter blocking benign greetings; signals potential model-level false positive regression. | 21 comments, 10 👍 — confusion and frustration at filter sensitivity |
| [#59539](https://github.com/anthropics/claude-code/issues/59539) | **CLOSED** TUI display corruption with garbled characters | Severe rendering regression on macOS making tool unusable; fix validates terminal state handling. | 19 comments, 8 👍 — relief at closure |
| [#43801](https://github.com/anthropics/claude-code/issues/43801) | **CLOSED** OAuth tokens survive session revocation + VM cold boot | Security-critical: revocation UI was non-functional for VSCode/VSCodium extension tokens. Confirmed 3–4 day persistence. | 18 comments, 5 👍 — security concern resolved |
| [#49282](https://github.com/anthropics/claude-code/issues/49282) | macOS Privacy & Security re-registration on every update | Versioned install path breaks code-signing continuity; users must re-approve permissions per release. | 11 comments, 5 👍 — macOS UX friction |
| [#41722](https://github.com/anthropics/claude-code/issues/41722) | Bash commands return no output on Bedrock | Silent failure mode breaks core workflow for Bedrock API users; has repro but unresolved. | 11 comments, 2 👍 — enterprise blocker |
| [#61293](https://github.com/anthropics/claude-code/issues/61293) | **NEW** Bash tool exit code 127 on every command in v2.1.147 | **Critical regression** — renders Bash tool completely unusable on Linux, including builtins. | 8 comments, 6 👍 — urgent, fresh reports |
| [#46424](https://github.com/anthropics/claude-code/issues/46424) | Agent tool unavailable to sub-agents (orchestrator pattern blocked) | Architectural limitation preventing hierarchical agent delegation; affects advanced automation design. | 7 comments, 1 👍 — power-user feature gap |
| [#50331](https://github.com/anthropics/claude-code/issues/50331) | Auto mode injects undocumented behavioral system-reminder | Transparency concern: documented permission-gate contract violated by hidden steering prompts. | 7 comments, 10 👍 — trust and predictability issue |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#61319](https://github.com/anthropics/claude-code/pull/61319) | Fix changelog | Corrects release notes accuracy | **Closed** |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | Add web4-governance plugin (R6 workflow, T3 trust tensors) | Third-party plugin for AI governance with cryptographic provenance and audit trails | Open |
| [#31974](https://github.com/anthropics/claude-code/pull/31974) | Pattern learning for CLAUDE.md auto-suggestions in `/code-review` | Mines validated review issues to propose repo-specific rules; closes feedback loop | **Closed** |
| [#31698](https://github.com/anthropics/claude-code/pull/31698) | Strengthen step 1 gating agent reliability in `/code-review` | Upgrades Haiku→Sonnet for binary skip decisions; adds explicit criteria to prevent silent drops | **Closed** |
| [#31699](https://github.com/anthropics/claude-code/pull/31699) | Add `--model` flag to `/code-review` plugin | User override for agent model selection across all review steps | **Closed** |
| [#31690](https://github.com/anthropics/claude-code/pull/31690) | Correct README algorithm docs, add tests/lint.sh | Fixes stale documentation (confidence scoring replaced by subagent validation) | **Closed** |
| [#31697](https://github.com/anthropics/claude-code/pull/31697) | Include CLAUDE.md agents in step 5 validation | Fixes silent dropping of compliance violations; restores CLAUDE.md review effectiveness | **Closed** |
| [#60813](https://github.com/anthropics/claude-code/pull/60813) | Fix excessive token consumption on initial prompt | Claims fix for high token burn on simple continuations; premium solution presentation | Open |
| [#47061](https://github.com/anthropics/claude-code/pull/47061) | Notification-sound plugin for completion alerts | Audible cues on `Notification`/`Stop` hooks; addresses missed-completion UX gap | Open |

---

## Feature Request Trends

1. **TUI/output configurability** — Multiple requests for configurable tool-output fold thresholds (#61330), scroll buffer limits (#59093), and spinner customization (#60814). Users want control over information density.

2. **Windows parity** — Persistent gaps in MCP server spawning (#58510), PowerShell pre-approval rules (#60289), and plugin distribution. LSP fixes not propagating to MCP paths.

3. **Agent orchestration depth** — Sub-agent tool access (#46424), turn-limit increases for long-running browser automation (#61028), and managed agent Git workflows (#61307) show demand for more complex multi-agent topologies.

4. **Enterprise/org plugin management** — Auto-install from managed settings (#45323) and marketplace configuration gaps between CLI and desktop/web.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **macOS permission churn** | #49282 (re-registration), #61314 (missing bundle ID on background agent binary) | High — per-update TCC disruption |
| **MCP/Windows spawn failures** | #58510 (`npx ENOENT`), #61015/#61200 (routine permissions regression) | High — breaks integrations |
| **Bash tool reliability** | #61293 (v2.1.147 regression), #41722 (Bedrock silent failures), #61122 (raw XML rendering) | **Critical** — core functionality |
| **Safety filter false positives** | #60366 ("hi" blocked) | Medium — erodes trust |
| **Documentation drift** | #61322 (`/simplify` docs stale post-rename) | Low but recurring |
| **Transparency in auto mode** | #50331 (undocumented system-reminders) | Medium — consent model concern |

---

*Digest compiled from github.com/anthropics/claude-code activity 2026-05-21/22.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-22

## Today's Highlights

The **rust-v0.133.0** release ships with **Goals enabled by default** across active turns, marking a significant UX shift toward persistent task tracking. Meanwhile, **remote control infrastructure** is being hardened with foreground-style execution and readiness reporting. On the issue front, **Windows Desktop stability** is under acute pressure with multiple SQLite migration crashes and WSL integration failures surfacing simultaneously.

---

## Releases

| Version | Highlights |
|---------|-----------|
| **[rust-v0.133.0](https://github.com/openai/codex/releases/tag/rust-v0.133.0)** | **Goals system goes live**: persistent storage, progress tracking across active turns, and default-on behavior. `codex remote-control` reworked as foreground command with readiness waits and explicit daemon-style `start`/`stop` subcommands. |
| **[rust-v0.133.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.133.0-alpha.4)** | Pre-release build; no additional notes. |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#20161](https://github.com/openai/codex/issues/20161)** | Phone verification broken after SSO login on new device | **Closed** — Critical auth regression affecting account portability; 135 comments show widespread impact across SSO users | 🔥 95 👍, 135 comments |
| **[#18341](https://github.com/openai/codex/issues/18341)** | Mac app persistent blurred overlay below composer | Visual corruption breaking core composer UX on macOS; unresolved since April | 32 comments, 15 👍 |
| **[#23794](https://github.com/openai/codex/issues/23794)** | Desktop context/token usage indicator disappeared | **User-facing transparency regression** — users flying blind on context limits; duplicate of #23591 | 15 comments, 22 👍 |
| **[#13937](https://github.com/openai/codex/issues/13937)** | Windows app cannot open JetBrains IDEA | IDE integration broken for major Windows developer cohort; stagnant since March | 16 comments, 9 👍 |
| **[#17540](https://github.com/openai/codex/issues/17540)** | Windows: older local threads vanish from sidebar after restart | **Data loss UX** — threads persist on disk but become unfindable; erodes trust in session management | 14 comments, 4 👍 |
| **[#23863](https://github.com/openai/codex/issues/23863)** | Windows startup crash: sqlx migration checksum mismatch | **Launch-blocking** — `logs_2.sqlite` migration failure; pattern matches #23893, #23848 | 11 comments, 1 👍 |
| **[#14630](https://github.com/openai/codex/issues/14630)** | Voice transcription for TUI | **Top-voted enhancement** (40 👍) — CLI users want parity with app's superior voice models | 11 comments, 40 👍 |
| **[#17265](https://github.com/openai/codex/issues/17265)** | MCP OAuth tokens not auto-refreshed | Auth infrastructure gap breaking routed MCP servers after token expiry | 9 comments, 13 👍 |
| **[#22220](https://github.com/openai/codex/issues/22220)** | Conversation compaction telemetry / context health | Observability gap in long sessions — users cannot diagnose context truncation | 10 comments, 2 👍 |
| **[#23915](https://github.com/openai/codex/issues/23915)** | Remote Control: auth succeeds but no devices shown | **Regression in v26.519.22136** — remote workflow broken post-update | 7 comments |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **[#23951](https://github.com/openai/codex/pull/23951)** | Retry remote compaction v2 requests | Adds resilient retry semantics (WebSocket→HTTPS fallback) for compaction-triggered `/responses` calls; v2 of earlier #23945 | 🟢 Open |
| **[#23904](https://github.com/openai/codex/pull/23904)** | Best-effort compact large tool schemas | Shrinks oversized connector schemas that exceed tool budget after `$defs`/`$ref` fidelity improvements in `dev/cc/ref-def` | 🟢 Open |
| **[#23357](https://github.com/openai/codex/pull/23357)** | Support local refs and defs in tool input schemas | **Foundational** — preserves JSON Schema `$ref`/`$defs` structures instead of flattening; enables richer connector tools | 🟢 Open |
| **[#23757](https://github.com/openai/codex/pull/23757)** | Default function tools into tool hooks | Eliminates manual hook wiring for `PreToolUse`/`PostToolUse` coverage; prevents coverage gaps as new tools added | 🟢 Open |
| **[#23501](https://github.com/openai/codex/pull/23501)** | Merge pending turn input queues | **Architecture refactor** — consolidates fragmented input state (turn-local, `InputQueue`, mailbox) for cleaner abort/empty-turn logic | 🟢 Open |
| **[#23823](https://github.com/openai/codex/pull/23823)** | Standalone websearch extension | Adds `web.run` tool via `codex-api` search client; gated behind `standalone_web_search` feature flag | 🟢 Open |
| **[#23766](https://github.com/openai/codex/pull/23766)** | Constrain Windows sandbox requirements | Enforces organizational sandbox policy on Windows (blocks unelevated fallback when elevation required) | 🟢 Open |
| **[#23563](https://github.com/openai/codex/pull/23563)** | Expire revoked ChatGPT auth in Codex | Treats `token_invalidated`/`token_revoked` as terminal; prevents refresh loops on permanently invalid sessions | 🟢 Open |
| **[#23763](https://github.com/openai/codex/pull/23763)** | Preserve auto-review approval policy in `codex exec` | Fixes headless exec forcing `approval_policy = "never"` — enables unattended `auto_review` workflows | 🟢 Open |
| **[#23950](https://github.com/openai/codex/pull/23950)** | Preserve draft text when completing argument-taking slash commands | UX polish: `/goal`, `/review` etc. capture trailing text as inline args instead of discarding | 🟢 Open |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Context/Token Visibility** | #23794, #23591, #22220 | 🔥 High — users demand transparency into compaction and usage; regression + enhancement converging |
| **Voice Input Parity (CLI ↔ App)** | #14630 | 🔥 High — 40 👍; CLI users explicitly want app's Whisper-quality transcription |
| **Remote/Multi-Device Workflows** | #23915, #23922, #23953, #23927, #23385 | 🔥 High — remote control auth, device discovery, WSL integration all active pain points |
| **IDE Integration Depth** | #13937, #23314 (multi-tab browser) | Medium — JetBrains broken on Windows; browser tabs for web workflows |
| **TUI/CLI Polish** | #23079 (vim `ciw`), #23711 (ctrl-c in tmux), #21567 (noninteractive install) | Medium — power-user terminal ergonomics |
| **Windows Package Management** | #20597 (winget) | Low but steady — ecosystem discoverability |

---

## Developer Pain Points

| Theme | Severity | Details |
|-------|----------|---------|
| **Windows Desktop Stability** | 🔴 Critical | **SQLite migration crashes** (#23863, #23893, #23848) forming cluster; WSL mode breaks launch (#23927); session loss (#17540). Pattern suggests database schema management fragility in Windows builds. |
| **Auth Token Lifecycle** | 🟡 High | OAuth refresh failures (#17265), revoked token handling (#23563), ChatGPT login blank screens (#23795), and remote auth device visibility (#23915, #23953) indicate systemic auth state management issues across platforms. |
| **Context Transparency Erosion** | 🟡 High | Removal of visible token indicator (#23794) plus lack of compaction telemetry (#22220) leaves users unable to reason about long-session behavior. Community actively requesting restoration + enhancement. |
| **Remote Control Reliability** | 🟡 High | New foreground remote-control model (#23300) shipping alongside device discovery regressions (#23915, #23922); SSH proxy idempotency fixes (#23385) suggest prior race conditions. |
| **macOS Visual/Compositor Bugs** | 🟡 Medium | Persistent blurred overlay (#18341), subagent UI staleness (#23930, #23931) indicate rendering/state sync issues in Desktop app. |
| **Rate Limiting Clarity** | 🟡 Medium | Purchased credits not applying (#19830), business quota messaging confusion (#22450), remote vs. CLI quota inconsistency (#23953) — billing/limit communication gaps. |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-22

## Today's Highlights

The v0.44.0 nightly landed with new TUI testing capabilities and compile-time safety improvements. The community is actively pushing fixes for core reliability—PTY memory leaks, WSL compatibility, and parallel tool execution conflicts—while the maintainers are tracking a growing backlog of agent behavior and memory system issues. Several long-standing feature requests around routing configurability and skill activation remain top of mind for power users.

---

## Releases

**[v0.44.0-nightly.20260521.g57c42a5c4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260521.g57c42a5c4)** — Latest nightly with three changes:
- **feat(skills)**: New `agent-tui` and `tui-tester` skills for terminal UI automation and testing ([#27121](https://github.com/google-gemini/gemini-cli/pull/27121))
- **fix(core)**: Compile-time exhaustiveness enforcement in `content-utils` ([#27207](https://github.com/google-gemini/gemini-cli/pull/27207))
- **fix(context)**: Context-related fix (details truncated in release notes)

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#4191 Public Roadmap](https://github.com/google-gemini/gemini-cli/issues/4191)** | The central coordination point for external contributors; signals Google's commitment to open development | 96 👍, 15 comments; actively referenced for contribution guidance |
| **[#21165 Manual skill activation like /commands](https://github.com/google-gemini/gemini-cli/issues/21165)** | Power users know which skill fits their task but can't force it; agent routing fails them | 8 comments, 2 👍; recurring theme of "agent won't do what I want" |
| **[#24353 Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** | Critical for regression prevention as behavioral eval suite scales to 76+ tests across 6 models | 7 comments; infrastructure-heavy, maintainer-priority |
| **[#22745 AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** | Could dramatically reduce token waste and turn count from misaligned file reads | 7 comments, 1 👍; linked to [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) for tooling investigation |
| **[#22323 Subagent recovery hides MAX_TURNS failure](https://github.com/google-gemini/gemini-cli/issues/22323)** | Silent failures corrupt trust—`codebase_investigator` claims success when it gave up | 6 comments, 2 👍; reliability concern for autonomous workflows |
| **[#21968 Gemini doesn't use skills/sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** | Core UX gap: users install skills but model ignores them without explicit prompting | 6 comments; anecdotal but widely echoed frustration |
| **[#25166 Shell execution hangs with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** | Breaks basic workflow—simple commands falsely appear to await user interaction | 4 comments, 3 👍; high-impact daily friction |
| **[#21805 More configurable numeric routing](https://github.com/google-gemini/gemini-cli/issues/21805)** | Power users want fine-grained model selection by complexity tiers, not opaque defaults | 4 comments; exemplifies "give me control" theme |
| **[#21570 Prompt Replay Cache](https://github.com/google-gemini/gemini-cli/issues/21570)** | Cost/performance optimization—redundant identical prompts waste API calls | 4 comments; efficiency-focused enterprise need |
| **[#26525 Deterministic redaction + Auto Memory logging reduction](https://github.com/google-gemini/gemini-cli/issues/26525)** | Security: secrets hit model context before redaction; excessive logging expands blast radius | 3 comments; security-critical for enterprise adoption |

---

## Key PR Progress

| PR | Status | What It Does |
|----|--------|--------------|
| **[#27357](https://github.com/google-gemini/gemini-cli/pull/27357)** fix(core): force `update_topic` sequential | **OPEN** | Prevents topic updates from racing parallel tool execution; fixes display ordering |
| **[#27354](https://github.com/google-gemini/gemini-cli/pull/27354)** fix(core): bypass node-pty on WSL for Windows executables | **OPEN** | Solves longstanding WSL interop pain by falling back to `child_process` for `.exe` files |
| **[#27154](https://github.com/google-gemini/gemini-cli/pull/27154)** fix(core): prevent PTY memory leak | **OPEN** | Critical fix: synchronous cleanup prevents file descriptor exhaustion from orphaned PTYs |
| **[#27351](https://github.com/google-gemini/gemini-cli/pull/27351)** fix(core): serialize conflicting parallel mutator tools | **OPEN** | Resolves [#27285](https://github.com/google-gemini/gemini-cli/issues/27285): multiple edits to same file now execute sequentially, not via `Promise.all` |
| **[#27350](https://github.com/google-gemini/gemini-cli/pull/27350)** fix(core): resolve symlinks when normalizing project paths | **OPEN** | Eliminates duplicate session stores from symlinked project directories |
| **[#27345](https://github.com/google-gemini/gemini-cli/pull/27345)** feat(context): complete simplification work | **OPEN** | Closes [#27344](https://github.com/google-gemini/gemini-cli/issues/27344); includes experimental history archiving profile |
| **[#27317](https://github.com/google-gemini/gemini-cli/pull/27317)** fix(core,cli): defensive directory checks in session scans | **OPEN** | Prevents `EISDIR` crashes when session/checkpoint patterns match directories |
| **[#27186](https://github.com/google-gemini/gemini-cli/pull/27186)** Add custom external safety checkers | **OPEN** | Phase 5 enterprise feature: plug in organization-specific security/compliance validators |
| **[#27054](https://github.com/google-gemini/gemini-cli/pull/27054)** feat(cli): Windows image pasting + clipboard styling | **OPEN** | Enables `bracketed-paste` image input in Windows Terminal with clean UI |
| **[#27071](https://github.com/google-gemini/gemini-cli/pull/27071)** Update default auto routing | **OPEN** | Bumps `flash-lite` alias to `gemini-3.1-flash-lite` for internal tools |

---

## Feature Request Trends

1. **Agent Routing & Control**: Manual skill activation ([#21165](https://github.com/google-gemini/gemini-cli/issues/21165)), configurable numeric routing ([#21805](https://github.com/google-gemini/gemini-cli/issues/21805)), and agent-to-agent calling ([#22092](https://github.com/google-gemini/gemini-cli/issues/22092)) all point to users wanting override capabilities beyond opaque automation.

2. **Cost & Performance Optimization**: Prompt replay caching ([#21570](https://github.com/google-gemini/gemini-cli/issues/21570)), AST-aware tooling to reduce tokens/turns ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)), and smarter file search limits ([#20738](https://github.com/google-gemini/gemini-cli/pull/20738)) reflect scaling friction.

3. **Enterprise Safety & Compliance**: Custom safety checkers ([#27186](https://github.com/google-gemini/gemini-cli/pull/27186)), deterministic secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and destructive operation guards ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) show organizational deployment needs.

4. **TUI/Terminal Experience**: Image paste support ([#27054](https://github.com/google-gemini/gemini-cli/pull/27054)), resize performance ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), and external editor integration fixes ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)) indicate CLI UX maturation demands.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Agent opacity & non-determinism** | Skills ignored ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), subagents run without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), MAX_TURNS hidden as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) | **High** — erodes trust in autonomous operation |
| **Shell/PTY reliability** | Hangs on simple commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), memory leaks ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154)), WSL interop failures ([#27354](https://github.com/google-gemini/gemini-cli/pull/27354)) | **High** — breaks core workflow |
| **Parallel execution conflicts** | Race conditions in file mutators ([#27351](https://github.com/google-gemini/gemini-cli/pull/27351)), topic updates ([#27357](https://github.com/google-gemini/gemini-cli/pull/27357)) | **Medium-High** — correctness issues in multi-tool turns |
| **Memory system quality** | Invalid patches silently skipped ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), infinite retry on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), security model concerns ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) | **Medium** — Auto Memory feature at risk |
| **Browser agent fragility** | Wayland failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), profile lock crashes ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) | **Medium** — limits web automation use cases |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-22

## Today's Highlights

Copilot CLI v1.0.52-0 shipped with deferred tool loading for custom agents and improved `/compact` focus instructions, while the community grapples with a wave of v1.0.51 regressions affecting session resumption, remote control, and Windows stability. Enterprise users are particularly vocal about model visibility gaps and remote session enablement failures. No open PRs were active in the last 24h, signaling a release-cycle lull in public contributions.

---

## Releases

**[v1.0.52-0](https://github.com/github/copilot-cli/releases/tag/v1.0.52-0)** — *2026-05-21*

| Category | Change |
|----------|--------|
| **Added** | Custom agents support opt-in deferred tool loading via `deferred-tool-loading` in agent frontmatter, enabling tool-search discovery for agents with large tool lists |
| **Improved** | `/compact` accepts optional focus instructions to shape the compaction summary; general-purpose subagents usability enhanced |

The deferred tool loading addresses a scalability bottleneck for enterprise agents with extensive tool catalogs, while the `/compact` refinement gives users finer control over context summarization.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#1703](https://github.com/github/copilot-cli/issues/1703)** | Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) while VS Code Copilot does | **Critical parity gap**: Same account, same org, different model availability between CLI and IDE undermines CLI's viability for teams paying for multi-model access. Suggests stale model entitlement sync or separate capability gates. | 🔥 49 👍, 26 comments; users frustrated by inconsistent enterprise feature rollout |
| **[#2751](https://github.com/github/copilot-cli/issues/2751)** | `Remote session disabled: could not resolve repository` on `/remote` for org repos | **Enterprise blocker**: `/remote` is a key differentiator for headless/CI workflows; failing on org repos—where most professional code lives—severely limits adoption. | 11 👍, 7 comments; org admins seeking workarounds |
| **[#1979](https://github.com/github/copilot-cli/issues/1979)** | Remote session support — attach from mobile / browser | **Strategic feature gap**: Claude Code's remote sessions are becoming table stakes for agentic workflows; 53 👍 signals strong demand for CLI session mobility. | 53 👍, 3 comments; enthusiastic but patient community |
| **[#2355](https://github.com/github/copilot-cli/issues/2355)** | Internal PowerShell tool fails to spawn `pwsh.exe` on Windows (ENOENT) | **Windows reliability**: PowerShell integration is foundational for Windows dev workflows; PATH resolution failure suggests environment isolation bug in tool runtime. | 5 👍, 5 comments; blocking Windows automation use cases |
| **[#3377](https://github.com/github/copilot-cli/issues/3377)** | `--resume` no longer allows new session with deterministic ID *(CLOSED)* | **Breaking change in session API**: External orchestrators relied on deterministic UUID creation; regression broke tooling integrations. | 3 👍, 4 comments; rapid closure suggests hotfix path |
| **[#3439](https://github.com/github/copilot-cli/issues/3439)** | v1.0.49 regression: TUI rendering lag inside tmux on mintty/Cygwin | **Terminal compatibility**: Cygwin/mintty remains common in locked-down Windows environments; rendering regressions push users to competing tools. | 0 👍, 3 comments; detailed bisecting by reporter |
| **[#3048](https://github.com/github/copilot-cli/issues/3048)** | Support custom providers via ACP | **Extensibility**: ACP (Agent Communication Protocol) is GitHub's interoperability bet; ignoring `COPILOT_PROVIDER_*` vars limits BYOK and OpenRouter scenarios. | 3 👍, 3 comments; power users want escape hatch from GitHub model hosting |
| **[#3458](https://github.com/github/copilot-cli/issues/3458)** | `--resume` silently exits with 'no supported shell detected' on Windows | **Silent failure anti-pattern**: No terminal output, only log file evidence—worst UX for debugging. Joins #3377/#3406 in a cluster of session-resumption regressions. | Fresh (1 comment); likely under-reported due to silent nature |
| **[#3457](https://github.com/github/copilot-cli/issues/3457)** | v1.0.51 remote control regressed for meta-repo workspace with personal Copilot seat | **Workspace shape intolerance**: Meta-repo / monorepo layouts are standard; hardcoding clean 1:1 repo assumptions breaks real-world usage. | Fresh (1 comment); enterprise developer workflow hit |
| **[#3456](https://github.com/github/copilot-cli/issues/3456)** | Concurrent refresh-token requests kill OAuth chain on MCP servers with strict reuse detection | **Spec compliance**: OAuth 2.0 refresh token rotation requires single-use semantics; parallel fan-out is a protocol violation that breaks security-hardened MCP servers. | Fresh (1 comment); security-conscious MCP operators affected |

---

## Key PR Progress

**No pull requests updated in the last 24 hours.**

The absence of PR activity suggests:
- v1.0.52-0 may have been cut from an internal branch with changes not yet reflected in public PRs
- Contribution velocity remains low for a Microsoft/GitHub-maintained project, reinforcing community calls for open-sourcing (#3241)

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Open-source the CLI** | [#3241](https://github.com/github/copilot-cli/issues/3241) | 7 👍; enterprise developers need auditability and custom forks for internal tooling |
| **Remote session mobility** | [#1979](https://github.com/github/copilot-cli/issues/1979) | 53 👍; highest-voted open feature request—"Claude Code did it" cited repeatedly |
| **Custom model provider flexibility** | [#3048](https://github.com/github/copilot-cli/issues/3048), [#3448](https://github.com/github/copilot-cli/issues/3448) | BYOK and non-GitHub endpoints (OpenRouter, self-hosted) increasingly demanded |
| **Security/automation commands** | [#1133](https://github.com/github/copilot-cli/issues/1133) | `/security-review` to match Claude Code; Microsoft's security brand makes this omission notable |
| **Session observability** | [#1784](https://github.com/github/copilot-cli/issues/1784) | Token counting, context usage, premium request burn—cost transparency for enterprise billing |

---

## Developer Pain Points

### 1. **Session Resumption Fragility (Cluster)**
Issues [#3377](https://github.com/github/copilot-cli/issues/3377), [#3406](https://github.com/github/copilot-cli/issues/3406), [#3458](https://github.com/github/copilot-cli/issues/3458), [#3457](https://github.com/github/copilot-cli/issues/3457) reveal v1.0.51 broke multiple `--resume` and remote-control paths. The deterministic-UUID creation behavior was removed without deprecation notice, breaking external orchestrators. **Impact**: CI integrations, team session sharing, and automated workflows all disrupted.

### 2. **Windows as Second-Class Citizen**
Persistent platform-specific failures: PowerShell spawning ([#2355](https://github.com/github/copilot-cli/issues/2355)), negative exit code handling ([#3454](https://github.com/github/copilot-cli/issues/3454)), shell detection ([#3458](https://github.com/github/copilot-cli/issues/3458)), and tmux/Cygwin rendering ([#3439](https://github.com/github/copilot-cli/issues/3439)). The Windows user base is large but appears under-tested in release validation.

### 3. **Enterprise Feature Gaps**
- Model entitlement sync lag between VS Code and CLI ([#1703](https://github.com/github/copilot-cli/issues/1703))
- Org-level remote session enablement unclear or broken ([#2751](https://github.com/github/copilot-cli/issues/2751), [#3442](https://github.com/github/copilot-cli/issues/3442))
- MCP registry URL construction bugs ([#3436](https://github.com/github/copilot-cli/issues/3436))

These suggest CLI release cadence may lag behind Copilot platform policy changes.

### 4. **Keyboard/Accessibility Internationalization**
German keyboard `@` input broken ([#1999](https://github.com/github/copilot-cli/issues/1999)), slash-command highlighting contrast failures ([#3426](https://github.com/github/copilot-cli/issues/3426)). Terminal input handling appears optimized for US-QWERTY and high-contrast terminals.

### 5. **MCP OAuth Implementation Rough Edges**
Dynamic Client Registration forced over static `clientId` ([#2717](https://github.com/github/copilot-cli/issues/2717)), concurrent refresh token rotation violating RFC 6749 ([#3456](https://github.com/github/copilot-cli/issues/3456)), and redirect port configuration ignored ([#3418](https://github.com/github/copilot-cli/issues/3418)). MCP is a strategic priority but the OAuth client implementation needs hardening for production MCP servers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-22

## 1. Today's Highlights

Nine issues saw activity in the last 24 hours, with no new releases or merged PRs. The community is actively pushing for **ACP protocol robustness** and **debugging transparency**, highlighted by a critical session corruption bug under memory pressure and a pair of feature requests for raw API request/response visualization in the `vis` module.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2336](https://github.com/MoonshotAI/kimi-cli/issues/2336) | **Session corruption under memory pressure: lost conversation + 400 tool_call error on resume** | Data-loss-class bug affecting Linux production workflows; 400 errors on resume break trust in session persistence | 1 comment, fresh report — likely to escalate if reproducible |
| [#1956](https://github.com/MoonshotAI/kimi-cli/issues/1956) | **ACP integration: Session history not replayed to clients (Zed, JetBrains)** | Core protocol gap — ACP agents start blank despite existing history, crippling IDE integrations | 2 comments, cross-referenced; blocks enterprise adoption |
| [#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269) | **Feature Request: Remote Control / Multi-Device Session Handoff** | Strategic differentiator vs. Cursor/Windsurf; addresses modern multi-device developer workflows | 3 comments, organic interest despite 0 upvotes |
| [#2339](https://github.com/MoonshotAI/kimi-cli/issues/2339) | **feat(vis): Add raw API request/response viewer** | Debugging blind spot — developers cannot inspect what the LLM actually receives; critical for prompt engineering | Fresh, 0 comments; paired with reference implementation |
| [#2340](https://github.com/MoonshotAI/kimi-cli/issues/2340) | **feat(vis): Reference implementation — Claude API capture/visualization** | Community-contributed solution (`claude-tap-plus`) demonstrating feasibility; rare external tool integration | 0 comments; signals ecosystem maturity |
| [#2337](https://github.com/MoonshotAI/kimi-cli/issues/2337) | **Approval prompts should trigger a hook event** | Automation/CI blocker — headless workflows need programmatic interception of approval gates | Fresh, no traction yet; infrastructure request |
| [#2338](https://github.com/MoonshotAI/kimi-cli/issues/2338) | **Android Termux scroll broken** | Mobile/edge-device accessibility; Termux is a significant non-desktop user segment | Fresh, 0 comments; platform-specific UX debt |
| [#2341](https://github.com/MoonshotAI/kimi-cli/issues/2341) | **Error Code 400 issue?** | Rapidly closed — likely user error or duplicate of #2336 pattern; indicates noise in error handling UX | Closed same day, 0 comments, no resolution detail |
| [#1363](https://github.com/MoonshotAI/kimi-cli/issues/1363) | **Custom agent file mounting broken in Kimi web** | Agent ecosystem enablement; closed without visible fix commit — possible stale cleanup | Closed with 1 upvote; unclear if actually resolved |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Observability & Debugging** | #2339, #2340, #2336 (root-cause needs) | Developers demand transparency into LLM boundary; `vis` module becoming critical path |
| **Session Portability** | #2269 (multi-device), #1956 (ACP history replay), #2336 (corruption) | Session as durable, transferable object — not ephemeral shell state |
| **Programmatic Hooks / Automation** | #2337 (approval hooks) | CLI used in pipelines and wrappers; needs machine-readable events |
| **Cross-Platform Robustness** | #2338 (Android), #2336 (Linux memory pressure) | Edge cases in resource-constrained or non-standard environments |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Notes |
|------------|-----------|----------|-------|
| **Session reliability** | High (#2336, #1956, #2269) | Critical | Corruption + history loss = data destruction; ACP blank starts = broken IDE contracts |
| **Opaque LLM interactions** | Emerging (#2339, #2340) | High | Cannot debug what you cannot see; community building external tools to compensate |
| **Approval flow automation** | Low but sharp (#2337) | Medium | Blocks CI/CD and wrapper tool ecosystems |
| **Mobile/embedded parity** | Sporadic (#2338) | Low-Medium | Termux scroll is papercut; signals untapped platform expansion |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-05-21 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-22

---

## 1. Today's Highlights

OpenCode shipped **v1.15.7** with Grok OAuth support and hardened error handling, but a **persistent OpenAI OAuth regression** spanning 1.14.49→1.15.6 remains unresolved despite multiple duplicate reports. Meanwhile, contributor **kitlangton** landed a cluster of cleanup PRs addressing Zod schema compatibility and dead code removal, while the community continues pushing for model parity (Gemini 3.5 Flash) and token efficiency improvements.

---

## 2. Releases

### [v1.15.7](https://github.com/anomalyco/opencode/releases/tag/v1.15.7)
- **Grok OAuth sign-in**: Added device-code login flow for xAI's Grok models ([@Jaaneek](https://github.com/Jaaneek))
- **Hardened error responses**: V2 session APIs now return safe `UnknownError` with log reference IDs for corrupt stored messages; generic 500s no longer leak server config details

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2072](https://github.com/anomalyco/opencode/issues/2072) | **Support for Cursor?** | Cursor launched its own CLI; users want OpenCode to integrate or compete. Top-voted feature request ever (172 👍). | 68 comments; ongoing speculation about reverse-engineering Cursor's private API |
| [#27905](https://github.com/anomalyco/opencode/issues/27905) | **Regression: OpenAI ChatGPT Plus/Pro OAuth missing from auth login since 1.14.49** | Breaks primary login path for paying OpenAI users; 1.14.48 works, 1.14.50+ broken. | 14 comments; users bisected exact version, still open despite v1.15.7 |
| [#23944](https://github.com/anomalyco/opencode/issues/23944) | **Very frequent OpenAI server errors with gpt-5.4** | High-volume error spam degrades UX; unclear if OpenCode or upstream issue | 17 comments; users sharing retry workarounds |
| [#28377](https://github.com/anomalyco/opencode/issues/28377) | **Add support for Gemini 3.5 Flash** | Google I/O launch; community expects rapid model parity | 15 👍, 6 comments; competitive pressure vs. Vercel AI Gateway (#28516) |
| [#28741](https://github.com/anomalyco/opencode/issues/28741) | **MCP OAuth flow fails before opening browser** | Blocks entire MCP server authentication path | Fresh report (May 22); PR fix already opened (#28740) |
| [#28738](https://github.com/anomalyco/opencode/issues/28738) | **Interrupting main agent doesn't stop background subagents** | Safety/UX issue: user expects full stop, gets orphaned processes | Experimental feature; 2 comments, needs attention |
| [#28735](https://github.com/anomalyco/opencode/issues/28735) | **Background subagent result resets main session model** | Breaks model selection persistence; forces reconfiguration | Same reporter as #28738; suggests systemic subagent lifecycle bugs |
| [#28659](https://github.com/anomalyco/opencode/issues/28659) | **AI thinking chain leaks into visible output causing self-dialogue loops** | Critical UX bug: `<thinking>` tags exposed, creating infinite regression | Chinese-language report; indicates international user base |
| [#15988](https://github.com/anomalyco/opencode/issues/15988) | **"Retry Now" button to skip rate limit countdown** | Micro-friction fix; rate limit UX is papercut for power users | 8 👍; long-standing request (March) |
| [#21345](https://github.com/anomalyco/opencode/issues/21345) | **Move git/PR instructions out of bash tool description (~1.7K tokens/request)** | Token bloat directly increases API costs; ~4% of context window wasted | 6 👍; well-instrumented analysis with profiling data |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#28740](https://github.com/anomalyco/opencode/pull/28740) | **fix(mcp): trigger OAuth dance inside startAuth** | Fixes [#28741](https://github.com/anomalyco/opencode/issues/28741): MCP OAuth callback server starts but never opens browser; moves redirect URL generation into `startAuth` | 🟡 Open |
| [#28718](https://github.com/anomalyco/opencode/pull/28718) | **fix(tool): support Zod 3 plugin schemas** | Converts plugin tool Zod arg shapes with MCP SDK compatibility helpers; preserves Zod 3 runtime validation including preprocessors | 🟢 Closed |
| [#28739](https://github.com/anomalyco/opencode/pull/28739) | **refactor(opencode): type config loader env** | Adds `ConfigEnv` service for typed config inputs; eliminates `process.env` mutation for auth tokens | 🟡 Open |
| [#28737](https://github.com/anomalyco/opencode/pull/28737) | **fix(tui): remove italics from thinking labels** | Accessibility/readability tweak: disables italic styling on collapsed thinking labels | 🟡 Open |
| [#28728](https://github.com/anomalyco/opencode/pull/28728) | **feat(tui): design revamp of diff viewer** | New panel/separator layout, file tree with connector guides, selected/reviewed state indicators | 🟢 Closed |
| [#28734](https://github.com/anomalyco/opencode/pull/28734) | **fix(acp): emit writeTextFile for file edits** | Enables Zed's "Review changes" button in ACP mode by advertising `fs.writeTextFile` capability | 🟡 Open |
| [#28709](https://github.com/anomalyco/opencode/pull/28709) | **fix(opencode): agent variant configuration from opencode.json(c)** | Resolves [#27790](https://github.com/anomalyco/opencode/issues/27790): agent config variants in project config ignored | 🟡 Open |
| [#28592](https://github.com/anomalyco/opencode/pull/28592) | **fix(cli): handle OSC52 clipboard passthrough under GNU screen** | Fixes [#28590](https://github.com/anomalyco/opencode/issues/28590): screen's DCS passthrough differs from tmux | 🟡 Open |
| [#28725](https://github.com/anomalyco/opencode/pull/28725) | **chore: drop unused exports across opencode** | Knip-driven cleanup across CLI, TUI, contexts, test fixtures | 🟢 Closed |
| [#28724](https://github.com/anomalyco/opencode/pull/28724) | **chore: delete unused files across opencode** | Removes 8 verified-dead files (scripts, helpers, types) | 🟢 Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Model provider parity** | Gemini 3.5 Flash (#28377), Grok OAuth (shipped v1.15.7), Qwen3.6 Plus fixes (#28708, #28712) | 🔥 High — users expect same-day model support |
| **Token/context efficiency** | Git/PR instruction bloat (#21345), context compaction improvements | 📈 Growing — cost-conscious enterprise users |
| **Auth flow robustness** | OpenAI OAuth regression (#27905), MCP OAuth (#28741), Cursor integration (#2072) | 🔥 Critical — login is first-mile experience |
| **Subagent lifecycle control** | Interrupt propagation (#28738), model reset (#28735), permission inheritance (#26700) | 📈 Emerging — experimental features maturing |
| **ACP/Zed integration depth** | `writeTextFile` capability (#28734, #22674), bash permission hangs (#25836) | 📈 Steady — IDE embedding is strategic |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **OpenAI OAuth broken for 6+ versions** | Daily reports, multiple dupes | 🔴 Critical | [#27905](https://github.com/anomalyco/opencode/issues/27905), [#28608](https://github.com/anomalyco/opencode/issues/28608), [#28636](https://github.com/anomalyco/opencode/issues/28636) |
| **Rate limit UX friction** | Long-standing, multiple +1s | 🟡 Moderate | [#15988](https://github.com/anomalyco/opencode/issues/15988) |
| **SSE stream hangs silently** | Reported with technical depth | 🟡 Moderate | [#28729](https://github.com/anomalyco/opencode/issues/28729) |
| **Zod schema leakage to providers** | Kimi k2.6 specifically | 🟡 Moderate | [#28704](https://github.com/anomalyco/opencode/issues/28704) |
| **Thinking/reasoning content bleeding** | DeepSeek (#28714), generic loops (#28659) | 🟡 Moderate | Multiple fixes in flight |
| **Payment/subscription errors (402)** | Recurring, support-escalation pattern | 🟡 Moderate | [#27964](https://github.com/anomalyco/opencode/issues/27964) |

---

*Digest compiled from github.com/anomalyco/opencode activity 2026-05-21→2026-05-22.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-22

## Today's Highlights

The Pi team shipped v0.74.2 to address a critical Node 20 compatibility gap where `pi update` silently failed instead of warning users about the new Node >=22.19.0 requirement. Meanwhile, the community closed 28 issues in 24 hours, with heavy activity around Bedrock token truncation fixes, OpenAI tool-call hardening, and extension API expansions for background tasks and viewport control.

---

## Releases

**[v0.74.2](https://github.com/earendil-works/pi/releases/tag/v0.74.2)** — Patch release with two fixes:
- `pi update` now explicitly explains the Node >=22.19.0 requirement on Node 20 instead of reporting a successful no-op ([#4876](https://github.com/earendil-works/pi/issues/4876))
- Self-update commands now pass `--ignore-scripts` for safer package manager operations

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4430](https://github.com/earendil-works/pi/issues/4430) | Long-session errors (write/edit/read) at 70-90k context | Core reliability issue affecting power users with extended sessions; marked `closed-because-refactor` suggesting architectural fix | 9 comments, user frustration with context management workflows |
| [#2528](https://github.com/earendil-works/pi/issues/2528) | Azure OpenAI 404 due to missing `api-version` parameter | Enterprise blocker; Azure endpoints require query params that standard OpenAI client omits | 8 comments, `possibly-openclaw-clanker` tag indicates upstream dependency complexity |
| [#4848](https://github.com/earendil-works/pi/issues/4848) | Bedrock adaptive-thinking models truncate at 4096 tokens | Silent truncation of Claude Opus/Sonnet outputs despite 128K registry config; affects high-value enterprise use cases | 5 comments, rapid same-day closure with PR fix |
| [#4861](https://github.com/earendil-works/pi/issues/4861) | Generic TUI viewport primitive for extensions | Enables extension authors to customize terminal layout (e.g., centering output on wide screens) | 5 comments, positive reception for extensibility |
| [#4867](https://github.com/earendil-works/pi/issues/4867) | Expose provider raw request/response hooks | Critical for debugging AI provider integrations; current normalized events lose original JSON/chunk data | 4 comments, Chinese-language issue shows global enterprise demand |
| [#3790](https://github.com/earendil-works/pi/issues/3790) | Backward shortcut for cycling thinking level | UX polish for keyboard-heavy workflows; overshooting 5-6 levels is common friction | 4 comments, `last read` tag suggests persistent community interest |
| [#4876](https://github.com/earendil-works/pi/issues/4876) | `pi update` silently stays on 0.74.1 under Node 20 | Confusing DX where users think they're updated but aren't; led to same-day patch release | 3 comments, immediate resolution validates urgency |
| [#4865](https://github.com/earendil-works/pi/issues/4865) | `@mariozechner/clipboard-*` lost npm provenance | Supply chain security regression blocking security-focused installs | 3 comments, niche but critical for enterprise compliance |
| [#4851](https://github.com/earendil-works/pi/issues/4851) | Subpath support for `pi install git:` | Monorepo extension distribution is currently impossible; re-filed after refactor auto-close | 3 comments, pattern of persistent feature requests |
| [#4837](https://github.com/earendil-works/pi/issues/4837) | `createBranchedSession()` returns nonexistent file path | Breaks `pi-subagents` extension with `context: "fork"`; subagent workflows fail silently | 3 comments, same-day PR fix (#4838) |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4873](https://github.com/earendil-works/pi/pull/4873) | Normalize Windows file URL paths | Cross-device path joining + general cleanup; fixes #4780 | **Open** |
| [#4756](https://github.com/earendil-works/pi/pull/4756) | Async operations in tools | Prevents TUI lockup when Microsoft Defender hangs sync fs; moves image resize to worker | **Open** |
| [#4871](https://github.com/earendil-works/pi/pull/4871) | Default Bedrock `maxTokens` to `model.maxTokens` | Fixes silent 4096-token truncation; critical for Claude adaptive-thinking models | **Open** |
| [#2527](https://github.com/earendil-works/pi/pull/2527) | Fetch GitHub Copilot context window limits at runtime | Corrects 1M→200K context window override; prevents context overflow errors | **Open** |
| [#4866](https://github.com/earendil-works/pi/pull/4866) | Provider raw hooks (`onRawRequestBody`, `onRawResponseChunk`, `onRawResponseEnd`) | Implements #4867 for openai-responses, openai-completions, anthropic-messages | **Closed** |
| [#4856](https://github.com/earendil-works/pi/pull/4856) | Gemini 3.5 Flash for GitHub Copilot | Adds model registry entry with correct compatibility options | **Closed** |
| [#4855](https://github.com/earendil-works/pi/pull/4855) | Harden OpenAI tool-call replay against empty IDs | Normalizes malformed tool-call fragments to prevent `Invalid 'call_id'` errors | **Closed** |
| [#4853](https://github.com/earendil-works/pi/pull/4853) | Ignore invalid empty tool calls before execution | Defense-in-depth: skips execution of empty-id+empty-name tool calls | **Closed** |
| [#4824](https://github.com/earendil-works/pi/pull/4824) | `model_selector_open` extension event | Lets extensions refresh remote model lists on-demand when picker opens | **Open** |
| [#4823](https://github.com/earendil-works/pi/pull/4823) | Built-in llama-cpp provider via inline ExtensionFactory | Auto-activates on `LLAMA_*` env vars; discovers models from `/models` endpoint | **Open** |

---

## Feature Request Trends

1. **Extension API surface expansion** — Requests for background task management (#4850), viewport primitives (#4861), raw provider hooks (#4867), and session control (#4812) show consistent demand for deeper extension capabilities beyond the current tool/model framework.

2. **Monorepo and subpath tooling** — `pi install git:` subpath support (#4851) and lazy tool schema injection (#4822) reflect growth in complex, multi-package extension ecosystems where granular installation and performance matter.

3. **Enterprise authentication and region flexibility** — Device code flow (#4809), Bedrock region independence from `AWS_REGION` (#4860), and Azure compatibility (#2528) indicate Pi is being adopted in regulated, multi-account cloud environments.

4. **Session and context ergonomics** — Backward thinking-level cycling (#3790), `/resume` skill expansion hiding (#4800), and background agent turns (#4846) reveal friction in long-session management workflows.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Node version migration friction** | High | #4876, #4872, #4833 — `pi update` failures, EBADENGINE warnings, and confusion about 0.75.x requirements dominated support volume; required emergency patch |
| **Silent truncation / incorrect defaults** | High | #4848, #4854, #2527 — Bedrock 4096-token cap, empty tool-call IDs, and wrong Copilot context windows all share pattern of "appears to work, fails later" |
| **Windows-specific instability** | Medium | #4873, #4756 — Path normalization and Defender-induced hangs suggest Windows is a second-class citizen needing dedicated QA |
| **Extension debugging opacity** | Medium | #4867, #4866 — Inability to see raw provider traffic forces developers to patch core or guess at normalization behavior |
| **Refactor-induced issue churn** | Medium | #4394, #4851, #4850 — Multiple "re-file of #XXXX (auto-closed during refactor)" notes indicate communication gaps during major rewrites |

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-22

## 1. Today's Highlights

Qwen Code **v0.16.0 shipped** with OSC 8 hyperlink support and OpenAI stream delta normalization, though release automation hit turbulence with multiple failed CI runs. Memory pressure dominates community discourse: four active OOM issues, a new memory pressure monitor PR, and a critical `MaxListenersExceededWarning` fix in flight. The daemon mode (`qwen serve`) ecosystem is maturing rapidly with shared MCP transport pools landing, web-shell integration beginning, and dedicated developer documentation publishing.

---

## 2. Releases

### [v0.16.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.0) — 2026-05-21

| Change | Author | PR |
|--------|--------|-----|
| Terminal hyperlinks now clickable via OSC 8 markdown link wrapping | @BZ-D | [#4037](https://github.com/QwenLM/qwen-code/pull/4037) |
| Fixed cumulative OpenAI stream delta normalization in core | — | — |

**Note:** Release automation experienced failures; [multiple CI runs](https://github.com/QwenLM/qwen-code/actions/runs/26215014451) needed before successful publish. VSCode IDE Companion release [also failed](https://github.com/QwenLM/qwen-code/issues/4409) separately.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Pulse |
|---|-------|--------------|-----------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | **Mode B feature-priority roadmap toward v0.16 production-ready** | Defines the critical path for `qwen serve` daemon stability; tracks 7 remaining work items from merged Stage 1 daemon and workspace refactor. | 26 comments; doudouOUC driving detailed milestone breakdown |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode (`qwen serve`): proposal & open decisions** | Foundational 6-chapter design series by wenshao establishing daemon architecture; source of truth for implementation. | 21 comments; referenced across multiple PRs |
| [#4149](https://github.com/QwenLM/qwen-code/issues/4149) | **V8 heap OOM: Ineffective mark-compacts near heap limit** | Hard crash in Node.js GC under sustained load; blocking production use for long-running sessions. | 11 comments; active debugging with GC logs |
| [#4351](https://github.com/QwenLM/qwen-code/issues/4351) | **OOM with local Qwen 3.6 + llama.cpp on Linux** | Specific repro of memory exhaustion when pairing Qwen Code with local inference stack. | 7 comments; sergehuber confirmed repeatable crash |
| [#4369](https://github.com/QwenLM/qwen-code/issues/4369) | ~~Stop using AI issue/PR and fix RAM leak manually~~ **CLOSED** | Controversial critique of AI-generated code quality and GC unfriendliness; proposed history-to-file offloading. | 4 comments; closed same day, sparked tooling debate |
| [#4323](https://github.com/QwenLM/qwen-code/issues/4323) | **Anthropic "Missing API key" despite configuration** | Regression in v0.15.11; proxy debugging reveals header handling bug affecting Claude users. | 4 comments; daidaiJ provided packet capture |
| [#4218](https://github.com/QwenLM/qwen-code/issues/4218) | **MCP Server "filesystem" connected but tools invisible to model** | Windows-specific MCP tool discovery failure; UI/actual state desync. | 3 comments; carloseradn-sketch seeking workarounds |
| [#4384](https://github.com/QwenLM/qwen-code/issues/4384) | **W3C traceparent + session ID propagation to LLM services** | Enterprise observability requirement; enables distributed tracing across model provider boundaries. | 1 comment; doudouOUC already has PR ready |
| [#4363](https://github.com/QwenLM/qwen-code/issues/4363) | **Oversized resumed history → `Invalid string length`** | V8 string length limit hit on session restore; distinct from OOM but same long-session class. | 1 comment; yiliang114 validating #4286 follow-up |
| [#4364](https://github.com/QwenLM/qwen-code/issues/4364) | **Multi-GiB foreground stdout → V8 fatal or empty output** | Shell output path fails at extreme scale; foreground execution needs streaming backpressure. | 1 comment; found during memory work validation |

---

## 4. Key PR Progress

| # | Title | What It Does | Status |
|---|-------|-----------|--------|
| [#4414](https://github.com/QwenLM/qwen-code/pull/4414) | Background housekeeping for stale file-history dirs | 30-day mtime cleanup for `~/.qwen/file-history/` accumulation from `/rewind` feature; configurable retention | 🟢 Open |
| [#4410](https://github.com/QwenLM/qwen-code/pull/4410) | Telemetry Phase 3: `qwen-code.subagent` span isolation | Proper trace subtree isolation for concurrent subagents; fixes span interleaving in observability backends | 🟢 Open |
| [#4390](https://github.com/QwenLM/qwen-code/pull/4390) | W3C traceparent + `X-Qwen-Code-Session-Id` propagation | Closes [#4384](https://github.com/QwenLM/qwen-code/issues/4384); couples distributed tracing headers to all outbound LLM requests | 🟢 Open |
| [#4366](https://github.com/QwenLM/qwen-code/pull/4366) | Fix `AbortSignal` listener leak in long sessions | Eliminates `MaxListenersExceededWarning: 1509 abort listeners`; replaces per-layer registration with parent→child propagation cleanup | 🟢 Open |
| [#4333](https://github.com/QwenLM/qwen-code/pull/4333) | Atomic write rollout for credentials, memory, config, JSONL | Phase 2 durability: `writeFile` → atomic helpers for security-sensitive paths; prevents corruption on process kill | 🟢 Open |
| [#4403](https://github.com/QwenLM/qwen-code/pull/4403) | Memory pressure monitor | Runtime memory-pressure handling with conservative cache cleanup, container-aware limits, diagnostic events | 🟢 Open |
| [#4380](https://github.com/QwenLM/qwen-code/pull/4380) | Daemon-backed React web-shell | Full web-shell package: SSE events, permissions, slash commands, model switching, session resume, MCP, skills, agents | 🟢 Open |
| [#4411](https://github.com/QwenLM/qwen-code/pull/4411) | F2 cleanup PR A: R9/W11/W12/R10 refactors | Pure refactor bucket: `McpClientManager` constructor options object, no behavior change | 🟢 Open |
| [#4286](https://github.com/QwenLM/qwen-code/pull/4286) | ~~Replace `structuredClone` with shallow copy to prevent OOM~~ | **MERGED** then revisited; eliminated `structuredClone(this.history)` hot path, but [#4363](https://github.com/QwenLM/qwen-code/issues/4363) found edge cases | 🔴 Closed |
| [#4336](https://github.com/QwenLM/qwen-code/pull/4336) | ~~Shared MCP transport pool [F2]~~ | **MERGED**; 22 commits, +7,966/−97 across 34 files; enables MCP connection reuse in daemon mode | 🔴 Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Daemon / server mode productionization** | [#4175](https://github.com/QwenLM/qwen-code/issues/4175), [#3803](https://github.com/QwenLM/qwen-code/issues/3803), [#4380](https://github.com/QwenLM/qwen-code/pull/4380), [#4328](https://github.com/QwenLM/qwen-code/pull/4328), [#4412](https://github.com/QwenLM/qwen-code/pull/4412) | 🔥 Highest — documentation, web-shell, transport pool, transcript layer all landing |
| **Observability & telemetry** | [#4384](https://github.com/QwenLM/qwen-code/issues/4384), [#4410](https://github.com/QwenLM/qwen-code/pull/4410), [#4390](https://github.com/QwenLM/qwen-code/pull/4390), [#3731](https://github.com/QwenLM/qwen-code/issues/3731) | 🔥 Strong — Phase 3 spans, W3C traceparent, session ID propagation |
| **Memory management & diagnostics** | [#3000](https://github.com/QwenLM/qwen-code/issues/3000), [#4374](https://github.com/QwenLM/qwen-code/issues/4374), [#4403](https://github.com/QwenLM/qwen-code/pull/4403) | 🔥 Strong — pressure monitor, auto-recall disable, diagnostics tooling |
| **Enterprise compliance controls** | [#4348](https://github.com/QwenLM/qwen-code/issues/4348), [#4372](https://github.com/QwenLM/qwen-code/issues/4372) | Moderate — chat compression escape hatch, permission hook events |
| **Channel ecosystem expansion** | [#4379](https://github.com/QwenLM/qwen-code/pull/4379) | Emerging — Feishu/Lark adapter with WebSocket/webhook |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Current Mitigation | Gap |
|------------|-----------|-------------------|-----|
| **Memory exhaustion / V8 OOM in long sessions** | 🔴 Critical — 6+ active issues/PRs | [#4286](https://github.com/QwenLM/qwen-code/pull/4286) shallow copy landed; [#4403](https://github.com/QwenLM/qwen-code/pull/4403) pressure monitor incoming; [#4366](https://github.com/QwenLM/qwen-code/pull/4366) abort leak fix | No unified memory budget enforcement; container limits partially respected |
| **Release CI flakiness** | 🔴 High — 5+ failed runs on 0.16.0 | Manual retry; [#4416](https://github.com/QwenLM/qwen-code/pull/4416) fixes one flaky test | Root cause: macOS runner timing sensitivity, VSCode companion pipeline separate failure |
| **Session resume at scale** | 🟡 High — [#4351](https://github.com/QwenLM/qwen-code/issues/4351), [#4363](https://github.com/QwenLM/qwen-code/issues/4363), [#4364](https://github.com/QwenLM/qwen-code/issues/4364) | History truncation, shallow copy | String length limits, multi-GiB stdout streaming need architectural fixes |
| **MCP tooling reliability** | 🟡 Moderate — [#4218](https://github.com/QwenLM/qwen-code/issues/4218), [#4336](https://github.com/QwenLM/qwen-code/pull/4336) | Transport pool merged; Windows-specific tool discovery bug open | Cross-platform MCP state sync needs hardening |
| **Anthropic provider regressions** | 🟡 Moderate — [#4323](https://github.com/QwenLM/qwen-code/issues/4323) | Transparent proxy debugging by community | Header handling path needs regression test coverage |
| **AI-generated code maintainability** | 🟡 Philosophical — [#4369](https://github.com/QwenLM/qwen-code/issues/4369) closed | N/A — cultural tension | No policy; community split on AI-assisted contributions vs. review burden |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-05-21 to 2026-05-22.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-22

## Today's Highlights

The project shipped **v0.8.40** with streamlined npm distribution and GHCR container support. Maintainer `Hmbown` opened a coordinated batch of 8 slash-command architecture issues (#1886–#1892, #1888) signaling a major UX overhaul for command discoverability, durability, and spatial workbench integration. Meanwhile, community PRs are landing fixes for Windows logging leaks, YAML skill parsing, and composer undo behavior.

---

## Releases

### [v0.8.40](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.40)
- **npm global install** now available: `npm install -g deepseek-tui` (downloads both binaries automatically)
- **GHCR Docker image** for containerized deployment: `docker run --rm -it -e DEEPSEEK_API_KEY=... ghcr.io/hmbown/deepseek-tui`

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615) | Docker garbled output bug (CLOSED, 180 comments) | Highest-comment issue in 24h; severe terminal corruption forcing Linux server reboots | Frustrated user ("什么垃圾玩意"); likely resolution in v0.8.40 container fixes |
| [#1092](https://github.com/Hmbown/DeepSeek-TUI/issues/1092) | Expose tool calls via `serve --acp` | Critical for editor integration (Zed, etc.); ACP protocol incomplete without `read_file`/`exec_shell`/`write_file` | 17 comments; active design discussion on JSON-RPC surface |
| [#1849](https://github.com/Hmbown/DeepSeek-TUI/issues/1849) | v0.8.41 tracker: hostability, long-session hardening | Maintainer roadmap for next release; Tencent Lighthouse, orientation cache, PR triage | 2 comments; umbrella issue for release planning |
| [#1695](https://github.com/Hmbown/DeepSeek-TUI/issues/1695) | macOS `write_file` silent failure >1KB (CLOSED) | Data loss bug on macOS; user provided skill patch workaround | 5 comments; workaround acknowledged, fix likely in v0.8.40 |
| [#1607](https://github.com/Hmbown/DeepSeek-TUI/issues/1607) | Add CNY/¥ to token cost estimation | Chinese user base needs local currency; currently USD-only | 5 comments; localization gap in cost-sensitive workflow |
| [#1004](https://github.com/Hmbown/DeepSeek-TUI/issues/1004) | `/dryrun` — preview completion without sending | Cost control for DeepSeek V4 Pro; long prompts are expensive to iterate | 3 comments; developer productivity + cost savings |
| [#1530](https://github.com/Hmbown/DeepSeek-TUI/issues/1530) | Session continuity in non-interactive mode | Blocks CI/automation workflows; `exec --resume` missing | 2 comments; infrastructure/integration use case |
| [#1562](https://github.com/Hmbown/DeepSeek-TUI/issues/1562) | Complete Chinese i18n, language at startup | Model reasoning still English; hurts Chinese UX, causes misjudgment | 1 comment; i18n completeness gap vs. UI chrome |
| [#1409](https://github.com/Hmbown/DeepSeek-TUI/issues/1409) | MCP OAuth 2.1 support | Security requirement for production MCP servers (e.g., tinyfish); API keys too permissive | 1 comment, 1 👍; authentication architecture limitation |
| [#1876](https://github.com/Hmbown/DeepSeek-TUI/issues/1876) | v0.8.42 tracker: inbox-zero triage | Maintainer commit to backlog hygiene; signals project maturity | 1 comment; process improvement for sustainability |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#1912](https://github.com/Hmbown/DeepSeek-TUI/pull/1912) | `[logs] retention_days` config.toml integration | Persistent log retention config (layer 3), building on #1785 env-var pruning | **Merged** |
| [#1910](https://github.com/Hmbown/DeepSeek-TUI/pull/1910) | Suppress Windows verbose CLI logging on alt-screen | Fixes TUI corruption from `eprintln!` leaks when `dup2` unavailable; follow-up to #1776 | Open |
| [#1908](https://github.com/Hmbown/DeepSeek-TUI/pull/1908) | Parse YAML block scalars in SKILL.md frontmatter | Fixes `>`/`|` multi-line descriptions being stored as literal indicator; closes #1907 | Open |
| [#1911](https://github.com/Hmbown/DeepSeek-TUI/pull/1911) | Restore cleared composer with Ctrl+Z | Single-slot undo buffer for composer clears; closes #1771 | Open |
| [#1906](https://github.com/Hmbown/DeepSeek-TUI/pull/1906) | Copy transcript without visual wraps | Fixes #1853: mouse selection preserves logical newlines, removes soft wrap artifacts | Open |
| [#1893](https://github.com/Hmbown/DeepSeek-TUI/pull/1893) | Configurable TLS certificate verification | `insecure_skip_tls_verify` for corporate/self-signed environments; security-conscious default `false` | Open |
| [#1875](https://github.com/Hmbown/DeepSeek-TUI/pull/1875) | v0.8.41 umbrella: hostability, orientation cache, hardening | Major release PR closing #1849; Tencent Lighthouse, PEEK context, Windows containment, cockpit UX | Open |
| [#1820](https://github.com/Hmbown/DeepSeek-TUI/pull/1820) | MCP-over-WebSocket IDE bridge | Auto-discovers VS Code/Cursor/Zed via `~/.claude/ide/*.lock`; cwd-scoped MCP relay | Open |
| [#1795](https://github.com/Hmbown/DeepSeek-TUI/pull/1795) | Deepen file-discovery walk depth to 12 + fuzzy subsequence matching | Fixes Android/deep-nested project `@mentions`; adds `is_subsequence()` ranked below prefix hits | Open |
| [#1769](https://github.com/Hmbown/DeepSeek-TUI/pull/1769) | Expose subagent model config | UI-editable defaults for `[subagents]` model routing; fills gap between backend support and TUI surface | Open |

---

## Feature Request Trends

1. **Slash command architecture overhaul** — 8 coordinated issues (#1886–#1892, #1888) from maintainer signal a major investment: registry audit, control-plane semantics, tool-studio wiring, PEEK-backed receipts, spatial workbench routing, cockpit integration, i18n/docs, and presence/help parity.

2. **Cost transparency & localization** — Currency display (#1607, #1902), API balance visibility (#1735, #1551), and `/dryrun` preview (#1004) cluster around developer cost anxiety, especially for V4 Pro and Chinese-market users.

3. **Session durability & automation** — Non-interactive resume (#1530), PEEK/orientation cache (#1849), and slash-command receipts (#1889) point to production workflow needs beyond interactive chat.

4. **MCP ecosystem maturity** — OAuth 2.1 (#1409), IDE bridge (#1820), tool-call exposure (#1092), and skill format evolution (#1003) show MCP as the central extensibility surface.

5. **Cross-tool portability** — Config import from Claude Code/Cursor/Codex (#453), plugin/hook migration (#1172), and color palette alignment (#1697, #1793) position DeepSeek TUI as a drop-in alternative.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Windows reliability** | Logging leaks (#1910/#1905), agent deadlocks (#1760), alt-screen corruption | High — platform parity gap |
| **macOS file I/O silent failures** | #1695 write_file >1KB ghosting; required user workaround | High — data loss risk |
| **Docker/container usability** | #1615 garbled output (180 comments!), forced server reboots | Critical — onboarding blocker |
| **i18n incompleteness** | #1562, #790: model reasoning English-only, startup language selection missing | Medium — Chinese market friction |
| **Configuration sprawl** | #1224: split `~/.deepseek/` vs `~/.deepseek/` (unclear), #1105 HTTP baseURL undocumented | Medium — setup friction |
| **Skill/YAML edge cases** | #1907 block scalar parsing, #1003 structured vs. natural language skills | Low-Medium — power-user papercuts |
| **Issue/PR backlog hygiene** | #1876 explicitly created for "inbox-zero"; 50 open issues, many stale | Process — maintainer bandwidth |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*