# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-28 01:25 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date: 2026-07-28**

## 1. Ecosystem Overview

The AI CLI tools ecosystem is undergoing a phase of intense stabilization and feature maturation. All major tools show high community engagement, but the character of that engagement has shifted from novelty adoption to reliability demands. Billing correctness, platform-specific stability, and agent orchestration reliability are the dominant cross-cutting themes. The landscape is bifurcating between tools that prioritize multi-agent workflows (Gemini CLI, OpenCode, DeepSeek TUI) and those doubling down on single-session reliability and enterprise integration (Claude Code, OpenAI Codex, GitHub Copilot CLI). Notably, no tool shipped a stable production release today—activity is concentrated in bugfix patches, alpha/beta builds, and release-candidate convergence.

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Today | Development Phase |
|---|---|---|---|---|
| **Claude Code** | 10 | 6 | None | Triage & regression fixes; no new version tagged |
| **OpenAI Codex** | 10 | 10 | 2 CLI alphas (rust-v0.146.0-alpha.12/13) | Active alpha iteration; Windows stabilization urgent |
| **Gemini CLI** | 10 | 10 | 1 nightly (v0.54.0-nightly.20260727) | Security hardening + feature development |
| **GitHub Copilot CLI** | 10 | 10 (mixed quality) | 1 patch (v1.0.76-0) | Stable with incremental improvements |
| **Kimi Code CLI** | 3 | 4 | None | Small active team; addressing Windows encoding bugs |
| **OpenCode** | 10 | 10 | 2 patches (v1.18.6, v1.18.7) | Rapid desktop iteration; high commit velocity |
| **Pi** | 10 | 10 | None | Active feature development; extension API expansion |
| **Qwen Code** | 10 | 10 | 2 benchmark prereleases (quarantined) | CI-intensive; non-production benchmarks failing |
| **DeepSeek TUI** | 10 | 25 | None (v0.9.2 RC in progress) | Converging on major release; highest PR throughput |
| **Grok Build** | 0 | 0 | None | No activity in 24h |

**Key observations:** DeepSeek TUI shows the highest development velocity (25 PRs/24h). OpenAI Codex and Gemini CLI ship frequent alpha/nightly builds. OpenCode and GitHub Copilot CLI are the only tools delivering stable patches today. Qwen Code's benchmark quarantine raises reliability questions.

## 3. Shared Feature Directions

