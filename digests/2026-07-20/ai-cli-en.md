# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 01:53 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
**Date:** 2026-07-20

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing a period of intense maturation, characterized by a clear shift from novelty adoption to reliability and production-readiness concerns. Seven major tools are actively shipping code, with daily activity spanning 80+ merged PRs and 100+ active issues across the ecosystem. The dominant themes across all communities are **session integrity** (fork/undo/compaction bugs), **subagent orchestration reliability** (false success signals, deadlocks, context leaks), and **cross-platform parity** (Windows and ARM64 remain persistent weak points). A notable undercurrent is growing user frustration with **opaque model selection** and **server-side configuration overrides** that erode trust in tool autonomy. The ecosystem is bifurcating between tools prioritizing **agent autonomy** (Claude Code, Gemini CLI) and those focusing on **developer UX polish** (Codex, OpenCode), with companion tools like Pi and Qwen Code racing to close feature gaps through aggressive provider expansion.

---

## 2. Activity Comparison

| Tool | Issues Opened Today | PRs Merged Today | Release Status | Notable Activity Signal |
|------|-------------------|------------------|----------------|------------------------|
| **Claude Code** | 8 new issues | 10 PRs merged | **v2.1.215** (shipped today) | High engagement on copy/paste bug (#18170: 133 comments) |
| **OpenAI Codex** | ~5 new | 10 PRs merged | No new release | 15 PRs merged (optimization push), macOS syspolicyd bug (#25719: 255 👍) |
| **Gemini CLI** | ~3 new | 10 PRs merged | **v0.52.0-nightly** (shipped today) | Major dependency upgrades (TypeScript 7.0, ESLint 10) |
| **GitHub Copilot CLI** | ~5 new | 1 PR merged | No new release | Plan-mode regression (#4188) and GPT-5.6 exit bug (#4172) |
| **Kimi Code CLI** | ~3 new | 6 PRs open | **v0.27.0** (stable) | 4 fixes submitted for session management stability |
| **OpenCode** | ~4 new | 5 PRs merged | **v1.17.20** (stable) | Database bloat (#33356: 13GB+) and black TUI screen (#37803) |
| **Pi** | ~3 new | 9 PRs open | No new release | High-velocity day (30+ issues updated), Upstage provider added |
| **Qwen Code** | ~4 new | 7 PRs open | **v0.20.0** + **v0.20.1-preview** | Web search tool (#7215) and subagent mutation recurrence (#7156) |
| **DeepSeek TUI** | ~2 new | 3 PRs merged | No new release | Blue Stage localization rollout, MCP hot-reload |
| **Grok Build** | 0 | 0 | No activity | — |

**Key Observation:** Claude Code, Codex, and Gemini CLI are shipping the highest volume of code, while Kimi CLI and Pi show disproportionate fix-to-issue ratios (high efficiency). Copilot CLI has notably low PR throughput despite significant community-reported regressions.

---

## 3. Shared Feature Directions

The following requirements appear across **multiple** tool communities, indicating genuine industry demand rather than isolated requests:

| Requirement | Affected Tools | Specific Manifestation |
|------------|----------------|----------------------|
| **Session integrity & compaction** | Claude Code, Kimi CLI, Pi, OpenCode, DeepSeek TUI | Fork/undo truncation, compaction corruption, 5MB+ body limits |
| **Subagent observability** | Claude Code, Codex, Gemini CLI, Qwen Code, DeepSeek TUI | Lost completion notifications, encrypted audit trails, missing context in bug reports |
| **Mid-turn streaming hooks** | Claude Code, Kimi CLI, Pi | Real-time steering, TTS integration, incremental logging |
| **Model/status visibility** | Claude Code, Codex, Gemini CLI | Active model indicator, thinking mode display, token usage transparency |
| **Cross-platform Windows parity** | Claude Code, Codex, Copilot CLI, Pi, Qwen Code, DeepSeek TUI | Argument parsing, sandbox failures, startup hangs, Defender conflicts |
| **MCP tool lifecycle management** | Claude Code, DeepSeek TUI, Qwen Code | Hot-reload, dynamic discovery, permission controls |
| **Web search integration** | Qwen Code, DeepSeek TUI | Provider-native search, citation support, opt-in tools |
| **Auto-discovery for providers/models** | OpenCode, Pi | OpenAI-compatible endpoint detection, model enumeration |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|------------|-------------|------------|-------------|----------|----------|-----|-----------|--------------|
| **Primary focus** | Agent autonomy & orchestration | Desktop IDE experience | Multi-model agent pipelines | Git-native & enterprise workflow | Session management stability | Provider ecosystem & V2 architecture | Provider flexibility & extensibility | Daemon-based orchestration | Localization & UI polish |
| **Target user** | Power CLI users & agent pipeline builders | VS Code desktop developers | GCP/Google ecosystem teams | GitHub enterprise teams | Stability-focused developers | Multi-provider, cross-platform | Tinkerers & multi-provider users | Chinese-market & Qwen ecosystem | i18n-focused & MCP adopters |
| **Technical approach** | Rust-based TUI, subagent spawning | Electron desktop, Chromium-based | TypeScript monorepo, ACP protocol | Go-based CLI, CAPI protocol | Python/Pydantic, web-first | Bun-based, OpenAI-compatible | Rust-based, AI SDK provider model | Python daemon, SSE streaming | Rust-based, Blue Stage theming |
| **Key strength** | Agent orchestration depth | Desktop polish & performance | Google ecosystem integration | Enterprise Git integration | Session state management | Provider diversity | Extensibility & hooks | Daemon reliability | Localization & MCP |
| **Key weakness** | Model transparency & trust erosion | Windows stability (70% of bugs) | Agent reliability (false success) | Low PR throughput vs. regressions | Tool-call encoding issues | Database bloat & UI regressions | Session corruption edge cases | Subagent model mutation recurrence | Windows CLI parsing |

**Emerging Patterns:**
- **Rust-based tools** (Claude Code, Pi, DeepSeek TUI) are converging on performance-first architectures
- **TypeScript-based tools** (Gemini CLI, Kimi CLI, OpenCode) are leveraging AI SDK patterns
- **Desktop-first tools** (Codex, Copilot CLI) face Windows stability challenges at scale

---

## 5. Community Momentum & Maturity

| Tool | Maturity Level | Momentum Trend | Community Health Indicators |
|------|---------------|----------------|---------------------------|
| **Claude Code** | **High** | 🟢 Accelerating | 2.1.x release cadence, 80+ issues/comments daily, strong PR velocity |
| **OpenAI Codex** | **High** | 🟢 Accelerating | 15 PRs/day, 255 👍 on top bug, optimization-focused |
| **Gemini CLI** | **Medium-High** | 🟢 Growing | Nightly releases, major dep upgrades, agent EPICs |
| **Copilot CLI** | **Medium** | 🟡 Stable with risk | Low PR throughput (1/day), accumulating regressions without fixes |
| **Kimi CLI** | **Medium** | 🟢 Growing | High fix efficiency (6 PRs solving 4+ issues), session stability focus |
| **OpenCode** | **Medium** | 🟡 Mixed | V2 infrastructure investment but database and UI regressions |
| **Pi** | **Medium** | 🟢 Accelerating | 30+ issues/day, 9 PRs, Upstage/GPT-5.6 additions, ACP mode |
| **Qwen Code** | **Medium** | 🟢 Growing | v0.20.0 release, web search tool, daemon reliability focus |
| **DeepSeek TUI** | **Low-Medium** | 🟡 Growing | Localization push, MCP hot-reload, but no releases in 24h |

**Velocity Leaders:** Pi, Claude Code, and OpenAI Codex are shipping the most daily changes.
**Community Trust Leaders:** Claude Code and OpenAI Codex have the highest community engagement but also face the most scrutiny on model transparency.
**Platform Vulnerability:** Copilot CLI shows a dangerous pattern of regressions without corresponding fixes—this is the primary community health risk.

---

## 6. Trend Signals

### Critical Industry Trends

1. **From Novelty to Reliability:** The ecosystem has crossed a threshold where users expect **session integrity** and **state persistence** as table stakes. Bug reports about fork/undo corruption, compaction failures, and body size limits dominate the top-voted issues across 5+ tools. Developers are adopting AI CLI tools for daily production work and punishing regressions harshly.

2. **Agent Autonomy vs. User Control Tension:** Claude Code's `/verify` reversal (manual-only) and server-side experiment overrides (#75607) represent a broader tension. Users want **predictable agent behavior** and **opt-in control** over model selection, skill invocation, and data handling. Tools that violate this trust (e.g., silent model downgrades, ignored config flags) face rapid community backlash.

3. **The Windows Gap is Strategic:** With 70%+ of Codex bugs targeting Windows and similar patterns across Claude Code, Copilot CLI, and Pi, **Windows stability** is the single largest competitive differentiator. The first tool to deliver parity across Windows/macOS/Linux will capture significant enterprise market share.

4. **Observability Becomes a Feature Category:** Multi-agent audit trails (#28058: 99 👍), subagent trajectories (#21763), and session recording (#28058) are becoming **requested features, not just debugging tools**. Developers need to understand what their agents did, especially when billing is based on consumption.

5. **Provider Fragmentation Drives Abstraction Layers:** Pi's ACP mode (#836), OpenCode's auto-discovery (#6231), and Gemini CLI's GenAI SDK bump signal a **shift toward provider-agnostic architectures**. Tools that lock users into single providers (Anthropic-only, OpenAI-only) face existential risk as local models and alternative providers improve.

6. **Memory and Context Management is the New Frontier:** Auto Memory retry loops (#26522), frozen system prompts (#2420), and plan mode content leakage (#6237) indicate that **context management**—how tools handle long-running sessions with evolving configurations—is a deeply unsolved problem that will define the next generation of AI CLI tools.

### What Developers Should Watch

- **For Claude Code users:** Model transparency (#75607) and tool call leakage (#64108) are systemic risks—verify which model is actually serving your requests.
- **For Codex users:** Windows stability is the critical path—avoid Windows for production Codex workflows until #20214 and #33780 are resolved.
- **For Gemini CLI users:** False success signals (#22323) undermine debugging trust—always verify subagent reported outcomes manually.
- **For Copilot CLI users:** Plan-mode instability (#4172, #4188) is dangerous for CI/CD integration—stick with ask mode until resolved.
- **For cross-platform developers:** Pi and DeepSeek TUI show the most balanced cross-platform investment, while Qwen Code's daemon model offers unique reliability patterns worth studying.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on activity data as of 2026-07-20.

---

## 1. Top Skills Ranking (by Discussion & Attention)

The following Pull Requests represent the most heavily discussed Skill proposals. None have been merged; most are still open.

1.  **Skill-Creator Core Fixes (PR #1298)** — A critical patch fixing the `run_eval.py` script, which always reported 0% recall, effectively breaking the entire description-optimization loop. The discussion revolves around root causes in Windows subprocess handling, trigger detection, and parallel workers. **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/1298)

2.  **Document Typography Skill (PR #514)** — Proposes a skill to prevent orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. A high-quality, niche product focus. Minimal debate, broad perceived value. **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/514)

3.  **ODT / OpenDocument Skill (PR #486)** — Enables creation, templating, and conversion of `.odt` and `.ods` files. Bridges the gap between Claude and LibreOffice workflows. Discussion focuses on format handling depth. **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/486)

4.  **Self-Audit / Reasoning Quality Gate (PR #1367)** — A v1.3.0 proposal for a meta-skill that performs mechanical file verification plus a four-dimension reasoning audit on AI output before delivery. High conceptual ambition. **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/1367)

5.  **Testing Patterns Skill (PR #723)** — A comprehensive skill covering the "testing trophy" model, unit testing, React components, and E2E workflows. Discussion is light, but the scope is large and directly addresses a developer pain point. **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/723)

6.  **Pyxel Retro Game Development Skill (PR #525)** — Integrates Claude with the Pyxel retro game engine via an MCP server. Niche but well-received; author is the Pyxel creator. **Status:** Open (Updated 2026-07-15). [View PR](https://github.com/anthropics/skills/pull/525)

7.  **SAP-RPT-1-OSS Predictor Skill (PR #181)** — A skill for using SAP's open-source tabular foundation model for predictive analytics on enterprise data. Enterprise-focused, minimal current discussion, but high strategic value. **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/181)

---

## 2. Community Demand Trends (from Issues)

The most active Issues reveal clear, unmet demand in the following areas:

- **Trust & Security (Issue #492, 39 comments):** The strongest community reaction concerns the distribution of community skills under the `anthropic/` namespace. Users fear trust boundary abuse and phishing-like permission risks. This is the **single most-discussed topic** in the entire repository.

- **Org-Wide Skill Sharing (Issue #228, 14 comments):** Enterprise users urgently need a way to share skills organization-wide without manual file transfer. A shared library or direct Claude.ai integration is the top administrative request.

- **Windows Compatibility (Issues #556, #1061, #1169):** The `skill-creator` pipeline is fundamentally broken on Windows. `run_eval.py` fails to trigger skills, subprocess calls don't handle `.cmd` files, and encoding issues cause crashes. This is a blocker for a large portion of the developer community.

- **Deduplication & Plugin Hygiene (Issue #189, 9 upvotes):** Community members report that installing both `document-skills` and `example-skills` plugins results in identical skill content, wasting context window space. The plugin distribution model needs consolidation.

- **Output Quality Gates (Issue #1385, 3 comments):** A formal proposal for a pre-task calibration, adversarial review, and delivery verification pipeline. Aligns with the existing self-audit PR (#1367), signaling momentum toward structured output assurance.

---

## 3. High-Potential Pending Skills

These active PRs show material discussion and community investment; they are strong candidates for landing soon:

- **Skill-Security Analyzer & Skill-Quality Analyzer (PR #83)** — Meta-skills for auditing other skills. The security angle directly addresses the trust concerns raised in Issue #492.
- **Color Expert Skill (PR #1302)** — A highly specific, self-contained color theory skill covering naming systems, spaces, and accessibility. Low complexity, high precision.
- **Compact Memory Symbolic Notation (Issue #1329)** — A proposal for a skill that replaces long-running agent prose notes with a compact symbolic notation. Directly reduces token cost for persistent memory.
- **Windows Compatibility Fixes (PRs #1050, #1099, #1323)** — A series of targeted patches correcting subprocess, encoding, and trigger detection. These are blockers for the entire Windows ecosystem.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **reliable, cross-platform tooling for the skill-development lifecycle itself** — specifically a fix for the broken `run_eval` optimization loop and universal Windows support — followed closely by a demand for **trust and governance infrastructure** to safely manage community-contributed skills at scale.

---

# Claude Code Community Digest
**Date:** 2026-07-20

---

## Today's Highlights

Claude Code shipped **v2.1.215**, which reverts `/verify` and `/code-review` to manual-invoke only—a deliberate UX simplification that has already sparked community debate. Meanwhile, a **long-standing copy/paste indentation bug** (#18170) continues to dominate discussion with 133 comments, and a wave of reports around **model downgrades from Fable to Opus** and **server-side experiment overrides** signal growing unease about control and transparency.

---

## Releases

### v2.1.215
- Claude no longer auto-runs the `/verify` and `/code-review` skills; users must now invoke them explicitly via `/verify` or `/code-review`.
- This change reflects a move toward more intentional, user-triggered workflows—reducing surprise agent behavior but requiring developers to remember to call these commands when needed.

---

## Hot Issues

1. **[#18170] Copy/paste includes unwanted indentation and trailing spaces**
   - *133 comments, 275 👍* — The most-commented open issue. Copying text from the TUI output pulls leading tabs/spaces (matching prompt symbols) and trailing whitespace. Extremely disruptive for daily use. Community strongly wants a prompt-aware copy mode.
   - https://github.com/anthropics/claude-code/issues/18170

2. **[#66192] [BUG] Copy-paste does not work (macOS)**
   - *28 comments* — A separate copy/paste failure on macOS. Likely related to #18170 but manifests as a complete paste-block. Reports persist across versions.
   - https://github.com/anthropics/claude-code/issues/66192

3. **[#64108] Tool calls emitted as literal text instead of executing**
   - *16 comments, 30 👍* — In long sessions, `/edit` and `/read` tool calls sometimes leak as raw `<invoke>` XML with a stray `court` token. Indicates a model-level generation bug in high-context windows. High severity—breaks core agentic loops silently.
   - https://github.com/anthropics/claude-code/issues/64108

4. **[#75043] Nested subagent spawning broken: children always async, completion notifications lost**
   - *13 comments* — Spawning agents from within subagents fails in multiple ways: children ignore `run_in_background`, parent never receives completion, and `TaskStop` errors on resume. Critical for complex orchestration workflows.
   - https://github.com/anthropics/claude-code/issues/75043

5. **[#28986] [FEATURE] Show active model and thinking mode in VS Code panel**
   - *9 comments, 58 👍* — High demand. Developers want to see which model (e.g., Opus vs. Fable) and thinking mode (normal/extended) are active directly in the IDE panel, without digging into settings.
   - https://github.com/anthropics/claude-code/issues/28986

6. **[#64624] Feature: Real-time steering — send message mid-generation**
   - *8 comments* — Users want to send a new message while Claude is generating, without having to discard the current response (Escape) or wait. Current "interrupt and steer" docs are misleading—feature doesn't exist.
   - https://github.com/anthropics/claude-code/issues/64624

7. **[#75607] Server-side experiment silently removed Opus thinking summaries; auto-updates ignored**
   - *6 comments* — A server-side flag (`x-cc-atis`) silently disabled thinking summaries on Opus 4.8, and the CLI self-updated despite `autoUpdates: false`. No notice, no opt-in. Community reaction: strong trust erosion.
   - https://github.com/anthropics/claude-code/issues/75607

8. **[#79282] Any way to let Claude run /verify and /code-review on its own again?**
   - *New today* — Directly addresses the v2.1.215 change. User appreciates the default but wants a toggle to restore auto-invocation. Suggests a `claude.json` setting.
   - https://github.com/anthropics/claude-code/issues/79282

9. **[#79278] Claude Code caused system corruption during Debian installation**
   - *New today* — Fable model made unsafe file modifications that corrupted a Debian install on a Chromebook. Attempting to fix triggered a safeguards downgrade to Opus. Illustrates risk with autonomous file system access.
   - https://github.com/anthropics/claude-code/issues/79278

10. **[#79269] Prompt injection appeared in subagent context**
    - *New today* — A subagent's output contained injected instructions not present in any parent prompt or file. Coincided with safety classifier unavailability. Potential security incident—needs urgent investigation.
    - https://github.com/anthropics/claude-code/issues/79269

---

## Key PR Progress

1. **[#79237] Fix: `_is_isolated_worktree` guard to prevent spawn from mutating parent repo checkout**
   - Prevents `spawn_task` from running `git checkout -b` on the shared parent repo by adding an isolation check. Essential for safe subagent git operations.
   - https://github.com/anthropics/claude-code/pull/79237

2. **[#79211] Fix: remove stray `re` syntax error in `rule_engine.py`**
   - Fixes a dangling `re` statement after a `UnicodeDecodeError` handler that broke the entire module, causing hooks to error out and incorrectly flag computational work.
   - https://github.com/anthropics/claude-code/pull/79211

3. **[#79210] Fix: strip ANSI escape fragments from model value in settings.json**
   - The `/model` picker was persisting ANSI bold fragments (`[1m`) instead of raw model IDs. Causes settings corruption. Directly addresses user frustration with model selection.
   - https://github.com/anthropics/claude-code/pull/79210

4. **[#54094] fix: quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands**
   - Unquoted variable expansion in 5 plugins causes hooks to fail when the path contains spaces (e.g., `Company Name`). Long-standing issue (April) finally getting attention.
   - https://github.com/anthropics/claude-code/pull/54094

5. **[#79152] fix: only log Statsig duplicate-comment metric when actually posted**
   - Unconditional metric emission was inflating Statsig counts. Fixes data integrity in the deduplication pipeline.
   - https://github.com/anthropics/claude-code/pull/79152

6. **[#79151] fix: honor thumbs-down from any user when skipping duplicate auto-close**
   - Previously only the issue author's 👎 counted. Now any user's reaction prevents auto-closure—better community governance.
   - https://github.com/anthropics/claude-code/pull/79151

7. **[#79150] docs: align code-review README with current validation-based command**
   - README described a non-existent git-blame/history agent and 0-100 confidence scoring. Now matches the actual command behavior—prevents developer confusion.
   - https://github.com/anthropics/claude-code/pull/79150

8. **[#79149] docs: align commit-push-pr README with actual capabilities**
   - README claimed "analyzes full branch history" and produces "test plan checklist"—command only uses `git status` and `git diff HEAD`. Important transparency fix.
   - https://github.com/anthropics/claude-code/pull/79149

9. **[#79148] fix: add mandatory `hookify.` prefix to example rule filenames**
   - All four shipped example rules lacked the required `hookify.` prefix, making them silently ignored. Prevents new users from wasting time debugging non-functional rules.
   - https://github.com/anthropics/claude-code/pull/79148

10. **[#79140] fix: use `disable-model-invocation` to prevent Ralph loop infinite recursion**
    - The `/ralph-loop` command used `hide-from-slash-command-tool: "true"`, a key the CLI ignores. Model could self-invoke and start an infinite loop. Applies the correct attribute.
    - https://github.com/anthropics/claude-code/pull/79140

---

## Feature Request Trends

1. **Visible model/thinking indicators** (#28986, #77846) — Developers want real-time visibility into which model is active and whether extended thinking is enabled, both in VS Code and custom status lines.

2. **Real-time steering** (#64624) — The ability to send a message mid-generation without discarding work is a high-demand UX gap. Current Escape-to-interrupt is too destructive.

3. **Configurable session idle timeout** (#79268) — Background sessions auto-stop after ~1 hour with no configurable override. Power users need longer-running orchestrations.

4. **Configurable auto-run for skills** (#79282) — The v2.1.215 change to `/verify`/`/code-review` has users asking for a `claude.json` setting to opt back into automatic invocation.

5. **Improved agents view legibility** (#79281) — Color coding and main-session marking in the terminal agents view to handle parallel work more clearly.

6. **Image path paste opt-out** (#73813) — When pasting text containing image file paths, Claude interprets them as image content. Users want a toggle to treat them as plain text.

---

## Developer Pain Points

- **Copy/paste broken** (#18170, #66192) — The #1 pain point by engagement. Terminal copy includes unwanted formatting or fails entirely on macOS. Severely impacts daily workflow.

- **Model downgrade without consent** (#75607, #79272, #79278) — Multiple reports of Fable silently downgrading to Opus (or causing system damage then downgrading). Combined with server-side experiments overriding settings, trust in model selection is eroding.

- **Tool call leakage** (#64108) — In long sessions, tool calls emit as literal text instead of executing. Silent failure that can cause unpredictable behavior.

- **Subagent orchestration fragility** (#75043) — Nested subagent workflows are fundamentally broken (async issues, lost notifications, ownership errors). Complex agent pipelines are effectively unsupported.

- **Windows issues mounting** (#79275, #79273, #79277) — `/doctor` fails without `jq`; image attachments crash the CLI; long `file://` URLs break on line wrap. Windows support remains a persistent weak area.

- **Prompt injection / safety gaps** (#79269) — A subagent received and acted on injected instructions coincident with safety classifier unavailability. Security implications are significant and under-discussed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date: 2026-07-20**

---

## Today's Highlights

The Codex team delivered a significant optimization push today, with 15 PRs merged—nearly all addressing TUI rendering performance, memory usage, and thread management. Meanwhile, the community continues to report severe Windows performance regressions, with three new high-priority issues filed this week alone around resource exhaustion, Defender conflicts, and application hangs. The long-running macOS `syspolicyd` CPU runaway issue (#25719) has now accumulated 64 comments and 255 upvotes, making it the most urgent cross-platform stability concern.

---

## Releases

No new releases in the last 24 hours. The latest stable versions remain:
- **Codex Desktop**: 26.715.2305.0
- **Codex CLI**: 0.144.x series
- **VS Code Extension**: 26.707.41301

---

## Hot Issues

### 1. [macOS] Codex Desktop triggers `syspolicyd` / `trustd` CPU and memory runaway
**#25719** — *Updated: 2026-07-20* — *64 comments, 255 👍*
This is the top-voted open bug. Codex Desktop on macOS repeatedly triggers system security daemons (`syspolicyd`, `trustd`) into unbounded CPU and memory consumption. The issue has been open since June 1 and continues to gather upvotes daily. The community suspects Codex is repeatedly re-validating code signatures or Notarization tickets in a loop.
🔗 [Issue #25719](https://github.com/openai/codex/issues/25719)

### 2. [Windows] App freezes/stutters on Windows 11 Pro despite sufficient resources
**#20214** — *Updated: 2026-07-20* — *54 comments, 68 👍*
A persistent stutter/freeze issue on Windows 11 Pro (AMD Ryzen 5 5600, 32 GB RAM). Reports date back to April, yet the issue remains open with no fix in sight. Users report the app becomes unusable during normal coding flows.
🔗 [Issue #20214](https://github.com/openai/codex/issues/20214)

### 3. [Windows] `serialport.node` delay-load failures cause severe UI lag
**#33375** — *Closed 2026-07-20* — *46 comments, 30 👍*
A closed issue documenting that repeated `serialport.node` delay-load failures on Windows triggered cascading UI thread blocks. Although closed, the root cause (serial port enumeration during startup) is still causing adjacent issues.
🔗 [Issue #33375](https://github.com/openai/codex/issues/33375)

### 4. [Windows] App hangs at launch due to HID device enumeration blocking
**#33780** — *Updated: 2026-07-20* — *39 comments, 8 👍*
The main process blocks forever in `HID.node → hid.dll` when enumerating a non-responding HID device. This causes "Not Responding" state immediately after launch. Filed July 17, still open—a critical startup regression.
🔗 [Issue #33780](https://github.com/openai/codex/issues/33780)

### 5. [Windows] CrBrowserMain crash when Browser Use opens a page
**#32683** — *Updated: 2026-07-20* — *25 comments, 7 👍*
Codex's in-app browser (`chrome.dll`) crashes with `0xC0000005` access violation when the agent uses the “Browser Use” feature to open web pages. Appears specific to Windows; users on Pro plans are affected.
🔗 [Issue #32683](https://github.com/openai/codex/issues/32683)

### 6. [Windows] `apply_patch` fails with sandbox-related error
**#30009** — *Updated: 2026-07-20* — *24 comments, 7 👍*
File edits through `apply_patch` consistently fail with a Windows sandbox error. The sandbox (`workspace-write` mode) appears to reject patch application. A month-old bug with no fix yet.
🔗 [Issue #30009](https://github.com/openai/codex/issues/30009)

### 7. [Windows] Git process spawning leaves orphans (`git.exe` / `conhost.exe`)
**#17229** — *Updated: 2026-07-20* — *24 comments, 6 👍*
Codex repeatedly spawns `git.exe status --porcelain=v1 -z` and leaves orphaned processes behind, accumulating `git.exe` and `conhost.exe` instances over time. This is a longstanding issue (since April) that strains system resources.
🔗 [Issue #17229](https://github.com/openai/codex/issues/17229)

### 8. [Multi-Agent] Encrypted MultiAgentV2 messages remove readable audit trail
**#28058** — *Updated: 2026-07-19* — *21 comments, 99 👍*
A high-visibility regression after PR #26210: MultiAgentV2 message payload encryption broke the human-readable task audit trail. Users can no longer inspect what sub-agents did. 99 upvotes indicate strong community demand for observability.
🔗 [Issue #28058](https://github.com/openai/codex/issues/28058)

### 9. [Windows] Periodic 15s AppHang / 10s responsive cycle
**#33884** — *Updated: 2026-07-20* — *15 comments, 0 👍*
Filed July 17, Codex 26.715 enters a repeating cycle of 15-second freezes followed by 10 seconds of responsiveness. Users report this makes the app effectively unusable for any continuous workflow.
🔗 [Issue #33884](https://github.com/openai/codex/issues/33884)

### 10. [Windows] High CPU from Windows Defender & WMI on launch
**#33875** — *Updated: 2026-07-20* — *6 comments, 4 👍*
Launching Codex Desktop triggers sustained high CPU usage in `MsMpEng.exe` (Defender) and `WmiPrvSE.exe` (WMI). Users suspect Codex's file access patterns trigger real-time scanning loops and WMI queries. Filed July 17, open.
🔗 [Issue #33875](https://github.com/openai/codex/issues/33875)

---

## Key PR Progress

### 1. Avoid redundant TUI subagent metadata requests
**#34234** — *Closed*
Optimizes TUI thread metadata fetching by skipping backfills for fresh/forked threads that cannot have pre-existing descendants. Reduces unnecessary `thread/read` API calls.
🔗 [PR #34234](https://github.com/openai/codex/pull/34234)

### 2. Remeasure dynamic cells in transcript overlay
**#34232** — *Closed*
Fixes clipping of dynamic content (e.g., refreshed status output, visualizations) in transcript overlay by remeasuring cell heights after content changes instead of caching static sizes.
🔗 [PR #34232](https://github.com/openai/codex/pull/34232)

### 3. Persist names for paginated threads
**#34229** — *Closed*
Adds a nullable `name` column to persisted thread metadata, giving paginated threads explicit user-facing names distinct from auto-generated titles.
🔗 [PR #34229](https://github.com/openai/codex/pull/34229)

### 4. Backfill completion items only for the active exec turn
**#34226** — *Closed*
Fixes a performance issue where multi-agent exec sessions processed completion notifications for child turns on the primary event stream, triggering unnecessary `thread/read` requests.
🔗 [PR #34226](https://github.com/openai/codex/pull/34226)

### 5. Cache finalized Markdown history rendering
**#34223** — *Closed*
Caches rendered lines for finalized agent messages and proposed plans, avoiding redundant layout computations during transcript history measurement and display.
🔗 [PR #34223](https://github.com/openai/codex/pull/34223)

### 6. Avoid buffering replay-irrelevant thread notifications
**#34222** — *Closed*
Filters out large payloads (raw response items, realtime audio) from TUI replay buffers during thread replay, preventing memory bloat and eviction of useful buffered events.
🔗 [PR #34222](https://github.com/openai/codex/pull/34222)

### 7. Track TUI command completion separately from output
**#34218** — *Closed*
Fixes a race condition where streaming command output deltas prematurely marked commands as complete before actual finish, causing incorrect handling during turn interruptions.
🔗 [PR #34218](https://github.com/openai/codex/pull/34218)

### 8. Avoid retaining decoded MCP images in history cells
**#34206** — *Closed*
Decodes MCP image content only for validation, then releases the decoded data. The history cell retains only a lightweight placeholder marker instead of holding the full decoded image.
🔗 [PR #34206](https://github.com/openai/codex/pull/34206)

### 9. Avoid cloning buffered TUI history lines
**#34204** — *Closed*
Makes hyperlink-aware history insertion accept slices and borrow pending history batches during flushing, eliminating per-batch `Vec` cloning for reduced memory churn.
🔗 [PR #34204](https://github.com/openai/codex/pull/34204)

### 10. Use Markdown collector as streaming source of truth
**#34197** — *Closed*
Refactors streaming to use `MarkdownStreamCollector` as the canonical data source, returning committed byte ranges for rendering and scanning. Eliminates duplication between collector and streaming controller.
🔗 [PR #34197](https://github.com/openai/codex/pull/34197)

---

## Feature Request Trends

- **Voice transcription for IDE extension** (#3000, 33 comments, 193 👍): Push-to-talk dictation for prompts in the VS Code panel remains the highest-voted feature request, with strong demand across desktop and CLI variants.
- **Configurable worktree location** (#10599, 15 comments, 66 👍): Users want control over where Git worktrees are created; currently Codex hardcodes the location under the app data directory.
- **Credit usage toggle** (#28382, 3 comments, 6 👍): Request for a kill-switch to prevent automatic consumption of purchased Codex credits when included usage is exhausted—users want a pause, not an unbilled continuation.
- **Archived session deletion controls** (#24610, 7 comments, 15 👍): Growing privacy concern around cloud session retention; users want explicit "delete" for archived conversations, not just archiving.
- **Multi-platform sandbox uniformity** (implicit in #30009, #26438, #31220): Consistent request for cross-platform sandbox behavior—Windows sandboxing bugs are driving demand for parity with macOS/Linux.

---

## Developer Pain Points

| Pain Point | Frequency | Key Issues |
|------------|-----------|------------|
| **Windows performance regressions** | 10+ active bugs | #20214, #33780, #33884, #19923 — freeze/hang cycles, startup blocks, UI stutter |
| **System daemon resource exhaustion** | 5 active bugs | #25719 (macOS syspolicyd), #29499, #33875, #33711 (Windows Defender/WMI) |
| **Sandbox/patch application failures on Windows** | 3 active bugs | #30009, #26438, #31220 — apply_patch and command execution broken in sandbox mode |
| **Git integration issues** | 2 active bugs | #17229 (orphan git.exe), #30235 (timeout handling) |
| **Observability gaps** | 1 high-profile regression | #28058 — encrypted multi-agent messages removed audit trail (99 👍) |
| **Session/data retention** | 2 issues | #24610, #28382 — privacy concerns around archived sessions and credit auto-consumption |

The dominant pattern this week is **Windows-specific instability**—nearly 70% of active bugs target the Windows platform, and most involve startup hangs, UI freezing, or interference with system services (Defender, WMI). The macOS `syspolicyd` issue (#25719) is the single most-voted bug overall. Developers on non-macOS/non-Windows platforms (Linux) appear to have a comparatively stable experience, with only minor issues like the VS Code extension blank panel (#32388) and webview asset failures (#32530).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-20

## Today's Highlights

A major nightly release (v0.52.0-nightly) landed today, alongside a flood of dependency updates touching virtually every layer of the stack—TypeScript 7.0, ESLint 10, and a major bump to the GenAI SDK. Agent reliability continues to dominate the issue tracker, with a critical P1 bug (#22323) showing subagents falsely reporting success after hitting turn limits, and ongoing reports of agents hanging, ignoring configuration, and misreporting subagent context in bug reports.

## Releases

- **[v0.52.0-nightly.20260720.gacae7124b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260720.gacae7124b)** — Automated nightly release. Full diff available [here](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b).

*No detailed changelog published; this is a CI-driven version bump.*

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *P1, bug, agent.* A `codebase_investigator` subagent returns `status: "success"` and `Termination Reason: "GOAL"` even after hitting its maximum turn limit. This hides genuine interruptions and undermines debugging. **11 comments, 2 👍. Community reaction: high concern for diagnostic integrity.**

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *P1, EPIC, eval infrastructure.* Follow-up on behavioral eval framework (#15300). Tracks progress across 76 behavioral tests across 6 Gemini models. **7 comments. Relevance: foundational for preventing regressions before release.**

3. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *P2, EPIC, agent.* Investigates whether AST-aware tools can reduce token waste, improve navigation, and reduce turn count. **7 comments, 1 👍. Indicates growing interest in precision code understanding.**

4. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *P1, bug, agent.* The generalist agent hangs indefinitely on simple tasks (e.g., folder creation). User workaround: instruct the model to avoid sub-agents. **7 comments, 8 👍. Highest community upvotes this week.**

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *P2, bug, agent.* Anecdotal report that custom skills and sub-agents are rarely triggered automatically, even for related tasks. **6 comments. Relevance: core autonomy gap.**

6. **[#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *P1, bug, core.* After completing simple CLI commands, the shell hangs showing "Awaiting user input." **4 comments, 3 👍. High frustration for interactive workflows.**

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *P2, bug, agent.* Auto Memory re-queues unprocessed low-signal sessions forever, creating infinite retry loops. **5 comments. Relevance: memory system efficiency.**

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *P1, bug, agent/browser.* The browser subagent terminates with a `GOAL` reason but fails silently on Wayland displays. **4 comments, 1 👍. Linux desktop users affected.**

9. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
   *P2, bug, agent.* Subagents activate automatically even when disabled in all configuration files. User expected only MCP functionality. **2 comments. Significant trust/control concern.**

10. **[#21763 — Bugreport doesn't provide context of the subagent](https://github.com/google-gemini/gemini-cli/issues/21763)**  
    *P1, bug, agent.* The `/bug` report captures only the main session, omitting subagent internals, making debugging nearly impossible. **2 comments. Directly impacts developer troubleshooting.**

## Key PR Progress

1. **[#28465 — chore/release: bump version to 0.52.0-nightly](https://github.com/google-gemini/gemini-cli/pull/28465)**  
   Automated nightly release bump. *Merged today.*

2. **[#28456 — chore(deps): bump the npm-dependencies group with 75 updates](https://github.com/google-gemini/gemini-cli/pull/28456)**  
   Massive batch of npm dependency updates (XL size). Needs issue cross-reference.

3. **[#28461 — chore(deps-dev): bump typescript from 5.8.3 to 7.0.2](https://github.com/google-gemini/gemini-cli/pull/28461)**  
   Major TypeScript version upgrade. Significant breaking changes expected.

4. **[#28459 — chore(deps): bump @google/genai from 1.30.0 to 2.11.0](https://github.com/google-gemini/gemini-cli/pull/28459)**  
   Core GenAI SDK update. Likely includes new API capabilities and breaking changes.

5. **[#28463 — chore(deps): bump @agentclientprotocol/sdk from 0.16.1 to 1.2.1](https://github.com/google-gemini/gemini-cli/pull/28463)**  
   Agent Client Protocol SDK jumps to v1.2.1, indicating stability milestone.

6. **[#28462 — chore(deps-dev): bump eslint from 9.24.0 to 10.7.0](https://github.com/google-gemini/gemini-cli/pull/28462)**  
   ESLint v10 upgrade. Linting rules may change.

7. **[#28458 — chore(deps): bump vitest from 3.1.1 to 4.1.10](https://github.com/google-gemini/gemini-cli/pull/28458)**  
   Test framework major version upgrade.

8. **[#28460 — chore(deps-dev): bump @vitest/coverage-v8 from 3.2.4 to 4.1.10](https://github.com/google-gemini/gemini-cli/pull/28460)**  
   Coverage tooling follows vitest version.

9. **[#28453 — chore(deps): bump actions/setup-node from 4.4.0 to 7.0.0](https://github.com/google-gemini/gemini-cli/pull/28453)**  
   CI pipeline Node.js setup action major upgrade.

10. **[#28446 — fix(auth): use native fetch for OAuth token exchange to avoid "Premature close"](https://github.com/google-gemini/gemini-cli/pull/28446)**  
    *P1, security.* Fixes OAuth login failures on headless VPSes where `got`/`node-fetch` causes premature connection closes. Uses native `fetch` instead. **Direct community impact for headless/remote users.**

## Feature Request Trends

- **AST-aware code understanding** (#22745, #22746): Several EPICs and investigations propose leveraging AST parsing for more precise file reads, search, and codebase mapping. The goal is to reduce token waste and turn count.
- **Subagent trajectory visibility** (#22598, #21763): Users want subagent internals accessible via `/chat share` and included in `/bug` reports. Transparency for debugging and evaluation is a recurring theme.
- **Memory system improvements** (#26522, #26523, #26525): Auto Memory faces quality issues—indefinite retries, silent patch rejection, and secret redaction concerns. Users want deterministic behavior and better quarantining of bad data.
- **Agent self-awareness (#21432)**: An EPIC proposes that the CLI should accurately report its own flags, hotkeys, and capabilities—acting as its own guide.
- **Destructive action prevention (#22672)**: Users want built-in safeguards against destructive commands (`git reset --force`, DB modifications, etc.) with preference for safer alternatives.

## Developer Pain Points

1. **Agent hangs and false success signals** (#21409, #22323, #25166): The most upvoted and discussed issues involve agents that either hang indefinitely or misreport failure as success. This erodes trust in autonomous operation.
2. **Configuration ignored by agents** (#22267, #22093, #20079): Settings overrides, symlinks, and permission flags are routinely ignored. Users feel they lack control over agent behavior.
3. **Subagent context missing from debugging tools** (#21763, #22598): Bug reports and session sharing omit subagent traces, making root-cause analysis nearly impossible.
4. **Platform-specific failures** (#21983 Wayland, #22465 Vite prompt hang, #24935 terminal corruption on exit): Diverse environment issues continue to surface, especially on Linux and headless systems.
5. **Token and tool limits hit unexpectedly** (#24246 400 error with >128 tools, #23571 tmp script clutter): Agents create excessive overhead or hit API limits without graceful fallback or pruning logic.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-20

## Today's Highlights

Activity surged around plan-mode reliability and model integration this week, with a critical regression (#4188) blocking shell commands in plan mode and a new GPT-5.6 exit bug (#4172) leaving users stranded. Community frustration also crystallized around queued message management (#1857) and the opaque 5 MB CAPI body limit (#4183), both impacting long-running sessions. Meanwhile, desktop app networking issues (#4177) and Windows startup lag (#4176) signal growing pains as Copilot CLI scales to enterprise environments.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#4188 — Regression on plan-mode** (Opened today)  
   Plan mode now blocks shell commands (e.g., `gh cli`) that were previously available for enriching plans. A serious regression that breaks established workflows.  
   [View Issue](https://github.com/github/copilot-cli/issues/4188)

2. **#4172 — Exiting plan mode not reliable with GPT-5.6**  
   After creating a plan with GPT-5.6 models, users are left hanging — no prompt, no next step. High impact for early adopters of the new model family.  
   [View Issue](https://github.com/github/copilot-cli/issues/4172)

3. **#4024 — Voice mode: all bundled ASR models fail silently**  
   Microphone captures audio, but every transcription returns empty. Affects all three Nemotron-based speech models. No community upvotes, but 13 comments suggest deep engagement.  
   [View Issue](https://github.com/github/copilot-cli/issues/4024)

4. **#1857 — Allow users to cancel or remove enqueued messages**  
   Strong community demand (24 👍). Once a message is queued via `Ctrl+Q`/`Ctrl+Enter`, there is no way to cancel or reorder it. Users want control over pending work.  
   [View Issue](https://github.com/github/copilot-cli/issues/1857)

5. **#4185 — `--add-dir` causes Claude sub-agent dispatch failure**  
   Using `--add-dir` with Claude models triggers a 400 error due to cache_control block limit (4 max, finds 5). Blocks multi-directory workflows on Anthropic models.  
   [View Issue](https://github.com/github/copilot-cli/issues/4185)

6. **#4183 — Auto-compaction does not prevent 5 MB CAPI body limit**  
   Long sessions hit a silent 5 MB serialization limit even with auto-compaction enabled. Sessions become permanently stuck — no model calls, no error recovery.  
   [View Issue](https://github.com/github/copilot-cli/issues/4183)

7. **#4177 — Desktop app routes public GitHub issue links to enterprise host**  
   Clicking a public `github.com` issue link in the desktop app sends the request to the enterprise API host instead, resulting in a "We couldn't load this issue" error.  
   [View Issue](https://github.com/github/copilot-cli/issues/4177)

8. **#4180 — Interactive TUI ignores keyboard input in non-interactive PTY**  
   All keystrokes are swallowed when running via `tmux send-keys`, `expect`, or `pty.fork()`. Only `Ctrl+C` works. Breaks automation and orchestration tooling entirely.  
   [View Issue](https://github.com/github/copilot-cli/issues/4180)

9. **#4176 — Windows desktop app takes ~1-2 minutes to become usable**  
   Startup spawns multiple CLI processes sequentially, causing significant delay on Windows 11. Enterprise users seeking productivity are hit hardest.  
   [View Issue](https://github.com/github/copilot-cli/issues/4176)

10. **#4184 — Copying path of current project copies whitespace instead**  
    Right-click or `Ctrl+C` on the project path in the TUI copies spaces of the correct length, not the actual path. Minor but frustrating UX bug in v1.0.72-0.  
    [View Issue](https://github.com/github/copilot-cli/issues/4184)

## Key PR Progress

Only one PR was active in the last 24 hours:

- **#1 — Create ownership.yaml** (CLOSED)  
  Author: johanrosenkilde | A repository meta-configuration PR, closed after merging. No functional changes to the CLI tooling.  
  [View PR](https://github.com/github/copilot-cli/pull/1)

## Feature Request Trends

Three clear themes emerged from the last week's feature requests:

1. **Queued message management** (#1857, #4179, #4182)  
   Users want to cancel, edit, or create new sessions from queued messages. The `Ctrl+Q` queue is seen as useful but inflexible — no reordering, no selective removal, no "promote to new session" shortcut.

2. **Observability and transparency** (#3725, #4174, #4178)  
   Developers need to know which model performed work (background agents), how much context/tokens were consumed (ACP protocol), and span-level attribution for skills in OpenTelemetry traces. Model selection and cost tracking are becoming critical.

3. **Non-interactive and automation improvements** (#4180, #4181)  
   The `/btw` quick-ask popup cannot receive image pastes, and the TUI resists programmatic control via PTY. As Copilot CLI becomes part of CI/CD and orchestration pipelines, these gaps block adoption.

## Developer Pain Points

- **Plan-mode instability**: Two separate regressions (#4172, #4188) undermine trust in plan-mode workflows. Blocked shell commands and hanging exits force users back to manual planning.
- **CAPI body size hard limit**: The 5 MB serialization limit (#4183) is a silent, unrecoverable failure mode for long sessions. Auto-compaction is insufficient.
- **Voice mode broken for weeks**: Issue #4024 dates back to July 3 and remains unresolved. All ASR models fail with no logging — a complete mute on a flagship feature.
- **Desktop/enterprise friction**: Misrouted issue links (#4177), 1-2 minute Windows startup (#4176), and stale plan-mode write gates (#4173) create friction for enterprise teams on the desktop app.
- **Context/image paste limitations**: Cannot paste images into `/btw` popups (#4181), and `--add-dir` breaks Claude models (#4185). These are everyday blocking annoyances.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-07-20**

## Today's Highlights
Session management receives a major stability push as contributor Nas01010101 submits three fixes addressing long-standing issues with fork/undo truncation, file re-upload on restart, and stale system prompts on resume. A new streaming hook feature is under review, enabling live reply consumers like TTS and incremental logging. The community continues to request remote control capabilities and highlights a critical permission logic bug where deny rules override allow regardless of order.

## Releases
No new releases in the last 24 hours. Current stable version is v0.27.0.

## Hot Issues

1. **#1282 - Feature Request: Remote Control** (Opened Feb 27, 👍 13)
   Users want to continue local Kimi CLI sessions from phones, tablets, or browsers. This is the most-voted open feature request, reflecting strong demand for workflow portability.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/1282)

2. **#2508 - Permission rules: deny overrides allow** (👍 0)
   Critical bug report: documented "first matching rule takes effect" behavior is broken. Deny rules always win regardless of order, causing unpredictable access control for multi-rule configurations.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2508)

3. **#2517 - /undo and /fork truncate context.jsonl at wrong turn** (👍 0)
   Session file corruption bug in compacted or steered sessions, confirmed reproducible on current `main`. Community notes it likely causes the history mismatch issues reported in #2049.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2517)

4. **#2511 - Mid-turn streaming hook (MessageDisplay)** (👍 0)
   Feature request for observing assistant replies while they stream, enabling live narration, TTS, and incremental logging. Already has a corresponding PR ready.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2511)

5. **#2413 - Files re-sent on web restart** (Referenced in PR #2518)
   Every server restart re-uploads previously sent files, polluting sessions. Particularly painful for image-heavy workflows.
   [Referenced](https://github.com/MoonshotAI/kimi-cli/issues/2413)

6. **#2420 - Stale system prompt on session resume** (Referenced in PR #2519)
   Resumed sessions never pick up new skills or AGENTS.md edits because the system prompt is frozen at creation time. Blocks agile skill development.
   [Referenced](https://github.com/MoonshotAI/kimi-cli/issues/2420)

7. **#1974 - Wire-only slash turns shifting undo cut** (Referenced in PR #2520)
   Slash commands that don't produce visible output cause the undo pointer to shift incorrectly — a subtle but persistent session corruption vector.
   [Referenced](https://github.com/MoonshotAI/kimi-cli/issues/1974)

8. **#2049 - History mismatch after forks/undos** (Referenced in PR #2520)
   Community-reported symptom of the session truncation bugs, causing conversation history to desync after undo/fork operations.
   [Referenced](https://github.com/MoonshotAI/kimi-cli/issues/2049)

9. **#2386 - Wire-turn mapping for slash-commands** (Referenced in PR #2520)
   Related PR that maps wire turns to context turns — necessary background work for the truncation fixes.
   [Referenced](https://github.com/MoonshotAI/kimi-cli/pull/2386)

10. **#6488 - Qwen Code MessageDisplay feature** (Referenced in PR #2512)
    The inspiration for the streaming hook design, showing cross-project feature adoption patterns.
    [Referenced](https://github.com/QwenLM/qwen-code/issues/6488)

## Key PR Progress

1. **#2520 - fix(session): align fork/undo context truncation to wire turns** (Updated today)
   Resolves #2517, #1974, and likely #2049. Maps wire turns to context turns for correct truncation during undo/fork. Critical patch for session integrity.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2520)

2. **#2515 - perf(kosong): buffer stream merges and avoid deep-copying every delta** (New)
   Performance fix: replaces quadratic str+= concatenation with buffered merging and eliminates expensive `model_copy(deep=True)` on every streaming callback. Expected to significantly reduce latency on long responses.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2515)

3. **#2518 - fix(web): persist uploads .sent marker so restarts do not re-send files** (New)
   Resolves #2413. Introduces a `.sent` marker file to track uploaded files across restarts, preventing session pollution. Essential for web UI reliability.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2518)

4. **#2519 - fix(app): refresh stale frozen system prompt on session resume** (New)
   Resolves #2420. Allows resumed sessions to pick up new skills and AGENTS.md changes instead of using the frozen record from session creation.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2519)

5. **#2512 - feat(hooks): add MessageDisplay hook for mid-turn streaming** (New)
   Implements #2511. Fire-and-forget hook event that fires repeatedly during assistant streaming, adapted from Qwen Code's design. Enables live TTS, progress UIs, and incremental logging.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2512)

6. **#2513 - fix(kosong): recursively decode double-encoded tool-call arguments** (New)
   Fixes Moonshot API compatibility issue where nested arrays/objects in tool-call arguments are double-encoded as JSON strings, causing Pydantic validation failures.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2513)

7. **#2514 - fix(skill): ignore stray markdown in plugins container during skill discovery** (New)
   Prevents flat markdown files in the plugins directory from being incorrectly treated as skills, aligning with documented structure where plugins are independent subdirectories.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2514)

8. **#2516 - [CLOSED] Create kimi-cli** (Spam/Invalid)
   Generic "skills n plugins" PR with no substantive changes. Was closed shortly after creation.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2516)

9. **#2386 - Related session mapping PR** (Referenced in #2520)
   Provides the wire-turn to context-turn mapping foundation needed by the truncation fixes.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2386)

10. **#1417 - System prompt freezing PR** (Referenced in #2519)
    The original change that introduced `_system_prompt` capture in `context.jsonl`, which the new fix #2519 addresses.
    [Reference](https://github.com/MoonshotAI/kimi-cli/pull/1417)

## Feature Request Trends

The dominant feature direction is **session portability and continuity**, led by Issue #1282 (remote control). Users want to resume local sessions from any device, mirroring the "continue on mobile" pattern seen in other AI coding tools. A secondary trend is **streaming observability** — developers want to hook into assistant replies mid-stream for real-time processing, as evidenced by Issue #2511 and its rapid PR implementation. The hooks system appears to be gaining adoption as the extensibility mechanism of choice.

## Developer Pain Points

1. **Session integrity fragility** — The cluster of issues around fork/undo truncation (#2517, #1974, #2049) shows that session persistence logic is a recurring pain point, especially in edge cases involving slash commands and compacted sessions.

2. **Stale state on resume** — Frozen system prompts (#2420) and re-sent files on restart (#2413) indicate that session serialization/deserialization lacks proper state management for dynamic components like skills and uploaded content.

3. **Permission rule unpredictability** — The deny-overrides-allow bug (#2508) is a serious reliability concern for users with complex access control configurations, contradicting documented behavior.

4. **Tool-call encoding issues** — Double-encoded arguments (#2513) suggest ongoing API compatibility friction between the Moonshot API and the CLI's Pydantic validation layer, requiring defensive parsing workarounds.

5. **Performance on long responses** — The streaming performance fix (#2515) indicates that large prompts and long-running sessions expose quadratic complexity in string handling, a classic scaling issue.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-07-20

---

## Today's Highlights
Today's activity centers on **V2 infrastructure hardening** and **provider ecosystem expansion**. Multiple high-severity issues around TUI black-screens, database bloat, and billing synchronization are drawing heavy community engagement. On the PR front, a major shared-util package refactor and critical Windows ARM64 fixes signal continued investment in cross-platform stability.

---

## Releases
**No new releases** in the last 24 hours. The latest stable channel remains **1.17.20**.

---

## Hot Issues (Top 10 by Community Impact)

1. **[#6231 – Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)**  
   *Comments: 25 | 👍: 182*  
   The most-upvoted open issue. Users want automatic model discovery for local providers (LM Studio, Ollama, llama.cpp) instead of manual config. **Why it matters:** Manual model lists are error-prone and break when users swap models locally. High community frustration given the popularity of local-first workflows.

2. **[#19130 – Windows ARM64 native: OpenTUI fails with bun:ffi dlopen TinyCC error](https://github.com/anomalyco/opencode/issues/19130)**  
   *Comments: 11 | 👍: 8*  
   Native ARM64 binary works for CLI commands but TUI crashes on init. **Why it matters:** Windows ARM (Copilot+ PCs) is an emerging platform; this blocks adoption for users on Surface Pro X/ARM laptops. No fix visible yet.

3. **[#35265 – ResourceExhausted: Worker local total request limit reached](https://github.com/anomalyco/opencode/issues/35265)**  
   *Comments: 9*  
   Rate-limiting errors persist despite previous fixes in #34613/#34657. User reports hitting limits on normal workflows. **Why it matters:** Indicates rate-limit configuration isn't granular enough for power users.

4. **[#33356 – [2.0] Unbounded growth of event table: 13GB+ opencode.db](https://github.com/anomalyco/opencode/issues/33356)**  
   *Comments: 6*  
   No retention/compaction on event-sourcing table. Two reported instances filled 22GB volumes to 99%. **Why it matters:** Silent disk-fill crash risk for long-running instances; affects both local and CI use cases.

5. **[#9955 – TUI has too much padding/vertical space](https://github.com/anomalyco/opencode/issues/9955)**  
   *Comments: 8 | 👍: 17*  
   Design complaint about wasted vertical space vs. competitors (Cursor, Claude Code). **Why it matters:** UX parity is critical for developer adoption; 17 upvotes suggests broad sentiment.

6. **[#37790 – Subscription paid but workspace shows "Insufficient balance"](https://github.com/anomalyco/opencode/issues/37790)**  
   *Comments: 2*  
   Payment processed but workspace remains locked. **Why it matters:** Directly blocks paying users; requires billing system investigation.

7. **[#37803 – TUI screen goes completely black when agent starts working](https://github.com/anomalyco/opencode/issues/37803)**  
   *Comments: 3*  
   Render loop silently stalls; process stays alive. **Why it matters:** Complete UI failure during key workflow; switching terminals temporarily restores display.

8. **[#7801 – Plan Mode + Question tool should auto-switch to Build mode](https://github.com/anomalyco/opencode/issues/7801)**  
   *Comments: 8 | 👍: 26*  
   After plan confirmation, AI asks same question instead of executing. **Why it matters:** Wastes tokens and breaks flow. 26 upvotes confirm strong demand.

9. **[#36285 – [2.0] managed-service restart causes reconnect herd and resource spikes](https://github.com/anomalyco/opencode/issues/36285)**  
   *Comments: 4*  
   Auto-update triggers mass TUI reconnection, cold-booting location graphs. **Why it matters:** Thundering herd problem in V2 architecture affects reliability.

10. **[#20699 – Agent sends duplicate message on simple prompts](https://github.com/anomalyco/opencode/issues/20699)**  
    *Comments: 5*  
    One message produces two assistant responses – one hidden, one empty. **Why it matters:** Core conversation logic bug; wastes tokens and confuses new users.

---

## Key PR Progress (Top 10)

1. **[#37696 – Adaptive thinking effort for Kimi family on Anthropic-compatible endpoints](https://github.com/anomalyco/opencode/pull/37696)**  
   Implements `thinking.type="adaptive"` for Kimi/Moonshot models. **Impact:** Enables optimized compute allocation for Kimi model family.

2. **[#37828 – Extract shared util package (@opencode-ai/util)](https://github.com/anomalyco/opencode/pull/37828)**  
   Major refactor moving shared host/runtime infrastructure out of Core. Rewrites CLI, Server, TUI, Simulation, SDK. **Impact:** Foundation for better modularity and independent package releases.

3. **[#35654 – Add --ignore-cr-at-eol to git diff commands](https://github.com/anomalyco/opencode/pull/35654)**  
   Fixes Windows CRLF issues where the Review window shows entire files as rewritten. **Impact:** Critical for Windows users; closes #27276 and #30357.

4. **[#37822 – Auto-recover corrupted SQLite database on startup](https://github.com/anomalyco/opencode/pull/37822)**  
   Handles `database disk image is malformed` crashes gracefully. **Impact:** Prevents user data loss; key reliability improvement.

5. **[#37832 – Fix legacy session panel refresh on session switch](https://github.com/anomalyco/opencode/pull/37832)**  
   Stale content persisted across project switches in the legacy panel. **Impact:** UX fix for multi-project workflows.

6. **[#37831 – Parse immutable OIDC sub claims for GitHub Actions](https://github.com/anomalyco/opencode/pull/37831)**  
   Handles new GitHub Actions OIDC format with `@id` suffixes. **Impact:** CI/CD compatibility for users on newer GitHub Actions runner versions.

7. **[#37830 – Register "Open Project" shortcut in new layout](https://github.com/anomalyco/opencode/pull/37830)**  
   Fixes `cmd+o` not working in the new UI layout. **Impact:** Restores basic keyboard navigation.

8. **[#37827 – Dismiss session sidebar on selection for narrow displays](https://github.com/anomalyco/opencode/pull/37827)**  
   Mobile-responsive fix; auto-closes sidebar on session select. **Impact:** Better mobile/web TUI experience.

9. **[#36286 – Remove dead session renderer code](https://github.com/anomalyco/opencode/pull/36286)**  
   Cleans up old AssistantMessage/ExplorationSummary rendering path. **Impact:** Reduces code debt; simpler rendering pipeline.

10. **[#37696 – Adaptive thinking effort for Kimi family (also listed above)](https://github.com/anomalyco/opencode/pull/37696)**  
    *(Duplicate entry – unique PR, but already described above)*

---

## Feature Request Trends

Based on analysis of 30+ open issues, three major directions emerge:

1. **Model/Provider Auto-Discovery**  
   Multiple issues (#6231, #37656) ask for automatic provider detection and model enumeration. The community wants "set and forget" config for local providers.

2. **Session Lifecycle Management**  
   Three related requests: Suspend/Resume agents (#27511), subagent session resumption (#36654), and proper session scoping for V2 (#36441–#36445). Users want persistent, resumable conversations.

3. **Mode Flow Automation**  
   Plan→Build auto-switch (#7801, #37789) has 26 upvotes. Users want AI to automatically transition from planning to execution after user confirmation, reducing token waste from repeated confirmation questions.

---

## Developer Pain Points

- **Billing/Subscription Sync Failures** – Multiple reports (#37790, #31403) of paid subscriptions not reflecting in workspace balances. Stripe payment success ≠ workspace unlock.
- **UI Rendering Regressions** – Black TUI screens (#37803), invisible scrollbars, excessive padding (#9955). Stability regressions frustrate daily users.
- **Database Bloat** – 13GB+ opencode.db files (#33356) with no retention policy. Silent disk fills are a reliability emergency.
- **Windows ARM64 Incompatibility** – TUI completely broken on native ARM64 builds (#19130). Could block Copilot+ PC adoption.
- **Confusing Token Waste** – Duplicate messages (#20699), mode confirmation loops (#7801), and validation re-asks (#37789) all lead to unnecessary API costs.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-20

## Today's Highlights

A high-velocity day with **30+ issues and 9 PRs** updated in the last 24 hours, dominated by bug-fix velocity and provider expansion. Critical stability fixes landed for undefined `assistant.usage` crashes (#6819, #6818), a regression around orphaned tool results causing unrecoverable 400 errors (#6832), and promptless session model restoration bugs (#6822). On the feature side, Upstage (Solar LLMs) was added as a built-in provider, and GPT-5.6 Codex context windows were aligned to official defaults.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#6832 — Orphan toolResult survives compaction → unrecoverable 400**  
   A regression on pi 0.80.10 where long sessions become permanently broken after compaction, reproducing #4570/#1764. High community engagement (👍1).  
   [View](https://github.com/earendil-works/pi/issues/6832)

2. **#6872 — High CPU usage writing 500+ line files**  
   100% CPU spike when generating/editing large markdown files. Impactful for anyone working with documentation or code generation.  
   [View](https://github.com/earendil-works/pi/issues/6792)

3. **#6210 — `/scoped-models` can't select IDs containing brackets**  
   Custom model selectors break on bracket characters (e.g., `custom/bracketed-model[1m]`). Affects users with non-standard provider model names.  
   [View](https://github.com/earendil-works/pi/issues/6210)

4. **#1871 — Misleading "No API key found" during parallel startup lock contention**  
   When `pi-subagents` launch concurrently, lock conflicts surface as false auth errors. Long-standing issue (March 2026) but still relevant for multi-agent setups.  
   [View](https://github.com/earendil-works/pi/issues/1871)

5. **#6774 — Ctrl+G external editor slow with crowded `os.tmpdir()`**  
   Temp file writes flood system tmp directory. Proposed fix: use `mkdtemp` subdirectory. Affects developer workflow responsiveness.  
   [View](https://github.com/earendil-works/pi/issues/6774)

6. **#6833 — Request: hide scroll navigation help**  
   Scroll-up UI overlay covers conversation content. Community requests a configurable toggle.  
   [View](https://github.com/earendil-works/pi/issues/6833)

7. **#6819 — `assistant.usage` undefined crashes session permanently**  
   DeepSeek V4 and other providers omitting usage data causes cascading crashes in token estimation functions. Session becomes unusable. Critical stability issue.  
   [View](https://github.com/earendil-works/pi/issues/6819)

8. **#6822 — Promptless sessions restore default model over persisted state**  
   Reopening a session with `model_change` but no messages overwrites the model selection. Silent data loss for resumed sessions.  
   [View](https://github.com/earendil-works/pi/issues/6822)

9. **#6820 — Queued message dropped after threshold auto-compaction**  
   Typing during compaction leads to "Agent is already processing" and lost input. Workflow friction for interactive users.  
   [View](https://github.com/earendil-works/pi/issues/6820)

10. **#6817 — `find` returns no results for path patterns on Windows**  
    Glob patterns with path separators (`src/**/*.ts`) fail on Windows. Platform-specific regression.  
    [View](https://github.com/earendil-works/pi/issues/6817)

## Key PR Progress

1. **#6828 — Support OpenCode Go Responses models**  
   Registers OpenAI Responses API for OpenCode Zen Go models. Type-safe provider declaration.  
   [View](https://github.com/earendil-works/pi/pull/6828)

2. **#6840 — Add shared `contentText` utility**  
   Extracts text content from AI SDK responses. Foundation for cleaner content handling across providers.  
   [View](https://github.com/earendil-works/pi/pull/6840)

3. **#6834 — Share UUIDv7 generation across packages**  
   Moves UUIDv7 to `pi-ai` and sets as default for Codex requests without session IDs. Improves request deduplication.  
   [View](https://github.com/earendil-works/pi/pull/6834)

4. **#6837 — Align GPT-5.6 Codex context to 272K**  
   Fixes overestimated context window (previously 372K) to match official client defaults. Keeps pricing tiers intact.  
   [View](https://github.com/earendil-works/pi/pull/6837)

5. **#6775 — Retry on compaction/branch summarization failures**  
   Adds automatic retry logic for transient failures during compaction. UI feedback pending maintainer review.  
   [View](https://github.com/earendil-works/pi/pull/6775)

6. **#836 — ACP mode for editor integration**  
   Agent Client Protocol support via `--mode acp` flag. Tested working with Zed and JetBrains IDEs. Major integration milestone.  
   [View](https://github.com/earendil-works/pi/pull/836)

7. **#6824 — Add Upstage (Solar LLMs) as built-in provider**  
   Four new models: `solar-mini`, `solar-pro2`, `solar-pro3-mini`, `solar-pro3`. Competitive pricing for reasoning and lightweight tasks.  
   [View](https://github.com/earendil-works/pi/pull/6824)

8. **#6818 — Guard against undefined `assistant.usage`**  
   Fixes the critical crash bug reported in #6819. Prevents session bricking when providers omit usage data.  
   [View](https://github.com/earendil-works/pi/pull/6818)

9. **#6823 — Duplicate Upstage provider PR (closed)**  
   #6824 appears to be the canonical version; #6823 was closed in favor.  
   [View](https://github.com/earendil-works/pi/pull/6823)

10. **#6836 — Observable retry lifecycle for pi-agent-core consumers**  
    Exposes `auto_retry_start`, `auto_retry_end`, `willRetry` for extension developers building on top of agent core.  
    [View](https://github.com/earendil-works/pi/issues/6836)

## Feature Request Trends

- **Editor and IDE integration** — ACP mode (#836) and configurable message rendering API (#6821) point toward deeper editor embedding.
- **Remote/local model flexibility** — LAN model server auto-discovery (#6305), SSH remote container support (#5341), and Upstage provider addition (#6824) show demand for diverse deployment topologies.
- **Extension hooks and observability** — Multiple requests for raw response stream hooks (#3605), batch tool-call judgment (#6816), and retry lifecycle observability (#6836, #6827).
- **User interface customization** — Hide scroll navigation (#6833), muted table borders (#6826), and manual retry commands (#6810) reflect desire for configurable UX.
- **Provider compatibility** — Copilot Enterprise compaction fix (#6768), DeepSeek V4 usage handling (#6819), and GPT-5.6 context alignment (#6838) indicate ongoing provider fragmentation pain.

## Developer Pain Points

1. **Session corruption and unrecoverable errors** — Orphan tool results (#6832), undefined usage crashes (#6819), and promptless model restoration bugs (#6822) create permanent session loss scenarios.
2. **Platform inconsistency** — Windows glob pattern failures (#6817) and temp directory behavior (#6774) highlight cross-platform testing gaps.
3. **Concurrency and startup issues** — Parallel lock contention (#1871), queued message drops during compaction (#6820), and single-point-of-failure update checks (#6675) degrade reliability in multi-agent or interactive workflows.
4. **Provider edge cases** — Bracket characters in model IDs (#6210), missing usage data (#6819), and insufficient retry mechanisms (#6810) show the cost of provider diversity.
5. **Performance at scale** — 100% CPU on 500+ line files (#6792) and unnecessary full-session reads (#6793) indicate scaling bottlenecks in core operations.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-20

## Today's Highlights
A major v0.20.0 release ships with daemon log rotation and a packed autofix release candidate (v0.20.1-preview.7215) lands label-driven takeover. On the bug front, the community is grappling with a stubborn subagent model-mutation recurrence (#7156) and a daemon SSE subscriber leak (#7238) that can take down the entire daemon. The long-awaited opt-in `web_search` tool has finally landed as a PR (#7215), and a new worktree-isolation feature for the Web Shell (#7221) promises safer parallel task execution.

## Releases
**v0.20.0** — A stable release with no known breaking changes. The complete change list (partial) includes `feat(cli): Add bounded daemon log rotation` by @doudouOUC. Full changelog: [v0.20.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)

**v0.20.1-preview.7215** — A preview release containing `feat(autofix): label-driven takeover and release` and a fix for `forced-dispatch green no-op` by @wenshao. [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.20.0...v0.20.1-preview.7215)

## Hot Issues (10 noteworthy)

1. **[#7156](https://github.com/QwenLM/qwen-code/issues/7156) — Bug: Subagent mutates main session model (recurrence after #7119)** [P1, OPEN]  
   The supposedly fixed model-override clearing bug has resurfaced through a different code path. During subagent execution, the main session's model silently switches to the subagent's model, causing fatal 400 errors. High community engagement (11 comments), shows the fix was incomplete.

2. **[#4748](https://github.com/QwenLM/qwen-code/issues/4748) — Optimize daemon cold start and fast-path latency** [CLOSED]  
   Tracks a 2.5s daemon cold-start gap (vs. 0.7s CLI). Substantial optimization has been done on the listener/health path, but remaining work is tracked elsewhere. 11 comments indicate broad interest.

3. **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) — MCP server never successfully gets tool/resource listing** [P2, OPEN]  
   A frustrating out-of-the-box failure: authentication works but tool listing times out. MCP integration is a key differentiator for qwen-code, so this is a high-impact bug.

4. **[#6569](https://github.com/QwenLM/qwen-code/issues/6569) — Improve subagent observability** [P2, OPEN]  
   Real-time execution visibility and manual intervention for subagents. A recurring theme: users want to see what subagents are doing and intervene when needed.

5. **[#6237](https://github.com/QwenLM/qwen-code/issues/6237) — Plan Mode content leakage in subsequent responses** [P2, OPEN]  
   Plan content leaks into follow-up assistant responses after `exit_plan_mode`. A disruptive UX problem that undermines plan mode's reliability.

6. **[#7238](https://github.com/QwenLM/qwen-code/issues/7238) — RestSseTransport leaks SSE subscribers until daemon is unusable (HTTP 429)** [P2, OPEN]  
   Easy to trigger in normal SDK usage: failing to close SSE connections on normal iterator exit causes daemon-wide outages. A critical daemon-reliability issue.

7. **[#7139](https://github.com/QwenLM/qwen-code/issues/7139) — Windows: Docker sandbox passes invalid workspace cwd to ACP shell tools** [P1, OPEN]  
   Breaking Windows support for `qwen serve` Docker sandbox. All shell tool calls fail with `chdir(2) failed`. High priority, low commentary (2 comments) — Windows users may not have noticed yet.

8. **[#7001](https://github.com/QwenLM/qwen-code/issues/7001) — Allow viewing full plan when exit_plan_mode confirmation is truncated** [CLOSED]  
   Users need a way to see the full plan before approving when truncation kicks in. A quality-of-life enhancement that got positive traction.

9. **[#6996](https://github.com/QwenLM/qwen-code/issues/6996) — Custom OpenAI provider always fails with generic 'Connection error'** [P2, CLOSED]  
   The real error cause is discarded before logging, making it impossible to debug custom provider setups. A systemic logging issue.

10. **[#7216](https://github.com/QwenLM/qwen-code/issues/7216) — Add multilingual evaluation baseline for channel memory recall** [P2, OPEN]  
    Proposes a deterministic evaluation baseline covering 36 labeled cases (English, Chinese, Japanese, Korean, mixed-script, etc.). Signals the team is investing in channel memory quality measurement.

## Key PR Progress (10 important)

1. **[#7215](https://github.com/QwenLM/qwen-code/pull/7215) — Opt-in built-in web_search (DashScope Responses API)** [OPEN]  
   Brings back a dedicated `web_search` tool backed by DashScope's server-side search. Opt-in, off by default, works with existing Bailian API keys — no MCP server hunting. This addresses a long-standing feature gap.

2. **[#7221](https://github.com/QwenLM/qwen-code/pull/7221) — Worktree-isolated sessions for parallel tasks in Web Shell** [CLOSED]  
   Enables multiple tasks in parallel within the same workspace using git worktrees. Keeps the main working directory clean. A major Web Shell enhancement.

3. **[#7239](https://github.com/QwenLM/qwen-code/pull/7239) — Estimate reasoning_tokens when provider omits them** [OPEN]  
   Adds fallback estimation for thinking tokens from normalized reasoning text. Critical for accurate stats with providers like `llama.cpp` that don't report `reasoning_tokens`.

4. **[#7237](https://github.com/QwenLM/qwen-code/pull/7237) — Fence concurrent ACP session writers** [OPEN]  
   Prevents cross-process writing conflicts in ACP sessions via atomic hard-link leases. A P0a reliability fix extracted from a larger patch.

5. **[#7256](https://github.com/QwenLM/qwen-code/pull/7256) — Strip Qwen-internal daemon secrets from child process env** [OPEN]  
   Fixes a security vulnerability where shell subprocesses inherited `QWEN_SERVER_TOKEN`. An agent-run `printenv QWEN_SERVER_TOKEN` could exfiltrate the daemon bearer credential.

6. **[#7257](https://github.com/QwenLM/qwen-code/pull/7257) — Abort SSE request on iterator exit** [OPEN]  
   Fixes the daemon subscriber leak (#7238) by reliably releasing HTTP connections when consumers stop reading. A direct fix for daemon-wide outages.

7. **[#7258](https://github.com/QwenLM/qwen-code/pull/7258) — Yield to single-slot background agents** [OPEN]  
   Makes the main agent wait when a background subagent takes the only available background slot. Addresses the resource contention issue in #7254.

8. **[#7248](https://github.com/QwenLM/qwen-code/pull/7248) — Enforce Plan mode entry boundary** [OPEN]  
   Makes `enter_plan_mode` an execution boundary in multi-tool batches. Prevents the model from ignoring the mode switch and continuing with same-batch tools.

9. **[#7250](https://github.com/QwenLM/qwen-code/pull/7250) — Restart safely for automatic updates** [OPEN]  
   Automatic updates now restart at a safe idle boundary, install after process exit, and resume the durable session. A polished OTA story.

10. **[#7204](https://github.com/QwenLM/qwen-code/pull/7204) — Git commit history browser for Web Shell** [OPEN]  
    Adds a read-only Git log viewer with expandable details, copy-SHA, and pagination. A practical tool for users managing workspaces via the Web Shell.

## Feature Request Trends
- **Subagent observability** is the hottest topic: users want real-time streaming, execution traces, and the ability to intervene in running subagents (#6569, #7254).
- **Web search tooling** has finally been addressed (#7215), but the pattern of wanting actual web search (not `web_fetch`) has been requested multiple times (#4801, #3841).
- **Multilingual/regional support** is emerging: requests for specific Bailian region endpoints (#7252: `ap-southeast-1`), new model additions (#7198: `qwen3.8-max-preview`), and Catalan i18n updates (#7253).
- **Plan mode UX** remains a focus: full plan viewing (#7001), preventing content leakage (#6237), and enforcing plan-mode boundaries (#7248).

## Developer Pain Points
- **Recurring context-overflow/model-mutation bugs**: PR #7119 fixed one path, but #7156 shows the same class of bug through a different code path. Developers are frustrated that fixes are incomplete.
- **Daemon reliability under load**: SSE subscriber leaks (#7238) can take the entire daemon offline, and the daemon cold-start latency (#4748) remains a pain point despite improvements.
- **Custom provider debugging is opaque**: Generic "Connection error" messages with no root cause (#6996) make it nearly impossible to troubleshoot custom OpenAI-compatible providers.
- **MCP integration fragility**: MCP servers timing out (#7147) and `chdir` failures on Windows (#7139) suggest the tool ecosystem integration needs hardening.
- **Goal/plan mode blocking input**: The `/goal` loop in #7181 blocks all user input (including `/goal clear`) until the loop completes, which is a severe UX regression for power users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-20

## 1. Today's Highlights
A major "Blue Stage" localization and theming rollout landed today, making action blue (`#6AAEF2`) the default grammar and completing the identity-middle translation layer for session and route pickers. The team also shipped MCP hot-reload (`/mcp reload`), a safe conversation export (`/export`), and performance improvements including read-only call coalescing. Meanwhile, a critical Windows CLI argument parsing bug (#4564) and a v0.9.1 scroll issue (#4594) remain open for developer attention.

## 2. Releases
No releases in the last 24 hours.

## 3. Hot Issues (10 noteworthy)

1. **[#4042] feat: Environment-level tool sandboxing for sub-agents** (CLOSED)
   *Tracks runtime enforcement of `--disallowed-tools` across sessions, sub-agents, Fleet workers, and MCP servers.*
   Why it matters: This is a foundational security + reliability feature that prevents sub-agents from using restricted tools, critical for multi-agent workflows in untrusted environments. High community engagement (16 comments).
   — [Hmbown/CodeWhale Issue #4042](https://github.com/Hmbown/CodeWhale/issues/4042)

2. **[#1425] Execution of large text processing causes session freeze/deadlock** (OPEN)
   *300万-character novel analysis spawns 10 sub-agents, all hang on `agent_wait` timeout.*
   Why it matters: Core reliability bug in sub-agent orchestration for long-running parallel tasks. Affects users doing bulk data analysis.
   — [Hmbown/CodeWhale Issue #1425](https://github.com/Hmbown/CodeWhale/issues/1425)

3. **[#4568] Slash command (`/xxx`) response sluggish — regression from previous version** (OPEN)
   *New version introduces noticeable lag on all slash commands.*
   Why it matters: Regresses a core UX flow; suggests a performance optimization regression that needs urgent bisection.
   — [Hmbown/CodeWhale Issue #4568](https://github.com/Hmbown/CodeWhale/issues/4568)

4. **[#4564] `codewhale exec --auto`: --model and --toolsets flags consumed as single arg on Windows** (OPEN)
   *npx global install on Windows causes `--model` and `--toolsets` to be concatenated. Workaround: use env vars.*
   Why it matters: Blocks Windows users from using CLI flags correctly; suggests missing cross-platform argument parsing.
   — [Hmbown/CodeWhale Issue #4564](https://github.com/Hmbown/CodeWhale/issues/4564)

5. **[#4594] v0.9.1: Top bar / sidebar list does not scroll to the bottom** (OPEN)
   *10-item To-do list cannot be fully scrolled in viewport.*
   Why it matters: UI regression that breaks visibility of task items — a quality-of-life blocker for task-heavy sessions.
   — [Hmbown/CodeWhale Issue #4594](https://github.com/Hmbown/CodeWhale/issues/4594)

6. **[#4564] (see above)** — High signal for Windows compatibility pain.

7. **[#1425] (see above)** — Recurring theme: sub-agent reliability.

8. **[#4568] (see above)** — Community report of degraded performance.

9. **[#4042] (see above)** — Security sandboxing for multi-agent.

10. **[#4594] (see above)** — UI scroll bug in latest release.

## 4. Key PR Progress (10 important)

1. **[#4593] fix(tui): harden PowerShell invocation for safe Windows execution** (OPEN)
   *Adds `-NoLogo -NoProfile -NonInteractive` flags and captures `$LASTEXITCODE` for all PowerShell spawns.*
   Why it matters: Directly addresses Windows reliability concerns raised in the community.
   — [Hmbown/CodeWhale PR #4593](https://github.com/Hmbown/CodeWhale/pull/4593)

2. **[#4590] feat(tui): localize session and route picker surfaces** (CLOSED)
   *Completes Blue Stage identity-middle localization: session picker status, errors, metadata, provider lists with localized labels.*
   Why it matters: Major UX milestone for i18n, enabling non-English users to navigate core surfaces.
   — [Hmbown/CodeWhale PR #4590](https://github.com/Hmbown/CodeWhale/pull/4590)

3. **[#4588] feat(mcp): hot-reload the live tool pool** (CLOSED)
   *Routes `/mcp reload` through engine-owned pool, atomically adopts changed configs, preserves runtime-added servers.*
   Why it matters: Eliminates restart requirement for MCP tool changes, a high-productivity win for dynamic environments.
   — [Hmbown/CodeWhale PR #4588](https://github.com/Hmbown/CodeWhale/pull/4588)

4. **[#4585] perf(tui): coalesce repeated read-only calls** (CLOSED)
   *Deduplicates identical read-only tool calls within a single user turn, preserving one result per request.*
   Why it matters: Reduces token waste and latency when multiple model turns request the same data.
   — [Hmbown/CodeWhale PR #4585](https://github.com/Hmbown/CodeWhale/pull/4585)

5. **[#4584] perf(tui): keep debt gate out of system prefix** (CLOSED)
   *Moves changing SlopLedger gate from fingerprinted system prompt to user-turn tail, avoiding cache busting.*
   Why it matters: Stabilizes system prompt fingerprint for better prompt caching efficiency.
   — [Hmbown/CodeWhale PR #4584](https://github.com/Hmbown/CodeWhale/pull/4584)

6. **[#4583] feat(tui): make Blue Stage the default grammar** (CLOSED)
   *Action blue (`#6AAEF2`) becomes primary interaction accent; Signal Gold reserved for human-attention moments.*
   Why it matters: Establishes a consistent, accessible visual language across the entire UI.
   — [Hmbown/CodeWhale PR #4583](https://github.com/Hmbown/CodeWhale/pull/4583)

7. **[#4582] fix: bypass MCP tool deferral when trust_mode or Bypass approval is active** (CLOSED)
   *Fixes MCP tools not appearing in Full Access Agent mode despite `trust_mode=true`.*
   Why it matters: Unblocks power users running in YOLO/trust mode who rely on MCP tools.
   — [Hmbown/CodeWhale PR #4582](https://github.com/Hmbown/CodeWhale/pull/4582)

8. **[#4581] feat(tui): export safe structured conversations** (CLOSED)
   *Clipboard-first `/export` projects authoritative API message stream; omits hidden instructions and redacts secrets.*
   Why it matters: Enables safe sharing and debugging of conversations without leaking system prompts or credentials.
   — [Hmbown/CodeWhale PR #4581](https://github.com/Hmbown/CodeWhale/pull/4581)

9. **[#4589] feat(tui): add quiet behavioral guidance** (CLOSED)
   *Five action-triggered tips for planning, background receipts, input clears, MCP failure recovery.*
   Why it matters: Improves discoverability for new users without overwhelming them.
   — [Hmbown/CodeWhale PR #4589](https://github.com/Hmbown/CodeWhale/pull/4589)

10. **[#4579] feat(web): add provider-native search backend** (CLOSED)
    *Gates provider-native web search on exact three-state route capability facts for OpenAI, Anthropic, xAI.*
    Why it matters: Adds first-class search integration for major providers with proper capability detection.
    — [Hmbown/CodeWhale PR #4579](https://github.com/Hmbown/CodeWhale/pull/4579)

## 5. Feature Request Trends

- **Multi-agent orchestration reliability** (Issue #1425): Users pushing large-scale parallel sub-agent workloads need better timeout handling, progress visibility, and completion guarantees.
- **MCP tool hot-reload and discovery** (PR #4588, Issue #4042): Dynamic tool lifecycle management is a top priority — users want to add/remove tools without restarting sessions.
- **Provider-native search and citation** (PR #4579, PR #4580): Tight integration with OpenAI/Anthropic/xAI search backends, with citation evidence in outputs.
- **Structured conversation export** (PR #4581): Demand for clipboard-first, safely redacted export of full conversation histories for debugging and sharing.
- **First-run UX and discoverability** (PR #4586, PR #4589): New users need gentle onboarding with `/help`, `Ctrl+K`, and contextual tips.

## 6. Developer Pain Points

- **Windows CLI argument parsing** (Issue #4564): Persistent cross-platform CLI issues — `--model` and `--toolsets` flags are concatenated on Windows, forcing env var workarounds. High friction for Windows-first developers.
- **Sub-agent timeout/deadlock on large tasks** (Issue #1425): Parallel sub-agent processing hangs on `agent_wait` without clear error messages. Developers working with large datasets are blocked.
- **Slash command latency regression** (Issue #4568): Core UX flow regressed from near-instant to noticeable delay. Community suspects a performance optimization reversal.
- **v0.9.1 scroll bug in sidebar** (Issue #4594): UI regression breaking basic list navigation. Blocks task management in sessions with many items.
- **No releases in last 24 hours**: Despite 35 open PRs and active issue activity, no official release tag has shipped — developers wanting fixes must build from source or wait for a release cycle.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*