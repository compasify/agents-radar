# AI CLI Tools Community Digest 2026-03-30

> Generated: 2026-03-30 00:57 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Platform Analysis Report — 2026-03-30

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing intensifying competition with six major players actively vying for market position. March 2026 reveals a maturation phase where foundational capabilities (MCP support, subagent orchestration, TUI polish) are now table stakes, and differentiation is shifting toward **cost transparency**, **cross-platform reliability**, and **enterprise-grade session management**. Notably, all major tools are grappling with **token accounting accuracy** and **quota enforcement bugs**—suggesting the entire category is hitting scaling limits in billing infrastructure. Community-driven plugin ecosystems are emerging as key moats, with Claude Code leading in extensibility while OpenAI Codex and Gemini CLI prioritize first-party reliability.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Key Activity Signal |
|------|:----------:|:---------:|----------------|---------------------|
| **Claude Code** | 10+ tracked | 10+ open | v2.1.87 shipped | Critical quota bugs dominating discourse; plugin ecosystem expansion |
| **OpenAI Codex** | 8+ surfaced | 8 new open | No release | Telemetry architecture work; token burn investigation ongoing |
| **Gemini CLI** | 10 tracked | 10 open | No release | SDD infrastructure maturation; voice mode debut |
| **GitHub Copilot CLI** | 10 new | 4 updated | No release | Stability crisis across platforms; minimal feature work |
| **Kimi Code CLI** | 6 new | 4 updated | No release | Competitive parity requests; skills system stabilization |
| **OpenCode** | 10+ tracked | 10 open | **v1.3.6 shipped** | Token accounting fixes; TUI hardening |

