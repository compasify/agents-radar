# AI CLI Tools Community Digest 2026-06-11

> Generated: 2026-06-11 00:36 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem — Cross-Tool Comparison Report
**Date: 2026-06-11**

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is undergoing simultaneous maturation and volatility. Claude Code and OpenAI Codex remain the most feature-rich players, each shipping architectural expansions (recursive sub-agents, context window tools) while wrestling with TUI regressions and reliability gaps. Gemini CLI and Pi demonstrate steady maintenance velocity but face persistent agent reliability and streaming fragility issues. The lighter-weight tools—Kimi Code, Qwen Code, and CodeWhale (formerly DeepSeek TUI)—are iterating rapidly on Windows parity, multi-provider support, and core stability, while OpenCode serves as a mid-weight alternative with strong plugin extensibility. GitHub Copilot CLI remains the most stagnant, with zero releases and minimal PR activity, relying on its VS Code integration for feature parity. Notably, all tools share common pain points around terminal rendering quality, agent orchestration determinism, and provider cost transparency.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Hot Issues | Open PRs | Releases Today | Community Engagement Signal |
|------|------------|----------|----------------|----------------------------|
| **Claude Code** | 10 | 9 | ✅ v2.1.172 | High — recursive sub-agent spawning, TUI defect cluster |
| **OpenAI Codex** | 10 | 10 | ✅ 3 alpha releases | Very High — #14593 (604 comments, 265👍) dominates |
| **Gemini CLI** | 10 | 10 | ✅ v0.46.0 | Moderate — dependency refresh sweep, security fixes |
| **GitHub Copilot CLI** | 10 | 1 (spam) | ❌ None | Low — model parity complaints, terminal regressions |
| **Kimi Code** | 10 | 10 | ❌ None | Moderate — 24 merged PRs, active Windows fixes |
| **OpenCode** | 10 | 10 | ✅ v1.17.3 | High — vim motions (165👍), snapshot perf work |
| **Pi** | 10 | 10 | ❌ None | High — 30+ issues closed, provider integrations |
| **Qwen Code** | 10 | 10 | ❌ None | Moderate — security disclosure, fork-subagent merge |
| **CodeWhale** | 10 | 10 | ✅ v0.8.57 | High — rebrand complete, hooks v2 landing |

**Key observation:** Every tool except GitHub Copilot CLI had active development activity. Copilot CLI's stagnation—one spam PR, zero releases—is a stark outlier.

---

## 3. Shared Feature Directions

