# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 01:45 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-07-23

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing **intense parallel iteration** across seven major platforms, with approximately **~60 notable issues and ~40 significant PRs** across tools today. The landscape reveals a clear maturation phase: communities are moving beyond basic "can it code?" questions to demanding **production-grade reliability** (process leaks, sandbox enforcement, billing transparency) and **platform parity** (CLI ↔ Desktop feature gaps, cross-OS stability). A defining tension has emerged between **rapid feature velocity** (Gemini CLI's triage infrastructure, CodeWhale's skill pack bundling) and **accumulating technical debt** (Anthropic's 9-month unresolved bypass permissions bug, Codex's zombie process leaks). The shared pain points across tools — MCP lifecycle fragility, agent truthfulness/verification failures, and Windows instability — suggest that the fundamental architecture of agentic coding tools has not yet converged on a stable pattern.

---

## 2. Activity Comparison

| Tool | Hot Issues (today) | Notable PRs (today) | Release Status | Key Signal |
|------|-------------------|---------------------|----------------|------------|
| **Claude Code** | 10 | 10 | **v2.1.218** (stable) | Background subagent reviews; macOS MCP regression critical |
| **OpenAI Codex** | 10 | 10 | **4 alpha releases** (v0.146.0-a.1–4) | Intense internal iteration, no changelogs |
| **Gemini CLI** | 10 | 10 | **v0.52.0 + v0.53.0-preview** | LLM triage infrastructure, eval tooling |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.74-1/2/3** (stable patches) | Gemini 3.6 Flash support; low PR velocity vs issue volume |
| **Kimi Code CLI** | 5 | 3 | **No new release** | Quiet day; third-party API compatibility dominant issue |
| **OpenCode** | 10 | 10 | **v1.18.4** (stable) | Subscription outage crisis; active PR pipeline |
| **Pi** | 10 | 10 | **v0.80.6/7** (stable) | Provider retry abortability fixed; OAuth support |
| **Qwen Code** | 10 | 10 | **Benchmark prerelease only** | CI instability blocking PRs; tool-output budgeting |
| **CodeWhale** | 10 | 10 | **Pre-v0.9.1 sprint** | 15+ merged PRs today; context diet optimization EPIC |
| **Grok Build** | 0 | 0 | **No activity** | Dead-silent |

**Key takeaways:**
- **Highest issue volume (today):** Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, CodeWhale — all with 10 hot issues each
- **Highest PR velocity:** CodeWhale (15+ merged), OpenAI Codex (28 merged), Claude Code (1 merged, 9 open)
- **Most releases today:** OpenAI Codex (4 alpha), GitHub Copilot CLI (3 patches), Gemini CLI (3 releases including preview)
- **Lowest activity:** Grok Build (zero), Kimi Code CLI (no releases, low issue count)

---

## 3. Shared Feature Directions

The following requirements appear across **multiple tool communities**, indicating convergent developer demand:

