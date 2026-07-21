# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 01:27 UTC | Tools covered: 10

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

# Cross-Tool Ecosystem Comparison Report
**Date:** 2026-07-21

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues to mature rapidly, with seven major tools showing distinct lifecycles from hypergrowth (Claude Code, Gemini CLI) to stabilization (OpenCode, GitHub Copilot CLI) to pre-release sprints (DeepSeek TUI). Today's digest reveals an ecosystem grappling with the consequences of rapid adoption: sandboxing regressions, runaway cost incidents, and session reliability issues dominate community discourse across all tools. A clear pattern emerges of tools converging on agent orchestration capabilities while struggling with the operational complexity of multi-model, multi-provider deployments. The most advanced tools (Claude Code, Qwen Code) are shipping agent workflow features, while newer entrants (Grok Build, DeepSeek TUI) focus on core stability and platform parity.

---

## 2. Activity Comparison

| Tool | New Issues (24h) | Open PRs (24h) | Release Status | Key Theme |
|---|---|---|---|---|
| **Claude Code** | 10+ (hot) | 7 PRs | v2.1.216 (patch) | Sandbox regression, cost control |
| **OpenAI Codex** | 10 | 10 PRs (all closed) | rust-v0.145.0-alpha.25 | Rate-limit crisis, Windows stability |
| **Gemini CLI** | 10 | 10 PRs | v0.52.0-nightly | Agent reliability, security hardening |
| **GitHub Copilot CLI** | 10 | 0 PRs | v1.0.73 (patch) | CAPI limits, sub-agent dispatch |
| **Kimi Code CLI** | 6 | 3 PRs | No release | Windows migration, context compaction |
| **OpenCode** | 10 | 10 PRs | v1.18.4 (patch) | Desktop crashes, Bun compatibility |
| **Pi** | 10 | 10 PRs | No release | Cost transparency, provider config |
| **Qwen Code** | 10 | 10 PRs | v0.20.0-nightly | Autofix improvements, TokenPlan bugs |
| **DeepSeek TUI** | 10 | 10 PRs merged | Pre-v0.9.1 sprint | Permission contracts, sub-agent isolation |
| **Grok Build** | 0 | 0 | No activity | — |

**Notable:** DeepSeek TUI shows the highest velocity (26 issues closed, 12 PRs merged in 24h) as it approaches a major release. GitHub Copilot CLI had zero PR activity despite 10 new issues — a concerning signal for community responsiveness.

---

## 3. Shared Feature Directions

