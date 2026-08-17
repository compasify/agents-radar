# AI CLI Tools Community Digest 2026-08-17

> Generated: 2026-08-16 23:09 UTC | Tools covered: 9

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
**Coverage window: 2026-08-17 (24h)** | **Tools: 9**

---

## 1. Ecosystem Overview

The AI CLI ecosystem has shifted decisively from feature velocity to reliability hardening. Across eight active tools, the dominant community complaints are session-state corruption, TUI/terminal instability, usage-metering confusion, and sandbox/security boundary failures — all of which erode trust in agentic autonomy. Open-source contributors are landing protocol-level fixes (MCP schema normalization, ACP token accounting, OAuth device flows), while vendors iterate on nightly/preview cadences and re-validate benchmarks. No single tool dominates; each is differentiating on platform support (Windows/macOS/Linux), orchestration depth (multi-agent teams, fleets), and integration surface (VS Code, GitHub, Slack, mobile). The absence of a unified MCP/agent standard remains the ecosystem's largest structural tax.

---

## 2. Activity Comparison

Counts reflect top items surfaced in each tool's digest for the 24h window, not total GitHub traffic.

| Tool | Hot Issues | Active PRs | Discussions | Releases (24h) |
|---|---|---|---|---|
| Claude Code | 10 | 3 | 0 reported | None |
| OpenAI Codex | 10 | 10 | 6 | rust-v0.148.0-alpha.20 |
| Gemini CLI | 10 | 10 | 0 reported | v0.56.0-nightly.20260816 |
| GitHub Copilot CLI | 10 | 1 | 0 reported | None |
| OpenCode | 10 | 10 | 0 reported | None |
| Pi | 10 | 8 | 1 | None |
| Qwen Code | 10 | 10 | 0 reported | v0.21.12-preview.5 + v0.21.11-nightly |
| CodeWhale | 10 | 10 | 0 reported | v0.9.8 (tag; publication halted) |
| DeepSeek Harness | 0 | 0 | 0 | None |

**Notes:** DeepSeek Harness had no community activity in the window. CodeWhale's v0.9.8 tag exists, but the publish train was halted to fix release blockers (PR #5425). Copilot CLI's PR throughput is notably low (1 PR) relative to its issue engagement (10 hot issues).

---

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities:

