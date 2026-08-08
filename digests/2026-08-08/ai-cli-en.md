# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 00:46 UTC | Tools covered: 10

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
**Date:** 2026-08-08 | **Scope:** 9 active tools, 24-hour community digest

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is bifurcating into two tracks: **enterprise-grade agent platforms** (Claude Code, OpenAI Codex, Gemini CLI) investing in hosted/self-hosted environments, plugin ecosystems, and compliance controls, and **community-driven developer tools** (OpenCode, Pi, Qwen Code, DeepSeek TUI) racing on UX polish, provider breadth, and open-source momentum. A pervasive theme across all nine active tools is **session lifecycle reliability** — compaction failures, resume crashes, stale state, and missing persistent memory dominate issue trackers regardless of vendor. Security incidents are also escalating: this cycle alone surfaced an SSRF fix (Gemini), a destructive `rm -rf` in yolo mode (Kimi), YAML injection/symlink credential overwrites (Claude), and ExecPolicy bypasses (DeepSeek). MCP interoperability and lifecycle management remain the ecosystem's most fragile integration point, with memory leaks, zombie processes, and namespace-serialization incompatibilities reported across four major tools simultaneously. The overall picture: feature velocity is high, but **agent reliability and trust boundaries are the industry's gating bottleneck**.

---

## 2. Activity Comparison

Counts reflect noteworthy items surfaced in the 24-hour digest (not total tracker volume).

| Tool | Hot Issues | Key PRs | Release Status |
|---|---|---|---|
| **Claude Code** | 10 | 3 | ✅ Released v2.1.224 (self-hosted runners, archive plugins) |
| **OpenAI Codex** | 10 | 10 | ✅ Released v0.147.0 + 3 pre-release alphas toward 0.148.0 |
| **Gemini CLI** | 10 | 10 | ✅ Released v0.54.4, v0.55.0-preview.2, nightly |
| **Copilot CLI** | 10 | 0 | ✅ Released 3 patches (v1.0.79-7/8/9) — release-only cycle |
| **Kimi Code** | 3 | 2 | ⚠️ No release; focused on data-integrity fix |
| **OpenCode** | 10 | 10 | ✅ Released v1.18.15 (message ordering, truncation fixes) |
| **Pi** | 10 | 10 | ✅ Released v0.84.1 (but Node 23 startup regression) |
| **Qwen Code** | 10 | 10 | ✅ Nightly v0.21.7 (CI fix only) |
| **DeepSeek TUI** | 10 | 10 | ❌ No release; v0.9.4 blocked by 4 CI blockers |
| **Grok Build** | 0 | 0 | ⚪ No activity in 24h |

**Aggregate:** ~83 hot issues, ~65 PRs, 7 shipping tools — a high-velocity day, with Codex, Gemini, OpenCode, Pi, and Qwen all moving 10+ PRs simultaneously.

---

## 3. Shared Feature Directions

Recurring requirements appearing across multiple tool communities:

