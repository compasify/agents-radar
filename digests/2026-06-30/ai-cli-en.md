# AI CLI Tools Community Digest 2026-06-30

> Generated: 2026-06-30 00:27 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-06-30

## 1. Ecosystem Overview

The AI CLI development tools landscape is experiencing a maturation phase marked by production-scale reliability challenges. While all seven major tools continue shipping features, community discourse has shifted from "what can they do" to "can they do it reliably and cost-effectively." Token burn rates, context compaction failures, and platform-specific regressions dominate across every community, suggesting the industry's next battleground is operational trust. Tool-specific safety filters are increasingly generating false-positive friction with developers working in legitimate domains like aerospace and robotics. Meanwhile, enterprise configuration management, session lifecycle controls, and cross-platform consistency have emerged as the defining feature gaps that vendors are racing to close.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (24h) | Release Status |
|------|---------------------|-------------------|----------------|
| **Claude Code** | 10+ hot issues | 3 PRs | v2.1.196 released |
| **OpenAI Codex** | 10 hot issues | 10 PRs | rust-v0.142.4 + alpha |
| **Gemini CLI** | 10 hot issues | 10 PRs | v0.51.0 nightly |
| **GitHub Copilot CLI** | 10 issues | 0 PRs | v1.0.66-2 released |
| **Kimi Code CLI** | 1 issue | 0 PRs | No release |
| **OpenCode** | 10 issues | 10 PRs | No release |
| **Pi (mono)** | 10 issues | 10 PRs | No release |
| **Qwen Code** | 30+ issues | 50+ PRs | No release |
| **DeepSeek TUI** | 15+ issues | 15+ PRs | RC for v0.8.66 |

**Key observation:** Qwen Code and DeepSeek TUI show the highest raw activity, indicating rapid iteration cycles. GitHub Copilot CLI and Kimi Code show minimal or no PR activity, suggesting development slowdowns or internal-only work.

## 3. Shared Feature Directions