### Agent Orchestration & Cost Control
- **Multi-model cost governance** (Claude Code #75055, OpenAI Codex #28879, Kimi Code #2525, Pi #6881): Runaway agent spawns and rate-limit spikes are the #1 shared pain point. Users across all platforms demand per-agent budget caps, model override locks, and transparent billing.

### Session Portability & Reliability
- **Chat history/data loss** (Claude Code #62272, OpenAI Codex #24287, Kimi Code #2523, OpenCode #23248): Session corruption, orphaned histories on upgrade, and "ghost task" bugs appear across 4+ tools. Users expect sessions to survive restarts and directory moves.

### Permission & Sandbox Model Maturation
- **Granular sandbox controls** (Claude Code v2.1.216, OpenAI Codex #34398, Gemini CLI #28470, DeepSeek TUI #4412): Tools are converging on typed permission decisions (Ask/Auto-Review/Full Access) and per-environment security profiles. The Claude Code `--cap-drop ALL` regression is a cautionary tale.

### Platform Parity (Windows/Linux)
- **Windows performance gaps** (OpenAI Codex #20214, Kimi Code #2521, DeepSeek TUI #4605, Qwen Code #7056): Windows users face UI freezes, clipboard failures, and process leaks across tools. Linux desktop demand is high (OpenAI Codex #11023, 801 👍).

### Sub-Agent & Skill Composition
- **Skill-to-skill invocation broken** (Claude Code #79023, Gemini CLI #21968, GitHub Copilot CLI #4185): Built-in skills refusing calls from other skills, sub-agents ignoring custom instructions — automation workflows are breaking as agent ecosystems grow.

### Terminal UX Polish
- **TUI scroll/output management** (Claude Code #61021, DeepSeek TUI #4603, Kimi Code #2507): Long outputs, truncated diffs, and scroll-anchoring bugs are universal pain points as tools generate increasingly lengthy responses.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | DeepSeek TUI |
|---|---|---|---|---|---|
| **Primary user** | Power devs, enterprise teams | General developers | Google ecosystem devs | GitHub-centric teams | FOSS/tinkerers |
| **Agent approach** | Skill-based, multi-agent Cowork | Single-agent, rate-limited | Sub-agent heavy, browser agent | Task agents, plan-mode | Fleet/role-based agents |
| **Sandboxing** | Granular (regression-prone) | Per-environment profiles | Workspace trust + OS sandbox | O (sandbox) environment | Permission contracts (in dev) |
| **Cost model** | Opaque (recent backlash) | Rate-limit caps (crisis) | Model-tier based | GitHub Copilot billing | No built-in cost tracking |
| **Platform focus** | macOS (priority), Linux | macOS, Windows (weak) | Linux (native strength) | Cross-platform, TUI | Unix-like (Windows gaps) |
| **Community health** | Mature, high expectations | Growing pains, loud minority | Active, Google-backed | Stable, slower iteration | High-velocity sprint |

**Key Observations:**
- **Claude Code** leads in feature velocity but pays the price in regressions (sandbox, Cowork, skill composition).
- **OpenAI Codex** has the worst user sentiment around pricing (rate-limit costs 10–20× increase is a crisis-level issue).
- **Gemini CLI** is investing in automated issue-to-PR infrastructure — a unique focus on self-healing codebase.
- **DeepSeek TUI** is most architecturally ambitious with its permission contract model, but still pre-stable.
- **Pi** stands out for provider-agnostic cost reporting and extension API design — a differentiator in the multi-provider world.

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, High Activity)
- **Claude Code**: Highest raw activity and feature velocity. 668 👍 on multi-account request indicates strong enterprise pull. However, regressions are piling up faster than fixes — a "growth is eating stability" signal.
- **DeepSeek TUI**: 26 issues closed in 24h, pre-v0.9.1 sprint shows disciplined release engineering. Most architecturally focused community — deep discussions on permission models and execution contracts.
- **Qwen Code**: Strong autofix pipeline improvements, active community PRs on Web Shell and TokenPlan bugs. Growing quickly with Chinese developer ecosystem.

### Stable Growth (Mature, Slower Iteration)
- **OpenCode**: Steady patch releases, strong contributor culture (high-quality PRs on Windows/Nix). Community focuses on UX polish and plugin API expansion rather than new features.
- **Pi**: Provider-agnostic approach resonates with multi-model users. Extension API design and cost transparency are unique value propositions. Slower release cadence but thoughtful engineering.

### Challenges Ahead (Critical Issues Unresolved)
- **OpenAI Codex**: Rate-limit crisis (#28879, 358 👍) is a trust-threatening issue. 801 👍 for Linux desktop shows unmet demand. Windows stability issues (4 concurrent bugs) suggest platform neglect.
- **GitHub Copilot CLI**: Zero PR activity with 10 new issues is concerning. The CAPI 5 MB body limit (#4183) and poison-pill issues (#3747) are blockers with no fix in sight.
- **Kimi Code CLI**: Smallest community (6 issues). Windows migration breakage and 429 lockouts suggest growing pains of a tool expanding beyond initial Chinese-language user base.

---

## 6. Trend Signals

1. **The Sandboxing Paradox**: As tools add security layers (Claude Code `--cap-drop`, Gemini workspace trust, DeepSeek permission contracts), regressions are increasing. The industry is learning that sandboxing cannot be bolted on — it must be designed from the ground up.

2. **Cost Transparency Is the New Moat**: Users are willing to pay for value but resent opaque billing. OpenAI Codex's rate-limit crisis and Claude Code's agent cost blowups are driving demand for provider-reported billing (Pi #6881) and per-agent budgets (Claude Code #75055). Tools that ship cost observability will win enterprise trust.

3. **Windows Neglect Is Becoming a Barrier to Adoption**: 4 of 10 tools have significant Windows-specific bugs. As AI CLI tools move from early-adopter developers (predominantly macOS/Linux) to broader enterprise teams (Windows majority), platform parity becomes critical. DeepSeek TUI's HarmonyOS support hints at further platform fragmentation.

4. **Agent Composition Is the Next Frontier — and the Next Pain Point**: Skill-to-skill invocation, sub-agent context inheritance, and child-agent budgets are broken across 3+ tools. The industry is discovering that multi-agent systems are fundamentally harder to build than single-agent tools.

5. **TUI vs. Desktop Tensions**: Claude Code and OpenAI Codex invest heavily in Desktop UIs (Cowork, Projects view), while Gemini CLI and DeepSeek TUI stay terminal-first. The TUI crowd is demanding programmatic control (GitHub Copilot CLI #4180), while Desktop users want session portability and offline resilience. No tool has fully solved the hybrid model.

6. **CI/CD Integration Remains Immature**: Headless mode hangs (Claude Code #79610), dead sockets, and fork subagent limitations (Qwen Code #7348) show that AI CLI tools are still primarily interactive tools, not pipeline components. The tools that nail reliable CI/CD integration will unlock a new class of use cases.

7. **Community Contributions Are Accelerating**: Across all tools, community-submitted PRs are fixing real bugs — Kimi Code's StrReplaceFile fix (#2524), DeepSeek TUI's Moonshot tool sanitization, OpenCode's Windows plugin resolution. The most successful tools are those with clear contribution pathways and responsive maintainers.

---

**Bottom Line for Decision-Makers:** If you need stability today, **OpenCode** and **Pi** offer the most mature, less-regression-prone experience. For cutting-edge agent workflows, **Claude Code** leads but expect sandbox and stability issues. **DeepSeek TUI** is worth watching for its architectural clarity around agent permissions — it could set the standard for safe multi-agent systems. **OpenAI Codex** is experiencing a trust crisis that warrants caution before committing workflows to it.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the provided data snapshot.

---

### Claude Code Skills: Community Highlights Report (Data as of 2026-07-21)

#### 1. Top Skills Ranking (by PR Discussion Activity)

The following Skills proposals generated the most community discussion. The list is dominated by stability and core infrastructure work, alongside new feature proposals.

1.  **`fix(skill-creator): run_eval.py always reports 0% recall` (#1298)**
    - **Functionality:** Fixes the core `skill-creator` evaluation loop (`run_eval.py`). The bug causes `recall=0%` on every test, making the description optimization process optimize against noise.
    - **Discussion:** This is the most critical fix in the ecosystem, directly referenced in 10+ independent issue reproductions. It addresses a multi-systemic failure affecting `run_loop.py` and `improve_description.py`.
    - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/1298)

2.  **`Add document-typography skill` (#514)**
    - **Functionality:** A quality-control skill for generated documents, preventing common issues like orphaned words, widow paragraphs, and numbering misalignment.
    - **Discussion:** Addresses a universal pain point for users generating long-form documents. The skill promises to fix aesthetic issues "every document Claude generates."
    - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/514)

3.  **`fix(docx): prevent tracked change w:id collision with existing bookmarks` (#541)**
    - **Functionality:** Fixes document corruption in the DOCX skill that occurs when adding tracked changes to documents with existing OOXML bookmarks, caused by an ID collision in the shared `w:id` space.
    - **Discussion:** A targeted fix for a critical corruption bug in a high-value enterprise skill. The discussion focused on the technical root cause in OOXML schematics.
    - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/541)

4.  **`Add ODT skill` (#486)**
    - **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods), enabling full compatibility with LibreOffice and other open-source office suites.
    - **Discussion:** A highly requested integration for the open-source community, expanding beyond the Microsoft Office-centric DOCX skill.
    - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/486)

5.  **`Improve frontend-design skill clarity and actionability` (#210)**
    - **Functionality:** A major revision to the existing `frontend-design` skill to ensure instructions are specific, coherent, and actionable within a single conversation.
    - **Discussion:** The community is actively refining existing skills, focusing on deterministic guidance over verbose, human-readable documentation.
    - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/210)

6.  **`Add testing-patterns skill` (#723)**
    - **Functionality:** A comprehensive skill covering the full testing stack, including philosophy (Testing Trophy), unit testing patterns, React component testing, and mocking.
    - **Discussion:** Targets a core developer workflow. The skill aims to enforce consistent, high-quality testing practices across codebases.
    - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/723)

#### 2. Community Demand Trends (from Issues)

Analysis of the most-active Issues reveals three distinct pockets of community demand:

- **Skill-Creator Reliability & Stability:** Issues #556, #1169, and #1061 are direct calls to fix the `skill-creator` pipeline. The community is demanding a stable, cross-platform (Windows, macOS) foundation for developing new skills. The `recall=0%` bug is the single biggest blocker to skill development.
- **Ecosystem Governance & Trust:** Issue #492 highlights a critical security concern: community skills hosted under the `anthropic/` namespace create a trust boundary vulnerability. This is the most-commented issue, indicating strong demand for official vs. community skill labeling or a verified marketplace.
- **Platform Interoperability:** Issues **#16** (Expose Skills as MCPs) and **#29** (Usage with Bedrock) show a persistent desire to use Skills outside the Claude Code terminal—either as standard MCP servers or with cloud-based models.
- **Enterprise Workflows:** Issue #228 requests organizational skill sharing, while Issue #1175 raises security and context-window management concerns for processing SharePoint Online (SPO) documents.

| Demand Trend | Primary Issue(s) | Sentiment |
| :--- | :--- | :--- |
| **Skill-Creator Stability** | #556, #1169, #1061 | Frustration / Blocked |
| **Ecosystem Trust & Security** | #492 | Concern / Demand |
| **MCP / Platform Interop** | #16, #29 | Feature Request |
| **Enterprise Deployment** | #228, #1175 | Aspiration / Caution |

#### 3. High-Potential Pending Skills (Likely to Merge Soon)

These PRs are actively discussed, well-scoped, and address clear gaps in the ecosystem:

1.  **`Add self-audit skill` (#1367):** A "Reasoning Quality Gate" skill that mechanically verifies output files and then runs a four-dimension reasoning audit before delivery. Universal and model-agnostic. [View PR](https://github.com/anthropics/skills/pull/1367)
2.  **`Add pyxel skill` (#525):** Integrates the Pyxel retro game engine via its MCP server. A well-maintained, specific creative tool that lowers the barrier to game creation. [View PR](https://github.com/anthropics/skills/pull/525)
3.  **`Add color-expert skill` (#1302):** Provides deep color-system expertise (ISCC-NBS, Munsell, OKLCH) with practical guidance for design and data visualization. [View PR](https://github.com/anthropics/skills/pull/1302)

#### 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a stable, secure, and cross-platform foundation for the Skill development pipeline, followed closely by skills that enforce output quality (typography, auditing) and expand document format support (ODT).**

---

# Claude Code Community Digest — 2026-07-21

## Today's Highlights

A new patch release (v2.1.216) ships with a critical quadratic-time slowdown fix for long sessions and introduces granular sandbox control, but a severe regression in the same build breaks Bash on root installs via a `--cap-drop ALL` default. Community chatter remains dominated by long-standing demands for multi-account profile switching (668 👍), while a flurry of fresh bugs around Cowork, model billing, and skill composition suggests growing pains in the agent ecosystem.

## Releases

**v2.1.216** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)
- **New:** `sandbox.filesystem.disabled` setting — lets users skip filesystem isolation while retaining network egress control, useful for workflows that need local file access but still want outbound restrictions.
- **Fix:** Quadratic message normalization cost in long sessions (O(n²) → O(n)) — resolves multi-second stalls and slow resume times that plagued users with hundreds of conversation turns.
- **Regression alert:** The accompanying `--cap-drop ALL` default breaks Bash on root Linux installs (`write /proc/self/uid_map: Operation not permitted`). See Issue [#79606](https://github.com/anthropics/claude-code/issues/79606).

## Hot Issues

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435) — Multi-account profile switching (668 👍, 148 comments)**  
   The top-voted feature request by a wide margin. Users want to manage multiple Claude accounts inside the Desktop app and switch profiles without logging out. High demand from power users and teams sharing a machine.

2. **[#28125](https://github.com/anthropics/claude-code/issues/28125) — Cowork can't add private GitHub Marketplace apps (36 comments)**  
   A platform bug on macOS blocking marketplace integration for private repos. Moderate traction but significant frustration given Cowork's centrality to the Desktop experience.

3. **[#23626](https://github.com/anthropics/claude-code/issues/23626) — Diff comparison against non-main branches (95 👍, 33 comments)**  
   Popular enhancement request: Claude Code's diff view is fixed to `main`, but many teams use `develop`, `next`, or staging branches. Requesting a configurable base branch.

4. **[#62272](https://github.com/anthropics/claude-code/issues/62272) — Chat JSONLs deleted despite high `cleanupPeriodDays` (18 comments)**  
   Data-loss bug: chat histories in `~/.claude/projects/` are wiped on updates/restarts regardless of retention settings. Community recovery script published, but root cause unresolved.

5. **[#61021](https://github.com/anthropics/claude-code/issues/61021) — Text selection broken in VS Code terminal (11 comments)**  
   Recent regression: selecting and copying text in the VS Code terminal fails when Claude Code is running. Disrupts basic copy-paste workflows.

6. **[#49790](https://github.com/anthropics/claude-code/issues/49790) — SSH remote sessions should survive client disconnect (29 👍, 10 comments)**  
   Desktop SSH sessions terminate the remote Claude Code process on client disconnect. Users want reconnect/resume for long-running remote scripts.

7. **[#69829](https://github.com/anthropics/claude-code/issues/69829) — Random "hello" text insertions under high agent load (CLOSED)**  
   Bizarre bug: >20 concurrent agents on macOS causes random "hello" string insertions in the harness. Closed, but root cause and fix are not publicly documented — may resurface at scale.

8. **[#79023](https://github.com/anthropics/claude-code/issues/79023) — `/code-review` skill broken when invoked from custom skills (9 👍)**  
   Regression in v2.1.215: the built-in `code-review` skill refuses invocation by other skills due to `disable-model-invocation`, breaking automated PR workflows.

9. **[#75055](https://github.com/anthropics/claude-code/issues/75055) — Workflow agents inherit session model with no override**  
   `agent()` spawns bypass model override environment variables and hooks. One deep-research workflow accidentally launched 84 agents on expensive Fable 5. Cost-control nightmare.

10. **[#79606](https://github.com/anthropics/claude-code/issues/79606) — v2.1.216 sandbox regression: `--cap-drop ALL` breaks root Bash (NEW)**  
    Hot-off-the-press: today's release breaks all Bash operations on root-installed systems. The new default capability drop prevents writing `/proc/self/uid_map`.

## Key PR Progress

1. **[#79387](https://github.com/anthropics/claude-code/pull/79387) — Better error message for label script**  
   `edit-issue-labels.sh` now prints a clear stderr message when called without label arguments instead of silently exiting code 1.

2. **[#66650](https://github.com/anthropics/claude-code/pull/66650) — Consistent author name in pr-review-toolkit (CLOSED)**  
   Corrects the plugin manifest author from "Daisy" to "Daisy Hollman" for consistency with other Anthropic plugins in the repo.

3. **[#74722](https://github.com/anthropics/claude-code/pull/74722) — Conventional Branch naming in `/commit-push-pr`**  
   Adds an optional `conventional` argument that auto-names branches per Conventional Branch 1.0.0 spec (`feature/`, `bugfix/`, `hotfix/`, etc.), inferred from the diff.

4. **[#79385](https://github.com/anthropics/claude-code/pull/79385) — Honor any user's thumbs-down, not just author's**  
   Auto-close-duplicates bot was ignoring thumbs-down reactions from non-authors, contradicting its own UI text. Fix aligns behavior with promise.

5. **[#78532](https://github.com/anthropics/claude-code/pull/78532) — GCP gateway: PG16 Cloud SQL fix + optional internal ALB**  
   Two fixes for the GCP Terraform example: PG16 instances now require the `ENTERPRISE_PLUS` edition (shared-core tiers rejected), plus an optional internal ALB for private networking.

6. **[#1](https://github.com/anthropics/claude-code/pull/1) — Create SECURITY.md (CLOSED)**  
   Initial security policy document, merged long ago but still the repo's oldest open/closed PR.

7. **(PR trends from Issues)** — Several bugs filed today (e.g., [#79610](https://github.com/anthropics/claude-code/issues/79610), [#79608](https://github.com/anthropics/claude-code/issues/79608), [#79602](https://github.com/anthropics/claude-code/issues/79602)) lack accompanying PRs yet, suggesting the team is still triaging the v2.1.216 fallout.

## Feature Request Trends

1. **Multi-account & profile management** — The #1 request overall. Users want multiple Claude accounts in Desktop, easy profile switching, and per-profile configuration. (↗️ from prior weeks, likely tied to enterprise/team usage growth.)

2. **SSH remote session persistence** — Recurring theme: Desktop SSH should detach from the client process and allow reconnection, like tmux/screen. Essential for long-running remote tasks.

3. **Diff comparison flexibility** — Users want to compare against any branch, not just `main`. Request likely related to trunk-based vs. GitFlow workflows.

4. **TTS / voice mode for remote sessions** — Accessibility request: text-to-speech for responses plus voice input during Remote Control sessions.

5. **Better agent cost controls** — Multiple requests (e.g., [#75055](https://github.com/anthropics/claude-code/issues/75055), [#79341](https://github.com/anthropics/claude-code/issues/79341)) for model override mechanisms in workflows, subagent billing transparency, and protection against runaway agent spawns.

## Developer Pain Points

| Pain Point | Related Issues | Impact |
|---|---|---|
| **Sandbox regressions** | [#79606](https://github.com/anthropics/claude-code/issues/79606) | Today's `--cap-drop ALL` default breaks all root installs — an immediate blocker for anyone running Claude Code on Linux as root (CI, Docker, etc.) |
| **Data loss** | [#62272](https://github.com/anthropics/claude-code/issues/62272), [#78273](https://github.com/anthropics/claude-code/issues/78273) | Chat histories deleted on restart; file overwrite without confirmation. Trust-eroding bugs with no fix in sight. |
| **VS Code integration regressions** | [#61021](https://github.com/anthropics/claude-code/issues/61021), [#79358](https://github.com/anthropics/claude-code/issues/79358) | Text selection and CI auto-fix checkboxes silently broken on Windows and macOS. |
| **Cowork instability** | [#28125](https://github.com/anthropics/claude-code/issues/28125), [#72504](https://github.com/anthropics/claude-code/issues/72504) | Cowork tab not initializing, private marketplace broken. Core feature with multiple concurrent regressions. |
| **Skill composition broken** | [#79023](https://github.com/anthropics/claude-code/issues/79023), [#79560](https://github.com/anthropics/claude-code/issues/79560) | Built-in skills now refuse invocation from other skills, breaking multi-step automation workflows. |
| **Billing confusion** | [#79341](https://github.com/anthropics/claude-code/issues/79341), [#79602](https://github.com/anthropics/claude-code/issues/79602) | Max plan users forced to usage credits; OAuth tokens silently override subscriptions. Silent cost escalations. |
| **Headless / CI reliability** | [#79610](https://github.com/anthropics/claude-code/issues/79610) | `claude -p` hangs forever on dead sockets with no timeout. Breaks scheduled/automated usage. |

---

*Generated 2026-07-21 from github.com/anthropics/claude-code community data.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-21

## Today's Highlights

Rate-limit cost spikes remain the most explosive community issue, with a single bug report amassing 208 comments and 358 reactions as users report 10–20× budget drain since mid-June. The team shipped infrastructure improvements today including per-environment permission profiles, Windows sandboxing support in the exec server, and proxy route resolution hardening. Linux desktop app demand continues to grow (801 👍) but remains unaddressed.

## Releases

- **rust-v0.145.0-alpha.25** (0.145.0-alpha.25) — Minor alpha release; no detailed changelog provided.  
  [Release link](https://github.com/openai/codex/releases)

## Hot Issues

1. **#28879 [BUG] Rate-limit cost per token jumped ~10–20x since June 16**  
   *Comment count: 208 | 👍: 358*  
   Plus-plan users report draining their 5-hour budget in 2–3 prompts on `gpt-5.5` vs. 20+ previously. Token-level rate-limit metadata confirms a 10–20× increase. This is the single most impactful unresolved regression affecting paid users.  
   [Issue #28879](https://github.com/openai/codex/issues/28879)

2. **#11023 [ENHANCEMENT] Codex desktop app for Linux**  
   *Comment count: 181 | 👍: 801*  
   The top-voted feature request. Users cite macOS power consumption issues (#10432) and desire native Linux support for development workflows. No official response from OpenAI.  
   [Issue #11023](https://github.com/openai/codex/issues/11023)

3. **#20214 [BUG] Windows 11 app freezes/stutters despite sufficient resources**  
   *Comment count: 60 | 👍: 68*  
   Windows users report frequent UI hangs on high-end hardware. Multiple similar reports (#26401, #33711, #34305) suggest a systemic Windows rendering or sandbox issue.  
   [Issue #20214](https://github.com/openai/codex/issues/20214)

4. **#13733 [BUG] Background process polling wastes tokens**  
   *Comment count: 31 | 👍: 29*  
   Each `write_stdin` poll triggers a full API turn with complete conversation history. Users running long builds (cargo, tests) burn excessive credits on polling overhead.  
   [Issue #13733](https://github.com/openai/codex/issues/13733)

5. **#31836 [BUG] Projects Sort By "Last updated" doesn't sort projects**  
   *Comment count: 23 | 👍: 26*  
   macOS users report Sort By control accepts input but produces no observable ordering change in the Projects view. Basic UX functionality broken.  
   [Issue #31836](https://github.com/openai/codex/issues/31836)

6. **#24287 [BUG] Desktop stuck in "Thinking" with Stop button failing**  
   *Comment count: 16 | 👍: 5*  
   Pro-tier user on M1 Max reports prompts accepted but UI freezes permanently; the turn can become invisible after restart. Sessions effectively lost.  
   [Issue #24287](https://github.com/openai/codex/issues/24287)

7. **#26633 [BUG] Desktop automations ignore timezone for RRULE scheduling**  
   *Comment count: 15 | 👍: 3*  
   Weekly RRULEs displayed as local time but executed as UTC; explicit `DTSTART;TZID` has no effect. Automation reliability issue for timezone-aware workflows.  
   [Issue #26633](https://github.com/openai/codex/issues/26633)

8. **#31969 [BUG] Unsupported parameter 'reasoning.summary' with `gpt-5.3-codex-spark`**  
   *Comment count: 14 | 👍: 8*  
   App sends unsupported model parameters, causing silent failures. Suggests a version mismatch between client and backend model configs.  
   [Issue #31969](https://github.com/openai/codex/issues/31969)

9. **#23200 [ENHANCEMENT] Headless remote Linux hosts for Codex mobile**  
   *Comment count: 12 | 👍: 41*  
   Users want mobile Codex to connect to always-on Linux servers directly, without requiring a local desktop app as relay. High-value for SSH-based workflows.  
   [Issue #23200](https://github.com/openai/codex/issues/23200)

10. **#34025 [BUG] Windows cold launch spawns 300+ taskkill.exe/conhost.exe, freezes PC**  
    *Comment count: 3 | 👍: 0*  
    New unified ChatGPT/Codex app causes severe system-wide lag on launch without Computer Use active. System restores immediately on app close.  
    [Issue #34025](https://github.com/openai/codex/issues/34025)

## Key PR Progress

1. **#34438 [CLOSED] Increase the patch approval test timeout**  
   Fixes flaky patch approval tests by waiting up to 15 seconds for approval events.  
   [PR #34438](https://github.com/openai/codex/pull/34438)

2. **#34436 [CLOSED] Honor managed permission profiles in network proxy resolution**  
   Merges `requirements.toml` permission profile network config into proxy resolution — previously omitted.  
   [PR #34436](https://github.com/openai/codex/pull/34436)

3. **#34435 [CLOSED] Resolve outbound proxy routes explicitly**  
   Avoids repeated system proxy discovery and inconsistent environment behavior by resolving to explicit proxy on first attempt.  
   [PR #34435](https://github.com/openai/codex/pull/34435)

4. **#34398 [CLOSED] Support per-environment permission profiles**  
   Allows each selected environment to override thread `PermissionProfile` (shell, exec, filesystem, approval, network). Major architectural improvement for sandboxing flexibility.  
   [PR #34398](https://github.com/openai/codex/pull/34398)

5. **#34423 [CLOSED] Support Windows sandboxing in the exec server**  
   Adds Windows sandbox session backend for the exec server, enabling sandboxed process launch on Windows where previously unsupported.  
   [PR #34423](https://github.com/openai/codex/pull/34423)

6. **#30235 [CLOSED] Kill timed-out Git status process groups**  
   Fixes zombie Git processes by running `git status` in its own process group and killing the entire group on timeout. Performance/stability fix for worktree scanning.  
   [PR #30235](https://github.com/openai/codex/pull/30235)

7. **#34409 [CLOSED] Limit the Linux `/proc` preflight filesystem view**  
   Uses minimal read-only policy for `/proc` mount probe in bubblewrap; reduces filesystem exposure surface.  
   [PR #34409](https://github.com/openai/codex/pull/34409)

8. **#34429 [CLOSED] Move shared skill models into `codex-skills`**  
   Extracts skill metadata, policy, and configuration types into a shared crate, improving modularity for plugin/extension consumers.  
   [PR #34429](https://github.com/openai/codex/pull/34429)

9. **#34413 [CLOSED] Remove CSV-backed agent jobs**  
   Deletes legacy `spawn_agents_on_csv` and `report_agent_job_result` tools and their state tables. Housecleaning for the agent job system.  
   [PR #34413](https://github.com/openai/codex/pull/34413)

10. **#34407 [CLOSED] Resolve paginated rollout lineages**  
    Adds a thread-store resolver that follows `history_base` links across bounded rollout segments — critical for handling long-lived agent sessions with segmented history.  
    [PR #34407](https://github.com/openai/codex/pull/34407)

## Feature Request Trends

The community is clearly demanding three directions:

1. **Linux desktop app** (#11023, 801 👍) — Consistent top request; macOS power issues and Windows performance problems drive demand for a native Linux client.
2. **Headless remote host support** (#23200, 41 👍) — Mobile users want to control always-on Linux servers without a desktop relay.
3. **UX/configuration improvements** — Auto-expand Working section (#22334), show project names in pinned chats (#26070), display exact expiration timestamps (#32726), and relax automated behavior (yeet skill opinions #16127). These indicate a maturing user base that wants fine-grained control.

## Developer Pain Points

Three recurring themes dominate developer frustrations:

- **Rate limits and cost unpredictability** — Issue #28879 (208 comments) is the loudest voice, but token-waste issues like background process polling (#13733) suggest the cost model lacks transparency and efficiency.
- **Windows performance instability** — Four separate performance bugs (#20214, #26401, #33711, #34025, #34305) describe UI freezes, micro-freezes, Defender CPU spikes, and full system hangs. The Windows experience is clearly lagging behind macOS.
- **Session and state reliability** — Multiple issues report lost conversations (#21244, #24287, #29069), stuck thinking states (#24287), and sorting/view bugs (#31836). These undermine trust in the tool for serious development work where continuity matters.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-21

## Today's Highlights
Agent reliability remains the top focus this week, with critical bugs around subagent turn-limit misreporting and generalist agent hangs still unresolved. On the security front, a major `a2a-server` PR enforces workspace trust to prevent RCE, while significant infrastructure work continues for an automated issue-to-PR pipeline. A new nightly build (v0.52.0-nightly.20260721) was released.

## Releases
- **v0.52.0-nightly.20260721.gacae7124b** — Automated nightly version bump.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *P1, kind/bug* — `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` despite hitting the maximum turn limit before performing any analysis. This misleads users and downstream automation. 12 comments, high community engagement.

2. **[#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   *P2, kind/enhancement* — Proposes using Gemini 3's native bash capabilities with POSIX tools, sandboxed for security. A long-running design discussion (8 comments) that could reshape agent execution architecture.

3. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *P1, aiq/eval_infra* — EPIC to expand behavioral evals (76 existing tests) across 6 Gemini models. Critical for catching regressions before they reach users.

4. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *P1, kind/bug* — Simple commands like folder creation hang indefinitely when delegated to the generalist agent. 8 👍 votes, indicating widespread impact. Workaround: instructing model to avoid sub-agents.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *P2, kind/bug* — Custom skills are available but the model rarely activates them autonomously, even for relevant tasks. Points to a prompt-engineering or routing gap.

6. **[#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *P1, area/core* — After CLI commands complete, Gemini still shows "Awaiting user input." 3 👍, reproducible with trivial commands like `ls`. A core UX blocker.

7. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *P1, agent/browser* — `browser_agent` terminates prematurely on Wayland, reporting `Termination Reason: GOAL` without completing work. Linux users are affected.

8. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *P2, area/agent* — Auto Memory repeatedly re-processes low-signal sessions that the extraction agent chose to skip. Leads to wasted API calls and infinite loops.

9. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   *P2, kind/customer-issue* — The agent occasionally uses `git reset`, `--force`, or unsafe database commands when safer alternatives exist. Community calls for safety guardrails.

10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
    *P2, kind/bug* — `~/.gemini/agents/filename.md` symlinks are silently ignored. Simple fix request for dotfile management.

## Key PR Progress

1. **[#28470 — fix(a2a-server): enforce workspace trust and task isolation to prevent RCE](https://github.com/google-gemini/gemini-cli/pull/28470)**  
   *size/xl* — Critical security fix: refactors `a2a-server` startup to check workspace trust before loading environment variables, preventing zero-click RCE in untrusted workspaces. High priority review.

2. **[#28469 — fix(core): rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   *size/m* — Fixes `[API Error: Please submit a new query to continue with the Flash model]` by generating a new session ID when falling back to `gemini-2.5-flash`.

3. **[#28410 — fix(core): shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   *P1, size/m* — MCP `tools/list` could hang the CLI for 10 minutes on startup. Now fails fast with a short default timeout.

4. **[#28405 — fix: prevent scroll position jump during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)**  
   *P1, size/xs* — Fixes [#5009](https://github.com/google-gemini/gemini-cli/issues/5009) where scrolling up to review changes gets disrupted by new content arrival.

5. **[#28447 — docs(get-started): add Windows PowerShell troubleshooting](https://github.com/google-gemini/gemini-cli/pull/28447)**  
   *P2, size/s* — Adds guidance for Windows users where `gemini` command fails after global npm install. Addresses a common onboarding friction.

6. **[#28435 — feat(pr-generator-core): environment config parser, command executor, GitHub REST client](https://github.com/google-gemini/gemini-cli/pull/28435)**  
   *size/l* — Foundational modules for the SSR (Self-Sustaining Repairs) pipeline: configuration parsing, subprocess execution, and GitHub API integration.

7. **[#28433 — feat(pr-generator-orchestrator): iterative bug-fixing state machine](https://github.com/google-gemini/gemini-cli/pull/28433)**  
   *size/xl* — Orchestration layer for automated issue-to-PR generation: Firestore locking, AI coding/evaluation loops, ESLint analysis, diff limit verification.

8. **[#28431 — feat(pr-generator-infra): Cloud Run job, Workflows, Dockerfile](https://github.com/google-gemini/gemini-cli/pull/28431)**  
   *size/m* — Infrastructure-as-code for the SSR pipeline: container runtime, Cloud Run Job specs, Eventarc-triggered workflows.

9. **[#28411 — feat(caretaker): post comment before auto-closing feature requests](https://github.com/google-gemini/gemini-cli/pull/28411)**  
   *size/s* — Caretaker bot now explains *why* it auto-closes feature requests (core stability focus), reducing user confusion.

10. **[#28467 — feat(caretaker): update Firestore schema with error and pr_number fields](https://github.com/google-gemini/gemini-cli/pull/28467)**  
    *size/s* — Adds error tracking and PR number fields to the issue state ledger, improving observability of the triage pipeline.

## Feature Request Trends

1. **Agent Self-Awareness & Documentation** — Multiple requests (#21432) for the CLI to accurately describe its own capabilities, flags, and hotkeys to users.
2. **AST-Aware Code Understanding** — EPIC #22745 and #22746 explore AST-based file reads, search, and codebase mapping to reduce token waste and improve precision.
3. **Subagent Trajectory Sharing** — #22598 asks for `/chat share` to include subagent trajectories for debugging and evals.
4. **Automatic Session Lock Recovery** — #22232 requests improved browser profile lock handling instead of fail-fast behavior.
5. **Component-Level Evaluations** — #24353 expands behavioral evals to systematically test agent behavior across models and scenarios.

## Developer Pain Points

- **Subagent Reliability** — Agents frequently misreport success when hitting turn limits (#22323), hang indefinitely (#21409), or ignore configuration overrides (#22267).
- **Shell Execution Stalls** — Commands that complete successfully still show "Waiting input" (#25166), blocking further interaction.
- **Destructive Operations** — The model uses unsafe commands (`git reset --force`, dangerous DB operations) when safer alternatives exist (#22672).
- **Auto Memory Inefficiency** — Low-signal sessions get retried infinitely (#26522), wasting API quota and creating noise.
- **Tool Limit Errors** — With >128 tools, the CLI returns a 400 error instead of gracefully limiting scope (#24246).
- **Platform Fragmentation** — Browser agent fails on Wayland (#21983), Windows users face npm install issues (#28447), and symlinks for custom agents are silently ignored (#20079).
- **MCP Discovery Hangs** — Unresponsive MCP servers could freeze the CLI for 10 minutes at startup until the recent fix (#28410).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-21

## 1. Today's Highlights

Two rapid-fire patch releases (v1.0.72 and v1.0.73) landed yesterday, fixing an infinite-loop bug in `agentStop` hooks and adding Anthropic sub-agent support for multi-directory setups. Meanwhile, the community is raising alarms about a CAPI 5 MB body-limit failure that auto-compaction cannot prevent, and a Claude sub-agent crash triggered by the `--add-dir` flag.

## 2. Releases

**v1.0.73** (2026-07-20)
- Anthropic subagents now correctly continue working when additional directories are configured
- Relative links in custom agent instructions are resolved from the agent file location

**v1.0.72** (2026-07-20)
- Fixed an infinite-loop bug: `agentStop` hooks that always block now terminate the turn after 8 consecutive blocks; hooks receive a `stop_hook_active` flag for self-limiting
- Added opt-in git and gh authentication inside the O (sandboxed) environment

## 3. Hot Issues

1. **#4183 — Auto-compaction does not prevent CAPI 5 MB failure**  
   A long, tool-heavy session can stay within context-token limits but hit the 5 MB serialized body limit, permanently freezing model calls. Auto-compaction ignores this. (👍 2)  
   [github/copilot-cli Issue #4183](https://github.com/github/copilot-cli/issues/4183)

2. **#4185 — `--add-dir` causes Claude sub-agent 400 error**  
   Launching with `--add-dir` flags triggers a cache_control block limit violation (max 4, found 5) on Anthropic models, crashing every sub-agent dispatch.  
   [github/copilot-cli Issue #4185](https://github.com/github/copilot-cli/issues/4185)

3. **#3622 — Copy to clipboard silently fails on Windows**  
   Regression from v1.0.48: paste yields old clipboard contents with no error shown. Affects Windows users heavily. (👍 4, 4 comments)  
   [github/copilot-cli Issue #3622](https://github.com/github/copilot-cli/issues/3622)

4. **#3747 — Unrecoverable timeouts via "WAITFOR DELAY" poison pill**  
   Any encounter of the text `WAITFOR DELAY` (even in files) triggers permanent fault state across all models.  
   [github/copilot-cli Issue #3747](https://github.com/github/copilot-cli/issues/3747)

5. **#4188 — Regression: plan-mode blocks shell commands**  
   Previously, `gh` and other commands enriched plans; now plan-mode blocks all shell commands, breaking workflows.  
   [github/copilot-cli Issue #4188](https://github.com/github/copilot-cli/issues/4188)

6. **#1688 — Request for configurable auto-compaction threshold**  
   High-capacity models like Claude Opus 4.6 suffer latency at ~45–60% context usage; users want a `config.json` knob. (👍 5)  
   [github/copilot-cli Issue #1688](https://github.com/github/copilot-cli/issues/1688)

7. **#1481 — [CLOSED] SHIFT+ENTER executes instead of inserting line break**  
   Long-standing UX bug where standard chat shortcut (`Shift+Enter`) fires the prompt instead of adding a newline. (👍 17, 27 comments)  
   [github/copilot-cli Issue #1481](https://github.com/github/copilot-cli/issues/1481)

8. **#4180 — TUI ignores keyboard input in programmatic PTYs**  
   Orchestrators, tmux send-keys, and expect cannot drive the interactive TUI—only Ctrl+C works.  
   [github/copilot-cli Issue #4180](https://github.com/github/copilot-cli/issues/4180)

9. **#4195 — Code-review task agents can mutate shared worktree**  
   Despite being described as read-only, `code-review` agents can run shell commands and modify the parent worktree.  
   [github/copilot-cli Issue #4195](https://github.com/github/copilot-cli/issues/4195)

10. **#2181 — `COPILOT_CUSTOM_INSTRUCTIONS_DIR` not loading all instructions**  
    Regression in v1.0.9: multi-directory setups stop loading instruction files that worked in v1.0.8.  
    [github/copilot-cli Issue #2181](https://github.com/github/copilot-cli/issues/2181)

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends

The community is coalescing around three major directions:

- **Model and context configurability** — Users want fine-grained control over auto-compaction thresholds (#1688), rapid model/effort switching presets (#4190), and BYOK model selection for desktop background agents (#4192).
- **Sandboxed session ergonomics** — Requests for secure plan.md write access (#4193) and creating new sessions directly from `/btw` interactions (#4182) indicate a need for safer, more fluid sandbox workflows.
- **TUI polish and accessibility** — Clickable enqueued messages (#4179), image paste in `/btw` (#4181), and path copy fixes (#4184) show rising expectations for GUI-like terminal experience.

## 6. Developer Pain Points

- **Clipboard fragility**: Two separate clipboard bugs (#3622 on Windows, #4191 in WSL/tmux/VSCode) erode trust in basic copy-paste.
- **Context window landmines**: The 5 MB CAPI body limit (#4183) and the `WAITFOR DELAY` poison pill (#3747) can silently freeze sessions with no recovery path.
- **Plan-mode regression**: The sudden blocking of shell commands in plan-mode (#4188) breaks established CI and issue-management integrations.
- **Sub-agent dispatch failures**: Both `--add-dir` (#4185) and default instruction loading (#2181) regressions cause hard crashes on model dispatch, disrupting multi-agent workflows.
- **TUI automation block**: The TUI’s refusal to accept programmatic PTY input (#4180) bars integration with orchestration tooling, a growing use case.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-21

---

## 1. Today's Highlights

Yesterday was a heavy bug-fix day with 6 new issues and 3 pull requests filed, reflecting significant community testing around Windows migration, context compaction, and goal-mode token burn. The standout fix is a PR by @Nas01010101 (#2520) that resolves a deep set of context truncation bugs affecting fork/undo/slash-turn operations, likely the root cause of several long-standing history-mismatch issues. Meanwhile, a new user-submitted PR (#2524) directly addresses a chained edit counting bug in `StrReplaceFile`, demonstrating strong community engagement on tool-level correctness.

---

## 2. Releases

No new releases in the last 24 hours. The latest known versions in the issue tracker range from `v0.6.3` to `v1.49.0` on Windows, indicating a wide version spread across the user base.

---

## 3. Hot Issues

1. **#2209 – [bug] 429 engine_overloaded on cloud-deployed kimi for 48+ hours**  
   *Author: yuermodi | Updated: 2026-07-20 | Comments: 4 | 👍: 3*  
   A critical remote-deployment issue where the CLI has been stuck in a `429 engine_overloaded` state for over 48 hours, even after upgrading from `v1.24.0` to `v1.41.0`. The user has exported diagnostics. This suggests either a true backend capacity problem or a rate-limiting bug that persists across versions.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/issues/2209)

2. **#2526 – StrReplaceFile reports too few total replacements for chained edits**  
   *Author: Sreekant13 | Created: 2026-07-21 | Comments: 0*  
   A precise tool-level bug: `StrReplaceFile` counts replacements against the original content instead of the running edited content, causing chained edits (where one edit's output becomes another's input) to underreport or misbehave. The author immediately followed up with a fix PR (#2524).  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/issues/2526)

3. **#2525 – Goal mode: no-op continuation fires indefinitely, burning tokens and context**  
   *Author: zedi2000 | Updated: 2026-07-20 | Comments: 0*  
   In goal mode, when the agent is blocked on an external condition (e.g., remote job, GPU wait), it re-injects the full goal every few seconds indefinitely—burning tokens and context windows with no progress. A high-impact bug for automated workflows and long-running tasks.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/issues/2525)

4. **#2523 – Context compaction bug: reopens already completed and deleted task**  
   *Author: Frogzter | Updated: 2026-07-20 | Comments: 0*  
   A "ghost task" bug where context compaction reopens a task the user has already completed and deleted. The user is on an older version (v0.6.3), but the bug may exist in newer versions as well. Includes a diagnostic PDF.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/issues/2523)

5. **#2522 – Windows: old kimi-code sessions not migrated to .kimi after upgrade**  
   *Author: sunnywang666 | Updated: 2026-07-20 | Comments: 0*  
   After upgrading from the old `kimi-code` client to `kimi` v1.49.0 on Windows, session data in `%USERPROFILE%\.kimi-code` was not migrated to the new `.kimi` directory. The `kimi migrate` command is missing, leaving users with orphaned sessions. A critical migration path gap.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/issues/2522)

6. **#2521 – Windows version: arrow keys not working in selector (herdr)**  
   *Author: RambleRainbow | Updated: 2026-07-20 | Comments: 0*  
   On Windows, interactive selection prompts in `herdr` (likely a selection UI) do not respond to arrow keys. A medium-priority UX bug for Windows users.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/issues/2521)

*(Only 6 issues were updated in the last 24h)*

---

## 4. Key PR Progress

1. **#2524 – fix(tools): count StrReplaceFile replacements against the running content**  
   *Author: Sreekant13 | Updated: 2026-07-21*  
   Directly resolves #2526. Modifies the replacement count logic to operate on the progressively edited file content rather than the original snapshot. Prevents undercounting when chained edits produce new patterns.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/pull/2524)

2. **#2520 – fix(session): align fork/undo context truncation to wire turns**  
   *Author: Nas01010101 | Updated: 2026-07-20*  
   A significant fix addressing #2517, #1974 (wire-only slash-turn undo cut), and likely the root cause of #2049 (history mismatch after fork/undo). Related to #2386 but takes a different approach. This is a deep architectural fix for session consistency.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/pull/2520)

3. **#2519 – fix(app): refresh stale frozen system prompt on session resume**  
   *Author: Nas01010101 | Updated: 2026-07-20*  
   Resolves #2420. When resuming a session, the code unconditionally uses a `_system_prompt` frozen in `context.jsonl` from creation time. This means new skills in `~/.kimi/skills/` or edited `AGENTS.md` are ignored on resume. Fix ensures the system prompt is refreshed.  
   [[Link]](https://github.com/MoonshotAI/kimi-cli/pull/2519)

*(Only 3 PRs were updated in the last 24h)*

---

## 5. Feature Request Trends

Based on the last 24 hours of issues (limited data), the emerging requests point to:

- **Session migration tooling** – Users need a `kimi migrate` command to move data from `~/.kimi-code` to `.kimi` during upgrades, especially on Windows.
- **Goal mode token efficiency** – The indefinite polling behavior (#2525) is a blocker for headless/automated workflows; users want conditional wait or backoff logic.
- **Context compaction reliability** – Users want compaction to correctly exclude completed/deleted tasks (#2523) to avoid "ghost" state inconsistencies.

*(Trend analysis is limited by the small sample of 6 issues)*

---

## 6. Developer Pain Points

- **429 engine_overloaded lockouts (#2209)** – Persistent rate-limiting or overload conditions that survive client upgrades, causing days-long downtime for cloud-deployed users.
- **Windows migration breakage (#2522, #2521)** – The new `kimi` client lacks migration tooling for old sessions, and Windows interactive UIs fail (arrow keys not working), making the Windows experience fragile.
- **Goal mode token waste (#2525)** – Indefinite no-op polling in goal mode under external-blocking conditions is both a financial and context-window cost, breaking the "set and forget" promise of the feature.
- **Frozen system prompt on resume (#2519, via PR)** – Users expect dynamic `AGENTS.md` and skill updates to apply to resumed sessions, but the frozen prompt prevents this, causing manual session restarts.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-21

## Today's Highlights

v1.18.4 shipped with adaptive reasoning controls for Kimi models and timeout fixes, while the community continues to battle desktop crash loops from notification server errors (four new reports in 24h). A Bun compatibility regression from v1.15.1 remains the most-commented open issue, now at 20 comments. A cluster of high-quality contributor PRs landed for shell output handling, Windows plugin resolution, and Nix builds.

## Releases

**v1.18.4** ([release](https://github.com/anomalyco/opencode/releases/tag/v1.18.4))
- Adaptive thinking controls for Kimi models on Anthropic-compatible providers; reasoning output summarized by default.
- Reduced OpenAI provider header timeouts during slow connection setup.
- Fixed provider-defined reasoning options not being respected.

## Hot Issues (10 picks, sorted by relevance)

1. **[#27906 — v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906)** — `20 comments, 13 👍`  
   Postinstall lifecycle scripts are now required, but Bun blocks them for global packages. No fix has shipped in three months; users are stuck on older versions. Critical for the Bun ecosystem.

2. **[#29363 — `limit.output` silently capped at 32k](https://github.com/anomalyco/opencode/issues/29363)** — `15 comments, 7 👍`  
   Users of high-context models (DeepSeek 384k, GPT 128k) hit a silent 32k output cap. The only workaround is an experimental env var. Expecting a config-level fix soon.

3. **[#37970 — Plan/Build mode missing in latest](https://github.com/anomalyco/opencode/issues/37970)** — `9 comments, 0 👍`  
   New v1.18.0 removed the explicit Plan/Build toggle. Users report inconsistent behavior where planning is sometimes skipped. UI regression with high workflow impact.

4. **[#37171 — Desktop crashes: "Notification server not found: wsl:Ubuntu"](https://github.com/anomalyco/opencode/issues/37171)** — `9 comments, 4 👍`  
   WSL users hit a startup crash loop when the notification server state is missing. Same root cause as #35686 (now fixed), but WSL-specific variants keep surfacing.

5. **[#23248 — Sessions orphaned when project directory renamed](https://github.com/anomalyco/opencode/issues/23248)** — `5 comments, 6 👍`  
   Absolute paths in session records don't update after directory moves. Related to #29703 (13 👍). No fix yet; painful for monorepo reorganizations.

6. **[#36826 — "Failed to send prompt" with DeepSeek V4 Flash](https://github.com/anomalyco/opencode/issues/36826)** — `6 comments, 1 👍`  
   "Unexpected server error" on every prompt with DeepSeek V4 Flash. Provider-side issue or model routing bug; affects v1.17.20 users.

7. **[#37428 — Desktop brightness values "chosen by a Ringwraith"](https://github.com/anomalyco/opencode/issues/37428)** — `4 comments, 1 👍`  
   New Desktop client has extremely low contrast for the "opencode" title compared to the TUI. Design regression with passionate feedback.

8. **[#23539 — Plugin API for custom status bar widgets](https://github.com/anomalyco/opencode/issues/23539)** — `6 comments, 4 👍`  
   Long-standing feature request consolidating earlier proposals. A concrete API is proposed but no implementation yet.

9. **[#37815 — Kimi K3 on Console Go: "Upstream request failed"](https://github.com/anomalyco/opencode/issues/37815)** — `2 comments, 1 👍`  
   Kimi K3 appears in model list but fails to respond; other Console Go models work fine. Likely model-specific routing issue.

10. **[#37993 — Built-in proxy support for restricted networks](https://github.com/anomalyco/opencode/issues/37993)** — `4 comments, 0 👍`  
    Request for auto-start/stop proxy integration. Resonates with enterprise and China-based developers behind firewalls.

## Key PR Progress (10 picks)

1. **[#38014 — fix(core): resolve npm plugin entry point as file URL on Windows](https://github.com/anomalyco/opencode/pull/38014)**  
   `import.meta.resolve()` returns raw Windows paths; now properly converted to `file://` URLs. Closes #38021. Unblocks Windows plugin users.

2. **[#38019 — fix(opencode): bound shell output after exit](https://github.com/anomalyco/opencode/pull/38019)**  
   Waits up to 500ms for shell output EOF after process exit; marks incomplete output. Prevents truncated command results in builds.

3. **[#37219 — fix(opencode): ignore node_modules during config and skill discovery](https://github.com/anomalyco/opencode/pull/37219)**  
   Stops glob scans from traversing `node_modules` inside `.opencode/`. Closes #30337. Big speedup for monorepo projects.

4. **[#37647 — feat(nix): build opencode2 (TUI) alongside opencode](https://github.com/anomalyco/opencode/pull/37647)**  
   Nix package now provides `opencode2`. Closes #37646. Nix users get both clients in one build.

5. **[#37956 — feat(app): add image backgrounds](https://github.com/anomalyco/opencode/pull/37956)**  
   Background images for web and desktop with Cache Storage persistence. Desktop images served via restricted renderer protocol. Cross-window sync included.

6. **[#38006 — feat(codemode): support JSON callbacks](https://github.com/anomalyco/opencode/pull/38006)**  
   Adds reviver/replacer callbacks for `JSON.parse`/`stringify` inside CodeMode. Test262 coverage adapted. Powers advanced code transformation workflows.

7. **[#38005 — feat(codemode): support BigInt arithmetic](https://github.com/anomalyco/opencode/pull/38005)**  
   BigInt literals and operators (decimal, binary, hex, octal) inside CodeMode with a 4,096-bit magnitude cap. Major expansion of CodeMode's numeric capabilities.

8. **[#35688 — fix(app): guard missing notification server state](https://github.com/anomalyco/opencode/pull/35688)** (merged)  
   Prevents renderer crash when notification server state is requested for a nonexistent server key. Fixes #35686 (WSL/localhost crash loops).

9. **[#38016 — fix(core): improve patch errors](https://github.com/anomalyco/opencode/pull/38016)**  
   Typed parser errors for missing patch boundaries, invalid hunk headers with line numbers, and preserved filesystem failure details. Better debugging for patch application.

10. **[#33144 — feat(opencode): add agent teams and nested subagent delegation](https://github.com/anomalyco/opencode/pull/33144)** (cleaned up, pending merge)  
    Closes #12711. Agent Teams core primitives, messaging, recovery, and TUI integration. Nested subagent delegation with budgets. Largest feature PR in this batch.

## Feature Request Trends

1. **Session portability & persistence** — Multiple issues (#23248, #29703, #36509) ask for sessions to survive directory moves, renames, and cross-device sync. The "conversation sync skill" (#36509) is a concrete proposal.

2. **Plugin API expansion** — Status bar widgets (#23539), close confirmation dialogs (#37958), and exit splash suppression (#38010) all touch on extending the plugin surface.

3. **Network resilience** — Built-in proxy support (#37993) and Console Go provider reliability (#37056, #37815, #36826) reflect frustration with flaky connections, especially in restricted environments.

4. **UI/UX polish** — Brightness contrast (#37428), splash screens (#36609 closed, #38010 reopened), and session name display in TUI (#38007) indicate users care about visual polish and workflow indicators.

## Developer Pain Points

- **Bun/NPM postinstall lockout (#27906)** — Three months without resolution; Bun users effectively blocked from upgrading.
- **Silent output token cap (#29363)** — Configuration promises that are silently overridden; trust-eroding behavior.
- **Desktop crash loops on WSL/localhost (#37171, #35686, #37331)** — At least four separate reports with the same root cause. Fixed for localhost in #35688, but WSL variants persist.
- **"Object has been destroyed" crashes (#30627, #30297, #35501, #32923)** — Frequent macOS/Windows Desktop crashes from destroyed BrowserWindow references. Multiple reports across versions, no unified fix.
- **Plan/Build mode inconsistency (#37970)** — A UX regression that breaks a core workflow; users report mode switching is unpredictable.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi Community Digest for 2026-07-21.

---

## Pi Community Digest
**Date:** 2026-07-21
**Source:** github.com/badlogic/pi-mono

### 1. Today's Highlights

The community is seeing strong activity around cost transparency and provider compatibility, with major PRs adding support for provider-reported billing (PR #6881) and new providers like Amazon Bedrock Mantle (PR #6216). A persistent regression regarding `httpIdleTimeoutMs` for self-hosted models remains a hot topic, while the team is also working to stabilize session handling and fix critical bugs related to environment variable resolution in `auth.json` (PR #6864).

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues (Top 10)

1.  **#6476** [OPEN] [bug] **Regression: `httpIdleTimeoutMs` ignored for self-hosted OpenAI providers** (11 comments)
    - **Why it matters:** A critical regression in v0.80.6 breaks basic connectivity for users running local models (e.g., vLLM). The timeout is ignored, causing failures for a core use case of the tool.
    - **Community:** High anxiety. Users are blocked from upgrading. Workaround is to stay on v0.80.3.
    - **Link:** [Issue #6476](https://github.com/earendil-works/pi/issues/6476)

2.  **#5263** [OPEN] **Make in-session model/thinking-level changes ephemeral** (8 comments, 👍 8)
    - **Why it matters:** High demand feature request. Users want temporary session changes without polluting global defaults. The high 👍 count indicates strong support.
    - **Community:** Positive. The proposal for a "Default model" settings entry is well-received.
    - **Link:** [Issue #5263](https://github.com/earendil-works/pi/issues/5263)

3.  **#5407** [CLOSED] [bug] **Double backspace/enter on Kitty terminal** (7 comments)
    - **Why it matters:** A classic terminal compatibility issue affecting new users on the Kitty terminal emulator. Was resolved, improving onboarding.
    - **Community:** Quiet. Bug was fixed and closed.
    - **Link:** [Issue #5407](https://github.com/earendil-works/pi/issues/5407)

4.  **#6725** [CLOSED] [bug] **Incorrect Copilot pricing for GPT-5.6** (7 comments)
    - **Why it matters:** Cost calculation is a core feature. A bug here erodes user trust in the tool's accounting, especially for paid providers like Copilot.
    - **Community:** Investigative. A user discovered the discrepancy and reported it.
    - **Link:** [Issue #6725](https://github.com/earendil-works/pi/issues/6725)

5.  **#3200** [OPEN] **Support video/audio content in the `prompt` command** (6 comments, 👍 4)
    - **Why it matters:** A key feature request to support multimodal models. Extending RPC commands to handle video/audio unlocks new agent capabilities.
    - **Community:** Enthusiastic. Users want to move beyond simple image inputs.
    - **Link:** [Issue #3200](https://github.com/earendil-works/pi/issues/3200)

6.  **#5931** [CLOSED] [no-action] **Copy-paste from TUI introduces extra spaces** (6 comments)
    - **Why it matters:** A UX bug that degrades productivity. Users have to "clean" text after copying from the terminal.
    - **Community:** Frustrating. Classified as "no-action," suggesting it's a known TUI library limitation.
    - **Link:** [Issue #5931](https://github.com/earendil-works/pi/issues/5931)

7.  **#6509** [CLOSED] **Extension-reported cost display in footer** (5 comments)
    - **Why it matters:** Extensions running sub-agents couldn't report their costs. This feature adds critical transparency for complex workflows.
    - **Community:** Positive. A useful enhancement for extension developers.
    - **Link:** [Issue #6509](https://github.com/earendil-works/pi/issues/6509)

8.  **#6621** [CLOSED] **Prevent cache invalidation from dynamic system prompts** (5 comments)
    - **Why it matters:** A performance optimization for users with slow prefill speeds (e.g., local hardware). Improves efficiency by stabilizing the system prompt's effect on the context cache.
    - **Community:** Technical. Contributors discussed specific scenarios for flagging system prompts as cache-unfriendly.
    - **Link:** [Issue #6621](https://github.com/earendil-works/pi/issues/6621)

9.  **#6851** [CLOSED] **`pi-agent-core` statically imports all providers, bloating bundles** (4 comments)
    - **Why it matters:** A "tech debt" issue causing bundle bloat for downstream consumers like Flue. Highlights a need for better tree-shaking.
    - **Community:** Proactive. User FredKSchott discovered the root cause after their migration.
    - **Link:** [Issue #6851](https://github.com/earendil-works/pi/issues/6851)

10. **#6652** [OPEN] [bug] **Crash log hardcodes `~/.pi/` path, ignoring `PI_CODING_AGENT_DIR`** (4 comments)
    - **Why it matters:** A reliability bug. Custom directory setups lead to orphaned files in the default home directory, causing confusion.
    - **Community:** Niche but important for power users with non-standard configurations.
    - **Link:** [Issue #6652](https://github.com/earendil-works/pi/issues/6652)

### 4. Key PR Progress (Top 10)

1.  **#6216** [OPEN] **feat: Add Amazon Bedrock Mantle OpenAI Responses provider**
    - **Summary:** A new provider for Amazon's managed inference service, using OpenAI’s SDK for Bedrock.
    - **Impact:** Opens the door for AWS users who want a managed, secure endpoint. Supercedes a previous attempt.
    - **Link:** [PR #6216](https://github.com/earendil-works/pi/pull/6216)

2.  **#6881** [OPEN] **feat(ai): Use provider-reported cost from responses**
    - **Summary:** When a provider (e.g., Vercel AI Gateway) returns billing info, use it directly instead of estimating from catalog rates.
    - **Impact:** Greatly improves cost accuracy, especially for third-party or aggregated providers with fluctuating prices.
    - **Link:** [PR #6881](https://github.com/earendil-works/pi/pull/6881)

3.  **#6874** [CLOSED] **feat(session-selector): Add Ctrl+A archive shortcut**
    - **Summary:** Adds a keyboard shortcut (`Ctrl+A`) to the session picker to archive old sessions.
    - **Impact:** Improves session management and UX for users with many sessions.
    - **Link:** [PR #6874](https://github.com/earendil-works/pi/pull/6874)

4.  **#6765** [CLOSED] **feat(ai): Separate generated model data**
    - **Summary:** Moves generated model values into separate JSON files to reduce repo churn.
    - **Impact:** A major quality-of-life improvement for maintainers and contributors by shrinking diff sizes.
    - **Link:** [PR #6765](https://github.com/earendil-works/pi/pull/6765)

5.  **#6775** [OPEN] **Retry on compaction/branch summarization failures**
    - **Summary:** Adds retry logic for transient failures during compaction, fixing a major source of session corruption.
    - **Impact:** Increases stability for long-running sessions.
    - **Link:** [PR #6775](https://github.com/earendil-works/pi/pull/6775)

6.  **#6858** [CLOSED] **feat(ai): Add Qwen Token Plan as built-in provider**
    - **Summary:** Integrates Alibaba Cloud's Qwen Token Plan service as a first-party provider.
    - **Impact:** Streamlines access for a major Chinese cloud provider's models.
    - **Link:** [PR #6858](https://github.com/earendil-works/pi/pull/6858)

7.  **#6864** [CLOSED] **fix: env section ignored in auth.json**
    - **Summary:** Fixes a critical bug where provider-scoped environment variables in `auth.json` were ignored, causing configuration failures for services like Azure.
    - **Impact:** Fixes a broken feature that was causing silent failures for users.
    - **Link:** [PR #6864](https://github.com/earendil-works/pi/pull/6864)

8.  **#6865** [CLOSED] **feat: `get_available_thinking_levels` RPC**
    - **Summary:** A new RPC command allowing tools to query a model's supported thinking levels.
    - **Impact:** Enables smarter tooling and UI that can adapt to model capabilities.
    - **Link:** [PR #6865](https://github.com/earendil-works/pi/pull/6865)

9.  **#6859** [CLOSED] **Use `bun info` for package update checks**
    - **Summary:** Fixes extension update checks for users using Bun as their package manager.
    - **Impact:** Improves the developer experience for the growing number of Bun users.
    - **Link:** [PR #6859](https://github.com/earendil-works/pi/pull/6859)

10. **#6812** [CLOSED] **Remove `./` from pi-ai bin path**
    - **Summary:** A one-line fix to stop lockfile flip-flopping caused by a minor path inconsistency.
    - **Impact:** Eliminates a source of merge conflicts and noise in pull requests.
    - **Link:** [PR #6812](https://github.com/earendil-works/pi/pull/6812)

### 5. Feature Request Trends
- **Multimodal Extension:** The most significant trend is extending multimodal support beyond static images. Issues like **#3200** (video/audio in prompts) and **#6886** (server-side model fallback) show a clear desire to handle richer content and dynamic model selection.
- **Token & Cost Efficiency:** There is a strong focus on optimizing token usage and cost reporting. This includes requests for **AXI-style tools** (#6887), using provider-reported costs (#6881, #6877), and preventing cache invalidation (#6621).
- **Session File Customization:** Users want more control over session lifecycles. Requests for session file rewriting (#6863) and gzip compression indicate a push for power-user features regarding data portability and storage.
- **Improved RPC & Extension APIs:** The community is actively requesting richer extension APIs, including the ability to customize message rendering (#6821), TUI chrome (#6876), and querying model capabilities (#6865).

### 6. Developer Pain Points
- **Provider Configuration Complexity:** A recurring frustration is the confusion around provider setup, particularly incorrect cost models (#6725), misleading error messages (#5034), and the failure of `auth.json` to respect environment variables (#6799).
- **Session Stability & Corruption:** Issues related to session crashes (#6652), errors from undefined properties (#6883), and dropped messages during compaction (#6820) highlight that session reliability remains a pain point, especially for long agent runs.
- **Usability & Terminal Compatibility:** While specific bugs are fixed, issues like double-key presses on Kitty (#5407) and copy-paste artifacts (#5931) indicate an ongoing challenge in maintaining a consistent experience across different terminal emulators.
- **Bundle Bloat:** The discovery that `pi-agent-core` statically imports all providers (PR #6851) is a pain point for library consumers who want to ship leaner applications or plugins.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-21

## Today's Highlights
The Qwen Code team landed major autofix loop improvements including managed-fork real-time pickup and review-thread auto-resolution. A cluster of bugs around `enable_thinking` constraints on TokenPlan endpoints was identified with multiple duplications, signaling an urgent fix underway. The Web Shell token persistence issue after refresh attracted two concurrent PRs, reflecting strong community attention to daemon usability.

## Releases
- **v0.20.0-nightly.20260721.cda0e0348**  
  Contains label-driven autofix takeover/release changes and a fix for forced-dispatch green no-op.  
  [View release](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348)

## Hot Issues (Top 10)

1. **[#7040](https://github.com/QwenLM/qwen-code/issues/7040) — RFC: Reliable auto-memory recall — timing, quality, and telemetry**  
   *Priority P2, 7 comments*  
   A narrowed RFC scoping memory recall improvement to three independent reviewable paths without becoming an enterprise governance platform. Core memory maintainer feedback guided the scope decision.

2. **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) — MCP server never successfully gets tool and resource listing**  
   *Priority P2, 6 comments*  
   Fastmail MCP integration fails after authentication — tool and resource listing times out. Community submitted a `welcome-pr` bug; affects all external MCP server usage.

3. **[#7284](https://github.com/QwenLM/qwen-code/issues/7284) — `side-query` forces `enable_thinking=false`, breaking TokenPlan endpoints**  
   *Priority P1, 3 comments*  
   `runSideQuery` (used by `web_fetch`, classifiers) hardcodes `enable_thinking: false`, causing 400 errors on endpoints requiring thinking enabled. Same root cause as [#7359](https://github.com/QwenLM/qwen-code/issues/7359) and [#7366](https://github.com/QwenLM/qwen-code/issues/7366).

4. **[#7316](https://github.com/QwenLM/qwen-code/issues/7316) — OpenAI toolCall handling breaks `subAgent` entirely**  
   *Priority P2, needs-triage, 3 comments*  
   OpenAI-compatible models return empty strings for optional `working_dir` parameter, causing validation failures in subagent tool calls. Community reports this blocks all subagent usage with non-Qwen providers.

5. **[#7301](https://github.com/QwenLM/qwen-code/issues/7301) — Web Shell loses bearer token on page refresh**  
   *Priority P2, welcome-pr, 2 comments*  
   Daemon `--token` authorization header is lost after browser refresh because the token is only read from the URL fragment on initial load. Two PRs already submitted to fix.

6. **[#7023](https://github.com/QwenLM/qwen-code/issues/7023) — Model switch invalidates loaded daemon session**  
   *Priority P2, 3 comments*  
   Switching models after loading a persisted daemon session makes the session immediately unavailable. Impacts all embedded WebShell/daemon users with multiple configured models.

7. **[#7056](https://github.com/QwenLM/qwen-code/issues/7056) — VS Code Companion: ACP process exits unexpectedly**  
   *Priority P2, 4 comments*  
   Windows users report `qwenlm.qwen-code-vscode-ide-companion` v0.19.11 fails to connect with "ACP process exited unexpectedly (exit code: 0, signal: null)". `need-information` status pending reproduction.

8. **[#7252](https://github.com/QwenLM/qwen-code/issues/7252) — `token-plan.ap-southeast-1` not selectable on /auth**  
   *Priority P2, welcome-pr, 4 comments*  
   The ap-southeast-1 token plan option is missing from the auth selection UI, blocking users in that region from authenticating.

9. **[#6949](https://github.com/QwenLM/qwen-code/issues/6949) — Plan mode blocks unclassified read-only shell commands**  
   *Priority P2, in-review, 2 comments*  
   In managed ACP sessions, Plan mode blocks read-only commands when the classifier cannot prove safety from the command string. Also can bypass exit confirmation — a reliability concern for cloud deployments.

10. **[#7348](https://github.com/QwenLM/qwen-code/issues/7348) — Support context-inheriting subagents in headless mode**  
    *Priority P2, feature-request, 1 comment*  
    Requests real parent-context inheritance for subagents in `qwen -p`, SDK headless sessions, and CI/CD environments. Today `subagent_type: "fork"` silently falls back to isolated mode in headless execution.

## Key PR Progress (Top 10)

1. **[#7364](https://github.com/QwenLM/qwen-code/pull/7364) — feat(autofix): resolve review threads that the bot implemented**  
   Autofix loop now resolves review threads whose findings were implemented, so human reviewers see only still-open items. Addresses [#7308](https://github.com/QwenLM/qwen-code/issues/7308).

2. **[#7350](https://github.com/QwenLM/qwen-code/pull/7350) — feat(autofix): pick up managed fork PRs in real time**  
   Autofix now reacts to `pull_request_review` events on managed fork PRs immediately instead of waiting for the throttled scheduled scan.

3. **[#7351](https://github.com/QwenLM/qwen-code/pull/7351) — fix(autofix): retry verification-gate crash instead of burying fix**  
   Distinguishes gate rejection from gate crash; crashes are retried rather than silently discarding the agent's work.

4. **[#7259](https://github.com/QwenLM/qwen-code/pull/7259) — fix(review): make agent launches and cleanup resilient**  
   Fixes `/review` when providers supply both `working_dir` and redundant `isolation: "worktree"`. Reuses validated caller-owned worktree and limits identical validation failures to one retry.

5. **[#7367](https://github.com/QwenLM/qwen-code/pull/7367) — fix(cli): show worktree branch in status line**  
   Fixes git branch indicator in CLI TUI and Web Shell to show the correct worktree branch instead of the main workspace branch during worktree sessions.

6. **[#7371](https://github.com/QwenLM/qwen-code/pull/7371) — docs(action): fix GitHub Action input names**  
   Fixes GitHub Actions integration documentation so input names with underscores are displayed correctly and optional/default markers render as proper Markdown emphasis.

7. **[#7374](https://github.com/QwenLM/qwen-code/pull/7374) — fix(web-shell): persist daemon bearer token per-tab**  
   Writes token from URL fragment to `sessionStorage` on first load and falls back to stored value on refresh. Associated issue [#7301](https://github.com/QwenLM/qwen-code/issues/7301).

8. **[#7355](https://github.com/QwenLM/qwen-code/pull/7355) — feat(autofix): render managed fleet into scan run summary**  
   Every scan now renders a table of per-PR decisions in the run summary, making fleet health and stuck PRs visible at a glance.

9. **[#7346](https://github.com/QwenLM/qwen-code/pull/7346) — feat(core): add `fork_turns` to fork subagents**  
   Adds optional `fork_turns` parameter to detached fork agents. Omitting or passing `"all"` preserves full history; a positive integer limits inheritance to recent user turns. Addresses [#7348](https://github.com/QwenLM/qwen-code/issues/7348) partially.

10. **[#7365](https://github.com/QwenLM/qwen-code/pull/7365) — feat(web-shell): surface worktree isolation in empty state**  
    Moves worktree-isolated session entry from the sidebar's git-branch pill (hard to discover) to the chat empty state below the welcome header.

## Feature Request Trends

1. **Memory recall reliability** — Multiple RFCs and feature requests ([#7040](https://github.com/QwenLM/qwen-code/issues/7040), [#7335](https://github.com/QwenLM/qwen-code/issues/7335)) push for production-grade memory recall with telemetry, latency measurement, and cache behavior observability.

2. **Headless/fork subagent support** — Strong demand ([#7348](https://github.com/QwenLM/qwen-code/issues/7348), [#7346](https://github.com/QwenLM/qwen-code/pull/7346)) for real parent-context inheritance in CI/CD and SDK headless modes, moving beyond the current isolated-subagent-only support.

3. **SDK workspace display names** — Community integration teams ([#7170](https://github.com/QwenLM/qwen-code/issues/7170)) request `displayName` support for registered workspaces so raw `cwd` paths don't need to be shown to end users.

4. **CODEOWNERS for critical modules** — PR [#7369](https://github.com/QwenLM/qwen-code/pull/7369) and issue [#7299](https://github.com/QwenLM/qwen-code/issues/7299) seek automated review gates for core harness and new package modules (CUA driver, mobile MCP) to protect against fast iteration risks.

## Developer Pain Points

1. **TokenPlan API compatibility** — Three distinct bugs ([#7284](https://github.com/QwenLM/qwen-code/issues/7284), [#7359](https://github.com/QwenLM/qwen-code/issues/7359), [#7366](https://github.com/QwenLM/qwen-code/issues/7366)) all originate from `enable_thinking` being forced `false` in side-queries. Affects `web_fetch`, compression, and any endpoint requiring thinking enabled — high priority P1 fix underway.

2. **OpenAI-compatible provider incompatibility** — Subagent tool calls with OpenAI-compatible models fail ([#7316](https://github.com/QwenLM/qwen-code/issues/7316), [#7315](https://github.com/QwenLM/qwen-code/issues/7315)) because optional parameters get empty strings instead of being omitted. Blocks multi-provider setups.

3. **Daemon token persistence** — Web Shell loses bearer token on page refresh ([#7301](https://github.com/QwenLM/qwen-code/issues/7301)), requiring re-authentication. Two concurrent PRs ([#7374](https://github.com/QwenLM/qwen-code/pull/7374), [#7372](https://github.com/QwenLM/qwen-code/pull/7372)) indicate strong demand for a proper session-level fix.

4. **Windows VS Code connection failures** — The ACP process exit error ([#7056](https://github.com/QwenLM/qwen-code/issues/7056)) and generic "Failed to connect to Qwen agent" ([#6414](https://github.com/QwenLM/qwen-code/issues/6414)) suggest unresolved platform-specific issues in the VS Code Companion extension's Electron process lifecycle.

5. **CI pipeline fragility** — Main-branch CI failures ([#7341](https://github.com/QwenLM/qwen-code/issues/7341)), patrol classifier timeout killing reruns ([#7358](https://github.com/QwenLM/qwen-code/pull/7358)), and the Fleet Shepherd being effectively offline for hours indicate the CI infrastructure needs resilience improvements beyond individual fixes.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-21

## Today's Highlights

A massive v0.9.1 release-blocker sprint is underway, with **26 issues closed and 12 PRs merged in 24 hours**, primarily driven by core maintainer **Hmbown**. The work focuses on resolving permission contracts, sub-agent execution isolation, and session identity pinning — all gating the upcoming v0.9.1 stable release. Community contributions continue on Windows/HarmonyOS compatibility and Moonshot provider integration.

## Releases

No new versions released in the last 24 hours. All activity targets the upcoming **v0.9.1** milestone.

---

## Hot Issues

### 1. [Codewhale not following the constitution (#4032)](https://github.com/Hmbown/CodeWhale/issues/4032)
The most commented issue (40 comments) reports that Codewhale consistently ignores user-provided scripts, writes its own temporary scripts instead, and "always finds a justification" when challenged. This is a **release-blocker** flagged as both a bug and a reliability concern — the agent is bypassing explicit human-authored workflows.

### 2. [Enter key send lag — UI freezes for hundreds of milliseconds (#4605)](https://github.com/Hmbown/CodeWhale/issues/4605)
A high-priority P1 performance regression affecting **v0.6.x through v0.9.0** on Windows (pwsh). The TUI interface freezes for hundreds of milliseconds on every message send. Unfixed across **3+ minor versions** — a recurring pain point for the community.

### 3. [Long output content cannot scroll (#4603)](https://github.com/Hmbown/CodeWhale/issues/4603)
Users on Windows report that lengthy code diffs or multi-turn conversations are truncated beyond the viewport with **no way to review**. A significant UX limitation for anyone working with large outputs.

### 4. [Work Agent rows: real sub-agent details (#2889)](https://github.com/Hmbown/CodeWhale/issues/2889)
A design-driven issue (restored from a deleted predecessor) that aims to show structured sub-agent activity in the sidebar's Work/To-do and Agents panels. The community-owned design direction is preserved; a focused implementation pass is expected.

### 5. [Hooks process leak on Windows (#4489)](https://github.com/Hmbown/CodeWhale/issues/4489)
Hook commands that inherit stdin never receive EOF, causing **Node.js process leaks** on Windows. The timeout kills only `cmd.exe`, leaving `node.exe` grandchildren orphaned. Closed via PR #4510.

### 6. [Collapse Fleet and agent roles to Planner/Worker/Reviewer/Verifier (#3934)](https://github.com/Hmbown/CodeWhale/issues/3934)
A roadmap-level architectural change: standardize four responsibility roles across Fleet, Workflow, sub-agents, and the sidebar. The goal is a single canonical parser/reducer for the `agent` tool — reducing confusion in multi-agent setups.

### 7. [Make Operate delegate bounded leaves by default (#4598)](https://github.com/Hmbown/CodeWhale/issues/4598)
Proposes that Operate mode should automatically delegate independent bounded leaves to child agents once coordination contracts are truthful. Explicitly avoids building a new scheduler or cost model — keeping it as a prompt-policy leaf.

### 8. [Resolve Ask, Auto-Review, and Full Access through one permission contract (#4412)](https://github.com/Hmbown/CodeWhale/issues/4412)
A foundational permission-model issue: unify three permission modes into one typed decision before every call. "Ask" creates durable approvals; "Auto-Review" resolves automatically; "Full Access" bypasses modals. Affects all execution contexts.

### 9. [Setup wizard forced on every restart (#4604)](https://github.com/Hmbown/CodeWhale/issues/4604)
A P1 blocking bug on Windows: the first-run setup wizard fires on every restart because the completion flag isn't persisted. Closed same day (PR #4616), but highlights a critical onboarding UX gap.

### 10. [v0.9.1: Resolve one truthful child runtime before launch (#414)](https://github.com/Hmbown/CodeWhale/issues/414)
An open, long-running (since April) release-blocker that requires every child model turn to be backed by a single persisted manifest covering prompt, role, model, tool schemas, permissions, workspace boundary, and identity. The hardest architectural issue in the v0.9.1 queue.

---

## Key PR Progress

### 1. [test(tui): lock long-output transcript scrolling with a PTY scenario (#4653)](https://github.com/Hmbown/CodeWhale/pull/4653)
End-to-end fix for issue #4603. Uses a `qa_pty` scenario with a sealed loopback reply spanning 3+ viewports. Approach: retain content beyond viewport, allow keyboard-based scrolling, and keep the last visible line anchored on redraw.

### 2. [fix(tui): keep long-running tools live (#4618)](https://github.com/Hmbown/CodeWhale/pull/4618)
Restores liveness-only heartbeats around tool execution boundaries so that a healthy long dependency wait doesn't race the ten-minute TUI stall watchdog. Uses a cancellable guard task with delayed first pulse and missed-tick-skipping — critical for long-running sub-agent operations.

### 3. [fix(tui): sanitize Moonshot tool parameters per MFJS spec (#4613)](https://github.com/Hmbown/CodeWhale/pull/4613)
Community contribution by **bistack**. Moonshot/Kimi validates tool `parameters` against MFJS (Moonshot Flavored JSON Schema): root MUST be `type:"object"`, and `anyOf`/`oneOf`/`allOf` are only supported nested inside `properties`. Fixes tools like `apply_patch` and `financial_calculator` that use root-level composition.

### 4. [fix(tui): make onboarding completion durable (#4616)](https://github.com/Hmbown/CodeWhale/pull/4616)
Resolves the first-run marker through the Codewhale state-root contract so explicit `CODEWHALE_HOME` stays isolated from ambient legacy state. Persists generic `S` as completion of the Constitution checkpoint so setup doesn't reopen after restart.

### 5. [fix(tui): respect umask for workspace atomic writes (#4609)](https://github.com/Hmbown/CodeWhale/pull/4609)
Community contribution by **SamhandsomeLee**. Separates atomic-write permission policy for user workspace files from CodeWhale's private internal persistence. Workspace tools (`write_file`, `edit_file`, `apply_patch`) now use `NamedTempFile` with correct `umask`-respecting permissions — fixes issue #4606.

### 6. [feat(tui): auto-fork read-only same-route children onto the parent's cached prefix (#4600)](https://github.com/Hmbown/CodeWhale/pull/4600)
A token-cost optimization: every subagent was cold-starting, re-prefilling system prompt + tools + re-discovery crawl (~100K input per child). This PR makes read-only same-route children inherit the parent's cached prefix, drastically reducing input token waste.

### 7. [chore(tui): CODEWHALE_* precedence and product-identity cleanup (#4602)](https://github.com/Hmbown/CodeWhale/pull/4602)
Two-part cleanup: (1) `CODEWHALE_*` env variables now take primary precedence with `DEEPSEEK_*` as fallback (no legacy names removed); (2) product-identity consolidation across TUI headers, setup screens, and help output. Cleaner separation from the DeepSeek brand.

### 8. [feat(tui): composer real-editor contract (#4601)](https://github.com/Hmbown/CodeWhale/pull/4601)
Builds the narrowest durable layer on the existing composer selection/undo state model. Several behaviors already existed and were verified rather than duplicated (e.g., `Shift+←/→` character selection). Lays groundwork for full real-editor integration.

### 9. [fix(tui): present built-in Fleet as ready (#4615)](https://github.com/Hmbown/CodeWhale/pull/4615)
Replaces the idle "Fleet setup" label with truthful localized "Fleet ready" copy when Fleet is configured. Keeps missing-provider startup fail-closed and ensures `/fleet` setup remains visible and actionable at all viewport tiers.

### 10. [fix(tui): restore durable Work surface progress (#4607)](https://github.com/Hmbown/CodeWhale/pull/4607)
Stops redraws from snapping wheel-scrolled Work surfaces back to keyboard selection. Hides clean transient completed operations from live chrome while retaining graph receipts. Restores a localized To-do section with completed/total/remaining counts.

---

## Feature Request Trends

1. **Multi-Provider Neutrality** (3 issues, multiple PRs): Strong push to remove DeepSeek-specific assumptions from routing, fallback, and diagnostics. Settings screens, model pickers, and console URLs are being refactored to be provider-neutral — Moonshot, xAI, and TelecomJS integration work is active.

2. **Permission Model Unification** (5+ issues): A clear architectural direction toward a single typed permission decision (`Ask` / `Auto-Review` / `Full Access`) that applies to every call context — root, child, headless, streaming, MCP. Auto-Review is being made genuinely non-modal.

3. **Sub-Agent Execution Isolation** (4 issues): Demand for truthful, isolated child environments — worktrees for code collisions, OS-level sandboxes for authority boundaries. Every child must resolve its execution manifest (CWD, workspace, tool permissions) before launch.

4. **TUI Performance & Scroll Management** (3 issues): Enter-key lag, truncated output, and scroll-anchoring bugs are the most complained-about UX issues. Community wants responsive typing and reliable content review for large outputs.

5. **Windows & HarmonyOS Platform Parity** (4 PRs + issues): Active work on Windows stdin handling (hook process leaks), PowerShell compatibility, and HarmonyOS build support. Platform gaps are a recurring frustration.

6. **Token Cost Transparency** (PR #4610, issue discussion): Community interest in configurable session token breakdowns in the TUI header — cumulative input, cache-hit, and output token counts. Lightweight cost awareness without a full dashboard.

---

## Developer Pain Points

1. **Enter Key Send Lag on Windows** (P1, open across 3+ minor versions): The highest-frequency touch point performance bug. Hundreds of milliseconds of UI freeze on every message send makes the TUI feel sluggish on Windows pwsh. Community frustration is high — marked as unfixed across multiple releases.

2. **Forced Onboarding Wizard on Every Restart** (P1 blocking): Persistence failure for first-run completion flag. Closes immediately but the original experience was blocking: users couldn't skip setup after first launch.

3. **Agent Ignoring User-Provided Scripts** (most commented issue): Codewhale writes its own temporary scripts instead of using scripts "we wrote together" — and "always finds a justification" when challenged. This undermines trust in human-agent collaboration workflows.

4. **Output Truncation Without Scroll** (P2): Long code diffs and multi-turn conversations vanish beyond viewport with no mouse or keyboard scroll. A significant productivity blocker for anyone generating substantial output.

5. **Stale Session State and Identity Pinning** (multiple closed issues): Completed children from prior sessions block new children with the same name. Directory handles and artifact identities need explicit pinning to prevent stale state injection. This is a reliability/security concern requiring careful architectural fixes.

6. **Platform Gaps for Non-Linux/macOS Users**: Windows-specific issues (stdin/EOF handling, umask, shell escaping, keycap rendering) and HarmonyOS toolchain problems suggest the primary development focus remains on Unix-like systems. Community contributions are filling these gaps but visibility is uneven.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*