| Requirement | Tools Reporting | Specific Manifestation |
|------------|----------------|----------------------|
| **MCP/Subprocess lifecycle reliability** | Claude Code (#80002), Codex (#12491, #26984), Copilot CLI (#4163) | Silent tool-call drops, zombie processes, file descriptor leaks |
| **Mid-task message/steering injection** | Claude Code (#71726), Codex (#28969) | CLI users can steer mid-task; Desktop/CLI parity gap |
| **Per-agent / per-subagent model selection** | Kimi Code (#2533), Gemini CLI (#21968) | Cost-tiered multi-agent workflows; subagent model independence |
| **Plan-mode enforcement / safety guarantees** | Claude Code (#39523), Codex (#32594), Gemini CLI (#22093), CodeWhale (#4684) | Bypass permissions broken, plan-mode violations, sandbox gaps |
| **Agent truthfulness / verification reliability** | Claude Code (#80348), Gemini CLI (#22323), Codex (#34301) | False success reporting, hallucinated verification, hangs |
| **Performance/cost observability** | Copilot CLI (#4224, #4207), Pi (#6881), CodeWhale (#4704) | Per-agent billing, provider cost transparency, context diet |
| **Windows platform stability** | Codex (#16815, #22428), Claude Code (#80002), Copilot CLI (#4222, #4219), CodeWhale (#4685), Kimi Code (#2532) | GBK encoding crashes, WSL failures, sandbox crashes, PATH corruption |
| **Context compaction / token management** | Claude Code (#80196), Codex (#34835), Copilot CLI (#1688), CodeWhale (#4704–4710) | Auto-compaction failures, configurable thresholds, aggressive prompt trimming |
| **Automatic model discovery** | OpenCode (#6231, #18011), Gemini CLI (#22745) | LM Studio/Ollama auto-detection; AST-aware code intelligence |
| **Plugin/skill ecosystem standardization** | Claude Code (#80326, #18217), CodeWhale (#4679, #4695), Pi (#6916) | Account profiles, unified skill management, AgentHarness |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|------------|--------------|------------|-------------|-----------|----------|---|-----------|-----------|
| **Primary user** | Professional developers | AI researchers / power users | Google ecosystem devs | GitHub enterprise teams | Chinese-market devs | OSS enthusiasts | TUI power users | VSCode Companion users | TUI/terminal purists |
| **Core strength** | Background subagents, structured tools | Multi-agent chains (Sol/Terra/Luna) | Native GCP integration, eval framework | GitHub/Git integration | First-party Moonshot model | Provider-agnostic, community plugins | Provider OAuth, extensible | Thinking-aware tools | Skill pack ecosystem |
| **Stability posture** | Moderate — regression-prone (#80002) | Volatile — alpha churn, process leaks | Improving — security hardening | Moderate — Windows crisis | Low activity — few complaints | Crisis — subscription outage | Good — systematic fixes | Blocked — CI failing | Rapid iteration |
| **Dev velocity** | Steady | Very high (4 alpha/day) | High (3 releases/day) | Low (1 PR today) | Low | High | High | Moderate | Very high (15+ PRs) |
| **Platform support** | macOS (broken), Linux | macOS, Linux, Windows (broken WSL) | Linux, macOS, Windows | Windows (broken), Linux, macOS | Windows (broken), macOS, Linux | Cross-platform | macOS, Linux, Windows | Cross-platform | Windows (broken PATH), macOS, Linux |
| **Unique differentiator** | `/code-review` subagent, `--json-schema` | 4 alpha/day internal iteration | LLM triage orchestrator | Gemini 3.6 Flash support | Third-party API compatibility focus | Auto model discovery | Provider retry abortability, OAuth | Thinking-mode tool support | Context diet EPIC, skill bundling |

---

## 5. Community Momentum & Maturity

**High momentum / rapidly iterating:**
- **OpenAI Codex** — 4 alpha releases in one day signals intense internal development, but the **lack of changelogs** and recurring process leak bugs (#12491, #26984) suggest velocity over stability
- **CodeWhale** — 15+ PRs merged in a day, coordinated v0.9.1 release sprint, active epic-driven development (#2870). Strongest signal of organized rapid iteration
- **Pi** — Systematic reliability fixes (retry abortability, OAuth, precondition ordering) with clear closure patterns. Mature project management
- **OpenCode** — Active PR pipeline despite subscription outage; community features like `--no-project-instructions` show responsiveness to security concerns

**Moderate momentum:**
- **Claude Code** — Steady releases (v2.1.218) but the 9-month unresolved bypass permissions bug (#39523) and silent macOS regression (#80002) indicate quality gaps
- **Gemini CLI** — Healthy release cadence (stable + preview + nightly) with clear security hardening focus (variable expansion fix) and eval tooling investment
- **Qwen Code** — Active feature development (Goal v3, channel delivery) but **blocked CI** (#7537) is a velocity red flag

**Low / stalled momentum:**
- **Copilot CLI** — 32 active issues but **only 1 PR** today; multiple critical regressions (#4222, #4016) with no visible fix velocity. Community frustration visible in feature request upvotes (e.g., #443 with 33 👍)
- **Kimi Code** — No releases, low issue count, but two third-party API compatibility bugs (#2534, #2531) suggest **maintenance mode** rather than active development
- **Grok Build** — Absolute zero activity; effectively dormant

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **MCP is the new plugin, but its lifecycle is broken.** Every major tool (Claude Code, Codex, Copilot CLI) has active issues about MCP servers leaking processes, silently dropping calls, or failing to connect. The **MCP ecosystem is growing faster than the runtime stability** — a dangerous gap for production use.

2. **Agent truthfulness is the #1 trust issue.** Three separate tools (Claude Code #80348, Gemini CLI #22323, Codex #34301) report agents falsely claiming success, hanging forever, or hallucinating verification results. **Verification infrastructure** (Claude Code's background subagent review, CodeWhale's skill-packed security-review) is emerging as the antidote, but it's immature.

3. **Windows is an afterthought — and it shows.** Every non-Mac-first tool has at least one critical Windows instability issue: encoding crashes (Kimi Code), sandbox failures (Codex, CodeWhale), render loops (Copilot CLI), PATH corruption (CodeWhale), WSL path bugs (Codex). **Developers on Windows face 2-3x more friction** than their macOS/Linux peers.

4. **Context management is the next performance frontier.** CodeWhale's "context diet" EPIC (#4704–#4710), Pi's compaction fixes, Copilot CLI's auto-compaction threshold requests (#1688), and Claude Code's compaction failure bug (#80196) all point to a shared realization: **prompt context is the new memory management** — and current approaches are wasteful and fragile.

5. **Per-agent billing & cost visibility is becoming table stakes.** Copilot CLI (#4224, #4207), Pi (#6881), and Kimi Code (#2533) all have requests for per-subagent cost accounting and model-tier selection. **As multi-agent workflows mature, developers need cost observability** to make rational trade-offs between cheap and capable models.

6. **Authentication and OAuth are being rethought.** Pi's OpenRouter OAuth (#6927), copilot-cli's BYOK regression (#4016), and Kimi Code's `prompt_cache_key` leak (#2534) show that **API key management is still painful** — users want native OAuth flows and provider-agnostic auth handling.

### Reference Value for Developers

| If you care about... | Watch this tool | Because... |
|---------------------|----------------|-----------|
| **Fastest feature iteration** | CodeWhale, OpenAI Codex | Daily releases, 10+ PRs merged; expect breaking changes |
| **Production stability** | Pi (v0.80.7), Gemini CLI (v0.52.0) | Systematic bug closures, security hardening, eval tooling |
| **Enterprise GitHub integration** | Copilot CLI | Native Git worktree / ACP features — but expect Windows pain |
| **Chinese ecosystem / Moonshot** | Kimi Code, CodeWhale | Moonshot-native APIs, MiniMax provider routes |
| **TUI-first experience** | Pi, CodeWhale, OpenCode | Rich terminal UIs, skill packs, theme ecosystems |
| **Multi-agent orchestration** | OpenAI Codex (Sol/Terra/Luna), Gemini CLI | Most advanced subagent delegation patterns |
| **Security & sandboxing** | Gemini CLI (variable expansion fix), Qwen Code (destructive git guard) | Most explicit security hardening in recent patches |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-23 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following PRs attracted the most community discussion and represent the most closely watched Skill submissions:

### #1298 — `fix(skill-creator): run_eval.py always reports 0% recall`
**Status:** Open | **Author:** MartinCajiao | **Created:** 2026-06-10  
**Link:** https://github.com/anthropics/skills/pull/1298

**Functionality:** Fixes the core evaluation infrastructure for all Skill descriptions. The `run_eval.py` script, which powers the description-optimization loop, has been returning `recall=0%` for every query regardless of skill content—effectively optimizing against noise. This PR addresses Windows stream reading, trigger detection, and parallel worker issues.  
**Discussion highlights:** References issue #556 (12 comments, 7 upvotes), which has been reproduced independently 10+ times. This fix unblocks all skill-creator optimization.

### #514 — `Add document-typography skill`
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04  
**Link:** https://github.com/anthropics/skills/pull/514

**Functionality:** Prevents orphan word wrap (1-6 words on final line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents—problems affecting every document Claude produces.  
**Discussion highlights:** Addresses a universal pain point in AI document generation. No users had previously framed these issues as solvable via a skill.

### #1367 — `feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate`
**Status:** Open | **Author:** YuhaoLin2005 | **Created:** 2026-06-28  
**Link:** https://github.com/anthropics/skills/pull/1367

**Functionality:** A universal quality-assurance skill that audits AI output before delivery. First performs mechanical file verification, then a four-dimension reasoning audit in damage-severity priority order. Works across any project and tech stack.  
**Discussion highlights:** Growing interest in output quality gates. Complemented by issue #1385 proposing a three-gate pipeline (pre-task calibration → adversarial review → delivery verification).

### #723 — `feat: add testing-patterns skill`
**Status:** Open | **Author:** 4444J99 | **Created:** 2026-03-22  
**Link:** https://github.com/anthropics/skills/pull/723

**Functionality:** Comprehensive testing coverage including Testing Trophy model philosophy, AAA pattern for unit tests, React component testing with Testing Library, and E2E testing patterns.  
**Discussion highlights:** Addresses the community's strong demand for structured testing guidance. One of the most substantive skill proposals by content volume.

### #525 — `Add pyxel skill for retro game development`
**Status:** Open | **Author:** kitao | **Created:** 2026-03-05 | **Updated:** 2026-07-15  
**Link:** https://github.com/anthropics/skills/pull/525

**Functionality:** Integration with pyxel-mcp, an MCP server for the Pyxel retro game engine. Covers write → run_and_capture → inspect → iterate workflow for retro/pixel-art/8-bit game creation.  
**Discussion highlights:** Authored by the Pyxel engine creator himself. Demonstrates the MCP-to-Skill bridge pattern gaining traction.

### #1302 — `Add color-expert skill`
**Status:** Open | **Author:** meodai | **Created:** 2026-06-10 | **Updated:** 2026-07-21  
**Link:** https://github.com/anthropics/skills/pull/1302

**Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color space selection tables (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and accessibility guidance.  
**Discussion highlights:** Recently updated (July 21), indicating active maintenance. Appeals to designers, data visualization engineers, and frontend developers.

### #486 — `Add ODT skill — OpenDocument text creation and template filling`
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01  
**Link:** https://github.com/anthropics/skills/pull/486

**Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice.  
**Discussion highlights:** Broad enterprise demand for open-format document handling. Part of the document-skills cluster alongside PDF and DOCX skills.

---

## 2. Community Demand Trends

From the top Issues (sorted by comment volume and upvotes), five clear demand directions emerge:

| Demand Direction | Evidence | Key Issue |
|---|---|---|
| **Security & Trust Boundaries** | #492 (43 comments, 2 upvotes) exposes that community skills under `anthropic/` namespace create impersonation risk. The most-discussed issue by far. | [#492](https://github.com/anthropics/skills/issues/492) |
| **Skill Infrastructure Reliability** | #556 (12 comments, 7 upvotes), #1169 (3 comments), #1061 (3 comments, 2 upvotes) — all report the same `recall=0%` bug in skill-creator, blocking all optimization. Highest aggregate upvotes. | [#556](https://github.com/anthropics/skills/issues/556) |
| **Organizational Skill Sharing** | #228 (14 comments, 7 upvotes) requests org-wide skill libraries and direct sharing links instead of manual file transfers. | [#228](https://github.com/anthropics/skills/issues/228) |
| **Agent Governance & Safety** | #412 (6 comments) proposes governance patterns including policy enforcement, threat detection, trust scoring, and audit trails for AI agents. | [#412](https://github.com/anthropics/skills/issues/412) |
| **Context Optimization** | #1329 (9 comments) proposes `compact-memory`—symbolic notation for compact agent state to reduce context window consumption by long-running agents. | [#1329](https://github.com/anthropics/skills/issues/1329) |

**Notable:** Issue #189 (6 comments, 9 upvotes—highest upvote count) highlights duplicate skill installation between `document-skills` and `example-skills` plugins, indicating frustration with the plugin distribution model.

---

## 3. High-Potential Pending Skills

These PRs have active discussion threads and are likely candidates for near-term merge:

| PR | Skill | Why It May Land Soon |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` fix (0% recall) | Blocks all other skill-creator work; fixes issue #556 with 12 comments and 7 upvotes |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` quality gate | Author is actively engaging on companion issue #1385; updated July 2 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Updated July 21—most recently active PR; complete, self-contained implementation |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `skill-creator` trigger detection fix | Addresses same 0% recall bug from different angle; updated June 25 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows subprocess fix for skill-creator | Multiple reproductions on Windows; two related PRs (#1050, #362) already landed precedent |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` retro game engine skill | Author is engine maintainer; updated July 15 with continued activity |

**Note:** The `skill-creator` fix cluster (PRs #1298, #1323, #1099, #1050, #362, #361, #539) represents the highest-priority work—the evaluation pipeline is currently non-functional for all users, blocking any meaningful description optimization.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill-creation infrastructure (fixing the 0% recall bug across 7+ PRs and 3+ issues) before any new skill content can be effectively validated and optimized.**

Secondary demand clusters around: **(1)** document production quality (typography, ODT format support, color expertise), **(2)** safety and governance (trust boundary security, agent governance, output quality gates), and **(3)** testing methodology (testing-patterns skill, test generation).

---

# Claude Code Community Digest
**Date:** 2026-07-23

---

## Today's Highlights

A new release (v2.1.218) ships a meaningful UX improvement for code reviews, moving review work into a background subagent to declutter conversation history. However, the community is buzzing about a critical macOS regression where filesystem-class MCP tool calls are being silently dropped by Claude Desktop, and a long-running meta-issue around bypass permissions mode remains unresolved after 9 months. The documentation team also filed a coordinated batch of 10+ clarity/accuracy issues across the code.claude.com docs.

---

## Releases

**v2.1.218** — [Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

- `/code-review` now runs as a **background subagent**, so review output no longer fills your conversation and stacked slash commands remain the correct review target.
- Screen-reader announcements added for word/line deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`), improving accessibility.

---

## Hot Issues (10 Noteworthy)

1. **[BUG] macOS: Claude Desktop silently drops filesystem MCP tool calls** [#80002](https://github.com/anthropics/claude-code/issues/80002)
   - **Why it matters:** A critical platform-level regression. `tools/list` succeeds, but `tools/call` is never dispatched to the local server. 56 comments and 25 👍 indicate wide impact.
   - **Community:** Users report surviving app rollback, extension reinstall — the issue persists, suggesting a deeper runtime bug.

2. **[META] Bypass permissions mode is fundamentally broken — 9 months unresolved** [#39523](https://github.com/anthropics/claude-code/issues/39523)
   - **Why it matters:** The `bypassPermissions` flag does not actually bypass permissions. 12+ duplicates, 33 comments, 18 👍. A top community frustration with no official resolution.

3. **[BUG] GitHub connector shows "Connected" but exposes no tools in Cowork** [#61682](https://github.com/anthropics/claude-code/issues/61682)
   - **Why it matters:** Windows 11 users cannot use GitHub MCP tools despite successful connection. 17 comments, 19 👍.

4. **[BUG] Silent tool-call drop on macOS — overnight regression** [#79992](https://github.com/anthropics/claude-code/issues/79992)
   - **Why it matters:** All filesystem-class MCP servers silently drop calls after approval. 16 comments, strongly correlated with #80002.

5. **[BUG] Chrome MCP silently denies non-pre-approved domains** [#50842](https://github.com/anthropics/claude-code/issues/50842)
   - **Why it matters:** No user-facing approval path exists for new domains. 13 comments, 6 👍. Security vs. usability tension.

6. **[FEATURE] Desktop app: inject queued messages mid-task (CLI steering parity)** [#71726](https://github.com/anthropics/claude-code/issues/71726)
   - **Why it matters:** CLI users can "steer" Claude mid-task; Desktop users cannot. 9 comments, 16 👍 — strong demand for parity.

7. **[BUG] Fable 5 confidently claims "verified" against user's correct "no change" report** [#80348](https://github.com/anthropics/claude-code/issues/80348)
   - **Why it matters:** A hallucination/verification failure. The model insisted a change was complete when the actual subject was unchanged.

8. **[BUG] Task tools unavailable in top-level CLI despite `CLAUDE_CODE_ENABLE_TASKS=true`** [#80213](https://github.com/anthropics/claude-code/issues/80213)
   - **Why it matters:** Account-gated/flag discrepancy between Desktop and CLI. Same flag, same version — Desktop works, CLI doesn't.

9. **[BUG] `--json-schema` rejects draft 2020-12 meta-schema (since v2.1.214)** [#80402](https://github.com/anthropics/claude-code/issues/80402)
   - **Why it matters:** A clear regression in structured output validation, breaking users on modern JSON Schema drafts.

10. **[DOCS] 11 coordinated documentation issues filed** (e.g., #80398–#80390)
    - **Why it matters:** A concentrated documentation cleanup effort covering skills, subagents, plan mode, fast mode, workflows, and permission modes. Indicates Anthropic is investing in documentation quality.

---

## Key PR Progress (10 Important)

1. **[CLOSED] feat(plugins): add `/planwith` command for inline plan prompts** [#18217](https://github.com/anthropics/claude-code/pull/18217)
   - Adds `/planwith <prompt>` to skip the two-step plan toggle. Closed — likely merged into later release.

2. **[OPEN] docs(gcp): stop on checksum mismatch** [#80353](https://github.com/anthropics/claude-code/pull/80353)
   - Hardens GCP deployment by aborting on checksum mismatch instead of silently continuing.

3. **[OPEN] Add account profiles plugin** [#80326](https://github.com/anthropics/claude-code/pull/80326)
   - Experimental plugin for managing isolated `CLAUDE_CONFIG_DIR` environments per account (personal/work/client). Community-driven.

4. **[OPEN] docs: fix broken link(s) via archive.org** [#80294](https://github.com/anthropics/claude-code/pull/80294)
   - Automated link rot fix using Wayback Machine snapshots. One of several similar PRs.

5. **[OPEN] fix: Console scrolling top of history** [#80241](https://github.com/anthropics/claude-code/pull/80241)
   - Fixes terminal auto-scrolling to top when Claude appends text — a common UX annoyance.

6. **[OPEN] fix: Auto-compact never triggers despite 100% context** [#80196](https://github.com/anthropics/claude-code/pull/80196)
   - Addresses context compaction failure on Max plan with 200K mode.

7. **[OPEN] fix: Instantly hitting usage limits with Max subscription** [#80195](https://github.com/anthropics/claude-code/pull/80195)
   - Addresses erroneous immediate rate-limiting for Max plan subscribers.

8. **[OPEN] Make devcontainer firewall init resilient to DNS failures** [#80112](https://github.com/anthropics/claude-code/pull/80112)
   - Hardens `.devcontainer/init-firewall.sh` against transient DNS failures.

9. **[OPEN] Add twilight plugin: spec-first design with focus stack** [#80008](https://github.com/anthropics/claude-code/pull/80008)
   - Demonstrates a design → implement → focus workflow pattern. Noted as requiring significant modification, but shows community innovation.

10. **[OPEN] docs: fix broken link(s) via archive.org** [#80229](https://github.com/anthropics/claude-code/pull/80229)
    - Continued automated link maintenance work.

---

## Feature Request Trends

1. **CLI ↔ Desktop parity** — Users consistently request Desktop equivalents of CLI-only features: mid-task message injection (#71726), inline plan prompts (#18217), and structured task tools (#80213).

2. **Plan-mode variants for weaker models** — Requests for "fableplan" (analogous to opusplan) to reduce token waste on simpler tasks (#80359).

3. **Better MCP tool lifecycle** — Multiple issues around tools disappearing, not connecting, or silently failing after approval (#80002, #61682, #79319).

4. **Account profile management** — The `account-profiles` plugin (#80326) reflects demand for multi-account isolation on a single machine.

5. **Structured Task tools as first-class** — Users want reliable `TaskCreate`/`TaskList`/`TaskUpdate` across all sessions and platforms, not just Desktop.

---

## Developer Pain Points

1. **Permissions mode bypass is broken** — #39523 (33 comments, 9 months old) remains the #1 unresolved pain point. Users cannot trust `bypassPermissions` to work.

2. **Silent tool-call failures on macOS** — #80002 and #79992 describe MCP calls being dropped without error. Developers lose time debugging non-issues.

3. **Account-gated feature inconsistency** — Task tools appear/disappear based on account configuration, not version or flag (#80210, #80213). Hard to diagnose.

4. **Model hallucination of verification** — Fable 5 asserting changes are "verified" when they aren't (#80348) erodes trust in autonomous code editing.

5. **Context compaction failures** — Max plan users hitting "100% context used" with no automatic compaction (#80196) leads to stalled workflows.

6. **Documentation ambiguity** — The 11 coordinated doc issues (#80390–#80400) highlight that permissions, subagents, plan mode, and skill hooks are poorly documented or inaccurate.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## Today's Highlights
A flurry of four Rust alpha releases (0.146.0-alpha.1 through .4) landed today with no changelog details, signaling active internal iteration. Bug reports remain dominated by MCP process leaks, Windows/WSL sandbox issues, and a highly upvoted request to disable Codex's auto-resolve timer. A significant batch of 28 pull requests was merged, focusing on thread pinning, analytics reliability, MCP UI resource handling, and Guardian model integration.

## Releases
- **[rust-v0.146.0-alpha.1 through .4](https://github.com/openai/codex/releases)** — Four sequential alpha releases pushed today. No release notes or changelogs were included; these likely represent internal CI builds or hotfix iterations. No breaking changes announced.

## Hot Issues (Top 10)

1. **[#28969 — Add setting to disable auto-resolve in 60 seconds](https://github.com/openai/codex/issues/28969)** — ⭐ 151 reactions, 53 comments. The community's loudest ask: a toggle to prevent Codex from automatically resolving questions after 60 seconds. This disrupts workflows where users need time to review responses. Author `antoyo` reports this on Linux with `gpt-5.5`.

2. **[#12491 — MCP child processes not reaped: 1300+ zombies, 37GB leak](https://github.com/openai/codex/issues/12491)** — 27 comments. A severe resource exhaustion bug in Codex.app GUI: MCP child processes are left as zombies after task completion, accumulating to over 1300 processes and 37GB of leaked memory. Open since February.

3. **[#21639 — Hooks no longer run after Codex Desktop update](https://github.com/openai/codex/issues/21639)** — 23 comments. A regressive bug where pre/post hooks silently stopped executing after the 26.506.21252 app update. Users on macOS arm64 report workflows broken without hooks.

4. **[#16815 — WSL agent mode fails on Windows: "AbsolutePathBuf deserialized without a base path"](https://github.com/openai/codex/issues/16815)** — 22 comments, 13 upvotes. Windows Business users cannot use WSL agent mode due to a path deserialization error. This blocks entire teams relying on WSL for local development.

5. **[#28015 — False positive cybersecurity safety check blocks normal repo maintenance](https://github.com/openai/codex/issues/28015)** — 22 comments. Codex CLI wrongly flags routine DevOps tasks (git operations, dependency updates) as security risks, forcing users through an additional safety-check prompt mid-session.

6. **[#27458 — Codex appears to timeout while waiting for user input](https://github.com/openai/codex/issues/27458)** — 12 comments, 43 upvotes. On WSL with `gpt-5.5 medium`, Codex stops responding when awaiting user input. High community agreement signals a widespread UX regression.

7. **[#26984 — MCP stdio servers leak pipe fds + orphan child processes → EMFILE](https://github.com/openai/codex/issues/26984)** — 14 comments. Cumulative file descriptor leaks from MCP stdio servers eventually hit the OS limit (`EMFILE`), crashing long-running sessions. A companion to #12491 but in the CLI, not the GUI.

8. **[#10599 — Feature request: configure location of worktrees](https://github.com/openai/codex/issues/10599)** — 16 comments, 66 upvotes. The top-voted enhancement request: allow users to specify where Codex creates Git worktrees instead of the hardcoded default path. Open since February 2026.

9. **[#22428 — Windows Desktop sandbox fails with CreateProcessAsUserW](https://github.com/openai/codex/issues/22428)** — 15 comments. Sandbox setup on Windows 11 fails with `CreateProcessAsUserW` error; sandbox command execution is completely broken for affected users.

10. **[#34301 — GPT Sol/Terra threads cannot spawn Luna subagents on Windows](https://github.com/openai/codex/issues/34301)** — 5 comments, 7 upvotes. Multi-agent chains break on Windows because the Luna Multi Agent version isn't compatible, blocking advanced agent orchestration.

## Key PR Progress (Top 10)

1. **[#34852 — Wake sleeping threads for queued agent mail](https://github.com/openai/codex/pull/34852)** — Merged. Fixes a critical deadlock: idle threads in durable sleep now wake when agent mail arrives, preventing dropped multi-agent messages.

2. **[#34840 — Add persisted thread pinning to the app server](https://github.com/openai/codex/pull/34840)** — Merged. Introduces `isPinned` metadata, filtering, and cursor-based pagination for pinned threads. Implements a long-requested organizational feature.

3. **[#34839 — Preserve user input when MCP startup is interrupted](https://github.com/openai/codex/pull/34839)** — Merged. Fixes a data-loss bug where interrupting a turn during MCP tool startup would discard the user's submitted input.

4. **[#34831 — Flush analytics before in-process app server shutdown](https://github.com/openai/codex/pull/34831)** — Merged. Prevents analytics data loss by flushing queued events before the in-process app server exits. Directly addresses incomplete `completed-turn` events.

5. **[#34835 — Track compaction time in turn profiles](https://github.com/openai/codex/pull/34835)** — Merged. Adds `compaction_ms` to turn profiles and analytics, separating model context compaction time from idle time. Improves performance observability.

6. **[#34847 — Use Guardian model limits for review sessions](https://github.com/openai/codex/pull/34847)** — Merged. Ensures Guardian review sessions use correct context-window and auto-compaction limits, preventing truncation or errors when parent session uses a different model.

7. **[#34846 — Allow custom providers to opt into standalone web search](https://github.com/openai/codex/pull/34846)** — Merged. Adds `supports_standalone_web_search` setting for custom Responses providers, enabling `web.run` tool for opted-in third-party backends.

8. **[#34849 — Cache remote plugin catalogs by scope](https://github.com/openai/codex/pull/34849)** — Merged. Implements on-disk caching (3-hour TTL) for global, user, and workspace plugin catalogs, reducing network round-trips on reload.

9. **[#34850 — Disable image generation for Free-plan accounts](https://github.com/openai/codex/pull/34850)** — Merged. Skips registering the `image_generation` tool for free accounts based on cached auth plan, preventing tool registration errors.

10. **[#34819 — Enable git attribution across Codex entry points](https://github.com/openai/codex/pull/34819)** — Merged. Installs the git attribution extension in app server, MCP server, and debug prompt-input, ensuring authenticated workspace policy controls commit/pull request attribution.

## Feature Request Trends
- **Configurable auto-resolve timer** — The top-voted request (#28969) asks for a user-controlled timeout or disable option for Codex's 60-second question auto-resolution, which interrupts deliberate review.
- **Persistent side chats** — Multiple requests (#26227: 17 upvotes) ask for side chats to survive session restarts as child threads rather than being ephemeral.
- **Headless remote Linux support for mobile** — High demand (#23200: 42 upvotes) for Codex mobile to control always-on Linux servers without needing a desktop machine as intermediary.
- **Worktree location configuration** — Continued demand (#10599: 66 upvotes) to allow users to specify where Git worktrees are created rather than accepting the default path.
- **Plan mode enforcement** — Multiple issues (#32594) report agents violating plan-mode restrictions, indicating users need stricter sandbox guarantees.

## Developer Pain Points
- **MCP process/fd leaks are the #1 stability issue** — Three separate issues (#12491, #26984, #17574) describe zombie processes, leaked file descriptors, and memory exhaustion from MCP subprocess management. This is a systemic problem across both GUI and CLI.
- **Windows + WSL remains a broken experience** — Issues pile up around sandbox failures (#22428, #34841), WSL path resolution (#16815, #34782, #34827), PowerShell prompt intrusions (#23485), and WSL-specific agent failures (#34301). Windows developers face the highest friction.
- **Post-update regressions are recurring** — Multiple reports (#21639, #33774, #32082, #34782) show Desktop and Store updates silently breaking hooks, thread grouping, path resolution, and sandbox functionality. Each update cycle introduces new regressions.
- **Session/thread persistence quirks** — Users report threads disappearing from sidebar but existing on disk (#30385), thread assignments lost after updates (#33774), and session_index inconsistencies — all pointing to a fragile state management system.
- **Plan mode trust issues** — Reports that agents violate "plan only" or "read-only" mode (#32594) erode confidence in Codex's ability to respect safety constraints during automated work.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-23

## Today's Highlights
Three releases landed today, including the stable **v0.52.0**, a **v0.53.0-preview.0** with LLM-powered triage infrastructure, and a nightly build fixing credential fallback logic. The community continues to report agent reliability issues—subagents falsely reporting success after hitting turn limits, and the generalist agent hanging indefinitely—while the team is actively shipping security hardening (variable expansion bypass fix) and eval tooling (coverage reports).

## Releases

**v0.52.0** (Stable)
- Refactor to exclude transient CI config files from workspace context (PR #28216)
- Foundational modules for caretaker triage worker core (#chadd28)

**v0.52.0-nightly.20260723.g9681621c6**
- Fix: sequentially verify cached credentials and restore `GOOGLE_APPLICATION_CREDENTIALS` fallback (#28472)
- Feat: add eval coverage report command (#ved015)

**v0.53.0-preview.0**
- Fix: coalesce cancelled A2A tool responses and consecutive roles to prevent 400 Bad Request (#28407)
- Feat: implement LLM triage orchestrator and container build (#chadd28)

---

## Hot Issues (Top 10)

**#22323** — Subagent recovery after MAX_TURNS reported as GOAL success  
*What:* `codebase_investigator` subagent hits max turns but reports `status: "success"` / `Termination Reason: "GOAL"`, hiding the interruption.  
*Why it matters:* Misleading success signals erode trust in agent reliability, especially in multi-step investigations. Community reacted with 2 👍.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/22323)

**#21409** — Generalist agent hangs forever  
*What:* Subagent delegation causes indefinite hangs for simple tasks (e.g., folder creation). Workaround: instruct model not to use subagents.  
*Why it matters:* 8 comments, 8 👍 — the highest community reaction in this set. Blocks any workflow relying on subagent delegation.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/21409)

**#19873** — Leverage bash affinity via Zero-Dependency OS Sandboxing  
*What:* Gemini 3 models are native bash users; proposes sandboxing + intent routing to fully utilize POSIX tool chains without security trade-offs.  
*Why it matters:* Long-running EPIC (since Feb) with 8 comments. Could fundamentally improve execution quality and security posture.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/19873)

**#24353** — Robust component-level evaluations  
*What:* Epic to build out a behavioral eval framework (76 tests so far) for 6 supported models, aiming for per-component reliability metrics.  
*Why it matters:* 7 comments. Addresses the lack of granular testing that underlies many agent bugs.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/24353)

**#22745** — AST-aware file reads, search, and mapping  
*What:* Investigate whether AST-aware tools can reduce token waste and misaligned reads in code navigation.  
*Why it matters:* 7 comments. If implemented, could dramatically reduce turn counts and context windows.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/22745)

**#21968** — Gemini doesn't use skills and sub-agents enough  
*What:* Anecdotal report that even with custom skills and sub-agents defined, the model rarely invokes them unless explicitly instructed.  
*Why it matters:* 6 comments. Core UX concern—users invest in customization but see no behavioral change.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/21968)

**#26522** — Auto Memory retries low-signal sessions indefinitely  
*What:* If an extraction agent skips a low-signal session, it remains unprocessed and is re-surfaced repeatedly.  
*Why it matters:* 5 comments. Causes infinite loop in memory pipeline; part of a broader memory system bug cluster filed by SandyTao520.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/26522)

**#25166** — Shell command execution stuck on "Waiting input"  
*What:* CLI hangs after a shell command completes, still showing it as active and awaiting input.  
*Why it matters:* 4 comments, 3 👍. Simple commands fail silently; disrupts interactive workflows.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/25166)

**#24246** — 400 error with >128 tools  
*What:* CLI returns HTTP 400 when more than ~128 tools are available.  
*Why it matters:* 3 comments. Limits the practical scale of tool ecosystems and multi-agent setups.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/24246)

**#22093** — Subagents running without permission since v0.33.0  
*What:* After auto-updating to v0.33.0, subagents activate despite being disabled in config. User expected only MCP functionality.  
*Why it matters:* 3 comments. Regression in permission/configuration enforcement raises security and predictability concerns.  
[GitHub](https://github.com/google-gemini/gemini-cli/issues/22093)

---

## Key PR Progress (Top 10)

**#28403** — Fix: block `$VAR` and `${VAR}` variable expansion bypass  
*What:* Security fix for incomplete detection in `detectBashSubstitution()` / `detectPowerShellSubstitution()`.  
*Why it matters:* Patches GHSA-wpqr-6v78-jr5g. Hardens workflow `gemini-automated-issue-dedup.yml`.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28403)

**#28509** — Fix: filter thought parts from history when context management is disabled  
*What:* Prevents internal monologue/thinking parts from leaking into `getHistoryTurns` for Gemini 2.x and modern models.  
*Why it matters:* Stops duplicate reasoning blocks from corrupting conversation state.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28509)

**#28469** — Fix: rotate session ID on model fallback  
*What:* Rotates active session ID when falling back to `gemini-2.5-flash`, preventing stateful API errors.  
*Why it matters:* Fixes blocking "Please submit a new query" error from Code Assist backend.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28469)

**#28485** — Fix: add gemini-3.5-flash to model selector for all users  
*What:* Fixes a bug where `gemini-3.5-flash` was defined but not surfaced in the legacy model selector path.  
*Why it matters:* Unblocks users on v0.51.0 from accessing the new model.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28485)

**#28506** — Fix: propagate AbortSignal in /compress command  
*What:* Passes `AbortSignal` to `tryCompressChat`, making background compression cancellable.  
*Why it matters:* Fixes dangling network requests when user starts a new prompt or presses Escape.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28506)

**#28446** — Fix: use native fetch for OAuth token exchange  
*What:* Replaces HTTP client with native `fetch` to avoid "Premature close" errors on headless VPSes.  
*Why it matters:* P1 severity—unblocks `gemini login` on certain headless environments.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28446)

**#28447** — Docs: add Windows PowerShell troubleshooting  
*What:* New troubleshooting section for `gemini` command failures after npm install on Windows.  
*Why it matters:* Addresses a common onboarding friction for Windows users.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28447)

**#28169** — Feat: add eval coverage report command  
*What:* New `eval:coverage` command that reports eval inventory coverage against the tool registry.  
*Why it matters:* Provides visibility into test gaps for built-in tools.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28169)

**#28431** — Feat: configure Cloud Run job, Workflows, Dockerfile for PR generator  
*What:* Foundational infra for Gemini CLI SSR Code Generation Pipeline (Eventarc + Cloud Run Jobs).  
*Why it matters:* Enables automated PR generation pipelines.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28431)

**#28024** — Chore: bump @opentelemetry/core 2.7.1 → 2.8.0  
*What:* Dependabot update for telemetry dependency.  
*Why it matters:* Keeps observability stack current.  
[GitHub](https://github.com/google-gemini/gemini-cli/pull/28024)

---

## Feature Request Trends

1. **AST-aware code intelligence** — Two linked EPICs (#22745, #22746) investigate replacing naive file reads and codebase mapping with AST-aware tools to reduce token waste and improve navigation precision.

2. **Component-level evaluation framework** — Issue #24353 and the newly merged `eval:coverage` command (#28169) show a clear push toward granular, per-component behavioral testing across all supported models.

3. **Agent self-awareness and observability** — Multiple requests surface for subagent trajectory visibility (#22598), accurate CLI flag reporting (#21432), and bug reports that include subagent context (#21763).

4. **Memory system hardening** — A cluster of issues from SandyTao520 (#26516, #26522, #26523, #26525) targets Auto Memory reliability: indefinite retries of low-signal sessions, secret redaction before model context, and invalid patch quarantine.

5. **Destructive operation safety** — Issue #22672 asks for guardrails against accidental `git reset --force` or destructive database modifications, reflecting growing deployment of the CLI in production-adjacent scenarios.

---

## Developer Pain Points

- **Agent reliability regressions** — The most upvoted bug (#21409, 8 👍) describes the generalist agent hanging indefinitely. Combined with #22323 (false success reporting), these erode trust in autonomous agent execution.
- **Configuration leaks and permission bypass** — Issue #22093 (subagents running when disabled) and #22267 (Browser Agent ignoring `settings.json` overrides) show that configuration enforcement is fragile across multiple agent types.
- **Shell execution fragility** — Two separate bugs (#25166, #22465) report the CLI hanging on interactive prompts or after shell commands complete, blocking basic file operations and app scaffolding.
- **Auto Memory infinite loops** — Issue #26522's indefinite retry of low-signal sessions, plus the security concern of secrets being sent to the model before redaction (#26525), make the memory feature risky for production use.
- **Tool scaling limits** — Issue #24246's 400 error with >128 tools caps multi-agent/tool ecosystems, while #23571 notes the model scattering tmp scripts arbitrarily when shell execution is restricted.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today's Highlights
Three patch releases (v1.0.74-1 through -3) rolled out today, introducing **Gemini 3.6 Flash support** and a first-run sandbox opt-in splash, along with fixes for session multiplexing leaks. The community is buzzing with **32 active issues** updated in the last 24 hours, including a significant regression of the infinite React render loop bug (#4222) and a spike in triage-level reports covering Windows crashes, tmux incompatibilities, and subagent billing gaps.

---

## Releases
**Three patch versions shipped today:** v1.0.74-1, v1.0.74-2, v1.0.74-3
- **Added:** First-run splash to opt into the default sandbox; support for `gemini-3.6-flash`
- **Improved:** Multiplexing sessions no longer leak open dialogs; the `$` interactive shell shortcut now works correctly when switching between sessions
- **Fixes:** Bug fixes in v1.0.74-2 and v1.0.74-3 (details not separately enumerated)

---

## Hot Issues (Top 10 by Relevance)

1. **[#4222] Regression of #2802: Infinite React/Ink render loop returns on v1.0.72+** — The infamous main-pane freeze bug has regressed on Windows in VS Code’s integrated terminal. Prompts disappear, “Working…” hangs indefinitely. Critical for Windows developers relying on the CLI. [Issue](https://github.com/github/copilot-cli/issues/4222)

2. **[#4016] BYOK (COPILOT_PROVIDER_*) still rejected in --acp mode** — A multi-release regression where custom providers work in interactive mode but fail in ACP mode with `-32000 Authentication required`. Affects enterprise users with bring-your-own-key setups. 5 comments, 4 👍. [Issue](https://github.com/github/copilot-cli/issues/4016)

3. **[#4163] Zombie child processes accumulate under copilot PID on Linux** — Finished subprocesses aren’t reaped, with ~2 zombies/min leaking per session. Impacts long-running sessions on Linux servers. 3 comments. [Issue](https://github.com/github/copilot-cli/issues/4163)

4. **[#4219] Copilot CLI crashes repeatedly on Windows when notifications enabled** — Hard `FAST_FAIL` native access violations when the `notifications` setting triggers OS toast paths. Makes the CLI unstable on Windows for users who want desktop alerts. [Issue](https://github.com/github/copilot-cli/issues/4219)

5. **[#4217] Crash on exit (Windows) — libuv async_send on closing handle** — `copilot.exe` consistently crashes at teardown with `FAST_FAIL_FATAL_APP_EXIT`. Session work completes, but the crash pollutes exit codes and logs. 1 👍. [Issue](https://github.com/github/copilot-cli/issues/4217)

6. **[#4223] Shell command completion never detected inside tmux** — Output appears correctly, but the CLI reports “still running” forever, requiring manual interruption. Previously unreported, this makes tmux usage nearly impossible. [Issue](https://github.com/github/copilot-cli/issues/4223)

7. **[#4224] OTel spans for subagent calls omit billing attributes** — Subagent model calls consume real AI credits but are invisible in OpenTelemetry cost accounting. Enterprise users can’t accurately track spending. [Issue](https://github.com/github/copilot-cli/issues/4224)

8. **[#4206] Environment footer stuck on “Loading:” forever under MCP policy** — Built-in GitHub MCP handshake stalls under organizational MCP policies, leaving the status bar permanently incomplete. Affects enterprise deployments. 2 comments, 2 👍. [Issue](https://github.com/github/copilot-cli/issues/4206)

9. **[#4212] Prompt box and menu items dark-on-dark inside tmux** — Accessibility regression: dark theme renders invisible text in tmux sessions. Works fine in plain terminals. 1 comment. [Issue](https://github.com/github/copilot-cli/issues/4212)

10. **[#4227] Xcode ACP custom agent fails with “failed to produce a response”** — Users trying to integrate Copilot CLI as an Xcode coding intelligence agent via ACP get `session/prompt` failures despite valid auth and CLI. Blocks macOS developer workflow. [Issue](https://github.com/github/copilot-cli/issues/4227)

---

## Key PR Progress
Only **one PR** was updated in the last 24 hours:

- **[#3163] ViewSonic monitor** — Opened by tijuks, this PR appears to initiate a GitHub Action runner configuration related to monitor support (linked to issues #2591, #3561, #3559). Last updated 2026-07-22, still open with 0 comments. [PR](https://github.com/github/copilot-cli/pull/3163)

*Note: Despite the volume of open issues, PR activity remains low — no feature or bug-fix PRs were merged or significantly updated today.*

---

## Feature Request Trends
Five clear developer demands emerged from this week’s issues:

1. **Model pool configurability for Auto mode** (#4218, 6 👍) — Users want to restrict which models Auto mode can select to control cost and behavior, rather than allowing access to every available model.

2. **Per-subagent AI credit usage breakdown** (#4207, 6 👍) — The `/usage` command shows cumulative totals but not per-agent distribution, making cost attribution impossible for teams.

3. **Inline custom agent invocation & chaining** (#4208, 3 👍) — Developers want to invoke specific agents mid-prompt while preserving conversation context, enabling multi-agent workflows without restarting.

4. **Configurable auto-compaction threshold** (#1688, 5 👍) — Users of high-capacity models (e.g., Claude Opus 4.6) want to trigger context compaction earlier than the built-in threshold to avoid latency degradation.

5. **Built-in PDF reading support** (#443, 33 👍) — The top-voted feature request overall. Users want native PDF parsing for academic papers, documentation, and reports without manual `pdftotext` installation.

---

## Developer Pain Points
Recurring frustrations from the community this week:

- **Windows stability crisis:** Three separate crash reports (notifications crash, exit crash, render loop regression) make the CLI unreliable on Windows. The infinite React render loop (#4222) has regressed for the second time.
- **tmux/terminal incompatibility:** Multiple reports of dark-on-dark rendering (#4212) and command completion detection failures (#4223) when running inside tmux — a common development environment.
- **ACP/BYOK authentication regression:** Issue #4016 shows that custom provider authentication in ACP mode remains broken across multiple releases, frustrating enterprise adopters.
- **Zombie processes on Linux (#4163):** Process reaping is not handled, degrading server performance over time.
- **Billing transparency gaps:** Subagent credit usage is invisible in OTel spans (#4224) and not broken down in `/usage` (#4207), creating accounting blind spots for organizations.
- **MCP server compatibility issues:** BigInt serialization failures (#4211), stalled handshakes under policies (#4206), and inaccurate deferred cost reporting (#4189) point to immature MCP integration.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-23

**Data Source:** github.com/MoonshotAI/kimi-cli

---

## Today's Highlights

A quiet day on the release front, but the community is actively shaping the project. The most critical fix in flight addresses a `prompt_cache_key` parameter being incorrectly sent to third-party APIs, causing 400 errors—a PR is already open. A new feature request for per-agent model selection signals growing sophistication in multi-agent workflow design. Meanwhile, a persistent TPD rate limit issue (#2318) continues to frustrate users on the moonshot.ai platform.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **#2318 — [bug] request reached organization TPD rate limit, current: 1505241**  
   *Author: globalvideos272-lab | Updated: 2026-07-22 | 👍: 2*  
   A critical bug report that has been open since May, with a user running Kimi 2.6 on Windows 10 hitting a TPD rate limit on moonshot.ai. The root cause appears to be an incorrect TPD calculation. The long duration and only 2 upvotes suggest it may be an edge case, but the severity is high for affected users.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2318)

2. **#2531 — MCP tool names & schemas rejected by Moonshot API (HTTP 400)**  
   *Author: sbdsam | Updated: 2026-07-22 | 👍: 0*  
   A recently reported compatibility issue where MCP tool schemas using `anyOf` are rejected by the Moonshot API. The user is on `kimi-cli 1.49.0` on macOS arm64, suggesting this is a relatively new regression in schema validation.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2531)

3. **#2534 — [bug] Model API error 400 Validation: Unsupported parameter(s): `prompt_cache_key`**  
   *Author: dewrama | Updated: 2026-07-23 | 👍: 0*  
   A fresh bug report (opened today) where a third-party API (Nvidia nim models) returns a 400 error because Moonshot's proprietary `prompt_cache_key` parameter is being sent to non-Moonshot endpoints. This is a clear interoperability bug introduced in a recent update.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2534)

4. **#2533 — Feature Request: Per-agent model selection for sub-agents**  
   *Author: bob0x-ai | Updated: 2026-07-23 | 👍: 0*  
   A well-articulated feature request to allow sub-agents to use different models than the session default. The use case is cost-tiered multi-agent workflows—cheap models for simple tasks, capable models for complex ones. This reflects a growing demand for flexible agent orchestration.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2533)

5. **#2532 — kimi web crashes at startup on Windows when stdout is redirected: UnicodeEncodeError (gbk)**  
   *Author: BFour666 | Updated: 2026-07-22 | 👍: 0*  
   A locale-specific crash on Chinese Windows where the `➜` (U+279C) character in the startup banner cannot be encoded with the GBK codec. This affects anyone piping or redirecting stdout, including CI/CD and IDE integrations. A blocker for Windows developers on Chinese-locale systems.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2532)

---

## Key PR Progress

1. **#2535 — fix(llm): scope prompt cache keys to Moonshot APIs**  
   *Author: Sanjays2402 | Updated: 2026-07-23*  
   Directly resolves #2534 by ensuring `prompt_cache_key` is only sent to official Kimi/Moonshot APIs, not third-party endpoints. A clean, targeted fix that preserves caching for official APIs while fixing interoperability.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2535)

2. **#2524 — fix(tools): count StrReplaceFile replacements against the running content**  
   *Author: Sreekant13 | Updated: 2026-07-22*  
   Fixes a subtle bug where `StrReplaceFile` computed replacement counts against the original file content instead of the sequentially modified content. This caused chained replacements to be miscounted. Important for any developer relying on file edit operations in agent workflows.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2524)

3. **#2530 — fix(shell): stop blocking until timeout when a detached child holds the pipes**  
   *Author: ayaangazali | Updated: 2026-07-22*  
   Resolves #2468, a behavioral bug where `_run_shell_command` blocks indefinitely (until timeout) when a detached child process (e.g., a daemon) holds stdout/stderr pipes open. This fix checks the exit code before waiting for EOF, which will significantly improve shell command reliability in agent scenarios.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2530)

---

## Feature Request Trends

- **Per-agent model selection** (#2533): The most notable feature request this week. Users want to assign different models to sub-agents independently of the session default. This is a clear signal that multi-agent workflows are maturing, and developers need finer-grained cost/quality control.
- **No other explicit feature requests** were found in the last 24 hours, indicating a quieter period for new feature ideation.

---

## Developer Pain Points

- **Interoperability with third-party APIs** (#2534, #2531): Two separate issues in the last 24 hours deal with Moonshot-specific parameters or schema validation being rejected by non-Moonshot APIs. This is the dominant pain point right now—developers want to use Kimi CLI with a variety of backends, but recent updates have introduced Moonshot-specific assumptions that break compatibility.
- **Windows locale encoding** (#2532): The GBK encoding crash on Chinese Windows is a recurring category of pain point for users on non-UTF-8 locales. It blocks essential workflows like piping output to logs or CI systems.
- **Rate limiting confusion** (#2318): The TPD rate limit issue has been unresolved for over two months. While it may not affect all users, the specific error message ("1505241") suggests a calculation bug rather than a normal limit—this kind of silent failure erodes trust in the platform's billing/rate-limiting logic.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-23

## Today's Highlights
A widespread outage affecting **opencode-go subscription users** dominated today's activity, with multiple reports of "Request blocked by upstream provider" errors. Meanwhile, a new PR introduces an `--no-project-instructions` flag to mitigate prompt-injection risks from untrusted repositories, and community members continue pushing for features like automatic model discovery and infinite-loop fixes.

## Releases
No new versions were released in the last 24 hours. The latest stable release remains **v1.18.4**.

## Hot Issues

1. **[#38218 – All subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)**  
   A critical bug affecting all opencode-go subscribers. Multiple users (including **#38293** and **#38368**) confirm no model works after login. The issue has 22 comments and 5 upvotes, trending in the last 14 hours.

2. **[#6231 – Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)**  
   The most-voted open feature request (185 👍, 28 comments). Users want automatic model listing from local providers like LM Studio and Ollama instead of manual configuration. A related bug (**#18011**) shows LM Studio only exposes 3 of 9 models.

3. **[#19466 – opencode using CPU for doing nothing](https://github.com/anomalyco/opencode/issues/19466)**  
   An i9-14900 CPU spins at 50% usage while the tool is simply waiting for API rate-limit retries. 15 comments, 11 upvotes. Community expects idle resources to be near-zero.

4. **[#26220 – Infinite loop after tool calls complete (Zen/big-pickle)](https://github.com/anomalyco/opencode/issues/26220)**  
   The process enters an unresponsive infinite loop after finishing tool calls. 6 comments, 3 upvotes. Reproduced across multiple versions, suggesting a deep architectural issue.

5. **[#37970 – Plan/Build mode removed in latest version](https://github.com/anomalyco/opencode/issues/37970)**  
   Users report the Plan/Build mode toggle is gone in v1.18.0. Workarounds exist but behavior is inconsistent. 10 comments suggest this is a UI regression affecting workflow.

6. **[#38293 – Russian user: subscription not working](https://github.com/anomalyco/opencode/issues/38293)**  
   Non-English user reports the same "Request blocked by upstream provider" as #38218, underscoring global impact of the subscription outage. 15 comments.

7. **[#38399 & #38400 – All tools return "no such column: data"](https://github.com/anomalyco/opencode/issues/38399)**  
   Two identical reports from the same user: every tool (bash, read, glob, etc.) fails with a SQLite column error. Appears to be a core database migration issue.

8. **[#36677 – Long-lived V2 server enters persistent allocation loop](https://github.com/anomalyco/opencode/issues/36677)**  
   An idle `opencode2 serve` process consumes 1.1–1.3 GB RSS and one full CPU core due to a JavaScript allocation loop. Fresh servers are fine, suggesting a memory leak from state accumulation.

9. **[#17270 – Failed to run query 'CREATE TABLE `account`'](https://github.com/anomalyco/opencode/issues/17270)**  
   A closed issue re-surfacing with 2 new comments. Users hit unexpected SQL errors during initial setup, likely due to schema version mismatches. Prompted multiple duplicates.

10. **[#38416 – "New UI interface is as ugly as feces"](https://github.com/anomalyco/opencode/issues/38416)**  
    A strongly-worded complaint about desktop UI changes. While not constructive, it highlights community resistance to recent UX redesigns. 1 comment so far but tagged `needs:compliance`.

## Key PR Progress

1. **[#38420 – `--no-project-instructions` switch](https://github.com/anomalyco/opencode/pull/38420)** (NEW)  
   Adds a CLI flag and env variable to disable loading repo-controlled `AGENTS.md`/`CLAUDE.md` files, defending against prompt injection in untrusted repos. Tagged `needs:compliance`.

2. **[#38401 – Load dynamic models for `/api/generate`](https://github.com/anomalyco/opencode/pull/38401)** (NEW)  
   Fixes a gap where stateless API requests couldn't use dynamically loaded models. Gemini models work in sessions but failed via `/api/generate`. Closes a long-standing inconsistency.

3. **[#38417 – Preserve OpenAI message phases](https://github.com/anomalyco/opencode/pull/38417)** (NEW)  
   Properly decodes `response.output_item.added` events to preserve `commentary` and `final_answer` phases, matching the official OpenAI SDK contract.

4. **[#38397 – Generate TUI syntax from V2 theme](https://github.com/anomalyco/opencode/pull/38397)** (MERGED)  
   Refactors TUI theming to generate `SyntaxStyle` directly from V2 tokens, removing parallel V1 resolution. Preserves all 101 test scenarios. A significant maintainability improvement.

5. **[#38414 – Migrate named agent colors](https://github.com/anomalyco/opencode/pull/38414)** (NEW)  
   Fixes a V2 migration issue where named agent colors (e.g., "red", "blue") weren't preserved, falling back to `#aaaaaa` by default.

6. **[#38418 – Fix web mode local-client time earlier than server](https://github.com/anomalyco/opencode/pull/38418)** (NEW)  
   Fixes a bug where LLMs stop responding in web mode if the client clock is even slightly behind the server. Uses `created` field for ordering instead of IDs.

7. **[#38403 – Standardize tooltip delay](https://github.com/anomalyco/opencode/pull/38403)** (NEW)  
   Unifies hover delay to 400ms across the product with an `instant` mode for model-picker details. Removes per-call-site control for consistency.

8. **[#38406 – Retry failed location boot](https://github.com/anomalyco/opencode/pull/38406)** (NEW)  
   Fixes a bug where a failed location boot caches the failure for the full 60-minute TTL, preventing any future attempts. Re-tries immediately instead.

9. **[#38408 – Fix pr-standards falsely flagging v2 PRs](https://github.com/anomalyco/opencode/pull/38408)** (NEW)  
   The automation that checks for linked issues only works on default branch PRs. Fixes false positives for v2-targeted contributions.

10. **[#38022 – Add `opencode-hypa` plugin](https://github.com/anomalyco/opencode/pull/38022)** (OPEN)  
    Documents a new community plugin that brings more capable file editing (undo, diff, confirm/deny each chunk) to the ecosystem.

## Feature Request Trends

- **Automatic model discovery** (#6231, #18011): Users consistently want OpenCode to auto-detect models from OpenAI-compatible providers rather than requiring manual configuration. Highest community support of any open feature.
- **Plan/Build mode restoration** (#37970, #38364): Multiple reports that the toggle between planning and building is broken or removed in v1.18.x. Community wants it back as a core workflow pillar.
- **Performance monitoring for tool calls** (#22144, #26220): Requests for execution timestamps, durations, and avoiding infinite loops after tool completion. Growing concern as tool-heavy workflows become common.
- **Portable / USB deployment** (#38391): A new request for a USB-bootable version of OpenCode for air-gapped environments, conferences, and sandboxed execution.
- **Quick-jump sidebar for user prompts** (#32165): A slim sidebar showing only user inputs to quickly revisit earlier instructions in long sessions.

## Developer Pain Points

1. **Subscription outage blocking all work** (#38218, #38293, #38368, #38358): The most acute issue today. Users who paid for opencode-go cannot use any model, generating multiple support tickets in multiple languages.
2. **CPU/memory waste while idle** (#19466, #36677): The tool burns significant resources during rate-limit waits and in long-lived server processes. Developers on expensive or battery-powered machines are frustrated.
3. **Infinite loops and hangs** (#26220, #38412): After tool calls or after several dialogue turns, the app becomes unresponsive, requiring a restart and losing context.
4. **UI regressions in v1.18.x** (#37970, #38364, #38350, #38416, #38419): The latest UI redesign removed the Plan/Build toggle, moved close buttons to easily-accidentally-close positions, and introduced performance slowdowns after conversations.
5. **Local server connection drops** (#38419): Desktop version loses connection to the local server mid-session (red indicator), requiring manual restart.
6. **Session/save issues** (#38358, #38411): "New session" button doesn't work for some users, and sessions don't sync across devices. Data loss complaints are increasing.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-23

## Today's Highlights
A major infrastructure push today saw fixes for provider retry abortability (#6980) and OpenRouter OAuth support (#6927) land concurrently. The community is rallying around foundational reliability issues: SDK retry sleep that ignores `AbortSignal` (#6911) and silent GitHub auto-logout (#6686) both saw active last-day updates. Several PRs also closed long-standing bugs, including a Windows extension path labeling fix (#6964) and crash log directory hardening (#6958).

## Releases
No new releases in the last 24 hours. Latest stable remains **v0.80.6** / **v0.80.7**.

## Hot Issues

1. **[#6911] OpenAI SDK retries sleep full Retry-After (days) and Escape cannot abort** — *CLOSED*. The SDK’s `setTimeout` sleep for HTTP 429 responses ignores `AbortSignal`, meaning a day-long retry cannot be cancelled. Community upvoted strongly. Fix landed in #6980.

2. **[#6686] Pi automatically logs out of GitHub** — *CLOSED [no-action]*. Despite a previous fix in #2725, users on v0.80.7 across both macOS and Linux still experience silent de-authentication. No maintainer action taken; frustration is visible.

3. **[#6768] Compaction using Copilot Enterprise not possible** — *OPEN*. Compaction fails with `421 Misdirected Request` on OpenAI and similar errors on Anthropic models. 8 👍 indicates many enterprise users affected. No resolution yet.

4. **[#6476] Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider** — *CLOSED*. Downgrading from v0.80.3 to v0.80.6 broke idle timeout for self-hosted vLLM setups, causing silent failures. Fixed in a later patch.

5. **[#6210] /scoped-models cannot select model ids containing brackets** — *OPEN [inprogress]*. Custom model IDs like `custom/bracketed-model[1m]` are parsed as regex bracket expressions. A maintainer has the `inprogress` label.

6. **[#6992] Transient OAuth refresh errors lose HTTP status before auto-retry** — *CLOSED*. Expired `github-copilot` credentials hit a 502 that wraps the original HTTP status in a `ModelsError`, obscuring the real cause. Minor but frustrating for debugging.

7. **[#6975] TUI startup benchmark always exits before entering interactive mode** — *CLOSED*. The profiling script `profile-coding-agent-node.mjs` fails on both Bun and Node. Quick community fix in #6976.

8. **[#6652] pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log, ignoring PI_CODING_AGENT_DIR** — *CLOSED*. Crash logs write to home directory even when agent dir is configured elsewhere. Fixed in #6958.

9. **[#6619] On Windows dependent extensions pulled in by an npm package mislabeled and show absolute path in banner** — *CLOSED*. npm-sourced sibling extensions display full absolute paths in the extension banner. Fixed via #6964 and #6680.

10. **[#6989] [P0] File mutation preconditions run before the per-file queue** — *CLOSED*. In parallel tool execution, `beforeToolCall` preconditions run for *all* sibling edits before any allowed edit begins, breaking dependency ordering. Critical reliability issue now fixed.

## Key PR Progress

1. **[#6980] fix(ai): make provider retries abortable** — *OPEN*. Replaces OpenAI and Anthropic SDK native retries with a custom helper that enforces max delay and respects `AbortSignal`. Direct fix for #6911.

2. **[#6927] Add native OpenRouter OAuth support** — *CLOSED*. Implements PKCE S256 flow with ephemeral localhost callback, timeout, and cancellation. Works for both text and image providers.

3. **[#6967] feat(coding-agent): expose session metadata to bash tools** — *CLOSED*. Exposes session file, provider, model, and reasoning level to subprocesses via env vars. Reduces extension boilerplate.

4. **[#6987] fix(tui): align grapheme widths with terminal cells** — *OPEN*. Addresses long-standing terminal rendering mess where grapheme clusters (emojis, wide chars) cause layout glitches. Author admits it’s a hard problem.

5. **[#6965] fix: isolate test environment** — *OPEN [inprogress]*. Runs test suite from an explicit allowlist, isolating home, temp, Git, npm, and XDG state. Includes path/ownership checks for temp cleanup.

6. **[#6881] feat(ai): use provider-reported cost when responses include it** — *OPEN [inprogress]*. When responses include billed cost (e.g., OpenAI `usage.cost`), uses it instead of catalog rates. Falls back to `calculateCost`.

7. **[#6984] feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream** — *CLOSED*. Fixes `ValidationException` for Claude models on Bedrock that require adaptive thinking format but aren't in the substring-match list.

8. **[#6916] feat(agent): add AgentHarness execution tools** — *CLOSED*. New abstraction for app-specific context and execution environments in tool execution. Foundation for richer extension capabilities.

9. **[#6960] feat(ai): add StepFun providers** — *CLOSED*. Four native providers for `models.dev`-sourced StepFun: China, Global, prepaid routing, and free tier.

10. **[#6955] handle openai websocket previous_response_not_found error** — *CLOSED*. Clears stale `previous_response` cache and reconnects on WebSocket errors, fixing a silent hang.

## Feature Request Trends

- **Provider OAuth & Auth UX**: Multiple requests for native OAuth flows (OpenRouter #6927, Anthropic #6979). Users want seamless login without API keys.
- **Provider Cost Transparency**: Growing call for provider-reported cost to replace catalog estimates (#6881, multiple related issues).
- **Extension API Expansion**: Frequent requests for structured approval primitives (#5954), per-block thinking labels (#6988), and richer session metadata (#6967).
- **Adaptive Thinking Control**: Users want `compat.forceAdaptiveThinking` exposed for Bedrock (#6986) and effort cycling before summaries (#6974).
- **Model Switching UX**: MRU-based model switching (#6982) as an alternative to alphabetical cycling.

## Developer Pain Points

- **Silent Failures & Regressions**: The `httpIdleTimeoutMs` regression (#6476) and GitHub auto-logout (#6686) both represent silent failures that erode trust. Community requests better testing for regression scenarios.
- **Self-Hosted / Enterprise Gaps**: Compaction failures on Copilot Enterprise (#6768) and missing OAuth retry info (#6992) highlight friction for enterprise and self-hosted users.
- **Windows Parity**: Extension path labeling (#6619) and temp directory handling (#6903) continue to need platform-specific care.
- **Concurrency Hazards**: Parallel tool precondition ordering (#6989) and orphaned extension dialog Promises (#6978) show the challenges of async tool execution in interactive TUI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

## Today's Highlights

The project is seeing significant CI/stability turbulence: a main-branch test suite failure (#7537) is blocking all PR checks, and the nightly release pipeline failed (#7549). On the positive side, a critical `enable_thinking` bug that broke `web_fetch` tools has been fixed via retry logic (#7534), and hardening continues on tool-output budgeting (#7306) and credential exposure in subprocesses (#7527). The team is also shipping a flurry of improvements to CLI update checks, VSCode Companion file picker, and session visualization proposals.

## Releases

**v0.0.0-benchmark-poc.20260722.1** (prerelease) — A temporary tag to validate the ECS benchmark pipeline (GitHub Actions → ECS worker → result publication). Not a product release.

## Hot Issues (10 selected)

1. [#7284 — `runSideQuery` forces `enable_thinking=false`, breaking TokenPlan endpoints](https://github.com/QwenLM/qwen-code/issues/7284) [CLOSED]  
   **Why it matters:** Every tool relying on side-queries (web_fetch, classifiers) was returning 400 errors on providers that require thinking enabled. Community reaction: immediate fix needed; 5 comments, resolved by #7534.

2. [#7306 — Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306) [OPEN]  
   **Why it matters:** Phase 1 of a major correctness push is complete (#7323, #7470 merged). Shared finalization and `persistedOutputFiles` tri-state docs landed. 4 comments, labeled need-discussion.

3. [#7449 — Enterprise external-memory integration profile proposal](https://github.com/QwenLM/qwen-code/issues/7449) [OPEN]  
   **Why it matters:** Proposes a provider-neutral spec for enterprise memory backends (vector DBs, knowledge graphs). Documentation-first approach with incremental compatibility tests. 4 comments, community discussing scope.

4. [#7404 — Update check timeout too short when loading long sessions](https://github.com/QwenLM/qwen-code/issues/7404) [CLOSED]  
   **Why it matters:** A UX regression: startup version check reliably fails when resuming large conversations. 4 comments, fixed shortly after.

5. [#7537 — Core test suite red on main: fork dispatch test never sees registry.complete](https://github.com/QwenLM/qwen-code/issues/7537) [CLOSED]  
   **Why it matters:** Every PR's CI is failing regardless of changes. P1 severity. 2 comments, quickly resolved.

6. [#7489 — VS Code Companion: file picker inserts @filename but image not attached](https://github.com/QwenLM/qwen-code/issues/7489) [OPEN]  
   **Why it matters:** Image attachment UX is broken — the model never receives the actual image content. 3 comments, needs owner.

7. [#7287 — Auto-memory MEMORY.md not registered in FileReadCache, write_file always rejected](https://github.com/QwenLM/qwen-code/issues/7287) [OPEN]  
   **Why it matters:** The memory system loads MEMORY.md into the system prompt but the model gets stuck on the first update because `checkPriorRead()` finds no prior read record. 3 comments.

8. [#7515 — Failed to check for updates (registry error) since v0.20.1](https://github.com/QwenLM/qwen-code/issues/7515) [OPEN]  
   **Why it matters:** Startup update check and `/update` command broken for users. Registry is reachable via curl. 2 comments, related to #7543.

9. [#7485 — TUI: large blank area between last message and input prompt after resume](https://github.com/QwenLM/qwen-code/issues/7485) [OPEN]  
   **Why it matters:** Visual regression in terminal UI after session resume wastes screen space. 2 comments.

10. [#7500 — `--open` uses stale port after EADDRINUSE fallback](https://github.com/QwenLM/qwen-code/issues/7500) [OPEN]  
    **Why it matters:** The `--open` flag launches the browser to the wrong port when the requested port is occupied. 2 comments, a PR is already open (#7501).

## Key PR Progress (10 selected)

1. [#7534 — fix(core): retry requests when providers require thinking](https://github.com/QwenLM/qwen-code/pull/7534) [OPEN]  
   Retries OpenAI-compatible requests once when the provider returns 400 for `enable_thinking: false`. Fixes the `web_fetch` breakage from #7284.

2. [#7501 — fix(cli): open the actual serve fallback port](https://github.com/QwenLM/qwen-code/pull/7501) [OPEN]  
   Prevents Express listen errors from entering the success path, so port fallback completes before the URL is used. Fixes #7500.

3. [#7531 — fix(core): close force-flag and checkout gaps in the AUTO destructive-git guard](https://github.com/QwenLM/qwen-code/pull/7531) [OPEN]  
   Widens `DESTRUCTIVE_GIT_PATTERNS` so `git clean` and `git checkout` are actually blocked in all spellings. Security hardening.

4. [#7512 — perf(startup): lazy-load Google GenAI SDK on first use](https://github.com/QwenLM/qwen-code/pull/7512) [OPEN]  
   Removes `@google/genai` from ACP bootstrap closure — a 17.24 MiB static import reduction effort. Uses local implementation for the small synchronous surface needed.

5. [#7490 — fix(autofix): retry a skipped-Prepare instead of stranding the PR terminal](https://github.com/QwenLM/qwen-code/pull/7490) [OPEN]  
   Prevents base/infra failures before the agent runs from permanently terminating healthy PRs. Retries instead of going terminal.

6. [#7530 — refactor(core): tier prompt fragments by cache stability](https://github.com/QwenLM/qwen-code/pull/7530) [OPEN]  
   Every injected prompt fragment gets explicit marker, wire role, and cache-stability tier. Renders in stable→context→volatile order for better caching.

7. [#7542 — feat(cli): add version upgrade notices](https://github.com/QwenLM/qwen-code/pull/7542) [OPEN]  
   Lightweight "What's New" startup notice for releases with curated highlights, shown once per supported version.

8. [#7527 — fix(core): strip daemon secrets from hook and tool-discovery child env](https://github.com/QwenLM/qwen-code/pull/7527) [OPEN]  
   Follow-up to #7256 — applies `sanitizeChildEnv()` to hooks and tool-discovery processes. Prevents credential leakage (fixes #6601).

9. [#7388 — feat(daemon): add explicit channel delivery](https://github.com/QwenLM/qwen-code/pull/7388) [OPEN]  
   Adds a Channel delivery contract for daemon notifications, agent prompt finals, and scheduled-task finals. Authenticated routing to matching workers.

10. [#7517 — feat(core): add Goal v3 state protocol](https://github.com/QwenLM/qwen-code/pull/7517) [OPEN]  
    Introduces versioned goal lifecycle state with optimistic-concurrency controls, deterministic transitions, turn-boundary persistence, and legacy migration.

## Feature Request Trends

- **Session context & execution mode selectors** — Multiple requests for "Start In" selectors (#6701) and git mode selectors (#7471) to let users choose local vs. worktree execution context.
- **Enterprise memory integration** — Proposal for provider-neutral external memory profiles (vector DB, knowledge graph) with documentation-first approach (#7449).
- **Plan DAG visualization** — Request to render Todo plans as dependency graphs linked to live subagent executions (#7525).
- **Better update/cleanup lifecycle** — Requests for managed npm update artifact cleanup (#7524) and version upgrade notices (#7542).
- **VS Code Companion improvements** — Better file picker attachment behavior (#7489).

## Developer Pain Points

- **CI instability** — Main-branch test suite failures (#7537) and nightly release failures (#7549) are blocking development velocity.
- **Update check regressions** — `/update` and startup version check broken in v0.20.1 for two different reasons (#7515, #7543), affecting all users.
- **`enable_thinking` tool breakage** — Side-query tools completely broken for providers requiring thinking, causing cascading failures in `web_fetch` (#7284, #7440).
- **Credential exposure risks** — Subprocess environment inheritance leaks API keys and tokens (#6601, #7527), requiring repeated sanitization patches.
- **Edge case bugs** — Inconsistent UTC/local date handling in `/insight` (#6835), auto-memory registration gaps (#7287), and port fallback issues (#7500).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-23

## Today's Highlights

The CodeWhale team is sprinting hard toward the **v0.9.1 release**, with a coordinated wave of 15+ merged PRs today focusing on Work chrome simplification, skill pack bundling, theme polishing, and security gates. A major thread has emerged around **context diet optimization for v0.9.2**, with 7+ new issues proposing aggressive prompt/schema trimming to reduce token waste and improve cross-model portability.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#2870 — EPIC: staged command-boundary refactor for #2791](https://github.com/Hmbown/CodeWhale/issues/2870)** (17 comments)
   This long-running epic tracks the decomposition of a massive command-boundary refactor into mergeable layers. High community interest as it touches the core routing architecture.

2. **[#4227 — feat: help JayBeest map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)** (12 comments)
   A workflow/skill to automate dev environment setup aligned with `main`, motivated by the project's 10+ PR/day velocity. Community sees this as critical for onboarding new contributors.

3. **[#2889 — Work Agent rows: real sub-agent details](https://github.com/Hmbown/CodeWhale/issues/2889)** (8 comments, closed)
   Restored from a deleted issue, this design discussion for sidebar Work/Agents UX generated sustained community input before being resolved in today's release sprint.

4. **[#4085 — Cannot read/write files under macOS File Provider paths](https://github.com/Hmbown/CodeWhale/issues/4085)** (4 comments)
   A sandbox-adjacent issue where Dropbox CloudStorage paths are inaccessible. The reporter notes the binary has zero entitlements, pointing to a filesystem-level gap rather than sandbox policy.

5. **[#4684 — danger-full-access does not disable tools-layer workspace boundary check](https://github.com/Hmbown/CodeWhale/issues/4684)** (2 comments)
   `danger-full-access` mode claims to fully disable sandboxing but leaves a tools-layer boundary check active, breaking global skill access. Undocumented limitation frustrating power users.

6. **[#4685 — CodeWhaleSetup.exe overwrites user PATH on Windows 10](https://github.com/Hmbown/CodeWhale/issues/4685)** (1 comment)
   The Windows installer replaces the user PATH variable instead of appending, destroying all existing entries. A release-blocker for Windows adoption.

7. **[#4683 — Wrong deepseek completions URL / flaky failure](https://github.com/Hmbown/CodeWhale/issues/4683)** (1 comment)
   Intermittent "error sending request for url" against `api.deepseek.com/v1/chat/completions` after long usage, suggesting a connection management or DNS issue.

8. **[#4682 — Custom provider causes launch failure](https://github.com/Hmbown/CodeWhale/issues/4682)** (1 comment)
   Setting a custom model provider name causes a fresh install of CodeWhale to fail to launch. Critical for users needing custom model backends.

9. **[#4681 — `<turn_meta>` blocks displayed when reopening a session](https://github.com/Hmbown/CodeWhale/issues/4681)** (1 comment)
   Hidden metadata blocks become visible after session restart, indicating a serialization/deserialization bug in conversation state.

10. **[#4704 — Context diet: minimize every model-facing prompt, schema, and payload](https://github.com/Hmbown/CodeWhale/issues/4704)** (0 comments, parent)
    The umbrella issue for v0.9.2's most ambitious optimization, targeting stable prompt consolidation, tool description shortening, duplicate context removal, and per-model ablation tests. Has 6+ child issues tracking specific workstreams.

## Key PR Progress

1. **[#4679 — Unified /skills manager with audit and owned mutations](https://github.com/Hmbown/CodeWhale/pull/4679)** (merged)
   Delivers the single `/skills` command for inventory, install, update, remove, and trust across project and global roots. Replaces the fragmented `/skill` family.

2. **[#4695 — Default CodeWhale skill pack (bundled v5)](https://github.com/Hmbown/CodeWhale/pull/4695)** (merged)
   Ships v0.9.1's end-user skill catalog: interview, plan, implement, debug, test, review, security-review, verify, research, and refactor. Comparable to Kimi Code/Claude Code workflows.

3. **[#4675 — Integrate CodeWhale v0.9.1 runtime and release surface](https://github.com/Hmbown/CodeWhale/pull/4675)** (merged)
   The main integration branch bringing together runtime simplifications, empty-Work fixes, and the final TUI color grammar (cool mode colors, warm permission accents).

4. **[#4711 — Focus v0.9.1 chrome on todos and agents](https://github.com/Hmbown/CodeWhale/pull/4711)** (merged)
   Replaces the generic Work strip with a resizable To-do + Sub-agent bar, hiding coordination bookkeeping and adding draggable dividers.

5. **[#4696 — Ship staged /uwu theme](https://github.com/Hmbown/CodeWhale/pull/4696)** (merged)
   Ships the community-coded **uwu** theme with aliases `owo` and `kawaii`, including a blush whale mark with sparkle in empty state.

6. **[#4694 — Fail closed on K3 model-ID cross-pairings](https://github.com/Hmbown/CodeWhale/pull/4694)** (merged)
   Fixes a model routing bug where Kimi Code and Moonshot endpoints accepted each others' model IDs, causing silent failures.

7. **[#4714 — Patch npm lockfiles for Dependabot alerts](https://github.com/Hmbown/CodeWhale/pull/4714)** (open)
   Applies `npm audit fix` across workspaces to resolve 17 open alerts (7 high, 10 moderate). Critical for the v0.9.1 security gate.

8. **[#4686 — Add China/Token Plan provider routes for minimaxi.com](https://github.com/Hmbown/CodeWhale/pull/4686)** (open)
   Adds `minimax-cn` and `minimax-anthropic-cn` identifiers for Chinese users of the MiniMax API, supporting both OpenAI and Anthropic protocol routes.

9. **[#4693 — Work summary lifecycle and top-area hierarchy](https://github.com/Hmbown/CodeWhale/pull/4693)** (merged)
   Fixes three v0.9.1 release blockers: recent Work summaries expire after 4s, actionable titles replace generic ones, and top-area hierarchy is cleaned up.

10. **[#4087 — Split config and executor modules in hooks.rs](https://github.com/Hmbown/CodeWhale/pull/4087)** (open, v0.9.3)
    A structural refactor moving hook config definitions into `hooks/config.rs`, cleaning up a large file for easier policy reviews.

## Feature Request Trends

- **Unified skill management**: Users want a single `/skills` command for discovery, audit, install, update, and trust across project and global roots — now delivered in #4679.
- **Context token efficiency**: Strong demand for reducing the model-facing prompt from ~29 KB (before project context) to a leaner, deduplicated baseline. 7+ issues in the "context diet" family (#4704–#4710).
- **Theme-native chrome**: Requests for all UI elements (composer rails, permission lanes) to respect the active theme instead of falling back to global palette constants.
- **Resizable TUI components**: Users want draggable dividers for Work strips, skill managers, and sidebars with persisted dimensions.
- **Provider extensibility**: New provider routes for Chinese endpoints (MiniMax CN, TelecomJS) and the feature request flag for cross-model-compatible context design indicate growing demand for non-Western model support.

## Developer Pain Points

- **Windows installer corruption**: The CodeWhaleSetup.exe overwriting user PATH (#4685) is a critical DX blocker for Windows users, breaking other tools on install.
- **macOS File Provider sandbox gap**: CloudStorage paths (Dropbox, etc.) are inaccessible despite zero entitlements (#4085), forcing users to relocate their projects.
- **Incomplete sandbox modes**: `danger-full-access` doesn't fully disable boundary checks at the tools layer (#4684), surprising users who expect complete access.
- **Custom provider bootstrap failures**: Setting a non-standard provider name on a fresh install causes a hard crash before any work can be done (#4682).
- **Session serialization bugs**: Metadata blocks leaking on session reopen (#4681) erodes trust in persistence, especially for long-running investigative work.
- **Model routing fragility**: DeepSeek URL flakiness (#4683) and K3 cross-pairings (#4687, fixed) show the provider abstraction layer needs more robust retry and validation logic.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*