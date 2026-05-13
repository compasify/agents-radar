# AI CLI Tools Community Digest 2026-05-13

> Generated: 2026-05-13 00:24 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-13

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive multi-polar market with seven actively developed tools, each backed by distinct model providers or architectural philosophies. Claude Code and OpenAI Codex lead in enterprise mindshare but face mounting pressure from Gemini CLI, Kimi Code CLI, and emerging alternatives like Qwen Code and DeepSeek TUI. A unifying trend is the shift from chat-centric interfaces to agent-orchestration platforms with MCP (Model Context Protocol) ecosystems, though implementation maturity varies dramatically. All tools grapple with production-hardening challenges: token cost transparency, session reliability, and cross-platform terminal fidelity. The community is increasingly vocal about "silent failures"—auth shadowing, cost inflation, and truncation without warning—that erode trust in autonomous agent workflows.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity | Notes |
|:---|:---:|:---:|:---:|:---|:---|
| **Claude Code** | 10+ tracked | 3 active | v2.1.140 | Steady | Doc-focused; low PR velocity suggests pre-release consolidation |
| **OpenAI Codex** | 10 tracked | 10+ active | 3 alphas (0.131.0α7–9) | Rapid iteration | Highest PR throughput; Rust core migration driving churn |
| **Gemini CLI** | 10 tracked | 10+ active | v0.43.0-preview.0, v0.42.0 | Very high | Auto mode unification; security hardening (#26954) |
| **GitHub Copilot CLI** | 32 new/updated | **0** | v1.0.46 | Moderate | Issue-driven; no public PR activity suggests internal development or contribution bottleneck |
| **Kimi Code CLI** | 10 tracked | 10+ active | v1.43.0 | Steady | Telemetry and UI polish release; strong community feedback on model quality |
| **OpenCode** | 10+ tracked | 10+ active | None | Moderate | Effect-native migration; beta features advancing; same-day regressions in v1.14.48 |
| **Pi** | 10+ tracked | 8 closed | None | Low | "Bigrefactor" churn; mass issue closures; packaging/security focus |
| **Qwen Code** | 10 tracked | 10+ active | 2 previews (v0.15.11-p.0/1) | Accelerating | Daemon mode architecture (#3889); production-hardening theme |
| **DeepSeek TUI** | 50 active | 20 active | 3 patches (v0.8.30–32) | Emergency pace | Flicker crisis response; highest issue/PR volume |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Cost/token transparency & control** | Claude Code, Codex, Gemini CLI, Kimi, Qwen Code | Real-time consumption indicators (#58530, #14593, #26619, #4025); auth-method visibility (#53728); prevent silent API-key shadowing of subscriptions |
| **MCP ecosystem hardening** | Claude Code, Codex, Gemini CLI, Copilot CLI, DeepSeek TUI | Auto-reconnect (#10071), session ID propagation (#1488), connection keepalive (#3257), startup non-blocking (#3994), security audit (#26954) |
| **Session/task orchestration** | Codex, Kimi, Qwen Code, Copilot CLI | `/goal` persistence (#2218, #27163), `/fork` branching (#2058), daemon mode (#3803/#3889), `/loop` scheduling (#2248), resume/continue (#1544) |
| **Terminal output fidelity** | Claude Code, OpenCode, DeepSeek TUI | Copy-paste without indentation leakage (#18170, #37796), rendering stability (#1378, #27096), scrollback corruption (#53857) |
| **Windows/platform parity** | Codex, Gemini CLI, Copilot CLI, OpenCode, DeepSeek TUI | IDE hangs (#12161, #22393), MCP boot failures (#17444), URI parsing (#26902), PowerShell detection (#3259), keybind regressions (#27096) |
| **Structured agent interaction** | Codex, Gemini CLI, Kimi, DeepSeek TUI | `ask_user_question` (#9926), tool call deduplication (#2242), reasoning chain localization (#683, #1118), deny-tool UX (#1377) |
| **OpenAI API compatibility** | Kimi, Pi, Qwen Code | Unlock Cursor/IDE integrations (#2208, #1947), third-party ecosystem access |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approaches |
|:---|:---|:---|
| **Model lock-in vs. flexibility** | Claude Code (Anthropic-only), Codex (OpenAI-only) | **OpenCode, Pi, Qwen Code** pursue multi-provider abstraction; **Kimi** adding OpenAI-compatible endpoint; **DeepSeek TUI** optimizing for own model with prefix-cache tuning |
| **Architecture philosophy** | Codex (Rust core, permissions-centric), Claude Code (TypeScript, hooks ecosystem) | **Qwen Code** pushing daemon/server mode (#3889) for headless deployments; **OpenCode** migrating to Effect-native functional runtime; **Pi** in "bigrefactor" toward modularity |
| **Target user** | Claude Code, Codex (enterprise developers) | **DeepSeek TUI** (cost-sensitive Chinese market, terminal purists); **Copilot CLI** (GitHub-native workflows); **Gemini CLI** (Google Cloud ecosystem) |
| **UX paradigm** | Claude Code (TUI-first, desktop secondary), Codex (CLI + IDE extension) | **Gemini CLI** consolidating Auto modes for simplification (#26714); **Kimi** unifying fragmented approval mechanisms (#2249); **OpenCode** exploring mobile touch (#18767) |
| **Security model** | Codex (sandbox policies, thread-scoped permissions) | **Claude Code** hooks-based enterprise governance; **Gemini CLI** MCPSafe Grade F remediation (#26954); **Qwen Code** AES-256-GCM encrypted settings (#4016) |
| **Community model** | OpenCode (open-source, community PRs) | **Claude Code/Codex/Gemini** (corporate, limited external contribution); **Pi** (corporate but with notable external contributors like julien-c, mitsuhiko); **DeepSeek TUI** (highest community PR velocity) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|:---|:---|:---|
| **Highest momentum** | **DeepSeek TUI**, **Gemini CLI**, **Qwen Code** | DeepSeek: 50 issues/20 PRs, emergency responsiveness to flicker crisis. Gemini: rapid release cadence, major UX simplification in flight. Qwen: daemon mode architectural inflection, production-hardening PRs (#4096 atomic writes, #4097 tracing). |
| **Sustained maturity** | **Claude Code**, **OpenAI Codex** | Established user bases, systematic issue backlogs, but lower daily velocity. Codex's 575-comment token-cost thread (#14593) unresolved despite Business-tier impact suggests prioritization tension. Claude Code's documentation debt (9 closed doc issues from single contributor) reveals feature-delivery over docs culture. |
| **Active but constrained** | **Kimi Code CLI**, **OpenCode** | Kimi: strong release discipline, but K2.6 quality regression (#1925) risks user retention. OpenCode: ambitious Effect migration, but same-day regressions in v1.14.48 indicate testing gaps. |
| **Stagnant/transitioning** | **GitHub Copilot CLI**, **Pi** | Copilot CLI: zero PR activity in 24h, issue-driven development, potential code freeze or internal pivot. Pi: "bigrefactor" mass closures create uncertainty; local LLM demand (#3357) unmet; packaging fragility. |

---

## 6. Trend Signals

| Signal | Evidence | Implication for Developers |
|:---|:---|:---|
| **Agent autonomy → orchestration transparency** | #22323 (false GOAL success), #4290 (silent truncation), #26619 (deceptive model forcing) | Users demand *observable* agent state, not black-box execution. Tools must expose reasoning chains, truncation events, and model routing decisions. |
| **Terminal as battleground** | #18170 (235 👍 copy/paste), #1378 (flicker crisis), #27096 (Dvorak regression), #1537 (DEC 2026 batching) | TUI rendering is unexpectedly hard and user-critical. Expect investment in terminal abstraction layers, copy-safe output modes, and GPU-terminal compatibility. |
| **MCP as platform, not feature** | #10071, #17444, #1488, #3257, #26954 | MCP ecosystem maturity separates toy from production tools. Session lifecycle, security audit, and connection resilience are table stakes. |
| **Cost as trust vector** | #14593 (575 comments), #58530 (20x inflation), #53728 (silent key precedence) | Billing transparency is becoming a competitive differentiator. Tools without real-time cost visibility will lose enterprise adoption. |
| **Model quality volatility** | #1925 (K2.6 regression), #1506 ("less intelligent"), #4055 (infinite reasoning) | Rapid model iteration creates user whiplash. Tools need model pinning, downgrade paths, and quality guardrails. |
| **Server/daemon architecture emergence** | #3803/#3889 (Qwen), #1544 (DeepSeek resume), #26714 (Gemini Auto unification) | CLI tools are becoming backends for broader ecosystems. HTTP APIs, SDK clients, and headless operation enable IDE integrations and automation pipelines. |
| **Localization as competitive moat** | #683, #1118 (Chinese reasoning chains), #1585 (Chinese keybinding feedback) | Non-English markets demand cognitive accessibility, not just UI translation. Thinking chain localization is a distinct feature, not polish. |

---

*Report compiled from community digest data dated 2026-05-13. For real-time tracking, monitor github.com/anthropics/claude-code, github.com/openai/codex, github.com/google-gemini/gemini-cli, github.com/github/copilot-cli, github.com/MoonshotAI/kimi-cli, github.com/anomalyco/opencode, github.com/earendil-works/pi, github.com/QwenLM/qwen-code, and github.com/Hmbown/DeepSeek-TUI.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-13 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphans, widows, and numbering misalignment in AI-generated documents | Universal pain point for document generation; addresses issues "in every document Claude generates" |
| 2 | **PDF Fix** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Case-sensitivity fix for `skills/pdf/SKILL.md` file references (8 mismatches: `REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) | Cross-platform reliability; breaks on Linux/case-sensitive filesystems |
| 3 | **Frontend Design Clarity** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised frontend-design skill for actionability—every instruction executable in a single conversation | Token efficiency and practical executability vs. verbose guidance |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating SKILL.md quality (5 dimensions: structure, examples, resources, validation, security) | Quality assurance automation for the Skills ecosystem itself |
| 5 | **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument Text creation, template filling, and ODT→HTML parsing for LibreOffice/ISO standard workflows | Open-source document format demand vs. proprietary DOCX/PPTX dominance |
| 6 | **Skill-Creator YAML Fix** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse validation for unquoted `description` fields containing `:` to prevent silent YAML truncation | Developer experience; silent failures in skill creation pipeline |
| 7 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes `w:id` collision between tracked changes and existing bookmarks in OOXML documents | Document corruption risk; shared ID space in OOXML specification |
| 8 | **System Documentation** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Comprehensive evidence management system docs: architecture, flowcharts, lifecycle workflows | Enterprise traceability and compliance documentation |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Priority Signal |
|:---|:---|:---|
| **Enterprise Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (11 comments, 7 👍) | 🔥 Critical |
| | Org-wide skill libraries, direct sharing links vs. manual `.skill` file Slack/Teams transfer | |
| **Skill Reliability & Testing** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍) | 🔥 High |
| | `run_eval.py` 0% trigger rate for `claude -p`; skills not activating when expected | |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 2 👍) | High |
| | Community skills impersonating `anthropic/` namespace; permission escalation risk | |
| **Plugin Architecture Cleanup** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍), [#1087](https://github.com/anthropics/skills/issues/1087) | High |
| | Duplicate skills across `document-skills`/`example-skills`; marketplace.json not respected | |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) | Moderate |
| | Skills-as-MCPs for API standardization; context compression for data-heavy MCPs | |
| **Bedrock/Enterprise Auth** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | Moderate |
| | AWS Bedrock compatibility; SSO/enterprise auth breaking skill-creator tools | |

---

## 3. High-Potential Pending Skills

These active PRs show sustained engagement and clear utility, positioned for likely merge:

| Skill | PR | Author | Why It May Land Soon |
|:---|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Comprehensive testing stack (Testing Trophy, AAA pattern, React Testing Library, MSW); fills major gap in code quality skills |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | avimak | Full-stack deployment from Claude to public URL; clear commercial integration with AppDeploy.ai |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | 4-skill cognitive framework (kernel, advisor, agent, memory); professional knowledge management |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Native AppleScript automation alternative to screenshot-based computer use; two-tier permission model |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | Broad enterprise ITSM/ITOM/SecOps coverage; largest enterprise workflow platform skill proposed |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | p19dixon | Orphaned code detection, documentation gaps, infrastructure bloat; 10-step systematic workflow |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | amitlals | SAP's open-source tabular foundation model (Apache 2.0); enterprise analytics use case |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure**—org-wide skill distribution, deterministic skill triggering, trust boundary enforcement, and quality validation—rather than more creative or domain-specific skills, signaling that Claude Code Skills is transitioning from an enthusiast toolkit to a production-critical platform requiring governance, testing, and security guarantees.

---

---

# Claude Code Community Digest — 2026-05-13

---

## 1. Today's Highlights

Anthropic shipped **v2.1.140** with improved agent tool matching and a fix for `/goal` hanging under restricted hook configurations. The community continues to surface critical UX friction around **copy/paste from terminal output** (#18170, #37796) — now the top-voted open issue with 235 👍 — alongside growing concerns about **token cost inflation** (#58530) and **silent auth precedence** between API keys and Max subscriptions (#53728). Documentation quality saw notable attention with 9 doc-related issues closed in the past 24 hours, many filed by a single contributor systematically cataloging gaps.

---

## 2. Releases

### [v2.1.140](https://github.com/anthropics/claude-code/releases/tag/v2.1.140)
- **Agent tool `subagent_type` matching** now accepts case- and separator-insensitive values (e.g., `"Code Reviewer"` → `code-reviewer`)
- **Updated agent color palette**
- **Fixed `/goal` silently hanging** when `disableAllHooks` or `allowManagedHooksOnly` is set — now surfaces proper feedback

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#18170](https://github.com/anthropics/claude-code/issues/18170) | **Copy/paste from terminal includes unwanted indentation and trailing spaces** | Fundamental daily workflow breakage; affects code sharing, documentation, and bug reporting from Claude output | 🔥 **107 comments, 235 👍** — highest-engagement open issue by far |
| [#10238](https://github.com/anthropics/claude-code/issues/10238) | **Add support for subdirectories in skills** | Skills are a core extensibility mechanism; lack of subdirectory organization limits scale for teams with many skills | 36 comments, 144 👍; active since Oct 2025 |
| [#23347](https://github.com/anthropics/claude-code/issues/23347) | **spinnerVerbs setting in ~/.claude/settings.json is ignored** | Customization regression; user-level config being overridden breaks personalization expectations | 26 comments, 31 👍; **closed** — likely fixed in recent release |
| [#10071](https://github.com/anthropics/claude-code/issues/10071) | **Claude can reconnect to a broken MCP** | MCP reliability is critical for production workflows; current failure mode requires manual restart | 24 comments, 37 👍 |
| [#33502](https://github.com/anthropics/claude-code/issues/33502) | **Add folder to recent list for deletion in GUI** | Basic file management gap in desktop UI; small fix, high friction for GUI users | 15 comments, 15 👍 |
| [#10265](https://github.com/anthropics/claude-code/issues/10265) | **Enable/configure automatic marketplace/plugin updates** | Enterprise governance need; manual update tracking doesn't scale across teams | 9 comments, 53 👍 |
| [#48694](https://github.com/anthropics/claude-code/issues/48694) | **Desktop app PR status bar shows closed/merged PRs** | Context pollution in UI; stale PR data misleads developers on current branch state | 9 comments, 2 👍; **closed** |
| [#37796](https://github.com/anthropics/claude-code/issues/37796) | **Copied text includes 2-space leading indentation** | Duplicate/related to #18170; confirms systemic rendering-level copy issue across terminal types | 5 comments, 21 👍 |
| [#53728](https://github.com/anthropics/claude-code/issues/53728) | **Silent ANTHROPIC_API_KEY precedence shadows Max subscription** | Cost and auth surprise; users burn API credits unknowingly when OAuth subscription is active | 4 comments, 0 👍 — underreported but high severity |
| [#58272](https://github.com/anthropics/claude-code/issues/58272) | **Severe native memory leak (~738 GB/h) on macOS** | Critical stability issue; complete CLI unresponsiveness renders tool unusable | 3 comments, 1 👍 — newly filed, needs traction |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#58323](https://github.com/anthropics/claude-code/pull/58323) | **docs: add PostToolUse continueOnBlock option to hooks documentation** | Documents rejection-feedback loop for blocked tool uses; closes gap in hook developer experience | Open |
| [#58314](https://github.com/anthropics/claude-code/pull/58314) | **docs: add CLAUDE_PROJECT_DIR to MCP and plugin environment variable docs** | MCP stdio servers receive this env var but it was undocumented; parity with hooks documentation | Open |
| [#58126](https://github.com/anthropics/claude-code/pull/58126) | **Add `neonpanel` plugin v1.0.0** | New e-commerce operations plugin with 8 domain agents (replenishment, accounting, supply chain, etc.) backed by live NeonPanel commerce data via MCP | Open |

*Note: Only 3 PRs were active in the last 24h. The documentation PRs (#58323, #58314) reflect sustained community investment in closing docs gaps identified by issue reporter `coygeek`.*

---

## 5. Feature Request Trends

**Top-requested directions from open issues:**

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Terminal output fidelity** | #18170, #37796, #53857 | Rendering system needs copy-safe output mode; padding/indentation should be visual-only, not in clipboard buffer |
| **Skills/MCP scalability** | #10238 (subdirectories), #10071 (MCP reconnect), #10265 (auto-updates) | Ecosystem maturity requires enterprise-grade lifecycle management |
| **Auth transparency & cost control** | #53728 (key vs. OAuth), #58530 (token inflation), #51382 (session metadata exposure) | Users need visibility into *which* auth method is active and *how much* they're consuming in real-time |
| **Workspace/session scoping** | #58171 (agent workspace filtering), #33502 (recent folder management) | Multi-project workflows need isolation primitives |
| **Desktop/GUI polish** | #48694 (stale PR status), #33502 (folder management), #37154 (SSH remote sessions) | Desktop surface lagging CLI in reliability and feature completeness |

---

## 6. Developer Pain Points

**Recurring frustrations with high community impact:**

1. **Copy/paste is broken** — The #1 voted issue (#18170) with 235 👍 affects every user who shares code from Claude Code. The 2-space indentation (#37796) and scrollback pollution (#53857) suggest a systemic TUI rendering architecture problem where visual padding leaks into actual content.

2. **Silent cost surprises** — #53728 (API key shadowing Max subscription) and #58530 (token inflation burning through 20x Max accounts) indicate auth and billing transparency gaps that directly hit users' wallets. No session-start warning, no `/status` indicator by default.

3. **MCP reliability at scale** — #10071 highlights that MCP failures require manual intervention; no auto-reconnect means production workflows stall. Combined with #10265 (no auto-updates), MCP ecosystem management is immature for enterprise use.

4. **Documentation drift** — 9 closed doc issues in 24h (#57148–#58121) from one contributor (`coygeek`) reveals systematic under-documentation of settings, hooks, commands, and environment variables. Features ship faster than docs.

5. **Memory and stability on macOS** — #58272's extreme memory leak (~738 GB/h) and #53857's scrollback corruption suggest native/platform-specific quality issues on Apple's silicon that break the core terminal experience.

6. **Skills organization ceiling** — #10238's 144 👍 for subdirectory support shows skills adoption is hitting scaling limits; flat namespaces don't work for teams building 10+ skills.

---

*Digest compiled from github.com/anthropics/claude-code activity for 2026-05-13.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-13

## 1. Today's Highlights

The Codex team is actively stabilizing the permissions and sandbox architecture with a major migration moving workspace roots onto thread state, while the community continues to grapple with persistent token consumption concerns and Windows-specific reliability issues. Three rapid-fire Rust alpha releases (0.131.0-alpha.7-9) suggest iterative fixes on the CLI core, and plugin ecosystem work is accelerating with new inventory APIs and version gating.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.131.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.9) | Third alpha in 24h; no detailed changelog provided—likely incremental CLI fixes |
| [rust-v0.131.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.8) | Second alpha release |
| [rust-v0.131.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.7) | First of the rapid alpha sequence |

*No substantive release notes available; pattern suggests hotfix iteration on the Rust CLI core.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **Burning tokens very fast** — Business-tier user reports rapid token depletion | 575 comments, 251 👍. The highest-engagement issue in the repo; directly impacts cost predictability for paying customers. Suggests potential metering or context-management bug. | 🔥 Critical business impact; no clear resolution path |
| [#12161](https://github.com/openai/codex/issues/12161) | **Codex IDE keeps getting stuck on "Thinking"** — Windows, multiple IDEs | 30 comments. Cross-IDE failure on Windows indicates platform-specific networking or process-handling bug, not extension-specific. | Recurring, affects daily workflow |
| [#9926](https://github.com/openai/codex/issues/9926) | **Interactive `ask_user_question` tool** — Structured Q&A for CLI agent | 23 comments, 24 👍. Community-designed proposal for reducing free-form chat ambiguity; represents mature UX thinking for agent workflows. | Strong design consensus; awaiting implementation |
| [#17444](https://github.com/openai/codex/issues/17444) | **Booting MCP Server on Windows** | 23 comments. MCP adoption blocked for Windows users; server startup failures break plugin ecosystem access. | Platform equity concern |
| [#12098](https://github.com/openai/codex/issues/12098) | **Tabbed interface for parallel chat sessions** | 11 comments, 26 👍. High-demand UX improvement for IDE extension; competitors (Cursor) already offer this. | Competitive parity request |
| [#21343](https://github.com/openai/codex/issues/21343) | **Context compact error** — App crashes with compaction failure | 10 comments. Core reliability issue for long sessions; undermines auto-compaction value proposition. | Data loss risk |
| [#11086](https://github.com/openai/codex/issues/11086) | **App: message editing** | 10 comments, 43 👍. Highest 👍 count among open issues. Basic conversation hygiene feature; gap vs. Cursor/ChatGPT. | Table-stakes expectation |
| [#22135](https://github.com/openai/codex/issues/22135) | **"codex-aarch64-apple-darwin" blocked as malware** | 4 comments, 11 👍. Code signing/notarization failure on Apple Silicon; blocks installation entirely. | Trust/safety blocker |
| [#22393](https://github.com/openai/codex/issues/22393) | **VS Code extension unresponsive on Windows** — app-server backpressure, Cloudflare 403s, WSL probing | 1 comment (fresh). Complex multi-factor failure: event storms, auth plugin failures, and WSL pathological probing. Suggests architectural fragility in extension-host communication. | Enterprise deployment risk |
| [#22368](https://github.com/openai/codex/issues/22368) | **404 "Model not found gpt-5.2" causes WebSocket fallback loop** | 1 comment (fresh). Model availability/routing bug causing CLI instability; backend-catalog sync issue. | Reliability regression |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#22327](https://github.com/openai/codex/pull/22327) | **permissions: move workspace roots onto thread state** | Core permissions-migration PR; decouples `SandboxPolicy::WorkspaceWrite` from workspace root ownership, makes thread permission profiles server-owned | Foundational security/architecture change; enables finer-grained sandboxing |
| [#22266](https://github.com/openai/codex/pull/22266) | **core: box multi-agent handler futures** | Stack-safety isolation for async futures in multi-agent paths; prevents stack overflow in deep delegation chains | Pre-req for permissions migration; stability win |
| [#22375](https://github.com/openai/codex/pull/22375) | **Use plugin/list to get list of plugins for mentions** | TUI plugin mentions now query app-server for inventory instead of local `PluginManager` | Centralizes plugin discovery; enables remote/dynamic plugin catalogs |
| [#21624](https://github.com/openai/codex/pull/21624) | **Make MCP startup status thread-scoped and unblock /review** | Fixes `/review` hanging on "Starting MCP servers..." by giving delegate threads independent startup lifecycle | Unblocks code review workflow; MCP reliability |
| [#22399](https://github.com/openai/codex/pull/22399) | **Route delegated MCP elicitations back to child session** | Bugfix: `/review` MCP prompts were incorrectly routed to parent session, causing "elicitation request not found" | Corrects delegation protocol; child-session integrity |
| [#22268](https://github.com/openai/codex/pull/22268) | **hooks: use new session IDs instead of thread IDs for hooks** | Aligns hook `session_id` semantics across root sessions and subagents; enables correlation in external hook integrations | Enterprise observability; hook ecosystem maturity |
| [#20319](https://github.com/openai/codex/pull/20319) | **Add allow_managed_hooks_only hook requirement** | Enterprise policy to ignore user-controlled hooks, administered via `requirements.toml` | Security/compliance for managed deployments |
| [#22395](https://github.com/openai/codex/pull/22395) | **fix(core): emit unified exec sandbox denial lifecycle** | Ensures sandbox denials before process spawn emit failed lifecycle events; prevents invisible failures | Debugging/observability improvement |
| [#22397](https://github.com/openai/codex/pull/22397) | **feat: Expose plugin versions and gate plugin sharing** | Adds version metadata to plugins; introduces `plugin_sharing` feature gate for shared-with-me listings | Plugin marketplace readiness; trust/control |
| [#22236](https://github.com/openai/codex/pull/22236) | **Unify thread metadata updates above store** | Refactors `ThreadStore` to accept broad metadata patches while keeping `append_items` as raw history; dual-write to SQLite and JSONL for compatibility | Data model evolution; backwards-compat strategy |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Conversation UX parity** | Tabbed sessions (#12098), message editing (#11086), thread history portability (#21079, #15347) | High 👍 counts; competitive pressure from Cursor/Claude |
| **Structured agent interaction** | `ask_user_question` (#9926), `/goal` semantics (#22362), work mode personality linking (#22370) | Mature proposals; agent workflow refinement |
| **Cross-platform session continuity** | CLI-to-desktop history sync (#21079), workspace remapping without history loss (#15347) | Ecosystem integration demand |
| **Sandbox/platform expansion** | OpenBSD support (#21977), sandbox denial observability (#22395) | Niche but vocal; enterprise/security interest |
| **Feedback/quality loops** | "Thumbs down" for model behavior (#22305), retry on capacity errors (#22390) | Operational maturity for production use |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Windows as second-class platform** | Persistent | High | #12161, #17444, #16811, #22393, #22368 | Multiple independent failure modes: IDE hangs, MCP boot failures, extension unresponsiveness, model routing loops. Suggests insufficient Windows CI/infrastructure investment. |
| **Token cost unpredictability** | Chronic | Critical | #14593 | 575-comment thread with no resolution; undermines Business/Enterprise value proposition. Possible root causes: context leakage, compaction inefficiency, or metering discrepancy. |
| **Context management reliability** | Recurring | High | #9546, #21343, #14593 | Auto-compaction fails to prevent window explosion; manual compaction can corrupt state. Core to long-session productivity. |
| **Desktop app session/history fragility** | Common | Medium-High | #21076, #18216, #18483, #10522 | Deep links break, threads disappear from sidebar while persisting in DB, symlink/realpath duality causes project duplication. Metadata layer needs hardening. |
| **MCP/plugin startup brittleness** | Emerging | Medium | #17444, #21624, #22399 | Thread-scoped lifecycle fixes in progress, but Windows and delegation paths remain problematic. |
| **Code signing/trust on macOS** | Sporadic but blocking | High | #22135 | Notarization failures gate entire user segments; operational fix needed, not product decision. |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-13

## Today's Highlights

Google shipped **v0.43.0-preview.0** with improved steering toward surgical edit tools, alongside **v0.42.0** which fixes a critical auto-update channel regression that was pushing users to less stable builds. The community remains heavily focused on **429/capacity issues**, with multiple high-engagement issues and a newly merged fix for model re-routing behavior. Meanwhile, the team is actively cleaning up launched memory features and consolidating Auto modes ahead of a broader UX simplification push.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.43.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.43.0-preview.0)** | Steers model to use edit tool for surgical edits (reducing unnecessary full-file rewrites); docs clarification on Auto Memory proposing updates vs. automatic application |
| **[v0.42.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0)** | **Fix:** Prevents automatic updates from downgrading users to less stable channels (nightly/preview); critical for users who found themselves unexpectedly on preview builds |
| **[v0.42.0-nightly.20260512](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260512.gc987b9939)** | Snapshotter model config fix; SSH repo extension installation support; duplicate `Se`rvice worker fix |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#24937](https://github.com/google-gemini/gemini-cli/issues/24937)** | **CLOSED** — Master tracking issue for 429/capacity problems | Centralized 91 comments of user reports; now closed as team appears to have addressed bulk of cases | 91 comments, high deduplication value |
| **[#26862](https://github.com/google-gemini/gemini-cli/issues/26862)** | 429 Model Capacity Issues, No sufficient re-routing | **Active pain point:** Auto mode stuck retrying depleted models (e.g., `gemini-3-flash-preview`) instead of failing over to available capacity | 9 comments, P1/P2/P3 labels — indicates cross-team concern |
| **[#26902](https://github.com/google-gemini/gemini-cli/issues/26902)** | URI Link Parser fails to strip line/column numbers on Windows | Breaks file navigation from terminal output on Windows; `FileSystemError` from literal `:line:column` suffix | 9 comments, fresh (May 12), affects core UX |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** | Robust component level evaluations | EPIC for scaling behavioral evals (76 tests, 6 models); quality infrastructure for agent reliability | 10 comments, workstream rollup |
| **[#26619](https://github.com/google-gemini/gemini-cli/issues/26619)** | 🚨 Deceptive Model Forcing: Flash quota consumed despite Pro lock | **Paying user escalation:** AI Ultra subscribers report quota drain on wrong model; trust/transparency issue | 6 comments, strongly worded, "CRITICAL ISSUE" |
| **[#23182](https://github.com/google-gemini/gemini-cli/issues/23182)** | Token burn loop failing to choose file read tool | Cost impact: model cycles endlessly without progress; attached conversation JSON for repro | 6 comments, P1, possible duplicate |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Subagent reports GOAL success after MAX_TURNS interruption | **Silent failure mode:** hidden truncation breaks trust in agent autonomy | 6 comments, 2 👍, need-retesting |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | Gemini does not use skills and sub-agents enough | Anecdotal but widely felt: custom skills (gradle, git) ignored even for relevant tasks | 6 comments, feature/bug hybrid |
| **[#21740](https://github.com/google-gemini/gemini-cli/issues/21740)** | Investigate impact of tracker on multiagent workflows | Performance/reliability concern for complex multi-agent orchestration | 8 comments, maintainer-only |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell execution hangs with "Waiting input" after completion | Frequent workflow breaker: simple commands appear stuck; 3 👍 indicates broad impact | 3 comments, 3 👍 |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **[#26941](https://github.com/google-gemini/gemini-cli/pull/26941)** | **chore: clean up launched memory features** | Removes false-path code for JIT context; makes memory context manager default; deletes legacy tool surfaces | Open, maintainer-authored |
| **[#26714](https://github.com/google-gemini/gemini-cli/pull/26714)** | **feat(cli): merge Auto modes into single Auto mode** | Unifies "Auto (Gemini 3)" and "Auto (Gemini 2.5)" into dynamic routing by task complexity — major UX simplification | Open, needs issue |
| **[#26954](https://github.com/google-gemini/gemini-cli/pull/26954)** | **fix(security): address MCP security findings (MCPSafe Grade F)** | Shell heuristics enforcement, policy engine hardening for MCP server integration | Open, bot-authored, urgent |
| **[#26955](https://github.com/google-gemini/gemini-cli/pull/26955)** | **fix(core): throttle shell text output and bound live UI buffer** | Caps buffer at 100k chars, throttles to 1s intervals — fixes React re-render perf collapse on verbose output | Open, community |
| **[#26953](https://github.com/google-gemini/gemini-cli/pull/26953)** | **feat(core): change agent registration to first-wins, prioritize project** | Project-level agents override user-level; resolves conflicts in multi-agent setups | Open, needs issue |
| **[#26951](https://github.com/google-gemini/gemini-cli/pull/26951)** | **feat(bot): implement issue-fixer skill and mandate selection** | New bot skill for automated issue resolution; manual mandate selection (auto/issue-fixer/metrics/interactive) | Open, maintainer |
| **[#26950](https://github.com/google-gemini/gemini-cli/pull/26950)** | **fix(ui): made context files append instead of replace** | Context files now accumulate rather than overwrite — preserves multi-source context | Open |
| **[#26948](https://github.com/google-gemini/gemini-cli/pull/26948)** | **feat(core): wire AgentSession invocations into agent-tool** | Behind `adk.agentSessionSubagentEnabled` flag; enables session-based subagent calls | Open, paired with #26947 |
| **[#26361](https://github.com/google-gemini/gemini-cli/pull/26361)** | **fix(core): externalize https-proxy-agent to fix proxy support** | Resolves `TypeError: HttpsProxyAgent is not a constructor` for corporate/enterprise users | Open, P1, needs review attention |
| **[#26881](https://github.com/google-gemini/gemini-cli/pull/26881)** | **fix(security): add IPv6 loopback to host header validation** | Closes DNS rebinding vector via `[::1]`; previously only `localhost`/`127.0.0.1` checked | Open, security |

---

## Feature Request Trends

1. **Smarter Model Routing & Capacity Awareness** — Users expect graceful fallback when models hit 429s, not stuck retry loops. The Auto mode unification (#26714) and ongoing capacity issues (#26862) reflect demand for transparent, resilient orchestration.

2. **Agent Self-Improvement & Skill Utilization** — Repeated requests for better skill invocation (#21968), subagent recovery (#22323), and memory system robustness (#26516, #26522-26525) point to a maturity gap in autonomous agent behavior.

3. **Windows/Enterprise Hardening** — URI parsing (#26902), proxy support (#26361), drive-path handling (#25216), and security validations (#26881) show enterprise adoption pushing platform edge cases.

4. **Observability & Cost Control** — Token burn loops (#23182), deceptive quota consumption (#26619), and shell hang detection (#25166) reveal users need clearer visibility into what the agent is doing and why.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **429/Capacity Hell** | 🔥🔥🔥🔥🔥 | #24937 (91 comments), #26862, #2305, #26619 — across free and paid tiers |
| **Silent Failures / False Success** | 🔥🔥🔥🔥 | #22323 (GOAL on MAX_TURNS), #21968 (skills ignored), #26563 (memory tool missing) |
| **Windows Path/URI Handling** | 🔥🔥🔥 | #26902, #25216 — file navigation broken, temp path crashes |
| **Update Channel Surprises** | 🔥🔥🔥 | #2305 history, fixed in v0.42.0 — users unexpectedly on preview/nightly |
| **Shell/Terminal Reliability** | 🔥🔥🔥 | #25166 (hanging), #26955 (perf), #21924 (resize flicker) |
| **MCP/Extension Security & Auth** | 🔥🔥 | #26954 (Grade F), #26312 (OAuth stale tokens), #26274 (SSH install) |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity. For real-time updates: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-13

---

## 1. Today's Highlights

GitHub shipped **Copilot CLI v1.0.46** with critical fixes for PowerShell global tool shim users and improved diff readability, while the community actively debates session management ergonomics around the new `/fork` command and autopilot modes. A wave of 32 new/updated issues reveals growing pains in MCP server reliability, cross-platform terminal integration, and permission persistence. Notably, spam from a single user account (`dezhu1004-art`) required mass triage, slightly inflating issue counts.

---

## 2. Releases

### [v1.0.46](https://github.com/github/copilot-cli/releases/tag/v1.0.46) — 2026-05-12

| Change | Impact |
|--------|--------|
| **Deprecation warning for outdated CLI versions** | Prevents silent loss of premium model access when users lag behind updates |
| **PowerShell global tool shim support** | Fixes launch failure when `pwsh` is installed via `dotnet tool install --global` — directly addresses [#3259](https://github.com/github/copilot-cli/issues/3259) |
| **Diff line wrapping at terminal width** | Eliminates truncated long lines in diff view; improves code review UX |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#2058** | [Add `/fork` command to branch a session for side quests](https://github.com/github/copilot-cli/issues/2058) | Core UX gap in multi-objective workflows; users lose context when tangential questions derail main tasks. Parallels Git branching mental model developers already understand. | 8 comments, 7 👍 — high engagement, pre-dates v1.0.45 release |
| **#1433** | [COPILOT_CUSTOM_INSTRUCTIONS_DIRS fails with NFS/external paths](https://github.com/github/copilot-cli/issues/1433) | Breaks enterprise/team workflows where shared instructions live on network storage. Linux-specific, affects configuration portability. | 7 comments, 6 👍 — persistent, unresolved since Feb |
| **#3181** | [Remove/disable automatic co-author attribution to Copilot](https://github.com/github/copilot-cli/issues/3181) | Philosophical + practical: developers resist anthropomorphizing AI tools; clutters git history. Closed without clear resolution — may resurface. | 4 comments, 0 👍 — contentious, closed |
| **#2818** | [Session token expired mid-autopilot task](https://github.com/github/copilot-cli/issues/2818) | Kills long-running unattended workflows; "autopilot" promise undermined by auth fragility. Recently closed — fix verification needed. | 3 comments, 5 👍 — reliability concern |
| **#3259** | [PowerShell process cannot start (dotnet global tool)](https://github.com/github/copilot-cli/issues/3259) | v1.0.45 regression blocking Windows developers using modern .NET tooling distribution. **Fixed in v1.0.46** — validate and close. | 2 comments, 1 👍 — confirmed resolved by release |
| **#3123** | [`/research` agent fails to write report — "create" tool unavailable](https://github.com/github/copilot-cli/issues/3123) | Breaks research workflow promise; agent completes cognitive work but cannot persist output. Tool permission model unclear to users. | 2 comments, 1 👍 — agent capability gap |
| **#3242** | [GPT sessions hit transient API errors on PLAN operations](https://github.com/github/copilot-cli/issues/3242) | Model-specific degradation; Claude unaffected. Suggests routing or prompt formatting issue with GPT-tier backends. | 2 comments — operational concern |
| **#3252** | [No `/fork` in v1.0.45 despite changelog claim](https://github.com/github/copilot-cli/issues/3252) | Release note accuracy/expectation mismatch; shipped in v1.0.45? Community confusion. Closed as resolved — likely build/packaging lag. | 2 comments — release process friction |
| **#3261** | [Add `shell` as discoverable `/` command instead of `!`](https://github.com/github/copilot-cli/issues/3261) | Usability: `!` is invisible to autocomplete, violating CLI's self-documenting design. Low barrier fix, high discoverability impact. | 1 comment, 0 👍 — quick win request |
| **#3257** | [HTTP MCP servers fail after idle — dead pooled TCP connections](https://github.com/github/copilot-cli/issues/3257) | Production MCP integration blocker; NAT/firewall idle timeouts silently kill connections. Needs keepalive or connection validation. | 1 comment — infrastructure reliability |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.** 

All activity is issue-driven. This suggests either:
- Pre-release code freeze for v1.0.46 (now shipped)
- Internal development not yet pushed to public forks
- Community contribution bottleneck — opportunity for external contributors on well-scoped issues like #3261, #3263, #3264

---

## 5. Feature Request Trends

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Session branching / task isolation** | #2058 (`/fork`), #3256 (ACP `fork` capability), #3265 (`/pause` agent interrupt) | **Shipping** — core to v1.0.45+ roadmap; needs parity across UI vs. ACP API |
| **Agent control & observability** | #3265 (`/pause`), #3266 (silent model substitution), #3263 (named skill load failures) | **Emerging** — users want visibility into agent internals, not black-box execution |
| **Shell/terminal integration polish** | #3261 (`/shell` command), #3260 (SSH/tmux copy-paste), #3259 (PowerShell detection) | **Active** — cross-platform terminal fidelity remains uneven |
| **Permission & configuration durability** | #3253 (permissions not persisted), #3268 (plugin marketplace cleanup), #3264 (symlink support) | **Friction point** — state management across sessions inconsistent |
| **MCP ecosystem hardening** | #3257 (TCP pool reuse), #3258 (structuredContent dropping), #3269 (misleading auth UX) | **Critical path** — MCP is strategic but integration rough edges abound |

---

## 6. Developer Pain Points

**Authentication & Session State Fragility**
Long-running tasks fail due to token expiration (#2818) and stale lock files accumulate after crashes (#3255). The "autopilot" value proposition requires rock-solid session persistence.

**Invisible Failures & Silent Substitutions**
Agents swap models without warning (#3266), drop MCP content fields (#3258), and report generic "N skills failed" without naming culprits (#3263). Developers cannot debug what they cannot see.

**Cross-Platform Terminal Inconsistencies**
PowerShell detection (#3259, fixed), SSH/tmux clipboard (#3260), and CJK quote handling (#3254) show Windows and non-ASCII environments as second-class citizens.

**Configuration Portability & Enterprise Constraints**
NFS-mounted instructions (#1433), symlink documentation gaps (#3264), and non-persistent permissions (#3253) block team-standardized workflows.

**MCP Integration at Scale**
HTTP connection pooling (#3257) and auth flow UX (#3269) suggest MCP server lifecycle management was optimized for demo scenarios, not production idle/timeout realities.

---

*Digest compiled from 32 issues and 1 release. No PRs active. Spam issues #3270–#3274 excluded from analysis.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-13

## 1. Today's Highlights

Kimi Code CLI **v1.43.0 shipped today** with UI polish and telemetry improvements, while the community actively debates model quality with heated feedback on K2.6 versus K2.5. On the engineering front, contributors landed critical fixes for memory leaks, connection pooling, and a CVE in Pillow, alongside new features for shell approval workflows and interactive prompt modes.

---

## 2. Releases

### [v1.43.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.43.0)
- **UI refinements**: Improved shell spacing, link highlighting, and notification duration ([PR #2230](https://github.com/MoonshotAI/kimi-cli/pull/2230))
- **Telemetry enhancements**: Polished event schema with outcome enums, lifecycle tracking, and richer error metadata ([PR #2230](https://github.com/MoonshotAI/kimi-cli/pull/2230))

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|-------------------|
| [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | Kimi K2.5 vs K2.6 model switching | 🔴 OPEN | **Most-discussed issue** (10 comments). Users report K2.6's reasoning mode harms creativity and increases hallucinations; requests system prompt/model downgrade option. | Strongly negative sentiment; passionate pleas for K2.5 restoration |
| [#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947) | OAI-compatible copilot failure | 🔴 OPEN | Breaks VS Code + johnny-zhao.oai-compatible-copilot integration; generic "request failed" error blocks daily workflow. | Frustration; 4 comments seeking repro details |
| [#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585) | Customizable newline keybinding (Shift+Enter) | 🔴 OPEN | Long-standing UX pain point; current `Ctrl+J` binding criticized as unintuitive. Chinese community particularly vocal. | 2 upvotes; exasperated tone ("不会死的" / "won't kill you") |
| [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) | OpenAI-compatible API endpoint | 🔴 OPEN | Would unlock Cursor, Claude Desktop, and third-party IDE integrations; directly competes with Codex's distribution strategy. | Enthusiastic request from K2.6 fan |
| [#2204](https://github.com/MoonshotAI/kimi-cli/issues/2204) | `/clear` rotates context without restore path | 🟢 CLOSED | Data preservation UX gap: rotated `context.jsonl` files exist but are unreachable. | Resolved via closure; no restore command yet |
| [#2218](https://github.com/MoonshotAI/kimi-cli/issues/2218) | `/goal` command for long tasks (Codex parity) | 🔴 OPEN | Codex feature gap; users want persistent task scoping beyond single-turn interactions. | 1 comment; emerging pattern |
| [#2247](https://github.com/MoonshotAI/kimi-cli/issues/2247) | Theme mode diff render error | 🔴 OPEN | Visual regression in v1.43.0; diff rendering broken with image evidence provided. | Fresh report; awaiting triage |
| [#2153](https://github.com/MoonshotAI/kimi-cli/issues/2153) | Pillow CVE-2026-25990 bump to 12.2.0 | 🟢 CLOSED | Security blocker for enterprise environments; out-of-bounds write in PSD loading. | Clean resolution via [#2187](https://github.com/MoonshotAI/kimi-cli/pull/2187) |
| [#2203](https://github.com/MoonshotAI/kimi-cli/issues/2203) | AuthlibDeprecationWarning on MCP startup | 🟢 CLOSED | Noisy warning pollution for all MCP server users; degrades perceived polish. | Fixed by FastMCP 3.x upgrade in [#2241](https://github.com/MoonshotAI/kimi-cli/pull/2241) |
| [#2240](https://github.com/MoonshotAI/kimi-cli/issues/2240) | Pass initial prompt while keeping interactive mode | 🔴 OPEN | `--prompt` currently forces single-shot exit; breaks exploratory workflows. | PR [#2246](https://github.com/MoonshotAI/kimi-cli/pull/2246) already proposed |

---

## 4. Key PR Progress

| # | PR | Status | Feature / Fix | Technical Significance |
|---|-----|--------|-------------|----------------------|
| [#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249) | Unified approval modes with toolbar badges | 🔴 OPEN | Consolidates `--yolo`, `--afk`, `/yolo`, `/afk`, and session approval into coherent UX with visual indicators | **Major UX debt reduction**; eliminates 4 overlapping mechanisms |
| [#2248](https://github.com/MoonshotAI/kimi-cli/pull/2248) | `/loop` recurring prompt scheduler | 🟢 CLOSED | Cron-based prompt scheduling with jitter, backoff, and persistent task state | New automation primitive; Codex-competitive feature |
| [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) | Bound broadcast queues + capped web store cache | 🔴 OPEN | Prevents OOM from unbounded `asyncio.Queue` and unbounded session caching | **Production reliability**; fixes memory leak for high-volume users |
| [#2246](https://github.com/MoonshotAI/kimi-cli/pull/2246) | `--prompt-interactive` (`-P`) option | 🔴 OPEN | Pass initial prompt then stay in shell; resolves [#2240](https://github.com/MoonshotAI/kimi-cli/issues/2240) | Smooths onboarding; enables scripted-to-interactive transitions |
| [#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231) | Reuse `TCPConnector` via `_ConnectionPool` | 🔴 OPEN | Eliminates per-call connector creation; enables HTTP keep-alive | **Performance**: reduces FD exhaustion and TCP handshake overhead |
| [#2245](https://github.com/MoonshotAI/kimi-cli/pull/2245) | Provider error UX for 429 surfaces | 🔴 OPEN | Centralized error formatter; distinguishes quota exhaustion vs. transient rate limits | Reduces support burden; cleaner user-facing messages |
| [#2244](https://github.com/MoonshotAI/kimi-cli/pull/2244) | Release bump to 1.43.0 | 🟢 CLOSED | Version choreography and release note migration | Standard release mechanics |
| [#2242](https://github.com/MoonshotAI/kimi-cli/pull/2242) | Tool call deduplication | 🟢 CLOSED | Same-step and cross-step duplicate tool call suppression | Cuts redundant execution; improves latency and token efficiency |
| [#2187](https://github.com/MoonshotAI/kimi-cli/pull/2187) | Pillow 12.2.0 security bump | 🟢 CLOSED | CVE-2026-25990 remediation | Unblocks security-tight deployments |
| [#2241](https://github.com/MoonshotAI/kimi-cli/pull/2241) | FastMCP 3.x OAuth storage upgrade | 🟢 CLOSED | Resolves `AuthlibDeprecationWarning`; replaces removed `FileTokenStorage` | MCP ecosystem hygiene; warning-free startup |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **OpenAI API compatibility** | [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208), [#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947) | 🔥 High — ecosystem unlock, competitive necessity |
| **Model selection / downgrade** | [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | 🔥 High — user retention risk with K2.6 dissatisfaction |
| **Long-task orchestration** | [#2218](https://github.com/MoonshotAI/kimi-cli/issues/2218) (`/goal`), [#2248](https://github.com/MoonshotAI/kimi-cli/pull/2248) (`/loop`) | Medium — Codex parity drive |
| **Interactive shell ergonomics** | [#2240](https://github.com/MoonshotAI/kimi-cli/issues/2240)/[#2246](https://github.com/MoonshotAI/kimi-cli/pull/2246) (`-P`), [#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585) (keybindings) | Medium — daily UX friction |
| **Context management** | [#2204](https://github.com/MoonshotAI/kimi-cli/issues/2204) (history restore) | Low — partially addressed |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **K2.6 model quality regression** | 🔴 Chronic | **Severe** — creative tasks degraded, hallucinations up, personality loss | [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) |
| **Fragmented approval UX** | 🔴 Chronic | Moderate — cognitive load from 4 overlapping mechanisms | [#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249) |
| **CLI input ergonomics** | 🟡 Recurring | Moderate — non-standard keybindings, single-shot `--prompt` limitation | [#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585), [#2240](https://github.com/MoonshotAI/kimi-cli/issues/2240) |
| **Integration friction with external tools** | 🟡 Recurring | Moderate — no OpenAI-compatible endpoint, MCP warnings, copilot failures | [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208), [#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947), [#2203](https://github.com/MoonshotAI/kimi-cli/issues/2203) |
| **Resource leaks in production** | 🟢 Addressed | High if unpatched — memory, connections, file descriptors | [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236), [#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231) |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-05-12.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-13

## Today's Highlights

The OpenCode team shipped a major batch of internal test infrastructure migrations to the Effect-native runner, with contributor kitlangton landing 10+ PRs in 24 hours. Meanwhile, two significant beta features—TUI notifications with audio support and session timeline virtualization—are advancing through review, alongside a new native session goals feature. On the issue front, keyboard handling regressions in the latest 1.14.48 release and a silent image attachment failure on Linux are drawing urgent community attention.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#16100](https://github.com/anomalyco/opencode/issues/16100) | Numpad keys broken in VS Code 1.110 integrated terminal | Terminal input regression affecting a major IDE integration; 21 comments suggest widespread impact on developer workflows | 18 👍, active troubleshooting |
| [#25879](https://github.com/anomalyco/opencode/issues/25879) | `opencode-cli` TUI missing from Debian package 1.14.39 | Silent removal of a core binary without changelog documentation; breaks automation and scripting workflows | Confusion, requests for clarity |
| [#6217](https://github.com/anomalyco/opencode/issues/6217) | Multiple instances of same provider | Power-user need for account segmentation (work/personal OpenRouter); long-standing request with clear use case | 19 👍, constructive design discussion |
| [#8463](https://github.com/anomalyco/opencode/issues/8463) | Add `--dangerously-skip-permissions` ("YOLO mode") | High-demand automation feature; permission fatigue is a known friction point in CI/trusted environments | 47 👍, one of top-voted open issues |
| [#10557](https://github.com/anomalyco/opencode/issues/10557) | OpenRouter provider pinning fails | Configuration-ignored provider routing undermines cost/reliability optimization; user-provided repro config | 2 👍, technical deep-dive |
| [#14970](https://github.com/anomalyco/opencode/issues/14970) | SQLite corruption on NFS with concurrent sessions | Data loss bug in shared-network home directory setups (common in enterprises); Bun-specific SQLite behavior | 14 👍, reproduction details |
| [#27096](https://github.com/anomalyco/opencode/issues/27096) | Keybinds broken on 1.14.48 (Dvorak/scancode issue) | **Same-day regression**: keyboard layout detection switched from keycodes to scancodes, breaking non-QWERTY users | Reported within hours of release |
| [#27109](https://github.com/anomalyco/opencode/issues/27109) | All image attachments stripped on Linux x86_64 | Silent WASM loader failure masks as size-limit message; completely breaks vision workflows on a major platform | 3 comments, urgent |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) | Auto model selection by task type | Competitive parity request vs. Cursor/Cline; would reduce manual model switching friction | 34 👍, well-scoped proposal |
| [#9532](https://github.com/anomalyco/opencode/issues/9532) | Claude tool calling errors (`ProxyRead`, `ProxyGlob`) | Model-provider mismatch on tool availability; suggests provider abstraction layer issues | 1 👍, reproducible logs |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#26980](https://github.com/anomalyco/opencode/pull/26980) | [beta] TUI notifications and attention sounds | New attention API with sound packs, per-call focus behavior, and plugin-extensible audio; disabled by default for non-disruption | Open |
| [#25821](https://github.com/anomalyco/opencode/pull/25821) | core: expose v2 model listing API | Programmatic model discovery with pricing/capabilities; SDK alignment around `ModelV2` naming | Open |
| [#26949](https://github.com/anomalyco/opencode/pull/26949) | [beta] Virtualize session timeline rows | Performance optimization using `virtua` at row granularity; reduces memory pressure on long sessions | Open |
| [#27163](https://github.com/anomalyco/opencode/pull/27163) | feat: add native session goals | Server-persisted per-session goals via `/goal` command; closes #27162 | Open |
| [#27181](https://github.com/anomalyco/opencode/pull/27181) | effect: add RuntimeFlags service | Typed runtime flag system with test overrides; migrates plugin loading from env var checks | Open |
| [#27178](https://github.com/anomalyco/opencode/pull/27178) | effect(core): add AppProcess service | Higher-level process abstraction mirroring `AppFileSystem` pattern; Phase 1 of process management refactor | Open |
| [#25794](https://github.com/anomalyco/opencode/pull/25794) | docs: Persian (Farsi) README translation | Community localization contribution | Open |
| [#27182](https://github.com/anomalyco/opencode/pull/27182) | test(worktree): dispose instances before removal | Windows file lock fix in worktree cleanup | Merged |
| [#27179](https://github.com/anomalyco/opencode/pull/27179) | Avoid touching session update time in migration | Preserves timestamps during cost/token backfill; data integrity fix | Merged |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | feat(app): Mobile Touch Optimization | Touch-first UI adaptations with desktop preservation; long-running mobile feature branch | Open |

---

## Feature Request Trends

**1. Permission & Automation Ergonomics**
- "YOLO mode" (`--dangerously-skip-permissions`, #8463) and granular permission ordering (#16157) dominate. Users want less interruption in trusted contexts without sacrificing safety defaults.

**2. Multi-Account / Multi-Provider Flexibility**
- Multiple provider instances (#6217), provider pinning (#10557), and task-based model routing (#8456) cluster around a theme: OpenCode's abstraction layer needs to support sophisticated provider strategies as users scale beyond single-account setups.

**3. Session & State Management**
- Native goals (#27162/#27163), unarchiving (#12393), and remote web server state sharing (#11997) show demand for richer session lifecycle features beyond the current chat model.

**4. Agent Architecture**
- Subagent guidance (#2378) and independent agent permissions (#27123) reveal tension in the current hierarchical agent model—users need more control over spawned agents' capabilities.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Release/Package Regressions** | Missing binaries (#25879), broken keybinds (#27096), failed auto-updates (#23538) | High — 3 issues in 24h |
| **Linux Platform Stability** | Image processing failures (#27109), segfaults in NixOS/WSL (#26846), `SIGILL` crashes (#27137) | High — WASM/runtime-level issues |
| **Provider Integration Fragility** | Tool availability mismatches (#9532, #7414), reasoning content failures (#26762), double compaction (#26230) | Medium-High — Copilot/OpenRouter/Cerebras all affected |
| **Database/State Concurrency** | SQLite corruption on NFS (#14970), session migration timestamp bugs | Medium — enterprise/NFS users blocked |
| **Keyboard/Input Handling** | Numpad (#16100), Dvorak/scancode (#27096) — terminal input layer seems fragile | Recurring pattern |

**Notable pattern**: The 1.14.48 release introduced multiple same-day regressions (keybinds, image attachments, crashes), suggesting potential gaps in pre-release testing for non-QWERTY layouts and Linux x86_64 WASM paths.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-13

## Today's Highlights
The Pi team is executing a major internal refactor ("bigrefactor"), closing dozens of issues en masse with that label while community demand for local LLM support and provider flexibility continues to intensify. The most-discussed open issue is julien-c's proposal for dynamic model list fetching from local LLM servers, signaling strong user interest in self-hosted workflows. Meanwhile, security and packaging concerns remain active with a compromised upstream dependency (Mistral 2.2.4) and ongoing cleanup of npm shrinkwrap and unused dependencies.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **Official local LLM provider extension** — Dynamic model list fetching from `{baseUrl}/models` for llama.cpp/ollama/LM Studio | Local LLM support is the #1 user-requested capability; current static configuration is friction-heavy | 23 👍, 11 comments; julien-c (Hugging Face co-founder) authoring, lending significant ecosystem credibility |
| [#4251](https://github.com/earendil-works/pi/issues/4251) | **Kimi k2.6 `reasoning_content` missing in tool calls** — OpenCode Go provider breaks on reasoning-enabled message chains | Blocks production use of Moonshot's Kimi models, a rising competitor to Claude/DeepSeek | 6 comments; no resolution, user actively debugging |
| [#4197](https://github.com/earendil-works/pi/issues/4197) | **User message duplication in API input** — `_pendingNextTurnMessages` drain causes double-send in print mode and subagent dispatch | Silent data corruption; inflates token costs and may confuse model behavior | 3 comments; precise technical reproduction provided |
| [#4342](https://github.com/earendil-works/pi/issues/4342) | **`ANTHROPIC_AUTH_TOKEN` env var leaks to non-Anthropic providers** — Xiaomi MiMo gets 401 from dual auth headers | SDK-level credential pollution; breaks any Anthropic-compatible endpoint not actually run by Anthropic | 3 comments; root cause identified in SDK behavior |
| [#4365](https://github.com/earendil-works/pi/issues/4365) | **External editor stdin leak** — `nvim` via Ctrl+G receives keystrokes meant for Pi when using pre-compiled releases | Critical workflow blocker for vim/neovim users; regression from bun version change | 3 👍, 2 comments; reproducible, affects release binaries specifically |
| [#4290](https://github.com/earendil-works/pi/issues/4290) | **Length-aborted messages treated as regular stops** — Users wait indefinitely for "Thinking..." that silently failed | UX trap; no visual distinction between success and truncation failure | 4 comments; affects long-context workflows |
| [#4307](https://github.com/earendil-works/pi/issues/4307) | **macOS bun binary missing clipboard dependency** — Image paste broken for mise-installed users | Platform-native feature gap; no shell fallback on macOS | 2 comments; installation-method specific |
| [#4432](https://github.com/earendil-works/pi/issues/4432) | **Mistral package 2.2.4 compromised** — Supply chain security alert via X/Twitter | Rapid response: team confirmed pinned to 2.2.1, but highlights dependency audit needs | 2 comments, 1 👍; closed quickly with verification |
| [#4210](https://github.com/earendil-works/pi/issues/4210) | **Bedrock `converse-stream` empty `end_turn` not retried** — AWS returns null instead of throwing, causing silent agent dropout | Production AWS reliability issue; user built local extension as workaround | 7 comments; closed due to refactor, fix may need re-validation |
| [#2528](https://github.com/earendil-works/pi/issues/2528) | **Azure OpenAI 404 missing `api-version`** — `openai-completions` provider incompatible with Azure endpoints | Enterprise Azure adoption blocker; affects OpenClaw integration | 7 comments, 1 👍; closed due to refactor, likely still relevant |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#4452](https://github.com/earendil-works/pi/pull/4452) | **chore(coding-agent): add publish shrinkwrap** — Hard-pin all dependencies for CLI package installs | 🔵 Open | Prevents future supply chain drift; mitsuhiko (Sentry/Armin Ronacher) contributing |
| [#4453](https://github.com/earendil-works/pi/pull/4453) | **chore(deps): remove unused dependencies** — Cleanup and correct dependency placement | ✅ Closed | Reduces install footprint and audit surface |
| [#4446](https://github.com/earendil-works/pi/pull/4446) | **fix(openai-codex): repair raw control chars in SSE/WebSocket frames** — Handle U+0000–U+001F in JSON parse of tool output | ✅ Closed | Fixes Codex transport crashes on binary/ANSI tool output; strict JSON vs. real-world agent traffic |
| [#4434](https://github.com/earendil-works/pi/pull/4434) | **Codex/focus input on conversation switch** — UX polish for web client | ✅ Closed | Minor but frequent friction point in multi-conversation workflow |
| [#4426](https://github.com/earendil-works/pi/pull/4426) | **fix(coding-agent): restore terminal on uncaught exception** — `ui.stop()` in `uncaughtException` handler | ✅ Closed | Prevents zombie TUI state (raw stdin, hidden cursor) on crashes |
| [#4391](https://github.com/earendil-works/pi/pull/4391) | **fix(coding-agent): dispose SDK example sessions** — Clean up `websocket-cached` transports in one-shot examples | ✅ Closed | Fixes hanging Node processes; developer experience improvement |
| [#4383](https://github.com/earendil-works/pi/pull/4383) | **fix(coding-agent) docs: update tool configuration API** — Replace deprecated `readTool`/`bashTool` factories with `createAgentSession({ tools })` | ✅ Closed | Documentation debt from API evolution; resolves #4375 |
| [#4379](https://github.com/earendil-works/pi/pull/4379) | **fix(tui): render checkboxes in to-do list items** — Markdown `-[ ]` parsing fix | ✅ Closed | Visual regression in rendered output |

---

## Feature Request Trends

1. **First-class local LLM integration** — Dynamic model discovery (#3357), official llama.cpp provider (#3567), and broad ollama/LM Studio compatibility dominate requests. Users want Pi to "just work" with self-hosted infrastructure without manual configuration per model.

2. **GUI/web client alternative to TUI** — #4447 explicitly requests a GUI client, reflecting that Pi's terminal-centric design, while powerful, excludes users preferring graphical interfaces or needing accessibility accommodations.

3. **Provider ecosystem expansion** — Requests span Azure OpenAI (#2528), Bedrock (#4210), Kimi/Moonshot (#4251), Xiaomi MiMo (#4342), and Harmony format (#4439). The community is pushing beyond OpenAI/Anthropic duopoly.

4. **Organization/multi-agent workflows** — #4418 proposes `packages/organization-agent` ("Agent Company"), indicating interest in structured team/agent orchestration patterns.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Refactor churn obscuring bug fixes** | Mass issue closure with `closed-because-bigrefactor`/`closed-because-refactor` labels; users uncertain if fixes persist | 🔴 High |
| **TUI stability and terminal state management** | #4426 (uncaught exception cleanup), #4365 (stdin leak), #4300 (tall images break TUI), #4440 (debugging tools requested for rendering perf) | 🔴 High |
| **SDK/API documentation lag** | #4383 (outdated tool API docs), #4392 (slash command routing from tools broken), #4391 (examples leak resources) | 🟡 Medium |
| **Packaging and distribution fragility** | #4399 (Windows npm/pnpm install fails), #4307 (macOS bun missing clipboard), #4362 (`pi update --self` uses old repo), #4452 (shrinkwrap needed) | 🟡 Medium |
| **Credential and environment variable pollution** | #4342 (`ANTHROPIC_AUTH_TOKEN` leaks cross-provider) | 🟡 Medium |
| **Long-context session degradation** | #4430 (errors at 70-90k context), #4290 (silent length truncation) | 🟡 Medium |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-13

## Today's Highlights

Two preview releases (v0.15.11-preview.0/1) landed with a notable performance fix for session-list metadata I/O, while the community is actively debating a 14-chapter daemon mode proposal (#3803) that could reshape Qwen Code's architecture. Meanwhile, atomic file writes and hierarchical OpenTelemetry tracing are progressing rapidly toward merge, signaling production-hardening as a major theme this cycle.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.11-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11-preview.1)** | Performance improvement: bounds session-list metadata reads to head/tail 64KB with pooled buffers and lazy message counting ([#3897](https://github.com/QwenLM/qwen-code/pull/3897)); e2e test stabilization |
| **[v0.15.11-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11-preview.0)** | Identical changelog to preview.1 — initial preview cut |

The session-list optimization by @qqqys addresses a known scaling pain point for long-running conversations with extensive history.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#3730](https://github.com/QwenLM/qwen-code/issues/3730)** | Auto-stop bug: Qwen Code spontaneously halts tasks without user input | **P1 regression** — breaks long-running workflows that previously worked for weeks; 6 comments indicate active investigation | 🔴 Critical |
| **[#3548](https://github.com/QwenLM/qwen-code/issues/3548)** | Configurable `plansDirectory` for Plan Mode (Gemini CLI / Claude Code parity) | Feature parity request for a proven UX pattern in competitor tools; labeled `welcome-pr` | 🟡 Moderate interest |
| **[#3803](https://github.com/QwenLM/qwen-code/issues/3803)** | Daemon mode (`qwen serve`) — 14-chapter architecture proposal | **Architectural inflection point**: would enable headless/server deployments, SDK integration, and multi-client scenarios; @wenshao driving deep design series | 🟢 Strong engagement (4 comments, 👍1) |
| **[#3838](https://github.com/QwenLM/qwen-code/issues/3838)** | Terminal infinite scroll/refresh loop during code analysis | Severe UI regression on v0.15.6 — renders tool unusable during core workflow; Chinese-language report suggests Asia-Pacific user impact | 🔴 Critical |
| **[#4055](https://github.com/QwenLM/qwen-code/issues/4055)** | Simple request triggers 10+ minute self-looping "thinking" with no response | **Reliability crisis**: basic `read_file` instruction causes infinite reasoning loop; screenshots show extreme token waste | 🔴 Critical |
| **[#4025](https://github.com/QwenLM/qwen-code/issues/4025)** | Statusline `cxt` percentage inaccurate — can't trust `/compact` timing | Undermines user trust in core token management UX; `welcome-pr` suggests maintainers want community help | 🟡 Technical debt |
| **[#4035](https://github.com/QwenLM/qwen-code/issues/4035)** | DashScope-intl endpoint fetch failure — `undici` dispatcher incompatibility | **International user blocker**: Singapore/International endpoint broken for `openai` auth type; Arch Linux + Node 26 stack | 🔴 Critical |
| **[#4076](https://github.com/QwenLM/qwen-code/issues/4076)** | Tool calls return empty content (SiliconFlow + GLM-5.1) | Breaks core agent functionality — user gets no actionable output; needs more diagnostic info | 🟡 Needs triage |
| **[#4089](https://github.com/QwenLM/qwen-code/issues/4089)** | Context window config ignored: 262K setting shows 1M in `/context detail` | Configuration drift between `settings.json` and runtime; affects cost/performance predictability | 🟡 Needs triage |
| **[#4094](https://github.com/QwenLM/qwen-code/issues/4094)** | Background task dialog UX: trim stale results, improve discoverability | Polishes multi-tasking experience — "x tasks done" pill and terminal clutter are recurring friction points | 🟢 Quality-of-life |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **[#3889](https://github.com/QwenLM/qwen-code/pull/3889)** | `qwen serve` daemon Stage 1 — HTTP daemon + SDK `DaemonClient` | Implements #3803: ACP NDJSON over HTTP + SSE, session lifecycle routes, health/capabilities endpoints; **foundational for server deployments** | 🟡 Open — under review |
| **[#4096](https://github.com/QwenLM/qwen-code/pull/4096)** | Generic `atomicWriteFile` + wire into Write/Edit tools | Eliminates corruption risk on crash/power-loss mid-write; fsync, permission preservation, EXDEV fallback; closes gap noted in codebase TODOs | 🟢 Open — fresh, high quality |
| **[#4097](https://github.com/QwenLM/qwen-code/pull/4097)** | Hierarchical session tracing with detailed span attributes | `interaction` → `llm_request`/`tool` → `tool.execution` spans via AsyncLocalStorage; aligns with Claude Code beta tracing | 🟢 Open — fresh |
| **[#4064](https://github.com/QwenLM/qwen-code/pull/4064)** | `/rewind` file restoration (not just history truncation) | Ports Claude Code's `fileHistory` backup pattern; **closes #3697** — critical safety net for destructive edits | 🟡 Open |
| **[#3849](https://github.com/QwenLM/qwen-code/pull/3849)** | Cross-authType model resolution in `ModelRegistry`/`ModelsConfig` | Data-layer refactor from #3815; cleaner architecture for multi-provider model discovery | 🟡 Open |
| **[#3994](https://github.com/QwenLM/qwen-code/pull/3994)** | Progressive MCP availability — MCP no longer blocks first input | **Major TTI win**: measured improvement from synchronous MCP discovery bottleneck; unblocks users with slow/hung MCP servers | 🟡 Open |
| **[#4070](https://github.com/QwenLM/qwen-code/pull/4070)** | Code-split `lowlight` to cut startup V8 parse cost (~36–60ms) | Lazy-loads 1.5MB syntax highlighter; pure performance optimization, zero API change | 🟢 Open |
| **[#3966](https://github.com/QwenLM/qwen-code/pull/3966)** | Deduplicate Gemini recovery continuation text on `MAX_TOKENS` | Fixes visible duplication glitch in long-generation recovery path; provider-compatibility fix | 🟡 Open |
| **[#3973](https://github.com/QwenLM/qwen-code/pull/3973)** | MCP add/remove persistence: headers + actual deletion | Closes data-loss bug: SSE/HTTP headers dropped, server removals only in-memory | 🟡 Open |
| **[#4067](https://github.com/QwenLM/qwen-code/pull/4067)** | Use bundled Qwen Code for PR review automation | Dogfooding: replaces weak external action with `/review` skill; makes review model transparent | 🟡 Open |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Daemon/Server Mode** | #3803 proposal, #3889 PR (Stage 1), #4026 "Cowork Mode" | 🔥 **Highest** — architectural shift enabling headless, multi-agent, and non-developer use cases |
| **Configuration Portability & Security** | #4016 (AES-256-GCM encrypted storage), #4017 (multi-tool config mapping), #4079 (`--quiet-restore`) | 🔥 High — enterprise/adoption friction |
| **Terminal UX Hardening** | #3821 (readline shortcuts), #4079 (quiet restore), #4094 (task dialog), #4025 (accurate context %) | 🌡️ Warm — polish gap vs. Claude Code/Gemini CLI |
| **Browser/Computer Use Integration** | #4034 (browser-use tool), #4026 (Cowork Mode references Anthropic's computer use) | 🌡️ Warm — competitive parity |
| **Plan Mode & Session Management** | #3548 (plansDirectory), #3733 (batch session deletion), #4064 (`/rewind` files) | 🌡️ Warm — power-user workflows |

---

## Developer Pain Points

| Pain Point | Frequency | Manifestations | Severity |
|------------|-----------|----------------|----------|
| **Infinite loops / unbounded reasoning** | #3730, #4055, #3838 | Auto-stop without cause; 10+ min self-looping on simple requests; terminal render loops | 🔴 **Critical** — erodes trust in core reliability |
| **International/Non-standard endpoint compatibility** | #4035, #3704, #4076 | DashScope-intl `undici` failures; token-plan auth errors; SiliconFlow/GLM empty tool returns | 🔴 **Critical** — blocks global adoption |
| **Context/token management opacity** | #4025, #4089, #4098 | Inaccurate `cxt` %; config ignored; `/compress` non-functional | 🟡 High — users flying blind on limits |
| **File operation safety & fidelity** | #4096 (PR), #4077, #4064 | Non-atomic writes risk corruption; `read_file` renders vs. raw content mismatch; `/rewind` incomplete | 🟡 High — data integrity concerns |
| **MCP/tool integration fragility** | #3973, #3994, #4033 | Persistence bugs; startup blocking; excessive CPU during idle waits | 🟡 Moderate — ecosystem extensibility |
| **Settings/configuration portability** | #4016, #4017, #3548 | Plaintext secrets; no cross-tool config; missing directory conventions | 🟢 Growing — enterprise readiness gap |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-05-12 to 2026-05-13.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-13

## Today's Highlights

The project shipped three rapid-fire patch releases (v0.8.30–v0.8.32) to address a critical terminal flickering epidemic affecting Ghostty, Tabby, and Ubuntu terminals, with PR #1537 landing a DEC 2026 batch rendering fix. Community energy remains high with 50 active issues and 20 PRs in the last 24 hours, dominated by rendering stability, prefix cache optimization, and expanded protocol support.

---

## Releases

| Version | Date | Notable Changes |
|---------|------|---------------|
| **v0.8.32** | 2026-05-12 | Latest stable; includes flicker fixes and npm wrapper improvements |
| **v0.8.31** | 2026-05-12 | Intermediate patch in the v0.8.30–v0.8.32 stabilization series |
| **v0.8.30** | 2026-05-12 | Initial patch release kicking off the rapid stabilization cycle |

All releases maintain the standard npm and Docker distribution channels.

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|-------------------|
| [#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177) | [bug] 输入缓存命中率太低了 | 🔴 OPEN | **Performance-critical**: Reports ~95%+ prefix cache hit rates in competitor DeepSeek-Reasonix vs. drastically lower rates here. Direct cost impact on API usage. | 23 comments; users benchmarking and demanding parity; high engagement from Chinese-speaking community |
| [#1092](https://github.com/Hmbown/DeepSeek-TUI/issues/1092) | ACP: expose tool calls via serve --acp | 🔴 OPEN | **Protocol expansion**: Would enable Zed and other editors to leverage file/shell tools through the Agent Client Protocol. Bridges TUI and IDE ecosystems. | 16 comments; active discussion with maintainer; PR #1543 already references community adapter |
| [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683) | [enhancement] 强制让模型推理时特定语言思考链路 | 🔴 OPEN | **Localization gap**: DeepSeek V4 defaults to English thinking chains despite Chinese UI config, unlike competitors. Affects cognitive accessibility for non-English users. | 11 comments; linked to #1118 forming a theme; users comparing vendor behaviors |
| [#1378](https://github.com/Hmbown/DeepSeek-TUI/issues/1378) | [bug] macOS v0.8.25终端闪烁 | 🟢 CLOSED | **Terminal compatibility**: Ghostty/Tabby flickering regression, now resolved. Represents class of GPU-terminal rendering issues. | 9 comments; rapid closure suggests reproducible fix; user confirmed resolution |
| [#1118](https://github.com/Hmbown/DeepSeek-TUI/issues/1118) | [enhancement] Language configured to Chinese, thinking still English | 🔴 OPEN | **UX inconsistency**: Complements #683 with screenshot evidence. Impacts perceived product polish for Chinese market. | 8 comments; users frustrated by "half-localized" experience |
| [#1377](https://github.com/Hmbown/DeepSeek-TUI/issues/1377) | [bug, enhancement] Bug in deny tool use | 🟢 CLOSED | **Safety/reliability**: Deny-once-permanently-denies bug breaks agent workflow trust. Session restart required. | 5 comments; quick fix expected given clear repro |
| [#1488](https://github.com/Hmbown/DeepSeek-TUI/issues/1488) | [bug] mcp不支持mcp-session-id? | 🔴 OPEN | **MCP protocol compliance**: Missing session ID propagation breaks stateful MCP servers. Blocks enterprise integrations. | 3 comments; technical specificity suggests production blocker |
| [#1524](https://github.com/Hmbown/DeepSeek-TUI/issues/1524) | [enhancement] workspace沙箱边界很难用 | 🔴 OPEN | **Developer ergonomics**: Read-only outside workspace forces Python workarounds. Requests graduated permissions model. | 2 comments; pragmatic developer pain point |
| [#1506](https://github.com/Hmbown/DeepSeek-TUI/issues/1506) | After upgrading to 0.8.28, noticeably less intelligent | 🔴 OPEN | **Quality regression**: File reading failures and degraded reasoning vs. v0.8.18. User explicitly compared to Claude failures. | 2 comments; concerning given "it used to work" narrative; needs investigation |
| [#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472) | [question] Deadlock: process hangs unrecoverably when API connection stalls | 🔴 OPEN | **Production stability**: 24-hour runtime deadlock in WSL2. `pipe_read` with closed write end suggests async runtime edge case. | 1 comment; deep technical analysis provided; critical for long-running sessions |

---

## Key PR Progress

| # | Title | Status | Feature/Fix Description |
|---|-------|--------|------------------------|
| [#1548](https://github.com/Hmbown/DeepSeek-TUI/pull/1548) | Fix changelog command version hints | 🟡 OPEN | Makes `/change [version]` work for explicit versions, skips empty sections, improves localization hints |
| [#1544](https://github.com/Hmbown/DeepSeek-TUI/pull/1544) | feat(exec): add --resume and --continue for session continuity | 🟡 OPEN | Non-interactive multi-turn support with machine-readable streaming; enables CI/scripting workflows |
| [#1543](https://github.com/Hmbown/DeepSeek-TUI/pull/1543) | docs: reference acp-deepseek-adapter for full ACP tool support | 🟡 OPEN | Community adapter documentation for #1092; extends ACP ecosystem without core bloat |
| [#1537](https://github.com/Hmbown/DeepSeek-TUI/pull/1537) | fix(tui): merge resize clear+draw into single DEC 2026 batch | 🟢 CLOSED | **Critical flicker fix**: Eliminates blank flash by batching terminal operations; resolves #1378, #1445, #1515, #1539 |
| [#1533](https://github.com/Hmbown/DeepSeek-TUI/pull/1533) | fix(tui): discard mouse movement events during streaming | 🟢 CLOSED | Fixes #1529's ANSI sequence pollution loop; prevents "M[35;69;17M..." input corruption |
| [#1517](https://github.com/Hmbown/DeepSeek-TUI/pull/1517) | feat: integrate DeepSeek prefix-cache stability tracking | 🟡 OPEN | **Performance**: Addresses #1177 directly; adds byte-exact prefix matching to maximize cache hits, inspired by Reasonix |
| [#1536](https://github.com/Hmbown/DeepSeek-TUI/pull/1536) | feat: add /jobs cancel-all and Ctrl+K to kill running shell tasks | 🟡 OPEN | Task lifecycle management; exposes existing `ShellProcessManager::kill()` to TUI |
| [#1535](https://github.com/Hmbown/DeepSeek-TUI/pull/1535) | feat(engine): chunk parallel-safe tool execution | 🟡 OPEN | **Architecture**: Replaces binary parallel/serial with dependency-aware batching; improves latency for mixed tool plans |
| [#1534](https://github.com/Hmbown/DeepSeek-TUI/pull/1534) | Add Catppuccin/Tokyo Night/Dracula/Gruvbox themes + /theme picker | 🟡 OPEN | Activates dormant theme system; live preview picker with persistence |
| [#1511](https://github.com/Hmbown/DeepSeek-TUI/pull/1511) | fix(cli): honor config.toml reasoning_effort on non-auto exec routes | 🟢 CLOSED | Corrects config drift: `reasoning_effort` was silently dropped when not using `--model auto` |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Chinese-language reasoning chains** | #683, #1118 | 🔥 High — repeated complaints, competitive comparison |
| **Prefix cache optimization** | #1177, PR #1517 | 🔥 High — cost-sensitive users, benchmark-driven |
| **MCP protocol hardening** | #1488, #1409 (OAuth 2.1) | 🔥 High — enterprise integration blockers |
| **Theme/customization system** | PR #1534, #1528 (color complaints) | Medium — quality-of-life, accessibility |
| **Workspace sandbox flexibility** | #1524 | Medium — power-user friction |
| **Session management** | PR #1544 (resume), #1484 (auto-titles) | Medium — workflow continuity |
| **New provider support** | #1481 (OpenCode Go/Zen) | Low — one request, but cost-competitive |

---

## Developer Pain Points

1. **Terminal Rendering Stability** — The v0.8.25–v0.8.32 cycle was dominated by flickering across Ghostty, Tabby, Windows Terminal, and Ubuntu/xterm. PR #1537's DEC 2026 batch fix appears to have stabilized this, but the rapid patch cadence suggests insufficient pre-release terminal matrix testing.

2. **Configuration System Trust** — #1506's "less intelligent" regression and #1511's silently ignored `reasoning_effort` reveal a pattern where config.toml values get dropped or overridden unexpectedly. Users cannot predict which settings apply in which contexts.

3. **Permission Model Friction** — The sandbox (#1524) and tool approval (#1377, #1186) systems create workflow interruptions. Users want graduated controls (read-outside-workspace, persistent allow/deny rules) rather than binary security/ergonomics tradeoffs.

4. **npm Distribution Reliability** — #1279 (missing binaries causing slow downloads), #1532 (npm non-functional vs. cargo working), and #1538 (ETIMEDOUT handling) indicate the npm wrapper remains fragile compared to native binary distribution.

5. **Mouse/Input Handling Edge Cases** — #1529's ANSI sequence leak and #1359's VSCode terminal keybinding conflict show terminal input abstraction gaps. Mouse capture during streaming appears particularly hazardous.

6. **Long-Running Session Robustness** — #1472's WSL2 deadlock and #1299's Windows task hangs suggest async I/O and process management need defensive timeouts and better cancellation propagation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*