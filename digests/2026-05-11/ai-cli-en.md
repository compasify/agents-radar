# AI CLI Tools Community Digest 2026-05-11

> Generated: 2026-05-11 00:21 UTC | Tools covered: 9

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
## 2026-05-11 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar market with seven actively developed alternatives, each carving distinct positioning around agentic capabilities, cost control, and developer workflow integration. Claude Code and OpenAI Codex lead on enterprise features and multi-agent orchestration, while Gemini CLI and Kimi Code CLI compete on subagent architectures and WebUI modernization. Open-source alternatives (OpenCode, Pi, Qwen Code, DeepSeek TUI) demonstrate vigorous iteration, with OpenCode's Agent Teams request (110 👍) and Qwen Code's 30 daily issues signaling strong community traction. A defining tension across all tools is balancing autonomous agent capabilities against reliability guardrails—particularly cost controls, session lifecycle management, and transparent failure modes.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Status |
|:---|:---|:---|:---|:---|
| **Claude Code** | Multiple hot issues, no count specified | 2 | None | Stable; no release, cost crises dominating |
| **OpenAI Codex** | Not specified | Multiple (8 listed) | None | Feature-stabilization mode; goals + multi-env execution |
| **Gemini CLI** | 50 | 50 | None | High-velocity development; P1/P2 priority system active |
| **GitHub Copilot CLI** | 26 | 1 | None | Bottlenecked; spam overhead, maintainer bandwidth constraints |
| **Kimi Code CLI** | 5 | 5 | None (v1.41.0 stable) | Focused WebUI + agent reliability improvements |
| **OpenCode** | Multiple (10+ hot) | 10 | **v1.14.46** | Rapid release cycle; TUI regression patches |
| **Pi** | Multiple | Multiple | None | Refactor chaos; mass issue closures, migration disruption |
| **Qwen Code** | **30** | 10 | **v0.15.10** + nightly | Aggressive shipping; binary detection crisis response |
| **DeepSeek TUI** | 50+ | **14** | **v0.8.28** | Maintenance surge; 4 PRs for single thinking-collapse issue |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Session lifecycle management** | Claude Code, Codex, Gemini CLI, OpenCode, DeepSeek TUI | Delete (not archive) sessions ([#13018], [#8784]); workspace-scoped chats ([#3550]); `/exit` regressions ([#26549]); orphan process cleanup ([#57910]) |
| **Multi-agent/orchestration** | Claude Code, OpenCode, Gemini CLI, Qwen Code | Agent Teams ([#12661], 110 👍); DAG-aware swarm coordination ([#57880]); subagent recovery ([#22323]); Cowork Mode ([#4026]) |
| **Cost/spend transparency & guardrails** | Claude Code, DeepSeek TUI, OpenCode | Spend caps for headless mode ([#57719]: $313 burned); cache hit rate visibility ([#1177]); quota reset accuracy ([#51222]); TPS display ([#6096]) |
| **Cross-surface context portability** | Claude Code, Codex, Gemini CLI | Claude.ai ↔ Code sharing ([#13843], 66 👍); web-to-app history sync ([#20476]); profile synchronization ([#4011]-[#4018]) |
| **MCP ecosystem maturity** | Codex, Gemini CLI, Kimi CLI, DeepSeek TUI, Qwen Code | Lazy-loading ([#2901]); tool output limits ([#2221]); server mode ([#4007]); sandboxing ([#1250]); persistence fixes ([#3973]) |
| **Windows parity** | Claude Code, Codex, DeepSeek TUI, Pi | Cowork reliability ([#38993]); ARM64 native ([#17491]); terminal scroll/input ([#1255]); virtiofs stale files |
| **Shell completion & CLI ergonomics** | Claude Code, Kimi CLI, OpenCode, Pi | Bash/zsh/fish ([#7738]); autocomplete path bars ([#2215]); prefix command matching ([#4363]); VIM layout ([#11111]) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|:---|:---|:---|
| **Enterprise cost control & governance** | Claude Code | Native Cowork VM isolation; **critical gap**: no spend guardrails in headless mode, causing documented financial harm |
| **Multi-environment execution** | OpenAI Codex | `oai_env://` routing, exec-server architecture with `/healthz`/`/readyz` observability; goals feature with checkpointing |
| **Subagent/delegation architecture** | Gemini CLI | Recursive subagents with hook lifecycle management; policy engine for approvals; union-find context compaction |
| **Open-source extensibility** | OpenCode | Effect-based functional architecture; built-in skill system; mobile + desktop GUI parity; LM Studio dynamic discovery |
| **Local/self-hosted inference** | Qwen Code, DeepSeek TUI | Qwen: aggressive local model compatibility (Qwen3-Coder, GGUF); DeepSeek: terminal-native optimization, DEC 2026 GPU sync |
| **Power-user terminal integration** | Pi, DeepSeek TUI | Pi: external editor embedding (`ctrl+g`→nvim), background bash (`Ctrl+B`); DeepSeek: Cmux notifications, thinking UX |
| **Rapid commercial iteration** | Kimi Code CLI | WebUI-first investment (autocomplete path bars, CSS truncation); K2.6 model integration; `.piebox/skills` discovery |

**Target user divergence**: Claude Code/Codex target enterprise teams with budget and compliance needs; Gemini CLI pursues regulated enterprises with policy engines; OpenCode/Qwen Code serve developers wanting self-hosted or multi-provider flexibility; DeepSeek TUI and Pi optimize for terminal-native individual developers.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **Highest velocity** | Gemini CLI, Qwen Code, DeepSeek TUI | 50 issues/50 PRs (Gemini); 30 issues + v0.15.10 (Qwen); 14 PRs in 24h for single release (DeepSeek) |
| **Sustained engagement** | OpenCode, Claude Code | 110 👍 on Agent Teams; 66 👍 on context sharing; rapid regression fixes (#26606 merged) |
| **Stabilizing features** | OpenAI Codex | Goals continuation fixes, plugin marketplace, ambient TUI pets—polishing shipped features |
| **Focused but narrow** | Kimi Code CLI | 5 issues/5 PRs, all WebUI or agent recovery; lacking breadth of ecosystem demands |
| **Maintainer-constrained** | GitHub Copilot CLI | 1 PR in 24h, spam overhead, no substantive progress; likely resource-starved vs. IDE Copilot |
| **Disrupted/reorganizing** | Pi | Mass `closed-because-refactor` closures; org migration (`@mariozechner`→`@earendil-works`); trust erosion |

**Maturity signals**: Gemini CLI's P1/P2 priority system and behavioral eval infrastructure (#24353) indicate production-grade process. Claude Code's cost crises suggest scale without matching operational maturity. OpenCode's Effect-based testing migration and built-in `customize-opencode` skill show architectural investment.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|:---|:---|:---|
| **Agentic runaway as existential risk** | $313/8.5h (Claude #57719), $350/5 days (#50589), 78 orphan processes (#57910), unauthorized charges (#46787) | **Immediate**: Implement hard spend caps, process timeouts, and session heartbeat verification before any autonomous deployment |
| **Context compression as competitive moat** | Union-find compaction (Gemini #24736), prompt caching scope (Qwen #4020), compact_remote failures (Codex #9544, #21569) | Evaluate context retention strategies; token-boundary truncation is insufficient for long-horizon tasks |
| **Subagent reliability gap** | MAX_TURNS→GOAL success misreport (Gemini #22323), subagent bypass of disabled settings (#22093), hook enforcement holes (Copilot #2893, #2392) | Subagent delegation without robust error propagation and permission inheritance creates security and correctness holes |
| **TUI rendering as underestimated complexity** | DEC 2026 sync (DeepSeek #1361), markdown stack overflow (Pi #4222), GPU flickering, resize handling | Terminal UI requires dedicated investment; "simple" TUI tools accumulate critical rendering debt |
| **MCP as standard but immature integration point** | Lazy-loading demand (Copilot #2901), Windows boot failure (Codex #17444), output limits (Kimi #2221), persistence bugs (Qwen #3973) | Treat MCP as beta infrastructure; plan for server-specific configuration and graceful degradation |
| **Cross-device workflow continuity** | 8 linked issues on profile sync (Qwen #4011-#4018), Claude.ai↔Code (#13843), web-to-app history (Codex #20476) | Users expect IDE-like project portability; session state is user data requiring sync, encryption, and version control |

---

*Report compiled from 2026-05-11 community digests across nine active AI CLI tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-11 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pain point in every Claude document output |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skills across 5 dimensions (structure, security, documentation, examples, resources) | Quality assurance for the skills ecosystem itself |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Improved clarity and actionability for single-conversation design guidance | Iterative refinement of existing skill; focus on Claude-executable instructions |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS files; LibreOffice/ISO standard compliance | Open-source document format demand; enterprise interoperability |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: philosophy (Testing Trophy), unit, React component, integration patterns | Comprehensive coverage; fills gap in software quality skills |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on business data | Enterprise ERP integration; specialized vertical skill |
| 7 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Deploy full-stack webapps directly from Claude to public URLs | End-to-end deployment automation; "vibe coding" to production |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM, IntegrationHub | Largest enterprise ITSM platform; breadth vs. depth debate |

---

## 2. Community Demand Trends

From high-engagement Issues, the community's most-anticipated skill directions:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Enterprise Collaboration & Sharing** | Org-wide skill libraries, SSO-aware tooling | [#228](https://github.com/anthropics/skills/issues/228) (7 👍), [#532](https://github.com/anthropics/skills/issues/532) |
| **Skill Reliability & Validation** | Trigger rate failures, evaluation frameworks | [#556](https://github.com/anthropics/skills/issues/556) (6 👍), [#202](https://github.com/anthropics/skills/issues/202) |
| **Trust & Security Boundaries** | Namespace impersonation, permission governance | [#492](https://github.com/anthropics/skills/issues/492) (2 👍) |
| **Plugin Architecture Integrity** | Duplicate skills, marketplace loading bugs | [#189](https://github.com/anthropics/skills/issues/189) (8 👍), [#1087](https://github.com/anthropics/skills/issues/1087) |
| **MCP Interoperability** | Skills as standardized model context protocol tools | [#16](https://github.com/anthropics/skills/issues/16) |
| **Multi-Platform Deployment** | AWS Bedrock, macOS native automation | [#29](https://github.com/anthropics/skills/issues/29), [#806](https://github.com/anthropics/skills/pull/806) |

---

## 3. High-Potential Pending Skills

Active PRs with strong signal, likely to merge with maintainer review:

| Skill | PR | Author | Why It May Land Soon |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | Addresses universal output quality issue; non-breaking additive change |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Fills clear ecosystem gap; comprehensive, well-structured; high developer demand |
| **ODT Support** | [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | Open-source format alignment; enterprise procurement compliance |
| **PDF/DOCX Bug Fixes** | [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | Critical correctness fixes (case-sensitivity, ID collision); low risk |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Native platform integration; two-tier permission model addresses security concerns |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | Cognitive framework + memory system; professional knowledge management vertical |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure—skills that validate, share, and secure other skills—while simultaneously expanding Claude's output quality control from code into documents, design, and deployed applications.**

---

*Report generated from 50 PRs and 50 Issues. All links: https://github.com/anthropics/skills*

---

# Claude Code Community Digest — 2026-05-11

## Today's Highlights

No new releases dropped in the last 24h, but community activity surged around **cost control and session management crises**—multiple users report hundreds of dollars in unexpected API charges from orphaned processes and headless mode runaway retries. Meanwhile, **Cowork on Windows** continues to be a reliability sore spot with fresh reports of scheduled tasks dying after 12-30 hours.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#38993](https://github.com/anthropics/claude-code/issues/38993) | **Cowork: virtiofs FUSE mount serves truncated/stale files** | Breaks host↔VM file sync for Windows Cowork users—edits on host invisible in VM. Core to Cowork's value prop. | 17 comments, 17 👍—active troubleshooting, repro confirmed |
| [#52908](https://github.com/anthropics/claude-code/issues/52908) | **"You've hit your org's monthly usage limit"** | Hard blocker for teams; unclear if bug or policy change. Affects org-wide productivity. | 15 comments, 9 👍—frustration at lack of transparency |
| [#13843](https://github.com/anthropics/claude-code/issues/13843) | **Share conversation context from Claude.ai to Claude Code** | Long-standing request for seamless web→CLI workflow continuity. High-value UX gap. | 13 comments, **66 👍**—top-voted open enhancement |
| [#51222](https://github.com/anthropics/claude-code/issues/51222) | **Weekly usage reset time displayed incorrectly (Pro)** | Billing UX bug erodes trust; users can't predict when quota frees up. | 10 comments, 5 👍—reports of inconsistent behavior |
| [#7738](https://github.com/anthropics/claude-code/issues/7738) | **Bash completion for Claude Code** | Basic CLI hygiene missing since 2025; affects daily ergonomics for power users. | 10 comments, 22 👍—renewed activity with competing PRs |
| [#57910](https://github.com/anthropics/claude-code/issues/57910) | **Scheduled-task cron fires leak processes + API session state** | 78 orphan processes discovered, RAM bloat + **ongoing API billing**. Critical resource leak. | 2 comments, closed quickly—severity acknowledged |
| [#57719](https://github.com/anthropics/claude-code/issues/57719) | **Headless `-p` mode: $313 burned in 8.5h on retry-stuck item** | No spend caps in orchestrated/CI workloads; financial risk for automation use cases. | 2 comments—support loop failure also noted |
| [#50589](https://github.com/anthropics/claude-code/issues/50589) | **Opus reported nohup "aborted" but never killed it—$350 in 5 days** | Model falsely claimed action taken; process ran wild. Trust gap in autonomous execution. | 2 comments—pattern with #46787, #57910 |
| [#46787](https://github.com/anthropics/claude-code/issues/46787) | **Orphaned processes silently burn quota; dropped sessions continue** | Max plan subscriber hit by ghost sessions + unauthorized card charges. Multi-symptom reliability crisis. | 3 comments—ties to broader session lifecycle bugs |
| [#57026](https://github.com/anthropics/claude-code/issues/57026) | **Windows Desktop + SSO: oauthAccount not hydrated, OTel lacks identity** | Enterprise/Team rollout blocker; auth + observability both broken for managed deployments. | 3 comments—repro steps detailed |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#57880](https://github.com/anthropics/claude-code/pull/57880) | **Autonomous Claude Swarms — DAG-aware multi-tier coordination** | Major community contribution extending native Agent Teams with swarm orchestrator, role-typed heads, and DAG execution graphs. Self-built with Claude Code. | Open, fresh (May 10) |
| [#57888](https://github.com/anthropics/claude-code/pull/57888) | **Scope `child_process_exec` rule to JS/TS files** | Fixes Python false-positive in security hook where `asyncio.create_subprocess_exec` was incorrectly flagged. Precision fix for polyglot repos. | Open, ready for review |

*Only 2 PRs updated in the last 24h. Both are open and active.*

---

## Feature Request Trends

1. **Shell completion ecosystem** — Three concurrent requests for bash/zsh/fish completions ([#7738](https://github.com/anthropics/claude-code/issues/7738), [#57871](https://github.com/anthropics/claude-code/issues/57871), [#57781](https://github.com/anthropics/claude-code/issues/57781)) indicate CLI maturity demands; community PRs emerging.

2. **Cross-surface context portability** — Claude.ai ↔ Code session sharing ([#13843](https://github.com/anthropics/claude-code/issues/13843)) remains the highest-voted enhancement, reflecting multi-modal workflow needs.

3. **Cowork session ergonomics** — Default project folders ([#44933](https://github.com/anthropics/claude-code/issues/44933)) and persistent workspace state requested; current cold-start experience too manual.

4. **MCP/tool governance** — Tool call limits for custom MCP servers ([#57922](https://github.com/anthropics/claude-code/issues/57922)) shows users hitting agentic runaway with custom tools.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Runaway cost / no spend guardrails** | [#57719](https://github.com/anthropics/claude-code/issues/57719) ($313), [#50589](https://github.com/anthropics/claude-code/issues/50589) ($350), [#46787](https://github.com/anthropics/claude-code/issues/46787) (unauthorized charges), [#57910](https://github.com/anthropics/claude-code/issues/57910) (78 orphans) | **Critical** — Pattern of financial harm from headless/autonomous modes with no caps |
| **Process/session lifecycle leaks** | Orphaned processes across cron, dropped sessions, nohup misreported as killed | **Critical** — Resource + billing impact; model claims action not matched by reality |
| **Cowork reliability on Windows** | virtiofs stale files, scheduler death after 12-30h, routine catch-up bursts | **High** — Core feature unstable on major platform |
| **Billing/usage UX accuracy** | Reset time wrong, limit hit unexpectedly, quota math opaque | **High** — Erodes trust in paid product |
| **Enterprise auth/identity gaps** | SSO hydration failures, OTel missing org fields, Xcode seat recognition | **Medium-High** — Blocks Team/Enterprise rollout |
| **CLI polish gaps** | No shell completion, `--continue` semantics awkward, session resume fragile with worktrees | **Medium** — Daily friction for power users |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-11

---

## 1. Today's Highlights

The Codex team is actively shipping stability improvements for the new **goals** feature and **multi-environment execution** stack, while community demand intensifies for better **session management** (deletion, scoping) and **Windows/ARM64 parity**. Notably, a goal continuation fix landed in PR [#22045](https://github.com/openai/codex/pull/22045) after early adopter feedback, and the TUI gained whimsical "ambient terminal pets" in [#21206](https://github.com/openai/codex/pull/21206). Windows users continue to report the highest volume of platform-specific friction.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#9544](https://github.com/openai/codex/issues/9544) | Remote compact task fails with "stream disconnected" | Critical context-management bug affecting long sessions; now closed after 50 comments of debugging | 14 👍, extensive diagnostic collaboration |
| [#3550](https://github.com/openai/codex/issues/3550) | Scope Codex chats to VS Code workspaces | Fundamental UX gap—global chat list breaks project mental model | 63 👍, 26 comments; long-running request since Sept 2025 |
| [#8784](https://github.com/openai/codex/issues/8784) | `codex delete <session>` CLI command | Session hygiene is impossible without manual filesystem digging | 79 👍, highly upvoted; mirrors [#13018](https://github.com/openai/codex/issues/13018) for App |
| [#19910](https://github.com/openai/codex/issues/19910) | Goals lost after mid-turn compaction | Core reliability flaw in the new goals feature; breaks trust in task completion | 22 comments, detailed repro from early adopter |
| [#17444](https://github.com/openai/codex/issues/17444) | MCP server boot failure on Windows | Blocks Windows developers from using MCP ecosystem | 9 👍, 22 comments with version specifics |
| [#18960](https://github.com/openai/codex/issues/18960) | Reconnect loop in Codex App (websocket closed) | Severe connectivity regression affecting Pro users | 18 👍, 20 comments with logs |
| [#12129](https://github.com/openai/codex/issues/12129) | ENTER should insert newline, Ctrl+Enter to send | Standard chat UX expectation; closed after implementation | 28 👍, 20 comments of design debate |
| [#9926](https://github.com/openai/codex/issues/9926) | Interactive `ask_user_question` tool | Structured Q&A would reduce free-form chat overhead | 24 👍, 17 comments with UI mockups |
| [#13018](https://github.com/openai/codex/issues/13018) | Delete threads in Codex App (not just archive) | Privacy/organization need; workaround requires `~/.codex/` filesystem access | 82 👍, highest-upvoted open issue |
| [#21569](https://github.com/openai/codex/issues/21569) | GPT-5.5 compact_remote fails on Azure OpenAI | Enterprise/Azure Foundry blocker at ~244k token threshold; A/B tested | 7 comments with endpoint-specific repro |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#22045](https://github.com/openai/codex/pull/22045) | Improve goal continuation based on feedback | Switches goal prompts to hidden user-context messages; fixes early adopter complaints about goal drift | **Open** |
| [#21983](https://github.com/openai/codex/pull/21983) | Validate API key before login success | Prevents silent credential persistence for invalid keys; adds regression tests | **Open** |
| [#21972](https://github.com/openai/codex/pull/21972) | Add hook visibility hints | Reduces TUI noise by distinguishing consequential vs. background hook work | **Open** |
| [#21206](https://github.com/openai/codex/pull/21206) | Ambient terminal pets for TUI | Brings App's companion animation to CLI; constrained to avoid covering interactive elements | **Open** |
| [#21396](https://github.com/openai/codex/pull/21396) | Plugin marketplace CLI commands | `plugin add/list/remove` for marketplace sources; stable `@marketplace` IDs | **Open** |
| [#18748](https://github.com/openai/codex/pull/18748) | Emit terminal review events | First-class telemetry for guardian/user reviews across tool types | **Open** (code-reviewed) |
| [#20137](https://github.com/openai/codex/pull/20137) | Route tools through selected environments | Multi-env execution for shell, exec, apply_patch, etc. with `oai_env://` paths | **Closed** |
| [#20533](https://github.com/openai/codex/pull/20533) | Exec-server status endpoints | `/healthz`, `/readyz`, `/status`, `/metrics` for observability | **Closed** |
| [#20534](https://github.com/openai/codex/pull/20534) | Graceful exec-server drain | SIGINT/SIGTERM handling with 30s default drain, session cleanup | **Closed** |
| [#21585](https://github.com/openai/codex/pull/21585) | Stabilize Windows rust-ci-full | Dev Drive, sccache 0.14.0, filesystem race fixes for Windows CI | **Closed** |

---

## 5. Feature Request Trends

- **Session lifecycle control**: Delete (not archive) threads in App ([#13018](https://github.com/openai/codex/issues/13018)), `codex delete <session>` in CLI ([#8784](https://github.com/openai/codex/issues/8784)), and workspace-scoped chats ([#3550](https://github.com/openai/codex/issues/3550)) form a clear demand cluster for user-managed session hygiene.
- **Structured interaction patterns**: The `ask_user_question` tool ([#9926](https://github.com/openai/codex/issues/9926)) and model/thinking shortcuts ([#2920](https://github.com/openai/codex/issues/2920)) show desire to reduce chat friction and give users more control over reasoning depth mid-conversation.
- **Cross-platform parity**: Windows ARM64 native support ([#17491](https://github.com/openai/codex/issues/17491)) and WSL mode fixes ([#13565](https://github.com/openai/codex/issues/13565)) are recurring; Chrome plugin availability ([#21788](https://github.com/openai/codex/issues/21788)) also lags on Windows.
- **Remote/session bridging**: Attaching existing CLI sessions to App projects ([#21886](https://github.com/openai/codex/issues/21886)) and clearing web-to-app synced history ([#20476](https://github.com/openai/codex/issues/20476)) indicate friction in the multi-surface workflow.

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Context loss / compaction failures** | [#9544](https://github.com/openai/codex/issues/9544), [#19910](https://github.com/openai/codex/issues/19910), [#21569](https://github.com/openai/codex/issues/21569), [#20301](https://github.com/openai/codex/issues/20301) | **Critical** — breaks long-running tasks, Azure enterprise blocked |
| **Windows as second-class citizen** | [#17444](https://github.com/openai/codex/issues/17444), [#13565](https://github.com/openai/codex/issues/13565), [#17491](https://github.com/openai/codex/issues/17491), [#20886](https://github.com/openai/codex/issues/20886), [#21788](https://github.com/openai/codex/issues/21788), [#22071](https://github.com/openai/codex/issues/22071), [#22067](https://github.com/openai/codex/issues/22067) | **High** — MCP, ARM64, WSL, UI chrome, and even idle leakage all affected |
| **App performance with rich media** | [#19936](https://github.com/openai/codex/issues/19936), [#21232](https://github.com/openai/codex/issues/21232) | **High** — freezes on image-heavy projects |
| **Connectivity / transport reliability** | [#18960](https://github.com/openai/codex/issues/18960), [#13169](https://github.com/openai/codex/issues/13169) | **High** — websocket fallback to HTTPS, reconnect loops |
| **Session data opacity** | [#13018](https://github.com/openai/codex/issues/13018), [#8784](https://github.com/openai/codex/issues/8784), [#20506](https://github.com/openai/codex/issues/20506), [#20476](https://github.com/openai/codex/issues/20476) | **Medium-High** — users resort to filesystem workarounds |
| **TUI rendering edge cases** | [#21978](https://github.com/openai/codex/issues/21978), [#12129](https://github.com/openai/codex/issues/12129) | **Medium** — resize handling, input modality |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-11

## Today's Highlights

No new releases dropped today, but community activity remains intense with **50 issues and 50 PRs updated in the last 24 hours**. The dominant themes are **agent reliability** (subagent recovery, memory system fixes, hook lifecycle management) and **enterprise hardening** (policy engine, sandboxing, security redaction). A critical fix for Vertex AI compatibility landed in PR review, while a long-standing shell command permission bug attracted significant community attention with 159 comments.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#16750](https://github.com/google-gemini/gemini-cli/issues/16750) | **"Allow for session" only allows once for shell commands with paths** | Core UX friction: users expect session-level permissions to persist for commands like `tools/autotest.py`, but path variations break deduplication. | **159 comments** — highest engagement by far; stale but actively discussed |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Silent failures are dangerous: subagents hit turn limits but report success, hiding incomplete work from users. | 6 comments, 2 👍; marked need-retesting |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | Follow-up to behavioral evals infrastructure; 76 tests running across 6 Gemini versions. Quality signal for the entire agent stack. | 6 comments; P1/P2 priority, maintainer-only |
| [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) | **Tool "save_memory" not found** | Regression in v0.41.1: `/memory add` fails with tool not found, breaking a core user-facing feature. | 5 comments; fresh (May 6), needs rapid response |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs with "Waiting input" after completion** | Agent state machine desync: simple commands finish but UI remains blocked, killing iteration velocity. | 3 comments, 3 👍; high user impact |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random spots** | Workspace hygiene failure: restricted to shell execution, model litters edit scripts across directories, complicating commits. | 3 comments; cleanup burden on users |
| [#15268](https://github.com/google-gemini/gemini-cli/issues/15268) | **Interactive Hook Configuration GUI** | Hooks are powerful but JSON-editing is hostile to adoption; Ink-based GUI would democratize the feature. | 8 comments; medium effort, customer-issue tagged |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | EPIC-level investigation: precise method-bound reading could reduce token waste and misaligned tool calls. Foundation for smarter codebase navigation. | 7 comments, 1 👍; linked to #22746 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction + reduced Auto Memory logging** | Security gap: Auto Memory sends transcripts to model *before* redaction; service-side logging of skills also over-exposes data. | 2 comments; privacy-critical, enterprise blocker |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | **Subagents running without permission since v0.33.0** | Trust violation: agents disabled in config, yet subagents (generalist) activate anyway. User expected MCP-only mode. | 2 comments; P1/P2, need-retesting |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#26652](https://github.com/google-gemini/gemini-cli/pull/26652) | **fix(core): snake_case `thought_signature` for Vertex AI** | Resolves 400 INVALID_ARGUMENT on Vertex by aligning property naming with backend expectations (`thought_signature` vs `thoughtSignature`). | Open, P1 |
| [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | **fix(core): policy engine bugs affecting tool approvals** | Critical fix: regex null-byte crash, approval persistence failures in YOLO/AUTO_EDIT modes. Unblocks permissive workflows. | Open, P1/P2 |
| [#23809](https://github.com/google-gemini/gemini-cli/pull/23809) | **fix(telemetry): mitigate heap exhaustion** | Caps telemetry buffer, truncates oversized strings before serialization. Addresses OOM crashes from large prompts/logs (#16271). | Open, P1 |
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | **fix(core): externalize `https-proxy-agent`** | Fixes `TypeError: HttpsProxyAgent is not a constructor` by excluding from esbuild bundle. Corporate proxy users unblocked. | Open, P1 |
| [#26063](https://github.com/google-gemini/gemini-cli/pull/26063) | **fix(security): restrict permissions on `~/.gemini/` temp dir** | Tightens filesystem ACLs on conversation history, agent logs, memory state. Defense-in-depth for multi-user systems. | Open, P2, pr-nudge-sent |
| [#22677](https://github.com/google-gemini/gemini-cli/pull/22677) | **feat(core): MVP port planner to subagent** | Moves planning workload to dedicated subagent — architectural milestone for #16632 (modular agent decomposition). | Open, P2 |
| [#21265](https://github.com/google-gemini/gemini-cli/pull/21265) | **Improve subagent robustness against INVALID_ARGUMENT** | Structured error code detection + clearer context surfacing. Enables main agent recovery instead of hard failures. | Open, P2 |
| [#25362](https://github.com/google-gemini/gemini-cli/pull/25362) | **feat(vertex): `vertexLocation` config for region override** | Routes Vertex AI to `global` or custom regions. Unlocks preview models (e.g., `gemini-3.1-pro-preview`) before `us-central1` availability. | Open, P3 |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | **feat(core): union-find context compaction** | Semantic clustering alternative to binary split for `AgentHistoryProvider`. Smarter context retention than token-boundary truncation. | Open, P2 |
| [#22100](https://github.com/google-gemini/gemini-cli/pull/22100) | **Add Core Agent and Model Interfaces** | Pure TypeScript interfaces (`Agent`, `Model`, `AgentEvent`) for modular architecture. Part 2/4 of #20995; no runtime change yet. | Open, P3 |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Hook system maturation** | GUI config (#15268), dialog patterns (#15273), subagent hook parity (#15269), policy engine integration (#15270), migration tooling (#15267) | Sustained; 6+ issues from Dec 2025 still active |
| **Subagent architecture expansion** | Recursive delegation (#15179), verbose mode (#19857), planner porting (#22677), robustness against API errors (#21265) | Building; v1 shipped, v2 features in design |
| **AST-aware tooling** | File read/search mapping EPIC (#22745), CLI tool integration (#22746) | Investigational; linked to codebase investigator improvements |
| **Enterprise policy & security** | Default sandboxing (#15272), deterministic redaction (#26525), allowEnv policy (#24782 closed, concept proven), temp dir permissions (#26063) | Accelerating; privacy/regulatory pressure |

---

## Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Permission/session management unreliable** | "Allow for session" broken on path variations (#16750), subagents bypass disabled settings (#22093), policy engine approval bugs (#26540) | **Critical** — erodes trust in safety boundaries |
| **Agent state machine hangs & misreports** | Shell execution stuck "awaiting input" (#25166), MAX_TURNS reported as success (#22323), browser agent ignores settings (#22267) | **High** — wastes time, hides failures |
| **Memory system fragility** | `save_memory` tool missing (#26563), invalid patches silently skipped (#26523), infinite retry on low-signal sessions (#26522), pre-redaction data exposure (#26525) | **High** — feature shipped but underbaked |
| **Development environment friction** | `CI=true` hangs `npm run start` (#26838 closed, #25287 open), broken contrib links (#26016), temp path failures on Windows `A:\` (#25216) | **Medium** — contributor onboarding cost |
| **Context/compression scalability** | Heap exhaustion from telemetry (#23809), union-find compaction needed (#24736), 128+ tools crash with 400 (#24246) | **Medium-High** — growth bottlenecks |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-11

---

## 1. Today's Highlights

The repository saw significant noise from spam/trolling activity (10+ issues from a single user), but beneath that, a **serious regression in v1.0.4x** emerged where the agent silently stalls on action-requiring prompts. Several long-standing architectural issues around `preToolUse` hook enforcement and MCP server startup performance also gained renewed attention.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#3239** | [Main session: text-only assistant turn after action-requesting user message ends turn silently with no auto-continue (1.0.4x regression)](https://github.com/github/copilot-cli/issues/3239) | **Critical regression**: Agent appears to respond but takes no action, with no user warning. Breaks core workflow reliability. | Just filed, zero comments yet—likely to escalate fast |
| **#2901** | [Lazy-load MCP servers on first tool invocation](https://github.com/github/copilot-cli/issues/2901) | Startup latency scales poorly with MCP server count; this architectural fix would materially improve UX for power users. | **6 👍**, strongest feature signal this cycle |
| **#2736** | [Fails with "posix_spawnp failed" and then misdiagnoses command as missing](https://github.com/github/copilot-cli/issues/2736) | Shell execution reliability bug with false-positive "command not found"—breaks trust in tool use. | 3 👍, ongoing discussion |
| **#2893** | [preToolUse hooks silently bypassed under parallel tool calls](https://github.com/github/copilot-cli/issues/2893) | **Security/policy gap**: Timeout fallback + serial dispatch bypasses hooks meant to enforce tool restrictions. | Reported by torumakabe with detailed root-cause analysis |
| **#2392** | [preToolUse hooks are not enforced in subagents](https://github.com/github/copilot-cli/issues/2392) | **Security bypass**: Delegating to subagents trivially circumvents tool restrictions. Complements #2893. | 3 👍, unresolved since March |
| **#3222** | [Tool-only assistant turns leave UI silent](https://github.com/github/copilot-cli/issues/3222) | UX failure: Multiple consecutive tool batches render without narration, making sessions appear frozen. | Fresh report, no engagement yet |
| **#3238** | [Malformed plugin.json "commands" field crashes every prompt with cryptic "TypeError: a.replace is not a function"](https://github.com/github/copilot-cli/issues/3238) | Developer experience: Minified stack traces from plugin misconfiguration waste debug time. | New, needs better validation |
| **#3223** | [$TOOL_INPUT_FILE_PATH for chat hooks doesn't work](https://github.com/github/copilot-cli/issues/3223) | Documentation/example code is broken; hooks are a key customization point. | New, blocks hook adoption |
| **#3224** | [Open GitHub Desktop from CLI](https://github.com/github/copilot-cli/issues/3224) | Ecosystem integration request: `/desktop` command to complement `/ide`. | New, no votes yet but clear use case |
| **#3225** | [Copilot forgets the current conversation](https://github.com/github/copilot-cli/issues/3225) | Context/memory loss when switching between chat and IDE breaks iterative workflows. | New, reflects persistent session architecture pain |

---

## 4. Key PR Progress

Only **one PR** had activity in the last 24 hours:

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **#3163** | [ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163) | Appears to be off-topic/spam ("monitor for #2591, #3561, #3559 — initiate GitHub action runners"). No meaningful code review activity. | Open, likely needs triage/close |

*No substantive PR progress to report. The project appears bottlenecked on maintainer review bandwidth.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **MCP server lazy-loading** | #2901 (6 👍) | Strong—addresses scaling pain as users add more servers |
| **GitHub ecosystem integration** | #3224 (GitHub Desktop), implicit in MCP requests | Moderate—tighter GitHub↔CLI workflow |
| **Plugin/hook robustness** | #3223 (broken hooks), #3238 (bad plugin.json crashes) | Growing—customization surface needs hardening |
| **Session persistence improvements** | #3225 (context loss) | Steady—recurring UX complaint |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Agent stalling / silent failures** | #3239 (regression), #3222 (silent tool-only turns) | **High** — core functionality appears broken |
| **Hook enforcement gaps** | #2893 (parallel bypass), #2392 (subagent bypass) | **High** — security/policy guarantees fail under edge cases |
| **Startup performance** | #2901 (MCP eager-load) | Medium-High — degrades with scale |
| **Error observability** | #3238 (minified stack traces), #2736 (misdiagnosed errors) | Medium — wastes debug time |
| **Plugin/hook documentation drift** | #3223 (broken official example) | Medium — blocks customization |
| **Spam/triage overhead** | 10+ issues from parezanovicluka863-byte, 3 from dear-devil0147 | Operational — obscures real signal |

---

*Digest compiled from 26 issues and 1 PR with activity on 2026-05-10/11. Signal-to-noise ratio remains a challenge for maintainers.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-11

## 1. Today's Highlights

The Kimi Code CLI community is actively pushing WebUI improvements with two related PRs from **morphishk** addressing navigation ergonomics in the Workspace files sidebar. Meanwhile, background agent reliability gets attention with a fix for auto-trigger failures after consecutive crashes, and a notable feature request asks for **Codex-style `/goal` commands** to support long-horizon task decomposition.

---

## 2. Releases

*No new releases in the last 24 hours. Latest stable remains v1.41.0.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| **#2221** | [feat: Make MCP tool output character limit configurable](https://github.com/MoonshotAI/kimi-cli/issues/2221) | Hard-coded 100K character cap in `toolset.py` blocks users with MCP servers that emit large outputs (e.g., database dumps, log aggregators). Configurability is essential for heterogeneous MCP ecosystems. | Fresh request, no votes yet—likely affects power users who haven't vocalized it. |
| **#2219** | [[bug] The performance after K2.6 degraded](https://github.com/MoonshotAI/kimi-cli/issues/2219) | First reported latency/quality regression on K2.6 model specifically; if reproducible, signals potential model-serving or prompt-engineering issues tied to the latest model rollout. | Zero engagement so far—needs reproduction confirmation from maintainers. |
| **#2218** | [[enhancement] Can it support /goal similar to codex?](https://github.com/MoonshotAI/kimi-cli/issues/2218) | Codex's `/goal` enables multi-step planning with checkpointing—a gap in Kimi CLI's current slash-command set. Direct competitive parity request from a bilingual user. | Cross-ecosystem feature migration pattern; no votes but high strategic relevance. |
| **#2206** | [[WebUI] Workspace files sidebar: action buttons hidden when filenames are too long](https://github.com/MoonshotAI/kimi-cli/issues/2206) | UI-breaking bug: long filenames make expand/download buttons unreachable. Fixed sidebar width compounds the problem on smaller screens. | Has matching PR (#2207)—active fix in flight. |
| **#2216** | [[Feature Request] Editable path bar with autocomplete in Workspace files sidebar](https://github.com/MoonshotAI/kimi-cli/issues/2216) | Mouse-only deep-directory navigation is tedious for keyboard-centric developers. Autocomplete would match IDE conventions (VS Code, JetBrains). | Same author as #2206; PR #2215 already implements this—strong signal of iterative UX investment. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| **#2220** | [feat(skill,agent): add .piebox/skills and align AGENTS.local.md loading](https://github.com/MoonshotAI/kimi-cli/pull/2220) | **CLOSED** | Expands skill discovery to `.piebox/skills` path, adds `AGENTS.local.md` support for team-specific overrides, and cleans up code-block wrapping in system prompts. Also adds shell prompt line-navigation. Merged—shipping in next release. |
| **#2217** | [fix: recover background auto-trigger after cooldown](https://github.com/MoonshotAI/kimi-cli/pull/2217) | OPEN | Addresses #2193: prevents "stuck agent" state by pausing background triggers for 10 min after 3 consecutive failures, then auto-resuming. Preserves user input responsiveness during cooldown. Critical for long-running autonomous sessions. |
| **#2215** | [feat(webui): editable path bar with autocomplete in Workspace files sidebar](https://github.com/MoonshotAI/kimi-cli/pull/2215) | OPEN | Implements the feature requested in #2216: type-ahead path navigation with smart autocomplete. Reduces click-depth friction significantly. Ready for review. |
| **#2207** | [fix(webui): prevent long filenames from hiding action buttons in Workspace files sidebar](https://github.com/MoonshotAI/kimi-cli/pull/2207) | OPEN | Fixes #2206 via CSS truncation (`text-overflow`) and Radix UI `ScrollArea` containment. Buttons remain accessible regardless of filename length. |
| **#2214** | [fix(soul): show rotated backup hint after /clear](https://github.com/MoonshotAI/kimi-cli/pull/2214) | OPEN | Improves transparency: `/clear` now displays the rotated backup filename and clarifies that `/undo` cannot restore pre-clear history. Adds regression tests for message accuracy. |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **WebUI navigation modernization** | #2206, #2216, #2215, #2207 | Shift from mouse-centric file trees toward keyboard-driven, IDE-like path navigation with autocomplete and truncation safety |
| **MCP ecosystem flexibility** | #2221 | Demand for server-specific configuration overrides (output limits, timeouts) rather than one-size-fits-all constants |
| **Long-horizon task management** | #2218 | Interest in higher-level planning primitives (`/goal`, task decomposition, checkpointing) beyond single-turn interactions |
| **Agent resilience & observability** | #2217, #2214 | Expectation that autonomous background operations self-heal and communicate state clearly to users |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Details |
|------------|-----------|---------|
| **WebUI sidebar UX fragility** | 2 issues + 2 PRs | Fixed-width layout breaks with realistic filename lengths; navigation requires excessive clicking for deep paths. Both issues have active fixes. |
| **Opaque agent state transitions** | 1 issue + 1 PR | Background auto-trigger failures (#2193→#2217) and unclear `/clear` backup behavior (#2214) reveal gaps in observability for autonomous operations. |
| **Model-version quality variance** | 1 issue | K2.6-specific degradation report (#2219) raises concern about release validation for model rollouts in CLI context. Needs triage. |
| **Configuration rigidity** | 1 issue | Hard-coded MCP limits (#2221) force workarounds when integrating non-standard servers. Pattern may exist in other subsystems. |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-05-11.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-11

## Today's Highlights

OpenCode v1.14.46 shipped with a built-in `customize-opencode` skill to prevent config corruption on startup, alongside critical HTTP API fixes for numeric and boolean query parameters. Meanwhile, a surge of `/exit` command regressions dominated issue traffic as users reported broken TUI session termination and missing slash autocomplete entries—prompting rapid community patches. The project also saw continued investment in internal test infrastructure migration to Effect-based patterns.

---

## Releases

**[v1.14.46](https://github.com/anomalyco/opencode/releases/tag/v1.14.46)** — Core improvements and API spec fixes:
- **New:** Built-in `customize-opencode` skill reduces startup breakage from manual config edits
- **Fixed:** Numeric HTTP API query parameters now correctly specified in generated OpenAPI spec and SDK for session/file endpoints
- **Fixed:** Boolean query parameter handling in HTTP API restored to spec-compliant behavior

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#12661](https://github.com/anomalyco/opencode/issues/12661) | **Agent Teams Equivalent or Better** | Top-voted feature request (110 👍); positions OpenCode against Claude Code's multi-agent orchestration, a competitive differentiator in enterprise workflows | 33 comments; active design discussion; high engagement from power users |
| [#24039](https://github.com/anomalyco/opencode/issues/24039) | **GPT-5.5 support for OpenAI provider** | Closed—first-class `gpt-5.5` model support merged, keeping provider parity current with OpenAI's latest release | 21 comments, 14 👍; rapid turnaround signals healthy maintainer responsiveness |
| [#6096](https://github.com/anomalyco/opencode/issues/6096) | **Tokens-per-second display** | Performance transparency is a recurring UX gap; TPS metrics help users optimize model/provider choices | 16 comments, 50 👍; longstanding request with clear implementation path |
| [#25824](https://github.com/anomalyco/opencode/issues/25824) | **Desktop plugin agents invisible in GUI** | `oh-my-openagent` custom agents load but don't render—breaks plugin ecosystem trust for GUI-first users | 14 comments; TUI workaround identified; regression pattern across Windows builds |
| [#26549](https://github.com/anomalyco/opencode/issues/26549) | **`/exit` `/quit` missing from autocomplete** | Core navigation regression in v1.14.42; friction for keyboard-driven users | 11 comments, 19 👍; **fixed by PR #26606** |
| [#24316](https://github.com/anomalyco/opencode/issues/24316) | **Qwen 3.6 35b-a3b tool call hangs** | Model-specific compatibility issue with "naked" `<tool_call>` tokens; ambiguous whether root cause is model, llama.cpp, or OpenCode parser | 12 comments; needs upstream triage; blocking for local model users |
| [#22528](https://github.com/anomalyco/opencode/issues/22528) | **Disable sound effects/animations in 1.4.4** | Undocumented UI changes surprise users; accessibility and focus concerns for terminal-centric workflows | 10 comments, 41 👍; configuration discoverability problem |
| [#21470](https://github.com/anomalyco/opencode/issues/21470) | **Heavily CPU-bound performance** | $8.30 API spend vs. 1.5h CPU time suggests severe local processing inefficiency; undermines cost/value proposition vs. competitors | 9 comments, 7 👍; needs profiling data from maintainers |
| [#20802](https://github.com/anomalyco/opencode/issues/20802) | **Custom OpenAI-compatible providers: image attachments broken** | Vision payload formatting inconsistency blocks multimodal use cases for self-hosted/OpenAI-compatible endpoints | 8 comments; provider ecosystem fragmentation issue |
| [#11111](https://github.com/anomalyco/opencode/issues/11111) | **VIM keyboard layout** | Modal editing is non-negotiable for a significant terminal-native user segment; absence drives editor friction | 8 comments, 27 👍; persistent request, implementation complexity unclear |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#26756](https://github.com/anomalyco/opencode/pull/26756) | **Discover LM Studio models from `/v1/models`** | 🟢 Open | Dynamic model discovery eliminates static catalog dependency; enables hot-swapping loaded models without config restarts |
| [#26776](https://github.com/anomalyco/opencode/pull/26776) | **Effectify remaining compaction tests** | 🔴 Closed | Completes migration of async compaction tests to Effect's `itProcess.instance` pattern; reduces test flakiness |
| [#26652](https://github.com/anomalyco/opencode/pull/26652) | **Background code migration service** | 🔴 Closed | Non-blocking startup migrations via JSON markers; avoids SQL migration locks and improves CLI launch latency |
| [#25654](https://github.com/anomalyco/opencode/pull/25654) | **MCP Streamable HTTP Accept header fix** | 🟢 Open | Adds `application/json` to SSE stream requests; resolves Zhipu AI and other strict server compatibility |
| [#26606](https://github.com/anomalyco/opencode/pull/26606) | **Show slash commands regardless of enabled state** | 🔴 Closed | **Fixes #26549**—restores `/exit`, `/quit`, `/q` to autocomplete by decoupling visibility from `enabled` flag |
| [#26742](https://github.com/anomalyco/opencode/pull/26742) | **Simplify compaction test helpers** | 🔴 Closed | Deduplicates test utilities; reduces contributor onboarding friction for session compaction work |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile touch optimization** | 🟢 Open | Touch targets, gesture handling, and responsive layout for mobile devices; expands addressable market beyond desktop |
| [#26773](https://github.com/anomalyco/opencode/pull/26773) | **Integrated browser workspace** | 🟢 Open | Embeds browser control in desktop app; enables web-aware agent workflows without context switching |
| [#26771](https://github.com/anomalyco/opencode/pull/26771) | **Restore managed textarea keymap handling** | 🔴 Closed | Fixes dropped newlines and restores `esc`/`enter` aliases; resolves TUI input regression |
| [#26740](https://github.com/anomalyco/opencode/pull/26740) | **Drop unused ID Zod statics** | 🔴 Closed | Converts session/workspace ID validation to Effect Schema; incremental removal of Zod dependency |

---

## Feature Request Trends

1. **Agent Orchestration & Multi-Agent Systems** — #12661 (Agent Teams) and #26745 (terminal mascot/buddy) reflect demand for richer agent metaphors beyond single-turn chat; competitive pressure from Claude Code's team features.

2. **Performance Observability** — #6096 (TPS display), #21470 (CPU profiling), and #24771 (severe performance issues) cluster around transparency into where time/cost goes; users need built-in telemetry, not external guesswork.

3. **Modal/Keyboard-First UX** — #11111 (VIM layout) and #21578 (per-session auto-accept permissions) represent power-user workflow customization; tension with GUI simplification efforts.

4. **Provider & Model Parity** — #24039 (GPT-5.5), #20802 (custom vision providers), #24316 (Qwen compatibility) show fragmentation risk as local and hosted model ecosystems diverge.

5. **Desktop-GUI Ecosystem Integrity** — #25824, #26516 (plugin agents invisible), #26064 (image paste broken) indicate GUI-specific regressions not caught by TUI-centric testing.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **TUI session termination regressions** | #26549, #26684, #26710, #26761, #26721, #26703—all `/exit`-related within 48h | 🔴 Critical; daily workflow breakage |
| **Desktop/GUI parity gaps** | Plugin agents invisible (#25824, #26516), image paste broken (#26064), text files misclassified as binary (#26759) | 🔴 High; undermines Desktop as primary interface |
| **Performance opacity and CPU bloat** | #21470 (1.5h CPU vs. $8.30 API), #24771 (intermittent severe slowdown), #23804 (14GB/hr `/tmp` leak) | 🟡 High; operational cost and disk exhaustion |
| **Configuration fragility** | v1.14.46's `customize-opencode` skill addresses this directly; #22528 (undocumented UI changes) compounds discoverability | 🟡 Medium; improving with built-in skill |
| **Internationalization gaps** | #26716 (`@` file listing fails in Chinese locale), #26708 (paste blocked in API input—reported in Chinese with hostile tone) | 🟡 Medium; i18n testing insufficient |
| **Upgrade/uninstall reliability** | #22844, #26746 (Pop OS failure), #26721 (spawn EFTYPE post-exit) | 🟡 Medium; installation toolchain brittleness |

---

*Digest compiled from github.com/anomalyco/opencode activity for 2026-05-11.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-11

## Today's Highlights

The Pi project is undergoing a major organizational and architectural transition, with the repository migrating from `@mariozechner` to `@earendil-works` and a large-scale refactor underway that has resulted in mass issue closures tagged `closed-because-weekend` and `closed-because-refactor`. Despite the turbulence, active development continues with new provider integrations (Volcengine), UX improvements to markdown rendering and bash command backgrounding, and ongoing cleanup of migration artifacts like outdated self-update paths and SDK documentation.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1890](https://github.com/earendil-works/pi/issues/1890) | Token stats enhancement for footer display | Improves session transparency by colorizing context token usage against compaction thresholds—critical for users hitting context limits | Closed with 6 comments; focused UX refinement |
| [#4355](https://github.com/earendil-works/pi/issues/4355) | Core dump on `/resume` | Memory management crash during session restoration—data loss risk for active workflows | 4 comments, closed as refactor collateral; user provided GC logs |
| [#715](https://github.com/earendil-works/pi/issues/715) | External editor key events leaked to Pi | Regression in pre-compiled releases breaks `ctrl+g` → nvim workflow, a core power-user feature | 4 comments, long-running issue since January; affects Bun binary specifically |
| [#4349](https://github.com/earendil-works/pi/issues/4349) | Organization change lacks explanation | Migration from `@mariozechner` to `@earendil-works` broke extensions and user trust; transparency gap | 3 comments, closed without direct maintainer response; community seeking communication |
| [#4338](https://github.com/earendil-works/pi/issues/4338) | Agent "working" loop with no progress | Reliability concern—agent hangs silently, requiring session restart; impacts productivity | 3 comments, user-provided reproduction; closed during refactor |
| [#2779](https://github.com/earendil-works/pi/issues/2779) | Regex syntax error on startup (Node 18) | `v` flag regex incompatible with Node 18; blocks users on LTS versions | 3 comments, closed; Node version compatibility gap |
| [#4375](https://github.com/earendil-works/pi/issues/4375) | SDK docs show outdated tool configuration API | Documentation drift blocks SDK adoption; `readTool`/`bashTool` factories removed but docs stale | 3 comments, PR fix already opened ([#4383](https://github.com/earendil-works/pi/pull/4383)) |
| [#4222](https://github.com/earendil-works/pi/issues/4222) | Stack overflow in Markdown renderer with large content | TUI crash on benchmark/large file workflows; `RangeError` in production path | 2 comments, remains open; marked `closed-because-bigrefactor` |
| [#4342](https://github.com/earendil-works/pi/issues/4342) | `ANTHROPIC_AUTH_TOKEN` env var breaks non-Anthropic providers | Header collision causes 401s for Xiaomi MiMo and other `anthropic-messages` API users | 2 comments, open; provider compatibility bug |
| [#4362](https://github.com/earendil-works/pi/issues/4362) | `pi update --self` still uses old npm package | Migration incomplete—self-update path installs deprecated `@mariozechner/pi-coding-agent` | 2 comments, open; active breakage for users updating |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#4383](https://github.com/earendil-works/pi/pull/4383) | Fix tool configuration API in SDK docs | Replaces deprecated `readTool`/`bashTool`/`grepTool` with current `createAgentSession({ tools })` allowlist API; resolves [#4375](https://github.com/earendil-works/pi/issues/4375) | Open |
| [#4380](https://github.com/earendil-works/pi/pull/4380) | Add Volcengine provider (kimi-k2.6, minimax-m2.7, glm-5.1) | Expands model ecosystem via Anthropic-compatible API; fixes missing `ai`/`web-ui` build deps | Closed |
| [#4379](https://github.com/earendil-works/pi/pull/4379) | Render checkboxes in Markdown to-do lists | Visual fix for `[-]` / `[x]` list items; improves readability of agent-generated task lists | Open |
| [#4327](https://github.com/earendil-works/pi/pull/4327) | Wrap list items with indentation | Terminal width-aware wrapping with quote token preservation; narrow-terminal UX improvement | Closed |
| [#4354](https://github.com/earendil-works/pi/pull/4354) | Respect proxy envs in Bun WebSocket | Workaround for Bun issue #15489; enables corporate/restricted network deployments | Closed |
| [#4358](https://github.com/earendil-works/pi/pull/4358) | Fireworks provider session affinity + caching fixes | Adds `session-affinity` routing header; fixes cache miss on serverless infra for cost optimization | Closed |
| [#4374](https://github.com/earendil-works/pi/pull/4374) | Add `--json-no-partial` for O(n) JSON mode output | Eliminates quadratic payload growth in streaming JSON mode; critical for long-running agent sessions | Closed |
| [#4367](https://github.com/earendil-works/pi/pull/4367) / [#4368](https://github.com/earendil-works/pi/pull/4368) | Background direct bash commands with `Ctrl+B` | Interactive `!` command backgrounding without losing TUI context; graceful fallback to cursor-left | Closed (duplicate PRs) |
| [#4363](https://github.com/earendil-works/pi/pull/4363) | Resolve slash commands by unambiguous prefix | `/ed` matches `/editor` if unique; reduces typing friction for argument-bearing commands | Closed |

---

## Feature Request Trends

1. **Session Transparency & Control** — Token visualization ([#1890](https://github.com/earendil-works/pi/issues/1890)), write-tool artifact tracking ([#4378](https://github.com/earendil-works/pi/issues/4378)), and background job management ([#4367](https://github.com/earendil-works/pi/pull/4367)) show demand for visibility into agent state and side effects.

2. **Provider Ecosystem Expansion** — Volcengine ([#4380](https://github.com/earendil-works/pi/pull/4380)), Xiaomi MiMo ([#4342](https://github.com/earendil-works/pi/issues/4342)), and custom OpenAI-compatible endpoints ([#4345](https://github.com/earendil-works/pi/issues/4345), [#4340](https://github.com/earendil-works/pi/issues/4340)) indicate push beyond Anthropic/OpenAI core.

3. **TUI Robustness & Rendering** — Markdown stack limits ([#4222](https://github.com/earendil-works/pi/issues/4222)), checkbox rendering ([#4379](https://github.com/earendil-works/pi/pull/4379)), list wrapping ([#4327](https://github.com/earendil-works/pi/pull/4327)), and theme customization ([#4369](https://github.com/earendil-works/pi/issues/4369)) reflect terminal UI as active investment area.

4. **Command Interface Ergonomics** — Prefix matching for `/commands` ([#4364](https://github.com/earendil-works/pi/issues/4364), [#4363](https://github.com/earendil-works/pi/pull/4363)) and undo for `cmd+backspace` ([#4373](https://github.com/earendil-works/pi/issues/4373)) target power-user efficiency.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Migration/organizational chaos** | Outdated package names in `pi update --self` ([#4362](https://github.com/earendil-works/pi/issues/4362)), unexplained org change ([#4349](https://github.com/earendil-works/pi/issues/4349)), stale SDK docs ([#4375](https://github.com/earendil-works/pi/issues/4375)) | High — breaks existing workflows and trust |
| **External editor integration fragility** | Key event leakage ([#715](https://github.com/earendil-works/pi/issues/715)), Windows input issues ([#4372](https://github.com/earendil-works/pi/issues/4372)) | High — core differentiator unreliable |
| **Agent reliability/hanging** | "Working" with no progress ([#4338](https://github.com/earendil-works/pi/issues/4338)), async init race ([#4330](https://github.com/earendil-works/pi/issues/4330)) | High — productivity killer |
| **Provider configuration edge cases** | `ANTHROPIC_AUTH_TOKEN` header collision ([#4342](https://github.com/earendil-works/pi/issues/4342)), truncated stream handling ([#4345](https://github.com/earendil-works/pi/issues/4345)), hardcoded 5min Bun timeout ([#4340](https://github.com/earendil-works/pi/issues/4340)) | Medium-High — multi-provider support immature |
| **Node/runtime compatibility** | Regex `v` flag breaks Node 18 ([#2779](https://github.com/earendil-works/pi/issues/2779)) | Medium — LTS support gap |
| **TUI crashes under load** | `ENOBUFS` on stdout ([#4382](https://github.com/earendil-works/pi/issues/4382)), stack overflow on large markdown ([#4222](https://github.com/earendil-works/pi/issues/4222)) | Medium — stability at scale |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-11

## 1. Today's Highlights

Qwen Code shipped **v0.15.10** with CLI validation fixes and improved OpenAI request logging, while the community filed **30 issues in 24 hours**—dominated by file operation bugs (binary misclassification of UTF-8/C#/encrypted files) and a surge of ecosystem expansion requests from user **Maddock-DR** (MCP server mode, profile sync, skill packaging). The maintainers are actively merging UX polish (cancel handling, stats rendering) and architectural improvements (tool deferral, prompt caching).

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.10](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.10)** | CLI `/model` command argument validation ([`#3963`](https://github.com/QwenLM/qwen-code/pull/3963)); core fix to log actual OpenAI wire requests for debugging ([`@tanzhenxin`](https://github.com/tanzhenxin)) |
| **[v0.15.9-nightly.20260510.f4d0ad6b7](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.9-nightly.20260510.f4d0ad6b7)** | Same changes as v0.15.10 (nightly build from release automation) |

---

## 3. Hot Issues

| # | Title | Why It Matters | Status |
|---|-------|---------------|--------|
| **[#4004](https://github.com/QwenLM/qwen-code/issues/4004)** | `write_file` misidentifies UTF-8 text as binary payload | **Critical regression**: Chinese + Markdown special chars trigger false binary detection; users resort to shell workarounds. Filed by same user who hit related issues. | 🔴 Open |
| **[#3945](https://github.com/QwenLM/qwen-code/issues/3945)** | `edit` tool deadlocks on large files due to `read_file` truncation | **Architectural flaw**: "Fully read" precondition impossible when files >800 lines get truncated. Blocks core editing workflow. | ✅ Closed |
| **[#4025](https://github.com/QwenLM/qwen-code/issues/4025)** | Statusline `cxt` percentage inaccurate | Users can't trust context window metrics for `/compact` decisions, causing sudden failures or premature compaction. | 🔴 Open |
| **[#3964](https://github.com/QwenLM/qwen-code/issues/3964)** | Encrypted `.c`/`.cpp`/`.h` files misidentified as binary | DRM/encrypted filesystem environments broken since v0.15.7; regression from v0.15.6. Windows-specific. | ✅ Closed |
| **[#4010](https://github.com/QwenLM/qwen-code/issues/4010)** | `read_file` marks truncated large files as binary | Related to #3945/#4004: truncation corrupts file type detection state, blocking subsequent edits. | ✅ Closed |
| **[#4024](https://github.com/QwenLM/qwen-code/issues/4024)** | `edit`/`write_file` reject some `.cs` files as binary | C# ecosystem hit by same over-aggressive binary detection pattern. | ✅ Closed |
| **[#4000](https://github.com/QwenLM/qwen-code/issues/4000)** | Redesign `/commit` slash command with AI-generated messages | Previous implementation (#3935) rejected as "thin wrapper"; community wants native AI drafting, not `git add -A && git commit -m`. | 🔴 Open |
| **[#4026](https://github.com/QwenLM/qwen-code/issues/4026)** | Cowork Mode (Artifact, AskUserQuestion, Connector Registry, Computer Use) | Direct response to Claude Cowork (2.7M+ DAU); positions Qwen Code as multi-agent desktop tool beyond developers. | 🔴 Open |
| **[#4028](https://github.com/QwenLM/qwen-code/issues/4028)** | Performance vs. llama.cpp/web UI | User benchmarking Qwen3-Coder-30B-A3B-Instruct-GGUF; latency concerns for local inference stack. | 🔴 Open |
| **[#4033](https://github.com/QwenLM/qwen-code/issues/4033)** | Excessive power usage while waiting for external processes | CPU burn during `npm install`/compilation idle; impacts laptop battery life and thermal management. | 🔴 Open |

---

## 4. Key PR Progress

| # | Title | Feature/Fix | Author |
|---|-------|-------------|--------|
| **[#4020](https://github.com/QwenLM/qwen-code/pull/4020)** | Improve Anthropic proxy compatibility + global prompt cache scope | Enables cross-session prompt caching for IdeaLab-style proxies; keeps `api.anthropic.com` behavior unchanged | [`wenshao`](https://github.com/wenshao) |
| **[#4022](https://github.com/QwenLM/qwen-code/pull/4022)** | Defer low-frequency built-in tools to reduce initial prompt size | 6 tools (Monitor, SendMessage, Skill, TaskStop, TodoWrite, WebFetch) now deferred with `searchHint`; aligns with Claude Code strategy | [`wenshao`](https://github.com/wenshao) |
| **[#4023](https://github.com/QwenLM/qwen-code/pull/4023)** | Auto-restore prompt and preserve queue on cancel | Fixes stranded prompts in history when ESC pressed post-submit; preserves queued follow-up inputs during tool cancellation | [`wenshao`](https://github.com/wenshao) |
| **[#4027](https://github.com/QwenLM/qwen-code/pull/4027)** | Security hardening for configuration storage | `0o600` permissions on `settings.json`, `trustedFolders.json`, MCP OAuth tokens; atomic writes with backup | [`Amurallado`](https://github.com/Amurallado) |
| **[#4032](https://github.com/QwenLM/qwen-code/pull/4032)** | Keep long model stats header on one line | Fixes `#4031` broken `/stats model` rendering; adaptive column width for single-model views | [`Jerry2003826`](https://github.com/Jerry2003826) |
| **[#3975](https://github.com/QwenLM/qwen-code/pull/3975)** | Add `/directory remove` subcommand | Completes directory context management (complementing `/directory add`) with sandbox checks | [`B-A-M-N`](https://github.com/B-A-M-N) |
| **[#3974](https://github.com/QwenLM/qwen-code/pull/3974)** | Retry API request on model-unloaded errors for local servers | Auto-retry with 2s delay for LM Studio-style "model unloaded" errors; improves local inference UX | [`B-A-M-N`](https://github.com/B-A-M-N) |
| **[#3973](https://github.com/QwenLM/qwen-code/pull/3973)** | MCP add/remove persistence fixes | Headers no longer dropped; server deletions actually persist; uses full-save to avoid merge semantics bugs | [`B-A-M-N`](https://github.com/B-A-M-N) |
| **[#3991](https://github.com/QwenLM/qwen-code/pull/3991)** | Support `DASHSCOPE_PROXY_BASE_URL` for prompt cache via API gateway | Enables DashScope prompt caching behind enterprise proxies; env-var detection for gateway URLs | [`HeZiGang`](https://github.com/HeZiGang) |
| **[#3990](https://github.com/QwenLM/qwen-code/pull/3990)** | Add Token Plan as first-class auth provider in VS Code | New `token-plan` provider option; full WebViewProvider config sync; expands authentication flexibility | [`yiliang114`](https://github.com/yiliang114) |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Interoperability & MCP ecosystem** | [#4007](https://github.com/QwenLM/qwen-code/issues/4007) (MCP Server), [#4008](https://github.com/QwenLM/qwen-code/issues/4008) (HTTP API Server), [#4034](https://github.com/QwenLM/qwen-code/issues/4034) (browser-use tool) | Qwen Code positioning as infrastructure layer, not just terminal client |
| **Cross-device profile synchronization** | [#4011](https://github.com/QwenLM/qwen-code/issues/4011)-[#4018](https://github.com/QwenLM/qwen-code/issues/4018) (8 related issues by Maddock-DR) | Enterprise/serious users need config portability, encryption, version control |
| **Skill packaging & distribution** | [#4014](https://github.com/QwenLM/qwen-code/issues/4014) (`.skill.tar.gz` format) | Community maturing toward reusable, shareable automation primitives |
| **Cowork / multi-agent desktop** | [#4026](https://github.com/QwenLM/qwen-code/issues/4026) | Expansion beyond developer niche to knowledge worker market |
| **Anti-sycophancy / personality control** | [#4011](https://github.com/QwenLM/qwen-code/issues/4011) (Anti-Sycophancy Protocol) | Power users seeking systematic LLM behavior correction |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Related Issues/PRs |
|------------|-----------|--------|-------------------|
| **Binary misclassification of text files** | 🔥🔥🔥🔥🔥 | Blocks `write_file`, `edit`, `read_file` for C#, C/C++, UTF-8 Chinese+Markdown, encrypted files | [#4004](https://github.com/QwenLM/qwen-code/issues/4004), [#3964](https://github.com/QwenLM/qwen-code/issues/3964), [#4010](https://github.com/QwenLM/qwen-code/issues/4010), [#4024](https://github.com/QwenLM/qwen-code/issues/4024) |
| **Large file handling deadlock** | 🔥🔥🔥🔥 | `edit` requires "fully read" but `read_file` truncates; architectural tension | [#3945](https://github.com/QwenLM/qwen-code/issues/3945) |
| **Context window opacity** | 🔥🔥🔥 | Inaccurate `cxt` % prevents informed `/compact` decisions | [#4025](https://github.com/QwenLM/qwen-code/issues/4025) |
| **Configuration portability & security** | 🔥🔥🔥 | API keys in plaintext, no sync, manual migration friction | [#4012](https://github.com/QwenLM/qwen-code/issues/4012)-[#4018](https://github.com/QwenLM/qwen-code/issues/4018), [#4027](https://github.com/QwenLM/qwen-code/pull/4027) |
| **Idle CPU/power consumption** | 🔥🔥 | Laptop users penalized during long external process waits | [#4033](https://github.com/QwenLM/qwen-code/issues/4033) |
| **MCP/tool ecosystem gaps** | 🔥🔥 | No browser automation, no native browser-use, limited web fetch resilience | [#4034](https://github.com/QwenLM/qwen-code/issues/4034), [#4006](https://github.com/QwenLM/qwen-code/issues/4006) |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-11

---

## 1. Today's Highlights

The project shipped **v0.8.28** with a massive wave of stability fixes targeting GPU terminal flickering, thinking-content streaming failures, and Ctrl+Enter submission bugs that had plagued users since v0.8.24. The maintainers closed **14 PRs in 24 hours**—including four separate fixes for Issue #861's "thinking collapse" family of bugs—while the issue tracker remains active with 50+ items, dominated by Windows rendering problems and input handling edge cases.

---

## 2. Releases

### [v0.8.28](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.28) — Maintenance Release
Released 2026-05-10. Preflight checks passed (2645 tests, clean clippy/fmt). Aggregates fixes for:
- DEC 2026 synchronized updates to eliminate GPU terminal flickering
- Thinking content streaming during collapsed view
- Ctrl+Enter content loss when engine idle
- Tool denial state poisoning
- Cache usage reporting when API omits cache data

*Install: `npm install -g deepseek-tui` or Docker via GHCR.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177) | **Input cache hit rate "abysmally low" vs. DeepSeek-Reasonix** | Cost optimization blocker: users report 95%+ cache hit rates in competing tools vs. near-zero in TUI. Direct revenue impact for heavy users. | 20 comments, no upvotes—suggests silent frustration or Chinese-language barrier to engagement |
| [#861](https://github.com/Hmbown/DeepSeek-TUI/issues/861) | **Thinking collapse: frozen spinners, silent truncation, dropped reasoning** | Core UX defect affecting V4-Pro's signature feature. Four root causes identified; RC3/RC4 fixes shipped in v0.8.28. | 7 comments, detailed root-cause analysis from reporter ZhouChaunge—exemplary community debugging |
| [#1255](https://github.com/Hmbown/DeepSeek-TUI/issues/1255) | **Win10 terminal: chat window unscrollable** | Basic navigation broken on major platform. Closed with fix but pattern of Windows scroll/input bugs persists. | 11 comments, screenshot evidence, rapid closure |
| [#828](https://github.com/Hmbown/DeepSeek-TUI/issues/828) | **Multi-terminal use causes hang after extended session** | Reliability concern for power users running multiple sessions. Affects Kali Linux and macOS—cross-platform core issue. | 7 comments, no version specificity in reports |
| [#1269](https://github.com/Hmbown/DeepSeek-TUI/issues/1269) | **"Working..." indefinitely, no output, doctor passes** | Opacity in failure modes—users cannot self-diagnose. Suggests missing telemetry or timeout handling. | 6 comments, macOS + v4 pro/flash, reproducible steps |
| [#1112](https://github.com/Hmbown/DeepSeek-TUI/issues/1112) | **1.2TB snapshot accumulation fills disk** | Operational catastrophe: silent unbounded growth in `~/.deepseek/snapshots`. No reproduction steps found by reporter. | 3 comments, severity belies low engagement—possible data loss risk |
| [#1372](https://github.com/Hmbown/DeepSeek-TUI/issues/1372) | **Ctrl+Enter newlines excluded from model context** | Regression in multi-line input handling. Breaks workflow for users composing complex prompts. | 3 comments, precise reproduction by same reporter as #1331 |
| [#1377](https://github.com/Hmbown/DeepSeek-TUI/issues/1377) | **Denying tool once permanently auto-denies same tool** | Session state corruption—forces `/exit` and resume. Fixed in PR #1388. | 2 comments, clear reproduction, rapid PR response |
| [#1338](https://github.com/Hmbown/DeepSeek-TUI/issues/1338) | **Entering follow-up during TUI run crashes GUI** | Concurrent input handling failure. "Neither suspends nor reads immediately"—ambiguous state machine. | 2 comments, Windows 11, powershell |
| [#1357](https://github.com/Hmbown/DeepSeek-TUI/issues/1357) | **Runtime hint text overlaps input box** | Polish defect: visual occlusion makes partial input invisible. Screenshot-documented. | 3 comments, recent regression |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#1361](https://github.com/Hmbown/DeepSeek-TUI/pull/1361) | **DEC 2026 synchronized updates for GPU terminal flicker** | Adds `ESC[?2026h/l` escape sequences around draw batches. Eliminates tearing on Ghostty, VS Code Terminal, Kitty. | Critical fix for modern terminal emulator compatibility |
| [#1390](https://github.com/Hmbown/DeepSeek-TUI/pull/1390) | **Stream thinking content during collapsed view** | Closes #1324 and #861 RC4: thinking blocks now render incrementally instead of post-hoc via Ctrl+O. | Restores V4-Pro's core value proposition—visible reasoning |
| [#1389](https://github.com/Hmbown/DeepSeek-TUI/pull/1389) | **Drain active thinking entry on MessageComplete** | Fixes #861 RC3: race condition where MessageComplete processed before final thinking chunk caused 400 errors on next turn. | Stability for long reasoning sessions |
| [#1347](https://github.com/Hmbown/DeepSeek-TUI/pull/1347) | **Ctrl+Enter content lost when engine idle** | Routed Ctrl+Enter messages to `rx_steer` which was only monitored during active turns; now properly enters LLM context. | Fixes broken multi-line workflow |
| [#1388](https://github.com/Hmbown/DeepSeek-TUI/pull/1388) | **Tool denial state poisoning** | Deny stored `tool_name`+`args` tuple; subsequent identical calls matched and auto-denied. Now clears on turn boundary. | Restores user agency in tool approval |
| [#1386](https://github.com/Hmbown/DeepSeek-TUI/pull/1386) | **Cap file-index walk to bound first-turn latency** | Addresses #697: ~10s "Working..." hang in large directories from unbounded lazy-init walk. | Performance for enterprise-scale codebases |
| [#1379](https://github.com/Hmbown/DeepSeek-TUI/pull/1379) | **V4 steering sentences in tool descriptions** | Rewrites 9 tool descriptions to actively route V4 toward typed tools instead of defaulting to `exec_shell`. | Prompt engineering for model alignment |
| [#1393](https://github.com/Hmbown/DeepSeek-TUI/pull/1393) | **Reliability guidance for verification and tool failure** | Adds three rules to `base.md`: task completion verification, tool-result handling, failure recovery. | Agent robustness without extra model calls |
| [#1340](https://github.com/Hmbown/DeepSeek-TUI/pull/1340) | **LC_TERMINAL fallback for Cmux notifications** | Adds `LC_TERMINAL` probe and Cmux to OSC9 allowlist. Closes notification gap vs. Claude Code/Codex. | Feature parity for terminal multiplexer users |
| [#1392](https://github.com/Hmbown/DeepSeek-TUI/pull/1392) | **Cache usage shows 0 when API omits cache data** | Defaults `u64` fields to 0; API absence reported as zero usage. Now handles missing fields explicitly. | Accurate cost tracking |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Notification parity with Claude Code/Codex** | #1322, #1281, #1340 | High—desktop notifications for Cmux, model-triggered alerts, long-turn completion signals |
| **Thinking/reasoning UX polish** | #861, #1324, #1390, #1389 | Critical—streaming, collapsing, copying, and persisting thinking content |
| **Mouse/touchpad selection & scrolling** | #1163, #1292, #1295, #1298, #1331, #1169 | Sustained—text selection, scroll behavior customization, sidebar isolation |
| **Windows terminal stability** | #1255, #1260, #1295, #1363 | Ongoing—flickering, scroll bugs, Ghostty-specific issues |
| **MCP ecosystem maturity** | #1250, #1267 | Growing—tool enumeration limits, macOS sandboxing, npx server startup |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Status |
|------------|-----------|----------|--------|
| **Windows rendering instability** | 5+ issues since v0.8.22 | High | Partially addressed in v0.8.28; DEC 2026 sync helps GPU terminals |
| **Input handling ambiguity** | Ctrl+Enter (#1331, #1372), Enter during runs (#1338), paste newline-as-Enter (#1302) | High | Active fixes landing; state machine complexity evident |
| **Thinking content reliability** | #861 with 4 root causes | Critical | RC3/RC4 fixed; monitoring for residual issues |
| **Silent failures / poor observability** | "Working..." hangs (#1269), disk fill (#1112), doctor passes but broken | Medium | Needs telemetry investment; snapshot management unaddressed |
| **Cache/cost transparency** | #1177, #1392 | Medium | Hit rate optimization pending; zero-reporting fixed |
| **Cross-terminal compatibility** | Ghostty, VS Code integrated, Cmux, Windows Terminal | Medium | Environment detection patterns expanding (#1365, #1340) |

---

*Digest compiled from 50 issues, 20 PRs, and 4 releases in the 24-hour window ending 2026-05-11.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*