# AI CLI Tools Community Digest 2026-05-30

> Generated: 2026-05-30 00:25 UTC | Tools covered: 9

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
## 2026-05-30 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape has matured into a multi-polar ecosystem with seven actively maintained projects, each carving distinct positioning around model provider alignment, extensibility philosophy, and deployment target. Claude Code and OpenAI Codex represent the proprietary-model-integrated incumbents with enterprise cloud ambitions, while Gemini CLI, Qwen Code, and Kimi Code CLI pursue vertically-integrated stacks tied to their respective model families. Pi and OpenCode emerge as the agnostic, multi-provider alternatives, with DeepSeek TUI occupying a Rust-based niche focused on local-first deployments. A dominant cross-cutting theme is the tension between rapid feature expansion—particularly around MCP ecosystems, plugin architectures, and multi-agent workflows—and fundamental reliability gaps in session management, context window efficiency, and cross-platform parity.

---

## 2. Activity Comparison

| Tool | Issues (24h Activity) | PRs (24h Activity) | Releases | Release Velocity |
|:---|:---|:---|:---|:---|
| **Claude Code** | 50 issues tracked; 9 hot issues highlighted | 4 active PRs (all community) | v2.1.157 (plugin decentralization) + v2.1.156 hotfix | High (2 releases in 48h) |
| **OpenAI Codex** | 50 issues tracked; 10 hot issues | 10 active PRs (5-part cloud config series + 5 fixes) | rust-v0.136.0-alpha.1 | Moderate (alpha channel) |
| **Gemini CLI** | 10 hot issues highlighted | 10 PRs (7 merged in 24h) | v0.45.0-nightly.20260529 | Very High (7 merges/day) |
| **GitHub Copilot CLI** | 10 hot issues; no PR activity noted | 0 PRs in 24h | v1.0.57-0 → v1.0.56-1 (4 releases in 2 days) | Very High (release-driven) |
| **Kimi Code CLI** | 7 hot issues | 4 PRs (1 closed release, 3 open) | v1.46.0 (transition/sunset marker) | Low (maintenance mode) |
| **OpenCode** | 10 hot issues + security batch | 10 PRs (8 open, 2 auto-closed) | None | Moderate |
| **Pi** | 10 hot issues (4 closed) | 10 PRs (all open, diverse) | v0.78.0 | High |
| **Qwen Code** | 10 hot issues (23 new/updated noted) | 10 PRs (all open, telemetry-heavy) | v0.17.0 + v0.16.1-nightly | High |
| **DeepSeek TUI** | 10 hot issues | 10 PRs (diverse, provider-focused) | None | Moderate |

