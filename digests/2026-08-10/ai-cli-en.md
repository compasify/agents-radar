# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 00:52 UTC | Tools covered: 10

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
**Digest date: 2026-08-10**

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a stabilization phase: no major stable releases landed in the last 24 hours across any tracked tool, with only Gemini CLI and Qwen Code shipping nightly snapshots. Community attention has shifted from raw capability to reliability and trust — permission enforcement, MCP interoperability, session-state integrity, and multi-agent coordination dominate every issue tracker. MCP has become the de facto integration substrate, but handshake timeouts, provider schema mismatches, and incomplete tool-refresh semantics are causing recurring breakage across tools. Windows remains the single most fragile platform, with at least five tools reporting Windows-specific failures this cycle. Meanwhile, persistent memory, cross-model fallback, and agent-to-agent delegation are emerging as the next competitive frontiers.

## 2. Activity Comparison

*Hot Issues = issues highlighted in the 24h digest. Kimi CLI's digest explicitly reports only 2 issues updated in the window.*

| Tool | Hot Issues (24h) | PRs (24h) | Release Status |
|---|---|---|---|
| Claude Code | 10 | 4 | None |
| OpenAI Codex | 10 | 8 | None |
| Gemini CLI | 10 | 10 | Nightly `v0.56.0-nightly.20260809` |
| GitHub Copilot CLI | 10 | 0 | None |
| Kimi Code CLI | 2 | 1 | None |
| OpenCode | 10 | 10 | None |
| Pi | 10 | 10 | None |
| Qwen Code | 10 | 10 | Nightly `v0.21.8-nightly.20260810` |
| CodeWhale (DeepSeek TUI) | 10 | 5 | None (v0.9.6 in prep) |
| Grok Build | 0 | 0 | None (no activity) |

## 3. Shared Feature Directions

