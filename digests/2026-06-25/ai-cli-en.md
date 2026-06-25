# AI CLI Tools Community Digest 2026-06-25

> Generated: 2026-06-25 00:28 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date: 2026-06-25**

---

## 1. Ecosystem Overview

The AI CLI development tools landscape is experiencing rapid maturation, with seven major tools now serving distinct developer segments. A clear bifurcation is emerging between **enterprise-oriented platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI) emphasizing reliability, security, and IDE integration, versus **open-source/community-driven tools** (Gemini CLI, OpenCode, Pi, Qwen Code, CodeWhale) prioritizing extensibility, multi-provider support, and architectural innovation. Token cost unpredictability has become the dominant cross-cutting pain point, with three separate tools reporting community firestorms over billing and consumption issues. Meanwhile, MCP (Model Context Protocol) standardization is accelerating, with five tools actively implementing or fixing MCP integrations. The ecosystem is converging on **multi-agent architectures**, **context management improvements**, and **provider flexibility** as the next battleground features.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Community Engagement Signal |
|------|-------------|-----------|----------------|---------------------------|
| **Claude Code** | 10 hot issues | 5 PRs | v2.1.191 shipped | High — 159👍 for subdirectory skills request; enterprise-focused |
| **OpenAI Codex** | 10 hot issues | 10 PRs | 5 Rust alphas (v0.143.0-a.11–15) | Very High — 271+269👍 on token cost bugs; most active community |
| **Gemini CLI** | 10 hot issues | 10 PRs | No release | Moderate — P1 bugs dominate; security PRs from external contributors |
| **GitHub Copilot CLI** | 10 hot issues | 1 PR | v1.0.65 shipped | Moderate — UX issues dominate; mobile parity emerging |
| **Kimi Code CLI** | 10 hot issues | 2 PRs | No release | Low — 2 PRs in 24h; community concern about billing |
| **OpenCode** | 10 hot issues | 10 PRs | v1.17.10 shipped | High — MCP ecosystem expansion; 39👍 privacy concern resolved |
| **Pi** | 10 hot issues | 10 PRs | No release | High — 30👍 on stream reliability; provider expansion |
| **Qwen Code** | 10 hot issues | 10 PRs | v0.19.2 shipped | Moderate — P1 security fix; CI process issues |
| **DeepSeek (CodeWhale)** | 10 hot issues | 25 PRs | Preparing v0.8.65 | High — 25 PRs merged today; architectural overhaul |

**Key Observation:** OpenAI Codex and Claude Code command the largest engaged communities (269/271👍 issues), while DeepSeek/CodeWhale shows the highest development velocity (25 PRs/day) as it undergoes architectural transformation.

---

## 3. Shared Feature Directions

### Requirements Appearing Across Multiple Tool Communities