**Session state integrity & lifecycle.** Claude Code (#65669 session-group reset after updates, #77147 cross-session content bleed), Copilot CLI (#4505 stale connection IDs, #4474 silent chat archival), Codex (#20833 hidden local threads, #38893 timestamp fix). *Need: durable, restorable, leak-free session persistence.*

**TUI/terminal robustness.** Claude Code (#76816 SGR mouse leak, #76838 renderer death), OpenCode (#7957 accidental Ctrl+C exit, #20458 escape leakage after exit), Pi (#5023 random scroll, #8029 prompt-editor latency, #6300 Windows redraw), CodeWhale (#5424 TUI crash), Gemini (#21477 init hang, #25166 shell stuck "Waiting input"). *Need: interruptible, non-corrupting, platform-stable terminals.*

**MCP server management & OAuth.** Copilot CLI (#4490 Atlassian OAuth regression, #4472 concurrent refresh race, #4463 Windows sockets), Gemini (#28839 MCP schema normalization), Codex (#11765 MCP server lifecycle UX). *Need: validated, race-free, GUI-manageable MCP connectivity.*

**Usage metering, billing & cost transparency.** Claude Code (#75740 limit burn, #77036 lockstep percentages), OpenCode (#33318 Zen balance ignored, #42938 plan blocks despite paid balance), Pi (#8218 cache-token inflation ~120×, #8061 context budget ignores output reservation), Copilot CLI (#4504 quota API returns wrong reset date). *Need: accurate, explainable, fallback-safe billing.*

**Agent/subagent truthfulness & control.** Gemini (#22323 false `GOAL` success, #22093 agents running despite disabled), Qwen (#9282 tasks never dispatched, #9283 prompts contradict runtime), CodeWhale (#5123 read-only delegate blocks itself), Copilot CLI (#4473 unsupported reasoning effort). *Need: honest termination reasons, correct dispatch, config honored everywhere.*

**Sandboxing & security isolation.** Qwen (#9089 PAT-bearing jobs on shared hosts, #9214 ephemeral container gates), CodeWhale (#5428/#5435 read-only scout shells, delegation never widens authority), Copilot CLI (#28248 sandbox ACL breakage), Gemini (#19873 OS-level sandboxing). *Need: zero-trust execution boundaries, not just prompts.*

**Provider/model metadata accuracy.** Pi (#7870 catalog overrides true context window), CodeWhale (#5440 fabricated output ceilings, #5441 inferred context windows), Codex (#37487 Azure empty tool descriptions). *Need: honest, verifiable model capabilities.*

**Programmatic & composable surfaces.** Gemini (#28843 `--list-models` JSON), Codex (#38817 raw config overrides in TS SDK), Qwen (#9127 session media references end-to-end), Pi (#8214 RPC slash-command completions), OpenCode (#37671 headless temp-file hygiene). *Need: CI-friendly, scriptable, SDK-complete CLIs.*

---

## 4. Differentiation Analysis

| Tool | Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise reliability, skills/permissions, TUI depth | Professional devs on macOS; large enterprise installs | Full-featured CLI + desktop; slow fix cadence (3 PRs), docs drift a known gap |
| **OpenAI Codex** | Desktop+CLI+TS SDK; mobile/remote ambitions | OpenAI-platform users; VS Code and terminal-heavy devs | Rust CLI, alpha release train; TS SDK extensibility; Windows desktop is the weak spot |
| **Gemini CLI** | Protocol engineering (ACP/A2A), memory system | Gemini API users; MCP-heavy workflows | Fast nightly cadence; strong external contributors; known P1 hang cluster |
| **GitHub Copilot CLI** | GitHub/Slack ecosystem, plugin lifecycle | Copilot subscribers; GitHub-centric teams | SDK server + CLI; smallest PR throughput; release regressions (1.0.80) hurting trust |
| **OpenCode** | Provider-agnostic terminal UX, plugin hooks | TUI purists; multi-provider users | OpenTUI-based; headless mode; plugin request hooks; billing fallback bugs |
| **Pi** | Extension/RPC architecture, token-accounting precision | Plugin developers; provider-catalog users | Coding-agent core with rich RPC API; community-authored providers (Kiro, xAI, MiniMax) |
| **Qwen Code** | Multi-agent team mode, `/review` QA pipeline, CI hardening | Qwen users; PR-review automation; team workflows | Benchmark-validated (SWE-bench, Terminal-Bench); containerized verification; rapid self-hardening |
| **CodeWhale** | Fleet/subagent delegation, honest metadata | Teams running delegated multi-agent workflows | Read-only scout/reviewer postures; release discipline (halted publish over blockers); security audits |
| **DeepSeek Harness** | (Dormant in window) | — | — |

**Key differentiators:** OpenCode and Pi compete for the provider-agnostic terminal user; Qwen and CodeWhale both target multi-agent delegation but from different angles (Qwen: team-mode messaging/UI; CodeWhale: authority containment). Codex and Copilot CLI are the two most platform-integrated (desktop, VS Code, GitHub), and both are paying the complexity tax with Windows-specific regressions. Gemini is the most contributor-driven of the vendor tools, with a single community member (Xsidz) landing four protocol fixes in one window.

---

## 5. Community Momentum & Maturity

**High velocity, externally contributed:** Gemini CLI (10 PRs, nightly release, dense community-contributed fix batches), OpenAI Codex (10 PRs, 1 alpha release, 6 discussions), Qwen Code (10 PRs, 2 releases, benchmark reruns), OpenCode (10 PRs, plugin hooks).

**Conversation-heavy but slow to ship:** Claude Code (10 hot issues, only 3 PRs, no release; duplicate reports on macOS LAN and Fable safety blocks suggest support overload). Copilot CLI is the clearest warning sign: 10 hot issues but only 1 PR, with two release regressions (#4490) and an OOM-compaction bug (#4506) unresolved.

**Boutique hardening:** Pi (8 targeted fixes, 1 discussion) and CodeWhale (10 PRs but release halted over blockers) are smaller communities with disciplined engineering cultures; CodeWhale's honesty audits (#5440–#5443) are a maturity signal, not a bug report.

**Maturity read:** Claude Code has the largest apparent install base (issue volume, duplicate churn) but the slowest relative fix velocity. Codex and Gemini are racing on features while Windows/macOS stability lags behind. Copilot CLI's release quality is eroding user confidence. Qwen Code is investing unusually heavily in verification and CI trust — a differentiator for teams that depend on automated review.

---

## 6. Trend Signals

1. **Reliability is the new feature.** Hangs, stuck states, and "busy forever" recovery failures appear across Gemini, OpenCode, Pi, and CodeWhale. Developers will increasingly evaluate tools on interruptibility and crash recovery, not just model quality.

2. **Billing/usage transparency is a trust battleground.** Paid balances ignored (OpenCode #33318/#42938), cache tokens inflating usage 120× (Pi #8218), and lockstep quota displays (Claude Code #77036) will drive demand for auditable, itemized metering.

3. **Agentic truthfulness is emerging as a first-class requirement.** False `GOAL` success (Gemini #22323), contradictory agent-team prompts (Qwen #9283), and fabricated model capability claims (CodeWhale #5440) push the industry toward verifiable termination reasons and honest capability metadata.

4. **Security isolation is moving from configuration to architecture.** Ephemeral container gates (Qwen #9214), OS-level sandboxing proposals (Gemini #19873), and "delegation never widens authority" policies (CodeWhale #5435) signal that prompt-level guardrails are no longer considered sufficient.

5. **MCP is in its growing-pains phase.** OAuth issuer validation regressions (Copilot CLI #4490), schema normalization (Gemini #28839), and lifecycle management (Codex #11765) indicate the protocol works — but only when clients, servers, and auth flows are all correct simultaneously.

6. **Cross-platform desktop fragility persists.** Windows failures concentrate in Codex, Copilot CLI, and Qwen; macOS failures concentrate in Claude Code and CodeWhale. Teams standardizing on one CLI should verify their primary OS early.

7. **CLIs are becoming programmable infrastructure.** `--list-models` (Gemini), raw config overrides (Codex SDK), session media references (Qwen), and headless-mode hygiene (OpenCode) point to CI/CD and orchestrator adoption as a growth vector.

8. **Docs and metadata honesty are now competitive differentiators.** Claude Code's documentation-drift cluster and CodeWhale's "shipped but invisible" audit (#5442) suggest that accurate docs are becoming a selection criterion for sophisticated buyers.

**Recommendation for developers:** prioritize tools with demonstrated release discipline (Qwen, CodeWhale, Gemini nightly track), verify billing behavior on your provider before committing, and treat any tool with unresolved session-corruption or false-completion bugs as not yet production-safe for autonomous long-running work.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights

Data window: 2026-08-17 · Source: github.com/anthropics/skills

## 1. Top Skills Ranking

Most-discussed PRs by community comment activity. All are currently **open**.

1. **skill-creator eval reliability fixes** — [#1298](https://github.com/anthropics/skills/pull/1298)  
   Fixes `run_eval.py` so skill descriptions no longer report 0% recall, with additional Windows stream-reading and parallel-worker fixes. Discussion focuses on the root cause of broken trigger detection and repeated independent reproductions.

2. **document-typography skill** — [#514](https://github.com/anthropics/skills/pull/514)  
   Typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Conversation centers on common document-quality failures in Claude-generated output.

3. **pdf skill case-sensitivity fix** — [#538](https://github.com/anthropics/skills/pull/538)  
   Corrects eight uppercase/lowercase file-reference mismatches in `skills/pdf/SKILL.md`, which break on case-sensitive filesystems.

4. **ODT skill** — [#486](https://github.com/anthropics/skills/pull/486)  
   Adds OpenDocument Format support: create, fill, read, and convert `.odt`/`.ods` files, including HTML conversion and LibreOffice/ISO-standard triggers.

5. **frontend-design skill improvement** — [#210](https://github.com/anthropics/skills/pull/210)  
   Revises the frontend-design skill for clarity, actionability, and single-conversation usefulness. Discussion highlights the need for instructions Claude can actually execute.

6. **skill-quality-analyzer + skill-security-analyzer** — [#83](https://github.com/anthropics/skills/pull/83)  
   Two meta-skills: one evaluates skill quality across structure, documentation, and examples; the other analyzes security properties.

7. **docx tracked-change ID collision fix** — [#541](https://github.com/anthropics/skills/pull/541)  
   Prevents document corruption when the DOCX skill adds tracked changes to files with existing bookmarks, caused by shared `w:id` namespaces in OOXML.

8. **skill-creator YAML validation warning** — [#539](https://github.com/anthropics/skills/pull/539)  
   Adds pre-parse validation to detect unquoted `description` fields containing YAML special characters, preventing silent frontmatter truncation.

## 2. Community Demand Trends

- **Skills infrastructure reliability** — [#556](https://github.com/anthropics/skills/issues/556), [#1419](https://github.com/anthropics/skills/issues/1419), [#1487](https://github.com/anthropics/skills/issues/1487)  
  Strong demand for eval tooling that actually triggers skills, cross-platform Windows support, and context-window budgeting — especially the `claude-api` skill injecting ~156k tokens.

- **Security and trust boundaries** — [#492](https://github.com/anthropics/skills/issues/492), [#1175](https://github.com/anthropics/skills/issues/1175)  
  Users want official namespace guarantees, permission-aware skill design, and safer handling of enterprise documents such as SharePoint Online content.

- **Skill lifecycle management** — [#228](https://github.com/anthropics/skills/issues/228), [#62](https://github.com/anthropics/skills/issues/62), [#189](https://github.com/anthropics/skills/issues/189), [#202](https://github.com/anthropics/skills/issues/202)  
  Demand for org-wide sharing, duplicate-skill detection, recovery from broken installs, and modernization of `skill-creator` into an operational best-practice skill.

- **Agent memory, governance, and quality gates** — [#1329](https://github.com/anthropics/skills/issues/1329), [#412](https://github.com/anthropics/skills/issues/412), [#1385](https://github.com/anthropics/skills/issues/1385)  
  Community proposals for compact agent-state memory, AI agent governance patterns, and multi-stage reasoning quality verification.

- **Enterprise/platform integration** — [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29)  
  Continued interest in exposing Skills as MCPs and making them work with AWS Bedrock.

## 3. High-Potential Pending Skills

Active, not-yet-merged PRs that may land soon:

- **testing-patterns skill** — [#723](https://github.com/anthropics/skills/pull/723)  
  Covers the Testing Trophy model, unit testing, React component testing, and full-stack testing philosophy.

- **ServiceNow platform skill** — [#568](https://github.com/anthropics/skills/pull/568)  
  Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, CSDM, SecOps, and IntegrationHub.

- **self-audit skill** — [#1367](https://github.com/anthropics/skills/pull/1367)  
  Mechanical output-file verification plus a four-dimension reasoning audit before delivery.

- **pyxel retro game development skill** — [#525](https://github.com/anthropics/skills/pull/525)  
  Workflow support for building retro/pixel-art games with `pyxel-mcp`.

- **plan-file-hygiene skill** — [#1479](https://github.com/anthropics/skills/pull/1479)  
  Lifecycle management for planning artifacts, addressing accumulation of stale planning files.

- **SAP-RPT-1-OSS predictor skill** — [#181](https://github.com/anthropics/skills/pull/181)  
  Predictive analytics on SAP business data using SAP’s open-source tabular foundation model.

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for making the Skills system itself trustworthy and reliable — fixing evaluation tooling, security/trust boundaries, packaging deduplication, and context-window efficiency — before expanding into new domain skills.

---

# Claude Code Community Digest — 2026-08-17

## Today's Highlights
Community activity this week centers on long-standing macOS networking/TUI bugs, session state loss after app updates, and a pervasive docs gap around skills and permission modes. No new releases were published in the last 24 hours. Duplicate reports continue to pile up around false-positive safety blocks for routine code auditing with Fable 5.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. [Issue #65669 — Session folders/groups reset after app update (Windows desktop)](https://github.com/anthropics/claude-code/issues/65669)  
   Highly reacted (5 👍) and still open. Users lose their carefully organized session groups every time the desktop app updates. Strong signal that state persistence is a key reliability concern.

2. [Issue #74378 — Bash tool cannot access LAN devices on macOS](https://github.com/anthropics/claude-code/issues/74378)  
   The reporter notes this is the 5th+ issue on the same root cause: missing `NSLocalNetworkUsageDescription`/Info.plist handling. Community frustration is high because it has been closed/locked repeatedly without a fix.

3. [Issue #77147 — Cross-session content bleed led assistant to confabulate instructions and execute unauthorized actions](https://github.com/anthropics/claude-code/issues/77147)  
   A serious security-adjacent report: session content leaks across contexts, causing the assistant to invent user instructions. Deserves immediate maintainer attention.

4. [Issue #75740 — Malformed tool calls leaking into chat + disproportionate usage-limit consumption on Opus](https://github.com/anthropics/claude-code/issues/75740)  
   Described as a ~1-week regression. Users are seeing corrupted tool output in chat and burning usage limits much faster than expected — a costly bug for heavy Opus users.

5. [Issue #76816 — Scroll-wheel SGR mouse report split leaks into prompt input](https://github.com/anthropics/claude-code/issues/76816)  
   A subtle TUI bug: partial escape sequences get inserted as literal text (e.g. `<65;92;34M…`) because of a 50ms incomplete-escape flush timer. 2 👍 and confirmed reproduction.

6. [Issue #76838 — TUI renderer + stdin die mid-session while engine keeps running (macOS)](https://github.com/anthropics/claude-code/issues/76838)  
   Terminal-independent (Ghostty and tmux). The interactive UI silently dies, but the engine continues writing to the transcript. Frustrating for users in long-running sessions.

7. [Issue #77064 — `deep-research` skill permanently disappears from autocomplete after a usage-limit hit](https://github.com/anthropics/claude-code/issues/77064)  
   Windows/VSCode specific. Only the built-in `deep-research` skill vanishes, while other skills remain available — points to a skill-state corruption bug.

8. [Issue #77036 — `/usage`: 5h block and weekly limit percentages rise in lockstep](https://github.com/anthropics/claude-code/issues/77036)  
   Users expect the 5-hour rolling window and weekly quota to scale independently. The displayed percentages moving together undermines trust in usage tracking and budgeting.

9. [Issue #77244 — Async agent monitoring loop issue (macOS)](https://github.com/anthropics/claude-code/issues/77244)  
   Open with `needs-repro`; users report the async agent monitoring loop hangs or behaves inconsistently, making background agent work unreliable.

10. [Issue #76014 — OAuth login succeeds but token is never persisted; doctor says "macOS Keychain is not writable"](https://github.com/anthropics/claude-code/issues/76014)  
    Token persistence fails even though keychain writes work fine from terminal. The contradiction breaks auth flows for native macOS users.

## Key PR Progress
Only 3 PRs were active in the last 24h:

1. [PR #87125 — Create python-package-conda.yml](https://github.com/anthropics/claude-code/pull/87125)  
   Adds a Python package Conda CI workflow. Sparse description; likely intended to standardize packaging/CI for the repo.

2. [PR #87079 — fix(security-guidance): make ** glob patterns match zero-depth paths](https://github.com/anthropics/claude-code/pull/87079)  
   Important security fix: `**/*.ts` currently requires a literal `/`, so top-level files are silently excluded from security-patterns.json rules. Makes `**` behave as documented.

3. [PR #87077 — fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents](https://github.com/anthropics/claude-code/pull/87077)  
   Fixes agent descriptions containing unquoted dialogue lines — the parser treated them as nested mappings, resulting in empty frontmatter and broken agent loading.

## Feature Request Trends
- **Theme customization depth**: [Issue #85821](https://github.com/anthropics/claude-code/issues/85821) asks for custom themes to override diff syntax-highlighting palettes, which are currently hardcoded in the binary.
- **Docs accuracy as a feature**: Many issues (e.g. #80392–#80398 from one reporter) demand that documentation match shipped behavior for auto mode, plan mode, fast mode, workflows, skills, and subagents.
- **Transparency around model gating**: Reports like #76076 indicate users want clearer visibility when task-management tools are unavailable due to model-specific gates.

## Developer Pain Points
- **macOS LAN access unfixed**: The missing local-network permission issue has been reported multiple times and remains unresolved, blocking Bash tool access to local devices.
- **False-positive safety blocks**: Duplicate issues (#75583, #75581, #75821, #75803, #75776, etc.) show users repeatedly hit Fable 5 safeguards when doing legitimate code auditing.
- **Session state instability**: Windows desktop users lose session folders/groups after updates; another report describes cross-session content bleed.
- **TUI reliability**: Renderer death, mouse-input escape leaks, and stdin failures make long interactive sessions fragile on macOS.
- **Usage/cost confusion**: Malformed tool calls consuming limits, lockstep percentage displays, and "Waiting for API response" stalls erode confidence in metering.
- **Documentation drift**: A cluster of docs issues from a single reporter highlights at least 10 places where official docs are missing or inconsistent with actual behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-17

## Today’s Highlights

Windows stability remains the dominant community pain point: the long-running freeze/stutter issue #20214 has passed 100 comments, and a second system-wide mouse-stutter report (#38546) is gaining traction. On the feature side, workspace-scoped VS Code chats (#25319) and headless remote Linux support for Codex mobile (#23200) continue to draw strong upvotes. Recent merged PRs add TUI `/cd` and Vim history-up improvements, endpoint-protection checks in `codex doctor`, and raw config overrides in the TypeScript SDK.

## Releases

- **rust-v0.148.0-alpha.20** — `0.148.0-alpha.20` was published. No detailed changelog was provided in the available data.  
  [OpenAI Codex Releases](https://github.com/openai/codex/releases)

## Hot Issues

- **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**  
  A long-running Windows performance issue with 106 comments and 85 👍. High engagement suggests a systemic desktop-app problem rather than isolated hardware/config cases.

- **[#38546 — Windows ChatGPT/Codex desktop app causes system-wide mouse stutter](https://github.com/openai/codex/issues/38546)**  
  Newer report with 31 comments and 13 👍. Users say the app becomes nearly unusable when running without elevation, making this a high-priority Windows UX regression.

- **[#25319 — Scope Codex VS Code chats to the current workspace/project](https://github.com/openai/codex/issues/25319)**  
  One of the most upvoted feature requests (28 comments, 62 👍). Developers want chat/thread history isolated per project in the VS Code extension.

- **[#23200 — Support headless remote Linux hosts for Codex mobile](https://github.com/openai/codex/issues/23200)**  
  18 comments, 48 👍. Users want always-on Linux/SSH hosts to work with mobile Codex without requiring a desktop machine to stay online.

- **[#37487 — Codex CLI 0.147.0 sends empty tool descriptions to Azure Responses API](https://github.com/openai/codex/issues/37487)**  
  12 comments, 5 👍. Breaks tool-calling for Azure users and indicates a provider-compatibility regression introduced in CLI 0.147.0.

- **[#28248 — Windows sandbox fails all read operations with “apply deny-read ACLs” after power outage](https://github.com/openai/codex/issues/28248)**  
  11 comments, 6 👍. A crash/power-loss scenario can leave the sandbox in a broken state, blocking even basic read operations.

- **[#34652 — Windows Codex app: file-edit approval buttons unresponsive in Remote SSH conversations](https://github.com/openai/codex/issues/34652)**  
  10 comments. CLI approvals work, but the desktop approval UI fails for Remote SSH sessions—a significant blocker for remote-first workflows.

- **[#20833 — Desktop project sidebar hides older workspace conversations despite existing local thread data](https://github.com/openai/codex/issues/20833)**  
  10 comments, 5 👍. Users lose visibility into local threads in the Project Timeline, making history feel incomplete or unreliable.

- **[#2379 — Undo/redo typing in the TUI](https://github.com/openai/codex/issues/2379)**  
  8 comments, 32 👍. A long-standing TUI editor gap; simple but highly requested by terminal-heavy users.

- **[#11765 — Manage MCP servers UX](https://github.com/openai/codex/issues/11765)**  
  5 comments, 45 👍. Strong demand for enabling/disabling MCP servers without manually editing `config.toml`, especially for teams with many MCP servers.

## Key PR Progress

- **[#38894 — Add working-directory commands to the TUI](https://github.com/openai/codex/pull/38894)**  
  Adds `/cd [path]` for idle local sessions while preserving conversation history and reloading project configuration.

- **[#38902 — Honor per-environment shell variable policies](https://github.com/openai/codex/pull/38902)**  
  Applies the selected turn environment’s `ShellEnvironmentPolicy` to shell commands, user shell tasks, and unified exec, improving sandbox fidelity.

- **[#38827 — Add endpoint protection checks to `codex doctor`](https://github.com/openai/codex/pull/38827)**  
  Detects endpoint-protection products on macOS/Windows and reports which Codex exclusions may be interfering.

- **[#38830 — Isolate external editor buffers from sandbox-writable paths](https://github.com/openai/codex/pull/38830)**  
  Stores editor buffer files under a protected `editor` path, preventing composer text from landing in sandbox-writable directories.

- **[#38817 — Add raw config overrides to the TypeScript SDK](https://github.com/openai/codex/pull/38817)**  
  Adds `CodexOptions.configOverrides` for ordered `--config key=value` passes, covering TOML cases that structured dotted-key config cannot represent.

- **[#38907 — Edit queued messages with Vim history-up](https://github.com/openai/codex/pull/38907)**  
  In Vim normal mode, the history-up binding restores the latest queued follow-up for editing and removes it from the queue to avoid duplication.

- **[#38893 — Restore thread timestamp maxima independently](https://github.com/openai/codex/pull/38893)**  
  Fixes desynced `updated_at_ms` / `recency_at_ms` projection cursors by loading persisted maxima with separate scalar subqueries.

- **[#38819 — Support metadata staging for reserved thread IDs](https://github.com/openai/codex/pull/38819)**  
  Adds `ThreadManager::reserve_thread_id` so host-owned state can be attached before Core starts the thread, with safeguards against resuming reserved IDs.

- **[#38837 — Share editor keymaps across TUI composer components](https://github.com/openai/codex/pull/38837)**  
  Ensures the chat composer and its embedded textarea share the same keymap snapshot, preserving custom bindings.

- **[#38899 — Move requirements policy ownership to execpolicy](https://github.com/openai/codex/pull/38899)**  
  Refactors `RequirementsExecPolicy` ownership into `codex-execpolicy` while maintaining the existing `codex-config` re-export API.

## Hot Discussions

### Q&A

- **[#9277 — “To use Codex here, create a Codex account and connect to GitHub”](https://github.com/openai/codex/discussions/9277)**  
  Users report a recurring roadblock when trying to use Codex for PR reviews. 8 comments, 6 👍.

### Ideas

- **[#38834 — Reader Mode with Read Aloud for Codex and ChatGPT desktop](https://github.com/openai/codex/discussions/38834)**  
  Proposes an audio-first reader mode for long assistant responses, plans, and code reviews.

### Show and Tell

- **[#38903 — agent-runner-mcp: sandboxed task execution with EXIT protocol + autopsy reports](https://github.com/openai/codex/discussions/38903)**  
  A zero-dependency MCP server for evidence-protected sandboxed command execution, usable from any MCP client including Codex.

- **[#38869 — AI Commit Standard: make AI-assisted commits carry verifiable evidence](https://github.com/openai/codex/discussions/38869)**  
  A proposed standard for adding verifiable context and evidence to AI-generated commits.

- **[#38868 — Codexless: let ChatGPT reuse local Codex capabilities, then call Codex only when needed](https://github.com/openai/codex/discussions/38868)**  
  A technical preview that keeps ChatGPT as the main interface and invokes Codex only for agentic turns.

- **[#38815 — Built with Codex: quality-adjusted LLM API cost comparisons across nine providers](https://github.com/openai/codex/discussions/38815)**  
  Uses Codex as the implementation/operator agent for TokenGauge Workbench, a quality-aware LLM cost comparison tool.

## Feature Request Trends

- **Workspace/project scoping and history organization**  
  Developers want chats isolated per project and better sidebars/timelines: #25319, #20833, #24295.

- **Remote-first and mobile workflows**  
  Strong demand for headless Linux hosts, mobile control independent of desktop online status, and remote-host grouping: #23200, #23699, #32519.

- **MCP server lifecycle management**  
  Users want GUI/command-level controls for enabling and disabling MCP servers instead of editing tracked `config.toml` files: #11765.

- **TUI/editor ergonomics**  
  Highly requested quality-of-life additions include undo/redo typing, keyboard shortcuts for model/reasoning effort, and reader mode with read-aloud: #2379, #26819, #38834.

- **Configuration and API flexibility**  
  Developers need raw/path-aware config overrides and per-environment policy control that structured SDK config cannot fully express: #38817, #38902.

## Developer Pain Points

- **Windows desktop instability**  
  Repeated reports of freezes, stutters, crashes, and system-wide mouse stutter: #20214, #38546, #33136.

- **Sandbox and recovery failures**  
  Windows sandbox can break after power loss, elevated setup can hit OS error 206, and local stdio MCP servers are spawned/not reaped within tasks: #28248, #32315, #38754.

- **Remote/SSH session breakage**  
  Approval buttons become unresponsive, history is duplicated/corrupted, and mobile remote control can be disabled after SSH restarts: #34652, #19267, #23699.

- **Session continuity and compaction issues**  
  Users hit repeated `/responses/compact` 404s, over-aggressive auto-compaction on short sessions, and resume opening at the wrong turn: #38856, #29426, #38792.

- **Provider-specific regressions**  
  Azure Responses API integration regressed with empty tool descriptions in CLI 0.147.0, breaking tool calls for affected users: #37487.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-17

## Today's Highlights
A quiet release day with a single nightly build, but the PR queue is active: community contributor Xsidz landed a dense batch of fixes spanning ACP token accounting, MCP schema normalization, and A2A settings merging, while SSR-agent PRs target two P1 reliability bugs — TUI initialization hangs and subagent false-success reporting. The most-voted open issue, the generalist agent hang ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), 8 👍), remains unfixed but a related TUI hang fix is now in review.

## Releases
- **[v0.56.0-nightly.20260816.g2a87e7be1](https://github.com/google-gemini/gemini-cli/tree/v0.56.0-nightly.20260816.g2a87e7be1)** — Standard nightly; no standalone notes. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260815.g2a87e7be1...v0.56.0-nightly.20260816.g2a87e7be1)

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1 bug, 12 comments. A subagent that hits its turn limit reports `status: "success"` / `Termination Reason: "GOAL"` even when it never performed analysis, masking real interruptions. A remedy PR is already up ([#28815](https://github.com/google-gemini/gemini-cli/pull/28815)).
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — P1 bug, 8 comments, **8 👍**. Simple operations like folder creation hang indefinitely when deferred to the generalist agent; users report waiting up to an hour before cancelling. Community workaround: instruct the model to avoid subagent delegation.
3. **[#25166 — Shell execution stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — P1 bug, 4 comments, 3 👍. Simple CLI commands finish but the TUI keeps showing them active while awaiting input that never comes.
4. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — P1 bug, 4 comments. The browser agent exits with `GOAL` on Wayland sessions without usable diagnostics, preventing debugging.
5. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — P2 regression, 3 comments. Subagents activate even when agents are disabled in all configurations; user expected agents mode to remain off and only MCP functionality to work.
6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — P2, 6 comments. Custom skills and sub-agents are only invoked when explicitly instructed, even for tasks that clearly match their descriptions (e.g., "gradle" / "git" skills).
7. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** — P2 enhancement, 8 comments. Proposal to let Gemini 3's native bash affinity operate safely via OS sandboxing, then route the model's intended edits after execution.
8. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — P2 EPIC, 7 comments. Investigates whether AST-aware tools can reduce token noise, misaligned reads, and improve codebase navigation vs. plain text tools.
9. **[#26522 — Auto Memory retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — P2 bug, 5 comments. Low-signal transcripts are never marked processed when the extraction agent skips them, so they keep getting re-surfaced.
10. **[#26525 — Deterministic redaction and reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — P2 security bug, 4 comments. Transcript content is sent to the model before secret redaction happens; logging can also leak skill contents.

## Key PR Progress
1. **[#28815 — Preserve original termination reason during subagent recovery](https://github.com/google-gemini/gemini-cli/pull/28815)** — Fixes #22323: keeps `MAX_TURNS`/`TIMEOUT` as the termination reason instead of rewriting it to `GOAL` after a grace-turn `complete_task`.
2. **[#28812 — Prevent indefinite TUI hang with execution timeouts](https://github.com/google-gemini/gemini-cli/pull/28812)** — Fixes #21477: `getProcessInfo()` uses `execAsync` for `ps`, which can hang a bare Linux terminal at "Initializing…" indefinitely.
3. **[#28843 — Add `--list-models` flag](https://github.com/google-gemini/gemini-cli/pull/28843)** — Community feature (Xsidz): prints available models as JSON and exits, enabling programmatic model discovery for integrations and orchestrators.
4. **[#28840 — Populate cached/thought tokens in ACP PromptResponse usage](https://github.com/google-gemini/gemini-cli/pull/28840)** — Community fix (Xsidz): `usageMetadata` cached/thought counts were silently dropped, causing ACP clients to overestimate cost by ~3× under heavy prompt caching.
5. **[#28839 — Normalize MCP tool schemas to ensure `type:object` at root](https://github.com/google-gemini/gemini-cli/pull/28839)** — Community fix (Xsidz): malformed/typeless MCP schemas from servers are rejected by strict validators like Vertex AI; this normalizes them before forwarding.
6. **[#28842 — Deep-merge nested settings to prevent user config loss](https://github.com/google-gemini/gemini-cli/pull/28842)** — Community fix (Xsidz): the A2A server's shallow spread erased user-level settings (e.g., `enableRecursiveFileSearch`) when workspace overrides existed.
7. **[#28835 — Skip user agents dir when workspace is home](https://github.com/google-gemini/gemini-cli/pull/28835)** — Eliminates spurious "Duplicate agent name" warnings when running from `~`, where project and user agent dirs resolve to the same path.
8. **[#28834 — Suppress spurious ENOENT warning for transient subdirs](https://github.com/google-gemini/gemini-cli/pull/28834)** — Stops noisy `projects.json.lock: ENOENT` warnings from the BFS workspace walker when a lock directory disappears mid-scan.
9. **[#28836 — Show Auto in `/model` with dynamic configuration enabled](https://github.com/google-gemini/gemini-cli/pull/28836)** — Fixes the missing `Auto` alias in the model picker for users without preview access but with `dynamicModelConfiguration` enabled.
10. **[#28832 — Skip environment-dependent tests with a reason instead of failing](https://github.com/google-gemini/gemini-cli/pull/28832)** — Community fix (Chirag6722): 13 Windows `packages/core` test failures (privilege-dependent, PowerShell 7-dependent) become skips with clear reasons.

## Hot Discussions
No discussion data was provided for this digest period.

## Feature Request Trends
- **Subagent reliability & observability**: truthful termination reasons ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), shareable subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), and subagent context inside bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Memory system hardening**: stop retrying low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), deterministic secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and quarantine of invalid inbox patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **AST-aware tooling**: method-precise file reads, search, and codebase mapping to cut token noise ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Safe-by-default shell execution**: OS sandboxing for the model's native bash workflow ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) and guardrails against destructive commands like `git reset --force` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Browser agent resilience**: automatic session takeover and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), respect for `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Programmatic control & self-awareness**: JSON model listing for tooling ([#28843](https://github.com/google-gemini/gemini-cli/pull/28843)), accurate CLI self-knowledge of flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), and smarter tool scoping when >128 tools are available ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).

## Developer Pain Points
- **Hangs and false completion**: a persistent cluster of P1 hangs — generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), TUI init ([#21477](https://github.com/google-gemini/gemini-cli/issues/21477)), interactive prompts ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) — plus subagent `GOAL` false-success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) erode trust in agentic autonomy.
- **Inconsistent agent activation**: subagents running despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) while, conversely, skills/subagents are underused when enabled ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — pointing to weak intent/config handling.
- **Auto Memory friction**: endless retries on low-signal sessions, secrets entering context before redaction, and silent skipping of invalid patches ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516) cluster).
- **Configuration surprise & data loss**: ignored `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), unrecognized symlinked agents ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), duplicate warnings from `~` ([#28835](https://github.com/google-gemini/gemini-cli/pull/28835)), and nested config loss ([#28842](https://github.com/google-gemini/gemini-cli/pull/28842)).
- **Platform instability**: Wayland browser failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), Windows test breakage ([#28832](https://github.com/google-gemini/gemini-cli/pull/28832)), and terminal resize/corruption issues ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-08-17

## Today's Highlights

No new release was published in the last 24 hours. The most notable activity is a cluster of MCP OAuth reliability issues, including a 1.0.80 regression affecting Atlassian MCP servers (#4490), plus a new memory-pressure watchdog bug that can loop-compact conversations until OOM (#4506). A closed Slack/SDK auth bug (#4503) received the most comments, while session resume and Windows file-locking issues remain recurring developer pain points.

## Releases

No new versions or release notes were published in the last 24h.

## Hot Issues

1. [#4503 – SDK server reports ready without auth, then Slack session creation fails generically](https://github.com/github/copilot-cli/issues/4503)  
   **CLOSED, 5 comments**  
   The SDK server reported itself ready before `COPILOT_SDK_AUTH_TOKEN` was available, causing Slack session creation to fail with a generic error. The 5 comments make it the most discussed issue in the last 24h.

2. [#4490 – Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3 regression)](https://github.com/github/copilot-cli/issues/4490)  
   **OPEN, 1 comment**  
   OAuth issuer validation now rejects Atlassian MCP servers in 1.0.80, while the same setup worked in 1.0.78. This is a release regression with direct impact on MCP users.

3. [#4506 – Memory-pressure watchdog force-compacts at 23% context usage, recovers 0.003% tokens, then loops until OOM](https://github.com/github/copilot-cli/issues/4506)  
   **OPEN, triage**  
   A long-running session is compacted based on process memory rather than actual context pressure. The compaction recovers almost nothing and repeats until OOM — a serious risk for long-lived sessions.

4. [#4507 – Repository-level enabledPlugins ignored in non-interactive `copilot -p` mode](https://github.com/github/copilot-cli/issues/4507)  
   **OPEN, triage**  
   `enabledPlugins` from `.github/copilot/settings.json` works interactively and in `plugins list`, but is ignored in prompt mode, causing inconsistent behavior across surfaces.

5. [#4505 – Resumed session retains stale connection item IDs after interrupted response](https://github.com/github/copilot-cli/issues/4505)  
   **OPEN, triage**  
   After resuming, every prompt fails with `CAPIError: 400 input item ID does not belong to this connection`. Even `/fork` cannot recover the session, making it effectively unusable.

6. [#4488 – Plugin updates fail with Access is denied when other Copilot CLI or VS Code sessions are open](https://github.com/github/copilot-cli/issues/4488)  
   **OPEN, 1 comment**  
   On Windows, unrelated sessions hold file locks that block plugin updates, even when the plugin is not actively used. This adds friction to plugin adoption in multi-session workflows.

7. [#4472 – Concurrent MCP tool calls during token refresh cancel in-flight tool calls](https://github.com/github/copilot-cli/issues/4472)  
   **OPEN**  
   When multiple tool calls refresh an expired OAuth token concurrently, each refresh creates a new `rmcp::service`, leading to “transport closed before the tool responded.” Important race condition for parallel MCP usage.

8. [#4473 – claude-haiku-4.5 sub-agent fails with reasoning effort 'medium' not supported](https://github.com/github/copilot-cli/issues/4473)  
   **OPEN**  
   Internal sub-agent routing applies a `medium` reasoning effort to `claude-haiku-4.5`, which does not support it. This indicates a model/agent configuration mismatch.

9. [#4486 – Edit permission request "times out" if not answered immediately](https://github.com/github/copilot-cli/issues/4486)  
   **OPEN**  
   Permission prompts time out when users do not respond immediately, which is especially disruptive for developers running overnight or parallel sessions.

10. [#4474 – General Chat silently archived after session resume timeout, with no restore UI](https://github.com/github/copilot-cli/issues/4474)  
    **OPEN**  
    A long-running chat was automatically archived after a 60-second resume timeout, with no way to restore it from the UI. Session lifecycle behavior is becoming a growing concern.

## Key PR Progress

Only one PR was touched in the last 24h, so a meaningful top-10 PR list cannot be formed.

- [#3163 – "ViewSonic monitor"](https://github.com/github/copilot-cli/pull/3163)  
  **OPEN, updated 2026-08-16**  
  This PR appears unrelated to Copilot CLI functionality. It references issues #2591, #3561, and #3559, and mentions “GitHub action //runners.” No relevant code changes or comments were reported.

## Feature Request Trends

- **Session lifecycle controls**  
  Users want to un-archive sessions that were marked Done (#4502), avoid silent archival after resume timeouts (#4474), and restore the previously selected agent when resuming a session (#4489).

- **Plugin dependency and settings consistency**  
  There is demand for inter- and intra-marketplace plugin dependency resolution (#4487), plus consistent handling of repository-level `enabledPlugins` across interactive and non-interactive modes (#4507).

- **MCP OAuth robustness**  
  Multiple issues ask for more reliable OAuth flows, including better issuer validation (#4490), Windows socket handling (#4463), and race-free token refresh (#4472).

- **Resource-aware compaction**  
  The memory-pressure watchdog should consider context usage before force-compacting, and should avoid destructive compaction loops (#4506).

- **Quota API correctness**  
  `account.getQuota` should return the actual quota reset date instead of the request timestamp (#4504).

## Developer Pain Points

- **MCP OAuth is fragile**  
  Repeated failures include release regressions, Windows socket errors, and concurrent refresh races (#4490, #4463, #4472).

- **Windows file-locking and permission issues**  
  Plugin updates are blocked by unrelated sessions (#4488), and MCP OAuth can fail with socket error 10013 (#4463).

- **Session state corruption and loss**  
  Resumed sessions can become permanently broken with stale connection IDs (#4505), chats can be silently archived (#4474), and agent selection is not persisted (#4489).

- **Model/agent routing mismatches**  
  Sub-agent calls fail due to unsupported reasoning effort settings (#4473).

- **Context and memory management**  
  Forced compaction based on process memory rather than context usage can result in OOM loops (#4506).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-17

## Today's Highlights
No new releases landed in the last 24 hours. Community attention is concentrated on TUI/terminal lifecycle bugs, stuck-state recovery, billing balance fallback problems, and several provider compatibility edge cases. Notable PRs are focused on TUI state correctness, shell/subagent progress rendering, plugin request hooks, and cleanup of accumulated technical debt.

## Releases
No new OpenCode versions were published in the last 24 hours.

## Hot Issues

1. **[#7957 — Ctrl+C should not exit OpenCode](https://github.com/anomalyco/opencode/issues/7957)**  
   High-engagement UX issue: `Ctrl+C` immediately exits the app, conflicting with the universal copy shortcut on Windows/Linux. 16 comments, 49 👍 — the most-reacted issue in the current window.

2. **[#26602 — Desktop hits 5-minute Headers Timeout Error with slow local providers](https://github.com/anomalyco/opencode/issues/26602)**  
   Local OpenAI-compatible providers are aborted after exactly 5 minutes even when `"timeout": false` is configured. 11 comments; affects long-running local model requests.

3. **[#33318 — Zen paid balance still hits FreeUsageLimitError](https://github.com/anomalyco/opencode/issues/33318)**  
   A user with a $20 Zen balance still receives “Free usage exceeded” after under an hour of use. 9 comments; raises trust concerns around billing enforcement.

4. **[#20458 — Mouse escape sequences garbled after TUI exit](https://github.com/anomalyco/opencode/issues/20458)**  
   Terminal is left with raw mouse escape sequences after quitting OpenCode. 7 comments, 4 👍; separate from the existing in-session mouse garbling issue.

5. **[#40468 — Stuck in busy forever after toolcall](https://github.com/anomalyco/opencode/issues/40468)**  
   After a successful tool call, the TUI remains in the busy animation and double-Esc cannot interrupt. 5 comments; likely related to loop/step logging.

6. **[#37671 — [2.0] Headless commands load OpenTUI and leak native temp files](https://github.com/anomalyco/opencode/issues/37671)**  
   `--version`, `--help`, and other headless commands load a 13.1 MiB `libopentui.so` into `/tmp` on every invocation. 5 comments, 2 👍; disk hygiene concern for repeated CI/diagnostic calls.

7. **[#25120 — ~90% of compaction cost is avoidable cache miss](https://github.com/anomalyco/opencode/issues/25120)**  
   Performance discussion about long multi-turn agent sessions: compaction repeatedly pays a cache-miss cost that could be avoided. 5 comments, 5 👍.

8. **[#40625 — Unstable internet leaves opencode in stuck state](https://github.com/anomalyco/opencode/issues/40625)**  
   Packet loss causes OpenCode to stall permanently with no error and no working “Esc to interrupt”. 4 comments; a watchdog script also stalls.

9. **[#42914 — OpenAI Responses rejects valid large PDF base64 during tool-result replay](https://github.com/anomalyco/opencode/issues/42914)**  
   Valid canonical base64 PDF data is rejected by local `validateMedia` before reaching OpenAI during session continuation. 3 comments; affects replay with large PDFs.

10. **[#42938 — Go plan hits 100%, blocks 12h — Use balance enabled but Zen balance never used](https://github.com/anomalyco/opencode/issues/42938)**  
   A Go subscription with “Use balance” enabled and $39.89 Zen balance still blocks the model for 12 hours instead of falling back to paid balance. 2 comments; reinforces the billing fallback pattern from #33318.

## Key PR Progress

1. **[#42944 — fix(app): correct background subagent status](https://github.com/anomalyco/opencode/pull/42944)**  
   Avoids labeling active foreground subagents as background work and keeps the progress indicator accurate for background child sessions.

2. **[#42766 — refactor(app): use current session messages](https://github.com/anomalyco/opencode/pull/42766)**  
   Removes legacy `Message`/`Part` transcript duplication in the desktop app by relying on the V2 session message stream.

3. **[#42049 — fix(tui): hide background badge on interrupted shells](https://github.com/anomalyco/opencode/pull/42049)**  
   Only shows the `Background` badge for completed tools that explicitly report a detached running state; adds regression coverage for detached, foreground, and interrupted states.

4. **[#37392 — fix(core): surface refusal category and explanation on content filter](https://github.com/anomalyco/opencode/pull/37392)**  
   Replaces the hardcoded content-filter message with the actual refusal category/explanation when Anthropic returns `stop_reason: "refusal"`.

5. **[#37351 — fix(core): synchronize provider plugin startup](https://github.com/anomalyco/opencode/pull/37351)**  
   Loads OpenAI/OpenCode connection state before catalog transforms and removes startup polling that could not advance under test clocks.

6. **[#37347 — feat(plugin): add session request hook](https://github.com/anomalyco/opencode/pull/37347)**  
   Adds `ctx.session.hook("request")`, allowing plugins to replace or transform Web `Request` objects after auth and before dispatch.

7. **[#37374 — fix(core): stream shell progress tail](https://github.com/anomalyco/opencode/pull/37374)**  
   Publishes shell progress as a snapshot of the latest 25 output lines with a truncation notice and retains the full-output path.

8. **[#37386 — fix: check apply_patch move destinations](https://github.com/anomalyco/opencode/pull/37386)**  
   Fixes permission checks so `apply_patch` asks about the destination path, not only the source path, when moving files.

9. **[#37385 — fix: preserve file API text content](https://github.com/anomalyco/opencode/pull/37385)**  
   Stops the file API from calling `trim()` on decoded text, preserving leading/trailing whitespace and blank lines.

10. **[#42347 — chore: update ai gateway provider](https://github.com/anomalyco/opencode/pull/42347)**  
    Updates `ai-gateway-provider` to 3.2.0 while staying on the AI SDK 6-compatible provider line.

## Feature Request Trends

- **Terminal input safety and keybinding customization**  
  Requests include preventing `Ctrl+C` from quitting the app (#7957), configurable TUI keybind for auto-approve permissions (#40331), and disabling session bindings while prompts are active (#37352).

- **Billing/plan fallback should be automatic and reliable**  
  Multiple reports demand that paid Zen/Go balances be consumed when plan quotas are exhausted (#33318, #42938). Payment method verification also needs to work for non-card flows like Alipay (#33112).

- **Session navigation and review workflow**  
  Users want persistent ordered session review navigation (#42863) and stable child-session ordering even after session-ID encoding wraps (#42905).

- **Performance and disk hygiene**  
  Community interest in reducing compaction cache misses (#25120), avoiding OpenTUI native library loading in headless mode, and preventing `/tmp` `.so` file churn (#37671, #42880).

- **Provider/model compatibility**  
  Repeated requests for better handling of strict providers: single-system-message enforcement (#16560, #42909), MCP tool glob exclusions (#37675), and large base64 media validation in OpenAI Responses (#42914).

## Developer Pain Points

- **Stuck-state recovery is unreliable**  
  Users repeatedly hit irrecoverable “busy forever” states after tool calls, unstable network connections, or incomplete streams. Double-Esc often does nothing.

- **Terminal lifecycle issues**  
  `Ctrl+C` quits the app accidentally, mouse escape sequences leak after exit, and headless commands leave native temp files behind.

- **Billing trust is eroding**  
  Paid balances not being applied, free-limit errors persisting after adding credits, and failed payment verification create serious user frustration.

- **Provider edge cases block real workflows**  
  Strict system-message ordering, MCP tool exclusion failures, and PDF base64 replay rejections force users to work around model/provider quirks.

- **Version mismatch between CLI and WebUI**  
  Multiple reports show the WebUI displaying one lower patch version than the installed CLI, causing confusion after upgrades (#24286, #29301, #42920).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-17

## Today's Highlights

Reliability is the dominant theme: a session-corrupting bug where custom messages injected mid-turn broke `tool_calls` ordering on DeepSeek/Moonshot got a targeted fix (#8209), and hung pi.dev catalog refreshes now have a client-side retry (#8204). Several token-accounting corrections landed to prevent premature compaction and skewed billing (#8119, #8218), while provider expansion continued with Kiro OAuth device login and xAI routing defaulting to Grok 4.6 (#8217, #8124).

## Hot Issues

1. **[#5023 — Terminal scrolls to beginning without reason](https://github.com/earendil-works/pi/issues/5023)** *(CLOSED, 14 comments)* — The most-discussed issue of the day: the TUI randomly jumps to the session start and fast-scrolls to the buffer end while the model is working. No user interaction triggers it; now closed, presumably fixed.

2. **[#8029 — Very slow performance moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)** *(OPEN, 9 comments)* — Arrow-key latency grows linearly with buffer size; a ~7,000-line prompt takes 1650ms per keypress. Marked `inprogress`, this is a pain point for users doing large inline edits.

3. **[#8198 — pi.dev provider catalog endpoint times out](https://github.com/earendil-works/pi/issues/8198)** *(OPEN, 2 comments)* — `pi update --models` consistently fails because `pi.dev/api/models/providers/*` accepts TLS and returns zero bytes. Infrastructure-level issue affecting all users; PR #8204 is already up.

4. **[#8166 + #8210 — Mid-turn custom messages break `tool_calls` adjacency](https://github.com/earendil-works/pi/issues/8166)** *(CLOSED, 2 comments)* — `sendCustomMessage(..., { triggerTurn: false })` while streaming pushes directly onto the live message array, corrupting `tool_calls→tool` ordering and causing a permanent HTTP 400 on subsequent turns (DeepSeek and Moonshot both affected). Issue #8210 independently confirms the bug; fix landed in #8209.

5. **[#8061 — Context budget ignores maxTokens output reservation](https://github.com/earendil-works/pi/issues/8061)** *(OPEN, 2 comments, 1 👍)* — Requests are rejected at ~78% input context because the model's output-token reservation isn't accounted for, and the automatic compact-and-retry recovery fails for the same reason on a 1M-token model.

6. **[#7870 — Remote catalog overrides correct contextWindow for glm-5.2](https://github.com/earendil-works/pi/issues/7870)** *(OPEN, 3 comments)* — The pi.dev catalog overlay silently forces `z-ai/glm-5.2` to 262k context instead of its real 1,048,576, degrading long-context behavior. Catalog data is trumping the model's built-in metadata.

7. **[#6300 — Windows: input line redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300)** *(OPEN, 7 comments)* — On Windows 10/11 (cmd.exe and Windows Terminal), each keystroke redraws the input on a new line. A long-standing TUI rendering bug still awaiting a fix.

8. **[#5581 — Custom messages bypass `before_agent_start`](https://github.com/earendil-works/pi/issues/5581)** *(OPEN, 4 comments, 1 👍)* — `pi.sendMessage()` with `triggerTurn: true` calls `_runAgentPrompt` directly instead of `prompt()`, skipping `emitBeforeAgentStart`. Breaks extension hooks that gate or transform agent starts, in a specific but critical scenario.

9. **[#8208 — Replayed history emits orphaned reasoning items](https://github.com/earendil-works/pi/issues/8208)** *(CLOSED, 1 comment)* — On long `openai-responses` sessions, replayed history can produce consecutive/orphaned `reasoning` items, causing `invalid_request_error: unknown_parameter 'input[N].status'` before the request ever reaches the model.

10. **[#8215 — Package installs/updates race under concurrency](https://github.com/earendil-works/pi/issues/8215)** *(CLOSED, 1 comment)* — A multi-package audit of the package lifecycle found host-level gaps: concurrent installs/updates and `/reload` can complete with a partial extension set. Cannot be fixed downstream — needs core package-manager changes.

## Key PR Progress

1. **[#8209 — fix(coding-agent): defer non-turn custom messages to end of turn while streaming](https://github.com/earendil-works/pi/pull/8209)** — Fixes #8166/#8210 by routing `triggerTurn: false` messages through the streaming queue instead of a raw `messages.push()` on the live array. Prevents permanent 400 wedges on DeepSeek/Moonshot.

2. **[#8218 — fix(coding-agent): getStats tokens.total = billable only (exclude cache)](https://github.com/earendil-works/pi/pull/8218)** — Cache tokens are billed at ~1/120th of input rate; including them inflated totals ~120x and triggered compaction budgets far too early. Now `tokens.total` counts billable tokens only.

3. **[#8204 — fix(coding-agent): retry hung pi.dev catalog refreshes](https://github.com/earendil-works/pi/pull/8204)** — Adds per-attempt timeouts and retries for the zero-byte TLS hang from #8198. One hung provider no longer aborts the entire `pi update --models` refresh.

4. **[#8119 — fix: track Kimi cached tokens](https://github.com/earendil-works/pi/pull/8119)** — Addresses #8075: Kimi's OpenAI-compatible API reports cache hits as top-level `usage.cached_tokens`, which Pi previously counted as normal input tokens.

5. **[#8124 — feat(ai): route xAI models through Responses and default to Grok 4.6](https://github.com/earendil-works/pi/pull/8124)** — Moves xAI from the Completions to the Responses API, sends the Pi user agent, and bumps the default model from Grok 4.5 to 4.6.

6. **[#8217 — feat(auth): add Kiro OAuth device login](https://github.com/earendil-works/pi/pull/8217)** — Full Kiro provider integration: device-code OAuth flow, refresh support, catalog/runtime routing, and handling for `authorization_pending`, `slow_down`, timeouts, and malformed `expiresIn` responses.

7. **[#8193 — feat(ai): add image-to-image generation](https://github.com/earendil-works/pi/pull/8193)** — Adds a `minimax-images` API module so the image generation endpoint supports reference-image (image-to-image) input for both MiniMax regions.

8. **[#8076 — DRAFT: dev branch with new harness](https://github.com/earendil-works/pi/pull/8076)** — An early draft of a new agent harness; architecture work in progress, no merge-ready summary yet.

## Hot Discussions

**Q&A / General**

- **[#3373 — Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?](https://github.com/earendil-works/pi/discussions/3373)** *(10 comments, 8 👍)* — Community members share their favorite extensions and setup tips, with strong engagement for a general question. A good pulse-check on which parts of the Pi ecosystem are being adopted and where the gaps are.

## Feature Request Trends

- **Provider & catalog metadata correctness** — The biggest recurring theme: requests to align Qwen Token Plan catalogs (#8194), add GLM-5.3 thinking levels (#8190), fix opencode-go routing for `/v1/messages`-only models (#8206), and stop catalog overlays from overriding built-in context windows (#7870).
- **TUI interactivity** — Component-level mouse event handling (#7683), real-time re-layout for IME/dictation text injection (#8211), and fixing stale theme colors after theme switches (#8212).
- **Extension & RPC API expansion** — Returnable `agent_end` handlers that can veto turn settling (#8213), RPC access to slash-command argument completions (#8214), and consistent `before_agent_start` firing for all message paths (#5581).
- **Resilience & lifecycle hardening** — Client-side retries for hung catalog refreshes (#8205) and concurrency-safe package installs/reloads (#8215).

## Developer Pain Points

- **Mid-turn custom message injection corrupts session state** — `triggerTurn: false` messages pushed directly into the live message array break `tool_calls` adjacency, permanently wedging sessions with provider 400s (#8166, #8210).
- **Token accounting mismatches cause premature compaction and provider rejections** — Cache tokens inflate totals ~120x (#8218), Kimi `cached_tokens` are miscounted (#8075), and output-token reservations are ignored in the context budget (#8061).
- **Catalog metadata silently overrides correct model configs** — Remote overlays, missing thinking-level maps, and wrong endpoint routing cause subtle runtime failures (#7870, #8190, #8206).
- **Performance cliffs in the TUI with large inputs** — Prompt editor navigation degrades to seconds per keystroke with large buffers (#8029).
- **Windows-specific TUI rendering bugs persist** — Input redraw-per-keystroke remains unresolved for Windows users (#6300).
- **Update/install failures under non-npm package managers** — `pi update` breaks under pnpm semantics (#8207), and package lifecycle races can leave partial extension sets (#8215).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-17

## 1. Today's Highlights

The project is in heavy self-hardening mode. A wave of multi-agent team-mode bugs (leader/teammate messaging, task dispatch, prompt accuracy, UI crashes) is being answered with targeted fixes, while the `/review` pipeline gains severity-floor enforcement, visual capture evidence, and containerized verification. Two releases shipped — a preview and a nightly — and DSW EAS reruns re-validated v0.21.12 against SWE-bench Verified (500) and Terminal-Bench 2.0 (89).

## 2. Releases

- **v0.21.12-preview.5** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.5)) — Preview release; no feature notes beyond the changelog. Diff against v0.21.12: [full changelog](https://github.com/QwenLM/qwen-code/compare/v0.21.12...v0.21.12-preview.5).
- **v0.21.11-nightly.20260816.5677823abb** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260816.5677823abb)) — Nightly containing `feat(autofix)`: a deny-by-default footprint gate and positional window censuses (PR #9156), plus a web-shell fix.
- **Benchmarks** — Two DSW EAS full end-to-end reruns (r2, r3) at reference v0.21.12 were published, covering SWE-bench Verified (500) and Terminal-Bench 2.0 (89), re-validating the release path after scoping the DSW package proxy to verifier dependency egress.

## 3. Hot Issues

1. **[#9089 — autofix: PAT-bearing jobs share a host with untrusted branch code (P1, security)](https://github.com/QwenLM/qwen-code/issues/9089)** — The highest-severity open issue: GitHub Actions jobs holding PATs run on the same host as untrusted PR branch code, a boundary that can't be closed from inside a workflow step. 5 comments; the agreed design (ephemeral container isolation) is now landing via PR #9214.

2. **[#9276 — Team members cannot send ordinary messages to their leader (P2, multi-agent)](https://github.com/QwenLM/qwen-code/issues/9276)** — Teammate status/completion messages are misrouted as shutdown requests ("Only the team leader can request shutdowns"). 5 comments; part of a multi-agent bug cluster reported by netbrah.

3. **[#9282 — Manual team task assignment persists without dispatching work (P2, multi-agent)](https://github.com/QwenLM/qwen-code/issues/9282)** — A leader can set `in_progress` + `owner: alice`, but idle Alice never receives the task because only unowned `pending` tasks are auto-claimed. 3 comments; fix in PR #9289.

4. **[#9283 — Agent-team prompts contradict automatic delivery (P2, multi-agent)](https://github.com/QwenLM/qwen-code/issues/9283)** — The runtime auto-forwards unreported final answers, but normal/plan prompts require explicit `send_message`, and a "promised" peer-summary feature doesn't exist. 3 comments; addressed by PR #9284.

5. **[#9281 — task_list treats blank optional filters as active filters (P2, tools)](https://github.com/QwenLM/qwen-code/issues/9281)** — Empty-string `owner`/`blockedBy` fields return "No tasks found" even when matching tasks exist; the tool description promises blank = absent, but the store treats every value as a filter. 3 comments.

6. **[#9290 — Interactive session crashes when opening an errored agent-team tab (P2, UI/multi-agent)](https://github.com/QwenLM/qwen-code/issues/9290)** — A render error in an incomplete teammate tab reaches the app's FATAL boundary and exits the session. 3 comments; containment fix in PR #9292.

7. **[#9194 — Close the mutation-verified test-pin gaps from PR #9096 (P3, testing)](https://github.com/QwenLM/qwen-code/issues/9194)** — The most-commented issue today (8 comments): automated review rounds 5–6 found tests that under-pin their contracts, letting production mutations ship with a green suite. Non-blocking but real robustness debt.

8. **[#9278 — Design: /review publish-time convergence advisory (P2, feature)](https://github.com/QwenLM/qwen-code/issues/9278)** — A design/tracking issue for an "out-of-control loop": each review round grows the diff, spawning more findings, with only a prose "~5 rounds, Critical-only" rule as damping. Proposes telemetry, diagnosis, and operator-owned posting surfaces.

9. **[#9205 — Concurrent same-PR reviews race on the fixed worktree path (P2, review)](https://github.com/QwenLM/qwen-code/issues/9205)** — `fetch-pr` uses a fixed `.qwen/tmp/review-pr-<n>` path; a second review session's cleanup deleted the worktree mid-run. 2 comments; a real hazard for parallel `/review` usage.

10. **[#5966 — 0.19.3 UI flicker and completely broken Chinese IME (P2, UI)](https://github.com/QwenLM/qwen-code/issues/5966)** — Long-standing user-facing bug (open since June, 5 comments): the UI flickers and Chinese input becomes impossible with no error output. Tagged `welcome-pr`; still needs an owner.

## 4. Key PR Progress

1. **[#9289 — fix(core): dispatch manually assigned team tasks to their owner](https://github.com/QwenLM/qwen-code/pull/9289)** — Implements the expected behavior for #9282: `task_update({status: 'in_progress', owner})` now routes the task to its owner instead of orphaning it. Kept independent from the related #9276/#9281/#9283 work.

2. **[#9284 — fix(core): align agent-team prompts and TeamCreate description with actual delivery](https://github.com/QwenLM/qwen-code/pull/9284)** — Fixes #9283 by making prompt text match the runtime's real auto-forward behavior for idle teammates.

3. **[#9292 — fix(cli): contain agent-tab render errors instead of exiting the session](https://github.com/QwenLM/qwen-code/pull/9292)** — Fixes #9290 with a scoped error boundary around agent-team tab rendering, so a bad tab can no longer hit the global FATAL handler.

4. **[#9279 — feat(review): enforce the resolved severity floor at the posting boundary](https://github.com/QwenLM/qwen-code/pull/9279)** — When a review's floor resolves to Critical-only (explicit flag or round-adaptive ≥ round 6), remaining Suggestions are moved into the review body's deferral list by the CLI itself.

5. **[#9273 — feat(review): capture-tui — rendering claims get pixels, not prose](https://github.com/QwenLM/qwen-code/pull/9273)** — New `qwen review capture-tui` drives a command inside a private tmux server, capturing output as `.ans` and rendering `.png` when `freeze` is available — real rendering evidence for verifiers.

6. **[#9214 — feat(autofix): run the verification gate in an ephemeral container](https://github.com/QwenLM/qwen-code/pull/9214)** — Phase 1+2 of the #9089 design: the autofix verification gate moves off the host into an ephemeral container, with a structural test pinning the trust boundary.

7. **[#9221 — fix(review): run verifier probes in a private scratch worktree](https://github.com/QwenLM/qwen-code/pull/9221)** — The verifier is the review's only writing agent; its probe/fix/restore cycle now runs in a private scratch worktree so it can't pollute the shared tree every other agent is pinned to.

8. **[#9130 — feat(triage): add a deterministic flakiness gate to sandboxed verification](https://github.com/QwenLM/qwen-code/pull/9130)** — After a clean install/build, the PR's added/modified unit tests are re-run N times (default 5, configurable 2–10) to catch flaky tests deterministically.

9. **[#9106 — feat: consolidate Local Control into one daemon-owned implementation](https://github.com/QwenLM/qwen-code/pull/9106)** — The LAN pairing flow that lets a phone join a live daemon session existed twice (two languages, two security models); this unifies it into the daemon with both surfaces as callers.

10. **[#9127 — feat: support session media references end-to-end](https://github.com/QwenLM/qwen-code/pull/9127)** — Images upload once and travel as media ID + metadata through the daemon, ACP bridge, TypeScript SDK, and Web Shell — covering prompt submission, mid-turn queues, and reconciliation snapshots.

## 5. Feature Request Trends

- **Multi-agent team-mode maturity.** The highest-velocity request cluster: correct task lifecycle (dispatch on assignment, filter semantics), reliable leader/teammate messaging, and prompts that match runtime behavior (#9276, #9281, #9282, #9283, #9290).
- **Review/verification tooling as a managed workflow.** Resume from on-disk state (#9092), publish-time convergence advisory (#9278), visual TUI capture (#9273), and severity-floor enforcement (#9279) all push `/review` from linter toward a disciplined QA pipeline.
- **Isolation-first CI/autofix security.** Runner-level isolation for PAT-bearing jobs (#9089), ephemeral container gates (#9214), guarded workspace wipes (#9277, #9265), and flakiness gates (#9130) — the project is systematically removing trust in reused hosts.
- **Session/daemon UX.** Web Shell stability (white-screens #9253, SSE-frame crashes #9234), session media references (#9127), session rotation bounds (#8927), and Local Control consolidation (#9106) show demand for long-lived, media-rich daemon sessions.
- **Authentication and host configurability.** GitHub Copilot as an `/auth` option (#9275), plus configurable new-file modes in `qwen serve` (#9250).

## 6. Developer Pain Points

- **Multi-agent mode correctness.** Five P2 bugs from one reporter in one day (#9276, #9281, #9282, #9283, #9290) — message routing, silent task non-delivery, contradictory prompts, and UI crashes — suggests team mode is under active stress-testing and still rough around the edges.
- **The /review loop is powerful but expensive.** PRs routinely go through 5–17 review rounds with hundreds of findings; deferred-Suggestion issues are piling up (#9256, #9259, #9264, #9280, #9285), and infrastructure races (#9205) plus last-gate schema friction (#9209) can burn hours of compute.
- **UI/terminal instability.** Flicker and broken Chinese IME (#5966), tmux being unusable (#8962), Web Shell white-screens (#9253), and browser-tab crashes from oversized SSE frames (#9234) all degrade the interactive experience.
- **CI reliability and trust.** E2E failures that report no test result (#9143), checkout failures on reused runners, flaky tests, and PAT exposure on shared hosts (#9089) — exactly why the project is investing so heavily in CI hardening.
- **Hardcoded host behavior.** New files created by `qwen serve` tools are hard-coded to mode 0600, ignoring umask with no configuration option (#9250) — a small but telling example of daemon host-integration gaps.

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-17

## Today's Highlights

The v0.9.8 release entry is visible, but the publish train was canceled so blockers could be fixed: sudo/NNP opt-out and an abort-class TUI crash are now addressed in PR #5425. A major fleet-safety theme landed, giving read-only scouts/reviewers a usable shell while proving that delegation never widens authority (#5428, #5435, #5438). The community also filed a wave of honesty and discoverability audits around model context-window claims, telemetry defaults, and buried workflow commands (#5440–#5443).

## Releases

**v0.9.8** — Release notes emphasize CodeWhale as Shannon Labs’ public product: `codewhale` remains the lowercase command/npm/release-asset identifier, and the legacy `deepseek-tui` npm package is deprecated with no further releases. Note: per issue #5429 and PR #5425, the v0.9.8 tag exists but the GitHub/npm/crates publication was halted while release blockers were fixed; a corrected release is expected to follow.

## Hot Issues

1. [Issue #5123 — Agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED](https://github.com/Hmbown/CodeWhale/issues/5123)  
   A live dogfood failure where a delegate labeled `builder`/`gates-shell-writer` was given a read-only tool contract and blocked itself. Six comments; key subagent reliability signal.

2. [Issue #5424 — v0.9.7: Codewhale TUI crashing](https://github.com/Hmbown/CodeWhale/issues/5424)  
   TUI exits by itself about a minute after prompting, including with `codewhale --continue`. Five comments; addressed as a v0.9.8 release blocker.

3. [Issue #5322 — Regression: output area doesn't fill wide terminals](https://github.com/Hmbown/CodeWhale/issues/5322)  
   Closed regression: v0.9 caps transcript width on wide displays, leaving dead space. Five comments; relates to the broader TUI layout polish in newer issues.

4. [Issue #5367 — Configurable model-visible read/tool-result size limits](https://github.com/Hmbown/CodeWhale/issues/5367)  
   Self-hosted long-context models need larger per-result budgets. Four comments; implemented by PR #5405.

5. [Issue #5426 — Give scouts/reviewers a usable read-only shell](https://github.com/Hmbown/CodeWhale/issues/5426)  
   The `ShellPolicy::ReadOnly` classifier was too tight for subagents. Closed after PR #5428 split the classifier and #5435 documented the delegation policy.

6. [Issue #5429 — Asset-freshness verifier breaks on job-level reruns](https://github.com/Hmbown/CodeWhale/issues/5429)  
   `gh run rerun --failed` moved `run_started_at` past asset upload timestamps, failing the freshness gate. Closed by PR #5431.

7. [Issue #2693 — HarnessPosture: model-specific context and subagent policy](https://github.com/Hmbown/CodeWhale/issues/2693)  
   Long-running architecture issue making harness strategy explicit per provider/model. Six comments; feeds prompt-assembly work in #5263.

8. [Issue #1917 — Universal PreToolUse/PostToolUse hook layer for Cancel/Pause/Resume](https://github.com/Hmbown/CodeWhale/issues/1917)  
   Proposes a hook-based lifecycle layer across all action types. Five comments; high architectural leverage.

9. [Issue #5442 — Product: discoverability debt — advanced commands hidden at the palette root](https://github.com/Hmbown/CodeWhale/issues/5442)  
   Fresh product audit: ~34 advanced commands are demoted from discovery roots, and some capabilities exist only as config. Part of a self-improving-harness review series.

10. [Issue #5440 — Honesty: unknown-model output ceilings are fabricated as "documented"](https://github.com/Hmbown/CodeWhale/issues/5440)  
   Anthropic-family unknown models get a 64K output floor labeled “documented”; Codex OAuth is pinned at 4096. Same trust class as earlier context-window findings.

## Key PR Progress

1. [PR #5428 — feat(fleet): usable read-only shell for scouts/reviewers](https://github.com/Hmbown/CodeWhale/pull/5428)  
   Fixes #5426 by splitting the read-only shell classifier so agents keep a bounded but usable shell without weakening the parent’s parallel auto-approve posture.

2. [PR #5438 — fix(fleet): the scout posture gate must honor #5428's read-only shell](https://github.com/Hmbown/CodeWhale/pull/5438)  
   Behavioral dogfood fix: a live scout was denied `git log`, `find`, and other canonical read-only commands even after #5428.

3. [PR #5435 — fix(fleet): delegation never widens authority](https://github.com/Hmbown/CodeWhale/pull/5435)  
   Closes the containment half of #5426 with a written subagent policy: delegation moves work, never authority.

4. [PR #5425 — v0.9.8 blockers: sudo/NNP opt-out and abort-class terminal poisoning](https://github.com/Hmbown/CodeWhale/pull/5425)  
   Blocks v0.9.8 publication; fixes sudo regression (#5413) and the TUI crash / abort-class terminal state (#5424).

5. [PR #5431 — fix(release): asset freshness vs successful release job's started_at](https://github.com/Hmbown/CodeWhale/pull/5431)  
   Fixes #5429, preventing rerun-based false “asset set is stale” failures.

6. [PR #5401 — fix: CodeQL Highs and prepare GHSA-8hp3 / GHSA-3mgh](https://github.com/Hmbown/CodeWhale/pull/5401)  
   Security-only slice: fixes CodeQL High findings and prepares advisories without tagging or publishing.

7. [PR #5404 — fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA](https://github.com/Hmbown/CodeWhale/pull/5404)  
   Fixes #5374: garbled DeepSeek Flash streaming text on macOS caused by `String::from_utf8_lossy` on split multibyte characters.

8. [PR #5405 — feat(tui): configurable model-visible read/tool-result budgets](https://github.com/Hmbown/CodeWhale/pull/5405)  
   Implements #5367; lets self-hosted long-context users raise per-result ceilings instead of paying ~20 extra reads on a ~64 KiB file.

9. [PR #5406 — feat(tui): prefab provider templates and test-connection](https://github.com/Hmbown/CodeWhale/pull/5406)  
   Implements #5350: built-in templates for OpenCode Zen, OpenCode Go, Agnes, and SenseNova so users only provide an API key.

10. [PR #5402 — fix(tui): restore session cost when live pricing is unverifiable](https://github.com/Hmbown/CodeWhale/pull/5402)  
    Fixes #5241; session cost no longer stays `unverified_live_pricing` forever when live pricing cannot be verified.

## Feature Request Trends

- **Configurable harness and sandbox policies** — Repeated requests for model- and agent-specific control over read-only shells, sandbox roots, and tool-result size limits: #5123, #5426, #5410, #5367, #2693.
- **Honest, verifiable model metadata** — Strong community demand to stop presenting inferred context windows, output ceilings, and pricing as documented facts: #5440, #5441, #5402.
- **Better discoverability for shipped features** — Workflow/goal/auto modes, advanced commands, and the Hotbar are all “shipped but invisible”: #5442, #5439, #3389.
- **Universal action lifecycle hooks** — Cancel/pause/resume via a PreToolUse/PostToolUse layer remains a desired architectural feature: #1917.
- **More provider integrations and templates** — Eden AI registration, prefab provider templates, and DeepSeek Harness integration all landed or were requested this cycle: #5422, #5406, #5432, #5434.
- **Release and CI robustness** — Asset freshness, red main, flaky tests, and npm trusted publishing continue to dominate reliability work: #5429, #5403, #5056, #5299.

## Developer Pain Points

- **TUI regressions and stability** — Crashes after ~1 minute (#5424), wide-terminal layout regressions (#5322), and left-oriented transcript wrapping (#5436).
- **Read-only sandbox too strict** — Subagents and users hit blocked legitimate commands: `git -C`, `find`, globs, `/dev/null` redirection, and system library linking (#5123, #5426, #5410, #2617).
- **Misleading capability claims** — Context windows, output ceilings, and “verified” pricing are often optimistic or fabricated for unknown models (#5440, #5441).
- **Release pipeline friction** — Expired npm credentials, rerun-sensitive asset checks, and platform-specific CI failures make shipping harder than coding (#5299, #5429, #5403).
- **Streaming and protocol bugs** — SSE UTF-8 splitting across HTTP/2 DATA causes garbled CJK text; flaky DeepSeek URL errors also persist (#5404, #4683).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*