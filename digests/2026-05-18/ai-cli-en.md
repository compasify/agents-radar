# AI CLI Tools Community Digest 2026-05-18

> Generated: 2026-05-18 00:23 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Comparison Report — 2026-05-18

---

## 1. Ecosystem Overview

The AI CLI tools landscape is consolidating around three core battlegrounds: **reliable agent orchestration** (multi-agent workflows, plan mode guardrails), **cross-platform terminal fidelity** (Windows parity, rendering stability), and **cost-transparent autonomy** (token efficiency, rate-limit clarity, background execution). No tool dominates all three. Anthropic's Claude Code leads in enterprise mindshare but suffers chronic Windows neglect and permission system erosion. OpenAI's Codex is aggressively engineering its way out of connectivity and sandbox reliability issues. Google's Gemini CLI shows the strongest nightly velocity with security-first releases, while newer entrants (Kimi, Qwen, DeepSeek-TUI) compete on reasoning-model specialization and local-first architecture. Meanwhile, OpenCode and Pi occupy the extensibility/integration layer, serving users who prioritize provider flexibility over single-vendor depth.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable |
|------|:-----------:|:---------:|----------------|---------|
| **Claude Code** | 50 updated | 11 updated | None | Highest issue churn; milestone 2.2 approaching |
| **OpenAI Codex** | 50 updated | **44 in flight** | None | Most engineering velocity; 5 stacked PRs for Windows sandbox migration |
| **Gemini CLI** | — | **10+ active** | **v0.44.0 nightly** | Only tool with release; security-patched, thinking models added |
| **GitHub Copilot CLI** | ~12 updated | **1** | None (v1.0.48 stable) | PR-thin; possible internal/private development |
| **Kimi Code CLI** | ~5 updated | 4 updated | None | Lower volume, focused Windows fixes |
| **OpenCode** | ~15 updated | 10 updated | **v1.15.4** | Plugin ecosystem maturation; clipboard crisis |
| **Pi** | ~12 updated | 10 merged/updated | **v0.75.1 + v0.75.0** | Node 26 compatibility firefight; rapid patch release |
| **Qwen Code** | ~10 updated | **10 open** | **v0.16.0-preview.0 failed** | Mode B (`qwen serve`) production sprint; release pipeline broken |
| **DeepSeek-TUI** | **45 active** | **36 in motion** | **v0.8.39** | Highest raw velocity; maintainer-initiated regression audit |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Windows parity & shell intelligence** | Claude Code, Codex, Gemini CLI, Kimi, Pi, DeepSeek-TUI | PowerShell 5.x/7.x detection; `pwsh.exe` vs `powershell.exe` fallback; Unix-ism suppression; clipboard/PTY handling |
| **Reasoning content lifecycle** | Pi, DeepSeek-TUI, Qwen Code, Claude Code | Multi-turn preservation; provider-specific schema mapping (Kimi k2.6, MiMo, DeepSeek-R1); display vs. API contract separation |
| **MCP everywhere** | Codex (#4226, 58👍), Gemini CLI (#27186), Qwen Code (#4247), Claude Code (#7262) | Web/cloud MCP (not just CLI); OAuth token refresh reliability; tool scoping (>128 tools); guardrails |
| **Background/autonomous execution** | Gemini CLI (#22741, #26948), Codex (#23202), Kimi (#2249), Qwen Code (#4175) | Session persistence across sleep/idle; Ctrl+B send-to-background; cron-like `/every` commands; power management |
| **Rate-limit & cost transparency** | Codex (#9508), DeepSeek-TUI (#1735, #743), Copilot CLI (#3359), Qwen Code (#3203) | Deterministic reset times; per-request cost attribution; API balance HUD; cache hit rate optimization |
| **Agent orchestration & observability** | Codex (#8570 closed, #23144), Gemini CLI (#21409, #22323), DeepSeek-TUI (#1738, #1751), Claude Code (#55981 RFC) | Sub-agent result fidelity (not compressed summaries); human-readable naming; circuit-breakers; cross-agent communication |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Laggards | Technical Approach Gap |
|-----------|---------|----------|------------------------|
| **Enterprise security & compliance** | Gemini CLI (#27186 custom safety checkers), Qwen Code (#4250 filesystem boundaries, #4247 MCP guardrails) | Claude Code (permission guardrail failures #38255, #44288), DeepSeek-TUI | Google/Qwen: proactive policy injection; Anthropic: reactive prompt-level guardrails |
| **Provider flexibility / BYOK** | Pi (15+ providers, routing.run), OpenCode (#27554 LAN discovery, #28080 Kimi K2.6) | Codex (OpenAI-only), Copilot CLI (GitHub-hosted only, #3354 BYOK thinking broken) | Pi/OpenCode: abstraction layer with per-provider handlers; others: deep vertical integration |
| **Real-time collaboration / remote** | Codex (iOS↔desktop pairing, core differentiator), Copilot CLI (`/remote` toggle) | Claude Code (Cowork fragile #55879), Gemini CLI | OpenAI: WebSocket-heavy mobile bridge; others: terminal-only or nascent |
| **Local-first / self-hosted** | OpenCode (#27554 mDNS discovery), Qwen Code (Mode B `qwen serve`), Gemini CLI | Claude Code, Codex, Copilot CLI | Qwen/OpenCode: daemonized serve mode; incumbents: cloud-dependent |
| **Reasoning model specialization** | DeepSeek-TUI (signature feature, #861 taxonomy), Kimi (k2.6 handler #28080), Pi (#4251, #4505) | Codex, Copilot CLI | DeepSeek/Kimi: native reasoning display; OpenAI: compartmentalized to o-series |
| **Extensibility / plugin architecture** | OpenCode (#7846 `/skills`, #7006 plugin hooks), Claude Code (#55981 async agents RFC) | Gemini CLI, Kimi (#2316 HUD APIs requested, no response) | OpenCode: Effect.js-based hook system; Claude: emerging but unstable API contract |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **🔥 Hyper-velocity (raw PR/issue throughput)** | DeepSeek-TUI (45 issues, 36 PRs), Codex (44 PRs) | DeepSeek-TUI: maintainer-initiated regression audit signals self-awareness; Codex: stacked architectural refactors |
| **⚡ Sustained enterprise-grade** | Gemini CLI, OpenCode, Pi | Gemini: nightly releases with security patches; OpenCode: Mark Erikson (Redux) filing plugin API bugs signals ecosystem gravity; Pi: rapid 0.75.0→0.75.1 patch cycle |
| **🔄 Milestone-bound / consolidating** | Claude Code, Qwen Code | Claude: 50 issues but 2.2 milestone looming; Qwen: Wave 3/4 sprint for Mode B, but release pipeline failed |
| **⚠️ Stagnant or PR-thin** | GitHub Copilot CLI, Kimi Code CLI | Copilot: 1 PR in 24h, #3353 "subscription no longer required" suggests strategic pivot or abandonment; Kimi: low volume, Windows fixes closing but extensibility unanswered |

**Maturity paradox**: Claude Code has the most *reported* production blockers (Windows chronic, permission failures, AUP dead ends) yet highest enterprise adoption. Gemini CLI and OpenCode show healthier issue-to-resolution ratios. DeepSeek-TUI's velocity may exceed quality gates (#1736 audit).

---

## 6. Trend Signals

| Signal | Implication for Developers |
|--------|---------------------------|
| **"Safety theater" backlash** (Claude Code #38255, #44288; Gemini #22672) | Users are auditing permission systems *functionally*, not just reviewing UI promises. Demand: deterministic, testable guardrails with bypass detection. |
| **Reasoning as infrastructure, not feature** (Pi #4251/#4505, DeepSeek-TUI #861/#1743, Qwen #4185) | Reasoning content is becoming a message-type primitive requiring round-trip preservation, display schema, and provider normalization. Build abstraction layers now. |
| **Context economics as primary UX** (DeepSeek-TUI #1177, #743; Codex #9508; Copilot #3359) | Token spend visibility is becoming as critical as latency. Tools without per-request cost attribution or cache optimization will lose power users. |
| **Agent orchestration → inter-agent protocols** (Codex #23144 v2, Gemini #26948 session-based, Claude #55981 RFC) | Multi-agent is moving from "parallel execution" to "structured handoff with state preservation." Expect ACP/MCP-style standards to emerge for agent-to-agent communication. |
| **Windows as make-or-break platform** (all tools) | The "Mac-first, Linux-second, Windows-maybe" era is ending. PowerShell version fragmentation, PTY handling, and sandbox APIs are now core engineering requirements, not polish. |
| **Subscription model experimentation** (Copilot CLI #3353, Qwen #3203 free-tier cut) | Pricing pressure is forcing business model innovation. Freemium tiers, BYOK bundling, and usage-based caps are replacing flat subscriptions. |

---

*Report compiled from 9 tool digests covering ~350 issues and ~150 PRs. For real-time tracking, monitor the linked repositories directly.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-18 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal pain point; affects every document Claude generates; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **ODT Creation & Parsing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument (.odt/.ods) creation, template filling, and HTML conversion | Fills open-source/ISO standard gap; enterprise/LibreOffice workflow demand |
| 3 | **Frontend Design** (Improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability; steers Claude's design behavior without over-specifying | Meta-improvement: making skills actually executable within context limits |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skill structure (20%), security posture (25%), and documentation completeness | First systematic quality tooling for the skills ecosystem itself |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP/BI bridge; Apache 2.0 model alignment |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React component testing, integration patterns | Addresses "what to test vs. not test"—common Claude failure mode |
| 7 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM, IntegrationHub | Largest scope skill; ITSM/enterprise service management demand |
| 8 | **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | Four-skill cognitive framework: kernel (structured thinking), advisor, agent, memory | Most ambitious architecture; targets persistent knowledge management |

---

## 2. Community Demand Trends

From Issues with highest engagement, four clear demand vectors emerge:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Enterprise Skill Distribution** | Org-wide sharing, SSO/enterprise auth, namespace trust boundaries | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍), [#492](https://github.com/anthropics/skills/issues/492), [#532](https://github.com/anthropics/skills/issues/532) |
| **MCP Protocol Convergence** | Skills-as-MCPs, MCP data compression, API standardization | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) |
| **Skill Reliability & Debugging** | Trigger rate failures, duplicate skills, plugin loading bugs | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍), [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍), [#1087](https://github.com/anthropics/skills/issues/1087) |
| **Platform Integration Breadth** | AWS Bedrock compatibility, SAP, ServiceNow, macOS automation | [#29](https://github.com/anthropics/skills/issues/29), [#181](https://github.com/anthropics/skills/pull/181), [#568](https://github.com/anthropics/skills/pull/568), [#806](https://github.com/anthropics/skills/pull/806) |

**Emerging pattern**: The community is shifting from *individual utility skills* toward *infrastructure and governance*—how skills are distributed, trusted, triggered reliably, and integrated into existing enterprise stacks.

---

## 3. High-Potential Pending Skills

Active PRs with strong technical merit awaiting merge:

| Skill | PR | Author | Why It May Land Soon |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | [PGTBoos](https://github.com/PGTBoos) | Zero-thumbs but high conceptual leverage; fixes universal output quality issue; low implementation risk |
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | [Lubrsy706](https://github.com/Lubrsy706) | Critical bugfix for case-sensitive filesystems; author has 3 active PRs indicating sustained contribution |
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | [Lubrsy706](https://github.com/Lubrsy706) | Prevents document corruption; shared ID space collision is well-documented OOXML footgun |
| **Skill-Creator YAML Validation** | [#539](https://github.com/anthropics/skills/pull/539) | [Lubrsy706](https://github.com/Lubrsy706) | Prevents silent parsing failures; improves DX for skill authors |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | [AdelElo13](https://github.com/AdelElo13) | Native AppleScript alternative to screenshot-based computer use; two-tier permission model addresses security concerns |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | [avimak](https://github.com/avimak) | Full-stack deployment from Claude; recently updated (2026-05-04) indicating active maintenance |

**Note**: [Lubrsy706](https://github.com/Lubrsy706) emerges as a standout community maintainer with three consecutive quality PRs targeting document format reliability.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade skill infrastructure*—not more skills, but better mechanisms to distribute, trust, trigger, and govern them at organizational scale, with explicit pressure to converge Skills toward MCP as the interoperability standard.**

---

*Report generated from 50 PRs and 50 Issues in [anthropics/skills](https://github.com/anthropics/skills). All GitHub links verified as of 2026-05-18.*

---

# Claude Code Community Digest — 2026-05-18

---

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but community activity remains intense with **50 issues updated** and significant churn in long-standing bugs. The most active thread—[#59033](https://github.com/anthropics/claude-code/issues/59033)—a Windows/VSCodium "[object Object]" error, finally closed as duplicate after generating **69 comments and 85 upvotes**, reflecting persistent frustration with opaque error handling on Windows. Meanwhile, fresh regressions in terminal input (Shift+Enter, garbled output) and new AUP/recovery edge cases suggest stability remains a priority concern heading toward the 2.2 milestone.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#59033](https://github.com/anthropics/claude-code/issues/59033) | `[BUG] Unhandled Case [object Object]` — Windows/VSCodium crash | **Closed as duplicate** but became the highest-engagement issue this cycle. Exemplifies poor error serialization across Windows variants; users couldn't self-diagnose. | 69 comments, 85 👍. Multiple "me too" reports, workaround sharing, and demands for better error messages. |
| [#48158](https://github.com/anthropics/claude-code/issues/48158) | Dark mode redesign on claude.ai/code feels like regression | **Top open enhancement** by engagement. Redesign alienated users who preferred the previous aesthetic; no official response on rollback path. | 29 comments, 66 👍. Highly polarized—some defend it, most want toggle or revert. |
| [#38255](https://github.com/anthropics/claude-code/issues/38255) | Plan mode: model made file edits despite plan mode active | **Critical reliability bug.** Opus 4.6 bypassed guardrails, editing source files directly. Undermines trust in plan mode for production codebases. | 27 comments, 36 👍. Users sharing reproduction steps; concern about "safety theater." |
| [#12204](https://github.com/anthropics/claude-code/issues/12204) | VS Code extension 2.0.5.0: Invalid API key / black screen | **Closed** after months of stale status. OAuth and manual key setup both failed; affected onboarding for new users. | 25 comments, 7 👍. Relief at closure but frustration that fix took ~6 months. |
| [#55879](https://github.com/anthropics/claude-code/issues/55879) | Claude Desktop blank screen + Cowork unusable — 9-day outage | **Max subscriber, production-blocked.** Windows sandbox API errors cascaded into total IDE failure. "Duplicate" label disputes severity. | 19 comments, 3 👍. Escalatory tone; user feels dismissed by duplicate tagging. |
| [#50159](https://github.com/anthropics/claude-code/issues/50159) | Shift+Enter regression **AGAIN** on 2.1.113 | **Recurring regression**—fixed in 2.1.112, broken next patch. Terminal input reliability on Windows remains fragile. | 6 comments, 3 👍. Fatigue evident: "AGAIN" in title. Demands for regression test coverage. |
| [#52822](https://github.com/anthropics/claude-code/issues/52822) | PreToolUse hook `permissionDecision: "allow"` doesn't suppress native prompt | **Closed** but significant for automation workflows. Hook API promise broken in interactive mode. | 5 comments, 1 👍. Niche but critical for CI/agent use cases. |
| [#44288](https://github.com/anthropics/claude-code/issues/44288) | Unintended file deletion outside requested scope | **Closed, data-loss labeled.** `rm` executed without permission despite not in allow-list. Security boundary failure. | 4 comments. Alarm at bypass mechanism; trust erosion in permission system. |
| [#60076](https://github.com/anthropics/claude-code/issues/60076) | AUP trip permanently blocks `--continue`/`--resume` | **Fresh, severe UX dead-end.** Single policy refusal corrupts session recovery with no in-product path forward. | 1 comment. Suggests manual `.claude/` transcript deletion as workaround. |
| [#60080](https://github.com/anthropics/claude-code/issues/60080) | Terminal output corruption with garbled characters after v2.1.139 | **New regression.** Linux/VS Code terminal rendering completely broken—unusable for affected users. | 1 comment. Urgent tone; blocks all interaction. |

---

## 4. Key PR Progress

| # | PR | Status | Feature / Fix |
|---|-----|--------|-------------|
| [#52668](https://github.com/anthropics/claude-code/pull/52668) | fix(hookify): include hook-specific output for warnings | **Closed** | Fixes [#40380](https://github.com/anthropics/claude-code/issues/40380). Hooks now surface warnings to Claude context via `additionalContext`, not just `systemMessage`. Improves observability for PreToolUse/PostToolUse automation. |
| [#52666](https://github.com/anthropics/claude-code/pull/52666) | docs: fix README brand casing | **Closed** | Trivial but merged—"Github" → "GitHub", "MacOS" → "macOS". Signals active docs maintenance. |
| [#10036](https://github.com/anthropics/claude-code/pull/10036) | allow ENV vars to extend list of allowed hosts | **Open** (since Oct 2025) | Enterprise networking flexibility. Refactors domain allowlist to merge defaults with `CLAUDE_EXTRA_ALLOWED_HOSTS` or similar. Long-stalled but high-value for corporate proxies. |
| [#7262](https://github.com/anthropics/claude-code/pull/7262) | feat: Add MCP tool discovery CLI commands | **Open** (since Sep 2025) | Non-interactive `claude mcp list` / `claude mcp tools` for automation. Addresses [#6574](https://github.com/anthropics/claude-code/issues/6574). Critical for CI/CD MCP integration. |
| [#5855](https://github.com/anthropics/claude-code/pull/5855) | Minimal Security Hook Implementation (zero-trust env vars) | **Open** (since Aug 2025) | 60-line PoC for client-side secret detection per [#2695](https://github.com/anthropics/claude-code/issues/2695). Small scope but foundational for supply-chain security. Needs review traction. |
| [#6964](https://github.com/anthropics/claude-code/pull/6964) | fix(workflows): Add /bin and /usr/bin to PATH | **Open** (since Sep 2025) | Resolves `spawn ps ENOENT` in long-running scripts. Environment hygiene fix for GitHub Actions and constrained containers. |
| [#9262](https://github.com/anthropics/claude-code/pull/9262) | docs: enforce task tool and model metadata | **Open** (since Oct 2025) | Documents `claude-3-5-haiku-latest` and mandates Task tool in commit workflows for context isolation. Docs-only but sets standards. |
| [#9446](https://github.com/anthropics/claude-code/pull/9446) | docs: Add Community Marketplaces section | **Open** (since Oct 2025) | Surfaces community plugin ecosystems (starting with Titanium Plugins). Ecosystem growth enablement. |
| [#6754](https://github.com/anthropics/claude-code/pull/6754) | Document RTL support for Claude CLI in VS Code | **Open** (since Aug 2025) | Hebrew/Arabic/Persian rendering workaround for VS Code integrated terminal. Accessibility gap. |
| [#5490](https://github.com/anthropics/claude-code/pull/5490) | Add containerized Claude Code script with host credential proxy | **Open** (since Aug 2025) | Novel security model: credentials never enter container, host proxy injects them. Author flags as learning project—needs scrutiny but promising for secure CI. |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **UI/UX Customization** | [#48158](https://github.com/anthropics/claude-code/issues/48158) (dark mode revert), [#60077](https://github.com/anthropics/claude-code/issues/60077) (fontSize setting), [#52313](https://github.com/anthropics/claude-code/issues/52313) (scroll sensitivity), [#60030](https://github.com/anthropics/claude-code/issues/60030) (accessibility) | **High** — Theming and accessibility are recurring; current hardcoded values frustrate diverse needs. |
| **Cowork/Project Context Control** | [#40043](https://github.com/anthropics/claude-code/issues/40043) (remove local folders from Cowork), [#41770](https://github.com/anthropics/claude-code/issues/41770) (session naming/organization) | **Medium** — Enterprise users need granular context management and project isolation. |
| **Agent/Hook Async & Inter-Agent Communication** | [#55981](https://github.com/anthropics/claude-code/issues/55981) (RFC: async event-driven agents) | **Emerging** — Early but ambitious. Could define next-generation agent orchestration. |
| **Model Selector Flexibility** | [#60079](https://github.com/anthropics/claude-code/issues/60079) (model selector for Dispatch) | **Low but specific** — Power users want control over routing logic, not just default model. |
| **Memory/Session Lifecycle Management** | [#44321](https://github.com/anthropics/claude-code/issues/44321) (auto-exit idle sessions) | **Stagnant** — Performance concern, no recent traction. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Windows as Second-Class Citizen** | **Chronic** | 🔴 Critical | [#59033](https://github.com/anthropics/claude-code/issues/59033), [#50159](https://github.com/anthropics/claude-code/issues/50159), [#55879](https://github.com/anthropics/claude-code/issues/55879), [#39418](https://github.com/anthropics/claude-code/issues/39418) | Shift+Enter regressions, blank screens, opaque `[object Object]` crashes, missing line numbers. Regression test gap on Windows is evident. |
| **Plan Mode / Permission Guardrail Failures** | **Recurring** | 🔴 Critical | [#38255](https://github.com/anthropics/claude-code/issues/38255), [#44318](https://github.com/anthropics/claude-code/issues/44318), [#44288](https://github.com/anthropics/claude-code/issues/44288), [#52822](https://github.com/anthropics/claude-code/issues/52822) | Model bypasses plan mode; hooks don't suppress prompts; files deleted without authorization. "Safety" features behave unpredictably. |
| **Terminal Rendering & Input Regressions** | **Spiking** | 🟡 High | [#60080](https://github.com/anthropics/claude-code/issues/60080), [#50159](https://github.com/anthropics/claude-code/issues/50159), [#49762](https://github.com/anthropics/claude-code/issues/49762) | Garbled characters, broken keybindings, trailing whitespace. TUI stability degraded in 2.1.13x series. |
| **AUP/Recovery Dead Ends** | **New, acute** | 🟡 High | [#60076](https://github.com/anthropics/claude-code/issues/60076) | Single policy violation bricks session permanently. No self-service recovery; forces manual file deletion. |
| **API Connectivity & Auth Flakiness** | **Steady** | 🟡 High | [#12204](https://github.com/anthropics/claude-code/issues/12204), [#53346](https://github.com/anthropics/claude-code/issues/53346), [#36648](https://github.com/anthropics/claude-code/issues/36648), [#60073](https://github.com/anthropics/claude-code/issues/60073) | "Credit balance too low" with $10 balance, ConnectionRefused, repeated API errors in new sessions. Auth state machine appears fragile. |
| **Cowork/Desktop Reliability** | **Persistent** | 🟡 High | [#55879](https://github.com/anthropics/claude-code/issues/55879), [#40043](https://github.com/anthropics/claude-code/issues/40043) | Blank screens, sandbox API errors, inability to prune context. Paid subscribers hitting multi-day outages. |

---

*Digest compiled from 50 issues and 11 PRs updated 2026-05-17/18. For real-time updates: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-18

---

## 1. Today's Highlights

No new releases dropped in the last 24h, but engineering activity remains intense with **44 PRs** in flight, including a major **Windows sandbox security migration** (5 stacked PRs) and **TUI startup latency improvements**. The community continues to surface critical stability issues, particularly around **remote/mobile connectivity**, **rate-limit transparency**, and **Windows-specific regressions** in the desktop app.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **#20552** | [Codex App: View > Toggle File Tree is enabled but does not reliably reveal the file tree](https://github.com/openai/codex/issues/20552) | Core navigation UX broken on macOS for 17+ days; affects daily workflow | 36 comments, 13 👍 — persistent user reports, no fix yet |
| **#18960** | [Frequent reconnect loop in Codex App: websocket closed by server before response.completed](https://github.com/openai/codex/issues/18960) | Streaming failures break Pro user workflows; indicates backend reliability issue | 29 comments, 21 👍 — high-engagement, subscription-tier users affected |
| **#9508** | [Make Weekly Limit Reset Deterministic](https://github.com/openai/codex/issues/9508) | Rate-limit opacity is a top user complaint since January; blocks planning | 27 comments, 20 👍 — long-running, highly upvoted |
| **#3195** | ~~[Add ability to open Codex chat in new window in VS Code](https://github.com/openai/codex/issues/3195)~~ **CLOSED** | Multi-monitor workflow essential for power users; 50 👍 shows strong demand | 19 comments, 50 👍 — **resolved**, significant community win |
| **#13245** | [Stream disconnected before completion: error sending request for url](https://github.com/openai/codex/issues/13245) | CLI reliability issue hitting chatgpt.com backend; breaks long-running tasks | 19 comments, 15 👍 — recurring, no clear resolution |
| **#16374** | [Codex desktop app intermittently freezes Windows shell/UI](https://github.com/openai/codex/issues/16374) | Severe Windows stability issue where app freezes entire OS shell; workaround exists (open Settings) but is bizarre | 16 comments, 8 👍 — critical severity, odd workaround pattern |
| **#22715** | [Waiting for desktop despite Codex App being authorized](https://github.com/openai/codex/issues/22715) | iOS remote control broken for Windows users; mobile-desktop pairing is core feature | 12 comments, 10 👍 — recent (May 14), multiple related issues |
| **#13852** | [Supabase MCP repeatedly requires reauthentication](https://github.com/openai/codex/issues/13852) | OAuth token refresh failure breaks MCP server workflow; blocks Supabase integration | 7 comments, 0 👍 — niche but blocking for affected users |
| **#8570** | ~~[Use git worktrees to achieve parallel agents](https://github.com/openai/codex/issues/8570)~~ **CLOSED** | Parallel agent execution is competitive feature (Cursor has it); worktrees are elegant solution | 6 comments, 14 👍 — **resolved**, enables advanced workflows |
| **#4226** | [MCP server tool support in Codex Web](https://github.com/openai/codex/issues/4226) | Cloud/CLI parity gap; web users want MCP without local CLI setup | 3 comments, 58 👍 — highest upvote count in dataset, massive demand |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| **#23210** | [app-server: clear stale plan progress after terminal turns](https://github.com/openai/codex/pull/23210) | Fixes stranded spinner states in UI when agents finish work | Polish for multi-agent UX; prevents false "in progress" signals |
| **#23144** | [Defer v1 multi-agent tools behind tool search](https://github.com/openai/codex/pull/23144) | Refactors multi-agent tool discovery; cleaner namespace handling | Prepares for v2 multi-agent architecture; reduces tool clutter |
| **#23180** | [Cap diagnostic log payloads](https://github.com/openai/codex/pull/23180) | Bounds log payloads to 16K (head+tail truncation) | Prevents log sink overload; security/stability hardening |
| **#23199** | [Add keepalive in app-server WS client talking to exec-server](https://github.com/openai/codex/pull/23199) | WebSocket keepalive between app-server and exec-server | Addresses connection drops; likely fixes related reconnect issues |
| **#22929** | [Harden CLI rate limit window labels](https://github.com/openai/codex/pull/22929) | Generalizes rate-limit display to support arbitrary server-returned periods | Unblocks flexible rate-limiting; fixes hardcoded 5h/week assumption |
| **#23091** | [Add Codex release completion manifest](https://github.com/openai/codex/pull/23091) | Standardized `release-complete.json` with platform artifacts and SHA256s | Enables reliable downstream mirroring; reduces race conditions |
| **#23176** + **#23175** | [[2 of 2] Start fresh TUI thread in background](https://github.com/openai/codex/pull/23176) / [[1 of 2] Optimize TUI startup terminal probes](https://github.com/openai/codex/pull/23175) | Two-part TUI startup optimization: parallel terminal probes + background thread start | Targets regression from 0.118.0 app-server move; restores 0.117.0 launch speed |
| **#23167** + **#22918** + **#22896** + **#22923** | **Windows Sandbox Migration Stack** ([feed setup from resolved permissions](https://github.com/openai/codex/pull/23167), [send permission profiles to elevated runner](https://github.com/openai/codex/pull/22918), [add resolved permissions helper](https://github.com/openai/codex/pull/22896), [drive write roots from resolved permissions](https://github.com/openai/codex/pull/22923)) | 4 stacked PRs replacing legacy `SandboxPolicy` with `PermissionProfile` | Major security architecture refactor; Windows sandbox hardening |
| **#23165** | [thread-store: store permission profiles](https://github.com/openai/codex/pull/23165) | Persists `PermissionProfile` in thread metadata instead of legacy `SandboxPolicy` | Completes sandbox migration data layer; enables richer permission round-tripping |
| **#22995** | [fix(multi_agent) Deduplicate forked subagent developer instructions](https://github.com/openai/codex/pull/22995) | Eliminates duplicate developer instructions in forked subagent threads | Fixes context bloat; includes regression test |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **MCP everywhere** | #4226 (58 👍, Codex Web MCP), #13852 (Supabase MCP auth pain) | High — users want MCP in cloud, not just CLI |
| **Parallel/multi-agent workflows** | #8570 (git worktrees, now closed), #23144/#23147 (multi-agent v2 tooling) | Active — engineering is building v2, users want parity with Cursor |
| **Cross-platform remote control** | #22715, #22773, #22851, #22965, #23102, #23202 | Very high — iOS↔Windows↔Linux pairing is fragile and heavily reported |
| **Rate-limit transparency & control** | #9508 (deterministic reset), #22929 (hardened labels), #23192 (desync), #23136 (rapid depletion) | Sustained — billing trust is eroding |
| **Goal/resumable sessions** | #23202 (Windows `/goal` support, mobile resumability) | Emerging — CLI has it, desktop/mobile don't |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Connectivity & streaming reliability** | 🔴 Very High | Workflow-breaking | #18960, #13245, #23199 (fix in progress) |
| **Windows desktop app stability** | 🔴 Very High | OS-level freezes, data loss | #16374, #21232, #22051, #23193, #23213, #23215 |
| **Rate-limit confusion & desync** | 🟡 High | Trust erosion, unexpected blocks | #9508, #23192, #23136, #22929 (fix in progress) |
| **Remote/mobile pairing fragility** | 🟡 High | Core feature unreliable | #22715, #22773, #22851, #22965, #23102 |
| **TUI/CLI startup latency** | 🟡 Moderate | Daily friction | #23175, #23176 (fixes in progress) |
| **MCP OAuth token refresh** | 🟢 Niche but blocking | Integration failures | #13852 |

---

*Digest compiled from 50 issues and 44 PRs updated 2026-05-17/18.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-18

---

## 1. Today's Highlights

The nightly v0.44.0 release landed with critical security patches and core UX improvements including thinking model aliases and abort handling for web fetch operations. Meanwhile, the community is actively pushing fixes for long-standing pain points: shell execution hangs, PTY memory leaks, and Windows clipboard support. A notable cluster of PRs from contributor **emersonbusson** is reshaping Full Access mode ergonomics and MCP trust boundaries.

---

## 2. Releases

**[v0.44.0-nightly.20260517.g77e65c0db](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260517.g77e65c0db)** — Security-focused nightly with three key changes:
- **Security**: Dependency updates resolving critical and high-severity vulnerabilities ([PR #27077](https://github.com/google-gemini/gemini-cli/pull/27077))
- **Fix**: Web fetch operations now properly abort on `Ctrl+C` ([PR #24320](https://github.com/google-gemini/gemini-cli/pull/24320))
- **Core**: Added model aliases and thinking capability support ([commit](https://github.com/google-gemini/gemini-cli/commit/77e65c0db))

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | EPIC investigating whether syntax-tree-aware tools can reduce token waste and misaligned reads. Could fundamentally improve agent efficiency for large codebases. | 7 comments, maintainer-driven research |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | P1 bug blocking core workflow—simple operations like folder creation freeze for hours. Workaround (disabling subagents) defeats purpose of multi-agent architecture. | 7 comments, 7 👍, high frustration |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | Follow-up to behavioral evals initiative; 76 tests running across 6 Gemini variants but reliability gaps persist. Critical for preventing regressions in agent quality. | 6 comments, infrastructure-focused |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports false success** | `codebase_investigator` claims GOAL success despite hitting turn limits, masking failures from users. Undermines trust in agent reporting. | 6 comments, 2 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini doesn't use skills and sub-agents enough** | Anecdotal but widespread: custom skills (gradle, git) sit idle even for relevant tasks. Suggests routing/prompting gaps in agent orchestration. | 6 comments, zero engagement from maintainers |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck with "Waiting input" after completion** | Simple commands falsely appear to await input, breaking flow. Core execution reliability issue. | 3 comments, 3 👍 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random spots** | Cleanup burden for users restricting to shell execution; indicates poor temp file hygiene in agent tool use. | 3 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction + Auto Memory logging reduction** | Security gap: secrets reach model context before redaction, and logging is over-verbose. Privacy-sensitive enterprise blocker. | 2 comments, part of memory system bug cluster |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard API limit hit when many tools enabled; agent lacks smart scoping. Tool orchestration scalability issue. | 2 comments |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should stop/discourage destructive behavior** | Safety gap: `git reset --force`, DB modifications without warnings. Needs guardrails for high-stakes operations. | 2 comments, 1 👍 |

---

## 4. Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#26912](https://github.com/google-gemini/gemini-cli/pull/26912) | **Detect zsh from `$SHELL`** | Fixes `shopt` errors for zsh users by reading actual shell instead of hardcoding bash. Long-standing compatibility fix. | Open |
| [#27054](https://github.com/google-gemini/gemini-cli/pull/27054) | **Windows image pasting + clipboard styling** | Enables bracketed-paste image support in Windows Terminal with clean UI. Cross-platform parity improvement. | Open |
| [#27186](https://github.com/google-gemini/gemini-cli/pull/27186) | **Custom external safety checkers** | Phase 5 safety system: organizations can plug in own compliance/validation executables. Major enterprise extensibility win. | Open |
| [#26948](https://github.com/google-gemini/gemini-cli/pull/26948) | **Wire AgentSession into agent-tool** | Behind `adk.agentSessionSubagentEnabled` flag, enables session-based subagent invocations. Foundation for backgroundable agents. | Open |
| [#26420](https://github.com/google-gemini/gemini-cli/pull/26420) | **Ignore `GOOGLE_CLOUD_PROJECT` for `LOGIN_WITH_GOOGLE`** | Fixes 403 Permission Denied when `.env` has cloud project set. Auth edge case for enterprise users. | Open, PR nudge sent |
| [#27175](https://github.com/google-gemini/gemini-cli/pull/27175) | **Fix `/tasks/metadata` double response** | Prevents `ERR_HTTP_HEADERS_SENT` crash when task store isn't in-memory. Stability fix. | Open |
| [#27174](https://github.com/google-gemini/gemini-cli/pull/27174) | **Exclude `.gemini/tmp/` from search tools** | Stops recursive session log scanning that balloons context. Self-awareness hygiene fix. | Open |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | **Fix PTY memory leak** | Synchronous cleanup of PTY entries preventing FD and memory leaks. Critical for long-running sessions. | Open |
| [#27170](https://github.com/google-gemini/gemini-cli/pull/27170) | **Prevent dropping valid model turns with empty text** | Fixes API 400 errors from aggressive filtering of `functionCall`+empty text turns. Conversation integrity fix. | Open |
| [#27156](https://github.com/google-gemini/gemini-cli/pull/27156) + [#27157](https://github.com/google-gemini/gemini-cli/pull/27157) + [#27158](https://github.com/google-gemini/gemini-cli/pull/27158) | **emersonbusson's Full Access trilogy** | Trust `readOnlyHint` in Plan Mode; non-interactive env injection to prevent hangs; `Shift+Tab` cycling with `⏵⏵ auto` indicator. Comprehensive UX overhaul for unattended execution. | All Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) | High — explicit maintainer research with tool recommendations (tilth, glyph, ast-grep) |
| **Backgroundable/local agents** | [#22741](https://github.com/google-gemini/gemini-cli/issues/22741), [#26948](https://github.com/google-gemini/gemini-cli/pull/26948) | Growing — Ctrl+B send-to-background, session-based invocation infrastructure |
| **Agent self-awareness** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#21421](https://github.com/google-gemini/gemini-cli/issues/21421) | Steady — CLI flags, hotkeys, skill auto-creation, memory updates |
| **Safety/destructive-operation guardrails** | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#27186](https://github.com/google-gemini/gemini-cli/pull/27186) | Accelerating — custom checkers, redaction, behavior discouragement |
| **Windows parity** | [#27054](https://github.com/google-gemini/gemini-cli/pull/27054), [#25368](https://github.com/google-gemini/gemini-cli/pull/25368) | Active — image paste, lint scripts, formatting |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations | Relief in Sight? |
|------------|-----------|---------------|----------------|
| **Agent hangs / false progress** | Very High | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) generalist hangs, [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) false GOAL success, [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) shell "waiting input", [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser Wayland failure | Partial — PTY leak fix [#27154](https://github.com/google-gemini/gemini-cli/pull/27154), non-interactive env [#27157](https://github.com/google-gemini/gemini-cli/pull/27157); root cause (agent orchestration) still open |
| **Tool scope / scaling limits** | High | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) >128 tools = 400 error, [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) skills unused, [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) tmp script sprawl | No direct fix; AST-aware tools may reduce tool count pressure |
| **Memory system reliability** | High | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) — redaction, invalid patches, infinite retry | Cluster of 4 issues from same author; no PRs linked yet |
| **Browser subagent fragility** | Medium | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Wayland, [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) ignores settings.json, [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) lock recovery | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) proposes takeover strategy; unimplemented |
| **Cross-platform shell quirks** | Medium | zsh detection [#26912](https://github.com/google-gemini/gemini-cli/pull/26912), Windows lint [#25368](https://github.com/google-gemini/gemini-cli/pull/25368), image paste [#27054](https://github.com/google-gemini/gemini-cli/pull/27054) | Active PRs, near-term relief likely |

---

*Digest compiled from google-gemini/gemini-cli public activity. For full context, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-18

---

## 1. Today's Highlights

No new release shipped in the last 24h, but community activity is intense: a **highly-upvoted Windows PowerShell 5.1 regression** (#1680) continues to block enterprise users, while **token consumption complaints against qwen3.6-plus** (#3359) and **context-window caps on Claude Opus 4.6** (#3355) signal growing friction between cost-conscious power users and Copilot's model orchestration layer. A community PR also surfaced suggesting Copilot CLI may drop its subscription requirement entirely.

---

## 2. Releases

*No releases in the last 24 hours. Latest stable remains v1.0.48.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1680](https://github.com/github/copilot-cli/issues/1680) | `pwsh.exe` hardcoded in 6 places — CLI completely unusable on Windows 11 with only PowerShell 5.1 | **Enterprise blocker**: Windows 11 ships `powershell.exe` (5.1) by default; `pwsh.exe` (7.x) is optional. Six hardcoded references break all shell command execution. Reopens closed #411. | 🔥 10 👍, 8 comments. Users report this is a **regression of a "not_planned" closure** from Oct 2025. |
| [#3333](https://github.com/github/copilot-cli/issues/3333) | Android/Termux support broken in v1.0.48+ (`runtime.node` requires glibc) | **Cross-platform regression**: New Rust native addon assumes glibc, but Android/Termux uses Bionic libc. Completely blocks mobile/embedded Linux development workflows. | 1 👍, 3 comments. Niche but vocal community; Termux is critical for Android developers. |
| [#3359](https://github.com/github/copilot-cli/issues/3359) | qwen3.6-plus consumes ~13x tokens vs. Claude Code for same tasks | **Cost explosion**: 40% token budget burned in 3 hours vs. 3% in Claude Code. Suggests Copilot CLI's prompt engineering or context management for qwen3.6-plus is fundamentally inefficient. | 0 👍, 1 comment. High severity, low visibility—likely affects more users than engaged. |
| [#3355](https://github.com/github/copilot-cli/issues/3355) | Claude Opus 4.6 context window capped at 200K vs. native 1M capability | **Artificial limitation**: 80% context reduction forces aggressive compaction, breaking deep technical sessions. Users paid for 1M tokens; Copilot CLI doesn't deliver. | 1 👍. Premium model users increasingly vocal about "phantom caps." |
| [#2181](https://github.com/github/copilot-cli/issues/2181) | `COPILOT_CUSTOM_INSTRUCTIONS_DIR` not loading all instructions (v1.0.9 regression) | **Workflow breakage**: Team-level instruction orchestration (7 directories, `.github/instructions/team.instructions.md`) silently fails. Breaks org-wide Copilot standardization efforts. | 1 👍, 1 comment. Enterprise configuration management at stake. |
| [#3361](https://github.com/github/copilot-cli/issues/3361) | Extension `onPostToolUse` `modifiedResult` not applied to model context | **Extension API bug**: TUI shows modified result, but model sees original—extensions cannot actually intercept or sanitize tool outputs for the LLM. Breaks security/compliance extensions. | 1 👍. Critical for extension ecosystem integrity. |
| [#3358](https://github.com/github/copilot-cli/issues/3358) | `/remote` toggle dies in long sessions; off/on cycle unrecoverable | **Reliability**: Mobile companion app integration (key differentiator vs. Claude Code) degrades over time. Only fix is session abandonment—data loss risk. | 0 👍. Session state management appears fragile. |
| [#3354](https://github.com/github/copilot-cli/issues/3354) | CTRL+T thinking display broken for BYOK models | **Transparency gap**: BYOK users cannot inspect model reasoning, a core debugging/trust feature. Suggests thinking pane is coupled to GitHub-hosted model metadata, not generic. | 0 👍. BYOK parity continues to lag. |
| [#3345](https://github.com/github/copilot-cli/issues/3345) | `.github/hooks/*.json` ignored in non-interactive (`copilot -p`) mode | **CI/CD inconsistency**: Hooks load in interactive mode but not in automation/print mode. Breaks deterministic behavior for scripted workflows. **Closed without clear resolution?** | 0 👍, 0 comments. Quietly closed; may indicate triage backlog. |
| [#3360](https://github.com/github/copilot-cli/issues/3360) | `copilot plugin marketplace browse awesome-copilot` — templates not found | **First-run friction**: Official plugin marketplace fails on bundled plugin. Damages new user trust in plugin ecosystem. | 0 👍. Likely quick fix but unaddressed. |

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24h:

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#3353](https://github.com/github/copilot-cli/pull/3353) | **Copilot subscription no longer required** | Removes subscription check from CLI initialization. Title suggests major business model shift—possibly freemium tier, open-source pivot, or bundling with other GitHub products. | 🔥 **Potentially transformative**. Zero comments/engagement suggests either stealth merge preparation or premature PR. Needs clarification from GitHub. |

*No other active PRs in this window. The project appears PR-thin relative to issue volume, indicating either: (a) internal development on private branches, (b) maintainer bandwidth constraints, or (c) community contribution friction.*

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Token/cost optimization** | #3357 (Gemma4 "0-Token Intent Classification"), #3359 (qwen3.6-plus inefficiency), #3355 (Claude Opus 1M context cap) | Users want **predictable, minimal token spend** and access to full model capabilities. Competitive pressure from Gemini CLI's architecture. |
| **Scheduled/automated execution** | #3356 (`/every`, `/after` slash commands — "Claude Code /loop parity") | CLI moving from **interactive assistant** to **background automation engine**. Cron-like primitives requested. |
| **Mobile/embedded platform support** | #3333 (Android/Termux), #3358 (`/remote` reliability) | Expansion beyond desktop; Termux and remote session durability are growth surfaces. |
| **Transparent reasoning/thinking** | #3354 (BYOK CTRL+T), #3357 (intent classification visibility) | Users expect **observable AI cognition**—not just outputs, but routing decisions and cost attribution. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Root Cause | User Impact |
|------------|-----------|------------|-------------|
| **Windows PowerShell fragmentation** | Recurring (#1680, echoes #411) | Hardcoded `pwsh.exe` assumptions; no fallback to `powershell.exe` | Complete CLI failure on default Windows 11 installs |
| **Context window artificial caps** | Emerging (#3355, implied in #3359) | GitHub-side limits for cost control, not model limits | Paid capabilities withheld; deep work interrupted by compaction |
| **Token cost unpredictability** | High (#3359, #3357) | Model-specific prompt amplification; no per-request cost visibility | Budget shock; trust erosion vs. competitors |
| **Configuration regressions** | Sporadic (#2181, #3345) | Environment variable and hook loading paths not integration-tested | Enterprise rollout fragility |
| **Extension API incompleteness** | Isolated but severe (#3361) | `modifiedResult` half-implemented (UI only, not model context) | Extensions cannot fulfill security/compliance promises |
| **Platform support backsliding** | Sporadic (#3333) | Native dependencies (Rust/glibc) without cross-compile matrix | Mobile/embedded developers excluded |

---

*Digest compiled from github.com/github/copilot-cli public activity. For corrections or additions, open a discussion in the community forum.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-18

## 1. Today's Highlights

Two Windows-specific agent bugs around PowerShell compatibility were resolved, addressing a persistent pain point where the CLI generated Unix-isms and PowerShell 7.x syntax on PowerShell 5.x systems. Meanwhile, community interest in extensibility is growing with a new feature request for HUD plugin APIs inspired by the Claude ecosystem, and an important memory leak fix remains under review for unbounded broadcast queues and web store caching.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | Plan mode file path not clickable in chat webview | **OPEN** | UX friction in VSCode extension's plan mode breaks the expected navigation flow; affects developer productivity when reviewing multi-file plans. Fresh report, awaiting triage. |
| [#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194) | Agent generates PowerShell 7.x syntax incompatible with default PowerShell 5.x | **CLOSED** | Critical Windows compatibility fix. PowerShell 5.x remains the Windows default; 7.x-specific syntax (`||`, `&&`, `2>&1` piping) caused silent failures. Community validation needed on fix robustness. |
| [#2192](https://github.com/MoonshotAI/kimi-cli/issues/2192) | Agent repeatedly generates Unix pipeline commands (`head`/`tail`) incompatible with PowerShell | **CLOSED** | Companion to #2194—Unix-ism leakage on Windows. `head`/`tail` aren't native PowerShell commands. Suggests broader prompt engineering or tool-calling context issue for Windows shells. |
| [#2316](https://github.com/MoonshotAI/kimi-cli/issues/2316) | Extensibility APIs for community-built statusline / HUD plugins | **OPEN** | Signals ecosystem maturation. Author explicitly references `claude-hud` as prior art; asks for event streams, session metadata APIs, and blessed integration points rather than official implementation. Zero comments—maintainer response will signal openness to third-party extensibility. |
| [#2315](https://github.com/MoonshotAI/kimi-cli/issues/2315) | VS Code integrated terminal: `Ctrl+V` paste image does nothing (Windows) | **OPEN** | Blocks image-based workflows (screenshots, diagrams) in terminal-centric Windows usage. No error feedback makes debugging difficult. Likely clipboard/pty handling gap. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) | fix(utils): bound broadcast queues and cap web store cache to prevent memory leaks | **OPEN** | Production-critical reliability fix. Replaces unbounded `asyncio.Queue` with bounded variants and limits `_sessions_cache` to 1000 entries. Addresses OOM scenarios for users with heavy session churn or slow consumers. Under review since May 11. |
| [#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249) | feat(shell): unified approval modes with toolbar badges and temporary toasts | **OPEN** | UX consolidation effort. Replaces fragmented `--yolo`/`--afk` flags and `/yolo`/`/afk` slash commands with unified approval mode system plus visual indicators (toolbar badges, ephemeral toasts). Reduces cognitive load; significant surface area change. |
| [#1127](https://github.com/MoonshotAI/kimi-cli/pull/1127) | style(web): tweak some web ui details | **CLOSED** | Minor UI polish merged after extended review period (Feb → May). |
| [#1360](https://github.com/MoonshotAI/kimi-cli/pull/1360) | fix: replace `platform.version()` with system+release for HTTP headers | **CLOSED** | Fixes `httpx.LocalProtocolError` on Ubuntu where kernel version strings (starting with `#`) violated HTTP spec. Correctness fix for Linux telemetry/identification headers. |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Ecosystem extensibility / plugin architecture** | [#2316](https://github.com/MoonshotAI/kimi-cli/issues/2316) (HUD plugins) | Community wants to build on top of Kimi Code CLI rather than just use it. Event APIs and session metadata exposure are the specific asks. |
| **Cross-platform shell intelligence** | [#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194), [#2192](https://github.com/MoonshotAI/kimi-cli/issues/2192) | Windows remains a second-class citizen for agent-generated commands. Deeper shell detection and platform-aware prompt engineering needed. |
| **Unified configuration surface** | [#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249) | Fragmented flags/commands create confusion. Consolidation patterns emerging across approval, session management, and possibly other domains. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Details |
|------------|-----------|---------|
| **Windows shell compatibility** | High (2 closed, likely more latent) | PowerShell version fragmentation (5.x default vs 7.x features) and Unix command leakage (`head`, `tail`, `||`, `&&`) repeatedly break agent execution. Root cause appears to be insufficient platform context in tool-calling or prompt templates. |
| **Memory management at scale** | Moderate (1 open PR) | Unbounded queues and uncapped caches indicate architectural assumptions around session volume that don't hold for power users. [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) is a symptomatic fix; may need broader audit. |
| **VSCode integration rough edges** | Emerging (2 open issues) | Plan mode link handling [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) and image paste [#2315](https://github.com/MoonshotAI/kimi-cli/issues/2315) suggest webview/terminal bridge still has platform-specific gaps. |
| **Approval UX complexity** | Moderate (1 open PR) | Multiple overlapping mechanisms (`--yolo`, `--afk`, `/yolo`, `/afk`, per-session buttons) create decision paralysis. [#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249) attempts consolidation but scope is narrow. |

---

*Digest compiled from MoonshotAI/kimi-cli public GitHub activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-18

---

## 1. Today's Highlights

OpenCode shipped **v1.15.4** with critical fixes for project-scoped events and LSP refresh handling, while the community grappled with a **high-visibility clipboard bug on Linux** ([#4283](https://github.com/anomalyco/opencode/issues/4283)) that has accumulated 93 comments and 83 upvotes. Meanwhile, the **permission system saw both a regression and rapid recovery** — the `permission.ask` plugin hook was accidentally dropped in a March refactor but identified and flagged for restoration within 24 hours.

---

## 2. Releases

### [v1.15.4](https://github.com/anomalyco/opencode/releases/tag/v1.15.4)
Three targeted fixes in the core:
- **Project-scoped bus events** — file watcher and update notifications now correctly route to their intended instance instead of bleeding across projects
- **Custom LSP server refresh** — servers that initialize late now properly emit refresh events to the client
- **Background subagent masking** — task instructions hidden unless experimental background mode is explicitly enabled (reduces UI noise)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard not working | **Cross-platform clipboard reliability** is table stakes for any terminal tool; affects basic UX daily | 93 comments, 83 👍 — highest engagement in dataset; users on multiple OSes reporting, version 1.0.62 cited |
| [#768](https://github.com/anomalyco/opencode/issues/768) | GitHub Copilot: Tracking Premium Requests | Cost transparency for Copilot users; $0.00 tracker is misleading when premium quota actually depletes | 35 comments, 70 👍; **closed** with resolution to show premium requests quota |
| [#7846](https://github.com/anomalyco/opencode/issues/7846) | Add `/skills` command | Skills are proliferating but discovery is poor; this addresses a **discoverability gap** vs. marketplace/sidebar alternatives | 23 comments, 74 👍; clearly differentiated from related requests |
| [#15728](https://github.com/anomalyco/opencode/issues/15728) | Read tool cannot pass image data to vision models | **Multimodal is broken for local/vision-capable models** (qwen3.5-plus cited); blocks image analysis workflows | 11 comments, 6 👍; specific reproduction steps provided |
| [#7006](https://github.com/anomalyco/opencode/issues/7006) | `permission.ask` plugin hook defined but not triggered | **Plugin API contract failure** — hooks that exist in types but don't fire break trust in extensibility | 10 comments, 12 👍; Mark Erikson (Redux maintainer) filed, signaling ecosystem importance |
| [#24713](https://github.com/anomalyco/opencode/issues/24713) | Copy shows "copied" popup but clipboard unchanged on Linux | **Related to #4283** but Linux-specific; false success feedback is worse than no feedback | 9 comments, 2 👍; terminal-specific, suggests deeper TUI/clipboard integration issue |
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | v1.15.1+ Breaks Bun Installs | **Package manager compatibility** — postinstall scripts blocked by Bun, pnpm by default; friction for non-npm users | 6 comments, 3 👍; regression from security improvement |
| [#26667](https://github.com/anomalyco/opencode/issues/26667) | `session.processor` crashes sidecar on unhandled AbortError | **Effect.js fiber stack crash** — unhandled stream aborts take down entire sidecar; reliability concern for production use | 6 comments; zero 👍 suggests underreporting, not low severity |
| [#26220](https://github.com/anomalyco/opencode/issues/26220) | Infinite loop after tool calls complete (Zen/big-pickle) | **Model-specific runtime failure** — process hangs, requires kill; affects "opencode" branded model | 3 comments, 2 👍; critical when it hits, narrow reproduction |
| [#28066](https://github.com/anomalyco/opencode/issues/28066) | `permission.ask` hook dropped in Effect refactor (38e0dc9) | **Root-cause identification** of #7006; bisected to specific commit, accelerates fix | 2 comments; closed rapidly after identification — community QA at work |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#28082](https://github.com/anomalyco/opencode/pull/28082) | Refactor session prompt reminders | Extracts reminder injection to dedicated module; **reduces prompt.ts complexity** while preserving behavior | Open |
| [#23068](https://github.com/anomalyco/opencode/pull/23068) | Add session metadata support | **SDK extensibility** — client-controlled JSON metadata persistence for session lifecycle management | Open, vouched contributor |
| [#21551](https://github.com/anomalyco/opencode/pull/21551) | Model details panel in TUI model picker | **TUX improvement** — contextual model info (params, context window) at selection time | Closed |
| [#28006](https://github.com/anomalyco/opencode/pull/28006) | Sync PWA status bar theme-color | **Mobile PWA polish** — fixes Chrome-installed app status bar mismatch with app theme | Closed |
| [#26949](https://github.com/anomalyco/opencode/pull/26949) | Virtualize session timeline rows | **Performance** — virtua upgrade, row-level virtualization vs. full-turn; addresses scroll jank in long sessions | Open, beta |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | Local LAN provider discovery + auto-discover models | **Local AI infrastructure** — mDNS + OpenAI-compatible server discovery; closes gap for self-hosters | Open |
| [#25363](https://github.com/anomalyco/opencode/pull/25363) | Switching agents considers agent's configured model variant | **Agent system consistency** — respects per-agent model config instead of global default | Open |
| [#28080](https://github.com/anomalyco/opencode/pull/28080) | Kimi K2.6 (`k2p6`) custom handler and model detection fix | **Provider-specific bugfix** — unblocks Kimi K2.6 usage across code paths | Open |
| [#27954](https://github.com/anomalyco/opencode/pull/27954) | Sort v2 session list by updated time | **Fixes "Load more" randomness** — backend/sidebar temporal disagreement resolved | Closed |
| [#28075](https://github.com/anomalyco/opencode/pull/28075) | Avoid non-string stdout parsing in cygpath resolution | **Windows/WSL robustness** — hardens shell tool against malformed stdout shapes | Open |

---

## 5. Feature Request Trends

**Skill system ergonomics** dominate — three distinct requests ([#7846](https://github.com/anomalyco/opencode/issues/7846) `/skills` command, [#24587](https://github.com/anomalyco/opencode/issues/24587) `$skill-name` inline syntax, [#15740](https://github.com/anomalyco/opencode/issues/15740) ecosystem listings) signal the skill marketplace is growing faster than its UI. **Session management primitives** are second: persistent goals ([#27167](https://github.com/anomalyco/opencode/issues/27167)), metadata ([#23068](https://github.com/anomalyco/opencode/pull/23068)), unarchive actions ([#28053](https://github.com/anomalyco/opencode/issues/28053)), and deletion ([#28030](https://github.com/anomalyco/opencode/issues/28030)) all point to users building longer-lived, more complex session workflows. **Desktop parity with CLI** remains a theme — project deletion, notification reliability, and update mechanics lag behind terminal experience.

---

## 6. Developer Pain Points

| Category | Pattern | Evidence |
|----------|---------|----------|
| **Clipboard/TUI integration** | Copy operations fail silently or falsely succeed across platforms | [#4283](https://github.com/anomalyco/opencode/issues/4283), [#24713](https://github.com/anomalyco/opencode/issues/24713) — terminal emulators, WSL, and Linux DEs all implicated |
| **Plugin API stability** | Refactors break documented hooks without deprecation | [#7006](https://github.com/anomalyco/opencode/issues/7006)/[#28066](https://github.com/anomalyco/opencode/issues/28066) — `permission.ask` present in types, absent in runtime for 2 months |
| **Package manager friction** | Security-hardened installs (Bun, pnpm) block postinstall | [#27906](https://github.com/anomalyco/opencode/issues/27906) — v1.15.1 change broke default Bun global installs |
| **Local model performance** | 60-90s latency for simple prompts via Ollama vs. 3s direct | [#18428](https://github.com/anomalyco/opencode/issues/18428) — suggests connection/init overhead, not model inference |
| **Multimodal gaps** | Vision-capable models can't receive images through Read tool | [#15728](https://github.com/anomalyco/opencode/issues/15728) — tool chain lacks image-to-message conversion |
| **Effect.js error propagation** | Unhandled AbortErrors crash sidecar instead of degrading | [#26667](https://github.com/anomalyco/opencode/issues/26667) — fiber-level failure mode requires framework expertise to debug |

---

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-18

## Today's Highlights

The Pi team shipped two releases in 24 hours to address a Node 26 compatibility crisis affecting Copilot, Codex, and GPT Pro subscriptions via JSON parse errors. A sweeping refactor closed dozens of issues tagged `closed-because-bigrefactor` and `closed-because-weekend`, while the community pushed hard on reasoning-content preservation for Chinese models (Kimi k2.6, MiMo) and Windows-native tooling gaps.

---

## Releases

### [v0.75.1](https://github.com/earendil-works/pi-mono/releases/tag/v0.75.1) — Patch
- **Fixed:** Config selectors now scale visible row count to terminal height ([#4243](https://github.com/earendil-works/pi-mono/pull/4243))
- **Fixed:** Anthropic-compatible API requests now ignore stray `ANTHROPIC_AUTH_TOKEN` env vars that caused 401s on non-Anthropic providers (e.g., Xiaomi MiMo)

### [v0.75.0](https://github.com/earendil-works/pi-mono/releases/tag/v0.75.0) — Minor
- **Breaking:** Minimum Node.js raised to **22.19.0**
- **Fixed:** Compaction summary calls now route through custom agent stream functions, preserving proxy-backed LLM routing ([#4484](https://github.com/earendil-works/pi/issues/4484))
- **Fixed:** System prompt and context file handling improvements

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4251](https://github.com/earendil-works/pi/issues/4251) | **Kimi k2.6 reasoning_content missing in tool calls** — OpenCode Go provider fails when reasoning is enabled | Blocks adoption of Moonshot's flagship model for Go developers; 23 comments show deep debugging | 23 💬, 17 👍 |
| [#4587](https://github.com/earendil-works/pi/issues/4587) | **npm extensions install to system global instead of `~/.pi`** | Linux users hit EACCES failures; violates Pi's self-contained install promise | 13 💬 |
| [#4505](https://github.com/earendil-works/pi/issues/4505) | **MiMo models 400 error: reasoning_content not preserved multi-turn** | Xiaomi's model fails on cold-start tool use; pattern matches #4251 across providers | 10 💬, 4 👍 |
| [#4653](https://github.com/earendil-works/pi/issues/4653) | **Copilot login: "Unexpected token... is not valid JSON"** | Regression in 0.75.0 breaks paid GitHub subscription; immediate user impact | 6 💬 |
| [#4650](https://github.com/earendil-works/pi/issues/4650) | **GPT Pro OAuth: invalid JSON error** | Another 0.75.0 auth regression; macOS-specific, blocks OpenAI Pro users | 5 💬 |
| [#4342](https://github.com/earendil-works/pi/issues/4342) | **ANTHROPIC_AUTH_TOKEN env var leaks to non-Anthropic providers** | Root cause of MiMo/Kimi 401s; SDK behavior conflicted with Pi's multi-provider design | 5 💬 |
| [#4647](https://github.com/earendil-works/pi/issues/4647) | **`pi update` fails for global pnpm installs** | Symlink resolution breaks ownership check; pnpm users stuck on old versions | 4 💬, **still OPEN** |
| [#4652](https://github.com/earendil-works/pi/issues/4652) | **Codex subscription fails on Node 26.0.0** | Pinpoints exact Node version boundary for JSON parse bug; workaround (26.1.0) found | 4 💬 |
| [#4645](https://github.com/earendil-works/pi/issues/4645) | **Constant update prompt 0.74.1 → 0.75** | Update loop erodes trust; likely related to npm propagation lag (see #4644) | 4 💬 |
| [#4644](https://github.com/earendil-works/pi/issues/4644) | **Update check advertises version before npm available** | Race between `pi.dev/api/latest-version` and npm publish causes failed installs | 4 💬 |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#4655](https://github.com/earendil-works/pi/pull/4655) | **Docs: compaction behavior diagrams** | Visual documentation for repeated compaction entry handling | ✅ Merged |
| [#4603](https://github.com/earendil-works/pi/pull/4603) | **Update OpenAI Codex model list** | Adds new models using [models.dev](https://models.dev) pricing data; fixes test regressions | ✅ Merged |
| [#4243](https://github.com/earendil-works/pi/pull/4243) | **Config selector scales to terminal height** | Dynamic `maxVisible` replaces hardcoded 15; tall terminals now usable | ✅ Merged |
| [#4651](https://github.com/earendil-works/pi/pull/4651) | **Fetch portable Git Bash on Windows** | Auto-downloads 350MB git bash to `~/.pi` (like rg/find); draft pending community feedback | 🔄 Draft |
| [#4256](https://github.com/earendil-works/pi/pull/4256) | **Fix Azure multi-turn reasoning with `store:false`** | Persists reasoning items when Azure OpenAI Responses requires `store:true` | 🔄 Open |
| [#4112](https://github.com/earendil-works/pi/pull/4112) | **Xiaomi default to API billing, per-region token plans** | Splits MiMo provider for prepaid vs. pay-as-you-go; follows MiniMax/Moonshot pattern | ✅ Merged |
| [#4600](https://github.com/earendil-works/pi/pull/4600) | **Route compaction through streamFn** | Preserves proxy/telemetry for compaction summaries; fixes #4484 | ✅ Merged |
| [#4541](https://github.com/earendil-works/pi/pull/4541) | **XML boundaries for AGENTS.md in system prompt** | Replaces fragile `##` header separators with explicit XML fences; prevents prompt injection | ✅ Merged |
| [#4622](https://github.com/earendil-works/pi/pull/4622) | **Map Copilot GPT-5 "minimal" thinking to "low"** | Compatibility shim for GitHub Copilot's thinking level API drift | ✅ Merged |
| [#4639](https://github.com/earendil-works/pi/pull/4639) | **`--new-session-id` flag for embedded callers** | CI/IDE integrations can now correlate Pi session UUIDs with external orchestrators | ✅ Merged |

---

## Feature Request Trends

1. **Reasoning-content fidelity across providers** — Kimi, MiMo, and Azure OpenAI all hit variants of "reasoning_content dropped or rejected on multi-turn." Community wants first-class reasoning block lifecycle management, not per-provider patches.

2. **Windows-native toolchain completeness** — Git Bash auto-fetch (#4651), vim/nvim integration (#4612), and npm argv quoting (#4623) show demand for Windows parity without WSL dependency.

3. **Session storage evolution** — Issue [#316](https://github.com/earendil-works/pi/issues/316) (tree-structured JSONL with UUID/parentUuid) and `--new-session-id` (#4639) indicate embedders and long-running agents need programmatic session control beyond linear logs.

4. **Provider sprawl management** — routing.run (#4636), routstr (#4633), xAI Grok (#4630) added in 24 hours; extension contract refinements (#4648) request documented hooks for model override and `.env` startup.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Node version fragility** | Critical | 0.75.0 broke Copilot/Codex/GPT Pro on Node 26.0.0; 0.75.1 still fielding reports. Tight coupling to undici/EnvHttpProxyAgent decompress behavior. |
| **Auth token leakage across providers** | High | `ANTHROPIC_AUTH_TOKEN` → MiMo 401s (#4342); OAuth JSON parse failures (#4653, #4650, #4652) cluster suggests auth pipeline needs defensive parsing overhaul. |
| **Update mechanism reliability** | High | Version check/npm publish race (#4644), pnpm symlink ownership (#4647), and stuck update loops (#4645) compound to erode upgrade trust. |
| **Reasoning model interoperability** | High | Kimi k2.6 (#4251), MiMo (#4505), Azure (#4256) all fail on reasoning block round-tripping. Suggests abstraction gap in `pi-ai` message normalization. |
| **Windows path/quoting/shell edge cases** | Medium | Spaced cwd breaks npm (#4623), vim double-open (#4612), ESM import perf (#4627). Platform test coverage appears thin. |
| **TUI robustness** | Medium | Markdown stack overflow (#3826), width-exceeded crash (#4604), WSL rendering (#4627). Terminal geometry and escape sequence handling still brittle. |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-18

## Today's Highlights

The v0.16.0-preview.0 release pipeline hit a snag with a failed build ([Issue #4244](https://github.com/QwenLM/qwen-code/issues/4244)), while the team pushed hard on Mode B (`qwen serve`) production readiness with multiple Wave 3/4 PRs landing for MCP guardrails, auth device flow, and workspace CRUD APIs. Memory pressure remains the dominant operational theme, with fresh OOM reports joining a growing cluster of long-session stability issues that are now attracting dedicated architectural attention.

---

## Releases

| Version | Status | Key Changes |
|---------|--------|-------------|
| **v0.16.0-preview.0** | ❌ Release failed ([Issue #4244](https://github.com/QwenLM/qwen-code/issues/4244)) | OSC 8 hyperlink wrapping in terminal; OpenAI stream delta normalization; CLI auto-restore fix |
| **v0.15.12-preview.3** | ✅ Published | Same changelog as above (backported fixes) |

The failed v0.16.0-preview.0 build blocks the preview channel; developers relying on new features may need to stay on v0.15.12-preview.3 or build from source.

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** | Proposes slashing free quota 10× (1,000 → 100 req/day) and sunsetting free tier entirely by May 20 | 🔥 **126 comments** — highest engagement in dataset; zero upvotes suggests controversy or organized opposition |
| [#4149](https://github.com/QwenLM/qwen-code/issues/4149) | **FATAL ERROR: JS heap OOM** | New OOM report with detailed GC logs near 4GB V8 limit; reproduces on long-running tasks | 10 comments; joins cluster of memory issues (#2868, #728, #2945, #4185) |
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | **Mode B feature-priority roadmap toward v0.16 production-ready** | Meta-tracking issue for `qwen serve` daemon stabilization; defines Wave 3/4 scope | 8 comments; actively referenced by 5+ PRs in flight |
| [#4116](https://github.com/QwenLM/qwen-code/issues/4116) | **Critical error (session management)** | Cyrillic UI crash in input handling; affects non-English users | 6 comments; severity label but limited diagnostic detail |
| [#4185](https://github.com/QwenLM/qwen-code/issues/4185) | **OOM in long sessions: V8 heap pressure before token-based compaction** | Architectural analysis: token-based compaction runs too late vs. V8's 4GB ceiling | 2 comments; proposes proactive memory pressure hooks |
| [#4258](https://github.com/QwenLM/qwen-code/issues/4258) | **Model switching auth type mismatch** | `minimax/m2.1` rejected for `openai` auth type; provider routing regression | 1 comment; blocks multi-provider workflows |
| [#4254](https://github.com/QwenLM/qwen-code/issues/4254) | **Memory leaks** | Visual evidence of unbounded growth; explicit GC criticism from reporter | 1 comment; emotional tone signals user frustration |
| [#4257](https://github.com/QwenLM/qwen-code/issues/4257) | **PC sleep during background work** | Linux suspend interrupts long-running agent tasks; no native power management | 0 comments; niche but critical for automation use cases |
| [#4239](https://github.com/QwenLM/qwen-code/issues/4239) | **Assistant re-reads files after idle session** | Idle microcompaction loses read-state; wastes tokens and time on resume | 0 comments; filed same day as fix PR #4243 |
| [#4244](https://github.com/QwenLM/qwen-code/issues/4244) | **Release Failed for v0.16.0-preview.0** | Build pipeline breakage blocks preview channel | 0 comments; operational blocker |

---

## Key PR Progress

| # | Title | Feature / Fix | Status |
|---|-------|-------------|--------|
| [#4247](https://github.com/QwenLM/qwen-code/pull/4247) | **MCP client guardrails (Wave 3 PR 14)** | In-process MCP client counter, slot reservation, `--mcp-client-budget` CLI flags | 🟡 Open — hardens resource limits for Model Context Protocol |
| [#4251](https://github.com/QwenLM/qwen-code/pull/4251) | **Preflight and env diagnostics routes (Wave 3 PR 13)** | `GET /workspace/env` + `/workspace/health` for remote client readiness checks | ✅ Closed — merged; unblocks IDE/TUI integrations |
| [#4250](https://github.com/QwenLM/qwen-code/pull/4250) | **FileSystemService boundary (Wave 4 PR 18)** | Per-request workspace filesystem boundary: path canonicalization, symlink checks, audit hooks | 🟡 Open — security-critical refactor for multi-tenant serve mode |
| [#4255](https://github.com/QwenLM/qwen-code/pull/4255) | **Auth device-flow route (Wave 4 PR 21)** | OAuth 2.0 Device Grant brokering; tokens land on daemon, not client | 🟡 Open — enables headless/remote authentication |
| [#4249](https://github.com/QwenLM/qwen-code/pull/4249) | **Workspace memory and agents CRUD (Wave 4 PR 16)** | First mutation routes: `GET/POST /workspace/memory`, `/workspace/agents` | 🟡 Open — foundational for persistent agent state in serve mode |
| [#4256](https://github.com/QwenLM/qwen-code/pull/4256) | **Stream idle watchdog for silent responses** | Cancels stalled SSE streams via `InvalidStreamError('STREAM_IDLE_TIMEOUT')` | 🟡 Open — fixes weak-network hangs; pairs with #4176 |
| [#4243](https://github.com/QwenLM/qwen-code/pull/4243) | **Preserve read-before-write state across idle microcompaction** | Retains file read history after idle cleanup; fixes #4239 | 🟡 Open — token-efficiency fix for long sessions |
| [#4176](https://github.com/QwenLM/qwen-code/pull/4176) | **Close tool_use↔tool_result invariant across failure paths** | Prevents unrecoverable wedges on weak networks (DeepSeek-V4-Pro / Anthropic protocol) | 🟡 Open — reliability fix for production deployments |
| [#4242](https://github.com/QwenLM/qwen-code/pull/4242) | **Map rewind turns after compression** | Aligns compressed history with UI turn list for `/rewind` targeting | 🟡 Open — UX fix for session restoration |
| [#3778](https://github.com/QwenLM/qwen-code/pull/3778) | **Desktop app package with ACP SDK integration** | New `packages/desktop/` — Electron/Tauri-class native wrapper | 🟡 Open — long-running; expands beyond CLI/VS Code |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Mode B / `qwen serve` productionization** | #4175 (roadmap), #4247–#4255 (7 PRs), #4202 (TUI adapter) | 🔥🔥🔥 Highest — entire Wave 3/4 sprint focused here |
| **Memory & session stability** | #2036, #4185, #4204 (file-history), #4253 (snapshot restore), #4174 (worktree persistence) | 🔥🔥🔥 Sustained — architectural investments, not band-aids |
| **Performance observability** | #4252 (TPS/TTFT in `/stats`), #3731 (OpenTelemetry hardening) | 🔥🔥 Emerging — ops-ready telemetry gap |
| **Export & data portability** | #4192 (custom `/export` dir, closed), #3548 (plansDirectory, closed) | 🔥 Maturing — incremental UX polish |
| **ACP/SDK lifecycle upgrades** | #4227 (SDK 0.14→0.21, resume/fork/closeSession) | 🔥 New — protocol evolution for agent orchestration |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Community Sentiment |
|------------|-----------|----------|-------------------|
| **JavaScript heap OOM in long sessions** | 5+ issues (#4149, #2868, #728, #2945, #4185, #4254) | 🔴 Critical | Frustrated; #4254 reporter explicitly calls out missing GC monitoring. Architectural fixes (#4185, #4204, #4253) are in flight but not yet landed |
| **Weak-network stream hangs / tool-result invariants** | #4176, #4256, #4177 | 🟠 High | Reliability concern for mobile/traveling developers; fixes actively PR'd |
| **Model provider auth/routing mismatches** | #4258, #4138, #4223 | 🟡 Moderate | Multi-provider setups (SiliconFlow, MiniMax, DeepSeek) hit friction with auth type enforcement and `reasoning_content` compatibility |
| **Session idle → state loss** | #4239, #4243, #4257 | 🟡 Moderate | Breaks "leave it running overnight" workflows; microcompaction too aggressive |
| **Skills discovery & project-level config** | #4246 (closed), #4155 (open), #3548 | 🟢 Improving | Project-level `skills/` path resolution was buggy; priority sorting PR in review |

---

*Digest compiled from github.com/QwenLM/qwen-code public activity for 2026-05-17/18.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-18

## Today's Highlights

The project is experiencing intense development velocity with **v0.8.39** shipping a streamlined npm wrapper and GHCR distribution, while the issue tracker shows 45 active discussions dominated by Docker encoding problems and provider compatibility gaps. A critical regression audit (#1736) is underway for v0.8.40 after v0.8.38/39 introduced provider-catalog fetching instability, alongside multiple concurrent fixes for reasoning content handling across third-party OpenAI-compatible endpoints.

---

## Releases

### [v0.8.39](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.39)
- Simplified distribution via `npm install -g deepseek-tui` — wrapper auto-downloads both binaries
- Docker/GHCR deployment path: `ghcr.io/hmbown/deepseek-tui:latest`
- No functional changelog provided; appears to be infrastructure-focused release

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615) | Docker pull → immediate garbled output/terminal corruption | **Highest engagement (161 comments)** — fundamental brokenness of primary install path for Chinese users; requires forced Linux reboot | Frustrated; user explicitly calls project "垃圾玩意" (garbage), indicating severe trust erosion |
| [#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177) | Input cache hit rate "abysmally low" vs. competitor DeepSeek-Reasonix (95%+) | Cost optimization critical for production users; directly impacts API spend efficiency | Urgent improvement requested; competitive comparison adds pressure |
| [#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743) | Token consumption spike: 400M tokens in half-day | Potential runaway loop or context management bug causing financial harm to users | 13 comments seeking root cause analysis; no maintainer diagnosis visible |
| [#861](https://github.com/Hmbown/DeepSeek-TUI/issues/861) | "Thinking collapse" — frozen spinners, silent truncation, dropped reasoning_content | Core UX defect in DeepSeek's signature reasoning display; undermines product differentiation | Detailed technical taxonomy provided by reporter; awaiting architectural response |
| [#1620](https://github.com/Hmbown/DeepSeek-TUI/issues/1620) | Thinking process excruciatingly slow, single-character token emission | Perceived performance regression or provider-side throttling; breaks interactive flow | Screenshot-heavy report; no clear bottleneck identified |
| [#1738](https://github.com/Hmbown/DeepSeek-TUI/issues/1738) | Sub-agent deep-analysis results lossy: parent receives only compressed summary | **Filed by maintainer @Hmbown** — acknowledges architectural limitation in multi-agent orchestration | Self-reported; suggests active internal redesign of agent communication protocol |
| [#1736](https://github.com/Hmbown/DeepSeek-TUI/issues/1736) | v0.8.40 regression bug bash: audit v0.8.38/v0.8.39 fallout | **Maintainer-initiated quality gate** — admits v0.8.38's provider-aware /model picker introduced live-fetching instability, v0.8.39 partial revert insufficient | Unusual transparency; signals release process under stress |
| [#1714](https://github.com/Hmbown/DeepSeek-TUI/issues/1714) | Third-party OpenAI-compatible providers fail (MiniMax-M2.7 via `--provider openai`) | Ecosystem interoperability broken; blocks users from non-DeepSeek endpoints | Config posted; 400 error on valid request suggests schema enforcement too rigid |
| [#1695](https://github.com/Hmbown/DeepSeek-TUI/issues/1695) | macOS `write_file` silent failure >1KB, content ghosts into `workshop_vars` | Data loss bug with community-provided skill patch workaround; file system reliability compromised | Reporter provided detailed repro + workaround; patch available but unmerged |
| [#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472) | Deadlock: unrecoverable hang on API stall, blocked on `pipe_read` with closed write end | **Stability critical** — day-long uptime impossible; process becomes zombie requiring `kill -9` | Deep technical root cause analysis with WSL2 specifics; no fix timeline |

---

## Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#1751](https://github.com/Hmbown/DeepSeek-TUI/pull/1751) | Sub-agent naming from objective + circuit-breaker replaces hard step cap | UX improvement: `DelegateCard` shows task summary not agent ID; auto-deduplication | Addresses #1738's architectural debt; human-readable agent tracking |
| [#1723](https://github.com/Hmbown/DeepSeek-TUI/pull/1723) | Configurable auto-compact threshold with Ctrl+L keybinding | **Context management safety** — prevents 99.6% saturation deadlock; both guardrails previously disabled since v0.8.11 | Critical reliability fix; closes #1722 |
| [#1746](https://github.com/Hmbown/DeepSeek-TUI/pull/1746) | Custom UI themes and inline color overrides | User personalization via `theme_overrides` in `config.toml`; removes rigid enum validation | Community customization demand; theming was friction point |
| [#1749](https://github.com/Hmbown/DeepSeek-TUI/pull/1749) | Home/End line-wise navigation in multiline composer | Cursor behavior refinement: Home/End → line start/end; Ctrl+A/E → absolute bounds | Polish for power users; closes #1748 |
| [#1744](https://github.com/Hmbown/DeepSeek-TUI/pull/1744) | Preserve quoted args on Windows `cmd /C` invocation | Fixes `git commit -m "feat: complete sub-pages"` → pathspec errors from quote splitting | Windows agent reliability; closes #1691 |
| [#1740](https://github.com/Hmbown/DeepSeek-TUI/pull/1740) | Honor explicit custom model for non-DeepSeek providers | **Root cause fix for #1714** — stops silent replacement with DeepSeek default when `--model` specified | Interoperability critical; unblocks MiniMax, others |
| [#1742](https://github.com/Hmbown/DeepSeek-TUI/pull/1742) | Surface thinking-only turns instead of silently ending | Handles `reasoning_content`-only responses (gpt-oss via ollama) that previously caused empty turn drop | Edge case in reasoning model ecosystem expansion |
| [#1741](https://github.com/Hmbown/DeepSeek-TUI/pull/1741) | Keep mutation-tool result confirmations off wire dedup | Fixes ghosted `write_file` >1KB with repeated identical calls; truncated SHA `b39a442` signature | Data integrity; addresses #1695 macOS symptom |
| [#1743](https://github.com/Hmbown/DeepSeek-TUI/pull/1743) | Replay `reasoning_content` for DeepSeek models on `openai` provider | Fixes 400 error: *"The `reasoning_content` in the thinking message is not supported"* in multi-turn/tool calls | Provider bridge compatibility; closes #1739, #1694 |
| [#1726](https://github.com/Hmbown/DeepSeek-TUI/pull/1726) | Mouse + keyboard text selection with copy/cut in composer | Mouse drag, Shift+←/→, Ctrl+C/X, word-jump shortcuts | Major TUX gap filled; parity with modern terminal editors |

---

## Feature Request Trends

1. **Financial transparency** — API balance display (#1735) requested to avoid dashboard context-switching; cost anxiety prevalent given #743's 400M token spike
2. **Third-party provider robustness** — Multiple issues/PRs around OpenAI-compatible endpoint handling (#1714, #1740, #1673, #1743); ecosystem expansion outpacing schema flexibility
3. **Context/compaction intelligence** — Auto-compact configurability (#1723), tiktoken-accurate tracking (#1376), and cache hit rate optimization (#1177) all point to cost-control as primary user concern
4. **Multi-agent observability** — Sub-agent result fidelity (#1738), naming (#1751), and timeout handling (#1425) indicate agent orchestration maturing but still lossy

---

## Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Docker/Installation reliability** | Encoding corruption (#1615), permission errors (#1684), WSL2 fragility (#1596) | **Critical** — primary onboarding path broken for substantial user segment |
| **Reasoning content handling** | Display corruption (#1673), silent truncation (#861), provider-specific 400s (#1743), slow emission (#1620) | **High** — core differentiator becoming maintenance burden across provider matrix |
| **File system operations** | macOS silent write failures (#1695), merge save slowness (#1732), PDF tool detection (#1667) | **Moderate-High** — data loss fears, platform-specific brittleness |
| **Context/token economics** | Runaway consumption (#743), cache miss penalties (#1177, #1732), compaction deadlocks (#1723) | **High** — direct financial impact, no built-in safeguards |
| **Release stability** | v0.8.38/39 regression cascade (#1736), `edition2024` Rust toolchain requirements (#1718) | **Emerging** — velocity may exceed quality gates; maintainer-initiated audit unusual |

---

*Digest compiled from github.com/Hmbown/DeepSeek-TUI activity 2026-05-17 → 2026-05-18. 45 issues, 36 PRs in active motion.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*