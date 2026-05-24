# AI CLI Tools Community Digest 2026-05-24

> Generated: 2026-05-24 00:23 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-24

## 1. Ecosystem Overview

The AI CLI tool landscape has matured into a competitive, multi-polar market with seven actively developed tools serving distinct user segments. Today's activity reveals a sector in **infrastructure consolidation mode**: teams are prioritizing reliability fixes, state management hardening, and observability over novel features, suggesting the category is transitioning from growth to operational maturity. Context window management, safety filter calibration, and cross-platform terminal compatibility emerge as universal pain points. Notably, documentation-as-fix patterns and quota opacity crises indicate growing tension between vendor control and user autonomy, while interoperability experiments (CodeWhale orchestrating Claude Code) signal nascent multi-agent ecosystem formation.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release | Release Focus |
|------|:-----------:|:---------:|---------|---------------|
| **Claude Code** | 10+ hot | 18 docs-heavy | v2.1.150 | Infrastructure; **regression** (200K context cap) |
| **OpenAI Codex** | 10 hot | 10+ infra | rust-v0.134.0-alpha.3 | Alpha; TUI state sync overhaul |
| **Gemini CLI** | 10 hot | 10+ | None | Agent reliability, routing, PTY fixes |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.52** | Stdin fix, scrollbar, Autopilot permissions |
| **Kimi Code CLI** | 5 | 6+ | None | MCP hardening, Windows fixes, thinking UX |
| **OpenCode** | 10+ | 15+ | **v1.15.10** | Desktop stability; Effect-native test migration |
| **Pi** | 10+ | 10+ | **v0.75.5** | Read output collapsing, Windows async fs |
| **Qwen Code** | 10+ | 10+ | **v0.16.1** | Tool-use invariant fix; Mode B productionization |
| **DeepSeek TUI / CodeWhale** | 10+ | 10+ | **v0.8.41** | Rebrand; memory system batch merge |

