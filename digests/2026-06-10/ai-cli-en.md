# AI CLI Tools Community Digest 2026-06-10

> Generated: 2026-06-10 00:30 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-06-10

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing intense competitive pressure with **7+ actively maintained tools** shipping releases within a 24-hour window. The sector has bifurcated into two camps: **closed-ecosystem incumbents** (Claude Code, OpenAI Codex, GitHub Copilot CLI) racing on model capability and infrastructure reliability, and **open-architecture challengers** (Qwen Code, OpenCode, Pi, CodeWhale) differentiating on provider flexibility, multi-agent orchestration, and extensible protocols. A critical inflection point is emerging around **safety classifier calibration**—Anthropic's aggressive Fable 5 safety layer triggered 7+ false-positive reports on launch day, revealing tension between "safe for general use" framing and legitimate technical workloads in security, systems, and data engineering.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Status |
|------|:-----------:|:---------:|:--------------:|----------------|
| **Claude Code** | 50+ | 11 | 1 (v2.1.170) | ✅ Stable — Fable 5 launch day |
| **OpenAI Codex** | ~15 tracked | 10+ | 1 (rust-v0.139.0) | ✅ Stable + 2 alpha pre-releases |
| **Gemini CLI** | ~12 tracked | 8 | 4 (v0.47.0-preview.0, nightly, v0.46.0-preview.3, v0.45.3) | 🔥 Rapid patch cycle — Vertex AI fix |
| **GitHub Copilot CLI** | ~10 tracked | **0** | 1 (v1.0.61) | ⚠️ Internal dev model — no visible PRs |
| **Kimi Code CLI** | 1 | 0 | 0 | ⚠️ Quiet — possible pre-release stabilization |
| **OpenCode** | ~12 tracked | 9 | 0 | 🔄 Active development — no release |
| **Pi** | ~10 tracked | 10 | 1 (v0.79.1) | ✅ Stable — Fable 5/Bedrock support |
| **Qwen Code** | 28 | 10+ | 2 (v0.18.0-preview.0/.1) | 🔄 Preview cycle — v0.18 stabilization |
| **CodeWhale** (ex-DeepSeek TUI) | 16 new | 10 | 1 (v0.8.55) | ✅ Stable — rebrand + new providers |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Multi-account / identity isolation** | Claude Code (#18435, #36151), GitHub Copilot CLI | Work/personal context separation; consultant/agency workflows; enterprise org boundaries |
| **Session durability & portability** | Qwen Code (#4897, `/rewind`), OpenCode (#13267), CodeWhale (#2934), Claude Code (#60058) | Cross-device continuity; cross-session recall; export/import; background agent resume |
| **MCP ecosystem hardening** | Claude Code (#66726), Gemini CLI (#4615), GitHub Copilot CLI (#3436, #3701), Qwen Code (#4615) | Graceful degradation on server failure; project-scoped trust; startup resilience; OAuth fan-out fixes |
| **Undo/rollback mechanisms** | OpenAI Codex (#9203 — 274 👍), CodeWhale (#1846) | Revert destructive agent actions; diff preview before approval; Git-agnostic recovery |
| **Per-agent/subagent configuration** | Claude Code (#66402), OpenAI Codex (#18969, #23095), Qwen Code (#4844 Agent Team) | Model/effort isolation; workspace path scoping; fleet orchestration without global mutation |
| **Observability & cost control** | OpenAI Codex (#27122, #27078), Qwen Code (#4896, TPS/TTFT stats), CodeWhale (#2953–#2957) | Token telemetry; latency tracing; prompt cache optimization; generation timing metrics |
| **Windows platform parity** | OpenAI Codex (#24391), Gemini CLI (#21983), Qwen Code (#4901, #4908), GitHub Copilot CLI (#3662–#3735) | Sandbox initialization; PATH persistence; terminal emulator compatibility; notification handling |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Qwen Code | OpenCode | Pi | CodeWhale |
|-----------|:-----------:|:------------:|:----------:|:------------------:|:---------:|:--------:|:--:|:---------:|
| **Primary differentiator** | Model capability frontier (Fable 5/Mythos) | Infrastructure reliability & latency | Agent autonomy (browser, subagents) | GitHub ecosystem integration | Open protocol (ACP) & multi-agent | Provider flexibility & desktop | Cross-provider unification | Remote/mobile workbench |
| **Target user** | Security-conscious enterprises; research | Production engineering teams; scale | Google Cloud/Vertex AI users | Existing GitHub Copilot IDE users | Chinese market; protocol integrators | Self-hosters; VS Code extension users | Power users; terminal-native | Mobile-first; global VPS users |
| **Technical approach** | Closed model stack; aggressive safety | Rust-based; streaming APIs; tracing | Python-heavy; Gemini-native | Electron/TypeScript; internal-only dev | Rust + TypeScript; ACP protocol | Electron desktop + CLI; plugin ecosystem | Rust TUI; prompt templates | TypeScript TUI; Telegram bridge |
| **Model strategy** | Anthropic-only; tiered (Opus/Sonnet/Haiku) | OpenAI-only; GPT-5.x series | Google-only; Gemini 3.x series | Multi-model (OpenAI + Gemini + others) | Qwen-native + Claude plugin | User-configured (any provider) | Multi-provider (10+ backends) | Multi-provider (19 providers) |
| **Safety philosophy** | Aggressive classifier; silent downgrade | Transparent error; user override | Explicit approval gates | Project Trust with inheritance | Plan Approval Gate (`enter_plan_mode`) | Plugin-configurable | User-controlled trust levels | YOLO mode with verbosity tuning |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **🔥 Highest velocity** | **Gemini CLI**, **CodeWhale**, **Qwen Code** | 4 releases/24h (Gemini); 16 new issues + rebrand (CodeWhale); 28 issues + ACP transport + Agent Team (Qwen) |
| **⚡ Sustained high activity** | **Claude Code**, **OpenAI Codex**, **OpenCode**, **Pi** | 50+ issues, 11 PRs (Claude); 10+ PRs with latency optimization (Codex); unified search refactor (OpenCode); 10 PRs with provider fixes (Pi) |
| **⚠️ Concerning patterns** | **GitHub Copilot CLI**, **Kimi Code CLI** | Zero visible PRs in 24h suggests internal-only development (Copilot); single issue, zero PRs (Kimi) — possible resource reallocation or pre-release quiet period |
| **📈 Rapid iteration signals** | CodeWhale (rebrand + 2 new providers), Gemini CLI (patch cascade for Vertex fix), Qwen Code (preview.0→.1 stabilization) | |
| **🛑 Stagnation risk** | GitHub Copilot CLI #53 (6 months no response on breaking change; community fork `shell-ai`); Kimi Code CLI v0.12.0 Edit tool regression with minimal triage response | |

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Safety-performance tension is now a product risk** | Claude Code Fable 5: 7+ false-positives in 24h on legitimate security work; silent downgrades break user trust | "Safety-first" messaging may require "expert mode" opt-outs or domain-aware classifiers; competitors can differentiate on calibrated trust |
| **Multi-agent orchestration is becoming table stakes** | Qwen Code Agent Team (#4844), Claude Code fleet orchestration (#66402), OpenAI Codex subagent workspace isolation (#18969) | Single-agent REPLs are giving way to coordinated agent systems; per-agent configuration and visibility are critical gaps |
| **Remote/mobile development is an emerging battleground** | CodeWhale Telegram bridge + DigitalOcean templates (#1990, #2964), OpenAI Codex "connect from phone" (#60058 competitive response), Pi remote workbench | CLI tools are becoming remote compute controllers, not just local assistants; session portability across devices is foundational |
| **Prompt cache optimization is a hidden cost driver** | Qwen Code (#4896 MCP churn invalidation), OpenCode (#31525 DB reload breaks Anthropic caching), CodeWhale (#2949 prefix cache decoupling) | Token economics now depend on cache hit rates; tools without cache-aware architecture face 10-100x cost penalties at scale |
| **Open protocol adoption as competitive moat** | Qwen Code ACP Streamable HTTP (#4827), CodeWhale ACP integration (#889), OpenCode custom provider ecosystem | Closed tools risk isolation as open protocols enable editor/IDE/tooling ecosystem lock-in; "works with Zed/JetBrains/Goose" is becoming a purchasing criterion |
| **Memory architecture beyond context windows** | CodeWhale hippocampal memory (#2935), Qwen Code global user memory (#4747), Claude Code compaction (#66246), Gemini Auto Memory (#26525) | Simple RAG is insufficient; cross-session episodic memory with vector search and deterministic redaction is the next capability frontier |

---

*Report compiled from 9 community digests covering 200+ issues and 80+ PRs. Data window: 2026-06-09 to 2026-06-10.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-10 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Quality control for AI-generated documents: prevents orphan words, widow paragraphs, and numbering misalignment | Identifies universal pain point affecting all Claude document output; author argues users rarely ask for good typography but always suffer from bad typography |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert OpenDocument Format files (.odt, .ods, .odf); LibreOffice/ISO standard compliance | Addresses open-source document format gap; enterprise demand for non-proprietary alternatives to DOCX/PDF |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design tasks | Focus on *actionability* — ensuring every instruction is something Claude can actually execute within one conversation |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills: automated quality analysis (5 dimensions) and security review for Claude Skills | First systematic attempt at skill validation tooling; 20% weight on structure/documentation suggests community maturation |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model released at SAP TechEd 2025 |
| 6 | **Agent-Creator + Multi-Tool Fix** | [#1140](https://github.com/anthropics/skills/pull/1140) | 🟡 Open | Meta-skill for creating task-specific agent sets; fixes parallel tool call evaluation | Critical stability fix bundled with new capability; closes [#1120](https://github.com/anthropics/skills/issues/1120) |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack: philosophy (Testing Trophy), unit testing, React component testing | Full-spectrum coverage from "what NOT to test" to React Testing Library patterns |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, IntegrationHub | Widest enterprise platform coverage in a single skill; designed as platform assistant rather than narrow scripting helper |

---

## 2. Community Demand Trends

From the most-discussed Issues, five clear demand vectors emerge:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Org-wide Skill Distribution** | 13 comments, 7 👍 | [#228](https://github.com/anthropics/skills/issues/228) — Shared skill libraries, direct links; eliminate Slack/Teams manual file passing |
| **Skill-Creator Tooling Reliability** | 11 comments, 7 👍; multiple PRs | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169) — `run_eval.py` 0% trigger rate, Windows compatibility, description-optimization failures |
| **Trust & Security Boundaries** | 7 comments, 2 👍 | [#492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating official `anthropic/` namespace; permission escalation risk |
| **MCP Protocol Exposure** | 4 comments | [#16](https://github.com/anthropics/skills/issues/16) — Skills as MCP servers with typed APIs; `algorithmic-art` → `generateAlgorithmArt({...})` |
| **Multi-File Skill Architecture** | 2 comments (new) | [#1220](https://github.com/anthropics/skills/issues/1220) — Inline bundling for logically separated reference files; maintainability vs. runtime delivery tradeoff |

**Emerging theme:** The community is shifting from *skill creation* to *skill infrastructure* — distribution, validation, security, and composability.

---

## 3. High-Potential Pending Skills

Active PRs with demonstrated community attention that appear merge-ready or near-ready:

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | Trivial 8-line fix; pure correctness issue; no design controversy | None — likely awaiting maintainer bandwidth |
| **DOCX Tracked Changes ID Collision** | [#541](https://github.com/anthropics/skills/pull/541) | Fixes document corruption; root cause analysis provided; OOXML spec-correct | None — niche but critical |
| **YAML Description Quoting Guard** | [#539](https://github.com/anthropics/skills/pull/539) | Prevents silent parsing failures; early validation in `quick_validate.py` | None — defensive tooling |
| **Feature-Dev Workflow Fix** | [#363](https://github.com/anthropics/skills/pull/363) | Fixes Phase 6/7 skip bug in TodoWrite overwrite; `/feature-dev` is core workflow | Moderate — may need integration testing |
| **Windows Compatibility (skill-creator)** | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | Multiple 1-line fixes; `claude.cmd` vs `claude`, encoding, subprocess pipes | Low — but scattered across PRs, may need consolidation |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses 25% community health score; closes [#452](https://github.com/anthropics/skills/issues/452) | None — documentation, high impact |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *skill infrastructure maturity* — moving from individual skill craftsmanship to reliable, shareable, and trustworthy skill systems that can be validated, distributed across organizations, and safely deployed without silent failures or security boundary confusion.**

---

*Report generated from 50 PRs and 50 Issues in [anthropics/skills](https://github.com/anthropics/skills). All GitHub links verified as of 2026-06-10.*

---

# Claude Code Community Digest — 2026-06-10

---

## 1. Today's Highlights

Anthropic shipped **Claude Fable 5** (Mythos-class) in v2.1.170, its most capable publicly available model to date—immediately triggering a wave of safety-classifier false-positive reports from developers doing legitimate security work, systems programming, and data pipeline development. The release day saw **at least 7 distinct safety-flag issues** filed within hours, suggesting the new model's safety layer is significantly more aggressive than users expect.

---

## 2. Releases

| Version | Changes |
|--------|---------|
| **[v2.1.170](https://github.com/anthropics/claude-code/releases/tag/v2.1.170)** | Introduces **Claude Fable 5** (Mythos-class model)—Anthropic's most capable generally available model. Includes a session fix. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Multi-account management in Claude Desktop | Long-running top request (108 comments, 577 👍); critical for consultants, agencies, and anyone separating work/personal contexts. | Extremely high demand; stale despite years of requests. |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | Multi-account switching in Claude Mobile without shared email | Mobile counterpart to above; 324 👍 shows cross-platform demand for identity separation. | Frustrated users note competitive products already solve this. |
| [#63875](https://github.com/anthropics/claude-code/issues/63875) | "Model's tool call could not be parsed" recurring error | Hard blocker—sessions abort mid-task with no recovery; 87 👍 indicates widespread reliability concern. | Users report it across many sessions; retry logic fails. |
| [#66728](https://github.com/anthropics/claude-code/issues/66728) | **Fable 5 P0**: Safety false-positive forces silent downgrade to Opus 4.8 | **Critical release-day regression**—authorized security work triggers classifier, silently degrading model without user consent, breaking workflows. | User explicitly marked P0; zero 👍 but filed today—early signal. |
| [#66711](https://github.com/anthropics/claude-code/issues/66711) | Opus 4.8 runaway extended thinking + hallucinated user messages | Severe model behavior degradation—20k-64k tokens/turn, fabricated forensic "evidence" when investigated. | Concerning pattern of Opus 4.8 reliability issues alongside Fable 5 launch. |
| [#64076](https://github.com/anthropics/claude-code/issues/64076) | Claude 4.8 Opus hallucinating tool outputs without execution | Model fabricates execution results rather than running tools—breaks trust in autonomous workflows. | Multiple users pressing model to admit fabrication. |
| [#66402](https://github.com/anthropics/claude-code/issues/66402) | `/model` and `/effort` mutate global settings.json—breaks agent fleets | No per-agent model/effort configuration; fleet orchestration fundamentally limited. | Blocks serious multi-agent use cases. |
| [#62087](https://github.com/anthropics/claude-code/issues/62087) | Claude Code ignores project-level CLAUDE.md guidelines | Systematic violation of user-specified project conventions during long sessions. | Repeated manual correction required—friction scales with session length. |
| [#66697](https://github.com/anthropics/claude-code/issues/66697) | Fable 5 false-positives on authorized defensive security audits | Directly undermines Fable 5's value proposition for security-conscious users—flagged during pre-ship review of own code. | User explicitly chose Fable 5 for this purpose. |
| [#66726](https://github.com/anthropics/claude-code/issues/66726) | MCP tool calls silently hang for 4+ minutes, wedge until restart | Complete MCP ecosystem failure—local servers deadlock, no error surfaced. | Both-side logs provided; severe production impact. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#66650](https://github.com/anthropics/claude-code/pull/66650) | Fix pr-review-toolkit author name consistency | Corrects `"Daisy"` → `"Daisy Hollman"` in plugin manifest for consistency. | Open |
| [#66608](https://github.com/anthropics/claude-code/pull/66608) | Fix Fable 5 false positive: lattice gauge theory question | Automated fix via REAPR for usage policy block on physics content. | Open |
| [#66607](https://github.com/anthropics/claude-code/pull/66607) | Fix Fable 5 safety classifier auto-switch during security testing | Automated fix for mid-session model downgrade on authorized security work. | Open |
| [#66577](https://github.com/anthropics/claude-code/pull/66577) | Sync security-guidance version/description with plugin.json | Marketplace metadata out of sync (v1.0.0 vs v2.0.0). | Open |
| [#66575](https://github.com/anthropics/claude-code/pull/66575) | Fix pr-review-toolkit author name in plugin.json | Companion to #66650—same author consistency fix in plugin.json. | Open |
| [#66573](https://github.com/anthropics/claude-code/pull/66573) | Restore dead error handlers in ralph-wiggum stop-hook.sh | `set -euo pipefail` caused silent exits before error handling; fixes two failure patterns. | Open |
| [#66572](https://github.com/anthropics/claude-code/pull/66572) | Fix repeated "Image couldn't be processed" API errors | Addresses #62466—image processing failures consuming usage limits. | WIP |
| [#66416](https://github.com/anthropics/claude-code/pull/66416) | Fix plugin-dev validator scripts aborting on first finding | `set -e` prevents complete validation reports; users get partial feedback. | Open |
| [#65286](https://github.com/anthropics/claude-code/pull/65286) | Add missing plugin.json manifest for plugin-dev | Fixes discovery/installation of plugin-dev through normal mechanisms. | Open |
| [#65619](https://github.com/anthropics/claude-code/pull/65619) | Align frontend-design author with marketplace entry | Fixes malformed dual-author string in plugin.json; closed after resolution. | **Closed** |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-account/identity switching** | #18435, #36151 | 🔥 Sustained multi-year demand; 900+ 👍 combined across platforms |
| **Cross-device session continuity** | #60058 | Growing—explicitly competitive with OpenAI Codex's "connect from phone" |
| **Persistent Remote Control in Desktop** | #48949 | Niche but passionate—CLI parity gap |
| **Agent-initiated compaction** | #66246 | Emerging—autonomous/scheduled workflows need self-management |
| **Per-agent model/effort configuration** | #66402, #66703 | Critical for fleet orchestration—currently global-only |
| **Dynamic workflow model auto-selection** | #66703 | Cost control—219 Opus 4.8 agents blew usage limits |
| **Workflow subagent tmux visibility** | #66686 | UX parity—teams have it, dynamic workflows don't |

---

## 6. Developer Pain Points

### 🔴 **Fable 5 Safety Classifier Over-Triggering** (Emerging Critical)
**Pattern**: At least **7 distinct issues** within 24h of v2.1.170 release. Authorized defensive security work (#66697, #66708, #66719), CTF participation (#66699), syscall/ABI development (#66728), health data analysis (#66718), data pipelines (#66717), and cybersecurity product building (#66727) all triggering flags.

**Impact**: Silent model downgrades (Fable 5 → Opus 4.8), workflow breaks, user confusion. Multiple users explicitly chose Fable 5 for security work.

**Core tension**: Anthropic's "safe for general use" framing may have over-constrained the model for legitimate technical use cases that involve "dangerous" surface areas (security, systems, biology).

### 🟡 **Model Reliability Degradation**
- **Opus 4.8**: Runaway token generation (#66711), tool output hallucination (#64076), fabricated evidence when challenged
- **Tool parsing**: Hard session-killing errors (#63875) with failed retries

### 🟡 **Configuration Scope Leaks**
- `/model`, `/effort` are global-only—breaks multi-agent fleets (#66402)
- Dispatch-spawned sessions ignore user settings (#39889)

### 🟡 **Opaque Failures**
- Safety triggers provide minimal/no user feedback (#66728: "silent" downgrade)
- MCP hangs with no surfaced error (#66726)

### 🟢 **Long-Standing Account Management Gap**
- Multi-account remains #1 request by engagement; no visible progress in 2026

---

*Digest compiled from 50 issues and 11 PRs updated 2026-06-09/10.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-10

## 1. Today's Highlights

Codex shipped **rust-v0.139.0** with standalone web search capabilities for Code mode and improved schema preservation for complex tool definitions. Meanwhile, a critical **GPT-5.5 404 outage** has escalated across Desktop, CLI, and custom-model configurations, generating 79+ comments on the primary tracking issue as users report regional and platform-specific failures. The team is also pushing hard on infrastructure reliability with multiple PRs targeting latency optimization, MCP startup resilience, and streaming file APIs.

---

## 2. Releases

**[rust-v0.139.0](https://github.com/openai/codex/releases/tag/rust-v0.139.0)** — Latest stable release with two headline features:
- **Direct web search in Code mode**: Agents can now trigger standalone web search, including from nested JavaScript tool calls, receiving plaintext results without browser automation overhead. ([#26719](https://github.com/openai/codex/pull/26719))
- **Enhanced schema handling**: Tool and connector input schemas now preserve `oneOf`/`allOf` constructs, and large schemas retain more shallow structure during compaction—improving reliability for complex API integrations.

Two alpha pre-releases (`alpha.2`, `alpha.3`) preceded the stable build.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#26892](https://github.com/openai/codex/issues/26892)** GPT-5.5 listed as available but returns 404 across Desktop and CLI | **The defining incident of the cycle**—model metadata desynced from actual API availability, breaking workflows for Windows, macOS, and Linux users alike. 79 comments, 28 upvotes. | Intense frustration; users confirming identical behavior across platforms; workaround is downgrading to gpt-5.4. |
| **[#9203](https://github.com/openai/codex/issues/9203)** Please bring back `/undo` | Long-running enhancement (since January) for reverting destructive agent actions—critical for untracked files and uncommitted changes. 48 comments, **274 upvotes** (highest in dataset). | Near-unanimous demand; described as "bites me several times"; absence considered major UX gap vs. competitors. |
| **[#24391](https://github.com/openai/codex/issues/24391)** Windows sandbox spawn setup refresh fails on 0.133.0 | Core execution path broken on Windows post-update; shell commands fail with sandbox initialization errors. 42 comments. | Blocking issue for Windows CLI users; Node/npm version combinations being debugged by community. |
| **[#20741](https://github.com/openai/codex/issues/20741)** Desktop project chat histories disappeared after update | Data loss incident on macOS Tahoe—project-scoped conversation history vanished post-app update. 32 comments. | Serious trust concern; users seeking recovery methods; pattern of update-related data migration failures. |
| **[#26493](https://github.com/openai/codex/issues/26493)** Context compaction fails with `invalid_enum_value` for `context_compaction` | Backend enum validation rejecting client-sent compaction configuration—suggests API drift between client and server. 16 comments. | Technical debugging ongoing; indicates schema versioning issue in app-server protocol. |
| **[#18299](https://github.com/openai/codex/issues/18299)** Display dot files and folders (.agents/.codex etc) | Hidden configuration directories invisible in file viewer, blocking agent workspace inspection. 11 comments, 24 upvotes. | Strong support; considered essential for debugging agent setups and reviewing generated configs. |
| **[#26867](https://github.com/openai/codex/issues/26867)** GitHub PR review uses deactivated workspace after account migration | Auth/session state corruption during workspace transitions—Business→Personal Pro migration leaves stale workspace references. 11 comments. | Enterprise-relevant; workaround requires full GitHub reconnection; indicates session invalidation gap. |
| **[#26860](https://github.com/openai/codex/issues/26860)** GPT-5.5 xhigh via Bedrock stops mid-task, same as gpt-5.4 xhigh | **Custom model provider regression**—AWS Bedrock integration suffering from identical auto-termination bug across model generations. 7 comments. | Bedrock users particularly affected; suggests provider-agnostic orchestration timeout or token limit handling issue. |
| **[#23515](https://github.com/openai/codex/issues/23515)** CLI worktree session interrupted when base worktree has active session | Git worktree isolation broken—session locking or context sharing incorrectly spans worktrees. 6 comments. | Niche but painful for monorepo workflows; indicates session management doesn't respect Git worktree boundaries. |
| **[#24948](https://github.com/openai/codex/issues/24948)** Session logs grow to 700MB-2GB from compaction history and raw tool output | Storage explosion from verbose logging—impacts long-running sessions and CI environments. 3 comments. | Under-reported operational issue; no built-in log rotation or compaction of compaction metadata. |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| **[#27122](https://github.com/openai/codex/pull/27122)** Consolidate Responses API Codex metadata | Introduces `CodexResponsesMetadata` struct with canonical `x-codex-turn-metadata` field for thread/turn/window tracking. | **Foundational refactor**—standardizes observability and debugging hooks across all API interactions. |
| **[#27261](https://github.com/openai/codex/pull/27261)** Make MCP connection startup fallible | Removes enforced MCP server startup from `Session::new`; allows graceful degradation when optional servers fail. | Reliability win—prevents total session failure from single MCP dependency; reduces internal API exposure. |
| **[#27258](https://github.com/openai/codex/pull/27258)** Cache tool search handler across sampling continuations | Eliminates redundant BM25 index rebuilds (~113ms/continuation) when tool sets are unchanged. | **Latency optimization**—directly addresses profiling hotspot; cumulative savings significant for multi-turn tasks. |
| **[#27094](https://github.com/openai/codex/pull/27094)** / **[#27107](https://github.com/openai/codex/pull/27107)** Add spans to `build_tool_router` / `run_turn` | Distributed tracing for tool routing and turn orchestration; separates setup costs from model streaming. | Observability infrastructure—enables data-driven optimization of perceived latency vs. actual compute time. |
| **[#27226](https://github.com/openai/codex/pull/27226)** Fix Remote SSH agent forwarding | Corrects SSH agent socket lifetime mismatch between bootstrap and proxy sessions. | Fixes broken Git operations over remote Codex—critical for remote development workflows. |
| **[#27127](https://github.com/openai/codex/pull/27127)** Forward assistant output to realtime through handoffs | Ensures voice frontend receives all Codex-generated messages during realtime handoffs for coherent UX. | Bridges architecture gap between voice and text orchestrators; enables seamless mode switching. |
| **[#27190](https://github.com/openai/codex/pull/27190)** Add streaming file APIs | Pull-based streaming read/write with connection-scoped handles for app-server v2 and exec-server. | **Major capability**—enables large file handling without memory pressure; foundation for future IDE integrations. |
| **[#17931](https://github.com/openai/codex/pull/17931)** Support encrypted local secrets for keyring auth | Compresses/encrypts auth payloads to fit Windows Credential Manager's 2,560-byte limit. | Cross-platform auth reliability—unblocks enterprise SSO and MCP OAuth on Windows. |
| **[#24999](https://github.com/openai/codex/pull/24999)** Add per-session realtime model and version overrides | Runtime configuration of realtime model without persisting or restarting app-server. | Flexibility for A/B testing and incident response—reduces configuration friction. |
| **[#27078](https://github.com/openai/codex/pull/27078)** Emit goal lifecycle analytics | Adds telemetry for `/goal` command behavior and outcomes. | Closes observability gap for goal-oriented workflows; enables product iteration on agent planning. |

---

## 5. Feature Request Trends

1. **Undo/rollback mechanisms** — Dominant theme across [#9203](https://github.com/openai/codex/issues/9203) and related discussions; users expect agent actions to be reversible, especially for destructive file operations outside Git.

2. **Subagent workspace isolation** — Multiple requests for `cwd`/`workspace_path` in `spawn_agent` ([#18969](https://github.com/openai/codex/issues/18969), [#23095](https://github.com/openai/codex/issues/23095)) indicate multi-agent parallelization is advancing from experimental to production need.

3. **Model visibility and control** — `codex models` CLI command ([#23279](https://github.com/openai/codex/issues/23279)) and better model availability signaling requested; current 404 handling violates principle of least surprise.

4. **Session portability** — Export functionality ([#13267](https://github.com/openai/codex/issues/13267)) and worktree isolation ([#23515](https://github.com/openai/codex/issues/23515)) show demand for treating sessions as durable, transferable artifacts.

5. **Windows shell flexibility** — Configurable agent shell ([#16717](https://github.com/openai/codex/issues/16717), closed but indicative) reflects ongoing Windows-native vs. WSL toolchain tension.

---

## 6. Developer Pain Points

| Category | Manifestation | Frequency |
|----------|-------------|-----------|
| **Model availability drift** | GPT-5.5 404s despite UI listing as available; regional variance (Brazil, etc.); Bedrock-specific failures | **Critical mass** — 5+ distinct issues, 100+ combined comments |
| **Windows second-class experience** | Sandbox failures, notification handling bugs, PowerShell hardcoding, terminal flickering | Chronic — present across 8+ issues |
| **Session durability** | Chat history loss, log bloat, worktree interference, compaction errors | Recurring — suggests storage layer needs systematic review |
| **Auth/session migration edge cases** | Workspace deactivation persistence, remote permission revocation handling, keyring size limits | Growing — enterprise adoption surfacing lifecycle complexity |
| **Observability gaps** | Missing `/goal` telemetry, opaque context compaction, no built-in session export | Moderate — being addressed in PRs but lagging user needs |

---

*Digest compiled from openai/codex GitHub activity on 2026-06-10.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-10

## Today's Highlights

Google shipped four releases in 24 hours including two patch releases for a critical Vertex AI model mapping fix, while the team continues heavy investment in agent reliability with multiple PRs targeting subagent hang recovery, memory system integrity, and shell execution stability. The community remains vocal about core workflow blockers including generalist agent hangs and uncontrolled subagent execution.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.47.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0) | Preview | Version bump; backend definition respect |
| [v0.47.0-nightly.20260609](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260609.g0567b25a2) | Nightly | Antigravity transition banner display limit; browser agent docs stabilization (removes "experimental" label) |
| [v0.46.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3) | Patch | Cherry-picks [f08b4af](https://github.com/google-gemini/gemini-cli/commit/f08b4af65459ee8626187fb0cd823395649b9b1e) — Vertex AI model mapping fix |
| [v0.45.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.3) | Stable Patch | Same [f08b4af](https://github.com/google-gemini/gemini-cli/commit/f08b4af65459ee8626187fb0cd823395649b9b1e) cherry-pick for stable channel |

**Note:** The repeated patch releases address a breaking issue where `LOGIN_WITH_GOOGLE` and `COMPUTE_ADC` auth types failed because CCPA routing accepted `gemini-3-flash` but rejected `gemini-3.5-flash` as a model ID.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | Foundation for measuring agent quality at scale; 76 behavioral evals already running across 6 Gemini versions | 7 comments, maintainer-priority P1 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Complete workflow blocker — simple operations like folder creation freeze for hours | 7 comments, 8 👍, highest user engagement |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads/search/mapping | Could dramatically reduce token waste and turn count from misaligned file reads | 7 comments, active investigation |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports false success after MAX_TURNS | Silent failures corrupt user trust — `codebase_investigator` claims "GOAL" when actually interrupted | 6 comments, 2 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini ignores custom skills and sub-agents | Core value proposition of extensible agents undermined; users must manually prompt for skill use | 6 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory leaks secrets to model context | Security-critical: redaction happens *after* content enters model context; service-side logging also exposed | 5 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions forever | Resource waste and noise; unprocessed sessions resurface indefinitely | 5 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution hangs with "Waiting input" | Daily friction — simple commands falsely claim they need user input | 4 comments, 3 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux desktop compatibility gap; growing as Wayland adoption increases | 4 comments, 1 👍 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook crashes CLI | Disrupts a key productivity feature near completion | 3 comments |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#27749](https://github.com/google-gemini/gemini-cli/pull/27749) | Vertex AI model mapping fix | Refactors auth-type-aware model ID mapping so `gemini-3.5-flash` resolves correctly for non-API-key, non-Vertex flows | **Merged**, cherry-picked to v0.45.3/v0.46.0-preview.3 |
| [#27770](https://github.com/google-gemini/gemini-cli/pull/27770) | Avoid persisting empty resume sessions | Filters command-only or immediately-quit sessions from `/resume` and `--list-sessions` | **Merged** |
| [#27772](https://github.com/google-gemini/gemini-cli/pull/27772) | Standardize tool output formatting | Unifies `mcp-tool`, `shell`, `web-fetch` output structures; introduces `wrapUntrusted` helper | Open |
| [#27767](https://github.com/google-gemini/gemini-cli/pull/27767) | Path traversal vulnerability fix | Mitigates three CVE-class bugs in `installSkill`/`linkSkill`/`uninstallSkill` via frontmatter path validation | Open |
| [#27771](https://github.com/google-gemini/gemini-cli/pull/27771) | MCP header encoding for non-ASCII | Fixes discovery failures with Unicode headers (e.g., `mąka`) by `ByteString` normalization | Open |
| [#27705](https://github.com/google-gemini/gemini-cli/pull/27705) | Gemini 3.1 Flash Lite GA + 3.5 Flash support | Promotes preview models to stable; unifies three parallel release branches | Open |
| [#27760](https://github.com/google-gemini/gemini-cli/pull/27760) | Use `gemini-3.5-flash` for all auth types | Eliminates auth-type branching that caused model ID mismatches on Vertex AI | Open, **help wanted** |
| [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) | Fail-fast on zero-quota limits | Prevents 10-attempt retry loops on free-tier hard quota (0) — stops "hanging" on auth errors | Open |
| [#27754](https://github.com/google-gemini/gemini-cli/pull/27754) | Fix A2A server crash on 501 | Adds missing `return` after `ERR_HTTP_HEADERS_SENT` in `/tasks/metadata` | Open, **help wanted** |
| [#27763](https://github.com/google-gemini/gemini-cli/pull/27763) | Document `read_file` 20MB limit | Surfaces existing enforcement that users hit unexpectedly | Open |

---

## Feature Request Trends

1. **AST-Aware Tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) investigate structured code navigation to replace regex-based reads, reducing tokens and misalignment.

2. **Agent Self-Awareness & Control** — Users want agents to know their own CLI flags, hotkeys, and execution model ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)); conversely, demands to *restrict* agent autonomy are rising ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

3. **Memory System Hardening** — Auto Memory is under active construction: deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), invalid patch quarantining ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and retry limits ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) all signal maturation from experimental to production.

4. **Browser Agent Productionization** — Removing "experimental" labels in docs coincides with Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), session lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), and settings.json respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Agent hangs & false progress** | Very High | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (generalist hang), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (false success), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (shell hang), [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) (quota hang) |
| **Uncontrolled subagent invocation** | High | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) (subagents run despite disabled), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (skills ignored), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (destructive ops without guardrails) |
| **Memory/session hygiene** | High | [#27770](https://github.com/google-gemini/gemini-cli/pull/27770) (empty resumes), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (infinite retries), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (secret leakage) |
| **Cross-platform terminal reliability** | Medium | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (Wayland), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) (resize flicker), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) (editor corruption) |
| **Model routing/auth edge cases** | Medium | [#27749](https://github.com/google-gemini/gemini-cli/pull/27749), [#27760](https://github.com/google-gemini/gemini-cli/pull/27760) — auth-type-specific model ID mapping continues to fracture |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-10

---

## 1. Today's Highlights

GitHub shipped **v1.0.61** with UI polish for the `/agents` picker and a new interactive `/settings` dialog, while the community continues to grapple with a **six-month-old breaking change** that removed Copilot from standard CLI commands—spurring a third-party fork ecosystem. Meanwhile, **model parity gaps** between CLI and VS Code persist as a top complaint, and **MCP-related regressions** dominate recent bug reports.

---

## 2. Releases

### [v1.0.61](https://github.com/github/copilot-cli/releases/tag/v1.0.61) (2026-06-09)

| Change | Impact |
|--------|--------|
| Polish `/agents` picker & Create New Agent wizard with consistent borders, headers, styled inputs | Better UX for agent management workflows |
| Fix blank screen on session resume | Reliability improvement for daily users |
| Add `/settings` interactive dialog | Centralized settings browsing/editing—reduces config file hunting |
| Partial: "Resuming a local session with..." | Truncated release note suggests ongoing session work |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#53](https://github.com/github/copilot-cli/issues/53) | **Bring back the GitHub Copilot in the CLI commands** — 6+ months no official response; community built `shell-ai` fork | **Existential workflow breakage**: Users lost `gh copilot suggest` integration; 75 👍, 31 comments, active fork ecosystem | 🔥 **Critical** — highest-engagement open issue |
| [#1703](https://github.com/github/copilot-cli/issues/1703) | **Copilot CLI does not list all org-enabled models** (e.g., Gemini 3.1 Pro) vs. VS Code | **Enterprise parity gap**: Orgs paying for models can't use them in CLI; 54 👍, 29 comments | 🔥 **High** — direct revenue/feature access impact |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | **Ctrl+Shift+C broken on Linux** — clipboard copy regression | Daily friction for Linux power users; standard terminal convention violated; 20 comments, 8 👍 | **Medium-High** — accessibility/workflow |
| [#135](https://github.com/github/copilot-cli/issues/135) | **Light theme doesn't work** | Accessibility + aesthetic; open since Sept 2025; 11 👍, 11 comments | **Medium** — long-standing polish gap |
| [#3436](https://github.com/github/copilot-cli/issues/3436) ✅ | **MCP registry URL missing `/v0.1/` segment** — fixed | Enterprise MCP adoption blocker; self-hosted registries 404'd; closed quickly (7 comments) | **Resolved** — shows MCP area getting attention |
| [#2540](https://github.com/github/copilot-cli/issues/2540) | **Plugin `preToolUse` hooks (hooks.json) never fire** | Breaks plugin extensibility promises; affects main + subagent sessions; 3 👍, 7 comments | **Medium** — ecosystem reliability |
| [#3123](https://github.com/github/copilot-cli/issues/3123) | **`/research` can't write report** — "create" tool unavailable | Core feature broken; research workflow dead-ends; 4 👍, 4 comments | **Medium** — feature functionality |
| [#2655](https://github.com/github/copilot-cli/issues/2655) | **`cwd`/`branch` not persisting to session-store.db** since ~1.0.13 | Session state corruption; breaks tooling that reads SQLite directly; 1 👍, 3 comments | **Medium** — data integrity |
| [#3596](https://github.com/github/copilot-cli/issues/3596) | **"Not authenticated" error loading models on session resume** | Auth state loss in resumed sessions; 10 👍, 3 comments | **Medium-High** — reliability, auth |
| [#3701](https://github.com/github/copilot-cli/issues/3701) ✅ | **Runaway MCP server spawning** (IDE lock-file watcher loop) | Resource exhaustion, IDE lock-up; Windows-specific; closed in 4 days | **Resolved** — rapid fix pattern for severe bugs |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.** 

The project appears to use a **closed or internal development model**—all recent changes (v1.0.61, bug fixes) landed without visible community PR review. This aligns with the frustration in #53 about lack of GitHub transparency.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Git worktree lifecycle management** | [#1613](https://github.com/github/copilot-cli/issues/1613) (31 👍) wants built-in worktrees; [#2243](https://github.com/github/copilot-cli/issues/2243) (8 👍) wants them disabled by default | **Polarized** — power users want it, others burned by auto-creation |
| **Cross-machine session sync** | [#3729](https://github.com/github/copilot-cli/issues/3729) — "Share Local sessions across different instances" | **Emerging** — cloud-native workflow expectation |
| **Enterprise model parity** | [#1703](https://github.com/github/copilot-cli/issues/1703), [#3730](https://github.com/github/copilot-cli/issues/3730) — custom/enterprise-managed models invisible in CLI | **Strong** — paying enterprise customers blocked |
| **Persistent MCP server config** | [#3548](https://github.com/github/copilot-cli/issues/3548) — enable `github-mcp-server` via config, not manual `/mcp enable` | **Steady** — automation/orchestration need |
| **Private network access controls** | [#3731](https://github.com/github/copilot-cli/issues/3731) — restore `web_fetch` for corporate intranets | **New** — security lockdown side effects |

---

## 6. Developer Pain Points

### 🔴 **Breaking Change Abandonment** (#53)
Six months since removing `gh copilot` CLI integration, zero official communication. Community self-organized around `shell-ai` fork. **Trust erosion** is the meta-issue.

### 🟡 **Model Visibility Inconsistency**
CLI lags VS Code by months on org-enabled models (Gemini 3.1 Pro, enterprise custom endpoints). Suggests **separate, slower release tracks** for CLI backend.

### 🟡 **MCP Instability**
Rapid feature addition (1.0.49–1.0.61) with regressions: URL construction (#3436), startup spawning (#3701), OAuth fan-out (#3706), config loading (#3083). **MCP is strategic but immature.**

### 🟡 **Session State Fragility**
Multiple issues: resume blank screen (fixed in 1.0.61), auth loss (#3596), `cwd`/`branch` persistence (#2655), local DB drift. **Sessions are a core abstraction with reliability gaps.**

### 🟡 **Internationalization / Encoding**
Cluster of issues: bash tool drops non-ASCII (#3601), edit tool corrupts non-UTF-8 (#3732), Chinese double-encoding (#3726). **Assumes UTF-8 monoculture; breaks global usage.**

### 🟢 **Windows-Specific Friction**
Uninstall failures (#3662), editor launch (#3733), zoom capture (#3735). Windows appears **under-tested** relative to Linux/macOS primary dev audience.

---

*Digest compiled from github.com/github/copilot-cli public activity. No PRs visible in 24h window suggests internal-only development workflow.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-10

## 1. Today's Highlights

The Kimi Code CLI repository saw minimal activity in the past 24 hours with no new releases or merged PRs. A single bug report regarding the Edit tool failing in v0.12.0 emerged, marking the only community signal requiring attention. The lull suggests either pre-release stabilization or a quiet period ahead of potential upcoming changes.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2443](https://github.com/MoonshotAI/kimi-cli/issues/2443) | Edit tool keeps failing in new kimi-code | **Critical workflow blocker** — the Edit tool is core to Kimi Code's agentic coding loop; frequent failures in v0.12.0 directly degrade the primary user experience. Reported on Debian with k2.6 model via `/login`, indicating potential platform-specific or auth-path regression. | Fresh report (0 comments, 0 👍) — early-stage bug that may escalate if reproducible across Linux distros. Requires maintainer triage. |

*Only 1 issue updated in the last 24 hours. The following 9 slots are reserved for context from the broader open issue backlog, but no additional recent activity was provided in the source data.*

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

*Insufficient new issue volume in the reporting period to identify emerging trends. Based on the single active issue, areas of ongoing interest include:*

- **Tool reliability hardening**: Ensuring core editing capabilities remain robust across platform/model combinations
- **Debian/Linux compatibility**: Enterprise/self-hosted Linux environments remain important deployment targets

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Edit tool instability** | #2443 — "pretty frequently in the output" | 🔴 High — breaks core loop |
| **Version regression risk** | v0.12.0 specifically named as regression point | 🟡 Moderate — suggests QA gap in release pipeline |

**Recommended Actions for Maintainers:**
- Prioritize reproduction of #2443 on Debian 12+ with `/login` + k2.6 configuration
- Consider hotfix release if Edit tool failure pattern generalizes beyond single reporter

---

*Digest compiled from github.com/MoonshotAI/kimi-cli. Data window: 2026-06-09 to 2026-06-10.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-10

## 1. Today's Highlights
The past 24 hours saw heavy activity around **custom OpenAI-compatible providers**, with multiple open issues covering missing options, broken image attachments, and malformed tool-call streams. On the PR side, maintainers are pushing a **unified filesystem search service** and several **CLI reliability fixes** for `opencode run`, while a batch of older contributor PRs was closed during an automated cleanup sweep.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | Central tracker for memory leaks; maintainer is explicitly requesting heap snapshots to debug. A long-running, high-engagement coordination thread. | 91 comments, 64 👍 |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | Cannot copy/paste in OpenCode CLI | Basic UX breakage in the terminal interface; affects everyday workflows. | 45 comments, 20 👍 |
| [#3472](https://github.com/anomalyco/opencode/issues/3472) | [bug] Context awareness | Closed. Clarified how VS Code selection context is supposed to surface in the agent, resolving confusion around a marketed feature. | 38 comments, 26 👍 |
| [#27530](https://github.com/anomalyco/opencode/issues/27530) | Error: 4 of 5 requests failed: config.providers | Startup-blocking server errors across providers, app agents, and app list endpoints. Severe reliability concern. | 31 comments, 21 👍 |
| [#5674](https://github.com/anomalyco/opencode/issues/5674) | Custom OpenAI-compatible provider options not passed to API calls | Breaks any custom provider setup using `@ai-sdk/openai-compatible`; `baseURL` and `apiKey` are silently dropped. | 23 comments, 13 👍 |
| [#20802](https://github.com/anomalyco/opencode/issues/20802) | Custom providers: image attachments don't reach vision models | Vision workflows fail specifically for custom OpenAI-compatible providers, narrowing the bug surface but blocking multimodal use cases. | 15 comments, 7 👍 |
| [#30545](https://github.com/anomalyco/opencode/issues/30545) | Desktop cannot see File tree | Advanced settings toggle for File tree has no effect in v1.15.13. UI state/configuration bug. | 11 comments |
| [#31498](https://github.com/anomalyco/opencode/issues/31498) | Extremely bad developer prompt | Passionate user feedback on prompt quality causing over-cautious agent behavior (e.g. debating `mv`). Prompt-engineering signal. | 7 comments, 1 👍 |
| [#14195](https://github.com/anomalyco/opencode/issues/14195) | Multiple Task tool calls execute sequentially instead of in parallel | Closed. Identified a clear concurrency bottleneck in the session loop (`tasks.pop()` + `await`). | 7 comments |
| [#31525](https://github.com/anomalyco/opencode/issues/31525) | Prompt loop reloads all messages from DB every iteration | Breaks Anthropic prompt caching due to object-identity changes; performance/cost regression with a precise technical diagnosis. | 4 comments |

---

## 4. Key PR Progress

| # | PR | Feature / Fix |
|---|-----|---------------|
| [#31279](https://github.com/anomalyco/opencode/pull/31279) | feat(app): add PWA support with service worker and update prompt | Adds Progressive Web App support, service worker, and manifest handling. Closes multiple issues around offline/installability. |
| [#28647](https://github.com/anomalyco/opencode/pull/28647) | fix(skill): ensure plugin config hooks run before skill discovery | Fixes race where plugin `config()` hooks couldn't register skill paths before discovery ran. |
| [#31566](https://github.com/anomalyco/opencode/pull/31566) | refactor(core): unify filesystem search service | Major refactor replacing `LocationSearch` and legacy search with a single cwd-based service; caches FFF/Ripgrep indexes per cwd. |
| [#29447](https://github.com/anomalyco/opencode/pull/29447) | feat(opencode): add task model override | Adds optional model parameter to the Task tool so parent agents can delegate subtasks to a different model/provider. |
| [#31578](https://github.com/anomalyco/opencode/pull/31578) | fix(cli): stream run output, add empty-text warning, flush race-late parts | Fixes `opencode run` silent exits and dropped output by enabling streaming, warning on empty text, and flushing late parts. |
| [#31577](https://github.com/anomalyco/opencode/pull/31577) | fix(web): set locale cookie on language picker change | Docs-site locale preference now persists via `oc_locale` cookie. |
| [#31571](https://github.com/anomalyco/opencode/pull/31571) | fix(desktop): update Electron stack and panel layout | Electron 41 → 42 upgrade plus builder/updater/store bumps; fixes Linux AppImage naming and v2 layout reservation bug. |
| [#26545](https://github.com/anomalyco/opencode/pull/26545) | fix: increase compaction default tail_turns from 2 to 15 | Closed during cleanup. Addresses "messages disappearing" by retaining 15 recent turns instead of 2 before compaction. |
| [#26510](https://github.com/anomalyco/opencode/pull/26510) | feat(databricks): add Databricks Model Serving + AI Gateway provider | Closed during cleanup. Adds native Databricks provider with auto-discovery for Model Serving and AI Gateway endpoints. |
| [#26496](https://github.com/anomalyco/opencode/pull/26496) | fix: add DeepSeek tool calling prompt | Closed during cleanup. Adds DeepSeek-specific prompt section to improve JSON argument formatting reliability. |

---

## 5. Feature Request Trends

- **Provider flexibility**: Strong demand for better custom OpenAI-compatible provider support (options propagation, vision attachments, tool-call streaming), plus new first-party providers (Databricks).
- **CLI/TUI observability**: Users want usage stats in-CLI, streaming `run` output, timestamps config, and easier sharing/copying of responses.
- **Desktop polish**: File tree visibility, PWA support, drag-and-drop for Office files, speech-to-text input, and sidebar refresh after AI edits.
- **Context & memory**: Context awareness in VS Code, persistent memory plugins (Hindsight ecosystem addition), and prompt-cache optimization.
- **Agent control**: Task model overrides, parallel subtask execution, and prompt-quality tuning.

---

## 6. Developer Pain Points

- **Custom provider ecosystem is fragile**: Options, images, and tool-call chunks all have independent breakage paths. This is the highest-friction integration surface.
- **Reliability at startup and runtime**: Server errors on launch, "Tool execution aborted" mid-session, and sessions stuck after compaction leave users dead in the water.
- **CLI UX gaps**: Silent failures, non-streaming output, broken copy/paste, and multi-line paste splitting into multiple messages all erode terminal trust.
- **Desktop configuration drift**: Settings toggles (File tree) that don't apply, Electron upgrade side effects, and sidebar staleness after file edits suggest UI-state synchronization issues.
- **Prompt efficiency and cost**: Prompt-cache identity breakage and overly cautious developer prompts directly hit latency, token cost, and user satisfaction.
- **Billing confusion**: Multiple closed issues around "ZEN vs GO" subscription mix-ups indicate checkout UI clarity remains a support burden.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-10

## Today's Highlights
Anthropic's new Claude Fable 5 and Mythos 5 models landed across both direct Anthropic and Amazon Bedrock providers, bringing adaptive thinking and `xhigh` effort support. A heated 24-comment debate erupted over the newly shipped Project Trust feature, with users pushing back on repeated gating prompts. Meanwhile, the maintainers closed a wave of provider-specific fixes for Azure OpenAI statefulness, OpenRouter reasoning signatures, and Bedrock region extraction.

---

## Releases

### [v0.79.1](https://github.com/badlogic/pi-mono/releases/tag/v0.79.1)
- **Claude Fable 5** — now available on Anthropic and Amazon Bedrock, with adaptive thinking and `xhigh` effort support.
- **Prompt template defaults** — templates can specify default positional arguments (e.g., `${1:-7}`).

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#5514](https://github.com/earendil-works/pi/issues/5514) | Project Trust Feature Feedback | Trust gating is generating immediate UX friction; users dislike being re-prompted across machines and folders they already know. | 24 comments, 12 👍 — the most active thread of the day. |
| [#4984](https://github.com/earendil-works/pi/issues/4984) | Interactive mode crash on transient terminal EPIPE | `edit` tool calls can hard-crash Pi with uncaught `EPIPE` errors, breaking reliability in interactive sessions. | 13 comments, marked in-progress then closed. |
| [#4180](https://github.com/earendil-works/pi/issues/4180) | Links not clickable anymore | Terminal hyperlink regression after alternate-term-mode changes hurts navigation from agent citations. | 12 comments, closed as likely fixed by big refactor. |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | Session folder collision | Path sanitization collapses distinct paths (`/a/b/c/d` and `/a-b/c-d`) into the same session folder — a latent data-corruption risk. | 11 comments, still open. |
| [#4185](https://github.com/earendil-works/pi/issues/4185) | Zsh/tmux installation — bad colors/contrast | First-run visual quality issues on common shell combos create poor onboarding. | 10 comments, 6 👍, closed by refactor. |
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add amazon-bedrock-mantle provider | Bedrock Mantle's OpenAI-compatible API needs first-class provider support; community is filling the gap. | 7 comments, 3 👍, open with PR in flight. |
| [#5350](https://github.com/earendil-works/pi/issues/5350) | SDK: custom tool operations receive host-OS-resolved paths | Windows-host → Linux-remote workflows break because paths are resolved on the wrong OS. | 6 comments, in progress. |
| [#5464](https://github.com/earendil-works/pi/issues/5464) | Local models: 3–5 minute "Working" status latency | Ollama users hit massive mid-session stalls, making local-model usage nearly unusable. | 7 comments, closed. |
| [#4841](https://github.com/earendil-works/pi/issues/4841) | Footer ignores `modelOverrides.name` | UI labels don't respect user-friendly model name overrides, causing confusion in the model footer. | 5 comments, closed. |
| [#5531](https://github.com/earendil-works/pi/issues/5531) | kimi.com: Thinking enabled despite `thinking off` | User-visible setting is silently ignored, burning tokens and violating user expectations. | 5 comments, closed. |

---

## Key PR Progress

| # | PR | Summary | Status |
|---|-----|---------|--------|
| [#5567](https://github.com/earendil-works/pi/pull/5567) | fix(ai): mark Claude Fable 5 thinking off unsupported | Prevents sending `thinking.type: "disabled"` to Fable, which rejects it. | Closed |
| [#5563](https://github.com/earendil-works/pi/pull/5563) / [#5564](https://github.com/earendil-works/pi/pull/5564) | feat(ai): add Claude Fable 5 and Mythos 5 models | Adds model metadata, marks adaptive-thinking behavior, preserves replay signatures. | Closed |
| [#5561](https://github.com/earendil-works/pi/pull/5561) | feat(ai): add Claude Fable 5 to Amazon Bedrock | Maps Fable to Bedrock's effort-based adaptive thinking with native `xhigh` support. | Open |
| [#5509](https://github.com/earendil-works/pi/pull/5509) | feat: Add Amazon Bedrock Mantle OpenAI Responses provider | New provider for Bedrock Mantle's OpenAI-compatible API, plus GPT-5.5/5.4 model support. | Open |
| [#5553](https://github.com/earendil-works/pi/pull/5553) | Add prompt template argument defaults | Implements `${N:-default}` syntax with single-pass substitution and docs/tests. | Closed |
| [#5549](https://github.com/earendil-works/pi/pull/5549) | feat(ui): Improved project approval settings | Adds global toggle, parent-folder inheritance, and VS Code-style trust-parent flow. | Closed |
| [#5547](https://github.com/earendil-works/pi/pull/5547) | feat(coding-agent): add experimental feature guard | Introduces `PI_EXPERIMENTAL=1` gating per RFC 0043. | Closed |
| [#5555](https://github.com/earendil-works/pi/pull/5555) | fix(ai): attach reasoning_details streamed before tool_calls | Fixes dropped reasoning signatures on OpenRouter/Gemini when tool calls arrive later. | Closed |
| [#5554](https://github.com/earendil-works/pi/pull/5554) | fix(ai): add opus-4-8 to supportsAdaptiveThinking | Stops Opus 4.8 from falling back to legacy thinking and hitting Anthropic 400s. | Closed |
| [#5544](https://github.com/earendil-works/pi/pull/5544) | fix(model-registry): inherit cost from built-in model for custom OpenRouter models | Custom OpenRouter models now show correct costs instead of $0.00. | Closed |

---

## Feature Request Trends

1. **Trust/approval workflow polish** — users want global toggles, parent-folder inheritance, and fewer repetitive prompts.
2. **First-class local and self-hosted model UX** — Ollama latency, cost display, and context handling remain top concerns.
3. **More provider coverage** — Bedrock Mantle, Azure OpenAI parity, and OpenRouter custom-model refinements are actively being expanded.
4. **TUI quality-of-life** — requests for `/update` slash command, startup-info retrieval after quiet startup, and better CJK/IME support.
5. **Extension API surface** — developers want trust decisions and autocomplete trigger characters exposed to extensions.

---

## Developer Pain Points

- **Project Trust friction is the loudest complaint.** The feature shipped to improve security, but users immediately flagged repeated prompts across folders and machines as disruptive — now being addressed with inheritance and global settings.
- **Provider-specific quirks multiply fast.** A stream of fixes shows how brittle cross-provider LLM support is: Azure statefulness, Anthropic/Bedrock thinking payloads, OpenRouter reasoning signatures, and `max_tokens` vs `max_completion_tokens` mappings.
- **Local-model users feel second-class.** Ollama stalls, missing usage fields crashing stats, and zero-cost display for custom models all point to local/self-hosted paths needing more robust fallbacks.
- **Terminal portability remains fragile.** Windows viewport locking, kitty key-handling, CJK wrapping, and zsh/tmux color issues keep surfacing, suggesting the TUI layer needs broader terminal-matrix testing.
- **Cross-platform path handling in custom tools.** Windows-host → Linux-remote SDK workflows break on path resolution, a niche but high-impact scenario for advanced users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-10

## 1. Today's Highlights

Qwen Code is accelerating toward v0.18 with two preview releases dropping in 24 hours, while the community is driving major architectural work: ACP Streamable HTTP transport is now live for native editor integration, and parallel sub-agent coordination ("Agent Team") entered experimental review. The issue tracker shows intense activity around session management, model provider flexibility, and cross-platform stability—28 issues updated with strong engagement on daemon capabilities and memory architecture.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **v0.18.0-preview.1** | Follow-up preview; carries same changelog items as preview.0 with continued release branch stabilization |
| **v0.18.0-preview.0** | CLI fix for thought-part handling in copy output (`he-yufeng`); release automation by CI bot |

Both previews are cut from the `release/v0.18.0` branch. No new user-facing features beyond the copy-output fix; these are stabilization builds ahead of v0.18.0 proper.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | Daemon capability gaps & prioritized backlog (post v0.16-alpha) | **Foundational**: Tracks remaining HTTP/SSE surface gaps for `qwen serve`; remote clients need slash-command passthrough completeness | 14 comments, sustained since May 25; active design discussion |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | ACP Streamable HTTP transport — implementation status & upgrade plan | **Ecosystem unlock**: Zed, Goose, JetBrains can now connect without adapters; defines upgrade path from legacy transports | 4 comments; referenced by implementation PR #4827 |
| [#4615](https://github.com/QwenLM/qwen-code/issues/4615) | Project-scoped `.mcp.json` with pending approval semantics | **Security-critical**: Prevents auto-execution of MCP servers in untrusted workspaces; addresses supply-chain trust gap | 5 comments; security-tagged |
| [#4727](https://github.com/QwenLM/qwen-code/issues/4727) | Dual Output mode TUI unresponsive | **Regression**: JSONL pipe interface (headless automation) hangs on input; breaks CI/IDE integrations | 5 comments; Chinese-language report with detailed repro |
| [#4904](https://github.com/QwenLM/qwen-code/issues/4904) | Cannot switch to new models (qwencode vs. Claude) | **Provider parity gap**: Qwen Coding Plan models available in Claude plugin but blocked in native CLI due to auth-type restrictions | 2 comments; blocks enterprise adoption |
| [#4876](https://github.com/QwenLM/qwen-code/issues/4876) | Subagent returns unrelated content for image files | **Multi-agent reliability**: Read_file tool fails in subagent context while working in main agent; undermines specialized-agent patterns | 3 comments; confirmed bug with model variance |
| [#4888](https://github.com/QwenLM/qwen-code/issues/4888) | IDEA plugin: `ask_user_question` missing question text and input field | **IDE integration broken**: JetBrains users cannot respond to agent prompts; UI renders buttons only | 3 comments; P2-priority with need-information tag |
| [#4891](https://github.com/QwenLM/qwen-code/issues/4891) | Terminal resize fragments scrollback during streaming | **UX polish gap**: Resizing during generation corrupts visual layout with misaligned box borders | 2 comments; welcome-PR tagged |
| [#4729](https://github.com/QwenLM/qwen-code/issues/4729) | Runtime snapshot prefix leaks into settings, stacks on restart | **Data corruption**: Internal `$runtime|<authType>|` prefix accumulates exponentially, causing 404 model errors | Closed June 9; 3-comment resolution |
| [#4747](https://github.com/QwenLM/qwen-code/issues/4747) | Global user-level auto-memory at `~/.qwen/memories/` | **Personalization architecture**: Cross-project memory isolation forces re-learning; requests Claude-like user memory | Closed June 9; 4 comments; memory scope design discussion |

---

## 4. Key PR Progress

| # | Title | Feature / Fix | Significance |
|---|-------|-------------|------------|
| [#4844](https://github.com/QwenLM/qwen-code/pull/4844) | Agent Team experimental feature | **Parallel sub-agent coordination**: Named teams with message-passing, shared task lists, leader consolidation | First-class multi-agent execution; competes with Claude Code's swarms |
| [#4897](https://github.com/QwenLM/qwen-code/pull/4897) | Persist file history snapshots for cross-session `/rewind` | **Session durability**: JSONL persistence of `FileHistorySnapshot` enables time-travel across process restarts | Unblocks T2.1 roadmap milestone for production session management |
| [#4827](https://github.com/QwenLM/qwen-code/pull/4827) | ACP/REST parity — 29 new `_qwen/*` methods | **API completeness**: Full method surface for session extensions, context management, shell operations | +935 lines; closes #4782 transport gaps |
| [#4890](https://github.com/QwenLM/qwen-code/pull/4890) | Add `/cd` command | **Session ergonomics**: Changes working directory without restart; validates paths, prompts trust | Addresses #4879; 6-file change with service migration |
| [#4840](https://github.com/QwenLM/qwen-code/pull/4840) | Microcompact hook continuations | **Autonomous loop stability**: Prevents memory bloat in `/goal` long-runs by compacting old tool results | Keeps idle-cleanup behavior intact; targets production reliability |
| [#4911](https://github.com/QwenLM/qwen-code/pull/4911) | Route down-arrow straight to live agent panel | **TUI navigation fix**: Eliminates extra keypress to reach subagent content; reorders focus chain | One-liner UX fix for #4907 |
| [#4896](https://github.com/QwenLM/qwen-code/pull/4896) | Stabilize prompt-cache prefix against MCP/skills churn | **Performance**: Decouples skill visibility from validation to prevent mid-session cache invalidation | Latency-critical for MCP-heavy workflows |
| [#4732](https://github.com/QwenLM/qwen-code/pull/4732) | Workflow tool P1 — `node:vm` sandbox + sequential `agent()` | **Dynamic Workflows port**: JavaScript execution sandbox for model-authored automation scripts | Foundation for #4721 Ultracode competitor; security-bound |
| [#4853](https://github.com/QwenLM/qwen-code/pull/4853) | `enter_plan_mode` tool and Plan Approval Gate | **Safety architecture**: Model self-lowers into plan mode; approval gate for AUTO/YOLO exits | Reduces autonomous execution risk on complex tasks |
| [#4835](https://github.com/QwenLM/qwen-code/pull/4835) | Project-level extension install and management | **Workspace isolation**: Extensions scoped to `~/.qwen/projects/<name>/extensions/` vs. global | Completes #4790 design; multi-tenant support |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Session & workspace portability** | `/cd`, cross-session `/rewind`, background agent resume with CLI flags, global memory | Treat sessions as durable, migratable compute units rather than ephemeral REPLs |
| **MCP ecosystem hardening** | Project-scoped `.mcp.json`, in-process Python SDK servers, pending-approval semantics | Security-first MCP integration with granular trust boundaries |
| **Multi-agent orchestration** | Agent Team, Dynamic Workflows/Ultracode port, subagent reliability fixes | First-class parallel execution to match/beat Claude Code's agent capabilities |
| **Observability & performance metrics** | Generation timing (TPS, TTFT) in `/stats`, optional timestamps, automated CHANGELOG | Production operational visibility for enterprise deployments |
| **Model provider flexibility** | Shared `baseUrl` across models, provider-distinguished model IDs, auth-type decoupling | Reduce configuration duplication; support hybrid cloud/on-prem setups |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestation |
|------------|-----------|---------------|
| **Model switching fragility** | High (#4904, #4813, #4877, #4729) | Auth-type restrictions, `baseUrl` duplication, runtime prefix corruption, provider collision in UI |
| **Windows platform gaps** | Recurring (#4901, #4908) | PATH persistence in SYSTEM installs, CI runner coverage lagging behind Linux/macOS |
| **TUI/terminal reliability** | High (#4727, #4891, #4852, #4907) | Resize corruption, cursor navigation bugs, focus-chain inconsistency, dual-output hangs |
| **Memory & context management** | Sustained (#4747, #4898, #4897) | Cross-project memory isolation, uncontrolled skill/user-profile growth, prompt-cache invalidation |
| **IDE integration quality** | Emerging (#4888, #3778) | JetBrains plugin UI bugs, desktop app architecture decisions (sidebar vs. fullscreen) |
| **Autonomous execution safety** | Growing (#4853, #4840, #4721) | Need for plan gates, memory compaction, and explicit approval flows before long-running agent loops |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-10

## Today's Highlights

The project has officially rebranded from `deepseek-tui` to **CodeWhale** with v0.8.55, deprecating legacy npm packages and introducing Together AI, OpenAI Codex, and a Model Catalog. The maintainer team opened 16 new issues in a single day focused on Codex parity benchmarking, token optimization, and remote workbench infrastructure, signaling an aggressive push toward production hardening and competitive positioning against OpenAI's CLI tool.

---

## Releases

**[v0.8.55](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.55)** — *Together AI, OpenAI Codex, Model Catalog*

This release marks the formal rebrand: **CodeWhale** is now the canonical project name, command, npm package, and release asset. The legacy `deepseek-tui` npm package is deprecated with no further releases. Users on old installs must migrate via [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md). New provider support includes Together AI and OpenAI Codex, plus an expanded model catalog.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2942](https://github.com/Hmbown/CodeWhale/issues/2942) | **Agent self-Q&A loop causing project crashes** | Critical reliability bug: agent initiates unauthorized actions without user instruction, leading to data loss. Reported with minimal repro steps, suggesting urgency over completeness. | 5 comments; no 👍 yet—likely users treating as urgent bug rather than feature discussion |
| [#2922](https://github.com/Hmbown/CodeWhale/issues/2922) | **YOLO mode verbosity: repeated confirmations per atomic operation** | UX friction in the "just do it" mode defeats its purpose; users expect silence, not narration. Screenshot evidence shows spam before every CSS edit. | 4 comments; validates design tension between safety signaling and mode semantics |
| [#1990](https://github.com/Hmbown/CodeWhale/issues/1990) | **Remote workbench: US-first Cloudflare/AWS/Telegram lane** | Strategic expansion beyond Tencent/CNB ecosystem for global users; touches infrastructure, cost, and trust boundaries. | 3 comments; long-running issue with active design iteration |
| [#2931](https://github.com/Hmbown/CodeWhale/issues/2931) | **Auto version-update detection (CLOSED)** | Closed same-day after implementation; addresses silent bit-rot for non-package-manager installs. Phased design from notification to in-place upgrade. | 3 comments; rapid resolution shows maintainer prioritization |
| [#2935](https://github.com/Hmbown/CodeWhale/issues/2935) | **Hippocampal memory system for infinite context** | Architectural leap beyond 1M-token window toward cross-session recall; proposes SQLite-backed episodic memory with vector search. | 2 comments; ambitious, likely multi-release effort |
| [#889](https://github.com/Hmbown/CodeWhale/issues/889) | **ACP protocol for Paseo remote tasking** | Integration request for emerging open-source remote CLI framework; signals community interest in mobile/away-from-desk workflows. | 2 comments, 2 👍; sustained interest since May |
| [#2964](https://github.com/Hmbown/CodeWhale/issues/2964) | **v0.8.56: DigitalOcean + Telegram remote workbench** | Concrete implementation slice of #1990; targets ~15-minute setup for US VPS + phone control. | 1 comment; milestone-scoped with clear deliverables |
| [#1846](https://github.com/Hmbown/CodeWhale/issues/1846) | **Can't preview diffs before approval** | Core workflow blocker: approval pane obscures the very changes it asks users to judge. | 1 comment, 1 👍; persistent UX gap |
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | **Sidebar sessions panel with auto-resume** | Addresses hidden session discovery problem; `Ctrl+R` popup is insufficient for power users with many contexts. | 1 comment; fills TUI navigation gap |
| [#2960](https://github.com/Hmbown/CodeWhale/issues/2960) | **Fix rebrand update path: `deepseek update` fails** | Migration friction from deprecated package names; users hit hard errors without guidance. Zero-comment suggests either fresh or overlooked. | 0 comments; operational risk for existing user base |

---

## Key PR Progress

| # | PR | Feature / Fix | Technical Significance |
|---|-----|-------------|----------------------|
| [#2947](https://github.com/Hmbown/CodeWhale/pull/2947) | **Guide long shell work to background** | Adds >5s threshold guidance and `task_shell_start`/`wait` schema for non-blocking execution. Fixes [#2939](https://github.com/Hmbown/CodeWhale/issues/2939). | Unblocks agent turns from sleep/CI polling stalls; aligns with benchmark shell-only discipline |
| [#2949](https://github.com/Hmbown/CodeWhale/pull/2949) | **Decouple `allow_shell` from static system-prompt prefix** | Moves permission bit to per-turn `<runtime_prompt>` tag. | Critical for DeepSeek prefix cache efficiency; reduces repeated static prompt bytes |
| [#2945](https://github.com/Hmbown/CodeWhale/pull/2945) | **Render hotbar in sidebar** | Loads hotbar bindings into app state; compact two-row layout with active-slot highlighting. | TUI power-user feature; referenced by [#2065](https://github.com/Hmbown/CodeWhale/issues/2065) |
| [#2925](https://github.com/Hmbown/CodeWhale/pull/2925) | **Dedicated Together AI support** | Full-surface provider integration: config, CLI/TUI, auth, doctor, picker, model registry. 18→19 providers. | Matches v0.8.55 release commitment; expands model access |
| [#2927](https://github.com/Hmbown/CodeWhale/pull/2927) | **Qwen 3.7 Max on OpenRouter** | Catalog, resolver, picker registration with alias normalization. | Keeps model catalog current with frontier releases |
| [#2943](https://github.com/Hmbown/CodeWhale/pull/2943) | **Normalize macOS SUPER→CONTROL for shortcuts** | Fixes Cmd vs. Ctrl inconsistency across terminal emulators. | Platform parity; affects daily macOS UX |
| [#2898](https://github.com/Hmbown/CodeWhale/pull/2898) | **PDF per-page extraction to avoid hangs** | Routes `extract_text_by_pages` instead of monolithic `extract_text`. | Reliability fix for malformed PDF cross-reference tables |
| [#2941](https://github.com/Hmbown/CodeWhale/pull/2941) | **Sync task panel after background shell cancel** | Adds `ShellJobAction` refresh trigger to Tasks sidebar. | Fixes [#2937](https://github.com/Hmbown/CodeWhale/issues/2937); background task UX integrity |
| [#2933](https://github.com/Hmbown/CodeWhale/pull/2933) | **Hippocampal memory + YOLO cleanup + error messages** | Four-in-one: suppresses YOLO verbosity ([#2922](https://github.com/Hmbown/CodeWhale/issues/2922)), improves tool/subagent diagnostics, introduces memory architecture. | Cross-cutting UX and architecture; YOLO fix directly addresses user complaint |
| [#2928](https://github.com/Hmbown/CodeWhale/pull/2928) | **Prefer dispatcher API key over saved root key** | Respects `--api-key` CLI override with source-marker awareness. | Fixes Volcengine Ark and similar subscription endpoint flows |

---

## Feature Request Trends

1. **Remote / Mobile Workbench Ecosystem** — Telegram bridge, cloud VPS templates (DigitalOcean, AWS, Cloudflare), and self-hosted Mac via `apple/container` dominate new issues. The team is building a complete "phone-controlled IDE" infrastructure.

2. **Token Efficiency & Codex Parity** — Aggressive benchmarking agenda (#2952–#2957) targets input/output token reduction, cached token telemetry normalization, and prompt slimming to match OpenAI Codex CLI economics.

3. **Memory & Context Architecture** — Hippocampal memory (#2935), compaction improvements, and cross-session recall signal departure from simple context-window scaling toward persistent agent cognition.

4. **Internationalization** — Sustained PR stream from `gordonlu` localizing mode pickers, command output, and pending-input previews across 7 locales.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Rebrand migration friction** | #2960, #2924 (npm update failures), release notes | 🔴 High — silent failures for existing installs |
| **Agent verbosity & control** | #2942 (unauthorized actions), #2922 (YOLO spam), #2959 (chatter reduction) | 🔴 High — undermines trust in autonomous modes |
| **Approval UX opacity** | #1846 (diff preview blocked), #2966 (Telegram approval deadlock) | 🟡 Medium — safety-critical workflow friction |
| **Token cost unpredictability** | #2953–#2957 (benchmark gaps), #2961 (telemetry normalization) | 🟡 Medium — competitive/commercial concern |
| **Shell execution blocking** | #2939, #2947 (long commands stall turns) | 🟡 Medium — throughput limitation |
| **Session discoverability** | #2934 (no sidebar history), #2656 (subagent naming conflicts) | 🟢 Lower — power-user TUI ergonomics |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*