# AI CLI Tools Community Digest 2026-08-09

> Generated: 2026-08-09 00:51 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — AI CLI Developer Tools
**2026-08-09 Community Digest Analysis**

---

## 1. Ecosystem Overview

The AI CLI tool landscape is bifurcating into two modes: platform-backed agents (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI) converging on enterprise reliability, and independent/fast-moving tools (OpenCode, Pi, Qwen Code, CodeWhale) competing on extensibility, provider neutrality, and low-level systems control. The most consistent cross-community complaints are Windows-specific instability, session state not surviving restart or `/resume`, and untrustworthy status/billing reporting. Meanwhile, multi-agent orchestration—subagent-to-subagent delegation, cross-session messaging, and unified task surfaces—is clearly emerging as the next major feature horizon across six of the nine reporting projects. Release cadence is bimodal: Claude Code, Codex, Gemini, Qwen, and CodeWhale all shipped, while Copilot CLI, Kimi, and Grok Build showed zero code motion, signaling stagnation or product-cycle pauses.

## 2. Activity Comparison

| Tool | Notable Issues (24h) | PRs Updated (24h) | Releases (24h) | Notes |
|---|---|---|---|---|
| Claude Code | 10 | 1 | 2 | v2.1.226 (bugfixes), v2.1.225 (gateway spend limits, workspace trust) |
| OpenAI Codex | 10 | 10 | 1 | rust-v0.148.0-alpha.5; heavy backend/auth hardening |
| Gemini CLI | 10 | 10 | 1 | v0.56.0-nightly.20260808; capacity exhaustion now terminal |
| GitHub Copilot CLI | 10 | 0 | 0 | Several issues closed; zero PR/release motion |
| Kimi Code CLI | 2 | 0 | 0 | One critical runaway-token bug; one long-running memory feature request |
| OpenCode | 10 | 10 | 0 | 10 PRs concentrated on TUI/plugin SDK; no release |
| Pi | 10 | 10 | 0 | Provider fixes, TUI copy behavior, compaction/concurrency fixes |
| Qwen Code | 10 | 10 | 1 | v0.21.8 (fork PR autofix, cache sharing) |
| DeepSeek TUI (CodeWhale) | 10 | 12 | 2 | v0.9.5 + v0.9.4 rebrand; core-extraction + runtime API push |
| Grok Build | 0 | 0 | 0 | No activity |

*"Notable issues" = issues updated/active in the digest; several tools (Claude, Codex, Gemini, Qwen, CodeWhale) additionally reference more issues inside pain-point and trend sections.*

## 3. Shared Feature Directions