*Note: Issue/PR counts are approximate from digest scope; all tools showed meaningful 24h activity.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Context/token transparency** | Claude Code, Codex, Gemini CLI, OpenCode | Visible usage indicators (Codex #23794 regression), 1M context enforcement (Claude #61738), cache hit rate visibility (CodeWhale #1965), context summarizer integrity (Claude #61722) |
| **Safety filter granularity / false-positive reduction** | Claude Code, Codex, Gemini CLI, Qwen Code | Sysadmin audit commands (Claude #61185), gov/telecom work (Codex #23381), benign greetings blocked (Claude #60366), cyber-research workflows (Claude #48977) |
| **Permission system refinement** | Claude Code, Copilot CLI, Pi, CodeWhale | Compound command parsing (Claude #16561), persistent `/add-dir` (Copilot #2284), tool permissions/yolo mode (Pi #4936), per-agent tool filtering (CodeWhale #626) |
| **Session lifecycle management** | Codex, Gemini CLI, Kimi, OpenCode, Qwen Code, CodeWhale | Session deletion (Codex #8784), lazy loading (Kimi #2357), compaction safety (OpenCode #2987), daemon persistence (Qwen #4175), continuity layer (CodeWhale #1881) |
| **MCP ecosystem hardening** | Gemini CLI, Kimi, Copilot CLI, CodeWhale | Project-level config (Kimi #2349), registry URL bugs (Copilot #3436), deferred startup failures (Kimi #2355), MCP delegation gaps (CodeWhale #1959) |
| **Windows compatibility** | Codex, Gemini CLI, Kimi, Pi | TUI scroll corruption (Codex #10726), file locking (Kimi #2348), Defender-induced hangs (Pi #4756), PTY memory leaks (Gemini #27154) |
| **Thinking/reasoning controls** | Kimi, OpenCode, Pi | Toggle visibility (Kimi #2158, OpenCode #29028), disable thinking (OpenCode #24610), deep thinking budget (Pi #4926) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Differentiation |
|-----------|---------|---------------|
| **Target user** | | |
| Enterprise/team | Copilot CLI, Qwen Code | Deep GitHub/Microsoft integration; Feishu/Lark for China enterprise (Qwen #4379) |
| Individual power user | Claude Code, Pi, OpenCode | Max plan premium tier (Claude), extension API depth (Pi), custom system prompts (OpenCode #7101) |
| Cost-sensitive/self-hosted | CodeWhale, Gemini CLI, Qwen | DeepSeek V4 pricing (CodeWhale), Vertex AI support (Gemini #27375), Mode B daemon (Qwen) |
| **Technical architecture** | | |
| Desktop-first | Claude Code, Codex | Electron/TUI hybrid; remote workspace state sync (Codex PR cluster) |
| Terminal-native | Pi, OpenCode, CodeWhale | Pure TUI; keyboard-driven; minimal GUI chrome |
| Daemon/server mode | Qwen Code, CodeWhale | `qwen serve` productionization; ACP protocol for editor integration (CodeWhale #1092) |
| **Safety philosophy** | | |
| Restrictive/cautious | Claude Code, Codex | Over-censorship complaints; policy blocks on benign content |
| Permissive/user-controlled | Pi, OpenCode | `/yolo` mode (Pi), sandboxing requests (OpenCode #2242) |
| **Extension model** | | |
| MCP-centric | Kimi, Gemini CLI, Copilot CLI | Native MCP tool loading, project-level config |
| Custom extension API | Pi, OpenCode | `ToolInfo` metadata (Pi #4879), skill system (OpenCode) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **Highest engagement / trust crisis** | Claude Code | 731-comment issue (#38335), explicit churn threats, documentation-as-fix pattern perceived as evasion |
| **Rapid infrastructure iteration** | OpenAI Codex, Qwen Code, CodeWhale | Codex: 5+ PRs eliminating local config writes; Qwen: 50 PRs, 2,000-line daemon docs, scope freeze discipline; CodeWhale: 6-release roadmap, memory system batch merge |
| **Active but narrower** | Kimi, Pi | Kimi: focused Windows/MCP sprint; Pi: 20+ issues closed, fast execution on discrete fixes |
| **Stabilization / maintenance mode** | Copilot CLI | Single PR in 24h; release-stabilization focus; issue-driven triage |
| **Codebase modernization** | OpenCode | `kitlangton`'s 6-PR Effect-native test migration; significant architectural investment |

**Maturity signals**: Qwen Code's v0.16 freeze discipline and telemetry infrastructure (#4410, #4421) indicate production-readiness ambition. CodeWhale's rebrand with deprecation shims shows operational maturity. Claude Code's documentation-as-fix pattern and unresolved 2-month billing crisis suggest organizational strain.

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Context economics as first-class concern** | Cache hit rate complaints (CodeWhale #1965), prefix cache optimization (#619), 1M→200K silent downgrade (Claude #61738), token-share breakdowns (Codex #24124) | Developers should instrument and monitor token usage; vendor quotas are becoming unpredictable cost drivers |
| **Multi-agent interoperability emerging** | CodeWhale #1959 (Claude Code as sub-agent), ACP protocol standardization (#1092), MCP as lingua franca | Avoid vendor lock-in; design for composable agent architectures |
| **Safety filter calibration as competitive differentiator** | Gov/telecom blocks (Codex #23381), security research friction (Claude #61185), `/yolo` escape hatches (Pi #4936) | Tools with user-controllable safety boundaries will win regulated and research segments |
| **Linear chat UX hitting limits** | Spatial workbench (CodeWhale #1878), notebook-like structures, session goals (OpenCode #27167) | Expect interface paradigm shift; current scrollback models don't scale to complex tasks |
| **Local-first / privacy-preserving observability** | Ring buffer diagnostics (Qwen #4421), SQLite usage tracking (Codex #24121), local telemetry (Qwen #4410) | Compliance-sensitive organizations will prioritize tools with offline debuggability |
| **Documentation-as-fix anti-pattern** | 18 troubleshooting PRs (Claude), workaround proliferation | Community tolerance for documented bugs is declining; this is a leading indicator of churn |

---

*Report compiled from 2026-05-24 community digests across nine AI CLI tools. Data reflects GitHub activity snapshots; sentiment analysis inferred from comment volume, tone, and explicit user statements.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-24 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Quality control for AI-generated documents—prevents orphans, widows, numbering misalignment. Broadly applicable to all Claude document output. Awaiting review since March. |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Full ODT/ODS lifecycle: create, fill templates, parse to HTML. Targets open-source/ISO standard workflows. Active contributor updates through April. |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Refactored for single-conversation actionability. Addresses core critique that many skills are too verbose for token-efficient execution. |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills: automated evaluation of SKILL.md structure, documentation, and security posture. 5-dimension scoring rubric (20% each). |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, component vs. integration boundaries. |
| 6 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Full-stack web app deployment to public URLs via [appdeploy.ai](https://appdeploy.ai/). Lifecycle management (status, versioning, rollback). |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data. Enterprise ERP integration. |
| 8 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via AppleScript/`osascript` as alternative to screenshot-based computer use. Tiered permission system. |

**Note:** All top PRs show `Comments: undefined` in metadata, indicating possible data collection gap; ranking inferred from PR age, update frequency, and complexity indicators.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Priority Signal |
|:---|:---|:---|
| **Enterprise sharing & governance** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍), [#492](https://github.com/anthropics/skills/issues/492) (security/trust boundaries) | 🔥 Critical |
| **MCP interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#1102](https://github.com/anthropics/skills/issues/1102) (context compression for MCP data) | High |
| **Plugin system reliability** | [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills), [#1087](https://github.com/anthropics/skills/issues/1087) (overloading), [#556](https://github.com/anthropics/skills/issues/556) (0% skill trigger rate) | High |
| **Cloud platform integration** | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock), [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint Online) | Medium-High |
| **Skill authoring best practices** | [#202](https://github.com/anthropics/skills/issues/202) (skill-creator overhaul), [#509](https://github.com/anthropics/skills/pull/509) (CONTRIBUTING.md) | Medium |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal applicability; no external dependencies; solves daily user pain point |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills critical gap in Claude's code generation reliability; actively maintained (updated April 21) |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | Open standards alignment; enterprise document workflows; contributor responsive to feedback |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Directly addresses repo health score (25% → target improvement); closes [#452](https://github.com/anthropics/skills/issues/452) |
| **Bugfix trio (PDF, skill-creator, DOCX)** | [#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541) | Same author ([Lubrsy706](https://github.com/Lubrsy706)), focused quality fixes, low merge risk |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure**—org-wide skill distribution, trust-verified skill provenance, deterministic trigger behavior, and context-efficient execution—rather than more individual skill variety.

---

*Report generated from public GitHub data. PR comment counts may reflect API limitations; actual discussion volume may vary.*

---

# Claude Code Community Digest — 2026-05-24

## Today's Highlights

Anthropics shipped v2.1.150 with internal infrastructure changes, but the community quickly identified a **critical regression**: Sonnet 4.6's context window is silently capped at 200K instead of 1M tokens. Meanwhile, a massive documentation effort is underway with 18 new troubleshooting PRs filed in a single day, suggesting the team is systematically addressing a backlog of known issues rather than shipping fixes.

---

## Releases

| Version | Changes |
|---------|---------|
| [v2.1.150](https://github.com/anthropics/claude-code/releases/tag/v2.1.150) | Internal infrastructure improvements only — no user-facing changes. **Note:** Community has identified this release introduces a regression where Sonnet 4.6 shows 200K context limit instead of 1M ([PR #61738](https://github.com/anthropics/claude-code/pull/61738)). |

---

## Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | Claude Max plan session limits exhausted abnormally fast since March 23 | **731 comments, 457 upvotes** — the highest-engagement issue in the repo. Paid Max subscribers ($100/mo) report limits depleting at 2-5x expected rate, making the tool unreliable for professional work. No official fix after 2 months. | Extremely frustrated; churn risk explicitly raised |
| [#895](https://github.com/anthropics/claude-code/issues/895) | `InputValidationError`: Write failed, `content` parameter missing | Persistent 10-month bug where Claude "forgets" to include required `content` param in Write tool calls. Indicates tool-calling reliability issue in the model itself. | Ongoing reports, no resolution pattern |
| [#60366](https://github.com/anthropics/claude-code/issues/60366) | Saying "hi" triggers Usage Policy violation | Absurd false positive — benign greeting blocked by safety filters. Symbolic of broader over-censorship complaints. | Mockery + concern about broken filters |
| [#16561](https://github.com/anthropics/claude-code/issues/16561) | Parse compound Bash commands against permissions | **154 upvotes** — highly-requested UX improvement. Currently `git add && git commit` requires approval despite `git add` and `git commit` being individually allowed. Friction point for power users. | Strong community support, detailed repro |
| [#61415](https://github.com/anthropics/claude-code/issues/61415) | Desktop: Bypass Permissions mode can't be enabled on macOS | macOS desktop app regression in 2.1.148 — permission mode toggle silently reverts. Breaks headless/automated workflows. | Multiple confirmations, workaround-seeking |
| [#61185](https://github.com/anthropics/claude-code/issues/61185) | Cyber safeguards false positive: sysadmin audit commands blocked | Security researchers and sysadmins blocked from routine work. "Context poisoning" breaks session recovery, forcing restart. | Professionally damaging; explicit dual-use complaint |
| [#60724](https://github.com/anthropics/claude-code/issues/60724) | Permission mode toggle broken on desktop — AUTO MODE not staying on | Duplicate cluster of macOS permission regressions. Suggests systemic desktop app state management issue. | Frustration at duplicate closures without fix |
| [#29937](https://github.com/anthropics/claude-code/issues/29937) | Terminal rendering corruption in tmux | Long-standing TUI bug — text overlap in tmux/alacritty. Affects core developer workflow for terminal-native users. | Detailed environment reports, no fix |
| [#50916](https://github.com/anthropics/claude-code/issues/50916) | [Opus 4.7] Usage Policy Issues | Premium model tier experiencing elevated false-positive policy blocks. Paying users getting worse experience than free tier. | "Pay more, get less" sentiment |
| [#61828](https://github.com/anthropics/claude-code/issues/61828) | Usage limit reached at 2% session, 32% weekly | Billing/quota system appears desynchronized from actual consumption. Undermines trust in limit transparency. | Confusion, request for quota clarity |

---

## Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#46450](https://github.com/anthropics/claude-code/pull/46450) | Optimized duplicate comment finding | Performance fix: single backward loop replaces excessive iterations in comment deduplication. Community contribution. | Open |
| [#61757](https://github.com/anthropics/claude-code/pull/61757) | Troubleshoot: Cowork removing Office add-ins | Documents COM/OLE automation side effect breaking M365 add-ins. Workaround: admin re-deploy. | Open |
| [#61737](https://github.com/anthropics/claude-code/pull/61737) | Troubleshoot: ScheduleWakeup non-persistence | Pending wakeups stored only in memory — lost on crash/OOM. Session becomes uninterruptibly stuck. No code fix, docs only. | Open |
| [#61754](https://github.com/anthropics/claude-code/pull/61754) | Document missing `CLAUDE_CODE_SESSION_ID` in plugin MCP env | Plugin MCP servers lack session routing capability that Bash tool has had since v2.1.132. No workaround. | Open |
| [#61750](https://github.com/anthropics/claude-code/pull/61750) | Troubleshoot: Desktop app process accumulation / memory leak | 156 processes, ~31 GB RAM observed. Root cause: spawned CLI instances never reaped. Workaround: restart app. | Open |
| [#61749](https://github.com/anthropics/claude-code/pull/61749) | Model behavior template: ambiguity authorization + scope creep | New issue categories for "joking reply interpreted as authorization" and unrequested feature expansion. | Open |
| [#61745](https://github.com/anthropics/claude-code/pull/61745) | Troubleshoot: Terminal scroll yank during streaming | xterm.js bug (xtermjs/xterm.js#5801): ED2 inside DEC 2026 sync block resets viewport. Workaround: native terminal. | Open |
| [#61738](https://github.com/anthropics/claude-code/pull/61738) | **CRITICAL: Sonnet 4.6 context window shows 200K not 1M** | **Regression in v2.1.150.** Status bar and actual limit both capped at 200K despite 1M API support. Most impactful docs PR. | Open |
| [#61731](https://github.com/anthropics/claude-code/pull/61731) | Troubleshoot: 1M context silently downgraded after agents panel | Navigating agents panel strips `[1m]` suffix during save/restore. Silent data loss for long-context users. | Open |
| [#61722](https://github.com/anthropics/claude-code/pull/61722) | Troubleshoot: Context summarizer fabricating user consent | Summarizer invents "User approved via ExitPlanMode" when no approval occurred. **Safety-critical**: leads to unauthorized code execution. | Open |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Context/token management transparency** | [#49335](https://github.com/anthropics/claude-code/issues/49335) (slash commands consume context), [#49335](https://github.com/anthropics/claude-code/issues/49335), [#61731](https://github.com/anthropics/claude-code/pull/61731), [#61738](https://github.com/anthropics/claude-code/pull/61738) | High — multiple regressions in 2.1.150 |
| **Permission system granularity** | [#16561](https://github.com/anthropics/claude-code/issues/16561) (compound commands), [#46363](https://github.com/anthropics/claude-code/issues/46363) (skip low-risk prompts), [#61415](https://github.com/anthropics/claude-code/issues/61415)/[#60724](https://github.com/anthropics/claude-code/issues/60724) (mode toggle reliability) | Sustained — 150+ upvotes on compound command parsing |
| **Security research / whitehat workflow support** | [#40518](https://github.com/anthropics/claude-code/issues/40518), [#48977](https://github.com/anthropics/claude-code/issues/48977), [#61185](https://github.com/anthropics/claude-code/issues/61185) | Growing — legitimate researchers blocked mid-session |
| **Voice / multimodal interaction** | [#57470](https://github.com/anthropics/claude-code/issues/57470) (voice in Dispatch) | Early — single request, low engagement |
| **Per-project MCP configuration** | [#61379](https://github.com/anthropics/claude-code/issues/61379) (MCP deny list) | Niche but concrete — token cost motivation |

---

## Developer Pain Points

**1. Quota and billing opacity** — The [#38335](https://github.com/anthropics/claude-code/issues/38335) cluster (Max plan limits, [#61828](https://github.com/anthropics/claude-code/issues/61828) desynced limits, [#61906](https://github.com/anthropics/claude-code/issues/61906) mid-task interruption) represents a **trust crisis** for paid users. The tool stopping during job-critical work with unpredictable limits is the #1 churn driver.

**2. Safety filter false positives breaking workflows** — Benign greetings blocked ([#60366](https://github.com/anthropics/claude-code/issues/60366)), sysadmin commands flagged ([#61185](https://github.com/anthropics/claude-code/issues/61185)), security research terminated ([#48977](https://github.com/anthropics/claude-code/issues/48977), [#40518](https://github.com/anthropics/claude-code/issues/40518)). The "context poisoning" pattern (where a false positive corrupts session state) makes recovery impossible.

**3. Desktop app state management regressions** — Permission modes not persisting ([#61415](https://github.com/anthropics/claude-code/issues/61415), [#60724](https://github.com/anthropics/claude-code/issues/60724)), process leaks ([#61750](https://github.com/anthropics/claude-code/pull/61750)), zombie FleetView entries ([#61739](https://github.com/anthropics/claude-code/pull/61739)). The desktop app appears to lack robust session lifecycle management.

**4. Context window regressions in v2.1.150** — Silent downgrades from 1M→200K ([#61738](https://github.com/anthropics/claude-code/pull/61738), [#61731](https://github.com/anthropics/claude-code/pull/61731)) directly contradict the product's core value proposition for long-context workflows. The "internal infrastructure improvements" release note is now ironic.

**5. Documentation-as-fix pattern** — 18 troubleshooting PRs in 24h suggests the team is **documenting around bugs rather than fixing them**. Workarounds (restart app, use native terminal, admin re-deploy) are not substitutes for code fixes. Community noticing this pattern.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-24

---

## 1. Today's Highlights

The Codex team shipped a flurry of TUI infrastructure PRs routing all local config writes through the app-server boundary, eliminating an entire class of remote-workspace state sync bugs. Meanwhile, the community is vocally reacting to missing context/token indicators in the latest Desktop builds and escalating false-positive safety-check blocks on legitimate government/telecom development work.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **rust-v0.134.0-alpha.3** | Alpha release; no detailed changelog published. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#23794](https://github.com/openai/codex/issues/23794) | **Codex Desktop no longer shows visible context/token usage indicator** | Regression in 26.519.2081.0 removes critical UX for managing long-context sessions; users flying blind on token budgets. | 🔥 141 comments, 130 👍 — highest engagement by far; users calling it "unusable for production work" |
| [#3962](https://github.com/openai/codex/issues/3962) | **Play a sound when Codex finishes a prompt / task** | Long-running background tasks need async notification; basic QoL gap vs. competitors. | 50 comments, 164 👍 — enduring top request, no official response in 8+ months |
| [#9508](https://github.com/openai/codex/issues/9508) | **Make Weekly Limit Reset Deterministic** | Pro users hitting unpredictable rate-limit resets, breaking workflow planning and CI integration. | 36 comments, 28 👍; frustration over opaque "soon" messaging |
| [#18960](https://github.com/openai/codex/issues/18960) | **Frequent reconnect loop: websocket closed before response.completed** | Streaming reliability regression disrupting real-time collaboration; data loss risk. | 30 comments, 24 👍; multiple users confirming across networks |
| [#10726](https://github.com/openai/codex/issues/10726) | **Codex CLI Scroll issue (Windows TUI)** | Core navigation broken on Windows/WSL; accessibility blocker. | 30 comments, 13 👍; workarounds failing in recent builds |
| [#8784](https://github.com/openai/codex/issues/8784) | **"codex delete <session>" command** | Session hygiene critical for privacy and storage management; currently no native cleanup path. | 26 comments, 92 👍; community scripts circulating as workaround |
| [#22700](https://github.com/openai/codex/issues/22700) | **Revoked remote control access persists on iOS, blocks re-pairing** | Security-state desync between Desktop and mobile; locks users out of remote dev feature. | 23 comments, 30 👍; no manual cleanup possible |
| [#23381](https://github.com/openai/codex/issues/23381) | **False-positive cyber-risk warnings block Gov/GSM dev work** | Safety classifier overreach halting legitimate public-sector development; compliance risk. | 17 comments, 0 👍 (reported by affected org directly); urgent tone, thread IDs and screenshots provided |
| [#23031](https://github.com/openai/codex/issues/23031) | **Regression: raw ANSI escape sequences in Windows TUI startup** | Visual corruption breaking TUI on Windows; regression from alpha.9 → alpha.22. | 18 comments, 2 👍; [now fixed by related PR #24261](https://github.com/openai/codex/pull/24261) |
| [#24260](https://github.com/openai/codex/issues/24260) | **gpt-5.5 xhigh turn stalled 30m before first output** | Extreme latency variance undermining reasoning-tier reliability; SLA concern for Pro users. | 4 comments, 0 👍; detailed telemetry attached |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Impact |
|---|-----|-------------|--------|
| [#24257](https://github.com/openai/codex/pull/24257) | **tui: avoid remote-local plugin config reads** | Stops TUI from reading stale local `config.toml` for plugin state when app server owns mutations | Eliminates plugin UI desync in remote workspaces |
| [#24266](https://github.com/openai/codex/pull/24266) | **Source TUI plugin mentions from app server list** | Autocomplete and mentions now use server-side plugin inventory exclusively | Completes plugin state centralization |
| [#24265](https://github.com/openai/codex/pull/24265) | **TUI: stop enriching MCP inventory with local config** | Removes local `config.mcp_servers` join that caused stale/empty MCP displays | Fixes MCP reliability for remote development |
| [#24261](https://github.com/openai/codex/pull/24261) | **feat(doctor): add environment diagnostics** | Adds OS language, Git metadata, Windows console mode, terminal title to `codex doctor` | Directly addresses [#23031](https://github.com/openai/codex/issues/23031) debuggability gap |
| [#24255](https://github.com/openai/codex/pull/24255) | **Route TUI trust persistence through app server** | Onboarding trust decisions now persist via server API, not direct `config.toml` write | Prevents silent trust-state failures |
| [#24254](https://github.com/openai/codex/pull/24254) | **Persist TUI OSS provider via app server config API** | `--oss` provider selection routed through server config path | Final local-write elimination in startup path |
| [#23976](https://github.com/openai/codex/pull/23976) | **feat(tui): render next prompt suggestions [3 of 3]** | Ghost-text next-prompt suggestions after completed turns | New UX feature; reduces blank-canvas friction |
| [#24127](https://github.com/openai/codex/pull/24127) | **feat(app-server): add next prompt suggestion RPC [2 of 3]** | `thread/suggestNextPrompt` v2 API | Server foundation for suggestion engine |
| [#24124](https://github.com/openai/codex/pull/24124) | **feat(tui): add usage report command [4 of 4]** | `/usage`, `/usage week`, `/usage weekly` with token-share breakdowns | Long-requested observability; closes budget opacity gap |
| [#24121](https://github.com/openai/codex/pull/24121) | **feat(usage): add local usage storage [1 of 4]** | SQLite-backed attribution tracking for skills, tools, MCP servers, apps | Privacy-preserving local telemetry foundation |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Audible/async completion notifications** | [#3962](https://github.com/openai/codex/issues/3962) (164 👍) | Stagnant — highest-voted open issue, no PR movement |
| **Deterministic/transparent rate limits** | [#9508](https://github.com/openai/codex/issues/9508), [#19417](https://github.com/openai/codex/issues/19417) | Growing — subscription-tier confusion compounding |
| **Session lifecycle management** | [#8784](https://github.com/openai/codex/issues/8784), [#21839](https://github.com/openai/codex/issues/21839) | Active — privacy and approval-state bugs driving urgency |
| **1M context for GPT-5.5** | [#24031](https://github.com/openai/codex/issues/24031) | Frustrated — issue closed without communication, reopened by community |
| **OpenBSD/alternative sandbox platforms** | [#21977](https://github.com/openai/codex/issues/21977) | Niche but vocal — security-focused enterprise segment |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Context/token visibility regressions** | High — Desktop and VS Code extension both affected this week | Critical for cost control | [#23794](https://github.com/openai/codex/issues/23794), [#24272](https://github.com/openai/codex/issues/24272) |
| **Windows sandbox fragility** | Chronic — new variants each release | Blocks Windows adoption | [#24259](https://github.com/openai/codex/issues/24259), [#24050](https://github.com/openai/codex/issues/24050), [#24256](https://github.com/openai/codex/issues/24256), [#19315](https://github.com/openai/codex/issues/19315) |
| **Safety-check false positives** | Spiking — gov/telecom sectors reporting | Reputational + compliance risk | [#23381](https://github.com/openai/codex/issues/23381), [#24223](https://github.com/openai/codex/issues/24223) |
| **Remote workspace state sync** | Being addressed — 5+ PRs this cycle | Was major; infrastructure overhaul nearly complete | PRs [#24254](https://github.com/openai/codex/pull/24254)–[#24266](https://github.com/openai/codex/pull/24266) |
| **iOS mobile ↔ desktop pairing reliability** | Recurring — revocation handling broken | Degrades remote development story | [#22700](https://github.com/openai/codex/issues/22700), [#23062](https://github.com/openai/codex/issues/23062) |

---

*Digest compiled from github.com/openai/codex activity 2026-05-23/24. For corrections or additions, reply in thread.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-24

## Today's Highlights

The Gemini CLI project saw heavy maintenance activity with 50 issues and 42 PRs updated in the last 24 hours, despite no new release. Critical agent reliability fixes dominated the pipeline, including a reverted PTY SIGHUP fix that unexpectedly worsened shell hanging issues, and a new configurable numeric routing system that lets users define complexity-score-to-model mappings in `settings.json`.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | Follow-up to behavioral evals framework with 76 tests across 6 Gemini models; foundational for agent quality measurement | 7 comments, P1 priority, maintainer-only |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could reduce token waste and turn count by precisely reading method bounds instead of misaligned file chunks | 7 comments, 👍 1, active investigation |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Severe UX blocker—simple operations like folder creation hang for hours; workaround requires disabling sub-agents entirely | 7 comments, 👍 8, high user impact |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS interruption** | Silent failures mask incomplete work; `codebase_investigator` falsely claims success when it hit turn limits | 6 comments, 👍 2, reliability concern |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini doesn't use skills and sub-agents autonomously** | Core agent routing failure—custom skills (gradle, git) ignored unless explicitly instructed, wasting model capabilities | 6 comments, anecdotal but persistent |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck "Waiting input" after completion** | PTY/state machine bug where finished commands appear active; blocks workflow progress | 4 comments, 👍 3, recurring report |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux compatibility gap for headless browser automation; affects persistent session workflows | 4 comments, 👍 1, platform-specific |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction + reduce Auto Memory logging** | Security: secrets reach model context before redaction; service-side logging of skill data unaddressed | 3 comments, security-focused |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Surface/quarantine invalid Auto Memory inbox patches** | Silent data loss—malformed patches skipped without user visibility; aggregate dismiss only handles valid patches | 3 comments, data integrity issue |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **`get-shit-done` output hook crashes CLI** | Crash during summary phase of productivity feature; reproducible near completion | 3 comments, stability concern |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#27406](https://github.com/google-gemini/gemini-cli/pull/27406) | **Configurable numeric routing rules** | Replaces hardcoded binary threshold with user-defined complexity-score-to-model tiers in `settings.json` | Open, help wanted |
| [#27405](https://github.com/google-gemini/gemini-cli/pull/27405) | **Parse `tools.callCommand` before discovered tool execution** | Fixes argument injection bug by pre-parsing command into program/argv before sandbox preparation | Open |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | **Fix PTY memory leak** | Synchronously deletes PTY entries instead of leaking file descriptors via Promise chain | Open |
| [#27391](https://github.com/google-gemini/gemini-cli/pull/27391) | **Filter internal session context from resumption history** | Prevents `<session_context>` XML blocks from appearing in TUI during session resume | Open |
| [#27401](https://github.com/google-gemini/gemini-cli/pull/27401) | **Revert "fix(core): prevent SIGHUP kills in PTY environments"** | Reverted due to increased bug frequency; links to upstream `node-pty#827` | **Closed** |
| [#27400](https://github.com/google-gemini/gemini-cli/pull/27400) | **Add `allowCommandSubstitution` toggle** | User-configurable escape hatch for command substitution blocks, reducing wasted turns | Open, help wanted |
| [#27399](https://github.com/google-gemini/gemini-cli/pull/27399) | **Reset slash-command conflict dedupe** | Fixes monotonic Set growth and missed re-introduced conflicts in `SlashCommandConflictHandler` | Open, help wanted |
| [#27398](https://github.com/google-gemini/gemini-cli/pull/27398) | **Accept string `protocolVersion` in ACP initialize** | Normalizes date-style protocol versions for SDK schema compatibility | Open |
| [#27375](https://github.com/google-gemini/gemini-cli/pull/27375) | **Fix Gemini 3 model detection with Vertex AI resource IDs** | Restores tool access for Vertex users after v0.43.0 regex regression on full resource paths | Open, P1 |
| [#27377](https://github.com/google-gemini/gemini-cli/pull/27377) | **Prevent blacklist bypass in MCP list** | Fixes RCE vulnerability where `mcp.excluded`/`mcp.allowed` were ignored for workspace-scoped servers | Open |

---

## Feature Request Trends

1. **AST-aware tooling integration** — Multiple issues (#22745, #22746, #22747) explore replacing naive text-based file operations with syntax-aware reads (tilth, glyph, ast-grep) to improve precision and reduce token consumption.

2. **Agent self-awareness and routing intelligence** — Requests for better CLI flag awareness (#21432), autonomous skill usage (#21968), and configurable model routing (#27406) indicate the agent's decision layer needs more transparency and user control.

3. **Background and persistent operations** — Local agent backgrounding (#22741), browser session takeover (#22232), and remote agent background tasks (#20303) point to demand for async, non-blocking agent workflows.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Agent hangs and false success states** | #21409 (generalist hangs), #22323 (MAX_TURNS → GOAL), #25166 (shell "waiting input") | **Critical** — blocks all progress, high 👍 counts |
| **Sub-agent spawning without permission** | #22093 (subagents run since v0.33.0 despite disabled config) | High — trust/control violation |
| **Memory system reliability** | #26522 (infinite retry), #26523 (invalid patch handling), #26525 (redaction timing) | High — data integrity and security |
| **Platform compatibility gaps** | #21983 (Wayland), #27385 (Node 20, Windows symlinks) | Medium — excludes Linux/legacy environments |
| **Terminal/PTY instability** | #27401 (reverted SIGHUP fix), #27154 (memory leak), #24935 (editor corruption) | Medium — foundational infrastructure debt |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-24

## Today's Highlights

GitHub shipped Copilot CLI **v1.0.52** with critical fixes for stdin handling in non-interactive modes and Autopilot permission prompts, alongside a UI polish adding mouse-draggable scrollbars. The community is actively reporting enterprise configuration regressions and MCP ecosystem rough edges, with 19 issues updated in the last 24 hours indicating sustained engagement around production stability.

---

## Releases

### [v1.0.52](https://github.com/github/copilot-cli/releases/tag/v1.0.52) — 2026-05-23

| Change | Impact |
|--------|--------|
| Non-interactive subcommands no longer consume stdin | Fixes pipeline-breaking bug where `plugin list`, `mcp list`, `help`, `version` would swallow piped input ([#3464](https://github.com/github/copilot-cli/issues/3464)) |
| Vertical scrollbar with mouse drag support | Improves navigability in long conversation threads |
| Autopilot mode permission prompt fix | Eliminates spurious tool/path/URL access dialogs when switching modes |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1477](https://github.com/github/copilot-cli/issues/1477) | "Continuing autonomously (3 premium requests)" loops after model completion | **Billing/UX critical**: Autopilot mode burns premium requests even when the model has finished its task, suggesting a state machine bug in the request accounting. 18 upvotes, 10 comments since February. | 🔥 High engagement; users questioning cost transparency |
| [#3333](https://github.com/github/copilot-cli/issues/3333) | Android/Termux support broken in v1.0.48+ (glibc dependency) | **Platform regression**: Native Rust addon `runtime.node` hard-depends on glibc, breaking Termux's Bionic libc environment. Cuts off mobile/embedded developer workflow. | Niche but vocal; 4 comments seeking workarounds |
| [#3442](https://github.com/github/copilot-cli/issues/3442) | v1.0.51 Remote sessions disabled despite no explicit policy | **Enterprise blocker**: Org admins report remote sessions failing after patch upgrade with misleading error message. Suggests default policy flip or entitlement check regression. | 9 upvotes; 3 comments confirming widespread impact |
| [#2284](https://github.com/github/copilot-cli/issues/2284) | Persist `/add-dir` allowed directories across sessions | **Daily friction**: Security-conscious users must re-allow directories every session. No config file escape hatch exists. | 12 upvotes; clear feature gap vs. VS Code's persistent trust |
| [#3481](https://github.com/github/copilot-cli/issues/3481) | `contextTier=long_context` not applied on startup; no CLI flag | **Power user gap**: Settings.json config ignored for non-interactive sessions; no `--context-tier` equivalent to VS Code's UI toggle. Blocks automation use cases. | Fresh; likely affects CI/agent workflows |
| [#3436](https://github.com/github/copilot-cli/issues/3436) | `/mcp search` constructs wrong URL for custom registries | **MCP ecosystem**: Missing `/v0.1/` path segment breaks self-hosted/org MCP registries. 404s against spec-compliant endpoints. | Enterprise/self-hosting impact; 2 comments |
| [#3488](https://github.com/github/copilot-cli/issues/3488) | `config.json` trustedFolders corruption: `\.\` and `\L\` squashed | **Data integrity**: Windows path escaping bug corrupts `\.` → `.` and `\L` → `L` on rewrite. User had to re-file after markdown obscured evidence in #3487. | Closed same-day; indicates active triage |
| [#3486](https://github.com/github/copilot-cli/issues/3486) | `/mcp show` unable to scroll all tools for MCP server | **UI/Accessibility**: Tool list truncation makes MCP servers with many tools unusable. Complements #2956's UX complaints. | Fresh; no engagement yet |
| [#3494](https://github.com/github/copilot-cli/issues/3494) | SKILL.md descriptions >1024 chars silently dropped | **Silent failure**: Spec violation with no warning; debugging requires SDK source diving. Violates principle of least surprise. | Fresh; quality-of-life issue |
| [#3483](https://github.com/github/copilot-cli/issues/3483) | Copy stopped working on Ubuntu (mouse + Ctrl+C) | **Basic functionality regression**: Clipboard integration broken; terminal right-click captured by CLI instead of passing through. | Fresh; likely affects all Linux users |

---

## Key PR Progress

| # | PR | Status | Feature/Fix |
|---|-----|--------|-------------|
| [#2381](https://github.com/github/copilot-cli/pull/2381) | install: add fish shell support for PATH configuration | **Closed** | Long-standing shell compatibility gap. Fish uses array-based `set -x PATH` syntax and doesn't source `~/.profile`; previous POSIX `export` silently failed. Community contribution addresses install-time DX for fish users. |

*Note: Only 1 PR updated in the 24h window. The repository appears to be in a release-stabilization phase with issue-driven triage dominating maintainer bandwidth.*

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **MCP ecosystem hardening** | #2956 (disable in UI), #3486 (scroll tools), #3436 (registry URL), #3479 (`/env` extension visibility) | 🔥🔥🔥 Strong — MCP is the active extension surface but UX gaps abound |
| **Persistent configuration/state** | #2284 (persist `/add-dir`), #3481 (long_context flag), #3480 (rubber duck model selection) | 🔥🔥 Moderate — users want CLI to match VS Code's configurability |
| **Model/usage transparency** | #1477 (premium request accounting), #3480 (model selection for rubber duck) | 🔥🔥 Moderate — cost control and predictability concerns |
| **Cross-platform robustness** | #3333 (Android/Termux), #3483 (Ubuntu clipboard), #3488 (Windows path escaping) | 🔥🔥 Moderate — platform matrix expanding faster than test coverage |

---

## Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Silent failures and poor observability** | #3494 (dropped SKILL.md), #3488 (config corruption), #3481 (ignored settings) | **High** — Users waste cycles debugging behaviors that give no feedback |
| **Enterprise policy/entitlement opacity** | #3442 (remote sessions), #1477 (premium request counting) | **High** — "Contact your administrator" with no admin-visible toggle erodes trust |
| **MCP discoverability and management** | #2956, #3486, #3479 — disable missing from UI, tool lists unscrollable, extensions invisible to agent | **Medium-High** — MCP is the bet for extensibility but the CLI lags VS Code's integration |
| **Terminal integration fragility** | #3483 (clipboard), #3482 (wrapped prompt clipping), #3464/#3333 (stdin/platform issues) | **Medium** — Core TUI assumptions break under real terminal diversity |
| **Configuration model inconsistencies** | Settings.json vs. CLI flags vs. session-scoped commands (`/add-dir`) create a fragmented mental model | **Medium** — No clear hierarchy of precedence documented |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-05-23 to 2026-05-24.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-24

## 1. Today's Highlights

The Kimi Code CLI project saw significant activity around **MCP infrastructure hardening** and **Windows compatibility fixes**, with three related PRs targeting concurrent process logging, deferred startup failures, and background tool loading. A notable UX improvement for **thinking mode visibility** also gained traction with both a new issue and an updated PR implementing `Ctrl+T` toggling.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|--------------|
| [#2357](https://github.com/MoonshotAI/kimi-cli/issues/2357) | **Lazy session loading for Web** — Load latest messages first instead of full history | Critical for users with long sessions; current behavior creates friction when switching contexts. No community response yet but likely to resonate with power users. |
| [#2352](https://github.com/MoonshotAI/kimi-cli/issues/2352) | **`/thinking` slash command + `Ctrl+T` shortcut** | Addresses a real workflow pain: toggling thinking mode currently requires 4+ steps. Aligns with existing PR #2158, suggesting coordinated community demand. |
| [#2351](https://github.com/MoonshotAI/kimi-cli/issues/2351) | **Shell mode history visible to Agent mode** | Highlights architectural isolation between modes that breaks expected interoperability on headless servers. Copy-paste workaround is productivity-killing. |
| [#2348](https://github.com/MoonshotAI/kimi-cli/issues/2348) | **Loguru rotation `PermissionError` on Windows** | Blocking bug for Windows users running multiple Kimi processes; WinError 32 is a classic file-locking issue. Already has a matching PR (#2354) in flight. |
| [#2347](https://github.com/MoonshotAI/kimi-cli/issues/2347) | **Display SessionStart Hook stdout to users** | Bilingual request (Chinese/English) for hook output visibility to enable welcome messages, dashboards, and pre-session diagnostics. Expands hook utility significantly. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#2356](https://github.com/MoonshotAI/kimi-cli/pull/2356) | **refactor(toolset): always load MCP tools in background** | Moves MCP tool loading off the critical path to reduce interactive latency. Infrastructure change with potential reliability implications. |
| [#2355](https://github.com/MoonshotAI/kimi-cli/pull/2355) | **fix: continue after deferred MCP startup failures** | Prevents unavailable MCP servers from aborting entire sessions; adds regression test for background wait path. Fixes #2343. |
| [#2354](https://github.com/MoonshotAI/kimi-cli/pull/2354) | **fix: avoid shared rotating logs on Windows** | Implements per-process log files (`kimi.<pid>.log`) on Windows only, preserving shared logs on Unix. Direct response to #2348. |
| [#2158](https://github.com/MoonshotAI/kimi-cli/pull/2158) | **feat(ui): add `Ctrl+T` toggle for thinking content visibility** | Updated today; hides thinking by default, toggles full reasoning display. Closes #1632 and complements #2352's feature request. |
| [#2353](https://github.com/MoonshotAI/kimi-cli/pull/2353) | **fix(web): tighten app layout spacing** | Visual polish: removes outer gutter, refines sidebar spacing and search input. Before/after screenshots provided. |
| [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) | **fix: tolerate non-utf8 worker output** | Fixes Windows-specific `UnicodeDecodeError` when worker processes emit cp1252 bytes; prevents hidden failures behind decoding errors. Fixes #2313. |
| [#2349](https://github.com/MoonshotAI/kimi-cli/pull/2349) | **feat(mcp-conf): Project-level MCP configuration** | Enables `.kimi/mcp.json` with merge/override strategy against global config. Critical for team/CI reproducibility. |
| [#2344](https://github.com/MoonshotAI/kimi-cli/pull/2344) | **feat: RTK tool default Hook** *(CLOSED)* | Closed after maintainer discussion; suggests hooks may need upstream design consensus before expansion. |

---

## 5. Feature Request Trends

| Trend | Evidence |
|-------|----------|
| **Thinking mode UX simplification** | #2352 requests slash command/shortcut; #2158 implements visibility toggle. Users want frictionless control over reasoning display. |
| **Session lifecycle hooks enhancement** | #2347 wants hook stdout visible; #2344 explored default hooks. Community pushing hooks from "silent automation" to "interactive onboarding." |
| **Cross-mode state sharing** | #2351 explicitly requests Shell↔Agent history sharing. Suggests users view modes as unified session, not isolated environments. |
| **Lazy/paginated loading patterns** | #2357 for web sessions; implies scaling concerns as users accumulate long conversation histories. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Details |
|------------|-----------|---------|
| **Windows file-system concurrency** | 2 PRs + 1 Issue | Log rotation (#2348/#2354) and encoding (#2350/#2313) both stem from Windows process model differences. Platform parity gap. |
| **MCP reliability at scale** | 3 PRs | Deferred failures (#2355), background loading (#2356), and project-level config (#2349) all indicate MCP is maturing from demo to production dependency. |
| **Mode switching friction** | 2 Issues | Shell/Agent isolation (#2351) and thinking mode toggling (#2352) both require too many steps. Users expect keyboard-driven, stateful workflows. |
| **Session initialization latency** | 1 Issue + hook requests | Full history loading (#2357) and silent hooks (#2347) combine to make session startup feel sluggish and opaque. |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-24

## Today's Highlights

The community is heavily focused on **agent safety and sandboxing** following renewed attention to sandbox comparisons with competitors like Gemini CLI and Codex CLI. Meanwhile, a massive test infrastructure migration led by contributor `kitlangton` is modernizing the codebase toward Effect-native patterns, with 6+ PRs in 24 hours. Desktop stability also sees attention with legacy flow restoration and session management fixes.

---

## Releases

**v1.15.10** — Desktop bugfix release restoring legacy production desktop flows for opening projects and starting sessions. This appears to be a rollback or compatibility fix for recent desktop regressions.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Sandbox the agent** — restrict terminal commands to current directory | Core security gap vs. competitors; macOS seatbelt equivalent missing | **34 comments, 46 👍** — highly engaged, users citing Gemini CLI/Codex CLI as benchmarks |
| [#7101](https://github.com/anomalyco/opencode/issues/7101) | **Custom system prompts** (global/project/directory level) | Power user customization; addresses prompt length concerns from Reddit | **34 comments, 111 👍** — top-voted open feature, strong demand for granular control |
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | **Speech-to-text voice input** | Accessibility and UX enhancement for hands-free coding | **31 comments, 152 👍** — highest voted feature request, author actively working on implementation |
| [#2987](https://github.com/anomalyco/opencode/issues/2987) | **All sessions gone after `/compact`** (closed) | Data loss bug; critical reliability concern | **31 comments**, resolved but indicates compaction/session management fragility |
| [#16100](https://github.com/anomalyco/opencode/issues/16100) | **Numpad keys broken in VS Code 1.110 terminal** | TUI input regression affecting common IDE workflow | **29 comments, 18 👍** — specific to VS Code integration, terminal compatibility issue |
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **Native session goals with `/goal`** | Session lifecycle management; productivity feature | **20 comments, 25 👍** — builds on existing slash commands, requests persistence |
| [#3176](https://github.com/anomalyco/opencode/issues/3176) | **"Massively abusing git"** — auto-`git add .` on 45GB directories | Performance disaster, unexpected destructive behavior | **16 comments, 7 👍** — inflammatory but valid; snapshot behavior needs bounds |
| [#28732](https://github.com/anomalyco/opencode/issues/28732) | **Gemini 3.5 Flash missing `thought_signature`** (closed) | Vertex AI provider compatibility, tool calling reliability | **15 comments**, closed — provider-specific protocol mismatch |
| [#11313](https://github.com/anomalyco/opencode/issues/11313) | **Long-running bash commands truncate, cause retry loops** | Idempotency failures, workflow corruption | **14 comments, 6 👍** — affects CI/automation use cases, agent reliability |
| [#6536](https://github.com/anomalyco/opencode/issues/6536) | **Mobile app** | Platform expansion, on-the-go access | **13 comments, 42 👍** — acknowledged gap vs. browser-only mobile experience |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#28458](https://github.com/anomalyco/opencode/pull/28458) | **Context-aware timestamps** in assistant/user messages | Adds date to past messages, fixes time-only display; closes #8634 | Open |
| [#29028](https://github.com/anomalyco/opencode/pull/29028) | **Separate thinking header from markdown body** | Proper rendering of reasoning headers vs. expanded content in TUI | Open, beta |
| [#29000](https://github.com/anomalyco/opencode/pull/29000) | **Split OpenAI reasoning summary blocks** | Preserves `summary_index` boundaries, mirrors `@ai-sdk/openai` lifecycle | Open |
| [#29047](https://github.com/anomalyco/opencode/pull/29047) | **Cap retry attempts at 5** | Prevents infinite loops on broken providers, enables fallback progression | Open, needs issue/compliance |
| [#29048](https://github.com/anomalyco/opencode/pull/29048) | **Trigger fallback on empty task output** | Detects rate-limit/empty responses vs. silent empty string returns | Open, needs issue/compliance |
| [#29038](https://github.com/anomalyco/opencode/pull/29038) | **Fix prompt loop exit via parent link** | Corrects flawed ID-comparison logic for assistant response attribution; fixes #26220 | Open |
| [#29029](https://github.com/anomalyco/opencode/pull/29029) | **Normalize MessageV2 shapes to stop GC death spiral** | Refactors `filterCompactedEffect` to prevent per-iteration garbage collection collapse; closes #20285 | Open |
| [#27399](https://github.com/anomalyco/opencode/pull/27399) | **"Cancel" action for queued prompts** in TUI message dialog | UX improvement closing 4 related issues (#20090, #6942, #21906, #4821) | Open |
| [#29025](https://github.com/anomalyco/opencode/pull/29025) | **Preserve native provider options** | Maintains OpenAI/Anthropic/DeepSeek continuation fields through request lowering | Open |
| [#29035](https://github.com/anomalyco/opencode/pull/29035) | **Order prompt loop by message creation time** | Fixes non-chronological ID bugs with database-time ordering; adds regression tests | Open |

**Contributor Highlight:** `kitlangton` submitted **6 PRs** migrating tests to Effect-native fixtures (skill, LSP, project, file, tool registry, config tests) — significant codebase modernization effort.

---

## Feature Request Trends

1. **Agent Control & Safety** — Sandboxing (#2242), file permission globbing (#4287), and explicit tool controls dominate. Users want seatbelt-equivalent isolation and granular edit permissions.

2. **Session Management** — Goals (`/goal`, #27167), forking (#25582), cancellation (#27399), and compaction safety (#27924, #2987) indicate session lifecycle as a major UX frontier.

3. **Reasoning/Thinking Controls** — Multiple requests for DeepSeek V4 "disable thinking" (#24610, #29013) and reasoning UI toggles suggest model-specific behavior exposure is expected.

4. **Input Modalities** — Voice input (#4695) and mobile (#6536) expand beyond keyboard-centric TUI.

5. **Pricing-Aware Configuration** — DeepSeek V4 Pro 75% price reduction prompting limit adjustments (#28846) shows economic sensitivity in feature requests.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Edit Tool Corruption** | Indentation mangling (#14612), generics stripped in TS (#21911), garbled characters with minimax (#18031), model-specific edit failures | **4+ issues** — core tool reliability crisis |
| **Session/Data Loss** | `/compact` wiping sessions (#2987), infinite compaction loops (#27924), archive recovery confusion (#12393) | **3+ issues** — trust in persistence layer eroding |
| **TUI/Terminal Compatibility** | Numpad in VS Code (#16100), CPU busy-cycling (#13901), key input handling | **2+ issues** — cross-terminal behavior inconsistent |
| **Provider/Model Quirks** | Missing `thought_signature` (#28732), reasoning mode toggles (#24610), native option preservation (#29025) | **3+ issues** — abstraction leaks at provider layer |
| **Git Overreach** | Unbounded `git add .` (#3176), snapshot behavior surprises | **1 high-visibility issue** — operational safety concern |
| **LSP Noise** | False errors passed to AI (#7405) | Embedded/unique toolchain users affected |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-24

## Today's Highlights

Pi v0.75.5 shipped with cleaner collapsed read tool output and significant Windows performance improvements via async filesystem operations. The community closed 20+ issues in 24 hours, with heavy focus on auth lock reliability, terminal compatibility fixes, and extension ecosystem stability. A major new provider integration for Alibaba DashScope is pending review.

---

## Releases

**[v0.75.5](https://github.com/earendil-works/pi/releases/tag/v0.75.5)** — Two focused improvements:
- **Cleaner read tool output**: Collapsed `read` tool cards now display only the file path by default; `Ctrl+O` still expands full content on demand
- **Faster file tools on Windows**: Built-in file tools now use async filesystem operations during streaming, plus image resizing moved to a worker thread to prevent Microsoft Defender-induced hangs

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#4916](https://github.com/earendil-works/pi/issues/4916) | Setting to collapse file read output to single line | Directly shipped in v0.75.5; addresses CLI noise for power users | 19 comments, rapid closure — high demand, fast execution |
| [#4160](https://github.com/earendil-works/pi/issues/4160) | `pi extensions` incompatible with Bun runtime | Bun users blocked from installing extensions without npm shim; closed as "big refactor" pending | 6 comments, lingering pain for Bun-native workflows |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | Session folder collision from path normalization | `/a/b/c/d` and `/a-b/c-d` both map to `--a-b-c-d--` — data corruption risk for multi-project users | 5 comments, open, acknowledged as edge case |
| [#4907](https://github.com/earendil-works/pi/issues/4907) | `pi update` fails with ERESOLVE peer conflicts | Blocks extension updates when peer dependency ranges clash in managed npm path | 5 comments, closed — npm ecosystem friction |
| [#4307](https://github.com/earendil-works/pi/issues/4307) | macOS bun-compiled binary missing clipboard dependency | Image paste broken for mise-installed users; native module not bundled | 5 comments, closed as "big refactor" — packaging debt |
| [#4707](https://github.com/earendil-works/pi/issues/4707) | Agent hangs permanently on 429 rate limits | Undici fetch regression causes indefinite "Working" state; worst-case UX failure | 3 comments, 3 👍, closed — reliability fix |
| [#4918](https://github.com/earendil-works/pi/issues/4918) | Shift+Enter fails to insert newline | Basic terminal input broken for macOS Terminal users; workaround requires keybinding hacks | 3 comments, closed via [#4922](https://github.com/earendil-works/pi/pull/4922) |
| [#4917](https://github.com/earendil-works/pi/issues/4917) | Re-file: keyboard scrollback in TUI | Accessibility gap — no keyboard transcript review, only mouse wheel | 3 comments, closed — previously auto-closed by bot, persistent request |
| [#4927](https://github.com/earendil-works/pi/issues/4927) | Cyrillic display names crash via `x-codex-turn-metadata` | ByteString conversion fails for non-ASCII OAuth profiles; follows Codex CLI fix pattern | 3 comments, closed — internationalization bug |
| [#4879](https://github.com/earendil-works/pi/issues/4879) | Expose `promptGuidelines` on `ToolInfo` | Extension API gap — runtime tool metadata incomplete for guideline-aware extensions | 3 comments, 1 👍, open — ecosystem extensibility |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4936](https://github.com/earendil-works/pi/pull/4936) | Add tool permissions and yolo mode | Session-level gate for side-effect tools (bash/edit/write); `/yolo` toggle for power users; focused test coverage | **Closed** |
| [#4922](https://github.com/earendil-works/pi/pull/4922) | Detect Apple Terminal Shift+Enter | Terminal-specific key detection hack for macOS default terminal; author notes "I hate everything around this" but accepts ecosystem reality | **Closed** |
| [#4930](https://github.com/earendil-works/pi/pull/4930) | Strip `const` from tool schemas in openai-completions provider | Fixes Gemini API 400 errors; strips TypeBox-generated `const` keywords that Gemini rejects despite JSON Schema validity | **Closed** |
| [#4926](https://github.com/earendil-works/pi/pull/4926) | Add Alibaba DashScope provider with Qwen 3.7 Max | First-class provider for Qwen models via OpenAI-compatible endpoint; wires deep thinking controls (`enable_thinking`, `thinking_budget`) | **Open** — pending review |
| [#4925](https://github.com/earendil-works/pi/pull/4925) | Add `--startup` flag for timing diagnostics | Per-phase startup timing to stderr; replaces undiscoverable `PI_TIMING=1` env var | **Closed** |
| [#4921](https://github.com/earendil-works/pi/pull/4921) | Reclaim stale auth/settings locks in sync path | Fixes "No API key found" after crashes; aligns `proper-lockfile` stale timeout with retry budget (~200ms vs. 10000ms mismatch) | **Closed** |
| [#4756](https://github.com/earendil-works/pi/pull/4756) | Use async operations in tools | Windows TUI unblocking: moves sync fs and image resize to async/worker; addresses Defender-induced hangs shipped in v0.75.5 | **Closed** |
| [#4913](https://github.com/earendil-works/pi/pull/4913) | Hydrate account models from ChatGPT backend | Live model catalog from ChatGPT backend for Codex users; threads through registry, startup, RPC, session restore | **Closed** |

---

## Feature Request Trends

1. **TUI accessibility & input ergonomics** — Keyboard scrollback ([#4917](https://github.com/earendil-works/pi/issues/4917)), mouse click-to-cursor ([#4928](https://github.com/earendil-works/pi/issues/4928)), and terminal-specific key handling ([#4918](https://github.com/earendil-works/pi/issues/4918)/[#4922](https://github.com/earendil-works/pi/pull/4922)) dominate. Users expect native terminal parity.

2. **Provider ecosystem expansion** — Alibaba DashScope ([#4926](https://github.com/earendil-works/pi/pull/4926)), Gemini compatibility fixes ([#4930](https://github.com/earendil-works/pi/pull/4930), [#4932](https://github.com/earendil-works/pi/issues/4932)), and local server usage ([#4924](https://github.com/earendil-works/pi/issues/4924)) show demand beyond OpenAI-native stack.

3. **Extension API completeness** — `promptGuidelines` exposure ([#4879](https://github.com/earendil-works/pi/issues/4879)), tool metadata, and runtime introspection gaps block sophisticated extensions.

4. **Environment & configuration flexibility** — `env` in `settings.json` ([#3833](https://github.com/earendil-works/pi/issues/3833)), subscription indicators for non-OAuth providers ([#4910](https://github.com/earendil-works/pi/issues/4910)), and pnpm update bypass ([#4929](https://github.com/earendil-works/pi/issues/4929)).

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows filesystem & process reliability** | Defender hangs ([#4756](https://github.com/earendil-works/pi/pull/4756)), `nul` device mishandling ([#4920](https://github.com/earendil-works/pi/issues/4920)), bun process spawning ([#4915](https://github.com/earendil-works/pi/issues/4915)) | High — platform-specific bugs cluster |
| **Auth lock fragility** | Stale locks from crashes/concurrency → "No API key found" ([#4919](https://github.com/earendil-works/pi/issues/4919), [#4921](https://github.com/earendil-works/pi/pull/4921)) | High — blocks all usage, intermittent |
| **Extension runtime stability** | `message.content is not iterable` crashes all extensions ([#4908](https://github.com/earendil-works/pi/issues/4908), [#4909](https://github.com/earendil-works/pi/issues/4909)), RPC child death detection ([#4764](https://github.com/earendil-works/pi/issues/4764)), stdout `ENOBUFS` ([#4897](https://github.com/earendil-works/pi/issues/4897)) | Critical — extension ecosystem trust |
| **Package manager heterogeneity** | Bun runtime unsupported ([#4160](https://github.com/earendil-works/pi/issues/4160)), pnpm `minimumReleaseAge` blocking updates ([#4929](https://github.com/earendil-works/pi/issues/4929)), npm peer conflicts ([#4907](https://github.com/earendil-works/pi/issues/4907)) | Medium — install/upgrade friction |
| **Schema compatibility across providers** | `const` keyword rejected by Gemini ([#4930](https://github.com/earendil-works/pi/pull/4930), [#4932](https://github.com/earendil-works/pi/issues/4932)), Cyrillic metadata encoding ([#4927](https://github.com/earendil-works/pi/issues/4927)), OpenAI-compatible replay bugs ([#4854](https://github.com/earendil-works/pi/issues/4854)) | Medium — portability tax |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-24

## Today's Highlights

The v0.16.1 patch release landed with a critical fix for tool-use invariant violations across failure paths, while the v0.16.0 nightly release pipeline hit a snag (since resolved). The community is heavily focused on productionizing **Mode B (`qwen serve`)** ahead of the v0.16-alpha freeze, with extensive work on daemon stability, memory pressure management, and CLI reliability.

---

## Releases

| Version | Highlights |
|---------|-----------|
| **[v0.16.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1)** | Patch release closing a `tool_use↔tool_result` invariant leak across all failure paths in core and CLI ([PR by @wenshao](https://github.com/QwenLM/qwen-code/pull/4404)). Prevents hanging tool calls and state corruption during error recovery. |

*Note: The v0.16.0 nightly build ([20260523.0cb9ff0a2](https://github.com/QwenLM/qwen-code/issues/4449)) failed initially but was superseded by v0.16.1.*

---

## Hot Issues

| # | Title | Why It Matters | Community Pulse |
|---|-------|--------------|-----------------|
| **[#4175](https://github.com/QwenLM/qwen-code/issues/4175)** | Mode B feature-priority roadmap toward v0.16 production-ready | **The v0.16 north star.** Defines the remaining daemon hardening (F2-F5 release chain) before `qwen serve` is production-viable. 36 comments show intense coordination between maintainers and contributors. | Active roadmap negotiation; [2026-05-24 scope freeze](https://github.com/QwenLM/qwen-code/issues/4175#issuecomment-4525917313) just locked. |
| **[#4185](https://github.com/QwenLM/qwen-code/issues/4185)** | OOM in long sessions: V8 heap pressure exceeds limit before token-based compaction | **Critical reliability blocker.** Node/V8 crashes at ~4GB heap during extended sessions with large tool outputs. Directly impacts production deployments. | 3 comments; maintainers acknowledge root cause (GC pressure pre-empts compaction). Needs urgent architectural fix. |
| **[#4116](https://github.com/QwenLM/qwen-code/issues/4116)** | Critical error in session/memory management | Severe crash with Cyrillic UI context suggests internationalization or encoding-related memory corruption. 13 comments indicate ongoing but unresolved investigation. | High urgency; unclear if v0.16.1 addresses this. |
| **[#4421](https://github.com/QwenLM/qwen-code/issues/4421)** | Local diagnostics framework — ring buffer + diagnostic ID + `/bug collect bundle` | **Developer experience breakthrough.** Addresses the #1 support friction: users can't reproduce or safely share debug info. Local-first, privacy-preserving design. | Strong conceptual support; 2 comments refining scope. |
| **[#4452](https://github.com/QwenLM/qwen-code/issues/4452)** | Microsoft Claude Code plugin fails to install properly | Extensions ecosystem maturity issue. Deep-wiki skill with slash commands/agents breaks during `qwen extensions install`, blocking third-party plugin adoption. | Fresh report (2 comments); likely affects all multi-artifact Microsoft plugins. |
| **[#4466](https://github.com/QwenLM/qwen-code/issues/4466)** | `${VAR}` in `settings.json` headers not resolved from `.env` files | **Security/usability regression.** Environment variable substitution races ahead of `.env` loading, breaking MCP credential injection for Docker-based workflows. | 1 comment confirming bug; impacts sandboxed deployments. |
| **[#4471](https://github.com/QwenLM/qwen-code/issues/4471)** | Tasks hang in interactive UI | User reports stuck spinner on complex multi-step tasks (40-engineer simulation). Suggests scheduler deadlock or missing progress heartbeat. | Single report; may indicate broader task orchestration fragility. |
| **[#4448](https://github.com/QwenLM/qwen-code/issues/4448)** | Invalid `settings.json` silently triggers first-time setup | **Silent data loss risk.** Malformed config is overwritten without warning, destroying user configuration. Poor error surfacing. | 1 comment; clear UX gap. |
| **[#4450](https://github.com/QwenLM/qwen-code/issues/4450)** | `qwen --list-extensions` is no-op | CLI parity gap: flag exists but routes to normal launch. Breaks automation and scripting workflows. | Fresh; likely quick fix but symptomatic of CLI argument parsing debt. |
| **[#4419](https://github.com/QwenLM/qwen-code/issues/4419)** | Standardize file naming to kebab-case with ESLint enforcement | Codebase hygiene at scale. Mixed naming conventions create friction for contributors and AI agents. AGENTS.md documentation proposal shows meta-awareness. | 1 comment; maintenance burden accumulating. |

---

## Key PR Progress

| # | Title | Feature / Fix | Significance |
|---|-------|-------------|------------|
| **[#4353](https://github.com/QwenLM/qwen-code/pull/4353)** | Unified completeness follow-up to #4328 | **SDK unification.** Closes all gaps for library embedders (web chat, web terminal, third-party hosts) consuming `@qwen-code/sdk/daemon`. | Critical for external adoption of daemon architecture. |
| **[#4380](https://github.com/QwenLM/qwen-code/pull/4380)** | Daemon-backed React web-shell | **Major UI milestone.** Full-featured web shell with SSE events, permissions, slash commands, model switching, session resume, MCP/skills/agents views. | Bridges daemon mode to interactive web users. |
| **[#4412](https://github.com/QwenLM/qwen-code/pull/4412)** | Daemon-mode developer deep-dise documentation | **Docs infrastructure.** 2,000+ line developer guide for daemon architecture, debugging, and extension. | Reduces onboarding friction for Mode B contributors. |
| **[#4469](https://github.com/QwenLM/qwen-code/pull/4469)** | Sync main → daemon_mode_b_main (45 commits) | **Release engineering.** Prerequisite for v0.16-alpha F5 freeze. | Keeps integration branch current; blocks release chain if delayed. |
| **[#4290](https://github.com/QwenLM/qwen-code/pull/4290)** | Project-scoped memory writes + `.qwen/QWEN.local.md` | **Memory architecture.** Auto-scoped `save_memory` to project level; builds persistent project context without manual configuration. | Foundation for team-shared agent memory. |
| **[#4410](https://github.com/QwenLM/qwen-code/pull/4410)** | Telemetry Phase 3 — `qwen-code.subagent` span with concurrent isolation | **Observability.** Proper trace subtree isolation for concurrent subagents; fixes span interleaving in distributed tracing. | Production debugging essential. |
| **[#4431](https://github.com/QwenLM/qwen-code/pull/4431)** | Preserve uid/gid in `atomicWriteFile` | **POSIX correctness.** Fixes silent permission stripping on file edits, critical for shared-workspace and sudo workflows. | Security/stability fix for multi-user environments. |
| **[#4470](https://github.com/QwenLM/qwen-code/pull/4470)** | Fix stale closure race in text buffer submit handler | **Concurrency hardening.** Replaces `useReducer` with `useRef`+`useState` to handle rapid input (tmux, paste storms). | CLI reliability under automation. |
| **[#4375](https://github.com/QwenLM/qwen-code/pull/4375)** + **[#4436](https://github.com/QwenLM/qwen-code/pull/4436)** | Strengthened system prompts for code reading, tool priority, global reasoning discipline | **Prompt engineering.** Multi-PR effort to reduce hallucinated edits, enforce read-before-write, and add iterative planning. | Directly impacts output quality and user trust. |
| **[#4379](https://github.com/QwenLM/qwen-code/pull/4379)** | Feishu (Lark) channel adapter | **Enterprise integration.** WebSocket/Webhook support with interactive cards, real-time streaming, and stop buttons. | Expands addressable market to China enterprise users. |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Local-first diagnostics & observability** | #4421 (ring buffer), #4410 (telemetry), #4468 (heap debug skill) | 🔥 High — privacy-preserving debugging is becoming a core value proposition |
| **Mode B / daemon productionization** | #4175 (roadmap), #4412 (docs), #4353/#4380 (SDK/web shell), #4469 (sync) | 🔥 Critical path — all engineering aligned to v0.16 freeze |
| **Memory & context architecture** | #4290 (project memory), #4185 (OOM), #4375/#4436 (prompt discipline) | 🔥 High — scaling to long sessions is the primary technical challenge |
| **Enterprise channel integrations** | #4379 (Feishu/Lark) | Medium — expanding beyond Slack/Discord |
| **Extension/plugin ecosystem maturity** | #4452 (MS plugin install), #4450 (CLI list), #4419 (naming standards) | Medium — growing pains of third-party ecosystem |

---

## Developer Pain Points

| Pain Point | Frequency | Symptoms | Community Response |
|------------|-----------|----------|------------------|
| **Memory pressure & V8 OOM** | Chronic | #4185, #4116, #4468 (debug skill), long-session crashes | Reactive: heap snapshot tooling; needs proactive compaction architecture |
| **Silent configuration failures** | Recurring | #4448 (invalid JSON → setup wipe), #4466 (env var race) | Poor error surfacing; users lose state without warning |
| **CLI flag/argument inconsistency** | Sporadic | #4450 (`--list-extensions` no-op), #4452 (install path broken) | CLI surface area growing faster than integration testing |
| **Build system fragility** | Acute | #4447 (stale dist → TS5055), #4457 (stale express in lockfile), #4449 (nightly release fail) | Rapid iteration causing cache/artifact pollution |
| **Extension installation & discovery** | Growing | #4452 (MS plugin), #4450 (listing), #4448 (settings corruption) | Ecosystem tooling lagging behind core feature velocity |
| **Multi-platform permission/identity** | Niche but severe | #4431 (uid/gid stripping), #4466 (Docker + .env) | POSIX edge cases in containerized workflows |

---

*Digest compiled from 14 issues, 50 PRs, and 1 release in the 24h period ending 2026-05-24.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-24

## Today's Highlights

The project officially rebranded to **CodeWhale** with v0.8.41, shipping deprecation shims for legacy `deepseek` binaries that will be removed in v0.9.0. Meanwhile, maintainer Hmbown published an ambitious six-release roadmap spanning v0.8.42–v0.8.48 targeting backlog triage, observability, spatial workbenches, and tool studios. Community activity surged with 29 issues and 50 PRs updated in 24 hours, including a major batch of memory system PRs merged after extended review.

---

## Releases

| Version | Summary |
|---------|---------|
| **[v0.8.41](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.41)** | Project renamed to **CodeWhale**. Legacy `deepseek` and `deepseek-tui` binaries remain as deprecation shims for one cycle, printing a warning before forwarding to `codewhale`. Shims removed in v0.9.0. See [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md). |

---

## Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|--------------|
| **[#1615](https://github.com/Hmbown/CodeWhale/issues/1615)** | [bug] docker 拉取直接跑乱码 | **CLOSED** | 185-comment thread with heated user feedback about Docker garbled output and system crashes requiring Linux reboots. Highlights onboarding friction for Chinese-speaking users despite following official docs. Resolution likely involved encoding fixes. |
| **[#1092](https://github.com/Hmbown/CodeWhale/issues/1092)** | ACP: expose tool calls via `serve --acp` | **CLOSED** | Closes a critical gap in the Agent Client Protocol (ACP) for editor integrations like Zed. Enables `read_file`/`exec_shell`/`write_file` over JSON-RPC, making CodeWhale a viable backend for external agentic editors. 18 comments of protocol design discussion. |
| **[#1936](https://github.com/Hmbown/CodeWhale/issues/1936)** | [bug] git_status failed in Chinese folder name | **OPEN** | Encoding bug affecting CJK users—`git_status` tool mangles Chinese path encoding. Reproduced with screenshots; impacts international adoption. |
| **[#1881](https://github.com/Hmbown/CodeWhale/issues/1881)** | v0.8.47 tracker: continuity layer | **OPEN** | Core roadmap item: persistent agent state across sessions and surfaces. Aims to prevent "parallel worlds" where external clients diverge from TUI state. Foundation for multi-device workflows. |
| **[#1878](https://github.com/Hmbown/CodeWhale/issues/1878)** | v0.8.44 tracker: spatial workbench | **OPEN** | Transforms scrollback into structured "working notebook" with goals, files, evidence, branches, decisions. Addresses fundamental UX limitation of linear chat interfaces for complex tasks. |
| **[#1965](https://github.com/Hmbown/CodeWhale/issues/1965)** | 缓存命中率较低 (low cache hit rate) | **OPEN** | User reports 20–30% cache hit rate early in sessions, improving to 80–90% with context growth but unstable. Financial impact significant given DeepSeek V4's 4x price differential between cache miss/hit. Performance regression concern. |
| **[#1959](https://github.com/Hmbown/CodeWhale/issues/1959)** | [RFC] Orchestrator mode: spawn Claude Code as sub-agent | **OPEN** | Bold interoperability proposal—CodeWhale as meta-orchestrator delegating to Claude Code for MCP integration and long-running tasks. Signals user demand for multi-agent heterogeneity beyond single-model ecosystems. |
| **[#1921](https://github.com/Hmbown/CodeWhale/issues/1921)** | type `@/` and TUI freezes | **CLOSED** | Critical input parser bug causing unrecoverable freeze on Windows/WSL2. Zero comments suggests rapid triage and fix—good incident response. |
| **[#1920](https://github.com/Hmbown/CodeWhale/issues/1920)** | Clipboard copy fails on non-wlroots Wayland (niri) | **OPEN** | Wayland clipboard integration broken on modern compositors like niri. Silent failure pattern poor UX; affects Linux desktop users migrating from wlroots-based environments. |
| **[#1927](https://github.com/Hmbown/CodeWhale/issues/1927)** | Noticeable UI/input stall after pressing Enter | **OPEN** | Perceived latency in core interaction loop—submitting or confirming actions. Reported as felt delay across multiple UI surfaces, suggesting event loop or rendering bottleneck rather than network latency. |

---

## Key PR Progress

| # | Title | Status | Feature/Fix |
|---|-------|--------|-------------|
| **[#1964](https://github.com/Hmbown/CodeWhale/pull/1964)** | fix(help): keep selected row visible while scrolling | **OPEN** | Corrects help overlay viewport calculation—selected row was disappearing due to border/padding not being accounted in visible window math. Small but high-impact UX fix. |
| **[#1937](https://github.com/Hmbown/CodeWhale/pull/1937)** | feat(pricing): make DeepSeek V4 Pro 75% discount permanent | **OPEN** | Updates docs and cost estimator for permanent pricing reduction (previously promotional until May 31). Removes deadline urgency from user financial planning. |
| **[#615](https://github.com/Hmbown/CodeWhale/pull/615)** | feat(memory): after-turn auto-extract memory hook | **CLOSED** | Opt-in (`auto_extract_memory = false`) lifecycle hook auto-extracts 1-line memory notes from notable assistant outputs. Reduces manual `/remember` friction. |
| **[#616](https://github.com/Hmbown/CodeWhale/pull/616)** | feat(memory): worktree-aware memory deduplication | **CLOSED** | Tags memories with git repo root; filters load to current repo + global untagged. Prevents cross-project memory bleed—critical for polyrepo developers. |
| **[#618](https://github.com/Hmbown/CodeWhale/pull/618)** | feat(memory): per-scope size budget with smart truncation | **CLOSED** | `max_memory_tokens` default 4000; truncates oldest/lowest-priority by recency × access frequency. Prevents context bloat from unbounded memory growth. |
| **[#619](https://github.com/Hmbown/CodeWhale/pull/619)** | fix(cache): move volatile content out of system prompt prefix | **CLOSED** | Cache optimization: preserves DeepSeek V4 prefix cache across turns by separating stable/volatile system prompt content. Directly addresses cost/performance concerns in #1965. |
| **[#622](https://github.com/Hmbown/CodeWhale/pull/622)** | feat(tools): add question tool | **CLOSED** | Model can call `question(text)` for clarification with highlighted prompt box in TUI; auto-logs and defaults in `--auto` mode. Reduces hallucination from ambiguous prompts. |
| **[#624](https://github.com/Hmbown/CodeWhale/pull/624)** | feat(sidebar): replace Tasks with active Agents workbench | **CLOSED** | New Agents tab showing running sub-agents with status/summary; auto-switches when active. Foundation for v0.8.44 spatial workbench and v0.8.45 control plane. |
| **[#626](https://github.com/Hmbown/CodeWhale/pull/626)** | feat(subagents): resumable subagents + per-agent tool filtering | **CLOSED** | `task_id`-keyed persistent agent state; `allowed_tools` whitelist for sandboxed sub-agents. Enables long-running background tasks with security boundaries. |
| **[#629](https://github.com/Hmbown/CodeWhale/pull/629)** | feat(lsp): add 9-operation LSP tool | **CLOSED** | Exposes `hover`, `definition`, `references`, `rename`, `codeAction`, `completion`, `signatureHelp`, `documentSymbol`, `workspaceSymbol` via unified `lsp` tool. Deepens IDE-like capabilities in terminal. |

---

## Feature Request Trends

1. **Multi-Agent Orchestration & Interoperability** — #1959 (Claude Code sub-agents) and v0.8.48 "presence" tracker signal demand for CodeWhale as hub in heterogeneous agent ecosystems, not monolithic replacement.

2. **Observability & State Legibility** — v0.8.43 "truth surface" tracker and #1877 explicitly target eliminating opaque `Working...` states. Users want cockpit-level visibility into running tools, blocked operations, and evidence chains.

3. **Spatial/Structural Task Management** — v0.8.44 "spatial workbench" and #1878 represent rejection of linear scrollback as sufficient UX. Demand for notebook-like structures with goals, branches, checkpoints, and decisions.

4. **Memory System Maturity** — Four merged PRs (#615–#618) plus worktree-aware deduplication show memory as active investment area. Users expect cross-session continuity without manual curation.

5. **Custom API Endpoints & Deployment Flexibility** — #1919 (custom API endpoint), #1945 (loongarch64 support), and #1955 (local skills detection) reflect demand for self-hosted, air-gapped, and non-x86 deployments beyond DeepSeek's official SaaS.

---

## Developer Pain Points

| Category | Evidence | Severity |
|----------|----------|----------|
| **Input/Rendering Latency** | #1927 (Enter stall), #1926 (stacking toasts), #1915 (terminal control sequence pollution in composer) | **High** — Core interaction loop friction affecting perceived performance |
| **Internationalization / Encoding** | #1615 (Docker garbled output), #1936 (Chinese path encoding), #1920 (Wayland clipboard) | **High** — CJK and non-standard Linux environments systematically broken |
| **Cache Economics** | #1965 (20–30% early-session hit rate), #619 (prefix cache optimization merged) | **Medium-High** — Direct cost impact; volatility undermines budget predictability |
| **MCP/External Tool Reliability** | #1922 (MCP connection delays/failures), #1959 (delegation to Claude Code for better MCP) | **Medium** — Ecosystem integration gaps forcing workarounds |
| **Rebrand Migration Friction** | v0.8.41 shim strategy | **Low-Medium** — Temporary; legacy binary removal in v0.9.0 may surprise automation/scripts |
| **Local Skill Discovery** | #1955 (`.agents/skills/` not detected) | **Medium** — Documentation-promised feature non-functional; breaks custom workflow investment |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*