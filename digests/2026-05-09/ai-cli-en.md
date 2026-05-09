# AI CLI Tools Community Digest 2026-05-09

> Generated: 2026-05-09 00:21 UTC | Tools covered: 9

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
**Date: 2026-05-09**

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar market with distinct architectural philosophies: Anthropic's Claude Code leads in enterprise Cowork/Desktop sync features but struggles with CI/CD hardening; OpenAI Codex is aggressively platformizing via plugin marketplaces and headless remote-control infrastructure; Google Gemini CLI faces critical reliability crises around authentication and performance; while emerging players (Kimi, Qwen, DeepSeek TUI) compete on cost efficiency and localization. All tools now grapple with Windows parity, MCP ecosystem integration, and the tension between agent autonomy and user control. The sector is simultaneously consolidating around shared protocols (ACP, MCP) and fragmenting on provider-specific optimizations.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Cadence |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50 | 8 | 2 (v2.1.136, v2.1.137) | Rapid hotfix-capable; emergency patches within hours |
| **OpenAI Codex** | ~15 | 10 | 1 (v0.130.0 stable) | Stabilization-focused; alpha→stable pipeline |
| **Gemini CLI** | ~10 | 10 | 0 | Stalled; no release despite critical P1 regression |
| **GitHub Copilot CLI** | ~8 | 2 | 2 (v1.0.44, v1.0.44-3) | Incremental; extensibility-first |
| **Kimi Code CLI** | 10 | 10 | 0 | Active Windows engineering sprint |
| **OpenCode** | ~10 | 10 | 0 | Steady; infrastructure hardening |
| **Pi** | 50 | 17 | 0 | Intense pre-refactor clearing |
| **Qwen Code** | ~15 | 10 | 3 (v0.15.9 stable + 2 previews) | Aggressive; telemetry/attribution focus |
| **DeepSeek TUI** | ~10 | 11 | 4 (v0.8.18–v0.8.22) | Fastest cadence; security-cost dual focus |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Remote/Headless Operations** | Claude Code, Codex, Pi, Qwen Code | Daemon modes (`qwen serve`, `pi --mode worker-loop`, `codex remote-control`), session bridging, CI/scripting workflows |
| **MCP Ecosystem Integration** | Claude Code, Copilot CLI, OpenCode, DeepSeek TUI | Server hot-reload, tool visibility, write/delete operations, registry enforcement, plugin marketplace |
| **Windows Parity** | Claude Code, Codex, Gemini CLI, Kimi CLI, Pi | Process management, console state, PowerShell→Git Bash migration, path handling, CI hardening |
| **Cost Control & Transparency** | Codex, DeepSeek TUI, OpenCode, Qwen Code | Token consumption visibility, cache hit optimization, per-turn model routing, custom provider cost tracking |
| **Multi-Account/Multi-Tenant** | Codex, Claude Code, Qwen Code | Auth profile switching, enterprise tenant isolation, OAuth policy clarity |
| **Session State Durability** | Claude Code, Gemini CLI, Kimi CLI, OpenCode, DeepSeek TUI | Crash recovery, retry logic bounds, `/clear` race conditions, spilled output persistence |
| **Thinking/Reasoning Visibility** | Kimi CLI, DeepSeek TUI, Qwen Code | Full trace display, locale control for non-English chains, debugging agent behavior |

---

## 4. Differentiation Analysis

| Dimension | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **GitHub Copilot CLI** | **Emerging Players** (Kimi/Qwen/DeepSeek/Pi/OpenCode) |
|:---|:---|:---|:---|:---|:---|
| **Primary Target** | Enterprise teams, Cowork collaboration | Platform developers, plugin builders | Google ecosystem integrators | GitHub-centric developers, BYOK enterprises | Cost-sensitive developers, regional markets (China/Global South), power users |
| **Feature Focus** | Dispatch sync, permission automation, Desktop/CLI bridge | Plugin marketplace, remote control, sandbox security | Auto mode routing, bot delegation | Hook extensibility, slash command flexibility, LLM bypass | Token efficiency, local model support, i18n, TUI robustness |
| **Technical Approach** | Electron/Desktop + Rust CLI; hook-based permissions | Rust CLI + TypeScript runtime; app-server daemon | Go CLI; esbuild bundling; Vertex AI integration | TypeScript CLI; VS Code extension parity | Rust/Go/Zig diversification; POSIX-first with Windows catch-up |
| **Key Differentiator** | Cowork real-time collaboration | `codex remote-control` headless infrastructure | Unified Auto mode (emerging) | `userPromptSubmitted` hook LLM bypass | DeepSeek: cache-aware prompt engineering; Qwen: `autoSkill` extraction; Pi: cross-device sync; Kimi: PowerShell abandonment |
| **Critical Weakness** | Windows CI path hardening (4th recurrence) | Token economics unpredictability | Auth/tier detection systemic failure | Non-interactive mode silent failures, MCP connectivity gaps | Fragmented ecosystems, smaller QA surface |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **High Momentum, High Maturity** | **Claude Code**, **OpenAI Codex** | Largest issue volumes (50+/day), rapid hotfix infrastructure, enterprise feature depth, but accumulating technical debt (CI paths, token costs) |
| **High Momentum, Instability** | **Pi**, **DeepSeek TUI** | Pi: 17 PRs/50 issues in 24h, aggressive backlog clearing; DeepSeek: 4 releases/11 PRs, cost-control innovation, but onboarding friction |
| **Stalled/Regressing** | **Gemini CLI** | Critical P1 regression unaddressed without release; auth crisis eroding paid user trust; maintainer-only locks on issues |
| **Steady Growth** | **Qwen Code**, **Kimi CLI**, **OpenCode** | Qwen: 122-comment policy debate shows engagement; Kimi: Windows sprint indicates responsiveness; OpenCode: architectural investments (Effect-based LLM core) |
| **Niche/Consolidating** | **GitHub Copilot CLI** | Lower absolute volume but focused on extensibility; risk of being outpaced by platform-agnostic tools |

**Velocity Leaders**: DeepSeek TUI (4 releases/24h), Pi (17 PRs), Claude Code (emergency CI response).

