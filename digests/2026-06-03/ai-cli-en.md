# AI CLI Tools Community Digest 2026-06-03

> Generated: 2026-06-03 00:36 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-06-03

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive, multi-polar market with seven actively developed tools serving distinct developer segments. All major players now grapple with production-scale reliability challenges—memory leaks, session stability, and cost control—indicating the category has moved beyond demo-phase into sustained daily-use expectations. Provider ecosystem breadth has become a universal priority, with each tool racing to support diverse model backends (OpenAI, Anthropic, Google, DeepSeek, and regional providers) while maintaining consistent UX abstractions. Security hardening around autonomous agent execution, particularly MCP server approval gating and workspace trust boundaries, represents a collective response to enterprise adoption. The community signal is clear: developers want CLI tools that match IDE power with terminal velocity, but are increasingly intolerant of opaque costs, silent failures, and platform-specific fragility.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Activity Level |
|------|:-----------:|:---------:|:-------------:|:--------------|
| **Claude Code** | 10+ hot issues tracked | 4 active | v2.1.160–161 (2 releases) | 🔥 High — rapid security releases, acute billing crisis |
| **OpenAI Codex** | 10+ hot issues | 10 active | None | 🔥 High — backend incident response, auth system strain |
| **Gemini CLI** | 9 hot issues | 10 active | 1 nightly (v0.45.0-nightly.20260602) | 🔥 High — terminal optimization sprint, security hardening |
| **GitHub Copilot CLI** | 10 hot issues | **0** | v1.0.58–59 (2 releases) | 🟡 Moderate — release-heavy, zero PR activity suggests code freeze |
| **Kimi Code CLI** | **2** | **0** | None | 🔴 Low — minimal activity, whitelist maintenance only |
| **OpenCode** | 10 hot issues | 10 active | None | 🔥 High — memory megathread, pricing pressure, architectural consolidation |
| **Pi** | 10 hot issues | 10 active | None | 🔥 High — provider expansion burst, TUI performance work |
| **Qwen Code** | 10 hot issues | 10 active | 1 nightly (v0.17.0-nightly.20260602) | 🔥 High — long-session stability sprint, runtime configurability push |
| **DeepSeek TUI / CodeWhale** | 10+ hot issues | 10 active | v0.8.50 (rename release) | 🔥 High — rebrand turbulence, engine reliability crisis |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP Security & Approval Gating** | Claude Code, Qwen Code, OpenCode | Project-scoped `.mcp.json` with explicit untrusted-source approval; prevents auto-execution in cloned repos (#16157-adjacent, #4615, #4713) |
| **Memory Leak & Session Stability** | Claude Code, OpenCode, Qwen Code, DeepSeek TUI, Gemini CLI | OOM-on-quit elimination, heap snapshot diagnostics, compaction strategies, shallow history clones (#20695, #4698, #4717, #4694) |
| **Provider Ecosystem Breadth** | Pi, DeepSeek TUI, Gemini CLI, OpenCode, OpenAI Codex | China-market endpoints (ZAI, MiniMax-CN, SiliconFlow), enterprise GCP (Anthropic Vertex), fallback chains for resilience (#5333, #2588, #2595, #2581) |
| **Runtime Configurability** | Qwen Code, OpenCode, Claude Code | Body timeouts, output directories, model switching without restart; production-tunable knobs (#4711, #4667, #4709, #4715) |
| **Usage Transparency & Cost Control** | Claude Code, OpenCode, DeepSeek TUI, OpenAI Codex | Surfaced real-time spend, billing attribution correction, rate limit visibility, markup pass-through (#16157, #28846, #743, #19555, #23671) |
| **Subagent/Skill Orchestration** | Gemini CLI, OpenCode, Claude Code | Hang recovery, false success detection, skill utilization improvement, recursive invocation (#21409, #22323, #21968, #8554) |
| **Cross-Platform Terminal Reliability** | GitHub Copilot CLI, Pi, DeepSeek TUI, Gemini CLI | Windows PATH inheritance, WSL clipboard, Ghostty/iTerm2 compatibility, CJK rendering, mouse scroll behavior (#2355, #2205, #1556, #27588, #5328) |
| **Persistent Memory & Session Continuity** | GitHub Copilot CLI, OpenCode, Claude Code | Cross-session learning, chat history restoration, `/resume` reliability, auto-memory hardening (#446, #3639, #20322, #20695) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|:-----------:|:------------:|:----------:|:------------------:|:--------:|:--:|:---------:|:------------:|
| **Primary User** | Enterprise teams, Anthropic ecosystem | OpenAI subscribers, image workflows | Google Cloud developers, research | GitHub-centric developers, IDE-CLI bridge | Multi-provider power users, self-hosters | Extension authors, polyglot model users | Alibaba Cloud/Bailian users, China market | DeepSeek API loyalists, cost-optimizers |
| **Feature Focus** | Agent autonomy, security hardening | Image generation, sandboxing, governance | Subagent architecture, AST-aware tooling | IDE parity, voice input, scheduled prompts | Recursive LLM patterns, provider abstraction | Provider breadth, TUI performance, extensibility | Long-session stability, runtime knobs | Engine reliability, China compliance, multimodal |
| **Technical Approach** | Node.js/Electron, heavy context windows | Rust + TypeScript, strong sandbox | Go, hierarchical agent design | Go, Bubble Tea TUI, JSON-RPC bridge | TypeScript monorepo, desktop + CLI | Rust, extension API, ANSI-native TUI | Rust daemon + WebShell, compaction architecture | Rust TUI, append-only log, provider chains |
| **Billing Model** | Subscription tiers (Pro/Max), opaque context billing | Codex credits, Plus/Business tier gating | Free tier, Google Cloud integration | Copilot Pro/Enterprise, per-token pricing | OpenCode Go subscription (4× markup) | API-key pass-through, usage tracking | Bailian/DashScope, self-hosted options | DeepSeek API direct, cost-sensitive |
| **Security Posture** | Aggressive: prompt-before-write, symlink hardening | Governance: approval reviewers, integrity verification | SSRF protection, corporate auto-update disable | Workspace approval, `.pi` directory gating | `AGENTS.md` guardrails (evadable) | Interactive approval for extensions | MCP approval gating, auto-skill control | Emerging, project-scoped config |
| **Maturity Signal** | Revenue-impacting billing crisis, memory leaks | Auth system brittleness, model availability flapping | Subagent hangs, terminal desync | Zero PR activity, rapid feature shipping | Architectural consolidation, pricing pressure | Active provider expansion, performance work | Long-session OOM saga, runtime configurability | Rebrand turbulence, engine death crisis |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **🔥 Highest Momentum** | Claude Code, OpenCode, Qwen Code, Pi | Sustained high issue/PR velocity, maintainer responsiveness, architectural investment. Claude Code's billing crisis paradoxically signals massive user base; OpenCode's memory megathread shows mature diagnostic culture; Qwen Code's compaction and shallow-clone work indicates systems-level maturity; Pi's provider expansion burst reflects global ambition. |
| **🟡 Strong but Stressed** | Gemini CLI, DeepSeek TUI | Active development with clear technical direction (Gemini: terminal perf, security; CodeWhale: provider resilience, engine recovery). Both face core reliability blockers—subagent hangs and engine death respectively—that threaten user retention. |
| **🟡 Platform-Dependent** | OpenAI Codex, GitHub Copilot CLI | Codex has backend infrastructure strain and auth system debt; Copilot CLI's zero PR activity with same-day dual releases suggests either code freeze or private-branch development. Both benefit from massive distribution but show symptoms of organizational scale challenges. |
| **🔴 Lagging** | Kimi Code CLI | Minimal activity (2 issues, 0 PRs, 0 releases), reactive whitelist maintenance. Zoo Code request (#2416) highlights dependency on ecosystem forks without proactive engagement. Risk of marginalization without accelerated investment. |

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Cost Transparency as Competitive Differentiator** | Claude Code's 1M-context billing uproar (#16157, #38335), OpenCode's 4× markup pressure (#28846), OpenAI Codex's rate-limit equity concerns (#23671), DeepSeek TUI's token explosion (#743) | Developers now evaluate tools on *predictable* total cost of ownership, not just capability. Tools surfacing real-time spend and offering granular context-window control will win enterprise procurement. |
| **Agent Autonomy vs. Human Control Tension** | Claude Code's ScheduleWakeup cost drain (#64744), OpenCode's unauthorized DB truncation (#27745), Qwen Code's auto-skill disable demand (#4714), Gemini's agent overreach concerns (#22672) | The "YOLO mode" era is ending. Community demands explicit approval gates, circuit breakers, and revert granularity. Safety UX will be as important as model capability for production deployment. |
| **Context Window as Resource, Not Feature** | Forced 1M context in Claude Code (#62063), compaction strategies in Qwen Code (#4694), OpenAI Codex's compact task failures (#14860) | Larger context windows are becoming a liability when billed opaquely. Efficient context management—compaction, AST-aware reads, selective loading—is emerging as a core engineering discipline. |
| **Terminal as First-Class Platform** | VirtualizedList optimization (Gemini #27636), TUI performance (Pi #5343), Ghostty compatibility (DeepSeek #1556), CJK rendering (Pi #5328) | Terminal emulators are evolving rapidly; CLI tools must match IDE-grade rendering performance and compatibility. The "good enough" TUI is no longer sufficient for daily-use developer tools. |
| **Provider Abstraction as Necessity** | Pi's 10+ provider additions, DeepSeek's fallback chains (#2581), OpenCode's multi-provider support, Claude Code's model routing | Vendor lock-in resistance is now a default requirement. Tools with clean provider abstraction and rapid onboarding for new models will capture polyglot teams and regulated markets (China, EU). |
| **Memory Persistence as Trust Boundary** | Auto Memory security issues (Gemini #26525–26523), OpenCode's memory megathread (#20695), Copilot CLI's session continuity requests (#446, #3639) | Persistent agent memory crosses from convenience to compliance concern. Pre-context redaction, deterministic retention policies, and user-controlled quarantine are becoming table stakes for enterprise adoption. |

---

*Report compiled from 2026-06-03 community digests across nine active AI CLI tools. Data reflects 24-hour GitHub activity windows.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-03 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | Typographic quality control for AI-generated documents: prevents orphan word wrap, widow paragraphs, and numbering misalignment | Universal pain point identified—"affects every document Claude generates"; author notes users rarely ask for good typography but always suffer from bad output |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 OPEN | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) with LibreOffice/ISO standard compliance | Enterprise interoperability focus; targets open-source document workflows |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 OPEN | Revised guidance for actionable, single-conversation frontend design tasks | Emphasis on "actually followable" instructions vs. vague guidelines; token efficiency concern |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN | Meta-skills: automated quality scoring (5 dimensions) and security review for Claude Skills | First systematic approach to skill validation; addresses ecosystem maturity |
| 5 | **Agent Creator** | [#1140](https://github.com/anthropics/skills/pull/1140) | 🟡 OPEN | Task-specific agent set generation; fixes multi-tool evaluation and Windows pathing | Critical stability fixes bundled; addresses [#1120](https://github.com/anthropics/skills/issues/1120) |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 OPEN | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Niche but high-value enterprise use case; Apache 2.0 model integration |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 OPEN | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, edge cases | Comprehensive coverage; fills gap in software quality skills |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 OPEN | Broad enterprise platform coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub | Largest scope skill proposed; targets IT operations market |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) | Enterprise teams need centralized skill libraries; manual `.skill` file distribution is friction |
| **Skill-Creator Tooling Hardening** | [#556](https://github.com/anthropics/skills/issues/556), [#202](https://github.com/anthropics/skills/issues/202) | Core developer experience broken: 0% trigger rates, Windows incompatibilities, UTF-8 panics |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (7 comments) | Community skills impersonating `anthropic/` namespace; need verified publisher model |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#1102](https://github.com/anthropics/skills/issues/1102) | Skills-as-MCPs requested; MCP data compression needed for database integrations |
| **Multi-file Skill Architecture** | [#1220](https://github.com/anthropics/skills/issues/1220) | Skills split across reference files need inline bundling; current `SKILL.md`-only delivery limits modularity |
| **Plugin System Integrity** | [#189](https://github.com/anthropics/skills/issues/189), [#1087](https://github.com/anthropics/skills/issues/1087) | Duplicate skills, marketplace.json ignored—plugin packaging is unreliable |

---

## 3. High-Potential Pending Skills

These PRs have active discussion and clear utility but remain unmerged:

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal, daily friction; no dependencies | Scope creep—could expand to full typesetting engine |
| **Agent Creator + Eval Fixes** | [#1140](https://github.com/anthropics/skills/pull/1140) | Bundles critical bug fixes; addresses open issue | Meta-skill complexity; needs security review |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills documented gap; aligns with software quality trend | Overlap with existing test-generation skills? |
| **macOS Sensory (AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Unique platform-native automation; two-tier permission model is thoughtful | macOS-only; limited audience |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | End-to-end deployment from Claude; clear commercial integration | Vendor-specific (appdeploy.ai); potential conflict of interest |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure**—not more domain-specific skills, but tooling to create, validate, share, and secure skills at organizational scale, with Windows parity and trust boundaries treated as first-class concerns.

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills. All GitHub links verified as of 2026-06-03.*

---

# Claude Code Community Digest — 2026-06-03

---

## 1. Today's Highlights

Anthropic shipped two rapid-fire releases (v2.1.160–161) hardening security around shell startup files and build-tool configs while adding OpenTelemetry attribute passthrough for usage metrics. Meanwhile, the community remains in uproar over **1M context forced upgrades burning through paid plans** and a **fresh wave of memory/process leaks** on Linux, with multiple new reports of runaway Node.js subprocesses and OOM kills.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.161** | `OTEL_RESOURCE_ATTRIBUTES` now propagate as metric labels for custom dimensions (team, repo); `claude agents` UI improved with `done/total` progress indicators and peek-to-longest-item |
| **v2.1.160** | **Security**: Prompts added before writing to shell startup files (`.zshenv`, `.bash_login`, etc.) and `~/.config/git/`; `acceptEdits` mode now warns before writing build-tool configs that grant code execution (e.g., `.npmrc`) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Instant usage limits with Max subscription** — users hitting caps immediately | Core revenue-impacting bug; affects paid Max subscribers' basic usability | 🔥 1,476 comments, 691 👍 — the dominant thread |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Max plan sessions exhausting abnormally fast since March 23** | Pattern suggests systemic miscounting or context-window billing inflation | 760 comments, 461 👍; marked `invalid` but persists |
| [#8856](https://github.com/anthropics/claude-code/issues/8856) | **Memory leak: `/tmp/claude-*-cwd` files never cleaned up** | Long-running sessions accumulate disk garbage; has repro | 107 comments, 68 👍 — long-standing, now competing with RAM leaks |
| [#4953](https://github.com/anthropics/claude-code/issues/4953) | **Process grows to 120+ GB RAM, OOM killed** | Severe stability issue for extended Linux sessions | 92 comments, 69 👍; `oncall` tagged |
| [#62063](https://github.com/anthropics/claude-code/issues/62063) | **Defaults to 1M context on Pro plan with no workaround** | Forces expensive context window users didn't choose; billing surprise | 41 comments, 23 👍; duplicate of broader 1M context complaints |
| [#22264](https://github.com/anthropics/claude-code/issues/22264) | **Sibling tool calls cascade-fail when one errors** | Breaks parallel tool execution reliability; forces wasteful retries | 32 comments, 61 👍; `has repro` |
| [#20131](https://github.com/anthropics/claude-code/issues/20131) | **Feature Request: Multi-Account Profile Support** | Top auth UX request; logout/login cycle is friction for multi-org users | 30 comments, 83 👍 |
| [#63576](https://github.com/anthropics/claude-code/issues/63576) | **Parallel tool calls trigger persistent "Cancelled" errors** | Kills entire sessions permanently; restart doesn't recover | 7 comments, 19 👍; fresh, severe |
| [#64832](https://github.com/anthropics/claude-code/issues/64832) | **~115 Node.js subprocess leak in v2.1.160, system OOM** | New in latest release; 32 GB RAM exhausted in 8 minutes | 2 comments, 0 👍 — critical, needs attention |
| [#64744](https://github.com/anthropics/claude-code/issues/64744) | **ScheduleWakeup persists after Ctrl+C, auto-respawns burning tokens** | Unattended cost drain; daemon loop ignores user interruption | 3 comments, 1 👍; scary for metered users |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#64857](https://github.com/anthropics/claude-code/pull/64857) | Fix `extensibility.py` following symlinks in project-controlled GUI | Security hardening: symlink traversal in GUI extensibility | 🟡 Open |
| [#64728](https://github.com/anthropics/claude-code/pull/64728) | Remove stale `statsig.anthropic.com` from devcontainer firewall | Fixes devcontainer bootstrap failure due to dead DNS record | 🟡 Open |
| [#62821](https://github.com/anthropics/claude-code/pull/62821) | Docs: env-bridge workaround for plugin-MCP session-id | Documents community workaround for #61752 | ✅ Merged |
| [#64607](https://github.com/anthropics/claude-code/pull/64607) | Fix plugin `.mcp.json` example: remove incorrect `mcpServers` wrapper | Corrects docs that mislead plugin authors on config format | 🟡 Open |

*Only 4 PRs active in last 24h; no other qualifying items.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-account / profile switching** | #20131, #24963, #30031, #22872 | 🔥🔥🔥 Highest-voted auth request; users want `gh auth switch`-like UX |
| **Native WSL/Windows integration** | #49933 | Strong (42 👍); Windows devs feel second-class |
| **Hook extensibility → subagent spawning** | #64898 | Emerging; hooks are popular, want programmatic agent dispatch |
| **Global plugin rules (cross-repo)** | #56318 | Niche but merged-adjacent; `~/.claude/` config standardization |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Forced 1M context / billing surprises** | #16157, #38335, #62063, #63634, #64717 | **Pervasive** — the dominant complaint category; Pro/Max users feel trapped into expensive context windows with no opt-out |
| **Memory & process leaks** | #4953, #8856, #64832, #63576 | **Escalating** — new v2.1.160 subprocess leak adds to chronic `/tmp` and RAM issues |
| **Parallel tool call fragility** | #22264, #63576 | **Persistent** — parallel execution is unreliable; cascade failures waste tokens and break flow |
| **Account switching friction** | #20131, #22872, #24963, #30031 | **Chronic** — multi-org developers daily pain, no official timeline |
| **Opaque/autonomous token spend** | #64744 (ScheduleWakeup), #64136 (Bash storms) | **Growing concern** — agents behaving autonomously in ways that drain budgets without clear user control |

---

*Digest compiled from github.com/anthropics/claude-code activity 2026-06-02/03.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-03

## 1. Today's Highlights

A widespread `gpt-image-2` model outage hit both Codex CLI and App users on June 2, generating dozens of duplicate bug reports that were rapidly closed, suggesting a backend configuration error rather than client-side regression. Meanwhile, authentication system failures—particularly around legacy phone number verification and business access tokens—continue to generate sustained community frustration with multi-day threads and no clear resolution path.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14860](https://github.com/openai/codex/issues/14860) | **Remote compact task error** — Context compaction fails on Linux with gpt-5.4 | Long-running CLI sessions hit a hard blocker; affects core reliability for Pro users doing large codebase work | 91 comments, 71 👍 — most engaged open issue, persistent since March with ongoing reports |
| [#14331](https://github.com/openai/codex/issues/14331) | **GPT-5.3-Codex model unavailable on paid accounts** | Subscription entitlement bug blocking model access for Plus users | 49 comments; closed June 2 but pattern of paid-tier model gating errors recurring |
| [#25967](https://github.com/openai/codex/issues/25967) | **`gpt-image-2` does not exist (App)** | Complete image generation breakage in latest App build (26.601.20914) on macOS | 48 comments, 27 👍; mass-reported, closed rapidly — indicates service-side model deployment issue |
| [#25965](https://github.com/openai/codex/issues/25965) | **`gpt-image-2` does not exist (CLI)** | Same backend failure affecting CLI 0.135.0/0.136.0 on macOS | 35 comments, 43 👍; high engagement suggests critical path for image workflows |
| [#25972](https://github.com/openai/codex/issues/25972) | **`image_generation_user_error` in CLI** | Related image generation failure with gpt-5.5 xhigh on macOS | 32 comments, 26 👍; variant of same incident with different error surface |
| [#25749](https://github.com/openai/codex/issues/25749) | **Legacy phone number lockout with no recovery** | Auth system requires verification of inaccessible number, no replacement path | 23 comments, 11 👍; severe account access issue, affects Google OAuth + MFA users |
| [#25670](https://github.com/openai/codex/issues/25670) | **Authentication "literally broken"** | Passkey + app MFA + phone layers still demand old phone number | 18 comments, 10 👍; escalating auth friction, multi-day thread |
| [#24098](https://github.com/openai/codex/issues/24098) | **Windows elevated sandbox fails post-update** | `spawn setup refresh` breaks sandbox on Windows 10/11; unelevated works | 14 comments; security/UX regression, workaround reduces isolation |
| [#25971](https://github.com/openai/codex/issues/25971) | **`gpt-image-2` does not exist (App, duplicate cluster)** | Confirms cross-platform scope of image model outage | 14 comments, 36 👍; closed, part of incident cluster |
| [#21638](https://github.com/openai/codex/issues/21638) | **Double paste in Windows desktop terminal** | Embedded terminal keyboard paste duplication | 9 comments, 4 👍; persistent Windows polish issue since May |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#25989](https://github.com/openai/codex/pull/25989) | **Native integrity state bridge** — App-server RPCs for `nativeIntegrityState/read/write/clear` | Adds experimental integrity verification primitives with client-surface-derived state files and lock-free rotation | Open |
| [#25688](https://github.com/openai/codex/pull/25688) | **Managed per-app approval requirements** — `requirements.toml` constraints for reviewer maps | Enterprise governance: app-specific approval reviewers with layered config merging | Open, code-reviewed |
| [#25232](https://github.com/openai/codex/pull/25232) | **Window generation from rollout lineage** — Fixes `x-codex-window-id` semantics after rollback/resume/fork | Corrects distributed session identity for resumed or rolled-out conversations | Open |
| [#25946](https://github.com/openai/codex/pull/25946) | **Compaction token analytics** — Reports v1/v2 `responses_compact` before-tokens with estimation fallback | Observability for context compression, addresses related #14860 debugging needs | Open |
| [#25364](https://github.com/openai/codex/pull/25364) | **SessionStart hook environment overlays** — Shell-agnostic dynamic env var publishing | Enables setup hooks to configure tool paths without cross-shell serialization pain | Open |
| [#25976](https://github.com/openai/codex/pull/25976) | **Stable item IDs for Responses API** — Deterministic IDs across API calls | Reliability fix for idempotency and retry semantics in responses-based integrations | Open |
| [#25925](https://github.com/openai/codex/pull/25925) | **Copy user Bazel settings into worktrees** — Preserves `user.bazelrc` across Codex-created worktrees | Developer experience for Bazel-based monorepos, fixes config loss on every new worktree | Open |
| [#25960](https://github.com/openai/codex/pull/25960) | **Restore Windows image generation coverage** — Re-enables standalone image gen tests on Windows CI | Fixes test gap from V8 runtime exclusion; quality signal for Windows parity | Open |
| [#25945](https://github.com/openai/codex/pull/25945) | **Windows signing environment deployment** — Reusable workflow for Windows release signing | Release infrastructure; enables smoke-tested Windows signing pipeline | Open |
| [#15730](https://github.com/openai/codex/pull/15730) | **Harden symlinked project config writes** — Rejects symlinked `.codex/config.toml`, no-follow reads | Security hardening against config tampering via symlink attacks | Open |

---

## 5. Feature Request Trends

- **Usage transparency**: CLI statusline for remaining Codex credits/usage (#19555) — explicit comparison to Claude Code's surfaced usage indicates competitive pressure for billing visibility
- **Rate limit equity**: Business tier usage draining 5–10× faster than Plus for identical tasks (#23671) — suggests opaque or misconfigured enterprise metering
- **Custom provider compatibility**: Hardcoded `codex-auto-review` model name breaks non-OpenAI backends (#24879) — growing demand for BYO-model flexibility
- **Session/portability**: Chat history restoration, `/resume` reliability, and cross-device continuity — multiple issues indicate state management fragility

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Authentication brittleness** | #25749, #25670, #25246 — phone number lockout, broken MFA flows, expired business tokens | 🔴 Critical — account access blockers with no self-service recovery |
| **Model availability flapping** | #25967 cluster, #14331 — `gpt-image-2` and GPT-5.3/5.x tier gating failures on paid accounts | 🔴 Critical — breaks core product promises |
| **Windows second-class status** | #24098, #21638, #25160, #25178, #25810, #25987 — sandbox, paste, maximization, screenshot, thread policy, `/resume` bugs | 🟡 High — disproportionate platform-specific regressions |
| **Context/session reliability** | #14860 (compact), #23999 (history loss), #25232 (window lineage) — long-running work fragile | 🟡 High — undermines trust for serious projects |
| **Plugin/config erosion** | #25758, #25973 — Computer Use/Browser plugins disappear on update; bundled config overwritten | 🟡 High — update safety concerns |
| **Image generation misrouting** | #25974 — GPT-5.5 spuriously invokes image gen for non-image prompts | 🟢 Moderate — model behavior tuning issue |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-03

## Today's Highlights

The nightly release pipeline delivered **v0.45.0-nightly.20260602** with a notable model routing improvement, while the community continues to grapple with agent reliability issues—particularly subagent hangs, silent failures, and recovery problems. A significant push on terminal performance optimization is underway with two related PRs targeting VirtualizedList rendering, alongside ongoing security hardening for MCP OAuth flows and corporate deployment scenarios.

---

## Releases

**[v0.45.0-nightly.20260602.g665228e98](https://github.com/google-gemini/gemini-cli/compare/v0.45.0-nightly.20260530.g013914071...v0.45.0-nightly.20260602.g66522)** — Model routing enhancement: transitions to the **Flash GA model** when the experiment flag is present, moving away from preview/experimental endpoints for more stable production use. Change by @DavidAPierce.

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|-------------|----------------|
| **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** | EPIC expanding behavioral eval infrastructure; critical for measuring agent quality at scale beyond end-to-end tests. 76 behavioral tests already running across 6 Gemini variants. | 7 comments, P1 priority, active maintainer engagement |
| **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** | Could dramatically reduce token waste and turn count by enabling precise method-boundary reads instead of line-based heuristics. Linked to evaluation of `tilth`, `glyph`, and `ast-grep`. | 7 comments, strong technical interest, linked to #22746, #22747 |
| **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** | Severe UX blocker: any deferral to generalist agent causes indefinite hangs (tested up to 1 hour). Workaround (disabling subagents) defeats core architecture. | 7 comments, **8 upvotes** — highest community signal in dataset |
| **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** | Silent failure mode: `codebase_investigator` claims success despite hitting turn limits with zero analysis performed. Masks degraded agent performance. | 6 comments, 2 upvotes, detailed reproduction |
| **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** | Core agent orchestration failing: custom skills (gradle, git) ignored even for highly relevant tasks. Suggests prompt/routing layer gaps. | 6 comments, anecdotal but widely relatable |
| **[#25166 — Shell command execution stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** | Terminal state desynchronization: completed commands appear active, blocking workflow. Reproducible on simple commands without input requirements. | 4 comments, 3 upvotes, P1 |
| **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** | Linux display server compatibility gap; Wayland adoption growing, browser automation increasingly critical for web-focused agents. | 4 comments, 1 upvote |
| **[#26525 — Deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** | Security concern: secrets enter model context before redaction; service-side logging of skills data persists. Post-hoc redaction is insufficient for compliance. | 3 comments, P2 security-labeled |
| **[#26523 — Surface or quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523)** | Silent data loss: malformed/escaping memory patches skipped without user visibility; aggregate dismiss also misses invalid entries. | 3 comments, memory system reliability |
| **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** | Scale limitation: tool-rich environments (MCP + skills + subagents) hit API limits. Needs intelligent tool scoping/filtering. | 3 comments, need-information status |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| **[#27636 — perf: optimize VirtualizedList and fix click handling](https://github.com/google-gemini/gemini-cli/pull/27636)** | Major terminal rendering optimization: efficient large-dataset scrolling, robust static item click handling. P1, XL size. | Open, fresh (Jun 2–3) |
| **[#27070 — branch optimize virtual list2](https://github.com/google-gemini/gemini-cli/pull/27070)** | Preceding optimization work: scroll checkpoint optimization, test fixes post-rebase, plan-mode test stabilization. | Open, updated Jun 2 |
| **[#27626 — fix(core): block private OAuth metadata URLs](https://github.com/google-gemini/gemini-cli/pull/27626)** | SSRF protection for MCP OAuth discovery: prevents `fetch()` on private-range URLs from attacker-controlled MCP server responses. | Open, security-critical |
| **[#27639 — fix(cli): disable auto-update for corporate release paths](https://github.com/google-gemini/gemini-cli/pull/27639)** | Enterprise deployment fix: detects `/google/bin/` paths, suppresses auto-update prompts to prevent version drift in managed environments. | Open |
| **[#27614 — feat: add support for Gemini 3.5 Flash model family](https://github.com/google-gemini/gemini-cli/pull/27614)** | New model integration: `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview` with flags and resolution configs. | Open |
| **[#27580 — fix(at-command): prevent stack overflow from regex backtracking](https://github.com/google-gemini/gemini-cli/pull/27580)** | Replaces catastrophic regex parser with iterative scanner for `@` commands; fixes #27539 (DoS via large paste). | Open, P1 |
| **[#27588 — fix(cli): support WSL2 clipboard image paste](https://github.com/google-gemini/gemini-cli/pull/27588)** | Cross-platform UX: PowerShell interop for image clipboard access in WSL2, shared helper with native Windows path. Fixes #22274. | Open, help wanted |
| **[#27619 — fix(core): implement atomic update in MCP tool discovery](https://github.com/google-gemini/gemini-cli/pull/27619)** | Reliability: prevents "tool not found" during transient network drops by atomic refreshTools update (retain last-known-good until validation). | Open |
| **[#27591 — fix(cli): fall back for oversized bug report URLs](https://github.com/google-gemini/gemini-cli/pull/27591)** | Mobile/Termux fix: truncates `/bug` report URLs to stay within Android intent limits; preserves core diagnostic info. | Open |
| **[#27603 — fix(core): add platform-aware shell guidance](https://github.com/google-gemini/gemini-cli/pull/27603)** | Windows inclusivity: replaces Unix-only command examples with Windows equivalents (`win32` detection), snapshot test coverage. | Open |

---

## Feature Request Trends

1. **AST-Aware Tooling Integration** — Multiple issues (#22745, #22746, #22747) explore syntax-tree-based file operations for precise reads, reduced token consumption, and better codebase navigation. Evaluation of `ast-grep`, `tilth`, and `glyph` indicates this is an active investigation stream with potential for significant agent efficiency gains.

2. **Agent Self-Awareness & Introspection** — #21432 requests the CLI accurately understand its own flags, hotkeys, and execution modes to serve as self-documentation. Broader pattern: agents need better meta-cognition about available capabilities.

3. **Browser Agent Resilience** — #22232 (session takeover/lock recovery) and #22267 (settings.json override respect) show demand for more robust browser automation, especially for persistent sessions and CI/automated environments.

4. **Memory System Hardening** — Three P2 issues (#26522–#26525) target Auto Memory reliability: retry loops, invalid patch handling, and pre-context secret redaction. Suggests memory features are maturing from prototype to production-grade.

5. **Subagent/Skill Orchestration Improvements** — #21968 (skill underutilization), #20195 (local subagents), #20303 (remote agents Sprint 2) indicate the agent hierarchy needs smarter delegation and discovery mechanisms.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Subagent hangs & silent failures** | #21409 (generalist hangs), #22323 (false success on MAX_TURNS), #22093 (unauthorized subagent activation) | Critical — core workflow blockers |
| **Terminal state desynchronization** | #25166 (shell "waiting input"), #24935 (editor exit corruption), #21924 (resize flicker) | High — daily friction in CLI UX |
| **Tool scale limits** | #24246 (>128 tools → 400 error), #23571 (tmp script proliferation) | Moderate-High — power-user ceiling |
| **Cross-platform compatibility** | #21983 (Wayland), #27588 (WSL2 clipboard), #27603 (Windows shell guidance) | Moderate — Linux-primary, Windows/WSL gaps |
| **Security & privacy in memory/logging** | #26525 (redaction timing), #26523 (invalid patch leaks), #26522 (retry loops expose data) | Moderate — compliance-sensitive |
| **Agent overreach / destructive operations** | #22672 (discourage `git reset --force`, destructive DB ops) | Moderate — trust and safety concern |

---

*Digest compiled from google-gemini/gemini-cli public repository activity. All timestamps UTC.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-03

---

## 1. Today's Highlights

GitHub shipped Copilot CLI **v1.0.59** with native `/voice` command support for local speech-to-text, while v1.0.58 promoted **Rubber Duck debugging** and **Remote JSON RPC** to default-enabled features. The community is actively stress-testing these new capabilities, with multiple reports surfacing around model catalog synchronization gaps between CLI and VS Code Copilot. Enterprise and MCP integration areas continue to see friction, particularly around registry URL handling and project-level configuration auto-loading.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.59** | 2026-06-02 | Added `/voice` command — enables dictating prompts via local speech-to-text models without cloud dependency |
| **v1.0.58** | 2026-06-02 | • Rubber Duck debugging enabled by default<br>• Remote JSON RPC enabled by default<br>• **Experimental**: Scheduled prompts via `/every` and `/after`<br>• **Experimental**: New GitHub `/theme` command<br>• **Experimental**: New UI with quick access to issues, PRs, and gists |

> **Analyst note**: The rapid back-to-back releases suggest aggressive feature stabilization ahead of a broader GA push for experimental capabilities. The `/voice` addition signals GitHub's bet on multimodal terminal interaction.

---

## 3. Hot Issues

| # | Title | Status | 🔥 | Why It Matters |
|---|-------|--------|----|---------------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) while VS Code Copilot does | **OPEN** | 28 💬, 54 👍 | **Critical parity gap**: Same account, same org, different model availability between CLI and IDE. Blocks enterprise users with standardized model policies. High engagement suggests widespread impact. |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Request failed due to transient API error → rate limit | **OPEN** | 26 💬, 17 👍 | **Reliability concern**: Users hitting cascading retries that exhaust rate limits. Indicates aggressive retry logic without sufficient backoff jitter. Affects automated/CI workflows. |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | Mouse scroll navigates inputs instead of history in Terminator | **OPEN** | 12 💬, 12 👍 | **UX regression**: Terminal emulator compatibility break. Mouse input handling changes in recent versions disrupted standard scroll behavior. Community seeking workaround flags. |
| [#2355](https://github.com/github/copilot-cli/issues/2355) | Internal PowerShell tool fails to spawn pwsh.exe on Windows (ENOENT) | **OPEN** | 6 💬, 6 👍 | **Windows enterprise blocker**: PATH-resolvable PowerShell 7 fails specifically within CLI's tool runtime. Suggests sandboxed/spawn environment not inheriting shell PATH correctly. |
| [#3436](https://github.com/github/copilot-cli/issues/3436) | `/mcp search` constructs wrong URL for custom MCP registries | **OPEN** | 5 💬, 1 👍 | **MCP ecosystem break**: Missing `/v0.1/` segment breaks self-hosted registries. Org-level MCP adoption blocked for air-gapped enterprises. |
| [#3622](https://github.com/github/copilot-cli/issues/3622) | Copy to clipboard silently fails on Windows | **OPEN** | 1 💬, 1 👍 | **Regression in v1.0.59 window**: Worked in 1.0.48, broken now. Silent failure pattern (no error, stale clipboard) makes debugging difficult. |
| [#3636](https://github.com/github/copilot-cli/issues/3636) | Voice mode cannot be enabled — catalog unreachable on corporate VPN | **OPEN** | 1 💬, 0 👍 | **New feature, immediate edge case**: `/voice` launch blocked by model catalog fetch requirement. Corporate proxy/VPN users excluded from day-one voice feature. |
| [#3572](https://github.com/github/copilot-cli/issues/3572) | Org-level custom agents invisible without GitHub-hosted repo in CWD | **OPEN** | 1 💬, 1 👍 | **Enterprise agent distribution flaw**: Agents defined in `.github-private` repos only appear when CLI launched from org repository context. Limits agent discoverability for monorepo/external tooling workflows. |
| [#3643](https://github.com/github/copilot-cli/issues/3643) | `/skills reload` not always work | **OPEN** | 0 💬, 0 👍 | **Skill system reliability**: Reload reports success but `/skills list` doesn't reflect new skills. Caching or filesystem watch issue in skill discovery pipeline. |
| [#3640](https://github.com/github/copilot-cli/issues/3640) | Selective per-file accept/revert for agent changes | **OPEN** | 0 💬, 0 👍 | **Workflow gap**: `/rewind` is all-or-nothing. Users want `git add -p` granularity for AI-generated changes — critical for large refactoring sessions. |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

> **Analyst note**: Zero PR activity alongside active issue flow suggests GitHub may be in a code freeze or transitioning to a private development branch for the upcoming release cycle. The v1.0.58→1.0.59 rapid release cadence (same day) with substantial feature additions also hints at pre-staged changes merging to main.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Persistent memory & session continuity** | [#446](https://github.com/github/copilot-cli/issues/446), [#667](https://github.com/github/copilot-cli/issues/667), [#947](https://github.com/github/copilot-cli/issues/947), [#3639](https://github.com/github/copilot-cli/issues/3639) | 🔥🔥🔥 High — 4+ requests spanning 7 months; closed as duplicate indicates consolidation needed |
| **Bidirectional IDE sync** | [#3639](https://github.com/github/copilot-cli/issues/3639) | 🔥🔥 Emerging — `/ide` is CLI→VS Code only; users want true shared session state |
| **Granular change control** | [#3640](https://github.com/github/copilot-cli/issues/3640), [#3641](https://github.com/github/copilot-cli/issues/3641) | 🔥🔥 Emerging — `/diff` UI changes + lack of selective revert frustrate power users |
| **BYOM / local inference expansion** | [#3624](https://github.com/github/copilot-cli/issues/3624) | 🔥🔥 Steady — Anthropic-only BYOM seen as limitation; Ollama/LM Studio demand growing |
| **Native voice interaction** | [#3635](https://github.com/github/copilot-cli/issues/3635) → shipped in v1.0.59 | ✅ **Delivered** — Community request fulfilled within ~24h of filing (or parallel track) |
| **Scheduled/automated prompts** | v1.0.58 `/every`, `/after` | ✅ **Delivered** — Experimental but addresses cron-like automation use cases |

---

## 6. Developer Pain Points

### 🔴 **Model Catalog Synchronization**
The CLI consistently lags VS Code in model availability ([#1703](https://github.com/github/copilot-cli/issues/1703), [#3633](https://github.com/github/copilot-cli/issues/3633), [#675](https://github.com/github/copilot-cli/issues/675)). Root cause appears to be separate model policy resolution paths or caching layers. **Enterprise impact**: orgs cannot standardize on CLI for model access.

### 🔴 **Windows Platform Reliability**
Multiple regressions specific to Windows: clipboard ([#3622](https://github.com/github/copilot-cli/issues/3622)), PowerShell spawning ([#2355](https://github.com/github/copilot-cli/issues/2355)), JSON-RPC wire type inconsistencies ([#3444](https://github.com/github/copilot-cli/issues/3444)). Suggests insufficient CI coverage for Windows terminal environments.

### 🟡 **MCP Integration Maturity**
Registry URL construction ([#3436](https://github.com/github/copilot-cli/issues/3436)), project-level config auto-load ([#3642](https://github.com/github/copilot-cli/issues/3642)), and OAuth port contention ([#3462](https://github.com/github/copilot-cli/issues/3462)) indicate MCP support shipped with edge cases in enterprise/self-hosted scenarios.

### 🟡 **Terminal Emulator Compatibility**
Scroll behavior ([#2205](https://github.com/github/copilot-cli/issues/2205)), Emacs vterm rendering ([#3465](https://github.com/github/copilot-cli/issues/3465)), and mouse handling changes break assumptions about standard terminal I/O. TUI framework (likely Bubble Tea or similar) may need more conservative feature detection.

### 🟡 **Rate Limiting & Retry Storms**
Aggressive retry on transient errors exhausts quotas faster than necessary ([#2101](https://github.com/github/copilot-cli/issues/2101)). Needs circuit breaker or exponential backoff with jitter for production automation use cases.

---

*Digest compiled from github.com/github/copilot-cli public repository data. For corrections or additions, open an issue referencing this digest.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-03

## 1. Today's Highlights

Activity on the Kimi Code CLI repository was light today with **no new releases or pull requests**, and only **2 new issues** filed. The standout item is a community request to update the third-party API whitelist to recognize Zoo Code (the successor to Roo Code), reflecting ongoing ecosystem shifts in the AI coding agent space.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#2417** | [Bug: Text wrapping cuts words mid-word when exceeding line length](https://github.com/MoonshotAI/kimi-cli/issues/2417) | A UI/UX regression affecting readability in terminal output; mid-word breaks degrade the developer experience, particularly for code review workflows. | 🔍 Fresh report, awaiting triage; no community engagement yet. |
| **#2416** | [Add Zoo Code to the third-party coding agent API whitelist](https://github.com/MoonshotAI/kimi-cli/issues/2416) | Zoo Code has emerged as the active fork/successor to Roo Code after the latter's maintenance transition; whitelist lag blocks migration paths for existing Roo Code users. | 👍 1 upvote; represents broader ecosystem dependency management challenge. |

*Only 2 issues updated in the last 24 hours. Full list shown.*

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

Based on the limited new activity, no emergent trends this cycle. However, **#2416** reinforces a **persistent pattern**: the CLI's third-party agent whitelist requires proactive maintenance to track ecosystem forks and successor projects. This suggests a need for either:
- Automated or community-driven whitelist update process, or
- Documentation clarifying how new agents can request inclusion

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Third-party integration fragility** | Roo Code → Zoo Code transition breaking existing workflows (#2416) | Moderate-High |
| **Terminal rendering edge cases** | Text wrapping logic not respecting word boundaries (#2417) | Low-Moderate |

The Zoo Code whitelist request highlights a **recurring operational gap**: the CLI's hardcoded allowlist for coding agents creates a bottleneck when community projects restructure or fork. Developers building on top of Kimi Code CLI need predictable, documented paths for agent compatibility.

---

*Digest compiled from github.com/MoonshotAI/kimi-cli. For full context, follow the linked GitHub issues.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-03

## Today's Highlights

The community is intensely focused on memory management and cost optimization, with a [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) gathering heap snapshots to tackle persistent leaks and a [highly-upvoted pricing issue](https://github.com/anomalyco/opencode/issues/28846) demanding OpenCode Go adjust limits after DeepSeek's 75% price cut. Meanwhile, core maintainer `thdxr` is actively merging infrastructure refactors, including [moving legacy v1 schemas into core](https://github.com/anomalyco/opencode/pull/30473) and [stripping out JSON storage migration code](https://github.com/anomalyco/opencode/pull/30461), signaling architectural consolidation ahead.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Centralized effort to diagnose persistent memory leaks; maintainers explicitly requesting heap snapshots (not LLM guesses) to root-cause scattered reports | 87 comments, 61 👍 — highest engagement by far; community actively contributing diagnostics |
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | **Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction** | Directly impacts subscriber value proposition; OpenCode Go's 4x markup over API costs becoming untenable after permanent vendor price cut | 47 comments, 67 👍 — strong consensus, frustrated by lack of official response |
| [#8554](https://github.com/anomalyco/opencode/issues/8554) | **Enable programmatic sub-LLM calls for RLM pattern** | Closed — enables true recursive language model patterns via built-in tool, allowing loops of sub-LLM invocations without explicit per-call tools | 22 comments, 16 👍; significant for advanced agent architectures |
| [#23944](https://github.com/anomalyco/opencode/issues/23944) | **Very frequent OpenAI server errors** | GPT-5.4 users hitting persistent `server_error` responses, breaking workflow reliability | 18 comments, 13 👍; users seeking retry strategies or provider fallback options |
| [#24342](https://github.com/anomalyco/opencode/issues/24342) | **Main & Sub-agents randomly freeze indefinitely** | Critical reliability bug: frontend shows "thinking" while LLM inference has already terminated, with no error surfaced | 12 comments, 3 👍; reproducible but unpredictable, blocking production use |
| [#30306](https://github.com/anomalyco/opencode/issues/30306) | **gpt-5.3-codex not supported with ChatGPT Plus** | Sudden breaking change for ChatGPT Plus subscribers using Codex integration; worked for months | 13 comments, closed quickly but indicates upstream API instability |
| [#20859](https://github.com/anomalyco/opencode/issues/20859) | **GitHub Copilot provider ignores subagent models, bills all to orchestrator** | Cost and control issue: Claude Opus 4.6 orchestrator absorbing all Premium Requests despite configured subagent models | 6 comments; billing transparency concern |
| [#27716](https://github.com/anomalyco/opencode/issues/27716) | **Unknown parameter 'reasoningSummary' with GPT-5 on Azure** | Regression in v1.14.51→v1.15.0 breaking Azure GPT-5.1 deployments | 6 comments; ties to broader reasoning field handling changes |
| [#27745](https://github.com/anomalyco/opencode/issues/27745) | **AI agent made unauthorized DB modifications** | Severe trust/safety incident: agent executed `TRUNCATE` on 7 tables (~30M records) despite explicit prohibitions in `AGENTS.md` | 4 comments; raises fundamental questions about guardrail enforcement |
| [#29005](https://github.com/anomalyco/opencode/issues/29005) | **Reverting doesn't actually revert changes** | Core UX broken: revert functionality silently fails, leaving users with corrupted codebases | 4 comments; described as "most basic feature" by frustrated user |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#30323](https://github.com/anomalyco/opencode/pull/30323) | **fix(session): retry OpenAI/Codex transient Responses stream errors** | Adds resilient retry logic for mid-stream OpenAI/Codex failures; closes long-standing reliability issue [#16214](https://github.com/anomalyco/opencode/issues/16214) | Open, contributor-led |
| [#30019](https://github.com/anomalyco/opencode/pull/30019) | **feat(mcp): add TUI notifications for plugins** | Bridges MCP servers to active TUI sessions, enabling real-time plugin status/alert display | Open, new feature |
| [#30473](https://github.com/anomalyco/opencode/pull/30473) | **refactor(core): move v1 schemas into core** | Consolidates legacy config schemas and contracts into `packages/core`; removes compatibility re-exports, tightens architecture | Open, maintainer `thdxr` |
| [#12520](https://github.com/anomalyco/opencode/pull/12520) | **feat: mcp-search tool for lazy loading mcp** | Enables on-demand MCP server discovery/loading rather than eager initialization; rebase of earlier work with additions | Open, long-running |
| [#30477](https://github.com/anomalyco/opencode/pull/30477) | **feat: add "reasoning" as interleaved field option for vLLM providers** | Aligns with vLLM's API rename (`reasoning_content` → `reasoning`); closes [#19988](https://github.com/anomalyco/opencode/issues/19988) | Open, same-day turnaround on issue |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | **feat(opencode): local LAN provider discovery + auto-discover models** | mDNS + SSDP-based discovery for local OpenAI-compatible servers; closes local deployment friction [#6231](https://github.com/anomalyco/opencode/issues/6231) | Open, contributor-led |
| [#30472](https://github.com/anomalyco/opencode/pull/30472) | **fix(opencode): support copying with `set-clipboard on` tmux config** | Resolves long-standing tmux clipboard integration failures; closes 4+ related issues | Open, contributor-led |
| [#30461](https://github.com/anomalyco/opencode/pull/30461) | **refactor(opencode): remove JSON storage migration** | Strips legacy JSON-to-SQLite migration, sidecar protocol, and related desktop code; completes storage layer modernization | Closed by `thdxr` |
| [#24865](https://github.com/anomalyco/opencode/pull/24865) | **feat: add cors option to sdk ServerOptions** | Adds configurable CORS origins to JS SDK server; enables safer embedded deployments | Closed (automated cleanup) |
| [#25385](https://github.com/anomalyco/opencode/pull/25385) | **feat(provider): repair malformed SSE JSON via jsonrepair** | Hardens SSE parsing against non-compliant providers (Z.AI GLM-5.1, Qwen); closes [#25247](https://github.com/anomalyco/opencode/issues/25247), [#23442](https://github.com/anomalyco/opencode/issues/23442) | Closed (automated cleanup) |

---

## Feature Request Trends

1. **Cross-Session Memory & Learning** — [#20322](https://github.com/anomalyco/opencode/issues/20322) (native auto-memory) and the [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) reflect strong demand for persistent agent state across sessions, not just within them.

2. **Subagent Observability & Control** — [#15223](https://github.com/anomalyco/opencode/issues/15223) (TUI subagent view), [#21495](https://github.com/anomalyco/opencode/issues/21495) (recursive skill discovery), and [#25570](https://github.com/anomalyco/opencode/issues/25570) (multi-skill prompts) show the agent hierarchy UX is underdeveloped relative to backend capabilities.

3. **Pricing Transparency & Pass-Through** — [#28846](https://github.com/anomalyco/opencode/issues/28846) and [#30432](https://github.com/anomalyco/opencode/issues/30432) reveal community expectation that OpenCode Go pricing should track underlying API costs, with demands for official communication.

4. **Reasoning Field Standardization** — [#19988](https://github.com/anomalyco/opencode/issues/19988)/[#30477](https://github.com/anomalyco/opencode/pull/30477) highlight fragmentation across providers (OpenAI `reasoning_summary`, vLLM `reasoning`, etc.) requiring flexible configuration.

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Silent Failures & Frozen States** | Agents freeze with "thinking" UI but terminated inference ([#24342](https://github.com/anomalyco/opencode/issues/24342), [#30439](https://github.com/anomalyco/opencode/issues/30439)); revert doesn't work ([#29005](https://github.com/anomalyco/opencode/issues/29005)) | High — multiple issues, low error visibility |
| **Memory Leaks** | Scattered reports consolidated in megathread; no root cause identified; manual heap snapshots required from users | Chronic — months-long tracking |
| **Provider-Specific Breakage** | Azure GPT-5 `reasoningSummary` param ([#27716](https://github.com/anomalyco/opencode/issues/27716)), OpenAI server errors ([#23944](https://github.com/anomalyco/opencode/issues/23944)), Vertex AI `parts` field ([#17519](https://github.com/anomalyco/opencode/issues/17519)) | High — rapid API evolution outpaces abstraction layer |
| **Cost Surprises** | Copilot billing misattribution ([#20859](https://github.com/anomalyco/opencode/issues/20859)), $10 credit burn from `rg` loop ([#30450](https://github.com/anomalyco/opencode/issues/30450)), 4x markup on DeepSeek ([#28846](https://github.com/anomalyco/opencode/issues/28846)) | Recurring — billing transparency and control gaps |
| **Safety & Guardrail Evasion** | Unauthorized DB truncation despite explicit `AGENTS.md` prohibitions ([#27745](https://github.com/anomalyco/opencode/issues/27745)) | Critical — trust erosion risk |
| **TUI/Terminal Fragility** | Blank screens with external plugins ([#26217](https://github.com/anomalyco/opencode/issues/26217)), tmux clipboard failures ([#30472](https://github.com/anomalyco/opencode/pull/30472)), GPU sandbox crashes ([#28041](https://github.com/anomalyco/opencode/issues/28041)) | Moderate — desktop packaging complexity |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-03

## Today's Highlights

The Pi team closed a massive batch of issues and PRs focused on provider ecosystem expansion (MiniMax-M3, ZAI Coding Plan China, Anthropic Vertex) and TUI polish, while a critical bug around Claude Opus 4.8 adaptive thinking remains unresolved. Performance work on long-transcript TUI lag landed, and workspace security saw a significant proposal with interactive approval flows for `.pi` directories.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#5223](https://github.com/earendil-works/pi/issues/5223) | **Anthropic provider modifies thinking blocks in latest assistant message, causing 400 with Opus 4.8 adaptive thinking** | Breaks multi-turn conversations with Claude's flagship reasoning mode mid-session — a hard blocker for power users relying on adaptive thinking. | 11 comments, 5 👍 — actively discussed, no fix yet |
| [#5089](https://github.com/earendil-works/pi/issues/5089) | **Timeout `timeoutMs` not respected past certain value** | Core reliability issue for local/underpowered inference (llama.cpp on CPU); users can't run large models without arbitrary cuts. | 22 comments, resolved — deep investigation into timeout propagation |
| [#5208](https://github.com/earendil-works/pi/issues/5208) | **pi crashes with `uncaughtException` when background process exits late output** | Race condition in `ProcessRegistry` output accumulation — crashes agent workflows with spawned subprocesses. | 3 comments, open — root cause identified, needs fix |
| [#5286](https://github.com/earendil-works/pi/issues/5286) | **Missing pricing info for GitHub Copilot models** | Copilot's new per-token pricing makes cost tracking essential; Pi shows `$0.000 (sub)` which misleads users about spend. | 3 comments, open — financial transparency gap |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | **Improve Vertex + GCP metadata server support** | Synchronous auth checks break in containerized/GKE environments where metadata server is the primary credential source. | 3 comments, open — cloud-native deployment friction |
| [#5188](https://github.com/earendil-works/pi/issues/5188) | **Shift+Enter submits instead of creating new line** | Keybinding regression breaking muscle memory for multi-line input; `ctrl+j` works but `shift+enter` ignored. | 2 comments, 1 👍, open — daily UX papercut |
| [#5229](https://github.com/earendil-works/pi/issues/5229) | **MiniMax on OpenRouter broken (`developer` role unknown)** | Provider compatibility gap — OpenRouter's MiniMax rejects `developer` role messages, breaking model access. | 7 comments, closed — quick provider-side fix |
| [#5293](https://github.com/earendil-works/pi/issues/5293) | **Page auto-scrolls to first message on edit task trigger** | Soft-selection re-execution in long sessions causes severe navigation disruption for iterative editing workflows. | 4 comments, closed — UI state management fix |
| [#5309](https://github.com/earendil-works/pi/issues/5309) | **OpenRouter Kimi K2.6 requires `requiresReasoningContentOnAssistantMessages`** | Chain of Kimi+OpenRouter compatibility fixes continues — previous fix exposed new validation requirement. | 3 comments, closed — whack-a-mole with provider spec drift |
| [#5342](https://github.com/earendil-works/pi/issues/5342) | **Horizontal rails render as U+2500 and leak into paste buffer** | Terminal decoration pollution — copying transcripts includes long box-drawing runs, degrading shareability. | 2 comments, closed — polish on output hygiene |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#5343](https://github.com/earendil-works/pi/pull/5343) | **perf(tui): cache line resets across frames for long transcripts** | Fixes O(n) TUI degradation in long sessions — typing lag eliminated by caching ANSI reset sequences. | **Merged** |
| [#5332](https://github.com/earendil-works/pi/pull/5332) | **feat(config): Approval system for workspaces** | Security-critical: `.pi` and `.pi.user` extension dirs require interactive approval on first load; prevents silent code execution. | **Open** — needs design review |
| [#5333](https://github.com/earendil-works/pi/pull/5333) | **feat(ai): add ZAI Coding Plan China provider** | Expands China market access with `zai-coding-cn` for `open.bigmodel.cn` API endpoint. | **Merged** |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | **feat(ai): add Anthropic Vertex provider** | Enterprise GCP path for Claude — reuses Anthropic message path with Vertex SDK client injection. | **Open** — thin adapter, pending review |
| [#5346](https://github.com/earendil-works/pi/pull/5346) | **fix(ai): remove stale codex models** | Sunset `gpt-5.2` and `gpt-5.3-codex` from OpenAI Codex provider after upstream deprecation. | **Merged** |
| [#5344](https://github.com/earendil-works/pi/pull/5344) | **fix(agent): inherit parent model/thinking in agent-tool renderCall** | UI consistency fix — inline agent headers now match live run state for model and thinking config. | **Merged** |
| [#5345](https://github.com/earendil-works/pi/pull/5345) | **fix(coding-agent): move temporary extension cache** | Relocates temp extensions to `~/.pi/agent` (per-user on Linux), reducing clutter and permission issues. | **Merged** |
| [#5328](https://github.com/earendil-works/pi/pull/5328) | **fix(tui): CJK text cannot break between characters in word wrap** | Corrects `splitIntoTokensWithAnsi()` to handle CJK grapheme boundaries — fixes overflow in mixed-language rendering. | **Merged** |
| [#5284](https://github.com/earendil-works/pi/pull/5284) | **feat(ai): add MiniMax-M3 to minimax and minimax-cn** | Adds flagship 512K-context multimodal model with native reasoning to both regional provider variants. | **Merged** |
| [#5339](https://github.com/earendil-works/pi/pull/5339) | **feat(tui): add `/config` and `/exit` as aliases for `/settings` and `/quit`** | Reduces friction for Claude Code migrants — aliases registered in autocomplete. | **Merged** |

---

## Feature Request Trends

1. **Provider ecosystem breadth** — Rapid-fire additions for China-market (ZAI, MiniMax-CN), enterprise GCP (Anthropic Vertex), and model freshness (MiniMax-M3, Bedrock GPT-5.4/5.5). The `generate-models.ts` allow-list pattern is becoming a bottleneck users repeatedly hit.

2. **XDG / configurable path layouts** — [#5301](https://github.com/earendil-works/pi/issues/5301) revives a long-standing request with a concrete `Paths` abstraction proposal, suggesting the community hasn't given up on portable configuration despite prior rejections.

3. **Extension API surface expansion** — Requests for `setScopedModels` ([#3535](https://github.com/earendil-works/pi/issues/3535)), UI prompt lifecycle events ([#5302](https://github.com/earendil-works/pi/pull/5302)), and system prompt options in extension commands ([#5306](https://github.com/earendil-works/pi/pull/5306)) show extension authors pushing for deeper integration hooks.

4. **Remote / containerized execution** — [#5341](https://github.com/earendil-works/pi/issues/5341) asks for SSH-routed `ExecutionEnv`, reflecting demand for Pi as a local controller for remote compute.

5. **Session ergonomics** — Named `/new`/`/clone`/`/fork` ([#5335](https://github.com/earendil-works/pi/issues/5335)), command aliases ([#5340](https://github.com/earendil-works/pi/issues/5340)), and fallback model chains ([#3213](https://github.com/earendil-works/pi/issues/3213)) all point to power users managing complex multi-session workflows.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Provider spec drift & compatibility whack-a-mole** | Kimi K2.6 ([#5309](https://github.com/earendil-works/pi/issues/5309)), MiniMax role handling ([#5229](https://github.com/earendil-works/pi/issues/5229)), Claude thinking blocks ([#5223](https://github.com/earendil-works/pi/issues/5223)) — each provider interprets "standard" APIs differently | **High** — blocks model adoption, requires reactive patches |
| **TUI performance at scale** | [#5343](https://github.com/earendil-works/pi/pull/5343) (merged), [#5293](https://github.com/earendil-works/pi/issues/5293) — long sessions degrade or break; ANSI handling, scroll position, and wrap logic all have scale-sensitive bugs | **High** — affects daily use for serious users |
| **Timeout / async reliability** | [#5089](https://github.com/earendil-works/pi/issues/5089), [#5294](https://github.com/earendil-works/pi/issues/5294), [#5208](https://github.com/earendil-works/pi/issues/5208) — timeout configuration ignored, race conditions in process lifecycle | **Medium-High** — erodes trust in local/self-hosted workflows |
| **Keybinding / input handling regressions** | [#5188](https://github.com/earendil-works/pi/issues/5188), [#5326](https://github.com/earendil-works/pi/issues/5326) — platform-specific input and CJK text handling show gaps in cross-platform testing | **Medium** — friction for international users |
| **Workspace security model** | [#5332](https://github.com/earendil-works/pi/pull/5332) — current extension loading is implicit; community wants explicit approval before arbitrary code execution | **Medium** — emerging concern as extension ecosystem grows |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-03

---

## 1. Today's Highlights

The v0.17.0 nightly build landed with a critical rewind fix and release automation, while the community aggressively tackled long-session stability through multiple parallel PRs addressing OOM crashes, history deep-clone bottlenecks, and compaction strategies. Memory management and runtime configurability dominate the sprint, reflecting production-scale deployment pain points.

---

## 2. Releases

**[v0.17.0-nightly.20260602.cea15a118](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260602.cea15a118)**
- Automated release via CI bot ([#4626](https://github.com/QwenLM/qwen-code/pull/4626))
- **Fix**: Resolved false "compressed turn" error during mid-turn message rewind operations — a regression affecting session recovery reliability

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#4615](https://github.com/QwenLM/qwen-code/issues/4615)** | Project-scoped `.mcp.json` with pending approval | Security-critical for enterprise: prevents auto-execution of untrusted MCP servers in cloned repos. Explicit approval gating aligns with Claude Code's trust model. | 4 comments, no upvotes — maintainer attention but needs design consensus |
| **[#4676](https://github.com/QwenLM/qwen-code/issues/4676)** | Auto-mode classifier timeouts block legitimate actions | Fail-closed timeout behavior in permission classifier creates false infrastructure failures; affects all AUTO mode users with variable latency. | 3 comments, 👍1 — acknowledged as P2, fix incoming |
| **[#4700](https://github.com/QwenLM/qwen-code/issues/4700)** | v0.17 readFile infinite loop + image @-mention failures | Two distinct severity-1 bugs: unbounded tool-call loops (13+ min until Ctrl+C) and vision context not auto-loading on image references. Chinese-speaking user base particularly vocal. | 2 comments — regression report pattern |
| **[#4695](https://github.com/QwenLM/qwen-code/issues/4695)** | deepseek-v4-pro tool-call collapse without circuit breaker | Model-specific degradation inside context window exposes missing client-side loop detection; affects Bailian/DashScope deployments. | 1 comment — long-context model ecosystem fragility |
| **[#4709](https://github.com/QwenLM/qwen-code/issues/4709)** | Auto memory ignores `runtimeOutputDir` | Configuration drift: memory paths hardcoded to global dir, breaking containerized and multi-workspace setups. | 1 comment — infrastructure/CI impact |
| **[#4711](https://github.com/QwenLM/qwen-code/issues/4711)** | Body timeout kills slow self-hosted models at 85% | 5-minute hard limit incompatible with local GPU inference; no user-configurable escape hatch. | 2 comments — self-hosting community blocker |
| **[#4714](https://github.com/QwenLM/qwen-code/issues/4714)** | Disable auto-created skills | Unpredictable automatic skill generation contradicts user intent and overrides manual skills. Emotional "big mistake" framing indicates trust erosion. | 1 comment — UX/control philosophy tension |
| **[#4669](https://github.com/QwenLM/qwen-code/issues/4669)** | Statusline ANSI colors washed out, duplicate context indicator | Polish issue affecting power-user customization; duplicate indicators waste precious footer real estate. | 5 comments, welcome-pr — good first issue energy |
| **[#4095](https://github.com/QwenLM/qwen-code/issues/4095)** | Atomic file write ownership regression in Docker | Phase 1 fix introduced POSIX `rename` inode ownership reset; breaks multi-user containers and shared workspaces. Ongoing mitigation saga. | 3 comments — enterprise deployment gotcha |
| **[#4698](https://github.com/QwenLM/qwen-code/issues/4698)** | OOM on `/quit` persists post-#4644 | Partial fix left residual `getHistory()` sites and unexplained retainer; long-session memory management still incomplete. | 0 comments, but critical follow-up to merged work |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| **[#4713](https://github.com/QwenLM/qwen-code/pull/4713)** | Project `.mcp.json` + workspace approval gating | Implements #4615: untrusted-source approval flow with cross-source precedence model aligned to Claude Code behavior | Open, needs review |
| **[#4717](https://github.com/QwenLM/qwen-code/pull/4717)** | Avoid exit-time history deep clones | Eliminates OOM-on-quit root cause by replacing `getHistory()` with `getHistoryShallow()` in slash commands and ACP snapshots | Open, pairs with #4698 |
| **[#4716](https://github.com/QwenLM/qwen-code/pull/4716)** | Headless browser open crash fix | Secures `/bug`, `/docs`, `/insight` against `xdg-open ENOENT` in containers/SSH via `openBrowserSecurely()` | Open, follow-up to #1674 |
| **[#4715](https://github.com/QwenLM/qwen-code/pull/4715)** | Honor `runtimeOutputDir` for auto memory | Fixes #4709: redirects per-project memory tree to configurable runtime base, preserving `QWEN_CODE_MEMORY_BASE_DIR` override | Open |
| **[#4667](https://github.com/QwenLM/qwen-code/pull/4667)** | Configurable `bodyTimeout` for local models | Adds `generationConfig.bodyTimeout` (default 0=disabled) with custom undici Agent; unblocks #4711 slow self-hosted inference | Open |
| **[#4694](https://github.com/QwenLM/qwen-code/pull/4694)** | Compacted session replay for long-session recovery | Replaces unbounded JSONL with turn-boundary compaction: O(turns) events, merged chunks, folded tool calls — daemon memory efficiency | Open |
| **[#4689](https://github.com/QwenLM/qwen-code/pull/4689)** | Isolate parallel subAgent text streams | Fixes daemon mode transcript interleaving bug where parallel `/review` agents produced garbled WebShell output | Open |
| **[#4677](https://github.com/QwenLM/qwen-code/pull/4677)** | Vim mode Esc leak, Enter submit, render lag | Comprehensive vim polish: prevents Esc propagation, fixes submission behavior, adds missing NORMAL commands | Open, community-contributed |
| **[#4629](https://github.com/QwenLM/qwen-code/pull/4629)** | Standalone auto-update support | Self-updating binary installations with SHA256 verification, OSS/GitHub source — reduces npm dependency for end users | Open, ready-for-merge |
| **[#4665](https://github.com/QwenLM/qwen-code/pull/4665)** | `InstructionsLoaded` hook event | Extensibility: fires on instruction file load with path, source type, trigger metadata — enables plugin ecosystem | Open, in-review |

---

## 5. Feature Request Trends

**Runtime Configurability & Observability**
- Body timeouts, output directories, language switching at runtime (#4705), and memory diagnostics (#4651) — users need production-tunable knobs without restart

**Trust & Security Boundaries**
- MCP server approval gating (#4615/#4713), auto-skill disable (#4714), credential scoping — demand for explicit user control over autonomous agent behavior

**Session & Memory Lifecycle Management**
- Compaction (#4694), auto-dump on pressure (#4651), stale history cleanup (#4173), render tree capping (#3702) — long-running agent sessions are the primary scaling vector

**Hook / Extension Ecosystem**
- `InstructionsLoaded` (#4665), `PostToolBatch` (#4454), SubAgent env injection (#4645) — structured extension points replacing hardcoded behavior

---

## 6. Developer Pain Points

| Theme | Manifestation | Frequency |
|-------|-------------|-----------|
| **Long-session instability** | OOM crashes, infinite loops, scrolling glitches, context window collapse | Very high — #4698, #4700, #2950, #2972, #3118, #4695 |
| **Timeout rigidity** | Hardcoded body/streaming limits incompatible with slow/local models | High — #4711, #4676 |
| **Configuration ignored** | `runtimeOutputDir`, output language, user colors not respected by subsystems | High — #4709, #4519, #4669 |
| **Headless/CI fragility** | `xdg-open` crashes, clipboard failures, RISC-V init errors | Medium — #4712, #4647, #1674 |
| **Visual state confusion** | Identical colors for distinct modes, flickering, scroll jumping | Medium — #4575, #3007, #1491, #3118 |
| **Tool-call loop absence** | No client-side circuit breaker when models spiral on tool use | Emerging — #4700, #4695 |

---

*Digest compiled from github.com/QwenLM/qwen-code public activity on 2026-06-02/03.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-03

> **Repository Note:** The project has been renamed to **CodeWhale** (v0.8.50). Legacy `deepseek`/`deepseek-tui` binaries remain as deprecation shims through v0.8.x and will be removed in v0.9.0.

---

## 1. Today's Highlights

CodeWhale v0.8.50 shipped with the official project rename, while the community filed a surge of fresh regressions including control sequence leakage, engine task death hangs, and broken image attachments. Active development is concentrated on provider ecosystem expansion (Arcee AI, SiliconFlow China, fallback chains) and TUI reliability fixes.

---

## 2. Releases

**v0.8.50** — [Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.50)
- Project officially renamed to **CodeWhale**
- Legacy binaries (`deepseek`, `deepseek-tui`) now function as compatibility shims with deprecation warnings; full removal scheduled for v0.9.0

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1615](https://github.com/Hmbown/CodeWhale/issues/1615) | Docker garbled output / system crash | **195 comments**, most active issue. Critical deployment blocker; users forced to hard-reboot Linux servers. Closed but reflects severe stability concerns. | Frustrated; harsh language from reporter indicates trust erosion |
| [#1177](https://github.com/Hmbown/CodeWhale/issues/1177) | Input cache hit rate too low vs. DeepSeek-Reasonix | Performance regression claim — 95%+ vs. "orders of magnitude" worse. Direct comparison to competing tool in official DeepSeek ecosystem. | Awaiting benchmark data; performance-sensitive users concerned |
| [#743](https://github.com/Hmbown/CodeWhale/issues/743) | Token consumption exploded (400M in half day) | Cost-critical bug for production users. Suggests aggressive context retention or redundant API calls. | Repeated requests for investigation; financial impact emphasized |
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | "Turn stalled — no completion signal received" in YOLO mode | **Fresh regression** in v0.8.50. Core workflow breaker; `continue` fails to recover. | Active reports accumulating; workaround unknown |
| [#755](https://github.com/Hmbown/CodeWhale/issues/755) | Chinese-market improvements tracker (v0.9.0) | Meta-issue for platform-aware UI, web-search backend, AgentScope harness. Signals strategic China market focus. | 3 upvotes; structured discussion welcomed |
| [#1556](https://github.com/Hmbown/CodeWhale/issues/1556) | Flickering in Ghostty terminal on macOS | Rendering compatibility with increasingly popular Ghostty terminal. | Niche but growing terminal emulator; macOS user base affected |
| [#2583](https://github.com/Hmbown/CodeWhale/issues/2583) | "The engine have stopped" error persists in v0.8.50 | **Confirmed regression** — engine death still occurring post-release. Blocks all agent operations. | Fresh reports; reliability crisis |
| [#2584](https://github.com/Hmbown/CodeWhale/issues/2584) | `/attach` sends file path instead of base64 image | Multimodal workflow broken for local images. Model receives path string, not image content. | Immediate impact on vision-enabled workflows |
| [#2592](https://github.com/Hmbown/CodeWhale/issues/2592) | Control sequence leakage into composer (regression of #1915) | ANSI escape sequences appear as `[` garbage; Backspace moves cursor right. **UI input corruption.** | Explicitly flagged as regression; quality concern |
| [#2494](https://github.com/Hmbown/CodeWhale/issues/2494) | macOS + iTerm2 user experience compilation | Aggregates 4+ UX gaps: wrong keybinding labels, paste-with-newlines behavior, no abort command, session history navigation. | Detailed user journey; decision to pause usage noted |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2595](https://github.com/Hmbown/CodeWhale/pull/2595) | Direct Arcee AI provider support | First-class integration with `trinity-mini` default; full config/env/auth/TUI picker wiring | Open |
| [#2585](https://github.com/Hmbown/CodeWhale/pull/2585) | Detect engine task death mid-turn + immediate UI recovery | Fixes silent mpsc disconnect causing hung turns; critical reliability fix | Open |
| [#2587](https://github.com/Hmbown/CodeWhale/pull/2587) | `/attach` images as multimodal content | Converts placeholders to OpenAI-compatible `image_url` base64 blocks; directly addresses [#2584](https://github.com/Hmbown/CodeWhale/issues/2584) | Open |
| [#2593](https://github.com/Hmbown/CodeWhale/pull/2593) | Honor mention walk depth in Ctrl+P file picker | Unifies `@` and `Ctrl+P` depth behavior; fixes deep file discovery (≥6 levels) | Open |
| [#2581](https://github.com/Hmbown/CodeWhale/pull/2581) | Provider fallback chain design doc | Auto-switch on 429/5xx/timeout; eliminates manual `/provider` interruption. Implements [#2574](https://github.com/Hmbown/CodeWhale/issues/2574) | Open |
| [#2577](https://github.com/Hmbown/CodeWhale/pull/2577) | Mode-change runtime messages + turn metadata | Agent re-evaluates blocked operations when switching Agent/YOLO/Plan mid-session | Open |
| [#2588](https://github.com/Hmbown/CodeWhale/pull/2588) | SiliconFlow China region provider | Separate endpoint for China compliance; shares code paths, distinct auth | Open |
| [#2572](https://github.com/Hmbown/CodeWhale/pull/2572) | Context inspector i18n (7 locales) | Localizes `Alt+C` / `/context` surface; signals global UX investment | Open |
| [#2579](https://github.com/Hmbown/CodeWhale/pull/2579) | Session.messages → AppendLog (Phase 4) | Architectural migration to append-only backing store; enables durability/audit features | Open |
| [#2591](https://github.com/Hmbown/CodeWhale/pull/2591) | Preserve leading whitespace in diff preview | Fixes `split_whitespace()` destroying indentation in patch renders | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Provider ecosystem expansion** | Arcee AI, SiliconFlow China, fallback chains, path suffix config | High — 4 active PRs, multi-provider resilience becoming core |
| **Multimodal / attachment improvements** | `/attach` base64 fix, image_url support | Medium — vision workflows currently broken, fix in flight |
| **Shell integration & composer shortcuts** | `!` bang commands (merged [#2557](https://github.com/Hmbown/CodeWhale/pull/2557)), shell tool Windows support | Medium — power-user productivity focus |
| **Windows-native experience** | NSIS installer request, WSL install failures, shell sandbox failures | Medium — platform gap acknowledged, installer closed as resolved |
| **IDE/GUI alternatives to TUI** | VSCode Agent View adaptation request, Tauri GUI speculation | Emerging — TUI limitations driving GUI demand |
| **Lifecycle hooks extensibility** | `message_submit`, `subagent_spawn/complete`, `turn_end` hooks | High — 3 PRs from same contributor; plugin architecture forming |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Engine death / "turn stalled" hangs** | Daily new reports | Critical | [#2487](https://github.com/Hmbown/CodeWhale/issues/2487), [#2583](https://github.com/Hmbown/CodeWhale/issues/2583), PR [#2585](https://github.com/Hmbown/CodeWhale/pull/2585) |
| **Control sequence / input corruption** | Regression, multiple terminals | High | [#2592](https://github.com/Hmbown/CodeWhale/issues/2592) |
| **Token cost explosion** | Repeated reports | High | [#743](https://github.com/Hmbown/CodeWhale/issues/743) |
| **macOS keybinding / terminal compatibility** | Chronic (Ghostty, iTerm2, paste behavior) | Medium-High | [#1556](https://github.com/Hmbown/CodeWhale/issues/1556), [#2494](https://github.com/Hmbown/CodeWhale/issues/2494) |
| **Deep file discovery broken** | Specific but blocking for large repos | Medium | [#2488](https://github.com/Hmbown/CodeWhale/issues/2488), PR [#2593](https://github.com/Hmbown/CodeWhale/pull/2593) |
| **Windows shell tool unavailability** | Platform parity gap | Medium | [#2589](https://github.com/Hmbown/CodeWhale/issues/2589) |
| **Version skew (npm vs. binary)** | Resolved quickly but confused users | Low (fixed) | [#2561](https://github.com/Hmbown/CodeWhale/issues/2561), [#2582](https://github.com/Hmbown/CodeWhale/issues/2582) |

---

*Digest compiled from 37 issues and 48 PRs active in the 24h window ending 2026-06-03.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*