# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 01:43 UTC | Tools covered: 10

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
**Reporting window:** 2026-08-02 (24-hour community digest)

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a consolidation phase: the last 24 hours brought no major releases from Claude Code, Codex, Gemini, Kimi, or Pi, while Copilot, OpenCode, and Qwen shipped small patch/point releases. The dominant theme across all communities is reliability and trust — silent model substitution, invisible cloud spend, session-transcript corruption, subagent hangs with misleading success signals, and context-window management recur across every tool. Open-source projects (OpenCode, Qwen, Pi, Kimi) show the fastest PR throughput, while the vendor-backed tools (Claude Code, Codex, Copilot, Gemini) are absorbing higher community volume on regressions. Prompt-cache economics and persistent memory are emerging as the next competitive battleground, with 2026's differentiation shifting from raw model capability to accountable, observable agent behavior.

---

## 2. Activity Comparison

Counts reflect issues/PRs surfaced in each tool's 2026-08-02 community digest (24-hour window), not full repository totals.

| Tool | Hot Issues | PRs | Release Status |
|---|---|---|---|
| Claude Code | 10 | 3 (0 merged, all closed) | None |
| OpenAI Codex | 10 | 10 (7 merged) | None |
| Gemini CLI | 10 | 10 (2 substantive merged; rest automation/hygiene) | v0.55.0-nightly (automated, no user-facing changes) |
| GitHub Copilot CLI | 10 | 0 | v1.0.78-2 (patch) |
| Kimi Code CLI | 5 | 5 (open) | None |
| OpenCode | 10 | 10 | v1.18.11 |
| Pi | 10 | 10 | None |
| Qwen Code | 10 | 10 | v0.21.3 stable + 2 nightlies |
| DeepSeek TUI (CodeWhale) | 10 | 10 (release-candidate lane) | None (v0.9.4 RC window) |
| Grok Build | 0 | 0 | No activity |

---

## 3. Shared Feature Directions

Requirements appearing independently across multiple tool communities:

1. **Persistent memory / cross-session context** — Kimi (#1283 auto + manual memory), OpenCode (#20322 native auto-memory), Gemini (Auto Memory epic #26516), Qwen (#7966 session/file provenance).
2. **Smarter compaction & prompt-cache reuse** — Copilot (#18490 compact-in-Plan-Mode), Pi (#6879 auto-compaction timing, #7048 truncated summaries, #7447 provider overrides), Qwen (#8277 cache roadmap, #4777 deferred-tools cache busting, #8339 compression cache reuse), OpenCode (#23595 system-reminder breaks llama.cpp caching), Claude Code (#83225 partial compaction on desktop).
3. **Agent observability & honest completion signals** — Gemini (#22323 interruption reported as GOAL success), Copilot (#4306 frozen subtasks), OpenCode (#33028, #32149 silent hangs), Qwen (#3758 subagent reasoning visibility), Claude Code (#74113 dropped final reports), Codex (#34268 multi-agent session bloat).
4. **MCP lifecycle & trust controls** — Copilot (#2901 lazy-load MCP servers), OpenCode (#40111/#23506 TLS trust config), Codex (#36534 catalog limit raised to 2,048), Kimi (#2574 MCP-induced hang), Qwen (#4777 deferred-tool cache invalidation).
5. **Transparency: model, cost, telemetry, data handling** — Claude Code (#83224 silent model substitution, #83231 unmonitored GCP spend, #83226 session links in git history), OpenCode (#39875 privacy wording, #39847 model hosting), Gemini (#26525 redaction-before-send), Copilot (BYOK visibility #3282).
6. **BYOK / custom provider support** — Copilot (#3282 multi-BYOK switching), OpenCode (#34785 device-flow OAuth), Pi (#7453 Cline gateways, #7010 schema normalization), Kimi (#2576 OmniRoute docs), Qwen local-model tool calling (#176, 23 comments).
7. **Voice & accessibility input** — Claude Code (#42700 TTS readback, 22 👍), Qwen (#8286/#8350 trusted private ASR, same-day PR turnaround).
8. **Safety guardrails for destructive actions** — Gemini (#22672), Copilot (#4318 autopilot overriding explicit user scope), DeepSeek TUI (#4684 `danger-full-access` semantics).

---

## 4. Differentiation Analysis

- **Claude Code** — Positions around session integrity and enterprise trust; its digest is dominated by transcript corruption, silent model swaps, and commit-hygiene violations. Deepest hook ecosystem, but the community is pushing hooks beyond validation into richer agent behaviors (pre-emit/retraction, #83229).
- **OpenAI Codex** — Strongest desktop/IDE integration (VS Code, MSIX) and TUI polish (two-stroke chords, terminal-size caching). Most affected by Windows desktop reliability (process storms, installer failures, missing WSL binaries); multi-agent V2 shows storage-amplification problems at scale (#34268).
- **Gemini CLI** — Most agent-orchestration-focused: subagent lifecycle, generalist hangs, browser subagents, Auto Memory. Also the most explicit about safety guardrails and the most affected by permissions regressions (#22093, subagents running despite being disabled).
- **GitHub Copilot CLI** — GitHub-native with custom `.agent.md` agents and autopilot fleets; community pushes hardest on BYOK flexibility and long-session reliability. Smallest PR pipeline among active tools (0 PRs in 24h) despite shipping a patch.
- **Kimi Code CLI** — Smallest hot-issue set, but every PR targets a concrete correctness bug (chained edit counting #2554, double-encoded JSON #2572, detached-child pipe hangs #2530, dropped hook tasks #2575) — a lean, hardening-focused contributor community.
- **OpenCode** — Open-source generalist spanning desktop/TUI/CLI/API; community tension between legacy TUI preservation (#37012, 37 👍) and new UI direction. Unique Go-subscription transparency controversy (#39875/#39847) and active plugin/marketplace expansion (#40108).
- **Pi** — Deepest multi-provider gateway engineering (Anthropic/OpenAI/Fireworks/Cline/MiniMax) plus obsessive terminal-rendering correctness (Unicode width, paste behavior, keystroke lag #7385). Compaction and durability barriers (#7466) are treated as first-class infrastructure.
- **Qwen Code** — Fastest release cadence (v0.21.3 stable + 2 nightlies) and strongest prompt-cache economics focus; `/review` verification (test-plan validation, failure attribution) is a differentiator. Local-model tool-call failures (#176) remain the biggest unsolved pain.
- **DeepSeek TUI (CodeWhale)** — Rust-based with release-candidate discipline: dedicated blocker lanes (#5044), issue burn-down batches (#5063), SQLite lock safety, and permission-posture normalization. Heavy localization investment (7+ languages); smaller community footprint with a discoverability gap (#5007).

---

## 5. Community Momentum & Maturity

**Rapidly iterating (10 PRs + release/merges):** Qwen Code (stable release + same-day issue→PR turnaround for ASR #8286→#8350), OpenCode (v1.18.11 + features across TUI/plugins/providers), OpenAI Codex (7 merged PRs, though release-starved in the window), Pi (10 PRs, all substantive infrastructure).

**Issue-heavy, PR-light:** Claude Code (3 closed PRs, 0 merged; 19-comment auth-loop issue) and Gemini CLI (10 PRs but dominated by nightly automation and only 2 substantive fixes) are absorbing high community frustration with limited output. Gemini's most-reacted issue reached only 8 👍, indicating broad-but-shallow engagement; Claude Code's top issues cluster around trust themes that erode adoption.

**Mature but slow:** GitHub Copilot CLI ships patches with zero PR churn; Kimi shows a small, high-signal contributor set working through a focused queue.

**Community-scale signals:** Codex's Diff crash (#35058, 112 👍) and Claude Code's TTS request (#42700, 22 👍) indicate the largest user bases; OpenCode's UI-layout debate (37 👍) and privacy concerns (35 👍) reveal an unusually opinionated open-source community. DeepSeek TUI's RC discipline suggests a mature internal process still growing its external footprint. Grok Build is dormant.

---

## 6. Trend Signals

1. **Trust is the new differentiator.** Silent model substitution, invisible cloud spend, telemetry wording, and session IDs written into git history are all being challenged. Expect "consent and auditability" to become a product requirement, not a compliance checkbox.
2. **Agent reliability is still the weak point.** Misleading success signals (Gemini #22323), indefinite hangs (OpenCode #32149/#33028), and frozen subtasks (Copilot #4306) span every tool — orchestration logic exists, but subprocess/stream lifecycle management still fails under real-world conditions.
3. **Context engineering is the next performance battleground.** Compaction timing (Pi), prompt-cache prefix stability (Qwen), session-file bloat (Codex #34268, >100 GiB), and persistent memory (Kimi/OpenCode/Gemini) converge on one insight: token cost and latency are now the primary UX metrics.
4. **Windows/macOS platform parity is a systemic gap.** Process storms (Codex #33776, 287+ child processes), MSIX data loss (Claude Code #81306), installer failures (#32149), and path/flag mishandling (DeepSeek #4564, Pi #7426) recur across every vendor — platform hardening is an unmet market need.
5. **MCP is being productionized.** Lazy loading, TLS trust configuration, catalog scaling, and deferred-tool cache behavior show the ecosystem moving from demo integration to enterprise-grade governance.
6. **Provider lock-in is eroding.** Multi-BYOK, device-flow OAuth, custom gateway support, and regional hosting transparency are demanded across Copilot, OpenCode, Pi, Kimi, and Qwen. Tools that make provider-switching cheap will win power users.
7. **Voice and accessibility are expanding beyond the CLI core.** TTS readback (Claude Code) and private ASR gateways (Qwen) indicate voice is moving from nicety to enterprise/deployment requirement.
8. **Terminal rendering correctness remains unsolved.** Unicode width bugs (Pi #7402), terminal keybinding conflicts (Qwen #8330), and scroll repaint storms (#5971) show the TUI layer still generates daily friction after years of investment.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-02 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

The most-discussed PRs by community attention (all currently open):

1. **Skill-Creator Reliability Fix** — [PR #1298](https://github.com/anthropics/skills/pull/1298) (MartinCajiao) — Fixes `run_eval.py`'s universal 0% recall bug that renders the description-optimization loop (`run_loop.py`, `improve_description.py`) useless. 10+ independent reproductions of the failure make this the community's most-cited blocker.

2. **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) (PGTBoos) — Typographic quality control for AI-generated documents: orphan-word wrap, widow paragraphs, and numbering misalignment — issues affecting nearly all Claude-generated documents.

3. **ODT Skill** — [PR #486](https://github.com/anthropics/skills/pull/486) (GitHubNewbie0) — OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML conversion with LibreOffice/ISO-standard triggers.

4. **testing-patterns** — [PR #723](https://github.com/anthropics/skills/pull/723) (4444J99) — Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing with Testing Library, and what *not* to test.

5. **pyxel (Retro Game Dev)** — [PR #525](https://github.com/anthropics/skills/pull/525) (kitao) — Skill wrapping the Pyxel MCP server: write → run_and_capture → inspect → iterate workflow for retro/pixel-art/8-bit Python games.

6. **self-audit** — [PR #1367](https://github.com/anthropics/skills/pull/1367) (YuhaoLin2005) — Universal pre-delivery audit: mechanical file verification first, then a four-dimension reasoning quality gate ordered by damage severity (v1.3.0).

7. **color-expert** — [PR #1302](https://github.com/anthropics/skills/pull/1302) (meodai) — Self-contained color expertise: ISCC-NBS/Munsell/RAL naming systems, color-space selection tables (OKLCH for scales, CAM16 for appearance), and XKCD color data.

8. **plan-file-hygiene** — [PR #1479](https://github.com/anthropics/skills/pull/1479) (Palo-Alto-AI-Research-Lab) — Lifecycle management for planning artifacts, addressing issue #1417; the newest high-activity PR (updated 2026-07-27).

> Notable: the single most-discussed PR is a **fix to skill-creator infrastructure**, not a new skill — indicating the community's contribution toolchain is the primary bottleneck.

---

## 2. Community Demand Trends

Distilled from Issues:

- **Skill evaluation tooling reliability** — [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7): `claude -p` never triggers skills, yielding 0% trigger rates; echoed by #1169 and #1061 (Windows-specific subprocess/encoding failures). The community cannot optimize descriptions it cannot evaluate.
- **Security & trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments — highest of all): community skills distributed under the `anthropic/` namespace enable trust-boundary abuse; [Issue #1175](https://github.com/anthropics/skills/issues/1175) raises related concerns about access-control logic inside SKILL.md.
- **Skill sharing & distribution** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8): org-wide skill sharing in Claude.ai; [Issue #189](https://github.com/anthropics/skills/issues/189) (👍9): duplicate skills from overlapping plugins wasting context.
- **Meta/quality skills** — [Issue #1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline proposal), [Issue #1329](https://github.com/anthropics/skills/issues/1329) (symbolic compact-memory notation for agent state).
- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill eagerly injects ~156k tokens in one tool call, exhausting context.
- **Platform integration** — [Issue #16](https://github.com/anthropics/skills/issues/16): exposing Skills as MCPs; [Issue #29](https://github.com/anthropics/skills/issues/29): AWS Bedrock support.

---

## 3. High-Potential Pending Skills

Actively-discussed open PRs likely to land soon:

| Skill | PR | Last Activity | Signal |
|---|---|---|---|
| plan-file-hygiene | [#1479](https://github.com/anthropics/skills/pull/1479) | 2026-07-27 | Newest; directly addresses named gap #1417 |
| color-expert | [#1302](https://github.com/anthropics/skills/pull/1302) | 2026-07-21 | Sustained momentum over ~6 weeks |
| pyxel | [#525](https://github.com/anthropics/skills/pull/525) | 2026-07-15 | Author is the Pyxel engine/MCP maintainer |
| self-audit | [#1367](https://github.com/anthropics/skills/pull/1367) | 2026-07-02 | v1.3.0 mature iteration |
| testing-patterns | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | High-value vertical; waiting on review |
| ODT | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Long-lived; complements existing docx/pdf skills |
| document-typography | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Solves universal doc-quality pain |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **meta-tooling — reliable skill evaluation, quality assurance, security, and sharing infrastructure — rather than additional vertical-domain skills**, with the top PR and top Issue both exposing failure in the skill-development toolchain itself (`run_eval.py` recall=0% and namespace trust-abuse, respectively).

---

# Claude Code Community Digest — 2026-08-02

## Today's Highlights
No new releases shipped in the last 24 hours; instead, the tracker saw a burst of fresh reports around silent model substitution, session-transcript corruption, and lack of cost visibility — three trust-related themes that dominated the newest issues. A handful of stale issues and three small maintenance PRs were also closed, indicating light housekeeping activity.

## Releases
No new releases in the last 24 hours.

## Hot Issues

- **[#77966 — OAuth loop: state parameter dropped after "sign in again to continue" redirect](https://github.com/anthropics/claude-code/issues/77966)** (19 comments, 13 👍, Linux/IntelliJ, auth). The most-discussed issue this week. Users on IntelliJ and Linux get stuck in an infinite `claude account /login` redirect loop because the `state` parameter is lost on the second hop. High engagement suggests this is blocking many users, not a one-off environment quirk.

- **[#80279 — Regression in 2.1.217: "Last Activity" filter missing when grouping by Project](https://github.com/anthropics/claude-code/issues/80279)** (10 comments, 13 👍). The desktop app's auto-update from 2.1.209 → 2.1.217 silently removed the "Last Activity" filter from the session sidebar when grouping by project. Users are frustrated that a UI regression shipped in a point release with no mention in changelogs.

- **[#73638 — Session rename mid-server-tool-call corrupts the transcript permanently](https://github.com/anthropics/claude-code/issues/73638)** (8 comments, has repro). Renaming a session while a `server_tool_use` call is in flight injects a synthetic user turn between the tool block and its result, causing a 400 on every subsequent prompt. The transcript is unrecoverable — a serious data-integrity bug with a clear repro.

- **[#74113 — Background agents on Windows go idle without delivering their final SendMessage report](https://github.com/anthropics/claude-code/issues/74113)** (6 comments, 5 👍). Background agents frequently stall before sending their final summary on Windows; a re-ping recovers the output. Agent orchestration reliability remains a recurring complaint on the platform.

- **[#83224 — Subagents silently served a different model than requested when Fable overage consent is missing](https://github.com/anthropics/claude-code/issues/83224)** (new, 0 comments). A subagent spawned with `model: "fable"` ran its first request on Fable, then was silently switched to `claude-opus-5` with no warning or log entry. The user only discovered the substitution by inspecting raw API traffic — a serious transparency concern for anyone relying on model-pinned costs or behavior.

- **[#83231 — Claude Code caused ~$19 of avoidable Google Cloud spend, with no visibility into what it spent](https://github.com/anthropics/claude-code/issues/83231)** (new, 0 comments). The user discovered the charge on their July GCP invoice. The core complaint: Claude Code has no surfaced mechanism to review cloud resources it provisions or the costs it incurs on the user's behalf. Expect this to feed into the broader "agentic spend transparency" conversation.

- **[#83226 — Session link is written into git history by default with no reliable opt-out](https://github.com/anthropics/claude-code/issues/83226)** (new, 0 comments). Claude Code appends a `Claude-Session:` trailer (a `claude.ai/code/session_<id>` URL) to commit messages and PR descriptions by default. The user argues this is unsolicited, undocumented, and difficult to disable — a workflow/security concern for teams with strict commit hygiene.

- **[#82230 — Embedded ugrep allocates ~29 GB compiling `.{0,N}(a|b|c).{0,M}`, OOM-killing the host](https://github.com/anthropics/claude-code/issues/82230)** (1 comment). The `grep` shim routes to an embedded ugrep that explodes to ~29 GB RSS on bounded-quantifier alternation regexes. A single accidental regex can take down the developer's machine — this is a latent footgun in the shell snapshot.

- **[#81306 — Windows: desktop crash wedged the MSIX package; recovery destroyed local app data](https://github.com/anthropics/claude-code/issues/81306)** (4 comments). After a crash, the MSIX package was wedged so badly that the only recovery was manual package removal — which wiped Code-tab group assignments and crash dumps. Users are asking for crash-safe package handling and backup of local state.

- **[#42700 — TTS readback of responses + voice mode for Remote Control sessions](https://github.com/anthropics/claude-code/issues/42700)** (13 comments, 22 👍, a11y). The most-liked open feature request. Users want spoken readback of Claude responses and voice input for remote/mobile sessions. Strong community demand; accessibility plus hands-free mobile workflows are the main drivers.

## Key PR Progress
Only 3 PRs were touched in the last 24 hours — all closed, all by the same contributor, and none merged this cycle:

- **[#77442 — fix: repair issue-automation telemetry and dead days_back input](https://github.com/anthropics/claude-code/pull/77442)**. Fixes three correctness bugs in the issue-automation workflows, including Statsig events timestamped in 1970 and a `days_back` input that is parsed but never used. Low-risk infra hygiene.

- **[#77439 — docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest](https://github.com/anthropics/claude-code/pull/77439)**. The security-guidance plugin was rewritten as v2.0.0, but `marketplace.json` and related listings still advertised v1.0.0 with the old description. Pure documentation/consistency fix.

- **[#77443 — fix(ralph-wiggum): make stop hook's jq error handling reachable under set -e](https://github.com/anthropics/claude-code/pull/77443)**. Under `set -euo pipefail`, the `jq` failure branch was dead code because the command substitution would exit the script first. A small but real bug in the example plugin that would have misled anyone copying the pattern.

The overall PR pipeline is quiet; expect more activity once the maintainers triage the August 2 issue batch.

## Feature Request Trends
- **Voice and accessibility**: TTS readback and voice mode ([#42700](https://github.com/anthropics/claude-code/issues/42700)) remains the most-supported open request, aimed at Remote Control sessions.
- **Hook lifecycle control**: A new request ([#83229](https://github.com/anthropics/claude-code/issues/83229)) asks for a pre-emit event or stream retraction so a blocking `Stop` hook doesn't print the corrected answer on top of the original — suggesting the community is pushing hooks beyond simple validation into richer agent behaviors.
- **Transparency and consent**: Multiple issues demand visibility into what Claude Code does on the user's behalf — model substitution ([#83224](https://github.com/anthropics/claude-code/issues/83224)), cloud spend ([#83231](https://github.com/anthropics/claude-code/issues/83231)), and opt-out for session links injected into git history ([#83226](https://github.com/anthropics/claude-code/issues/83226)).
- **Desktop/CLI parity**: Users want desktop-app UI for partial compaction ("Summarize up to here") and complain that CLI-created summaries are ignored by the app ([#83225](https://github.com/anthropics/claude-code/issues/83225)) — a common theme of the desktop client lagging the CLI.

## Developer Pain Points
- **Transcript and session integrity**: Issues like [#73638](https://github.com/anthropics/claude-code/issues/73638) (rename corruption) and [#80279](https://github.com/anthropics/claude-code/issues/80279) (filter regression) show that simple session-management actions can damage or hide work — the kind of bug that erodes trust fast.
- **Silent behavior changes**: Whether it's a model swap without notice ([#83224](https://github.com/anthropics/claude-code/issues/83224)) or session quotas draining abnormally fast ([#83205](https://github.com/anthropics/claude-code/issues/83205)), users are frustrated by invisible state changes they can't audit.
- **Agent reliability on desktop/Windows**: Background agents stalling before their final report ([#74113](https://github.com/anthropics/claude-code/issues/74113)) and `AskUserQuestion` permission requests never being emitted ([#81607](https://github.com/anthropics/claude-code/issues/81607)) point to systemic issues in agent-tool coordination outside the core CLI.
- **Resource exhaustion and crashes**: The ~29 GB ugrep OOM ([#82230](https://github.com/anthropics/claude-code/issues/82230)), the macOS 27 iOS-sim helper crash-loop ([#83011](https://github.com/anthropics/claude-code/issues/83011)), and the Windows MSIX data-loss incident ([#81306](https://github.com/anthropics/claude-code/issues/81306)) all share a theme: one bad input or crash can take the whole environment down with it.
- **Auth friction**: The OAuth loop on IntelliJ/Linux ([#77966](https://github.com/anthropics/claude-code/issues/77966)) persists as the top-commented open issue, blocking users across IDE integrations.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

## Today's Highlights
No new Codex release landed in the last 24 hours, but the project remains active on PRs: merged work raises MCP catalog limits, adds two-stroke TUI chords, retains attempted tool metadata across prompts, and increases remote plugin bundle size limits. Community attention is concentrated on several sharp regressions, especially the Codex Diff crash in VS Code on macOS, Windows process storms from `ChatGPT.exe`, OneDrive-related stream disconnects, and multi-agent session bloat.

## Releases
None in the last 24 hours.

## Hot Issues
Top issues by recent activity and community reaction:

- [**#35058 — Codex Diff crashes with “Oops, an error has occurred” in VS Code on macOS**](https://github.com/openai/codex/issues/35058)  
  44 comments, 112 👍. The most visible regression this week: Codex Diff is completely unusable in VS Code on Apple Silicon, affecting every repository, including fresh workspaces. High 👍 count signals broad developer impact.

- [**#32149 — Windows setup fails before the UAC prompt; both setup options broken**](https://github.com/openai/codex/issues/32149)  
  29 comments. Windows users cannot even start the installer on Windows 10/11. This is a blocking onboarding issue for the Codex App.

- [**#33776 — ChatGPT.exe spawns hundreds of taskkill/conhost processes on Windows, causing WMI storms and DWM degradation**](https://github.com/openai/codex/issues/33776)  
  28 comments, 26 👍. Severe performance/system stability bug: 287+ child processes observed during an affected session. Desktop users report system-wide UI degradation.

- [**#35420 — Work/Codex stream disconnects when workspace is OneDrive-backed and OneDrive is degraded**](https://github.com/openai/codex/issues/35420)  
  22 comments. Recurring `stream disconnected before completion` failures tied to OneDrive-backed Windows workspaces; affects reliability for enterprise users.

- [**#32297 — Built-in image generation fails with network error after July 9 desktop update**](https://github.com/openai/codex/issues/32297)  
  21 comments. Image generation is consistently broken for some desktop users since the July 9 update, with no clear workaround.

- [**#20864 — Desktop App lags because it scans all `~/.codex/sessions` rollout files**](https://github.com/openai/codex/issues/20864)  
  18 comments. Performance issue where the Desktop App ignores visible session index/state and rescans every rollout file, making large session stores unusable.

- [**#18490 — Request: “Compact context and implement plan” option in Plan Mode**](https://github.com/openai/codex/issues/18490)  
  11 comments. Popular enhancement request. Users want context compaction instead of full clearing so Plan Mode retains relevant memory while reducing token usage.

- [**#28103 — MSIX Codex desktop missing Linux codex binary, breaking “Run agent in WSL”**](https://github.com/openai/codex/issues/28103)  
  7 comments, 23 👍. Microsoft Store build cannot locate the Codex CLI binary for WSL, making a core Windows/Linux workflow non-functional.

- [**#29156 — Desktop custom providers unusable with existing chats and model picker**](https://github.com/openai/codex/issues/29156)  
  5 comments, 17 👍. CLI supports custom providers well, but the Desktop App cannot safely use them with chat history or the model catalog. High enthusiasm for improved custom-model support.

- [**#34268 — Multi-agent V2 forks duplicate compaction snapshots and inline images, causing >100 GiB session growth**](https://github.com/openai/codex/issues/34268)  
  5 comments. Long-running Ultra + multi-agent sessions produced ~110 GiB of local data under `$CODEX_HOME/sessions`. Storage amplification at this scale is a serious blocker for power users.

## Key PR Progress
Notable PRs updated or merged in the last 24 hours:

- [**#36534 — Raise the MCP catalog item limit to 2,048**](https://github.com/openai/codex/pull/36534)  
  Merged. Doubles the maximum collected MCP tools/resources across paginated discovery from 1,024 to 2,048.

- [**#36511 — Support two-stroke TUI key chords**](https://github.com/openai/codex/pull/36511)  
  Merged. Adds bindings like `ctrl-x ctrl-s`, with pending-chord hints and cancellation support for the TUI keymap system.

- [**#36507 — Retain attempted tool metadata across prompts**](https://github.com/openai/codex/pull/36507)  
  Merged. Re-attaches `executed_tool_calls` metadata for follow-up prompts, bounded to 32 KiB to avoid runaway context growth.

- [**#36485 — Increase remote plugin bundle size limits**](https://github.com/openai/codex/pull/36485)  
  Merged. Raises remote plugin download limit from 50 MiB to 100 MiB and extracted bundle limit from 250 MiB to 512 MiB.

- [**#36482 — Avoid querying terminal size on every TUI redraw**](https://github.com/openai/codex/pull/36482)  
  Merged. Caches terminal dimensions and refreshes only on resize/resume/external execution; should improve TUI redraw performance.

- [**#36440 — Extract exec-server request dispatching**](https://github.com/openai/codex/pull/36440)  
  Merged. Refactors JSON-RPC request handling into a dedicated `RequestDispatcher`, improving separation between connection loop and dispatch logic.

- [**#30977 — Drop parent MCP lifecycle events from forked agent history**](https://github.com/openai/codex/pull/30977)  
  Merged. Prevents inherited `McpToolCallBegin`/`End` events from polluting forked subagent histories while preserving parent rollout data.

- [**#31471 — Extract apps cache logic into ConnectorRuntimeManager**](https://github.com/openai/codex/pull/31471)  
  Open. Larger refactor to centralize Codex Apps tools cache behind a runtime manager, scoped by account/user/workspace.

- [**#15261 — Store guardian transcript boundary on review session**](https://github.com/openai/codex/pull/15261)  
  Open. Preserves parent transcript checkpoints for guardian review sessions so follow-up reviews only include transcript since the last review.

- [**#31817 — Update models.json**](https://github.com/openai/codex/pull/31817)  
  Open. Automated model metadata refresh, still pending.

## Feature Request Trends
- **Context compaction instead of full context clearing** — Users want compact-and-continue options in Plan Mode and long sessions, not just destructive resets.
- **Custom model/provider support in the Desktop App** — CLI custom providers work, but Desktop needs equivalent support for custom providers, custom presets, and model-picker integration.
- **Configurable, task-aware TUI composer** — Developers want the ability to disable composer placeholder text and have suggestions adapt to current task context.

## Developer Pain Points
- **Windows reliability is a recurring theme** — Installer failures, `taskkill`/`conhost` process storms, intermittent `codex.exe` fast-fail crashes, and missing WSL binaries are all affecting Windows users disproportionately.
- **Session storage and usage metering anxiety** — Issues report multi-gigabyte session data, unintended compaction destroying context, and sudden weekly usage drops caused by subagent workflows or long-running tasks.
- **Diff/review UI reliability** — VS Code Codex Diff crashes and diff view failures are blocking everyday code-review workflows, especially on macOS.
- **Network/stream disconnect fragility** — OneDrive-backed workspaces, transport decoding errors, and stale auth refresh tokens cause frequent mid-task failures.
- **Custom configuration gaps** — Desktop custom providers, model picker presets, and TUI keymap customization still lag behind the power-user expectations set by the CLI.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-02

## 1. Today's Highlights

Agent reliability continues to dominate the maintainer-tracked backlog, with top issues covering subagents misreporting premature termination as success, generalist hangs, and shell commands stuck in a "Waiting input" state despite completing. On the PR side, a potentially important fix lands for the v0.53.0 `thought_signature` 400-error regression, alongside a settings load-order race condition fix. A routine `v0.55.0` nightly release shipped today with no user-facing changes.

## 2. Releases

**v0.55.0-nightly.20260802.gf47d6c6f7** — Standard automated nightly build; no features or fixes beyond the version bump. [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7)

## 3. Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** — The most-commented issue today (12 comments). A `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` while its own result shows it hit the turn limit before doing any work. This is dangerous because downstream orchestration treats the interruption as a successful outcome.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — 8 comments and 8 👍, the highest community reaction in the list. Even trivial tasks (folder creation) hang indefinitely when delegated to the generalist agent; users report waiting up to an hour. Workaround: explicitly instruct the model to never defer to subagents.

3. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — Simple CLI commands that cannot prompt for input still leave the shell in an active "Awaiting user input" state. 3 👍 from users indicates this is a frequent real-world annoyance in non-interactive workflows.

4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser agent terminates with `Termination Reason: GOAL` but no meaningful result on Wayland sessions; still awaiting retest after maintainer triage.

5. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — The background extraction agent only marks a session processed when `read_file` succeeds. Low-signal sessions the agent decides to skip are re-surfaced forever, creating a livelock and wasted model calls.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — A security-relevant issue: local transcripts are sent to the model *before* redaction is instructed, and the service may log skill content. Community users relying on Auto Memory should watch this one.

7. **[#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** — Tool-context overflow error once the available tool count grows; the request is for the agent to dynamically scope tools instead of sending everything.

8. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — Users with agents disabled in all configs report subagents (e.g., generalist) being invoked anyway after an auto-update. A permissions/trust regression that erodes confidence in the agent sandbox.

9. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — The model occasionally reaches for `git reset`, `--force`, or destructive DB operations when safer alternatives exist. Community wants built-in guardrails for high-risk commands.

10. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — Anecdotal but recurring: custom skills and subagents are ignored unless explicitly instructed, even when highly relevant (e.g., gradle/git skills). Points to a gap in tool-selection heuristics.

## 4. Key PR Progress

1. **[#28597 — fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** — Fixes a load-order race where settings files were expanded against `process.env` before the local `.env` was loaded, causing placeholder misresolution at startup.

2. **[#28607 — fix(core): preserve functionCall thoughtSignature when stripping thought parts](https://github.com/google-gemini/gemini-cli/pull/28607)** — Fixes the v0.53.0 regression behind `API Error 400: Function call is missing a thought_signature`. `stripThoughts()` in `getHistoryTurns()` was dropping the signature; this is the fix to watch for users hitting 400s in long sessions.

3. **[#28526 — fix(vscode-ide-companion): stop leaking gemini.diff.accept and onDidChangeWorkspaceFolders disposables](https://github.com/google-gemini/gemini-cli/pull/28526)** — A stray parenthesis pair collapsed two `context.subscriptions.push(...)` calls into a comma expression, leaking the `gemini.diff.accept` command and workspace-folder listener. Fixes #27790.

4. **[#21307 — feat: add support for daemon mode](https://github.com/google-gemini/gemini-cli/pull/21307)** — Long-running (since March) help-wanted PR for a daemon + lightweight client, targeting shell-centric workflows and context-preserving integrations with the Unix tool ecosystem.

5. **[#28613 — fix: replace console.error with debugLogger in sdk session](https://github.com/google-gemini/gemini-cli/pull/28613)** — Small but healthy cleanup: aligns `packages/sdk/src/session.ts` with project logging conventions and removes a now-unneeded ESLint disable.

6. **[#28623 — chore/release: bump version to 0.55.0-nightly.20260802.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/pull/28623)** — Automated nightly release bump by `gemini-cli-robot`.

7. **[#28619 — Update .gitignore to ignore .env and .ai files; add unit tests](https://github.com/google-gemini/gemini-cli/pull/28619)** — Hygiene PR adding `.env`/`.ai` entries to `.gitignore` with accompanying unit tests.

8. **[#28617 — Add script to connect GitHub repo to GCP project](https://github.com/google-gemini/gemini-cli/pull/28617)** — Adds a DevTools API-based script for wiring GitHub repositories to Google Cloud projects.

9. **[#28618 — Add documentation for approving workflows from forked repositories](https://github.com/google-gemini/gemini-cli/pull/28618)** — Maintainer documentation for reviewing/approving workflow runs from fork PRs.

10. **[#28616 — Pending changes exported from your codespace](https://github.com/google-gemini/gemini-cli/pull/28616)** — An accidental/automated codespace export; noise PR that maintainers will likely close.

## 5. Feature Request Trends

- **AST-aware codebase tooling**: Two linked EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) propose AST-based file reads, search, and codebase mapping (via `tilth`/`glyph`) to cut token noise and turn counts — a strong signal that context efficiency is a top priority.
- **Agent observability**: Multiple requests for exposing subagent trajectories ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and including subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Agent self-awareness**: [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks the agent to accurately know its own flags, hotkeys, and self-execution mechanics.
- **Safety guardrails**: [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) pushes for discouraging destructive commands; [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) proposes zero-dependency OS sandboxing with post-execution intent routing.
- **Memory robustness**: The Auto Memory epic ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) spans livelock prevention, deterministic redaction, and quarantine of invalid patches — memory reliability is clearly under active investment.
- **Browser agent resilience**: [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery instead of the current fail-fast strategy.

## 6. Developer Pain Points

- **Hangs with no diagnostics**: The cluster of stall issues — generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompts (Vite) freezing ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) — suggests a systemic problem with subprocess/agent lifecycle management that is costing users hours.
- **Misleading success signals**: Subagents reporting GOAL success after interruption ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and bug reports that omit subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) make failures hard to detect and debug.
- **Trust/authorization erosion**: Subagents executing despite being disabled in config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) is a serious trust violation; users are countering it with prompt-level workarounds.
- **Context overload and tool sprawl**: 400 errors beyond ~128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and scattered tmp edit scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) reflect the agent's weak tool-usage hygiene.
- **Config not honored**: Browser agent ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) and symlinked agent files not being recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)) frustrate power users trying to customize their setups.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-02

## Today's Highlights
A new patch release `v1.0.78-2` shipped with a clearer split-view close confirmation and a fix for extension slash commands running more than once per invocation. Meanwhile, community attention remains focused on BYOK model flexibility, MCP server startup overhead, and long-session reliability issues. No pull requests were updated in the last 24 hours.

## Releases
- [v1.0.78-2](https://github.com/github/copilot-cli/releases/tag/v1.0.78-2)
  - **Improved:** Split-view sidebar close confirmation now reads `x again to close` (or `x again to exit CLI` on the last session), making the second press action clearer.
  - **Fixed:** Extension slash commands now run their handler exactly once per invocation when several ex… (changelog entry truncated in source).

## Hot Issues
1. **[#3282 — Add multiple BYOK model capability in Copilot CLI](https://github.com/github/copilot-cli/issues/3282)**  
   Users want to configure and switch between multiple BYOK models without restarting the CLI or changing environment variables. The issue has strong community support with 19 👍 and 6 comments.

2. **[#4305 — Failed to convert JavaScript value 'Undefined' into rust type 'String'](https://github.com/github/copilot-cli/issues/4305)**  
   A 1.0.76 regression caused frequent crashes during normal prompting. Closed with 5 comments, suggesting a fix or workaround has landed.

3. **[#2904 — Custom Agent YAML frontmatter should support reasoning effort](https://github.com/github/copilot-cli/issues/2904)**  
   Custom `.agent.md` agents can pin a model but cannot set reasoning effort per agent. Requesting `--effort`/`--reasoning-effort` in agent frontmatter; 16 👍.

4. **[#2901 — Lazy-load MCP servers on first tool invocation](https://github.com/github/copilot-cli/issues/2901)**  
   All MCP servers connect at startup, slowing launches as server counts grow. A lazy-loading model would improve startup time; 14 👍.

5. **[#4325 — Session becomes permanently unloadable once events.jsonl exceeds V8's max string length](https://github.com/github/copilot-cli/issues/4325)**  
   Long-lived sessions can grow their `events.jsonl` past V8's string ceiling, making `/resume` unusable. The data remains intact, but the CLI cannot load it.

6. **[#4327 — BYOK streaming drops apply_patch input before execution](https://github.com/github/copilot-cli/issues/4327)**  
   With OpenAI-compatible providers using `wireApi: "responses"`, the model emits a complete `apply_patch` input but the CLI invokes the tool with an empty argument string, breaking BYOK workflows.

7. **[#4306 — Subtasks freeze and stop responding](https://github.com/github/copilot-cli/issues/4306)**  
   In autopilot mode with fleets of custom agents, subtasks stop responding mid-session, leaving users without a clear recovery path.

8. **[#4299 — Increasing typing latency over long Copilot sessions](https://github.com/github/copilot-cli/issues/4299)**  
   Long sessions with background agents become effectively unusable due to severe keyboard latency. Affects CLI 1.0.76-5.

9. **[#4318 — Autopilot task-completion enforcement can override explicit user instructions](https://github.com/github/copilot-cli/issues/4318)**  
   Autopilot continues taking actions even after the user narrowly scopes the task to research/explanation only, frustrating users who expect explicit instructions to win.

10. **[#4317 — Installing a specific version always installs the latest version](https://github.com/github/copilot-cli/issues/4317)**  
    The installer ignores version pins when users try to downgrade, making it impossible to roll back in Docker/Sandbox environments.

## Key PR Progress
None. No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **BYOK and model flexibility:** Multiple BYOK models, per-agent reasoning effort, and corrected BYOK streaming behavior are recurring themes.
- **MCP lifecycle improvements:** Users want lazy MCP server startup, comments supported in `.mcp.json`, and predictable MCP tool grants for nested custom agents.
- **Session management UX:** Pinned sessions should appear in their own nav group, autopilot state should survive session resume, and plan-mode session switching should not hang.
- **Security/workflow integration:** Requests to link Copilot CLI to “Trusted Access for Cyber program” indicate demand for legitimate security-work authorization paths.

## Developer Pain Points
- **Long-session degradation:** Typing latency, frozen subtasks, and session files growing past engine limits make long-running sessions unreliable.
- **Session corruption and recovery:** Sessions can become unloadable, lose todos after fork, or hang during plan review after switching sessions.
- **Autopilot trust issues:** Autopilot can override explicit user instructions, fail to remain enabled on resume, and is difficult to monitor when subtasks stall.
- **Configuration friction:** Strict JSON in `.mcp.json` rejects comments, BYOK is limited to one model, and version-pinned installs fail to honor the requested version.
- **Platform-specific input bugs:** Terminal environment leakage under WSL2 causes `Ctrl+H` to behave like `Ctrl+Backspace`, breaking documented keybindings.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-02

## Today's Highlights
No new releases shipped in the last 24 hours, but the contributor community is actively hardening the codebase: three PRs target real-world reliability issues — chained `StrReplaceFile` replacement counting (#2554), shell hangs caused by detached child processes (#2530), and dropped `PostToolUse` hook tasks (#2575). Meanwhile, two new bug reports surfaced around the Web UI Technical Preview and the CLI getting stuck on "Processing" in MCP/VS Code setups.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#1283 [enhancement] Feature Request: Memory System — Persistent context across sessions** — [Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
   The longest-running open enhancement (created Feb 27, updated Aug 1), with 10 comments. Requests both automatic (AI-managed notes) and manual (user-defined instructions) memory for persisting project patterns and preferences across sessions. Its continued activity signals steady community demand for long-term context.

2. **#2526 StrReplaceFile reports too few total replacements for chained edits** — [Link](https://github.com/MoonshotAI/kimi-cli/issues/2526)  
   Correctness bug: `StrReplaceFile` counts replacements against the original file content instead of the running, progressively edited content, so chained edits where one edit's output is matched by a later edit produce miscounted totals. A fix is already proposed in PR #2554.

3. **#2576 docs: document OmniRoute OpenAI-compatible provider setup** — [Link](https://github.com/MoonshotAI/kimi-cli/issues/2576)  
   Requests a reproducible OmniRoute gateway configuration (base URL, model declaration, env-var mapping). Highlights that OpenAI-compatible provider docs need concrete, copy-paste-ready examples to avoid misconfiguration.

4. **#2574 [enhancement] Kimi Code Stuck on "Processing" and Doesn't Respond** — [Link](https://github.com/MoonshotAI/kimi-cli/issues/2574)  
   User reports the CLI hangs on "Processing" after setting up VS Code with the Unity MCP server — it worked initially but became unresponsive afterward. No comments yet; a reliability concern for MCP-heavy IDE workflows.

5. **#2573 Bug: Web UI "Connecting to session..." infinite spinner when switching sessions** — [Link](https://github.com/MoonshotAI/kimi-cli/issues/2573)  
   In kimi-cli 1.48.0 (Homebrew, macOS 26.4, arm64), the Web UI Technical Preview shows an infinite "Connecting to session..." spinner when switching sessions in Chrome 150. Points to session-management edge cases in the still-technical-preview web surface.

## Key PR Progress

1. **#2577 fix(web,vis): do not crash printing the startup banner on legacy console codecs** — [Link](https://github.com/MoonshotAI/kimi-cli/pull/2577)  
   Resolves #2532. `print_banner` and URL lines prepend a U+279C character that crashes consoles with legacy codecs (e.g., GBK on Chinese Windows). Small but impactful compatibility fix for non-UTF-8 terminals.

2. **#2572 fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments** — [Link](https://github.com/MoonshotAI/kimi-cli/pull/2572)  
   Fixes Pydantic validation errors when providers (including Moonshot API) double-encode nested array/object values inside `function.arguments` for tools like `SetTodoList`, `ExitPlanMode`, and `StrReplaceFile`. A provider-interop fix that matters beyond any single backend.

3. **#2554 fix(tools): count StrReplaceFile replacements against running content** — [Link](https://github.com/MoonshotAI/kimi-cli/pull/2554)  
   Directly addresses the bug reported in #2526 (author notes no issue was filed first). A small, self-contained correctness fix — counts replacements against progressively edited content, under the 100 LOC threshold.

4. **#2530 fix(shell): stop blocking until timeout when a detached child holds the pipes** — [Link](https://github.com/MoonshotAI/kimi-cli/pull/2530)  
   Resolves #2468. In the foreground shell path, `_run_shell_command` waits for stdout/stderr EOF before checking the exit code, so commands like `some_daemon & echo done` hang until timeout. Fixing the wait order unblocks these workflows.

5. **#2575 fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger** — [Link](https://github.com/MoonshotAI/kimi-cli/pull/2575)  
   Resolves #2564. `PostToolUse` and `PostToolUseFailure` previously fired hooks with a bare `asyncio.create_task(...)` and dropped the handle, risking pending tasks being garbage-collected by asyncio's WeakSet. Routes the calls through `fire_and_forget_trigger` for reliable execution.

## Feature Request Trends
- **Persistent memory/context**: Issue #1283 asks for automatic + manual memory across sessions, pointing to a desire for the CLI to retain project patterns and user preferences over time.
- **Broader provider support & documentation**: #2576 requests reproducible OmniRoute setup guidance, while #2572 highlights provider-specific JSON encoding quirks — together they reflect growing demand for more providers and clearer setup docs.
- **Stability of interactive surfaces**: Requests around Web UI reliability (#2573) and avoiding hangs in MCP/IDE environments (#2574) show expectations for production-grade responsiveness in preview features.

## Developer Pain Points
- **Tool-call correctness**: Miscounted replacements in chained `StrReplaceFile` edits (#2526) and double-encoded JSON breaking Pydantic validation (#2572).
- **Process/pipe handling**: Shell commands hanging on detached children due to EOF-before-exit-code waiting (#2530, #2468).
- **Hook reliability**: `PostToolUse` hooks dropped via bare `create_task`, risking lost events due to garbage collection (#2575, #2564).
- **Terminal/encoding issues**: Unicode banner characters crashing consoles on legacy codecs like GBK (#2577, #2532).
- **Web UI fragility**: Infinite "Connecting to session..." spinner when switching sessions in the technical preview (#2573).
- **Unresponsive states**: CLI stuck on "Processing" after MCP setup in VS Code, with unclear recovery path (#2574).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

## Today’s Highlights

OpenCode shipped **v1.18.11**, fixing MCP SSE reconnect loops and provider configs that use interleaved reasoning fields. Community attention is split between preserving the legacy TUI layout ([#37012](https://github.com/anomalyco/opencode/issues/37012)) and rising demands for transparency around Go-plan model hosting and privacy wording ([#39875](https://github.com/anomalyco/opencode/issues/39875), [#39847](https://github.com/anomalyco/opencode/issues/39847)). On the PR side, new contributions propose a unified marketplace and a debug command for inspecting system prompts.

## Releases

### v1.18.11
- **Core:** Fixed MCP SSE connections getting stuck in reconnect loops after server error responses.
- **Core:** Fixed provider model configs that use interleaved reasoning fields such as `reasoning_text` or custom field names.
- **Desktop:** External links now open in the system browser.

## Hot Issues

1. [**#37012 — Keep legacy layout option**](https://github.com/anomalyco/opencode/issues/37012)  
   The most active discussion this week: 34 comments, 37 👍. Users value the old layout’s direct access to features and workspace support, and want the legacy UI preserved.

2. [**#32149 — Opencode Stops Processing Requests Without Response**](https://github.com/anomalyco/opencode/issues/32149)  
   The agent enters a “thinking” state and then never responds. With 9 comments, this hangs issue is affecting trust in long-running sessions.

3. [**#20322 — Native auto-memory for cross-session learning**](https://github.com/anomalyco/opencode/issues/20322)  
   Persistent memory remains a top request. The community wants OpenCode to automatically persist learnings across sessions rather than requiring manual memory files.

4. [**#33028 — Subagents hang indefinitely after quick bash tool call**](https://github.com/anomalyco/opencode/issues/33028)  
   A recurring reliability bug: after a quick bash tool call, the next LLM stream never completes or times out. Reproduced with two different models.

5. [**#23595 — `<system-reminder>` keeps moving, causing unnecessary prompt processing in llama.cpp**](https://github.com/anomalyco/opencode/issues/23595)  
   Moving system reminders break prompt caching. 11 👍 from users who care about local inference efficiency.

6. [**#40058 — API not attaching**](https://github.com/anomalyco/opencode/issues/40058)  
   A closed but fast-moving report: API keys are not attaching or working, creating onboarding friction.

7. [**#39875 — Revert silent removal of Go privacy wording and provider attribution**](https://github.com/anomalyco/opencode/issues/39875)  
   Strong signal at 35 👍: Go subscribers want telemetry, retention, and provider attribution clearly documented in the privacy policy.

8. [**#39847 — Information on where the models are hosted**](https://github.com/anomalyco/opencode/issues/39847)  
   Users signed up for EU-hosted models, but DeepSeek V4 stopped working. 17 👍 show that regional hosting transparency is becoming a deciding factor.

9. [**#27837 — Web UI: session list empty on left panel when using web server mode**](https://github.com/anomalyco/opencode/issues/27837)  
   The web UI session panel stays empty despite `/api/session` returning data — an SSE event-driven frontend bug.

10. [**#40038 — Desktop makes success sound immediately when sending a message**](https://github.com/anomalyco/opencode/issues/40038)  
   A desktop UX issue with zero feedback: the app plays a success sound but nothing visible happens.

## Key PR Progress

1. [**#39905 — feat(opencode): add system prompt debug command**](https://github.com/anomalyco/opencode/pull/39905)  
   Adds `opencode debug prompt` to print the resolved system prompt locally, helping with prompt debugging and cache-related issues.

2. [**#40108 — feat(opencode): add unified marketplace**](https://github.com/anomalyco/opencode/pull/40108)  
   Proposes a shared package marketplace across desktop, TUI, CLI, and API clients for skills and agents.

3. [**#40110 — fix(app): prevent Enter from sending/interrupting on empty input**](https://github.com/anomalyco/opencode/pull/40110)  
   Direct fix for [#40106](https://github.com/anomalyco/opencode/issues/40106): pressing Enter on an empty input no longer sends messages or interrupts running tasks.

4. [**#26861 — fix(tui): Old messages disappearing during long sessions**](https://github.com/anomalyco/opencode/pull/26861)  
   Adds lazy-scroll loading so older messages are fetched when scrolling up, preventing messages from disappearing in long sessions.

5. [**#37889 — fix: handle GitHub OIDC format and error handling**](https://github.com/anomalyco/opencode/pull/37889)  
   Updates parsing for the new GitHub OIDC token format (`repo:owner@ref` instead of `repo:owner:ref`) and improves error handling.

6. [**#34785 — feat(provider): add RFC 8628 device-flow OAuth for custom gateways**](https://github.com/anomalyco/opencode/pull/34785)  
   Adds generic device-flow OAuth support for custom provider gateways, useful for self-hosted and enterprise setups.

7. [**#34786 — fix(session): read text attachments as text for non-text/plain MIME types**](https://github.com/anomalyco/opencode/pull/34786)  
   Fixes binary garbage being sent to models when attaching text files with non-standard MIME types.

8. [**#34698 — fix(llm): suppress lone `</think>` chunk at reasoning→tool boundary**](https://github.com/anomalyco/opencode/pull/34698)  
   Stops stray `</think>` tokens from being emitted as visible text deltas, improving reasoning-model output quality.

9. [**#34740 — feat(tui): show session status in prompt area**](https://github.com/anomalyco/opencode/pull/34740)  
   Displays session info — tokens, cost, MCP, LSP, branch, directory — in the prompt area when the sidebar is hidden.

10. [**#34709 — feat(plugin): add tool result content API**](https://github.com/anomalyco/opencode/pull/34709)  
   Adds `Tool.result({ output, content })` and `context.progress(...)` to V2 plugin tools, keeping bulky structure data out of tool-call text.

## Feature Request Trends

- **Persistent memory & cross-session learning** remains the most requested capability ([#20322](https://github.com/anomalyco/opencode/issues/20322), [#32658](https://github.com/anomalyco/opencode/issues/32658)), with third-party memory plugins also being added to the ecosystem.
- **UI layout flexibility** is a growing theme: users want the legacy layout preserved ([#37012](https://github.com/anomalyco/opencode/issues/37012)), collapsible tool output ([#40096](https://github.com/anomalyco/opencode/issues/40096)), and session info visible without opening the sidebar.
- **MCP trust controls** are being requested in two forms: skipping certificate validation for development ([#23506](https://github.com/anomalyco/opencode/issues/23506)) and per-server TLS trust configuration with custom CAs or fingerprints ([#40111](https://github.com/anomalyco/opencode/issues/40111)).
- **Transparency & compliance** is trending: users want to know where models are hosted ([#39847](https://github.com/anomalyco/opencode/issues/39847)), how telemetry is handled ([#39875](https://github.com/anomalyco/opencode/issues/39875)), and why regional models fail without a programmatic opt-in path ([#39872](https://github.com/anomalyco/opencode/issues/39872)).

## Developer Pain Points

- **Silent hangs and missing timeout feedback** are the most common reliability complaints ([#32149](https://github.com/anomalyco/opencode/issues/32149), [#33028](https://github.com/anomalyco/opencode/issues/33028), [#40038](https://github.com/anomalyco/opencode/issues/40038)).
- **Session compaction and prompt caching** cause recurring pain: oversized sessions fail to compact ([#17340](https://github.com/anomalyco/opencode/issues/17340)), compaction appears repeatedly ([#40105](https://github.com/anomalyco/opencode/issues/40105)), and retry policies never give up ([#21960](https://github.com/anomalyco/opencode/issues/21960)).
- **Go subscription and billing friction** is highly visible: API keys not attaching ([#40058](https://github.com/anomalyco/opencode/issues/40058)), stuck/recurring payments ([#40064](https://github.com/anomalyco/opencode/issues/40064)), free-tier limit confusion ([#40078](https://github.com/anomalyco/opencode/issues/40078)), and missing invite emails ([#40088](https://github.com/anomalyco/opencode/issues/40088)).
- **Desktop app input handling** needs hardening: empty Enter presses can interrupt active tasks ([#40106](https://github.com/anomalyco/opencode/issues/40106)), and success sounds can play without any visible response ([#40038](https://github.com/anomalyco/opencode/issues/40038)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Today's Highlights

The Pi community is focusing on provider reliability and session durability: model-catalog refreshes can hang indefinitely when pi.dev is unreachable (#7443/#7418), compaction can fail to trigger until the API rejects the request (#6879), and a stalled availability refresh can permanently wedge the model runtime (#7301). Several important PRs landed to bound catalog refreshes (#7451), raise connection timeouts (#7435), and add switchable terminal renderers (#7440). Terminal rendering correctness — especially around Unicode, paste behavior, and large-session input lag — also emerged as a major user pain point.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [pi#6879](https://github.com/earendil-works/pi/issues/6879) — **Auto-compaction never triggers after context grows past 100% until provider overflow**  
  A session on `gpt-5.6-sol` kept climbing past the compaction threshold for over two hours; compaction only ran after the API rejected a 373k-token request. With 6 👍 and 8 comments, this is a high-impact reliability complaint.

- [pi#7161](https://github.com/earendil-works/pi/issues/7161) — **anthropic-messages never sends `x-client-request-id`, unlike all OpenAI paths**  
  Gateways that use `x-client-request-id` for session affinity cannot group Anthropic conversations correctly. The author’s proxy round-robins between two Claude accounts, making the missing header a real operational problem.

- [pi#7010](https://github.com/earendil-works/pi/issues/7010) — **Normalize optional object tool schemas for OpenAI-compatible providers**  
  Optional nested object schemas are forwarded with incomplete `required` fields, causing some OpenAI-compatible providers to reject valid tool definitions. Important for tool-calling portability across gateways.

- [pi#7315](https://github.com/earendil-works/pi/issues/7315) — **Fireworks requests sometimes fail instantly with "Request timed out."**  
  Turns fail with empty content and zero token usage, then Pi retries the same doomed request multiple times. PR #7435 attempts to fix the root cause by raising the connection attempt timeout.

- [pi#7048](https://github.com/earendil-works/pi/issues/7048) — **Compaction summary can be persisted truncated mid-word when generation hits the token cap**  
  `generateSummary` caps output but only checks `stopReason === "error"`, so `stopReason: "length"` can silently persist a cut-off compaction summary. This undermines the whole purpose of compaction.

- [pi#6600](https://github.com/earendil-works/pi/issues/6600) — **`pi update --extensions` blocks npm scripts with new npm 11.16.0**  
  npm 11.16 blocks install scripts by default, breaking Pi’s extension update flow. Users need a clear way to pass npm config through the update command.

- [pi#7402](https://github.com/earendil-works/pi/issues/7402) — **Pressing Space after pasting Bengali text duplicates the line**  
  Width overcounting desyncs the differential renderer: editor state is correct, but the terminal display duplicates the pasted line on each keypress. A significant Unicode rendering bug.

- [pi#7301](https://github.com/earendil-works/pi/issues/7301) — **A stalled availability refresh is permanently unrecoverable**  
  `forceRefreshAvailability()` chains onto the stuck promise, so `getAvailable()`/`refresh()` never settle again even after the original issue clears. A nasty runtime-wedging failure.

- [pi#7385](https://github.com/earendil-works/pi/issues/7385) — **Keystroke input lag scales with conversation length**  
  Sessions with ~160 tool calls show 350–520ms per-character latency because `tool-result-renderer` bypasses the `Text` component cache and re-wraps all tool results on every keystroke.

- [pi#7321](https://github.com/earendil-works/pi/issues/7321) — **Multi-line paste broken on terminals without bracketed paste support**  
  On Termux/Android, pasted newlines trigger submit instead of inserting a single block. This blocks normal coding-agent workflows for terminal environments without bracketed paste.

## Key PR Progress

- [pi#7451](https://github.com/earendil-works/pi/pull/7451) — **Bound model catalog refreshes**  
  Fixes multiple catalog-related hangs, including `/model` hanging and login freezing when pi.dev is unreachable (#7027, #7113, #7153, #7418, #7443).

- [pi#7440](https://github.com/earendil-works/pi/pull/7440) — **Add switchable terminal renderers**  
  Allows coding-agent UI modes to switch at runtime while preserving terminal, focus, input, and renderer state.

- [pi#7466](https://github.com/earendil-works/pi/pull/7466) — **Opt-in pre-dispatch durability barrier**  
  Persists session state before the provider request starts, so a crash can distinguish “provider never invoked” from “provider invoked, possibly billed, output lost.”

- [pi#7453](https://github.com/earendil-works/pi/pull/7453) — **Add Cline API and ClinePass providers**  
  Adds usage-billing and flat-rate Cline gateways as OpenAI-compatible Chat Completions providers.

- [pi#7467](https://github.com/earendil-works/pi/pull/7467) — **Add MiniMax video generation**  
  Adds MiniMax text-to-video support, including global/CN endpoints and video creation/query/download handling.

- [pi#7441](https://github.com/earendil-works/pi/pull/7441) — **Tolerate missing `finish_reason` on non-empty openai-completions streams**  
  Prevents Pi from throwing `Stream ended without finish_reason` on gateways that omit the terminal finish chunk.

- [pi#7435](https://github.com/earendil-works/pi/pull/7435) — **Increase connection attempt timeout**  
  Raises Node’s 250ms address-family attempt timeout to 2 seconds for Pi’s Undici connector, fixing valid Fireworks connections on high-latency routes.

- [pi#7431](https://github.com/earendil-works/pi/pull/7431) — **Make SQLite branch caching scalable**  
  Replaces connection-local branch bookkeeping with explicit `branch_tips`, transactional `INSERT ... SELECT` operations, and lazy cache repair — avoiding SQLite variable limits on long histories.

- [pi#7426](https://github.com/earendil-works/pi/pull/7426) — **Make harness path utilities cross-platform on Windows**  
  Fixes POSIX-only path separator assumptions that crash `loadSkills` with `RangeError` on Windows.

- [pi#7456](https://github.com/earendil-works/pi/pull/7456) — **Support short-lived OAuth tokens**  
  Refreshes stored OAuth credentials only when less than one minute remains, preventing refresh-on-every-request behavior for tokens with very short expiry windows.

## Feature Request Trends

- **Provider/session affinity improvements**  
  Users want consistent request IDs and session metadata across all provider paths, including Anthropic ([#7161](https://github.com/earendil-works/pi/issues/7161)), plus normalizing tool schemas for OpenAI-compatible gateways ([#7010](https://github.com/earendil-works/pi/issues/7010)).

- **More configurable compaction and session lifecycle**  
  Repeated requests to make compaction smarter or overridable: auto-compaction should trigger before overflow ([#6879](https://github.com/earendil-works/pi/issues/6879)), summaries must handle token-limit truncation ([#7048](https://github.com/earendil-works/pi/issues/7048)), and compaction should support provider/model overrides ([#7447](https://github.com/earendil-works/pi/issues/7447)).

- **Richer media and input handling**  
  Users want direct `image_url` passthrough instead of forced base64 conversion ([#6151](https://github.com/earendil-works/pi/issues/6151)), iTerm2 image payload size metadata ([#7465](https://github.com/earendil-works/pi/issues/7465)), and reliable multi-line paste on terminals without bracketed paste ([#7321](https://github.com/earendil-works/pi/issues/7321)).

- **Terminal/UI ergonomics**  
  Scroll lock during active agent output ([#4679](https://github.com/earendil-works/pi/issues/4679)), Unicode width handling ([#7402](https://github.com/earendil-works/pi/issues/7402)), and reducing large-session input lag ([#7385](https://github.com/earendil-works/pi/issues/7385)) are recurring UX asks.

## Developer Pain Points

- **Context-window and compaction reliability**  
  Compaction not firing until API rejection ([#6879](https://github.com/earendil-works/pi/issues/6879)), truncated summaries ([#7048](https://github.com/earendil-works/pi/issues/7048)), and subagent transcripts bloating session files ([#7452](https://github.com/earendil-works/pi/issues/7452)) are hurting long-running sessions.

- **Network/timeout fragility**  
  Fireworks instant “[Request timed out](https://github.com/earendil-works/pi/issues/7315)”, permanently stalled availability refreshes ([#7301](https://github.com/earendil-works/pi/issues/7301)), and hard-coded 30s RPC timeouts ([#7446](https://github.com/earendil-works/pi/issues/7446)) all point to timeout handling being too brittle.

- **Terminal rendering correctness**  
  Copy-paste introducing extra spaces ([#5931](https://github.com/earendil-works/pi/issues/5931)), Bengali text duplicating lines ([#7402](https://github.com/earendil-works/pi/issues/7402)), and keystroke lag on large sessions ([#7385](https://github.com/earendil-works/pi/issues/7385)) show terminal edge cases are still a major source of friction.

- **Tooling/install friction**  
  npm 11.16’s script-blocking behavior breaks `pi update --extensions` ([#6600](https://github.com/earendil-works/pi/issues/6600)), and missing Windows path handling breaks skill loading ([#7426](https://github.com/earendil-works/pi/pull/7426)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-02

## Today's Highlights

The v0.21.3 stable release lands with a significantly upgraded `/review` command (test-plan validation, measured failure attribution, new verification lenses), while the core team doubles down on prompt-cache economics — new design discussions around cache reuse during chat compression (#8279) and a fix PR that actually reuses the main prompt prefix (#8339). The community is also pushing hard on voice input, with a private-ASR feature request (#8286) already receiving a same-day implementation PR (#8350).

## Releases

**v0.21.3** ([release](https://github.com/QwenLM/qwen-code/releases))
- Enhanced `/review` command: test-plan validation, measured failure attribution, and new verification lenses for code-change analysis ([#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8218](https://github.com/QwenLM/qwen-code/pull/8218))

**v0.21.3-nightly.20260802.184365390** ([release](https://github.com/QwenLM/qwen-code/releases))
- docs: complete TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))
- fix(core): unblock history pagination

**v0.21.2-nightly.20260801.bc382c3ff** ([release](https://github.com/QwenLM/qwen-code/releases))
- feat(hooks): include session source in lifecycle hook payloads ([#8155](https://github.com/QwenLM/qwen-code/pull/8155))
- feat(review): check cache identity

## Hot Issues

1. **[#176 — Tool calling does not work with local model qwen3-30b-a3b](https://github.com/QwenLM/qwen-code/issues/176)** *(CLOSED, 23 comments, 7 👍)* — The most-engaged issue of the window. Local-model users see valid tool calls from the model but they never execute, with no error surfaced. Highlights the ongoing pain of local-model compatibility.

2. **[#8277 — Better Prompt Caching](https://github.com/QwenLM/qwen-code/issues/8277)** *(OPEN, 2 comments)* — A consolidated roadmap issue for keeping the reusable prompt prefix stable across provider adapters, tool discovery, local KV-cache reuse, forks, and telemetry. Signals that caching is now a first-class performance priority.

3. **[#8330 — @ completion tab switching is inaccessible in Warp](https://github.com/QwenLM/qwen-code/issues/8330)** *(OPEN, 3 comments)* — Ctrl+Tab is swallowed by Warp's terminal-level tab switching, making the categorized `@` picker (All / Files / Sessions / MCP) unusable. A classic terminal-keybinding conflict that affects real workflows.

4. **[#8131 — statusline text cannot be selected in Virtualized History mode](https://github.com/QwenLM/qwen-code/issues/8131)** *(OPEN, 3 comments)* — On macOS, statusline text becomes unselectable when Virtualized History is enabled, breaking copy-paste of session metadata.

5. **[#7966 — How to get files created in a session?](https://github.com/QwenLM/qwen-code/issues/7966)** *(CLOSED, 6 comments)* — Users want to distinguish workspace files created directly vs. indirectly by code execution, and attribute them per session. Session-to-file provenance remains an open workflow gap.

6. **[#4777 — Deferred-tools listing busts prompt cache on every MCP discovery](https://github.com/QwenLM/qwen-code/issues/4777)** *(OPEN, 2 comments)* — MCP's `shouldDefer=true` tools are baked into the cached system prompt; any deferred-set change (MCP discovery, ToolSearch reveal) invalidates the cache. A subtle but costly performance bug.

7. **[#8286 — feat(voice): support explicitly trusted private ASR base URLs](https://github.com/QwenLM/qwen-code/issues/8286)** *(OPEN, 3 comments)* — Request for an opt-in allowlist so managed deployments can route voice transcription through internal/HTTP ASR gateways without weakening the default-deny security posture.

8. **[#2635 — Support installing extensions from qwen-code repository](https://github.com/QwenLM/qwen-code/issues/2635)** *(OPEN, 3 comments)* — `/extensions install` fails against the official qwen-code repo. Community wants a one-command path to install commands, skills, and examples from the repository itself.

9. **[#5971 — TUI window scrolling spam on Linux](https://github.com/QwenLM/qwen-code/issues/5971)** *(CLOSED, 4 comments)* — Long sessions cause the TUI to scroll from the first message to the latest on every output, producing a flicker/repaint storm. Linux-specific rendering issue marked as `welcome-pr`.

10. **[#8299 — test(e2e): finish deterministic fake-server migration and add a stable merge gate](https://github.com/QwenLM/qwen-code/issues/8299)** *(OPEN, 3 comments)* — Requests completion of the `fake-openai-server` migration for flaky post-merge E2E tests, starting with `sdk-typescript/permission` suites. Community-driven push for CI determinism.

## Key PR Progress

1. **[#8349 — feat(review): drive — readiness polled, completion proven, cleanup guaranteed](https://github.com/QwenLM/qwen-code/pull/8349)** *(OPEN)* — Adds `qwen review drive`: poll for real readiness, drive the target, capture facts instead of sleeping on guesses. Formalizes the "build-and-drive" verification technique that has proven highest-yield in the repo's review history.

2. **[#8339 — fix(core): reuse prompt cache during chat compression](https://github.com/QwenLM/qwen-code/pull/8339)** *(OPEN, review/self-reported)* — Lets chat compression reuse the main conversation's prompt-cache prefix when the compression model matches the main model and the provider supports Anthropic/DashScope-style caching. Directly addresses the #8277 roadmap.

3. **[#8350 — feat(voice): support trusted private ASR base URLs](https://github.com/QwenLM/qwen-code/pull/8350)** *(OPEN)* — Implements `security.allowedInsecureVoiceBaseUrls`, an empty-by-default exact allowlist for voice provider endpoints, enabling private-network ASR while preserving default deny. Fast turnaround on issue #8286.

4. **[#8347 — feat(ci): intelligent core review router + expand code owner pool](https://github.com/QwenLM/qwen-code/pull/8347)** *(OPEN)* — Replaces blanket auto-assign of all code owners on core PRs with a `pull_request_target` classifier that routes reviews to 0–2 maintainers based on diff size and round-robin rotation.

5. **[#8318 — feat(autofix): require isolated targeted E2E proof](https://github.com/QwenLM/qwen-code/pull/8318)** *(OPEN, autofix/takeover)* — Adds a fail-closed verification chain for Autofix issues: immutable failure metadata outside editable prose, exact issue-title/body binding, and candidate-commit verification against isolated targeted E2E runs.

6. **[#8346 — feat(review): teach the verifier the falsify-not-verify asymmetry](https://github.com/QwenLM/qwen-code/pull/8346)** *(OPEN, autofix/takeover)* — Adds a rule block so the Step 4 verifier stops treating "I could not verify it" or "evidence is somewhere I didn't look" as grounds for rejecting findings.

7. **[#8305 — feat(cli): render inline terminal images](https://github.com/QwenLM/qwen-code/pull/8305)** *(OPEN)* — Extends the terminal-image infrastructure (from #8217) from workspace-file previews to model/tool `inlineData` in the interactive CLI, preserving ordered text/image parts on `ServerGeminiContentEvent`.

8. **[#8132 — feat(desktop): package Web Shell as a release-ready desktop app](https://github.com/QwenLM/qwen-code/pull/8132)** *(OPEN, autofix/takeover)* — Turns the Tauri proof-of-concept into a release-ready desktop shell that wraps the existing Web Shell — native lifecycle, startup/recovery states, workspace management — without maintaining a separate desktop UI.

9. **[#6579 — fix(cli): keep model switches session-scoped](https://github.com/QwenLM/qwen-code/pull/6579)** *(OPEN, autofix/takeover)* — `/model` and picker selections now only affect the active session; persisting a default requires explicit `/model --default`. Prevents accidental cross-session model drift.

10. **[#8302 — test(sdk-typescript): make permission control E2E deterministic](https://github.com/QwenLM/qwen-code/pull/8302)** *(OPEN, autofix/takeover)* — Replaces model-selected tool behavior with scripted fake OpenAI responses, keeping the SDK, CLI control protocol, permission controller, and real read/write tools in the test path while removing external model nondeterminism.

## Feature Request Trends

- **Prompt-cache optimization** — The dominant theme this week: a dedicated roadmap issue (#8277), a fork-based compression design discussion (#8279), a cache hit-rate telemetry request (#8284), and the deferred-tools cache-busting bug (#4777) all target the same goal of stabilizing the reusable prompt prefix.
- **Voice input expansion** — Following earlier `/voice` requests (#3110), new asks target enterprise/private deployments: explicitly trusted insecure ASR base URLs (#8286) with a same-day PR (#8350).
- **Sub-agent observability** — Users keep asking for full reasoning/processing visibility into sub-agents rather than just tool-call listings (#3758).
- **Extension ecosystem** — Desire for a first-class "install from the official qwen-code repo" path covering commands, skills, and examples (#2635).
- **Session/file provenance** — Interest in attributing workspace files (direct writes vs. code-generated) to specific sessions (#7966).

## Developer Pain Points

- **Local-model tool-call failures** — Issue #176 (23 comments, 7 👍) shows that running against local models like qwen3-30b-a3b still produces silent tool-execution failures, making local deployment a frustrating experience.
- **TUI/CLI usability friction** — A recurring cluster: Linux scroll repaint storms (#5971), unselectable statusline text in Virtualized History (#8131), and terminal keybinding conflicts breaking the `@` completion picker in Warp (#8330), plus the older `/settings` flicker (#938).
- **AskUserQuestion reliability** — Multiple reports of empty-response API errors (#3804) and malformed non-array question payloads (#2329), eroding trust in the interactive-question flow.
- **Perceived model degradation** — A steady stream of "降智" (model feels dumber) and runaway-loop reports (#5029, #798, #2273), including mixing Chinese/English outputs with extra spaces that break shell commands (#2456).
- **Setup and activation friction** — Windows users hitting `Missing tiktoken_bg.wasm` (#1328) and OAuth device-flow failures (#2081) show that first-run experience still needs hardening.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-02

> Data source: `Hmbown/DeepSeek-TUI` / `Hmbown/CodeWhale` GitHub activity  
> Note: No new releases were published in the last 24 hours.

## Today’s Highlights

The project is in a v0.9.4 release-candidate window: a dedicated release lane (#5044) is carrying release-blocker fixes, while a fresh issue burn-down batch (#5063) targets eight user-facing bugs across Anthropic wiring, sandbox behavior, workflow, config scoping, session handling, and TUI polish. Meanwhile, the community spotlight is on brand positioning — a YouTuber chose Codex over CodeWhale for a DeepSeek-v4-flash demo (#5007) — and on long-running reliability work around macOS cloud-storage paths, provider/model switching, and SQLite state handling.

## Releases

None in the last 24 hours.

## Hot Issues

1. **#5007 — YouTuber doesn’t use CodeWhale as TUI for DeepSeek** · [Issue](https://github.com/Hmbown/CodeWhale/issues/5007)  
   Community chatter (6 comments) about a popular YouTuber using Codex instead of CodeWhale for a DeepSeek-v4-flash review. Closed, but highlights a discoverability/perception gap for the project.

2. **#4085 — Cannot read/write files under `~/Library/CloudStorage/Dropbox/`** · [Issue](https://github.com/Hmbown/CodeWhale/issues/4085)  
   macOS File Provider paths fail for read/write/grep/delete. The binary is ad-hoc signed with no entitlements, so this is not a sandbox issue. Important for macOS users with cloud-synced home directories.

3. **#4683 — Wrong DeepSeek completions URL / flaky network errors** · [Issue](https://github.com/Hmbown/CodeWhale/issues/4683)  
   Requests regularly fail against `https://api.deepseek.com/v1/chat/completions` after long interactions. Likely a URL/build configuration issue; open and still affecting reliability.

4. **#4684 — `danger-full-access` does not disable tools-layer workspace boundary** · [Issue](https://github.com/Hmbown/CodeWhale/issues/4684)  
   OS-level sandboxing is disabled, but `read_file`/`grep_files` still enforce workspace-boundary checks. This breaks global skill access and violates user expectations for a full-access mode.

5. **#5034 — Switching providers can retain an unrelated default model** · [Issue](https://github.com/Hmbown/CodeWhale/issues/5034)  
   Release-blocker for v0.9.4. Switching to OpenAI can leave `gpt-5.5` as the default even when it came from another route. Provider and model resolution need to update as one coherent unit.

6. **#4716 — TUI exits immediately on launch in fresh macOS terminal** · [Issue](https://github.com/Hmbown/CodeWhale/issues/4716)  
   `codew`/`codewhale` return `[Process completed]` instantly in a new Terminal.app tab. Marked stop-ship; likely environment/terminal-detection regression.

7. **#4564 — Windows: `--model` and `--toolsets` consumed as a single arg** · [Issue](https://github.com/Hmbown/CodeWhale/issues/4564)  
   On Windows with npm global install, pre-`exec` flags are concatenated into one argument. Community suggests `CODEWHALE_MODEL` / `CODEWHALE_TOOLSETS` env vars as a workaround.

8. **#5062 — Managed sign-in: run a real device-flow login dogfood** · [Issue](https://github.com/Hmbown/CodeWhale/issues/5062)  
   `cloud.rs` was refactored on the release lane but never dogfooded against a CWC/staging backend. The xAI login issue (#5032) was only caught by a real device-flow test — this asks for the same.

9. **#5061 — Multi-worktree ergonomics epic** · [Issue](https://github.com/Hmbown/CodeWhale/issues/5061)  
   Requests cross-worktree claim visibility, a shared build cache, and branch-to-PR promotion. A clear power-user workflow feature direction.

10. **#4936 — Product tells users to run `/rc`, but runtime doesn’t have it** · [Issue](https://github.com/Hmbown/CodeWhale/issues/4936)  
    `app.codewhale.net` ships a copy-to-clipboard `/rc` command, but the runtime does not implement it. Important product/runtime consistency issue.

## Key PR Progress

1. **#5044 — Codewhale v0.9.4 source candidate release** · [PR](https://github.com/Hmbown/CodeWhale/pull/5044)  
   Release lane reconciled with `main`; includes blocker fixes such as #5032 (xAI device login recovery from a dangling OAuth pointer).

2. **#5051 — Turn-scoped tool restriction and env-gated sampling overrides** · [PR](https://github.com/Hmbown/CodeWhale/pull/5051)  
   Adds `allowed_tools`/`disallowed_tools` to `StartTurnRequest` and threads them into the per-turn engine tool gate. Makes external benchmark drivers first-class without overlay patches.

3. **#5063 — Issue burn-down batch: eight user-facing fixes** · [PR](https://github.com/Hmbown/CodeWhale/pull/5063)  
   Seven commits addressing Anthropic wire behavior, sandbox, workflow, config scoping, session layer, input, and TUI issues — each with regression tests.

4. **#5025 — Make permission posture live** · [PR](https://github.com/Hmbown/CodeWhale/pull/5025)  
   Normalizes runtime compatibility inputs into a single `permission_posture`, makes auto-review autonomous, and keeps unresolved actions held closed without modal interruptions.

5. **#5027 — Make SQLite startup lock-safe** · [PR](https://github.com/Hmbown/CodeWhale/pull/5027)  
   Installs a five-second busy timeout before any schema work, only transitions WAL mode when necessary, and verifies SQLite accepted the transition. Addresses cross-process state corruption risk.

6. **#5030 — Correct File edit validation and release clippy gate** · [PR](https://github.com/Hmbown/CodeWhale/pull/5030)  
   Validates C/C++ preprocessor conditionals before and after edits, fail-closes orphaned `#if`/`#endif` changes, and allows balanced block insertions/removals.

7. **#5029 — Restore only persisted composer drafts** · [PR](https://github.com/Hmbown/CodeWhale/pull/5029)  
   Stops inferring composer drafts from the final transcript message; restores composer text only from a same-session `OfflineQueueState.draft`. Fixes resume-state pollution.

8. **#5024 — Trim drifting turn metadata** · [PR](https://github.com/Hmbown/CodeWhale/pull/5024)  
   Keeps actionable facts (date, workspace, git, permission posture) while removing version, model, mode, usage, and cache metadata that caused turn-context drift.

9. **#5006 — Preserve long Windows user PATH in installer** · [PR](https://github.com/Hmbown/CodeWhale/pull/5006)  
   Fixes NSIS overwriting long `PATH` values by handling `ReadRegStr`’s empty result for oversized registry data. Important for Windows users with existing long paths.

10. **#5008 — Actionable File edit diagnostics and stale-line-number tolerance** · [PR](https://github.com/Hmbown/CodeWhale/pull/5008)  
    Fixes repeated 100+ line replacement failures in C files with Chinese comments and CRLF endings; adds better diagnostics and stale-line-number handling.

## Feature Request Trends

- **Localization expansion is a major theme**: Korean, Spanish, Brazilian Portuguese, Hindi, Ukrainian, French, German, and Catalan all have tracking or shipped-locale issues. The project is clearly investing in non-English developer experiences.
- **Permission and tool governance is hot**: Turn-scoped tool allow/deny lists, hard per-turn budgets, consent flow for cross-provider auto-routing, and clarifying `danger-full-access` semantics are recurring asks.
- **Multi-worktree and parallel-lane workflows** are emerging as a power-user feature direction: cross-worktree claim visibility, shared build caches, and branch-to-PR promotion.
- **State/session reliability** continues to be a priority: SQLite lock safety, composer draft persistence, turn metadata trimming, and provider/model switch coherence.
- **Runner/workflow observability** requests include the missing `/rc` command, configurable workflow search concurrency, and KV-cache prefix-stability audits with replayable `web_search_call` items.

## Developer Pain Points

- **Flaky DeepSeek API endpoint behavior**: Wrong or unstable completions URL (#4683) creates intermittent failures during long sessions.
- **Platform-specific friction**: Windows flag concatenation (#4564), NSIS PATH overwrites (#5006), and macOS Dropbox File Provider path failures (#4085) show cross-platform reliability gaps.
- **Permission and sandbox surprises**: `danger-full-access` not actually bypassing tools-layer workspace checks (#4684) and permission posture not being live until recent PRs (#5025).
- **State and session bugs**: TUI exiting immediately on fresh terminals (#4716), SQLite startup lock risks (#5027), and drifted turn metadata (#5024) all erode trust in long-running usage.
- **Product/runtime mismatches**: The documented `/rc` command not existing (#4936) and provider switch retaining an unrelated default model (#5034) point to documentation and coherence gaps that need release-blocker attention.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*