**Trust Erosion Risk**: Gemini CLI (unacknowledged P1, refund requests), Claude Code (repeated Windows regressions).

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Agent Protocol Standardization (ACP/MCP)** | ACP compliance PRs in Gemini (#26676), Pi, Kimi; MCP registry debates across all tools | Developers should build on protocols, not proprietary APIs; interoperability becoming baseline expectation |
| **Cost as First-Class Engineering Constraint** | DeepSeek cache optimization (#1196), Codex token burn (#14593), Qwen free tier reduction (#3203), Claude Code `autoMode.hard_deny` | Tool selection increasingly driven by predictability of spend, not just capability; per-request routing becoming standard |
| **Windows as Make-or-Break Platform** | 7+ Kimi issues, 4th Claude Code recurrence, Codex CI investments, Pi Zig port | Unix-first development now actively penalizes market share; Windows engineering requires dedicated investment, not afterthought |
| **Headless/CI-First Design** | `codex remote-control`, `qwen serve`, `pi --mode worker-loop`, Claude Code hook automation | CLI tools evolving from "smart terminal" to "agent infrastructure"; API stability and observability trump TUI polish |
| **Localization Beyond Translation** | DeepSeek thinking-chain locale (#683), Qwen Cyrillic rendering (#3936), CNY pricing (#932) | Global market requires locale-aware *reasoning*, not just UI strings; Chinese-speaking developer market particularly vocal |
| **Telemetry as Trust Battleground** | Qwen opt-in controls (#3889), Claude Code OTEL survey flag, Kimi provenance tracking (#2190) | Privacy-conscious defaults becoming competitive differentiator; enterprise procurement will scrutinize telemetry architecture |
| **Context Compression as Core Competency** | Qwen reactive compression (#3879), Gemini union-find compaction (#24736), DeepSeek cache-aware prompts (#1196), Kimi visual progress bars (#1972) | Token context limits driving algorithmic innovation; tools without intelligent compression will fail at scale |

---

*Report compiled from 9 tool community digests representing 200+ issues, 80+ PRs, and 14 releases on 2026-05-09.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-09 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pain point in every document Claude generates |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skills across 5 dimensions (structure, security, documentation, etc.) | First systematic quality tooling for the Skills ecosystem itself |
| 3 | **Frontend Design** (Improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity/actionability—ensures instructions are executable in single conversations | Focus on practical executability vs. verbose guidance |
| 4 | **ODT/OpenDocument** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS files; LibreOffice/ISO standard compliance | Enterprise document workflow integration |
| 5 | **PDF Fixes** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Case-sensitive file reference corrections in `SKILL.md` | Cross-platform reliability (Linux/CI breakage) |
| 6 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Prevents document corruption from `w:id` collisions with existing bookmarks | Deep OOXML expertise; production-critical bugfix |
| 7 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation for unquoted descriptions with special characters | Developer experience; silent failure prevention |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP/BI integration; Apache 2.0 model |

---

## 2. Community Demand Trends

From [Issues analysis](https://github.com/anthropics/skills/issues), the most-anticipated Skill directions are:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Org-wide Skill sharing & governance** | #228 (9 comments, 7 👍), #492 | [Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228); [Trust boundary abuse via namespace impersonation](https://github.com/anthropics/skills/issues/492) |
| **Testing & quality automation** | #723 (PR), #556, #202 | [Testing-patterns skill](https://github.com/anthropics/skills/pull/723); [run_eval.py 0% trigger rate](https://github.com/anthropics/skills/issues/556); [skill-creator best practices](https://github.com/anthropics/skills/issues/202) |
| **Memory & persistent context** | #154 (PR) | [shodh-memory skill](https://github.com/anthropics/skills/pull/154) |
| **MCP interoperability** | #16 | [Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16) |
| **Infrastructure/platform skills** | #568, #360 (PRs) | [ServiceNow platform skill](https://github.com/anthropics/skills/pull/568); [AppDeploy full-stack deployment](https://github.com/anthropics/skills/pull/360) |
| **Document format completeness** | #189, #1087 | [Plugin duplicate skills](https://github.com/anthropics/skills/issues/189); [document-skills loads all vs. declared](https://github.com/anthropics/skills/issues/1087) |

---

## 3. High-Potential Pending Skills

Active PRs with substantive discussion, likely to merge with refinement:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Addresses #556 evaluation gaps; comprehensive coverage (Testing Trophy → E2E); fills critical DX gap |
| **AURELION Cognitive Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 4-skill framework (kernel, advisor, agent, memory); structured knowledge management; active updates through May 2026 |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Native AppleScript alternative to screenshot-based computer use; two-tier permission model addresses security concerns |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | Systematic 10-step cleanup workflow; produces `CODEBASE-STATUS.md`; high enterprise utility |
| **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 + Veo 3.1 integration; media generation is high-frequency user request |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-hardened document and enterprise workflow skills with validated reliability, interoperability standards, and organizational governance—reflecting a shift from experimental individual use to team-deployed, trust-verified infrastructure.**

---

*Report generated from public GitHub data. All links verified against `github.com/anthropics/skills` as of 2026-05-09.*

---

# Claude Code Community Digest — 2026-05-09

---

## 1. Today's Highlights

Anthropic shipped two releases in 24 hours, with **v2.1.137** rushing out an emergency fix for a critical Windows VS Code extension activation bug introduced in v2.1.136. The incident dominated community activity with **10+ related issues** filed in under a day, highlighting persistent CI/CD path hardening problems. Meanwhile, macOS users continue grappling with Dispatch/Cowork offline desync and new regressions in hook-based permission suppression.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.137** | Emergency hotfix: `[VSCode] Fixed extension failing to activate on Windows` — addresses regression from v2.1.136 |
| **v2.1.136** | • `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` — re-enables session quality survey for enterprise OpenTelemetry pipelines<br>• `settings.autoMode.hard_deny` — unconditional blocking classifier rules for auto mode regardless of user intent |

The rapid v2.1.137 release suggests Anthropic's CI/CD pipeline can respond within hours to critical breakages, though the root cause (hardcoded Linux CI paths) remains a recurring vulnerability.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#45937](https://github.com/anthropics/claude-code/issues/45937) | **Dispatch main conversation permanently offline despite working Cowork tasks** | Core Cowork/Desktop sync architecture broken for weeks; tasks work but main thread doesn't, indicating state machine split-brain | 27 comments, 12 👍 — longest-running unresolved, users sharing workarounds |
| [#51798](https://github.com/anthropics/claude-code/issues/51798) | **PreToolUse `permissionDecision: "allow"` no longer suppresses Bash sandbox prompt (2.1.116+ regression)** | Breaks enterprise automation relying on programmatic hook-based permission flows; `dangerouslyDisableSandbox` now requires manual confirmation | 18 comments, 2 👍 — power users frustrated, downgrade to 2.1.112 confirmed working |
| [#57415](https://github.com/anthropics/claude-code/issues/57415) | **[CLOSED] VS Code extension v2.1.136 fails to activate — hardcoded Linux CI path** | **The defining incident of the day**; identical regression class to #56549, #56725 | 10 comments, 6 👍 — rapid community triage, closed by v2.1.137 |
| [#50810](https://github.com/anthropics/claude-code/issues/50810) | **Opus 4.7 missing from CLI/model selector (available in Desktop)** | Model parity gap between CLI and Desktop creates confusion for API-first workflows | 9 comments, 11 👍 — high engagement, users want CLI feature parity |
| [#49545](https://github.com/anthropics/claude-code/issues/49545) | **Dispatch permanently showing "desktop appears offline" for multiple weeks** | Duplicate cluster confirming #45937 is widespread; multiple users, weeks-long duration | 13 comments, 3 👍 — marked duplicate but validates severity |
| [#57316](https://github.com/anthropics/claude-code/issues/57316) | **Image paste (Ctrl+V) still broken on Windows in v2.1.131** | TUI image input regression on Windows native + WSL + all terminal hosts; breaks multimodal workflows | 6 comments — workarounds (Alt+V, manual paths) insufficient |
| [#53442](https://github.com/anthropics/claude-code/issues/53442) | **Cowork Google Drive MCP cannot see Workspace Shared Drive content** | Enterprise Google Workspace adoption blocker; personal Drive works, Shared Drives don't | 5 comments, 7 👍 — business-critical, no workaround |
| [#57254](https://github.com/anthropics/claude-code/issues/57254) | **SIGTTIN/SIGTTOU suspend on launch (macOS 26 beta)** | Terminal job control regression on upcoming macOS; renders CLI unusable without `fg` workaround | 4 comments — early-adopter blocker, OS compatibility concern |
| [#57473](https://github.com/anthropics/claude-code/issues/57473) | **Per-session 1Hz `sh -c 'sleep 1' + date + ps` exec loop** | Enterprise security/EDR nightmare: generates telemetry storm, battery drain, and detection noise | 2 comments — infosec-sensitive, likely affects managed environments |
| [#57498](https://github.com/anthropics/claude-code/issues/57498) | **Local Agent Mode leaks ~100+ headless `claude` processes** | Memory/resource exhaustion over 2-day uptime; process reaping failure in Desktop's agent spawning | 1 comment — severe reliability issue, affects long-running sessions |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#34735](https://github.com/anthropics/claude-code/pull/34735) | **ci: update actions** | Routine CI maintenance — dependency bumps for GitHub Actions | Open since Mar 15 |
| [#14842](https://github.com/anthropics/claude-code/pull/14842) | **fix: update documentation links to new Claude Code site** | URL migration following site restructure; long-standing docs debt | Open since Dec 20 |
| [#56784](https://github.com/anthropics/claude-code/pull/56784) | **Pin GitHub Actions to commit SHAs** | Security hardening: immutable action references (supply-chain protection) | **Closed** May 8 |
| [#57267](https://github.com/anthropics/claude-code/pull/57267) | **Fix pagination in stale issue auto-close sweep** | Adds paginated GitHub API helper — fixes bot missing issues beyond first page | Open |
| [#57223](https://github.com/anthropics/claude-code/pull/57223) | **feat(frontend-design): add Superpowers Process Gate** | Methodology enforcement: brainstorm → plan → visual TDD → review before implementation | **Closed** May 8 |
| [#57199](https://github.com/anthropics/claude-code/pull/57199) | **fix(code-review): use --body-file to preserve newlines** | Shell quoting fix: `gh pr comment -b` fails with newlines; `--body-file` is robust | Open |
| [#57190](https://github.com/anthropics/claude-code/pull/57190) | **Remove 'statsig.anthropic.com' from firewall script** | Dead domain cleanup — `statsig.anthropic.com` no longer resolves | Open |
| [#57333](https://github.com/anthropics/claude-code/pull/57333) | **Update README.md** | Minor documentation update (no details provided) | Open |

*Note: Only 8 PRs had activity in the last 24h. Two were closed (#56784, #57223); remaining open PRs are maintenance/docs-focused.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **MCP server hot-reload** | [#57496](https://github.com/anthropics/claude-code/issues/57496) — reload env vars without full restart | DevEx friction: MCP config iteration cycles are too slow |
| **Google Workspace write operations** | [#51040](https://github.com/anthropics/claude-code/issues/51040) — Drive/Gmail/Calendar lack move/rename/delete | First-party MCPs are read-heavy; users want full CRUD |
| **Shared Drive / enterprise storage support** | [#53442](https://github.com/anthropics/claude-code/issues/53442) — Workspace Shared Drives invisible | Enterprise adoption requires org-wide storage access |
| **Model parity (CLI ↔ Desktop)** | [#50810](https://github.com/anthropics/claude-code/issues/50810) — Opus 4.7 CLI lag | Release coordination between channels needs tightening |
| **Hook/permission automation robustness** | [#51798](https://github.com/anthropics/claude-code/issues/51798) — regression in programmatic allow | Enterprise automation needs stable contracts |

---

## 6. Developer Pain Points

### 🔴 Critical: Windows CI/CD Path Hardening
**Frequency:** 4th recurrence (#56549 → #56725 → #57415/#57479/#57488/#57495/#57397/#57500/#57503)
**Pattern:** Linux build paths (`/home/runner/work/...`) leak into Windows extension artifacts via `createRequire`
**Impact:** Complete VS Code extension failure on Windows; hours of downtime
**User sentiment:** Frustrated by repeated "lessons unlearned" — [comment](https://github.com/anthropics/claude-code/issues/57415): "regression of the same class of bug"

### 🟠 Dispatch/Cowork Sync Reliability
**Frequency:** Multi-week cluster (#45937, #49545, #57361, #57501)
**Pattern:** Desktop "offline" while tasks work; session bridge auto-disposes; CLI resume works but UI doesn't
**Impact:** Cross-device workflow collapse; Dispatch as collaboration hub is unreliable

### 🟡 Hook/API Contract Stability
**Frequency:** 2.1.116+ regression (#51798)
**Pattern:** PreToolUse `permissionDecision: "allow"` silently behavior-changed
**Impact:** Breaks enterprise security automation; forces version pinning

### 🟡 Process/Resource Management
**Evidence:** [#57498](https://github.com/anthropics/claude-code/issues/57498) (agent leaks), [#57473](https://github.com/anthropics/claude-code/issues/57473) (1Hz exec loop)
**Pattern:** Background tasks lack cleanup; polling implementations are noisy
**Impact:** Battery, memory, EDR telemetry — affects long-running professional use

### 🟢 macOS Beta Compatibility
**Evidence:** [#57254](https://github.com/anthropics/claude-code/issues/57254) (macOS 26 SIGTTIN/SIGTTOU)
**Pattern:** Terminal job control assumptions break on new OS versions
**Impact:** Early adopter/developer preview friction

---

*Digest compiled from 50 issues, 8 PRs, and 2 releases with activity in the 24 hours preceding 2026-05-09.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-09

---

## 1. Today's Highlights

The **v0.130.0 stable release** brings headless remote-control capabilities via `codex remote-control` and expanded plugin marketplace features including bundled hooks visibility and discoverability controls. Meanwhile, the team is actively hardening the app-server infrastructure for daemon-managed deployments and addressing a wave of Windows-specific stability issues. Rate-limit and token consumption concerns continue to dominate community discourse with multiple high-engagement threads.

---

## 2. Releases

**[rust-v0.130.0](https://github.com/openai/codex/releases/tag/rust-v0.130.0)** — Stable release with three major additions:
- **Plugin marketplace enhancements**: Plugin details now expose bundled hooks, and plugin sharing includes link metadata plus discoverability controls ([#21447](https://github.com/openai/codex/pull/21447), [#21495](https://github.com/openai/codex/pull/21495), [#21637](https://github.com/openai/codex/pull/21637))
- **`codex remote-control`**: New simplified entrypoint for starting headless, remotely controllable app-server instances ([#21424](https://github.com/openai/codex/pull/21424))
- **App-server client improvements**: (note: release notes truncated in source)

Multiple alpha builds (alpha.3 through alpha.10) preceded this stable release, indicating an active stabilization cycle.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Rate-limit exhaustion with Business tier on VS Code Windows | Core economic concern; users report unexpectedly rapid token depletion affecting production workflows | 🔥 572 comments, 250 👍 — the most engaged thread in the repo |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** — Request for VS Code-like remote SSH/container development | Fills critical gap for developers working on remote servers; desktop app currently lacks this vs. browser extension | 174 comments, 644 👍 — highest vote count, long-running request |
| [#20161](https://github.com/openai/codex/issues/20161) | **Phone number verification doesn't work** — SSO login broken on new devices, forcing unwanted phone verification | Auth regression breaking multi-device workflows; now closed but indicates SSO/phone linking fragility | 101 comments, 77 👍; closed 2026-05-09 |
| [#8259](https://github.com/openai/codex/issues/8259) | **Format Markdown tables for human readability** — TUI renders misaligned whitespace in tables | Quality-of-life issue affecting daily readability of model outputs; surprisingly persistent given TUI maturity | 31 comments, 115 👍 |
| [#20552](https://github.com/openai/codex/issues/20552) | **Toggle File Tree unreliable in macOS app** — Menu enabled but tree doesn't appear | Basic UI reliability broken; suggests state management issues in desktop app shell | 26 comments, 7 👍 |
| [#18993](https://github.com/openai/codex/issues/18993) | **Unable to open past conversation history in VS Code extension** — Session history inaccessible | Data loss perception; breaks continuity for iterative development workflows | 24 comments, 41 👍 |
| [#4432](https://github.com/openai/codex/issues/4432) | **First-class multi-account auth via `--auth-profile`** — Single-account assumption forces manual `CODEX_HOME` swapping | Critical for consultants, agencies, and enterprise users with multiple clients/tenants | 12 comments, 94 👍 |
| [#21671](https://github.com/openai/codex/issues/21671) | **`/compact` fails with unknown `service_tier` parameter in 0.129.0** | Regression in core context management feature; blocks long-running sessions | 5 comments, 3 👍; fresh regression with clear repro |
| [#21746](https://github.com/openai/codex/issues/21746) | **Token usage through the roof because of extra LLM calls** — Safety checks triggering excessive LLM invocations | Companion to #14593; identifies root cause in safety-check architecture | 3 comments, 1 👍; newly filed with diagnostic detail |
| [#20567](https://github.com/openai/codex/issues/20567) | **Windows app spawns ~1000 git commands/minute** — Process storm from file watcher or git integration | Severe performance degradation; suggests missing debouncing or watcher loop bug | 5 comments, 0 👍; Enterprise customer impact |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#21844](https://github.com/openai/codex/pull/21844) | **Ignore stale `/tmp` git markers in project discovery** — Security fix for world-writable sticky directories; preserves real repos below `/tmp` | Open |
| [#21819](https://github.com/openai/codex/pull/21819) | **Cover sandbox link write behavior** — Integration tests for `apply_patch` sandbox escape via symlink aliases | Open |
| [#21845](https://github.com/openai/codex/pull/21845) | **Characterize macOS sandbox link writes** — Lower-level macOS workspace-write sandbox boundary tests | Open |
| [#21396](https://github.com/openai/codex/pull/21396) | **Plugin marketplace CLI commands** — `list`, `add`, `remove` marketplace plugins with stable `plugin@marketplace` IDs | Open |
| [#21617](https://github.com/openai/codex/pull/21617) | **Multi-environment `apply_patch` selection** — Routes patches to correct environment with selector parsing | Open, code-reviewed |
| [#21843](https://github.com/openai/codex/pull/21843) | **Remove TCP websocket listener from app-server** — Cleanup now that `remote_control` and stdio/Unix sockets handle connectivity | Open |
| [#21590](https://github.com/openai/codex/pull/21590) | **Fast Windows work drive for CI** — Dev Drive VHD provisioning for temp/cache paths; Windows CI perf | Open |
| [#21847](https://github.com/openai/codex/pull/21847) | **SQLite: no more destructive version bumps** — Makes state DB load-bearing with graceful migrations vs. wipes | Open |
| [#21768](https://github.com/openai/codex/pull/21768) | **`--dangerously-bypass-hook-trust` CLI flag** — Escape hatch for headless/non-interactive hook trust bypass | Open |
| [#21649](https://github.com/openai/codex/pull/21649) | **Avoid startup writes for ready DBs** — Eliminates writer slot contention on healthy app-server restart | Open |

---

## 5. Feature Request Trends

**Remote/Headless Operations**: Strong demand for remote development (#10450), headless app-server management (#20718, #21843), and local browser integration in remote sessions (#21816). The `codex remote-control` release directly addresses this trajectory.

**Windows Parity**: Persistent gap in Computer Use support (#19305), browser extension reliability (#21741, #21822, #21700), and terminal input handling (#21638). CI investments (#21590, #21591) suggest engineering prioritization.

**Multi-Account/Multi-Tenant**: Enterprise and consultant workflows need first-class multi-account auth (#4432) and clearer session isolation.

**Plugin Ecosystem**: Marketplace CLI (#21396), bundled hooks visibility, and plugin trust mechanisms indicate platformization push with accompanying safety concerns.

---

## 6. Developer Pain Points

| Category | Pattern | Evidence |
|----------|---------|----------|
| **Token Economics** | Unpredictable, rapid rate-limit exhaustion | #14593, #16889, #21746, #20988 — "1 message ≈ 6% of 5h window"; safety checks spawning hidden LLM calls |
| **Context/Session Integrity** | Auto-compact losing task details, history inaccessible, goals dropped mid-session | #18720, #18993, #19910, #21671 — compaction regressions in successive releases |
| **Windows Stability** | Browser extension disconnections, git process storms, paste duplication, locale-specific failures | #20567, #21638, #21741, #21822, #21851 — disproportionate issue volume vs. platform share |
| **Auth Friction** | SSO/phone verification loops, MCP OAuth audience mismatches, single-account limitation | #20161, #13891, #4432 — breaks automation and multi-device flows |
| **Tooling Transparency** | Model searches excessively (#20988, #21836), tools advertised but not exposed (#21791, #18328) — UI/runtime mismatch erodes trust | Multiple closed/open pairs suggest iterative fixes without systemic resolution |

---

*Digest compiled from github.com/openai/codex activity on 2026-05-09.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-09

## Today's Highlights
A critical P1 performance regression in v0.35.3 is dominating community attention, with users confirming downgrade to v0.34.0 fully resolves minute-plus response times. Meanwhile, the team is advancing internal infrastructure with a new bot delegation model and Windows reliability fixes, while authentication and tier-detection bugs continue generating frustrated user reports.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#24294](https://github.com/google-gemini/gemini-cli/issues/24294) | **Extreme performance regression in v0.35.3; resolvable by downgrading to v0.34.0** | Confirmed P1 regression where simple prompts take 80+ seconds; clear downgrade workaround isolates the bug | 28 👍, active confirmation from multiple users; marked 🔒 maintainer-only |
| [#24184](https://github.com/google-gemini/gemini-cli/issues/24184) | **"This is taking a bit longer, we're still on it" — profane user vent** | Embodies peak user frustration with unacknowledged issues; title references a common CLI error message | 15 👍, 14 comments; reflects sentiment that daily updates aren't fixing core problems |
| [#19936](https://github.com/google-gemini/gemini-cli/issues/19936) | **Stuck in loop of verification** | Pro account holders trapped in auth loops despite successful browser verification; blocks all usage | 5 👍, 12 comments; recurring pattern with account tier detection |
| [#23988](https://github.com/google-gemini/gemini-cli/issues/23988) | **Gemini-cli stopped working completely — hangs on LLM call** | Complete hang on first prompt, 15+ minute delays; `/quit` and `/model` unresponsive | 11 comments; affects v0.36.0 as well, suggesting broader platform issue |
| [#24222](https://github.com/google-gemini/gemini-cli/issues/24222) | **Can't use Gemini 3.1 Pro Preview with AI Pro Plan** | Paid subscribers blocked from latest model; suspected shadow ban / rate-limit misclassification | 7 👍, 9 comments; "Bad gf vibes" follow-up in [#24208](https://github.com/google-gemini/gemini-cli/issues/24208) |
| [#24322](https://github.com/google-gemini/gemini-cli/issues/24322) | **Gemini CLI unusable for days despite reinstalls; requesting refund guidance** | Total failure state persisting across reinstalls and cache clears; user seeking billing recourse | 7 comments, 1 👍; signals trust erosion when basic recovery steps fail |
| [#23984](https://github.com/google-gemini/gemini-cli/issues/23984) | **Infinite 429 retry loops & massive context bloat on Pro accounts (v0.35.2)** | Paid users hit aggressive throttling despite zero quota usage; recursive filesystem scan bloats context | 9 👍, 4 comments; indicates quota/tier detection system is fundamentally misidentifying Pro users |
| [#23973](https://github.com/google-gemini/gemini-cli/issues/23973) | **Pro account was treated as standard-tier** | Root cause for many quota issues — backend misreports subscription tier in logs | 10 comments, 1 👍; connects to broader authentication/entitlement crisis |
| [#26402](https://github.com/google-gemini/gemini-cli/issues/26402) | **`/clear` does not abort in-flight stream; `update_topic` leaks Active Topic into next session** | Race condition corrupts session state; distinct from previously "fixed" marker leak issue | 3 comments, 2 👍; reveals architectural fragility in session lifecycle management |
| [#19708](https://github.com/google-gemini/gemini-cli/issues/19708) | **Fix unsafe type assertions (Refactoring Plan)** | Long-running meta-issue for code quality; replacing `as Type` with Zod/runtime validation | 18 comments, 0 👍; maintenance burden affecting reliability |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#26717](https://github.com/google-gemini/gemini-cli/pull/26717) | **feat(bot): implement scheduled agent and worker delegation model** | New `WORKER` agent with zero-trust delegation; refactors `interactive` and `metrics` brains for modular task routing | Open |
| [#26392](https://github.com/google-gemini/gemini-cli/pull/26392) | **fix(windows): Resolve hangs, zombie processes, and improve subagent reliability** | Critical Windows fixes: process management, log persistence, subagent stability, next-gen model support | Open |
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | **fix(core): externalize https-proxy-agent to fix proxy support** | Resolves `TypeError: HttpsProxyAgent is not a constructor` by removing from esbuild bundle | Open |
| [#26652](https://github.com/google-gemini/gemini-cli/pull/26652) | **fix(core): use snake_case `thought_signature` for Vertex AI compatibility** | Fixes 400 INVALID_ARGUMENT on Vertex backend; convention mismatch (`thoughtSignature` vs `thought_signature`) | Open |
| [#26714](https://github.com/google-gemini/gemini-cli/pull/26714) | **feat(cli): merge Auto modes into a single Auto mode** | Unifies "Auto (Gemini 3)" and "Auto (Gemini 2.5)" into dynamic, context-aware routing | Open |
| [#26324](https://github.com/google-gemini/gemini-cli/pull/26324) | **fix(cli): prevent ghost text wrapping infinite loop** | Stops interactive CLI hang on long unbroken ghost-text inputs (e.g., `@getskill.sh:3`) | Open |
| [#24528](https://github.com/google-gemini/gemini-cli/pull/24528) | **feat(core): add compression evaluation framework** | Synthetic conversation generator + infrastructure for measuring compression strategy regressions | Open |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | **feat(core): union-find context compaction for AgentHistoryProvider** | Alternative to binary split: semantic clustering for context management via union-find | Open |
| [#26139](https://github.com/google-gemini/gemini-cli/pull/26139) | **fix(cli): fix bugs from stale closures in FooterConfigDialog** | Resolves `useSettingsStore` stale closure issues in footer configuration | Open |
| [#24398](https://github.com/google-gemini/gemini-cli/pull/24398) | **fix(cli): re-notify reintroduced slash command conflicts** | Tracks active conflicts instead of permanent suppression; alerts on regression | Open |

---

## Feature Request Trends

1. **Unified Model Routing** — Strong push to simplify Auto mode proliferation; [#26714](https://github.com/google-gemini/gemini-cli/pull/26714) directly addresses this by merging dual Auto modes into context-aware single routing
2. **Robust Evaluation Infrastructure** — Multiple PRs ([#24528](https://github.com/google-gemini/gemini-cli/pull/24528), [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) investing in behavioral/component evals and compression benchmarking to prevent regressions
3. **Windows Parity** — [#26392](https://github.com/google-gemini/gemini-cli/pull/26392) represents concentrated effort to bring Windows reliability to Unix-equivalent standards
4. **Agent Protocol Standardization** — ACP compliance work ([#26676](https://github.com/google-gemini/gemini-cli/pull/26676)) and remote subagent protocols ([#25303](https://github.com/google-gemini/gemini-cli/pull/25303)) indicate ecosystem expansion goals

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Authentication & tier detection failures** | [#19936](https://github.com/google-gemini/gemini-cli/issues/19936), [#23973](https://github.com/google-gemini/gemini-cli/issues/23973), [#24222](https://github.com/google-gemini/gemini-cli/issues/24222), [#24298](https://github.com/google-gemini/gemini-cli/issues/24298) | **Critical** — Paid users blocked, no clear escalation path |
| **Performance regressions in recent versions** | [#24294](https://github.com/google-gemini/gemini-cli/issues/24294) (v0.35.3), [#23988](https://github.com/google-gemini/gemini-cli/issues/23988) (v0.36.0) | **Critical** — Simple prompts taking 80+ seconds or hanging indefinitely |
| **Aggressive 429 throttling on Pro accounts** | [#23984](https://github.com/google-gemini/gemini-cli/issues/23984), [#24208](https://github.com/google-gemini/gemini-cli/issues/24208) | **High** — Quota system misidentifies paid users as free/standard |
| **Session state corruption** | [#26402](https://github.com/google-gemini/gemini-cli/issues/26402), [#24036](https://github.com/google-gemini/gemini-cli/issues/24036) | **Medium-High** — `/clear` race conditions, copy/paste regressions |
| **Stale code quality debt** | [#19708](https://github.com/google-gemini/gemini-cli/issues/19708), [#19718](https://github.com/google-gemini/gemini-cli/issues/19718) | **Medium** — Unsafe type assertions, direct `process.env` mutation in tests |
| **Documentation accuracy** | [#19968](https://github.com/google-gemini/gemini-cli/issues/19968) | **Low** — Extension naming rules incorrectly documented |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-09

---

## 1. Today's Highlights

GitHub shipped **v1.0.44** and **v1.0.44-3** with significant extensibility improvements: hooks can now bypass the LLM entirely for direct request handling, and slash commands gained mid-input positioning with multi-skill invocation. Meanwhile, the community surfaced critical bugs in non-interactive mode, MCP server connectivity for custom agents, and persistent terminal rendering regressions—suggesting the CLI is maturing its plugin/agent architecture faster than its stability foundations.

---

## 2. Releases

### [v1.0.44](https://github.com/github/copilot-cli/releases/tag/v1.0.44) — 2026-05-08
- **Path completion stability**: `/add-dir` no longer flickers or gets intercepted by `@` and `#` pickers
- **Flexible slash commands**: Commands can appear mid-input; multiple skills invocable in single message
- **Hook LLM bypass**: `userPromptSubmitted` hooks can handle requests directly without model calls

### [v1.0.44-3](https://github.com/github/copilot-cli/releases/tag/v1.0.44-3) — 2026-05-08
- **Confirmed LLM bypass capability** for hooks (expanded from v1.0.44)
- **Performance**: Faster `/user list` and `/user switch` for multi-account users

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2630](https://github.com/github/copilot-cli/issues/2630) | Custom agent `mcp-servers` not connected in CLI sub-agent or `--prompt` contexts | **Breaks agent composability**—MCP tools are silently dropped when agents delegate work, undermining the custom agent architecture | 6 comments, no upvotes; enterprise workflow blocker |
| [#2543](https://github.com/github/copilot-cli/issues/2543) | Concurrent sub-agent events corrupt session state permanently | **Data integrity failure**: `tool_use`/`tool_result` desync renders sessions unusable; requires restart | 4 comments, 2 upvotes; reliability concern for multi-agent workflows |
| [#1412](https://github.com/github/copilot-cli/issues/1412) | PowerShell tools trigger enterprise security alerts | **Enterprise adoption blocker**: Elastic SIEM flags Copilot CLI as defense evasion; Security Ops actively intervenes | 3 comments, 3 upvotes; long-running, unresolved |
| [#1433](https://github.com/github/copilot-cli/issues/1433) | `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` fails with external/NFS paths | **Cross-platform config fragility**: Custom instructions broken when stored outside working tree on Linux | 3 comments, 6 upvotes; highest engagement in this batch |
| [#3189](https://github.com/github/copilot-cli/issues/3189) | `copilot -p` exits silently with code 1, no logs (macOS) | **Observability crisis**: Non-interactive mode fails completely without diagnostics; breaks CI/scripting workflows | 3 comments; regression on 1.0.44-1 |
| [#3200](https://github.com/github/copilot-cli/issues/3200) | `/delegate` forces commit/push without opt-out | **Workflow friction**: Delegation is too opinionated for iterative local work | 3 comments; feature gap vs. user expectations |
| [#3195](https://github.com/github/copilot-cli/issues/3195) | BYOK vLLM: `reasoning` field ignored, events not fired | **BYOK interoperability gap**: Provider-specific field names break event streaming; Copilot only handles `reasoning_content` | 2 comments, 1 upvote; BYOK ecosystem fragility |
| [#3208](https://github.com/github/copilot-cli/issues/3208) | BYOK Azure: `wire_api: completions` ignored; hardcoded Responses API rejected | **Azure enterprise broken**: Config override silently bypassed; API version mismatch with Azure OpenAI | 1 comment; configuration system trust erosion |
| [#3209](https://github.com/github/copilot-cli/issues/3209) | Hosted-mode agent loop won't autonomously call write/edit tools | **Premium path regression**: Even with auto-allowed permissions, hosted mode refuses code generation—core value proposition compromised | 0 comments; newly filed, high severity |
| [#3205](https://github.com/github/copilot-cli/issues/3205) | Emoji table misalignment regression (v1.0.43) | **Polish/UX debt**: #2764 claimed fixed; persists with extra pipe characters leaking into cells | 0 comments; quality signal |

---

## 4. Key PR Progress

| # | PR | Status | Significance |
|---|-----|--------|------------|
| [#2800](https://github.com/github/copilot-cli/pull/2800) | Add initial devcontainer configuration | **OPEN** (since Apr 17) | Contributor experience; stalled, needs maintainer review |
| [#3199](https://github.com/github/copilot-cli/pull/3199) | Update Homebrew installation commands | **OPEN** | Docs fix: CLI tools relocated in Homebrew cask structure; community-contributed, ready to merge |

*Note: Only 2 PRs updated in last 24h. Both are documentation/infrastructure; no feature or bugfix PRs in active review.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Agent lifecycle hooks** | [#2253](https://github.com/github/copilot-cli/issues/2253) (`preAgentStop`, closed as implemented) | ✅ Shipped; pattern established for deterministic guardrails |
| **Non-interactive / CI reliability** | [#3189](https://github.com/github/copilot-cli/issues/3189) silent failures, [#3203](https://github.com/github/copilot-cli/issues/3203) pre-release installs via `copilot update` | 🔥 Critical; scripting use cases expanding |
| **BYOK provider robustness** | [#3195](https://github.com/github/copilot-cli/issues/3195) vLLM field mapping, [#3208](https://github.com/github/copilot-cli/issues/3208) Azure API routing, [#2710](https://github.com/github/copilot-cli/issues/2710) provider API surface proposal | 🔥 Recurring; "three separate surfaces" confusion indicates architecture documentation gap |
| **Enterprise governance / MCP registry enforcement** | [#3207](https://github.com/github/copilot-cli/issues/3207) (closed, security-related) | ⚠️ Governance catching up to extensibility |
| **Timeline/searchable session history** | [#2170](https://github.com/github/copilot-cli/issues/2170) (tmux-like search) | 📈 Long-running; session management maturing |
| **Windows editor integration** | [#1882](https://github.com/github/copilot-cli/issues/1882) (.bat/.cmd `$env:EDITOR` support) | 📈 Platform parity gap |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Terminal rendering regressions** | High 🔥 | Medium | [#3205](https://github.com/github/copilot-cli/issues/3205), [#3204](https://github.com/github/copilot-cli/issues/3204), [#2764](https://github.com/github/copilot-cli/issues/2764) — emoji tables, markdown links in tables; fixes don't stick |
| **Agent/MCP connectivity gaps** | High 🔥 | High | [#2630](https://github.com/github/copilot-cli/issues/2630), [#2543](https://github.com/github/copilot-cli/issues/2543), [#3209](https://github.com/github/copilot-cli/issues/3209) — custom agents lose tools, sessions corrupt, hosted mode refuses writes |
| **BYOK configuration opacity** | Medium | High | [#3208](https://github.com/github/copilot-cli/issues/3208), [#3195](https://github.com/github/copilot-cli/issues/3195), [#2710](https://github.com/github/copilot-cli/issues/2710) — config overrides ignored, field names inconsistent, docs fragmented |
| **Non-interactive mode fragility** | Medium | High | [#3189](https://github.com/github/copilot-cli/issues/3189) — silent failures with zero observability breaks automation |
| **Enterprise security friction** | Low (persistent) | High | [#1412](https://github.com/github/copilot-cli/issues/1412) — PowerShell triggers SIEM alerts; 3 months unresolved |
| **Keyboard input edge cases** | Emerging | Medium | [#3206](https://github.com/github/copilot-cli/issues/3206) Ctrl+Backspace, [#3198](https://github.com/github/copilot-cli/issues/3198) Ctrl+C behavior, [#3211](https://github.com/github/copilot-cli/issues/3211) 'a' character dropped — terminal emulator compatibility debt |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-05-08 to 2026-05-09.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-09

## Today's Highlights

The past 24 hours saw intense Windows-focused engineering activity, with 6 new issues and 4 PRs targeting PowerShell compatibility, console handling, and line-ending preservation. A critical fix for malformed tool call corruption (#2165) landed alongside telemetry improvements and adaptive shell timeouts, while the long-running request for full thinking trace visibility (#1864) continues to gather community momentum with 10 upvotes.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) | Full thinking traces not displayed in CLI | Core transparency gap; developers need reasoning visibility for debugging agent behavior and building trust in model decisions | 12 comments, 10 👍 — highest engagement in dataset |
| [#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152) | Global `~/.kimi/AGENTS.md` for multi-project conventions | Scalability blocker for polyrepo workflows; manual per-project config is unsustainable at enterprise scale | 3 comments, 2 👍 |
| [#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165) | Invalid tool call corrupts entire session | **Data loss / session destruction bug**; malformed JSON in history permanently breaks conversation replay | 2 comments; fix in PR #2196 |
| [#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178) | Windows `kimi.exe` blank FileVersionInfo breaks VS Code extension | Integration failure with IDE ecosystem; version detection relies on PE metadata | 2 comments |
| [#2189](https://github.com/MoonshotAI/kimi-cli/issues/2189) | Plan mode triggers garbled characters on next interaction | UX regression in core workflow feature; affects Windows VS Code users specifically | 1 comment |
| [#2197](https://github.com/MoonshotAI/kimi-cli/issues/2197) | Windows console TrueType font reset on `kaos.exec()` subprocess | Terminal state corruption degrades readability; fix in PR #2199 | Fresh, no comments yet |
| [#2195](https://github.com/MoonshotAI/kimi-cli/issues/2195) | Shell timeout rigid at 60s, not configurable | Blocks long-running builds, clones, and package installs; fix in PR #2200 | Fresh, no comments yet |
| [#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194) | Agent generates PowerShell 7.x syntax incompatible with default 5.x | Windows default environment mismatch causes command failures | Fresh; related to #2192 |
| [#2193](https://github.com/MoonshotAI/kimi-cli/issues/2193) | Background auto-trigger permanently stops after 3 LLM timeouts | **Silent failure mode** for long-running async tasks; hardcoded retry limit with no recovery | Fresh, no comments yet |
| [#2191](https://github.com/MoonshotAI/kimi-cli/issues/2191) | `StrReplaceFile` silently converts CRLF→LF, forcing Python workarounds | Cross-platform file integrity issue; breaks Git workflows on Windows, unblocks native tool usage | Fresh; references unmerged PR #1953 |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) | Adaptive shell timeouts for long commands | Extends timeout automatically for slow patterns (git clone, builds, installs) while preserving 60s default for normal ops | Open |
| [#2199](https://github.com/MoonshotAI/kimi-cli/pull/2199) | Avoid console windows on Windows `kaos.exec()` | Adds `CREATE_NO_WINDOW` flag to prevent subprocess console spam; fixes #2197 | Open |
| [#2198](https://github.com/MoonshotAI/kimi-cli/pull/2198) | Defer ACP commands update to prevent race condition | Fixes v1.41.0 regression where slash commands fail to appear due to premature server message | Open |
| [#2196](https://github.com/MoonshotAI/kimi-cli/pull/2196) | Sanitize malformed history tool calls | Prevents invalid JSON in historical tool calls from permanently corrupting session replay; fixes #2165 | Open |
| [#2186](https://github.com/MoonshotAI/kimi-cli/pull/2186) | Switch Windows Shell backend from PowerShell to Git Bash | **Architectural shift**: POSIX semantics via `bash.exe` to resolve PowerShell compatibility matrix hell; resolves #1618 | Open |
| [#2190](https://github.com/MoonshotAI/kimi-cli/pull/2190) | Telemetry: app_name, build_sha, remote provenance | Improves observability for compaction attribution and build tracking in distributed environments | Open |
| [#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) | Visual context progress bar with color coding | Unicode block bar replacing plain-text `context: 0.0%`; matches `claude-hud` visual standard | Open (since Apr 21) |
| [#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177) | Clear partial UI output on LLM retry | Fixes concatenation bug where failed stream content persists across tenacity retries | Open |
| [#2187](https://github.com/MoonshotAI/kimi-cli/pull/2187) | Bump pillow to 12.2.0 for CVE-2026-25990 | Security patch for out-of-bounds PSD write; unblocks enterprise installs with strict vulnerability scanning | Open |
| [#2185](https://github.com/MoonshotAI/kimi-cli/pull/2185) | API-key auth bypass for ACP OAuth | Enables IDE plugin usage (JetBrains) without forced OAuth when `api_key` already configured | Open |

---

## Feature Request Trends

1. **Observability & Transparency** — Thinking traces (#1864) dominate demand; users want reasoning visibility comparable to web interface
2. **Cross-Project Configuration** — Global `AGENTS.md` (#2152) signals need for organizational-level convention sharing, not per-repo duplication
3. **Visual Status Communication** — Context progress bar (#1972/#2188) represents broader trend: CLI needs richer visual state than plain text percentages
4. **Telemetry & Debugging** — Build provenance and compaction attribution (#2190) show operational maturity demands from production users

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows as second-class citizen** | #2178, #2191, #2192, #2194, #2197, #2186, #2199 — 7 items in 24h | 🔴 Critical |
| **PowerShell version fragmentation** | #2194 (7.x vs 5.x), #2192 (Unix pipeline incompatibility), #2186 (proposed: abandon PowerShell entirely) | 🔴 Critical |
| **Silent/hard failures with no recovery** | #2193 (permanent background trigger death), #2165 (session corruption), #2195 (timeout kills long tasks) | 🟡 High |
| **CRLF/LF line ending hazards** | #2191, unmerged #1953 — breaks Git workflows, forces workarounds | 🟡 High |
| **Configuration portability** | #2152 (no global config), #2185 (ACP ignores API key), #762 (`SSL_CERT_FILE` ignored) | 🟡 High |

**Windows engineering debt** is the dominant story: PowerShell compatibility matrix, console state management, and CRLF handling collectively consume disproportionate issue/PR volume. The proposed Git Bash migration (#2186) would be a breaking but potentially unifying architectural fix.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-09

## Today's Highlights

The community is actively hardening OpenCode's reliability with multiple PRs targeting session management, HTTP API coverage, and memory-related crashes. A significant cluster of issues around cost tracking for custom providers and unbounded retry logic continues to draw attention, while new feature requests are pushing toward better skill system configurability and expanded MCP tooling.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | Free model "usage exceeded" error | Questions legitimacy of free tier limits; users report hitting caps after heavy sessions | 20 comments, 7 👍 — most engaged issue |
| [#22100](https://github.com/anomalyco/opencode/issues/22100) | OpenCode running `pip3` unexpectedly | Security concern: automatic package installation without explicit user consent | 10 comments, security-focused discussion |
| [#20045](https://github.com/anomalyco/opencode/issues/20045) | Path format mismatch: `edit` vs `external_directory` | Breaks agent-level permission rules silently; path handling inconsistency | 9 comments, configuration-heavy |
| [#25270](https://github.com/anomalyco/opencode/issues/25270) | Duplicate model responses | Core LLM integration bug degrading user experience | 7 comments, screenshot evidence |
| [#21299](https://github.com/anomalyco/opencode/issues/21299) | Markdown rendering broken post-opentui upgrade | UI regression affecting readability of all assistant output | 7 comments, 1 👍, cross-platform confirmed |
| [#24061](https://github.com/anomalyco/opencode/issues/24061) | ACP Registry agent stuck loading in Zed | Integration failure between OpenCode and Zed editor ecosystem | 6 comments, editor-specific |
| [#17223](https://github.com/anomalyco/opencode/issues/17223) | Cost tracking fails for custom providers | Financial transparency gap for power users; 15 👍 indicates strong demand | 3 comments, 15 👍 |
| [#21960](https://github.com/anomalyco/opencode/issues/21960) | Session retry loops forever | Unbounded retries waste resources and hang sessions | 2 comments, well-diagnosed root cause |
| [#26339](https://github.com/anomalyco/opencode/issues/26339) | Git integration spawns processes, locks UI | Performance/stability issue in desktop app | 4 comments, new (May 8) |
| [#26424](https://github.com/anomalyco/opencode/issues/26424) | Request: `skills.exclude` config | Skill directory scanning is too aggressive; users want opt-out control | 1 comment, fresh feature request |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#26425](https://github.com/anomalyco/opencode/pull/26425) | Harden HttpApi exercise coverage | Expands test coverage with auth policies, progress controls, and CI gates | Open |
| [#26414](https://github.com/anomalyco/opencode/pull/26414) | Hydrate session before prompt submit | Fixes [#23903](https://github.com/anomalyco/opencode/issues/23903) — "Failed to send prompt" crash after restart | Open |
| [#26413](https://github.com/anomalyco/opencode/pull/26413) | Fix workspace session detach ownership | Corrects sync ownership to source project, adds regression test | Open |
| [#26422](https://github.com/anomalyco/opencode/pull/26422) | Default custom provider capabilities to `true` | Removes restrictive defaults on `reasoning`, `attachment`, `tool_use` for custom models | Open |
| [#26420](https://github.com/anomalyco/opencode/pull/26420) / [#26419](https://github.com/anomalyco/opencode/pull/26419) | Make bash tool description optional | Fixes [#13618](https://github.com/anomalyco/opencode/issues/13618) / [#20669](https://github.com/anomalyco/opencode/issues/20669) — reduces friction in tool use | Open (duplicate PRs) |
| [#24289](https://github.com/anomalyco/opencode/pull/24289) | Repair truncated JSON tool inputs | Uses `jsonrepair` to fix malformed LLM tool arguments; fixes 3 reported issues | Open |
| [#24079](https://github.com/anomalyco/opencode/pull/24079) | Add `disable_vcs_diff` experimental flag | Mitigates MEMORY/OOM crashes by skipping automatic diff fetching | Open |
| [#24712](https://github.com/anomalyco/opencode/pull/24712) | Add native LLM core foundation | Major architectural addition: Effect-based LLM core with typed schemas, golden tests | Closed (merged) |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | Add Kiro (AWS) provider | Expands provider ecosystem to AWS Kiro subscription service | Open |
| [#14177](https://github.com/anomalyco/opencode/pull/14177) | Bearer token auth for Google Vertex Anthropic | Fixes [#14175](https://github.com/anomalyco/opencode/issues/14175); enables alternative auth flow | Open |

---

## Feature Request Trends

1. **MCP ecosystem expansion** — Requests for `delete`/`update` operations ([#4570](https://github.com/anomalyco/opencode/issues/4570)), non-interactive CLI setup ([#26402](https://github.com/anomalyco/opencode/issues/26402)), and better documentation for Forgejo/Codeberg Actions ([#26390](https://github.com/anomalyco/opencode/issues/26390))

2. **Skill system refinement** — `skills.exclude` config ([#26424](https://github.com/anomalyco/opencode/issues/26424)), proper `/skill-name` invocation ([#24831](https://github.com/anomalyco/opencode/issues/24831)), and skill directory granularity

3. **Observability & cost control** — Cost tracking for custom providers ([#17223](https://github.com/anomalyco/opencode/issues/17223), [#24113](https://github.com/anomalyco/opencode/issues/24113)), LSP diagnostic severity configuration ([#17869](https://github.com/anomalyco/opencode/issues/17869))

4. **Platform & integration reach** — PWA support ([#19173](https://github.com/anomalyco/opencode/pull/19173)), mobile touch optimization ([#18767](https://github.com/anomalyco/opencode/pull/18767)), Zed/ACP stability ([#24061](https://github.com/anomalyco/opencode/issues/24061))

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session reliability** | Retry loops forever ([#21960](https://github.com/anomalyco/opencode/issues/21960)), session crashes on restart ([#23903](https://github.com/anomalyco/opencode/issues/23903)), agent stops mid-task ([#21534](https://github.com/anomalyco/opencode/issues/21534)) | High — core workflow blocker |
| **Memory/performance** | OOM crashes from VCS diff fetching ([#24079](https://github.com/anomalyco/opencode/pull/24079)), git process spawning ([#26339](https://github.com/anomalyco/opencode/issues/26339)) | High — desktop app stability |
| **Custom provider second-class support** | Cost tracking broken ([#17223](https://github.com/anomalyco/opencode/issues/17223), [#24113](https://github.com/anomalyco/opencode/issues/24113)), capability defaults too restrictive ([#26422](https://github.com/anomalyco/opencode/pull/26422)) | Medium — affects power users |
| **Security model clarity** | Unexpected `pip3` execution ([#22100](https://github.com/anomalyco/opencode/issues/22100)), plan mode file changes ([#10741](https://github.com/anomalyco/opencode/issues/10741)) | Medium — trust and sandboxing concerns |
| **UI/terminal regressions** | Markdown rendering broken ([#21299](https://github.com/anomalyco/opencode/issues/21299)), pasted text expansion ([#26375](https://github.com/anomalyco/opencode/issues/26375)), HTML entity auto-conversion ([#26285](https://github.com/anomalyco/opencode/issues/26285)) | Medium — daily friction |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-09

## Today's Highlights

The Pi project saw intense development activity with 17 PRs and 50 issues updated in the last 24 hours, dominated by a major "big refactor" that closed numerous feature requests and bug reports. Key infrastructure improvements landed including cross-device config sync, Windows Zig support, and critical fixes for DeepSeek/Kimi API compatibility. The maintainers appear to be aggressively clearing the backlog ahead of a significant architectural release.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3929](https://github.com/earendil-works/pi/issues/3929) | Bun startup crash when `bun pm bin -g` fails | Critical path regression for Bun users; follows incomplete fix from prior issues. Shows package manager integration remains fragile. | 9 comments, 3 👍 — active debugging |
| [#4185](https://github.com/earendil-works/pi/issues/4185) | Zsh/tmux installation — bad colors/contrast | First-run UX degradation; terminal color detection is a recurring TUI reliability issue. Tagged for big refactor. | 7 comments, open and awaiting resolution |
| [#2616](https://github.com/earendil-works/pi/issues/2616) | SessionManager is sync-only, blocks async persistence | Architectural debt blocking database-backed deployments; affects enterprise/scaled use cases. Closed as resolved. | 5 comments, significant technical discussion |
| [#2317](https://github.com/earendil-works/pi/issues/2317) | Stuck in working state | Reliability bug affecting core loop; free-tier users particularly impacted. Long-standing issue finally closed. | 5 comments, user frustration evident |
| [#3978](https://github.com/earendil-works/pi/issues/3978) | `pi config` hardcodes `~/.pi/agent/` path | Config discoverability bug; breaks custom skill paths. Now fixed via PR #4299. | 4 comments, good repro with screenshot |
| [#4317](https://github.com/earendil-works/pi/issues/4317) | Persist timing metadata for assistant message parts | Observability enhancement for debugging/agent evaluation. Closed for refactor but well-specified. | 3 comments, clear use case |
| [#4302](https://github.com/earendil-works/pi/issues/4302) | TUI crashes on over-wide changed line in narrow terminal | Robustness issue; already fixed by PR #4301. Demonstrates responsive TUI challenges. | 3 comments, crash log provided |
| [#4313](https://github.com/earendil-works/pi/issues/4313) | Limit rendered message history (virtual scrollback) | Performance/scalability concern for long sessions. Closed pending refactor; `/compact` workaround exists. | 3 comments, UX pain point |
| [#4278](https://github.com/earendil-works/pi/issues/4278) | Slash command autocomplete not applied for queued submission | Interaction detail: `alt+enter` vs `enter` behavior divergence. Polish issue affecting power users. | 3 comments, includes agent analysis |
| [#4326](https://github.com/earendil-works/pi/issues/4326) | pi-mcp-adapter: non-string tool descriptions crash TUI | Type safety gap in MCP bridge; crashes on malformed server responses. Closed for refactor. | 2 comments, clear bug pattern |

---

## Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#4331](https://github.com/earendil-works/pi/pull/4331) | Cmd+V image paste via empty bracketed paste detection | Enables native image paste in macOS terminals by detecting empty bracketed paste sequences | Major UX improvement for multimodal workflows |
| [#4329](https://github.com/earendil-works/pi/pull/4329) | `--mode worker-loop` for bus-driven task dispatch | Adds Unix-socket message bus subscriber mode; replaces external wrapper in production deployments | Infrastructure for headless/agentic orchestration |
| [#4327](https://github.com/earendil-works/pi/pull/4327) | Wrap list items with indent | TUI readability fix for narrow terminals; handles GPT's list-heavy output | Polish with visual comparison provided |
| [#4299](https://github.com/earendil-works/pi/pull/4299) | Preserve `.agents` provenance in skill metadata | Fixes #3978; properly tracks skill source directories for UI grouping | Config system correctness |
| [#4320](https://github.com/earendil-works/pi/pull/4320) | Windows platform support for Zig implementation | Cross-platform replacement of POSIX APIs across 12 files | Expands platform matrix significantly |
| [#4318](https://github.com/earendil-works/pi/pull/4318) | Move changelog ack state to `state.json` | Separates user-managed settings from machine state; dotfile-safe | Developer experience / config hygiene |
| [#4312](https://github.com/earendil-works/pi/pull/4312) / [#4310](https://github.com/earendil-works/pi/pull/4310) | DeepSeek/Kimi tool schema + auto-detection | Null parameters fallback and model detection; unblocks two popular providers | API compatibility critical path |
| [#4304](https://github.com/earendil-works/pi/pull/4304) | Cross-device sync (`shared/` + `laptop/`) | Symlink-based config sharing between VPS and local machines | Power-user workflow enablement |
| [#4301](https://github.com/earendil-works/pi/pull/4301) | Fix TUI crash on over-wide changed lines | Central truncation with regression test; replaces fatal assertion with diagnostic log | Stability in constrained environments |
| [#3887](https://github.com/earendil-works/pi/pull/3887) | Image content API | New streaming API for image blocks/models via Google/OpenRouter | Multimodal agent capability |

---

## Feature Request Trends

1. **TUI Robustness & Responsiveness**: Narrow terminal handling, virtual scrollback, and color/contrast issues dominate. Users expect Pi to degrade gracefully across terminal emulators and sizes.

2. **Model Provider Expansion**: Strong demand for Together AI, Copilot internal models, xAI Grok tuning, DeepSeek/Kimi fixes, and OpenRouter model handling. The provider abstraction is under continuous pressure.

3. **Extension API Surface**: Requests for cursor position exposure, click handlers in transcript rows, footer provider patterns, and VCS status configurability. Plugin ecosystem maturation.

4. **Cost/Performance Optimization**: "Cheap frontdesk" hierarchical routing, timing metadata for benchmarking, and `/compact` workflow improvements. Operational efficiency for production deployments.

5. **Cross-Platform Polish**: Windows Zig support landed; ongoing macOS key labeling (`Option` vs `Alt`), iTerm2 compatibility, and terminal-specific quirks.

---

## Developer Pain Points

| Category | Description | Frequency |
|----------|-------------|-----------|
| **"Big Refactor" Bottleneck** | Numerous issues/PRs closed with `closed-because-bigrefactor` or `closed-because-weekend` labels. Community struggling to distinguish temporary closure from permanent rejection. | Very High — 15+ items |
| **Bun Integration Fragility** | Package manager path resolution (`bun pm bin -g`, `bun root -g`) continues to produce edge-case crashes. Bun users appear to be second-class citizens relative to npm. | Recurring |
| **TUI Crash Surface** | String method crashes (`.startsWith`, `.toLowerCase`) on unexpected API responses; over-width assertions; rendering failures. Defensive programming gaps in display layer. | High |
| **Async/Blocking Architecture** | SessionManager's sync-only design resolved, but similar patterns likely persist. Blocks database-backed and serverless deployments. | Architectural |
| **Configuration Discovery** | Hardcoded paths, incorrect provenance display, and settings/state conflation. Users with non-default layouts experience friction. | Moderate-High |
| **Escape/Abort Handling** | "Stuck in working state" and unresponsive `Esc` to cancel requests. Core loop reliability under error conditions. | Recurring |
| **Tool Schema Compatibility** | Provider-specific schema requirements (null parameters, `tool_choice` object vs string) causing 400 errors. Adapter layer insufficiently defensive. | Provider-dependent |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-09

## Today's Highlights

Qwen Code shipped three releases in 24 hours including stable **v0.15.9**, which adds telemetry opt-in controls and per-file AI commit attribution. Meanwhile, a heated community debate continues over the proposed Qwen OAuth free tier reduction from 1,000 to 100 requests/day. The project also saw significant infrastructure work with PRs for a new HTTP daemon (`qwen serve`), reactive context compression on overflow, and VS Code message editing capabilities.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.15.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.9) | Stable | Telemetry: sensitive span attribute opt-in; commit attribution with per-file AI contribution tracking |
| [v0.15.8-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.8-preview.0) | Preview | Same changes as v0.15.9 (preview channel) |
| [v0.15.8-nightly.20260508](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.8-nightly.20260508.0491252b2) | Nightly | Telemetry opt-in and release automation |

All three releases share the same core changes: privacy-conscious telemetry controls and improved AI attribution in version control workflows.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — Reduce daily quota 1,000→100, phase out free tier entirely by May 20 | **Most discussed issue (122 comments)**; directly impacts accessibility and adoption for individual developers and small teams | Intense debate; no upvotes recorded but comment volume signals significant concern about paywalling |
| [#3740](https://github.com/QwenLM/qwen-code/issues/3740) | v0.15.5 overrides custom OpenAI-compatible model configs in `settings.json` | Regression breaks user customization for non-Qwen models; forces unwanted model picker prompts | Closed after 8 comments; fix expected given clear reproduction |
| [#3877](https://github.com/QwenLM/qwen-code/issues/3877) | `.env` file `OPENCODE_GO_API_KEY` ignored on startup | Authentication flow regression; breaks headless/CI deployments relying on file-based secrets | 4 comments; workaround likely needed for automation users |
| [#3914](https://github.com/QwenLM/qwen-code/issues/3914) | API connected but fetch fails with OpenRouter | Network layer instability affecting third-party provider compatibility | 3 comments; win32/Node 26 environment suggests platform-specific edge case |
| [#3936](https://github.com/QwenLM/qwen-code/issues/3936) | Russian text rendering corrupted (mojibake) | Internationalization bug breaking CJK/Cyrillic support; `����` symbols indicate encoding mishandling | 3 comments; blocks non-English users |
| [#3838](https://github.com/QwenLM/qwen-code/issues/3838) | Terminal infinite scroll/refresh loop during code analysis | Severe UX regression; renders tool unusable during core workflow (writing/analyzing code) | 3 comments; Node 24.15.0 environment noted |
| [#3548](https://github.com/QwenLM/qwen-code/issues/3548) | Configurable `plansDirectory` for Plan Mode (Gemini CLI/Claude Code parity) | Feature parity request for enterprise workflows; plan isolation critical for multi-project teams | 3 comments; `welcome-pr` label indicates maintainers seeking contributions |
| [#3954](https://github.com/QwenLM/qwen-code/issues/3954) | OSC 8 hyperlink support for clickable wrapped URLs | Terminal UX polish; affects all markdown link rendering in streaming output | 3 comments; well-scoped, implementation-ready request |
| [#3945](https://github.com/QwenLM/qwen-code/issues/3945) | `edit` tool deadlocks on large files due to `read_file` truncation | **Critical workflow blocker**; tool precondition creates impossible state for files exceeding read limits | 2 comments; architectural tension in tool design |
| [#3926](https://github.com/QwenLM/qwen-code/issues/3926) | Input field lacks `Ctrl+Backspace`, text selection, cut/paste | Basic text editing gaps frustrate power users; inconsistent keybinding support (`Ctrl+Delete` works, `Ctrl+Backspace` doesn't) | 2 comments; `welcome-pr` with clear scope |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#3889](https://github.com/QwenLM/qwen-code/pull/3889) | **`qwen serve` daemon (Stage 1)** | HTTP daemon bridging ACP NDJSON over HTTP+SSE; SDK `DaemonClient` with session management, prompting, cancellation | 🔵 Open — Major architecture expansion |
| [#3879](https://github.com/QwenLM/qwen-code/pull/3879) | **Reactive compression on context overflow** | Auto-detects provider context-window errors, compresses conversation, retries once; prevents hard failures on long sessions | 🔵 Open — Reliability improvement |
| [#3762](https://github.com/QwenLM/qwen-code/pull/3762) | **VS Code: message edit/rewind + metadata UI** | Full message editing, regeneration, branching in extension UI; parity with CLI session control | 🔵 Open — Extension feature gap |
| [#3849](https://github.com/QwenLM/qwen-code/pull/3849) | Cross-authType model resolution in `ModelRegistry` | Cleans up PR #3815 technical debt; proper data-layer abstraction for model lookup across auth methods | 🔵 Open — Code health |
| [#3861](https://github.com/QwenLM/qwen-code/pull/3861) | Preserve comments/formatting in `settings.json` migration | Format-preserving JSON writes; fixes pain point where migrations destroyed user customization | 🔵 Open — UX polish |
| [#3969](https://github.com/QwenLM/qwen-code/pull/3969) | **Ctrl+B promote keybind (foreground→background)** | Final piece of 3-PR feature; enables promoting running tasks to background without losing context | 🔵 Open — Workflow efficiency |
| [#3974](https://github.com/QwenLM/qwen-code/pull/3974) | Retry on "model unloaded" errors for local servers | Auto-retry with 2s delay for LM Studio/ollama JIT loading; fixes false failures on idle model unload | 🔵 Open — Local AI reliability |
| [#3775](https://github.com/QwenLM/qwen-code/pull/3775) | Route side-query LLM calls through `runSideQuery` chokepoint | Centralizes 10+ side-query paths (titles, summaries, compression, etc.) for consistent logging/rate-limiting | 🔵 Open — Observability |
| [#3589](https://github.com/QwenLM/qwen-code/pull/3589) | `ToolSearch` for deferred tool schemas | On-demand MCP/built-in tool loading; cuts ~15K tokens from typical 39-tool declarations | 🔵 Open — Context efficiency |
| [#3673](https://github.com/QwenLM/qwen-code/pull/3673) | **autoSkill: background project skill extraction** | Auto-forks review agent at 20-tool threshold; extracts reusable skills to `.qwen/skills/`; gated behind `memory.enableAutoSkill` | 🔵 Open — Memory/knowledge system |

---

## Feature Request Trends

1. **Enterprise/Team Configuration Management**
   - Configurable runtime/config directories (`QWEN_HOME`, `QWEN_RUNTIME_DIR`, `plansDirectory`)
   - Project-level isolation vs. global `~/.qwen` default

2. **Terminal UX & Internationalization**
   - OSC 8 hyperlinks, proper CJK/Cyrillic rendering, resize handling, input editing parity with standard readline

3. **Authentication & Provider Flexibility**
   - Internal provider support (Idealab/Alibaba), OpenRouter stability, OAuth policy transparency
   - Cross-authType model resolution (in progress via #3849)

4. **Context & Memory Architecture**
   - Reactive compression (#3879), autoSkill extraction (#3673), session branching (#2994)
   - Tool declaration optimization (#3589) for token efficiency

5. **IDE/Editor Integration Depth**
   - VS Code message editing (#3762), model persistence, discontinued model handling parity with CLI

---

## Developer Pain Points

| Category | Symptoms | Frequency Indicator |
|----------|----------|---------------------|
| **Authentication Fragility** | `.env` ignored, token expiry (401), OAuth free tier uncertainty | 5+ issues; #3203 (122 comments), #3877, #3914, #3939, #3940 |
| **Terminal Rendering Instability** | Infinite scroll loops, resize corruption, mojibake, flickering | 4+ issues; #3838, #3213, #3936, #3888 |
| **Tool System Edge Cases** | `edit` deadlock on large files (#3945), file type misidentification (#3964), subagent approval opacity (#3960) | 3+ issues; architectural preconditions failing at scale |
| **Settings/Config Durability** | Migrations destroying formatting (#3861), model overrides (#3740), VS Code persistence gaps (#3946) | 3+ issues; config as fragile state |
| **Local Model Server Reliability** | "Model unloaded" errors requiring retry logic (#3974), fetch failures | 2+ issues; JIT loading mismatches |
| **Subagent Observability** | Limited visibility into subagent reasoning (#3758), approval prompts lacking context (#3960) | 2+ issues; debugging distributed agent work |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-05-08/09.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-09

## Today's Highlights

The project shipped four rapid-fire releases (v0.8.18–v0.8.22) in 24 hours with Docker promotion to supported install path and safer session startup semantics. Community attention is intensely focused on **cost control**—token consumption spikes and cache hit rate deficiencies dominate the top issues, while parallel PRs propose Pro→Flash model routing and sub-agent optimizations to slash API bills.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.8.22** | Security hardening: validated redirected fetch targets before following them |
| **v0.8.21** | Workspace version bump, npm wrapper sync, prompt package-version guard update |
| **v0.8.20** | Tighter TUI/runtime/install pass; `--yolo` flag forwarding fix landed post-release |
| **v0.8.19–v0.8.18** | Safer session startup semantics; Docker/GHCR promoted to supported install path; community PR harvest |

All releases available via `npm install -g deepseek-tui` or Docker (`ghcr.io/hmbown/deepseek-tui`).

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743) | **Token consumption spiked massively** — 400M tokens consumed in half a day | Critical cost regression; users report unexpectedly dense request patterns | 12 comments, urgent tone; demands immediate optimization of dialogue context |
| [#759](https://github.com/Hmbown/DeepSeek-TUI/issues/759) | **First-time init fails** — no API key guidance, `config.toml` not created, arrow keys broken in settings | Onboarding blocker for new users; directly impacts adoption funnel | 11 comments; confirmed reproducible |
| [#932](https://github.com/Hmbown/DeepSeek-TUI/issues/932) | **CNY (¥) cost display** *(CLOSED)* | Localization gap for largest user base; closed quickly suggesting maintainer responsiveness | 9 comments, resolved |
| [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683) | **Thinking chain forced to English** despite Chinese language config | UX inconsistency; competitors (DeepSeek-Reasonix) handle this correctly | 9 comments; comparative benchmarking against rival tools |
| [#1120](https://github.com/Hmbown/DeepSeek-TUI/issues/1120) | **Cache hit problems persist** — input_cache_miss rate suspicious | Follow-up to v0.8.17 cache fixes; users questioning if fix actually shipped | 8 comments; false-positive concern raised |
| [#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177) | **Input cache hit rate "abysmal"** vs. DeepSeek-Reasonix's 95%+ | Quantified competitive disadvantage; direct cost multiplier | 7 comments; "urgently needs improvement" |
| [#1118](https://github.com/Hmbown/DeepSeek-TUI/issues/1118) | **Chinese config, English thinking output** | Related to #683, broader i18n/thinking locale gap | 7 comments; screenshot evidence provided |
| [#1132](https://github.com/Hmbown/DeepSeek-TUI/issues/1132) | **Request for GUI** — cites JetBrains CC-GUI plugin as reference | Recurring accessibility demand; TUI limits non-terminal users | 5 comments, 👍1; references concrete implementation |
| [#1169](https://github.com/Hmbown/DeepSeek-TUI/issues/1169) | **Mouse selection crosses sidebar boundary** — no isolation | Polish bug affecting daily copy-paste workflows | 4 comments; clear repro steps |
| [#1191](https://github.com/Hmbown/DeepSeek-TUI/issues/1191) | **Dynamic prompts too flashy** — ASCII waveform visual noise | Accessibility/comfort issue; concrete alternative proposed (`·····`) | 3 comments; meme-level issue title |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#1245](https://github.com/Hmbown/DeepSeek-TUI/pull/1245) | **v0.8.23 prep — security hardening stack** | OPEN | 11-commit security release: env scrub, plan-mode tool surface reduction, sub-agent approvals, symlink traversal hardening, runtime API auth, shell safety, MCP config path traversal fix, dependency bumps, macOS Keychain prompt fix |
| [#1220](https://github.com/Hmbown/DeepSeek-TUI/pull/1220) | **Session artifact metadata for spilled tool outputs** | OPEN | Closes #1216. Durable session-scoped registry replacing ephemeral global spillover files; enables resumed session context retention |
| [#1203](https://github.com/Hmbown/DeepSeek-TUI/pull/1203) | **Retry quota errors masquerading as HTTP 400** | OPEN | Fixes misclassification of `insufficientquota` responses; adds regression coverage for retryable 400s |
| [#1242](https://github.com/Hmbown/DeepSeek-TUI/pull/1242) | **Sub-agent parallel execution + Pro→Flash delegation** | OPEN | Major architecture: parallel reasoning, shared cache, streaming fanout, adaptive concurrency, `/recap` command, goal-driven auto-continue; enables hierarchical cost-efficient execution |
| [#773](https://github.com/Hmbown/DeepSeek-TUI/pull/773) | **OpenCode Go provider support** | OPEN | First-class integration for $10/month flat-plan users; restores model alias normalization and key management |
| [#1239](https://github.com/Hmbown/DeepSeek-TUI/pull/1239) | **Drag-select auto-scroll + copy decoration stripping** | OPEN | Fixes #1163: viewport auto-scroll on edge drag, copy-paste cleans rail decorations |
| [#1211](https://github.com/Hmbown/DeepSeek-TUI/pull/1211) | **Transcript scroll when composer empty** | OPEN | Resolves #1117 regression; opt-in `scroll_transcript_on_empty_composer` config for trackpad gesture compatibility |
| [#1241](https://github.com/Hmbown/DeepSeek-TUI/pull/1241) | **Todos panel above composer** | OPEN | Claude Code-style persistent todo visibility; collapses when empty; reduces sidebar dependency |
| [#1240](https://github.com/Hmbown/DeepSeek-TUI/pull/1240) | **`/plugin` slash command + plugin system docs** | OPEN | Runtime plugin management (install/list/uninstall); documents hooks/PreCompact, skills/MCP wiring |
| [#1196](https://github.com/Hmbown/DeepSeek-TUI/pull/1196) | **Cache-aware prompt design + `/cache inspect` diagnostics** | OPEN | Separates stable reusable prefixes from session-varying suffixes; adds introspection command for cache structure debugging |

---

## Feature Request Trends

1. **Cost Optimization Infrastructure** — Dominant theme. Requests for per-turn model routing (Pro reasoning → Flash execution), `model auto` bias toward cheaper models, CNY display, and cache hit diagnostics all converge on making TUI economically sustainable at scale.

2. **GUI/IDE Integration** — Persistent demand for GUI layer (#1132, #1194) and VS Code/JetBrains plugins; community member already prototyped [DeepSeek-GUI](https://github.com/lym2394/deepseek-gui-app).

3. **Plugin Ecosystem** — Migration path from Cursor/Cline/Codex plugin workflows requested (#1172); `/plugin` command and plugin market infrastructure emerging in PRs.

4. **Localization Depth** — Beyond UI translation: thinking-chain locale control (#683, #1118), CNY pricing (#932), and Chinese README accuracy (#1235).

5. **Session Durability** — Metadata registries for spilled outputs (#1216→#1220), consolidated config directories (#1224), and persistent permission rules (#1186).

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Uncontrolled API costs** | 🔥 Critical | #743 (400M tokens), #1177 (cache hit rates), #1207 (auto→Pro routing), #1228 (Pro→Flash delegation request) |
| **Cache optimization opacity** | 🔥 High | #1120, #1177, #1196 PR; users cannot diagnose or influence prompt cache structure |
| **Initialization/onboarding friction** | High | #759 (broken first-run), #1198 (unresponsive key input), #1148 (v0.8.20 launch failure) |
| **macOS keybinding gaps** | Medium | #1188 (Alt+V→⌥V), #138 (rebinding history) |
| **TUI rendering edge cases** | Medium | #1169 (selection isolation), #1147 (display errors), #1212 (code block artifacts), #1191 (visual noise) |
| **Config fragmentation** | Medium | #1224 (split `~/.deepseek/` trees), #759 (`config.toml` creation failures) |

---

*Digest compiled from github.com/Hmbown/DeepSeek-TUI public activity 2026-05-08/09.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*