| Direction | Tools (evidence) | Specific Needs |
|---|---|---|
| **MCP reliability & interop** | Copilot CLI (#4370, #4421, #4419), Qwen (#8784), Claude (#66084), Kimi (#739), Codex (#15299) | Retry/backoff on handshake, optional SSE probe tolerance, no interim deny-all policies, deferred-tool index refresh, inbound notifications |
| **Multi-agent orchestration** | Qwen (#8718, #8804, #8775), Gemini (#28738), Codex (#33885), Copilot (#4416), CodeWhale (#5270) | Agents calling agents, child-thread steering, unified task visibility, rate-limit-aware fan-out |
| **Persistent memory / context survival** | Kimi (#1283), Gemini (#26522, #26525), OpenCode (#41453), Claude (#85398), CodeWhale (#5096, #5239) | Cross-session memory, redaction before model send, compaction transparency, no stale persisted credentials |
| **Permission & safety enforcement** | Claude (#83760, #85401), Gemini (#22093, #22672), OpenCode (#13715), CodeWhale (#5293), Copilot (#4419) | Guaranteed deny semantics, subagents respecting disabled-config, configurable denial defaults, non-destructive op preference |
| **TUI / UX configurability** | Codex (#17827 — 150👍), OpenCode (#4283 — 110👍), Pi (#7861, #7866), Qwen (#8659), CodeWhale (#5023, #5314), Copilot (#4418) | Custom status line, working clipboard, stable scroll, IME stability, clean copy, localized UI |
| **Windows reliability** | Codex (#37104, #37595, #37740), Qwen (#7118, #8615), Claude (#84880), CodeWhale (#5023), OpenCode (#41436) | Terminal/PTY startup, non-ASCII user paths, installer verification, file upload in scheduled tasks |
| **Cross-model fallback & resilience** | OpenCode (#7602 — 107👍), Copilot (#4416), CodeWhale (#5239), Gemini (#24246) | Model A→B failover on 429/errors, tool-count budget management, explicit context-window limits |

## 4. Differentiation Analysis

| Tool | Feature Focus & Technical Approach | Target Users |
|---|---|---|
| **Claude Code** | Mature plugin/skills/hooks ecosystem; safety classifier (ClAudit); Remote Control across surfaces. Deepest enterprise trust-workflow integration. | Enterprise teams on Anthropic models |
| **OpenAI Codex** | TUI extensibility (status line), desktop/remote control, gRPC host architecture; strongest desktop-app ambition. | Broad developer base, VS Code ecosystem |
| **Gemini CLI** | Agent delegation (agents→agents), browser subagent, Auto Memory productization; fast nightly cycles on GenAI SDK. | Google ecosystem, automation-heavy users |
| **GitHub Copilot CLI** | Enterprise GitHub governance: org model catalogs, managed settings, `/remote`; MCP via `github-mcp-server`. | GitHub orgs on Copilot Business/Enterprise |
| **Kimi Code CLI** | ACP-mode streaming correctness and wire.jsonl audit trails; light cadence, community asking for memory layer. | MoonshotAI/Kimi users |
| **OpenCode** | Model-agnostic gateway (OpenCode Go), cross-model fallback as top request, Claude Code parity (rules/skills/hooks); V2 convergence. | Multi-provider, proxy/enterprise deployments |
| **Pi** | TUI craftsmanship (scroll, select-to-copy), local llama.cpp runtime, extension/RPC system, new remote-session wire protocol. | TUI purists, local-model users |
| **Qwen Code** | Deterministic workflow engine + native `/coordinate` multi-agent; autofix bot driving CI stabilization; expanding provider presets. | Qwen users, CI/automation teams |
| **CodeWhale** | "Subtractive" runtime philosophy (removing harness obstruction), honest provider/model state, compaction transparency; Rust. | DeepSeek users, multi-provider power users |

## 5. Community Momentum & Maturity

**Rapid iteration** — *Gemini CLI* and *Qwen Code* both shipped nightlies with 10 PRs each; Gemini maintainers are actively retesting P1 subagent bugs, while Qwen's autofix bot is systematically eliminating CI flakes. *Pi* and *OpenCode* also show high velocity (10 PRs each) with a high fix-close rate — Pi closed 8 issues, OpenCode landed the long-standing nested-subagent permission fix (#13715).

**Steady** — *OpenAI Codex* demonstrates strong community engagement (150👍 on the status-line request) with 8 PRs, though no release. *Claude Code* has the largest issue surface but lower PR throughput (4), suggesting a more mature, slower-moving release train. *CodeWhale* is preparing v0.9.6 with meaningful architectural changes.

**Low activity today** — *Copilot CLI* shows zero PR activity despite 10 hot issues — a signal that community demand is outpacing engineering output this cycle. *Kimi Code CLI* is quiet (2 issues, 1 PR). *Grok Build* is dormant.

## 6. Trend Signals

- **Permission/trust is the #1 risk class.** Denied tool calls executing anyway (Claude #83760), subagents running when disabled (Gemini #22093), and silent permission-request hangs (OpenCode #13715) all erode the core trust contract. Expect safety/guardrail features to become a purchase criterion.
- **MCP interoperability is expanding faster than the spec's implementations.** Fixed handshake timeouts with no retry (Copilot #4421), fatal treatment of optional probes (Qwen #8784), and provider schema mismatches (Kimi #739) indicate the ecosystem needs conformance testing and defensive fallbacks.
- **Multi-agent orchestration is the next battleground.** Qwen's native `/coordinate`, Gemini's agents-calling-agents PR, and Codex's child-thread steering all point to a shift from single-agent coding to supervised fan-out — with visibility and rate-limit handling as the main open problems.
- **Memory is becoming a product differentiator.** Kimi's 27-comment memory request, Gemini's Auto Memory redaction concerns, and OpenCode's session-daemon memory recall show that persistent context is the feature users will switch tools for.
- **Windows support is a structural weakness across every tool.** From non-ASCII path mangling (Codex #37740) to installer failures (Qwen #7118, Claude #84880), the gap between macOS/Unix experience and Windows is still wide — an opportunity for any tool that invests seriously in Windows parity.
- **Model resilience and cost control are rising.** Cross-model failover (OpenCode #7602, 107👍), per-model 429 concentration (Copilot #4416), and prompt-caching breakpoints (Copilot #4256) show users treating models as interchangeable, rate-limited resources rather than fixed platform commitments.
- **False-success reporting is a systemic danger.** Subagent MAX_TURNS reported as GOAL success (Gemini #22323), compaction gains invisible (CodeWhale #5096), and file edits claiming "Replaced" without editing (CodeWhale #5209) all mislead automation that depends on truthful completion signals. Honest state reporting is becoming a core engineering value.

**Bottom line for developers:** reliability and trust — not raw model capability — are the differentiating factors right now. Prioritize tools with strong permission enforcement, resilient MCP handling, honest completion reporting, and credible Windows support.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Source: github.com/anthropics/skills · Data as of 2026-08-10*

## 1. Top Skills Ranking

The most-discussed PRs split between new document/design skills and critical repairs to the skill-creator evaluation toolchain.

1. **skill-creator eval reliability overhaul** — [PR #1298](https://github.com/anthropics/skills/pull/1298) [OPEN]. Fixes the widely reproduced `run_eval.py` recall=0% failure (#556, "10+ independent reproductions"), plus Windows stream reading, trigger detection, and parallel-worker handling. The single most active PR thread in the repo; the broken eval loop is the ecosystem's top pain point.
2. **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) [OPEN]. Typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs stranded at page bottoms, and numbering misalignment.
3. **ODT / OpenDocument authoring** — [PR #486](https://github.com/anthropics/skills/pull/486) [OPEN]. Create, fill, and parse `.odt`/`.ods` files with ODT→HTML conversion; triggers on "OpenDocument", "LibreOffice", ISO-standard requests.
4. **frontend-design skill revision** — [PR #210](https://github.com/anthropics/skills/pull/210) [OPEN]. Rewrites the existing frontend-design skill so every instruction is concrete, actionable, and executable within a single Claude conversation.
5. **skill-quality-analyzer + skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) [OPEN]. Two meta-skills that evaluate other skills on structure/documentation (20% weighting) and security posture — early evidence of community demand for skill vetting.
6. **self-audit (v1.3.0)** — [PR #1367](https://github.com/anthropics/skills/pull/1367) [OPEN]. Mechanical output-file verification first, followed by a four-dimension reasoning audit ordered by damage severity; positioned as model- and stack-agnostic.
7. **testing-patterns** — [PR #723](https://github.com/anthropics/skills/pull/723) [OPEN]. Full testing-stack guidance: Testing Trophy philosophy, AAA unit-test patterns, React Testing Library, and what *not* to test.
8. **pyxel (retro game development)** — [PR #525](https://github.com/anthropics/skills/pull/525) [OPEN]. MCP-backed skill for Python retro/pixel-art game development with a write → run_and_capture → inspect → iterate workflow, authored by the Pyxel engine's creator.

Notable mentions: **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302), color-space selection tables), **SAP-RPT-1-OSS predictor** ([#181](https://github.com/anthropics/skills/pull/181)), **plan-file-hygiene** ([#1479](https://github.com/anthropics/skills/pull/1479)). Fixes to existing skills — pdf case-sensitivity ([#538](https://github.com/anthropics/skills/pull/538)) and docx bookmark `w:id` collisions ([#541](https://github.com/anthropics/skills/pull/541)) — also drew steady attention.

## 2. Community Demand Trends

- **Security & trust boundaries** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) is the highest-signal thread: community skills distributed under the `anthropic/` namespace enable trust-boundary abuse, risking elevated permissions on unofficial skills. Related: [#1175](https://github.com/anthropics/skills/issues/1175) on embedding access-control logic in `SKILL.md`.
- **Skill sharing & distribution** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai instead of manual `.skill` file transfer; [#189](https://github.com/anthropics/skills/issues/189) (9 👍) flags duplicate skill content across `document-skills` and `example-skills` plugins.
- **Authoring toolchain reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and [#1169](https://github.com/anthropics/skills/issues/1169) document the eval loop's 0% recall; [#202](https://github.com/anthropics/skills/issues/202) demands skill-creator be rewritten from human-facing documentation into an operational skill.
- **Agent operational discipline** — New-skill proposals cluster here: **compact-memory** ([#1329](https://github.com/anthropics/skills/issues/1329), symbolic notation for agent state), **agent-governance** ([#412](https://github.com/anthropics/skills/issues/412), safety patterns), and a **reasoning-quality-gate pipeline** ([#1385](https://github.com/anthropics/skills/issues/1385)). [#1487](https://github.com/anthropics/skills/issues/1487) adds context efficiency: the bundled `claude-api` skill eagerly injects ~156k tokens in one tool call.
- **Interoperability & platform reach** — [#16](https://github.com/anthropics/skills/issues/16) (expose skills as MCPs) and [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock usage) signal demand to port skills beyond Claude Code's default runtime.

## 3. High-Potential Pending Skills

All sampled PRs are open; these show the strongest merge trajectory based on comment activity, recency, and community engagement:

- **plan-file-hygiene** — [PR #1479](https://github.com/anthropics/skills/pull/1479), updated July 27. Lifecycle management for accumulated planning artifacts; addresses #1417 with explicit co-design credit to community commenters.
- **color-expert** — [PR #1302](https://github.com/anthropics/skills/pull/1302), updated July 21. Self-contained color expertise: ISCC-NBS/Munsell/RAL naming systems and a "what to use when" table for OKLCH/OKLAB/CAM16.
- **self-audit** — [PR #1367](https://github.com/anthropics/skills/pull/1367), v1.3.0 with follow-on pipeline proposal [#1385](https://github.com/anthropics/skills/issues/1385); active iteration suggests maintainer visibility.
- **pyxel** — [PR #525](https://github.com/anthropics/skills/pull/525), updated July 15. Strong domain credibility (Pyxel engine author) and a well-scoped MCP-integrated workflow.
- **skill-creator eval fixes** — [PR #1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1261](https://github.com/anthropics/skills/pull/1261), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050). Multiple independent fixes for the same confirmed bug make a merge of at least one highly likely.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for making the skill lifecycle itself trustworthy — reliable authoring/eval tooling, security and provenance guarantees, org-level sharing, and verification/audit skills that keep agents disciplined and context-efficient.

---

## Claude Code Community Digest — 2026-08-10

### 1. Today's Highlights

No release shipped in the last 24 hours, but the issue tracker shows two clear themes: a large batch of ClAudit/cybersecurity safety-filter false positives is halting legitimate sessions, and several edge-case bugs around plugins, MCP tool indexing, and VSCode forking are drawing attention. Four pull requests were active, mostly focused on hardening the plugin/skill ecosystem and updating security-guidance model references.

### 2. Releases

No new Claude Code releases were published in the last 24 hours.

### 3. Hot Issues

- **[#67246 — Safety-classifier model switch fires on benign content and cannot be overridden with `/model`](https://github.com/anthropics/claude-code/issues/67246)**  
  A mid-session switch from the Fable 5 classifier to Opus 4.8 flagged normal engineering discussion and silently changed the active model. The current notice says this is expected behavior, but users report there is no working override. 12 comments, +3 reactions.

- **[#85240 — Remote Control responses never render until manual page refresh](https://github.com/anthropics/claude-code/issues/85240)**  
  Assistant messages are invisible in the browser until a manual reload, reproducing across iPad Safari/Chrome and macOS Safari. This affects every response and makes Remote Control sessions very hard to use.

- **[#81658 — Cross-platform sync failure causes Cowork conversations to disappear](https://github.com/anthropics/claude-code/issues/81658)**  
  Desktop/Web/Android sync issues are causing chats and conversations to vanish. The reporter suspects a server-side incident, and the issue has several upvotes from users waiting on a fix.

- **[#66084 — `tools/list_changed` does not refresh deferred-tool/ToolSearch index in interactive sessions](https://github.com/anthropics/claude-code/issues/66084)**  
  Still reproducible on 2.1.165, this is a long-running carve-out from earlier MCP tool-refresh bugs (#4118 / #60626). It blocks dynamic MCP tool discovery for workflows that rely on deferred tools.

- **[#85008 — VSCode forking copies the conversation but never attaches the new tab](https://github.com/anthropics/claude-code/issues/85008)**  
  Forking results in a blank chat and an invisible fork in the session list. The reporter notes it is the same missing-`resume` behavior as closed #31831, but triggered while completely idle and still present on extension 2.1.226.

- **[#83760 — A denied tool call was executed anyway](https://github.com/anthropics/claude-code/issues/83760)**  
  A PowerShell tool invocation ran despite the user denying it. Even one case like this is a serious permission-control regression, and the community is likely to treat it as high priority.

- **[#84880 — Claude in Chrome `file_upload` rejects scheduled-task sessions on Windows](https://github.com/anthropics/claude-code/issues/84880)**  
  Users on Windows cannot upload files in scheduled-task sessions. This is explicitly the same as closed #63334, suggesting the original fix did not cover this path.

- **[#82712 — Plugin version resolution escapes marketplace root and adopts `~/.claude` HEAD](https://github.com/anthropics/claude-code/issues/82712)**  
  When a marketplace is shipped without `.git` and a plugin declares `"version": null`, version resolution walks up the filesystem and resolves against the user's `~/.claude` HEAD. This causes per-commit re-cloning and could pull the wrong plugin version entirely.

- **[#83957 — `MessageDisplay` hook returns valid displayContent but CLI renders original text](https://github.com/anthropics/claude-code/issues/83957)**  
  The hook is invoked correctly and returns `hookSpecificOutput`, but the terminal still displays the unmodified message. This breaks transparent message-rewriting workflows.

- **[#85401 / #85398 — Destructive commands against shared resources and stale persisted state](https://github.com/anthropics/claude-code/issues/85401)**  
  Sessions are executing destructive commands against shared host/remote resources, and stale persisted state (credentials, permissions, memory) is being reused. A dangerous combination that makes session isolation and credential freshness urgent.

### 4. Key PR Progress

Only 4 PRs were updated in the last 24 hours; all are listed below.

- **[#85409 — security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5](https://github.com/anthropics/claude-code/pull/85409)**  
  Updates the `security-guidance` plugin README, hook code, and `SECURITY_REVIEW_MODEL` defaults to the current Opus 5 / Sonnet 5 model names.

- **[#85323 — fix(plugin-dev): parse block scalar agent descriptions](https://github.com/anthropics/claude-code/pull/85323)**  
  Fixes the remaining YAML block-scalar parsing defect from #83803. `validate-agent.sh` now measures multiline `description: |` and `description: >` content from indented lines instead of treating the scalar marker as the description.

- **[#85243 — fix(skills): use spec-conformant names in the plugin-dev and hookify skills](https://github.com/anthropics/claude-code/pull/85243)**  
  Eight bundled skills declare title-cased `name` values containing spaces, e.g. `Agent Development` and `Writing Hookify Rules`. This PR aligns them with the skill-spec naming format.

- **[#17395 — [Plugin] Add `agent-session-commit` plugin to incrementally iterate on `AGENTS.md`](https://github.com/anthropics/claude-code/pull/17395)**  
  Now closed/updated in the window. Adds an `agent-session-commit` plugin with a `/session-commit` command and Stop-hook prompt to incrementally update `AGENTS.md` as the authoritative project instructions file.

### 5. Feature Request Trends

- **Protect pinned sessions and session lifecycle controls**  
  [#62104](https://github.com/anthropics/claude-code/issues/62104) asks that pinned CCD sessions be protected from accidental Archive/Delete actions, including keyboard shortcuts and MCP-driven session operations.

- **An actual override for safety-classifier model switching**  
  Multiple reports, especially [#67246](https://github.com/anthropics/claude-code/issues/67246), request a way to refuse or control the automatic safety-classifier model switch when no real risk is present.

- **Reliable cross-device Remote Control and sync**  
  [#85240](https://github.com/anthropics/claude-code/issues/85240) and [#81658](https://github.com/anthropics/claude-code/issues/81658) both point at the same underlying request: Remote Control/sync must render responses and preserve conversations without manual refresh or data loss.

- **Fresh MCP tool state in interactive sessions**  
  [#66084](https://github.com/anthropics/claude-code/issues/66084) represents continued demand for live `tools/list_changed` propagation into the ToolSearch/deferred-tool index.

- **Plugin and skill ecosystem hardening**  
  PRs like [#85243](https://github.com/anthropics/claude-code/pull/85243), [#85323](https://github.com/anthropics/claude-code/pull/85323), and [#82712](https://github.com/anthropics/claude-code/issues/82712) point toward a broader need: stricter spec validation, safer version resolution, and more predictable plugin packaging.

### 6. Developer Pain Points

- **Cybersecurity filter false positives are blocking legitimate work**  
  A large cluster of issues from one user ([#85375](https://github.com/anthropics/claude-code/issues/85375) and related reports) shows ClAudit flags halting sessions for routine tasks like NPM audits, DNS log inspection, and even skill output. These are flagged by Opus 4.8/5 with severity “session-halted,” and there is no clear user-facing escape hatch.

- **Permission denials are not always enforced**  
  [#83760](https://github.com/anthropics/claude-code/issues/83760) is a trust-critical bug: a denied PowerShell tool call still executed. Developers need reliable deny semantics.

- **Session state remains fragile**  
  [#85008](https://github.com/anthropics/claude-code/issues/85008), [#85398](https://github.com/anthropics/claude-code/issues/85398), and [#85401](https://github.com/anthropics/claude-code/issues/85401) all touch stale or misattached session state: forks not attached, credentials/commands leaking across sessions, and destructive actions running against shared resources.

- **Duplicate and re-emerging bugs create tracking fatigue**  
  Several reports are re-opens or duplicates of older issues: [#84880](https://github.com/anthropics/claude-code/issues/84880) duplicates closed #63334, [#85008](https://github.com/anthropics/claude-code/issues/85008) calls out the same root cause as closed #31831, and [#66084](https://github.com/anthropics/claude-code/issues/66084) is a carve-out from #4118 / #60626. This suggests fixes are not always covering all entry points.

- **Hooks/plugins have contract gaps**  
  [#83957](https://github.com/anthropics/claude-code/issues/83957) shows hooks returning valid data that the renderer ignores, and [#82712](https://github.com/anthropics/claude-code/issues/82712) shows plugin version resolution escaping the expected marketplace root. Both break the implicit plugin/hook contract.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-10

## Today’s Highlights
- No new Codex release landed in the last 24 hours; activity is focused on stabilization, Windows-specific fixes, and infrastructure hardening.
- Community attention is centered on TUI configurability ([#17827](https://github.com/openai/codex/issues/17827)) and recurring desktop/remote reliability regressions ([#11011](https://github.com/openai/codex/issues/11011), [#37104](https://github.com/openai/codex/issues/37104), [#37403](https://github.com/openai/codex/issues/37403)).
- PR work improved path resolution safety, added gRPC TCP transport for code-mode, generalized hook execution, and added richer failure diagnostics for plugins and session imports.

## Releases
No new Codex releases in the last 24 hours.

## Hot Issues

1. [Customizable status line (#17827)](https://github.com/openai/codex/issues/17827) — 39 comments, 150 👍. Users want a Claude Code-style configurable status line showing token usage, model, rate limits, git branch, etc. Strong demand for TUI extensibility.

2. [Switching between threads is very slow (#11011)](https://github.com/openai/codex/issues/11011) — 21 comments. Long-standing performance regression in the desktop app; thread switching remains sluggish after updates.

3. [Support inbound MCP notifications routed into active CLI sessions (#15299)](https://github.com/openai/codex/issues/15299) — 15 comments. Codex can call MCP tools, but external servers cannot push events into a live session. Important for event-driven workflows.

4. [Codex mobile does not show SSH remote projects from connected Mac host (#23527)](https://github.com/openai/codex/issues/23527) — 13 comments. Mobile Remote Control cannot see SSH remotes that work on the desktop host, breaking common remote development flows.

5. [WSL integrated terminal silently fails before PTY startup (#37104)](https://github.com/openai/codex/issues/37104) — 6 comments. Desktop app on Windows/WSL cannot open bottom/side panels or start the integrated terminal; failure is local to the renderer.

6. [Opening unloaded chats waits ~5 seconds on owner-discovery timeout (#37398)](https://github.com/openai/codex/issues/37398) — 6 comments. Thread read/resume completes in under 200 ms, but a fixed owner-discovery timeout adds a noticeable delay before the chat appears.

7. [Computer Use list_windows fails with EnumWindows 0x80070003 (#37595)](https://github.com/openai/codex/issues/37595) — 5 comments. New Windows Computer Use regression; likely shares a root cause with duplicate report [#37734](https://github.com/openai/codex/issues/37734).

8. [Desktop cannot resume Remote Control / CLI thread: “already has an active writer” (#37403)](https://github.com/openai/codex/issues/37403) — 4 comments. Regression after the August 7 update; resuming a thread opened through mobile Remote Control fails on macOS desktop.

9. [Goal auto-continuation can enter unbounded no-progress loop (#34248)](https://github.com/openai/codex/issues/34248) — 3 comments. Auto-continuation can generate thousands of duplicate turns via rapid `task_complete` → `task_started` cycles.

10. [Windows Desktop mangles Korean USERPROFILE in generated config paths (#37740)](https://github.com/openai/codex/issues/37740) — 2 comments. Non-ASCII usernames produce invalid TOML and a setup loop. Important localization/correctness bug.

## Key PR Progress

All 8 PRs updated in the last 24 hours:

- [Bound Cursor project path resolution (#37747)](https://github.com/openai/codex/pull/37747) — Prevents recursive directory-tree scans when resolving Cursor project working directories; uses a bounded set of path candidates instead.

- [Update models.json (#31817)](https://github.com/openai/codex/pull/31817) — Automated refresh of model metadata.

- [Add gRPC TCP transport to the code-mode host (#37745)](https://github.com/openai/codex/pull/37745) — Accepts `grpc://IP:PORT` endpoints via `--listen` and prints the bound HTTP endpoint, enabling remote code-mode over TCP.

- [Report I/O subtypes for session config import failures (#37723)](https://github.com/openai/codex/pull/37723) — Appends stable `std::io::ErrorKind` categories such as `invalid_data`, `not_found`, and `permission_denied` to failure analytics.

- [Keep wrapped composer whitespace with following text (#37709)](https://github.com/openai/codex/pull/37709) — Adds grapheme-safe TUI composer wrapping so overflow whitespace does not orphan onto a blank row.

- [Advertise environment config read support (#37654)](https://github.com/openai/codex/pull/37654) — Adds `environmentConfigRead` to exec-server capabilities and defaults it to `false` for older executors.

- [Improve plugin install failure analytics (#37645)](https://github.com/openai/codex/pull/37645) — Adds stable HTTP-status subtypes for remote catalog, mutation, and bundle download failures.

- [Generalize hook handler execution (#37644)](https://github.com/openai/codex/pull/37644) — Refactors handler routing through the hooks engine and rejects MCP tool inputs with values not representable in TOML, such as `null`.

## Feature Request Trends

- **TUI / terminal configurability**: Customizable status line ([#17827](https://github.com/openai/codex/issues/17827)), keyboard navigation in activity view ([#37004](https://github.com/openai/codex/issues/37004)), and general composer/UI polish ([#37709](https://github.com/openai/codex/pull/37709)).

- **Bidirectional MCP support**: Users want inbound MCP notifications routed into active CLI sessions, not just outbound tool calls ([#15299](https://github.com/openai/codex/issues/15299)).

- **Remote / control-plane parity**: Mobile SSH remote visibility ([#23527](https://github.com/openai/codex/issues/23527)), Windows remote control daemon support ([#30372](https://github.com/openai/codex/issues/30372)), and catch-up for missed automations ([#24327](https://github.com/openai/codex/issues/24327)).

- **Multi-agent steering**: Child threads should accept corrections and steering ([#33885](https://github.com/openai/codex/issues/33885)); queue-only messages to completed agents should not pin residency slots ([#32353](https://github.com/openai/codex/issues/32353)).

- **Enterprise config flexibility**: Model alias mapping so gateway model names can map to canonical Codex model metadata ([#21594](https://github.com/openai/codex/issues/21594)).

## Developer Pain Points

- **Windows reliability**: Repeated breakage in WSL terminal startup ([#37104](https://github.com/openai/codex/issues/37104)), Computer Use window inspection ([#37595](https://github.com/openai/codex/issues/37595), [#37281](https://github.com/openai/codex/issues/37281)), Unix-only daemon lifecycle ([#30372](https://github.com/openai/codex/issues/30372)), mangled non-ASCII user paths ([#37740](https://github.com/openai/codex/issues/37740)), missing PyYAML in bundled Python ([#24195](https://github.com/openai/codex/issues/24195)), and unbounded SQLite growth ([#35823](https://github.com/openai/codex/issues/35823)).

- **Performance regressions**: Slow thread switching ([#11011](https://github.com/openai/codex/issues/11011)), fixed owner-discovery timeout ([#37398](https://github.com/openai/codex/issues/37398)), dead WebSocket reuse after network loss ([#33163](https://github.com/openai/codex/issues/33163)), and TUI deadlock under high CPU/memory pressure ([#37735](https://github.com/openai/codex/issues/37735)).

- **Background and automation robustness**: Unbounded goal auto-continuation loops ([#34248](https://github.com/openai/codex/issues/34248)), intermittent deletion of system skills ([#19265](https://github.com/openai/codex/issues/19265)), and missing missed-run catch-up ([#24327](https://github.com/openai/codex/issues/24327)).

- **Multi-agent semantics**: Subagent threads are read-only and cannot be steered ([#33885](https://github.com/openai/codex/issues/33885)), queue-only messages pin residency slots ([#32353](https://github.com/openai/codex/issues/32353)), and `close_agent` is missing from the VS Code multi-agent tool schema ([#36211](https://github.com/openai/codex/issues/36211)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-10

## Today's Highlights
- Only a new nightly release landed: `v0.56.0-nightly.20260809.gcf22ac7e8`; no stable release notes were published today.
- The project is heavily focused on agent reliability: maintainers are retesting several P1 subagent bugs, while new PRs address ACP session poisoning, agent-to-agent delegation, and policy-engine tool approval issues.
- Community attention remains concentrated on agent hangs, false “success” reports, and subagent permission regressions.

## Releases
- [v0.56.0-nightly.20260809.gcf22ac7e8](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8) — Nightly snapshot; no standalone release notes beyond the changelog diff.

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   A subagent reports `status: "success"` even when it hit `MAX_TURNS` before doing any work. This is dangerous for automation because incomplete work can be mistaken for completion. 12 comments; maintainer-only triage with retesting pending.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   The generalist subagent can hang indefinitely on simple tasks like folder creation. Workaround: explicitly instruct the model not to defer to subagents. High community traction: 8 👍 and 8 comments.

3. **[#25166 — Shell command execution gets stuck with “Waiting input” after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   Simple CLI commands finish but the shell tool remains in “Awaiting user input” state, forcing cancellations. 3 👍, 4 comments.

4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   The browser subagent terminates with `GOAL` but fails on Wayland sessions, limiting Linux browser automation.

5. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
   Users report subagents being invoked even when agents are disabled in configuration. Consent/security regression; 3 comments.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   The model rarely uses custom skills/subagents unless explicitly told to, reducing the value of user-configured workflows.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   Auto Memory repeatedly surfaces sessions the extraction agent decides are low-signal, causing wasted retries and background work.

8. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   Transcript content is sent to the model before redaction, and logging may expose loaded skills/config. Privacy-relevant memory-system issue.

9. **[#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   Too many enabled tools produce API 400 errors. Users expect the agent to scope tools instead of exhausting the tool budget.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   The model sometimes chooses `git reset`, `--force`, or destructive DB operations when safer alternatives exist. Safety-relevant request with 1 👍 and 3 comments.

## Key PR Progress
1. **[#28744 — fix(acp): don't start a fresh chat before resuming, it poisons the session file](https://github.com/google-gemini/gemini-cli/pull/28744)**  
   P1 fix preventing ACP session resume from initializing a blank chat that overwrites/poisons the session file. Closes #28693.

2. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)**  
   Open PR enabling subagents to delegate to other subagents or recurse via `tools:` frontmatter. Size L and `help wanted`; addresses #22092.

3. **[#28743 — fix(core): preserve resolved model config systemInstruction and tools](https://github.com/google-gemini/gemini-cli/pull/28743)**  
   Prevents chat-level `systemInstruction`/`tools` from overwriting model-specific resolved configs.

4. **[#28742 — fix(caretaker-agent): use spec-valid names for two triage-worker skills](https://github.com/google-gemini/gemini-cli/pull/28742)**  
   Renames `code_explorer` and `spec_generator` skills to comply with the Agent Skills `name` specification.

5. **[#26540 — fix(core): resolve policy engine bugs affecting tool approvals](https://github.com/google-gemini/gemini-cli/pull/26540)**  
   Fixes approval persistence and removes unnecessary prompts in permissive modes such as `YOLO`/`AUTO_EDIT`. Includes regex null-byte and duplicate-approval fixes.

6. **[#28619 — Update .gitignore to ignore .env and .ai files; add unit tests](https://github.com/google-gemini/gemini-cli/pull/28619)**  
   Closed repo-hygiene PR adding ignores for environment and `.ai` files plus tests.

7. **[#28746 — chore(deps): bump the npm-dependencies group with 74 updates](https://github.com/google-gemini/gemini-cli/pull/28746)**  
   Large dependency maintenance wave covering 74 npm packages, including `simple-git` and MCP SDK updates.

8. **[#28752 — chore(deps): bump puppeteer-core from 24.0.0 to 25.4.0](https://github.com/google-gemini/gemini-cli/pull/28752)**  
   Major version bump for puppeteer-core, likely relevant to browser agent stability.

9. **[#28749 — chore(deps): bump @google/genai from 1.30.0 to 2.15.0](https://github.com/google-gemini/gemini-cli/pull/28749)**  
   Major SDK update for the underlying Gemini client library.

10. **[#28450 — chore(deps): bump the actions-dependencies group across 1 directory with 3 updates](https://github.com/google-gemini/gemini-cli/pull/28450)**  
   CI-facing GitHub Actions dependency bump (still open).

## Feature Request Trends
- **More proactive agent tooling:** Users want Gemini to automatically leverage custom skills and subagents without explicit prompting (#21968).
- **Deep code understanding:** AST-aware file reads, search, and codebase mapping are under active investigation (#22745, #22746).
- **Browser agent resilience:** Persistent-session lock recovery, automatic takeover, and honoring `settings.json` overrides are recurring requests (#22232, #22267).
- **Observability / shareability:** Subagent trajectories should be visible in `/chat share` and included in `/bug` reports (#22598, #21763).
- **Safety guardrails:** Agents should prefer non-destructive git/DB operations and understand CLI self-configuration (#22672, #21432).
- **Systematic evaluation:** A robust component-level behavioral eval infrastructure is a tracked P1 epic (#24353).

## Developer Pain Points
- **Hangs and false completion:** Generalist agent hangs (#21409), shell “Waiting input” states (#25166), and subagent MAX_TURNS reported as success (#22323) are the most disruptive recurring issues.
- **Subagent permission and config regressions:** Subagents running despite disabled agents (#22093) and browser agent ignoring `settings.json` (#22267) erode trust.
- **Tool scalability limits:** >128 tools causes 400 errors (#24246), suggesting Gemini needs better tool scoping.
- **Memory-system privacy and quality:** Auto Memory retry loops (#26522), lack of deterministic redaction (#26525), and invalid inbox patches (#26523) are active concerns.
- **Workspace hygiene:** The model creates temporary scripts in random locations (#23571), uses destructive commands unnecessarily (#22672), and mishandles interactive prompts like Vite setup (#22465).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-10

**Data source:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

## Today's Highlights

No new releases or pull requests landed in the last 24 hours, so attention is concentrated on a wave of newly triaged and long-running issues. The most important themes are **MCP integration reliability** (timeouts, OAuth failures, and interim deny-all policies), **enterprise model availability regressions**, and **parallel execution robustness** (rate limits, lost correlation, dropped kickoff prompts).

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#1857 — Allow users to cancel or remove enqueued messages before they are executed](https://github.com/github/copilot-cli/issues/1857)**  
   High community demand (26 👍, 9 comments). Users want to cancel queued messages sent via `Ctrl+Q` / `Ctrl+Enter`, especially while the agent is busy or during `/compact`. This is a usability gap that makes mistakes costly.

2. **[#2751 — `/remote` fails on organization repositories: “could not resolve repository”](https://github.com/github/copilot-cli/issues/2751)**  
   Enterprise blocker for org-owned repos in Copilot CLI v1.0.28. 13 👍 and 8 comments show broad impact; org admins cannot rely on remote sessions until this is fixed.

3. **[#4390 — Enabled organization models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)**  
   Models explicitly enabled by a Copilot Business org, including Claude Sonnet 5/Opus 5 and Kimi K3, are unavailable in the CLI. This undermines enterprise model rollout and produces confusing “disabled by your organization” errors.

4. **[#4422 — All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)**  
   A newly filed regression: personal Enterprise accounts can no longer use Claude models even though they appear enabled in settings. Users report the issue persists across CLI versions.

5. **[#4370 — MCP initialization fails when `server/discover` returns `-32602`](https://github.com/github/copilot-cli/issues/4370)**  
   Copilot CLI 1.0.79-1 can’t connect to FastMCP servers because FastMCP doesn’t implement `server/discover`. As the MCP ecosystem grows, this is a serious interoperability problem.

6. **[#4421 — MCP initialize handshake has fixed 60s budget with no retry](https://github.com/github/copilot-cli/issues/4421)**  
   Newly filed triage report: npx-launched stdio MCP servers fail ~29% of sessions and are never respawned. No retry/backoff or configurable timeout makes transient startup failures permanent.

7. **[#4419 — Managed-settings interim fail-closed drops user MCP servers](https://github.com/github/copilot-cli/issues/4419)**  
   During managed-settings resolution, the CLI installs an empty allow-list policy (`managedAllowedMcpServerLists: [[]]`), rejecting any user MCP server that registers in that window. This is a silent data-loss/availability bug for MCP configs.

8. **[#4416 — Parallel explore subagent fan-out dies to per-model 429s](https://github.com/github/copilot-cli/issues/4416)**  
   Parallel task-tool subagents all default to `claude-haiku-4.5`, concentrating load on one rate-limited model bucket. No backoff and no automatic model switching despite `eligibleForAutoSwitch` makes multi-agent workflows fragile.

9. **[#4256 — Add `cache_control` breakpoints to Anthropic requests](https://github.com/github/copilot-cli/issues/4256)**  
   Closed feature request with positive community interest (3 👍). Users want to reuse expensive system/tool/repo context via Anthropic prompt caching instead of reprocessing it every turn. Likely a cost/latency win if shipped.

10. **[#4408 — `github-mcp-server` authentication always fails on Copilot Enterprise](https://github.com/github/copilot-cli/issues/4408)**  
   Enterprise-routed accounts can’t use the built-in GitHub MCP server: the OAuth flow fails because the host advertises a cross-origin resource identifier. This leaves Enterprise users without a core MCP workflow.

## Key PR Progress

No pull request activity was reported in the last 24 hours. There are no PR updates to highlight in this digest.

## Feature Request Trends

- **More control over sessions and queued input** — Users want to cancel/remove queued messages ([#1857](https://github.com/github/copilot-cli/issues/1857)) and richer session visibility/configurable HUD ([#4418](https://github.com/github/copilot-cli/issues/4418)).
- **Broader remote-session support** — `/remote` should work outside GitHub-hosted repos, e.g. GitLab and Bitbucket ([#2922](https://github.com/github/copilot-cli/issues/2922)).
- **Configurable Auto-mode model behavior** — Requested features include minimum/maximum model strength and bias toward stronger models ([#4411](https://github.com/github/copilot-cli/issues/4411), [#4412](https://github.com/github/copilot-cli/issues/4412)).
- **MCP reliability and configurability** — Several requests center on making MCP handshake timeout/retry configurable, avoiding interim deny-all policies, and supporting OAuth 3LO URL elicitation ([#4421](https://github.com/github/copilot-cli/issues/4421), [#4419](https://github.com/github/copilot-cli/issues/4419), [#4371](https://github.com/github/copilot-cli/issues/4371)).
- **Cost-aware context reuse** — Request for Anthropic `cache_control` breakpoints to reuse expensive context ([#4256](https://github.com/github/copilot-cli/issues/4256)).
- **UI localization** — Users are asking for Chinese (zh-CN) localization for the desktop app and CLI integration ([#4407](https://github.com/github/copilot-cli/issues/4407)).

## Developer Pain Points

- **MCP servers fail unpredictably and permanently** — Fixed timeouts, missing retries, unsupported `server/discover`, and provisional deny-all policies make MCP integrations a recurring source of session-breaking failures.
- **Enterprise configuration is inconsistent** — Models enabled by org admins are missing from the catalogue, Claude models are randomly disabled for Enterprise users, and `/remote` fails on org repositories.
- **Parallel tool calls are not robust** — Lost request/response correlation, per-model 429 rate limits, and subagent fan-out deadlocks make advanced agentic workflows unreliable.
- **Silent session failures** — Kickoff prompts being dropped after worktree provisioning ([#4423](https://github.com/github/copilot-cli/issues/4423)) and invisible remote-control entitlement settings ([#4409](https://github.com/github/copilot-cli/issues/4409)) erode trust in the CLI.
- **Local resource consumption** — High CPU usage while idle/waiting ([#4415](https://github.com/github/copilot-cli/issues/4415)) and BYOK providers returning local 403s before reaching the provider ([#4414](https://github.com/github/copilot-cli/issues/4414)) point to unresolved client-side issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-10

## 1. Today's Highlights

Activity in the last 24 hours was light — no new releases were published, but two significant issues saw updates and one long-running PR resurfaced. The most critical item is a newly reported ACP-mode streaming hang (#2598) where completed responses never receive a terminal frame and the session silently blocks; meanwhile, the long-awaited Memory System feature request (#1283) continues to accumulate community discussion with 27 comments, signaling strong demand for persistent context.

## 2. Releases

No new versions were published in the last 24 hours.

## 3. Hot Issues

**Only 2 issues were updated in the last 24 hours; both are covered in full below.**

---

### #2598 — ACP/print Streaming Response Hangs Silently (Critical Bug)
**Author:** ai-agent-workbench | **Created:** 2026-08-09 | **Comments:** 0
🔗 [MoonshotAI/kimi-cli Issue #2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)

**Summary:** In `kimi acp` mode with api.kimi.com streaming, the CLI occasionally hangs after all content deltas have arrived: the final `[DONE]`/finish frame never comes, with no error and no timeout. There is no idle-timeout configuration option, so `session/prompt` waits indefinitely. Worse, sending a new message silently replaces the hung turn, and the already-streamed response is **never written to wire.jsonl** (no `content.part`, no `usage.record`). The reporter notes that version 0.31.1 only fixed the Escape-key scenario — this remaining gap affects normal streaming flow.

**Why it matters:** This is a data-integrity and UX issue in one. Users lose conversation history to wire.jsonl (impacting audit trails and cost tracking), and the CLI provides no configurable timeout to recover. The lack of any comments yet suggests it was just filed; expect traction given it's a concrete regression scenario against a documented version limitation.

---

### #1283 — Feature Request: Memory System (Persistent Context Across Sessions)
**Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-09 | **Comments:** 27 | 👍: 0
🔗 [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

**Summary:** Requests a comprehensive Memory System so the CLI can remember useful context, project patterns, and user preferences across sessions — including both automatic memory (AI-managed notes) and manual memory (user-defined instructions).

**Why it matters:** With 27 comments over several months, this is one of the most-discussed open feature requests. It represents a core missing capability for developers who use the CLI daily: every session currently starts from zero context. The August 9 update suggests the thread is still active (possibly re-surfaced by the #2598 bug, since losing wire.jsonl context amplifies the need for a persistent store).

---

## 4. Key PR Progress

**Only 1 PR was updated in the last 24 hours.**

---

### #739 — fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters
**Author:** xiaoju111a | **Created:** 2026-01-28 | **Updated:** 2026-08-09
🔗 [MoonshotAI/kimi-cli PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739)

**Description:** Resolves [Issue #734](https://github.com/MoonshotAI/kimi-cli/issues/734). Fixes a compatibility issue between the Google GenAI provider and MCP tools that include standard JSON Schema metadata fields. When using MCP tools (e.g., Exa MCP) with the Google GenAI provider, validation errors occur.

**Why it matters:** MCP tool compatibility is a growing pain point as more providers adopt it. This PR has been open since January — its August 9 activity may indicate renewed review. If merged, it unblocks users combining Google GenAI with MCP-powered tools, a common stack for agentic workflows.

---

## 5. Feature Request Trends

Based on all currently visible issue activity, the dominant feature direction is:

- **Persistent Memory / Context (#1283):** The most-discussed request. Users want the CLI to retain project patterns, preferences, and notes across sessions — both AI-managed automatic memory and user-defined manual memory. This aligns with broader industry momentum toward "memory layers" for agentic coding tools.

No other new feature requests appeared in the last 24 hours, so #1283 remains the clearest signal of community demand.

## 6. Developer Pain Points

The recurring frustrations evident from the last 24 hours of activity:

1. **Streaming reliability in ACP mode (#2598):** The silent hang — no terminal frame, no error, no timeout — is the sharpest pain point. Developers cannot recover a hung turn, and the lack of an idle-timeout config option leaves them with no escape hatch. Additionally, the silent omission of completed turns from wire.jsonl breaks audit trails and token accounting.

2. **Context loss (#1283, amplified by #2598):** Without a memory system, every session starts from scratch; when wire.jsonl also fails to capture streamed content, that context loss becomes permanent. Community comments on #1283 suggest this is a daily workflow frustration, not a nice-to-have.

3. **Provider/MCP compatibility friction (#739):** MCP tool schemas don't uniformly conform to provider expectations (Google GenAI in this case). This is a recurring class of integration bugs as the MCP ecosystem expands faster than provider adapters can keep up.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-10

## 1. Today's Highlights

No new releases shipped in the last 24 hours; the community's attention is instead absorbed by a reliability incident on OpenCode Go: the relay is injecting a leading space into the `deepseek-v4-flash` model string, causing HTTP 400 errors across direct API calls, the desktop app, and third-party clients ([#41300](https://github.com/anomalyco/opencode/issues/41300), [#41306](https://github.com/anomalyco/opencode/issues/41306), [#41314](https://github.com/anomalyco/opencode/issues/41314), [#41322](https://github.com/anomalyco/opencode/issues/41322)) — and users report it persists even after fix [#41211](https://github.com/anomalyco/opencode/issues/41211) was closed. Meanwhile, V2 convergence continues via a dev-to-v2 merge ([#41460](https://github.com/anomalyco/opencode/pull/41460)), and the long-standing nested-subagent permission hang ([#13715](https://github.com/anomalyco/opencode/issues/13715)) has finally landed a fix in [PR #36046](https://github.com/anomalyco/opencode/pull/36046).

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

1. **[#4283 — Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** — 122 comments, 110 👍. The most-engaged open issue by far: text selection in the TUI fails to copy on multiple OSes. Several months old and still unresolved, it remains the top workflow blocker for daily TUI users.

2. **[#7602 — Native Model Fallback / Failover Support](https://github.com/anomalyco/opencode/issues/7602)** — 29 comments, 107 👍. The top feature request: users want cross-model fallback ("if model A rate-limits or errors → retry with model B"), not just same-model provider failover. This is seen as essential for long-running agent reliability.

3. **[#785 — Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785)** — 29 comments, 38 👍. Proxies without streaming support fail hard with `AI_APICallError` (e.g., Credal OpenAI Proxy). A long-standing compatibility gap that blocks enterprise/proxy deployments.

4. **[#12472 — Native Claude Code hooks compatibility](https://github.com/anomalyco/opencode/issues/12472)** — 17 comments, 38 👍. OpenCode already supports `CLAUDE.md` rules and Claude skills; the community now wants `PreToolUse` / `PostToolUse` / `Stop` hooks from `~/.claude/settings.js` for full drop-in parity.

5. **[#24649 — Clarify self-hosted vs. proxied models in OpenCode Go](https://github.com/anomalyco/opencode/issues/24649)** — 17 comments, 32 👍 (closed). A trust/transparency question: users want clear documentation on which Go models are self-hosted vs. relayed through third-party providers, citing data-governance concerns.

6. **[#13715 — Nested subagent permission asks silently hang](https://github.com/anomalyco/opencode/issues/13715)** — 11 comments, 24 👍. When a subagent spawns another subagent requiring permission, the prompt is never rendered and the session hangs forever. Root cause traced to a `children()` memo in the TUI session route; [PR #36046](https://github.com/anomalyco/opencode/pull/36046) now fixes it.

7. **DeepSeek V4 Flash broken via OpenCode Go relay** — leading-space cluster: [#41300](https://github.com/anomalyco/opencode/issues/41300), [#41306](https://github.com/anomalyco/opencode/issues/41306), [#41314](https://github.com/anomalyco/opencode/issues/41314), [#41322](https://github.com/anomalyco/opencode/issues/41322). The gateway forwards `" deepseek-v4-flash"` (leading space) and upstream rejects it with HTTP 400. Four duplicate reports in 24 hours; users verified via curl that the bug persists after #41211 was closed as fixed — a critical availability incident.

8. **[#39838 — DeepSeek V4 Flash suddenly stopped working](https://github.com/anomalyco/opencode/issues/39838)** — 9 comments, 11 👍. Sudden service breakage for the model with no version info supplied, complicating triage. Likely related to the gateway bug above, but reported independently by users on a different path.

9. **[#30221 — "terminated" error on OpenCode Go](https://github.com/anomalyco/opencode/issues/30221)** — 9 comments, 4 👍. All active Go-subscription sessions consistently terminate with `UnknownError: "terminated"` regardless of model selection, while direct DeepSeek/Z.AI API endpoints work fine — pointing to instability in the Go relay layer.

10. **[#34743 — Xcode ACP ignores opencode.json model config](https://github.com/anomalyco/opencode/issues/34743)** — 15 comments. On macOS 27 beta / Xcode 27 beta, the ACP agent uses the default `big-pickle` model instead of the model configured in `opencode.json` or selected in the TUI (reproduced with LMStudio and Ollama). Silent config bypass is dangerous for users who think they're on a local model.

## 4. Key PR Progress

1. **[#41460 — chore: merge dev into v2](https://github.com/anomalyco/opencode/pull/41460)** — Ports applicable `dev` changes into the V2 branch while preserving V2-only App/Desktop/Core/TUI/SDK/server architecture. Includes RTL/localization coverage and native V2 session export; signals active V2 convergence.

2. **[#40427 — experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427)** — Renderer-performance work measured against an immutable snapshot: initial renderer entry drops from 7.45 MB to 1.82 MB (**−75.5%**). A major win for desktop startup and memory footprint.

3. **[#41350 — animated BusyWave loading indicator](https://github.com/anomalyco/opencode/pull/41350)** — Replaces the shimmering "Thinking" label with a TUI-inspired busy-wave animation, and stays persistent when "show thinking" is disabled.

4. **[#39358 — durable session archival](https://github.com/anomalyco/opencode/pull/39358)** — Adds a first-class, idempotent session archive operation: records a `session.archived` fact and projects `Session.Info.time.archived`, intentionally separate from deletion.

5. **[#41452 — fix(core): align Copilot response continuation](https://github.com/anomalyco/opencode/pull/41452)** (closed) — Brings stateless Copilot Responses continuation in line with the official VS Code Copilot client; persists reasoning item IDs and preserves tool `call_id`s during reconstruction.

6. **[#40997 — refactor(core): replace integration prompts with forms](https://github.com/anomalyco/opencode/pull/40997)** — Unifies GitHub Copilot, Azure, and Cloudflare integration setup via shared `Form.Fields`; OAuth and key answers are validated in Core and key answers persist as provider configuration.

7. **[#41450 — fallback message for empty AI SDK provider errors](https://github.com/anomalyco/opencode/pull/41450)** — AI SDK errors like `AI_APICallError` can carry an empty `message` while structured details exist (`statusCode`, `data.error.code`, rate-limit headers). This derives a useful fallback so the TUI stops showing blank or misleading errors.

8. **[#36046 — fix(tui): show permission prompts from nested subagent chains](https://github.com/anomalyco/opencode/pull/36046)** (closed) — Directly closes #13715: permission requests from nested subagents are now rendered instead of hanging silently.

9. **[#36023 — fix(runtime): upgrade Bun to canary to fix NAPI crash on exit](https://github.com/anomalyco/opencode/pull/36023)** (closed) — Fixes the NAPI crash-on-exit affecting Windows, macOS, and Linux x64; closes #28046, #31563, and #36027.

10. **[#36068 — fix: accept Ollama reasoning field in OpenAI Chat deltas](https://github.com/anomalyco/opencode/pull/36068)** (closed) — Ollama emits `reasoning` (not `reasoning_content`); the strict schema stripped it, silently discarding all reasoning output for local Ollama users. This restores it for streaming and non-streaming paths.

## 5. Feature Request Trends

- **Model resiliency & fallback**: Cross-model failover is the #1 requested capability ([#7602](https://github.com/anomalyco/opencode/issues/7602)); repeated free-tier interruptions ([#32971](https://github.com/anomalyco/opencode/issues/32971), [#41448](https://github.com/anomalyco/opencode/issues/41448)) reinforce the demand for automatic retry/fallback paths.
- **Claude Code ecosystem parity**: After rules and skills, hooks (`PreToolUse`/`PostToolUse`/`Stop`) are the next most-wanted compatibility layer ([#12472](https://github.com/anomalyco/opencode/issues/12472)).
- **Desktop app maturity**: Multi-window/tabs and faster server switching ([#14657](https://github.com/anomalyco/opencode/issues/14657)) — full UI reloads during server switch are too slow for multi-server workflows.
- **Session lifecycle management**: A persistent session daemon with zero-tool-call memory recall ([#41453](https://github.com/anomalyco/opencode/issues/41453)), durable session archival ([#39358](https://github.com/anomalyco/opencode/pull/39358)), and `/clear` semantics ([#38392](https://github.com/anomalyco/opencode/issues/38392)) point to demand for richer session-state control.
- **Input & interaction UX**: Drag-and-drop/paste images in the `question` tool ([#31791](https://github.com/anomalyco/opencode/issues/31791)), send-button-only submission ([#16226](https://github.com/anomalyco/opencode/issues/16226)), and configurable default code concealment ([#35093](https://github.com/anomalyco/opencode/issues/35093)).

## 6. Developer Pain Points

- **Clipboard broken in multiple surfaces**: TUI copy ([#4283](https://github.com/anomalyco/opencode/issues/4283)) and the VS Code extension's copy/paste on Mac ([#39588](https://github.com/anomalyco/opencode/issues/39588)) both fail — a fundamental productivity blocker that keeps resurfacing.
- **OpenCode Go gateway instability**: "terminated" errors ([#30221](https://github.com/anomalyco/opencode/issues/30221)), the DeepSeek V4 Flash leading-space HTTP 400 cluster ([#41300](https://github.com/anomalyco/opencode/issues/41300) / [#41306](https://github.com/anomalyco/opencode/issues/41306) / [#41314](https://github.com/anomalyco/opencode/issues/41314) / [#41322](https://github.com/anomalyco/opencode/issues/41322)), and billing sync failures ([#41430](https://github.com/anomalyco/opencode/issues/41430)) erode trust in the paid tier.
- **Model options silently dropped**: `reasoning.effort`/thinking options are ignored for `@ai-sdk/openai-compatible` ([#27361](https://github.com/anomalyco/opencode/issues/27361)) and custom OpenAI providers ([#41294](https://github.com/anomalyco/opencode/issues/41294)) — configs look correct but the options never reach the API.
- **Hangs and freezes**: Nested-subagent permission hangs ([#13715](https://github.com/anomalyco/opencode/issues/13715), now fixed), TUI blank-screen freeze on macOS ([#41284](https://github.com/anomalyco/opencode/issues/41284)), and indefinite hangs on Windows unless run as Administrator ([#41436](https://github.com/anomalyco/opencode/issues/41436)) — all require force-kill with zero error output for debugging.
- **Streaming/proxy incompatibility**: No supported way to disable streaming for proxies that don't support it ([#785](https://github.com/anomalyco/opencode/issues/785)) — a hard blocker for enterprise proxy-based deployments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-10

## 1. Today's Highlights

The Pi project saw intense activity around TUI stability and extension tooling, with several crash-level rendering bugs reported on 2026-08-09 — including a session abort when any rendered line exceeds terminal width (#7868). On the fix side, two PRs landed to resolve GitHub Copilot login rate-limit failures for large organizations (#7851, #7844), and the longstanding llama.cpp default-model race condition was closed via catalog caching (#7072). No new releases were published in the last 24 hours.

## 2. Releases

No new versions in the last 24 hours.

## 3. Hot Issues

1. **llama.cpp default model startup failure** — [#6922](https://github.com/earendil-works/pi/issues/6922) *(closed, 14 👍, 10 comments)*  
   When `defaultProvider` is set to `"llama.cpp"`, Pi shows "No models available" on startup and exits (non-interactive) or shows a warning banner (interactive). The most-discussed issue this cycle, it stems from the async model refresh race condition tracked in #6948, now fixed by PR #7072.

2. **High CPU usage on macOS with long sessions** — [#7730](https://github.com/earendil-works/pi/issues/7730) *(open, 6 👍, 6 comments)*  
   CPU swings between 50–110% with memory at 600–800 MB, anecdotally correlated with session/context length. Still open; a concern for developers running long-lived agent sessions on Mac.

3. **llama.cpp defaultProvider/defaultModel race condition** — [#6948](https://github.com/earendil-works/pi/issues/6948) *(closed)*  
   The model appears correctly in `/model` after startup, but the session does not start with it because the async model refresh completes too late. Resolved by caching the llama.cpp model catalog in PR #7072.

4. **Renderer hard-crashes when any line exceeds terminal width** — [#7868](https://github.com/earendil-works/pi/issues/7868) *(closed)*  
   The TUI aborts the entire agent session when a rendered line is wider than the terminal, instead of truncating it. Reported as killing real sessions mid-work on v0.84.1 — a serious robustness gap in the rendering path.

5. **Auto-compaction stops active tasks instead of resuming** — [#7848](https://github.com/earendil-works/pi/issues/7848) *(closed)*  
   When the context limit is hit during in-progress tool work, auto-compaction runs but Pi sometimes stops and waits for another user message instead of continuing the unfinished task. Breaks long autonomous workflows, especially with certain model configurations.

6. **GitHub Copilot login fails with 429 for orgs with 20+ models** — [#7850](https://github.com/earendil-works/pi/issues/7850) *(closed)*  
   Device authorization succeeds, then Pi fails during Copilot login with "429 Too Many Requests" because it bulk-enables every known model concurrently. Addressed independently by PRs #7851 and #7844.

7. **EPIPE crash when a desktop host closes stdout** — [#7860](https://github.com/earendil-works/pi/issues/7860) *(closed)*  
   Running Pi as an external CLI agent inside a desktop host app crashes with an unhandled `EPIPE` after every turn once the host closes the read end of the pipe. Notably, a previous fix PR #5183 was never merged.

8. **Bun runtime crash: `zlib.createZstdDecompress is not a function`** — [#7846](https://github.com/earendil-works/pi/issues/7846) *(closed)*  
   v0.84.0/0.84.1 crash on startup under Bun with a TypeError originating in undici's fetch handling. Blocks all Bun-based global installs.

9. **AI21 API retired (HTTP 410)** — [#7869](https://github.com/earendil-works/pi/issues/7869) *(closed)*  
   Provider calls started failing mid-session with 410; the AI21 Gateway has moved to `https://app.ai21.com`. A reminder of external API lifecycle risk for built-in provider integrations.

10. **Scroll position keeps jumping while streaming long output** — [#7861](https://github.com/earendil-works/pi/issues/7861) *(closed)*  
    Scrolling up during streaming causes the view to repeatedly jump back until streaming ends, making it impractical to read earlier output during long tool runs. Part of a family of TUI scroll/viewport complaints (#7616, #7495).

## 4. Key PR Progress

1. **feat(coding-agent): expose context files at session start** — [#7872](https://github.com/earendil-works/pi/pull/7872) *(closed)*  
   Exposes loaded AGENTS/CLAUDE context files on the `session_start` event, documents the new event field, and adds focused session-start test coverage.

2. **fix(coding-agent): cache llama.cpp model catalog** — [#7072](https://github.com/earendil-works/pi/pull/7072) *(closed)*  
   Caches the llama.cpp model catalog, fixing the race condition in #6948 where `defaultProvider`/`defaultModel` were not applied at startup.

3. **feat(tui): add `copyOnSelect` option to TuiAltScreen** — [#7866](https://github.com/earendil-works/pi/pull/7866) *(closed)*  
   Adds a `copyOnSelect` option (defaults to `true`) so users can disable automatic copy-to-clipboard when selecting text with the mouse in fullscreen TUI mode. Addresses #7720.

4. **fix(tui): handle pageUp/pageDown in base SelectList** — [#7865](https://github.com/earendil-works/pi/pull/7865) *(closed)*  
   Adds `tui.select.pageUp`/`pageDown` keybinding handling to the base SelectList, fixing missing keys in model-selector and other selector components.

5. **feat(protocol): add remote session wire protocol** — [#7344](https://github.com/earendil-works/pi/pull/7344) *(closed)*  
   Introduces the transport-neutral `@earendil-works/pi-protocol` package with validated remote-session commands, events, snapshots, bounded CBOR encoding, and incremental length-prefixed framing — a significant architectural step for remote sessions.

6. **fix(coding-agent): route extension commands regardless of `expandPromptTemplates`** — [#7858](https://github.com/earendil-works/pi/pull/7858) *(closed)*  
   Fixes the documented-but-broken pattern where `pi.sendUserMessage()` could not trigger extension commands because `prompt()` skipped command handling. Resolves #7859.

7. **feat(agent): expose `expandPromptTemplates` in `sendUserMessage`** — [#7857](https://github.com/earendil-works/pi/pull/7857) *(open)*  
   An open alternative approach to the same problem; author argues exposing the flag is no different from the user pressing Enter. Still open while #7858 provides the immediate fix.

8. **fix(ai): repair JSON-serialized structured tool arguments during validation** — [#7856](https://github.com/earendil-works/pi/pull/7856) *(closed)*  
   Fixes double-serialized nested tool arguments (JSON object/array passed as string) that previously hard-failed with `must be object`, causing expensive retry loops.

9. **fix(provider): enable GitHub Copilot model policies sequentially** — [#7851](https://github.com/earendil-works/pi/pull/7851) *(closed)*  
   Replaces concurrent policy-enablement for all known models with sequential requests, avoiding GitHub's 429 rate limit for orgs with many available models (fixes #7850). Companion PR #7844 additionally removes bulk policy updates from the login flow.

10. **fix(coding-agent): fix typo in RPC example** — [#7853](https://github.com/earendil-works/pi/pull/7853) *(closed)*  
    Fixes `--no-extension` → `--no-extensions` in the RPC extension example. Small but notable: the author reported an LLM-generated extension copied the typo from the docs.

## 5. Feature Request Trends

- **TUI interaction polish**: Repeated requests for stable scrolling (no jumping during streaming or tool-block growth), mouse-click cursor placement in the input textarea (#7852), configurable select-to-copy (#7720), and Page Up/Page Down history scrolling (#7616). PRs #7865 and #7866 land the first batch.
- **Extension system maturity**: Extensions need to be first-class citizens — reliable command routing from tools (#7859), correct custom tool render lifecycle after `/reload` (#7740), and access to loaded AGENTS/CLAUDE context files at session start (#7872).
- **Session reliability**: Auto-compaction must resume the active task instead of stopping (#7848); OpenAI Codex "request buffer limit" errors should be classified as context overflow rather than transient failures (#7867); `ExtensionContext.exec` should escalate to SIGKILL when children ignore SIGTERM (#7864).
- **Provider configuration & add-ons**: Per-model thinking-level persistence (#7871), new built-in providers (Qwen China Individual Token Plan, #7847), and accurate context-window metadata — the remote catalog overlay incorrectly caps z-ai/glm-5.2 at 262k instead of 1M (#7870).
- **Capability port from oh-my-pi**: A proposal to port stream rules, subagent task/review tools, a secondary-model advisor, and cross-session memory (#7845) — implementation was ready in PR #7823 but auto-closed by the gate.

## 6. Developer Pain Points

- **Crash-level fragility**: Renderer aborts on wide terminal lines (#7868), EPIPE crashes with desktop hosts (#7860), and Bun startup crashes (#7846) all point to inadequate error containment in I/O and rendering paths.
- **Long-session reliability**: Auto-compaction stopping tasks (#7848), random truncation errors (#7855), and high CPU on macOS (#7730) frustrate users running long agentic workflows.
- **TUI scroll/viewport instability**: Three separate scroll-jumping reports (#7616, #7861, #7495) indicate the differential renderer's safe-path fallback degrades the reading experience during streaming.
- **Configuration fragility**: llama.cpp default provider/model flows (#6922, #6948) remain confusing, and silent remote-catalog overrides that beat correct built-in model metadata cause subtle context-window misconfiguration (#7870).
- **Network & auth resilience**: Single transient stalls fail entire catalog refreshes (#7323), and Copilot login rate-limits for large orgs (#7850) show the need for retry/backoff and sequential auth flows.
- **Extension dev friction**: Documented patterns that don't work (`sendUserMessage` triggering commands, #7859), post-`/reload` render lifecycle issues (#7740), and typo'd examples (#7853) slow down extension authors.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-10

## Today's Highlights
Nightly v0.21.8 shipped with Qoder plugin extension support and CI area-owner auto-assignment. Multi-agent coordination dominated the roadmap signal this week: a new RFC for cross-session orchestration (#8718), a native `/coordinate` implementation (#8804), and proposals to unify session reasoning loops (#8775). Meanwhile, the autofix bot drove a large CI-stabilization push, tackling sandbox hangs, shared-`/tmp` test collisions, and repeated E2E failures.

## Releases
**v0.21.8-nightly.20260810.55e20db328** — Nightly release:
- feat(core): support Qoder plugin extensions by @callmeYe ([#8661](https://github.com/QwenLM/qwen-code/pull/8661))
- feat(ci): auto-assign issues to area owners

## Hot Issues
1. [#8718](https://github.com/QwenLM/qwen-code/issues/8718) — **RFC: Native coordination for independent Qwen sessions** (P2, 8 comments). Proposes a leader that dispatches 2–3 self-contained workers while staying interactive, with correlated runtime/task state. The clearest multi-agent roadmap signal this week.
2. [#8784](https://github.com/QwenLM/qwen-code/issues/8784) — **Streamable HTTP: optional GET/SSE stream rejected with 404 kills the whole MCP connection** (P2). A single optional probe failure tears down an otherwise valid MCP connection; 5 comments from users hitting strict servers.
3. [#8823](https://github.com/QwenLM/qwen-code/issues/8823) — **bug(sdk): hidden unrecognized diagnostics mutate and evict transcript state** (P2). Unrecognized daemon events enter the transcript reducer before being hidden, corrupting shared conversation state.
4. [#7118](https://github.com/QwenLM/qwen-code/issues/7118) — **Windows standalone installer fails when powershell.exe cannot resolve Get-FileHash** (P2, 3 👍, `welcome-pr`). SHA-256 verification aborts installs; workaround is `--method npm`.
5. [#8659](https://github.com/QwenLM/qwen-code/issues/8659) — **TUI flickering / screen tearing in web-based terminals** (P3, `welcome-pr`). Virtualized History mode's full-screen ANSI redraws break in Alibaba Cloud Workbench and similar web terminals.
6. [#8721](https://github.com/QwenLM/qwen-code/issues/8721) — **npm test doesn't run due to unknown flag** (P2). `make test` dies at startup with an `EUNKNOWN` error from cross-env, blocking local contribution.
7. [#8678](https://github.com/QwenLM/qwen-code/issues/8678) — **fix(serve): Preserve current session when a large restore times out** (P1). PR1 (#8691) is merged, implementing the timeout contract; remaining work is in progress.
8. [#8615](https://github.com/QwenLM/qwen-code/issues/8615) — **[Closed] Desktop 0.1.0 / Windows: bundled runtime crashes EISDIR lstat 'C:'** (P1). Workspace-open crash on Windows 11; closed this week, marking progress on Desktop stability.
9. [#8769](https://github.com/QwenLM/qwen-code/issues/8769) — **Proposal: rebuild /review Step 3–5 orchestration on the workflow engine** (P2). Move agent fan-out, verification, and reverse audit from model-driven execution to deterministic code under `QWEN_CODE_ENABLE_WORKFLOWS`.
10. [#8775](https://github.com/QwenLM/qwen-code/issues/8775) — **Proposal: unify the session reasoning loops on a Turn-based SessionRuntime** (P2). Identifies six independent loop implementations (TUI, headless, ACP, `serve`, AgentCore) that should converge.

## Key PR Progress
1. [#8804](https://github.com/QwenLM/qwen-code/pull/8804) — **feat(cli): add native multi-agent coordination**. Adds `/coordinate <goal>` on top of the existing Agent Team runtime and Agent View tabs — no new supervisor, PTY stack, or session manager, directly addressing #8718.
2. [#8732](https://github.com/QwenLM/qwen-code/pull/8732) — **feat(cli): adopt Goal v3 in ACP sessions**. Replaces the legacy Stop-hook `/goal` with the canonical Goal v3 state machine supporting create/status/edit/pause/resume/clear.
3. [#8818](https://github.com/QwenLM/qwen-code/pull/8818) — **fix(core): catch content-only thinking-tag leaks on all OpenAI-compatible providers**. Closes two bypasses that let `<think>` content leak into `content`; addresses the #6666 bug class at the provider-default level.
4. [#8368](https://github.com/QwenLM/qwen-code/pull/8368) — **feat(auth): add Kimi and Xiaomi MiMo providers**. First-class `/auth` presets: Kimi (Coding Plan, API Key CN/Intl) and Xiaomi MiMo (pay-as-you-go, China/Singapore/US).
5. [#8403](https://github.com/QwenLM/qwen-code/pull/8403) — **feat(audit): add legacy code audit workflow**. Adds `/audit <directory> [--effort low|medium|high]` for auditing existing modules without a diff or PR, with deterministic CLI helpers.
6. [#8740](https://github.com/QwenLM/qwen-code/pull/8740) — **feat(serve): share one Chrome bridge across sessions via multi-client /cdp tunnel**. `cdp_*` frames carry an optional `linkId`; all sessions share a single Chrome dialect instead of re-dialing.
7. [#8812](https://github.com/QwenLM/qwen-code/pull/8812) — **fix(web-shell): stop rendering unrecognized daemon events in transcripts**. Fixes the user-visible side of #8823 by stamping `debugReason` on normalizer debug events and branching on it.
8. [#8816](https://github.com/QwenLM/qwen-code/pull/8816) — **fix(ci): watchdog silent sandbox hangs and reap the containers they leak**. Adds `QWEN_IDLE_TIMEOUT_MS` (default 20 min) to kill zero-output agents and cleans up leaked containers.
9. [#8803](https://github.com/QwenLM/qwen-code/pull/8803) — **fix(memory): recall relevant topics beyond scan cap**. Ranks the complete parsed pool first, then sends at most 200 candidates for model selection, improving recall quality.
10. [#8802](https://github.com/QwenLM/qwen-code/pull/8802) — **fix(desktop): restore the macOS window after closing it**. Closing hides instead of destroys; Dock/Finder reopen restores the same window without stealing focus from Local Control.

## Feature Request Trends
- **Multi-agent / session coordination is the dominant direction**: RFC #8718, `/coordinate` in #8804, workflow-engine rebuild of `/review` (#8769), and Turn-based SessionRuntime unification (#8775) all push toward deterministic agent fan-out and cross-session orchestration.
- **Enterprise external context & memory profiles**: #7585 (direct external context provider, 12 comments) and #7449 (enterprise external-memory integration) both propose provider-neutral, documentation-first integration profiles — still in discussion.
- **Workflow engine as the orchestration platform**: beyond `/review` (#8769), the closed #8690 asks for orchestration policy guidance inside the Workflow tool description itself, signaling the engine is becoming the preferred substrate for deterministic agent pipelines.
- **Third-party provider expansion**: PR #8368 adding Kimi and Xiaomi MiMo reflects sustained demand for more `/auth` provider presets.
- **Phone/session remote access maturing**: the Local Control QR-code concept (#8595, closed) is being iterated on via desktop PRs #8806 and #8802, moving from proposal to polish.

## Developer Pain Points
- **CI/E2E flakiness is the top recurring issue**: five bot-filed failures this week (#8756, #8766, #8799, #8822, #8771), including an aborted nightly release, with root causes in monitor-tool assertions and Qoder plugin install tests.
- **Shared `/tmp` sidecar paths in tests**: background-shell and shell-registry fixtures collided on fixed output paths across workers and CI hosts (#8795, #8813); the autofix bot is systematically eliminating this class of flake.
- **Windows remains fragile**: installer SHA-256 verification fails when Get-FileHash can't resolve (#7118), and Desktop 0.1.0 crashed at startup with EISDIR (#8615, closed). Both required community workarounds.
- **MCP spec-strictness issues**: #8784 shows the client treating an optional GET/SSE probe failure as fatal, creating interop problems with spec-compliant strict servers.
- **Daemon state consistency**: unrecognized events mutating transcripts (#8823), session-restore timeouts (#8678), and uncoordinated caller-supplied session IDs (#8411) expose friction between the daemon architecture and multiple client surfaces.
- **Environment-specific rendering**: TUI full-screen redraws in web terminals (#8659) and flaky cross-env test startup (#8721) continue to add friction for developers in non-standard shells.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-10

## 1. Today's Highlights

CodeWhale is preparing **v0.9.6**, a "subtractive runtime release" focused on rebuilding compaction around a single provider summary and removing harness-created obstruction. A first-time contributor also landed support for **Mistral AI** as a first-class provider route, while release-pipeline fixes landed for CNB asset URLs and crate publication order. Community attention remains concentrated on context-window fallback/compaction transparency, provider/model state coherence, and TUI input reliability.

## 2. Releases

No new release was published in the last 24 hours. The closed PR [Hmbown/CodeWhale#5313](https://github.com/Hmbown/CodeWhale/pull/5313) prepares **v0.9.6**, described as a subtractive runtime release that removes obstruction while preserving explicit budgets, deadlines, cancellation, and truthful provider state. It also rebuilds compaction around one provider summary plus a committed successor handoff.

## 3. Hot Issues

- [Hmbown/CodeWhale#5034](https://github.com/Hmbown/CodeWhale/issues/5034) — **Switching providers can retain an unrelated default model**  
  Provider and model resolution are not updated as one coherent state; e.g., switching to OpenAI can leave `gpt-5.5` as the default even when inherited from a different route. Important for predictable multi-provider workflows.

- [Hmbown/CodeWhale#5096](https://github.com/Hmbown/CodeWhale/issues/5096) — **Compaction gain not visible**  
  `/compact` reports success, but the token counter does not visibly drop (e.g., stays at 37K/128K). Users cannot tell whether compaction actually reclaimed context.

- [Hmbown/CodeWhale#5293](https://github.com/Hmbown/CodeWhale/issues/5293) — **TUI: make deny-by-default approval selection configurable**  
  v0.9.4 changed the default highlighted option in permission dialogs, risking accidental denial during quick confirmation. The community wants the behavior configurable and clearly explained.

- [Hmbown/CodeWhale#5239](https://github.com/Hmbown/CodeWhale/issues/5239) — **Model supports 1M context, but compaction triggers at 128K**  
  A recurring confusion: unknown model IDs silently fall back to the 128K legacy default. Users want the effective context window surfaced and adjustable.

- [Hmbown/CodeWhale#4949](https://github.com/Hmbown/CodeWhale/issues/4949) — **Discussion: Chinese translation of "Constitution"**  
  Community debate over whether "宪法" or "协作准则" best captures the document's authority in Chinese. Valuable localization/terminology discussion with 8 comments.

- [Hmbown/CodeWhale#5023](https://github.com/Hmbown/CodeWhale/issues/5023) — **IME candidate window jumps/unstable position**  
  Windows 11 CJK input users report the IME candidate window moving erratically during TUI input, affecting daily usability for East Asian users.

- [Hmbown/CodeWhale#5209](https://github.com/Hmbown/CodeWhale/issues/5209) — **File edit silently accepts wrong parameter names and reports fake success**  
  Using `new_str` instead of `replace` returns "Replaced" without editing, forcing 3–5x re-edits per location. This is a high-impact tool reliability issue for agent-driven edits.

- [Hmbown/CodeWhale#5270](https://github.com/Hmbown/CodeWhale/issues/5270) — **v0.9.5: unified tasks surface**  
  Request for a single operator-facing list of "things still running": background shells, subagents, Fleet/lane workers, and workflow runs. A clear convergence request for runtime visibility.

- [Hmbown/CodeWhale#5250](https://github.com/Hmbown/CodeWhale/issues/5250) — **Only one API key can be saved**  
  Multi-provider users cannot store separate keys for DeepSeek and GLM; switching providers overwrites the previous key. Strong friction for daily multi-provider use.

- [Hmbown/CodeWhale#5314](https://github.com/Hmbown/CodeWhale/issues/5314) — **Copy message includes rail decorations**  
  The TUI context-menu "Copy message" action copies role glyphs (`●`) and rail characters (`▏`), unlike selection copy. Small but important for anyone copying code/output from transcripts.

## 4. Key PR Progress

Only 5 PRs were updated in the last 24 hours; all are listed here.

- [Hmbown/CodeWhale#5313](https://github.com/Hmbown/CodeWhale/pull/5313) — **chore(release): prepare v0.9.6**  
  Subtractive release: rebuilds compaction around one provider summary plus a committed successor handoff, and removes harness-created obstruction while keeping budgets, deadlines, cancellation, and honest provider state.

- [Hmbown/CodeWhale#5281](https://github.com/Hmbown/CodeWhale/pull/5281) — **build(deps): bump jsonschema from 0.46.10 to 0.49.6**  
  Dependabot update for the `jsonschema` Rust dependency; open and awaiting review.

- [Hmbown/CodeWhale#5308](https://github.com/Hmbown/CodeWhale/pull/5308) — **fix(release): use CNB asset download URLs**  
  Fixes both updater implementations to use the canonical `codewhale.net/codewhale` repository slug and the correct `/-/releases/download/vX.Y.Z/` path so mirror mode receives actual asset bytes.

- [Hmbown/CodeWhale#5306](https://github.com/Hmbown/CodeWhale/pull/5306) — **fix(release): validate crate publication order**  
  Pre-flight validation of the maintained 20-crate publication order against locked Cargo metadata, failing closed on duplicates, missing crates, mixed versions, and dependency inversions.

- [Hmbown/CodeWhale#5295](https://github.com/Hmbown/CodeWhale/pull/5295) — **feat: add Mistral AI as a first-class provider route**  
  First-time contributor PR adding Mistral AI (la Plateforme) as a provider route. Defaults to `mistral-code-latest` and supports `provider = "mistral"`, `CODEWHALE_PROVIDER=mistral`, and `codewhale --provider mistral`.

## 5. Feature Request Trends

- **Unified runtime visibility** — Issues like [Hmbown/CodeWhale#5270](https://github.com/Hmbown/CodeWhale/issues/5270) and [Hmbown/CodeWhale#5287](https://github.com/Hmbown/CodeWhale/issues/5287) ask for one task surface across shells, subagents, Fleet workers, and workflow runs, with consistent display identity.

- **Provider/model configuration flexibility** — Multiple requests for per-provider API key storage ([Hmbown/CodeWhale#5250](https://github.com/Hmbown/CodeWhale/issues/5250)), coherent provider/model switching ([Hmbown/CodeWhale#5034](https://github.com/Hmbown/CodeWhale/issues/5034)), and new first-class routes like Mistral ([Hmbown/CodeWhale#5295](https://github.com/Hmbown/CodeWhale/pull/5295)).

- **Context window and compaction transparency** — Users want the effective context limit to be explicit, configurable, and not silently downgraded to 128K ([Hmbown/CodeWhale#5239](https://github.com/Hmbown/CodeWhale/issues/5239), [Hmbown/CodeWhale#5096](https://github.com/Hmbown/CodeWhale/issues/5096), [Hmbown/CodeWhale#4394](https://github.com/Hmbown/CodeWhale/issues/4394)).

- **TUI polish and accessibility** — IME stability on Windows ([Hmbown/CodeWhale#5023](https://github.com/Hmbown/CodeWhale/issues/5023)), clean copy/paste behavior ([Hmbown/CodeWhale#5314](https://github.com/Hmbown/CodeWhale/issues/5314)), and interactive fork UX ([Hmbown/CodeWhale#576](https://github.com/Hmbown/CodeWhale/issues/576)).

- **Secure, durable secret storage** — API keys should be stored globally and encrypted, not stranded inside a working repository's plaintext config ([Hmbown/CodeWhale#5047](https://github.com/Hmbown/CodeWhale/issues/5047)).

## 6. Developer Pain Points

- **Silent fallback and fake success** — The 128K context fallback for unknown model IDs and the `File` edit tool's false "Replaced" success cause wasted effort and broken assumptions ([Hmbown/CodeWhale#5244](https://github.com/Hmbown/CodeWhale/issues/5244), [Hmbown/CodeWhale#5209](https://github.com/Hmbown/CodeWhale/issues/5209)).

- **Compaction opacity** — Even when compaction works, users cannot see the token gain, and long sessions lose intent/evidence because no structured survival contract is enforced ([Hmbown/CodeWhale#5096](https://github.com/Hmbown/CodeWhale/issues/5096), [Hmbown/CodeWhale#5043](https://github.com/Hmbown/CodeWhale/issues/5043)).

- **Provider state confusion** — Stale default models, silent config shadowing, and single API-key storage make multi-provider setups harder than necessary ([Hmbown/CodeWhale#5034](https://github.com/Hmbown/CodeWhale/issues/5034), [Hmbown/CodeWhale#5098](https://github.com/Hmbown/CodeWhale/issues/5098), [Hmbown/CodeWhale#5250](https://github.com/Hmbown/CodeWhale/issues/5250)).

- **Agent identity and interruption handling** — Fragmented sub-agent display names and no durable representation of interrupted assistant output undermine trust in long-running sessions ([Hmbown/CodeWhale#5287](https://github.com/Hmbown/CodeWhale/issues/5287), [Hmbown/CodeWhale#5000](https://github.com/Hmbown/CodeWhale/issues/5000)).

- **Test and release reliability** — Flaky verifier background tests and 12 untriaged `#[ignore]` tests indicate CI/release confidence is still a work in progress ([Hmbown/CodeWhale#5056](https://github.com/Hmbown/CodeWhale/issues/5056)).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*