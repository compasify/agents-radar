# AI CLI Tools Community Digest 2026-06-18

> Generated: 2026-06-18 00:33 UTC | Tools covered: 9

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

Here is the cross-tool comparison report, structured as requested.

---

### 1. Ecosystem Overview

The AI CLI developer tools landscape on June 18, 2026, is characterized by a high rate of iteration and growing pains. Mature tools like Claude Code and Copilot CLI are shipping new features (inline config, `/diagnose` command) while battling scalability bugs and regressions affecting core reliability. A second tier of tools, including Pi, Qwen Code, and DeepSeek TUI, is catching up rapidly with near-daily releases focused on ecosystem integration, provider compatibility, and session resilience. Across the board, developers are demanding multi-agent orchestration, persistent session management, and robust permission controls, signaling a shift from single-prompt assistants to true autonomous agent platforms.

### 2. Activity Comparison

| Tool | Hot Issues | New PRs (24h) | Latest Release (24h) | Notable Community Engagement |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | ~10 active (1 urgent) | ~5 | v2.1.181 | 143 upvotes on hanging bug (#26224) |
| **OpenAI Codex** | ~10 active (1 high-severity) | ~10 | `rust-v0.141.0-alpha.6` | 597 upvotes on Linux desktop request |
| **Gemini CLI** | ~10 active (1 high-severity) | ~10 | v0.48.0-preview.0 | Agent hangs (#21409) unaddressed since March |
| **GitHub Copilot CLI** | ~10 active | 0 | v1.0.64-0 | 20 upvotes on tool whitelist request |
| **Kimi Code CLI** | 2 new (low activity) | 0 | None | Very low engagement |
| **OpenCode** | ~10 active (2 high-traffic) | ~10 | v1.17.8 | 72 comments on agent sandboxing |
| **Pi** | ~10 active (1 high-traffic) | ~9 | None | 12 comments on streaming scroll issue |
| **Qwen Code** | ~10 active (1 controversial) | ~10 | v0.18.3, .2 | 151 comments on free tier policy issue |
| **DeepSeek TUI** | ~10 active (3 critical bugs) | ~27 | None (v0.8.63 current) | High PR volume; multi-agent focus |

### 3. Shared Feature Directions

- **Multi-Agent Orchestration & Collaboration** (Claude Code, OpenAI Codex, OpenCode, DeepSeek TUI, Gemini CLI): All five communities are actively requesting or implementing features for multiple agents working together—inter-session communication (Claude Code #24798, #28300), coordinated agent runs (DeepSeek TUI #2007, #3171), and multi-agent mode in threads (OpenAI Codex #28792, #28685).

- **Session Continuity & Lifecycle Management** (Claude Code, Qwen Code, DeepSeek TUI, Codex, OpenCode): Users want sessions that don't lose state. Specific requests include checkpoint-based resume (Codex #28806), resuming interrupted turns without "continue" (Qwen Code #5030), session persistence across crashes (DeepSeek TUI #3285), and session data bloat cleanup (OpenCode #32630).

- **Permission/Trust & Safety** (Claude Code, Copilot CLI, Gemini CLI, OpenCode, DeepSeek TUI): The tension between automation and control is a major pain point. Issues include permission bypasses being overridden by server-side flags (Claude Code #62205), `preToolUse` hooks failing to silence confirmations (Copilot CLI #2643), subagents running despite disabled config (Gemini CLI #22093), and inconsistent mode toggles leading to unauthorized tool use (DeepSeek TUI #3279).

- **Model & Provider Flexibility** (Pi, Qwen Code, OpenCode, DeepSeek TUI, Gemini CLI): Communities are pushing for vendor-agnostic tooling. This includes auto-model selection (OpenCode #8456), decoupling provider identity from protocol (Qwen Code #5090), support for local LLMs (Pi #3715, Qwen Code #3384), and auto-routing heuristics (DeepSeek TUI #3280).

- **MCP & Plugin Ecosystem Expansion** (Claude Code, Copilot CLI, Qwen Code, OpenCode): There is a clear demand for a richer, more reliable plugin/MCP ecosystem. This includes MCP registry installation (Copilot CLI), per-teammate MCP configs (Claude Code #23669), dynamically declaring MCP servers from skills, and extensibility for user-defined tools.

### 4. Differentiation Analysis

- **Claude Code vs. Others**: **Feature-rich, but fragile.** Claude Code is the most ambitious, pushing multi-agent and cross-machine protocols. However, it suffers from the most critical regressions, like the team-management tools disappearing in a minor release (#68721). Its competitive advantage is the Claude ecosystem and advanced features like `/config` and remote control, but reliability is its biggest vulnerability.

- **OpenAI Codex vs. Others**: **Infrastructure-heavy, community-hungry.** Codex has the single highest-demand feature (Linux desktop, 597 upvotes) and is shipping complex infrastructure PRs (checkpoint-based resume, plugin install chains). Its differentiation is deep integration with OpenAI's model suite and a strong focus on enterprise auth, but it is plagued by auth fragility and macOS-specific blockers.

- **GitHub Copilot CLI vs. Others**: **Conservative, ecosystem-focused.** Copilot CLI moves slower but more reliably (zero PRs today, likely due to post-outage stability focus). Its unique strength is native GitHub ecosystem integration and enterprise management controls (custom models, org policies). The `/diagnose` command and `/security-review` GA suggest a focus on debuggability and safety.

- **Gemini CLI vs. Others**: **Security-focused, lagging in reliability.** Gemini CLI's PR activity is dominated by security hardening (CI pipeline poisoning, MCP encoding, dependency pinning). However, its core reliability issues—generalist agent hangs (#21409) that have been unaddressed for months—are the worst in the ecosystem. It is differentiated by its deterministic redaction feature (though flawed) and deep integration with Google’s model suite.

- **Qwen Code, DeepSeek TUI, Pi vs. Other Tools**: **Fast-followers, platform-specific.** These tools are maturing rapidly, mimicking features from the leaders (e.g., `loop` commands, multi-agent, session resume). Qwen Code is strongest in the Chinese ecosystem (QQ Bot, DeepSeek V4 presets). DeepSeek TUI has the highest PR velocity, signaling a massive push toward its v0.9.0 "chat-native workroom" vision. Pi is focused on provider compatibility and TUI polish, with strong community contribution velocity.

### 5. Community Momentum & Maturity

- **High Momentum, High Engagement**: **DeepSeek TUI** stands out with 27 PRs in 24 hours, directly addressing the community's most critical bugs. **Pi** is a close second, with 9 PRs targeting long-standing pain points like provider error opacity and terminal detection. Both are iterating aggressively on user feedback.

- **High Momentum, Mixed Satisfaction**: **Claude Code** remains the most-used tool, but the 118-comment thread on the hanging bug (#26224) and the regression in team-management tools suggest user frustration is high. Its community is extremely active, but much of that activity is centered on bugs.

- **Lower Momentum, Stable**: **Copilot CLI** is the most stable but also the slowest, with zero PRs today. The community is more focused on feature requests (tool whitelist, context window caps) than bug reports, suggesting a more mature, albeit slower-moving, product.

- **Low Momentum, High Potential**: **Kimi Code CLI** is effectively dormant, with no releases and zero community engagement on its two new issues (filed today). It appears to be in a holding pattern.

- **Controversial Engagement**: **Qwen Code** has extremely high engagement (151 comments) on a single issue about OAuth free tier policy, indicating a passionate but potentially strained user base. The feature request volume is high, but so is the volume of authentication and configuration frustration.

### 6. Trend Signals

- **The "Agentic OS" is the end goal.** Feature requests are consistently moving beyond "write code for me" toward "orchestrate a team of agents across machines and sessions." The demand for multi-agent protocols (Claude, Codex, DeepSeek TUI) and inter-session communication signals that developers see CLI tools as the operating system for a distributed agent workforce.

- **Trust is the prize; permission is the battle.** The top pain points are not about intelligence but about control. Server-side overrides of local settings (Claude Code #62205), silent command execution (Copilot CLI), and ignored permission flags (Gemini CLI) are breaking the trust contract between tool and user. Tools that solve this elegantly will win loyalty.

- **Provider fatigue is real.** The constant demand for model auto-selection, local LLM support, and decoupled provider identities suggests users are tired of being locked into one ecosystem. The ability to seamlessly swap between OpenAI, Anthropic, Google, and local models is becoming a competitive requirement, not a nice-to-have.

- **Session continuity is non-negotiable.** The recurring theme of session data loss, bloat, and fragmentation (from Codex to OpenCode to Qwen Code) shows that the current session-bound architecture is a major friction point. Developers want "projects" (OpenCode's term) that persist and are shareable, not just ephemeral chats.

- **Security is a double-edged sword.** Overly aggressive safety checks (Codex's false positives on `git fetch`) and fragile auth systems (Codex, Qwen Code) are eroding trust. The industry needs to find a balance between protecting users and allowing power users to work efficiently, especially in enterprise and automated CI/CD contexts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-06-18 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests have drawn the most community discussion and represent the highest-interest Skill submissions:

### #514 — document-typography (Open)
**Skill:** Automated typographic quality control for AI-generated documents — catches orphan word wrap, widow paragraphs, and numbering misalignment.
**Discussion:** High engagement around the universality of the problem (every document generated by Claude suffers these issues). Community members shared additional typographic edge cases.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

### #486 — ODT Skill (Open)
**Skill:** OpenDocument Text (.odt, .ods) creation, template filling, and ODT-to-HTML parsing. Bridges Claude Code with LibreOffice/ISO standard document workflows.
**Discussion:** Strong interest from enterprise users needing open-source document interoperability. Questions about template variable syntax and handling of embedded images.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)

### #210 — frontend-design clarity improvements (Open)
**Skill:** Revised frontend-design Skill to improve instruction clarity, remove ambiguous guidance, and ensure every directive is actionable within a single Claude session.
**Discussion:** Debate on specificity vs. flexibility in design guidance. Several contributors proposed alternative phrasings for CSS layout instructions.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/210)

### #83 — skill-quality-analyzer & skill-security-analyzer (Open)
**Skill:** Two meta-skills: one evaluates Skill quality across five dimensions (structure, documentation, examples, resources, UX); the other audits Skills for security anti-patterns.
**Discussion:** Recognized as critical infrastructure for maintaining marketplace quality. Concerns raised about false positives in security scanning.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)

### #538 — PDF case-sensitive file reference fix (Open)
**Skill:** Bug fix correcting 8 case-mismatched file references in the PDF Skill (e.g., `REFERENCE.md` → `reference.md`) that break on case-sensitive filesystems.
**Discussion:** Exemplar of cross-platform compatibility issues; sparked wider conversation about filesystem testing in the CI pipeline.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/538)

### #539 — skill-creator: unquoted YAML description detection (Open)
**Skill:** Pre-parse validation in `quick_validate.py` that detects unquoted `description` fields containing YAML special characters (`:`, `#`, etc.) before silent parsing failures.
**Discussion:** High-priority fix — related to numerous "Skill not triggering" reports. Community tests confirmed the fix catches previously undiagnosed failures.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/539)

### #1298 — skill-creator eval recall fix (Open)
**Skill:** Root-cause fix for `run_eval.py` always reporting 0% recall, which rendered the description-optimization loop ineffective. Addresses Windows stream reading, trigger detection, and parallel worker issues.
**Discussion:** Critical bug affecting all Skill creators. Multiple independent reproductions confirmed the problem. The PR's comprehensive approach has earned broad support.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1298)

### #568 — ServiceNow platform Skill (Open)
**Skill:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.
**Discussion:** Largest enterprise platform Skill proposed. Community requested modularization into sub-skills by domain. Discussion of API authentication patterns.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/568)

---

## 2. Community Demand Trends

From Issue discussions, five clear demand clusters emerge:

| Demand Cluster | Key Issues | What the Community Wants |
|---|---|---|
| **Skill Sharing & Distribution** | #228 (14 comments), #492 (7 comments) | Org-wide skill sharing without manual `.skill` file transfers; trust boundary protection against impersonation of official Anthropic skills |
| **Eval/Optimization Tooling** | #556 (12 comments), #1169 (3 comments), #202 (8 comments) | Fixing the broken `run_eval.py` recall=0% bug; making skill-creator an operational Skill rather than developer documentation |
| **Windows Compatibility** | #1061 (3 comments), #1050, #1099 | `subprocess` PATHEXT handling, `cp1252` encoding, `select` on pipes — all blocking Windows users from skill development |
| **Duplicate Skill Management** | #189 (6 comments) | Deduplication when installing `document-skills` and `example-skills` plugins that contain identical content |
| **Security & Governance** | #492 (7 comments), #1175 (4 comments), #412 (6 comments) | Agent governance patterns, trust boundaries, permission management for skills handling sensitive data (SharePoint, enterprise systems) |

**Most upvoted issues indicate urgency:**
- 👍 9 — #189 (duplicate skills)
- 👍 7 — #228 (org-wide sharing) and #556 (eval broken)
- 👍 4 — #184 (agentskills.io redirects)

---

## 3. High-Potential Pending Skills

These PRs have active comment threads and are likely to land soon:

| PR | Skill | Why It's Close |
|---|---|---|
| **#1298** | run_eval.py recall fix | Directly addresses #556 (12 comments, 7 upvotes). Comprehensive fix validated by multiple contributors. |
| **#1099** | Windows subprocess fix | 1-line fix for `PATHEXT` resolution. Complements #1050. Unblocks Windows users. |
| **#723** | testing-patterns Skill | Comprehensive testing stack coverage (unit, React, E2E). No blockers raised. |
| **#444** | AURELION Skill Suite | Four skills (kernel, advisor, agent, memory) — structured cognitive framework. Community interested in modularity. |
| **#95** | System documentation & flowcharts | Mature documentation set. Would improve repository community health (currently 25% on GitHub metrics). |
| **#509** | CONTRIBUTING.md | Closes #452. Directly raises community health score. Simple, non-controversial. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for Skill-ecosystem tooling (evaluation, validation, packaging, sharing, and cross-platform compatibility), not for individual domain-specific Skills — the meta-layer enabling quality Skill development is the bottleneck the community cares about most.**

---

# Claude Code Community Digest — 2026-06-18

## Today's Highlights

An urgent hanging/freezing bug (#26224) has accumulated 118 comments and 143 upvotes, making it the most pressing community issue by a wide margin. Meanwhile, the latest release (v2.1.181) introduces inline configuration via `/config key=value` syntax, and interest in multi-agent collaboration and inter-session workflows continues to dominate feature discussions. A notable regression in agent team-management tools (#68721) and a root-cause analysis for permission bypass overrides (#62205) also surfaced as critical technical findings.

---

## Releases

**v2.1.181** was published within the last 24 hours. Key changes:

- `/config key=value` syntax now allows setting any configuration from the prompt (works in interactive, `-p`, and Remote Control modes), e.g. `/config thinking=false`
- Added `sandbox.allowAppleEvents` opt-in setting for macOS sandboxed commands
- Introduced `CLAUDE_CLIENT_P` environment variable support (prefix visible in snippet)

**Note:** The release notes were truncated in the data source; for full changelog, see the [GitHub release page](https://github.com/anthropics/claude-code/releases/tag/v2.1.181).

---

## Hot Issues

### 1. [🐛 URGENT] Claude Code hanging/freezing for 5–20+ minutes
**#26224** — 118 comments, 143 👍  
The top-voted issue by far. Users report Claude Code becoming completely unresponsive on many prompts, with no clear pattern. Community is actively providing logs and reproduction steps.  
[View Issue](https://github.com/anthropics/claude-code/issues/26224)

### 2. [Feature] Inter-session communication for multi-Claude workflows
**#24798** — 35 comments, 16 👍  
Proposal for direct communication between siloed Claude sessions to orchestrate higher-level workflows with dependencies. Reflects growing demand for multi-session coordination.  
[View Issue](https://github.com/anthropics/claude-code/issues/24798)

### 3. [🐛] Remote Control permission prompts ignored via mobile app
**#29214** — 30 comments, 76 👍  
`--dangerously-skip-permissions` is ignored when Remote Control is active; the mobile app still prompts for every file edit and bash command. High impact for mobile-based workflows.  
[View Issue](https://github.com/anthropics/claude-code/issues/29214)

### 4. [Feature] Multi-agent collaboration across machines (Agent-to-Agent protocol)
**#28300** — 26 comments  
Requests a protocol for agents running on different machines to collaborate directly, extending beyond single-machine teams.  
[View Issue](https://github.com/anthropics/claude-code/issues/28300)

### 5. [Feature] Per-teammate working directory, CLAUDE.md, and MCP configs for Agent Teams
**#23669** — 24 comments, 28 👍  
Teammates currently inherit the team lead’s configuration, making multi-repo workflows difficult. This feature would allow each teammate to operate in its own context.  
[View Issue](https://github.com/anthropics/claude-code/issues/23669)

### 6. [🐛] Nested sub-agent spawning broken on Windows
**#61993** — 18 comments  
`Task`/`Agent` primitives are not exposed inside sub-agents, preventing recursive agent hierarchies. Windows users are particularly affected.  
[View Issue](https://github.com/anthropics/claude-code/issues/61993)

### 7. [🐛] Pro plan blocked from 1M context despite low usage
**#65514** — 18 comments, 2 👍  
1M-context feature incorrectly requires "usage credits" on Pro plan, even when usage is at 17%. Community suspects a rate-limiting bug.  
[View Issue](https://github.com/anthropics/claude-code/issues/65514)

### 8. [🐛 Regression] Team-management tools missing in 2.1.178
**#68721** — 6 comments, 4 👍  
`TeamCreate` / `TeamDelete` native tools were removed or not surfaced in v2.1.178, breaking agent team workflows that worked in v2.1.177.  
[View Issue](https://github.com/anthropics/claude-code/issues/68721)

### 9. [🐛 Root Cause] Server-side A/B flags silently override local permission bypass
**#62205** — 6 comments, 1 👍  
A deep investigation reveals that GrowthBook A/B flags (`tengu_permission_friction`, `tengu_quill_harbor`) periodically override `bypassPermissions` mode on macOS Desktop, causing sessions to always start in Accept Edits mode.  
[View Issue](https://github.com/anthropics/claude-code/issues/62205)

### 10. [🐛] Task never starts in Agent View — spare worker not promoted
**#69062** — 2 comments  
Intermittent bug in interactive agent view: a dispatched task shows as "working" but the daemon roster still lists the agent as "spare." Affects Windows users.  
[View Issue](https://github.com/anthropics/claude-code/issues/69062)

---

## Key PR Progress

### 1. Update frontend-design skill
**#69226** — Open  
Bumps the plugin to v1.1.0 with improvements to the frontend-design skill. Installed copies will auto-update.  
[View PR](https://github.com/anthropics/claude-code/pull/69226)

### 2. Fix code-review: allow re-reviews when new commits are pushed
**#19867** — Open (since Jan 2026)  
Adds smarter skip logic to the code-review plugin so that new commits trigger a fresh review instead of being skipped. Includes a `--force` flag to bypass checks.  
[View PR](https://github.com/anthropics/claude-code/pull/19867)

### 3. Update Dockerfile to use native installer
**#33443** — Open  
Migrates from deprecated npm install to the native installer for Claude Code in `.devcontainer/Dockerfile`, using Node 24.14.  
[View PR](https://github.com/anthropics/claude-code/pull/33443)

### 4. Use standard GitHub capitalization in README
**#60427** — Closed  
Minor documentation polish: standardized "GitHub" capitalization in the product description.  
[View PR](https://github.com/anthropics/claude-code/pull/60427)

### 5. Polish plugins README wording
**#60732** — Closed  
Improved natural language flow in the plugins ecosystem description without changing meaning.  
[View PR](https://github.com/anthropics/claude-code/pull/60732)

### 6–10. Additional observations
The remaining PRs in the top 5 list were all merged or closed within the last 24 hours. Beyond these, community members are actively contributing to agent-related documentation and skill improvements. However, no major structural changes (e.g., large refactors, new native features) were observed in the PR pipeline today.

---

## Feature Request Trends

### Dominant Themes

1. **Multi-agent collaboration & session orchestration** — The largest cluster. Users want inter-session communication (#24798), cross-machine agent protocols (#28300), and per-teammate configuration isolation (#23669). The vision is clearly toward Claude Code becoming a distributed agent platform.

2. **Working directory & context switching mid-session** — Requests to switch project context (`cd` + settings) without restarting the session (#50302) and to let teammates work in different directories (#23669) reflect frustration with the current session-bound model.

3. **MCP & integration extensibility** — Multiple Slack workspace support (#44243), plugin skill deduplication (#60375), and OAuth improvements for remote MCP servers (#69205) show strong demand for richer, more reliable integration patterns.

4. **UI/UX for agent awareness** — Sound notifications (#62444), animated idle indicators (#62387), and visibility into background subagent activity (#67485) indicate that users want better real-time feedback when agents are working in the background.

5. **Persistent project memory** — Extending CLAUDE.md-style memory to browser-based sessions (#67671) suggests users want a consistent context across both CLI and web interfaces.

---

## Developer Pain Points

1. **Session hangs and freezes** (#26224) — Far and away the most painful issue. Long blocking periods (5–20+ minutes) with no clear cause or workaround. Community is actively debugging but needs Anthropic intervention.

2. **Permission bypass ignored by Remote Control and Desktop** (#29214, #62205) — Even with explicit `--dangerously-skip-permissions` or `defaultMode: bypassPermissions`, the system overrides these settings. The root cause (#62205) points to server-side flag injection, which is a major trust concern.

3. **Agent team management regressions** (#68721) — Tools that worked in one version disappear in the next, breaking production workflows. Combined with nested agent spawning failures (#61993), multi-agent reliability is fragile.

4. **Context isolation limits** — Unable to work across multiple repositories or switch project contexts within a single session (#23669, #50302). This forces restarts and wasteful context recomputation.

5. **MacOS terminal text corruption** (#68711) — Claude Code output appears garbled in iTerm2 and Warp, with the only fix being a manual terminal resize. Affects core usability on macOS.

6. **VS Code extension pollutes other extensions** (#69227) — The environment variable `NoDefaultCurrentDirectoryInExePath=1` leaks from the Claude Code extension to other VS Code extensions on Windows, breaking their behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-18

## Today's Highlights
The Codex team shipped two alpha releases (`rust-v0.141.0-alpha.5` and `.6`) and merged a major `Esc` interrupt fix for `/goal` mode, while a long-running auth outage (#25670) and aggressive sandbox safety checks (#28015) continue to frustrate users. A coordinated "plugin install" PR chain entered final review, promising a unified plural-install tool for desktop and CLI clients. Community attention remains focused on the **Linux desktop app request** (#11023, 597 👍) and recurring connectivity bugs in the macOS app.

---

## Releases
- **`rust-v0.141.0-alpha.6`** and **`rust-v0.141.0-alpha.5`** — both published silently with no changelog detail beyond version bump references. Likely contain the `plugin install` extension stack and `Esc` interrupt fixes staged for beta.

---

## Hot Issues

1. **[#11023] Codex desktop app for Linux** (597 👍, 121 comments) — The highest-voted open issue. Users report macOS power/thermal issues and are desperate for a native Linux app. Community has self-organized workarounds via Wayland containers but wants official support. [Link](https://github.com/openai/codex/issues/11023)

2. **[#18960] Frequent reconnect loop in Codex App: websocket closed by server** (34 👍, 44 comments) — Pro users on macOS seeing persistent streaming failures. Multiple users confirm restarting the app or network doesn't help; suspected server-side rate limiting or session timeout regression. [Link](https://github.com/openai/codex/issues/18960)

3. **[#25670] Authentication for Codex has literally broken** (19 👍, 33 comments) — Multi-factor auth loops indefinitely, even after passkey + phone + auth app setup. The issue is tied to old phone numbers that cannot be changed. Blocks all CLI and web access. [Link](https://github.com/openai/codex/issues/25670)

4. **[#28190] rg is blocked by macOS** (53 👍, 31 comments) — Codex CLI 0.139.0's bundled `rg` binary is blocked by macOS Gatekeeper on Apple Silicon. Workaround requires `xattr -d com.apple.quarantine`, but reappears after updates. [Link](https://github.com/openai/codex/issues/28190)

5. **[#28015] False positive cybersecurity safety check blocks normal repo maintenance** (0 👍, 20 comments) — CLI repeatedly flags `git fetch`, `git gc`, and `docker prune` as cybersecurity risks, interrupting paid sessions with safety-check prompts. Users consider this the "boy who cried wolf" for security warnings. [Link](https://github.com/openai/codex/issues/28015)

6. **[#28422] image_gen regression: valid generated image not saved when status remains "generating"** (2 👍, 9 comments) — In 0.140.0, DALL-E generations in CLI finish successfully but the file is never written if the status poll returns `generating` on the last response. Requires manual retry. [Link](https://github.com/openai/codex/issues/28422)

7. **[#25921] Crashpad pending dumps grow unbounded (+5GB/day)** (1 👍, 8 comments) — Codex Desktop silently generates 50k+ `.dmp` files daily under `~/Library/Application Support/com.openai.codex/web/Crashpad/pending`. No auto-cleanup or size cap. Disk-filling crash-loop behavior. [Link](https://github.com/openai/codex/issues/25921)

8. **[#28071] Codex Desktop exhausts syspolicyd and cannot relaunch until reboot** (2 👍, 8 comments) — macOS system policy daemon lockup after repeated Codex launches. Affects 26.609.41114; requires full OS reboot to clear. [Link](https://github.com/openai/codex/issues/28071)

9. **[#28811] Public Codex rate-limit reset applied immediately instead of banked** (3 👍, 4 comments) — OpenAI's promised "banked reset" feature was not honored; users lost quota they expected to defer. Impacts heavy `/goal` users especially hard. [Link](https://github.com/openai/codex/issues/28811)

10. **[#28672] Business Codex unusable: repeated 401 invalidated OAuth token** (0 👍, 3 comments) — Enterprise customers on ChatGPT Business (2 seats) see token revocation after 2–3 messages when using Ubuntu dev containers. Forced phone verification loop. [Link](https://github.com/openai/codex/issues/28672)

---

## Key PR Progress

1. **[#28813] Pause active goals before Esc interrupts** — Fixes #28104. `/goal` mode now correctly pauses on `Esc` instead of silently dropping the goal state. Merged to latest alpha. [Link](https://github.com/openai/codex/pull/28813)

2. **[#28815] Send stable IDs with managed auth requests** — Adds `oaicom_stable_id` and `source_surface_stable_id` across login, auth-code exchange, device-code, and token refresh for app-server clients. Aims to reduce token-revocation auth loops. [Link](https://github.com/openai/codex/pull/28815)

3. **[#28812] Add optional IDs to response items** — Standardizes internal `ResponseItem` ID shapes for consistent serde/TS/JSON-schema. Enables reliable ID-based tracing without optionality workarounds. [Link](https://github.com/openai/codex/pull/28812)

4. **[#28806] Optimize resume and fork history** — Introduces checkpoint-backed resume and copy-on-write fork optimization, reducing cold `thread/resume` and `thread/fork` history work. Includes fallback for legacy rollouts. [Link](https://github.com/openai/codex/pull/28806)

5. **[#28801] Improve thread list and resume RPC paths** — Adds SQLite-backed `thread/list` path reading only list-relevant fields, reducing full-thread materialization overhead. Better filtering, parent ordering, and anchor support. [Link](https://github.com/openai/codex/pull/28801)

6. **[#28792] Expose thread-level multi-agent mode** — Allows clients to set multi-agent mode at thread creation and recover the current mode via lifecycle APIs. Distinguishes "not set" from "explicitRequestOnly." [Link](https://github.com/openai/codex/pull/28792)

7. **[#28685] Add per-turn multi-agent mode** — Enables individual turn-level proactive delegation (v2) without changing static guidance. Safe default remains explicit-request-only. [Link](https://github.com/openai/codex/pull/28685)

8. **[#28802 -> #28820] Plugin install extension chain (6 PRs)** — A coordinated stack adding `request_plugin_installs` as a plural tool: schema/validation (#28802), extension backend (#28818), executor (#28817), TUI metadata rendering (#28798), core integration (#28819), and removal of old singular tool (#28820). [Link to base](https://github.com/openai/codex/pull/28802)

9. **[#27500] Support `openai/form` extended form elicitations** — Allows App Server clients to opt into MCP-based form elicitations (beyond simple text prompts). Code-finalized and awaiting merge. [Link](https://github.com/openai/codex/pull/27500)

10. **[#28787] Code-mode: introduce transport-neutral session runtime** — Extracts session ownership into a `SessionRuntime` decoupled from protocol transport, preparing for separate-process sessions and cell-based state management. [Link](https://github.com/openai/codex/pull/28787)

---

## Feature Request Trends

1. **Linux Desktop App** (#11023) remains the #1 community ask (597 👍), with no official roadmap commitment yet.
2. **Projects with movable chats, shared memory, shared uploads** (#13836, 13 👍) — Users want ChatGPT-style "Projects" container for organizing long-running coding sessions.
3. **Prioritize attention-worthy chats** (#20817) — Surface chats awaiting approval or recently completed to top of sidebar in Desktop app.
4. **TUI: avoid interrupting user typing** (#28551) — PRs that ask questions while user is typing swallow keystrokes; request idle detection before interrupting.
5. **Remote/phone composer should surface repo-local skills** (#28754) — Skills under `.agents/skills/` don't appear in slash completions on mobile or remote web.

---

## Developer Pain Points

- **Authentication fragility** — Multiple reports of MFA loops (#25670), token revocation (#28672), and forced phone verification. Especially painful for Business/Enterprise seats.
- **Safety-check false positives** (#28015) — Normal DevOps commands (`git fetch`, `docker prune`) trigger security interruptions. Users want a "trust this task" allowlist.
- **Disk and process leaks** — Crashpad unlimited dump growth (#25921), orphan `SkyComputerUseClient` processes (#26293), and stdio MCP helper trees (#17574) cause silent resource exhaustion.
- **Rate-limit unpredictability** — Immediate resets instead of banked (#28811), and `/goal` mode consuming "too much weekly limit" (#28688) — Pro users feel punished for using the feature.
- **macOS-specific blockers** — Gatekeeper blocking `rg` (#28190) and `syspolicyd` lockups (#28071) are recurring Apple ecosystem friction points that erode trust in CLI stability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-18

## Today's Highlights

The team shipped **v0.48.0-preview.0** with dependency management improvements and a 14-day update cooldown policy. Agent reliability remains the top concern, with critical issues around **generalist agent hangs** and **subagent recovery bugs** still awaiting retesting. A burst of PR activity focused on security hardening, including CI pipeline protection against fork artifact poisoning and MCP header encoding fixes.

## Releases

**v0.48.0-preview.0** — Released today
- Dependency chore: bump to 0.48.0-nightly build
- CI: Dependabot cooldown enabled for npm packages (14-day update delay)
- Refactoring work for improved maintainability

No breaking changes or end-user feature additions in this release.

## Hot Issues

1. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (👍8)
   The CLI hangs indefinitely when deferring to the generalist agent. Users report manual `--no-sub-agents` workaround. **Still unaddressed since March** — highest community upvote count.

2. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   Epic tracking 76 behavioral eval tests across 6 Gemini variants. Essential for quality assurance, but no progress since triage.

3. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   Proposes using AST tools for precise method-bound reads. Could reduce token noise and agent turns. Community interested (👍1).

4. **[#22323 — Subagent recovery after MAX_TURNS falsely reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   `codebase_investigator` hits turn limit but reports `status: "success"`. Misleading signal for debugging — **needs retesting**.

5. **[#21968 — Gemini underutilizes custom skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)**
   Model rarely invokes user-defined skills even when contextually relevant. Core prompting issue.

6. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (👍3)
   Simple CLI commands hang after finishing. Affects everyday developer workflows — **marked effort/medium**.

7. **[#26525 — Add deterministic redaction for Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   Secret redaction happens *after* content enters model context. Race-condition security concern.

8. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (👍1)
   Model uses `git reset --force` and similar destructive commands unnecessarily. Safety prompting gap.

9. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   Linux Wayland users hit "GOAL" termination without action. Platform compatibility gap.

10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**
    Agents mode disabled in config — subagents still execute. Configuration bypass bug.

## Key PR Progress

1. **[#27948 — Pin dependencies and enforce 14-day cooldown](https://github.com/google-gemini/gemini-cli/pull/27948)**
   Strips semver ranges from all dependencies; enforces update delay. Reduces supply-chain risk.

2. **[#27996 — Decode web-fetch responses using Content-Type charset](https://github.com/google-gemini/gemini-cli/pull/27996)**
   Fixes garbled text on Chinese/Japanese/legacy sites using `charset=gbk` etc. Important for international users.

3. **[#27987 — Replace process.exit with FatalConfigError](https://github.com/google-gemini/gemini-cli/pull/27987)**
   Refactors argument parsing to throw typed errors. Enables proper test coverage for `--help`/`--version` flags.

4. **[#27994 — Insert skill/agent content literally in system prompt](https://github.com/google-gemini/gemini-cli/pull/27994)**
   Fixes `String.replace` injection bug that could mangle special regex characters in skill descriptions.

5. **[#27753 — CI: validate workflow_run origin (fix fork artifact poisoning)](https://github.com/google-gemini/gemini-cli/pull/27753)**
   Prevents fork PRs from injecting attacker-controlled artifacts into E2E pipelines with secrets. **Security-critical**.

6. **[#27859 — Native drag-and-drop and Cmd+V image pasting](https://github.com/google-gemini/gemini-cli/pull/27859)**
   Adds visual multimodal parity: terminal drag-and-drop + clipboard image paste. **High community value**.

7. **[#27986 — Report cached and thought tokens in ACP mode](https://github.com/google-gemini/gemini-cli/pull/27986)**
   ACP clients now see cached/thought token counts. Prevents 3× cost overestimation for cached requests.

8. **[#27979 — Wrap read_mcp_resource with wrapUntrusted()](https://github.com/google-gemini/gemini-cli/pull/27979)**
   Security consistency: MCP resource output now sanitized like MCP tool output. Fixes #27983.

9. **[#27771 — Fix MCP header encoding for non-ASCII values](https://github.com/google-gemini/gemini-cli/pull/27771)**
   Unicode header values (e.g., `mąka`) now encoded as `ByteString`. Fixes #25668.

10. **[#27990 — Resolve macOS symlink path mismatches in tests](https://github.com/google-gemini/gemini-cli/pull/27990)**
    Fixes test failures on macOS where `/var` → `/private/var`. Ensures CI passes on all platforms.

## Feature Request Trends

- **AST-aware code understanding** (#22745, #22746): Proposals for AST-based file reading, search, and mapping to improve agent precision.
- **Remote Agents & Advanced Auth** (#20303): Task-level authentication, background operations, and 1P agent support.
- **Browser Agent resilience** (#22232): Lock recovery and session takeover for persistent browser profiles.
- **Agent self-awareness** (#21432): CLI should know its own flags, hotkeys, and self-execution mechanics.
- **Evaluation infrastructure** (#24353, #23166): Robust component-level evals and stable internal project evaluations.

## Developer Pain Points

1. **Agent hangs and false successes** — Generalist agent (#21409) and subagent MAX_TURNS (#22323) break core reliability.
2. **Underutilization of skills** (#21968) — Custom skills ignored by default; users must manually instruct the model.
3. **Configuration bypass** (#22093) — Disabled agent modes still trigger subagents; trust in settings is eroded.
4. **Shell execution glitches** (#25166, #22465) — Commands hang post-completion; interactive prompts stuck.
5. **Destructive command use** (#22672) — No safety guardrails on `--force`, `git reset`, or database commands.
6. **Platform incompatibility** — Wayland (#21983), macOS symlinks (#27990), `\n` escape bugs (#22466).
7. **Auto Memory reliability** (#26522, #26523, #26525) — Indefinite retries, invalid patches, and secrets exposure risk.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** June 18, 2026

---

### Today’s Highlights
The Copilot CLI team released v1.0.64-0 last night, introducing a `/diagnose` command for session log analysis and making `/security-review` generally available. However, the community remains focused on the aftermath of the June 16 Copilot API outage, which left many users with all models showing as "Blocked/Disabled." Plugin and MCP ecosystem improvements continue to dominate both new features and bug reports.

---

### Releases
**v1.0.64-0** — released June 17, 2026
- **New `/diagnose` command** for analyzing session logs to help debug issues.
- **MCP registry installation** support, allowing users to browse and install MCP servers directly from the CLI.
- **`/security-review`** is now available to all users without the `--experimental` flag.
- **Automatic discovery** of MCP servers provided by installed plugins.
- **CSV output support** for MCP tools, enabling easier data export and scripting.
- Commit: [c0a9b8](https://github.com/github/copilot-cli/commit/c0a9b8) (fragment; full commit message truncated in source)

---

### Hot Issues (Top 10 by Relevance & Community Activity)

1. **#3832 – Models showing as "Blocked/Disabled" after June 16 outage**  
   *Status: CLOSED* | 👍: 13  
   After the GitHub Copilot outage (17:45-18:15 UTC on June 16), the model selection interface displayed all models as blocked. Users could not start new sessions. The issue is closed, likely resolved on the backend, but the 13 upvotes and 5 comments indicate widespread concern.  
   [View Issue](https://github.com/github/copilot-cli/issues/3832)

2. **#1973 – Tool whitelist for Interactive Mode**  
   *Status: OPEN* | 👍: 20  
   A long-standing feature request asking for the ability to approve safe read-only tools (grep, cat, find) automatically while still blocking destructive operations. With 20 upvotes, this is the most popular active feature request.  
   [View Issue](https://github.com/github/copilot-cli/issues/1973)

3. **#2643 – Silent command rewrite via preToolUse still shows confirmation dialog**  
   *Status: OPEN* | 👍: 1 | Comments: 10  
   Plugin developers report that even when a `preToolUse` hook sets `permissionDecision: allow`, users still see an interactive confirmation for every rewritten command. This undermines the goal of silent automation.  
   [View Issue](https://github.com/github/copilot-cli/issues/2643)

4. **#3355 – Configurable context window for Claude Opus 4.6 (capped at 200K vs 1M capability)**  
   *Status: OPEN* | 👍: 4  
   Users performing deep technical sessions hit the 200K token cap, forcing frequent automatic compaction. The model natively supports 1M tokens, making this a significant limitation for long-running agentic workflows.  
   [View Issue](https://github.com/github/copilot-cli/issues/3355)

5. **#3560 – Duplicate function call ID error after tool use**  
   *Status: OPEN* | 👍: 1  
   A sudden error where the API returns "Duplicate item found with id fc_call_..." on the turn after a tool call. Plain chat works fine. The error appears transient but blocks workflows entirely.  
   [View Issue](https://github.com/github/copilot-cli/issues/3560)

6. **#3831 – Transient API error retry loop during workflow**  
   *Status: CLOSED* | 👍: 2  
   A mid-session failure where Copilot CLI entered an infinite retry loop: "Request failed due to a transient API error. Retrying..." Likely related to the June 16 outage.  
   [View Issue](https://github.com/github/copilot-cli/issues/3831)

7. **#3812 – Subagents can no longer access MCP tools**  
   *Status: OPEN* | 👍: 0  
   Custom subagents lost the ability to see or use MCP tools, which previously worked. The issue is suspected to be caused by deferred loading of MCP tools. Top-level agents are unaffected.  
   [View Issue](https://github.com/github/copilot-cli/issues/3812)

8. **#3730 – Support enterprise-managed custom models in Copilot CLI**  
   *Status: OPEN* | 👍: 4  
   Enterprise admins can configure custom models in the Copilot Admin dashboard for VS Code, but those models do not appear in Copilot CLI. A blocker for enterprise adoption.  
   [View Issue](https://github.com/github/copilot-cli/issues/3730)

9. **#3074 – Add `/effort` command to switch reasoning effort quickly**  
   *Status: OPEN* | 👍: 5  
   Users want a single-command way to adjust reasoning effort (Low/Medium/High) instead of the multi-step `/model` workflow.  
   [View Issue](https://github.com/github/copilot-cli/issues/3074)

10. **#254 – Copilot CLI keeps asking to login again**  
    *Status: OPEN* | 👍: 4 | Comments: 9  
    A long-running (since Oct 2025) authentication bug where the CLI requires re-login on every new session despite valid GitHub credentials. Affects Business account users.  
    [View Issue](https://github.com/github/copilot-cli/issues/254)

---

### Key PR Progress
*No pull requests were updated in the last 24 hours.* The digest period shows zero PRs. This may indicate the team is focused on bug fixes and release stability following the June 16 outage.

---

### Feature Request Trends
- **MCP Ecosystem Expansion**: Multiple requests for deeper MCP integration: browsing/installing servers (released in v1.0.64-0), preloading tools, and allowing skill files to declare additional MCP servers dynamically.
- **Plugin Automation & Silence**: Users want plugins (hooks) to be able to silently rewrite commands without interactive confirmation, and to auto-update all installed plugins at once.
- **Model & Context Flexibility**: Requests for configurable context windows, quick reasoning-effort switching (`/effort`), and enterprise custom model support are recurring themes.
- **Persistent Configuration**: Users want `/instructions` opt-out to persist per-repo, and session metadata (e.g., working directory) to be retained when resuming sessions.

---

### Developer Pain Points
- **Post-Outage Model Availability**: The June 16 outage caused widespread model blocking; users are concerned about resilience and transparency in future incidents.
- **Plugin Hook Limitations**: The `preToolUse` hook cannot perform silent rewrites; the confirmation dialog appears regardless of permission settings. This frustrates plugin developers building autonomous workflows.
- **MCP Tool Visibility for Subagents**: Deferred loading of MCP tools breaks subagent workflows. Developers need a reliable way to ensure subagents can see the same toolset as the top-level agent.
- **Context Window Caps**: Claude Opus 4.6 is artificially capped at 200K tokens when the model supports 1M. Deep technical sessions suffer from frequent compaction, reducing effectiveness.
- **Authentication Instability**: Persistent login prompts (Issue #254) and transient API errors (Issue #3831) undermine trust in the CLI for CI/CD or long-running agent sessions.
- **Inconsistent Content Exclusion Enforcement**: Organization content-exclusion policies intended for code review are being incorrectly applied to local CLI tools, blocking legitimate file access (Issue #3841).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest**
*Date: 2026-06-18*

---

### 1. Today's Highlights
Activity on the Kimi CLI repository remained low today, with no new releases or pull requests submitted in the last 24 hours. The community’s focus is on two new feature requests: one proposing dynamic switching between Agent and Cluster execution modes mid-session, and another asking for a flag to bypass SSL certificate validation to work around corporate antivirus interference. Both issues are less than 24 hours old and have yet to attract comments or upvotes.

---

### 2. Releases
No new releases were published in the last 24 hours.

---

### 3. Hot Issues
Two new issues were filed today. Both are open and currently have no community engagement.

- **[#2459] [Feature Request] 支持会话运行中切换执行模式（Agent ↔ 集群） / Supports switching execution mode during session running (Agent ↔ Cluster)**
  - *Author:* PresentXoX
  - *Summary:* Requests the ability to toggle between single-agent and cluster execution modes without ending the current session.
  - *Status:* Open, 0 comments, 0 👍
  - *Significance:* If implemented, this would significantly improve workflow flexibility, particularly for users who need to escalate a single-agent task to a distributed cluster during runtime. The lack of engagement suggests this may be an early-stage request.
  - *Link:* [Issue #2459](https://github.com/MoonshotAI/kimi-cli/issues/2459)

- **[#2458] [enhancement] Add option to ignore ssl certificate**
  - *Author:* dmorsin
  - *Summary:* Describes a scenario where corporate antivirus software (using MITM certificate injection) breaks SSL verification during login. The user requests a startup flag or config to skip certificate validation.
  - *Status:* Open, 0 comments, 0 👍
  - *Significance:* A concrete enterprise-environment pain point. While security-conscious projects rarely disable SSL verification by default, this reflects a broader need for better proxy/certificate handling in managed environments.
  - *Link:* [Issue #2458](https://github.com/MoonshotAI/kimi-cli/issues/2458)

---

### 4. Key PR Progress
No pull requests were created or updated in the last 24 hours.

---

### 5. Feature Request Trends
With only two issues surfaced today, common themes are limited. However, they point toward two distinct directions:

- **Runtime Flexibility:** The proposal to switch execution modes mid-session (Agent ⇄ Cluster) suggests growing interest in dynamic resource scaling and session lifecycle management.
- **Network Configuration:** The SSL certificate bypass request highlights a need for more robust transport layer configurability, particularly for users in restricted or heavily monitored corporate networks.

No broader trend can be confidently derived from a single day of low activity.

---

### 6. Developer Pain Points
- **Enterprise Proxy / SSL Interception:** The SSL certificate issue (#2458) directly voices the frustration of developers behind corporate firewalls where security tools break CLI authentication. A recurring request pattern seen in similar tools, this signals a need for documented workarounds (e.g., custom CA bundles) or a configurable `--insecure` flag for development environments.
- **Session Immaturity:** The inability to change execution mode without restarting the session (hinted at by #2459) could be a minor friction point for power users juggling local and distributed workflows.

---

*Data sourced from github.com/MoonshotAI/kimi-cli. Generated on 2026-06-18.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-06-18

## Today's Highlights
Release **v1.17.8** lands with key performance improvements for session timelines and critical bug fixes for OpenAI-compatible providers and Cloudflare AI Gateway. The community remains highly engaged around model latency (#29079, 117 comments) and agent sandboxing (#2242, 72 comments), while a strong wave of feature requests for **auto model selection** and **GLM-5.2 support** signals growing demand for smarter provider integration.

---

## Releases

**v1.17.8** (just released)
- **Improvements:** Session timelines now load significantly faster with reduced flicker and scroll jumping.
- **Bugfixes:**
  - OpenAI-compatible providers now accept MCP tool schemas that previously failed validation. ([@jquense])
  - Cloudflare AI Gateway correctly receives the configured API key. ([@keefetang])

---

## Hot Issues (Top 10)

1. **#29079 – GPT Models takes too long to respond**  
   *117 comments, 49 👍*  
   Users report erratic response times with GPT models—sometimes seconds, sometimes minutes for simple tasks. High engagement suggests this is a widespread UX-breaking concern.  
   [View Issue](https://github.com/anomalyco/opencode/issues/29079)

2. **#2242 – Is there a way to sandbox the agent?**  
   *72 comments, 54 👍*  
   Long-running request to restrict terminal commands to the current directory. Community points to `seatbelt` equivalents in other tools; no native solution exists yet.  
   [View Issue](https://github.com/anomalyco/opencode/issues/2242)

3. **#27589 – TUI fails on Alpine Linux (musl) in 1.14.50**  
   *33 comments, 12 👍*  
   Regression: `getcontext` symbol not found on musl-based systems. Broke in 1.14.50 after working in 1.14.48. Blocks users on lightweight distros.  
   [View Issue](https://github.com/anomalyco/opencode/issues/27589)

4. **#11176 – [FEATURE]: Official OpenCode VS Code extension**  
   *23 comments, 110 👍*  
   Extremely high upvote count. Users want native VS Code integration instead of TUI or web-based workflows.  
   [View Issue](https://github.com/anomalyco/opencode/issues/11176)

5. **#17994 – [FEATURE]: Multi-agent orchestration in isolated workspaces**  
   *21 comments, 2 👍*  
   Request for built-in multi-agent “team” support with isolated workspaces, similar to competitive tools.  
   [View Issue](https://github.com/anomalyco/opencode/issues/17994)

6. **#1852 – Commands that need sudo access break the UI**  
   *12 comments (closed), 11 👍*  
   Sudo-requiring commands hang the agent and break the interface—a persistent UX hazard for system-level tasks.  
   [View Issue](https://github.com/anomalyco/opencode/issues/1852)

7. **#20902 – bash tool hangs when command spawns background child processes**  
   *9 comments, 9 👍*  
   `npm run build &` and similar patterns hang indefinitely until timeout. Critical for CI and long-running tasks.  
   [View Issue](https://github.com/anomalyco/opencode/issues/20902)

8. **#19466 – opencode using CPU for doing nothing**  
   *9 comments, 8 👍*  
   While waiting for API rate limits, OpenCode consumes ~50% of a single core (i9-14900). Inefficient idle behavior annoys developers.  
   [View Issue](https://github.com/anomalyco/opencode/issues/19466)

9. **#8456 – [FEATURE]: Auto model selection based on task type**  
   *7 comments, 36 👍*  
   Users want OpenCode to intelligently switch models (e.g., cheap model for trivial edits, powerful model for complex reasoning) without manual selection.  
   [View Issue](https://github.com/anomalyco/opencode/issues/8456)

10. **#7380 – Old messages disappear from chat**  
   *8 comments (closed), 8 👍*  
    Messages in long sessions vanish, including the ability to scroll back. A concerning data integrity issue for heavy users.  
    [View Issue](https://github.com/anomalyco/opencode/issues/7380)

---

## Key PR Progress (Top 10)

1. **#32731 – Auto-discover models from OpenAI-compatible providers**  
   Closes #6231. Calls `GET /models` on the base URL to auto-populate model lists instead of manual config. Reduces setup friction significantly.  
   [View PR](https://github.com/anomalyco/opencode/pull/32731)

2. **#32742 – Add opencode-loop to ecosystem**  
   Docs-only PR adding `opencode-loop`, a plugin providing Claude Code-style auto-continue with `/loop` commands and a daemon for idle-safe recurring work.  
   [View PR](https://github.com/anomalyco/opencode/pull/32742)

3. **#32612 – Exclude `-pro` models from ChatGPT-account model list**  
   Fixes #26115 and #32435. Prevents users from selecting unusable `gpt-5.5-pro` models on ChatGPT OAuth accounts.  
   [View PR](https://github.com/anomalyco/opencode/pull/32612)

4. **#27554 – Local LAN provider discovery + auto-discover models**  
   Combines mDNS and auto-model discovery to find local OpenAI-compatible servers on the LAN. Dual-purpose PR (bug fix + feature).  
   [View PR](https://github.com/anomalyco/opencode/pull/27554)

5. **#28592 – Fix OSC52 clipboard passthrough under GNU screen**  
   Fixes clipboard paste for GNU screen users by correctly handling DCS passthrough (was only working for tmux).  
   [View PR](https://github.com/anomalyco/opencode/pull/28592)

6. **#32734 – Support OpenRouter model variants**  
   Resolves variants like `:free`, `:extended`, `:thinking` which were previously rejected because the catalog only contains base model IDs.  
   [View PR](https://github.com/anomalyco/opencode/pull/32734)

7. **#20491 – Add Kiro (AWS) provider**  
   Adds `opencode-kiro` as a bundled plugin for AWS-based model access, closing #9165 and #26680.  
   [View PR](https://github.com/anomalyco/opencode/pull/20491)

8. **#27163 – Native per-session goals**  
   Adds persistent goals with active/paused/completed status, HTTP APIs, and generated model output. Still open; functional but awaiting final review.  
   [View PR](https://github.com/anomalyco/opencode/pull/27163)

9. **#28936 – Fix TUI question taking over open dialog**  
   Quick fix for an annoying UI glitch where modal questions override the open-file dialog.  
   [View PR](https://github.com/anomalyco/opencode/pull/28936)

10. **#32052 – Pass apiKey to createUnified for Cloudflare AI Gateway**  
    Fixes #32051. The provider was not passing the API key correctly, causing authentication failures.  
    [View PR](https://github.com/anomalyco/opencode/pull/32052)

---

## Feature Request Trends

- **Auto / Smart Model Selection (#8456, #32736):** Multiple requests for OpenCode to automatically choose the appropriate model based on task complexity (e.g., cheap model for file edits, advanced model for reasoning).
- **GLM-5.2 Support (#32172, #32620, #32444):** Three separate issues demanding native support for Z.AI's latest reasoning model, including thinking-effort variants and proper provider integration.
- **VS Code Extension (#11176):** With 110 upvotes, this is the highest-demand feature—users want to move away from TUI to native editor integration.
- **Session Lifecycle Management (#16101, #32630):** Users want TTL-based auto-archival, storage caps, and automatic cleanup of large SQLite databases (some >700MB).
- **Multi-Agent & Sandboxing (#17994, #2242):** A clear push toward isolated, sandboxed agent workspaces and orchestrated multi-agent teams.
- **Runtime Permission Mode (#7928):** Persistent request for a toggle between auto-edit and permission-required modes, similar to Claude Code's Shift+Tab.

---

## Developer Pain Points

- **Latency & Hangs:** GPT response delays (#29079), bash tool hangs on background processes (#20902), and CPU spin during rate-limit waits (#19466) are the top recurring frustrations.
- **Linux & Terminal Issues:** Ctrl+Z suspends the app instead of undo (#24817), musl/Alpine TUI crashes (#27589), and clipboard issues under GNU screen (#28592) plague Linux users.
- **Provider Configuration Friction:** Users repeatedly struggle with custom OpenAI-compatible providers—schema validation (#29079), API key passing (#32052), and model discovery (#32731) are common trouble spots.
- **Session Data Bloat:** Uncontrolled SQLite growth (#32630) and missing chat history (#7380) erode trust for long-running sessions.
- **Instability After Updates:** Multiple users report regressions after recent releases (v1.17.8 lag on Windows, #32746; Alpine breakage in 1.14.50, #27589).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-18

## Today's Highlights

The community is shipping fast on provider fixes: a shared HTTP error body surface (PR #5832, #5828) addresses the long-standing "opaque error" problem, while OpenAI Responses API migration lands with prompts sent as `instructions` (PR #5859). Model support expands with GLM-5.2 effort levels (PR #5770), a new `max` thinking level for Anthropic adaptive models (PR #5829), and an Azure AI Foundry provider for Claude (PR #5849). On the TUI front, Warp terminal detection for Kitty image protocol (PR #5841) and streaming code fence rendering stability (PR #5846) are in progress.

## Releases
No new versions released in the last 24 hours.

## Hot Issues

1. **[#5825 — Streaming markdown forces scroll to bottom](https://github.com/earendil-works/pi/issues/5825)** (OPEN, 12 comments)  
   Reader-unfriendly TUI behavior: when `clear on shrink` is enabled, Pi forces a scroll-to-bottom during streaming markdown, making it impossible to read previous output while the agent is still generating. A fix is already in progress via PR #5846.

2. **[#5653 — Move off Shrinkwrap](https://github.com/earendil-works/pi/issues/5653)** (OPEN, 11 comments)  
   Duplicate `pi-ai` module copies on disk because package manager hoisting fails when both `pi-ai` and `pi-coding-agent` are direct deps. Module-level `Map` state is duplicated, breaking singleton assumptions. Community wants a monorepo or proper deduplication strategy.

3. **[#3715 — Local LLM streams terminate at 5 min from undici default bodyTimeout](https://github.com/earendil-works/pi/issues/3715)** (CLOSED, 11 comments, 👍4)  
   Long `Write` tool calls against local vLLM die after 5 minutes due to undici's hardcoded `bodyTimeout`. The `retry.provider.timeoutMs` setting doesn't raise the cap. High community demand for configurable HTTP timeouts.

4. **[#5654 — Add `excludeFromContext` to custom messages via `sendMessage()`](https://github.com/earendil-works/pi/issues/5654)** (OPEN, 7 comments, 👍1)  
   Users want the ability to inject custom messages that don't pollute the LLM context—mirroring the `!!` bash execution flag. Would enable `/status` integrations and observer patterns without inflating token usage.

5. **[#5700 — Support multiple live agent sessions with TUI switching](https://github.com/earendil-works/pi/issues/5700)** (OPEN, 5 comments)  
   `switchSession` tears down the current session, preventing background agents from running concurrently. Users want to juggle multiple concurrent agents and switch between them in the TUI.

6. **[#5763 — Providers swallow HTTP error body](https://github.com/earendil-works/pi/issues/5763)** (OPEN, 5 comments)  
   Behind a gateway/proxy, non-2xx responses with parse-failing bodies produce opaque errors like `Unknown: UnknownError` (Bedrock) or `403 status code (no body)` (OpenAI). Makes debugging impossible. Multiple PRs land today to fix this.

7. **[#3200 — Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200)** (OPEN, 3 comments)  
   Multimodal models like Gemma 4 and GPT-4o support video/audio, but `prompt` RPC only forwards images. Users want parity for richer multimodal agent interactions.

8. **[#5570 — Support --no-skills / --skill behavior in project settings](https://github.com/earendil-works/pi/issues/5570)** (OPEN, 3 comments)  
   CLI flags for skill control exist but cannot be persisted in project-level `.pi/settings.json`. Teams want reproducible skill configurations per project.

9. **[#5827 — Warp terminal not detected for Kitty image protocol](https://github.com/earendil-works/pi/issues/5827)** (OPEN, 3 comments)  
   Warp supports Kitty graphics protocol but Pi's detection doesn't recognize it, falling back to text rendering for inline images. PR #5841 addresses this today.

10. **[#5860 — GLM-5.2 model support for Opencode Go subscription](https://github.com/earendil-works/pi/issues/5860)** (CLOSED, 1 comment)  
    Fresh request: Opencode Go added GLM-5.2 yesterday; v0.79.6 doesn't expose it in the model selection menu. Expect a fast follow-up PR.

## Key PR Progress

1. **[#5859 — fix(ai): send responses prompts as instructions](https://github.com/earendil-works/pi/pull/5859)** (OPEN)  
   OpenAI Responses APIs expect system prompts in top-level `instructions`, not replayed `input` messages. Critical for OpenAI, Azure OpenAI, and Codex Responses paths.

2. **[#5849 — feat(ai): add Azure AI Foundry provider for Anthropic Claude](https://github.com/earendil-works/pi/pull/5849)** (CLOSED)  
   First-class support for Azure-hosted Claude models via new `azure-foundry` provider with Python `AnthropicFoundry` SDK parity and Entra ID auth.

3. **[#5846 — fix(tui): stabilize streaming code fence rendering](https://github.com/earendil-works/pi/pull/5846)** (OPEN)  
   Closes #5825: prevents forced scroll-to-bottom during markdown streaming when `clear on shrink` is enabled.

4. **[#5841 — feat(tui): detect Warp terminal and enable Kitty image protocol](https://github.com/earendil-works/pi/pull/5841)** (OPEN)  
   Detects Warp by `TERM_PROGRAM`, `WARP_SESSION_ID`, or `WARP_TERMINAL_SESSION_UUID`, enabling inline image rendering without the `kitty` workaround.

5. **[#5832 — fix(ai): surface provider HTTP error body instead of opaque SDK message](https://github.com/earendil-works/pi/pull/5832)** (OPEN)  
   Fixes #5763: exposes raw HTTP response bodies for non-2xx responses across all providers, replacing opaque error messages.

6. **[#5829 — feat: add "max" thinking level for adaptive reasoning models](https://github.com/earendil-works/pi/pull/5829)** (CLOSED)  
   Adds `max` thinking level for Anthropic models like `claude-opus-4.8` and `claude-opus-4.7`, bridging the gap between Pi's `xhigh` cap and CAPI's advertised `["low","medium","high","xhigh","max"]` range.

7. **[#5828 — fix(ai): include raw provider error bodies](https://github.com/earendil-works/pi/pull/5828)** (CLOSED)  
   Shared error formatter that falls back to raw HTTP response bodies for opaque SDK status errors across OpenAI, Azure, Google, Vertex, Bedrock, and Mistral providers. Adds regression coverage.

8. **[#5738 — fix(ai): price anthropic 1h cache writes at 2x input](https://github.com/earendil-works/pi/pull/5738)** (CLOSED)  
   Fixes cache cost calculation: 1h cache writes were undercounted by 1.6x because the provider dropped the 5m/1h split. Now reads `ephemeral_1h_input_tokens` and charges correctly.

9. **[#5847 — Comath/research exploration mode](https://github.com/earendil-works/pi/pull/5847)** (CLOSED)  
   Draft checkpoint for co-math research prototype: natural language entrypoint, research paths, async workstream lifecycle, paper-alignment tests.

10. **[#5801 — Nixify pi](https://github.com/earendil-works/pi/pull/5801)** (CLOSED)  
    Adds Nix flake packaging for Pi, enabling `nix build`, `nix run`, and `nix profile add` for reproducible developer environments.

## Feature Request Trends

- **Session concurrency**: Multiple requests (e.g., #5700) ask for concurrent agent sessions with TUI switching, rather than session teardown on switch.
- **Project-level settings persistence**: CLI flags like `--no-skills` and `--skill` should be configurable in `.pi/settings.json` for reproducible project setups (#5570).
- **Richer RPC API**: Users driving Pi programmatically want `get_entries` and `get_tree` RPC commands (#5810), plus video/audio support in `prompt` (#3200).
- **Extension API expansion**: Extensions want access to active tools as executable objects (#5781), not just names, plus `excludeFromContext` for custom messages (#5654).
- **Model tuning controls**: Community increasingly requests fine-grained model parameters — thinking level (`max` level per #5831), effort levels (#5770), and context window size selection (#5768).

## Developer Pain Points

- **Provider error opacity**: Non-2xx HTTP responses produce unreadable, provider-specific error messages (#5763), making gateway/proxy debugging a nightmare. Two PRs landing today (#5832, #5828) target this.
- **Hardcoded timeout ceilings**: Undici's 5-minute `bodyTimeout` for local LLM streams cannot be overridden by `retry.provider.timeoutMs` (#3715). Long-running `Write` calls fail silently.
- **Encoding corruption**: File edits break CP-1252 encoded files on Windows, silently converting to UTF-8 (#5797). Breaks legacy C++ project workflows.
- **Package duplication**: Shrinkwrap/monorepo gaps cause duplicate `pi-ai` modules on disk, breaking module-level `Map` assumptions (#5653).
- **Terminal detection gaps**: Warp terminal not recognized for Kitty image protocol (#5827), forcing fallback to text rendering. Similar issues with iTerm2-specific features.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-18

---

## Today's Highlights

Three patch releases (v0.18.2, v0.18.3-preview.0, v0.18.3) shipped in the last 24 hours, focused on CLI reliability and context warnings. The community remains highly engaged around **OAuth free tier policy changes** (Issue #3203, 151 comments), with users reporting persistent quota confusion and purchasing barriers. A growing set of PRs is improving session resilience, multi-model disambiguation, and tool-call safety — signaling a maturing codebase under active maintenance.

---

## Releases

Three releases landed in the last 24 hours:

- **[v0.18.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3)** — Official release including the fix for cancelled `ask_user_question` CLI hangs.
- **[v0.18.3-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3-preview.0)** — Preview variant of the same changes.
- **[v0.18.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.2)** — Adds a warning on oversized context instructions and fixes stale CLI syntax/docs defaults.

Key changes across these releases:
- **fix(cli):** Stop hanging after cancelled `ask_user_question` — by @doudouOUC
- **fix:** Warn on oversized context instructions — by @he-yufeng
- **docs:** Fix stale defaults, CLI syntax, and tool naming drift — by @DragonnZhan

---

## Hot Issues (Top 10 by Community Attention)

1. **[#3203 – Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** (151 comments)  
   *Status: needs-triage / feature-request*  
   Proposes reducing daily free quota from 1,000 to 100 requests and phasing out free tier entirely. Highly controversial — community split between those impacted by caps and those supporting sustainable API costs.

2. **[#4479 – Token consumption statistics for Qwen Code](https://github.com/QwenLM/qwen-code/issues/4479)** (16 comments)  
   *Feature request, welcomes PR*  
   User reports burning 30M tokens in a single session with no visibility. Demands daily token usage tracking — resonates with heavy users managing budgets.

3. **[#3384 – Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384)** (15 comments)  
   *Bug*  
   Local Qwen3.6-35B-A3B via VLLM won't connect despite correct settings.json configuration. Highlights friction for self-hosted model users.

4. **[#1855 – OAuth session persists after switching to Coding Plan API key](https://github.com/QwenLM/qwen-code/issues/1855)** (14 comments)  
   *Bug (CLOSED)*  
   Stale OAuth tokens cause 401 errors after upgrading to paid plan. Workflow breakage for users transitioning from free to paid.

5. **[#3335 – "401 invalid access token or token expired"](https://github.com/QwenLM/qwen-code/issues/3335)** (14 comments)  
   *Bug (CLOSED)*  
   Persistent auth failure across sessions. Duplicate of #1855 — underlying token lifecycle issue not fully resolved.

6. **[#3307 – "Temporarily out of stock" on Alibaba Cloud Coding Plan](https://github.com/QwenLM/qwen-code/issues/3307)** (10 comments)  
   *Bug*  
   Users unable to purchase paid plans for over a week. Raises concerns about infrastructure scaling and regional availability.

7. **[#3914 – API connected, no errors but fail to fetch](https://github.com/QwenLM/qwen-code/issues/3914)** (9 comments)  
   *Bug / authentication / installation*  
   OpenRouter proxy connection fails with generic fetch error on Node.js 26. Common pattern with third-party providers.

8. **[#5267 – `context.fileName` in settings doesn't work](https://github.com/QwenLM/qwen-code/issues/5267)** (5 comments)  
   *Bug / configuration*  
   Custom context file attachments (QWEN.md, README.md) ignored despite documented settings. Regression in latest release.

9. **[#5090 – Decouple Provider Identity from SDK Protocol](https://github.com/QwenLM/qwen-code/issues/5090)** (5 comments)  
   *Feature request / in review*  
   Proposes free-form `providerId` strings + explicit `Protocol` enum (OPENAI/GEMINI/ANTHROPIC/QWEN_OAUTH). Architectural improvement for multi-provider setups.

10. **[#5234 – Tool calls stuck in infinite loop](https://github.com/QwenLM/qwen-code/issues/5234)** (4 comments)  
    *Bug / tools*  
    Long-running tool chains never terminate — user forced to kill session. Critical for reliability in agentic workflows.

---

## Key PR Progress (Top 10)

1. **[#5197 – Self-paced `/loop` prompt execution](https://github.com/QwenLM/qwen-code/pull/5197)** (NEW)  
   Adds a wakeup-based scheduling engine instead of fixed cron repeats. Step toward parity with Claude Code's `/loop` behavior.

2. **[#5202 – QQ Bot channel adapter](https://github.com/QwenLM/qwen-code/pull/5202)** (NEW)  
   Community-contributed `@qwen-code/channel-qqbot` joining official channel lineup (telegram/weixin/dingtalk/feishu). Full WebSocket Gateway support.

3. **[#5145 – Follow-up suggestion in input placeholder](https://github.com/QwenLM/qwen-code/pull/5145)**  
   Shows next-prompt suggestions immediately after model response using the fast model — reduces cognitive load.

4. **[#5268 – Fix DeepSeek V4 preset: text-only modalities](https://github.com/QwenLM/qwen-code/pull/5268)** (NEW)  
   Removes incorrect `image: true, video: true` from DeepSeek V4 defaults. Quick fix for a reported configuration bug.

5. **[#5030 – Resume interrupted turns without synthetic "continue" message](https://github.com/QwenLM/qwen-code/pull/5030)**  
   First-class turn recovery after crashes/interruptions — classifies history into three shapes for clean resumption.

6. **[#5183 – Preserve mid-turn image messages](https://github.com/QwenLM/qwen-code/pull/5183)**  
   Ensures images pasted mid-turn survive across tool call boundaries. Fixes a data loss bug in multimodal workflows.

7. **[#5260 – Configurable ACP permission timeout](https://github.com/QwenLM/qwen-code/pull/5260)** (NEW)  
   Adds `--permission-response-timeout-ms` flag for daemon operators. Addresses hangs in human-in-the-loop scenarios.

8. **[#5266 – Centralize mid-turn event constant + recover timed-out drains](https://github.com/QwenLM/qwen-code/pull/5266)** (NEW)  
   Follow-up to #5175: deduplicates SSE event type strings and fixes a narrow window where timed-out drains could block future turns.

9. **[#5126 – Vision bridge: transcribe images to text for text-only models](https://github.com/QwenLM/qwen-code/pull/5126)**  
   Opt-in transcription via multimodal model when primary model lacks vision. Enables image-based workflows without switching models.

10. **[#4934 – Daemon idle detection for health endpoint](https://github.com/QwenLM/qwen-code/pull/4934)**  
    `GET /health?deep=true` now reports active prompts, connected clients, channel health. Useful for external schedulers and container orchestration.

---

## Feature Request Trends

1. **Token usage transparency** — Multiple requests (#4479, #3267) demand daily/weekly token counters and quota dashboards. Users hit hard limits without visibility.

2. **Multi-provider & model disambiguation** — Frequent requests (#5090, #4814, #5173) for cleaner switching between providers (OpenRouter, local LLMs, custom endpoints) and persistent model selection across sessions.

3. **Session management tooling** — Growing demand (#4825, #5147) for CLI subcommands to list, filter, and manage session history programmatically (JSON output, tags, date filters).

4. **Custom provider UX improvements** — Wizard-based provider setup (#4814) is confusing for custom endpoints; users want inline model addition without restarting config.

5. **Vim/keybinding enhancements** — Requests (#2561, #5159) for vim-friendly autocomplete navigation (Ctrl+N/P) and trackpad scrolling support in tmux.

6. **Chinese ecosystem integrations** — QQ Bot channel adapter (#5201) and Chinese localization of tool badges (#5220) indicate growing demand from Chinese-speaking developers.

---

## Developer Pain Points

- **Free tier confusion & purchasing friction** — Daily quota limits hit unexpectedly (#3267, #3281), purchased plans remain "out of stock" for days (#3307, #3272), and OAuth tokens don't cleanly transition to paid API keys (#1855, #3335). Users express frustration at being stuck between exhausted free quotas and unavailable paid options.

- **Authentication instability** — Stale/invalid tokens cause 401 errors (#1855, #3335, #3233), especially after switching auth methods. OAuth session persistence creates a "locked out" experience.

- **Node.js 26 compatibility** — Multiple reports (#3914, #4274) of `fetch failed` errors on Node.js 26 when using third-party providers like OpenRouter, requiring manual `fetchOptions.dispatcher` removal.

- **Tool call reliability** — Infinite loops (#5234), repetitive tool calls (#5237), and mid-turn tool failures (#5180, #5210) disrupt long-running agentic workflows. Users report sessions stuck for hours.

- **Memory & crash issues** — OOM on `/quit` (#5147), session crashes during multi-agent tasks (#5180), and forced reboots breaking session state (#5265) undermine confidence in production use.

- **Configuration gaps** — `context.fileName` not working (#5267), identical model IDs across providers confusing the picker (#5173), and stale documentation defaults (#3384) create trial-and-error setup friction.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-17

## Today's Highlights
The project (now branded internally as **CodeWhale**) continues rapid iteration toward **v0.9.0** with significant architecture work underway: multi-agent orchestration, a chat-native workroom surface, and a staged command-boundary refactor. While no new release dropped in the last 24 hours, the community submitted 27 pull requests focusing heavily on bug fixes around mode toggling, tool permission control, and configuration file preservation. Three critical user-facing bugs—agent self-questioning loops, frozen UI after spawning agents, and snapshot storage ignoring disabled settings—drew immediate PR fixes.

## Releases
No new releases in the last 24 hours. The latest tagged version remains **v0.8.63** (fixing Cargo distribution renaming issues, per closed issue #2917).

---

## Hot Issues (10 Most Noteworthy)

### 🐛 #3275 — **CodeWhale over-modifies, self-questioning, deviating from user intent**
- **Author:** yekern | **Comments:** 4 | **Status:** OPEN
- **Why it matters:** A regression from earlier fix #3061. The agent enters a self-sustaining loop of proposing, answering, and executing without waiting for user confirmation—eroding trust in autonomous mode. A prompt-level fix PR (#3290) was opened same day.
- **Link:** [Issue #3275](https://github.com/Hmbown/CodeWhale/issues/3275)

### 🐛 #3279 — **Plan/Agent Mode Toggle Inconsistency & Tool Permission Chaos**
- **Author:** yekern | **Comments:** 3 | **Status:** OPEN
- **Why it matters:** Switching from Plan to Agent mode causes `write_file`/`exec_shell` to return `denied by user` despite UI showing Agent mode; recovery attempts trigger unauthorized auto-execution. This is a high-impact UX bug blocking multi-mode workflows.
- **Link:** [Issue #3279](https://github.com/Hmbown/CodeWhale/issues/3279)

### 🐛 #3289 — **v0.8.61 UI freezes after auto-spawning several agents**
- **Author:** bruce6135 | **Comments:** 2 | **Status:** OPEN
- **Why it matters:** Plan mode followed by agent spawning locks the UI completely. With multi-agent features landing in v0.9.0 EPIC, this suggests concurrency/deadlock issues in the agent spawning pipeline.
- **Link:** [Issue #3289](https://github.com/Hmbown/CodeWhale/issues/3289)

### 🐛 #3292 — **`pre_tool_snapshot` ignores `snapshots.enabled=false`**
- **Author:** LmeSzinc | **Comments:** 1 | **Status:** OPEN
- **Why it matters:** Per-tool snapshots copy entire git repos into `~/.deepseek/snapshots/` even with `snapshots.enabled = false`, consuming GBs of disk space. A PR fix (#3293) was opened by wuisabel-gif on the same day.
- **Link:** [Issue #3292](https://github.com/Hmbown/CodeWhale/issues/3292)

### 🐛 #3281 — **Moonshot/Kimi `type:object` fix incomplete for `$ref`/`anyOf` schemas**
- **Author:** jghwwnq | **Comments:** 2 | **Status:** OPEN
- **Why it matters:** The v0.8.61 fix for #3265 only works for a narrow set of JSON Schema shapes. Schemas using `$ref`, `allOf`, or `anyOf` at root cause 400 errors from Kimi/Moonshot API. PR #3286 addresses this.
- **Link:** [Issue #3281](https://github.com/Hmbown/CodeWhale/issues/3281)

### 🛠️ #3276 — **Migrate `/web` marketing site from Tailwind v3 to v4**
- **Author:** Hmbown | **Comments:** 0 | **Status:** OPEN
- **Why it matters:** Dependabot keeps opening bumps for Tailwind (v3.4.19 → v4.3.1). v3 is in maintenance mode; sitting on it creates a larger forced-migration cliff later.
- **Link:** [Issue #3276](https://github.com/Hmbown/CodeWhale/issues/3276)

### 🛠️ #3209 — **EPIC: Chat-native CodeWhale workrooms for threaded, shareable agent work**
- **Author:** Hmbown | **Comments:** 2 | **Status:** OPEN
- **Why it matters:** A vision shift: CodeWhale should not be only a terminal app or local web page, but a chat-native workroom with threads, channels, mentions, shareable links, mobile access, and multi-agent inspection. This is the v0.9.0 north star.
- **Link:** [Issue #3209](https://github.com/Hmbown/CodeWhale/issues/3209)

### 🔄 #2007 — **Migration runs for coordinated multi-agent work** [CLOSED]
- **Author:** Hmbown | **Comments:** 7 | **Status:** CLOSED
- **Why it matters:** Replaces School-mode exploration with a standard multi-agent orchestration surface: visible coordinated agent runs with bounded parallel workers, readable roles, disagreement reconciliation, and reporting through the Work surface.
- **Link:** [Issue #2007](https://github.com/Hmbown/CodeWhale/issues/2007)

### 🔄 #1530 — **Session continuity in non-interactive mode (`exec --resume`)** [CLOSED]
- **Author:** xulongzhe | **Comments:** 2 | **Status:** CLOSED
- **Why it matters:** Enables multi-turn conversational workflows on top of CLI. The `exec` and `--prompt` modes now support continuing previous sessions, unlocking CI/CD and automation use cases.
- **Link:** [Issue #1530](https://github.com/Hmbown/CodeWhale/issues/1530)

### 🔄 #2870 — **EPIC: Staged command-boundary refactor for #2791**
- **Author:** aboimpinto | **Comments:** 5 | **Status:** OPEN
- **Why it matters:** Tracks smaller mergeable layers for the command-boundary refactor. The original proof branch (#2851) was too large; this EPIC ensures clean, reviewable PRs land for v0.9.0.
- **Link:** [Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)

---

## Key PR Progress (10 Most Important)

### 🐛 #3294 — **Fix TUI write composer history under `.codewhale`, not legacy `.deepseek`**
- **Author:** wuisabel-gif | **Status:** OPEN
- **Description:** `default_history_path` hardcoded `~/.deepseek/composer_history.txt`, recreating the legacy dir on every non-slash prompt submission. Fix writes under `.codewhale` to avoid confusion on fresh installs.
- **Link:** [PR #3294](https://github.com/Hmbown/CodeWhale/pull/3294)

### 🐛 #3293 — **Respect `snapshots.enabled` for per-tool snapshots**
- **Author:** wuisabel-gif | **Status:** OPEN
- **Description:** Fixes #3292. Per-tool snapshots in `turn_loop.rs` lacked the `snapshots.enabled` guard that pre-turn and post-turn snapshots already respected. Prevents GBs of unwanted snapshot data.
- **Link:** [PR #3293](https://github.com/Hmbown/CodeWhale/pull/3293)

### 🐛 #3291 — **Preserve comments in config files when rewriting**
- **Author:** zlh124 | **Status:** OPEN
- **Description:** All paths that rewrite `config.toml`, `settings.toml`, or `tui.toml` now merge serialized output with original file comments via `toml_edit`. User annotations and commented-out keys survive CLI/TUI config edits.
- **Link:** [PR #3291](https://github.com/Hmbown/CodeWhale/pull/3291)

### 🐛 #3290 — **Add scope discipline rules to prevent self-questioning agent loops**
- **Author:** yekern | **Status:** OPEN
- **Description:** Fixes #3275. Adds scope discipline rules to the `constitution.md` prompt to prevent the agent from entering self-sustaining loops of proposing, answering, and executing without user confirmation.
- **Link:** [PR #3290](https://github.com/Hmbown/CodeWhale/pull/3290)

### 🐛 #3286 — **Ensure `type:object` on Kimi parameters root for all schema shapes**
- **Author:** idling11 | **Status:** OPEN
- **Description:** Fixes #3281. The previous fix only handled `properties`/`required`/`additionalProperties`; now runs sanitization after every schema transformation to catch `$ref`, `allOf`, `anyOf`, and `oneOf` roots.
- **Link:** [PR #3286](https://github.com/Hmbown/CodeWhale/pull/3286)

### 🐛 #3285 — **Persist session before stall/cancel recovery so `--continue` keeps history**
- **Author:** LeoLin990405 | **Status:** OPEN
- **Description:** Fixes #2739 (data-loss part). After stall recovery or Esc cancellation, `--continue` was loading the previous session, losing the in-progress turn. Now persists session state before recovery paths.
- **Link:** [PR #3285](https://github.com/Hmbown/CodeWhale/pull/3285)

### 🐛 #3283 — **Fix Plan/Agent mode toggle: restore `approval_mode` + auto-execution guard**
- **Author:** idling11 | **Status:** OPEN
- **Description:** Fixes #3279. Bug A: `approval_mode` was only saved/restored during YOLO transitions, not Plan→Agent switches. Bug B: Agent mode didn't reset the auto-execution flag, causing unauthorized tool use after mode switch.
- **Link:** [PR #3283](https://github.com/Hmbown/CodeWhale/pull/3283)

### 🐛 #3284 — **Debounce thinking-stream re-renders for faster reasoning display**
- **Author:** LeoLin990405 | **Status:** OPEN
- **Description:** Fixes #1620. Reasoning blocks stream "one character per age" because `append()` calls `bump_active_cell_revision()` on every delta. Debounce reduces render frequency, dramatically speeding up visible reasoning output.
- **Link:** [PR #3284](https://github.com/Hmbown/CodeWhale/pull/3284)

### 🐛 #3280 — **Allow heuristic-only auto routing when flash router unavailable**
- **Author:** hongchen1993 | **Status:** OPEN
- **Description:** `codewhale --provider wanjie-ark --model auto exec` failed because `resolve_auto_route_with_inventory()` bails when `router_available` is false. Now falls back to heuristic routing for non-DeepSeek providers.
- **Link:** [PR #3280](https://github.com/Hmbown/CodeWhale/pull/3280)

### 🛠️ #3242 — **Add `workspace_follow_symlinks` setting for symlink-aware tool operations**
- **Author:** gaord | **Status:** OPEN
- **Description:** Walk-based tools and UI components now follow symbolic links during directory traversal when configuration allows. Supports symlink-heavy project structures.
- **Link:** [PR #3242](https://github.com/Hmbown/CodeWhale/pull/3242)

---

## Feature Request Trends

1. **Multi-agent orchestration & workrooms** — The strongest thread. Issue #2007 (coordinated agent runs), #3209 (chat-native workrooms), and the Agent Fleet protocol (#3171) all point toward a paradigm shift from single-session to collaborative, threaded, shareable agent workspaces.

2. **Configuration preservation & UX** — Multiple requests for preserving comments in config files (#3282), protecting snapshots from unwanted writes (#3292), and maintaining manual annotations across TUI-based edits reflect a desire for more respectful configuration management.

3. **Session continuity across modes** — Non-interactive session resumption (#1530, already closed but marking the trend) and stall recovery persistence (#3285) show demand for workflow- and automation-friendly session management.

4. **Multi-provider flexibility** — Auto-routing without DeepSeek API keys (#3280) and adding new providers like Atlas Cloud (#3239) indicate community desire for provider-agnostic operation.

5. **Performance improvements** — Debouncing thinking-stream re-renders (#3284) and moving volatile workspace paths out of static system prompts (#3288) reflect growing scale—users expect snappy UI even with heavy agent workloads.

---

## Developer Pain Points

- **Mode toggle bugs** — Plan→Agent mode switching causes tool permission chaos (#3279, #3283). This is the most frustrating UX issue: users plan in one mode, switch to execute, and the system either blocks legitimate tools or auto-executes unauthorized actions.
- **Agent overreach** — Self-questioning loops (#3275) and unauthorized auto-execution (#3279) erode trust in autonomous mode. The community wants clear boundaries: plan what you said you'd plan, execute what you said you'd execute.
- **Disk space leaks** — Snapshot system ignores `enabled=false` (#3292), writing GBs of data without user consent. Users expect configuration to be authoritative.
- **First-time install friction** — Legacy `.deepseek` directory recreation on Windows (#3294), broken install on Ubuntu 24.04 (#3268), and Cargo distribution renaming confusion (#2917) create repeated onboarding issues.
- **Schema compatibility** — Partial fixes for Moonshot/Kimi parameter validation (#3281) force users to debug API 400 errors, suggesting inadequate testing across supported model providers.
- **Config file mutilation** — TUI and CLI edits strip comments (#3282, #3291). Developers rely on explanatory comments for complex configurations; losing them silently breaks workflows.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*