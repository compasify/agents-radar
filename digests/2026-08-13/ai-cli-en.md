# AI CLI Tools Community Digest 2026-08-13

> Generated: 2026-08-13 01:00 UTC | Tools covered: 10

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
**Date:** 2026-08-13 | **Scope:** Community digest activity across 10 tools

---

## 1. Ecosystem Overview

The AI CLI tooling landscape is entering a consolidation-and-hardening phase: while every major vendor shipped or triaged releases this week, community attention has shifted from raw capability to reliability, state management, and permission-model friction. A clear pattern emerges of three concurrent battles: **Windows stability** (Claude Code, Codex, Copilot CLI all report platform-specific crashes or setup blockers), **agent trust** (false "success" signals, hangs, and coordination bugs across Gemini, Claude Code, and Qwen Code), and **context durability** (auto-compaction failures, memory systems, and session-resume bugs). MCP has become the universal integration standard, but its ecosystem maturity — OAuth flows, transient-error handling, tool visibility — is now the primary pain point. Enterprise concerns (billing, compliance approvals, model entitlement) are prominent, while a smaller cluster of tools (Pi, OpenCode, CodeWhale) differentiate on TUI polish and local-model workflows.

---

## 2. Activity Comparison

| Tool | Issues (24h window) | PRs (24h window) | Release status |
|---|---|---|---|
| **Claude Code** (Anthropic) | 10 hot; top issue 80 comments, 12 👍 | 5 (3 closed) | ✅ v2.1.229 |
| **OpenAI Codex** | 10 hot; top issue 70 comments, 194 👍 | 10 (all substantive) | ✅ rust-v0.148.0-alpha.9 (no changelog) |
| **Gemini CLI** (Google) | 10 hot; top issue 12 comments | 10 (security-heavy) | ✅ v0.56.0-nightly.20260812 |
| **Copilot CLI** (GitHub) | 10 hot; top issue 35 👍 | 3 (1 substantive) | ❌ None |
| **Kimi Code** (MoonshotAI) | 1 | 2 | ❌ None |
| **OpenCode** | 10 hot; top issue 40 comments | 10 (TUI/client-heavy) | ✅ v1.18.17 |
| **Pi** (earendil-works) | 10 hot; top issue 18 comments, 17 👍 | 10 (diverse) | ❌ None |
| **Qwen Code** | 10 hot; top issue 10 comments | 10+ (substantive) | ✅ desktop-v0.2.1 + v0.2.0 |
| **CodeWhale** (DeepSeek TUI / Shannon Labs) | 10 hot; regressions dominate | 10 (5 closed/harvested) | ✅ v0.9.6 (rebrand) |
| **Grok Build** (xAI) | 0 | 0 | ❌ No activity |

*Note: "Issues" = hot/updated issues highlighted in each digest; absolute repository volumes differ significantly. Claude Code's most-liked issue (498 👍) and Codex's top request (194 👍) indicate large user bases.*

---

## 3. Shared Feature Directions

These requirements appear across **three or more** tool communities:

| Direction | Tools | Specific needs |
|---|---|---|
| **Persistent memory / cross-session context** | Kimi (#1283, 36 comments), Gemini (Auto Memory, #26525), Qwen (#7040 auto-memory recall), Claude (cross-machine transcripts, #81835) | AI-managed + user-defined memory layers; deterministic redaction; workspace-scoped defaults; bounded recall |
| **Windows reliability** | Claude (GPU crashes #81698, MSIX repair #85199), Codex (setup blocker #33967, power-loss state resets #26990, Computer Use #25178), Copilot (WSL2 input bugs #4328, socket error 10013 #4463), CodeWhale (`exec --auto` gaps #4564) | Crash-safe local state, GPU-process isolation, WSL2 parity, Computer Use/powershell correctness |
| **Agent lifecycle & self-awareness** | Claude (#54393 multi-agent coordination post-mortem, session-state UX #66202), Gemini (subagent false GOAL success #22323, generalist hangs #21409), Qwen (background agent dedup #8097), Codex (subagent freezes #37018) | Honest terminal states (success vs. halted), runs that don't hang, deduplicated subagent work, visibility into sleeping/needs-input states |
| **MCP robustness & lifecycle** | Copilot (CIMD/OAuth #1305, transient 5xx retries #4466, Docker container cleanup #4461), OpenCode (tools connected but not exposed #33027), Gemini (fail-open corrupt config #28794), CodeWhale (spec-invalid `nextCursor` #5336) | Retry/backoff, clean shutdown, spec compliance, tool visibility, CI/CD-friendly auth |
| **Compaction & context-window management** | Pi (#6879 auto-compaction fires too late), OpenCode (v1.18.17 compaction fix; smaller-model summaries), Copilot (durable context across compactions #4441), Claude (prompt-cache invalidation) | Post-agent-turn compaction checks, lossless summaries, predictable triggers |
| **Approval/permission control** | Codex (#28969 disable 60-sec auto-resolve, 194 👍; #37472 wait indefinitely), Claude (CVP approvals not honored #84352, `permissions.deny` failures), Gemini (subagents bypass disabled configs #22093) | Configurable timeouts, enforced deny rules, honored enterprise approvals |
| **Model/context transparency** | Claude (1M context visibility, effort-level breakage #83364), Copilot (org-enabled models missing #4390, silent subagent overrides #4432), Pi (`usage` restored in streaming #7982) | Accurate `/models`, no silent model downgrades, visible reasoning effort |
| **Cost controls & entitlements** | OpenCode (free-tier errors despite balance #14273/#42128/#33495, per-session budgets #42202), Codex (thread usage in `/status` #38281), Pi (usage telemetry) | Per-session/thread budgets, accurate entitlement state, clear billing diagnostics |

---

## 4. Differentiation Analysis

| Tool | Primary focus / character | Target users | Distinctive technical approach |
|---|---|---|---|
| **Claude Code** | Enterprise agent lifecycle; plugin ecosystem; remote/managed sessions | Enterprise teams; heavy agents users | Server-supplied hooks for self-hosted runners; SSE keepalive; large plugin/marketplace surface |
| **OpenAI Codex** | Backoffice infrastructure: thread usage accounting, credential broker, gRPC reconnection | Enterprise workspaces; automation pipelines | Rust core; typed turn submission (`start_or_steer_turn`); per-thread credit/dollar accounting |
| **Gemini CLI** | Security hardening + agent orchestration; evals-driven development | Security-conscious developers; Google Cloud ecosystem | SSRF/expansion-bypass fixes; behavioral eval infra; agents-calling-agents via `tools:` frontmatter; AST-aware tooling roadmap |
| **Copilot CLI** | MCP lifecycle + model governance; ACP extension methods | GitHub Enterprise; VS Code users | Remote OAuth MCP (DCR/CIMD); `tgrep` indexer; hooks system (though flaky) |
| **Kimi Code** | Quiet maintenance; Web UI resilience | Chinese-speaking devs; lightweight CLI users | Python-side hardening (string truncation, BrokenPipe handling); long-running memory-system RFC |
| **OpenCode** | TUI visualization + cost control; session quality | Terminal-centric power users; indie devs | Native Mermaid GitGraph/timeline rendering; per-session budget widget; MERGE Gateway reasoning variants |
| **Pi** | TUI extension interactivity; wire-protocol correctness | OSS tinkerers; local-model users; non-Latin script users | Component-level mouse events; CJK/ambiguous-width handling; transaction-safe session persistence; Ollama proxy |
| **Qwen Code** | Desktop/web-shell maturation; session rotation; review governance; multi-agent scaling | Chinese & global enterprise; web-shell users | Per-channel `sessionRotation`; adaptive live-journal caps; dual-manifest (Claude/Gemini) extension imports; Tauri shell migration |
| **CodeWhale** | Identity transition (DeepSeek → CodeWhale); i18n; provider-agnostic config | Chinese-speaking community; multi-provider users | Community harvest-PR process under base-drift; per-provider API keys; terminal PiP; MCP spec compliance |

**Key contrasts:**
- **Vendor vs. community tools:** Claude Code, Codex, Gemini, Copilot, Qwen are vendor-backed with enterprise governance concerns; OpenCode, Pi, and CodeWhale compete on TUI ergonomics, extension APIs, and provider neutrality.
- **Security posture:** Gemini stands out with three security fixes in one window (SSRF, shell-expansion bypass, fail-open config); CodeWhale and OpenCode show security interest (plaintext keys, `.env` leak through grep) but with less depth.
- **Platform strategy:** Codex and Claude are deepening remote/headless and managed-runner support; Qwen is pushing web-shell + Tauri desktop; Copilot is anchored to VS Code/Enterprise.
- **Model coverage:** Pi and CodeWhale are actively adding third-party models (Grok 4.6, OrcaRouter, Ollama local); vendor tools are constrained to their own model families.

---

## 5. Community Momentum & Maturity

**Most active this window (high issue/PR volume + releases):**
- **Qwen Code** — Two desktop releases in 24h, 10+ substantive PRs across session rotation, memory, ACP hardening. Fastest iteration velocity.
- **OpenCode** — Shipped v1.18.17 with compaction/budget improvements; 10 PRs focused on TUI and client lifecycle. Strong balance of feature velocity and reliability fixes.
- **Codex** — 10 substantive PRs (usage accounting, gRPC reconnect, plugin metrics) but the 194 👍 on auto-resolve timeout shows a large, vocal user base with unmet UX needs.
- **Gemini CLI** — Nightly releases + security-hardening PRs + evals infrastructure. Maturing fast, with the community acting as a quality net.

**High engagement but slower shipping:**
- **Claude Code** — The largest community (498 👍 on Linux desktop, 80-comment compliance thread) but only 5 PRs in the window, mostly docs. Enterprise trust issues (CVP, Windows stability) are prominent.
- **Copilot CLI** — Zero releases and only 1 substantive PR; maintainers are triaging a wave of MCP/model-selection regressions. Six-month-old hook bugs (#1730) suggest slower resolution cycles.

**Quiet / transitional:**
- **Pi** — No release, but 10 diverse PRs (mouse events, transactional persistence, Grok 4.6). A small but technically engaged maintainer-plus-contributor community.
- **CodeWhale** — Rebranding to Shannon Labs/CodeWhale; v0.9.6 shipped with community-harvested PRs, but two v0.9.5 regressions (Auto-Review blocking writes, terminal width) strain confidence.
- **Kimi Code** — Effectively dormant in this window (1 issue, 2 PRs, no release); the 36-comment memory-system thread may be the next meaningful signal.
- **Grok Build** — No activity; watch for future movement.

**Maturity assessment:** Claude Code, Codex, and Copilot CLI carry the largest enterprise footprints but show the most friction in approval flows and state durability. Gemini, Qwen, and OpenCode are shipping fastest relative to their issue load. Pi, OpenCode, and CodeWhale demonstrate that community-driven tools can match vendor velocity on UX innovation (Mermaid rendering, mouse events, provider-agnostic configs).

---

## 6. Trend Signals

1. **Windows is the weakest platform across the board.** Claude Code (GPU crashes), Codex (state resets, Computer Use failures), and Copilot (WSL2 bugs) all show Windows-specific reliability gaps. Vendors that invest in crash-safe state and WSL2 parity will earn differentiation.

2. **"False success" is the new trust killer.** Gemini's MAX_TURNS-reported-as-GOAL, CodeWhale's fake file-edit success, and Copilot's model overrides bypassing user intent all erode the core value proposition of agentic coding. Expect demand for honest terminal states and content-based validation to grow.

3. **Context memory is the next competitive frontier.** Kimi's Memory System RFC, Qwen's auto-memory recall, and Gemini's Auto Memory hardening all point to persistent, cross-session context as the defining feature of 2026's CLI tools. Privacy (deterministic redaction) will be the differentiator.

4. **MCP is everywhere, but immature.** OAuth/CIMD, transient-error retries, spec compliance, and tool visibility gaps appear across Copilot, OpenCode, Gemini, and CodeWhale. The tool that delivers first-class MCP lifecycle management will capture integration-heavy workflows.

5. **Cost transparency is becoming a requirement, not a nice-to-have.** OpenCode's billing failures and Codex's thread-usage accounting both signal that per-session/per-thread budget visibility — and enforcement — will be table stakes for enterprise adoption.

6. **Security hardening is accelerating on the open-source side.** Gemini's SSRF/shell-expansion/config-fail-open fixes, OpenCode's `.env` leak report, and CodeWhale's plaintext-key issue show a community increasingly auditing for supply-chain and prompt-injection vectors. This is a leading indicator of enterprise procurement scrutiny.

7. **TUI visualization is a genuine UX differentiator.** OpenCode's native Mermaid rendering (GitGraph, timelines) and Pi's HTML-export parity work suggest terminals are evolving into richer surfaces — not retreating in favor of GUIs.

8. **Process friction at scale**: CodeWhale's base-drift-forced harvest PRs, Copilot's six-month-unresolved hook bug, and OpenCode's entitlement errors all point to the same meta-trend: as these tools scale users, triage velocity, CI hygiene, and release-gate discipline become the binding constraint — not model capability.

---

*Data sources: Community digests for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI/CodeWhale, and Grok Build for 2026-08-13.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot: 2026-08-13 · Source: github.com/anthropics/skills**

## 1. Top Skills Ranking

The most-commented PRs (ranked by engagement in the repo's own ordering) split into two camps: urgent repairs to the official `skill-creator` meta-skill, and a wave of new domain skills. The most-discussed items:

1. **[skill-creator] Fix `run_eval.py` 0% recall — PR #1298** (open) — https://github.com/anthropics/skills/pull/1298
   The single most-attended PR. Addresses a critical defect where the skill-creator's evaluation loop always reports `recall=0%` for every description, meaning the description-optimization loop is "optimizing against noise" (10+ independent reproductions, Issue #556). Proposes installing the eval artifact as a real skill, plus Windows stream-reading, trigger-detection, and parallel-worker fixes.

2. **document-typography — PR #514** (open) — https://github.com/anthropics/skills/pull/514
   A typographic quality-control skill that prevents orphan word wraps, widow paragraphs (section headers stranded at page bottom), and numbering misalignment in AI-generated documents — problems users rarely request explicitly but that affect every generated document.

3. **ODT / OpenDocument — PR #486** (open) — https://github.com/anthropics/skills/pull/486
   Adds creation, template filling, reading, and ODT→HTML conversion for `.odt`/`.ods` files, triggered by any mention of OpenDocument, LibreOffice, or ISO-standard office formats.

4. **frontend-design revision — PR #210** (open) — https://github.com/anthropics/skills/pull/210
   Not a new skill but a substantive rewrite of the existing `frontend-design` skill to improve clarity, actionability, and internal coherence — ensuring every instruction is something Claude can follow within a single conversation.

5. **skill-quality-analyzer + skill-security-analyzer — PR #83** (open) — https://github.com/anthropics/skills/pull/83
   Two meta-skills for the example marketplace: a five-dimension quality analyzer (structure, docs, examples, etc.) and a security analyzer — direct community responses to the ecosystem's trust and verification concerns.

6. **self-audit — PR #1367** (open) — https://github.com/anthropics/skills/pull/1367
   A universal delivery-audit skill: mechanical file verification first (every claimed output exists), then a four-dimension reasoning audit in damage-severity order. Marketed as model- and stack-agnostic.

7. **testing-patterns — PR #723** (open) — https://github.com/anthropics/skills/pull/723
   A full-stack testing skill covering the Testing Trophy philosophy, unit testing (AAA, naming, edge cases), and React Testing Library patterns.

8. **ServiceNow platform — PR #568** (open) — https://github.com/anthropics/skills/pull/568
   A broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, vulnerability response, and IntegrationHub — the most recently updated skill PR (Aug 12).

A notable supporting cluster of tooling-fix PRs also drew heavy attention: #538 (pdf case-sensitive file references), #541 (docx tracked-change `w:id` collision with bookmarks), #539 (YAML unquoted-description validation), #1099 and #1050 (Windows subprocess/encoding bugs in skill-creator). All remain open.

## 2. Community Demand Trends

The Issues tracker reveals where the community is pushing hardest:

- **Trust-boundary and supply-chain security** — Issue #492 (43 comments, the most-discussed issue overall) documents that community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust-boundary vulnerability where users may grant elevated permissions to unofficial skills. Related concerns appear in #1175 (security of access-control logic embedded in SKILL.md for SharePoint workflows).
- **Organizational sharing and lifecycle management** — Issue #228 (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai instead of manual .skill file transfer; #189 (6 comments, 9 👍) reports duplicate-skill pollution when `document-skills` and `example-skills` plugins install identical content; #62 (10 comments) documents skills silently disappearing.
- **Authoring-tooling reliability** — Issue #556 (12 comments, 7 👍) and #1169 confirm the `run_eval.py` zero-trigger-rate bug in real usage, while #202 argues the skill-creator itself reads like developer documentation rather than an operational skill and violates its own naming guidelines.
- **Context-window economy** — Issue #1487 reports the `claude-api` skill eagerly injecting ~156k tokens in a single tool call, exhausting the context window; #1175 raises the same efficiency concern for SharePoint handling.
- **Emerging skill domains** — The community is proposing meta-cognitive and governance skills: agent-governance/safety patterns (#412), compact-memory symbolic state notation (#1329), and a three-gate reasoning quality pipeline (#1385).
- **Platform interoperability** — Persistent asks to expose Skills as MCPs (#16) and enable Skills on AWS Bedrock (#29) remain open after many months.

## 3. High-Potential Pending Skills

These unmerged PRs carry active discussion and recent updates — likely landing candidates:

- **ServiceNow platform skill — PR #568** — https://github.com/anthropics/skills/pull/568 — Updated Aug 12, the most recently touched skill submission; addresses strong enterprise demand for vendor-platform coverage.
- **plan-file-hygiene skill — PR #1479** — https://github.com/anthropics/skills/pull/1479 — Updated Jul 27; solves the accumulation of planning artifacts with no lifecycle, a gap first named by the community in Issue #1417.
- **self-audit skill — PR #1367** — https://github.com/anthropics/skills/pull/1367 — Updated Jul 2; aligns with the community's quality-gate demands and has an accompanying design proposal (#1385).
- **pyxel retro-game skill — PR #525** — https://github.com/anthropics/skills/pull/525 — Updated Jul 15; an MCP-server workflow for the Pyxel retro/pixel-art game engine, with a write → run_and_capture → inspect → iterate loop.
- **testing-patterns skill — PR #723** — https://github.com/anthropics/skills/pull/723 — Updated Apr 21; addresses a core recurring community ask for structured testing guidance.
- **document-typography skill — PR #514** — https://github.com/anthropics/skills/pull/514 — Updated Mar 13; solves a universal document-quality pain point with low implementation risk.

Also notable: PR #1538, a spec-compliance fix restoring two skills to the official Agent Skills spec — a signal that validation tooling is becoming a formal gate for contributions.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not new skill breadth but **trust infrastructure** — secure distribution, rigorous quality verification, and dependable authoring/evaluation tooling — with security (namespace impersonation), eval-loop correctness, and context-window discipline generating the loudest and most sustained discussion.

---

# Claude Code Community Digest — 2026-08-13

## Today’s Highlights

v2.1.229 shipped with useful remote-session and self-hosted-runner improvements, but the community’s attention is on approval-system friction and Windows desktop stability. The most active issue is an 80-comment report of CVP-approved organizations still receiving cyber-safeguard blocks, while the closed Linux desktop request remains the single most-liked open/closed item in the dataset. Windows users also continue to report GPU-process crashes that take down entire Claude Desktop sessions.

## Releases

**v2.1.229**
- Documented `claude remote-control --continue` for resuming the most recent Remote Control session.
- Added server-supplied Claude Code hook support for self-hosted runner sessions, matching managed-environment behavior.
- Added SSE keepalive pings to gateway streaming responses.

## Hot Issues

1. **[#84352 — CVP-approved organization still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)**  
   80 comments, 12 👍. An approved Claude.ai org is blocked again, and the Verification Portal shows the same application as “Under review.” High engagement because it undermines trust in enterprise compliance approvals.

2. **[#65697 — Official Claude Desktop build for Linux](https://github.com/anthropics/claude-code/issues/65697)**  
   52 comments, 498 👍. The most-liked issue in the dataset, now closed. This was a major Linux community request; the closure without a delivered build will likely remain controversial.

3. **[#54393 — Post-mortem: 12 multi-agent coordination bugs in one autonomous cycle](https://github.com/anthropics/claude-code/issues/54393)**  
   27 comments. A detailed catalog of coordination failures in autonomous multi-agent runs. Important for anyone pushing Claude Code toward longer unattended workflows.

4. **[#81698 — Windows desktop GPU process crash kills app and all sessions](https://github.com/anthropics/claude-code/issues/81698)**  
   25 comments. Crash code 101457950 on an RTX 5080 Laptop GPU; the whole app dies mid-turn. Symptom of broader Windows desktop instability.

5. **[#14061 — `/plugin update` does not invalidate plugin cache](https://github.com/anthropics/claude-code/issues/14061)**  
   25 comments, 31 👍. Reproducible stale-cache bug: users update plugins but new sessions still run the old version. Strong demand for a fix.

6. **[#85199 — Claude Desktop repeatedly crashes and requires “Repair” on Windows](https://github.com/anthropics/claude-code/issues/85199)**  
   13 comments. Another Windows stability report, this time requiring MSIX “Advanced Options → Repair.” Suggests a broader packaging or runtime issue.

7. **[#75899 — Left arrow navigates to agents screen and breaks session view](https://github.com/anthropics/claude-code/issues/75899)**  
   14 comments, 19 👍. A keybinding trap: the left arrow exits the chat input, is not rebindable, and the main session view is broken when returning. Frequent UX friction.

8. **[#40173 — Claude-in-Chrome domain blocking breaks business automation](https://github.com/anthropics/claude-code/issues/40173)**  
   12 comments, 7 👍. Banking and brokerage domains are blocked server-side, breaking legitimate automation workflows. Closed/stale, but still a concern for browser-extension users.

9. **[#79366 — Worktree sessions reuse an existing worktree directory](https://github.com/anthropics/claude-code/issues/79366)**  
   11 comments, 7 👍. New sessions unexpectedly land inside a previous session’s worktree. Isolation bugs are especially risky in agent-heavy workflows.

10. **[#82326 — Opus 5 hallucinated responses not present in previous versions](https://github.com/anthropics/claude-code/issues/82326)**  
    9 comments. Users report Opus 5 inventing answers that Opus 4.8 did not. Model-quality regressions generate immediate community concern.

## Key PR Progress

Only 5 PRs were active in the last 24 hours, so all are listed here.

1. **[#85925 — Docs: point remaining stale doc links at code.claude.com](https://github.com/anthropics/claude-code/pull/85925)**  
   Closed. Follow-up cleanup swapping old-domain links for canonical destinations.

2. **[#85822 — Docs: fix stale doc links and README drift in plugins and examples](https://github.com/anthropics/claude-code/pull/85822)**  
   Closed. Verified docs-only cleanup; updates hooks example and plugin README links.

3. **[#41611 — Add the missing source to Claude Code](https://github.com/anthropics/claude-code/pull/41611)**  
   Open, older PR. Minimal description; still waiting for maintainer engagement.

4. **[#42996 — Examples: Add MEP (Meat Puppet Elimination Protocol)](https://github.com/anthropics/claude-code/pull/42996)**  
   Open. Async state relay pattern for resuming Claude Code sessions across machines. Directly addresses cross-machine session continuity.

5. **[#57888 — Scope `child_process_exec` to JS/TS files](https://github.com/anthropics/claude-code/pull/57888)**  
   Closed. Fixes a Python false-positive in `security_reminder_hook.py` by scoping the `exec(` match to JavaScript/TypeScript files.

## Feature Request Trends

- **Linux desktop support**: [#65697](https://github.com/anthropics/claude-code/issues/65697) remains the clearest demand signal for a native Linux app.
- **Agent session lifecycle controls**: Users want to mark agent sessions complete, dismiss “Ready for review” work, and see sleeping/needs-input states clearly ([#66202](https://github.com/anthropics/claude-code/issues/66202), [#86082](https://github.com/anthropics/claude-code/issues/86082)).
- **Cross-machine and cross-session continuity**: Surfacing on-disk transcripts and resuming sessions across machines is a recurring theme ([#81835](https://github.com/anthropics/claude-code/issues/81835), [#42996](https://github.com/anthropics/claude-code/pull/42996)).
- **Terminal/keyboard interoperability**: Replace terminal-name allow-lists with capability detection, and make keybindings rebindable ([#71700](https://github.com/anthropics/claude-code/issues/71700), [#75899](https://github.com/anthropics/claude-code/issues/75899)).
- **Plugin lifecycle correctness**: `/plugin update` and marketplace updates should invalidate caches and update `installed_plugins.json` ([#14061](https://github.com/anthropics/claude-code/issues/14061), [#76882](https://github.com/anthropics/claude-code/issues/76882)).
- **Model/context transparency**: Users want the 1M context option visible, effort levels that don’t break tool calls, and clearer thinking-block UI ([#68287](https://github.com/anthropics/claude-code/issues/68287), [#83364](https://github.com/anthropics/claude-code/issues/83364), [#83418](https://github.com/anthropics/claude-code/issues/83418)).

## Developer Pain Points

- **Windows desktop instability**: GPU-process crashes, MSIX repair loops, and session loss are the most repeated reliability complaints.
- **Stale state leaks**: Plugin caches, reused worktree directories, and prompt-cache invalidation after `git status` changes all cause confusing “old version” or “old context” behavior.
- **Cross-session messaging gaps**: Messages may render in the target session UI but never reach the runtime input queue, or interrupt a receiving session without leaving knowledge of the message ([#86237](https://github.com/anthropics/claude-code/issues/86237), [#86059](https://github.com/anthropics/claude-code/issues/86059)).
- **Permission/approval friction**: CVP approvals not being honored, `permissions.deny` not working, and server-side domain blocking all add compliance and automation risk.
- **Connector/authentication timeouts**: claude.ai managed connectors intermittently fail to re-attach, and MCP connectors time out in CLI while working in web chat.
- **Tool-level regressions**: WebSearch returns HTTP 400 at `xhigh`/`max` effort on Opus 5, and tool responses occasionally complete server-side but never reach the client.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-13

## Today's Highlights

Codex activity this cycle is dominated by Windows reliability and IDE-context regressions, while maintainers are steadily landing thread-usage visibility and plugin-metric collection. The most engaging open issue asks for a setting to disable the 60-second auto-resolve for user-input questions, with 194 👍. A new `rust-v0.148.0-alpha.9` release shipped without detailed changelog notes.

## Releases

- **rust-v0.148.0-alpha.9** ([release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)) — Version-only release; no detailed changelog was published in the last 24 hours.

## Hot Issues

1. [#28969 — Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969) — **70 comments / 194 👍.** The top community priority: users want configurable or fully disabled auto-resolution for approval prompts, especially during long-running tasks.

2. [#25178 — Windows Computer Use screenshot fails on Windows 10 22H2 when SetIsBorderRequired is called](https://github.com/openai/codex/issues/25178) — **25 comments / 13 👍.** Computer Use can enumerate and activate windows, but screenshot capture fails with `0x80004002`, blocking full automation on Windows 10 22H2.

3. [#31553 — Codex VS Code extension stopped auto-including IDE context after update](https://github.com/openai/codex/issues/31553) — **17 comments / 12 👍.** Recent extension builds broke automatic IDE context in remote/container and WSL2 environments, forcing manual context attachment.

4. [#26990 — Windows Desktop local state is not crash-safe after power loss](https://github.com/openai/codex/issues/26990) — **14 comments.** Pins/projects reset, config regresses, and future timestamps appear after power loss; a serious durability bug for local state.

5. [#37398 — Codex Desktop: opening any unloaded local chat waits ~5 seconds on owner discovery timeout](https://github.com/openai/codex/issues/37398) — **14 comments / 9 👍.** Thread resume completes in <200 ms, but a fixed owner-discovery timeout adds ~5 seconds of delay to every unloaded chat.

6. [#33967 — ChatGPT for Windows cannot complete setup or enter limited-access mode](https://github.com/openai/codex/issues/33967) — **12 comments.** The desktop app is stuck on the “Complete Windows setup” screen, preventing use entirely for some users.

7. [#34920 — IDE Context fails in Codex extension 26.715.x with RPC serialization error](https://github.com/openai/codex/issues/34920) — **10 comments / 5 👍.** IDE Context is broken across multiple recent extension builds with RPC serialization failures, affecting VS Code and Devin.

8. [#35419 — VS Code IDE context auto-disables and selected text is not attached in WSL2](https://github.com/openai/codex/issues/35419) — **6 comments / 10 👍.** WSL2 users lose automatic context and selected-text attachment, making agent edits unpredictable.

9. [#24280 — Remote-created Codex Desktop threads do not receive automation_update/load_workspace_dependencies](https://github.com/openai/codex/issues/24280) — **5 comments / 6 👍.** Remote-control workflows create threads on a connected host, but those threads miss critical workspace dependency signals, breaking automation.

10. [#37472 — Allow request_user_input in Default mode to wait indefinitely](https://github.com/openai/codex/issues/37472) — **2 comments / 1 👍.** Complements #28969: Default-mode users who explicitly enable `request_user_input` want the ability to wait without a timeout.

## Key PR Progress

1. [#38275 — Unify turn input submission and routing](https://github.com/openai/codex/pull/38275) — Adds `TurnInputRequest` and typed submission results for atomically starting, steering, or declining a turn; exposes `start_or_steer_turn`, `start_turn_if_idle`, and `steer_turn`.

2. [#38257 — Reconnect gRPC code-mode sessions after host restarts](https://github.com/openai/codex/pull/38257) — Reopens cached code-mode sessions after a gRPC host stops, serializes reconnection attempts, and scopes cell IDs to avoid stale callbacks.

3. [#38281 — Show estimated thread usage in /status](https://github.com/openai/codex/pull/38281) — Extends `account/usage/read` with optional `threadId` and returns estimated credits, optional USD cost, and model/reasoning/token breakdowns.

4. [#38282 — Add thread usage to TUI status surfaces](https://github.com/openai/codex/pull/38282) — Adds `thread-credits` and `estimated-thread-cost` to the configurable TUI status line and terminal title for Enterprise workspaces.

5. [#38270 — Add per-thread usage queries to backend client](https://github.com/openai/codex/pull/38270) — Adds `Client::get_thread_usage` for authoritative per-thread credit and dollar usage across supported backend path styles.

6. [#38283 — Collect plugin metrics from remote executors](https://github.com/openai/codex/pull/38283) — Resolves metric operations against the executor filesystem and uses executor-native temp directories for plugin measurement sidecars.

7. [#38276 — Track plugin metrics for background unified exec commands](https://github.com/openai/codex/pull/38276) — Keeps plugin measurement collection active until background unified exec commands exit, even when item completion arrives after the turn ends.

8. [#29752 — Integrate experimental credential broker](https://github.com/openai/codex/pull/29752) — Lets Codex core carry broker-replaced credentials across the command lifecycle so managed children do not lose proxied values when shelling out.

9. [#38265 — Use bounded fallback ports for Windows managed proxies](https://github.com/openai/codex/pull/38265) — Tries configured proxy ports first, then scans preferred ranges; reserves HTTP and SOCKS5 listeners independently to avoid collisions.

10. [#38258 — Unify external authentication provider handling](https://github.com/openai/codex/pull/38258) — Uses each provider’s error classification for resolve/refresh/validation and allows runtime provider replacement to clear permanent refresh failures.

## Feature Request Trends

- **Timeout/approval control is the dominant request** — #28969 and #37472 both target the 60-second auto-resolve behavior for user-input prompts. This is the highest-engagement feature direction currently open.
- **Terminal ergonomics** — Developers continue asking for small UX controls: disabling autoscroll (#23517) and configurable audible alerts for pending approvals (#11604).
- **Predictable IDE context behavior** — Many IDE-context items are bugs, but the volume indicates a clear desire for deterministic context attachment and clear diagnostics when context is disabled (#35419, #35333).

## Developer Pain Points

- **Windows is the most fragile platform** — Setup blockers (#33967), Computer Use failures (#25178, #37743), state resets (#26990), proxy port issues (#38265), and subagent-related freezes (#37018) create a recurring support burden.
- **IDE context is too brittle in recent extension builds** — Users report silent context loss, missing `workspaceRoot`, RPC serialization errors, and WSL2-specific failures (#31553, #34696, #34920, #35333, #35419). Some users have to roll back extensions to restore functionality.
- **Session/state persistence problems are persistent** — Archived flags reset (#23851), archived conversations reappear (#25541), sqlite backfill hangs (#28087), compacted threads drop newest turns (#38169), and stale conversation state causes composer timeouts (#23644).
- **Desktop performance blockers** — Five-second owner-discovery delays (#37398), freezes with multiple active subagents (#37018), and blank windows with stale subagents (#38250) disrupt everyday workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-13

## 1. Today's Highlights

A new nightly release (v0.56.0-nightly.20260812.g5024443c7) fixes a false model-capacity exhaustion bug and adds a local `evals` report command. Agent reliability remains the community's loudest concern: top issues describe generalist-agent hangs, subagents reporting false "GOAL success" after hitting MAX_TURNS, and shell commands stuck in "Waiting input." On the security front, reviewers are actively converging on fixes for a corrupt-MCP-config fail-open, shell variable-expansion bypasses (GHSA-wpqr-6v78-jr5g), and an SSRF in `web-fetch.ts`.

## 2. Releases

**v0.56.0-nightly.20260812.g5024443c7** ([release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260812.g5024443c7))
- `fix(core,cli)`: resolve false model capacity exhaustion; fix core quota lookup model mapping.
- `feat(evals)`: add local report command and developer documentation.

## 3. Hot Issues

1. **[#22323 — Subagent reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** (12 comments) — `codebase_investigator` returns `status: "success"` / `Termination Reason: "GOAL"` even when the turn limit halted it before any analysis. Misleading success signals undermine trust in subagent results.
2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8 👍) — Simple tasks like folder creation hang for up to an hour. Users report that instructing the model not to use subagents works around it.
3. **[#25166 — Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍) — Trivial, non-interactive commands remain active in the UI, blocking subsequent work.
4. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (3 comments) — Users who disabled agents in all configs report the generalist subagent being invoked anyway — a permission regression.
5. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments, 1 👍) — Browser agent exits with `Termination Reason: GOAL` while actually failing under Wayland.
6. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments) — Requests fail when too many tools are available; users expect intelligent tool scoping instead of a hard error.
7. **[#26525 — Deterministic redaction + less Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (4 comments) — Privacy concern: transcript content reaches model context before redaction, and skill content can be logged.
8. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments) — Sessions the extractor decides not to read are never marked processed and resurface repeatedly.
9. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (4 comments) — `~/.gemini/agents/*.md` symlinks are silently ignored.
10. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** (3 comments) — `maxTurns` and other overrides are read/merged by `AgentRegistry` but never applied by the browser agent.

## 4. Key PR Progress

1. **[#28790 — Context-aware silent retries for capacity errors](https://github.com/google-gemini/gemini-cli/pull/28790)** — Fixes the critical capacity-exhaustion retry regression (#28761); non-interactive runs now back off/retry with availability TTL.
2. **[#28794 — Prevent fail-open and data loss on corrupt MCP config](https://github.com/google-gemini/gemini-cli/pull/28794)** — `mcp-server-enablement.json` parse failures previously returned `{}` and silently re-enabled every server; now handled safely.
3. **[#28691 — Block $VAR/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28691)** — Hardens `detectBashSubstitution()` / `detectPowerShellSubstitution()` and adds defense-in-depth to the CI workflow.
4. **[#28557 — SSRF fix in web-fetch via async DNS resolution](https://github.com/google-gemini/gemini-cli/pull/28557)** — Closes #28555; hostnames resolving to internal ranges (e.g., 169.254.169.254) now blocked.
5. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** — Lets subagents delegate or recurse via `tools:` frontmatter. Fixes #22092; a major orchestration feature.
6. **[#28673 — Gemini 3.6 Flash and 3.5 Flash-Lite model configs](https://github.com/google-gemini/gemini-cli/pull/28673)** — Adds base model definitions, capabilities, aliases, and code execution config for new models.
7. **[#28789 — vscode-ide-companion stop() hang fix](https://github.com/google-gemini/gemini-cli/pull/28789)** — Resolves indefinite hang with active streaming MCP sessions and fixes the keep-alive failure threshold (#28785).
8. **[#28788 — Behavioral evals for skills + web_fetch](https://github.com/google-gemini/gemini-cli/pull/28788)** — Adds `activate_skill` / `web_fetch` evals, Windows-compat improvements, and fixes the EDK report aggregator skipping non-executed tests.
9. **[#28792 — Normalize git environment and workspace state](https://github.com/google-gemini/gemini-cli/pull/28792)** — Standardizes env for Git subprocesses and fixes workspace-trust state initialization for predictable non-interactive execution.
10. **[#28679 — Better Vertex AI 401 error message](https://github.com/google-gemini/gemini-cli/pull/28679)** — Clearly explains when a standard Gemini API key is used instead of Google Cloud credentials for Vertex AI auth.

## 5. Feature Request Trends

- **AST-aware codebase tooling** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) — Read/search/map code at AST granularity to cut token noise and misaligned reads.
- **Agent self-awareness & observability** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — Accurate CLI-flag knowledge, subagent trajectory sharing via `/chat share`, and subagent context in `/bug` reports.
- **Safer, sandboxed execution** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) — Zero-dependency OS sandboxing; discourage destructive git/DB commands when safer alternatives exist.
- **Agent orchestration & autonomy** ([#28738](https://github.com/google-gemini/gemini-cli/pull/28738), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — Agents calling agents; more proactive use of custom skills and subagents without explicit prompting.
- **Memory system hardening** ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — Deterministic redaction, quarantine of invalid/inbox patches, and no infinite retries of low-signal sessions.
- **Evaluation infrastructure** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#28344](https://github.com/google-gemini/gemini-cli/pull/28344), [#28788](https://github.com/google-gemini/gemini-cli/pull/28788)) — Component-level behavioral evals, `eval:validate` for CI gating, and tool-call timeline failure diagnostics.

## 6. Developer Pain Points

- **Hangs and stalls**: generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), IDE companion `stop()` hang ([#28789](https://github.com/google-gemini/gemini-cli/pull/28789)).
- **Misleading success/failure**: MAX_TURNS reported as GOAL success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)); browser agent claiming GOAL while failing on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Permission/regression surprises**: subagents active despite user-disabled agent configs ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Browser agent fragility**: Wayland failures, ignored `settings.json` overrides, and locked-profile fail-fast ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Security/privacy**: secrets entering model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), SSRF and variable-expansion bypasses ([#28557](https://github.com/google-gemini/gemini-cli/pull/28557), [#28691](https://github.com/google-gemini/gemini-cli/pull/28691)), corrupt MCP config fail-open ([#28794](https://github.com/google-gemini/gemini-cli/pull/28794)).
- **Tool/token overhead**: 400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), scattered tmp-script creation ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), symlinked agents ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-13

## Today's Highlights
No new releases shipped in the last 24 hours; the maintainers were busy triaging a wave of MCP reliability and model-selection regressions. The most notable clusters are subagent model overrides being silently ignored, remote MCP servers failing hard on transient errors, and several resource-leak reports (extension hosts, Docker containers, event storage). Community demand remains highest for MCP OAuth/CIMD improvements ([#1305](https://github.com/github/copilot-cli/issues/1305), 35 👍).

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[#1305 — Support CIMD for Remote OAuth MCP Servers](https://github.com/github/copilot-cli/issues/1305)** — The most-upvoted open issue (35 👍). Users want CI/CD-friendly device-flow auth for remote MCP servers; DCR-only support is insufficient for non-interactive environments.
2. **[#1730 — `sessionStart` hook does not fire in Copilot CLI v0.0.420](https://github.com/github/copilot-cli/issues/1730)** — Long-running (since Feb) bug with 8 comments. `.github/hooks/*.json` hooks silently don't execute on Windows/PowerShell; still unresolved six months later.
3. **[#4328 — Ctrl+H misinterpreted as Ctrl+Backspace under WSL2](https://github.com/github/copilot-cli/issues/4328)** — `WT_SESSION` leaking from Windows Terminal breaks the documented "delete previous character" binding; WSL2 + Windows Terminal users are hitting delete-word behavior instead.
4. **[#4390 — Enabled organization models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)** — Copilot Business orgs see Claude Sonnet 5/Opus 5 and Kimi K3 missing from the effective catalogue despite being explicitly enabled; 4 👍 show broad enterprise impact.
5. **[#4422 — All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)** — Personal Enterprise accounts suddenly lose access to all Claude models even though they appear enabled in settings; persists across version rollbacks.
6. **[#3976 — Native `tgrep` indexer OOM-kills the host on large monorepos](https://github.com/github/copilot-cli/issues/3976)** — The persistent `tgrep serve` daemon has no memory cap and can take down the host machine on big repos; urgent for monorepo users.
7. **[#4432 — Rubber-duck: model-emitted `model` argument overrides complementary strategy](https://github.com/github/copilot-cli/issues/4432)** — The cross-family review subagent's purpose is defeated when the `task` tool lets the model force a same-family model, bypassing the user's `/subagents` setting.
8. **[#2109 — ACP: support `ask_user` / `ask_question` extension method](https://github.com/github/copilot-cli/issues/2109)** — 7 👍; developers want a structured way for ACP extensions to surface clarifying questions back to the user, beyond the current permission-only flow.
9. **[#4468 — `--server --stdio` never releases extension-host processes](https://github.com/github/copilot-cli/issues/4468)** — Each session spawns four extension-host children that accumulate until the server exits; a serious leak for long-lived desktop-app hosting.
10. **[#4467 — Long-running agent sessions exhaust event storage and appear cancelled](https://github.com/github/copilot-cli/issues/4467)** — Sessions with many subagents can overflow the remote event store, causing false "cancelled" states while CLI processes remain alive — a reliability hazard for automation.

## Key PR Progress
PR activity is light (3 updated in 24h), with two automated bot PRs closed as noise:

1. **[#4449 — Migrate pull request automation away from `pull_request_target`](https://github.com/github/copilot-cli/pull/4449)** — The only substantive open PR. Moves invalid-label automation to an issue-scoped write token and a no-permission `pull_request` signal, closing a potential security hole in the repo's CI automation.
2. **[#4453 — "Julesdemangeot ship it patch 1"](https://github.com/github/copilot-cli/pull/4453)** — Closed; bot-generated patch, no meaningful changes.
3. **[#4452 — "Revert 5 copilot/fix with copilot"](https://github.com/github/copilot-cli/pull/4452)** — Closed; automated revert PR, no actionable content.

## Feature Request Trends
- **MCP robustness & lifecycle** — The dominant theme: OAuth silent-refresh fixes ([#4464](https://github.com/github/copilot-cli/issues/4464)), retry/backoff for transient 5xx ([#4466](https://github.com/github/copilot-cli/issues/4466)), clean shutdown of Docker stdio MCP containers ([#4461](https://github.com/github/copilot-cli/issues/4461)), and CIMD support ([#1305](https://github.com/github/copilot-cli/issues/1305)).
- **Model selection transparency** — Users want the CLI to respect org-enabled models ([#4390](https://github.com/github/copilot-cli/issues/4390), [#4422](https://github.com/github/copilot-cli/issues/4422)) and honor explicit subagent model overrides ([#4432](https://github.com/github/copilot-cli/issues/4432), [#4462](https://github.com/github/copilot-cli/issues/4462), [#3565](https://github.com/github/copilot-cli/issues/3565)).
- **BYOK model discovery** — [#4358](https://github.com/github/copilot-cli/issues/4358) asks to populate `/models` from the custom provider's `/models` endpoint instead of a single configured model.
- **Durable context** — [#4441](https://github.com/github/copilot-cli/issues/4441) proposes preserving durable context across repeated compactions, as recursive re-summarization degrades early decisions.

## Developer Pain Points
- **Silent model downgrades/overrides** — Recurring frustration: the Task tool and `code-review` subagent ignore explicit `model:` configuration, and cross-family strategies get bypassed, with no warning.
- **MCP authentication whack-a-mole** — Entra ID scope bugs ([#4464](https://github.com/github/copilot-cli/issues/4464)), Windows socket error 10013 ([#4463](https://github.com/github/copilot-cli/issues/4463)), and per-session hard failures on transient 5xx ([#4466](https://github.com/github/copilot-cli/issues/4466)) make remote MCP setups flaky.
- **Unbounded resource usage** — `tgrep` OOM ([#3976](https://github.com/github/copilot-cli/issues/3976)), leaked extension-host processes ([#4468](https://github.com/github/copilot-cli/issues/4468)), orphaned Docker MCP containers ([#4461](https://github.com/github/copilot-cli/issues/4461)), and event-store exhaustion ([#4467](https://github.com/github/copilot-cli/issues/4467)) all point to missing lifecycle management and memory caps.
- **Hooks and automation not firing reliably** — `sessionStart` hooks ignored ([#1730](https://github.com/github/copilot-cli/issues/1730)) and marketplace `autoUpdate` not triggering ([#4465](https://github.com/github/copilot-cli/issues/4465)) undermine trust in the extension system.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-13

## Today's Highlights
While no new releases shipped in the last 24 hours, the repo shows steady community maintenance activity: two Python-side fixes from contributor Ricardo-M-L are moving through review (one for string truncation correctness, one for web-session crash resilience), and the long-running "Memory System" feature request continues to attract attention with 36 comments, underscoring strong demand for persistent context across sessions.

## Releases
No new releases published in the last 24 hours.

## Hot Issues
**#1283 — [enhancement] Memory System: Persistent context across sessions** — the only issue updated in the window, but a significant one. Opened by CatKang in February 2026 and still active (updated 2026-08-13), it proposes a dual-mode memory layer: automatic memory (AI-managed notes) and manual memory (user-defined instructions), allowing the CLI to retain useful context, project patterns, and user preferences across sessions. The 36-comment thread indicates sustained community interest and lively discussion around design trade-offs.

🔗 [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

*Note: Only 1 issue was updated in the last 24h; this is the full set of activity.*

## Key PR Progress
**#2449 — fix(string): strip newlines in shorten_middle before the length check**  
Fixes an early-return bug where `shorten_middle(text, width, remove_newline=True)` returns on short input *before* collapsing newlines. This causes `extract_key_argument`'s single-line tool-call summaries to render as multi-line, making logs harder to scan. Small but meaningful logging/debugging QoL fix.

🔗 [PR #2449](https://github.com/MoonshotAI/kimi-cli/pull/2449)

**#2324 — fix(web): handle BrokenPipeError in SessionProcess.send_message**  
Hardens the web runner's `send_message` path against a race condition where the subprocess exits between `start()` and the write to `stdin`/`drain()`. With no guard, this raises an unhandled `BrokenPipeError` and breaks the web UI session. Improves overall resilience of the Web UI integration.

🔗 [PR #2324](https://github.com/MoonshotAI/kimi-cli/pull/2324)

*Note: Only 2 PRs were updated in the last 24h; these are the full set of activity.*

## Feature Request Trends
The dominant feature direction visible in current activity is **persistent memory and context**: users want the CLI to remember project patterns, preferences, and instructions across sessions — both through AI-managed automatic notes and explicit user-defined memory. Expect further design discussions if maintainers pick up #1283.

## Developer Pain Points
- **Log readability**: tool-call summaries intended to be single-line can contain raw newlines, cluttering output and making debugging harder (motivates PR #2449).
- **Web session fragility**: subprocess lifecycle races cause unhandled `BrokenPipeError`s, destabilizing the Web UI — a recurring reliability concern in the async process-handling layer (addressed by PR #2324).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-13

## Today's Highlights

OpenCode shipped **v1.18.17**, focusing on session compaction quality, MERGE Gateway reasoning variants, and safer automatic retry behavior. Community attention is concentrated on billing/free-tier entitlement errors, Mermaid rendering demand, and MCP tools not reaching the agent. PR activity is heavy on TUI polish, Desktop/WSL alignment, client lifecycle hardening, and a new per-session budget limit.

## Releases

### [v1.18.17](https://github.com/anomalyco/opencode/releases/tag/v1.18.17)
**Core bugfixes:**
- Session compaction now keeps complete recent turns and produces clearer summaries for smaller models.
- Added MERGE Gateway reasoning variants so those model options work correctly.
- Automatic session retries are capped and jittered, reducing repeated retry storms.

## Hot Issues

- [#14273: [bug] Free usage exceeded. Add credits (when using Zen free models)](https://github.com/anomalyco/opencode/issues/14273)  
  40 comments. Users report “Free usage exceeded” even with a Zen balance or credits. Closed, but it highlights persistent billing/entitlement confusion.

- [#4832: Gemini 3 Pro function calling fails - missing `thoughtSignature` support](https://github.com/anomalyco/opencode/issues/4832)  
  35 comments, 14👍. High-signal model compatibility gap breaking tool-use workflows on Gemini 3 Pro. Closed after significant community discussion.

- [#41470: “Copied to clipboard” doesn't work](https://github.com/anomalyco/opencode/issues/41470)  
  11 comments. Clipboard copy fails inside VSCode Server/Docker environments, a common remote-development setup.

- [#3366: [FEATURE]: Mermaid rendering in chat](https://github.com/anomalyco/opencode/issues/3366)  
  10 comments, 26👍. One of the most-liked feature requests; aligns with recent TUI work rendering Mermaid diagrams natively.

- [#33027: MCP tools connected but not exposed to agent](https://github.com/anomalyco/opencode/issues/33027)  
  7 comments. MCP server connects and lists tools, but the agent never sees them. Major blocker for MCP-heavy workflows.

- [#19005: Make local file paths clickable in terminal output](https://github.com/anomalyco/opencode/issues/19005)  
  7 comments, 5👍. Recurring UX pain: generated-file paths render as plain text, forcing manual copy/paste.

- [#42128: Free Usage Limit Exceeded on First Request (DeepSeek V4 Flash Free / OpenCode Zen)](https://github.com/anomalyco/opencode/issues/42128)  
  7 comments, 5👍. New users hit “Free usage exceeded” on the very first request. Likely an entitlement/rate-limit-state bug.

- [#17073: Protect .env files in grep/glob results, not just direct read](https://github.com/anomalyco/opencode/issues/17073)  
  6 comments, 5👍. Security-relevant: permission rules match the search pattern instead of the matched file path, so `.env` can leak through grep/glob.

- [#33495: Zen balance does not remove free usage cap; paid users still hit 200-request/free usage limit](https://github.com/anomalyco/opencode/issues/33495)  
  6 comments. Paid users still receive 429/free-tier limits. Billing and plan enforcement need better integration.

- [#41848: LLM retry has no max attempts: stream errors cause infinite retry loop, UI stuck on Thinking](https://github.com/anomalyco/opencode/issues/41848)  
  3 comments. A stream error can leave the UI on “Thinking...” forever because retry delay can grow to ~24 days. Serious reliability issue.

## Key PR Progress

- [#42174: fix(core): subagent sessions inherit ancestor deny rules](https://github.com/anomalyco/opencode/pull/42174)  
  Security fix: subagents can no longer escape deny rules configured in ancestor sessions.

- [#42202: feat(opencode): add per-session budget limit](https://github.com/anomalyco/opencode/pull/42202)  
  Adds a session budget that can stop the assistant when cost is reached, plus a TUI sidebar widget to view/set it.

- [#42179: feat(tui): render Mermaid GitGraph diagrams](https://github.com/anomalyco/opencode/pull/42179)  
  Renders Mermaid `gitGraph` fences as terminal-native vertical commit graphs.

- [#42130: feat(tui): render Mermaid timelines](https://github.com/anomalyco/opencode/pull/42130)  
  Adds terminal-native rendering for Mermaid `timeline` diagrams instead of raw source fallback.

- [#42199: fix(desktop): use matching v2 CLI in WSL](https://github.com/anomalyco/opencode/pull/42199)  
  Aligns Desktop and WSL CLI versions by migrating to `opencode2` and enforcing exact version matching.

- [#42196: fix(tui): truncate queued prompt preview](https://github.com/anomalyco/opencode/pull/42196)  
  Keeps the queued-prompt dock to one terminal row when the next prompt contains multiple lines.

- [#42187: fix(client): validate promise service discovery](https://github.com/anomalyco/opencode/pull/42187)  
  Adds type validation for managed-service registration/health data before use in lifecycle logic.

- [#42186: fix(client): require authenticated service stop](https://github.com/anomalyco/opencode/pull/42186)  
  Prevents clients from falling back to unauthenticated `SIGTERM`/`SIGKILL` on timeout.

- [#42185: fix(client): prevent stale service replacement](https://github.com/anomalyco/opencode/pull/42185)  
  Older clients can no longer replace a newer managed background service after an update.

- [#42188: fix(tui): retry migration status transport errors](https://github.com/anomalyco/opencode/pull/42188)  
  Migration status polling now retries through transient server disconnects instead of showing a false failure toast.

## Feature Request Trends

- **Richer TUI visualization:** Mermaid rendering in chat, GitGraph, and timelines is a clear direction; users want diagrams natively in the terminal.
- **Better file-path ergonomics:** Clickable file paths, improved project selection, and clipboard reliability in remote/container environments.
- **Security and permission hardening:** Requests to protect `.env` in grep/glob results and to allow per-MCP-server trust configuration.
- **Cost controls and accurate entitlements:** Per-session budgets and clearer free/paid billing state, driven by recurring “Free usage exceeded” reports.

## Developer Pain Points

- **Billing/entitlement errors:** Repeated “Free usage exceeded” reports even with Zen balance or paid Go subscriptions; non-English users also affected.
- **Compaction/context loss:** `/compact` can lose context or degenerate into repeated lines, especially with smaller models like DeepSeek V4 Flash.
- **Model/provider compatibility gaps:** Gemini 3 Pro function calling, MiniMax default-prompt fallback, Azure large-model hangs, and DeepSeek v4-pro multi-turn failures.
- **MCP integration issues:** Tools connect and list correctly but never reach the agent; trust configuration for private-network MCP servers is also missing.
- **Reliability under stream errors:** Infinite retry loops, long “Thinking...” hangs, and disk I/O/bootstrap hangs on Linux cause frustrating, hard-to-recover failures.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest — 2026-08-13

### Today’s Highlights

No release shipped in the last 24 hours, but `earendil-works/pi` saw significant PR activity around TUI interactivity and wire-protocol correctness. Notably, new PRs restore `usage` in streaming events (#7982), add Grok 4.6 (#8042), and implement component-level mouse events for the fullscreen TUI (#8032, #8037). The most active issue remains #6879, where auto-compaction never fires until the provider rejects the request at 373k tokens.

### Releases

No new releases in the last 24 hours.

### Hot Issues

1. [#6879 — [bug] auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)  
   **18 comments, 17 👍**  
   A 2-hour agentic turn on `gpt-5.6-sol` pushed past the compaction threshold; compaction only kicked in after the API rejected a 373k-token request. The community wants a post-agent-turn compaction check.

2. [#7730 — [bug] High CPU usage on macOS with long session](https://github.com/earendil-works/pi/issues/7730)  
   **11 comments, 8 👍**  
   CPU swings between 50–110% with 600–800MB memory usage. Appears correlated with session/context length and is a major long-session UX blocker.

3. [#7836 — Edit fuzzy match misses lines with differences in whitespace length](https://github.com/earendil-works/pi/issues/7836)  
   **9 comments, in progress**  
   `normalizeForFuzzyMatch` doesn’t collapse or trim whitespace, so semantically identical `oldText` can fail to match. Especially painful for small models using the Edit tool.

4. [#7835 — Edit tool rejects a single-object `edits` argument](https://github.com/earendil-works/pi/issues/7835)  
   **4 comments, in progress**  
   Some models wrap `edits` as a single `{oldText, newText}` object instead of an array. The tool throws when it should recover gracefully.

5. [#8000 — @ file autocomplete: direct children lose to deep nested matches on basename ties](https://github.com/earendil-works/pi/issues/8000)  
   **3 comments**  
   Typing `@~/<dir>/pro` ranks deep nested matches above a direct `projects/` child, making the obvious target difficult to surface.

6. [#8029 — Very slow performance when moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)  
   **1 comment**  
   A single arrow-key press took 1650ms with a ~7000-line prompt buffer. Movement cost grows linearly with buffer size.

7. [#7805 — Root `.md` documentation files in settings-configured skill directories are loaded as skills](https://github.com/earendil-works/pi/issues/7805)  
   **2 comments, in progress**  
   `README.md`, `AGENTS.md`, and `CLAUDE.md` in skill directories are treated as broken skills and emit validation warnings.

8. [#8041 — coding-agent: Render Mermaid and LaTeX in HTML exports to match TUI](https://github.com/earendil-works/pi/issues/8041)  
   **1 comment, 1 👍**  
   HTML exports currently skip TUI rendering transformations, so Mermaid graphs and LaTeX formulas appear as raw source.

9. [#8008 — RemoteSession reconnect fails for multiple sessions sharing one PiClient](https://github.com/earendil-works/pi/issues/8008)  
   **2 comments**  
   After a shared transport disconnects, only the first session’s `reconnect()` succeeds; the second rejects with `PiDisconnectedError`.

10. [#8055 — TUI: Ambiguous-width chars break table alignment on CJK terminals](https://github.com/earendil-works/pi/issues/8055)  
    **1 comment**  
    Circled numbers, `±`, `…`, and `€` are counted as 1 column but render 2 columns in CJK fonts, misaligning tables and lists.

### Key PR Progress

1. [#7982 — fix(coding-agent): preserve usage in streaming events](https://github.com/earendil-works/pi/pull/7982)  
   Re-adds cumulative provider `usage` to JSON/RPC `message_update` events while keeping message snapshots omitted. Closes #7911.

2. [#8042 — feat(ai): add Grok 4.6](https://github.com/earendil-works/pi/pull/8042)  
   Adds Grok 4.6 to the xAI Responses model set with `low`, `medium`, `high`, and `xhigh` reasoning levels.

3. [#8037 — feat(tui): dispatch mouse events to components via onMouse](https://github.com/earendil-works/pi/pull/8037)  
   Implements #7683 so extension widgets can receive wheel and SGR mouse events before default scrollbar/selection handling.

4. [#8032 — feat(tui): let components receive mouse events on their own rows](https://github.com/earendil-works/pi/pull/8032)  
   Companion implementation of #7683 using `LayoutBox` hit-testing and innermost-first event dispatch.

5. [#8052 — fix(coding-agent): make session persistence transactional](https://github.com/earendil-works/pi/pull/8052)  
   Prevents a broken session graph when JSONL append fails after the in-memory graph advances, e.g. on `ENOSPC`.

6. [#8044 — fix(bedrock): expose safe stream failure diagnostics](https://github.com/earendil-works/pi/pull/8044)  
   Classifies Bedrock send/stream-event/stream-completion failures and safely settles EOF-without-terminal-event as a transient failure.

7. [#8022 — fix: `triggerTurn: false` should not start turn](https://github.com/earendil-works/pi/pull/8022)  
   Fixes #7783. Display-only custom messages sent from `agent_end` no longer trigger an unintended second assistant turn.

8. [#8012 — fix: don’t load root mds as skills in settings](https://github.com/earendil-works/pi/pull/8012)  
   Addresses #7805 by treating root Markdown files as skills only when they parse as skill frontmatter with a name/description.

9. [#8049 — feat: use local Ollama models in pi via a local model proxy](https://github.com/earendil-works/pi/pull/8049)  
   Adds dependency-free Node.js proxy scripts for using local Ollama models on Ubuntu, macOS, and Windows.

10. [#7956 — feat(coding-agent): render Mermaid diagrams in HTML exports](https://github.com/earendil-works/pi/pull/7956)  
    Reuses ANSI-to-HTML tool rendering so Mermaid diagrams can be rendered in HTML exports with a toggle. A step toward full TUI/export parity.

### Feature Request Trends

- **Local/private model workflows**  
  Users increasingly want easy BYO-model support: Ollama proxy (#8049), `/add-local-model` example extension (#8039), “show all llama.cpp models” (#8051), and Scaleway EU-hosted open-weights models (#6165).

- **Richer TUI extension interactivity**  
  Component-level mouse events (#7683, #8032, #8037), configurable wheel scroll step (#7765), mid-line slash command menu (#8015), and HTML export parity for Mermaid/LaTeX (#8041).

- **Extension API maturity**  
  Requests include hooks to withhold or replace displayed assistant messages (#8035), acknowledged durable custom-message publication (#8023), and telemetry-aware harness infrastructure (#7713, #7976).

- **Broader provider/model coverage**  
  New model/API additions are frequent: Grok 4.6 (#8042), MiniMax image-to-image (#8030), synchronous speech generation (#8014), and Anthropic Vertex (#5262).

### Developer Pain Points

- **Context-window and long-session reliability**  
  Auto-compaction failures (#6879) and high CPU/memory in long sessions (#7730) remain the most visible recurring issues, alongside earlier streaming `usage` loss (#7911).

- **LLM tool-input unpredictability**  
  Models send Edit tool arguments in unexpected shapes (#7835) or with whitespace differences (#7836), and providers silently ignore parameters like DeepSeek’s `max_completion_tokens` (#8018).

- **Persistence and connectivity fragility**  
  Session writes can leave broken graphs on disk (#8052), shared clients fail on multi-session reconnect (#8008), and resume messages ignore `PI_CODING_AGENT_DIR` (#8048).

- **Terminal rendering correctness**  
  CJK ambiguous-width character alignment (#8055), `cases` environment math layout (#7929), and slow prompt editing with large buffers (#8029) show the TUI still needs polish for complex and non-Latin content.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-13

## Today's Highlights
Qwen Code shipped two desktop releases (v0.2.0 and v0.2.1) targeting web-shell stability — transcript pagination, session catalog sharing, and a workspace-scoped project memory default. On the issue tracker, a regression causing crashes on image load since 0.21.2 (#8957) and a report of stalled long-running tasks (#8963) drew the most community engagement, while maintainers continued landing session-lifetime, memory-hardening, and CI-stability improvements.

## Releases

### desktop-v0.2.1
- refactor(serve): default project memory to workspace scope — [PR #8856](https://github.com/QwenLM/qwen-code/pull/8856)
- feat(telemetry): align session lifecycle events

### desktop-v0.2.0
- fix(web-shell): stabilize transcript history pagination — [PR #8914](https://github.com/QwenLM/qwen-code/pull/8914)
- feat(web-shell): share session catalog

Note: `dsw-eas-smoke-20260812` is a non-production infrastructure smoke build; no SWE score published.

## Hot Issues

1. **[#7040 — RFC: Reliable auto-memory recall](https://github.com/QwenLM/qwen-code/issues/7040)** · 10 comments
   Roadmap tracking issue for auto-memory recall, with recall-delivery telemetry already merged (#7393) and bounded initial-turn recall + multilingual eval in review (#8716). Central to the context-performance roadmap.

2. **[#8963 — Cannot auto-run tools/scripts](https://github.com/QwenLM/qwen-code/issues/8963)** · 9 comments
   User reports shell commands stalling in both yolo and auto modes, making overnight long tasks impossible. Frustration is high, with the user comparing unfavorably to Kimi Code. Needs information from maintainers.

3. **[#8957 — Regression: crash on image load since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957)** · 8 comments
   User pins 0.21.1 as the last working version; image reading now crashes instantly. Marked need-retesting, P2 regression with clear bisect value.

4. **[#8678 — Preserve session when large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)** · 7 comments
   Session-management issue with merged partial fix (#8691) implementing timeout contracts and observability; remaining restore-path work tracked for review.

5. **[#8562 — tmux flickering via SSH](https://github.com/QwenLM/qwen-code/issues/8562)** · 7 comments
   Screen flashing in tmux splits on Ubuntu accessed through iTerm2; user performed their own Qwen-assisted debugging and attributed the regression to recent Qwen Code versions.

6. **[#8097 — Background agent coordination gap](https://github.com/QwenLM/qwen-code/issues/8097)** · 6 comments
   Duplicate subagent work, premature completion, and non-interactive `send_message` when coordinating multiple Explore subagents. Core multi-agent roadmap issue.

7. **[#8897 — CLI flags missing from `qwen --help`](https://github.com/QwenLM/qwen-code/issues/8897)** · 5 comments
   `--approval-mode` and `--auth-type` are validated but absent from help output — a discoverability and CLI-surface consistency bug.

8. **[#9016 — Vertex AI cannot use ADC](https://github.com/QwenLM/qwen-code/issues/9016)** · 4 comments
   Vertex auth requires an API key, but satisfying that requirement produces a 401 from Vertex. Application Default Credentials are effectively unsupported.

9. **[#8922 — Shell ignores `tools.truncateToolOutputThreshold`](https://github.com/QwenLM/qwen-code/issues/8922)** · 4 comments
   Documented setting has no effect on Shell, which hard-codes a 30,000-character budget that takes precedence.

10. **[#9015 — Main CI failed: E2E Tests](https://github.com/QwenLM/qwen-code/issues/9015)** · 4 comments
    Auto-tracked P1 failure on `main` before any test result was reported. Another signal of runner instability.

## Key PR Progress

1. **[#8972 — Workflow agent can pin a directory and outlive default bounds](https://github.com/QwenLM/qwen-code/pull/8972)** · autofix/takeover
   Lets `agent({workingDir})` run inside an existing git worktree with extended lifetime — enables long-lived, directory-scoped workflow subagents.

2. **[#8905 — Adaptively grow live-journal caps before truncating mid-turn replay](https://github.com/QwenLM/qwen-code/pull/8905)** · autofix/takeover
   Daemon now doubles per-session journal caps (entries scaled with bytes) before dropping replay entries when an in-flight turn outgrows limits.

3. **[#8874 — Web Shell workspace file uploads](https://github.com/QwenLM/qwen-code/pull/8874)** · autofix/takeover
   Drag-and-drop uploads with sequential progress, cancellation, automatic conflict renaming, and inline file previews in the composer.

4. **[#8848 — Redesign Channel policy and workspace management](https://github.com/QwenLM/qwen-code/pull/8848)** · review/self-reported
   Exposes shared direct-message, group-access, session-routing, and workspace-ownership controls across all manageable adapters.

5. **[#8994 — Review settings for attribution, default effort, and default comment](https://github.com/QwenLM/qwen-code/pull/8994)** · autofix/takeover
   Adds operator-controlled `/review` skill settings, explicitly blocking repository-level overrides so repo content cannot control review policy.

6. **[#8927 — Bound session lifetime with `sessionRotation`](https://github.com/QwenLM/qwen-code/pull/8927)** · review/self-reported
   Adds per-channel session rotation by `maxTurns` or duration; routes start fresh sessions once bounds are exceeded.

7. **[#9003 — SDK support for "auto" permission mode](https://github.com/QwenLM/qwen-code/pull/9003)** · review/self-reported
   Aligns Python/Java SDKs with the CLI and TypeScript SDK by accepting `auto` in startup options, including validation-message updates.

8. **[#8626 — Preserve Claude hooks in dual-manifest extensions](https://github.com/QwenLM/qwen-code/pull/8626)**
   Preserves Qwen/Gemini extension resources while importing Claude-compatible hooks; also fixes marketplace-entry vs direct-install metadata handling.

9. **[#8982 — Reduce ENOSPC and load-sensitive CI flakes](https://github.com/QwenLM/qwen-code/pull/8982)**
   Makes the Test gate less sensitive to shared-runner load and `/tmp` pressure — shortens watchdog boundary tests instead of blanket-retrying.

10. **[#9007 — Bound ACP HTTP pre-attach buffers by bytes](https://github.com/QwenLM/qwen-code/pull/9007)**
    Memory-safety hardening for the ACP transport, capping pre-attach buffering with explicit byte limits.

**Also notable:** #8978 (no-op on empty channel set), #9020/#9022/#9028 (review-context manifest bound fixes), #8996 (judge autofix feedback validity by content), #9027 (drop AI template tells from unattributed reviews).

## Feature Request Trends
- **Memory & context lifecycle**: Reliable auto-memory recall timing/quality (#7040), pinned-memory guard for `/dream` turns (#8357), workspace-scoped project memory (desktop-v0.2.1).
- **Session durability & rotation**: Large-restore timeout handling (#8678), per-channel `sessionRotation` (#8927), transcript consistency after token recovery (#8979).
- **Web-shell & desktop maturation**: Workspace file uploads (#8874), channel policy management (#8848), replacing the Electron app with the Tauri shell (#8596).
- **Multi-agent coordination**: Deduplicating background subagent work and fixing non-interactive `send_message` (#8097).
- **Review workflow governance**: Attribution/effort/comment defaults (#8994), content-based feedback validity checks (#8996).

## Developer Pain Points
- **Long-running tasks stall or hard-fail**: Tools freeze in auto/yolo modes (#8963); headless runs abort with `NO_TOOL_RESULT_PROGRESS` after a tool result (#9026).
- **Patch-level regressions**: Image-load crash since 0.21.2 (#8957); tmux flicker introduced in recent versions (#8562).
- **CLI/config/SDK inconsistencies**: Hidden flags in `--help` (#8897), ignored truncation threshold (#8922), Python SDK rejecting `permission_mode="auto"` (#9002).
- **Authentication friction**: Vertex AI ADC unusable due to API-key requirement (#9016).
- **CI instability**: E2E failures on `main` (#9015) and load-sensitive flakes (#8982) undermining trust in branch health.
- **Session/transcript data integrity**: MAX_TOKENS recovery producing duplicated turns on `--resume` (#8979) and large-restore timeouts (#8678).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-08-13

## Today's Highlights
v0.9.6 ships with a major identity milestone: Shannon Labs' **CodeWhale** is now the official public product name, and the legacy `deepseek-tui` npm package is formally deprecated. The maintainer landed several community contributions (OrcaRouter provider, rail-free copy, snapshot/crash-recovery split) via a documented harvest process after base-drift CI failures blocked the original forks. Meanwhile, two v0.9.5 regressions — Auto-Review mode blocking all write operations and the output pane no longer filling wide terminals — are drawing user reports and will likely drive a quick patch.

## Releases
**v0.9.6** — Codewhale is officially the public product from Shannon Labs. The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers, but the legacy `deepseek-tui` npm package is **deprecated** and receives no further releases. Users coming from v0.8.x legacy `deepseek` / `d...` [release notes truncated in source] should consult the documented migration path.
https://github.com/Hmbown/CodeWhale/releases

## Hot Issues
1. **#4949 — Chinese translation of "Constitution": 宪法 vs. 协作准则** (9 comments, OPEN) — PR #4908's author reverted "Constitution" to 宪法 for its foundational authority, but contributors worry about political sensitivity. Active zh-native debate awaits a maintainer decision.
   https://github.com/Hmbown/CodeWhale/issues/4949

2. **#4959 — Proposed `/stop` command with runtime STOP-word intercept** (8 comments, OPEN) — In YOLO/autonomous mode, plain-text `+ stop` / `stop` is ignored. Community requests a hard mechanical interrupt for tool-call blocking.
   https://github.com/Hmbown/CodeWhale/issues/4959

3. **#5323 — v0.9.5 regression: Auto-Review silently blocks every Bash/write call** (3 comments, OPEN) — Auto-Review changed from auto-approving to silently rejecting all "destructive" calls, breaking autonomous workflows. High-priority regression filed the same day.
   https://github.com/Hmbown/CodeWhale/issues/5323

4. **#5322 — Regression: output area doesn't fill wide terminals** (2 comments, OPEN) — v0.9 caps transcript width; v0.8.65 expanded to full terminal width. Cosmetic but widely felt on ultrawide displays.
   https://github.com/Hmbown/CodeWhale/issues/5322

5. **#5209 — File `action=edit` silently accepts wrong params, reports fake success** (4 comments, CLOSED) — Using `new_str` instead of `replace` returns "success" without editing, causing 3–5x re-edits per location. Serious agent-loop reliability defect.
   https://github.com/Hmbown/CodeWhale/issues/5209

6. **#5034 — Provider switch retains unrelated default model** (5 comments, CLOSED) — Switching to OpenAI could leave `gpt-5.5` as the default from a different route; provider and model resolution are not updated as one coherent unit.
   https://github.com/Hmbown/CodeWhale/issues/5034

7. **#5250 — Only one API key can be saved** (3 comments, CLOSED) — Multi-provider users (DeepSeek + GLM) must re-enter keys on every switch; request to persist keys per provider instead of overwriting.
   https://github.com/Hmbown/CodeWhale/issues/5250

8. **#5047 — API keys silently persist only in the working repo** (2 comments, CLOSED) — Keys sometimes land in `<cwd>/.codewhale/config.toml` plaintext instead of durable global secret storage — a security risk when the repo is shared.
   https://github.com/Hmbown/CodeWhale/issues/5047

9. **#5097 — "CodeWhale is not the official DeepSeek Coding Agent"** (5 comments, CLOSED) — A YouTuber claims Reasonix is DeepSeek's official coding agent; community flags branding/positioning confusion post-rename.
   https://github.com/Hmbown/CodeWhale/issues/5097

10. **#5314 — Copy message includes rail decorations** (2 comments, CLOSED) — Context-menu "Copy message" copies `●` role glyphs and `▏` rail prefixes, while selection copy is clean. UX inconsistency, now fixed.
    https://github.com/Hmbown/CodeWhale/issues/5314

## Key PR Progress
1. **#5328 — FEAT-014: Command contract crate boundary (facets + shared types)** (OPEN) — First upstream draft for the EPIC-005/006 TUI command decomposition; intentionally no production rewiring, just migration shapes for review.
   https://github.com/Hmbown/CodeWhale/pull/5328

2. **#5339 — fix(engine): suppress child-owned shell completions** (OPEN) — Filters child-owned background shell completion events out of the parent model stream while preserving unowned parent completions. Closes #5325.
   https://github.com/Hmbown/CodeWhale/pull/5339

3. **#5338 — feat(web): move docs guide page onto dictionary spine** (OPEN) — First slice of #5337: retires `isZh` ternaries in `app/[locale]/docs/guide/page.tsx` via a reusable `DocsGuideDict` pattern with verbatim en/zh copy.
   https://github.com/Hmbown/CodeWhale/pull/5338

4. **#5333 — feat(tui): pin host terminal as an always-on-top mini window** (OPEN) — Maintainer harvest of community PR #5318 (SparkofSpike): `/pin` or context-menu action shrinks the terminal to 640×400 and pins it on top; re-trigger restores original size/state.
   https://github.com/Hmbown/CodeWhale/pull/5333

5. **#5330 — fix(session): separate snapshot reads from crash recovery** (CLOSED) — Harvest of #5320 (h3c-hexin): adds `load_session_snapshot` for side-effect-free reads while tool calls run, plus `recover_session_for_resume` with repair stats.
   https://github.com/Hmbown/CodeWhale/pull/5330

6. **#5336 — fix(mcp): omit nextCursor when there are no further pages** (OPEN) — `serve --mcp` returned `"nextCursor": null` in `tools/list` and `resources/list`, violating the MCP spec; strict clients like Claude Code reject the shape. Fixes #5335.
   https://github.com/Hmbown/CodeWhale/pull/5336

7. **#5334 — docs(i18n): retire the stale zh-Hant partial-pack declaration** (OPEN) — After #5143 gave zh-Hant full `en.json` parity, five surfaces (including two user-facing strings) still label it partial. i18n consistency cleanup.
   https://github.com/Hmbown/CodeWhale/pull/5334

8. **#5332 — feat(config): register OrcaRouter as a named provider** (CLOSED) — Harvest of #5321 (XiaoHuo888-hue): wires OrcaRouter exactly like OpenRouter — one `ORCAROUTER_API_KEY` (`sk-orca-` prefix) unlocks 150+ models across picker, config reference, and docs.
   https://github.com/Hmbown/CodeWhale/pull/5332

9. **#5331 — fix(tui): copy messages without visual rails** (CLOSED) — Harvest of #5319 (XhesicaFrost, closes #5314): User/Assistant cells copy canonical source content; Tool/Thinking/System cells keep the full-transcript path.
   https://github.com/Hmbown/CodeWhale/pull/5331

10. **#5329 — fix(tui): move lru to 0.18 and unpin ratatui-core (RUSTSEC-2026-0253)** (CLOSED) — Restores the green main gate: `lru` 0.16.4's `LruCache::pop()` is panic-unsafe and can leave dangling list pointers; fixed upstream in 0.18.2.
    https://github.com/Hmbown/CodeWhale/pull/5329

Also notable: **#5327 — feat(tui): add interactive extensions manager** (CLOSED) — adds localized `/plugin` / `/plugins` commands behind a digest-bound controller, retaining legacy executable tools as read-only inventory.
https://github.com/Hmbown/CodeWhale/pull/5327

## Feature Request Trends
- **Architecture decomposition (EPIC-005/006):** Multiple PRs/issues push toward crate boundaries, command extraction, and cleaner module seams — the TUI is being prepared for deeper refactors.
- **Deterministic stop/control semantics:** #4959 `/stop` + STOP-word intercept and #5267 turn-stop honesty both target reliable interruption in autonomous/YOLO modes.
- **Multi-provider ergonomics:** #5250 per-provider API keys, #4660 custom provider/model config (kimi-code style), and the OrcaRouter registration (#5332) show strong demand for provider-agnostic workflows.
- **i18n completeness:** #4949 Constitution translation, #5337 dictionary-spine migration, and #5334 zh-Hant parity — the Chinese-speaking community is actively driving locale quality.
- **Recovery & durability:** #5272 prompt-scoped file recovery, #5000 interrupted-output persistence, and #5330 snapshot/crash separation — session resilience is a recurring theme.

## Developer Pain Points
- **v0.9.5 regressions:** Auto-Review blocking write ops (#5323) and the wide-terminal layout shrink (#5322) both shipped in the same release, straining confidence in the release gate.
- **CI/base-drift friction:** Multiple community PRs (#5320, #5321, #5319) fail only from stale bases or env-flaky tests, and fork pushes are denied — forcing maintainer harvest PRs. Contributors get credit, but the process still adds friction.
- **Tool-call reliability:** File edit's false success on wrong params (#5209) and provider/model desync (#5034) erode trust in agentic loops.
- **Secret management:** Plaintext API keys in repo-local config (#5047) and the single-key overwrite behavior (#5250) remain security and UX concerns.
- **Windows is a second-class platform:** `exec --auto` flag concatenation (#4564) and the terminal PiP feature request (#5318) highlight recurring Windows-specific gaps.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*