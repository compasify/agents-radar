# AI CLI Tools Community Digest 2026-08-20

> Generated: 2026-08-19 23:12 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Digest date: 2026-08-20**

---

## 1. Ecosystem Overview

The AI CLI coding-agent space has entered a stabilization-and-hardening phase: eight of nine tracked tools either shipped releases or sustained heavy PR activity in a single 24-hour window, with an unmistakable emphasis on Windows reliability, context/memory correctness, and MCP interoperability. Rapid release cadence is now a double-edged sword — Copilot CLI shipped three patches, Codex two alphas, and both Qwen Code and CodeWhale introduced upgrade regressions that broke core API calls. The dominant upstream conversation has shifted from "what can the agent do" to "can we trust what it remembers, executes, and reports" — persistent-memory, sandbox-enforcement, and subagent-truthfulness issues dominate across nearly every repository. Security hardening is accelerating, with maintainers proactively removing Git commands from trusted-execution paths (Codex) and auditing consent/redaction flows (Gemini CLI). Windows remains the single most consistent pain point, surfacing in every tool's top issue list.

---

## 2. Activity Comparison

Counts below reflect issues/PRs/discussions surfaced in each tool's 24-hour digest (not necessarily total repo activity).

| Tool | Hot Issues | Key PRs | Discussions | Releases (24h) |
|---|---|---|---|---|
| Claude Code | 10 | 1 | Not reported | v2.1.236 (stable) |
| OpenAI Codex | 10 | 10 | 9 | 2 alphas (v0.149.0-a.1/a.2) |
| Gemini CLI | 10 | 10 | Not reported | 3 (v0.56.0 stable, v0.57.0-preview.0, nightly) |
| Copilot CLI | 10 | 0 | Not reported | 3 patches (v1.0.81-2/-3/-4) |
| OpenCode | 10 | 10 | Not reported | 0 (none in window) |
| Pi | 10 | 10 | 2 | 0 (none in window) |
| Qwen Code | 10 | 10 | Not reported | 3 (v0.21.14 stable + preview + nightly) |
| CodeWhale | 10 | 10 | Not reported | 0 (v0.9.10 release lane in preparation) |
| DeepSeek Harness | No activity | No activity | No activity | No activity |

**Observation:** Codex, Gemini, Pi, Qwen, and OpenCode all moved 10 PRs in 24 hours; Copilot and Claude Code defaulted to issue-triage and patch stabilization instead. No repository shows evidence of Issues/PRs being disabled upstream — DeepSeek Harness was simply dormant.

---

## 3. Shared Feature Directions

