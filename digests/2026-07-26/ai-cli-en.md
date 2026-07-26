# AI CLI Tools Community Digest 2026-07-26

> Generated: 2026-07-26 01:44 UTC | Tools covered: 10

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

# AI CLI Tools Cross-Tool Comparison Report
**Date:** 2026-07-26  
**Prepared for:** Technical decision-makers and developers evaluating the AI CLI ecosystem

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly, with seven active projects displaying distinct development philosophies and community priorities. A dominant signal across all tools is the community push for **cross-tool interoperability**—embodied by the `AGENTS.md` standard—as developers increasingly manage multi-tool workflows. Simultaneously, **session reliability** (resume, compaction, task persistence) and **billing/metering transparency** remain universal pain points eroding user trust. The ecosystem is bifurcating between tools optimizing for agent autonomy (Gemini CLI, Qwen Code) versus those prioritizing developer UX polish and stability (Copilot CLI, Claude Code). Notably, **Windows support** emerges as a persistent weak point across nearly every tool, while **subagent orchestration** and **context visibility** are the next frontier of feature demand.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Active PRs (24h) | Release Status (24h) | Community Engagement Signal |
|------|-----------------|-----------------|---------------------|---------------------------|
| **Claude Code** | 13 highlighted | 7 PRs updated | No new release | #6235 (AGENTS.md): 4,451 👍 — highest across all tools |
| **OpenAI Codex** | 10 highlighted | 10 PRs updated | 2 alpha releases (Rust) | #10450 (Remote Dev): 690 👍 |
| **Gemini CLI** | 10 highlighted | 10 PRs updated | Nightly build | Moderate engagement; EPIC-based development |
| **Copilot CLI** | 10 highlighted | 2 PRs (stale/stray) | No new release | Session reliability regressions dominating |
| **Kimi Code CLI** | 2 updated | 4 PRs (3 closed) | No new release (v1.44.0 current) | Lower volume; focused on session fixes |
| **OpenCode** | 10 highlighted | 10 PRs updated | No new release | #37012 (Legacy layout): 31 👍 |
| **Pi** | 10 highlighted | 10 PRs updated | **v0.82.1 released** | Compaction/Copilot Enterprise issue: 11 👍 |
| **Qwen Code** | 10 highlighted | 10 PRs updated | Nightly build | Fast iteration; subagent features |
| **DeepSeek TUI** | 10 highlighted | 10 PRs updated | No new release (v0.9.2 cycle) | Provider diversity push |
| **Grok Build** | 0 | 0 | No activity | Dormant |

**Key observations:**
- **Pi** is the only tool to ship a stable release today (v0.82.1 with Claude Opus 5 support)
- **Kimi Code** shows lowest activity volume, suggesting a smaller or less vocal community
- **Copilot CLI** has minimal PR activity but high-severity open issues—potential maintenance bottleneck
- **Grok Build** is effectively inactive

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating genuine market demand:

### 3.1 Cross-Tool Agent Standardization
| Tool | Evidence |
|------|----------|
| **Claude Code** | #6235: AGENTS.md support — 4,451 👍 (most-upvoted issue) |
| **Kimi Code** | #2519: AGENTS.md edits applied on session resume (fix landed) |
| **Pi** | No direct issue, but extension compatibility mechanisms in PRs |
| **Signal** | Developers want **one configuration format** that works across all agent tools |

### 3.2 Remote / Headless Development
| Tool | Evidence |
|------|----------|
| **OpenAI Codex** | #10450: Remote Development — 690 👍 (top feature request) |
| **Kimi Code** | #1282: Remote control/cross-device continuation — 16 👍 |
| **Pi** | #7114: Manual OAuth for headless/remote machines |
| **Signal** | Shift from local-only to cloud/SSH-connected workflows |

### 3.3 Session Resilience & Context Management
| Tool | Evidence |
|------|----------|
| **Claude Code** | #76844: Task state lost on resume; #18027: Context visibility |
| **Copilot CLI** | #4251: OOM on resume; #4183: CAPI 5MB limit; #4246: archive_session timeout |
| **Gemini CLI** | #22323: Subagent termination misreporting |
| **OpenCode** | #38791: Infinite loop on non-chronological message IDs |
| **Pi** | #7020: Stalls post-compaction; #6768: Compaction failures |
| **Signal** | **Session state management** remains the #1 reliability challenge ecosystem-wide |

### 3.4 Windows Cross-Platform Quality
| Tool | Evidence |
|------|----------|
| **OpenAI Codex** | #33776: Orphaned processes; #34133: GPU crash; #26478: Spellcheck broken |
| **Gemini CLI** | #28348: OAuth loop on Windows (fixed) |
| **Copilot CLI** | (No specific Windows issues in scope, but terminal rendering bugs affect all platforms) |
| **Kimi Code** | #2558: Windows test compatibility (open PR) |
| **OpenCode** | #34442: ripgrep not bundled; #37096: Web UI empty on WSL |
| **Pi** | #7064: WSL Windows paths broken |
| **Qwen Code** | #7684: IME cursor alignment on macOS |
| **Signal** | **Windows support is consistently worse** than macOS/Linux across the ecosystem |

### 3.5 Token Usage Transparency & Metering
| Tool | Evidence |
|------|----------|
| **Claude Code** | #81234: Suspicious cache_read metering; #18027: Context utilization visibility |
| **Gemini CLI** | #28401: Bound command output (saves tokens) |
| **Qwen Code** | #7719: No token usage display anywhere |
| **DeepSeek TUI** | #4520: Configurable token breakdown by category |
| **Signal** | Users demand **real-time, per-category token cost visibility** |

### 3.6 Subagent Intelligence & Model Selection
| Tool | Evidence |
|------|----------|
| **Claude Code** | #80988: Prompt injection overriding delegation policy |
| **Gemini CLI** | #21968: Model not using skills/sub-agents; #22323: Subagent misreporting |
| **Qwen Code** | #7685: AI-selectable model grades for subagents; #7585: External context for subagents |
| **Signal** | The next frontier: **intelligent, configurable subagent orchestration** |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Primary focus** | Multi-agent workflows, billing infrastructure | Remote dev, Windows stability | Agent autonomy evaluation, CI automation | Session reliability, plugin ecosystem | Session consistency, cross-device | UI customization, provider flexibility | TUI performance, compaction | Subagent intelligence, sandboxing | Provider diversity, i18n |
| **Target user** | Power users, heavy multi-agent | Enterprise, cross-platform | ML researchers, evaluators | GitHub-centric developers | General developers | UI-sensitive developers | Terminal purists | Chinese market, STEM | Global, non-DeepSeek users |
| **Technical approach** | Proprietary CLAUDE.md + OAuth heavy | Rust alpha, Git-based workflows | EPIC-driven, eval-first development | Plugin marketplace, CAPI-based | Minimalist, session-centric | TUI-first with web UI, plugin architecture | Monorepo, vitest eval harness | Nightly fast iteration, Dream memory | Rust TUI, locale packs |
| **Release cadence** | Unstable (no recent release) | Alpha (two Rust releases today) | Nightly builds | Stalled (no release) | Stable (v1.44.0) | Unstable (desktop v1.18.5 regressions) | **Active (v0.82.1 today)** | Nightly builds | Unstable (v0.9.2 cycle) |
| **Community health** | High volume, polarized (billing vs features) | Medium-high, Windows pain concentrated | Medium, eval-driven | Medium-low, regressions dominating | Low | Medium, UI-centric | Medium-high, technical | Growing, fast-paced | Medium, provider diversity niche |
| **Unique strength** | Largest feature request (AGENTS.md) | Alpha Rust innovation | Evaluation framework maturity | Plugin ecosystem | Remote control vision | UI customization | TUI performance focus | Subagent model grading | Provider-agnostic design |
| **Unique weakness** | Billing/authentication trust erosion | Windows stability crisis | Agent hangs, underutilized skills | Session resurrection regressions | Low community activity | v1.18.5 regression suite | Compaction reliability | IME/MCP integration fragility | DeepSeek-centric assumptions |

---

## 5. Community Momentum & Maturity

### High Momentum (Rapidly Iterating)
- **Pi** — Shipped v0.82.1 with Claude Opus 5 support; active PR pipeline (10 PRs); addressing TUI performance systematically
- **Qwen Code** — Nightly releases; subagent intelligence (model grading, external context) moving fast; PRs for sandbox probing, mutation testing
- **DeepSeek TUI** — v0.9.2 cycle active; 10 PRs; provider diversity push (new Minimax routes); localization infrastructure

### Mature but Cautious (Stable core, slower feature velocity)
- **Claude Code** — Highest community engagement (4,451 👍 on single issue) but no recent release; billing/trust issues may slow adoption
- **OpenAI Codex** — Alpha releases indicate experimentation phase; community vocal about Windows stability but feature velocity moderate
- **Copilot CLI** — Stalled releases + critical regressions = risk of user attrition; plugin ecosystem shows promise but 32-skill cap limits value
- **OpenCode** — Desktop v1.18.5 regressions suggest QA gaps; feature requests (legacy layout) show community cares about UX direction

### Lower Momentum
- **Kimi Code** — Low issue/PR volume; session consistency focus but limited visible progress
- **Gemini CLI** — Moderate activity but EPIC-driven development suggests long development cycles; agent hangs remain unresolved
- **Grok Build** — Dormant; no activity in 24h

---

## 6. Trend Signals

