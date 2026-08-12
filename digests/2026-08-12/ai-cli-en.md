# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-12 00:58 UTC | Tools covered: 10

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

# AI CLI Tools Cross-Tool Comparison Report — 2026-08-12

## 1. Ecosystem Overview

The AI CLI tooling ecosystem is in a rapid maturation phase: the two largest incumbents (Claude Code, OpenAI Codex) are shipping patch/alpha releases while wrestling with production-scale pain points like billing incidents, Windows sandbox defects, and TUI input races. Mid-tier tools (OpenCode, Pi, Qwen Code) are iterating aggressively on UX and protocol depth, with 10 PRs each in the last 24 hours, while Copilot CLI and Grok Build show notably slower or dormant maintenance cadence. Across all tools, community feedback is converging on the same fault lines: **cost governance and transparency, Windows reliability, MCP auth/lifecycle maturity, subagent cost/behavior control, and persistent memory**. Security is also front-of-mind — Gemini CLI has two critical CVEs (`shell-quote`, `simple-git`) awaiting merge, and Copilot CLI ships `adm-zip` with a high-severity CVE blocking Docker builds.

## 2. Activity Comparison

| Tool | Issues surfaced (24h) | PRs active (24h) | Release status |
|---|---|---|---|
| Claude Code | 10 | 7 | **Shipped** v2.1.228 (patch) |
| OpenAI Codex | 10 | 10 | **Shipped** rust-v0.148.0-alpha.7, alpha.8 |
| Gemini CLI | 10 | 10 | **Shipped** v0.55.1, v0.56.0-preview.1, v0.56.0-nightly, v0.55.0-preview.3 |
| GitHub Copilot CLI | 10 | 2 | No release |
| Kimi Code CLI | 5 | 8 | No release |
| OpenCode | 10 | 10 | No release |
| Pi | 10 | 10 | No release |
| Qwen Code | 10 | 10 | **Shipped** v0.21.10, v0.21.11-preview.0, v0.21.10-nightly, live-host-v0.1.1 |
| DeepSeek TUI (CodeWhale) | 3 | 7 | No release |
| Grok Build | 0 | 0 | No activity |

*Issues/PRs counts reflect items updated or surfaced in the 24-hour digest window, not repository totals.*

## 3. Shared Feature Directions

