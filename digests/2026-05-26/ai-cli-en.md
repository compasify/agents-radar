# AI CLI Tools Community Digest 2026-05-26

> Generated: 2026-05-26 00:24 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-26

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar ecosystem where differentiation increasingly hinges on agent orchestration depth, terminal UX fidelity, and enterprise integration reliability rather than raw model access. All major tools now support MCP (Model Context Protocol), yet implementation quality varies dramatically—transport hangs, OAuth resumption failures, and schema mismatches plague production deployments. A clear architectural tension has emerged between "chat-wrapper" paradigms (session-centric, transcript-bound) and emerging "tool operating system" designs that treat agent capabilities as persistent, cacheable infrastructure. Python-based CLIs face sustained performance and distribution criticism, driving community-led rewrites toward Bun/TypeScript runtimes.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 50 | 9 | No release | Hook/guardrail ecosystem maturing; token limit crisis unresolved |
| **OpenAI Codex** | 50 | 44 | No release | Massive Vim TUI investment (9-PR stack); Windows parity degrading |
| **Gemini CLI** | 50 | 35 | No release | Agent reliability P1 bugs dominate; terminal compatibility push |
| **GitHub Copilot CLI** | 18 | 0 | **v1.0.55-0** | SEA fix shipped; plugin API regressions emerging; PR velocity anomaly |
| **Kimi Code CLI** | 4 | 1 | No release | Minimal activity; TS rewrite debate ongoing; interoperability gaps |
| **OpenCode** | 50 | 50 | No release | Highest PR velocity; model provider reliability crises; pricing tension |
| **Pi** | — | — | No release | Extension API expansion; provider breadth (DashScope); hang mitigation |
| **Qwen Code** | — | — | **v0.16.1-nightly** | Daemon mode sprint; HTTP route parity push; i18n debt |
| **DeepSeek TUI (CodeWhale)** | — | — | v0.8.45 prep | Cache-maximalism roadmap published; permission infrastructure |

