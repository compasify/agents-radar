# AI CLI Tools Community Digest 2026-07-24

> Generated: 2026-07-24 01:30 UTC | Tools covered: 10

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

# AI CLI Developer Tools — Cross-Tool Comparison Report
**Date:** 2026-07-24

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is undergoing a period of intense maturation, characterized by simultaneous platform expansion and reliability regressions. Seven major tools show active development, with Claude Code, OpenAI Codex, and Kimi Code CLI experiencing the highest issue volumes, while Pi and Qwen Code lead in PR throughput. A common pattern across all tools is the tension between feature velocity and stability—multiple tools shipped critical regressions in billing authentication, session integrity, and platform compatibility this week. The ecosystem is converging on MCP (Model Context Protocol) integration, remote session control, and sub-agent management as core battleground features, while platform-specific pain points (particularly Windows and Wayland) remain unresolved across the board.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable |
|---|---|---|---|---|
| **Claude Code** | ~10 hot issues | 4 PRs | No release (v2.1.218 latest) | 🔴 Fable 5 billing crisis; transcript corruption cluster |
| **OpenAI Codex** | 10 hot issues | 10 PRs | 2 alpha releases (rust-v0.146.x) | 🔴 Windows CPU saturation P0; compaction waste |
| **Gemini CLI** | 10 hot issues | 10 PRs | 1 nightly (v0.52.0-nightly) | Subagent false-success bug; OAuth security fixes |
| **GitHub Copilot CLI** | 10 hot issues | 2 PRs (low quality) | 2 patches (v1.0.74/v1.0.74-4) | Session size limit blocker; MCP fragility |
| **Kimi Code CLI** | 4 hot issues + 15 PRs burst | 15 PRs | No release (v0.29.0 latest) | Plugin crash on Windows; MCP session reuse fixes |
| **OpenCode** | 10 hot issues | 10 PRs | No release (v1.18.4 latest) | Provider auto-discovery (187 👍); billing for blocked outputs |
| **Pi** | 10 hot issues | 21 PRs | No release (v0.81.1 latest) | Wayland clipboard fix merged; constrained sampling foundation |
| **Qwen Code** | 10 hot issues | 10 PRs | 1 nightly (v0.20.1-nightly) | E2E test reliability crisis; GitHub polling adapter |
| **DeepSeek TUI (CodeWhale)** | 8 hot issues | 4 PRs | Release gate (v0.9.1 blocked) | Stop-ship bugs; security audit blocking tag |
| **Grok Build** | No activity | No activity | — | Inactive |

**Key Observations:**
- **Highest issue velocity**: OpenAI Codex, Claude Code, and Qwen Code each generated 10+ significant issues
- **Highest PR throughput**: Pi (21 PRs), Kimi Code CLI (15 PRs), OpenAI Codex (10 PRs)
- **Release-blocked**: DeepSeek TUI v0.9.1 held by 17 Dependabot alerts; Claude Code has critical unpatched billing bug
- **Inactive**: Grok Build—zero activity signals either low adoption or internal development cycle

---

## 3. Shared Feature Directions