*Note: Issue/PR counts normalized from digest scope descriptions; "50 issues/PRs" indicates full digest sampling, smaller numbers indicate curated highlights.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs | Convergence Pressure |
|:---|:---|:---|:---|
| **MCP Ecosystem Hardening** | Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode, DeepSeek TUI | Auth resilience (OAuth races, token refresh), timeout governance, server lifecycle management (duplication prevention), registry trust validation | MCP becoming de facto extension standard; auth/reliability debt accumulating faster than spec evolution |
| **Context Window Transparency & Control** | Codex (#23591, #24272), Copilot CLI (#3539), Pi (#5064), Gemini CLI (#22745 AST-aware reads) | Token usage visibility, tool bloat mitigation, intelligent compaction, prefix caching optimization | Model context growth (200K+) outpaced by tool ecosystem expansion; users hitting ceilings unpredictably |
| **Session Resilience & Recovery** | Claude Code (#63147, #10199), Codex (#24571, #24833), Pi (#5197), Qwen Code (#4624), Gemini CLI (#21409 hangs) | Resume from corruption, compaction safety, OOM prevention, state durability across client reconnections | Long-running agent workflows becoming standard; data loss tolerance near zero |
| **Multi-Provider / Local LLM Support** | Pi (core identity), OpenCode (#29937 LiteLLM), DeepSeek TUI (#2247, #2361), Gemini CLI (#27570 model transitions), Qwen Code (#4609 Ollama) | OpenAI-compatible endpoint flexibility, tool-call prompt engineering for non-trained models, edge deployment optimization | Vendor lock-in resistance; cost control; regulatory data-sovereignty requirements |
| **Enterprise Governance & Policy Enforcement** | Codex (5-PR cloud config series), Copilot CLI (#223 org tokens, #3162 registry policy), Claude Code (#14200 plugin rules), Qwen Code (#4615 project-scoped MCP) | Cloud-managed configuration, org-level permission scoping, audit logging, spending guardrails | Enterprise adoption gated on compliance; consumer-grade permission models insufficient |
| **TUI Rendering Robustness** | All tools | Terminal capability detection (tmux, SSH, multiplexer), ANSI handling, IME/CJK input, copy-paste integrity | Terminal diversity is combinatorially hard; each edge case crashes or corrupts UX |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Pi | OpenCode | Qwen Code | DeepSeek TUI | Kimi Code CLI |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Primary Model Tether** | Anthropic (Claude family) | OpenAI (GPT-5.5, o-series) | Google (Gemini 3.5 Flash/Pro) | OpenAI/GitHub (multi-model) | Agnostic (20+ providers) | Agnostic (LiteLLM, Perplexity, etc.) | Alibaba (Qwen 3.7-max) | DeepSeek (DS4 Pro) + extensible | Moonshot (Kimi-K2.6) |
| **Architecture** | TypeScript/Node, plugin-skills system | Rust (aggressive modularization: `codex-prompts`, `codex-core` crates) | TypeScript/Node, experiment-gated rollouts | TypeScript, VS Code ecosystem integration | TypeScript/Node, extension API | Electron + CLI dual-mode, ACP protocol | TypeScript/Node, daemon/ACP architecture | Rust (tokio async), TUI-first | TypeScript/Node (transitioning to "Kimi Code") |
| **Extensibility Model** | `.claude/skills` local plugins + marketplace | MCP-first, cloud-managed config layers | Skills + sub-agents (auto-discovery gaps) | MCP registry + built-in agents | Extension API (`ctx.ui.custom`, `VcsProvider`) | Plugin ecosystem + IDE integrations (Zed, etc.) | MCP + telemetry hooks | Constitutional prompt overrides, provider plugins | Skills (auto-trigger unreliable) |
| **Target User** | Full-stack developers, plugin builders | Enterprise teams, Rust ecosystem | Google Cloud / Gemini API users | GitHub-centric developers, orgs | Terminal-native power users, multi-provider | IDE-integrated developers, agent builders | Chinese market, Qwen API subscribers | Local-first / privacy-conscious, Rust enthusiasts | Transitioning/uncertain |
| **Enterprise Play** | Emerging (Cowork automation, plugin rules) | Aggressive (5-PR cloud config stack, policy enforcement) | Moderate (Google Cloud integration implicit) | Strong (org tokens, GH ecosystem, but #223 blocker) | Weak (individual productivity focus) | Weak (individual/small team) | Emerging (daemon mode, ARMS telemetry) | Weak (individual/local) | Declining (sunset transition) |
| **Platform Parity** | Uneven (Termux abandoned #50270, Windows regressions #63469) | Poor (Windows second-class: GPU, WSL, OAuth, calc.exe issues) | Improving (Termux fix #27563, Wayland gap #21983) | Regressing (tmux/Cygwin #3439, Windows terminal lag) | Active focus (SSH, multiplexer, IME fixes) | Poor (Windows session loss, clipboard broken 6+ months) | Moderate (macOS npm prefix issues, Rider IDE gap) | N/A (TUI terminal-native) | Unclear (transition) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **Highest Velocity** | **Gemini CLI**, **GitHub Copilot CLI** | Gemini: 7 PR merges in 24h, nightly cadence, rapid regression response. Copilot: 4 releases in 48h, release-driven velocity, but *zero* community PR activity suggests closed development |
| **Sustained High Activity** | **Claude Code**, **OpenAI Codex**, **Pi**, **Qwen Code** | Claude: consistent plugin ecosystem investment, active debugging on critical bugs. Codex: major 5-PR architectural initiative. Pi: 10 diverse PRs, rapid provider compatibility fixes. Qwen: 23 new/updated issues, telemetry infrastructure push |
| **Moderate / Maintenance** | **OpenCode**, **DeepSeek TUI** | OpenCode: security researcher engagement, memory megathread maintenance, but 2 auto-closed PRs suggest contribution friction. DeepSeek TUI: steady provider expansion, tokio stability work, no releases |
| **Declining / Transitioning** | **Kimi Code CLI** | v1.46.0 as sunset marker, "Kimi Code successor" announced with unspecified migration path, community PRs continue but trust eroding (#2123 consumer complaint, #1994 quota disputes) |

**Maturity Signals:**
- **Most mature governance**: Claude Code (clear issue triage, plugin rules demand), Codex (enterprise config provenance tracking)
- **Most fragile trust**: Kimi Code CLI (quota opacity → legal threats), OpenCode (6-month unfixed clipboard bug #4283), Copilot CLI (#223 org token gap since Oct 2025)
- **Strongest contributor ecosystem**: Gemini CLI (7 merges/day suggests healthy review bandwidth), Pi (diverse community PRs: providers, rendering, IME)

---

## 6. Trend Signals

| Signal | Evidence | Strategic Implication |
|:---|:---|:---|
| **Context window becoming the new "memory management" crisis** | Copilot CLI #3539 (73% tool consumption), Claude Code thinking-block corruption, Codex compact task serialization failures, Qwen Code #4624 OOM | Tool ecosystem growth is outpacing context expansion; intelligent scoping, AST-aware reads, and prefix caching are becoming competitive differentiators |
| **MCP is winning the extension protocol war, but its auth/reliability spec is immature** | Cross-tool: OAuth races (#3456 Copilot, #2352 DeepSeek), timeout gaps (#172 Copilot), server duplication (#29939 OpenCode), registry trust (#3162 Copilot) | Early MCP adopters are paying integration tax; opportunity for a "MCP 2.0" governance layer or managed MCP hosting |
| **Enterprise policy enforcement as table stakes** | Codex 5-PR cloud config, Claude Code plugin rules #14200, Qwen Code project-scoped `.mcp.json` #4615 | Consumer-grade permission models are being outgrown; vendor-managed policy layers will separate enterprise winners from also-rans |
| **Local/edge deployment demand is structural, not cyclical** | Pi #5089 (timeout edge cases for local LLMs), DeepSeek TUI #2361 (raw JSON tool failures), Qwen Code #4609 (Ollama DOMException), Gemini CLI Termux fix | Privacy, cost, latency, and regulatory drivers make local model support non-negotiable; tools treating it as second-class will lose segments |
| **Terminal UI complexity approaching GUI-level engineering** | ANSI stack overflows (#5185 Pi), tab-width overflow (#5155), tmux capability detection (#5098), CJK IME (#3456 Qwen, #5200 Pi) | CLI tools are now TUI applications; teams without dedicated terminal rendering expertise will accumulate UX debt |
| **"Agent hang" as the new "server 500"** | Gemini CLI #21409 (folder creation hangs hours), Claude Code #63147 (unrecoverable sessions), Codex #24571 (interrupted resume failures), DeepSeek TUI #2328 (mode confusion) | Automation trust requires deterministic termination guarantees; tools without robust timeout/heartbeat/interruption handling will fail production adoption |
| **Pricing/transparency backlash escalating to regulatory** | Kimi Code CLI #2123 (Chinese Consumer Protection Law citation), #1994 (quota calculation disputes), Qwen Code #4614 (¥59/hour cost anxiety) | Opaque "percentage" UIs and inflated request claims are creating legal exposure; concrete metering is becoming compliance requirement |

---

*Report compiled from community digest data current as of 2026-05-30. For methodological questions or data corrections, refer to individual tool digest sources.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-30 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Addresses a universal pain point in Claude's document output. *Author: PGTBoos* |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Full ODT/ODS lifecycle: creation, template filling, parsing to HTML. Targets open-source/ISO standard document workflows. *Author: GitHubNewbie0* |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability—ensures Claude can execute every instruction without multi-turn drift. *Author: justinwetch* |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skill structure (20% weight on docs), security posture, and marketplace readiness. *Author: eovidiu* |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integrates SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data. *Author: amitlals* |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack: Testing Trophy philosophy, AAA pattern, React component testing, and anti-patterns. *Author: 4444J99* |
| 7 | **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | Four-skills cognitive framework: structured thinking templates, advisory protocol, agent orchestration, and persistent memory. *Author: Chase-Key* |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM/SAM Pro, FSM, SecOps, SPM, CSDM, IntegrationHub. *Author: Vanka07* |

> **Note:** All top PRs show `Comments: undefined` in raw data but rank by attention proxy (creation/update velocity, cross-references). Actual comment counts may require API verification.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Urgency |
|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) | 🔥 Critical |
| **Skill Distribution Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments)—namespace impersonation risk | 🔥 Critical |
| **Windows Compatibility** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)—`run_eval.py` broken on Windows | High |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#1102](https://github.com/anthropics/skills/issues/1102) (MCP data compression) | High |
| **Plugin Architecture Fixes** | [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills), [#1087](https://github.com/anthropics/skills/issues/1087) (document-skills loads undeclared content) | Medium |
| **Bedrock / AWS Deployment** | [#29](https://github.com/anthropics/skills/issues/29) | Medium |

**Emerging Skill Categories:**
- **Workflow automation** (n8n-builder/debugger: [#190](https://github.com/anthropics/skills/pull/190))
- **Codebase intelligence** (inventory audit: [#147](https://github.com/anthropics/skills/pull/147))
- **Persistent memory systems** (shodh-memory: [#154](https://github.com/anthropics/skills/pull/154); AURELION memory: [#444](https://github.com/anthropics/skills/pull/444))
- **Enterprise platform connectors** (SAP, ServiceNow)

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | Narrow, verified bugfix—8 broken references in `skills/pdf/SKILL.md`. Low review surface area. |
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Fixes document corruption (OOXML `w:id` collision). Clear root cause, production impact. |
| **YAML Validation Warning** | [#539](https://github.com/anthropics/skills/pull/539) | Prevents silent parsing failures in skill creation. Quality-of-life for all skill authors. |
| **Windows Subprocess Fixes** | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | Community-validated 1-line fixes; blocking Windows adoption of skill-creator toolchain. |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses explicit community health gap (#452). Non-controversial, process-enabling. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability and trust infrastructure**—org-wide sharing, namespace verification, cross-platform tooling, and plugin architecture integrity—rather than novel Skill capabilities alone, indicating the ecosystem is maturing from experimentation to production deployment at scale.

---

---

# Claude Code Community Digest — 2026-05-30

---

## 1. Today's Highlights

Anthropics shipped **v2.1.157** with a major plugin ecosystem expansion: local `.claude/skills` directories now auto-load plugins without marketplace dependency, alongside new scaffolding and autocomplete tooling. Meanwhile, a critical class of **"thinking block modification" API errors** continues to plague extended-thinking sessions across multiple models, with three high-engagement bugs tracking related but distinct failure modes.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v2.1.157](https://github.com/anthropics/claude-code/releases/tag/v2.1.157)** | Plugin system decentralization: `.claude/skills` auto-loading, `claude plugin init <name>` scaffolding, and `/plugin` autocomplete for subcommands, installed plugins, and known plugins |
| **[v2.1.156](https://github.com/anthropics/claude-code/releases/tag/v2.1.156)** | Hotfix for Opus 4.8: resolved thinking block modification causing API Error 400 |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#10199](https://github.com/anthropics/claude-code/issues/10199) | **API Error 400 — Thinking Block Modification Error** | Root-cause bug for v2.1.156 hotfix; affects Opus 4.8 with reproducible trigger | 94 comments, 56 👍 — highest engagement, active debugging |
| [#60366](https://github.com/anthropics/claude-code/issues/60366) | **"Hi" triggers Usage Policy violation error** | Bizarre false-positive in content moderation; breaks basic UX | 61 comments, 18 👍 — users documenting workarounds |
| [#63147](https://github.com/anthropics/claude-code/issues/63147) | **Resuming extended-thinking session fails permanently with 400** | Data-loss scenario: transcript corruption makes sessions unrecoverable; distinct from #10199 | 38 comments, 35 👍 — severe impact on long workflows |
| [#14200](https://github.com/anthropics/claude-code/issues/14200) | **Add rules support to Plugins** | Top-voted enhancement; would enable plugin governance and safety guardrails | 26 comments, 77 👍 — strong demand from plugin developers |
| [#44243](https://github.com/anthropics/claude-code/issues/44243) | **Support multiple Slack workspaces in built-in Slack connector** | Enterprise/consultant blocker; current 1-workspace limit breaks real workflows | 25 comments, 50 👍 — clear business use case |
| [#6275](https://github.com/anthropics/claude-code/issues/6275) | **Prompt text lost on Up Arrow key press** | Chronic UX papercut; no draft recovery mechanism | 24 comments, 41 👍 — long-standing frustration |
| [#50270](https://github.com/anthropics/claude-code/issues/50270) | **v2.1.113+ broken on Termux/Android (glibc dependency)** | Platform abandonment; native binary breaks previously-supported mobile/embedded use | 23 comments, 46 👍 — accessibility concern |
| [#47180](https://github.com/anthropics/claude-code/issues/47180) | **Cowork scheduled tasks ignore "Always allow" permissions** | Automation reliability: permission prompts defeat unattended execution purpose | 20 comments, 24 👍 — Cowork adoption blocker |
| [#34835](https://github.com/anthropics/claude-code/issues/34835) | **Queue messages via user info requests** | Workflow enhancement for multi-step clarification without blocking | 17 comments, 13 👍 — interaction design gap |
| [#63469](https://github.com/anthropics/claude-code/issues/63469) | **API 400: `messages[1].role` got 'system'** | v2.1.156 regression on Windows; message formatting bug breaking requests | 14 comments, 5 👍 — new in latest release |

---

## 4. Key PR Progress

Only **4 PRs** active in last 24h; all community-contributed:

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#63467](https://github.com/anthropics/claude-code/pull/63467) | **docs: add Windows gh CLI install instruction** | Fixes platform gap in commit-commands README; adds `winget install --id GitHub.cli` | Open |
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | **Bump stale/autoclose timeouts 14→90 days** | Addresses community concern about aggressive issue closure; 6.4× longer lifecycle | Open |
| [#62099](https://github.com/anthropics/claude-code/pull/62099) | **Add credential-guard plugin** | Security plugin with 20+ secret patterns; PreToolUse hooks on Write/Edit/Bash | Open |
| [#63460](https://github.com/anthropics/claude-code/pull/63460) | **docs: update deprecated npm install in plugins/README.md** | Aligns plugin docs with current install methods (curl/irm); removes deprecated `npm -g` | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Plugin ecosystem maturation** | v2.1.157 release, #14200 (rules), #62099 (credential-guard PR) | High — core platform priority |
| **Enterprise multi-tenant integrations** | #44243 (multi-Slack), #63699 (admin settings coupling) | Medium — organizational scaling |
| **Session resilience & recovery** | #63147, #6275, #34835 (queuing) | Medium — reliability gaps in long sessions |
| **Cross-platform parity** | #50270 (Android), #62699 (Linux copy), #63469 (Windows) | Persistent — platform coverage uneven |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Thinking block corruption** | 3+ distinct issues (#10199, #63147, #63812, #63810) | Critical — data loss, unrecoverable sessions | Partial fix in v2.1.156; root cause persists for resume flows |
| **Over-aggressive content filtering** | #60366 ("hi" = policy violation) | High — basic functionality blocked | No acknowledged fix |
| **Permission system inconsistencies** | #47180 (Cowork ignores "Always allow"), #54324 (Chrome extension prompts) | High — trust erosion in automation | Long-standing |
| **Mobile/embedded platform abandonment** | #50270 (Termux broken since v2.1.113) | Medium — accessibility regression | No response from maintainers |
| **TUI text handling fragility** | #6275 (arrow key data loss), #62699 (copy broken) | Medium — daily UX friction | Stale; no recent progress |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-30

## 1. Today's Highlights

Windows stability dominates the issue tracker with multiple new GPU rendering, browser integration, and WSL connectivity regressions reported in the last 24 hours. Meanwhile, OpenAI is actively merging a 5-PR cloud-managed configuration stack to bring enterprise policy enforcement to Codex deployments. The Rust codebase continues its modularization with a new `codex-prompts` crate extraction and expanded CI coverage.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **rust-v0.136.0-alpha.1** | New alpha release in the Rust track; no detailed changelog provided in release metadata. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#19811](https://github.com/openai/codex/issues/19811) | **Windows 10 dependency repair loop** — Codex Desktop prompts for workspace dependency repair on Win10, but install fails because Win10 is unsupported | Reveals a UX trap: the app offers a repair action on an already-unsupported platform, wasting user time. 16 comments suggest this is a common onboarding friction point. | 9 👍, active discussion on proper deprecation messaging |
| [#23672](https://github.com/openai/codex/issues/23672) | **App-server crash with exit code 0xC0000005** (`3221225501`) on Windows 11 25H2 | Access violation in the WebSocket layer blocks app startup entirely for affected users. Intel CPU specificity noted. | 15 comments, diagnostic deep-dives ongoing |
| [#24272](https://github.com/openai/codex/issues/24272) | **Context window indicator missing** (closed) | Extension UI regression where token usage visibility disappeared; now resolved but indicates recent UI churn. | 5 👍, confirmed fix |
| [#20873](https://github.com/openai/codex/issues/20873) | **False-positive cybersecurity safety flag** in CLI | Safety classifier misfires on benign code-mode sessions, breaking workflow trust. User on Pro tier affected. | 4 👍, calls for appeal/recourse mechanism |
| [#24797](https://github.com/openai/codex/issues/24797) | **Remote compact task fails: unknown variant `auto`** | Breaks long-running threads on macOS; serialization mismatch between client and server on compaction policy. | 10 comments, reproducible |
| [#23591](https://github.com/openai/codex/issues/23591) | **Reimplement visible context/token usage indicator** (closed) | High-demand UX request (34 👍) for transparency into context consumption; closed as completed, validating user priority. | 34 👍, strong consensus feature |
| [#23588](https://github.com/openai/codex/issues/23588) | **Subagent UUID leak in TUI** — raw agent_path shown instead of nickname | Regression in 0.131.0 degrades multi-agent readability; breaks mental model of "named collaborators." | 6 comments, awaiting fix |
| [#24580](https://github.com/openai/codex/issues/24580) | **calc.exe auto-launch** (closed) | Sandbox approval policy misbehavior caused unexpected process spawning; security-adjacent, quickly closed. | Rapid triage, 4 comments |
| [#24814](https://github.com/openai/codex/issues/24814) | **Browser Use blocked by enterprise network policy** | In-app browser fails even for `example.com`, suggesting overly broad network restrictions or certificate handling issues in the embedded WebView. | 4 comments, enterprise deployment blocker |
| [#25094](https://github.com/openai/codex/issues/25094) | **Windows Desktop freeze on browser-use thread switch** | UI thread blocks during IAB initialization; "Not Responding" window appears. Newly filed, fresh regression. | 2 comments, needs reproduction scale |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#24987](https://github.com/openai/codex/pull/24987) | **Hide background MCP startup status** | Cleans up TUI boot experience by suppressing noisy MCP initialization chatter unless explicitly requested | Open |
| [#24620](https://github.com/openai/codex/pull/24620) | **Cloud-managed config layer support** | PR 3/5: Enterprise cloud config as first-class config source with full provenance tracking | Open |
| [#24621](https://github.com/openai/codex/pull/24621) | **Cloud config bundle transport** | PR 4/5: Bundle loader/cache following existing cloud requirements pattern | Open |
| [#24622](https://github.com/openai/codex/pull/24622) | **Switch runtime to cloud config bundle** | PR 5/5: Cuts over runtime loading, removes legacy `codex-cloud-requirements` path | Open |
| [#24619](https://github.com/openai/codex/pull/24619) | **Compose requirements layers** | PR 2/5: Shared composition engine for ordered requirements layers with merge semantics tests | Open |
| [#25177](https://github.com/openai/codex/pull/25177) | **Preserve cloud requirements across TUI thread resets** | Fixes `/new` and `/clear` dropping enterprise policy enforcement — critical for managed deployments | Open |
| [#25151](https://github.com/openai/codex/pull/25151) | **Extract prompts from codex-core** | New `codex-prompts` crate separates rendering/assets for reviewability; architectural hygiene | Open |
| [#24983](https://github.com/openai/codex/pull/24983) | **Make justfile recipes Windows-aware** | Enables Windows devs to use POSIX-isms like `"$@"` and `2>/dev/null` without forked build scripts | Open |
| [#25171](https://github.com/openai/codex/pull/25171) | **Bedrock API key region fallback** | Respects `AWS_REGION` env var when `AWS_BEARER_TOKEN_BEDROCK` is used; fixes documented setup path | Open |
| [#24956](https://github.com/openai/codex/pull/24956) | **Prevent macOS fs-helper startup hangs** | Splits sandbox policy to prevent permission starvation blocking filesystem helper initialization | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Linux Desktop parity** | [#25100](https://github.com/openai/codex/issues/25100) | Persistent gap; Chrome plugin + first-class app requested |
| **Context/token transparency** | [#23591](https://github.com/openai/codex/issues/23591) (closed), [#24272](https://github.com/openai/codex/issues/24272) | Recently shipped but fragile; users want it everywhere (app, extension, CLI) |
| **MCP session resumability** | [#24833](https://github.com/openai/codex/issues/24833) | `resume_path` for Codex MCP tool to enable long-running workflow continuity |
| **Ad/promotion controls** | [#24882](https://github.com/openai/codex/issues/24882) | Enterprise accounts seeing promoted apps; opt-out requested |
| **Issue deduplicator intelligence** | [#24786](https://github.com/openai/codex/issues/24786) | Surface-aware suggestions with confidence scores for maintainers |

---

## 6. Developer Pain Points

| Theme | Frequency | Specific Manifestations |
|-------|-----------|------------------------|
| **Windows as second-class citizen** | Very High | GPU flickering ([#24904](https://github.com/openai/codex/issues/24904)), WSL failures ([#25170](https://github.com/openai/codex/issues/25170)), OAuth callback breakage ([#25157](https://github.com/openai/codex/issues/25157)), calc.exe sandbox escapes ([#24580](https://github.com/openai/codex/issues/24580)), mobile-remote pairing failures ([#25164](https://github.com/openai/codex/issues/25164)) |
| **Subagent UX polish gaps** | High | UUID display ([#23588](https://github.com/openai/codex/issues/23588)), stale agent accumulation ([#25179](https://github.com/openai/codex/issues/25179)), history readability ([#24581](https://github.com/openai/codex/issues/24581)) |
| **Thread state corruption / stuck thinking** | Moderate-High | Interrupted resume failures ([#24571](https://github.com/openai/codex/issues/24571)), compact task serialization ([#24797](https://github.com/openai/codex/issues/24797)), SSH remote notification gaps ([#24004](https://github.com/openai/codex/issues/24004)) |
| **Cost opacity / control** | Moderate | [#25180](https://github.com/openai/codex/issues/25180) — $100 drained rapidly; no spending guardrails visible |
| **macOS workspace launch regression** | Emerging | `open -a Codex <path>` broken in v26.527 ([#25166](https://github.com/openai/codex/issues/25166)) — breaks automation/Alfred workflows |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-29 to 2026-05-30.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-30

## Today's Highlights

The v0.45.0 nightly landed with a critical PTY resize hardening fix, while the team pushed forward on GA model migration with experiment-gated Flash transitions. Community contributors remain highly active with 7 merged PRs in 24h addressing terminal hangs, UI jank, and shell execution edge cases.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.45.0-nightly.20260529.gc82e2b597](https://github.com/google-gemini/gemini-cli/pull/27496)** | Hardened PTY resize against native crashes ([scidomino](https://github.com/scidomino)); automated changelog generation for v0.45.0-preview.0 |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** | Robust component level evaluations | EPIC tracking behavioral eval infrastructure; 76 tests running across 6 Gemini variants. Critical for agent reliability at scale. | 7 comments, maintainer-driven |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | AST-aware file reads, search, and mapping | Could reduce token waste and turn count by precisely bounding method reads. Major quality-of-execution bet. | 7 comments, 👍 1 |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | Generalist agent hangs indefinitely | Severe UX blocker — simple folder creation hangs for hours. Workaround (disable subagents) hurts capability. | 7 comments, 👍 8 (highest) |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Subagent reports GOAL success after MAX_TURNS interruption | Silent failure mode masks incomplete work; `codebase_investigator` specifically affected. | 6 comments, 👍 2 |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | Gemini ignores custom skills and sub-agents | Core value proposition (extensible skills) underutilized without explicit user prompting. | 6 comments |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell execution stuck "Waiting input" after completion | Frequent hang on trivial commands; breaks flow state. Regression risk in shell integration. | 4 comments, 👍 3 |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** | Auto Memory leaks pre-redaction secrets to model context | Security gap: secrets reach model before redaction prompt executes. Needs deterministic pre-filter. | 3 comments |
| **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)** | Invalid Auto Memory patches silently skipped | Data loss + security: malformed patches bypass validation; aggregate dismiss misses them too. | 3 comments |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | Browser subagent fails on Wayland | Linux compatibility gap affecting headless/persistent browser workflows. | 4 comments, 👍 1 |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** | 400 error with >128 tools | Scale ceiling hit by power users; needs intelligent tool scoping. | 3 comments |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **[#27570](https://github.com/google-gemini/gemini-cli/pull/27570)** | Transition to flash GA model with experiment flag | Safe rollout of `gemini-3.5-flash` via experiment gating; backward compatibility preserved | Open |
| **[#27572](https://github.com/google-gemini/gemini-cli/pull/27572)** | Fix tmux false positive background detection | Resolves #ffffff light-terminal misdetection via mosh/tmux; fixes theme regression | Open |
| **[#27568](https://github.com/google-gemini/gemini-cli/pull/27568)** | Fallback when ripgrep execution fails | Graceful degradation to legacy `GrepTool` on missing `rg`/exit 64; preserves ripgrep-only option failures | Open |
| **[#27563](https://github.com/google-gemini/gemini-cli/pull/27563)** | Termux linker64 crash fix | Uses `TERMUX_ORIGINAL_EXE_PATH` to prevent Node.js spawn failure on argument dash-prefix | Open |
| **[#27383](https://github.com/google-gemini/gemini-cli/pull/27383)** | Prevent eager MCP tool wipe on network timeout | Atomic refresh retains tools during transient drops; kills "tool not found" flakiness | Open |
| **[#27428](https://github.com/google-gemini/gemini-cli/pull/27428)** | Docker inspect exit code vs stdout parsing | Fixes `imageExists` false negatives with DOCKER_BUILDKIT stderr output | Open |
| **[#27348](https://github.com/google-gemini/gemini-cli/pull/27348)** | Wrap Ajv validate() in try/catch | Prevents `Cannot read properties of undefined` crash on malformed LLM schemas | Open |
| **[#25324](https://github.com/google-gemini/gemini-cli/pull/25324)** | Prevent spam loop on invalid preferredEditor | Stops infinite `Editor is not supported` re-render cycle | **Merged** |
| **[#25643](https://github.com/google-gemini/gemini-cli/pull/25643)** | Throttle shell text output to prevent UI jank | Batches high-volume output (npm test/build); mirrors existing `binary_progress` pattern | **Merged** |
| **[#26324](https://github.com/google-gemini/gemini-cli/pull/26324)** | Fix ghost text wrapping infinite loop | Resolves hang on zero-width terminals and `@getskill.sh:3`-style inputs | **Merged** |

---

## Feature Request Trends

1. **AST-aware tooling integration** — Multiple issues (#22745, #22746, #22747) investigate structured code navigation to replace fuzzy text search, with `ast-grep`, `tilth`, and `glyph` cited as candidates. Goal: reduce misaligned reads and token burn.

2. **Agent self-awareness & introspection** — Requests for accurate CLI flag knowledge (#21432), proper skill/sub-agent utilization (#21968), and self-execution guidance. The agent doesn't reliably "know itself."

3. **Memory system hardening** — Cluster of Auto Memory issues (#26522–#26525) around retry storms, invalid patch handling, and pre-redaction security. Moving from "best effort" to deterministic guarantees.

4. **Server-driven model management** — Epic #20878 pushes centralized model routing via `LoadCodeAssist`, reducing client-side model configuration drift.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Agent hangs & false success states** | #21409 (generalist hangs), #22323 (MAX_TURNS → GOAL), #25166 (shell "awaiting input" lie) | Critical — breaks trust in automation |
| **Terminal/PTY reliability** | #21924 (resize flicker), #24935 (editor exit corruption), nightly PTY crash fix | High — core to CLI UX |
| **Tool scaling limits** | #24246 (>128 tools = 400 error), #21968 (skills ignored) | High — power users blocked |
| **Linux/Wayland compatibility gaps** | #21983 (browser/Wayland), #27563 (Termux/linker64) | Medium — platform coverage holes |
| **Memory security & correctness** | #26525 (secret leakage), #26523 (invalid patches), #26522 (infinite retry) | High — data integrity risk |
| **Subagent permission model confusion** | #22093 (subagents run despite "disabled"), #22672 (destructive ops unguarded) | Medium — safety expectations violated |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-30

---

## 1. Today's Highlights

GitHub shipped three rapid-fire releases (v1.0.56 through v1.0.57-0) with meaningful UX improvements: Free and Student users gained model selection freedom, diff views got a modern continuous-scroll overhaul, and auth error messages finally expose real root causes like API rate limits rather than cryptic session failures. Meanwhile, the issue tracker shows mounting tension around enterprise token permissions, MCP server governance, and context window bloat from over-eager tool loading.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.57-0** | 2026-05-30 | `/diff` defaults to branch diff when no unstaged changes exist; auth-token validation now surfaces real errors (e.g., GitHub API rate limits) instead of misleading "Session was not created with authentication info" messages |
| **v1.0.56** | 2026-05-29 | Free/Student users can select non-Auto models; ThemePicker fits 120-column terminals; model picker shows accurate context window sizes per tier; new `builtInAgents.rubberDuck` setting |
| **v1.0.56-2** | 2026-05-29 | Diff view: continuous scroll with sticky headers, full terminal width, theme-aware colors; `web_fetch` prefers markdown via HTTP content negotiation |
| **v1.0.56-1** | 2026-05-29 | Code review agent uses current session's model; GitHub MCP server omits redundant `gh`-replaceable tools when `gh` CLI is on PATH; cursor position fix after paste |

---

## 3. Hot Issues

| # | Status | Title | Why It Matters | Community Signal |
|---|--------|-------|--------------|----------------|
| [#223](https://github.com/github/copilot-cli/issues/223) | 🔴 OPEN | "Copilot Requests" permission missing for org-owned fine-grained tokens | **Enterprise governance blocker**: Orgs need service-account tokens, not personal PATs, for CI/automation. 28 comments, 74 👍 show this is a long-bleeding wound since Oct 2025. | 74 👍, 28 comments — highest engagement on any open issue |
| [#700](https://github.com/github/copilot-cli/issues/700) | 🔴 OPEN | Provide `--list-models` CLI flag | **Discoverability gap**: Users can't see available models, pricing multipliers, or context tiers without trial-and-error. Critical for cost-conscious workflows. | 13 comments, steady activity since Dec 2025 |
| [#172](https://github.com/github/copilot-cli/issues/172) | 🟢 CLOSED | MCP timeouts not respected | **Reliability fix closed**: Long-running MCP servers (e.g., analysis tools) were unusable. Resolution validates MCP as a first-class extension pattern. | 10 comments, resolved |
| [#3439](https://github.com/github/copilot-cli/issues/3439) | 🔴 OPEN | TUI rendering lag regression in tmux/mintty/Cygwin (1.0.49) | **Windows terminal ecosystem pain**: Cygwin/mintty users — common in locked-down enterprise environments — hit severe performance regressions. Bisected to 1.0.49. | 8 comments, regression confirmed |
| [#98](https://github.com/github/copilot-cli/issues/98) | 🔴 OPEN | Integrate with `prompts/*.md` reusable prompts | **Workflow parity**: VS Code Copilot supports `.github/prompts/*.md`; CLI users want the same reusable prompt library for consistency across editor and terminal. | 28 👍, 6 comments |
| [#3539](https://github.com/github/copilot-cli/issues/3539) | 🔴 OPEN | System/Tools consume 73% of context window (146k/200k) | **Architecture scaling crisis**: ~10 MCP servers + plugins exhaust context before first user message. Auto-compaction on session start degrades quality unpredictably. | 4 comments, 2 👍 — niche but severe |
| [#3162](https://github.com/github/copilot-cli/issues/3162) | 🔴 OPEN | Registry-listed MCP servers falsely flagged as policy-blocked | **Trust model broken**: Registry curation is undermined if CLI's validation logic false-negatives. Blocks internal MCP adoption at policy-restricted orgs. | 6 comments |
| [#1869](https://github.com/github/copilot-cli/issues/1869) | 🔴 OPEN | `gpt-5-mini` not persisted across sessions | **State management fragility**: Model preferences revert unpredictably, breaking user trust in configuration durability. | 5 comments |
| [#3456](https://github.com/github/copilot-cli/issues/3456) | 🔴 OPEN | Concurrent refresh-token requests kill OAuth chain on MCP servers | **Race condition in auth**: Strict reuse-detection servers (common in Entra/Okta) break under parallel tool calls. Production reliability issue. | 1 comment, fresh (May 21) |
| [#3573](https://github.com/github/copilot-cli/issues/3573) | 🔴 OPEN | Bell/urgent hint broken in 1.0.55 | **Accessibility/regression**: Terminal bell alerts (used by screen readers and window managers) silently stopped working. | 2 comments, just filed |

---

## 4. Key PR Progress

*No Pull Requests updated in the last 24 hours.* 

> The project's velocity appears release-driven with internal merges; community contribution pathways may be limited or PRs tracked separately.

---

## 5. Feature Request Trends

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Model transparency & control** | #700 (`--list-models`), #1869 (persistence), #2470 (org policy respect), #3557 (contextTier restore) | 🔴 Critical mass — users need predictable, governable model selection |
| **MCP ecosystem hardening** | #172 (timeouts), #3162 (registry validation), #3456 (OAuth races), #3462 (port conflicts), #3583 (token refresh v1→v2), #3577 (mid-turn tool rebuild) | 🟡 Rapid growth phase with auth/reliability debt |
| **Reusable prompt infrastructure** | #98 (`prompts/*.md`), #3574 (subagent prompting hooks) | 🟢 Emerging — parity with VS Code Copilot |
| **Enterprise/team scalability** | #223 (org tokens), #3042 (permission prompts), #3561/#3579 (monorepo hook scoping) | 🔴 Blocker for adoption at scale |
| **Observability & debugging** | #3581 (session logs), #3311/#3573 (error clarity) | 🟡 Catching up to Claude Code/Codex standards |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Context window starvation from tool bloat** | Rising | 🔴 Critical | #3539 — 10 MCP servers consume 146k/200k tokens before first message; auto-compaction degrades output quality |
| **MCP auth fragility under concurrency** | High | 🔴 Critical | #3456, #3462, #3583 — OAuth refresh races, port collisions, and v1/v2 protocol drift break enterprise MCP integrations |
| **Configuration state not durable** | Chronic | 🟡 High | #1869, #3557 — model/tier selections evaporate between sessions; undermines automation and trust |
| **Enterprise permission gaps** | Chronic | 🔴 Critical | #223, #2470, #3042 — org-level token scoping, model policies, and trust prompts don't match corporate governance needs |
| **Terminal rendering regressions** | Episodic | 🟡 High | #3439, #3172, #3573, #3580 — tmux/Cygwin lag, clipboard ownership spam, bell breaks, double-link opens |
| **Missing observability parity** | Rising | 🟡 High | #3581 — no machine-readable session logs vs. Claude Code/Codex/Gemini; blocks debugging and audit |

---

*Digest compiled from github.com/github/copilot-cli activity through 2026-05-30.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-30

## 1. Today's Highlights

The Kimi CLI project has formally announced its evolution to **Kimi Code**, a successor project, with v1.46.0 serving as a transitional release. Meanwhile, the community is actively contributing fixes for critical API interaction bugs—notably a context compaction crash causing 400 errors—while long-standing disputes over rate-limiting transparency and quota calculation accuracy continue to escalate with consumer-protection complaints.

---

## 2. Releases

### v1.46.0 — Evolution to Kimi Code
- **Transition announcement**: Official docs now redirect users to the Kimi Code successor project ([PR #2377](https://github.com/MoonshotAI/kimi-cli/pull/2377))
- **Router fix**: Corrected auto language redirect behavior in documentation ([PR #2378](https://github.com/MoonshotAI/kimi-cli/pull/2378))
- **Shell UX**: Updated welcome tip link to point to kimi.com ([commit](https://github.com/MoonshotAI/kimi-cli/commit/feat(shell): update welcome tip link to kimi.com))

> **Analyst note**: This release functions as a sunset marker for the `kimi-cli` branding rather than a feature milestone. Users should monitor migration paths to Kimi Code.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | API Error 400 on invalid request | 🔴 OPEN | 18 comments across 4 months; affects Claude Sonnet model integration on Windows/PowerShell. Persistent without clear resolution pattern. | Frustration; version confusion (reporter cites v2.1.23 vs. latest 1.46.0) |
| [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) | KimiCode usage calculation discrepancy | 🔴 OPEN | **6 upvotes** — highest community signal. User reports 2 tasks exhausting 2-hour quota; official claims of 300-1200 requests/5hrs appear inflated. | Strong pushback; translation provided for international visibility |
| [#2123](https://github.com/MoonshotAI/kimi-cli/issues/2123) | Severe rate limiting / quota transparency | 🔴 OPEN | Escalated to consumer rights complaint (citing Chinese Consumer Protection Law). Accuses "service black hole" — percentage-based UI hides actual limits. | Legal threat; refund demand refused |
| [#2399](https://github.com/MoonshotAI/kimi-cli/issues/2399) | Agent ignores skills, falls back to raw shell | 🔴 OPEN | **Fresh** (May 29). Auto-trigger mechanism failure breaks core agent workflow on Linux. No comments yet but critical to product value proposition. | Early-stage; needs triage |
| [#2397](https://github.com/MoonshotAI/kimi-cli/issues/2397) | How to execute shell commands | 🔴 OPEN | **Support debt indicator** — user filled entire template with repeated question. Suggests onboarding/documentation failure for basic functionality. | User confusion; possible i18n gap |
| [#2396](https://github.com/MoonshotAI/kimi-cli/issues/2396) | `kimi export` crashes during context compaction | 🔴 OPEN | **Root cause identified** — empty `TextPart`s in compaction messages trigger API 400. Reporter already submitted fix PR #2395. | Productive: bug → immediate PR |
| [#247](https://github.com/MoonshotAI/kimi-cli/issues/247) | CLI fails after API key entry | 🟢 CLOSED | Legacy issue (v0.52) from Nov 2025, resolved May 29. Demonstrates long tail of auth configuration problems. | Resolved; 12-comment diagnostic thread |

---

## 4. Key PR Progress

| # | PR | Status | Description | Technical Significance |
|---|-----|--------|-------------|------------------------|
| [#2398](https://github.com/MoonshotAI/kimi-cli/pull/2398) | Relax OpenAI + FastMCP dependency pins | 🔴 OPEN | Unpins Kosong's OpenAI SDK from `2.14.x` to `2.x` range; bumps FastMCP `3.2.4 → 3.3.1` | **Ecosystem health**: Narrow pins force downstream version conflicts; this improves composability |
| [#2395](https://github.com/MoonshotAI/kimi-cli/pull/2395) | Fix compaction: filter empty text parts | 🔴 OPEN | Filters whitespace-only `TextPart`s in context compaction path | **Critical bugfix**: Same class as #1663 (tool messages) but compaction path was missed; pairs with #2396 |
| [#2245](https://github.com/MoonshotAI/kimi-cli/pull/2245) | Improve provider error UX for 429s | 🔴 OPEN | Centralizes error formatting; distinguishes quota exhaustion vs. transient rate limits; suppresses traceback spam | **UX infrastructure**: Addresses #2123/#1994 symptom class (opaque limits) |
| [#2391](https://github.com/MoonshotAI/kimi-cli/pull/2391) | Release: bump to 1.46.0 | 🟢 CLOSED | Version sync across CLI, wrapper, and lockfile | Maintenance; merged May 28-29 |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Quota transparency & metering accuracy** | #1994, #2123, #2245 | Users demand concrete token/request counts, not percentage bars. "Code Plan" pricing model lacks trust. |
| **Resilient context management** | #2396, #2395, #778 | Compaction and message serialization paths need hardening against API edge cases (empty content, malformed history). |
| **Agent skill auto-discovery** | #2399 | Expectation gap: users assume skills trigger automatically; manual invocation is undiscoverable. |
| **Cross-platform shell integration** | #778, #2397 | PowerShell + Linux shell command execution gaps suggest test matrix holes. |

---

## 6. Developer Pain Points

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. QUOTA OPAQUENESS  ← Highest emotional/community intensity     │
│    • "2 hours = 2 tasks" vs. "300-1200 requests"                 │
│    • Percentage UI → no actionable debugging                     │
│    • Refund disputes → trust erosion                             │
├─────────────────────────────────────────────────────────────────┤
│ 2. CONTEXT COMPACTION FRAGILITY                                  │
│    • #2396/#2395: Empty TextParts crash export                   │
│    • #1663 recurrence: fixes incomplete across code paths        │
│    • API 400 errors lack client-side pre-validation              │
├─────────────────────────────────────────────────────────────────┤
│ 3. RATE LIMIT UX                                                 │
│    • #2245 in progress: 429 handling inconsistent across surfaces│
│    • Users cannot distinguish "stop now" vs. "retry soon"        │
├─────────────────────────────────────────────────────────────────┤
│ 4. PROJECT TRANSITION UNCERTAINTY                                │
│    • v1.46.0 announces "Kimi Code successor"                     │
│    • Migration path, feature parity, timeline: all unspecified   │
│    • Community contributions (PRs) continue → maintenance mode?  │
└─────────────────────────────────────────────────────────────────┘
```

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity for 2026-05-29/30. For corrections or additions, open an issue against this digest source.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-30

## Today's Highlights
A security researcher dropped six compliance-related issues in 24 hours exposing supply chain, ReDoS, and error-handling vulnerabilities, while the team continues wrestling with memory pressure and MCP server duplication causing cascading crashes. On the build side, contributors are pushing cache stability fixes and new provider integrations (LiteLLM, Perplexity) as the project matures its plugin ecosystem.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard is not working | Basic UX broken for 6+ months; affects every platform | 🔥 101 comments, 89 👍 — highest engagement in dataset; users still reporting on v1.0.62 |
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | Central tracker for memory leaks; maintainers explicitly begging for heap snapshots, not LLM speculation | 82 comments, 60 👍; rare "PLEASE DO NOT RUN YOUR LLM" maintainer note signals frustration |
| [#27530](https://github.com/anomalyco/opencode/issues/27530) | 4 of 5 requests failed: config.providers server error | Startup failure cascade blocking basic usage | 21 comments, 10 👍; pattern matches multiple similar reports (#29668, #29932) |
| [#27106](https://github.com/anomalyco/opencode/issues/27106) | Latest version terribly slow (v1.14.48) | Performance regression making tool "practically unusable" for power users | 7 comments, 3 👍; agent-builder workflow blocked |
| [#17765](https://github.com/anomalyco/opencode/issues/17765) | Windows Desktop loses session history after restart | Data integrity bug: sessions exist in DB but UI shows empty | 6 comments, 1 👍; Windows-specific, long-running |
| [#29939](https://github.com/anomalyco/opencode/issues/29939) | MCP servers spawn duplicate processes per session | Resource exhaustion: 1 project → 8+ instances, 2+ projects → crash | 2 comments; fresh but critical — root cause for #29941 cascade |
| [#29941](https://github.com/anomalyco/opencode/issues/29941) | ReadableStreamDefaultController crash under memory pressure | PTY failure → server disconnect; triggered by MCP duplication | 2 comments; linked to #29939, shows systemic resource management issues |
| [#29786](https://github.com/anomalyco/opencode/issues/29786) | Opus 4.8 bug in dev branch | Sub-agent model failure on bleeding edge | 9 comments, 3 👍; dev branch instability concern |
| [#17940](https://github.com/anomalyco/opencode/issues/17940) | Multiple local clones share project identity, breaking file tracking | Git remote URL used as sole project key; breaks monorepo/multi-worktree workflows | 4 comments, 2 👍; architectural design flaw |
| [#29923](https://github.com/anomalyco/opencode/issues/29923) | Docker supply chain: curl\|sh without hash, root containers | Security compliance flag; part of 6-issue batch from researcher Dvalin21 | 3 comments; closed but raises install integrity questions |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#29949](https://github.com/anomalyco/opencode/pull/29949) | Move env block to tail of system prompt for cache stability | Prefix caching optimization across sessions; closes long-standing cache invalidation bugs | 🟢 Open |
| [#12633](https://github.com/anomalyco/opencode/pull/12633) | Auto-accept mode for permission requests (TUI) | `shift+tab` toggle for auto-approving edit permissions; reduces friction for trusted workflows | 🟢 Open (beta contributor) |
| [#29447](https://github.com/anomalyco/opencode/pull/29447) | Task model override | Runtime subagent model selection via `provider/model` syntax; enables cost/performance tuning per task | 🟢 Open |
| [#29948](https://github.com/anomalyco/opencode/pull/29948) | Keep command palette available in questions | TUI UX fix: palette works during question prompts; expanded keymap test coverage | 🟢 Open (bot-authored) |
| [#29937](https://github.com/anomalyco/opencode/pull/29937) | LiteLLM provider integration | Adds LiteLLM proxy support; expands provider ecosystem | 🟢 Open |
| [#29938](https://github.com/anomalyco/opencode/pull/29938) | Workspace v2 | Major workspace refactor by jlongster (founder-level contributor); details sparse but signals architectural iteration | 🟢 Open |
| [#29946](https://github.com/anomalyco/opencode/pull/29946) | Bump Playwright for Node 24 browser install | CI reliability fix for Windows cold-cache hangs | 🟢 Open |
| [#29943](https://github.com/anomalyco/opencode/pull/29943) | Reorder write tool schema: filePath before content | Schema ordering fix; likely affects generated clients or validation | 🟢 Open |
| [#21352](https://github.com/anomalyco/opencode/pull/21352) | Display image attachments from tool results in chat UI | Closes #21227; enables MCP/webfetch image rendering | 🔴 Closed (automated cleanup) |
| [#24968](https://github.com/anomalyco/opencode/pull/24968) | Python SDK with auto-regen CI | Brings back Python SDK from OpenAPI spec; closes #4031 | 🔴 Closed (automated cleanup) |

---

## Feature Request Trends

1. **Platform expansion**: FreeBSD support (#28642) and broader BSD coverage resurfacing after #3476 closure
2. **IDE ecosystem depth**: Linear Agent integration (#3787), Zed ACP polish (#4240, #25836), native changes review
3. **TUI customization**: 12 xscriptor color themes (#29933), RTL language support (#25010), provider quota metrics (#24961)
4. **Provider diversity**: LiteLLM (#29937), Perplexity (#24976), Cloudflare AI Gateway fixes (#13758)
5. **Image/multimodal**: Tool result image display (#21227) — closed PR suggests demand but implementation stalled

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows as second-class** | Session loss (#17765), ACP failures (#17285, #24481), sidecar crashes (#29932), clipboard broken (#4283) | 🔴 Critical — 5+ distinct Windows-specific bugs |
| **Memory/resource management** | Memory megathread (#20695), MCP duplication (#29939), ReadableStream crashes (#29941), general slowness (#27106) | 🔴 Critical — systemic, affecting all platforms |
| **Startup reliability** | `config.providers` server errors (#27530, #29668, #29932) — same error pattern across CLI and Desktop | 🟠 High — blocks first-run experience |
| **Security/compliance debt** | 6 issues from Dvalin21 on supply chain, ReDoS, empty catch blocks, CI pipeline exposure — all closed same day | 🟠 High — rapid closure suggests acknowledgment but needs verification |
| **ACP/Zed integration fragility** | Server shutdowns (#24481, #6002), bash permission hangs (#25836), default_agent config crashes | 🟠 High — editor integration is strategic but unstable |
| **Project identity / session management** | Cloned repo collision (#17940), deleted folder resurrection (#29936), history loss (#17765) | 🟡 Medium — data model assumptions breaking real workflows |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-30

## Today's Highlights

Pi shipped **v0.78.0** with named startup sessions (`--name`/`-n`) and clickable file tool paths via OSC 8 hyperlinks. The community also landed critical fixes for OpenCode/Kimi-K2.6 regressions, terminal EPIPE crashes, and TUI rendering edge cases including tab-width overflow and ANSI stack overflows.

---

## Releases

### [v0.78.0](https://github.com/earendil-works/pi/releases/tag/v0.78.0)
- **Named startup sessions** — Set session display names at launch with `--name` / `-n` across interactive, print, JSON, and RPC modes. Improves session organization and resume workflows. [Docs: Naming Sessions](https://github.com/earendil-works/pi/blob/main/docs/sessions.md#naming-sessions)
- **Clickable file tool paths** — File paths in `read`/`write`/`edit`/`ls` tool titles are now OSC 8 hyperlinks, enabling terminal-native click-to-open.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` hangs on "Working..." with zero-usage aborted turns | **Top community pain point** — 48 comments, 22 upvotes. Core TUI reliability issue where GPT-5.5 streams die silently, forcing Escape aborts. Suspected OpenAI-side but actively investigated. | 🔥 High engagement; users collecting reproduction patterns |
| [#5089](https://github.com/earendil-works/pi/issues/5089) | `timeoutMs` not respected past certain value | Closed. Timeout ceiling bug affecting long-running local LLM operations (large file reads on underpowered CPU). Fixed, but pattern of timeout edge cases persists. | Resolved; validates local/edge deployment needs |
| [#4984](https://github.com/earendil-works/pi/issues/4984) | Interactive mode crash on transient `EPIPE` | Closed via PR #5183. Terminal pipe errors during `edit` tool calls crashed Pi entirely. Node.js stream handling fragility in TUI. | Fix merged; stability win for SSH/terminal multiplexer users |
| [#4210](https://github.com/earendil-works/pi/issues/4210) | Bedrock `converse-stream`: empty `end_turn` treated as success | Closed (big refactor). AWS Bedrock silently returns null responses instead of errors, causing agent "trail off" failures. User built local extension workaround. | Highlights provider reliability gaps; AWS SDK behavior quirks |
| [#5159](https://github.com/earendil-works/pi/issues/5159) | OpenRouter + Moonshot Kimi K2.6 fails with "tokenization failed" | Closed. 400 errors from provider on every request; direct `curl` works. Pi-specific request shaping bug. | Rapid fix turnaround; model provider compatibility is active maintenance surface |
| [#5117](https://github.com/earendil-works/pi/issues/5117) | Qwen 3.7 Max on OpenRouter broken | **Open**. `developer` role rejected (not in `['system', 'assistant', 'user', 'tool', 'function']`). OpenRouter provider role mapping regression. | 5 comments; blocking users on popular model |
| [#5129](https://github.com/earendil-works/pi/issues/5129) | `ctx.ui.custom(factory)` without `overlay:true` bricks sibling overlays | **Open**. Extension API footgun: non-overlay custom UI calls corrupt open overlay state. Extension developer experience issue. | 4 comments; needs API design attention |
| [#5098](https://github.com/earendil-works/pi/issues/5098) | Inline images and arrow keys broken inside tmux | **Open**. `detectCapabilities()` hardcodes `images: null` when `$TMUX` set. Affects Kitty/iTerm2/Ghostty/WezTerm users who properly configure `allow-passthrough`. | 3 comments; tmux is common in remote dev workflows |
| [#5185](https://github.com/earendil-works/pi/issues/5185) | TUI stack overflow on ANSI control sequences | Closed. Infinite recursion in text renderer when bash failures emit unrecognized ANSI escapes. Robustness issue for tool output parsing. | 3 comments; defense-in-depth for arbitrary command output |
| [#5200](https://github.com/earendil-works/pi/issues/5200) | IME candidate window stuck at right edge in WezTerm | Closed via PR #5198. Hardware cursor default prevented IME positioning in WSL/WezTerm. International input regression. | 2 comments; accessibility/i18n fix |

---

## Key PR Progress

| # | PR | Feature / Fix | Impact |
|---|-----|-------------|--------|
| [#5195](https://github.com/earendil-works/pi/pull/5195) | Buffer early input before prompt loop | Fixes race where TUI accepts keystrokes before `session_start` completes, clearing user input | Startup UX reliability |
| [#5189](https://github.com/earendil-works/pi/pull/5189) | OSC 8 hyperlinks file paths in tool titles | Implements clickable paths for `read`/`write`/`edit`/`ls` — ships in v0.78.0 | Terminal-native navigation |
| [#5196](https://github.com/earendil-works/pi/pull/5196) | Handle OpenCode reasoning params | Fixes #5169 and related Kimi-K2.6 regressions from v0.77.0 reasoning mode changes | Provider compatibility |
| [#5202](https://github.com/earendil-works/pi/pull/5202) | Export CLI argument parser | Enables extensions/programmatic consumers to reuse Pi's argument parsing | API extensibility |
| [#5206](https://github.com/earendil-works/pi/pull/5206) | Add SambaNova as built-in provider | New OpenAI-compatible provider with 3 tool-capable Llama-4 models, competitive pricing | Provider diversity |
| [#5198](https://github.com/earendil-works/pi/pull/5198) | Default `showHardwareCursor` to true for IME | WezTerm/WSL IME candidate window positioning fix | International input |
| [#5197](https://github.com/earendil-works/pi/pull/5197) | Guard compaction `continue()` on assistant-tailed context | Prevents crash after auto-compaction when rebuilt context ends with assistant message | Session stability |
| [#5190](https://github.com/earendil-works/pi/pull/5190) | Extensible VCS detection via `VcsProvider` | Extensions can register custom VCS (e.g. `jj`); custom providers tried before built-in git | Beyond-git workflows |
| [#5183](https://github.com/earendil-works/pi/pull/5183) | Prevent stdout `EPIPE` from crashing process | Graceful handling of broken pipes in TUI output streams | Crash resistance |
| [#5155](https://github.com/earendil-works/pi/pull/5155) | Account tabs as 3 columns in overlay compositing | Fixes terminal width overflow from tab characters corrupting TUI differential redraw | Rendering correctness |

---

## Feature Request Trends

1. **Session management ergonomics** — Named sessions (shipped), custom session IDs (#4874), resume hints on exit (#5176), and flat-vs-nested session storage (#5040) show sustained focus on making long-lived sessions discoverable and organized.

2. **Provider compatibility breadth** — Rapid-fire fixes for OpenRouter, OpenCode, Bedrock, Cerebras, SambaNova, and Mimo indicate aggressive provider expansion. Community expects "it just works" for new models.

3. **System prompt file loading** — #5131 requests `@path` syntax for `--system-prompt` files, aligning with existing positional prompt conventions. Template/prompt management is emerging as workflow need.

4. **Context window control** — #5064 explicitly requests Copilot-CLI-style context window sizing. Token management visibility is becoming competitive feature.

5. **Tool granularity** — #5109's `--exclude-tools` and custom tool error rendering (#5209) show demand for fine-grained tool control, especially for skills/extensions that need constrained agent behavior.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **TUI rendering fragility** | #5157 (tabs → overflow), #5185 (ANSI → stack overflow), #85 (line width crashes), #5200 (IME positioning) | 🔴 High — terminal diversity is hard; each edge case crashes or corrupts UI |
| **Provider API drift** | #5169/#5164 (Kimi-K2.6 reasoning), #5117 (Qwen role mapping), #5159 (Moonshot tokenization), #4210 (Bedrock null responses) | 🔴 High — model provider changes break Pi frequently; maintenance burden |
| **Local/edge deployment friction** | #5089 (timeouts), #5182 (local LLMs return `prompt_tokens: 0`), #5098 (tmux capability detection) | 🟡 Medium — llama.cpp/Ollama users are second-class for token accounting and feature detection |
| **Extension API rough edges** | #5129 (overlay state corruption), #5209 (custom tool error UI ignored), #5190 (VCS extensibility needed) | 🟡 Medium — growing extension ecosystem hitting composability limits |
| **Windows compatibility** | #5057 (slash commands in cmd.exe) | 🟡 Medium — persistent cross-platform shell escaping issues |

---

*Digest compiled from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) mirror of [earendil-works/pi](https://github.com/earendil-works/pi).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-30

---

## 1. Today's Highlights

Qwen Code shipped **v0.17.0** with CLI startup warning improvements and telemetry LogToSpan bridge fixes, while the community filed a surge of **23 new/updated issues** including critical memory leaks in `--resume` sessions and SSL certificate failures on `coder.qwen.ai`. The maintainer team is actively merging telemetry enhancements for the daemon path and hardening core tool-call adjacency validation for Anthropic-compatible providers.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.17.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0)** | `fix(cli)`: Surface startup warnings on stderr before TUI render; `fix(telemetry)`: Improve LogToSpan bridge error handling |
| **[v0.16.1-nightly.20260529](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260529.7bed56b9b)** | Same fixes as v0.17.0 on the nightly channel |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#4624](https://github.com/QwenLM/qwen-code/issues/4624)** | `qwen --resume` child process memory grows until OOM | Critical production stability issue—session records and tool results accumulate indefinitely without compression or garbage collection | 1 👍, urgent report with detailed reproduction |
| **[#4612](https://github.com/QwenLM/qwen-code/issues/4612)** | [URGENT] SSL cert invalid on `coder.qwen.ai` | Blocks all active development sessions; confirmed across multiple devices/networks | Rapidly closed after resolution, duplicate #4611 |
| **[#4609](https://github.com/QwenLM/qwen-code/issues/4609)** | `API Error: Value of "this" must be of DOMException` with local Ollama models | Breaks local model workflows; DOMException-like objects in error paths crash the context-length classifier | 4 comments, active triage |
| **[#4616](https://github.com/QwenLM/qwen-code/issues/4616)** | `qwen3.7-max` missing from model list, `/model` override fails | Premium model inaccessible despite subscription; auth-type restriction blocks manual configuration | 2 comments, Chinese Windows user |
| **[#4493](https://github.com/QwenLM/qwen-code/issues/4493)** | Rider IDE cannot log in—OAuth redirect loop | JetBrains ecosystem compatibility gap; blocks enterprise adoption | 7 comments, no resolution since May 25 |
| **[#4627](https://github.com/QwenLM/qwen-code/issues/4627)** | Auto-update fails with `EACCES` when npm global prefix requires root | Common macOS system-Node.js configuration completely breaks update mechanism | 1 comment, root-cause identified in `handleAutoUpdate.ts` |
| **[#4586](https://github.com/QwenLM/qwen-code/issues/4586)** | `Ctrl+C` in PyCharm terminal unexpectedly exits agent | UX regression—single `Ctrl+C` now quits instead of double-press; conflicts with copy muscle memory | 1 comment, workflow disruption |
| **[#4063](https://github.com/QwenLM/qwen-code/issues/4063)** | Core + CLI architecture review: 12 structural problems | Foundational technical debt audit; P0 issue flags `@google/genai` type coupling across 136 files | 2 comments, 1 👍, maintainer attention needed |
| **[#4614](https://github.com/QwenLM/qwen-code/issues/4614)** | Pricing feedback: ¥59 plan consumed in 1 hour, requests bulk tier | Cost anxiety for `qwen3.7-max` users; explicit comparison to GPT/Claude pricing models | 1 comment, sentiment trending |
| **[#3456](https://github.com/QwenLM/qwen-code/issues/3456)** | CJK IME composition text appears on extra line | Long-standing i18n bug affecting Chinese/Japanese/Korean input; breaks terminal UI fidelity | 2 comments, dormant since April, resurfaced |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#4632](https://github.com/QwenLM/qwen-code/pull/4632)** | `fix(core)`: Harden context error text collection | Defensive fix for DOMException-like objects crashing the classifier; resolves #4609 | Open |
| **[#4622](https://github.com/QwenLM/qwen-code/pull/4622)** | `fix(core)`: Enforce adjacent tool results | Prevents Anthropic API errors by validating `tool_result` adjacency in `cleanOrphanedToolCalls`; resolves #4619 | Open |
| **[#4630](https://github.com/QwenLM/qwen-code/pull/4630)** | `feat(telemetry)`: Tool spans + `session.id` for daemon/ACP path | Full OpenTelemetry coverage for `qwen serve` daemon; enables ARMS session correlation | Open (supersedes closed #4608) |
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** | `refactor(serve)`: Extract `DaemonWorkspaceService` from `AcpSessionBridge` | Major architectural cleanup—splits 4 workspace capabilities into dedicated sub-services | Open |
| **[#4620](https://github.com/QwenLM/qwen-code/pull/4620)** | `feat(cli)`: CPU profiling support for Chrome DevTools | `.cpuprofile` generation via `node:inspector`; env var, SIGUSR1, and `/doctor cpu` triggers | Open |
| **[#4613](https://github.com/QwenLM/qwen-code/pull/4613)** | `feat(daemon)`: Sync model & approval-mode across shared-session clients | Fixes broadcast duplication/drops for multi-client daemon sessions | Open |
| **[#4587](https://github.com/QwenLM/qwen-code/pull/4587)** | `fix(core)`: Remove proactive subagent system-reminder injection | [Needs discussion] Reduces aggressive agent spawning; behavioral change with trade-offs | Open |
| **[#4629](https://github.com/QwenLM/qwen-code/pull/4629)** | `feat(cli)`: Standalone auto-update support | SHA256-verified OSS/GitHub archive replacement for non-npm installations | Open |
| **[#4598](https://github.com/QwenLM/qwen-code/pull/4598)** | `feat(tui)`: Collapsible thinking blocks with duration timer | Replaces transient preview with streaming, collapsible reasoning UI | Open |
| **[#4431](https://github.com/QwenLM/qwen-code/pull/4431)** | `fix(core)`: Preserve `uid/gid` in `atomicWriteFile` | POSIX `rename` inode ownership fix for shared-write environments | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Observability & Diagnostics** | #4554 (daemon OTel), #4617/#4620 (CPU profiling), #4183 (heap snapshots) | High—3+ PRs in active review |
| **Memory Management & Session Lifecycle** | #4624 (OOM), #4592 (compaction refactor), #4085 (history collapse) | Critical—production stability focus |
| **Security & Permission Model Hardening** | #4615 (project-scoped `.mcp.json`), #4372 (PermissionDenied hooks), #4614 (credential security) | Growing—enterprise readiness |
| **Multi-Client State Consistency** | #4613 (daemon sync), #4563 (workspace service extraction) | Architectural priority |
| **Pricing Model Flexibility** | #4614 (bulk tier requests) | User sentiment, not yet roadmapped |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Memory leaks in long-running sessions** | Recurring reports (#4624, #4183, #4592) | 🔴 Critical | Active PRs: #4620 (profiling), #4592 (compaction redesign) |
| **Authentication & model access friction** | Rider (#4493), OAuth loops, `qwen3.7-max` gating (#4616) | 🟡 High | Needs auth-system overhaul |
| **Local model compatibility** | Ollama/DOMException (#4609), API key configs (#4609) | 🟡 High | Fix in review: #4632 |
| **macOS permission & installation issues** | EACCES on auto-update (#4627), global npm prefix | 🟡 High | Fix in review: #4629 |
| **CJK/IME input quality** | #3456 (composition positioning) | 🟢 Medium | Long-standing, low activity |
| **Telemetry gaps in daemon mode** | #4554, #4630 | 🟡 High | Near resolution—2 PRs merged/merging |

---

*Digest compiled from [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) activity on 2026-05-29.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-30

## Today's Highlights

The community is actively expanding provider flexibility and fixing runtime stability issues. A major theme is **custom API provider support** — with both issues and PRs addressing OpenAI-compatible endpoints, local LLM integration, and third-party services. Meanwhile, **tokio runtime panics** and **mode-aware tool execution** are getting urgent engineering attention as users hit hard crashes and inconsistent agent behavior.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|--------------|
| [#2247](https://github.com/Hmbown/CodeWhale/issues/2247) | **Support custom DeepSeek-compatible API providers** | The most-upvoted discussion on extensibility. Users want to plug in local deployments (Ollama, vLLM) and third-party APIs without forking. Currently hardcoded to official DeepSeek only. |
| [#2353](https://github.com/Hmbown/CodeWhale/issues/2353) | **Memory feature enabled in config.toml has no effect** | Core functionality broken for persistent context. Users follow documented steps but get `user memory is disabled` — suggests config parsing or env precedence bug. |
| [#2328](https://github.com/Hmbown/CodeWhale/issues/2328) | **exec_shell availability inconsistent across YOLO/Agent modes** | Violates principle of least surprise. Tool works in YOLO, fails in Agent with cryptic error; documentation doesn't flag this restriction. |
| [#2361](https://github.com/Hmbown/CodeWhale/issues/2361) | **Local LLM outputs raw JSON instead of executing tools** | Critical for local-first users. Indicates poor tool-calling prompt engineering or JSON mode interference with non-DeepSeek models. |
| [#2346](https://github.com/Hmbown/CodeWhale/issues/2346) | **Mode switch (Tab) not perceived by AI agent** | Agent wastes tokens on workaround attempts after Agent→Plan switch, or re-plans excessively after Plan→Agent. State machine gap. |
| [#2359](https://github.com/Hmbown/CodeWhale/issues/2359) | **Make COMPLETIONS_WALK_DEPTH configurable** | Hardcoded depth of 6 silently hides deep files from `@` picker. Power users with nested monorepos hit this ceiling regularly. |
| [#2352](https://github.com/Hmbown/CodeWhale/issues/2352) | **`serve --mcp` panics on runtime drop in blocking context** | Hard crash on startup. Blocks MCP server adoption; root cause is nested tokio runtime misuse during stdio shutdown. |
| [#2362](https://github.com/Hmbown/CodeWhale/issues/2362) | **Sub-agents via `agent_open` lack MCP tool access** | Breaks composability. Parent agent has Brave/Tavily MCP tools; sub-agents lose them entirely — limits hierarchical task decomposition. |
| [#2310](https://github.com/Hmbown/CodeWhale/issues/2310) | **Cannot escape leading `/` to start message with slash** | No way to write "/foo is a path" without triggering command parser. Basic UX gap with no documented workaround. |
| [#2365](https://github.com/Hmbown/CodeWhale/issues/2365) | **Stream timeout too aggressive for slow local hardware** | 300s default kills DS4 Pro on Mac Studio. Users need `/config` exposure, not env var hacking. |

---

## Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| [#2366](https://github.com/Hmbown/CodeWhale/pull/2366) | **Fix provider help text: "codewhale" → "deepseek"** | Corrects misleading `/provider` output. App name was presented as provider ID; fixes [#2363](https://github.com/Hmbown/CodeWhale/issues/2363). |
| [#2357](https://github.com/Hmbown/CodeWhale/pull/2357) | **Fix nested runtime panic on MCP stdio shutdown** | Addresses [#2352](https://github.com/Hmbown/CodeWhale/issues/2352) by avoiding blocking context during tokio runtime drop. Critical stability fix for `serve --mcp`. |
| [#2356](https://github.com/Hmbown/CodeWhale/pull/2356) | **Allow embedders to override constitutional prompts via `OnceLock`** | Enables white-labeling without forking. Embedding apps can swap base prompts, locale preambles at runtime. |
| [#2355](https://github.com/Hmbown/CodeWhale/pull/2355) | **Trust fake-ip ranges in SSRF guard** | Fixes false-positive blocks under TUN/fake-ip proxies (common in China with Clash/V2Ray). |
| [#2354](https://github.com/Hmbown/CodeWhale/pull/2354) | **Add stop-on-failure guidance to sub-agent intro** | Reduces infinite retry loops in less-capable models. Bounded-effort instructions for `GENERAL_AGENT_INTRO`. |
| [#2336](https://github.com/Hmbown/CodeWhale/pull/2336) | **Add `/cache stats` with prefix hash/drift diagnostics** | Surfaces prefix-cache hit rates and fingerprint drift. Helps debug context window efficiency and cache invalidation. |
| [#2338](https://github.com/Hmbown/CodeWhale/pull/2338) | **Whale-size route taxonomy for model picker** | Maps `(model, reasoning_effort)` to friendly species labels (Blue Whale → Minnow). Closes [#2026](https://github.com/Hmbown/CodeWhale/issues/2026). |
| [#2347](https://github.com/Hmbown/CodeWhale/pull/2347) | **Show git branch in default footer** | Addresses [#2341](https://github.com/Hmbown/CodeWhale/issues/2341). Uses cached workspace context to avoid sync git calls per frame. |
| [#2344](https://github.com/Hmbown/CodeWhale/pull/2344) | **Raise tool search default results 5→20** | Fixes [#2339](https://github.com/Hmbown/CodeWhale/issues/2339). MCP tools from multiple servers were buried; adds `max_results` param capped at 100. |
| [#2343](https://github.com/Hmbown/CodeWhale/pull/2343) | **Integrate Atlas Cloud provider** | New commercial provider with tested native endpoints. Expands enterprise options beyond DeepSeek/NVIDIA/Ollama. |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-provider / local LLM flexibility** | [#2247](https://github.com/Hmbown/CodeWhale/issues/2247), [#2337](https://github.com/Hmbown/CodeWhale/issues/2337), [#2335](https://github.com/Hmbown/CodeWhale/issues/2335), [#2361](https://github.com/Hmbown/CodeWhale/issues/2361), PRs [#2288](https://github.com/Hmbown/CodeWhale/pull/2288), [#2343](https://github.com/Hmbown/CodeWhale/pull/2343) | **Very high** — dominant theme across both issues and PRs |
| **Configurable hardcoded limits** | [#2359](https://github.com/Hmbown/CodeWhale/issues/2359) (walk depth), [#2360](https://github.com/Hmbown/CodeWhale/issues/2360) (mention menu), [#2365](https://github.com/Hmbown/CodeWhale/issues/2365) (timeout) | **High** — users hitting ceilings in diverse environments |
| **Git integration in UI** | [#2341](https://github.com/Hmbown/CodeWhale/issues/2341), [#2342](https://github.com/Hmbown/CodeWhale/issues/2342), PR [#2347](https://github.com/Hmbown/CodeWhale/pull/2347) | **Medium** — branch display merged, file click-to-preview requested |
| **Thinking output UX** | [#2348](https://github.com/Hmbown/CodeWhale/issues/2348) | **Emerging** — foldable reasoning blocks requested |
| **Web tool customization** | [#2349](https://github.com/Hmbown/CodeWhale/issues/2349) | **Niche but specific** — search engine + proxy selection |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Root Cause |
|------------|-----------|----------|------------|
| **Local/non-DeepSeek model integration friction** | 🔴 Very high | 🔴 Critical | Hardcoded provider assumptions, poor tool-call prompting for non-DeepSeek JSON schemas |
| **Silent/hardcoded limits breaking workflows** | 🔴 Very high | 🟡 Moderate | Magic numbers (`COMPLETIONS_WALK_DEPTH=6`, `MENTION_MENU_LIMIT=6`, 300s timeout) not exposed in settings |
| **Tokio runtime / async panics in MCP path** | 🟡 High | 🔴 Critical | Nested runtime creation, blocking context misuse in stdio lifecycle |
| **Mode transitions not propagating to agent state** | 🟡 High | 🟡 Moderate | Agent prompt context doesn't re-evaluate mode on Tab switch; no explicit mode-change signal |
| **No escape hatch for `/` prefix in composer** | 🟡 High | 🟢 Low | Parser treats all leading `/` as commands; trivial fix, high UX impact |
| **Sub-agent sandboxing too aggressive (no MCP inheritance)** | 🟢 Medium | 🟡 Moderate | `agent_open` spawns clean context without parent tool catalog |
| **SSRF guards incompatible with proxy setups** | 🟢 Medium | 🟡 Moderate | DNS validation rejects fake-ip ranges used by transparent proxies |

---

*Digest compiled from [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) activity 2026-05-29.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*