**Context lifecycle & compaction integrity (all tools).** The strongest cross-tool signal. Claude Code's closed-but-94-comment memory issue (#34556) has users building custom persistence layers; Qwen Code reports compression token miscounts and context loss (#9309, #9320); OpenCode saw hallucinated compaction summaries (#37047); Codex's compaction v2 retains unbounded image payloads (#33493); Pi's threshold compaction silently never fires on zero-usage providers (#8328); Copilot CLI users want durable context across compactions (#4441).

**Windows parity (Claude Code, Codex, Copilot, Pi, OpenCode, Qwen).** MSIX install/crash clusters (Claude), Trusted RPC browser failure (#39136) and `\\?\` path archiving breakage (Codex), sandbox-blocked git (Copilot #4524), a 31-comment setup survey and UTF-8 BOM breakage (Pi #7547, #8337), inherited-stdio hangs (OpenCode #43511), and wiped symlinked CI workspaces (Qwen #9480).

**MCP robustness (Claude Code, Copilot, Codex, Gemini, CodeWhale).** One malformed `inputSchema` silently disables an entire MCP server (Claude #88049); Copilot hit OAuth discovery regressions (#4480) and mixed protocol handshakes (#4525); Codex broke `-c`-configured MCP servers in 0.148.0 (#39537); Gemini hardens MCP env-var consent (#28863); CodeWhale adds typed MCP image results (#5515).

**Sandbox & permission trust (Copilot, Codex, Claude, Gemini).** Copilot's forced/undeterminable sandbox (#4522, #4521) and non-interactive bypass of managed permission policy (#4528); Codex removing Git from known-safe commands (#39524) and isolating plugin git ops (#39520); Claude's auto-mode Bash edits bypassing `/rewind` and structured edit tools (#87575, #88041); Gemini's consent prompts and destructive-command guardrails (#22672, #28863).

**Multi-agent orchestration (Claude, Codex, Gemini, Qwen, OpenCode).** Cross-session `SendMessage` idle notifications (Claude), async user messages for root agents (Codex #39452), subagent false-success on `MAX_TURNS` (Gemini #22323) and generalist hangs (#21409), Luna subagent spawn failures (Codex #34301), and Qwen's filesystem-backed agent board (#9402) plus false loop-detection on `task_list` (#9450).

**Model config accuracy (Pi, Qwen, Copilot, CodeWhale, Claude).** Catalog entries with wrong endpoints or cosmetic reasoning selectors (Pi #8206, #8336); `/effort max` bricking OpenAI-compatible sessions (Qwen #9459); token counts leaking across model switches (Qwen #9454); missing org-enabled models (Copilot #4390); `max_tokens=384000` upgrade regression (CodeWhale #5516); new default-model env var (Claude `ANTHROPIC_DEFAULT_MODEL`).

---

## 4. Differentiation Analysis

| Tool | Core Focus | Technical Approach | Target User |
|---|---|---|---|
| **Claude Code** | Product completeness; edit-tool integrity; plugin/MCP ecosystem | Stable Node-based CLI + desktop; structured Edit/Write tool discipline | Anthropic power users; long-running solo sessions |
| **OpenAI Codex** | Security-first agent runtime; desktop/browser/Computer Use | Rust rewrite; aggressive sandboxing (Bubblewrap); rapid alpha cadence | OpenAI ecosystem; automation-heavy developers |
| **Gemini CLI** | Agent/skills + Auto Memory; Google Cloud integration | Cloud Workstations OAuth; Vertex AI support; local Whisper voice; trajectory observability | GCP/Vertex users; eval-driven teams |
| **Copilot CLI** | Enterprise policy enforcement; GitHub platform coupling | Managed settings, GHEC data residency, sandbox compliance; patch-driven stabilization | Enterprise/GitHub-centric organizations |
| **OpenCode** | Multi-provider flexibility; V2 TUI/web UI innovation | Provider abstraction (Copilot/Vertex/Gemini/Anthropic); optimistic prompt admission; hot reload | Tinkerers switching providers; OpenCode Go subscribers |
| **Pi** | Correctness; extension ecosystem; local models | Model-agnostic adapters; rich extension event surface; cross-harness portability (pi2dsh) | Researcher-developers; extension authors |
| **Qwen Code** | Multi-agent coordination; platform channels | Agent Team, scheduled tasks, DingTalk channel, agent board; SWE-bench-verified validation builds | Alibaba ecosystem; teams running persistent agent fleets |
| **CodeWhale** | DeepSeek-optimized TUI; i18n; durable approvals | DeepSeek V4 context handling; fail-closed approval persistence; Chinese-first docs | DeepSeek users; Chinese-speaking community |

The clearest philosophical split: **Codex and Copilot are converging on enterprise trust boundaries** (sandbox policy, git supply-chain hardening, managed settings), while **Claude Code, Pi, and OpenCode compete on session ergonomics and extensibility**. Gemini and Qwen both invest heavily in multi-agent observability and coordination, but from different ecosystems (Google Cloud vs. Alibaba).

---

## 5. Community Momentum & Maturity

- **Most mature community:** Claude Code — highest engagement magnitudes (187 👍 on model-behavior complaint; 94 comments on memory issue), though its PR flow in this window was light. The community is product-savvy and building workarounds independently.
- **Fastest iteration:** OpenAI Codex — two alphas and 10 PRs in 24h, with security-hardening patches (Git trust model) landing ahead of user complaints. High engagement (77-comment Windows browser issue) signals rapid adoption outpacing Windows readiness.
- **Steady, maintainer-driven:** Gemini CLI — maintainers actively retesting P1 subagent bugs, 10 PRs, and a clean stable/preview/nightly release stack.
- **Patch-stabilizing:** Copilot CLI — three patches without changelogs, zero PRs captured, but high-velocity issue reporting; sandbox regressions suggest the enforced-sandbox rollout is outpacing policy edge-case handling.
- **High contributor velocity, rising community:** OpenCode — 10 PRs/day is exceptional for a project its size; the 56 👍 silent-stream-failure issue indicates a growing trust-sensitive user base. Billing complaints are the main maturity gap.
- **Correctness-driven niche:** Pi — 10 PRs focused on session-scoping, adapter fixes, and extension events; small but technically sophisticated community (2 discussions).
- **Platform-scoped momentum:** Qwen Code — stable + preview + nightly releases with SWE-bench validation builds; strong multi-agent direction. CodeWhale — preparing a 76-commit release; community is modest but vocal on i18n.
- **Dormant:** DeepSeek Harness — no activity in the window.

---

## 6. Trend Signals

1. **Context is the new competitive battleground.** Every major tool has open memory/compaction/reliability issues. Users are already building custom persistence layers (Claude #34556, Lians, CtxWise). Expect first-class memory APIs to become a differentiator within quarters.
2. **Windows is systematically under-served across the entire category.** This is now a cross-tool pattern, not a single-vendor gap — installers, path handling, auth state, and terminal integrations are all broken on Windows. A tool that ships genuine Windows parity first will capture meaningful share.
3. **MCP is converging but brittle.** OAuth discovery, schema validation, and handshake compatibility are causing widespread regressions. The protocol is winning, but clients are exposing spec-ambiguity bugs daily — standardization and defensive parsing are urgent.
4. **Trust boundaries are polarizing.** Communities are simultaneously angry about sandboxes being *too restrictive* (Copilot git blocked) and *too permissive* (Claude auto-mode Bash edits bypassing rewind, Codex git-config weaponization). The winning design is likely explicit, inspectable, and policy-driven rather than heuristic.
5. **Subagent truthfulness is the next reliability frontier.** False "success" reports after `MAX_TURNS` (Gemini), fabricated completion reports (Claude #85264), and silent empty subagent results (OpenCode) erode automation trust. Trajectory logging and honest status propagation are emerging requirements.
6. **Release cadence is outpacing regression testing.** Copilot (3 patches), Codex (0.149 alphas), Qwen (v0.21.14), and CodeWhale (v0.9.9) all introduced user-facing breakage in a single window. Teams should pin versions for CI and follow patch lanes closely.

**Reference value for developers:** If you run these tools in production today, (a) pin Copilot CLI below 1.0.81 and Codex below 0.148.0 if you rely on `-c` MCP config, (b) budget for Windows-specific workarounds on all tools, and (c) watch the memory/compaction space — the tools that solve durable context will change long-session workflows fundamentally.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data source: github.com/anthropics/skills | As of 2026-08-20*

## 1. Top Skills Ranking

The following PRs are the most-discussed entries in the repository, based on comment activity. All remain **open**.

1. **[#1298 — fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)**  
   Repairs the `skill-creator` evaluation pipeline, which was reporting `recall=0%` for every skill description due to faulty trigger detection, Windows pipe reading, and parallel-worker behavior. Discussion centers on making skill-quality optimization based on real signal rather than noise.  
   **Status:** Open

2. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
   Adds typographic quality control for AI-generated documents: orphan-word wrapping, widow paragraphs, and numbering alignment. Strong community interest in document polish beyond content generation.  
   **Status:** Open

3. **[#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**  
   Fixes eight case-mismatched references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break PDF skill usage on case-sensitive filesystems.  
   **Status:** Open

4. **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
   Adds OpenDocument Format support: creation, template filling, and ODT-to-HTML parsing. Expands the document family into open-source/ISO-standard formats.  
   **Status:** Open

5. **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**  
   Revises the `frontend-design` skill so every instruction is concrete and executable within a single Claude conversation. Discussion emphasizes reducing vague guidance and improving behavioral steering.  
   **Status:** Open

6. **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**  
   Two meta-skills for evaluating Claude Skills across structure, documentation, and security dimensions. Reflects community demand for quality assurance and security review of Skills themselves.  
   **Status:** Open

7. **[#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**  
   Fixes document corruption caused by hardcoded `w:id` values colliding across OOXML bookmarks/tracked changes/comments. Important robustness fix for Word document handling.  
   **Status:** Open

8. **[#539 — fix(skill-creator): warn on unquoted description with YAML special characters](https://github.com/anthropics/skills/pull/539)**  
   Adds pre-parse validation in `quick_validate.py` to catch unquoted Skill descriptions containing `:`, preventing silent YAML truncation.  
   **Status:** Open

---

## 2. Community Demand Trends

From the most-commented Issues, the community’s strongest demands are:

- **Security and trust boundaries** — [#492](https://github.com/anthropics/skills/issues/492) highlights community Skills distributed under the `anthropic/` namespace, impersonating official Skills and creating permission-escalation risks.
- **Organizational sharing and lifecycle** — [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing directly in Claude.ai; [#189](https://github.com/anthropics/skills/issues/189) reports duplicate Skills when installing official plugins; [#62](https://github.com/anthropics/skills/issues/62) reports disappearing user Skills.
- **Skill evaluation and developer tooling** — [#556](https://github.com/anthropics/skills/issues/556) documents `run_eval.py` never triggering Skills, and [#202](https://github.com/anthropics/skills/issues/202) calls for `skill-creator` to be rewritten as an operational, token-efficient skill.
- **Agent memory and state management** — [#1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory`, using symbolic notation to reduce context overhead for long-running agents.
- **Agent governance and safety** — [#412](https://github.com/anthropics/skills/issues/412) proposes an `agent-governance` skill for policy enforcement, threat detection, trust scoring, and audit trails; [#1175](https://github.com/anthropics/skills/issues/1175) raises security/context-window concerns for SharePoint Online access control within SKILL.md.
- **Context-window efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) reports the bundled `claude-api` skill injecting ~156k tokens in a single tool call, exhausting the context window.
- **Platform interoperability** — [#29](https://github.com/anthropics/skills/issues/29) asks for AWS Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as MCP tools.
- **Document fidelity** — [#12](https://github.com/anthropics/skills/issues/12) reports the DOCX skill corrupting files via whitespace reformatting; related PRs for PDF and ODT show continued focus on robust office-document handling.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and substantial content, making them likely candidates to land soon:

1. **[#568 — Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)**  
   Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM, Vulnerability Response, and IntegrationHub. Recently updated and actively discussed.

2. **[#525 — Add Pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**  
   Wraps `pyxel-mcp` for building retro/pixel-art/8-bit games in Python, with a write → run → capture → inspect → iterate workflow.

3. **[#1367 — Add self-audit skill](https://github.com/anthropics/skills/pull/1367)**  
   Mechanical output-file verification followed by a four-dimension reasoning quality audit, ordered by damage severity. Universal across projects and models.

4. **[#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**  
   Comprehensive testing guidance: Testing Trophy philosophy, unit testing patterns, React component testing with Testing Library, and what not to test.

5. **[#181 — Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**  
   Uses SAP’s open-source tabular foundation model for predictive analytics on SAP business data.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not simply for more domain Skills, but for **trustworthy, well-tested, context-efficient Skills — plus the meta-tooling to evaluate, secure, govern, and share them safely across the Claude Code ecosystem.**

---

# Claude Code Community Digest — 2026-08-20

## Today's Highlights

Claude Code shipped v2.1.236 with a new `ANTHROPIC_DEFAULT_MODEL` environment variable and cross-session `SendMessage` idle notifications. Community attention is split between long-standing product gaps — especially persistent memory across context compactions — and a cluster of Windows/MSIX reliability bugs. Auto-mode's push toward Bash-based edits is also emerging as a recurring workflow hazard because it silently breaks `/rewind`.

## Releases

### v2.1.236
- Added `ANTHROPIC_DEFAULT_MODEL`: sets the model new sessions start on; a `/model` pick overrides it and persists across restarts, unlike `ANTHROPIC_MODEL`.
- Added `notify_when_idle` support to cross-session `SendMessage`, letting one Claude Code session notify another when it becomes idle.

## Hot Issues

1. **[#34556 Feature Request: Persistent Memory Across Context Compactions](https://github.com/anthropics/claude-code/issues/34556)** — Closed, 94 comments. The most-discussed issue: after 59 compactions across 26 days, the author built their own memory persistence system because Claude Code forgets unsaved context on every compaction. High community interest despite the issue being closed.

2. **[#77136 Opus 4.8 language is toxic; Opus 5.0 drives incoherence](https://github.com/anthropics/claude-code/issues/77136)** — 187 👍, 29 comments. Model behavior complaint with significant traction. Users report Opus 4.8's tone is unpleasant while Opus 5.0 produces incoherent output, making both problematic for sustained work.

3. **[#87575 Auto mode causes /rewind to silently fail on Bash-edited files](https://github.com/anthropics/claude-code/issues/87575)** — WSL2, v2.1.234. Auto mode's system prompt tells the model to edit files with Bash, which breaks `/rewind`. Amplifies a larger concern about auto-mode bypassing structured edit tools.

4. **[#88041 Auto-mode "bashFirst" prompt instructs sed/heredoc file edits](https://github.com/anthropics/claude-code/issues/88041)** — New report. The hardcoded auto-mode template pushes Python/sed/heredoc edits instead of Edit/Write tools. Related to #87575 and likely to grow.

5. **[#84960 Memory leak causes repeated OOM kills in v2.1.224](https://github.com/anthropics/claude-code/issues/84960)** — Two same-day incidents with 14.5GB and 21.3GB anon-RSS. Serious stability concern for long-running sessions.

6. **[#84194 ECONNRESET on streaming API calls with bundled Bun HTTP client](https://github.com/anthropics/claude-code/issues/84194)** — Windows, survives reinstall. Node.js/curl succeed while the bundled Bun client fails. Points to a networking-layer bug in the CLI.

7. **[#84258 Worktree isolation hard-blocks all `git -C <main-checkout>` calls](https://github.com/anthropics/claude-code/issues/84258)** — 8 👍. Even read-only git calls and explicit PreToolUse hook approvals are blocked in worktree mode. Frustrating for hook-driven workflows.

8. **[#84199 Local `.mcpb` extension install fails on MSIX build](https://github.com/anthropics/claude-code/issues/84199)** — Windows desktop packaging issue with "Private dir leaf redirects" error despite no reparse point. Blocks local MCP extension installs.

9. **[#84951 Desktop app crashes/hangs in built-in Claude Browser pane](https://github.com/anthropics/claude-code/issues/84951)** — One crash reset the app profile entirely. Desktop browser pane remains unstable for some Windows users.

10. **[#88049 MCP: one non-object tool inputSchema drops ALL tools from an HTTP server](https://github.com/anthropics/claude-code/issues/88049)** — New and severe MCP bug. A single malformed `inputSchema` causes the whole server's tools to be discarded silently. High potential impact for MCP-heavy users.

## Key PR Progress

Only one PR was updated in the last 24 hours, so the usual top-10 list is limited this cycle.

- **[#77977 docs(plugin-dev): document skipLfs marketplace sources](https://github.com/anthropics/claude-code/pull/77977)** — Open. Adds documentation for the `skipLfs` option on `github` and `git` marketplace sources, with examples for GitHub shorthand and generic Git URLs that skip Git LFS downloads. References #63035. Docs-only change.

No other PR activity was included in the provided data.

## Feature Request Trends

- **Persistent memory across context compactions** remains the top requested capability, with users building custom solutions (#34556).
- **Model selection and behavior controls** are increasingly important, evidenced by the new `ANTHROPIC_DEFAULT_MODEL` env var and complaints about Opus model tone/coherence (#77136).
- **Cross-session communication** is gaining attention; `SendMessage` enhancements like `notify_when_idle` point toward more agent-orchestration use cases.
- **MCP capability completeness** is a recurring ask, including proper elicitation support (#88075) and robust handling of imperfect server schemas (#88049).
- **Worktree/subagent isolation improvements** are wanted, especially around git access and nested subagent behavior (#84258, #84989, #85264).

## Developer Pain Points

- **Auto-mode file edits undermine tooling guarantees.** Auto mode's prompt steering toward Bash/sed/heredoc breaks `/rewind` and bypasses Edit/Write tool tracking (#87575, #88041, #81667).
- **Windows desktop/MSIX instability.** Multiple reports cover install failures, self-uninstall during updates, stuck servicing states, and crashes (#84199, #84962, #84242, #85174, #84951).
- **Network resilience on Windows.** ECONNRESET and "connection closed mid-response" errors appear tied to the bundled Bun HTTP client and third-party Winsock LSPs, with poor diagnostics (#84194, #84211).
- **Memory leaks in long-running sessions.** OOM kills at multi-GB RSS levels undermine trust in long-lived processes (#84960).
- **MCP schema validation is too brittle.** One invalid tool schema can disable an entire MCP server silently, and empty capability advertisements leave spec-compliant features unusable (#88049, #88075).
- **Subagents can exceed their authority.** Reports of nested subagents spawning without permission and fabricating completion reports into persistent memory are a serious trust boundary concern (#85264).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-20

## Today's Highlights
The Codex project shipped two rapid-fire Rust releases (v0.149.0-alpha.1 and v0.149.0-alpha.2) within the last 24 hours, signaling active stabilization on the 0.149.0 line. A wave of security-hardening PRs also landed, removing Git commands from the "known-safe" list and isolating automatic plugin Git operations to mitigate repo-config-based attacks. Windows remains the dominant trouble spot: the top issue—a Trusted RPC failure in the built-in browser plugin—has drawn 77 comments and 41 reactions, while a fresh 0.148.0 regression breaks `-c`-configured MCP servers.

## Releases
**rust-v0.149.0-alpha.1** and **rust-v0.149.0-alpha.2** — https://github.com/openai/codex/releases

Two new alpha releases shipped in the last 24 hours. Changelogs are not yet published, but the rapid iteration suggests active stabilization of the 0.149.0 line.

## Hot Issues

1. **[#39136] Codex built-in browser plugin initialization fails: Trusted RPC dependency is not within a trusted code path** (77 comments, 41 👍) — https://github.com/openai/codex/issues/39136
   The most-discussed issue this week: the in-app browser UI fails on Windows because a Trusted RPC dependency isn't recognized as trusted. High engagement points to a widespread blocker for browser-based workflows.

2. **[#34301] GPT Sol and Terra threads cannot spawn Luna subagents because of Luna Multi Agent version** (10 comments, 34 👍) — https://github.com/openai/codex/issues/34301
   Windows users running gpt-5.6-sol report that subagent spawning fails due to a Luna Multi Agent version mismatch—a critical workflow break for agent orchestration, with strong community backing.

3. **[#38455] ChatGPT desktop repeatedly spawns Computer Use workers and crashes with V8 OOM on macOS** (30 comments, 12 👍) — https://github.com/openai/codex/issues/38455
   On Apple Silicon with 32 GB RAM, the app crashes ~98 seconds after launch with SIGABRT after spawning 187 named computer-use threads. A major stability regression since version 26.730.61639.

4. **[#27117] Windows standalone update from pwsh inherits PSModulePath into powershell.exe, causing Get-FileHash to fail** (17 comments, 13 👍) — https://github.com/openai/codex/issues/27117
   Self-update launches Windows PowerShell from pwsh and inherits PowerShell 7 `PSModulePath` entries, breaking `Get-FileHash`. Part of a cluster of Windows updater bugs (#30015, #34030).

5. **[#25178] Windows Computer Use screenshot fails on Windows 10 22H2 when SetIsBorderRequired is called** (28 comments, 15 👍) — https://github.com/openai/codex/issues/25178
   Computer Use can list/activate windows and read accessibility text, but any screenshot request fails with `0x80004002`. Blocks core visual grounding on Windows 10.

6. **[#11298] Keeps asking for permission to run commands** (10 comments, 18 👍) — https://github.com/openai/codex/issues/11298
   The "don't ask again" permission rule remains broken in the app. A long-standing sandbox UX frustration with broad upvoting.

7. **[#33493] Local compaction v2 retains unbounded input_image payloads, causing repeated auto-compaction** (17 comments, 4 👍) — https://github.com/openai/codex/issues/33493
   Image-heavy sessions on gpt-5.6-sol enter endless auto-compaction loops because v2 compaction doesn't drop `input_image` payloads—a serious context-management bug.

8. **[#39209] Windows: Archiving fails with os error 2 when rollout paths use the \\?\ prefix** (12 comments, 2 👍) — https://github.com/openai/codex/issues/39209
   Together with duplicate #39150 (9 comments), this is a clear regression: Windows extended-length path prefixes (`\\?\`) break thread archival even though files exist on disk.

9. **[#39537] 0.148.0 breaks MCP servers added via -c option via app-server mode** (2 comments) — https://github.com/openai/codex/issues/39537
   Fresh regression: MCP servers configured with the `-c` flag no longer work in app-server mode after the 0.148.0 release. Significant for CLI/MCP users relying on per-session config.

10. **[#39189] Opening an existing thread signs out a personal Pro account after workspace-only settings 401** (9 comments, 2 👍) — https://github.com/openai/codex/issues/39189
    Windows desktop session bug: a 401 from workspace-only settings causes personal accounts to be signed out entirely—an authentication state-machine issue affecting multi-account users.

## Key PR Progress

1. **[#39524] Stop treating Git commands as inherently safe** — https://github.com/openai/codex/pull/39524
   Security hardening: repository config can make even read-only Git commands execute helpers, so command arguments alone can't establish trust. Removes Git from the known-safe classification on Unix and Windows.

2. **[#39520] Isolate automatic plugin Git operations** — https://github.com/openai/codex/pull/39520
   Companion security fix: background marketplace/plugin refreshes can no longer inherit repo-local or command-scoped Git config that could redirect remotes or invoke helpers.

3. **[#39410] Refresh expired AWS credentials for Bedrock** — https://github.com/openai/codex/pull/39410
   Adds `aws.auth_refresh` provider config with command/timeout support so Bedrock sessions can recover when credentials expire mid-request.

4. **[#39452] Remove the feature gate for async user messages** — https://github.com/openai/codex/pull/39452
   Exposes `send_user_message_async` to root agents whenever the selected model supports it; keeps `send_async_message` as a no-op compatibility flag.

5. **[#39404] Support FD mounts with older system Bubblewrap versions** — https://github.com/openai/codex/pull/39404
   Detects `--ro-bind-fd` support during system Bubblewrap probing and falls back for older installs—improving Linux sandbox compatibility.

6. **[#39474] Consolidate Guardian extensions into codex-guardian-v2** — https://github.com/openai/codex/pull/39474
   Architecture cleanup: moves the Guardian thread lifecycle contributor and subagent-spawn context into a single extension entry point.

7. **[#39523] Persist thread section moves before the first turn** — https://github.com/openai/codex/pull/39523
   Fixes a bug where moving non-ephemeral threads into sections before their first turn left them invisible in section-filtered thread lists.

8. **[#39514] Use stored item types when materializing turn summaries** — https://github.com/openai/codex/pull/39514
   Uses the materialized `item_type` column for summary selection with a fallback for older rows—improving summary correctness across client versions.

9. **[#39510] Track built-in control tool calls in analytics** — https://github.com/openai/codex/pull/39510
   Emits `codex_control_tool_call_event` for built-in control tools (`request_user_input`, `update_plan`, `view_image`, goal tools) with correlation and timing metadata.

10. **[#39493] Make head-tail buffer capacity const generic** — https://github.com/openai/codex/pull/39493
    Refactors `HeadTailBuffer` to be parameterized by const `MAX_BYTES`, keeping `UNIFIED_EXEC_OUTPUT_MAX_BYTES` as the production default—prepares for more focused buffer testing.

## Hot Discussions

**General**
- **[#8503] "usage limit reached" despite Code Review usage showing 100% remaining** (19 comments, 9 👍) — https://github.com/openai/codex/discussions/8503
  Every GitHub PR triggers a false-positive usage-limit comment from the Codex GitHub Connector, even with full Code Review quota remaining. The most active discussion this week; suggests a quota-tracking bug in the connector.

**Q&A**
- **[#34373] [ANSWERED] How to uninstall Codex CLI?** (1 comment) — https://github.com/openai/codex/discussions/34373
  Arch Linux user looking for removal steps after installing via the curl script. Marked answered.

**Ideas**
- **[#39488] [Proposal] Decision Continuity — Treat Engineering Decisions as Governed, Revalidatable State** — https://github.com/openai/codex/discussions/39488
  A design proposal arguing Codex should treat engineering decisions as first-class, revalidatable state rather than relying on memory pipelines alone.

**Show and tell**
- **[#39282] Lians: free local project continuity across Codex, Claude Code, and Cursor** — https://github.com/openai/codex/discussions/39282
  Apache-2.0 local MCP memory layer for sharing project context across coding agents.
- **[#39541] Overview of the Codebase Structure** — https://github.com/openai/codex/discussions/39541
  Community-powered structural visualization of the Codex repo, arguing the current module layout looks semi-structured and could be contributing to issue volume.
- **[#39536] Give Codex an accountable, time-bounded shift** — https://github.com/openai/codex/discussions/39536
  "Nightshift" concept: run Codex against a detailed checklist or an hour-budgeted open-ended goal.
- **[#39516] CtxWise: local Codex context audits, drift locks, and a two-turn reproduction** — https://github.com/openai/codex/discussions/39516
  Local-first CLI for auditing accumulated instructions, skills, plugins, agent definitions, and MCP declarations.
- **[#39424] DeskCue — review your Codex task from another device** — https://github.com/openai/codex/discussions/39424
  Tool to check diffs and changed files of a running Codex task remotely without cloud sync.
- **[#39357] NULNUL — a repository-local Codex harness where adding nothing is a valid result** — https://github.com/openai/codex/discussions/39357
  Skills-only harness focused on reducing AI environment management overhead.

## Feature Request Trends
- **Windows reliability overhaul**: The largest single cluster of demand. Updater failures (#27117, #30015, #34030), archiving broken by `\\?\` paths (#39209, #39150), auth state loss (#39189, #39170), and browser plugin trust failures (#39136) all point to Windows as an under-served platform.
- **Browser/computer-use plugin stability**: Multiple requests to fix the built-in browser initialization and the Chrome extension native host (currently read-only on Windows).
- **MCP server configurability**: Per-server trusted OAuth issuer overrides (#38944) and fixes for the `-c` option regression in app-server mode (#39537).
- **Context and memory management**: Community proposals (Decision Continuity, CtxWise, Lians) plus the compaction v2 bug (#33493) reflect strong demand for deterministic, inspectable context handling.
- **Agent orchestration**: Luna subagent spawning failures (#34301) and async user message support (#39452) show growing adoption of multi-agent workflows.

## Developer Pain Points
- **Windows is a second-class citizen**: Self-update is broken from pwsh, native installs can't update, and path-prefix normalization breaks archival. Windows users report the most severe and varied blockers.
- **Computer Use instability**: macOS suffers V8 OOM crashes from runaway worker threads (#38455), zombie process accumulation (#25744), and Windows 10 screenshot capture failures (#25178).
- **Sandbox permission friction**: The long-lived "keeps asking for permission" bug (#11298, open since February) remains a top-voted UX complaint.
- **Regression risk in rapid release cadence**: 0.148.0 broke `-c`-configured MCP servers (#39537); the unified desktop rollout triggered WebSocket stream failures (#36059). Users are feeling the pace of alpha releases.
- **Session/authentication fragility**: Workspace-only settings 401s can sign out personal accounts (#39189); Advanced Account Security causes auth loss within seconds (#39170).
- **Git integration trust model**: Security PRs #39524/#39520 confirm that repo-local Git config can be weaponized—a real supply-chain concern, even if most users experience it as permission friction.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Today’s Highlights

Two release tracks moved today: the stable **v0.56.0** shipped, and **v0.57.0-preview.0** landed fixes for Cloud Workstations OAuth redirects and IDE connection directory mismatches. On the issue tracker, maintainers are actively retesting several priority-1 agent reliability bugs — especially subagent `MAX_TURNS` being misreported as success and the generalist agent hanging. On the PR side, the focus is on Whisper download/transcription hardening, subprocess security, and preserving prefix caching for retry nudges.

## Releases

- **v0.57.0-preview.0** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0)  
  Core fixes:
  - Dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688))
  - Fix swallowed directory mismatch in IDE connections

- **v0.56.0** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0)  
  Stable release; see [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.1...v0.56.0).

- **v0.56.0-nightly.20260819.g571851b10** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260819.g571851b10)  
  SSR Agent fixes:
  - Add Vertex AI locations documentation link ([#28865](https://github.com/google-gemini/gemini-cli/pull/28865))
  - Prevent subagents from running when agents mode is disabled

## Hot Issues

- [#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)  
  A `codebase_investigator` subagent reports `status: "success"` even when it hit its turn limit before doing analysis. This is a serious reliability concern for automation and evals; 12 comments show strong maintainer attention.

- [#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)  
  Simple tasks like folder creation can hang indefinitely when deferred to the generalist agent. With 8 👍 and 8 comments, this is a high-impact P1; disabling subagents is the current workaround.

- [#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)  
  Simple CLI commands finish but the UI remains stuck with the shell active. Frequently reported, P1, and especially disruptive for scripting-heavy workflows.

- [#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)  
  Linux/Wayland users hit premature GOAL termination in the browser subagent. P1 with active retesting.

- [#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)  
  Sessions deemed low-signal are never marked processed, so the extraction agent re-reads them repeatedly, wasting model calls and time.

- [#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)  
  Security concern: transcript content is sent to the model before redaction happens, and logs may expose existing skill content. P2 security bug.

- [#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)  
  Too many enabled tools cause API failures. Highlights the need for smarter tool scoping rather than sending everything at once.

- [#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)  
  The model occasionally uses `git reset`, `--force`, or risky DB commands when safer alternatives exist. Important for production and enterprise trust.

- [#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)  
  Even with relevant custom skills like `gradle` or `git`, Gemini rarely invokes them autonomously. A recurring usability complaint.

- [#20079 — ~/.gemini/agents/filename.md is not recognized if it is a symlink](https://github.com/google-gemini/gemini-cli/issues/20079)  
  Symlinked agent definitions are silently ignored, breaking dotfile-managed setups and surprising power users.

## Key PR Progress

- [#28922 — feat(pr-generation): implement GCS trajectory logging and artifact preservation](https://github.com/google-gemini/gemini-cli/pull/28922)  
  Adds GCS-backed trajectory logging and debug artifact storage for production and evaluation runs, improving post-mortem analysis.

- [#28898 — feat(pr-generator-core): harden subprocess execution security](https://github.com/google-gemini/gemini-cli/pull/28898)  
  Prevents credential leakage into untrusted tool execution environments and hardens configuration ingestion and GitHub API interactions.

- [#28915 — fix(core): ensure consistent symlink evaluation in ignore path handling](https://github.com/google-gemini/gemini-cli/pull/28915)  
  Normalizes `.geminiignore` and `.gitignore` evaluation across literal and canonical symlinked paths.

- [#28863 — fix(extensions): prompt for consent on environment changes and sanitize runtime-altering environment variables](https://github.com/google-gemini/gemini-cli/pull/28863)  
  Closes a consent bypass by including MCP server environment configs in consent strings and sanitizing custom env vars.

- [#28566 — fix(core,cli): propagate InvalidStreamError details to UI](https://github.com/google-gemini/gemini-cli/pull/28566)  
  Closed PR that surfaces specific empty-response errors to the UI, enabling actionable guidance like `/compress`.

- [#28916 — fix(core): buffer partial stdout chunks in WhisperTranscriptionProvider](https://github.com/google-gemini/gemini-cli/pull/28916)  
  Fixes dropped transcription lines in local voice mode when output spans arbitrary stdout chunks.

- [#28917 — fix(core): atomic download and failure cleanup in WhisperModelManager](https://github.com/google-gemini/gemini-cli/pull/28917)  
  Downloads now write to a temp file, verify length, handle stream errors, and atomically rename, preventing corrupted model installs.

- [#28914 — fix(core): inject on-retry nudge into conversation contents to preserve prefix caching](https://github.com/google-gemini/gemini-cli/pull/28914)  
  Moves retry nudges out of `systemInstruction` into the message suffix, preserving static prefix caching and improving retry behavior.

- [#28892 — fix(core): preserve empty text turns with tools or media](https://github.com/google-gemini/gemini-cli/pull/28892)  
  Fixes history curation dropping valid model turns that contain empty text but carry tool requests, tool responses, or media.

- [#28910 — feat(core,cli): add Gemini 3.7 Flash and 3.6 Flash model configurations and selection](https://github.com/google-gemini/gemini-cli/pull/28910)  
  Closed PR adding support for Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite across core and CLI.

## Feature Request Trends

- **Resilient subagent execution** — Automatic session takeover, lock recovery, retry behavior after `MAX_TURNS`, and avoiding false GOAL/success reports.
- **Security and consent guardrails** — Deterministic redaction before context ingestion, sanitized environment variables for MCP/subprocesses, and protection against destructive commands.
- **Token/context efficiency** — AST-aware file reads and search, “tactful extraction” over large files, and dynamic tool pruning to avoid API limits such as the 128-tool error.
- **Observability and self-awareness** — Sharing subagent trajectories via `/chat share`, including subagent context in bug reports, and better agent awareness of CLI flags and hotkeys.
- **Autonomous skill/subagent usage** — Users want Gemini to proactively use custom skills and subagents based on relevance, not only when explicitly instructed.

## Developer Pain Points

- **Subagent unreliability** — Hangs, false success reports, Wayland browser failures, and missing subagent context in diagnostics make automation and debugging difficult.
- **Terminal/process hangs** — Completed shell commands stuck in “Waiting input” and interactive scaffolding prompts (e.g., Vite) block longer-running workflows.
- **Context and workspace bloat** — Large file reads “firehose” tokens, models create temp scripts across arbitrary directories, and tool count limits trigger 400 errors.
- **Background memory extraction concerns** — Low-signal sessions are reprocessed indefinitely, and transcript content reaches model context before secret redaction.
- **Config friction** — Symlinked custom agents are ignored, and browser agent settings like `maxTurns` are not honored from `settings.json`.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-20

Source: [github/copilot-cli](https://github.com/github/copilot-cli)

## Today's Highlights

Three patch releases landed in the last 24 hours — v1.0.81-2, v1.0.81-3, and v1.0.81-4 — but no detailed changelog was published. Community attention is focused on a cluster of sandbox enforcement regressions and MCP OAuth/protocol breaks, especially [#4522](https://github.com/github/copilot-cli/issues/4522), [#4480](https://github.com/github/copilot-cli/issues/4480), and [#4527](https://github.com/github/copilot-cli/issues/4527). A long-running Linux clipboard regression ([#2082](https://github.com/github/copilot-cli/issues/2082)) also continues to draw significant community reaction.

## Releases

Three new versions were published in the last 24 hours:

- **v1.0.81-2** — *Fixes and changes*
- **v1.0.81-3** — *Fixes and changes*
- **v1.0.81-4** — *Fixes and changes*

No additional release notes were provided. The rapid patch cadence suggests ongoing stabilization work.

## Hot Issues

The most noteworthy issues updated in the last 24 hours:

- [**#4522 — Copilot CLI 1.0.81 forces sandbox while managed policy is undetermined**](https://github.com/github/copilot-cli/issues/4522)  
  Sandbox is enabled even when users explicitly set `"sandbox": { "enabled": false }`, no MDM settings exist, and managed policy is temporarily unresolved. Strong community reaction with 7 👍.

- [**#4480 — Atlassian MCP OAuth fails with "Incompatible authorization server" (RFC 8414 §3.3)**](https://github.com/github/copilot-cli/issues/4480)  
  Regression from 1.0.71 to 1.0.79: Atlassian remote MCP authentication fails during OAuth discovery. A follow-up, [#4490](https://github.com/github/copilot-cli/issues/4490), confirms the same failure on 1.0.80.

- [**#4527 — `copilot -p` fails with 401 on GHEC data residency since 1.0.81-1**](https://github.com/github/copilot-cli/issues/4527)  
  Non-interactive prompt mode on data-residency tenants fetches the model catalog from `api.githubcopilot.com` instead of the tenant endpoint. Interactive mode works with the same credentials.

- [**#4525 — 1.0.81-1 sends legacy `initialize` after successful modern `server/discover`**](https://github.com/github/copilot-cli/issues/4525)  
  MCP initialization against Python MCP SDK 2.0.0 stdio servers fails with `-32022` because the CLI mixes modern discovery with a legacy initialization handshake.

- [**#4524 — Sandbox won't let Copilot use git anymore**](https://github.com/github/copilot-cli/issues/4524)  
  The enforced-sandbox build is reportedly too restrictive on Windows: even after enabling the working directory and `~/.copilot`, git operations are blocked.

- [**#4521 — Sandbox cannot be disabled**](https://github.com/github/copilot-cli/issues/4521)  
  Config shows sandbox as disabled, but runtime sandbox status still shows enabled and execution continues to use the sandbox. 4 👍 from affected users.

- [**#4519 — 400 "Missing namespace for function_call" for deferred/tool-search tools**](https://github.com/github/copilot-cli/issues/4519)  
  On 1.0.80, tools discovered via deferred tool search intermittently fail with `CAPIError: 400 Missing namespace for function_call`.

- [**#4528 — Non-interactive sessions bypass `disableBypassPermissionsMode` managed setting**](https://github.com/github/copilot-cli/issues/4528)  
  `copilot -p --allow-all` / `--yolo` grants permissions even when managed settings disable bypass permissions mode. Potentially significant for enterprise security policy enforcement.

- [**#4390 — Enabled organization models missing from catalogue**](https://github.com/github/copilot-cli/issues/4390)  
  Models explicitly enabled by a Copilot Business org — including Claude Sonnet 5, Opus 5, and Kimi K3 — are missing from the CLI catalog. Closed, but with 15 comments and 7 👍.

- [**#2082 — `ctrl+shift+c` no longer copies to clipboard on Linux**](https://github.com/github/copilot-cli/issues/2082)  
  Long-standing regression on Linux terminals, affecting Ubuntu 24.04 users. Still one of the most-voted issue threads with 24 comments and 12 👍.

## Key PR Progress

No pull request activity was captured in the last 24 hours. The data source reported 0 PRs updated in this window.

## Feature Request Trends

- **Persistent user context**: Requests to preserve not just the selected model but also reasoning effort ([#4530](https://github.com/github/copilot-cli/issues/4530)) and to protect durable context across repeated compactions ([#4441](https://github.com/github/copilot-cli/issues/4441)).

- **Plugin marketplace discoverability**: Users want search/filter support in `copilot plugin marketplace browse` as marketplaces grow ([#4523](https://github.com/github/copilot-cli/issues/4523)).

- **Enterprise policy enforcement**: Demand for non-interactive modes to respect managed permission settings ([#4528](https://github.com/github/copilot-cli/issues/4528)), sandbox policy to respect explicit user config ([#4522](https://github.com/github/copilot-cli/issues/4522)), and accurate org-enabled model catalogs ([#4390](https://github.com/github/copilot-cli/issues/4390)).

- **MCP interoperability**: Recurring asks for stable OAuth discovery ([#4480](https://github.com/github/copilot-cli/issues/4480), [#4490](https://github.com/github/copilot-cli/issues/4490)), no forced `prompt=select_account` on non-Microsoft providers ([#4526](https://github.com/github/copilot-cli/issues/4526)), and consistent protocol handshakes ([#4525](https://github.com/github/copilot-cli/issues/4525)).

- **Terminal/input polish**: Continued interest in fixing Linux keyboard behavior, including clipboard shortcuts ([#2082](https://github.com/github/copilot-cli/issues/2082)), backspace word-deletion ([#4447](https://github.com/github/copilot-cli/issues/4447)), and dropped key events when panes are unfocused ([#4213](https://github.com/github/copilot-cli/issues/4213)).

## Developer Pain Points

- **Sandbox regressions are the top complaint**: Forced sandbox enablement ([#4522](https://github.com/github/copilot-cli/issues/4522)), inability to disable it ([#4521](https://github.com/github/copilot-cli/issues/4521)), git breakage ([#4524](https://github.com/github/copilot-cli/issues/4524)), and ignored RW path grants for JVM processes ([#4516](https://github.com/github/copilot-cli/issues/4516)) are causing real workflow disruption.

- **MCP churn across releases**: Multiple regressions around MCP OAuth and protocol negotiation appeared in rapid succession, forcing users to pin older CLI versions.

- **Enterprise/tenant-specific failures**: GHEC data-residency tenants and organizations with custom model enablement are seeing auth and catalog failures not reproducible in standard environments.

- **Non-interactive mode inconsistencies**: Prompt-mode behavior diverges from interactive mode for both auth ([#4527](https://github.com/github/copilot-cli/issues/4527)) and permission bypass controls ([#4528](https://github.com/github/copilot-cli/issues/4528)).

- **Linux terminal regressions persist**: Clipboard, backspace, and key-event handling issues remain unresolved for extended periods, making the CLI feel inconsistent across terminal environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-20

## Today's Highlights

No new releases landed in the last 24 hours, but contributor activity across V2 and the TUI remained high: fixes landed for plugin-tool validation, clipboard paste in form inputs, and provider-specific Gemini/Vertex continuation handling. The dominant community concern continues to be billing and quota transparency on OpenCode Go, with several new reports showing local usage meters diverging sharply from server-side quota consumption. The most-upvoted open issue, [#37852](https://github.com/anomalyco/opencode/issues/37852) (56 👍), keeps drawing attention to silent provider-stream failures that are recorded as clean stops.

## Hot Issues

- [#37852 — Aborted provider stream recorded as clean stop](https://github.com/anomalyco/opencode/issues/37852) — Open, 19 comments, 56 👍. A mid-generation provider disconnect is treated as a completed turn with zero usage and no error, producing empty subagent results. The high reaction count shows this silent-failure mode is a significant trust problem.
- [#41976 — Go plan quota exhausted in 6 days while client recorded only $14.80](https://github.com/anomalyco/opencode/issues/41976) — Open. Cache-read billing is invisible and undocumented, and the local cost meter is misleading users. Part of a large cluster of OpenCode Go billing/usage complaints.
- [#43416 — Usage-based billing doesn't match total subscription usage](https://github.com/anomalyco/opencode/issues/43416) — Open, new report. A subscriber sees roughly $9 of real usage but a $20 Go subscription charge, fueling confusion about how quota is calculated.
- [#43367 — gpt-5.6-sol-fast fails when prompt_cache_retention is injected](https://github.com/anomalyco/opencode/issues/43367) — Open, 10 👍. Unsupported provider options break subagent sessions after tool execution; a concrete V2 compatibility bug affecting review agents.
- [#43295 — Web UI V2 prompt controls overlap the send button](https://github.com/anomalyco/opencode/issues/43295) — Open. On narrow viewports, agent/model controls render over the submit button, making the compose area effectively unusable on smaller screens.
- [#3028 — Switch model for all agents](https://github.com/anomalyco/opencode/issues/3028) — Closed, 15 comments. Long-running request to switch the model for both plan and build modes at once; still a frequent workflow annoyance.
- [#25848 — Add session renaming](https://github.com/anomalyco/opencode/issues/25848) — Open, 13 comments. Users want manual session titles via `/rename` or CLI; a recurring session-management feature request.
- [#9296 — Plan mode handover uses plan agent's model](https://github.com/anomalyco/opencode/issues/9296) — Closed, 11 👍. Handover from plan to build incorrectly reused the plan agent’s model instead of the configured build model, causing unexpected provider usage.
- [#37047 — Compaction hallucinating project details](https://github.com/anomalyco/opencode/issues/37047) — Closed. After upgrading, compacted session summaries were completely fabricated. Serious correctness issue that erodes confidence in long-session memory.
- [#42089 — v2 provider HTTP 400 from Copilot restarts active session server](https://github.com/anomalyco/opencode/issues/42089) — Closed. GitHub Copilot rejecting a model restarts the session server, interrupting tool calls and requiring manual recovery.

## Key PR Progress

- [#43538 — feat: hot-reload skills, commands, agents and config on file change](https://github.com/anomalyco/opencode/pull/43538) — Adds opt-in hot reload behind `OPENCODE_EXPERIMENTAL_HOT_RELOAD=true`, watching global and `.opencode` config directories.
- [#43537 — feat(tui): show skills in slash autocomplete and group /skills dialog by source](https://github.com/anomalyco/opencode/pull/43537) — Closes remaining gaps in skill discovery: skills now appear in slash autocomplete and are grouped by source in the `/skills` dialog.
- [#43520 — feat(client): optimistic prompt admission with client-minted IDs](https://github.com/anomalyco/opencode/pull/43520) — Prompt sends render instantly and become idempotent via a client-minted inbox ID, with reconciliation through the durable echo.
- [#43535 — fix(core): cross-instance plugin tool schemas, null tool inputs, and TUI default-model display](https://github.com/anomalyco/opencode/pull/43535) — Fixes invalid plugin tool validation, rejects branded-ID inputs incorrectly, and resolves default-model display issues in the TUI.
- [#43528 — fix(tui): render commands as attachments](https://github.com/anomalyco/opencode/pull/43528) — Slash commands are now persisted as first-class command attachments instead of expanded user-facing prose.
- [#43526 — fix(tui): handle form clipboard shortcut](https://github.com/anomalyco/opencode/pull/43526) — `Ctrl+V` now pastes into the V2 TUI form and automatically opens “Type your own answer” when a choice is focused.
- [#43511 — fix: cross-spawn close event hang when grandchild inherits stdio](https://github.com/anomalyco/opencode/pull/43511) — On Windows, the `bash` tool no longer blocks until timeout when a spawned grandchild keeps the inherited stdout/stderr pipe open.
- [#43498 — fix(ai): preserve Vertex Anthropic tool continuations](https://github.com/anomalyco/opencode/pull/43498) — Works around Vertex returning HTTP 404 when a Claude tool continuation ends with a native system message after the local tool result.
- [#43479 — fix(ai): isolate Gemini function-response turns](https://github.com/anomalyco/opencode/pull/43479) — Prevents Gemini system updates from merging into the user turn containing a function response, satisfying Gemini’s turn-isolation requirements.
- [#43522 — fix: eliminate flaky CI races](https://github.com/anomalyco/opencode/pull/43522) — Stabilizes V2 CI by preventing duplicate plugin generations and isolating CLI subprocess tests from the developer’s real config and environment.

## Feature Request Trends

- **Session management and lifecycle**: Manual session renaming ([#25848](https://github.com/anomalyco/opencode/issues/25848)), viewed/unread session state ([#42811](https://github.com/anomalyco/opencode/pull/42811)), and optimistic prompt rendering ([#43520](https://github.com/anomalyco/opencode/pull/43520)) point to a strong desire for richer session UX.
- **Model/agent control**: Users want global model switching across agents ([#3028](https://github.com/anomalyco/opencode/issues/3028)), preserved per-agent model configuration across plan/build handover ([#9296](https://github.com/anomalyco/opencode/issues/9296)), and desktop keyboard shortcuts for agent switching ([#41742](https://github.com/anomalyco/opencode/issues/41742)).
- **Extensibility and configuration**: Hot reloading of skills/commands/agents/config ([#43538](https://github.com/anomalyco/opencode/pull/43538)), improved skill autocomplete/discovery ([#43537](https://github.com/anomalyco/opencode/pull/43537)), and server base-path support for reverse proxies ([#28326](https://github.com/anomalyco/opencode/pull/28326)) are frequent asks.
- **Responsive and accessible UI**: The V2 prompt composer overlap ([#43295](https://github.com/anomalyco/opencode/issues/43295)), configurable diff scrolling ([#43267](https://github.com/anomalyco/opencode/issues/43267)), and desktop approval notifications ([#43493](https://github.com/anomalyco/opencode/issues/43493)) show UI polish is a recurring request area.
- **Billing transparency**: Multiple issues ask for accurate local usage meters and visibility into cache-read billing on OpenCode Go ([#41976](https://github.com/anomalyco/opencode/issues/41976), [#43416](https://github.com/anomalyco/opencode/issues/43416), [#43387](https://github.com/anomalyco/opencode/issues/43387)).

## Developer Pain Points

- **OpenCode Go billing/quota confusion is the top recurring issue.** Users report exhausted weekly/monthly quotas while local meters show only a fraction of the consumption; cache-read billing is invisible and undocumented ([#41976](https://github.com/anomalyco/opencode/issues/41976), [#43416](https://github.com/anomalyco/opencode/issues/43416), [#43424](https://github.com/anomalyco/opencode/issues/43424), [#43387](https://github.com/anomalyco/opencode/issues/43387), [#43409](https://github.com/anomalyco/opencode/issues/43409)).
- **Silent provider failures are especially damaging.** Aborted streams are recorded as clean stops ([#37852](https://github.com/anomalyco/opencode/issues/37852)), provider 400 errors restart active sessions ([#42089](https://github.com/anomalyco/opencode/issues/42089)), and unsupported options break subagents ([#43367](https://github.com/anomalyco/opencode/issues/43367)).
- **V2 regression fatigue is building.** Users are hitting broken VSIX packages ([#41017](https://github.com/anomalyco/opencode/issues/41017)), lost prompts after TUI detach/reattach ([#36604](https://github.com/anomalyco/opencode/issues/36604)), massive temp-file disk usage ([#39876](https://github.com/anomalyco/opencode/issues/39876)), and MCP rate limits after idle periods ([#43530](https://github.com/anomalyco/opencode/issues/43530)).
- **Memory/correctness issues remain a concern.** Compaction has produced hallucinated session summaries ([#37047](https://github.com/anomalyco/opencode/issues/37047)), and provider-specific edge cases with Gemini and Vertex still require dedicated fixes ([#43479](https://github.com/anomalyco/opencode/pull/43479), [#43498](https://github.com/anomalyco/opencode/pull/43498)).
- **Cross-platform/process stability is still fragile.** Windows hangs from inherited stdio pipes ([#43511](https://github.com/anomalyco/opencode/pull/43511)), local MCP command EPIPE crash-loops ([#43257](https://github.com/anomalyco/opencode/issues/43257)), and desktop crash loops after backend reconnects ([#40755](https://github.com/anomalyco/opencode/issues/40755)) are all active sources of friction.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-20

## 1. Today's Highlights

Windows support remains the community's top focus, with a 31-comment survey gathering setup friction across WSL, Git Bash, and native terminals. A strong batch of correctness fixes landed: in-session model/thinking changes are now session-scoped by default ([#8356](https://github.com/earendil-works/pi/pull/8356)), OpenAI-compatible adapters got timeout, retry, and reasoning-detail fixes, and the extension event surface grew with slash-command events and UI-prompt hooks. Several model-catalog inaccuracies (glm-5.3, grok-build-0.1, opencode-go routes) were highlighted as breaking thinking-level selectors and requests outright.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

- [**#7547 — [Windows] How do you use Pi on Windows? What issues are you seeing?**](https://github.com/earendil-works/pi/issues/7547) — 31 comments. The de-facto Windows support thread. Users are surfacing the many ways Pi runs on Windows (native, WSL, Git Bash, MSYS2) so maintainers can decide what to support in-core vs. delegate. Community reaction is high; this is the central tracking issue for Windows friction.

- [**#5263 — Make in-session model and thinking-level changes ephemeral by default**](https://github.com/earendil-works/pi/issues/5263) — 11 comments, 13 👍. `/model` and thinking-level changes silently mutated global defaults, surprising users on next startup. The proposal (a "Default model" entry in `/settings`) was accepted; PR [#8356](https://github.com/earendil-works/pi/pull/8356) now implements it.

- [**#8323 — OpenAI client created with no timeout**](https://github.com/earendil-works/pi/issues/8323) — `createClient` falls back to the OpenAI SDK's 600s default, cutting off local models that think longer than ten minutes. Filed together with a cluster of related OpenAI-compat bugs (`streamSimple` drops `timeoutMs`, exact-limit truncation misclassified).

- [**#8322 — isRecoverableLength misses exact-limit truncation**](https://github.com/earendil-works/pi/issues/8322) — The check uses `usage.output < desiredMaxOutput`; when a model hits `max_output_tokens` exactly, recovery/retry logic incorrectly bails out. A one-character fix with real cost implications for long generations.

- [**#8328 — Threshold compaction never fires for zero-usage providers**](https://github.com/earendil-works/pi/issues/8328) — OpenAI-compatible providers that omit the final `usage` block cause threshold auto-compaction to silently never trigger, despite `stream_options: { include_usage: true }`. This can lead to unbounded context growth and token waste.

- [**#8336 — glm-5.3 zai catalog entry makes thinking levels a no-op**](https://github.com/earendil-works/pi/issues/8336) — The live catalog ships `"supportsReasoningEffort": false` and no `thinkingLevelMap`, making the off/minimal/low/medium/high selector cosmetic. Highlights a broader catalog-accuracy problem (see also #8206, #8358, #8381).

- [**#8206 — opencode-go: qwen3.6-plus and minimax-m2.7 cataloged as openai-completions but only served on /v1/messages**](https://github.com/earendil-works/pi/issues/8206) — Generated catalog routes point at the wrong endpoint for two models, causing hard request failures. In-progress label applied.

- [**#8349 — ExtensionContext cannot detect queued custom continuations**](https://github.com/earendil-works/pi/issues/8349) — An extension that queues a custom continuation during `agent_end` cannot detect it via `ExtensionContext`, breaking the recommended pattern for programmatic continuation. In-progress fix via PR #8346's session-repair work is related.

- [**#8362 — Cache miss with new model Muse Spark 1.2 Contributor**](https://github.com/earendil-works/pi/issues/8362) — Users report prompt cache not being hit on this model, while the same model on OpenCode works. Untriaged, but relevant to the broader cache-key discussion (see #8348).

- [**#8337 — UTF-8 BOM breaks frontmatter parsing and settings.json loading**](https://github.com/earendil-works/pi/issues/8337) — A leading U+FEFF silently breaks `extractFrontmatter` and settings loading on Windows editors that save with BOM. Quiet, but likely affects many Windows users.

## 4. Key PR Progress

- [**#8356 — fix(coding-agent): keep model and thinking level changes session scoped**](https://github.com/earendil-works/pi/pull/8356) — Implements the popular #5263: `/model`, thinking-level changes, and cycling no longer mutate global defaults; persistence happens only via explicit `/settings` actions.

- [**#8374 — fix(coding-agent): abort active run before forking from a user message**](https://github.com/earendil-works/pi/pull/8374) — Fixes a race where opening the fork selector during "stop gen" or a sleeping retry could fork while the agent run was still in-flight, corrupting session state.

- [**#8246 — feat(ai): openai-completions reasoning details round-trip**](https://github.com/earendil-works/pi/pull/8246) — Preserves signed `reasoning.text` / `reasoning.summary` entries from `delta.reasoning_details` so replayed assistant messages keep their reasoning content. Addresses #7994 from OpenRouter's 870-trial benchmark.

- [**#8361 — Add pi user-agent to most api adapters**](https://github.com/earendil-works/pi/pull/8361) — Adds Pi's default User-Agent to seven adapters (OpenAI, Anthropic, Azure, Google, Bedrock, Mistral). Closes #8305; helps providers with analytics and debugging.

- [**#8366 — feat: emit input event for built-in slash commands**](https://github.com/earendil-works/pi/pull/8366) — Built-in commands (`/share`, `/export`, `/settings`) previously executed with zero extension visibility. Now they emit the `input` event, closing a long-standing extension blind spot.

- [**#8355 — feat(extensions): ui prompt events**](https://github.com/earendil-works/pi/pull/8355) — Adds `ui_prompt_start` / `ui_prompt_end` events for `ctx.ui.select()`, `confirm()`, and `input()`, letting clients show "Waiting for user input" instead of "Agent working". Addresses #5329.

- [**#8302 — feat(ai): amazon bedrock mantle (WIP)**](https://github.com/earendil-works/pi/pull/8302) — Adds the Mantle API surface for models (mainly GPT-5.x) that Bedrock only serves via the new Responses-compatible endpoint; previously these failed with `Validation error`. Supersedes the older #6216.

- [**#8377 — fix(coding-agent): respect min-release-age when checking npm package updates**](https://github.com/earendil-works/pi/pull/8377) — Uses `npm view` raw `latest` dist-tag, which ignores the `min-release-age` cutoff; the "Package Updates Available" banner was recommending versions npm itself won't install.

- [**#8346 — fix(coding-agent): repair unterminated session tails**](https://github.com/earendil-works/pi/pull/8346) — Detects and repairs malformed/truncated JSONL session tails on load without altering read-only loads or fork sources. Fixes #8345 (and relates to the #8349 continuation issue).

- [**#8359 — fix: detect reasoning_content via proxy/gateway routes + guard content iteration**](https://github.com/earendil-works/pi/pull/8359) — `isDeepSeek` detection only matched `provider === "deepseek"` or `baseUrl.includes("deepseek.com")`, missing LiteLLM / opencode zen proxies. Now handles proxied DeepSeek routes that expose `reasoning_content`.

## 5. Hot Discussions

**Q&A**
- [**#3373 — Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?**](https://github.com/earendil-works/pi/discussions/3373) — 12 comments, 8 👍. A community favorites thread started in April that's still gathering recommendations; useful signal for the extension-ecosystem roadmap.

**Show and tell**
- [**#8090 — Your Pi extensions now have a second host: run them unmodified on DeepSeek Harness**](https://github.com/earendil-works/pi/discussions/8090) — 3 comments. [pi2dsh](https://github.com/weijiafu14/pi2dsh) is a compatibility engine that runs Pi ecosystem packages on DeepSeek Harness as-published on npm, with no fork or source modification — a notable step toward cross-harness extension portability.

## 6. Feature Request Trends

- **Windows-first polish** — The largest demand cluster: keybinding conflicts (Ctrl+Shift+F in Windows Terminal, #8183), native/WSL input handling (#8372), misleading errors (#7829), and a consolidated Windows experience (#7547).
- **Session-scoped + per-model configuration** — Strong desire to separate session, directory, and global state: ephemeral model changes (#5263), `--profile` isolation (#3966), configurable model-selection scope (#8376), and per-model compaction profiles (#8133).
- **Richer extension event surface** — Extensions want visibility into built-in commands (#8364), queued continuations (#8349), UI prompts (#8355), recovery exhaustion (#8317), and a shared request ID across provider lifecycle hooks (#8380).
- **Cache reuse across sessions/forks** — Forked sessions derive `prompt_cache_key` from session-id and miss the cache entirely (#8348); cache misses on specific models (#8362) are also being tracked.
- **Catalog accuracy and proxy awareness** — Routinely requested: correct endpoint routing (#8206), accurate `supportsReasoningEffort` flags (#8336), current model slugs (#8358), and reasoning detection through gateways (#8359).

## 7. Developer Pain Points

- **Windows settings.json pitfalls** — Unescaped backslashes in `shellPath` produce invalid JSON, but the failure surfaces as a misleading "bash not found" error (#7829). Combined with UTF-8 BOM breakage (#8337) and terminal keybinding conflicts (#8183), Windows onboarding remains rough.
- **Long-thinking local models get cut off** — The OpenAI SDK's default 600s timeout, combined with dropped `timeoutMs` in `streamSimple`, silently kills local-model generations over ten minutes (#8321, #8323).
- **Silent compaction failures** — Providers omitting `usage` blocks mean threshold compaction never fires (#8328), and exact-limit truncation is misclassified as unrecoverable (#8322) — both lead to surprising token spend.
- **In-session changes leak to global config** — Users repeatedly surprised that `/model` or thinking-level tweaks persist into future sessions (#5263); the fix is in, but this was a top source of confusion.
- **Stale catalogs break real workflows** — glm-5.3's thinking selector is decorative (#8336), grok-build-0.1 hard-400s on `reasoningEffort` (#8381), and opencode-go routes point at the wrong endpoint (#8206). Catalog drift is now a top correctness concern.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-20

## Today's Highlights

The stable release **v0.21.14** lands this cycle, led by a live-session registry and the new `qwen sessions ps` command for managing interactive sessions with JSON output. In parallel, the community is surfacing several high-severity fixes around OpenAI-compatible provider compatibility, model-switch token accounting, and CI runner wipe guards — while PRs are already open for most of these issues. Multi-agent coordination and context/compression reliability continue to dominate the developer experience conversation.

## Releases

**New in the last 24 hours:**

- **v0.21.14** — Stable release. Adds `qwen sessions ps` and a live-session registry for listing/managing running interactive sessions with JSON output.
- **v0.21.14-preview.0** — Includes the live-session registry and `qwen sessions ps`, plus daemon skill-toggle mutation metadata.
- **v0.21.11-nightly.20260819.d87b272aec** — Carries the same live-session registry and skill-toggle work.
- **Validation builds:**
  - `dsw-eas-net-smoke-20260819-r1` — SWE-bench Verified smoke: 1/1 resolved.
  - `dsw-eas-full-20260820-r1` / `dsw-eas-full-20260819-r1` — Full end-to-end SWE-bench Verified 500 and Terminal-Bench 2.0 89 validation against v0.21.14.

## Hot Issues

1. **[/effort max bricks the session on OpenAI-compatible providers](https://github.com/QwenLM/qwen-code/issues/9459)** — `clampReasoningEffort()` does not clamp `'max'`, so the UI offers a value every OpenAI-compatible provider rejects, and every later request in the session fails with 400. P1, ready-for-agent; 4 comments.

2. **[Model switches reuse prompt/output token counts from the previous route](https://github.com/QwenLM/qwen-code/issues/9454)** — `GeminiChat` retains the previous request's token counts after `/model` changes, distorting usage reporting. P1; 3 comments.

3. **[Hardened wipe guard wedges a runner whose workspace was replaced by a symlink](https://github.com/QwenLM/qwen-code/issues/9480)** — The fail-closed checkout-heal wipe guard from #9277 back-fires when a runner workspace is a symlink, halting CI. P1; 3 comments.

4. **[Persistent “update available” notification for Homebrew installs](https://github.com/QwenLM/qwen-code/issues/9493)** — Qwen Code shows an update banner on every startup when npm `latest` is newer than the Homebrew-installed version, even when Homebrew has no upgrade available. P2; 3 comments.

5. **[Slash command menu selection resets while a response is streaming](https://github.com/QwenLM/qwen-code/issues/9494)** — Highlighting a slash command jumps back to the first item during streaming because the suggestion search re-runs on unrelated `commandContext` rebuilds. P3 UI bug; 3 comments.

6. **[`task_list` falsely triggers duplicate tool-call loop detection](https://github.com/QwenLM/qwen-code/issues/9450)** — An Agent Team teammate was stopped with “duplicate tool-call loop detected” while repeatedly reading shared task state; identical `task_list` arguments do not imply identical results. P2; 4 comments.

7. **[Compression token accounting seems incorrect](https://github.com/QwenLM/qwen-code/issues/9309)** — After `/compress-fast` followed by `/compress`, reported context sizes are inconsistent and suspicious, raising worries about context integrity. 5 comments.

8. **[Lost context after `/compression-fast` and `/rewind`](https://github.com/QwenLM/qwen-code/issues/9320)** — Reproducing a compressed conversation in a new server loses earlier context, undermining compression reliability for long sessions. Closed; 5 comments.

9. **[/review presubmit overlap matching is exact-line only](https://github.com/QwenLM/qwen-code/issues/9219)** — Multi-line ranges and semantic duplicates pass as `noConflict`, allowing duplicate review findings. P2; 4 comments.

10. **[Deprecate Electron desktop app and rename `desktop-shell` to `desktop`](https://github.com/QwenLM/qwen-code/issues/8596)** — Platform direction: freeze the Electron package and let the Tauri shell take the `desktop` name. P2; 4 comments.

## Key PR Progress

1. **[fix(core): make loop detection result-aware for task_list polls](https://github.com/QwenLM/qwen-code/pull/9492)** — Prevents false “duplicate tool-call loop” stops for stateful read tools like `task_list`; directly addresses #9450.

2. **[fix(cli): suppress Homebrew update notification when brew has nothing newer](https://github.com/QwenLM/qwen-code/pull/9502)** — Queries local Homebrew metadata with a 5s timeout before showing the update prompt; targets #9493.

3. **[fix(cli): keep slash menu selection stable while a response streams](https://github.com/QwenLM/qwen-code/pull/9508)** — Reads `commandContext` through a ref inside the async completion callback so menu selection doesn't reset; fixes #9494.

4. **[fix(core): invalidate token counts recorded for a switched model route](https://github.com/QwenLM/qwen-code/pull/9506)** — Scopes GeminiChat token counts to the active route and invalidates them on `/model` changes; fixes #9454.

5. **[refactor: centralize cross-package contracts](https://github.com/QwenLM/qwen-code/pull/9497)** — Establishes single owners for the live-task tool-name contract and prompt-length contract, with CI enforcement against drift.

6. **[feat(core): add persistent Node REPL runtime](https://github.com/QwenLM/qwen-code/pull/9499)** — Adds a session-persistent Node.js REPL tool family with top-level await, cross-cell bindings, partial commits after failures, and structured output.

7. **[feat: agent board — share work across independently started agents](https://github.com/QwenLM/qwen-code/pull/9402)** — Filesystem-backed shared board for independently launched agents to coordinate work.

8. **[feat(channels): add DingTalk Workspace channel](https://github.com/QwenLM/qwen-code/pull/9394)** — Built-in DingTalk channel using DWS CLI profiles, supporting DMs, mentions, ambient groups, todos, and source-scoped sessions.

9. **[feat(scheduled-tasks): allow creating a task with an existing session](https://github.com/QwenLM/qwen-code/pull/9361)** — Scheduled-task creation can reuse an existing live, idle session after validation and duplicate-binding checks.

10. **[fix(web-shell): bound daemon transcript retention to stop renderer OOM crashes](https://github.com/QwenLM/qwen-code/pull/9303)** — Releases raw replay snapshots after injection and caps replay rebuilds to prevent browser memory exhaustion.

## Feature Request Trends

- **Read-only Advisor / second-opinion loops** — Multiple requests ask for an Advisor capability modeled on Claude Code, with structured guidance before major work and when progress stalls (#6542, #9036).
- **Session and daemon resource management** — Users want bounded multi-workspace daemon memory/bytes, live-session visibility, and stronger teardown/archive coordination (#8051, #9361, #9415).
- **Cross-agent collaboration** — Agent boards, shared task state, and better `task_list`/team semantics are a clear direction (#9402, #9450, #9431).
- **Automated review hardening** — The community is pushing `/review` toward range-aware overlap detection, contract documentation checks, and live-service witness validation (#9219, #9278, #9446, #9448).
- **Platform consolidation** — Tauri is the intended desktop future; the Electron shell should be deprecated and renamed (#8596).

## Developer Pain Points

- **Context/compression reliability** — Compression commands continue to produce confusing token counts and sometimes lose context, especially after `/rewind` or server resumption (#9309, #9320).
- **Provider compatibility traps** — OpenAI-compatible providers reject values the UI freely offers, e.g. `/effort max`, causing hard session failures (#9459).
- **Token accounting accuracy** — Model switches and incompatible routes leak stale prompt/output token counts, breaking usage dashboards and quota tracking (#9454, #7719).
- **Update/install UX friction** — Homebrew users are nagged daily about updates that don't exist on their package manager, eroding trust in the update system (#9493).
- **CI self-inflicted outages** — Hardened safety guards and review automation occasionally wedge runners or miss duplicates, adding maintenance burden (#9480, #9219, #9151).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-20

## Today's Highlights

CodeWhale is preparing **v0.9.10** as a 76-commit release lane focused on retention, identity, first-run, and durable approvals ([#5513](https://github.com/Hmbown/CodeWhale/pull/5513)), while the web team continues retiring locale-specific branching via the “dictionary spine” migration ([#5517](https://github.com/Hmbown/CodeWhale/pull/5517), [#5504](https://github.com/Hmbown/CodeWhale/pull/5504)). On the bug front, a v0.9.9 regression causes `max_tokens=384000` HTTP 400 failures ([#5516](https://github.com/Hmbown/CodeWhale/issues/5516)), and long-session users report premature emergency compaction on large DeepSeek V4 context windows ([#5518](https://github.com/Hmbown/CodeWhale/issues/5518)).

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. [#5518 — Emergency compaction triggers around ~85K–105K tokens on DeepSeek V4 despite 327,680-token route context](https://github.com/Hmbown/CodeWhale/issues/5518)  
   Reproducible early compaction in long-running coding sessions. Suspected causes include excessive output-headroom budgeting and handoff state contamination. Active diagnosis with 3 comments.

2. [#5516 — HTTP 400 max_tokens=384000 exceeds model limit after upgrading to v0.9.9](https://github.com/Hmbown/CodeWhale/issues/5516)  
   Critical upgrade regression: every request fails because CodeWhale sends `max_tokens=384000` while the route’s `max_model_len` is 262,144. No manual config involved; needs immediate maintainer attention.

3. [#5512 — Header status indicator (cw/whale/dots) never renders since 0.9.7](https://github.com/Hmbown/CodeWhale/issues/5512)  
   UI regression on Windows Terminal / PowerShell 7.6, reproduced on 0.9.8 and 0.9.9. The status indicator worked in the 0.8.64 era but is now invisible.

4. [#5519 — Web: the isZh migration is losing ground — add a one-way ceiling so it can converge](https://github.com/Hmbown/CodeWhale/issues/5519)  
   The number of files branching on `locale === "zh"` grew from 12 to 31 in 90 days. The migration is actively losing ground, highlighting the need for a convergence gate to prevent i18n debt from expanding.

5. [#5482 — EPIC(docs): review, partially restructure, and fully localize documentation to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482)  
   Large docs effort driven by CodeWhale’s growing Chinese user base. Tier 1 PR already landed in [#5507](https://github.com/Hmbown/CodeWhale/pull/5507), but much of `docs/` remains English-only or stale.

6. [#5472 — TUI memory retention: every Bash call’s full stdout/stderr is kept in memory for 1h](https://github.com/Hmbown/CodeWhale/issues/5472)  
   Read-only audit found in-process retention that compounds session memory pressure and matches the multi-GB swap behavior seen during the 0.9.9 dogfooding session.

7. [#5478 — TUI: /rename mid-turn leaves the in-flight shell tool row stuck at “running”](https://github.com/Hmbown/CodeWhale/issues/5478)  
   Repro: start a slow bash tool, run `/rename` while it is executing, and the tool row never updates even though the job completes. A state-sync bug in the v0.9.9 TUI.

8. [#5403 — main is red on both platforms across all four completed runs](https://github.com/Hmbown/CodeWhale/issues/5403)  
   After stopping cross-run cancellation, CI now reliably completes but fails on macOS `plugin_e2e_acceptance` and Windows NSIS provisioning. Cross-platform CI remains unstable.

9. [#5056 — Test reliability: flaky verifier background tests, /workspace-sensitive fixtures, 12 untriaged #[ignore] tests](https://github.com/Hmbown/CodeWhale/issues/5056)  
   Full-suite parallelism still exposes flaky verifier background tests. With 9 comments, this is one of the most-discussed issues in the window and is a blocker for trustworthy CI.

10. [#5360 — v0.9.8: make one-shot approval outcomes durable and fail-closed](https://github.com/Hmbown/CodeWhale/issues/5360)  
   Proposal to persist every approval request/decision to the session log and fail closed when persistence cannot be guaranteed. The behavior landed in [#5491](https://github.com/Hmbown/CodeWhale/pull/5491).

---

## Key PR Progress

1. [#5513 — release: Codewhale v0.9.10 — retention, identity, and durable approvals](https://github.com/Hmbown/CodeWhale/pull/5513)  
   The complete 76-commit v0.9.10 release lane, rebased over `main` and previously accepted community changes.

2. [#5515 — fix(tui): forward MCP image results as typed content](https://github.com/Hmbown/CodeWhale/pull/5515)  
   Converts standard MCP `image` content into CodeWhale’s provider-neutral rich tool-result block, removes inline base64 from the text receipt, and reuses existing image validation/limits.

3. [#5514 — refactor(tui): extract stream processing from turn loop](https://github.com/Hmbown/CodeWhale/pull/5514)  
   Splits the response-stream state machine out of `handle_deepseek_turn` into `process_stream`, keeping request timing and retry behavior intact.

4. [#5509 — fix(tui): restore /title as an independent terminal window title](https://github.com/Hmbown/CodeWhale/pull/5509)  
   Reverts the over-merge of `/title` and `/rename`; `/title` again controls only the terminal tab/window title, not the session name.

5. [#5511 — feat(tui): show repository context in git chrome](https://github.com/Hmbown/CodeWhale/pull/5511)  
   TUI header now displays `repo · branch*`, distinguishes linked worktrees, and keeps ahead/behind counts visible.

6. [#5506 — feat(tui): add command context adapters and migration gate (FEAT-015)](https://github.com/Hmbown/CodeWhale/pull/5506)  
   Builds TUI-owned dependency injection and migration infrastructure for safe, incremental slash-command extraction. Deliberately migrates zero production commands yet.

7. [#5491 — fix(tui): persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491)  
   Approval requests and terminal outcomes are written to a session-owned log before execution; stale decisions are rejected and interrupted approval state is reconstructed on resume. Closes [#5360](https://github.com/Hmbown/CodeWhale/issues/5360).

8. [#5504 — feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5504)  
   Removes 12+12 `isZh` branches from two docs pages and enforces key/token parity for zh through `check-locales.mjs`.

9. [#5517 — feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5517)  
   Phase 2 of the i18n migration: 14 `isZh` branches each reduced to zero using the same dictionary pattern established in [#5504](https://github.com/Hmbown/CodeWhale/pull/5504).

10. [#5507 — docs(i18n): complete Tier 1 of Chinese docs localization](https://github.com/Hmbown/CodeWhale/pull/5507)  
    Restructures the docs tree into per-language folders and moves existing translations into `docs/zh_hans/`, laying the foundation for the [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) localization epic.

---

## Feature Request Trends

- **Full i18n / Chinese localization**  
  The largest consistent direction is internationalization: web UI locale branching ([#5337](https://github.com/Hmbown/CodeWhale/issues/5337), [#5517](https://github.com/Hmbown/CodeWhale/pull/5517), [#5504](https://github.com/Hmbown/CodeWhale/pull/5504)) and Chinese documentation localization ([#5482](https://github.com/Hmbown/CodeWhale/issues/5482), [#5507](https://github.com/Hmbown/CodeWhale/pull/5507)).

- **Durable, auditable approval state**  
  Users and maintainers want approval outcomes written to disk before execution, with fail-closed behavior and correct reconstruction after session resume ([#5360](https://github.com/Hmbown/CodeWhale/issues/5360), [#5491](https://github.com/Hmbown/CodeWhale/pull/5491)).

- **Better context/token budget handling**  
  Large-context routes are hitting premature emergency compaction ([#5518](https://github.com/Hmbown/CodeWhale/issues/5518)), and a release regression broke all requests with oversized `max_tokens` ([#5516](https://github.com/Hmbown/CodeWhale/issues/5516)).

- **TUI identity and workspace clarity**  
  Users want clearer terminal/session identity and repository context: independent `/title` ([#5509](https://github.com/Hmbown/CodeWhale/pull/5509)), git chrome repo/worktree display ([#5511](https://github.com/Hmbown/CodeWhale/pull/5511)), and a working status indicator ([#5512](https://github.com/Hmbown/CodeWhale/issues/5512)).

- **Richer tool/MCP result handling**  
  MCP image results should flow through CodeWhale’s native typed tool-result blocks rather than inline base64 text ([#5515](https://github.com/Hmbown/CodeWhale/pull/5515)).

---

## Developer Pain Points

- **Upgrade regressions hit users immediately**  
  v0.9.9 introduced a request-breaking `max_tokens` issue ([#5516](https://github.com/Hmbown/CodeWhale/issues/5516)) and a status-indicator regression ([#5512](https://github.com/Hmbown/CodeWhale/issues/5512)).

- **Long-session memory and state fragility**  
  Bash output retained in memory for an hour ([#5472](https://github.com/Hmbown/CodeWhale/issues/5472)) and `/rename` desyncing in-flight tool rows ([#5478](https://github.com/Hmbown/CodeWhale/issues/5478)) make extended dogfooding sessions painful.

- **CI/test reliability is still a blocker**  
  Both macOS and Windows CI runs are red ([#5403](https://github.com/Hmbown/CodeWhale/issues/5403)), while flaky verifier background tests and workspace-sensitive fixtures keep full-suite parallelism unreliable ([#5056](https://github.com/Hmbown/CodeWhale/issues/5056)).

- **i18n debt is increasing, not converging**  
  The number of `isZh` branches in the web codebase continues to grow ([#5519](https://github.com/Hmbown/CodeWhale/issues/5519)), and Chinese-language documentation remains incomplete ([#5482](https://github.com/Hmbown/CodeWhale/issues/5482)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*