- **Cost governance and spend controls** — The strongest cross-tool signal. Claude Code has a cluster of billing incidents (disputed $604.71 recharge, #81703; $1,031.92 hung-task bill, #85912) plus runaway subagent token consumption (#67636). OpenCode users discovered undisclosed model substitution to Claude Haiku (#10272) and demand a plan usage API (#16017). Copilot CLI faces model-routing surprises where subagents override model choices. Expect spend caps, alerts, and conservative agent-spawning defaults to become table stakes.

- **Windows platform hardening** — Every major tool has an open Windows defect. Claude Code: console flashing on tool execution (#14828, 60 comments). Codex: sandbox ACLs, nested Git repos, 400 GiB disk blowout (#35470), 8.8 GB idle memory growth (#38059). Copilot CLI: plugin install/update fail with "Access is denied" (#4151, #4095). Gemini/Qwen/Kimi/Pi all have Windows-adjacent bugs (path resolution, URL-encoded drive letters, CMD output duplication, invalid JSON settings). Windows is the ecosystem's collective Achilles heel.

- **MCP lifecycle and auth maturity** — MCP is the de facto integration standard, but the plumbing is immature. Specific demands: multi-account Gmail (Claude Code #36024), OAuth/CIMD registration (Codex PR #38089), BigInt serialization (Copilot CLI #4211), RFC 8414 issuer validation for self-hosted OAuth (Copilot CLI #4439), OAuth token refresh using stored client IDs (Gemini CLI nightly), and dynamic tool-list changes mid-session (Codex).

- **TUI/input reliability under real interactive use** — Typed input silently dropped at turn end (Claude Code #85603), Esc-Esc backtrack regression (Codex #37421), permission prompts triggered by mouse refocus (Claude Code #71539), hard-coded 15-line permission panel (OpenCode #28191), collapsed pasted text (OpenCode #8501, 230 👍), wide-terminal layout regression (DeepSeek TUI #5322). Daily-driver polish is now a competitive differentiator.

- **Persistent memory and session durability** — Kimi Code's Memory System request (#1283) is its most-discussed issue (34 comments); Gemini has an Auto Memory hardening cluster (redaction-before-send privacy bug #26525, indefinite low-signal retries #26522); OpenCode and Pi both surface compaction UX complaints (silent background compaction #13033; compaction thinking-level config #7553). Cross-session coordination for parallel sessions is also emerging (Claude Code #76727; OpenCode Chrome-style tabs #12548).

- **Subagent control and honest status reporting** — Gemini's subagent reports `MAX_TURNS` as goal success (#22323, p1) and the generalist agent hangs (#21409); Claude Code's parallel agent spawning burns millions of tokens before crashing (#67636); Copilot CLI's rubber-duck reviewer can reuse the primary model family (#4380). Operators want cost ceilings, inherited recursion budgets, and truthful terminal-state reporting.

## 4. Differentiation Analysis

- **Claude Code** is the production-grade incumbent: its issues reflect heavy real-world usage (billing disputes, enterprise plan allowances, cross-session coordination, plugin/skill ecosystems). Pain points are those of scale, not adoption.
- **OpenAI Codex** is mid-rewrite on the Rust alpha track, investing in desktop-app surfaces, gRPC code-mode routing, outbound proxy/CA support, and Windows sandbox correctness. Its community is platform-demand-driven (Linux desktop at 950 👍, RISC-V support).
- **Gemini CLI** is the most evaluation-disciplined (76 eval tests across 6 models), security-conscious (two CVE PRs, deterministic redaction), and Google-infra-aware (Cloud Workstations OAuth redirect). Its pain is agent behavior reliability (hangs, false success).
- **GitHub Copilot CLI** is enterprise-integration-first (Codespaces auth, Enterprise policy requests) but is iterating slowly (2 PRs) and struggling with Windows plugin lifecycle and model-configuration data loss.
- **Qwen Code** differentiates via its Web Shell as an IDE-like surface (Git diff sources, image previews, branch switching) and deep daemon/session engineering (adaptive journal caps, cross-worktree Git mutation guards, ACP reasoning-effort control) — the broadest release surface in a single day.
- **OpenCode** stands out for TUI feature velocity (tabs, `/cd` autocomplete, experiment surfaces) but is paying the cost of a V2 migration with parity regressions (webfetch returning `null`, invisible mode switches, SQLite migration failures).
- **Pi** is the solo-developer / tinkerer's tool: focused on streaming protocol correctness (usage preservation), host-clipboard fidelity, copy-on-select configurability, and provider breadth (Qwen China Token Plan, Cloudflare AI Gateway). The smallest ecosystem with the most careful engineering per PR.
- **Kimi Code CLI** is early-stage; its roadmap signal is overwhelmingly "memory system," with ACP-protocol correctness fixes (assert → proper exceptions) indicating a young codebase.
- **DeepSeek TUI / CodeWhale** is the only Rust TUI native in the set; it is investing in crate decomposition (maintainability) and exposing full ACP tool execution to external editors — a backend play rather than a standalone-IDE play.

## 5. Community Momentum & Maturity

| Tool | Momentum signals |
|---|---|
| Claude Code | Highest absolute engagement (60-comment Windows bug, 191 👍 queue-mode request); billing complaints prove production dependency. 7 PRs is low for its size — patch-train cadence. |
| OpenAI Codex | Fastest release cadence (2 alphas/24h); largest single-issue signal (950 👍 Linux desktop); 10 PRs across MCP, Windows sandbox, and streaming. |
| Gemini CLI | Active maintainer triage with labeled p1 bugs; multi-track release lines (preview/nightly/stable); open CVE PRs show security responsiveness. |
| OpenCode | Strong demand signal per issue (230 👍 pasted-text expand; 137 👍 usage API); 10 PRs/24h; V2 churn indicates rapid but somewhat unstable progress. |
| Qwen Code | Most release lines in one day (4); broad surface (daemon, web shell, CLI, ACP); CI failure flagged per-commit shows process transparency. |
| Pi | Healthy niche community; 10 PRs/24h incl. first-time contributors; long-closed WSL login hang (25 comments) shows persistence. |
| Copilot CLI | High issue volume but only 2 PRs/24h — maintenance throughput lagging demand; data-loss bug (#4431) closed but concerning. |
| Kimi Code | Low volume, focused: 5 issues, memory-dominant demand, 8 PRs — small team, clear priorities. |
| DeepSeek TUI | Engineering-dense but small: 3 issues / 7 PRs; EPIC-driven architecture work. |
| Grok Build | Dormant: zero activity in 24h. |

## 6. Trend Signals

1. **Spend governance is the #1 trust issue.** Disputed recharges, hidden model substitution, and unbounded subagent token burn are pushing users to demand hard caps, alerts, and model-routing transparency. Tools that ship default-conservative agent spawning and real-time cost telemetry will win enterprise trust.
2. **Windows is the ecosystem's weak underbelly.** Sandbox ACLs, console flashing, plugin file locks, and path encoding bugs recur across every tool. A tool that delivers a first-class Windows experience has a clear differentiation window.
3. **MCP has won, but its auth and lifecycle are lagging.** OAuth registration (CIMD, RFC 8414), multi-account support, BigInt-safe serialization, and live tool-list updates are the integration friction points of 2026. Expect a wave of MCP-server-side standardization.
4. **Agent economics are shifting from capability to control.** The conversation is no longer "can the agent code" but "can I bound its cost, understand its subagent tree, and trust its terminal-state reports." Honest status reporting (MAX_TURNS ≠ success) and inherited recursion budgets are becoming correctness requirements.
5. **Persistent memory is the next differentiator.** Kimi's community demand (34 comments on a memory system) and Gemini's Auto Memory privacy bugs show both appetite and risk. Tools that deliver redaction-safe, user-controllable memory will pull ahead.
6. **Cross-surface presence is consolidating.** Codex, Claude Desktop, OpenCode Desktop, and Qwen's Web Shell all point to CLI → desktop/IDE/web convergence. Users expect one session to survive across sync surfaces, and remote-control/resume regressions (Codex #37403) are already surfacing.
7. **Supply-chain security is becoming a visible purchase criterion.** CVE-carrying dependencies (`adm-zip`, `shell-quote`, `simple-git`) are now blockers for real users ("security scanners blocking Docker builds"). Tools with clean audits and fast CVE response will be favored in regulated environments.
8. **TUI ergonomics decide daily-driver loyalty.** Silent input drops, permission-prompt misfires, and copy fidelity are small bugs with outsized daily friction. The tools investing here (OpenCode, Pi, Qwen) are the ones gaining grassroots mindshare.

**Bottom line for decision-makers:** Claude Code remains the most production-proven but carries real cost-governance risk; Codex is the fastest-moving platform bet with a Linux gap; Gemini is the most engineering-disciplined but behaviorally unpredictable; OpenCode and Qwen are the best velocity-to-value ratios for developers wanting TUI/Web-Shell modernity; Pi is the quality pick for protocol-sensitive solo workflows; Copilot CLI and Grok Build are currently lagging the field.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Source: github.com/anthropics/skills | Data as of 2026-08-12*

---

## 1. Top Skills Ranking

The five most-discussed PRs are developer-tooling fixes rather than new domain Skills — a notable signal that the community is currently more concerned with making the Skill system itself work than with adding content. Notably, **all top-discussed PRs remain open (none merged)**, suggesting a review bottleneck in the repo.

1. **[#1298 — fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** · Open · *MartinCajiao*
   The most-discussed PR. Fixes the broken `run_eval.py` signal that causes `run_loop.py` and `improve_description.py` to score **recall=0% for every skill description** regardless of content, citing 10+ independent reproductions (see Issue #556). Addresses Windows stream reading, trigger detection, and parallel workers. Discussion centers on the eval loop "optimizing against noise" and the fix's approach of installing the eval artifact as a real skill.
   
2. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)** · Open · *PGTBoos*
   New Skill for typographic quality control in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Discussion highlights that these defects affect "every document Claude generates" and that users rarely ask for good typography explicitly.
   
3. **[#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)** · Open · *Lubrsy706*
   Small-but-critical fix: 8 case-sensitivity mismatches (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break the PDF Skill on case-sensitive filesystems. Representative of a broader community concern about cross-platform Skill reliability.
   
4. **[#486 — Add ODT skill (OpenDocument creation/template filling/ODT→HTML)](https://github.com/anthropics/skills/pull/486)** · Open · *GitHubNewbie0*
   New Skill covering `.odt`/`.ods` creation, filling, reading, and conversion — targeting LibreOffice and ISO-standard open formats. Discussion reflects steady wait-time interest in non-Microsoft document format support.
   
5. **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)** · Open · *eovidiu*
   Long-running meta-Skill proposal (open since Nov 2025) adding two analyzers: quality evaluation across five dimensions (structure/docs 20%, examples, resources…) and a security analyzer. Aimed at the "example-skills" marketplace collection.
   
6. **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)** · Open · *justinwetch*
   Revision of the frontend-design Skill to ensure every instruction is executable within a single conversation and specific enough to steer behavior without vagueness. Discussion reflects broader community criticism that several Skills "read like developer documentation" rather than operational instructions.
   
7. **[#541 — fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** · Open · *Lubrsy706*
   Fixes document corruption caused by hardcoded OOXML `w:id` values (1, 2, 3) colliding with existing bookmarks/comments in the shared ID space. The same author's related PRs (#538, #539) mark a pattern of community-driven hardening of the document Skills.
   
8. **[#539 — fix(skill-creator): warn on unquoted YAML description fields](https://github.com/anthropics/skills/pull/539)** · Open · *Lubrsy706*
   Adds pre-parse validation in `quick_validate.py` to catch unquoted `description:` fields containing `:` before `yaml.safe_load()` silently truncates them.

---

## 2. Community Demand Trends

Distilled from the Issue tracker (50 issues, top 15 shown):

- **Reliability of the Skill toolchain itself (highest volume).** [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — `run_eval.py` never triggers skills/commands (0% trigger rate); [Issue #1169](https://github.com/anthropics/skills/issues/1169) — same failure in the description-optimization loop; [Issue #62](https://github.com/anthropics/skills/issues/62) (10 comments) — installed Skills disappearing; [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — `document-skills` and `example-skills` plugins install identical content, causing duplicate Skills in the context window. **The dominant complaint cluster is that the skill system is unreliable to develop for and to install.**

- **Security & trust boundaries.** [Issue #492](https://github.com/anthropics/skills/issues/492) is the **most-commented issue in the repo (43 comments)** — community Skills distributed under the `anthropic/` namespace impersonate official Skills and enable trust-boundary abuse where users grant elevated permissions unknowingly. [Issue #1175](https://github.com/anthropics/skills/issues/1175) adds security/context-window concerns for SharePoint Online document handling.

- **Enterprise sharing & management.** [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍 — the most-upvoted issue) — org-wide Skill sharing in Claude.ai, replacing manual `.skill` file transfers via Slack/Teams. [Issue #29](https://github.com/anthropics/skills/issues/29) — demand for AWS Bedrock support.

- **Context-window efficiency.** [Issue #1487](https://github.com/anthropics/skills/issues/1487) — the `claude-api` Skill eagerly injects ~156k tokens, exhausting the context window in one tool call; [Issue #202](https://github.com/anthropics/skills/issues/202) (closed) — skill-creator's verbose, educational tone "significantly undermines token efficiency." The community wants lean, operational Skills over documentation-style prose.

- **New meta-Skill proposals gaining traction:** [Issue #1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory` (symbolic notation for compact agent state); [Issue #412](https://github.com/anthropics/skills/issues/412) — `agent-governance` (safety patterns: policy enforcement, threat detection, audit trails); [Issue #1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline (calibration → adversarial review → delivery verification).

---

## 3. High-Potential Pending Skills

Active, unmerged PRs most likely to land soon (ranked by recency of activity, scope clarity, and discussion momentum):

- **[#514 — document-typography](https://github.com/anthropics/skills/pull/514)** — Simple, low-risk scope; solves a universal AI-document pain point. One of the most-discussed PRs in the repo.
- **[#486 — ODT skill](https://github.com/anthropics/skills/pull/486)** — Fills an obvious format gap (OpenDocument/LibreOffice) alongside the existing DOCX/PDF skills; updated as recently as April.
- **[#1302 — color-expert](https://github.com/anthropics/skills/pull/1302)** · *meodai* — Self-contained color expertise (ISCC-NBS, Munsell, RAL, OKLCH/OKLAB decision tables); updated July 21 — recent maintainer activity.
- **[#525 — pyxel (retro game development)](https://github.com/anthropics/skills/pull/525)** · *kitao* — Submitted by the Pyxel engine author himself (strong subject-matter credibility); workflow covers write → run_and_capture → inspect → iterate; still receiving updates (July 15).
- **[#1367 — self-audit skill](https://github.com/anthropics/skills/pull/1367)** · *YuhaoLin2005* — Mechanical file verification + four-dimension reasoning quality gate (v1.3.0); pairs with the author's Issue #1385 proposal and has iterated through versions.
- **[#1479 — plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** · *tonydzi* — Addresses Issue #1417 (planning artifacts accumulate with no lifecycle); the most recent substantive Skill PR (July 25) with clear community attribution in the description.
- **[#723 — testing-patterns](https://github.com/anthropics/skills/pull/723)** — Comprehensive testing-stack Skill (Testing Trophy model, AAA pattern, React Testing Library); updated April 21; competes with the maintainers' own roadmap but fills a frequently-requested gap.
- **[#83 — quality & security analyzers](https://github.com/anthropics/skills/pull/83)** — Longest-pending (open since Nov 2025) but uniquely positioned as meta-Skills for the marketplace; its security-analyzer component directly addresses the #492 trust-boundary concern.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for trust and reliability in the Skill ecosystem itself — fixing the broken evaluation toolchain (0% recall, Windows incompatibilities) and adding meta-Skills for quality, security, and self-audit — which collectively outrank requests for any single new domain Skill.**

---

# Claude Code Community Digest — 2026-08-12

## Today's Highlights

Claude Code shipped patch release **v2.1.228**, fixing a rare TUI redraw hang, Windows Git discovery when launching from a parent folder, and a `/tui` regression. The community’s most active threads this cycle are the long-running Windows console-flashing bug ([#14828](https://github.com/anthropics/claude-code/issues/14828), 60 comments) and the very popular message-queue mode request ([#50246](https://github.com/anthropics/claude-code/issues/50246), 191 👍). A growing cluster of high-dollar billing and runaway-cost reports is also becoming a major theme.

## Releases

### v2.1.228 — [release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.228)

- Fixed interactive sessions that could stop redrawing entirely while the process kept running, after a rare internal layout error.
- Fixed `git` / Git Bash not being found on Windows when Claude Code is launched from a parent folder of the Git installation.
- Fixed `/tui` revert behavior.

## Hot Issues

1. **[#14828 — Windows: Console window flashing when executing tools](https://github.com/anthropics/claude-code/issues/14828)**  
   The most active issue this cycle, with 60 comments and 36 👍. Every tool execution causes a console window flash on Windows, disrupting terminal-focused workflows. This is a long-standing platform bug with no confirmed fix yet.

2. **[#50246 — Feature Request: Message queue mode](https://github.com/anthropics/claude-code/issues/50246)**  
   One of the highest-requested workflow improvements in the tracker at 191 👍. Users want to queue follow-up messages instead of interrupting an active Claude task and risking derailing the current work.

3. **[#54394 — ugrep wrapper amplifies regex backtracking into V8-heap OOM on WSL2](https://github.com/anthropics/claude-code/issues/54394)**  
   A deep technical regression from the embedded `ugrep`/`bfs` change in v2.1.117. A grep-process OOM can escalate into an 8 GB V8 heap OOM and freeze the WSL2 host. 27 comments and strong engagement from affected users.

4. **[#36024 — Support multiple Gmail accounts in MCP integration](https://github.com/anthropics/claude-code/issues/36024)**  
   77 👍 and 25 comments. The Gmail MCP integration only supports a single connected account, which is a blocker for users with separate personal and work Google Workspace accounts.

5. **[#85603 — Typed input queued mid-turn is silently dropped at turn end](https://github.com/anthropics/claude-code/issues/85603)**  
   A newly reported TUI bug affecting 2.1.220 and 2.1.226 in tmux. Text typed while a turn is running is not fed at `end_turn`, causing input loss in long-running interactive sessions. 20 comments.

6. **[#76727 — Cross-session coordination for independently-launched Claude Code sessions](https://github.com/anthropics/claude-code/issues/76727)**  
   Heavy users running many independent sessions against one shared working tree have no first-party coordination story. The current `PreToolUse` deny-hook approach is described as a DIY kit with silent holes.

7. **[#81703 — July 17 mass billing incident: usage credits charged despite plan allowance](https://github.com/anthropics/claude-code/issues/81703)**  
   A $604.71 automatic recharge is disputed after full-day usage was routed to paid credits instead of the included plan allowance. The reporter says Anthropic acknowledged the incident but charges remain unreconciled. 12 comments, with billing transparency as the main concern.

8. **[#71539 — Mouse click to refocus terminal triggers permission prompt unintentionally](https://github.com/anthropics/claude-code/issues/71539)**  
   Linux TUI users are hitting permission prompts just by clicking to refocus the terminal. 22 👍. This points to a UX gap in permission-prompt debouncing.

9. **[#78775 — Desktop app: session time-range filter only appears when Group by is set to State](https://github.com/anthropics/claude-code/issues/78775)**  
   28 👍 regression. The session history time-range filter is hidden unless the list is grouped by state, making the desktop app harder to navigate.

10. **[#67636 — Parallel agent spawning causes excessive token consumption before crashing](https://github.com/anthropics/claude-code/issues/67636)**  
    Claude spawned 10–15 agents for work that could have been done by 1–2, then crashed after burning millions of tokens. This adds to growing demand for tighter subagent cost control.

## Key PR Progress

Only 7 PRs were updated in the last 24 hours; all are included here.

- **[#85925 — docs: point remaining stale doc links at code.claude.com](https://github.com/anthropics/claude-code/pull/85925)**  
  Follow-up docs cleanup replacing old-domain links with canonical `code.claude.com` targets across plugins, skills, and issue-template contact links.

- **[#85834 — fix: HackerOne Bug Bounty Program access issue](https://github.com/anthropics/claude-code/pull/85834)**  
  Updates `devcontainer.json` to correctly install the `hookify` plugin, intended to restore access to the HackerOne Bug Bounty Program setup.

- **[#70173 — fix(commit-commands): detect [gone] branches with `git branch -vv` in clean_gone](https://github.com/anthropics/claude-code/pull/70173)**  
  Fixes `/clean_gone` never deleting anything because `git branch -v` plus `grep '[gone]'` failed to detect gone branches. Now uses `git branch -vv`. Status: CLOSED.

- **[#85822 — docs: fix stale doc links and README drift in plugins and examples](https://github.com/anthropics/claude-code/pull/85822)**  
  Docs-only cleanup replacing `docs.anthropic.com` and redirect-only links with current `code.claude.com` documentation URLs.

- **[#85806 — fix(security-guidance): skip XSS warnings in docs](https://github.com/anthropics/claude-code/pull/85806)**  
  Reuses the existing documentation path filter so XSS-related rules do not flag prose/docs mentions while preserving warnings for executable source files. Includes regression coverage.

- **[#85243 — fix(skills): use spec-conformant names in the plugin-dev and hookify skills](https://github.com/anthropics/claude-code/pull/85243)**  
  Eight bundled skills declare title-cased `name:` fields containing spaces. This PR makes those skill names spec-conformant.

- **[#85716 — fix(hookify): load rules from ancestor .claude directories to prevent silent bypass](https://github.com/anthropics/claude-code/pull/85716)**  
  Fixes [#85613](https://github.com/anthropics/claude-code/issues/85613). The `hookify` plugin now loads rules from ancestor `.claude` directories, closing a silent security/filtering bypass.

## Feature Request Trends

- **Message queue / non-interrupting mode** — [#50246](https://github.com/anthropics/claude-code/issues/50246) is the clearest signal: users want to enqueue follow-up work without interrupting the active task.
- **MCP multi-account support** — [#36024](https://github.com/anthropics/claude-code/issues/36024) shows demand for connecting multiple Gmail/Google Workspace accounts simultaneously rather than one at a time.
- **Cross-session coordination** — [#76727](https://github.com/anthropics/claude-code/issues/76727) requests first-party primitives for coordinating multiple independent Claude Code sessions against one repository.
- **Cost guardrails and spend controls** — Although filed as bugs, the billing incidents ([#81703](https://github.com/anthropics/claude-code/issues/81703), [#83062](https://github.com/anthropics/claude-code/issues/83062), [#85912](https://github.com/anthropics/claude-code/issues/85912)) and subagent token blowouts ([#67636](https://github.com/anthropics/claude-code/issues/67636)) are pushing users to demand spend caps, alerts, and more conservative agent-spawning defaults.

## Developer Pain Points

- **Windows tooling gaps** — Console window flashing on tool execution ([#14828](https://github.com/anthropics/claude-code/issues/14828)) and Git not being found in some Windows launch configurations remain recurring frictions. The v2.1.228 Git fix is welcome but the broader Windows experience is still a common complaint.
- **TUI/input reliability** — Typed input dropped at turn end ([#85603](https://github.com/anthropics/claude-code/issues/85603)), redraw hangs, and accidental permission prompts from mouse refocus ([#71539](https://github.com/anthropics/claude-code/issues/71539)) all point to TUI polish issues under real-world interactive use.
- **Cost/billing surprises** — Reports of large automatic recharges ([#81703](https://github.com/anthropics/claude-code/issues/81703), [#83062](https://github.com/anthropics/claude-code/issues/83062)) and a hung scheduled task consuming $1,031.92 with no alert ([#85912](https://github.com/anthropics/claude-code/issues/85912)) are making spend visibility a top concern.
- **Model/agent instruction adherence** — A cluster of reports ([#71576](https://github.com/anthropics/claude-code/issues/71576), [#72061](https://github.com/anthropics/claude-code/issues/72061), [#76044](https://github.com/anthropics/claude-code/issues/76044), [#85531](https://github.com/anthropics/claude-code/issues/85531)) describes ignored user instructions, unapproved file edits, repeated rejected suggestions, and claims of reviewing content without actually reading it.
- **Memory/performance regressions** — WSL2 host freezes from ugrep/V8 OOM ([#54394](https://github.com/anthropics/claude-code/issues/54394)) and macOS kernel panics from node fork storms ([#80362](https://github.com/anthropics/claude-code/issues/80362)) are the most severe performance issues under discussion.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-12

## Today’s Highlights

The Codex repository is moving quickly on the Rust alpha track, with two new `0.148.0-alpha` releases in the last 24 hours. Community attention remains concentrated on a long-running Linux desktop request, Windows sandbox/reliability regressions, and MCP/custom-provider integration issues. PRs merged today focus on MCP OAuth/CIMD support, Windows sandbox ACL fixes, gRPC code-mode session routing, and several Azure/telemetry correctness fixes.

## Releases

Two incremental Rust-track releases landed in the last 24 hours:

- [rust-v0.148.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8)
- [rust-v0.148.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7)

No detailed changelogs were included in the data; both appear to be iterative alpha bumps on the road to `0.148.0`.

## Hot Issues

- [Issue #11023: Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) — Closed, but still the highest-signal issue in the dataset: 207 comments and 950 👍. Users on macOS are hitting power/performance issues and want a Linux desktop app.

- [Issue #20880: App silently creates empty `~/Documents/Codex` folder on every launch](https://github.com/openai/codex/issues/20880) — 22 comments / 42 👍. Users expect the app not to mutate the filesystem without a project or session.

- [Issue #37403: [macOS regression] Desktop cannot resume Remote Control / CLI thread: `already has an active writer`](https://github.com/openai/codex/issues/37403) — A regression after the August 7 update breaks off-hours remote-control workflows. 9 comments / 9 👍.

- [Issue #31376: `codex exec` can hang indefinitely before the SSE stream starts](https://github.com/openai/codex/issues/31376) — No timeout or retry on a dead pooled connection. Especially painful for non-interactive automation.

- [Issue #35470: Windows: Codex copied an image file 150,000 times, consuming 400 GiB of disk](https://github.com/openai/codex/issues/35470) — Severe sandbox/context-handling bug that can exhaust disk space. 4 comments.

- [Issue #19143: Support pasting images directly into Codex CLI](https://github.com/openai/codex/issues/19143) — 11 comments / 7 👍. Users want clipboard image paste for frontend debugging and DevTools workflows.

- [Issue #37421: CLI 0.147.0: Esc-Esc backtrack cannot find selected prompt in persisted thread](https://github.com/openai/codex/issues/37421) — Closed but earned 25 👍. A notable TUI regression in the prompt-backtrack path.

- [Issue #29235: Codex asks for permission despite full access and approval prompts disabled](https://github.com/openai/codex/issues/29235) — 16 👍. Permission handling does not consistently respect thread-level full-access configuration.

- [Issue #24648: app-server thread/list treats omitted `modelProviders` as current-provider filter](https://github.com/openai/codex/issues/24648) — Third-party app-server integrations get incomplete thread lists unless they explicitly pass all providers. 7 comments.

- [Issue #38059: Windows Desktop memory grows to 8.8 GB while idle; UI freezes after 1–2 messages](https://github.com/openai/codex/issues/38059) — Newer MSIX builds show severe memory/performance regressions on Windows 11.

## Key PR Progress

- [PR #38089: Add CIMD support to MCP OAuth registration](https://github.com/openai/codex/pull/38089) — Prefers Client ID Metadata Documents when the authorization server supports public clients, with fallback to dynamic client registration. Improves MCP server auth compatibility.

- [PR #38087: Route gRPC code-mode sessions through the shared HTTP client](https://github.com/openai/codex/pull/38087) — Enables outbound proxy and custom CA support for gRPC code-mode connections while rejecting unsupported origins.

- [PR #38080: Allow nested Git repositories in the Windows sandbox](https://github.com/openai/codex/pull/38080) — Adds worktree-root and wildcard Git trust entries so nested repos are usable when commands run as the sandbox user.

- [PR #38064: Grant Windows sandbox access to the Codex app root](https://github.com/openai/codex/pull/38064) — Applies sandbox read/execute ACLs to the app root with inheritance, while keeping the managed runtime cache separate.

- [PR #38092: Simplify queued user message admission](https://github.com/openai/codex/pull/38092) — Resolves user-message admission as soon as Core accepts a turn/steer, removes persistence-related admission errors, and cleans up queued messages earlier.

- [PR #38084: Allow empty input to start a turn](https://github.com/openai/codex/pull/38084) — Lets a turn start with generated environment context only, without emitting a user-message item; empty persisted admission remains rejected.

- [PR #38060: Disable storage for Azure Responses requests](https://github.com/openai/codex/pull/38060) — Forces `store: false` for all Responses requests, including Azure, and simplifies request construction.

- [PR #38058: Preserve harness metadata across conversation history](https://github.com/openai/codex/pull/38058) — Stores compacted-history metadata in an aligned sidecar while keeping the persisted response payload backward compatible.

- [PR #38078: Reduce cloning in world-state patch handling](https://github.com/openai/codex/pull/38078) — Deserializes typed section snapshots from borrowed JSON and applies merge patches in place, reducing allocations in the path.

- [PR #38075: Respect rendered width when adding TUI history](https://github.com/openai/codex/pull/38075) — Fixes TUI history visibility and diff-summary width handling when ambient-pet reservations reduce available width.

## Feature Request Trends

- **Linux and non-x64 platform support** continues to be a major theme: [Linux desktop app (#11023)](https://github.com/openai/codex/issues/11023) and [RISC-V CLI support (#6150)](https://github.com/openai/codex/issues/6150) both remain high-signal requests.

- **Richer TUI/input capabilities** are desired, especially [pasting images directly into the CLI (#19143)](https://github.com/openai/codex/issues/19143).

- **Reliable cross-surface sync and remote control** is a recurring request: users want remote resume, archive refresh, and thread-list synchronization to behave consistently across CLI, desktop, and mobile.

- **Custom provider and app-server parity** is increasingly important: third-party integrations need equivalent behavior for `modelProviders`, API-key-only sessions, multi-agent, and MCP tool calls. Relevant: [#24648](https://github.com/openai/codex/issues/24648), [#37379](https://github.com/openai/codex/issues/37379), [#37858](https://github.com/openai/codex/issues/37858), [#31354](https://github.com/openai/codex/issues/31354).

- **MCP lifecycle maturity** — dynamic tool-list changes, Windows MCP server exposure, and OAuth registration are becoming key integration pain points. Relevant: [#37417](https://github.com/openai/codex/issues/37417), [#37471](https://github.com/openai/codex/issues/37471), [#37567](https://github.com/openai/codex/issues/37567).

## Developer Pain Points

- **Windows sandbox and ACL friction** remains a top frustration: nested Git repos, app-root access, `apply_patch` deny-read ACLs, and severe disk/memory regressions. Relevant: [#32525](https://github.com/openai/codex/issues/32525), [#34549](https://github.com/openai/codex/issues/34549), [#35470](https://github.com/openai/codex/issues/35470), [#38059](https://github.com/openai/codex/issues/38059).

- **Network/streaming reliability** is fragile in non-interactive paths: `codex exec` hangs on stale SSE connections, scheduled desktop runs hang on `list_threads`, and remote resume can break after updates. Relevant: [#31376](https://github.com/openai/codex/issues/31376), [#35030](https://github.com/openai/codex/issues/35030), [#37403](https://github.com/openai/codex/issues/37403).

- **Permission prompts ignore configured trust**: users with full filesystem access and disabled approvals still get prompted, and the “Allow once” button can be unresponsive. Relevant: [#29235](https://github.com/openai/codex/issues/29235), [#36115](https://github.com/openai/codex/issues/36115).

- **MCP integration breakage between releases** is a recurring complaint, from regressions in `0.147.0` to tool-list changes never being picked up mid-session. Relevant: [#37567](https://github.com/openai/codex/issues/37567), [#37417](https://github.com/openai/codex/issues/37417), [#31354](https://github.com/openai/codex/issues/31354).

- **Large payload and silent side-effect issues** keep appearing: unexpected `~/Documents/Codex` creation, huge `notify` payloads breaking on Windows, and multi-hundred-MB JSONL files causing odd tool behavior. Relevant: [#20880](https://github.com/openai/codex/issues/20880), [#18309](https://github.com/openai/codex/issues/18309), [#38071](https://github.com/openai/codex/issues/38071).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-12

## Today's Highlights
Four release lines advanced, most notably `v0.55.1` (release CI hardening + tool registry work) and a nightly with an MCP OAuth token refresh fix from a first-time contributor. Security is front-of-mind: two critical dependency CVEs (`shell-quote`, `simple-git`) are being patched in open PRs. Maintainer triage remains active on top-priority bugs — subagent false-success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and the generalist agent hang ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).

## Releases
- **v0.56.0-preview.1** — Changelog prep for v0.55.0-preview.1 and version bump to `0.56.0-nightly.20260806.g761f604c1`; changelog for v0.54 ([changelog PR #28776](https://github.com/google-gemini/gemini-cli/pull/28776)).
- **v0.56.0-nightly.20260811.geef19f25c** — `fix(core)`: refresh MCP OAuth tokens using the stored client ID, by first-time contributor [@ParthivNaresh](https://github.com/google-gemini/gemini-cli/pull/28481).
- **v0.55.1** — Release verification fixes (`npm ci` ignore scripts, workspace binary shadowing in CI) plus a tool registry feature ([#28116](https://github.com/google-gemini/gemini-cli/pull/28116), [#28132](https://github.com/google-gemini/gemini-cli/pull/28132)).
- **v0.55.0-preview.3** — Cherry-pick of commit `188e255` (quota/model mapping fix) into the preview.2 branch ([#28771](https://github.com/google-gemini/gemini-cli/pull/28771)).

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — p1 bug; 12 comments. A `codebase_investigator` subagent reports `status: "success"` even after hitting max turns, hiding real interruptions. High visibility because false termination signals erode trust in agent output.
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — p1 bug; 8 comments, 8 👍. Simple tasks like folder creation hang indefinitely; users report that instructing the model to avoid subagents works around it.
3. **[#19873 — Zero-dependency OS sandboxing & post-execution intent routing](https://github.com/google-gemini/gemini-cli/issues/19873)** — Enhancement; 8 comments. Proposes letting Gemini 3 models exercise native bash skills safely instead of forcing tool-call abstractions.
4. **[#24353 — Robust component-level evaluations EPIC](https://github.com/google-gemini/gemini-cli/issues/24353)** — 7 comments. Follow-up on behavioral evals: 76 eval tests now run across 6 Gemini models; community is watching for regression coverage.
5. **[#22745 — Assess impact of AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — EPIC; 7 comments. AST-aware tools could cut token noise and reduce misaligned reads; part of a broader codebase-understanding investigation.
6. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — Bug; 6 comments. Custom skills (gradle, git) exist but the model won't invoke them autonomously unless explicitly instructed; ongoing friction for power users.
7. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — Bug; 5 comments. Unprocessed low-signal sessions get surfaced repeatedly, wasting extraction-agent cycles.
8. **[#26525 — Deterministic redaction & reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — Security bug; 4 comments. Transcript content is sent to the model before prompt-based redaction occurs — a privacy concern for local memory features.
9. **[#25166 — Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — p1 bug; 4 comments, 3 👍. Simple CLI commands hang in "awaiting user input" state despite completing — a core reliability complaint.
10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** — Bug; 4 comments. `~/.gemini/agents/` ignores symlinks, breaking common dotfiles-management setups.

## Key PR Progress
1. **[#28780 — Upgrade shell-quote to 1.8.4 (CVE-2026-9277)](https://github.com/google-gemini/gemini-cli/pull/28780)** — Critical Trivy-scanned vulnerability in `package-lock.json`; open.
2. **[#28778 — Upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)** — Critical CVE fix for git operations; open.
3. **[#28730 — Fix false model capacity exhaustion & quota lookup mapping](https://github.com/google-gemini/gemini-cli/pull/28730)** — Corrects client-side quota mapping and preserves the "Keep trying" UI option during transient capacity surges; closed.
4. **[#28729 — Resolve swallowed directory mismatch in IDE connections](https://github.com/google-gemini/gemini-cli/pull/28729)** — Fixes Gemini CLI ↔ IDE companion connection failures under Cider/VS Code forks with virtual paths; closed.
5. **[#28688 — Cloud Workstations proxy redirect URI for OAuth](https://github.com/google-gemini/gemini-cli/pull/28688)** — Dynamically resolves the OAuth callback instead of hardcoding `localhost`, fixing auth in Cloud Workstations VMs; closed.
6. **[#28599 — Classify capacity exhaustion as terminal error](https://github.com/google-gemini/gemini-cli/pull/28599)** — Prevents client-side hangs on `MODEL_CAPACITY_EXHAUSTED` by triggering fallback immediately when no retry delay is provided; closed.
7. **[#28369 — Local eval report command + developer docs](https://github.com/google-gemini/gemini-cli/pull/28369)** — Adds `npm run eval:report` to aggregate Vitest pass rates by model; closed.
8. **[#28305 — Tool-call formatter & failure summaries in evals](https://github.com/google-gemini/gemini-cli/pull/28305)** — Failed evals now print a compact, numbered timeline of tool calls (args, status, errors); open.
9. **[#28581 — Skip diff hunk markers during @-file processing](https://github.com/google-gemini/gemini-cli/pull/28581)** — Prevents `minimatch`/`path-scurry` heap growth on large diff prompts by eliminating recursive glob searches per hunk; open.
10. **[#28764 — VS Code companion: track all activate() Disposables](https://github.com/google-gemini/gemini-cli/pull/28764)** — Fixes a comma-expression bug where only the last Disposable of each pair was tracked, breaking `gemini.diff.accept` cleanup; open.

## Feature Request Trends
- **AST-aware codebase tooling** — File reads, search, and mapping informed by ASTs to reduce token noise and enable precise method-level operations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Safer, sandboxed shell execution** — Requests to let models use native bash safely, plus guardrails against destructive commands like `git reset --force` ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Agent self-awareness and observability** — Accurate CLI flag/hotkey knowledge, subagent trajectory sharing via `/chat share`, and subagent context in bug reports ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Auto Memory hardening** — Deterministic redaction, quarantine of invalid patches, and termination of low-signal retries ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Browser agent resilience** — Session takeover, lock recovery, Wayland support, and honoring `settings.json` overrides ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## Developer Pain Points
- **Hangs and misleading terminal states** — Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), get-shit-done hook crashes ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)), and MAX_TURNS misreported as goal success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Loss of user control** — Subagents executing despite agents being disabled in config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)); model littering workspaces with temp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Scaling limits** — 400 errors when tool count exceeds ~128 ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)); workspace-wide glob searches causing heap growth on large diffs ([#28581](https://github.com/google-gemini/gemini-cli/pull/28581)).
- **Memory privacy and hygiene** — Content sent to models before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), indefinite low-signal retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), and silently skipped invalid memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Under-utilized capabilities** — Custom skills and subagents not invoked autonomously ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)); symlinked agent definitions ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Security debt** — Two critical dependency CVEs (`shell-quote`, `simple-git`) awaiting merge ([#28780](https://github.com/google-gemini/gemini-cli/pull/28780), [#28778](https://github.com/google-gemini/gemini-cli/pull/28778)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-12

## Today's Highlights
Issue activity is concentrated on regressions and rough edges in Copilot CLI 1.0.79: configuration changes can wipe settings, user-default models aren’t picked up in new sessions, and skill/model routing is showing multiple inconsistencies. Windows users continue to hit plugin install/update permission failures, while MCP compatibility gaps are surfacing around BigInt serialization and OAuth issuer validation. Only two PRs were active today: a devcontainer addition and a security-focused migration away from `pull_request_target`.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
1. [**Windows: plugin install fails with “Access is denied” for all sources**](https://github.com/github/copilot-cli/issues/4151)  
   `copilot plugin install` fails 100% of the time on Windows 11, regardless of source type: marketplace, direct GitHub repo, or local directory. This is a major platform blocker with 3 comments and 1 👍.

2. [**Windows: plugin update fails while VS Code is running**](https://github.com/github/copilot-cli/issues/4095)  
   The Copilot extension holds watcher handles on installed plugins, causing `plugin update` to fail with `os error 5`. With 14 👍, this is clearly a high-impact issue for Windows users.

3. [**Resuming large sessions OOMs / pegs one CPU core in 1.0.74**](https://github.com/github/copilot-cli/issues/4251)  
   A long-lived session that previously resumed fine now consumes ~3–4× memory and can OOM the host. The A/B version comparison points to a regression introduced in 1.0.74.

4. [**`/config model` wipes all settings in settings.json**](https://github.com/github/copilot-cli/issues/4431)  
   Setting a user-wide model via `/config model` overwrites the entire `.copilot/settings.json`. The issue is closed, but it represents a serious data-loss bug in v1.0.79.

5. [**Copilot CLI cannot handle BigInt in structured MCP responses**](https://github.com/github/copilot-cli/issues/4211)  
   MCP servers returning large numbers cause `TypeError: Do not know how to serialize a BigInt`, aborting all ongoing tasks. This is a real interoperability gap for MCP-heavy workflows.

6. [**Native `tgrep` indexer OOM-kills the host on large monorepos**](https://github.com/github/copilot-cli/issues/3976)  
   The experiment-enabled `tgrep` daemon has no memory cap and can take down the machine on large repositories. Performance-conscious users will want this fixed before enabling the experiment.

7. [**Rubber Duck reviews sometimes use the same model family as the primary session**](https://github.com/github/copilot-cli/issues/4380)  
   The “rubber duck” adversarial reviewer is intended to be independent, but it can reuse the primary session’s model family, reducing review value. Noted on several models, including 5.6 Terra Max.

8. [**Copilot Free in Codespaces: “No model available” after update**](https://github.com/github/copilot-cli/issues/4405)  
   Free-tier users in GitHub Codespaces see immediate `Execution failed: No model available` errors. There is also discussion around token isolation and re-login behavior, making this an important auth/model availability issue.

9. [**GitLab MCP OAuth metadata rejected due to RFC 8414 issuer mismatch**](https://github.com/github/copilot-cli/issues/4439)  
   GitLab Self-Managed MCP servers using OAuth 2.0 Dynamic Client Registration fail authentication in 1.0.79. This highlights a standards-compliance edge that affects self-hosted MCP users.

10. [**Copilot CLI binary contains vulnerable `adm-zip` package**](https://github.com/github/copilot-cli/issues/4442)  
    The latest CLI includes `adm-zip` v0.5.17, flagged for high-severity CVE-2026-39244. Security scanners like XRay are blocking Docker image builds, so this is an urgent dependency-pin issue.

## Key PR Progress
Only two PRs were active in the last 24 hours.

- [**Migrate pull request automation away from `pull_request_target`**](https://github.com/github/copilot-cli/pull/4449)  
  Draft PR to reduce CI security risk by keeping untrusted PR input in lower-privilege `pull_request` workflows and moving repository-write actions behind a safer pattern.

- [**Add initial devcontainer configuration**](https://github.com/github/copilot-cli/pull/4428)  
  Adds a devcontainer setup for contributors, making it easier to spin up a consistent local development environment.

## Feature Request Trends
- **Granular permission/approval controls**: Users want auto-allow at session start ([#3877](https://github.com/github/copilot-cli/issues/3877)), read-only vs. write distinction for paths outside cwd ([#4443](https://github.com/github/copilot-cli/issues/4443)), and explicit per-file edit approval ([#4444](https://github.com/github/copilot-cli/issues/4444)).
- **Better session/context durability**: Repeated compactions lose early context, prompting a request to preserve durable decisions across compaction cycles ([#4441](https://github.com/github/copilot-cli/issues/4441)). Users also want a condensed timeline for autopilot mode ([#2623](https://github.com/github/copilot-cli/issues/2623)).
- **Enterprise policy management**: Admins want to enforce Copilot CLI sandbox and configuration from GitHub Enterprise policy ([#4446](https://github.com/github/copilot-cli/issues/4446)).
- **Cross-tool compatibility**: Teams using both Claude Code and Copilot CLI want support for `.claude/rules` to avoid duplicating instructions ([#4440](https://github.com/github/copilot-cli/issues/4440)).

## Developer Pain Points
- **Windows plugin lifecycle is fragile**: Permission errors and file-lock conflicts with VS Code make plugin install/update unreliable on Windows ([#4151](https://github.com/github/copilot-cli/issues/4151), [#4095](https://github.com/github/copilot-cli/issues/4095)).
- **Model configuration behavior is inconsistent**: Settings can be wiped ([#4431](https://github.com/github/copilot-cli/issues/4431)), user-default models may not apply ([#4434](https://github.com/github/copilot-cli/issues/4434)), and auto mode can select unavailable model/reasoning combinations ([#4445](https://github.com/github/copilot-cli/issues/4445)).
- **Model routing surprises**: Subagents may override model choices, delegate to unexpected families, or ignore complementary review strategies ([#4377](https://github.com/github/copilot-cli/issues/4377), [#4432](https://github.com/github/copilot-cli/issues/4432), [#4380](https://github.com/github/copilot-cli/issues/4380)).
- **MCP integration gaps**: BigInt serialization ([#4211](https://github.com/github/copilot-cli/issues/4211)), OAuth issuer validation ([#4439](https://github.com/github/copilot-cli/issues/4439)), and missing default GitHub MCP toolset ([#4436](https://github.com/github/copilot-cli/issues/4436)) are creating friction for MCP adopters.
- **Memory and scalability issues**: Large session resume OOMs ([#4251](https://github.com/github/copilot-cli/issues/4251)) and the `tgrep` indexer running unbounded ([#3976](https://github.com/github/copilot-cli/issues/3976)) are serious concerns for monorepo users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest — 2026-08-12

### Today’s Highlights
The long-running Memory System request (#1283) remains the most active community topic with 34 comments, and a related issue (#1478) highlights that users still find memory support unclear for large projects. New bug reports surfaced around Windows PowerShell 7 path handling and alarming task-plan wording (“Autopsy”). On the PR side, the standout open feature is #2509, which adds configurable thinking effort and an `/effort` command.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues
Only 5 issues were updated or opened in this window; all are listed below.

- [#1283 [enhancement] Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  The most-discussed open issue, with 34 comments. Developers want an automatic + manual memory layer so Kimi Code CLI can retain project patterns, user preferences, and useful context across sessions. This is a strong signal for the product roadmap.

- [#1478 [enhancement] 能否优化记忆层？/ Can the memory layer be optimized?](https://github.com/MoonshotAI/kimi-cli/issues/1478)  
  A complementary request from a user struggling with large projects. They noted documentation only mentions `agent.md` and could not find memory-related reference material. The demand is growing, especially for long-running, large-codebase workflows.

- [#2601 [Feature Request] Quote & Reply: comment on any selected part of an AI response in Kimi Web](https://github.com/MoonshotAI/kimi-cli/issues/2601)  
  A new feature request asking for selection-based follow-up on assistant messages — selecting a paragraph, code block, or plan step and attaching a targeted comment/question. Relevant not just to Kimi Web but to how users interact with agent-generated output.

- [#2600 [bug] Windows PowerShell7 default D drive startup causes path resolution failure](https://github.com/MoonshotAI/kimi-cli/issues/2600)  
  On Windows, when PowerShell 7 starts from a non-system drive (e.g. `D:`), Kimi Code CLI 0.33 cannot find the expected path. This is a cross-device/cwd handling bug that affects Windows users with custom shell start directories.

- [#2599 [bug] cli planning task appears: “Autopsy” in todo … so scary](https://github.com/MoonshotAI/kimi-cli/issues/2599)  
  On Kimi Code CLI 0.34.0 with `kimi k3`, the planner generated a todo item labeled “验尸”/“Autopsy”. This is likely a mis-translation or poorly phrased task name, but it creates a worrying UX. Users expect clearer, less alarming task labels.

### Key PR Progress
Only 8 PRs were updated in the last 24 hours; all are listed below.

- [#2509 [OPEN] feat(kimi): configurable thinking effort and /effort command](https://github.com/MoonshotAI/kimi-cli/pull/2509)  
  Adds a user-facing `/effort` command and configurable thinking effort. Resolves #2501 and builds on legacy `reasoning_effort` passthrough. This is likely to be well received by developers who want to control model reasoning depth.

- [#2057 [CLOSED] fix(acp): replace assert statements with proper RuntimeError exceptions](https://github.com/MoonshotAI/kimi-cli/pull/2057)  
  Replaces unsafe `assert` checks in `acp/session.py` with `RuntimeError`, preventing silent loss of invariant checks under Python’s `-O` flag.

- [#2056 [CLOSED] fix(wire): eliminate TOCTOU race in WireFile.append_record](https://github.com/MoonshotAI/kimi-cli/pull/2056)  
  Fixes a time-of-check-to-time-of-use race where the file could be deleted between `exists()` and `stat()`, causing an unhandled failure.

- [#2055 [CLOSED] fix(agentspec): replace assert with proper AgentSpecError exception](https://github.com/MoonshotAI/kimi-cli/pull/2055)  
  Replaces an `assert` guarding `agent_spec.extend` with a proper `AgentSpecError`, improving production safety.

- [#1328 [CLOSED] Fix minor bugs in file tools and UI feedback](https://github.com/MoonshotAI/kimi-cli/pull/1328)  
  Fixes replacement count calculation in `StrReplaceFile` and other UI feedback issues that affected multi-edit workflows.

- [#1082 [CLOSED] fix(pyinstaller): filter non-existent dateparser cache files](https://github.com/MoonshotAI/kimi-cli/pull/1082)  
  Prevents PyInstaller collection failures in fresh installs/CI by filtering lazily generated `dateparser` cache files.

- [#1077 [CLOSED] fix: remove redundant mode validation in WriteFile tool](https://github.com/MoonshotAI/kimi-cli/pull/1077)  
  Removes duplicated runtime validation of `mode` in the `WriteFile` tool, simplifying the code path.

- [#1393 [CLOSED] fix(acp): route shell commands through terminal args](https://github.com/MoonshotAI/kimi-cli/pull/1393)  
  Fixes ACP shell execution so the shell executable is passed as `command` and invocation arguments are passed via `args`. Includes regression tests for Bash and PowerShell.

### Feature Request Trends
- **Persistent Memory / Context Across Sessions**  
  Issues #1283 and #1478 both point to the same need: a real memory system, with both automatic AI-managed notes and explicit user-defined instructions. This is currently the highest-requested product direction.
- **Fine-Grained Interaction with AI Responses**  
  Issue #2601 asks for quote-and-reply on selected spans of assistant output, enabling targeted follow-ups on specific paragraphs, diffs, or plan steps.
- **Configurable Reasoning Effort**  
  Though coming via PR #2509, the underlying request for user-controlled thinking effort is clearly a community priority and complements the existing `reasoning_effort` support.

### Developer Pain Points
- **Large-project context loss** — Developers report pain when working on big projects because the CLI lacks a proper memory layer, and documentation only references `agent.md` (#1283, #1478).
- **Windows path handling when cwd is on a non-system drive** — PowerShell 7 starting from `D:` breaks Kimi Code CLI path resolution (#2600).
- **Confusing task wording** — Generated todo items containing “Autopsy” make users uncomfortable and reduce trust in planning output (#2599).
- **Lack of precise follow-up mechanics** — Users want to select a specific part of an AI response and ask a question about it, rather than re-iterating context (#2601).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## Today's Highlights

No new releases landed in the last 24 hours. Activity is centered on V2 parity/regression fixes, shared-server state isolation in the TUI, and long-requested UX features like expandable pasted text and multi-session tabs. On the PR side, contributors are focused on TUI tab/autocomplete improvements, MCP tool-snapshot races, and faster client lifecycle testing.

## Hot Issues

- [Issue #8501](https://github.com/anomalyco/opencode/issues/8501) — **Allow expanding pasted text** (`[Pasted ~1 lines]`). Strongest community demand on the list: 35 comments and 230 👍. Users want to edit/see full pasted content instead of a collapsed prompt summary.
- [Issue #16017](https://github.com/anomalyco/opencode/issues/16017) — **Go plan usage/balance API endpoint**. 33 comments and 137 👍. Developers want programmatic access to plan usage with rolling/weekly/monthly windows instead of dashboard-only visibility.
- [Issue #10272](https://github.com/anomalyco/opencode/issues/10272) — **Hidden calls to Claude Haiku**. While configured to use MiniMax M2.1 via OpenRouter, logs showed undisclosed Haiku 4.5 calls. A trust and cost-control blocker if provider model routing is overridden.
- [Issue #28191](https://github.com/anomalyco/opencode/issues/28191) — **TUI permission prompt height/expanded state config**. The permission panel is hard-coded to a collapsed 15-line max height, making large diff reviews painful.
- [Issue #18134](https://github.com/anomalyco/opencode/issues/18134) — **Desktop close button should minimize to tray**. Windows users expect OpenCode Desktop to keep running in the background rather than exiting completely.
- [Issue #13033](https://github.com/anomalyco/opencode/issues/13033) — **Silent/background compaction**. Auto-compaction streams its summary into the terminal; users want this to happen without polluting the active chat view.
- [Issue #39831](https://github.com/anomalyco/opencode/issues/39831) — **Zen `gpt-5.6-luna` / `gpt-5.6-terra` fail with 403**. Newer GPT models via the `opencode` provider consistently fail upstream while older models work.
- [Issue #12548](https://github.com/anomalyco/opencode/issues/12548) — **Chrome-style tabs for multi-session workflows**. Switching sessions today loses context; tabbed sessions were well received with 10 👍.
- [Issue #39936](https://github.com/anomalyco/opencode/issues/39936) — **VS Code notifications when an agent completes or needs attention**. Users want IDE-level async notifications to complement existing TUI/Desktop/CLI notification work.
- [Issue #41777](https://github.com/anomalyco/opencode/issues/41777) — **V2 regression: `webfetch` in Code Mode returns `null`**. The built-in tool completes successfully but yields no content, and it is missing from the top-level tool list — a serious V2 parity gap.

## Key PR Progress

- [PR #41888](https://github.com/anomalyco/opencode/pull/41888) — **API: continue pending work after interrupt**. Adds an optional `continue` query parameter to the session interrupt endpoint and regenerates Promise/Effect clients.
- [PR #41889](https://github.com/anomalyco/opencode/pull/41889) — **Desktop: align local development identity**. Uses a shared `2.0.0-local` version across Electron and CLI, discovers the isolated server via `service-local.json`, and shows `LOCAL` in the titlebar.
- [PR #41838](https://github.com/anomalyco/opencode/pull/41838) — **Core: embed models.dev snapshot**. Moves the models.dev catalog into `packages/core` as a static text import instead of a compile-time define.
- [PR #41862](https://github.com/anomalyco/opencode/pull/41862) — **TUI: hidden Experiments section**. Adds an opt-in test surface for in-flight features, reachable only through the secret `/baldbeard` command.
- [PR #41870](https://github.com/anomalyco/opencode/pull/41870) — **TUI: `/cd` autocomplete**. Lists immediate child directories, handles shell-style paths, and persists project-scoped `/cd` recents.
- [PR #41883](https://github.com/anomalyco/opencode/pull/41883) — **TUI: show completed write output**. The V2 `write` tool now displays syntax-highlighted file contents after completion. Ported to `v2` from a PR that missed the branch.
- [PR #41884](https://github.com/anomalyco/opencode/pull/41884) — **Core: gate tool snapshot on MCP registration**. Prevents boot-resumed sessions from taking tool snapshots before MCP tools are registered.
- [PR #41885](https://github.com/anomalyco/opencode/pull/41885) — **Core: restore bundler resolution**. Reverts NodeNext compiler options while keeping the ~300 files with explicit `.js` import extensions.
- [PR #41858](https://github.com/anomalyco/opencode/pull/41858) — **Core: fix Deferred waiter cleanup crash**. Guard against `TypeError: undefined is not an object` in the vendored Effect patch.
- [PR #41793](https://github.com/anomalyco/opencode/pull/41793) — **Client: surface managed startup stderr**. Improves error reporting for background-service failures, e.g. port-conflict guidance instead of an opaque exit code.

## Feature Request Trends

- **Multi-session TUI workflows**: Users want Chrome-style tabs, subagent tabs, and the new session tab-bar plus button ([#12548](https://github.com/anomalyco/opencode/issues/12548), [#17838](https://github.com/anomalyco/opencode/issues/17838), [#41887](https://github.com/anomalyco/opencode/pull/41887)).
- **Configurable TUI/diff UX**: Requests center on permission-prompt sizing, expandable pasted text, and quieter auto-compaction ([#28191](https://github.com/anomalyco/opencode/issues/28191), [#8501](https://github.com/anomalyco/opencode/issues/8501), [#13033](https://github.com/anomalyco/opencode/issues/13033)).
- **Desktop/OS lifecycle**: Windows users want system-tray close behavior and silent/system-wide installation support ([#18134](https://github.com/anomalyco/opencode/issues/18134), [#9995](https://github.com/anomalyco/opencode/issues/9995)).
- **Async notifications**: VS Code completion/attention notifications are requested even though similar notification work exists in TUI/Desktop/CLI ([#39936](https://github.com/anomalyco/opencode/issues/39936)).
- **API and ecosystem expansion**: New requests include Go plan usage APIs, V2 client API gaps, PR-tracker plugins, and remote MCP server docs ([#16017](https://github.com/anomalyco/opencode/issues/16017), [#41828](https://github.com/anomalyco/opencode/issues/41828), [#41857](https://github.com/anomalyco/opencode/issues/41857), [#41822](https://github.com/anomalyco/opencode/issues/41822)).

## Developer Pain Points

- **V2 migration/parity gaps**: `webfetch` returns `null`, mode switches are invisible to the model, plan mode can still modify files, and legacy data with apostrophes breaks SQLite migration ([#41777](https://github.com/anomalyco/opencode/issues/41777), [#40474](https://github.com/anomalyco/opencode/issues/40474), [#40778](https://github.com/anomalyco/opencode/issues/40778), [#41869](https://github.com/anomalyco/opencode/issues/41869)).
- **Shared-server state bleed**: Multiple TUIs attached to one `opencode serve` process show wrong git branches and apply events from other workspaces ([#39181](https://github.com/anomalyco/opencode/issues/39181), [#41839](https://github.com/anomalyco/opencode/issues/41839)).
- **`apply_patch` file-safety issues**: Windows CRLF corruption, `add` hunks overwriting existing files, and partial multi-file changes when a later mutation fails ([#37090](https://github.com/anomalyco/opencode/issues/37090), [#41875](https://github.com/anomalyco/opencode/issues/41875), [#41871](https://github.com/anomalyco/opencode/issues/41871)).
- **Provider/API friction**: Hidden model substitution, Zen provider 403s, DeepSeek rejecting empty `tool_calls`, and Grok 4.5 unavailable on Go/Zen plans ([#10272](https://github.com/anomalyco/opencode/issues/10272), [#39831](https://github.com/anomalyco/opencode/issues/39831), [#41860](https://github.com/anomalyco/opencode/issues/41860), [#41886](https://github.com/anomalyco/opencode/issues/41886)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-12

## Today's Highlights

No new releases landed in the last 24 hours, but a solid batch of TUI and edit-tool fixes were closed: the edit tool now normalizes single-object `edits` and collapses whitespace in fuzzy matching ([#7978](https://github.com/earendil-works/pi/pull/7978)), and fullscreen-mode clipboard copying was routed through the host clipboard ([#7972](https://github.com/earendil-works/pi/pull/7972)). The most active issue was the long-running WSL Copilot login hang ([#6187](https://github.com/earendil-works/pi/issues/6187), 25 comments), which finally closed, while macOS high-CPU usage ([#7730](https://github.com/earendil-works/pi/issues/7730)) and Copilot login 429s for large orgs ([#7850](https://github.com/earendil-works/pi/issues/7850)) remain community hotspots. On streaming, a 0.84.0 regression that dropped `usage` from mid-run wire events ([#7911](https://github.com/earendil-works/pi/issues/7911)) already has a fix under review ([#7982](https://github.com/earendil-works/pi/pull/7982)).

## Hot Issues

1. **High CPU usage on macOS with long sessions** — [#7730](https://github.com/earendil-works/pi/issues/7730) (open, 8 👍, 10 comments) — Reports of 50–110% CPU and 600–800 MB memory, apparently tied to session or context length. The 8 👍 suggest broad impact; no fix attached yet.

2. **WSL login hangs after Copilot device authorization** — [#6187](https://github.com/earendil-works/pi/issues/6187) (closed, 25 comments) — The most-commented issue of the window. Installation and browser approval succeed, but the WSL client never detects authorization and hangs at login. Closed after nearly six weeks of debugging.

3. **Crash on Bun runtime (0.84.0/0.84.1)** — [#7846](https://github.com/earendil-works/pi/issues/7846) (closed, 10 comments) — `TypeError: zlib.createZstdDecompress is not a function` in undici kills Pi at startup under Bun. A runtime-compat regression that blocked Bun users entirely.

4. **Copilot login 429 for organizations with many models** — [#7850](https://github.com/earendil-works/pi/issues/7850) (closed, 7 👍, 7 comments) — Orgs with 20+ available models hit "429 Too Many Requests" after successful device authorization. Same root cause as the earlier [#7428](https://github.com/earendil-works/pi/issues/7428); likely an enterprise onboarding pain point.

5. **Edit fuzzy match misses whitespace-only differences** — [#7836](https://github.com/earendil-works/pi/issues/7836) (open, 6 comments) — `normalizeForFuzzyMatch` neither collapses whitespace runs nor strips leading whitespace, so `oldText` fails on semantically identical content. Especially punishing for small models that rely on fuzzy matching.

6. **Configurable thinking level/model for compaction** — [#7553](https://github.com/earendil-works/pi/issues/7553) (open, 8 comments) — Auto/manual compaction unconditionally reuses the session's thinking level, so users on reasoning models burn the same budget on summarization as on normal turns. Requesting a separate compaction-level setting.

7. **WebSocket retry only handles two error codes** — [#7444](https://github.com/earendil-works/pi/issues/7444) (closed, 8 comments) — The OpenAI Codex WebSocket loop retries only `previous_response_not_found` and `websocket_connection_limit_reached`; any other transient `response.failed` hard-stops the turn.

8. **`--thinking` CLI parameter has no effect** — [#7966](https://github.com/earendil-works/pi/issues/7966) (closed, 3 comments) — `pi --thinking off "prompt"` falls back to the previous session's thinking mode; the explicit CLI flag is overridden by persisted state.

9. **Invalid settings.json silently ignored on Windows** — [#7829](https://github.com/earendil-works/pi/issues/7829) (open, 3 comments) — Unescaped backslashes in `shellPath` produce invalid JSON that is silently swallowed, surfacing later as a misleading "bash not found" error.

10. **Delta-only `message_update` drops `usage`** — [#7911](https://github.com/earendil-works/pi/issues/7911) (open, 2 comments) — The 0.84.0 fix for [#7290](https://github.com/earendil-works/pi/issues/7290) removed cumulative `message` from wire events but also removed `usage`; nothing on JSON/RPC carries usage until `message_end`. Fix already in flight in [#7982](https://github.com/earendil-works/pi/pull/7982).

## Key PR Progress

1. **fix(coding-agent): preserve usage in streaming events** — [#7982](https://github.com/earendil-works/pi/pull/7982) (open, christianklotz) — Restores cumulative provider usage on JSON/RPC `message_update` events while keeping message snapshots omitted for linear stream size; includes wire-shape docs and a regression test. Closes [#7911](https://github.com/earendil-works/pi/issues/7911).

2. **fix(edit): normalize single-object edits + collapse whitespace in fuzzy match** — [#7978](https://github.com/earendil-works/pi/pull/7978) (closed, re2zero) — Fixes both the single-object/JSON-string `edits` rejection and the whitespace sensitivity from [#7836](https://github.com/earendil-works/pi/issues/7836).

3. **fix(ai): map models.dev cost tiers for every provider** — [#7981](https://github.com/earendil-works/pi/pull/7981) (open, bilby91) — Token-threshold cost tiers were only mapped for GitHub Copilot; extends the `getModelsDevCost` mapping to all providers. Fixes [#7912](https://github.com/earendil-works/pi/issues/7912).

4. **feat(ai): add Qwen Token Plan Individual CN provider** — [#7989](https://github.com/earendil-works/pi/pull/7989) (open, bigoldcat123) — Adds a built-in provider for the China Token Plan endpoint (cn-beijing), reusing `QWEN_TOKEN_PLAN_CN_API_KEY`; mirrors [#7659](https://github.com/earendil-works/pi/issues/7659) for the China region. A duplicate [#7988](https://github.com/earendil-works/pi/pull/7988) was closed.

5. **feat(coding-agent): render Mermaid diagrams in HTML exports** — [#7956](https://github.com/earendil-works/pi/pull/7956) (open, aliou) — Reuses the TUI's Mermaid rendering path for HTML exports, with rendering toggleable from the header and wrapped in a scrollable container.

6. **fix(tui): route selection copy through the host clipboard** — [#7972](https://github.com/earendil-works/pi/pull/7972) (closed, Panoplos) — Bare OSC 52 writes silently fail on macOS Terminal.app and VTE-based terminals; this routes copy through the host clipboard so the "Copied!" confirmation is truthful.

7. **fix(coding-agent): inherit subagent session config** — [#7897](https://github.com/earendil-works/pi/pull/7897) (closed, virtuald) — Subagents now follow the current session's model and thinking level instead of whatever the last arbitrary session set, fixing intuitive multi-session behavior.

8. **feat(ai): AI Gateway transport over Cloudflare AI binding** — [#7901](https://github.com/earendil-works/pi/pull/7901) (closed, Maximo-Guk) — Adds a Cloudflare Workers AI Gateway transport via the `env.AI.run()` binding. Closes [#7838](https://github.com/earendil-works/pi/issues/7838).

9. **feat(tui): add copyOnSelect option to TuiAltScreen** — [#7866](https://github.com/earendil-works/pi/pull/7866) (closed, re2zero) — Makes the automatic copy-on-select behavior in fullscreen TUI mode configurable, defaulting to current behavior.

10. **feat(coding-agent): show when fullscreen transcript is scrolled up** — [#7970](https://github.com/earendil-works/pi/pull/7970) (open, pablasso) — Adds a `↓` indicator in the status row whenever the transcript is not following the end; scrolling back down clears it.

## Feature Request Trends

- **Provider expansion, especially China-region routing:** New Qwen Token Plan CN provider ([#7989](https://github.com/earendil-works/pi/pull/7989)) and the Cloudflare AI Gateway transport ([#7901](https://github.com/earendil-works/pi/pull/7901)) reflect demand for more model-routing options and regional endpoints.
- **Finer-grained session control:** Compaction-specific thinking levels ([#7553](https://github.com/earendil-works/pi/issues/7553)), subagents inheriting session config ([#7897](https://github.com/earendil-works/pi/pull/7897)), and exposing off-transcript streaming to extensions ([#7986](https://github.com/earendil-works/pi/issues/7986)) all push toward per-session, per-context configurability.
- **Terminal experience polish:** copyOnSelect ([#7866](https://github.com/earendil-works/pi/pull/7866)), truthful host-clipboard copying ([#7972](https://github.com/earendil-works/pi/pull/7972)), Kitty DCS image passthrough inside tmux ([#7936](https://github.com/earendil-works/pi/issues/7936)), and clickable OSC 8 hyperlinks in fullscreen mode ([#7930](https://github.com/earendil-works/pi/issues/7930)) show sustained investment in TUI ergonomics.
- **Rendering and export parity:** Mermaid diagrams in HTML exports ([#7956](https://github.com/earendil-works/pi/pull/7956)) and LaTeX fraction rendering fixes ([#7760](https://github.com/earendil-works/pi/issues/7760)) — users want what the TUI renders to survive into exports and docs.
- **Performance budgets:** A startup-time budget benchmark against jcode ([#7739](https://github.com/earendil-works/pi/issues/7739)) and macOS CPU/memory profiling ([#7730](https://github.com/earendil-works/pi/issues/7730)) indicate performance is becoming a first-class community concern.

## Developer Pain Points

- **GitHub Copilot login reliability:** Recurring 429 rate limits for orgs with many available models ([#7850](https://github.com/earendil-works/pi/issues/7850), [#7428](https://github.com/earendil-works/pi/issues/7428)) and the WSL authorization hang ([#6187](https://github.com/earendil-works/pi/issues/6187)) make device-auth flow the most fragile part of onboarding.
- **Edit tool brittleness:** Fuzzy matching that ignores whitespace ([#7836](https://github.com/earendil-works/pi/issues/7836)), single-object `edits` rejection ([#7978](https://github.com/earendil-works/pi/pull/7978)), and the unreachable serialized-JSON fix ([#7944](https://github.com/earendil-works/pi/issues/7944)) — models that deviate even slightly from the expected schema get penalized.
- **Streaming protocol regressions:** Delta-only `message_update` silently removed `usage` ([#7911](https://github.com/earendil-works/pi/issues/7911)), and OpenAI-compatible SSE turns can hang forever with no inactivity timeout ([#7954](https://github.com/earendil-works/pi/issues/7954)) — mid-run telemetry and turn-completion guarantees are sensitive areas.
- **Cross-platform runtime issues:** Bun crashes on `zlib.createZstdDecompress` ([#7846](https://github.com/earendil-works/pi/issues/7846)), severe output duplication and memory leaks on Windows CMD ([#7947](https://github.com/earendil-works/pi/issues/7947)), blank CJK characters in VS Code's terminal ([#7923](https://github.com/earendil-works/pi/issues/7923)), and silently ignored invalid JSON settings ([#7829](https://github.com/earendil-works/pi/issues/7829)) fragment the experience across environments.
- **Config and keybinding consistency:** Hardcoded key checks bypass `keybindings.json` ([#7939](https://github.com/earendil-works/pi/issues/7939)), the `--thinking` CLI flag is ignored ([#7966](https://github.com/earendil-works/pi/issues/7966)), and package version disagreement on session JSONL format v3 vs v4 ([#7937](https://github.com/earendil-works/pi/issues/7937)) make configuration and packaging feel unreliable.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-12

## Today's Highlights
The qwen-code project shipped v0.21.10 with ACP-level reasoning-effort configuration and Web Shell image previews, while the latest preview/nightly builds focus on prompt-safe session navigation and daemon observability. Community activity is heavily concentrated on daemon/session reliability, CLI/headless correctness, and Windows/macOS terminal/IDE issues. The maintainers also continue to invest in automated review tooling and workflow transparency.

## Releases
- **v0.21.10**  
  - Added ACP support for configuring reasoning effort levels from **Default to Max** via session configuration ([#8526](https://github.com/QwenLM/qwen-code/pull/8526)).  
  - Clicking uploaded or pasted images in the Web Shell now opens a preview in the artifact.

- **v0.21.11-preview.0**  
  - `fix(web-shell)`: Enforce prompt-safe session navigation ([#8931](https://github.com/QwenLM/qwen-code/pull/8931)).  
  - `chore(serve)`: Log session continuation admissions.

- **v0.21.10-nightly.20260812.a64d1291d2**  
  - Same Web Shell session-navigation fix and serve observability logging as the preview.

- **live-host-v0.1.1**  
  - `fix(cli)`: Probe sandbox runtime before selecting it ([#7734](https://github.com/QwenLM/qwen-code/pull/7734)).  
  - `fix(autofix)`: Serialize scan-and-pick operations.

## Hot Issues
- [#8678](https://github.com/QwenLM/qwen-code/issues/8678) — **fix(serve): Preserve the current session when a large restore times out**  
  P1 daemon bug with 7 comments. Session restore timeout handling is now partially addressed, but the broader preservation contract still needs attention.

- [#8901](https://github.com/QwenLM/qwen-code/issues/8901) — **macOS iTerm flicker after selecting an option in approval prompts**  
  P2 UI rendering issue affecting iTerm users on 0.21.8. Frequent flicker on every confirmation makes interactive CLI usage uncomfortable.

- [#8897](https://github.com/QwenLM/qwen-code/issues/8897) — **`--approval-mode` and `--auth-type` are accepted but missing from `qwen --help`**  
  CLI discoverability bug: valid flags are validated but undocumented in help output, causing confusion for headless/automation users.

- [#8920](https://github.com/QwenLM/qwen-code/issues/8920) — **OpenAI API errors emit success result and exit 0 in stream-json mode**  
  Dangerous headless behavior: API failures are reported as successful runs, which can silently poison CI pipelines.

- [#8644](https://github.com/QwenLM/qwen-code/issues/8644) — **Clicking file links in chat fails on Windows because drive-letter colons are URL-encoded**  
  Common Windows workflow blocker in VS Code; `file:///d%3A/...` cannot be opened by the editor.

- [#8182](https://github.com/QwenLM/qwen-code/issues/8182) — **Daemon authorises each ACP child 50% of host memory, never divided by child count**  
  Resource-governance bug: multiple ACP children can collectively overcommit memory because the per-child old-space ceiling is derived from host memory.

- [#8909](https://github.com/QwenLM/qwen-code/issues/8909) — **Cold load/resume can use the wrong runtime storage in multi-workspace mode**  
  Session restoration may read/write the wrong workspace runtime context, causing cross-workspace contamination.

- [#8948](https://github.com/QwenLM/qwen-code/issues/8948) — **Provider update prompt promises a model switch the update no longer performs**  
  Misleading UX: the confirmation prompt tells users their selected model will switch, but the update path removes `modelSelection` unconditionally.

- [#8944](https://github.com/QwenLM/qwen-code/issues/8944) — **Two high-severity vulnerabilities reported after `npm update` since 0.21.0**  
  Security regression concern; users are seeing high-severity audit findings after routine updates.

- [#8959](https://github.com/QwenLM/qwen-code/issues/8959) — **Main CI failed: E2E Tests on a64d1291d2f6**  
  Automated CI failure before any test result was reported, tracked per commit; blocks confidence in `main` health.

## Key PR Progress
- [#8534](https://github.com/QwenLM/qwen-code/pull/8534) — **docs(design): reasoning-episode invariants inventory and resume-divergence verdict**  
  Adds design docs cataloging every mutation site for `Content[]`/`Part[]` chat history, clarifying which must preserve reasoning signatures.

- [#8687](https://github.com/QwenLM/qwen-code/pull/8687) — **feat(daemon): guard cross-worktree Git mutations**  
  Built-in host-side guard blocks model-issued shell commands that use `-C`, `--work-tree`, or `--git-dir` to escape the session workspace.

- [#8961](https://github.com/QwenLM/qwen-code/pull/8961) — **fix(ci): make autofix verification gates hermetic to runner git config**  
  Fixes flaky autofix verification caused by runner-local git configuration affecting test outcomes.

- [#8787](https://github.com/QwenLM/qwen-code/pull/8787) — **fix(web-shell): defer assistant footer during background agent work**  
  Keeps copy/branch/footer actions hidden until the main agent finishes or summarizes background agent results.

- [#8905](https://github.com/QwenLM/qwen-code/pull/8905) — **feat(serve): adaptively grow live-journal caps before truncating mid-turn replay**  
  Daemon now grows per-session journal caps instead of dropping old replay entries during an in-flight turn.

- [#8717](https://github.com/QwenLM/qwen-code/pull/8717) — **fix(serve): support reserved characters in virtual subagent ids**  
  Allows agent task IDs containing `:` and `/` to be represented as virtual subagent session IDs via Base64URL round-tripping.

- [#8467](https://github.com/QwenLM/qwen-code/pull/8467) — **feat(web-shell): add Git diff sources and existing branch switching**  
  Expands Web Shell Git tooling with Uncommitted/Unstaged/Staged/Committed/branch comparison sources and branch selectors.

- [#8675](https://github.com/QwenLM/qwen-code/pull/8675) — **feat(web-shell): add model-specific reasoning controls**  
  Adds a model reasoning-controls registry across Core, ACP, daemon, SDK, and WebShell, with per-model Thinking/Effort tiers.

- [#8169](https://github.com/QwenLM/qwen-code/pull/8169) — **feat(core): add OpenAI Responses API content generator**  
  Adds a new OpenAI Responses API backend, expanding provider compatibility beyond the existing chat-completions path.

- [#8777](https://github.com/QwenLM/qwen-code/pull/8777) — **feat(review): add Maven multi-module verification**  
  Registers a Maven adapter on the toolchain boundary so `review build-test` recognizes Maven roots and multi-module projects.

## Feature Request Trends
- **Deeper daemon/session management** — Standalone sessions without a workspace ([#8908](https://github.com/QwenLM/qwen-code/issues/8908)), split resource-protection work for the daemon ([#8091](https://github.com/QwenLM/qwen-code/issues/8091)), and adaptive live-journal growth are all pointing to a more robust long-running server model.
- **Workflow/background automation transparency** — Users want Web Shell visualization and control of dynamic workflow runs ([#8941](https://github.com/QwenLM/qwen-code/issues/8941)), per-dispatch subagent transcripts ([#8839](https://github.com/QwenLM/qwen-code/pull/8839)), and incremental PR review that only covers new commits ([#8946](https://github.com/QwenLM/qwen-code/issues/8946)).
- **Model-level reasoning configuration** — The v0.21.10 ACP reasoning-effort work ([#8526](https://github.com/QwenLM/qwen-code/pull/8526)) and model-specific reasoning controls ([#8675](https://github.com/QwenLM/qwen-code/pull/8675)) show strong demand for per-model effort/thinking configuration.
- **Web Shell as primary IDE-like surface** — Git diff sources/branch switching ([#8467](https://github.com/QwenLM/qwen-code/pull/8467)), image previews, and loop-detection error surfacing ([#8853](https://github.com/QwenLM/qwen-code/pull/8853)) continue to narrow the gap with desktop IDE integrations.

## Developer Pain Points
- **Headless/CLI correctness** — Flags missing from `--help` ([#8897](https://github.com/QwenLM/qwen-code/issues/8897)), API errors reported as success in stream-json mode ([#8920](https://github.com/QwenLM/qwen-code/issues/8920)), and parallel `read_file` results being merged ([#8940](https://github.com/QwenLM/qwen-code/issues/8940)) erode trust in non-interactive workflows.
- **Daemon/session reliability** — Restore timeouts ([#8678](https://github.com/QwenLM/qwen-code/issues/8678)), wrong runtime storage in multi-workspace mode ([#8909](https://github.com/QwenLM/qwen-code/issues/8909)), and missing scheduled prompts in restored transcripts ([#8837](https://github.com/QwenLM/qwen-code/issues/8837)) are recurring server-mode pain points.
- **Cross-platform friction** — Windows file-link URL encoding ([#8644](https://github.com/QwenLM/qwen-code/issues/8644)), Desktop launch failure on Windows ([#8929](https://github.com/QwenLM/qwen-code/issues/8929)), and iTerm flicker on macOS ([#8901](https://github.com/QwenLM/qwen-code/issues/8901)) are top terminal/IDE complaints.
- **Update/configuration trust** — Repeated provider update prompts ([#8504](https://github.com/QwenLM/qwen-code/issues/8504)), misleading model-switch promises ([#8948](https://github.com/QwenLM/qwen-code/issues/8948)), ignored `tools.truncateToolOutputThreshold` ([#8922](https://github.com/QwenLM/qwen-code/issues/8922)), and new high-severity npm audit findings ([#8944](https://github.com/QwenLM/qwen-code/issues/8944)) are eroding update confidence.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## DeepSeek TUI Community Digest — 2026-08-12

Source activity is currently filed under `Hmbown/CodeWhale`.

### Today’s Highlights
No new releases shipped in the last 24 hours. The main focus is on regressions and hardening: a wide-terminal output regression in v0.9.5 was reported (#5322), while a subagent recursion-budget bypass appears to be fixed by #5317. Feature work continues with an always-on-top “mini window” mode (#5318), OrcaRouter provider registration (#5321), and safer session snapshot/crash recovery (#5320).

### Releases
None in the last 24 hours.

### Hot Issues
Only 3 issues were updated in the last 24 hours; all are listed below.

- [#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)  
  Tracking umbrella for the TUI crate decomposition effort. It coordinates sub-EPICs, feature work, and PRs targeting a more modular architecture. Important for anyone relying on CodeWhale’s long-term maintainability. 2 comments so far.

- [#5322 [OPEN] [bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65)](https://github.com/Hmbown/CodeWhale/issues/5322)  
  In v0.9, the transcript/output area is capped at a max width, leaving unused whitespace on wide displays; shrinking works but expanding doesn’t. A clear UX regression for desktop users with wide monitors. 1 comment, likely active triage.

- [#5253 [CLOSED] [bug] bug(subagents): nested max_depth can widen the root session depth budget](https://github.com/Hmbown/CodeWhale/issues/5253)  
  A nested subagent could bypass the inherited recursion budget by supplying an explicit `max_depth`. Now closed, with the paired fix in #5317. Important because it closes a correctness/configuration-boundary hole in subagent spawning.

### Key PR Progress
7 PRs were updated in the last 24 hours.

- [#5318 [OPEN] feat(tui): pin host terminal window as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5318)  
  Adds a Windows picture-in-picture mode: `/pin` or context-menu action shrinks the host terminal to 640×400 and keeps it always-on-top; toggling restores. Useful for keeping the agent visible while working in other tools.

- [#5321 [OPEN] feat: register OrcaRouter as a named provider](https://github.com/Hmbown/CodeWhale/pull/5321)  
  Wires OrcaRouter the same way OpenRouter is integrated, so model picker, config reference, and docs stay consistent. One `ORCAROUTER_API_KEY` unlocks 150+ models via an OpenAI-compatible gateway.

- [#5320 [OPEN] fix(session): separate snapshot reads from crash recovery](https://github.com/Hmbown/CodeWhale/pull/5320)  
  Introduces `load_session_snapshot` for side-effect-free reads while tool calls may still be running, and `recover_session_for_resume` for recovery only after known restarts. Improves reliability for embedding hosts managing their own transcripts.

- [#5319 [OPEN] fix(tui): copy messages without visual rails](https://github.com/Hmbown/CodeWhale/pull/5319)  
  Copying user/assistant messages now copies canonical source content instead of rendered Ratatui lines. Tool/thinking/system cells keep the full-transcript path, so detailed semantics don’t regress. A quality-of-life fix for TUI users.

- [#5225 [CLOSED] feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)  
  Previously `session/prompt` only streamed model text and never executed tool calls, making ACP bridges chat-only. This PR exposes real code-editing tools over ACP, enabling richer editor integrations such as Zed and third-party adapters.

- [#5277 [OPEN] [dependencies, github_actions] build(deps): bump docker/login-action from 4.5.2 to 4.6.0](https://github.com/Hmbown/CodeWhale/pull/5277)  
  Routine dependency bump for the Docker login action, likely CI hardening.

- [#5317 [CLOSED] fix(subagents): cap nested max_depth by inherited budget](https://github.com/Hmbown/CodeWhale/pull/5317)  
  Fixes #5253 by taking `inherited.min(..)` in the explicit-`max_depth` arm, preventing nested spawns from widening recursion beyond the root/session budget.

### Feature Request Trends
From the limited issue/PR activity, the dominant feature directions are:

- **Modular architecture**: EPIC-005 (#5316) signals serious investment in crate decomposition and maintainability.
- **Terminal UI ergonomics**: wide-terminal filling (#5322), window pinning (#5318), and clean copy behavior (#5319) all point to a stronger focus on daily TUI usability.
- **Provider extensibility**: registering OrcaRouter as a named provider (#5321) shows continued demand for more model gateway options.
- **Editor/agent interoperability**: exposing real tools over ACP (#5225) is a clear move toward making CodeWhale a backend for external editors.

### Developer Pain Points
Recurring frustrations visible in this window:

- **Version-to-version UI regressions**: #5322 shows that wide-terminal layout regressed between v0.8 and v0.9, breaking an existing workflow.
- **Copy/paste fidelity**: rendered Ratatui rails were being copied instead of the underlying message content, causing noisy clipboard output (#5319).
- **Subagent configuration bypass**: explicit `max_depth` could override inherited recursion limits, undermining operator-configured safety budgets (#5253).
- **ACP limitations**: external integrations initially received chat-only streaming without tool execution, limiting real code-editing workflows (#5225).
- **Monolith maintenance overhead**: the crate decomposition EPIC (#5316) suggests the current monolithic structure is becoming harder to develop and review.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*