*Note: Issue/PR counts not explicitly stated for Pi, Qwen Code, DeepSeek TUI in source digests; inferred from described activity levels.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **MCP ecosystem hardening** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code | Prompts support (Codex #5059), OAuth reconnection (Claude #10250), streamable HTTP transport (Qwen #4521), JSON array schema handling (Copilot #3030), tool-call reliability (OpenCode #20650) |
| **Session lifecycle management** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI | Compression/export over REST (Qwen #4516, OpenCode #5200), goal primitives (OpenCode #27167), resume with CWD preservation (Copilot #3515), unarchive (Copilot #3518), deterministic recovery (DeepSeek #1879) |
| **Agent orchestration & sub-agents** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, DeepSeek TUI | Nested spawning (Claude #61993), loop death recovery (Codex #23971), false success on MAX_TURNS (Gemini #22323), parallel workers with roles (DeepSeek #2007), backgroundable agents (Gemini #22741) |
| **Terminal environment parity** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi, DeepSeek TUI | tmux notifications (Claude #19976), Windows ANSI corruption (Codex #23740), bracketed paste (Gemini #27054), OSC52/screen compatibility (OpenCode #28592), EPIPE handling (Pi #4984) |
| **Permission/trust infrastructure** | Claude Code, GitHub Copilot CLI, DeepSeek TUI | Hook-based guardrails (Claude #62264, #62099), silent `preToolUse` rewrite (Copilot #2643), typed `execpolicy` rules (DeepSeek #1186) |
| **Context compaction at scale** | OpenAI Codex, Gemini CLI, OpenCode, Pi | Backend capacity strain (Codex #10823), union-find clustering (Gemini #24736), API-native compaction (OpenCode #5200), abort controller races (Pi #4959) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach | Target User |
|:---|:---|:---|:---|
| **TUI/Editor fidelity** | OpenAI Codex, Pi | Vim-native modal editing (Codex 9-PR stack), cursor introspection API (Pi) | Terminal-native developers, Vim/Emacs migrants |
| **Agent architecture depth** | DeepSeek TUI, Claude Code | Cache-maximal graph objects (DeepSeek), hook lifecycle completeness (Claude) | Production automation engineers, safety-critical workflows |
| **Enterprise integration** | GitHub Copilot CLI, Claude Code | Microsoft 365/Graph (Claude #30533), tenant policy enforcement (Copilot #3442), SEA packaging | Corporate developers, IT-governed environments |
| **Multi-provider agility** | OpenCode, Pi | 10+ providers with routing rules (OpenCode #29206), DashScope expansion (Pi #4964), cost accuracy | Cost-sensitive power users, model-agnostic teams |
| **Daemon/server mode** | Qwen Code | HTTP/SSE session multiplexing, SDK-ready endpoints | IDE plugin authors, web UI integrators |
| **Internationalization** | Qwen Code | Systematic output-language respect, non-English thinking blocks | Global developer base, CJK markets |

**Technical approach divergence:**
- **Python vs. native runtimes**: Kimi (#1707) and OpenCode (Bun installs #27906) show strain; Codex, Gemini, Pi, Qwen all TypeScript-native
- **Session-centric vs. tool-centric**: Claude/Codex/Gemini optimize chat transcript continuity; DeepSeek explicitly rejects this with "tool operating system" vision (#2122)
- **Sandbox model**: Claude's filesystem guardrails (#62261) vs. DeepSeek's `execpolicy` vs. Copilot's plugin hooks—converging on scoped permissions, diverging on enforcement layer

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **Highest velocity** | OpenCode, OpenAI Codex | 50 PRs/24h (OpenCode), 44 PRs with coherent 9-PR Vim stack (Codex)—both show sustained contributor throughput |
| **Active, issue-heavy** | Claude Code, Gemini CLI | 50 issues/24h each; Claude's 133-comment token limit (#24055) and Gemini's P1 agent hangs indicate stress-testing at scale |
| **Release-shipping, lower visibility** | GitHub Copilot CLI, Qwen Code | Copilot's zero PRs with shipped release suggests Microsoft-internal development; Qwen's daemon sprint is focused but narrow |
| **Growing pains / niche** | Pi, DeepSeek TUI | Pi's extension API expansion signals platform ambition; DeepSeek's roadmap drop (#2122-2128) shows vision but 188-comment Docker crisis (#1615) reveals ops fragility |
| **Stagnation risk** | Kimi Code CLI | 4 issues, 1 PR, month-old TS rewrite stalemate (#1707)—interoperability gap (#1894) threatens ecosystem exclusion |

**Maturity signals:**
- **Claude Code**: Longest-running issue tracker depth (Oct 2025 persistence on #9258); guardrail ecosystem approaching production-grade
- **Codex**: Vim investment indicates confidence in terminal-first longevity; Windows technical debt accumulating dangerously
- **Gemini CLI**: Evaluation infrastructure (#24353) suggests Google-scale quality engineering; execution reliability hasn't caught up
- **OpenCode**: Fastest iteration but subscription/billing friction (#28846, #29207) suggests business model stress under growth

---

## 6. Trend Signals

| Signal | Implication for Developers |
|:---|:---|
| **Token/output ceiling crises** | Claude's 32K limit (#24055) and Codex's compaction failures (#10823) indicate context scaling is hitting infrastructure walls before model windows expand—design workflows for chunked generation |
| **MCP as table stakes, not differentiator** | Universal adoption with universal reliability problems—evaluate transport implementation quality, not checkbox presence; HTTP/SSE resilience is emerging as real differentiator |
| **Agent false-success modes** | Gemini's MAX_TURNS→GOAL success (#22323), Qwen's infinite loops (#4506), Codex's "agent loop died" (#23971)—orchestration debugging tools will become essential; demand structured failure telemetry |
| **Permission infrastructure commoditizing** | Hook systems, typed policies, and scoped sandboxes converging across tools—expect standardization pressure; early adopters should favor programmable over hardcoded guardrails |
| **Terminal-as-platform revival** | Vim modal editing, tmux integration, OSC52 clipboard, bracketed paste—all tools investing in terminal fidelity suggests CLI is permanent primary interface, not stopgap to GUI |
| **Cost transparency as UX requirement** | Qwen's 30M-token shock (#4479), OpenCode's pricing misalignment (#28846), Pi's OpenRouter cost accuracy (#4985)—users expect spend visibility; opaque billing erodes trust faster than model quality |
| **Context compaction as core competency** | From OpenCode's `/compress` (#5200) to Gemini's union-find (#24736) to Qwen's REST-triggered compaction (#4516)—how tools manage long-session state increasingly matters more than initial context size |

---

*Report compiled from 9 tool community digests covering 2026-05-25/26 activity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Date:** 2026-05-26 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Status | Functionality | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 OPEN | Typographic quality control—prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Universal pain point; affects every document Claude generates. Community recognizes this as foundational infrastructure |
| 2 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | 🟡 OPEN | OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML conversion | Enterprise/open-source document workflow demand; ISO standard compliance |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 OPEN | Revised design skill with actionable, conversation-scoped instructions | Meta-improvement: making skills actually executable within single conversations |
| 4 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 OPEN | Meta-skills for evaluating Skill quality (5-dimension rubric) and security posture | Ecosystem maturity tooling; self-improving skill infrastructure |
| 5 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | 🟡 OPEN | SAP's open-source tabular foundation model for predictive analytics on business data | Enterprise ERP integration; connects Claude to specialized tabular AI |
| 6 | **[AURELION skill suite](https://github.com/anthropics/skills/pull/444)** | 🟡 OPEN | 4-skills cognitive framework: kernel (structured thinking), advisor, agent, memory | Ambitious knowledge-management architecture; "second brain" for AI collaboration |
| 7 | **[ServiceNow platform](https://github.com/anthropics/skills/pull/568)** | 🟡 OPEN | Broad enterprise platform coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub | Largest enterprise ITSM domain coverage proposed |
| 8 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 🟡 OPEN | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, MSW, Playwright | Quality engineering best practices codified |

> **Note:** All top PRs show `Comments: undefined` in raw data, but are sorted by comment attention. All remain **OPEN** as of data date—no merges in top tier.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Intensity |
|:---|:---|:---:|
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) — "download .skill file, send via Slack/Teams, manually upload" is friction | 🔥🔥🔥 |
| **Skill distribution trust & security** | [#492](https://github.com/anthropics/skills/issues/492) — `anthropic/` namespace impersonation risk; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint access control in SKILL.md | 🔥🔥🔥 |
| **MCP interoperability** | [#16](https://github.com/anthropics/skills/issues/16) — "Expose Skills as MCPs"; [#1102](https://github.com/anthropics/skills/issues/1102) — MCP data compression | 🔥🔥 |
| **Windows compatibility** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `run_eval.py` broken on Windows | 🔥🔥 |
| **Plugin system refinement** | [#189](https://github.com/anthropics/skills/issues/189) — duplicate skills across plugins; [#1087](https://github.com/anthropics/skills/issues/1087) — plugin loads undeclared skills | 🔥🔥 |
| **skill-creator best practices** | [#202](https://github.com/anthropics/skills/issues/202) — "reads like developer documentation rather than operational skill" | 🔥 |

**Emerging skill categories in demand:**
- **Workflow automation**: n8n-builder/debugger ([#190](https://github.com/anthropics/skills/pull/190))
- **Codebase intelligence**: inventory/audit ([#147](https://github.com/anthropics/skills/pull/147))
- **Persistent memory**: cross-conversation context ([#154](https://github.com/anthropics/skills/pull/154))
- **Media generation**: image/video pipelines ([#335](https://github.com/anthropics/skills/pull/335))

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **PDF case-sensitivity fix** | [#538](https://github.com/anthropics/skills/pull/538) | Narrow, correct bugfix; 8 broken references in production skill |
| **YAML validation warning** | [#539](https://github.com/anthropics/skills/pull/539) | Prevents silent parsing failures; developer experience improvement |
| **DOCX tracked-change ID collision fix** | [#541](https://github.com/anthropics/skills/pull/541) | Fixes document corruption; root cause clearly identified |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses 25% community health score; closes [#452](https://github.com/anthropics/skills/issues/452) |
| **Windows subprocess fixes** | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | 1-line changes; blocking Windows users entirely |

> **Pattern:** Bugfixes and infrastructure PRs have clearer merge paths than new skill proposals. The new skill PRs (#514, #486, #444, #568) are larger review surface areas.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill distribution infrastructure**—org-wide sharing, namespace trust boundaries, plugin system correctness, and cross-platform tooling reliability—rather than more novel skill capabilities, indicating the ecosystem is maturing from experimentation toward production deployment at scale.

---

---

# Claude Code Community Digest — 2026-05-26

## Today's Highlights

No new releases shipped in the last 24 hours, but community activity remains intense with 50 issues updated and significant traction on long-standing bugs. The most engaged issue—a 32000-token output limit error on Windows—crossed 133 comments, while a wave of community PRs targets repository automation and hook-based guardrails.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#24055](https://github.com/anthropics/claude-code/issues/24055) | **API Error: Claude's response exceeded the 32000 output token maximum** | Hard ceiling on output tokens breaks long-generation workflows (code synthesis, document writing) with no apparent client-side mitigation. | 🔥 133 comments, 85 👍 — highest engagement in tracker; users sharing reproductions and workarounds |
| [#9258](https://github.com/anthropics/claude-code/issues/9258) | **History Sessions lost in VS Code plugin** | Data loss in IDE integration undermines trust for daily-driver use; affects Linux users specifically. | 46 comments, 46 👍; persistent reports since Oct 2025 |
| [#61415](https://github.com/anthropics/claude-code/issues/61415) | **Bypass Permissions mode can't be enabled on macOS** | Core security/UX feature (automatic edit acceptance) non-functional on latest desktop build; regression-like behavior. | 30 comments, 9 👍; marked duplicate but actively updated |
| [#48243](https://github.com/anthropics/claude-code/issues/48243) | **Notion plugin MCP server: persistent Internal Server Error** | Official plugin broken for 6+ weeks; blocks Notion-integrated workflows entirely. | 21 comments, 16 👍; **closed** — resolution status unclear from title |
| [#22451](https://github.com/anthropics/claude-code/issues/22451) | **Desktop app MCP Tools hanging 5-10 minutes then failing** | Makes MCP unusable in desktop context; timeout behavior suggests infrastructure or transport-level bug. | 20 comments, 20 👍; **closed** |
| [#10250](https://github.com/anthropics/claude-code/issues/10250) | **OAuth succeeds but MCP reconnection fails — requires restart** | Auth flow completes but tooling broken until manual restart; poor UX for streamable-http MCP servers. | 14 comments, 18 👍; **closed** |
| [#30533](https://github.com/anthropics/claude-code/issues/30533) | **Microsoft 365 MCP: Add email attachment reading** | Gap in enterprise integration — email without attachments limits workflow automation utility. | 14 comments, 15 👍; active feature request |
| [#61993](https://github.com/anthropics/claude-code/issues/61993) | **Sub-agents cannot spawn other sub-agents** | `Task`/`Agent` primitive not exposed in nested contexts — limits composability of agent workflows. | 11 comments; newly filed, no 👍 yet but architecturally significant |
| [#30726](https://github.com/anthropics/claude-code/issues/30726) | **Settings `effortLevel: "max"` silently downgraded via UI** | Configuration drift without user awareness; breaks deterministic behavior expectations. | 10 comments, 30 👍; strong signal for settings-system reliability |
| [#19976](https://github.com/anthropics/claude-code/issues/19976) | **Terminal notifications inside tmux** | tmux is standard for remote/headless development; missing notifications breaks async workflow awareness. | 9 comments, 23 👍; well-specified fix proposed (DCS passthrough) |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#62315](https://github.com/anthropics/claude-code/pull/62315) | Fix hookify event filtering in pre/post hooks | Corrects event routing for hook system — foundational for reliable guardrails | Open |
| [#62262](https://github.com/anthropics/claude-code/pull/62262) | Prevent dedupe from suggesting/auto-closing against closed/duplicate issues | Meta-fix for bot behavior reducing false duplicate closures | Open |
| [#62264](https://github.com/anthropics/claude-code/pull/62264) | Add `block-build-commands` hook example for hard execution guardrails | Safety-critical: prevents `make`, `cargo build`, etc. from executing via Bash tool | Open |
| [#62261](https://github.com/anthropics/claude-code/pull/62261) | Add sandbox filesystem example settings with `allowSkillsWrites` | Demonstrates scoped write permissions for safer file operations | Open |
| [#62260](https://github.com/anthropics/claude-code/pull/62260) | Handle empty bug report bodies in triage; improve needs-info nudge | Quality-of-life for maintainers; reduces noise in issue tracker | Open |
| [#62252](https://github.com/anthropics/claude-code/pull/62252) | Pr test | Appears to be test/invalid; no substantive content | Closed |
| [#62023](https://github.com/anthropics/claude-code/pull/62023) | Word-boundary `@claude` trigger to avoid `@claude-*` false positives | Fixes workflow automation misfiring on plugin marketplace mentions | Closed |
| [#62099](https://github.com/anthropics/claude-code/pull/62099) | Add `credential-guard` plugin for hardcoded secret detection | Security: 20+ pattern detection in Write/Edit/Bash to prevent credential leakage | Open |
| [#1](https://github.com/anthropics/claude-code/pull/1) | Create SECURITY.md | Baseline security policy; notable as PR #1 resurfacing | Closed |

---

## Feature Request Trends

1. **MCP ecosystem expansion** — Microsoft 365 attachments (#30533), better OAuth reconnection (#10250), and attachment handling dominate enterprise integration asks.
2. **tmux/terminal environment parity** — Notifications (#19976) and TUI behavior on Linux signal headless/remote development as primary use case.
3. **Agent composability** — Nested sub-agent spawning (#61993) and hook lifecycle completeness (#50398, #62315) point to demand for more programmable agent orchestration.
4. **Settings reliability** — Silent downgrades (#30726) and cleanup behavior (#62272) indicate configuration system needs predictability improvements.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Token/output limits** | #24055 (133 comments) | Critical — blocks long-output workflows entirely |
| **Data loss / session persistence** | #9258 (VS Code history), #62272 (JSONL deletion), #62104 (pinned session archiving) | High — erodes trust in daily use |
| **MCP reliability** | #48243, #22451, #10250, #62147, #43343, #50172 | High — authentication, transport, and resumption all flaky |
| **Permission/UX regressions** | #61415 (macOS bypass), #30726 (effortLevel downgrade) | Medium — settings don't stick as documented |
| **Billing/tax edge cases** | #51310, #42018, #46309 | Medium — commercial adoption friction for EU B2B |
| **Context bloat** | #54716 (20k tokens from built-in deferred tools) | Medium — Pro plan users hitting caps prematurely |

---

*Digest compiled from 50 issues and 9 PRs updated 2026-05-25/26.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-26

---

## 1. Today's Highlights

The Codex team landed a massive 9-PR Vim composer stack for the TUI, delivering visual modes, named registers, dot-repeat, and text objects—marking one of the largest CLI UX investments this year. On the stability front, Windows continues to dominate bug reports with sandbox, terminal corruption, and auth issues persisting across versions, while macOS users face critical database access failures post-update. No new releases shipped in the last 24h.

---

## 2. Releases

**None** — No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#16857](https://github.com/openai/codex/issues/16857) | High GPU usage during "thinking" from tiny animation | A purely cosmetic animation is burning GPU cycles unnecessarily—classic performance regression with easy fix potential | 35 comments, 34 👍; users actively profiling with Activity Monitor |
| [#10823](https://github.com/openai/codex/issues/10823) | Context compaction fails in very long sessions | Hard blocker for power users; "high demand" error suggests backend capacity strain for core context management | 23 comments; workaround is manual session restart |
| [#20741](https://github.com/openai/codex/issues/20741) | Project chat histories vanished after update | Data loss is the worst UX failure; affects ChatGPT Pro subscribers on latest macOS | 19 comments, 10 👍; multiple confirmations |
| [#21700](https://github.com/openai/codex/issues/21700) | Computer Use Chrome extension delisted from Web Store | Breaks a flagship feature; no official offline installer provided | 11 comments, 16 👍; users seeking workarounds |
| [#23740](https://github.com/openai/codex/issues/23740) | ANSI corruption in Windows Terminal (regression 0.131.0) | TUI completely unusable on Windows; bisected to specific versions | 8 comments, 7 👍; clear regression path |
| [#5059](https://github.com/openai/codex/issues/5059) | MCP prompts support | Top-voted enhancement (30 👍); MCP ecosystem standard that Codex lags on | 9 comments; long-standing since Oct 2025 |
| [#24006](https://github.com/openai/codex/issues/24006) | macOS database access failure post-update | App won't launch at all—critical severity, version 26.519.x | 5 comments, 5 👍; no workaround yet |
| [#24394](https://github.com/openai/codex/issues/24394) | Computer Use auth plugin breaks macOS lock-screen | Security surface conflict: Codex auth overrides system screensaver | 3 comments; security-adjacent, needs urgent attention |
| [#24431](https://github.com/openai/codex/issues/24431) | GPT-5.5 quality degradation reported | Perceived model regression in production—hard to verify but widely felt | 4 comments; anecdotal but concerning pattern |
| [#24373](https://github.com/openai/codex/issues/24373) | Google Sheets connector read-only after reinstall | Skills/auth layer fragility; write scopes not persisting correctly | 6 comments, 2 👍; enterprise integration blocker |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#24476](https://github.com/openai/codex/pull/24476) | fix(tui): integrate vim line-end behavior [1/9] | Foundation: corrects `e` motion and line-end behavior for subsequent Vim layers | Base dependency for entire stack |
| [#24477](https://github.com/openai/codex/pull/24477) | feat(tui): complete vim change operations [2/9] | `c` operator generalized, `cw` semantics, `cc`/`S`/`s` support | Core editing verbs |
| [#24480](https://github.com/openai/codex/pull/24480) | feat(tui): add vim find and till motions [3/9] | `f`/`F`/`t`/`T`/`;`/`,` line-local search motions | Precision navigation |
| [#24483](https://github.com/openai/codex/pull/24483) | feat(tui): add vim prose text objects [4/9] | Sentence `is`/`as` and paragraph `ip`/`ap` objects | Semantic text manipulation |
| [#24486](https://github.com/openai/codex/pull/24486) | feat(tui): add vim tag text objects [5/9] | HTML/XML `it`/`at` inner/around tag objects | Web dev relevance |
| [#24487](https://github.com/openai/codex/pull/24487) | feat(tui): add vim command counts [6/9] | Numeric prefixes: `2d3w`, multiplicative counts | Efficiency multiplier |
| [#24492](https://github.com/openai/codex/pull/24492) | feat(tui): add vim named registers [7/9] | `"a`-`"z` registers, uppercase append, clipboard integration | Advanced editing workflow |
| [#24496](https://github.com/openai/codex/pull/24496) | feat(tui): add vim visual modes [8/9] | Characterwise `v` and linewise `V` visual selection with `d`/`y`/`c` | Essential selection paradigm |
| [#24498](https://github.com/openai/codex/pull/24498) | feat(tui): add vim dot repeat [9/9] | `.` repeats last change; completes the composer stack | Muscle memory capstone |
| [#24494](https://github.com/openai/codex/pull/24494) | Add config knob to disable `request_user_input` tool | User control over agentic interruption; safety/flow preference | Governance feature |

**Also notable:**
- [#24489](https://github.com/openai/codex/pull/24489): Markdown table rendering aligned with App style
- [#24358](https://github.com/openai/codex/pull/24358) / [#24350](https://github.com/openai/codex/pull/24350): Interactive "review story" cockpit for guided AI-change review

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **MCP ecosystem completeness** | [#5059](https://github.com/openai/codex/issues/5059) (prompts), prior tools support | High — 30 👍, standard protocol gap |
| **Programmatic / API-driven workflows** | [#24107](https://github.com/openai/codex/issues/24107) (external chat spawning) | Emerging — orchestration integration need |
| **Plan/Goal mode UX refinement** | [#24218](https://github.com/openai/codex/issues/24218) (defer goal creation), [#24466](https://github.com/openai/codex/issues/24466) (goal failures) | Active — new feature category teething |
| **Context lifecycle transparency** | [#24366](https://github.com/openai/codex/issues/24366) (auto-compaction persistence), [#19607](https://github.com/openai/codex/issues/19607) (rate limit visibility) | Sustained — power user demand |
| **Review experience for AI-generated code** | [#24358](https://github.com/openai/codex/pull/24358), [#24350](https://github.com/openai/codex/pull/24350) | New — team scaling concern |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Windows as second-class citizen** | Very high | High | [#23740](https://github.com/openai/codex/issues/23740) (ANSI), [#23512](https://github.com/openai/codex/issues/23512) (terminal corruption), [#24272](https://github.com/openai/codex/issues/24272) (missing indicators), [#24490](https://github.com/openai/codex/issues/24490) (sandbox), [#14519](https://github.com/openai/codex/issues/14519) (worktrees), [#13463](https://github.com/openai/codex/issues/13463) (log spam), [#22936](https://github.com/openai/codex/issues/22936) (WSL scroll) | Platform parity gap widening; most TUI regressions Windows-specific |
| **Post-update data/config loss** | High | Critical | [#20741](https://github.com/openai/codex/issues/20741) (histories gone), [#24006](https://github.com/openai/codex/issues/24006) (database access), [#24065](https://github.com/openai/codex/issues/24065) (config save blocked) | Update safety not guaranteed; local database reliability questioned |
| **Context management at scale** | High | High | [#10823](https://github.com/openai/codex/issues/10823) (compaction fails), [#24366](https://github.com/openai/codex/issues/24366) (no persistent auto-compact), [#19607](https://github.com/openai/codex/issues/19607) (rate limits on compact) | Long-session users hit hard ceilings; backend capacity appears constrained |
| **Skills/plugins auth fragility** | Medium | High | [#24373](https://github.com/openai/codex/issues/24373) (Google Sheets write), [#24394](https://github.com/openai/codex/issues/24394) (macOS lock screen), [#24145](https://github.com/openai/codex/issues/24145) (bloated plugin menu) | OAuth scope management, auth plugin isolation, and UI discovery all problematic |
| **Subagent reliability** | Emerging | High | [#23971](https://github.com/openai/codex/issues/23971) (agent loop death), [#24475](https://github.com/openai/codex/issues/24475) (reconnect loops), [#24497](https://github.com/openai/codex/issues/24497) (remote skills invisible) | Multi-agent orchestration unstable; "agent loop died unexpectedly" becoming common error |

---

*Digest compiled from 50 issues and 44 PRs updated 2026-05-25 → 2026-05-26.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-26

## Today's Highlights

No new release dropped today, but community activity remains intense with **50 issues and 35 PRs** updated in the last 24 hours. The team is heavily focused on **agent reliability**—hanging subagents, incorrect success reporting, and shell execution bugs dominate the priority queue—while contributors are actively landing fixes for terminal compatibility, model routing, and context compression.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#24353** | [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | Follow-up to behavioral evals initiative; 76 tests now running across 6 Gemini models. Critical for measuring agent quality at scale. | 7 comments, maintainer-driven EPIC |
| **#22745** | [AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Could reduce token waste and misaligned reads by using syntax-aware boundaries instead of naive line ranges. Major efficiency play. | 7 comments, 1 👍 |
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1 bug**: Simple operations like folder creation hang indefinitely when delegated to generalist subagent. Workaround (disable subagents) hurts capability. | 7 comments, **8 👍** — highest community impact |
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Silent failure mode: subagent hits turn limit but claims success, hiding incomplete analysis. Breaks trust in agent outputs. | 6 comments, 2 👍 |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | Core UX gap: custom skills (gradle, git) are ignored unless explicitly instructed, wasting user configuration effort. | 6 comments |
| **#22441** | [Raw XML tags leaking into stdout](https://github.com/google-gemini/gemini-cli/issues/22441) | `<function_calls>`, `<pre_dispatch_explanation>` visible to users—polish regression breaking immersion. Recently updated. | 4 comments |
| **#25166** | [Shell command execution stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1**: Simple commands falsely claim they're awaiting input, blocking workflow. Reproducible, high-friction. | 4 comments, 3 👍 |
| **#21983** | [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | Linux compatibility gap; browser automation core to many workflows, Wayland adoption growing. | 4 comments, 1 👍 |
| **#26525** | [Deterministic redaction + reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | **Security**: Secrets pass through model context before redaction; service-side logging of skills data compounds risk. | 3 comments |
| **#26523** | [Surface/quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523) | Silent data loss: malformed memory patches skipped without visibility, aggregate dismiss only cleans valid ones. | 3 comments |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **#27440** | [Add [Skill] tag to slash command autocomplete](https://github.com/google-gemini/gemini-cli/pull/27440) | Visual distinction for skill-backed `/` commands, matching existing `[MCP]`/`[Agent]` tags. Small UX win, merged today. | Open, fresh |
| **#27438** | [Configurable per-tool-call timeout](https://github.com/google-gemini/gemini-cli/pull/27438) | Adds `tools.callTimeout` with global `ToolExecutor` enforcement via `withTimeout()` utility. Prevents hung tool calls. | Open |
| **#27418** | [Non-interactive shell respects `enableInteractiveShell: false`](https://github.com/google-gemini/gemini-cli/pull/27418) | **P1 fix**: Native bridge stability for non-UTF-8 bytes and heap-limit buffers; fixes broken non-interactive mode. | Open |
| **#27429** | [Handle EBADF in resizePty catch block](https://github.com/google-gemini/gemini-cli/pull/27429) | `--resume` crash fix: stale PTY fd from previous session treated same as ESRCH. Defensive resilience. | Open |
| **#27406** | [Configurable numeric routing rules](https://github.com/google-gemini/gemini-cli/pull/27406) | Replaces hardcoded binary model threshold with user-defined complexity-score-to-model tiers in `settings.json`. | Open, help wanted |
| **#27151** | [Add `/compress` ACP slash command](https://github.com/google-gemini/gemini-cli/pull/27151) | Brings context compression to ACP sessions; currently silently burns tokens as plain text. Agent capability gap. | Open, PR nudge sent |
| **#27054** | [Windows image pasting + clipboard styling](https://github.com/google-gemini/gemini-cli/pull/27054) | Bracketed-paste handling for Windows Terminal; clean UI for pasted images. Cross-platform parity. | Open, PR nudge sent |
| **#27292** | [Restore non-interactive stdin raw mode on exit](https://github.com/google-gemini/gemini-cli/pull/27292) | Safer Ctrl+C cancellation: raw mode restored on process exit, not just normal cleanup. Prevents terminal state corruption. | Open |
| **#26088** | [F10 fallback for approval mode cycling](https://github.com/google-gemini/gemini-cli/pull/26088) | Windows/WezTerm compatibility where `Shift+Tab` sequences misparse. Accessibility improvement. | Open, help wanted |
| **#24736** | [Union-find context compaction for AgentHistoryProvider](https://github.com/google-gemini/gemini-cli/pull/24736) | Semantic clustering alternative to binary split/discard for context management. Closed—likely superseded or needs rework. | **Closed** |

---

## Feature Request Trends

1. **AST-aware tooling integration** — Multiple issues (#22745, #22746, #22747) explore syntax-aware reads, search, and codebase mapping via tools like `ast-grep`, `tilth`, `glyph`. Direction: replace naive text operations with semantic boundaries.

2. **Agent self-validation & feedback loops** — #17110 explicitly tracks "steering the agent to self-validate changes." Implicit in many bug reports: agents need to know when they fail, not claim success.

3. **Backgroundable local agents** — #22741 requests Ctrl+B for subagents doing non-blocking exploration/build tasks. Matches broader async workflow needs.

4. **Enhanced browser automation resilience** — #22232 (session takeover/lock recovery), #22267 (settings.json respect). Browser agent is critical but fragile.

5. **Smarter skill/sub-agent invocation** — #21968 and #21432: agent should proactively use configured skills and accurately self-document capabilities.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Agent hangs & false success states** | #21409 (generalist hangs), #22323 (MAX_TURNS → GOAL success), #25166 (shell "waiting input") | **Critical** — blocks basic workflows |
| **Subagent/skill underutilization** | #21968 (skills ignored), #22093 (subagents run without permission since v0.33.0) | High — configuration effort wasted |
| **Terminal compatibility gaps** | #22441 (XML leak), #26088 (keybinding fallbacks), #27054 (Windows paste), #27429 (EBADF on resume) | High — cross-platform polish debt |
| **Auto Memory reliability & security** | #26525–#26523 (redaction, invalid patches, infinite retry), #26516 (tracking umbrella) | High — data integrity and privacy risk |
| **Context window pressure** | #27151 (/compress for ACP), #24736 (union-find compaction), #24246 (>128 tools → 400 error) | Medium — scaling limitation |
| **Non-interactive mode fragility** | #27418, #27292 (raw mode, native bridge, auth rejection) | Medium — CI/automation use cases |

---

*Digest compiled from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) public activity. For full context, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-26

---

## 1. Today's Highlights

GitHub shipped **v1.0.55-0** with a targeted fix for Single Executable Application (SEA) extension launching, while the community filed **18 active issues** in 24 hours—revealing escalating friction around session management, plugin lifecycle reliability, and enterprise remote session governance. New regressions in `workingDirectory` propagation and `resume-auto-cd` behavior suggest recent releases introduced breaking changes for extension developers and external tool integrators.

---

## 2. Releases

| Version | Key Change |
|---------|-----------|
| [v1.0.55-0](https://github.com/github/copilot-cli/releases/tag/v1.0.55-0) | **Fixed:** Extensions now launch correctly when the CLI runs as a Single-Executable Application (SEA). Resolves deployment packaging issue for distributed binaries. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3442](https://github.com/github/copilot-cli/issues/3442) | **Remote sessions disabled post-v1.0.51** — Enterprise users blocked with "Contact your organization administrator" despite no explicit policy change | **Enterprise adoption blocker**: Breaks established remote workflows; likely policy enforcement bug or undocumented tenant migration | 🔥 10 upvotes, 4 comments; active troubleshooting |
| [#2854](https://github.com/github/copilot-cli/issues/2854) | **Google Gemini unavailable in Copilot CLI** | Model diversity demand; Gemini's long-context and reasoning capabilities increasingly expected parity with VS Code Copilot | 🔥 15 upvotes; highest-feature request signal |
| [#3515](https://github.com/github/copilot-cli/issues/3515) | **`resume-auto-cd` sets CWD to `/` for externally-created sessions** (Agency CLI) | **Integration regression**: Breaks external producer tooling; `agency cp` and similar workflows lose directory context | Fresh report, no comments yet—likely under-triaged |
| [#3508](https://github.com/github/copilot-cli/issues/3508) | **Extension hooks receive empty `workingDirectory` since ~v1.0.51** | **Plugin ecosystem breakage**: Lifecycle hooks (`onSessionStart`, `onPreToolUse`) degraded; breaks path-relative extension logic | Closed same-day; rapid fix suggests critical priority |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | **`preToolUse` silent rewrite impossible** — `permissionDecision: allow` still shows confirmation dialog | **Plugin API limitation**: Prevents trusted automation hooks from seamless command interception; forces UX friction | 9 comments, ongoing; design intent unclear |
| [#3517](https://github.com/github/copilot-cli/issues/3517) | **Queued messages + notifications delivered out of order** | **Concurrency bug**: Breaks conversational coherence during tool-call latency; affects agent reliability | Fresh, no comments; core protocol concern |
| [#3514](https://github.com/github/copilot-cli/issues/3514) | **`list_agents` returns empty while UI shows 7 active agents** | **Observability gap**: Background agent orchestration broken; assistants incorrectly conclude tasks finished | Fresh, no comments; MCP/agent runtime critical |
| [#3516](https://github.com/github/copilot-cli/issues/3516) | **CLI ignores mandatory Microsoft C++ LSP instructions** | **Tool-use governance failure**: Model violates explicit configuration; raw search preferred over structured LSP | Fresh, with diagnostic logs attached |
| [#3030](https://github.com/github/copilot-cli/issues/3030) | **Sub-agent MCP tool calls fail on JSON array returns** | **MCP interoperability**: Zod schema mismatch between orchestrator and sub-agent contexts; blocks compound agent workflows | 2 comments; nested agent architecture blocked |
| [#3518](https://github.com/github/copilot-cli/issues/3518) | **No ability to unarchive/restored archived project sessions** | **Data loss anxiety**: Long-running orchestrator sessions with accumulated context/checkpoints irrecoverable | Fresh; session lifecycle gap |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

> Notable given 18 active issues—suggests either: (a) maintainers working privately on release branches, (b) community contribution friction, or (c) issue triage outpacing PR velocity. The v1.0.55-0 release without associated visible PRs supports hypothesis (a).

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Model choice expansion** | [#2854](https://github.com/github/copilot-cli/issues/2854) (Gemini), implicit demand for OpenAI/Anthropic parity | **High** — 15 upvotes, competitive pressure |
| **Session lifecycle durability** | [#3518](https://github.com/github/copilot-cli/issues/3518) (unarchive), [#3515](https://github.com/github/copilot-cli/issues/3515) (resume CWD), [#3512](https://github.com/github/copilot-cli/issues/3512) (mobile notifications) | **Growing** — remote/session features maturing, edge cases surfacing |
| **Plugin/extension API hardening** | [#2643](https://github.com/github/copilot-cli/issues/2643) (silent hooks), [#3508](https://github.com/github/copilot-cli/issues/3508) (workingDirectory), [#3479](https://github.com/github/copilot-cli/issues/3479) (`/env` visibility) | **Critical** — ecosystem stability at risk |
| **Agent orchestration observability** | [#3514](https://github.com/github/copilot-cli/issues/3514) (list_agents), [#3517](https://github.com/github/copilot-cli/issues/3517) (message ordering) | **Emerging** — multi-agent patterns scaling |
| **Enterprise governance transparency** | [#3442](https://github.com/github/copilot-cli/issues/3442) (remote enablement), [#2979](https://github.com/github/copilot-cli/issues/2979) (billing limit ambiguity) | **Blocked adoption** — admin UX gap |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **v1.0.51+ regressions in extension/session infrastructure** | Repeated reports | 🔴 High | [#3508](https://github.com/github/copilot-cli/issues/3508), [#3515](https://github.com/github/copilot-cli/issues/3515), [#3442](https://github.com/github/copilot-cli/issues/3442) — suggests insufficient integration testing for plugin/enterprise paths |
| **Silent automation blocked by confirmation UX** | Long-standing | 🟡 Medium-High | [#2643](https://github.com/github/copilot-cli/issues/2643) — `preToolUse` hooks cannot achieve true non-interactive rewrite; limits CI/automation use cases |
| **Agent state incoherence** | Emerging | 🔴 High | [#3514](https://github.com/github/copilot-cli/issues/3514), [#3517](https://github.com/github/copilot-cli/issues/3517) — background agent tracking and message ordering unreliable |
| **LSP/tool-use configuration ignored by model** | Sporadic, critical when hit | 🟡 Medium | [#3516](https://github.com/github/copilot-cli/issues/3516) — governance rules not enforced in practice |
| **Mobile/remote session parity gaps** | Persistent | 🟡 Medium | [#2979](https://github.com/github/copilot-cli/issues/2979), [#3512](https://github.com/github/copilot-cli/issues/3512) — GitHub Android app as second-class remote client |

---

*Digest compiled from github.com/github/copilot-cli public activity 2026-05-25 to 2026-05-26.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-26

## 1. Today's Highlights

No new releases dropped in the last 24h, but community activity centered on **skill system interoperability** and **execution reliability**: a notable Codex compatibility gap (#1894) gained traction, while a critical WebSocket worker hang (#2365) was freshly reported. The long-running TypeScript rewrite PR (#1707) saw renewed attention, signaling continued debate over the project's Python foundation.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#1894** | [Recursive nested skill loading broken vs. Codex](https://github.com/MoonshotAI/kimi-cli/issues/1894) | **Ecosystem lock-in risk**: Codex-compatible repos fail silently on Kimi, fragmenting agent skill portability. Nested `.agents/skills/{name}/skills/` patterns are common in multi-agent setups. | 4 comments, cross-referenced with Codex behavior; author provided concrete repro repo structure. No 👍 yet but high conceptual priority. |
| **#2365** | [`kimi-code-worker` hangs on Shell tool via WebSocket](https://github.com/MoonshotAI/kimi-cli/issues/2365) | **Production blocker**: WebSocket API mode (used for remote/CI integrations) deadlocks on Shell execution. Affects automation pipelines relying on `kimi web`. | Fresh report (0 comments), needs repro confirmation. Severity high given "hang" implies unrecoverable state. |
| **#2232** | [Background tasks need adjustable timeout](https://github.com/MoonshotAI/kimi-cli/issues/2232) | **UX friction in long-running workflows**: Kimi's optimistic timeout estimation forces kill-and-restart cycles, wasting context window and API spend. | 2 comments; resonates with power users running builds/tests. Low engagement but high pain-per-user. |
| **#2173** | [Add crow-cli support to coding plan](https://github.com/MoonshotAI/kimi-cli/issues/2173) *(CLOSED)* | **Third-party tool integration**: Author of `crow-cli` sought API key flexibility; closure suggests either resolution or plan limitation clarified. | 0 comments, closed without public discussion—may indicate support channel redirect or WONTFIX. |

*Note: Only 4 issues updated in 24h. All are included for completeness.*

---

## 4. Key PR Progress

| # | PR | Status | Details |
|---|-----|--------|---------|
| **#1707** | [refactor: Python → Bun + TypeScript + React Ink](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **OPEN** (since 2026-04-01) | Most ambitious community PR: 166 TS/TSX files, ~32k LOC, 37 tests, 211 commits. Claims "Python is a complete failure" for CLI UX. **Blockers likely**: review bandwidth, breaking changes, Bun runtime adoption risk. Updated yesterday—still active. |

*Note: Only 1 PR updated in 24h.*

---

## 5. Feature Request Trends

From the active issue corpus, three vectors dominate:

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Agent ecosystem interoperability** | #1894 (Codex skill parity), #2173 (crow-cli integration) | Users expect Kimi to play nice with existing agent standards (OpenAI's `.agents/`, third-party CLIs). Siloing risks adoption. |
| **Execution control & observability** | #2232 (timeout adjustment), #2365 (worker hang) | Long-running/remote tasks need granular lifecycle control. "Fire and forget" isn't enough for production use. |
| **Runtime/performance modernization** | #1707 (TS rewrite) | Dissatisfaction with Python CLI latency/bundling. Community willing to bet on native-speed alternatives (Bun). |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Manifestation |
|------------|-----------|----------|---------------|
| **Skill discovery gaps** | Emerging | High | Nested skills work in Codex, fail in Kimi → "works on their machine" debugging hell |
| **Timeout rigidity** | Recurring | Medium-High | Optimistic defaults waste money; no mid-flight adjustment kills productivity |
| **WebSocket reliability** | New report | Critical | Worker hangs = unrecoverable automation failures; no clear workaround |
| **Python CLI performance** | Chronic (via #1707) | Medium | Startup time, dependency weight, distribution friction driving rewrite pressure |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli public activity 2026-05-25 → 2026-05-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-26

---

## 1. Today's Highlights

No new releases dropped in the last 24h, but community activity remains intense with **50 issues updated** and heavy focus on **model provider reliability**—particularly Kimi K2.5 tool-calling failures and GPT latency regressions. On the PR front, contributors are pushing hard on **CLI polish** (trailing newlines, Windows terminal handling) and **core infrastructure** (database schema ownership, global server state). The DeepSeek V4 Pro price cut is driving subscription policy discussions across multiple issues.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#20650](https://github.com/anomalyco/opencode/issues/20650) | **Kimi k2.5 has issues with tool calling** | JSON parsing failures in bash tool calls break agent workflows for a major model provider; "invalid" tool hallucination suggests prompt/template mismatch | **69 comments**, 4 👍 — highest engagement, persistent since April |
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | **GPT Models takes too long to respond** | GPT 5.4 xhigh showing minute+ latency on simple commands undermines premium tier value | **44 comments**, 24 👍 — strong upvote signal, recent (May 24) |
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **[FEATURE]: Add native session goals with /goal** | Session lifecycle management is a gap vs. competitors; custom slash commands insufficient for persistent context | **24 comments**, 31 👍 — well-supported feature request |
| [#2156](https://github.com/anomalyco/opencode/issues/2156) | **Stale LSP errors** *(closed)* | Claude falsely reports fixes failed due to stale diagnostics — classic agent-tooling impedance mismatch | **20 comments**, resolved with closure |
| [#13838](https://github.com/anomalyco/opencode/issues/13838) | **Compaction replay injects fake user message** | Synthetic "What did we do so far?" triggers unwanted summaries, breaking UX for resumed sessions | **15 comments**, 3 👍 — subtle but annoying |
| [#24722](https://github.com/anomalyco/opencode/issues/24722) | **DeepSeek thinking mode: reasoning_content not passed back** | API compliance issue causes 400 errors on tool call turns with DeepSeek V4 models | **13 comments**, 10 👍 — blocks thinking mode adoption |
| [#29129](https://github.com/anomalyco/opencode/issues/29129) | **OpenAI stream intermittently freezes** | High CPU burn with idle HTTPS socket suggests async stream handling bug; requires manual restart | **12 comments**, 10 👍 — production-impacting |
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | **v1.15.1+ Breaks Bun Installs** | Postinstall lifecycle scripts blocked by Bun (and other non-npm PMs) breaks global installs | **11 comments**, 7 👍 — package manager ecosystem friction |
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | **[FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro 75% price cut** | Subscription pricing misaligned with API cost reality; competitive pressure to pass savings through | **11 comments**, 15 👍 — business model tension |
| [#5200](https://github.com/anomalyco/opencode/issues/5200) | **[FEATURE]: /compact should use OpenAI Responses API compaction** | Native API compaction vs. custom implementation — quality and cost optimization | **7 comments**, 22 👍 — high-value, long-standing request |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#29285](https://github.com/anomalyco/opencode/pull/29285) | **feat(app): make server sdk + sync state global** | ✅ Merged | Global `Servers` context replaces per-component `Server` context; adds Inter font (beta-only); multi-server homepage |
| [#29237](https://github.com/anomalyco/opencode/pull/29237) | **feat(tui): add /disconnect command for providers** | 🔄 Open | Closes [#23923](https://github.com/anomalyco/opencode/issues/23923); runtime provider removal without config edits |
| [#26419](https://github.com/anomalyco/opencode/pull/26419) | **fix(opencode): make bash tool description parameter optional** | 🔄 Open | Closes [#20669](https://github.com/anomalyco/opencode/issues/20669); reduces friction for tool-calling models that omit descriptions |
| [#29284](https://github.com/anomalyco/opencode/pull/29284) | **fix(cli): add trailing newline to --help output** | 🔄 Open | Closes [#28606](https://github.com/anomalyco/opencode/issues/28606); cosmetic but improves shell UX |
| [#29265](https://github.com/anomalyco/opencode/pull/29265) | **fix(app): restore queued follow-up setting** | 🔄 Open | Massive bug-fix sweep: closes **5 issues** ([#24580](https://github.com/anomalyco/opencode/issues/24580), [#21445](https://github.com/anomalyco/opencode/issues/21445), [#20245](https://github.com/anomalyco/opencode/issues/20245), [#5408](https://github.com/anomalyco/opencode/issues/5408), [#21906](https://github.com/anomalyco/opencode/issues/21906)) |
| [#29282](https://github.com/anomalyco/opencode/pull/29282) | **fix(config): support ${env:VAR} syntax** | 🔄 Open | Closes [#27853](https://github.com/anomalyco/opencode/issues/27853); aligns with POSIX shell conventions, reduces config confusion |
| [#29281](https://github.com/anomalyco/opencode/pull/29281) | **fix(opencode): prevent process.exit() from killing parent terminal on Windows** | 🔄 Open | Closes [#28673](https://github.com/anomalyco/opencode/issues/28673); Windows-specific `CTRL_CLOSE_EVENT` propagation fix |
| [#29068](https://github.com/anomalyco/opencode/pull/29068) | **refactor(core): move database schema ownership** | 🔄 Open | Major architectural shift: Drizzle schema + migrations from `packages/opencode` → `packages/core`; enables cleaner dependency graph |
| [#28592](https://github.com/anomalyco/opencode/pull/28592) | **fix(cli): handle OSC52 clipboard passthrough under GNU screen** | 🔄 Open | Closes [#28590](https://github.com/anomalyco/opencode/issues/28590); terminal multiplexer compatibility (tmux ≠ screen DCS sequences) |
| [#29280](https://github.com/anomalyco/opencode/pull/29280) | **feat: add simplify built-in skill** | 🔄 Open | Closes [#29272](https://github.com/anomalyco/opencode/issues/29272); post-change code cleanup via git diff review — fills workflow gap |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session management primitives** | `/goal` command ([#27167](https://github.com/anomalyco/opencode/issues/27167)), session pinning parity ([#28872](https://github.com/anomalyco/opencode/issues/28872)), compaction control ([#5200](https://github.com/anomalyco/opencode/issues/5200)), manual project reload ([#29266](https://github.com/anomalyco/opencode/issues/29266)) | High — core UX differentiator |
| **Subscription/pricing transparency** | DeepSeek V4 Pro limit adjustments ([#28846](https://github.com/anomalyco/opencode/issues/28846)), request volume estimates ([#29115](https://github.com/anomalyco/opencode/issues/29115)), billing issue reports ([#29207](https://github.com/anomalyco/opencode/issues/29207), [#29135](https://github.com/anomalyco/opencode/issues/29135)) | Surging — price cut catalyst |
| **Monorepo / multi-project support** | Task tool directory parameter ([#29271](https://github.com/anomalyco/opencode/issues/29271)), server state globalization ([#29285](https://github.com/anomalyco/opencode/pull/29285)) | Growing — enterprise scaling need |
| **Built-in skills / agent self-improvement** | `simplify` skill ([#29280](https://github.com/anomalyco/opencode/pull/29280)), memory tools ([#24395](https://github.com/anomalyco/opencode/pull/24395)) | Emerging — reducing manual oversight |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Model provider reliability** | 🔴 Critical | Blocks daily use | Kimi K2.5 JSON failures ([#20650](https://github.com/anomalyco/opencode/issues/20650)), GPT latency ([#29079](https://github.com/anomalyco/opencode/issues/29079)), DeepSeek 400 errors ([#24722](https://github.com/anomalyco/opencode/issues/24722)), OpenAI stream freezes ([#29129](https://github.com/anomalyco/opencode/issues/29129)) |
| **Installation / package manager friction** | 🟡 High | Onboarding barrier | Bun postinstall breakage ([#27906](https://github.com/anomalyco/opencode/issues/27906)), Windows terminal kills ([#29281](https://github.com/anomalyco/opencode/pull/29281)) |
| **Context / compaction bugs** | 🟡 High | Silent data loss, UX degradation | Infinite compaction loop ([#27924](https://github.com/anomalyco/opencode/issues/27924)), fake replay messages ([#13838](https://github.com/anomalyco/opencode/issues/13838)), token count underestimation ([#24143](https://github.com/anomalyco/opencode/issues/24143)) |
| **Subscription verification / billing** | 🟡 High | Trust erosion | Active membership not recognized ([#29207](https://github.com/anomalyco/opencode/issues/29207)), paid but not subscribed ([#29135](https://github.com/anomalyco/opencode/issues/29135)) |
| **AGENTS.md / instruction adherence** | 🟠 Medium | Agent customization failure | Instructions ignored ([#29206](https://github.com/anomalyco/opencode/issues/29206)) |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-25/26.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-26

## Today's Highlights

The Pi team merged a critical fix for OpenAI Codex hangs where 429 retries with multi-day `retry-after` headers would leave users stuck on "Working..." indefinitely. Extension API surface expanded significantly with new editor cursor methods, typed settings schemas, and streaming behavior exposure. A major provider addition landed with Alibaba DashScope (Qwen 3.7 Max) alongside polish improvements to terminal markdown rendering.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` hangs on "Working..." with zero-usage aborted turns | Most-discussed active bug; affects core UX for GPT-5.5/Codex users with no recovery path except Escape | 19 comments, 8 👍; labeled `inprogress`, `possibly-openclaw-clanker` |
| [#4942](https://github.com/earendil-works/pi/issues/4942) | coding-agent CLI does not exit after `main()` completes | Async Promise leak causes indefinite hangs; fundamental CLI lifecycle bug | 6 comments; closed with fix |
| [#4801](https://github.com/earendil-works/pi/issues/4801) | DeepSeek v4 pro `xhigh` rejected by OpenRouter as invalid `reasoning_effort` | Provider API drift breaks advertised model capability; "xhigh" is valid per DeepSeek but rejected by OpenRouter validation | 5 comments; open, needs provider-side coordination |
| [#4929](https://github.com/earendil-works/pi/issues/4929) | `minimumReleaseAge` silently blocks `pi update` on pnpm installs | Version management opacity frustrates users who expect latest; pnpm 11 compatibility gap | 5 comments; open, design discussion needed |
| [#4666](https://github.com/earendil-works/pi/issues/4666) | 429 `Retry-After` ignores `maxRetryDelayMs`; Escape/`/new` don't recover | Configuration promise broken; users expect capped waits, get silent indefinite blocking | 3 comments; open, PR #4991 addresses |
| [#4841](https://github.com/earendil-works/pi/issues/4841) | Footer ignores `modelOverrides.name`, docs suggest it should respect it | UI inconsistency between config and display; breaks user mental model of model identity | 3 comments; open |
| [#4990](https://github.com/earendil-works/pi/issues/4990) | Edits failing with "must have required properties edits" | Regression breaking core tool functionality; correlated with update | 3 comments; closed |
| [#4893](https://github.com/earendil-works/pi/issues/4893) | Clarify system prompt assembly for user instructions and tool guidelines | Transparency demand for prompt engineering; affects reproducibility and extension behavior | 3 comments; closed with documentation improvement |
| [#4984](https://github.com/earendil-works/pi/issues/4984) | Interactive mode crash on transient terminal `EPIPE` | Fatal uncaught exception aborts agent mid-turn; terminal reliability issue | 2 comments; closed with PR #4982 |
| [#4959](https://github.com/earendil-works/pi/issues/4959) | Compaction abort controller race can crash auto-compaction | Session lifecycle instability; affects long-running sessions with custom compaction hooks | 2 comments; withdrawn, resubmission expected |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4991](https://github.com/earendil-works/pi/pull/4991) | Disable hidden provider 429 retries | Caps `retry-after` handling to prevent infinite waits; fixes #4666 and #4945 root cause | **Open** — core reliability |
| [#4994](https://github.com/earendil-works/pi/pull/4994) | Fix skill command restore in session editors | Collapses expanded skill blocks back to `/skill:<name>` on edit restore; fixes #4995 | Closed |
| [#4987](https://github.com/earendil-works/pi/pull/4987) | File snapshot tracking in sandbox mode + perf optimizations | Fixes empty `get_modified_files` in sandbox; optimizes `SessionManager` memory | Closed |
| [#4985](https://github.com/earendil-works/pi/pull/4985) | Use OpenRouter returned cost for session logs | Eliminates cost reporting drift; augments session log accuracy for billing transparency | Closed |
| [#4982](https://github.com/earendil-works/pi/pull/4982) | Fix interactive mode crash on transient terminal EPIPE | Graceful handling of broken pipe during large output streams | Closed |
| [#4979](https://github.com/earendil-works/pi/pull/4979) | Time out idle Codex websockets | Prevents stale connection accumulation; related to #4945 hang mitigation | **Open** |
| [#4974](https://github.com/earendil-works/pi/pull/4974) | Rollback fixes, change review redesign, hooks compat, auto-memory RPC | Large bundled maintenance PR with frontend-backend coordination improvements | Closed |
| [#4971](https://github.com/earendil-works/pi/pull/4971) | `allowEmptySignature` compat for Anthropic-compatible providers | Fixes thinking block rewriting that breaks prompt caching and causes 400s | **Open** |
| [#4964](https://github.com/earendil-works/pi/pull/4964) | Add DashScope provider with 22 Qwen models | Major provider expansion via OpenAI Responses API; includes Qwen 3.7 Max | Closed |
| [#4962](https://github.com/earendil-works/pi/pull/4962) | Polish terminal markdown rendering | Native-style headings, improved code block visuals; UX polish | Closed |

---

## Feature Request Trends

1. **Extension API Surface Expansion** — Strong momentum for editor introspection (`getEditorCursor`, `insertAtCursor`), typed settings schemas (`pi.settings.register`), and streaming behavior exposure. Community wants Pi to be programmable shell environment, not just agent.

2. **Persistent UI Primitives for Extensions** — Request for selection-safe, layout-reserved panels (not overlays) suggests extensions are outgrowing current terminal-grid composition model.

3. **Skill System Polish** — Consecutive skill expansion, skill command restoration, and injection behavior all received fixes; indicates skills are actively used but edge cases in multi-skill workflows remain rough.

4. **Provider Breadth & Correctness** — DashScope addition, Bedrock Qwen fixes, OpenRouter cost accuracy, and Anthropic-compatible empty signature handling show sustained demand for reliable multi-provider operation.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Silent/indefinite blocking on retries** | Very High | #4945, #4666, PR #4991, #4979 — 429 handling and websocket idleness both cause unrecoverable "Working..." states without user feedback |
| **Update/version management opacity** | High | #4929 (pnpm `minimumReleaseAge`), #4969 (context window regression) — users lack visibility into why they're not on latest or why configs behave differently |
| **Terminal/TUI reliability** | High | #4984 (EPIPE crash), #4972 (CJK word movement), #4965 (Kitty/VS Code focus bug), #4970 (diff renderer skipping frames) — terminal I/O edge cases accumulate |
| **Provider API drift & validation** | Moderate-High | #4801 (DeepSeek `xhigh`), #4993 (Bedrock Qwen model IDs), #4975 (empty text blocks), #4971 (empty signatures) — each provider subtly diverges |
| **Sandbox/snapshot behavior inconsistency** | Moderate | #4987 (empty modified files in sandbox) — security mode breaks expected tooling |
| **Prompt template regressions** | Moderate | #4973 (newline collapsing), #4995 (skill expansion in edit restore) — text processing changes break user workflows |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-26

## Today's Highlights

The Qwen Code team shipped **v0.16.1-nightly** with a critical build fix, while the community is intensely focused on hardening the new `qwen serve` daemon mode with five new PRs closing capability gaps from the official backlog. A wave of internationalization and telemetry polish PRs also landed, reflecting the project's maturation toward production readiness.

---

## Releases

### [v0.16.1-nightly.20260525.84f408017](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260525.84f408017)
- **Fix:** Resolved TypeScript TS5055 build errors by cleaning stale outputs before `tsc --build` ([#4453](https://github.com/QwenLM/qwen-code/pull/4453))
- **Chore:** Version bump to v0.16.1

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | **Mode B feature-priority roadmap toward v0.16 production-ready** | The master planning issue for daemon mode stabilization; 40 comments show deep architectural debate on session multiplexing and HTTP/SSE surface completeness | 🔥 High engagement from core maintainers |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | **Daemon capability gaps & prioritized backlog (post v0.16-alpha)** | Fresh inventory of 20+ missing HTTP/SSE endpoints that SDKs and IDE plugins need; becoming the central coordination point for all `qwen serve` work | 🆕 Created yesterday, already 6 comments |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode (`qwen serve`): proposal & open decisions** | The original 6-chapter design series by `wenshao` that underpins all current implementation; still evolving as source of truth | 📚 24 comments, referenced across new PRs |
| [#4488](https://github.com/QwenLM/qwen-code/issues/4488) | **VS Code plugin sidebar disappears in v1.120.0** | Breaking IDE integration for users on current VS Code stable; "flashes then vanishes" suggests race condition in activation | 🐞 6 comments, needs repro info |
| [#4513](https://github.com/QwenLM/qwen-code/issues/4513) | **PNG inlineData rejected by qwen3.7-max OpenAI-compatible interface** | Multimodal regression blocking image workflows on latest model endpoint; 400 Bad Request on retry loop | 🚨 P0-adjacent, fix PR already open |
| [#4494](https://github.com/QwenLM/qwen-code/issues/4494) | **Side queries ignore configured output language** | Recaps, titles, tool summaries hardcoded to English despite `output-language.md` setting; hurts non-English adoption | 🌏 Fix PR #4519 already drafted |
| [#4506](https://github.com/QwenLM/qwen-code/issues/4506) | **Agent stuck in infinite task loop (French report)** | Task execution deadlock where agent describes but never executes work; reported in French indicating global user base | ⏱️ UX reliability concern |
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | **Rider IDE cannot login — OAuth redirect loop** | JetBrains ecosystem blocked from Aliyun Token Plan; IDE plugin auth parity gap vs VS Code | 🔑 Auth ecosystem fragmentation |
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) | **Daily token consumption statistics needed** | User discovered 30M tokens consumed in single session; shock-driven request for spend visibility and budgeting | 💰 Cost management urgency |
| [#4481](https://github.com/QwenLM/qwen-code/issues/4481) | **English-only instruction ignored, rewrite requests fail** | Model instruction following degradation; user explicitly requests English output but gets unchanged non-English responses | 🎯 Prompt compliance regression |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#4524](https://github.com/QwenLM/qwen-code/pull/4524) | **Bound foreground shell output capture** | Memory safety fix: caps shell output before string construction, drains but discards overflow to prevent OOM on massive command output | 🆕 Open |
| [#4519](https://github.com/QwenLM/qwen-code/pull/4519) | **Honor output language in side queries** | Hooks `output-language.md` into recaps, titles, tool summaries, and follow-up suggestions — closes i18n gap for 6+ user-facing surfaces | 🆕 Open |
| [#4520](https://github.com/QwenLM/qwen-code/pull/4520) | **Truncate model-facing tool output** | Scheduler-level safety net reusing `truncateToolOutput()` to prevent context window overflow from oversized tool returns | 🆕 Open |
| [#4517](https://github.com/QwenLM/qwen-code/pull/4517) | **Refresh raw model-derived defaults** | **Fixes #4513**: Clears stale multimodal settings when switching to text-only models like `qwen3.7-max`, preventing 400 errors on PNG inlineData | 🆕 Open |
| [#4516](https://github.com/QwenLM/qwen-code/pull/4516) | **POST /session/:id/compress + /_meta (daemon T1.3/T1.4)** | First Tier-1 daemon routes from backlog #4514: HTTP-triggered session compaction and metadata updates, parity with TUI `/compress` | 🆕 Open |
| [#4515](https://github.com/QwenLM/qwen-code/pull/4515) | **GET /session/:id/stats + /export (daemon T2.5/T2.6)** | Read-only session introspection routes reusing TUI's `collectSessionData` SSOT — daemon and CLI now agree on state representation | 🆕 Open |
| [#4504](https://github.com/QwenLM/qwen-code/pull/4504) | **POST /session/:id/recap** | One-sentence "where did I leave off" endpoint for SDK/web UI/IDE plugins without full agent turn overhead | 🆕 Open |
| [#4521](https://github.com/QwenLM/qwen-code/pull/4521) | **Tolerate unsupported Streamable HTTP GET SSE** | MCP transport compatibility: gracefully handles 400/405 from optional SSE streams, normalizes to fallback path | 🆕 Open |
| [#4518](https://github.com/QwenLM/qwen-code/pull/4518) | **Stabilize DeepSeek tool cache prefix** | Sorts tools by function name for DeepSeek API hostname only, improving cache hit rates and reporting accuracy | 🆕 Open |
| [#4522](https://github.com/QwenLM/qwen-code/pull/4522) | **Use session channel when closing ACP sessions** | Fixes bookkeeping bug where channel overlap windows caused tombstoning and teardown on wrong channel | 🆕 Open |

---

## Feature Request Trends

**1. Daemon/Server Mode Maturation**
The dominant theme across issues and PRs. Community is pushing `qwen serve` from "functionally runnable" to production-ready with demands for: HTTP route parity with TUI (#4514), session compression/export over REST (#4516, #4515), real-time sync design (#4511), and SDK-ready session recaps (#4504).

**2. Observability & Cost Control**
Token spend visibility (#4479), W3C trace propagation (#4384), telemetry span correctness (#4486, #4501), and interaction tracing (#4509) cluster around operational confidence. Users managing 30M-token sessions need budgeting tools.

**3. Internationalization at Depth**
Not just translation, but *systematic* output language respect (#4494, #4481). Side queries, thinking blocks, and error messages leak English despite configuration.

**4. IDE Ecosystem Parity**
VS Code stability (#4488), JetBrains Rider auth (#4493), and MCP context accuracy (#4508) show expansion beyond initial CLI-centric user base.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Model switching fragility** | #4513 (multimodal settings leak), #4501 (thinking config never fires for qwen3), #4517 (raw model defaults stale) | 🔴 High — breaks core workflows |
| **Session/agent deadlock** | #4506 (infinite loop), #4471 (task hang), #4442 (UI freeze on bulk edits) | 🔴 High — trust erosion |
| **Auth/identity fragmentation** | #4493 (Rider OAuth loop), credential embedding in extensions (#4425) | 🟡 Medium — ecosystem growth blocker |
| **Context window opacity** | #4508 (MCP falsely shown as loaded), #4479 (surprise token consumption), missing cache visibility (#4444) | 🟡 Medium — cost and performance anxiety |
| **Settings durability** | #4448 (invalid JSON silently resets), #4450 (`--list-extensions` no-op) | 🟢 Lower — polish gaps |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-05-25 to 2026-05-26.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-05-26

## Today's Highlights

The project is accelerating toward **v0.8.45 release** with a flurry of merged fixes for sub-agent race conditions, approval UX friction, and model picker state management. Simultaneously, maintainer Hmbown published a sweeping **"cache-maximalism" roadmap** (Issues #2122–#2128) outlining v0.9.0's architecture: graph-backed work objects, provider-neutral micro-operations, and a model-authored tool proposal pipeline—positioning CodeWhale as a "tool operating system" rather than a chat wrapper.

---

## Releases

*No new releases in the last 24 hours. v0.8.45 is in final preparation (PR #2118).*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1615](https://github.com/Hmbown/CodeWhale/issues/1615) | Docker garbled output / system crash | **188 comments** make this the most engaged issue in project history; user reports complete Linux server lockup requiring hard reboot after API key swap. Represents critical reliability gap in containerized deployment. | Frustration peak—user explicitly calls project "垃圾玩意" (trash); indicates onboarding/docs failure for Docker path |
| [#2007](https://github.com/Hmbown/CodeWhale/issues/2007) | Multi-agent orchestration surface ("Migration runs") | Core v0.8.44 feature replacing "School-mode" with bounded parallel workers, role assignment, disagreement reconciliation. Defines product's agentic differentiation. | Early design discussion; 5 comments suggest active architectural iteration |
| [#1879](https://github.com/Hmbown/CodeWhale/issues/1879) | v0.8.45 tracker: control plane and recovery | **Thematic anchor** for current release—interruptible/recoverable agentic terminal work. "Power is being able to stop and redirect without losing progress." | Closed as shipped; served as coordination hub |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | Typed persistent permission rules (`execpolicy`) | Security-critical infrastructure: scoped rules by tool name, command prefix, path pattern with allow/deny/ask decisions. Enables unattended automation without full trust. | 3 comments; greyfreedom driving implementation, now has open PR |
| [#2104](https://github.com/Hmbown/CodeWhale/issues/2104) | Homebrew: `codewhale` not found on PATH | Breaking regression for macOS package users post-`brew upgrade`; `deepseek` alias warns of deprecation but successor binary missing. | Fresh report (2 comments); install pipeline reliability concern |
| [#2052](https://github.com/Hmbown/CodeWhale/issues/2052) | macOS Gatekeeper blocks standalone binary | Apple security verification failure on macOS 26.5; blocks execution for non-Homebrew manual installs. | 1 comment; PR #2139 already proposes documentation workaround |
| [#2134](https://github.com/Hmbown/CodeWhale/issues/2134) | Pasted table text triggers premature send | Newline characters in clipboard interpreted as Enter keypress, firing dialog and swallowing multi-line input. VS Code error list copy-paste specifically broken. | Fresh bug; UX friction for IDE-integrated workflows |
| [#2122](https://github.com/Hmbown/CodeWhale/issues/2122) | EPIC: cache-maximal tool operating system | **Vision document** for v0.9.0—treats tools as "external nervous system" with cache affinity, typed handles, dry-run semantics. Rejects chat-transcript-centric agent design. | 1 comment; 6 linked child issues published same day indicate coordinated roadmap drop |
| [#2128](https://github.com/Hmbown/CodeWhale/issues/2128) | Rustfactor pilot: graph-backed refactoring | Concrete application of cache-maximalism to multi-file refactors; proposes AST/call-graph tools as first-class primitives vs. text patches. | 1 comment; addresses acknowledged "slop" problem in agentic coding |
| [#2114](https://github.com/Hmbown/CodeWhale/issues/2114) | Profile switch doesn't override env-based provider | Environment variables silently stomp profile config, breaking multi-provider workflows. User expects profile isolation. | Duplicate of #2112 (Chinese report); PR #2119 already in review |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#2118](https://github.com/Hmbown/CodeWhale/pull/2118) | Prepare v0.8.45 | RLM session objects, cancellable directory/search tools, deterministic agent names, `/balance` scaffold, palette audit cleanup | **Merged** |
| [#2120](https://github.com/Hmbown/CodeWhale/pull/2120) | Emit subagent completion before terminal update | Fixes race where `<codewhale:subagent.done>` arrived post-summary, making agent appear to continue working (closes #1961) | **Merged** |
| [#2143](https://github.com/Hmbown/CodeWhale/pull/2143) | Simplify approval confirmation flow | Removes staged two-Enter confirmation; single keystroke approves destructive tools (closes #1257) | **Merged** |
| [#2142](https://github.com/Hmbown/CodeWhale/pull/2142) | Add Kimi OAuth provider support | First-class Moonshot/Kimi integration with CLI OAuth credential refresh, coding endpoint routing | **Merged** |
| [#2119](https://github.com/Hmbown/CodeWhale/pull/2119) | Avoid default env overrides for profiles | Stops dispatcher from exporting resolved defaults as TUI env vars; preserves explicit CLI flags as overrides (closes #2114) | Open |
| [#2133](https://github.com/Hmbown/CodeWhale/pull/2133) | Bridge user-input events to external GUI clients | Exposes `EngineEvent::UserInputRequired` through runtime API for VS Code extension and other GUI consumers | Open |
| [#2135](https://github.com/Hmbown/CodeWhale/pull/2135) | Show search provider in `doctor` output | Surfaces active `web_search` backend and config source; enables debugging Bing-vs-DuckDuckGo silent failures (closes #2131) | Open |
| [#2062](https://github.com/Hmbown/CodeWhale/pull/2062) | Persist permission rules from approval prompts | TUI affordance to save scoped `allow` rules during tool approval, with config preview (builds on #1186) | Open |
| [#1856](https://github.com/Hmbown/CodeWhale/pull/1856) | Replace RwLock with Semaphore in ToolCallRuntime | Eliminates deadlock risk when tools re-enter or serial tools block parallel acquisition | Open |
| [#2139](https://github.com/Hmbown/CodeWhale/pull/2139) | Document macOS Gatekeeper workaround | `xattr -d com.apple.quarantine` guidance for manual binary installs; addresses #2052 | Open |

---

## Feature Request Trends

**1. Cache-Maximal Agent Architecture**  
The dominant theme across 7 new issues (#2122–#2128). Requests span: graph-backed work objects replacing text rebuilds; tool contract DSL with cache policy and dry-run semantics; provider-neutral micro-operations for cheap model calls as typed tools; and a "slop ledger" tracking unresolved architectural residue. Signals maturation beyond chat-wrapper paradigm.

**2. Permission & Trust Infrastructure**  
Typed `execpolicy` rules (#1186, PR #2062) plus simplified approval flows (PR #2143) indicate push toward unattended automation. Community wants granular, persistent, inspectable security boundaries.

**3. Multi-Agent Orchestration**  
Coordinated parallel workers with role assignment (#2007) and group skill loading (#2117) suggest users scaling beyond single-agent sessions for complex projects.

**4. Voice & Accessibility**  
v0.8.45 prototype pulled due to terminal keybinding conflicts; v0.8.46 planning (#2115, #2116) for terminal-safe shortcuts and cross-platform STT.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Installation & distribution fragility** | Docker garbled output (#1615), Homebrew PATH breakage (#2104), macOS Gatekeeper blocks (#2052), standalone binary quarantine (#2139) | **Critical** — four distinct install paths failing |
| **Silent configuration overrides** | Environment variables stomp profile provider (#2114/#2112), model name lowercasing breaks exact provider identifiers (#2109) | High — breaks multi-provider workflows |
| **Input handling edge cases** | Newline-in-clipboard triggers premature send (#2134), two-Enter confirmation fatigue (#1257) | Medium — daily UX friction |
| **Search reliability** | Bing HTML scraping returns empty results for technical queries (#2130, #2132); users unaware of DuckDuckGo fallback option | Medium — degrades agent research capability |
| **Sub-agent lifecycle visibility** | Completion events arriving post-summary (#1961), low-information TUI rows (#2018) | Medium — erodes trust in autonomous execution |

---

*Digest compiled from github.com/Hmbown/DeepSeek-TUI (CodeWhale) activity 2026-05-25.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*