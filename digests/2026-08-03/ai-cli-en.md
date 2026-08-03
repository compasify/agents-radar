# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 01:46 UTC | Tools covered: 10

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

# AI CLI Tools — Cross-Tool Comparison Report
**Date:** 2026-08-03 · **Coverage:** 10 major AI CLI development tools

---

## 1. Ecosystem Overview

The AI CLI ecosystem has passed the "demo novelty" phase and is now deep into agentic-workflow hardening: on a day with zero significant releases, the combined trackers logged **130+ issue updates and ~70 PR updates** across nine active projects. Community feedback has shifted from "what should the agent do" to "why did the agent silently fail" — with silent state loss, misleading success signals, token-wasteful polling, and Windows-specific breakage dominating across every tool. The clearest convergence is around **persistence, memory, and multi-agent observability**, while differentiation increasingly lives in desktop/IDE integration depth, provider neutrality, and release discipline. Notably, the open-source and independent tools (Pi, OpenCode, Qwen Code, DeepSeek TUI) now out-pace the enterprise-backed tools in raw PR velocity, while platform reliability — especially Windows — remains the ecosystem's shared blind spot.

---

## 2. Activity Comparison

*Issue/PR counts are "updated in the last 24h" per each project's digest. "Hot" = notable issues highlighted in the digest, not necessarily the full total.*