### Multi-Agent Orchestration (All Tools)
- **Claude Code**: Recursive sub-agent spawning (v2.1.172, 5 levels deep)
- **OpenAI Codex**: MultiAgentV2 schema fragility (#26753), goal auto-continuation permissions
- **Gemini CLI**: Generalist agent hangs (#21409), false success reporting (#22323)
- **OpenCode**: Fork-subagent permissions restored (v1.17.2), model tier selection for subagents
- **Qwen Code**: Agent Team parallel coordination (merged), fork-subagent always-on
- **CodeWhale**: Subagent reliability with Ollama (#2989), 120s timeout renders agents unusable (#1806)

**Core pattern**: The industry is moving from single-agent to multi-agent architectures, but determinism, permission consistency, and recovery logic lag behind capability expansion.

### Terminal Rendering Reliability (Claude Code, Copilot CLI, Qwen Code, OpenCode)
- **Claude Code**: Systematic TUI defect cluster — text omission (#64007), scroll/copy-paste broken (#66808)
- **Copilot CLI**: Doubled/truncated characters (#3749), reasoning garbling (#3755)
- **Qwen Code**: Mouse wheel leakage (#4974), VP mode scroll blocking (#4942), terminal resize fragmentation (#4891)
- **OpenCode**: Vim motions (#1764) and paste-to-attach (#906) as top feature requests

**Core pattern**: Terminal UI quality is a universal pain point. Tools are shipping more features than their rendering stack can reliably handle.

### Provider Cost & Billing Opacity (Codex, OpenCode, Pi, CodeWhale)
- **Codex**: #14593 (604 comments) — extreme token consumption, no root cause acknowledged
- **OpenCode**: "Free usage exceeded" false positive (#14273), unreasonable billing persistence (#18016)
- **Pi**: MiniMax-M3 cache_control ignored, 5x cost penalty (#5605)
- **CodeWhale**: Provider fallback chains requested (#2574), script-based API key retrieval (#3004)

**Core pattern**: Users lack visibility into cost drivers and want automated cost optimization (fallback chains, cache control, dynamic model selection).

### Context & Session Persistence (Claude Code, Codex, OpenCode, Qwen Code, CodeWhale)
- **Claude Code**: Context contamination / exfiltration-shaped instructions (#67283) — auditability gap
- **Codex**: Conversations invisible in UI but on disk (#25463, #20833) — data trust erosion
- **OpenCode**: `/reload` command for hot-reloading config without restart (#9871)
- **Qwen Code**: Cross-session `/rewind` via persisted file snapshots (#4897)
- **CodeWhale**: Sleep/wake kills active sessions (#2990), sidebar session panel requested (#2934)

**Core pattern**: Deterministic session recovery and audit trails are becoming table stakes for production use.

### Determinism & Reproducibility for Automation (Claude Code, Codex, CodeWhale, Gemini CLI)
- **Claude Code**: In-session determinism mechanisms (#58933), headless execution requests
- **Codex**: Token budget visibility, goal auto-continuation silent permission downgrades (#24300)
- **CodeWhale**: `--allowed-tools`, `--disallowed-tools`, `--max-turns` for exec (#3042)
- **Gemini CLI**: Subagent false success reporting (#22323)

**Core pattern**: Automation and CI/CD users are pushing for behavioral determinism that matches the reliability expectations of traditional scripting tools.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|------------|-----------|
| **Primary User** | Pro devs, enterprise | Business/Pro teams | Google ecosystem | VS Code users | General devs | Plugin developers | Tinkerers, local LLM | Qwen ecosystem | Multi-provider users |
| **Architecture** | Node.js + sub-agents | Rust alpha (migrating) | Node.js | Unknown | Node.js | Electron + Go | Node.js | Node.js | Node.js |
| **Key Strength** | Recursive agents, MCP | Fast iteration (3 alphas/day) | Security posture | VS Code parity | Windows fixes speed | Plugin extensibility | Provider breadth | Fork-subagents | Hooks v2, model-agnostic |
| **Key Weakness** | TUI defect cluster | Token/rate-limit opacity | Agent hang reliability | Stagnation, model parity | Yolo mode inconsistency | Hard-coded timeouts | Streaming fragility | Mouse leakage, `env` bypass | Rebrand migration friction |
| **Enterprise Readiness** | High (Bedrock, hooks) | High (workspaces, Guardian) | Moderate (Gemini infra) | High (GH ecosystem) | Low | Moderate | Low | Low | Low |

### Strategic Observations

- **Claude Code** is doubling down on agent depth (recursive spawning) and enterprise compliance (hooks, remote control), but its TUI stability is deteriorating under feature load.
- **OpenAI Codex** is aggressively iterating the Rust CLI (3 alphas/day), but the #14593 token burn issue suggests fundamental architecture strain that isn't publicly addressed.
- **Gemini CLI** leads on security infrastructure (path traversal fixes, CI supply-chain hardening) and dependency modernization, but agent reliability remains its weakest link.
- **Copilot CLI** is effectively frozen; the community is building forks (`shell-ai`) and relying on VS Code integration for new features.
- **Kimi Code** and **Qwen Code** are rapidly closing Windows and stability gaps, positioning themselves as viable secondary options for users outside the Big Three ecosystems.

---

## 5. Community Momentum & Maturity

### Highest Community Engagement
1. **OpenAI Codex** — #14593 (604 comments, 265👍) is the most reacted issue across all tools this week. The Rust alpha releases signal rapid iteration, but the token consumption firestorm threatens user trust.
2. **Claude Code** — High issue throughput with systematic defect clusters. The post-mortem (#54393) and recursive sub-agent release show the community is stress-testing multi-agent architecture in production.
3. **OpenCode** — Vim motions (#1764, 165👍) reflects a passionate power-user base. PR activity spans 10+ meaningful features (snapshot perf, provider cache, Playwright browser tools).

### Fastest Iteration Velocity
1. **Pi** — 30+ issues closed, 12 PRs merged in 24 hours. Provider integrations (Palantir, Bedrock Mantle) and CJK fixes show a responsive maintainer.
2. **Kimi Code** — 24 merged PRs, rapid Windows fixes, session reliability improvements. The "bug bash" mode is effective but risks quality regressions.
3. **OpenAI Codex** — 3 Rust alpha releases in one day indicates high engineering throughput, but the alpha designation suggests these aren't production-ready.

### Most Stagnant
1. **GitHub Copilot CLI** — Zero releases, one spam PR, no meaningful activity. Community sentiment is building replacement tools.

### Maturity Assessment

| Tool | Maturity Level | Trend | Risk |
|------|---------------|-------|------|
| Claude Code | ★★★★☆ | Stable with TUI regression risk | Medium — TUI defect cluster could erode UX |
| OpenAI Codex | ★★★★☆ | Rapid alpha iteration | High — #14593 unresolved, Rust migration pain |
| Gemini CLI | ★★★☆☆ | Steady improvement | Medium — agent hangs are critical |
| Copilot CLI | ★★☆☆☆ | Stagnant | High — community building forks |
| Kimi Code | ★★☆☆☆ | Rapid catch-up | Low — basic reliability improving |
| OpenCode | ★★★☆☆ | Steady feature growth | Low — strong plugin ecosystem |
| Pi | ★★★☆☆ | High burst velocity | Low-Medium — streaming reliability |
| Qwen Code | ★★☆☆☆ | Rapid feature addition | Medium — security bypass, TUI bugs |
| CodeWhale | ★★☆☆☆ | Post-rebrand acceleration | Medium — migration friction |

---

## 6. Trend Signals

### For Tool Maintainers

1. **Multi-agent determinism is the next frontier.** The gap between "can spawn sub-agents" and "sub-agents complete reliably and verifiably" is wide. Post-mortems (#54393 in Claude Code) and false success reporting (#22323 in Gemini) show the community will demand deterministic multi-agent orchestration before trusting it in CI/CD.

2. **Terminal rendering is the new bottleneck.** As tools add more features (TUI mentions, streaming reasoning, agent panels), the terminal output layer is cracking. Tools that invest in rendering quality (Qwen Code's upcoming `terminalSequence` hook, OpenCode's vim motions) will differentiate.

3. **Security and auditability are separating enterprise from hobby tools.** Claude Code's exfiltration-shaped instructions (#67283) and Qwen Code's `env` bypass (#4930) demonstrate that enterprise compliance requirements are outpacing most tools' audit capabilities. Expect SOC 2 / FedRAMP readiness to become a selection criterion.

4. **Local/Chinese model providers are a growing segment.** CodeWhale's rebrand and multi-provider push, Qwen Code's native ecosystem, and Pi's MiniMax issues reflect that the market is no longer just OpenAI/Anthropic/Google. Tools that smoothly support local and regional providers (Ollama, SiliconFlow, Moonshot) will capture this segment.

5. **Cost transparency is becoming a deal-breaker.** OpenAI Codex's #14593 (token burn) and Pi's cache_control gaps show users demand billing instrumentation and predictable cost behavior. Tools that offer provider fallback chains, cache optimization, and cost dashboards will win price-sensitive users.

### For Developers Evaluating Tools

- **If you need automation/CI reliability**: Claude Code (with caution on TUI) or OpenCode (with `/reload` and snapshot fixes)
- **If you need enterprise compliance**: Claude Code (hooks, Bedrock support) or Gemini CLI (security posture)
- **If you need maximum model flexibility**: CodeWhale (most providers) or Pi (broad provider support)
- **If you're on Windows**: Kimi Code (most active Windows fixes) or Claude Code (stable but TUI issues)
- **If you're on macOS**: OpenAI Codex (Rust alpha) or Claude Code (but expect ECONNRESET — #5674)
- **If you want VS Code parity**: Copilot CLI is not delivering; use VS Code Copilot directly and supplement with Claude Code for CLI-specific workflows

### Bottom Line

The AI CLI tools market is converging on multi-agent architectures, persistent session management, and provider model agnosticism, but the user experience and reliability foundations are showing strain under rapid feature expansion. No single tool has fully solved the "deterministic, auditable, cost-predictable, multi-agent CLI assistant" problem—the winner will be the first to stabilize all four dimensions simultaneously.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-11 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

These are the most-discussed Pull Requests by community engagement:

### 1. [ODT Skill — OpenDocument Text Creation & Template Filling](https://github.com/anthropics/skills/pull/486)
**Status:** Open | **Author:** GitHubNewbie0
A comprehensive skill for creating, reading, and converting OpenDocument Format files (.odt, .ods, .odf). Triggers on mentions of LibreOffice or ISO-standard office documents. Discussion centers on the broad scope covering both template filling and parse-to-HTML conversion. The skill addresses a clear gap: Claude lacked native ODF support despite its importance in government and EU institutional contexts.

### 2. [Improve frontend-design Skill Clarity & Actionability](https://github.com/anthropics/skills/pull/210)
**Status:** Open | **Author:** justinwetch
A revision PR that rewrites the frontend-design skill to ensure every instruction is executable within a single conversation. The debate focuses on specificity vs. flexibility—some argue the revised skill is too prescriptive, while others praise the removal of ambiguous guidance. Represents an ongoing tension in skill design philosophy.

### 3. [Add skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)
**Status:** Open | **Author:** eovidiu
Introduces two "meta-skills": one evaluates skills across five quality dimensions (structure, documentation, resource usage, examples, error handling), the other audits security posture. Community discussion notes these would be invaluable for the skills marketplace but questions whether meta-skills should live in the official repo or as a separate tool.

### 4. [Add document-typography Skill](https://github.com/anthropics/skills/pull/514)
**Status:** Open | **Author:** PGTBoos
Targets typographic quality control—orphan word wrap, widow paragraphs, and numbering alignment. The compelling argument is that these issues affect *every* document Claude generates. Discussion highlights that this is a low-effort, high-impact skill with universal applicability.

### 5. [Add SAP-RPT-1-OSS Predictor Skill](https://github.com/anthropics/skills/pull/181)
**Status:** Open | **Author:** amitlals
A specialized skill for SAP's open-source tabular foundation model for predictive analytics on enterprise data. Discussion reveals strong interest from the SAP ecosystem but concerns about the narrow trigger scope and whether it belongs in the general skills collection versus a domain-specific repository.

### 6. [Add testing-patterns Skill](https://github.com/anthropics/skills/pull/723)
**Status:** Open | **Author:** 4444J99
A comprehensive testing skill covering the full stack: testing philosophy (Trophy model), AAA pattern, unit testing, React component testing, API testing, and E2E testing. Discussion focuses on whether this duplicates existing skills or fills a genuine gap in structured testing guidance.

### 7. [Add sensory Skill — macOS Automation via AppleScript](https://github.com/anthropics/skills/pull/806)
**Status:** Open | **Author:** AdelElo13
Teaches Claude to use `osascript` for native macOS automation instead of screenshot-based computer use. Features a two-tier permission system (basic scripting vs. Accessibility API). Highly praised for solving a real pain point—fragile screenshot-based automation on macOS.

### 8. [Add shodh-memory Skill — Persistent Context](https://github.com/anthropics/skills/pull/154)
**Status:** Open | **Author:** varun29ankuS
A persistent memory system that maintains context across conversations by structuring memory retrieval calls ("proactive_context") into every user message. Discussion raises important questions about context window efficiency and memory management strategy.

---

## 2. Community Demand Trends

From the most-commented Issues, five clear demand directions emerge:

### 🔥 Cross-Organizational Skill Sharing (#228, 13 comments, 👍 7)
The most-requested feature: users want org-wide skill libraries on Claude.ai. Current friction requires downloading `.skill` files and manually uploading via Settings > Capabilities. A shared skill catalog or direct sharing links would eliminate this workflow burden. [Issue link](https://github.com/anthropics/skills/issues/228)

### 🐞 Evaluation Infrastructure Reliability (#556, 12 comments, 👍 7)
A critical bug report: `run_eval.py` consistently reports 0% trigger rates because `claude -p` never activates Skills via the command pipeline. This blocks all skill quality optimization loops. Multiple PRs (#1099, #1050, #362) attempt to fix platform-specific subprocess and encoding issues, revealing that **Windows support is a major community pain point**. [Issue link](https://github.com/anthropics/skills/issues/556)

### 🛡️ Security & Trust Boundary Abuse (#492, 7 comments, 👍 2)
Community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability. Users may grant elevated permissions to community skills they mistake for Anthropic-authored. This raises governance questions about namespace controls and skill provenance verification. [Issue link](https://github.com/anthropics/skills/issues/492)

### 🔄 Skill Duplication & Plugin Architecture (#189, 6 comments, 👍 8)
`document-skills` and `example-skills` plugins install identical content, wasting context window space. The community expects clear separation of concerns between document-focused and general example skills. This signals demand for **better plugin lifecycle management** and deduplication. [Issue link](https://github.com/anthropics/skills/issues/189)

### 📋 Multi-File Skill Bundling (#1220, 2 comments)
Skills split across multiple reference files (`refs/file-alpha.md`, etc.) face a delivery problem: only `SKILL.md` is injected into the agent's context. The community requests **inline bundling or multi-file preload** to support composable skill architectures. [Issue link](https://github.com/anthropics/skills/issues/1220)

---

## 3. High-Potential Pending Skills

These actively-discussed PRs are not yet merged but show strong momentum:

| Skill | PR | Status Signal |
|-------|-----|--------------|
| **skill-creator Windows fixes** (#1050, #1099) | [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099) | Two independent PRs from different authors targeting the same subprocess/encoding bugs. High likelihood of merging as the evaluation toolchain is blocking all skill optimization. |
| **agent-creator meta-skill** (#1140) | [PR #1140](https://github.com/anthropics/skills/pull/1140) | Fixes multi-tool evaluation and adds Windows support. Addresses Issue #1120 directly. The meta-skill approach aligns with the community's growing interest in skill composition. |
| **sensory (macOS automation)** (#806) | [PR #806](https://github.com/anthropics/skills/pull/806) | Clear problem-solution fit with a well-defined permission model. Low controversy, high utility for Mac users. |
| **testing-patterns** (#723) | [PR #723](https://github.com/anthropics/skills/pull/723) | Comprehensive skill for a universally needed domain. The main blocker is overlap/duplication concerns with existing skills. |
| **YAML special character detection** (#361, #539) | [PR #361](https://github.com/anthropics/skills/pull/361), [PR #539](https://github.com/anthropics/skills/pull/539) | Two PRs solving the same problem (unquoted `description` fields with colons). Low risk, high value—prevents silent YAML parsing failures. Likely one will merge soon. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform evaluation and optimization toolchain**—the `skill-creator` ecosystem has received 5+ dedicated bug-fix PRs and the top-2 Issues both concern evaluation infrastructure failures (0% trigger rates, Windows incompatibility), indicating that skill quality improvement is bottlenecked by tooling reliability rather than skill concept innovation.

---

# Claude Code Community Digest — 2026-06-11

## Today's Highlights

Claude Code shipped **v2.1.172** with a notable architectural change enabling recursive sub-agent spawning (up to 5 levels deep), alongside an AWS region resolution fix for Bedrock users. The issue tracker has seen a surge in **TUI render anomaly reports** forming a systematic defect cluster, and a critical **context contamination bug** involving exfiltration-shaped instructions was raised. Two significant multi-agent coordination bugs continue to generate discussion, alongside persistent `ECONNRESET` errors on macOS.

---

## Releases

### [v2.1.172](https://github.com/anthropics/claude-code/releases/tag/v2.1.172)
- **Sub-agents can now spawn their own sub-agents** — recursive delegation up to 5 levels deep. This is a meaningful architectural expansion for complex multi-step workflows.
- **Amazon Bedrock reads `~/.aws` config** when `AWS_REGION` is unset, matching standard AWS SDK precedence; `/status` now indicates the region source.
- **Search bar added** when browsing a mark (likely the markdown rendering view).

---

## Hot Issues

1. **[#5674 — Persistent ECONNRESET Errors on macOS](https://github.com/anthropics/claude-code/issues/5674)** — 44 comments, 36 👍. A long-standing macOS network connectivity bug causing task interruptions. The community is deeply engaged, and the issue has been open since August 2025 despite high reaction count.

2. **[#51183 — Bedrock: Opus 4.7 returns permission_error despite AUTHORIZED status](https://github.com/anthropics/claude-code/issues/51183)** — 30 comments. A frustrating entitlement mismatch bug for enterprise Bedrock users; persists across API boundaries, blocking model access.

3. **[#54393 — Post-mortem: 12 multi-agent coordination bugs surfaced in one overnight cycle](https://github.com/anthropics/claude-code/issues/54393)** — 13 comments. This community-authored post-mortem catalogs systemic multi-agent failures (token starvation, lock contention, ghost instances). It signals that production-grade multi-agent support is still maturing.

4. **[#60385 — Remote Control: MCP permission prompts never surface in web UI](https://github.com/anthropics/claude-code/issues/60385)** — 10 comments. A blocking UX bug for `--remote-control` users: permission prompts for non-read tools are invisible in the web interface, causing session deadlocks.

5. **[#67282 — Remote Control sessions die after ~41 minutes, metronomically](https://github.com/anthropics/claude-code/issues/67282)** — 2 comments. New today. An alarming pattern of 11+ consecutive 41-minute session kills on headless Pi via tmux. Suggests a hard-coded session timeout independent of activity.

6. **[#67283 — Context contamination in bridged sessions: exfiltration-shaped instructions](https://github.com/anthropics/claude-code/issues/67283)** — 1 comment. Filed today. Extracted content steering the model toward data exfiltration appears in context but is missing from saved transcripts. This is a high-severity security and auditability concern.

7. **[#66808 — TUI regression: scroll/copy-paste broken in v2.1.170 on Linux](https://github.com/anthropics/claude-code/issues/66808)** — 3 comments. A fresh regression affecting terminal interaction fundamentals. Workaround exists via `CLAUDE_CODE_DISABLE_MOUSE=1` but disables scrollback.

8. **[#64007 — TUI: turn-transition render omission — content in JSONL but absent from scrollback](https://github.com/anthropics/claude-code/issues/64007)** — 3 comments. Recorded output that never renders; part of the growing TUI defect cluster.

9. **[#62924 — Remote Control bridge fails with "/login" on macOS desktop app](https://github.com/anthropics/claude-code/issues/62924)** — 6 comments. A bridge auth routing issue between the desktop app and Remote Control sessions.

10. **[#67280 — Agent fails to handle Kubernetes container troubleshooting](https://github.com/anthropics/claude-code/issues/67280)** — 1 comment. Notable for the sharp community tone ("you are dumb"), reflecting frustration with agent capability boundaries in production troubleshooting contexts.

---

## Key PR Progress

1. **[#67084 — Fix Hookify prompt fields and warning context](https://github.com/anthropics/claude-code/pull/67084)** — Maps legacy `event: prompt` + `pattern:` rules to the current `UserPromptSubmit` payload. Keeps backward compat via `user_prompt` alias. Critical for hook migration.

2. **[#65875 — Forward ANTHROPIC_BASE_URL to agentic_review child process](https://github.com/anthropics/claude-code/pull/65875)** — Blocks OAuth-based proxy/gateway setups (LiteLLM, Bifrost) from silently failing when advisor mode spawns child Claude processes.

3. **[#63686 — Bump stale/autoclose timeouts from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)** — A process policy change responding to the community's need for longer issue triage windows. Currently set at 14 days, which is aggressive.

4. **[#65314 — Add detect-theme-color-issues script for light theme color bugs](https://github.com/anthropics/claude-code/pull/65314)** — A triage script to cluster invisible-text reports. The root cause is a `color7`/`color0` collision family — a nice automated triage improvement.

5. **[#65916 — Clarify allowed-tools vs agent tools enforcement](https://github.com/anthropics/claude-code/pull/65916)** — Documents the critical distinction: `allowed-tools` is auto-approval only (not a capability boundary), while `tools:` in subagent frontmatter is a hard restriction. Essential for secure subagent design.

6. **[#65919 — Document CLAUDE_PLUGIN_ROOT limitation in subagents](https://github.com/anthropics/claude-code/pull/65919)** — Subagents receive plugin/project root variables as literal strings instead of resolved paths (issue #65768, ≤ v2.1.166). This breaks plugin-bundled file access in subagents.

7. **[#66372 — Detect Docker daemon failures via LASTEXITCODE](https://github.com/anthropics/claude-code/pull/66372)** — Fixes a silent failure in devcontainer Docker checks where `docker info` non-zero exits were caught by a PowerShell try/catch that never fires for native commands.

8. **[#66416 — Plugin-dev validator scripts abort on first finding due to set -e](https://github.com/anthropics/claude-code/pull/66416)** — Three plugin-dev validators stop after the first error because of `set -euo pipefail`, skipping remaining checks. A quality-of-life fix for plugin developers.

9. **[#66573 — Restore dead error handlers in ralph-wiggum hook](https://github.com/anthropics/claude-code/pull/66573)** — `set -euo pipefail` breaks two error-handling patterns in the hook; this restores the intended "fail early, report clearly" behavior.

10. **[#66577 — Sync security-guidance plugin marketplace metadata](https://github.com/anthropics/claude-code/pull/66577)** — Marketplace.json shows version 1.0.0 and an old description while plugin.json has 2.0.0. Minor but causes discovery mismatches.

---

## Feature Request Trends

1. **Multi-agent coordination improvements** — The post-mortem issue (#54393) and continued chatter around recursive spawns (now real in v2.1.172) indicate the community wants production-grade orchestration with deterministic behavior, not just depth.

2. **Determinism/reproducibility for automation** — Issue #58933 calls for "in-session determinism mechanisms" to avoid forcing automation users onto the metered Agent SDK path. This is a cost and architecture concern.

3. **Quick configuration / slash command initialization** — Issue #67278 requests invoking slash commands (like `/color`) on session startup, reflecting a desire for persistent personal configuration.

4. **Dismissible persistent UI banners** — Issue #67209 asks for dismissible "Virtualization not available" banners in Cowork mode. Users want opt-out for features they intentionally run without.

5. **Hardened container security configurations** — Issue #67276 requests better support for secure deployment configs and Docker hardened images, with frustration over safety classifiers blocking legitimate security work.

---

## Developer Pain Points

- **TUI render defects are reaching cluster-critical mass.** Issues #67277 (meta-issue), #67267, #67254, #67252, #64007, #64567 form a systematic cluster — text omission, duplication, and character-level garbling across multiple cct sessions and versions. This is the most concentrated area of regression pain.

- **Safety classifiers producing false positives on legitimate work.** Issues #67273 (diagnostic operations flagged as cybersecurity), #67033 (scientific computing), and #67276 (secure deployments) show a pattern of over-broad security flagging frustrating experienced developers.

- **Remote Control sessions are unreliable.** Issues #60385 (invisible permission prompts), #67282 (metronomic 41-minute kills), and #62924 (desktop app bridge failures) paint a picture of Remote Control as still maturing.

- **ECONNRESET on macOS is chronic.** Issue #5674 has been open since August 2025 with 44 comments and 36 👍. Despite high engagement, no fix has shipped.

- **Context auditability gaps.** Issue #67283 (exfiltration-shaped instructions in context but missing from transcripts) raises serious concerns about session integrity and prompt injection detection — especially for enterprise users with compliance requirements.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**2026-06-11**

## Today's Highlights

Three Rust alpha releases (v0.140.0-alpha.2/4/7) landed today, signaling rapid iteration on the CLI. Meanwhile, the community is ablaze over Issue #14593—a five-month-old rate-limit burn complaint that has exploded to 604 comments and 265 upvotes, making it the single most urgent user-facing issue. On the engineering side, OpenAI is shipping multiple PRs to improve MCP metadata passing, TUI goal support, and context window management.

## Releases

Three new Rust CLI alpha versions were published today:
- **rust-v0.140.0-alpha.2**, **rust-v0.140.0-alpha.4**, **rust-v0.140.0-alpha.7** — all tagged as `0.140.0-alpha.x`. Release notes are minimal ("Release 0.140.0-alpha.x"), suggesting these are iterative patches targeting the v0.140.0 stabilization milestone.
- ([rust-v0.140.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.7))

## Hot Issues

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)** *(604 comments, 265 👍)*  
   A Business-tier user reports extreme token consumption rate. With 604 comments, this has become the community's most active thread. The 265 upvotes indicate widespread agreement. OpenAI has not yet publicly acknowledged a root cause.

2. **[#24675 – Stale app connector link after reauth](https://github.com/openai/codex/issues/24675)** *(22 comments)*  
   A Mac user’s Linear connector persistently returns 401 even after re-authentication. The fix requires clearing a local cache file. Points to a missing automatic cache-invalidation path in the app connector lifecycle.

3. **[#26867 – GitHub PR review uses deactivated workspace](https://github.com/openai/codex/issues/26867)** *(13 comments)*  
   After migrating from Business to Personal Pro, Codex still references the deactivated workspace for PR reviews. Causes confusing "This workspace is deactivated" errors despite active account state.

4. **[#23198 – Codex Desktop on Windows extremely slow](https://github.com/openai/codex/issues/23198)** *(12 comments, 31 👍)*  
   Widespread performance complaint isolated to the Windows desktop app. Users report normal machine performance except within Codex itself. High upvote ratio suggests many affected.

5. **[#25463 – Project threads disappear from UI but remain on disk](https://github.com/openai/codex/issues/25463)** *(11 comments)*  
   A disconcerting data-loss–adjacent bug: conversations vanish from project views and search, yet the JSONL files remain readable on disk. Updated today, indicating ongoing triage.

6. **[#24300 – Goal auto-continuations downgrade permissions silently](https://github.com/openai/codex/issues/24300)** *(10 comments, CLOSED)*  
   Full Access threads can be degraded to read-only/on-request during automatic continuation turns, while the UI still shows "Full Access." Closed but notable for the permission-model inconsistency it exposes.

7. **[#20833 – Project sidebar hides older conversations](https://github.com/openai/codex/issues/20833)** *(9 comments)*  
   Another UI/data mismatch: workspace conversations become inaccessible from the sidebar despite local thread data still existing. Affects users with long project histories.

8. **[#26753 – MultiAgentV2 encrypted spawn_agent schema fails](https://github.com/openai/codex/issues/26753)** *(9 comments, CLOSED)*  
   Enabling `features.multi_agent_v2` causes every turn to fail because the model-visible tool schema is rejected by the API. Closed, indicating a fix is in—but highlights fragility in agent schema handling.

9. **[#27175 – Windows 26.602.71036 crashes on launch](https://github.com/openai/codex/issues/27175)** *(8 comments)*  
   A Pro user's Windows desktop app becomes inaccessible immediately after update, even with empty sessions. Another entry in the growing list of Windows launch failures.

10. **[#27491 – Severe streaming slowdown in Fast mode](https://github.com/openai/codex/issues/27491)** *(4 comments, very recent)*  
    GPT-5.5 Fast mode outputs only a few characters per second before stalling. Filed yesterday, updated today. Could signal a backend or client-side streaming regression.

## Key PR Progress

1. **[#27495 – Pass agent path metadata to MCP tools call](https://github.com/openai/codex/pull/27495)**  
   Adds `agent_path` to MCP request metadata, distinguishing root sessions from subagent spawns (`/root/worker`). Improves traceability for MCP tool invocations.

2. **[#27337 – Improve `/goal` in TUI for long objectives and images](https://github.com/openai/codex/pull/27337)**  
   Removes two major `/goal` limitations: now supports local images and remote URLs in goal definitions, and materials long objective text on disk (with TUI preview of the first 200 characters).

3. **[#27488 – Add new context window tool](https://github.com/openai/codex/pull/27488)**  
   Provides a model-requestable way to start a fresh context window without generating a compaction summary. Addresses the "token budget" visibility limitation.

4. **[#27465 – Remove redundant plugin app auth state](https://github.com/openai/codex/pull/27465)** *(CLOSED)*  
   Deletes unused `needsAuth` field and stops unnecessary MCP queries for connector auth hydration. Cleanup that reduces plugin install overhead.

5. **[#27246 – Strip image detail from Responses Lite requests](https://github.com/openai/codex/pull/27246)**  
   When `resize_all_images` is enabled, strips `detail` fields from message and tool-output images before sending. Optimizes request payloads without mutating stored history.

6. **[#27499 – Promote TUI unified mentions to default](https://github.com/openai/codex/pull/27499)**  
   Stabilizes the unified mention popup (Mentions 2.0) as the default TUI experience, with a `--disable mentions_v2` rollback path. A quality-of-life improvement for CLI users.

7. **[#27440 – Fall back to manual approval when Guardian times out](https://github.com/openai/codex/pull/27440)**  
   Previously, a Guardian auto-review timeout would block commands. Now interactive sessions fall back to manual approval, preventing false-negative command rejections.

8. **[#27443 – Add Bedrock API key as managed auth mode](https://github.com/openai/codex/pull/27443)**  
   Treats Amazon Bedrock API keys as a first-class auth mode with keyring persistence, reload, and logout—avoiding a separate auth manager or credential file.

9. **[#27461 – Skip plugin MCP OAuth when app route is available](https://github.com/openai/codex/pull/27461)**  
   For dual-surface plugins, avoids unnecessary MCP OAuth probing at install time when the app route already handles authentication. Reduces friction for ChatGPT/SIWC users.

10. **[#27316 – Keep request_user_input direct-model only](https://github.com/openai/codex/pull/27316)**  
    Restricts `request_user_input` to direct model calls only—prevents incorrect behavior when exposed as a nested code-mode tool, where continuation semantics differ.

## Feature Request Trends

- **Expose compaction to agents** ([#21777](https://github.com/openai/codex/issues/21777)): Users want agents to be able to trigger or observe context compaction explicitly, rather than letting it happen silently mid-goal.
- **Async command hooks** ([#27452](https://github.com/openai/codex/pull/27452)): While this is a PR, it aligns with repeated requests for non-blocking background actions during agent sessions.
- **Better goal/automation visibility**: Multiple issues ([#27492](https://github.com/openai/codex/issues/27492), [#25812](https://github.com/openai/codex/issues/25812)) request clearer indicators when automations are active, scheduled, or missing.
- **Authentication improvements**: The Bedrock PR ([#27443](https://github.com/openai/codex/pull/27443)) and OAuth routing PR ([#27461](https://github.com/openai/codex/pull/27461)) reflect a growing need for unified, managed auth across multiple backends.

## Developer Pain Points

1. **Windows Desktop stability** — Multiple crash-on-launch bugs ([#27175](https://github.com/openai/codex/issues/27175), [#25807](https://github.com/openai/codex/issues/25807), [#27320](https://github.com/openai/codex/issues/27320), [#27367](https://github.com/openai/codex/issues/27367)) across various Windows versions. This is the single largest category of unresolved issues in the top 30.

2. **UI/Data synchronization failures** — Conversations that exist on disk but are invisible in the UI ([#25463](https://github.com/openai/codex/issues/25463), [#20833](https://github.com/openai/codex/issues/20833), [#22796](https://github.com/openai/codex/issues/22796)). Erodes trust in the desktop app's data persistence.

3. **Permission state inconsistency** — Goals and automations silently downgrading or ignoring permission settings ([#24300](https://github.com/openai/codex/issues/24300), [#26921](https://github.com/openai/codex/issues/26921), [#22132](https://github.com/openai/codex/issues/22132)). Particularly painful for users relying on Full Access modes.

4. **Token/rate-limit opacity** — Issue [#14593](https://github.com/openai/codex/issues/14593) (604 comments) demonstrates that users feel rate-limit behavior is unpredictable and insufficiently instrumented, especially on paid tiers.

5. **Update-induced regressions** — Every new Windows desktop release seems to introduce at least one immediate crash or UI corruption bug ([#26310](https://github.com/openai/codex/issues/26310), [#27175](https://github.com/openai/codex/issues/27175)), suggesting gaps in Windows-specific QA coverage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-11

## Today’s Highlights

A security-focused patch release (v0.46.0) landed with a critical PTY crash fix, while a major dependency upgrade sweep hit the repository with 15+ automated PRs. The community continues to surface agent reliability issues, especially around subagent hang behavior and the memory system’s lack of deterministic redaction. Work on AST-aware code tools and component-level evaluation infrastructure remains active across two high-comment epic issues.

## Releases

**v0.46.0** — The single change in this patch is a hardening fix for PTY resize handling that prevents native crashes (`#27496`). This is a maintenance release with no new features.

## Hot Issues (Top 10 by community engagement)

1. **#21409 — Generalist agent hangs** (👎 8)
   The agent hangs indefinitely when deferring to the generalist subagent; users report waiting over an hour. Workaround: explicitly instruct the model not to delegate. This remains the highest-reaction bug and suggests a deep scheduling or turn-handling issue.

2. **#22323 — Subagent recovery after MAX_TURNS falsely reports success**
   The `codebase_investigator` subagent returns `status: "success"` and `Termination Reason: "GOAL"` despite hitting the max-turn limit without performing any analysis. This misleads users into thinking work was done.

3. **#21968 — Gemini does not use skills and sub-agents enough**
   Even when custom skills (e.g., Gradle, Git) are defined with clear descriptions, the model rarely invokes them autonomously. Users must explicitly instruct usage, defeating the purpose of skill auto-selection.

4. **#25166 — Shell command gets stuck with "Waiting input" after completion**
   A P1 core bug: after simple, non-interactive commands finish, the CLI hangs showing "Awaiting user input." This affects basic CLI workflows and has 3 👍 from the community.

5. **#26525 — Add deterministic redaction and reduce Auto Memory logging**
   Auto Memory sends transcript content to a model before redacting secrets, and the service can log existing skill payloads. This is a P2 security/privacy concern raised by maintainers.

6. **#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely**
   Sessions the extraction agent skips as low-signal remain unprocessed and are surfaced repeatedly. The community wants a processing-completed marker to avoid infinite loops.

7. **#22745 — Assess the impact of AST-aware file reads, search, and mapping** (👎 1)
   An epic tracking investigations into whether AST-aware tools can reduce tokens and misaligned reads. This could significantly improve codebase navigation quality.

8. **#21983 — Browser subagent fails in Wayland**
   A P1 bug: the browser agent terminates with `GOAL` status immediately on Wayland sessions, making browser automation unusable on Linux/Wayland.

9. **#20079 — Symlinked agent files are not recognized**
   Files in `~/.gemini/agents/` that are symlinks are ignored. This limits user workflows involving dotfile managers or shared configurations.

10. **#24246 — 400 error with > 128 tools**
    When many tools are available, the API returns a 400 error. Users request smarter tool scoping to avoid exceeding limits.

## Key PR Progress

1. **#27767 — Fix path traversal vulnerabilities in skill install/link/uninstall**
   Mitigates three path traversal bugs found in the agent skill management subsystem. Security-critical. (Open, needs issue linking)

2. **#27753 — CI: validate workflow_run origin to prevent fork artifact poisoning**
   Prevents attacker-controlled code from running with repository secrets via chained E2E pipelines. Important supply-chain security fix. (Open)

3. **#27839 — Fix read_background_output delay to respect abort signal**
   Pressing ESC to cancel a background read now actually stops the spinner and prevents prompt queuing. Solves a UI hang. (Open)

4. **#27698 — Fail fast on zero-quota limits instead of retry-loop hang**
   Free-tier users hitting quota `0` were stuck in a 10-attempt retry loop. This PR causes immediate failure with a clear error. (Open)

5. **#27835 — Bump ink-gradient from 3.0.0 to 4.0.1** (Dependabot)
   Part of a massive 15+ PR dependency refresh across ink, react-devtools, vitest, zod, and more — indicates active modernization of the Node.js stack.

6. **#27834 — Bump react-devtools-core 6.1.5 → 7.0.1** (Dependabot)
   Major version bump for React DevTools integration.

7. **#27827 — Bump zod from 3.25.76 to 4.4.3** (Dependabot)
   Major schema validation library upgrade; may introduce breaking changes requiring migration work.

8. **#27824 — Bump vitest from 3.2.4 to 4.1.8** (Dependabot)
   XL-sized test framework upgrade bringing new features and bug fixes.

9. **#27830 — Bump isbinaryfile 5.0.7 → 6.0.0** (Dependabot)
   File-type detection library upgrade.

10. **#27825 — Bump diff from 8.0.3 to 9.0.0** (Dependabot)
    Text diff library major version bump — potential perf improvements for diff-based workflows.

## Feature Request Trends

- **AST-aware code comprehension (epic #22745):** The strongest feature signal is toward using AST parsers for file reads, search, and codebase mapping. Users want fewer tokens, better method-boundary precision, and smarter navigation.
- **Robust component-level evaluations (epic #24353):** With 76 behavioral eval tests already generated, the team is investing in a formal evaluation infrastructure for individual components, not just end-to-end benchmarks.
- **Browser agent resilience (#22232):** Persistent sessions and lock recovery are requested. Users want automatic takeover of orphaned browser profiles rather than fail-fast crashes.
- **Agent self-awareness (#21432):** Users want the CLI to understand its own mechanics (hotkeys, flags, subagents) well enough to act as its own guide — essentially, dogfooding its own documentation.
- **Destructive behavior guardrails (#22672):** A recurring theme: the model should prefer safe Git operations (no force resets) and warn before destructive database actions.

## Developer Pain Points

1. **Agent delegation and hangs (highest priority):** The #1 frustration is the generalist agent hanging indefinitely (#21409). Combined with false success reporting (#22323) and subagents ignoring settings (#22267), agent reliability is the dominant pain point.

2. **Memory system opacity:** Auto Memory's indefinite retries on low-signal sessions (#26522), silent skipping of invalid patches (#26523), and lack of deterministic redaction (#26525) create trust and performance issues.

3. **Shell execution fragility:** Commands that finish but show "Waiting input" (#25166), and the model's tendency to scatter temp scripts across directories (#23571), interrupt normal CLI flow.

4. **Permission and scoping surprises:** Users report subagents running without permission after updates (#22093), and 400 errors when tool counts exceed 128 (#24246). The system's ability to scope tools and respect user preferences is inconsistent.

5. **Terminal and UI glitches:** Corruption after exiting external editors (#24935), flicker on resize (#21924), and newline escape handling bugs (#22466) degrade the interactive experience — especially for developers using tmux or complex terminal setups.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date: 2026-06-11**

---

## 1. Today's Highlights

The community’s longest-standing pain point—**Issue #53** regarding broken CLI workflows—has reached 75 reactions and continues to drive forks like `shell-ai`. Meanwhile, a cluster of **terminal rendering bugs** (doubled characters, garbled reasoning output) has erupted in the last 24 hours (Issues #3749, #3755). New reports also note that **third-party MCP servers are being blocked by an over-aggressive policy check** even for personal Pro+ accounts, reviving a thread first opened in February.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Hot Issues (Top 10)

1. **[#53 – Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)**  
   *75 👍, 34 comments* – The most-reacted open issue. After six months of silence, the community is building replacements. Notably: `shell-ai` by @Deltik leads the pack. This remains the top existential concern for automated CI/CD workflows.

2. **[#223 – "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens](https://github.com/github/copilot-cli/issues/223)**  
   *76 👍, 29 comments* – Enterprise admins cannot create org-owned tokens with Copilot permissions, forcing reliance on user PATs. High-priority blocker for corporate deployments.

3. **[#1703 – Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) while VS Code Copilot does](https://github.com/github/copilot-cli/issues/1703)**  
   *54 👍, 31 comments* – Disparity between CLI and VS Code model lists remains a top complaint. Gemini 3.1 Pro is the most-cited missing model. Closed but unresolved in practice.

4. **[#3596 – Error loading model list: Error: Not authenticated when resuming sessions](https://github.com/github/copilot-cli/issues/3596)**  
   *10 👍, 5 comments* – Authentication state is lost when resuming sessions, breaking model switching mid-flow. A reliability issue for long-running agents.

5. **[#2050 – Claude Sonnet 4.6 "Execution failed" with GOAWAY connection errors](https://github.com/github/copilot-cli/issues/2050)**  
   *4 👍, 8 comments* – `HTTP/2 GOAWAY` termination errors plague Claude Sonnet 4.6 but not Gemini. Likely a server-side capacity issue, but frustrating for users relying on Claude.

6. **[#2082 – ctrl+shift+c no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082)**  
   *8 👍, 21 comments* – A fundamental terminal UX regression. Linux users rely on this shortcut; its removal breaks muscle memory.

7. **[#3749 – Terminal streaming renderer corrupts output (characters doubled/truncated)](https://github.com/github/copilot-cli/issues/3749)**  
   *2 👍, new today* – Users report "from" becoming "fromply from" and truncated tokens during live streaming. Affects both reasoning and final output.

8. **[#3755 – Reasoning display garbles streamed text with duplicated overlapping chunks](https://github.com/github/copilot-cli/issues/3755)**  
   *New today* – Similar to #3749 but specific to `showReasoning: true`. Word boundaries are re-emitted, producing "numbnumber" and "fromply from" artifacts.

9. **[#2334 – Please bring back no-alt-screen](https://github.com/github/copilot-cli/issues/2334)**  
   *28 👍, 7 comments* – The forced alt-screen mode removes scroll bar, history search, and terminal find. Community wants an opt-out.

10. **[#1707/#3756 – 3rd-party MCP servers disabled by policy, despite no such policy](https://github.com/github/copilot-cli/issues/1707)**  
    *9 comments (reopened today)* – Users keep hitting false positive policy blocks for MCP servers. The workaround is downgrading to v0.0.417, which is unsustainable.

---

## 4. Key PR Progress

Only **one PR** was active in the last 24 hours:

| PR | Status | Description | Notes |
|----|--------|-------------|-------|
| **[#3737 – Jigg empire ai](https://github.com/github/copilot-cli/pull/3737)** | OPEN | "Let’s try this new method" – by @j2030aiNotez | No description or comments. Likely a test/spam PR. Not actionable. |

No significant PRs merged or advanced today. Development activity appears paused.

---

## 5. Feature Request Trends

Three dominant themes emerge from open issues:

- **Model parity with VS Code Copilot** – Users expect the same model list (especially Gemini 3.1, 3.1 Pro, Gemini 3 Flash) in CLI as in VS Code. The disparity undermines trust in the CLI as a first-class tool.
- **Enterprise token and policy controls** – Fine-grained PATs for orgs (#223), policy visibility for MCP servers (#1707, #3756), and admin-configurable model lists are repeatedly requested.
- **Terminal UX ownership** – Users want opt-out for alt-screen (#2334), proper clipboard hooks for Linux (#2082) and Windows (#3622), and clean streaming output without corruption (#3749, #3755).

A minor but growing request: **MCP tool invocation shortcuts** (#3752) – a power-user syntax to bypass LLM interpretation layers.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Model availability mismatch** between CLI and VS Code | Very High | #1703, #1664, #821, #2854, #2550, #2577, #2434 |
| **Terminal rendering regressions** (alt-screen, clipboard, stream corruption) | High | #2082, #2334, #3622, #3749, #3755, #3748 |
| **Enterprise/org policy blockers** (tokens, MCP, model lists) | High | #223, #1707, #3756 |
| **Authentication failures on session resume** | Medium | #3596 |
| **Model-specific failures** (Claude GOAWAY, GPT-5.5 hangs) | Medium | #2050, #3547 |
| **MCP server reliability** (policy false positives, runaway spawning) | Medium | #1707, #3701, #3756 |
| **Worktree explosions** (agent creates thousands of worktrees) | Low but disruptive | #2243 |
| **Plugin/extension regressions** (hooks broken across versions) | Low but growing | #3727 |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-11

## Today's Highlights
No new releases were shipped in the last 24 hours, but the project saw a burst of activity across 24 pull requests and several open issues. A major batch of merged fixes went live targeting Windows compatibility, process cleanup, and session reliability. The community flagged two new blocking bugs in `k2.6` yolo mode and the final todo completion workflow.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#2448 — [bug] Kimi CLI is prompting for approval in yolo mode**  
   *Author:* iaindooley  
   User running `k2.6` on Debian reports that yolo mode still triggers approval prompts. This defeats the purpose of `--yolo` and could block automation workflows. No comments yet.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2448)

2. **#2447 — [bug] Final Todo item never completes**  
   *Author:* iaindooley  
   When the agent uses the todo list tool, the last todo item never transitions to complete. Likely tied to tool-call termination logic.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2447)

3. **#640 — [bug] Kimi CLI stuck in reading one file repeatedly in a loop**  
   *Author:* isbafatima90-arch  
   Long-standing issue (since Jan) on Arch Linux with a custom Anthropic endpoint (`mimo-v2-flash`). The agent enters an infinite read loop on a single file. 7 comments, 1 upvote — still unresolved after 5 months.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/640)

4. **#2343 — [bug] Deferred MCP startup failures abort interactive turn**  
   *Resolved by PR #2355* — a background MCP server crash would kill the current interactive turn instead of logging and continuing. Now fixed.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2343)

5. **#2312 — [bug] Archived sessions cannot be opened from sidebar**  
   *Resolved by PR #2333* — selecting an archived session from the web sidebar would fail validation. Now correctly resolves to current session.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2312)

6. **#2310 — [bug] Shell process not cleaned up on timeout**  
   *Resolved by PR #2327* — runaway shell processes were orphaned after timeout. Now terminates the full process tree.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2310)

7. **#2279 — [bug] Web uploads re-sent after restart**  
   *Resolved by PR #2288* — after a session restart, already-uploaded files were re-attached. Now persists the `.sent` marker.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2279)

8. **#2272 — [bug] Bash installer does not source uv env**  
   *Resolved by PR #2283* — after bash-based install, `uv` was not available in PATH. Now sources the generated env file.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2272)

9. **#2222 — [bug] `--continue` fails when session metadata is stale**  
   *Resolved by PR #2239* — `--continue` now falls back to the newest non-empty session.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2222)

10. **#2197 — [bug] Windows subprocess spawns extra console window**  
    *Resolved by PR #2199 & #2289* — Kaos local exec and CLI subprocesses were creating visible console windows on Windows. Both now use `CREATE_NO_WINDOW`.  
    [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2197)

## Key PR Progress

1. **#2355 — fix: continue after deferred MCP startup failures**  
   *Author:* he-yufeng  
   Merged. Prevents MCP server failures from killing the interactive session. Adds regression test for background MCP wait.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2355)

2. **#2354 — fix: avoid shared rotating logs on Windows**  
   *Author:* he-yufeng  
   Merged. Uses per-process log files (`kimi.<pid>.log`) on Windows to prevent concurrent processes from corrupting the same log file.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2354)

3. **#2334 — fix(kosong): sanitize surrogates before Kimi requests**  
   *Author:* he-yufeng  
   Merged. Filters lone UTF-16 surrogate code units from system prompts and message payloads before sending to Kimi chat-completion API.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2334)

4. **#2333 — fix(web): open archived sessions from sidebar**  
   *Author:* he-yufeng  
   Merged. Fixes session validation logic so archived sessions can be selected and loaded.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2333)

5. **#2327 — fix: terminate shell process trees on timeout**  
   *Author:* he-yufeng  
   Merged. Runs shell commands in their own process group and kills the entire tree on timeout.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2327)

6. **#2288 — fix: avoid resending web uploads after restart**  
   *Author:* he-yufeng  
   Merged. Persists upload state across session restarts.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2288)

7. **#2239 — fix: continue latest persisted session**  
   *Author:* he-yufeng  
   Merged. Fallback to newest session when metadata is stale.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2239)

8. **#2199 — fix(kaos): avoid console windows on Windows exec**  
   *Author:* he-yufeng  
   Merged. Uses `CREATE_NO_WINDOW` flag for Windows subprocess creation.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2199)

9. **#2387 — fix(tools): preserve shell command headline details**  
   *Author:* Pluviobyte  
   Open. Prevents truncation of long shell commands in the UI. Replaces generic `shorten_middle` with a smarter display.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2387)

10. **#2386 — fix(session): map undo wire turns to context turns**  
    *Author:* Pluviobyte  
    Open. `/undo` and fork now correctly map wire turns to context turns when slash commands do not generate user messages. Fixes forking after `git-diff` etc.  
    [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2386)

## Feature Request Trends

- **Recovery and persistence**: Users consistently want better session recovery — surviving crashes (`#2336`), mid-turn kills (`#2383`), and cleanly handling `--continue` with stale metadata (`#2222`).
- **Windows parity**: Multiple issues and PRs target Windows-specific subprocess handling, console window suppression, and log file management — suggesting growing adoption on Windows.
- **MCP robustness**: The community wants MCP servers to be optional and non-fatal — failures should not crash the main interactive loop (`#2343`).
- **History integrity**: There's a clear desire for reliable history replay, with fixes for orphan tool_calls (`#2383`) and malformed tool call arguments (`#2196`, `#2334`).

## Developer Pain Points

- **Windows subprocess headaches**: Console window pops (`#2197`), log file corruption (`#2354`), and non-UTF-8 filename crashes (`#1893`) make Windows a persistent second-class citizen despite active fixes.
- **Yolo mode inconsistency**: Approval prompts in yolo mode (`#2448`) undermine the trust model for automated pipelines.
- **Infinite loops in agent**: Long-standing bug `#640` (file reading loop) on Arch remains open for 5 months — likely obscure to reproduce but critical for affected users.
- **Tool-call serialization fragility**: Malformed JSON in tool call arguments (`#2196`) and orphan `tool_calls` after crashes (`#2383`) cause conversation corruption that is hard to recover from.
- **Session undo/fork mapping**: `/undo` and fork operations break when not every turn produces a user message (`#2386`), confusing users who rely on these commands for iterative development.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-11

## Today's Highlights

OpenCode **v1.17.3** ships hot on the heels of v1.17.2 with a critical desktop crash fix, while the community continues to rally around **vim motions** (165 👍) and **paste-to-attach-image** (36 comments). Several infrastructure PRs — ranging from snapshot performance for repos like Chromium to comprehensive cache config systems — are gaining momentum, signalling a focus on scaling and developer UX.

## Releases

**v1.17.3** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.3)
- **Critical fix**: resolves a desktop crash introduced in v1.17.2.

**v1.17.2** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.2)
- **Core bugfixes**: expired remote config auth now triggers re-login instead of silent failure; subagents can use their own configured permissions again.
- **Desktop bugfixes**: Linux launcher and icon identity restored so pinned apps correctly launch OpenCode.

**v1.17.1** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.1)
- **Improvement**: references can now include usage descriptions, appear in new docs, and be hidden from `@` autocomplete.
- **Bugfix**: deprecated `reference` config keys continue to load under the newer `references` key; MCP prompt/resource requests fixed.

**v1.17.0** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.0)
- **Performance**: new `fff`-backed file search tool for faster searches across large projects.
- **Networking**: `X-Session-Id` headers added for proxy sticky-routing support.
- **Models**: Cohere North model support; `reasoning` added as an interleaved field option.

## Hot Issues (Top 10)

1. **[#1764 — Vim motions in input box](https://github.com/anomalyco/opencode/issues/1764)**  
   *165 👍, 32 comments*  
   The highest-reacted open feature request. Developers want vi keybindings in the prompt textarea, as seen in Claude Code.

2. **[#906 — Paste to attach image](https://github.com/anomalyco/opencode/issues/906)**  
   *22 👍, 36 comments*  
   Users want clipboard-paste image attachment (not just drag-and-drop), especially for workflows with Excalidraw and other drawing tools.

3. **[#14273 — Zen free models show "Free usage exceeded" despite having balance](https://github.com/anomalyco/opencode/issues/14273)**  
   *1 👍, 27 comments*  
   A confusing billing error with Kimi K2.5 and MiniMax2.5 free tiers — the system falsely claims zero credits left even when the user has a positive Zen balance.

4. **[#450 — Support reasoning_effort parameter in UI](https://github.com/anomalyco/opencode/issues/450)**  
   *26 👍, 12 comments*  
   Multiple models (OpenAI, Gemini, DeepSeek) support reasoning effort adjustments, but OpenCode lacks a native UI control.

5. **[#6330 — Generic UI Intent Channel for cross-client plugin-driven UX](https://github.com/anomalyco/opencode/issues/6330)**  
   *8 👍, 17 comments*  
   Proposes a new server-client event type so plugins can emit UI intents (notifications, modals) across TUI, desktop, and web clients.

6. **[#25038 — Long-running shell commands hang despite successful completion](https://github.com/anomalyco/opencode/issues/25038)**  
   *6 👍, 11 comments*  
   Gradle builds and other lengthy shell commands often hang even after `BUILD SUCCESSFUL` — a persistent workflow blocker.

7. **[#26602 — Desktop hits 5-minute headers timeout with slow local providers](https://github.com/anomalyco/opencode/issues/26602)**  
   *0 👍, 8 comments*  
   Hard-coded 5-minute timeout on headers cannot be overridden by provider config, breaking local LLM setups.

8. **[#24610 — DeepSeek V4 needs a "disable thinking" button](https://github.com/anomalyco/opencode/issues/24610)**  
   *5 👍, 4 comments*  
   Thinking/reasoning mode is forced on for DeepSeek V4, but many tasks (translation, simple Q&A) don't need it.

9. **[#31747 — fff scan times out when starting from a home directory containing OneDrive](https://github.com/anomalyco/opencode/issues/31747)**  
   *0 👍, 4 comments*  
   Regression in v1.17.0+ — new `fff`-backed search times out on cloud-synced file provider trees (OneDrive, Dropbox).

10. **[#31797 — Session hangs in very large repos (Chromium) due to snapshot git add --all](https://github.com/anomalyco/opencode/issues/31797)**  
    *0 👍, 1 comment*  
    Brand new bug: `git add --all` into an empty snapshot repo on a 500k-file checkout causes an indefinite hang.

## Key PR Progress (Top 10)

1. **[#31798 — fix(snapshot): reuse source git objects to avoid re-hashing huge repos](https://github.com/anomalyco/opencode/pull/31798)**  
   Submitted today to close #31797. Skips re-hashing by reusing objects from the source git repo — critical for Chromium-scale projects.

2. **[#4604 — feat(formatter): restrict formatting to changed range only](https://github.com/anomalyco/opencode/pull/4604)**  
   Open for 7 months. When using `clang-format`, only format the lines that actually changed — prevents noise in diffs.

3. **[#5422 — feat(provider): provider-specific cache configuration system](https://github.com/anomalyco/opencode/pull/5422)**  
   A/B tested with Claude Opus 4.5. This PR adds per-provider caching configs that can significantly reduce token usage.

4. **[#7302 — feat: in-browser tools using Playwright](https://github.com/anomalyco/opencode/pull/7302)**  
   Flag-gated (`OPENCODE_ENABLE_BROWSER=true`). Brings browser automation akin to Claude in Chrome or Cursor 2.0 — a major capability expansion.

5. **[#4865 — feat: subagents sidebar with clickable navigation](https://github.com/anomalyco/opencode/pull/4865)**  
   Subagents now appear in the sidebar; click to navigate, `<leader>+Up` to return to parent. Still open after 6 months.

6. **[#6233 — feat(lsp): add restartServer operation](https://github.com/anomalyco/opencode/pull/6233)**  
   Solves a long-standing pain: after adding new dependencies, LSP servers (pyright, rust-analyzer) can now be restarted without restarting OpenCode.

7. **[#7763 — fix: add persistent cost to prevent under-reporting spent value](https://github.com/anomalyco/opencode/pull/7763)**  
   Sessions beyond 100 messages previously under-reported cost since it was calculated from the last 100 messages only.

8. **[#9871 — feat: add /reload slash command](https://github.com/anomalyco/opencode/pull/9871)**  
   Hot-reload `opencode.jsonc`, plugins, and MCP servers without restarting the TUI — waits for the LLM to finish its current turn.

9. **[#8963 — feat: directory override env vars for portable mode](https://github.com/anomalyco/opencode/pull/8963)**  
   Adds `OPENCODE_DATA_DIR`, `OPENCODE_CACHE_DIR`, `OPENCODE_LOG_DIR`, and `OPENCODE_APPNAME` — enabling full profile isolation and portable installs.

10. **[#11377 — feat(agent): model tier selection with variant support for subagents](https://github.com/anomalyco/opencode/pull/11377)**  
    Lets subagents dynamically select models by task complexity, eliminating the need for duplicate agents (`explore-quick` vs `explore-standard`).

## Feature Request Trends

- **Editor-like input UX**: Vim motions (#1764), paste-to-attach images (#906), and better text selection in the terminal (#7134) are the most requested quality-of-life improvements.
- **Reasoning/thinking control**: Multiple issues ask for toggles to disable thinking mode on DeepSeek V4 (#24610, #27555) and for exposing `reasoning_effort` in the UI (#450).
- **Plugin/extensibility**: A generic UI intent channel (#6330) and hot-reloading agents (#31788) point to a demand for richer plugin-driven UX without restarting the app.
- **Session and agent management**: Per-session model selection (#31750, #11377), subagent sidebar navigation (#4865, #14043), and a `/goal` command for autonomous task completion (#31762) reflect a desire for more structured multi-agent workflows.

## Developer Pain Points

- **Timeout and hang issues**: Long-running shell commands (#25038), hard-coded 5-minute headers timeout (#26602), and snapshot hangs on large repos (#31797) are recurring blockers for CI/CD and local development.
- **Silent error swallowing**: V1 tools use `Effect.orDie` which converts errors to defects, hiding failure messages from the AI entirely (#31772). This makes debugging agent behavior extremely difficult.
- **Unicode normalization on macOS**: Edit tools fail silently when comparing NFC (AI output) vs NFD (macOS filesystem) encoded characters like accented letters (#31786).
- **Account/deletion friction**: Users report being unable to delete Zen accounts (#18016), leading to continued billing with no support contact.
- **Destructive command safety gap**: V1 shell tools lack protection against `rm -rf /` and similar commands — the V2 bash tool already has this, but V1 isn't guarded (#31774).
- **Stale-content race conditions**: `apply_patch` can overwrite external file changes because it reads files at verification time but writes at application time without re-checking (#31776).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest
**Date:** 2026-06-11
**Project:** badlogic/pi-mono

---

## Today's Highlights

A massive wave of bug fixes and provider integrations landed in the last 24 hours, with 30+ issues closed and 12 PRs merged. The community saw rapid resolution of Anthropic streaming finalization bugs (#5592), CJK TUI rendering fixes (#5585), and the addition of a new Palantir Foundry provider (#5609). However, the MiniMax-M3 model continues to generate friction with cache_control and thinking-mode issues.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#5514] Project Trust Feature Feedback** (25 comments, 13 👍)
   - *Why it matters:* The new trust-gating feature is generating strong negative sentiment. Users find the per-folder trust dialog annoying, especially across multiple machines.
   - *Community:* Marked as `enhancement` but closed; user frustration is palpable. Likely needs UX redesign.

2. **[#4180] Links not clickable anymore** (13 comments)
   - *Why it matters:* A regression in the TUI where hyperlinks no longer respond to clicks. Blocks developer workflows relying on inline URLs.
   - *Community:* Closed due to "bigrefactor" — users will need to test if fix holds.

3. **[#3715] `local-llm` streams terminate at 5 min** (10 comments, 4 👍)
   - *Why it matters:* Hardcoded undici `bodyTimeout` kills long-running tool calls against local LLMs. The `retry.provider.timeoutMs` setting cannot override this cap.
   - *Community:* Closed as `inprogress` — a painful limitation for local inference users.

4. **[#4160] Extensions don't work with Bun** (9 comments)
   - *Why it matters:* Pure Bun environments cannot install extensions because the system falls back to requiring `npm`. A blocker for the growing Bun ecosystem.
   - *Community:* Closed due to "bigrefactor" — may be fixed in newer architecture.

5. **[#5291] Sessions hang on "Working" with Anthropic subscription** (5 comments, 1 👍)
   - *Why it matters:* Intermittent session freezes affecting Anthropic Enterprise users. Disrupts productivity and trust in the tool.
   - *Community:* Closed; likely related to streaming changes in recent PRs.

6. **[#5605] MiniMax-M3: cache_control ignored on Anthropic endpoint** (2 comments)
   - *Why it matters:* Full input billing ($0.60/Mtok) instead of cache-read price ($0.12/Mtok) — a 5x cost penalty for users of this model.
   - *Community:* Closed; fix likely in provider routing.

7. **[#5611] GitLab Duo Anthropic streams hit ~90s cutoff** (3 comments)
   - *Why it matters:* Retry classifier triggers unnecessary retries on legitimate streaming shutdowns, wasting tokens and time.
   - *Community:* Closed — intermittent issue with Opus 4.8 extended thinking.

8. **[#5536] Split-turn compaction sends parallel requests causing 429** (2 comments)
   - *Why it matters:* Local llama.cpp backends with single-slot concurrency get rate-limited by Pi's compaction strategy. Blocks local development.
   - *Community:* Still open — needs smarter serialization logic.

9. **[#5604] WorkflowEditor crash: TypeError on non-string values** (1 comment)
   - *Why it matters:* Hard crash that terminates `pi-coding-agent` process when autocomplete encounters non-string suggestion values.
   - *Community:* Closed — quick fix needed for stability.

10. **[#5598] Android Termux multiline paste auto-submits** (1 comment)
    - *Why it matters:* Mobile developer workflow broken — pasting code into TUI auto-submits mid-paste.
    - *Community:* Closed; likely a terminal detection fix.

---

## Key PR Progress

1. **[#5609] feat: Add Palantir Foundry LLM proxy and OAuth provider** (CLOSED)
   - Adds `palantir.ts` provider supporting Anthropic, Google, xAI, OpenAI models through Foundry AIP proxy with OAuth and reasoning variants.
   - *Impact:* Unlocks Palantir enterprise customers.

2. **[#5600] fix: Honor Codex SSE header timeout setting** (OPEN)
   - Hardcoded 10s SSE timeout now respects user-configured `timeoutMs`/`httpIdleTimeoutMs`.
   - *Impact:* Fixes flaky connections to Codex endpoint.

3. **[#5594] Fix Anthropic stream finalization on message_stop** (CLOSED)
   - Treats `message_stop` as logical end; cancels body reader to release transport early.
   - *Impact:* Resolves #5592 — faster stream cleanup.

4. **[#5509] feat: Add Amazon Bedrock Mantle OpenAI Responses provider** (OPEN)
   - New provider for Bedrock Mantle's OpenAI Responses API, supporting GPT 5.5 and 5.4 models.
   - *Impact:* Unlocks latest GPT models on AWS.

5. **[#5587] feat: Add experimental first-time setup flow** (CLOSED)
   - `PI_EXPERIMENTAL=1` shows setup dialog with theme detection, dark/light preview, and analytics opt-in.
   - *Impact:* Smoother onboarding.

6. **[#5583] fix: Preserve clickable subscription login URLs** (CLOSED)
   - Prevents URL breaking due to default left-padding in TUI.
   - *Impact:* Login flow no longer broken for long URLs.

7. **[#5561] feat: Link AWS data retention docs in Bedrock validation errors** (CLOSED)
   - Clear error messaging for Claude Fable 5 data retention requirement.
   - *Impact:* Reduces user confusion with AWS Bedrock.

8. **[#5585] fix: Wrap CJK text at character boundaries in editor** (CLOSED)
   - Fixes #5582 — correct word-wrapping for Chinese/Japanese/Korean text.
   - *Impact:* Critical for East Asian language users.

9. **[#5562] fix: Separate list items with blank lines in loose lists** (CLOSED)
   - Proper CommonMark loose list rendering with blank lines between items.
   - *Impact:* Markdown fidelity improvement.

10. **[#5560] fix: Parse `:thinking` suffix from custom model IDs** (CLOSED)
    - Properly handles `:thinking` suffix in fallback path for custom models.
    - *Impact:* Fixes #5552 — custom model ID parsing.

---

## Feature Request Trends

- **Persona System (#5577):** Users increasingly want Pi to serve non-coding roles (security, QA, video editing, research). Request for configurable agent persona override.
- **Multi-Select UI (#5025):** Demand for a `multi-select-list` component for extension developers to handle array inputs (e.g., model selection).
- **OAuth Customization (#5372):** Callers want control over OAuth callback page rendering for branded or custom flows.
- **Extension Events (#5608):** Developers want lifecycle hooks for command execution events in extensions.
- **RPC Queue Control (#5606):** Need to expose `clearQueue()` in RPC mode for programmatic session management.
- **Global Max Thinking (#5610):** Framework-level setting to cap thinking budget across all providers.

---

## Developer Pain Points

1. **Streaming Reliability:** Multiple issues (Anthropic finalization #5592, GitLab Duo cutoff #5611, local-llm timeout #3715) highlight persistent streaming fragility across providers.

2. **Local LLM Compatibility:** Hardcoded timeouts (#3715) and parallel compaction causing 429s (#5536) create friction for developers running local models.

3. **Provider Cost Traps:** MiniMax-M3 cache_control ignored (#5605) and incorrect cache write pricing (#5603) demonstrate billing accuracy issues that can surprise users with unexpected costs.

4. **TUI Crashes:** Three hard-crash bugs in 24 hours (#5604, #5599, #5597) suggest stability regressions in the rendering layer.

5. **Runtime Ecosystem:** Bun incompatibility (#4160) and non-self-updating installs (#5607) show gaps in cross-platform support.

6. **Mobile/Limited Terminals:** Android Termux paste behavior (#5598) and CJK rendering (#5585) highlight need for broader terminal emulator support.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-11

## Today’s Highlights
Volatility is high: the community surfaced a severe terminal interaction bug where mouse wheel events leak raw escape sequences (`64;50;15M`) into the input box, alongside a critical `env` security disclosure that allows arbitrary command execution via the read-only allowlist. On the positive side, two major PRs landed to stabilize memory compaction and rewind persistence, while the fork-subagent feature was merged as always-on.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 most noteworthy)

1. **#4942** [`[OPEN]` bug(cli): VP mode scroll conflicts with Composer input](https://github.com/QwenLM/qwen-code/issues/4942)  
   *4 comments.* In Virtualized History mode, keyboard/mouse scrolling is completely blocked when the Composer is active—a core UX regression. Community reactions show frustration, as this breaks the standard “scroll while reading AI response” workflow.

2. **#4974** [`[OPEN]` bug(cli): SGR mouse wheel sequences leak as typed text](https://github.com/QwenLM/qwen-code/issues/4974)  
   *2 comments.* Wheel events (`\x1b[<64;50;15M`) are double-consumed: correctly parsed by Ink but also fed to readline, which treats `<` as a final byte and types the raw sequence into the input. A severe interactive-mode bug.

3. **#4930** [`[CLOSED]` security: `env` in read-only allowlist enables arbitrary command execution](https://github.com/QwenLM/qwen-code/issues/4930)  
   *1 comment.* The `env` command is listed in `READ_ONLY_ROOT_COMMANDS` but can be abused to spawn subprocesses. This was closed quickly after triage—a high-priority fix is needed.

4. **#4891** [`[OPEN]` Terminal resize during streaming leaves fragmented content](https://github.com/QwenLM/qwen-code/issues/4891)  
   *3 comments.* Resizing the terminal mid-generation produces scrollback with alternating narrow/wide segments and broken tool-call borders (`────`). A graphics-layer issue that degrades perceived quality.

5. **#4877** [`[OPEN]` OpenWork can’t distinguish same model from different providers](https://github.com/QwenLM/qwen-code/issues/4877)  
   *3 comments.* When two providers (e.g., OpenAI vs. local) serve models with identical IDs, the model-switching UI sees them as one entry. User confusion about which provider is active.

6. **#4976** [`[OPEN]` Auto-generated memory interferes with CLI workflow](https://github.com/QwenLM/qwen-code/issues/4976)  
   *2 comments.* The reporter documents a 4-step “detour” where auto-memory interfered with a batch read task. Community reaction is mixed; some defend memory extraction as helpful.

7. **#4966** [`[OPEN]` SchemaValidator missing numeric string coercion causes MCP tool failures](https://github.com/QwenLM/qwen-code/issues/4966)  
   *2 comments.* LLMs frequently emit `"depth": "3"` (string) instead of `3` (integer). Strict MCP servers reject these. A clear pain point for anyone using Playwright or similar MCP tools.

8. **#4941** [`[OPEN]` Add QWEN.md length warning that scales with model context window](https://github.com/QwenLM/qwen-code/issues/4941)  
   *2 comments.* Context files stay fixed-size even when the model changes to a smaller context window. Users want a startup warning that flags oversized QWEN.md/AGENTS.md.

9. **#4882** [`[OPEN]` terminalSequence field on hook](https://github.com/QwenLM/qwen-code/issues/4882)  
   *3 comments.* Request to match Claude Code’s `terminalSequence` hook field so hooks can trigger desktop notifications, window-title updates, etc. Popular among hook-power-users.

10. **#4423** [`[CLOSED]` MaxListenersExceededWarning: 1596 abort listeners](https://github.com/QwenLM/qwen-code/issues/4423)  
    *2 comments.* The AbortSignal listener leak (exceeding 1500 listeners) has persisted for weeks. Closed status suggests a fix is in progress, but the issue highlights systemic resource-management fragility.

---

## Key PR Progress (10 important PRs)

1. **#4963** [`[OPEN]` fix: enable fork subagents by default](https://github.com/QwenLM/qwen-code/pull/4963)  
   Promotes the fork-subagent from env-gated to always-on. Non-interactive sessions retain the general-purpose path; approval mode defaults to `default` for safe auto-edit.

2. **#4911** [`[OPEN]` fix(cli): route down-arrow straight to the live agent panel](https://github.com/QwenLM/qwen-code/pull/4911)  
   Reorders TUI keyboard focus so Down from an empty input reaches a running sub-agent in one press instead of two. Improves multi-agent navigation.

3. **#4972** [`[CLOSED]` feat(web-shell): make /settings mouse-reachable via a status-bar gear icon](https://github.com/QwenLM/qwen-code/pull/4972)  
   Adds a clickable gear icon in the status bar that toggles the `/settings` panel without requiring a command. Merged.

4. **#4977** [`[OPEN]` feat(web-shell): collapse thinking output to a 5-line window](https://github.com/QwenLM/qwen-code/pull/4977)  
   Collapses thinking/scratchpad output to 5 lines with tail-mode streaming and a ▼/▲ toggle. Covers both `think` tags and planning output.

5. **#4897** [`[OPEN]` feat(core): persist file history snapshots for cross-session /rewind](https://github.com/QwenLM/qwen-code/pull/4897)  
   Persists `FileHistorySnapshot` to JSONL so `/rewind` works across session resumes. Previously purely in-memory.

6. **#4975** [`[OPEN]` fix(web-shell): merge adjacent tool calls into one tool_group](https://github.com/QwenLM/qwen-code/pull/4975)  
   Matches native CLI behavior: consecutive tool calls with no visible text between them are grouped into a single card instead of one per call.

7. **#4914** [`[OPEN]` fix(cli,core): harden OOM prevention](https://github.com/QwenLM/qwen-code/pull/4914)  
   Adds regression tests for `compactOldItems` idempotency, explicit GC in critical paths, and debug log defaults. Closes #4815.

8. **#4970** [`[OPEN]` fix(core): stabilize truncated tool retry keys](https://github.com/QwenLM/qwen-code/pull/4970)  
   Validation retry tracking now ignores truncation guidance appended to error messages, preventing spurious retries.

9. **#4844** [`[CLOSED]` feat: add Agent Team experimental feature](https://github.com/QwenLM/qwen-code/pull/4844)  
   Adds parallel sub-agent coordination: leader spawns teammates that communicate via messages and a shared task list. Merged.

10. **#4914** (also listed) — See above; this PR is the most critical stability fix of the batch.

---

## Feature Request Trends

- **Memory/Context control** (5 requests): Users consistently ask for the ability to disable auto-memory recall while keeping extract/dream, scale QWEN.md warnings dynamically, and restrict memory interference during batch operations.
- **Cross-session persistence** (3 requests): `/stats` across sessions (#4597), file snapshots for `/rewind` (#4897), and persistent usage history are top asks.
- **Multi-agent UX polish** (3 requests): Fork-subagent auto-enable (#4956), bubble approval prompts for background agents (#4928), and arrow-key navigation to live panels (#4911).
- **MCP ergonomics** (2 requests): Numeric string coercion (#4966) and `deniedMcpServers` policy (#4940).
- **Git integration** (1 request): Prominent branch-name display in Desktop UI (#4769).

---

## Developer Pain Points

1. **VP mode scrolling deadlock** — Virtualized History (VP) makes scroll input unusable when the Composer is active, a fundamental UX regression (#4942, #4921).
2. **Mouse wheel escape sequence leakage** — Wheel events render as typed text in the input box, confusing users (#4974, #4973).
3. **Auto-memory interference** — Memory extraction interrupts focused CLI workflows, causing wasted round-trips and confusing output (#4976, #4374).
4. **MCP numeric type coercion gaps** — LLMs emit strings `"3"` instead of integers `3`, causing strict server rejections (#4966).
5. **Terminal resize fragmentation** — Mid-generation resize produces broken scrollback with inconsistent column widths and tool-call borders (#4891).
6. **Provider/model-ID collision** — Identical model IDs from different providers appear as one entry in the UI, making selection ambiguous (#4877).
7. **`env` security bypass** — The `env` command’s inclusion in the read-only allowlist opens a vector for arbitrary command execution (#4930).
8. **AbortSignal listener leak** — The persistent `MaxListenersExceededWarning` (1596 listeners) indicates fragile resource cleanup (#4423).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-11

## Today's Highlights

The project fully rebrands to **CodeWhale** with v0.8.57 dropping the legacy `deepseek-tui` npm package entirely. A massive burst of 20+ PRs and 50 active issues signals an intense v0.8.58 preparation cycle focused on multi-provider support, hooks v2, and headless execution hardening. Community contributions are strong, with PRs from multiple external authors addressing migration, voice input, and documentation.

## Releases

- **v0.8.57** — Final rebrand release: `CodeWhale` is now the canonical project, command, npm package, and release-asset name. Legacy `deepseek-tui` npm package is deprecated with no further releases; users must migrate via `docs/REBRAND.md`.
- **v0.8.56** — Community Harvest release: localization improvements, new providers, prefix-cache stability, and bug fixes.

**GitHub:** [Releases](https://github.com/Hmbown/CodeWhale/releases)

## Hot Issues

1. **[#2369] CodeWhale Config Paths Fragmented Across OS and Cygwin** — Configuration resolution differs across Windows, macOS, Linux, and Cygwin, with a silent migration bug that could corrupt user settings. High urgency for cross-platform teams. [Link](https://github.com/Hmbown/CodeWhale/issues/2369)

2. **[#2574] Provider Fallback Chain — Auto-switch on API Failure** — Users want automatic provider switching when quotas exhaust or APIs return 401/429/5xx errors. Currently requires manual `/provider` command. Strong community consensus for this convenience feature. [Link](https://github.com/Hmbown/CodeWhale/issues/2574)

3. **[#3018] Un-hardcode DeepSeek from Auto-router and Subagent Model Selection** — Auto-model routing and sub-agent model selection only work on DeepSeek; other providers like Moonshot, OpenAI, Ollama get hard-coded `deepseek-v4-flash` sent. Blocking the "all models" vision. [Link](https://github.com/Hmbown/CodeWhale/issues/3018)

4. **[#3014] Native Anthropic Messages API Adapter** — Currently Claude is only reachable via OpenAI-compatible proxies; maintainers propose a native Anthropic adapter for `cache_control`, thinking blocks, and tool streaming. [Link](https://github.com/Hmbown/CodeWhale/issues/3014)

5. **[#2989] Agent Stops Early with "Completed" Status (Ollama + Qwen3-Coder)** — Users report premature task termination where the agent halts mid-work but CodeWhale reports success. Critical for local model users relying on self-hosted inference. [Link](https://github.com/Hmbown/CodeWhale/issues/2989)

6. **[#3012] Auto-load Global `~/.codewhale/instructions.md`** — Project-level instructions auto-load, but global cross-project context doesn't. Users want a universal fallback context layer for personal preferences and security policies. [Link](https://github.com/Hmbown/CodeWhale/issues/3012)

7. **[#2889] Sidebar Detail Rows: Structured Work/Tasks/Agents Inspection** — Reopened from a deleted issue; community-owned feature for better inline task/agent inspection without opening separate views. [Link](https://github.com/Hmbown/CodeWhale/issues/2889)

8. **[#2934] Sidebar Sessions Panel with Auto-resume** — Users want persistent session history in the sidebar instead of only `Ctrl+R` picker. Friction point for users managing multiple conversations. [Link](https://github.com/Hmbown/CodeWhale/issues/2934)

9. **[#2893] SiliconFlow Provider Config Error** — Config requires both `[providers.siliconflow]` and `[providers.siliconflow-CN]` populated identically for one to work. Unreasonable duplication causing confusion for China-region users. [Link](https://github.com/Hmbown/CodeWhale/issues/2893)

10. **[#3004] API Key Should Support Script-based Retrieval** — Plaintext API keys in config files are a security concern; users want keyring integration or shell-script-based dynamic retrieval like Claude Code supports. [Link](https://github.com/Hmbown/CodeWhale/issues/3004)

## Key PR Progress

1. **[#3048] Parameterize Model-specific Facts in Prompts** — Removes hardcoded "DeepSeek V4, 1M context" from system prompts; substitutes runtime model capability lookups for context window, pricing, and thinking features. **Blocks #3025.** [Link](https://github.com/Hmbown/CodeWhale/pull/3048)

2. **[#3047] Moonshot/OpenAI/Atlascloud/Ollama Model Capability Fix** — Routes these providers through generic model-based lookup instead of hardcoded values. Fixes broken provider capability reporting. **Closes #3023.** [Link](https://github.com/Hmbown/CodeWhale/pull/3047)

3. **[#3049] Hooks v2: JSON Decision Contract, Glob Matchers, Project-local Hooks** — Hooks can now emit JSON with `allow`/`deny`/`ask` decisions, support glob file matchers, and load from project-local `.codewhale/hooks/`. Model-agnostic policy enforcement. **Closes #3026.** [Link](https://github.com/Hmbown/CodeWhale/pull/3049)

4. **[#3042] Headless exec: `--allowed-tools`, `--disallowed-tools`, `--max-turns`, `--append-system-prompt`** — Adds CI/benchmark-grade controls to `codewhale exec`. Essential for unattended droplet loops and Codex parity. **Refs #3027.** [Link](https://github.com/Hmbown/CodeWhale/pull/3042)

5. **[#3050] Reasoning-effort Wiring for Atlascloud, Moonshot, Ollama** — Previously silent no-ops; now properly sends `thinking` blocks on the wire. Partial fix for #3024. [Link](https://github.com/Hmbown/CodeWhale/pull/3050)

6. **[#3051] Voice Input via `/voice` Slash Command** — Community PR adding speech-to-text using the active provider's existing chat completions API. Inspired by MiMo Code's voice UX. [Link](https://github.com/Hmbown/CodeWhale/pull/3051)

7. **[#3045] Un-hardcode DeepSeek from Subagent Model Validation** — Accepts any provider's model IDs for sub-agent role models; removes arbitrary rejection of non-DeepSeek IDs. **Partial #3018.** [Link](https://github.com/Hmbown/CodeWhale/pull/3045)

8. **[#3036] Hide Internal IDs from Normal UI** — Replaces raw UUIDs, hex agent IDs, and sentinels with stable user-facing labels. Full IDs remain in hover/detail text. [Link](https://github.com/Hmbown/CodeWhale/pull/3036)

9. **[#3040] Clickable Sidebar Rows** — Mouse-click dispatch for Tasks/Agents panels. Clicking a task dispatches `/task show` or `/task cancel`; clicking an agent dispatches sub-agent commands. [Link](https://github.com/Hmbown/CodeWhale/pull/3040)

10. **[#3013] Detect Legacy Binary and Print Migration Instructions** — Community PR that detects `deepseek`/`deepseek-tui` binaries and prints clear migration steps instead of cryptic errors. [Link](https://github.com/Hmbown/CodeWhale/pull/3013)

## Feature Request Trends

- **Multi-provider maturity** — Auto-fallback chains (#2574), model-specific capability lookups (#3025), and non-DeepSeek subagent selection (#3018) are the dominant theme. Users want CodeWhale to be genuinely provider-agnostic.
- **Headless/CI automation** — `--allowed-tools`, `--max-turns`, autonomous loop infrastructure, and Telegram remote workbench indicate strong demand for scripted, unattended operation.
- **Rich TUI interactivity** — Clickable rows, hyperlink support, session sidebar, voice input, and compact rendering show users want desktop-grade UX in the terminal.
- **Security and secrets management** — Script-based API key retrieval (#3004) and hooks v2 with JSON decision contracts reflect growing production deployment concerns.
- **Local model support** — Ollama + Qwen issues (#2989) and SiliconFlow configuration (#2893) highlight the importance of smooth local/Chinese-region model integration.

## Developer Pain Points

1. **Rebrand migration friction** — Config paths still reference `deepseek`/`Application Support/deepseek` (#2664); legacy binary updates fail silently (#2960). Community PRs (#3013) are filling gaps, but the migration UX remains bumpy.
2. **Provider config inconsistencies** — SiliconFlow requires duplicate provider entries (#2893); Moonshot reasoning content is absent (#3046); OpenAI Codex bypasses retry stacks (#3019). Each provider has unique quirks.
3. **Sub-agent reliability** — 120s API timeout renders `agent_open` unusable (#1806); early termination with false "completed" status (#2989). Agents are powerful but brittle under real workloads.
4. **Session continuity** — Sleep/wake kills active turns (#2990); session history browsing requires modal UI (#2934). Users lose work when their machine goes to sleep.
5. **Transparency deficits** — Internal IDs shown in UI instead of labels (#3030); low-information rows lack clickability (#2018); compact transcript suppresses useful detail (#3031). Users want more actionable information at a glance.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*