**Observation:** OpenCode is the only tool with a release today, suggesting more disciplined shipping cadence. Claude Code and Copilot CLI show highest issue velocity around **production reliability crises**.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|-------------|-------|--------------------------|
| **Cost/Token Transparency** | Claude Code, OpenAI Codex, OpenCode | Real-time usage dashboards (Claude #29579, Codex #14593, OpenCode #12338); accurate quota accounting; sub-agent budget controls |
| **Granular Permission Controls** | Claude Code, Kimi Code CLI, OpenCode | Per-tool approval rules (Kimi #1631, Claude "30+ related issues"); mid-session mode switching (OpenCode #2656) |
| **Cross-Platform Stability** | Copilot CLI, Gemini CLI, Claude Code | Windows crash fixes (Copilot #2387, Gemini #24081); WSL2 ARM64 support (Copilot #2379); FreeBSD support (Claude #30640) |
| **Session Portability & Recovery** | Claude Code, Gemini CLI, Copilot CLI | UUID-based session survival (Claude #39148); persistent tracker storage (Gemini #23724); corrupted session repair (Copilot #2012) |
| **MCP Ecosystem Maturity** | Claude Code, OpenAI Codex, OpenCode | Desktop OAuth reliability (Claude #5826); dynamic API key handling (Codex #16171); subagent MCP permissions (OpenCode #16491) |
| **Context Window Management** | All tools | Automatic summarization (Claude #19018); compression controls (OpenCode #19687); AST-aware navigation (Gemini #22745) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code CLI | OpenCode |
|-----------|-------------|--------------|------------|-------------|---------------|----------|
| **Core Philosophy** | Extensible agent platform | Autonomous subagent orchestration | Spec-Driven Development (SDD) | GitHub-native integration | Competitive feature parity | Open-source flexibility |
| **Target User** | Power users, plugin developers | Enterprise teams, cost-conscious | SDD practitioners, Google Cloud | GitHub-centric developers | Claude/Codex migrants | Self-hosters, IDE refugees |
| **Technical Approach** | Hook-based plugin system; Cowork Dispatch | Watchdog-mediated subagents; telemetry-first | DAG-based task tracking; unified context | Shell-native; CAPI backend | Skills directory; tracing visualizer | Effect-based architecture; TUI-first |
| **Key Differentiator** | Richest plugin ecosystem (8 new plugins/24h) | Most sophisticated subagent cost controls | Only tool with real-time voice mode | Deepest GitHub/Git integration | Fastest competitive feature porting | Only fully open-source; local LLM support |
| **Critical Weakness** | Billing system reliability crisis | Opaque token burn; no Intel Mac support | SDD complexity barrier; plan mode trust | Multi-platform stability collapse | Permission model too coarse | Resource exhaustion bugs; context limit confusion |

---

## 5. Community Momentum & Maturity

### **Highest Momentum**
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Claude Code** | 117-comment quota bug threads; 8 plugins/day submission rate; active PreTool community workarounds | **Volatile high energy** — engaged but frustrated; infrastructure strain |
| **Gemini CLI** | Maintainer-only SDD PRs landing; voice mode shipping; EPIC-marked AST investigation | **Google-backed steady progress** — internal roadmap discipline, less community co-creation |
| **OpenCode** | Consistent releases (v1.3.6); rapid bug closure; mobile/voice feature expansion | **Disciplined execution** — smaller but responsive core team |

### **Stagnation Risk**
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Copilot CLI** | 10 critical stability issues in 24h with minimal PR response; only 4 PRs updated | **Maintenance mode symptoms** — Microsoft resource reallocation suspected |
| **Kimi Code CLI** | Zero engagement on competitive parity requests; skills directory confusion | **Early stage fragility** — building feature list without community validation |

### **Most Mature Community Infrastructure**
1. **Claude Code** — Self-sustaining plugin ecosystem; community maintaining workarounds for official gaps
2. **OpenAI Codex** — Strong telemetry and observability investment; enterprise feedback loops
3. **OpenCode** — Transparent issue triage; rapid patch turnaround

---

## 6. Trend Signals

| Industry Trend | Evidence | Developer Value |
|--------------|----------|---------------|
| **Billing infrastructure crisis** | Quota bugs across Claude Code (March 23 onset), Codex token burn (#14593), OpenCode double-counting | Demand for **client-side usage verification** and **provider-agnostic cost tracking** |
| **Agent orchestration complexity ceiling** | Subagent permission failures (OpenCode #16491), approval mode conflicts (Gemini #23582), "stop-and-wait" behavior (Codex #14414) | Opportunity for **standardized agent communication protocols** beyond MCP |
| **Voice/multimodal CLI emergence** | Gemini voice mode (#24174), OpenCode mobile voice (#19545) | Early signal of **post-keyboard AI interaction**; accessibility expansion |
| **Spec-Driven Development institutionalization** | Gemini SDD maturation (#23724, #22822); Claude Code AGENTS.md standardization (#29835) | Shift from **imperative prompting** to **declarative task specifications** |
| **Platform parity as enterprise gate** | Intel Mac exclusion (Codex #10410), Windows crash epidemics (Copilot #2387), ARM64 WSL fragility (Copilot #2379) | **Cross-platform Rust/Go CLI frameworks** becoming competitive advantage |
| **Context window management as core competency** | AST-aware tools (Gemini #22745), automatic distillation (Gemini #24157), compression controls (OpenCode #19687) | **Semantic code understanding** replacing line-based heuristics for token efficiency |

---

**Strategic Implication:** Developers selecting AI CLI tools in Q2 2026 should prioritize **billing transparency guarantees** and **cross-platform stability commitments** over feature velocity, as the entire category navigates infrastructure scaling challenges. OpenCode and Gemini CLI present lowest operational risk for production workflows; Claude Code offers highest extensibility ceiling for teams willing to absorb quota system volatility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-30 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🔵 OPEN | Quality control for AI-generated documents: prevents orphans, widows, and numbering misalignment in typography | Addresses universal pain point affecting every Claude document output; zero upvotes suggest early-stage visibility rather than merit |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🔵 OPEN | Meta-skills evaluating Claude Skills across 5 quality dimensions and security posture | Long-running PR (Nov 2025) establishing standards for skill validation; foundational infrastructure play |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🔵 OPEN | Revised guidance for actionable, single-conversation frontend design instructions | Focus on token efficiency and executable clarity—reflects community maturation on prompt engineering |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🔵 OPEN | OpenDocument text creation, template filling, and ODT→HTML parsing | Enterprise document workflow integration; targets LibreOffice/Collabora ecosystems |
| 5 | **System Documentation Suite** | [#95](https://github.com/anthropics/skills/pull/95) | 🔵 OPEN | Evidence management system docs: architecture, flowcharts, lifecycle workflows | Niche but deep; suggests Skills expanding beyond coding into compliance/documentation domains |
| 6 | **Contributing Guidelines** | [#509](https://github.com/anthropics/skills/pull/509) | 🔵 OPEN | `CONTRIBUTING.md` to address 25% community health score | Infrastructure PR addressing maintainer bandwidth; companion PR [#512](https://github.com/anthropics/skills/pull/512) adds PR template |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🔵 OPEN | Tabular foundation model integration for SAP business analytics | Enterprise ERP connector; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **Roadmap Pilot** | [#536](https://github.com/anthropics/skills/pull/536) | 🔵 OPEN | Incremental codebase cleanup autopilot: executes one task per session, persists progress | Solves context overflow on large refactors; pairs with `init-roadmap` for project scanning |

---

## 2. Community Demand Trends

From high-engagement Issues, the community's most-anticipated Skill directions:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Agent Memory & Persistence** | 3+ related PRs/Issues | [#154](https://github.com/anthropics/skills/pull/154) `shodh-memory`, [#522](https://github.com/anthropics/skills/pull/522) `plan-task` |
| **Enterprise Platform Integration** | SAP, ServiceNow, Salesforce demand | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow skill (broad platform coverage) |
| **Codebase Maintenance Automation** | Technical debt, inventory, roadmap tools | [#147](https://github.com/anthropics/skills/pull/147) `codebase-inventory-audit`, [#536](https://github.com/anthropics/skills/pull/536) `roadmap-pilot` |
| **Quality Assurance & Governance** | Meta-skills for validation, security, compliance | [#83](https://github.com/anthropics/skills/pull/83) analyzers, [#412](https://github.com/anthropics/skills/issues/412) agent-governance proposal |
| **MCP Interoperability** | Standardization demands | [#16](https://github.com/anthropics/skills/issues/16) "Expose Skills as MCPs" |
| **Multi-modal Output** | Image/video generation integration | [#335](https://github.com/anthropics/skills/pull/335) Masonry AI skill |

---

## 3. High-Potential Pending Skills

Active, well-specified PRs likely to merge soon:

| Skill | PR | Why It Lands |
|:---|:---|:---|
| **Plan-Task Persistence** | [#522](https://github.com/anthropics/skills/pull/522) | Solves core Claude limitation (session state loss); clean Markdown-based implementation; Git-tracked mode for teams |
| **x402 BSV Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Novel economic layer for AI services; natural language payment interface; compact scope |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Comprehensive enterprise coverage (ITSM, ITOM, SecOps, FSM, SPM); fills major B2B gap |
| **Masonry Image/Video** | [#335](https://github.com/anthropics/skills/pull/335) | Multi-modal generation via CLI; Imagen 3.0 + Veo 3.1 integration; addresses creative workflow demand |
| **8-Skill Foundation Series** | [#288](https://github.com/anthropics/skills/pull/288) | Tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling—systematic content creation suite |

---

## 4. Skills Ecosystem Insight

> **The community's concentrated demand is for *stateful, enterprise-grade automation*—Skills that persist context across sessions, integrate with legacy systems (SAP, ServiceNow), and govern AI behavior at scale—reflecting a shift from experimental coding assistants to production infrastructure.**

---

*Report methodology: PRs ranked by comment volume and recency; Issues analyzed for thematic clustering. All links verified against github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-03-30

## Today's Highlights

Anthropic shipped **v2.1.87** with a targeted fix for Cowork Dispatch message delivery failures. Meanwhile, the community is grappling with widespread **rate limiting and quota exhaustion issues** affecting Max plan subscribers—multiple high-engagement issues suggest systemic problems with usage tracking since late March. The plugin ecosystem continues expanding rapidly with 8 new community plugins submitted in the last 24 hours.

---

## Releases

| Version | Changes |
|---------|---------|
| [v2.1.87](https://github.com/anthropics/claude-code/releases/tag/v2.1.87) | Fixed messages in Cowork Dispatch not getting delivered |

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#29579](https://github.com/anthropics/claude-code/issues/29579) — API rate limit errors despite 16% usage on Max plan | **Critical billing/entitlement bug**: Windows + VS Code users hitting hard rate limits with minimal reported usage. Suggests metering system malfunction. | 117 comments, 71 👍 — extensive repro attempts, no official response |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) — Max plan session limits exhausted abnormally fast since March 23 | **Pattern confirmation**: CLI users reporting 5-hour quotas depleting in minutes. Timeline correlates with #29579. | 105 comments, 97 👍 — marked "invalid" by bot, community disputes |
| [#5826](https://github.com/anthropics/claude-code/issues/5826) — Claude Desktop doesn't connect to custom MCPs (OAuth 2.1 or SSE) | **Enterprise blocker**: Custom MCP servers work in Claude Code CLI but fail in Desktop—auth flow breaks silently. | 59 comments, 60 👍 — oncall tagged, no resolution since August 2025 |
| [#40178](https://github.com/anthropics/claude-code/issues/40178) — Dispatch messages marked read but responses never appear | **UX regression**: Core messaging feature broken; users losing work context. | 38 comments, 26 👍 — **closed** as fixed in v2.1.87 |
| [#30640](https://github.com/anthropics/claude-code/issues/30640) — Native installer doesn't work on FreeBSD | **Platform support gap**: BSD users forced to use Linux compatibility layers. Bot auto-closed without discussion. | 34 comments, 58 👍 — reopened by author |
| [#34255](https://github.com/anthropics/claude-code/issues/34255) — Remote Control silent disconnection without recovery | **Reliability issue**: macOS/iOS remote sessions drop and never reconnect—breaks mobile workflows. | 20 comments, 48 👍 |
| [#30519](https://github.com/anthropics/claude-code/issues/30519) — Permissions matching fundamentally broken | **Meta-issue**: 30+ related issues, community building PreTool workarounds due to zero staff engagement. | 15 comments, 58 👍 — call for official acknowledgment |
| [#38838](https://github.com/anthropics/claude-code/issues/38838) — Excessive token consumption in API requests | **Cost regression**: 5x Max plan users seeing 5-hour windows hit in "a few prompts" since March 23. | 17 comments, 4 👍 — overlaps with quota issues |
| [#19018](https://github.com/anthropics/claude-code/issues/19018) — Context limit reached requiring /compact or /clear | **Core UX friction**: Frequent context window exhaustion disrupts long sessions. | 16 comments, 19 👍 |
| [#40677](https://github.com/anthropics/claude-code/issues/40677) — Shift+Enter regression in v2.1.85-2.1.87 | **Input regression**: Multi-line input broken on Windows since v2.1.84. | 4 comments — newly filed, high impact |

---

## Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#39043](https://github.com/anthropics/claude-code/pull/39043) — Remove "retro-futuristic" recommendation from Frontend Design Skill | Removes dated aesthetic guidance from system prompts | Community-driven prompt engineering cleanup |
| [#36433](https://github.com/anthropics/claude-code/pull/36433) — Agent Wallet plugin for AI agent payments | Non-custodial crypto wallet via `agent-wallet-sdk` | Enables autonomous agent economics |
| [#40572](https://github.com/anthropics/claude-code/pull/40572) — Global Hookify rules support | `~/.claude/` directory for cross-project rules | Major DX improvement for multi-repo workflows |
| [#35864](https://github.com/anthropics/claude-code/pull/35864) — Worktree Guardian plugin | Detects orphaned agent worktrees with unsaved work | Prevents data loss from aggressive cleanup |
| [#26230](https://github.com/anthropics/claude-code/pull/26230) — Path validation hooks | Blocks relative paths from agent tool calls | Security sandboxing enhancement |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) — Preserve-session plugin | UUID-based session history survives directory moves | Solves session fragmentation on refactoring |
| [#40594](https://github.com/anthropics/claude-code/pull/40594) — Test Writer plugin | 5-phase automated test generation workflow | Coverage gap analysis + iterative fixing |
| [#40208](https://github.com/anthropics/claude-code/pull/40208) — Fix chmod +x on plugin hook scripts | Resolves `SessionStart:resume hook error` | Reliability fix for plugin system |
| [#29835](https://github.com/anthropics/claude-code/pull/29835) — AGENTS.md fallback plugin | Loads `AGENTS.md` when `CLAUDE.md` absent | Addresses #1 most-upvoted feature request |
| [#40456](https://github.com/anthropics/claude-code/pull/40456) — Null guard in Edit tool render | Fixes session resume crash with `replace_all: true` | Stability fix for conversation restoration |

---

## Feature Request Trends

1. **AGENTS.md Standardization** — Strong demand for `AGENTS.md` as first-class alternative to `CLAUDE.md` ([#29835](https://github.com/anthropics/claude-code/pull/29835) implements this)
2. **MCP Server Management** — Requests for `disabled` field in MCP config ([#39662](https://github.com/anthropics/claude-code/issues/39662)), better Desktop OAuth support
3. **Session Portability** — Multiple plugins addressing session survival across directory moves, worktree changes, and path renames
4. **Global Configuration** — Hookify rules, settings, and plugins that apply across all projects rather than per-repo
5. **Billing Transparency** — Real-time usage dashboards, clearer quota accounting, rate limit headers

---

## Developer Pain Points

| Category | Issue | Frequency |
|----------|-------|-----------|
| **Quota/Billing Accuracy** | Usage metrics don't match actual consumption; rate limits hit at 0-16% reported usage | **Critical** — 4+ top issues, March 23+ onset |
| **Permissions System** | 30+ open issues, no staff engagement; community maintaining PreTool workarounds | Chronic since mid-2025 |
| **MCP Auth Reliability** | OAuth 2.1 and SSE connections fail silently in Desktop; CLI works | Recurring enterprise blocker |
| **Context Window Management** | Frequent `/compact` or `/clear` interruptions; no automatic summarization | Ongoing friction |
| **Plugin Hook Execution** | Execute permissions lost on install; hook errors on session resume | Recently patched ([#40208](https://github.com/anthropics/claude-code/pull/40208)) |
| **Input Regression** | Shift+Enter multi-line broken in latest releases | New in v2.1.85+ |
| **Cross-Platform Parity** | FreeBSD unsupported; Windows-specific auth and TUI bugs | Persistent gap |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-30

---

## 1. Today's Highlights

No new releases shipped in the last 24h, but development velocity remains high with **8 new PRs opened** focused on watchdog reliability, telemetry, and TUI hardening. The community continues to surface critical pain points around **token burn rate**, **Intel Mac support**, and **sub-agent cost opacity**—with the top issue now at **319 comments** and growing.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** | Business-tier users reporting rapid token consumption without clear visibility into where spend occurs. Affects cost predictability for production workflows. | 🔥 **319 comments, 105 👍** — highest engagement in repo; users sharing detailed logs and seeking mitigation strategies |
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel (x86_64) support** | Desktop app currently Apple Silicon-only, excluding significant legacy Mac install base in enterprise environments. | 149 comments, 215 👍 — sustained pressure for Universal build; workarounds discussed |
| [#9224](https://github.com/openai/codex/issues/9224) | **Codex Remote Control** | Request to control desktop CLI from mobile ChatGPT app—bridges gap between mobile and desktop workflows. | 33 comments, 224 👍 — high vote-to-comment ratio indicates broad latent demand |
| [#11981](https://github.com/openai/codex/issues/11981) | **100% CPU with single agent** | Performance regression where idle agents consume full CPU; impacts battery and thermal management on macOS. | 23 comments — reproducible reports, seeking profiling data |
| [#10438](https://github.com/openai/codex/issues/10438) | **GPT-5.2 xhigh quality degradation** (closed) | Quality regression where high-reasoning mode appeared to route to standard Codex variant; now resolved. | 18 comments, 14 👍 — closure suggests fix deployed, but trust erosion noted |
| [#15162](https://github.com/openai/codex/issues/15162) | **"Open in Popup Window" regression** | Recent update broke multi-popup workflow—now replaces instead of spawning new windows. | 11 comments — immediate post-update breakage, users rolling back |
| [#16189](https://github.com/openai/codex/issues/16189) | **CapsLock/Shift broken in VS Code terminal** | Input handling regression in embedded terminal; breaks basic text entry. | 9 comments — fresh report, blocking daily use |
| [#14414](https://github.com/openai/codex/issues/14414) | **GPT-5.4 (high) stops mid-task** (closed) | Model declares intent then halts, requiring manual intervention—workflow friction. | 9 comments, 3 👍 — closed but pattern of "stop-and-wait" behavior persists in other reports |
| [#14805](https://github.com/openai/codex/issues/14805) | **Model outputs same response twice** | Duplicated output wastes tokens and breaks parsing workflows. | 8 comments, 3 👍 — confirmed across Ghostty and other terminals |
| [#15648](https://github.com/openai/codex/issues/15648) | **GPT-5.3-Codex-Spark unsupported for ChatGPT accounts** | Pro users hitting hard model-access boundary despite subscription tier. | 8 comments — confusion over SKU availability and entitlement mapping |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#16207](https://github.com/openai/codex/pull/16207) | **Remove spawn_mode from agent roles** | Cleans up legacy role-level spawn configuration; simplifies agent lifecycle management | 🟢 Open |
| [#15690](https://github.com/openai/codex/pull/15690) | **Telemetry: thread events** | New analytics architecture with thread/start, fork, resume events—foundational for observability | 🟢 Open |
| [#16197](https://github.com/openai/codex/pull/16197) | **Ordered subagent model fallback** | Graceful degradation when quota exhausted; per-candidate reasoning effort control | 🟢 Open |
| [#16199](https://github.com/openai/codex/pull/16199) | **Reset watchdog timer on owner input** | UX improvement: 10s default watchdog with activity-based reset prevents premature termination | 🟢 Open |
| [#16198](https://github.com/openai/codex/pull/16198) | **Render watchdog countdown in TUI** | Visual feedback on subagent auto-close timing | 🟢 Open |
| [#16201](https://github.com/openai/codex/pull/16201) | **Fix stale /status rate limits** | Corrects frozen weekly limit display in long-running sessions | 🟢 Open |
| [#16202](https://github.com/openai/codex/pull/16202) | **Fix paste-driven bottom pane completion teardown** | TUI state consistency fix for paste workflows | 🟢 Open |
| [#16193](https://github.com/openai/codex/pull/16193) | **codex-tools: extract discovery tool specs** | Continues modularization—moving tool specs out of core runtime | 🟢 Open |
| [#16120](https://github.com/openai/codex/pull/16120) | **ci: Windows argument-comment-lint via native Bazel** | Build system hardening; reduces CI latency on Windows path | 🟢 Open |
| [#16204](https://github.com/openai/codex/pull/16204) | **Normalize Windows path in MCP snapshot test** (closed) | Test reliability fix for Windows CI | 🔴 Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Cost transparency & control** | #14593, #12488, #11496 | Users need granular spend visibility, sub-agent budgets, and rate-limit backoff policies |
| **Cross-device continuity** | #9224, #12593 | Mobile↔desktop workflow bridging; session sync across devices |
| **Platform parity** | #10410 (Intel Mac), #13743 (Windows encoding), #13148 (Windows EOL) | Enterprise adoption blocked by non-Apple Silicon and Windows-specific bugs |
| **MCP ergonomics** | #16171, #4484 | Dynamic API key handling and reduced permission friction for tool use |
| **TUI/Terminal reliability** | #5259, #16189, #12645, #14805 | Input handling, resize behavior, and rendering stability need hardening |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Unpredictable token burn / billing** | 🔴 High | 🔴 Critical | #14593, #12488, #8675 |
| **macOS Intel exclusion** | 🟡 Medium | 🟡 High | #10410 |
| **Input/keyboard handling regressions** | 🔴 High | 🟡 High | #16189, #12645, #13743 |
| **Model "stop-and-wait" behavior** | 🟡 Medium | 🟡 Medium | #14414, #15445, #14363 |
| **CPU/thermal spikes post-task** | 🟡 Medium | 🟡 Medium | #11981, #16185 |
| **MCP permission fatigue** | 🟡 Medium | 🟢 Low | #16171 |

**Emerging theme:** The gap between "agentic promise" and "production reliability" is widening—users want Codex to act autonomously but with **predictable costs, visible boundaries, and graceful degradation** when limits hit.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-30

---

## 1. Today's Highlights

The Gemini CLI team is heavily focused on **Spec-Driven Development (SDD)** infrastructure, with multiple PRs landing for DAG-based task tracking, memory routing, and unified context management. A major **real-time voice mode** feature debuted today, offering both cloud and local Whisper transcription. Meanwhile, Windows and Linux stability fixes address long-standing build and sandbox issues.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could dramatically reduce token waste and misaligned reads by using language-aware bounds instead of line-based heuristics. Foundation for smarter codebase navigation. | 4 comments; marked EPIC, maintainer-only |
| [#23858](https://github.com/google-gemini/gemini-cli/issues/23858) | **Files edited while in plan mode** | Critical UX bug: model modifies files despite claiming plan mode constraints. Breaks trust in approval workflows. | 3 comments; needs-info, active investigation |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | **Support passing prompt to `/plan`** | Eliminates friction of two-step planning; aligns with single-command ergonomics users expect. | 2 comments, 2 👍; enterprise/security tagged |
| [#22822](https://github.com/google-gemini/gemini-cli/issues/22822) | **Refine `/spec setup` for existing `/conductor` migration** | Migration path needed for early adopters; signals SDD is maturing past experimental phase. | 2 comments; possible duplicate |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | **Persistent project-level tracker storage** | Moves task state from ephemeral sessions to committed `.gemini/tracker/` — essential for team collaboration and CI integration. | 1 comment; DAG architecture enabler |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | **Subagents awareness of active approval modes** | Policy engine blocks calls, but subagent instructions conflict; causes confusing retry loops. Core agent coordination fix. | 1 comment, 1 👍 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random spots** | Cleanup friction when shell execution is restricted; workspace hygiene issue affecting commit workflows. | 1 comment; P2 priority |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Defines clear semantics for user preferences (`~/.gemini/`) vs. codebase conventions (`.gemini/`). Foundation for persistent personalization. | 1 comment, 1 👍 |
| [#23803](https://github.com/google-gemini/gemini-cli/issues/23803) | **Prevent surfacing raw tracker UUIDs in output** | UX polish: UUIDs like `005f0b` feel robotic; hiding implementation details improves perceived intelligence. | 0 comments; SDD polish |
| [#21633](https://github.com/google-gemini/gemini-cli/issues/21633) | **Antigravity: `run_command` hangs on quick Python scripts** | External agent ecosystem issue; signals need for better timeout handling in tool execution. | 0 comments, 1 👍; needs triage |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#24174](https://github.com/google-gemini/gemini-cli/pull/24174) | **Real-time voice mode (cloud + local Whisper)** | Dictation directly in terminal; dual-backend architecture (Gemini Live API + `whisper.cpp`). Major accessibility and speed win. | Open, updated today |
| [#24081](https://github.com/google-gemini/gemini-cli/pull/24081) | **Stabilize sandbox/build for Windows and Linux** | Fixes nested method syntax errors, duplicate code, WSL type mismatches. Unblocks cross-platform contributors. | Open, need-issue |
| [#24170](https://github.com/google-gemini/gemini-cli/pull/24170) | **Fix command injection in `run_shell_command`** | Blocks `$(...)`, backticks, `<()` substitution. Security-critical; community contribution. | Open, P1, help wanted |
| [#24157](https://github.com/google-gemini/gemini-cli/pull/24157) | **Unified context management and tool distillation** | Multi-tier context window management; consolidates history/distillation settings. Addresses long-horizon workflow stability. | Open, maintainer-only |
| [#24167](https://github.com/google-gemini/gemini-cli/pull/24167) | **Terminal-integrated performance/memory investigation** | 4-stage heap/CPU pipeline as composable skills. Closes observability gap (#23365). | Open, maintainer-only |
| [#24171](https://github.com/google-gemini/gemini-cli/pull/24171) | **Handle clipboardy failure when sysctl unavailable** | Defensive fix for macOS Intel + Node v25 startup crashes. Edge case hardening. | Open |
| [#24123](https://github.com/google-gemini/gemini-cli/pull/24123) | **Skip replan when plan unchanged** | Hash-based comparison prevents unnecessary agent cycles when editor exits with no modifications. UX efficiency. | Open |
| [#20974](https://github.com/google-gemini/gemini-cli/pull/20974) | **Compact tool output** | High-signal rendering mode reducing token noise. Follow-up to layout improvements (#23286). | Open, P0/P2, maintainer-only |
| [#24040](https://github.com/google-gemini/gemini-cli/pull/24040) | **Fix CLI autocomplete for subcommands** | Corrects slash completion logic for checkpoint menu items. Polish for power users. | Open |
| [#23942](https://github.com/google-gemini/gemini-cli/pull/23942) | **Resolve GCP project ID from gcloud for trace exporter** | Fixes telemetry misrouting when `useCliAuth` enabled. Enterprise reliability. | Open, P2 |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Spec-Driven Development (SDD) maturation** | #23724, #23802-#23804, #23320, #22822 | High — DAG-based tracking replacing Markdown checklists, persistent storage, migration paths |
| **Context window & memory management** | #24157, #22819, #22809, #23556 | High — unified configuration, global/project memory routing, compression quality |
| **Voice and multimodal input** | #24174 | Emerging — first-class dictation, local + cloud flexibility |
| **Enterprise/team workflows** | #23925, #22855, #23582, #23942 | Steady — tracker defaults, approval mode coordination, telemetry fixes |
| **AST-aware tooling** | #22745, #22746 | Early — investigation phase for precise code navigation |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Frequency |
|------------|-------------|-----------|
| **Plan mode trust erosion** | Model edits files despite constraints (#23858); subagents ignore approval modes (#23582) | High — core workflow reliability |
| **Workspace pollution** | Temp scripts scattered when shell restricted (#23571); manual cleanup burden | Moderate — hygiene friction |
| **Cross-platform instability** | Windows/Linux build failures, sandbox issues (#24081); clipboardy crashes (#24171) | Moderate — contributor barrier |
| **Opaque task tracking** | Raw UUIDs in chat (#23803); delayed task updates (#23129); verbosity (#23924) | Moderate — UX polish backlog |
| **Context loss in long sessions** | Overcompression artifacts (#23556); need for distillation (#24157) | Steady — scaling limitation |
| **Security hardening gaps** | Command injection vectors (#24170); need for AST-aware safe execution | Emerging — proactive fixes |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-03-30. Maintainer-only items indicate internal Google team priorities.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-30

---

## 1. Today's Highlights

A surge of **10 new issues** landed in the last 24 hours, revealing critical stability problems across platforms: Windows crashes with `ACCESS_VIOLATION`, WSL2 ARM64 `setRawMode EIO` failures, and macOS Terminal.app compatibility regressions. Meanwhile, the community contributed **2 merged PRs** improving shell support (Fish shell PATH config) and install script reliability. No new release was published.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI constantly getting 400 errors for invalid request body | **High-impact reliability issue** — 95% failure rate on code review prompts suggests API contract drift or regression in request serialization. 11 comments indicate active investigation. | 👍 5, active debugging |
| [#2387](https://github.com/github/copilot-cli/issues/2387) | Intermittent `ACCESS_VIOLATION` (0xC0000005) crash on Windows | **Critical stability** — Segfaults after 4–100+ minutes of use make the CLI unsuitable for long-running Windows sessions. No workaround identified. | Fresh report, needs triage |
| [#2379](https://github.com/github/copilot-cli/issues/2379) | Frequent crashes on WSL2 ARM64: `setRawMode EIO` | **Platform-specific blocker** — 21 crashes in 8 days on ARM64 WSL2; stdin handling appears fragile on this architecture. | Fresh report, high frequency |
| [#2389](https://github.com/github/copilot-cli/issues/2389) | Headless server leaks kqueue file descriptors | **Resource exhaustion in production** — Fleet/multi-agent workflows hit FD limits; bash tool becomes unusable. Affects automation/CI use cases. | Fresh report, infrastructure impact |
| [#2012](https://github.com/github/copilot-cli/issues/2012) | Session file corrupted: raw U+2028/U+2029 in `events.jsonl` breaks `/resume` | **Data integrity bug** — Unicode line separators valid in JSON spec but break JS `JSON.parse()`, making sessions unrecoverable. | 👍 1, root cause identified |
| [#2384](https://github.com/github/copilot-cli/issues/2384) | Terminal.app mouse selection broken with alt-screen; `--no-alt-screen` removed in 1.0.12 | **UX regression** — Removal of workaround flag breaks standard macOS terminal workflow. | Fresh report, accessibility concern |
| [#2386](https://github.com/github/copilot-cli/issues/2386) | Cannot see all models at `/models`; only GPT-4.1 available, then `CAPIError 400` | **Model availability/entitlement issue** — Suggests client-side model list or CAPI routing problem. | Fresh report, blocking usage |
| [#2133](https://github.com/github/copilot-cli/issues/2133) | Custom agent frontmatter `model` field rejects array syntax | **Cross-tool incompatibility** — VS Code Copilot Chat supports array syntax; CLI does not. Fragmenting agent ecosystem. | Needs standardization |
| [#2388](https://github.com/github/copilot-cli/issues/2388) | Output truncation when running `!aspire run` — Dashboard URL missing | **Shell integration reliability** — Inconsistent output capture breaks external tool integration. | Fresh report, .NET Aspire users affected |
| [#2385](https://github.com/github/copilot-cli/issues/2385) | `CAPIError`: `<duration>` not parsed correctly in rate limit UI | **Polish/edge case** — Raw template variable exposed to users instead of formatted duration. | Fresh report, quick fix likely |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#2381](https://github.com/github/copilot-cli/pull/2381) | install: add fish shell support for PATH configuration | ✅ **Merged** | Fixes silent failure for Fish users by using proper `fish_add_path` instead of POSIX `export` syntax. |
| [#2380](https://github.com/github/copilot-cli/pull/2380) | install: use `EXIT` trap for temp directory cleanup | ✅ **Merged** | Hardens install script against leaked temp directories on curl/wget/tar failures via `trap EXIT`. |
| [#2316](https://github.com/github/copilot-cli/pull/2316) | Dev | 🔄 **Open** | Adds GitHub CLI devcontainer feature; minimal description, needs review. |
| [#678](https://github.com/github/copilot-cli/pull/678) | Add initial devcontainer configuration | ❌ **Closed** | Superseded by #2316 or abandoned; no merge. |

*(Only 4 PRs updated in 24h; remaining 6 slots omitted due to insufficient activity)*

---

## 5. Feature Request Trends

| Theme | Evidence | Direction |
|-------|----------|-----------|
| **Session resilience & recovery** | [#2227](https://github.com/github/copilot-cli/issues/2227) auto-share on exit, [#2012](https://github.com/github/copilot-cli/issues/2012) corrupted session files | Users want durable, recoverable sessions with automatic checkpointing |
| **Agent discoverability & transparency** | [#2382](https://github.com/github/copilot-cli/issues/2382) show agent info, [#2383](https://github.com/github/copilot-cli/issues/2383) subagents need model info, [#1445](https://github.com/github/copilot-cli/issues/1445) paginated `/skills list` | Richer metadata, better navigation, and observability for multi-agent workflows |
| **Cross-tool compatibility** | [#2133](https://github.com/github/copilot-cli/issues/2133) array syntax for `model` field | Alignment with VS Code Copilot Chat conventions to enable portable agents |
| **Terminal integration polish** | [#2384](https://github.com/github/copilot-cli/issues/2384) alt-screen control, [#2388](https://github.com/github/copilot-cli/issues/2388) output truncation | Predictable shell interaction, especially for external command execution |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Platform-specific crashes** (Windows segfaults, WSL2 ARM64 `EIO`, macOS FD leaks) | 4 issues in 24h | **Severe** — Makes CLI unreliable for daily driver use on non-x64 Linux |
| **Silent or cryptic failures** (400 errors, model unavailability, rate limit formatting) | 3 issues | **High** — Blocks productivity with unactionable error messages |
| **Session fragility** (corruption, no auto-resume, missing `/share`) | 2 issues + historical pattern | **Moderate-High** — Context loss in long-running workflows |
| **Terminal/TTY compatibility** (alt-screen removal, output truncation) | 2 issues | **Moderate** — Degrades UX in standard terminal emulators |
| **Plugin/agent ecosystem friction** (discovery, cross-tool syntax) | 2 issues | **Moderate** — Slows adoption of extensibility features |

---

*Digest compiled from github.com/github/copilot-cli — 2026-03-30*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-30

## 1. Today's Highlights

No new releases today, but the community is actively pushing for feature parity with competing AI coding tools. Three new enhancement requests target Claude Code's granular permissions, OpenAI Codex's UI patterns, and multi-agent collaboration modes—signaling users are benchmarking Kimi Code against established alternatives. Meanwhile, two PRs landed to stabilize the skills directory system after the 1.27.0 behavior restoration.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1634](https://github.com/MoonshotAI/kimi-cli/issues/1634) | Codex feature port request | Direct competitive comparison—user wants specific Codex UI convenience feature | Fresh request, no engagement yet |
| [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633) | Agent Swarm / Teammates mode vs. subagent | Architectural distinction—current subagent model lacks inter-agent communication | Zero engagement, but frames core limitation |
| [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632) | Hide thinking content option | UX polish for thinking models—users want reasoning quality without visual noise | Unanswered feature request |
| [#1631](https://github.com/MoonshotAI/kimi-cli/issues/1631) | Granular auto-approval rules (Claude Code parity) | Safety/UX critical—YOLO mode is binary, users want per-tool controls | Zero engagement, high-impact request |
| [#1629](https://github.com/MoonshotAI/kimi-cli/issues/1629) | JetBrains IDE ACP initialization failure | IDE integration breakage—"very basic error" suggests protocol mismatch | Unconfirmed, needs reproduction |
| [#1627](https://github.com/MoonshotAI/kimi-cli/issues/1627) | Linux input parsing failure **[CLOSED]** | Platform-specific bug in 1.27.0 on CachyOS kernel | Rapid closure suggests fix or resolution |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1630](https://github.com/MoonshotAI/kimi-cli/pull/1630) | Tracing visualizer enhancements | Adds `/vis` slash command, `--network/--host` CLI flags, richer event display for agent debugging | Open, needs review |
| [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) | Shell mode context injection | Shell output now feeds back as `<system-reminder>`; persistent `cd` with real shell resolution | Open, updated today |
| [#1628](https://github.com/MoonshotAI/kimi-cli/pull/1628) | Rename `extra_skills_dirs` → `skills_dirs` | Clarifies override semantics after #1605 restored pre-1.27.0 behavior | **Merged** |
| [#1626](https://github.com/MoonshotAI/kimi-cli/pull/1626) | Fix `--skills-dir` help text | Documents repeatable flag and override behavior | **Merged** |

---

## 5. Feature Request Trends

**Competitive Parity Sprint:** Users are systematically requesting features from Claude Code (granular approvals, [#1631](https://github.com/MoonshotAI/kimi-cli/issues/1631)) and OpenAI Codex (unspecified UI convenience, [#1634](https://github.com/MoonshotAI/kimi-cli/issues/1634)). This suggests Kimi Code is being evaluated as a drop-in replacement.

**Multi-Agent Architecture:** [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633) explicitly rejects the current subagent model in favor of true Agent Swarm patterns with peer-to-peer interaction—indicating power users are hitting orchestration limits.

**Thinking Model UX:** [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632) highlights a gap in output control: reasoning visibility should be configurable, not mandatory.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Binary permission model** | [#1631](https://github.com/MoonshotAI/kimi-cli/issues/1631) — YOLO mode lacks Claude Code's granularity | High — affects trust in automation |
| **IDE integration fragility** | [#1629](https://github.com/MoonshotAI/kimi-cli/issues/1629) — JetBrains ACP session failures | Medium — blocks enterprise workflows |
| **Skills directory confusion** | [#1628](https://github.com/MoonshotAI/kimi-cli/pull/1628), [#1626](https://github.com/MoonshotAI/kimi-cli/pull/1626) — naming/docs lagging behavior changes | Low (addressed) — but indicates communication gaps |
| **Platform-specific input bugs** | [#1627](https://github.com/MoonshotAI/kimi-cli/issues/1627) — Linux/CachyOS parsing failure | Medium — niche kernel support |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-30

## Today's Highlights

The v1.3.6 release addresses critical token accounting bugs affecting Anthropic and Amazon Bedrock users, while the TUI variant selector receives a much-needed search fix. Meanwhile, the community is actively debating context window management as Opus 4.6 users hit 200K token limits despite 1M token marketing claims.

---

## Releases

### v1.3.6
- **Core**: Fixed token usage double-counting for Anthropic and Amazon Bedrock providers that inflated session metrics ([#19758](https://github.com/anomalyco/opencode/pull/19758))
- **TUI**: Fixed variant dialog search so typing now properly filters the list of variants ([#19917](https://github.com/anomalyco/opencode/pull/19917))

### v1.3.5
- Fixed plugin hooks for async operations
- Streamlined GPT prompts and resolved file reference annoyances

### v1.3.4
- Added prompt slot feature
- Migrated session processor to effect-based architecture
- Upgraded OpenTUI to v0.1.91

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#988](https://github.com/anomalyco/opencode/issues/988) MCP Remote OAuth Support — CLOSED | Eliminates manual secret management for MCP servers via OAuth 2.1 flows | 79 👍, 36 comments; widely celebrated as security win |
| [#12338](https://github.com/anomalyco/opencode/issues/12338) 1M tokens for Opus 4.6 — OPEN | Users hitting 200K hard limits despite 1M token claims; exposes gap between marketing and implementation | 25 👍, 30 comments; frustrated power users |
| [#2656](https://github.com/anomalyco/opencode/issues/2656) Hotkey switch accept/approve mid-session — OPEN | Workflow friction blocker preventing Cursor refugees from switching; only missing parity feature | 17 👍, 12 comments; daily driver adoption gate |
| [#16499](https://github.com/anomalyco/opencode/issues/16499) GPT-5.4 fast mode (/fast) — OPEN | Model capability gap — competitors already expose this | 53 👍, 8 comments; high-demand model feature |
| [#17982](https://github.com/anomalyco/opencode/issues/17982) Prompt loop continues after `finish=stop` — OPEN | Causes prefill errors on claude-opus-4-6; breaks conversation flow | 2 👍, 7 comments; reliability concern |
| [#16491](https://github.com/anomalyco/opencode/issues/16491) Subagents cannot execute MCP tools — OPEN | Task-spawned subagents see but cannot use MCP tools; breaks agent orchestration | 4 comments; enterprise workflow blocker |
| [#19687](https://github.com/anomalyco/opencode/issues/19687) Infinite automatic context compression — OPEN | Single sentence triggers runaway compression loops; severe UX degradation | 4 comments; critical bug report |
| [#19952](https://github.com/anomalyco/opencode/issues/19952) 190K+ file descriptor exhaustion — OPEN | TypeScript LSP indexing node_modules ignores tsconfig exclusions; system freezes | 2 comments; infrastructure stability issue |
| [#19696](https://github.com/anomalyco/opencode/issues/19696) Variant selector only shows "thinking" — OPEN | Regression from 1.3.3 — cannot disable thinking mode | 8 👍, 2 comments; UX regression |
| [#19679](https://github.com/anomalyco/opencode/issues/19679) 110GB C:\ consumption on "hello" — OPEN | Aggressive indexing/storage behavior on Windows; first-run experience disaster | 2 comments; onboarding blocker |

---

## Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#12633](https://github.com/anomalyco/opencode/pull/12633) Auto-accept mode for permission requests | `shift+tab` toggles autoedit mode; streamlines repetitive approval workflows | Power user productivity |
| [#19954](https://github.com/anomalyco/opencode/pull/19954) Fix TUI session list filtering | Replaces 30-day time filter with `roots: true`; fixes missing sessions issue | Resolves [#16733](https://github.com/anomalyco/opencode/issues/16733) |
| [#16069](https://github.com/anomalyco/opencode/pull/16069) First-class PowerShell support | Native `pwsh`/`powershell` parsing with tree-sitter; prefers PowerShell over Git Bash | Windows developer experience |
| [#19483](https://github.com/anomalyco/opencode/pull/19483) Effectify SessionPrompt service | Migrates to Effect pattern with fiber-based cancellation; architectural modernization | Code quality, maintainability |
| [#19959](https://github.com/anomalyco/opencode/pull/19959) Local server provider with auto model discovery | Auto-discovers from `/v1/models` endpoints; simplifies local LLM setup | Self-hosted workflow |
| [#19953](https://github.com/anomalyco/opencode/pull/19953) Fix TypeScript LSP project config | Ensures `tsserver` uses native project config instead of global fallback | Fixes [#19952](https://github.com/anomalyco/opencode/issues/19952) FD exhaustion |
| [#9365](https://github.com/anomalyco/opencode/pull/9365) Per-session working directories | `Session.directory.get()`/`.set()` enables git worktrees, isolated branches | Plugin extensibility |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) Mobile touch optimization | Touch-friendly UI while preserving desktop experience | Mobile/tablet adoption |
| [#19545](https://github.com/anomalyco/opencode/pull/19545) Mobile voice integration + APN relay | Voice input capability with push notification relay | Mobile-first features |
| [#19963](https://github.com/anomalyco/opencode/pull/19963) Favicon rendering for projects | Shows web app favicons in Desktop sidebar instead of initials | Visual wayfinding |

---

## Feature Request Trends

1. **Context & Memory Management** — Persistent session memory ([#16077](https://github.com/anomalyco/opencode/issues/16077)), cancelable auto-compaction ([#19435](https://github.com/anomalyco/opencode/issues/19435)), and context compression controls dominate requests
2. **Permission & Control Granularity** — Mid-session mode switching ([#2656](https://github.com/anomalyco/opencode/issues/2656)), auto-accept toggles ([#12633](https://github.com/anomalyco/opencode/pull/12633)), and tool-call approval workflows ([#19958](https://github.com/anomalyco/opencode/issues/19958))
3. **Model Capability Parity** — Fast mode exposure ([#16499](https://github.com/anomalyco/opencode/issues/16499)), recent model prioritization ([#19935](https://github.com/anomalyco/opencode/issues/19935))
4. **Visual/UX Polish** — Status indicators without hover ([#12077](https://github.com/anomalyco/opencode/issues/12077)), favicon support ([#19962](https://github.com/anomalyco/opencode/issues/19962)), skill content hiding ([#15805](https://github.com/anomalyco/opencode/issues/15805))

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Token/Context Transparency** | Discrepancy between advertised (1M) and actual (200K) limits; invisible compression triggers | High — multiple issues, 30+ comment threads |
| **Session Discovery & History** | TUI `/sessions` 30-day cutoff vs CLI full list; subagent pollution of session list | Recurring — [#16733](https://github.com/anomalyco/opencode/issues/16733), [#19954](https://github.com/anomalyco/opencode/pull/19954) |
| **Permission Friction** | No mid-session mode switching; repetitive approval interrupts flow | High — [#2656](https://github.com/anomalyco/opencode/issues/2656) blocker for migrations |
| **Resource Exhaustion** | LSP indexing unbounded; 110GB storage on first run; FD leaks | Critical — [#19952](https://github.com/anomalyco/opencode/issues/19952), [#19679](https://github.com/anomalyco/opencode/issues/19679) |
| **Subagent/MCP Orchestration** | Task-spawned subagents lack MCP permissions; breaks multi-agent workflows | Medium — [#16491](https://github.com/anomalyco/opencode/issues/16491) |
| **Path Handling** | Spaces in file paths break `@` tab-completion | Low but sharp — [#19152](https://github.com/anomalyco/opencode/issues/19152) |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*