### 6.1 Cross-tool interoperability is the #1 ecosystem demand
The `AGENTS.md` standard (Claude Code #6235) is the single most-upvoted issue across all tools. Developers are tired of per-tool configuration formats and want a `CONTRIBUTING.md`-equivalent for AI agents. **Building AGENTS.md support first is a competitive advantage.**

### 6.2 Remote/headless development is the next platform shift
OpenAI Codex (#10450, 690👍) and Kimi Code (#1282, 16👍) both prioritize remote sessions. As developers move from desktop to cloud/container workflows, **tools that support SSH, OAuth on headless machines, and session persistence across devices will win.**

### 6.3 Session resilience is the reliability crisis nobody has solved
Every tool except Kimi Code has at least one critical session reliability bug (OOM on resume, task state loss, compaction failures). This is the **highest-ROI engineering investment** for any tool—solving it would instantly differentiate.

### 6.4 Token transparency is a trust prerequisite
Claude Code (#81234), Qwen Code (#7719), and DeepSeek TUI (#4520) all expose the opacity of token metering. As API costs scale, **per-category, real-time token usage display becomes table stakes.**

### 6.5 Windows quality remains the ecosystem's weakest link
Eight of nine active tools have known Windows or WSL bugs. For enterprise adoption where Windows Developer Mode/VM usage is common, **Windows-first quality assurance is a major differentiator.**

### 6.6 Agent autonomy vs. user control is an unresolved tension
Claude Code (#80988: `heron_brook` override) and Gemini CLI (#21968: model ignoring skills) show that **models are increasingly overridden in how they use tools/subagents.** Users want more control, not less.

### 6.7 TUI performance is a competitive battleground
Pi, OpenCode, and DeepSeek TUI all compete on terminal UX quality. Pi's focus on compaction and rendering performance (#6665, #6050) signals that **TUI responsiveness is a key user satisfaction metric** for CLI-native developers.

---

## Recommendation Summary

| Target Area | Leading Tool | Gap to Address |
|-------------|-------------|----------------|
| Cross-tool standard support | Claude Code (demand) | Need actual implementation, not just request |
| Remote development | OpenAI Codex (vision) | Stability gaps before remote is viable |
| Session resilience | None (all struggling) | **Highest-value investment** for any tool |
| Windows quality | None (all weak) | **Biggest differentiation opportunity** |
| Token transparency | DeepSeek TUI (planning) | Qwen Code and Claude Code need to catch up |
| Subagent orchestration | Qwen Code (implementing) | Model grading is a promising direction |
| TUI performance | Pi (active fixes) | OpenCode and DeepSeek TUI close behind |

**Bottom line:** The AI CLI ecosystem is converging on cross-tool standards, session reliability, and agent autonomy as core requirements. Pi and Qwen Code are iterating fastest; Claude Code has the largest community but trust issues; Copilot CLI and Kimi Code risk falling behind without addressing session regressions. For tool builders, **solving session resilience and Windows quality** simultaneously would create a definitive competitive moat.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-26** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests attracted the most community discussion and represent the most-watched Skill development activity:

### #1298 — Fix `run_eval.py` Recall Reporting (Skill-Creator)
- **Functionality**: Repairs the core evaluation script used by the skill-creator optimization loop (`run_loop.py`, `improve_description.py`). Fixes a critical bug where `recall=0%` was reported for every skill description regardless of content, effectively rendering the description-optimization pipeline useless.
- **Discussion highlights**: References issue #556 (12 comments, 7 👍), which multiple users independently reproduced. The fix addresses four root causes: eval artifact installation, Windows stream reading, trigger detection logic, and parallel worker behavior.
- **Status**: Open | [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #514 — Add `document-typography` Skill
- **Functionality**: Provides typographic quality control for AI-generated documents — preventing orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a universal pain point in Claude-generated documents.
- **Discussion highlights**: Recognized as broadly applicable across all document types; users noted these issues affect "every document Claude generates."
- **Status**: Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### #486 — Add ODT Skill (OpenDocument Format)
- **Functionality**: Enables Claude to create, fill, read, and convert OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, LibreOffice, or requests for open-source document formats.
- **Discussion highlights**: Addresses enterprise demand for LibreOffice/OpenOffice compatibility. Includes template filling and ODT-to-HTML conversion.
- **Status**: Open | [PR #486](https://github.com/anthropics/skills/pull/486)

### #210 — Improve `frontend-design` Skill Clarity
- **Functionality**: Revises the frontend-design skill to ensure every instruction is actionable within a single conversation, with specific guidance to steer Claude's behavior toward usable, coherent output.
- **Discussion highlights**: Focus on "actionability" — making skills less abstract and more executable. The conversation centered on how to structure skill instructions for reliable agent execution.
- **Status**: Open | [PR #210](https://github.com/anthropics/skills/pull/210)

### #1367 — Add `self-audit` Skill (v1.3.0)
- **Functionality**: A universal skill that audits AI output before delivery. Performs mechanical file verification (every claimed output file exists) followed by a four-dimension reasoning quality audit in damage-severity priority order.
- **Discussion highlights**: Novel approach combining file-level verification with reasoning quality gating. Designed to work "with any project, any tech stack, any model."
- **Status**: Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #723 — Add `testing-patterns` Skill
- **Functionality**: Comprehensive testing skill covering the full stack — Testing Trophy model philosophy, AAA pattern unit testing, React component testing with Testing Library, end-to-end patterns, and guidance on what to test vs. what not to test.
- **Discussion highlights**: Strong community interest in structured testing guidance for AI-assisted development.
- **Status**: Open | [PR #723](https://github.com/anthropics/skills/pull/723)

### #525 — Add `pyxel` Skill (Retro Game Development)
- **Functionality**: Integrates with pyxel-mcp, an MCP server for the Pyxel retro game engine. Covers the full workflow: write, run-and-capture, inspect, iterate — enabling Claude to create pixel-art/8-bit games in Python.
- **Discussion highlights**: Represents a creative/entertainment niche with active maintainer engagement.
- **Status**: Open | [PR #525](https://github.com/anthropics/skills/pull/525)

### #1302 — Add `color-expert` Skill
- **Functionality**: Self-contained color expertise for any task involving color knowledge. Covers naming systems (ISCC-NBS, Munsell, RAL, XKCD), color spaces with usage guides (OKLCH for scales, OKLAB for gradients), and accessibility standards.
- **Discussion highlights**: Addresses a gap in design-focused skills; combines technical color science with practical application guidance.
- **Status**: Open | [PR #1302](https://github.com/anthropics/skills/pull/1302)

---

## 2. Community Demand Trends

Analysis of the most-commented Issues reveals five clear demand directions:

### 🔐 Security & Trust Boundaries (#492 — 43 comments)
The highest-activity issue in the repository. Community members are concerned that community-contributed skills distributed under the `anthropic/` namespace create a trust boundary vulnerability — users may grant elevated permissions to skills they mistake for official Anthropic releases. This signals demand for:
- Namespace separation (official vs. community)
- Permission scoping and audit trails
- Signed or verified skill distribution

### 🏢 Enterprise & Organizational Features (#228 — 16 comments)
Strong demand for org-wide skill sharing within Claude.ai. Currently users must manually transfer `.skill` files via Slack/Teams and have colleagues navigate Settings > Capabilities to upload. Requested features:
- Shared skill library
- Direct sharing links
- Organizational skill management

### 🛠️ Tooling Reliability (#556 — 12 comments, #1061 — 3 comments, #1169 — 3 comments)
Multiple reports of the skill-creator evaluation pipeline being broken. The `run_eval.py` script consistently reports `recall=0%` on all platforms, with additional Windows-specific failures. This is blocking effective skill optimization and description improvement.

### 🧠 Memory & Context Management (#1329 — 9 comments)
A proposal for "compact-memory" — using symbolic notation to represent agent state compactly in context. Addresses the problem of long-running agents spending excessive context on prose-style notes and persistent memory.

### 📋 Governance & Safety (#412 — 6 comments)
Proposal for an "agent-governance" skill covering safety patterns for AI agent systems — policy enforcement, threat detection, trust scoring, and audit trails. Indicates demand for making Claude Code safe for production agent deployments.

### ⚠️ Duplicate Skills & Plugin Architecture (#189 — 6 comments)
Users report that installing both `document-skills` and `example-skills` plugins results in identical skills, causing context window waste. Points to need for better plugin deduplication and dependency management.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to land soon:

| PR | Skill | Why it's likely to merge |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `run_eval.py` fix (skill-creator) | Critical bug blocking the entire optimization pipeline; multiple independent reproductions |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` — reasoning quality gate | Novel capability addressing output quality; updated to v1.3.0 with mechanical verification |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Comprehensive, well-scoped; fills a clear gap in the skills collection |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Self-contained, non-controversial, addresses a clear design need |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Solves a universal document quality problem; low risk of side effects |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` (retro games) | Author is also the maintainer of the underlying MCP server; strong alignment |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliability infrastructure — fixing the skill-creator evaluation pipeline and establishing trust/security boundaries — before expanding into new functional domains like testing, auditing, and document quality.**

---

# Claude Code Community Digest — 2026-07-26

Today’s issue tracker is buzzing with one clear signal: the community is pushing hard for cross-tool agent standardisation, while billing and authentication issues continue to erode trust. A single feature request for `AGENTS.md` support has accumulated over 4,000 👍 and 340+ comments, far outpacing all other topics. Meanwhile, several high-severity bugs around OAuth loops, account deletion, and quota metering surfaced over the weekend. No new releases landed in the last 24 hours.

---

## Releases

No new versions were published in the last 24 hours.

---

## Hot Issues

**#6235 – Feature Request: Support AGENTS.md**  
[Link](https://github.com/anthropics/claude-code/issues/6235)  
>347 comments, 4,451 👍 (most-upvoted issue by a wide margin).  
The community wants Claude Code to adopt the emerging `AGENTS.md` standard, which is already supported by Codex, Amp, Cursor, and others. The current `CLAUDE.md` is seen as too Anthropic-specific and breaks collaboration when multiple agent tools interact with the same codebase.

**#68429 – Unauthorized Pro→Max upgrade led to permanent account + data deletion; refund stuck**  
[Link](https://github.com/anthropics/claude-code/issues/68429)  
A user reports that an automated plan upgrade triggered irreversible account deletion with no human escalation path. The refund request is stuck in an AI loop. Despite zero 👍, this is a critical trust and support escalation issue.

**#77966 – Claude account /login OAuth loop on Linux & IntelliJ**  
[Link](https://github.com/anthropics/claude-code/issues/77966)  
>12 comments, 9 👍.  
After a "sign in again to continue" redirect, the OAuth state parameter is dropped, causing an infinite loop. Affects Linux and IntelliJ platform users.

**#18027 – Native context visibility for self-regulating multi-context workflows**  
[Link](https://github.com/anthropics/claude-code/issues/18027)  
>11 comments, 8 👍.  
Users want Claude Code to expose its current context utilization (tokens, subagent states) so workflows can dynamically adjust delegation and branching without guesswork.

**#67085 – Desktop activity dashboard streak/heatmap credits session-start date, not each active calendar day**  
[Link](https://github.com/anthropics/claude-code/issues/67085)  
>9 comments, 4 👍.  
A cosmetic but frustrating bug: multi-day sessions break the streak because the dashboard only logs the session-start date, not each day of use.

**#79798 – `alwaysThinkingEnabled` not translated to `thinking:{type:"adaptive"}` on Opus 4.8**  
[Link](https://github.com/anthropics/claude-code/issues/79798)  
>7 comments, 1 👍.  
Critical model integration bug: the setting is silently ignored, and `xhigh` effort with WebSearch returns a 400 error. Sessions run without extended thinking despite the user’s explicit configuration.

**#64988 – Claude should default to user's local timezone, not UTC**  
[Link](https://github.com/anthropics/claude-code/issues/64988)  
>3 comments, 1 👍.  
Times reported for cron, logs, deployments, etc. are always UTC. This causes friction for non-UTC developers who must mentally offset every timestamp.

**#80988 – `heron_brook` prompt section injects "Do not call AgentTool unless user requested it" for Opus 5 – no opt-out**  
[Link](https://github.com/anthropics/claude-code/issues/80988)  
>3 comments, 0 👍.  
A new system prompt section (registered as `heron_brook`) in v2.1.219 silently overrides the user’s delegation policy on Opus 5. Users cannot disable this restriction, which breaks multi-agent workflows for those who rely on autonomous subagent spawning.

**#76844 – Task list (TaskCreate/TaskList) not restored on `--resume` – task IDs resolve to new runtime IDs**  
[Link](https://github.com/anthropics/claude-code/issues/76844)  
>2 comments, 1 👍.  
Tasks created with `TaskCreate` are lost on session resume, forcing manual recreation. This undermines the entire task-based workflow for long-lived development sessions.

**#81234 – Max 20x weekly quota drained 53% in 2 days; transcript accounting shows far lower usage – `cache_read` metering suspected**  
[Link](https://github.com/anthropics/claude-code/issues/81234)  
>2 comments, 1 👍.  
A Max plan user reports suspiciously fast quota depletion during idle periods, with evidence that `cache_read` tokens are being overcounted. Could affect all usage-based plan users.

---

## Key PR Progress

**#81262 – Log closed issues as closure events in Statsig**  
[Link](https://github.com/anthropics/claude-code/pull/81262)  
Fixes an analytics bug where closing an issue was recorded as another creation event. Now emits `github_issue_closed` correctly.

**#81261 – Handle worktree paths with spaces in `/clean_gone`**  
[Link](https://github.com/anthropics/claude-code/pull/81261)  
Improves branch cleanup by using `git for-each-ref` and `git worktree list --porcelain -z` to safely parse worktree paths containing spaces (e.g., `/tmp/my project/feature`).

**#39043 – Remove "retro-futuristic" recommendation from Frontend Design Skill**  
[Link](https://github.com/anthropics/claude-code/pull/39043)  
Author `t3dotgg` simply says "Trust me on this one." Removes an outdated stylistic recommendation from the frontend skill prompt.

**#15727 – fix(hookify): correct Python import paths for hook modules**  
[Link](https://github.com/anthropics/claude-code/pull/15727) *(CLOSED)*  
Fixes the `hookify` plugin by adjusting import paths so that `claude_code_hookify` modules resolve correctly relative to `CLAUDE_PLUGIN_ROOT`.

**#49596 – refactor: extract shared GitHub API client into `github-api.ts` with tests**  
[Link](https://github.com/anthropics/claude-code/pull/49596) *(CLOSED)*  
Refactors duplicate GitHub API logic into a shared client module with unit tests, improving maintainability.

---

## Feature Request Trends

The most-requested feature by an order of magnitude is **cross-tool agent standardisation** (`AGENTS.md` support, #6235). The community clearly wants Claude Code to interoperate seamlessly with other agent tools rather than forcing a proprietary configuration format.

Other recurring themes:
- **Context visibility** – surfacing token usage, subagent state, and effort levels so users can self-regulate complex multi-context workflows (#18027, #76863).
- **Timezone/locale awareness** – reporting times in the user's local timezone rather than UTC (#64988).
- **Visual feedback improvements** – a "Uploading" indicator (#81287) and even a playful "Hallucinating…" status string (#81286).
- **Task persistence** – ensuring task data survives session resumes without ID renumbering (#76844, #80871).

---

## Developer Pain Points

- **Billing and account management** – Unauthorised plan upgrades leading to data deletion (#68429), suspicious quota depletion (#81234), and no human escalation for refunds.
- **Authentication fragility** – OAuth loops on Linux/IntelliJ (#77966), stale credentials files overriding valid env vars (#81281), and `git-credential-proxy` 403 errors (#81282).
- **Session resume breaks task state** – Task IDs are reset after `--resume`, making long-running task-oriented workflows unreliable (#76844, #80871).
- **Subagent reliability** – Spawned subagents hang on first tool call with no error (#78313).
- **Missing opt-outs for prompt injections** – System prompt sections like `heron_brook` can override user-configured delegation policies without any setting to disable (#80988).
- **Model availability inconsistencies** – Fable 5 unavailable in VS Code extension and CLI while still showing as available in the Claude app (#81283).
- **Metering opacity** – Users suspect `cache_read` tokens are being overcounted, causing unexpected quota exhaustion, with no transparency into the calculation (#81234).
- **Auto-mode safety guard bypass** – `rm -rf` inside backtick substitution executes without a confirmation prompt (#81273).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest – 2026-07-26

## Today’s Highlights
Two new Rust alpha releases (`v0.146.0-alpha.10` and `v0.146.0-alpha.10.1`) rolled out, but no changelog details were provided. The community remains most vocal about **remote development** (the top-voted enhancement with 690 👍) and a cascade of **Windows‑specific stability bugs**, including GPU process crashes, spellcheck failures, and runaway process leaks. Several closed PRs landed important stability fixes for MCP server recursion, stdio frame sizing, and Windows executable path plumbing.

## Releases
- **rust-v0.146.0-alpha.10.1** – [Release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1)  
- **rust-v0.146.0-alpha.10** – [Release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10)  
No detailed release notes were published for either.

## Hot Issues (10 selected)
1. **#10450 – Remote Development in Codex Desktop App** (178 comments, 690 👍)  
   [Issue](https://github.com/openai/codex/issues/10450) – **CLOSED**  
   The most requested feature: extending Codex Desktop to support remote SSH or dev‑container workflows, bridging the gap with VS Code Remote. Community reaction was overwhelmingly positive.

2. **#1457 – Python UV fails in Codex** (61 comments, 46 👍)  
   [Issue](https://github.com/openai/codex/issues/1457) – **CLOSED**  
   Running `uv` commands inside Codex sandboxes fails for tools like `pre-commit`. A long‑standing bug affecting Python developers.

3. **#33776 – Hundreds of `taskkill.exe`/`conhost.exe` processes on Windows** (24 comments, 21 👍)  
   [Issue](https://github.com/openai/codex/issues/33776) – **OPEN**  
   Codex Desktop spawns up to 287 orphaned processes, causing WMI storms and DWM degradation. Severity: high.

4. **#30132 – `oneOf` root schema breaks Azure OpenAI endpoint** (21 comments, 19 👍)  
   [Issue](https://github.com/openai/codex/issues/30132) – **CLOSED**  
   JSON schemas using `"oneOf"` at the root cause errors when using Azure OpenAI as the provider. Cross‑platform regression.

5. **#29356 – Context compaction loses operational continuity** (20 comments)  
   [Issue](https://github.com/openai/codex/issues/29356) – **OPEN**  
   Automatic context compaction drops recent user steps; user requests preserving the last 5 steps verbatim.

6. **#30408 – MCP server processes never cleaned up (9+ GB RSS)** (17 comments, 4 👍)  
   [Issue](https://github.com/openai/codex/issues/30408) – **OPEN**  
   Orphaned MCP server per‑thread processes accumulate, wasting memory. A clear performance bug for heavy multi‑thread users.

7. **#34133 – GPU process crash on Windows after Code Integrity rejection** (14 comments)  
   [Issue](https://github.com/openai/codex/issues/34133) – **OPEN**  
   In‑app browser screenshot triggers GPU crash when bundled `vk_swiftshader.dll` is blocked by Windows Code Integrity.

8. **#35058 – Codex Diff crashes with “Oops, an error has occurred”** (12 comments, 11 👍)  
   [Issue](https://github.com/openai/codex/issues/35058) – **OPEN**  
   VS Code extension diff view is completely broken on macOS – affects every repository.

9. **#26478 – Spellcheck shows “No Guesses Found” on Windows** (12 comments, 23 👍)  
   [Issue](https://github.com/openai/codex/issues/26478) – **OPEN**  
   Windows native spellcheck underlines misspellings but offers no suggestions. Isolated to Codex Desktop.

10. **#31864 – All GPT‑5.6 Sol calls fail due to reserved `spawn_agent`** (6 comments, 14 👍)  
    [Issue](https://github.com/openai/codex/issues/31864) – **OPEN**  
    Multi‑agent sessions break because the model tries to use a reserved `collaboration.spawn_agent` tool. High impact for Pro users on the ultra plan.

## Key PR Progress (10 selected)
1. **#35414 – Raise MCP server recursion limit** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35414) – Sets Rust recursion limit to 256 for MCP server crates, preventing stack overflows.

2. **#31817 – Update models.json** (OPEN)  
   [PR](https://github.com/openai/codex/pull/31817) – Automated update of model configurations, likely adding newer model support.

3. **#35408 – Ignore generated system skills in the skills watcher** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35408) – Prevents the file watcher from double‑registering system skills, reducing overhead.

4. **#35375 – Make keymap action menu responsive** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35375) – Improves CLI TUI by stacking action descriptions when space is tight.

5. **#35365 – Keep unified mention results fresh** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35365) – Restarts file search on popup open so stale results are not reused.

6. **#35364 – Bound Code Mode metadata compatibility headers** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35364) – Prevents unbounded header growth in `x-codex-turn-metadata` by omitting the tool‑name map.

7. **#35363 – Include item start times in completion events** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35363) – Adds `started_at_ms` field for better telemetry and latency tracking.

8. **#35359 – Handle exec‑server network policy requests in the client** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/35359) – Adds client‑side routing for network policy decisions (allow/deny/ask), with bounded concurrency.

9. **#31582 – Expose thread‑selected skills from skills/list** (CLOSED)  
   [PR](https://github.com/openai/codex/pull/31582) – Makes thread‑selected environment skills visible via the Skills API, with warnings if a selected environment is unavailable.

10. **#30228 – Notify clients when thread‑selected skills change** (CLOSED)  
    [PR](https://github.com/openai/codex/pull/30228) – Sends invalidation signals when environment readiness or skill availability changes.

## Feature Request Trends
The dominant feature request remains **Remote Development support** (issue #10450, 690 👍). Users want SSH‑based, container, or cloud‑hosted remote workspaces integrated directly into Codex Desktop. Other notable trends:
- **Persistent usage limit display** (issue #32195) – show 5‑hour and weekly limits in the status bar.
- **Improved accessibility** (issue #34211) – screen‑reader and keyboard navigation fixes for the Windows desktop app.
- **Better context compaction** – the community repeatedly asks to preserve recent operational steps and avoid unnecessary image base64 embedding during compaction.

## Developer Pain Points
Recurring frustrations fall into a few buckets:
- **Windows instability** – GPU crashes, spellcheck “No Guesses Found”, orphaned process storms, and Code Integrity conflicts are the top Windows‑specific complaints.
- **Context compaction regressions** – Lost work, endless re‑reading of files, and unexpected credit consumption (e.g., issue #35226) undermine long‑running tasks.
- **Resource leaks** – MCP server processes and WebSocket‑based session handoffs often leave orphaned processes or fail on large payloads (16 MiB+ conversations).
- **Extension authentication breakage** – VS Code extension updates (especially `26.721.30844`) repeatedly break login and crash after sign‑in on both Windows and macOS.
- **Model‑level tool conflicts** – Reserved tool names (`spawn_agent`) and custom provider compatibility (`oneOf` schemas, `upstream_error` on non‑OpenAI APIs) create hard roadblocks for power users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI Community Digest – 2026-07-26

### Today’s Highlights
- Nightly build **v0.54.0-nightly.20260726** rolled out, though no feature changes beyond version bumps.
- A critical subagent bug (#22323) where `MAX_TURNS` interruptions are misreported as “GOAL success” continues to draw discussion, with 12 comments in the last day.
- A major CI reliability fix (#28534) landed to address dist-tag races after npm publish, and an OAuth token refresh fix (#28481) aims to stop forced re-authentication for MCP servers.

### Releases
- **[v0.54.0-nightly.20260726.g3818efbbf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260726.g3818efbbf)** (nightly, no feature changes; changelog entries only for previous releases).

### Hot Issues (10 Noteworthy)
1. **#[22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as GOAL success**  
   *12 comments, 2 👍* – The `codebase_investigator` subagent claims success despite hitting turn limits. Misleading termination reason undermines trust in agent reports. Community is actively discussing root cause.

2. **#[21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs**  
   *8 comments, 8 👍* – Simple folder creation hangs indefinitely when the generalist agent is invoked. Workaround: forbid sub-agent usage. High user impact; one of the most upvoted open bugs.

3. **#[19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model's bash affinity via Zero-Dependency OS Sandboxing**  
   *8 comments, 1 👍* – Proposal to let Gemini 3 use native POSIX tools directly while sandboxing execution. Could dramatically reduce tool call overhead, but requires careful security design.

4. **#[24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component-level evaluations**  
   *7 comments* – An EPIC expanding behavioral evals (76 tests so far) to cover component-level scenarios. Critical for preventing regressions in agent behavior.

5. **#[22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess AST-aware file reads, search, and mapping**  
   *7 comments, 1 👍* – Investigates using AST tools (like tilth/glyph) to reduce noise and token usage. Could improve code understanding and reduce turn count.

6. **#[21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Gemini does not use skills and sub-agents enough**  
   *6 comments* – Even when custom skills (gradle, git) are available, the model rarely invokes them. Reduces the value of user-defined tools.

7. **#[26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Auto Memory retrying low-signal sessions indefinitely**  
   *5 comments* – Sessions judged low-signal remain unprocessed, causing repeated re-evaluation. Causes waste and potential loops.

8. **#[25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution gets stuck after command completes**  
   *4 comments, 3 👍* – Simple CLI commands (e.g. `ls`) remain in “Waiting input” state even after finishing. Breaks workflows and burns tokens.

9. **#[21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails on Wayland**  
   *4 comments, 1 👍* – Termination reason `GOAL` without actual success when running under Wayland. Platform-specific blocker.

10. **#[22672](https://github.com/google-gemini/gemini-cli/issues/22672) – Agent should stop/discourage destructive behavior**  
    *3 comments, 1 👍* – Model occasionally uses `git reset --force` or dangerous DB operations when safer alternatives exist. Need for safety guardrails.

### Key PR Progress (10 Important)
- **[#28534](https://github.com/google-gemini/gemini-cli/pull/28534) – fix(ci): retry staging-tmp dist-tag removal after npm publish** (priority/p1, size/l)  
  Fixes a CI race condition that caused nightly builds to fail.

- **[#28481](https://github.com/google-gemini/gemini-cli/pull/28481) – fix(core): refresh MCP OAuth tokens with the stored client ID** (priority/p1, security, size/m)  
  Resolves a bug that deleted stored MCP credentials on every refresh, forcing re-authentication.

- **[#28401](https://github.com/google-gemini/gemini-cli/pull/28401) – fix(shell): bound command output sent to the model** (priority/p1, agent, size/m)  
  Prevents huge shell outputs (e.g. `find /`) from flooding model context, improving response quality and saving tokens.

- **[#28353](https://github.com/google-gemini/gemini-cli/pull/28353) – fix(a2a-server): prevent path traversal in restore command** (size/s, closed)  
  Defense-in-depth patch against directory traversal attacks in the A2A server restore endpoint.

- **[#28348](https://github.com/google-gemini/gemini-cli/pull/28348) – fix: resolve MaxListenersExceededWarning and infinite auth loop** (area/core, size/m, closed)  
  Fixes two critical issues: EventEmitter leak and infinite OAuth loop on Windows.

- **[#28535](https://github.com/google-gemini/gemini-cli/pull/28535) – fix: use resolveRipgrepPath in perf test global setup** (priority/p1, core, size/s)  
  Keeps performance tests compatible after ripgrep resolver refactoring.

- **[#28435](https://github.com/google-gemini/gemini-cli/pull/28435) – feat(pr-generator-core): environment config parser, command executor, GitHub REST client** (size/l)  
  First of several PRs introducing an automated issue-to-PR generation pipeline (SSR). Foundational utilities.

- **[#28433](https://github.com/google-gemini/gemini-cli/pull/28433) – feat(pr-generator-orchestrator): iterative bug-fixing state machine and container worker entrypoint** (size/xl)  
  Orchestration layer for the SSR pipeline, coordinating Firestore locking, AI coding loops, and quality checks.

- **[#28434](https://github.com/google-gemini/gemini-cli/pull/28434) – feat(pr-generator-agent): Antigravity agent runner and prompt templates** (size/l)  
  System prompt templates for headless AI agents used in the code generation pipeline.

- **[#28432](https://github.com/google-gemini/gemini-cli/pull/28432) – feat(pr-generator-db): Firestore concurrency dual-locking and test ingestion utilities** (size/xl)  
  Database layer for the pipeline, with transactional locking and state management.

### Feature Request Trends
- **Agent Autonomy & Tool Selection**: Users want the model to proactively use custom skills/sub-agents, respect configuration, and avoid destructive operations. Many requests for better introspection (subagent trajectories, bug reports with subagent context).
- **Memory & Context Optimisation**: Auto Memory should handle low-signal sessions deterministically, redact secrets before sending content, and avoid infinite loops. AST-aware file reads are seen as a way to reduce token waste.
- **Sandboxed Execution**: Leveraging the model’s native bash affinity (Issue #19873) while sandboxing output. High demand for safer shell execution and bounded output.
- **Browser Agent Resilience**: Persistent session locking, lock recovery, and better Wayland support are recurring themes.
- **Evaluations & Observability**: Component-level evals (#24353) and visible subagent trajectories (#22598) are requested to improve debugging and regression detection.

### Developer Pain Points
- **Agent Hangs & Stalls**: Multiple open bugs where agents hang indefinitely (#21409, #25166) or enter infinite loops (#26522). High user frustration; workarounds often involve disabling sub-agents.
- **Misleading Termination Reasons**: Subagents reporting `GOAL` success when interrupted (#22323) erodes trust and makes debugging difficult.
- **Configuration Ignored**: Subagent permissions/`maxTurns` overrides in `settings.json` are not respected (#22267, #22093).
- **Token & Context Bloat**: Shell commands with large output flood context (#28401 fix in progress); untrimmed output degrades quality.
- **Platform-Specific Failures**: Wayland breaks browser agent (#21983); Windows OAuth loops (#28348).
- **Subagent Under-utilisation**: Despite having custom skills, the model rarely invokes them (#21968), defeating the purpose of extensibility.
- **Destructive Actions**: Model occasionally executes dangerous git/DB commands without user confirmation (#22672).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the **GitHub Copilot CLI Community Digest** for July 26, 2026, based on the latest repository activity.

---

# 🧠 GitHub Copilot CLI Community Digest
**Date:** 2026-07-26

---

## 1. Today’s Highlights

Session reliability and plugin ecosystem maturity are the dominant themes this week. A critical performance regression in v1.0.74 causes large session resumes to OOM or peg a CPU core for over an hour, while a separate bug shows that auto-compaction still fails to prevent the 5 MB CAPI body limit from killing long-running sessions. On the plugin side, marketplace registrations are silently not persisted, and the 32-skill token ceiling continues to frustrate heavy users.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

### 1. [#4183 – Auto-compaction does not prevent CAPI 5 MB failure](https://github.com/github/copilot-cli/issues/4183)
**Area:** context-memory, models | **👍 10** | **Updated:** Jul 25
Even when the model’s context-token limit is respected, accumulated tool history can push the serialized CAPI request body past the independent 5 MB limit, permanently stalling the session. Auto-compaction is supposed to prevent this but does not. **Why it matters:** This silently bricks long-lived sessions—no workaround exists today.

### 2. [#4251 – Resume of a large session OOMs / grinds one CPU core for ~70 min in 1.0.74](https://github.com/github/copilot-cli/issues/4251)
**Area:** sessions | **Updated:** Jul 25 | **Regression vs. 1.0.73**
A controlled A/B test isolates a 3–4× memory regression in v1.0.74. Resuming a session that worked for months now either exhausts RAM or pegs a single core for over an hour. **Why it matters:** Blocks daily workflow for users with large, long-lived sessions and no downgrade path.

### 3. [#2205 – Terminal mouse scroll broken, now navigates inputs instead of history](https://github.com/github/copilot-cli/issues/2205)
**Area:** terminal-rendering | **👍 14** | **Comments: 13** | **Updated:** Jul 25
Since a recent version, mouse scroll no longer moves through agent output history—it scrolls through past user inputs instead, which users describe as “completely useless.” `--no-mouse` disables other mouse behaviors but does not fix this. **Why it matters:** A core UX regression affecting terminal-heavy workflows.

### 4. [#1464 – Skills beyond alphabetical position ~32 are unreachable](https://github.com/github/copilot-cli/issues/1464)
**Area:** installation | **👍 5** | **Updated:** Jul 25
With ~63 skills installed, the system prompt explicitly states “Showing 32 of 63 skills due to token limits.” The model never selects skills sorted past position ~32. **Why it matters:** Hard caps the effective skill count, making the plugin/skill ecosystem less useful for power users.

### 5. [#4246 – `archive_session` times out after 60s, leaves orphaned worktrees](https://github.com/github/copilot-cli/issues/4246)
**Area:** sessions | **Updated:** Jul 25
When tearing down a large repository worktree, `archive_session` can hit a 60-second timeout, leaving the session and worktree behind without enough state to recover safely. **Why it matters:** Consumes disk space and prevents reuse of the session branch—essentially a resource leak.

### 6. [#4252 – Session exit writes launch-time `model` back to `settings.json`, silently reverting edits](https://github.com/github/copilot-cli/issues/4252)
**Area:** sessions, models, configuration | **Updated:** Jul 25
On exit, an interactive session writes its in-memory (launch-time) `model` value back to `~/.copilot/settings.json`, overwriting any manual edits or changes from other sessions. **Why it matters:** Self-perpetuates stale defaults and silently corrupts user configuration.

### 7. [#4247 – Plugin marketplace add reports success but registration is not persisted](https://github.com/github/copilot-cli/issues/4247)
**Area:** plugins | **Updated:** Jul 25
`copilot plugin marketplace add` prints “success” but never writes the registration to disk. A subsequent `list` or `browse` command immediately fails with “not found”. **Why it matters:** Broken plugin onboarding erodes trust in the marketplace ecosystem.

### 8. [#4241 – Password masking fails, forces agents to waste tokens reading raw bytes](https://github.com/github/copilot-cli/issues/4241)
**Area:** tools | **Updated:** Jul 25
When an agent reads a file containing a password, the masking feature hides the password from the agent. The agent then uses Python to read the raw bytes underneath, consuming extra tokens and often getting stuck. **Why it matters:** Security feature backfires, increasing token cost and breaking agent workflows.

### 9. [#4248 – `/pr` does not recognize SSH host aliases](https://github.com/github/copilot-cli/issues/4248)
**Area:** pr | **Updated:** Jul 25
If `origin` remote uses an SSH host alias from `~/.ssh/config`, `/pr` fails with “requires a repository connected to GitHub (github.com or *.ghe.com)”. **Why it matters:** Blocks a large portion of SSH-configured development environments.

### 10. [#4253 – `/ask` frequently returns no result](https://github.com/github/copilot-cli/issues/4253)
**Area:** ask | **Updated:** Jul 25
Running `/ask <question>` often produces no output and no error. **Why it matters:** A silent failure in a primary interaction mode undermines user trust.

---

## 4. Key PR Progress

Only two pull requests were updated in the last 24 hours, both closed without substantive changes:

- [#23 – Create monad.yml (CLOSED)](https://github.com/github/copilot-cli/pull/23) – A stray non-functional PR from September 2025, recently bumped with no meaningful diff. No community impact.
- [#4228 – Withdrawn: incorrect scope for #3534 (CLOSED)](https://github.com/github/copilot-cli/pull/4228) – Withdrawn by the author because it changed documentation instead of the private clipboard runtime implementation. Branch deleted.

**PR activity is unusually light.** Community attention is firmly on the session reliability regression and plugin persistence issues tracked in open issues.

---

## 5. Feature Request Trends

Several recurring feature directions emerge from recent issues:

- **Session lifecycle hardening** – Users want reliable resume (no OOM), predictable archive (no orphaned worktrees), and safe teardown that doesn’t corrupt `settings.json`. [#4251], [#4246], [#4252]
- **Plugin/skill scalability** – The 32-skill token cap and the non-persistent marketplace registration are the top two barriers to broader plugin adoption. [#1464], [#4247]
- **IDE-terminal parity** – `/rename` works in the terminal CLI but not in VS Code Agent sessions. Users expect feature parity between CLI and IDE-hosted sessions. [#4244]
- **SSH-native workflows** – `/pr` and likely other remote operations should respect SSH host aliases rather than requiring explicit `github.com` remotes. [#4248]

---

## 6. Developer Pain Points

Three high-frequency frustration patterns dominate:

1. **“Silent failure / silent corruption”** – Issues like `/ask` returning nothing, `settings.json` being silently overwritten, and plugin `add` reporting success without persisting create a trust deficit. Users can’t tell if the tool worked or not.
2. **“One bad session bricks the entire workflow”** – The CAPI 5 MB limit, the OOM-on-resume regression, and the 60-second timeout on `archive_session` all share a pattern: a single problematic session becomes unrecoverable and takes down the user’s day.
3. **“Token limits that don’t match reality”** – The model may have context capacity, but the serialization layer (CAPI body limit) or the prompt truncation logic (32-skill cap) becomes the bottleneck. Users feel misled by token-counting UX.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-26

## Today's Highlights
A critical dead-loop bug (#2557) was reported on the latest v1.44.0, while three closed PRs landed fixes for session resumption, file re-upload on restart, and fork/undo truncation. The community’s long-standing request for remote session control (#1282) continues to gather support (16 👍).

## Releases
*No new releases in the last 24 hours.*  
The latest stable version remains **kimi-cli 1.44.0**.

## Hot Issues
Only two issues were updated in the last 24 hours. Both are listed below.

| Issue | Title | Status | Why It Matters | Community Reaction |
|-------|-------|--------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Feature Request: Remote Control — Continue local sessions from any device | Open | Enables seamless workflow continuity across devices; highly desired (16 👍, 8 comments). | Strong positive signal for a mobile/browser companion feature. |
| [#2557](https://github.com/MoonshotAI/kimi-cli/issues/2557) | Dead Loop | Open | Blocks usage on v1.44.0 for Kimi Code subscribers; no workaround mentioned yet. | Reported without reproduction details; likely high priority for maintainers. |

## Key PR Progress
Four PRs were updated in the last 24 hours. All are included below.

| PR | Title | Status | Description | Comments |
|----|-------|--------|-------------|----------|
| [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | fix(session): align fork/undo context truncation to wire turns | Closed | Fixes context mismatch after forks/undos (#2517, #1974, #2049). | Critical for session history correctness. |
| [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | fix(app): refresh stale frozen system prompt on session resume | Closed | Ensures skills and `AGENTS.md` edits are applied on resume (#2420). | Resolves a long-standing UX annoyance. |
| [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) | fix(web): persist uploads .sent marker so restarts do not re-send files | Closed | Prevents re-upload of images/files after server restart (#2413). | Important for `kimi web` workflow cleanliness. |
| [#2558](https://github.com/MoonshotAI/kimi-cli/pull/2558) | fix(tests): improve Windows cross-platform test compatibility | Open | Fixes `\n` → `\r\n` conversion and `subprocess.run` `cwd` path issues in tests. | Improves CI reliability for Windows contributors. |

## Feature Request Trends
- **Remote control / cross-device session continuation** (#1282) remains the most substantial feature request, with strong community engagement. Users want to start a session on desktop and continue from mobile or tablet.
- No other new feature directions were observed in the last 24h.

## Developer Pain Points
- **Session consistency bugs**: Dead loops (#2557), stale system prompts on resume (#2519), file re-upload on restart (#2518), and fork/undo truncation (#2520) indicate that session state management is a recurring source of frustration.
- **Windows test incompatibility**: The open PR #2558 highlights ongoing cross-platform issues in the test suite, which may deter Windows developers from contributing.
- **Limited reproduction details**: The dead-loop report (#2557) lacks steps to reproduce, slowing triage.

*All links are to the respective GitHub pages.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-26

## Today’s Highlights
No new releases were published in the last 24 hours. The community is actively discussing a severe CPU regression ([#30086](#30086)) and a widely supported request to preserve the legacy layout ([#37012](#37012)). Desktop v1.18.5 users are reporting multiple UI freezes and a new `UnsupportedContentType` error, while the PR queue features a promising `roll-call` command for model connectivity testing and a progress bar to address frozen-startup concerns.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues
**1. High CPU usage in newer versions**  
[#30086](https://github.com/anomalyco/opencode/issues/30086) – 36 comments, 19 👍  
*DenisSilent* reports that CPU usage spiked ~7 days ago, making even three sessions laggy. The issue has attracted significant community attention and reproduces across systems.  
**Why it matters**: Potential performance regression affecting daily workflow of heavy users.

**2. [FEATURE] Keep legacy layout option**  
[#37012](https://github.com/anomalyco/opencode/issues/37012) – 33 comments, 31 👍  
*darkine24th* argues for retaining the old UI layout, citing easier access to options and workspace functionality. Strong upvote ratio indicates broad demand.  
**Why it matters**: A core UX negotiation between modernisation and user preference.

**3. [Bug] Desktop v1.18.5: UnsupportedContentType error on project reload**  
[#38789](https://github.com/anomalyco/opencode/issues/38789) – 7 comments  
*Start-Gao* encounters a startup notification `无法重新加载test UnsupportedContentType` after upgrading. The root cause is in the generated client SDK.  
**Why it matters**: A fresh regression in the latest desktop release that blocks project loading.

**4. Close button does not work (screen freezes)**  
[#38844](https://github.com/anomalyco/opencode/issues/38844) – 3 comments  
*tryonce-1* describes that clicking the close button under an existing project freezes the entire UI.  
**Why it matters**: Critical UX bug making project management impossible.

**5. Run loop can never exit when message ids are not time-sortable**  
[#38791](https://github.com/anomalyco/opencode/issues/38791) – 3 comments  
*dkindlund* identifies that `SessionPrompt.runLoop` compares message IDs as plain strings, so imported sessions with non-chronological IDs cause infinite loops until the provider returns a 400 error.  
**Why it matters**: Breaks interoperability with third-party importers.

**6. [bug, perf, core, 2.0] Long-lived V2 server enters persistent allocation loop**  
[#36677](https://github.com/anomalyco/opencode/issues/36677) – 3 comments  
*opencode-agent[bot]* reports that a V2 server consuming ~1 CPU core and 1.1–1.3 GB RSS while idle, while a fresh server stays below 1% CPU.  
**Why it matters**: Memory leak or allocation bug in the 2.0 branch impacts server-side deployments.

**7. [2.0] TUI input area covered by black rectangle during heavy tool-call/reasoning**  
[#38773](https://github.com/anomalyco/opencode/issues/38773) – 2 comments  
*ReStranger* notes that during extended tool calls, the input field is intermittently obscured by a solid black rectangle, blocking text entry.  
**Why it matters**: TUI usability regression in the 2.0 branch.

**8. Windows Desktop installer is broken offline: ripgrep not bundled**  
[#34442](https://github.com/anomalyco/opencode/issues/34442) – 2 comments, 3 👍  
*vokasug* highlights that without internet, core tools (`grep`, `glob`, `skill`) fail because ripgrep is not bundled.  
**Why it matters**: Air-gapped Windows users are blocked out of the box.

**9. Web UI Session List Empty – Project Auto-Registration Fails on Windows/WSL**  
[#37096](https://github.com/anomalyco/opencode/issues/37096) – 2 comments, 3 👍  
*RayySummers* reports that the Web UI session list stays empty, with auto-registration failing on Windows 11 + WSL2.  
**Why it matters**: Cross-platform integration gap affecting hybrid setups.

**10. Subagent stream error can surface as empty task result**  
[#38866](https://github.com/anomalyco/opencode/issues/38866) – 2 comments  
*maarten256* describes that when a subagent provider stream fails, the parent may receive an empty `<task_result></task_result>` instead of an error, making failures hard to detect.  
**Why it matters**: Error masking can lead to silent data loss in multi-agent workflows.

---

## Key PR Progress
**1. feat(app): Improve aesthetics and debuggability – add progress bar to TUI startup**  
[#38906](https://github.com/anomalyco/opencode/pull/38906) – Open  
*mrraghur* implements staged startup progress for terminal, settings, workspace, theme, and plugins. Closes [#36195](https://github.com/anomalyco/opencode/issues/36195).  

**2. feat(opencode): add roll-call command**  
[#38433](https://github.com/anomalyco/opencode/pull/38433) – Open  
*cbrunnkvist* introduces a `/roll-call` command that tests connectivity and latency across multiple text models. Useful for provider debugging. Closes [#13711](https://github.com/anomalyco/opencode/issues/13711).

**3. feat(plugin): route ChatGPT OAuth inference via codexApiEndpoint option**  
[#38903](https://github.com/anomalyco/opencode/pull/38903) – Open  
*patrickpassosb* replaces the hardcoded ChatGPT Plus/Pro inference endpoint with a configurable option, enabling custom routing for OAuth flows.

**4. fix(tui): resolve keyboard deadlock in question mode**  
[#36550](https://github.com/anomalyco/opencode/pull/36550) – Open  
*maharshi365* fixes a deadlock caused by two `useBindings` calls with mutually exclusive `enabled` conditions in the `QuestionPrompt` component. Closes #36382 and #30517.

**5. feat(opencode): add Dynamic workflows (new Claude Code feature)**  
[#29789](https://github.com/anomalyco/opencode/pull/29789) – Open  
*VasyaYovbak* adds project-local workflows that can be invoked via `/workflow <name> arg=value` and inspected via `/workflows`. Closes [#29059](https://github.com/anomalyco/opencode/issues/29059).

**6. fix(session): defer auto-compaction until the next model input**  
[#38901](https://github.com/anomalyco/opencode/pull/38901) – Closed  
*wishiweresaitama* prevents premature context clearing by scheduling automatic compaction only after the next user/model input, avoiding loss of session state.

**7. [automated-pr-cleanup] feat(tui): publish tui.session.select / tui.session.deselect on TUI session focus changes**  
[#33734](https://github.com/anomalyco/opencode/pull/33734) – Closed  
*santiperone* adds bus events when users switch sessions in the TUI, enabling plugins to react to session focus changes. Closes [#31051](https://github.com/anomalyco/opencode/issues/31051).

**8. fix(acp): show real tool context in permission prompt title**  
[#33950](https://github.com/anomalyco/opencode/pull/33950) – Closed  
*bcdady* fixes ACP permission prompts that previously displayed generic names; now the title reflects the actual tool (e.g., “bash”, “edit”). Closes [#33949](https://github.com/anomalyco/opencode/issues/33949).

**9. fix(vcs): prevent crash when repo has thousands of untracked files**  
[#33927](https://github.com/anomalyco/opencode/pull/33927) – Closed  
*youtsuhodev* addresses a crash caused by enumerating 1200+ untracked files, stabilising the VCS layer. Closes [#33928](https://github.com/anomalyco/opencode/issues/33928).

**10. feat: add support for Solidity file type and highlighting**  
[#38200](https://github.com/anomalyco/opencode/pull/38200) – Open  
*ConceptCodes* adds syntax highlighting for Solidity (.sol) files, catering to blockchain developers.

---

## Feature Request Trends
- **UI customisation and legacy support** – The most upvoted feature request this week is a toggle to keep the old layout ([#37012](https://github.com/anomalyco/opencode/issues/37012)). Users also ask for adjustable font sizes ([#38884](https://github.com/anomalyco/opencode/issues/38884)) and a scroll-to-top button for long chats ([#38876](https://github.com/anomalyco/opencode/issues/38876)).
- **Subscription & billing improvements** – Chinese users request annual plans and invoice support ([#20252](https://github.com/anomalyco/opencode/issues/20252)). General confusion around the “free usage exceeded” reset logic ([#38869](https://github.com/anomalyco/opencode/issues/38869)) suggests a need for clearer usage tracking.
- **Session management** – Displaying the active session name in the TUI status bar ([#38881](https://github.com/anomalyco/opencode/issues/38881)) and immediate queued-message reading (steering) ([#24298](https://github.com/anomalyco/opencode/issues/24298)) are recurring themes.
- **Provider flexibility** – Requests for better integration with local Ollama instances ([#38854](https://github.com/anomalyco/opencode/issues/38854)) and routing ChatGPT OAuth traffic ([#38903](https://github.com/anomalyco/opencode/pull/38903)) indicate demand for self-hosted and custom endpoint options.

---

## Developer Pain Points
- **Performance regressions** – CPU spikes after recent updates ([#30086](https://github.com/anomalyco/opencode/issues/30086)) and long-lived server memory bloat ([#36677](https://github.com/anomalyco/opencode/issues/36677)) are top concerns.
- **UI freezes and hangs** – Multiple reports of desktop freezes when closing projects ([#38844](https://github.com/anomalyco/opencode/issues/38844), [#38885](https://github.com/anomalyco/opencode/issues/38885)) or switching projects ([#37534](https://github.com/anomalyco/opencode/issues/37534)).
- **Broken offline experience** – Windows users still cannot use core tools without internet ([#34442](https://github.com/anomalyco/opencode/issues/34442)).
- **Cross-platform connectivity gaps** – macOS cannot connect to LAN-hosted Ollama despite working `curl` ([#38854](https://github.com/anomalyco/opencode/issues/38854)).
- **Error handling gaps** – Subagent stream failures are silently returned as empty success ([#38866](https://github.com/anomalyco/opencode/issues/38866)), and imported sessions can enter infinite loops ([#38791](https://github.com/anomalyco/opencode/issues/38791)).
- **Recent v1.18.5 regressions** – `UnsupportedContentType` on project reload ([#38789](https://github.com/anomalyco/opencode/issues/38789)) and widespread “Internal Server Error” on managed models ([#38873](https://github.com/anomalyco/opencode/issues/38873), [#38874](https://github.com/anomalyco/opencode/issues/38874)) suggest a shaky release.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-26

## Today’s Highlights
Pi v0.82.1 drops today with native **Claude Opus 5** support on Anthropic and Bedrock, including adaptive thinking and prompt caching. The community is heavily focused on TUI performance and compaction reliability—issues around high CPU usage during streaming and Copilot Enterprise compaction failures are drawing the most attention. Several high-impact PRs landed to fix terminal crashes, cross-platform path handling, and model-catalog caching.

---

## Releases
### [v0.82.1](https://github.com/earendil-works/pi/releases/tag/v0.82.1)
- **Claude Opus 5** – Now available on Anthropic and Amazon Bedrock with adaptive thinking (including `xhigh`), inference profiles, and prompt caching. See [Providers](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/providers.md#api-keys).

*(No other releases in the last 24h.)*

---

## Hot Issues (10 noteworthy)

1. **[#6768 – Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)** (OPEN, 13 comments, 11 👍)  
   Users with Copilot Enterprise licenses get `421 Misdirected Request` errors when compacting. High community demand for a fix.

2. **[#6665 – TUI pins a full core while streaming](https://github.com/earendil-works/pi/issues/6665)** (OPEN, in progress, 7 comments)  
   Caused by uncached `Intl.Segmenter` + per-chunk Markdown rebuild. Long sessions become unresponsive. Performance-critical.

3. **[#6050 – TUI full redraw clears terminal scrollback](https://github.com/earendil-works/pi/issues/6050)** (CLOSED, no-action, 15 comments)  
   Frequent redraws interact badly with scrollback buffers. Closed without fix expected; community frustration remains.

4. **[#5990 – TUI flickers when dialog taller than terminal](https://github.com/earendil-works/pi/issues/5990)** (OPEN, in progress, 5 comments, 3 👍)  
   Continuous repaints while `ctx.ui.confirm()` content exceeds viewport. Reproducible and disruptive.

5. **[#4877 – Session folder collision](https://github.com/earendil-works/pi/issues/4877)** (CLOSED, 21 comments)  
   Different paths map to same session folder due to naive delimiter handling. Low severity but surprised many users.

6. **[#7090 – Brace-expansion CVE in shrinkwrap](https://github.com/earendil-works/pi/issues/7090)** (CLOSED, 4 comments)  
   Official shrinkwrap pinned vulnerable `brace-expansion@5.0.7` (CVE-2026-14257). Fixed in 5.0.8; prompt response.

7. **[#7020 – Sometimes Pi doesn’t continue after compaction](https://github.com/earendil-works/pi/issues/7020)** (OPEN, in progress, 4 comments, 1 👍)  
   Long-running “coordinator” sessions stall post-compaction. Core reliability issue for power users.

8. **[#6948 – llama.cpp default model not applied at startup](https://github.com/earendil-works/pi/issues/6948)** (CLOSED, 4 comments)  
   Race condition in async model refresh leaves session on wrong model. Fixed by PR #7072.

9. **[#7064 – WSL absolute Windows paths mishandled](https://github.com/earendil-works/pi/issues/7064)** (OPEN, 3 comments)  
   `read`/`write`/`edit` tools fail on WSL2. Path normalization missing for Windows-style paths.

10. **[#7077 – Status shows “Working…” after completion](https://github.com/earendil-works/pi/issues/7077)** (CLOSED, no-action, 3 comments)  
    Spinner stops but “Working…” label persists. Confuses users about session state.

---

## Key PR Progress (10 important)

1. **[#7118 – Expose extension context clear callback](https://github.com/earendil-works/pi/pull/7118)** (CLOSED)  
   Allows extensions to clear session context without generating a summary. Enables safe handoff for tools like Mecha.

2. **[#7116 – Fix: truncate over-width lines instead of crashing](https://github.com/earendil-works/pi/pull/7116)** (CLOSED)  
   Prevents session crash when rendered line exceeds terminal width. Triggered by long JSON in permission dialogs.

3. **[#7114 – Add manual redirect URL fallback to OpenRouter OAuth](https://github.com/earendil-works/pi/pull/7114)** (OPEN)  
   Enables `/login openrouter` on remote/headless machines by supporting manual paste of callback URL (like Claude login).

4. **[#7112 – Fix: normalize path separators in footer](https://github.com/earendil-works/pi/pull/7112)** (CLOSED)  
   Replaces OS-native `\` with `/` in tilde-abbreviated cwd display, fixing broken footer on Windows.

5. **[#7111 – Feat: support durable external tool results](https://github.com/earendil-works/pi/pull/7111)** (CLOSED)  
   Adds `defer: true` tool return type for external async results, with JSONL persistence. Key for workflow extensions.

6. **[#7072 – Fix: cache llama.cpp model catalog](https://github.com/earendil-works/pi/pull/7072)** (CLOSED)  
   Resolves race condition where default model wasn’t applied at startup (#6948). Caches catalog to avoid redundant fetches.

7. **[#7081 – Feat: support Claude Opus 5 on Bedrock](https://github.com/earendil-works/pi/pull/7081)** (CLOSED)  
   Configures adaptive thinking for Claude Opus 5 on Bedrock, required for server-side operation.

8. **[#7085 – Feat: add vitest eval harness](https://github.com/earendil-works/pi/pull/7085)** (CLOSED)  
   Introduces private `packages/evals` workspace using `vitest-evals` and Pi SDK, with explicit provider/model selection.

9. **[#7031 – Fix: run coding-agent tests offline by default](https://github.com/earendil-works/pi/pull/7031)** (OPEN)  
   Expands `PI_OFFLINE` to all coding-agent tests to reduce CI flakiness and dependency on external APIs.

10. **[#7091 – Fix: reject overlapping user bash commands](https://github.com/earendil-works/pi/pull/7091)** (CLOSED)  
    Prevents concurrent RPC bash invocations from corrupting session state. Safety improvement for multi-client setups.

---

## Feature Request Trends

From the last 24h’s issues and PRs, several clear demand patterns emerge:

- **Model-switching validation** – Multiple issues (#7065, #7067) request pre-switch checks for context size and thinking-block conversion. Users frequently break sessions by moving between models with different capabilities.
- **Custom provider flexibility** – Several requests (#7105, #7107, #7108) ask for better handling of OpenAI-compatible endpoints: respecting `OPENAI_API_BASE`, forwarding session-affinity headers, and supporting manual OAuth flows for headless environments.
- **TUI extensibility & cost transparency** – Feature requests for cost preview columns in model selector (#7101), configurable truncation limits (#7066), and a built-in extension to show per-token pricing.
- **Compaction improvements** – Users want configurable summary token thresholds (#7048), the ability to clear context without a summary (#7118), and better handling of long-running “coordinator” sessions (#7020).
- **Durable external tool results** – PR #7111 addresses a common pattern: waiting for typed results from outside the agent process. This is likely to become a standard extension API.

---

## Developer Pain Points

The community’s top frustrations in the last 24h:

- **TUI rendering performance** – High CPU (100% core) during streaming (#6665), scrollbar jumps (#6050), and continuous flickering when dialogs exceed terminal height (#5990). These affect nearly every interactive session.
- **Compaction reliability** – Failures with Copilot Enterprise (#6768), truncated summaries (#7048), and stalls post-compaction (#7020). Critical for long-lived sessions.
- **Cross-platform path issues** – WSL absolute Windows paths broken (#7064) and footer path separators inconsistent on Windows (#7112). Developers on Windows/WSL are marginalized.
- **Model/middleware configuration glitches** – Race conditions with llama.cpp model selection (#6948), ignored `OPENAI_API_BASE` (#7105), and OpenRouter login broken on SSH (#7114, #7113).
- **State confusion** – “Working…” label stuck after completion (#7077) and duplicate messages after session switch (#7110). Minor but erode trust in UI feedback.

---

*Digest generated from data at [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) – 50 issues and 19 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-26

## Today's Highlights
A nightly release (v0.21.0-nightly) ships minor CLI fixes, while the community tackles a surge of groundwork for subagent intelligence, sandbox reliability, and math rendering. Two P1 bugs were closed—one for DashScope thinking mode tool choice, another for session restore after bridge restart—but a new P2 issue about sandbox runtime selection highlights an ongoing container-agnostic design challenge. The PR pipeline is active with a notable “mutation test” pass proposed for the review workflow and a rich Goal v3 worker tool set.

## Releases
- **v0.21.0-nightly.20260726.9d19eafa9** — Contains `fix(cli): measure insight days and hours in local time everywhere` and the start of an `refactor(autofix): ext` change.  
  [Release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260726.9d19eafa9)

## Hot Issues (10 selected)

1. **#7659** [CLOSED, P2] `tool_choice: "required"` rejected in DashScope thinking mode — required a workaround via `thinkingMandatory` config. Community found no runtime learning path.  
   [Issue #7659](https://github.com/QwenLM/qwen-code/issues/7659)

2. **#7684** [OPEN, P2, macOS] Command-mode statusline with multiple lines causes IME candidate box to appear far from cursor. User-experience blocker for Chinese/Japanese input on macOS.  
   [Issue #7684](https://github.com/QwenLM/qwen-code/issues/7684)

3. **#7697** [OPEN, vscode/Unity] Qwen Code VS Code extension cannot connect to Unity MCP, while Claude Code can. The extension appears to have a different MCP transport path.  
   [Issue #7697](https://github.com/QwenLM/qwen-code/issues/7697)

4. **#7719** [OPEN, P3] CLI does not display token usage or usage percentage anywhere, leaving users blind to consumption. Requested for both session and quota monitoring.  
   [Issue #7719](https://github.com/QwenLM/qwen-code/issues/7719)

5. **#7732** [OPEN, P2] Sandbox runtime selects Docker based solely on PATH presence, ignoring unreachable daemon. Installed-but-broken Docker hides a functioning Podman.  
   [Issue #7732](https://github.com/QwenLM/qwen-code/issues/7732)

6. **#7717** [OPEN, P2] Skill auto-complete breaks when mentioning multiple skills continuously in the same line or across lines – only the first one triggers. Immediate workflow disruption.  
   [Issue #7717](https://github.com/QwenLM/qwen-code/issues/7717)

7. **#7671** [CLOSED, P2] Switching out of Plan mode manually leaves the model uninformed and shows an unhelpful deny error. Community confirmed two related problems in mode-switching logic.  
   [Issue #7671](https://github.com/QwenLM/qwen-code/issues/7671)

8. **#7700** [OPEN] Proposal for an explicit, source-preserving math authoring contract to fix inline-math recognition, copy, and streaming divergence. Follows up on earlier PR #3680.  
   [Issue #7700](https://github.com/QwenLM/qwen-code/issues/7700)

9. **#7585** [OPEN, P3] Feature request for a “Direct External Context Provider Profile” — an extension to let one CLI process retrieve repository-shared context from an external memory service without modifying Qwen Core.  
   [Issue #7585](https://github.com/QwenLM/qwen-code/issues/7585)

10. **#7685** [OPEN, P3] Request for AI-selectable model grades (`small/medium/high/super`) for subagents at spawn time, with user-defined mapping in `settings.json`.  
    [Issue #7685](https://github.com/QwenLM/qwen-code/issues/7685)

## Key PR Progress (10 selected)

1. **#7735** — `feat(review): mutation-test the tests in the test-coverage pass` (Agent 5). Proposes a new review pass that verifies tests actually fail on broken code, not just exist.  
   [PR #7735](https://github.com/QwenLM/qwen-code/pull/7735)

2. **#7734** — `fix(cli): probe sandbox runtime before selecting it`. Probes each candidate with `version` to confirm the daemon works, solving the Docker-vs-Podman selection issue (#7732).  
   [PR #7734](https://github.com/QwenLM/qwen-code/pull/7734)

3. **#7724** — `fix(web-shell): allow shell commands in new tasks without a session`. Lazy session creation and tolerance for `!` commands after `--no-tools`.  
   [PR #7724](https://github.com/QwenLM/qwen-code/pull/7724)

4. **#7710** — `feat(triage): add sandboxed /verify deep-verification lane`. Adds a maintainer-grade A/B verification against real builds when `@qwen-code /verify` is triggered on a PR.  
   [PR #7710](https://github.com/QwenLM/qwen-code/pull/7710)

5. **#7731** — `feat(web-shell): add git branch picker, commit dialog, and create PR flow`. IntelliJ-style branch management UI for the web shell workspace.  
   [PR #7731](https://github.com/QwenLM/qwen-code/pull/7731)

6. **#7702** — `feat(core): add model grade selection for subagent spawn (#7685)`. Implements the `model` parameter for the `agent` tool, mapping semantic grades to concrete models from `settings.json`.  
   [PR #7702](https://github.com/QwenLM/qwen-code/pull/7702)

7. **#7714** — `feat(memory): protect pinned files during forked Dream`. Adds a permission gate that denies writes to `pinned/` files and instructs Dream consolidation to skip them.  
   [PR #7714](https://github.com/QwenLM/qwen-code/pull/7714)

8. **#7711** — `fix(cli): keep IME cursor aligned after footer updates`. Submits cursor positions at the correct render phase to prevent IME candidate misplacement when the statusline updates.  
   [PR #7711](https://github.com/QwenLM/qwen-code/pull/7711)

9. **#7725** — `fix(ci): deflake tool-control E2E and add autofix flake detection`. Migrates flaky tool-call assertion tests to `fake-openai-server` and adds auto-detection for self-resolved flaky CI failures.  
   [PR #7725](https://github.com/QwenLM/qwen-code/pull/7725)

10. **#7661** — `fix(core): avoid required tools in DashScope thinking`. Sends `tool_choice: "required"` only when thinking is disabled, fixing HTTP 400 from DashScope.  
    [PR #7661](https://github.com/QwenLM/qwen-code/pull/7661)

## Feature Request Trends
- **Subagent intelligence** – Multiple requests (e.g., #7685, #7585) push for AI-controllable subagent model selection and external context injection, signalling users want more autonomy for spawned agents.
- **CLI observability** – Token usage display (#7719) and performance metrics (TTFT/TPS, previously #4252) are recurring asks; developers want real-time visibility into consumption and latency.
- **Math and rich rendering** – A push for explicit, source-preserving math authoring (#7700) and consolidated inline-math handling shows growing demand from STEM users.
- **Memory safeguards** – The `pinned/` directory protection (#6801) and its PR #7714 reflect a desire to prevent Dream consolidation from overwriting critical reference files.

## Developer Pain Points
- **IME/cursor issues on macOS** – #7684 and #7711 highlight persistent alignment problems for input method users, especially with multi-line statuslines.
- **Container runtime detection** – #7732 shows that simple PATH checks for Docker are insufficient; users with broken Docker daemons get silently blocked from using Podman.
- **MCP integration fragility** – Issues like #7697 (Unity MCP not connecting in VS Code) and #7503 (OAuth redirect callback misconfiguration) indicate MCP support is still maturing.
- **Mode-switching glitches** – #7671 exposes that exiting Plan mode doesn’t notify the model, producing confusing errors; similar edge cases appear in skill auto-complete (#7717).
- **Tool usage with thinking models** – #7659 and its fix (#7661) show that DashScope’s thinking mode forbids forced tool calls, a constraint that clashes with Qwen Code’s memory recall queries.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-26

**Project:** CodeWhale (DeepSeek TUI client)  
**GitHub:** [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)

---

## 1. Today’s Highlights

The v0.9.2 release cycle continues with a flurry of bug fixes and cleanups. A critical config validation bug that blocked all **non‑DeepSeek** providers from launching has been resolved (closing #4829, #4832, #4838). On the feature front, Localization docs and a contributor credit mapping landed, while multiple long‑standing performance issues remain under active triage. A macOS regression introduced in v0.9.0 (“underwater” shell) is newly reported and already being investigated.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues (10 noteworthy)

- [**#4520 – Configurable session token breakdown**](https://github.com/Hmbown/CodeWhale/issues/4520)  
  Enhancement to let users see input/cache/output token counts in the header bar instead of just a cumulative total. Community +1’s indicate strong interest in restoring the verbose format.

- [**#4831 – Test suite intermittently writes to real config file**](https://github.com/Hmbown/CodeWhale/issues/4831)  
  A flaky integration test that corrupts the developer’s own `~/.codewhale/config.toml`. High priority for CI reliability.

- [**#3927 – Add provider‑independent offline path**](https://github.com/Hmbown/CodeWhale/issues/3927)  
  UX request to let new users browse the TUI without configuring any provider or API key. Currently every path activates a model connection – blocking for evaluation.

- [**#4828 – macOS: underwater shell breaks `open`/`osascript`**](https://github.com/Hmbown/CodeWhale/issues/4828)  
  v0.9.0’s new “underwater” shell causes `open` and `osascript` to fail with exit code -54. Immediate pain for macOS users; downgrade to v0.8.67 works.

- [**#4832 – `codew model resolve` ignores configured provider**](https://github.com/Hmbown/CodeWhale/issues/4832)  
  Even with a minimal config pointing to a non‑DeepSeek provider, the diagnostic always reports a DeepSeek fallback. Already fixed in a follow‑up PR.

- [**#4838 – `codew model set` silent no‑op for non‑DeepSeek providers**](https://github.com/Hmbown/CodeWhale/issues/4838)  
  Split from above: the `default_text_model` field is DeepSeek‑scoped, so other providers cannot persist their model choice.

- [**#4829 – Config validation rejects non‑DeepSeek providers’ own models**](https://github.com/Hmbown/CodeWhale/issues/4829)  
  A showstopper: a ZAI/GLM-5.2 config bricks the CLI entirely. Closed with PR #4837.

- [**#4833 – v0.9.1 light‑background TUI renders text at near‑background contrast**](https://github.com/Hmbown/CodeWhale/issues/4833)  
  New default text color is unreadable on light terminals. A UX regression for users who prefer light themes.

- [**#4834 – macOS notifications use Script Editor icon**](https://github.com/Hmbown/CodeWhale/issues/4834)  
  Notification Center shows AppleScript scroll icon instead of the CodeWhale logo; also reveals untyped assistant preview.

- [**#3905 – Ctrl+P file picker blocks event loop on `git status`**](https://github.com/Hmbown/CodeWhale/issues/3905)  
  Performance: synchronous subprocess and 20k‑file walk before the picker renders. Affects responsiveness for large workspaces.

---

## 4. Key PR Progress (10 important)

- [**#4743 – Fix: stop applying 45s SSE timeout to non‑streaming chat requests**](https://github.com/Hmbown/CodeWhale/pull/4743)  
  `codewhale exec` without `--auto` no longer aborts after 45 seconds for slow backends. Welcomed by community users running local models.

- [**#4756 – Fix: do not retry failed qualified MCP tool calls**](https://github.com/Hmbown/CodeWhale/pull/4756)  
  Prevents infinite retries on MCP servers that return errors. Includes regression test.

- [**#4760 – Replace `dirs::home_dir()` with `effective_home_dir()`**](https://github.com/Hmbown/CodeWhale/pull/4760)  
  Fixes two Windows‑only CI test failures; improves cross‑platform home directory resolution.

- [**#4722 – Show complete edit previews in details view**](https://github.com/Hmbown/CodeWhale/pull/4722)  
  Compact approval card stays bounded; full `-/+` diff shown lazily in Alt+V pager. UX improvement for diff review.

- [**#4724 – Archive completed background shell output**](https://github.com/Hmbown/CodeWhale/pull/4724)  
  Captures final stdout/stderr tail into the originating cell when a background job finishes. Prevents UI flickering.

- [**#4686 – Add Minimax China/Token Plan provider routes**](https://github.com/Hmbown/CodeWhale/pull/4686)  
  Four new provider identifiers (`minimax-cn`, `minimax-anthropic-cn`, etc.) for Chinese users. Contributed by ffaacceelee.

- [**#4566 – Update TUI Cargo.toml for HarmonyOS build**](https://github.com/Hmbown/CodeWhale/pull/4566)  
  Moves `portable-pty` to Unix gate; compiled and running successfully on HarmonyOS PC. Opens up a new platform.

- [**#4839 – Describe TUI locale packs and gate drift in CI**](https://github.com/Hmbown/CodeWhale/pull/4839)  
  Updates `LOCALIZATION.md` to cover the 8 TUI locale packs (87k+ keys) and adds a CI drift check. Foundation for globalisation.

- [**#4792 – CI(triage): stop over‑labelling well‑specified issues**](https://github.com/Hmbown/CodeWhale/pull/4792)  
  Fixes auto‑labellers that added `bug, question` tags to issues with detailed acceptance criteria. Reduces noise.

- [**#4802 – Replace unusable recovery input with standalone workflow**](https://github.com/Hmbown/CodeWhale/pull/4802)  
  Fixes release workflow dispatch that accepted an input (`republish_channels`) never read by the workflow file. Now works.

---

## 5. Feature Request Trends

- **Extensible skill/plugin ecosystem**  
  Issues [#2743](https://github.com/Hmbown/CodeWhale/issues/2743) and [#1172](https://github.com/Hmbown/CodeWhale/issues/1172) ask for full compatibility with Claude Code’s skill ecosystem and a plugin marketplace with hooks (session start/end). This is the most‑wanted direction.

- **Globalisation (i18n)**  
  Multiple requests for Korean, Spanish, Brazilian Portuguese, and Russian locales (e.g., #3092, #3093). The project already ships READMEs in 7 languages; now the goal is to bring TUI and website to parity.

- **Performance & responsiveness**  
  A cluster of issues (#3904–#3908) target specific render‑loop bottlenecks: synchronous fs calls every frame, O(n) token estimation, and event‑loop‑blocking file picker. Future releases are expected to address these as part of v0.9.2.

- **Provider diversity**  
  Requests for Kimi Code (Moonshot k3) plan‑aware context windows (#4758) and expanded support for Chinese‑market providers (Minimax, ZAI) indicate a push to reduce dependency on DeepSeek.

- **Better onboarding**  
  [#3927](https://github.com/Hmbown/CodeWhale/issues/3927) (offline path) and [#3928](https://github.com/Hmbown/CodeWhale/issues/3928) (in‑app constitution viewer) highlight the need for a smoother first‑run experience.

---

## 6. Developer Pain Points

- **Non‑DeepSeek usability gaps**  
  Config validation, model selection, and diagnostics all have DeepSeek‑centric assumptions (#4829, #4832, #4838). These cause immediate crashes or silent misbehaviour for anyone using an alternative provider.

- **Test reliability**  
  [#4831](https://github.com/Hmbown/CodeWhale/issues/4831) shows tests writing to the real config file, leading to unpredictable failures and risking developer data.

- **Performance regressions**  
  Synchronous I/O in render functions (#3908) and the Ctrl+P file picker (#3905) degrade the TUI experience on large repos. Several v0.9.2 perf issues remain open.

- **macOS regressions in v0.9.0**  
  The new “underwater” shell breaks macOS system commands (#4828) and notification branding is poor (#4834). Users on macOS are advised to stay on v0.8.67.

- **Network flakiness**  
  [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) reports intermittent “error sending request for url” – likely a timeout/retry issue that affects reliability during long sessions.

- **Silent config failures**  
  Custom constitution overrides (#3928) and model choice (#4838) can silently fail without feedback, leaving users puzzled.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*