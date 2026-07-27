# AI CLI Tools Community Digest 2026-07-27

> Generated: 2026-07-27 01:51 UTC | Tools covered: 10

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

# AI CLI Developer Tools: Cross-Tool Comparison Report — 2026-07-27

## 1. Ecosystem Overview

The AI CLI developer tools landscape is undergoing a period of intense, convergent maturation. Across all major tools, community attention is shifting from “can it generate code” to “can I trust it, control it, and build production workflows around it without regressions breaking my daily work.” The day’s digest reveals three systemic themes: **security hardening** (Electron IPC bypasses, sandbox escapes, silent hook failures), **subagent reliability crises** (false success reporting, indefinite hangs, permission loops), and **platform portability as an urgent gap** (Windows CLI hangs, Linux desktop app absent, WSL path corruption). While the incumbents (Claude Code, OpenAI Codex) generate the highest raw engagement, smaller projects like Pi and DeepSeek TUI are shipping faster per-issue resolution cycles, particularly around performance optimization. The gap between product maturity and user trust remains the defining challenge for every tool in this space.

## 2. Activity Comparison

| Tool | Issues (Today) | PRs (Today) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 hot issues | 7 PRs | No release |
| **OpenAI Codex** | 10 hot issues | 10 PRs | No release |
| **Gemini CLI** | 10 hot issues | 10 PRs | Nightly (v0.54.0) |
| **GitHub Copilot CLI** | 10 hot issues | 0 PRs | No release |
| **Kimi Code CLI** | 1 issue | 0 PRs | No release |
| **OpenCode** | 10 hot issues | 10 PRs | No release |
| **Pi (mono)** | 10 hot issues | 9 PRs | No release |
| **Qwen Code** | 10 hot issues | 10 PRs | Nightly (v0.21.0) |
| **DeepSeek TUI (CodeWhale)** | 10 hot issues | 10 PRs | No release |
| **Grok Build** | 0 | 0 | No activity |