| Direction | Tools | Specific Needs |
|---|---|---|
| **Session continuity & lifecycle control** | Claude Code (#13354), Gemini (#22323), OpenCode (#41106), Pi (#6879, #7020), DeepSeek (#2934) | Auto-continue past limits; proper MAX_TURNS semantics; compaction that triggers *before* provider rejections; queued messages instead of cancellation; persistent session sidebar |
| **Cross-session memory** | Kimi (#1283), DeepSeek (#2492), Qwen (#6487), Gemini (#26522, #26525) | Automatic + manual memory layers; deterministic redaction before sending transcripts to models; stale-index refresh; memory survival across compaction |
| **Plugin/skills organization** | Copilot (#1632), Claude (#14920), OpenCode (#38853), Pi (#7776) | Nested skill folders; per-skill enable/disable; Agent Plugins spec support; plugin security hardening |
| **MCP lifecycle & compatibility** | Codex (#12491, #26234), Copilot (#4392), Qwen (#8550), Gemini (#24246) | Reaping child processes; namespace flattening for non-OpenAI providers; timeout on non-compliant SSE servers; tool-count ceilings (~128) |
| **Background/autonomous agents** | Claude (#78487), Codex (#37445), OpenCode (#40923), DeepSeek (#5123) | Permission-prompt timeouts; silent background work consuming quota; native background subagent orchestration; read-only label mismatches |
| **Provider/model flexibility** | Codex (#37425), OpenCode (#40409), Pi (#7762, #6216), Qwen (#8526) | LiteLLM streaming fixes; correct model identity/versioning; LM Studio + Bedrock Mantle providers; standard reasoning-effort selectors |
| **Windows & terminal reliability** | Codex (#10090, #37043), Copilot (#3622), Qwen (#8625), OpenCode (#6560), Claude (#77208) | Sandbox process spawning; clipboard paste; CJK input rendering; TUI flicker/tearing |
| **Billing/usage transparency** | OpenCode (#38257, #41146), Copilot (#2947), Claude (#84949) | Per-session token reporting; accurate quota accounting; device/session info visibility |

---

## 4. Differentiation Analysis

| Tool | Distinctive Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise managed environments, Remote Control, plugin ecosystem | Team/Enterprise customers; ops-heavy workflows | Self-hosted runners for web/mobile/desktop; archive plugin source (HTTPS zip); strict plugin security review |
| **OpenAI Codex** | Desktop app + CLI convergence; code-mode gRPC; sandboxing | ChatGPT/OpenAI platform users; enterprise | Rust core, gRPC protocol for code-mode; MCP event subscriptions; automatic review enforcement for managed models |
| **Gemini CLI** | Internal eval infrastructure (Caretaker); memory system; web-fetch tooling | Google ecosystem developers; eval-driven teams | LLM-as-a-Judge triage evals; prompt hill-climbing; sandbox Docker hardening |
| **Copilot CLI** | GitHub-centric; enterprise sandbox policy; skills/.agents ecosystem | GitHub users; enterprise with compliance needs | Policy-controlled sandbox (`allow-auto-only`); Agent Plugins extension directory; combined `--plan` + `--mode autopilot` |
| **Kimi Code** | Small, focused agent core; data integrity | Moonshot API users; lightweight workflows | Minimal issue surface; rapid community PR response (2 fixes in 48h for one bug) |
| **OpenCode** | OpenCode Go managed service; TUI + web app; provider-agnostic | Cost-sensitive individual devs; BYO-provider users | Modal sandbox driver; Synthetic web search backend; Mermaid rendering in TUI |
| **Pi** | TUI excellence; provider breadth; harness-v2 architecture | Daily-driver TUI enthusiasts; local/alt providers | LM Studio + Bedrock Mantle + Cursor CLI bridge; lazy syntax grammar loading; recovery-state refactor |
| **Qwen Code** | Web Shell as desktop surface; ACP/OpenTelemetry alignment; Chinese ecosystem | Alibaba/China ecosystem; WebShell-first users | tmux-backed interactive terminals; fullscreen artifact panels; DingTalk/Feishu channel integrations |
| **DeepSeek TUI** | Rust codebase; mixed-model fleets; security policy engine | Rust-friendly power users; DeepSeek model fleets | ExecPolicy deny rules; per-role model pinning; `model = auto` prompt-based tier selection |

---

## 5. Community Momentum & Maturity

**Enterprise-mature (high issue volume, structured releases, compliance focus):**
- **Claude Code** — Most commercially focused, with the highest-reacted single feature request (#13354, 191 👍). Release cadence is deliberate, but community demand for session control and plugin granularity is strong.
- **OpenAI Codex** — Fastest release cadence (4 releases + 10 PRs/day), with visible investment in protocol-level infrastructure (gRPC, MCP events). Community is actively stress-testing sandboxing and Windows paths.

**Rapidly iterating (shipping daily, broad PR surface):**
- **Gemini CLI** — Unusual investment in internal eval tooling (Caretaker, eval suites) signals maturity, but agent-hang and permission-regression issues suggest core reliability lags feature work.
- **OpenCode** — High community engagement driven by billing controversy (45-comment thread on 401s). 10 PRs/day across TUI, web app, and server. Billing trust is the key risk.
- **Pi** — Deep architectural investment (harness-v2, recovery-state refactor) with a passionate daily-driver user base. Compaction and long-session reliability are the top pain points.
- **Qwen Code** — Steady nightly cadence; Web Shell/desktop convergence is ambitious. Terminal rendering and Windows install issues are dragging UX.

**Community/niche:**
- **Copilot CLI** — Release-only cycle (0 PRs) but 3 patches shipped. Enterprise policy controls are differentiating, yet Windows and auth regressions accumulate.
- **DeepSeek TUI** — Actively working through release blockers; 10 PRs show energy, but v0.9.4 is held by CI and architecture debt (464 dead-code attributes, 18 Rust packages).
- **Kimi Code** — Smallest surface (3 issues), but the two competing PRs for the UTF-8 corruption fix show a responsive, engaged contributor base.
- **Grok Build** — Inactive; no signal to assess.

**Maturity takeaway:** Claude Code and Codex lead on platform completeness; Gemini and OpenCode have the most active *community feedback loops*; Pi and DeepSeek have the deepest *open-source architectural investment* relative to their size.

---

## 6. Trend Signals

1. **Agent autonomy is colliding with safety boundaries.** The Kimi `rm -rf` data-loss incident, DeepSeek's ExecPolicy bypass via `&` chains, Codex's elevated-sandbox failures, and Claude's unattended-agent permission stalls all point to the same conclusion: **permission systems are the new security perimeter, and they are not yet trustworthy.** Expect a wave of investment in operation verification, deterministic policy enforcement, and auto-deny/idle timeouts.

2. **Memory is the next competitive battleground.** Kimi, DeepSeek, Qwen, and Gemini all have open memory-system requests. The differentiation will shift from *whether* agents remember to *how safely* — deterministic redaction (#26525), quarantine of invalid patches (#26523), and stale-index handling are the early signals.

3. **MCP compatibility is table stakes, but lifecycle management is unsolved.** Zombie processes, orphaned stdio, namespace-serialization failures on non-OpenAI providers, and tool-count ceilings are affecting four major tools simultaneously. This is the ecosystem's clearest **infrastructure debt** — expect standardization pressure on MCP server lifecycle and cross-provider tool serialization.

4. **Cross-provider model support is fragile.** LiteLLM regressions (Codex), DeepSeek model identity mismatches (OpenCode), `reasoning_content` protocol errors (Pi, OpenCode), and `cache_control` failures (Copilot) show that provider abstraction layers break in production. Tools that invest in **conformance testing across providers** will differentiate.

5. **Windows remains the universal weak spot.** Every tool with Windows users reported Windows-specific regressions this cycle — sandbox spawning, clipboard, pinyin rendering, installer hash failures, notification crashes. This is a **consistent competitive opportunity** for any tool that gets Windows reliability right.

6. **Compaction and context management are the new performance bottleneck.** Pi's auto-compaction failure (373k-token provider rejection), Claude's session-limit requests, Qwen's memory loss on compaction, and DeepSeek's broken plans on large text workloads all describe the same problem: **context window economics are mismanaged by current tools.** Proactive compaction before hard limits, and preserving memory across compaction, are high-leverage features.

7. **Billing transparency is becoming a trust issue for managed services.** OpenCode's 401 blocks, unexplained quota exhaustion, and zero-balance-after-payment reports — combined with Codex's silent background limit consumption — indicate that **usage visibility (per-session tokens, background activity accounting) is a requirement, not a nicety.**

8. **TUI/terminal UX is being re-evaluated.** Mermaid rendering in the terminal (OpenCode), tmux-backed interactive terminals (Qwen), sticky prompt headers (Pi), and incremental markdown parsing all signal a shift from "TUI as thin client" to **terminal as a first-class rich UI surface**.

---

*Report compiled from 2026-08-08 community digest data across Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI, and Grok Build.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
**Source:** github.com/anthropics/skills | **Data as of:** 2026-08-08

## 1. Top Skills Ranking

Most-discussed PRs by community attention and cross-referenced issue activity:

1. **skill-creator eval reliability fixes — [#1298](https://github.com/anthropics/skills/pull/1298)**
   - **What:** Fixes `run_eval.py`/`run_loop.py` reporting `recall=0%` for every skill description; addresses eval artifact installation, Windows stream reading, trigger detection, and parallel workers.
   - **Discussion:** Directly targets the widely reported `recall=0%` failure ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)). Seen as critical to making skill description optimization trustworthy.
   - **Status:** Open

2. **document-typography skill — [#514](https://github.com/anthropics/skills/pull/514)**
   - **What:** Adds typographic quality control for generated documents: orphan words, widow paragraphs, and numbering misalignment.
   - **Discussion:** Community interest in “polish” behaviors that apply across every AI-generated document.
   - **Status:** Open

3. **ODT/OpenDocument skill — [#486](https://github.com/anthropics/skills/pull/486)**
   - **What:** Supports creating, filling, reading, and converting `.odt`/`.ods`/ODF files, including LibreOffice-related triggers.
   - **Discussion:** Extends the document-format family beyond DOCX/PDF; helpful for open-source/ISO-standard workflows.
   - **Status:** Open

4. **frontend-design skill clarification — [#210](https://github.com/anthropics/skills/pull/210)**
   - **What:** Revises the `frontend-design` skill for clarity, actionability, and instructions Claude can execute in a single conversation.
   - **Discussion:** Community emphasis on skills being operational rather than conceptual.
   - **Status:** Open

5. **PDF case-sensitivity fix — [#538](https://github.com/anthropics/skills/pull/538)**
   - **What:** Corrects case mismatches (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) in `skills/pdf/SKILL.md`.
   - **Discussion:** Important for Linux/macOS users on case-sensitive filesystems where the PDF skill was broken.
   - **Status:** Open

6. **Meta quality/security analyzers — [#83](https://github.com/anthropics/skills/pull/83)**
   - **What:** Proposes `skill-quality-analyzer` and `skill-security-analyzer` meta skills for evaluating skills across structure, documentation, and security dimensions.
   - **Discussion:** Aligns with community concerns about skill trust and quality in the marketplace.
   - **Status:** Open

7. **DOCX tracked-change ID fix — [#541](https://github.com/anthropics/skills/pull/541)**
   - **What:** Prevents `w:id` collisions between tracked changes and existing bookmarks, avoiding document corruption.
   - **Discussion:** Root-cause fix in OOXML shared ID space; relevant to enterprise DOCX workflows.
   - **Status:** Open

8. **skill-creator YAML validation — [#539](https://github.com/anthropics/skills/pull/539)**
   - **What:** Adds pre-parse validation for unquoted `description` fields containing YAML special characters.
   - **Discussion:** Prevents silent truncation/misparsing of skill descriptions, a common failure when authoring skills.
   - **Status:** Open

## 2. Community Demand Trends

From Issues, the community is most actively requesting:

- **Skill security & trust boundaries**
  - [#492](https://github.com/anthropics/skills/issues/492) — 43 comments: community skills under the `anthropic/` namespace enable trust-boundary abuse.
  - [#1175](https://github.com/anthropics/skills/issues/1175) — security concerns around SharePoint document handling.

- **Enterprise sharing & administration**
  - [#228](https://github.com/anthropics/skills/issues/228) — org-wide skill sharing directly in Claude.ai, avoiding manual file transfers.

- **Skill tooling reliability**
  - [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 0% trigger rate, blocking skill-description optimization.
  - [#1169](https://github.com/anthropics/skills/issues/1169) — same `recall=0%` loop issue with slash-command queries.
  - [#202](https://github.com/anthropics/skills/issues/202) — `skill-creator` should be rewritten as an operational skill, not developer documentation.

- **Context-window efficiency**
  - [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill eagerly injects ~156k tokens, exhausting the context window.

- **Agent memory & governance**
  - [#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory skill for symbolic agent state representation.
  - [#412](https://github.com/anthropics/skills/issues/412) — agent-governance skill for safety patterns, policy enforcement, and audit trails.

## 3. High-Potential Pending Skills

Open PRs with substantive scope and recent activity; likely candidates to land next:

- **self-audit skill — [#1367](https://github.com/anthropics/skills/pull/1367)**
  - Mechanical file verification plus four-dimension reasoning audit before delivery.
  - Status: Open; updated 2026-07-02.

- **plan-file-hygiene skill — [#1479](https://github.com/anthropics/skills/pull/1479)**
  - Lifecycle management for planning artifacts; addresses accumulation of stale plans.
  - Status: Open; updated 2026-07-27.

- **color-expert skill — [#1302](https://github.com/anthropics/skills/pull/1302)**
  - Self-contained color knowledge: naming systems, color spaces, and “what to use when” guidance.
  - Status: Open; updated 2026-07-21.

- **pyxel retro game development skill — [#525](https://github.com/anthropics/skills/pull/525)**
  - Workflow for pixel-art/8-bit game creation using `pyxel-mcp`.
  - Status: Open; updated 2026-07-15.

- **testing-patterns skill — [#723](https://github.com/anthropics/skills/pull/723)**
  - Full testing-stack guidance: unit testing, React component testing, testing philosophy, and anti-patterns.
  - Status: Open; updated 2026-04-21.

- **SAP-RPT-1-OSS predictor skill — [#181](https://github.com/anthropics/skills/pull/181)**
  - Predictive analytics on SAP business data using SAP’s open-source tabular foundation model.
  - Status: Open; updated 2026-03-16.

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not for more creative skills, but for **trustworthy, reliable, and context-efficient skill infrastructure** — with the `skill-creator` evaluation pipeline, security/namespace trust, and context-window bloat emerging as the top friction points.

---

# Claude Code Community Digest — 2026-08-08

## Today's Highlights

Anthropic shipped **v2.1.224**, introducing self-hosted environments (`claude self-hosted-runner`) for Team/Enterprise users and a new `archive` plugin source for HTTPS zip installs. The community is heavily focused on session continuity workflow (#13354) and Remote Control environment lifecycle management, while a Fable 5 display bug and a KVM-specific livelock stand out as the most consequential regressions this cycle.

## Releases

- **[v2.1.224](https://github.com/anthropics/claude-code/releases)**  
  - Added self-hosted environments: `claude self-hosted-runner` lets Team/Enterprise customers run Claude Code web, mobile, and desktop sessions on their own machines or containers.  
  - Added `archive` plugin source: install plugins from a zip over HTTPS without a Git repository.

## Hot Issues

- **[#13354 – Continue when the session limit reached](https://github.com/anthropics/claude-code/issues/13354)** — Highly requested feature (73 comments, 191 👍) to automatically continue or extend sessions rather than stop at the limit.
- **[#14920 – Add ability to disable individual Claude plugin skills](https://github.com/anthropics/claude-code/issues/14920)** — Users want per-skill control (e.g., disable `commit-push-pr` while keeping `commit`), with 83 👍 signaling broad demand.
- **[#50884 – Remove stale/dead Remote Control environments from claude.ai/code list](https://github.com/anthropics/claude-code/issues/50884)** — Gains urgency with self-hosted environments; users need a way to clean up dead entries (26 👍).
- **[#81853 – Fable 5: text in a response that also contains tool calls is never displayed](https://github.com/anthropics/claude-code/issues/81853)** — Assistant text is hidden in the TUI when paired with tool calls, breaking normal visibility even though transcript data is intact.
- **[#72495 – Prompt suggestions silently suppressed when rate-limit status is allowed_warning](https://github.com/anthropics/claude-code/issues/72495)** — A strict-equality gate in the shipped binary causes suggestions to disappear without user action; includes a live reproduction and analysis.
- **[#77372 – Remote Control: stale environments cannot be deleted and ghost sessions cause permanent 404 errors](https://github.com/anthropics/claude-code/issues/77372)** — Environment registration/unregistration is unreliable, with different session IDs on fresh environments leading to worker-attach failures.
- **[#77208 – Claude Code ≥ 2.1.205 livelocks at 100% CPU on KVM guests with generic CPU model](https://github.com/anthropics/claude-code/issues/77208)** — Even `--version` hangs; silently breaks the Linux desktop beta on kvm64 virtual machines.
- **[#82179 – Bash-tool `grep` shim catastrophic backtracking: 6.6 GB RSS / OOM on a 20 KB file](https://github.com/anthropics/claude-code/issues/82179)** — The ugrep emulation embedded in the Bash tool can explode memory usage on certain `-o` + alternation patterns.
- **[#78487 – Workflow/background-spawned agents block indefinitely on unanswered permission prompts](https://github.com/anthropics/claude-code/issues/78487)** — No auto-deny, timeout, or idle watchdog; a reported 55-minute silent stall makes unattended agents fragile.
- **[#84961 – Support pasting images directly from clipboard in Claude Code input](https://github.com/anthropics/claude-code/issues/84961)** — New request to eliminate save-to-disk friction for screenshots; zero comments yet but addresses a common workflow gap.

## Key PR Progress

Only three PRs were updated in the last 24 hours, all open and focused on documentation and plugin security hardening.

- **[#84854 – docs: fix stale hooks documentation link in bash_command_validator_example.py](https://github.com/anthropics/claude-code/pull/84854)** — Updates the example hook script to use the current `code.claude.com` docs URL, matching the other 46 doc links in the repo.
- **[#84747 – fix(hookify): enforce proper rule evaluation scope and secure file read](https://github.com/anthropics/claude-code/pull/84747)** — Prevents tools like `Read` and `Browser` from incorrectly triggering event-specific rules when the event is `None`; confines them to `all`-scoped rules.
- **[#84711 – fix(security): address yaml injection and symlink credential overwrites in plugin scripts](https://github.com/anthropics/claude-code/pull/84711)** — Fixes #76580 by adding defensive checks against YAML injection and symlink-based credential overwrites in plugin scripts.

## Feature Request Trends

- **Session lifecycle control** — Requests for continuing past session limits (#13354), renaming session titles (#51791), and richer session metadata indicate users want more ownership over session state.
- **Plugin granularity and transparency** — Disabling individual plugin skills (#14920) and documenting silent dependency installation (#84939) point to a maturing plugin ecosystem needing finer controls.
- **Remote environment management** — Cleaning up stale/dead Remote Control environments (#50884) and fixing ghost session 404s (#77372) are top-of-mind as self-hosted runners roll out.
- **Input ergonomics** — Clipboard image paste (#84961), device/session info on the token page (#84949), and higher `/goal` limits (#84953) reflect daily UX friction.
- **Autonomous mode hardening** — Permission prompt timeouts (#78487), silent background task kills (#84625), and connector attachment for spawned sessions (#83694) are shaping the roadmap for background agents.

## Developer Pain Points

- **Remote/self-hosted environment reliability** — Stale environments, ghost sessions, and permanent 404s dominate Remote Control complaints.
- **Background agent fragility** — Unanswered permission prompts, silently killed Bash tasks, and missing connectors in spawned sessions undermine unattended workflows.
- **Platform-specific breakage** — KVM livelocks, Windows desktop crashes, Intel GPU MSIX crashes, and iOS Remote Control stack overflows show cross-platform gaps.
- **Network/rate-limit quirks** — ECONNRESET during streams and suppressed prompt suggestions from client-derived status confuse users debugging intermittent behavior.
- **Plugin security side effects** — YAML injection, symlink credential overwrites, and undocumented `bun install`/`npm ci` execution raise trust concerns in the plugin ecosystem.
- **Model-related rendering and reliability** — Fable 5 text/tool-call display issues and reports of long-running agent pipelines stalling add uncertainty for teams evaluating newer models.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

## Today’s Highlights
The big story is the **v0.147.0 release**, which brings portable Agent Plugins and searchable plugin catalogs, plus persistent, manually ordered conversation sections for long sessions. On the issue tracker, the community spotlight is on a worrying cluster of **Windows sandbox/Computer Use failures**, **MCP process leaks**, and a **regression that breaks LiteLLM streaming**. Several infrastructure PRs also landed around code-mode gRPC, MCP event subscriptions, and diagnostics hardening.

## Releases
- [rust-v0.147.0](https://github.com/openai/codex/releases/tag/rust-v0.147.0)  
  - **Portable Agent Plugins**: install plugins and search across local, personal, workspace, and remote catalogs.  
  - **Conversation organization**: persistent, manually ordered sections plus incremental browsing of long transcripts.  
- Pre-release alphas toward **0.148.0** were also published: [0.148.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.1), [0.148.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.2), and [0.148.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.4). No detailed changelog notes were included in the source data.

## Hot Issues
Top 10 noteworthy issues from the last 24 hours:

1. [Issue #12491 — Codex.app GUI: MCP child processes not reaped after task completion](https://github.com/openai/codex/issues/12491)  
   A long-running, closed, yet highly visible issue: **1300+ zombie processes and 37GB memory leak**. The community reaction remains strong because MCP lifecycle management is critical for long-lived desktop workflows.

2. [Issue #26234 — Flatten MCP namespace tools for non-OpenAI Responses API providers](https://github.com/openai/codex/issues/26234)  
   MCP tools are serialized as `{"type": "namespace", ...}` and never become callable on Ollama, LM Studio, OpenRouter, or AWS Bedrock. With 41 👍 this is one of the most requested compatibility fixes.

3. [Issue #35481 — Codex Diff shows “Oops, an error has occurred” in VS Code](https://github.com/openai/codex/issues/35481)  
   Closed but received 54 👍. The Codex Diff view fails on Windows VS Code, making review workflows unreliable for Windows users.

4. [Issue #10090 — `elevated_windows_sandbox` causes all agent commands to fail with `CreateProcessAsUserW failed: 5`](https://github.com/openai/codex/issues/10090)  
   Every command returns `(no output)` in elevated sandbox mode. This continues to be a major blocker for Windows users relying on stronger sandboxing.

5. [Issue #14599 — Allow `trust_level = "trusted"` for any projects](https://github.com/openai/codex/issues/14599)  
   The highest-reaction open feature request this cycle at 57 👍. Developers want a persistent, configurable way to skip repeated project trust prompts.

6. [Issue #37043 — Windows Computer Use fails at EnumWindows with 0x80070003](https://github.com/openai/codex/issues/37043)  
   Both `sky.list_apps()` and `sky.list_windows()` fail immediately. Computer Use on Windows remains under heavy community scrutiny.

7. [Issue #37425 — Regression in v0.147.0 with LiteLLM provider: streaming requests consistently fail](https://github.com/openai/codex/issues/37425)  
   Upgrade from v0.146.0 to v0.147.0 broke streaming for custom LiteLLM providers. Important because custom-model support is a common enterprise integration path.

8. [Issue #37445 — Opening the ChatGPT desktop app silently consumes the Codex weekly limit](https://github.com/openai/codex/issues/37445)  
   Background suggestion runs consume a fixed 6% of the weekly window even without user prompts. This is a serious rate-limit/resource-governance concern.

9. [Issue #36523 — macOS app OOM-crashes at startup: external-agent-import parses 1.73GB from Claude Desktop](https://github.com/openai/codex/issues/36523)  
   A P0 regression causing V8 heap OOM at every launch. Importing external agent history can crash the app before users can interact.

10. [Issue #29908 — `apply_patch` and managed sandbox fail with Bubblewrap loopback/userns errors on Ubuntu 24.04](https://github.com/openai/codex/issues/29908)  
    Sandboxed commands fail before execution under Bubblewrap on newer Ubuntu kernels. Linux sandbox reliability is still an open pain point.

## Key PR Progress
Ten important PRs updated in the last 24 hours:

1. [PR #37494 — Add MCP event discovery and subscriptions](https://github.com/openai/codex/pull/37494)  
   Adds `McpResourceClient::list_events` and cancellable `events/stream` subscriptions for plugin runtime lifecycle notifications.

2. [PR #37485 — Keep response streams alive through connection failures](https://github.com/openai/codex/pull/37485)  
   Classifies connection failures separately and retries sampling requests with exponential backoff, showing a `Reconnecting...` state.

3. [PR #37498 — Preserve child waiters during process termination](https://github.com/openai/codex/pull/37498)  
   Fixes a PTY child-reaping bug that could prevent sessions from recording exit statuses.

4. [PR #37497 — Limit payload traces in diagnostic logs](https://github.com/openai/codex/pull/37497)  
   Moves high-volume HTTP/SSE/WebSocket payloads to DEBUG-only in persistent log sinks, preventing SQLite log database overload.

5. [PR #37504 — Disable Nagle’s algorithm for code-mode WebSockets](https://github.com/openai/codex/pull/37504)  
   Enables `TCP_NODELAY` on code-mode WebSocket connections to reduce latency-sensitive buffering.

6. [PR #37507 — Include sandbox mode in response metadata](https://github.com/openai/codex/pull/37507)  
   Adds effective `sandbox_mode` to turn metadata and reserves it so clients cannot override the computed profile.

7. [PR #37510 — Define the code-mode host gRPC protocol](https://github.com/openai/codex/pull/37510)  
   Adds the `codex.code_mode.v1` protobuf API with Rust bindings via `tonic`, plus Bazel support.

8. [PR #37511 — Enforce automatic review for managed models](https://github.com/openai/codex/pull/37511)  
   Adds `auto_review.required_on_models` so listed managed models use on-request approvals with automatic review.

9. [PR #37486 — Expose runtime activity in server diagnostics](https://github.com/openai/codex/pull/37486)  
   Adds lifecycle-backed gauges for in-flight requests, active turns, queued messages, and live MCP connections.

10. [PR #37480 — Delegate remote process sandboxing to the executor](https://github.com/openai/codex/pull/37480)  
    Preserves executor-native working directories and permission profiles for remote `exec_command`, avoiding host-platform sandbox resolution.

Also notable: [PR #37492](https://github.com/openai/codex/pull/37492) adds opt-in tool namespace inventory metadata, and [PR #37483](https://github.com/openai/codex/pull/37483) makes interrupted turns terminate active code-mode cells.

## Feature Request Trends
- **Cross-provider MCP compatibility**: The clearest signal is the demand to flatten MCP namespace tools for non-OpenAI endpoints such as Ollama, LM Studio, OpenRouter, and AWS Bedrock.
- **Reducing approval friction**: Users want persistent trust settings, fewer repeated approvals, and smoother session resumption.
- **Better project/session management**: Requests for full ChatGPT Projects support in the desktop app, manually ordered sections, and incremental transcript browsing point to a stronger “work organization” focus.
- **Plugin configuration and secrets**: Plugin-bundled MCP servers need a supported path for user-provided secrets and environment variables.
- **Resource efficiency**: Users want smaller memory footprints, less aggressive background work, and faster resume behavior for long threads.

## Developer Pain Points
- **Windows sandbox/process spawning remains the top recurring frustration**: `CreateProcessAsUserW failed: 5`, WindowsApps ACL failures, `EPERM` on Computer Use, and EnumWindows errors appear across multiple issues.
- **MCP lifecycle instability**: Zombie processes, duplicate MCP/node_repl stacks, and large memory leaks are impacting desktop users on both macOS and Windows.
- **App background activity is not trustworthy yet**: Silent weekly limit consumption, prefetch-driven crashes, and OOM-at-startup issues undermine confidence in the desktop app’s default behavior.
- **Non-OpenAI provider regressions**: LiteLLM streaming regressions and MCP tools disappearing on non-OpenAI endpoints make custom-model setups fragile.
- **Large transcript/session data is a performance hazard**: Resuming long threads, importing external agent history, and loading image-heavy subagent rollouts can crash or stall the app.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-08

## Today's Highlights
The project shipped two stability patch releases (v0.54.4, v0.55.0-preview.2) alongside continued investment in the internal Caretaker triage automation, with several eval-framework PRs merged. Two security fixes landed for the `web-fetch` tool (SSRF via DNS rebinding) and the sandbox Docker images (Node 20 EOL upgrade), plus an open PR adding Gemini 3.6 Flash / 3.5 Flash-Lite model support. On the issue tracker, agent reliability remains the dominant theme: subagent turn-limit handling, hangs, and permission regressions account for most of the high-traffic threads.

## Releases
Three releases in the last 24h, all patch/chore-level; no new features shipped.

- **v0.56.0-nightly.20260807.gd5c9a97dc** — Nightly build; includes changelog for v0.55.0-preview.1 and version bump. [Release notes](https://github.com/google-gemini/gemini-cli/releases)
- **v0.55.0-preview.2** — Cherry-picks fix `2139b12` onto v0.55.0-preview.1 to create a patched preview. [PR #28719](https://github.com/google-gemini/gemini-cli/pull/28719)
- **v0.54.4** — Cherry-picks fix `56f9688` onto v0.54.x stable channel; includes version bumps to 0.54.2. [PR #28710](https://github.com/google-gemini/gemini-cli/pull/28710)

## Hot Issues
10 noteworthy issues, ranked by signal and community engagement:

- **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments) — `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the turn limit before doing any analysis. Misleading status hides real interruptions from the parent agent; top-commented issue today.
- **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 8 👍) — Simple operations like folder creation hang indefinitely when deferred to the generalist agent; users wait up to an hour before cancelling. The workaround (disabling subagents) defeats the feature.
- **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 3 👍) — Trivial CLI commands finish but the UI remains stuck showing "Awaiting user input." Core-shell reliability issue affecting basic workflows.
- **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 1 👍) — Browser agent terminates with `GOAL` immediately on Wayland sessions; Linux desktop users are effectively blocked from browser automation.
- **[#22093 — Subagents run without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 3 comments) — Regression: generalist subagent activates even with agents disabled in all configs. Permission model is not being honored, a trust and safety concern.
- **[#22186 — "get-shit-done" output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1, 3 comments) — Reproducible crash at the end of long-running tasks when the output hook prints the final user summary.
- **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments) — Sessions the extraction agent decides to skip are never marked processed, so they keep resurfacing; wasted tokens and repeated context re-reads.
- **[#26525 — Auto Memory lacks deterministic redaction](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 4 comments) — Transcript content is sent to the extraction model before any redaction, and redaction is prompt-based rather than deterministic. Privacy risk for secrets stored in skills/logs.
- **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments) — Requests fail when more than ~128 tools are enabled (reported at 400). No tool-scoping/slimming happens based on enabled tools; blocker for heavy MCP setups.
- **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2, 4 comments) — `~/.gemini/agents/*.md` symlinks are silently ignored, breaking a common dotfiles-management pattern for sharing custom agents.

## Key PR Progress
Ten significant PRs updated in the last 24h:

- **[#28725 — fix(security): prevent SSRF via DNS resolution bypass in web-fetch](https://github.com/google-gemini/gemini-cli/pull/28725)** — Fixes CVSS 8.6 SSRF (issue #28555) where a custom domain pointing to `169.254.169.254` could bypass DNS protections. Critical hardening for the fetch tool.
- **[#28726 — fix(security): upgrade sandbox Dockerfile to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28726)** — Migrates sandbox and caretaker Cloud Run images off Node 20, which has reached EOL and no longer receives security patches.
- **[#28673 — feat(core): add Gemini 3.6 Flash and 3.5 Flash-Lite model configurations](https://github.com/google-gemini/gemini-cli/pull/28673)** — Adds base model definitions, aliases, capability flags (thinking, multimodal), and Code Execution configs for the newer Flash-tier models.
- **[#28730 — fix(core,cli): resolve false model capacity exhaustion and fix quota lookup mapping](https://github.com/google-gemini/gemini-cli/pull/28730)** — Fixes spurious "capacity exhausted" errors and wrong client-side quota model mapping; also preserves the "Keep trying" UI option during transient capacity surges.
- **[#28597 — fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** — Resolves a load-order race where `.env` values weren't available when system/user/workspace settings were expanded, causing incorrect placeholder resolution at startup.
- **[#28729 — fix(core): resolve swallowed directory mismatch in IDE connections](https://github.com/google-gemini/gemini-cli/pull/28729)** — Fixes Gemini CLI failing to connect to the IDE companion extension under Cider / VS Code forks with virtual or divergent FUSE paths.
- **[#28581 — fix(cli): skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)** — Prevents unified/combined diff hunk markers from being parsed as `@file` references; removes two recursive glob searches per hunk, fixing `minimatch` heap growth on large diffs.
- **[#28344 — Feat/eval validate](https://github.com/google-gemini/gemini-cli/pull/28344)** (size/xl) — Adds `eval:validate`, a static analysis CLI validating eval sources against 9 rules with exit-code gating for CI; includes `--json` output for machine-readable reports.
- **[#28369 — feat(evals): add local report command and developer documentation](https://github.com/google-gemini/gemini-cli/pull/28369)** — `npm run eval:report` aggregates pass rates by model from Vitest `report.json` and maps results back to inventory policies, with duplicate-test support.
- **[#28530 — feat(caretaker-evals): add triage evaluation framework and judge runner](https://github.com/google-gemini/gemini-cli/pull/28530)** (plus [#28524 prompt hill-climbing](https://github.com/google-gemini/gemini-cli/pull/28524) and [#28532 golden dataset tooling](https://github.com/google-gemini/gemini-cli/pull/28532)) — A substantial LLM-as-a-Judge evaluation suite for the internal issue-triage pipeline, including parallel Git-worktree benchmarking and Firestore sync.

## Feature Request Trends
Recurring feature directions across the issue tracker this week:

- **Agent resilience and recovery** — Automatic session takeover for stuck browser agents (#22232), retry/backoff for hung generalist agents (#21409), and proper subagent recovery semantics after MAX_TURNS (#22323).
- **AST-aware codebase tooling** — A dedicated epic (#22745) plus follow-up platform exploration (#22746) to add AST-aware file reads, symbol navigation, and method-boundary mapping, reducing token noise and misaligned reads.
- **Memory-system hardening** — Multiple requests around Auto Memory: skipping low-signal sessions (#26522), quarantining invalid patches (#26523), deterministic secret redaction (#26525), and an umbrella quality epic (#26516).
- **Expanded evaluation infrastructure** — Component-level behavioral evals (#24353) beyond the current 76 tests, plus local CI-gated eval tooling (#28344, #28369).
- **Agent self-observability** — Surfacing subagent trajectories via `/chat share` (#22598), including subagent context in `/bug` reports (#21763), and improving the agent's knowledge of its own CLI flags/hotkeys (#21432).
- **Safe-by-default execution** — Zero-dependency OS sandboxing to leverage the model's native bash affinity (#19873), and discouraging destructive commands like `git reset --force` (#22672).

## Developer Pain Points
Common frustrations surfacing across issues:

- **Hangs and freezes** — The most-upvoted thread this cycle (8 👍) is the generalist agent hanging indefinitely; shell commands stuck on "Waiting input" (#25166) and interactive-prompt deadlocks (#22465) compound the reliability problem.
- **Misleading status reporting** — Subagent failures reported as `GOAL` success (#22323) and browser subagents declaring `GOAL` on Wayland without doing work (#21983) erode trust in agent outputs.
- **Permission regressions** — Subagents executing despite agents being disabled in configuration (#22093) is a serious control-plane concern for users relying on MCP-only setups.
- **Crashes at completion** — The get-shit-done output hook crash (#22186) and terminal corruption after external editors (#24935) both strike at the end of long sessions, wasting users' work.
- **Scalability ceilings** — 400 errors when tool count exceeds ~128 (#24246) and recursive glob storms on large diff prompts (#28581) point to scaling limits with large MCP configurations and monorepo-scale prompts.
- **Security/privacy anxiety** — Auto Memory's post-hoc, prompt-based redaction (#26525) and the SSRF vector in `web-fetch` (#28725) show users are actively probing the trust boundaries of the tool.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-08

## Today's Highlights

Three patch releases shipped today, adding enterprise sandbox policy controls, an Agent Plugins extension directory, `kimi-k3` model support, and a combined `--plan` + `--mode autopilot` workflow. Community discussion remains focused on an authentication prompt regression, skill folder organization, and Windows-specific clipboard/rendering bugs. No pull requests were updated in the last 24 hours.

## Releases

- [v1.0.79-9](https://github.com/github/copilot-cli/releases/tag/v1.0.79-9): The `/sandbox` configuration dialog now shows where sandbox settings are stored in `settings.json`.
- [v1.0.79-8](https://github.com/github/copilot-cli/releases/tag/v1.0.79-8): Added support for enterprise `allow-auto-only` policy, so `/allow-all auto` works while full `allow-all` remains blocked. Enterprise-managed sandbox policy can now enforce a proxy URL while keeping credentials user-controlled. The `/sandbox` dialog was also improved with grouped git/gh settings.
- [v1.0.79-7](https://github.com/github/copilot-cli/releases/tag/v1.0.79-7): Agent Plugins can now ship extensions under `com.github.copilot/extensions/`. Added support for the `kimi-k3` model. `--plan` can now be combined with `--mode autopilot` to plan first and then implement without approval. Multi-select prompts were improved.

## Hot Issues

1. [Auth login auto-confirms keychain prompt (#2494)](https://github.com/github/copilot-cli/issues/2494)  
   A long-running authentication regression: when the system keychain is unavailable, `copilot login` auto-enters the `y/N` response instead of waiting for user input. 11 comments; still open after months.

2. [Support subfolders for skills (#1632)](https://github.com/github/copilot-cli/issues/1632)  
   High community demand (23 👍, 10 comments). Users with many custom skills need nested folders to keep testing, domain-specific, and general skills organized.

3. [Copy to clipboard silently fails on Windows (#3622)](https://github.com/github/copilot-cli/issues/3622)  
   Copying agent output appears to succeed but paste yields old clipboard contents. Regression from v1.0.48; especially painful for Windows-heavy workflows.

4. [Transcript renders as blank lines until resize or input (#4311)](https://github.com/github/copilot-cli/issues/4311)  
   Interactive mode blanks the bottom of the transcript; `/resume` doesn't recover it. A terminal-rendering cache invalidation bug that degrades core UX.

5. [/app should default to current working directory (#4118)](https://github.com/github/copilot-cli/issues/4118)  
   Closed, but very popular (35 👍). Users want `/app` to preselect the current directory instead of forcing manual selection.

6. [`--add-dir` breaks Claude sub-agent dispatch with cache_control 400 (#4185)](https://github.com/github/copilot-cli/issues/4185)  
   Launching with `--add-dir` causes every Claude sub-agent call to fail with `400 A maximum of 4 blocks with cache_control`. Blocks a common flag on Anthropic models.

7. [Windows crashes when notifications are enabled (#4219)](https://github.com/github/copilot-cli/issues/4219)  
   Native toast notifications cause repeated access violations on Windows. Closed, but significant for anyone relying on OS notifications from the CLI.

8. [Post-authentication MCP rebuild leaves orphaned stdio processes (#4392)](https://github.com/github/copilot-cli/issues/4392)  
   At startup, MCP servers are spawned once, then the entire MCP client is rebuilt after auth, leaving the first generation of stdio child processes orphaned. Resource leak in long-lived sessions.

9. [Skill tool cannot find valid skills in `~/.agents/skills` (#4401)](https://github.com/github/copilot-cli/issues/4401)  
   Open regression in v1.0.78: valid `SKILL.md` directories are not discovered. Users suspect an incomplete fix for #2230.

10. [`add-dir` dash-to-underscore conversion causes OneDrive permission loop (#1409)](https://github.com/github/copilot-cli/issues/1409)  
    Paths containing dashes are converted to underscores internally on Windows, so OneDrive directories never match granted permissions. Results in endless permission prompts.

## Key PR Progress

No pull requests were updated in the last 24 hours. This was a release-only cycle.

## Feature Request Trends

- **Skills/plugin organization**  
  Users want nested skill folders (#1632), plugin extension directories (released in v1.0.79-7), and `skill` tool aliases for custom agents (#4209).

- **Session and workspace defaults**  
  Requests include a persisted default workspace type — branch vs. worktree (#4396), `/app` defaulting to the current directory (#4118), and quick-delete in the sessions list (#4395).

- **Notifications and attention management**  
  Desktop notifications when the CLI needs human input (#2941) and options to disable/remap the "Ctrl+C twice to exit" behavior (#4394).

- **Usage observability**  
  Per-session token usage reporting remains a requested feature for cost tracking (#2947).

- **Enterprise controls**  
  Enterprise `allow-auto-only`, sandbox proxy policy, and registry-compatible MCP configurations are emerging priorities (#4205, release notes in v1.0.79-8).

## Developer Pain Points

- **Windows-specific regressions**: clipboard silently failing (#3622), crashes with notifications (#4219), screen clearing on codepage 936 (#4391), and shell-operator hooks breaking in PowerShell (#4399).
- **Authentication friction**: keychain prompts being auto-confirmed (#2494) and browser-login URL wrapping/fallback issues (#4400).
- **MCP lifecycle instability**: false-positive "MCP loaded" states (#1129), orphaned stdio processes after auth rebuilds (#4392), and registry policy rejecting runtime headers (#4205).
- **Path/permission mismatches**: `add-dir` dash conversion breaking OneDrive paths (#1409) and `allowed_directories` from `permissions.config` never being loaded (#4398).
- **Model dispatch inconsistencies**: unsupported reasoning effort for `claude-haiku-4.5` (#4345), `cache_control` failures with `--add-dir` on Claude (#4185), and resumed sessions switching back to the default model (#4397).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-08

## Today's Highlights

The community's attention is split between a critical data-integrity bug and a serious safety incident. Two competing PRs (#2594, #2595) have been submitted to fix `StrReplaceFile`'s silent corruption of non-UTF-8 bytes, while issue #2596 reports a yolo-mode agent running `rm -rf` on a pre-existing directory outside the workspace, deleting user session data. Meanwhile, the long-running Memory System feature request (#1283) continues to build momentum with 21 comments and an update today.

## Releases

No new releases in the last 24 hours.

## Hot Issues

Only 3 issues were updated in the last 24 hours; all are listed below.

- **[#2596 — Agent ran `rm -rf` on a pre-existing directory outside the workspace, deleting user session data](https://github.com/MoonshotAI/kimi-cli/issues/2596)**
  Severity: Critical · Updated 2026-08-07 · 0 comments
  In yolo permission mode, the agent attempted to clean up a symlink it believed it had created at `~/.pi/agent/sessions`, but the `ln -sfn` had silently failed earlier because a real directory already existed there. The agent then used `rm -rf` on the target path, destroying the pre-existing directory and its data. This highlights a dangerous failure mode: permission bypass combined with unawareness of failed earlier operations. Community reaction is still forming (0 comments), but this is arguably the highest-severity report of the day.

- **[#2591 — `StrReplaceFile` corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591)**
  Severity: High · Updated 2026-08-07 · 3 comments
  `StrReplaceFile` decodes the entire file with `errors="replace"`, performs the string edit, then writes the whole file back. Any invalid UTF-8 byte anywhere in the file — even far from the edit — is converted to U+FFFD (`EF BF BD`) and permanently corrupts the file on disk. This is a silent data-loss bug affecting binary-ish or legacy-encoded files. The 3 comments indicate active discussion, and two competing fixes have already been proposed (see PRs #2594 and #2595).

- **[#1283 — Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**
  Open since 2026-02-27 · Updated 2026-08-08 · 21 comments
  Request for a comprehensive memory layer that persists project patterns, user preferences, and useful context across sessions, combining automatic (AI-managed notes) and manual (user-defined instructions) memory. This has been open for over five months and received an update today, suggesting ongoing community interest. The high comment count reflects a strong demand for continuity in long-running agent workflows.

## Key PR Progress

Only 2 PRs were updated in the last 24 hours; both target the same bug and offer divergent design philosophies.

- **[#2594 — fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits](https://github.com/MoonshotAI/kimi-cli/pull/2594)**
  By: 686f6c61 · Updated 2026-08-07
  Fixes the corruption by applying `old`/`new` matches as UTF-8 byte substrings directly on the raw file buffer, rather than decoding and re-encoding the entire file. This preserves all non-UTF-8 bytes outside the edit region. The approach is surgical and backwards-compatible: files with valid UTF-8 behave exactly as before, and byte-level edits are safe for any file type.

- **[#2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)**
  By: shoemoney · Updated 2026-08-07 · Resolves #2591
  A more conservative fix: detect invalid UTF-8 up front and refuse to edit the file rather than risk corruption. This trades functionality for safety — users get a clear error instead of silent data loss — but may break workflows that legitimately edit mixed-content files. The maintainer decision between byte-preserving editing (#2594) and fail-fast rejection (#2595) will define the tool's behavior for non-UTF-8 files going forward.

## Feature Request Trends

With a small sample of issues updated in the last 24h, one dominant direction stands out:

- **Persistent memory / cross-session context (#1283):** The only explicit feature request among the issues, and it has substantial community engagement (21 comments over ~5 months). Users want the agent to retain project knowledge, coding patterns, and preferences between sessions — a clear signal that one-shot, stateless agent behavior is a growing pain point.

## Developer Pain Points

- **Silent data corruption in file edits (#2591):** String-based file editing that decodes/re-encodes the whole file is fundamentally unsafe for non-UTF-8 content. The community response (two PRs within 48 hours) underscores how urgently this is viewed.
- **Unsafe autonomous operations (#2596):** Yolo mode allowed destructive filesystem operations outside the workspace without adequate guardrails. The agent's failure to detect that its earlier `ln -sfn` had not succeeded — and proceeding with `rm -rf` anyway — points to a broader issue with operation verification in high-permission modes.
- **Lack of memory/continuity (#1283):** The active, months-old memory system request indicates developers want agents that carry context forward, reducing repetitive re-explanation of project setup and preferences.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## Today's Highlights
v1.18.15 shipped with core reliability fixes for message ordering and truncation cleanup, while community attention remained fixed on OpenCode Go billing and upstream provider errors — led by a 45-comment thread on 401 blocks affecting chat completions. On the feature front, new PRs bring Mermaid diagram rendering to the TUI, a `--no-open` flag for the web UI, and a Synthetic web search backend, alongside several web app project-picker fixes.

## Releases

**v1.18.15** — Bugfix release focused on core reliability:
- Chronological message ordering now stays correct even when imported or legacy message IDs are out of order.
- Revert and fork actions now use real message chronology instead of message ID ordering.
- Truncation cleanup now removes stale files by file timestamp more reliably.

## Hot Issues

1. **OpenCode Go returns 401 "Request blocked by upstream provider"** — [#38257](https://github.com/anomalyco/opencode/issues/38257) (45 comments, 11 👍)
   Chat completions are blocked for all models under OpenCode Go subscriptions while `/v1/models` works fine. Points to a server-side issue affecting Go subscribers; the most active thread this window.

2. **Unable to read images for some models** — [#5359](https://github.com/anomalyco/opencode/issues/5359) (18 comments)
   Long-standing regression since v1.0.137: pasted images fail to attach with LiteLLM + Vertex AI backends. Still open after eight months, indicating a persistent provider-compatibility gap.

3. **Pay Go with crypto** — [#23153](https://github.com/anomalyco/opencode/issues/23153) (17 comments, 37 👍)
   The highest-reacted feature request in the recent window. Strong community support for adding cryptocurrency payment options to OpenCode Go.

4. **Amazon Bedrock Opus 4.6 compaction failure** — [#14332](https://github.com/anomalyco/opencode/issues/14332) (16 comments, 8 👍)
   Compaction fails because `thinking`/`redacted_thinking` blocks in the latest assistant message cannot be modified. Closed, but with significant engagement from Bedrock users.

5. **`deepseek-v4-flash` is NOT serving DeepSeek V4 Flash 0731** — [#40409](https://github.com/anomalyco/opencode/issues/40409) (14 comments)
   OpenCode Go's `deepseek-v4-flash` returns a model self-identifying as V3.2 with a 2025-05 knowledge cutoff. Rated high severity due to the billing/quality mismatch; a companion issue ([#40607](https://github.com/anomalyco/opencode/issues/40607)) reproduces this with a first-party DeepSeek key.

6. **Paste into PowerShell OpenCode instance not working** — [#6560](https://github.com/anomalyco/opencode/issues/6560) (13 comments)
   Windows 11 users cannot paste clipboard content into the TUI via right-click or Ctrl+V. Long-running Windows-specific UX pain point.

7. **DeepSeek `reasoning_content` must be passed back to the API** — [#24334](https://github.com/anomalyco/opencode/issues/24334) (10 comments)
   Thinking-mode sessions fail with HTTP 400 because reasoning content isn't preserved in follow-up requests. Closed, but representative of ongoing DeepSeek integration friction.

8. **Overcharged on Go plan — weekly limit exhausted at ~$7.50 despite $30 limit** — [#41146](https://github.com/anomalyco/opencode/issues/41146) (2 comments)
   A $10/month Go subscriber reports being blocked after spending only ~$7.50 of the advertised $30 weekly limit. Adds to a cluster of billing-accuracy complaints.

9. **Account balance shows $0 after successful payment** — [#41166](https://github.com/anomalyco/opencode/issues/41166) (1 comment)
   Payment via 支付宝 was confirmed by the third-party provider, but the OpenCode balance remains $0. Tagged `[needs:compliance]` — a critical trust issue for paid users.

10. **Copilot re-auth prompted every session despite stored credential** — [#40183](https://github.com/anomalyco/opencode/issues/40183) (3 comments)
    Device-code login succeeds, yet OpenCode prompts re-authentication on every new session even though `opencode auth list` shows a stored credential.

## Key PR Progress

1. **feat(tui): render Mermaid diagrams** — [#41113](https://github.com/anomalyco/opencode/pull/41113) (kitlangton)
   Vendors a private `@opencode-ai/merman` workspace package to render Mermaid flowcharts, sequence diagrams, and state diagrams directly in the session transcript via a built-in TUI plugin.

2. **feat(opencode): let web users avoid browser launches** — [#41167](https://github.com/anomalyco/opencode/pull/41167) (AhmedOsman101)
   Adds `opencode web --no-open` for headless/CI workflows where auto-launching a browser is undesirable.

3. **fix(app): default project picker to home** — [#41158](https://github.com/anomalyco/opencode/pull/41158) (Brendonovich)
   Returns the server home directory from the location endpoint and hydrates V2 app path state, defaulting both Open Project dialogs to home and preserving indexed empty-search results from older servers.

4. **feat(tool): add Synthetic web search backend to websearch tool** — [#41160](https://github.com/anomalyco/opencode/pull/41160) (Qiiks)
   Adds `"synthetic"` as a third web search backend alongside `exa` and `parallel`, extending `WebSearchProviderSchema` accordingly.

5. **fix(session): extract tool-result media for models without attachment capability** — [#41161](https://github.com/anomalyco/opencode/pull/41161) (Qiiks)
   Fixes `supportsMediaInToolResult` returning `true` unconditionally for `@ai-sdk/anthropic` and `@ai-sdk/openai`, which caused attachment failures on models that can't handle media in tool results.

6. **fix(provider): propagate config-level npm override to inherited models** — [#41159](https://github.com/anomalyco/opencode/pull/41159) (Qiiks)
   Fixes a bug where a config-level `npm` override for an existing provider (e.g., `provider.synthetic.npm = "@ai-sdk/anthropic"`) was silently dropped for inherited models.

7. **feat(server): add modal environment driver** — [#41118](https://github.com/anomalyco/opencode/pull/41118) (kitlangton)
   First hosted binding of the Environment contract via a Modal sandbox driver in `@opencode-ai/server`, including a live-gated shared filesystem conformance suite.

8. **fix(app): show server projects until the first bookmark** — [#41154](https://github.com/anomalyco/opencode/pull/41154) (Cordtus)
   Fixes the web app's "Nothing here yet" home screen by falling back to server `/project` data when client-side bookmarks are empty (closes [#39655](https://github.com/anomalyco/opencode/issues/39655)).

9. **fix(app): list the base directory on an empty project search** — [#41153](https://github.com/anomalyco/opencode/pull/41153) (Cordtus)
   Empty project searches queried `/find/file` with an empty query, always returning nothing. Now lists base directory subfolders instead (closes [#37611](https://github.com/anomalyco/opencode/issues/37611)).

10. **feat: native background subagents + auto-continue for transient provider errors** — [#40923](https://github.com/anomalyco/opencode/pull/40923) (mdsohail99)
    Adds native background sub-agent orchestration (`Task(background...)`) and self-recovering transient provider errors via auto-continue. Tagged `[needs:compliance]`, indicating legal review is pending.

## Feature Request Trends

- **Payments flexibility**: Crypto support for OpenCode Go ([#23153](https://github.com/anomalyco/opencode/issues/23153)) leads demand, alongside billing transparency fixes.
- **Session/UX control**: Users want queued messages during generation instead of cancellation ([#41106](https://github.com/anomalyco/opencode/issues/41106)), an `OPENCODE_DISABLE_INSTALL` env var to skip npm installs in CI ([#37888](https://github.com/anomalyco/opencode/issues/37888)), and runtime model override for task tool subagents ([#17595](https://github.com/anomalyco/opencode/issues/17595)).
- **Better organization**: Hierarchical subfolders for skills ([#38853](https://github.com/anomalyco/opencode/issues/38853)) and richer web app project discovery are recurring asks.
- **Provider ecosystem expansion**: New web search backends ([#41160](https://github.com/anomalyco/opencode/pull/41160)), Snowflake Cortex OAuth for v2 ([#34780](https://github.com/anomalyco/opencode/issues/34780)), and provider-agnostic media handling ([#41161](https://github.com/anomalyco/opencode/pull/41161)).
- **In-terminal productivity**: Mermaid diagram rendering ([#41113](https://github.com/anomalyco/opencode/pull/41113)) and connect links for the app ([#41152](https://github.com/anomalyco/opencode/pull/41152)) signal growing investment in the TUI/web experience.

## Developer Pain Points

- **OpenCode Go billing & quota reliability is the top friction point**: 401 blocks ([#38257](https://github.com/anomalyco/opencode/issues/38257)), unexplained quota exhaustion ([#41146](https://github.com/anomalyco/opencode/issues/41146)), zero balances after confirmed payment ([#41166](https://github.com/anomalyco/opencode/issues/41166)), and free-tier limits triggering unexpectedly ([#41072](https://github.com/anomalyco/opencode/issues/41072)) erode trust in the paid service.
- **DeepSeek model identity and API mismatches**: `deepseek-v4-flash` serving older V3.x models with wrong knowledge cutoffs ([#40409](https://github.com/anomalyco/opencode/issues/40409), [#40607](https://github.com/anomalyco/opencode/issues/40607)) and `reasoning_content` protocol errors ([#24334](https://github.com/anomalyco/opencode/issues/24334)) point to incomplete DeepSeek integration.
- **Web app project discovery is broken out of the box**: Fresh sessions show "Nothing here yet" ([#41156](https://github.com/anomalyco/opencode/issues/41156)) and the picker never lists the base directory ([#41155](https://github.com/anomalyco/opencode/issues/41155)) — both actively patched in [#41154](https://github.com/anomalyco/opencode/pull/41154) and [#41153](https://github.com/anomalyco/opencode/pull/41153).
- **Authentication friction**: Copilot credentials not persisting across sessions ([#40183](https://github.com/anomalyco/opencode/issues/40183)) and missing Snowflake Cortex OAuth in v2 ([#34780](https://github.com/anomalyco/opencode/issues/34780)) create repeated login overhead.
- **Image attachment regressions persist**: Pasting images fails on several model/provider combinations ([#5359](https://github.com/anomalyco/opencode/issues/5359)) — an eight-month-old issue still unresolved.
- **Windows TUI usability**: Clipboard paste remains broken in PowerShell ([#6560](https://github.com/anomalyco/opencode/issues/6560)), and the git branch is hidden in the new desktop layout ([#41105](https://github.com/anomalyco/opencode/issues/41105)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-08

## Today's Highlights

Pi shipped v0.84.1 with Qwen Individual token-plan support and new authentication readiness checks, but the release is already shadowed by a startup regression on Node 23 ([#7771](https://github.com/earendil-works/pi/issues/7771)). Contributor momentum is focused on agent lifecycle reliability: recovery-state refactors, suspended harness restoration, and fixes for compaction and parallel tool execution are all moving through review.

## Releases

### v0.84.1  
- **Qwen Token Plan Individual** — Use the built-in provider for models documented for Individual subscriptions. See [API Keys](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys).
- **Authentication readiness checks** — New `pi auth` readiness flow (release notes truncated in source).

⚠️ Note: [#7771](https://github.com/earendil-works/pi/issues/7771) reports "Unable to start 0.84.1" on Node 23 with `TypeError: zlib.createZstdDecompress is not a function`. The issue is closed, but Node 23 compatibility is worth validating before upgrading.

## Hot Issues

1. **[#6879](https://github.com/earendil-works/pi/issues/6879) — Auto-compaction never triggers after context grows past 100% until provider overflow**  
   A session on `gpt-5.6-sol` ran past the compaction threshold until the API rejected a 373k-token request. 13 comments, 15 👍. Users expect proactive compaction before provider hard limits, not after rejection.

2. **[#7128](https://github.com/earendil-works/pi/issues/7128) — New default PI_* guideline over-encourages unnecessary bash calls**  
   The default system prompt now includes "Inspect PI_* environment variables for current model and session details," which biases the agent toward frequent `env`-inspection calls. 11 comments, 7 👍; a behavior regression from a seemingly small prompt change.

3. **[#7020](https://github.com/earendil-works/pi/issues/7020) — Sometimes Pi doesn't continue after compaction**  
   Long-running "coordinator" sessions stall after compaction. 10 comments; likely related to the broader lifecycle issues tracked in [#5886](https://github.com/earendil-works/pi/issues/5886).

4. **[#5886](https://github.com/earendil-works/pi/issues/5886) — AgentSession settlement/continuation and assistant-tail lifecycle bugs**  
   Meta-issue for a recurring class of bugs where post-run logic tries to continue from a transcript that is no longer valid. Important context for compaction and settlement fixes.

5. **[#7702](https://github.com/earendil-works/pi/issues/7702) — DeepSeek models via opencode zen gateway fail with 400 on multi-turn calls**  
   `reasoning_content` must be passed back to the API; root cause in `detectCompat()`. Closed, but representative of growing DeepSeek provider pain.

6. **[#7771](https://github.com/earendil-works/pi/issues/7771) — Unable to start 0.84.1**  
   Node 23 users hit `zlib.createZstdDecompress is not a function`. 5 comments; urgent release regression.

7. **[#7730](https://github.com/earendil-works/pi/issues/7730) — High CPU usage on Mac OS with long session**  
   CPU swings between 50–110% with 600–800MB memory usage; appears linked to context/session length. 5 👍; a real pain point for long-lived sessions.

8. **[#7053](https://github.com/earendil-works/pi/issues/7053) — Parallel tool batches lose already-completed tool results when one sibling stalls**  
   `Promise.all` in `executeToolCallsParallel` waits for the whole batch, orphaning already-completed `toolCalls` and producing "No result provided." In progress; follow-up to [#3503](https://github.com/earendil-works/pi/issues/3503).

9. **[#7798](https://github.com/earendil-works/pi/issues/7798) — TUI Crash on Session Resume**  
   `TypeError: Cannot read properties of undefined (reading 'render')` during `ToolExecute...`; session resume crash is highly disruptive for daily TUI users.

10. **[#7791](https://github.com/earendil-works/pi/issues/7791) — Global Undici dispatcher inherits 16 KiB maxHeaderSize**  
   Node `fetch` rejects valid provider responses with larger headers (`UND_ERR_HEADERS_OVERFLOW`). Subtle but can break integrations with verbose APIs.

## Key PR Progress

1. **[#7784](https://github.com/earendil-works/pi/pull/7784) — refactor(agent): derive recovery state from record queries**  
   Removes recovery-specific query APIs and SQLite operation-kind indexes while retaining write-side enforcement. Important cleanup for harness recovery architecture.

2. **[#7801](https://github.com/earendil-works/pi/pull/7801) — feat(coding-agent): lazily load uncommon syntax grammars**  
   Experimental syntax-highlighting refactor to reduce startup cost. Touches public highlight API, so worth API review.

3. **[#7710](https://github.com/earendil-works/pi/pull/7710) — feat(agent): restore suspended harness operations**  
   Implements R3 in the harness-v2 plan; allows loading a new harness from an existing long-running session. Foundational for session reliability.

4. **[#7780](https://github.com/earendil-works/pi/pull/7780) — TUI performance improvement**  
   Incremental markdown parsing and lazy render invalidation, with partial old-content parsing on startup. Directly targets long-session TUI lag.

5. **[#7749](https://github.com/earendil-works/pi/pull/7749) — fix(coding-agent): preserve custom tool renderers after reload**  
   Fixes tools registered in `session_start` losing their `renderCall`/`renderResult` custom renderers after `/reload`.

6. **[#7762](https://github.com/earendil-works/pi/pull/7762) — feat(provider): Introduce LM Studio provider**  
   Adds local LM Studio support, guarded by `LM_STUDIO_BASE_URL`. Addresses [#7668](https://github.com/earendil-works/pi/issues/7668).

7. **[#7792](https://github.com/earendil-works/pi/pull/7792) — feat(coding-agent): bridge Cursor CLI auth via local agent session**  
   Hidden built-in extension that bridges Pi to an already-authenticated local Cursor CLI, plus `pi cursor status`. No `CURSOR_API_KEY` needed.

8. **[#6216](https://github.com/earendil-works/pi/pull/6216) — feat: Add Amazon Bedrock Mantle OpenAI Responses provider**  
   Adds Bedrock Mantle via OpenAI's Bedrock provider. Long-running PR that has returned to active status.

9. **[#7722](https://github.com/earendil-works/pi/pull/7722) — feat(coding-agent): add theme override**  
   Adds `--use-theme` for single or appearance-based theme selection, e.g. `pi --use-theme dayowl/nightowl`.

10. **[#7757](https://github.com/earendil-works/pi/pull/7757) — feat(coding-agent): allow opting out of fullscreen copy-on-select**  
   Adds a setting to disable copy-on-select in fullscreen; changes the `app.message.copy` keybind to copy selection first when present.

## Feature Request Trends

- **Broader provider ecosystem**: Requests for LM Studio ([#7762](https://github.com/earendil-works/pi/pull/7762)), Amazon Bedrock Mantle ([#6216](https://github.com/earendil-works/pi/pull/6216)), and Cursor CLI bridging ([#7792](https://github.com/earendil-works/pi/pull/7792), [#7793](https://github.com/earendil-works/pi/issues/7793)) show demand for local, enterprise, and alternative-agent integrations.
- **Extension API / plugin ecosystem**: Safe session replacement ([#5952](https://github.com/earendil-works/pi/issues/5952)), tool decoration ([#7800](https://github.com/earendil-works/pi/issues/7800)), Agent Plugins spec support ([#7776](https://github.com/earendil-works/pi/issues/7776)), and foreground process handoff ([#7758](https://github.com/earendil-works/pi/pull/7758)) point toward a richer extension surface.
- **TUI/UX customization**: Theme overrides ([#7722](https://github.com/earendil-works/pi/pull/7722)), sticky prompt headers ([#7802](https://github.com/earendil-works/pi/issues/7802)), fullscreen menu placement ([#7786](https://github.com/earendil-works/pi/issues/7786)), and half-page scrolling ([#7735](https://github.com/earendil-works/pi/issues/7735)) signal continued demand for terminal UI control.
- **Performance and startup cost**: Lazy syntax grammar loading ([#7801](https://github.com/earendil-works/pi/pull/7801)), incremental markdown parsing ([#7780](https://github.com/earendil-works/pi/pull/7780)), and long-session CPU investigation ([#7730](https://github.com/earendil-works/pi/issues/7730)).
- **Environment/portability hardening**: Replace `which` with `command -v` ([#7795](https://github.com/earendil-works/pi/pull/7795), [#7796](https://github.com/earendil-works/pi/issues/7796)), fix `APPEND_SYSTEM.md` auto-discovery ([#7794](https://github.com/earendil-works/pi/issues/7794)), and raise Undici header limits ([#7791](https://github.com/earendil-works/pi/issues/7791)).

## Developer Pain Points

- **Context/compaction reliability**: Compaction not triggering, post-compaction stalls, and invalid transcript continuation after settlement ([#6879](https://github.com/earendil-works/pi/issues/6879), [#7020](https://github.com/earendil-works/pi/issues/7020), [#5886](https://github.com/earendil-works/pi/issues/5886)).
- **Extension lifecycle bugs around reload/session boundaries**: `Agent.reset()` during an active run leaves assistant-only transcripts ([#7703](https://github.com/earendil-works/pi/issues/7703)), `/reload` breaks custom tool renderers ([#7740](https://github.com/earendil-works/pi/issues/7740)), and `agent_end` `sendMessage({ triggerTurn: false })` still starts a turn ([#7783](https://github.com/earendil-works/pi/issues/7783)).
- **Provider-compatibility whack-a-mole**: DeepSeek `reasoning_content` ([#7702](https://github.com/earendil-works/pi/issues/7702)), Baseten max-token mismatches ([#7726](https://github.com/earendil-works/pi/issues/7726)), strict-mode omissions ([#7250](https://github.com/earendil-works/pi/issues/7250)), and namespace drops ([#7709](https://github.com/earendil-works/pi/issues/7709)).
- **Long-session performance and TUI crashes**: High CPU/memory on macOS ([#7730](https://github.com/earendil-works/pi/issues/7730)) and session-resume crashes ([#7798](https://github.com/earendil-works/pi/issues/7798)) are especially painful for users running Pi as a daily driver.
- **Behavioral regressions from defaults**: The PI_* guideline encouraging unnecessary bash calls ([#7128](https://github.com/earendil-works/pi/issues/7128)) and the Node 23 startup failure ([#7771](https://github.com/earendil-works/pi/issues/7771)) show how sensitive the community is to default-prompt and runtime changes.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-08

## Today’s Highlights

Qwen Code shipped a new nightly (`v0.21.7-nightly.20260807.fca8f3c1f`) with a CI fix around autofix takeover admission. Community issue traffic is concentrated on terminal rendering pain points — Windows Chinese pinyin display, tmux flicker, PuTTY middle-mouse regressions, and web-terminal TUI tearing. On the PR side, the project is actively aligning ACP/OpenTelemetry behavior, hardening daemon-side Git safety, and expanding the Web Shell with fullscreen panels and tmux-backed interactive terminals.

## Releases

### v0.21.7-nightly.20260807.fca8f3c1f
Nightly release containing `fix(ci): surface blocked autofix takeover admission` by [@qqqys](https://github.com/qqqys) via [PR #8410](https://github.com/QwenLM/qwen-code/pull/8410).  
🔗 [Release page](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260807.fca8f3c1f)

---

## Hot Issues

1. **Windows terminal Chinese input pinyin is illegible** — [#8625](https://github.com/QwenLM/qwen-code/issues/8625)  
   Users on Windows terminals report that pinyin input is visually unreadable. The issue has a `welcome-pr` label, so maintainers appear open to community fixes. **6 comments.**

2. **Desktop 0.1.0 crashes on Windows when opening a workspace** — [#8615](https://github.com/QwenLM/qwen-code/issues/8615)  
   P1 bug: bundled runtime fails with `EISDIR lstat 'C:'` on startup. Closed, but an important signal for Windows desktop stability. **5 comments.**

3. **tmux flicker when using Qwen Code over SSH/iTerm2** — [#8562](https://github.com/QwenLM/qwen-code/issues/8562)  
   User reports flashing only inside tmux panes; they used Qwen 3.8 Max to narrow the cause back to Qwen Code versions. Still open and needs triage. **5 comments.**

4. **`qwen mcp list` hangs forever on SSE servers that never send `endpoint`** — [#8550](https://github.com/QwenLM/qwen-code/issues/8550)  
   Slow or non-compliant SSE MCP servers can hang the CLI indefinitely rather than timing out. Labeled `ready-for-agent`. **4 comments.**

5. **Windows standalone installer fails when `Get-FileHash` can’t be resolved** — [#7118](https://github.com/QwenLM/qwen-code/issues/7118)  
   SHA-256 verification failure derails the standalone install path. Long-running issue with community 👍 support. **4 comments, 3 👍.**

6. **Middle-mouse selection/copy broken in PuTTY over SSH** — [#8672](https://github.com/QwenLM/qwen-code/issues/8672)  
   Regression after upgrading to 0.21.1: xterm-style middle-button paste no longer works. **3 comments.**

7. **TUI flickering/screen tearing in web-based terminals** — [#8659](https://github.com/QwenLM/qwen-code/issues/8659)  
   Virtualized History mode does full-screen ANSI redraws that break web terminals like Alibaba Cloud Workbench. **3 comments.**

8. **`OTEL_METRICS_EXPORTER=otlp` silently disables metrics export** — [#8697](https://github.com/QwenLM/qwen-code/issues/8697)  
   Standard OpenTelemetry env vars from shared collector setups cause qwen-code telemetry startup to fail internally; traces keep flowing while native metrics go silent. **2 comments.**

9. **`integration-tests/` has never been type checked** — [#8692](https://github.com/QwenLM/qwen-code/issues/8692)  
   A `"//"` documentation key inside `compilerOptions.paths` triggers `TS5063`, aborting `tsc` before any check runs. A subtle but significant infra/correctness gap. **2 comments.**

10. **Memory index stale after `/remember`; memory content lost on compaction** — [#6487](https://github.com/QwenLM/qwen-code/issues/6487)  
   Core memory degradation issue: `MEMORY.md` is written to disk but the active system instruction isn’t refreshed, and compaction can lose content. **3 comments.**

---

## Key PR Progress

1. **[#8509](https://github.com/QwenLM/qwen-code/pull/8509) — fix(cli): keep stream-json sessions alive after interrupt** *(closed)*  
   Separates reusable session lifetime from active-turn cancellation, so `interrupt()` no longer breaks the session control dispatcher.

2. **[#8616](https://github.com/QwenLM/qwen-code/pull/8616) — feat(telemetry): align session lifecycle with OpenTelemetry**  
   Adds standard `session.start` / `session.end` LogRecords with `session.id` and `session.previous_id` for resumed conversations.

3. **[#8526](https://github.com/QwenLM/qwen-code/pull/8526) — feat(cli): expose reasoning effort through ACP**  
   Adds a standard ACP `thought_level` selector with Default/Low/Medium/High/Extra high/Max support.

4. **[#8528](https://github.com/QwenLM/qwen-code/pull/8528) — fix(acp): emit standard context usage updates**  
   Sends the ACP `usage_update` notification after each live main-session model round, using prompt context occupancy or provider token totals.

5. **[#8525](https://github.com/QwenLM/qwen-code/pull/8525) — fix(core): resolve Qwen 3.8 reasoning budget conflicts**  
   Prevents simultaneous `reasoning_effort` and `thinking_budget` from being sent when the settings come from different configuration layers.

6. **[#8687](https://github.com/QwenLM/qwen-code/pull/8687) — feat(daemon): guard cross-worktree Git mutations**  
   Adds a host-side guard for `run_shell_command` in `qwen serve`, blocking mutations when `-C`, `--work-tree`, or `--git-dir` escape the session workspace.

7. **[#8613](https://github.com/QwenLM/qwen-code/pull/8613) — feat(web-shell): tmux-backed interactive terminal sub-agent**  
   Lets an agent drive interactive CLIs/REPLs/TUI apps inside a tmux session with a live interactive terminal view in the Web Shell.

8. **[#8614](https://github.com/QwenLM/qwen-code/pull/8614) — feat(web-shell): add fullscreen view for the right artifact panel**  
   Adds expand/collapse controls to the panel hosting artifacts, subagents, review changes, monitors, and scheduled tasks.

9. **[#8415](https://github.com/QwenLM/qwen-code/pull/8415) — fix(serve): coordinate caller-supplied session IDs**  
   Improves `qwen serve` handling of client-provided session IDs, reducing collisions and lifecycle ambiguity.

10. **[#8481](https://github.com/QwenLM/qwen-code/pull/8481) — fix(cli): prefer `wl-copy` on Wayland**  
   On Wayland sessions, Qwen Code now prefers native `wl-copy`, falling back to `xclip`, `xsel`, and OSC 52 when unavailable.

---

## Feature Request Trends

- **Desktop app + Web Shell convergence**  
  Multiple requests push for Web Shell as the primary desktop UI surface, with composer toolbar redesigns, workspace switching, and execution-context selectors.  
  [#8092](https://github.com/QwenLM/qwen-code/issues/8092), [#6699](https://github.com/QwenLM/qwen-code/issues/6699), [#6701](https://github.com/QwenLM/qwen-code/issues/6701)

- **Local/remote access and browser control**  
  Users want QR-code pairing for phone access to local sessions and a direct WebBridge for browser control without requiring MCP.  
  [#8595](https://github.com/QwenLM/qwen-code/issues/8595), [#8699](https://github.com/QwenLM/qwen-code/issues/8699)

- **Omni multimodal experimentation**  
  The protected `omni-experiment` track continues to drive multimodal file recognition, metadata handling, and reliable S3 delivery with caching/recovery.  
  [#8197](https://github.com/QwenLM/qwen-code/issues/8197), [#8185](https://github.com/QwenLM/qwen-code/issues/8185)

- **Workflow orchestration policy**  
  There is growing demand for the `Workflow` tool to describe *when* to use workflows, how to size them, and how to verify outputs, not just runtime syntax.  
  [#8690](https://github.com/QwenLM/qwen-code/issues/8690), [#8694](https://github.com/QwenLM/qwen-code/pull/8694)

- **Telemetry and observability improvements**  
  Requests include runtime/client attribution in usage telemetry and robust behavior when standard OTel env vars are present.  
  [#8660](https://github.com/QwenLM/qwen-code/issues/8660), [#8697](https://github.com/QwenLM/qwen-code/issues/8697)

- **Localization and channel integrations**  
  Korean docs support, DingTalk `interactiveCards` management, and Feishu sender/group label enrichment are all seeing activity.  
  [#8551](https://github.com/QwenLM/qwen-code/issues/8551), [#8515](https://github.com/QwenLM/qwen-code/issues/8515), [#8566](https://github.com/QwenLM/qwen-code/issues/8566)

---

## Developer Pain Points

- **Terminal rendering remains the top complaint bucket**  
  Windows pinyin display, tmux flicker, PuTTY mouse regressions, and web-terminal TUI tearing all point to ongoing terminal compatibility work.  
  [#8625](https://github.com/QwenLM/qwen-code/issues/8625), [#8562](https://github.com/QwenLM/qwen-code/issues/8562), [#8672](https://github.com/QwenLM/qwen-code/issues/8672), [#8659](https://github.com/QwenLM/qwen-code/issues/8659)

- **Windows installation/startup reliability**  
  The standalone installer’s `Get-FileHash` failure and the Desktop app’s Windows `EISDIR` crash show that Windows-specific packaging and runtime paths still need hardening.  
  [#7118](https://github.com/QwenLM/qwen-code/issues/7118), [#8615](https://github.com/QwenLM/qwen-code/issues/8615)

- **MCP/session lifecycle edge cases**  
  SSE MCP servers that never send `endpoint` can hang the CLI, while stream-json interruption can abort reusable session controls. Fixes are in progress, but these remain high-friction areas.  
  [#8550](https://github.com/QwenLM/qwen-code/issues/8550), [#8495](https://github.com/QwenLM/qwen-code/issues/8495), [#8475](https://github.com/QwenLM/qwen-code/pull/8475)

- **Memory/context management confusion**  
  Stale `MEMORY.md` indexes, lost memory on compaction, duplicated context percentage displays, and hidden queued-message indicators degrade long-session UX.  
  [#6487](https://github.com/QwenLM/qwen-code/issues/6487), [#8695](https://github.com/QwenLM/qwen-code/issues/8695), [#8666](https://github.com/QwenLM/qwen-code/issues/8666)

- **Observability configuration friction**  
  A standard `OTEL_METRICS_EXPORTER=otlp` environment variable can silently disable all native metrics, making qwen-code harder to operate in shared OTel-instrumented toolchains.  
  [#8697](https://github.com/QwenLM/qwen-code/issues/8697)

- **CI/test infrastructure debt**  
  The integration test suite has never been type-checked due to a tsconfig error, and main-branch E2E failures continue to surface around ACP cron/session behavior.  
  [#8692](https://github.com/QwenLM/qwen-code/issues/8692), [#8679](https://github.com/QwenLM/qwen-code/issues/8679)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-08-08

## Today's Highlights

Activity today is focused on clearing the v0.9.4 release path: a CI-fix PR targets the remaining release blockers, while dogfooding continues to surface agent-spawn and permission issues. On the feature side, the project is consolidating around mixed-model fleets, subagent state isolation, and persistent session UX. No new release was cut in the last 24 hours.

## Hot Issues

- [v0.9.4 release-blocker: agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED (#5123)](https://github.com/Hmbown/CodeWhale/issues/5123)  
  A dogfooded release blocker: a delegate labeled `builder` runs with a read-only live tool contract and cannot execute its assigned gates. Important because it directly blocks v0.9.4 and exposes inconsistency between labels and actual capabilities.

- [Large text processing session interruption/stall (#1425)](https://github.com/Hmbown/CodeWhale/issues/1425)  
  User attempted to analyze a multi-million-character novel by splitting it into 10 subagents; `agent_wait` timeouts repeatedly froze the session. Highlights subagent orchestration reliability limits for long-running workloads.

- [Dead-code sweep: 464 #[allow(dead_code)] attributes are hiding drift (#4785)](https://github.com/Hmbown/CodeWhale/issues/4785)  
  The tree carries 464 `allow(dead_code)` attributes across 143 files, making it impossible for the compiler to report dead-code drift. A code-health issue with 5 comments and clear measured impact.

- [feat: sidebar sessions panel with auto-resume and session history browsing (#2934)](https://github.com/Hmbown/CodeWhale/issues/2934)  
  Closed enhancement with 13 comments, the highest engagement in this batch. Sessions are currently only reachable via `Ctrl+R` or `--continue`, so persistent sidebar navigation is a clear UX demand.

- [Not capable of cross-session memory (#2492)](https://github.com/Hmbown/CodeWhale/issues/2492)  
  User reports that restarts lose previous-session memory, and forced memory writes are not read back automatically. Fast responses are praised, but lack of persistent memory hurts usability.

- [Switching providers can retain an unrelated default model (#5034)](https://github.com/Hmbown/CodeWhale/issues/5034)  
  A v0.9.4 release blocker: switching to OpenAI may leave the default model as `gpt-5.5` inherited from another route. Provider and model resolution need to update as one coherent unit.

- [Isolate stale failed-agent state between CodeWhale sessions (#4416)](https://github.com/Hmbown/CodeWhale/issues/4416)  
  Opening a second instance in the same workspace shows failed-agent rows from an earlier session even though the new session reports zero active work. Confusing stale UI state with real reliability impact.

- [ExecPolicy deny rules evadable via single-& chains and subshell wrapping (#5161)](https://github.com/Hmbown/CodeWhale/issues/5161)  
  The command segmenter splits on `&&`, `||`, `|`, and `;`, but not on single `&`, allowing bypasses like `ls & rm -rf /`. Security-relevant issue that likely needs a follow-up fix.

- [v0.9.3 Refactor: converge runtime ownership, delete duplication, and ship one executable (#3306)](https://github.com/Hmbown/CodeWhale/issues/3306)  
  Umbrella architecture issue: 18 Rust packages, ~771k lines, with ~87% still inside `codewhale-tui` and parallel runtime/tool/config/session paths. Important for reducing long-term maintenance burden.

- [Persist a reviewable plan artifact with line comments (#4390)](https://github.com/Hmbown/CodeWhale/issues/4390)  
  Plan mode has strong write gates and plan views, but the accepted strategy still lives in process state/transcript rather than a shareable, stable plan document.

## Key PR Progress

- [fix(release): clear the four CI blockers holding v0.9.4 (#5282)](https://github.com/Hmbown/CodeWhale/pull/5282)  
  Closes the remaining red-lane CI issues that were preventing the v0.9.4 publish.

- [docs(readme): lead with mixed fleets — any model in any role (#5283)](https://github.com/Hmbown/CodeWhale/pull/5283)  
  Reframes the README around saved roles that pin provider, model, and reasoning tier, rather than “provider switching.”

- [fix(subagent): stop counting finished children as shared-checkout contenders (#5284)](https://github.com/Hmbown/CodeWhale/pull/5284)  
  Fixes false “cannot prove bounded file target” errors that blocked a builder subagent from simple workspace writes.

- [fix(tui): stop stale cached session title from pinning New Session (#5258)](https://github.com/Hmbown/CodeWhale/pull/5258)  
  Session titles stayed “New Session” because stale in-memory metadata overwrote computed titles after the first message.

- [feat(mcp): background incremental registry sync (#5256)](https://github.com/Hmbown/CodeWhale/pull/5256)  
  Registry sync becomes cache-first and non-blocking; fresh local snapshots serve immediately while downloads run in the background.

- [Layer 5.3: Palette, completion, and discovery filtering (#5255)](https://github.com/Hmbown/CodeWhale/pull/5255)  
  Verifies and consolidates user-command integration across the command palette and slash-completion surfaces following the command-boundary refactor.

- [feat(config): add model = auto for prompt-based tier selection (#5257)](https://github.com/Hmbown/CodeWhale/pull/5257)  
  Adds automatic selection between `deepseek-v4-pro` and `deepseek-v4-flash` based on prompt complexity.

- [feat(subagents): allow embedders to isolate runtime state roots (#5252)](https://github.com/Hmbown/CodeWhale/pull/5252)  
  Adds optional `subagent_state_root` so embedding hosts can keep delegated-agent state session-owned without changing legacy defaults.

- [Build fix for FreeBSD (#5254)](https://github.com/Hmbown/CodeWhale/pull/5254)  
  rquickjs has no FreeBSD bindings by default; this makes the build proceed via the `bindgen` feature instead of failing.

- [docs: add Windows beginner guide in zh-CN (#5229)](https://github.com/Hmbown/CodeWhale/pull/5229)  
  New Chinese-language Windows guide covering install, config, model switching, modes, permissions, and FAQs; validated on Windows 10.

## Feature Request Trends

- **Persistent session and memory UX** is the strongest recurring direction: sidebar session browsers, auto-resume, session history, cross-session memory, and durable named Fleet configurations.
- **Subagent and fleet lifecycle controls** are in high demand: `resume_from` continuation chains, advisor watchers, isolated runtime state roots, and bounded step budgets.
- **Configuration discoverability** keeps appearing: documented config keys should be editable and persistable from the TUI, Fleet setup should show model capabilities, and `model = auto` should hide model-tier decisions from the user.
- **Plan/artifact continuity** is becoming a theme: users want stable reviewable plan documents and a structured survival contract for compaction.
- **Localization expansion** continues: many user-visible TUI strings are still hardcoded English despite `zh-Hant` support.
- **Plugin on-ramp improvements** are requested: runtime exists, but install-from-source flow and discoverability are still missing.

## Developer Pain Points

- **No cross-session memory**: restarts forget context, and forced memory writes are not consistently reloaded.
- **Long-running subagent workloads stall**: parallel subagents can time out and freeze the whole session, with no clean resume path.
- **Misleading or stale UI state**: old failed-agent rows leak into new sessions, session titles stay pinned to “New Session,” and API-key save confirmations name the wrong destination.
- **Config/provider confusion**: switching providers can retain irrelevant default models, and several documented config keys cannot be edited from the TUI.
- **Approval flow contradictions**: prompts teach tool-call-as-proposal, but batch approval rejects calls; user-typed `!` shell commands still hit the approval modal.
- **Codebase drift and release friction**: 464 `allow(dead_code)` attributes mask dead code, duplicate Job/Task managers persist, CI blockers delayed v0.9.4, and some tests read real user home configs instead of an isolated test env.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*