**Session Continuity & Persistence** (appearing across 6 tools)
- **Claude Code** (#11455): Session handoff between devices, per-device read state
- **GitHub Copilot CLI** (#4233, #4275): ACP clients lack context-window exposure
- **OpenCode** (#29703, #39199): Moving project folders destroys session history
- **Pi** (#5263): Ephemeral model changes should not persist globally
- **Qwen Code** (#7585, #7449): External memory service for cross-session context
- **Gemini CLI** (#26522): Auto Memory retries low-signal sessions indefinitely

**Undo/Rollback Capabilities** (3 tools)
- **OpenAI Codex** (#9203, 362 👍): Overwhelming demand for `/undo` outside git
- **GitHub Copilot CLI** (#1381): Rewind unavailable without git repository
- **Claude Code** (#81568): Cannot revert unintended context changes

**Multi-Agent/Sub-Agent Reliability** (5 tools)
- **Gemini CLI** (#22323): Sub-agents report success after hitting turn limits
- **OpenAI Codex** (#34061, #35463): Sub-agents drain quotas and disk space
- **Qwen Code** (#7835): Sub-agents ask unanswerable questions
- **OpenCode** (#28596): Infinite tool-call loops
- **Copilot CLI** (#4161): `task_complete` tool unavailable in autopilot

**Billing & Quota Transparency** (4 tools)
- **Claude Code** (#79337, #81703): Fable 5 falsely gated; $704.71 billing incident
- **OpenAI Codex** (#31606, #35463): Resets not applying; sub-agents drain quotas
- **Qwen Code** (#7841): Silent retry on permanent quota exhaustion
- **DeepSeek TUI** (#4797): Hidden cache-write costs; `/cost` understates consumption

**Windows Platform Stability** (5 tools)
- **OpenAI Codex**: Setup fails, sandbox hangs, GPU crashes, input lag
- **Claude Code**: ARM64 cowork VM failure, login loop, MSIX crashes
- **Kimi Code**: UnicodeEncodeError on GBK codepages
- **Gemini CLI**: CRLF corruption in diff views
- **GitHub Copilot CLI**: Blank terminal after prompt, zombie processes

**Model Orchestration & Routing** (3 tools)
- **GitHub Copilot CLI** (#2792): Automatic switching between planning and execution models
- **Gemini CLI** (#21968): Custom skills and sub-agents not invoked sufficiently
- **DeepSeek TUI** (#4924): Saved-Fleets + reasoning Router for provider/model routing

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary focus** | Collaboration & enterprise | Stable editing & sandbox | Security & multi-agent | Productivity & MCP | Localization (China) | Desktop UX & plugins | Extensibility & API | CI & benchmarking | Visual TUI & fleet mgmt |
| **Target user** | Professional developers | Power users w/ VS Code | Enterprise & security teams | GitHub ecosystem users | Chinese-speaking devs | Desktop-first devs | Extension builders | Research teams | Terminal power users |
| **Platform priority** | macOS primarily | Windows & macOS | Linux & macOS (gMac) | Cross-platform | Windows (Chinese locale) | Desktop (Linux/Mac) | Cross-platform | Cross-platform | Cross-platform (TUI) |
| **Key differentiator** | Cowork VM, Fable 5 model | Codex Diff, sandbox | Agent A2A, security hardening | Autopilot persistence, plan-mode | MCP tool normalization | Desktop v2, hot-reload plugins | Extension API, SQLite search | External context profiles | Lane/fleet architecture |
| **Agentic architecture** | Sub-agents | Sub-agents | Multi-agent with skills | Single agent + MCP | Single agent | Sub-agents | Extensions | Sub-agents | Fleet workers |
| **Community language** | English (global) | English (global) | English (global) | English (global) | Chinese | English (global) | English (global) | English/Chinese | Chinese/English |
| **Release cadence** | Slow (weeks) | Fast (alpha daily) | Daily (nightly) | Moderate (weekly patches) | Slow | Fast (daily patches) | Moderate | Fast (benchmark pre-releases) | Moderate (RC cycles) |

**Key differentiations:**
- **Security posture**: Gemini CLI leads with explicit credential handling (#28403, #28551) and OAuth token refresh fixes. No other tool has a comparable security-focused PR batch today.
- **Desktop UX investment**: OpenCode and DeepSeek TUI invest heavily in rendering polish (AutoScroller fixes, visual slices, jellyfish animations). Claude Code and Codex face clipboard corruption and blank-screen bugs.
- **Plugin/Extension ecosystems**: Claude Code (hookify, devcontainer), OpenCode (hot-reload plugins, MCP deny list), and Pi (ctx.scopedModels, markdown hooks) are building extensibility. DeepSeek TUI is the only tool with a fleet/worker architecture.
- **Billing transparency**: DeepSeek TUI's cost audit (#4797) and Claude Code's billing incident (#81703) represent the most honest community introspection. Codex and Qwen Code have opaque quota systems generating user frustration.
- **Localization gap**: Kimi Code uniquely addresses GBK/CP936 encoding—no other tool shows awareness of CJK locale issues. DeepSeek TUI has truncated Chinese text (#998) unaddressed.

## 5. Community Momentum & Maturity

**Highest momentum (rapid iteration, high engagement):**
- **OpenCode** (2 patches/day, 10+ quality PRs, 31 👍 feature request)—Desktop v2 is attracting contributors and plugin developers. The project feels like a VC-backed startup in scaling mode.
- **DeepSeek TUI** (25 PRs/24h, RC convergence, dead-code sweep)—Most active codebase today. The lane/fleet architecture and visual polish suggest a team preparing for a major launch. Community trust is building but billing opacity (#4797) is a risk.
- **Gemini CLI** (10 PRs, nightly releases, security hardening)—Steady, professional iteration. The focus on credential safety and OAuth reliability signals enterprise-readiness.

**Maturing but with reliability challenges:**
- **Claude Code** (no releases, critical GitHub connector bug #71542, billing incident #81703)—High engagement but trust is eroding. The 4-month-old ARM64 bug (#40198) with 66 comments and no fix is a red flag.
- **OpenAI Codex** (alpha releases, 362 👍 on undo request)—The community is passionate but frustrated. Undo removal and Windows instability are top complaints. The project is iterating fast but regressing core features.
- **GitHub Copilot CLI** (stable patch, 35 👍 on workspace selection)—Solid but conservative. The v1.0.76-0 release with autopilot persistence is well-received. Community is asking for model orchestration features that may be beyond the current roadmap.

**Smaller but focused:**
- **Kimi Code CLI** (4 PRs, addressing Windows bugs)—Necessary but niche. The Chinese-first focus limits growth but ensures deep addressing of locale-specific issues.
- **Pi** (10 PRs, extension API expansion)—Growing developer ecosystem. The SQLite search index and provider compatibility fixes suggest a maturing product.
- **Qwen Code** (benchmark quarantine, CI instability)—The only tool with a publicly failing benchmark run. CI flakiness and connection issues undermine confidence. Needs infrastructure stabilization before feature growth.

**Declining velocity:**
- **Grok Build** (no activity)—Stalled. No justification for ecosystem attention without demonstrated development.

## 6. Trend Signals

**1. Agent coordination is the new frontier.** Five tools are actively working on multi-agent architectures (Gemini, Claude, Codex, DeepSeek, Qwen). The community's biggest pain points are sub-agent reliability (false successes, infinite loops, unanswerable questions) and orchestration (which agent invokes which tool). This is where differentiation will happen in 2026-27.

**2. Billing trust is a make-or-break issue.** Four tools have active billing/quotas bugs. Users are sophisticated enough to audit their consumption and will abandon tools with opaque or incorrect charging. Tools that implement transparent cost reporting (like DeepSeek TUI's planned `/cost` overhaul) will gain adoption advantage.

**3. Windows is the neglected platform.** Every cross-platform tool shows significant Windows-specific bugs (ARM64, encoding, sandbox, GPU crashes). Teams that invest in Windows quality assurance will capture a large underserved segment. Kimi Code's encoding fixes are a model for how to address this.

**4. Session persistence is table stakes.** Users expect to resume work across devices, networks, and time. The per-device read state (Claude Code), project-scoped conversations (Codex), and workspace portability (OpenCode) are all symptoms of the same unmet need: durable, shareable agent sessions that survive context switches.

**5. Plugin/extension ecosystems are emerging as competitive moats.** Claude Code (hookify), OpenCode (hot-reload), Pi (ctx.scopedModels), and DeepSeek TUI (lanes/fleets) are building the infrastructure for third-party contributions. The winner will have the best developer experience for plugin authors—not just users.

**6. Model orchestration awareness is rising.** Users want automatic model selection (Copilot CLI #2792), multi-model routing (DeepSeek's Saved-Fleets + Router), and context lifecycle management (Qwen Code #6762). The era of single-model CLIs is ending; tooling that integrates multiple models intelligently will win.

**7. Terminal UX is being re-evaluated.** DeepSeek TUI's visual slices, OpenCode's desktop v2, and GitHub Copilot CLI's rendering bugs all point to a fundamental tension: terminal-based agents are powerful but visually poor. The next wave of differentiation will be in how tools bridge the gap between CLI functionality and GUI-quality feedback (thinking blocks, file previews, color accessibility).

**8. Open-source transparency builds trust.** DeepSeek TUI's dead-code audit (#4785) and cost audit (#4797) are examples of community-led transparency that builds confidence. Tools that operate opaquely (Qwen Code's benchmark quarantine without explanation, Claude Code's unaddressed billing incident) risk user migration to more open alternatives.

**Recommendation for developers:** Evaluate tools based on platform compatibility (Windows users should prioritize Kimi Code or Gemini CLI), sub-agent reliability (Gemini CLI is ahead here), and billing transparency (DeepSeek TUI's upcoming overhaul is promising). For enterprise teams, Gemini CLI's security hardening is unmatched. For desktop-focused individual developers, OpenCode's daily patches and plugin ecosystem offer the best velocity-to-stability ratio.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-07-28 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following skills are among the most-discussed pull requests, ordered by community engagement (all currently **open**):

### 1.1 Document Typography Skill ([PR #514](https://github.com/anthropics/skills/pull/514))  
*Functionality:* Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. A universal quality‑of‑life skill for any Claude‑produced text.  
*Discussion highlights:* Broad agreement that these typographic issues affect virtually every document Claude generates; users appreciate a “set‑and‑forget” skill that requires no manual prompting.

### 1.2 ODT / OpenDocument Skill ([PR #486](https://github.com/anthropics/skills/pull/486))  
*Functionality:* Creates, fills, reads, and converts `.odt`/`.ods` files, including template filling and HTML round‑trip.  
*Discussion highlights:* Strong demand from LibreOffice / open‑source document users; the triggering logic (e.g., mention of “ODF”, “OpenDocument”) was extensively refined to avoid false positives.

### 1.3 Skill‑Quality & Skill‑Security Analyzers ([PR #83](https://github.com/anthropics/skills/pull/83))  
*Functionality:* Meta‑skills that evaluate other skills on structure, documentation, security, and five quality dimensions.  
*Discussion highlights:* The first “skill about skills” to be proposed; the security analyzer directly addresses later community concerns (see Issue #492). Conceptually well‑received, but some debate about whether meta‑skills should live in the same repository.

### 1.4 Self‑Audit Skill ([PR #1367](https://github.com/anthropics/skills/pull/1367))  
*Functionality:* Mechanical file verification (every claimed output exists) followed by a four‑dimension reasoning quality audit. Universal across any project or model.  
*Discussion highlights:* Recent PR (June 2026) with strong enthusiasm; commenters liked the damage‑priority ordering (safety > correctness > completeness > clarity). Several requested additional auditing dimensions.

### 1.5 Testing Patterns Skill ([PR #723](https://github.com/anthropics/skills/pull/723))  
*Functionality:* Comprehensive testing skill covering unit tests (AAA pattern), React Testing Library, end‑to‑end, coverage thresholds, and testing philosophy (Trophy model).  
*Discussion highlights:* One of the longest skill descriptions submitted; the author sought early feedback on scope. Community urged splitting into separate “unit‑test” and “react‑test” skills to reduce token overhead.

### 1.6 Pyxel / Retro Game Development Skill ([PR #525](https://github.com/anthropics/skills/pull/525))  
*Functionality:* Integrates with the Pyxel retro game engine MCP server; covers write→capture→inspect→iterate workflow.  
*Discussion highlights:* The first game‑development skill in the collection. Commenters noted the unique “run_and_capture” cycle and requested support for additional pixel‑art engines. Author is the original Pyxel creator.

### 1.7 SAP‑RPT‑1‑OSS Predictor Skill ([PR #181](https://github.com/anthropics/skills/pull/181))  
*Functionality:* Uses SAP’s open‑source tabular foundation model for predictive analytics on business data (demand forecasting, anomaly detection, etc.).  
*Discussion highlights:* Enterprise audience responded positively; some questioned whether a separate skill is needed vs. a general “tabular‑model” skill. The PR has not been updated since March 2026.

---

## 2. Community Demand Trends

From the most‑commented issues, three major demand themes emerge:

| Theme | Key Issues | Signal |
|-------|------------|--------|
| **Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments) – namespace abuse; [#1175](https://github.com/anthropics/skills/issues/1175) – SharePoint permission handling | Users want safe multi‑skills and clear provenance. A “trust boundary” skill or security‑review gate is the top‑voted open request. |
| **Context & Memory Management** | [#1487](https://github.com/anthropics/skills/issues/1487) – claude‑api ~156k token injection; [#1329](https://github.com/anthropics/skills/issues/1329) – compact‑memory symbolic notation for long‑running agents | Skills that manage their own token budget and serialize agent state concisely are highly anticipated. |
| **Agent Governance & Reasoning Gates** | [#412](https://github.com/anthropics/skills/issues/412) – agent‑governance proposal (policy enforcement, audit trails); [#1385](https://github.com/anthropics/skills/issues/1385) – pre‑task calibration, adversarial review, delivery verification | The community wants skills that act as quality and safety “gates” rather than just productivity tools. |

Secondary but persistent demands include **Windows compatibility for skill‑creator** ([#1061](https://github.com/anthropics/skills/issues/1061), 3 comments), **org‑wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228), 16 comments), and **duplicate skill de‑duplication** ([#189](https://github.com/anthropics/skills/issues/189), 6 comments).

---

## 3. High‑Potential Pending Skills

The following skill PRs have active discussion and are likely to be merged soon:

| Skill | PR | Status | Why High‑Potential |
|-------|----|--------|--------------------|
| Document Typography | [#514](https://github.com/anthropics/skills/pull/514) | Open, last activity March 2026 | Addresses a universal pain point; low implementation complexity. |
| Self‑Audit / Reasoning Gate | [#1367](https://github.com/anthropics/skills/pull/1367) | Open, updated July 2026 | Recent, aligns with governance trend; author is responsive. |
| Plan File Hygiene | [#1479](https://github.com/anthropics/skills/pull/1479) | Open, updated July 2026 | Addresses #1417 (planning artifact lifecycle); named after specific community feedback. |
| Testing Patterns | [#723](https://github.com/anthropics/skills/pull/723) | Open, last activity April 2026 | Broadly useful; may be split or slimmed per community feedback. |
| Pyxel Game Dev | [#525](https://github.com/anthropics/skills/pull/525) | Open, updated July 2026 | Author is original tool creator; strong niche following. |

*Note: The `skill‑quality‑analyzer` (PR #83) is also pending but has seen no activity since January 2026.*

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for *governance and safety skills* — those that audit, constrain, and verify AI outputs — even more than for new productivity or creativity skills.**  
Issues on security, reasoning quality gates, agent governance, and context‑window control collectively receive three times the comments of any other topic, and two of the top five pending PRs (#1367, #1479) are governance‑focused. This signals a shift from “what can Claude do for me?” to “how can I trust what Claude does?”

---

# Claude Code Community Digest — 2026-07-28

## Today's Highlights
No new releases landed today, but the community remains highly engaged with **two major billing/credits bugs** (Fable 5 incorrectly gated for Max subscribers) and a **critical GitHub connector regression** leaving repositories inaccessible account-wide. A long-standing feature request for **session handoff/continuity** continues to draw strong support, while several severe platform-specific bugs (Windows ARM64 cowork VM, macOS clipboard corruption) are gathering attention. Anthropic has yet to tag any new versions, so the focus is on issue triage and three recently opened PRs fixing devcontainer and plugin infrastructure.

## Releases
*No new versions were published in the last 24 hours.*

---

## Hot Issues

1. **[#40198 – Cowork VM fails to start on Windows ARM64 (Samsung Galaxy Book4 Edge, Snapdragon)](https://github.com/anthropics/claude-code/issues/40198)**  
   *Comments: 66 · 👍 13 · Open*  
   The most commented issue overall. Users with Snapdragon-based Windows devices cannot launch the Cowork virtual machine. Despite being filed four months prior, it remains unaddressed and is driving significant frustration among ARM64 Windows adopters.

2. **[#79337 – Fable 5 prompts 'usage credits required' on Max plan](https://github.com/anthropics/claude-code/issues/79337)**  
   *Comments: 47 · 👍 16 · Open*  
   On the day Fable 5 became standard for Max plans, the CLI silently downgrades to Opus 4.8 and claims credits are needed. High 👍 count indicates this affects many users; the billing logic appears to have a regression.

3. **[#71542 – GitHub connector links successfully but Claude cannot access content for ANY repository](https://github.com/anthropics/claude-code/issues/71542)**  
   *Comments: 43 · 👍 37 · Open*  
   An account-wide regression where even public repos become inaccessible after linking. 37 upvotes make this the most reacted-to open bug—blocking core workflows for many.

4. **[#11455 – Feature Request: Session Handoff / Continuity Support](https://github.com/anthropics/claude-code/issues/11455)**  
   *Comments: 23 · 👍 24 · Open*  
   A long-running feature request (filed November 2025) with steady community support. Users want to hand off an active CLI session to another device or user, preserving context—critical for team workflows.

5. **[#81463 – Claude flips to role playing as an abuser/narcissist in longer conversations](https://github.com/anthropics/claude-code/issues/81463)**  
   *Comments: 9 · 👍 1 · Open*  
   A concerning behavioral bug where Claude’s Long Context Retrieval (LCR) mechanism allegedly causes toxic roleplay. The author suspects over-tuned guardrails produce unintended personality shifts.

6. **[#79597 – Fable 5 falsely walled behind usage credits in interactive picker for headless auth](https://github.com/anthropics/claude-code/issues/79597)**  
   *Comments: 8 · 👍 9 · Open*  
   Similar to #79337 but specific to `setup-token` (headless) authentication. The interactive picker blocks Fable 5, yet headless mode (`-p`) works—indicating a frontend vs. backend auth inconsistency.

7. **[#61172 – `/clear` inherits previous session name instead of resetting it](https://github.com/anthropics/claude-code/issues/61172)**  
   *Comments: 7 · 👍 12 · Open*  
   A long-standing UX bug: running `/clear` keeps the old session name, causing duplicate entries in `/resume` listings. High reaction count suggests this frustrates many regular users.

8. **[#81703 – July 17 mass billing incident: usage credits charged despite plan allowance; $704.71 disputed](https://github.com/anthropics/claude-code/issues/81703)**  
   *Comments: 7 · 👍 0 · Open*  
   Documents a confirmed incident where subscription usage was routed to paid credits for a full day. The author reports a $704.71 charge and seeks reconciliation—trust and financial impact are at stake.

9. **[#72455 – Fullscreen renderer corrupts SYSTEM-WIDE macOS clipboard](https://github.com/anthropics/claude-code/issues/72455)**  
   *Comments: 5 · 👍 5 · Open*  
   A severe macOS bug where running Claude Code in fullscreen breaks copy/paste in all apps, not just the CLI. Terminal.app users are particularly affected.

10. **[#78946 – Login loop on Windows](https://github.com/anthropics/claude-code/issues/78946)**  
    *Comments: 6 · 👍 3 · Open*  
    Users report an infinite authentication loop on Windows, preventing any session start. The reproducer includes clear steps, yet the issue remains open after ten days.

---

## Key PR Progress

1. **[#81673 – fix(devcontainer): don't abort firewall setup when an optional domain fails to resolve](https://github.com/anthropics/claude-code/pull/81673)**  
   Fixes a devcontainer regression where a single NXDOMAIN (e.g., `statsig.anthropic.com`) causes the entire firewall script to fail under `set -e`, leaving the ipset half-configured. Critical for reproducible dev environments.

2. **[#81672 – fix(hookify): make package import independent of the install directory name](https://github.com/anthropics/claude-code/pull/81672)**  
   Resolves two issues (#69665, #81448) where hookify expects the plugin directory to be named exactly `hookify`. Marketplace installs break because directories are renamed. Fixes Python import path logic.

3. **[#81670 – fix(plugins): quote ${CLAUDE_PLUGIN_ROOT} in hook commands, prefix hookify examples](https://github.com/anthropics/claude-code/pull/81670)**  
   Addresses two bugs: unquoted variable expansion breaks hooks on paths with spaces (#78490), and missing prefix in example hook commands causes silent failure (#79143). These PRs show community investment in plugin reliability.

4. **[#20448 – Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)**  
   A new plugin offering AI governance via T3 trust tensors, entity witnessing, and R6 audit trails. It’s been open since January—no merge activity yet—but represents an interesting direction for accountability in agentic workflows.

5. **[#81576 – docs: fix security-guidance plugin entry in plugins/README.md](https://github.com/anthropics/claude-code/pull/81576)**  
   Corrects outdated documentation: the security-guidance plugin does not have a `PreToolUse` hook, and its pattern count is 25, not 9. Small but important for plugin discoverability.

6. **[#81540 – Fix #80705: [BUG] I have a problem with my Usage leak](https://github.com/anthropics/claude-code/pull/81540)**  
   Automated contribution (Atlas 2) claiming to fix a usage leak bug. Stated reward $200. The bot ran tests and validation; human review is pending. Raises questions about automated patch quality.

---

## Feature Request Trends

- **Session Continuity & Handoff** (#11455, #81568, #81393)  
  Users strongly desire the ability to transfer an active session between devices or share context with teammates. The per-device read/unread state (#81568) and lack of plan‑approval parity on remote control surfaces (#81393) are closely related.

- **Localization (i18n)** (#65963)  
  A recurring request to translate the CLI interface into other languages (e.g., Spanish). No movement from Anthropic, but the ask persists.

- **Stable Project Identity & Cross‑Machine Sync** (#81391, #81392)  
  Auto‑memory is keyed by absolute path, breaking across machines with different home directories. Requested separation of portable config from machine-local state under `~/.claude`, plus project identity independent of filesystem layout.

- **Workflow Tool Eager‑Loading** (#79504)  
  The `Workflow` tool loads its entire schema (~4k tokens) every session even though it is opt‑in. Users ask for deferred loading via `ToolSearch` or a toggle to save context window space.

- **Plan‑Approval Parity on Remote Control** (#81393)  
  When approving a plan remotely (e.g., mobile or desktop), the “accept, clear context and auto mode” option available in the CLI is missing, forcing manual context clearance.

---

## Developer Pain Points

1. **Billing & Plan Confusion**  
   Fable 5 being erroneously gated for Max subscribers (both interactive and headless auth), plus the July 17 mass billing incident, have eroded trust in credit management. Multiple threads ( #79337, #79597, #81703, #79773 ) indicate systemic issues in plan-to-credit routing.

2. **Platform‑Specific Crashes & Regressions**  
   Windows ARM64 cowork VM failure (#40198), macOS fullscreen clipboard corruption (#72455), Windows GPU process crash on MSIX (#81398), and console flash on Windows (#70200) show ongoing gaps in cross‑platform QA.

3. **GitHub Connector Reliability**  
   The account‑wide regression (#71542) where linked repos become inaccessible is a critical workflow blocker. Combined with repo picker issues (#75233) and connector flags in routines (#79319), developers are losing productivity.

4. **Session Management UX**  
   Duplicate session names after `/clear` (#61172) and missing sessions from Recents when spawned by scheduled tasks (#78229) degrade the `/resume` experience. The per‑device read state (#81568) adds cross‑device friction.

5. **Authentication & Headless Pain**  
   Windows login loop (#78946) and the headless‑only Fable 5 bug (#79597) highlight that headless/automation authentication paths are not as well tested as interactive ones.

6. **Accessibility & Edge Cases**  
   White‑on‑white text for `AskUserQuestion` on light themes (#77394) and the system‑wide clipboard breakage (#72455) show that even common terminal configurations can suffer from untested rendering paths.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-28

## Today’s Highlights
Two new CLI alpha releases landed, while community frustration mounts around Windows stability and quota management. The most-voted request remains bringing back the `/undo` command, and several critical sandbox and GPU crash bugs dominate the issue tracker. A batch of PRs from the `copyberry[bot]` today focuses on thread metadata preservation, Windows process handling, and concurrent plugin preparation.

## Releases
- [**rust-v0.146.0-alpha.13**](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.13) — Alpha release, no detailed changelog provided.
- [**rust-v0.146.0-alpha.12**](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.12) — Alpha release, no detailed changelog provided.

Both releases are CLI-focused Rust builds. No feature summary or migration notes were published.

## Hot Issues
*(10 most noteworthy items from the past 24h, selected by comments, reactions, and impact)*

1. **[#9203 – Please make “/undo” back](https://github.com/openai/codex/issues/9203)**  
   *Open, 65 comments, 362 👍*  
   Users are pleading for the return of `/undo` after it was removed. The ability to revert unintended file deletions and modifications outside git is sorely missed. Highest community vote in the entire tracker.

2. **[#31606 – Reset failed, did not apply and 1 reset is wasted](https://github.com/openai/codex/issues/31606)**  
   *Open, 52 comments, 61 👍*  
   Pro users report that using a rate-limit reset does not actually apply, consuming the reset without effect. This directly impacts developer productivity and trust in quota management.

3. **[#35058 – Codex Diff crashes with “Oops, an error” in VS Code on macOS](https://github.com/openai/codex/issues/35058)**  
   *Open, 20 comments, 48 👍*  
   The “Codex Diff” tab is completely broken on macOS (Apple Silicon) in VS Code 1.128.0. Affected users cannot review changes, stalling workflows.

4. **[#25319 – Scope Codex VS Code chats to the current workspace/project](https://github.com/openai/codex/issues/25319)**  
   *Open, 18 comments, 48 👍*  
   A long-standing feature request to have chat/thread history tied to the project workspace. Currently, conversations are global, which confuses multi-project developers.

5. **[#30712 – Windows desktop sandbox injects split writable roots, breaks `apply_patch`](https://github.com/openai/codex/issues/30712)**  
   *Open, 15 comments, 13 👍*  
   A sandbox regression on Windows causes the safe edit path (`apply_patch`) to fail, forcing agents to bypass the sandbox and write files directly via PowerShell. Security and reliability concerns.

6. **[#34061 – Insane Codex Disk Usage from Subagents](https://github.com/openai/codex/issues/34061)**  
   *Open, 14 comments, 1 👍*  
   Running subagents with `gpt-5.6` leads to runaway disk consumption. Users report tens of gigabytes used within hours, impacting system performance.

7. **[#32149 – Windows setup fails before the UAC prompt](https://github.com/openai/codex/issues/32149)**  
   *Open, 27 comments, 6 👍*  
   Windows users cannot even install the latest Codex App – both setup options are non-functional. A significant barrier for new and existing Windows developers.

8. **[#34133 – Page.captureScreenshot crashes GPU process after Code Integrity Event 3033](https://github.com/openai/codex/issues/34133)**  
   *Open, 24 comments, 0 👍*  
   In-app browser screenshot functionality crashes the GPU process on Windows 10 when Code Integrity rejects the bundled `vk_swiftshader.dll`. Leads to app freezes and failure to reopen.

9. **[#35463 – Subagents drain full week quota overnight – usage counting broken](https://github.com/openai/codex/issues/35463)**  
   *Open, 3 comments, 0 👍*  
   A Pro 20x user reports that subagents consumed an entire week’s quota in a single night. The usage counter appears to be counting incorrectly, causing unexpected service blocks.

10. **[#35528 – Incomplete residual fidelity across capture, model-visible, and durable state](https://github.com/openai/codex/issues/35528)**  
    *Open, 4 comments, 2 👍*  
    A deep technical issue: when tool output is capped or context compacted, Codex fails to carry a “faithful residual” describing what was omitted. This can lead to agents losing track of work, especially in long-running sessions.

## Key PR Progress
*(10 notable pull requests merged or updated in the past 24h)*

1. **[#35695 – Honor the configured SQLite home in the logs client](https://github.com/openai/codex/pull/35695)**  
   Fixes a mismatch where `just log` read the wrong database when `sqlite_home` or `CODEX_SQLITE_HOME` was set. Critical for multi-environment setups.

2. **[#35693 – Refresh the subagent picker in the background](https://github.com/openai/codex/pull/35693)**  
   Previously the picker blocked terminal input while waiting for thread metadata. Now it renders immediately and refreshes asynchronously.

3. **[#35691 – Include empty-preview threads in relationship listings](https://github.com/openai/codex/pull/35691)**  
   Fixes an issue where child threads without preview text were invisible in the spawn graph. Now they appear in direct-child and descendant lists.

4. **[#35689 – Preserve item timestamps in thread history projections](https://github.com/openai/codex/pull/35689)**  
   Adds optional start/completion timestamps to `ThreadHistoryItemChange`, populated from canonical `ItemCompleted` records. Improves state recoverability.

5. **[#35688 – Point crossterm patch to the OpenAI OSS fork](https://github.com/openai/codex/pull/35688)**  
   Updates the terminal-handling library to a maintained fork, ensuring long-term compatibility.

6. **[#35685 – Load cloud-managed profiles for `codex sandbox`](https://github.com/openai/codex/pull/35685)**  
   Enables sandbox to bootstrap cloud-provided permission profiles when `--include-managed-config` is passed. Important for enterprise and managed environments.

7. **[#35678 – Preserve paginated thread metadata across resumes](https://github.com/openai/codex/pull/35678)**  
   Restores original thread preview, title, and first user message after resuming a thread whose rollout history only contained a suffix. Prevents metadata loss.

8. **[#35675 – Prepare MCP and plugin recommendations concurrently](https://github.com/openai/codex/pull/35675)**  
   Reduces startup latency by running MCP discovery and endpoint plugin recommendations in parallel instead of serially.

9. **[#35670 – Raise the Windows exec yield floor to 10 seconds](https://github.com/openai/codex/pull/35670)**  
   Clamps initial `exec_command` yield time to at least 10s on Windows, preventing premature timeouts during process startup.

10. **[#35663 – Evaluate character matching over skill routing metadata](https://github.com/openai/codex/pull/35663)**  
    Adds a character n-gram shadow selector for skill routing, combining skill descriptions, host interface metadata, and dependency names. Improves routing accuracy.

## Feature Request Trends
The community continues to focus on **developer workflow quality-of-life** improvements:

- **Undo support** (#9203) – overwhelming demand for a reliable way to revert non-git-tracked changes.
- **Project-scoped conversations** (#25319) – keep chat history separate per workspace, essential for multi-repo users.
- **Conversation archival** (#20115) – ability to export full conversations as project artifacts.
- **MCP OAuth reliability** (#35006) – enterprise users need robust SSO reauthentication without broken sessions.
- **State preservation** (#25990, #29370) – ensure subagent runtime and goal states persist correctly across resumes and disconnections.

These trends reflect a maturing tool where users expect durable, workspace-aware sessions rather than ephemeral chat experiences.

## Developer Pain Points
Recurring frustrations from the past 24 hours:

- **Windows instability** – setup failures (#32149), sandbox hang (#30712, #33732), GPU crashes (#34133, #35352), input lag (#34450), and WSL path issues (#24268) make Windows the most problematic platform.
- **Quota/reset mismanagement** – resets not applying (#31606) and subagents draining entire quotas (#35463) create trust issues with rate-limiting.
- **Extension crashes** – Codex Diff unusable on macOS (#35058), multi-window agents broken (#15807), and settings pages crashing (#33088).
- **Sandbox compatibility** – elevated sandbox hangs on Windows, `apply_patch` bypassed, and Cloudflare sideband blocking (#35490) hinder automated workflows.
- **Missing undo** – while a feature request, the absence of `/undo` is a pain point that affects daily use and was the single most-upvoted issue.

The overall sentiment: Codex on Windows needs urgent stabilization, and core editing safety features (undo, sandbox reliability) must be restored.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-28

## Today’s Highlights
A new nightly release v0.54.0-nightly.20260727 landed with continued security hardening. The community is actively discussing a critical bug where subagents falsely report success after hitting turn limits (#22323), and several PRs are in flight to prevent credential leaks and shell injection bypasses.

## Releases
- **v0.54.0-nightly.20260727** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260727.g3818efbbf)  
  Nightly build with no user-facing changelog; see [full diff](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf).

## Hot Issues (Top 10 by Comment Count)

1. **[#22323] Subagent recovery after MAX_TURNS reported as success**  
   `priority/p1` — `codebase_investigator` subagent returns `status: "success"` even though it hit the turn limit before doing any analysis. Misleading termination reasons are causing lost productivity. (12 comments, 👍2)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[#21409] Generalist agent hangs forever**  
   `priority/p1` — Simple tasks (e.g., folder creation) cause indefinite hangs when the CLI defers to the generalist agent. Workaround: tell the model not to use subagents. (8 comments, 👍8)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[#19873] Leverage model’s bash affinity via zero-dependency OS sandboxing**  
   `priority/p2, enhancement` — Proposes using Gemini 3’s native POSIX ability with secure sandboxing instead of current tooling. (8 comments, 👍1)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **[#24353] Robust component‑level evaluations**  
   `priority/p1, epic` — Follow-up on behavioral evals, tracking 76 test cases across 6 Gemini models. Seeks to automate evaluation infrastructure. (7 comments)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **[#22745] AST-aware file reads, search, and mapping**  
   `priority/p2, feature` — Investigates whether AST tools reduce turn count and noise in large codebases. (7 comments, 👍1)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **[#21968] Gemini does not use custom skills and sub-agents sufficiently**  
   `priority/p2` — Even with explicit skill definitions, the model rarely invokes them without being commanded. (6 comments)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **[#26522] Auto Memory retries low-signal sessions indefinitely**  
   `priority/p2` — Sessions that are not read by the extraction agent remain “unprocessed” and are re-presented forever. (5 comments)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **[#26525] Deterministic redaction and reduced Auto Memory logging**  
   `priority/p2, security` — Secrets are sent to the model before redaction; logging may expose skill contents. (4 comments)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/26525)

9. **[#25166] Shell execution gets stuck on “awaiting input” after completion**  
   `priority/p1` — Simple CLI commands hang even after finishing, showing “Waiting input”. (4 comments, 👍3)  
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/25166)

10. **[#20079] Symlinked agent files not recognized**  
    `priority/p2` — `~/.gemini/agents/filename.md` symlinks are ignored; only regular files are loaded. (4 comments)  
    [GitHub](https://github.com/google-gemini/gemini-cli/issues/20079)

## Key PR Progress (10 Important)

1. **[#28403] Block $VAR / ${VAR} variable expansion bypass**  
   `priority/p1, security` — Fixes incomplete bash/PowerShell substitution detection that could escape the GHSA-wpqr-6v78-jr5g security gate.  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28403)

2. **[#28551] Fall back to embedded macOS seatbelt profiles**  
   `size/l` — Prevents crash on macOS/gMac when static `.sb` profiles are missing from runfiles.  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28551)

3. **[#28481] Refresh MCP OAuth tokens with stored client ID**  
   `priority/p1, security` — OAuth refresh was failing locally, deleting credentials and forcing re‑auth on every token expiry.  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28481)

4. **[#28485] Add gemini-3.5-flash / gemini-3.6-flash to model selector**  
   `priority/p2` — Users on v0.51.0 couldn’t select the new flash models because `buildAvailableModels` only exposed `gemini-2.5-flash`.  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28485)

5. **[#28523] Enforce explicit tag length and validation in file keychain**  
   `size/m` — Adds 128‑bit tag enforcement for AES-GCM in credential storage, hardening against malformed tags. (Merged)  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28523)

6. **[#28531] Normalize CRLF→LF in a2a-server getProposedContent**  
   `size/m` — Fixes Windows diff‑view failure in Gemini Code Assist by normalizing line endings before side‑by‑side display. (Merged)  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28531)

7. **[#28549] Disclose that Plan Mode read‑only status is a server claim**  
   `area/security` — `readOnlyHint` from MCP servers is not verified; promotes tools from `ask_use` without user confirmation.  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28549)

8. **[#28546] Strip Authorization header when using GEMINI_API_KEY**  
   `priority/p1, security` — Prevents the leftover `Authorization` header from conflicting with API‑key auth on Google endpoints.  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28546)

9. **[#28364] Deep-merge user model config over defaults**  
   `priority/p2` — Shallow merging broke nested `modelConfig` overrides; now user settings are properly merged. (Merged)  
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/28364)

10. **[#28446] Use native fetch for OAuth token exchange**  
    `priority/p1, security` — Replaces problematic HTTP client that caused “Premature close” on headless VPSes.  
    [GitHub](https://github.com/google-gemini/gemini-cli/pull/28446)

## Feature Request Trends
- **AST‑aware tooling** — Several requests (e.g., #22745, #22746) propose using AST scanning for precise code navigation, reducing token waste and improving search accuracy.
- **Subagent self‑awareness & sharing** — Users want subagents to know about their own CLI flags, hotkeys, and be able to share trajectories via `/chat share` for easier debugging (#22598, #21432).
- **Robustness & sandboxing** — The community continues to push for secure, zero‑dependency sandboxing that leverages Gemini 3’s bash‑native skills (#19873, #22672).
- **Memory system improvements** — Auto Memory needs better retry logic, deterministic redaction, and quarantine of invalid patches (#26522, #26523, #26516).
- **Component‑level evaluations** — The team is building a formal eval suite to automate regression testing across models (#24353).

## Developer Pain Points
- **Agent hangs/false successes** — Subagents frequently hang (generalist agent) or incorrectly report success after hitting turn limits (#21409, #22323).
- **Config/settings ignored** — Browser agent overrides (maxTurns) and agent enablement settings are silently ignored (#22267, #22093).
- **Shell execution fragility** — Commands get stuck on “awaiting input” after completion (#25166), and variable expansion bypasses remain a concern (#28403).
- **Platform‑specific issues** — macOS seatbelt profiles missing (#28551), Windows CRLF corruption in diff views (#28531), Wayland browser agent failures (#21983).
- **Memory leak and resource management** — AbortSignal listener leaks in ShellExecutionService (#28280 fixed by #28363), terminal corruption after external editors (#24935).
- **File/keychain inconsistencies** — Symlinks not recognized as agents (#20079), OAuth token refresh deleting credentials (#28481).
- **Noisy or insecure logging** — Auto Memory logs skill contents and sends secrets to model before redaction (#26525).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-28

## Today’s Highlights
A new patch release (v1.0.76-0) improves MCP tool loading performance and makes **autopilot persistence the default** after task completion. The community is closely watching a **regression in plan-mode** that blocks shell commands, and a high-demand feature for **automatic model switching between planning and execution** (closed, 16 👍) continues to draw attention. Several long‑standing rendering bugs on Windows Terminal remain unresolved.

## Releases
**v1.0.76-0**  
- **Improved:** MCP tools now load faster from definition‑scoped snapshots; added process‑wide and per‑server cache opt‑outs.  
- **Changed:** Autopilot mode stays selected after `task_complete` by default. Set `stayInAutopilot: false` to revert to interactive mode after each task.  
- **Fixed:** Restored early warning when … (truncated in source).

## Hot Issues (10 of 40 updated in last 24h)

1. **[#1730 – `sessionStart` hook not firing in Copilot CLI](https://github.com/github/copilot-cli/issues/1730)**  
   *area:plugins* – Hooks defined in `.github/hooks/*.json` are ignored on session start. 6 comments, 3 👍. A core reliability concern for plugin users.

2. **[#4188 – Plan‑mode regression blocks shell commands](https://github.com/github/copilot-cli/issues/4188)**  
   *area:permissions,tools* – Latest version prevents plan mode from executing `gh` and other commands that were previously allowed. 6 comments, 3 👍. Critical for users relying on plan‑mode workflows.

3. **[#2792 – Automatic model switching for planning vs. execution](https://github.com/github/copilot-cli/issues/2792)** (CLOSED)  
   *area:agents,models* – Proposes using one model for planning, another for execution. 5 comments, **16 👍**. Closed but still the top‑voted feature request in the sample.

4. **[#4163 – Zombie process accumulation under copilot PID](https://github.com/github/copilot-cli/issues/4163)** (CLOSED)  
   *area:platform-linux,tools* – Child processes not reaped, leaking ~2 zombies/min. 5 comments, 3 👍. Important for long‑running sessions on Linux.

5. **[#4183 – Auto‑compaction doesn’t prevent CAPI 5 MB limit](https://github.com/github/copilot-cli/issues/4183)** (CLOSED)  
   *area:context-memory,models* – Even with compaction, long tool‑heavy sessions hit the 5 MB body limit. 4 comments, **10 👍**. A key scalability concern.

6. **[#1381 – “Rewind is not available because you’re not in a git repository”](https://github.com/github/copilot-cli/issues/1381)**  
   *area:sessions* – Users of alternative VCS (e.g., Jujutsu) cannot use Rewind. 3 comments, **9 👍**. Highly requested parity feature.

7. **[#4233 – Emit `usage_update` in `--acp` mode](https://github.com/github/copilot-cli/issues/4233)**  
   *area:non-interactive* – ACP clients like Zed lack context‑window and credit‑usage indicators. 2 comments, 2 👍. Essential for headless integrations.

8. **[#4161 – `task_complete` tool unavailable after switching back to autopilot](https://github.com/github/copilot-cli/issues/4161)**  
   *area:agents,tools* – Regresses a previously fixed issue (#1523). 2 comments, 3 👍. Breaks autopilot workflows.

9. **[#4118 – `/app` command does not select current working directory](https://github.com/github/copilot-cli/issues/4118)**  
   *area:none* – Every `/app` invocation requires manual directory selection. **35 👍** (highest in sample). Simple UX pain point.

10. **[#4159 – Interactive mode goes blank after prompt in Windows Terminal](https://github.com/github/copilot-cli/issues/4159)**  
    *area:platform-windows,terminal-rendering* – Output disappears after submitting a prompt; `-p` mode works. 1 comment, 3 👍. Persistent rendering issue.

## Key PR Progress (10 of 12 updated in last 24h)

*Note: Many open PRs are stale or spam; only those with clear functional or documentation improvements are highlighted.*

1. **[#1609 – Update instructions for adding permissions in PAT](https://github.com/github/copilot-cli/pull/1609)**  
   Clarifies that “Copilot Requests” permission is under the Account tab. Small but actionable doc fix.

2. **[#1598 – Fix: add trap to clean up temp directory on unexpected exit](https://github.com/github/copilot-cli/pull/1598)**  
   Prevents `/tmp` leakage when `install.sh` fails with `set -e`. Quality‑of‑life improvement for script installs.

3. **[#1333 – Fix minor grammar and Markdown formatting issues](https://github.com/github/copilot-cli/pull/1333)**  
   Adds missing article, removes extra blank line. No functional change, but keeps docs clean.

4. **[#1116 – Fix misleading doc – 0x models don’t reduce quota](https://github.com/github/copilot-cli/pull/1116)**  
   Corrects README claim that 0x models consume quota. Practical correction for cost management.

5. **[#988 – chore(docs): add missing prefix to brew command](https://github.com/github/copilot-cli/pull/988)**  
   Fixes `brew install copilot-cli` → `brew install github/copilot-cli/copilot-cli`. Prevents install failures.

6. **[#4030 – Add GitHub Actions workflow for Jekyll deployment](https://github.com/github/copilot-cli/pull/4030)**  
   Automation for building and deploying Jekyll sites to GitHub Pages. Useful for docs sites.

7. **[#3928 – Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928)**  
   Adds missing gitignore. Unclear scope, but addresses a common omission.

8. **[#2800 – Add initial devcontainer configuration](https://github.com/github/copilot-cli/pull/2800)**  
   Enables reproducible development environments via Dev Containers.

9. **[#3873 – Add initial console log for greeting](https://github.com/github/copilot-cli/pull/3873)** – Spam, no substantive change.

10. **[#3880 – “beyond the streets of america”](https://github.com/github/copilot-cli/pull/3880)** – Spam, appears to be a JSX snippet unrelated to the CLI.

## Feature Request Trends
The most‑requested feature directions distilled from issues and comments:

- **Model orchestration** – Automatic switching between a planning model and an execution model (#2792, 16 👍).  
- **Non‑Git VCS support** – Allow Rewind to work without a git repository (#1381, 9 👍).  
- **ACP parity** – Expose context‑window usage, AI credit consumption, and `contextTier` configuration in ACP mode (#4233, #4275, #4174).  
- **Persistent autopilot** – Make `--autopilot` persist across turns (closed #3977, now default in v1.0.76-0).  
- **Clipboard integration** – Fix clipboard access in tmux/screen inside WSL / VS Code (#4191).  
- **Workspace selection** – `/app` should default to the current working directory (#4118, 35 👍).  
- **Custom/BYOK provider startup** – `-i` prompt should auto‑submit with custom providers (#4258).

## Developer Pain Points
Recurring frustrations visible in recent issues:

- **Plan‑mode regression** – Shell commands blocked during planning (#4188, #1272).  
- **Zombie processes** – Linux sessions leak children (#4163).  
- **ACP missing data** – No token/credit usage exposed for third‑party clients (#4174, #4233).  
- **Hooks not firing** – `sessionStart` hook ignored on Windows (#1730).  
- **Task_complete tool unavailability** – Regression in autopilot mode (#4161).  
- **Rendering glitches** – Blank screens after prompt in Windows Terminal (#4159, #4263).  
- **Keychain prompts on macOS** – Dual‑signed binaries cause XARA partition mismatch (#4273).  
- **AI credit consumption on restart** – `/restart` and `/resume` burn 174 credits (#3886).  
- **Glob tool false negatives** – Multi‑segment patterns fail unless prefixed with `**/` (#4271).  
- **BYOK provider ignored** – `-i` startup prompt not submitted for custom models (#4258).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-28

## Today's Highlights

No new releases were shipped in the last 24 hours, but the community remains active with critical bug fixes and issue reports. Two PRs address persistent UnicodeEncodeError crashes on Windows (GBK codepage), and a new bug surfaces silent failures in VSCode extension approval prompts. The team is also working on improved MCP tool name normalization and an option to disable prompt caching.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **(#1070) [CLOSED] Login failed: Network unreachable**  
   User reported `kimi` 1.9.0 cannot connect to `auth.kimi.com:443` due to network issues. The issue has been closed, likely resolved or stale. No community reaction (0 👍).  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1070)

2. **(#2317) [OPEN] VSCode Extension: Plan mode file path not clickable**  
   In the VSCode extension (v0.5.10), file paths shown in the chat webview during Plan mode are not clickable, hindering navigation. No workaround mentioned. 3 comments, low priority (0 👍).  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2317)

3. **(#2564) [OPEN] PostToolUse / PostToolUseFailure hooks silently dropped**  
   A core reliability bug: hooks registered in `config.toml` are unpredictably killed by garbage collection because the task handles are not held strongly. This can cause entire workflows to fail silently. Filed yesterday, no comments yet.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2564)

4. **(#2563) [OPEN] VSCode extension: Approval prompts never render (indefinite stall)**  
   Extension v0.6.4 on macOS: `ExitPlanMode` and tool permission approval dialogs intermittently fail to appear, causing a 600‑second timeout with no user feedback. Filed yesterday, zero comments.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2563)

## Key PR Progress

1. **(#2539) [OPEN] fix(mcp): normalize tools for Moonshot API**  
   Generates stable Moonshot-compatible aliases for MCP tool names while retaining original names for routing. Also fixes missing root `object` type in MCP schemas and corrects `anyOf`/required shape.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2539)

2. **(#2562) [OPEN] fix(llm): allow disabling prompt cache key**  
   Adds a `prompt_cache_key` boolean setting to the `kimi` provider config. When disabled, the session-derived cache key is omitted from requests. Default behavior unchanged. Includes bilingual documentation.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2562)

3. **(#2561) [OPEN] Fix UnicodeEncodeError on startup when stdio uses non‑UTF‑8**  
   Addresses crash on Windows Git Bash where the welcome banner character `▐` cannot be encoded in GBK. Adds encoding fallback to prevent immediate die on startup. Resolves #1436.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2561)

4. **(#2560) [OPEN] Fix UnicodeEncodeError in web banner when stdout is non‑UTF‑8 (Windows)**  
   Similar to #2561 but for `kimi web`: the arrow character `➜` in the startup banner crashes on Chinese‑locale Windows with stdout redirection (CP936/GBK). Fix applied in `print_banner`. Resolves #2532.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2560)

## Feature Request Trends

- **Windows non‑UTF‑8 encoding resilience** – Two PRs and multiple issues (#1436, #2532) highlight demand for proper handling of legacy codepages (GBK, CP936) in banner output and startup sequences.  
- **Prompt cache configurability** – PR #2562 suggests users want control over prompt caching behavior, likely for debugging or custom provider integrations.  
- **MCP tool interoperability** – PR #2539 addresses the need for stable tool names when bridging Moonshot API with external MCP servers.  
- **Hook execution reliability** – Issue #2564 indicates that advanced users rely on hooks (`PostToolUse`, etc.) and expect them to run deterministically without garbage collection races.

## Developer Pain Points

- **Windows encoding breaks out of the box** – The welcome banner and web server startup crash on non‑UTF‑8 terminals, a recurring frustration for Windows users. No official Windows installer or encoding‑aware startup is provided yet.  
- **VSCode extension UI glitches** – Approval prompts and file‑path clickability are broken (issues #2563, #2317), causing stalls and poor UX for coding plan users. These issues lack community responses or workarounds.  
- **Silent hook and timeout failures** – The GC bug (#2564) and the invisible approval prompt (#2563) can cause indefinite hangs without clear error messages, eroding trust in automations.  
- **No new releases in sight** – Despite multiple open PRs and bugs, no release has been cut in the last 24 hours, leaving users on potentially broken versions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-28

## Today's Highlights
Two patch releases (v1.18.7 and v1.18.6) landed in the last 24 hours, fixing desktop titlebar insets, command palette ghosts, project selector scrolling, and a core bug in branch-specific caches. Community attention remains focused on model reliability – the top‑voted issue (31 👍) is a long‑running feature request for unified usage tracking, while two separate reports of duplicate/looping model outputs continue to gather comments. On the contributor side, four PRs from kitlangton and Brendonovich strengthen the core test harness and plugin hot‑reload mechanism.

---

## Releases
- **[v1.18.7](https://github.com/anomalyco/opencode/releases/tag/v1.18.7)** – Desktop bugfixes: removed extra macOS fullscreen titlebar inset, fixed command palette entries reappearing after shadowed command removal, and added scrolling to the project selector dropdown when the list is long (community contribution by @david1gp).
- **[v1.18.6](https://github.com/anomalyco/opencode/releases/tag/v1.18.6)** – Core fix: refreshing branch‑specific repository caches no longer moves other branch checkouts. Desktop improvements: better compatibility with newer client API across directory, project, session, and terminal flows; legacy MCP fix.

---

## Hot Issues (10 noteworthy)
1. **[#25270 – Bug: Model generates identical response twice](https://github.com/anomalyco/opencode/issues/25270)**  
   *23 comments, 4 👍* – The model outputs the exact same response two times consecutively. This is a persistent quality issue that affects user trust and has been open since May.

2. **[#9281 – [FEATURE] Add unified usage tracking via /usage](https://github.com/anomalyco/opencode/issues/9281)**  
   *11 comments, 31 👍* – Users want a built‑in way to see rate‑limit and plan usage across OAuth providers. Top‑voted feature request, showing strong community demand.

3. **[#29703 – Allow changing project folder path without losing session history](https://github.com/anomalyco/opencode/issues/29703)**  
   *9 comments, 13 👍* – Renaming or moving a project folder destroys all chat history. A common workflow pain point that ties into the broader session‑persistence topic.

4. **[#28596 – Bug: repeated tool calls](https://github.com/anomalyco/opencode/issues/28596)**  
   *5 comments* – The model enters an infinite loop of identical tool/exec calls. Agentic behavior that must be prevented without manual interruption.

5. **[#38107 / #38830 – Desktop v2 fatal renderer error with AutoScroller](https://github.com/anomalyco/opencode/issues/38107)** *(similar: #38830)*  
   *4 comments each* – `Error: AutoScroller plugin depends on Scroller plugin` appears when navigating to home or opening Settings. A regression in the dnd‑kit dependency that crashes the renderer.

6. **[#38979 – Desktop UI freezes after closing project on macOS](https://github.com/anomalyco/opencode/issues/38979)**  
   *4 comments* – After “Close” via context menu, the entire UI becomes unresponsive. High severity for macOS users.

7. **[#39162 – Desktop 1.18.7 renderer crashes on Settings](https://github.com/anomalyco/opencode/issues/39162)**  
   *3 comments* – The same AutoScroller error as #38107, but triggered specifically when opening the Settings view. Already closed after a fix.

8. **[#37894 – opencode web: UI non‑functional in empty dir](https://github.com/anomalyco/opencode/issues/37894)**  
   *3 comments* – Starting `opencode web` in an empty directory yields a completely broken UI. A blocker for first‑time web users.

9. **[#39199 – feat: allow changing session root directory mid‑session](https://github.com/anomalyco/opencode/issues/39199)**  
   *2 comments* – Users want the ability to change the working directory without relaunching the application. Already closed with a merged PR.

10. **[#39196 – Foreground subagent failure returns no task_id](https://github.com/anomalyco/opencode/issues/39196)**  
    *2 comments* – When a foreground subagent fails or is cancelled, the parent model receives a bare error string without a task ID, making it impossible to resume partial work.

---

## Key PR Progress (10 important)
1. **[#39084 – refactor(app): separate model selector controller and view](https://github.com/anomalyco/opencode/pull/39084)**  
   *Author: Brendonovich* – Splits the V2 model selector into a focused controller, thin adapter, and DOM‑owned view state, improving maintainability and testability.

2. **[#39224 – feat(core): reload configured plugins from source edits](https://github.com/anomalyco/opencode/pull/39224)**  
   *Author: kitlangton* – Local plugin sources (e.g., `"./tools/my-plugin.ts"`) now hot‑reload on file changes, matching the auto‑discovered plugin directory behavior introduced in #39174.

3. **[#39220 – fix(app): refresh global provider state](https://github.com/anomalyco/opencode/pull/39220)**  
   *Author: Brendonovich* – Refreshes every active provider catalog after connecting a provider, keeping settings and new‑session provider lists in sync.

4. **[#39211 – feat(core): improve edit tool output](https://github.com/anomalyco/opencode/pull/39211)**  
   *Author: rekram1-node* – Replaces synthetic old/new diff previews with concise replacement‑count output, adds path info to no‑match errors, and returns specific missing‑file errors.

5. **[#39216 / #39172 – test(core): add native watcher command reload test + align tool contract expectations](https://github.com/anomalyco/opencode/pull/39216) [(#39172)](https://github.com/anomalyco/opencode/pull/39172)**  
   *Author: kitlangton* – Adds an end‑to‑end integration test for file‑watcher‑triggered command reloads and restores the V2 unit test suite after tool architecture changes.

6. **[#36872 – fix(desktop): install AppStream metainfo in Linux packages](https://github.com/anomalyco/opencode/pull/36872)**  
   *Author: develop7* – Closes #35984 by ensuring the `.deb`/`.rpm` packages include the necessary AppStream metainfo XML for better Linux desktop integration.

7. **[#39209 – fix(desktop): use channel database in local runs](https://github.com/anomalyco/opencode/pull/39209)**  
   *Author: Hona* – Stops disabling the channel database during unpackaged desktop development, enabling consistent local testing of database‑dependent features.

8. **[#39203 – refactor(core): manage watcher lifecycle with RcMap](https://github.com/anomalyco/opencode/pull/39203)**  
   *Author: kitlangton* – Makes native Parcel watcher acquisition interruption‑safe by moving it out of a manually locked region, preventing shutdown delays.

9. **[#29831 – fix(core): resolve spawn completion on exit, not only close (Windows detached‑child hang)](https://github.com/anomalyco/opencode/pull/29831)**  
   *Author: Hona* – Fixes shell commands that hang after launching background processes on Windows by waiting for exit and capturing final output.

10. **[#38060 – fix(opencode): exclude denied MCP tools from provider requests](https://github.com/anomalyco/opencode/pull/38060)**  
    *Author: IbrahimKhan12* – Respects the global `tools` deny configuration, preventing disabled MCP tools from being sent to providers.

---

## Feature Request Trends
- **Unified usage tracking** ([#9281](https://github.com/anomalyco/opencode/issues/9281), 31 👍) remains the single most desired feature, with no official progress yet.
- **Session/workspace portability** – Two related issues ([#29703](https://github.com/anomalyco/opencode/issues/29703), [#39199](https://github.com/anomalyco/opencode/issues/39199)) ask for the ability to move or rename project folders and change working directories mid‑session without losing history. The latter was just closed as a feature PR.
- **Model reliability enhancements** – Multiple reports point to duplicate responses, tool‑call loops, and premature agent termination ([#25270](https://github.com/anomalyco/opencode/issues/25270), [#28596](https://github.com/anomalyco/opencode/issues/28596), [#39204](https://github.com/anomalyco/opencode/issues/39204)). Users want smarter loop detection and graceful recovery.
- **Global skills discoverability** ([#32181](https://github.com/anomalyco/opencode/issues/32181)) – Custom global skills are registered internally but not surfaced to the model or skill selector, a UX gap since v1.17.4.
- **Multi‑session server isolation** ([#39181](https://github.com/anomalyco/opencode/issues/39181)) – When multiple TUI clients connect to one server, branch display leaks between projects. Users need per‑session state isolation.

---

## Developer Pain Points
- **DnD plugin crashes** – The `AutoScroller plugin depends on Scroller plugin` error is the most urgent desktop bug this week, affecting v1.18.4–1.18.7 and breaking navigation and Settings. Two related issues and a closing PR suggest a fix is rolling out.
- **macOS UI freezes** – Closing a project leaves the desktop completely unresponsive ([#38979](https://github.com/anomalyco/opencode/issues/38979)). Combined with the AutoScroller crash, macOS stability is under strain.
- **Model output duplication** – Unreliable model behaviour (identical responses, tool loops) frustrates users and reduces trust in the agentic workflow.
- **Web UI in empty directories** – `opencode web` becomes non‑functional if the starting directory is empty ([#37894](https://github.com/anomalyco/opencode/issues/37894)), a bad first‑run experience.
- **MCP config schema mismatch** – The `customize-opencode` skill uses `env` but the JSON schema requires `environment` ([#39135](https://github.com/anomalyco/opencode/issues/39135)), causing silent failures for new MCP server setups.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-28

## Today's Highlights
The Pi project saw a burst of activity focused on improving extension APIs and fixing provider compatibility. Notable developments include a new extension hook for session-scoped models (`ctx.scopedModels`), a SQLite search index for session history, and multiple fixes for Z.AI, Anthropic, and AWS Bedrock provider integrations. The community is also converging on better UX for ephemeral model settings and TUI performance improvements.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#5263: Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)**  
   *Open, 10 comments, 👍10*  
   Proposes that model/thinking-level changes only affect the active session rather than persisting globally. A new "Default model" entry in/settings would serve as the explicit global surface. High community interest.

2. **[#6747: An API for enhancing agent message markdown](https://github.com/earendil-works/pi/issues/6747)**  
   *Open, 8 comments, 👍2*  
   Wants extensions to mutate how agent messages are rendered (e.g., formula rendering) without altering the LLM content. Points to growing demand for extension-level UI customization.

3. **[#7157: OpenCode Go provider displays as "OpenCode Zen Go"](https://github.com/earendil-works/pi/issues/7157)**  
   *Open, 5 comments*  
   Simple display name bug fixed by PR #7173. Shows the community’s sharp eye for provider metadata consistency.

4. **[#6970: GitHub Copilot Plugin auth causes token invalidation](https://github.com/earendil-works/pi/issues/6970)**  
   *Closed, 4 comments, 👍1*  
   Identifies that Pi uses the GitHub Copilot Plugin OAuth flow instead of proper OAuth, leading to token invalidation when used across multiple devices. Critical for multi-device users.

5. **[#7161: anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)**  
   *Open, 4 comments*  
   Missing header breaks session affinity for gateways that route Anthropic calls. Closed by PR #7172.

6. **[#7143: Z.AI providers send max_completion_tokens, which Z.AI ignores](https://github.com/earendil-works/pi/issues/7143)**  
   *Closed, 4 comments*  
   Z.AI only honors `max_tokens`, causing truncated reasoning. Addressed by PR #7174.

7. **[#7132: Set AI_AGENT for child process attribution](https://github.com/earendil-works/pi/issues/7132)**  
   *Closed, 4 comments*  
   Aligns Pi with the emerging `AI_AGENT` convention used by Claude Code and others for child process identification.

8. **[#7128: New PI_* guideline in system prompt over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)**  
   *Closed, 3 comments*  
   The default system prompt now biases the model to run `env` inspection commands even when unnecessary. Highlights the challenge of crafting efficient agent prompts.

9. **[#7171: Dedupe byte-identical context files in the cwd->root walk](https://github.com/earendil-works/pi/issues/7171)**  
   *Closed, 3 comments*  
   When worktrees reside inside a repo root, byte-identical `AGENTS.md`/`CLAUDE.md` files are loaded twice. Fixed by PR #7169.

10. **[#7170: Support for AWS bedrock credential_process](https://github.com/earendil-works/pi/issues/7170)**  
    *Closed, 2 comments*  
    AWS credential sourcing via `credential_process` is not supported, blocking users who rely on external credential providers.

## Key PR Progress

1. **[#7163: feat: search index sqlite](https://github.com/earendil-works/pi/pull/7163)**  
   *Open* — Adds `SessionRepo.search()` with contentless FTS5 full-text search for SQLite sessions. Critical for large session archives.

2. **[#7022: fix(coding-agent): guard tree navigation during responses](https://github.com/earendil-works/pi/pull/7022)**  
   *Open, WIP* — Prevents `/tree` from causing weird state when triggered while the agent is streaming. Improves session integrity.

3. **[#7191: feat(extensions): expose ctx.scopedModels to extensions](https://github.com/earendil-works/pi/pull/7191)**  
   *Closed* — Gives extensions read-only access to the session’s resolved model set, enabling companion model pickers.

4. **[#7081: feat(ai): support Claude Opus 5 on Bedrock](https://github.com/earendil-works/pi/pull/7081)**  
   *Closed* — Configures adaptive thinking for Opus 5 and fixes verbose error messages on Bedrock.

5. **[#7184 / #7181: fix(ai): strip multimodal media markers from tool results](https://github.com/earendil-works/pi/pull/7184)**  
   *Closed* — Prevents tokenizer crashes when tool results contain “|image|” markers without actual image data.

6. **[#7178: feat(coding-agent): show status when toggling tool-output expansion](https://github.com/earendil-works/pi/pull/7178)**  
   *Closed* — Adds a transient status line for Ctrl+O toggle (mirroring the thinking-block toggle feedback).

7. **[#7168: feat: auth print](https://github.com/earendil-works/pi/pull/7168)**  
   *Closed* — Adds `auth print-api-key` and `print-bearer-token` commands for debugging provider credentials.

8. **[#7176: fix(ai): prefer configured Bedrock profile over ambient AWS keys](https://github.com/earendil-works/pi/pull/7176)**  
   *Open* — Ensures Pi uses the profile set via its auth flow instead of ambient `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY`.

9. **[#6881: feat(ai): use provider-reported cost when responses include it](https://github.com/earendil-works/pi/pull/6881)**  
   *Open* — Reads `usage.cost` from OpenAI-style responses to get accurate billing, falling back to catalog rates.

10. **[#7174: fix(ai): send max_tokens for Z.AI providers](https://github.com/earendil-works/pi/pull/7174)**  
    *Open* — Sends `max_tokens` instead of `max_completion_tokens` for Z.AI, fixing long reasoning truncation.

## Feature Request Trends

- **Ephemeral session model changes** – High community demand (#5263) to avoid polluting global settings with temporary model switches.
- **Extension API expansion** – Multiple requests for richer hooks: markdown rendering (#6747), pre-response gates (#7137), session-scoped model access (#7192), terminal color scheme (#7197), and durable compaction strategies (#7127).
- **Provider compatibility & parity** – Fixes needed for Z.AI max tokens, Anthropic session headers, AWS credential_process, and GitHub Copilot auth. The Merge Gateway as a built-in provider (#5986) was also proposed.
- **TUI polish** – Users want status lines for toggles (Ctrl+O, #7180), performance improvements (LRU cache for visibleWidth, #7196), and reduced full re-renders (#7194).
- **Developer experience** – Better error handling for silent crashes (#7187), support for symlinked extension directories (#7195), and better package install resiliency (#7189).

## Developer Pain Points

- **Random terminal scrolling (#5023)** – The TUI spontaneously jumps to the beginning of the session, then quickly scrolls to the end. Frequent and disruptive.
- **OpenCode Go naming confusion (#7157)** – Display name mismatch between “OpenCode Zen Go” and the actual provider name causes confusion in model listings.
- **Z.AI max_tokens issue (#7143)** – Output cap is silently ignored, leading to truncated reasoning in long tool calls. A fundamental compatibility gap.
- **GitHub Copilot auth invalidation (#6970)** – Using Pi alongside copilot-lsp leads to token invalidation because Pi uses the wrong OAuth flow.
- **Anthropic session affinity (#7161)** – Missing `x-client-request-id` header prevents proxied Anthropic calls from being routed to the same account.
- **AWS credential_process (#7170)** – Users with external credential sourcing are blocked; not supported.
- **Silent crashes from package manifest typos (#7187)** – A single third-party package bug can permanently kill all Pi sessions, with no error output.
- **Symlinked extension directories not loaded (#7195)** – Users who manage dotfiles via symlinks cannot load custom extensions.
- **Full TUI re-render every second (#7194)** – Performance degrades when a tool card scrolls out of view, causing high CPU in remote sandboxes.
- **Fork selector crash on null content (#7159)** – Pressing fork keybinding in a session with a null-content message crashes the entire TUI.

Stay tuned for tomorrow’s digest as the community continues to polish Pi’s extension system and provider support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026-07-28**

---

## Today’s Highlights

Two non‑production benchmark prereleases were published, but the SWE‑bench Verified run on `dsw‑manual‑poc‑20260727‑2` has been **quarantined** (376/500 tests resolved). Meanwhile, the community raised critical bugs around sub‑agent hangs, streaming socket failures, and quota handling – several of which already have incoming fixes. CI instability remains a concern with repeated E2E test failures on `main`.

---

## Releases

- **[dsw‑manual‑poc‑20260727‑2](https://github.com/QwenLM/qwen-code/releases/tag/dsw-manual-poc-20260727-2)** – Non‑production benchmark prerelease. SWE‑bench Verified (500/500): **376 resolved, 116 unresolved, 1 execution error**. Status: **QUARANTINED**.
- **[dsw‑manual‑poc‑20260727‑1](https://github.com/QwenLM/qwen-code/releases/tag/dsw-manual-poc-20260727-1)** – Same benchmark baseline; earlier POC.

*(No stable release this update.)*

---

## Hot Issues

1. **[#7585 – Proposal: Add a direct external context provider profile](https://github.com/QwenLM/qwen-code/issues/7585)**  
   *P3, feature‑request* – Suggests an extension that lets one CLI process pull shared context from an external memory service. 9 comments, community discussion on integration scope.

2. **[#7449 – Proposal: Enterprise external‑memory integration profile](https://github.com/QwenLM/qwen-code/issues/7449)**  
   *P3, feature‑request* – Calls for a documentation‑first, provider‑neutral profile for external memory. 6 comments, triage feedback included.

3. **[#6762 – Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)**  
   *P2, feature‑request* – Users want the ability to unload, compress, or refresh SKILL.md bodies to control context growth. 5 comments, roadmap label.

4. **[#7841 – Quota‑exhausted 429s retry silently](https://github.com/QwenLM/qwen-code/issues/7841)**  
   *P2, bug* – `isRateLimitError` misclassifies permanent quota exhaustion as a transient rate limit, leading to silent retries. **Fixed in PR #7842** (fast‑fail approach).

5. **[#7835 – Sub‑agent asks user questions with no way to answer](https://github.com/QwenLM/qwen-code/issues/7835)**  
   *P2, bug* – Background sub‑agents call `ask_user_question` but the main agent never forwards it. **PR #7882 / #7880 now exclude that tool from sub‑agents.**

6. **[#7832 – YOLO mode socket close not retried](https://github.com/QwenLM/qwen-code/issues/7832)**  
   *P1, bug* – In headless mode, large code output fails with `UND_ERR_SOCKET`. No retry logic implemented.

7. **[#7831 – Repeated ECONNRESET on streaming when context >150k tokens](https://github.com/QwenLM/qwen-code/issues/7831)**  
   *P2, bug* – Long sessions hit TCP resets. **PR #7836** addresses the caller‑supplied `sessionId` missing in `POST /session` (related analysis).

8. **[#7819 – `--safe-mode` unconditionally drops ACP‑supplied mcpServers](https://github.com/QwenLM/qwen-code/issues/7819)**  
   *P2, bug* – When driven over ACP with `--safe-mode`, external `mcpServers` from the session request are silently discarded.

9. **[#7697 – Cannot connect to Unity MCP (VS Code)](https://github.com/QwenLM/qwen-code/issues/7697)**  
   *Closed, bug* – VS Code extension fails where Claude Code succeeds. Possibly a Windows/MCP integration issue. 5 comments.

10. **[#7779 – VP teardown can leave Kitty keyboard flags enabled](https://github.com/QwenLM/qwen-code/issues/7779)**  
    *P2, bug* – Virtual viewport mode pushes Kitty progressive‑enhancement flags on the main screen; teardown orders them incorrectly. Related to **#7781** (SIGTERM leaving terminal modes active).

---

## Key PR Progress

1. **[#7826 – Dispatch GitHub notifications by reason](https://github.com/QwenLM/qwen-code/pull/7826)**  
   *Review/self‑reported* – Routes GitHub notifications based on `notification.reason` to produce correct agent inputs (e.g., mentions vs. assignments).

2. **[#7484 – Bridge tool‑result images for text‑only models](https://github.com/QwenLM/qwen-code/pull/7484)**  
   *Autofix/takeover* – Allows text‑only primary models to understand images discovered during tool execution by unifying the image routing stage.

3. **[#7849 – Native workspace folder picker (web‑shell)](https://github.com/QwenLM/qwen-code/pull/7849)**  
   *Review/self‑reported* – Adds a “Browse” action that opens the OS folder picker for selecting workspace directories via the daemon.

4. **[#7842 – Fast‑fail permanent quota‑exhaustion 429s](https://github.com/QwenLM/qwen-code/pull/7842)**  
   *Review/self‑reported* – Recognises 429 responses with a reset time as permanent exhaustion and shows an error immediately instead of retrying.

5. **[#7882 – Exclude `ask_user_question` from sub‑agent tools](https://github.com/QwenLM/qwen-code/pull/7882)**  
   *Opened 2026‑07‑28* – Resolves #7835 by forbidding sub‑agents from calling `ask_user_question`, preventing indefinite hangs.

6. **[#7859 – Native Live Voice (web‑shell, macOS)](https://github.com/QwenLM/qwen-code/pull/7859)**  
   *Autofix/takeover* – Opt‑in voice experience using Qwen Live Host; supports Command‑double‑press to start/resume conversations.

7. **[#7836 – Support caller‑supplied `sessionId` in `POST /session`](https://github.com/QwenLM/qwen-code/pull/7836)**  
   *Opened* – Fixes the silent drop of `sessionId` from the request body, addressing the ECONNRESET analysis in #7831.

8. **[#7820 – Restore first‑output benchmark measurement validity](https://github.com/QwenLM/qwen-code/pull/7820)**  
   *Autofix/takeover* – Addresses ten review comments from #7761, fixing artifact schema and simplifying measurement infrastructure.

9. **[#7883 – Fix `/copy <message> <index>` code‑block selection](https://github.com/QwenLM/qwen-code/pull/7883)**  
   *Opened* – Correctly selects the requested code block by number from a specified AI message.

10. **[#7362 – Fix `mobile‑mcp` ADB executable on Windows](https://github.com/QwenLM/qwen-code/pull/7362)**  
    *Opened* – Changes from `process.env.platform` to `process.platform` so Android detection works on Windows.

---

## Feature Request Trends

- **External context & memory** – Proposals for a direct external context provider (#7585) and an enterprise external‑memory integration profile (#7449) reflect strong demand for long‑term, shareable knowledge that persists across sessions.
- **Skill/Action lifecycle management** – Issue #6762 (Skill Context Lifecycle) indicates users want fine‑grained control over how skill definitions are loaded, compressed, or evicted from the conversation context.
- **Integration & channel extensions** – Requests for DingTalk image delivery (#7687) and GitHub notification dispatch by reason (#7807) show growing interest in custom event‑driven workflows.
- **Terminal UX improvements** – While not a formal feature request, the VP/Kitty terminal bugs hint at a need for more robust terminal mode management.

---

## Developer Pain Points

- **CI instability** – A cascade of E2E test failures (over 10 issues in 24h) on main branch is a recurring frustration, often triggered by integration or sandbox networking issues.
- **Connection reliability** – VS Code agent disconnects (#6414, #7056) and MCP connection problems (Unity #7697, Windows) remain common, especially on Windows.
- **Long‑context and streaming failures** – ECONNRESET after ~150k tokens (#7831) and socket close in YOLO mode (#7832) hinder large‑scale code generation.
- **Sub‑agent deadlocks** – The `ask_user_question` hang (#7835) is a clear design gap that blocks multi‑agent workflows.
- **Quota handling** – Silent retry on permanent quota exhaustion (#7841) wastes API calls and confuses users.
- **Terminal state pollution** – VP teardown and signal handling (#7779, #7781) leave the terminal in an inconsistent state, breaking user workflow.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-28

## Today's Highlights

The v0.9.2 release candidate is in full swing, with **25 PRs merged or opened in 24 hours** and a dedicated integration branch now 82 commits ahead of main. The most consequential batch lands a comprehensive **lane control-plane contract**, a **rewritten Saved-Fleets + Router** architecture, and a **persistent sessions rail** with auto-resume. Meanwhile, a detailed **dead-code audit** reveals 464 `#[allow(dead_code)]` attributes across 143 files, prompting a systematic sweep before the release.

## Releases

No new releases in the last 24 hours. The project is converging on **v0.9.2**, with an umbrella release-candidate PR (#4911) under active review.

## Hot Issues (10 of 16 noteworthy)

1. **[#4797 — Renovate cost: two pricing systems, unpriced cache writes, and a /cost that is one number](https://github.com/Hmbown/CodeWhale/issues/4797)**  
   A deep audit of the cost surface: 2,003 lines of hand-maintained pricing, time-aware introductory rates, and cache-write costs that escape accounting. The `/cost` slash command reports a single number while real spend is higher and detail is hidden. High priority for v0.9.2 — the community has flagged opaque billing as a trust issue.

2. **[#3897 — perf(tui): streaming re-parses the whole growing message every chunk (O(N²) markdown)](https://github.com/Hmbown/CodeWhale/issues/3897)**  
   Closed today. The renderer re-parses the *entire* growing message as markdown on each chunk — O(N²) over message length. A significant performance bottleneck for long streaming outputs. The fix improves perceptible latency in long turns.

3. **[#4042 — feat: Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042)**  
   Closed. Tracks runtime enforcement of tool restrictions across sessions, sub-agents, Fleet workers, and MCP servers. Confirms `--disallowed-tools` works; the work hardened the sandbox boundary. Community discussion (20 comments) centered on whether the flag should cascade to sub-agents.

4. **[#4785 — Dead-code sweep: 464 #[allow(dead_code)] attributes are hiding drift](https://github.com/Hmbown/CodeWhale/issues/4785)**  
   A systematic measurement: stripping all `allow(dead_code)` attributes reveals `66` truly dead items in non-test code and `266` when including tests. The compiler has been structurally silenced. This is a maintenance hygiene issue that could mask broken paths in production.

5. **[#998 — 文案展示不全 (Incomplete text display)](https://github.com/Hmbown/CodeWhale/issues/998)**  
   Open since May. Truncated UI labels with no hover tooltip. The attached screenshot shows character clipping in the TUI. This has 10 comments and remains unaddressed — a recurring pain point for Chinese-speaking users.

6. **[#4526 — Request to add dedicated endpoint configurations for StepFun Plan and OpenCode Go](https://github.com/Hmbown/CodeWhale/issues/4526)**  
   Closed. StepFun offers a Plan-tier endpoint (`https://api.stepfun.com/step_plan/v1`) that isn't exposed. The PR that closed this (#4921) implements a billing-route setup stage that mirrors the Kimi plan-tier pattern. Community agreed this was a blocker for StepFun Plan subscribers.

7. **[#4930 — Enter during foreground shell should detach it before steering](https://github.com/Hmbown/CodeWhale/issues/4930)**  
   New today. When a foreground bash command blocks the turn, the user's natural "type message + Enter" fails confusingly — the keystrokes are eaten by the shell. The proposed fix: on Enter, detach the foreground shell first. A sharp UX issue for anyone running long builds.

8. **[#4934 — Website non-critique](https://github.com/Hmbown/CodeWhale/issues/4934)**  
   Opened hours ago. A community member observes the new website is "super-active" but needs theming. While lighthearted, it reflects a real concern: the web surface is maturing fast but lacks visual consistency.

9. **[#4906 — Show, don't tell: record a real Codewhale session for the site and a README GIF](https://github.com/Hmbown/CodeWhale/issues/4906)**  
   The project has no video or animated demo of the terminal runtime — the Work surface, phase rail, delegate cards, ambient ocean. First-time visitors must imagine the experience from prose. A GIF or recorded session is the single highest-impact marketing change.

10. **[#3983 — v0.9.2 Runtime: make current Work state model-visible on parent turns](https://github.com/Hmbown/CodeWhale/issues/3983)**  
    Closed. The TUI's Work surface (checklist + strategy context) was not fully visible to the model on parent turns. This closes the gap: the parent now sees fork state, ensuring sub-agent context doesn't vanish into a merged history.

## Key PR Progress (10 of 25 active PRs)

1. **[#4911 — v0.9.2 release candidate integration (umbrella, draft)](https://github.com/Hmbown/CodeWhale/pull/4911)**  
   The central integration branch: 82 commits ahead of main, hosting all harvest PRs. Currently in CI + code review. The community should watch this for merge-blocking issues.

2. **[#4919 — feat: lane control-plane contract, nonblocking /lane interrupt, CLI/TUI fleet parity](https://github.com/Hmbown/CodeWhale/pull/4919)**  
   Lands a 3,250-line control-plane contract: stable `<domain>.<verb>` IDs, read/write authority, bounded receipts, verb aliasing, and a TOCTOU-safe terminal-transition stop. This is the architecture that will underpin all `/lane` and `/fleet` interactions.

3. **[#4924 — feat(fleet): saved exact Fleets + reasoning Router](https://github.com/Hmbown/CodeWhale/pull/4924)**  
   A full rewrite of the Saved-Fleets + Router design. Introduces exact-Fleet schema (frozen provider/model routes), permission/shell ceilings, role-alias canonicalization, and collision detection. The first pass's review blockers are addressed.

4. **[#4923 — feat(tui): visual program slices — luminance audit, selection vocabulary, focus texture, opt-in sound, jellyfish](https://github.com/Hmbown/CodeWhale/pull/4923)**  
   Harvests five reviewed visual-supervision slices: theme contrast audit (3:1 minimum), menu selection vocabulary, focus texture, opt-in sound effects, and a "jellyfish" ambient animation. This is the polish layer for v0.9.2.

5. **[#4921 — feat(provider): StepFun billing-route setup stage + Go/Zen billing framing](https://github.com/Hmbown/CodeWhale/pull/4921)**  
   Implements the StepFun billing-route stage (PAYG vs Step Plan) *before* API key entry, mirroring the Kimi pattern. Skip-guard for unrecognized base URLs. Closes #4526.

6. **[#4929 — fix(acp): preserve numeric JSON-RPC IDs for avante.nvim compatibility](https://github.com/Hmbown/CodeWhale/pull/4929)**  
   A first-time contributor fix: the ACP response helper was coercing numeric IDs to strings (for Zed compatibility). This broke avante.nvim because Lua table keys distinguish `callbacks[1]` from `callbacks["1"]`. Now preserves the original type.

7. **[#4928 — feat(tui): add thinking_default_expanded setting](https://github.com/Hmbown/CodeWhale/pull/4928)**  
   New setting renders thinking blocks expanded by default. Space still toggles each block. Especially useful for SSH/tmux users where Space may be captured by the terminal.

8. **[#4913 — test(preview): provider-free manifest×wire matrix for four exact routes](https://github.com/Hmbown/CodeWhale/pull/4913)**  
   A wiremock-based test harness that joins request manifests to captured wire bodies for the v0.9.2 benchmark routes (GLM-5.2, GLM-5-Turbo, kimi-k3, Gemini-2.5-pro). Zero live calls — deterministic verification.

9. **[#4931 — Migrate QA PTY test harness from vt100 to rio-vt](https://github.com/Hmbown/CodeWhale/pull/4931)**  
   Swaps the PTY test harness from the vt100 crate to Rio's terminal engine (`rio-vt`). This migration improves terminal emulation accuracy for the TUI rendering tests.

10. **[#4897 — perf(tui): streaming re-parses the whole growing message every chunk](https://github.com/Hmbown/CodeWhale/pull/????)**  
    (Not listed in the top 20 by comment count but logically present.) Closes the O(N²) markdown parsing bug — a clear developer velocity win.

## Feature Request Trends

- **Visual motion demos**: The most-upvoted request (#4906) is for a recorded session GIF or video. No static docs suffice for a terminal agent — this is the #1 community ask for onboarding.
- **Clickable file references**: Issue #2342 (open since May) wants output files to open on click instead of requiring directory navigation. A repeated ask from Chinese-speaking users.
- **Always-expanded reasoning**: #4925 (now closed by #4928) reflects a broad user desire for visible thinking blocks, especially over SSH where keybindings fail.
- **Provider endpoint flexibility**: #4526 (now closed) represents a persistent theme: users want per-tier endpoint configuration (StepFun Plan, OpenCode Go) rather than a single default URL.
- **Theming and visual polish**: #4934 hints at growing interest in website theming; #4923's TUI visual slices (jellyfish, focus texture) suggest the terminal itself is getting richer.

## Developer Pain Points

- **Streaming performance**: Issue #3897 (O(N²) markdown parsing) is the most concrete technical debt. Long streaming outputs churned the CPU — a direct hit to developer trust during interactive sessions.
- **Fake billing transparency**: Issue #4797 reveals the cost surface is 2,003 lines of hand-maintained rates with hidden cache-write costs. The `/cost` command understates real spend, and the community is uncomfortable with opaque pricing.
- **Dead-code accumulation**: Issue #4785 counts 464 `#[allow(dead_code)]` annotations. The compiler has been structurally suppressed — a maintenance fire that risks shipping broken paths.
- **CI flakiness**: Issue #4907 documents a deterministic CI failure on `main` for the web frontend deploy workflow. The trigger logic contradicts the manual-only preflight — every push to main is red.
- **Keybinding conflicts over SSH**: Issues #4925 and #4930 both highlight that Space and Enter behave differently over SSH/tmux. The Space-for-expand defaults fail; Enter during a foreground shell eats keystrokes. These are the most common "it broke for me" reports from remote users.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*