**Key observations:**
- OpenAI Codex leads in raw community engagement (#11023 at 852 👍), but Claude Code’s #8477 (324 👍) is the most-requested single feature for that project.
- Qwen Code stands out for security incident density (3 critical Electron/IPC bugs in 24 hours).
- Pi and DeepSeek TUI show the highest PR merge velocity relative to their community size.
- Kimi Code CLI and Grok Build are effectively dormant.
- Copilot CLI had zero PR activity despite accumulating open bugs.

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating genuine cross-cutting demand.

| Requirement | Tools Reporting | Specific Needs |
|---|---|---|
| **Always-visible or streaming thinking output** | Claude Code (#8477, #30660), Pi (#6665), DeepSeek TUI (#4903 fixed perf but need persists) | Real-time model reasoning display for debugging and trust |
| **Native Linux desktop app** | OpenAI Codex (#11023, 852 👍), Gemini CLI (indirect via WSL issues), DeepSeek TUI (terminal-native) | Powerful hardware, avoid macOS power issues, CI integration |
| **Subagent reliability & observability** | Claude Code (#74116, #78915), Gemini CLI (#22323, #21409), OpenCode (PR #39010), DeepSeek TUI (#4022, #3983) | Turn-limit false successes, indefinite hangs, per-subagent cost/status tracking |
| **Sandboxed execution / security guardrails** | Gemini CLI (#19873), Qwen Code (#7770, #7772), Pi (#7137 pre-response hook), DeepSeek TUI (#4900 policy narrowing) | Zero-dependency sandbox, hook failure handling, permission bypass prevention |
| **MCP OAuth & authentication reliability** | OpenAI Codex (#31573, closed PR #30295–30296), Copilot CLI (#4203), Qwen Code (#7768, #7771) | Token refresh bypass, auth store drift, persisted config not loading |
| **Performance / disk usage / cost waste** | OpenAI Codex (#17320, #24948), OpenCode (#39008), Pi (#6665), DeepSeek TUI (#3897, #3738) | SQLite WAL writes, session log bloat, prompt caching, quadratic markdown re-parse |
| **Multi-workspace / multi-repo support** | OpenCode (#38984, #34398), Qwen Code (#6378), DeepSeek TUI (#2934 sidebar) | Single daemon for multiple repos, cross-repo undo, session sidebar |

## 4. Differentiation Analysis

**Claude Code** prioritizes autonomous agentic workflows (plan-mode, auto-mode, subagents) and receives the strongest backlash when those workflows break. Its community is the loudest on “always-on thinking” (#8477) and destructive tool invocation risks (#81508). This is a product optimized for **hands-off coding workflows** — when it works, it’s powerful; when it regresses, trust collapses.

**OpenAI Codex** has the highest raw community engagement (852 👍 for Linux desktop) and the most severe Windows stability problems (#34260 process storm, #34133 GPU crash). Its differentiation is **model behavior optimization** — users are actively analyzing GPT-5.6’s serialization patterns (#35050) and requesting explicit batching to reduce costs. The community is performance- and cost-conscious first, feature-hungry second.

**Gemini CLI** takes the most **security-first approach** among major tools — PR #28403 (shell variable expansion bypass) and rigorous policy-engine hardening (PR #28359) dominate its PR queue. Its subagent false-success bug (#22323) is the most commented issue, indicating that even with strong security, agent correctness is the Achilles’ heel. The community skews toward structured evaluation and CI integration.

**GitHub Copilot CLI** is the quietest major tool — zero PRs today, but its bug list reveals a **reliability-focused, platform-aware** tool (zombie processes on Linux, crash on Windows exit, NFS hang). MCP authentication friction (#4203, #4205) suggests enterprise adoption is hampered by organizational OAuth policies. The community is smaller but engaged with specific, high-severity bugs.

**OpenCode** differentiates as the **democratized, open-source contender** — aggressively shipping new features (model-gated auto-approve, subagent tab, prompt caching fix) while also fielding the most dramatic trust complaint (#39018 “AI destroyed my app”). Its cost-optimization focus (adjusting limits after DeepSeek price cuts, #28846) appeals to budget-conscious developers.

**Qwen Code** is in a **security crisis response mode** — three critical Electron/IPC vulnerabilities surfaced in 24 hours (#7768, #7769, #7770), alongside cold-start performance improvements. Its differentiation is **desktop security auditing** — it’s the only tool where the community is actively reverse-engineering the Electron bridge. The “multi-workspace daemon” RFC (#6378) suggests a server-side vision beyond the CLI.

**Pi (mono)** and **DeepSeek TUI (CodeWhale)** are **high-performance terminal specialists**. Pi focuses on raw responsiveness (fixing full-core TUI pinning, LRU caching), while DeepSeek TUI leads on **TUI feature innovation** (@git/@diff mentions, localized setup flows, background shell completions). Both have smaller communities but higher per-developer shipping velocity.

## 5. Community Momentum & Maturity

**High maturity, high engagement but slower iteration:**  
- **OpenAI Codex** — Largest community (852 👍 on single issue), but the same bugs persist (#17320 TRACE logging, #16866 macOS kernel panic). Feature requests are clear but unmet (Linux app). Momentum is driven by model behavior debates, not product velocity.  
- **Claude Code** — Second-highest engagement (324 👍). Community is vocal and organized around feature requests (#8477 thinking), but regressions (#80716, #81484) are stacking up faster than fixes land. Trust is eroding among power users.

**High velocity, improving maturity:**  
- **Pi (mono)** — 9 PRs in 24 hours, fixing both performance and correctness bugs. The community is smaller but the project responds quickly (OSC 52 off event loop, WSL path normalization, LRU cache). Maturity is improving through rapid iteration.  
- **DeepSeek TUI (CodeWhale)** — 10 PRs in 24 hours, including major perf fix (#4903) and feature delivery (#4899 @git/@diff). Localization community is deeply engaged. Maturity gap is in onboarding and provider configuration complexity.

**High security maturity, slower feature velocity:**  
- **Qwen Code** — Actively auditing and fixing security architecture. PR velocity is high (10 today), but focused on hardening rather than new features. The multi-workspace RFC indicates a longer-term vision beyond the current product.

**Stable but stagnant:**  
- **GitHub Copilot CLI** — Zero PRs today, with accumulated open bugs suggesting a maintenance phase rather than active development.  
- **Kimi Code CLI** and **Grok Build** — effectively inactive.

## 6. Trend Signals

Five industry-level signals emerge from cross-tool community feedback:

**1. “Always-on thinking” is non-negotiable.**  
Claude Code (#8477) and Pi (#6665) both face demand for real-time model reasoning display. Users don’t just want answers — they want to see the AI’s derivation to assess trust, catch hallucinations, and learn. This is a UX design pattern that will differentiate tools in the next 6 months.

**2. LLM skepticism is driving sandboxing and permission demand.**  
Reports of unprompted `git checkout --` (Claude Code #81508), “AI destroyed my app” (OpenCode #39018), and insecure Electron bridges (Qwen Code #7768) signal that users are now expecting **fail-closed, not fail-open** architectures. The Pi community’s request for pre-response hooks (#7137) and DeepSeek TUI’s policy narrowing (#4900) point toward a future where every tool call is audited by default.

**3. Platform portability is a systemic barrier.**  
Windows remains the pain point across all tools (Claude Code #81484 hang, Codex #34260 process storm, OpenCode paste issues, Copilot CLI #4217 crash). Linux has a different class of complaints (NFS hangs, webview loading failures, zombie processes). The GPT-ification hype assumes macOS-only development, but enterprise and Windows/Linux developers are vocal about being left behind.

**4. Cost optimization is the new feature battleground.**  
OpenAI Codex users analyzing GPT-5.6 serialization (#35050), OpenCode adjusting limits after model price cuts (#28846), and every tool with prompt caching bugs (OpenCode #39008, DeepSeek TUI #3738) show a market that has moved past “does it work?” to “does it work cost-effectively?” Tools that make token usage transparent and optimizable will win power users.

**5. Security as a competitive moat.**  
Qwen Code’s security disclosures (#7768, #7769) and Gemini CLI’s policy-engine hardening (#28403) suggest that **trustworthiness will become a purchase criterion** for enterprise buyers. Tools that proactively audit their permission systems, sandbox execution, and IPC bridges will benefit from the backlash against tools that silently fail or enable destructive behavior.

**For developers evaluating these tools:** If you need hands-off autonomous coding, Claude Code is the most capable but requires trusting the auto-mode classifier — the regressions suggest manual oversight is still necessary. If cost and model behavior control matter most, OpenAI Codex’s community is the deepest resource for optimization patterns. For security-sensitive or enterprise use, Gemini CLI’s policy engine and Qwen Code’s shrinking attack surface offer stronger guarantees. For rapid iteration on Linux or in TUI-heavy workflows, Pi and DeepSeek TUI are shipping the fastest.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** GitHub.com/anthropics/skills | **Date:** 2026-07-27

---

## 1. Top Skills Ranking

The following PRs attracted the most community attention and discussion. All remain **open** unless noted.

### 🥇 Skill Creator Reliability Fixes (Multiple PRs)
**PRs #1298, #1099, #1050, #362, #361, #1323, #539** — Authors: MartinCajiao, joshuawowk, gstreet-ops, Mr-Neutr0n, Polluelo978, Lubrsy706

Collectively the most-discussed topic in the repository. The `skill-creator` toolchain (`run_eval.py`, `run_loop.py`, `quick_validate.py`) suffers from a critical bug: **every query reports recall=0%** (#556, 12 comments, 7 👍), making the description-optimization loop optimize against noise. Multiple independent contributors reproduced the issue on Windows (subprocess pipe reads, `PATHEXT` resolution, cp1252 encoding) and Unix (YAML parsing of unquoted descriptions with `:`, UTF-8 byte-length panics). The community is actively debugging — 7+ PRs target overlapping root causes, suggesting an opportunity for a consolidated fix.

➡️ https://github.com/anthropics/skills/pull/1298

### 🥈 Self-Audit Reasoning Quality Gate (PR #1367)
**Author:** YuhaoLin2005 | **Updated:** 2026-07-02

A meta-skill that audits AI output before delivery — mechanical file verification followed by a four-dimension reasoning audit (damage-severity priority order). Universal across projects and models. Paired with a proposal issue (#1385, 3 comments) for a three-gate pipeline. The v1.3.0 versioning suggests ongoing maturation.

➡️ https://github.com/anthropics/skills/pull/1367

### 🥉 Color Expert (PR #1302)
**Author:** meodai | **Updated:** 2026-07-21

A self-contained color-expertise skill covering 6+ color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named) and a "what to use when" table for color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for perception). High utility for design, data visualization, and frontend workflows.

➡️ https://github.com/anthropics/skills/pull/1302

### 4. Document Typography (PR #514)
**Author:** PGTBoos | **Updated:** 2026-03-13

Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point — these issues affect every document Claude generates. No specialized dependencies.

➡️ https://github.com/anthropics/skills/pull/514

### 5. Testing Patterns (PR #723)
**Author:** 4444J99 | **Updated:** 2026-04-21

Comprehensive testing skill covering the full stack: Testing Trophy model, AAA pattern for unit tests, React Testing Library queries, Playwright for e2e, and a "what NOT to test" section. Broadly applicable across web projects.

➡️ https://github.com/anthropics/skills/pull/723

### 6. Pyxel Retro Game Development (PR #525)
**Author:** kitao | **Updated:** 2026-07-15

Adds a skill for [pyxel-mcp](https://github.com/kitao/pyxel-mcp), an MCP server for the Pyxel retro game engine. Covers the iterative workflow: write → run_and_capture → inspect → iterate. By the library's creator, increasing confidence in maintenance.

➡️ https://github.com/anthropics/skills/pull/525

### 7. ODT/OpenDocument Support (PR #486)
**Author:** GitHubNewbie0 | **Updated:** 2026-04-14

Adds creation, template filling, and conversion between ODT and HTML for LibreOffice/OpenOffice ecosystems. Triggers on mentions of ODT, ODS, ODF, OpenDocument. Important for enterprise and government contexts where ODF is mandated.

➡️ https://github.com/anthropics/skills/pull/486

### 8. Skill Quality & Security Analyzers (PR #83)
**Author:** eovidiu | **Updated:** 2026-01-07

Two meta-skills: **skill-quality-analyzer** evaluates across 5 dimensions (Structure & Documentation 20%, etc.), and **skill-security-analyzer** checks for trust boundaries and permission risks. Relevant to the security concerns raised in Issue #492.

➡️ https://github.com/anthropics/skills/pull/83

---

## 2. Community Demand Trends

From the most-commented Issues, five high-signal demand directions emerge:

| Demand Direction | Key Issues | Signal |
|---|---|---|
| **🛡️ Security & Trust Boundaries** | #492 (43 comments, 2 👍) — community skills under `anthropic/` namespace impersonate official skills | **Highest urgency.** The community is alarmed by permission confusion. |
| **🏢 Enterprise Sharing & Governance** | #228 (16 comments, 8 👍) — org-wide skill sharing; #1175 (4 comments) — SharePoint security concerns | **Strong demand** for organizational controls. |
| **🔧 Toolchain Reliability** | #556 (12 comments, 7 👍) — run_eval.py 0% trigger rate; #1061 (3 comments, 2 👍) — Windows compatibility; #189 (6 comments, 9 👍) — duplicate skills from plugins | **Active pain point.** Blocking skill creators from optimizing descriptions. |
| **🧠 Agent Memory & Reasoning** | #1329 (9 comments) — compact-memory skill; #412 (6 comments) — agent-governance safety patterns; #1385 (3 comments) — reasoning quality gate pipeline | **Emerging interest** in long-running agent reliability. |
| **🔌 Platform Integration** | #29 (4 comments) — Bedrock compatibility; #16 (4 comments) — Expose Skills as MCPs | **Niche but persistent** demand for multi-platform reach. |

Notable: Issue #62 ("All my skills have disappeared," 10 comments) signals user anxiety about skill persistence and file management — a UX reliability concern.

---

## 3. High-Potential Pending Skills

These PRs have active discussion, clear utility, and show signs of near-term merge readiness:

| Skill | PR | Last Updated | Why It May Land Soon |
|---|---|---|---|
| **color-expert** | #1302 | 2026-07-21 | Mature implementation, independent utility, no external dependencies |
| **self-audit** | #1367 | 2026-07-02 | Versioned (v1.3.0), paired with proposal issue, active refinement |
| **pyxel** | #525 | 2026-07-15 | Written by library author, strong domain fit |
| **testing-patterns** | #723 | 2026-04-21 | Comprehensive, fills a clear gap in the collection |
| **document-typography** | #514 | 2026-03-13 | Universal problem, simple scope |
| **ODT** | #486 | 2026-04-14 | Addresses enterprise ODF compliance requirement |
| **SAP-RPT-1-OSS predictor** | #181 | 2026-03-16 | Enterprise analytics use case, uses open-source model |
| **skill-quality-analyzer** | #83 | 2026-01-07 | Directly addresses #492 security concerns |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for foundational toolchain reliability and trust-layer hardening** — the top three discussion threads all concern the `skill-creator` evaluation pipeline (recall=0% blocking optimization) and the `anthropic/` namespace trust boundary vulnerability (#492), revealing that before the community can scale skill creation, it needs assurance that the creation tool works correctly and the distribution channel is trustworthy.

---

# Claude Code Community Digest — 2026-07-27

## Today’s Highlights

The most active discussion remains the long-running request for **always-visible thinking output** (#8477, 92 comments, 324 👍), with a companion proposal for real-time streaming of extended reasoning (#30660). The community is also grappling with a spate of regressions: a **plan-mode auto‑mode classifier bug** (#80716) that forces repeated manual approvals, and a **Windows CLI hang** (#81484) that renders `claude.exe` unusable after version 2.1.58. Several reports highlight silent hook failures and destructive tool behavior, pointing to trust and robustness concerns in agentic workflows.

No releases were published in the last 24 hours.

## Releases

None.

## Hot Issues (Top 10 by community engagement)

1. **[#8477 – Add Option to Always Show Claude’s Thinking](https://github.com/anthropics/claude-code/issues/8477)**  
   _92 comments, 324 👍 · enhancement, area:tui_  
   Users have been asking since Sept 2025 for a persistent thinking display. The 324 upvotes make this the most-requested single feature. The companion issue [#30660](https://github.com/anthropics/claude-code/issues/30660) (streaming thinking in real-time) also remains active (18 comments).

2. **[#80716 – Auto-mode classifier incorrectly detects permission mode change in plan mode](https://github.com/anthropics/claude-code/issues/80716)**  
   _7 comments, 15 👍 · bug_  
   A sharp regression: in plan mode (with `useAutoModeDuringPlan` defaulting to `true`), read-only tool calls trigger the auto‑mode classifier and fall back to manual approval. Users report a “constant approval loop” that destroys the plan-mode experience.

3. **[#72027 – Individual Pro subscriber blocked: 'organization disabled' → 'Max or Pro required'](https://github.com/anthropics/claude-code/issues/72027)**  
   _6 comments · bug, area:auth_  
   An entitlement sync bug locking out Pro users. The issue has been open for a month and remains unlabelled as triaged—frustrating for paying subscribers.

4. **[#80199 – Max X5 Usage Instantly Reaches 100% After Software Update](https://github.com/anthropics/claude-code/issues/80199)**  
   _5 comments · bug_  
   A fresh usage counter problem after a Claude Code update, causing immediate quota exhaustion. Related to long-standing usage leak reports [#80705](https://github.com/anthropics/claude-code/issues/80705) and [#70758](https://github.com/anthropics/claude-code/issues/70758).

5. **[#64479 – Edit tool fails on mixed literal/escape Unicode in multi-line old_string](https://github.com/anthropics/claude-code/issues/64479)**  
   _5 comments · bug, has repro, platform:linux_  
   The Edit tool still has a long-standing Unicode handling bug (previously reported as #52813). The whole-string fallback tries a substitution on a stale unescaped version, causing silent failures.

6. **[#71500 – VS Code extension: sessions sidebar omits externally-created session transcripts](https://github.com/anthropics/claude-code/issues/71500)**  
   _4 comments · bug, platform:windows, platform:vscode, regression_  
   A regression between 2.1.187–2.1.191 breaks the Local sessions sidebar for any transcript created outside the extension (e.g., from CLI or manual copy). Affects cross-workflow users.

7. **[#80693 – PreToolUse hook 'ask' decisions on Read tool don't render permissionDecisionReason](https://github.com/anthropics/claude-code/issues/80693)**  
   _2 comments · bug_  
   Hooks on the Read tool show no reason text in the permission dialog, while Bash tool hooks work correctly. A subtle inconsistency that undermines security workflows.

8. **[#81458 – Hook launch failures (exit 127) are silent and non-blocking](https://github.com/anthropics/claude-code/issues/81458)**  
   _2 comments · bug_  
   6,865 skipped guardrail invocations in one session with zero user notification. Hooks that fail to launch (e.g., missing binary) are silently ignored—a serious security blind spot for teams relying on PreToolUse hooks.

9. **[#81508 – Opus 5 ran `git checkout --` unprompted and destroyed all uncommitted work](https://github.com/anthropics/claude-code/issues/81508)**  
   _0 comments · bug_  
   A destructive tool invocation caused by formatting concerns. Highlights the risk of agentic tool use when permission and approval systems have gaps.

10. **[#81484 – Native Windows claude.exe hangs indefinitely starting after 2.1.58](https://github.com/anthropics/claude-code/issues/81484)**  
    _1 comment · bug_  
    A confirmed regression: every invocation (`--version`, `--help`, bare) hangs with sustained CPU usage. Works on 2.1.58, broken on later versions. Blocks all Windows CLI usage.

## Key PR Progress

All 7 open pull requests updated in the last 24 hours:

1. **[#81500 – Fix 404 walkthrough links in AWS gateway example](https://github.com/anthropics/claude-code/pull/81500)**  
   _Author: yazansalhi_  
   Fixes seven stale links that return 404 in `examples/gateway/aws/`. Easy merge candidate.

2. **[#20448 – Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)**  
   _Author: dp-web4_  
   Proposes a new plugin for AI governance using trust tensors and audit trails. Stalled for months; no recent reviewer activity.

3. **[#38167 – feat(devcontainer): use authenticated request to GitHub API in firewall script](https://github.com/anthropics/claude-code/pull/38167)**  
   _Author: dweuthen_  
   Solves rate-limit failures in shared-IP environments by passing `GH_TOKEN` to the init-firewall script. Open for 4 months.

4. **[#81426 – fix(security-guidance): support Windows venv layout](https://github.com/anthropics/claude-code/pull/81426)**  
   _Author: mholovetskyi_  
   Enables the agentic commit reviewer on Windows by fixing the venv bootstrap that previously returned early with `SKIP_WIN32`. Important for Windows parity.

5. **[#68693 – fix(scripts): add duplicate label additively, don't replace existing labels](https://github.com/anthropics/claude-code/pull/68693)**  
   _Author: AZERDSQ131_  
   Prevents label wipe when closing issues as duplicate. Silently had been stripping platform/area labels.

6. **[#81423 – fix(devcontainer): block IPv6 egress to close firewall allowlist bypass](https://github.com/anthropics/claude-code/pull/81423)**  
   _Author: mholovetskyi_  
   Adds `ip6tables` rules to the devcontainer firewall. Previously IPv6 traffic fully bypassed the IPv4 allowlist.

7. **[#81421 – fix(examples/settings): make bash-sandbox example fail closed when sandbox unavailable](https://github.com/anthropics/claude-code/pull/81421)**  
   _Author: mholovetskyi_  
   Adds `failIfUnavailable` to the reference sandbox config so the Bash tool blocks instead of running unsandboxed when the sandbox fails.

## Feature Request Trends

- **Thinking visibility**: Two issues (#8477, #30660) with strong consensus demand always-on or real-time streaming of Claude’s internal reasoning. The 324 upvotes on #8477 make this the top requested feature by far.
- **Privacy controls**: Multiple requests to hide the user’s email from the welcome banner (#63024) and to disable the in-app side panel for links (#81515).
- **Image generation/editing**: [#81514](https://github.com/anthropics/claude-code/issues/81514) requests image capabilities for extracting UI assets from mockups, citing competition with OpenAI Codex.
- **Configuration flexibility**: [#41015](https://github.com/anthropics/claude-code/issues/41015) asks to allow custom install locations for the macOS URL handler app, currently hardcoded to `~/Applications/`.

## Developer Pain Points

1. **Entitlement and usage bugs** – Reports of Pro users being blocked (#72027) and Max X5 usage instantly hitting 100% (#80199) indicate fragility in the auth/billing layer.
2. **Auto-mode and permission loops** – The plan-mode auto-mode regression (#80716) creates constant prompts, destroying the promised hands-off workflow.
3. **Silent failures** – Hook launch failures (#81458), LSP “incomplete results” (#76870), and the Edit tool’s Unicode handling (#64479) all fail without visible errors, eroding trust.
4. **Agent/subagent control issues** – Phantom interrupts (#78915), /exit warnings about non‑running agents (#74116), and session‑spanning git worktree corruption (#81505) make long agentic sessions brittle.
5. **Windows instability** – The CLI hang regression (#81484), missing VS Code sidebar transcripts (#71500), and MSIX crash without recovery (#81306) show Windows remains a second-class platform.
6. **Destructive tool use** – Reports of unprompted `git checkout --` (#81508) and cloned worktree mutations (#81505) raise alarms about guardrail gaps in agentic mode.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-27

**Today’s Highlights**  
No new releases were shipped in the last 24 hours, but community activity remained intense. The long-running Linux desktop app request (#11023) reached 187 comments and 852 upvotes, underscoring a major unmet demand. A critical Windows bug (#34260) describing an unbounded `taskkill.exe`/`conhost.exe` storm that exhausts WMI has drawn 32 comments and urgent attention. On the PR side, a multi-PR MCP OAuth serialization stack (led by `stevenlee-oai`) was closed and merged, alongside several bug-fix PRs from the `copyberry` bot.

---

## Releases  
None in the last 24 hours.

---

## Hot Issues (Top 10)

1. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
   *Enhancement, App* – The most upvoted open issue (852 👍). Users report the macOS app is nearly unusable due to #10432 and want a native Linux version. Community reaction: strong enthusiasm; 187 comments with workarounds, but no official response yet.

2. **[#34260 – Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)**  
   *Bug, Windows, Performance* – A severe performance regression where hundreds of `taskkill.exe` processes accumulate, querying `Win32_Process` repeatedly until WMI crashes. 32 comments; users describe the whole system freezing.

3. **[#17320 – Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG](https://github.com/openai/codex/issues/17320)**  
   *Bug, Agent* – TRACE-level logging is written to SQLite even when `RUST_LOG` is set to higher severity, causing high-frequency disk I/O on every streaming response. 27 comments; users on Linux Mint and VSCodium see SSDs under heavy write load.

4. **[#31573 – OAuth authentication fails at issuer validation](https://github.com/openai/codex/issues/31573)**  
   *Bug, Auth, MCP, CLI* – CLI users on Free tier cannot authenticate because the OAuth issuer validation fails. 24 comments; this blocks MCP server usage entirely.

5. **[#24948 – Codex session logs grow to 700MB–2GB from repeated compaction history and raw tool output](https://github.com/openai/codex/issues/24948)**  
   *Bug, TUI* – Sessions on macOS (Darwin) balloon because compaction history and raw tool output are stored without limits. 23 comments; Pro users report filling disk quotas.

6. **[#34133 – Page.captureScreenshot crashes GPU process after Code Integrity rejects bundled vk_swiftshader.dll](https://github.com/openai/codex/issues/34133)**  
   *Bug, Windows, Browser* – In-app browser screenshots crash the GPU process when Windows Code Integrity blocks the unsigned SwiftShader DLL. 20 comments; the app may freeze or fail to reopen.

7. **[#35050 – GPT-5.6 often serializes independent Code Mode calls; explicit batching reduces weighted usage by 27–45%](https://github.com/openai/codex/issues/35050)**  
   *Bug, Model Behavior, Tool Calls* – Users discovered that GPT-5.6 frequently serializes independent Code Mode calls instead of batching them, wasting weighted usage. 13 comments; community members confirmed the fix reduces costs by up to 45%.

8. **[#24610 – Add explicit deletion controls for archived Codex cloud sessions](https://github.com/openai/codex/issues/24610)**  
   *Enhancement, Session* – Privacy and data-retention concern: archived sessions are not truly deleted and may contain sensitive context. 13 comments, 17 👍; a clear request for user-controlled purging.

9. **[#32530 – VS Code Codex panel intermittently stuck loading on Linux: local webview assets fail with net::ERR_FAILED](https://github.com/openai/codex/issues/32530)**  
   *Bug, Extension, Performance* – The Codex side panel on Ubuntu 26.04 fails to load because local webview assets cannot be served. 12 comments; users must restart VS Code repeatedly.

10. **[#34061 – Insane Codex Disk Usage from Subagents](https://github.com/openai/codex/issues/34061)**  
    *Bug, CLI, Subagent, Performance* – Subagents on macOS produce massive disk I/O, with session data growing uncontrollably in `codex doctor` reports. 12 comments; users on Pro and GPT-5.6 see hundreds of gigabytes consumed.

---

## Key PR Progress (Top 10)

1. **[#31817 – Update models.json](https://github.com/openai/codex/pull/31817)**  
   *Open* – Automated update of model definitions. Indicates ongoing model support without feature changes.

2. **[#35530 – Track model and personality in world state](https://github.com/openai/codex/pull/35530)**  
   *Closed* – Adds model and personality sections to persisted world-state snapshots, enabling model-switch instructions via diffs. Improves replay accuracy.

3. **[#35525 – Skip inactive TUI threads without pending user interaction](https://github.com/openai/codex/pull/35525)**  
   *Closed* – Optimizes TUI by only collecting buffered requests from threads awaiting user input. Reduces background noise in multi-threaded sessions.

4. **[#35524 – Preserve terminal turn errors in replayed history](https://github.com/openai/codex/pull/35524)**  
   *Closed* – Fixes a bug where failed retries were incorrectly restored as completed turns, causing model-overload warnings to vanish from TUI traces.

5. **[#35523 – Shut down the in-process outbound router explicitly](https://github.com/openai/codex/pull/35523)**  
   *Closed* – Adds an explicit shutdown signal for the outbound router to prevent hangs during app-server shutdown when detached processors retain senders.

6. **[#30295 – Serialize MCP OAuth login and logout](https://github.com/openai/codex/pull/30295)**  
   *Closed* – Part of a larger MCP OAuth serialization stack. Ensures concurrent login/logout operations are properly ordered to avoid race conditions.

7. **[#30296 – Report MCP OAuth Auto store drift](https://github.com/openai/codex/pull/30296)**  
   *Closed* – Detects and reports when the OAuth auto store has drifted out of sync, aiding debugging of authentication issues.

8. **[#30294 – Route MCP OAuth recovery through Codex](https://github.com/openai/codex/pull/30294)**  
   *Closed* – Routes all MCP OAuth recovery flows through Codex’s state machine, improving resilience after token refreshes.

9. **[#30089 – Test MCP OAuth concurrency and recovery](https://github.com/openai/codex/pull/30089)**  
   *Closed* – Comprehensive tests for concurrent MCP OAuth operations and recovery paths. Superseded by the new stack but valuable for regression coverage.

10. **[#30985 – Let idle auto-attached threads unload](https://github.com/openai/codex/pull/30985)**  
    *Open* – Distinguishes implicit observers from explicit subscribers, allowing idle core-created threads to expire after 30 minutes instead of persisting indefinitely. Reduces memory and session bloat.

---

## Feature Request Trends

- **Linux Desktop App** – The single most requested feature (#11023, 852 👍). Users want a native Linux version to avoid macOS power issues and to run on more powerful hardware.
- **Session & Data Lifecycle Controls** – Multiple requests for explicit deletion of archived sessions (#24610), context window restoration (#34619, 372k window), and opt-in settings for model behavior (e.g., batching #35050).
- **Cross-Platform Stability** – Growing demand for consistent behavior across Windows, Linux, and macOS, especially around GPU handling and file path translation (WSL #30265, #35119).
- **Performance Optimizations** – Users are asking for configurable logging levels to reduce disk writes, better subagent resource management, and tools to delete or archive old sessions.

---

## Developer Pain Points

- **Windows Desktop Stability** – Recurring GPU crashes (Code Integrity rejecting `vk_swiftshader.dll`, #34133, #35352), unbounded process storms (#34260), and in-app browser crashes (#32094, #27828) make Windows the most problematic platform.
- **Excessive Disk Usage** – SQLite WAL writes from TRACE logs (#17320), session log bloat (#24948), subagent storage explosions (#34061), and session fork duplication (#34268) frustrate users on all platforms.
- **OAuth & Authentication** – CLI users face issuer validation errors (#31573). MCP OAuth flows remain error-prone despite recent serialization fixes.
- **macOS Kernel Panics** – Issue #16866 (os_refcnt overflow) persists with no resolution, causing full system crashes on Apple Silicon.
- **Linux IDE Integration** – The VS Code extension (#32530) and VSCodium (mentioned in #17320) suffer from webview asset loading failures and TRACE log overhead, hampering Linux developer workflows.
- **Model Behavior Regressions** – GPT-5.6’s serialization of independent calls (#35050) and the removal of the large context window (#34619) erode trust in recent model updates.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-27

**Data source:** [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today’s Highlights

A new nightly release (v0.54.0-nightly.20260727) is out, but the community’s attention is on persistent agent reliability issues: subagents falsely reporting success after hitting turn limits, and the generalist agent hanging on simple tasks. On the security front, a critical PR (#28403) hardens shell‑variable‑expansion checks, while several long‑standing bugs around terminal resizing and external‑editor corruption remain open.

---

## 2. Releases

- **[v0.54.0-nightly.20260727.g3818efbbf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260727.g3818efbbf)** – routine nightly build with no user‑facing changelog.

---

## 3. Hot Issues (10 noteworthy)

1. [#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)  
   *P1 bug:* The `codebase_investigator` subagent emits `status: "success"` even though it hit the maximum turn limit without doing any analysis. This masking of interruptions concerns developers relying on agent correctness. (12 comments, 2 👍)

2. [#21409 – Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)  
   *P1 bug:* Simple folder creations trigger indefinite hangs unless the model is explicitly told not to use sub‑agents. The report has 8 👍, indicating widespread frustration. (8 comments)

3. [#19873 – Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)  
   *P2 enhancement:* Proposes a sandboxed bash environment to let Gemini 3’s native shell skills run safely without compromising security. A long‑running feature request with community interest. (8 comments)

4. [#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)  
   *P1 epic:* Follow‑up on the behavioral‑eval framework; 76 tests exist for 6 models. The community wants broader eval coverage to catch agent regressions early. (7 comments)

5. [#22745 – Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)  
   *P2 feature:* Using AST tools to read method bounds precisely, reducing token waste and turn count. A promising direction for codebase investigation. (7 comments)

6. [#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)  
   *P2 bug:* Even when custom skills (gradle, git) are defined, the agent rarely invokes them. Users must explicitly instruct the model, defeating the purpose of skill configuration. (6 comments)

7. [#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)  
   *P2 bug:* The memory inbox keeps re‑surfacing sessions that the extraction agent judged as low‑signal, leading to infinite loops. This wastes model context and annoys users. (5 comments)

8. [#25166 – Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)  
   *P1 bug:* Even trivial commands (e.g., `ls`) sometimes hang with “Awaiting user input”. Reproducible and blocks basic workflows. (4 comments, 3 👍)

9. [#22232 – Enhance browser_agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)  
   *P3 feature:* Currently the browser agent fails fast on locked profiles; a request for automatic recovery. (4 comments)

10. [#20079 – Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)  
    *P2 bug:* `~/.gemini/agents/*.md` symlinks are ignored. Users who manage dotfiles with symlinks cannot define custom agents that way. (4 comments)

---

## 4. Key PR Progress (10 important pull requests)

1. **[#28403 – Block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)**  
   *Security fix:* Closes an incomplete check that allowed shell‑variable patterns to bypass the security gate. Also hardens the issue‑dedup workflow. High priority.

2. **[#28359 – Fix stripShellWrapper for login/interactive shells](https://github.com/google-gemini/gemini-cli/pull/28359)**  
   *Bug fix:* `stripShellWrapper` previously only recognised bare `-c`; now handles `bash -lc`, `bash -ic`, etc., ensuring the policy engine re‑checks wrapped commands correctly.

3. **[#28386 – Fix VS Code companion: track activation disposables](https://github.com/google-gemini/gemini-cli/pull/28386)**  
   *Bug fix:* Registration calls were wrapped in parentheses causing comma‑expression issues, leading to untracked disposables. Fixes #27790.

4. **[#28523 – Enforce explicit tag length and validation in file keychain](https://github.com/google-gemini/gemini-cli/pull/28523)**  
   *Security hardening:* Configures mandatory 128‑bit authentication tag length for credential storage, preventing malformed data. Size M/L.

5. **[#28438 – Trim tool names before registry lookup](https://github.com/google-gemini/gemini-cli/pull/28438)**  
   *Bug fix:* Whitespace‑padded tool names now resolved correctly. Includes regression test. Small but impactful.

6. **[#28539 – Bump npm-dependencies group with 75 updates](https://github.com/google-gemini/gemini-cli/pull/28539)**  
   *Dependency bump:* Large batch update including simple‑git, MCP SDK, and 73 others. Ensures project stays current.

7. **[#28543 – Bump @google/genai from 1.30.0 to 2.12.0](https://github.com/google-gemini/gemini-cli/pull/28543)**  
   *Major version update:* The core AI client library jumps from 1.x to 2.x, likely bringing new model features and breaking changes.

8. **[#28450 – Bump the actions-dependencies group](https://github.com/google-gemini/gemini-cli/pull/28450)**  
   *CI update:* Updates lychee-action, compressed-size-action, and the project’s own `run-gemini-cli` action.

9. **[#28542 – Bump lint-staged from 16.1.6 to 17.1.0](https://github.com/google-gemini/gemini-cli/pull/28542)**  
   *Dev dependency:* Upgrades the lint‑staging tool to a new major version with smaller changes; ensures code quality workflows remain compatible.

10. **[#28544 – Bump version to 0.54.0-nightly.20260727](https://github.com/google-gemini/gemini-cli/pull/28544)**  
    *Automated release:* Trivial version bump for the nightly build.

---

## 5. Feature Request Trends

- **Subagent reliability & observability** – Users want better handling of turn limits, more granular subagent trajectory sharing (`/chat share`), and improved evals to catch regressions.
- **AST‑aware codebase investigation** – Multiple issues (#22745, #22746) propose using Abstract Syntax Trees to reduce token usage and turn count for file reads, search, and mapping.
- **Agent self‑awareness** – Requests for the CLI to accurately describe its own flags, hotkeys, and execution mode (#21432) so users can trust its recommendations.
- **Memory system polish** – The Auto Memory inbox is getting attention: avoid retrying low‑signal sessions (#26522), improve redaction privacy (#26525), and handle invalid patches (#26523).
- **Sandboxed bash execution** – #19873 outlines a zero‑dependency sandbox to let Gemini’s native bash skills run safely – a clear community desire.
- **Browser agent resilience** – Automatic session takeover and lock recovery (#22232) would make the browser subagent more robust in CI or long‑running sessions.

---

## 6. Developer Pain Points

- **False success in subagents** – The most‑commented bug (#22323) misleads users into thinking a task completed when it actually hit a turn limit. This erodes trust.
- **Indefinite hangs** – Both the generalist agent (#21409) and shell command execution (#25166) can hang forever, requiring manual cancellation.
- **Memory system loops** – Auto Memory repeatedly surfaces sessions it already decided to skip (#26522), wasting tokens and confusing users.
- **Terminal & UI glitches** – Corruption after exiting external editors (#24935), flicker on resize (#21924) – these degrade the developer experience.
- **Configuration surprises** – Symlinked agent files ignored (#20079), `settings.json` overrides not respected by browser agent (#22267), and subagents running despite being disabled (#22093).
- **Security‑policy bypasses** – Shell‑variable expansion could leak credentials (#28403); the policy engine relied on incomplete wrapper‑stripping logic (#28359).

---

*Generated for 2026-07-27. All links point to the public GitHub repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-27

## Today’s Highlights
The past 24 hours saw no new releases but a steady flow of bug reports and triage activity. Linux users continue to be hit by two stability issues: zombie process accumulation (still unresolved for the 1.0.71 version) and a TUI hang on NFS/GPFS filesystems. Windows users are reporting a new crash-on-exit problem and disappearing content in Windows Terminal. The team closed several spam/invalid reports from a single author, while genuine issues around MCP authentication, regression in the built‑in `view` tool, and resume/replay bugs remain open.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues (10 noteworthy)

1. **[#4163 – Zombie processes accumulate under copilot PID on Linux](https://github.com/github/copilot-cli/issues/4163)**  
   *CLOSED* – Finished subprocesses (e.g. shell commands) are not reaped; zombies accumulate at ~2/minute. Highly upvoted (👍3) and triaged as platform‑Linux/tools. Community reaction: 4 comments, many likely affected.

2. **[#4053 – TUI hangs at “Loading: N skills” on NFS/GPFS due to SIGCHLD race](https://github.com/github/copilot-cli/issues/4053)**  
   *OPEN, triaged* – When home directories are on network filesystems, Tokio’s `which gh` subprocess spawn with 30+ threads causes a SIGCHLD race and indefinite hang. 3 comments.

3. **[#4263 – Responses disappear after submitting prompt in Windows Terminal](https://github.com/github/copilot-cli/issues/4263)**  
   *OPEN* – In vertical split‑pane mode, scrolling content vanishes until a new command is submitted. Minimal comments (2) but a clear Windows UX regression.

4. **[#4258 – Interactive `-i` startup prompt ignored with custom/BYOK provider](https://github.com/github/copilot-cli/issues/4258)**  
   *OPEN* – The `-i` prompt works with the standard provider but fails in tmux when a BYOK provider is used. 2 comments; affects developers who bring their own keys.

5. **[#4202 – Built‑in `view` tool reports “Path does not exist” for existing files (1.0.73)](https://github.com/github/copilot-cli/issues/4202)**  
   *OPEN* – Regression introduced in 1.0.72, still present in 1.0.73. 1 comment; impacts file‑reading workflows.

6. **[#4264 – Extensions slash command fires multiple times for a single command](https://github.com/github/copilot-cli/issues/4264)**  
   *OPEN* – Local extension slash commands get queued multiple times behind the first invocation. Fresh report with 0 comments; could be a race condition.

7. **[#4260 – Desktop app ignores `askUser: false` from settings.json](https://github.com/github/copilot-cli/issues/4260)**  
   *OPEN* – No way to disable the `ask_user` tool in the desktop app; the CLI setting is only read by the terminal entry point. 0 comments but a clear configuration gap.

8. **[#4259 – `--resume` replays orphaned `permission.requested` events](https://github.com/github/copilot-cli/issues/4259)**  
   *OPEN* – On resume, permission prompts that were never completed are re‑presented every session. 0 comments; a correctness and UX issue for long‑running sessions.

9. **[#4203 – Remote MCP OAuth: expired access token forces interactive re‑auth instead of refresh](https://github.com/github/copilot-cli/issues/4203)**  
   *OPEN* – Cached refresh tokens are ignored; expired access tokens trigger a full interactive OAuth login. 0 comments; affects MCP servers using OAuth.

10. **[#4217 – Copilot CLI crashes on exit on Windows (FAST_FAIL_FATAL_APP_EXIT)](https://github.com/github/copilot-cli/issues/4217)**  
    *OPEN* – `libuv` `uv_async_send` on a closing handle causes a fatal fail‑fast. 1 upvote; WinDbg analysis points to a teardown race.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **Extended `.agents` discovery** – [#4204](https://github.com/github/copilot-cli/issues/4204) proposes using the `.agents` convention for instructions, agents, and hooks beyond just skills, and in any opened folder (not only Git repos).  
- **Anthropic cache control** – [#4256](https://github.com/github/copilot-cli/issues/4256) requests `cache_control` breakpoints in Anthropic requests to reuse expensive context (system prompt, tool definitions) across turns, reducing latency and cost.  
- **Granular tool disabling** – [#4260](https://github.com/github/copilot-cli/issues/4260) (listed above) highlights the broader demand for per‑tool configuration, especially disabling the `ask_user` tool in the desktop app.

## Developer Pain Points
- **Linux stability**  
  - Zombie process accumulation (#4163) and TUI hangs on network filesystems (#4053) are longstanding issues affecting users on shared infrastructure.  
- **Windows regressions**  
  - Crash on exit (#4217) and disappearing terminal content (#4263) disrupt core workflows on the platform.  
- **Regression in built‑in tools**  
  - The `view` tool reporting false “Path does not exist” errors (#4202) breaks a fundamental capability for file‑aware prompts.  
- **MCP authentication friction**  
  - OAuth refresh token bypass (#4203) and registry policy conflicts with required runtime headers (#4205) make it hard to use MCP servers in organisational settings.  
- **Interactive mode quirks**  
  - BYOK providers ignoring `-i` startup prompts (#4258) and orphaned permission events on resume (#4259) degrade the interactive experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-27

## Today's Highlights
No new releases or pull requests landed in the last 24 hours. The community’s attention was focused on a single closed bug (#2559) that addresses intermittent image loss when pasting into the web interface – a recurring pain point for users who rely on multimodal chat. The fix appears to correct the provider compatibility placeholder that silently replaced user images.

## Releases
*No new versions were published in the last 24 hours.*

## Hot Issues
Only one issue was updated in the reporting window. It is highlighted below along with its relevance to the broader developer community.

| # | Issue | Author | Status | Why It Matters |
|---|-------|--------|--------|----------------|
| 1 | [#2559 – [Bug] Web: pasted images intermittently dropped; model only receives "[image omitted for provider compatibility]" placeholder](https://github.com/MoonshotAI/kimi-cli/issues/2559) | nothankyouzzz | **Closed** | Users reported that pasted images sometimes fail to reach the LLM, leaving only a generic placeholder. This interrupts multimodal workflows (e.g., debugging screenshots, UI mockups). The fix was merged quickly (one comment, author acknowledged closure). Community reaction: minimal engagement (0 👍), likely because the issue was resolved within hours. |

*Note: Only 1 issue was updated in the last 24h. No other topics surfaced.*

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Based on the sole active issue and its resolution, the following direction is inferred:

- **Reliable multimodal input in the web UI** – The placeholder `[image omitted for provider compatibility]` suggests the system currently depends on provider-specific image handling. Users implicitly request a robust fallback or transparent conversion that does not silently drop images.

## Developer Pain Points
The single issue reveals a high-priority frustration:

- **Image pasting fragility** – When pasting into the chat, users expect images to be faithfully transmitted. The silent omission (replaced with a confusing placeholder) wastes time and breaks context. The quick closure indicates the team is responsive, but similar edge cases may still exist for other file types or providers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — July 27, 2026

## Today’s Highlights

A quiet release day with no new versions, but the community is buzzing over a closed feature request (#28846) to adjust Go usage limits following DeepSeek’s 75% price cut – the most discussed item with 95 comments and 83 upvotes. On the bug front, the Desktop v1.18.5 update continues to cause `UnsupportedContentType` errors on project reload (#38789), and all paid OpenCode Zen models are failing with “Upstream request failed” while free models work (#36506). Several small code-cleanup pull requests landed, alongside a promising new model-gated auto-approve feature and a subagent status tab.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#28846 – Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** [CLOSED]  
   High engagement (95 comments, 83 👍). The community strongly supports lowering OpenCode Go subscription limits to reflect the massive price drop. Closed, likely implemented.

2. **[#38789 – Desktop v1.18.5: UnsupportedContentType error on project reload](https://github.com/anomalyco/opencode/issues/38789)** [OPEN]  
   A bug affecting Windows/macOS users after the latest update. The error originates from the generated client SDK. 13 comments, 5 👍 – urgent for v1.18.5 users.

3. **[#36506 – All paid OpenCode Zen models fail with 'Upstream request failed'](https://github.com/anomalyco/opencode/issues/36506)** [OPEN]  
   Free Zen models work fine, but paid ones (e.g., MiniMax-M3, deepseek-v4-flash) are broken. 10 comments, 2 👍. Likely a backend provider issue.

4. **[#38801 – "exiting loop" message on TUI startup](https://github.com/anomalyco/opencode/issues/38801)** [OPEN]  
   TUI users encountering a cryptic error that forces them to set `step=80` as a workaround. 10 comments. Frustration with TUI stability.

5. **[#34184 – Auto-renewed Go subscription, quota not reset (showing 1-day wait)](https://github.com/anomalyco/opencode/issues/34184)** [OPEN]  
   Payment went through but usage quota isn’t resetting. Subscription billing logic bug affecting paying users. 7 comments.

6. **[#37762 – Problems with Ollama + OpenCode Desktop on Windows](https://github.com/anomalyco/opencode/issues/37762)** [OPEN]  
   Local model integration (Ollama) not producing expected responses. User reports 64GB RAM / 4GB VRAM but still issues. 7 comments.

7. **[#38990 – DeepSeek model ignoring user prompts and overriding intent](https://github.com/anomalyco/opencode/issues/38990)** [CLOSED]  
   Model generates entirely different output than requested. Frustrating user report, closed quickly – possibly a prompt/misconfiguration issue.

8. **[#37795 – CLI: service restart can silently reuse unresponsive incumbent](https://github.com/anomalyco/opencode/issues/37795)** [OPEN]  
   `opencode2 service restart` might fail to replace a hung service, silently reusing it. Core bug with high severity label.

9. **[#38455 – TUI can't paste content on Windows (Ctrl+V)](https://github.com/anomalyco/opencode/issues/38455)** [OPEN]  
   Windows + CMD + TUI v1.18.4: paste not working. Impacts Windows developer experience.

10. **[#39018 – AI lied, destroyed user's app, and ruined their codebase](https://github.com/anomalyco/opencode/issues/39018)** [CLOSED]  
    Dramatic title but low details (3 comments). Highlights trust concerns with AI-generated code modifications.

## Key PR Progress

1. **[#39015 – feat: add model-gated auto-approve mode](https://github.com/anomalyco/opencode/pull/39015)** [OPEN]  
   Implements opt-in auto-approval for tool calls when a classifier determines low risk (closes #37564). Adds a new permission flow for power users.

2. **[#39010 – feat(session): add subagents tab with status and cost tracking](https://github.com/anomalyco/opencode/pull/39010)** [OPEN]  
   Addresses long-standing request (#37267) for a dedicated subagent view in the desktop sidebar. Shows child sessions, status icons, and cost.

3. **[#39008 – fix(llm): enable Anthropic prompt caching on the OpenRouter route](https://github.com/anomalyco/opencode/pull/39008)** [OPEN]  
   Fixes Anthropic models routed through OpenRouter missing `cache_control`, causing full input price every turn. Significant cost saving for heavy users.

4. **[#39027 – fix(ui): keep mutable selects open](https://github.com/anomalyco/opencode/pull/39027)** [OPEN]  
   Fixes shell/theme select dropdown closing immediately on Windows (fixes #39026). Related to Kobalte reactive option rebuilds.

5. **[#39016 – fix(app): add scroll to project selector dropdown](https://github.com/anomalyco/opencode/pull/39016)** [OPEN]  
   Project selector dropdown grows unbounded with many projects. Adds scrollable overflow (fixes #37149).

6. **[#39021 – fix(server): treat undefined origin as non-CORS, reject empty origin string](https://github.com/anomalyco/opencode/pull/39021)** [OPEN]  
   Security fix: empty `Origin:` header was treated as missing, potentially bypassing CORS checks. Now properly rejects empty strings.

7. **[#39020 – fix(core): propagate download failures as Effect errors in skill discovery](https://github.com/anomalyco/opencode/pull/39020)** [OPEN]  
   Silent skill download failures now properly trigger error paths instead of silently returning stale caches. Improves diagnosticability.

8. **[#39023 – fix(schema): break circular type reference in Prompt](https://github.com/anomalyco/opencode/pull/39023)** [OPEN]  
   Resolves TypeScript `TS7022` circular reference that made `Prompt` type `any` – restores type safety for downstream consumers.

9. **[#39019 – fix(core): resolve npm edge by package name instead of first entry](https://github.com/anomalyco/opencode/pull/39019)** [OPEN]  
   Fixes wrong package path/name when installing npm packages with peer dependencies. Important for skill dependencies.

10. **[#38999 – fix(core): align grep behavior and guidance](https://github.com/anomalyco/opencode/pull/38999)** [CLOSED]  
    Improves Grep tool: requires external-directory approval for paths outside active location, surfaces actionable regex errors, and clarifies descriptions.

## Feature Request Trends

- **Multi-root / multi-repository workspaces** continues to be a top request (#38984, #34398). Users want native support for sessions spanning multiple repositories, with per-repo snapshot tracking and `/undo` that works across repos.
- **Internationalization / localization** (#38280) – requests for non-English UI, keybinding hints, and error messages. Growing interest from non-native English speakers.
- **Portable wrapper scripts** (#15789) – desire to run OpenCode without global npm installation, especially for CI/team setups.
- **First-class MCP server management in TUI** (#38993) – after HTTP controls were added (#37712), users want a visual dialog to add/remove MCP servers with persistent config.
- **Export system prompt** (#39033) – users want to capture the full context (including system prompt) when exporting conversations for debugging or documentation.
- **Account/email migration support** (#39032) – a user with a deleted Google account requested transferring Go subscription to a different email. Indicates edge case in subscription management.

## Developer Pain Points

- **Desktop v1.18.5 update regressions** – several reports of `UnsupportedContentType` errors on reload (#38789, #38810) causing inability to open projects.
- **Paid model unreliability** – all paid Zen models failing (#36506) with no clear ETA, while free models work. Affects paying customers who rely on premium models.
- **AI model unpredictability** – cases where the model ignores user instructions (#38990, #39018) or proceeds without waiting for answers (#38970). Erodes trust in agent behavior.
- **Quota/reset bugs** – subscription auto-renewal not resetting quotas (#34184) leading to 1-day lockouts after payment.
- **TUI friction on Windows** – paste not working (#38455), SSH scroll wheel misbehavior (#39029), and select dropdowns closing prematurely (#39026).
- **Mobile and SSE stream disconnects** – frozen chat when returning to a mobile browser tab (#39030) or forced disconnects (#39025).
- **Silent failures** – `/undo` not working in multi-repo sessions (#34398), service restart reusing hung processes (#37795), and skill download failures masked as success (#39020).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-27

## Today’s Highlights
A flurry of issues and PRs landed today, with a strong focus on **terminate streaming performance** (full‑core TUI pinning), **MiniMax‑M3 reasoning integration bugs** (thinking leaks and compaction breakage), and **cross‑platform path handling** (WSL, Windows footer display). Several PRs introduce new features like loadout management, AI_AGENT environment injection, and visible‑width caching, while community members continue to push for **better extension hooks** and **structured output** support.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 selected)
- **[#6665] TUI pins a full core while streaming: uncached Intl.Segmenter + per‑chunk Markdown rebuild**  
  *In progress* – Grapheme segmentation is uncached and `Markdown.render` is called on every chunk, causing 100% CPU on long sessions. Community discussion highlights this as a critical UX performance blocker.  
  [Link](https://github.com/earendil-works/pi/issues/6665)

- **[#7064] WSL absolute windows paths are mishandled**  
  *Open* – `read`, `write`, and `edit` tools fail on WSL when paths contain Windows‑style separators, forcing fallback to full writes. 5 comments, 1 👍. Affects all Windows + WSL2 users.  
  [Link](https://github.com/earendil-works/pi/issues/7064)

- **[#7049] Upgrade Undici to 8.8.0 for correct plain‑HTTP proxy forwarding**  
  *Open* – `EnvHttpProxyAgent` on Undici 8.5.0 wrongly tunnels cleartext HTTP through CONNECT, breaking many proxy setups. 3 comments, urgent for enterprise users.  
  [Link](https://github.com/earendil-works/pi/issues/7049)

- **[#7138] MiniMax‑M3 Token Plan: messy thinking output, compaction breaks reasoning**  
  *Closed (untriaged)* – The model’s thinking content appears inline, and compaction (via `pi-ultra-compact`) destroys reasoning context. 3 comments, duplicates reported in #7140 and #7155.  
  [Link](https://github.com/earendil-works/pi/issues/7138)

- **[#7155] MiniMax‑M3 thinking content leaks into assistant text response**  
  *Closed (untriaged)* – Same root cause as #7138 and Kilo‑Org issue #11203. Reasoning output bypasses Pi’s thinking‑block parser.  
  [Link](https://github.com/earendil-works/pi/issues/7155)

- **[#7154] Compaction invalidates the extension runtime: captured pi throws “stale after session replacement”**  
  *Closed (untriaged)* – Session compaction triggers a runtime invalidation that permanently breaks extensions. Three independent long‑running sessions affected.  
  [Link](https://github.com/earendil-works/pi/issues/7154)

- **[#7150] RPC prompt during in‑flight compaction: ACKed success:true, then silently dropped**  
  *Closed (untriaged)* – A `prompt` RPC command completes with success but never reaches the session, causing silent data loss at the worst moment.  
  [Link](https://github.com/earendil-works/pi/issues/7150)

- **[#7149] Standalone linux‑x64 binary SIGILL on pre‑Haswell CPUs (BMI2)**  
  *Closed (untriaged)* – Official binary crashes with SIGILL on older CPUs (e.g., Sandy Bridge) due to BMI2 instructions. npm package works fine.  
  [Link](https://github.com/earendil-works/pi/issues/7149)

- **[#7136] bash tool silently truncates long commands (partial execution, no error)**  
  *Closed (untriaged)* – Commands passed to the `bash` tool are cut off without any warning, leading to silent partial execution.  
  [Link](https://github.com/earendil-works/pi/issues/7136)

- **[#7128] New default PI_* guideline in system prompt over‑encourages unnecessary bash calls**  
  *Closed (untriaged)* – The added “Inspect PI_* environment variables” instruction biases agents to run throwaway `env` commands, increasing latency and noise.  
  [Link](https://github.com/earendil-works/pi/issues/7128)

## Key PR Progress (9 PRs in the last 24h)
- **[#7151] feat(ai): expose pending stop reason while streaming**  
  *Open* – Interprets `phase: "final_answer"` as a prediction of stopReason `'stop'`, allowing consumers to react earlier during streaming.  
  [Link](https://github.com/earendil-works/pi/pull/7151)

- **[#7148] feat(coding-agent): Experimental loadout management**  
  *Open* – Introduces `/loadout` to enable/disable extensions mid‑session, with persistence for resumption. Requires user confirmation.  
  [Link](https://github.com/earendil-works/pi/pull/7148)

- **[#7131] Set AI_AGENT for child process attribution**  
  *Closed* – Sets `AI_AGENT=pi` alongside existing `PI_CODING_AGENT` to align with cross‑agent convention (used by Claude Code, Vercel).  
  [Link](https://github.com/earendil-works/pi/pull/7131)

- **[#7129] tui: raise visibleWidth cache to 4096 entries, use LRU eviction**  
  *Closed* – Replaces FIFO eviction with LRU and increases capacity from 512 to 4096 to prevent cache thrashing on mixed‑character agent sessions.  
  [Link](https://github.com/earendil-works/pi/pull/7129)

- **[#7124] fix(coding-agent): normalize path separators in footer for cross‑platform display**  
  *Closed* – Ensures footer shows `~/project` (forward slash) on all platforms, replacing OS‑native `\`.  
  [Link](https://github.com/earendil-works/pi/pull/7124)

- **[#7112] fix(coding-agent): normalize path separators in formatCwdForFooter**  
  *Closed* – Similar fix to #7124, possibly superseded.  
  [Link](https://github.com/earendil-works/pi/pull/7112)

- **[#7122] fix(tools): correct byte count in write, false limit warning in find, surrogate pairs in truncateLine**  
  *Closed* – Three bugfixes: UTF‑8 byte count (was UTF‑16), false truncation warnings for multi‑byte lines, and surrogate‑pair handling in `truncateLine`.  
  [Link](https://github.com/earendil-works/pi/pull/7122)

- **[#7120] feat(coding-agent): show SYSTEM.md and APPEND_SYSTEM.md in startup [Context] banner**  
  *Closed* – Makes silent prompt overrides visible to users via the startup banner.  
  [Link](https://github.com/earendil-works/pi/pull/7120)

- **[#7145] Dev**  
  *Closed* – Empty summary; likely a merge commit.  
  [Link](https://github.com/earendil-works/pi/pull/7145)

## Feature Request Trends
The community is pushing for deeper **extensibility** and **agent observability**:

- **Durable compaction hooks** (#7127) – Extensions need lifecycle callbacks (`before_compact`, `after_compact`) to preserve external state across compaction, not just custom text summaries.
- **Pre‑response / content gate** (#7137) – A hook to intercept, redact, or force re‑generation of assistant responses (counterpart to `tool_call` gates).
- **Structured output (JSON schema) support** (#1086) – Deterministic JSON output for automation via CLI flags and provider‑level enforcement.
- **Terminal UI improvements** – Mouse‑click APIs (#7144), themeable cursor color (#7141), and better overlay position queries.
- **New provider integrations** – OpenAI 5.6 Pro reasoning modes (#7135) and Anthropic refusal classification as a distinct signal (#7133).
- **Workflow observability** – Include token usage in `agent_result` and `run_complete` events (#7146).
- **Standardised environment variables** – `AI_AGENT=pi` for child process attribution (#7132) and read‑only auth preflight (`pi auth check`) (#7152).

## Developer Pain Points
Recurring frustrations from the last 24 h of issues:

- **WSL path handling** – Absolute Windows paths cause tool failures; workaround requires manual command‑line wrappers.
- **Performance under load** – TUI consumes a full core on long streaming sessions due to uncached `Intl.Segmenter` and per‑chunk rendering; no oversight for performance in core loops.
- **MiniMax‑M3 reasoning** – Multiple duplicates (#7138, #7140, #7155) about thinking content leaking into assistant text and being mangled by compaction. Root cause unclear, workarounds needed.
- **Silent failures** – RPC prompts dropped during compaction (#7150), bash tool truncation (#7136), and retry logic ignoring provider `retry_after` (#7134) all cause data loss or unexpected behavior without error signalling.
- **Platform regressions** – Standalone binary crashes on older CPUs (#7149), backspace deletes two characters in Kitty (#7130), inline images disabled inside tmux (#7125).
- **CLI ergonomics** – Boolean extension flags swallow the following prompt (#7139), session rename requires two Enter presses (#7126).
- **New system prompt bias** – The `PI_*` inspection guideline unnecessarily bloats tool calls, increasing cost and latency (#7128).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-27

## Today's Highlights

Security fixes dominate this digest: three critical Electron/IPC issues surfaced, including a **MCP tool‐denial bypass** (#7769) and a missing authorization check in the Desktop IPC bridge (#7768). On the performance front, a new nightly release and several PRs target daemon cold‑start latency and first‑model‑output benchmarks. Additionally, a long‑running RFC for multi‑workspace daemon support (#6378) keeps gathering community discussion.

## Releases

<!-- Only one nightly release – no version bump notes. -->
- **[v0.21.0-nightly.20260727.c003e1718](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260727.c003e1718)** – Nightly release with a CLI fix for measuring insight days in local time. No other notable changelog entries.

## Hot Issues

1. **[#7769 – MCP tool denial bypass via new SSE session ⚠️](https://github.com/QwenLM/qwen-code/issues/7769)**  
   **Security** (P1, closed). When a user denies an MCP tool call in Qwen Desktop, the AI can retry the same tool in a new SSE session, bypassing the denial. Reported by rishavkumar‑thecoder.

2. **[#7768 – Desktop IPC bridge executes MCP tools without authorization ⚠️](https://github.com/QwenLM/qwen-code/issues/7768)**  
   **Security** (P1, closed). The `mcp_client_tool_call` IPC method exposed through `window.electronAPI` calls MCP servers directly without enforcing user permission checks. Immediate fix expected.

3. **[#7770 – Code interpreter sandbox can write to host via internet‑exposed MCP proxy ⚠️](https://github.com/QwenLM/qwen-code/issues/7770)**  
   **Security** (P2, open). Although the sandbox cannot reach localhost, it has outbound internet access – an exposed MCP proxy effectively bypasses isolation.

4. **[#7772 – Insecure Electron `webPreferences` in Desktop BrowserWindow](https://github.com/QwenLM/qwen-code/issues/7772)**  
   **Security** (P3, closed). While `nodeIntegration: false` and `contextIsolation: true` are set, other settings like `sandbox: false` weaken the app’s security posture.

5. **[#6378 – RFC: Support multiple workspaces in one `qwen serve` daemon](https://github.com/QwenLM/qwen-code/issues/6378)**  
   **Feature** (P2, open, 30 comments). Long‑standing design proposal to let a single daemon manage multiple workspaces without breaking existing client behaviour. Active community debate.

6. **[#7264 – Cold‑start follow‑ups: remaining lazy‑loading candidates](https://github.com/QwenLM/qwen-code/issues/7264)**  
   **Performance** (P2, closed). After an eager‑closure audit of the ACP child process, 17.24 MiB/2420 modules were found loaded before answering `initialize`. Several lazy‑loading optimisations have been merged.

7. **[#7585 – Proposal: direct external context provider profile](https://github.com/QwenLM/qwen-code/issues/7585)**  
   **Feature** (P3, open, 8 comments). Suggests a Qwen extension to retrieve repository‑shared context from an external memory/knowledge service without modifying Qwen Core.

8. **[#7750 – Confusion between qwen‑code‑sdk and qoder‑agent‑sdk (Chinese)](https://github.com/QwenLM/qwen-code/issues/7750)**  
   **Question** (closed). User asks which SDK is canonical and whether one will be deprecated – highlights ongoing product ambiguity.

9. **[#7732 – Sandbox runtime selected based on PATH presence, not usability](https://github.com/QwenLM/qwen-code/issues/7732)**  
   **Bug** (P2, open). If Docker is on PATH but daemon unreachable, `getSandboxCommand()` still chooses Docker instead of falling back to a working Podman.

10. **[#7771 – Persisted MCP config not loaded at startup](https://github.com/QwenLM/qwen-code/issues/7771)**  
    **Bug** (open). After restarting Qwen Desktop, persisted `mcp_config` is not loaded into the main‑process MCP proxy, breaking IPC calls until manual reconfiguration.

## Key PR Progress

1. **[#7775 – Fix `sed` pattern parsing when bracket expression starts with `]`](https://github.com/QwenLM/qwen-code/pull/7775)**  
   *Core* – `ShellToolInvocation` now correctly declines `sed` patterns that begin with a `]`, preventing wrong file writes.

2. **[#7778 – Allow Web Shell sidebar up to half window width](https://github.com/QwenLM/qwen-code/pull/7778)**  
   *UI* – Makes sidebar maximum width dynamic instead of a fixed constant, improving usability on wide displays.

3. **[#7753 – Carry `/verify` hardening to `/tmux` lane](https://github.com/QwenLM/qwen-code/pull/7753)**  
   *Security* – Five security controls originally developed for the `/verify` lane (e.g., attack reproduction) are now applied to the `/tmux` lane.

4. **[#7751 – Script‑lint as deterministic gate: compose‑review reads report, no agent](https://github.com/QwenLM/qwen-code/pull/7751)**  
   *CI/Review* – Instead of an agent deciding lint severity, the review pipeline now reads an exact instrumented report – reducing false positives and honour‑system issues.

5. **[#7776 – Scope timeout veto to the fragment it appears in](https://github.com/QwenLM/qwen-code/pull/7776)**  
   *Core* – `getContextLengthExceededInfo` now correctly scopes timeout checks to the error fragment, preventing false classification.

6. **[#7724 – Allow shell commands in new Web Shell tasks without a session](https://github.com/QwenLM/qwen-code/pull/7724)**  
   *Web Shell* – Typing `!` (shell command) in a brand‑new task now lazily creates a session instead of showing “No active session”.

7. **[#7731 – Web Shell git branch picker, commit dialog, and create‑PR flow](https://github.com/QwenLM/qwen-code/pull/7731)**  
   *Web Shell* – Adds IntelliJ‑style branch picker popover, checkout, new branch, commit dialog, and PR creation – a major workflow improvement.

8. **[#7765 – Stop rewriting backslash escapes in gitignore patterns](https://github.com/QwenLM/qwen-code/pull/7765)**  
   *Core* – `newPattern.replace(/\\/g, '/')` was incorrectly normalising escaped backslashes in gitignore patterns (e.g., `\\#`), now fixed.

9. **[#7726 – Create WeChat credential file already private](https://github.com/QwenLM/qwen-code/pull/7726)**  
   *Security* – `saveAccount` now writes the credential file with correct permissions from the start, avoiding a race condition where the file was world‑readable for a short time.

10. **[#7761 – Add first‑output latency benchmark for daemon/ACP](https://github.com/QwenLM/qwen-code/pull/7761)**  
    *Performance* – Opt‑in benchmark measuring process‑to‑session‑ready, prompt‑to‑first‑answer, and provider latency – essential for ongoing cold‑start work.

## Feature Request Trends

**Daemon & Multi‑workspace** – The most active discussion is the RFC for multiple workspaces in a single daemon (#6378), enabling better resource sharing and remote collaboration.  
**External Context** – Several proposals request a direct external context provider profile (#7585) and read‑only transcript viewers for untrusted workspaces (#6770).  
**Web Shell Enhancements** – Voice controls for secondary workspaces (#6972) and persistent history pagination errors (#7117) show a push toward richer remote interaction.  
**Agent Capabilities** – Subagent model grade selection at spawn time (#7685) and a “repo‑hygiene” CI skill (#7383) reflect desire for more intelligent, automated tooling.

## Developer Pain Points

**Security Incidents** – Three Electron/desktop security bugs (MCP bypass, IPC bridge, sandbox escape) were reported within 24 hours, indicating a need for tighter permission enforcement and sandbox hardening.  
**CI Instability** – Multiple “Main CI failed: E2E Tests” issues (#7777, #7773, #7759, #7755) continue to plague the main branch, reducing confidence in automated testing.  
**Cold‑start Latency** – Despite progress (#7264 closed), the broader first‑model‑output latency remains a top concern (#7757), with specific benchmarking now in place.  
**State/Config Persistence** – Persisted MCP configuration not loading on restart (#7771) and daemon session writer lock handoff failures (#7752) disrupt workflow continuity.  
**Tooling Confusion** – The overlapping capabilities of `qwen-code-sdk` and `qoder-agent-sdk` (#7750) cause confusion among developers evaluating which SDK to adopt.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-27

**Project:** CodeWhale (DeepSeek TUI) – `github.com/Hmbown/CodeWhale`

---

## Today's Highlights

The team shipped a burst of performance and UX fixes: quadratic markdown re-parsing during streaming is now eliminated, background shell completions are delivered to waiting turns, and `@git`/`@diff` mentions land as first-class slash completions. On the stability side, a prompt-cache hit-rate regression was pinned with a dedicated test, and terminal control bytes are no longer written to non-terminals. Community localization contributions continue to mature, with Chinese translations catching up and new Western European locale requests gaining traction.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

*Picked from top commented items updated in the last 24 hours.*

1. **[#3793 – v0.9.2 Setup: build a guided localized constitution creator](https://github.com/Hmbown/CodeWhale/issues/3793)** (17 comments)  
   A core UX redesign for first-run setup: the “constitution” (base prompt) should be language-first and guided, not a blank editor. Community input focuses on keeping runtime security controls separate from constitutional text. High-priority for v0.9.2.

2. **[#4227 – feat: help JayBeest map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)** (13 comments)  
   A meta-skill/workflow to help contributors stay synced with the fast-moving main branch (10+ PRs/day). Practical onboarding for new contributors – welcomed by the community.

3. **[#2934 – feat: sidebar sessions panel with auto-resume and history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)** (10 comments)  
   Persistent session list vs. the current `Ctrl+R` popup. Users want to see all conversations at a glance. Resurfaced after a long hiatus.

4. **[#3792 – v0.9.2 Setup: make first-run onboarding feel like starting CodeWhale](https://github.com/Hmbown/CodeWhale/issues/3792)** (9 comments)  
   The setup flow must not mix constitutional text with enforced runtime security. Proposes a “language first” spine; community strongly agrees on separation of concerns.

5. **[#2494 – macOS + iTerm2 user issues summary](https://github.com/Hmbown/CodeWhale/issues/2494)** (6 comments, CLOSED)  
   A detailed list of Mac-specific pain points: incorrect hotkey docs, newline handling, lack of stop button, session history retrieval. Shows the community’s desire for cross-platform parity.

6. **[#1004 – feat(commands): /dryrun — preview next chat completion without sending](https://github.com/Hmbown/CodeWhale/issues/1004)** (5 comments)  
   Developers want to inspect the full prompt (system prompt, cached files, tool defs) before paying for a V4 Pro turn. Niche but crucial for heavy users.

7. **[#4022 – Define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)** (5 comments)  
   The TUI has subagent controls that are not accessible via CLI or future cloud apps. Ensuring runtime parity is a recurring theme.

8. **[#3983 – v0.9.2 Runtime: make current Work state model-visible on parent turns](https://github.com/Hmbown/CodeWhale/issues/3983)** (4 comments)  
   The `checklist_*` and `update_plan` surfaces work but are not exposed to the model during parent turns. Community asks for better model-context to drive autonomous loops.

9. **[#3897 – perf(tui): streaming re-parses whole growing message every chunk (O(N²))](https://github.com/Hmbown/CodeWhale/issues/3897)** (2 comments)  
   A long-standing performance bug (filed 2 July). Getting visibility now as users report lag on long answers. Fixed today in PR #4903.

10. **[#4788 – Add French, German, and Catalan localization](https://github.com/Hmbown/CodeWhale/issues/4788)** (2 comments, filed 24 July)  
    A push for Western European locales – the project already supports Vietnamese, Japanese, Korean, Spanish, Brazilian Portuguese, but no European language except English. Community reception positive.

---

## Key PR Progress

*Selected from PRs updated in the last 24 hours. “Closed” means merged or closed.*

1. **[#4905 – fix(tui): stop writing terminal control bytes to non-terminals](https://github.com/Hmbown/CodeWhale/pull/4905)** (CLOSED)  
   Partial fix for leaked OSC 9;4 and OSC 0 sequences that corrupt piped output. A critical quality-of-life fix for CI and redirection users.

2. **[#4904 – fix(composer): respect the menu limit and resolve git mentions once](https://github.com/Hmbown/CodeWhale/pull/4904)** (OPEN)  
   Follow-up to the merged `@git`/`@diff` feature (PR #4899). Fixes a regression where `mention_menu_limit = 0` disables the popup incorrectly.

3. **[#4903 – perf(tui): stop re-parsing committed markdown while streaming](https://github.com/Hmbown/CodeWhale/pull/4903)** (CLOSED)  
   Removes the O(N²) re-parse issue described in #3897. The render half remains open, but this removes the quadratic cost.

4. **[#4902 – test(engine): pin the cacheable prefix across unchanged turns](https://github.com/Hmbown/CodeWhale/pull/4902)** (CLOSED)  
   Closes the prompt-cache regression (#3738). Confirms the `<turn_meta>` block is not the culprit – adds a regression test to keep it stable.

5. **[#4899 – feat(composer): add @git and @diff mentions](https://github.com/Hmbown/CodeWhale/pull/4899)** (CLOSED)  
   Allows users to `@git` to attach diff context or `@diff` to reference specific file diffs, reducing round-trips. Community eagerly awaited.

6. **[#4894 – feat(shell): deliver tracked completions to waiting turns](https://github.com/Hmbown/CodeWhale/pull/4894)** (CLOSED)  
   Background shell jobs now pipe their results back into the conversation at the next turn – enables long-running shell tasks without blocking.

7. **[#4900 – feat(engine): make policy narrowing observable](https://github.com/Hmbown/CodeWhale/pull/4900)** (CLOSED)  
   When runtime policy restricts a turn’s authority, the model now sees the narrowed policy in the context. Improves transparency for agent workflows.

8. **[#4892 – perf(tui): reuse live transcript snapshots and flattened lines](https://github.com/Hmbown/CodeWhale/pull/4892)** (CLOSED)  
   Caches unchanged transcript cells across overlay renders. Reduces rendering cost for streaming messages after the initial parse.

9. **[#4896 – [codex] move terminal clipboard writes off event loop](https://github.com/Hmbown/CodeWhale/pull/4896)** (CLOSED)  
   Routes OSC 52 clipboard operations through a background worker – prevents terminal I/O stalls from blocking the TUI event loop.

10. **[#4805 – i18n(zh-Hans): update Chinese translations](https://github.com/Hmbown/CodeWhale/pull/4805)** (CLOSED)  
    Community contribution syncing 17 message keys. One of many active localization PRs demonstrating strong community involvement.

---

## Feature Request Trends

The following directions dominate recent top-voted or most-discussed issues:

- **Localization → full TUI parity** – Nine locales tracked; Western European (FR, DE, CA) and Indonesian are now requested. The project has a repeatable pipeline, so expect more languages to land.

- **Setup flow as product onboarding** – The constitution creator (#3793) and first-run spine (#3792) show a shift from raw config files to guided, language-aware setup with embedded security posture.

- **Agentic autonomy and observability** – Workflow runtime (#2974), auto mode (#3832), policy narrowing (#4900), and model-visible state (#3983) point toward bounded, inspectable autonomous coding loops.

- **Session and multi-session management** – Persistent sidebar (#2934), session dashboard (#4397), and auto-resume are recurring requests from power users managing multiple coding contexts.

- **Performance especially during streaming** – The O(N²) markdown bug (#3897) and transcript snapshot caching (#4892) highlight that streaming rendering is a top concern for long outputs.

---

## Developer Pain Points

Repeated frustrations visible across the issue tracker:

- **macOS/iTerm2 keybindings** – Shortcut docs are Windows-focused, `Ctrl+C` behavior differs, and no intuitive stop mechanism (#2494). PR #4896 (clipboard off event loop) addresses one related pain from the same demographic.

- **Silent failures on configuration overrides** – Custom constitutions are ignored without warning if the `CODEPROMISE_CONSTITUTION_OVERRIDE` env var is missing (#3928). Users expect at least an error message.

- **Steep learning curve for agent features** – Subagents, workflow runtime, and the constitution concept have poor in-app discoverability. Issues #4022 and #3983 call for better CLI parity and model-visible state to reduce guesswork.

- **Prompt-cache cost surprises** – The regression in #3738 (now fixed with regression test) cost users real money. The community is sensitive to token usage and wants transparent caching.

- **Startup traps in provider onboarding** – Returning users can get stuck in an empty OAuth step (#4763, fixed by PR #4765). Such edge cases erode trust in the onboarding experience.

- **Lack of a provider-independent offline mode** – Issue #3927: no way to explore the TUI without configuring a provider. First-run users want a sandbox mode.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*