**Multi-Account & Profile Management** (5 tools)
- **Claude Code** (#18435, 616 👍): Top-voted open feature request for personal/work account switching
- **OpenCode**: Profile reset issues (#34471) highlight demand for multi-profile support
- **OpenAI Codex**: Phone number recovery lockout (#25749) indicates identity management gaps
- **Pi**: Configuration rigidity complaints (lack of profile isolation)
- **Copilot CLI**: Enterprise server-managed settings (#3909) for local installs

**Context Compaction & Token Management** (6 tools)
- **OpenAI Codex**: #5957, #29356, #25792 — compaction "forgets" task state, loses agent rules
- **Pi**: #6166 — 90k thinking blocks bypass compaction limits; #6083 — cache not respected
- **DeepSeek TUI**: #1177, #1120 — cache hit ratio gap vs competitors; #743 — 400M tokens/day
- **Claude Code**: #72372 — hidden Opus sub-quotas; #23030 — premature rate limiting
- **Qwen Code**: #5942 — Anthropic cache misses inflate cost; #5956 — configurable compaction model
- **Gemini CLI**: #26525 — Auto Memory redaction timing issues

**Sandbox & Security Hardening** (7 tools)
- **Claude Code**: #72373 — safety filter false-positives blocking drone code; #72367 — sandbox OOM
- **OpenAI Codex**: 6 security PRs (#28714, #27914, #29470, #30631, #30628) — Git sandbox hardening
- **Gemini CLI**: #28215 — file-write scope hardening to prevent sandbox escape
- **Qwen Code**: #5970 — Yolo mode regression auto-switching to Plan
- **DeepSeek TUI**: #3756, #3795 — approval flow standardization for agent shells
- **Copilot CLI**: #3948 — `web_fetch` always fails; #3958 — Windows MCP regression
- **Pi**: Package validation (#6155) — impersonation package concerns

**Cross-Platform Consistency** (5 tools)
- **Claude Code**: #69641 — musl binary deployed to glibc WSL2; #64061 — sandbox ignored in VS Code
- **OpenAI Codex**: #11023 — Linux desktop app request (658 👍); Windows sandbox issues
- **Gemini CLI**: #21983 — Browser subagent fails on Wayland
- **Copilot CLI**: #3958 — Windows cmd.exe regression; #3957 — macOS trackpad issues
- **Kimi Code**: #2479 — Enter key behavior differs between mobile and desktop

**Daemon/Server Architecture** (3 tools)
- **Qwen Code**: Daemon cold start optimization (#4748); hot-reload ecosystem (#5953, #3696)
- **OpenCode**: V2 API expansion for session forking, config endpoints (#34359)
- **Copilot CLI**: Server-managed settings push (#3909)

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | DeepSeek TUI | Qwen Code |
|-----------|-------------|--------------|------------|-------------|--------------|-----------|
| **Primary Focus** | Org features, safety | Token cost, security | Agent reliability, memory | Enterprise/org settings | Agent parallelism, cost | Daemon ecosystem, web shell |
| **Target User** | Enterprise teams | Power API users | Google ecosystem devs | GitHub org admins | Cost-sensitive devs | Chinese/mobile devs |
| **Community Maturity** | High (616 👍 issues) | Very high (626 comments) | Medium | Medium-Low | Medium (active RC) | High (30+ issues/day) |
| **Security Approach** | Content filter (friction) | Git sandbox hardening | Config scope isolation | MCP/sandbox boundaries | Approval flow standardization | Auth env priority fixes |

**Claude Code** differentiates on enterprise org management (default models, session naming) but struggles with safety false-positives that alienate developers. **OpenAI Codex** is the most security-forward this cycle, with 6 concurrent hardening PRs addressing Git exposure and sandbox escape paths. **Gemini CLI** focuses on agent self-awareness and memory systems. **DeepSeek TUI** aggressively optimizes for token cost with sub-agent dispatch parallelization. **Qwen Code** is building toward a production-grade daemon architecture with web shell and hot-reload capabilities, targeting cross-device workflows.

## 5. Community Momentum & Maturity

**Highest Momentum:**
- **Qwen Code**: 30+ issues and 50+ PRs in 24 hours signals intense development velocity. The daemon/webshell direction targets a distinct user base.
- **DeepSeek TUI**: 15+ merged fix PRs in 24 hours for v0.8.66 RC shows rapid stabilization. Token cost feedback is driving architectural changes.
- **Gemini CLI**: Steady 10 PRs/day cadence with focus on agent reliability and security hardening.

**Mature but Stalling:**
- **GitHub Copilot CLI**: 0 PRs in 24 hours suggests internal development or slowdown. Critical orphaned session bugs (#2364, #3600) remain unaddressed.
- **Kimi Code CLI**: 1 issue, 0 PRs. Minimal activity suggests early-stage or resource-constrained project.

**High-Engagement Communities:**
- **OpenAI Codex**: #14593 (626 comments) is the single most active issue across all tools. Community is vocal and organized around token accounting.
- **Claude Code**: #18435 (616 👍) is the top-voted feature request across all tools. Multi-account switching demand is universal.

**Maturity Signals:**
- **OpenCode** and **Pi** show production-scale pain (GLM cache drops, ECONNRESET crashes) consistent with mature user bases hitting reliability limits.
- **DeepSeek TUI** maintainer-driven issue creation (#2953, #2956) indicates strategic roadmap planning versus reactive development.

## 6. Trend Signals

**1. The Token Cost Crisis is Universal**
Every major tool community reports token burn rates exceeding expectations, cache misses inflating costs, or opaque quota accounting. This is the #1 risk to AI CLI adoption for cost-sensitive teams. Expect vendors to compete on token efficiency metrics (cache hit ratios, compaction quality) as a primary differentiator in 2026-2027.

**2. Agent Reliability is the New Frontier**
Context compaction breaking task state (OpenAI Codex), subagents reporting false success (Gemini CLI), infinite agent loops (Copilot CLI), and session hangs (Pi, DeepSeek TUI) all point to a systemic reliability gap. The industry is learning that autonomous agents need guardrails, fallback strategies, and observable lifecycle management.

**3. Security Filtering Creates Developer Friction**
Claude Code's false-positive "cyber" blocks on drone telemetry highlight a growing tension between safety filters and legitimate developer workflows. Expect demand for domain-specific overrides or permissive modes for validated users. The OpenAI Codex and Gemini CLI approach (sandbox scoping, config hardening) may prove more developer-friendly.

**4. Cross-Platform Parity is Non-Negotiable**
Windows MCP regressions, Wayland browser failures, WSL2 binary mismatches, and mobile keyboard mapping issues collectively indicate that users expect flawless cross-platform behavior. Tools that ship platform-specific bugs risk losing users to alternatives that prioritize platform quality.

**5. Enterprise Governance is Emerging**
Multiple communities request admin-managed configurations, session lifecycle controls, and profile isolation. As AI CLI tools move from individual developer productivity to team-wide deployment, centralized configuration and auditability become critical. The first tool to ship a comprehensive enterprise admin console will have a significant advantage.

**6. Daemon Architecture is the Next Infrastructure Layer**
Qwen Code and Copilot CLI are moving toward daemon-backed architectures with hot-reload, session persistence, and web shells. This mirrors the progression of developer tools from single-process CLIs to server-backed systems (like VS Code Server, GitHub Codespaces). Expect this pattern to accelerate as teams demand always-on agent workspaces.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the anthropics/skills repository, based on the most-watched activity data as of June 30, 2026.

---

## 1. Top Skills Ranking

The following are the most-discussed Skill submissions (PRs), ranked by community engagement, highlighting their functionality and current status.

1.  **Fix(skill-creator): `run_eval.py` always reports 0% recall** (PR #1298)
    - **Functionality:** A critical fix for the official skill-creator toolchain. This PR addresses a systemic bug where the evaluation loop (`run_eval.py`) fails to detect if a skill was triggered during testing, always reporting 0% recall. This renders the description-optimization loop inert, as it cannot differentiate between good and bad descriptions.
    - **Discussion:** The primary focus is on the root cause: the eval script failing to correctly identify the installed skill name and the subprocess test methodology being fundamentally flawed. This is the highest-priority fix for anyone building skills.
    - **Status:** Open
    - **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Add document-typography skill** (PR #514)
    - **Functionality:** A quality-of-life skill that prevents common typographic errors in AI-generated documents, such as orphaned words, widowed paragraphs, and numbering misalignment.
    - **Discussion:** Well-received as a "must-have" for any document-generation workflow. The discussion focuses on edge cases (e.g., markdown vs. PDF output) and the potential for CSS-based solutions, but the core value proposition is widely agreed upon.
    - **Status:** Open
    - **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **Fixes for case-sensitive file references in `pdf` skill** (PR #538) & **Prevent tracked change collision in `docx` skill** (PR #541)
    - **Functionality:** Two highly-targeted bug fixes. PR #538 fixes 8 case-sensitivity mismatches in the PDF skill that break on Linux/Mac. PR #541 prevents file corruption in DOCX files caused by ID collisions when adding tracked changes.
    - **Discussion:** These are mature, practical fixes for the popular document-format skills. The community values reliability over new features, making these highly-clicked/comment-worthy PRs.
    - **Status:** Open
    - **Link:** [PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541)

4.  **Add ODT skill** (PR #486)
    - **Functionality:** Adds a new skill for creating, reading, and converting OpenDocument Format files (.odt, .ods).
    - **Discussion:** Strong demand for better LibreOffice/ODF support. Comments focus on the complexity of handling the ODF format and ensuring the skill works with various templates. It fills a clear gap in the existing document-skills collection.
    - **Status:** Open
    - **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

5.  **Add Self-Audit skill** (PR #1367)
    - **Functionality:** A meta-skill that prompts Claude to audit its own output before delivery across four dimensions: completeness, consistency, grounding, and clarity.
    - **Discussion:** A very recent PR with immediate traction. The concept of a universal "quality gate" is seen as highly valuable for production use-cases, especially for users who want a final check on complex or agent-led work.
    - **Status:** Open
    - **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

6.  **Wireframing / Frontend-design skill** (PR #210)
    - **Functionality:** This PR revises the existing frontend-design skill to make its instructions more concrete, actionable, and coherent for a single conversation.
    - **Discussion:** This represents a community-led effort to curate and improve core skills that are already in the repo. The discussion is meta in nature, focusing on *how* to write a good skill (actionability vs. abstraction), rather than raw feature requests.
    - **Status:** Open
    - **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

---

## 2. Community Demand Trends

Analysis of the most active Issues reveals the following top-demand directions for new skills and improvements:

- **Security and Trust Boundaries:** The highest-traffic issue (#492) is a security concern about community skills being distributed under the anthropic/ namespace, enabling trust-boundary abuse. Demand is high for official namespacing, permission audit trails, and possibly a security-analyzer skill (PR #83).
- **Skill Creator Optimization:** A massive cluster of demand centers on fixing the `skill-creator` tooling. Issues #556, #1169, #1061, and related PRs all point to a broken evaluation loop that returns 0% recall. **The community's #1 engineering priority is getting the meta-tools for building skills to work reliably.**
- **Enterprise & Org-Wide Sharing:** Issue #228 (14 comments) highlights a strong desire for native organizational sharing of skills (e.g., a central library) instead of the current manual file-sharing workflow.
- **Agent Governance & Safety:** Issue #412 proposes a dedicated "agent-governance" skill for policy enforcement, threat detection, and audit trails. This dovetails with the security concerns from #492, indicating a growing maturity around agent safety.
- **Windows Compatibility:** A significant number of issues (#1061, #556) and PRs (#1099, #1050) are dedicated to fixing failures on Windows. The community explicitly demands full platform parity for the core toolchain.

---

## 3. High-Potential Pending Skills

These open PRs show active discussion and are likely to land in the repository soon.

- **Add `testing-patterns` skill** (PR #723): A comprehensive skill covering the full testing stack (unit, React, E2E). High demand from developers who want Claude to write thorough tests by default.
    - **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)
- **Add `shodh-memory` skill** (PR #154): A persistent memory system for maintaining context across conversations. This addresses a fundamental limitation of stateless agents.
    - **Link:** [PR #154](https://github.com/anthropics/skills/pull/154)
- **Add `codebase-inventory-audit` skill** (PR #147): A 10-step workflow for identifying orphaned code, documentation gaps, and unused infrastructure. Appeals to teams managing large, legacy codebases.
    - **Link:** [PR #147](https://github.com/anthropics/skills/pull/147)
- **Add SAP-RPT-1-OSS predictor skill** (PR #181): Integrates SAP's open-source tabular foundation model for predictive analytics. This is a niche but powerful enterprise-grade addition.
    - **Link:** [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, platform-agnostic skill-creation toolchain—specifically a fix for the broken `run_eval` evaluation loop—before they can confidently build and trust other high-value skills.**

---

# Claude Code Community Digest — 2026-06-30

## Today's Highlights

Anthropic shipped **v2.1.196** with org-default model support and readable session names, but the community conversation remains dominated by a long-running feature request for multi-account switching (616 👍, 122 comments) and a persistent OAuth MCP authentication bug (57 comments, open for nearly a year). Meanwhile, a surge of cybersecurity false-positive reports (5+ issues in 24h) suggests the safety filter is frustrating developers working on legitimate drone telemetry and video projects.

## Releases

**v2.1.196** landed in the last 24 hours with two notable improvements:
- **Org default models**: Admins can now set default models in the organization console; users see "Org default" or "Role default" in `/model` when they haven't picked one.
- **Readable session names**: Sessions get human-friendly default names at creation time for easier identification.

[View release →](https://github.com/anthropics/claude-code/releases/tag/v2.1.196)

## Hot Issues (Top 10 by community activity)

1. **#18435 — Multi-account switching in Claude Desktop** ★
   *616 reactions, 122 comments. Open since January 2026.*
   The most-upvoted open feature request. Users want to manage multiple Claude accounts (personal vs. work) within the desktop app with easy profile switching.
   [Issue →](https://github.com/anthropics/claude-code/issues/18435)

2. **#3433 — MCP OAuth failure on Linux** ★
   *138 reactions, 57 comments. Open since July 2025.*
   Claude Code cannot complete OAuth handshakes with GitHub’s remote MCP server on Linux. This is the oldest high-traffic bug still unresolved, affecting users who rely on GitHub's MCP server for CI/CD integrations.
   [Issue →](https://github.com/anthropics/claude-code/issues/3433)

3. **#38993 — Cowork virtiofs truncation on Windows** 
   *25 reactions, 32 comments.*
   Host-side file changes aren't reflected inside the Cowork VM due to stale virtiofs FUSE mounts. Affects Windows users heavily relying on the Cowork sandbox feature.
   [Issue →](https://github.com/anthropics/claude-code/issues/38993)

4. **#23030 — Premature rate limiting at 71% usage** 
   *13 reactions, 10 comments.*
   Max-plan users report hitting rate limits when the session meter shows only 71% consumed. Raises trust concerns around usage metering accuracy.
   [Issue →](https://github.com/anthropics/claude-code/issues/23030)

5. **#64061 — VS Code extension ignores sandbox settings** 
   *3 reactions, 4 comments.*
   Bash sandbox configured in `settings.json` is never activated when using the VS Code extension, making the approval-fatigue fix via sandbox unreachable in the IDE.
   [Issue →](https://github.com/anthropics/claude-code/issues/64061)

6. **#72373 — Cyber false-positive: drone telemetry code** 
   *0 reactions, 3 comments (but multiple duplicates).*
   Safety filter halts legitimate work reading drone sensor data. One of several "cyber" false-positive reports in 24h, suggesting the content filter is over-matching on aerospace/robotics terminology.
   [Issue →](https://github.com/anthropics/claude-code/issues/72373)

7. **#72367 — Sandbox OOM from recursive node_modules** 
   *0 reactions, 3 comments.*
   Sandbox mode recursively enumerates the workspace on first turn, descending into nested `node_modules` until OOM. Previously reported as #27863 and auto-closed without fix — now back with same reproduction.
   [Issue →](https://github.com/anthropics/claude-code/issues/72367)

8. **#69641 — Wrong musl binary deployed to glibc WSL2** 
   *0 reactions, 3 comments.*
   Desktop SSH remote deployment pushes a musl-linked binary to a glibc-based WSL2 host, causing `statx: symbol not found` crashes. Affects mixed Linux distribution environments.
   [Issue →](https://github.com/anthropics/claude-code/issues/69641)

9. **#72372 — Opus rate limit hidden from usage meter** 
   *0 reactions, 2 comments.*
   Pro-plan users on the Opus model hit invisible sub-quotas not reflected in the displayed usage meters. Creates confusing UX where users are blocked despite showing remaining capacity.
   [Issue →](https://github.com/anthropics/claude-code/issues/72372)

10. **#71644 — Subagents going idle** 
    *0 reactions, 4 comments.*
    Agentic subagents enter an idle state and stop making progress, stalling multi-agent workflows.
    [Issue →](https://github.com/anthropics/claude-code/issues/71644)

## Key PR Progress

1. **#72363 — Gateway GCP example: Agent Platform rebrand** ✅ *Closed*
   Prose-only updates to rename Vertex AI references to "Agent Platform" across the GCP gateway example, with backward-compatible mentions.
   [PR →](https://github.com/anthropics/claude-code/pull/72363)

2. **#72361 — Add Claude Gateway on GCP deployment assets** ✅ *Closed*
   Reference deployment artifacts (Terraform, scripts) for running Claude Gateway on Google Cloud, accompanying the published walkthrough.
   [PR →](https://github.com/anthropics/claude-code/pull/72361)

3. **#72264 — docs(examples/hooks): note Bash tool_input fields** 🔄 *Open*
   Documents that `tool_input` on Bash hooks also exposes `run_in_background`, `description`, and `timeout` — currently only `command` is documented.
   [PR →](https://github.com/anthropics/claude-code/pull/72264)

*(Note: Only 3 PRs were active in the last 24h, suggesting a quiet day for contributions or that maintainers are focused on triaging the issue backlog.)*

## Feature Request Trends

Three dominant feature directions emerged from today's issues:

1. **Multi-account & profile management** — #18435 remains the top-voted feature ever. Users need seamless switching between personal, work, and team accounts without re-authentication.

2. **Permission bypass documentation** — #72385 calls out that the `--dangerously-skip-permissions` flag for `claude agents` lacks clear documentation about per-spawn bypass behavior and the "bypass mode" disclaimer.

3. **One-shot model override** — #72362 requests a way to use a different model (e.g., Opus) for a single prompt without switching the entire session's model, catering to pay-per-token workflows where expensive models are only needed for specific complex prompts.

## Developer Pain Points

**Safety filter false positives (critical)** — 5+ issues in 24h (#72373, #72357, #72350, #72358, #72347) report the "cyber" safety filter blocking legitimate drone telemetry, video processing, and GUI HUD code. All report "session halted" severity, making this the most disruptive bug cluster this week. The consistent pattern suggests the filter over-matches on aerospace/hardware terminology.

**Sandbox usability issues (high frequency)** — Three distinct bugs hit sandbox users: recursive `node_modules` OOM (#72367, regressed from #27863), synchronous full-tree directory walk causing multi-minute hangs (#68587), and VS Code extension ignoring sandbox settings entirely (#64061). Sandbox mode is becoming a reliability liability.

**Platform-specific binary deployment** — The musl vs. glibc mixup (#69641) and the Windows Desktop app ignoring `defaultShell:"bash"` (#72389) highlight pain points for cross-platform teams, especially in WSL2 and SSH-remote workflows.

**Rate limit transparency** — Multiple reports (#23030, #72372) indicate that usage meters are not reflecting all quota dimensions (Opus sub-quotas, premature hard limits), eroding trust in the displayed metrics.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-30

## Today's Highlights

Two patch releases landed today: `rust-v0.142.4` (no user-facing changes) and `rust-v0.143.0-alpha.31`. The community remains laser-focused on **token burn rates and quota accounting**, with the top issue (#14593) now at 626 comments and over 276 reactions. Meanwhile, the engineering team is shipping a wave of **security-hardening PRs** around Git command safety, sandbox boundaries, and PowerShell parser trust, alongside performance work on remote first-turn latency and WebSocket prewarming.

## Releases

- **[rust-v0.142.4](https://github.com/openai/codex/releases/tag/rust-v0.142.4)**: No user-facing changes. Changelog covers internal chore updates only.
- **[rust-v0.143.0-alpha.31](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.31)**: Alpha release with no detailed changelog provided.

## Hot Issues

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)**  
   *626 comments, 276 👍* — The single most active Codex issue ever. Business-tier users on Windows report token depletion far faster than expected. OpenAI has not yet acknowledged root cause.

2. **[#11023 – Linux desktop app request](https://github.com/openai/codex/issues/11023)**  
   *132 comments, 658 👍* — The highest-reacted open issue. Users cite macOS power consumption issues and demand native Linux support. A clear community priority.

3. **[#28224 – SQLite feedback logs writing ~640 TB/year](https://github.com/openai/codex/issues/28224)**  
   *107 comments, 407 👍* — Author reports fix merged (85% reduction in log writes via three PRs). Issue closed by OP, reflecting rare positive resolution velocity.

4. **[#25749 – Inaccessible legacy phone number recovery](https://github.com/openai/codex/issues/25749)**  
   *65 comments, 43 👍* — Users locked out by MFA phone number requirements with no recovery path. High severity for account access.

5. **[#30224 – Model not supported with X-OpenAI-Internal-Codex-Responses-Lite](https://github.com/openai/codex/issues/30224)**  
   *57 comments, 20 👍* — API returns opaque “model not supported” when using internal header. Blocks custom model usage for power users.

6. **[#5957 – Auto compaction causes GPT-5-Codex to lose the plot](https://github.com/openai/codex/issues/5957)**  
   *32 comments, 9 👍* — Long-standing bug (since Oct 2025) where context compaction resets task state. Enterprise users report lost work.

7. **[#30002 – Quota over-reports after 5h reset](https://github.com/openai/codex/issues/30002)**  
   *29 comments, 6 👍* — Pro account burns 5h limit in ~41 minutes (~1.35M tokens) vs normal ~156M tokens. Systemic accounting bug.

8. **[#17827 – Customizable status line (TUI)](https://github.com/openai/codex/issues/17827)**  
   *20 comments, 78 👍* — Request inspired by Claude Code’s status line. Wants token usage, model name, rate limits, context window shown live.

9. **[#29356 – Context compaction loses operational continuity](https://github.com/openai/codex/issues/29356)**  
   *14 comments* — User requests preserving last 5 operational steps verbatim during compaction to prevent task derailment.

10. **[#25792 – Compaction forgets AGENTS rules, jumps from 97% to 42%](https://github.com/openai/codex/issues/25792)**  
    *11 comments* — Another compaction failure: task progress regresses severely after automatic context trimming.

## Key PR Progress

1. **[#30269 – Disable Nagle on Rendezvous WebSockets](https://github.com/openai/codex/pull/30269)** (CLOSED)  
   Unconditionally disables Nagle’s algorithm for exec-server WebSocket connections, reducing latency for remote tool execution.

2. **[#28714 – Require approval for generic Git commands](https://github.com/openai/codex/pull/28714)** (OPEN)  
   Security fix: argv-only “read-only Git” classification was unsafe. Adds granular approval for repository discovery, config, and attribute commands.

3. **[#30618 – Prevent tool-search rollout poisoning](https://github.com/openai/codex/pull/30618)** (OPEN, code-reviewed)  
   Fixes persistent session corruption where malformed `tool_search_call.arguments` could be replayed on every follow-up and cold resume.

4. **[#27914 – Fail closed on executable Git worktree helpers](https://github.com/openai/codex/pull/27914)** (OPEN)  
   Blocks repository-controlled content filters and merge drivers from executing during patch operations (security hardening per PSEC-4394).

5. **[#29470 – Deny implicit transport for local-only Git operations](https://github.com/openai/codex/pull/29470)** (OPEN)  
   Prevents partial clone lazy fetches from crossing network boundaries during local-only Git commands.

6. **[#30631 – Harden fake shell approval boundaries](https://github.com/openai/codex/pull/30631)** (OPEN)  
   Prevents model-selected fake shells from inheriting trust from wrapped safe commands like `ls`, closing sandbox expansion bypass.

7. **[#30628 – Trust only system PowerShell parsers on Windows](https://github.com/openai/codex/pull/30628)** (OPEN)  
   Stops recognizing repository-controlled `pwsh.exe` for safety classification. System path only for AST parsing.

8. **[#30632 – Trace/reduce remote first-turn latency](https://github.com/openai/codex/pull/30632)** (OPEN)  
   Adds W3C trace context propagation across Core, exec-server RPC, and Noise relay; removes several avoidable waits in the first-turn path.

9. **[#30621 – Trace startup WebSocket prewarm](https://github.com/openai/codex/pull/30621)** (OPEN)  
   Preserves trace context across spawned prewarm tasks and adds spans for startup WebSocket warmup, aiding latency debugging.

10. **[#30611 – Bound outbound requests by total deadline](https://github.com/openai/codex/pull/30611)** (OPEN)  
    Fixes app-server requests that could be dispatched after the caller’s deadline under backpressure, causing misleading timeouts.

## Feature Request Trends

- **Linux Desktop App** (#11023, 658 👍) — Dominant request; macOS App power issues cited as catalyst.
- **Customizable TUI/App** (#17827, #23517) — Status line customization and disabling autoscroll are recurring requests.
- **Background monitoring capability** (#29922) — Users want an `agent-callable` monitor tool to react to logs, files, builds, and CI events without polling.
- **Remote control (Claude Code-style)** (#27565) — Sync CLI and mobile sessions without SSH tunnels.
- **Agent communication logging** (#30516, PR) — Request for structured observation of agent lifecycle events.

## Developer Pain Points

- **Token burn / quota accounting** dominates: issues #14593 (626 comments), #30002 (29 comments), #30575, #30577. Users report burning through limits far faster than expected, with Pro 5h limits consumed in 41 minutes.
- **Context compaction reliability** (#5957, #29356, #25792) is a multi-year pain point. The model “forgets” task state, resets progress, loses AGENTS rules — especially problematic for long-running enterprise workflows.
- **Windows sandbox and Git polling** (#20570, #29492, #29408) — Spawned `git.exe` processes remain alive, empty `.git` folders created, sandbox runner errors (`CreateProcessAsUserW` failed 1920) plague Windows users.
- **macOS MCP/Computer Use resource leaks** (#25744) — Accumulated unreaped child processes cause HID lag and WindowServer/TCC stalls on long sessions.
- **Linux inotify exhaustion** (#23574) — VS Code extension allocates ~1M inotify watches on large workspaces, hitting system limits.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-30

## Today's Highlights
A nightly release advanced the CLI to v0.51.0, while the team landed urgent fixes for signal forwarding during relaunch, VS Code disposable leaks, and malformed auth URLs. On the security front, a PR hardened file-write scope to prevent sandbox escape via `.gemini` config modification, and a separate fix corrected a trust dialog that disclosed the wrong hook shape.

## Releases
**v0.51.0-nightly.20260629.gae0a3aa7b** — Automated nightly build.  
Full changelog: [compare](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovers from `MAX_TURNS` but reports `status: "success"`, hiding the interruption. High priority P1 bug; 8 comments, 2 👍. Misleading success signals erode trust in agent reliability.

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Epic for robust component-level evaluations. 7 comments. Tracks building on prior behavioral eval work; critical for quality assurance as the agent surface expands.

3. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Investigate AST-aware file reads, search, and codebase mapping. 7 comments. Could reduce token waste and turn counts by letting the agent navigate code precisely.

4. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs forever on simple tasks. 7 comments, 8 👍. One of the most upvoted bugs this period; forces users to disable subagents entirely.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini rarely uses custom skills and sub-agents autonomously. 6 comments. Users report the model ignores tooling even when tasks match descriptions.

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory lacks deterministic redaction and logs too aggressively. 5 comments. A security/privacy concern: secrets may reach model context before redaction runs.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — Auto Memory retries low-signal sessions indefinitely. 5 comments. Creates infinite re-processing cycles, wasting quota and CPU.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell execution gets stuck "Waiting input" after command completes. 4 comments, 3 👍. Frequent hang that breaks interactive workflows; effort/medium.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails on Wayland. 4 comments. Linux users hitting a platform-specific barrier.

10. **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)** — Invalid Auto Memory inbox patches are silently skipped but remain on disk. 3 comments. Accumulating `.patch` files causes clutter and incidental disclosure risk.

## Key PR Progress

1. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)** — Limits recursive reasoning to 15 turns per user request. Protects against infinite loops; customizable. Strong defense-in-depth for agent stability.

2. **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)** — Strips model internal thoughts from scrubbed history. Fixes "thought leakage" that causes the model to regress into monologues.

3. **[#28216](https://github.com/google-gemini/gemini-cli/pull/28216)** — Excludes transient CI credential files (`gha-creds-*.json`) from workspace context. Reduces noise and accidental credential exposure.

4. **[#28015](https://github.com/google-gemini/gemini-cli/pull/28015)** — Implements Cloud Run webhook ingestion for the Caretaker Agent. Large PR adding GitHub webhook verification and Firestore-based issue storage.

5. **[#28053](https://github.com/google-gemini/gemini-cli/pull/28053)** — Defensive path resolution for `@`-prefixed file references. Fixes production bug where `read_file`/`write_file` fail on `@policies/new-policies.txt`.

6. **[#28215](https://github.com/google-gemini/gemini-cli/pull/28215)** — Hardens file-write scope to block sandbox writes into `.gemini` and `.gitconfig`. Closes a prompt-injection sandbox escape path.

7. **[#28163](https://github.com/google-gemini/gemini-cli/pull/28163)** — Part 1 of Caretaker Agent triage worker core. Adds Firestore schema, Pub/Sub publisher, and Cloud Run entrypoint scaffolding.

8. **[#28126](https://github.com/google-gemini/gemini-cli/pull/28126)** — Appends `...` to multi-line edit snippet descriptions. Small UX fix preventing confusion about edit scope.

9. **[#28202](https://github.com/google-gemini/gemini-cli/pull/28202)** — Forwards SIGINT/SIGTERM/SIGQUIT to child process during relaunch. Fixes orphaned processes on Ctrl+C during updates.

10. **[#28201](https://github.com/google-gemini/gemini-cli/pull/28201)** — Removes double-wrapping of VS Code disposables. Fixes subscription leak in the IDE Companion extension.

## Feature Request Trends

- **AST-aware tooling** (#22745, #22746): Multiple requests for Abstract Syntax Tree parsing to enable precise method-level file reads and smarter codebase mapping. The goal is fewer turns and less token waste.
- **Agent self-awareness** (#21432): Users want the CLI to accurately describe its own flags, hotkeys, and capabilities, so it can serve as its own onboarding guide.
- **Subagent trajectory sharing** (#22598): Demand for making subagent trajectories visible via `/chat share` to ease debugging and evaluation of nested agent behavior.
- **Recovery and resilience** (#22232): Requests for automatic browser session takeover, lock recovery, and graceful handling of persistent profile contention.

## Developer Pain Points

1. **Misleading success signals** (#22323): Subagents reporting `GOAL` success when they actually hit `MAX_TURNS` undermines debugging and trust.
2. **Silent agent hangs** (#21409, #25166): The generalist agent and shell execution both hang without feedback, forcing manual cancellation or process kills.
3. **Auto Memory side effects** (#26522, #26523, #26525): Retry loops, silent quorum on invalid patches, and pre-redaction secret exposure create a recurring pain point around the memory system.
4. **Model-tool gap** (#21968, #23571): The model under-uses custom skills and scatters tmp scripts across the workspace, indicating poor alignment between tool definitions and model behavior.
5. **Configuration escape** (#28215, #22267): The agent can modify its own config file under auto-accept, and the browser agent ignores `settings.json` overrides, breaking expected behavior boundaries.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-30

## Today's Highlights
A new patch release (v1.0.66-2) landed, fixing plugin name conflicts and enabling deeper integration with CLI user settings. Meanwhile, the community flagged critical session-related bugs, including an indefinite loop in Copilot Agent sessions that has persisted for months. The growing demand for enterprise-grade local configuration management and session lifecycle controls dominated feature discussions.

## Releases
**v1.0.66-2** — Minor patch with notable additions:
- Allows skills with identical names from different plugins to coexist without collisions
- Lets integrations read and write CLI user settings
- Exposes LSP server logs via `/lsp logs` and `read_agent`
- Prompts users to install `gh` CLI when it is missing in GitHub repositories
- Adds GitHub attachment variants to prompt rendering

[View release →](https://github.com/github/copilot-cli/releases/tag/v1.0.66-2)

## Hot Issues

1. **[#1799] How to turn off alt-screen views?**  
   *doggy8088* — The recently introduced alt-screen rendering has created widespread frustration. Users want a toggle to revert to the original inline mode. (👍 7, 10 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/1799)

2. **[#2364] [Critical] Copilot Agent session runs indefinitely, cannot stop or reply**  
   *erbanku* — Agent sessions in org repos can get stuck, showing only the initial draft PR with no further progress. No way to terminate or interact. (👍 2, 4 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/2364)

3. **[#3600] [Critical] Orphaned sessions running for two months**  
   *erbanku* — Related to #2364: agents leave behind zombie sessions that accumulate, with no manual cleanup mechanism. (👍 0, 3 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/3600)

4. **[#3948] `web_fetch` always fails with `TypeError: fetch failed`**  
   *credmond* — Every web fetch tool call fails regardless of proxy or auth configuration, effectively breaking network-dependent agents. (👍 0, 2 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/3948)

5. **[#3957] Trackpad scrolling selects prompts instead of scrolling**  
   *doggy8088* — On macOS with Ghostty terminal, trackpad scroll gestures hijack prompt selection instead of scrolling the chat history. (👍 4, 1 comment)  
   [Issue →](https://github.com/github/copilot-cli/issues/3957)

6. **[#3936] Ctrl+G should expand paste tokens in $EDITOR**  
   *automotua* — With `compactPaste` enabled, pressing Ctrl+G writes the collapsed token literal into the editor, breaking the editing workflow. Users expect full-text expansion. (👍 0, 2 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/3936)

7. **[#3958] Windows: v1.0.66 breaks stdio MCP servers using .bat/.cmd**  
   *chronofanz* — A regression in v1.0.66 prevents MCP servers with `.bat`/`.cmd` commands from starting on Windows due to cmd.exe syntax errors. (👍 0, 1 comment)  
   [Issue →](https://github.com/github/copilot-cli/issues/3958)

8. **[#3972] UI streams mouse movement characters instead of rendering**  
   *BPapp-MS* — On first load, the terminal UI displays a stream of raw mouse movement data instead of the proper interface, rendering the CLI unusable until restart. (👍 0, 0 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/3972)

9. **[#3909] Feature: enterprise server-managed settings for local CLI**  
   *velimattiv* — Org admins cannot centrally push env vars to local Copilot CLI installs. Only Codespaces/Agents support server-side config, leaving on-prem setups unmanaged. (👍 0, 3 comments)  
   [Issue →](https://github.com/github/copilot-cli/issues/3909)

10. **[#3962] v1.0.65 fails to start**  
    *wangvisual* — After an upgrade, the CLI hangs or crashes at startup with no error output. Affects multiple users across platforms. (👍 0, 1 comment)  
    [Issue →](https://github.com/github/copilot-cli/issues/3962)

## Key PR Progress
*No pull requests were updated in the last 24 hours.* — This is unusual; development activity appears to have slowed or shifted to internal branches.

## Feature Request Trends
- **Session lifecycle management**: Multiple requests for session retention/expiration dates (#3963), user-defined tags (#3970), and plan status indicators (#3969). Users want better visibility and organization as session counts grow.
- **Enterprise local configuration**: Centralized org-level settings for local CLI installs (#3909), especially env variables, is a recurring ask from administrators.
- **Full file-tree browser for repo-backed sessions**: The app provides a tree view for folder sessions but only a git Changes view for repo sessions — users want parity (#3971).
- **MCP server coexistence**: Requests for warnings when MCP servers share names across plugins (#3893), and proper OAuth re-auth handling on Windows (#3973).

## Developer Pain Points
- **Session synchronization and ghost sessions**: The `session_store_sql` tool silently returns empty when sync is set to local (#2654), and agents create orphaned sessions that cannot be terminated (#2364, #3600). This undermines trust in the persistence layer.
- **Terminal rendering regressions**: Alt-screen mode (#1799), ghost characters after deletion (#3959), mouse movement leaks (#3972), and trackpad scrolling issues (#3957) collectively degrade the terminal UX.
- **Windows platform regressions**: MCP server startup failure for `.bat`/`.cmd` files (#3958) and OAuth re-auth loopback port conflicts (#3973) are blocking Windows adopters.
- **Network reliability**: The `web_fetch` tool consistently fails (#3948), and `/chronicle standup` errors on cloud query failures even when local data exists (#3904), breaking agent tooling.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest**
**Date:** 2026-06-30
**Data Source:** github.com/MoonshotAI/kimi-cli

---

### 1. Today's Highlights
The community is actively shaping the CLI’s UX, with a critical open issue (now at #2479) highlighting a fundamental conflict between mobile and desktop input handling for the Enter key. No new releases or pull requests were merged in the last 24 hours, suggesting the team is focusing on larger feature work or bug fixing behind the scenes.

### 2. Releases
No new versions were released in the last 24 hours.

### 3. Hot Issues
*Only one issue was updated in the last 24 hours.*

1.  **#2479 – [enhancement] Bad usage of return and enter for desktop and mobile**
    *   **Author:** Dealazer
    *   **Summary:** The current behavior where pressing Enter sends the prompt on mobile makes phone usage “impractical.” On desktop, users must hold Shift+Enter for a new line, breaking a common expectation. This directly impacts mobile adoption and desktop productivity.
    *   **Why it matters:** This is a foundational UX complaint. If the CLI is intended to be used cross-platform, a configurable Enter behavior (send vs. newline) is critical. The lack of comments suggests either the author is the first to formally raise this or the community is silently struggling.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2479](https://github.com/MoonshotAI/kimi-cli/issues/2479)

### 4. Key PR Progress
No pull requests were updated in the last 24 hours.

### 5. Feature Request Trends
While only one issue was updated, the content of **#2479** signals a larger, unspoken trend: **Cross-Platform Interaction Consistency.** The community is demanding that behavior for core actions (like sending a prompt vs. inserting a newline) be either unified or configurable per device class.

**Recurring directions (extrapolated from the current issue):**
- **Input mode toggle:** Users want a simple switch for "Enter = Send" vs. "Enter = Newline."
- **Mobile-first refinements:** The CLI is being used on phones, which suggests demand for responsive UI elements or touch-optimized commands.
- **Desktop ergonomics:** The complaint about Shift+Enter implies users expect a standard terminal or messenger-like experience.

### 6. Developer Pain Points
The single issue distills a clear pain point:

- **Ambiguous keyboard mapping:** Developers (and general users) are frustrated by the lack of predictable behavior for the Enter key. Using a CLI on a phone is broken, and on desktop it forces an unnatural key combination.
- **Lack of configuration:** The absence of a `--input-mode` flag or a settings option to adjust this behavior is causing friction. The `0` 👍 count suggests either low visibility or that the problem is so pervasive users assume “it’s just how it works.”

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-30

## Today's Highlights

The OpenCode ecosystem saw heavy activity around the V2 platform migration, with multiple structural PRs landing for MCP integration, Promise client generation, and TUI migration tracking. A cluster of issues around GLM prompt cache instability on the `opencode-go` gateway suggests growing production pain with Zhipu-backed models. Meanwhile, the community continues to push for skill frontmatter parity with Claude Code, with `disable-model-invocation` support now raised in two separate issues.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#30680 — OpenCode immediately enters auto-compaction loop and stops generating responses](https://github.com/anomalyco/opencode/issues/30680)**  
   *Closed.* A critical bug where OpenCode repeatedly auto-compacts and consumes tokens in a loop, eventually halting all response generation. Occurs even in fresh empty folders. 10 comments.

2. **[#22132 — OpenCode 1.4.3 hangs with local Ollama provider on simple prompts](https://github.com/anomalyco/opencode/issues/22132)**  
   *Open.* Hangs when using `@ai-sdk/openai-compatible` with Ollama, even on trivial prompts like `ci`. `v1/chat/completions` works fine directly. 10 comments, 5 👍.

3. **[#33998 — GLM-5.2 prompt cache randomly drops to ~500 tokens on opencode-go](https://github.com/anomalyco/opencode/issues/33998)**  
   *Open.* Intermittent cache drops despite byte-identical system prompts across 36 API calls. Causes unexpected cost spikes. 6 comments.

4. **[#33696 — GitHub Copilot provider broken](https://github.com/anomalyco/opencode/issues/33696)**  
   *Open.* No models found after fresh auth flow; cache deletion doesn't help. Affects users relying on the Copilot provider path. 5 comments, 4 👍.

5. **[#31348 — GLM-5.1 prompt cache drops to 0 on opencode-go, while DeepSeek V4 Flash works reliably](https://github.com/anomalyco/opencode/issues/31348)**  
   *Open.* Same workflow works reliably with DeepSeek but GLM-5.1 cache reads drop to 0, causing large cost spikes. 5 comments, 3 👍.

6. **[#33490 — GLM-5.2 via OpenCode Go: extra inputs not permitted, field instructions](https://github.com/anomalyco/opencode/issues/33490)**  
   *Open.* GLM-5.2 rejects the `instructions` field entirely when routed through OpenCode Go → Z.AI (Zhipu). Blocks usage of certain model features. 5 comments, 3 👍.

7. **[#34532 — Persistent red status dot after tool-loader failure; only clean reinstall cleared it](https://github.com/anomalyco/opencode/issues/34532)**  
   *Open.* macOS bug: broken custom tools under global tools dir cause a permanent red dot. Fixing tools restores functionality but red dot persists until full reinstall. 2 comments.

8. **[#34471 — Desktop loses access to existing sessions after profile reset](https://github.com/anomalyco/opencode/issues/34471)**  
   *Open.* After fixing "Interrupted" errors by resetting profile, all chat history disappears from both Desktop and Web, despite `opencode.db` still containing the data. 2 comments.

9. **[#31500 — VS Code extension fails to install / missing link for manual install](https://github.com/anomalyco/opencode/issues/31500)**  
   *Open.* Documentation mentions VS Code extension but doesn't provide clear install instructions or marketplace link. Typing `opencode` in VS Code terminal doesn't trigger installation. 4 comments.

10. **[#34484 — PAYMENT ISSUED BUT SUBSCRIPTION NOT ACTIVE](https://github.com/anomalyco/opencode/issues/34484)**  
    *Closed.* Billing issue: $5 Go plan payment deducted but no active subscription or API key generated. Requires refund. 2 comments.

## Key PR Progress

1. **[#34534 — feat(client): expose shell api group](https://github.com/anomalyco/opencode/pull/34534)**  
   Exposes generated client shell group as `api.shell`, migrates TUI shell list/remove to the generated Promise client. Part of the V2 client migration tracked in #34359.

2. **[#33822 — feat(ci): use Bun canary for beta channel](https://github.com/anomalyco/opencode/pull/33822)**  
   Switches CI to Bun canary for beta releases due to frequent segfaults with Bun 1.3.14 on Windows. The Bun Rust rewrite is showing better stability.

3. **[#34060 — feat(provider): add free model resolution for --model free](https://github.com/anomalyco/opencode/pull/34060)**  
   Adds `--model free` support for both `opencode run` and TUI. Picks a random OpenCode Zen zero-cost model, making cost-free usage more accessible.

4. **[#34531 — feat(core): support mcp prompts](https://github.com/anomalyco/opencode/pull/34531)**  
   Exposes MCP prompt definitions and `getPrompt` through the core MCP client wrapper. Implements `MCP.prompts()` across connected servers with stable sorting.

5. **[#34533 — [beta] test(app): add timeline layout continuity coverage](https://github.com/anomalyco/opencode/pull/34533)**  
   Adds production-build timeline layout-continuity test suite with typed regions, schema-validated fixtures, and deterministic persistent SSE delivery.

6. **[#34530 — fix(tui): queue busy prompts after interrupt](https://github.com/anomalyco/opencode/pull/34530)**  
   Prevents the full-screen TUI from accepting new prompts while a session is still busy processing. Fixes a race condition where prompts would be lost after interrupt.

7. **[#34512 — fix(core): sanitize registered tool names](https://github.com/anomalyco/opencode/pull/34512)**  
   Applies MCP-style name sanitization to core tool registration, preventing invalid model-facing names from breaking tool invocation.

8. **[#34504 — feat(client): expose fs read in promise client](https://github.com/anomalyco/opencode/pull/34504)**  
   Adds binary `Uint8Array` response support to the Promise client codegen, exposes `files.read` while supporting trailing wildcard paths.

9. **[#34525 — fix(core): clean up mcp stdio descendants](https://github.com/anomalyco/opencode/pull/34525)**  
   Ensures descendant processes of stdio MCP transports are terminated before closing SDK client or transport. Prevents zombie process accumulation.

10. **[#34527 — fix(core): repair v2 unit test failures](https://github.com/anomalyco/opencode/pull/34527)**  
    Fixes two root causes of failing unit tests on `v2` branch: stale `shell` expectation in location tool map, and incorrect function reference in `list-profiles`.

## Feature Request Trends

- **Skill Frontmatter Parity**: Two separate issues (#11972, #34498) request support for `disable-model-invocation: true` in `SKILL.md` frontmatter, matching Claude Code and Cursor behavior.
- **V2 API Expansion**: Multiple V2-specific feature requests (#34359, #34430, #34488, #34380) focus on session forking, reasoning options, config update endpoints, and session-scoped keyed context contributions.
- **LaTeX Rendering**: Issue #11655 (27 👍) continues to gather interest for LaTeX rendering in the TUI, suggesting strong demand from academic and research users.

## Developer Pain Points

- **GLM Model Cache Instability**: Two separate issues (#33998, #31348) report random prompt cache drops on GLM-5.1 and GLM-5.2 via `opencode-go` gateway, causing unpredictable cost spikes. DeepSeek V4 Flash works reliably in the same workflows.
- **Provider Fragility**: Copilot provider broken (#33696), Ollama hangs (#22132), GLM-5.2 rejects `instructions` field (#33490) — three distinct provider integration failures reported in the last week.
- **State Persistence Bugs**: Profile reset wiping session history despite database intact (#34471), and persistent red status dot surviving tool-loading fixes (#34532), point to UI state management issues.
- **Documentation Gaps**: VS Code extension install instructions are unclear (#31500), forcing users to hunt for manual installation paths.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the **Pi Community Digest** for **2026-06-30**.

---

## Pi Community Digest — 2026-06-30

### Today's Highlights
The Pi ecosystem saw a burst of activity focused on core reliability and developer ergonomics. A major cross-provider fix for surfacing opaque HTTP error bodies was merged, significantly improving debuggability behind proxies. Simultaneously, the community flagged several critical regressions, including a crash caused by mid-stream `ECONNRESET` errors and a severe context-wasting bug where large `thinking` blocks bypassed the compaction limit.

### Releases
No new releases were published in the last 24 hours. The previous release, `v0.80.1`, is still the latest, though a critical issue with Cloudflare Workers.AI (404 error, Issue #6021) was reported against it.

### Hot Issues

1.  **#5825: [CLOSED] Streaming markdown forces scroll to bottom** — *By xl0*
    - A high-priority TUI bug where enabling `clear on shrink` caused the terminal to auto-scroll to the bottom, interrupting the user’s reading flow. This fix is expected in an upcoming release. [Link](https://github.com/earendil-works/pi/issues/5825) (42 comments)

2.  **#6083: [CLOSED] LLM cache not working with z.ai GLM coding plan** — *By skhoroshavin*
    - A high-value issue (👍 9) revealing that multi-step tool calls with z.ai’s GLM model burn session limits rapidly because the context cache is not respected. This is a significant cost/efficiency blocker for z.ai users. [Link](https://github.com/earendil-works/pi/issues/6083)

3.  **#6166: [CLOSED] 90k char thinking block considered context for compaction** — *By kecskemeti*
    - A critical compaction bug. Despite setting `keeprecenttokens` to 3k, a 90k-character thinking block was retained verbatim in the context, bypassing the designated token limit. This directly impacts long-running agent tasks. [Link](https://github.com/earendil-works/pi/issues/6166)

4.  **#6158: [CLOSED] Repeated tool calls loop without interruption** — *By xayjin*
    - A core agent loop issue where the model got stuck executing `ls` repeatedly, failing to progress to a fixing action. This highlights a lack of guardrails against redundant file inspection loops. [Link](https://github.com/earendil-works/pi/issues/6158)

5.  **#6133: [OPEN] `uncaughtException: TypeError: terminated (ECONNRESET)` during streaming** — *By drvova*
    - A crash bug causing the entire Pi process to exit when an upstream LLM provider resets the TCP connection mid-stream. The error escapes the streaming try/catch, requiring a process-level fix. [Link](https://github.com/earendil-works/pi/issues/6133)

6.  **#5871: [OPEN] Anthropic OAuth-token detection hardcoded to `sk-ant-oat`** — *By fw6*
    - A config limitation: scoped Anthropic API keys (which look like regular keys `sk-ant-api03-...`) are not recognized as OAuth tokens, breaking authentication for enterprise users who manage scoped keys. [Link](https://github.com/earendil-works/pi/issues/5871)

7.  **#6155: [CLOSED] Package Report: `pi-wiki`** — *By ellipticview*
    - A security report flagging a potential impersonation package (`pi-wiki`) with a non-functional GitHub repo. This triggered a wave of similar reports (#6154, #6153) about dead or suspicious packages, underscoring the need for stronger package validation. [Link](https://github.com/earendil-works/pi/issues/6155)

8.  **#6124: [OPEN] Devnagri breaking the Pi harness** — *By sagarsrc*
    - A Unicode handling bug in the TUI harness. Typing Devanagari script (e.g., `नेटवर्क`) breaks the UI layout, making the tool unusable for a large user base. [Link](https://github.com/earendil-works/pi/issues/6124)

9.  **#6019: [CLOSED] OpenAI Responses mid-stream retryable error not retried** — *By Mallikarjun-0*
    - A reliability gap where Pi fails to retry on OpenAI's explicit "retryable" error codes after the stream has started, resulting in a finalized error message instead of a graceful retry. [Link](https://github.com/earendil-works/pi/issues/6019)

10. **#6157: [OPEN] Compaction summary should be in the session’s language** — *By HaoxuanLiTHUAI*
    - A feature request to make compaction summaries (the `## Goal` / `## Progress` headers) generated in the user’s conversation language, rather than hardcoded English, improving non-English user experience. [Link](https://github.com/earendil-works/pi/issues/6157)

### Key PR Progress

1.  **#6170: [CLOSED] Avoid replaying historical inline images** — *By sethkarten*
    - Stops replaying inline terminal image escape payloads when rebuilding historical session context, replacing them with lightweight `[Image: ...]` labels. This reduces context bloat during compaction. [Link](https://github.com/earendil-works/pi/pull/6170)

2.  **#6169: [OPEN] Disable padding for assistant messages** — *By xl0*
    - A follow-up UX fix to the scroll-to-bottom issue (#5825), allowing users to configure zero padding around TUI output. [Link](https://github.com/earendil-works/pi/pull/6169)

3.  **#6051: [CLOSED] fix(ai): recover from hung streams and retry unmodeled Bedrock errors** — *By eyalroth*
    - Adds idle timeout (`streamIdleTimeoutMs`, default 240s) and connect timeout (`connectTimeoutMs`) handling for Bedrock, turning silent half-open sockets and unmodeled errors into retryable failures. [Link](https://github.com/earendil-works/pi/pull/6051)

4.  **#5832: [CLOSED] fix(ai): surface provider HTTP error body** — *By stephanmck*
    - Fixes #5763. This is a major debugging win: proxy/gateway errors (e.g., 403) will now include the provider's raw error body, instead of opaque messages like `Unknown: UnknownError`. [Link](https://github.com/earendil-works/pi/pull/5832)

5.  **#6026: [CLOSED] fix(tui): stabilize working status row** — *By xl0*
    - A critical TUI stabilization fix related to the scroll-to-bottom issue (#5825), improving the rendering of the working status row during streaming. [Link](https://github.com/earendil-works/pi/pull/6026)

6.  **#6161: [CLOSED] fix(ai): map Bedrock apiKey auth to bearer token env** — *By max1874*
    - Prevents double-posting of `apiKey` to the Bedrock Converse API by mapping it to the request-scoped `env.AWS_BEARER_TOKEN_BEDROCK` field. [Link](https://github.com/earendil-works/pi/pull/6161)

7.  **#6156: [CLOSED] fix(ai): return empty string for empty tool results** — *By Jason-Shen2*
    - Fixes a bug where empty tool results (e.g., from a successful edit) were incorrectly reported to the model as `(see attached image)`, causing confusion in OpenAI handlers. [Link](https://github.com/earendil-works/pi/pull/6156)

8.  **#6026: [CLOSED] fix(tui): stabilize working status row** — *By xl0*
    - (Same as #5) The community is seeing multiple PRs targeting the same TUI stability regression, indicating the team is prioritizing terminal UX robustness. [Link](https://github.com/earendil-works/pi/pull/6026)

9.  **#6163: [CLOSED] Map Bedrock apiKey auth to bearer-token env** — *By max1874*
    - (Different PR from #6161) An attempt to map `apiKey` to `AWS_BEARER_TOKEN_BEDROCK` before calling the API. Was auto-closed by the contributor gate, but the issue remains open. [Link](https://github.com/earendil-works/pi/pull/6163)

10. **#6160: [CLOSED] Package report: @jsylvan/pi-parallel-research** — *By jsylvan*
    - A new native extension for Parallel.ai Task Runs, offering 5 tools and conversation chaining. This signals growing interest in specialized, research-focused extensions. [Link](https://github.com/earendil-works/pi/issues/6160)

### Feature Request Trends

- **Enterprise Administration:** Multiple requests (#6159, #6153, #6152) for admin-level config overrides (`/etc`, `%ProgramData%`) and package validation to manage Pi deployments across teams and prevent malicious/impersonation packages.
- **Non-English & Unicode Support:** A strong push for locale-aware compaction summaries (#6157) and fixes for Devanagari script rendering (#6124), indicating a growing international user base.
- **Provider Extensibility & Economy:** Users are actively requesting support for new providers (Scaleway #6165) and reporting incorrect pricing data for existing ones (Xiaomi #6138). The community expects dynamic, accurate cost tracking.
- **Context & Compaction Control:** Developers want finer-grained control over what gets compacted (e.g., skipping large thinking blocks #6166) and the ability to run compaction in the language of the session (#6157).

### Developer Pain Points

1.  **Context Bloat & Token Waste:** The most frequent frustration. Issues like #6083 (cache not working) and #6166 (thinking blocks bypassing compaction) show that token management is the #1 reliability and cost pain point.
2.  **Opaque Error Handling:** Despite the fix in PR #5832, the ecosystem still suffers from silent failures. The `ECONNRESET` crash (#6133) and the unreported error bodies (#5763) are prime examples of poor debuggability.
3.  **Model Loop Inefficiency:** Models getting stuck in repetitive tool call cycles (#6158) without self-interruption is a persistent agent-loop problem that erodes user trust.
4.  **Package Ecosystem Safety:** The wave of malicious/dead package reports (#6155, #6154, #6153) highlights a critical lack of governance in the Pi package registry, eroding trust in third-party extensions.
5.  **Configuration Rigidity:** Hardcoded token prefixes (#5871) and a lack of profile isolation (#3966) force power users into manual workarounds, slowing down multi-project workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-30

## Today's Highlights
A surge of submissions today—30 issues and 50 PRs updated in 24 hours—reflects intense community activity around daemon reliability and mobile UX. Notable progress includes `#5953`, which enables hot-reload for LSP servers, and the launch of several web shell improvements (`#6003`, `#6025`). On the bug front, streaming timeouts (`#5975`) and memory issues during MCP installation (`#6004`) remain top-of-mind.

## Releases
No new releases in the last 24 hours. The latest tag remains `v0.19.3`, with a failed nightly build attempt (`#5969`) on `v0.19.3-nightly.20260629.ee375c6a4` due to an integration Docker job failure.

## Hot Issues
1. **#5975** — [API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)  
   **Recurring streaming timeout after upgrading to v0.19.3. Community upvoted (👍1). Users report the issue is frequent and blocks long-running tasks.**
   
2. **#6004** — [MCP安装过程中任务异常直接闪退了](https://github.com/QwenLM/qwen-code/issues/6004)  
   **Memory-related crash during MCP installation (dsphper/lanhu-mcp). GC logs show high allocation pressure. Tagged `welcome-pr` for community fixes.**
   
3. **#5942** — [Anthropic provider: avoidable prompt-cache misses inflate cost](https://github.com/QwenLM/qwen-code/issues/5942)  
   **Two independent cache-miss bugs cause higher costs on Anthropic endpoints. Author notes Claude Code stays ~100% cache hit rate on same backend.**
   
4. **#5941** — [大模型输出时向上滚动滚轮直接跳到最上方](https://github.com/QwenLM/qwen-code/issues/5941)  
   **TUI scroll bug on Windows: single scroll-up during streaming jumps to top instead of incremental scroll. UX regression.**
   
5. **#5971** — [TUI窗口滚动刷屏问题（Linux）](https://github.com/QwenLM/qwen-code/issues/5971)  
   **On Anolis OS, long conversations cause the TUI to re-scroll from history start, creating a "screen flashing" effect.**
   
6. **#5970** — [Auto enter Plan mode from Yolo mode is back?](https://github.com/QwenLM/qwen-code/issues/5970)  
   **Regression: `qwen -y` (Yolo) mode auto-switches to Plan mode and requests reading files from other projects.**
   
7. **#5956** — [feat: support configurable compaction model](https://github.com/QwenLM/qwen-code/issues/5956)  
   **Feature request to allow a cheaper model for conversation compaction, preventing expensive models from burning context on summarization.**
   
8. **#6023** — [Subagent final result leaks `<analysis>/<summary>` tags](https://github.com/QwenLM/qwen-code/issues/6023)  
   **Internal XML tags from subagents leak into parent context, breaking daemon UI Markdown rendering. Already addressed by PR #6027.**
   
9. **#6014** — [New version no longer shows what file the agent read](https://github.com/QwenLM/qwen-code/issues/6014)  
   **UX regression: agent now displays "read 1 file" without file name. Community feedback: "Why the downgrade?"**
   
10. **#5979** — [`/auth` 修改配置后新会话仍报 401](https://github.com/QwenLM/qwen-code/issues/5979)  
    **Bug: auth-modified provider keys don't persist to new sessions. PR #5980 prepared to fix env var priority. Active review.**

## Key PR Progress
1. **#5953** — [Feat: LSP Server support hot reload](https://github.com/QwenLM/qwen-code/pull/5953)  
   **Implements runtime hot-reload for LSP config changes (part of tracking issue #3696). Detects `.lsp.json` changes and reloads without restart.**
   
2. **#6003** — [feat(web-shell): add mobile sidebar drawer with session list](https://github.com/QwenLM/qwen-code/pull/6003)  
   **Replaces `display: none` on mobile with a hamburger-triggered overlay drawer for session switching.**
   
3. **#6025** — [feat(web-shell): friendlier Esc interruption + queued-prompt UX](https://github.com/QwenLM/qwen-code/pull/6025)  
   **Two-press Esc confirmation with countdown ring, and queued prompts while streaming—improves web shell interaction safety.**
   
4. **#6027** — [Sanitize subagent result tags](https://github.com/QwenLM/qwen-code/pull/6027)  
   **Direct fix for issue #6023: strips `<analysis>` blocks from subagent results before feeding to parent context.**
   
5. **#6018** — [Avoid full-history clones in OOM-prone paths](https://github.com/QwenLM/qwen-code/pull/6018)  
   **Critical memory optimization: replaces full-history cloning with compact diagnostics in error reporting and forked-agent snapshots.**
   
6. **#6005** — [feat(web-shell): queue prompts while turns are running](https://github.com/QwenLM/qwen-code/pull/6005)  
   **Daemon-backed FIFO prompt queue for web shell. Users can submit prompts during active turns with cancellation controls.**
   
7. **#5998** — [fix(channels): structure DingTalk stream logs](https://github.com/QwenLM/qwen-code/pull/5998)  
   **Replaces raw Buffer payload logging with structured summaries for DingTalk channel debugging.**
   
8. **#5980** — [fix(cli): prioritize auth-modified env vars over system env vars](https://github.com/QwenLM/qwen-code/pull/5980)  
   **Fixes issue #5979 by ensuring `/auth`-modified env vars take precedence over `process.env` for new sessions.**
   
9. **#5847** — [feat(serve): add runtime context injection for per-turn system-reminders](https://github.com/QwenLM/qwen-code/pull/5847)  
   **New RuntimeContext store allows external callers to inject dynamic `<system-reminder>` blocks per turn—useful for SDK/daemon API integrations.**
   
10. **#5780** — [feat: add `qwen update` and `/update` commands](https://github.com/QwenLM/qwen-code/pull/5780)  
    **Adds auto-update support: queries npm registry, installs standalone updates automatically, guides package-manager users.**

## Feature Request Trends
- **Daemon-Aware Architecture (5 issues):** The community is pushing for a richer daemon ecosystem: hot-reloadable channels (`#6010`), managed channel workers (`#5976`), autonomous `/loop` modes (`#5990`), and HTTPS/TLS for serve (`#6001`). This signals demand for production-grade server operations.
- **Mobile & Web Shell (3 issues):** Mobile sidebar (`#6000`), prompt queuing (`#6005`), and interruption UX (`#6025`) dominate—users increasingly want a responsive browser-based experience.
- **Model Flexibility (2 issues):** Configurable compaction model (`#5956`) and inline model switching (`#5967`) reflect desire to optimize cost by routing different tasks to different models.
- **Hot-Reload Ecosystem (2 issues):** After LSP hot-reload (`#5953`), users want comprehensive hot-reload for skills, extensions, MCP, and config (`#3696`).

## Developer Pain Points
- **Streaming Reliability:** Timeout errors (`#5975`, `#401`) are the top customer-facing bug. Users report 120-second inactivity kills after partial streaming, with "Try reducing input length" advice being insufficient.
- **Daemon Cold Start:** `#4748` highlights daemon cold start at ~2.5s vs CLI 0.7s—an ongoing performance gap that affects first-session experience.
- **Cost Management:** Anthropic prompt-cache misses (`#5942`) and subagent token overcounting (`#5683`) frustrate users paying for API usage. The compaction model feature request (`#5956`) speaks directly to this pain.
- **Memory OOM:** `#6004` (MCP install crash) and `#6018` (history clone optimization) show memory pressure is a recurring theme, especially on large sessions.
- **UX Regressions:** Scroll behavior in TUI (`#5941`, `#5971`) and missing file names in agent output (`#6014`) suggest recent releases need better regression testing for core UI interactions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-30

---

## 1. Today's Highlights

The community is laser-focused on a **v0.8.66 release candidate**, with a rapid-fire burst of 15+ merged fix PRs in the last 24 hours targeting stability, lock contention, and approval-flow correctness. The **Hotbar feature** has undergone a significant product pivot: it will now ship **hidden by default** in v0.8.66, with a planned opt-in introduction in v0.8.68. Meanwhile, the long-standing **cache hit ratio** and **token consumption** complaints remain the most active and heated discussions, with users reporting 4x token usage versus competing tools.

---

## 2. Releases

**No new releases in the last 24 hours.** The project is in active release-candidate stabilization for `v0.8.66`, as evidenced by the high volume of targeted fix PRs.

---

## 3. Hot Issues

### #1177 — [bug] Cache hit ratio is too low
- **Author:** trytsomile | **Comments:** 24 | **Link:** [Issue #1177](https://github.com/Hmbown/CodeWhale/issues/1177)
- **Why it matters:** The user compares DeepSeek TUI unfavorably against DeepSeek-Reasonix, claiming a 95%+ hit ratio gap. This is the **community's top pain point** and directly impacts per-session cost for heavy users.

### #1120 — [bug] Cache hits still problematic
- **Author:** pmsleepcheck | **Comments:** 21 | **Link:** [Issue #1120](https://github.com/Hmbown/CodeWhale/issues/1120)
- **Why it matters:** A continuation of #1177, the user questions whether the input_cache_miss bug was actually fixed in v0.8.17. The high engagement signals unresolved distrust in cache improvements.

### #743 — [bug] Token consumption ballooned
- **Author:** YaYII | **Comments:** 13 | **Link:** [Issue #743](https://github.com/Hmbown/CodeWhale/issues/743)
- **Why it matters:** The user reports consuming **400M tokens in half a day** and demands optimization of dialogue context. This is a cost-of-use crisis for power users.

### #1186 — [enhancement] Typed persistent permission rules
- **Author:** greyfreedom | **Comments:** 10 | **Link:** [Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186)
- **Why it matters:** Proposes a structured permission model scoped by tool name, command prefix, and path patterns with allow/deny/ask decisions. This is fundamental for production safety and has strong community support.

### #1747 — [enhancement] Cache hit problem / UI readability
- **Author:** Amund | **Comments:** 4 | **👍:** 3 | **Link:** [Issue #1747](https://github.com/Hmbown/CodeWhale/issues/1747)
- **Why it matters:** The user highlights the **UI is hard to read** during coding sessions, a compounding issue when cache performance is also poor. The 👍 count shows broad agreement.

### #1818 — [bug] Token consumption extremely high
- **Author:** chenhaoyi123 | **Comments:** 2 | **👍:** 1 | **Link:** [Issue #1818](https://github.com/Hmbown/CodeWhale/issues/1818)
- **Why it matters:** Another user reporting excessive token burn. The pattern of multiple independent reports of this issue is concerning.

### #1425 — [bug] Session hangs after large text processing
- **Author:** AiurArtanis | **Comments:** 1 | **Link:** [Issue #1425](https://github.com/Hmbown/CodeWhale/issues/1425)
- **Why it matters:** Attempting to analyze a 3M-character novel triggers sub-agent timeouts that hang sessions. Highlights **scalability limits** in the agent dispatch system.

### #2953 — [enhancement] Slim default prompt for Codex-parity
- **Author:** Hmbown | **Comments:** 3 | **Link:** [Issue #2953](https://github.com/Hmbown/CodeWhale/issues/2953)
- **Why it matters:** A maintainer-driven issue targeting a direct comparison with Codex CLI token usage. This is the **strategic response** to the cache/token complaints.

### #2956 — [enhancement] Reduce repeated transcript input
- **Author:** Hmbown | **Comments:** 3 | **Link:** [Issue #2956](https://github.com/Hmbown/CodeWhale/issues/2956)
- **Why it matters:** Companion to #2953 — targets the 100k+ token gaps from repeated tool output. This is the technical root cause of many token complaints.

### #2024 — [enhancement] Agent routing: delegate work to scouts/RLM
- **Author:** Hmbown | **Comments:** 1 | **Link:** [Issue #2024](https://github.com/Hmbown/CodeWhale/issues/2024)
- **Why it matters:** Proposes intelligent delegation of broad discovery and file reads to sub-agents rather than bloating the parent transcript. A systemic fix for both performance and cost.

---

## 4. Key PR Progress

### #3812 — [fix] Allow agent starts to join parallel dispatch batches
- **Author:** Hmbown | **Link:** [PR #3812](https://github.com/Hmbown/CodeWhale/pull/3812)
- **What it does:** Enables parallel dispatch of multiple `agent` tool calls in a single parent turn, fixing serialization that caused linear launch latency for high fanout (20+ concurrent agents).

### #3813 — [fix] Nonblocking send for ListSubAgents refresh events
- **Author:** Hmbown | **Link:** [PR #3813](https://github.com/Hmbown/CodeWhale/pull/3813)
- **What it does:** Prevents engine/TUI stalls during high-frequency sub-agent status storms by using nonblocking sends on bounded channels.

### #3809 — [fix] Render sub-agent sidebar from read-only snapshot
- **Author:** Hmbown | **Link:** [PR #3809](https://github.com/Hmbown/CodeWhale/pull/3809)
- **What it does:** Eliminates write-lock contention on the SubAgentManager during UI refresh, critical for fanout/completion bursts.

### #3808 — [fix] try_lock shell manager in async UI paths
- **Author:** Hmbown | **Link:** [PR #3808](https://github.com/Hmbown/CodeWhale/pull/3808)
- **What it does:** Converts blocking `std::sync::Mutex::lock()` to try_lock in render paths, preventing render stalls when the shell manager is held by another task.

### #3756 — [fix] Default interactive Agent shell to approval-gated on
- **Author:** Hmbown | **Link:** [PR #3756](https://github.com/Hmbown/CodeWhale/pull/3756)
- **What it does:** Flips the default for interactive Agent shell to **on (approval-gated)**, aligning with user expectations while keeping security. A major UX change for v0.8.66.

### #3795 — [fix] Make mode authority decide approval prompts
- **Author:** Hmbown | **Link:** [PR #3795](https://github.com/Hmbown/CodeWhale/pull/3795)
- **What it does:** Ensures YOLO mode truly means zero approval prompts, overriding the old safety floor that could force prompts for publish-like actions.

### #3788 — [feat] Hotbar introduced, configurable, easy to disable
- **Author:** Hmbown | **Link:** [PR #3788](https://github.com/Hmbown/CodeWhale/pull/3788)
- **What it does:** Implements the v0.8.66 Hotbar decision: hidden by default, keyboard shortcuts shown in title, with a once-only launch nudge.

### #3789 — [fix] Show safety policy in status
- **Author:** cyq1017 | **Link:** [PR #3789](https://github.com/Hmbown/CodeWhale/pull/3789)
- **What it does:** Adds a `/status` Safety row displaying the current mode-derived sandbox/network posture (read-only/workspace-write/unsandboxed).

### #3774 — [fix] Honor codewhaleBinaryVersion in npm installer
- **Author:** Hmbown | **Link:** [PR #3774](https://github.com/Hmbown/CodeWhale/pull/3774)
- **What it does:** Fixes asset resolution drift between npm wrapper paths — the installer was skipping the binary version check, causing install-time mismatches.

### #3783 — [fix] Preserve event headroom for progress
- **Author:** cyq1017 | **Link:** [PR #3783](https://github.com/Hmbown/CodeWhale/pull/3783)
- **What it does:** Prevents routine sub-agent progress from exhausting UI event-channel headroom under load, while still delivering high-value updates.

---

## 5. Feature Request Trends

**1. Cache & Token Optimization (Dominant theme)**
- Multiple issues demand parity with DeepSeek-Reasonix and Codex CLI on input cache hit ratios and total token consumption. The maintainer has responded with two targeted optimization issues (#2953, #2956) and several sub-agent dispatch fixes.

**2. Hotbar as an Optional Power Feature**
- The community and maintainer have converged on **Hotbar hidden by default**, with a planned v0.8.68 introduction via setup wizard and `/hotbar` customization. The epic (#3389) and decision issue (#3807) map this out clearly.

**3. Remote Workbench for US/Global Users**
- Issue #1990 requests a US/global equivalent of the Tencent/CNB infrastructure path, using DigitalOcean + Telegram for a ~15-minute setup (#2964 is the implementation slice). This reflects a growing non-China user base.

**4. Agent Robustness & Fallback Strategies**
- Issue #1641 calls for graceful degradation when external tool calls fail (anti-bot protection, timeouts). Users want agents to automatically switch to alternatives or degrade gracefully.

**5. Multi-Skill Grouping**
- Issue #2117 requests the ability to group multiple skills and load them as a set, rather than loading them individually per project. Common request for power users managing complex workflows.

---

## 6. Developer Pain Points

**🔴 Token Cost Crisis**
- **Frequency:** 5+ independent reports in the top 30 issues
- **Impact:** Users reporting 100M-400M token consumption in half-day sessions. Direct financial cost is driving frustration, with comparisons to competing tools that achieve 95%+ cache hit rates.

**🔴 Cache Hit Ratio Degradation**
- **Frequency:** 3+ high-engagement issues (#1177, #1120, #1747)
- **Impact:** Users are skeptical that fixes have actually been deployed. The maintainer has acknowledged the issue in #2953/#2956 but the community is not yet seeing improvements.

**🔴 UI Readability & Navigation**
- **Frequency:** Multiple reports (#1512 scroll wheel, #1747 process readability)
- **Impact:** The TUI is described as "hard to follow" during active coding sessions. Users want the ability to scroll through model output history and view the full context of agent reasoning.

**🔴 Session Stability Under Load**
- **Frequency:** Recurring (#1425 hangs, #3800 series fixes)
- **Impact:** Large file processing (3M+ characters) and high sub-agent fanout cause session hangs, timeouts, and UI freezes. The maintainer is actively fixing lock contention (PRs #3808-#3813), but the community is still experiencing crashes.

**🔴 Approval Flow Confusion**
- **Frequency:** 3 PRs in 24 hours (#3756, #3795, #3773)
- **Impact:** Users were getting inconsistent approval prompts — YOLO mode still asked for approval on publish-like actions. The label "always" was misleading (it only meant session-scoped). This has been a **rapidly patched** pain point.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*