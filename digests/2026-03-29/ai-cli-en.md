# AI CLI Tools Community Digest 2026-03-29

> Generated: 2026-03-29 00:10 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Report — 2026-03-29

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly with divergent architectural philosophies: Claude Code and OpenAI Codex pursue deep IDE-like experiences with subagent orchestration, while Gemini CLI and Kimi CLI optimize for spec-driven development and voice/mobile workflows. Cross-platform parity remains the dominant pain point, with Windows and WSL users consistently underserved. Enterprise adoption is accelerating, driving demand for policy controls, audit logging, and MCP ecosystem standardization. The field is consolidating around three core patterns: TUI-based interactive sessions, headless/automation APIs, and plugin-extensible architectures.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Notes |
|------|-------------|-----------|----------------|-------|
| **Claude Code** | 10+ tracked | 10 open | None | Security regressions dominate; no release despite critical bugs |
| **OpenAI Codex** | 50 active | 50 active | None | Highest velocity; subagent infrastructure landing |
| **Gemini CLI** | 10 tracked | 8 new | **2** (v0.35.3, v0.36.0-preview.6) | Emergency patches for tier detection; rapid release cadence |
| **GitHub Copilot CLI** | 34 active | 0 | None | Issue-driven only; possible feature freeze |
| **Kimi CLI** | 8 tracked | 7 open | None | ACP auth rewrite in progress; stability focus |
| **OpenCode** | 50 active | 50 active | None | Effect refactoring; Claude Max outage unresolved since January |
| **Qwen Code** | 9 tracked | 6 active | None | Enterprise review features; Windows path bugs emerging |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Subagent/Multi-agent Orchestration** | Claude Code, OpenAI Codex, Qwen Code, Gemini CLI | Runtime visibility (Codex #13679), inbox delivery (#13657), parity tracking (Qwen #2409), event-driven history (Gemini #23914) |
| **Remote Development & Cowork** | Claude Code, OpenAI Codex, Gemini CLI | Windows drive access (Claude #24964/#29583), SSH/container parity (Codex #10450), devcontainer networking (Claude #40322) |
| **Permission & Safety Boundaries** | Claude Code, OpenAI Codex, Qwen Code, Kimi CLI | `--dangerously-skip-permissions` regressions (Claude #36168), /undo restoration (Codex #9203), auto-edit scope creep (Qwen #2722), plan mode violations (Gemini #23858) |
| **Windows/WSL First-Class Support** | All seven tools | PATH resolution (Qwen #2727), config isolation (Codex #13549), shell executor flexibility (Kimi #1618), image paste (Kimi #1617), TUI scaling (Copilot #2208) |
| **Context Transparency & Control** | Claude Code, OpenAI Codex, OpenCode, Gemini CLI | Usage analytics (Claude #33978), rate limit exposure (#27915), /context command (OpenCode #6152), token burn visibility (Codex #14593) |
| **MCP Ecosystem Maturity** | Claude Code, OpenAI Codex, Kimi CLI, OpenCode | OAuth flows (Claude #3433, OpenCode #5444, Kimi #1625), scope granularity, log hygiene (Kimi #1624) |
| **Voice/Mobile/Remote Access** | Gemini CLI, Claude Code, Kimi CLI | Remote control mode (Gemini #22559, Kimi #22559), voice input (Gemini #18499), touch optimization (OpenCode #18767) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Kimi CLI | GitHub Copilot CLI | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|----------|-------------------|----------|-----------|
| **Core Philosophy** | Agentic cowork with deep IDE integration | Subagent-native, TUI-centric runtime | Spec-Driven Development (SDD) workflows | ACP protocol + terminal-native | GitHub-native, policy-enforced | Plugin-extensible, multi-provider | Enterprise code review automation |
| **Target User** | Full-stack developers, enterprise teams | AI-native developers, multi-agent builders | SDD practitioners, Google ecosystem | Moonshot platform users, China market | GitHub-centric enterprises | Power users, self-hosters | Alibaba cloud developers, CI/CD integrators |
| **Technical Approach** | TypeScript/Electron, Cowork VM layer | Rust + TUI, watchdog runtime | Go, tracker-based planning | Python, ACP server architecture | Rust, GitHub API integration | TypeScript/Effect, fiber-based concurrency | Python, verification pipeline architecture |
| **Unique Strengths** | Cowork remote dev, skills system | Live subagent panels, model aliases | Rapid iteration on SDD, voice input | ACP ecosystem, reasoning model handling | Native GitHub policy integration | Effect architecture, per-session directories | `/review` with verification agents, cron scheduling |
| **Critical Gaps** | Windows parity, permission regressions | Intel Mac support, token predictability | Tier detection reliability, plan mode trust | Windows toolchain, auth fragmentation | TUI scale limits, update UX | Provider reliability (Claude Max), config hot-reload | Windows PATH, context bloat, product confusion |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest Velocity** | OpenAI Codex, OpenCode | 50 PRs/50 issues each; active infrastructure work; Codex subagent runtime, OpenCode Effect migration |
| **Rapid Response** | Gemini CLI | Emergency dual-channel releases; 8 PRs in 24h; tier detection fixes |
| **Steady Enterprise Focus** | Claude Code, Qwen Code | Security-critical issue volume; review automation features; longer iteration cycles |
| **Infrastructure Investment** | Kimi CLI | ACP auth rewrite (#1512, 9 days active); stability hardening |
| **Maintenance Mode Signal** | GitHub Copilot CLI | Zero PR activity; issue-only engagement; possible internal pivot |

**Maturity Signals**: Claude Code and OpenAI Codex show feature-complexity debt (permission regressions, token unpredictability). Gemini CLI and Qwen Code demonstrate operational maturity with release discipline and verification pipelines. OpenCode's architectural refactoring suggests second-system effect risks. Kimi CLI's ACP investment indicates platform play rather than standalone tool.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Subagent Runtime Standardization** | Codex watchdog/inbox, Claude Task tool security gaps, Qwen parity tracking | Multi-agent patterns becoming core; expect cross-tool compatibility pressure |
| **Safety Boundary Crisis** | Permission bypass regressions, plan mode violations, auto-edit scope creep | Trust in agent autonomy eroding; demand for verifiable, auditable guardrails |
| **Windows as Competitive Battleground** | Universal second-class treatment; registry hacks and workarounds proliferating | First-class Windows support becoming genuine differentiator |
| **MCP as De Facto Standard** | OAuth scope negotiations, remote vs. local type distinctions, enterprise policy gaps | Interoperability layer maturing; auth and discovery remain unsolved |
| **Cost Transparency as Feature** | Token burn anxiety, quota misclassification, context bloat complaints | Usage visibility becoming purchasing criterion; expect `claude usage`-like commands everywhere |
| **Spec-Driven Development Emergence** | Gemini tracker workflows, Qwen review pipelines, Claude skills system | Structured planning vs. free-form chat bifurcating user bases |
| **Voice/Mobile/Async Expansion** | Remote control requests, voice input PRs, cron-based session scheduling | CLI tools competing with IDE extensions for always-available workflows |

---

*Report compiled from 2026-03-29 community digests across seven major AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-29 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point affecting "every document Claude generates"; zero thumbs but high conceptual engagement |
| 2 | **Skill Quality Analyzer + Security Analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skills across 5 dimensions (structure, security, documentation) + automated security auditing | Long-running PR (Nov 2025); positions Skills ecosystem for self-improvement |
| 3 | **Frontend Design** (Improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity/actionability—ensures every instruction is executable in single conversation | Focus on practical executability vs. theoretical completeness; active refinement through March |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML parsing for LibreOffice/OnlyOffice workflows | Enterprise document pipeline use case; ISO standard compliance emphasis |
| 5 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents with proactive context surfacing | Cross-conversation state management—addresses core limitation in Claude's session-based architecture |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for business analytics | Enterprise ERP integration; Apache 2.0 model leverage |
| 7 | **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | 🟡 Open | CLI wrapper for Imagen 3.0/Veo 3.1 generation with job management | Media generation workflow automation; recent updates through March 14 |
| 8 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step systematic cleanup workflow producing CODEBASE-STATUS.md | Technical debt quantification; infrastructure bloat detection |

---

## 2. Community Demand Trends

Derived from top Issues by comment volume and thematic clustering:

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Skill Reliability & Debugging** | [#556](https://github.com/anthropics/skills/issues/556) (5 comments, 6👍): `claude -p` never triggers skills; [#62](https://github.com/anthropics/skills/issues/62) (10 comments): skills disappearing | Production-grade skill execution and state persistence are critical gaps |
| **Enterprise Governance & Trust** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2👍): namespace impersonation risk; [#532](https://github.com/anthropics/skills/issues/532): SSO/API key conflicts | Security boundaries and enterprise auth integration block adoption |
| **Skill Quality Standards** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments, 1👍): skill-creator violates its own best practices; [#189](https://github.com/anthropics/skills/issues/189) (4 comments, 6👍): duplicate skills across plugins | Meta-quality control and canonical skill organization needed |
| **Platform Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): MCP exposure; [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support; [#228](https://github.com/anthropics/skills/issues/228) (3 comments, 2👍): org-wide sharing | Skills must break out of Claude Code silo to become industry standard |
| **Agent Orchestration** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments): agent governance patterns | Multi-agent safety and coordination emerging as next frontier |

---

## 3. High-Potential Pending Skills

Active PRs with sustained engagement likely to merge:

| Skill | PR | Updated | Why It May Land Soon |
|:---|:---|:---|:---|
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 2026-03-19 | Community health infrastructure; referenced in dependent PR #512 |
| **PR Template** | [#512](https://github.com/anthropics/skills/pull/512) | 2026-03-19 | Companion to #509; lightweight process improvement |
| **Roadmap Pilot** | [#536](https://github.com/anthropics/skills/pull/536) | 2026-03-26 | Addresses context overflow on large refactorings—solves scaling pain |
| **Avoid-AI-Writing** | [#535](https://github.com/anthropics/skills/pull/535) | 2026-03-27 | v3.1.0 with 34 pattern categories; actively maintained by contributor |
| **FAF Context** | [#281](https://github.com/anthropics/skills/pull/281) | 2026-03-18 | Clever filesystem-positioning hack (`project.faf` between `package.json` and `README.md`) |
| **Google Workspace Integration** | [#299](https://github.com/anthropics/skills/pull/299) | 2026-03-25 | 6-agent personal assistant suite; high utility, recent activity |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 2026-02-21 | 4-skill cognitive framework; professional knowledge management play |

---

## 4. Skills Ecosystem Insight

> **The community's concentrated demand is for production-grade reliability infrastructure—skills that validate, debug, and govern other skills, transforming Claude Code from a personal productivity tool into an auditable, team-scalable development platform.**

---

*Report methodology: PRs ranked by comment-derived attention; Issues analyzed for thematic demand signals; "High-potential" defined as open PRs with updates within 30 days and clear problem-solution fit.*

---

# Claude Code Community Digest — 2026-03-29

## Today's Highlights

The community is grappling with significant **Cowork feature limitations on Windows**, where folder picker restrictions and drive access issues are blocking workflows for 250+ users across two high-engagement issues. Meanwhile, **security and permissions regressions** dominate the bug landscape, with multiple reports of `--dangerously-skip-permissions` and auto-mode availability breaking in recent versions. No new releases were published in the last 24 hours.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#24964](https://github.com/anthropics/claude-code/issues/24964) | **Cowork: Folder picker rejects folders outside home directory, symlinks/junctions also blocked** | Blocks enterprise workflows where code lives on secondary drives or network shares; affects both Windows and macOS | 155 👍, 113 comments—most engaged issue this week |
| [#29583](https://github.com/anthropics/claude-code/issues/29583) | **Cowork: Cannot use folders outside home directory on Windows (secondary drive)** | Companion to #24964, specifically highlighting D:/E: drive access failures | 98 👍, 82 comments; users sharing registry hacks and symlink workarounds |
| [#3433](https://github.com/anthropics/claude-code/issues/3433) | **Claude Code cannot connect to GitHub's remote MCP server using OAuth** | Breaks GitHub MCP integration for Linux users; 8-month-old issue with ongoing reports | 113 👍, 29 comments; community maintaining unofficial fixes |
| [#33587](https://github.com/anthropics/claude-code/issues/33587) | **Auto mode temporarily unavailable — cannot enter via Shift+Tab or defaultMode** | Core functionality regression affecting power users relying on autonomous execution | 47 👍, 26 comments; users downgrading to v2.1.74 as workaround |
| [#36168](https://github.com/anthropics/claude-code/issues/36168) | **Bypass/dangerously skip permissions broken in versions newer than v2.1.77** | Security-critical flag non-functional; breaks CI/CD and automated workflows | 27 👍, 24 comments; marked as regression priority |
| [#6305](https://github.com/anthropics/claude-code/issues/6305) | **Post/PreToolUse Hooks Not Executing** | Breaks custom automation and security policies for enterprise users | 13 👍, 23 comments; hook system reliability questioned |
| [#21460](https://github.com/anthropics/claude-code/issues/21460) | **[SECURITY] PreToolUse hooks not enforced on subagent tool calls** | Active security bypass—main agent restrictions circumvented via Task tool | 12 👍, 12 comments; security-critical, awaits maintainer response |
| [#36192](https://github.com/anthropics/claude-code/issues/36192) | **--dangerously-skip-permissions does not bypass Edit permission prompts** | CLI flag inconsistency; Edit prompts still appear for `.claude/skills/` | 9 👍, 9 comments; permission system fragmentation cited |
| [#38055](https://github.com/anthropics/claude-code/issues/38055) | **Cowork: Minor version update permanently deletes chat history and scheduled tasks** | **Data loss bug**—upgrade path destroys user state without warning | 1 👍, 9 comments; severity high despite low engagement |
| [#40321](https://github.com/anthropics/claude-code/issues/40321) | **Sandbox half-broken — writes hit real filesystem, reads sandboxed** | **Critical data loss**: 2500+ file project destroyed due to sandbox inconsistency | 0 👍, 3 comments; newly reported, requires urgent investigation |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | **Remove "retro-futuristic" recommendation from Frontend Design Skill** | UX fix removing dated aesthetic guidance from built-in skill | Open |
| [#40322](https://github.com/anthropics/claude-code/pull/40322) | **Enhance devcontainer firewall with hybrid static/dynamic IP management** | Fixes sudo env stripping, crontab availability, and heredoc bugs in container networking | Open |
| [#40290](https://github.com/anthropics/claude-code/pull/40290) | **Pin 7 GitHub Actions to commit SHA** | Security hardening—addresses supply chain risks in CI/CD (resubmission of #39515) | Open |
| [#40276](https://github.com/anthropics/claude-code/pull/40276) | **Fix changelog accuracy issues across v2.1.83-86** | Documentation correction for skill listing budget changes (2% → 1% context window, 16K → 8K fallback) | Open |
| [#36433](https://github.com/anthropics/claude-code/pull/36433) | **Add agent-wallet plugin for AI agent payments** | New plugin enabling non-custodial wallets for API payments via x402 protocol | Open |
| [#40208](https://github.com/anthropics/claude-code/pull/40208) | **Add chmod +x to hook scripts after installation** | Fixes #40187—plugin hooks losing execute permissions causing `SessionStart:resume` errors | Open |
| [#39977](https://github.com/anthropics/claude-code/pull/39977) | **Add tmp-cleanup plugin for /tmp disk leak mitigation** | Addresses 46GB+ `.output` file accumulation from background tasks and subagents | Open |
| [#33224](https://github.com/anthropics/claude-code/pull/33224) | **Make Node.js version configurable in devcontainer** | Upgrades default Node 20 → 24 (EOL April 2026); adds `NODE_VERSION` env var | Open |
| [#40265](https://github.com/anthropics/claude-code/pull/40265) | **Fix typo in settings README** | Minor documentation fix | Open |
| [#39515](https://github.com/anthropics/claude-code/pull/39515) | ~~Pin 7 unpinned action(s)~~ | *Closed*—superseded by #40290 | Closed |

---

## Feature Request Trends

1. **Terminal Graphics Protocol Support** ([#2266](https://github.com/anthropics/claude-code/issues/2266)) — Sixel/Kitty/iTerm2 inline images for data visualization in CLI workflows
2. **Multi-Window Desktop Support** ([#30154](https://github.com/anthropics/claude-code/issues/30154)) — 57 👍 for parallel session viewing vs. current sidebar-only navigation
3. **Built-in Usage Analytics** ([#33978](https://github.com/anthropics/claude-code/issues/33978)) — Consolidates 10+ issues requesting `claude usage` command for token visibility
4. **Rate Limit/Quota Exposure in statusLine** ([#27915](https://github.com/anthropics/claude-code/issues/27915)) — 30 👍 for programmatic access to billing limits
5. **Configurable Auto-Approval for Compound Commands** ([#32985](https://github.com/anthropics/claude-code/issues/32985)) — `cd+git` chain approvals blocking automation workflows

---

## Developer Pain Points

| Category | Summary | Key Issues |
|----------|---------|-----------|
| **Cowork/Remote Development** | Windows users severely impacted by directory access restrictions, drive limitations, and VM instability | #24964, #29583, #38055, #38396, #39351 |
| **Permissions System Fragility** | Multiple regressions in bypass flags, auto-mode availability, and hook enforcement creating automation friction | #33587, #36168, #36192, #6305, #21460 |
| **Sandbox Reliability** | Critical safety boundary failures with data loss consequences | #40321 |
| **Rate Limiting & Quota Transparency** | Opaque limits, inconsistent enforcement across agents, and lack of programmatic visibility | #40273, #39581, #40297, #27915 |
| **MCP/OAuth Integration** | Persistent authentication failures for external tool servers, especially on Linux | #3433, #40102 |
| **Data Durability** | Upgrade paths destroying user state (chat history, scheduled tasks) without migration | #38055 |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-29

## 1. Today's Highlights

No new releases dropped in the last 24h, but development velocity remains high with **50 active issues** and **50 PRs** in motion. The team is heavily focused on **subagent runtime infrastructure** (multiple PRs landing TUI panels and watchdog systems) and **tooling architecture refactoring** (extracting tool specs from `codex-core` to `codex-tools`). Meanwhile, the community continues to surface critical pain points around **token consumption rates**, **platform support gaps** (Intel Mac, Linux desktop app), and **Windows/WSL integration rough edges**.

---

## 2. Releases

**None** — No releases published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** | Business-tier users reporting rapid token depletion—directly impacts cost predictability for production workflows. | 🔥 **315 comments**, 104 👍 — highest engagement by far; users sharing mitigation strategies |
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel (x86_64) support** | Large enterprise/user base still on Intel Macs; current Apple Silicon-only builds exclude significant market segment. | 148 comments, 209 👍 — persistent demand since Feb; no official timeline |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** | Critical gap vs. VS Code workflows—developers need SSH/container development parity for cloud/remote environments. | 88 comments, 460 👍 — top-voted enhancement request |
| [#2558](https://github.com/openai/codex/issues/2558) | **Output truncated when scrolling in Zellij** | Terminal multiplexer compatibility issue breaks TUI usability for terminal-native workflows. | 46 comments, 103 👍; active debugging by community |
| [#9203](https://github.com/openai/codex/issues/9203) | **Please make "/undo" back** | Safety-critical feature for destructive operations; regression from earlier versions causing data loss anxiety. | 17 comments, 101 👍; emotional "miss it each time" testimonials |
| [#13476](https://github.com/openai/codex/issues/13476) | **Excessive approval prompts for Playwright MCP** | MCP workflow friction—security theater vs. productivity balance broken for browser automation users. | 18 comments, 29 👍; regression flagged post-0.107.0 |
| [#13784](https://github.com/openai/codex/issues/13784) | **Error running remote compact task** | App stability issue—background compaction failures disrupt long sessions. | 18 comments; Windows 11 specific |
| [#14744](https://github.com/openai/codex/issues/14744) | **VS Code: Apply_patch failing on Windows** | Core editing functionality broken for Windows extension users—blocks basic IDE integration. | 14 comments, 2 👍; linked to prior unresolved issue |
| [#13549](https://github.com/openai/codex/issues/13549) | **WSL config still references Windows-hosted config.toml** | Config isolation failure—WSL users getting wrong environment context, breaking tool discovery. | 13 comments, 17 👍 |
| [#16139](https://github.com/openai/codex/issues/16139) | **Global context settings persist after model switch** | Context window misconfiguration risk—switching to smaller models retains large-window settings, causing silent failures. | Fresh (2 comments); pairs with related enhancement request |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#13679](https://github.com/openai/codex/pull/13679) | **feat(tui): add subagent runtime behavior** | Live subagent/watchdog panel for TUI—pinned runtime visibility independent of transcript history. Major infrastructure for multi-agent workflows. | Open, active |
| [#13651](https://github.com/openai/codex/pull/13651) | **feat(tui): add subagent inbox foundation** | Core TUI rendering layer for subagent inbox items; schema updates and warning silencing. | Open, active |
| [#13678](https://github.com/openai/codex/pull/13678) | **feat(core): add watchdog runtime and prompts** | Watchdog lifecycle management, role configuration, model overrides—enables supervisor-agent patterns. | Open |
| [#13657](https://github.com/openai/codex/pull/13657) | **feat(agents): enable subagent inbox delivery** | Structured inbox delivery via injected response items; parent/subagent handoff plumbing. | Open |
| [#13825](https://github.com/openai/codex/pull/13825) | **feat(core): support custom model aliases in config.toml** | User-defined model aliases with context window overrides—addresses model-switching config pain. | Open |
| [#15929](https://github.com/openai/codex/pull/15929) | **allow non-workspace filesystem writes with read-only legacy fallback** | Expands sandbox policy expressiveness—`:tmpdir`, `/tmp` writes now supported when canonical policy allows. | Open |
| [#16120](https://github.com/openai/codex/pull/16120) | **ci: run Windows argument-comment-lint via native Bazel** | CI optimization—closes Windows toolchain gap, reduces `rust-ci` latency. | Open, fresh |
| [#16041](https://github.com/openai/codex/pull/16041) | **Fix app-server TUI MCP startup warnings regression** | Restores MCP failure visibility in `tui_app_server`—debuggability fix for cold-start issues. | Open |
| [#16114](https://github.com/openai/codex/pull/16114) | **Remove TUI voice transcription feature** | Code cleanup—removes incomplete hold-to-talk flow, reduces maintenance surface. | Open |
| [#16110](https://github.com/openai/codex/pull/16110) | **Fix tui_app_server ghost subagent entries in /agent** | Fixes stale subagent picker entries after resume/backfill—polish for multi-agent UX. | Open |

---

## 5. Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **Platform parity** | Intel Mac (#10410), Linux desktop app (#11023), Windows/WSL polish (#13549, #13785, #14744) | Codex App perceived as macOS-first; cross-platform users feel second-class |
| **Remote/headless workflows** | Remote development (#10450), SSH/container support, VS Code remote parity | Cloud development environments (Codespaces, devcontainers) underserved |
| **Safety & undo** | /undo restoration (#9203), PreToolUse/PostToolUse hooks (#14754), destructive operation guards | Users distrust agent autonomy without stronger guardrails |
| **Configuration granularity** | Model-aware context settings (#16140), custom model aliases (#13825), nested AGENTS.md (#12115) | Global config model breaking down; need directory-scoped, model-scoped overrides |
| **Terminal/IDE integration depth** | Multiple terminal tabs (#11427), Zellij/kitty compatibility (#2558, #8324, #5259), font sizing (#15417) | Power users want native terminal fidelity, not webview approximations |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Unpredictable token burn** | 🔴 Very High | 🔴 Critical | #14593 — 315-comment thread; Business users questioning value |
| **Authentication churn** | 🟡 High | 🟡 High | #9794 — "multiple times per day" re-auth for $200/mo Pro users |
| **Sandbox/security friction** | 🟡 High | 🟡 Medium | #13476 (MCP approvals), #10390 (macOS network_access ignored), #14919 (bwrap regression) |
| **Windows as second-class** | 🟡 High | 🟡 High | #14744, #13549, #13785, #15949 — patch failures, config leakage, ghost reopening |
| **Missing /undo safety net** | 🟠 Medium | 🔴 High | #9203 — data loss anxiety, "bites me several times" |
| **Context management opacity** | 🟠 Medium | 🟡 Medium | #16139, #9544, #13784 — compaction errors, settings persistence bugs |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-03-28 to 2026-03-29.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-29

## 1. Today's Highlights

Google shipped two rapid-fire patch releases (v0.35.3 and v0.36.0-preview.6) addressing the same underlying issue, signaling urgency around a critical bug. Meanwhile, community momentum surges on SDD (Spec-Driven Development) workflow improvements and enterprise tier authentication problems, with 8 new PRs opened in the last 24 hours tackling everything from unsafe type assertions to XDG directory compliance.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.36.0-preview.6** | Emergency patch cherry-picking commit `765fb67` to preview channel; follows v0.36.0-preview.5-pr-24055. [Release notes](https://github.com/google-gemini/gemini-cli/pull/24061) |
| **v0.35.3** | Same fix backported to stable v0.35.x line, though PR #24063 notes merge conflicts were encountered. [Release notes](https://github.com/google-gemini/gemini-cli/compare/v0.35.2...v0.35.3) |

*Note: The repeated cherry-pick suggests a high-severity fix (possibly quota/tier detection) being propagated across release branches.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) Optimize test suite output logging | Massive log spam (100K+ chars) from successful tests slows CI and local development; affects developer productivity directly | 56 comments, 17 👍 — highest engagement this week |
| [#23316](https://github.com/google-gemini/gemini-cli/issues/23316) Long-Context & Complex Reasoning Coding Evaluation Dataset | Proposes next-gen benchmark as SWE-bench saturates; 175-hour effort signals Google's investment in agent evaluation rigor | 44 comments, strong researcher engagement |
| [#8883](https://github.com/google-gemini/gemini-cli/issues/8883) Quota errors despite 84% context remaining | **Closed** but resurfacing — Pro plan users hitting hard limits; creates billing trust issues | 31 comments, reopened discussion |
| [#23988](https://github.com/google-gemini/gemini-cli/issues/23988) CLI hangs indefinitely on LLM calls | Critical reliability issue — users report 15+ minute delays, complete UI unresponsiveness | 10 comments, multiple "me too" confirmations |
| [#23973](https://github.com/google-gemini/gemini-cli/issues/23973) Pro account misidentified as standard-tier | Authentication/entitlement bug blocking paid users; pattern with #23876, #23868 | 7 comments, screenshot evidence provided |
| [#23876](https://github.com/google-gemini/gemini-cli/issues/23876) Pro model access failures with valid subscription | Related tier-detection bug; affects core value proposition for paid users | 4 comments, 7 👍 — frustration evident |
| [#22644](https://github.com/google-gemini/gemini-cli/issues/22644) Custom session IDs (`--session my-project`) | Workflow enhancement for multi-project developers; simple UX win | 3 comments, 2 👍 |
| [#23858](https://github.com/google-gemini/gemini-cli/issues/23858) Files edited during plan mode | Agent behavior violation — model modifies files while claiming plan-only mode | 3 comments, detailed logs attached |
| [#22559](https://github.com/google-gemini/gemini-cli/issues/22559) Remote control mode (Claude-style) | Feature parity request for mobile/away-from-keyboard workflows | 2 comments, 4 👍 |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) Pass prompt directly to `/plan` | Reduces friction in SDD workflow; single-command planning | 2 comments, 2 👍 |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#24126](https://github.com/google-gemini/gemini-cli/pull/24126) Fix/remove unsafe type assertions tools | Validates tool payloads at boundary instead of `as` casting; improves type safety | Core reliability |
| [#24081](https://github.com/google-gemini/gemini-cli/pull/24081) Stabilize sandbox and build for Windows/Linux | Fixes Windows syntax errors, Linux type mismatches, WSL compatibility | Cross-platform parity |
| [#24123](https://github.com/google-gemini/gemini-cli/pull/24123) Skip replan when plan unchanged | Hashes plan file pre/post edit; eliminates wasteful agent cycles | UX efficiency |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) Voice input with pluggable backend | Zero-install Gemini transcription + optional Whisper local | Accessibility, power-user flexibility |
| [#24120](https://github.com/google-gemini/gemini-cli/pull/24120) Fix OAuth callback server double-close | Prevents `ERR_SERVER_NOT_RUNNING` crash on auth flow | Stability |
| [#24116](https://github.com/google-gemini/gemini-cli/pull/24116) Silence debugLogger in test setup | Centralizes mock to fix #23328's log spam | Developer experience |
| [#23992](https://github.com/google-gemini/gemini-cli/pull/23992) XDG config/cache/tmp directories | Proper `$GEMINI_*_DIR` overrides; deprecates monolithic `$GEMINI_HOME` | Linux standards compliance |
| [#23914](https://github.com/google-gemini/gemini-cli/pull/23914) Event-driven subagent history | `MessageBus` events for real-time subagent traces without polling | Performance, observability |
| [#22807](https://github.com/google-gemini/gemini-cli/pull/22807) Auto-restart agent on background task completion | Prevents silent drops of `Ctrl+B` background output | Reliability |
| [#24121](https://github.com/google-gemini/gemini-cli/pull/24121) [GSoC 2026] Performance & Memory Investigation Companion | 8,300+ line prototype for terminal-integrated profiling | Ecosystem extension |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **SDD/Tracker workflow maturation** | #23724, #23320, #23804, #23802, #23803, #24037 | High — core team focus area |
| **Memory system improvements** | #22819 (global vs. project routing), #22809 (proactive writes) | Medium — infrastructure groundwork |
| **Enterprise/team features** | #23925 (team tracker default), #23924 (hide tracker verbosity) | Medium — organizational adoption |
| **Remote/mobile access** | #22559 (remote control), voice input (#18499) | Emerging — parity with Claude |
| **Evaluation & benchmarking** | #23316 (new dataset), #23897 (behavioral eval for rejections) | Research-oriented |

---

## 6. Developer Pain Points

| Problem | Frequency | Severity | Tracking |
|---------|-----------|----------|----------|
| **Tier/quota misclassification** | 4 issues in 7 days (#8883, #23973, #23876, #23868) | 🔴 Critical — blocks paid users | Multiple; likely root cause in auth service |
| **Plan mode violations** | #23858, related to #23582 (subagent approval awareness) | 🟡 High — breaks trust in safety boundaries | Active workstream |
| **Test suite noise** | #23328, #24116 | 🟡 High — daily friction | Fix in review |
| **Windows/Linux build instability** | #24081 | 🟡 Medium — contributor barrier | PR open |
| **Unsafe TypeScript patterns** | #24126, #24125, #20080 | 🟡 Medium — technical debt | Community cleanup effort |
| **Background task visibility** | #22807, #22740 | 🟢 Improving — recent fixes merged | Monitoring |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity 2026-03-28 to 2026-03-29.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-29

## Today's Highlights

The Copilot CLI repository saw **34 active issues** in the last 24 hours with no new releases, indicating heavy community engagement focused on stability and UX improvements. The most discussed topics center on enterprise authentication gaps, keyboard shortcut inconsistencies, and API reliability issues. A notable surge in TUI/terminal interaction bugs suggests growing adoption among power users with complex workflows.

---

## Releases

**No releases in the last 24 hours.**

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#223](https://github.com/github/copilot-cli/issues/223) | **"Copilot Requests" permission missing for org-owned tokens** | Critical enterprise blocker: orgs cannot use fine-grained tokens for automation, forcing insecure user PATs. Long-running (Oct 2025) with 60 👍. | **16 comments**, strong enterprise demand; triage status unchanged |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | **SHIFT+ENTER executes instead of line break** | Violates universal chat UX conventions; muscle memory conflict for users migrating from Slack, Discord, ChatGPT. | **14 comments**, 10 👍; labeled UX regression |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | **Transient API errors → rate limit cascade** | Reliability issue where retry logic exacerbates rate limits; affects productivity during high-usage periods. | **11 comments**, active debugging; needs retry backoff fix |
| [#1976](https://github.com/github/copilot-cli/issues/1976) | **MCP servers disabled by org policy, model access denied** | Enterprise policy enforcement gaps breaking local development; confusion between CLI and IDE policy inheritance. | **6 comments**, org-admin friction highlighted |
| [#1944](https://github.com/github/copilot-cli/issues/1944) | ~~[CLOSED] Mouse wheel scroll regression on Windows~~ | Fixed: TUI input capture bug broke conversation history navigation. | **6 comments**, rapid closure appreciated |
| [#1911](https://github.com/github/copilot-cli/issues/1911) | ~~[CLOSED] OpenTelemetry export for observability~~ | Closed as invalid? Feature request for production observability of agent/LLM traces. | **3 comments**, 7 👍; enterprise SRE interest |
| [#2208](https://github.com/github/copilot-cli/issues/2208) | **WSL: 100% CPU + unresponsive TUI with large sessions** | Performance regression with Claude Opus 4.6 1M context; memory/state management issue. | **2 comments**, trace provided; needs profiling |
| [#2376](https://github.com/github/copilot-cli/issues/2376) | **Session picker shows "56 years ago" (1970 epoch bug)** | Timestamp parsing bug breaking session resume UX; trivial fix, high visibility. | Fresh (Mar 28), immediate triage |
| [#2374](https://github.com/github/copilot-cli/issues/2374) | **Autopilot infinite loop on plan approval** | Agent orchestration bug: `/plan` → autopilot transition loops indefinitely. | Fresh, workflow-breaking severity |
| [#2272](https://github.com/github/copilot-cli/issues/2272) | **GPT 5.4 degradation vs. 5.3-codex; Codex outperforms CLI** | Model quality regression; competitor (Codex) benchmarked as superior with same backend. | Quality comparison raising product questions |

---

## Key PR Progress

**No pull requests updated in the last 24 hours.**

*Note: All recent activity is issue-driven, suggesting either feature freeze or maintainers focused on internal releases.*

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Local/self-hosted LLM support** | [#2283](https://github.com/github/copilot-cli/issues/2283) (OpenAI-compatible base URL), [#2366](https://github.com/github/copilot-cli/issues/2366) (Ollama/LM Studio auto-detection) | 2 requests in 24h; enterprise air-gap + cost concerns |
| **Vim/terminal-native UX** | [#2373](https://github.com/github/copilot-cli/issues/2373) (`:q` alias), [#2362](https://github.com/github/copilot-cli/issues/2362) (smooth scrolling like gemini-cli), [#2372](https://github.com/github/copilot-cli/issues/2372) (disable auto-scroll) | Power-user TUI polish requests clustering |
| **Visual differentiation** | [#2371](https://github.com/github/copilot-cli/issues/2371) (input/output colors), [#2359](https://github.com/github/copilot-cli/issues/2359) (dark mode contrast) | Accessibility/readability focus |
| **Cancel/interrupt granularity** | [#2378](https://github.com/github/copilot-cli/issues/2378) (cancel queued messages without stopping operation) | Async workflow control needs |

---

## Developer Pain Points

1. **Enterprise Policy Friction** — Org-level Copilot/MCP policies inconsistently enforced across CLI vs. IDE; token permission gaps block automation adoption ([#223](https://github.com/github/copilot-cli/issues/223), [#1976](https://github.com/github/copilot-cli/issues/1976)).

2. **TUI Reliability at Scale** — Large context sessions (1M tokens) cause hangs, CPU spikes, and scrolling failures ([#2208](https://github.com/github/copilot-cli/issues/2208), [#2369](https://github.com/github/copilot-cli/issues/2369), [#2364](https://github.com/github/copilot-cli/issues/2364)).

3. **Agent Orchestration Bugs** — Autopilot mode has multiple failure modes: infinite loops ([#2374](https://github.com/github/copilot-cli/issues/2374)), premature execution without waiting for subagents ([#2367](https://github.com/github/copilot-cli/issues/2367)), and destructive rewrites losing documentation ([#2365](https://github.com/github/copilot-cli/issues/2365)).

4. **Network/Connectivity Edge Cases** — IPv6 fallback failures ([#2361](https://github.com/github/copilot-cli/issues/2361)), transient API retry storms ([#2101](https://github.com/github/copilot-cli/issues/2101)).

5. **Update UX Disruption** — `/update` command has poor feedback, interrupts active sessions, and reruns initial prompts ([#2343](https://github.com/github/copilot-cli/issues/2343), [#2363](https://github.com/github/copilot-cli/issues/2363)).

---

*Digest compiled from github.com/github/copilot-cli | 34 issues active in last 24h*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-29

## 1. Today's Highlights

The community is actively hardening edge-case reliability with two critical fixes targeting session stability when working directories disappear mid-session. Meanwhile, the ACP authentication system is undergoing a major overhaul to support terminal login and OAuth Device Flow, addressing long-standing integration friction with external platforms.

---

## 2. Releases

**No releases in the last 24 hours.**  
Current stable: v1.27.0

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1621](https://github.com/MoonshotAI/kimi-cli/issues/1621) | CWD removal causes infinite toolbar render exceptions | Critical reliability flaw for users on external drives/USB workflows; crashes the TUI loop entirely | Active fix in progress (see PR #1622) |
| [#1616](https://github.com/MoonshotAI/kimi-cli/issues/1616) | One API + Kimi-K2.5: `reasoning_content` missing error | Breaks reasoning model compatibility with popular API gateway; blocks production deployments | Root cause identified, fix PR #1620 submitted |
| [#1615](https://github.com/MoonshotAI/kimi-cli/issues/1615) | GLM5.1 model feedback not received | Signals broader third-party model integration fragility in tool response parsing | Needs triage |
| [#1624](https://github.com/MoonshotAI/kimi-cli/issues/1624) | SearXNG MCP logs pollute TUI | Degrades UX for search-heavy workflows; log hygiene issue | Awaiting fix |
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) | Kimi Web spontaneous refreshes | Disrupts long-running browser sessions; likely state management bug | Windows-specific report |
| [#1619](https://github.com/MoonshotAI/kimi-cli/issues/1619) | `kimi acp` rejects Moonshot Open Platform auth | Irony: native platform auth failing in ACP subsystem; blocks enterprise adoption | Needs investigation |
| [#1618](https://github.com/MoonshotAI/kimi-cli/issues/1618) | Windows shell executor hardcoded to PowerShell | Locks Windows users out of bash/zsh toolchains; WSL devs affected | Feature request with clear use case |
| [#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) | Ctrl-V image paste fails in Windows Terminal | Blocks visual workflow on primary Windows terminal; accessibility gap | Needs platform-specific handler |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1622](https://github.com/MoonshotAI/kimi-cli/pull/1622) | Graceful exit on CWD removal | Catches `OSError` from `os.getcwd()`, renders crash report instead of infinite exception loop; pairs with #1621 | Open, ready for review |
| [#1620](https://github.com/MoonshotAI/kimi-cli/pull/1620) | Auto-set `reasoning_effort` for ThinkPart history | Fixes #1616 by inferring reasoning mode from conversation history; restores One API compatibility | Open |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | ACP auth system rewrite: terminal login + OAuth Device Flow | Major architectural upgrade for ACP server integration; adds `_check_auth()`, `_trigger_login_in_terminal()`, `_trigger_oauth_device_flow()` | Open, 9 days active |
| [#1625](https://github.com/MoonshotAI/kimi-cli/pull/1625) | MCP OAuth `--scope` option | Enables granular permission requests for OAuth MCP servers (e.g., Supabase); fixes upstream auth flow bugs | Open |
| [#1600](https://github.com/MoonshotAI/kimi-cli/pull/1600) | Shell UI: bright blue user input highlighting | Visual UX improvement: `#007AFF` coloring + separator line for message distinction | Open |
| [#1606](https://github.com/MoonshotAI/kimi-cli/pull/1606) | Revert: `--skills-dir` multi-path append | Restores v1.25.0 override semantics; community debate on append vs. override behavior | Open |
| [#1605](https://github.com/MoonshotAI/kimi-cli/pull/1605) | Fix: `--skills-dir` override behavior (closed) | Original fix for #1606; closed in favor of revert discussion | **Closed** |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Windows toolchain flexibility** | #1618 (shell executor), #1617 (image paste) | CLI treating Windows as first-class requires deeper terminal integration |
| **Third-party model/API gateway compatibility** | #1616 (One API), #1615 (GLM5.1) | Need abstraction layer for non-Moonshot provider quirks |
| **MCP ecosystem maturity** | #1625 (OAuth scopes), #1624 (log hygiene) | MCP becoming production-critical; needs polish |
| **ACP enterprise readiness** | #1512 (auth rewrite), #1619 (platform auth bug) | ACP adoption blocked on auth reliability |

---

## 6. Developer Pain Points

**1. Session fragility on filesystem changes**  
External drive removal or directory deletion mid-session crashes the TUI (#1621). The fix (#1622) shows awareness but indicates reactive rather than defensive architecture.

**2. Reasoning model integration brittleness**  
`reasoning_content` / `reasoning_effort` field handling is inconsistent across providers (#1616). Developers need transparent fallback logic, not 400 errors.

**3. Platform auth schizophrenia**  
Native Moonshot Open Platform failing in `kimi acp` (#1619) while third-party OAuth requires manual scope configuration (#1625) suggests auth subsystem fragmentation.

**4. Windows as second-class citizen**  
PowerShell lock-in (#1618) and broken image paste (#1617) create friction for the largest desktop developer segment.

**5. Skills directory semantics churn**  
Revert battle between #1605 and #1606 reveals unclear product intent for `--skills-dir`—community needs documented contract, not behavioral whiplash.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-29

## Today's Highlights

The community is grappling with a critical **Claude Max outage** (#7410) that has generated nearly 400 comments and 358 upvotes since January, indicating widespread dependency on this provider. Meanwhile, the core team is pushing significant architectural improvements with **Effect-based refactoring** of session services (#19483) and **per-session working directories** (#9365), signaling maturation of the plugin ecosystem. Nix users received multiple quality-of-life fixes, while mobile and accessibility improvements continue to gain traction.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#7410](https://github.com/anomalyco/opencode/issues/7410) | **[bug] Broken Claude Max** | Provider-level failure affecting core functionality; 393 comments show this is a production-blocking issue for many users | 🔥 358 👍, extremely high engagement with ongoing reports |
| [#768](https://github.com/anomalyco/opencode/issues/768) | **Github Copilot: Tracking Premium Requests** | Cost transparency gap—Copilot's quota system doesn't integrate with OpenCode's $-based tracker, causing billing confusion | 30 comments, 60 👍; users want parity with VS Code extension |
| [#7002](https://github.com/anomalyco/opencode/issues/7002) | **[bug] Regression in 1.1.3** | Tool calling broken with invalid `filePath` arguments; affects edit tool reliability | 28 comments, active debugging; regression tag indicates priority |
| [#7101](https://github.com/anomalyco/opencode/issues/7101) | **Custom system prompts (global/project/custom)** | Highly requested flexibility for prompt engineering; enables shorter prompts for cost/performance optimization | 25 comments, 71 👍; referenced Reddit community discussion |
| [#3743](https://github.com/anomalyco/opencode/issues/3743) | **Loop in certain models (KIMI K2, MiniMax, GLM)** | Model-specific reliability issues with Chinese providers via Chutes.ai and Z.ai; affects agent autonomy | 25 comments, 9 👍; `help-wanted` and `model-problem` tags |
| [#6651](https://github.com/anomalyco/opencode/issues/6651) | **Dynamic model selection for subagents** | Architectural limitation—subagents can't use different models than parent, limiting cost/performance optimization strategies | 20 comments, 25 👍; Task tool enhancement |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | **Session context usage display (/context)** | Claude parity feature for context window transparency; critical for long-session management | 15 comments, 64 👍; `opentui` tag indicates UI scope |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | **Expand pasted text summaries** | UX friction—collapsed paste summaries can't be edited/verified before sending | 10 comments, **103 👍**; highest voted feature this period |
| [#8619](https://github.com/anomalyco/opencode/issues/8619) | **Native StatusLine hook for plugins** | Plugin API gap—current workarounds pollute LLM context with injected status text | 11 comments, 25 👍; affects plugin quality |
| [#5444](https://github.com/anomalyco/opencode/issues/5444) | **MCP with OAuth doesn't work** | Enterprise integration blocker—Atlassian Jira MCP auth flow broken | 9 comments, 1 👍; `remote` MCP type affected |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#19483](https://github.com/anomalyco/opencode/pull/19483) | **refactor(session): effectify SessionPrompt service** | Major architectural migration to Effect pattern with fiber-based cancellation; replaces manual AbortController | 🟡 Open, `beta` + `Vouched` |
| [#9365](https://github.com/anomalyco/opencode/pull/9365) | **per-session working directories** | Enables `Session.directory.get()/set()` for git worktrees and plugin isolation; foundational for advanced workflows | 🟡 Open |
| [#19520](https://github.com/anomalyco/opencode/pull/19520) | **patch StdinParser for fragmented mouse sequences** | Fixes garbled text during busy event loops (60fps + streaming); resolves #3199 | 🟡 Open |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | **add Open WebUI provider** | Self-hosted UI integration; builds on community PR #14341 with docs and fixes | 🟡 Open |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile Touch Optimization** | Touch device support while preserving desktop experience; expands platform reach | 🟡 Open |
| [#12520](https://github.com/anomalyco/opencode/pull/12520) | **mcp-search tool for lazy loading** | Performance optimization—on-demand MCP server loading vs. startup initialization | 🟡 Open |
| [#19561](https://github.com/anomalyco/opencode/pull/19561) | **fix: nix embedded web-ui support** | Fixes #19307; enables full web UI in Nix builds | ✅ Closed |
| [#19556](https://github.com/anomalyco/opencode/pull/19556) | **use MCP tool name in permission patterns** | Security/UX fix—shows actual tool name instead of `*` in permission dialogs; fixes #19549 | ✅ Closed |
| [#15697](https://github.com/anomalyco/opencode/pull/15697) | **make questions popup collapsible** | UI polish for interview-style workflows; demo video attached | 🟡 Open, `beta` + `Vouched` |
| [#19559](https://github.com/anomalyco/opencode/pull/19559) | **custom sound uploads in settings** | Personalization—data URL storage for custom audio effects | 🟡 Open |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Context Transparency & Control** | #6152 (/context), #7101 (custom prompts), #8501 (expand pastes), #8619 (StatusLine) | High—users want visibility into what the LLM sees |
| **Subagent/Agent Orchestration** | #6651 (dynamic model selection), #19415 (/subagents command), #19239 (subagent execution bugs) | Growing—multi-agent patterns maturing |
| **Provider Ecosystem Expansion** | #10726 (Atlassian Rovo), #18306 (Open WebUI), #19522 (Thaura AI—closed), #768 (Copilot quotas) | Steady—enterprise and self-hosted demand |
| **TUI/Accessibility Improvements** | #16252 (IME support), #19520 (mouse sequence fixes), #15697 (collapsible UI) | Active—internationalization and input reliability |
| **Event/Integration Surfaces** | #19567/#19568 (durable event export), #8619 (plugin hooks) | Emerging—external tool ecosystem building |

---

## Developer Pain Points

1. **Provider Reliability & Observability** — Claude Max outage (#7410) and model-specific loops (#3743) show fragility in multi-provider abstraction; users need better fallback mechanisms and real-time status.

2. **Cost Tracking Gaps** — Copilot premium requests (#768) and unaccounted token costs (#7175) indicate billing transparency remains incomplete across non-standard providers.

3. **Configuration Hot-Reload** — #10899 highlights that *every* config change requires restart, severely impacting iteration speed for desktop users.

4. **MCP Integration Friction** — OAuth flows (#5444) and permission UX (#19556) show enterprise MCP adoption is bumpier than expected; "remote" MCP type specifically needs attention.

5. **Plugin API Limitations** — #8619 and #14808 demonstrate that plugin developers lack clean hooks for persistent UI state and event subscription, forcing context-polluting workarounds.

6. **Windows/WSL Edge Cases** — #19502 (paste inconsistency) and ongoing terminal compatibility issues suggest Windows developer experience needs dedicated QA attention.

---

*Digest compiled from 50 issues and 50 PRs updated 2026-03-28 to 2026-03-29.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-29

---

## 1. Today's Highlights

The community is actively pushing toward enterprise-grade reliability with **wenshao**'s major `/review` enhancement adding verification pipelines and PR comment automation. Meanwhile, **tanzhenxin** is driving infrastructure expansion through cron-based session scheduling and multi-platform messaging channels. A notable surge in Windows-specific path bugs and context window management issues signals growing cross-platform adoption challenges.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2727](https://github.com/QwenLM/qwen-code/issues/2727) | Shell commands fail with "File not found" on Windows | **Critical Windows compatibility blocker** — npm/npx commands fail despite proper installation, suggesting PATH resolution or shell execution environment bugs. 5 comments indicate active investigation. | 🔥 High priority; affects core workflow |
| [#2409](https://github.com/QwenLM/qwen-code/issues/2409) | Bring subagent system to feature parity with Claude Code | **Strategic gap analysis** — quantifies current subagent coverage at 40-45% vs. Claude Code. Long-running discussion (12 days) with architectural proposals. | 📊 Roadmap-relevant; competitive positioning |
| [#2447](https://github.com/QwenLM/qwen-code/issues/2447) | Skill Testing Framework: Recording, Playback, and Assertions | **Quality infrastructure** — addresses testing gap for hundreds of managed skills. Bilingual proposal indicates internal Alibaba engineering needs. | 🏗️ Foundation work; maintenance scalability |
| [#2641](https://github.com/QwenLM/qwen-code/issues/2641) | "pathetic Qwen" — model reliability complaints | **User trust erosion** — emotional feedback about code destruction despite guardrails. Reflects broader agent consistency challenges in production environments. | ⚠️ Sentiment indicator; needs triage |
| [#2722](https://github.com/QwenLM/qwen-code/issues/2722) | VSCode "Edit automatically" bypasses command restrictions | **Security/UX boundary failure** — auto-approval scope creep in IDE extension. Safety-critical for enterprise adoption. | 🛡️ Security-relevant; permissions model |
| [#2613](https://github.com/QwenLM/qwen-code/issues/2613) | 阿里coding产品解惑 (Alibaba coding product confusion) | **Ecosystem clarity gap** — user confusion between Qoder CLI, Qwen Code, and Lingma (灵码). Indicates branding/marketing fragmentation. | 📢 Documentation need; onboarding friction |
| [#2630](https://github.com/QwenLM/qwen-code/issues/2630) | Session Alias and Auto-Summarization | **UX scalability** — UUID-only session IDs create management friction at scale. Links to related session management issues. | 🎯 Productivity enhancement; session hygiene |
| [#2695](https://github.com/QwenLM/qwen-code/issues/2695) | JSON serialization failure mid-conversation | **Runtime stability** — DeepSeek API integration breaking on message serialization. Indicates provider-agnostic robustness gaps. | 🐛 Integration bug; data pipeline |
| [#2685](https://github.com/QwenLM/qwen-code/issues/2685) | "你好" consumes 20% context window | **Token efficiency crisis** — suggests aggressive system prompt or context fallback behavior. Darw in arm64 environment. | 💰 Cost/performance impact; context strategy |
| [#2686](https://github.com/QwenLM/qwen-code/issues/2686) | Tool call parameter amnesia (遗忘) | **Agent reliability** — `edit`/`write` tools frequently missing `newString`/`oldString`/`content` parameters. "鬼打墙" (ghost wall) describes frustrating loop behavior. | 🔄 Core agent loop; tool use robustness |

---

## 4. Key PR Progress

| # | PR | Contribution | Technical Significance |
|---|-----|------------|----------------------|
| [#2687](https://github.com/QwenLM/qwen-code/pull/2687) | Enhance `/review`: verification, false positive control, PR comments | **Multi-stage review pipeline** — adds Step 2.5 verification agents with parallel confirmation/rejection, plus GitHub PR inline comments via `gh api`. | Production-grade code review automation |
| [#2732](https://github.com/QwenLM/qwen-code/pull/2732) | Math rendering support (fractions, fractals, LaTeX) | **Rich output formatting** — LaTeX rendering + Markdown validator to prevent code block breaking. Addresses display quality for technical domains. | Scientific/technical user experience |
| [#2731](https://github.com/QwenLM/qwen-code/pull/2731) | In-session loop scheduling with cron tools | **Background job infrastructure** — session-scoped `cron_set`/`cron_list`/`cron_unset` tools for periodic monitoring without blocking interaction. | Long-running operation management |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | Channels platform with Telegram/WeChat/DingTalk | **Multi-platform messaging** — plugin-based adapter system for bidirectional messaging platform integration. Enterprise notification workflows. | Deployment flexibility; ops integration |
| [#2728](https://github.com/QwenLM/qwen-code/pull/2728) | Centralize IDE diff interaction in CoreToolScheduler | **Architecture refactoring** — consolidates `openDiff`/confirmation handling, fixing token waste (#2709) and multi-edit race conditions (#2702). Supersedes tool-level fixes. | Technical debt reduction; correctness |
| [#2718](https://github.com/QwenLM/qwen-code/pull/2718) | Prevent terminal response leakage on high-latency SSH | **Edge case robustness** — kitty protocol detection timing out over slow SSH, causing escape sequence garbage. 200ms timeout handling. | Remote development experience |

*Note: Only 6 PRs had activity in the last 24h; #2726 was closed without merge.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Subagent/Agent Ecosystem Expansion** | #2409 (Claude parity), #2447 (skill testing), #2731 (cron loops) | High — core differentiator investment |
| **Enterprise Code Review Integration** | #2687 (PR comments, verification) | High — CI/CD pipeline embedding |
| **Cross-Platform Messaging/Notifications** | #2628 (Channels platform) | Medium — operational awareness |
| **Session Management & Discoverability** | #2630 (aliases, summarization), #2613 (product clarity) | Medium — scale UX |
| **Mathematical/Technical Content Rendering** | #2732 (LaTeX, fractions) | Niche but deep — scientific users |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Windows Environment Fragility** | #2727 (shell PATH), path resolution inconsistencies | 🔴 Critical — platform parity gap |
| **Context Window Bloat & Cost** | #2685 (20% on greeting), implicit token consumption | 🔴 High — directly impacts API costs |
| **Tool Use Reliability** | #2686 (parameter amnesia), #2641 (destructive changes) | 🔴 High — trust erosion in automation |
| **Multi-Product Confusion** | #2613 (Qoder vs Qwen Code vs Lingma) | 🟡 Medium — onboarding friction |
| **Provider Integration Robustness** | #2695 (DeepSeek JSON errors) | 🟡 Medium — abstraction layer gaps |
| **Security Boundary Clarity** | #2722 (auto-edit overreach) | 🟡 Medium — enterprise policy alignment |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-03-28 to 2026-03-29.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*