| Feature Need | Affected Tools | Specific Requirements |
|-------------|----------------|----------------------|
| **MCP/Plugin Ecosystem Maturity** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi, CodeWhale | Subagent MCP config propagation (#1942 Kimi), MCP auth overhaul (#12308 OpenCode, #6040 Pi), MCP tool discovery (#3562 CodeWhale), auto-reload on config change (#24057 Claude Code) |
| **Skills/Plugin Organization** | Claude Code (#10238, 159👍), GitHub Copilot (#1632, 21👍), OpenCode, Gemini CLI | Subdirectory support, hierarchical organization, flat-file limits are universal |
| **Token Cost Transparency & Control** | Claude Code (#42249), OpenAI Codex (#28879, #14593), Kimi (#1994) | Abnormal consumption, 10-20× cost spikes, billing model confusion — the #1 cross-cutting pain point |
| **Multi-Agent Architecture** | Claude Code, OpenAI Codex (#29710), Gemini CLI, Kimi (#1942), Pi (#6054), CodeWhale | Subagent config inheritance, parallel execution, agent autonomy boundaries |
| **Context Compaction Efficiency** | OpenAI Codex (#29356), Kimi (#2472), OpenCode (#23556) | Token waste on compaction, loss of operational context, MCP tool loss post-compaction |
| **IDE & Platform Expansion** | Claude Code (#47166 JetBrains), GitHub Copilot (#3924 mobile), OpenCode, Gemini CLI | JetBrains plugins, GitLab integration, mobile remote parity |
| **Security & Redaction** | Gemini CLI (#27966, #26525), OpenCode (#33463), Qwen Code (#5834), Claude Code (#70582) | Case-insensitive path blocklists, secret redaction before model transmission, prompt injection fixes |
| **Stream/Connection Reliability** | Pi (#4945, 30👍), OpenCode (#33721), Claude Code (#69238), Qwen Code (#5827) | Hung streams, invisible failures, idle timeout handling |
| **Agent Autonomy Guardrails** | Gemini CLI (#22672), CodeWhale (#3275, #3466) | Destructive behavior prevention, granular approval control, YOLO mode semantics |
| **CLI/Config UX Polish** | Claude Code (#2254 banner), Kimi (#1377 vim keys), GitHub Copilot (#2419 keybindings) | Welcome banners, keyboard navigation, configurable hotkeys |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|------------|-------------|------------|-------------------|-----------|----------|-----|-----------|-----------|
| **Primary Model** | Claude (Anthropic) | GPT-5.5 (OpenAI) | Gemini (Google) | Multi-model (GPT-4o, Claude) | K2.6 (Moonshot) | Multi-provider | Multi-provider | Qwen (Alibaba) | Multi-provider (ex-DeepSeek) |
| **Target User** | Enterprise dev teams | Plus/Pro subscribers | Google ecosystem | GitHub ecosystem | Chinese market | Open-source community | Open-source devs | Chinese/global devs | Power users (Fleet) |
| **Design Philosophy** | Reliability-first | Scale-first | Security-aware | GitHub-native | Lightweight | Local-first | Extensible | Multi-platform | Multi-provider, modular |
| **Key Differentiator** | Skills system, MCP hooks | Ultra reasoning effort, agent modes | Auto Memory, subagent recovery | Plugin hooks, enterprise config | Simple CLI, K2.6 efficiency | MCP resource subscriptions | Parallel agent tasks | Voice dictation, /loop cron | Fleet loadout, /provider dashboard |
| **Weakness** | VSCode/GitLab gaps | Token cost unpredictability | Subagent reliability | Quota accounting bugs | Feature velocity | Upgrade regressions | Stream reliability | CI blind spots | Agent over-autonomy |
| **Release Velocity** | ~3-5 days per minor | Daily alphas | Weekly | ~2 weeks | Slowing | ~1 week | Daily | ~3 days | Daily (architectural) |

**Emerging Differentiation Pattern:** The ecosystem is dividing into **enterprise battle-hardened** (Claude Code, Copilot CLI) vs. **innovation-driven** (OpenCode, Pi, CodeWhale). OpenAI Codex occupies a unique position — massive community but facing trust erosion over token costs.

---

## 5. Community Momentum & Maturity

| Tool | Community Size Signal | Development Velocity | Issue Response Quality | Maturity Assessment |
|------|---------------------|---------------------|-----------------------|-------------------|
| **Claude Code** | ★★★★★ (159👍 top issue) | ★★★★☆ (steady releases) | ★★★★★ (CLOSED issues well-tracked) | **Enterprise Ready** |
| **OpenAI Codex** | ★★★★★ (620 comments on #14593) | ★★★★★ (5 alphas/day) | ★★★★☆ (investigating top bugs) | **Scale Challenge** — community outpacing fixes |
| **Gemini CLI** | ★★★☆☆ (P1 bugs, moderate comments) | ★★★★☆ (10 PRs/day) | ★★★☆☆ (P1 bugs open long periods) | **Active Development** |
| **GitHub Copilot CLI** | ★★★☆☆ (21👍 top feature) | ★★☆☆☆ (1 PR/day) | ★★★★☆ (v1.0.65 fixing UX issues) | **Stable** — incremental improvement |
| **Kimi Code CLI** | ★★☆☆☆ (7👍 billing issue) | ★☆☆☆☆ (2 PRs/day) | ★★★☆☆ (bugs open 5+ months) | **Maintenance Mode** |
| **OpenCode** | ★★★★☆ (39👍 privacy issue) | ★★★★★ (10 PRs/day) | ★★★★★ (active MCP PR stack) | **Rapid Innovation** |
| **Pi** | ★★★★☆ (30👍 stream reliability) | ★★★★★ (10 PRs/day) | ★★★★★ (closed stream fix PR) | **Fast Iteration** — provider expansion |
| **Qwen Code** | ★★★☆☆ (P1 security fixed same day) | ★★★★☆ (10 PRs/day) | ★★★★☆ (quick security response) | **Security-Conscious Growth** |
| **CodeWhale** | ★★★☆☆ (12 comments top bug) | ★★★★★ (25 PRs/day) | ★★★★★ (massive architectural PRs) | **Architectural Transformation** — highest velocity |

**Momentum Leaders:** OpenAI Codex (largest community), CodeWhale (highest dev velocity), OpenCode and Pi (strong community + rapid innovation)

**At Risk:** Kimi Code CLI (lowest activity, critical billing bug unresolved for months)

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **Token Cost Crisis is Systemic** — Three major tools (Claude Code, OpenAI Codex, Kimi Code) are facing community backlash over unpredictable consumption. This is not a single-vendor issue; it reflects fundamental pricing model tension in AI-assisted development. **Action:** Developers should audit token usage patterns and demand per-query or hybrid pricing from vendors.

2. **Multi-Agent is the New Default** — Every tool is investing in subagent/multi-agent architectures. The community pain points are converging: config inheritance, parallel execution, and autonomy boundaries. **Signal:** Expect "agent orchestration layers" to become a standard CLI component within 6 months.

3. **MCP is Winning as the Plugin Standard** — MCP integration is now a competitive requirement. Five of nine tools have active MCP-related issues or PRs. The key unsolved problems: authentication (OAuth, Entra), resource subscriptions, and connection resilience. **Signal:** Tools without robust MCP support will struggle for ecosystem adoption.

4. **Enterprise Requirements are Hardening** — Configuration-as-code, secrets management, SSO/OAuth, and admin-controlled defaults are appearing across Claude Code, OpenAI Codex, and GitHub Copilot CLI. **Signal:** Enterprise adoption is accelerating, and tools must offer Git-native config, env var injection, and tiered access control.

5. **Local-First is Growing** — Pi (#3357, 37👍) and OpenCode's "local-first" promise (despite the privacy incident) show strong demand for offline-capable, self-hosted workflows. **Signal:** Expect more tools to offer local model support, even as cloud features dominate marketing.

6. **Terminal UX is Underinvested** — Across all tools, terminal rendering issues (scrollback, line clipping, suspension by Ctrl+Z) remain unresolved. This is a maturity gap — CLI tools that ignore terminal fundamentals risk losing power users to competitors. **Signal:** The next UX battleground will be "terminal-native" vs. "web-emulated" interactions.

7. **Security is Becoming Community-Driven** — External contributors are submitting security PRs to Gemini CLI, OpenCode, and Qwen Code. The "path traversal" and "command injection" vulnerability class is being actively hunted. **Signal:** Expect more CVEs in AI CLI tools as usage scales; security hardening will be a competitive differentiator.

### Recommendations for Technical Decision-Makers

- **For cost-sensitive teams:** Monitor OpenAI Codex token consumption closely; consider Claude Code or Pi as alternatives
- **For multi-provider flexibility:** OpenCode and Pi offer the best provider abstraction layers
- **For enterprise deployment:** Claude Code and GitHub Copilot CLI have the strongest admin controls
- **For open-source projects:** Gemini CLI and CodeWhale have the most active external contributor communities
- **For Chinese-market development:** Qwen Code and Kimi Code are the primary options, but CodeWhale is gaining traction

---

*Report generated 2026-06-25 from community digest data across 9 AI CLI tools. Data reflects last 24 hours of activity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the provided data.

---

## Claude Code Skills Community Highlights Report (Data as of 2026-06-25)

### 1. Top Skills Ranking

The following pull requests represent the most-discussed and highest-activity Skill submissions, ranked by community engagement.

1.  **`skill-creator` Overhaul (PR #1298)**
    - **Functionality:** Fixes a critical bug in the official `skill-creator` tool where `run_eval.py` always reported a 0% recall rate, rendering the description-optimization loop useless. Addresses Windows stream reading, trigger detection, and parallel worker issues.
    - **Discussion:** This is the most active PR, directly addressing Issue #556 (a major community blocker). The discussion centers on root-cause analysis of the 0% recall bug and multi-platform compatibility.
    - **Status:** Open
    - **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Document Typography Skill (PR #514)**
    - **Functionality:** A quality-of-life skill that prevents common typographic errors in AI-generated documents, such as orphaned words, widowed paragraphs, and numbering misalignment.
    - **Discussion:** Received strong implicit support, as it solves a universal pain point for Claude-generated documents. The focus is on the skill’s specificity and immediate utility.
    - **Status:** Open
    - **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **ODT Skill (PR #486)**
    - **Functionality:** Enables Claude to create, fill, read, and convert OpenDocument Format files (.odt, .ods), filling a major gap in document format support.
    - **Discussion:** High demand from users who rely on LibreOffice or other open-source office suites. The conversation covers template filling and ODT-to-HTML conversion.
    - **Status:** Open
    - **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **Frontend-Design Skill Improvement (PR #210)**
    - **Functionality:** A significant revision to the existing `frontend-design` skill to improve clarity, actionability, and ensure instructions are executable within a single conversation.
    - **Discussion:** Highlights a community desire for highly actionable, non-verbose skills. The author focused on removing ambiguity and steering Claude’s behavior precisely.
    - **Status:** Open
    - **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

5.  **Skill Quality & Security Analyzers (PR #83)**
    - **Functionality:** Adds two "meta-skills": one for evaluating the quality of other skills across five dimensions, and one for analyzing their security posture.
    - **Discussion:** A forward-looking contribution that addresses the need for a quality assurance and security framework within the ecosystem. Long-standing with consistent interest.
    - **Status:** Open
    - **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

6.  **Testing-Patterns Skill (PR #723)**
    - **Functionality:** A comprehensive skill covering the full testing stack, including unit testing (AAA pattern), React component testing, and end-to-end workflows.
    - **Discussion:** Addresses a clear demand for automated testing guidance. The skill’s scope and structured approach were praised.
    - **Status:** Open
    - **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

7.  **AppDeploy Skill (PR #360)**
    - **Functionality:** Allows Claude to deploy and manage full-stack web applications using the AppDeploy platform, including lifecycle management and status checks.
    - **Discussion:** Represents a strong interest in DevOps capabilities. The skill bridges the gap between code generation and deployment.
    - **Status:** Open
    - **Link:** [PR #360](https://github.com/anthropics/skills/pull/360)

### 2. Community Demand Trends

Analysis of open Issues reveals the following most-anticipated Skill directions:

- **Security & Trust Boundaries:** Issue #492 is a high-comment concern about community skills being distributed under the official `anthropic/` namespace, creating a risk of trust boundary abuse. This signals a strong demand for a security vetting process or a formal namespace distinction.
- **Org-Wide Skill Management:** Issue #228 calls for the ability to share skills directly within an organization via a shared library or link, rather than manual file transfer. This is a top-voted feature request for enterprise adoption.
- **Skill-Creator Reliability:** Issues #556, #1169, and #1061 are all related to the `skill-creator` tool producing unreliable results (0% recall) or failing on Windows. This is the single most critical blocker for power users and is driving significant PR activity.
- **Skill Duplication & Ecosystem Quality:** Issue #189 highlights a problem where installing different plugin packages results in duplicate skills. This indicates a need for better dependency management and package deduplication.
- **Agent Governance:** Issue #412 proposes a skill for safety patterns in AI agent systems, including policy enforcement and audit trails. This reflects a maturing interest in safe, governed agent behavior.

### 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong potential to land soon, given the volume of attention and fixes they bring to the core tooling:

- **`skill-creator` Windows Fixes (PR #1099, #1050, #1323):** A cluster of PRs aimed at fixing the `skill-creator` on Windows. #1099 and #1050 address subprocess and encoding bugs, while #1323 fixes the core trigger detection logic. These are critical to making the ecosystem cross-platform.
    - **Links:** [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1323](https://github.com/anthropics/skills/pull/1323)
- **YAML Validation Improvements (PR #539, #361):** These PRs add pre-parse checks to catch unquoted YAML special characters in skill descriptions, preventing silent parsing failures. This is a small but high-impact fix that improves tooling robustness.
    - **Links:** [PR #539](https://github.com/anthropics/skills/pull/539), [PR #361](https://github.com/anthropics/skills/pull/361)
- **UTF-8 Handling in Quick Validate (PR #362):** Prevents crashes in the `quick_validate.py` script when processing multi-byte characters. Essential for non-English skill descriptions.
    - **Link:** [PR #362](https://github.com/anthropics/skills/pull/362)

### 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for a reliable, cross-platform `skill-creator` tool, as the current bugs (primarily 0% recall on evaluations and Windows incompatibility) are the single largest blocker to skill development and optimization.**


---

# Claude Code Community Digest — 2026-06-25

## Today's Highlights

Version **v2.1.191** shipped with a highly requested `/rewind` capability that lets users resume conversations after `/clear`, alongside fixes for scroll position jumping and background agent resurrection bugs. Meanwhile, the community is closely watching **Issue #52151** (48 comments) — a Bedrock-specific bug where the VSCode extension renders "Unhandled case" errors while the CLI works fine — and the long-running **#10238** request for subdirectory support in skills (159 👍) continues to dominate feature demand.

---

## Releases

### v2.1.191 (latest)
- **New:** `/rewind` support — resume a conversation from before `/clear` was run
- **Fixed:** Scroll position no longer jumps to bottom while reading earlier output during streaming
- **Fixed:** Background agents no longer resurrect after being stopped via the tasks panel

### v2.1.190
- Bug fixes and reliability improvements (no detailed changelog)

---

## Hot Issues (Top 10 by Community Activity)

1. **[#52151 — Bedrock: VSCode extension stream ends with 0 events; fallback renders as "Unhandled case"](https://github.com/anthropics/claude-code/issues/52151)**  
   *CLOSED* — 48 comments, 34 👍  
   **Why it matters:** A platform-specific blocker for AWS Bedrock users on macOS. The CLI works correctly but the VSCode GUI fails after several turns, producing a cryptic `[object Object]` error. High-priority for enterprise teams using Bedrock.

2. **[#10238 — Add support for subdirectories in skills](https://github.com/anthropics/claude-code/issues/10238)**  
   *OPEN* — 45 comments, 159 👍  
   **Why it matters:** The most popular open feature request. Teams with large skill libraries are forced to flatten everything into a single directory. The author describes maintaining 40+ skills that are "impossible to manage" without nesting.

3. **[#12346 — Add GitLab Integration](https://github.com/anthropics/claude-code/issues/12346)**  
   *OPEN* — 44 comments, 108 👍  
   **Why it matters:** GitHub-only integration is a hard blocker for organizations standardized on GitLab. Includes requests for MR review, repository connection, and mobile access.

4. **[#2254 — Disable the welcome banner](https://github.com/anthropics/claude-code/issues/2254)**  
   *OPEN* — 28 comments, 91 👍  
   **Why it matters:** A long-standing quality-of-life request. Power users find the terminal welcome screen and tips disruptive, especially in automated/scripted workflows.

5. **[#24057 — MCP servers, hooks, and plugins should auto-reload when config changes](https://github.com/anthropics/claude-code/issues/24057)**  
   *OPEN* — 28 comments, 13 👍  
   **Why it matters:** Config changes require full session restarts, described by the author as "rebooting Windows 95 every time." Three restarts in a single session is a real productivity hit.

6. **[#42249 — Extreme token consumption — quota depleted in minutes](https://github.com/anthropics/claude-code/issues/42249)**  
   *OPEN* — 25 comments, 17 👍  
   **Why it matters:** Normal dev tasks deplete daily limits in ~1 hour. Multiple users corroborate abnormal token usage patterns, which has direct cost implications for Pro subscribers.

7. **[#69238 — "No response from API" error when Advisor is triggered](https://github.com/anthropics/claude-code/issues/69238)**  
   *OPEN* — 24 comments, 34 👍  
   **Why it matters:** Advisor mode (using Opus 4.8) consistently fails with "No response from API — retrying in 2m 25s." Users report 10+ consecutive retries, effectively breaking the feature.

8. **[#12433 — macOS Activity Monitor shows version number instead of 'claude' as process name](https://github.com/anthropics/claude-code/issues/12433)**  
   *OPEN* — 22 comments, 23 👍  
   **Why it matters:** A minor but widely noticed UX issue. Process names like `2.0.53` make it impossible to identify Claude Code in Activity Monitor at a glance.

9. **[#47166 — JetBrains needs a real Claude AI Assist interface plugin](https://github.com/anthropics/claude-code/issues/47166)**  
   *OPEN* — 26 comments, 2 👍  
   **Why it matters:** The IntelliJ ecosystem is underserved. The request is for a native plugin, not just a generic AI assistant. Community interest is high despite lower 👍 counts.

10. **[#70309 — No way to seek/jump in long scrollback — native terminal scrollbar lost](https://github.com/anthropics/claude-code/issues/70309)**  
    *OPEN* — 1 comment, 2 👍  
    **Why it matters:** A recent regression reported across macOS Terminal and Konsole over RDP. The in-app scroll is "painfully slow" and native terminal scrollbars don't work, making long outputs unreadable.

---

## Key PR Progress

1. **[#70634 — fix: handle server rate limiting during normal usage](https://github.com/anthropics/claude-code/pull/70634)**  
   **Why it matters:** Addresses a common frustration where API rate limits hit during normal workflows. Closes #70631.

2. **[#70633 — fix: Handle rate limiting headers for Anthropic API](https://github.com/anthropics/claude-code/pull/70633)**  
   **Why it matters:** Properly parses `Retry-After` and rate limit headers from Anthropic's API. Closes #70630.

3. **[#70582 — fix: the application accepts user-controlled URLs (security fix in llm.py)](https://github.com/anthropics/claude-code/pull/70582)**  
   **Why it matters:** Critical severity SSRF vulnerability in `plugins/security-guidance/hooks/llm.py`. Scanned by `multi_agent_ai` — addresses user-controlled URL injection.

4. **[#70538 — fix: sanitize subprocess call in gitutil.py](https://github.com/anthropics/claude-code/pull/70538)**  
   **Why it matters:** Critical severity command injection vulnerability in Git-related hooks. Prevents malicious input from reaching subprocess calls.

5. **[#66854 — toekn](https://github.com/anthropics/claude-code/pull/66854)**  
   **Why it matters:** (Title only — description missing) Created 15 days ago, still open. Likely a token-related fix or feature given the naming.

*Note: Only 5 PRs were updated in the last 24 hours in the dataset.*

---

## Feature Request Trends

| Theme | Supporting Issues | Community Signal |
|-------|------------------|------------------|
| **IDE & Platform Expansion** | #47166 (JetBrains), #12346 (GitLab), #54461 (Windows desktop) | High — enterprises need cross-platform support |
| **Skills & Configuration Improvements** | #10238 (subdirectories), #24057 (auto-reload), #2254 (disable banner) | Very High — 159 👍 for subdirectories alone |
| **Context & Token Management** | #33026 (self-compaction), #42249 (extreme consumption), #53987 (opusplan 1M) | Growing — cost and performance concerns |
| **Mobile & Remote Workflows** | #70699 (remote attach from phone), #12346 (mobile access) | Emerging — new `remote-control` mode raising expectations |
| **Model Behavior & Presets** | #67942 (subagent model inheritance), #65512 (opusplan regression), #66407 (model auto-switch) | Active — users want fine-grained model control |

---

## Developer Pain Points

1. **Rate Limiting & API Errors** — Multiple issues report "No response from API" errors (#69238) and rapid quota depletion (#42249). Two new PRs (#70633, #70634) aim to improve rate limit handling, suggesting Anthropic is aware.

2. **Session Restart Requirements** — Config changes for MCP servers, hooks, and plugins force full restart (#24057). Described as a major workflow breaker, especially during iterative configuration.

3. **Model Behavior Regressions** — The `opusplan` preset has degraded: it now downgrades from Opus to Sonnet past 200k context (#65512), and subagents inherit the wrong model (#67942). Both are recent regressions.

4. **Windows Ecosystem Friction** — Defender real-time scanning causes `EBUSY` errors during plugin install (#67595), Cowork models silently change on app update (#66407), and Agent View causes rendering stutter with orphan processes (#67406).

5. **Auth & Subscription Confusion** — Users report paid Pro subscriptions not being recognized (#69786, #62035), credentials not isolating per config directory (#70697), and Cowork authentication failing after updates (#61563, #53439).

6. **Scrollback & Terminal UX** — Long outputs are nearly unreadable after regression #70309, and the welcome banner (#2254) continues to frustrate terminal power users after a full year since filing.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*  
*Digest generated: 2026-06-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-25

## Today's Highlights
A major surge in **community concern over rate-limit cost spikes** continues to dominate, with two top-voted issues reporting 10–20× token cost increases since mid-June. Meanwhile, OpenAI is shipping significant **architecture changes**: multi-agent mode is being derived from Ultra effort, a new `clock.sleep` tool is landing, and admin-managed default model settings are arriving for enterprise deployments. Five Rust alpha releases (v0.143.0-alpha.11–15) also shipped in the last 24 hours.

## Releases
Five **Rust alpha releases** were published today, all versioned `0.143.0-alpha.11` through `0.143.0-alpha.15`. No changelogs or feature summaries were provided with these releases; they appear to be incremental internal builds.

## Hot Issues

1. **[#28879 – Rate-limit cost jumped ~10-20x since June 16](https://github.com/openai/codex/issues/28879)** (🔥 269 👍, 133 comments)  
   A Plus-plan user reports Codex (GPT-5.5) burning through its 5-hour budget in 2–3 prompts instead of 20+. Session logs show limit-% consumed per token increased 10–20×. This is the single most active open bug, with the OpenAI team investigating.

2. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (👍 271, 620 comments)  
   A long-running megathread (since March) with massive community engagement. Users on Business plans report unexpectedly rapid token consumption. The sheer comment count suggests this is a systemic concern beyond any single plan tier.

3. **[#13733 – Background process polling wastes tokens](https://github.com/openai/codex/issues/13733)** (👍 23, 29 comments)  
   Each `cargo build` or `cargo test` polling iteration triggers a full API round-trip with entire conversation history. This is a specific technical root cause that exacerbates the broader token-burning complaints.

4. **[#29072 – Windows sandbox setup fails on apply_patch](https://github.com/openai/codex/issues/29072)** (👍 16, 17 comments)  
   `apply_patch` calls fail because `codex-windows-sandbox-setup.exe` cannot launch from the package path. Windows users are effectively blocked from patch application.

5. **[#2916 – OpenAI service tier support](https://github.com/openai/codex/issues/2916)** (👍 50, 17 comments)  
   A long-standing feature request (Aug 2025) for CLI control over API service tiers to optimize cost vs. latency. Still open and actively discussed.

6. **[#21753 – Full Claude Code Hook Parity](https://github.com/openai/codex/issues/21753)** (👍 17, 18 comments)  
   Umbrella tracker for 29+ hooks to match Claude Code’s automation surface. High community interest in lifecycle and event-driven automation.

7. **[#25667 – macOS leaves ~965MB code_sign_clone directories after quit](https://github.com/openai/codex/issues/25667)** (👍 18, 12 comments)  
   A storage leak where each macOS app launch leaves nearly 1GB of unreclaimed cloned directories. Significant for developer workstation hygiene.

8. **[#29356 – Context compaction loses operational continuity](https://github.com/openai/codex/issues/29356)** (0 👍, 13 comments)  
   PRO users report that automatic context compaction in long tasks drops operational context. Suggested fix: preserve the last 5 steps verbatim.

9. **[#19871 – MCP tool invocation regressed for Ollama/local providers](https://github.com/openai/codex/issues/19871)** (👍 5, 10 comments)  
   Custom/local model providers (Ollama Responses API) broke in v0.117.0+. Users bisected the regression and confirmed it persists through v0.125.0+.

10. **[#9226 – Codex cannot discover scripts in skill’s scripts directory](https://github.com/openai/codex/issues/9226)** (👍 8, 7 comments)  
    A long-standing bug (Jan 2026) where Codex CLI fails to locate scripts inside skill directories. Limits the skills ecosystem.

## Key PR Progress

1. **[#29923 – Support external clock sleeps](https://github.com/openai/codex/pull/29923)**
   Routes `clock.sleep` through a configured time provider, raises max sleep to 12 hours, and adds `currentTime/sleep` and `currentTime/wake` notifications for external clocks. Enables long-running background automation.

2. **[#29710 – Derive multi-agent mode from Ultra effort](https://github.com/openai/codex/pull/29710)**
   Eliminates competing client-selected multi-agent mode by deriving effective mode from the Ultra turn. Makes lifecycle deterministic across resume, fork, and subagent spawn. (Code-reviewed, closed/merged.)

3. **[#29683 – Add managed new-thread model settings](https://github.com/openai/codex/pull/29683)**
   Allows admins to set persistent defaults for model, reasoning effort, and service tier on new threads. These outrank `config.toml` but yield to explicit user choices.

4. **[#29709 – Add gated Ultra reasoning effort](https://github.com/openai/codex/pull/29709)**
   Ultra is a product-level maximum reasoning effort, gated behind both the model catalog and `multi_agent_mode` feature flag. No new backend token needed.

5. **[#29754 – Preserve live turn history across reconnects](https://github.com/openai/codex/pull/29754)**
   App-server reconnects now reconstruct cumulative, authoritative turn history. Materializes deltas and completions in the listener-owned live history.

6. **[#29920 – Retry failed Codex Apps MCP startup](https://github.com/openai/codex/pull/29920)**
   The host-owned MCP manager now retries failed connections instead of storing a shared future that can fail silently. Increases reliability of the Apps MCP endpoint.

7. **[#29917 – Exec-server: handle post-init requests concurrently](https://github.com/openai/codex/pull/29917)**
   Independent exec-server RPCs can now make progress while another request is long-polling, without weakening the init ordering contract. Improves throughput.

8. **[#29910 – Nest sleep config under current time reminder](https://github.com/openai/codex/pull/29910)**
   Moves `sleep_tool` enablement under `[features.current_time_reminder]`. Removes standalone `Feature::SleepTool`. Config schema updated accordingly.

9. **[#26705 – TUI Plugin Sharing 5 – polish remote plugin catalog rows](https://github.com/openai/codex/pull/26705)**
   Final PR in the plugin-sharing stack: admin-disabled plugins show as blocked/view-only, admin-installed plugins sort with installed plugins, and plugin tabs are polished.

10. **[#29030 – Respect image generation feature gate for standalone tool](https://github.com/openai/codex/pull/29030)**
    Ensures standalone `image_gen.imagegen` checks the same feature gate as hosted image generation. Closes a gap where the standalone path could bypass gating. (Closed/merged.)

## Feature Request Trends
- **Hook/Automation parity with Claude Code** — The #21753 umbrella request for 29+ lifecycle hooks has strong community backing, indicating demand for deeper programmatic control over Codex sessions.
- **Inbound session control** — Multiple requests seek ways to push external notifications into active CLI sessions (🔒 [#15299]) or inject command outputs from background processes ([#22003]).
- **Service tier control** — Long-running demand for explicit `service_tier` configuration to manage cost/latency trade-offs ([#2916]), now being partially addressed by enterprise admin settings in PR #29683.
- **CLI/App session sync** — Users want sessions to stay in sync across devices and terminals when using `codex resume` ([#14722]), with live updates printed in original sessions.

## Developer Pain Points
1. **Unpredictable token consumption** — The top two issues (🔥 271 + 269 👍) report 10–20× increased cost-per-token since mid-June. This is the #1 community frustration, affecting Plus, Business, and Pro plans. Users report budgets draining in 2–3 prompts.
2. **Polling wastes tokens** — Background process polling triggers full API turns with entire history, burning tokens even when nothing meaningful changes ([#13733]).
3. **Context compaction breaks long tasks** — Automatic compaction loses operational context, forcing manual restarts ([#29356]). PRO users are particularly affected.
4. **Windows sandbox is broken** — Patch application fails due to executable launch path issues ([#29072]). Combined with other Windows-specific bugs (blank editor panel [#21863], crash-on-power-loss [#26990]), Windows users face a brittle experience.
5. **Subagent lifecycle problems** — Orphaned subagents that cannot be closed ([#24389], [#19197]) lead to stuck threads that may hang for 8+ hours, locking up the desktop app.
6. **MCP reliability for custom models** — MCP tool invocation regressed for local/Ollama providers in v0.117.0+ and remains unrepaired through current versions ([#19871]).
7. **macOS storage leak** — ~965MB `code_sign_clone` directories left after each app launch ([#25667]) compounds over time for active users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-25

## Today's Highlights

The Gemini CLI team is in active maintenance mode with no new releases in the last 24 hours, but a significant **caretaker agent webhook ingestion service (PR #28015)** remains under review. Community issues continue to cluster around **subagent reliability**, **browser agent configuration bugs**, and **Auto Memory system quality**, with a growing focus on **AST-aware code navigation** and **deterministic secret redaction**. Notably, a **security PR enforcing case-insensitive path blocklists (PR #27966)** is pending review, addressing a reported prompt injection vulnerability.

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

### 1. [Subagent recovery after MAX_TURNS reported as GOAL success (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)
- **Priority:** P1 | **Comments:** 8 | **Reactions:** 👍2
- **What:** The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even after hitting `MAX_TURNS` without performing any meaningful analysis.
- **Why it matters:** This is a silent failure: users get a false success signal while the agent never completed its task. It erodes trust in subagent outcomes.

### 2. [Generalist agent hangs indefinitely (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)
- **Priority:** P1 | **Comments:** 7 | **Reactions:** 👍8
- **What:** The generalist agent hangs forever when invoked (e.g., for folder creation), requiring manual cancellation after up to an hour.
- **Why it matters:** This is the top-voted bug in this digest. Community workaround — disabling subagent delegation — works, but defeats the purpose of the agent.

### 3. [Gemini does not use skills and sub-agents enough (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)
- **Priority:** P2 | **Comments:** 6 | **Reactions:** 👍0
- **What:** Even with well-described custom skills (e.g., `gradle`, `git`), the model rarely invokes them autonomously.
- **Why it matters:** Undermines the value of the skill system. Users invest in skill definitions that go unused.

### 4. [Shell command execution stuck with "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)
- **Priority:** P1 | **Comments:** 4 | **Reactions:** 👍3
- **What:** After executing simple CLI commands that should exit cleanly, Gemini remains stuck showing the command as active and awaiting user input.
- **Why it matters:** Breaks the core interactive workflow. Affected users must cancel and re-prompt.

### 5. [Browser subagent fails in Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983)
- **Priority:** P1 | **Comments:** 4 | **Reactions:** 👍1
- **What:** The browser subagent crashes on Wayland display servers, showing a `GOAL` termination reason despite failure.
- **Why it matters:** Linux Wayland users are blocked from using browser automation, and the false success flag is misleading.

### 6. [Browser Agent ignores settings.json overrides (#22267)](https://github.com/google-gemini/gemini-cli/issues/22267)
- **Priority:** P2 | **Comments:** 3 | **Reactions:** 👍0
- **What:** Settings like `maxTurns` configured in `settings.json` are silently ignored by `BrowserManager`.
- **Why it matters:** Users cannot tune browser agent behavior, leading to unpredictable resource usage and session length.

### 7. [Add deterministic redaction and reduce Auto Memory logging (#26525)](https://github.com/google-gemini/gemini-cli/issues/26525)
- **Priority:** P2 | **Comments:** 5 | **Reactions:** 👍0
- **What:** Auto Memory sends transcript content to the extraction model before redacting secrets, and the service may log unredacted skill content.
- **Why it matters:** A security and privacy risk: secrets can be leaked to the model or logs before redaction runs.

### 8. [Stop Auto Memory from retrying low-signal sessions (#26522)](https://github.com/google-gemini/gemini-cli/issues/26522)
- **Priority:** P2 | **Comments:** 5 | **Reactions:** 👍0
- **What:** Low-signal sessions that are skipped by the extraction agent remain "unprocessed" and get re-surfaced indefinitely.
- **Why it matters:** Creates infinite retry loops, consuming tokens and adding noise to memory stores.

### 9. [Gemini CLI encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)
- **Priority:** P2 | **Comments:** 3 | **Reactions:** 👍0
- **What:** A 400 error fires when the tool count exceeds 128 (the issue title mentions >400, description says >128).
- **Why it matters:** As users add more skills/extensions, tool bloat becomes a hard blocker. No graceful degradation exists.

### 10. [Agent should stop/discourage destructive behavior (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672)
- **Priority:** P2 | **Comments:** 3 | **Reactions:** 👍1
- **What:** The model occasionally uses destructive commands (`git reset`, `--force`) where safer alternatives exist, and may modify databases without proper caution.
- **Why it matters:** Safety concern — users risk data loss from unchecked agent actions.

---

## Key PR Progress

### 1. [feat(caretaker): implement Cloud Run webhook ingestion service (#28015)](https://github.com/google-gemini/gemini-cli/pull/28015)
- **Size:** L/XL | **Status:** Open
- **Summary:** Implements a Cloud Run service that verifies GitHub webhook signatures, stores issues in Firestore, and publishes sanitized metadata to Pub/Sub.
- **Impact:** Foundation for the Caretaker Agent — automated issue triage pipeline.

### 2. [fix(security): enforce case-insensitive sensitive path blocklist and vscode hitl (#27966)](https://github.com/google-gemini/gemini-cli/pull/27966)
- **Size:** M | **Status:** Open, needs review
- **Summary:** Enforces strict case-insensitive blocklist for `.git`, `.env`, `node_modules` to prevent bypass via casing tricks.
- **Impact:** Security-critical fix — closes a reported prompt injection path.

### 3. [fix(core): strip thoughts from scrubbed history turns and resolve thought leakage (#27971)](https://github.com/google-gemini/gemini-cli/pull/27971)
- **Size:** M | **Status:** Open, needs review
- **Summary:** Removes the model's internal monologue from plain-text history to prevent confusion and infinite loop monologues.
- **Impact:** Fixes a subtle hallucination-inducing bug in multi-turn sessions.

### 4. [fix(core-tools): resolve defensive path resolution for @-reference files (#28053)](https://github.com/google-gemini/gemini-cli/pull/28053)
- **Size:** XL | **Status:** Needs issue
- **Summary:** Handles file paths prefixed with `@` (e.g., `@policies/new-policies.txt`), fixing a `File not found` bug.
- **Impact:** Critical for usability — model often uses `@` references that silently fail.

### 5. [fix(mcp): scope resource resolution to prevent cross-server URI confusion (#27964)](https://github.com/google-gemini/gemini-cli/pull/27964)
- **Size:** M | **Status:** Closed
- **Summary:** Prevents one MCP server from silently shadowing another's resources via colliding URIs.
- **Impact:** Security fix — prevents accidental data leaking between MCP servers.

### 6. [fix(auth): strip URL punctuation in sign-in errors (#28054)](https://github.com/google-gemini/gemini-cli/pull/28054)
- **Size:** S | **Status:** Open | **Help Wanted**
- **Summary:** Removes sentence-ending periods from URLs in sign-in error messages so links remain clickable.
- **Impact:** Small UX fix, but affects every user's sign-in flow.

### 7. [fix(ci): prevent workspace binary shadowing in release verification (#28132)](https://github.com/google-gemini/gemini-cli/pull/28132)
- **Size:** XS | **Status:** Closed
- **Summary:** Fixes a CI bug where integration tests ran against local workspace source instead of the published NPM bundle.
- **Impact:** Ensures release verification tests actually test the published artifact.

### 8. [perf: optimize VirtualizedList and fix click handling (#27636)](https://github.com/google-gemini/gemini-cli/pull/27636)
- **Size:** XL | **Status:** Needs issue | **Priority:** P1
- **Summary:** Optimizes VirtualizedList for large datasets, improves click handling, and updates terminal rendering.
- **Impact:** Performance improvement for users with long chat histories.

### 9. [feat: implement ADK agent session (#26680)](https://github.com/google-gemini/gemini-cli/pull/26680)
- **Size:** XL | **Status:** Closed
- **Summary:** Implements a new ADK (Agent Development Kit) session foundation.
- **Impact:** Architectural milestone — enables structured agent session management.

### 10. [feat(bot): enforce evaluation role, multi-iteration feedback loop (#26303)](https://github.com/google-gemini/gemini-cli/pull/26303)
- **Size:** L | **Status:** Closed
- **Summary:** Refines bot system prompts to resolve architectural conflicts, restricts critique agent to evaluation-only, and adds multi-iteration feedback.
- **Impact:** Improves bot's diagnostic accuracy and self-correction.

---

## Feature Request Trends

1. **AST-aware code understanding** — Multiple issues (e.g., #22745, #22746) request parsing codebases via AST for more precise file reads, method-bound navigation, and codebase mapping. Aims to reduce token waste and turn misalignment.

2. **Agent self-awareness** — Users want the CLI to understand its own CLI flags, hotkeys, and configuration to act as its own guide (#21432). Includes requests for subagent trajectory sharing via `/chat share` (#22598).

3. **Browser agent resilience** — Requests for automatic session takeover, lock recovery, and configuration override support (#22232, #22267). Users need reliable browser automation in varied environments.

4. **Destructive behavior guardrails** — A clear call for the agent to avoid destructive git operations and resource modifications (#22672) unless explicitly confirmed.

5. **Tool count scalability** — With >128 tools causing 400 errors (#24246), users want smarter tool scoping and agent-level tool selection.

---

## Developer Pain Points

| Pain Point | Frequency | Root Cause |
|---|---|---|
| **Subagent false success signals** | High (multiple P1 bugs) | Agents report `GOAL` termination even on `MAX_TURNS` or crashes |
| **Silent command hangs** | High (repeated in #25166, #21409) | Shell execution, generalist agent, and browser agent stall without feedback |
| **Auto Memory infinite retries** | Medium (#26522, #26523) | Low-signal sessions are never marked processed; malformed patches pile up |
| **Security/redaction gaps** | Medium (#26525, #27966) | Secrets sent to model before redaction; case-insensitive path bypass |
| **Configuration not respected** | Medium (#22267, #22093) | `settings.json` overrides ignored; subagents run despite being disabled |
| **Tool bloat errors** | Medium (#24246) | Hard 400 error when tool count exceeds ~128, no graceful fallback |
| **Thought leakage / hallucination chains** | Low but disruptive (#27971) | Model's internal reasoning leaks into history, causing infinite loops |

The community is increasingly vocal about **agent reliability** — particularly that subagents should fail explicitly rather than silently report success. The **Auto Memory system** is the most actively debated subsystem this week, with three co-authored issues by SandyTao520 (#26516, #26522, #26523) all targeting quality improvements. Meanwhile, external contributors are stepping up with security-focused PRs (e.g., herdiyana256's MCP fix, luisfelipe-alt's path blocklist), indicating a healthy open-source dynamic around hardening.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-25

## Today's Highlights

Version **v1.0.65** shipped yesterday, adding persistent working directories across sessions and smarter handling of slash-prefixed arguments. A fresh batch of UX-focused issues emerged around mobile remote session support and terminal input quirks, while the community continues to push for better plugin organization, configurable keybindings, and enterprise configuration management.

## Releases

**v1.0.65** (2026-06-24)  
[Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.65)
- `/cd` now persists the working directory across session resumes
- Custom agents in newly-changed directories are discovered automatically
- Commands with slash-prefixed string arguments (e.g. `--body "/azp run"`) no longer trigger spurious filesystem permission prompts
- Fullscreen timeline UI improvements

## Hot Issues

1. **[#2643 — preToolUse: silent command rewrite via updatedInput shows confirmation dialog even with permissionDecision: allow](https://github.com/github/copilot-cli/issues/2643)**  
   *11 comments, 2 👍*  
   Plugin hooks that silently rewrite commands still prompt users for confirmation, defeating the purpose of `permissionDecision: allow`. A long-standing blocker for fully autonomous workflows.

2. **[#1632 — Support subfolders for skills to better organize them](https://github.com/github/copilot-cli/issues/1632)**  
   *9 comments, 21 👍*  
   The most-upvoted open feature request. Users with 10+ custom skills hit a flat-folder limit and want hierarchical organization. Clear community consensus for this change.

3. **[#3832 — All models show as 'Blocked/Disabled' after June 16 outage](https://github.com/github/copilot-cli/issues/3832)**  
   *6 comments, 13 👍 (CLOSED)*  
   Post-outage state leak: the model selection UI remained broken for days, preventing any session starts. Likely a caching or state-reset bug that affected many users.

4. **[#3881 — Subtracted 5% for one request with 6x multiplier instead of 2%](https://github.com/github/copilot-cli/issues/3881)**  
   *3 comments*  
   Quota accounting bug where a Claude Sonnet 4.5 premium request deducted 5% instead of the expected 2%. User points to a clear arithmetic error in quota tracking.

5. **[#3913 — Model selection empty when resuming a session](https://github.com/github/copilot-cli/issues/3913)**  
   *3 comments (CLOSED)*  
   Duplicate-like issue to #3832, but specific to session resume. All models appear in the block list, making resume unusable. Fixed in v1.0.65.

6. **[#2419 — Configurable Key Bindings (Enabling Fast Model Switching)](https://github.com/github/copilot-cli/issues/2419)**  
   *2 comments, 5 👍*  
   Users want F-key shortcuts to switch models instantly, avoiding `/model` + memorized IDs. Directly related to the broader keybinding demand.

7. **[#3760 — CLI shows "ctrl+enter enqueue" but ctrl+enter adds a line break on Windows](https://github.com/github/copilot-cli/issues/3760)**  
   *1 comment*  
   UI/help text mismatch: the displayed shortcut is wrong for Windows users. Small but confusing UX bug.

8. **[#3692 — Escape should cancel current task and focus pending queued prompt](https://github.com/github/copilot-cli/issues/3692)**  
   *2 comments, 1 👍*  
   Escape currently drops both the running task and any queued prompt. Users expect only the active task to cancel, preserving the next queued message.

9. **[#3920 — Markdown renderer: two em-dashes trigger strikethrough](https://github.com/github/copilot-cli/issues/3920)**  
   *1 comment (CLOSED)*  
   A markdown rendering bug where `—` between two em-dashes is incorrectly parsed as strikethrough. Likely a regex edge case.

10. **[#3924, #3923, #3922 — Mobile app: missing !shell, file upload, and /slash command support](https://github.com/github/copilot-cli/issues/3924)**  
   *3 issues, 1 comment each*  
   A coordinated set of feature gaps from one user: GitHub mobile app remote sessions lack shell commands, file attachments, and slash command routing. Strong signal for mobile parity.

## Key PR Progress

1. **[#2587 — Add automated issue classification with GitHub Agentic Workflows](https://github.com/github/copilot-cli/pull/2587)**  
   *CLOSED*  
   AI-powered issue triage using `gh-aw` to auto-apply `area:` labels and `triage` tags. Improves maintainer workflow and issue organization.

## Feature Request Trends

- **Plugin & Skill Organization** (#1632, #3917): Flat-file limits frustrate power users; hierarchical structures and autocomplete for plugin management are top wants.
- **Configurable Keybindings** (#2419, #1729, #3138): Fast model switching, custom keybinds, and draft-preserving model changes are recurring themes.
- **Enterprise Configuration** (#3909, #3895): Admins want server-pushed settings (especially env vars) for local CLI installs, mirroring Codespaces secrets.
- **Mobile Remote Parity** (#3922–3924): Users expect full feature parity (shell commands, file upload, slash commands) in GitHub mobile app remote sessions.

## Developer Pain Points

- **Quota Accounting Bugs** (#3881): Incorrect premium request deductions erode trust in billing/usage tracking.
- **Session State Leaks** (#3832, #3913): Post-outage or post-resume state corruption blocks all model selection — a hard block for productivity.
- **Input & UI Inconsistencies** (#3760, #3918, #3919): Wrong shortcut hints, confusing "queued" vs "pending" terminology, and broken autocomplete behavior on `/cd` degrade daily workflow.
- **Proxy & Authentication Roadblocks** (#523, #2978, #3925): Kerberos, corporate proxies, and AppImage library leaks continue to block enterprise and Linux users from even starting sessions.
- **Plugin Hook Limitations** (#2643): The inability to silently rewrite commands via `preToolUse` prevents advanced automation use cases.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-06-25**

---

## 1. Today's Highlights
No new releases were published in the last 24 hours, but two long-standing pull requests—one fixing MCP config propagation to subagents and another adding vim-style keyboard navigation—were finally closed after months of development. Meanwhile, a critical billing calculation bug (#1994) continues to attract community attention, with users reporting that `kimiCode` token-based consumption allows only 2–3 queries per 2-hour session on the K2.6 model due to excessive chain-of-thought usage.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues (10 Most Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 640 | [Bug] Kimi CLI stuck in reading one file repeatedly / infinite loop | Affects users on Linux (Arch) with custom Anthropic endpoints; renders CLI unusable after file ingestion. | 14 comments, 1 👍; marked as **OPEN** for 5+ months – high priority for Arch users. |
| 1994 | [Bug] kimiCode usage calculation incorrect | Token-based billing on K2.6 burns 2-hour quota in 2 queries because of long chain-of-thought. Users expected request-count billing. | 7 comments, **7 👍**; strong community frustration, official docs discrepancy highlighted. |
| 2472 | [Enhancement] Context compaction reloads system prompt + project instructions (~20k tokens wasted) | Each compaction cycle re-reads `AGENTS.md`, skills, environment context instead of caching, wasting tokens in long sessions. | 0 comments, 0 👍; opened yesterday; critical for heavy users of context-aware workflows. |
| 2469 | [Bug] `kimi web` starts MCP servers from CLI installation directory, breaking workspace-relative tools | `/web` mode breaks MCP tools that rely on relative paths (e.g., `./scripts/...`). | 0 comments, 0 👍; closed same day but highlights a design fragility. |
| 2473 | [Bug] `/web` command error in kimi-code 0.19.2 | Web mode fails with unhandled error on startup for some users. | 0 comments, 0 👍; closed quickly, likely a transient regression. |
| 1377 | [PR] vim-style j/k keyboard navigation for approval & question prompts | Power users have been requesting terminal-native navigation for months; finally merged! | PR closed after 3 months; community interest in modal interaction patterns is high. |
| 1942 | [PR] Fix MCP config propagation to subagents and resume | Core fix: subagents (explore, coder, plan) never received MCP configs; resumed sessions also broke. | PR closed after 2 months; addresses a blocker for multi-agent workflows. |
| 1994 (follow-up) | [Discussion] Billing model confusion | Several users have opened duplicate issues about token consumption vs. request counting. | Growing consensus: need per-query or hybrid pricing. |
| 2469 (related) | [Bug] MCP workspace-relative paths | Linked to MCP config propagation; reveals that workspace detection logic is fragile for `kimi web`. | Closed quickly, but underlying architecture may need refactoring. |
| 2472 (related) | [Enhancement] Context compaction inefficiency | Token waste issue is likely affecting all users with large `AGENTS.md` or project instructions. | Newest issue (June 24); expect more comments as users test compaction behavior. |

---

## 4. Key PR Progress (10 Most Important)

| # | PR Title | Status | Impact |
|---|----------|--------|--------|
| 1942 | fix(mcp): propagate MCP configs to subagents and resume immediately | **CLOSED** (merged) | Enables MCP tools in explore/coder/plan subagents and after session resume. Critical for multi-agent MCP workflows. |
| 1377 | feat: add vim-style j/k keyboard navigation for approval and question prompts | **CLOSED** (merged) | Adds `j`/`k` navigation to interactive prompts—long-requested by Vim/Neovim users. |
| — | (no other PRs updated in last 24h) | — | Only 2 PRs were updated in the last 24 hours. Both are now closed. |

---

## 5. Feature Request Trends
From all open issues, the most-requested feature directions are:

1. **Billing transparency & hybrid pricing** – Users want per-API-request billing instead of token-based consumption, or at least clear documentation of how `kimiCode` quotas map to queries. (#1994 and related duplicates)
2. **Context compaction efficiency** – Avoid reloading system prompts/project instructions on each compaction; implement token cache or incremental compaction. (#2472)
3. **Workspace-relative MCP support** – Ensure MCP servers resolve paths relative to the project workspace, not the CLI installation directory. (#2469)
4. **Modal / keyboard-first navigation** – Vim-style bindings, search, and quicker approval flows for terminal-only workflows. (#1377, multiple feature requests)
5. **Multi-agent MCP configuration** – Allow subagents to inherit or selectively override MCP configs without code changes. (#1942 context)

---

## 6. Developer Pain Points
Recurring frustrations and high-frequency requests from the community:

- **Token cost unpredictability** – Long chain-of-thought on K2.6 causes rapid quota exhaustion, with users reporting “2 questions per 2-hour subscription”. This is the #1 pain point in terms of community emotion (7 👍 on #1994).
- **MCP configuration fragmentation** – Subagents ignoring MCP configs (#1942), workspace-relative path breakage (#2469), and lack of config inheritance cause repeated setup pain.
- **Context compaction token waste** – Reloading static prompts on each compaction (~20k tokens) is seen as a design flaw that inflates costs unnecessarily.
- **Linux-specific stability** – The file-reading loop bug (#640) remains open after 5+ months, affecting Arch Linux users with custom endpoints. No workaround has been shared.
- **Slow PR turnaround** – Despite high community engagement, only 2 PRs were touched in the last 24 hours, and several critical bugs (e.g., billing, compaction) have no active PRs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-25

## Today's Highlights

OpenCode v1.17.10 shipped with substantial MCP capabilities—resource template listing, resource read tools, and managed provider integration—alongside a new `--mini` CLI mode and MCP server instructions injected into session context. The community remains focused on MCP authentication bugs (Entra, OAuth scope, stale connections), while a long-running privacy concern around session title computation has finally been closed. On the PR front, a stacked series from contributor Nomadcxx is progressively adding MCP resource subscriptions, templates, and progress notifications.

## Releases

### [v1.17.10](https://github.com/anomalyco/opencode/releases/tag/v1.17.10)
**Core improvements:**
- MCP server instructions added to session context (@Arcadi4)
- Opencode-managed provider integration support
- MCP resource template listing and resource read tools
- New `--mini` CLI mode for lightweight usage

**Bugfix:** MCP resource template tools are now hidden when not applicable (truncated in original data).

## Hot Issues (10 selected)

1. **[#10416 — OpenCode not private by default?](https://github.com/anomalyco/opencode/issues/10416)** *(CLOSED)*  
   59 comments, 39 👍. Community firestorm over session titles being computed via outbound network calls. User MatthewCroughan discovered this via nftables blocks. **Why it matters:** Raises fundamental trust questions about local-first promises. Closure suggests a fix or explanation shipped.

2. **[#12308 — Entra Authentication for MCP doesn't work](https://github.com/anomalyco/opencode/issues/12308)** *(CLOSED)*  
   17 comments. MCP OAuth with Microsoft Entra fails because OpenCode includes a `resource` parameter that mismatches the app registration's Application ID URI. Enterprise users are blocked.

3. **[#21090 — "Model tried to call unavailable tool"](https://github.com/anomalyco/opencode/issues/21090)** *(OPEN)*  
   11 comments, 7 👍. User can't get OpenCode to analyze their codebase—model persistently refuses tool calls. High frustration, suggests a fundamental issue in tool availability signaling.

4. **[#31119 — Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)** *(OPEN)*  
   8 comments, 5 👍. Database schema migration issue after updating from v1.16.2. Returning users hit a wall—critical for retention.

5. **[#24817 — Ctrl+Z suspends OpenCode on Linux](https://github.com/anomalyco/opencode/issues/24817)** *(OPEN)*  
   7 comments, 4 👍. Classic terminal UX bug: Ctrl+Z sends SIGTSTP instead of undo. Duplicate of #19256 (6 comments). High-priority UX regression for Linux users.

6. **[#32678 — OpenCode doesn't follow AGENTS.md paths](https://github.com/anomalyco/opencode/issues/32678)** *(CLOSED)*  
   7 comments. User's AGENTS.md instructions to read `.agents/AGENTS.md` are ignored. Important for multi-file agent configuration workflows.

7. **[#33721 — qwen3.7 service instability on OpenCode Go (Zen API)](https://github.com/anomalyco/opencode/issues/33721)** *(CLOSED)*  
   5 comments. Paying subscriber reports ~60-70% success rate with Qwen models due to timeouts. Companion issue #33726 identifies Cloudflare's 120s proxy read timeout as root cause.

8. **[#32706 — TUI crash with Effect.tryPromise on v1.17.0+](https://github.com/anomalyco/opencode/issues/32706)** *(OPEN)*  
   5 comments, 2 👍. Immediate crash on startup after upgrade. Affects Windows users. High severity for adoption.

9. **[#17232 — Support opencode.local.json for project-local config](https://github.com/anomalyco/opencode/issues/17232)** *(OPEN)*  
   4 comments, 8 👍. Highly requested feature for per-project overrides without git-tracking changes. Strong community demand.

10. **[#23556 — MCP tools unavailable after context compaction](https://github.com/anomalyco/opencode/issues/23556)** *(CLOSED)*  
    2 comments. Connection loss after compaction kills MCP tools for the entire session—only restart helps. Root cause is an OpenCode-level issue.

## Key PR Progress (10 selected)

1. **[#32480 — feat(mcp): surface tool progress](https://github.com/anomalyco/opencode/pull/32480)** *(OPEN)*  
   Nomadcxx converts MCP progress notifications into OpenCode's running-tool progress UI. Stacked on #32477. Essential for long-running MCP tool visibility.

2. **[#33281 — feat(cli): add standalone v2 session flow](https://github.com/anomalyco/opencode/pull/33281)** *(OPEN)*  
   thdxr adds `--standalone` mode with an authenticated private server child process, v2 API sessions, and `SessionV2.Info` for persisted state. Architecture shift toward isolated sessions.

3. **[#32936 — feat(mcp): support resource subscriptions](https://github.com/anomalyco/opencode/pull/32936)** *(OPEN)*  
   Nomadcxx adds resource subscription support—OpenCode registers for notifications when servers advertise `resources`. Stacked on #32478.

4. **[#32943 — feat(mcp): support templates and completion](https://github.com/anomalyco/opencode/pull/32943)** *(OPEN)*  
   Nomadcxx adds `resources/templates/list` and completion support. Completes the MCP resource notification trilogy (#32478 → #32936 → #32943).

5. **[#33518 — feat(vscode): add hostname setting, and add port to title](https://github.com/anomalyco/opencode/pull/33518)** *(OPEN)*  
   Adds `--hostname` parameter support to VS Code extension. Useful for remote development setups.

6. **[#31860 — fix(cli): check for browser opener before spawning](https://github.com/anomalyco/opencode/pull/31860)** *(CLOSED)*  
   Prevents ENOENT errors in containers lacking `xdg-open`. Pragmatic container compatibility fix.

7. **[#33733 — fix(opencode): cap retry backoff when response headers lack retry-after](https://github.com/anomalyco/opencode/pull/33733)** *(OPEN)*  
   Applies a maximum delay cap to retry logic. Prevents unbounded waits from API failures.

8. **[#33734 — feat(tui): publish tui.session.select on in-TUI session navigation](https://github.com/anomalyco/opencode/pull/33734)** *(OPEN)*  
   Emits a bus event when users switch sessions in the TUI. Enables plugin/extensions to react to session changes.

9. **[#32676 — fix(mcp): configure Figma OAuth client](https://github.com/anomalyco/opencode/pull/32676)** *(OPEN)*  
   Adds built-in OAuth client ID for Figma MCP servers. Preserves user-configured overrides. Design pattern for first-party MCP integrations.

10. **[#33463 — fix(prompt): add overeager scope-discipline rule](https://github.com/anomalyco/opencode/pull/33463)** *(OPEN)*  
    Prevents OpenCode from accidentally deleting files (backups, credentials) during broad cleanup tasks. Safety-critical prompt engineering fix.

## Feature Request Trends

The dominant feature direction is **MCP ecosystem maturity**:
- **MCP authentication overhaul**: OAuth scope configurability (#26301, #28895), mTLS support (#26862), non-SSE/streamable HTTP auth handling (#16247)
- **MCP connection resilience**: Stale connection detection (#25682), reconnection after context compaction (#23556), custom fetch for SSE subscriptions (#28180)
- **Project-local configuration**: `opencode.local.json` for git-ignored overrides (#17232) — 8 👍, strong silent demand
- **Linux terminal UX**: Ctrl+Z undo vs suspend (#24817, #19256) — combined 11 comments, 4 👍
- **Performance & reliability**: Qwen model timeouts on Zen API (#33721, #33726), TUI crash on upgrade (#32706), database migration errors (#31119)

## Developer Pain Points

1. **MCP authentication friction** — Entra incompatibility, OAuth scope ignored, browser re-auth failures. Multiple tickets, months old, still surfacing. Highest aggregate frustration.

2. **Silent regressions on upgrade** — Database schema errors (#31119), TUI crashes (#32706), broken tool availability (#21090). The v1.16→v1.17 transition has been rough for many.

3. **Container/Docker support gaps** — Missing browser opener (#31860), Windows PATH issues (#14074, #20162), segmentation faults on Windows (#31607, #28121). Cross-platform reliability remains a concern.

4. **Model service instability** — Paying OpenCode Go users hitting Cloudflare timeouts with Qwen models (#33721). Trust in the hosted service is eroding.

5. **Agent instructions ignored** — AGENTS.md paths not respected (#32678), tools unavailable mid-session (#21090). Core agent loop reliability issues erode confidence.

*Generated from 50 issues and 50 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-25

## Today's Highlights
Today saw a surge of **connection reliability fixes** and **provider ecosystem expansion** for Pi. The community is actively addressing OpenAI Codex stream hangs and Bedrock connectivity issues, while multiple PRs add support for **Amazon Bedrock Mantle**, **Microsoft Foundry**, and **Charm Hyper** providers. A controversial new top-downloaded package `@hypabolic/pi-hypa` has triggered multiple security reports.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#4945 — openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)
**Status:** OPEN (69 comments, 30 👍)  
Streams from `openai-codex`/`gpt-5.5` leave the TUI stuck on `Working...` with no error output. Escape is the only recovery. This has persisted "over the last couple of days" and is the most-commented issue.

### 2. [#3357 — Official local LLM provider extension](https://github.com/earendil-works/pi/issues/3357)
**Status:** OPEN (28 comments, 37 👍)  
Request to dynamically fetch model lists from `{baseUrl}/models` to support llama.cpp, Ollama, LM Studio, etc. High community demand for local-first workflows.

### 3. [#5653 — Move off Shrinkwrap](https://github.com/earendil-works/pi/issues/5653)
**Status:** OPEN, in-progress (16 comments)  
Dual installs of `pi-ai` cause module-level state duplication because Shrinkwrap doesn't dedupe. Affects agent and coding-agent packages. Critical for monorepo users.

### 4. [#5363 — Add amazon-bedrock-mantle provider](https://github.com/earendil-works/pi/issues/5363)
**Status:** OPEN (14 comments, 4 👍)  
Bedrock Mantle uses OpenAI-compatible APIs (not Converse), requiring a new provider. Linked PR #5509 is ready.

### 5. [#5291 — Sessions hang on "working" with Anthropic](https://github.com/earendil-works/pi/issues/5291)
**Status:** CLOSED (7 comments, 2 👍)  
Enterprise Anthropic users seeing simultaneous hangs; intermittent interrupt/resume recovery. Closed in favor of the broader stream reliability fix in PR #6051.

### 6. [#6009 — OpenAI Responses drops reasoning state on out-of-order output](https://github.com/earendil-works/pi/issues/6009)
**Status:** OPEN (2 comments)  
`thinkingSignature` dropped when streaming output items complete out of order. Breaks reasoning replay in subsequent requests. Seen on OpenRouter.

### 7. [#5886 — AgentSession settlement/continuation lifecycle bugs](https://github.com/earendil-works/pi/issues/5886)
**Status:** OPEN (2 comments, 2 👍)  
Meta-issue filed by community member `mitsuhiko`. Post-run logic tries to continue agents from stale transcripts — larger fix needed.

### 8. [#6028 — Pi should not exempt itself from minimum release age settings](https://github.com/earendil-works/pi/issues/6028)
**Status:** CLOSED (2 comments)  
Pi uses `--min-release-age=0` for self-updates, bypassing its own stability policy. Community questions the double standard.

### 9. [#6052 — Package Report: @hypabolic/pi-hypa](https://github.com/earendil-works/pi/issues/6052)
**Status:** OPEN, untriaged (1 comment)  
Top-downloaded package (203K/mo) flagged as potentially malicious. Duplicate reports filed (see #6044). Under investigation.

### 10. [#6043 — task tool: undefined exitCode errors](https://github.com/earendil-works/pi/issues/6043)
**Status:** CLOSED (1 comment)  
Sub-agent failures return "exit code undefined" when child process is killed before `exitCode` is set. Proposed fix for `task.ts` exit code logic.

---

## Key PR Progress

### 1. [#6051 — fix(ai): recover from hung streams and retry unmodeled Bedrock errors](https://github.com/earendil-works/pi/pull/6051)
**Status:** CLOSED  
Adds `streamIdleTimeoutMs` (default 240s) and `connectTimeoutMs` for Bedrock/Anthropic. Half-open sockets now trigger retry instead of blocking forever. Direct fix for #4945 and #5291.

### 2. [#5509 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/5509)
**Status:** OPEN  
New provider for Bedrock Mantle's OpenAI-compatible API. Supports GPT-5.5/5.4. Modeled after Azure provider. Linked to #5363.

### 3. [#6054 — feat(agent): add runParallelAgentTasks + parallel batching system prompt](https://github.com/earendil-works/pi/pull/6054)
**Status:** CLOSED  
New utility enabling parallel independent agent loops. Closes #6053. Changes system prompt to encourage batch tool calls.

### 4. [#6004 — feat: Normalize Microsoft Foundry Responses API endpoints](https://github.com/earendil-works/pi/pull/6004)
**Status:** CLOSED  
Fixes endpoint recognition for `*.ai.azure.com` and strips trailing path segments. Closes #6005.

### 5. [#6018 — feat(coding-agent): show context estimates in session tree](https://github.com/earendil-works/pi/pull/6018)
**Status:** CLOSED  
Adds context token usage estimates to session tree entries, making it easy to spot high-usage sessions at a glance.

### 6. [#6048 — fix(coding-agent): show resources before messages when resuming](https://github.com/earendil-works/pi/pull/6048)
**Status:** CLOSED  
Fixes regression where loaded resources (Context, Skills, etc.) appeared after restored messages instead of at the top.

### 7. [#6032 — fix(ai): pass custom fetch to openai clients](https://github.com/earendil-works/pi/pull/6032)
**Status:** CLOSED  
OpenAI completions/responses adapters now forward custom `fetch` for proxy/custom transport use.

### 8. [#6030 — fix(coding-agent): print benchmark timings after TUI stop](https://github.com/earendil-works/pi/pull/6030)
**Status:** CLOSED  
Closes #6029. Benchmark timing output no longer scrolls away when TUI stops.

### 9. [#6035 — fix(coding-agent): use "log out" copy in auth flow](https://github.com/earendil-works/pi/pull/6035)
**Status:** CLOSED  
Minor UX fix: rewords "logout" to "log out" and "Logout failed" to "Failed to log out". From contribution proposal #6036.

### 10. [#6056/6055 — feat(subagent): simplify agent configs, add default agent, use minimax model](https://github.com/earendil-works/pi/pull/6056)
**Status:** CLOSED (duplicate #6055 also closed)  
Subagent example agents switched to `minimax/MiniMax-M2.7` model, adds default.md general-purpose agent. Cleans up output formats.

---

## Feature Request Trends

1. **Provider Expansion** — Strong demand for Bedrock Mantle (issue #5363, PR #5509), Charm Hyper (#6042), and normalized Foundry endpoints (#6005). Local-first providers (Ollama, LM Studio) continue trending via #3357.

2. **Parallel Agent Execution** — Feature #6053/PR #6054 adds `runParallelAgentTasks` for concurrent sub-agent loops, reflecting growing multi-agent workflow needs.

3. **Context Visibility** — PR #6018 adds token estimates to session tree; community wants better visibility into resource usage and agent costs.

4. **Image/File Handling** — Requests for BMP reading from disk (#6047), MiniMax image generation extension (#6024), and broader file-type support.

5. **Usability** — Shortcut for `/new session name` (#6046), visible reasoning token counts in Usage (#6057), and hardware cursor rendering (#5268) show polish focus.

---

## Developer Pain Points

1. **Stream Reliability** — OpenAI Codex, Anthropic, and Bedrock streams all suffer from unhandled hangs and silent failures. The community spent significant effort on recovery mechanisms this cycle.

2. **Package Duplication** — Shrinkwrap's inability to dedupe `pi-ai` causes state corruption (#5653). Module-level provider registries break under dual installs.

3. **TUI Crashes** — Lines exceeding terminal width cause hard crashes (#6058) instead of truncation. Scrollback gets cleared during redraws (#6050).

4. **Silent Data Loss** — `SessionManager.open()` truncates non-session files with no warning (#6002). Dangerous for users who point it at log files accidentally.

5. **Provider Header Conflicts** — Anthropic `anthropic-beta` headers get clobbered when multiple sources set the header (#6040). No merge/union logic.

6. **Termux Instability** — Landscape/portrait orientation changes hang the TUI (#6038), and scrolling is pinned during long responses (#4690). Mobile users face recurring issues.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-06-25**, based on the latest project activity.

---

## Qwen Code Community Digest — 2026-06-25

### 1. Today's Highlights
Today saw a flurry of activity aimed at tightening quality assurance and user experience. The team shipped **v0.19.2** alongside a preview release, bringing new remote LSP status APIs. A critical **P1 security bug** (path traversal in source deletion) was patched, and several long-standing CI blind spots around integration tests are finally being addressed. The community is also vocal about improving session persistence and providing better visibility into background automation tasks.

---

### 2. Releases
Three new releases were published in the last 24 hours, all converging on the `v0.19.2` branch.

- **[v0.19.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2)**
  - **What's Changed**: chore(v0.19.1) + `feat(serve): Add remote LSP status route` by @doudouOUC.
- **[v0.19.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-preview.0)**
  - Same core changes as v0.19.2, released as a preview for early adopters.
- **[v0.19.1-nightly.20260624](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.1-nightly.20260624.a234860a4)**
  - Nightly build containing the same LSP route feature.

**Note**: The release workflow for v0.19.2 itself **failed** (see Issue #5831 below), which is a point of concern for the engineering team.

---

### 3. Hot Issues (10 of 25)

1. **[#5834 — Source deletion accepts path-like slugs (Security, P1)](https://github.com/QwenLM/qwen-code/issues/5834)**
   - *Why it matters*: A **critical** vulnerability allowing path traversal in the desktop source deletion feature. A crafted `sourceSlug` could delete files outside the intended workspace directory. The community flagged this quickly, and a fix PR was merged the same day.
   - *Community*: 2 comments, immediate agreement on severity.

2. **[#5836 — Create todos cannot persist to project directory](https://github.com/QwenLM/qwen-code/issues/5836)**
   - *Why it matters*: A major cross-device usability gap. Users want `todos`, `plans`, and `memories` to be storable inside the Git-tracked project folder (e.g., `.qwen/todos`) to sync across machines. Currently stuck in `~/.qwen/`.
   - *Community*: 3 comments, strong support for the feature.

3. **[#5819 — Auto-upgrade changes model to higher-cost tier](https://github.com/QwenLM/qwen-code/issues/5819)**
   - *Why it matters*: A user reports that upgrading from v0.18.3 to v0.19 silently changed their `setting.json` from a cheap model (DeepSeek Flash) to an expensive one (DeepSeek Pro), draining their budget. Also noted a "Simplified Chinese → Traditional Chinese" output bug wasting tokens.
   - *Community*: 3 comments, high frustration. This is a trust and reliability issue.

4. **[#5837 — Last response from agent gets cut off](https://github.com/QwenLM/qwen-code/issues/5837)**
   - *Why it matters*: The UI rendering stops mid-sentence, but the debug log shows the full response exists. A rendering/footer overflow bug on Windows.
   - *Community*: 4 comments, waiting for maintainer information.

5. **[#5736 — More frequent full prompt reprocessing](https://github.com/QwenLM/qwen-code/issues/5736)**
   - *Why it matters*: Users noticed a recent regression where `llama.cpp` is forced to fully re-process the prompt on every turn, killing performance for long conversations.
   - *Community*: 5 comments, marked `welcome-pr`. Expected to be a caching logic issue.

6. **[#5219 — CI integration tests don't run on PRs](https://github.com/QwenLM/qwen-code/issues/5219)**
   - *Why it matters*: A systemic CI blind spot. Integration tests only run on nightly cron, so regressions slip into `main` undetected until release day. A major blocker for confidence in automated changes.
   - *Community*: 4 comments, acknowledged as high-priority process issue.

7. **[#5800 — Last line of tall replies overwritten in terminal](https://github.com/QwenLM/qwen-code/issues/5800)**
   - *Why it matters*: In the default Static TUI mode, any reply taller than the terminal gets its final line clipped. An upstream Ink bug is suspected, but it's a severe UX issue.
   - *Community*: 3 comments, marked `welcome-pr`.

8. **[#5823 — Loop cron tasks fire silently with no visibility](https://github.com/QwenLM/qwen-code/issues/5823)**
   - *Why it matters*: Background `/loop` cron tasks can be added silently. Users report returning to find the agent autonomously starting work in new sessions without prompting, causing confusion and wasted context.
   - *Community*: 2 comments, requesting a command to list/stop scheduled tasks.

9. **[#5636 — Custom model IDs lost in auth wizard](https://github.com/QwenLM/qwen-code/issues/5636)**
   - *Why it matters*: While setting up Alibaba ModelStudio, custom model IDs saved to `settings.json` are not shown when re-entering the `/auth` wizard. This is a data-display bug, not a data-loss bug, but it confuses users.
   - *Community*: 1 comment, closed after a fix was confirmed.

10. **[#5798 — Scroll-back broken during multi-agent runs](https://github.com/QwenLM/qwen-code/issues/5798)**
    - *Why it matters*: In non-VP mode, if output exceeds the terminal height while background agents are active, the user cannot scroll up—the view snaps back to the bottom. A fix PR was submitted and closed the same day.
    - *Community*: 2 comments, resolved quickly.

---

### 4. Key PR Progress (10 of 50)

1. **[#5727 — Docs: add vertex-ai auth, missing commands](https://github.com/QwenLM/qwen-code/pull/5727)**
   - *What*: Audits six docs files against current code. Adds missing `vertex-ai` auth type documentation.
   - *Why it matters*: Critical for users relying on Google Cloud infrastructure who had no official docs.

2. **[#5817 — feat(cli): user-configurable keyterms for voice dictation](https://github.com/QwenLM/qwen-code/pull/5817)**
   - *What*: Introduces `general.voice.keytermsFile` setting, allowing users to extend ASR vocabulary beyond the hardcoded list.
   - *Why it matters*: Directly addresses the #5816 feature request. Improves accuracy for domain-specific terms.

3. **[#5829 — fix(desktop): reject unsafe source slugs](https://github.com/QwenLM/qwen-code/pull/5829)**
   - *What*: Patches the P1 path traversal vulnerability (#5834). Rejects path-like slugs before deletion.
   - *Why it matters*: Security fix; landed the same day as the report.

4. **[#5808 — fix(cli): cancel pending loop wakeups on abort](https://github.com/QwenLM/qwen-code/pull/5808)**
   - *What*: Cancels pending `/loop` wakeups when a user presses Esc, preventing silent loop continuation.
   - *Why it matters*: Solves the "ghost loop" problem from #5806. Improves user control over automation.

5. **[#5827 — fix(core): add streaming inactivity timeout](https://github.com/QwenLM/qwen-code/pull/5827)**
   - *What*: Adds an inter-chunk inactivity timeout to the OpenAI streaming pipeline, preventing unbounded hangs.
   - *Why it matters*: Critical for reliability—providers could pause mid-stream indefinitely before this fix.

6. **[#5826 — feat(cli): Add skill usage stats](https://github.com/QwenLM/qwen-code/pull/5826)**
   - *What*: Tracks per-session skill invocations and exposes them via `/stats skills`.
   - *Why it matters*: Enables users and admins to monitor skill adoption and debug unexpected behavior.

7. **[#5616 — feat(memory): confirm auto-generated skills before persisting](https://github.com/QwenLM/qwen-code/pull/5616)**
   - *What*: Auto-generated skills are now reviewed by the user before entering the skill library.
   - *Why it matters*: Prevents one-off tool-heavy tasks from polluting the skill library.

8. **[#5661 — feat(tui): partition tool display by type](https://github.com/QwenLM/qwen-code/pull/5661)**
   - *What*: Collapses read/search tools into a summary line while showing mutation tools individually.
   - *Why it matters*: Massive reduction in visual noise during agent actions.

9. **[#5799 — fix(cli): prevent scroll snap-back during multi-agent runs](https://github.com/QwenLM/qwen-code/pull/5799)**
   - *What*: Fixes the "sticky scroll" bug (#5798) by keeping footer height reservations in sync with background agents.
   - *Why it matters*: Restores normal terminal scrolling behavior in complex sessions.

10. **[#4943 — feat(cli): add --safe-mode flag](https://github.com/QwenLM/qwen-code/pull/4943)**
    - *What*: Adds `--safe-mode` to disable all user customizations for troubleshooting.
    - *Why it matters*: A foundational debugging tool—allows users to isolate issues caused by extensions or config.

---

### 5. Feature Request Trends
The community is clearly pushing for four major themes:

1. **Cross-device session persistence**: Requests to save `todos`, `plans`, and `memories` inside the Git-tracked project directory (#5836, #5790). Users want to switch machines without losing context.
2. **Background automation visibility**: Strong demand for commands to list, stop, and review scheduled `/loop` tasks and cron jobs (#5823, #5806). Users want to know "what is the agent planning to do next?"
3. **Configurable automation guardrails**: Requests for adjustable timeouts on agent-spawned processes (#5838) and better control over when the agent acts autonomously.
4. **Voice dictation everywhere**: After #5755 brought voice to the CLI, users want it in the web shell and desktop UI (#5796), plus configurable ASR biasing (#5816, #5817).

---

### 6. Developer Pain Points
Recurring frustrations visible in this digest:

- **CI fragility and blind spots**: Integration tests only run on nightly builds, so regressions (or security bugs like #5834) slip through until release time. This is the top infrastructure pain point (#5219, #5665).
- **Silent resource consumption**: The auto-upgrade that switches to a more expensive model (#5819) and background cron tasks that fire unseen (#5823) erode user trust. "The tool changed my settings without asking" is a recurring theme.
- **Terminal rendering bugs**: Screen flickering (#5798), last-line clipping (#5800), and scroll issues are high-frequency complaints that directly impact daily usability.
- **Model switching unpredictability**: Multiple bugs (#5636, #5835) show that changing models or re-authenticating can reset user preferences, force re-processing, or cause unexpected token waste.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-25

## Today's Highlights
The v0.8.65 release cycle is approaching final stabilization after a massive architectural overhaul, with 25 PRs merged today alone. The project has shifted from a DeepSeek-specific TUI to a multi-provider, fleet-capable coding harness called "CodeWhale," and today's activity focuses on closing out the provider routing system, the Fleet execution substrate, and the new `/provider` readiness dashboard. A notable community concern emerged around overly aggressive agent autonomy in v0.8.66 (Issue #3275), where CodeWhale self-initiates modifications without user confirmation.

## Releases
No new releases in the last 24 hours. The team is actively merging v0.8.65 components (factual model database, MCP tool discovery, provider dashboards, fallback coverage) and appears to be preparing the release cut.

## Hot Issues (10 Noteworthy)

1. **[#3275 — CodeWhale over-extends scope, self-questions/answers without user intent](https://github.com/Hmbown/CodeWhale/issues/3275)**
   *12 comments | OPEN | v0.8.66*
   A regression from #3061 where the agent autonomously proposes, answers, and executes beyond the user's request. This is the most-commented open issue, signaling significant community frustration with agent autonomy boundaries. No maintainer response yet.

2. **[#3466 — Approval modal cancellation and review-required semantics](https://github.com/Hmbown/CodeWhale/issues/3466)**
   *4 comments | OPEN | v0.8.66*
   User reports that post-v0.8.64, every destructive action requires confirmation—a UX regression from the "no confirmation" original behavior. The community wants granular approval control, not blanket modal spam.

3. **[#3205 — Fleet model classes, loadout auto, and semantic route roles](https://github.com/Hmbown/CodeWhale/issues/3205)**
   *10 comments | OPEN | v0.8.65*
   The core architectural issue for the "Fleet loadout auto" feature, resolving compute loadouts per role/slot. Remains open as the team debates the scope—referenced by 4+ PRs today.

4. **[#2300 — Multi-model compatibility, provider docs, and automatic Fleet loadout selection](https://github.com/Hmbown/CodeWhale/issues/2300)**
   *7 comments | OPEN | v0.8.65*
   User request (translated) for clearer docs on local vs. OpenAI provider routing. Now serves as the acceptance fixture for v0.8.65's multi-provider routing work.

5. **[#2934 — Sidebar sessions panel with auto-resume and history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)**
   *3 comments | OPEN | v0.8.68*
   Community feature request for persistent session management beyond Ctrl+R popups. Pushed to v0.8.68, indicating the team is deferring UX improvements to post-architecture stabilization.

6. **[#3192 — Agent Client Protocol registry listing](https://github.com/Hmbown/CodeWhale/issues/3192)**
   *7 comments | OPEN | v0.8.69*
   Developer request to be listed in the Agent Client Protocol registry for Zed editor compatibility. This would significantly improve discoverability and IDE integration.

7. **[#2984 — OpenAI Codex/ChatGPT OAuth route verification](https://github.com/Hmbown/CodeWhale/issues/2984)**
   *3 comments | OPEN | v0.8.66*
   End-to-end verification for OAuth routes through ChatGPT/Codex. Critical for users wanting ChatGPT-as-provider in the new routing architecture.

8. **[#2608 — EPIC: Separate provider facts, model facts, offerings, and route resolution](https://github.com/Hmbown/CodeWhale/issues/2608)**
   *8 comments | CLOSED*
   The foundational architecture issue for v0.8.65—separating provider identity from model identity from route selection. Now closed as the implementation PRs land.

9. **[#3222 — Selected-route reasoning stream style for inline `<think>` blocks](https://github.com/Hmbown/CodeWhale/issues/3222)**
   *11 comments | CLOSED*
   Community-contributed fix for OpenAI-compatible gateways emitting inline thinking blocks. Closed with patch direction preserved—good example of community-to-maintainer collaboration.

10. **[#3494 — Evaluate orchestration disposition in constitution.md](https://github.com/Hmbown/CodeWhale/issues/3494)**
    *2 comments | CLOSED*
    Self-evaluation issue tracking whether the "Orchestration" prompt disposition helps or harms agent behavior. Empirical evaluation to follow the 0.8.65 rebuild.

## Key PR Progress (10 Important)

1. **[#3563 — Factual model reference database + /modeldb browse](https://github.com/Hmbown/CodeWhale/pull/3563)**
   *MERGED*
   The narrowed v0.8.65 slice for #3205/#2300: gives each model factual attributes (context window, price, modality, provider/kind). This is the foundation for cross-provider model search.

2. **[#3562 — Passive MCP tool discovery + configured custom provider rows](https://github.com/Hmbown/CodeWhale/pull/3562)**
   *MERGED*
   Two critical fixes: stops spawning MCP processes from passive discovery (fixing #3461's duplicate server bug), and enables custom provider endpoint rows (#1519).

3. **[#3556 — Provider live /models fetch + secret-free cache refresh](https://github.com/Hmbown/CodeWhale/pull/3556)**
   *MERGED*
   Advances #3385: fetches live model catalogs from providers and caches them without storing secrets. Engine tests pass; UI merge pending.

4. **[#3555 — /provider readiness dashboard with capability/metadata badges](https://github.com/Hmbown/CodeWhale/pull/3555)**
   *MERGED*
   Closes #3083: shows reasoning readiness, provider status, auth state, and route validation per provider. Replaces the old string-inspection approach.

5. **[#3554 — Fallback acceptance coverage + local/private guardrail](https://github.com/Hmbown/CodeWhale/pull/3554)**
   *MERGED*
   Closes #2574: adds test coverage for the capability-aware fallback chain and ensures local/private providers aren't silently excluded.

6. **[#3553 — Suppress typed ask-rule prompts in YOLO mode](https://github.com/Hmbown/CodeWhale/pull/3553)**
   *MERGED*
   Fixes YOLO mode's broken contract: shell/file commands matching ask-rules no longer pop approval modals when in YOLO mode.

7. **[#3557 — /config preset calm — beautiful/calm transcript preset](https://github.com/Hmbown/CodeWhale/pull/3557)**
   *MERGED*
   Advances #3478: provides a "beautiful/calm" transcript preset separate from power-user debug settings. UX polish lane.

8. **[#3549/#3559 — Chinese translations extraction into dedicated JSON](https://github.com/Hmbown/CodeWhale/pull/3549)**
   *MERGED*
   Moves 408 Simplified Chinese translation entries from hardcoded Rust (5385 lines) into a structured `zh-Hans.json` file. Step 1 of i18n refactoring (#3537).

9. **[#3547 — Save exact file ask rules from write approvals](https://github.com/Hmbown/CodeWhale/pull/3547)**
   *MERGED*
   Extends the "save ask rule" approval modal action to write_file and edit_file (was exec_shell only). Community contribution from @greyfreedom.

10. **[#3506/#3560 — Extract harness posture module from config](https://github.com/Hmbown/CodeWhale/pull/3506)**
    *MERGED*
    Refactoring that moves harness posture/profile data model out of monolithic `lib.rs` into a focused `harness.rs` module. Clean architectural split.

## Feature Request Trends

1. **Fleet/Agent Architecture (highest signal)**: Users want "Fleet loadout auto"—automatic model selection per role/slot across multiple providers (#3205, #2300, #3167). This is the primary v0.8.65 architectural goal.

2. **Multi-Provider Routing & Custom Endpoints**: Heavy demand for supporting non-DeepSeek providers (OpenAI, Anthropic, GLM-5.2 via #3439, custom endpoints via #1519). The project is clearly pivoting from "DeepSeek TUI" to "universal coding harness."

3. **Agent Autonomy Controls**: Two opposing poles: some users want full autonomy (YOLO mode, no approval modals—#3466), others want more guardrails against over-reaching agents (#3275). The team is attempting modal-based permission systems.

4. **Session Management & UX Polish**: Requests for persistent sidebar sessions (#2934), calm/beautiful presets (#3478, #3557), and better session history browsing. Being deferred to v0.8.68+.

5. **IDE/Registry Integration**: Demand for Zed editor compatibility via Agent Client Protocol (#3192) and better MCP tool lifecycle management (#3461). Toolchain integration is a growing theme.

## Developer Pain Points

1. **Agent Over-Autonomy (#3275)**: The most vocal pain point. CodeWhale "self-answers, self-proposes, self-executes" without waiting for user confirmation. This is a regression from prior behavior and undermines trust in agent-assisted workflows.

2. **Approval Modal Spam (#3466)**: Users who prefer minimal friction are being bombarded with destructive approval modals post-v0.8.64. The community wants granular control: "never ask for these, always ask for those."

3. **MCP Server Duplication (#3461)**: A reliability issue where a single `mcp.json` entry spawns two processes, one an orphan consuming 4MB RAM. Both share a stdio pipe, so killing one kills both. This has been fixed in #3562.

4. **Configuration Complexity**: Users struggle with provider vs. model semantics (#2300). The difference between `provider = vllm` and `provider = openai` for local endpoints is non-obvious. The ongoing provider/model/route separation (#2608) aims to address this.

5. **Chinese Ecosystem Support**: Multiple issues from Chinese-speaking developers (GLM-5.2 support #3439, localization PRs #3549/#3559) indicate growing adoption in China, but the project still has English-first documentation gaps.

6. **Documentation Staleness**: The README and configuration docs still reference v0.8.64 after the v0.8.65 bump (#3087, #3552). Minor but indicates release-process friction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*