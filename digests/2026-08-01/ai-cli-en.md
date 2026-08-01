# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-08-01 01:47 UTC | Tools covered: 10

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

# AI CLI Agent Ecosystem — Cross-Tool Comparison Report
*Source: Community digests for 2026-08-01 · 10 tools tracked, 9 with activity*

---

## 1. Ecosystem Overview

The AI CLI agent space is in a reliability-consolidation phase: the ≈150 highlighted issues and PRs across nine active tools concentrate on session durability, resource governance, and agent-orchestration correctness rather than greenfield features. Release velocity diverges sharply — Codex, Gemini, Qwen, Copilot CLI, and CodeWhale shipped in the last 24 hours, while Claude Code, OpenCode, Pi, and Kimi did not, despite high community engagement. Safety and data integrity are the dominant cross-tool concerns, punctuated by catastrophic `rm -rf` incidents in Claude Code, credential-leakage reports, sandbox-escape bugs, and session-corruption crashes. MCP is now baseline infrastructure everywhere, but its lifecycle management (process leaks, OAuth refresh failures, nested grant resolution) remains immature across all tools. Hosted services (Claude Max, Codex Cloud, OpenCode Go/Zen) are simultaneously the biggest growth area and the largest source of entitlement/billing friction.

---

## 2. Activity Comparison

| Tool | Hot Issues¹ | Key PRs¹ | Releases (24h) | Development Signal |
|---|---|---|---|---|
| Claude Code | 10 | 6 | 0 | No releases; severe data-loss/entitlement reports dominate |
| OpenAI Codex | 10 | 10 | 3 (rust-v0.147.0 alphas) | Fastest cadence; protocol/agent-infrastructure PRs |
| Gemini CLI | 10 | 10 | 3 (nightly, v0.54-preview.1, v0.53.1) | Release hardening; cherry-picks to stable + preview |
| GitHub Copilot CLI | 10 | 2 | 1 (v1.0.78-0) | Shipping, but thin PR velocity vs. regression reports |
| Kimi Code CLI | 4 | 1 | 0 | Small, feature-request-driven community |
| OpenCode | 10 | 10 | 0 | Active plugin/TUI fixes; hosted-service incidents |
| Pi | 10 | 10 | 0 | Server/protocol groundwork; no release today |
| Qwen Code | 10 | 10 | 1 (v0.21.2) | Serve-daemon governance; bundled autofix |
| CodeWhale (DeepSeek TUI) | 10 | 10 | 1 (v0.9.3) | Rebrand + release train; ACP/sandbox features |
| Grok Build | 0 | 0 | 0 | Dormant |

¹ Digest-highlighted items, not raw tracker totals. Kimi's counts are exact (4 issues, 1 PR updated in the window).

---

## 3. Shared Feature Directions

Requirements recurring across multiple tool communities:

- **Session durability & state integrity** — Claude Code (transcripts silently deleted after 30 days, #83019), Codex (unbounded session/turn state, #25779), Copilot CLI (resume OOM at 1.0.74, #4251; permanently unloadable sessions past V8 string limits, #4325), OpenCode (SQLite `session_message.seq` corruption after `/model`, #39165), Pi (stalls after compaction, #7020; auto-compaction firing too late at 373k tokens, #6879), CodeWhale (interrupted output never persisted, #5000), Gemini (Auto Memory retry loops, #26522). Users want crash-safe, resumable, inspectable sessions as a baseline.
- **MCP lifecycle & authentication maturity** — Codex (MCP process leaks → 9+ GB RSS, #30408; OAuth lifecycle for enterprise SSO, #35006), Gemini (OAuth refresh deletes stored credentials, #28481), Copilot CLI (nested custom-agent MCP grants, #4320; JSON comments disabling all MCP servers, #4323), Kimi (double-encoded tool-call arguments, #2572). The standard is adopted; credential and process management is not.
- **Configurable, honest sandboxing** — Claude Code (sandbox config silently dropped for nested projects, #83035; web-sandbox gaps for `gh`/Java proxy, #11139/#16222), Codex (sandboxed V8 for code mode, #36374), Gemini (seatbelt profile fallback, #28551; zero-dependency OS sandboxing proposal, #19873), Copilot CLI (new default-on `allowDevToolCaches`), CodeWhale (filesystem allowlist for Xcode DerivedData, #5005). Users want predictable, per-project sandboxes that don't break legitimate toolchains.
- **Sub-agent orchestration reliability** — Claude Code (background agents idle without final reports, #74113; force-resume request, #83014), Codex (sub-agent busy-waiting burned 71% of weekly quota, #36396), Gemini (MAX_TURNS misreported as GOAL success, #22323; generalist agent hangs, #21409), Qwen (per-child daemon memory ceilings, #8182). Agents managing agents is the new reliability frontier.
- **Destructive-command safeguards that don't over-block** — Claude Code (`rm -rf /*` expansion with kill commands blocked by safety classifier, #82165/#81273), Gemini (guardrails for destructive git/DB commands, #22672), Copilot CLI (autopilot overriding explicit user instructions, #4318). False negatives and false positives both erode trust.
- **TUI/terminal ergonomics** — Claude Code (scroll-wheel regression, 83 👍, #65833), Kimi (auto-scroll to bottom, #2422), OpenCode (black screen, #4140; text selection, #927), Qwen (SGR mouse sequences leaking into input, #8268), CodeWhale (AltGr keyboard handling, #4977), Pi (TUI CPU saturation while streaming, #6665). Output review remains a core workflow.
- **Headless/remote/enterprise workflows** — CodeWhale (headless PKCE OAuth, #4998), Codex (delegation acknowledgement control, #36413), Claude (CLI retrieval of background cloud results, #83012), Kimi (cross-device Remote Control, #1282, 23 👍), Copilot CLI (centrally managed org settings, #3909).

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users / Position | Technical Approach |
|---|---|---|---|
| **Claude Code** | Autonomous agents, safety classifier, Max-plan entitlement, broad surface (CLI/Desktop/VS Code/Web) | Anthropic subscribers; general developer audience | Plan-based access; largest TUI/extension ecosystem; strongest community scrutiny |
| **OpenAI Codex** | Protocol depth: explicit blocking semantics, delegation acks, plugin search, sandboxed V8 | Automation/API-driven teams; alpha early adopters | Rust rewrite (alpha train) + hosted cloud; fast iteration |
| **Gemini CLI** | Gemini 3-native agent, behavioral eval maturity, AST-aware tooling research | Google/Gemini users; enterprise | Nightly/preview/stable trains; macOS seatbelt sandboxing |
| **GitHub Copilot CLI** | GitHub-native ACP/autopilot; enterprise org governance (still missing) | GitHub-centric teams | Rust core + JS bridge; stable releases, low PR churn |
| **Kimi Code CLI** | Lightweight UX; community roadmap (Remote Control, Memory System) | MoonshotAI/kimi model users | Small surface; early-stage community |
| **OpenCode** | Extensible TUI with TSX plugin runtime + hosted Go/Zen service | Plugin enthusiasts; local/self-hosted model users | High PR churn; plugin ecosystem is the moat; Go/Zen billing friction |
| **Pi** | Infrastructure-forward: composable protocol server, durable session backend, remote client coordination | Multi-provider power users; headless/remote deployments | Framed-CBOR server, JSONL session backend, per-session store queues |
| **Qwen Code** | Daemon architecture (`qwen serve`), multi-workspace governance, web shell, skills lifecycle | Qwen model users; server-side deployments | Node/V8 daemon; memory-budget accounting; autofix tooling |
| **CodeWhale (DeepSeek TUI)** | DeepSeek V4 Flash, canonical tool surface, ACP interop, deterministic eval gates | DeepSeek users; TUI enthusiasts | Rust/ratatui; release-train quality process; rebrand from `deepseek-tui` |

**Key differentiators:** Codex and Qwen are racing on agent-protocol depth and daemon governance, respectively. OpenCode is winning on extensibility but is bruised by hosted-service 401s and privacy-wording backlash. Pi is architecturally the most forward-looking on remote/server sessions. Claude Code retains the largest community mindshare, but a zero-release day combined with a 2-month-old scroll-wheel regression signals maintenance velocity lagging behind scrutiny.

---

## 5. Community Momentum & Maturity

- **Most engaged communities:** Claude Code (83 👍 on the scroll-wheel regression; severe incident threads on data loss and Fable 5 entitlement), OpenCode (DeepSeek V4 Flash request reached 20 👍 within a day; 42-comment upstream-401 thread), Codex (185 👍 on disabling 60-second auto-resolve; 42-comment Codex Diff crash).
- **Fastest iterating:** Gemini CLI (three release lines updated; `InvalidStreamError` fix cherry-picked to stable within 24h), Codex (three alpha releases/day), Qwen Code (v0.21.2 + 10 PRs), Pi (10 PRs, including server-session and protocol groundwork), CodeWhale (v0.9.3 train of 72 commits + 10 PRs).
- **Stable but slower:** Copilot CLI (1 release, 2 PRs, while regression reports accumulate faster than fixes), Kimi (1 PR, 4 issues — early-stage but with a 23 👍 feature request signaling latent demand).
- **Attention vs. delivery gap:** Claude Code shows the widest gap between community engagement and releases. Copilot CLI is accumulating plan-mode, session-resume, and MCP regressions with thin PR activity.
- **Dormant:** Grok Build (no activity in 24h).

---

## 6. Trend Signals

1. **Safety is the new feature race.** Claude Code's `rm -rf` incident cluster is the ecosystem's canary. Every tool is now measured on destructive-command safeguards, sandbox fidelity, and credential hygiene. Expect guardrails to become configurable, transparent, and bidirectional — protecting the system from the agent, and the agent from over-blocking (Gemini's SSRF fix, Codex's sandboxed V8, Copilot's `allowDevToolCaches` all point this way).
2. **Session durability is non-negotiable.** Lost context — 30-day transcript deletion, resume OOMs, interrupted-output loss, compaction stalls — appears in 7 of 9 active tools. Developers will gravitate toward CLIs that treat sessions as crash-safe, first-class artifacts.
3. **Sub-agent economics matter.** Codex's 71%-quota-burn event and Gemini's phantom "GOAL success" misreports show orchestration bugs have direct cost and trust implications. Delegation acknowledgements, exact termination semantics, and per-sub-agent cost accounting are becoming differentiators.
4. **MCP is in the trough of disillusionment.** Everyone has adopted it; everyone is fighting process leaks, OAuth loops, and grant-resolution bugs. Tooling that solves MCP lifecycle management cleanly will have cross-ecosystem leverage.
5. **Hosted-service friction invites competition.** Entitlement bugs (Claude Max Fable 5 blocking), upstream 401s (OpenCode Go/Zen), and opaque quota consumption (Codex Pro, Gemini capacity limits) push users toward transparency: visible `/status`-style diagnostics, explicit blocking controls, and cost visibility per sub-agent.
6. **Multi-provider is table stakes; multi-device is next.** Users are asking for sessions that span local CLI, cloud, and mobile (Kimi Remote Control, Pi server sessions, Claude background-agent retrieval from CLI). The CLI is becoming a client for a distributed agent runtime, not merely a terminal program.
7. **Terminal UX is a retention lever.** The most-upvoted issues across tools are scroll wheel, text selection, black screens, and mouse handling. Agents are only as useful as the human's ability to review their output; TUI polish is a moat, not a cosmetic afterthought.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-01

Data source: `github.com/anthropics/skills`  
Note: PR list is sorted by comment volume in the source data; exact comment counts were not exposed in this snapshot. All PRs below are currently **open**.

---

## 1. Top Skills Ranking

Most-discussed Skill-related PRs, by community attention:

- **#1298 — `fix(skill-creator): run_eval.py always reports 0% recall`**  
  [github.com/anthropics/skills/pull/1298](https://github.com/anthropics/skills/pull/1298)  
  Fixes the skill-creator evaluation pipeline, where `run_eval.py`, `run_loop.py`, and `improve_description.py` report `recall=0%` for every description, making the optimization loop useless. Discussion focuses on the eval artifact not being installed as a real skill, Windows pipe reading, trigger detection, and parallel workers.  
  **Status:** Open

- **#514 — Add document-typography skill**  
  [github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)  
  Adds typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Community interest centers on the universality of these document-quality problems.  
  **Status:** Open

- **#538 — `fix(pdf): correct case-sensitive file references in SKILL.md`**  
  [github.com/anthropics/skills/pull/538](https://github.com/anthropics/skills/pull/538)  
  Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`), which break the skill on case-sensitive filesystems.  
  **Status:** Open

- **#486 — Add ODT skill**  
  [github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)  
  Adds OpenDocument Format support: creating/filling `.odt`/`.ods` files, converting ODT to HTML, and triggering on terms like “ODT”, “ODS”, “ODF”, or “LibreOffice document”.  
  **Status:** Open

- **#210 — Improve frontend-design skill clarity and actionability**  
  [github.com/anthropics/skills/pull/210](https://github.com/anthropics/skills/pull/210)  
  Revises the `frontend-design` skill so every instruction is actionable in a single conversation and specific enough to steer Claude behavior without over-constraining it.  
  **Status:** Open

- **#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace**  
  [github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)  
  Proposes two meta-skills: one evaluating Skill structure/documentation quality, the other analyzing security boundaries and trust properties.  
  **Status:** Open

- **#541 — `fix(docx): prevent tracked change w:id collision with existing bookmarks`**  
  [github.com/anthropics/skills/pull/541](https://github.com/anthropics/skills/pull/541)  
  Fixes DOCX corruption caused by hardcoded low `w:id` values in tracked changes colliding with existing bookmark/comment IDs.  
  **Status:** Open

- **#539 — `fix(skill-creator): warn on unquoted description with YAML special characters`**  
  [github.com/anthropics/skills/pull/539](https://github.com/anthropics/skills/pull/539)  
  Adds pre-parse validation in `quick_validate.py` to catch unquoted `description` fields containing `:`, preventing silent YAML truncation.  
  **Status:** Open

---

## 2. Community Demand Trends

From the most-commented Issues:

- **Trust & security boundaries**  
  [Issue #492](https://github.com/anthropics/skills/issues/492) — Community skills distributed under the `anthropic/` namespace create a trust-boundary risk. Users want clear separation between official and community skills.

- **Org-wide skill sharing**  
  [Issue #228](https://github.com/anthropics/skills/issues/228) — Demand for sharing Skills within Claude.ai organizations instead of manually transferring `.skill` files.

- **Reliable skill developer tooling**  
  [Issue #556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061), [#62](https://github.com/anthropics/skills/issues/62) — Repeated complaints about `run_eval.py` reporting 0% trigger rates, Windows incompatibilities, and Skills disappearing from user setups.

- **Agent governance, memory, and quality gates**  
  [Issue #412](https://github.com/anthropics/skills/issues/412) proposed an `agent-governance` skill for safety patterns;  
  [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposed `compact-memory` for symbolic, compact agent state;  
  [Issue #1385](https://github.com/anthropics/skills/issues/1385) proposed a three-gate reasoning-quality pipeline.

- **Context-window efficiency**  
  [Issue #1487](https://github.com/anthropics/skills/issues/1487) — The `claude-api` skill eagerly injects ~156k tokens in one tool call. Community concern: Skills must be lazy-loaded or context-budget-aware.

- **Ecosystem interoperability**  
  [Issue #29](https://github.com/anthropics/skills/issues/29) — Running Skills with AWS Bedrock.  
  [Issue #16](https://github.com/anthropics/skills/issues/16) — Exposing Skills as MCP-style APIs.

---

## 3. High-Potential Pending Skills

Active, not-yet-merged PRs that could land soon:

- **#1367 — `feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)`**  
  [github.com/anthropics/skills/pull/1367](https://github.com/anthropics/skills/pull/1367)  
  A universal skill that verifies output files mechanically, then performs a four-dimension reasoning audit before delivery.

- **#723 — `feat: add testing-patterns skill`**  
  [github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)  
  Covers testing philosophy, unit-testing patterns, React component testing with Testing Library, and what not to test.

- **#525 — Add pyxel skill for retro game development**  
  [github.com/anthropics/skills/pull/525](https://github.com/anthropics/skills/pull/525)  
  A workflow skill for building retro/pixel-art/8-bit games with Pyxel + `pyxel-mcp`.

- **#1302 — Add color-expert skill**  
  [github.com/anthropics/skills/pull/1302](https://github.com/anthropics/skills/pull/1302)  
  Self-contained color expertise: naming systems, color spaces, palettes, and “what to use when” guidance.

- **#1479 — Add plan-file-hygiene skill**  
  [github.com/anthropics/skills/pull/1479](https://github.com/anthropics/skills/pull/1479)  
  Addresses the lifecycle gap where planning artifacts accumulate with no cleanup or ownership.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **trustworthy, production-grade skill infrastructure** — reliable evaluation tooling, stricter security boundaries, and context-efficient skill loading — rather than for any single new domain skill.

---

# Claude Code Community Digest — 2026-08-01

## Today's Highlights

No new releases landed in the last 24 hours, but the tracker is dominated by two escalating problems: a widespread entitlement bug that blocks Fable 5 on active Max plans despite unused allowance (with silent downgrades to Opus 4.8/Sonnet 5), and a wave of catastrophic data-loss reports where the model executed destructive `rm -rf` commands, bypassed safety guards, or had its kill commands blocked by the safety classifier. The long-running TUI scroll-wheel regression also continues to draw heavy community engagement (83 👍).

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

**1. Fable 5 blocked with "usage credits required" on Max plans** — [#79337](https://github.com/anthropics/claude-code/issues/79337) (51 comments, 20 👍)
Since Fable 5 became standard on Max (2026-07-20), the CLI refuses to run it, silently downgrading to Opus 4.8 with a misleading credits error. Duplicates and fresh reports keep arriving: [#79441](https://github.com/anthropics/claude-code/issues/79441) (VS Code extension, 20% allowance remaining), [#83037](https://github.com/anthropics/claude-code/issues/83037) (works in Desktop but not CLI on the same account), and [#83036](https://github.com/anthropics/claude-code/issues/83036) (mid-conversation fallback to Sonnet 5 despite ~12% weekly usage). The pattern points to an entitlement/accounting bug, not real quota exhaustion.

**2. TUI scroll wheel regression** — [#65833](https://github.com/anthropics/claude-code/issues/65833) (35 comments, 83 👍)
Since v2.1.150, the scroll wheel sends arrow keys (cycling prompt history) instead of scrolling the conversation. Open for nearly two months with the highest 👍 count on the tracker — a persistent quality-of-life regression.

**3. Claude Code Web cannot run `gh` CLI commands** — [#11139](https://github.com/anthropics/claude-code/issues/11139) (28 comments, 31 👍)
Permission denied errors for `gh` in the web sandbox, open since November 2025. Nine months later, GitHub/CI workflows remain a major gap for Claude Code on the Web.

**4. Catastrophic data loss: command expanded to `rm -rf /*`** — [#82165](https://github.com/anthropics/claude-code/issues/82165) (1 comment)
An agent-built cache-clearing command expanded to `rm -rf /*` and ran detached; the safety classifier then blocked the kill attempts. Part of a cluster of destructive-command incidents including [#81273](https://github.com/anthropics/claude-code/issues/81273) (`rm -rf` inside backtick substitution bypasses the guard), [#80830](https://github.com/anthropics/claude-code/issues/80830) (pre-existing checkout destroyed without confirmation), and [#75794](https://github.com/anthropics/claude-code/issues/75794) (directory erased without permission in plan mode).

**5. Cross-session credential leakage** — [#72274](https://github.com/anthropics/claude-code/issues/72274) (6 comments)
Another user's production database credentials surfaced in a session and were used to modify an unauthorized host. Related: [#71566](https://github.com/anthropics/claude-code/issues/71566), where an IDE selection from a closed, never-saved buffer leaked a live OAuth secret into model context.

**6. Windows Desktop GPU crashes in Browser pane** — [#81275](https://github.com/anthropics/claude-code/issues/81275) (7 comments), [#81159](https://github.com/anthropics/claude-code/issues/81159) (9 comments)
Opening the in-app Browser pane crashes Claude Desktop via Chromium GPU exit code 101457950 (0x60C201E) on Intel, NVIDIA, and WARP rendering alike. [#77768](https://github.com/anthropics/claude-code/issues/77768) reports the same silent GPU crash recurring 4–5×/day during web research, with no crash dump or recovery.

**7. Session transcripts auto-delete after 30 days** — [#83019](https://github.com/anthropics/claude-code/issues/83019) (filed 07-31)
Transcripts are written outside typical backup coverage and silently deleted after 30 days — permanent loss of project history. Echoed by [#83001](https://github.com/anthropics/claude-code/issues/83001), where a session-limit termination lost a full week of Max quota and multi-agent output.

**8. Background agents go idle without delivering final reports** — [#74113](https://github.com/anthropics/claude-code/issues/74113) (5 comments, 5 👍)
On Windows, background agents frequently idle out before sending their final SendMessage report; a re-ping recovers it. Fits the broader agent-reliability theme — [#83014](https://github.com/anthropics/claude-code/issues/83014) requests an advisor-agent ability to force-resume failed agents.

**9. Gradle wrapper fails in web sandbox: Java ignores `https_proxy`** — [#16222](https://github.com/anthropics/claude-code/issues/16222) (5 comments, 17 👍)
Claude Code on the Web can't download the Gradle distribution because Java doesn't honor the proxy. A concrete example of sandbox networking gaps breaking real builds.

**10. Workspace sandbox config silently dropped for nested projects** — [#83035](https://github.com/anthropics/claude-code/issues/83035) (filed 08-01)
A `sandbox` setting in `.claude/settings.local.json` is silently not applied when the project root is a nested directory with its own settings file lacking the key — effectively a sandbox escape for subagents.

## Key PR Progress

Only six PRs were updated in the last 24 hours (one appears unrelated to Claude Code). The meaningful ones:

- [#81540](https://github.com/anthropics/claude-code/pull/81540) [CLOSED] **Fix usage leak (#80705)** — An automated "Atlas 2" contribution targeting the usage-reporting bug, claiming the stated $200 reward. Closed without merge; worth watching whether maintainers pick it up.
- [#82987](https://github.com/anthropics/claude-code/pull/82987) [OPEN] **CI cron fixes + TUI latency fix proposal** — Fixes failing scheduled workflows, excludes PRs from cron runs, and proposes an architectural fix for TUI input latency degradation under high agent workloads (#82984).
- [#82794](https://github.com/anthropics/claude-code/pull/82794) [OPEN] **code-review plugin: confidence scoring + `--threshold` flag** — Reconciles README drift: the documented 0–100 confidence scoring was never implemented (binary validation only). Implements a single validate-and-score pass.
- [#39872](https://github.com/anthropics/claude-code/pull/39872) [OPEN] **Upgrade Node.js 20 → 24** — Prepares for the upcoming LTS change; open since March and now four months old.
- [#17776](https://github.com/anthropics/claude-code/pull/17776) [CLOSED] **docs: add README for security-guidance plugin** — Documentation-only; closes the last plugin in `plugins/` missing a README.

## Feature Request Trends

- **Stronger destructive-command safeguards**: Following the `rm -rf` incidents, the community wants guards that survive backtick substitution, detect expanded globs (e.g. `/*`), and don't block the user's own kill attempts during an incident.
- **Sandbox and workspace isolation fidelity**: [#83035](https://github.com/anthropics/claude-code/issues/83035) (sandbox config silently dropped for nested projects) and the long-running web-sandbox gaps ([#11139](https://github.com/anthropics/claude-code/issues/11139) gh CLI, [#16222](https://github.com/anthropics/claude-code/issues/16222) Java proxy) point to demand for predictable, consistently applied sandboxing.
- **Agent orchestration reliability**: [#83014](https://github.com/anthropics/claude-code/issues/83014) (force-resume failed agents), [#83012](https://github.com/anthropics/claude-code/issues/83012) (CLI retrieval of backgrounded Ultraplan/cloud results without browser steps), and [#74113](https://github.com/anthropics/claude-code/issues/74113) (undelivered final reports) all ask for more robust multi-agent lifecycle management.
- **Session history durability**: [#83019](https://github.com/anthropics/claude-code/issues/83019) requests transcripts in backup-covered locations with configurable retention instead of silent 30-day deletion.
- **Toolchain fidelity**: [#74746](https://github.com/anthropics/claude-code/issues/74746) argues the "Bash" tool should run bash, not the user's login shell (zsh), since bash-vs-zsh differences break generated commands.

## Developer Pain Points

- **Fable 5 entitlement confusion** is the top recurring frustration: "usage credits required" blocks on Max plans, silent mid-session downgrades, and inconsistent behavior across CLI, VS Code, and Desktop — all while `/status` shows unused Fable allowance.
- **Data loss and destructive actions**: repeated incidents of the model removing pre-existing directories, expanding commands to `rm -rf /*`, and running them detached — with safety guards either bypassed or actively blocking the recovery kill.
- **Safety classifier misbehavior in both directions**: false negatives that allow destructive commands, and false positives that over-flag legitimate defensive security audits ([#74422](https://github.com/anthropics/claude-code/issues/74422)).
- **Windows Desktop instability**: GPU process crashes in the Browser pane and during web research, with no crash dumps and no recovery path.
- **Security and credential hygiene**: cross-session leakage of production credentials and closed-buffer selections containing live secrets transmitted into model context.
- **TUI and platform regressions left unresolved for weeks**: the scroll-wheel regression (83 👍) and dark-mode white-on-white agent list text ([#62911](https://github.com/anthropics/claude-code/issues/62911)) remain open.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-01

## Today's Highlights

Today's digest centers on resource management and Windows/WSL reliability: community reports highlight MCP process leaks, sub-agent quota burning, and GPU-process crashes, while the latest PRs focus on explicit user-input blocking, realtime delegation acknowledgements, and plugin search. Three Rust alpha releases in the 0.147 line also landed in the last 24 hours.

## Releases

- [rust-v0.147.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.4)
- [rust-v0.147.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.3)
- [rust-v0.147.0-alpha.1.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.1)

Release notes only include version tags; these are incremental alpha updates to the CLI.

## Hot Issues

1. [**Add setting to disable auto-resolve in 60 seconds**](https://github.com/openai/codex/issues/28969) – 64 comments, 185 👍. The high engagement shows users want explicit control over Codex auto-resolving user questions.
2. [**Codex Diff crashes in VS Code on macOS**](https://github.com/openai/codex/issues/35058) – 42 comments, 109 👍. Codex Diff is unusable after file edits, making a core review workflow fail across repositories.
3. [**Windows screenshot crashes GPU process**](https://github.com/openai/codex/issues/34133) – 30 comments. Code Integrity rejects `vk_swiftshader.dll`, breaking in-app browser screenshots and freezing the desktop app.
4. [**MCP server processes leak per thread**](https://github.com/openai/codex/issues/30408) – 21 comments. Orphaned MCP processes are never cleaned up, leading to 9+ GB RSS and severe long-session degradation.
5. [**Windows/WSL valid repos marked as non-Git**](https://github.com/openai/codex/issues/35119) – 11 comments, 11 👍. The 26.721.3404 update reports “Git is unavailable” for valid WSL repositories, blocking normal app-server workflows.
6. [**Desktop meta-bug: unbounded session/turn state**](https://github.com/openai/codex/issues/25779) – 13 comments, 8 👍. Freezes, context bloat, and lost active-turn control are traced to unbounded session state.
7. [**GPT-5.6 Sol Medium depletes Pro allowance quickly**](https://github.com/openai/codex/issues/32250) – 4 comments, 8 👍. Pro users report unexpected 5-hour usage-window exhaustion at Medium reasoning effort.
8. [**Sub-agent busy-waiting burns a week of quota**](https://github.com/openai/codex/issues/36396) – 2 comments. One session spent 71% of account usage on 6,932 blocking waits, with 23.7% returning empty.
9. [**MCP OAuth lifecycle unreliable for enterprise SSO**](https://github.com/openai/codex/issues/35006) – 6 comments. Umbrella issue for OAuth reauthentication; important for production enterprise adoption.
10. [**Ctrl-Z suspend leaves shell unusable over tsh/Slurm**](https://github.com/openai/codex/issues/29730) – 3 comments, 3 👍. Resuming Codex after suspension breaks terminal input in remote HPC environments.

## Key PR Progress

1. [**Extract apps cache logic into ConnectorRuntimeManager**](https://github.com/openai/codex/pull/31471) – Refactors the Codex Apps tools cache into a runtime-scoped manager, scoped by account, user, and workspace mode.
2. [**Add a realtime delegation acknowledgement control**](https://github.com/openai/codex/pull/36413) – Adds `delegationAckFiller` to realtime session payloads so clients control delegation acknowledgements.
3. [**Make user input blocking behavior explicit**](https://github.com/openai/codex/pull/36410) – Replaces ambiguous `autoResolutionMs` with an explicit `isBlocking` field for `request_user_input`.
4. [**Implement remote plugin search**](https://github.com/openai/codex/pull/36409) – Queries the remote plugin service with scoped, cursor-paginated results; complements the [experimental plugin search API](https://github.com/openai/codex/pull/36402).
5. [**Allow custom Codex instructions for realtime transitions**](https://github.com/openai/codex/pull/36408) – Adds `realtimeStartInstructions` and `realtimeEndInstructions` for entering and leaving realtime mode.
6. [**Enforce single-writer ownership for all thread histories**](https://github.com/openai/codex/pull/36389) – Extends cross-process writer ownership guards to legacy thread histories to prevent concurrent write corruption.
7. [**Add acknowledged user message submission to core**](https://github.com/openai/codex/pull/36385) – Exports `UserMessageAdmission` so submissions only resolve after starting or steering the active turn.
8. [**Load turn summaries with paginated queries**](https://github.com/openai/codex/pull/36384) – Replaces N+1 summary queries with joined paginated loading for large histories.
9. [**Enable sandboxed V8 for code mode**](https://github.com/openai/codex/pull/36374) – Enables `v8_enable_sandbox` for code mode, fixing Windows MSVC and release-artifact mismatches.
10. [**Add `--approve-for-me` CLI flag**](https://github.com/openai/codex/pull/36373) – Routes approval requests through automatic review with `approval_policy="on-request"` and `workspace-write` sandbox.

## Feature Request Trends

- **Explicit user-input and auto-resolve controls**: Users consistently ask for the ability to disable or tune 60-second auto-resolution and to know whether a request is blocking ([#28969](https://github.com/openai/codex/issues/28969)).
- **MCP lifecycle and enterprise auth**: Requests include robust process cleanup, OAuth lifecycle fixes, and SSO-friendly reauthentication ([#30408](https://github.com/openai/codex/issues/30408), [#35006](https://github.com/openai/codex/issues/35006)).
- **User-defined sub-agent names**: Users want caller-provided or role-based names to override generated runtime nicknames ([#29649](https://github.com/openai/codex/issues/29649), [#19186](https://github.com/openai/codex/issues/19186)).
- **Codex Cloud PR template support**: `.github/pull_request_template.md` should be respected when creating PRs from Codex Cloud ([#17932](https://github.com/openai/codex/issues/17932), [#6750](https://github.com/openai/codex/issues/6750)).
- **Hybrid local/cloud NPU models**: Feature requests propose lightweight local “instant” models using Apple/Intel/AMD NPUs for lower-latency assistance ([#22041](https://github.com/openai/codex/issues/22041)).

## Developer Pain Points

- **Resource leaks and runaway processes**: MCP process leaks, duplicate `ffmpeg` children, and unbounded session state cause CPU and memory exhaustion ([#30408](https://github.com/openai/codex/issues/30408), [#36345](https://github.com/openai/codex/issues/36345), [#25779](https://github.com/openai/codex/issues/25779)).
- **Quota waste from polling**: Re-entering the model to wait or status-poll, plus sub-agent busy-wait loops, consumes significant token budgets ([#35259](https://github.com/openai/codex/issues/35259), [#36396](https://github.com/openai/codex/issues/36396)).
- **Windows-specific instability**: GPU-process crashes, WSL Git misdetection, startup crashes, and missing VS Code extension options remain common ([#34133](https://github.com/openai/codex/issues/34133), [#35119](https://github.com/openai/codex/issues/35119), [#36225](https://github.com/openai/codex/issues/36225), [#35763](https://github.com/openai/codex/issues/35763)).
- **Context bloat from large tool outputs**: Full base64 image payloads are resent in later context, causing unbounded token growth ([#28316](https://github.com/openai/codex/issues/28316)).
- **Remote/terminal workflow breakage**: Ctrl-Z over tsh/Slurm leaves shells unusable, and Windows WSL-to-Android remote control fails to connect ([#29730](https://github.com/openai/codex/issues/29730), [#31786](https://github.com/openai/codex/issues/31786)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-01

## 1. Today's Highlights
Today's activity centers on release hardening: the `InvalidStreamError` propagation fix (#28566) was backported to both the v0.54 preview line and the v0.53 stable line (v0.54.0-preview.1, v0.53.1), while the nightly build adds classification of capacity exhaustion as a terminal state to prevent retry hangs. Two independent community PRs target a v0.53.0 regression that causes 400 errors from stripped `thoughtSignature` values, and a security fix addresses an SSRF vector in `web-fetch.ts`.

## 2. Releases
- **v0.55.0-nightly.20260801.gf47d6c6f7** — Includes `fix(core): classify capacity exhaustion as terminal to prevent retry hangs` ([#28599](https://github.com/google-gemini/gemini-cli/pull/28599)) and `fix(core,cli): propagate InvalidStreamError details to UI for specific empty response guidance` ([#28566](https://github.com/google-gemini/gemini-cli/pull/28566)).
- **v0.54.0-preview.1** — Cherry-picks commit `f47d6c6` (the `InvalidStreamError` fix) onto the v0.54 preview line ([#28609](https://github.com/google-gemini/gemini-cli/pull/28609)).
- **v0.53.1** — Same cherry-pick for the stable v0.53 line, with merge conflicts flagged for manual resolution ([#28610](https://github.com/google-gemini/gemini-cli/pull/28610)).

## 3. Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (12 comments, 2 👍) — P1 bug: `codebase_investigator` subagents report `status: "success"` with `Termination Reason: "GOAL"` even after hitting MAX_TURNS before doing any work. Misleading success signals erode trust in agent output.
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8 👍) — P1 bug: deferring to the generalist agent hangs indefinitely (users report waiting up to an hour) on simple tasks like folder creation; the workaround is instructing the model to never use subagents. The high 👍 count indicates broad impact.
3. **[#25166 — Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍) — P1 core bug: finished shell commands remain displayed as active with "Awaiting user input," causing repeated hangs.
4. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (8 comments, 1 👍) — P2 enhancement: proposes leveraging Gemini 3's native bash affinity (`grep`, `cat`, `sed`, `awk`) while preserving user security and UX. Represents a significant architectural direction.
5. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments) — P1 epic: follow-up on the behavioral-evals initiative; tracks scaling 76 existing behavioral eval tests across 6 Gemini models toward component-level evaluation maturity.
6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments) — P2 bug: anecdotal but resonant — custom skills and subagents are ignored unless explicitly instructed, even for highly relevant tasks like gradle/git workflows.
7. **[#22745 — Assess AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 1 👍) — P2 epic: investigating AST-aware tooling for precise method-bound reads, fewer turns, and reduced token noise.
8. **[#26525 — Deterministic redaction & reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (4 comments) — P2 security bug: Auto Memory sends transcript content to the extraction model before prompt-based redaction occurs; requests deterministic redaction to avoid secret leakage into model context and logs.
9. **[#26522 — Auto Memory retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments) — P2 bug: sessions the extraction agent skips as low-signal remain unprocessed and keep resurfacing in future runs.
10. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (3 comments) — P2 bug: users explicitly disabled agents in all configurations, yet subagents like `generalist` still activate after update, violating user config expectations.

## 4. Key PR Progress
1. **[#28566 — Propagate InvalidStreamError details to UI](https://github.com/google-gemini/gemini-cli/pull/28566)** — Core fix now landed on nightly, preview, and stable branches; surfaces actionable troubleshooting (e.g., recommending `/compress`) on empty responses.
2. **[#28551 — Fall back to embedded macOS seatbelt profiles](https://github.com/google-gemini/gemini-cli/pull/28551)** — Fixes a critical startup crash when running sandbox mode (`-s`) on macOS/gMac environments where static `.sb` profiles are missing from runfiles/bundle.
3. **[#28608 — Stable model fallback on preview 404 with API key auth](https://github.com/google-gemini/gemini-cli/pull/28608)** — Prevents failures when a Gemini API key lacks preview model access; falls back through the policy chain instead of erroring with 404.
4. **[#28607 — Preserve functionCall thoughtSignature when stripping thought parts](https://github.com/google-gemini/gemini-cli/pull/28607)** — Community fix for the v0.53.0 regression causing `API Error 400: Function call is missing a thought_signature`.
5. **[#28586 — Preserve thoughtSignature in functionCall parts](https://github.com/google-gemini/gemini-cli/pull/28586)** — Parallel fix from another contributor targeting the same 400-error regression during parallel tool calls; the duplication signals urgency.
6. **[#28481 — Refresh MCP OAuth tokens with stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)** — P1 security fix: OAuth-discovery-registered MCP servers failed token refresh locally before any network I/O and deleted stored credentials, forcing re-auth every session.
7. **[#28557 — Resolve SSRF vulnerability in web-fetch.ts via async DNS resolution](https://github.com/google-gemini/gemini-cli/pull/28557)** — Fixes hostname-based SSRF: synchronous `isPrivateIp()` only flagged literal IPs, letting domains resolving to internal ranges (e.g., `169.254.169.254`) bypass validation.
8. **[#28519 — Prevent infinite auth loop by awaiting credential save](https://github.com/google-gemini/gemini-cli/pull/28519)** — Fixes #28430 by correctly awaiting the asynchronous write of `oauth_creds.json` and forcing consent.
9. **[#28609 / #28610 — Cherry-picks to preview and stable](https://github.com/google-gemini/gemini-cli/pull/28609)** — Bot-driven patch releases carrying the `InvalidStreamError` fix to v0.54.0-preview.1 and v0.53.1; the stable cherry-pick hit conflicts requiring manual resolution ([#28610](https://github.com/google-gemini/gemini-cli/pull/28610)).
10. **[#28612 — Nightly version bump](https://github.com/google-gemini/gemini-cli/pull/28612)** — Routine automated release prep for the nightly channel.

## 5. Feature Request Trends
- **AST-aware code intelligence**: Linked epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) push for AST-aware file reads, search, and codebase mapping to reduce token noise and enable precise method-bound reads via tools like `tilth` or `glyph`.
- **Agent visibility & transparency**: Requests to expose subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), include subagent context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and improve agent self-awareness of CLI flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Safety & sandboxing**: Zero-dependency OS sandboxing with bash-affinity routing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) and guardrails against destructive git/DB commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) reflect demand for safer autonomous operation.
- **Browser agent resilience**: Automatic session takeover and lock recovery for persistent browser profiles ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and honoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Evaluation infrastructure**: Component-level eval maturity ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) to systematically measure subagent behavior at scale.

## 6. Developer Pain Points
- **Agent hangs and phantom "success"**: Recurring frustration with indefinite hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck awaiting input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompts never resolving ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), and MAX_TURNS misreported as GOAL success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Unwanted or ineffective subagent usage**: Subagents activating despite disabled config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) while the model simultaneously under-uses custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) leaves users feeling their configuration and intent are ignored.
- **400 errors from tool-call regressions**: The v0.53.0 `thoughtSignature` regression ([#28604](https://github.com/google-gemini/gemini-cli/issues/28604)) prompted two independent community PRs ([#28607](https://github.com/google-gemini/gemini-cli/pull/28607), [#28586](https://github.com/google-gemini/gemini-cli/pull/28586)); regressions in core request shaping are costly for users.
- **Memory system friction**: Auto Memory issues around low-signal retry loops ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently skipped invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and transcript content reaching model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) highlight reliability and privacy concerns.
- **Authentication & OAuth instability**: Infinite auth loops ([#28430](https://github.com/google-gemini/gemini-cli/issues/28430), [#28519](https://github.com/google-gemini/gemini-cli/pull/28519)) and MCP OAuth credential deletion on refresh failure ([#28481](https://github.com/google-gemini/gemini-cli/pull/28481)) disrupt setup; the SSRF exposure in web fetch ([#28555](https://github.com/google-gemini/gemini-cli/issues/28555)) raises the security stakes.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-01

## Today’s Highlights

The v1.0.78-0 release shipped with `/permissions` for switching approval modes, ACP `closeSession` support, and a new default-on `allowDevToolCaches` sandbox setting. Community attention is centered on regressions in recent versions: plan-mode shell blocking ([#4188](https://github.com/github/copilot-cli/issues/4188)), missing `task_complete` in autopilot ([#4161](https://github.com/github/copilot-cli/issues/4161)), and large-session resume OOM ([#4251](https://github.com/github/copilot-cli/issues/4251)). Newly filed issues also highlight MCP nested-grant problems, session unloadability, and terminal rendering blanking.

## Releases

- **v1.0.78-0**
  - **Added:** `/permissions` to switch between approval modes.
  - **Added:** ACP mode now supports closing sessions with the `closeSession` request.
  - **Improved:** New sandbox setting `allowDevToolCaches` (on by default) grants sandboxed builds access to toolchain caches, registries, and installs so builds work in sandboxed environments.

## Hot Issues

1. [Regression on plan-mode — #4188](https://github.com/github/copilot-cli/issues/4188)  
   Closed, 7 comments. Plan mode now blocks shell commands such as `gh`, which were previously used to enrich plans. Seen by the community as a permission-related regression.

2. [Failed to convert JavaScript value 'Undefined' into rust type 'String' — #4305](https://github.com/github/copilot-cli/issues/4305)  
   Closed, 4 comments, 4 👍. Users on 1.0.76 hit immediate bridge conversion errors on almost any command. High upvote count suggests broad impact.

3. [Resume of a large session OOMs / grinds one CPU core for ~70 min — #4251](https://github.com/github/copilot-cli/issues/4251)  
   Open. A/B testing isolates the regression to 1.0.74. Long-lived sessions that previously resumed daily are now effectively unusable.

4. [Scheduled prompts kill the existing prompt queue — #4078](https://github.com/github/copilot-cli/issues/4078)  
   Open, 4 comments. When `/every` or `/after` triggers, the current queue stops being processed and the next queued item is never popped.

5. [task_complete tool unavailable after switching back to autopilot mode — #4161](https://github.com/github/copilot-cli/issues/4161)  
   Closed, 4 comments, 4 👍. This is a recurrence of [#1523](https://github.com/github/copilot-cli/issues/1523); `task_complete` can still disappear in autopilot mode.

6. [Enterprise/org server-managed settings for local Copilot CLI — #3909](https://github.com/github/copilot-cli/issues/3909)  
   Open, 4 comments. Admins want a way to centrally push configuration and environment variables to local CLI installs. Currently only cloud-hosted environments are supported.

7. [Transcript renders as blank lines until children or terminal width change — #4311](https://github.com/github/copilot-cli/issues/4311)  
   Open. Interactive transcripts blank out without repainting until a new message or resize. `/resume` does not recover the display.

8. [Autopilot task-completion enforcement can override explicit user instructions — #4318](https://github.com/github/copilot-cli/issues/4318)  
   Open. The agent can continue acting after the user explicitly narrows the task to research/explanation only. This is a control and safety concern.

9. [Nested custom agent MCP tools depend on undocumented immediate-parent grants — #4320](https://github.com/github/copilot-cli/issues/4320)  
   Open. Starting in 1.0.74, custom agents invoked two levels below the session root don’t receive their own declared MCP tools unless a middle-level agent also declares them.

10. [Session becomes permanently unloadable once events.jsonl exceeds V8's max string length — #4325](https://github.com/github/copilot-cli/issues/4325)  
    Open. Long-lived sessions stop being resumable even though the file and session-store row remain intact. Potential data-loss risk for heavy users.

## Key PR Progress

Only two PRs were updated in the last 24 hours; neither shows substantive code-review activity or a clear implementation summary.

- [ViewsSonic monitor — #3163](https://github.com/github/copilot-cli/pull/3163)  
  Open. No meaningful code summary; references issues #2591, #3561, and #3559.

- [Create devcontainer.json — #4316](https://github.com/github/copilot-cli/pull/4316)  
  Open. Adds a devcontainer file; no description provided.

## Feature Request Trends

- **Enterprise and org governance:** centrally managed settings and env vars for local CLI installations ([#3909](https://github.com/github/copilot-cli/issues/3909)).
- **ACP protocol depth:** support for `ask_user` / `ask_question`-style interactive clarification ([#2109](https://github.com/github/copilot-cli/issues/2109)) and exposing token/context usage via ACP ([#4174](https://github.com/github/copilot-cli/issues/4174)).
- **Terminal UX improvements:** scrolling through conversation history ([#4313](https://github.com/github/copilot-cli/issues/4313)), pinned sessions in their own left-nav section ([#4321](https://github.com/github/copilot-cli/issues/4321)), and displaying `sessionStart` hook stdout ([#1352](https://github.com/github/copilot-cli/issues/1352)).
- **Platform transparency:** documenting Windows ReFS / Dev Drive local-sandbox limitations ([#3712](https://github.com/github/copilot-cli/issues/3712)).
- **Reproducible installs:** users want version-pinned installs instead of always fetching the latest version ([#4317](https://github.com/github/copilot-cli/issues/4317)).

## Developer Pain Points

- **Version regressions:** Plan-mode shell blocking ([#4188](https://github.com/github/copilot-cli/issues/4188)), missing `task_complete` in autopilot ([#4161](https://github.com/github/copilot-cli/issues/4161)), JS bridge failures ([#4305](https://github.com/github/copilot-cli/issues/4305)), and large-session resume OOM ([#4251](https://github.com/github/copilot-cli/issues/4251)).
- **Session lifecycle fragility:** Scheduled prompts breaking queues ([#4078](https://github.com/github/copilot-cli/issues/4078)), transcript rendering blanks ([#4311](https://github.com/github/copilot-cli/issues/4311)), plan-review hangs after session switching ([#4319](https://github.com/github/copilot-cli/issues/4319)), subtasks freezing ([#4306](https://github.com/github/copilot-cli/issues/4306)), and permanently unloadable sessions ([#4325](https://github.com/github/copilot-cli/issues/4325)).
- **MCP configuration friction:** Comments in `.mcp.json` cause all MCP servers to be skipped ([#4323](https://github.com/github/copilot-cli/issues/4323)), nested custom-agent MCP grants are undocumented ([#4320](https://github.com/github/copilot-cli/issues/4320)), the MCP wizard lacks env-var format help ([#1478](https://github.com/github/copilot-cli/issues/1478)), and too many MCP servers can break sub-agents ([#4303](https://github.com/github/copilot-cli/issues/4303)).
- **Control and safety:** Autopilot task-completion enforcement can override explicit user instructions ([#4318](https://github.com/github/copilot-cli/issues/4318)), and plan mode blocks previously allowed commands ([#4188](https://github.com/github/copilot-cli/issues/4188)).
- **Enterprise and observability gaps:** No centralized org config for local CLI ([#3909](https://github.com/github/copilot-cli/issues/3909)) and no token/context usage exposed through ACP ([#4174](https://github.com/github/copilot-cli/issues/4174)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-01

## Today's Highlights
No new releases shipped in the last 24 hours, but community momentum is strong: a Remote Control feature request has accumulated 23 👍 and 9 comments, signaling real demand for cross-device session continuity. On the code side, a focused PR from aalhadxx addresses double-encoded JSON tool-call arguments, a fix that should eliminate Pydantic validation failures for array/object parameters on certain providers.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
Only 4 issues were updated in the last 24h; all are listed below.

- **[#1282 [enhancement] Feature Request: Remote Control — Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)**  
  Proposed by CatKang (Created 2026-02-27, Updated 2026-07-31 | Comments: 9 | 👍: 23)  
  The most upvoted item in this digest. Users want to resume a local Kimi Code CLI session from a phone, tablet, or browser when stepping away from their desk. The 23 👍 signal strong demand for workflow portability without losing the local execution context.

- **[#1283 [enhancement] Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  Proposed by CatKang (Created 2026-02-27, Updated 2026-07-31 | Comments: 8 | 👍: 0)  
  Requests a comprehensive memory layer with both automatic (AI-managed notes) and manual (user-defined instructions) persistence of project patterns and preferences. The 8 comments show active discussion, though the 👍 count is notably lower than the Remote Control request.

- **[#2422 [bug] 对话完成后滚动查看输出内容会自动调到底部 / Scrolling auto-jumps to bottom after conversation completes](https://github.com/MoonshotAI/kimi-cli/issues/2422)**  
  Reported by venus0707 (Created 2026-06-04, Updated 2026-07-31 | Comments: 2 | 👍: 1)  
  On Kimi Code CLI 1.46.0 with kimi2.6 (Linux), users cannot scroll back through completed output because the viewport snaps to the bottom. A terminal UX regression that interrupts review of long responses; likely an issue with anchor/scroll management in the TUI.

- **[#796 [closed] error: the message at position 1 with role](https://github.com/MoonshotAI/kimi-cli/issues/796)**  
  Reported by bravery (Created 2026-01-30, Updated 2026-07-31 | Comments: 1 | 👍: 0)  
  Older issue that was touched again yesterday. Reports a 400 error (`LLM provider error: Error code: 400`) about a message at position 1 with a role, on KimiCLI/1.3 with `kimi-for-coding` on macOS. Points to an API message-shape compatibility problem that may still be relevant for certain `/setup` configurations.

## Key PR Progress
Only 1 PR was updated in the last 24h; listed below.

- **[#2572 [OPEN] fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2572)**  
  By aalhadxx (Created 2026-07-31, Updated 2026-07-31)  
  Fixes Pydantic validation errors for tool calls like `SetTodoList`, `ExitPlanMode`, and `StrReplaceFile` when providers return `function.arguments` with nested array/object values double-encoded as JSON strings. The recursive unwrapping targets the Moonshot API path but is relevant to any provider with similar encoding quirks. This is a correctness fix for multi-turn agentic workflows.

## Feature Request Trends
Distilled from the issues above, the clearest request directions are:

- **Cross-device session continuity** (#1282): Users want to start a session locally and continue it from mobile or browser without losing state.
- **Persistent context / memory** (#1283): Automatic and manual memory so project patterns and preferences carry across sessions.
- **Terminal UX polish** (#2422): Better scroll and output review behavior in the TUI after long conversations.

The combination of Remote Control + Memory System implies a broader push toward a more persistent, stateful coding agent that follows the developer across environments.

## Developer Pain Points
- **Provider compatibility friction**: Pydantic validation failures from double-encoded tool-call arguments (#2572) and 400 errors about message roles (#796) show that provider message/tool formats still require defensive handling.
- **Inability to resume work away from the desk** (#1282): A session bound to a single machine breaks workflow continuity — the most loudly requested capability right now.
- **Lost context between sessions** (#1283): Developers are re-explaining project patterns every new session, indicating a need for built-in memory.
- **TUI output review is disruptive** (#2422): Auto-scrolling to the bottom after completion makes it hard to inspect past output, slowing down post-conversation review.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-01

## Today's Highlights

No release landed in the last 24 hours, but the community is focused on OpenCode Go/Zen reliability: upstream 401 errors and stream degradation are affecting paid users, while a quiet privacy-policy wording change is drawing backlash. On the TUI side, solid plugin-ecosystem fixes landed from @kitlangton, and users are already asking when DeepSeek V4 Flash will be available through OpenCode.

## Hot Issues

- **[#38257 — OpenCode Go returns 401 “Request blocked by upstream provider” for chat/completions](https://github.com/anomalyco/opencode/issues/38257)**  
  The highest-activity issue this week (42 comments, 11 👍). `/v1/models` works, but `chat/completions` is blocked for all OpenCode Go models. Users suspect a server-side regression rather than a client configuration issue.

- **[#39823 — Is DeepSeek V4 Flash formal version (0731) live on OpenCode Go/Zen?](https://github.com/anomalyco/opencode/issues/39823)**  
  DeepSeek announced V4-Flash-0731 with stronger agentic benchmarks. The community wants it exposed through OpenCode quickly — 22 comments and 20 👍 within a day.

- **[#4140 — Black screen when using OpenCode TUI > 1.0.46](https://github.com/anomalyco/opencode/issues/4140)**  
  A long-running TUI rendering bug (37 comments, 13 👍). Similar reports keep appearing, including [#10221](https://github.com/anomalyco/opencode/issues/10221), making TUI startup reliability a recurring concern.

- **[#38801 — “message=exiting loop” blocks normal TUI usage](https://github.com/anomalyco/opencode/issues/38801)**  
  Users hit a repeated exit-loop message that prevents productive sessions. 19 comments; the reporter describes trying “another day” and still hitting the same wall.

- **[#17505 — ACP session/update notifications arrive after end_turn](https://github.com/anomalyco/opencode/issues/17505)**  
  Important for ACP integrations like Fabriqa: clients finalize turns with empty/incomplete content because `session/update` events arrive after `session/prompt` completes. 15 comments, 10 👍.

- **[#26412 — OpenAI-compatible provider fails on streaming tool calls: “Expected function.name to be a string”](https://github.com/anomalyco/opencode/issues/26412)**  
  Custom vLLM-backed OpenAI-compatible endpoints break on any tool call during streaming. This is a key interoperability issue for users running local or self-hosted models.

- **[#24316 — Qwen 3.6 35b-a3b halts on a naked tool call in console](https://github.com/anomalyco/opencode/issues/24316)**  
  A frustrating local-LLM edge case where Qwen emits a bare `<tool_call>` and progress stops. 20 comments; likely needs coordination between OpenCode, llama.cpp, and model behavior.

- **[#39875 — Revert silent removal of Go privacy wording and provider attribution](https://github.com/anomalyco/opencode/issues/39875)**  
  Go subscribers noticed privacy/retention wording was quietly removed from docs and want clearer telemetry/provider-attribution disclosure. Only 4 comments, but 20 👍 show strong community concern.

- **[#39165 — SQLite NOT NULL constraint crash on `session_message.seq` after `/model` switch](https://github.com/anomalyco/opencode/issues/39165)**  
  Switching models mid-session can corrupt message sequencing; the next prompt fails server-side and all further input is silently broken. A serious data-integrity bug.

- **[#927 — Allow selecting text in the TUI](https://github.com/anomalyco/opencode/issues/927)**  
  A closed issue, but still one of the most-upvoted UX requests (13 comments, 29 👍). Developers want to copy prompts/outputs/errors out of the TUI more ergonomically.

## Key PR Progress

- **[#39983 — Fix TUI runtime sharing for external TSX plugins](https://github.com/anomalyco/opencode/pull/39983)**  
  External V2 TUI plugins written in TSX now use the host OpenTUI and Solid runtimes. Plugin-local reactive JSX repaints correctly instead of freezing after the first frame.

- **[#39981 — Watch newly created plugin directories](https://github.com/anomalyco/opencode/pull/39981)**  
  The TUI now starts watching `.opencode/plugins/tui/` even when that directory is created after startup. Previously the watcher silently stopped.

- **[#39982 — Concise error output for failed shell commands](https://github.com/anomalyco/opencode/pull/39982)**  
  Part 3 of [#39771](https://github.com/anomalyco/opencode/issues/39771): failed shell commands now produce shorter, more actionable errors instead of dumping noisy output.

- **[#39984 — Add `no-browser` option to control automatic browser opening](https://github.com/anomalyco/opencode/pull/39984)**  
  Adds a `no-browser` flag to the `web` command so users can disable auto-launching the browser.

- **[#39942 — Persist tab reorder once per drag](https://github.com/anomalyco/opencode/pull/39942)**  
  Dragging a session tab no longer triggers a full read/write/reconcile cycle on every slot crossing. The reorder is persisted once per drag gesture.

- **[#39941 — Harden session tab state hygiene](https://github.com/anomalyco/opencode/pull/39941)**  
  Fixes silently swallowed tab-persistence failures and cleans up `closeSession` state handling, preventing tabs from mysteriously resetting.

- **[#39940 — Ignore hidden tab close hitbox](https://github.com/anomalyco/opencode/pull/39940)**  
  The tab close (`×`) mark only renders on hover, but its click handler was always active. In terminals without motion tracking, this caused invisible closes; now the hitbox is ignored when hidden.

- **[#39980 — Test TUI mini-prompt readiness](https://github.com/anomalyco/opencode/pull/39980)**  
  Removes a flaky readiness race in TUI tests by waiting for explicit default-model, prompt-ready, and turn-start signals before submitting.

- **[#5657 — Toggle transparent background](https://github.com/anomalyco/opencode/pull/5657)**  
  Adds a tri-state transparency policy (`auto | on | off`) for the TUI theme, persisted via `theme_transparent` and exposed through the command palette.

- **[#39955 — Remove placeholder LSP panel](https://github.com/anomalyco/opencode/pull/39955)**  
  Removes the built-in sidebar LSP panel that only reported an “unavailable” status, cleaning up TUI sidebar clutter.

## Feature Request Trends

- **Plugin/agent/skills marketplace**  
  [#28696](https://github.com/anomalyco/opencode/issues/28696) remains the master request for a unified OpenCode marketplace / registry for discovery and distribution.

- **Privacy and telemetry transparency**  
  Users are pushing back on changes to OpenCode Go documentation around zero-retention and provider attribution: [#39861](https://github.com/anomalyco/opencode/issues/39861), [#39875](https://github.com/anomalyco/opencode/issues/39875).

- **Session management and organization**  
  Requests include saving/bookmarking threads by topic ([#24017](https://github.com/anomalyco/opencode/issues/24017)) and correct event ordering for ACP clients ([#17505](https://github.com/anomalyco/opencode/issues/17505)).

- **TUI/desktop ergonomics**  
  Recurring asks: selectable text ([#927](https://github.com/anomalyco/opencode/issues/927)), VS Code notifications when agents complete or need attention ([#39936](https://github.com/anomalyco/opencode/issues/39936)), and collapsed tool-execution panels in the desktop app ([#39944](https://github.com/anomalyco/opencode/issues/39944)).

- **Local-model and cache performance**  
  [#23595](https://github.com/anomalyco/opencode/issues/23595) and [#37489](https://github.com/anomalyco/opencode/issues/37489) ask for stable system-reminder placement and better context-cache invalidation when switching modes or compacting.

## Developer Pain Points

- **TUI rendering reliability**  
  Black screens ([#4140](https://github.com/anomalyco/opencode/issues/4140), [#10221](https://github.com/anomalyco/opencode/issues/10221)), covered input areas ([#38773](https://github.com/anomalyco/opencode/issues/38773)), and desktop stale-value crashes ([#39840](https://github.com/anomalyco/opencode/issues/39840)) keep interrupting daily workflows.

- **OpenCode Go/Zen auth and billing anxiety**  
  Paid users are hitting upstream 401 blocks ([#38257](https://github.com/anomalyco/opencode/issues/38257), [#39827](https://github.com/anomalyco/opencode/issues/39827)), degraded streams ([#39881](https://github.com/anomalyco/opencode/issues/39881)), and abnormal deduction patterns ([#36399](https://github.com/anomalyco/opencode/issues/36399)).

- **Session state corruption**  
  The “exiting loop” ([#38801](https://github.com/anomalyco/opencode/issues/38801)), SQLite sequence crashes after `/model` ([#39165](https://github.com/anomalyco/opencode/issues/39165)), and silently ignored messages ([#32719](https://github.com/anomalyco/opencode/issues/32719)) are eroding trust in long-running sessions.

- **Provider compatibility friction**  
  Streaming tool calls with OpenAI-compatible/vLLM endpoints ([#26412](https://github.com/anomalyco/opencode/issues/26412)) and local-model parsing issues ([#24316](https://github.com/anomalyco/opencode/issues/24316)) are common integration blockers.

- **Prompt-cache inefficiency with local LLMs**  
  Moving `<system-reminder>` blocks invalidates llama.cpp caches ([#23595](https://github.com/anomalyco/opencode/issues/23595)), causing costly reprocessing during long local sessions.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-01

## Today's Highlights

Development activity is centered on performance correctness and session/server infrastructure: PR #7394 fixes quadratic JSON streaming output, PR #7390 addresses the SIGILL crash on older x64 CPUs, and PR #7387 adds native Wayland clipboard support. On the server side, new composable protocol and durable session backend PRs (#7386, #7396, #7409) are laying groundwork for remote/client-coordinated Pi usage. Community attention remains high on WSL login hangs (#6187) and TUI CPU saturation (#6665).

## Releases

No releases were published in the last 24 hours.

## Hot Issues

1. [Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187) — 19 comments. The browser device flow completes, but the WSL client never detects it and hangs at login. High community engagement since it blocks a common WSL development workflow.

2. [TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild](https://github.com/earendil-works/pi/issues/6665) — 11 comments. Long sessions push one core to 100% during streaming. Marked in-progress; reproduces with `pi -ne`, so it affects core TUI behavior.

3. [Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020) — 7 comments. Long-running “coordinator” sessions frequently stall after compaction. Community has upvoted this and is looking for more deterministic post-compaction continuation.

4. [auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879) — 7 comments. One agentic turn exceeded the context window and only failed at 373k tokens. Strong community reaction (+5); suggests checking compaction after every agent turn.

5. [anthropic-messages never sends x-client-request-id, unlike all OpenAI paths](https://github.com/earendil-works/pi/issues/7161) — 6 comments. Breaks session affinity for proxies/gateways that route Anthropic traffic across accounts. Marked in-progress and relevant for enterprise gateway users.

6. [kimi-coding OAuth 401 authentication_error stops the turn](https://github.com/earendil-works/pi/issues/7319) — 5 comments. Pi surfaces intermittent 401s, but has no refresh-on-401 and excludes 401 from both retry classifiers. Recently closed, but it highlights auth-retry gaps in built-in OAuth providers.

7. [Mouse select+copy from TUI introduced a scroll to the bottom](https://github.com/earendil-works/pi/issues/6662) — 5 comments. After scrolling up in a long agent message, the first Ctrl-Shift-C copy also jumps the viewport to the end. Reproduced in Ghostty.

8. [fix(openai-completions): handle array content and missing finish_reason](https://github.com/earendil-works/pi/issues/7062) — 5 comments. Databricks/Qwen/gpt-oss models can return `delta.content` as a typed array and omit `finish_reason`, breaking streaming responses. Important for OpenAI-compatible provider robustness.

9. [Gemini 3.x models fail during tool use due to missing thought_signature](https://github.com/earendil-works/pi/issues/6996) — 4 comments. Tool-result resubmission fails when Gemini omits `thought_signature` from history. This affects production agent workloads built on Gemini 3.x.

10. [Parallel tool batches lose already-completed tool results when one sibling stalls](https://github.com/earendil-works/pi/issues/7053) — 3 comments. Persisted `toolResult` messages are only emitted after the entire `Promise.all` batch settles, leading to orphaned tool calls and “No result provided.” Follow-up to #3503.

## Key PR Progress

1. [fix(coding-agent): target baseline x64 CPUs](https://github.com/earendil-works/pi/pull/7390) — Fixes #7149 by avoiding BMI2 instructions (`shlx`) that caused SIGILL on pre-Haswell CPUs.

2. [fix(coding-agent): read clipboard text on Wayland](https://github.com/earendil-works/pi/pull/7387) — Closes #7248. Uses `wl-paste` before the native X11 clipboard fallback, with regression coverage for Wayland text and empty clipboards.

3. [fix(coding-agent): make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394) — Emits delta-only `message_update` records in JSON/RPC modes while preserving cumulative snapshots internally. Also adds stdout backpressure and fixes #7290’s O(n²) behavior.

4. [Add native prompt API for extensions](https://github.com/earendil-works/pi/pull/7389) — Exposes `pi.prompt()` to extensions and routes extension input through native command, skill, and prompt-template handling, including image and streaming support.

5. [feat(ai): add Baseten provider](https://github.com/earendil-works/pi/pull/7404) — Adds Baseten as a built-in OpenAI-compatible API-key provider, mirroring the existing Together AI integration via `BASETEN_API_KEY`.

6. [feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396) — Introduces a durable JSONL-backed `PiServer` session backend with cross-process locking, crash recovery, and lifecycle-aware session writes.

7. [feat(server): add composable protocol server](https://github.com/earendil-works/pi/pull/7386) — Adds a transport-independent `PiServer` with authenticated framed-CBOR protocol handling, Unix listener building blocks, and reusable testing helpers.

8. [feat: add remote session client coordination](https://github.com/earendil-works/pi/pull/7409) — Adds `PiClient` connection ownership, idempotent async disposal, shared/exclusive session leases, and pure transcript projection for remote sessions.

9. [feat(agent): add per-session store queues](https://github.com/earendil-works/pi/pull/7398) — Serializes memory/JSONL operations per session while allowing unrelated sessions to proceed concurrently; bounds JSONL filesystem concurrency and preserves coherent list snapshots.

10. [feat(coding-agent): add experimental CLI option parser](https://github.com/earendil-works/pi/pull/7411) — Adds a pure parser for combined, server, and client CLI modes with role-specific discriminated unions, Unix socket path validation, and aggregated usage errors.

## Feature Request Trends

- **More built-in providers and model coverage**: Recent requests include Kimi K3 on Fireworks (#7199), Baseten (#7404), Amazon Bedrock Mantle (#6216), and updated Z.AI model references (#7401).
- **Richer extension API**: Users want native prompt access (`pi.prompt()` in #7389), extension-triggered commands after the agent settles (#7277), and better parity between documented custom-provider behavior and the actual Extension API (#7267).
- **Linear/streaming performance**: JSON/RPC output should emit deltas, not cumulative snapshots, addressing O(n²) stdout and backpressure issues (#7290, #7394).
- **Terminal/platform integration**: Wayland clipboard support (#7248), WSL login reliability (#6187), Kitty-image terminal detection for Orca (#7357), and mouse/copy behavior fixes (#6662) are recurring themes.
- **Compaction reliability**: Multiple issues ask for predictable auto-compaction triggers, prevention of double compactions, and safe handling of prompts sent during an in-flight compaction (#6879, #7020, #7253, #7150).

## Developer Pain Points

- **Auth and login hangs**: WSL users are stuck after GitHub Copilot device authorization (#6187), while OAuth 401s from built-in providers like kimi-coding are not retried or refreshed (#7319).
- **Performance cliffs**: The TUI can saturate a core while streaming (#6665), JSON mode emits O(n²) output (#7290), and keystroke latency grows with conversation/tool-call volume (#7385).
- **Compaction instability**: Long sessions can fail to continue after compaction (#7020), auto-compaction can trigger too late or run twice (#6879, #7253), and compaction fails on GHE.com enterprise accounts (#7413).
- **Provider compatibility gaps**: Missing `x-client-request-id` for Anthropic (#7161), non-standard OpenAI stream shapes (#7062), missing Gemini `thought_signature` (#6996), and HTTP/2 stream errors not being retried (#7392) all create integration friction.
- **Platform binary issues**: The official linux-x64 binary crashes on pre-Haswell CPUs (#7149), and Wayland clipboard pasting silently fails (#7248), increasing demand for safer defaults and broader platform support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-01

## Today's Highlights

- **v0.21.2 is out.** The release notes only contain the placeholder marker, but the most visible behavior in this window is the Autofix round-limit change: after five rounds, lower-severity suggestions are deferred, and Qwen Code posts visible notices when refusing to proceed. ([#7913](https://github.com/QwenLM/qwen-code/pull/7913), [#8067](https://github.com/QwenLM/qwen-code/pull/8067))
- **The `qwen serve` daemon remains the hottest area.** The multi-workspace RFC ([#6378](https://github.com/QwenLM/qwen-code/issues/6378)) and new memory/resource tracking issues ([#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182)) show serious momentum toward production-grade daemon governance.
- **Terminal mouse-input regressions are being actively fixed.** PRs are landing to filter SGR mouse escape sequences during early input capture ([#8268](https://github.com/QwenLM/qwen-code/pull/8268)) and to add a `ui.mouseTracking` escape hatch ([#8198](https://github.com/QwenLM/qwen-code/pull/8198)).

## Releases

- **v0.21.2** — Released. The feed only includes the `qwen-release-notes:v1` marker, so no detailed changelog was captured. The related behavioral highlight is the Autofix round-limit deferral and visible refusal notice behavior from [#7913](https://github.com/QwenLM/qwen-code/pull/7913) and [#8067](https://github.com/QwenLM/qwen-code/pull/8067).

## Hot Issues

1. **RFC: Support multiple workspaces in one `qwen serve` daemon** — 31 comments, closed. The largest community discussion in the last 24h. The current `1 daemon = 1 workspace x N sessions` model is a bottleneck for power users, and this RFC is the foundation for the daemon resource-tracking work. ([#6378](https://github.com/QwenLM/qwen-code/issues/6378))

2. **Minified React error #185 on Windows/Cherry Studio install** — 9 comments, open. A Windows-specific UI crash from `@qwen-code/qwen` inside Cherry Studio, with `welcome-pr` and `needs-triage` labels. Windows desktop integration remains fragile. ([#5199](https://github.com/QwenLM/qwen-code/issues/5199))

3. **tracking(serve): Bound multi-workspace daemon resource usage** — 9 comments, open. Count-only limits do not bound bytes held by request bodies, WebSocket assembly, or other state. The community is pushing for real memory accounting in the daemon. ([#8051](https://github.com/QwenLM/qwen-code/issues/8051))

4. **Keep deferred tool discovery from invalidating prompt cache prefixes** — 7 comments, open. Deferred tool discovery calls `setTools()` and invalidates cache prefixes, which hurts long-session performance and cost. This is a core caching-efficiency issue. ([#6721](https://github.com/QwenLM/qwen-code/issues/6721))

5. **Anthropic 4.6+ assistant-prefill 400 + `thinking.display` silently defaults to 'omitted'** — 6 comments, closed. Two verified converter bugs affecting Claude Opus/Sonnet 4.6+ and 5.x families. This is high-impact for Claude users on the Anthropic wire path. ([#8039](https://github.com/QwenLM/qwen-code/issues/8039))

6. **Fleet Shepherd Dashboard** — 4 comments, open. Auto-maintained CI health dashboard. It reflects the project’s automated workflow health: PRs are being monitored, checks are in flight, and dispatches are tracked. ([#7167](https://github.com/QwenLM/qwen-code/issues/7167))

7. **Standardize `serve/` module filenames to kebab-case and split `server.ts` god file** — 4 comments, closed. The daemon module is getting large, and the community wants maintainability improvements: kebab-case filenames plus breaking up the `server.ts` monolith. ([#5576](https://github.com/QwenLM/qwen-code/issues/5576))

8. **Main CI failed: E2E Tests — `sdk-mcp-server.test.ts` async tool handlers** — 3 comments, closed. Another auto-filed CI failure around async MCP tool handling. The `autofix/in-progress` label indicates the bot is already working a fix. ([#8256](https://github.com/QwenLM/qwen-code/issues/8256))

9. **Model outputs XML-style tool calls as plain text in long sessions** — 3 comments, closed. In 200+ turn sessions with `qwen3.8-max-preview`, tool calls sometimes leak as raw `<invoke>`/`<parameter>` XML in `content` instead of structured `tool_calls`. Critical for long-context agent reliability. ([#8003](https://github.com/QwenLM/qwen-code/issues/8003))

10. **Daemon authorises each ACP child 50% of host memory, never divided by child count** — 3 comments, open. A concrete memory-safety bug: every `qwen --acp` child gets the same host-derived V8 ceiling, which can lead to total memory oversubscription. ([#8182](https://github.com/QwenLM/qwen-code/issues/8182))

## Key PR Progress

1. **fix(cli): filter SGR mouse escape sequences in early input capture** — Adds `0x3c` (`'<'`) to the CSI third-byte check so SGR mouse events are classified as terminal responses instead of being injected into the input buffer. Direct fix for the mouse-escape-sequence issue. ([#8268](https://github.com/QwenLM/qwen-code/pull/8268))

2. **fix(cli): add `ui.mouseTracking` setting to restore right-click and URL clicks** — Two-layer fix for the VP-mode mouse regression: a new boolean setting to disable SGR mouse tracking entirely, plus restoration of right-click and URL-click behavior. ([#8198](https://github.com/QwenLM/qwen-code/pull/8198))

3. **fix(web-shell): compact advanced tables in narrow messages** — Makes the advanced Markdown table toolbar responsive at widths ≤500px by dropping labels and hiding cell-selection stats while keeping icons and key actions. ([#8264](https://github.com/QwenLM/qwen-code/pull/8264))

4. **feat(web-shell): support mutable default mid-turn messages** — Plain-text messages sent during an active turn now enter the running turn by default, with a “Queued...” state until the daemon confirms injection. ([#8229](https://github.com/QwenLM/qwen-code/pull/8229))

5. **fix(core): separate hook context from transcript display** — Wraps sanitized `UserPromptSubmit` hook context in a dedicated `<qwen:user-prompt-submit-context>` part, preserving clean display text while keeping model-facing context separate. ([#7948](https://github.com/QwenLM/qwen-code/pull/7948))

6. **fix(web-shell): isolate automatic recap by session** — Prevents a recap requested for one Web Shell session from being inserted after the user switches to another session by tracking originating session and generation. ([#8262](https://github.com/QwenLM/qwen-code/pull/8262))

7. **feat(skills): add disabled skill levels** — Adds a union-merged `skills.disabledLevels` setting supporting `project`, `user`, `extension`, and `bundled`, letting users hide bundled skills before filesystem access. ([#8057](https://github.com/QwenLM/qwen-code/pull/8057))

8. **feat(serve): resolve and report the daemon memory budget** — The daemon previously had no notion of its own memory budget. This PR adds memory-budget resolution/reporting, feeding directly into the resource-governance work from [#8051](https://github.com/QwenLM/qwen-code/issues/8051). ([#8245](https://github.com/QwenLM/qwen-code/pull/8245))

9. **feat(workflows): bubble workflow agent approvals** — Completes the foreground Dynamic Workflow permission path: Shell, edit, MCP, and information requests from Workflow agents are surfaced through the parent TUI, ACP host, or stream-json control channel. ([#8240](https://github.com/QwenLM/qwen-code/pull/8240))

10. **feat(review): Test Plan claim check, base-tree A/B harness, per-hunk probes** — Gives `/review` hands-on verification capabilities: testing plan claims against actual behavior, comparing against the base tree, and probing individual hunks. ([#8215](https://github.com/QwenLM/qwen-code/pull/8215))

## Feature Request Trends

- **Daemon platform maturity.** Multi-workspace support, memory budgets, and per-child isolation are the dominant architectural requests. ([#6378](https://github.com/QwenLM/qwen-code/issues/6378), [#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182))
- **TUI and Web Shell quality-of-life improvements.** Users are requesting/shipping features like custom `/summary` export paths, inline image display, mid-turn message editing, and better session isolation. ([#8116](https://github.com/QwenLM/qwen-code/pull/8116), [#8217](https://github.com/QwenLM/qwen-code/pull/8217), [#8229](https://github.com/QwenLM/qwen-code/pull/8229))
- **Skills lifecycle management.** There is growing interest in controlling which skill levels load, plus hot-reloading skills in `qwen serve` Web sessions. ([#8057](https://github.com/QwenLM/qwen-code/pull/8057), [#8221](https://github.com/QwenLM/qwen-code/issues/8221))
- **Review/automation tooling.** The `/review` workflow is being pushed toward real verification: executable test-plan checks, per-hunk probes, and cleaner sandbox reports. ([#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8147](https://github.com/QwenLM/qwen-code/pull/8147))
- **Windows/platform parity.** Windows-specific bugs and test-suite portability keep appearing, especially around file paths, symlink semantics, and desktop-shell embedding. ([#5199](https://github.com/QwenLM/qwen-code/issues/5199), [#8227](https://github.com/QwenLM/qwen-code/issues/8227), [#8050](https://github.com/QwenLM/qwen-code/pull/8050))

## Developer Pain Points

- **Flaky CI/E2E tests.** Multiple auto-filed failures target `sdk-mcp-server.test.ts` and `acp-cron.test.ts`, often around async tool handlers and cron timing. ([#8256](https://github.com/QwenLM/qwen-code/issues/8256), [#8244](https://github.com/QwenLM/qwen-code/issues/8244), [#8237](https://github.com/QwenLM/qwen-code/issues/8237), [#8076](https://github.com/QwenLM/qwen-code/issues/8076))
- **Anthropic converter correctness.** Several recently reported bugs involve tool-call ID sanitization, tool_result ordering, orphaned tool_use stripping, and dropped `thoughtSignature` values. ([#8159](https://github.com/QwenLM/qwen-code/issues/8159), [#8160](https://github.com/QwenLM/qwen-code/issues/8160), [#8161](https://github.com/QwenLM/qwen-code/issues/8161), [#8258](https://github.com/QwenLM/qwen-code/issues/8258))
- **Long-context tool-call leakage.** Models occasionally emit tool calls as plain text/XML instead of structured function calls, especially in long sessions or with certain rollouts. ([#8003](https://github.com/QwenLM/qwen-code/issues/8003), [#8207](https://github.com/QwenLM/qwen-code/issues/8207))
- **Terminal/UI regressions.** Raw SGR mouse sequences leaking into input, missing selection rendering for AI answers, and duplicate approval buttons show that TUI/Web Shell polish is still a recurring pain area. ([#8267](https://github.com/QwenLM/qwen-code/issues/8267), [#8214](https://github.com/QwenLM/qwen-code/issues/8214), [#8248](https://github.com/QwenLM/qwen-code/issues/8248))
- **Daemon memory safety.** Count-only limits and host-derived per-child memory ceilings are not enough; developers are asking for actual byte-level resource bounds and reporting. ([#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182))

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI (CodeWhale) Community Digest — 2026-08-01

## Today's Highlights

The v0.9.3 release train merged, adding DeepSeek V4 Flash responses and a canonical tool surface; the project is now shipped as **CodeWhale**, with the legacy `deepseek-tui` npm package deprecated. On the tracker, the hottest work is around File-edit reliability on complex source files, plus a batch of v0.9.3-era enhancements for ACP interoperability, headless OAuth, sandbox flexibility, and deterministic evaluation. Multiple TUI/installer fixes — AltGr key input, circled-digit rendering width, and Windows PATH preservation — are also moving through PR review.

## Releases

- **v0.9.3 — CodeWhale**  
  The v0.9.3 release train was merged via [PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993). It ships **DeepSeek V4 Flash Responses** and a **canonical tools** surface. The release text confirms CodeWhale is the public product from Shannon Labs; the legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users coming from v0.8.x legacy `deepseek` / `d...` should move to the `codewhale` command/package.

## Hot Issues

- [#4949 Discussion: The Chinese Translation of "Constitution" — "宪法", "协作准则", or Something Else?](https://github.com/Hmbown/CodeWhale/issues/4949)  
  A bilingual community debate over the right zh-CN term for "Constitution." The author reverted to "宪法" in PR #4908 for its authority, but others worry it carries sensitive political connotations. 5 comments so far; no consensus yet.

- [#5003 [bug] Write tool regresses severely on mid/long Chinese-comment, CRLF files](https://github.com/Hmbown/CodeWhale/issues/5003)  
  A 700-line C file with Chinese comments and CRLF endings caused 15+ failed `File` edit attempts, 3 full `git checkout` rollbacks, and an eventual workaround via an external Python script. The core complaint: edit failures lack actionable diagnostics. This is now targeted by PR #5008.

- [#5000 Engine: make interrupted assistant output a durable first-class session item](https://github.com/Hmbown/CodeWhale/issues/5000)  
  When a turn is interrupted before `MessageComplete`, the TUI shows emitted text locally, but the engine/session does not persist it — so the next model call loses already-generated content. High-value reliability gap for long-running agent sessions.

- [#5005 [enhancement] Support filesystem path whitelist/allowlist in sandbox for external logs and build artifacts](https://github.com/Hmbown/CodeWhale/issues/5005)  
  `xcodebuild` writes logs and artifacts to `~/Library/Developer/Xcode/DerivedData/`, outside the `workspace-write` sandbox. Users building/debugging Xcode projects need a configurable allowlist for read/write outside the workspace.

- [#5007 YouTuber doesn't use CodeWhale as TUI for DeepSeek](https://github.com/Hmbown/CodeWhale/issues/5007)  
  A community observation that a popular YouTuber chose Codex rather than CodeWhale when testing DeepSeek-v4-flash. The 4-comment thread highlights CodeWhale's identity/positioning problem in an increasingly crowded AI TUI space.

- [#4999 [enhancement, reliability] Benchmark/evaluation harness correctness — deterministic, fail-closed, provenance-exact](https://github.com/Hmbown/CodeWhale/issues/4999)  
  The evaluation harness is a release gate, but currently mixes ad hoc fixtures, unversioned trace formats, and incomplete cancellation handling. The request is for deterministic, fail-closed, provenance-exact results before v0.9.3 is trusted as a product gate.

- [#4998 [enhancement, security] Headless OAuth completion — generic PKCE with manual redirect fallback](https://github.com/Hmbown/CodeWhale/issues/4998)  
  SSH/headless/container installs cannot complete browser OAuth. The proposal is a provider-neutral PKCE/state transaction, loopback redirect first, then manual redirect-URL or bare-code paste fallback.

- [#4996 [enhancement, reliability] Protocol-neutral ACP client — bounded stdio JSON-RPC with negotiated capabilities](https://github.com/Hmbown/CodeWhale/issues/4996)  
  External agent clients/editors speak ACP (Agent Client Protocol); CodeWhale needs a bounded, protocol-neutral client so external peers can drive sessions without hard-coding any one client. This cites earlier community appetite in #2535.

- [#4995 [enhancement, tui] Semantic TUI graphics persistence — durable scene intent, ephemeral frame state](https://github.com/Hmbown/CodeWhale/issues/4995)  
  The ambient/ocean visuals — jellyfish positions, palette, user pins — are ephemeral per frame, making restore/resize/theme-change behavior ad hoc. This follows the #4807 collision fix and asks for durable scene semantics.

- [#4851 Two model-resolution chains: merge them behind one owner](https://github.com/Hmbown/CodeWhale/issues/4851)  
  "Which model is active" is resolved twice in two crates with different implementations: the `Config::default_model()` chain used on the wire, and a separate resolver. This can make `doctor`, config, and actual wire behavior disagree.

## Key PR Progress

- [Release v0.9.3: DeepSeek V4 Flash Responses and canonical tools (#4993)](https://github.com/Hmbown/CodeWhale/pull/4993) — **Merged/closed**  
  The v0.9.3 integration train: 72 single-concern commits, fast-forward-only, with a canonical tool surface and DeepSeek V4 Flash support.

- [fix(tui): actionable File edit diagnostics and stale-line-number tolerance (#5008)](https://github.com/Hmbown/CodeWhale/pull/5008) — Open  
  Directly addresses #5003. Aimed at turning opaque `File` edit failures into actionable diagnostics, with tolerance for stale line numbers after failed replacements.

- [fix(tui): measure circled digits and keycaps as 2 columns everywhere (#5001)](https://github.com/Hmbown/CodeWhale/pull/5001) — Open  
  Fixes intermittent missing characters/phantom spaces for ①, ❷, and keycap sequences like 1️⃣ in CJK terminals by treating them as 2-column width consistently.

- [fix(installer): preserve long Windows user PATH (#5006)](https://github.com/Hmbown/CodeWhale/pull/5006) — Open  
  NSIS `ReadRegStr` truncates long registry values; the installer then replaces an existing long user PATH with only CodeWhale's bin directory. This preserves the original PATH.

- [fix(tui): let AltGr-typed "/" reach the composer instead of opening help (#4977)](https://github.com/Hmbown/CodeWhale/pull/4977) — **Merged/closed**  
  On Windows, AltGr arrives as `Ctrl+Alt`. Brazilian ABNT2 `/` is `AltGr+Q`, which triggered the `Ctrl-/` help chord. Fixes #4723.

- [fix(docs): restore the v0.9.3 rustdoc gate (#5004)](https://github.com/Hmbown/CodeWhale/pull/5004) — **Merged/closed**  
  Renders a test-only helper as code instead of an intra-doc link, restoring the `RUSTDOCFLAGS=-Dwarnings cargo doc` CI gate.

- [chore(deps): bump ratatui from 0.30.0 to 0.30.2 (#5013)](https://github.com/Hmbown/CodeWhale/pull/5013) — Open  
  Routine dependency patch for the TUI framework.

- [chore(deps): bump actions/stale from 10.4.0 to 11.0.0 (#5010)](https://github.com/Hmbown/CodeWhale/pull/5010) — Open  
  Major update to the stale-issue/PR automation workflow.

- [chore(deps): bump docker/login-action from 4.4.0 to 4.5.2 (#5012)](https://github.com/Hmbown/CodeWhale/pull/5012) — Open  
  CI infra update for Docker registry authentication.

- [chore(deps): bump libc from 0.2.186 to 0.2.189 (#5016)](https://github.com/Hmbown/CodeWhale/pull/5016) — Open  
  Rust `libc` update, including new Emscripten thread-related additions.

## Feature Request Trends

- **ACP/external-agent interoperability**  
  The strongest architectural trend: a protocol-neutral ACP client ([#4996](https://github.com/Hmbown/CodeWhale/issues/4996)) and GitHub Copilot as a named external ACP worker backend ([#4997](https://github.com/Hmbown/CodeWhale/issues/4997)). Follows from earlier ACP+MCP community demand (#2535).

- **Headless/SSH/container credential flows**  
  Generic headless OAuth with PKCE and manual redirect fallback ([#4998](https://github.com/Hmbown/CodeWhale/issues/4998)) plus explicit provider-scoped credential handoff ([#4994](https://github.com/Hmbown/CodeWhale/issues/4994)) are recurring asks for non-browser installs.

- **Sandbox flexibility for real-world builds**  
  Users want configurable filesystem allowlists for external logs and build artifacts, especially Xcode DerivedData ([#5005](https://github.com/Hmbown/CodeWhale/issues/5005)).

- **Deterministic, reliable engine/session behavior**  
  Durable interrupted assistant output ([#5000](https://github.com/Hmbown/CodeWhale/issues/5000)), deterministic benchmark harnesses ([#4999](https://github.com/Hmbown/CodeWhale/issues/4999)), and a single source of truth for model facts ([#4599](https://github.com/Hmbown/CodeWhale/issues/4599)).

- **Context/token efficiency**  
  A coordinated cluster from maintainers: shorten tool descriptions ([#4708](https://github.com/Hmbown/CodeWhale/issues/4708)), reduce default tool surface and overlap ([#4706](https://github.com/Hmbown/CodeWhale/issues/4706)), and minimize tool-result/sub-agent payloads ([#4705](https://github.com/Hmbown/CodeWhale/issues/4705)).

## Developer Pain Points

- **File editing on complex source files is fragile**  
  Large replacements in Chinese-comment/CRLF files fail repeatedly with no useful diagnostics, forcing external scripts and destructive `git checkout` rollbacks ([#5003](https://github.com/Hmbown/CodeWhale/issues/5003)).

- **Sandbox blocks legitimate toolchain workflows**  
  Build artifacts and logs outside the workspace cannot be accessed; Xcode users are effectively blocked from normal build/debug cycles ([#5005](https://github.com/Hmbown/CodeWhale/issues/5005)).

- **Tool errors are opaque**  
  Users hit "Tool 'task' is not available" alongside `HTTP 400` without a clear recovery path ([#5002](https://github.com/Hmbown/CodeWhale/issues/5002)).

- **Interrupted sessions lose already-generated work**  
  Assistant text emitted before `MessageComplete` is not stored in the authoritative session, breaking context on the next turn ([#5000](https://github.com/Hmbown/CodeWhale/issues/5000)).

- **Model configuration is scattered and contradictory**  
  Duplicate model-resolution chains ([#4851](https://github.com/Hmbown/CodeWhale/issues/4851)) and scattered per-model facts ([#4599](https://github.com/Hmbown/CodeWhale/issues/4599)) make "which model is active" hard to reason about.

- **Windows and keyboard-layout edge cases persist**  
  NSIS installer can overwrite a long user PATH ([#5006](https://github.com/Hmbown/CodeWhale/pull/5006)); AltGr on non-US layouts accidentally triggers global shortcuts ([#4977](https://github.com/Hmbown/CodeWhale/pull/4977)).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*