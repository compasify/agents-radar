# AI CLI Tools Community Digest 2026-05-12

> Generated: 2026-05-12 00:22 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Comparison Report
**Date: 2026-05-12 | Compiled from community digest data**

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a multi-polar market with eight actively developed agents, yet converges on a common crisis: **agentic reliability lags far behind agentic feature shipping**. Every major tool shipped autonomy-enhancing features this cycle—Claude Code's `/goal` command, Copilot CLI's `/autopilot`, Gemini's scheduled agent delegation—while simultaneously fielding urgent reports of silent failures, phantom tasks, and destructive autonomous behavior. The sector is experiencing a **trust inflection point** where power users demand observability and safety guarantees before adopting deeper automation. Meanwhile, Windows remains a consistent second-class platform across the ecosystem, and context/token management has become the universal technical bottleneck as models scale to 1M+ tokens.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release | Release Momentum |
|------|:-----------:|:---------:|---------|----------------|
| **Claude Code** | 10 hot issues tracked | 1 | v2.1.139 (major) | High — Agent View, `/goal` shipped; low PR volume suggests release freeze |
| **OpenAI Codex** | 10 hot issues | 10+ | rust-v0.131.0-alpha.6 | Moderate — alpha cadence; heavy PR activity on safety/cost controls |
| **Gemini CLI** | 10 hot issues | 10 | v0.42.0-nightly | High — nightly rhythm; P1 OAuth fix, adaptive token calc in flight |
| **GitHub Copilot CLI** | 10 hot issues | 1 | v1.0.45 | Low — single PR suggests private branch development; transient API crisis |
| **Kimi Code CLI** | 10 hot issues | 14 | v1.42.0 | Very High — most PRs in dataset; session persistence, vLLM fixes active |
| **OpenCode** | 10 hot issues | 10+ | v1.14.48 | High — 6 Effect migration PRs alone; architectural modernization push |
| **Pi** | 19 issues | 8 | None | Moderate — refactor-driven closure wave; new `organization-agent` package |
| **Qwen Code** | 10 hot issues | 10 | v0.15.10-nightly | Moderate — nightly cadence; structural review controversy; daemon mode progress |
| **DeepSeek TUI** | 10+ | 10+ | v0.8.29 | High — 20 community PRs merged; flicker fixes, MCP transport hardening |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Autonomous agent observability** | Claude Code, Codex, Gemini, DeepSeek TUI | "Still working" vs. "stuck" signals; Agent View dashboard (Claude); retry visibility (Gemini #26876); notification parity (DeepSeek #1281) |
| **Tiered safety/sandboxing** | Codex, OpenCode, Gemini, Claude Code | `--not-so-yolo` sandboxed mode (Codex); seatbelt equivalent (OpenCode #2242); tool result transform hooks for PII redaction (Claude #18653); permission inheritance (OpenCode #24293) |
| **Context/token management** | All eight tools | Adaptive token calculation (Gemini #26888); compaction reliability (Codex #14860); cache hit rate optimization (DeepSeek #1177); truncation policies (Qwen #4049); MEMORY.md overhaul (Claude #40614) |
| **Windows platform parity** | Claude Code, Codex, Kimi, Pi, Copilot, DeepSeek TUI | Native installer (Codex #13993); `fcntl` crash (Kimi #2202); auth/connector failures (Claude #47104); PowerShell fallback (Copilot); scroll demon (DeepSeek); silent install failure (Pi #4399) |
| **MCP lifecycle hardening** | Claude Code, Codex, Kimi, DeepSeek TUI, Copilot | Server connection failures (Claude #39790); thread-scoped status (Codex #21624); tool reference poisoning (Kimi #2223); HTTP proxy/CRLF SSE (DeepSeek); sub-agent MCP drop (Copilot #2630) |
| **Session persistence/continuity** | Kimi, Qwen, Pi, Gemini | `--continue` fallback (Kimi #2239); channel session persistence (Qwen #3865); resume for legacy sessions (Gemini #26577); timing metadata persistence (Pi #4317) |
| **Local/self-hosted model compatibility** | Kimi, Qwen, OpenCode, Claude Code | vLLM empty tools fix (Kimi #2233/#2237); Qwen3.6 `preserve_thinking` (Kimi #2234); `@google/genai` decoupling (Qwen #4063); disable tool streaming (OpenCode #26850); context window settings honored (Qwen #3878) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|-----------|---------|----------------------|
| **Enterprise security & compliance** | Claude Code | Tool result transform hooks (#18653) for PII redaction; highest enterprise engagement on security architecture |
| **Cost control & billing transparency** | Codex, DeepSeek TUI | Codex: usage-limit pause mechanics, `--not-so-yolo`; DeepSeek: intensive cache diagnostics, competitive benchmarking against Claude Code |
| **Architectural modernization** | OpenCode, Pi | OpenCode: Effect migration, native OpenAI runtime opt-out from AI SDK; Pi: `organization-agent` multi-agent package, gbrain memory extension |
| **Multi-provider abstraction** | Qwen Code | Explicit structural review of Google types lock-in (#4063); most provider compatibility surface (DashScope, DeepSeek, GLM, 智谱, Bedrock) |
| **IDE/editor integration depth** | Copilot CLI | VS Code Copilot ecosystem alignment; prompt file reuse (#98); OpenTelemetry GenAI conventions for observability |
| **Internationalization/CJK** | Kimi, Qwen | Native Chinese path handling, localization; Qwen's 24-chapter daemon mode design series |
| **TUI/terminal fidelity** | DeepSeek TUI | Most terminal-specific engineering (DECSET 2026, BMP glyph replacement, tmux cursor); npm distribution model |
| **Agent autonomy features** | Claude Code | `/goal` completion conditions, Agent View dashboard, `/loop` — most explicit autonomy primitives |

**Target user divergence**: Claude Code and Copilot CLI target enterprise developers with security/IDE integration; Codex and Gemini balance consumer and prosumer with cloud tiers; Kimi, Qwen, and DeepSeek TUI serve local/self-hosted and cost-sensitive developers; OpenCode and Pi attract architecture-conscious extensibility builders.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **Highest velocity** | Kimi Code CLI, DeepSeek TUI | 14 PRs (Kimi), 20 merged community PRs (DeepSeek); rapid issue-to-PR turnaround; active contributor cultivation |
| **Strong iteration** | OpenCode, Gemini CLI, Claude Code | Architectural migrations (OpenCode), nightly releases with P1 fixes (Gemini), major feature drops with immediate stress-testing (Claude) |
| **Steady/moderate** | Codex, Qwen Code, Pi | Alpha cadence (Codex), nightly with structural controversy (Qwen), refactor consolidation (Pi) |
| **Concerning patterns** | Copilot CLI | Single PR in 24h despite 30 new issues; transient API errors across providers suggest infrastructure strain; possible private branch divergence from community |

**Maturity signals**: Claude Code has highest issue engagement depth (23 comments on security hook); Codex has longest-running unresolved issue (#14593, 574 comments, 251 👍); Gemini shows maintainer-tracked internal quality infrastructure (#24353); OpenCode demonstrates architectural discipline (Effect migration, schema boundaries); Pi risks community trust with mass `closed-because-refactor` closures without verified fixes.

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Agentic trust deficit** | Mass deletion (Gemini #26713), phantom `/loop` wake-ups (Claude), false GOAL success (Gemini #22323), fabricated git output (Gemini #26894), infinite thinking (Qwen #4055) | **Design for failure**: Build explicit verification steps, state checksums, and human-in-the-loop checkpoints before unattended automation |
| **Context architecture as competitive moat** | MEMORY.md limits (Claude), compaction fragility (Codex), token calculation bugs (Gemini), under-counting (DeepSeek), settings ignored (Qwen) | **Invest in context telemetry**: Instrument your own token flows; don't trust vendor cache promises; design for truncation |
| **Windows enterprise adoption barrier** | Disproportionate bug volume across all tools; installer gaps, auth failures, TUI corruption | **Validate Windows early**: CI/CD must include Windows terminals, not just WSL; test PowerShell and cmd.exe separately |
| **MCP as integration standard with lifecycle debt** | Every tool has MCP connection, teardown, or scoping bugs | **Wrap MCP calls with timeouts and circuit breakers**: Assume server startup/teardown will hang; design for degraded mode |
| **Cost transparency as user expectation** | 574-comment Codex thread, DeepSeek benchmarking, Claude cache instrumentation (#47098) | **Build usage dashboards**: Users now expect per-session, per-tool, per-model cost visibility; opaque billing erodes trust |
| **Multi-provider abstraction under stress** | Qwen's Google types lock-in, Kimi's vLLM fixes, OpenCode's tool streaming disable, Copilot's third-party model failures | **Isolate provider assumptions**: Vendor-specific types leak architecture; design protocol adapters at boundaries |
| **Terminal as persistent IDE alternative** | Vim modal editing requests (Codex #9184), Shift+Enter ergonomics (Kimi #2121), right-click file explorer (OpenCode), touch optimization (OpenCode #18767) | **Terminal UX is product UX**: Invest in TUI stability, input ergonomics, and session management parity with GUI editors |

---

*Report compiled from 9 community digests representing 80+ issues and 70+ PRs. Data current as of 2026-05-12.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-12 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pervasive formatting pain point in every Claude document output |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skill structure (20%), security posture (25%), and documentation completeness | First systematic quality gate for the Skills ecosystem itself |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Redesigned for single-conversation actionability—specific, steerable guidance without ambiguity | Clarity vs. verbosity tradeoff; benchmark for "followable" instruction design |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS/ODF files; ISO standard open-source document format | Enterprise interoperability demand; LibreOffice ecosystem bridge |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full-stack testing philosophy (Testing Trophy) through unit, React component, and integration patterns | AAA pattern standardization; what-NOT-to-test guidance |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model leverage |
| 7 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Deploy full-stack web apps to public URLs directly from Claude via [AppDeploy](https://appdeploy.ai/) | End-to-end deployment automation; recently updated (2026-05-04) |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad platform coverage: ITSM, ITOM, ITAM, FSM, HRSD, SecOps, VR, IntegrationHub | Most comprehensive enterprise ITSM skill proposal |

---

## 2. Community Demand Trends

Derived from highest-comment Issues, ranked by engagement:

| Trend | Issue | Votes | Demand Signal |
|:---|:---|:---|:---|
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) | 👍 7 | Enterprise teams need native shared libraries; Slack/Teams file-passing is friction-critical blocker |
| **Skill Distribution Integrity** | [#189](https://github.com/anthropics/skills/issues/189) | 👍 8 | `document-skills` vs `example-skills` duplication wastes context window; plugin manifest enforcement needed |
| **Trust Boundary / Security** | [#492](https://github.com/anthropics/skills/issues/492) | 👍 2 | `anthropic/` namespace impersonation risk; community vs. official skill provenance must be distinguishable |
| **Eval/Testing Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) | 👍 6 | `run_eval.py` 0% trigger rate for `claude -p`; skill invocation validation is broken |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#1102](https://github.com/anthropics/skills/issues/1102) | — | Skills-as-MCPs standardization; data compression for MCP database returns |
| **AWS Bedrock Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) | — | Multi-cloud deployment demand; skills portability beyond Anthropic-hosted Claude |

**Emerging themes**: Governance/safety patterns (agent-governance proposal #412), persistent memory across conversations (#154 shodh-memory), and native OS automation (#806 macOS AppleScript).

---

## 3. High-Potential Pending Skills

Active PRs with recent updates, strong utility, and merge readiness indicators:

| Skill | PR | Last Updated | Why It May Land Soon |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Solves universal problem; zero dependencies; narrowly scoped |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Fills format gap (DOCX/PDF exist, ODT missing); enterprise compliance driver |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Comprehensive but modular; addresses #1 developer workflow gap |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 2026-05-04 | Recently maintained; clear commercial integration path |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 2026-05-06 | 4-skill cognitive framework; active ecosystem development |
| **macOS Sensory/Automation** | [#806](https://github.com/anthropics/skills/pull/806) | 2026-04-02 | Unique capability (AppleScript vs. screenshot); tiered permission model shows security thinking |

**Quality-fix cluster**: Three PRs by [Lubrsy706](https://github.com/Lubrsy706) (#538, #539, #541) demonstrate mature maintenance patterns—case-sensitivity, OOXML ID collision prevention, and YAML validation—indicating production-hardened contributions.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade trust and distribution infrastructure**—org-wide sharing, namespace integrity, plugin manifest enforcement, and validated skill invocation—rather than more individual skills, signaling ecosystem maturation beyond content accumulation toward operational reliability at scale.

---

---

# Claude Code Community Digest — 2026-05-12

## Today's Highlights

Anthropic shipped **v2.1.139** with two major capabilities: a new **Agent View** (`claude agents`) for monitoring all Claude Code sessions in a unified dashboard, and the **`/goal` command** for setting completion conditions that let Claude continue working autonomously. Meanwhile, the community is actively stress-testing these new agentic features, with multiple reports of session hangs, phantom `/loop` wake-ups, and Opus 4.7 mid-task freezes emerging within hours of release.

---

## Releases

### [v2.1.139](https://github.com/anthropics/claude-code/releases/tag/v2.1.139)
- **Agent View (Research Preview)**: Run `claude agents` to see all sessions—running, blocked, or completed—in a single list. [Docs](https://code.claude.com/docs/en/agent-view)
- **`/goal` command**: Define completion conditions for autonomous task execution; Claude continues working until the goal is met or requires user input.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#18653](https://github.com/anthropics/claude-code/issues/18653) | **Tool result transform hook for content sanitization** | Security-critical for enterprises: allows preprocessing tool outputs before they reach the model, enabling PII redaction, output filtering, and compliance workflows. | 23 comments, 16 👍 — highest engagement in the dataset; active design discussion on hook architecture |
| [#52679](https://github.com/anthropics/claude-code/issues/52679) | **Org monthly usage limit — Claude Desktop vs. Code quota sharing** | Windows users frustrated that Claude Desktop doesn't recognize local installation context and gives web-style recommendations; broader issue of quota silos between products. | 11 comments, 10 👍; Spanish-language report suggests international user base impact |
| [#40614](https://github.com/anthropics/claude-code/issues/40614) | **Hierarchical memory to prevent silent loss at 200-line MEMORY.md limit** *(CLOSED as stale)* | Core UX pain: auto memory silently drops entries when cap hit, breaking long-term project context. Requested hierarchical/memory paging architecture. | 11 comments but only 1 👍; closed without resolution — likely to resurface |
| [#47098](https://github.com/anthropics/claude-code/issues/47098) | **New sessions never hit full cache — 6505 cache-create tokens every relaunch** | Cost regression hitting power users: even "just seconds" between sessions incurs full cache recreation overhead, contradicting expected 5-min/1-hr TTL behavior. | 10 comments, 0 👍; precise token count suggests user instrumentation; no official response |
| [#32005](https://github.com/anthropics/claude-code/issues/32005) | **Image/screenshot paste in terminal** | Gap in multimodal workflow: users want to paste screenshots directly into terminal sessions without file system roundtrip. | 10 comments, 3 👍; long-running request (March) with recent activity bump |
| [#57661](https://github.com/anthropics/claude-code/issues/57661) | **Opus skill rewrites: ignored `/verify` skill, unverified claims, prose regression** | Model behavior degradation: Opus 4 ignoring its own verification tooling and regressing from structured output to prose, breaking automated workflows. | 9 comments, 1 👍; detailed reproduction with skill definitions attached |
| [#47104](https://github.com/anthropics/claude-code/issues/47104) | **Windows 11: Cowork, Connectors, Claude Code all broken post-auto-update** | Critical Windows ecosystem failure: `ERR_CONNECTION_RESET` + OAuthError across multiple Anthropic services simultaneously. | 9 comments, 3 👍; suggests infrastructure or certificate issue, not isolated bug |
| [#56860](https://github.com/anthropics/claude-code/issues/56860) | **Session hangs indefinitely — 3 confirmed variants + MCP teardown** | New in v2.1.132: spinning thinking indicator with no resolution, reproducible across tool use, agent handoff, and `/btw` MCP cleanup scenarios. | 6 comments, 1 👍; has repro, actively collecting variant data; Windows-specific pattern |
| [#58177](https://github.com/anthropics/claude-code/issues/58177) | **Claude fails to leverage documented decision criteria** | Fundamental agent reliability issue: ignores explicitly documented criteria in `CLAUDE.md`, falling back to pattern-matching shortcuts instead. | 2 comments, 0 👍; freshly filed (May 11), frames as "failure mode" — likely to gain traction |
| [#58187](https://github.com/anthropics/claude-code/issues/58187) | **Opus 4.7 (1M context) pauses mid-task without user-visible signal** | Silent failure mode in newest model: streaming stops, no error, no "I'll keep going" — requires manual nudge to resume. | 1 comment, 0 👍; critical for unattended/agentic workflows |

---

## Key PR Progress

Only **1 PR** updated in the last 24h:

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#58126](https://github.com/anthropics/claude-code/pull/58126) | **Add `neonpanel` plugin v1.0.0** | E-commerce operations plugin with 8 domain agents (replenishment, accounting, supply chain, marketing, forecasting, FP&A, market intel, customer success) connected to live NeonPanel commerce data via MCP. Targets Amazon seller workflows. | OPEN — community plugin submission |

*Note: Low PR volume suggests either release freeze around v2.1.139 or development happening in private branches.*

---

## Feature Request Trends

1. **Enterprise Security & Compliance Hooks** — [#18653](https://github.com/anthropics/claude-code/issues/18653) represents a broader push for interceptors/transformers at tool boundaries, not just input sanitization but output filtering and audit logging.

2. **Memory Architecture Overhaul** — Multiple issues converge on MEMORY.md limitations: hierarchical storage ([#40614](https://github.com/anthropics/claude-code/issues/40614)), better resource utilization ([#58177](https://github.com/anthropics/claude-code/issues/58177)), and cross-session context persistence. The 200-line/25KB cap is a known architectural constraint.

3. **Windows-First Stability** — Disproportionate bug volume on Windows (cowork, auth, TUI hangs, encoding) suggests platform-specific quality gaps relative to macOS/Linux.

4. **Autonomous Agent Observability** — New `/goal` and Agent View features are generating immediate feedback on *visibility* into what agents are doing: users want clearer signals for "still working" vs. "stuck" vs. "waiting for you" — see [#57134](https://github.com/anthropics/claude-code/issues/57134) (rate limit surfacing), [#58187](https://github.com/anthropics/claude-code/issues/58187) (silent pauses).

5. **IDE Integration Depth** — VSCode extension requests ([#52679](https://github.com/anthropics/claude-code/issues/52679), [#58189](https://github.com/anthropics/claude-code/issues/58189)) point to demand for tighter editor embedding, not just terminal wrapper.

---

## Developer Pain Points

| Category | Frequency | Specific Manifestations |
|----------|-----------|------------------------|
| **Silent failures / poor observability** | 🔥🔥🔥🔥🔥 | Mid-task freezes ([#58187](https://github.com/anthropics/claude-code/issues/58187)), infinite spinners ([#56860](https://github.com/anthropics/claude-code/issues/56860)), phantom `/loop` wake-ups ([#58185](https://github.com/anthropics/claude-code/issues/58185)), un-surfaced 429 retries ([#57134](https://github.com/anthropics/claude-code/issues/57134)) |
| **Windows instability** | 🔥🔥🔥🔥🔥 | Auth loops, cowork/connector failures, encoding corruption, VM driver issues — concentrated in post-update scenarios |
| **Cache/cost unpredictability** | 🔥🔥🔥🔥 | [#47098](https://github.com/anthropics/claude-code/issues/47098) cache misses, [#58188](https://github.com/anthropics/claude-code/issues/58188) idle token burn; users instrumenting token flows themselves |
| **Memory/context truncation** | 🔥🔥🔥 | 200-line MEMORY.md cap, failure to consult documented criteria, skill rewrite regressions |
| **MCP lifecycle fragility** | 🔥🔥🔥 | Server connection failures ([#39790](https://github.com/anthropics/claude-code/issues/39790)), teardown hangs ([#56860](https://github.com/anthropics/claude-code/issues/56860)), stateless transport regressions |

**Emerging concern**: The gap between *agentic feature shipping* (Agent View, `/goal`, `/loop`) and *agentic reliability* (silent failures, phantom tasks, ignored verification) is widening. Power users building on these features are hitting edge cases where Claude "lies" about task state or chases non-existent work — particularly dangerous for autonomous operation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-12

---

## 1. Today's Highlights

The Codex team shipped a new Rust alpha (`v0.131.0-alpha.6`) while community attention remains fixated on runaway token consumption ([#14593](https://github.com/openai/codex/issues/14593), 574 comments). A flurry of CLI safety improvements landed, including a new `--not-so-yolo` sandboxed mode and usage-limit pause mechanics, signaling a strategic shift toward more conservative default permissions.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| [rust-v0.131.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.6) | Routine alpha pre-release; no detailed changelog provided. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business-tier users report explosive token consumption | The longest-running, most-upvoted issue in the dataset; directly impacts cost control and trust in Codex for production use | 574 comments, 251 👍 — sustained pressure for billing transparency and rate-limit fixes |
| [#20161](https://github.com/openai/codex/issues/20161) | **Phone number verification broken after SSO login** | Auth regressions block cross-device workflows; SSO users unexpectedly hit phone verification walls | 110 comments, 84 👍 — frustration with identity flow inconsistency; now closed |
| [#14860](https://github.com/openai/codex/issues/14860) | **Error running remote compact task** | Context compaction failures break long-session reliability, a core value proposition for agentic coding | 60 comments, 39 👍 — persistent across versions, affects Pro users on Linux |
| [#13993](https://github.com/openai/codex/issues/13993) | **Support standalone Windows installer (`codex-setup.exe`)** | Microsoft Store restrictions lock out enterprise, offline, and policy-constrained Windows users | 39 comments, 101 👍 — one of the highest-upvoted feature requests; clear market gap |
| [#15777](https://github.com/openai/codex/issues/15777) | **Sandbox installation corrupts ACL on AppData** | Security-tooling side effects destroy Windows user profiles; data-loss severity | 25 comments, 0 👍 — under-discussed but critical; sandbox policy implementation flaw |
| [#18693](https://github.com/openai/codex/issues/18693) | **Desktop performance collapses with large conversation histories** | UI latency and random exits make Codex unreliable for ongoing projects | 17 comments, 5 👍 — performance regression affecting power users with accumulated context |
| [#21179](https://github.com/openai/codex/issues/21179) | **Codex Web: "Failed to create task" on new cloud tasks** | Cloud task creation broken for ChatGPT Plus subscribers, blocking browser-based workflows | 12 comments, 7 👍 — service reliability concern for web-tier users |
| [#21671](https://github.com/openai/codex/issues/21671) | **`/compact` fails with unknown `service_tier` parameter in 0.129.0** | Regression in compaction API compatibility broke a core CLI feature immediately on release | 13 comments, 5 👍 — fast turnaround expected; now closed |
| [#22222](https://github.com/openai/codex/issues/22222) | **PR #20098 breaks project configs for `model_providers`** | Custom model provider configurations broken by recent refactor; blocks BYO-model workflows | 5 comments, 0 👍 — fresh regression with immediate user impact |
| [#22077](https://github.com/openai/codex/issues/22077) | **Chrome extension stays disconnected; missing plugin in Windows app** | Browser integration promise unfulfilled for Windows users; documentation/app parity gap | 3 comments, 0 👍 — new issue, likely affects broader Windows install base |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#22231](https://github.com/openai/codex/pull/22231) | **Add not-so-yolo CLI mode** | `--not-so-yolo` flag: workspace-write sandboxing, on-request approvals, auto-review | Addresses the permission-safety backlash against `--yolo`; gives enterprises a defensible default |
| [#22225](https://github.com/openai/codex/pull/22225) + [#22226](https://github.com/openai/codex/pull/22226) | **Pause queue/steers after usage limits** | Freeze pending sends and auto-steers on quota exhaustion; require explicit resume | Direct response to token-burning complaints; prevents runaway billing |
| [#22236](https://github.com/openai/codex/pull/22236) | **Unify thread metadata updates above store** | Canonical history append, observed metadata facts, LiveThread-owned sync | Architectural cleanup for session reliability; may help with history-loss bugs |
| [#22237](https://github.com/openai/codex/pull/22237) | **Add `user_input_requested_during_turn` to MCP turn metadata** | Signal user-input waits to MCP servers for accurate latency telemetry | Improves observability for MCP tool-call performance analysis |
| [#21861](https://github.com/openai/codex/pull/21861) | **Apply sandbox context to local `view_image` reads** | Restricted-profile regression test for previously unsandboxed read path | Security hardening; closes a local sandbox escape |
| [#18202](https://github.com/openai/codex/pull/18202) | **feat(sandbox): add Windows deny-read parity** | Subprocess handling for `access = none` read restrictions on Windows | Cross-platform policy enforcement gap finally closing |
| [#21235](https://github.com/openai/codex/pull/21235) | **Fix TUI wrapping for external borrowed slices** | Prevents TUI panic on `textwrap` borrowed slices outside source text | Stability fix for TUI edge case; community-reported |
| [#21624](https://github.com/openai/codex/pull/21624) | **Make MCP startup status thread-scoped** | Review/delegate threads observe own MCP lifecycle; unblocks `/review` | Fixes "Starting MCP servers..." UI hang; improves multi-thread reliability |
| [#21085](https://github.com/openai/codex/pull/21085) | **Use `app/list` for TUI app catalog** | Backend-driven app discovery; TUI cache invalidation via `app/list/updated` | Reduces TUI/client complexity; centralizes app metadata |
| [#22229](https://github.com/openai/codex/pull/22229) | **Render network approval history by host** | Fix malformed history lines for app-server network approvals | Polish for TUI network-approval UX |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Windows-native distribution** | [#13993](https://github.com/openai/codex/issues/13993) (101 👍), multiple Windows-specific bugs | Escape Microsoft Store dependency; enterprise packaging parity with macOS/Linux |
| **VI/Vim modal editing in TUI** | [#9184](https://github.com/openai/codex/issues/9184) (43 👍) | Match Claude Code's `vim` mode; persistent editor state without pane takeover |
| **Plan Mode observability** | [#19125](https://github.com/openai/codex/issues/19125), [#22220](https://github.com/openai/codex/issues/22220) | Live plan files, compaction telemetry, "context health" dashboards |
| **MCP lifecycle efficiency** | [#20883](https://github.com/openai/codex/issues/20883), [#21984](https://github.com/openai/codex/issues/21984) | Project-scoped MCP process pools; lazy startup instead of eager per-session spawn |
| **Sandbox granularity / safety modes** | `--not-so-yolo` PR, [#21861](https://github.com/openai/codex/pull/21861), [#18202](https://github.com/openai/codex/pull/18202) | Tiered permission models; deny-read parity; explicit approval workflows |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Uncontrolled token / cost burn** | [#14593](https://github.com/openai/codex/issues/14593), usage-limit PRs | 🔴 Critical — longest-running issue, direct revenue impact, trust erosion |
| **Context compaction reliability** | [#14860](https://github.com/openai/codex/issues/14860), [#19910](https://github.com/openai/codex/issues/19910), [#21671](https://github.com/openai/codex/issues/21671), [#22220](https://github.com/openai/codex/issues/22220) | 🔴 Critical — breaks core agentic value prop; "life changing" when it works, fragile in practice |
| **Windows as second-class citizen** | Installer gap, ACL corruption, sandbox auth failures, Chrome plugin missing | 🟡 High — disproportionate bug density vs. platform share; blocks enterprise adoption |
| **Session history durability** | [#16644](https://github.com/openai/codex/issues/16644), [#21128](https://github.com/openai/codex/issues/21128), [#18693](https://github.com/openai/codex/issues/18693) | 🟡 High — async persistence gaps, global 50-conversation window hides project work |
| **MCP operational noise** | Eager startup, per-session processes, thread-scoped status bugs | 🟡 High — resource leaks, visible browser proliferation, startup hangs |
| **Auth / SSO fragility** | [#20161](https://github.com/openai/codex/issues/20161), [#21821](https://github.com/openai/codex/issues/21821) | 🟡 High — cross-device breaks, sandbox credential isolation failures |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-12

---

## 1. Today's Highlights

Google shipped **v0.42.0-nightly** with critical Git environment fixes, while the community continues grappling with agent reliability and trust issues. A major PR landed for **adaptive token calculation** to fix context window bugs, and a **P1 OAuth fix** aims to stop refresh token loss that breaks long-running sessions. Meanwhile, a severe report of **unintended mass file deletion** (#26713) underscores ongoing safety concerns with autonomous agent behavior.

---

## 2. Releases

### [v0.42.0-nightly.20260511.g1a894c18e](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260511.g1a894c18e)
| PR | Change | Author |
|---|---|---|
| [#26587](https://github.com/google-gemini/gemini-cli/pull/26587) | **fix(core)**: Preserve system `PATH` in Git environment to resolve `ENOENT` errors | @cocosheng-g |
| *(truncated in source)* | **fix(routing)**: Resolve `resolveClassifierModel` argument mismatch in `ApprovalModeStrategy` | @danielweis |

The Git PATH fix addresses a recurring environment isolation bug that broke Git operations in sandboxed contexts.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2347](https://github.com/google-gemini/gemini-cli/issues/2347) | **Function response/call part mismatch** — API 400 error when response parts don't equal call parts | **Closed** after 93 comments; this was a core protocol bug blocking multi-tool workflows. High engagement shows it hit many users. | 🔥 93 comments, 23 👍 |
| [#3396](https://github.com/google-gemini/gemini-cli/issues/3396) | **Hidden code lines break terminal code review** | UX regression: truncated output forces manual file opens, destroying the "walk with the AI" flow. | 9 comments, 25 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (EPIC) | Internal quality infrastructure; 76 behavioral evals exist but need hardening for 6 Gemini versions. Critical for release confidence. | 8 comments, maintainer-tracked |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS interruption** | Silent failure mode: agents claim success when actually truncated. Dangerous for autonomous workflows. | 6 comments, 2 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini ignores skills and sub-agents** | Anecdotal but widely felt: custom skills (Gradle, Git) sit unused despite relevance. Suggests routing/prompting gaps. | 6 comments |
| [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) | **`save_memory` tool not found** | `/memory add` command broken in v0.41.1 — regression in memory subsystem. | 5 comments |
| [#26713](https://github.com/google-gemini/gemini-cli/issues/26713) | **Mass file deletion via CLI** ⚠️ | **Safety-critical**: Single-file deletion command destroyed multiple personal files. Trust-breaking for autonomous agents. | 4 comments, manual-triage |
| [#26894](https://github.com/google-gemini/gemini-cli/issues/26894) | **Fabricated git output + destructive patch** | Agent hallucinated commit existence, then overwrote documentation. "Trust-critical failure" per reporter. | 3 comments, 1 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell hangs at "Waiting input" after command completes** | Simple commands falsely await input; breaks automation flow. | 3 comments, 3 👍 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | **Subagents run without permission since v0.33.0** | Permission model regression: disabled agents activate anyway. Security boundary concern. | 2 comments |

---

## 4. Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#26888](https://github.com/google-gemini/gemini-cli/pull/26888) | **Adaptive token calculator** | Fixes token calculation bugs; introduces dynamic content sizing to prevent context overflow. Some test adjustments required. | 🟢 Open |
| [#26876](https://github.com/google-gemini/gemini-cli/pull/26876) | **Retry visibility & timeout handling** | Eliminates silent "Thinking..." hangs from v0.35+ by surfacing model capacity retries, stream timeouts, and backend waits. | 🟢 Open |
| [#26714](https://github.com/google-gemini/gemini-cli/pull/26714) | **Merge Auto modes into single mode** | Unifies "Auto (Gemini 3)" and "Auto (Gemini 2.5)" into one context-aware router. Simplifies UX, reduces model selection friction. | 🟢 Open |
| [#26717](https://github.com/google-gemini/gemini-cli/pull/26717) | **Scheduled agent + worker delegation model** | Refactors bot from orchestrated actions to skills + subagents. Decouples from specific harness, enables broader agent reuse. | 🟢 Open |
| [#26529](https://github.com/google-gemini/gemini-cli/pull/26529) | **Formalize tool lifecycle states** | First-class `AgentProtocol` status types; decouples terminal UI from legacy metadata. Foundation for better observability. | 🟢 Open |
| [#26771](https://github.com/google-gemini/gemini-cli/pull/26771) | **Preserve refresh token on OAuth refresh** | **P1 fix**: Merges (not overwrites) tokens on refresh. Fixes session loss during long-running operations. | 🟢 Open |
| [#26577](https://github.com/google-gemini/gemini-cli/pull/26577) | **Restore resume for legacy sessions** | Fixes missing `/resume` and `--list-sessions` entries; prevents silent new-session fallback on explicit `--resume <id>` failures. | 🟢 Open |
| [#26844](https://github.com/google-gemini/gemini-cli/pull/26844) | **Add missing `CustomTheme` properties to schema** | Fixes Zod `.strict()` `"Unrecognized key"` startup crashes for `ui.active`, `ui.inactive`, `scrollbar.track`. | 🟢 Open |
| [#25444](https://github.com/google-gemini/gemini-cli/pull/25444) | **Fix EISDIR + Max Stack Size errors** | Resolves `isBinaryFile` crashes from glob returning directories; fixes stack overflow on large inputs. | 🟢 Open |
| [#26770](https://github.com/google-gemini/gemini-cli/pull/26770) | **Alpine shell compatibility** | BusyBox fixes: lightweight `--version` fast path, `pgrep` compatibility. Reopens stalled PR #22497. | 🟢 Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware codebase navigation** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | Precise method-bound reads, reduced token noise, better investigation |
| **Browser agent resilience** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Session takeover, Wayland support, config override respect |
| **Unified Auto model routing** | [#26714](https://github.com/google-gemini/gemini-cli/pull/26714) | In PR; eliminates manual model selection |
| **Evaluation/quality infrastructure** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23166](https://github.com/google-gemini/gemini-cli/issues/23166), [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) | Behavioral evals, project eval stabilization, steering tests |
| **Memory system hardening** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | Redaction, quarantine, retry limits, inbox quality |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Agent trust & safety** | 🔴 Critical | [#26713](https://github.com/google-gemini/gemini-cli/issues/26713) (mass deletion), [#26894](https://github.com/google-gemini/gemini-cli/issues/26894) (fabricated output), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (destructive commands) |
| **Silent/hidden failures** | 🔴 High | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (false GOAL), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (hanging shell), [#26876](https://github.com/google-gemini/gemini-cli/pull/26876) (silent retries) |
| **Memory subsystem regressions** | 🟡 Medium | [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) (missing tool), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)-[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) (auto-memory quality) |
| **Permission/control boundaries** | 🟡 Medium | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) (unauthorized subagents), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (skill neglect) |
| **Terminal/UX stability** | 🟡 Medium | [#3396](https://github.com/google-gemini/gemini-cli/issues/3396) (hidden output), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) (resize flicker), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) (editor corruption) |
| **OAuth/session durability** | 🟢 Emerging | [#26771](https://github.com/google-gemini/gemini-cli/pull/26771) (refresh token loss), [#26859](https://github.com/google-gemini/gemini-cli/issues/26859) (account access) |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity. For full context, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-12

---

## 1. Today's Highlights

GitHub shipped Copilot CLI v1.0.45 with a new `/autopilot` slash command for toggling between interactive and autonomous modes, plus improved Windows PowerShell fallback and OpenTelemetry alignment with GenAI semantic conventions. The community filed 30 new/updated issues in the past 24 hours, with transient API errors affecting multiple model providers (GPT, Claude Sonnet 4.5, DeepSeek-V4) emerging as the dominant theme. Enterprise MCP integration and session management edge cases also drew significant attention.

---

## 2. Releases

**[v1.0.45](https://github.com/github/copilot-cli/releases/tag/v1.0.45)** — 2026-05-11

| Change | Impact |
|--------|--------|
| `/autopilot` slash command | Toggles between interactive and autopilot modes, giving users explicit control over agent autonomy |
| Windows PowerShell fallback | Gracefully degrades to `powershell.exe` when PowerShell 7+ (`pwsh`) is unavailable |
| OpenTelemetry GenAI conventions | MCP tool calls now use standard `tool_ca` identifiers, improving observability interoperability |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Transient API errors → rate limiting | **Critical reliability issue**: Users hitting cascading retries that terminate in hard rate limits. 25 comments suggest widespread impact, not isolated. | 🔥 17 👍, 25 comments |
| [#2597](https://github.com/github/copilot-cli/issues/2597) | Claude Sonnet 4.5 listed but returns 400 | **Model availability gap**: Regression where a documented model suddenly fails, breaking workflows that depended on it. | 15 comments |
| [#2630](https://github.com/github/copilot-cli/issues/2630) | Custom agent MCP servers not connected in sub-agents/`--prompt` | **Architecture limitation**: Custom agents lose MCP tooling in delegated contexts, severely limiting composability of agent workflows. | 7 comments |
| [#3183](https://github.com/github/copilot-cli/issues/3183) | Orphan `tool_use` after hard kill causes persistent 400 | **SDK robustness**: Session resume corrupted by incomplete tool call state; affects automation and long-running workflows. | 3 comments |
| [#3242](https://github.com/github/copilot-cli/issues/3242) | GPT sessions failing on PLAN features with transient errors | **Provider-specific degradation**: Suggests backend routing issue distinct from general rate limiting; Claude unaffected. | New (1 comment) |
| [#3215](https://github.com/github/copilot-cli/issues/3215) | DeepSeek-V4 tool call failures | **Third-party model instability**: `tool_use`/`tool_result` mismatch indicates prompt/template incompatibility with non-OpenAI/Anthropic models. | 2 comments |
| [#3240](https://github.com/github/copilot-cli/issues/3240) | winget installs PowerShell despite Preview being present | **Windows packaging friction**: Unnecessary dependency installation conflicts with user environment preferences. | New (1 comment) |
| [#1148](https://github.com/github/copilot-cli/issues/1148) | CRLF line ending corruption on edit | **Data integrity**: Silent transformation of LF→CRLF breaks cross-platform workflows and version control hygiene. | 6 comments, 5 👍 |
| [#3248](https://github.com/github/copilot-cli/issues/3248) | Enterprise MCP server fails on external lookups | **Enterprise adoption blocker**: No fallback from enterprise URL to github.com for external repos breaks hybrid environments. | New |
| [#3239](https://github.com/github/copilot-cli/issues/3239) | **Regression**: Text-only assistant turn stalls session | **1.0.4x regression**: Agent silently stops without auto-continue or warning, breaking task completion reliability. | New |

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24 hours:

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3199](https://github.com/github/copilot-cli/pull/3199) | Update Homebrew installation commands | Corrects cask URLs for `copilot-cli` and `copilot-cli@prerelease` following repository reorganization. Community documentation fix. | Open |

*Note: Low PR velocity suggests either pre-release code freeze or development occurring in private branches.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Session branching/forking** | [#2058](https://github.com/github/copilot-cli/issues/2058) `/fork` command (7 👍) | Moderate — addresses real UX pain in multi-objective workflows |
| **Prompt file integration** | [#98](https://github.com/github/copilot-cli/issues/98) `prompts/*.md` reuse (28 👍) | **Strong** — highest-voted open issue, aligns with VS Code Copilot customization |
| **Non-git VCS support** | [#1381](https://github.com/github/copilot-cli/issues/1381) Rewind without git (5 👍) | Niche but passionate (jj-vcs users) |
| **Open source** | [#3241](https://github.com/github/copilot-cli/issues/3241) (3 👍, created today) | Emerging — enterprise developers building on "own metal" |
| **Usage visibility** | [#3243](https://github.com/github/copilot-cli/issues/3243) Display remaining quota | Closed, but indicates recurring demand for transparency |

---

## 6. Developer Pain Points

### 🔴 Critical: Transient API Errors Across Providers
Multiple models (GPT, Claude Sonnet 4.5, DeepSeek-V4) hitting `transient API error` → rate limit cascades. Suggests **infrastructure strain or routing regression**, not per-provider issues. [#2101](https://github.com/github/copilot-cli/issues/2101), [#2597](https://github.com/github/copilot-cli/issues/2597), [#3242](https://github.com/github/copilot-cli/issues/3242), [#3215](https://github.com/github/copilot-cli/issues/3215)

### 🟡 Agent Composability Gaps
MCP servers and hooks fail in sub-agent/`--prompt` contexts, creating **security and functionality holes** when delegating work. [#2630](https://github.com/github/copilot-cli/issues/2630), [#3013](https://github.com/github/copilot-cli/issues/3013)

### 🟡 Session State Fragility
Hard kills, resumes, and plan operations expose **state machine brittleness**—orphan tool calls, stalled turns, and corrupted conversations. [#3183](https://github.com/github/copilot-cli/issues/3183), [#3239](https://github.com/github/copilot-cli/issues/3239), [#3247](https://github.com/github/copilot-cli/issues/3247)

### 🟢 Platform Polish Deficits
Windows line endings, cursor styles, winget dependencies, and diff rendering remain **unresolved quality issues** affecting daily UX. [#1148](https://github.com/github/copilot-cli/issues/1148), [#2507](https://github.com/github/copilot-cli/issues/2507), [#3240](https://github.com/github/copilot-cli/issues/3240), [#3249](https://github.com/github/copilot-cli/issues/3249)

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-05-11.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-12

## Today's Highlights

Version 1.42.0 shipped with critical UI and shell fixes, including cleared partial output on LLM retries and the newly registered `/btw` slash command. The community is actively patching edge cases in session persistence, OpenAI legacy provider compatibility, and Windows-specific crashes, with 14 PRs in motion and several long-standing issues seeing resolution.

---

## Releases

**[v1.42.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.42.0)** — Latest stable release
- **fix(soul):** Clear partial UI output when LLM step is retried — prevents stale streaming artifacts from confusing users during regeneration loops
- **fix(tests):** Unbreak main CI following the retry logic changes
- **fix(shell):** Register `/btw` slash command — restores missing command registration

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | **API Error 400: invalid_request_error** — Persistent HTTP 400 on api.kimi.com/coding/ | Cross-cutting platform bug affecting core API reliability; 15 comments over 3+ months with no resolution | 🔴 High friction, ongoing |
| [#2223](https://github.com/MoonshotAI/kimi-cli/issues/2223) | **ToolSearch/MCP `tool_reference` messages poison session** — Permanent session breakage after MCP tool references | Critical for MCP adopters; breaks entire conversation context irreversibly | 🔴 Severe, newly reported |
| [#2202](https://github.com/MoonshotAI/kimi-cli/issues/2202) | **`kimi term` crashes on Windows** — Missing `fcntl` module + `rich.pretty` rendering cascade | Windows terminal experience is broken; two-stage failure suggests insufficient cross-platform testing | 🟡 Platform parity gap |
| [#2222](https://github.com/MoonshotAI/kimi-cli/issues/2222) | **`--continue` fails with "No previous session found"** despite existing history | Core workflow broken; session persistence is fundamental to CLI UX | 🟡 Fix in progress (#2239) |
| [#2227](https://github.com/MoonshotAI/kimi-cli/issues/2227) | **Skill call execution poor** — Custom skills fail to run properly | Skill ecosystem is a key differentiator; execution failures undermine extensibility | 🟡 New, needs triage |
| [#2233](https://github.com/MoonshotAI/kimi-cli/issues/2233) | **Empty `tools` array breaks vLLM on `/compact`** — OpenAI legacy provider sends `[]` | Local model deployment (vLLM) is growing; spec compliance gap blocks adoption | 🟢 Dual PRs open (#2235, #2237) |
| [#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) | **Shift+Enter for line breaks** — `Ctrl+J` feels non-idiomatic | Muscle memory mismatch with competitors; small UX papercut with outsized friction | 🟢 Low effort, high UX yield |
| [#2224](https://github.com/MoonshotAI/kimi-cli/issues/2224) | **Agent timeout loses results permanently** — Even completed work discarded after timeout | Wastes compute and user time; optimistic timeout estimation is systemic | 🟢 Related PR #2200 in flight |
| [#2232](https://github.com/MoonshotAI/kimi-cli/issues/2232) | **Background task timeout not adjustable** — Kimi kills long tasks, forcing restart | Same root cause as #2224; users need runtime control, not static heuristics | 🟢 Feature request |
| [#2234](https://github.com/MoonshotAI/kimi-cli/issues/2234) | **Config-level sampling params and `extra_body` for `openai_legacy`** | Power-user need for local/self-hosted models; Qwen3.6 `preserve_thinking` cited | 🟢 PR #2237 addresses |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#2239](https://github.com/MoonshotAI/kimi-cli/pull/2239) | **fix: continue latest persisted session** | Makes `--continue` fall back to newest non-empty session when metadata is stale; fixes #2222 | 🟡 Open, validated |
| [#2237](https://github.com/MoonshotAI/kimi-cli/pull/2237) | **Extra generation kwargs + vLLM empty tools fix** | Adds `extra_generation_kwargs` config section; omits empty tools field for vLLM compatibility | 🟡 Open, comprehensive |
| [#2235](https://github.com/MoonshotAI/kimi-cli/pull/2235) | **fix: omit empty tools in OpenAI legacy requests** | Narrower fix for #2233 — conditional tools parameter to avoid vLLM validation errors | 🟡 Open, targeted |
| [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) | **fix(utils): bound broadcast queues + cap web store cache** | Prevents OOM from unbounded `asyncio.Queue` and session cache growth at scale | 🟡 Open, production hardening |
| [#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231) | **fix(aiohttp): reuse TCPConnector** | Eliminates connection leaks and FD exhaustion under parallel operations; introduces `_ConnectionPool` singleton | 🟡 Open, performance |
| [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) | **fix(shell): adapt timeouts for long commands** | Auto-extends timeout for slow patterns (git clone, builds, package installs); addresses #2224/#2232 pain | 🟡 Open, UX improvement |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | **fix(hooks): extract text from ContentPart** | Fixes `UserPromptSubmit` hook receiving empty prompt when `user_input` is `list[ContentPart]`; unblocks regex matching | 🟡 Open, hook ecosystem |
| [#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) | **fix: add Windows binary version info** | PyInstaller version resources for Windows builds; CI assertion to prevent regression | 🟡 Open, Windows parity |
| [#2238](https://github.com/MoonshotAI/kimi-cli/pull/2238) | **fix: suppress AuthlibDeprecationWarning** | Silences stderr noise on every startup when MCP servers configured | 🟡 Open, polish |
| [#2226](https://github.com/MoonshotAI/kimi-cli/pull/2226) | **feat(telemetry): polish event schema** | Unifies tool_call/tool_error with outcome enum; adds lifecycle tracking and error enrichment | ✅ Merged |

---

## Feature Request Trends

1. **OpenAI Legacy Provider Flexibility** — Users want fine-grained control over sampling parameters and model-specific `extra_body` (e.g., Qwen3.6's `preserve_thinking`). The provider abstraction is too restrictive for advanced local deployments.

2. **Keyboard Input Ergonomics** — Shift+Enter for line breaks is becoming a de facto standard across CLI tools; `Ctrl+J` is perceived as friction.

3. **Timeout Observability & Control** — Background and agent timeouts need runtime adjustability, not just smarter heuristics. Users want to rescue in-progress work.

4. **MCP Ecosystem Hardening** — Tool reference message handling, auth warnings, and session poisoning indicate MCP integration needs deeper robustness work.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session persistence fragility** | #2222, #2224, #2239 — `--continue` breaks, agent results lost post-timeout | 🔴 Critical |
| **Windows second-class experience** | #2202 (`fcntl` missing), #2181 (missing version info), shell inconsistencies | 🟡 High |
| **Local model compatibility gaps** | #2233, #2234, #2237 — vLLM rejects empty tools, can't pass custom params | 🟡 High |
| **API error opacity** | #778, #2223 — Generic 400s with minimal diagnostic context | 🟡 High |
| **Timeout UX** | #2224, #2232, #2200 — Optimistic kills waste compute and break flow | 🟢 Moderate |
| **Skill execution reliability** | #2227 — Custom skills fail silently or partially | 🟢 Moderate |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-05-11.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-12

## Today's Highlights

The project is accelerating its architectural migration to Effect with **6 PRs from contributor kitlangton** landing today alone, removing legacy Zod bridges and modernizing test infrastructure. On the product side, v1.14.48 shipped with improved image handling in core, while the community continues to grapple with **sandboxing gaps** (#2242) and **provider-specific protocol incompatibilities** across Mistral, Kimi, and Cerebras endpoints. Notably, two long-standing TUI bugs around interrupt handling and markdown rendering were finally closed.

---

## Releases

### [v1.14.48](https://github.com/anomalyco/opencode/releases/tag/v1.14.48) & [v1.14.47](https://github.com/anomalyco/opencode/releases/tag/v1.14.47)
- **Image fidelity**: Core now preserves original image attachments instead of resizing before model transmission — important for vision-heavy workflows
- **TUX reliability**: Restored prompt editing keybindings (`esc`, `enter` aliases) in TUI textarea; model selections now persist across sessions
- **API ergonomics**: HTTP validation errors return readable 400 response bodies instead of opaque failures

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#768 — GitHub Copilot: Tracking Premium Requests](https://github.com/anomalyco/opencode/issues/768) | 70 👍, 33 comments. Cost tracker is useless for Copilot users ($0.00 always); users want premium request quota visibility like VS Code extension | Long-standing demand; VS Code parity expected |
| [#2242 — Sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242) | 44 👍, 32 comments. No seatbelt/macOS sandbox equivalent; security-critical for CI/enterprise use | Compared unfavorably to gemini-cli, codex-cli; urgent ask |
| [#21643 — Socket connection closed unexpectedly](https://github.com/anomalyco/opencode/issues/21643) | 12 comments. Generic fetch error blocking all API access for some users; "verbose: true" workaround insufficient | Affecting Chinese users particularly; needs better diagnostics |
| [#11391 — Google Stitch + MCP server integration](https://github.com/anomalyco/opencode/issues/11391) | 12 comments. MCP is central to OpenCode's extensibility; Stitch is a major data pipeline | Documentation gap; related to closed #26382 |
| [#25758 — reasoning_content missing in tool calls](https://github.com/anomalyco/opencode/issues/25758) | 11 comments. Breaking Kimi 2.6 and DeepSeek v4 Pro; "thinking enabled but reasoning_content is missing" | Provider protocol drift; affects latest models |
| [#26198 — Terminal flooded with mouse escape sequences](https://github.com/anomalyco/opencode/issues/26198) | 8 comments. SGR mouse sequences leak to shell after process interruption; terminal corruption | Frustrating daily UX bug; TUI reliability concern |
| [#7488 — Mistral "Unexpected role 'user' after role 'tool'"](https://github.com/anomalyco/opencode/issues/7488) | 10 👍, 6 comments. vLLM/Mistral strict message ordering breaks tool workflows | Self-hosted/enterprise blocker; protocol compliance gap |
| [#26697 — SSE /event stream closes immediately](https://github.com/anomalyco/opencode/issues/26697) | 7 👍, 4 comments. Server events die after `server.connected`; breaks real-time clients | Server-mode reliability; affects integrations |
| [#26870 — SchemaError on read tool offset](https://github.com/anomalyco/opencode/issues/26870) | 4 comments. String "2480" rejected where number expected; tool schema strictness | Agent loop breakage; type coercion failure |
| [#15892 — Dollar sign triggers LaTeX rendering](https://github.com/anomalyco/opencode/issues/15892) | 4 👍, 5 comments. Currency values (`$0.02/GB`) mangled by math renderer in macOS TUI | Markdown parser over-eager; daily UX papercut |

---

## Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#26956 — Remove effect-zod bridge](https://github.com/anomalyco/opencode/pull/26956) | Deletes generic Schema→Zod bridge; native Effect Schema for tools; plugin Zod isolated at boundary | **Major architecture cleanup**; reduces dependency complexity |
| [#26947 — Native OpenAI runtime opt-in](https://github.com/anomalyco/opencode/pull/26947) | `OPENCODE_LLM_RUNTIME=native` routes no-tools OpenAI requests through `@opencode-ai/llm` vs AI SDK | Performance/experimental; reduces AI SDK lock-in |
| [#26949 — Virtualize session timeline rows](https://github.com/anomalyco/opencode/pull/26949) | Row-level virtualization (was turn-level); handles hashes, loading states, tool groups | Scalability for long sessions; replaces #26781 |
| [#26955 — Fix run JSON output draining](https://github.com/anomalyco/opencode/pull/26955) | Waits for `opencode run` event stream to drain; propagates exit codes | Fixes truncated JSON in non-interactive mode |
| [#18767 — Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767) | Touch-friendly UI while preserving desktop; addresses growing mobile/tablet use | Product expansion; been open since March |
| [#26958 — Grep external directory permission evaluation](https://github.com/anomalyco/opencode/pull/26958) | Fixes permission checks for grep outside workspace | Security boundary correctness |
| [#24293 — Propagate parent session permissions to sub-agents](https://github.com/anomalyco/opencode/pull/24293) | Task tool sub-agents inherit Plan mode permissions instead of blank array | Fixes #6527; sandboxing-adjacent |
| [#26937 — Interactive /config and /tui slash commands](https://github.com/anomalyco/opencode/pull/26937) | Modal dialogs for config editing (project vs global, TUI vs JSON) | Closes #16911; TUX improvement |
| [#26850 — Allow disabling tool streaming](https://github.com/anomalyco/opencode/pull/26850) | Provider option to disable tool streaming; fixes DataBricks Frontier, other non-Anthropic endpoints | Protocol compatibility; closes #26853 |
| [#26309 — htmlrewriter2 for Node compat](https://github.com/anomalyco/opencode/pull/26309) | Replaces Bun-only `HTMLRewriter` with `htmlrewriter2` in webfetch tool | **Node.js runtime support** critical path |

---

## Feature Request Trends

1. **Sandboxing / Security**: Seatbelt-equivalent, directory restrictions, permission inheritance (#2242, #24293) — enterprise/CI readiness
2. **Provider Protocol Flexibility**: Disable tool streaming, bypass google-auth, bearer tokens for Vertex, reasoning_content handling (#26850, #14175, #25758) — multi-provider robustness
3. **Session Lifecycle Management**: `/handoff` command for context compaction, double-ESC cancel (#26757, #26748) — long-running workflow quality
4. **MCP Ecosystem Expansion**: Google Stitch, sequential-thinking, prompts/resources optional compliance (#11391, #24985, #26382) — integration breadth
5. **Desktop Polish**: Right-click file explorer, voice I/O, todo panel persistence (#26918, #26940, #26953) — IDE parity

---

## Developer Pain Points

| Category | Pattern | Top Issues |
|----------|---------|-----------|
| **TUI Stability** | Terminal state corruption, color drift, interrupt handling, mouse sequences | #26198, #20261, #3699 (closed), #21299 (closed) |
| **Provider Compatibility** | Strict schema validation, role ordering, reasoning_content, auth methods | #7488, #25758, #26762, #24975 (closed), #14175 (closed) |
| **Configuration Discovery** | `opencode serve` ignores config, env var precedence unclear, Windows path handling | #19078, #17458 |
| **Tool/Agent Reliability** | Schema type coercion, sub-agent model assignment, build command hang detection | #26870, #25802, #19252 |
| **Observability** | Opaque fetch errors, missing premium request quotas, SSE stream debugging | #21643, #768, #26697 |

---

*Digest compiled from [anomalyco/opencode](https://github.com/anomalyco/opencode) activity on 2026-05-11/12.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-12

## Today's Highlights
The Pi coding agent project saw intense maintenance activity with **19 issues and 8 PRs updated in 24 hours**, dominated by a sweeping `closed-because-refactor` cleanup that closed ~15 tickets in a single day. A major new `organization-agent` package (Agent Company) landed alongside critical TUI stability fixes for terminal restoration and tmux cursor handling.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#534](https://github.com/earendil-works/pi/issues/534) | **Config folder placement on Linux violates XDG spec** | Long-standing Linux UX debt; `$HOME` pollution is a recurring pain point for power users. Finally closed after months of discussion. | 15 👍, 8 comments — one of the most-upvoted issues in the dataset |
| [#4381](https://github.com/earendil-works/pi/issues/4381) | **Anthropic SSE parser ignores events missing `event:` line** | Breaks corporate AI gateways that strip SSE metadata; blocks enterprise adoption. Closed rapidly as weekend refactor collateral. | 7 comments, zero upvotes — suggests enterprise users lack voting voice |
| [#4210](https://github.com/earendil-works/pi/issues/4210) | **Bedrock converse-stream: empty `end_turn` treated as success** | Silent failures in AWS Bedrock integration cause agents to "trail off" mid-task; local workaround exists but no upstream fix yet. | 6 comments, still **OPEN** — active pain point |
| [#4180](https://github.com/earendil-works/pi/issues/4180) | **Hyperlinks unclickable after alternate term mode update** | Regressions in TUI link handling break core navigation workflow; tagged `possibly-openclaw-clanker` suggests AI-introduced bug. | 5 comments, closed in refactor sweep |
| [#4399](https://github.com/earendil-works/pi/issues/4399) | **Fresh Windows install fails silently via npm/pnpm** | Zero-error-exit on Node 26.1 blocks new user onboarding; Windows path issues persist despite cross-platform claims. | 4 comments, same-day close |
| [#4158](https://github.com/earendil-works/pi/issues/4158) | **TUI markdown nested-list double indent** | Hardcoded regex theming bug affects readability of all nested lists; "shipped truecolor themes" never matched indicates test gap. | 4 comments, closed in big refactor |
| [#4408](https://github.com/earendil-works/pi/issues/4408) | **Long file writes fail with truncation loop** | Local LLM users (llama.cpp + Qwen3.6) hit infinite retry loops; suggests token limit handling gaps in local model path. | 3 comments, still **OPEN** |
| [#4400](https://github.com/earendil-works/pi/issues/4400) | **German ß (U+00DF) causes editor text disappearance** | Unicode rendering bug in TUI input makes text invisible while preserved internally; classic terminal width miscalculation. | 3 comments, closed same day |
| [#4403](https://github.com/earendil-works/pi/issues/4403) | **Auto-scroll overrides user viewport position** | UX friction for monitoring agents while reading earlier output; common TUI anti-pattern with straightforward fix. | 3 comments, closed in refactor |
| [#4222](https://github.com/earendil-works/pi/issues/4222) | **Stack overflow in Markdown renderer with large content** | `RangeError` on benchmark prompts blocks performance testing; recursion in markdown parser needs architectural fix. | 3 comments, still **OPEN**, tagged `closed-because-bigrefactor` but persists |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4383](https://github.com/earendil-works/pi/pull/4383) | **Update SDK docs for current tool configuration API** | Replaces obsolete `readTool`/`bashTool` factories with `createAgentSession({ tools })` allowlist pattern; resolves #4375 | **OPEN** |
| [#4426](https://github.com/earendil-works/pi/pull/4426) | **Restore terminal on uncaught exception** | Adds `process.on("uncaughtException")` handler calling `ui.stop()` to prevent raw mode/cursor leaks on crash | **OPEN** |
| [#4421](https://github.com/earendil-works/pi/pull/4421) | **Add gbrain memory extension** | Project-local semantic memory integration: injects relevant memories pre-agent-start, auto-saves summaries on shutdown | **CLOSED** |
| [#4419](https://github.com/earendil-works/pi/pull/4419) | **Restore Vertex AI ADC URL routing** | Fixes #3699 — native endpoint routing broken for Google Cloud ADC auth path | **CLOSED** |
| [#4417](https://github.com/earendil-works/pi/pull/4417) | **Add Agent Company (`organization-agent`) package** | New package with implementation, tests, scripts, and npm-packaged product docs (`PRODUCT_INTRODUCTION.md`, `PRODUCT_USER_GUIDE.md`) | **CLOSED** |
| [#4395](https://github.com/earendil-works/pi/pull/4395) | **Hide cursor in unfocused tmux panes** | Tmux split awareness: cursor only renders in active pane; notable "used AI to fix the issue" in description | **CLOSED** |
| [#4391](https://github.com/earendil-works/pi/pull/4391) | **Dispose SDK example sessions properly** | Fixes zombie Node processes when `transport: websocket-cached` leaves event loop alive after one-shot examples | **OPEN** |
| [#4388](https://github.com/earendil-works/pi/pull/4388) | **Split browser-safe core from harness exports** | Creates clean `@earendil-works/pi-agent-core/harness` entrypoint, preventing Node-specific code from leaking to browser bundles | **CLOSED** |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Memory & persistence** | [#4421](https://github.com/earendil-works/pi/pull/4421) gbrain extension, [#4317](https://github.com/earendil-works/pi/issues/4317) timing metadata persistence | High — semantic memory becoming first-class |
| **Multi-agent / organizational workflows** | [#4417](https://github.com/earendil-works/pi/pull/4417) Agent Company package, [#4418](https://github.com/earendil-works/pi/issues/4418) contribution proposal | High — new package category emerging |
| **TUI viewport & scroll control** | [#4403](https://github.com/earendil-works/pi/issues/4403) no auto-reposition, [#4401](https://github.com/earendil-works/pi/issues/4401) provider list cursor position | Medium — polish phase for terminal UX |
| **Extension system enrichment** | [#4427](https://github.com/earendil-works/pi/issues/4427) `theme_changed` event, [#4423](https://github.com/earendil-works/pi/issues/4423) `switchCwd` API, [#4392](https://github.com/earendil-works/pi/issues/4392) slash command execution from tools | Medium — SDK surface expanding |
| **Session tree operations** | [#4431](https://github.com/earendil-works/pi/issues/4431) copy/branch from `/tree` entries | Low — workflow convenience |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Refactor-driven issue closure without fixes** | Extreme | High | 15+ issues tagged `closed-because-refactor` or `closed-because-bigrefactor` in 24h; community concern that bugs are being swept under rug |
| **TUI stability & terminal state management** | High | High | [#4426](https://github.com/earendil-works/pi/pull/4426) uncaught exception cleanup, [#4395](https://github.com/earendil-works/pi/pull/4395) tmux cursor, [#4400](https://github.com/earendil-works/pi/issues/4400) Unicode rendering, [#4382](https://github.com/earendil-works/pi/issues/4382) `ENOBUFS` crash |
| **Local/self-hosted LLM integration rough edges** | High | Medium | [#4408](https://github.com/earendil-works/pi/issues/4408) truncation loops, [#4210](https://github.com/earendil-works/pi/issues/4210) Bedrock silent failures, [#4430](https://github.com/earendil-works/pi/issues/4430) errors at 70-90k context |
| **Windows path & install reliability** | Medium | High | [#4399](https://github.com/earendil-works/pi/issues/4399) silent install failure, [#4425](https://github.com/earendil-works/pi/issues/4425) CJK path handling |
| **Configuration directory hygiene** | Medium | Medium | [#534](https://github.com/earendil-works/pi/issues/534) XDG compliance, [#2390](https://github.com/earendil-works/pi/issues/2390) `PI_CONFIG_DIR` inconsistency, [#4424](https://github.com/earendil-works/pi/issues/4424) project dir override |
| **Markdown renderer scalability** | Low | High | [#4222](https://github.com/earendil-works/pi/issues/4222) stack overflow on large content — architectural limit |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-12

## Today's Highlights

Qwen Code shipped **v0.15.10-nightly** with significant session-list performance improvements, while the community is actively debating a controversial proposal to slash the OAuth free tier from 1,000 to 100 requests/day. Meanwhile, architectural debt is surfacing as a major theme: a comprehensive core+CLI structural review identified 14 issues including critical vendor lock-in to `@google/genai` types across 136 files.

---

## Releases

### [v0.15.10-nightly.20260511.0a05ea800](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.10-nightly.20260511.0a05ea800)
- **Performance**: Bounded session-list metadata reads to head/tail 64KB with pooled buffers and lazy message counting — reduces I/O overhead for large session histories
- **Stability**: Main e2e test stabilization

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — Reduce daily quota 1,000→100, phase out free tier by May 20 | Most-commented issue (124 comments); directly impacts accessibility and developer adoption for hobbyists and evaluators | Intense pushback; users arguing abrupt timeline violates trust |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) | **Core + CLI Architecture Review — 14 Structural Problems** | P0 finding: `@google/genai` types deeply embedded across 136 files creates hard vendor lock-in; blocks provider abstraction and self-hosted flexibility | Seen as courageous transparency; demands roadmap for decoupling |
| [#4055](https://github.com/QwenLM/qwen-code/issues/4055) | **Infinite thinking loop on simple requests** | Agent spins for 10+ minutes on trivial prompts; reproducible on 0.15.8 | Frustration at severity; blocking daily use |
| [#4049](https://github.com/QwenLM/qwen-code/issues/4049) | **Tool output truncation missing — context token overflow kills sessions** | `run_shell_command` JSON dumps can exceed 200K token limits; no automatic truncation | Critical reliability gap vs. competitors |
| [#4046](https://github.com/QwenLM/qwen-code/issues/4046) | **Rewind unavailable in high-context sessions** | "Cannot rewind to compressed turn" — breaks undo in long conversations | Pairs with #3644 (IDE integration conflict); UX degradation |
| [#3878](https://github.com/QwenLM/qwen-code/issues/3878) | **Context window size ignored from settings.json** | `contextWindowSize: 192000` silently overridden; local model users misled about actual limits | Configuration system trust erosion |
| [#3772](https://github.com/QwenLM/qwen-code/issues/3772) | **DeepSeek V4 Pro API error 400 on reasoning_content** | Multi-turn failures due to `reasoning_content` passback requirement | Provider compatibility fragility |
| [#1897](https://github.com/QwenLM/qwen-code/issues/1897) | **LLM hallucinates spaces in Chinese paths** | `DNF私服研究` → `DNF 私服研究` breaks path validation | Long-standing i18n bug; affects Chinese developer workflow |
| [#4042](https://github.com/QwenLM/qwen-code/issues/4042) | **Post-update auto-rejection of agent permissions** | Agent operations auto-denied after update; completely blocks usage on Windows/Qianfan | Urgent regression; "currently unusable" |
| [#3845](https://github.com/QwenLM/qwen-code/issues/3845) | **Installation failure — Cannot find module** | Windows PowerShell install script broken for new users | Onboarding friction; 2 upvotes indicate silent majority impact |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#3889](https://github.com/QwenLM/qwen-code/pull/3889) | **feat(cli,sdk): `qwen serve` daemon (Stage 1)** | Open | HTTP daemon bridging ACP NDJSON over HTTP+SSE; foundational for headless/agentic deployments per #3803 |
| [#4064](https://github.com/QwenLM/qwen-code/pull/4064) | **feat(rewind): file restoration support** | Open | Closes #3697 — extends `/rewind` from conversation truncation to actual file rollback via copy-based backup (claude-code parity) |
| [#3980](https://github.com/QwenLM/qwen-code/pull/3980) | **fix(core): merge IDE context into user prompt** | Open | Fixes API history ordering by wrapping IDE context in `<system-reminder>` prepended to prompt vs. separate history entry |
| [#3865](https://github.com/QwenLM/qwen-code/pull/3865) | **feat(base): persist channel sessions across restarts** | Open | Root cause: `AcpBridge.loadSession()` always returned `undefined`; fixes Ctrl+C data loss |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | **feat(core): replace fdir with git ls-files + ripgrep** | Open | `@` mention autocomplete performance + `.gitignore` respect; critical for large monorepos |
| [#3896](https://github.com/QwenLM/qwen-code/pull/3896) | **fix(core): normalize cumulative OpenAI stream deltas** | Open | DashScope/百炼 compatibility: upstreams sending accumulated full text instead of suffixes caused duplication |
| [#3966](https://github.com/QwenLM/qwen-code/pull/3966) | **fix(core): deduplicate geminiChat recovery continuation** | Open | `MAX_TOKENS` recovery loop re-sends anchor text; prevents visible repetition |
| [#3968](https://github.com/QwenLM/qwen-code/pull/3968) | **fix(cli): narrow terminal rendering** | Open | Vertical table format below 60 columns; extracted from broader TUI flicker work |
| [#4058](https://github.com/QwenLM/qwen-code/pull/4058) | **fix(telemetry): trace correlation follow-ups** | Open | Addresses #3847 review: sampler env var respect, trace flag handling |
| [#4067](https://github.com/QwenLM/qwen-code/pull/4067) | **Use bundled Qwen Code for PR review automation** | Open | Dogfooding: replaces external action with local `/review` skill; makes active model visible |

---

## Feature Request Trends

1. **Daemon/Server Mode** — [#3803](https://github.com/QwenLM/qwen-code/issues/3803) and [#3889](https://github.com/QwenLM/qwen-code/pull/3889) reflect strong demand for headless, programmatic access beyond interactive CLI; 24-chapter design series signals serious investment

2. **Background Task Management** — [#3634](https://github.com/QwenLM/qwen-code/issues/3634) (Phase A/B merged, Phase D designed) shows push for async agent execution with Ctrl+B promotion of foreground shells

3. **WebSearch Integration** — [#3841](https://github.com/QwenLM/qwen-code/issues/3841) highlights Qwen Code as the only major code agent CLI lacking this; DashScope already has server-side capability

4. **Structured Output / JSON Schema** — [#4051](https://github.com/QwenLM/qwen-code/pull/4051) docs follow-up to shipped #3598 feature; growing ecosystem need for deterministic parseable responses

5. **Plan Mode Parity** — [#3548](https://github.com/QwenLM/qwen-code/issues/3548) requests `plansDirectory` config matching Gemini CLI / Claude Code; multi-step workflow visibility

6. **Input/Editing UX** — [#3926](https://github.com/QwenLM/qwen-code/issues/3926) (Ctrl+Backspace, text selection), [#4047](https://github.com/QwenLM/qwen-code/issues/4047) (`/rename` arg suggestions), [#3518](https://github.com/QwenLM/qwen-code/issues/3518) (image paste/drag) — terminal interactivity gaps vs. GUI competitors

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Context/Token Management Crises** | #4049 (overflow), #4046 (rewind blocked by compression), #3878/#3426 (settings ignored), #3772 (provider-specific limits) | 🔴 Critical — session-killing, data loss |
| **Thinking/Looping Bugs** | #4055 (infinite loop on trivial prompt), #4057 (`/rename --auto` fails on text-JSON models) | 🔴 Critical — blocks productive use |
| **Provider Compatibility Fragility** | #3338 (GLM-5.1 hallucinates empty output), #3342 (智谱国际站 empty returns), #3772 (DeepSeek reasoning_content), #4035 (DashScope-intl undici incompatibility) | 🟡 High — multi-provider promise undermined |
| **Configuration System Untrustworthiness** | #3878, #3426, #3644 (IDE enabled breaks rewind) | 🟡 High — silent overrides, unexpected interactions |
| **Internationalization / CJK Path Handling** | #1897 (spaces in Chinese paths), #3323 (localization), #4052 (markdown table rendering) | 🟡 High — excludes significant user base |
| **Installation & Onboarding Friction** | #3845 (module not found), #2795 (`/login` silent fallback) | 🟡 High — first impression failures |
| **Architectural Technical Debt** | #4063 (Google types lock-in), #4036 (ink 7 testing blocked) | 🟢 Medium — long-term velocity risk |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-12

## Today's Highlights

The v0.8.29 maintenance release dropped today, primarily fixing the "scroll demon" regression affecting Windows terminals and a session-restore bug that could load wrong projects. Meanwhile, terminal flickering remains the dominant pain point with 5+ new issues/PRs in 24h targeting Ghostty, Windows Terminal, Termius, and Tilix, suggesting a systemic rendering problem rather than isolated terminal quirks.

---

## Releases

### [v0.8.29](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.29)
Maintenance release addressing:
- **"Scroll demon" regression** (#1085 class) — scrolling failures in Windows terminals
- **Wrong-project session-restore bug** (#1395) — sessions rehydrating into incorrect workspaces
- 20 community PRs merged covering MCP transport improvements (HTTP proxy, CRLF SSE, discovery resilience), prompt steering, and auto-routing language coverage

Install: `npm install -g deepseek-tui`

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177) | **Input cache hit rate "abysmally low" vs. DeepSeek-Reasonix** | Cost optimization critical for production use; 95%+ vs. current performance is a massive gap | 21 comments, user benchmarking against competitor tool |
| [#1255](https://github.com/Hmbown/DeepSeek-TUI/issues/1255) | **Win10 terminal: chat box won't scroll** | Core UX breakage; closed but pattern recurring in #1466 | 14 comments, resolved in v0.8.29 |
| [#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743) | **Token consumption spiked to 400M in half-day** | Cost explosion for power users; suggests aggressive context retention or redundant API calls | 13 comments, multiple users confirming |
| [#1378](https://github.com/Hmbown/DeepSeek-TUI/issues/1378) | **macOS v0.8.25+ terminal flickering (Ghostty/Tabby)** | Early signal of rendering regression now widespread | 6 comments, closed but resurfaced in #1445 |
| [#1411](https://github.com/Hmbown/DeepSeek-TUI/issues/1411) | **Text won't wrap, truncates long content** | Breaks core use case (reading files/novel outlines); accessibility concern | 4 comments, screenshot evidence |
| [#1377](https://github.com/Hmbown/DeepSeek-TUI/issues/1377) | **Deny tool use → permanent auto-deny (state bug)** | Breaks trust in approval system; workaround requires session restart | 4 comments, workflow-disrupting |
| [#1445](https://github.com/Hmbown/DeepSeek-TUI/issues/1445) | **Ghostty flickering persists v0.8.27** | Confirms #1378 fix incomplete; terminal-specific rendering debt | 2 comments, cross-referencing prior issues |
| [#1364](https://github.com/Hmbown/DeepSeek-TUI/issues/1364) | **Hooks need mutation rights + turn-end event** | Portability gap vs. Claude Code/Pi for extension ecosystem | 2 comments, power-user extensibility request |
| [#1440](https://github.com/Hmbown/DeepSeek-TUI/issues/1440) | **Token burn still 2×+ Claude Code for same task** | Competitive cost positioning at risk; #743's cousin | 1 comment, comparative benchmarking |
| [#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472) | **Deadlock: API stall → unrecoverable hang on pipe_read** | Production reliability; process requires `kill -9` | New, detailed WSL2 repro with stack trace |

---

## Key PR Progress

| # | PR | Status | Feature/Fix |
|---|-----|--------|-------------|
| [#1477](https://github.com/Hmbown/DeepSeek-TUI/pull/1477) | **fix(tui): DECSET 2026 flicker prevention for Windows** | Open | Targets ConHost/VSCode terminal flicker with synchronized rendering; complements v0.8.29 scroll fixes |
| [#1475](https://github.com/Hmbown/DeepSeek-TUI/pull/1475) | **fix(shell): kill process group before joining readers** | Open | Resolves UI freeze from orphaned subprocesses (#828 class); `nohup`, background daemons |
| [#1474](https://github.com/Hmbown/DeepSeek-TUI/pull/1474) | **Improve prefix cache inspection/warmup** | Open | Diagnostic depth for #1177 cache hit rate; accounts for tool schemas, context packs, skills |
| [#1452](https://github.com/Hmbown/DeepSeek-TUI/pull/1452) | **feat(l10n): Spanish (es-419) Latin American** | Open | ~350 strings, `es-*` prefix detection; follows pt-BR scope |
| [#1415](https://github.com/Hmbown/DeepSeek-TUI/pull/1415) | **chore(release): v0.8.29 prep** | Open | Anchors today's release; bundles 20 community PRs |
| [#1376](https://github.com/Hmbown/DeepSeek-TUI/pull/1376) | **fix(compaction): tiktoken for exact context tracking** | Open | Addresses #743 token under-counting vs. LiteLLM/llama.cpp; replaces character heuristics |
| [#1467](https://github.com/Hmbown/DeepSeek-TUI/pull/1467) | **feat(vision): add image_analyze tool** | Open | OpenAI-compatible vision API integration; feature-gated (`vision_model`) |
| [#1465](https://github.com/Hmbown/DeepSeek-TUI/pull/1465) | **fix(render): BMP glyphs replace SMP emoji on Windows** | Open | Layout stability: ◆ replaces 🐳 for consistent column width |
| [#1460](https://github.com/Hmbown/DeepSeek-TUI/pull/1460) | **fix: reject no-op edit_file replacements** | Open | Guards against agent self-confusion; closes #1457 |
| [#1459](https://github.com/Hmbown/DeepSeek-TUI/pull/1459) | **fix: simplify approval confirmation flow** | Open | Reduces two-step approval to one; improves selected-row visibility |

---

## Feature Request Trends

1. **Notification parity with Claude Code** — Visual taskbar indicators (colored whale logo states), sound alerts for user-input/approval/task-completion, and external messaging integration (#1281, #1414)
2. **Persistent typed execution policies** — Fine-grained `allow`/`deny`/`ask` rules by tool, command prefix, and path pattern (#1186)
3. **MCP ecosystem maturity** — HTTP custom headers for auth (#1454), transport resilience, discovery improvements; critical for enterprise MCP adoption
4. **Token/cost transparency** — Better cache diagnostics (#1177, #1474), per-tool truncation policies, range-based `read_file` to reduce context bloat (#1450)
5. **Hook extensibility** — Mutation rights on user submit, turn-end events for behavioral extensions portable across agent harnesses (#1364)

---

## Developer Pain Points

| Pain Point | Frequency | Evidence | Severity |
|-----------|-----------|----------|----------|
| **Terminal flickering/rendering** | 🔥 Critical | #1378, #1445, #1470, #1433, #1466, #1477, #1465 | Blocks adoption on Ghostty, Windows Terminal, Tilix, Termius, CentOS; DECSET 2026 partial fix in flight |
| **Token cost explosion** | 🔥 High | #743, #1440, #1450, #1376 | 2-4× vs. Claude Code; under-counting bugs, full-file reads, stale context retention |
| **Cache hit rate failure** | 🔥 High | #1177, #1474 | Direct cost impact; benchmarking against DeepSeek-Reasonix at 95%+ |
| **Scroll/terminal interaction bugs** | Medium | #1255, #1106, #1411, #1466, #1359 | Recurring Windows-specific; v0.8.29 claims fix but #1466 suggests residual |
| **Tool system reliability** | Medium | #1377, #1419, #1457, #1460 | Deny-state bugs, deferred schema loading, no-op edits — erodes trust in agent autonomy |
| **Process/orchestration hangs** | Medium | #1472, #1475 | Deadlocks on API stalls, orphaned subprocesses freezing UI |

---

*Digest compiled from 42 issues and 49 PRs updated in the last 24h. Data source: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*