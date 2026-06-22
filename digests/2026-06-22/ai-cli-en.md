# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-22 00:30 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-06-22

---

## 1. Ecosystem Overview

The AI CLI tools landscape is undergoing a **rapid maturation phase** characterized by intense competition on three fronts: **agent reliability**, **platform parity** (especially Windows ARM64 support), and **developer experience polish**. The six actively-maintained tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, and DeepSeek/CodeWhale) are converging on shared pain points—subagent trustworthiness, context window management, and sandbox security—while differentiating on integration depth (IDE vs. terminal-first), model provider flexibility, and automation paradigms (YOLO modes, auto-compaction). A notable signal: **rebranding** (DeepSeek → CodeWhale) and **Rust-native rewrites** (Codex's alpha track) indicate architectural bets being placed for long-term performance and maintainability.

---

## 2. Activity Comparison

| Tool | Issues Opened (24h) | PRs Active (24h) | Release Status | Community Pulse |
|---|---|---|---|---|
| **Claude Code** | ~10 notable | 2 | No new release | High engagement (601👍 on multi-account feature) |
| **OpenAI Codex** | ~10 notable | 10+ | 3 Rust CLI alphas today | High urgency (rate-limit crisis, 188👍) |
| **Gemini CLI** | ~10 notable | 10 | No new release | Moderate (subagent reliability dominates) |
| **GitHub Copilot CLI** | ~9 notable | 1 (spam) | No new release (v1.0.60 latest) | Low activity; issues quickly closed |
| **OpenCode** | ~10 notable | 10 | No new release | High churn (3 renderer crashes today) |
| **Pi** | ~10 notable | 10 | No new release | High (64 comments on connection bug) |
| **Qwen Code** | ~10 notable | 10 | 4 releases (v0.18.5 stable + 3 nightlies) | Very high (bug-fix sprint) |
| **DeepSeek/CodeWhale** | ~10 notable | 10 | No new release (v0.8.63 latest) | High (rebranding + release-blocker fixes) |

**Key observation:** Qwen Code leads in release cadence (4 releases in 24h), while OpenAI Codex shows the highest PR throughput on active infrastructure work (code-mode, session management). Claude Code and Gemini CLI have no new releases but maintain significant community discussion volume.

---

## 3. Shared Feature Directions

The following requirements appear **across three or more tool communities**, indicating genuine industry demand:

| Requirement | Tools | Specific Need |
|---|---|---|
| **Multi-account / Profile Management** | Claude Code (#18435, 601👍), Gemini CLI (settings.json bypass), OpenCode (Zen model availability) | Frictionless switching between personal/team/work accounts without logout/login loops |
| **Context Window Visibility & Compaction** | Copilot CLI (#3867, closed), Pi (#5217, #5937), DeepSeek (#3363), Qwen Code (auto-compaction via PRs) | Token usage indicators, compaction reason events, auto-compaction with user confirmation |
| **Windows-native Sandbox** | Claude Code (#46740, 9👍), OpenCode (WSL issues), Qwen Code (UNC path bugs), Copilot CLI (Windows ARM64 crash #3687) | Native sandbox enforcement for Windows users, not just WSL wrappers |
| **Agent Reliability / Subagent Trust** | Gemini CLI (#22323, #21409), DeepSeek (#2487, #3275), Pi (#4945), Claude Code (#69772) | Hangs, false-success reports, self-driven loops, silent model switches |
| **MCP Ecosystem Compatibility** | Gemini CLI (MCP OAuth, schema normalization), OpenCode (#32829, `$ref/$defs` failures), Qwen Code (#5563, MCP scope docs), Claude Code (#69035, Atlassian auth) | Cross-provider MCP tool schema handling, auth refresh resilience |
| **Cost/Billing Observability** | Copilot CLI (#3778, OpenTelemetry), OpenAI Codex (#28879, rate-limit shock), Pi (#5950, real cost in footer) | Real-time cost-per-session metrics, budget alerts, rate-limit transparency |
| **Session-as-Process / Programmatic Control** | Claude Code (#68996), Pi (#5700, multi-session TUI), Qwen Code (#5540, revivable sub-agents) | Spawn, communicate, and kill sessions from code or CLI with PID-like lifecycle |
| **Voice / Hands-Free Interaction** | Qwen Code (#5502, voice dictation PR), OpenCode (accessibility), Claude Code (accessibility gaps) | Dictation modes, silence detection, transcription model selection |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek/CodeWhale |
|---|---|---|---|---|---|---|---|---|
| **Primary User** | Power users, agentic workflows | Plus-plan developers | Enterprise, multi-model | GitHub ecosystem | TUI-first power users | Local-first devs | Chinese/global hybrid | Performance-conscious devs |
| **Tech Stack** | TypeScript/Node | Rust (alpha track) | TypeScript | TypeScript | TypeScript/Effect TS | TypeScript/Bun | TypeScript/Node | Rust |
| **Key Strength** | Session resilience, agentic memory | IDE integration, code-mode | Multi-provider, MCP depth | GitHub hooks, sandbox | YOLO mode, TUI 2.0 | Local LLM parity, extensions | Release velocity, Chinese market | Raw performance, security hardening |
| **Key Weakness** | Windows sandbox gap, model-switch corruption | Rate-limit cost explosion | Subagent reliability | Windows ARM64 stability, doc integrity | Desktop stability regressions | Connection reliability | CI blind spots, UNC path bugs | "Turn stalled" hangs, config bloat |
| **Automation Philosophy** | Opt-in YOLO via profiles | Graduated approval | Sub-agent delegation | Hook-based permissions | `--yolo` flag (just landed) | Configurable auto-compaction | Loop detection always-on | Token budget regulator |
| **Model Provider Strategy** | Single (Anthropic) | Single (OpenAI) | Multi (Gemini + others) | GitHub Copilot (multi) | Multi (via Copilot/Zen) | Multi (OpenRouter, local) | Multi (Qwen + OpenAI) | Multi (OpenRouter, Codex) |

**Notable differentiators:**
- **Qwen Code** is the only tool with **voice dictation** (PR #5502) and **vision bridge** (PR #5126) — multimodal is a clear strategic bet.
- **OpenCode** just landed **YOLO mode** (#33279) as a canonical auto-approval, positioning for power-user automation.
- **DeepSeek/CodeWhale** is the only project doing a **full rebrand** mid-stream, signaling corporate ownership or strategic pivot.
- **OpenAI Codex** is the only tool investing in **Rust-native rewrite** for CLI performance, with 3 alphas today alone.

---

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Assessment |
|---|---|---|
| **Claude Code** | #18435 at 601👍 — highest demand signal across all tools | **Stable but frustrated.** Core features work, but regressions and missing Windows parity erode trust. Community is vocal about unaddressed pain points. |
| **OpenAI Codex** | 10+ PRs/day on code-mode infrastructure; 3 alpha releases | **Rapidly evolving.** Rust rewrite is a major architectural bet. Rate-limit crisis (#28879, 188👍) is a trust-breaking event that will test community loyalty. |
| **Gemini CLI** | 10 PRs/day; active maintainer triage | **Enterprise-focused with friction.** Subagent reliability (#21409, #22323) is the Achilles heel. Strong security posture (SSRF fix in #27744). |
| **Copilot CLI** | Low issue velocity; quick closure of feature requests | **Stable but stagnating.** Low community activity may indicate satisfaction or abandonment. Windows ARM64 crash (#3687) is the critical unfixed issue. |
| **OpenCode** | 10 PRs shipped today including YOLO mode and TUI 2.0 | **High innovation velocity.** However, 3 distinct renderer crashes in a single day suggest stability is sacrificed for feature speed. |
| **Pi** | 10 PRs today; #4945 at 64 comments | **Growing with friction.** Strong extension ecosystem (compaction events, TUI component syncing) but connection reliability is a trust issue. |
| **Qwen Code** | 4 releases, 13 issues closed, 10 PRs — highest velocity | **Most active and responsive.** Bug-fix sprint mode shows discipline. Voice/vision features suggest long-term moat. Chinese market leadership is clear. |
| **DeepSeek/CodeWhale** | 10 PRs; security hardening release-blockers | **Rebranding transition.** Strong Rust codebase but "turn stalled" hang (#2487) is a critical reliability issue. Security hardening suggests production readiness focus. |

---

## 6. Trend Signals

1. **The "Rate-Limit Reckoning" is here.** OpenAI Codex's #28879 (10-20x cost jump) is a watershed moment—developers are now acutely sensitive to opaque consumption changes. Expect all tools to invest in **cost observability** (Copilot's OpenTelemetry request, Pi's real-cost footer) as a competitive differentiator.

2. **Agent trust is the new UX frontier.** Every tool has at least one "agent lies about success" or "agent enters self-driven loop" bug. The industry is moving from "can the agent do the task?" to "can I trust the agent's self-reporting?" — expect **agent trajectory logging**, **deterministic success/failure signals**, and **user confirmation gates** to become table stakes.

3. **Windows is the battleground of 2026.** Six tools have significant Windows-specific bugs (ARM64 crashes, UNC path failures, sandbox gaps, Bitdefender conflicts). The tool that ships **native Windows sandbox** and **stable ARM64 support** first gains a structural advantage in enterprise adoption.

4. **Multi-modal coding is emerging.** Qwen Code's voice dictation (#5502) and vision bridge (#5126) presage a future where coding tools ingest speech, images, and screenshots. This is currently unique to Qwen Code but will likely propagate.

5. **Rust rewrites are accelerating.** OpenAI Codex's Rust alpha track and DeepSeek/CodeWhale's existing Rust codebase suggest that CLI tools are outgrowing Node.js/TypeScript for performance-critical paths. Expect more tools to evaluate Rust for sandboxing, session management, and TUI rendering.

6. **MCP interoperability is a double-edged sword.** While MCP enables rich tool ecosystems, every tool reports schema compatibility issues (`$ref/$defs` failures, root type omissions, OAuth refresh brittleness). The honeymoon for MCP is ending; **standardized schema validation** and **fallback strategies** will be needed.

7. **The "session-as-state-machine" paradigm shift.** Multiple feature requests (Claude Code #68996, Pi #5700, Qwen Code #5540) ask for sessions as first-class, programmatically-managed entities. This signals a shift from "chat replacement" to "agentic OS" — where sessions are spawned, persisted, revived, and composed like processes in an OS.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-06-22 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and attention:

| # | Skill PR | Author | Status | Comments |
|---|----------|--------|--------|----------|
| 1 | **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | PGTBoos | Open | High |
| 2 | **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** | GitHubNewbie0 | Open | High |
| 3 | **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** | justinwetch | Open | High |
| 4 | **[fix(skill-creator): run_eval.py recall=0%](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | Open | High |
| 5 | **[Add skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** | eovidiu | Open | High |
| 6 | **[Add SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | amitlals | Open | High |
| 7 | **[Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** | 4444J99 | Open | High |

**Skill Details:**

**1. document-typography (#514)** — Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Discussion highlights that these typographic issues affect *every* document Claude generates, making this a universal pain point. **Status:** Open, not yet merged.

**2. ODT skill (#486)** — Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Community interest driven by LibreOffice/ISO standard document workflows in enterprise settings. **Status:** Open.

**3. frontend-design improvement (#210)** — Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Goal: every instruction must be executable within a single conversation. **Status:** Open.

**4. skill-creator fix: run_eval.py recall=0% (#1298)** — Critical bug fix for the evaluation pipeline. Every query reports "not triggered" regardless of description content, making the optimization loop train against noise. Multiple independent reproductions confirmed. **Status:** Open, active.

**5. skill-quality-analyzer (#83)** — Meta-skill evaluating other skills across five dimensions: Structure & Documentation (20%), plus security analysis. Community interest in quality governance. **Status:** Open.

**6. SAP-RPT-1-OSS predictor (#181)** — Uses SAP's open source tabular foundation model for predictive analytics on SAP business data. Enterprise-focused, released at SAP TechEd 2025. **Status:** Open.

**7. testing-patterns (#723)** — Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing, integration, and E2E testing. Fills a gap in the collection. **Status:** Open.

---

## 2. Community Demand Trends

From the most-commented Issues, the community's strongest unmet demands are:

| Trend | Key Issue | Signal |
|-------|-----------|--------|
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) — "Enable org-wide skill sharing in Claude.ai" (14 comments, 7 👍) | Users want direct sharing without manual .skill file transfer |
| **Eval pipeline reliability** | [#556](https://github.com/anthropics/skills/issues/556) — "run_eval.py: 0% trigger rate" (12 comments, 7 👍) | The skill evaluation loop is fundamentally broken for many users |
| **Deduplication of skill plugins** | [#189](https://github.com/anthropics/skills/issues/189) — "document-skills and example-skills install identical content" (6 comments, 9 👍) | Plugin installation creates duplicate skills, wasting context window |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — "Community skills under anthropic/ namespace enables trust abuse" (9 comments) | Users concerned about impersonation of official Anthropic skills |
| **Windows compatibility** | [#1061](https://github.com/anthropics/skills/issues/1061) — "Windows: subprocess PATHEXT, cp1252 encoding, select on pipes" (3 comments) | Cross-platform tooling is a recurring pain point |
| **Skills disappearing** | [#62](https://github.com/anthropics/skills/issues/62) — "All my skills have disappeared" (10 comments) | Persistence bugs undermine user confidence |

**Most-anticipated new skill directions** (from proposals):
- **Agent governance / safety patterns** — [#412](https://github.com/anthropics/skills/issues/412): "Agent governance — safety patterns for AI agent systems"
- **Compact memory systems** — [#1329](https://github.com/anthropics/skills/issues/1329): "Symbolic notation for compact agent state"
- **MCP exposure** — [#16](https://github.com/anthropics/skills/issues/16): "Expose Skills as MCPs" — universal API signal

---

## 3. High-Potential Pending Skills

These actively-discussed PRs are **not yet merged** but show strong community traction:

- **[document-typography (#514)](https://github.com/anthropics/skills/pull/514)** — Widely applicable typographic quality control. **Likely to merge:** High (universal pain point, clean scope).
- **[ODT skill (#486)](https://github.com/anthropics/skills/pull/486)** — OpenDocument format support. **Likely to merge:** High (enterprise demand, ISO standard).
- **[testing-patterns (#723)](https://github.com/anthropics/skills/pull/723)** — Full-stack testing guidance. **Likely to merge:** Moderate-High (fills clear gap, well-scoped).
- **[aurelion skill suite (#444)](https://github.com/anthropics/skills/pull/444)** — 4-skill cognitive framework suite. **Likely to merge:** Moderate (broad scope, may need splitting).
- **[skill-creator fixes (#1298, #1099, #1050)](https://github.com/anthropics/skills/pull/1298)** — Multiple Windows + eval pipeline fixes. **Likely to merge:** Very High (infrastructure blocking other work).
- **[ServiceNow platform skill (#568)](https://github.com/anthropics/skills/pull/568)** — Enterprise ITSM/ITOM coverage. **Likely to merge:** Moderate (narrow enterprise niche).
- **[shodh-memory (#154)](https://github.com/anthropics/skills/pull/154)** — Persistent context across conversations. **Likely to merge:** Moderate (competing proposals for memory, e.g. #1329).

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *document quality and format interoperability* skills** — typographic control, ODT/OpenDocument support, and fixing evaluation tooling — reflecting a broader need for Claude to produce production-ready, enterprise-grade documents reliably, rather than creative or code-generation content.

---

Here is the **Claude Code Community Digest** for **2026-06-22**.

---

## 1. Today's Highlights

This week’s digest is dominated by **cross-platform stability and sandboxing friction**. While no new release landed in the last 24 hours, the community is actively rallying around two major themes: persistent **model-switching bugs** on macOS that silently corrupt sessions mid-conversation, and the long-standing lack of a **native Windows sandbox**. The most popular open issue by far (118 comments, 601 👍) is a request for multi-account profile management in Claude Desktop — a sign that power users need better workspace isolation across teams and billing accounts.

## 2. Releases

**No new releases** were detected in the last 24 hours.

## 3. Hot Issues (10 Notable)

| # | Issue | Why it matters | Community |
|---|-------|----------------|-----------|
| **#18435** | [FEATURE] Multi-account switching in Claude Desktop | The #1 most-voted request. Users managing multiple Anthropic accounts (personal, team, enterprise) need frictionless profile switching without logout/login loops. | 118 comments, 601 👍 |
| **#69772** | [BUG] Model silently switches from 1M to non-1M Opus mid-session | A **critical integrity bug**. The model changes silently mid-chat, triggering unrecoverable API errors. Users must kill the entire session — `--resume` does not recover. High-impact for long-running agentic workflows. | 5 comments, 2 👍 |
| **#37994** | [BUG] Desktop update breaks SSH/LAN access | A regression on macOS where `OPERON_SANDBOXED_NETWORK=1` blocks all local network traffic (SSH, SCP, curl to LAN). Breaks developer workflows that depend on local infrastructure. | 11 comments, 4 👍 |
| **#52765** | [BUG] "Server is busy" error on Windows Cowork | Windows users of Cowork mode face persistent "Server is busy" errors with no actionable recovery path. Impacts real-time collaboration features. | 14 comments, 2 👍 |
| **#68996** | [FEATURE] Session-as-process primitive | Advanced users want a first-class API to spawn isolated sessions as subprocesses — programmatic stdin/stdout communication and PID-based lifecycle from within a running session. | 3 comments |
| **#69793** | [BUG] `xargs rm -rf` without null delimiter causes data loss | A model-driven bash execution bug: Claude invoked `xargs rm -rf` without `-print0`/`-0`, causing data loss on paths with spaces. **Data-loss severity.** | 2 comments |
| **#54461** | [BUG] Windows Desktop: cannot change working directory | A basic workflow blocker on Windows: users can't change the primary working directory or open a new chat from the Desktop app. | 8 comments, 4 👍 |
| **#69939** | [BUG] Opening a chat re-appends duplicate JSONL records | Every chat open duplicates bookkeeping records to the transcript JSONL, bumping `mtime` and reordering chats in the Recent list. Annoying for power users who rely on session ordering. | 2 comments |
| **#69035** | [BUG] HTTP MCP connector fails with Atlassian auth | MCP connectors via HTTP (`/v1/mcp/authv2`) fail with "Invalid context provided" while SSE works with the same account. Breaks integrations for Atlassian ecosystem tools. | 2 comments, 2 👍 |
| **#61912** | [BUG] OAuth refresh corrupts credentials on 5xx | Transient upstream Cloudflare 5xx errors during OAuth refresh lead to corrupted credential state and a persistent 401 loop across sessions — no recovery without manual re-authentication. | 5 comments |

## 4. Key PR Progress (2 Total)

| PR | Description |
|----|-------------|
| **#69916** | [FIX] `edit-issue-labels.sh` silent exit fix — prevents the issue triage workflow from failing without error output when no labels are provided. Small but correctness-critical for CI. |
| **#4943** | [FEATURE] Shell completions for bash, zsh, fish — a long-standing PR (since Aug 2025) adding static completion scripts. Low adoption barrier, high UX win for CLI users. |

## 5. Feature Request Trends

The community is signaling clear priorities for the product roadmap:

- **Multi-account & Profile Management** (#18435, 601 👍): The overwhelming top request. Users want seamless switching between personal and team accounts in the Desktop app without logging out.
- **Programmatic Session Control** (#68996): Tech-savvy users want to treat Claude sessions as managed subprocesses — spawn, communicate, and kill sessions from code.
- **Session-as-a-State Machine** (#61533, #69939): Several requests for better session lifecycle management — viewed/unviewed states, deduplication of transcript records, and clean session ordering.
- **Customizable TUI** (#57895): Users want to disable or customize thinking phase status labels in the terminal UI for cleaner output.
- **Windows Native Sandbox** (#46740, 9 👍): A recurring security ask — the `/sandbox` feature (Seatbelt/bubblewrap) has no Windows equivalent, leaving Windows users without the primary sandboxing control.

## 6. Developer Pain Points

| Pain Point | Frequency | Summary |
|------------|-----------|---------|
| **Model Switching Corruption** | High | Mid-session model switches (#69772) and memory disregard (#61549) cause loss of work and unrecoverable errors. |
| **Windows Sandbox Gap** | High | No native sandbox for Windows (#46740). Users forced to run WSL or skip sandbox entirely. |
| **Auth & Credential Corruption** | Medium | OAuth refresh handles transient 5xx poorly (#61912). MCP auth contexts break with certain providers (#69035). |
| **Desktop App Regressions** | Medium | Recent updates break SSH access (#37994), directory management (#54461), and Cowork services (#48661, #52765). |
| **Data Loss Risks** | High | Model-driven bash commands without proper escaping cause real data loss (#69793). Stale lock files kill Auto Dream permanently (#50694). |
| **PTY/Resource Leaks** | Medium | macOS desktop leaks PTY master fds, exhausting system limits (#61391). Scheduled tasks don't trigger autoCompact (#50920). |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — June 22, 2026

## Today's Highlights

Three alpha releases of the Rust CLI (`v0.142.0-alpha.8` through `v0.142.0-alpha.10`) were published in quick succession, signaling active iteration on the Rust-based Codex CLI front. A **critical rate-limit bug** (#28879) has the community in an uproar: Codex Plus users report their entire 5-hour budget draining in just 2–3 prompts since June 16, with 188 upvotes and 96 comments. Meanwhile, the engineering team is heavily investing in **code-mode infrastructure**, with 10+ PRs today refining cell creation, session ownership, and terminal state linearization.

---

## Releases

Three new Rust CLI alpha releases were published in the last 24 hours:
- [rust-v0.142.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.8)
- [rust-v0.142.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.9)
- [rust-v0.142.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10)

No changelog details were provided beyond version bumps. The rapid release cadence (three alphas in one day) suggests urgent fixes or experimental features being iterated on the Rust CLI track.

---

## Hot Issues

1. **[#28879 — Rate-limit cost per token jumped ~10-20x](https://github.com/openai/codex/issues/28879)**
   **Why it matters:** The top-voted issue (188 👍). Plus plan users' 5-hour budget drains in 2–3 prompts on `gpt-5.5` where previously they got 20+. Community is demanding an urgent fix or explanation; 96 comments suggest widespread panic and confusion.

2. **[#13993 — Standalone Windows installer (`codex-setup.exe`)](https://github.com/openai/codex/issues/13993)**
   **Why it matters:** 153 👍, 74 comments. Windows users with corporate policies, offline environments, or no Store access are blocked from installing the app. A long-running request (since March) that remains unresolved.

3. **[#2998 — IDE-integrated diff/approval](https://github.com/openai/codex/issues/2998)**
   **Why it matters:** 197 👍 — the most-voted feature request. Users want the CLI's red/green diff approval flow directly inside their IDE (VS Code, JetBrains). Terminal-only diffs are disruptive for workflow continuity.

4. **[#2153 — ChatGPT integration](https://github.com/openai/codex/issues/2153)**
   **Why it matters:** 149 👍. Developers want seamless handoff between Codex CLI sessions and ChatGPT's web UI for brainstorming, web search, and research, then bringing results back into CLI.

5. **[#28224 — SQLite feedback logs writing ~640 TB/year](https://github.com/openai/codex/issues/28224)**
   **Why it matters:** 29 👍. A terrifying storage bug: Codex's local logging can write 640 TB/year, rapidly consuming SSD endurance. A silent disk-killer for developers with limited SSD lifespan.

6. **[#21128 — Desktop silently hides conversations outside recent-50](https://github.com/openai/codex/issues/21128)**
   **Why it matters:** 17 👍. Project conversations vanish from the UI once they fall outside the global recent-50 window, making the Desktop app unreliable as a project working memory.

7. **[#28971 — Bitdefender blocks Codex PowerShell commands](https://github.com/openai/codex/issues/28971)**
   **Why it matters:** AV conflicts are a recurring Windows pain. Codex repeatedly tries PowerShell commands that get flagged/blocked, breaking workflow execution on secured corporate machines.

8. **[#28881 — Image generation files no longer saved](https://github.com/openai/codex/issues/28881)**
   **Why it matters:** 11 👍. Regression: `generated_images/` directory no longer populated. Users relying on Codex for visual assets lose their outputs without warning.

9. **[#29047 — SIGTRAP crash on Intel macOS in V8 isolate](https://github.com/openai/codex/issues/29047)**
   **Why it matters:** A `0.141.0` regression crashes the entire tool on Intel Macs. Downgrading to `0.140.0` works. Affects users on older Mac hardware still common in enterprise.

10. **[#29361 — Desktop crashes on resume due to `thread_tools` feature](https://github.com/openai/codex/issues/29361)**
    **Why it matters:** macOS Desktop becomes unusable when resuming threads — app-server crashes with SIGKILL. The Desktop sends an unsupported feature flag (`thread_tools`) to the bundled CLI, causing forced termination.

---

## Key PR Progress

1. **[#29371 — Propagate safety buffering events to app-server clients](https://github.com/openai/codex/pull/29371)**
   **What it does:** Decodes and deduplicates `safety_buffering` metadata from Responses API events so Desktop clients can render in-progress safety review state. Critical UX fix for users who see blank safety delays.

2. **[#29290 — code-mode: decouple cell creation from observation](https://github.com/openai/codex/pull/29290)**
   **What it does:** Allows `SessionRuntime` to create cells without attaching an observer immediately, preventing pending session-store writes from becoming visible after cancellation. Foundational for reliable code execution sessions.

3. **[#29291 — code-mode: expose create and observe operations](https://github.com/openai/codex/pull/29291)**
   **What it does:** Separates cell creation acknowledgment from observation, surfacing lost connections without requiring durable cell storage across process failures. Next step in clean session protocol.

4. **[#29292 — code-mode: expose transport-neutral session runtime](https://github.com/openai/codex/pull/29292)**
   **What it does:** Exposes the runtime outside in-process protocol service for future transport stages, with field-level contract testing against silent drift. Enables WebSocket/gRPC session hosts.

5. **[#29310 — code-mode: clean up terminal cell dispatch gates](https://github.com/openai/codex/pull/29310)**
   **What it does:** Ensures prompt cleanup of dispatch state when cells complete in background — prevents resource leaks from unobserved completions. Best-effort garbage collection for session infrastructure.

6. **[#29357 — speed up thread resume without deferred repair](https://github.com/openai/codex/pull/29357)**
   **What it does:** Local `thread/resume` now parses rollout files on a blocking worker, reuses loaded history, and avoids duplicate clones/reads. Direct fix for slow thread resumption.

7. **[#29355 — speed up thread list with lightweight SQLite rows](https://github.com/openai/codex/pull/29355)**
   **What it does:** Routes `thread/list` through lightweight SQLite projection instead of materializing full threads. Batching filesystem scan repair. Direct response to community complaints about sluggish thread management.

8. **[#29358 — Allow codex sandbox to consume MCP sandbox state](https://github.com/openai/codex/pull/29358)**
   **What it does:** Lets `codex sandbox` accept JSON from `codex/sandbox-state-meta`, enabling MCP servers like `node_repl` to forward sandbox state without understanding it. Key for MCP tool interoperability.

9. **[#29301 — Updated plan mode prompt](https://github.com/openai/codex/pull/29301)**
   **What it does:** Updates plan mode prompt to render implementation plans on follow-ups, letting users exit plan mode naturally rather than manually switching. UX polish for the planning workflow.

10. **[#29109 — Avoid redundant rollout reads for history](https://github.com/openai/codex/pull/29109)**
    **What it does:** `thread/read`, resume, and fork no longer parse the same rollout file twice. When SQLite already provides the rollout path, `LocalThreadStore` skips the redundant summary build. Performance optimization for large projects.

---

## Feature Request Trends

1. **Windows-native distribution** — The most persistent request (#13993, 153👍). Users want a standalone `.exe` installer outside the Microsoft Store, driven by corporate policy, offline environments, and admin restrictions.

2. **IDE integration depth** — The top-voted feature (#2998, 197👍) demands diff/approval workflows inside VS Code and JetBrains. Users want CLI-quality approval flow without leaving the editor.

3. **ChatGPT↔Codex interoperability** (#2153, 149👍) — Users want seamless session handoff between Codex CLI and ChatGPT web UI, enabling mixed research/execution workflows.

4. **Storage and session management** — Multiple requests (#21128, #24534) ask for custom storage paths, no hidden conversation truncation, and project-level session persistence. Developers treating Codex as a project memory store want reliability.

5. **UI/UX friction reduction** — #22168 (hover-triggered sidebar), #28551 (interruption while typing) reflect demands for less intrusive UI that doesn't fight user input.

---

## Developer Pain Points

1. **Rate-limit cost explosions** — #28879's 10-20x cost jump is the single most alarming issue. Silent, unannounced consumption changes break trust and make the Plus plan effectively unusable for code work.

2. **Windows ecosystem fragility** — Six+ open Windows-specific bugs: Bitdefender conflicts (#28971), WSL agent failures (#16815), `\\?\` namespace path issues (#13845), visible PowerShell windows (#26613), excessive SQLite I/O causing system stalls (#29177), and proxy env regressions (#29178). Windows remains the most problematic platform.

3. **Context window exhaustion** — Two issues (#9046, #28920) report "ran out of room" errors even on fresh threads with single prompts. The context management system appears broken for some users, leaving threads in unrecoverable states.

4. **Silent data loss** — #21128 (hidden conversations), #28881 (image outputs not saved), and the SQLite logging tsunami (#28224, 640TB/year) represent three different flavors of data loss or data corruption. Trust in persistent storage is eroding.

5. **SSD endurance threat** — #28224's SQLite logging issue is a literal hardware killer. Continuous 640 TB/year writes to a SQLite database will destroy consumer SSDs in months, yet the issue has only 29 upvotes — suggesting most users haven't checked their log sizes yet.

6. **Cross-platform regressions** — The V8 SIGTRAP on Intel Macs (#29047) and the `thread_tools` crash on macOS (#29361) show that code paths for different architectures and platforms aren't getting adequate pre-release testing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-22

## Today's Highlights
No new releases landed in the past 24 hours, but the bug backlog continues to see active maintainer attention with several high-severity agent issues receiving updated triage labels. The community remains focused on sub-agent reliability, particularly around hang-on-deferral and false-success termination bugs, while the Auto Memory and MCP integration pipelines are drawing growing scrutiny from the engineering team.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[[#24353] Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — P1 EPIC tracking 76 behavioral eval tests across 6 Gemini variants. Community interest is high as this underpins the entire agent quality pipeline.

2. **[[#22745] Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — P2 investigation into whether AST-aware tools (tilth/glyph) can reduce token waste and misaligned reads. One of the most-watched architectural explorations.

3. **[[#22323] Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1 bug where the `codebase_investigator` subagent lies about its termination reason. Highly upvoted (2👍), this undermines trust in agent logging.

4. **[[#21409] Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** — The most upvoted open issue (8👍). Users report the CLI hangs indefinitely when deferring to the generalist agent. Workaround: explicitly disable sub-agent delegation.

5. **[[#21968] Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — Anecdotal but frequently echoed: custom skills are ignored unless explicitly invoked. Reduces the value proposition of skill authoring.

6. **[[#26525] Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — P2 security concern: secrets are sent to the extraction model before redaction logic runs. Community flagged this as a privacy risk.

7. **[[#25166] Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** — P1 core bug causing CLI hangs after simple commands complete. 3👍 indicates broad reproducibility across environments.

8. **[[#21983] Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — P1 UX blocker for Linux users on Wayland. The agent reports success despite failing to launch.

9. **[[#22672] Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — P2 customer-facing issue: model uses `git reset --force` and other destructive commands when safer alternatives exist. Community requesting safer defaults.

10. **[[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — P2 bug causing infinite retry loops for sessions the extraction agent judges as low-signal. Wasteful of API quota.

## Key PR Progress

1. **[#28063 — fix: resolve workspace publish failures and scheduler event loop starvation](https://github.com/google-gemini/gemini-cli/pull/28063)** — Merged. Adds `--ignore-scripts` to NPM publish and moves token refresh out of `setInterval` to prevent event loop starvation during publishing.

2. **[#28059 — fix(cli): don't let an unreadable .env break extension loading](https://github.com/google-gemini/gemini-cli/pull/28059)** — Open. Fixes #27894 by handling EACCES on `.env` files and hardening Cloud Shell path resolution.

3. **[#28071 — fix(core): perform spawn check on ripgrep before registration](https://github.com/google-gemini/gemini-cli/pull/28071)** — Merged. Closes #22784, ensures ripgrep is actually executable before registering as a tool.

4. **[#28069 — fix(core): strip trailing periods from error URLs](https://github.com/google-gemini/gemini-cli/pull/28069)** — Merged. Closes #28052, a small but impactful UX fix for clickable error links.

5. **[#28070 — fix(vscode-ide-companion): restore terminal focus when closing diff](https://github.com/google-gemini/gemini-cli/pull/28070)** — Merged. Closes #22193, fixing focus-steal in VS Code diff views.

6. **[#27744 — fix(web-fetch): resolve DNS before SSRF guard](https://github.com/google-gemini/gemini-cli/pull/27744)** — Open. Critical security fix: resolves hostnames to IPs before checking private ranges, closing wildcard-DNS SSRF bypasses.

7. **[#28068 — fix(core): guard message inspectors against empty parts arrays](https://github.com/google-gemini/gemini-cli/pull/28068)** — Open. P2 fix for vacuous truth bug where `[].every(...)` misclassifies empty model messages as function calls.

8. **[#27878 — fix(core): sniff MCP image MIME types](https://github.com/google-gemini/gemini-cli/pull/27878)** — Open. P1 fix for Figma MCP images being mislabeled as PNG, causing 400s from Gemini API.

9. **[#27889 — fix(core): refresh MCP OAuth with stored client ID](https://github.com/google-gemini/gemini-cli/pull/27889)** — Open. P1 fix for OAuth refresh failures on auto-discovered MCP servers that lack static client IDs.

10. **[#27888 — fix(core): normalize MCP tool schemas to root type object](https://github.com/google-gemini/gemini-cli/pull/27888)** — Open. P2 fix for MCP servers that omit root `type: "object"`, which breaks Vertex AI strict mode validation.

## Feature Request Trends

- **AST-aware code reading**: Multiple issues (#22745, #22746) propose replacing naive line-based file reads with AST-aware tools to reduce tokens and improve code understanding accuracy.
- **MCP interactivity support**: Users want MCP servers to support interactive elicitation flows (#22249), not just stateless tool calls.
- **Subagent self-awareness**: Several requests (#21432, #22598) ask the agent to accurately describe its own CLI flags, hotkeys, and expose subagent trajectories in shareable chat logs.
- **Browser agent resilience**: Requests for automatic session takeover (#22232) and locking recovery for persistent browser profiles.
- **Safety overrides**: A `decision: ask` hook decision (#15732) is proposed to force user confirmation even in YOLO mode for sensitive operations.

## Developer Pain Points

- **Subagent reliability is the #1 pain point**: Agents either hang (#21409), lie about success (#22323), or ignore user configurations (#22093, #22267). Trust in automated agent delegation is eroding.
- **Shell execution fragility**: Commands hang with "Waiting input" after completion (#25166), Vite app creation gets stuck (#22465), and SSH sessions exit unexpectedly (#25828). The shell tool is a frequent failure point.
- **Auto Memory is wasteful**: Low-signal sessions are retried indefinitely (#26522), invalid patches clutter the inbox (#26523), and secrets are exposed before redaction (#26525). Users question its cost-benefit ratio.
- **Configuration ignored inconsistently**: Settings in `settings.json` are sometimes bypassed by the browser agent (#22267) and sub-agent enablement flags are ignored after updates (#22093).
- **Tool discovery limits**: The CLI errors out when >128 tools are available (#24246), forcing users to manually curate their toolset.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-22

## Today's Highlights
The Copilot CLI community is grappling with two critical themes: Windows ARM64 stability under load (Issue #3687) and misaligned documentation versus actual sandbox/permission behavior (Issue #3861). A long-running feature request for project-scoped plugins (Issue #1665) was closed after four months of discussion, signaling a likely architectural decision. Meanwhile, several UX issues around terminal rendering and status indicators suggest the CLI is maturing quickly but still has rough edges.

## Releases
**No new releases in the last 24 hours.** The last tagged release remains v1.0.60.

## Hot Issues

1. **#3687 – `copilot.exe` fatal-aborts under load on Windows ARM64**  
   *Author: JW-Sthlm | Updated: 2026-06-21 | 👍: 1*  
   A hard crash (BEX64 / 0xc0000409) occurs when multiple sessions start simultaneously under memory pressure. Reproducible across two versions. This is a **priority stability issue** for Windows ARM64 users, particularly those restoring terminal tabs.  
   [Link](github/copilot-cli Issue #3687)

2. **#1665 (CLOSED) – Support Copilot CLI Plugins Scoped to Project or Repository**  
   *Author: willmarkley | Updated: 2026-06-21 | 👍: 17*  
   After 4 months and 8 comments, this was closed without a resolution visible in the issue. The high 👍 count indicates strong demand for per-project plugin isolation. Closing may imply the solution is being handled elsewhere (e.g., workspace-level config).  
   [Link](github/copilot-cli Issue #1665)

3. **#3871 (CLOSED) – No way to list installed hooks**  
   *Author: ken-jo | Updated: 2026-06-21 | 👍: 0*  
   While MCP servers have `copilot mcp list`, hooks have zero discoverability. Closed quickly — likely as a bug accepted for fix.  
   [Link](github/copilot-cli Issue #3871)

4. **#3861 – Docs present local sandbox capabilities that do not work**  
   *Author: torumakabe | Updated: 2026-06-21 | 👍: 0*  
   `allowedHosts`/`blockedHosts` filtering and cross-platform isolation claims are inconsistent with actual behavior. This is a **documentation-integrity** issue that undermines user trust in security features.  
   [Link](github/copilot-cli Issue #3861)

5. **#3867 (CLOSED) – No context window visibility or compaction notification**  
   *Author: sonydogg | Updated: 2026-06-21 | 👍: 0*  
   Users cannot see token usage or know when compaction happens. Closed quickly — likely accepted as a feature gap.  
   [Link](github/copilot-cli Issue #3867)

6. **#3874 – VS Code agent `preToolUse` hook denial does not work**  
   *Author: springcomp | Updated: 2026-06-21 | 👍: 0*  
   Hooks configured to deny specific commands in VS Code are being silently ignored. This breaks the security model for agent hooks.  
   [Link](github/copilot-cli Issue #3874)

7. **#3778 – Feature Request: Emit cost metric via OpenTelemetry**  
   *Author: kewinremy | Updated: 2026-06-21 | 👍: 0*  
   Parity request with Claude Code's cost tracking. Currently only token usage and duration metrics are available.  
   [Link](github/copilot-cli Issue #3778)

8. **#3876 (CLOSED) – Mouse tracking incorrectly disabled on exit**  
   *Author: jakebailey | Updated: 2026-06-21 | 👍: 0*  
   Terminal loses mouse scroll capability after CLI exits. The user self-diagnosed via Copilot. Quick close suggests a prompt fix.  
   [Link](github/copilot-cli Issue #3876)

9. **#3879 – Status line conflates "generating" with "idle + background work"**  
   *Author: mlhickey | Updated: 2026-06-21 | 👍: 0*  
   Users can't tell when it's safe to type because the status line shows "Working" during background tasks even when the parent agent is idle. A **UX clarity** issue.  
   [Link](github/copilot-cli Issue #3879)

## Key PR Progress

1. **#3880 (OPEN) – "beyond the streets of america"**  
   *Author: 4tha5 | Updated: 2026-06-21*  
   Appears to be a test/spam PR containing React component code unrelated to Copilot CLI. Likely to be closed.  
   [Link](github/copilot-cli PR #3880)

*(Only 1 PR was active in the last 24 hours, and it appears to be non-functional.)*

## Feature Request Trends
- **Cost/Billing Observability**: Issue #3778 requests OpenTelemetry cost metrics, mirroring Claude Code's approach. Users want to track spending alongside usage.
- **Plugin Scoping**: Issue #1665 (closed) highlights a strong desire for project/repository-level plugin configuration instead of global, per-user setup.
- **Context Window Visibility**: Issue #3867 (closed) underscores demand for token usage indicators and compaction notifications during chat sessions.

## Developer Pain Points
- **Windows ARM64 Stability**: Issue #3687 — reproducible fatal crashes under load are the most critical reliability issue for Windows users.
- **Documentation vs. Reality**: Issue #3861 — users discover that documented sandbox features (host filtering, cross-platform isolation) don't work as advertised, eroding trust.
- **Agent Hook Reliability**: Issue #3874 — hook denial of tool use is silently ignored in VS Code, a significant security concern.
- **Terminal UX Degradation**: Issues #3876 and #3879 — mouse tracking loss on exit and ambiguous status indicators create friction in everyday CLI use.
- **Feature Discoverability**: Issue #3871 — hooks lack listing commands available for MCP servers, making the plugin ecosystem opaque.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-22

## Today's Highlights
A significant **TUI 2.0** PR and a **YOLO permission mode** implementation both landed today, signaling a push toward power-user workflows and a revamped interface. Meanwhile, the community is raising multiple concerns about **Opus 4.7/4.8 model availability** via Copilot and OpenCode Zen, and a flurry of **renderer crashes** in the desktop app suggests stability regressions in recent builds.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#30192] OpenCode Zen "no provider available" for Claude Opus 4.6** — Affecting a paid subscriber who reports all non-Opus models work fine. Suggests a credential scoping or routing bug in the Zen proxy. [View Issue](https://github.com/anomalyco/opencode/issues/30192)

2. **[#31041] Zen API CORS preflight returns 404** — Blocks all browser-based clients from using Zen endpoints. Community impact is wide; likely blocking web UIs and custom integrations. [View Issue](https://github.com/anomalyco/opencode/issues/31041)

3. **[#31247] Copilot Claude Opus 4.8 emits pseudo tool-call text** — Instead of structured tool calls, the model dumps raw text mimicking tool calls, breaking the conversation state. A related follow-up (#31807) shows the corrupted session then gets rejected for "assistant prefill." [View Issue](https://github.com/anomalyco/opencode/issues/31247)

4. **[#33229] OpenCode Zen lists Opus 4.7/4.8 but cannot run them** — Models appear in `opencode models` but fail at runtime. Redundant with #30192 but confirmed on newer model versions. [View Issue](https://github.com/anomalyco/opencode/issues/33229)

5. **[#32706] TUI crash — "An error occurred in Effect.tryPromise"** — Affects all versions ≥1.17.0. Pure mode and logging don't help. 2 upvotes suggest broader impact among Windows users. [View Issue](https://github.com/anomalyco/opencode/issues/32706)

6. **[#33285] Renderer crash — VirtualTimelineRow reads 'size' on undefined** — A fresh bug filed today with a companion PR already submitted. High priority for desktop app stability. [View Issue](https://github.com/anomalyco/opencode/issues/33285)

7. **[#33283] Map constructor crash — undefined iterator entries** — Another renderer crash today. User traced the root cause to arrays with holes being passed to `new Map()`. [View Issue](https://github.com/anomalyco/opencode/issues/33283)

8. **[#32002] macOS kernel panic via EndpointSecurity memory leak** — A severe OS-level crash caused by `opencode.exe` exhausting the kernel zone map. 2 comments but extremely high severity. [View Issue](https://github.com/anomalyco/opencode/issues/32002)

9. **[#32829] DeepSeek + $ref/$defs in MCP tool schemas causes AttributeError** — MCP servers from Asana and Notion are broken under DeepSeek because OpenCode doesn't resolve JSON Schema references. Affects enterprise users. [View Issue](https://github.com/anomalyco/opencode/issues/32829)

10. **[#32726] Hebrew/Arabic RTL text renders left-to-right** — Accessibility issue in the desktop app affecting a growing Arabic/Farsi user base. Related to earlier RTL support work (#10908) that appears incomplete. [View Issue](https://github.com/anomalyco/opencode/issues/32726)

## Key PR Progress

1. **[#33279] feat(tui): add yolo permission mode** (by thdxr) — Adds `--yolo` flag as the canonical auto-approval for `opencode run` and the TUI command. Preserves `--dangerously-skip-permissions` as alias. Automates permission mode as `"auto" | "normal"`. Closes #11831. [View PR](https://github.com/anomalyco/opencode/pull/33279)

2. **[#33281] feat(cli): add standalone v2 session flow** (by thdxr) — Large PR enabling `--standalone` mode with private server child process, v2 API session creation, and `DataProvider` integration. Lays groundwork for TUI 2.0. [View PR](https://github.com/anomalyco/opencode/pull/33281)

3. **[#33287] fix: guard VirtualTimelineRow against undefined initialItem/row** (by SisyphusZheng) — Closes #33285. Prevents renderer crash with null-guard on virtual row items. Quick turnaround between bug report and fix. [View PR](https://github.com/anomalyco/opencode/pull/33287)

4. **[#33246] feat(core): make system prompt immutable after session creation** (by 0byte-coding) — Caches system prompt per session ID, preventing unnecessary regeneration. Closes #29672. [View PR](https://github.com/anomalyco/opencode/pull/33246)

5. **[#33284] fix(ui): restore markdown heading hierarchy in Desktop/web chat** (by akinshaywai) — Fixes all headings being rendered at 14px. Closes #16046. [View PR](https://github.com/anomalyco/opencode/pull/33284)

6. **[#33150] fix: throw an error on invalid enum params** (by khimaros) — Validates enum-type parameters in tool calls at runtime, giving clear errors to the LLM instead of silent failures. Closes #33149. [View PR](https://github.com/anomalyco/opencode/pull/33150)

7. **[#33270] refactor(core): simplify runner transitions** (by kitlangton) — Replaces recursive retry functions with an iterative transition loop. Represents overflow-recovery as typed state to prevent exhausted recovery bugs. [View PR](https://github.com/anomalyco/opencode/pull/33270)

8. **[#32998] fix(session): cap OpenAI Responses tool count** (by sjawhar) — Prevents 500 errors when many MCP servers are active by limiting tool definitions sent in a single request. Closes #33006. [View PR](https://github.com/anomalyco/opencode/pull/32998)

9. **[#29355] feat(mcp): add resource subscription API with autoprompt** (by sjawhar) — Delivers the MCP resource subscription slice. Rebased re-submission enabling reactive resource watching. [View PR](https://github.com/anomalyco/opencode/pull/29355)

10. **[#33288] docs: add functional programming guidance** (by vaprdev) — Adds FP preferences to root `AGENTS.md` for consistency in contributor PRs. [View PR](https://github.com/anomalyco/opencode/pull/33288)

## Feature Request Trends

- **Session Management & Persistence** — Multiple requests for session renaming (#32375), configurable save locations (#14292), and better checkpoint/undo systems (#33286). Users want more control over their conversation data.
- **Power-User Automation** — YOLO mode (#11831, now landed) and built-in compiled skills (#26342) reflect demand for cutting friction in repetitive workflows. The YOLO PR's quick closure suggests team alignment.
- **Internationalization & Accessibility** — After the broad i18n work in #10908, ongoing requests for Persian (#32810) and RTL rendering fixes (#32726) show the feature is incomplete in practice.
- **Model Provider Transparency** — Multiple issues about model version availability (#30192, #33229) and tool-call format compliance (#31247) indicate users want clearer error messages and fallback strategies when new models behave unexpectedly.

## Developer Pain Points

- **Model Provider Fragility** — The highest-frequency theme: Opus 4.6/4.7/4.8 availability via Zen and Copilot is unreliable, with "no provider," "pseudo tool-calls," and stale auth tokens (#31236) causing session corruption. Power users are getting stuck mid-workflow.
- **Desktop App Stability Regressions** — Three distinct renderer crashes today alone (#33285, #33283, #33278) across version 1.17.x. The `Effect.tryPromise` crash (#32706) has been open for days with no confirmed fix. Users on Windows and macOS are both affected.
- **Payment/Billing Friction** — Two issues (#33264, #33252) about credit card declines for the $5 Go plan, plus a refund request (#31956). Suggests the payment gateway or error messaging needs improvement for European users.
- **MCP Ecosystem Compatibility** — DeepSeek + `$ref/$defs` schemas (#32829) and OpenAI Responses tool count limits (#32998, via PR) show that MCP integration is still rough at scale. Users with multiple MCP servers are hitting provider-specific limits and schema parsing issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-22

## Today's Highlights

After more than a month of simmering, the **openai-codex connection reliability bug** (#4945, 64 comments) remains the most active unresolved issue, causing the TUI to hang on "Working..." without visible errors. The community also saw a **surge of ~30 closed issues in a single day**, many marked `no-action` or `bug`, alongside critical fixes for **context overflow detection in vLLM** and **OpenRouter cost accuracy**. No new release was published in the last 24h.

---

## Releases

None in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

1. **[#4945] openai-codex Connection Reliability Issues**  
   TUI stuck on "Working..." with no streaming output or error; recovery requires pressing Escape. 30 👍 indicate widespread impact.  
   [GitHub](https://github.com/earendil-works/pi/issues/4945)

2. **[#5825] Streaming markdown forces scroll to bottom**  
   When `clear on shrink` is enabled, aggressive re-renders scroll the user away from content they're reading. 28 comments; community clearly frustrated by TUI UX regressions.  
   [GitHub](https://github.com/earendil-works/pi/issues/5825)

3. **[#3357] Official local LLM provider extension**  
   Wants dynamic model list fetching from `{baseUrl}/models` for llama.cpp/ollama/LM Studio. 36 👍 — highly requested for local-first workflows.  
   [GitHub](https://github.com/earendil-works/pi/issues/3357)

4. **[#5916] Support provider extensions with model aliases and improve search**  
   OpenRouter `models.json` overrides lack UI; `modelOverrides` config is fragile. 10 comments, trending as usage grows.  
   [GitHub](https://github.com/earendil-works/pi/issues/5916)

5. **[#5571] pi -p hangs when stdin is a non-TTY pipe that never closes**  
   Fresh install with no provider credentials hangs indefinitely instead of failing fast. Closed but the use case (CI/automation) is critical.  
   [GitHub](https://github.com/earendil-works/pi/issues/5571)

6. **[#5700] Support multiple live agent sessions with TUI switching**  
   Wants concurrent sessions without tearing down the current one. 7 comments; power users want multi-tasking in the TUI.  
   [GitHub](https://github.com/earendil-works/pi/issues/5700)

7. **[#5932] Expose ctx.navigateTree() to agents on ExtensionContext**  
   Custom `/goal` implementations need tree navigation. 3 comments, but represents a clear plugin API gap.  
   [GitHub](https://github.com/earendil-works/pi/issues/5932)

8. **[#5217] Extension events lack compaction reason**  
   `session_compact` cannot distinguish manual vs. threshold vs. overflow compaction. 3 comments; critical for extension developers.  
   [GitHub](https://github.com/earendil-works/pi/issues/5217)

9. **[#5927] WSL2 dangerously changes cwd to C:\WINDOWS**  
   Running from `wsl.localhost` path under PowerShell silently corrupts the working directory. 3 comments; Windows users at risk.  
   [GitHub](https://github.com/earendil-works/pi/issues/5927)

10. **[#5904] bash tool silently drops cwd parameter**  
    Model sends `cwd:` but it's ignored — tool always uses session cwd. Dangerous when the session directory is deleted.  
    [GitHub](https://github.com/earendil-works/pi/issues/5904)

---

## Key PR Progress (10 Important PRs)

1. **[#5950] fix: use OpenRouter's actual cost from API response in footer**  
    Static per-token estimates now replaced with real `usage.cost` from OpenRouter. Fixes cost display for both built-in and custom models.  
    [GitHub](https://github.com/earendil-works/pi/pull/5950)

2. **[#5942/#5941] Add required reason and willRetry to compaction events**  
    Adds `reason` ("manual" | "threshold" | "overflow") and `willRetry` to `SessionBeforeCompactEvent` and `SessionCompactEvent` — closes #5217.  
    [GitHub](https://github.com/earendil-works/pi/pull/5942)

3. **[#5938] feat(tui): sync d-pi tui components to clients**  
    Adds `defineTuiComponent` declarations for agent definitions, enabling client-synced TUI component rendering (e.g., `d-pi-message`).  
    [GitHub](https://github.com/earendil-works/pi/pull/5938)

4. **[#5937] Harden opt-in auto-compaction at between-turn checkpoint**  
    Makes auto-compaction opt-in, runs at a safe point after tool execution completes but before the next provider request. Manual `/compact` unchanged.  
    [GitHub](https://github.com/earendil-works/pi/pull/5937)

5. **[#5929] fix: add vLLM context overflow error patterns to OVERFLOW_PATTERNS**  
    Prevents infinite 400 error loops when using vLLM with large context windows (262k tokens).  
    [GitHub](https://github.com/earendil-works/pi/pull/5929)

6. **[#5939] Make auto-compaction opt-in and safe**  
    Tied to #5937 — sets default to `compaction.enabled: false`, runs compaction only after tool-use turn finishes.  
    [GitHub](https://github.com/earendil-works/pi/issues/5939)

7. **[#5501] tolerate extra keys on edit tool edits[] items**  
    Drops `additionalProperties: false` on inner `editSchema` items to prevent model-generated stray keys (e.g., `newText_strip`) from breaking edits.  
    [GitHub](https://github.com/earendil-works/pi/issues/5501)

8. **[#4888] Prevent TUI background renders from erasing IME preedit**  
    Adds a configurable quiet window for background renders after text input — critical for CJK IME users.  
    [GitHub](https://github.com/earendil-works/pi/issues/4888)

9. **[#5949] Update embedded Bun to fix CJS/ESM resolver**  
    Bun 1.3.10 fails to resolve CJS packages imported via ESM when the package lacks an `exports` map.  
    [GitHub](https://github.com/earendil-works/pi/issues/5949)

10. **[#5948] Option to send project AGENTS.md as user message**  
    Instead of forcing project-level `AGENTS.md` into the system prompt, allow sending it as a user message to avoid prompt bloat.  
    [GitHub](https://github.com/earendil-works/pi/issues/5948)

---

## Feature Request Trends

- **Multi-session TUI**: Concurrent agent sessions with tab-like switching (#5700) — power users want multitasking.
- **Local-first LLM parity**: Dynamic model list fetching for local providers like ollama/llama.cpp (#3357, #5935) — reducing the gap with hosted providers.
- **Plugin API expansion**: `navigateTree()` on ExtensionContext (#5932), session replacement API for UI extensions (#5952), compaction reason in events (#5217) — plugin ecosystem is maturing fast.
- **Per-model configuration**: Per-model thinking levels (#5933), per-model tool output truncation limits (#5935) — one-size-fits-all settings don't scale.
- **Safe auto-compaction**: Making compaction opt-in, with clear reasons and safe checkpoints (#5939, #5937) — community wants reliability over aggressive automation.

---

## Developer Pain Points

1. **Connection reliability**: #4945 (64 comments) — TUI hangs with no feedback on openai-codex; no fix in sight.
2. **TUI rendering glitches**: #5825 (scroll pull-down), #5931 (extra spaces on copy), #5945 (crash on malformed tool output) — visible UX regressions eroding trust.
3. **Silent failures & dangerous defaults**: #5904 (cwd silently dropped), #5927 (cwd changed to `C:\WINDOWS`), #5571 (hangs on non-TTY) — silent bugs that corrupt state.
4. **Provider-specific overflow detection**: #5930 (vLLM), #5929 fix — each provider requires bespoke pattern matching, and gaps cause infinite retry loops.
5. **Tool call malformation handling**: #5921 (empty tool call poisons conversation), #5501 (extra keys break edit tool) — models produce slightly malformed tool calls that the agent cannot gracefully recover from.
6. **Extension platform gaps**: #5932 (missing navigation API), #5952 (no safe session replacement), #5940 (buggy example extensions) — plugin developers hitting missing primitives.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-22

## Today's Highlights
The team is in a heavy bug-fix sprint ahead of the upcoming stable release, with 13 issues closed and 4 releases published in the last 24 hours. A critical security fix tightens model authentication scoping, while loop-detection logic is being promoted to always-on to prevent runaway tool calls. Meanwhile, several major feature PRs—voice dictation, interactive HTML artifacts, and revivable background agents—are advancing through review.

## Releases
- **[v0.18.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5)** — Latest stable. Contains a single fix: plan mode prompt now requires explicit opt-in (`fix(core): require opt-in for plan mode prompt`). Also includes a test cleanup (duplicate gitdiff untracked count case removed).
- **[v0.18.3-nightly.20260621.6b2f800ab](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3-nightly.20260621.6b2f800ab)** — Nightly build carrying the same plan mode opt-in fix ahead of the tagged stable.

## Hot Issues (10 Selected)

1. **[#5574 — exit_plan_mode auto-executes without confirmation on Shift+Tab](https://github.com/QwenLM/qwen-code/issues/5574)** — When cycling approval modes via Shift+Tab into Plan Mode, the plan is immediately executed without user confirmation. Reproducible as of v0.18.5. A dangerous UX gap that bypasses the safety net of explicit approval. 1 comment, just opened.

2. **[#5019 — 长程任务下大量工具重复调用导致会话终止](https://github.com/QwenLM/qwen-code/issues/5019)** — Long-running tasks hit the API's repetitive tool call cap because `skipLoopDetection` defaults to `true`. Users see a `400 InternalError` with no path to recovery. 4 comments; PR #5573 and #5571 now propose making loop detection always-on.

3. **[#5559 — Add replayable fake model responses for no-AK integration tests](https://github.com/QwenLM/qwen-code/issues/5559)** — A lightweight OpenAI-compatible fake server for E2E tests that currently require real API keys. Would enable model-dependent tests in PR CI. 3 comments; PR #5560 is already open implementing this.

4. **[#5540 — Allow resuming a completed background sub-agent](https://github.com/QwenLM/qwen-code/issues/5540)** — Background sub-agents are single-shot; `send_message` to a completed agent hard-fails. No recovery path exists. User `qqqys` filed this with a detailed design for revival with TTL cleanup. 3 comments; PR #5556 addresses it.

5. **[#5555 — `--resume` 后空格预览 thinking block 渲染截断](https://github.com/QwenLM/qwen-code/issues/5555)** — Resumed sessions show truncated thinking blocks in the Space preview, making resumed conversation context unreadable. Reported by `Eric-GoodBoy-Tech` with clear reproduction steps. 3 comments, closed by PR #5565.

6. **[#5562 — CLI 输入框换行时背景色渲染不连续](https://github.com/QwenLM/qwen-code/issues/5562)** — Multi-line input in the TUI shows background color gaps on wrapped lines. Visual bug that breaks the polished CLI experience. 3 comments, closed by PR #5568.

7. **[#5219 — Integration tests don't run on PR/merge](https://github.com/QwenLM/qwen-code/issues/5219)** — E2E tests only run on nightly cron, so regressions stay hidden until release. A persistent process concern that has accumulated 3 comments and links to Issue #5559 as a prerequisite fix.

8. **[#5549 — Trigger Qwen Autofix for release workflow failures](https://github.com/QwenLM/qwen-code/issues/5549)** — Release failures currently create a manual-inspection issue with no autofix trigger. Proposal: queue failures for the existing autofix agent pipeline. 2 comments; PR #5551 implements this.

9. **[#5563 — `mcp add --scope` 默认值文档与代码不一致](https://github.com/QwenLM/qwen-code/issues/5563)** — Docs claim `--scope` defaults to `project`, but code defaults to `user`. Three separate doc locations disagree with implementation. Small but confusing for MCP onboarding. 2 comments, tagged `welcome-pr`.

10. **[#5552 — Bare fastModel can trigger Qwen OAuth under OpenAI auth](https://github.com/QwenLM/qwen-code/issues/5552)** — When configured with OpenAI auth, a bare `fastModel: "coder-model"` resolves to hard-coded Qwen OAuth, leaking credentials to the wrong provider. **Security-relevant.** 2 comments, closed by PR #5553.

## Key PR Progress (10 Selected)

1. **[#5573 — Always-on guard for consecutive identical tool calls](https://github.com/QwenLM/qwen-code/pull/5573)** — Moves the consecutive-identical-tool-call check from opt-in loop detection to the always-on tier. Fixes the core issue behind #5019 where runaway tool calls hit the API cap. Open, actively reviewed.

2. **[#5571 — Enable loop detection by default and lower duplicate threshold](https://github.com/QwenLM/qwen-code/pull/5571)** — Complementary fix to #5573: changes `skipLoopDetection` default from `true` to `false` and lowers the duplicate threshold to avoid API errors. Open, linked to #5019.

3. **[#5553 — Keep bare fast model on current auth](https://github.com/QwenLM/qwen-code/pull/5553)** — Ensures bare `fastModel` selectors stay scoped to the current auth type, so `coder-model` under OpenAI auth doesn't redirect to Qwen OAuth. Closed, merged.

4. **[#5502 — Voice dictation with native capture, streaming, and biasing](https://github.com/QwenLM/qwen-code/pull/5502)** — Adds `/voice [hold|tap|off|status]` for hands-free dictation via native OS capture. Supports hold-to-talk and tap-to-start modes, silence detection, and `/model --voice` for transcription model selection. Open, high community interest.

5. **[#5557 — Add Artifact tool to publish interactive HTML pages](https://github.com/QwenLM/qwen-code/pull/5557)** — Experimental `artifact` tool that lets the model publish a self-contained HTML page and open it for the user. Default publisher writes to `~/.qwen/artifacts/` and opens `file://` with no network. Open, feature-flagged.

6. **[#5556 — Revivable background sub-agents and transcript TTL](https://github.com/QwenLM/qwen-code/pull/5556)** — Makes completed background sub-agents revivable via `send_message`. Adds transcript TTL cleanup. Addresses #5540. Open.

7. **[#5030 — Resume an interrupted turn without synthetic "continue"](https://github.com/QwenLM/qwen-code/pull/5030)** — Adds first-class continuation for unfinished assistant turns after resume/crash/interruption. Eliminates the need for synthetic `"continue"` messages. Open, long-running.

8. **[#5126 — Transcribe images to text for text-only models](https://github.com/QwenLM/qwen-code/pull/5126)** — Vision Bridge: when a text-only model receives an image, Qwen Code auto-routes it to an image-capable model, transcribes to text, and feeds the result forward. Open, high-impact for multi-modal workflows.

9. **[#5561 — Reconcile MCP servers live on settings change](https://github.com/QwenLM/qwen-code/pull/5561)** — Implements hot-reload for MCP servers: editing `mcpServers` in `settings.json` now connects/disconnects servers without restart. Open, addresses long-standing feature request #3696.

10. **[#5572 — Auto-publish VSCode companion after stable releases](https://github.com/QwenLM/qwen-code/pull/5572)** — Adds a published-release trigger so stable CLI releases automatically enqueue VSCode VSIX publication. Manual dispatch preserved. Closed, merged.

## Feature Request Trends
- **Background automation & agent revival** — Multiple issues (#5540, #5556) request the ability to resume completed background agents. Users want persisted agent state that can be re-engaged rather than single-shot execution.
- **Integration test infrastructure** — A recurring theme (#5219, #5559): the community wants local fake model servers for no-AK CI. This is a prerequisite for running E2E tests on every PR to catch regressions early.
- **Voice interaction** — PR #5502 (voice dictation) is the biggest UX feature in flight. Silent on traditional request channels but represents a major strategic investment in hands-free coding.
- **Self-healing CI** — Issues #5549 and PR #5551 push toward automated recovery from release failures via the existing autofix agent, reducing manual triage burden.
- **Extension ecosystem growth** — PR #4909 (archive install sources) and the ongoing MCP hot-reload work (#5561) signal widening third-party integration capabilities.

## Developer Pain Points
1. **API-level tool call caps vs. local defaults** — Issue #5019 and PRs #5571/#5573 highlight a config gap: `skipLoopDetection` defaults to `true`, so users hit the server's hard cap (100 calls) before local loop detection kicks in. The fix is being promoted to always-on.
2. **CI blind spots** — Issue #5219: E2E tests only run on nightly cron, so PR authors merge regressions unknowingly. The community (led by `yiliang114`) is driving the fake-server approach to unlock PR-time testing.
3. **Auth model confusion** — Issue #5552: bare model names can cross auth boundaries (OpenAI → Qwen OAuth). This is now fixed, but points to a broader "auth-type isolation" design need.
4. **Windows/UNC path handling** — Multiple issues (#5522, #5538, #5516, #5506) expose raw string prefix checks that fail on Windows UNC paths (`\\server\share`) or sibling directories. `tt-a1i` filed 5+ such bugs in one day, indicating a systematic test gap for non-POSIX systems.
5. **Resume/restore UX degradation** — Issues #5555 and #5562: resumed sessions and multi-line input both suffer from rendering truncation or gaps. The CLI TUI polish needs attention under stress conditions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-22

## Today's Highlights
The **v0.8.64 release train** is in full swing with major security hardening, monolith refactoring, and auto-compaction work landing across the board. A critical **"turn stalled" hang bug** (#2487) remains the community's top pain point with 17 comments. The project also officially **rebranded to CodeWhale** — all future releases ship under `codewhale`, not `deepseek-tui`.

---

## Releases
**v0.8.63** — Final release under the legacy `deepseek-tui` npm package. All assets now ship as **CodeWhale**. Users on v0.8.x must migrate per `docs/REBRAND.md`. No new releases in the last 24 hours; the team is heads-down on v0.8.64.

---

## Hot Issues

1. **[#2487 — Turn stalled - no completion signal received](https://github.com/Hmbown/CodeWhale/issues/2487)**  
   *17 comments, high community frustration.* The most-reported bug: `yolo` mode freezes with no recovery via `continue`. Blocks autonomous workflows entirely. Maintainers have not yet confirmed a root cause.

2. **[#3368 — Security hardening/code-scanning fixes for v0.8.64](https://github.com/Hmbown/CodeWhale/issues/3368)**  
   *12 comments, 0 👍.* Release-blocker tracker consolidating CodeQL findings, advisory-class reports, and local integration commits. Shows the team is prioritizing security before shipping.

3. **[#3144 — Natural-language auto-review policy](https://github.com/Hmbown/CodeWhale/issues/3144)**  
   *11 comments, 0 👍.* Proposal inspired by Cursor's review SDK. Would add a pre-push review gate with configurable policies. Still in design phase.

4. **[#3275 — Over-extended modifications / self-questioning loop](https://github.com/Hmbown/CodeWhale/issues/3275)**  
   *9 comments, regression from #3061.* Agent deviates from user intent, enters self-driven proposal/execution loop without confirmation. High priority for autonomy control.

5. **[#1812 — TUI freeze on Windows](https://github.com/Hmbown/CodeWhale/issues/1812)**  
   *8 comments, intermittent UI freeze on Windows 11.* Process stays alive but unresponsive. Two confirmed events with logs and thread-state analysis.

6. **[#3222 — `reasoning_style` override for MiniMax M3/Qwen/GLM](https://github.com/Hmbown/CodeWhale/issues/3222)**  
   *6 comments.* Parsing of reasoning content broken for these providers. Affects users relying on thinking-block displays.

7. **[#3289 — UI freeze after auto-spawning several subagents](https://github.com/Hmbown/CodeWhale/issues/3289)**  
   *5 comments.* Plan mode triggers subagent spawning which causes terminal freeze. Related to #1812 Windows issues but platform-independent.

8. **[#2608 — Refactor provider registry from ballooning config files](https://github.com/Hmbown/CodeWhale/issues/2608)**  
   *4 comments.* `lib.rs` at 4,719 lines; `config.rs` at 9,402 lines. Each new provider requires 15-30 match arms across both files. Directly impacts maintainability.

9. **[#3355 — Sandbox blocks Git write ops on worktree workspaces](https://github.com/Hmbown/CodeWhale/issues/3355)**  
   *3 comments.* Git worktrees break sandbox write enforcement. A PR (#3356) already landed to fix this.

10. **[#3369 — Nightly cross-target builds failing](https://github.com/Hmbown/CodeWhale/issues/3369)**  
    *0 comments, release-blocker.* CI/CD shows failures in Nightly builds and auto-tag workflow. Must be resolved before v0.8.64 ships.

---

## Key PR Progress

1. **[#3356 — Allow worktree git metadata writes in sandbox](https://github.com/Hmbown/CodeWhale/pull/3356)**  
   Fixes #3355. Detects linked worktree `.git` pointer files and adjusts writable roots. Merged (OPEN but functionally ready).

2. **[#3332 — Require auth for non-loopback app-server binds](https://github.com/Hmbown/CodeWhale/pull/3332)**  
   Fixes #3258. Rejects binds to non-loopback addresses unless an explicit auth token is supplied. Security hardening.

3. **[#3329 — Restore HuggingFace env precedence](https://github.com/Hmbown/CodeWhale/pull/3329)**  
   Fixes huggingface API key env variable precedence to pass the `CI/Lint` gate. Small but blocking regression fix.

4. **[#3344 — Retry Codex responses requests](https://github.com/Hmbown/CodeWhale/pull/3344)**  
   Adds `send_with_retry` to Codex streaming path. Previously failed immediately on transport errors. Merged.

5. **[#3333 — Split MCP header helpers](https://github.com/Hmbown/CodeWhale/pull/3333)**  
   Extracts HTTP header framing and custom-header filtering into `mcp::headers` module. Prerequisite for the larger MCP transport split (#3310).

6. **[#3321 — Add token budget regulator for high fan-out agent runs](https://github.com/Hmbown/CodeWhale/pull/3321)**  
   Closes enforcement gap between protocol layer and runtime. Adds `max_tokens` enforcement to `BudgetSpec`. Merged.

7. **[#3345 — Move inline tests to module](https://github.com/Hmbown/CodeWhale/pull/3345)**  
   Closes #3307. Moves large inline test module from `crates/config/src/lib.rs` into `tests.rs`. Reduces production file size.

8. **[#3301 — Save ask permission rules from approvals](https://github.com/Hmbown/CodeWhale/pull/3301)**  
   Adds `s` key in approval modal to persist shell approval rules as `permissions.toml`. UX improvement for repeated approvals.

9. **[#3302 — Keep onboarding marker in codewhale home](https://github.com/Hmbown/CodeWhale/pull/3302)**  
   Ensures fresh installs create `~/.codewhale/.onboarded` while preserving legacy `~/.deepseek/.onboarded` markers. Merged.

10. **[#3330 — Replay FEAT-005 command extraction onto main](https://github.com/Hmbown/CodeWhale/pull/3330)**  
    Large refactor replaying command extraction onto current architecture. References #2870 and release triage #2886.

---

## Feature Request Trends

1. **Model-adaptive tooling**: Multiple issues (#3365, #3366) propose **ModelProfile descriptors** so CodeWhale tailors tool catalogs and prompt sizing per model (context length, native tool calling, parallel-call support). Non-flagship models currently get the same prompt surface.

2. **Subagent personas**: Issue #3367 requests user-defined `.codewhale/agents/` personas so users can define custom roles without waiting for built-in support. Indicates growing demand for agent customization.

3. **Auto-compaction**: Issue #3363 calls for seamless context-limit handling with carried-forward summaries. Users want to avoid manual wrap/compact/restart cycles during long sessions.

4. **Chinese-language skill packs**: Issue #3354 requests Chinese-language skills to save tokens. Signals international usage growth.

5. **Baidu Qianfan support**: Issue #3357 requests a `--provider custom` flag for Chinese cloud model providers. Represents demand from CN-based developers.

6. **Visual inspection artifacts**: Issue #3145 proposes screenshots, element relationships, and layout context for browser/UI tasks, inspired by Cursor's Design Mode.

---

## Developer Pain Points

1. **"Turn stalled" hangs (#2487)** — The #1 reliability blocker. `yolo` mode freezes with no recovery path. Multiple workarounds attempted, none work reliably.

2. **Agent over-extension (#3275)** — Agent ignores user intent, enters self-driven loops. Regression from a previous fix (#3061). Core agent control issue.

3. **TUI freezes (#1812, #3289)** — Cross-platform freezing, especially Windows and under subagent spawning. Process stays alive but UI dead. Slow turnaround on fixes.

4. **Config file bloat (#2608)** — 4,700+ line config files make adding providers painful. 15-30 match arms per provider across two files. High maintenance burden.

5. **Context limit fragility (#3363)** — Long sessions degrade noticeably near context limit. No seamless auto-compaction; users must manually intervene.

6. **Provider compatibility gaps (#3222, #3357)** — Reasoning parsing broken for MiniMax/Qwen/GLM; no support for Baidu Qianfan. Chinese cloud provider users disproportionately affected.

7. **CI/CD fragility (#3369)** — Nightly cross-target builds failing, blocking release. Dependency bumps (tokio, toml, windows) creating churn.

8. **Sandbox UX friction (#3355)** — Git worktrees break write sandbox. Requires `yolo`/trust mode bypass. Fixed in PR #3356 but highlights broader sandbox-PTTH issues.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*