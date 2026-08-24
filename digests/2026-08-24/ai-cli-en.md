# AI CLI Tools Community Digest 2026-08-24

> Generated: 2026-08-23 23:10 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [CodeWhale](https://github.com/Hmbown/CodeWhale)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — AI CLI Ecosystem
**Coverage window:** 2026-08-24 community digests · 9 tools

## 1. Ecosystem Overview

The AI CLI ecosystem has shifted from feature-velocity competition to a reliability-and-trust phase. Across eight active repositories, the loudest community signals concern agents that report success without doing the work, streaming failures that hang or silently drop output, and context-window behavior that is opaque or originator-dependent. In parallel, persistent memory and cross-session state have become the next competitive frontier, while security work is expanding from sandbox escapes to supply-chain-style concerns: review-execution isolation, least-privilege tool exposure, and spend caps. Response velocity is generally high — Codex, Gemini CLI, OpenCode, Pi, Qwen Code, and CodeWhale each closed the window with 10 PRs, several directly targeting issues raised in the same digest period.

## 2. Activity Comparison

Counts reflect items surfaced as *"hot"/"key"* in each tool's 24-hour digest, not absolute repository totals. Notably, no repo in this batch has Issues/PRs disabled upstream, so all values are genuine activity counts rather than "N/A" cases; DeepSeek Harness's 0s indicate a quiet window, not a disabled tracker.

| Tool | Issues (highlighted) | PRs (highlighted) | Discussions | Release status (24h) |
|---|---|---|---|---|
| Claude Code | 10 | 1 | 0 | ✅ Stable v2.1.241 |
| OpenAI Codex | 10 | 10 | 10 | — None |
| Gemini CLI | 10 | 10 | 0 | 🚧 Nightly v0.56.0-nightly.20260823 |
| GitHub Copilot CLI | 10 | 1 | 0 | ✅ Stable v1.0.81-8 |
| OpenCode | 10 | 10 | 0 | — None |
| Pi | 10 | 10 | 1 | — None |
| Qwen Code | 10 | 10 | 0 | 🚧 Nightly v0.22.0-nightly.20260823 |
| CodeWhale | 10 | 10 | 1 | ✅ Stable v0.9.11 |
| DeepSeek Harness | 0 | 0 | 0 | — None |

*Side note: Copilot CLI's single PR was a non-functional README rename; Claude Code's single PR was documentation.*

## 3. Shared Feature Directions

**Persistent memory & cross-session learning** — demanded or in-flight nearly everywhere:
- **Claude Code** — cross-session messaging, compaction-resistant state, routines management (#48965, #73618)
- **OpenAI Codex** — "Memories in Codex" citation visibility (#12567), transferable experience memory (#38021), memory-consolidation thread source (#40186)
- **Gemini CLI** — Auto Memory re-surfaces low-signal sessions (#26522); redaction-before-send and skill-name logging gaps (#26525)
- **Copilot CLI** — `store_memory` regression blocks memory entirely in prereleases (#4535)
- **OpenCode** — project memory layer with a CRUD `memory` tool (#44539)

**Context-window transparency & compaction control:**
- **Codex** — restore 372K context or allow opt-in (#34619); originator-header gating (#40258)
- **Copilot CLI** — compaction triggered at 50% on Luna Max (#4571); background compaction drops completed tool results (#4572)
- **OpenCode** — ~260K vs ~960K context against the same endpoint (#43480)
- **CodeWhale** — publish a structured compaction survival contract (#4394)

**Verifiable agent completion / trust:**
- **Gemini CLI** — MAX_TURNS subagents report `GOAL` success (#22323)
- **Copilot CLI** — agent acknowledges work without calling tools (#4566); ACP `session/cancel` returns `end_turn` instead of `cancelled` (#4561)
- **OpenCode** — empty `finish_reason: stop` responses cause mid-thought halts (#44447, fixed by #44536)
- **CodeWhale** — reasoning-only clean-stop retried like transport failure (#5561)

**Streaming resilience & error surfacing:**
- **OpenCode** — default-on stream watchdogs, empty-response auto-retry, error classification PRs targeting the Big Pickle `network_error` cluster (#44529, #44536, #44537)
- **Qwen Code** — 120-second no-stream-activity timeout after ~19 chunks (#5975)
- **Pi** — silent auto-retry stalls after timeouts (#8531); abnormal `native_finish_reason` surfaced as real failure (#8509)
- **CodeWhale** — SSE error-frame handling as a P0 for 0.9.12 (#5576)

**Security & least privilege:**
- **Gemini CLI** — p0 symlink path-traversal fix (#2677); Docker/container socket isolation in macOS Seatbelt (#28935)
- **Qwen Code** — container-isolated `/review` command execution (#9723); `permissions.allow` does not restrict schemas sent to the model (#9827)
- **Pi** — agent edits files outside session cwd (#8522); `/share` leaks ambient `GITHUB_TOKEN` (#663)
- **CodeWhale** — runaway-spend caps (#5566); credential-shaped tool-output redaction (#5559)

**Windows platform reliability:**
- **Claude Code** — desktop crashes requiring Repair (#85199); Windows-1252 file corruption (#7134)
- **Codex** — app freezes/stutters (#20214); DWM handle accumulation (#33192)
- **Copilot CLI** — plugin install/update fails with file-lock conflict while VS Code runs (#4570)
- **Qwen Code** — Chinese pinyin composition rendering (#8625)
- **Pi** — optional PowerShell tool (#8512); Windows/WSL keybinding and path issues (#8183, #8372, #8523)

**Mid-run human-in-the-loop control:**
- **OpenCode** — explicit queue-vs-steer semantics for mid-run prompts (#32157, 76 👍 — the week's top feature request)
- **Copilot CLI** — inline annotations on plans (#4563)
- **Qwen Code** — background-agent recovery and `activeWork` tracking (#8586)
- **Gemini CLI** — guardrails against destructive commands like `git reset --force` (#22672)

## 4. Differentiation Analysis

| Tool | Distinctive focus | Target users | Technical signature |
|---|---|---|---|
| **Claude Code** | Model-output quality, plugin hooks, multi-surface (CLI/IDE/desktop/mobile) | Enterprise teams, plugin ecosystem | Closed source; tightly coupled to Claude model family; auto-mode prompt biased toward bash-first edits |
| **OpenAI Codex** | OpenAI model integration, context/memory architecture | OpenAI API users, VS Code/Cursor, TUI power users | Rust CLI + desktop app; originator-gated model limits; MongoDB thread store; content-kind metadata preservation |
| **Gemini CLI** | OS-level sandboxing, autonomous memory pipeline | Gemini users, security-conscious teams | Node-based; macOS Seatbelt + container socket isolation; AST-aware tooling roadmap; nightly cadence |
| **Copilot CLI** | GitHub enterprise workflow, ACP compliance, cloud sync | Copilot/GitHub Enterprise subscribers | v1.0.x stable; plugin marketplaces; ACP semantics; multi-model (adds Grok 4.6 xhigh) |
| **OpenCode** | OSS, local-model friendliness, rapid reliability patching | Individual devs, Ollama/local models, cost-sensitive users | TypeScript; TUI + desktop; ACP v2 draft; default-on watchdogs and retries; Zen free tier |
| **Pi** | Minimalist TUI, provider-compatibility normalization | TUI purists, provider-agnostic users | Terminal-first; normalizes tool history for strict OpenAI-compatible providers; built-in llama.cpp; pi-packages registry |
| **Qwen Code** | Review/workflow automation, daemon + Web Shell architecture | Qwen/DeepSeek model users, review-heavy teams, Chinese devs | Container-isolated `/review`; workflow-engine orchestration; CJK-aware UI; provider-aware reasoning controls |
| **CodeWhale** | Spend governance, safety rails, multi-provider neutrality | TUI users needing cost control; legacy `deepseek-tui` migrants | Rust; multi-provider client (legacy `DeepSeekClient`); durable approval receipts; supervised-operation outbox |

## 5. Community Momentum & Maturity

- **Highest engagement:** Claude Code hosts the window's largest issue (#77136, 351 👍 / 90 comments on model prose regression) and a hot Windows crash thread (#85199, 34 comments). Codex has the strongest dual-track community (10 PRs + 10 discussions), led by a 108-comment Windows stutter thread. OpenCode's 76-👍 queue/steer request is the period's strongest single feature signal.
- **Fastest iteration:** Codex, Gemini CLI, OpenCode, Pi, Qwen Code, and CodeWhale each show 10 PRs in 24 hours. OpenCode demonstrates the tightest issue-to-fix loop — watchdogs, empty-response retry, and error-classification PRs directly target the same-day Big Pickle `network_error` cluster. Gemini closed an XL-size p0 security fix in-window; Qwen continues a nightly cadence around `/review` hardening.
- **Maturity:** Claude Code (v2.1.x) and Copilot CLI (v1.0.x) are the most stable and mature; both had thin PR windows, consistent with a maintenance phase. Gemini, Qwen, OpenCode, Pi, and CodeWhale are pre-1.0, feature-churning, and highly responsive — but with more volatility. DeepSeek Harness is dormant this period, with no signal in any channel.

## 6. Trend Signals

- **Verifiable completion is becoming the trust baseline.** Three tools in one day fielded complaints about agents self-reporting success without evidence (Gemini #22323, Copilot #4566/#4561, OpenCode #44447). Expect cancellation-aware stop reasons, tool-call evidence trails, and terminal-state verification to become adoption criteria.
- **Context-window politics will shape model selection.** Originator-header gating (Codex #40258) and client-vs-server context discrepancies (OpenCode #43480) are eroding trust in model limits. Tools that expose and document actual budgets, and let users override compaction (Copilot #4571, CodeWhale #4394), will win governance-minded buyers.
- **Memory is the next moat, and privacy is its tax.** Every major tool is building or debugging persistent memory; the differentiators are redaction-before-send (Gemini #26525), real permission enforcement (Qwen #9827), and durability under compaction (Copilot #4572, Pi #7724).
- **Default-insecure is no longer acceptable.** A p0 symlink traversal (Gemini), container-isolated review execution (Qwen), cwd-escape file edits (Pi), and an unbounded-spend default (CodeWhale) all surfaced in a single day. Security and spend governance are moving from enterprise add-ons to core requirements.
- **Windows remains unclaimed territory.** Crash loops, file-lock conflicts, handle leaks, and encoding corruption span five tools. Teams standardized on Windows face compounding reliability risk; a vendor that owns Windows stability has a clear competitive opening.
- **Streaming robustness is table stakes.** `network_error`, stalled SSE, and stuck "thinking" UIs drove active PR waves in OpenCode, Pi, Qwen, and CodeWhale. When evaluating tools, check whether stalled streams timeout, retry, and surface errors instead of hanging silently.
- **Provider neutrality is now baseline.** Grok support in Copilot, DeepSeek/GLM/Kimi reasoning controls in Qwen, strict-provider normalization in Pi, and CodeWhale's multi-provider client all treat single-model lock-in as legacy.

**Reference value for developers:** weight maintenance velocity and issue-to-fix loops above feature lists; audit context-limit and memory-redaction behavior before standardizing; and treat Windows reliability plus cancellable, verifiable agent runs as first-class evaluation criteria.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-24 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

**Most-discussed PRs by comments/attention (all currently OPEN):**

**#1 — skill-creator evaluation overhaul** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
The most-discussed PR fixes a critical bug where `run_eval.py` reports 0% recall for every skill description, causing the description-optimization loop (`run_loop.py`, `improve_description.py`) to optimize against pure noise. The fix installs the eval artifact as a real skill and addresses Windows stream reading, trigger detection, and parallel workers — directly resolving the community's most-upvoted bug report ([Issue #556](https://github.com/anthropics/skills/issues/556)).

**#2 — document-typography skill** — [PR #514](https://github.com/anthropics/skills/pull/514)
Proposes a typographic quality-control skill for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Discussion highlights that these defects affect every document Claude generates, making automatic quality gating a recurring theme.

**#3 — ODT / OpenDocument skill** — [PR #486](https://github.com/anthropics/skills/pull/486)
Adds a skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods), triggered by mentions of "ODT", "ODS", "ODF", or "LibreOffice". Reflects sustained demand for open-source document format support beyond the existing docx/pdf skills.

**#4 — frontend-design skill clarity pass** — [PR #210](https://github.com/anthropics/skills/pull/210)
Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is something Claude can actually execute within a single conversation. Long-running discussion (Jan–Mar 2026) focused on making design guidance specific enough to steer behavior.

**#5 — skill-quality-analyzer & skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83)
Adds two meta-skills to the marketplace: a quality analyzer evaluating skills across five dimensions (structure, documentation, examples, resources) and a security analyzer. Signals growing community interest in auditing and hardening Skills themselves.

**#6 — scnet-hpc skill** — [PR #1615](https://github.com/anthropics/skills/pull/1615)
Newest high-attention skill (updated 2026-08-23): operating SCNet HPC clusters via profile-based SSH and Slurm workflows — connection, partitions, memory, modules, accelerator guidance, job generation, and cluster discovery.

**#7 — Hivemind: zero-cost multi-agent orchestration** — [PR #1628](https://github.com/anthropics/skills/pull/1628)
Claude Code delegates mechanical work to headless opencode workers on free models while remaining the sole planner, reviewer, and merger. Core thesis: the expensive model's context window — not its intelligence — is the scarce resource.

**#8 — self-audit quality gate** — [PR #1367](https://github.com/anthropics/skills/pull/1367)
A universal skill that audits AI output before delivery: mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Works across any project, tech stack, or model.

---

## 2. Community Demand Trends

Distilled from the top Issues by comments:

- **Security & trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, the highest-attention issue): community skills distributed under the `anthropic/` namespace enable trust-boundary abuse, where users grant elevated permissions believing skills are official. Provenance and verification are urgent asks.
- **Organizational sharing & governance** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) requests org-wide skill sharing in Claude.ai; relatedly, [Issue #412](https://github.com/anthropics/skills/issues/412) proposed an agent-governance skill for safety patterns.
- **Skill tooling reliability** — [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) documents the 0% trigger-rate bug in `run_eval.py`; [Issue #202](https://github.com/anthropics/skills/issues/202) argues skill-creator reads like developer docs rather than operational instructions; [Issue #62](https://github.com/anthropics/skills/issues/62) reports skills silently disappearing.
- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) flags the `claude-api` skill eagerly injecting ~156k tokens in a single tool call; [Issue #189](https://github.com/anthropics/skills/issues/189) (9👍, the most-upvoted issue) reports duplicate skills from overlapping plugins wasting context.
- **Platform expansion** — [Issue #29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock compatibility) and [Issue #16](https://github.com/anthropics/skills/issues/16) (expose Skills as MCPs) show demand for Skills beyond Claude Code proper.
- **Document-engineering robustness** — [Issue #12](https://github.com/anthropics/skills/issues/12) (docx whitespace corruption), [Issue #1175](https://github.com/anthropics/skills/issues/1175) (SharePoint security/context concerns), and [Issue #1362](https://github.com/anthropics/skills/issues/1362) (web-artifacts-builder pnpm failures).

---

## 3. High-Potential Pending Skills

Active-comment PRs not yet merged that may land soon:

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator eval fix; resolves the most-upvoted bug and is the repository's top-discussed PR.
- **[PR #1615](https://github.com/anthropics/skills/pull/1615)** — scnet-hpc; updated 2026-08-23, very recent activity.
- **[PR #1628](https://github.com/anthropics/skills/pull/1628)** — Hivemind multi-agent orchestration; updated 2026-08-23, taps cost-optimization demand.
- **[PR #1602](https://github.com/anthropics/skills/pull/1602)** — cross-cutting reliability fix: evaluation serialization, benchmark metrics, encoding, and script stability across the repo; updated 2026-08-23.
- **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — self-audit quality gate (v1.3.0); paired with proposal [Issue #1385](https://github.com/anthropics/skills/issues/1385), showing momentum behind reasoning-quality pipelines.
- **[PR #568](https://github.com/anthropics/skills/pull/568)** — ServiceNow platform skill (ITSM, ITOM, ITAM, SecOps, FSM, CSDM, IntegrationHub); long-running but still active as of 2026-08-12.
- **[PR #525](https://github.com/anthropics/skills/pull/525)** — pyxel retro-game development skill; authored by the Pyxel engine's creator, updated 2026-07-15.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for trustworthy, reliable Skill infrastructure — fixing evaluation tooling, preventing context-window abuse, and establishing security and provenance boundaries — before expanding into new domains such as HPC, enterprise platforms, and multi-agent orchestration.

---

# Claude Code Community Digest — 2026-08-24

## Today's Highlights

Claude Code shipped v2.1.241 with general bug fixes and reliability improvements, though no specific changes were detailed. The community’s strongest signal remains a model-quality regression issue (#77136) with 351 👍 and 90 comments covering repetitive prose across Claude 4.7/4.8/5.0/Fable. Separately, Windows desktop crash reports (#85199) and auto-mode editing/`/rewind` bugs (#87575, #88041) are drawing increasing attention.

## Releases

- **[v2.1.241](https://github.com/anthropics/claude-code/releases/tag/v2.1.241)** — Bug fixes and reliability improvements only. No public changelog details were included in the release note.

## Hot Issues

1. **[#77136 — Model prose regression / repetitive rhetorical tics](https://github.com/anthropics/claude-code/issues/77136)**  
   Open, 90 comments, 351 👍 · Users report Claude 4.7/4.8/5.0 and Fable producing repetitive language and struggling with coherent prose despite explicit style instructions. This is the highest-engagement issue in the last 24h and affects perceived output quality across the stack.

2. **[#85199 — Claude Desktop repeatedly crashes on Windows](https://github.com/anthropics/claude-code/issues/85199)**  
   Open, 34 comments, 4 👍 · Desktop app requires frequent “Advanced Options → Repair” after crashes. A widespread Windows stability complaint with no confirmed fix yet.

3. **[#7134 — Claude Code corrupts Windows-1252 files](https://github.com/anthropics/claude-code/issues/7134)**  
   Open, 27 comments, 23 👍 · Long-running encoding bug: file encodings are not respected and Windows-1252 content gets corrupted. Data-loss risk for Windows users.

4. **[#87575 — Auto mode system prompt causes `/rewind` to silently fail on Bash-edited files](https://github.com/anthropics/claude-code/issues/87575)**  
   Open, 11 comments, 18 👍 · Auto mode pushes the model toward Bash file edits, which bypasses the tooling that `/rewind` relies on. Adds hidden reproducibility risk to agentic workflows.

5. **[#88041 — Auto-mode “bashFirst” instruction forces sed/heredoc edits](https://github.com/anthropics/claude-code/issues/88041)**  
   Open, 9 comments, 9 👍 · Companion issue: the hardcoded auto-mode prompt tells models to use Python/sed/heredoc instead of Edit/Write tools, reducing auditability and triggering the `/rewind` problem above.

6. **[#74558 — Fable 5 delivers assistant text as summarized thinking blocks](https://github.com/anthropics/claude-code/issues/74558)**  
   Open, 9 comments, 8 👍 · Mid-turn assistant text intermittently appears as summarized “thinking,” making turns look silent in transcripts and stream-json consumers. Affects observability and tooling built on Claude Code output.

7. **[#85924 — Queued composer text silently discarded on mobile](https://github.com/anthropics/claude-code/issues/85924)**  
   Open, 6 comments, 4 👍 · In “Queue feedback” mode on Android, typed text is lost when Claude’s turn ends. A mobile UX data-loss bug for remote-control and feedback workflows.

8. **[#70438 — `AskUserQuestion` widget hangs in VS Code extension](https://github.com/anthropics/claude-code/issues/70438)**  
   Open, 5 comments, 3 👍 · Widget renders only a header then hangs indefinitely when called from a Skill on macOS. Blocks interactive skill use in the VS Code panel.

9. **[#80881 — API Error 400 launching parallel subagents in Plan Mode](https://github.com/anthropics/claude-code/issues/80881)**  
   Open, 1 comment · “system content must contain at least one block” error when spawning parallel background subagents in Plan Mode. Impacts planning-heavy multi-agent workflows.

10. **[#87472 — Browser pane blocks private-network LAN resources](https://github.com/anthropics/claude-code/issues/87472)**  
    Open, 3 comments · Desktop browser pane loads top-level RFC1918 pages but blocks all subresources with `net::ERR_BLOCKED_BY_CLIENT`. Makes the built-in browser pane unusable for many internal web apps.

## Key PR Progress

Only one PR was updated in the last 24h, so this section covers all available PR activity.

- **[#83374 — docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374)**  
  Open, no recent comments · Documents the `MessageDisplay` hook event in the bundled plugin-development guidance, which currently omits it from trigger descriptions, event guidance, and the quick-reference table. Important for plugin developers streaming message output.

No other new or updated PRs were present in the 24-hour window.

## Feature Request Trends

Based on the issues updated in the last 24h, the most requested directions are:

- **Multi-session orchestration** — Cross-session messaging, session registries, compaction-resistant state, and shared task boards ([#48965](https://github.com/anthropics/claude-code/issues/48965)).
- **Routines management** — Better MCP tooling for scheduled tasks, grouping, paused states, and delete operations ([#73618](https://github.com/anthropics/claude-code/issues/73618)).
- **Nested repository discovery** — `@repo` picker support for repositories nested under a common parent folder ([#72482](https://github.com/anthropics/claude-code/issues/72482)).
- **Remote control / mobile input options** — Ability to type free-form input when remote permission prompts are set to allow/deny modes ([#73617](https://github.com/anthropics/claude-code/issues/73617)).
- **Plugin developer documentation** — Completing bundled docs for hook event semantics such as `MessageDisplay` ([#83374](https://github.com/anthropics/claude-code/pull/83374)).

## Developer Pain Points

- **Model behavior regressions** — Repetitive prose, Fable guardrail false positives on legitimate dev work, and silent fallback to Opus remain recurring frustrations.
- **Auto-mode edit path** — Hardcoded “bashFirst” instructions lead to sed/Python edits, non-auditable file changes, and broken `/rewind` behavior.
- **Windows reliability** — Repeated Desktop crashes, Windows-1252 corruption, and cross-session `SendMessage` failures on native Windows all remain unresolved.
- **Silent data loss / no-op behavior** — Mobile queued text, Fable mid-turn text treated as thinking, and cross-session messages that report `success: true` without being ingested.
- **Cost reporting discrepancies** — Users report mismatches between session-displayed spend and actual billed usage, e.g. $60 shown vs. $300 billed in dynamic workflows ([#73615](https://github.com/anthropics/claude-code/issues/73615)).
- **Interactive widget instability** — `AskUserQuestion` hangs and incomplete rendering in IDE chat panels block Skill-driven workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-24

## Today's Highlights

No new Codex releases landed in the last 24 hours. Community attention is concentrated on Windows app/extension stability, session resume failures, and frustration with GPT-5.6 Sol context-window gating. A large batch of `copyberry` PRs also landed around preserving content-kind metadata through compaction, forking, truncation, and media handling, signaling continued investment in context-assembly correctness.

## Hot Issues

- [openai/codex#20214](https://github.com/openai/codex/issues/20214) — **Codex App freezes/stutters on Windows 11 Pro despite sufficient resources.** 108 comments / 87 👍. One of the most active Windows-specific issues; users report frequent UI jank even on high-RAM machines.
- [openai/codex#39392](https://github.com/openai/codex/issues/39392) — **Codex App with gpt-5.6-sol aborts with `unsupported prompt_cache_retention`.** 39 comments / 37 👍. Blocks model use on desktop app-server builds, with strong community demand for a fix.
- [openai/codex#38350](https://github.com/openai/codex/issues/38350) — **Recurring scheduled tasks silently pause themselves after successful runs.** 34 comments. Automations reliability issue: users report tasks disabling without authorization, undermining trust in scheduled workflows.
- [openai/codex#25928](https://github.com/openai/codex/issues/25928) — **VS Code/Cursor Codex Extension drops submitted prompts before queueing.** 28 comments / 18 👍. A long-running Windows/Cursor problem that makes IDE workflow unpredictable.
- [openai/codex#39903](https://github.com/openai/codex/issues/39903) — **Requested option to disable “Ran N commands” collapsing in the TUI.** 12 comments / 27 👍. Developers want full command visibility by default rather than collapsed summaries.
- [openai/codex#33192](https://github.com/openai/codex/issues/33192) — **Windows DWM Composition handles accumulate after tool-call tasks.** 12 comments / 10 👍. Points to a desktop-handle leak triggered by terminal tool calls on Windows 10.
- [openai/codex#34619](https://github.com/openai/codex/issues/34619) — **Restore GPT-5.6 Sol’s 372k Codex context window or add an opt-in setting.** 6 comments / 23 👍. Users want explicit control instead of silently reduced context.
- [openai/codex#40258](https://github.com/openai/codex/issues/40258) — **GPT-5.6 Sol is originator-gated: coding clients get 272K while the same account gets 872K.** 4 comments. Newly filed but significant: backend model catalog varies context limits based on HTTP `originator` header.
- [openai/codex#39218](https://github.com/openai/codex/issues/39218) — **Codex Desktop repeatedly logs users out and forces re-login.** 4 comments. Painful auth-loop behavior on macOS, especially for Pro subscribers.
- [openai/codex#33806](https://github.com/openai/codex/issues/33806) — **Windows injected `slash_tmp` root maps to `C:\tmp` and blocks `apply_patch`.** 6 comments. Sandbox path mapping breaks file edits even in writable workspaces.

## Key PR Progress

- [openai/codex#31175](https://github.com/openai/codex/pull/31175) — **Add MongoDB thread store and session migration.** Experimental `mongodb` thread store plus `codex sessions migrate-to-mongo` streaming migration with verification and cleanup.
- [openai/codex#40257](https://github.com/openai/codex/pull/40257) — **Support `cua_repl` as a Node REPL-backed MCP server.** Extends Guardian review evidence, computer-use policy, and transcript capture to `cua_repl`.
- [openai/codex#40221](https://github.com/openai/codex/pull/40221) — **Distinguish Guardian review threads from subagents.** Adds a dedicated `guardian_review` thread source so analytics and persistence treat review threads correctly.
- [openai/codex#40186](https://github.com/openai/codex/pull/40186) — **Identify detached memory requests as memory consolidation.** Sets `thread_source` to `memory_consolidation` and verifies matching startup turn metadata.
- [openai/codex#40200](https://github.com/openai/codex/pull/40200) — **Remove the Plan mode composer nudge.** Drops the contextual “Create a plan?” prompt, Escape dismissal behavior, and per-thread dismissal state.
- [openai/codex#40179](https://github.com/openai/codex/pull/40179) — **Shut down resumed descendants when archiving thread trees.** Fixes a gap where an archived descendant could be resumed and later skipped during parent archiving.
- [openai/codex#40169](https://github.com/openai/codex/pull/40169) — **Add regression coverage for patch approval paging.** Covers live/replayed approval pager scrolling, resizing, dismissal, and single accept/cancel behavior.
- [openai/codex#40281](https://github.com/openai/codex/pull/40281) — **Preserve content kinds during image preparation.** Keeps positional content-kind metadata aligned when image preparation rewrites message content.
- [openai/codex#40196](https://github.com/openai/codex/pull/40196) — **Annotate user input and contextual fragments with content kinds.** Classifies user text/image/audio and preserves fragment kinds when converting to response messages.
- [openai/codex#40264](https://github.com/openai/codex/pull/40264) — **Preserve content metadata when truncating messages.** Prevents passthrough metadata loss and keeps content classifications in sync after message truncation.

## Hot Discussions

### Ideas

- [openai/codex#12567](https://github.com/openai/codex/discussions/12567) — **Memories in Codex.** 35 comments / 14 👍. Maintainers ask how much citation visibility users need when Codex uses memories from previous threads.
- [openai/codex#38021](https://github.com/openai/codex/discussions/38021) — **Persistent, transferable experience memory for Codex.** Proposes an experience-memory layer so learnings from past tasks carry across projects and agents.
- [openai/codex#40227](https://github.com/openai/codex/discussions/40227) — **Missing ChatGPT ↔ Codex handoff.** Users want bidirectional context flow between ChatGPT mobile/desktop discussions and long-running Codex tasks.
- [openai/codex#40191](https://github.com/openai/codex/discussions/40191) — **Reconsider open-sourcing the Codex VS Code extension.** Renewed community request after earlier “not planned short-term” responses.

### Show and tell

- [openai/codex#40034](https://github.com/openai/codex/discussions/40034) — **ASCII creature per agent session plus a Codex hooks question.** A Go tool for visually distinguishing multiple agent sessions across worktrees.
- [openai/codex#40272](https://github.com/openai/codex/discussions/40272) — **Enkidu for macOS.** Privacy-focused local Codex usage tracking and work planning; companion to the Windows tool.
- [openai/codex#40276](https://github.com/openai/codex/discussions/40276) — **[한국어] Enkidu for macOS.** Korean-language announcement of the same macOS usage tracker.
- [openai/codex#39579](https://github.com/openai/codex/discussions/39579) — **Conservative script to clean stale Codex Desktop global state.** Workaround for stale sidebar cache/page mappings without deleting conversation data.
- [openai/codex#40244](https://github.com/openai/codex/discussions/40244) — **Using Codex as a toolbox without calling the Codex model.** Developers are leveraging Codex-backed local tools via ChatGPT to save quota.
- [openai/codex#40165](https://github.com/openai/codex/discussions/40165) — **CodexPulse.** Local Windows tool for tracking Codex usage history, resets, and hourly consumption.

## Feature Request Trends

- **Context-window transparency and configurability.** Users want the full GPT-5.6 Sol context restored or behind an explicit opt-in, especially after discovering originator-based limit gating.
- **Persistent memory and cross-session learning.** Memory consolidation is gaining momentum in both issues and discussions, from thread citations to transferable experience across projects.
- **Session resume reliability.** Multiple requests center on making `codex --resume` robust across CLI, TUI, app-server, and Windows/macOS environments.
- **Windows app/extension stability.** High demand for fixes to UI freezes, handle leaks, extension prompt drops, and sandbox/`apply_patch` permission issues.
- **Usage/limit visibility.** Community-built tools like Enkidu and CodexPulse reflect demand for better local tracking of usage, resets, and quota headroom.
- **More control over UI behavior.** Examples include disabling “Ran N commands” collapsing and selecting existing worktrees instead of always creating new ones.

## Developer Pain Points

- **Windows-specific instability remains the loudest cluster**: app stutter, DWM handle growth, missing hooks, Chrome native-host failures, and sandbox/path mapping problems.
- **Session resume is fragile**: failures include `already has an active writer`, dropped app-server events, `Conversation interrupted`, and invalid rollout JSONL.
- **Context limits feel opaque**: users report different limits depending on client, originator header, or subscription tier, with no documented opt-in path.
- **Authentication surprises**: repeated desktop logouts and locked keychain state interrupt long-running workflows.
- **Automation trust issues**: scheduled tasks self-pausing and recurring task state changes without authorization reduce confidence in autonomous workflows.
- **Lack of extension/hook consistency**: user-defined subagents and hooks behave differently on Windows, and permission overrides can reset unexpectedly during follow-up tasks.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-24

## Today's Highlights
Agent reliability and data integrity dominated the past 24 hours. A single new nightly build (v0.56.0-nightly.20260823) shipped with no stable release, while the issue tracker saw continued heat around subagent false-success reporting, generalist agent hangs, and shell-command stalls. On the PR side, the community landed fixes for symlink path-traversal (a p0 security issue), session-retention data loss, and an EOL Node 20 sandbox image.

## Releases
- **[v0.56.0-nightly.20260823.g5411f113c](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260823.g5411f113c)** — Nightly build published; no feature notes in the release body. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260822.g5411f113c...v0.56.0-nightly.20260823.g5411f113c).

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** *(p1, 13 comments)* — A `codebase_investigator` subagent that hit its turn limit before doing any analysis still reported `status: "success"` / `Termination Reason: "GOAL"`. This masks real agent failures as success and undermines trust in telemetry. The highest-activity issue of the day.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** *(p1, 8 comments, 8 👍)* — The most-liked open issue. Deferring to the generalist agent hangs indefinitely (up to an hour) even for trivial tasks like folder creation. Instructing the model not to use subagents is the only reliable workaround.

3. **[#25166 — Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** *(p1, 4 comments, 3 👍)* — Simple CLI commands show as active and awaiting input after they've already finished, forcing user intervention.

4. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(p2, 5 comments)* — Sessions the extraction agent decides not to read are never marked processed, so they keep resurfacing in the inbox — a compounding background-processing bug.

5. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** *(p2, 4 comments)* — Transcript content is sent to the extraction model *before* any redaction prompt runs, and the service can log existing skill names. A privacy/security concern for the memory pipeline.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(p2, 6 comments)* — Anecdotal but broadly resonant: custom skills (e.g., `gradle`, `git`) are only invoked when the user explicitly demands it, even when the model is doing highly relevant work.

7. **[#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** *(p2, 7 comments)* — Epic proposing AST-aware tools for method-bound reads and codebase mapping, aiming to cut token noise and reduce turns from misaligned file reads.

8. **[#19873 — Leverage model's bash affinity via zero-dependency OS sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** *(p2, 8 comments)* — Proposal to let Gemini 3's native `grep`/`sed`/`awk` workflow run safely under OS-level sandboxing instead of forcing it into higher-level tools.

9. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** *(p1, 4 comments, 1 👍)* — Browser agent terminates with `GOAL` on Wayland sessions, making the feature unusable for a significant Linux segment.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** *(p2, 3 comments, 1 👍)* — Model occasionally reaches for `git reset`/`--force` or risky DB operations when safer alternatives exist; community wants guardrails.

## Key PR Progress
1. **[#2677 — Fix symlink-based path traversal attacks (fixes #1121)](https://github.com/google-gemini/gemini-cli/pull/2677)** *(p0, security, size/xl, closed)* — Resolves a critical flaw where symlinks could bypass workspace directory restrictions. Paths are now resolved to real locations before validation.

2. **[#28981 — Stop session retention deleting unrelated sessions on shortId collision](https://github.com/google-gemini/gemini-cli/pull/28981)** *(size/m, closed)* — Fixes a user-data-loss path where `cleanupExpiredSessions()` grouped by an 8-char filename suffix and deleted every matching file once one expired session was selected.

3. **[#28935 — Isolate Docker/container runtime sockets in macOS Seatbelt](https://github.com/google-gemini/gemini-cli/pull/28935)** *(size/l, closed)* — Closes sandbox-escape vectors via Docker Desktop VirtioFS by denying access to daemon sockets, CLI binaries, Mach/XPC lookups, and POSIX shared memory.

4. **[#28973 — Bump sandbox image from EOL node:20-slim to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28973)** *(p1 security, size/xs, open)* — Node 20 hit end-of-life 2026-04-30; the sandbox's builder and runtime stages were running an unsupported base image with no security fixes.

5. **[#28975 — Keep glob results for symlinked workspace roots](https://github.com/google-gemini/gemini-cli/pull/28975)** *(p2, size/m, open)* — `glob` returns "No files found" when the workspace root is reached via symlink (e.g., `/tmp` → `/private/tmp` on macOS), breaking projects opened through symlinked paths.

6. **[#28980 — Clear OAuth callback timeout when callback server closes](https://github.com/google-gemini/gemini-cli/pull/28980)** *(size/m, closed)* — A five-minute timer was never cleared on terminal paths, retaining the callback (and its resources) after a successful login flow.

7. **[#28914 — Inject on-retry nudge into conversation contents to preserve prefix caching](https://github.com/google-gemini/gemini-cli/pull/28914)** *(area/agent, size/l, open)* — Moves the recovery nudge from `systemInstruction` to the end of `contents`, preserving static prompt prefix caching while ensuring the model sees the nudge immediately before generation.

8. **[#28976 — Honor maxDepth in flat memory imports](https://github.com/google-gemini/gemini-cli/pull/28976)** *(area/agent, size/m, closed)* — `processFlat` accepted a `depth` argument but never enforced it, so long `@import` chains fully expanded in flat mode while tree mode stopped at depth 5 (CLAUDE.md parity).

9. **[#28983 — Detect mixed line endings instead of flagging CRLF on a single match](https://github.com/google-gemini/gemini-cli/pull/28983)** *(p2, area/core, size/m, open)* — `detectLineEnding()` classified a file as CRLF if it contained even one `\r\n`; the fix recognizes genuinely mixed line endings.

10. **[#28982 — Build Remote Agent phone pairing extension (gbr/1)](https://github.com/google-gemini/gemini-cli/pull/28982)** *(size/m, open)* — Example extension (not core) letting a phone running Build Remote Agent spectate a desktop Gemini CLI session via the Bot API, QR pairing, and an 8-char code.

## Feature Request Trends
- **AST-aware code navigation** — Multiple issues explore AST-based reads/search/mapping to reduce token bloat and misaligned reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **OS-level sandboxing for native bash workflows** — The community wants Gemini 3's shell affinity harnessed safely, including stricter macOS Seatbelt profiles ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#28935](https://github.com/google-gemini/gemini-cli/pull/28935)).
- **Smarter, safer agent behavior** — Consistent asks for agents that avoid destructive commands, respect settings overrides, and self-limit their tool scope ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
- **Persistent file-based task tracking** — Replacing in-context WriteToDo with a CRUD file-based system to fight context rot ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
- **Agent self-awareness and observability** — Requests to expose subagent trajectories via `/chat share` and make the CLI accurate about its own flags/hotkeys ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## Developer Pain Points
- **Hangs and stalls** — Generalist agent hangs, shell commands stuck on "Waiting input," and browser agent failures (especially Wayland) are recurring p1 frustrations ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **False success reporting** — Subagents reporting `GOAL` after hitting MAX_TURNS hides real failures, making automated workflows untrustworthy ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Symlink handling is broken in multiple layers** — Unrecognized agent files, glob misses, and a path-traversal CVE all trace back to symlink handling ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079), [#28975](https://github.com/google-gemini/gemini-cli/pull/28975), [#2677](https://github.com/google-gemini/gemini-cli/pull/2677)).
- **Memory system noise and privacy** — Auto Memory re-surfaces low-signal sessions, logs skill names, and sends unredacted content to model context ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Context and token bloat** — Large file reads "firehose" context, tmp scripts scatter across workspaces, and tool counts over ~128 trigger 400 errors ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571), [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-08-24

## Today’s Highlights

The v1.0.81-8 release adds `xhigh` reasoning support for Grok 4.6 and improves local plugin development by live-loading path-sourced plugins. Meanwhile, community issue traffic is focused on reliability regressions: `store_memory` is failing in prereleases, background compaction can drop completed tool results, and Windows plugin updates break while VS Code is running.

## Releases

- **[v1.0.81-8](https://github.com/github/copilot-cli/releases/tag/v1.0.81-8)**  
  - **Added:** `xhigh` reasoning effort support for Grok 4.6.  
  - **Improved:** Path-sourced plugins in a local directory-source marketplace now load live from their real directory — edits take effect on `/restart` or in a new session, without `/plugin update`. Skills and custom agents are now discoverable.

## Hot Issues

- [#4572 – Background compaction can lose a completed parallel GPT tool result and cause HTTP 400](https://github.com/github/copilot-cli/issues/4572)  
  Long-context `gpt-5.6-sol` autopilot sessions can fail after compaction with “No tool output found” even though the tool succeeded. This is a serious data-loss risk in long-running agent sessions.

- [#4535 – `store_memory` fails in v1.0.81 prereleases: “Instance id is required”](https://github.com/github/copilot-cli/issues/4535)  
  Regression in the native memory writer during 1.0.81 prereleases. It blocks agent memory functionality and has received 5 comments from the community.

- [#4570 – Windows: plugin install/update fails with “Access is denied” while VS Code is running](https://github.com/github/copilot-cli/issues/4570)  
  Affects every plugin, not a single one. Closing VS Code works around the issue, pointing to a file-locking conflict in the Windows plugin flow.

- [#4568 – `--cloud` owner picker hangs, reconnect crashes, and task polling reaches 429](https://github.com/github/copilot-cli/issues/4568)  
  Multiple connected cloud-mode failures: the owner picker hangs without repo context, cloud tasks can stall at `session.requested`, and polling quickly hits rate limits.

- [#4560 – Model “auto” always runs with reasoning effort disabled and rejects configuration](https://github.com/github/copilot-cli/issues/4560)  
  The `auto` model router forces `reasoningEffort: null` and prevents users from setting one. This makes `auto` effectively unusable for reasoning-sensitive workflows.

- [#4566 – Agent repeatedly acknowledges work without executing tool actions](https://github.com/github/copilot-cli/issues/4566)  
  The agent agrees to perform work but never calls the expected tools. Community reaction is notable because it directly undermines trust in autonomous mode.

- [#4561 – ACP: `session/cancel` is answered with `stopReason: "end_turn"` instead of `"cancelled"`](https://github.com/github/copilot-cli/issues/4561)  
  ACP protocol mismatch: clients cannot distinguish a user-cancelled turn from a completed turn, which breaks cancellation semantics for ACP-based tools.

- [#4562 – MCP reload reuses startup workspace config after `.github/mcp.json` changes](https://github.com/github/copilot-cli/issues/4562)  
  MCP servers are reloaded from the original config snapshot. Correcting a failed MCP server while the session is open has no effect until a full restart.

- [#2306 – “You are not authorized to use this Copilot feature” enterprise policy error](https://github.com/github/copilot-cli/issues/2306)  
  Long-standing issue with intermittent enterprise authorization failures. It has 9 comments and 3 👍, showing continued community frustration.

- [#4571 – Compaction is triggered at 50% with GPT-5.6 Luna Max](https://github.com/github/copilot-cli/issues/4571)  
  Compaction starts far too early on Luna Max, making even small tasks trigger session compaction and degrading the experience.

## Key PR Progress

Only one PR was updated in the provided 24-hour window, and it is not a substantive code change:

- [#4573 – Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573) by `phuongnam467`  
  No description provided. Appears to be a non-functional rename with no impact on the CLI.

No other PRs with meaningful feature or fix activity were reported in the last 24 hours.

## Feature Request Trends

- **Plan review ergonomics:** [#4563 – Allow inline annotations on plans](https://github.com/github/copilot-cli/issues/4563) asks for selecting plan text/steps and attaching annotations instead of restating context in chat.
- **Telemetry configuration flexibility:** [#4567 – Explicitly trust an insecure `http://` OTLP exporter endpoint](https://github.com/github/copilot-cli/issues/4567) requests opt-in support for local collectors such as `http://localhost:4318`.
- **Reasoning-effort control for `auto` model:** [#4560](https://github.com/github/copilot-cli/issues/4560) highlights the need for `auto` mode to respect user-configured reasoning effort.
- **Live configuration reload:** [#4562 – MCP reload reuses startup workspace config](https://github.com/github/copilot-cli/issues/4562) continues the pattern of users wanting configuration changes to apply without full restarts.

## Developer Pain Points

- **Session reliability around compaction and memory:** Background compaction losing tool results ([#4572](https://github.com/github/copilot-cli/issues/4572)), `store_memory` failing in prereleases ([#4535](https://github.com/github/copilot-cli/issues/4535)), and premature compaction at 50% ([#4571](https://github.com/github/copilot-cli/issues/4571)).
- **Agent execution trust:** The agent sometimes acknowledges work without actually calling tools ([#4566](https://github.com/github/copilot-cli/issues/4566)), making autonomous mode harder to rely on.
- **Authorization and enterprise policy ambiguity:** Intermittent “not authorized” errors ([#2306](https://github.com/github/copilot-cli/issues/2306)) and local 403s before requests reach BYOK providers ([#4414](https://github.com/github/copilot-cli/issues/4414)).
- **Platform-specific file locking:** Windows plugin installs/updates fail while VS Code is running ([#4570](https://github.com/github/copilot-cli/issues/4570)).
- **Cloud and mobile synchronization gaps:** Cloud owner picker hangs and reconnect crashes ([#4568](https://github.com/github/copilot-cli/issues/4568)) and GitHub Mobile not refreshing remote CLI sessions ([#4569](https://github.com/github/copilot-cli/issues/4569)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-24

## Today's Highlights

The community is laser-focused on session reliability: a cluster of reports around "Big Pickle" models stopping mid-generation, `network_error` finish reasons, and stuck "thinking…" UIs is being answered by a wave of PRs adding stream watchdogs, empty-response auto-retry, and better error classification. Meanwhile, the most-voted feature request of the week (76 👍) asks for first-class `queue` vs `steer` semantics for mid-run prompts, signaling growing demand for finer control over long agentic sessions. No new releases landed in the last 24 hours.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#32157 — [2.0] Configurable mid-run prompt delivery: queue vs steer, with compaction-aware steer semantics](https://github.com/anomalyco/opencode/issues/32157)** — The community's most-requested feature right now (76 👍). Users want an explicit distinction between prompts that should be queued behind the current generation and prompts that should steer/interrupt it, with compaction-aware behavior. This reflects a growing need for human-in-the-loop control in long agentic runs.

2. **[#1034 — Local Ollama tool calling either not calling or failing outright](https://github.com/anomalyco/opencode/issues/1034)** — With 31 comments and 16 👍, this remains one of the most-engaged issues. `qwen3:32b` goes through the motions of tool selection but never actually invokes the tool. Frustration is high because local-model support is a core differentiator for many users.

3. **[#44528 — Bug report: network error on Windows 10](https://github.com/anomalyco/opencode/issues/44528)** — v1.18.21 with Big Pickle via OpenCode Go/Ollama cloud started failing after ~4–7 days of working fine. Part of a broader pattern of `Provider finish_reason: network_error` reports (#44522, #44473) that suggests a possible provider-side or transport regression.

4. **[#32366 — UI stuck on 'thinking' indefinitely after stream error](https://github.com/anomalyco/opencode/issues/32366)** — When an SSE stream dies mid-response, the desktop UI never recovers: no error, no state restoration, session becomes unusable. Users must restart the app. This is the UX half of the reliability problem the maintainers are now actively patching.

5. **[#44300 — Zen API free models fail with "Endpoint is unavailable" for any request containing tools](https://github.com/anomalyco/opencode/issues/44300)** — Since 2026-08-23, `x-preview-f-free` / `ox-alpha-free` reject every request that includes a `tools` array, on both Zen Console and Go routes. Anyone relying on free-tier models for agentic workflows is blocked.

6. **[#29094 — Reading chat history during LLM responses still re-snaps the viewport](https://github.com/anomalyco/opencode/issues/29094)** — Re-open of #4196. The viewport snaps back to the bottom on every token while the model streams, making it impossible to read earlier messages mid-response. Multiple users confirm the regression persists across versions.

7. **[#38923 — MCP tool results: structuredContent is dropped](https://github.com/anomalyco/opencode/issues/38923)** — When an MCP server returns both `content` and `structuredContent`, only the text is forwarded to the model. Tools that put their real payload in structured JSON (with a terse text summary) lose data, breaking agent reasoning.

8. **[#29142 — OpenAI-compatible models call write/edit with invalid schema arguments](https://github.com/anomalyco/opencode/issues/29142)** — 5 👍. Intermittent invalid argument shapes for built-in tools cause repeated failed tool calls. The UI surfaces schema errors instead of feeding the exact expected schema back to the model. PR #30224 addresses this by including expected/received keys in the error.

9. **[#44337 — TUI paints empty frames on macOS ARM64 (Apple Silicon)](https://github.com/anomalyco/opencode/issues/44337)** — A severe rendering regression across 1.16.2, 1.17.0, and 1.18.21 on macOS 26.x / M5 Max: the server boots, but the renderer never draws the UI, even with `--pure`.

10. **[#44447 — Big Pickle now frustrating to use: stops mid-thought every ~2 minutes](https://github.com/anomalyco/opencode/issues/44447)** — Users report Big Pickle halting mid-generation as often as every two minutes, forcing constant "Keep going" prompts. Combined with #44505 and #44528, this points to a systemic issue with the provider or session-stream handling rather than isolated config problems.

## Key PR Progress

1. **[#44529 — On-by-default stream watchdogs, queue controls, keep-background abort](https://github.com/anomalyco/opencode/pull/44529)** (merged/closed) — Turns `headerTimeout` and `chunkTimeout` on by default so stalled SSE streams no longer hang turns forever; adds queue controls and keeps background aborts working. Directly targets `#32366`-style hangs.

2. **[#44536 — Auto-retry empty stop responses](https://github.com/anomalyco/opencode/pull/44536)** — Fixes the "have to prompt continue" problem: providers occasionally return an empty response with a clean `finish_reason: stop` (0 output tokens). This is the likely root cause behind the Big Pickle mid-thought halts in #44447.

3. **[#44537 — Retry detail-free response errors](https://github.com/anomalyco/opencode/pull/44537)** — Classifies detail-free Responses API error events as transient provider failures and preserves the raw payload for diagnostics — a targeted fix for the opaque `network_error` failures.

4. **[#44535 — Stop creating phantom "unknown" tool parts on re-emitted deltas](https://github.com/anomalyco/opencode/pull/44535)** — Closes #33618: phantom `unknown` tool calls are created by opencode itself on re-emitted deltas, not by the model. Cleans up session timeline correctness.

5. **[#44539 — Project memory layer (tool + system context source)](https://github.com/anomalyco/opencode/pull/44539)** — Adds a Claude-style file-based memory layer with a `memory` tool (`list`/`read`/`write`/`delete`, namespaced names) so agents accumulate knowledge across sessions. Currently flagged `needs:compliance`.

6. **[#44524 — ACP v2 draft support/features](https://github.com/anomalyco/opencode/pull/44524)** — WIP implementation of the Agent Client Protocol v2 draft spec per the official migration guide. Early signal that OpenCode is preparing for the next ACP generation.

7. **[#44526 — Decouple workspace identity from provisioning](https://github.com/anomalyco/opencode/pull/44526)** — Separates durable workspace identity from provider provisioning so remote workspace startup can overlap model execution or be fully lazy. Relevant for remote/cloud workspace ergonomics.

8. **[#44534 — Render Mermaid Gantt diagrams in the TUI](https://github.com/anomalyco/opencode/pull/44534)** — Terminal-native Gantt chart rendering with aligned section/task labels and states (active, critical, completed, milestone) instead of raw Mermaid source. A nice quality-of-life win for V2 TUI users.

9. **[#44369 — Desktop: reconnect to elected service](https://github.com/anomalyco/opencode/pull/44369)** — Lets the desktop app re-resolve the elected managed daemon after event-stream disconnects and rotates HTTP/SSE/PTY/URL clients together, without enforcing the build version on reconnect.

10. **[#30224 — Include expected and received keys in tool schema error message](https://github.com/anomalyco/opencode/pull/30224)** — Closes #29142. When a model sends wrong argument keys (e.g., `fileContent` instead of `content`), the error now spells out exactly what was expected vs. received — a small fix with outsized impact for local/OpenAI-compatible models.

## Feature Request Trends

- **Mid-run prompt control (queue vs. steer)** — #32157 (76 👍) is the standout: users want explicit semantics for what happens to a prompt submitted while the model is mid-generation, including compaction-aware steering. This is the strongest signal of the week.
- **Configurable retry/backoff policies** — #43596 asks to expose `maxRetries`, `initialDelay`, `backoffFactor`, and `maxDelay` via config instead of hardcoded values, motivated by long provider quota windows.
- **Project/session lifecycle management** — #37280 requests the ability to fully remove projects and their sessions from OpenCode, echoing recurring complaints about project clutter.
- **Persistent project memory** — PR #44539 adds a memory layer so agents retain knowledge across sessions; expect community demand here if it lands.
- **Protocol-forward thinking** — ACP v2 support (#44524) shows early community investment in the next agent-client protocol iteration.

## Developer Pain Points

- **Zen/base URL rate limiting is widespread and unexplained** — Multiple reports (#43627, #44207, #43404) describe the OpenCode Zen base URL returning rate-limit errors for days, even from different accounts and machines. This is blocking users who build external tooling on the Zen API.
- **"Network error" and mid-generation stops are systemic** — Issues #44528, #44522, #44473, #44447, and #44505 all describe models (especially Big Pickle) halting mid-task or failing with `finish_reason: network_error`. The new retry/watchdog/empty-stop PRs (#44529, #44536, #44537) suggest maintainers are treating this as a top priority.
- **Free-tier tool calling is broken** — #44300: Zen free endpoints reject any request containing a `tools` array, effectively disabling agentic workflows on free models.
- **Tool-calling reliability with local models** — #1034 (31 comments) remains unresolved for local Ollama setups; models deliberate but never execute tools.
- **Context limit discrepancies** — #43480: users see ~260K context in OpenCode vs. ~960K in other CLIs against the same base URL, prompting questions about hidden truncation or client-side caps.
- **Desktop/TUI rendering regressions** — #44337 (empty frames on macOS ARM64), #44428 (missing scrollbar), and #29094 (viewport re-snapping) indicate ongoing stability work is needed on the frontend, not just the core runtime.
- **Config merging confusion** — #44290 (albeit hostile in tone) highlights that `opencode debug config` merging from multiple paths is surprising and hard to reason about for multi-model setups.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

## Pi Community Digest — 2026-08-24

### Today’s Highlights

No new Pi release landed in the last 24 hours, but the project saw meaningful progress on provider compatibility and TUI ergonomics. Fixes were closed for strict OpenAI-compatible providers (Kimi/Moonshot), streamed error handling for models like `openrouter/stealth/ox-alpha`, and llama.cpp model visibility. A community-built plugin also appeared for running the Pi loop inside DeepSeek Harness with DSH’s web UI.

### Releases

None in the last 24 hours.

### Hot Issues

- [**#7683 — pi-tui: let components receive mouse events on their own rows**](https://github.com/earendil-works/pi/issues/7683)  
  Open feature request with 11 comments. Proposes an optional `Component.onMouse()` hook so TUI components can handle clicks in their own layout boxes. PR #8032 is already open for this.

- [**#8167 — [bug] Cannot pick a model with built-in llama.cpp support**](https://github.com/earendil-works/pi/issues/8167)  
  llama-server router models were not appearing in the `/model` list despite being loadable via `/llama`. Drew 10 comments and is addressed by PRs #8479 and #8535.

- [**#7885 — npm search not indexing newly published pi-packages**](https://github.com/earendil-works/pi/issues/7885)  
  Ecosystem-discoverability issue: newly published `pi-packages` do not appear in `npm search` or the pi.dev gallery. Important for package authors; 7 comments.

- [**#5932 — Expose ctx.navigateTree() to agents on ExtensionContext**](https://github.com/earendil-works/pi/issues/5932)  
  Open API-gap issue with 7 comments and 2 👍. `navigateTree()` exists only on `ExtensionCommandContext`, which blocks custom agent workflows like `/goal` implementations.

- [**#8344 — Proposal: per-tool output expansion in the fullscreen TUI**](https://github.com/earendil-works/pi/issues/8344)  
  Requests independent mouse-driven expand/collapse for individual tool output blocks. 5 comments; aimed at reducing clutter in long agent sessions.

- [**#7724 — Cold restore replays an overflow assistant removed by live recovery**](https://github.com/earendil-works/pi/issues/7724)  
  Session-consistency bug: after compaction + retry, reopening the session re-inserts the failed/truncated assistant response. 4 comments; significant for long-running coding sessions.

- [**#8537 — Kimi (moonshotai-cn) 400s on replayed tool history**](https://github.com/earendil-works/pi/issues/8537)  
  Strict OpenAI-compatible providers reject orphaned `tool` messages, interleaved user messages, and duplicate `tool_call_id`. Fixed by PR #8536.

- [**#8522 — Agent operates outside session cwd — modifies files in unrelated directories**](https://github.com/earendil-works/pi/issues/8522)  
  Safety-critical bug report: Pi scans from `~/` and edits files outside the intended workspace.

- [**#8531 — Auto-retry stalls silently after consecutive “Request timed out” errors**](https://github.com/earendil-works/pi/issues/8531)  
  Reliability issue: sessions hang indefinitely after repeated timeouts with no visible retry progress.

- [**#663 — /share uses environment’s GITHUB_TOKEN as credentials**](https://github.com/earendil-works/pi/issues/663)  
  Security/least-privilege issue: `/share` passes `GITHUB_TOKEN`/`GH_TOKEN` to `gh`, which may have different permissions than a dedicated gist scope.

### Key PR Progress

- [**#8536 — fix(ai): normalize tool-result history for strict OpenAI-compatible providers**](https://github.com/earendil-works/pi/pull/8536)  
  Fixes session-replay 400s with Kimi/Moonshot by normalizing tool message ordering and IDs.

- [**#8535 — feat(coding-agent): show unloaded llama.cpp models in `/model`**](https://github.com/earendil-works/pi/pull/8535)  
  Lets users target unloaded llama.cpp models directly; they load on request.

- [**#8479 — fix: expose unloaded llama.cpp presets**](https://github.com/earendil-works/pi/pull/8479)  
  Makes llama-server presets selectable even when not preloaded; related to #8167.

- [**#8513 — fix(coding-agent): repair raw control characters in stringified edit args**](https://github.com/earendil-works/pi/pull/8513)  
  Fixes a follow-up validation gap where unescaped newlines/tabs in stringified `edits` broke `JSON.parse`.

- [**#8512 — feat(coding-agent): add optional PowerShell tool**](https://github.com/earendil-works/pi/pull/8512)  
  New optional tool for Windows users struggling with git bash path handling.

- [**#8532 — fix(coding-agent): cap grep and find child output so one line cannot kill the parent**](https://github.com/earendil-works/pi/pull/8532)  
  Prevents V8 `Invalid string length` crashes from unbounded `readline` buffering.

- [**#8509 — fix(ai): surface stream errors and support toolless models**](https://github.com/earendil-works/pi/pull/8509)  
  Treats abnormal `native_finish_reason` values like `network_error` as real failures instead of silent stops.

- [**#8500 — fix(plan-mode): eliminate false positives in plan mode bash guard and plan extraction**](https://github.com/earendil-works/pi/pull/8500)  
  Fixes over-blocking of paths containing `code` and prevents demo text from being mistaken for a plan.

- [**#8424 — fix(coding-agent): discard failed extension factory state**](https://github.com/earendil-works/pi/pull/8424)  
  Cleans up partially initialized extension state when a factory throws, avoiding broken API objects.

- [**#8032 — feat(tui): let components receive mouse events on their own rows**](https://github.com/earendil-works/pi/pull/8032)  
  Implements the component-level mouse-event hook requested in #7683.

### Hot Discussions

**Show and tell**
- [**#8508 — dsh-pi-agent: run the Pi loop inside DeepSeek Harness**](https://github.com/earendil-works/pi/discussions/8508)  
  Community plugin that replaces DSH’s agent loop with Pi while keeping DSH’s web frontend, session persistence, and hooks intact.

### Feature Request Trends

- **TUI interactivity and terminal ergonomics**: component mouse events (#7683), per-tool output expansion (#8344), highlight.js symbol coloring (#8534), and Windows keybinding documentation/rebinds (#8183, #8372).
- **Model/provider catalog growth**: DeepSeek vision model support (#8469), llama.cpp unloaded-model visibility (#8167, #8539), Codex context-ceiling metadata (#8332), and clearer provider error surfacing (#8541, #8526).
- **Extension API and skills**: exposing `ctx.navigateTree()` (#5932), adding Skill visibility providers (#8533), invoking skills mid-sentence (#8457), and emitting `user_bash_complete` events (#8530).
- **Session/state integrity**: better default compaction prompts (#8452), idempotent todo completion (#8529), and safer abort/parent handling (#8525).
- **Windows support**: optional PowerShell tool (#8512), `@` path autocomplete for drive letters (#8523), and terminal keybinding conflict resolution (#8183, #8372).

### Developer Pain Points

- **Provider error opacity and strictness**: generic `ERROR` messages, dropped error bodies, silent retry stalls, and strict OpenAI-compatible validation are recurring sources of friction (#8531, #8537, #8541, #8526).
- **Windows/terminal friction**: keybinding conflicts and path-handling issues continue to affect Windows/WSL users (#8183, #8372, #8523).
- **Extension ecosystem gaps**: npm search not indexing packages, missing extension APIs, and limited Skill invocation hurt ecosystem adoption (#7885, #5932, #8457, #8533).
- **Trust and session correctness**: agents escaping the session cwd, `/share` credential leakage, and history corruption after overflow/restore raise safety concerns (#663, #7724, #8522).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-08-24

### 1. Today's Highlights
The project continues to harden security and review workflows: a new PR puts execution of the reviewed repository's own commands behind a container boundary (#9723), and a fix ensures nested sub-agent approval requests no longer hang silently (#9793). A new high-visibility bug report shows `permissions.allow` does not actually restrict tool schemas sent to the model (#9827), which will likely drive privacy/security discussion. Meanwhile, the latest nightly release ships two Web Shell fixes, and `/review` infrastructure remains the most active development area.

### 2. Releases
**v0.22.0-nightly.20260823.1007bcacfc** — Latest nightly release:
- `fix(web-shell)`: pass session workspace cwd when opening from overview panel (#9730)
- `fix(web-shell)`: another unreleased Web Shell fix included in the nightly build

No stable release in the last 24 hours.

### 3. Hot Issues
1. **[#5975 — API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)**  
   Long-standing streaming timeout bug after ~2 minutes of generation. 11 comments, open, `welcome-pr` labeled. Users on v0.19.3+ report frequent failures that previously recovered with `Thought for 2s`.

2. **[#9827 — `permissions.allow` does not restrict tool schemas sent to the model](https://github.com/QwenLM/qwen-code/issues/9827)**  
   New bug report with 4 comments. The allowlist only affects CLI display; the actual API request still includes the full built-in tool set. Significant for users relying on permissions for privacy/cost control.

3. **[#9089 — PAT-bearing jobs share a host with untrusted branch code](https://github.com/QwenLM/qwen-code/issues/9089)**  
   Closed security issue (7 comments) about runner-level isolation. Highlights ongoing concern that GitHub Actions autofix jobs need stronger isolation from untrusted PR code.

4. **[#9219 — `/review` presubmit overlap matching is exact-line only](https://github.com/QwenLM/qwen-code/issues/9219)**  
   Open review-infrastructure bug. Duplicate findings can pass `noConflict` when comments span multi-line ranges or are semantically identical. 5 comments.

5. **[#9016 — Vertex AI cannot authenticate with Application Default Credentials](https://github.com/QwenLM/qwen-code/issues/9016)**  
   Closed after 4 comments. Requires API key, but any key value disables ADC and leads to 401. Auth friction for GCP users.

6. **[#9821 — Native slash commands intermittently missing from Skill-tool surface](https://github.com/QwenLM/qwen-code/issues/9821)**  
   Race condition where `commands/*.md` register only ~50% of the time. 3 comments, open, versions 0.21.8+.

7. **[#8586 — Track activeWork and background Agent recovery](https://github.com/QwenLM/qwen-code/issues/8586)**  
   Feature request for explicit `activeWork` facts in daemon health and recovery for background agents that lose progress. 4 comments, open, roadmap/background-automation.

8. **[#8769 — Rebuild `/review` Step 3–5 orchestration on the workflow engine](https://github.com/QwenLM/qwen-code/issues/8769)**  
   Proposal to make review fan-out/verification/audit deterministic code instead of model-driven execution. 4 comments, open, needs design discussion.

9. **[#9145 — Approval-mode value domain hand-copied into 20 files across 3 languages](https://github.com/QwenLM/qwen-code/issues/9145)**  
   Maintainability issue: duplicated enum values already diverge in two copies. 4 comments, open, suggests single source of truth plus failure tests.

10. **[#8625 — Windows terminal Chinese input: pinyin display unclear](https://github.com/QwenLM/qwen-code/issues/8625)**  
    UI bug on Windows where Chinese input composition is hard to read. 8 comments, open, `scope/windows`, `welcome-pr`.

### 4. Key PR Progress
1. **[#9723 — Run the reviewed repository's own commands behind a container](https://github.com/QwenLM/qwen-code/pull/9723)**  
   Makes command execution during `/review` a policy-controlled, container-isolated operation. Improves security when reviewing untrusted code.

2. **[#9793 — Surface nested sub-agent approvals under background parents](https://github.com/QwenLM/qwen-code/pull/9793)**  
   Fixes #9782. Nested sub-agent approval requests now surface to UI instead of hanging forever on `TOOL_WAITING_APPROVAL`.

3. **[#9761 — Keep deferred review suggestions recoverable off the PR page](https://github.com/QwenLM/qwen-code/pull/9761)**  
   After review convergence posture engages, deferred suggestions become queryable by external tooling. Supports post-review automation.

4. **[#9590 — Provider-aware reasoning controls](https://github.com/QwenLM/qwen-code/pull/9590)**  
   Adds WebShell reasoning controls for DeepSeek V4, GLM 5.2, and Kimi models, with correct toggle-only, effort tiers, and mandatory-thinking behavior.

5. **[#9546 — Expose Workflow tasks and controls through the daemon](https://github.com/QwenLM/qwen-code/pull/9546)**  
   Opt-in daemon extension exposing live/persisted Workflow runs, including phase, token, logs, approval, and lineage data.

6. **[#9776 — Add per-project outside-repo artifact landing](https://github.com/QwenLM/qwen-code/pull/9776)**  
   Introduces `Storage.getAuditFallbackDir(projectRoot)`, a 0700 per-user directory for artifacts that must not touch the audited repo.

7. **[#9565 — Add output-style layer to the system prompt](https://github.com/QwenLM/qwen-code/pull/9565)**  
   Adds named output styles (Concise, Proactive, etc.) chosen once per session, changing how the agent reports work.

8. **[#9741 — Screen content filters before probe tree restore](https://github.com/QwenLM/qwen-code/pull/9741)**  
   Prevents `scratch-tree` from executing repository-defined smudge filters during review probe restore. Security hardening for `/review`.

9. **[#9492 — Make loop detection result-aware for `task_list` polls](https://github.com/QwenLM/qwen-code/pull/9492)**  
   Stops false-positive loop detection on stateful read tools where teammates may mutate the shared task board between calls.

10. **[#9657 — Compact agent activity summaries in Web Shell](https://github.com/QwenLM/qwen-code/pull/9657)**  
    Folds adjacent thinking/tool/agent activity into one compact summary, with nested expansion for parallel agents.

### 5. Hot Discussions
No discussion data was provided for this digest period.

### 6. Feature Request Trends
- **External context / provider integration**  
  Requests for direct external context provider profiles (#7585), Cursor SDK-backed subagents (#9428), and Web Shell drag-and-drop file attachment (#9743).
- **Background agent lifecycle management**  
  Explicit `activeWork` tracking, recovery for background agents (#8586), and bounded session rotation (#8927).
- **Review/workflow engine consolidation**  
  Moving `/review` orchestration to the workflow engine (#8769), plus convergence exit paths (#9410) and per-file verdict transfer across rebases (#9661).
- **Provider/model flexibility**  
  Requests to support DeepSeek vision in image content (#9832), fix Vertex AI ADC (#9016), provider-aware reasoning controls (#9590), and live model lists in setup wizard (#9389).
- **Security & permission boundaries**  
  Real enforcement of `permissions.allow` in API requests (#9827), runner-level isolation for PAT jobs (#9089), and outside-repo audit artifact landing (#9776).
- **Terminal/Web UI UX improvements**  
  Better Chinese input rendering (#8625), CJK bold text in Web Shell (#9456), drag-drop file support (#9743), and bottom-aligned viewport content (#9305).

### 7. Developer Pain Points
- **Permissions are misleading**: `permissions.allow` changes CLI display but not the actual tool schemas sent to the model (#9827).
- **Intermittent race conditions**: Native slash commands disappear from Skill-tool surface ~50% of the time (#9821); Web Shell repeatedly refreshes session catalog after fallback title resolution (#9562).
- **Auth/connectivity friction**: Vertex AI ADC unusable (#9016); channel workers cannot reach TLS-enabled daemons (#9392); DaemonClient workspace helpers fail on relative base URLs with "Invalid URL" (#9816).
- **Review infrastructure complexity**: Exact-line overlap detection misses multi-line duplicates (#9219); persistent-Critical review loops have no convergence exit (#9410); stacked PRs can become unrecoverable when root branches are deleted (#9661).
- **Duplicated configuration domains**: Approval-mode enum hand-copied across 20 files (#9145); Local Control implemented twice in CLI and Tauri (#9075); ACP integration depends on serve internals (#8084).
- **Terminal rendering issues**: Chinese composition display on Windows (#8625), CJK punctuation breaks bold markdown rendering (#9456), and the ink-based TUI has flicker/mouse limitations (#8662).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-24

## Today's Highlights
The v0.9.11 release shipped with a re-cut recovery after a post-tag fix, while the v0.9.12 milestone tracker opened with a P0 focus on money and safety: bounding runaway spend, approval-scope fixes, and SSE error-frame handling. Maintainers are also attacking structural debt, with new proposals to decompose 10k+-line files and continue a multi-phase dead-code sweep.

## Releases
**v0.9.11** — Codewhale is the public product from Shannon Labs; the `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers. The legacy npm package `deepseek-tui` is deprecated and receives no further releases, so users on v0.8.x legacy `deepseek`/`d…` surfaces must migrate to the current package. The release was prepared via [#5542](https://github.com/Hmbown/CodeWhale/pull/5542) and required an unpublished-tag re-cut recovery after a post-tag fix ([#5565](https://github.com/Hmbown/CodeWhale/pull/5565)).

## Hot Issues
1. **[#3368 — Security hardening/code-scanning fixes tracker](https://github.com/Hmbown/CodeWhale/issues/3368)** (29 comments) — The most-active issue this update. A public release gate for v0.8.64/v0.9.3 security work spanning CodeQL findings and advisory-class reports, deliberately omitting exploit details.
2. **[#5573 — v0.9.12 milestone tracker](https://github.com/Hmbown/CodeWhale/issues/5573)** — The “start here” tracker for the 0.9.12 cycle; P0 must-fixes include #5566 plus approval-scope and SSE error-frame items, targeting a fully green release chain.
3. **[#5566 [CLOSED] — R1: bound runaway spend](https://github.com/Hmbown/CodeWhale/issues/5566)** — Hosts default to `u32::MAX` turns, the tool-call budget is inert, and the stream cap re-arms per step. Fix lands finite `max_steps` + cumulative wall-clock defaults.
4. **[#4326 — Bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326)** (6 comments) — One-shot RSS increased again after cancellation; community wants allocator high-water retention distinguished from a real worker/runtime leak.
5. **[#5587 — Dead-code sweep phases 2-4](https://github.com/Hmbown/CodeWhale/issues/5587)** — Continuation of the audited sweep: 379 `allow(dead_code)` sites classified, 18 truly-dead Tier B/C items remaining, ~242 stale allows, and blanket-allow conversions to address.
6. **[#5586 — Decompose the mega files](https://github.com/Hmbown/CodeWhale/issues/5586)** — User-requested 0.9.12 cleanup lane; `lib.rs` (18.7k), `config.rs` (12.3k), `client.rs` (11.1k), and `runtime_threads.rs` (9.3k) are causing recurring pain.
7. **[#5103 — Rename DeepSeekClient legacy internals](https://github.com/Hmbown/CodeWhale/issues/5103)** — The multi-provider HTTP client is still named `DeepSeekClient` despite supporting OpenAI-compatible, Anthropic, Responses, Codex, and custom routes.
8. **[#5290 — Restore clickable controls on non-English routes](https://github.com/Hmbown/CodeWhale/issues/5290)** — Localized website routes have unreliable click controls; treated as an interaction bug, not a copy-only problem.
9. **[#4394 — Compaction: publish a structured survival contract](https://github.com/Hmbown/CodeWhale/issues/4394)** — Compaction implementation exists (cache-aligned summaries, tool-result pruning, heuristic extraction) but lacks an explicit contract for what survives.
10. **[#3145 — Add visual inspection artifacts for browser/UI tasks](https://github.com/Hmbown/CodeWhale/issues/3145)** — Cursor’s Design Mode as research signal: agents need selected elements, layout relationships, screenshots, and code context for a richer UI evidence loop.

## Key PR Progress
1. **[#5576 — 0.9.12 integration: must-fix + UX fixes (WIP)](https://github.com/Hmbown/CodeWhale/pull/5576)** — 24 commits on `codex/v0912-integration-20260823`; includes R2 approval-scope family grant fix, R3 Chat-Completions SSE error frames. Not ready to merge.
2. **[#5584 — fix(subagents): persist child approval receipts](https://github.com/Hmbown/CodeWhale/pull/5584)** — Closes #5543. Child runtimes inherit the session approval receipt store and commit Asked/terminal outcomes durably instead of relying on in-memory decisions.
3. **[#5559 — fix(release): close pre-tag v0.9.11 truthfulness and tool-output gaps](https://github.com/Hmbown/CodeWhale/pull/5559)** — Model-bound tool output redaction (#5546) applied to `read`/shell results via a credential-shaped policy, landed before the v0.9.11 tag.
4. **[#5561 — fix(engine): auto-retry a reasoning-only clean-stop](https://github.com/Hmbown/CodeWhale/pull/5561)** — A reasoning model returning only hidden reasoning with a clean stop no longer dead-ends the turn with “provider response was incomplete”; it is retried like a transport failure.
5. **[#5563 — fix(onboarding): show all providers on first run](https://github.com/Hmbown/CodeWhale/pull/5563)** — First-run setup previously opened on the local/self-hosted view and pre-selected Ollama, hiding hosted APIs like DeepSeek behind a keypress.
6. **[#5545 — fix(pricing): bill whole Beijing weekends off-peak for DeepSeek V4](https://github.com/Hmbown/CodeWhale/pull/5545)** — Peak/off-peak tier now follows Beijing Time weekend rules (effective 2026-08-23) instead of deciding from UTC hour alone.
7. **[#5523 — refactor(tui): extract tool call stages from turn loop](https://github.com/Hmbown/CodeWhale/pull/5523)** — Splits planning, approval/execution, and result projection while preserving control order, mutable state flow, cancellation, and indexed outcome collection.
8. **[#5524 — feat(tui): add multi-file read_lints operation](https://github.com/Hmbown/CodeWhale/pull/5524)** — The LSP tool now supports `read_lints` for multiple workspace-relative files, reusing the session `LspManager` transport pool.
9. **[#5535 — Supervised operation stack](https://github.com/Hmbown/CodeWhale/pull/5535)** — Opt-in lifecycle outbox (JSONL + webhook with `turn_start`/`turn_end`/`subagent_spawn`…), `/relaunch`, per-session control socket, and goal-continuation quiet-period fix.
10. **[#5406 — feat(tui): prefab provider templates and test-connection](https://github.com/Hmbown/CodeWhale/pull/5406)** — Implements #5350; built-in templates for OpenCode Zen, OpenCode Go, Agnes, and SenseNova so users only enter an API key.

Also notable: [#5565](https://github.com/Hmbown/CodeWhale/pull/5565) documents the unpublished-tag re-cut recovery and the npm/crates.io external publish gates; [#5530](https://github.com/Hmbown/CodeWhale/pull/5530) routes legacy `codewhale completions` through the public binary.

## Hot Discussions
**Q&A**
- **[#5558 — Deriving tool approval from capabilities() at registration?](https://github.com/Hmbown/CodeWhale/discussions/5558)** (3 comments, 2 👍) — The `rlm_eval` advisory notes the trait default at `spec.rs:632-633` returns `Required` for anything with `ExecutesCode`, with the tool overriding to `Auto`. The author asks whether deriving approval from `capabilities()` at registration was considered and ruled out; no maintainer response yet.

## Feature Request Trends
- **Spend governance & durable safety**: finite step/wall-clock defaults (#5566), durable child approval receipts (#5584), public security-hardening tracker (#3368).
- **Provider neutrality**: de-hardcoding registries (#4173), renaming `DeepSeekClient` (#5103), typed Responses dialects + provider profiling (#5092–#5094), prefab provider templates (#5406).
- **Codebase decomposition**: mega-file splits (#5586), dead-code sweeps (#5587), runtime ownership convergence (#3306), modal/setup-wizard refactors (#3957, #3954).
- **Richer agent tool surface**: Playwright browser automation (#3358), LSP navigation/rename/refactor (#3975), AST-backed search and edit previews (#3980), debugger protocol (#3981), notebook/archive inputs (#3977), visual inspection artifacts (#3145).
- **Localization & web**: non-English clickable controls (#5290), dictionary-spine docs migration (#5544), app auth entry points (#5560).
- **Remote/US workbench**: a US-first Cloudflare/AWS/Telegram lane (#1990) as a counterpart to the Tencent/CNB/Feishu path.

## Developer Pain Points
- **Mega-file maintenance**: 10k+-line files in `crates/tui` “keep causing pain” (#5586); an 18.7k-line `lib.rs` makes navigation and review expensive.
- **Runaway-spend risk**: default `u32::MAX` turns and an inert tool-call budget mean unattended runs can spend without bound (#5566).
- **Hidden/local-first onboarding**: first-run UI hid hosted providers behind a keypress, making CodeWhale read as local-only (#5563).
- **Memory uncertainty**: RSS growth after cancelling high-fan-out worker storms remains unexplained (#4326).
- **Legacy naming debt**: `DeepSeekClient` naming persists across engine/config surfaces despite multi-provider support (#5103).
- **Release friction**: npm Trusted Publisher E404 and crates.io 403 external gates forced a documented re-cut recovery flow (#5565).
- **Test instability**: `setup_confirm_toast_names_secret_store_and_global_scope` SIGABRTs with a stack overflow on both `main` and the 0.9.12 branch (#5585).
- **Migration & localization friction**: `deepseek-tui` deprecation and broken clickable controls on non-English routes (#5290) add user-facing churn.

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*