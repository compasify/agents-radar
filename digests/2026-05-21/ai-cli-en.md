# AI CLI Tools Community Digest 2026-05-21

> Generated: 2026-05-21 00:26 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-21

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly with divergent architectural philosophies: **agent-centric** tools (Claude Code, Gemini CLI, DeepSeek TUI) battle reliability challenges at scale, while **IDE-integrated** tools (OpenAI Codex, GitHub Copilot CLI) prioritize remote workflows and sandboxing. A clear **bifurcation** is emerging between closed-source, cloud-tethered tools with rapid release cadences and open-source alternatives emphasizing local LLM support, extensibility, and transparency. All projects face acute **Windows parity gaps**, **context compaction/memory crises** in long sessions, and **MCP ecosystem friction** as universal growing pains.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity |
|------|:-----------:|:---------:|:-------------:|:----------------|
| **Claude Code** | 50 | 5 | — | Stalled; no release, minimal merge activity |
| **OpenAI Codex** | 50 | 50 | **v0.132.0** + 2 alphas | **Highest** — stable + rapid alpha succession |
| **Gemini CLI** | ~15 | 9 | — | Steady; 3 critical fixes landed |
| **GitHub Copilot CLI** | ~15 | 0 | **v1.0.51** × 3 patch releases | High; release-driven, no community PRs |
| **Kimi CLI** | 5 | 4 | — | Slow; v1.44.0 stable |
| **OpenCode** | ~15 | 10 | **v1.15.6** | Moderate; community-driven |
| **Pi** | ~12 | 10 | **v0.75.4** | Moderate; security-focused |
| **Qwen Code** | ~12 | 10 | — | **Blocked** — 2 release build failures |
| **DeepSeek TUI** | 21 | 18 | — (v0.8.40 pending) | **Accelerating** — recovery release prep |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP ecosystem hardening** | Claude Code, Codex, Copilot CLI, Kimi CLI, Gemini CLI, Qwen Code | OAuth/auth persistence (Copilot #2536, Claude #37747), transport pooling (Qwen #4336), UI state accuracy (Kimi #2328), tool auto-invocation (Kimi #2329), shared pool architecture |
| **Context compaction / long-session memory** | Codex, Qwen Code, Gemini CLI, Claude Code, DeepSeek TUI | Legacy deserialization (Codex #23785), union-find semantic clustering (Gemini #24736), OOM prevention (Qwen #4286, #4351), auto-compaction loops (OpenCode #28543), structuredClone elimination |
| **Windows platform parity** | **All 9 tools** | Sandbox hardening (Codex #23714-23715), IME deadlocks (DeepSeek #1835), path handling (Pi #4780, Claude #56840), terminal input regressions (Copilot #3385, #3401), installer failures (DeepSeek #1816) |
| **Local/self-hosted LLM support** | Pi, OpenCode, Qwen Code, Gemini CLI | llama.cpp native provider (Pi #4823), Ollama robustness (OpenCode #19948), local Qwen + llama.cpp OOM (Qwen #4351) |
| **Structured agent-user interaction** | Codex, DeepSeek TUI, Copilot CLI | Tabbed questionnaires vs. free-form chat (Codex #9926), approval UX with diff previews (DeepSeek #1846), `/security-review` automation (Copilot) |
| **Observability / cost control** | Codex, Qwen Code, Pi, OpenCode, Copilot CLI | Token usage propagation (Pi #4804), telemetry cardinality guards (Qwen #4367), 34GB/day log explosions (Codex #23340), `/chronicle cost-tips` (Copilot), usage transparency (OpenCode) |
| **Session portability / resumability** | Copilot CLI, Codex, Claude Code | `--session-id` UUID (Copilot v1.0.51), remote compact failures (Codex #23694), conversation JSONL data loss (Claude #60984) |

---

## 4. Differentiation Analysis

| Dimension | **Cloud-Native / Closed** | **Extensible / Open-Source** |
|-----------|---------------------------|------------------------------|
| **Tools** | Claude Code, Codex, Copilot CLI, Kimi CLI | OpenCode, Pi, Qwen Code, DeepSeek TUI, Gemini CLI (hybrid) |
| **Target User** | Enterprise teams, individual devs with API budgets | Privacy-conscious, cost-sensitive, air-gapped, tinkerers |
| **Feature Focus** | Agent autonomy, remote/mobile, safety guardrails, billing integration | Local LLM support, plugin ecosystems, transparency, hackability |
| **Technical Approach** | Heavy sandboxing, proprietary model routing, managed auth | Pluggable tool registries (DeepSeek #1847), extension APIs (Pi), provider proliferation (OpenCode), daemon/server modes (Qwen Mode B) |
| **Governance** | Top-down, changelog opacity (Claude `/buddy` removal), rapid A/B testing | Community-driven, RFC-style design (Qwen #3803), contributor-led architecture (kitlangton's OpenCode refactor) |
| **Distinctive Bets** | Codex: mobile remote as differentiator; Copilot: GitHub-native integration; Claude: emotional UX (`/buddy`) | DeepSeek: polyglot runtime tools; Pi: supply-chain security; Qwen: production daemon mode; OpenCode: Effect-based functional architecture |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **🔥 Most Active** | **OpenAI Codex** (50 PRs, rapid releases), **DeepSeek TUI** (18 PRs, contributor-led architecture) | Codex: release stress or adoption surge; DeepSeek: recovery-driven velocity with clear roadmap |
| **📈 Growing** | **Pi** (security hardening + local LLM demand), **Qwen Code** (Mode B production push, despite release failures), **OpenCode** (model support velocity, architectural cleanup) | Strong contributor cultures, responsive to community gaps |
| **⚖️ Stable / Mature** | **Gemini CLI** (measured critical fixes, P1 triage), **GitHub Copilot CLI** (release-driven, low community PR volume) | Predictable but less permeable to external contribution |
| **⚠️ Stagnant / At Risk** | **Claude Code** (5 PRs, no merges, trust erosion from silent removals), **Kimi CLI** (minimal activity, attention-drift bug unresponded) | Community goodwill depleting; competitive risk from more open alternatives |

**Maturity Signals:**
- **Codex**: Highest institutional velocity, but compaction regressions suggest test debt
- **Claude Code**: Unprecedented issue engagement (#45596) as **negative** signal—community organizing against product decisions
- **Qwen Code**: Most explicit production-readiness roadmap (F1–F5 waves), but release pipeline fragility threatens credibility
- **DeepSeek TUI**: Most ambitious extensibility architecture; Rust-based performance positioning

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Agent memory as critical bottleneck** | Qwen's 5 OOM vectors, Claude's JSONL data loss, Codex's compaction breaks, Gemini's subagent hangs | Long-session reliability is now **table stakes**; tools failing here will lose power users |
| **MCP as de facto standard with auth friction** | OAuth regressions (Claude #37747), re-auth loops (Copilot #2536), transport pooling (Qwen #4336), UI ghost states (Kimi #2328) | Expect MCP to consolidate, but auth/lifecycle tooling severely immature—integration cost underestimated |
| **"Reasoning transparency" as UX axis** | DeepSeek hidden-thinking token waste (#1842), Claude streaming thinking summaries (#60939), thinking signature bugs (Pi #4462) | Users demand **granular control** over reasoning visibility, not binary show/hide |
| **Terminal/PTY layer as undifferentiated hard problem** | Copilot's v1.0.49 regression cluster, DeepSeek IME deadlock, Gemini SIGHUP fixes, Claude auto-collapsing outputs | Cross-platform terminal reliability is **not solved**; dedicated TUI frameworks (Bubble Tea, Ratatui) still insufficient |
| **Cost visibility as trust prerequisite** | Copilot `/chronicle cost-tips`, Pi token usage listeners, OpenCode billing ambiguity, Codex 34GB logs | Opaque spending drives churn; per-request cost surfacing becoming expected |
| **Pluggability over configurability** | DeepSeek tool registry, Pi extension events, OpenCode hooks, Claude's removed `/buddy` provoking backlash | Users want **replaceable parts**, not settings toggles; monolithic design increasingly rejected |
| **Windows as canary for engineering quality** | Every tool shows disproportionate Windows bug load | Windows investment (or lack thereof) signals **platform strategy seriousness** |

---

*Report compiled from 9 tool digests covering 200+ issues and 150+ PRs, 2026-05-20/21.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-21 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Universal pain point—every Claude document output affected; author argues this should be core behavior, not a skill |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) with LibreOffice/ISO standard compliance | Enterprise open-source document workflow demand; bridges gap in open-standard office automation |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised skill improving clarity, actionability, and single-conversation executability of design guidance | Meta-improvement: making skills actually *actionable* by Claude within context limits |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Two meta-skills evaluating skill structure/documentation (20% weighting) and security posture | First systematic quality framework for the skills ecosystem itself |
| 5 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, component testing | Addresses critical gap in Claude's code generation reliability |
| 6 | **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 🟡 Open | Deploy full-stack web apps directly from Claude to public URLs via [appdeploy.ai](https://appdeploy.ai/) | "Vibe coding" to production deployment; closes the build-to-host gap |
| 7 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via `osascript`/AppleScript, replacing screenshot-based computer use | Two-tier permission system; performance vs. accessibility trade-off debate |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Comprehensive enterprise ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub coverage | Broadest enterprise platform skill proposed; scope vs. maintainability tension |

---

## 2. Community Demand Trends

Derived from highest-comment Issues, ranked by engagement:

| Trend | Representative Issue | Demand Signal |
|:---|:---|:---|
| **Org-wide Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) | Enterprise teams need shared skill libraries, not manual .skill file Slack/Teams passing |
| **Skill Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍) | `claude -p` 0% skill trigger rate—fundamental invocation mechanism broken for programmatic use |
| **Trust Boundary / Security** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 2 👍) | `anthropic/` namespace impersonation risk; community skills indistinguishable from official |
| **Plugin Architecture Cleanup** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍) | Duplicate skills across `document-skills`/`example-skills` plugins wasting context window |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Skills-as-MCPs: formal API contracts for algorithmic-art → `generateAlgorithmArt({...})` |
| **Bedrock Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS enterprise deployment path unclear |

**Emerging themes**: Workflow automation (n8n-builder #190), persistent memory (shodh-memory #154, AURELION #444), codebase audit (inventory #147), and generative media (masonry #335) represent adjacent demand clusters.

---

## 3. High-Potential Pending Skills

Active PRs with sustained engagement, merge-ready indicators:

| Skill | PR | Last Activity | Merge Blocker Assessment |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Core vs. skill architecture decision; Anthropic may prefer native implementation |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Stable; awaiting review queue |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Recently active; comprehensive scope may need splitting |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | 2026-05-04 | **Most recently updated**; external service dependency review |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 2026-05-06 | Four-skill bundle; cognitive framework complexity may require simplification |
| **Sensory** | [#806](https://github.com/anthropics/skills/pull/806) | 2026-04-02 | Permission model security review pending |

**Quality fixes cluster**: Three PRs by [Lubrsy706](https://github.com/Lubrsy706) (#538, #539, #541) demonstrate mature maintenance culture—case-sensitivity, YAML validation, and OOXML ID collision fixes suggest production-hardened document skill ecosystem.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability infrastructure*—not more skills, but better distribution, trigger guarantees, trust verification, and cross-platform (Bedrock/MCP/org-sharing) interoperability for the skills already being built.**

The gap between "cool skill demo" and "production team workflow" remains the dominant friction point.

---

# Claude Code Community Digest — 2026-05-21

---

## 1. Today's Highlights

The community's month-long campaign to restore the `/buddy` skill reached a crescendo with **1,109 upvotes and 250 comments** on a consolidated plea issue, making it the most-engaged topic in the repository's history. Meanwhile, a **critical data-loss regression** in versions 2.1.144/145 was discovered where conversation JSONL files fail to persist message content, and an MCP OAuth authentication regression broke all providers supporting client metadata documents in recent releases.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy — A Consolidated Plea from the Community** | The removal of `/buddy` in v2.1.97 without changelog notice has become a defining community grievance; the skill provided emotional companionship and session continuity for thousands of developers. | **1,109 👍, 250 comments** — unprecedented engagement with organized community advocacy including memorial artwork and daily "buddy checks" |
| [#60984](https://github.com/anthropics/claude-code/issues/60984) | **Regression: conversation JSONL files only save ai-title, no message content** | **Data-loss bug** in 2.1.144/145 breaks persistent conversation history; users lose entire session context. | 3 comments, newly reported; urgent severity given data-loss label |
| [#37747](https://github.com/anthropics/claude-code/issues/37747) | **MCP OAuth regression: redirect_uris missing port causes auth failure** | Breaks **all** MCP OAuth providers advertising `client_id_metadata_document_supported` since v2.1.80; affects enterprise integrations. | 48 👍, 15 comments; has reproduction; cross-referenced with provider docs |
| [#60366](https://github.com/anthropics/claude-code/issues/60366) | **Saying "hi" triggers Usage Policy violation error** | False-positive safeguard blocking benign greetings; indicates over-tuned safety classifier. | 3 👍, 13 comments; users reporting similar trivial triggers |
| [#36351](https://github.com/anthropics/claude-code/issues/36351) | **1M context window removed from Desktop Code tab model picker** | Max plan subscribers lost advertised capability post-update; potential billing/pricing discrepancy. | 10 👍, 15 comments; ongoing since March |
| [#29573](https://github.com/anthropics/claude-code/issues/29573) | **Claude creating file limit filesystem bug on long sessions** | macOS filesystem exhaustion from accumulated temp/session files; requires manual cleanup. | 18 👍, 11 comments; affects power users and CI environments |
| [#11334](https://github.com/anthropics/claude-code/issues/11334) | **Allow configuration to prevent auto-collapsing of long Bash outputs** | Impedes debugging workflows when command output is truncated in TUI. | 24 👍, 16 comments; long-standing request since November 2025 |
| [#58192](https://github.com/anthropics/claude-code/issues/58192) | **/goal Stop hook fails with "Prompt is too long" when goal text is large** | Hooks system breaks on legitimate use cases; no workaround for large goals. | 4 👍, 7 comments; has reproduction |
| [#56840](https://github.com/anthropics/claude-code/issues/56840) | **Remote SSH session crashes immediately on Max/OAuth accounts** | Blocks remote development workflows for paid subscribers on Windows. | 2 👍, 5 comments; has reproduction |
| [#61007](https://github.com/anthropics/claude-code/issues/61007) | **--mcp-config dynamic entries silently dropped when server name in disabledMcpServers** | CLI flag behavior contradicts documentation; silent failure mode impedes debugging. | New; 2 comments; has reproduction |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#60928](https://github.com/anthropics/claude-code/pull/60928) | **docs: add README for security-guidance plugin** | Documents monitored patterns, hook mechanics, session deduplication, and `ENABLE_SECURITY_REMINDER` env var for the previously undocumented plugin. | Open |
| [#60813](https://github.com/anthropics/claude-code/pull/60813) | **Fix: Excessive token consumption on initial prompt and continuations** | Claims to address [#56136](https://github.com/anthropics/claude-code/issues/56136); description emphasizes "premium solution" with visual design elements but lacks technical specifics in summary. | Open |
| [#60732](https://github.com/anthropics/claude-code/pull/60732) | **docs: polish plugins README wording** | Minor copy improvement to plugin ecosystem description; verified for natural reading flow. | Open |
| [#60427](https://github.com/anthropics/claude-code/pull/60427) | **docs: use standard GitHub capitalization in README** | Corrects product name casing in repository description. | Open |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | **s** | Placeholder/empty PR with single character title; likely accidental or test submission. | Open |

*Only 5 PRs updated in the last 24 hours; no merge activity reported.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **TUI/UX Customization** | [#45596](https://github.com/anthropics/claude-code/issues/45596) (buddy), [#11334](https://github.com/anthropics/claude-code/issues/11334) (output collapsing), [#58588](https://github.com/anthropics/claude-code/issues/58588) (programmatic /rename, /color), [#60668](https://github.com/anthropics/claude-code/issues/60668) (suppress Ultraplan), [#60939](https://github.com/anthropics/claude-code/issues/60939) (streaming thinking summaries) | **High** — dominant theme across issue types |
| **Hooks System Robustness** | [#58192](https://github.com/anthropics/claude-code/issues/58192) (goal length limits), [#52715](https://github.com/anthropics/claude-code/issues/52715) (PreToolUse silent failures), [#37780](https://github.com/anthropics/claude-code/issues/37780) (IS_DEMO trust bypass), [#59513](https://github.com/anthropics/claude-code/issues/59513) (VSCode hook parity) | **Moderate-High** — hooks are power-user critical path |
| **Model Control & Instruction Following** | [#13689](https://github.com/anthropics/claude-code/issues/13689) (instruction adherence), [#60981](https://github.com/anthropics/claude-code/issues/60981) (parallel tool call ignoring), [#60988](https://github.com/anthropics/claude-code/issues/60988) (false-positive safeguards) | **Moderate** — fundamental reliability concerns |
| **Cross-Platform Parity** | [#34496](https://github.com/anthropics/claude-code/issues/34496) (Windows git detection), [#56840](https://github.com/anthropics/claude-code/issues/56840) (Windows SSH crashes), multiple macOS-specific regressions | **Persistent** — Windows consistently lags |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Silent feature removals / undocumented changes** | Recurring | **Severe trust erosion** | [#45596](https://github.com/anthropics/claude-code/issues/45596) — no changelog mention for `/buddy` removal; community now scrutinizes every update |
| **Regressions in stable workflows** | High | **Productivity loss, data loss** | [#60984](https://github.com/anthropics/claude-code/issues/60984) (data loss), [#37747](https://github.com/anthropics/claude-code/issues/37747) (OAuth), [#60981](https://github.com/anthropics/claude-code/issues/60981) (tool call behavior) |
| **False-positive safety blocks** | Increasing | **Workflow interruption** | [#60366](https://github.com/anthropics/claude-code/issues/60366) ("hi" blocked), [#60988](https://github.com/anthropics/claude-code/issues/60988) (fiction Q&A blocked); suggests classifier tuning issues |
| **Hooks system fragility** | Moderate-High | **Automation unreliability** | Multiple hook-related bugs with silent failures; debugging requires deep internals knowledge |
| **Windows as second-class platform** | Chronic | **Excluded user base** | Installer failures, git detection, SSH crashes, context window discrepancies — all disproportionately affect Windows |
| **Lack of configuration surface for TUI behavior** | Persistent | **Daily friction** | Output collapsing, session naming, color schemes, plan mode prompts — all require workarounds or are unconfigurable |

---

*Digest compiled from 50 issues and 5 pull requests updated 2026-05-20/21.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-21

---

## 1. Today's Highlights

The Codex team shipped **v0.132.0** with major Python SDK authentication improvements and pushed two rapid alpha follow-ups (v0.133.0-alpha.1/3), signaling an accelerated release cadence. Windows sandbox hardening dominates PR activity with bolinfest's multi-PR `PermissionProfile` migration nearing completion, while remote control reliability and context compaction bugs are drawing urgent community attention. The issue tracker shows 50 active items in 24 hours—unusually high velocity suggesting either a recent release stress period or growing user adoption.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.132.0](https://github.com/openai/codex/releases/tag/rust-v0.132.0)** | Stable | **Python SDK first-class auth**: API key login, ChatGPT browser/device-code flows, account inspection, logout APIs ([#23093](https://github.com/openai/codex/issues/23093)); simplified Python turn APIs for text-only workflows (plain string input, handle-based output) |
| **[v0.133.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.133.0-alpha.1)** | Alpha | Release prep; no detailed notes |
| **[v0.133.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.133.0-alpha.3)** | Alpha | Release prep; no detailed notes |

The stable release's auth overhaul addresses a long-standing SDK gap, but the rapid alpha succession suggests either hotfix validation or feature flag work for v0.133.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#10384](https://github.com/openai/codex/issues/10384)** | `request_user_input` tool now available in code mode (CLOSED) | Closes a 3.5-month gap where interactive tools were CLI-only; unifies agent UX across modes | 28 comments, 111 👍—highest engagement in dataset; vbp1's advocacy paid off |
| **[#9926](https://github.com/openai/codex/issues/9926)** | `ask_user_question` tool: tabbed questionnaire UI (OPEN) | Structured Q&A vs. free-form chat is a paradigm shift for agent reliability; reduces ambiguity loops | 26 comments, 32 👍; vbp1's follow-up to #10384 shows sustained design investment |
| **[#21671](https://github.com/openai/codex/issues/21671)** | `/compact` fails with `service_tier` parameter in 0.129.0 (CLOSED) | Context compaction is critical for long sessions; regression broke core workflow | 19 comments; rapid fix validates compaction as priority area |
| **[#15277](https://github.com/openai/codex/issues/15277)** | `apply_patch` fails on Windows after first sandbox write (CLOSED) | Windows sandbox + VS Code extension intersection; enterprise Windows dev blocker | 18 comments; sandbox-file system interaction remains fragile |
| **[#23078](https://github.com/openai/codex/issues/23078)** | Mobile remote cannot re-pair after Mac device removal (OPEN) | Remote control is a flagship differentiator; auth state machine bug breaks core loop | 14 comments, 4 👍; paired with #22802, #23699 as remote reliability cluster |
| **[#23367](https://github.com/openai/codex/issues/23367)** | v0.131 regression: wrong startup folder (OPEN) | Basic CLI correctness; breaks muscle memory and scripts | 12 comments, 10 👍; high 👍/comment ratio = silent pain |
| **[#22802](https://github.com/openai/codex/issues/22802)** | Mobile remote "Secure setup failed" (OPEN) | Companion to #23078; secure pairing is UX bottleneck | 11 comments, 4 👍; iOS/MacOS specific |
| **[#20214](https://github.com/openai/codex/issues/20214)** | Windows 11 app freezes/stutters (OPEN) | Performance regression on mainstream hardware (Ryzen 5, 32GB RAM) | 10 comments, 14 👍; Microsoft Store distribution may complicate debugging |
| **[#23340](https://github.com/openai/codex/issues/23340)** | `/goal` loop: 480KB log lines, 34GB/day (OPEN) | Extreme observability cost; chain-nested tracing span explosion | 9 comments; infrastructure cost + debuggability hit |
| **[#23694](https://github.com/openai/codex/issues/23694)** | Remote compact "array too long" in 0.132.0 (OPEN) | **New in stable release**—compaction broken again, different error | 5 comments; suggests 0.132.0 may need hotfix |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Significance |
|---|-----|-------------|------------|
| **[#23714](https://github.com/openai/codex/pull/23714)** | Windows sandbox: profile-native elevated APIs (CLOSED) | Final `PermissionProfile` migration step for Windows elevated backend | Unblocks #23715; bolinfest's 3-PR sequence (23167 → 23714 → 23715) shows deliberate architecture |
| **[#23715](https://github.com/openai/codex/pull/23715)** | Core: pass permission profiles to Windows runner (OPEN) | Functional handoff—core stops sending compatibility `SandboxPolicy` | Completes Windows sandbox modernization; security posture improvement |
| **[#23786](https://github.com/openai/codex/pull/23786)** | SDK: launch packaged Codex runtimes (OPEN) | Python/TS SDKs align with new release artifact layout (`bin/codex` → packaged) | Critical for SDK/runtime version consistency; prevents drift |
| **[#23785](https://github.com/openai/codex/pull/23785)** | Normalize legacy context compaction history (OPEN) | Fixes deserialization of pre-migration `context_compaction` items | Directly addresses #23694-class bugs; compaction reliability |
| **[#23774](https://github.com/openai/codex/pull/23774)** | Reject read-only fallback with approvals disabled (CLOSED) | Prevents dead-end sessions: `approval_policy = "never"` + rejected full access = blocked writes | Edge case but sharp; safety UX improvement |
| **[#23519](https://github.com/openai/codex/pull/23519)** | Rollout-backed thread content search (OPEN) | Experimental `thread/search` using `rg` over JSONL rollouts | Enables session archaeology without loading full threads; performance play |
| **[#23766](https://github.com/openai/codex/pull/23766)** | Constrain Windows sandbox requirements (OPEN) | Managed requirements now bind Windows sandbox implementation selection | Enterprise policy enforcement; closes elevation fallback bypass |
| **[#23778](https://github.com/openai/codex/pull/23778)** | Prompt-for-writes MCP tool approval mode (OPEN) | New approval tier: read-only-hinted tools skip approval, others prompt | Fine-grained MCP security; reduces friction for safe tools |
| **[#23783](https://github.com/openai/codex/pull/23783)** | Exclude completed output from streamed Responses (OPEN) | `exclude: ["output"]` on streamed creates; reduces redundant data transfer | Latency/bandwidth optimization; streaming efficiency |
| **[#23775](https://github.com/openai/codex/pull/23775)** | Remote control: retry after auth recovery (OPEN) | Wakes websocket retry loop on auth fix; fixes #23078-class issues | Remote reliability; user-initiated recovery currently stalls |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Structured agent-user interaction** | #10384 (closed), #9926 (open) | High—vbp1's sustained push for questionnaire/tabbed UI over free-form chat |
| **Shell-native affordances in TUI** | #14673 (path autocomplete), #23773 (PowerShell 7 support, closed) | Moderate—terminal integration depth as differentiator |
| **Remote/mobile parity** | #23078, #22802, #23699, #23659, #23775 | Very high—5+ active issues/PRs; mobile remote is strategic priority |
| **Windows ecosystem completeness** | #15277, #22532, #23777, #22378, #23740, #23773 | Very high—sandbox, WSL, terminal rendering, default paths all in flux |
| **Observability/telemetry control** | #23340 (log explosion), #23519 (search) | Emerging—scale pain becoming visible |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Context compaction regressions** | 2 breaks in 3 versions (#21671, #23694) | Critical | PR #23785 in flight; suggests test gap for legacy session migration |
| **Remote control auth/reliability** | 5+ issues (#23078, #22802, #23699, #23775, #23659) | High | PR #23775 addresses retry; Android provider override (#23659) needs design |
| **Windows as second-class platform** | 8+ issues across sandbox, WSL, terminal, performance | High | Major PR investment (#23714-23715-23766) shows recognition; execution lag |
| **CLI startup/session correctness** | #23367 (wrong folder), #23515 (worktree interference), #22037 (resume picker blocks) | Moderate-High | Session state management complexity growing with features |
| **Observability at scale** | #23340 (34GB logs) | Moderate | Tracing architecture may need structural limits, not just optimization |
| **Documentation drift** | #22105 (MCP config key mismatch) | Low-Moderate | Plugin ecosystem maturity gap |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-20 to 2026-05-21.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-21

## Today's Highlights
The Gemini CLI team is actively hardening core infrastructure with three critical fixes landing today for data corruption during large file writes, quota exhaustion loops, and session scan crashes. Meanwhile, agent reliability remains the dominant theme in open issues, with subagent hang and recovery problems drawing significant community attention and maintainer prioritization.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | Follow-up to behavioral evals initiative with 76 tests across 6 Gemini variants; foundational for agent quality measurement | 7 comments, P1, maintainer-tracked |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could reduce token waste and misaligned reads via precise method-boundary extraction; explores `tilth`/`glyph`/`ast-grep` | 7 comments, 👍1, linked to #22746/#22747 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Critical UX failure—simple operations like folder creation block for hours; workaround (disable subagents) degrades capability | 7 comments, 👍8, high user impact |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS interruption** | Silent failure mode hides incomplete work; `codebase_investigator` specifically affected | 6 comments, 👍2, reliability concern |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underutilizes skills and sub-agents** | Custom skills (gradle, git) ignored unless explicitly prompted—wastes user configuration investment | 6 comments, anecdotal but widely relatable |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs with "Waiting input"** | Simple commands falsely appear interactive; breaks automation trust | 5 comments, 👍3, frequent occurrence reported |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux compatibility gap for headless automation; `Termination Reason: GOAL` with no actual progress | 4 comments, platform-specific blocker |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory logging lacks deterministic redaction** | Secrets reach model context before prompt-level redaction; privacy/security gap | 3 comments, security-labeled |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Invalid Auto Memory patches silently skipped** | Malformed patches escape quarantine; aggregate dismiss only handles valid patches, leaving debris | 3 comments, data integrity issue |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard limit hit by power users; needs intelligent tool scoping rather than crude truncation | 3 comments, scaling bottleneck |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#27320](https://github.com/google-gemini/gemini-cli/pull/27320) | **Mitigate data corruption in `write_file` on massive text blocks** | Splits 6000+ char literals/base64 into chunked writes; addresses token limit and attention degradation causing truncated files | **Open** — P1, today |
| [#27315](https://github.com/google-gemini/gemini-cli/pull/27315) | **Dynamic fallback routing for exhausted quota models** | Eliminates infinite UI dialog loop when utility models (e.g., `llm-edit-fixer`) hit quota; routes to available alternatives | **Closed** — merged today |
| [#27317](https://github.com/google-gemini/gemini-cli/pull/27317) | **Defensive directory checks in session/checkpoint scans** | Prevents `EISDIR` crashes when directories match filename patterns during scans | **Open** — today |
| [#27323](https://github.com/google-gemini/gemini-cli/pull/27323) | **Refresh logger after `/clear` session reset** | Fixes stale session ID in logs post-clear; ignores async init races | **Open** — today |
| [#27292](https://github.com/google-gemini/gemini-cli/pull/27292) | **Restore non-interactive stdin raw mode on exit** | Safer Ctrl+C handling: restores TTY state in exit handlers, not just `finally` path | **Open** — today |
| [#27232](https://github.com/google-gemini/gemini-cli/pull/27232) | **Ensure last message is processed in context** | Fixes edge case where final agent message dropped from context window | **Open** — 2 days |
| [#27267](https://github.com/google-gemini/gemini-cli/pull/27267) | **Prevent SIGHUP kills in PTY (WSL2/Kitty/Alacritty)** | Redesigned from scratch after security review; fixes terminal emulator specific crashes | **Closed** — merged |
| [#27211](https://github.com/google-gemini/gemini-cli/pull/27211) | **Centralize path validation for malformed prompts** | Bottlenecks path resolution to prevent `ENAMETOOLONG` and improves `@-command` attachment intelligence | **Closed** — merged |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | **Union-find context compaction for AgentHistoryProvider** | Alternative to binary split: semantic clustering preserves related messages in "cold" buffer | **Open** — awaiting review |
| [#21541](https://github.com/google-gemini/gemini-cli/pull/21541) | **EBUSY fallback and TOML parse recovery** | Cherry-picks abandoned fix; adds rename retry and graceful TOML corruption handling | **Open** — long-running |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling integration** | #22745, #22746, #22747 | High — explicit tooling recommendations (`tilth`, `glyph`, `ast-grep`) with quality/efficiency hypotheses |
| **Backgroundable local subagents** | #22741 | Moderate — Ctrl+B request for non-blocking exploration/build tasks |
| **Agent self-awareness (flags, hotkeys, self-execution)** | #21432 | Emerging — meta-cognitive capability for CLI to explain itself |
| **Destructive operation guardrails** | #22672 | Steady — git force/reset prevention, DB modification awareness |
| **Browser agent resilience** | #22232, #22267, #21983 | Active — session takeover, lock recovery, settings.json respect |

---

## Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|--------------|
| **Subagent reliability (hangs, false success, underutilization)** | Critical | #21409 (hang), #22323 (false GOAL), #21968 (skills ignored), #22093 (unauthorized launch), #22601 (eval gaps) |
| **Shell/PTY execution state desync** | High | #25166 ("Waiting input" lie), #27267 (SIGHUP kills), #23505 (Windows arrow keys), #24935 (editor exit corruption) |
| **Auto Memory quality and transparency** | Moderate-High | #26525 (redaction), #26523 (invalid patches), #26522 (infinite retry), #26516 (tracking rollup) |
| **Tool quantity scaling limits** | Moderate | #24246 (128 tool ceiling), #23571 (tmp script sprawl) |
| **Cross-platform terminal compatibility** | Persistent | #21983 (Wayland), #21840/#25030 (Termux ripgrep), #26912 (zsh detection) |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity. "🔒 maintainer only" issues included where metadata is public.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-21

---

## 1. Today's Highlights

GitHub shipped three rapid-fire releases (v1.0.51 through v1.0.51-3) introducing session resumability via UUID, a new `/security-review` slash command, and MCP hook extensibility—while a wave of v1.0.49 regressions hit WSL and Linux users hard, generating 12+ comment threads on keyboard input and paste failures. The team closed 7 issues in 24h but left 41 open, with platform-specific terminal bugs dominating community frustration.

---

## 2. Releases

### [v1.0.51](https://github.com/github/copilot-cli/releases/tag/v1.0.51) — 2026-05-20
- `--session-id=<id>` enables deterministic session resumption and new-session creation with specific UUIDs
- `/remote` commands now respect org-level cloud policy controls with clear error messaging when disabled; usable while agent is working

### [v1.0.51-2](https://github.com/github/copilot-cli/releases/tag/v1.0.51-2) — 2026-05-20
- **`/memory show`** now includes documentation links for Copilot Memory management
- **Fixed:** Session naming for usage-based billing users; subcommand completion now inserts selection on Enter instead of submitting partial commands

### [v1.0.51-3](https://github.com/github/copilot-cli/releases/tag/v1.0.51-3) — 2026-05-20
- **`/security-review`** slash command: automated security vulnerability scanning of code changes
- **`preMcpToolCall` hook** for hook providers to intercept and modify outgoing MCP request metadata
- **`/chronicle cost-tips`** subcommand: personalized token usage analysis and cost reduction recommendations

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3385](https://github.com/github/copilot-cli/issues/3385) | **WSL: CLI stuck after 1.0.49 upgrade** | Complete usability failure on major dev platform; no workaround posted | 🔥 12 comments, 8 👍 |
| [#3401](https://github.com/github/copilot-cli/issues/3401) | **Ctrl-G vim editor drops ~50% keystrokes** | Core editing workflow broken; affects tmux/terminal multiplexing stack | 6 comments, 4 👍, **CLOSED** |
| [#2758](https://github.com/github/copilot-cli/issues/2758) | **Sub-agent model override blocked by cost guard** | Limits agent architecture flexibility; enterprise cost controls vs. capability tradeoff | 5 comments, 2 👍 |
| [#3408](https://github.com/github/copilot-cli/issues/3408) | **WSL: 2-min startup, post-approval blocking (1.0.49)** | Performance regression breaking interactive workflows; permission system interaction | 5 comments, 2 👍, **CLOSED** |
| [#1898](https://github.com/github/copilot-cli/issues/1898) | **`ask_user` tool disappeared** | Unannounced feature removal breaks established agent interaction patterns | 5 comments, 1 👍 |
| [#2792](https://github.com/github/copilot-cli/issues/2792) | **Auto-switch model: planning vs. execution** | High-value cost/performance optimization; 8 👍 shows strong demand | 3 comments, 8 👍 |
| [#3414](https://github.com/github/copilot-cli/issues/3414) | **Paste regression on GNOME Wayland (1.0.49)** | Linux desktop compatibility; bisected to specific version | 2 comments |
| [#3392](https://github.com/github/copilot-cli/issues/3392) | **Bash tool broken on NixOS ≥1.0.49** | NixOS is growing in CI/devcontainer use; `strace` debugging provided by reporter | 2 comments, 3 👍 |
| [#3304](https://github.com/github/copilot-cli/issues/3304) | **`ERR_HTTP2_INVALID_SESSION` mid-turn retries** | Underlying network reliability; kills long reasoning sessions | 3 comments |
| [#2854](https://github.com/github/copilot-cli/issues/2854) | **Google Gemini unavailable in CLI** | Model diversity demand; 14 👍 makes this top-voted feature gap | 1 comment, 14 👍 |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.** (0 items)

The release velocity appears entirely driven by internal GitHub team pushes rather than community contribution this cycle.

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Model flexibility & cost control** | [#2758](https://github.com/github/copilot-cli/issues/2758) (sub-agent models), [#2792](https://github.com/github/copilot-cli/issues/2792) (plan/exec switching), [#2854](https://github.com/github/copilot-cli/issues/2854) (Gemini) | High — enterprise cost optimization + model choice are recurring themes |
| **Session/state portability** | [#3021](https://github.com/github/copilot-cli/issues/3021) (project-local `.copilot/`), [#3427](https://github.com/github/copilot-cli/issues/3427) (persistent `/remote` config), `--session-id` in v1.0.51 | Medium — Docker/CI ephemeral environments driving need |
| **MCP ecosystem maturity** | [#2944](https://github.com/github/copilot-cli/issues/2944) (registry browsing), [#2536](https://github.com/github/copilot-cli/issues/2536) (auth persistence), [#3421](https://github.com/github/copilot-cli/issues/3421) (ADO path handling), `preMcpToolCall` hook | Medium-high — MCP is active integration surface but auth/discovery friction remains |
| **Agent task management** | [#3142](https://github.com/github/copilot-cli/issues/3142) (deferred todos) | Low — niche but power-user relevant |
| **Security & observability** | `/security-review` command, `/chronicle cost-tips` | Emerging — shipped features suggest GitHub prioritizing this |

---

## 6. Developer Pain Points

### 🔴 v1.0.49 Regression Cluster
Multiple confirmed regressions concentrated in terminal input handling across platforms:
- **WSL**: startup blocking, paste failure, session hang ([#3385](https://github.com/github/copilot-cli/issues/3385), [#3408](https://github.com/github/copilot-cli/issues/3408))
- **Linux/Wayland**: paste broken on GNOME ([#3414](https://github.com/github/copilot-cli/issues/3414))
- **tmux/multiplexer**: keystroke dropping in `$EDITOR`, rendering lag ([#3401](https://github.com/github/copilot-cli/issues/3401), [#3439](https://github.com/github/copilot-cli/issues/3439))
- **NixOS**: bash tool execution failure ([#3392](https://github.com/github/copilot-cli/issues/3392))

**Pattern**: Terminal/PTY layer changes in 1.0.49 introduced cross-platform input handling fragility.

### 🟡 MCP Authentication Friction
- Repeated re-auth for Atlassian ([#2536](https://github.com/github/copilot-cli/issues/2536))
- `redirectPort` ignored in `/mcp` flow ([#3418](https://github.com/github/copilot-cli/issues/3418))
- ADO server path encoding failures ([#3421](https://github.com/github/copilot-cli/issues/3421))

### 🟡 Model Availability Gaps
- Google Gemini absence most-upvoted feature request ([#2854](https://github.com/github/copilot-cli/issues/2854) — 14 👍)
- Sub-agent model restrictions limit advanced agent patterns ([#2758](https://github.com/github/copilot-cli/issues/2758))

### 🟢 Positive: Session Resumability
v1.0.51's `--session-id` and closed [#3427](https://github.com/github/copilot-cli/issues/3427) (persistent `/remote`) show GitHub responding to workflow continuity needs.

---

*Digest compiled from github.com/github/copilot-cli activity 2026-05-20 to 2026-05-21.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-21

---

## 1. Today's Highlights

No new release shipped in the last 24h, but development activity remains brisk with **4 open PRs** targeting documentation fixes, Unicode sanitization, web UI session handling, and dynamic token budgeting. The issue tracker shows **5 fresh items**, with MCP ecosystem reliability and long-context attention drift emerging as the most technically significant concerns.

---

## 2. Releases

*No releases in the past 24 hours. Latest stable remains v1.44.0.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#2331** | [Bug: v1.44.0 ignores agent.md rules in long conversations](https://github.com/MoonshotAI/kimi-cli/issues/2331) | **Critical for agent reliability**: `kimi-for-coding` model appears to suffer attention drift in extended contexts, treating explicit agent instructions as "background noise." This undermines the core value proposition of structured agent workflows. | 🔴 **Zero comments, zero upvotes** — newly filed, but severity warrants immediate triage. |
| **#2328** | [MCP startup UI stuck at `0/5 connected` despite functional servers](https://github.com/MoonshotAI/kimi-cli/issues/2328) | **UX/observability bug on Linux**: False-negative connection status masks healthy infrastructure. Users may abandon working setups or over-troubleshoot. Affects Linux Mint 22.3 specifically. | 🔴 **Fresh report** — likely affects other Debian-derivatives; needs repro confirmation. |
| **#2329** | [Can't auto-call GitNexus MCP](https://github.com/MoonshotAI/kimi-cli/issues/2329) | **MCP orchestration gap**: Agent fails to proactively invoke configured tools, forcing manual CLI fallback. Suggests either tool-discovery or prompt-routing issue in the MCP layer. | 🔴 **No engagement yet** — impacts GitNexus integration specifically. |
| **#2330** | [Hooks docs: desktop notification example non-functional](https://github.com/MoonshotAI/kimi-cli/issues/2330) | **Docs quality**: Broken `permission_prompt` matcher in official hooks documentation wastes developer time and erodes trust in configuration examples. | 🟡 **PR #2335 already open to fix** — responsive maintainership. |
| **#1536** | [Feature: `/title` command for manual session renaming](https://github.com/MoonshotAI/kimi-cli/issues/1536) *(closed)* | **UX polish**: Auto-generated titles fail for multi-topic sessions. Closure suggests implementation or deliberate rejection; 2-month-old request with minimal engagement. | 🟢 **Closed 2026-05-20** — check release notes for inclusion. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **#2335** | [docs: fix Notification hook matcher example](https://github.com/MoonshotAI/kimi-cli/pull/2335) | Replaces broken `permission_prompt` matcher with valid background-task notification types; syncs EN/CN docs and updates test fixtures. | 🟡 **Open** — paired with #2330 |
| **#2334** | [fix(kosong): sanitize surrogates before Kimi requests](https://github.com/MoonshotAI/kimi-cli/pull/2334) | **Defensive fix for Unicode edge cases**: Strips lone UTF-16 surrogates from system prompts, message history, and tool arguments pre-request. Prevents JSON serialization failures. Includes regression test with `ensure_ascii=False`. | 🟡 **Open** — hardening for non-ASCII workflows |
| **#2333** | [fix(web): open archived sessions from sidebar](https://github.com/MoonshotAI/kimi-cli/pull/2333) | Resolves archived session navigation: prevents validator from clearing valid archived selections, adds pagination-aware loading state. Fixes #2312. | 🟡 **Open** — web UI polish |
| **#2332** | [fix(kimi): clamp completion budget dynamically](https://github.com/MoonshotAI/kimi-cli/pull/2332) | **Removes hardcoded `max_tokens=32000`**: Computes per-request `max_completion_tokens` against actual context window. Reduces token waste and prevents truncation on long contexts. | 🟡 **Open** — efficiency + correctness improvement |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session metadata control** | #1536 (`/title` command) | Low — closed without visible resolution path |
| **MCP ecosystem maturity** | #2328 (UI state), #2329 (auto-invocation), #2330/#2335 (hooks docs) | **High** — tooling integration is active frontier |
| **Long-context reliability** | #2331 (agent.md drift) | Emerging — structural prompt adherence degrades at scale |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **MCP "ghost" connectivity** | Servers work but UI reports `0/5 connected`; tools fail to auto-invoke | 🔴 **High** — breaks trust in observability |
| **Context window attention decay** | Explicit agent instructions diluted in long sessions | 🔴 **High** — core product risk for coding workflows |
| **Documentation-example drift** | Official hooks samples non-functional (#2330) | 🟡 **Medium** — friction for new adopters |
| **Static token budgeting** | Hardcoded 32K limit wastes resources or truncates output | 🟡 **Medium** — being addressed in #2332 |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-05-20.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-21

---

## 1. Today's Highlights

OpenCode shipped **v1.15.6** with a polished TUI diff viewer and shell mode for `run`, while the community grappled with persistent clipboard bugs and free-tier model limits. A major internal refactor by contributor **kitlangton** is systematically dismantling `AppRuntime` in favor of per-service `ManagedRuntime`, signaling architectural cleanup for better testability.

---

## 2. Releases

### [v1.15.6](https://github.com/anomalyco/opencode/releases/tag/v1.15.6)

| Change | Impact |
|--------|--------|
| **TUI diff viewer** with collapsed single-child directories | Streamlines code review without leaving terminal |
| **Shell mode** added to `run` prompt | Direct shell execution without agent mediation |
| **On-demand subagent picker** replaces persistent tabs | Reduces UI clutter in multi-agent workflows |
| **Plugin load errors no longer fatal** | Resilience: one broken plugin won't crash the rest |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | **Copy-paste broken in CLI** — "copied to clipboard" notification but `ctrl+v` empty | Fundamental UX blocker; affects every platform | 🔥 38 comments, 19 👍 |
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | **"Free usage exceeded" on all free models** | Trust issue: users question if free tier exists at all | 31 comments, 9 👍 |
| [#4845](https://github.com/anomalyco/opencode/issues/4845) | **Prompt too long unrecoverable** (209K > 200K limit) with Opus 4.5 | Data loss risk: session corruption with no graceful degradation | 30 comments, 19 👍 |
| [#8601](https://github.com/anomalyco/opencode/issues/8601) | **Unknown certificate verification error** across multiple AI providers | Security/connectivity blocker; Gemini 3 login also broken | 26 comments, 2 👍 |
| [#19948](https://github.com/anomalyco/opencode/issues/19948) | **Ollama local integration broken** — invalid JSON responses | Local/self-hosted workflow critical for privacy-conscious users | 8 comments |
| [#10012](https://github.com/anomalyco/opencode/issues/10012) | **Question tool hangs headless `opencode run`** | CI/automation killer: breaks scripted workflows entirely | 7 comments |
| [#28162](https://github.com/anomalyco/opencode/issues/28162) | **~500ms typing latency in chat input** (contenteditable) | Performance regression making tool unusable for fast typists | 4 comments |
| [#28480](https://github.com/anomalyco/opencode/issues/28480) | **Windows 11: silent startup failure** | No error, no crash report — impossible to debug | 4 comments |
| [#28543](https://github.com/anomalyco/opencode/issues/28543) | **Auto-compact infinite loop** with Copilot's Claude Opus 4.7-1M | Wrong context window detection (200K vs 1M) causes CPU thrashing | 2 comments |
| [#28545](https://github.com/anomalyco/opencode/issues/28545) | **MCP wildcard permissions ignored** | Security gap: `*` globbing bypasses configured restrictions | 3 comments |

---

## 4. Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#28551](https://github.com/anomalyco/opencode/pull/28551) | **Drop `AppRuntime` from `instance-runtime`** | Replaces singleton with per-service `ManagedRuntime` — enables better resource isolation | 🟢 Open |
| [#28528](https://github.com/anomalyco/opencode/pull/28528) | **Drop `AppRuntime` from tests** | Zero `AppRuntime` references in test suite; prerequisite for full deletion | 🟢 Open |
| [#28523](https://github.com/anomalyco/opencode/pull/28523) | **Refactor LLM route-first provider API** | Models carry `id/provider/route`; endpoints live on Route — cleaner provider abstraction | 🔴 Closed |
| [#28547](https://github.com/anomalyco/opencode/pull/28547) | **Vendored `effect-drizzle-sqlite` adapter** | Effect-native SQLite query builders without external dependency risk | 🔴 Closed |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | **Add Kiro (AWS) provider** | Expands enterprise AWS integration per Kiro T&C | 🟢 Open |
| [#28546](https://github.com/anomalyco/opencode/pull/28546) | **`OPENCODE_DATE` env override for system prompt** | Deterministic LLM replay for CI — testing infrastructure | 🟢 Open |
| [#28540](https://github.com/anomalyco/opencode/pull/28540) | **Fix TUI interactivity with piped stdin** | Root-cause fix for long-standing piped input breakage | 🟢 Open |
| [#28542](https://github.com/anomalyco/opencode/pull/28542) | **Preserve `reasoning_content` for Kimi K2.5/K2.6** | Fixes multi-turn tool call failures with Moonshot AI models | 🔴 Closed |
| [#28531](https://github.com/anomalyco/opencode/pull/28531) | **Treat symlink-to-directory as directory** | Fixes OneDrive/junction point traversal on Windows | 🔴 Closed |
| [#28541](https://github.com/anomalyco/opencode/pull/28541) | **Default new sessions to local project** | Prevents workspace pollution from inherited session state | 🔴 Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Model support velocity** | Gemini 3.5 Flash ([#28377](https://github.com/anomalyco/opencode/issues/28377)), Kimi K2.5/K2.6 fixes, Kiro provider | High — users expect day-1 model availability |
| **Hook/extensibility system** | `ToolBuild` hook ([#28353](https://github.com/anomalyco/opencode/issues/28353)), `model` field in SKILL.md frontmatter ([#28548](https://github.com/anomalyco/opencode/issues/28548)) | Growing — moving from closed to pluggable architecture |
| **Local/self-hosted robustness** | Ollama fixes, MCP cert validation skip ([#23530](https://github.com/anomalyco/opencode/pull/23530)), Scaleway/GitHub runner support ([#28481](https://github.com/anomalyco/opencode/issues/28481)) | Steady — enterprise air-gap and cost control needs |
| **Usage transparency** | CLI plan stats ([#27698](https://github.com/anomalyco/opencode/issues/27698)), cost calculation accuracy ([#28494](https://github.com/anomalyco/opencode/issues/28494)) | Emerging — billing trust issues driving demand |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Root Cause | Workaround Status |
|------------|-----------|------------|-----------------|
| **Clipboard broken on Linux/Windows** | Chronic, 18+ months | Platform-native integration fragile; `xclip` misidentifies content types | Partial fix in [#23552](https://github.com/anomalyco/opencode/pull/23552) |
| **Context window / auto-compaction disasters** | Recurring | Hardcoded limits, stale model configs (`zhipuai-coding-plan` at 0), wrong denominator for 1M models | Manual session fork/rollback |
| **Free tier ambiguity** | Spiking | Desktop vs CLI discrepancy ([#28530](https://github.com/anomalyco/opencode/issues/28530)); opaque server-side limits | None — user confusion |
| **Certificate/SSL verification** | Persistent | Corporate proxies, custom CAs not respected; error messages unhelpful | None documented |
| **Headless/CI reliability** | Growing | Question tool blocks forever, TUI assumes interactive stdin | Disable question tool manually |
| **Desktop startup failures** | Acute on Windows/Linux | UI state file corruption ([#28477](https://github.com/anomalyco/opencode/issues/28477)), silent Electron crashes | Clear `~/.config/opencode` state |

---

*Digest compiled from github.com/anomalyco/opencode activity ending 2026-05-21.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-21

## Today's Highlights

Pi shipped **v0.75.4** with hardened npm supply-chain security via shrinkwrap generation and lifecycle script lockdowns. The community is heavily focused on local/self-hosted LLM integrations, with a built-in llama-cpp provider in active PR review and multiple provider additions (NEAR AI, NanoGPT) landing. Windows compatibility and update reliability remain active friction points with multiple fixes in flight.

---

## Releases

### [v0.75.4](https://github.com/earendil-works/pi/releases/tag/v0.75.4)
Hardened npm install and release pipeline: CLI now ships with generated shrinkwrap for transitive dependencies, blocks accidental lockfile changes, verifies dependency pinning and lifecycle-script allowlists, and disables lifecycle scripts during self-update and local installs. Addresses supply-chain reproducibility concerns.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **Official local LLM provider extension** | Highest-demand feature for privacy-conscious and cost-sensitive users; would unify llama.cpp/ollama/LM Studio support | 19 comments, 29 👍 — actively discussed, julien-c has PRs in progress |
| [#4647](https://github.com/earendil-works/pi/issues/4647) | `pi update` fails for global pnpm install | Package manager ownership check incorrectly resolves symlinks, breaking updates for pnpm users | 12 comments, resolved via closed — indicates update system fragility |
| [#4430](https://github.com/earendil-works/pi/issues/4430) | Errors during long sessions (70-90k context) | Core reliability issue for power users; context window management breaks with tool errors | 7 comments, closed-because-refactor — suggests architectural fix needed |
| [#4763](https://github.com/earendil-works/pi/issues/4763) | npm folder in `.pi/agent` clogs iCloud sync | Default install location change unexpectedly broke cloud-sync workflows | 7 comments, user workaround needed |
| [#4740](https://github.com/earendil-works/pi/issues/4740) | `/packages` shows extensions with deleted repos | Registry hygiene issue; dead extensions degrade trust in marketplace | 6 comments, quick fix expected |
| [#4701](https://github.com/earendil-works/pi/issues/4701) | Wrong model answer (Claude identifies as Gemini) | Model identity confusion undermines reliability; likely routing/provider misconfiguration | 5 comments, concerning for multi-provider setups |
| [#4780](https://github.com/earendil-works/pi/issues/4780) | Windows path broken across drives | `E:\C:\Users\...` malformed paths break skill loading on non-C: drives | 3 comments, inprogress — Windows parity gap |
| [#4753](https://github.com/earendil-works/pi/issues/4753) | Skills list unconfigurable, unscalable token cost | Every skill injects full XML into system prompt; no opt-out or limit | 3 comments, **solved via extension** — shows extensibility filling gaps |
| [#4793](https://github.com/earendil-works/pi/issues/4793) | `pi install` fails with fnm on Windows | Node version manager incompatibility blocks extension ecosystem on Windows | 3 comments, inprogress |
| [#4786](https://github.com/earendil-works/pi/issues/4786) | `pi update` doesn't update (stuck on 0.74.1) | Update mechanism itself failing; users falling back to curl reinstall | 3 comments, critical UX regression |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#4823](https://github.com/earendil-works/pi/pull/4823) | **Built-in llama-cpp provider via inline ExtensionFactory** | Auto-activates on `LLAMA_*` env vars; discovers models from `/models` endpoint; uses extension hooks for dynamic refresh | **OPEN** — flagship local-LLM feature |
| [#4824](https://github.com/earendil-works/pi/pull/4824) | **Add `model_selector_open` extension event** | Lets extensions refresh provider state (e.g., remote model lists) on picker open; fire-and-forget to avoid UI blocking | **OPEN** — enables dynamic provider extensions |
| [#4756](https://github.com/earendil-works/pi/pull/4756) | **Async operations in tools (Windows Defender hang fix)** | Moves sync fs ops and image resizing to async/workers; fixes TUI lockups when Windows Defender scans files | **OPEN** — Windows stability critical |
| [#4797](https://github.com/earendil-works/pi/pull/4797) | **Custom Anthropic-compatible providers opt into adaptive thinking** | Config flag for corporate proxies requiring `thinking.type: "adaptive"`; fixes 400 errors on new model rollouts | **OPEN** — enterprise compatibility |
| [#4651](https://github.com/earendil-works/pi/pull/4651) | **Fetch portable Git Bash on Windows** | Auto-downloads ~350MB Git Bash like rg/find; draft pending community feedback on size tradeoff | **OPEN** — Windows shell dependency reduction |
| [#4788](https://github.com/earendil-works/pi/pull/4788) | **Device code login callback, refactor Copilot to use it** | Prepares shared OAuth path for Codex device flow; already tested with standalone `pi-ai` package | **OPEN** — SSH/remote login UX |
| [#4810](https://github.com/earendil-works/pi/pull/4810) | **OpenAI subscription device code flow** | Implements full device code flow for SSH/server environments; resolves long-standing #2253 | **CLOSED** — merged |
| [#4795](https://github.com/earendil-works/pi/pull/4795) | **Add NEAR AI Cloud as built-in provider** | OpenAI-compatible endpoint for vLLM + proxied models; zero new provider code needed | **CLOSED** — merged |
| [#4787](https://github.com/earendil-works/pi/pull/4787) | **Add NanoGPT as built-in provider** | Single-subscription multi-model aggregator; reduces API key sprawl for experimenters | **CLOSED** — merged |
| [#4804](https://github.com/earendil-works/pi/pull/4804) / [#4805](https://github.com/earendil-works/pi/pull/4805) | **Global LLM usage listener + session event enrichment** | Process-level pub/sub for token usage; extensions observe per-call costs without specialized hooks | **CLOSED** — merged |

---

## Feature Request Trends

1. **Local/self-hosted LLM first-class support** — Dominant theme: llama.cpp (#3357, #4823), ollama, LM Studio integration requests; dynamic model list fetching from `/models` endpoints becoming standard expectation
2. **Provider proliferation & standardization** — NEAR AI, NanoGPT, custom Anthropic proxies all seeking built-in status; tension between native support and extension-based flexibility
3. **Remote/SSH workflow polish** — Device code flows (#4810, #4788), `/update` TUI command (#4714) for in-session management
4. **Extension API surface expansion** — `agentDir` exposure, session control across CWDs, lifecycle events for model picker; ecosystem maturing
5. **Observability & cost control** — Token usage propagation (#4804), elapsed time indicators (#4806), skills token budgeting (#4753)

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Update mechanism reliability** | 🔴 High | #4647 (pnpm), #4786 (stuck version), #4833 (engine mismatch), #4793 (fnm/Windows) — update is a feature that must not fail |
| **Windows path/environment handling** | 🔴 High | #4780 (cross-drive paths), #4793 (fnm spawn), #4756 (Defender sync hangs), #4651 (Git Bash dependency) — consistent second-class experience |
| **Context/session stability at scale** | 🟡 Medium | #4430 (70-90k context breakage), #4462 (thinking signatures on replay) — long-session reliability gaps |
| **Extension lifecycle/stale context crashes** | 🟡 Medium | #4791 (uncaughtException on session replacement) — extension API safety holes |
| **TUI rendering edge cases** | 🟡 Medium | #4785 (spinner flicker), #4687 (screen reader noise), #4782 (Shift+Enter regression) — terminal UX debt |
| **Registry/package hygiene** | 🟢 Lower | #4740 (dead repos listed), #4808 (changelog versioning) — operational polish |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-21

## Today's Highlights

The Qwen Code project is intensively shipping toward **Mode B (`qwen serve`) production readiness**, with the F2–F4 daemon protocol waves advancing rapidly and multiple PRs landing for telemetry hardening and memory safety. Meanwhile, **two release builds failed** (nightly and preview), and community attention is heavily concentrated on **long-session memory management** — with four related issues/PRs active in the last 24 hours alone.

---

## Releases

**No new releases** in the last 24 hours. Notably, **two release workflows failed**:
- `v0.15.11-nightly.20260520.5fe12d4cc` — [Run #26133373806](https://github.com/QwenLM/qwen-code/actions/runs/26133373806)
- `v0.15.11-preview.3` — [Run #26133506840](https://github.com/QwenLM/qwen-code/actions/runs/26133506840)

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | **Mode B feature-priority roadmap toward v0.16 production-ready** | The canonical tracking issue for `qwen serve` stabilization; defines F1–F5 waves (MCP pool, protocol completion, client adapters, etc.). 22 comments show active architectural debate. | High engagement; doudouOUC driving implementation against wenshao's original design series. |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode (`qwen serve`): proposal & open decisions** | The foundational 6-chapter design series by wenshao that #4175 now tracks. Still receiving updates as §02 (1 daemon = 1 workspace) and later sections evolve. | 20 comments; serves as "source of truth" referenced by multiple PRs. |
| [#4351](https://github.com/QwenLM/qwen-code/issues/4351) | **OOM when working with local Qwen 3.6 + llama.cpp under Linux** | Real-world production failure: local LLM + Qwen Code competing for RAM causes session-terminating OOM, even on resume. | 7 comments, 👍1; yiliang114 actively investigating with #4286 and follow-ups #4363/#4364. |
| [#3914](https://github.com/QwenLM/qwen-code/issues/3914) | **API connected, no errors but then fail to fetch** | Persistent connectivity bug affecting OpenRouter and similar endpoints; "fetch failed" with no actionable error. | 8 comments, 👍2; ataknow's detailed env report suggests undici/dispatcher compatibility pattern seen in #4035. |
| [#4365](https://github.com/QwenLM/qwen-code/issues/4365) | **Custom resource attributes + metric cardinality controls for telemetry** | Production multi-tenant deployments need OTel resource tagging and cardinality guardrails to avoid cost explosions. | Fresh (1 comment); doudouOUC filed with PR #4367 already up. |
| [#4362](https://github.com/QwenLM/qwen-code/issues/4362) | **Auto Fix CI & Address Review Comments workflow** | GitHub-native background automation for PR hygiene — reduces maintainer toil, competitive with Copilot Workspace. | 1 comment; pomelo-nwu proposing opt-in design to avoid noise. |
| [#4350](https://github.com/QwenLM/qwen-code/issues/4350) | **Hostile-provider hardening: NaN/Infinity/negative on API usage fields** | Defensive programming against misbehaving OpenAI-compat proxies; prevents token arithmetic from poisoning compaction logic. | 1 comment; LaZzyMan's follow-up to #4345 shows systematic hardening approach. |
| [#4349](https://github.com/QwenLM/qwen-code/issues/4349) | **estimatePromptTokens: include previous turn's candidatesTokenCount** | Token estimation bug causing premature or late compaction triggers; affects cost and session stability. | 1 comment, 👍1; precise fix from LaZzyMan in the #4345 compaction series. |
| [#4364](https://github.com/QwenLM/qwen-code/issues/4364) | **Multi-GiB foreground stdout can fail with V8 string-length fatal** | Extreme output edge case crashing the process; separate from but related to long-session OOM work. | 0 comments; yiliang114's proactive boundary-testing finding. |
| [#4363](https://github.com/QwenLM/qwen-code/issues/4363) | **Oversized resumed history can fail with Invalid string length** | Resume path hitting V8's `String` length limit (~512MB-1GB) before heap OOM; complementary fix to #4286. | 0 comments; yiliang114 filing with PR expected. |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4366](https://github.com/QwenLM/qwen-code/pull/4366) | **fix(core): stop AbortSignal listener leak in long sessions** | Eliminates `MaxListenersExceededWarning: 1509 abort listeners` by properly removing nested AbortController listeners in agent runtime. Critical for session longevity. | Open, ready for review |
| [#4367](https://github.com/QwenLM/qwen-code/pull/4367) | **feat(telemetry): custom resource attributes + metric cardinality controls** | Implements #4365; adds `OTEL_RESOURCE_ATTRIBUTES` support and cardinality caps for production OTel deployments. Closes sub-issue of #3731. | Open, paired with issue |
| [#4360](https://github.com/QwenLM/qwen-code/pull/4360) | **feat(serve+sdk): F4 prereq — daemon protocol completion** | Adds `serverTimestamp`, `provenance`, `errorKind`, `state_resync_required` to daemon protocol. Unblocks F4 client-adapter wave. | Open, targets `daemon_mode_b_main` |
| [#4336](https://github.com/QwenLM/qwen-code/pull/4336) | **feat(serve): shared MCP transport pool [F2]** | Major delivery: 22 commits, +7966/−97 lines across 34 files. Shared MCP transport pool for `qwen serve` Mode B. F2 complete per #4175 roadmap. | Open, ready for review |
| [#4286](https://github.com/QwenLM/qwen-code/pull/4286) | **fix(core): replace structuredClone with shallow copy to prevent OOM** | Core memory fix: eliminates `structuredClone(this.history)` hot path in long sessions. Adds `getHistoryShallow()`, `peekLastHistoryEntry()` for safe read paths. | Open, addresses #4351, #4363, #4364 |
| [#4358](https://github.com/QwenLM/qwen-code/pull/4358) | **feat(vscode): surface ACP background notifications** | VSCode extension now drains background agent/monitor notifications and surfaces completions + model follow-ups as discrete chat messages. | Open |
| [#4359](https://github.com/QwenLM/qwen-code/pull/4359) | **feat(ci): preflight-triage AI review + PR compliance gates** | Two-layer automation: fast `pr-gate.yml` (template + size) + refactored AI review with preflight LLM tier routing and timeout guarantees. | Open |
| [#3828](https://github.com/QwenLM/qwen-code/pull/3828) | **feat(installer): standalone hosted install and uninstall flow** | Non-npm installation path for Linux/macOS/Windows with checksum verification, OSS publishing, and Aliyun `latest/VERSION` resolution. | Open, long-running |
| [#4067](https://github.com/QwenLM/qwen-code/pull/4067) | **Use bundled Qwen Code for PR review automation** | Replaces previous review workflow with pinned `QwenLM/qwen-code-action` using bundled `/review` skill. Dogfooding milestone. | Open |
| [#3990](https://github.com/QwenLM/qwen-code/pull/3990) | **feat(vscode): add Token Plan as first-class auth provider** | Adds `token-plan` provider option in VSCode settings, interactive auth flow, and WebViewProvider config sync. | Open |

---

## Feature Request Trends

1. **Daemon/Server Mode (Mode B) maturation** — The dominant theme. Requests span protocol completion (#4360), MCP transport pooling (#4336), client adapters, and background automation hooks. The v0.16 production-ready target is driving coordinated F1–F5 waves.

2. **Telemetry & observability productionization** — Custom resource attributes (#4365/#4367), metric cardinality controls, hardened OTLP shutdown (#3731). Multi-tenant deployment needs are pushing this from "works" to "production-grade."

3. **CI/CD and background automation** — Auto-fix workflows (#4362), PR review automation (#4067, #4359), and hooks for GitHub Actions integration. Community wants Qwen Code to operate autonomously in the loop, not just interactively.

4. **Memory and session management hardening** — The #4345 "auto-compaction three-tier ladder" has spawned a family of follow-ups: token estimation fixes (#4349), retry bounding (#4346), data retention extraction (#4347), and disable hatches for compliance (#4348).

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Long-session memory instability** | #4351, #2868, #728, #4363, #4364, PR #4286, #4366 | **Critical** — Multiple OOM vectors (heap limit, string length, structuredClone, listener leaks) actively being patched. Affects core value proposition of extended coding sessions. |
| **Fetch/connection failures with opaque errors** | #3914, #4035 (closed), #4326 | **High** — "fetch failed" and timeout errors across OpenRouter, DashScope-intl, and Spring AI MCP servers suggest undici dispatcher compatibility gaps and error surfacing issues. |
| **Release pipeline reliability** | #4338, #4339 | **High** — Two consecutive release failures block nightly/preview distribution; may indicate CI instability blocking velocity. |
| **Configuration discoverability** | #4361 (hooks not working), #4331 (`/model` persists unexpectedly), #4348 (compression disable hatch removed) | **Medium** — Users misunderstanding configuration semantics; some regressions from feature refactoring. |
| **MCP transport interoperability** | #4326 (Spring AI Streamable HTTP), #4336 (shared pool as fix) | **Medium** — MCP ecosystem fragmentation causing integration friction; Qwen Code playing catch-up with server implementations. |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-21

## Today's Highlights

The project is accelerating toward **v0.8.40** as a stability-focused recovery release following the v0.8.38/v0.8.39 fallout, with 18 active PRs and 21 issues in the last 24h. The **Pluggable Tool Registry** emerges as the dominant architectural initiative—three coordinated PRs from contributor `aboimpinto` aim to let users replace built-in tools via config.toml without recompiling. Meanwhile, **Windows reliability** dominates bug reports, with freezes, IME deadlocks, and WSL install failures drawing urgent community attention.

---

## Releases

**None** — No releases in the last 24h. Release PR [#1823](https://github.com/Hmbown/DeepSeek-TUI/pull/1823) for v0.8.40 is open and pending.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1812](https://github.com/Hmbown/DeepSeek-TUI/issues/1812) | **TUI freeze on Windows 11** — intermittent complete UI unresponsiveness, process stays alive | Critical reliability regression; affects core usability on a major platform. Author provided logs, session files, and thread-state analysis — unusually thorough debugging. | 🔴 High severity; 3 comments; diagnostic-rich |
| [#1835](https://github.com/Hmbown/DeepSeek-TUI/issues/1835) | **Windows IME composition deadlock** — input field completely unresponsive with Chinese IME (Sogou) | Blocks non-English input for a massive user segment. Reproducible on Windows 10 with specific IME. | 🔴 Accessibility/i18n blocker |
| [#1847](https://github.com/Hmbown/DeepSeek-TUI/issues/1847) | **Pluggable Tool Registry Layer 3** — runtime registration, config.toml overrides, plugin auto-discovery | Foundational extensibility architecture; enables enterprise customization and community tool ecosystems. Part of a 4-layer tracking issue. | 🟢 Major feature; contributor-led |
| [#1802](https://github.com/Hmbown/DeepSeek-TUI/issues/1802) | **[Tracking] Pluggable Tool Registry** | Meta-issue coordinating the most significant architectural shift since tool system inception. Defines vision for user-replaceable tools without forking. | 🟢 Strategic |
| [#1822](https://github.com/Hmbown/DeepSeek-TUI/issues/1822) | **RuntimeTool trait for code-execution backends** (Python, Node, dotnet, go, rustc) | Standardized plugin interface for language runtimes — unlocks polyglot code execution in agent mode. | 🟢 Architectural enabler |
| [#1791](https://github.com/Hmbown/DeepSeek-TUI/issues/1791) | **Synchronous tools block turn_loop cancellation** | `file_search`, `grep_files`, `list_dir` call blocking I/O inside async tasks, preventing graceful cancellation. Core async runtime hygiene issue. | 🟡 Performance/reliability |
| [#1846](https://github.com/Hmbown/DeepSeek-TUI/issues/1846) | **Proposed changes invisible before approval** | UX friction in agent mode — users must approve blind. Directly impacts trust and iteration speed. | 🟡 UX regression |
| [#1842](https://github.com/Hmbown/DeepSeek-TUI/issues/1842) | **`show_thinking=false` still wastes tokens on non-English reasoning** | Hidden thinking generates costly non-English reasoning_content due to `## Language` rule in `base.md`. Cost optimization + prompt engineering issue. | 🟡 Cost/efficiency |
| [#1828](https://github.com/Hmbown/DeepSeek-TUI/issues/1828) | **Sub-agent cannot write files** despite permission | Breaks delegated agent workflows — a core value proposition of the agent architecture. | 🔴 Workflow blocker |
| [#1827](https://github.com/Hmbown/DeepSeek-TUI/issues/1827) | **267GB project causes freeze on "hello"** | Extreme-scale project handling failure; suggests indexing/context assembly pathologies. | 🔴 Scale limitation |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1823](https://github.com/Hmbown/DeepSeek-TUI/pull/1823) | **chore(release): prepare v0.8.40** | Stability recovery release targeting provider/model correctness, terminal reliability, sub-agent/session robustness, and release infrastructure. Addresses stale Windows terminal state. | 🟡 Open — release pending |
| [#1848](https://github.com/Hmbown/DeepSeek-TUI/pull/1848) | **Pluggable Tool Registry — runtime registration, config.toml overrides, plugin tools** | Auto-discovers scripts from `~/.deepseek/tools/` with frontmatter; `[tools]` config optional. Includes enterprise audit wrapper example. Implements [#1847](https://github.com/Hmbown/DeepSeek-TUI/issues/1847). | 🟢 Open — feature complete |
| [#1845](https://github.com/Hmbown/DeepSeek-TUI/pull/1845) | **RuntimeTool trait with go/ts/rust execution backends** | Introduces unified `RuntimeTool` trait + `ExternalTool` abstraction; adds Go, TypeScript, Rust backends. Polyglot agent execution. Implements [#1822](https://github.com/Hmbown/DeepSeek-TUI/issues/1822). | 🟢 Open — architectural |
| [#1843](https://github.com/Hmbown/DeepSeek-TUI/pull/1843) | **Force English reasoning_content when thinking hidden** | When `show_thinking=false`, forces English reasoning to reduce token waste from `## Language` rule. Replaces closed [#1840](https://github.com/Hmbown/DeepSeek-TUI/pull/1840). | 🟢 Open — cost fix |
| [#1841](https://github.com/Hmbown/DeepSeek-TUI/pull/1841) | **Keep write_file loaded in agent mode** | Eliminates deferral of `write_file` on first use; ensures first call enters normal approval/execution path. Fixes agent workflow friction. | 🟢 Open — agent reliability |
| [#1839](https://github.com/Hmbown/DeepSeek-TUI/pull/1839) | **grep_files respects cancellation token** | Makes `grep_files` observe `ToolContext` cancellation during file collection and line scanning. Prevents runaway searches after user cancel. Implements [#1791](https://github.com/Hmbown/DeepSeek-TUI/issues/1791) partially. | 🟢 Open — async hygiene |
| [#1837](https://github.com/Hmbown/DeepSeek-TUI/pull/1837) | **Fix macOS terminal title vertical centering → top-aligned** | UI layout fix: title floats mid-screen on macOS native terminal; changes to fixed top alignment. Implements [#1834](https://github.com/Hmbown/DeepSeek-TUI/issues/1834). | 🟢 Open — polish |
| [#1833](https://github.com/Hmbown/DeepSeek-TUI/pull/1833) | **Enhance sub-agent file write permissions and approval** | Allows approved `general`/`implementer` sub-agents to run delegated `Suggest` file-write tools post-`agent_open`. Fixes [#1828](https://github.com/Hmbown/DeepSeek-TUI/issues/1828). | 🟢 Open — agent fix |
| [#1832](https://github.com/Hmbown/DeepSeek-TUI/pull/1832) | **Fix u16 overflow in luma() causing grayscale theme crash** | `u16` arithmetic overflow in `palette.rs` luminance calculation; debug panic + release wrapping. Also fixed in [#1814](https://github.com/Hmbown/DeepSeek-TUI/pull/1814). | 🟢 Open — crash fix |
| [#1820](https://github.com/Hmbown/DeepSeek-TUI/pull/1820) | **MCP-over-WS IDE bridge with cwd-scoped discovery** | New `deepseek-ide-bridge` crate for VS Code/Cursor/Zed integration via `~/.claude/ide/<port>.lock` discovery. Auto-connects, surfaces editor selection, file changes, terminal output. Major IDE ecosystem play. | 🟢 Open — ecosystem expansion |

---

## Feature Request Trends

1. **Pluggable/Extensible Tool System** — Dominant theme. Users want to replace built-in tools (read_file, exec_shell, code_execution) with custom scripts/binaries via configuration, not forks. Three coordinated issues/PRs from `aboimpinto` plus community demand for PowerShell, dotnet, and enterprise audit wrappers.

2. **Thinking Transparency & Control** — Tension between hiding reasoning (clean UI) and seeing it (debuggability, trust). [#1824](https://github.com/Hmbown/DeepSeek-TUI/issues/1824) requests streaming reasoning display; [#1842](https://github.com/Hmbown/DeepSeek-TUI/issues/1842) optimizes hidden-thinking token costs. Suggests need for granular reasoning visibility modes.

3. **Cross-Platform Terminal Reliability** — Windows-specific fixes (freezes, IME, WSL) consume disproportionate attention. macOS has minor layout issues. Linux appears most stable.

4. **Approval UX Refinement** — [#1846](https://github.com/Hmbown/DeepSeek-TUI/issues/1846) highlights that blind approvals undermine trust. Users want diff previews integrated into approval flow, not obscured by panels.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Windows as second-class citizen** | 🔥🔥🔥🔥🔥 | Freeze [#1812](https://github.com/Hmbown/DeepSeek-TUI/issues/1812), IME deadlock [#1835](https://github.com/Hmbown/DeepSeek-TUI/issues/1835), WSL install fail [#1816](https://github.com/Hmbown/DeepSeek-TUI/issues/1816), unresponsive input [#1830](https://github.com/Hmbown/DeepSeek-TUI/issues/1830) — all Windows |
| **Agent mode fragility** | 🔥🔥🔥🔥 | Sub-agent writes fail [#1828](https://github.com/Hmbown/DeepSeek-TUI/issues/1828), deferred write_file [#1825](https://github.com/Hmbown/DeepSeek-TUI/issues/1825), session resume sends invalid model name [#1797](https://github.com/Hmbown/DeepSeek-TUI/issues/1797) |
| **Cancellation non-responsiveness** | 🔥🔥🔥 | Sync tools block tokio scheduler [#1791](https://github.com/Hmbown/DeepSeek-TUI/issues/1791); grep_files fix in PR [#1839](https://github.com/Hmbown/DeepSeek-TUI/pull/1839) suggests systemic async boundary violations |
| **Token cost opacity** | 🔥🔥🔥 | Excessive consumption [#1818](https://github.com/Hmbown/DeepSeek-TUI/issues/1818), hidden thinking wastes tokens [#1842](https://github.com/Hmbown/DeepSeek-TUI/issues/1842) — users lack visibility into spend drivers |
| **Large project performance collapse** | 🔥🔥 | 267GB project freezes on greeting [#1827](https://github.com/Hmbown/DeepSeek-TUI/issues/1827) — indexing/context limits untested at scale |
| **SSH/sandbox egress restrictions** | 🔥 | [#1829](https://github.com/Hmbown/DeepSeek-TUI/issues/1829) — shell sandbox may block TCP/22, breaking remote workflows |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*