| Category | Requirements | Tools Involved |
|---|---|---|
| **Remote Session Control** | Resume CLI sessions from desktop/mobile; remote-control long-running agent tasks | Claude Code (#29006, 114 👍), Kimi Code CLI (#1282, 16 👍), OpenCode (#33163) |
| **MCP Ecosystem Maturation** | Stable session reuse, tool listing reliability, OAuth token refresh, plugin-working-directory resolution | Kimi Code CLI (PR #2548), GitHub Copilot CLI (#4206, #4211), Qwen Code (#7147), Gemini CLI (PR #28481) |
| **Session Integrity & Transparency** | Compaction telemetry, context health indicators, transcript corruption prevention, quota/reset visibility | OpenAI Codex (#22220, #35032), Claude Code (#80738), Qwen Code (#6806) |
| **Sub-Agent Lifecycle Management** | Kill child processes on termination, false-success detection, tool sandboxing, permission persistence | Gemini CLI (#22323), OpenCode (#38564), DeepSeek TUI (#4042 closed) |
| **Platform Compatibility (Windows)** | UTF-8 encoding, line-endings preservation, WSL integration, keyboard layout support | OpenAI Codex (#4003, #28074), Kimi Code CLI (PR #2547), DeepSeek TUI (#4723), Pi (#7021) |
| **Local/Open-Source Provider Support** | Auto-discovery of OpenAI-compatible endpoints, zero-config local model detection | OpenCode (#6231, 187 👍), Pi (#6306), Qwen Code (image gen #7607) |
| **Billing & Usage Fairness** | No charges for blocked/cached outputs, transparent credit accounting, session-level cost tracking | Claude Code (#79337, #79341), OpenCode (#35475), OpenAI Codex (#14116) |
| **AST-Aware Code Navigation** | Method-bound context, symbol-aware file reads, reduced token waste | Gemini CLI (#22745, #22746), Kimi Code CLI (PR #2551) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary Model** | Anthropic Fable/Opus | OpenAI GPT-5 | Gemini 3.x | GPT-4o/Copilot | Kimi/Moonshot | Multi-provider | Multi-provider | Qwen models | Multi-provider |
| **Target User** | Power devs, Max subscribers | Enterprise/Windows devs | Google ecosystem | GitHub/VS Code users | Chinese devs, quant finance | Local-first devs | Self-hosters, Linux | Chinese/Asian devs | Multi-provider TUI enthusiasts |
| **Technical Stack** | TypeScript, TUI | Rust (migrating) | TypeScript, Node | TypeScript, Node | Python, Pydantic | Go, Electron | Rust (modular) | Node/TypeScript | Rust (modular) |
| **Key Differentiator** | Agentic sub-agent architecture | Aggressive alpha releases | Security-first OAuth | VS Code integration depth | Plugin ecosystem | Provider auto-discovery | Constrained sampling | Channel integrations | Sandbox tool enforcement |
| **Current Weakness** | Billing entitlement bugs | Windows CPU saturation | Subagent false positives | Session size limits (5 MB) | Plugin crashes on Windows | Sub-agent process leaks | Wayland clipboard | E2E test flakiness | Release gate security debt |

**Strategic Observations:**

- **Claude Code** is the most feature-rich agentic tool but its billing entitlement failure undermines trust—a critical revenue integrity issue.
- **OpenAI Codex** leads in alpha velocity but Windows performance regressions (CPU saturation, log bloat) create a fragmented user experience.
- **Gemini CLI** differentiates on security infrastructure (OAuth, credential encryption, HTTPS enforcement) and prompt engineering innovation.
- **GitHub Copilot CLI** leverages the strongest IDE integration but its 5 MB session cap is a growing bottleneck as MCP tooling expands.
- **Kimi Code CLI** shows the highest single-day PR burst (15), predominantly from one contributor (lihai00), indicating a maintainer-driven cleanup sprint.
- **Pi** leads in architecture quality (constrained sampling, abortable retries, event-based integrations) but CJK/TUI rendering issues limit its Asian market reach.
- **Qwen Code** is expanding into channel integrations (GitHub polling, Telegram, WeChat) but facing a test-quality crisis that masks real regressions.
- **DeepSeek TUI (CodeWhale)** is in a painful rebranding phase—legacy "DeepSeek" references persist, and a security release gate blocks v0.9.1 delivery.

---

## 5. Community Momentum & Maturity

| Tool | Community Activity | Iteration Velocity | Maturity Signals | Risk Signals |
|---|---|---|---|---|
| **Claude Code** | 🟢 Very High (40+ comments on top issue) | 🟡 Medium (no release today) | Largest feature request (#29006, 114 👍); structured issue triage | 🔴 Billing bug is revenue-critical; transcript corruption cluster suggests system prompt regression |
| **OpenAI Codex** | 🟢 High (10 PRs, 10 issues) | 🟢 High (2 alpha releases) | PR volume shows active refactoring; proxy routing, plugin attribution | 🔴 P0 Windows CPU bug; compaction waste; model behavioral drift |
| **Gemini CLI** | 🟡 Medium (active discussion) | 🟢 High (1 nightly, 10 PRs) | Security-focused releases; eval coverage reporting | 🟡 Agent reliability (false success, hangs) is a trust issue |
| **GitHub Copilot CLI** | 🟡 Medium (13 new issues) | 🟡 Medium (2 patches, 2 low-quality PRs) | MCP plugin spec support shipped | 🟡 Session limit (5 MB) is a hard blocker; keyboard interrupt regression |
| **Kimi Code CLI** | 🟡 Medium (15 PR burst) | 🟢 High (single contributor driving fixes) | Fixing Windows/UTF-8/ICU issues methodically | 🟡 Plugin crash blocks Windows adoption; single-contributor risk |
| **OpenCode** | 🟢 High (187 👍 top issue) | 🟡 Medium (10 PRs, no release) | Strong local-provider demand signal; UI customization requests | 🟡 Billing for blocked outputs; sub-agent process leaks |
| **Pi** | 🟡 Medium (21 PRs) | 🟢 High (most PRs this week) | Architecture quality is best-in-class (constrained sampling, abortable retries) | 🟡 CJK rendering unaddressed; release cadence unclear |
| **Qwen Code** | 🟡 Medium (10 issues, 10 PRs) | 🟡 Medium (1 nightly) | Channel ecosystem expanding; GitHub polling adapter | 🔴 E2E test crisis; update breakage on Node 26; MCP timeout blockers |
| **DeepSeek TUI** | 🟡 Low (8 issues, 4 PRs) | 🟡 Low (release-blocked) | Tool sandboxing closed; sanitized Anthropic adapter | 🔴 Release gate blocked; 3 stop-ship bugs; legacy branding bleed |
| **Grok Build** | ⚫ Inactive | ⚫ None | — | — |

**Momentum Rankings:**
1. **OpenAI Codex** — Highest combined PR+release velocity
2. **Pi** — Highest PR count (21) with architectural investment
3. **Kimi Code CLI** — Strong burst fix pattern (15 PRs)
4. **Claude Code** — Highest community engagement despite crisis
5. **Qwen Code** — Steady expansion into new channel integrations

---

## 6. Trend Signals

### 📈 Growing Trends

1. **MCP as the universal plugin protocol**: Every tool is investing in MCP integration—session reuse, OAuth token refresh, tool listing reliability. The ecosystem is standardizing around MCP as the interop layer.

2. **Remote session mobility**: Cross-device session persistence (desktop ↔ mobile) is the top feature request across Claude Code, Kimi Code CLI, and OpenCode. Users expect agent sessions to be device-agnostic.

3. **Local/first-party provider preference**: OpenCode's #1 request (187 👍) for auto-discovery of local models (Ollama, LM Studio) signals a shift toward privacy-first, zero-config local AI development.

4. **Sub-agent accountability**: False-success reporting (Gemini), process leaks (OpenCode), and tool silencing (Claude Code) are driving demand for sub-agent observability and lifecycle guarantees.

5. **Security-first architecture**: Gemini CLI's credential encryption, HTTPS enforcement, and session ID rotation set a new baseline for production-grade CLI security.

### 📉 Concerning Signals

1. **Windows as a second-class platform**: Every tool except OpenAI Codex has unresolved Windows-specific regressions—line endings, CPU saturation, keyboard layouts, clipboard failures. Windows users face a disproportionate bug burden.

2. **Billing integrity erosion**: Claude Code's Fable 5 entitlement failure and OpenCode's billing for blocked outputs undermine user trust in AI tooling economics. This is a structural risk for paid tool adoption.

3. **Compaction/context waste**: OpenAI Codex and Qwen Code both report compaction loops that free minimal space while degrading session coherence. As context windows grow, compaction algorithms are failing to keep pace.

4. **Test infrastructure fragility**: Qwen Code's E2E flakiness crisis (30+ failures in 12 days) and DeepSeek TUI's release-gate security debt suggest testing is not scaling with feature velocity.

5. **Single-contributor dependency**: Kimi Code CLI's 15 PR burst is predominantly from one maintainer (lihai00). This is a bus-factor risk for a tool with growing adoption.

### 🔮 Industry Implications

- **The "agent bill of rights" is forming**: Users expect transparency (compaction telemetry, billing breakdowns), reliability (no false success, no silent tool drops), and portability (remote session control, cross-device persistence).
- **Local AI is not just a niche**: OpenCode's 187 👍 for provider auto-discovery signals that local-first AI tooling is moving from hobbyist to mainstream demand.
- **Security is becoming a differentiator**: As tools handle OAuth tokens, credentials, and API keys, security architecture (Gemini CLI's approach) will become a buying criterion for enterprise users.
- **Platform parity is the next battleground**: The tool that solves Windows/WSL2/Wayland compatibility comprehensively will capture a large underserved user base.

---

*Report generated from community digest summaries dated 2026-07-24. Data reflects issues and PRs active within the last 24 hours unless otherwise noted.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-24 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following pull requests attracted the most discussion and community attention:

### 1.1 `document-typography` (#514) — Typographic Quality Control
**Status:** Open | **Author:** PGTBoos  
**Description:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents—issues affecting every document Claude generates.  
**Discussion Highlights:** Addresses a universal pain point; users rarely request typographic fixes explicitly, making this a "silent value" skill.  
[View PR #514](https://github.com/anthropics/skills/pull/514)

### 1.2 `odt` — OpenDocument Text Creation (#486)
**Status:** Open | **Author:** GitHubNewbie0  
**Description:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, LibreOffice, or ISO-standard document requests.  
**Discussion Highlights:** High demand for open-source document format support; complements existing PDF and DOCX skills.  
[View PR #486](https://github.com/anthropics/skills/pull/486)

### 1.3 `frontend-design` Improvement (#210)
**Status:** Open | **Author:** justinwetch  
**Description:** Revises the frontend-design skill for clarity and actionability—ensuring every instruction is executable in a single conversation.  
**Discussion Highlights:** Focus on making meta-instructions concrete; addresses skill "drift" where vague guidance produces inconsistent results.  
[View PR #210](https://github.com/anthropics/skills/pull/210)

### 1.4 `testing-patterns` (#723)
**Status:** Open | **Author:** 4444J99  
**Description:** Comprehensive testing stack coverage including Testing Trophy philosophy, AAA pattern, React Testing Library, Cypress E2E, and Vitest config.  
**Discussion Highlights:** Broad community interest in automated test generation; covers both frontend and backend testing patterns.  
[View PR #723](https://github.com/anthropics/skills/pull/723)

### 1.5 `pyxel` — Retro Game Development (#525)
**Status:** Open | **Author:** kitao  
**Description:** MCP server integration for the Pyxel retro game engine—covers write → run_and_capture → inspect → iterate workflow.  
**Discussion Highlights:** Niche but passionate audience; Pyxel's creator submitted this directly, signaling ecosystem alignment.  
[View PR #525](https://github.com/anthropics/skills/pull/525)

### 1.6 `self-audit` — Reasoning Quality Gate (#1367)
**Status:** Open | **Author:** YuhaoLin2005  
**Description:** Two-phase audit: mechanical file verification followed by four-dimension reasoning audit in damage-severity priority order.  
**Discussion Highlights:** Novel approach to output quality; sparked follow-up proposal for a three-gate pipeline (Issue #1385).  
[View PR #1367](https://github.com/anthropics/skills/pull/1367)

### 1.7 `color-expert` (#1302)
**Status:** Open | **Author:** meodai  
**Description:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and accessibility.  
**Discussion Highlights:** Comprehensive reference; fills a gap in creative/design skills.  
[View PR #1302](https://github.com/anthropics/skills/pull/1302)

### 1.8 `skill-creator` Fixes (#1298, #1099, #1050, #362, #361, #1323)
**Status:** Multiple open PRs | **Authors:** MartinCajiao, joshuawowk, gstreet-ops, Mr-Neutr0n, Polluelo978  
**Description:** Collective effort to fix `run_eval.py`'s 0% recall bug, Windows subprocess/PATHEXT issues, UTF-8 panics, and YAML parsing failures.  
**Discussion Highlights:** The most active area of community contribution—six separate PRs addressing the same fundamental evaluation pipeline that blocks skill optimization for Windows users and anyone with multi-byte characters.  
[View PR #1298](https://github.com/anthropics/skills/pull/1298) | [#1099](https://github.com/anthropics/skills/pull/1099) | [#1050](https://github.com/anthropics/skills/pull/1050)

---

## 2. Community Demand Trends

From the top issues by comment volume, three clear demand patterns emerge:

### 2.1 Trust & Security Infrastructure (Issue #492 — 43 comments)
The most-discussed issue requests namespace governance: community skills distributed under `anthropic/` create a trust boundary vulnerability where users may grant elevated permissions to skills they believe are official. This reflects growing awareness of supply-chain security in the agent ecosystem.

### 2.2 Organizational Skill Sharing (Issue #228 — 14 comments)
Enterprise users want org-wide skill libraries rather than manual `.skill` file sharing via Slack. The current workflow—download, send, upload—is a bottleneck for team adoption.

### 2.3 Skill Quality & Evaluation Tooling (Issues #556, #1169, #1061 — cumulative 18+ comments)
The `skill-creator` evaluation pipeline is the community's top pain point. `run_eval.py` systematically reports 0% recall on all queries, making the description optimization loop useless. Windows users face three additional compatibility blockers. The community is actively contributing fixes but the root issues remain unresolved.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| PR | Skill | Author | Key Feature | Status |
|:---|:------|:--------|:------------|:-------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | YuhaoLin2005 | Reasoning quality gate with mechanical verification | Open, recent activity |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | meodai | Systematic color naming & space reference | Open, recent updates |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 4444J99 | Full testing stack coverage | Open, active discussion |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | kitao | Retro game development with MCP | Open, author submitting own project |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | PGTBoos | Typographic quality control | Open, universal appeal |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform skill evaluation toolchain**—six PRs and three top issues all trace to `run_eval.py`'s broken recall detection, while the second-largest demand cluster seeks enterprise-grade trust infrastructure for skill distribution and governance.

---

# Claude Code Community Digest
**Date: 2026-07-24**

---

## Today's Highlights

The Claude Code community is experiencing significant turbulence following the rollout of **Fable 5 as a standard Max plan model** on July 20th. Multiple high-traffic issues report that Fable 5 is erroneously demanding usage credits from Max subscribers, silently downgrading sessions to Opus 4.8. Separately, the highly-requested **Remote Control for Claude Desktop** feature (#29006) continues to gain traction with 114 👍, while a series of new bugs today point to potential **system prompt injection and transcript corruption** issues that warrant immediate investigation.

---

## Releases

**No new releases in the last 24 hours.** (Latest stable: v2.1.218)

---

## Hot Issues (Top 10)

### 1. 🔥 [BUG] Fable 5 prompts 'usage credits required' on Max plan
**#79337** — 40 comments, 12 👍
Anthropic's flagship Fable 5 model became a standard Max plan inclusion on July 20, but Claude Code refuses to recognize Max entitlements. Sessions are silently downgraded to Opus 4.8 with the message *"Fable 5 requires usage credits."* The issue persists across restart and re-auth. This is the **most critical live issue** given it impacts paying Max subscribers' access to their promised model.
🔗 [Issue #79337](https://github.com/anthropics/claude-code/issues/79337)

### 2. 🔥 [FEATURE] Enable Remote Control for Claude Code sessions in Claude Desktop App
**#29006** — 35 comments, 114 👍
The top-voted open feature request. Users want to initiate Claude Code sessions from the CLI and then **remote-control them via the Desktop app** (similar to VS Code's Remote SSH). This has been open since February and is clearly the most desired UX improvement.
🔗 [Issue #29006](https://github.com/anthropics/claude-code/issues/29006)

### 3. 🔥 [BUG] Connection closed mid-response — frequent enough to make Claude Code unusable
**#69415** — 33 comments, 65 👍
VS Code + WSL users report API connections dropping mid-stream at a frequency that renders the tool unusable. The issue has been open for over a month with no fix yet. High frustration signal.
🔗 [Issue #69415](https://github.com/anthropics/claude-code/issues/69415)

### 4. [BUG] Conversation rendered/duplicated multiple times in terminal
**#49985** — 8 comments, 22 👍
On Windows TUI (v2.1.112+), conversation messages render in duplicate or triplicate. This has persisted for 3 months, suggesting a sticky rendering bug in the terminal output layer.
🔗 [Issue #49985](https://github.com/anthropics/claude-code/issues/49985)

### 5. [BUG] Fable 5 incorrectly requires usage credits on Max 20x plan
**#79341** — 7 comments, 10 👍
Duplicate/related to #79337 but specific to the **Max 20x** tier. Users report unused weekly allowance still being ignored by the model picker.
🔗 [Issue #79341](https://github.com/anthropics/claude-code/issues/79341)

### 6. [FEATURE] Syntax highlighting in VS Code extension chat panel
**#64968** — 7 comments, 21 👍
Fenced code blocks render as plain monochrome text in the VS Code chat panel, regardless of language tag. This is a re-opening of previously auto-closed requests. Important for developer UX.
🔗 [Issue #64968](https://github.com/anthropics/claude-code/issues/64968)

### 7. [NEW] Chat input has no text selection capability
**#80734** — 0 comments (fresh)
Filed today: `Shift+Arrow`, `Shift+Home/End`, and `Ctrl+Shift+Arrow` all do nothing in the chat input. No text selection at all. This is a **basic UX regression** that affects daily editing workflows.
🔗 [Issue #80734](https://github.com/anthropics/claude-code/issues/80734)

### 8. [NEW] Injected policy text overwrites assistant turns and corrupts transcript
**#80738** — 0 comments (fresh)
A content-policy text block is being **injected into conversations in positions where it should not appear**, including replacing assistant turns entirely. This is a **serious integrity bug** that could corrupt session transcripts and confuse users about what Claude actually said.
🔗 [Issue #80738](https://github.com/anthropics/claude-code/issues/80738)

### 9. [BUG] LSP tool silently stripped from background subagents without error
**#80733** — 0 comments (fresh)
Background subagents (default since v2.1.198) silently lose the LSP tool because it's not in the built-in allowlist. Subagents keep MCP tools but language server support is dropped without any notification.
🔗 [Issue #80733](https://github.com/anthropics/claude-code/issues/80733)

### 10. [BUG] Remote Control connection fails with "Cannot read properties of undefined"
**#80735** — 0 comments (fresh)
The Remote Control feature (recently released) is broken on Windows 11 with v2.1.218. Every connect attempt throws `Cannot read properties of undefined (reading 'session_url')`.
🔗 [Issue #80735](https://github.com/anthropics/claude-code/issues/80735)

---

## Key PR Progress

### 1. [PR] Add missing `source` to Claude Code
**#41611** — Open, no comments
A long-open PR adding a missing `source` parameter to Claude Code's API calls. Still awaiting review after nearly 4 months.
🔗 [PR #41611](https://github.com/anthropics/claude-code/pull/41611)

### 2. [PR] Remove "retro-futuristic" recommendation from Frontend Design Skill
**#42604** — Closed
A documentation PR that was accepted — Claude Code's "Frontend Design" skill will no longer recommend "retro-futuristic" as a design suggestion.
🔗 [PR #42604](https://github.com/anthropics/claude-code/pull/42604)

### 3. [PR] Fix pagination in `auto-close-duplicates` script
**#80508** — Open, no comments
Fixes a bug where the auto-close-duplicates bot only checks the first 30 comments/reactions, causing it to miss evidence on longer issues. Important for bot reliability.
🔗 [PR #80508](https://github.com/anthropics/claude-code/pull/80508)

### 4. [PR] Fix `/ralph-loop` prompt text being parsed as shell code
**#80495** — Open, no comments
Fixes #16037: the `/ralph-loop` command substitutes user prompt text directly into shell commands without escaping, causing prompt text to be interpreted as shell code.
🔗 [PR #80495](https://github.com/anthropics/claude-code/pull/80495)

*(No additional significant PRs were active in the last 24 hours — only 4 total PRs had updates.)*

---

## Feature Request Trends

1. **Desktop ↔ CLI Remote Control** (#29006, 114 👍): The dominant request. Users want to start a Claude Code session in the terminal and control it from the Desktop app, especially for long-running agentic tasks.

2. **VS Code Chat UX Improvements** (#64968, 21 👍): Syntax highlighting for code blocks and better chat panel rendering are recurring themes.

3. **Subagent/Hook Payload Enrichment** (#80446): Users want session usage totals exposed in `Stop` and `SubagentStop` hook payloads for better observability and cost tracking.

4. **PDF Token Efficiency** (#80449): The Read tool sends both extracted text AND rendered images for PDFs, inflating token costs. Users want a text-only mode.

5. **Session Management** (multiple issues): Better session rename sync, conversation history summarization, and persistent session naming are ongoing asks.

---

## Developer Pain Points

1. **🔴 Fable 5 Billing Confusion (Critical)**: The top pain point. Max plan users are being denied access to Fable 5 with erroneous "credits required" messages. Multiple duplicate reports (#79337, #79341, #80382, #80737) suggest a systematic entitlement-check bug.

2. **🔴 Connection Reliability**: Issue #69415 (65 👍) shows that mid-response connection drops are making Claude Code unusable for a significant subset of WSL/VS Code users.

3. **🟡 Transcript Integrity Issues**: In the last 24 hours alone, three separate bugs (#80738, #80739, #80740) report corrupted transcripts — policy text injection, foreign web content spliced into responses, and random deletion of conversation history. This cluster suggests a **system prompt or context window management regression**.

4. **🟡 Permission/Sandbox Denials**: Multiple reports (#80736, #62135, #73739) about permission rules not being respected — either blocked operations being executed anyway, or legitimate read-only tools being blocked despite permissive rules.

5. **🟡 Windows Platform Issues**: Duplicate conversation rendering (#49985), broken Remote Control (#80735), and file extension handshake failures (#80016) continue to plague Windows users specifically.

6. **🟡 Subagent Tool Silencing**: Background subagents silently lose the LSP tool (#80733) with no error, and the "course" filler token flood (#80724) suggests streaming reliability issues in Cowork mode.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-24

## Today's Highlights
The Codex team shipped two new pre-release Rust binaries (`v0.146.0-alpha.5` and `v0.146.0-alpha.3.1`) alongside a wave of infrastructure PRs focused on proxy routing, plugin attribution, and deferred tool state. Meanwhile, the community continues to escalate concerns around context compaction degradation and runaway log growth, with multiple Windows-specific regressions gaining traction.

## Releases
- **[rust-v0.146.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.5)** — Latest alpha build; no detailed changelog published.
- **[rust-v0.146.0-alpha.3.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3.1)** — Patch release on the 0.146 alpha track.

## Hot Issues

1. **#4003** — [Patched files have mixed line endings on Windows](https://github.com/openai/codex/issues/4003)  
   *Bug, Windows* — Codex does not preserve existing line endings when patching files, forcing developers on Windows to manually re-normalize. 71 👍 suggest this remains a top pain point after nearly a year.

2. **#24948** — [Session logs grow to 700MB–2GB from compaction history](https://github.com/openai/codex/issues/24948)  
   *Bug, TUI* — Repeated compaction events balloon log storage, impacting disk-constrained users. 20 comments indicate active debugging interest.

3. **#22220** — [Conversation Compaction Telemetry / Context Health](https://github.com/openai/codex/issues/22220)  
   *Enhancement* — Users want visibility into when and why compaction occurs. Gaining traction as a feature request with 19 comments and 12 👍.

4. **#35032** — [Auto-compaction completes but leaves context ~80% full](https://github.com/openai/codex/issues/35032)  
   *Bug* — Freshly filed (July 23), this describes a compounding waste loop where compaction frees almost no space, triggering repeat cycles.

5. **#28074** — [WSL integration broken even with fresh installs](https://github.com/openai/codex/issues/28074)  
   *Bug, Windows* — Multiple users report WSL2 connectivity failures persist despite clean reinstalls. 8 👍 reflect wide impact.

6. **#34879** — [P0 regression: Windows launch saturates all CPU cores via WmiPrvSE](https://github.com/openai/codex/issues/34879)  
   *Bug, Performance* — Launched July 23; spikes all 32 logical processors at startup. Tagged P0 due to system-wide unusability.

7. **#33786** — [Completed large thread replayed every few seconds causing input stutter](https://github.com/openai/codex/issues/33786)  
   *Bug, Performance* — Background thread replay on Windows Desktop causes severe input latency. Affects Windows 10 users.

8. **#34095** — [Repeated auto-compaction degrades execution frontier](https://github.com/openai/codex/issues/34095)  
   *Bug, Model Behavior* — Long-running tasks lose track of what's done vs. remaining after multiple compactions, derailing convergence.

9. **#14116** — [Usage drain spikes since 0.111.0 from aggressive multi-agent spawning](https://github.com/openai/codex/issues/14116)  
   *Bug, Usage* — Fast mode + excessive subagent creation burns credits faster. Root cause narrowed to 2026-03-05 change.

10. **#32690** — [Enabling bundled Sites plugin causes infinite cmd.exe/node.exe spawn loop](https://github.com/openai/codex/issues/32690)  
    *Bug, Windows* — A single plugin toggle triggers runaway process creation, making the app effectively unusable on Windows.

## Key PR Progress

1. **[#35065](https://github.com/openai/codex/pull/35065)** — Avoid duplicating deferred sources in tool search — Reduces redundant context by omitting source listings already advertised in deferred world state.

2. **[#35063](https://github.com/openai/codex/pull/35063)** — Track deferred tool namespaces in world state — New disabled-by-default feature exposes deferred tool namespaces and availability changes to the model.

3. **[#35059](https://github.com/openai/codex/pull/35059)** — Decouple exec-server HTTP from reqwest types — Renames `ReqwestHttpClient` to `RouteAwareHttpClient` using transport-neutral types.

4. **[#35056](https://github.com/openai/codex/pull/35056)** — Route exec-server WebSockets through configured proxies — Ensures remote environments honor proxy policy during rendezvous reconnections.

5. **[#35054](https://github.com/openai/codex/pull/35054)** — Allow disabling the `update_plan` tool — Adds config toggle to omit `update_plan` from visible/registered tool sets.

6. **[#35049](https://github.com/openai/codex/pull/35049)** — Register Guardian V2 feature flag — New flag (`features.guardianv2`) for automatic approval reviews, disabled by default.

7. **[#35036](https://github.com/openai/codex/pull/35036)** — Preserve Windows sandbox proxy settings in guardian sessions — Prevents proxy config loss during guardian review commands.

8. **[#35031](https://github.com/openai/codex/pull/35031)** — Enforce writer ownership for thread archive and deletion — Prevents concurrent mutation of paginated threads by multiple processes.

9. **[#35029](https://github.com/openai/codex/pull/35029)** — Preserve plugin attribution across command approvals — Adds `plugin_id` and `script_path` to execution approval/guardian events.

10. **[#35028](https://github.com/openai/codex/pull/35028)** — Preserve refreshed Apps tools across MCP runtime updates — Ensures freshly installed plugin tools are not overwritten by stale MCP state.

## Feature Request Trends

- **Compaction transparency** (#22220, #35044): Users repeatedly ask for in-product telemetry about compaction triggers, context health, and quota resets — currently inferred from social media.
- **Non-developer UX mode** (#26556): Advocates for a "General User Mode" that hides diffs, logs, and implementation details, targeting domain experts who are not software engineers.
- **Incident awareness** (#35037, #35046): Requests for Codex to surface active OpenAI service incidents and pause/retry long-running sessions automatically.
- **Quota/reset visibility** (#35045, #35044): Demand for authoritative in-product announcements of quota resets, entitlement changes, and rollout status rather than reliance on social channels.

## Developer Pain Points

- **Windows fragmentation**: Line endings, WSL integration, CPU saturation, sandbox Git failures, and infinite spawn loops are recurring themes — the platform receives the largest share of bug reports.
- **Context compaction waste**: Repeated compaction that reclaims minimal space (#35032) or degrades task coherence (#34095) is frustrating users on long-running sessions, especially with expensive models.
- **Runaway resource consumption**: 2GB+ log files (#24948), CPU spikes (#34879), and thread replay loops (#33786) indicate systemic resource management gaps.
- **Stale/ghost state**: Subagents that cannot be closed (#25179), "No chats" with existing threads (#27284), and deleted conversation history after updates (#26157) erode trust in session persistence.
- **Model behavioral drift**: Silent feature swapping (#35043, #35041) and governance loops (#34898) where the model ignores bounded scope and exhausts usage without completing tasks are emerging as a high-severity concern.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-24

## Today’s Highlights
This week’s nightly release brings a critical credentials fallback fix and a new eval coverage reporting command. The community remains heavily focused on agent reliability, with high-traffic bugs around subagent false-success reporting and indefinite hangs persisting. A wave of security-focused PRs landed, addressing OAuth token refresh, credential encryption, and HTTPS enforcement.

## Releases
**v0.52.0-nightly.20260723.g9681621c6**  
- **fix(core):** Sequentially verify cached credentials and restore `GOOGLE_APPLICATION_CREDENTIALS` fallback  
- **feat(evals):** Add eval coverage report command

*No stable release in the last 24 hours.*

## Hot Issues (Top 10 Noteworthy)

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *P1, bug, area/agent*  
   The `codebase_investigator` subagent reports `"success"` with `Termination Reason: "GOAL"` even when it hit the turn limit before doing any analysis. This false-positive signal undermines trust in autonomous workflows. **12 comments, high community attention.**

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *P1, bug, area/agent*  
   Simple CLI operations (e.g., folder creation) cause the generalist agent to hang indefinitely. Users report waiting up to an hour. A workaround exists (disabling sub-agent deferral) but is non-obvious. **8 comments, 8 👍.**

3. **[#25166 — Shell command stuck with “Waiting input” after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *P1, bug, area/core*  
   After executing trivial CLI commands, Gemini CLI shows the shell as still active and awaiting input. This blocks subsequent turns and frustrates users. **4 comments, 3 👍.**

4. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *P1, bug, agent/browser*  
   The browser subagent terminates with `GOAL` on Wayland displays without meaningful output. **4 comments, Wayland users affected.**

5. **[#22186 — get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)**  
   *P1, bug, area/agent*  
   When the GSD agent prints its user summary near completion, Gemini CLI crashes consistently. **3 comments, critical reliability issue.**

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *P2, bug, area/agent*  
   The background extraction agent only marks a session as processed after a successful `read_file`. Low-signal sessions are never marked processed and get retried forever. **5 comments.**

7. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   *P2, bug, area/security*  
   Auto Memory sends transcript content to the extraction model before redacting secrets. Additionally, skills and logs may leak sensitive data. **4 comments.**

8. **[#20079 — Symlink agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
   *P2, bug, area/agent*  
   Agent `.md` files placed as symlinks in `~/.gemini/agents/` are silently ignored. Workflow automation users are impacted. **4 comments.**

9. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   *P2, bug, area/agent*  
   When the combined tool set exceeds 128, the API returns a 400 error. Expected: smarter tool scoping. **3 comments.**

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
    *P2, area/agent, customer-issue*  
    The model occasionally uses `git reset` or `--force` flags when safer alternatives exist. Community requests safer default behaviors for destructive operations. **3 comments, 1 👍.**

## Key PR Progress (Top 10 Important)

1. **[#28519 — Prevent infinite auth loop](https://github.com/google-gemini/gemini-cli/pull/28519)**  
   *size/s, area/core*  
   Fixes an infinite authentication loop by correctly awaiting the async write of `oauth_creds.json`. Addresses #28430.

2. **[#28523 — Enforce explicit tag length in file keychain](https://github.com/google-gemini/gemini-cli/pull/28523)**  
   *size/m, area/core*  
   Configures 128-bit authentication tag enforcement in credential storage, preventing silent corruption across Node.js runtimes.

3. **[#28517 — Enforce HTTPS for GoogleCredentialsAuthProvider](https://github.com/google-gemini/gemini-cli/pull/28517)**  
   *size/m, area/core*  
   Adds protocol verification to prevent ADC tokens from being transmitted over cleartext HTTP.

4. **[#28481 — Refresh MCP OAuth tokens with stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)**  
   *P1, size/m, area/security*  
   Fixes MCP OAuth refresh for servers configured via dynamic client registration. Previously, refresh failures deleted credentials, requiring full re-auth.

5. **[#28446 — Use native fetch for OAuth token exchange](https://github.com/google-gemini/gemini-cli/pull/28446)**  
   *P1, size/m, area/security*  
   Resolves "Premature close" errors on headless VPSes during `gemini login` by switching to native fetch.

6. **[#28524 — Caretaker triage prompt hill-climbing & orchestrator updates](https://github.com/google-gemini/gemini-cli/pull/28524)**  
   *size/m*  
   Incorporates 3 weeks of prompt optimization for the Caretaker triage worker. Introduces a `code_explorer` skill and updates the triage orchestrator.

7. **[#28469 — Rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   *size/m, area/core*  
   Fixes stateful API errors when falling back to `gemini-2.5-flash` by rotating the session ID on permanent fallback.

8. **[#28485 — Add gemini-3.5-flash to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)**  
   *P2, size/m, area/core*  
   Fixes #28483: users on v0.51.0 cannot select `gemini-3.5-flash` or `gemini-3.6-flash` from the model selector.

9. **[#28509 — Filter thought parts from getHistoryTurns](https://github.com/google-gemini/gemini-cli/pull/28509)**  
   *size/m, area/core*  
   Prevents internal monologue/thinking parts from leaking into history turns when context management is disabled.

10. **[#28183 — Preserve terminal focus when closing diff tabs (VS Code)](https://github.com/google-gemini/gemini-cli/pull/28183)**  
    *P1, size/m, area/extensions, help wanted*  
    Fixes focus-stealing in the VS Code companion extension: approving a diff no longer steals focus from the integrated terminal.

## Feature Request Trends

1. **Agent self-awareness & user guidance** (#21432, #22598): Multiple requests for agents to understand their own CLI flags, hotkeys, and subagent trajectories. Users want shareable subagent trajectories for debugging and eval.

2. **AST-aware code navigation** (#22745, #22746): Strong interest in AST-aware file reads, method-bound navigation, and codebase mapping to reduce token waste and improve tool-call accuracy.

3. **Destructive operation safeguards** (#22672): Community wants models to prefer safer alternatives for dangerous operations (`git reset`, `--force`, database modifications).

4. **Component-level evaluations** (#24353): An epic to extend the 76 existing behavioral eval tests across 6 Gemini model versions, aiming for robust, reproducible agent quality measurement.

5. **Zero-dependency OS sandboxing** (#19873): A large effort to fully leverage Gemini 3's native bash affinity with secure sandboxed shell execution, eliminating the need for ad-hoc script files.

## Developer Pain Points

- **Agent reliability regressions**: The highest-comment issues all involve subagents reporting false success (#22323), indefinite hangs (#21409), and stuck shell states (#25166). These undermine confidence in autonomous mode.
- **Auto Memory privacy concerns**: Multiple issues (#26522, #26523, #26525) highlight that Auto Memory sends potentially sensitive transcript content to the model before redaction, with indefinite retries for low-signal sessions.
- **Permissions and configuration leaks**: Subagents executing without permission after updates (#22093) and browser agent ignoring `settings.json` overrides (#22267) indicate configuration isolation gaps.
- **Wayland and headless VPS compatibility**: Both the browser subagent (#21983) and OAuth login (#28446) have environment-specific failures that block Linux users.
- **Tool count limits**: Hitting 128-tool API limits (#24246) without graceful fallback or smart scoping disrupts workflows with many custom skills or MCP servers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-24

## Today's Highlights
Two patch releases (v1.0.74 and v1.0.74-4) landed yesterday, adding Open Plugin Spec v1 support and fixing IDE reconnection reliability. A spike of 13 new issues in the last 24 hours signals growing friction around MCP tooling, session recovery, and keyboard interactions, with session size limits and Windows-specific hangs attracting the most community activity.

## Releases
**v1.0.74** (2026-07-23)
- Fixed: `?` in `/search` bar now opens quick help instead of being entered as text
- Added: Support for Open Plugin Spec v1 plugin manifests and `mcp.json` configuration
- Fixed: IDE integration reconnects reliably when the CLI reloads MCP servers or changes directory
- Fixed: Multi-turn subagent stability improvements

**v1.0.74-4** (2026-07-23)
- Added: Support for Open Plugin Spec v1 plugin manifests and `mcp.json` configuration
- Improved: Subagent timelines now identify whether prompts came from the main agent or another subagent
- Fixed: IDE integration reconnects reliably when the CLI reloads MCP servers or changes directory

## Hot Issues
1. **#4097** — `apply_patch` stores deleted binary in session history, permanently exceeding CAPI 5 MB limit. Community upvoted (👍5) as a critical session-blocking bug with no recovery path. [Issue](https://github.com/github/copilot-cli/issues/4097)

2. **#4165** — `copilot --resume` hangs indefinitely on Windows cold start in PowerShell. Blocks session recovery for Windows users. [Issue](https://github.com/github/copilot-cli/issues/4165)

3. **#4206** — Environment footer stuck on "Loading:" forever when GitHub MCP handshake stalls under org MCP policy. Affects enterprise deployments with custom MCP policies. [Issue](https://github.com/github/copilot-cli/issues/4206)

4. **#3534** — `/copy` fails on WSL2 ARM64 with `clip.exe exited with code 1` due to cmd.exe quoting bug. Platform-specific pain point with high engagement (👍4). [Issue](https://github.com/github/copilot-cli/issues/3534)

5. **#4143** — CLI should inherit MCP tools from connected VS Code instance. Strong community demand (👍5) for tighter IDE-CLI tool sharing. [Issue](https://github.com/github/copilot-cli/issues/4143)

6. **#4214** — New sessions eternally stuck at "Loading: 1 skill" with blinking cursor. User reports CLI cannot self-diagnose the stall. [Issue](https://github.com/github/copilot-cli/issues/4214)

7. **#4211** — Copilot CLI crashes on BigInt in structured MCP responses with `Do not know how to serialize a BigInt`. Blocks MCP servers returning large numeric values. [Issue](https://github.com/github/copilot-cli/issues/4211)

8. **#4235** — Ctrl+C no longer cancels an active agent run (regression). Critical workflow interruption for power users. [Issue](https://github.com/github/copilot-cli/issues/4235)

9. **#4234** — Plugin MCP servers cannot resolve the active project directory; launched with working directory set to plugin installation root instead. [Issue](https://github.com/github/copilot-cli/issues/4234)

10. **#4233** — Request to emit `usage_update` in `--acp` mode (context window + AI credits) for parity with interactive statusline. Needed by ACP clients like Zed. [Issue](https://github.com/github/copilot-cli/issues/4233)

## Key PR Progress
1. **#4228** — [CLOSED] Withdrawn PR for #3534 WSL2 clipboard fix; scope incorrectly targeted documentation instead of private clipboard runtime. [PR](https://github.com/github/copilot-cli/pull/4228)

2. **#3163** — [OPEN] "ViewSonic monitor" — low-quality PR referencing unrelated hardware issues #2591, #3561, #3559 with no meaningful code changes. [PR](https://github.com/github/copilot-cli/pull/3163)

*Note: Only 2 PRs were active in the last 24 hours, both with low engineering value. This suggests the team is focused on release stabilization rather than landing new features.*

## Feature Request Trends
- **MCP tool inheritance from VS Code** (#4143): Users want CLI sessions to automatically access MCP tools configured in their connected VS Code instance, eliminating duplicate configuration.
- **Open Plugin Spec v1 support** (now shipped): Community has been requesting standardized plugin manifests; v1.0.74 delivers this.
- **Steering message preservation** (#4237, #4230): Users want hook-returned denial reasons and multi-line editor input to be transmitted to the model, not silently dropped.
- **X11/Wayland PRIMARY selection** (#4236): Linux users request `copyOnSelect` to support mouse-based clipboard (middle-click paste) alongside the standard Ctrl+C clipboard.
- **Domain/category tags for instructions** (#4231): Large codebase users want `applyTo` glob patterns supplemented with tags to scope instructions without reading hundreds of agent docs.
- **ACP usage tracking** (#4233): Third-party ACP clients need context-window and credit-usage events to match what the interactive CLI already computes.

## Developer Pain Points
- **Session size limits are a recurring blocker**: Issues #4097 and #3767 highlight that the 5 MB CAPI limit is easily exceeded (deleted binaries, oversized attachments) with no recovery path except session restart. `/compact` doesn't help for binary content.
- **MCP integration fragility**: Multiple reports (#4206, #4211, #4234) of MCP servers failing silently—stuck loading states, BigInt serialization crashes, wrong working directories. The ecosystem is maturing but edge cases are plentiful.
- **Windows/WSL2 platform gaps**: Issues #3534 (clipboard), #4165 (resume hang), and #2802 (render loop) show Linux/WSL2 users face a disproportionate share of blocking bugs.
- **Keyboard interrupt regression**: #4235 reports Ctrl+C cancellation broken in recent releases—a fundamental UX regression for any CLI tool.
- **Auto-update binary mismatch**: #3696 shows Alpine/musl users get wrongly-architectured downloads, causing complete CLI failure after update.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-24

## Today's Highlights
A major burst of 15 pull requests landed within 24 hours, primarily addressing MCP session reliability, Windows compatibility, and plugin stability. The community is actively debating the use of Kimi's agent architecture for quantitative finance, while a growing number of issues point to scaling problems in plugin management and multi-session concurrency.

## Releases
No new releases in the last 24 hours. The latest stable version remains **v0.29.0**.

## Hot Issues

1. **[#1282 – Feature Request: Remote Control – Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)**  
   *Author: CatKang | 👍: 16 | Comments: 6*  
   The most-upvoted open feature request. Users want to persist and resume local CLI sessions from phones or browsers. This reflects a strong demand for mobile-first development workflows. Community engagement suggests this is a high-priority roadmap item.

2. **[#2555 – A-share quantification + AI Agent practice](https://github.com/MoonshotAI/kimi-cli/issues/2555)**  
   *Author: yupeng012 | 👍: 0 | New*  
   A deep discussion on applying Kimi's agent patterns to A-share stock trading. The author shares practical findings on using real PnL as the sole learning signal and parameter-driven strategy optimization. This bridges Kimi's CLI ecosystem into quantitative finance tooling.

3. **[#2553 – /plugins crashes with TypeError when 2+ plugins installed (v0.29.0, Windows)](https://github.com/MoonshotAI/kimi-cli/issues/2553)**  
   *Author: tovipy-png | 👍: 0 | Bug*  
   A reproducible crash on Windows when managing multiple plugins. The issue affects all plugin-heavy workflows on Windows and may be blocking users from adopting the plugin system entirely.

4. **[#2552 – Poor font kerning for Cyrillic text in Kimi Desktop](https://github.com/MoonshotAI/kimi-cli/issues/2552)**  
   *Author: Serg2000Mr | 👍: 0 | Bug*  
   Cyrillic text in markdown blocks renders with broken letter-spacing on Windows Desktop. A niche but blocking issue for East European users, likely tied to font rendering configuration in the desktop client.

5. **[#2545 – Synchronize queued prompts to backend for phone users](https://github.com/MoonshotAI/kimi-cli/issues/2545)**  
   *Author: vilicvane | 👍: 0 | Enhancement*  
   Queued prompts are lost when the browser moves to background on mobile. This affects the mobile web experience significantly, especially for users who prompt and switch apps.

6. **[#2538 – kimi-datasource plugin worker pool blocks all sessions on timeout](https://github.com/MoonshotAI/kimi-cli/issues/2538)**  
   *Author: cloxichjc | 👍: 0 | Bug*  
   A critical concurrency bug: when multiple sessions use `kimi-datasource`'s `yahoo_finance` API, a single slow request blocks the entire worker pool, freezing all sessions. This is a systemic issue for plugin-based multi-session workflows.

7. **[#2550 – (PR) Propagate message serialization options](https://github.com/MoonshotAI/kimi-cli/pull/2550)**  
   *Author: lihailong00*  
   Fixes a subtle but important bug where Pydantic serialization options weren't propagated through Message.content, causing null IDs to appear in media payloads.

8. **[#2548 – (PR) Reuse initialized MCP client sessions](https://github.com/MoonshotAI/kimi-cli/pull/2548)**  
   *Author: lihailong00*  
   A performance and correctness fix: MCP clients were re-initializing on every tool call. This PR keeps sessions alive across the toolset lifetime via AsyncExitStack.

9. **[#2551 – (PR) Search past file completion limit](https://github.com/MoonshotAI/kimi-cli/pull/2551)**  
   *Author: lihailong00*  
   Expands `@` file completion from a hard 1000-entry scan to a smarter bounded search (budget 1000 results, 10000 scan). Improves UX in large repositories.

10. **[#2547 – (PR) Configure stdio as UTF-8 on Windows](https://github.com/MoonshotAI/kimi-cli/pull/2547)**  
    *Author: lihailong00*  
    Forces Windows stdout/stderr to UTF-8 encoding at startup, critical for correct rendering of non-ASCII characters in cp936 (Chinese) locales.

## Key PR Progress

1. **[#2554 – fix(tools): count StrReplaceFile replacements against running content](https://github.com/MoonshotAI/kimi-cli/pull/2554)**  
   *Author: ayaangazali*  
   Correctness fix: the success message for `StrReplaceFile` was counting against original content instead of the running (modified) content. Self-contained and under 100 LOC.

2. **[#2548 – fix(mcp): reuse initialized client sessions](https://github.com/MoonshotAI/kimi-cli/pull/2548)**  
   *Author: lihailong00*  
   Prevents MCP session re-initialization by keeping sessions open. Verified against strict stdio MCP servers that reject duplicate `initialize` calls.

3. **[#2549 – fix(shell): index tracked vendor files](https://github.com/MoonshotAI/kimi-cli/pull/2549)**  
   *Author: lihailong00*  
   Allows Git-tracked `vendor/` files to appear in `@` completions while excluding untracked vendor trees and `node_modules`. Balances completeness with performance.

4. **[#2551 – fix(shell): search past file completion limit](https://github.com/MoonshotAI/kimi-cli/pull/2551)**  
   *Author: lihailong00*  
   Bounded expansion of file search beyond 1000 entries with query-specific fallback caches.

5. **[#2544 – fix(kaos): terminate local process trees](https://github.com/MoonshotAI/kimi-cli/pull/2544)**  
   *Author: lihailong00*  
   Isolates KAOS commands into process groups so cancellation/timeout kills the entire tree. Fixes process leaks on Windows Git Bash.

6. **[#2541 – fix(mcp): continue after deferred startup failure](https://github.com/MoonshotAI/kimi-cli/pull/2541)**  
   *Author: lihailong00*  
   Makes optional/background MCP startup failures non-fatal. Catches `MCPRuntimeError` at the deferred wait boundary, preventing one bad MCP server from crashing the interactive turn.

7. **[#2540 – fix(media): normalize ICO images to PNG](https://github.com/MoonshotAI/kimi-cli/pull/2540)**  
   *Author: lihailong00*  
   Converts ICO image payloads to PNG before sending to the model, preserving metadata. Most new models lack ICO support.

8. **[#2542 – fix(logging): isolate Windows process log files](https://github.com/MoonshotAI/kimi-cli/pull/2542)**  
   *Author: lihailong00*  
   Uses `kimi.<pid>.log` on Windows to prevent concurrent process log rotation conflicts. Retains `kimi.log` on non-Windows.

9. **[#2539 – fix(mcp): normalize tools for Moonshot API](https://github.com/MoonshotAI/kimi-cli/pull/2539)**  
   *Author: lihailong00*  
   Generates stable Moonshot-compatible aliases for MCP tool names while keeping original names for upstream routing. Fixes schema compatibility issues with object properties and `anyOf`/required shapes.

10. **[#2537 – fix(shell): support numeric keypad input](https://github.com/MoonshotAI/kimi-cli/pull/2537)**  
    *Author: lihailong00*  
    Recognizes DEC application-keypad sequences from Windows Terminal, enabling keypad digit input in the prompt buffer.

## Feature Request Trends

- **Remote Session Continuity (Issue #1282):** The highest-demand feature. Users want to pause a local CLI session on desktop and resume it from a phone or tablet. This bridges the gap between desktop-heavy development tools and mobile-first work habits.
- **Mobile Web Prompt Reliability (Issue #2545):** Related to the above — queued prompts being lost when the browser goes to background on mobile is a recurring friction point.
- **Quantitative Finance Integration (Issue #2555):** A new but notable direction. Users are adapting Kimi's agent architecture for real-time trading systems, demanding parameter-driven strategy configuration and PnL-based learning feedback loops.

## Developer Pain Points

1. **Plugin Management Crashes (Issue #2553):** The `/plugins` screen crashes on Windows with more than one plugin installed. This blocks plugin adoption on the dominant desktop platform and should be a high-severity fix.

2. **Plugin Worker Pool Deadlocks (Issue #2538):** The `kimi-datasource` plugin's worker pool blocks all sessions on a single slow request. For users running multi-session workflows, this is a systemic reliability risk.

3. **Windows Compatibility Gaps:** Three separate PRs (#2547, #2542, #2537) address Windows-specific issues — UTF-8 encoding, log file isolation, and numeric keypad support. The community continues to discover and fix Windows edge cases.

4. **Process Tree Leakage (PR #2544):** KAOS commands not being properly terminated on cancellation/timeout on Windows Git Bash. This is a resource leak that can degrade system performance over time.

5. **MCP Session Management (PR #2541, #2548):** Two separate MCP reliability fixes this week. The pattern suggests that MCP integration is still maturing, with both startup failures and session reuse being common issues for plugin/agent developers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-07-24

---

## 1. Today's Highlights

The community is buzzing around two major themes: **provider integration reliability** and **UI/UX stability**. A highly-upvoted issue requesting auto-discovery of OpenAI-compatible models (187 👍) signals strong demand for local-first tooling, while an expensive content-filter false positive on `claude-fable-5` (charged ~$20 for blocked output) has ignited scrutiny of billing practices. On the code quality front, multiple contributor PRs landed today fixing tool-definition ordering and catalog stability in the V2 renderer—critical for deterministic prompt caching and session consistency.

---

## 2. Releases

No new releases in the last 24 hours. Latest stable remains **OpenCode Desktop v1.18.4** and **OpenCode Go v1.18.3**.

---

## 3. Hot Issues

1. **#6231 – Auto-discover models from OpenAI-compatible endpoints**  
   *187 👍, 30 comments*  
   Users running LM Studio, Ollama, or llama.cpp must manually list models in `opencode.json`. This is a top pain point for local-provider workflows.  
   [GitHub](https://github.com/anomalyco/opencode/issues/6231)

2. **#37012 – Keep legacy layout option**  
   *30 👍, 29 comments*  
   A vocal group prefers the old UI’s single-window access to all features over the new navigational layout.  
   [GitHub](https://github.com/anomalyco/opencode/issues/37012)

3. **#37716 – Internal Server Error (CLOSED)**  
   *26 comments*  
   Reproducible crash on Desktop v1.18.3 across multiple models. Closed without public RCA—community awaiting root-cause explanation.  
   [GitHub](https://github.com/anomalyco/opencode/issues/37716)

4. **#35475 – False positive content-filter on claude-fable-5 (~$20 charged)**  
   *10 comments*  
   Benign queries blocked by guardrail; cache writes billed despite zero output delivered. Has sparked billing-policy discussion.  
   [GitHub](https://github.com/anomalyco/opencode/issues/35475)

5. **#37326 – Math equations not rendered**  
   *7 comments*  
   LaTeX/math output broken in desktop app. Impacts documentation and code-comment scenarios.  
   [GitHub](https://github.com/anomalyco/opencode/issues/37326)

6. **#26220 – Infinite loop after tool calls complete (Zen/big-pickle)**  
   *7 comments*  
   Agent stops responding following tool-call completion; state machine enters unrecoverable loop.  
   [GitHub](https://github.com/anomalyco/opencode/issues/26220)

7. **#38591 – npm install fails on FreeBSD**  
   *2 comments*  
   Platform constraint (`os: darwin,linux,win32`) blocks installation on FreeBSD. Commenter questions Node.js platform approach.  
   [GitHub](https://github.com/anomalyco/opencode/issues/38591)

8. **#38564 – Subagent termination doesn’t kill child processes**  
   *2 comments*  
   Cancelled subagents leave PowerShell or disk-scanning scripts running at 100% I/O—potential disk abuse vector.  
   [GitHub](https://github.com/anomalyco/opencode/issues/38564)

9. **#38544 – Unix socket path fails shell tool (V2)**  
   *2 comments*  
   Absolute Unix socket paths trigger `realPath` advisory scan error, blocking legitimate commands.  
   [GitHub](https://github.com/anomalyco/opencode/issues/38544)

10. **#37880 – 'Always Allow' permission acts as 'Allow Once'**  
    *2 comments*  
    Desktop v1.18.3: clicking "Always Allow" doesn't persist—resets after every permission prompt.  
    [GitHub](https://github.com/anomalyco/opencode/issues/37880)

---

## 4. Key PR Progress

1. **#38590 – Stabilize tool definition ordering (CLOSED)**  
   Canonicalizes provider-visible tool definitions for deterministic prompt-cache prefixes.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38590)

2. **#38584 – Recover projects moved to a new path (OPEN)**  
   Fixes project tracking when the root repo directory changes. Closes #38578.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38584)

3. **#38588 – Stabilize CodeMode catalog ordering (CLOSED)**  
   Prevents false `core/codemode` instruction updates from registration-order changes.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38588)

4. **#38581 – Preserve grep symlink paths (OPEN)**  
   Grep was canonicalizing symlinks, breaking subsequent file operations. Now preserves original path. Closes #38582.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38581)

5. **#38183 – Render CodeMode catalog deltas from structured snapshots (OPEN)**  
   Moves catalog prompting to core, enabling skill-style semantic deltas instead of full-string replacement.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38183)

6. **#38369 – Improve patch errors (CLOSED)**  
   Better error messages for malformed add/delete/move hunks, with stable filesystem causes.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38369)

7. **#38579 – Forward plugin request metadata to MCP (OPEN)**  
   Enables plugins to send `_meta` fields (session ID, etc.) to MCP servers. Closes #17084.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38579)

8. **#38423 – Preserve raw finish reasons from providers (CLOSED)**  
   Normalizes finish-reason data across OpenAI, Anthropic, Gemini, and Bedrock.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38423)

9. **#38198 – Stage file edits for native review (OPEN)**  
   Prevents double-write when using ACP; diffs are staged for review before committing. Closes #38196.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38198)

10. **#38539 – Preview written file content in TUI (OPEN)**  
    Auto-generated PR: renders write results as block cards with before/after diffs.  
    [GitHub](https://github.com/anomalyco/opencode/pull/38539)

---

## 5. Feature Request Trends

- **Provider auto-discovery** (#6231): The #1 request—users want zero-config model detection for local OpenAI-compatible providers.
- **UI flexibility** (#37012, #6284, #37267): Multiple threads ask for layout persistence, RTL language support, and dedicated sub-agent views.
- **Session management** (#25848, #26266): Manual session renaming and visual reasoning-level indicators for sub-agents.
- **Mobile control** (#33163): Remote monitoring and task acceptance from mobile devices.
- **Ecosystem plugins** (multiple PRs): Growing interest in community plugins (MCP metadata, flow engines, git trailers, TUI overlays).

---

## 6. Developer Pain Points

- **Billing for blocked outputs**: Content-filter charges on `claude-fable-5` and others—users expect zero-billing when output is never delivered.
- **Sub-agent lifecycle leaks**: Termination not killing spawned processes, leading to runaway disk I/O and potential data loss.
- **Platform constraints**: FreeBSD and RTL-language users face installation barriers; Windows Desktop users report permission-persistence failures.
- **V2 regressions**: Unix socket path errors, infinite loops after tool calls, and main-thread freezes on 1.18.4.
- **Usage-dashboard inconsistency**: Discrepancies between monthly-limit and granular dashboards for Go subscription users (#38255).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-24

## Today's Highlights

A burst of 50+ issues and 21 PRs updated in the past 24 hours signals an active maintenance cycle after last week's 0.81.1 release. The two dominant threads are clipboard reliability on Wayland (with a fix now merged) and model configuration hot-reload regressions introduced in 0.80.8. Meanwhile, foundational work on constrained sampling for tool arguments (PR #6341) continues to mature, aiming to bring grammar-aware "strict tools" to Pi's provider layer.

## Releases

No new releases in the last 24 hours. Current stable remains v0.81.1 (published ~2026-07-22).

## Hot Issues

Top 10 noteworthy issues by community impact:

1. **#6999 — models.json hot-reload regression in 0.80.8+**  
   Users editing `~/.pi/agent/models.json` mid-session lost hot-reload on `/model`. A vim-integration pain point. Fix in progress via PR #7036.  
   https://github.com/earendil-works/pi/issues/6999

2. **#6306 — Support Strict Tools / Grammar**  
   (Closed, 22 comments) The longest discussion this month. Requests provider-level LARK or Rust-regex constrained sampling — the precursor to PR #6341's `constrainedSampling` config. Strong maintainer interest.  
   https://github.com/earendil-works/pi/issues/6306

3. **#6951 — Qwen reasoning effort mismatch**  
   `pi` hardcodes `minimal/low/medium/high` but Qwen's API expects `low/medium/xhigh`. Blocks users of qwen3.8-max-preview. One 👍.  
   https://github.com/earendil-works/pi/issues/6951

4. **#6994 — Hardcoded 16K maxTokens for llama.cpp**  
   All llama.cpp providers capped at 16,384 output tokens regardless of model's context window. Fixed in PR #7034.  
   https://github.com/earendil-works/pi/issues/6994

5. **#6749 — API error bodies silently dropped**  
   When connecting to Open WebUI/compatible backends, validation errors show `(no body)` instead of the actual message — debugging nightmare for gateway setups.  
   https://github.com/earendil-works/pi/issues/6749

6. **#6948 — llama.cpp defaultProvider race at startup**  
   `settings.json` default provider/model for llama.cpp is ignored on first start due to async model refresh. Session launches with wrong model.  
   https://github.com/earendil-works/pi/issues/6948

7. **#7033 — Malformed package manifests crash-loop sessions**  
   A non-array `"skills": "./skills"` in a package's `pi` manifest causes `TypeError` on every session boot with no recovery. Critical for extension ecosystem.  
   https://github.com/earendil-works/pi/issues/7033

8. **#7035 — Intermittent crash on large grep operations**  
   Slackware user reports instant crashes when grep returns large result sets. No stack trace yet; likely memory/streaming boundary issue.  
   https://github.com/earendil-works/pi/issues/7035

9. **#7021 — CJK/wide character cursor misalignment**  
   Vertical cursor movement uses UTF-16 code units instead of display columns. Every CJK character offsets the cursor position. Blocks East Asian users.  
   https://github.com/earendil-works/pi/issues/7021

10. **#7006 — Home-path corruption outside footer**  
    #4878's fix only applied to the footer. Displays like file pickers still abbreviate e.g. `/Users/alice-work` as `~-work`.  
    https://github.com/earendil-works/pi/issues/7006

## Key PR Progress

1. **#6341 — `constrainedSampling` for strict tools**  
   (`to-discuss`, merged) Adds opt-in `constrainedSampling` config to tools, enabling JSON-schema and provider-side grammar constraints. The foundation for #6306.  
   https://github.com/earendil-works/pi/pull/6341

2. **#7034 — Llama output limit from context window**  
   Removes the 16K hard cap on llama.cpp output tokens, deriving limits from each model's loaded context. Fixes #6994.  
   https://github.com/earendil-works/pi/pull/7034

3. **#7036 — Reload model config in picker**  
   Addresses #6999 hot-reload regression. Uses `refresh` return from `reloadConfig` to avoid double refresh.  
   https://github.com/earendil-works/pi/pull/7036

4. **#7009 — Await wl-copy exit code, fall back to xclip**  
   Fixes Wayland clipboard false-success bug (#6872, #7012). Now awaits exit code — failure triggers xclip/OSC 52 fallback.  
   https://github.com/earendil-works/pi/pull/7009

5. **#6971 — `bash_execution_update` events**  
   Emits per-command execution events (with `id` for parallel tracking). Unblocks Emacs integration (pimacs.el).  
   https://github.com/earendil-works/pi/pull/6971

6. **#6980 — Abortable provider retries**  
   Replaces Anthropic/OpenAI SDK's non-abortable retries with a common helper respecting `maxRetryDelayMS` and abort signals. Fixes #6911.  
   https://github.com/earendil-works/pi/pull/6980

7. **#6618 — Don't cache write compaction or branch summaries**  
   Prevents caching writes for compaction and branch summary turns — saves provider costs. Includes test coverage.  
   https://github.com/earendil-works/pi/pull/6618

8. **#7032 — Expose unavailable scoped models**  
   Adds structured diagnostics for configured models no longer available. Shows "no-match" entries in `/scoped-models` and allows removal.  
   https://github.com/earendil-works/pi/pull/7032

9. **#7017 — Limited repainting for long sessions**  
   Experimental setting to skip full transcript repaints on very long sessions. Could significantly improve performance for power users.  
   https://github.com/earendil-works/pi/pull/7017

10. **#7028 — Keep `/resume` unfiltered after resume**  
    Prevents picker collapse to self-reference when running `/resume` inside a resumed session. Nested resume is now idempotent.  
    https://github.com/earendil-works/pi/pull/7028

## Feature Request Trends

The most active feature direction from recent issues:

- **Constrained/Strict Tool Sampling** (#6306, PR #6341): Three weeks of discussion on grammar-aware tool argument generation. Maintainers are investing in provider abstraction layer.
- **Built-in Provider Expansion**: Two requests for SiliconFlow (aggregator similar to OpenRouter) appeared in same 24h window (#4742, #7013). Community wants easier multi-model access without manual `models.json` editing.
- **Anthropic Server-Side Fallback** (#6886): Growing demand for Anthropic's Fable→Opus automatic fallback — enterprise users want reliability without client-side logic.
- **Standard Text Selection in TUI** (#7038): Non-Vim users requesting Ctrl+Shift+arrow selection. Signals tension between modal and non-modal editing audiences.

## Developer Pain Points

Recurring frustrations from today's issue set:

1. **Clipboard flakiness on Wayland** — Two duplicate issues (#6872, #7012) report false success when `wl-copy` fails in sandboxed/restricted environments. Finally fixed in PR #7009.
2. **Model configuration hot-reload fragility** — #6999 and #6948 show that model/provider state management is brittle: regressions from async refactoring, missing defaults on startup.
3. **Chinese model compatibility gaps** — Qwen reasoning effort levels mismatch (#6951) and DeepSeek on Aliyun thinking format bug (#6998) suggest insufficient testing with Chinese providers.
4. **Package ecosystem stability** — One corrupted `package.json` manifest can crash-loop every session (#7033) with no recovery path. No package validation on install.
5. **CJK input handling** — #7021's cursor misalignment is a fundamental TUI rendering issue, not a simple fix. Affects a significant user base.
6. **Unhelpful API error messages** — #6749's `(no body)` behavior hides validation errors from custom/self-hosted backends, making debugging "it works everywhere except Pi" scenarios painful.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — July 24, 2026

## Today's Highlights
A quiet release day with one nightly build is accompanied by a surge of CI reliability concerns and MCP integration bugs. The community is actively debating E2E test flakiness versus real regressions, while several critical patches land for MCP transport, daemon telemetry, and OAuth URL formatting. An exciting new GitHub polling channel adapter enters review, promising notification-as-wakeup for `@mention` workflows.

## Releases
**[v0.20.1-nightly.20260724.7d17c44a3](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-nightly.20260724.7d17c44a3)** — A single nightly release with telemetry test coverage for daemon metrics initialization ordering and a performance fix.

## Hot Issues (10 Noteworthy)

1. **[#5736](https://github.com/QwenLM/qwen-code/issues/5736) — More full prompt reprocessing after recent update** (CLOSED, 7 comments, 1 👍)  
   *Scope: caching, performance.* Users report forced full prompt re-processing when continuing conversations post-update. Has a `welcome-pr` label and strong community interest (7 comments). The leading performance regression candidate this week.

2. **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) — MCP server never successfully gets tool/resource listing** (CLOSED, 6 comments)  
   *Scope: MCP, tools.* Fastmail MCP server authentication works, but tool/resource listing times out. A blocking integration issue for third-party MCP adoption. Closed today — fix likely in the nightly.

3. **[#7485](https://github.com/QwenLM/qwen-code/issues/7485) — TUI large blank area after resume** (OPEN, 4 comments)  
   *Scope: UI, session management.* After `qwen resume`, a large blank gap appears between the last message and input prompt. Deteriorates the primary TUI experience for long-running sessions.

4. **[#7264](https://github.com/QwenLM/qwen-code/issues/7264) — Cold-start follow-ups: remaining lazy-loading candidates** (OPEN, 4 comments)  
   *Scope: core, performance.* Eager static import closure is 17.24 MiB/2420 modules on cold start. Technical deep-dive from the performance team — expect significant cold-start improvements once addressed.

5. **[#6806](https://github.com/QwenLM/qwen-code/issues/6806) — Status line context percentage does not refresh after `/compress`** (OPEN, 4 comments, `welcome-pr`)  
   *Scope: UI, token management.* After running `/compress`, the footer token percentage sticks at the pre-compression value until the next request. Minor annoyance with a community-friendly fix label.

6. **[#7599](https://github.com/QwenLM/qwen-code/issues/7599) — Workspace artifacts created via record_artifact have no managedId** (CLOSED, 5 comments)  
   *Scope: core, artifacts.* Artifacts written to workspace via `record_artifact` are emitted without `managedId`, breaking the managed-artifact contract. Potentially affects downstream tooling and artifact tracking.

7. **[#7590](https://github.com/QwenLM/qwen-code/issues/7590) — 微信频道无法使用 (WeChat channel broken)** (CLOSED, 2 comments)  
   *Scope: integration.* WeChat channel throws `session/cancel` internal errors and never processes messages. A critical channel fix for the Chinese developer community.

8. **[#7609](https://github.com/QwenLM/qwen-code/issues/7609) — Telegram replies always go to #general instead of topic thread** (CLOSED, 2 comments)  
   *Scope: channels, Telegram.* With Topics enabled, bot replies ignore the active topic and always post to `#general`. A UX regression for Telegram supergroup users.

9. **[#7616](https://github.com/QwenLM/qwen-code/issues/7616) — Do we really need this many E2E tests?** (OPEN, 2 comments)  
   *Scope: CI/CD, testing.* The community pushes back on 30+ E2E flaky failures in 12 days — tests verifying deterministic logic through non-deterministic model APIs. A growing sentiment among maintainers and contributors.

10. **[#7575](https://github.com/QwenLM/qwen-code/issues/7575) — User-level skills not loaded in channel/ACP mode** (OPEN, 2 comments)  
    *Scope: CLI, core.* Running `qwen serve --channel` skips `~/.qwen/skills/`. Skills installed globally are invisible in channel mode — a documented precedence violation.

## Key PR Progress (10 Important PRs)

1. **[#7632](https://github.com/QwenLM/qwen-code/pull/7632) — GitHub polling adapter with notification-as-wakeup architecture** (OPEN)  
   *Scope: channels, GitHub.* Adds a new GitHub channel that polls notifications and responds to `@mentions` on issues/PRs. Redesigned with a notification-as-wakeup pattern inspired by multica. A significant expansion for code review automation.

2. **[#7195](https://github.com/QwenLM/qwen-code/pull/7195) — Fix: use dedicated undici fetch for Streamable HTTP MCP transports** (CLOSED)  
   *Scope: MCP.* Routes MCP Streamable HTTP through undici with disabled `headersTimeout`/`bodyTimeout`. Fixes long-SSE session disconnections — the root cause of many "MCP timeout" issues.

3. **[#7594](https://github.com/QwenLM/qwen-code/pull/7594) — perf: Propagate compile cache to ACP children** (OPEN)  
   *Scope: core, performance.* Publishes Node module compile cache to ACP child processes. Directly addresses the cold-start overhead identified in #7264. A high-impact performance patch.

4. **[#7604](https://github.com/QwenLM/qwen-code/pull/7604) — test: Pin archived-copy usage salvage in conflict deletion test** (OPEN)  
   *Scope: core, testing.* Post-merge review follow-up for #7425. Adds an assertion that `persistUsageBeforeTranscriptDeletion` is called with the correct archived path — important data integrity coverage.

5. **[#7471](https://github.com/QwenLM/qwen-code/pull/7471) — feat(web-shell): add git mode selector for new session creation** (OPEN)  
   *Scope: web-shell, git.* Adds unified git mode (current branch, new branch, isolated index) to the Web Shell composer. A UX improvement for developers who switch contexts frequently.

6. **[#7255](https://github.com/QwenLM/qwen-code/pull/7255) — feat(core): emit OAuth login URL as single OSC 8 hyperlink** (CLOSED)  
   *Scope: core, OAuth.* Fixes #6428. Replaces hard-wrapped URLs with clickable OSC 8 hyperlinks in non-browser mode. Community-welcomed quality-of-life improvement for terminal-based authentication.

7. **[#7603](https://github.com/QwenLM/qwen-code/pull/7603) — fix(sdk-java): Harden daemon transport reliability** (OPEN)  
   *Scope: SDK, Java.* Adapts Java daemon SDK to restart-safe event cursor contract. Exposes `eventEpoch` for prompt admission and sends it as `X-Qwen-Event-Epoch` header. A reliability improvement for Java SDK consumers.

8. **[#7607](https://github.com/QwenLM/qwen-code/pull/7607) — feat(core): add configurable image generation models** (OPEN)  
   *Scope: core, generation.* Adds `/model --image` selection and an approval-gated image generation tool. Extends modality support beyond text and vision to generative images.

9. **[#7539](https://github.com/QwenLM/qwen-code/pull/7539) — fix(cli): clean orphaned managed npm update artifacts** (OPEN)  
   *Scope: CLI, updates.* Adds cleanup for stale update staging directories and temporary pointer files from dead processes. Addresses the root cause of "update stuck" reports.

10. **[#7630](https://github.com/QwenLM/qwen-code/pull/7630) — ci: label PRs closing their own author's issue** (OPEN)  
    *Scope: CI, process.* Applies `review/self-reported` label to self-fixed issues. A reviewer-facing process improvement to identify patches that may need extra scrutiny.

## Feature Request Trends
- **Enterprise memory integration** (#7449, #7585): A clear push toward external memory profiles for enterprise deployments — one general provider-neutral profile and one direct-context-provider extension.
- **Modality expansion** (#7497, #7607): Video input for `/learn` and configurable image generation models. The community wants Qwen Code to handle more than text and chat.
- **Workspace & session ergonomics** (#7471, #7302, #7629): Git mode selectors, prior-session references via `@`, and locked-workspace fixes — a pattern of making multi-repo work less error-prone.
- **MCP and channel ecosystem** (#7632, #7578): GitHub polling adapter paired with VS Code terminal visibility requests shows demand for deeper platform integration.

## Developer Pain Points
- **E2E test reliability crisis** (#7616, plus 4 CI failure issues this week): Developers are frustrated by flaky E2E tests masking real regressions. The conversation is shifting from "fix failures" to "reduce test surface."
- **Update check breakage on npm 12/Node 26** (#7520, #7543, #7515): Three separate issues in 48 hours. The `getNpmCliPath` and `fetchGlobalNpmUpdateInfo` functions fail on modern npm versions, blocking `qwen update` for users on Node 26.
- **MCP tool/resource listing timeout** (#7147): Even after basic auth works, the actual tool contract negotiation fails. A critical blocker for third-party MCP server adoption.
- **Channel session isolation bugs** (#7609, #7590): Both WeChat and Telegram channels have session/topic routing issues. Messages get misrouted or lost, undermining multi-channel reliability.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-24

## Today's Highlights

The CodeWhale (formerly DeepSeek TUI) project is deep in its v0.9.1 release gate, with a security review blocking tagging. Three critical stop-ship bugs surfaced overnight: a TUI crash on launch (macOS), prompt corruption for large pastes, and a Brazilian keyboard layout conflict. Meanwhile, a major tool sandboxing issue (#4042) was closed after 19 comments, and two fixes landed for background shell archiving and Anthropic adapter input schema sanitization.

## Releases

No new releases in the last 24 hours. The team is holding the v0.9.1 tag pending resolution of 17 open Dependabot alerts (7 high, 10 moderate) tracked in issue #4713.

## Hot Issues

1. **#4716 – TUI: exits immediately on launch ("[Process completed]") [stop-ship]**  
   Fresh Terminal.app on macOS Mac Studio — `codew` returns immediately. The v0.9.1 candidate `0.9.1 (0dfe9170a10e)` is affected. One comment, no root cause identified yet.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4716)

2. **#4719 – Composer: large pasted prompts get byte-corrupted before submission**  
   Multi-line prompts mangled before reaching the model — paths truncated, characters dropped. A downstream agent concluded "the candidate path doesn't exist" from corrupted input. Two comments, confirmed as a stop-ship candidate.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4719)

3. **#4713 – v0.9.1 security gate: deep scan and dependency alert disposition**  
   Release-blocking audit. 17 open Dependabot alerts across `axios`, `body-parser`, `braces`, `express`, `micromatch`, `path-to-regexp`, `send`, `serve-static`, `socket.io`, `ws`. Team must explicitly disposition or patch each. Four comments.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4713)

4. **#4042 – feat: Environment-level tool sandboxing for sub-agents [CLOSED]**  
   Huge 19-comment issue tracking runtime enforcement of tool restrictions across sessions, sub-agents, Fleet workers, and MCP servers. Confirmed `--disallowed-tools` works. Closed after 17 days of discussion.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4042)

5. **#4723 – Windows: AltGr+Q on Brazilian ABNT2 layout opens help overlay**  
   Typing `/` requires `AltGr+Q` on ABNT2. Windows translates this to `Ctrl+Alt+Q`, conflicting with the help shortcut. One comment from the author. Affects Brazilian developers exclusively.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4723)

6. **#4721 – Settings menu audit: catalog remaining legacy/density/labeling issues**  
   Read-only audit for DeepSeek-era assumptions, mislabeled rows, density problems. Targets `crates/tui/src/tui/views/`, `settings.rs`, and config command groups. One comment.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4721)

7. **#4717 – Settings: legacy "DeepSeek fallback model" shown prominently on non-DeepSeek providers**  
   The settings menu shows `deepseek-v4-pro` as fallback even when using `zai/GLM-5.2`. Confusing UX — users see irrelevant fallback for an inactive provider. Zero comments yet.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4717)

8. **#4720 – Provider/model setup and auto-switching feel under-baked**  
   Runtime auto-switched `deepseek → zai` (model `deepseek-v4-pro → GLM-5.2`). The decision flow is opaque. Assess whether switches are surfaced clearly and intentional. One comment.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4720)

9. **#4718 – TUI transcript: information density too high**  
   Every tool card shows repeated "Exact evidence retained · Option+V to inspect" hints. Reasoning states stack ("reasoning live", "reasoning hidden; model is still working", "reasoning · 32s"). Redundant, cluttered transcript. Zero comments.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4718)

10. **#4716 – (duplicate of #4716 above)** — Already listed as #1.  
    [Link](https://github.com/Hmbown/CodeWhale/issues/4716)

## Key PR Progress

1. **#4724 – fix(tui): archive completed background shell output**  
   Author: `qinlinwang`. Archives a background Shell job's final stdout/stderr tail into its originating ExecCell on terminal state. Freezes duration. Cleanly handles live_output cleanup.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4724)

2. **#4346 – fix: sanitize tool input_schema for Anthropic adapter [CLOSED]**  
   Author: `qinlinwang`. Fixes HTTP 400 errors when Anthropic receives `oneOf`/`anyOf`/`allOf` in `input_schema`. Closed after 12 days. Critical for Anthropic provider users.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4346)

3. **#4722 – fix(tui): show complete edit previews in details**  
   Author: `nightt5879`. Keeps compact `edit_file` approval cards bounded; builds full `-/+` search/replace preview lazily in Alt+V details pager. Includes regression tests.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4722)

4. **#4610 – feat(tui): add configurable session token header**  
   Author: `XhesicaFrost`. Opt-in header showing cumulative input, cache-hit, and output token counts. Introduces `tui.header_items` configuration. Still open since July 20.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4610)

5. **#4042 – (PR not listed separately; closed as issue)**  
   The fix for environment-level tool sandboxing is likely merged via another PR.

6. **#4724 – (already listed)**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4724)

7. **#4722 – (already listed)**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4722)

8. **#4610 – (already listed)**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4610)

9. **#4346 – (already listed)**  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4346)

10. **No additional PRs in the last 24h** — only the four listed above were updated.

## Feature Request Trends

- **Token-aware header display**: Users want configurable token counters in the TUI header (via `tui.header_items`). PR #4610 directly addresses this.
- **Sub-agent tool sandboxing**: Strong demand for environment-level restriction enforcement. Issue #4042 (now closed) was one of the most-discussed features this cycle.
- **Multi-provider awareness**: Growing friction about DeepSeek-specific UI elements (e.g., "DeepSeek fallback model") persisting when other providers are active. Users want provider-agnostic settings.
- **Model auto-switch transparency**: Users find runtime provider/model switches opaque. They want clear indicators when/why a switch occurs.
- **Compact transcript UX**: Repeated hints ("Option+V to inspect") and stacked reasoning states are annoying. Users want denser, cleaner transcripts with optional detail expansion.

## Developer Pain Points

- **Release gate friction**: The v0.9.1 release is blocked by 17 Dependabot alerts. Developers are frustrated that security scanning isn't automated earlier in the cycle.
- **Input corruption on paste**: Large multi-line prompts are silently mangled, leading to false agent conclusions. This is a quality-of-life and reliability blocker.
- **Fresh terminal crash**: The TUI exits immediately on macOS without clear error logging. No reproduction steps or root cause yet — a major developer onboarding failure.
- **Keyboard layout conflicts**: AltGr handling on Windows is broken for non-QWERTY layouts (Brazilian ABNT2). Developers on non-Latin/non-US layouts are second-class users.
- **Legacy branding bleed**: "DeepSeek" references persist in settings and labels even when using other providers. This creates confusion and suggests incomplete rebranding.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*