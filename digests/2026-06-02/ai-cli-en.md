# AI CLI Tools Community Digest 2026-06-02

> Generated: 2026-06-02 00:31 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-06-02

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar market with seven actively maintained alternatives, each wrestling with common challenges of cost transparency, cross-platform reliability, and session continuity. Claude Code and OpenAI Codex lead in enterprise mindshare but suffer from Windows platform debt and authentication fragility. Google, Moonshot AI, and Chinese model providers (Qwen, DeepSeek/CodeWhale, Kimi) are aggressively closing feature gaps while competing on pricing and local model support. OpenCode occupies a distinct niche as the most provider-agnostic option, though its permission system architecture is under stress. The sector as a whole is transitioning from novelty to production infrastructure, with community demands shifting toward governance, observability, and hard cost controls.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|------|:-----------:|:---------:|----------------|----------------|
| **Claude Code** | 50 issues tracked | 8 PRs (3 spam/noise) | No release | High engagement on cost/Windows bugs; cache invalidation fix merged |
| **OpenAI Codex** | 35+ issues | 10+ PRs | **rust-v0.136.0** shipped | Multi-agent runtime stack (5 PRs) in review; session archiving released |
| **Gemini CLI** | ~15 issues | 10 PRs | No release | Auto Memory security hardening (3 P2s); Flash 3.5 model transition |
| **GitHub Copilot CLI** | 35 issues | **1 PR (spam)** | **v1.0.57** + patch | Clipboard regression wave post-release; zero substantive PR activity |
| **Kimi Code CLI** | 2 critical issues | 4 PRs | No release | Cross-client image leakage bug; transactional OAuth hardening |
| **OpenCode** | ~12 issues | 10 PRs | No release | MCP Desktop regression cluster; pricing pressure from DeepSeek cut |
| **Pi** | ~12 issues | 10 PRs | No release | TUI hang fixes merged; provider role normalization for OpenRouter |
| **Qwen Code** | ~10 issues | 10 PRs | **v0.17.0-nightly** | Vim mode overhaul; telemetry expansion; standalone auto-update |
| **DeepSeek TUI / CodeWhale** | ~12 issues | 10 PRs | **v0.8.49** (rebrand) | Migration documentation push; YOLO mode stall pattern emerging |

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding | Specific Needs |
|-------------|---------------|--------------|
| **Cost transparency & hard limits** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | Real-time token burn visibility; per-action cost preview; spending caps before execution; dynamic pricing adjustments (OpenCode #28846, Qwen #4614) |
| **Windows platform parity** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, CodeWhale, Kimi CLI | ARM64 support (Claude #40198); process lifecycle management (Claude #62659, CodeWhale #1812); auth deep-links (Codex #25157); path/clipboard handling (Copilot #3601, Kimi #1914) |
| **MCP ecosystem maturity** | OpenAI Codex, Gemini CLI, OpenCode, Qwen Code, Claude Code | Per-tool permissions (Copilot #3028); atomic discovery (Gemini #27619); connection stability (Qwen #4641); Desktop/CLI parity (OpenCode #30104); cost control (Copilot #768) |
| **Session lifecycle & continuity** | Claude Code, OpenAI Codex, Gemini CLI, Kimi CLI, CodeWhale, Qwen Code, Pi | Archive/unarchive (Codex shipped); resume without corruption (Kimi #2386, Qwen #4679); cross-session memory (CodeWhale #2492); fork/branch (CodeWhale #2082); live message preservation (OpenCode #30300) |
| **Context window control** | Claude Code, OpenAI Codex, Pi | Explicit `/context` commands or config flags (Claude #62063); ephemeral session-scoped overrides (Pi #5263); auto-compaction reliability (Codex #21671, Qwen #4624) |
| **Safety/guardrail configurability** | Claude Code, OpenAI Codex, CodeWhale, Qwen Code | Enterprise override paths for false positives (Claude #61185); typed execution policies (CodeWhale #1186); auto-mode classifier tuning (Qwen #4676); privilege escalation prevention (Qwen #4572) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|-----------|---------|----------------------|
| **Enterprise integration depth** | Claude Code, GitHub Copilot CLI | Deep IDE/VS Code coupling; org policy enforcement; SSO/auth infrastructure. Copilot CLI explicitly subordinate to IDE feature parity (#1703). |
| **Provider agnosticism** | OpenCode, Pi | OpenCode: 15+ providers with unified config; Pi: extension-native architecture with per-provider role normalization. Both bear integration tax of rapid model churn. |
| **Local/self-hosted workflows** | Qwen Code, CodeWhale, Pi | Ollama integration (Qwen #4657), standalone binary distribution (Qwen #4629), local model artifact sanitization (Pi #5308). Chinese tools optimize for domestic API pricing and regulatory environment. |
| **Agent orchestration sophistication** | OpenAI Codex, Gemini CLI, Claude Code | Codex: multi-agent runtime stack in development (5 PRs). Gemini: subagent delegation (broken, #21409). Claude: Cowork VM sandboxing (ARM64 blocked, #40198). |
| **Memory architecture** | CodeWhale, Claude Code | CodeWhale: graph-structured memory roadmap (#534). Claude: Auto Memory with redaction/retry concerns (#26525–26522). |
| **TUI/terminal-native UX** | Pi, Qwen Code, Claude Code | Pi: most mature terminal graphics (Kitty protocol, WezTerm optimization). Qwen: vim mode fidelity investment (#4677). Claude: scrollback/frame handling (#49086). |
| **Pricing model** | Kimi CLI, Qwen Code, OpenCode | Kimi: RMB-denominated consumption packages. OpenCode: "Go" subscription with fixed limits now contested post-DeepSeek 75% cut (#28846). |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **Highest velocity, production-critical** | Claude Code, OpenAI Codex | Largest issue volume; deepest enterprise penetration; cost/scale problems indicate real usage. Codex shows stronger release cadence; Claude Code has higher noise ratio in PRs (37.5% spam). |
| **Rapidly iterating, catching up** | Qwen Code, Pi, OpenCode | Qwen: 50 active PRs, vim overhaul, telemetry expansion—clear investment in developer experience. Pi: highest merge velocity on TUI hardening. OpenCode: contributor-driven (kitlangton) but bottlenecked on permission system redesign. |
| **Platform-blessed but constrained** | Gemini CLI, GitHub Copilot CLI, Kimi CLI | Google/Microsoft/Moonshot resources evident, but organizational friction shows: Gemini's agent hangs are core-architecture; Copilot CLI has **zero legitimate PR activity** in 24h despite 35 issues; Kimi's cross-client leakage suggests siloed web/CLI teams. |
| **Volatile transition** | CodeWhale (ex-DeepSeek TUI) | Rebrand introduces migration uncertainty (#1969); YOLO mode stalls (#2487) threaten autonomous-agent positioning. Community size unclear but engagement intensity is high. |

**Maturity signals**: Tools with structured telemetry (Qwen #4682, #4410), standalone distribution (Qwen #4629), and regression test coverage (Pi #5310, OpenCode #30300) are pulling ahead in operational reliability. Tools still resolving basic clipboard (#3609) or auth (#3596) regressions are infrastructure-immature.

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Cost as primary selection criterion** | DeepSeek V4 Pro 75% cut → OpenCode pricing pressure (#28846); Claude Code token waste bugs (#40652, #60334); Qwen consumption rate complaints (#4614) | Expect pricing volatility; demand usage-based billing with hard caps; local model fallback strategies become essential |
| **Multi-agent from demo to infrastructure** | Codex 5-PR runtime stack; Gemini subagent hangs (#21409); CodeWhale graph memory (#534); Qwen subagent telemetry (#4410) | Agent topology will be user-configurable within 12 months; debuggability of agent-agent interaction becomes critical |
| **Terminal as permanent IDE companion, not replacement** | Cross-surface parity demands (Claude #64507, #28817); Pi's neovim/tmux integration (#5302); Copilot CLI subordination to VS Code | CLI tools must interoperate with existing editor workflows; session portability between surfaces is table stakes |
| **Security boundary erosion and reconstruction** | OpenCode permissions bypass cluster (#16331, #30291); Claude safety false positives (#61185); CodeWhale execpolicy redesign (#1186); Qwen auto-mode hardening (#4572) | Current permission architectures are failing under real use; expect industry consolidation on capability-based access control with cryptographic attestation |
| **Model provider churn as integration tax** | Pi's role vocabulary fragmentation (#5229, #5221); OpenCode reasoning variant expansion (#30284); Gemini Flash transition (#27614) | Abstraction layers (OpenRouter, LiteLLM) are load-bearing; direct provider integrations carry 3–6 month maintenance half-life |
| **Observability as competitive moat** | Qwen telemetry phases; Claude cost transparency demands; Pi's `turn_error` classification (#25707) | Tools without structured tracing will be excluded from enterprise procurement; "debug my agent" is the new "debug my query" |

---

*Report compiled from 2026-06-02 community digests across nine active AI CLI tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-02 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point in Claude's document output; author argues this affects "every document Claude generates" |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert ODT/ODS/ODF files; LibreOffice integration | Enterprise open-source document workflow demand; ISO standard compliance focus |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised skill for actionable, single-conversation frontend design guidance | Meta-improvement: making skills actually executable by Claude vs. vague human-readable advice |
| 4 | **Skill Quality Analyzer + Security Analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skill structure (20% weighting system) and security posture | First systematic quality framework for the skills marketplace itself |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on business data | Bridges enterprise ERP data with AI; Apache 2.0 model integration |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: philosophy (Testing Trophy), unit testing (AAA), React component testing, integration patterns | Addresses critical gap in Claude's code generation reliability |
| 7 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub coverage | Most comprehensive enterprise platform skill; ITIL-aligned scope |
| 8 | **Shodh Memory (Persistent Context)** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Cross-conversation memory system with proactive context surfacing | Agent memory architecture; `proactive_context` invocation pattern |

---

## 2. Community Demand Trends

From **Issues with highest engagement**, the community's most-anticipated Skill directions are:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Enterprise Skill Sharing & Governance** | 13 comments, 7 👍 | [#228](https://github.com/anthropics/skills/issues/228) Org-wide skill sharing; [#492](https://github.com/anthropics/skills/issues/492) Trust boundary abuse via `anthropic/` namespace impersonation |
| **Windows-Compatible Tooling** | 9 comments, 6 👍; multiple PRs | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% trigger rate; PRs #1099, #1050 fixing `WinError` crashes |
| **MCP Interoperability** | 4 comments | [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs; algorithmic-art → `generateAlgorithmArt()` API formalization |
| **Multi-File Skill Architecture** | 2 comments | [#1220](https://github.com/anthropics/skills/issues/1220) Multi-file preload / inline bundling for reference files |
| **AWS/Bedrock Deployment** | 4 comments | [#29](https://github.com/anthropics/skills/issues/29) Skills on Bedrock compatibility |

**Emerging pattern**: The community is shifting from *skill creation* to *skill distribution infrastructure*—sharing, validation, cross-platform execution, and standard protocols.

---

## 3. High-Potential Pending Skills

Active PRs with demonstrated community need, likely to merge with maintainer review:

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal applicability; zero dependencies; author (PGTBoos) has refined based on feedback | Awaiting Anthropic review queue |
| **ODT/LibreOffice** | [#486](https://github.com/anthropics/skills/pull/486) | Fills open-source document gap; enterprise procurement compliance | Scope validation (create vs. parse vs. template fill) |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Directly addresses code quality complaints; well-structured scope | Potential overlap with existing `skill-creator` testing guidance |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | Largest enterprise platform not yet covered; author responsive to scope concerns | Breadth vs. depth tension (7 modules in one skill) |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 4-skill cognitive framework; memory + structured thinking | Complexity; may need decomposition per skill guidelines |

**Infrastructure fixes with high merge probability**: Lubrsy706's trilogy—PDF case-sensitivity [#538](https://github.com/anthropics/skills/pull/538), YAML validation [#539](https://github.com/anthropics/skills/pull/539), DOCX bookmark collision [#541](https://github.com/anthropics/skills/pull/541)—are narrow, well-specified bug fixes.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability infrastructure*—not more skills, but better ways to validate, share, secure, and execute skills across teams and platforms, with Windows parity and MCP standardization now as critical as skill functionality itself.**

---

---

# Claude Code Community Digest — 2026-06-02

---

## 1. Today's Highlights

No new releases dropped in the last 24h, but community activity remains intense around **Windows ARM64 compatibility**, **cost/token consumption transparency**, and **cross-surface CLI/GUI parity**. A notable closed issue reveals a critical prompt cache invalidation bug caused by billing hash substitution, while an open issue documents the first verified financial loss ($112.77) attributed to Claude Code ignoring direct user instructions during automated trading bot setup.

---

## 2. Releases

**No releases in the last 24h.** Latest stable remains prior build.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|-------------------|
| [#40198](https://github.com/anthropics/claude-code/issues/40198) | Cowork VM fails on Windows ARM64 (Snapdragon X Elite) | **OPEN** | Blocks Samsung Galaxy Book4 Edge and other Copilot+ PCs from using Claude Code's sandboxed execution environment. 52 comments show deep debugging with no resolution. | 52 comments, 6 👍 — highest engagement; users sharing ARM64 logs |
| [#28817](https://github.com/anthropics/claude-code/issues/28817) | Remote Control unavailable despite Pro plan | **OPEN** | Core value proposition broken for paying users. Authentication state appears desynced between CLI and backend entitlement system. | 43 comments, 60 👍 — massive upvote signal; workaround attempts failing |
| [#60334](https://github.com/anthropics/claude-code/issues/60334) | Image processing failures burn 70% of 5h window | **CLOSED** | API-level image processing errors silently removed images but consumed tokens, causing severe cost leakage. Closed without clear resolution path. | 38 comments, 12 👍; frustration at "removed but still billed" behavior |
| [#62063](https://github.com/anthropics/claude-code/issues/62063) | Defaults to 1M context with no workaround on Pro | **OPEN** | Forces expensive context window on users who don't need it, burning through rate limits. No user-configurable override exists. | 36 comments, 20 👍; demands for `/context` or config flag |
| [#49086](https://github.com/anthropics/claude-code/issues/49086) | Terminal resize causes scrollback frame duplication | **CLOSED** | SIGWINCH handling leaks per-frame redraws into scrollback, degrading TUX usability. Repro confirmed, fix merged. | 19 comments, 8 👍; quality-of-life fix appreciated |
| [#61185](https://github.com/anthropics/claude-code/issues/61185) | Cyber safeguards false positive on sysadmin commands | **OPEN** | Routine audit commands blocked; write-only reporting broken; context poisoning prevents session recovery. Triple failure mode in safety layer. | 15 comments, 5 👍; enterprise/admin users most affected |
| [#64574](https://github.com/anthropics/claude-code/issues/64574) | AI ignored instructions, caused $112.77 financial loss | **OPEN** | First quantified financial damage from instruction adherence failure (Polymarket trading bot). Raises liability questions. | 9 comments, 0 👍; serious but polarizing — some blame user prompting |
| [#40652](https://github.com/anthropics/claude-code/issues/40652) | CLI mutates historical tool results via `cch=` hash, breaks prompt cache | **CLOSED** | Root-caused 30-50K token waste per turn. Billing hash substitution (`cch=`) invalidates cache keys mid-conversation. Architectural fix needed. | 13 comments, 9 👍; praised for deep technical analysis |
| [#62659](https://github.com/anthropics/claude-code/issues/62659) | Windows Bash tool orphans survive session end | **OPEN** | `SILENT_BREAKAWAY_OK` flag defeats Job Object; cargo/rustc/node processes leak. Resource exhaustion risk on Windows. | 4 comments, 1 👍; Windows power-user niche but critical |
| [#64507](https://github.com/anthropics/claude-code/issues/64507) | `/doctor` missing in Desktop GUI; commands differ across surfaces | **OPEN** | Support workflow fragmentation — CLI has diagnostics GUI lacks. False-positive safety reports harder to file. | 5 comments, 0 👍; parity demand between surfaces |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | Bump stale/autoclose timeouts 14→90 days | **OPEN** | Community-driven governance fix. Addresses concern that 14-day closure is too aggressive for complex bugs awaiting maintainer triage. |
| [#63467](https://github.com/anthropics/claude-code/pull/63467) | Add Windows `gh` CLI install docs | **OPEN** | Documentation parity: adds `winget install --id GitHub.cli` to commit-commands README alongside existing brew instruction. |
| [#63872](https://github.com/anthropics/claude-code/pull/63872) | Fix README capitalization/wording | **OPEN** | Editorial: standardizes `GitHub`, `macOS` casing; replaces double hyphen with comma for readability. |
| [#64489](https://github.com/anthropics/claude-code/pull/64489) | Update example file | **OPEN** | Adds new sample content to example file. Minor docs maintenance. |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | `s` | **OPEN** | Placeholder/noise PR. Likely accidental submission. |
| [#61478](https://github.com/anthropics/claude-code/pull/61478) | Claude/marketing management system t97e l | **OPEN** | Unclear intent; possible spam or misdirected submission. |
| [#64603](https://github.com/anthropics/claude-code/pull/64603) | README.md | **CLOSED** | Empty/spam PR, quickly closed. |
| [#64602](https://github.com/anthropics/claude-code/pull/64602) | Add directory structure for myproject | **CLOSED** | Personal project scaffolding, not upstream-relevant. Closed. |

**Note:** 3 of 8 PRs are noise/spam. Only [#63686](https://github.com/anthropics/claude-code/pull/63686), [#63467](https://github.com/anthropics/claude-code/pull/63467), and [#63872](https://github.com/anthropics/claude-code/pull/63872) represent genuine community contributions. The high noise ratio suggests repository needs stronger `CONTRIBUTING.md` gating or bot filtering.

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Context window control** | [#62063](https://github.com/anthropics/claude-code/issues/62063), [#33212](https://github.com/anthropics/claude-code/issues/33212) | Users demand explicit `/context` commands or config to cap context size; auto-compact should preserve historical reasoning across multiple compactions |
| **Cost transparency & hard limits** | [#60334](https://github.com/anthropics/claude-code/issues/60334), [#40652](https://github.com/anthropics/claude-code/issues/40652), [#41567](https://github.com/anthropics/claude-code/issues/41567), [#41521](https://github.com/anthropics/claude-code/issues/41521), [#44125](https://github.com/anthropics/claude-code/issues/44125) | Real-time token burn visibility; per-action cost preview; ability to set spending caps before operations execute |
| **Cross-surface parity** | [#64507](https://github.com/anthropics/claude-code/issues/64507), [#28817](https://github.com/anthropics/claude-code/issues/28817), [#59736](https://github.com/anthropics/claude-code/issues/59736) | Desktop GUI must reach CLI feature parity; session portability between CLI/GUI/VS Code extension |
| **Windows-first fixes** | [#40198](https://github.com/anthropics/claude-code/issues/40198), [#62659](https://github.com/anthropics/claude-code/issues/62659), [#63370](https://github.com/anthropics/claude-code/issues/63370), [#28184](https://github.com/anthropics/claude-code/issues/28184) | ARM64 support, proper Job Object process management, path quoting with spaces, session persistence |
| **Safety/guardrail configurability** | [#61185](https://github.com/anthropics/claude-code/issues/61185), [#64574](https://github.com/anthropics/claude-code/issues/64574) | Enterprise users need override paths for false positives; "obey user instruction" vs. "safety refusal" balance needs tuning knobs |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Token cost opacity & runaway consumption** | 🔥🔥🔥 Very High | Critical | [#60334](https://github.com/anthropics/claude-code/issues/60334), [#40652](https://github.com/anthropics/claude-code/issues/40652), [#39803](https://github.com/anthropics/claude-code/issues/39803), [#44345](https://github.com/anthropics/claude-code/issues/44345) | Users report 15-70% of usage windows consumed by single operations with no prior warning. Cache invalidation bugs amplify waste. |
| **Windows as second-class platform** | 🔥🔥🔥 Very High | High | [#40198](https://github.com/anthropics/claude-code/issues/40198), [#62659](https://github.com/anthropics/claude-code/issues/62659), [#63370](https://github.com/anthropics/claude-code/issues/63370), [#28184](https://github.com/anthropics/claude-code/issues/28184), [#63402](https://github.com/anthropics/claude-code/issues/63402) | ARM64, process lifecycle, path handling, and even update delivery (Bun CLI misfire) all show Windows-specific fragility. |
| **Authentication/entitlement desync** | 🔥🔥 High | High | [#28817](https://github.com/anthropics/claude-code/issues/28817), [#62063](https://github.com/anthropics/claude-code/issues/62063) | Pro users denied features they've paid for; no self-service resync path. |
| **Instruction adherence decay** | 🔥🔥 High | Critical (for some) | [#64574](https://github.com/anthropics/claude-code/issues/64574), [#45187](https://github.com/anthropics/claude-code/issues/45187), [#47193](https://github.com/anthropics/claude-code/issues/47193), [#43948](https://github.com/anthropics/claude-code/issues/43948) | CLAUDE.md, auto-memory, and explicit instructions ignored across sessions. Financial and productivity consequences documented. |
| **Safety false positives breaking workflows** | 🔥🔥 High | Medium-High | [#61185](https://github.com/anthropics/claude-code/issues/61185), [#51850](https://github.com/anthropics/claude-code/issues/51850) | Legitimate sysadmin and business SaaS operations blocked; recovery mechanisms poison context. |
| **Surface fragmentation (CLI vs GUI vs VS Code)** | 🔥 Medium | Medium | [#64507](https://github.com/anthropics/claude-code/issues/64507), [#59736](https://github.com/anthropics/claude-code/issues/59736), [#24788](https://github.com/anthropics/claude-code/issues/24788) | Different commands, different session visibility, different hook behaviors across surfaces. |

---

*Digest compiled from 50 issues and 8 PRs updated 2026-06-01/02. For full context, visit [anthropics/claude-code](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-02

## 1. Today's Highlights

The Codex team shipped **rust-v0.136.0** with improved TUI markdown rendering and session archiving capabilities, while a major multi-agent runtime stack (5 PRs) landed for review, laying groundwork for dynamic agent orchestration. Windows continues to dominate the bug tracker with authentication, sandbox, and performance regressions drawing heavy community engagement.

---

## 2. Releases

### [rust-v0.136.0](https://github.com/openai/codex/releases/tag/rust-v0.136.0)
- **TUI markdown improvements**: Web links retain clickability via OSC 8 metadata; cramped tables auto-convert to readable key/value records without losing link targets ([#24472](https://github.com/openai/codex/issues/24472), [#24636](https://github.com/openai/codex/issues/24636), [#24825](https://github.com/openai/codex/issues/24825))
- **Session archiving**: New `/archive` command in TUI and `codex archive` / `codex unarchive` CLI commands for thread lifecycle management

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#20161](https://github.com/openai/codex/issues/20161) Phone verification broken after SSO login — **CLOSED** | Critical auth regression blocking cross-device usage; 179 comments show widespread impact | 🔥 115 upvotes; resolved but pattern of auth fragility persists |
| [#9634](https://github.com/openai/codex/issues/9634) Refresh token reuse invalidates sessions — **CLOSED** | Core token rotation bug breaking CLI reliability for Pro users | 45 comments, 8 upvotes; long-running issue finally closed |
| [#21671](https://github.com/openai/codex/issues/21671) `/compact` fails with `service_tier` parameter — **CLOSED** | Regression in context compaction (0.129.0), breaking long-session workflows | 23 comments; rapid fix expected given context management is core value prop |
| [#18450](https://github.com/openai/codex/issues/18450) Remote compact task stream disconnects | Persistent connectivity failure for Plus users on macOS M5; data loss risk | 20 comments, 12 upvotes; open since April, unresolved |
| [#19811](https://github.com/openai/codex/issues/19811) Windows 10 unsupported but repair prompt shown | Misleading UX: app offers dependency repair on unsupported OS, then fails | 16 comments, 9 upvotes; clear platform policy communication gap |
| [#25157](https://github.com/openai/codex/issues/25157) OAuth "Open in Codex" triggers Electron error on Windows | Broken deep-link callback flow blocking Desktop auth for Pro users | 15 comments, 14 upvotes; high-visibility Windows blocker |
| [#13117](https://github.com/openai/codex/issues/13117) Permission fatigue: every file read requires approval — **regression** | Sandbox permission model regression on Windows VS Code extension; kills productivity | 15 comments, 9 upvotes; recurring theme, previously fixed |
| [#11956](https://github.com/openai/codex/issues/11956) Multi-repo support (enhancement) | Top feature gap vs. Claude Code; blocking enterprise cross-service workflows | 12 comments, 23 upvotes; highest-upvoted open issue |
| [#25084](https://github.com/openai/codex/issues/25084) Desktop hides active project chat history | Data integrity concern: threads exist on disk but invisible in UI | 12 comments; undermines trust in session persistence |
| [#25220](https://github.com/openai/codex/issues/25220) Bundled plugins fail on EFS-encrypted WindowsApps | EFS encryption breaks Computer Use, Browser, Chrome, LaTeX plugins | 10 comments, 3 upvotes; enterprise Windows deployment blocker |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#25675](https://github.com/openai/codex/pull/25675) Remote control pairing start | Exposes pairing RPC for controller enrollment in app-server v2 | Enables multi-device Codex control workflows |
| [#25683](https://github.com/openai/codex/pull/25683) Comprehensive root formatting check | Closes CI gap: `just fmt` now covers Justfile itself, cross-platform Python driver | Prevents formatting drift, improves contributor experience |
| [#25717](https://github.com/openai/codex/pull/25717) Handle invalid plugin skills manifest — **CLOSED** | Graceful degradation for malformed `plugin.json` skills arrays | Plugin ecosystem robustness |
| [#25698](https://github.com/openai/codex/pull/25698) `bon` builder for MCP server configs — **CLOSED** | Eliminates verbose `McpServerConfig` initialization | Developer ergonomics for MCP integration |
| [#25720](https://github.com/openai/codex/pull/25720) → [#25724](https://github.com/openai/codex/pull/25724) **Stack: Multi-agent runtime metadata** (5 PRs) | Types → persistence → resolution → remote override → pre-turn selector testing | **Foundational**: Enables dynamic runtime selection per thread, critical for multi-agent roadmap |
| [#25707](https://github.com/openai/codex/pull/25707) Track `CodexErr` in turn analytics | Telemetry granularity for error classification without breaking existing `turn_error` | Observability improvement for reliability engineering |
| [#15730](https://github.com/openai/codex/pull/15730) Harden symlinked output/config writes | `O_NOFOLLOW` for `--output-last-message`, protects `.codex/config.toml` | Security hardening against TOCTOU/symlink attacks |
| [#25457](https://github.com/openai/codex/pull/25457) Cache remote plugin catalog | Startup perf + canonical remote plugin IDs for recommendations | Plugin marketplace UX improvement |
| [#17931](https://github.com/openai/codex/pull/17931) Encrypted local secrets for keyring auth | Compresses large auth payloads to fit Windows Credential Manager 2,560-byte limit | Unblocks Windows enterprise auth with keyring |
| [#17036](https://github.com/openai/codex/pull/17036) Enforce `allow_git` through permissions | User-facing permission gate for limited Git metadata writes in sandbox | Security/ergonomics balance for Git workflows |

---

## 5. Feature Request Trends

1. **Multi-repo context** ([#11956](https://github.com/openai/codex/issues/11956)): The dominant feature gap—developers want Claude Code-style "just works" cross-repository operations for microservice architectures.

2. **Session lifecycle management**: Archive/unarchive shipped in v0.136.0, but history visibility ([#25084](https://github.com/openai/codex/issues/25084), [#23193](https://github.com/openai/codex/issues/23193), [#25500](https://github.com/openai/codex/issues/25500)) remains problematic—suggests need for thread metadata repair tools.

3. **MCP ecosystem polish**: Multiple issues around MCP discovery, configuration UX ([#25363](https://github.com/openai/codex/issues/25363)), and OAuth flows indicate MCP is crossing the chasm to mainstream users who expect CLI parity with competitors.

4. **Multi-agent runtime flexibility**: The 5-PR stack signals official investment in dynamic runtime selection—community will expect per-thread model/runtime binding and potentially user-controlled agent topology.

---

## 6. Developer Pain Points

| Theme | Frequency | Specific Manifestations |
|-------|-----------|------------------------|
| **Windows as second-class citizen** | 🔴 Critical | Auth deep-links broken ([#25157](https://github.com/openai/codex/issues/25157), [#25188](https://github.com/openai/codex/issues/25188)), sandbox spawn failures ([#24963](https://github.com/openai/codex/issues/24963), [#25366](https://github.com/openai/codex/issues/25366)), EFS encryption incompatibility ([#25220](https://github.com/openai/codex/issues/25220)), performance degradation ([#25709](https://github.com/openai/codex/issues/25709), [#25715](https://github.com/openai/codex/issues/25715)) |
| **Authentication fragility** | 🔴 High | Phone verification loops ([#20161](https://github.com/openai/codex/issues/20161), [#25670](https://github.com/openai/codex/issues/25670)), token refresh races ([#9634](https://github.com/openai/codex/issues/9634)), passkey/SSO interaction edge cases |
| **Context compaction reliability** | 🟡 Medium | `service_tier` parameter errors ([#21671](https://github.com/openai/codex/issues/21671)), stream disconnects ([#18450](https://github.com/openai/codex/issues/18450)), provider-scoped API key incompatibilities ([#22876](https://github.com/openai/codex/issues/22876))—long sessions remain risky |
| **Sandbox permission model inconsistency** | 🟡 Medium | "Full Access" not honored outside workspace ([#25714](https://github.com/openai/codex/issues/25714)), goal auto-continuations downgrading permissions ([#24300](https://github.com/openai/codex/issues/24300)), regression to per-file prompts ([#13117](https://github.com/openai/codex/issues/13117)) |
| **CLI/TUI UX gaps vs. competitors** | 🟡 Medium | `codex doctor` formatting panned vs. Claude Code ([#25363](https://github.com/openai/codex/issues/25363)), MCP discovery friction |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-02

---

## 1. Today's Highlights

No new releases in the last 24h, but active development continues across agent reliability, MCP infrastructure, and model support. The community is seeing significant investment in **Auto Memory safety** (three new P2 issues on redaction, patch validation, and retry logic) and **Gemini 3.5 Flash model integration** (two competing PRs for GA transition). Agent orchestration remains the dominant pain point, with hanging subagents and incorrect success reporting drawing continued maintainer attention.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#24353** | [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | Follow-up to behavioral evals initiative; 76 tests running across 6 Gemini versions. Critical for measuring agent quality regressions at sub-system granularity. | 7 comments, maintainer-authored EPIC |
| **#22745** | [AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Could reduce token waste and turn count by reading precise method bounds instead of line ranges. Major efficiency opportunity for large codebase operations. | 7 comments, 1 👍, linked to #22746/#22747 |
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1 bug**: Core agent delegation is broken—simple folder creation hangs indefinitely. Workaround (disable subagents) defeats the product's architecture. | 7 comments, **8 👍** — highest community signal |
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Silent failure mode: interrupted analysis appears successful, corrupting user trust in agent outputs. Fundamental reliability issue. | 6 comments, 2 👍 |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | Custom skills (gradle, git) are ignored despite explicit descriptions. Suggests routing/prompting gap in agent orchestration. | 6 comments |
| **#25166** | [Shell command execution stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1 core bug**: Simple commands falsely claim they're awaiting input after completion. Breaks interactive workflows. | 4 comments, 3 👍 |
| **#26525** | [Deterministic redaction + reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Security: model-side redaction happens *after* secrets enter context. Service logging of skills data compounds exposure risk. | 3 comments, security-tagged |
| **#26523** | [Surface/quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523) | Silent skip of malformed patches; aggregate dismiss only handles valid ones. Creates hidden state corruption in memory system. | 3 comments |
| **#26522** | [Stop Auto Memory retrying low-signal sessions](https://github.com/google-gemini/gemini-cli/issues/26522) | Infinite retry loop on unprocessed low-signal sessions wastes compute and pollutes memory index. | 3 comments |
| **#22186** | [get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | **P1 crash** in productivity workflow feature near completion. Reproducible, blocks user summary generation. | 3 comments |

---

## 4. Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|-------------|
| **#27570** | [Transition to flash GA model](https://github.com/google-gemini/gemini-cli/pull/27570) | ❌ Closed | Gated `gemini-3.5-flash` transition behind experiment flag; backward compatibility preserved. Superseded by #27614. |
| **#27614** | [Add Gemini 3.5 Flash model family](https://github.com/google-gemini/gemini-cli/pull/27614) | 🟡 Open | Adds `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview` with full config/resolution support. Fresh replacement for closed #27570. |
| **#27619** | [Atomic update in MCP tool discovery](https://github.com/google-gemini/gemini-cli/pull/27619) | 🟡 Open | Fixes "tool not found" on transient network drops by retaining last-known-good tools during `refreshTools`. Follow-up to closed #27383. |
| **#27616** | [PR size labeler + batch workflows](https://github.com/google-gemini/gemini-cli/pull/27616) | 🟡 Open | CI automation: auto-categorizes PRs by size (XS–XL) for review load balancing. Large PR, P1 priority. |
| **#27101** | [Stop after unsupported metadata listing (A2A)](https://github.com/google-gemini/gemini-cli/pull/27101) | 🟡 Open | Fixes #21729: returns 501 immediately for non-in-memory task stores instead of crashing. Includes regression test. |
| **#27572** | [Handle tmux false positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572) | 🟡 Open | Fixes theme switching bug in tmux/mosh where `#ffffff` background is misdetected. RCA included. |
| **#27467** | [Handle multi-line escaped quotes in stripShellWrapper](https://github.com/google-gemini/gemini-cli/pull/27467) | 🟡 Open | Replaces naive escaping logic with `shell-quote` for reliable multi-line command extraction. |
| **#27463** | [Preserve refresh_token in file-based cache](https://github.com/google-gemini/gemini-cli/pull/27463) | 🟡 Open | Completes fix for #21691: extends `refresh_token` preservation to default file-based storage (previously only fixed for encrypted storage). |
| **#27428** | [Use docker inspect exit code](https://github.com/google-gemini/gemini-cli/pull/27428) | 🟡 Open | Fixes sandbox `imageExists` false negatives when Docker writes to stderr (DOCKER_BUILDKIT). |
| **#27365** | [Add --ephemeral session mode](https://github.com/google-gemini/gemini-cli/pull/27365) | 🟡 Open | Community-contributed: disables session logging for headless/batch use cases. Addresses log flooding concern. |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | #22745, #22746, #22747 | High — three linked issues, explicit tool recommendations (tilth, glyph, ast-grep) |
| **Background/local agent execution** | #22741 (Ctrl+B backgrounding), #20303 (Remote Agents Sprint 2) | Medium — part of explicit roadmap |
| **Agent self-awareness / documentation** | #21432 (accurate CLI flags, hotkeys), #27583 (docs PR for `/clear`) | Low-Medium — UX polish |
| **Enhanced browser agent resilience** | #22232 (session takeover/lock recovery), #22267 (settings.json respect) | Medium — browser agent reliability gap |
| **Security hardening (Auto Memory)** | #26525, #26523, #26522 | High — three concurrent P2 issues filed same day |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Key Issues | Severity |
|------------|-----------|------------|----------|
| **Agent hangs / silent failures** | Very High | #21409 (generalist hangs), #22323 (false GOAL success), #25166 (shell stuck), #22093 (unauthorized subagents) | 🔴 Critical — core functionality unreliable |
| **Subagent orchestration ignored** | High | #21968 (skills unused), #22672 (destructive commands), #22590 (PR for state tracking) | 🟡 High — routing/prompting broken |
| **Auto Memory instability** | High | #26525, #26523, #26522, #26516 (rollup) | 🟡 High — new system, multiple edge cases |
| **MCP/tooling fragility** | Medium | #27619, #27383 (atomic updates), #24246 (>128 tools 400 error) | 🟡 High — ecosystem integration risk |
| **Terminal/rendering glitches** | Medium | #21924 (resize flicker), #24935 (editor corruption), #27572 (tmux detection) | 🟢 Moderate — polish issues |
| **Windows/platform parity** | Low-Medium | #27603 (shell guidance PR), #22466 (`\n` escaping) | 🟢 Moderate — ongoing gap |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity. "🔒 maintainer only" issues are tracked but not externally discussable.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-02

---

## 1. Today's Highlights

Copilot CLI v1.0.57 shipped with improved error messaging for API rate limits and better plugin command feedback, though a wave of clipboard and terminal rendering bugs emerged immediately after. The community is actively debating model parity with VS Code Copilot and pushing for deeper MCP server customization, with 35 issues updated in the last 24 hours showing sustained engagement.

---

## 2. Releases

### [v1.0.57](https://github.com/github/copilot-cli/releases/tag/v1.0.57) (2026-06-01)
- Actionable error messages when GitHub API rate limits are hit during `copilot update` (addresses [#3383](https://github.com/github/copilot-cli/issues/3383))
- Plugin slash commands (`/plugin install`, `uninstall`, `update`, `marketplace add/remove/browse`) now show immediate progress feedback
- Incomplete fix for canceling running shell commands with Ctrl+C (truncated in release notes)

### [v1.0.57-5](https://github.com/github/copilot-cli/releases/tag/v1.0.57-5) (2026-06-01)
- Unspecified fixes and changes (patch release)

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|-------------|-------------------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) **Org-enabled models missing from CLI** — Gemini 3.1 Pro and others appear in VS Code Copilot but not CLI for same account/org | Critical parity gap between CLI and IDE; blocks orgs standardizing on CLI workflows | 🔥 27 comments, 53 👍 — highest engagement; users confirming widespread reproduction |
| [#1707](https://github.com/github/copilot-cli/issues/1707) **3rd party MCP servers falsely disabled** — regression in 0.0.418, downgrading to 0.0.417 restores function | Breaks MCP-dependent workflows; false positive on org policy detection | 8 comments; closed but indicates testing gap in policy validation |
| [#1632](https://github.com/github/copilot-cli/issues/1632) **Subfolder support for skills organization** — flat skills directory becomes unmanageable at scale | Quality-of-life for power users with 10+ custom skills; aligns with plugin ecosystem growth | 7 comments, 14 👍; active discussion on implementation approach |
| [#768](https://github.com/github/copilot-cli/issues/768) **Disable MCP servers by default to save tokens** — requested persistent toggle in `mcp-config.json` | Cost control is enterprise-critical; MCP servers can consume significant tokens | 6 comments, 36 👍; closed but sentiment suggests reopening |
| [#3028](https://github.com/github/copilot-cli/issues/3028) **Granular MCP permissions per-tool** — extend `trustedFolders` concept to individual MCP tools | Security hardening for enterprise adoption; follows principle of least privilege | 5 comments, 4 👍; early-stage but architecturally significant |
| [#2060](https://github.com/github/copilot-cli/issues/2060) **aarch64 Linux binary fails with exec format error** — install script downloads wrong architecture | Blocks ARM Linux adoption (Oracle/RHEL cloud instances, Apple Silicon VMs) | 3 comments; no 👍 but critical infrastructure impact |
| [#3609](https://github.com/github/copilot-cli/issues/3609) **Copy to clipboard broken since v1.0.56** — "copied" toast but clipboard unchanged | Fundamental UX regression; affects all platforms | 2 comments; filed today, likely to escalate |
| [#3596](https://github.com/github/copilot-cli/issues/3596) **"Not authenticated" error loading models on session resume** — new sessions work, resumed sessions fail | Session state corruption; breaks workflow continuity for power users | 1 comment, 2 👍; authentication reliability concern |
| [#3601](https://github.com/github/copilot-cli/issues/3601) **Bash tool strips non-ASCII characters via `LC_CTYPE=C`** — breaks CJK paths, emoji, accented characters | Internationalization bug; affects global user base | 1 comment; root cause clearly identified |
| [#3615](https://github.com/github/copilot-cli/issues/3615) **Natural-language session lookup for `--resume`** — fuzzy find past sessions without ID | Addresses session management friction as usage scales | 4 👍; zero comments but high vote-to-noise ratio indicates demand |

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24 hours:

| PR | Status | Assessment |
|----|--------|------------|
| [#3473](https://github.com/github/copilot-cli/pull/3473) **"Update project name in README"** | OPEN | **Spam/phishing** — contains Temu referral link and GCash promotion in Filipino. No legitimate code changes. Requires maintainer action to close and report. |

*No substantive PR activity to report. The absence of feature PRs amid high issue volume suggests potential bottleneck in contributor pipeline or maintainer bandwidth.*

---

## 5. Feature Request Trends

**MCP Ecosystem Maturation**
- Permission granularity (#3028, #768)
- Configuration durability (#1378, timeout persistence)
- Policy detection accuracy (#1707)

**Terminal UX & Accessibility**
- Clipboard reliability (#3609, #3622, #3605)
- Keyboard shortcut rationalization (#3620 — Ctrl+C overload)
- Streaming output controls (#3614 — hide tool call noise)

**Session & Context Management**
- Natural-language session discovery (#3615)
- Context retention improvements (#3623, #3621 — auto-compaction fixes)
- Resume ergonomics (#1914 — `-r` shorthand, now closed)

**BYOM & Local Inference**
- Generic OpenAI-compatible endpoint support (#3624 — LM Studio, Ollama, llama.cpp)

---

## 6. Developer Pain Points

| Category | Severity | Description |
|----------|----------|-------------|
| **Clipboard/Copy Regression** | 🔴 Critical | Multiple independent reports (#3609, #3622, #3605) since v1.0.56 suggest systemic terminal rendering or OS integration failure; blocks basic workflow |
| **Model List Parity** | 🔴 Critical | CLI as second-class citizen to VS Code Copilot (#1703) undermines "unified Copilot" value proposition |
| **Session State Fragility** | 🟡 High | Authentication loss on resume (#3596), infinite compaction loops (#3621), rapid context loss (#3623) indicate state management debt |
| **Internationalization** | 🟡 High | `LC_CTYPE=C` default (#3601) and fish shell incompatibility (#3619) show insufficient cross-platform shell testing |
| **MCP Enterprise Readiness** | 🟡 High | Permission, cost control, and policy detection gaps block secure organizational deployment |
| **ARM Linux Support** | 🟡 Medium | aarch64 install failure (#2060) excludes growing cloud ARM instance market |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-06-01.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-02

## Today's Highlights

No new release dropped today, but community activity centered on two critical areas: **session integrity** and **authentication safety**. A newly reported bug reveals historical images being resent on CLI restart, potentially leaking context across sessions, while a fresh PR hardens OAuth token handling against partial-save corruption.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2413](https://github.com/MoonshotAI/kimi-cli/issues/2413) | **Restarting CLI resends historical images, polluting sessions** | **Privacy/UX critical**: Images from web client persist across CLI restarts and get re-injected into unrelated conversations. Affects multi-platform (Ubuntu, Windows). | 🔥 **New today**, 0 comments — likely under triage. Cross-client state leakage is a severe trust issue. |
| [#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914) | **Installation blocked in GitHub-restricted regions due to uv installer fetching from GitHub Releases** | **Accessibility barrier**: Hard dependency on GitHub infrastructure excludes users in CN and other restricted regions. Installation fails before CLI even runs. | Closed without comment — resolution unclear; may need follow-up on mirror/CDN strategy. |

---

## Key PR Progress

| # | PR | Feature / Fix | Technical Depth |
|---|-----|-------------|-----------------|
| [#2414](https://github.com/MoonshotAI/kimi-cli/pull/2414) | **fix(auth): avoid persisting OAuth token before config validation** | **Transactional safety for credentials**: Validates model list + default-model selection *before* writing OAuth tokens; rolls back on config-save failure. Adds regression tests for 4 edge cases (list_models failure, empty models, rollback, happy path). | Hardens against partial-auth states that could lock users out or leave stale tokens. |
| [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386) | **fix(session): map undo wire turns to context turns** | **Fixes `/undo` and fork corruption**: Wire-level `TurnBegin` indices were incorrectly reused for context truncation when slash commands (no user message) created wire turns without context entries. | Resolves #1974, relates to #2049. Critical for session reliability with local commands. |
| [#2389](https://github.com/MoonshotAI/kimi-cli/pull/2389) | **fix(tools): include trailing output in error briefs; render as plain text** | **Better debugging UX**: Failed shell commands now surface trailing output in error briefs; renders as plain text to avoid terminal formatting artifacts. | Merged. Includes Devin review badge — indicates automated review pipeline active. |
| [#1741](https://github.com/MoonshotAI/kimi-cli/pull/1741) | **feat: add `/copy` command for latest assistant response** | **Clipboard integration**: Copies last assistant response to system clipboard via new `src/kimi_cli/utils/clipboard.py`. | Long-running PR (April 3). Resolves #1725. Cross-platform clipboard handling is non-trivial. |

---

## Feature Request Trends

Based on active PRs and recent Issues, the community is pushing toward:

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Session state hygiene** | #2413 (image leakage), #2386 (undo/context mapping) | 🔥 Active — multi-client sync is fragile |
| **Authentication robustness** | #2414 (transactional OAuth), #1914 (install-time auth deps) | Growing — enterprise/restricted-region needs |
| **Shell productivity commands** | #1741 (`/copy`), implicit demand for `/edit`, `/export` | Steady — CLI power-user ergonomics |
| **Tool output observability** | #2389 (error briefs), related tooling PRs | Maturing — debugging shell tool failures |

---

## Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Cross-client state leakage** | Images/web context bleeding into CLI sessions on restart (#2413) | 🔴 **High** — breaks session isolation expectation |
| **Fragile installation in restricted networks** | Hard dependency on GitHub Releases for uv bootstrap (#1914) | 🔴 **High** — blocks entire user populations |
| **Session undo/fork corruption** | Wire/context turn mismatch causing data loss (#2386) | 🟡 **Medium-High** — core reliability gap |
| **Credential partial-write vulnerability** | OAuth saved before validation complete (#2414) | 🟡 **Medium** — security hygiene, now addressed |
| **Missing native clipboard/export workflows** | Manual copy-paste of responses (#1741) | 🟢 **Low-Medium** — QoL, PR in flight |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli. For real-time updates: watch releases, subscribe to #2413 for session privacy fix progress.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-02

## Today's Highlights

The v1.15.13 release has triggered a wave of MCP-related regressions, with multiple reports of MCP servers disappearing from the Desktop UI despite functioning in CLI. Meanwhile, community pressure is mounting for OpenCode Go pricing adjustments following DeepSeek V4 Pro's permanent 75% API price cut, and contributor kitlangton opened a critical TUI fix addressing live message loss during session hydration.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction | Top-voted feature request (59 👍, 42 comments); strikes at core business model fairness. Users argue OpenCode Go's fixed limits no longer reflect actual API costs. | Strong consensus; multiple users comparing to competitor pricing |
| [#16331](https://github.com/anomalyco/opencode/issues/16331) | Permissions ignored | Long-running permissions system failure (40 comments); `opencode.json` deny rules silently bypassed. Critical security concern for teams handling sensitive files. | Frustrated; workarounds involving filesystem-level blocks |
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | TUI fails on Alpine Linux (musl) in 1.14.50: getcontext symbol not found | Regression breaking container/edge deployments. Alpine is standard for Docker-based CI/CD pipelines. | 12 👍; users pinned to 1.14.48 awaiting fix |
| [#29786](https://github.com/anomalyco/opencode/issues/29786) | Opus 4.8 bug in dev branch | Sub-agent failure in bleeding-edge Anthropic integration; blocks users testing Claude Opus improvements | 3 👍; concern about dev branch stability |
| [#8832](https://github.com/anomalyco/opencode/issues/8832) | opencode not respecting permissions | Duplicate pattern to #16331 but with bash command gating failures; indicates systemic permissions architecture problem | 7 👍; merged discussion with #16331 suggested |
| [#30104](https://github.com/anomalyco/opencode/issues/30104) | Desktop app MCP tab shows 'No MCPs configured' despite MCP servers being connected | **v1.15.13 regression** — CLI/Desktop config parity broken; affects Windows users primarily | 9 👍; multiple "me too" confirmations |
| [#30265](https://github.com/anomalyco/opencode/issues/30265) | MCP Broken on v1.15.13 | Confirms #30104 as widespread; empty MCP list with unchanged configs | 3 👍; urgent tone |
| [#30291](https://github.com/anomalyco/opencode/issues/30291) | MCP filesystem tools bypass plan mode `edit: deny` permission rule | **Security-critical**: MCP tools circumvent core permission system entirely; plan mode guarantees broken | Fresh report, awaiting maintainer response |
| [#22813](https://github.com/anomalyco/opencode/issues/22813) | thinking block signature lost when model differs, breaking multi-turn with extended thinking | Deep architectural bug in Anthropic extended thinking; corrupts conversation state mid-session | 10 👍; affects power users relying on reasoning models |
| [#30126](https://github.com/anomalyco/opencode/issues/30126) | High CPU and Memory usage on macOS ARM64 | Performance regression on Apple Silicon (100%+ CPU, ~2.5GB); resource leak suspected in v1.15.13 | New report, no 👍 yet but high severity |

---

## Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|--------------|
| [#30300](https://github.com/anomalyco/opencode/pull/30300) | fix(tui): preserve live parts during session hydration | **OPEN** | Critical TUI reliability fix by contributor kitlangton: prevents live assistant messages from being overwritten by stale HTTP snapshot data during session load. Includes regression test. |
| [#30201](https://github.com/anomalyco/opencode/pull/30201) | feat(minimax): add MiniMax-M3 model with updated configurations | **CLOSED** | Adds MiniMax-M3 support; tested and merged rapidly following #30210 feature request. |
| [#30190](https://github.com/anomalyco/opencode/pull/30190) | fix(opencode): make OpenRouter prompt cache 1h TTL opt-in via env | **OPEN** | Addresses #16848; extends OpenRouter's default 5-minute cache TTL to 1 hour via `OPENCODE_OPENROUTER_CACHE_TTL` environment variable. |
| [#30284](https://github.com/anomalyco/opencode/pull/30284) | fix(opencode): expose OpenRouter reasoning variants for more models | **CLOSED** | Expands reasoning effort variants (`low`/`medium`/`high`) to DeepSeek V4 Pro and other reasoning-capable models on OpenRouter; previously GPT/Gemini 3/Claude-only. |
| [#30293](https://github.com/anomalyco/opencode/pull/30293) | fix(ui): heal incomplete backticks in streaming text rendering | **OPEN** | Fixes truncated code blocks in streaming responses; resolves long-standing #15774 by patching `markdown-stream.ts` partial chunk handling. |
| [#25358](https://github.com/anomalyco/opencode/pull/25358) | Preserve workspace adapter context | **CLOSED** | Architectural refactor by kitlangton: Effect-native workspace adapters with Promise-based plugin boundary; fixes HttpApi workspace context loss. |
| [#25357](https://github.com/anomalyco/opencode/pull/25357) | feat(provider): add preserveReasoningInContent config option | **CLOSED** | Fixes Qwen `preserve_thinking` interoperability; adds `preserveReasoningInContent` flag for provider-specific reasoning handling. |
| [#25180](https://github.com/anomalyco/opencode/pull/25180) | fix: enable auto-compaction for sub-agents and improve context overflow detection | **CLOSED** | Fixes infinite hang on sub-agent context overflow; compaction now triggers properly for nested agents. |
| [#25255](https://github.com/anomalyco/opencode/pull/25255) | fix(processor): fix doom loop detection scope and filter order | **CLOSED** | Corrects two bugs in self-correction loop detection: expands scope beyond single message, fixes filter ordering that missed repeated tool calls. |
| [#25245](https://github.com/anomalyco/opencode/pull/25245) | feat(processor): add plugin stream hooks for tool streaming lifecycle | **CLOSED** | New plugin API: `tool.stream.before`, `tool.stream.transform`, `tool.stream.after` hooks for UI customization without execution interference. |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Pricing/usage limit adjustments** | #28846 (DeepSeek V4 Pro 75% cut), #14848 (billing sync lag) | High — directly tied to competitive positioning |
| **Minimax model expansion** | #30210 → #30201 (M3 merged), #13362 (M2.5) | Completed; Chinese model provider ecosystem growing |
| **Enhanced MCP ecosystem** | #7769 (git submodules desktop), #5200 (`/compact` via Responses API), plugin stream hooks (#25245) | Active; MCP becoming central integration point |
| **Permission system hardening** | #16331, #8832, #27436, #30291 — all permissions ignored/bypassed | Critical mass; architecture may need redesign |
| **OpenRouter provider maturity** | #16848 → #30190 (cache TTL), #30284 (reasoning variants) | Steady incremental improvements |

---

## Developer Pain Points

1. **MCP regressions in v1.15.13** — Desktop UI fails to display configured MCPs (#30104, #30265, #30286, #30130), while CLI works. Suggests race condition in PR #28937 and missing plugin-injected MCP support. Users cannot downgrade easily.

2. **Permissions system erosion** — Four distinct failure modes: filesystem deny rules ignored (#16331), bash gating broken (#8832), UI selection loops (#27436), and now MCP tools bypassing plan mode entirely (#30291). The `opencode.json` permission block is losing trust as a security boundary.

3. **Platform-specific fragility** — Alpine/musl breakage (#27589), macOS ARM64 resource leaks (#30126), terminal crashes on Debian/WezTerm (#28996). Cross-platform testing gaps apparent.

4. **Billing/subscription synchronization** — Credits added but not reflected in TUI (#14848), Go subscription activation failures (#29677). Payment state → runtime state pipeline unreliable.

5. **Streaming/rendering edge cases** — Auto-scroll death after manual intervention (#29992), incomplete backticks in markdown streams (#30293), live part loss during hydration (#30300). TUI's optimistic update model conflicts with async backend realities.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-02

## Today's Highlights

The Pi team shipped a flurry of TUI hardening fixes alongside provider compatibility updates for the rapidly evolving model landscape. Most critically, multiple "Working..." hang scenarios—including silent stream failures and OpenRouter `developer` role rejections—received targeted fixes, while CJK/IME and terminal image rendering saw substantial polish. No new release was cut in the past 24h despite the high merge velocity.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|--------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` can hang on Working... with zero-usage aborted turns | **OPEN** | The highest-engagement issue (50 comments, 25 👍) tracking a TUI deadlock where `gpt-5.5` streams silently fail; users must Escape-abort. Tagged `possibly-openclaw-clanker`, indicating suspected root cause in the agent loop. Community is actively reproducing and bisecting. |
| [#5089](https://github.com/earendil-works/pi/issues/5089) | Doesn't seem to respect `timeoutMs` past a certain value | **CLOSED** | Local/underpowered `llama.cpp` users hit hard timeouts despite disabling them. Closed with a fix clarifying timeout hierarchy between HTTP, provider, and internal abort controllers. |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | Session folder collision | **OPEN** | Path normalization collapses `/a/b/c/d` and `/a-b/c-d` into identical session folders (`--a-b-c-d--`). Niche but dangerous for users with similar path structures; awaits deterministic hashing or escaping fix. |
| [#5229](https://github.com/earendil-works/pi/issues/5229) | MiniMax on OpenRouter is broken | **OPEN** | OpenRouter rejects MiniMax's `developer` role message type. Mirrors [#5117](https://github.com/earendil-works/pi/issues/5117) (Qwen 3.7 Max); signals systemic friction as providers diverge from OpenAI's role vocabulary. |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | Make in-session model and thinking-level changes ephemeral by default | **OPEN** | UX proposal to decouple session-level overrides from persistent defaults, reducing accidental configuration drift. Three comments suggest maintainer interest; may shape upcoming settings redesign. |
| [#5286](https://github.com/earendil-works/pi/issues/5286) | Missing pricing info for Github Copilot models | **OPEN** | GitHub Copilot's new per-token pricing isn't reflected in Pi's cost tracking (`$0.000 (sub)` shown). Filed today; affects cost-conscious users migrating from flat subscriptions. |
| [#5294](https://github.com/earendil-works/pi/issues/5294) | Error: Request timed out | **OPEN** | `llama.cpp` backend with "infinite" timeout still aborts. User suspects hidden timeout layer; overlaps with [#5089](https://github.com/earendil-works/pi/issues/5089) but distinct enough to remain open for investigation. |
| [#5226](https://github.com/earendil-works/pi/issues/5226) | SDK embed requires package-adjacent `package.json` at runtime | **OPEN** | Bundler/embedded deployments break when Pi's `getPackageDir()` resolves to wrong location. Follow-up to [#5108](https://github.com/earendil-works/pi/issues/5108); blocks clean Vite/esbuild integrations. |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | Sessions hang on "working" when used with Anthropic subscription | **CLOSED** | Anthropic Enterprise users experiencing correlated hangs—closed as duplicate or fixed by today's stream error handling PRs. Rapid triage shows maintainers prioritizing hang-class bugs. |
| [#5261](https://github.com/earendil-works/pi/issues/5261) | Inject TUI config instead of reading `process.env` inside `pi-tui` | **CLOSED** | Architectural cleanup for testability and non-Node embeddings. Merged with six comments of design discussion on DI patterns. |

---

## Key PR Progress

| # | Title | Status | Feature / Fix |
|---|-------|--------|-------------|
| [#5310](https://github.com/earendil-works/pi/pull/5310) | fix(tui): guard against undefined children in Box and Container render/invalidate loops | **CLOSED** | Defensive fix for extension-rendered tool UIs where `undefined` children crashed the TUI renderer. Hardens contract between extensions and `pi-tui` layout engine. |
| [#5308](https://github.com/earendil-works/pi/pull/5308) | fix: sanitize local model artifacts in tool `prepareArguments` | **CLOSED** | Filters YAML frontmatter leakage and "thinking block" artifacts from local models (Qwen3.6, DeepSeek) that poison TypeBox validation. Critical for local-first workflows. |
| [#5306](https://github.com/earendil-works/pi/pull/5306) | Add system prompt options to extension commands | **OPEN** | Extensions gain ability to specify system prompt context per command invocation. Closes [#5305](https://github.com/earendil-works/pi/issues/5305); enables more agentic extension patterns. |
| [#5302](https://github.com/earendil-works/pi/pull/5302) | Add `ui_prompt_start`/`ui_prompt_end` extension events | **OPEN** | Lifecycle hooks for blocking UI dialogs, enabling status-bar integrations and terminal multiplexer awareness (tmux, cmux, neovim). |
| [#5296](https://github.com/earendil-works/pi/pull/5296) | fix(tui): keep Kitty images visible in WezTerm | **CLOSED** | Supersedes [#5233](https://github.com/earendil-works/pi/pull/5233). Fixes Kitty graphics protocol placement in WezTerm without regressing tall-image handling from [#4461](https://github.com/earendil-works/pi/issues/4461). |
| [#5235](https://github.com/earendil-works/pi/pull/5235) | Feat/issue 5129 tui overlay focus | **CLOSED** | Root fix for [#5129](https://github.com/earendil-works/pi/issues/5129): overlay focus returns to editor prematurely, leaving visible but dead overlays. Restores input ownership correctly. |
| [#5221](https://github.com/earendil-works/pi/pull/5221) | Fix OpenRouter reasoning instruction role | **CLOSED** | OpenRouter now uses `system` role for reasoning instructions while preserving `developer` for native OpenAI. Unblocks Qwen 3.7 Max, MiniMax, and future OpenRouter reasoning models. |
| [#5284](https://github.com/earendil-works/pi/pull/5284) | feat(ai): add MiniMax-M3 to minimax and minimax-cn | **CLOSED** | Adds 512K-context, natively multimodal MiniMax-M3 to both international and China endpoints. Includes reasoning support and pricing metadata. |
| [#5281](https://github.com/earendil-works/pi/pull/5281) | feat(coding-agent): Support keybindings for all commands | **OPEN** | Unifies built-in and extension command keybinding registration under `cmd.<name>` convention. Enables user-configurable shortcuts for extension-provided commands. |
| [#5277](https://github.com/earendil-works/pi/pull/5277) | feat: add `gitContextBoundary` setting to stop AGENTS.md ancestor walk at git root | **CLOSED** | Prevents `$HOME/AGENTS.md` from leaking into all projects when home is a git repo. Default-off; addresses privacy surprise for dotfiles managers. |

---

## Feature Request Trends

1. **Provider/model expansion velocity** — MiniMax-M3, Gemini 3.5 Flash, ZAI Coding Plan China, Anthropic Vertex all landed or requested in 48h. Pi's provider catalog is becoming a high-churn maintenance surface.
2. **Ephemeral/session-scoped configuration** — Multiple requests to make in-session overrides (model, thinking level) non-persistent, plus `/new`/`/clone` naming improvements. Suggests users want Pi to behave more like ephemeral shell sessions than persistent IDE state.
3. **Extension lifecycle observability** — `ui_prompt_start/end` events, `ctx.isInteractive`, and system prompt injection all point to extensions needing richer host integration hooks.
4. **Image/vision in CLI** — [#5279](https://github.com/earendil-works/pi/issues/5279) requests JPEG/PNG attachment over SSH; Gemma4 vision support mentioned. CLI multimodality remains underserved vs. web interfaces.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent hangs / "Working..." deadlock** | [#4945](https://github.com/earendil-works/pi/issues/4945), [#5291](https://github.com/earendil-works/pi/issues/5291), [#5290](https://github.com/earendil-works/pi/pull/5290), [#5294](github.com/earendil-works/pi/issues/5294) | 🔴 Critical — most upvoted open issue, multiple root causes (stream errors, timeout layers, provider roles) |
| **Role vocabulary fragmentation** | [#5229](https://github.com/earendil-works/pi/issues/5229), [#5117](https://github.com/earendil-works/pi/issues/5117), [#5221](https://github.com/earendil-works/pi/pull/5221) | 🟠 High — OpenAI's `developer` role incompatible with OpenRouter, MiniMax, others; requires per-provider normalization |
| **Bundler/embedded SDK fragility** | [#5226](https://github.com/earendil-works/pi/issues/5226), [#5261](https://github.com/earendil-works/pi/issues/5261) | 🟠 High — runtime `package.json` and `process.env` assumptions break Vite/esbuild and non-Node embeddings |
| **Timeout configuration confusion** | [#5089](https://github.com/earendil-works/pi/issues/5089), [#5294](https://github.com/earendil-works/pi/issues/5294) | 🟡 Medium — layering of HTTP, provider, and internal timeouts is opaque; "infinite" doesn't mean infinite |
| **CJK / terminal emulator edge cases** | [#5295](https://github.com/earendil-works/pi/pull/5295), [#5283](https://github.com/earendil-works/pi/pull/5283), [#5296](https://github.com/earendil-works/pi/pull/5296) | 🟡 Medium — wide-character boundary math and IME placement remain finicky across WezTerm, Kitty, tmux |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-02

## Today's Highlights

Qwen Code v0.17.0 nightly landed with a critical rewind fix for false "compressed turn" errors, while the community is actively stress-testing the new release with multiple stability reports surfacing around Ollama integration, MCP session reliability, and memory pressure handling. The project saw 50 active PRs with significant momentum on telemetry expansion, vim mode hardening, and standalone auto-update infrastructure.

---

## Releases

**[v0.17.0-nightly.20260601.1c48e4121](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260601.1c48e4121)** — Nightly build cutting toward v0.17.0 stable. Contains a targeted fix for a false "compressed turn" error during mid-turn message rewinds ([PR #4626](https://github.com/QwenLM/qwen-code/pull/4626)), plus routine release automation. Users on v0.16.x upgrade paths should monitor for the imminent stable tag.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#4657](https://github.com/QwenLM/qwen-code/issues/4657)** | Qwen Code + Ollama task completion failures in v0.17.0 | Regressions in local LLM workflows block core use case (code generation, file creation); affects Qwen 3.6 via OpenAI-compatible endpoint | 6 comments, active troubleshooting; may relate to timeout handling |
| **[#4604](https://github.com/QwenLM/qwen-code/issues/4604)** | "Body Timeout Error" causing terminated API calls | Infrastructure-level failure mode in web page processing workflows; classifier timeout logic suspected | 5 comments, needs-information status; user provided detailed `/about` output |
| **[#4676](https://github.com/QwenLM/qwen-code/issues/4676)** | Auto-mode classifier fails closed on timeout, blocking actions | Security/UX tension: conservative timeout defaults in AUTO approval mode create friction; proposed fix to loosen stage timeouts and disable thinking | 1 comment, 👍 1; author also has active PR #4572 on related hardening |
| **[#4624](https://github.com/QwenLM/qwen-code/issues/4624)** | `qwen --resume` child process memory leak → OOM | Critical stability issue: session/tool-call history accumulates without compression/release; long-running sessions crash | Closed after 2 comments, 👍 2; fix likely in v0.17.0 or PR #4654 diagnostics |
| **[#4686](https://github.com/QwenLM/qwen-code/issues/4686)** | Qwen3.7-max infinite repetition loop on Ghostty terminal | Model-specific streaming bug with `enable_thinking: true`; corrupts output with repetitive garbage tokens | 1 comment; terminal-specific (Ghostty v1.3.1), high-priority rendering issue |
| **[#4641](https://github.com/QwenLM/qwen-code/issues/4641)** | MCP server connection instability on Windows (3-5 of 8 servers connect) | Non-deterministic MCP session establishment blocks reliable tool use; Windows-specific flakiness | 1 comment; detailed reproduction table provided, needs triage |
| **[#4420](https://github.com/QwenLM/qwen-code/issues/4420)** | Windows UI token doubling / rendering corruption in v0.16.0 | CLI TUI completely unusable post-upgrade on Windows 11 + Git Bash; ANSI/terminal compatibility regression | 5 comments; P1 priority, persistent across versions |
| **[#4675](https://github.com/QwenLM/qwen-code/issues/4675)** | Vim mode Esc key leak, Enter submit failure, render lag | Interactive editing UX broken for vim users; multiple distinct input handling bugs bundled | 1 comment; active fix in PR #4677 |
| **[#4679](https://github.com/QwenLM/qwen-code/issues/4679)** | SDK: resume unfinished turn without synthetic "continue" prompt | API design gap forces consumers to inject Chinese "继续" messages; needs first-class session management primitive | 2 comments; roadmap/session-management tagged, welcome for PRs |
| **[#4615](https://github.com/QwenLM/qwen-code/issues/4615)** | Project-scoped `.mcp.json` with pending approval semantics | Security model enhancement: MCP servers in workspace should require explicit user approval before execution | 2 comments; aligns with credential-security scope, enterprise-relevant |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#4677](https://github.com/QwenLM/qwen-code/pull/4677)** | fix(cli): vim mode Esc leak, Enter submit, render lag + missing VIM commands | Comprehensive vim hardening: fixes Esc propagation to AppContainer, NORMAL-mode Enter submission, implements missing commands (`gg`, `G`, `w`, `b`, etc.) | Open, 2026-06-01 |
| **[#4572](https://github.com/QwenLM/qwen-code/pull/4572)** | Harden auto mode self-modification checks | Prevents privilege escalation via workspace edit fast-paths; splits classifier per stage with targeted guardrails for config/instruction/hook/MCP surfaces | Open, 2026-05-27 |
| **[#4682](https://github.com/QwenLM/qwen-code/pull/4682)** | feat(telemetry): expand daemon telemetry route coverage | Completes observability gap: adds spans for recap, model, shell, detach, approval-mode, MCP routes; fixes trailing-slash regex mismatch causing silent span loss | Open, 2026-06-01 |
| **[#4629](https://github.com/QwenLM/qwen-code/pull/4629)** | feat(cli): standalone auto-update support | Self-healing distribution: SHA256-verified, atomic replacement for standalone installs (non-npm); reduces version fragmentation in enterprise deployments | Open, 2026-05-29 |
| **[#4649](https://github.com/QwenLM/qwen-code/pull/4649)** | feat(core): inject context env vars into shell subprocesses | `QWEN_CODE_SESSION_ID`, `AGENT_ID`, `PROMPT_ID` propagation to all spawn points; enables traceability in SubAgent SQL/Python scripts | Open, 2026-05-31 |
| **[#4654](https://github.com/QwenLM/qwen-code/pull/4654)** | feat(core): auto-dump memory diagnostics on pressure detection | Pre-emptive OOM forensics: `MemoryDiagnosticsDumper` writes `.qwen/<project>/diagnostics/` before cleanup on hard/critical pressure | Open, 2026-05-31 |
| **[#4647](https://github.com/QwenLM/qwen-code/pull/4647)** | fix(clipboard): platform-native Linux image paste | Replaces `@teddyzhu/clipboard` with `wl-paste`/`xclip` for WSL2+Wayland compatibility; closes long-standing #3517, #2885 | Open, 2026-05-30 |
| **[#4410](https://github.com/QwenLM/qwen-code/pull/4410)** | feat(telemetry): Phase 3 — `qwen-code.subagent` span with concurrent isolation | Structural trace improvement: subagent invocations get proper span subtrees instead of interleaving with concurrent siblings; completes #3731 Phase 3 | Open, 2026-05-21 |
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** | refactor(serve): extract DaemonWorkspaceService from AcpSessionBridge | Architecture cleanup: separates session bridge from workspace ops (status/init/tool-toggle/MCP-restart); enables cleaner daemon API evolution | Open, 2026-05-27 |
| **[#4520](https://github.com/QwenLM/qwen-code/pull/4520)** | fix(core): truncate model-facing tool output | Bounds `llmContent` string length in `CoreToolScheduler` before history recording; prevents unbounded memory growth from verbose tool returns | Open, 2026-05-25 |

---

## Feature Request Trends

1. **MCP Security & Governance** — Multiple requests for project-scoped configuration (#4615), pending approval workflows, and connection stability (#4641). Enterprise adoption is driving demand for sandboxed, auditable tool server management.

2. **Session Lifecycle Control** — Native turn resumption (#4679), memory pressure diagnostics (#4654), and `--resume` stability (#4624) show maturing expectations around long-running agent sessions that survive interruption.

3. **TUI/CLI Polish** — Sustained investment in rendering correctness (Windows ANSI #4420, Ghostty loops #4686, statusline customization #4669) and vim fidelity (#4675/#4677). Users expect terminal-native feel comparable to Claude Code.

4. **Pricing Model Feedback** — #4614's complaint about qwen3.7-max consumption rates (59 RMB package depleted in 15 min) signals pricing sensitivity among Chinese developers; requests for higher-tier "all-you-can-eat" plans mirror OpenAI/Anthropic structures.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Local LLM Reliability** | #4657 (Ollama/Qwen 3.6 failures), #3384 (OpenAI-compatible local LLM setup friction), #4604 (timeout errors) | High — core value proposition for self-hosted workflows |
| **Memory/Performance at Scale** | #4624 (OOM on resume), #4676 (classifier timeouts), #4525/#4528 (token estimation/compression edge cases) | High — production session stability |
| **Windows-First Bugs** | #4420 (UI corruption), #4641 (MCP flakiness), #4672 (auto-accept file edit failures) | Medium-High — platform parity gap |
| **Vim/Interactive Mode Fragility** | #4675 (Esc leak, Enter failure), #4669 (statusline colors) | Medium — power-user workflow disruption |
| **Documentation-to-Behavior Gap** | #3384 (settings.json configuration confusion), #4614 (pricing surprise) | Medium — onboarding and expectation management |

---

*Digest compiled from github.com/QwenLM/qwen-code activity through 2026-06-01.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-02

## Today's Highlights

The project officially completes its rebrand to **CodeWhale** with v0.8.49, shipping deprecation shims for legacy `deepseek` binaries that will be removed in v0.9.0. Community activity surged around migration concerns, Windows TUI stability, and shell execution permissions—three themes that dominated both issues and the v0.8.50 triage harvest. The maintainer team pushed extensive documentation and configuration fixes to ease the transition.

---

## Releases

### [v0.8.49](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.49) — Rebrand to CodeWhale
- Project renamed to **CodeWhale**; legacy `deepseek` and `deepseek-tui` binaries remain as deprecation shims for one release cycle
- Shims print a warning and forward to `codewhale` / `codewhale-tui`; complete removal scheduled for v0.9.0
- Migration guide available at `docs/REBRAND.md`

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1615](https://github.com/Hmbown/CodeWhale/issues/1615) | Docker garbled output / "garbage" crash | **Most commented issue (192)**—Docker deployment fails with terminal corruption, requiring Linux server reboots. Represents critical reliability gap for containerized workflows. | Frustrated; user calls project "garbage" and questions release quality |
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | "Turn stalled — no completion signal received" in YOLO mode | **Emerging high-priority bug**—YOLO mode freezes irrecoverably, breaking autonomous agent workflows. `continue` fails to resume. | Active triage; duplicate #2496/#2497 closed, indicating pattern recognition |
| [#1969](https://github.com/Hmbown/CodeWhale/issues/1969) | Migration path for sessions/skills after rebrand | **Trust-breaking uncertainty**—users cannot confirm whether years of workspace state survive the rebrand; REBRAND.md lacks explicit migration guarantees. | Anxious; user explicitly notes importance and lack of documentation |
| [#1757](https://github.com/Hmbown/CodeWhale/issues/1757) | Ctrl+C cancel should restore input to Composer | UX polish gap—terminal copy/paste friction makes re-editing cancelled prompts tedious, especially with side panel interference. | Constructive proposal with detailed interaction spec |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | Typed persistent permission rules for execpolicy | Security architecture—extends execution policy from ephemeral approvals to durable, scoped rules (tool/command/path × allow/deny/ask). | Design-heavy; aligns with v0.9.0 maturity goals |
| [#534](https://github.com/Hmbown/CodeWhale/issues/534) | v0.9.0 Phase 3: graph-structured memory store | **Strategic roadmap**—graduates flat markdown memory to typed, salience-weighted graph. Defines long-term differentiation from Claude Code's integration shape. | Maintainer-authored; signals architectural direction |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | Windows TUI freeze (crossterm poll) | **Platform equity issue**—intermittent complete UI unresponsiveness on Windows 11 with logs/thread-dumps captured. Recurring across versions. | Detailed bug report with diagnostic artifacts; awaiting root cause |
| [#2523](https://github.com/Hmbown/CodeWhale/issues/2523) | `exec_shell` unavailable despite `allow_shell = true` + `trusted = true` | Configuration system bug—workspace-level opt-in ignored by TUI merge logic, breaking local development workflows on Windows. | User validated config; maintainer acknowledged via PR #2529 |
| [#2328](https://github.com/Hmbown/CodeWhale/issues/2328) | `exec_shell` mode availability inconsistent (YOLO vs Agent) | Documentation/behavior mismatch—tool silently restricted by mode without docs disclosure, violating principle of least surprise. | Bug report with clear repro steps; exposes mode taxonomy opacity |
| [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) | No cross-session memory persistence | Core capability gap—memory writes ignored on restart, defeating agent continuity. User notes "response speed is good" but utility degraded. | Frustrated; contrasts with competitive expectations set by Claude Code |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2504](https://github.com/Hmbown/CodeWhale/pull/2504) | **v0.8.50 triage harvest** | Aggregates fixes for state migration (#2082), stale-session mock flakiness, and release stewardship post-v0.8.48/49. Does not tag release. | Open — maintainer coordination |
| [#2555](https://github.com/Hmbown/CodeWhale/pull/2555) | Close stale-session mock responses cleanly | Fixes macOS CI flake in streamable HTTP retry tests by ensuring graceful socket shutdown before drop. | Open — test infrastructure |
| [#2557](https://github.com/Hmbown/CodeWhale/pull/2557) | Bang shell command shortcut (`!cmd`) | Adds `! <command>` composer syntax for direct shell execution without model round-trip; closes #1546. | Open — UX enhancement |
| [#2554](https://github.com/Hmbown/CodeWhale/pull/2554) | Merge agent crate into config | Refactors 539-line `ModelRegistry` into config crate where it conceptually belongs; reduces workspace complexity. | Open — code health |
| [#2549](https://github.com/Hmbown/CodeWhale/pull/2549) | Clarify state migration paths in rebrand docs | Documents `.codewhale` primary / `.deepseek` fallback behavior for sessions, tasks, skills, MCP config, and manual installs. | Open — addresses #1969 anxiety |
| [#2550](https://github.com/Hmbown/CodeWhale/pull/2550) | Clarify local model tool calls | Explains that CodeWhale executes provider-returned `tool_calls`, not raw JSON assistant text; adds troubleshooting for non-tool-calling local endpoints. | Open — docs, addresses #2361 |
| [#2524](https://github.com/Hmbown/CodeWhale/pull/2524) | Allow `/dev/tty` in macOS seatbelt profile | Unblocks `sshpass`, `sudo` in TTY-backed shell tasks by adding `/dev/tty` to sandbox allowlist; fixes #2372. | Open — security/compat |
| [#2540](https://github.com/Hmbown/CodeWhale/pull/2540) | Read Wayland clipboard via `wl-paste` | Prioritizes `wl-paste` over arboard for non-wlroots compositors (niri, etc.); fixes silent copy failure #1920. | Open — Linux compat |
| [#2529](https://github.com/Hmbown/CodeWhale/pull/2529) | Honor workspace shell opt-in | Fixes config merge logic to respect user-level `[workspace]` `allow_shell` entries; resolves #2523. | Open — bugfix |
| [#2551](https://github.com/Hmbown/CodeWhale/pull/2551) | Mention browser completions mode | Adds `mention_menu_behavior = "browser"` for deterministic directory-tree @-mention navigation vs. default fuzzy/frecency. | Open — power-user UX |

---

## Feature Request Trends

1. **Memory & Session Continuity** — Cross-session persistence (#2492), graph-structured memory (#534), and session fork/branching (#2082) dominate architectural requests. Users expect agent state to survive restarts and evolve structurally.

2. **Permission & Security Granularity** — Typed execution policies (#1186), PreToolUse/PostToolUse hooks (#1917), and sandbox refinement (#2524) show demand for fine-grained, auditable control over tool execution.

3. **Windows Platform Parity** — TUI freezes (#1812), config path fragmentation (#2369), shell tool gating (#2523), and clipboard issues indicate Windows remains a second-class citizen despite significant user share.

4. **Local/Alternative Model Ergonomics** — Better documentation (#2550), built-in provider support (#2478 for opencode-go), and tool-call reliability (#2361) reflect growing non-OpenAI usage.

5. **TUI Resilience & Control** — Cancel/recover flows (#1757), context saturation handling (#1722), and input focus management (#2261) reveal maturity gaps in the terminal interaction model.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Rebrand migration uncertainty** | High | #1969, #2549, scattered config path issues (#2369, #2516) — users fear state loss and lack clear runbooks |
| **"Turn stalled" / freeze errors** | **Critical** | #2487, #2496, #2497, #1812 — YOLO mode and Windows both exhibit hard stalls; damages trust in autonomous mode |
| **Shell execution friction** | High | #2523, #2328, #2372, #2529 — configuration complexity, mode restrictions, and sandboxing create "works/doesn't work" unpredictability |
| **Windows-specific instability** | High | #1812, #2261, #2369, #2523 — TUI freezes, focus leaks, path fragmentation, seatbelt gaps |
| **Local model tool-call failures** | Moderate | #2361, #2438, #2550 — users misattribute provider JSON output to CodeWhale bugs; documentation insufficient |
| **Clipboard / terminal integration** | Moderate | #1920, #1757, #2494 — Wayland, macOS iTerm2, and copy-paste workflows all have friction points |

---

*Digest compiled from github.com/Hmbown/CodeWhale activity 2026-06-01/02.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*