- **Durable cross-session memory/context** — The single most consistent demand. Claude Code (Session Bridge #62903, forgotten memories #81092), Kimi CLI (#1283 persistent memory system), Copilot CLI (autopilot/model not surviving `/resume`: #4329, #4397), and CodeWhale (prompt-scoped file recovery #5272) all ask for state that survives `/clear`, restarts, and conversation switches.
- **Multi-agent coordination & subagent governance** — Gemini CLI (agents calling agents #28738), Qwen Code (native coordination RFC #8718, cross-session messaging #8724), CodeWhale (CLI/TUI parity #4022, unified tasks surface #5270), and Codex (monotonic permission ceilings #36381) want hierarchical delegation with visible trajectories and least-privilege controls.
- **Non-interruptive interaction / mid-turn controls** — Claude Code's message queueing (#50246, 184 👍) is the highest-voted feature request in this dataset; CodeWhale (#5268) similarly asks for queue/send-now/keep-draft mid-turn behavior instead of a composer that locks.
- **Runtime MCP management & tool scoping** — Claude Code (VS Code ignores MCP #19054), OpenCode (TUI add/remove MCP servers #38993), Gemini (>128 tools → 400 error #24246), Codex (false MCP startup error #37418), and CodeWhale (MCP lifecycle API #5130) all point to MCP as a first-class runtime surface, not a config file.
- **Windows platform hardening** — Recurring across all three major vendors: Claude Code (GPU crash kills all sessions #81698, BSODs #80912), Codex (extension resource failure #37458, Computer Use broken #37180/#37383, mouse stutter #33074), Copilot CLI (silent exit on log levels #4285, render-loop freeze #4222, broken skill discovery #4401). No tool treats Windows as a reliable citizen.
- **Cost/quota transparency** — Claude Code (Fable 5 silently downgraded on Max plans #79337, $1,050 unconsented overcharge #60093), Codex (subagents drain weekly quota #35463), OpenCode ($0.00 cost tracking for Chinese providers #34877), and Copilot CLI (missing `cache_control` prompt-cache breakpoints #4256) show billing/usage trust is eroding everywhere.
- **Honest agent lifecycle reporting** — Gemini (MAX_TURNS falsely reported as GOAL #22323), CodeWhale (footer says "ending" but model keeps talking #5267), and Copilot (statusline shows autopilot active but approvals fail #4329) indicate that users are auditing statusline truthfulness as a core quality attribute.
- **Terminal UX hygiene** — OpenCode (copy/paste broken #13984, 55 comments), Pi (OSC 52 clipboard overwrite with no opt-out #7837), Claude Code (mouse-tracking mode left on after crash #84029), and Qwen (URL swallowing CJK punctuation #8750) confirm that terminal polish is an underrated retention factor.

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise guardrails: gateway spend limits, workspace trust, hooks/plugins | Enterprise dev teams, Pro/Max subscribers | Mature feature-rich agent; plugin sandbox; Bun/TS runtime |
| **OpenAI Codex** | Backend hardening: workload identity, gRPC code-mode hosting, async hooks | ChatGPT subscribers, CI/automation pipelines | Rust CLI; streaming + transport-independent host services |
| **Gemini CLI** | Subagents, browser agent, Vertex AI, nightly experiment cadence | Google-ecosystem developers | Agent-centric CLI; deep Google integration; nightly builds |
| **Copilot CLI** | GitHub/Codespaces workflow, VS Code integrated terminal | GitHub-centric developers | React/Ink TUI embedded in GitHub ecosystem; slow iteration |
| **Kimi Code CLI** | Persistent memory (requested), token-cost reliability | Moonshot/Kimi users | Niche; very low activity |
| **OpenCode** | Plugin SDK v2, session goals (`/goal`), TUI MCP controls | Open-source power users | TS/Bun with local SQLite session store; TUI-first |
| **Pi** | Provider matrix, context-compaction engineering, stream retry reliability | Technical/hacker users, multi-provider setups | TypeScript on Bun/Node/Deno; systems-first engineering |
| **Qwen Code** | Web Shell desktop integration, multi-agent coordination, CI automation | VS Code users, China + global | VS Code + Web Shell; RFC-driven roadmap |
| **CodeWhale (DeepSeek TUI)** | Runtime HTTP API, `crates/core` extraction, provider neutrality (Mistral, `model = auto`) | Advanced CLI operators | Rust monolith decomposing into modular core + runtime service |

**Synthesis:** The platform-backed tools differentiate on policy, auth, and ecosystem lock-in; the independent tools differentiate on extensibility (plugin SDKs), provider flexibility, and engineering depth (Rust/compaction/stream reliability). Pi and CodeWhale are the most "systems-engineering"-oriented; OpenCode is the most plugin-ecosystem-driven; Qwen and Gemini are the most explicit about multi-agent futures.

## 5. Community Momentum & Maturity

- **Tier 1 — High engagement, mature/centralized:** **Claude Code** has the loudest community (184 👍 on #50246, 71 comments on #79337, sustained demand outpacing shipped fixes) but the quietest PR pipeline (1 PR), indicating a mature product with centralized development and a growing feature backlog.
- **Tier 2 — Fast-moving, high contributor velocity:** **Codex, Gemini, OpenCode, Pi, Qwen, and CodeWhale** each moved 10-12 PRs in 24h. CodeWhale is undergoing the most structural change (monolith → `crates/core`, expanding runtime API, Mistral support). Qwen is shipping CI-gating and coordination features quickly. Pi is steadily hardening streaming/compaction internals.
- **Tier 3 — Stalled or minimal:** **Copilot CLI** logged 10 issues but zero PRs/releases; several Windows and config regressions remain unaddressed. **Kimi** showed two issues and no code motion. **Grok Build** had no activity.
- **Signal quality is high where communities are technical:** OpenCode users produced duplicate reports (#41300/#41306/#41314/#41322) and curl-level evidence that a prior fix did not resolve the `deepseek-v4-flash` issue—an engaged, technically literate user base actively validating fixes.

## 6. Trend Signals

1. **Context is becoming a managed state, not a display metric.** Pi's late auto-compaction (#6879/#7821) and Claude's 200k-vs-1M context metadata bug (#81693) show that pressure-aware compaction, durable checkpoints, and accurate gauges are the new engineering discipline. Expect tools to adopt proactive context management across agent steps, not just turn boundaries.

2. **Multi-agent orchestration is the next product battleground.** With Gemini, Qwen, CodeWhale, Codex, and Claude all carrying active delegation/session-coordination threads, hierarchical subagent workflows with visible trajectories, permission ceilings, and honest completion status will become a primary differentiator in the next 1-2 quarters.

3. **Windows is the weakest platform at every vendor.** Silent exits, GPU/BSOD crashes, render-loop freezes, and broken Computer Use approval flows recur across Claude, Codex, and Copilot. For vendors: dedicated Windows CI and regression fixtures are high-ROI. For adopters: pin versions and validate platform-specific behavior before rollout.

4. **Users are auditing billing and status claims — and punishing silence.** Silent model downgrades (Claude #79337), overnight quota drains (Codex #35463), and false success signals (Gemini #22323, CodeWhale #5267) generate outsized anger. Explicit disclosure of model switches, per-turn usage accounting, and truthful statuslines are table stakes.

5. **Session state survival is the top unmet need.** Memory systems, resume fidelity, and durable work products dominate feature requests at Claude, Copilot, Kimi, and CodeWhale. Developers should treat `/clear`, restart, and conversation switches as lossless operations by default.

6. **Provider neutrality is spreading beyond independent tools.** CodeWhale added Mistral, Pi added an LLM Gateway provider, and Gemini is experimenting with OpenAI-compatible auth. Unified cost tracking across providers (currently broken for Chinese providers per OpenCode #34877) will become a deciding factor for multi-provider teams.

7. **Security guardrails are tightening—sometimes too tightly.** Cyber-safeguard false positives are blocking legitimate scientific computing (Claude #83436) while trust-boundary overrides persist (Qwen #8627). The balance between hard guardrails and false-positive tolerance will be a defining policy debate as these tools move from dev machines to regulated environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
*Source: github.com/anthropics/skills · Data as of 2026-08-09*

## 1. Top Skills Ranking
Most-discussed PRs, ranked by community attention. All are currently **open**.

1. **skill-creator: run_eval.py reliability fixes** — [#1298](https://github.com/anthropics/skills/pull/1298)  
   Fixes the persistent `recall=0%` bug in the skill-creator evaluation loop. Installs the eval artifact as a real skill and addresses Windows stream reading, trigger detection, and parallel worker issues. This is the focal point of a cluster of PRs tracking issue [#556](https://github.com/anthropics/skills/issues/556).

2. **document-typography skill** — [#514](https://github.com/anthropics/skills/pull/514)  
   Adds typographic quality control for generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Community interest was high because these issues affect nearly every AI-generated document.

3. **pdf skill: case-sensitive file references** — [#538](https://github.com/anthropics/skills/pull/538)  
   Fixes 8 mismatches between `SKILL.md` references and actual lowercase filenames (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`), which break on case-sensitive filesystems.

4. **ODT skill for OpenDocument files** — [#486](https://github.com/anthropics/skills/pull/486)  
   New skill for creating, filling, reading, and converting `.odt`/`.ods` OpenDocument formats, including template filling and ODT-to-HTML parsing.

5. **frontend-design skill clarity overhaul** — [#210](https://github.com/anthropics/skills/pull/210)  
   Revises the frontend-design skill to make every instruction actionable and internally coherent, focusing on what Claude can concretely follow in a single conversation.

6. **skill-quality-analyzer and skill-security-analyzer** — [#83](https://github.com/anthropics/skills/pull/83)  
   Two meta-skills: one evaluates skills across structure, documentation, examples, and resources; the other analyzes security behavior. Directly responds to growing community concern about skill trustworthiness.

7. **docx skill: tracked change `w:id` collision fix** — [#541](https://github.com/anthropics/skills/pull/541)  
   Prevents document corruption when tracked changes collide with existing bookmark IDs in OOXML. A concrete robustness fix for the DOCX skill.

8. **skill-creator: YAML unquoted-description warning** — [#539](https://github.com/anthropics/skills/pull/539)  
   Adds pre-parse validation to detect unquoted `description` fields containing `:`, preventing silent YAML truncation and broken skill frontmatter.

## 2. Community Demand Trends
From the most active issues, the community is asking for:

- **Security and trust boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments) calls out community skills distributed under the `anthropic/` namespace as a trust-boundary vulnerability; [#1175](https://github.com/anthropics/skills/issues/1175) raises security and context-window concerns for SharePoint Online documents.
- **Org-wide skill sharing and management** — [#228](https://github.com/anthropics/skills/issues/228) asks for direct sharing inside organizations. [#189](https://github.com/anthropics/skills/issues/189) reports duplicate skills when installing multiple plugins.
- **Skill-creator tooling reliability** — [#556](https://github.com/anthropics/skills/issues/556) and [#1169](https://github.com/anthropics/skills/issues/1169) both report `recall=0%` in evaluation loops, making the skill-optimization pipeline unreliable.
- **Meta-skills: governance, memory, and reasoning quality** — [#412](https://github.com/anthropics/skills/issues/412) proposes agent governance patterns; [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact symbolic memory; [#1385](https://github.com/anthropics/skills/issues/1385) proposes a three-stage reasoning quality gate.
- **Platform and protocol integration** — [#29](https://github.com/anthropics/skills/issues/29) requests AWS Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) proposes exposing skills as MCPs.
- **Document skill correctness** — [#12](https://github.com/anthropics/skills/issues/12) documents DOCX corruption from whitespace reformatting, a recurring theme for office-format skills.

## 3. High-Potential Pending Skills
Open PRs that are not yet merged but have strong community traction:

- **skill-creator eval fix (parallel + Windows)** — [#1298](https://github.com/anthropics/skills/pull/1298)
- **document-typography skill** — [#514](https://github.com/anthropics/skills/pull/514)
- **ODT skill** — [#486](https://github.com/anthropics/skills/pull/486)
- **testing-patterns skill** — [#723](https://github.com/anthropics/skills/pull/723)  
  Covers testing philosophy, unit testing, React component testing, and more.
- **pyxel skill for retro game development** — [#525](https://github.com/anthropics/skills/pull/525)
- **self-audit skill** — [#1367](https://github.com/anthropics/skills/pull/1367)  
  Mechanical file verification plus four-dimension reasoning audit before delivery.
- **color-expert skill** — [#1302](https://github.com/anthropics/skills/pull/1302)
- **plan-file-hygiene skill** — [#1479](https://github.com/anthropics/skills/pull/1479)  
  Manages lifecycle of planning artifacts, addressing issue [#1417](https://github.com/anthropics/skills/issues/1417).

## 4. Skills Ecosystem Insight
The community’s most concentrated demand at the Skills level is for making the skill-authoring and skill-distribution loop itself trustworthy — fixing skill-creator evaluation, adding verification and security meta-skills, and enabling safe sharing — rather than for any single end-user domain.

---

# Claude Code Community Digest — 2026-08-09

## 1. Today's Highlights

Claude Code shipped two patch releases: v2.1.226 (bug fixes) and v2.1.225 (gateway spend-limit visibility in usage warnings, plus a workspace trust prompt for `claude agents`). Community attention remains concentrated on the Fable 5 access failure on Max plans ([#79337](https://github.com/anthropics/claude-code/issues/79337), 71 comments), while the most-upvoted feature request—non-interruptive message queueing ([#50246](https://github.com/anthropics/claude-code/issues/50246), 184 👍)—continues to dominate the wishlist. The last-24h PR pipeline is nearly empty, with only one pull request updated.

## 2. Releases

Two versions landed in the past 24 hours:

- **[v2.1.226](https://github.com/anthropics/claude-code/releases)** — Bug fixes and reliability improvements only; no feature changes.
- **[v2.1.225](https://github.com/anthropics/claude-code/releases)** — Two notable additions:
  - **Gateway spend-limit support**: the limit-reached usage warning now names the configured cap, its reset time, and the operator's message (requires the gateway on 2.1.225). A meaningful step for enterprises enforcing budget guardrails.
  - **Workspace trust prompt**: `claude agents` now prompts for untrusted directories, matching the behavior of the main CLI. Closes a safety gap for agent runs in unfamiliar repos.

## 3. Hot Issues

Top 10 noteworthy issues from the last 24 hours:

1. **[#79337 — Fable 5 prompts "usage credits required" on Max plan](https://github.com/anthropics/claude-code/issues/79337)** — 71 comments, 23 👍. The hottest issue by far. On the day Fable 5 became standard on Max plans, Claude Code refuses to run it, silently downgrades to Opus 4.8, and demands usage credits. Community anger is largely about the *silent* downgrade with no disclosure. Open for ~3 weeks with no fix.

2. **[#50246 — Message queue mode: queue messages instead of interrupting active tasks](https://github.com/anthropics/claude-code/issues/50246)** — 184 👍, 50 comments. The highest-reacting feature request. Developers want to file follow-ups mid-task without derailing in-flight work; currently the only option is interrupt or remember.

3. **[#29006 — Enable remote control for Claude Code sessions in Claude Desktop](https://github.com/anthropics/claude-code/issues/29006)** — 119 👍, 36 comments. Strong demand for managing/observing CLI sessions from the desktop app, reflecting a broader push toward a control-plane UX.

4. **[#19054 — Claude Code for VS Code does not use MCP servers at all](https://github.com/anthropics/claude-code/issues/19054)** — 24 comments, 26 👍. The VS Code extension ignores configured MCP servers entirely, breaking tool access for IDE-centric workflows. Open since January and still unresolved.

5. **[#81698 — Windows Desktop app: GPU process crash kills entire app and all sessions](https://github.com/anthropics/claude-code/issues/81698)** — 15 comments. A GPU process crash (exit code 101457950) on Windows destroys every running session. Reproduced on RTX 5080 Laptop GPU; no workaround cited.

6. **[#84352 — CVP-approved org still receives cyber-safeguard blocks in Claude Code](https://github.com/anthropics/claude-code/issues/84352)** — 13 comments. A Claude.ai org that passed Cyber Verification Program approval is still blocked in Claude Code; the verification portal says "Under review" despite a prior approval email. Trust/verification status evidently doesn't propagate to the CLI.

7. **[#83436 — Cyber-safeguard false positives on scientific computing](https://github.com/anthropics/claude-code/issues/83436)** — 11 comments. An IR spectrometer calibration session (Opus 5 and 4.8) is blocked on accumulated context, not on any specific prompt. Labelling legitimate scientific workloads as cyber-risk is a worrying false-positive trend.

8. **[#81693 — Opus 5 context window reported as 200k instead of 1M](https://github.com/anthropics/claude-code/issues/81693)** — 4 comments. Claude Code v2.1.216 reports `context_window_size: 200000` for `claude-opus-5`, saturating the statusline context gauge and making `/compact` appear to do nothing. Model metadata bug with visible UI consequences.

9. **[#84029 — Crash leaves terminal in mouse-tracking mode](https://github.com/anthropics/claude-code/issues/84029)** — 1 comment, but a sharp diagnosis: the TUI's restore handler is registered only on graceful exit, so a crash never emits the disable sequence, leaving raw escape sequences injected into the shell prompt on every mouse move.

10. **[#85131 — Android app silently discards typed messages when switching conversations](https://github.com/anthropics/claude-code/issues/85131)** — 1 comment, fresh bug. No draft persistence on conversation switch; especially painful with long-running agent sessions where retyping from memory is impractical.

## 4. Key PR Progress

Only **one** pull request was updated in the last 24 hours—an unusually quiet window:

- **[#77492 — fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77492)** — Author: ShiroKSH. Fixes the hookify rule engine so (1) file rules inspect content passed to Write as new text, (2) simple prompt rules map to the current `UserPromptSubmit` payload while retaining the legacy configured field, and (3) regression coverage is added for Write, Edit, and prompt rules. Root cause: rules were inferred from fields absent from the payload. This is a correctness fix for anyone relying on hook-based file modifications and prompt filtering.

Given the near-empty PR window, expect the next digest to be more representative of active contribution velocity.

## 5. Feature Request Trends

Distilling the most-requested directions across all issues:

- **Non-interruptive interaction** — Message queueing ([#50246](https://github.com/anthropics/claude-code/issues/50246), 184 👍) is the strongest signal: users want to enqueue follow-ups while an agent is mid-task rather than forcibly interrupting.
- **Session control from desktop** — Remote control of CLI sessions via Claude Desktop ([#29006](https://github.com/anthropics/claude-code/issues/29006), 119 👍) shows demand for a management layer over headless agent sessions.
- **Context durability across sessions** — Session Bridge / structured context preservation ([#62903](https://github.com/anthropics/claude-code/issues/62903)) and complaints about forgotten memories ([#81092](https://github.com/anthropics/claude-code/issues/81092)) both point to the same need: state that survives `/clear`, restarts, and long-running workflows.
- **Per-session MCP/plugin allowlists** — The Cowork/remote runner loading all plugins unconditionally ([#70564](https://github.com/anthropics/claude-code/issues/70564)) causes OOM on multi-session machines; users want scoped plugin loading.
- **Code hygiene defaults** — A fresh request to keep development history out of code comments/docstrings by default, in favor of git ([#85130](https://github.com/anthropics/claude-code/issues/85130)), reflecting annoyance at agent-generated noise in source files.

## 6. Developer Pain Points

Recurring frustrations visible in the last 24h:

- **Billing/model entitlement confusion** — Fable 5 denied on Max plans ([#79337](https://github.com/anthropics/claude-code/issues/79337)), paid invoices leaving accounts on Free ([#66558](https://github.com/anthropics/claude-code/issues/66558)), and unconsented model switches with $1,050 overcharges ([#60093](https://github.com/anthropics/claude-code/issues/60093)). Trust in cost transparency is eroding.
- **Cyber-safeguard false positives** — Both org-level verification failures ([#84352](https://github.com/anthropics/claude-code/issues/84352)) and scientific-computing false positives ([#83436](https://github.com/anthropics/claude-code/issues/83436)) suggest over-broad policy enforcement hitting legitimate users.
- **Windows reliability** — GPU process crashes killing all sessions ([#81698](https://github.com/anthropics/claude-code/issues/81698)), kernel BSODs in VS Code sessions ([#80912](https://github.com/anthropics/claude-code/issues/80912)), MSIX install failures ([#84199](https://github.com/anthropics/claude-code/issues/84199), [#83028](https://github.com/anthropics/claude-code/issues/83028)), Defender EBUSY races on plugin install ([#67595](https://github.com/anthropics/claude-code/issues/67595)), and LSP spawn failures ([#59114](https://github.com/anthropics/claude-code/issues/59114)) paint Windows as the least-polished platform.
- **Silent state loss** — Typed messages discarded on conversation switch ([#85131](https://github.com/anthropics/claude-code/issues/85131)), `/clear` rotating session IDs without re-running SessionStart hooks ([#70606](https://github.com/anthropics/claude-code/issues/70606)), and `pkill bun` destroying all workflow runs ([#69856](https://github.com/anthropics/claude-code/issues/69856)) are all variants of one theme: state disappears without warning.
- **Terminal hygiene** — Mouse-tracking mode left enabled after crashes ([#84029](https://github.com/anthropics/claude-code/issues/84029)) and interference with copy-paste ([#68602](https://github.com/anthropics/claude-code/issues/68602)) show the TUI is not restoring terminal state reliably on non-graceful paths.
- **MCP/tooling gaps** — VS Code ignoring MCP servers entirely ([#19054](https://github.com/anthropics/claude-code/issues/19054)) and plugin commands missing from background sessions ([#70596](https://github.com/anthropics/claude-code/issues/70596)) indicate integration surface remains a weak point.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-09

## Today's Highlights

This snapshot is dominated by Windows reliability fixes and backend hardening: the only release is `0.148.0-alpha.5`, while 13 PRs closed around workload identity, async hooks, and gRPC code-mode hosting. Community attention was concentrated on TUI customization, Computer Use failures on Windows, and subagent/usage accounting anomalies.

## Releases

- **[rust-v0.148.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.5)**  
  The only release in the last 24 hours. No detailed changelog was available in the source data beyond the version string.

## Hot Issues

- [#21653 — Support multi-line status line](https://github.com/openai/codex/issues/21653)  
  TUI users with long statusline configurations hit truncation. 13 comments and 59 👍 make this the most visible quality-of-life request in this cycle.

- [#27284 — Codex App SSH remote project shows “No chats” while remote threads exist in state DB](https://github.com/openai/codex/issues/27284)  
  Remote session state can diverge from the local UI, leaving users unable to see existing threads. 12 comments, 5 👍.

- [#37458 — Codex extension fails to start: “The extension couldn't load its resources”](https://github.com/openai/codex/issues/37458)  
  Windows VS Code users are blocked entirely by an extension resource-loading failure. 11 comments and high urgency.

- [#37180 — Windows Computer Use approval prompt never appears; launch_app fails with `node_repl exec context not found`](https://github.com/openai/codex/issues/37180)  
  Computer Use on Windows cannot complete app launches because the approval path breaks internally. 8 comments.

- [#37383 — Computer Use on Windows fails during app/window discovery with 0x80070003](https://github.com/openai/codex/issues/37383)  
  Another Windows Computer Use blocker, this time at the window-discovery layer. 8 comments, 4 👍.

- [#33074 — Windows Codex app causes mouse stutter during startup and task switching](https://github.com/openai/codex/issues/33074)  
  Users report system-wide stutter even after clean reinstalls, making the desktop app disruptive on Windows. 6 comments, 9 👍.

- [#33479 — Relative write rules under `:workspace_roots` recursively expand across turns until E2BIG](https://github.com/openai/codex/issues/33479)  
  Sandbox/permission configuration can balloon across turns and eventually break process spawning. 5 comments.

- [#35463 — Codex subagents drain full week quota overnight - usage counting broken](https://github.com/openai/codex/issues/35463)  
  A serious usage-accounting bug where subagent activity burns the weekly quota without accurate counting. 5 comments.

- [#37563 — Codex desktop rehydrates closed, terminal subagents as Working after restart](https://github.com/openai/codex/issues/37563)  
  Completed or aborted subagents are incorrectly shown as active after app restart, causing session confusion. 4 comments, 2 👍.

- [#37418 — CLI 0.147.0 reports “MCP startup interrupted” even though all servers initialize successfully](https://github.com/openai/codex/issues/37418)  
  A false error from the MCP startup path that makes healthy setups look broken. 4 comments.

## Key PR Progress

- [#37610 — Add workload identity token exchange support](https://github.com/openai/codex/pull/37610)  
  Adds file-backed JWT exchange for short-lived ChatGPT credentials, with token caching and refresh coalescing. Important for enterprise/automation auth flows.

- [#37607 — Prevent launch context from reaching child processes](https://github.com/openai/codex/pull/37607)  
  Treats `OPENAI_FEDERATION_RULE_ID` and `OPENAI_IDENTITY_TOKEN_FILE` as non-inheritable so model-reachable child processes don’t receive launch credentials.

- [#37530 — Implement the gRPC code-mode host service](https://github.com/openai/codex/pull/37530)  
  Exports a transport-independent gRPC code-mode host with leased sessions, nested tool-call subscriptions, completions, and notifications.

- [#37533 — Support asynchronous command hooks](https://github.com/openai/codex/pull/37533)  
  Runs async command hooks in the background with a per-session concurrency limit; previously these handlers were skipped outside `SessionEnd`.

- [#37527 — Terminate timed-out hook process trees](https://github.com/openai/codex/pull/37527)  
  Enforces process-group termination on Unix and job objects on Windows so timed-out hook descendants don’t survive.

- [#37516 — Ignore reusable command approvals for cyber models](https://github.com/openai/codex/pull/37516)  
  Filters saved `allow` prefix rules from execution policy for cyber-specialized models and models listed in `auto_review.ignore_rules`.

- [#37519 — Expose auto-review ignore rules in config requirements](https://github.com/openai/codex/pull/37519)  
  Adds `ignoreRules` to `AutoReviewRequirements` and surfaces configured ignore rules through the app-server protocol.

- [#37618 — Use step environments for Guardian approval reviews](https://github.com/openai/codex/pull/37618)  
  Ensures Guardian approval reviews use the current step environment rather than a stale turn snapshot.

- [#37641 — Use the step context for command approval prefix rules](https://github.com/openai/codex/pull/37641)  
  Reads `allow_prefix_rules` from the active step context when selecting exec policy and building approval requests.

- [#37622 — Include buffered turns when editing prompts](https://github.com/openai/codex/pull/37622)  
  Fixes prompt editing for new live turns that exist only in the replay buffer rather than in the persisted thread.

## Feature Request Trends

- **TUI/terminal UX polish**  
  Users continue to ask for better terminal behavior: multi-line status lines ([#21653](https://github.com/openai/codex/issues/21653)) and symmetric text paste alongside image paste ([#17103](https://github.com/openai/codex/issues/17103)).

- **Subagent governance and least privilege**  
  Strong demand for stricter control over subagent authority, including host-enforced monotonic permission ceilings for delegations ([#36381](https://github.com/openai/codex/issues/36381)).

- **Remote/SSH workspace parity**  
  Remote sessions need to match local behavior, especially thread visibility ([#27284](https://github.com/openai/codex/issues/27284)) and authenticated SMB/UNC workspace support ([#35476](https://github.com/openai/codex/issues/35476)).

- **Windows Computer Use reliability**  
  Multiple issues point to a need for consistent Computer Use approval and window-discovery behavior on Windows ([#37180](https://github.com/openai/codex/issues/37180), [#37383](https://github.com/openai/codex/issues/37383)).

## Developer Pain Points

- **Windows-specific instability**  
  Extension resource-load failures ([#37458](https://github.com/openai/codex/issues/37458)), mouse stutter ([#33074](https://github.com/openai/codex/issues/33074)), and Computer Use failures ([#37180](https://github.com/openai/codex/issues/37180), [#37383](https://github.com/openai/codex/issues/37383)) create a recurring Windows pain cluster.

- **Usage/rate-limit accounting is untrustworthy**  
  Subagents draining a full week quota overnight ([#35463](https://github.com/openai/codex/issues/35463)) and abnormal usage drops ([#37532](https://github.com/openai/codex/issues/37532)) erode confidence in billing/usage reporting.

- **Session and thread state desync**  
  Remote threads hidden from the UI ([#27284](https://github.com/openai/codex/issues/27284)), closed subagents rehydrating as active ([#37563](https://github.com/openai/codex/issues/37563)), and simultaneously active turns ([#34767](https://github.com/openai/codex/issues/34767)) point to broader state-management debt.

- **Sandbox/approval context confusion**  
  Recursive `:workspace_roots` expansion ([#33479](https://github.com/openai/codex/issues/33479)) and stale approval environments show that permission context handling remains fragile.

- **False-positive tooling errors**  
  Spurious MCP startup failures ([#37418](https://github.com/openai/codex/issues/37418)) and TUI scrollback repaint storms ([#37635](https://github.com/openai/codex/issues/37635)) add avoidable noise to daily workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-09

## Today's Highlights
The new nightly build (v0.56.0-nightly.20260808.gcf22ac7e8) reclassifies capacity exhaustion as a terminal error, while the PR queue brings fixes for a macOS sandbox crash, OAuth callback timeout leaks, and a long-requested "agents can call agents" capability. Community attention remains concentrated on agent reliability: the generalist agent hang and subagent MAX_TURNS being misreported as GOAL success continue to draw the most discussion.

## Releases
**v0.56.0-nightly.20260808.gcf22ac7e8**
- [Reclassifying Capacity Exhaustion as Terminal Error](https://github.com/google-gemini/gemini-cli/pull/28716) — capacity exhaustion now terminates the run explicitly instead of masquerading as a recoverable condition.
- [feat(caretaker): update Firestore schema with error and pr_number fields](https://github.com/google-gemini/gemini-cli/pull/28467) — release automation now records error context and PR numbers for better traceability.

## Hot Issues
1. **Subagent MAX_TURNS falsely reported as success** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 12 comments. A `codebase_investigator` subagent reports `Termination Reason: "GOAL"` even after hitting its turn limit without doing any analysis. This masks real failures and undermines trust in agent status reporting.
2. **Generalist agent hangs indefinitely** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 8 comments, 8 👍. Simple operations like folder creation hang forever when the CLI defers to the generalist agent; users report waiting up to an hour before cancelling. Disabling subagents is the only workaround.
3. **Shell commands stuck on "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — 4 comments, 3 👍. P1 core bug: already-completed CLI commands remain displayed as active and awaiting input, stalling the agent loop on trivial commands.
4. **Browser subagent fails on Wayland** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 4 comments. P1 platform bug blocking browser automation for Wayland users.
5. **"get-shit-done" output hook crashes the CLI** [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — 3 comments. Repeated crashes near completion when printing the user summary; P1 priority.
6. **Subagents executing without permission since v0.33.0** [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — 3 comments. A regression where subagents activate despite agents being disabled in all configs — a serious control/permission concern.
7. **Auto Memory logs content before redaction** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — 4 comments. Privacy-relevant: transcript content is sent to the extraction model before the prompt-based redaction step, and the service may log existing skill content.
8. **400 error with >128 tools enabled** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 3 comments. Users with many MCP/tools hit API limits; the agent does not scope tools to the current task.
9. **Symlinked agent files not recognized** [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 4 comments. `~/.gemini/agents/*.md` symlinks are ignored, breaking common dotfiles-management setups.
10. **Gemini under-uses skills and sub-agents** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 6 comments. Models rarely invoke custom skills/sub-agents autonomously even when descriptions clearly match the task, requiring explicit user instruction.

## Key PR Progress
1. **Allow agents to call agents** [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) — Large, help-wanted PR enabling subagent-to-subagent delegation and recursion via `tools:` frontmatter. Fixes #22092; a major step toward hierarchical agent workflows.
2. **Fix EACCES crash in resolveToRealPath** [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) — P1 fix preventing CLI startup crashes on macOS Seatbelt sandboxing when the CWD is inside a Git repository.
3. **Guard formatTruncatedToolOutput against non-positive maxChars** [#28735](https://github.com/google-gemini/gemini-cli/pull/28735) — Prevents output inflation (fixes #28620) when `maxChars ≤ 0`.
4. **Clear OAuth callback timeout on flow completion** [#28736](https://github.com/google-gemini/gemini-cli/pull/28736) — Security fix: resolves dangling timeouts and gracefully closes the callback server after authentication (fixes #28652).
5. **Improved Vertex AI 401 error messaging** [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) — Clearer DX when a standard Gemini API key is mistakenly used with Vertex AI auth.
6. **Fall back to stable models when preview 404s** [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) — Handles API keys lacking preview-model access by falling back to stable models instead of hard-failing (fixes #28600).
7. **OpenAI-compatible auth experiment** [#28737](https://github.com/google-gemini/gemini-cli/pull/28737) — Closed XL PR exploring OpenAI-compatible auth; signals community interest in cross-provider compatibility.
8. **Ignore .env and .ai files in .gitignore** [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) — P1 housekeeping PR with unit tests to prevent secret leakage into repositories.
9. **VS Code companion disposables leak fix** [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) — Closed; fixes #27790 where a stray parenthesis collapsed two registrations, leaking the `gemini.diff.accept` command and workspace-folder listeners.
10. **Nightly release automation** [#28732](https://github.com/google-gemini/gemini-cli/pull/28732) — Version bump to v0.56.0-nightly.20260808.gcf22ac7e8.

## Feature Request Trends
- **Hierarchical / multi-agent orchestration**: Strong demand for agents delegating to other agents ([#28738](https://github.com/google-gemini/gemini-cli/pull/28738), [#20195](https://github.com/google-gemini/gemini-cli/issues/20195)), with subagent trajectories visible in `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and included in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **AST-aware code intelligence**: Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore AST-aware file reads, search, and codebase mapping to reduce token noise and improve navigation precision.
- **Memory system hardening**: Requests cluster around retry backoff for low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), pre-send deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and quarantining invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Resilience and self-healing**: Browser agent session takeover/lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), stable-model fallback ([#28608](https://github.com/google-gemini/gemini-cli/pull/28608)), and flicker-free terminal resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)) point toward reliability-first improvements.
- **Security by default**: Zero-dependency OS sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) and discouraging destructive commands like `git reset --force` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) reflect growing emphasis on guardrails.

## Developer Pain Points
- **False success signals**: MAX_TURNS reported as GOAL success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and indefinite generalist-agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) erode confidence in autonomous mode.
- **Stuck interactive flows**: Shell commands remaining in "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and Vite interactive prompts hanging ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) are recurring workflow blockers.
- **Loss of control / regressions**: Subagents activating despite disabled config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and models taking destructive actions ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) point to permission and guardrail gaps.
- **Platform-specific breakage**: Wayland browser failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) and macOS Seatbelt crashes ([#28734](https://github.com/google-gemini/gemini-cli/pull/28734)) show environment-dependent instability.
- **Scaling limits**: 400 errors beyond 128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and tmp-file clutter from shell-restricted operation ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) hurt power users with large MCP setups.
- **Debugging blind spots**: Bug reports lacking subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) and invisible subagent trajectories ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) make diagnosing agent issues unnecessarily hard.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-09

## Today's Highlights
No releases or pull requests landed in the last 24 hours, but the issue tracker saw meaningful activity around Windows-specific regressions, session/resume behavior, and configuration settings that are silently ignored. The most-discussed issues center on performance degradation in long sessions, model/autopilot state not surviving `/resume`, and a Windows startup crash tied to specific log levels. Several invalid/triage issues were also closed, keeping the remaining signal relatively high.

## Releases
None in the last 24 hours.

## Hot Issues

- [**#4299 [CLOSED] Increasing typing latency over long copilot sessions**](https://github.com/github/copilot-cli/issues/4299)  
  Long sessions, especially with background agents, become nearly unusable due to severe input latency. 2 comments, 1 👍 — a strong signal that session/agent state grows expensive over time.

- [**#4285 [CLOSED] Windows: silent exit 1 at session startup when log level is none/error/warning/info/debug**](https://github.com/github/copilot-cli/issues/4285)  
  On 1.0.76-1, the CLI exits with code 1 and no output/log file for most canonical log levels; only `all` and `default` work. 2 👍 and a stark startup failure make this a high-impact Windows regression.

- [**#4256 [CLOSED] Add cache_control breakpoints to Anthropic requests**](https://github.com/github/copilot-cli/issues/4256)  
  Requests to Claude/Anthropic never set `cache_control`, forcing reprocessing of expensive system/tool/repo context on every turn. 3 👍 shows real demand for prompt-caching cost and latency wins.

- [**#4329 [CLOSED] Autopilot is not enabled when resuming a session that had autopilot enabled**](https://github.com/github/copilot-cli/issues/4329)  
  The statusline shows autopilot as active after `/resume`, but approval-required actions fail. Session state is desynchronized from the actual permission mode.

- [**#4222 [CLOSED] Regression: main pane freezes / output swallowed — infinite React/Ink render loop returns on Windows**](https://github.com/github/copilot-cli/issues/4222)  
  A regression of #2802 reappears on v1.0.72+ in the VS Code integrated terminal: the UI freezes, prompts disappear, and output is lost. Intermittent render-loop issues are especially disruptive for interactive workflows.

- [**#4405 [OPEN] Copilot Free in GitHub Codespaces: "No model available" after update**](https://github.com/github/copilot-cli/issues/4405)  
  Free-tier users in Codespaces hit `No model available` even though GitHub documents Free support. Potential causes include entitlement lookups, token isolation, or stale login state.

- [**#4397 [OPEN] Copilot CLI resume session switches back to default model**](https://github.com/github/copilot-cli/issues/4397)  
  Starting a session with `--model=gpt-5.6...` and resuming it silently falls back to the default model. Losing explicit model selection on resume breaks reproducibility.

- [**#4398 [OPEN] allowed_directories in permissions.config is never loaded**](https://github.com/github/copilot-cli/issues/4398)  
  Users configure workspace-allowed directories, but `/list-dirs` never shows them. Configuration being accepted and then ignored undermines permission control.

- [**#4401 [OPEN] Windows regression: skill tool cannot find valid skills in ~/.agents/skills**](https://github.com/github/copilot-cli/issues/4401)  
  Valid skills with `SKILL.md` are not discovered by the `skill` tool on Windows. Reported as a regression related to the previously closed #2230.

- [**#4402 [OPEN] npm bin/copilot is a loader, not a version pin**](https://github.com/github/copilot-cli/issues/4402)  
  Two invocations of the same `copilot` path served 1.0.77 then 1.0.78 with no package changes in between. `--prefer-version` works but is undocumented — a reproducibility and trust problem for CI and scripting.

## Key PR Progress
No pull requests were updated in the last 24 hours. No PR links to report.

## Feature Request Trends

- **Session/model state preservation**  
  Multiple issues ask for better persistence of session settings: autopilot should survive resume, explicit model selection should not revert to default, and the session list should restore quick-delete actions.  
  Relevant: [#4329](https://github.com/github/copilot-cli/issues/4329), [#4397](https://github.com/github/copilot-cli/issues/4397), [#4395](https://github.com/github/copilot-cli/issues/4395), [#4275](https://github.com/github/copilot-cli/issues/4275)

- **Configuration parity and reliability**  
  Users expect settings to actually apply: `banner: "once"` is ignored, `allowed_directories` is never loaded, `cli_remote_control_enabled` is inert, and ACP lacks `contextTier` parity with the interactive `/model` picker.  
  Relevant: [#4129](https://github.com/github/copilot-cli/issues/4129), [#4398](https://github.com/github/copilot-cli/issues/4398), [#4409](https://github.com/github/copilot-cli/issues/4409), [#4275](https://github.com/github/copilot-cli/issues/4275)

- **Windows platform hardening**  
  A recurring pattern of Windows-specific failures — silent startup exit, terminal render-loop freezes, PowerShell hook parsing, and broken skill discovery — signals a need for dedicated Windows testing and regression coverage.  
  Relevant: [#4285](https://github.com/github/copilot-cli/issues/4285), [#4222](https://github.com/github/copilot-cli/issues/4222), [#4399](https://github.com/github/copilot-cli/issues/4399), [#4401](https://github.com/github/copilot-cli/issues/4401)

- **Performance and prompt-cache efficiency**  
  Long sessions degrade typing latency, and Anthropic requests currently miss prompt-cache opportunities. Both point to growing demand for operational efficiency in long-lived agent sessions.  
  Relevant: [#4299](https://github.com/github/copilot-cli/issues/4299), [#4256](https://github.com/github/copilot-cli/issues/4256)

- **Clearer authentication/entitlement failures**  
  Several issues describe opaque auth failures: “No model available” on Free, bare HTTP 422 for remote control, MCP OAuth discovery failures on Enterprise, and a browser-login URL that wraps incorrectly.  
  Relevant: [#4405](https://github.com/github/copilot-cli/issues/4405), [#4409](https://github.com/github/copilot-cli/issues/4409), [#4408](https://github.com/github/copilot-cli/issues/4408), [#4400](https://github.com/github/copilot-cli/issues/4400)

- **Localization and input customization**  
  Users request a zh-CN UI option and the ability to disable/remap the “Ctrl+C twice to exit” behavior, reflecting demand for more accessible customization.  
  Relevant: [#4407](https://github.com/github/copilot-cli/issues/4407), [#4394](https://github.com/github/copilot-cli/issues/4394)

## Developer Pain Points

- **Windows is a recurring source of regressions.** Silent exits, render-loop freezes, PowerShell hook incompatibilities, and broken skill lookups all landed in recent releases, making Windows reliability a top concern.

- **Settings are accepted but silently ignored.** `allowed_directories`, `banner: "once"`, log-level values, remote-control flags, and autopilot resume state all show the same failure mode: the CLI appears configured, but behavior does not match.

- **Session state loss interrupts workflows.** Resuming a session should restore model, permission mode, and view state. Losing autopilot or the selected model forces users to redo setup and weakens trust in `/resume`.

- **Auth/entitlement errors are opaque.** Users get bare HTTP 422s, “No model available,” or MCP OAuth failures without clear remediation paths, increasing support burden and user confusion.

- **Version drift through the npm loader is dangerous for automation.** Not knowing whether a script gets 1.0.77 or 1.0.78 from the same installed path makes reproducible agent pipelines difficult, especially when version-pinning flags are undocumented.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-09

## Today's Highlights
No new releases or pull requests landed in the last 24 hours. Community attention is focused on two long-running threads: a long-awaited feature request for a persistent memory system and a newly reported critical bug involving runaway garbled token generation. The memory-system request continues to gather discussion, while the bug report describes a severe single-step generation failure that consumed 88k tokens over ~53 minutes.

## Hot Issues
Only two issues were updated in the last 24 hours; both are notable.

- **[#2597 — Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step (step e6f3748b)](https://github.com/MoonshotAI/kimi-cli/issues/2597)**  
  Reported by kdp123, this is a critical reliability issue: during a normal interactive session, the model ran for ~3,214 seconds (≈53 minutes) and produced 88,114 tokens of incoherent, repetitive output including multilingual fragments and broken Markdown. No comments yet, but the severity makes this a top candidate for maintainer triage. It directly impacts user trust and token cost.

- **[#1283 — Enhancement: Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  Originally opened by CatKang in February, this remains one of the most discussed enhancement requests (25 comments). The ask is for a comprehensive memory system supporting both automatic memory (AI-managed notes) and manual memory (user-defined instructions) to retain project patterns and preferences across sessions. The continued activity suggests strong user demand for persistent context in CLI workflows.

## Key PR Progress
No pull requests were updated or merged in the last 24 hours.

## Feature Request Trends
The dominant feature direction reflected in current issue activity is **persistent context and memory**. The memory-system request (#1283) covers automatic and manual memory, project pattern retention, and cross-session user preferences. This signals growing user expectations that CLI coding assistants evolve from stateless session tools into long-term collaborative agents.

## Developer Pain Points
- **Runaway/misbehaving generation**: Issue #2597 highlights a serious failure mode where the model loops into non-terminating, token-wasting gibberish. Developers will likely demand better generation guards, max-token limits, or early-termination heuristics.
- **Loss of context across sessions**: The ongoing interest in #1283 indicates users are frustrated by having to re-explain project conventions and preferences every session. The demand for durable memory is a recurring pain point.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-09

## Today’s Highlights

No new release shipped in the last 24 hours, but the project saw a concentrated batch of TUI/plugin PRs and continued high engagement on long-running UX issues. The strongest community signal remains the `/goal` session-lifecycle feature request, while operations-focused reports about multi-GB SQLite growth and non-retrying transient network errors are gaining traction. A duplicate cluster of bug reports about the OpenCode Go relay injecting a leading space into `deepseek-v4-flash` is the most urgent provider-compatibility story today.

## Releases

No new releases in the last 24 hours.

## Hot Issues

- **Add native session goals with /goal** — [#27167](https://github.com/anomalyco/opencode/issues/27167)  
  The highest-signal feature request: 128 👍 and 69 comments. Users want a persistent session goal/lifecycle mechanism instead of relying on custom slash commands.

- **Cannot copy and paste in opencode CLI** — [#13984](https://github.com/anomalyco/opencode/issues/13984)  
  55 comments make this one of the most-engaged open bugs. The UI reports “copied to clipboard,” but pasting yields nothing — a daily-workflow blocker.

- **Slow startup** — [#14965](https://github.com/anomalyco/opencode/issues/14965)  
  Startup became slow around v1.2.1, but only in Ghostty; other terminals remain instant. Points to a terminal-detection or renderer initialization regression.

- **Unbounded growth of the `event` table** — [#33356](https://github.com/anomalyco/opencode/issues/33356)  
  Long-lived instances show `opencode.db` reaching 13GB+, mostly from `message.updated.1` snapshots. No retention or compaction exists, creating urgent operational risk.

- **OpenAI Authorize failed** — [#30533](https://github.com/anomalyco/opencode/issues/30533)  
  Desktop OAuth authorization against OpenAI fails during the browser step on v1.15.12. Blocks basic provider setup for affected users.

- **Sessions fail on transient network errors instead of retrying** — [#30611](https://github.com/anomalyco/opencode/issues/30611)  
  Only `ECONNRESET` is treated as retryable; DNS, TLS, socket-close, and other transient failures kill the assistant turn. Community wants the existing retry policy broadened.

- **Step-cap assistant message causes 400 on Claude thinking models** — [#32548](https://github.com/anomalyco/opencode/issues/32548)  
  Appending “MAXIMUM STEPS REACHED” as an assistant-role message is interpreted as response prefill by Anthropic, breaking thinking-enabled models.

- **`deepseek-v4-flash` still broken on Console Go** — [#41306](https://github.com/anomalyco/opencode/issues/41306)  
  Verified on 2026-08-09: the gateway still forwards a leading space before the model name, causing HTTP 400. Multiple duplicate reports (#41300, #41314, #41322) converge on the same root cause.

- **Multiple opencode instances share the same session** — [#31307](https://github.com/anomalyco/opencode/issues/31307)  
  Running two instances in the same project causes both terminals to display identical session content via SQLite. Dangerous for parallel or side-by-side work.

- **Add/Remove MCP servers from the TUI dialog** — [#38993](https://github.com/anomalyco/opencode/issues/38993)  
  Runtime MCP controls exist over HTTP but are missing from the TUI. Users want add/remove/connect/disconnect with config persistence without leaving the terminal.

## Key PR Progress

- **Provide SDK v2 for plugins** — [#12042](https://github.com/anomalyco/opencode/pull/12042)  
  Adds v1 and v2 plugin SDK clients while keeping the legacy `client` intact, letting plugin authors migrate incrementally. Resolves #7641.

- **Add agent default variant handling in TUI and desktop** — [#7156](https://github.com/anomalyco/opencode/pull/7156)  
  Respects an agent’s configured model variant when the current model supports it. Closes #22065.

- **Region structure for plugin slot placement** — [#41189](https://github.com/anomalyco/opencode/pull/41189)  
  Replaces position-encoded plugin slot names with a structured tree of host parts, allowing plugins to claim positions relative to actual UI regions.

- **Authorize file mutations before locking** — [#41202](https://github.com/anomalyco/opencode/pull/41202)  
  `write`, `edit`, and `patch` now request permission before acquiring process-global path locks, reducing lock contention during approvals and validating paths after authorization.

- **Show session branches in vertical tabs** — [#41342](https://github.com/anomalyco/opencode/pull/41342)  
  Displays non-default VCS branches as `project:branch` on session tab metadata rows, while keeping default branches hidden.

- **Flush plugin reload generations** — [#41309](https://github.com/anomalyco/opencode/pull/41309)  
  Makes `PluginSupervisor.flush` wait for the current plugin activation generation, including hot reloads, and fixes a deadlock-prone regression test.

- **Isolate lifecycle and theme tests** — [#41310](https://github.com/anomalyco/opencode/pull/41310)  
  Stabilizes seven flaky TUI tests on Linux and Windows by removing a process-global Bun module mock and isolating invalid-theme fallback cases.

- **Escape literal wildcards and anchor patch insertions** — [#41335](https://github.com/anomalyco/opencode/pull/41335)  
  Fixes wildcard matching and patch insertion anchor behavior reported in #41333.

- **Add fish shell completion support** — [#41336](https://github.com/anomalyco/opencode/pull/41336)  
  Adds proper fish completion templates; fixes #41232 where fish users received bash/zsh completion scripts.

- **Write prettier-stable generated manifests** — [#41343](https://github.com/anomalyco/opencode/pull/41343)  
  Formats `.httpapi-codegen.json` through Prettier at write time, fixing a v2 CI failure caused by the generate bot.

## Feature Request Trends

- **First-class session goals/lifecycle**: The `/goal` proposal (#27167, 128 👍) is the clearest signal that custom slash commands are not enough; users want persistent session-level state and intent tracking.
- **MCP management and reliability**: Requests range from TUI-based MCP server controls (#38993) to fixing duplicate MCP process spawning on startup (#31554). Runtime MCP control is becoming a baseline expectation.
- **Desktop/CLI feature parity**: Reports like plugin slash commands failing in Desktop (#34776, #41339) and missing Windows PowerShell 7 MSIX discovery (#41321) show users expect the desktop shell to match CLI behavior.
- **Input ergonomics and file support**: Users want Office file drag-and-drop (#27689), clickable wrapped links in Kitty (#35649), and readable mouse selection in light mode (#41281).
- **Cost transparency**: Cost tracking shows $0.00 for Chinese OpenAI-compatible providers such as GLM, DeepSeek, Qwen, and MiMo (#34877), highlighting a gap in provider-agnostic spend tracking.

## Developer Pain Points

- **Terminal-specific UX bugs keep surfacing**: Copy/paste in the CLI (#13984, 55 comments), gibberish output on exit (#20989, #29021), Kitty wrapped links (#35649), light-mode selection (#41281), and Ghostty slow startup (#14965) form a recurring category of terminal compatibility issues.
- **Long-running reliability is fragile**: The 13GB SQLite event-table growth (#33356), duplicate MCP processes (#31554), shared sessions across instances (#31307), and non-retrying transport errors (#30611) all hurt long-lived sessions.
- **Provider integration remains a top frustration**: Repeated reports of the OpenCode Go relay mangling `deepseek-v4-flash` (#41300, #41306, #41314, #41322), Moonshot/Kimi hangs (#41273), and missing `finish_reason` for `gpt-5.6-luna` (#40420) indicate provider compatibility is still a major support burden.
- **Some previous fixes are being challenged**: The fact that #41306 explicitly verifies #41211 did not fix the underlying issue, with curl-level evidence, suggests users are actively validating fixes and expecting root-cause resolution rather than partial patches.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-09

## Today’s Highlights
No new Pi release landed in the past 24 hours. Community attention remains concentrated on `openai-codex` connection reliability (#4945) and on auto-compaction failing to trigger before provider overflow (#6879, #7821). Meanwhile, a healthy batch of PRs advanced on provider fixes (DeepSeek `max_tokens`, incomplete-stop handling), TUI copy behavior, and extension lifecycle improvements.

## Releases
No new versions in the last 24 hours.

## Hot Issues

- **[#4945 – openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** — 76 comments · 31 👍  
  Long-running `gpt-5.5` turns intermittently hang on `Working...` with no streamed text, no tool call, and no error. The only recovery is Escape, which records an aborted assistant turn. This remains the most-discussed open issue and signals a growing pain point for ChatGPT-subscription OAuth users.

- **[#6879 – Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — 15 comments · 15 👍  
  A session on `gpt-5.6-sol` ran for over 2 hours in one agentic turn; the footer climbed past the compaction threshold and kept going until the provider rejected the request at 373k tokens. Community strongly agrees compaction should be checked after every agent step, not only at turn boundaries.

- **[#7821 – Auto-compaction waits for agent_end during long tool loops](https://github.com/earendil-works/pi/issues/7821)** — 3 comments  
  Confirms the root cause of #6879: compaction is only evaluated after the whole agent loop emits `agent_end`. A long uninterrupted tool loop can keep sending provider requests after crossing the threshold.

- **[#7820 – openai-codex: stream requests have no retryProviderRequest wrapper; mid-stream disconnects are always fatal](https://github.com/earendil-works/pi/issues/7820)** — 2 comments  
  Measured on 0.83.0: roughly 30% of long-thinking turns (3–25 min) died with transport errors like `WebSocket closed 1006`. Non-streaming requests have retry logic, but streaming requests do not — a key reliability gap.

- **[#7782 – Invalid tool call from Bedrock poisoned pi session](https://github.com/earendil-works/pi/issues/7782)** — 2 comments  
  A Bedrock-generated tool call with an empty key (`""`) was accepted, persisted, and replayed on every subsequent turn, bricking the session. Highlights the need for validation/sanitization of tool arguments before execution.

- **[#7839 – Regular-mode TUI duplicates rows after transcript growth](https://github.com/earendil-works/pi/issues/7839)** — 1 comment  
  In default (non-fullscreen) mode, the TUI accumulates stale copies of the widget dock, footer, and overlay rows after transcript growth while a custom overlay is open.

- **[#7836 – Edit fuzzy match misses lines with differences in whitespace length](https://github.com/earendil-works/pi/issues/7836)** — 2 comments  
  `normalizeForFuzzyMatch` does not collapse or strip whitespace, causing `edit`’s `oldText` to fail even when content is identical. Impacts smaller models that struggle with exact whitespace reproduction.

- **[#7832 – Mermaid component fails to render diagrams containing the `:::className` class-assign syntax](https://github.com/earendil-works/pi/issues/7832)** — 1 comment  
  Flowcharts using `:::primary` throw `dropped, expected a link`. The root cause is suspected in `packages/coding-agent/src/modes/interactive/components`.

- **[#7837 – Fullscreen TUI: mouse selection silently overwrites the system clipboard (OSC 52, target c); no opt-out](https://github.com/earendil-works/pi/issues/7837)** — 2 comments  
  Dragging with the primary mouse button immediately writes to the system clipboard via OSC 52 and flashes “Copied!” with no modifier key and no setting to disable it. A UX and security concern for fullscreen users.

- **[#7734 – Print mode with extensions loaded hangs at exit when a subagent was spawned](https://github.com/earendil-works/pi/issues/7734)** — 2 comments  
  pi 0.84.0/0.83.0 with 14 extensions (including pi-subagents) prints the final answer and then never exits, sitting at 0% CPU. Reproduced on Node 22.22.1 / Linux.

## Key PR Progress

- **[#7610 – feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)**  
  Adds LLM Gateway (an OpenRouter-style router) as built-in `openai-completions` providers, contributed by the LLM Gateway team. Replaces the auto-closed #7480.

- **[#7713 – feat: stream assistant and config with telemetry](https://github.com/earendil-works/pi/pull/7713)**  
  Implements `StreamAssistant` / `StreamAssistantConfig` with `telemetryContext` for harness v2, marked as in-progress.

- **[#7834 – feat(coding-agent): annotate --version with runtime (bun/node/deno)](https://github.com/earendil-works/pi/pull/7834)**  
  Makes `pi --version` output e.g. `0.84.1 (node)`, helping issue reporters immediately distinguish runtime-specific problems. Closes #7244.

- **[#7833 – fix(examples): change notify extension from agent_end to agent_settled](https://github.com/earendil-works/pi/pull/7833)**  
  Fixes premature “Ready for input” notifications by using `agent_settled` instead of `agent_end`, which fires before retries/compaction/continuations finish.

- **[#7811 – fix(ai): send max_tokens to native DeepSeek](https://github.com/earendil-works/pi/pull/7811)**  
  DeepSeek silently ignores `max_completion_tokens`; this PR switches native DeepSeek to the documented `max_tokens` field.

- **[#7823 – feat: A-level capabilities from oh-my-pi (stream rules, subagent tools, advisor, cross-session memory)](https://github.com/earendil-works/pi/pull/7823)**  
  Ports four agent capabilities from the oh-my-pi ecosystem into Pi core, split into focused commits, including time-traveling stream rules and subagent tooling.

- **[#7817 – fix(ai): treat incomplete reason 'length' as a length stop, not an error](https://github.com/earendil-works/pi/pull/7817)**  
  OpenAI-compatible providers like Doubao/Volcengine Ark return `incomplete_details.reason = 'length'`; this PR aligns `mapStopReason()` so hitting the output token limit is a normal stop instead of an error.

- **[#7801 – feat(coding-agent): lazily load uncommon syntax grammars](https://github.com/earendil-works/pi/pull/7801)**  
  Experimental refactor of syntax highlighting to lazy-load grammars, reducing startup/UI cost while preserving the public highlight API.

- **[#7721 – fix(tui): avoid unwanted newlines when copying in fullscreen](https://github.com/earendil-works/pi/pull/7721)**  
  Fixes mouse selection in fullscreen mode copying wrapped visual rows as separate lines; now tracks original row boundaries to preserve content exactly.

- **[#7810 – fix(coding-agent): reject concurrent compaction calls](https://github.com/earendil-works/pi/pull/7810)**  
  Prevents the TUI crash `Cannot read properties of undefined (reading 'signal')` from double-pressing `/compact` or its keybinding.

## Feature Request Trends

- **Provider flexibility**: Multiple logins for a single provider (#7814), Meta Model API / Muse Spark support (#7543), Cloudflare Workers AI Gateway transport (#7838), and LLM Gateway integration (PR #7610) show a clear push toward broader and more flexible LLM provider coverage.

- **TUI ergonomics**: Users consistently want finer control and safer defaults in the terminal UI: configurable mouse wheel scroll step (#7765), line-by-line transcript scrolling (#7830), scrollable slash-command descriptions (#7827), and opt-out for OSC 52 clipboard overwrite (#7837).

- **Settings profiles**: Requests for multiple settings profiles or per-project switching (#7813) reflect growing demand for multi-context workflows.

- **Session management improvements**: Allow deleting the active session (#7818) and showing user messages immediately before agent processing (#7819) aim to reduce friction in interactive sessions.

- **Extension API enrichment**: Extensions want message identity in markdown transformers (#7828), extension-side turn termination, caller-controlled RPC timeouts (#7824), and reliable lifecycle hooks (PR #7833).

## Developer Pain Points

- **Connection / transport reliability** is the dominant frustration, especially for `openai-codex` streaming: mid-stream disconnects are fatal, retry logic is missing for streams, and hangs require Escape (#4945, #7820).

- **Context-window management is fragile**: auto-compaction triggers too late or not at all during long agent/tool loops, leading to hard provider rejections (#6879, #7821).

- **Tool-argument validation gaps**: Invalid tool calls from providers like Bedrock can poison sessions permanently (#7782).

- **Cross-platform config friction**: Invalid JSON in `settings.json` (e.g. unescaped Windows paths) is silently ignored and produces misleading “bash not found” errors on Windows (#7829).

- **TUI copy/selection behavior** continues to generate bug reports: unwanted newlines when copying fullscreen (PR #7721) and clipboard overwrites without opt-out (#7837).

- **Session/extension lifecycle bugs** remain common: print-mode hangs with subagents, stale context after reload, duplicate extension binding in RPC replacement, and concurrent compaction crashes (#7734, #7816, #7831, #7810).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-09

## Today's Highlights

Qwen Code released v0.21.8, restoring autofix support for fork PRs and enabling compression-cache sharing across OpenAI, Gemini, and Vertex AI. Meanwhile, the community is actively pushing toward multi-agent coordination and Web Shell–based desktop/browser integration, while maintainers continue hardening CI automation and shell-security boundaries.

## Releases

- **v0.21.8** — Restored real-time autofix support for pull requests opened from forks by bridging review events to credentialed workflows ([#8676](https://github.com/QwenLM/qwen-code/pull/8676)). Also enabled compression cache sharing for OpenAI, Gemini, and Vertex AI. No other releases were published in the last 24 hours.

## Hot Issues

- [Build a lower-maintenance desktop app around Web Shell #8092](https://github.com/QwenLM/qwen-code/issues/8092) — Feature request with 6 comments. The community wants a desktop experience that reuses Web Shell instead of maintaining a separate desktop UI and product implementation.

- [RFC: Native coordination for independent Qwen sessions #8718](https://github.com/QwenLM/qwen-code/issues/8718) — 4 comments. Proposes an experimental leader/worker coordination model, with structured result collection and runtime observation.

- [Cross-session messaging #8724](https://github.com/QwenLM/qwen-code/issues/8724) — 4 comments. Suggests allowing sessions on the same machine to discover and message each other through an explicit, fail-closed gate.

- [Main CI failed: E2E Tests on 3037744602e9 #8756](https://github.com/QwenLM/qwen-code/issues/8756) — 5 comments. Auto-filed CI failure; a main-branch E2E run failed before test results were reported.

- [Main CI failed: E2E Tests — cli/extensions-install.test.ts #8766](https://github.com/QwenLM/qwen-code/issues/8766) — 4 comments. Specific failure installing a local Qoder plugin; autofix is in progress and has been approved.

- [Chrome 'Allow remote debugging?' consent dialog re-appears with chrome-devtools MCP #8737](https://github.com/QwenLM/qwen-code/issues/8737) — 4 comments. macOS + MCP integration annoyance where Chrome re-prompts on every session despite `--autoConnect`.

- [OTEL_METRICS_EXPORTER=otlp silently disables metrics export #8697](https://github.com/QwenLM/qwen-code/issues/8697) — 3 comments. A shared OTel env var breaks qwen-code's native metrics while traces continue to flow.

- [VS Code settings schema rejects supported prompt hooks #8752](https://github.com/QwenLM/qwen-code/issues/8752) — 3 comments. The generated VS Code schema does not accept documented `prompt` hooks even though the core runtime runs them.

- [Bare-URL hyperlink swallows trailing full-width/CJK punctuation #8750](https://github.com/QwenLM/qwen-code/issues/8750) — 3 comments. Terminal UI bug where URLs followed by CJK punctuation extend the click target and visible underline too far.

- [Explicit DO_NOT_TRUST loses to ancestor TRUST_FOLDER #8627](https://github.com/QwenLM/qwen-code/issues/8627) — 3 comments. Security bug where an untrusted workspace can override folder trust and inject the `qwen serve` bearer token.

## Key PR Progress

- [feat(ci): A/B deterministic gate rejections against the pre-round ref #8765](https://github.com/QwenLM/qwen-code/pull/8765) — Re-runs failing checks on the pre-round branch to distinguish pre-existing failures from regressions, avoiding wasted autofix rounds.

- [feat(ui): word-wise drag after double-click, line-wise extension after triple-click #8739](https://github.com/QwenLM/qwen-code/pull/8739) — Extends VP-mode mouse text selection with common editor drag behavior.

- [feat(daemon): add batch skill toggle API #8664](https://github.com/QwenLM/qwen-code/pull/8664) — Adds a capability-gated daemon endpoint to enable/disable up to 100 loaded Skills in one request, preserving per-target errors.

- [fix(core): close read-only classifier bypasses via line continuation and ${var@P} #8590](https://github.com/QwenLM/qwen-code/pull/8590) — Fixes shell-classifier bypasses that could allow otherwise read-only commands to execute programs.

- [fix(serve): stop usage_update frames from flooding the demo event log #8762](https://github.com/QwenLM/qwen-code/pull/8762) — Treats `usage_update` frames as a live context meter instead of raw unrecognized SSE events on the `/demo` page.

- [fix(workflows): make replay journal durable #8735](https://github.com/QwenLM/qwen-code/pull/8735) — Makes workflow replay state a versioned checkpoint contract with serialized writes and safe recovery.

- [feat(cli): surface the posted review link from /review submit #8770](https://github.com/QwenLM/qwen-code/pull/8770) — Reads `html_url` from the Create Review response so the review link is deterministic output.

- [fix(core): sweep peer socket files left behind by killed sessions #8736](https://github.com/QwenLM/qwen-code/pull/8736) — Cleans stale peer socket files; stacked on #8728 → #8730 → #8733.

- [fix(external-context): read the response body with a reader, not for-await #8764](https://github.com/QwenLM/qwen-code/pull/8764) — Rewrites `readBoundedBody` with an explicit `getReader()` loop and adds missing behavioral tests.

- [feat(web-shell): add model-specific reasoning controls #8675](https://github.com/QwenLM/qwen-code/pull/8675) — Introduces a reasoning-controls registry for Thinking/Effort options across Core, ACP, daemon, SDK, and WebShell.

## Feature Request Trends

- **Multi-agent / session coordination** — The strongest theme: cross-session messaging ([#8724](https://github.com/QwenLM/qwen-code/issues/8724)), native coordination RFC ([#8718](https://github.com/QwenLM/qwen-code/issues/8718)), and moving `/review` orchestration onto the workflow engine ([#8769](https://github.com/QwenLM/qwen-code/issues/8769)).

- **Browser / desktop / Web Shell integration** — Requests to reuse Web Shell for a low-maintenance desktop app ([#8092](https://github.com/QwenLM/qwen-code/issues/8092)) and a Qwen WebBridge for direct browser control similar to Kimi WebBridge ([#8699](https://github.com/QwenLM/qwen-code/issues/8699)).

- **Terminal UX refinements** — Word/line-wise mouse selection ([#8738](https://github.com/QwenLM/qwen-code/issues/8738)), better `/clear` blocking messages ([#8741](https://github.com/QwenLM/qwen-code/issues/8741)), and URL/punctuation rendering fixes ([#8750](https://github.com/QwenLM/qwen-code/issues/8750)).

- **Workflow engine adoption** — Users and maintainers increasingly propose moving orchestration, review steps, and session coordination into deterministic workflow code.

## Developer Pain Points

- **CI and release workflow fragility** — Main-branch E2E failures ([#8756](https://github.com/QwenLM/qwen-code/issues/8756), [#8766](https://github.com/QwenLM/qwen-code/issues/8766)) and a failed nightly release ([#8771](https://github.com/QwenLM/qwen-code/issues/8771)) indicate ongoing pain in test/release infrastructure.

- **Config/schema parity issues** — Settings exist in docs and UI but are rejected or ignored in practice, e.g. VS Code prompt-hook schema ([#8752](https://github.com/QwenLM/qwen-code/issues/8752)) and `dynamicCommandTranslation` having no runtime effect ([#8748](https://github.com/QwenLM/qwen-code/issues/8748)).

- **Cross-platform regressions** — macOS-specific permission test failures ([#8753](https://github.com/QwenLM/qwen-code/issues/8753)), Chrome MCP consent prompts ([#8737](https://github.com/QwenLM/qwen-code/issues/8737)), and Wayland clipboard handling remain recurring themes.

- **Security trust boundaries** — Folder-trust override ([#8627](https://github.com/QwenLM/qwen-code/issues/8627)) and read-only git sub-commands executing configured programs ([#8575](https://github.com/QwenLM/qwen-code/issues/8575)) show continued concern around trust and shell safety.

- **Observability/telemetry friction** — OpenTelemetry environment variables silently disabling metrics ([#8697](https://github.com/QwenLM/qwen-code/issues/8697)) and `usage_update` flooding debug logs ([#8762](https://github.com/QwenLM/qwen-code/pull/8762)) highlight monitoring pain points.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-08-09

## Today's Highlights

v0.9.5 went public, consolidating the terminal app into a single compiled runtime while formally deprecating the legacy `deepseek-tui` npm package in favor of `codewhale`. The v0.9.5 milestone tracker is now driving a broad "extract the monolith into `crates/core`" effort, alongside a cluster of multi-session control, durable-plan, and turn-stop-honesty issues. Community momentum is visible too: a first-time contributor added Mistral AI as a first-class provider route, and the runtime HTTP API gained goal, verifier-receipt, memory, MCP, and skill lifecycle endpoints.

## Releases

- **[v0.9.5](https://github.com/Hmbown/CodeWhale/releases)** — Codewhale is now the public product from Shannon Labs; `codewhale` remains the lowercase technical identifier for the command, npm package, and release assets. Per the release PR, v0.9.5 consolidates the terminal app into one compiled runtime while keeping both the `codewhale` and `codew` commands, removes default turn ceilings that interrupted long work, and aligns the updater, installers, release assets, website, and package surfaces around that contract.
- **[v0.9.4](https://github.com/Hmbown/CodeWhale/releases)** — Ships the same Codewhale rebranding notice as v0.9.5; the legacy `deepseek-tui` package is deprecated and receives no further releases. Users migrating from v0.8.x legacy `deepseek` / `d…` are directed to the new package surface.

## Hot Issues

- **[#4022 — Define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)** (8 comments) — The TUI sidebar is the primary place for subagent status, expand/collapse, and cancellation, but those controls must not be trapped in the TUI if a future cloud app or remote workbench appears. The most-discussed issue this cycle; it is folded into the `crates/core` extraction epic (#5261).
- **[#4785 — Dead-code sweep: 464 `#[allow(dead_code)]` attributes are hiding drift](https://github.com/Hmbown/CodeWhale/issues/4785)** (6 comments) — Across 143 files, the compiler is structurally unable to report dead code or drift. The issue quantifies the damage: stripping the attributes and running `cargo check` produces a large new dead-code surface.
- **[#4326 — Perf: explain and bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326)** (6 comments) — The 32-worker PTY benchmark proves high fan-out is responsive, but the one-shot RSS sample increased again after cancellation. Maintainers want to distinguish allocator high-water retention from a real worker/runtime leak.
- **[#4416 — Isolate stale failed-agent state between CodeWhale sessions in the same workspace](https://github.com/Hmbown/CodeWhale/issues/4416)** (4 comments) — A second instance in the same workspace renders red failed-agent rows from an unrelated earlier session, even though the status line reports `Active 0 · Tasks 0 · Runs 0 · Workers 0`. Reliability/UX bug with broad impact.
- **[#4029 — Planning to create an interface similar to Reasonix?](https://github.com/Hmbown/CodeWhale/issues/4029)** (4 comments) — A long-running community question about adopting a Reasonix-like interface; still open with no maintainer commitment.
- **[#5034 — Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034)** (3 comments) — Switching to OpenAI can leave the default model set to `gpt-5.5` inherited from a different route. Points to provider and model resolution not updating as one coherent unit.
- **[#5272 — Prompt-scoped file recovery (restore workspace from a prior prompt)](https://github.com/Hmbown/CodeWhale/issues/5272)** (2 comments) — Restore the workspace files a turn wrote from session snapshots, not just transcript scrollback. Must confirm before destructive restore and cooperate with git.
- **[#5270 — Unified tasks surface (shell + subagents + durable workers)](https://github.com/Hmbown/CodeWhale/issues/5270)** (2 comments) — One operator-facing list of "things still running for this session": background shells, subagents, Fleet/lane workers, and workflow runs. Idle chrome should admit when background work is alive.
- **[#5271 — Session peek (list / peek / answer approvals without full attach)](https://github.com/Hmbown/CodeWhale/issues/5271)** (2 comments) — From the live TUI, list other threads, peek last activity and pending approvals, and answer approvals or dispatch/stop without losing the current composer context.
- **[#5267 — Turn-stop honesty (status that says ending must end)](https://github.com/Hmbown/CodeWhale/issues/5267)** (2 comments) — Users lose trust when the footer says "ending"/"stopping" but the model keeps talking. Four resume paths (subagent drain, REPL fence, goal…) need to honor the stop signal; the author prefers deleting false guards over adding more status prose.

## Key PR Progress

- **[PR #5292 — chore(release): prepare v0.9.5](https://github.com/Hmbown/CodeWhale/pull/5292)** — Ships the consolidated single-runtime contract, removed turn ceilings, and aligned release/website/package surfaces.
- **[PR #5300 — refactor(core): own primary request preparation](https://github.com/Hmbown/CodeWhale/pull/5300)** — Replaces the unused synthetic `ChatRequest` scaffold in `codewhale-core` with the production `MessageRequest` DTO family previously owned by the TUI crate, adding a pure `prepare_primary_turn_request` constructor — the first concrete step of the core-extraction epic.
- **[PR #5301 — fix(tui): make compaction live and pressure-aware](https://github.com/Hmbown/CodeWhale/pull/5301)** — Manual `/compact` is now nonblocking, serialized with typed lifecycle IDs, with truthful persistent status labels. Aligns 128K/272K/1M auto-compaction eligibility with full conservative request pressure.
- **[PR #5295 — feat: add Mistral AI as a first-class provider route](https://github.com/Hmbown/CodeWhale/pull/5295)** — First-time contributor @xavierpestel-ai adds `provider = "mistral"`, `CODEWHALE_PROVIDER=mistral`, and `codewhale --provider mistral`, defaulting to `mistral-code-latest`.
- **[PR #5133 — feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)** — Adds `GET /v1/threads/{id}/goal` and lifecycle transitions so managed clients can read and drive active-goal state through the canonical runtime boundary.
- **[PR #5132 — Runtime API: expose verifier receipts and evidence beyond the aggregate counter](https://github.com/Hmbown/CodeWhale/pull/5132)** — Three read-only endpoints under `/v1/fleet/runs/{run_id}/` (receipts, evidence, task-level detail) so clients can see which task failed and why, not just a `verifier_failed` counter.
- **[PR #5131 — feat: Runtime API memory endpoints](https://github.com/Hmbown/CodeWhale/pull/5131)** — Bounded memory inspection plus lifecycle controls under `/v1/memory`, gated behind the existing `require_runtime_token` middleware.
- **[PR #5130 — feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)** — Adds create/update/remove routes for MCP servers, removing the need for clients to edit TOML/JSON directly.
- **[PR #5257 — feat(config): add `model = auto` for prompt-based tier selection](https://github.com/Hmbown/CodeWhale/pull/5257)** — Community PR by @skyzhao1223 that auto-selects `deepseek-v4-pro` (complex tasks) vs `deepseek-v4-flash` (simple tasks) from the user's prompt.
- **[PR #5258 — fix(tui): stop stale cached session title from pinning "New Session"](https://github.com/Hmbown/CodeWhale/pull/5258)** — Community fix by @SparkofSpike for titles stuck at "New Session": a stale in-memory metadata cache overwrote the computed title and was only refreshed at snapshot end.

Also notable: **[PR #5205](https://github.com/Hmbown/CodeWhale/pull/5205)** stabilizes Chinese IME candidate positioning under Tabby via low-motion rendering and bounded redraw cadence, and **[PR #5294](https://github.com/Hmbown/CodeWhale/pull/5294)** makes telemetry flush only at shutdown so mid-session opt-outs are respected.

## Feature Request Trends

- **Multi-session and remote control surfaces** — The largest v0.9.5 cluster: CLI/TUI parity (#4022), session peek (#5271), a unified tasks surface (#5270), cross-session state isolation (#4416), and a durable plan artifact with line comments (#5269). The direction is clear: the TUI should be one operator surface among many, not the only one.
- **Durable session artifacts and recovery** — Prompt-scoped file recovery (#5272), durable plan artifacts (#5269), and a structured compaction survival contract (#4394) all ask for the same thing: work product that survives process state loss and transcript replay.
- **Turn-lifecycle UX honesty** — Turn-stop honesty (#5267) and mid-turn control with queue/send-now/Esc-keep-draft (#5268) reflect frustration with a composer that locks during turns and status chrome that lies.
- **Provider flexibility and neutrality** — Mistral as a first-class route (#5295), `model = auto` tier selection (#5257), provider-profiled Responses API behavior (#5092–#5094), and renaming `DeepSeekClient` internals to provider-neutral types (#5103) show the project moving decisively beyond DeepSeek-only branding.
- **Architectural extraction** — The v0.9.5 milestone tracker (#5266) is anchored by moving the engine, prompt assembly, and role tiers into `crates/core` (#5261, #5263) and stopping the monolith build tax (#5249).
- **Automation completion** — The cron-watcher gap (#5181): one-shot reminders, 5-field cron, and lightweight session watchers on top of the existing ~80%-complete durable automation system.

## Developer Pain Points

- **Monolith build tax** — `codewhale-tui` is 682,959 lines across 620 files, ~86% of the workspace, and recompiles as one unit; the build-SHA stamp invalidates tui+cli on every commit, and 25 integration-test binaries each recompile it (#5249).
- **Dead-code drift** — 464 `#[allow(dead_code)]` attributes across 143 files make the compiler blind to unused code, hiding structural decay (#4785).
- **Memory not settling** — RSS rises again after cancelling a 32-worker storm; maintainers cannot yet distinguish allocator high-water retention from a real leak (#4326).
- **Stale state leaking across sessions** — Failed-agent rows from an earlier session appear in a fresh instance (#4416); cached session titles pin "New Session" forever (#5258).
- **Silent configuration degradation** — Unknown model IDs silently fall back to the 128K legacy context window, compacting 1M-window models at a quarter size with no warning (#5244); switching providers can retain an unrelated default model (#5034).
- **Distrust in status chrome** — The footer says "ending"/"stopping" while the model keeps talking (#5267), and the "Space to expand" reasoning hint stays visible after the response completes (#5291).
- **Subagent ceremony** — The child-brief output contract (`SUMMARY`/`EVIDENCE`/`CHANGES`/`RISKS`/`BLOCKERS` + sentinel) is heavier than needed for small children (#5189).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*