| Tool | Issues Updated | PRs Updated | Release Status | Notable Signal |
|---|---|---|---|---|
| **Claude Code** | 50 | 3 | No release | High issue volume; Windows BSOD (#32870) and CRLF (#2805) persist |
| **OpenAI Codex** | 10+ hot | 6 | No release; internal PRs merged | Linux desktop request at 906 👍 (#11023); token-waste complaints rising |
| **Gemini CLI** | 10 hot (P1/P2) | 10 | ✅ Nightly `v0.55.0-nightly.20260803` | 75-update Dependabot wave incl. `@google/genai` 1.30→2.13 |
| **GitHub Copilot CLI** | 10 hot | 0 | No release | `view` tool regression (#4202); ACP approval transparency (#4335) |
| **Kimi Code CLI** | 4 | 1 | No release | Low activity; Remote Control (#1282) +24 👍, Memory System (#1283) in discussion |
| **OpenCode** | 10+ hot | 10 | No release | Memory Megathread at 121 comments; speech-to-text 170 👍 |
| **Pi** | **34** | **19** | No release | Highest PR velocity; compaction (#6879) and provider resilience dominate |
| **Qwen Code** | 10 hot | 10 | ✅ Nightly `v0.21.3-nightly.20260803` | P1 data-loss bug: silent desktop session deletion (#8400) |
| **DeepSeek TUI** | 10 hot | 10 | No release — **v0.9.4 blocked** | Maintainer-filed release-blocker on agent spawn surface (#5123) |
| **Grok Build** | 0 | 0 | — | **Inactive** |

**Interpretation:** Pi, Qwen, Gemini, and DeepSeek are the fastest movers this cycle. Claude Code has the largest issue surface. Grok Build is dormant.

---

## 3. Shared Feature Directions

| Direction | Tools (evidence) | Specific Community Need |
|---|---|---|
| **Persistent memory & context across sessions** | Kimi (#1283), OpenCode (#20695, 121 comments), Gemini CLI (#26522/26525 auto-memory), Claude Code (#40175 global instructions reverting) | Cross-session project memory; no silent config/state loss; bounded, deterministic memory extraction |
| **Multi-agent orchestration & observability** | Claude Code (#24537 hierarchy dashboard), OpenAI Codex (#35259 multi-agent polling), Gemini CLI (#22323 subagent status misreports, #22598 trajectory sharing), OpenCode (#38966 subagent abort), Kimi (#2578 swarm reliability), DeepSeek TUI (fleet control PRs #5124–#5133) | Unified visibility into subagents; ability to cancel/steer; accurate success/failure reporting; reliable parallel batch recovery |
| **Remote control & cross-device session continuity** | Kimi (#1282, 24 👍), OpenAI Codex (#27565, #36244), Claude Code (#66265 one-way remote input) | Continue a local CLI session from mobile/browser; bidirectional sync; not just "share a transcript" |
| **Windows / platform parity** | Claude Code (#32870 BSOD, #2805 CRLF), OpenAI Codex (#10090 elevated sandbox, #23198 slow Desktop), Copilot CLI (#4328 WSL2 keybindings, #2286 symlinks), Qwen Code (#8400 desktop session deletion, #8385 ConEmu flicker), Pi (#7321 Termux paste), Gemini CLI (#21983 Wayland) | Windows and Linux terminal/desktop behavior must match macOS quality; WSL2/Wayland/Termux are now first-class environments |
| **Token/credit efficiency & compaction** | OpenAI Codex (#13733 full-history polling calls, #35259 19.8% token volume on status polls), Gemini CLI (#26522 infinite auto-memory retries), Pi (#6879 auto-compaction fires too late, #7020 post-compaction stalls) | Stop burning credits on background/wait cycles; compact proactively before context overflow; never re-read the same low-signal data repeatedly |
| **MCP/plugin trust & portability** | OpenAI Codex (#19425 MCP tools not in Desktop), OpenCode (#40125 per-server MCP trust), DeepSeek TUI (#5130 MCP server CRUD), Pi (#7468 Claude Code SKILL.md compatibility), Claude Code (plugin PRs #83374, #26056) | Per-server trust decisions; portable agent/skill formats across tools; MCP tools exposed consistently in all surfaces (TUI, Desktop, headless) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Strength | Key Weakness |
|---|---|---|---|---|---|
| **Claude Code** | Enterprise agentic workflows | Teams on Anthropic models, IDE-centric | Plugin/hook ecosystem, Cowork, deep VS Code integration | Broadest workflow ecosystem; mature permission model | Large issue surface; CRLF/BSOD platform debt; silent state reverts |
| **OpenAI Codex** | Desktop-app agent with OS-level reach | Pro users on OpenAI models | Native desktop app, Computer Use, OS sandboxing | Deepest OS/UI integration; ambitious Desktop feature set | Credit-burn complaints; Codex Diff broken; Windows/WebView fragility |
| **Gemini CLI** | Reliability-first agent engineering | GCP/Gemini developers | Behavioral eval suite (76 evals), nightly releases, P1 triage | Best-in-class agent-reliability discipline; security-focused dependency hygiene | Hangs/deadlocks still common; subagent status trust issues |
| **Copilot CLI** | Conservative, stable companion | GitHub-centric developers, ACP hosts (Zed) | Tight GitHub integration; ACP interop | Predictable, low-churn; good for scripted automation | Slow iteration; patch regressions erode trust; fewer features |
| **Kimi Code CLI** | Lightweight personal CLI | Moonshot-model users | Minimal surface, TUI-only | Simple; clear roadmap signal (memory, remote) | Very low activity; 4 issues/day; swarm reliability concerning |
| **OpenCode** | Open-source provider-agnostic TUI | Self-hosters, plugin developers | Plugin hooks, MCP trust, TUI-first, Desktop companion | Strong community (121-comment megathread); speech-to-text demand (170 👍) | Memory/disk leaks; SQLite instability; Desktop onboarding hangs |
| **Pi** | Multi-provider neutrality + terminal craft | Power users across many providers | Native binary (Go), provider adapters, agent framework PRs | Highest PR velocity; best multi-provider coverage; meticulous terminal rendering | Compaction/context management still immature; provider divergence bugs |
| **Qwen Code** | Server-scale agent infrastructure | Alibaba cloud / serving deployments | Daemon workspace ownership, `/serve` scaling, Web Shell, telemetry | Strong production scaling story; Maven review tooling; hook hardening | Session persistence bugs (P1 data loss); Windows desktop gaps |
| **DeepSeek TUI** | Fleet orchestration | Multi-agent advanced users | Fleet roster, goal-loop watchdogs, bounded MCP | Ambitious fleet/sub-agent control; provider-neutral refactor underway | v0.9.4 release-blocked; config shadowing; silent `deepseek run` failure |
| **Grok Build** | — | — | — | — | No observed activity |

---

## 5. Community Momentum & Maturity

**Tier 1 — Enterprise-backed, high maturity, large issue surface:**
**Claude Code** has the largest and most vocal community (50 issues/day) and the most mature plugin ecosystem, but its velocity is now consumed by bug triage rather than new features. **OpenAI Codex** has the strongest single-feature demand signal (906 👍 for Linux desktop) and active internal PR merges, yet user sentiment is increasingly strained by token economics and broken diff review.

**Tier 2 — Rapidly iterating, strong open-source momentum:**
**Pi** is the velocity leader (34 issues / 19 PRs) with a clear engineering agenda: provider resilience, durable sessions, and terminal correctness. **Gemini CLI** ships nightly with disciplined dependency management and a serious reliability/testing culture. **Qwen Code** matches Gemini's nightly cadence and is building genuinely differentiated infrastructure (daemon ownership, review verification, telemetry of execution outcomes). **DeepSeek TUI** is highly active but momentarily blocked by its own quality gate — a sign of hardening rather than stagnation. **OpenCode** sustains a large community around a controversial topic (memory leaks), which is productive pressure: maintainers now demand heap snapshots instead of LLM-suggested fixes.

**Tier 3 — Quiet or constrained:**
**Copilot CLI** is stable but release-static (0 PRs); its role may be consolidating into GitHub's broader agent platform. **Kimi Code CLI** has a clear roadmap (memory, remote control) but minimal current throughput. **Grok Build** is dormant.

---

## 6. Trend Signals

1. **Token/credit efficiency is the new performance metric.** Codex users quantifying 19.8% of raw token volume going to status polling (#35259) and full-history calls per background poll (#13733), plus Gemini's infinite low-signal memory retries (#26522), signal that **agentic tools will be judged on cost-per-completed-task**, not just task success. Expect "polling-free" background execution and defer-compaction-until-prompt designs (Pi #7498) to become marketing differentiators.

2. **Silent failure is the #1 trust killer across every tool.** Claude's global-instructions reverting, Gemini's `GOAL`-status-on-MAX_TURNS misreports, Qwen's silent session deletion, DeepSeek's `doctor`-passes-but-`run`-fails, and OpenCode's 0-byte cache-write accounting all share one shape: **the tool reports success while data or intent is lost.** The winning tools will surface *negative signals* (abort reasons, skipped work, config shadowing) explicitly.

3. **Memory is the next battleground — but leaks come first.** OpenCode's megathread, Gemini's auto-memory retry/redaction issues, Kimi's memory proposal, and Claude's Cowork state-revert bug all point to the same conclusion: **persistent context is the most desired feature and the most damaging when it silently corrupts.** Deterministic redaction, bounded extraction, and observable memory state will separate the tools.

4. **Cross-device remote control is the strongest unmet cross-platform demand.** Kimi got 24 👍 in a single day, Codex tracks two related requests, and Claude has users complaining about one-way remote input. This is the ecosystem's answer to "my agent runs on my laptop but my life is on my phone" — expect mobile/browser session handoff to become table stakes by 2027.

5. **Windows is the reliability battleground.** BSODs (Claude), broken sandboxes (Codex), ConEmu flicker (Qwen), WSL2 keybinding leaks (Copilot), silent desktop session deletion (Qwen), and slow Desktop apps (Codex) span every tier. **No tool has solved Windows agent reliability.** The first to do so has a clear moat, especially as enterprise Windows adoption of AI CLIs grows.

6. **Provider neutrality is becoming a survival trait.** Pi added DeepInfra and LLM Gateway in one day; DeepSeek TUI is renaming `DeepSeekClient` to provider-neutral types; OpenCode and Gemini support multiple model backends. Even first-party tools are being pressured by users mixing models (e.g., Claude Code with Opus 4.8, Codex with GPT-5.6 contexts). **Tool lock-in is dead; model choice is the default expectation.**

7. **Approval transparency is a security red flag being raised early.** Copilot's ACP mode showing summaries instead of shell commands (#4335), Claude's `bypassPermissions` not propagating to subagents (#83421), and Gemini's permission regression since v0.33.0 (#22093) all point to a single industry requirement: **every agent action must be auditable and every permission boundary must be predictable** — especially as agents grow more autonomous (YOLO modes, fleet orchestration, computer use).

---

**Bottom line for technical decision-makers:** Choose Claude Code or Gemini CLI for enterprise reliability and workflow maturity today; watch Pi and Qwen Code as the fastest-improving open alternatives; avoid betting on any tool that cannot demonstrate a credible answer to Windows reliability, token-cost transparency, and silent-failure detection — those three issues dominate every community tracker and will drive consolidation in the coming quarters.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
*Data as of 2026-08-03 · anthropics/skills*

## 1. Top Skills Ranking
*Ranked by PR discussion activity.*

| Skill / PR | Functionality | Discussion Highlights | Status |
|---|---|---|---|
| [#1298 — skill-creator eval fix](https://github.com/anthropics/skills/pull/1298) | Fixes `run_eval.py` reporting 0% recall by installing the eval artifact as a real skill; also fixes Windows stream reading, trigger detection, and parallel workers. | The most active PR. Directly addresses the widely reproduced `recall=0%` failure from issue #556. | Open |
| [#514 — document-typography skill](https://github.com/anthropics/skills/pull/514) | Adds typographic quality control for generated documents: orphan words, widow paragraphs, and numbering misalignment. | Attracts broad interest because it targets a near-universal AI document-generation defect. | Open |
| [#538 — fix(pdf): case-sensitive file references](https://github.com/anthropics/skills/pull/538) | Fixes 8 case-mismatched references in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). | Small but important reliability fix for case-sensitive filesystems. | Open |
| [#486 — ODT skill](https://github.com/anthropics/skills/pull/486) | Creates, fills, reads, and converts OpenDocument files (.odt/.ods), including ODT-to-HTML conversion. | Seen as a natural extension of the existing DOCX/PDF skill family. | Open |
| [#210 — Improve frontend-design skill](https://github.com/anthropics/skills/pull/210) | Rewrites the frontend-design skill for clarity and actionability so instructions are executable within one conversation. | Discussion focuses on making skill guidance operational rather than conceptual. | Open |
| [#83 — skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Adds two meta-skills: one evaluates skill structure/docs quality, the other audits security and trust boundaries. | Reflects growing demand for meta-level quality and security tooling. | Open |
| [#541 — fix(docx): tracked change w:id collision](https://github.com/anthropics/skills/pull/541) | Prevents document corruption when adding tracked changes to DOCX files that already contain bookmarks. | Important bugfix for OOXML shared ID-space collisions. | Open |
| [#539 — fix(skill-creator): YAML special-char warnings](https://github.com/anthropics/skills/pull/539) | Adds pre-parse validation for unquoted `description` fields containing YAML-special characters. | Addresses silent frontmatter truncation in skill definitions. | Open |

## 2. Community Demand Trends
*Distilled from top Issues.*

- **Security & trust boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (43 comments) is the highest-activity issue: community skills distributed under the `anthropic/` namespace create a trust-boundary vulnerability. Demand is high for official namespace verification and safer skill distribution.
- **Org-wide skill sharing** — [#228](https://github.com/anthropics/skills/issues/228) asks for direct org-level skill sharing instead of manual `.skill` file transfer; plus [#189](https://github.com/anthropics/skills/issues/189) highlights duplicate skills from overlapping plugin installs.
- **Skill-creator reliability** — Multiple issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061)) report the eval/optimization loop is broken, especially on Windows. The community wants dependable skill authoring and testing tooling.
- **Context-window efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill eagerly injecting ~156k tokens in one call. Demand is growing for lean, low-overhead skills.
- **New skill directions** — Most-anticipated proposals include **agent memory** ([#1329 compact-memory](https://github.com/anthropics/skills/issues/1329)), **agent governance/safety** ([#412](https://github.com/anthropics/skills/issues/412)), **enterprise document security** ([#1175 SharePoint](https://github.com/anthropics/skills/issues/1175)), and **exposing Skills as MCPs** ([#16](https://github.com/anthropics/skills/issues/16)).

## 3. High-Potential Pending Skills
*Open PRs with active discussion that are strong merge candidates.*

- [#1298 — skill-creator eval fix](https://github.com/anthropics/skills/pull/1298) — Unblocks the entire skill-description optimization workflow; high potential because it resolves a named, widely reproduced bug.
- [#514 — document-typography skill](https://github.com/anthropics/skills/pull/514) — Lightweight, broadly useful quality-control skill for AI-generated documents.
- [#486 — ODT skill](https://github.com/anthropics/skills/pull/486) — Completes office-format coverage; likely to merge as a companion to existing document skills.
- [#723 — testing-patterns skill](https://github.com/anthropics/skills/pull/723) — Comprehensive testing guidance (Testing Trophy, unit, React, e2e); aligns with strong community interest in test generation/quality.
- [#525 — pyxel skill](https://github.com/anthropics/skills/pull/525) — Adds retro/pixel-art game development workflow via `pyxel-mcp`; well-scoped MCP-driven skill.
- [#1367 — self-audit skill](https://github.com/anthropics/skills/pull/1367) — Mechanical file verification plus four-dimension reasoning quality gate; a concrete answer to the quality-assurance demand.
- [#1479 — plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479) — Addresses planning-artifact lifecycle management, a pain point raised in issue #1417.

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not for more domain skills, but for making the skill ecosystem itself **trustworthy, reliable, and low-overhead** — fixing skill-creator eval bugs, preventing namespace/security abuse, and controlling context-window bloat.

---

# Claude Code Community Digest — 2026-08-03

## Today's Highlights
No new Claude Code release landed in the last 24 hours, but the issue tracker remained active with 50 issues updated. The most attention centered on a Windows BSOD triggered by `claude.exe` (#32870), the long-running CRLF-on-Linux file creation bug (#2805), and Cowork global instructions silently reverting (#40175). Several model-level regressions around effort/thinking settings and a silent degenerate repetition loop also generated fresh reports.

## Hot Issues

- **[BUG] claude.exe triggers Windows BSOD via Wof.sys during directory listing** — [#32870](https://github.com/anthropics/claude-code/issues/32870)  
  38 comments. A Windows kernel-level crash during `NtQueryDirectoryFileEx` is as severe as it gets; low upvote count but high impact for Windows users.

- **[BUG] Claude Code consistently creates files with Windows line endings on Linux** — [#2805](https://github.com/anthropics/claude-code/issues/2805)  
  44 comments, 33 👍. Open since July 2025, this remains one of the most upvoted and actively discussed bugs. CRLF output on Linux breaks shell scripts with “No such file or directory” errors despite `CLAUDE.md` instructions.

- **[BUG] Cowork: Global instructions silently revert to older version after saving** — [#40175](https://github.com/anthropics/claude-code/issues/40175)  
  32 comments, 20 👍. Silent config/state loss undermines trust in the Cowork workflow; the community response shows this is not an isolated edge case.

- **[FEATURE] Session URL appended to commit messages and PR descriptions by default — should be opt-in** — [#66504](https://github.com/anthropics/claude-code/issues/66504)  
  11 comments, 44 👍. Strong developer consensus that attaching session URLs to commits/PRs should not be the default behavior.

- **[BUG] Opus 4.8 `xhigh` effort fails when thinking is disabled despite `alwaysThinkingEnabled: true`** — [#76689](https://github.com/anthropics/claude-code/issues/76689)  
  10 comments, 11 👍. Intermittent HTTP 400 failures on VS Code versions 2.1.205–2.1.207; points to a mismatch between IDE settings and model API constraints.

- **[FEATURE] Agent Hierarchy Dashboard — unified real-time visualization for multi-agent workflows** — [#24537](https://github.com/anthropics/claude-code/issues/24537)  
  14 comments, 17 👍. Community support for better observability into subagent and multi-agent task execution, covering both TUI and desktop.

- **[BUG] Degenerate repetition loop — single token repeated ~32k times until max_tokens** — [#82803](https://github.com/anthropics/claude-code/issues/82803)  
  4 comments. The model silently emits a repeated token until hitting the output limit, with no error surfaced. Reproduced across two model generations, making it a concerning model-integrity issue.

- **[BUG] `bypassPermissions` mode does not propagate to Task/Agent subagents** — [#83421](https://github.com/anthropics/claude-code/issues/83421)  
  1 comment. Subagents fall back to `default` permission prompts even when the main session runs in `bypassPermissions` mode, which breaks automation workflows.

- **[BUG] Bundled ugrep balloons to 9–14 GB RSS compiling a bounded-interval BRE** — [#83342](https://github.com/anthropics/claude-code/issues/83342)  
  2 comments. A resource-exhaustion bug in the bundled `ugrep` used by agent `grep` calls; 9–14 GB RSS is serious for local development machines.

- **[BUG] `claude-opus-5` substitutes wrong Hangul syllables in generated text** — [#82588](https://github.com/anthropics/claude-code/issues/82588)  
  3 comments. Korean output is internally valid but semantically wrong, and other models reportedly show zero occurrences. Notably difficult to detect without language-specific review.

## Key PR Progress
Only 3 PRs were updated in the last 24 hours. All are listed below.

- **[docs(plugin-dev): add MessageDisplay hook guidance](https://github.com/anthropics/claude-code/pull/83374)** — Documents the `MessageDisplay` hook event, which is supported but omitted from the bundled Hook Development skill, including streaming-field explanations.

- **[Fix code-review plugin posting to GitHub without `--comment` flag](https://github.com/anthropics/claude-code/pull/26056)** — Strengthens guardrails so the code-review plugin stops at terminal output when `--comment` is not provided; adds behavioral rules and explicit conditionals.

- **[fix(plugin-dev): make skill-reviewer frontmatter valid YAML](https://github.com/anthropics/claude-code/pull/48343)** — Rewrites the `skill-reviewer` description as a YAML block scalar so the frontmatter parses cleanly without changing trigger behavior.

## Feature Request Trends
The most common feature directions across recent issues are:

- **Multi-agent observability and orchestration** — A unified agent hierarchy dashboard ([#24537](https://github.com/anthropics/claude-code/issues/24537)) and native cross-instance communication between sessions ([#69912](https://github.com/anthropics/claude-code/issues/69912)) reflect growing multi-agent usage.

- **Opt-in defaults and avoiding imposed metadata** — Developers want session URLs in commit messages/PR descriptions to be opt-in ([#66504](https://github.com/anthropics/claude-code/issues/66504)) and default-off delegation lines to be suppressible when delegation is enabled ([#83439](https://github.com/anthropics/claude-code/issues/83439)).

- **Command/UX customization** — Requests include pinning and reordering `/`-command autocomplete ([#83441](https://github.com/anthropics/claude-code/issues/83441)) and customizing the `ExitPlanMode` approval button text ([#83438](https://github.com/anthropics/claude-code/issues/83438)).

- **Platform parity** — Users on Windows ARM64 want `/desktop` session handoff support, currently unavailable ([#83437](https://github.com/anthropics/claude-code/issues/83437)).

## Developer Pain Points
Several recurring frustrations appear across the latest issue activity:

- **Silent state and data loss** — Global instructions reverting ([#40175](https://github.com/anthropics/claude-code/issues/40175)), mobile drafts discarded in background ([#71603](https://github.com/anthropics/claude-code/issues/71603)), queued messages lost on session switch ([#77010](https://github.com/anthropics/claude-code/issues/77010)), and one-way remote-control input ([#66265](https://github.com/anthropics/claude-code/issues/66265)) all share a common theme: users are not notified when input/config is lost.

- **Platform-specific breakage** — Windows BSODs ([#32870](https://github.com/anthropics/claude-code/issues/32870)), CRLF on Linux ([#2805](https://github.com/anthropics/claude-code/issues/2805)), desktop crashes near usage limits ([#83403](https://github.com/anthropics/claude-code/issues/83403)), and desktop worktrees missing submodule initialization ([#83411](https://github.com/anthropics/claude-code/issues/83411)) show that platform consistency remains a pain point.

- **Model/API configuration friction** — Effort-level errors when thinking is disabled ([#76689](https://github.com/anthropics/claude-code/issues/76689), [#83364](https://github.com/anthropics/claude-code/issues/83364)), degenerate repetition loops ([#82803](https://github.com/anthropics/claude-code/issues/82803)), wrong Hangul substitution ([#82588](https://github.com/anthropics/claude-code/issues/82588)), and false safety-policy flags ([#83440](https://github.com/anthropics/claude-code/issues/83440)) add unpredictability to coding workflows.

- **Permission/subagent inconsistency** — `bypassPermissions` not propagating to subagents ([#83421](https://github.com/anthropics/claude-code/issues/83421)) creates a confusing gap between configured permissions and actual behavior.

- **Resource and maintenance issues** — The bundled `ugrep` memory balloon ([#83342](https://github.com/anthropics/claude-code/issues/83342)) and git-marketplace plugins silently failing to auto-update ([#73673](https://github.com/anthropics/claude-code/issues/73673)) indicate ongoing tooling-health concerns.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-03

## Today's Highlights
No new Codex releases landed in the last 24 hours, but community activity remained high around two recurring themes: **token waste during background polling** and **Codex Diff crashes in VS Code**. Several internal PRs were merged, including fixes for SQLite thread metadata preservation, portable Agent Plugin installation, and rollout budget unit capture.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues

- [**#11023**](https://github.com/openai/codex/issues/11023) — **Codex desktop app for Linux**  
  The most-upvoted open issue (👍 906) requests native Linux desktop support. The author notes the macOS app is nearly unusable on their Mac due to issue #10432, making a Linux desktop build a practical necessity for their workflow.

- [**#35058**](https://github.com/openai/codex/issues/35058) — **Codex Diff crashes in VS Code on macOS**  
  Opening the Codex Diff tab after edits shows “Oops, an error has occurred” across every repository. Reported on Apple Silicon with VS Code 1.128.0, this is a serious blocker for IDE users relying on diff review.

- [**#13733**](https://github.com/openai/codex/issues/13733) — **Background process polling wastes tokens**  
  Every `write_stdin` poll during running background processes triggers a full API turn with complete history. The community response highlights this as a major credit drain for long-running builds/tests.

- [**#35481**](https://github.com/openai/codex/issues/35481) — **Codex Diff “Oops” on Windows (closed)**  
  A closely related Windows report of the same Codex Diff failure was closed, but the 46 👍 reaction shows the issue is widespread and still frustrating users across platforms.

- [**#31860**](https://github.com/openai/codex/issues/31860) — **GPT-5.6 Sol context capped at 372K vs 1.05M spec**  
  Pro users report the model catalog caps effective context far below the advertised 1.05M. This severely impacts large-repo and long-session workflows.

- [**#35259**](https://github.com/openai/codex/issues/35259) — **Desktop re-enters model during wait/status polling**  
  In multi-agent and Ultra sessions, model turns that only poll status accounted for **19.8% of raw local token volume**. This is another data point in the growing “polling burns credits” complaint pattern.

- [**#23198**](https://github.com/openai/codex/issues/23198) — **Codex Desktop on Windows extremely slow**  
  Users report day-to-day sluggishness isolated to the Codex app itself, not the machine. The issue has 47 👍 and remains open, indicating a broad Windows performance problem.

- [**#10090**](https://github.com/openai/codex/issues/10090) — **`elevated_windows_sandbox` makes all commands fail**  
  Agent commands return `(no output)` with `CreateProcessAsUserW failed: 5` in logs. This makes the elevated sandbox unusable on Windows for affected users.

- [**#25178**](https://github.com/openai/codex/issues/25178) — **Windows Computer Use screenshot fails on Win10 22H2**  
  `get_window_state` fails before capture with `SetIsBorderRequired failed: 0x80004002`. Computer Use can interact with windows but cannot see them, blocking visual automation.

- [**#19425**](https://github.com/openai/codex/issues/19425) — **Custom stdio MCP tools not exposed to Desktop threads**  
  MCP servers are discovered via `/mcp` and `tools/list` succeeds, but the tools never reach Desktop threads or `tool_search`. This is a critical gap for Desktop users building MCP-based workflows.

## Key PR Progress
Only six PRs were updated in the last 24 hours; all are listed below.

- [**#36641**](https://github.com/openai/codex/pull/36641) *(closed)* — **Capture rollout budget units from response usage**  
  Parses `codex_rollout_budget_units` from Responses API usage into `TokenUsage`, while keeping the provider-only value out of serialized protocol schemas and TypeScript representations.

- [**#36635**](https://github.com/openai/codex/pull/36635) *(closed)* — **Expose onboarding hints in login completion notifications**  
  Allows an allowlisted `.onboarding_entrypoint=life_sciences` OAuth state suffix and returns parsed callback metadata without weakening validation of unknown suffixes.

- [**#36632**](https://github.com/openai/codex/pull/36632) *(closed)* — **Preserve SQLite thread metadata during goal mutations**  
  Fixes a bug where setting/clearing a thread goal could reconcile an indexed rollout and overwrite SQLite-only metadata such as the thread preview. Skips reconciliation when SQLite already references the same entity.

- [**#36544**](https://github.com/openai/codex/pull/36544) *(closed)* — **Support portable Agent Plugins throughout installation**  
  Updates packaging/install paths to handle schema-declared `plugin.json` roots and dotted names/versions that do not fit the legacy directory-safe version format.

- [**#31781**](https://github.com/openai/codex/pull/31781) *(open, code-reviewed)* — **Bound executor-controlled HTTP response buffering**  
  Fixes an unbounded-memory risk from remote exec-servers by limiting retained response data beyond the existing 256-frame backpressure mechanism.

- [**#31817**](https://github.com/openai/codex/pull/31817) *(open)* — **Update models.json**  
  Automated model catalog update.

## Feature Request Trends

- **Linux desktop app support** ([#11023](https://github.com/openai/codex/issues/11023)) remains the single most requested feature, driven by macOS power/performance issues.
- **Remote control and cross-device sync** ([#27565](https://github.com/openai/codex/issues/27565), [#36244](https://github.com/openai/codex/issues/36244)) — users want Claude Code-style remote control from mobile and reliable conversation sync across devices.
- **Session data lifecycle management** ([#6015](https://github.com/openai/codex/issues/6015), [#22411](https://github.com/openai/codex/issues/22411), [#34863](https://github.com/openai/codex/issues/34863)) — requests for customizable retention, avoiding full session-file deserialization on every list call, and preventing giant JSONL rollouts.
- **IDE feature parity** ([#35763](https://github.com/openai/codex/issues/35763)) — missing “Max” reasoning effort in VS Code while available in the app, plus the broken Codex Diff experience across platforms.
- **Extensibility via MCP/plugins** ([#19425](https://github.com/openai/codex/issues/19425), [#36544](https://github.com/openai/codex/pull/36544)) — users want MCP server tools fully exposed in Desktop and portable Agent Plugins installable without legacy layout constraints.

## Developer Pain Points

- **Codex Diff is broken for many users** on both macOS ([#35058](https://github.com/openai/codex/issues/35058)) and Windows ([#35481](https://github.com/openai/codex/issues/35481)), with no clear fix yet.
- **Credit/token burn from polling and background work** is a top concern: full-history API calls during process polling ([#13733](https://github.com/openai/codex/issues/13733)), model re-entry for wait/status ([#35259](https://github.com/openai/codex/issues/35259)), and app-server loading all sessions ([#22411](https://github.com/openai/codex/issues/22411)).
- **Windows sandbox and WebView reliability issues** keep surfacing: elevated sandbox command failures ([#10090](https://github.com/openai/codex/issues/10090)), Computer Use screenshot errors ([#25178](https://github.com/openai/codex/issues/25178)), silent app termination when closing browser tabs ([#34239](https://github.com/openai/codex/issues/34239), [#35210](https://github.com/openai/codex/issues/35210)).
- **App performance and memory bloat** on Windows ([#23198](https://github.com/openai/codex/issues/23198)) and app-server memory growth from image-heavy sessions ([#34863](https://github.com/openai/codex/issues/34863)) are becoming systemic concerns.
- **Remote/sync and WSL friction**: valid WSL repositories misdetected as non-Git ([#35119](https://github.com/openai/codex/issues/35119)) and remote conversations not syncing across devices ([#36244](https://github.com/openai/codex/issues/36244)).
- **Long-standing undo issue** ([#12978](https://github.com/openai/codex/issues/12978)) remains unresolved, with the community expressing frustration over repeated “cannot undo” reports across versions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-03

## Today's Highlights
Agent reliability remains the dominant theme as maintainers triage a backlog of P1 bugs around subagent termination misreports, hangs, and browser-agent failures on Wayland. A large Dependabot wave landed including a major `@google/genai` SDK bump, plus useful fixes for leaked VS Code disposables and `[Thought: true]` text leakage. Nightly `v0.55.0` (20260803) shipped with no user-facing changes beyond the automated version bump.

## Releases
- **[v0.55.0-nightly.20260803.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)** — Automated nightly release; infrastructure-only changes. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments, 2👍) — A `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the turn limit before doing any analysis. This actively masks interruptions and is the most-commented issue today.
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 8👍) — Deferring to the generalist agent hangs indefinitely on trivial tasks like folder creation; the top community report by reaction count.
3. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3👍) — Simple CLI commands hang while still marked active, blocking the session despite the process having finished.
4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments, 1👍) — Browser subagent terminates with `GOAL` but fails on Wayland display servers; reproducibility still needs triage.
5. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 3 comments) — Users report subagents like `generalist` activating despite agents being disabled in all configs — a permissions regression with real security implications.
6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments) — Low-signal transcripts are never marked processed, so the background extractor rewinds and re-reads them forever, wasting tokens.
7. **[#26525 — Auto Memory needs deterministic redaction and reduced logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 4 comments, security) — Transcript content is sent to the model before prompt-based redaction, and the service can log existing skills — a privacy concern for local transcripts.
8. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments) — The CLI errors out when tool count exceeds model limits; users want smarter tool scoping rather than a hard failure.
9. **[#20079 — Symlinked agent files are not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2, 4 comments) — `~/.gemini/agents/filename.md` symlinks are silently ignored, breaking a common dotfiles workflow.
10. **[#22465 — Stuck at interactive prompt creating Vite app](https://github.com/google-gemini/gemini-cli/issues/22465)** (P2, 2 comments) — The agent deadlocks at interactive scaffolding prompts; maintainers ask for a behavioral eval to cover this path.

## Key PR Progress
1. **[#28624 — Prevent boolean thought parts leaking as `[Thought: true]` text](https://github.com/google-gemini/gemini-cli/pull/28624)** (P2, area/agent) — Fixes internal thought parts with boolean `thought` fields appearing in model output; addresses #23525.
2. **[#28526 — Stop leaking VS Code IDE companion disposables](https://github.com/google-gemini/gemini-cli/pull/28526)** (P2, area/core) — A stray parenthesis collapsed two `context.subscriptions.push()` calls into a comma expression; fixes leaked `gemini.diff.accept` command and workspace-folder subscriptions (#27790).
3. **[#28438 — Trim tool names before registry lookup](https://github.com/google-gemini/gemini-cli/pull/28438)** — Whitespace-padded tool names now resolve correctly, with a regression test.
4. **[#28535 — Use `resolveRipgrepPath` in perf test global setup](https://github.com/google-gemini/gemini-cli/pull/28535)** (P1) — Replaces the removed `canUseRipgrep()` helper to keep performance tests compatible with the current ripgrep resolver.
5. **[#28534 — CI: retry staging-tmp dist-tag removal after npm publish](https://github.com/google-gemini/gemini-cli/pull/28534)** (P1, non-interactive) — Wombat/npm acknowledges large publishes before the dist-tag is queryable; adds a retry script to fix nightly release flakiness (#28533).
6. **[#27070 — Optimize virtual list2](https://github.com/google-gemini/gemini-cli/pull/27070)** (P1, XL, stale) — Long-running branch optimizing `VirtualizedList` scrolling, checkpointing, and plan-mode test flakiness; a large terminal-rendering improvement waiting for review.
7. **[#28637 — chore(deps): bump js-yaml 4.1.1 → 5.2.2](https://github.com/google-gemini/gemini-cli/pull/28637)** — Major YAML parser version with bugfixes.
8. **[#28635 — chore(deps): bump undici 7.10.0 → 8.9.0](https://github.com/google-gemini/gemini-cli/pull/28635)** — Includes high-severity security fixes; important for network-layer hardening.
9. **[#28631 — chore(deps): bump @google/genai 1.30.0 → 2.13.0](https://github.com/google-gemini/gemini-cli/pull/28631)** — Major jump of the underlying Gemini SDK, the largest API-surface change in today's dependency batch.
10. **[#28626 — chore(deps): bump npm-dependencies group (75 updates)](https://github.com/google-gemini/gemini-cli/pull/28626)** — Grouped maintenance covering `simple-git`, `@modelcontextprotocol/sdk`, and 73 others; also notable: [#28634 chalk 4→6](https://github.com/google-gemini/gemini-cli/pull/28634) (requires Node 22).

## Feature Request Trends
- **AST-aware code tooling** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) — Precise method-bound reads, search, and codebase mapping to cut token noise and misaligned file reads.
- **Agent self-awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) — The CLI should know its own flags, hotkeys, and execution semantics well enough to act as its own expert guide.
- **Component-level behavioral evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) — An EPIC to extend the 76 existing behavioral evals across all 6 supported Gemini models.
- **Subagent trajectory sharing** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) — Make subagent traces accessible and shareable via `/chat share` for easier review and eval.
- **Browser agent resilience** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) — Automatic session takeover and lock recovery instead of fail-fast on locked browser profiles.
- **Safety guardrails** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) — Discourage destructive commands (`git reset`, `--force`) when safer alternatives exist.
- **OS-level sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) — Leverage the model's native bash affinity via zero-dependency sandboxing and post-execution intent routing.

## Developer Pain Points
- **Hangs and deadlocks** are the top frustration: generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" stalls ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive-prompt deadlocks ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), and the browser subagent on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Misleading success signals** — subagents reporting `GOAL` after hitting MAX_TURNS or silently failing erode trust in agent status ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Permission regressions** — subagents activating despite disabled agent configs since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Auto Memory token/security overhead** — infinite retries on low-signal sessions, pre-redaction context exposure, and noisy logging ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Workspace pollution** — the model scattering temp edit scripts across directories, forcing manual cleanup before commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Underused skills/sub-agents** — custom skills are ignored unless explicitly requested, despite relevant descriptions ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Debugging blind spots** — `/bug` reports lack subagent context, making it hard to diagnose agent-internal failures ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-03

## Today's Highlights
No new releases or pull requests landed in the last 24 hours, so the focus is on community-reported issues. The most notable threads concern a regression in the built-in `view` tool, session/autopilot state problems, and input-handling bugs that can send cancelled or stashed prompts to the agent. Several Windows/WSL2 and terminal-compatibility issues also continue to surface.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
Here are the 10 most noteworthy issues updated in the last day:

1. **[#4202 — Built-in `view` reports "Path does not exist" for existing files in 1.0.73](https://github.com/github/copilot-cli/issues/4202)**  
   Regression started in 1.0.72: `view` fails on existing text files, while 1.0.71 works. The reporter provides a controlled repro and notes an isolated SDK probe succeeds. One of the few issues with active comments, indicating real developer impact.

2. **[#4337 — `gpt-5.6-luna` advertised in `/models` but not accessible via `/chat/completions`](https://github.com/github/copilot-cli/issues/4337)**  
   The model appears in the Models API but only works through `/responses`, breaking aggregator/MoA tooling that depends on the OpenAI-compatible chat completions endpoint. This is a serious API-surface consistency problem for tool builders.

3. **[#4336 — Cancelled user input is still delivered to the agent and processed as a valid turn](https://github.com/github/copilot-cli/issues/4336)**  
   In autopilot mode, queued input that the user cancels reappears later with its original timestamp and is treated as a normal turn. This is a correctness issue around user intent and could cause agents to act on unintended instructions.

4. **[#4335 — `toolCall.title` contains summary instead of executable command in ACP mode](https://github.com/github/copilot-cli/issues/4335)**  
   When connected to ACP hosts like Zed, approval modals show a natural-language summary rather than the actual shell command. This reduces transparency and makes it hard to review/approve commands safely.

5. **[#4334 — Stashed (`ctrl+S`) prompt discarded on session switch](https://github.com/github/copilot-cli/issues/4334)**  
   Typing a prompt, stashing it, switching sessions, and returning results in an empty input — the stash is lost. A straightforward but annoying state-management bug for multi-session workflows.

6. **[#4332 — No way to silence "Memory is disabled" notice](https://github.com/github/copilot-cli/issues/4332)**  
   With `"memory": false`, every new session prints an info line, and there is no supported setting to suppress it. Users want clean startup output, especially in scripted or automated environments.

7. **[#4329 — Autopilot is not enabled when resuming a session that had autopilot enabled](https://github.com/github/copilot-cli/issues/4329)**  
   Statusline shows autopilot as on, but approvals still fail. This is a state-restoration bug that breaks an entire workflow, not just a display problem.

8. **[#4328 — Ctrl+H interpreted as Ctrl+Backspace under WSL2](https://github.com/github/copilot-cli/issues/4328)**  
   `/help` documents `ctrl+h` as delete-previous-character, but on WSL2 it deletes the whole word. The issue pinpoints `WT_SESSION` leaking from Windows Terminal as a likely trigger. Keyboard handling is hard to get right across terminal emulators, and this one is narrowly scoped.

9. **[#4292 — Colors are completely off in tmux](https://github.com/github/copilot-cli/issues/4292)**  
   Light theme colors render incorrectly under tmux, while the regular shell works fine. Terminal-rendering differences remain a recurring area of breakage.

10. **[#2286 — Support git symlinks in plugin install on Windows](https://github.com/github/copilot-cli/issues/2286)**  
    Long-standing feature request: plugin install should resolve git symlink text stubs on Windows when `core.symlinks=false`. Still relevant after several months, affecting Windows users of marketplace plugins.

## Key PR Progress
No pull requests were updated in the last 24 hours. There is no PR progress to report for this digest.

## Feature Request Trends
- **Windows / WSL2 parity**: Requests to handle Windows-specific git and terminal behavior (e.g., symlink stubs in plugin install, Ctrl+H misbinding under WSL2) show a clear demand for smoother Windows support.
- **Configurable startup output**: Users want the ability to suppress informational notices like the "Memory is disabled" line; startup output should be quiet or configurable for power users.
- **IPC / ACP transparency**: ACP tool calls should surface concrete commands rather than high-level summaries, so approval flows remain auditable.
- **Model API consistency**: Tooling that relies on OpenAI-compatible routes expects every advertised model to be available through the same endpoints.

## Developer Pain Points
- **Regression sensitivity**: Patch-version regressions like the `view` tool failure erode trust quickly; developers are actively bisecting versions to isolate breakage.
- **State bugs around sessions and autopilot**: Lost stashes, cancelled input being processed, and autopilot failing after resume disrupt long-running interactive workflows.
- **Terminal environment fragility**: tmux color issues and Windows Terminal/WSL2 keybinding differences are common sources of friction, especially for users managing multiple environments.
- **Approval-security gaps**: ACP mode hiding executable commands in approval modals is a safety concern for developers who rely on tools like Zed for agent supervision.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-03

## Today's Highlights

No new releases were published in the last 24 hours. The most significant activity is on long-running feature requests: Remote Control (#1282) has gained 24 👍, and the Memory System proposal (#1283) remains in active discussion with 14 comments. One PR, #2471, proposes a streaming Monitor tool, but it is currently closed.

## Releases

None in the last 24 hours.

## Hot Issues

Only 4 issues were updated in the last 24 hours; all are listed below.

- [#1283 - Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  *Updated 2026-08-02 · 14 comments*  
  Proposes automatic and manual memory so Kimi CLI can retain project patterns, context, and user preferences across sessions. High interest as a core workflow improvement; still under community discussion.

- [#1282 - Feature Request: Remote Control - Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
  *Updated 2026-08-02 · 24 👍 · 11 comments*  
  Wants to continue local Kimi Code CLI sessions from a phone, tablet, or browser. This is the strongest signal of demand for cross-device workflow continuity.

- [#2579 - Feature request: external wake channel for running interactive sessions](https://github.com/MoonshotAI/kimi-cli/issues/2579)  
  *Created 2026-08-02 · 0 comments*  
  Requests a way to wake a running interactive TUI session via external events, such as agent mail systems using local inbox files and `inotifywait`. Important for local agent orchestration and automation workflows.

- [#2578 - [swarm] 403/timeout mid-batch: partial work lost, resume re-spends tokens, broken tree blocks others](https://github.com/MoonshotAI/kimi-cli/issues/2578)  
  *Created 2026-08-02 · 0 comments*  
  Reports that swarm/parallel subagents die on quota errors or timeout mid-work, leaving half-written files and broken workspace state. Resume re-spends tokens, and broken tree entries block other jobs. A critical reliability issue for parallel batch workflows.

## Key PR Progress

Only 1 PR was updated in the last 24 hours.

- [#2471 - feat(tools): add Monitor tool for per-line stdout streaming](https://github.com/MoonshotAI/kimi-cli/pull/2471)  
  *Closed · Created 2026-06-22 · Updated 2026-08-02*  
  Adds a streaming `Monitor` tool as a counterpart to existing background tools, enabling per-line stdout output for long-running processes. Intended to improve observability of tool execution, though the PR is currently closed.

## Feature Request Trends

The active issues indicate several clear directions from the community:

- **Persistent memory**: Store context, project patterns, and user preferences across sessions (#1283).
- **Remote session access**: Continue local CLI sessions from mobile or browser (#1282).
- **External agent integration**: Allow interactive sessions to be triggered or woken by external systems, e.g., agent mail and inbox watchers (#2579).
- **Swarm/parallel reliability**: Handle mid-batch 403/timeout failures without losing partial work, wasting tokens, or blocking other tasks via broken tree state (#2578).

## Developer Pain Points

Recurring frustrations across recent issue activity:

- **Context loss between sessions**: Developers have to re-explain project setup and preferences every session.
- **Session lock-in to local machine**: No way to step away and continue from another device.
- **Poor automation ergonomics**: Interactive TUI sessions cannot be easily integrated with local agent mail or external watchers.
- **Fragile parallel batches**: Quota errors and timeouts kill subagents mid-write, leaving broken state; retrying is expensive and residual tree locks block unrelated work.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-03

## Today’s Highlights
No new releases landed in the last 24 hours. Community attention remains concentrated on stability: the Memory Megathread is still the most active issue (121 comments), with fresh reports of `/tmp` `.so` leaks and unbounded SQLite WAL growth. On the feature side, the speech-to-text request keeps the strongest demand signal (170 👍), while new PRs target persistence write amplification, auth race conditions, and Unicode patch handling.

## Releases
None in the last 24 hours.

## Hot Issues

- [Memory Megathread (#20695)](https://github.com/anomalyco/opencode/issues/20695) — 121 comments / 94 👍. The central tracking issue for memory leaks; maintainers explicitly request heap snapshots rather than LLM-suggested fixes.

- [Speech-to-Text Voice Input for Lazy People (#4695)](https://github.com/anomalyco/opencode/issues/4695) — 36 comments / 170 👍. One of the most upvoted feature requests; high community desire for voice input.

- [DeepSeek V4 Flash suddenly requires “Enable models hosted in China” (#39845)](https://github.com/anomalyco/opencode/issues/39845) — 11 comments / 18 👍. Mid-session service interruption for OpenCode Go subscribers; model gating/opt-in flow is confusing.

- [Removal of zero-data-retention policy (#39861)](https://github.com/anomalyco/opencode/issues/39861) — 8 comments / 15 👍. Privacy-sensitive regression: the zero-retention promise was removed from OpenCode Go docs.

- [system-reminder keeps moving, causing cache misses in llama.cpp (#23595)](https://github.com/anomalyco/opencode/issues/23595) — 7 comments / 11 👍. Prompt history instability breaks prompt caching and wastes local inference time.

- [OpenCode leaks temporary .so files in /tmp (#28089)](https://github.com/anomalyco/opencode/issues/28089) — 7 comments / 7 👍. Temp shared objects can consume hundreds of GB over time; severe disk-usage bug.

- [SQLite WAL grows unbounded (10–15 GB) while Desktop is running (#37495)](https://github.com/anomalyco/opencode/issues/37495) — 2 comments. Multiple long-lived SQLite read transactions prevent WAL checkpointing; disk fills until full quit.

- [OpenCode Desktop 1.18.4 hangs indefinitely during first-launch onboarding (#38222)](https://github.com/anomalyco/opencode/issues/38222) — 6 comments. Windows-only Desktop blocker; CLI works on the same machine.

- [Asked for API key every time I change provider (#33775)](https://github.com/anomalyco/opencode/issues/33775) — 6 comments. Auth UX bug: stored keys in `auth.json` are not reused after `/connect`.

- [OpenAI cache writes always reported as 0 (#37745)](https://github.com/anomalyco/opencode/issues/37745) — 4 comments. Cost accounting is wrong now that OpenAI charges for cache writes.

## Key PR Progress

- [fix(app): search every known project in the open project dialog (#40202)](https://github.com/anomalyco/opencode/pull/40202) — Fixes #39142; searches beyond the five most recent projects while keeping the empty state focused.

- [feat(plugin): add request-scoped chat.model hook (#40188)](https://github.com/anomalyco/opencode/pull/40188) — Adds a plugin hook that can replace the model per request before provider/auth resolution; closes #18793.

- [fix(opencode): handle removed OpenAI OAuth auth (#40199)](https://github.com/anomalyco/opencode/pull/40199) — Fixes a race where OpenAI Codex fetch wrappers mutate auth after it was removed or replaced.

- [fix(app): eliminate persistence write amplification (#40197)](https://github.com/anomalyco/opencode/pull/40197) — Replaces setter-coupled persistence with a shared repository and 500 ms checkpoint deadline; uses SQLite WAL for desktop documents.

- [fix(opencode): match canonically equivalent Unicode in patches (#40198)](https://github.com/anomalyco/opencode/pull/40198) — Closes #31651; patch verification now accepts canonically equivalent Unicode.

- [fix(tui): let the prompt Down arrow reach the end of the text (#40163)](https://github.com/anomalyco/opencode/pull/40163) — Fixes cursor offset handling for newline/tab display columns.

- [feat(opencode): allow per-MCP-server trust configuration (#40125)](https://github.com/anomalyco/opencode/pull/40125) — Closes #40111 and several related MCP trust issues; enables trust decisions per MCP server.

- [feat: add support for Solidity file type and highlighting (#38200)](https://github.com/anomalyco/opencode/pull/38200) — Adds Solidity syntax highlighting support.

- [feat(opencode): open session list with --resume (#35023)](https://github.com/anomalyco/opencode/pull/35023) — Adds `opencode --resume` to open the session picker on startup.

- [fix(rpc): reject pending calls when target disconnects (#34974)](https://github.com/anomalyco/opencode/pull/34974) — Prevents hung RPC promises when a Worker emits `error` or `messageerror`.

## Feature Request Trends

- **Speech-to-text voice input** remains the strongest feature request by reaction count (#4695).
- **Subagent control**: users want to steer, cancel, or abort individual running subagents (#38966).
- **Desktop theming**: a user CSS override hook equivalent to VS Code’s `workbench.css` is requested for the Desktop app (#40177).
- **MCP trust configuration**: per-server trust is a recurring ask and is now being addressed in #40125.
- **Persistent goals**: a `/goal` completion condition that remains active across turns was proposed, though filed under an unconventional title (#40189).

## Developer Pain Points

- **Disk and memory leaks**: temporary `.so` files (#28089), `libopentui` dylib copies (#39876), unbounded SQLite WAL (#37495), and the broader memory megathread (#20695).
- **SQLite reliability**: crashes on corrupted databases (#37821) and silent crashes from concurrent VS Code instances due to `busy_timeout=0` (#38849).
- **Desktop onboarding hangs**: Windows first-launch splash issues persist (#38222, #40170).
- **Auth/provider friction**: repeated API key prompts (#33775), Copilot re-auth every session (#40183), and mid-session OAuth/auth removal races (#40199).
- **TUI regressions**: npm-spec TUI plugins failing to load (#33884), blank terminal issues (#6464), sidebar “Modified Files” not showing diffs (#32852), and runtime crashes (#40186).
- **Operational blockers**: OpenAI cache-write accounting (#37745), sessions stuck on 413 image payloads (#14562), and background service restart loops (#37239).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Today's Highlights

Pi development stayed active but release-free in the last 24 hours: 34 issues and 19 PRs were updated. The dominant themes are context/compaction reliability, provider network resilience, and terminal rendering regressions. The community is converging on fixes for auto-compaction (#6879) and login/model-catalog stalls (#7113, #7504), while PRs are adding new providers and a durable server session backend.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6879 – Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)**  
   A long agentic turn on `gpt-5.6-sol` ran for over 2 hours; compaction only fired after the provider rejected the request at 373k tokens. Community suggests checking after every agent loop step. High engagement: 10 comments, 10 👍.

2. **[#7020 – Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)**  
   Long-running “coordinator” sessions occasionally stall after compaction. Shows compaction still has rough edges for long-lived, multi-problem sessions. 7 comments, 2 👍.

3. **[#7062 – fix(openai-completions): handle array content and missing finish_reason](https://github.com/earendil-works/pi/issues/7062)**  
   Databricks models such as Qwen3 and gpt-oss can return `choice.delta.content` as a typed array, causing `[object Object]` output. Important for compatibility with non-standard OpenAI-compatible providers. 6 comments.

4. **[#7113 – TUI freezes after entering an API key in /login when the pi.dev model catalog is unreachable](https://github.com/earendil-works/pi/issues/7113)**  
   The post-login model refresh has no timeout or `AbortSignal`, freezing the TUI for minutes. This is also reported separately in #7505. 4 comments.

5. **[#7315 – Fireworks requests sometimes fail instantly with “Request timed out.”](https://github.com/earendil-works/pi/issues/7315)**  
   Failures happen before any tokens are produced and with zero usage, yet auto-retries repeat the same failure. Points to a connection-path bug rather than a model issue. 4 comments.

6. **[#7323 – `pi update --models` fails the entire refresh on a transient catalog request stall](https://github.com/earendil-works/pi/issues/7323)**  
   One stalled HTTPS request aborts the whole model catalog refresh after 15 seconds, even though retrying succeeds. Highlights missing retry/tolerance in the model update path. 3 comments.

7. **[#7321 – Multi-line paste broken on terminals without bracketed paste support](https://github.com/earendil-works/pi/issues/7321)**  
   On Termux and similar terminals, the first `\r` triggers submit instead of inserting pasted content. 2 comments, 1 👍.

8. **[#7413 – Compaction fails on GitHub Copilot GHE.com enterprise accounts — “unknown stamp” error](https://github.com/earendil-works/pi/issues/7413)**  
   Normal chat works, but `/compact` fails with `invalid token: unknown stamp "prod-cus-01"` on enterprise Copilot accounts. Blocks compaction for GHE.com users. 3 comments.

9. **[#7486 – Hardware cursor jumps between input box when showHardwareCursor is enabled in WezTerm](https://github.com/earendil-works/pi/issues/7486)**  
   The documented workaround for #5200 fixes IME candidate position but introduces visible cursor jumping during “Working...” states. 3 comments.

10. **[#7504 – IPv6 blackhole hangs pi for ~5 min — undici dispatcher doesn't enable `autoSelectFamily`](https://github.com/earendil-works/pi/issues/7504)**  
    When `pi.dev`’s AAAA record is a blackhole, every non-model network operation stalls for the full undici headers timeout. Broad impact even with only one initial report.

## Key PR Progress

1. **[#7503 – feat(agent): add experimental in-memory sessions](https://github.com/earendil-works/pi/pull/7503)**  
   Adds `Session`, `SessionStorage`, and `SessionRepository` contracts with an in-memory backend covering entries, records, lanes, facts, queries, logs, statistics, and forks. Exposed through an experimental API.

2. **[#7396 – feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396)**  
   Durable JSONL session persistence with exclusive cross-process locking, crash recovery, and live transcript progress. Important for server/headless Pi workflows.

3. **[#7498 – fix(coding-agent): defer idle compaction until next prompt](https://github.com/earendil-works/pi/pull/7498)**  
   Avoids unnecessary token-wasting idle compactions, especially with recent GPT models. Directly relevant to the context-overflow problem in #6879.

4. **[#7480 – feat(ai): add LLM Gateway provider with API key and OAuth login](https://github.com/earendil-works/pi/pull/7480)**  
   Adds LLM Gateway as a built-in `openai-completions` provider, including remote model catalog support and OAuth login.

5. **[#7501 – Add DeepInfra provider](https://github.com/earendil-works/pi/pull/7501)**  
   Adds DeepInfra as a standard OpenAI-compatible inference provider. Notable caveat: DeepInfra does not support the developer role.

6. **[#7493 – Set AI_AGENT for child process attribution](https://github.com/earendil-works/pi/pull/7493)**  
   Sets `AI_AGENT=pi` in CLI and RPC entry points so child processes can identify Pi as the launching agent. Resolves #7132.

7. **[#7494 – fix(ai): preserve Gemini 3 tool call IDs](https://github.com/earendil-works/pi/pull/7494)**  
   Gemini 3 expects matching tool call IDs when history is replayed. Pi currently drops them, breaking multi-turn tool use.

8. **[#7471 – fix(ai): retry transient provider errors in Google adapters](https://github.com/earendil-works/pi/pull/7471)**  
   Adds retry handling for pre-token 429/5xx responses in `google-vertex` and `google-generative-ai`, matching behavior already present in Anthropic, OpenAI, and Azure adapters.

9. **[#7482 – fix(tui): prefer iTerm2 inline images over kitty on WezTerm](https://github.com/earendil-works/pi/pull/7482)**  
   Fixes progressive erasure of pasted screenshots in WezTerm (#7481) by switching from the kitty graphics protocol to OSC 1337 inline images.

10. **[#7468 – feat(agent,coding-agent): accept Claude Code skill frontmatter](https://github.com/earendil-works/pi/pull/7468)**  
    Makes both skill loaders compatible with Claude Code `SKILL.md` frontmatter, improving portability for skills written for Claude Code.

## Feature Request Trends

Across the issue tracker, the most requested directions are:

- **Broader provider/model support**: DeepInfra as a built-in provider (#7502), new DeepSeek model support on OpenRouter (#7476), and LLM Gateway as a router-style provider (PR #7480).
- **More context and compaction controls**: `askWithFrozenContext()` for plugin-driven advice/review workflows (#7500), thinking-level selection in `/scoped-models` (#7487), and more robust model catalog refresh behavior (#7323).
- **Terminal and editor ergonomics**: single-line status footer (#7477), preserving editor position when scrolling up to read history (#7495), and support for extension-sent slash commands (#7484).
- **Session infrastructure**: experimental in-memory sessions and durable server backends are being actively shaped through the PR stack (#7503, #7396).

## Developer Pain Points

- **Compaction/context management is the top pain point**: auto-compaction triggers too late or not at all (#6879), sessions sometimes don’t continue after compaction (#7020), compaction cancellation sources are opaque (#7492), and enterprise GHE compaction is broken (#7413).
- **Network reliability and timeout handling**: missing timeouts and `AbortSignal`s around pi.dev catalog calls freeze login/TUI (#7113, #7505); IPv6 blackholes can hang every network operation for minutes (#7504); Fireworks requests time out instantly (#7315).
- **Terminal/IME regressions**: WezTerm users hit cursor jumps (#7486), flickering Chinese IME candidate windows (#7490), and inline image slivers (#7481); Termux users can’t paste multi-line text (#7321).
- **Provider compatibility burden**: OpenAI-compatible providers diverge with array content and missing `finish_reason` (#7062), Gemini 3 tool call IDs are dropped (#7494), and model catalog whitelists mismatch subscribed plans (#7491).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-03

## Today's Highlights

The project released a new nightly (`v0.21.3-nightly.20260803.e1e5b42ce`) with TUI documentation and a history-pagination fix. Community attention is concentrated on session reliability and Windows/desktop behavior: silent session deletion, transcript corruption, abort misclassification, and terminal flicker. On the PR side, the focus is on daemon workspace ownership, review-tooling upgrades, voice security, and hook trust-boundary hardening.

## Releases

**v0.21.3-nightly.20260803.e1e5b42ce**  
https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce

Changes included:
- Docs: complete TUI keyboard shortcut reference — https://github.com/QwenLM/qwen-code/pull/8327
- fix(core): unblock history pagination

## Hot Issues

1. **[Desktop 0.0.5 / Windows] Sessions silently auto-deleted after app restart when ACP session/load fails**  
   https://github.com/QwenLM/qwen-code/issues/8400  
   P1 data-loss bug: desktop sessions vanished because provider message loader returned 0 messages, caused by a workspace cwd mismatch. High-impact for Windows desktop users.

2. **Duplicate provider tool call id**  
   https://github.com/QwenLM/qwen-code/issues/8382  
   A P2 session-management bug where tool calls fail with “Duplicate provider tool call id” and “not recorded” errors, forcing workarounds in multi-turn sessions.

3. **isAbortError does not recognize the OpenAI SDK's APIUserAbortError**  
   https://github.com/QwenLM/qwen-code/issues/8398  
   On the common `auth_type=openai` path, user-cancelled requests are misclassified, affecting error handling and retry logic.

4. **After APIUserAbortError, subsequent turns are not written to the local session transcript**  
   https://github.com/QwenLM/qwen-code/issues/8356  
   Follow-on symptom of abort misclassification: sessions stop persisting after cancellation, making recovery and audit difficult.

5. **ConEmu/Cmder: весь вывод мерцает (Windows, node.exe)**  
   https://github.com/QwenLM/qwen-code/issues/8385  
   Full-screen flicker in ConEmu/Cmder with `node.exe`; only workaround is `CI=true`. A fix PR (#8406) has already been opened.

6. **Concurrent session writers can fork transcript history and hide responses**  
   https://github.com/QwenLM/qwen-code/issues/7164  
   P1 session-management bug: two processes appending to the same JSONL transcript can create divergent parent chains, losing responses on recovery.

7. **桌面客户端无法引用到正确的文件**  
   https://github.com/QwenLM/qwen-code/issues/8123  
   Desktop client fails to find existing files via `@` references (e.g. `KuaiShouOrderService.java`). 5 comments; file-operation UX issue.

8. **proposal: Add a direct external context provider profile**  
   https://github.com/QwenLM/qwen-code/issues/7585  
   Most-discussed open feature request (11 comments). Proposes managed external memory profiles for repository-shared context in a single interactive CLI process.

9. **tracking(serve): Bound multi-workspace daemon resource usage**  
   https://github.com/QwenLM/qwen-code/issues/8051  
   P2 daemon tracking issue: count-only limits don’t bound bytes held by request bodies, WebSocket buffers, etc. Important for production `qwen serve` scaling.

10. **Add an Email channel with IMAP and SMTP support**  
    https://github.com/QwenLM/qwen-code/issues/8281  
    Feature request for communicating with Qwen Code through a dedicated mailbox, with provider-neutral IMAP/SMTP support.

## Key PR Progress

1. **feat(serve): establish workspace runtime ownership**  
   https://github.com/QwenLM/qwen-code/pull/8213  
   Introduces `WorkspaceRuntime` as the ownership boundary for workspace ACP child lifecycles, with authoritative state snapshots, epochs, work leases, and bounded teardown.

2. **feat: fork from any conversation**  
   https://github.com/QwenLM/qwen-code/pull/8274  
   Makes session branching target earlier Assistant responses instead of always relying on the latest active session state.

3. **fix(core): preserve prompt cache across deferred tool discovery**  
   https://github.com/QwenLM/qwen-code/pull/8276  
   Keeps provider tool declarations and cached system instructions stable while deferred tools are discovered, using `tool_search` and a `deferred_tool_call` bridge.

4. **feat(telemetry): Track tool execution outcomes**  
   https://github.com/QwenLM/qwen-code/pull/8180  
   Adds `executionStatus` to distinguish whether `invocation.execute()` was entered and succeeded, beyond the existing terminal tool-call status.

5. **fix(core): recognize OpenAI SDK APIUserAbortError as an abort**  
   https://github.com/QwenLM/qwen-code/pull/8399  
   Directly fixes the abort misclassification reported in #8398 for the OpenAI-compatible path.

6. **fix(cli): enable synchronized output for ConEmu/Cmder**  
   https://github.com/QwenLM/qwen-code/pull/8406  
   Enables DEC mode 2026 synchronized output to eliminate ConEmu/Cmder flicker; also adds Windows Terminal detection.

7. **feat(cli): add audio bridge for attachments**  
   https://github.com/QwenLM/qwen-code/pull/8332  
   Transcribes user-supplied audio attachments via a batch voice model when the primary model lacks audio support, covering interactive, headless, and ACP paths.

8. **feat(review): Add Maven multi-module verification**  
   https://github.com/QwenLM/qwen-code/pull/8394  
   `/review` now recognizes root Maven reactors and maps changed files to the deepest default-reactor module for deterministic build-test verification.

9. **feat(review): Add structured Web Shell review results**  
   https://github.com/QwenLM/qwen-code/pull/8402  
   Persists canonical findings and verdicts as a versioned session artifact consumable by Web Shell.

10. **fix(hooks): close four trust-boundary holes in hook execution**  
    https://github.com/QwenLM/qwen-code/pull/8396  
    Hardens hook execution: HTTP hooks no longer follow redirects, plus three other repository-controlled config boundaries are closed.

## Feature Request Trends

- **External context & provider memory** — Requests for managed external context provider profiles (#7585) and bounded daemon resource usage (#8051) point toward more structured, administrator-controlled memory and resource governance.
- **Communication channels** — Email via IMAP/SMTP (#8281) and safe cloud deployment integrations (#8291) suggest users want Qwen Code to participate in larger automation workflows beyond the terminal.
- **Provider ecosystem expansion** — New third-party providers (Kimi, Xiaomi MiMo) and trusted private ASR base URLs are recurring asks for broader deployment flexibility.
- **TUI / Web Shell experience** — Image drag-and-drop in Web Shell (#8321), visual polish (#7278), and experimental Plan & Review workflows (#8389) continue to drive UI/UX improvement.
- **Platform identity** — Renaming `node.exe` to `qwen-code.exe` (#8376) for reliable process identification is a smaller but repeated Windows-focused request.

## Developer Pain Points

- **Session data loss and transcript corruption** — Multiple P1/P2 issues around silent session deletion (#8400), concurrent transcript forks (#7164), and missing turns after aborts (#8356).
- **Abort handling in OpenAI-compatible mode** — `APIUserAbortError` misclassification (#8398) creates a “did the user actually cancel?” ambiguity and breaks subsequent session persistence.
- **Windows terminal/desktop friction** — ConEmu/Cmder flicker (#8385) and desktop file-reference failures (#8123) remain visible Windows-specific pain points.
- **Tool-call reliability** — Duplicate tool call IDs (#8382) and leaked JSON-style tool arguments (#8207) interrupt long-running agent sessions.
- **CI/automation noise** — Auto-filed CI failures and runner version drift (#8333, #8375, #8371) continue to consume maintainer attention, prompting new fail-closed verification chains in PRs like #8318.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-03

## Today's Highlights

No new releases shipped in the last 24 hours, but the v0.9.4 cycle is in heavy motion: a release-blocker was filed over the sub-agent spawn surface ([#5123](https://github.com/Hmbown/CodeWhale/issues/5123)), and a large batch of Copilot-authored WIP PRs landed to fix fleet model routing, config shadowing, and goal-loop limits. Meanwhile, the Termux/Android arm64 support epic ([#4236](https://github.com/Hmbown/CodeWhale/issues/4236), [#4242](https://github.com/Hmbown/CodeWhale/issues/4242)) was closed, and community discussion continues to center on a persistent sidebar session panel ([#2934](https://github.com/Hmbown/CodeWhale/issues/2934)) and the `deepseek doctor` / `deepseek run` behavioral mismatch ([#689](https://github.com/Hmbown/CodeWhale/issues/689)).

## Releases

No new releases in the last 24 hours. The project remains on the v0.9.4 track, with a release-blocker currently open ([#5123](https://github.com/Hmbown/CodeWhale/issues/5123)).

## Hot Issues

1. **[#2934 — Sidebar sessions panel with auto-resume and history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)** · 12 comments — The most-engaged open request. Users find the `Ctrl+R` session picker and `--continue` startup flag insufficient for discovering and resuming old conversations; a persistent sidebar panel is the ask. Tagged enhancement/UX for v0.9.4.

2. **[#998 — TUI text display incomplete; hover tooltips requested](https://github.com/Hmbown/CodeWhale/issues/998)** · 11 comments — Localized UI text is truncated in the TUI; users want full content on mouse hover. Reflects lingering i18n/rendering-width issues in v0.9.4.

3. **[#689 — `deepseek doctor` passes but `deepseek run` won't start](https://github.com/Hmbown/CodeWhale/issues/689)** · 10 comments — All doctor checks pass, yet `deepseek run` produces no output and never launches a conversation. The thread is collecting environment/config permutations to isolate the trigger; a high-trust-eroding silent failure.

4. **[#1004 — `/dryrun`: preview the next chat completion request](https://github.com/Hmbown/CodeWhale/issues/1004)** · 8 comments — Proposal for a command that shows the exact outgoing payload (system prompt, cached repo files, tool definitions, @mentions) before sending, specifically to avoid costly V4 Pro turn mistakes.

5. **[#1425 — Session hangs after large-text sub-agent fan-out](https://github.com/Hmbown/CodeWhale/issues/1425)** · 6 comments — Analyzing a 3M-character novel spawned 10 sub-agents that all showed `Running`, but the parent session blocked on `agent_wait` timeouts and appeared dead. The user confirmed the session was actually interrupted, not truly hung.

6. **[#1482 — NVIDIA NIM endpoint broken (404)](https://github.com/Hmbown/CodeWhale/issues/1482)** · 6 comments — API calls against NIM return `404 page not found`, breaking the v0.9.4 integration for NIM users on Windows.

7. **[#1651 — VS Code crashes when YOLO Agent runs test scripts](https://github.com/Hmbown/CodeWhale/issues/1651)** · 5 comments — Autonomous test execution with v4-pro/v4-flash crashes the editor/integrated terminal host, rather than just erroring in the TUI.

8. **[#1829 — SSH fails with exit 255 from built-in shell](https://github.com/Hmbown/CodeWhale/issues/1829)** · 5 comments — `ssh` to port 22 exits 255 with no output from the TUI's sandboxed shell, while the same command works in a normal terminal. Suspected outbound TCP 22 blocking.

9. **[#5123 — v0.9.4 release-blocker: agent spawn surface has too many knobs](https://github.com/Hmbown/CodeWhale/issues/5123)** · new — Dogfooded `builder` delegates run read-only and self-BLOCKED: the live tool contract exposes conflicting capability flags, preventing assigned gates from executing. Filed by the maintainer as a release-blocker.

10. **[#5098 — Fleet config has one layer too many: silent shadowing](https://github.com/Hmbown/CodeWhale/issues/5098)** · new — Editing `~/.codewhale/agents/builder.toml` to switch `deepseek-v4-pro` → `deepseek-v4-flash` has no effect; a higher-priority config layer silently shadows the edit. Fix PR is already open ([#5125](https://github.com/Hmbown/CodeWhale/pull/5125)).

## Key PR Progress

1. **[#5106 — Rename `DeepSeekClient` and internal types to provider-neutral names](https://github.com/Hmbown/CodeWhale/pull/5106)** — Audits and renames shared client types, engine wiring, and API key helpers without behavior changes. Foundational for the multi-provider correctness push.

2. **[#5124 — Fix sub-agent fleet spawn rejects for unpinned model](https://github.com/Hmbown/CodeWhale/pull/5124)** — Addresses [#5099](https://github.com/Hmbown/CodeWhale/issues/5099): `resolve_fixed_spawn_model_route` now falls back to session-route inheritance when a role/profile model is provider-less or foreign to the session provider (e.g., xai/moonshot parent + deepseek role-default).

3. **[#5125 — Fix fleet config silent shadowing](https://github.com/Hmbown/CodeWhale/pull/5125)** — Adds a `shadows` map to `FleetRoster`, exposes `shadowed_layers_for()`/`is_shadowing()`, badges shadowed members in the roster view, and deprecation-warns on non-empty `[fleet.profiles]`.

4. **[#5107 — Fix provider switching to update default model selection](https://github.com/Hmbown/CodeWhale/pull/5107)** — Attacks stale crop/model resolution after provider switches, with table-driven tests for provider switching and catalog fallback behavior.

5. **[#5108 — Make Responses API behavior provider-profiled](https://github.com/Hmbown/CodeWhale/pull/5108)** — Introduces a typed Responses dialect/profile on the resolved route and refactors request construction + SSE body handling to use the profile instead of provider booleans.

6. **[#5115 — Detect and break non-progressing turn loops with recovery path](https://github.com/Hmbown/CodeWhale/pull/5115)** — Adds an explicit no-progress watchdog with reason, elapsed time, and recovery actions; covers stale child-wait and repeated model/tool retry loops with deterministic tests.

7. **[#5109 — Fix isolated worktree contention in Fleet builders](https://github.com/Hmbown/CodeWhale/pull/5109)** — Investigates why isolated worktree Fleet builders still contend on shared delegated coordination and applies the smallest safe lock-scope/lifetime cleanup, plus regression tests.

8. **[#5105 — Fix wrong-type report for `replace` in File.edit](https://github.com/Hmbown/CodeWhale/pull/5105)** — Removes the patch `replace` name collision (uses `files`, keeps `changes` as deprecated alias) and improves required-string extraction diagnostics to report wrong JSON types when a key exists.

9. **[#5127 — Offline deterministic test corpus for web search/fetch retrieval](https://github.com/Hmbown/CodeWhale/pull/5127)** — Adds eight new tests covering ranking, deduplication, domain filtering, result truncation, citation metadata, and fallback receipt structure without network dependence.

10. **[#5130 — Bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)** — Adds an `mcp_server_management` runtime capability, CRUD routes for MCP servers, and a credential-redaction helper for API responses.

## Feature Request Trends

- **Provider neutrality and multi-provider operations** — Persistent asks to remove DeepSeek-specific hard-coding: provider-neutral client rename ([#5106](https://github.com/Hmbown/CodeWhale/pull/5106)), provider-profiled Responses behavior ([#5108](https://github.com/Hmbown/CodeWhale/pull/5108)), automatic backup-profile switching on rate limits ([#855](https://github.com/Hmbown/CodeWhale/issues/855)), and GitHub Copilot as a named external ACP worker ([#4997](https://github.com/Hmbown/CodeWhale/issues/4997)).
- **Fleet/sub-agent operational control** — `resume_from` continuation chains ([#425](https://github.com/Hmbown/CodeWhale/issues/425)), configurable goal-loop continuation caps ([#5126](https://github.com/Hmbown/CodeWhale/pull/5126)), verifier evidence APIs ([#5132](https://github.com/Hmbown/CodeWhale/pull/5132)), and persistent goal-loop state controls ([#5133](https://github.com/Hmbown/CodeWhale/pull/5133)).
- **Runtime API and observability expansion** — Memory inspection ([#5131](https://github.com/Hmbown/CodeWhale/pull/5131)), skill lifecycle operations ([#5129](https://github.com/Hmbown/CodeWhale/pull/5129)), MCP server management ([#5130](https://github.com/Hmbown/CodeWhale/pull/5130)), and persistent workflow status in the top status bar ([#5113](https://github.com/Hmbown/CodeWhale/pull/5113)).
- **Session and context management UX** — Persistent sidebar sessions ([#2934](https://github.com/Hmbown/CodeWhale/issues/2934)), raising the auto-compact context threshold from 128K to 1M ([#5134](https://github.com/Hmbown/CodeWhale/issues/5134)), and `/dryrun` request previews ([#1004](https://github.com/Hmbown/CodeWhale/issues/1004)).
- **Platform expansion** — FreeBSD packaging ([#1097](https://github.com/Hmbown/CodeWhale/issues/1097)) follows the now-closed Termux/Android arm64 support epic ([#4236](https://github.com/Hmbown/CodeWhale/issues/4236), [#4242](https://github.com/Hmbown/CodeWhale/issues/4242)).

## Developer Pain Points

- **Silent failures erode trust in diagnostics** — `deepseek doctor` reports green while `deepseek run` stays dead ([#689](https://github.com/Hmbown/CodeWhale/issues/689)); fleet config edits are silently ignored due to layer shadowing ([#5098](https://github.com/Hmbown/CodeWhale/issues/5098)).
- **Sessions hang or crash under heavy workloads** — Large-text analysis and sub-agent fan-out cause `agent_wait` timeouts and unresponsive sessions ([#1425](https://github.com/Hmbown/CodeWhale/issues/1425)); report merge/save is pathologically slow with low cache hits ([#1732](https://github.com/Hmbown/CodeWhale/issues/1732)); VS Code crashes during YOLO Agent test execution ([#1651](https://github.com/Hmbown/CodeWhale/issues/1651)).
- **Provider/model routing confusion** — NVIDIA NIM returns 404s ([#1482](https://github.com/Hmbown/CodeWhale/issues/1482)), unpinned model spawns are rejected when the route provider differs ([#5099](https://github.com/Hmbown/CodeWhale/issues/5099)), and two divergent model-resolution chains still exist in the codebase ([#4851](https://github.com/Hmbown/CodeWhale/issues/4851)).
- **Shell and network sandbox limitations** — SSH exits 255 with no output, suggesting blocked outbound TCP 22 in the built-in shell ([#1829](https://github.com/Hmbown/CodeWhale/issues/1829)); FreeBSD users cannot install via npm at all ([#1097](https://github.com/Hmbown/CodeWhale/issues/1097)).
- **UI rendering gaps** — Truncated localized text needs hover tooltips ([#998](https://github.com/Hmbown/CodeWhale/issues/998)) and images render out of order mid-execution ([#894](https://github.com/Hmbown/CodeWhale/issues/894)).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*