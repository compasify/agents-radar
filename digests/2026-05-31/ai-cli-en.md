# AI CLI Tools Community Digest 2026-05-31

> Generated: 2026-05-31 00:26 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-31

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a **multi-polar competitive arena** with six actively maintained tools serving distinct user segments, from enterprise developers (Claude Code, GitHub Copilot CLI) to open-source power users (OpenCode, Pi) and China-market-focused offerings (Kimi, Qwen, DeepSeek TUI). All tools now grapple with **agentic workflow reliability**—context compaction, tool execution safety, and long-session memory management have become universal pain points as users push beyond simple code completion into autonomous development workflows. The ecosystem shows **convergent technical evolution** toward MCP ecosystems, ACP protocol interoperability, and sandboxed execution, while diverging sharply on platform strategy (native binaries vs. JS runtimes, cloud-locked vs. self-hosted).

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity |
|------|:-----------:|:---------:|:--------------:|----------------|
| **Claude Code** | 50 | 7 | 1 (v2.1.158) | Steady; enterprise-focused cadence |
| **OpenAI Codex** | ~25 | 10+ | 0 | High PR velocity; TUI/workspace suite shipping |
| **Gemini CLI** | ~15 | 10 | 1 (v0.45.0 nightly) | Nightly builds; security/stability focus |
| **GitHub Copilot CLI** | 30 | 0 | 3 patches (v1.0.57-1/2/3) | Rapid patch mode; stabilization period |
| **Kimi Code CLI** | ~8 | 6 | 0 | Moderate; ACP stack active |
| **OpenCode** | 50 | 50 | 1 (v1.15.13) | **Highest velocity**; community-driven |
| **Pi** | ~12 | 10 | 0 | Steady; extension API expansion |
| **Qwen Code** | ~16 | 10 | 1 (v0.17.0 nightly) | Nightly cadence; JetBrains focus |
| **DeepSeek TUI** | 22 | 8 | 1 (v0.8.47) | Regional-market driven |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Context/Memory Reliability** | Claude Code, OpenCode, Pi, Qwen, Gemini | Auto-compaction that doesn't silently fail (#63015, #64037); session resume without OOM (#4624, #5044); epistemic integrity—model must not forget its own work (#63601) |
| **MCP Ecosystem Hardening** | Copilot CLI, OpenCode, Gemini, Qwen, DeepSeek | Token refresh protocol versioning (#3583); Windows spawn semantics (#3576); context explosion from tool descriptions (#8625); deterministic connection (#4641) |
| **Cross-Platform Session Parity** | Codex, Claude Code, Gemini, DeepSeek | Mobile↔desktop sync (#23078); WSL clipboard/clipboard (#27588); Termux/Android support (#50270); China network constraints (#2376, #755) |
| **Sandboxed/Isolated Execution** | OpenCode, Gemini, Codex | macOS seatbelt-equivalent (#2242); deterministic replay; hallucination detection at tool boundary (#63538) |
| **Cost Transparency & Control** | Claude Code, Codex, OpenCode | Per-session budgets (#64093); token usage forensics; monotonic cost display (#25118); real-time quota visibility (#25345) |
| **Conversation Branching/Rollback** | Codex, OpenCode | Tree-based conversation management (#12450); non-linear iteration workflows; session metadata APIs |
| **ACP/Interoperability Standards** | Kimi, Qwen, Pi | Protocol-level permission negotiation (#2364); message ID correlation (#2359); external agent platform integration |

---

## 4. Differentiation Analysis

| Dimension | **Claude Code** | **OpenAI Codex** | **GitHub Copilot CLI** | **OpenCode** | **Pi** | **Gemini CLI** | **Kimi/Qwen/DeepSeek** |
|-----------|:-------------:|:----------------:|:----------------------:|:------------:|:------:|:--------------:|:----------------------:|
| **Primary User** | Enterprise, long-session power users | Pro developers, ChatGPT ecosystem | Microsoft ecosystem, IDE-integrated devs | Open-source, self-hosted, extensibility seekers | Extension builders, orchestration engineers | Google Cloud, Gemini API users | China-market, local model preference |
| **Architecture** | Native binary (Rust/Go); API-agnostic | Electron + TUI; cloud-locked | VS Code extension bridge; MSIX-packaged | TypeScript monorepo; gateway abstraction | Node.js; extension bus; Agent Bus | Native binary; Auto Memory system | JetBrains-centric; daemon architecture |
| **Context Strategy** | 1M token marketing; compaction stressed | Workspace-scoped threads; `/cwd` mutation | Session log recovery; `events.jsonl` forensics | Project-level `.opencode/` config; 30-day TUI filter | In-memory JSONL; streaming needed | Auto Memory with patch system; redaction concerns | Shallow clone optimization; `structuredClone` OOM |
| **Extensibility Model** | Built-in skills; limited plugin surface | MCP servers; queued-turn infrastructure | Hook system (`PreToolUse`, `command_start`) | `$skill` inline invocation; plugin marketplace | Rich extension API; orchestration helpers | Subagent/skill system; underutilized | ACP protocol; spec-kit integration |
| **Platform Strength** | macOS native; Bedrock/Vertex/Foundry | macOS/Linux TUI; Windows Desktop fragile | Windows + VS Code; WSL | Cross-platform; WinGet | Linux/kitty; bundler-hostile SDK | Linux; WSL gaps | China localization; JetBrains |
| **Key Risk** | Context management breakdown; data loss | Windows Desktop systemic reliability | Hook trust erosion; permission bypass | TUI session amnesia; no sandboxing | Large session fragility; Node limits | Agent hangs; false success states | Auth fragility; strategic uncertainty |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **🔥 Rapidly Iterating (High PR/issue velocity, architectural expansion)** | **OpenCode**, **OpenAI Codex**, **Pi** | OpenCode: 50 PRs/24h, v1.15.13 with metadata APIs; Codex: 6 stacked workspace PRs, `/tokens` command; Pi: Agent Bus orchestration, extension hooks |
| **🟢 Actively Maintained (Steady releases, issue responsiveness)** | **Claude Code**, **Gemini CLI**, **Qwen Code**, **DeepSeek TUI** | Claude Code: enterprise auto-mode expansion; Gemini: nightly security fixes; Qwen: yiliang114's reliability push; DeepSeek: v0.8.47 deadlock fixes |
| **🟡 Stabilization/Consolidation (Patch mode, internal focus)** | **GitHub Copilot CLI**, **Kimi Code CLI** | Copilot: 3 patches in 24h, zero PRs—feature freeze or internal dev; Kimi: product strategy tension (#2381), ACP stack pending review |

**Community Health Signals:**
- **OpenCode** shows strongest **organic contributor growth** (50 PRs, diverse authors, i18n, skill system)
- **Claude Code** has **highest issue severity density**—44+ upvotes on parsing failures indicates production stress at scale
- **Copilot CLI** exhibits **enterprise maintenance pattern**—rapid patches, low transparency, hook ecosystem trust issues
- **Kimi** faces **strategic credibility risk**—community-splitting accusations threaten subscription retention

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Agentic reliability > raw capability** | Tool parsing failures (#62123), hallucination at boundaries (#63538), compaction corruption (#63601) across Claude Code, Gemini, Pi | Choose tools with deterministic replay and observable tool execution; "smarter" models are not more reliable |
| **Context is the new currency, but management lags** | 1M tokens marketed, compaction failing (#63015, #64037), OOM on resume (#4624, #5044), cost opacity (#64093) | Budget 30-50% overhead for context management failures; demand streaming/session chunking from vendors |
| **MCP as de facto standard, but immature** | All tools adopting; Windows spawn (#3576), token refresh (#3583), connection flakiness (#4641) | Treat MCP as "beta integration" layer; build fallback paths; expect 6-12 months protocol stabilization |
| **Poly-AI workflows emerging** | CLAUDE.md support in Kimi (#2401), ACP interoperability (Kimi↔Codex App Server), OpenRouter normalization (#5221) | Design for multi-tool context portability; avoid vendor-locked project conventions |
| **Regional market fragmentation** | DeepSeek's China infrastructure (#755), Qwen's JetBrains focus, Kimi's spec-kit parity (#2400) | Global teams need toolchains with regional fallback paths; self-hosted gateways gaining value |
| **Sandboxing as compliance gate** | OpenCode #2242 (49 👍, 10 months), Gemini's existing isolation, Codex's approval payloads (#25338) | Security-conscious orgs should evaluate sandbox maturity before agentic deployment; expect audit requirements |

---

*Report compiled from 9 community digests covering 200+ issues, 100+ PRs, and 10 releases updated 2026-05-30 to 2026-05-31.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-31 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🔵 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Addresses a universal pain point in Claude's document output. |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🔵 Open | Full ODT/ODS lifecycle: creation, template filling, parsing to HTML. Targets open-source/ISO standard document workflows, LibreOffice integration. |
| 3 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🔵 Open | Revised for clarity and actionability—ensures every instruction is executable in a single conversation. Quality-of-life improvement for existing skill. |
| 4 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🔵 Open | Meta-skills for evaluating Claude Skills across 5 dimensions (structure, security, etc.). Self-improving ecosystem tooling. |
| 5 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🔵 Open | Comprehensive testing stack coverage: Testing Trophy model, AAA pattern, React Testing Library, component testing philosophy. |
| 6 | **AURELION suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🔵 Open | 4-skill cognitive framework: kernel (structured thinking), advisor, agent, memory. Professional knowledge management system. |
| 7 | **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🔵 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM, IntegrationHub. One of the most vertically comprehensive skills proposed. |
| 8 | **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🔵 Open | 10-step workflow for identifying orphaned code, unused files, documentation gaps, infrastructure bloat. Outputs CODEBASE-STATUS.md as single source of truth. |

**Note:** All top PRs show `Comments: undefined` in raw data; ranking inferred from position in sorted list and update recency. No merged skills appear in top 20—indicates **heavy backlog** in community review.

---

## 2. Community Demand Trends

From Issues with highest engagement, four dominant skill directions emerge:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Enterprise workflow automation** | ServiceNow (#568), SAP-RPT-1-OSS (#181), SharePoint Online (#1175) | [#228](https://github.com/anthropics/skills/issues/228) — org-wide skill sharing (13 comments, 7 👍) |
| **Quality assurance & governance** | skill-quality-analyzer (#83), testing-patterns (#723), agent-governance proposal (#412) | [#556](https://github.com/anthropics/skills/issues/556) — run_eval.py 0% trigger rate (9 comments, 6 👍) |
| **Memory & persistent context** | shodh-memory (#154), AURELION memory skill (#444) | [#154](https://github.com/anthropics/skills/pull/154) — cross-conversation agent memory |
| **MCP interoperability & standards** | n8n-builder/debugger (#190), MCP exposure requests (#16), MCP data optimization (#1102) | [#16](https://github.com/anthropics/skills/issues/16) — "Expose Skills as MCPs" (4 comments) |

**Emerging:** Document generation pipeline skills (ODT, DOCX fixes, PDF fixes, typography) represent a **clustered demand** for production-grade output formatting—suggesting Claude Code is being used for client-deliverable document workflows.

---

## 3. High-Potential Pending Skills

Active PRs with sustained maintainer attention (multiple updates, recent activity):

| Skill | PR | Last Update | Merge Readiness |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | High—addresses universal bug, focused scope |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Medium—broad scope may need splitting |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | High—well-structured, fills clear gap |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-04-23 | Medium—enterprise review cycle likely |
| **AURELION suite** | [#444](https://github.com/anthropics/skills/pull/444) | 2026-05-06 | Medium—4-skill bundle may be split |
| **n8n-builder + n8n-debugger** | [#190](https://github.com/anthropics/skills/pull/190) | 2026-05-18 | High—production-tested, community-validated |

**Infrastructure blockers:** Multiple skill-creator fixes (#1099, #1050, #539) and DOCX/PDF bugfixes (#541, #538) suggest **toolchain stability** is gating faster skill acceptance.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for Claude Code to function as a production-grade document and workflow orchestration layer—generating enterprise-ready outputs (typographically correct, standards-compliant, audit-trailable) while integrating with existing business systems (ServiceNow, SAP, n8n, SharePoint) through interoperable protocols (MCP).**

---

*Report methodology: PRs ranked by comment/attention proxy (sort position in official listing); Issues ranked by comment count and 👍 reactions. All links verified against github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-05-31

---

## 1. Today's Highlights

Auto mode for Opus 4.7/4.8 expands beyond Anthropic API to **Bedrock, Vertex, and Foundry** in v2.1.158, marking a significant enterprise deployment milestone. Meanwhile, the community is actively grappling with **model-level reliability issues**—tool call parsing failures, thinking block corruption, and context compaction breakdowns—suggesting growing pains as Claude Code pushes toward longer-context, more autonomous workflows. Data loss concerns persist with multiple reports of session history deletion during updates.

---

## 2. Releases

**[v2.1.158](https://github.com/anthropics/claude-code/releases/tag/v2.1.158)** — Auto mode now available on **Bedrock, Vertex, and Foundry** for Opus 4.7 and Opus 4.8. Opt-in via `CLAUDE_CODE_ENABLE_AUTO_MODE=1`. This removes a key friction point for enterprise users on third-party API providers.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#62123](https://github.com/anthropics/claude-code/issues/62123) | **Opus 4.7 tool call parsing failures** — model's tool calls fail to parse, retry also fails, hard-blocking sessions | Critical reliability regression affecting core agentic functionality; 44 upvotes indicate widespread impact | 🔥 44 👍, 27 comments; cross-platform (macOS/VS Code) |
| [#50270](https://github.com/anthropics/claude-code/issues/50270) | **Termux/Android broken since v2.1.113** — native glibc binary replaces JS entry point, no fallback | Complete platform exclusion for mobile/ARM Linux users; 46 upvotes show significant underserved segment | 🔥 46 👍, 27 comments; regression tag |
| [#64093](https://github.com/anthropics/claude-code/issues/64093) | **Token usage massively outstripping actual context** — 5h session shows disproportionate billing | Trust/cost issue: users fear being overcharged for context they aren't effectively using | 2 👍, 5 comments; fresh report (May 31) |
| [#63538](https://github.com/anthropics/claude-code/issues/63538) | **Model fabricates tool output when parallel batch partially cancelled** | Hallucination at the tool boundary—model invents data rather than acknowledge cancellation; safety concern for automated workflows | 8 👍, 8 comments; well-diagnosed with reproduction |
| [#63015](https://github.com/anthropics/claude-code/issues/63015) | **Auto-compact never triggers despite 100% context usage** — v2.1.153, Max sub, 200K mode | Core memory management failing; users paying for context they can't use, sessions eventually crash | 3 👍, 8 comments; has repro |
| [#64037](https://github.com/anthropics/claude-code/issues/64037) | **Context hits 1M limit with no auto-compaction or recovery** — WSL | Dead-end user experience: no graceful degradation, misleading error about credits vs. actual compaction failure | 2 👍, 2 comments; fresh |
| [#64065](https://github.com/anthropics/claude-code/issues/64065) | **Opus 4.8 asserts tool output values before tool calls return** — model self-diagnoses but persists | Temporal reasoning failure in agentic loop; model "knows" it's wrong but continues, suggesting deep architectural issue | 1 👍, 2 comments; `/effort xhigh` |
| [#64080](https://github.com/anthropics/claude-code/issues/64080) | **Harness silently executes duplicated parallel tool_use blocks** — 6→24 subagent fan-out | Exponential cost/compute waste; silent execution means users don't know they're burning tokens | 0 👍, 2 comments; serious cost impact |
| [#61869](https://github.com/anthropics/claude-code/issues/61869) | **"Usage credits required for 1M context" with opus-plan** — closed as duplicate | Confusing billing model UX; multiple duplicates show documentation/communication gap | 11 👍, 32 comments; closed |
| [#63601](https://github.com/anthropics/claude-code/issues/63601) | **Compaction loses Write/Edit tool history → model misattributes work to user** | Epistemic corruption: model forgets its own actions, breaks trust in long sessions | 0 👍, 3 comments; 3-day session, 441+ tools |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | Remove "retro-futuristic" recommendation from Frontend Design Skill | 🟢 Open | Community quality fix from t3dotgg; removes dated aesthetic guidance from built-in skill |
| [#63467](https://github.com/anthropics/claude-code/pull/63467) | Add Windows `gh` CLI install instruction in commit-commands README | 🟢 Open | Cross-platform docs equity: adds `winget install --id GitHub.cli` alongside existing brew guidance |
| [#63872](https://github.com/anthropics/claude-code/pull/63872) | Fix README capitalization and wording | 🟢 Open | Polish: standardizes `GitHub`, `macOS` capitalization; improves readability |
| [#45156](https://github.com/anthropics/claude-code/pull/45156) | Fix accidental strikethrough in Korean Tool Search docs | 🔴 Closed | i18n quality: removes `~~` markdown artifacts in Korean translation |
| [#45150](https://github.com/anthropics/claude-code/pull/45150) | Expand `CLAUDE_CODE_ACCESSIBILITY` docs with screen reader guidance | 🔴 Closed | a11y documentation: clarifies cursor synchronization behavior for assistive tech |
| [#45151](https://github.com/anthropics/claude-code/pull/45151) | Add `FORCE_HYPERLINK` environment variable documentation | 🔴 Closed | Terminal compatibility: documents escape hatch for tmux/screen/custom emulators |
| [#1](https://github.com/anthropics/claude-code/pull/1) | Create SECURITY.md | 🔴 Closed | Baseline security policy (historical, updated May 30) |

*Note: Only 7 PRs updated in last 24h; 3 remain open.*

---

## 5. Feature Request Trends

**Emerging patterns from issue analysis:**

| Trend | Evidence | Implied Direction |
|-------|----------|-----------------|
| **Cross-platform native binary strategy** | #50270 (Android/Termux), #61313 (FreeBSD), #64037 (WSL) | Demand for broader platform support or documented JS fallback path |
| **Context/memory reliability** | #63015, #64037, #63601, #23620 | Smarter, more transparent compaction; session persistence guarantees |
| **Cost transparency & control** | #64093, #64084, #64009, #61869 | Per-session budgets, token usage forensics, clearer billing boundaries |
| **Tool execution safety** | #63538, #64065, #64080, #54477 | Pre-execution validation, deterministic replay, hallucination detection |
| **Update safety** | #48334, #62272 | Non-destructive updates, history backup/restore, atomic migrations |

---

## 6. Developer Pain Points

**🔴 Critical: Context Management Breakdown**
- Auto-compaction failing silently (#63015, #64037) means users hit hard limits with no recovery
- Long-session users (3+ days, 400+ tools) experiencing **epistemic corruption**—model forgets its own work (#63601, #23620)
- 1M context tier marketed but poorly integrated with compaction logic

**🟡 High: Model Reliability at Tool Boundary**
- Opus 4.7/4.8 showing **systematic tool call parsing failures** (#62123, #63364, #64041)
- Parallel tool execution has **multiple failure modes**: duplication (#64080), fabrication (#63538), temporal hallucination (#64065)
- Suggests stress on tool-use architecture as parallelization increases

**🟡 High: Platform/Deployment Fragmentation**
- Native binary strategy excludes Android/Termux (#50270), FreeBSD (#61313), some WSL configurations
- Enterprise users on Bedrock/Vertex/Foundry now have auto mode, but **billing/credit confusion persists** across all platforms (#61869, #60707, #63688)

**🟢 Moderate: Data Durability Trust**
- Repeated reports of session history loss during updates (#48334, #62272)
- Community building **third-party recovery tools** (garrettmoss/restore-claude-history) signals unmet need

---

*Digest compiled from 50 issues, 7 PRs, and 1 release updated 2026-05-30 to 2026-05-31.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-31

---

## 1. Today's Highlights

The Codex team shipped a major TUI workspace control suite with six stacked PRs introducing `/cwd`, `/status`, and persistent workspace mutation tools, alongside token activity visibility via `/tokens`. Windows Desktop remains the dominant pain point with multiple new regressions around path handling, stale caches, and Electron sandboxing. The queued-turn infrastructure for app-server continues maturing with TUI integration and thread-setting synchronization.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| **#12564** | [Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564) | **CLOSED** — Most-upvoted enhancement (110 👍) finally resolved; history navigation in long-running projects was a top UX gap. | Strongly positive; 77 comments show sustained community pressure |
| **#23078** | [Mobile remote re-pairing broken after Mac removal](https://github.com/openai/codex/issues/23078) | Core cross-device workflow broken; users accidentally unpairing lose access entirely with no recovery path. | 18 comments, frustrated Pro users |
| **#20351** | [+251 phone number formatting bug blocks Ethiopian users](https://github.com/openai/codex/issues/20351) | Auth barrier for entire country; extra zero breaks SMS delivery, zero workarounds. | 15 comments, zero upvotes suggests underreported severity |
| **#25236** | [Windows UI renders transparent/blank](https://github.com/openai/codex/issues/25236) | Complete app failure on Windows; fresh regression in latest build (26.527.31326). | 11 comments, rapid reports |
| **#25084** | [Desktop hides active project chat history](https://github.com/openai/codex/issues/25084) | Data loss scare — chats persist on disk but disappear from UI, breaking trust in session continuity. | 9 comments, concerning pattern |
| **#12450** | [Tree-based conversation management](https://github.com/openai/codex/issues/12450) | Long-standing feature request for branching/rollback in agent conversations; critical for iterative development workflows. | 9 comments, 6 👍, ongoing advocacy |
| **#25144** | [Disable auto-conversion of long prompts to .txt](https://github.com/openai/codex/issues/25144) | Disrupts structured prompt engineering; automatic attachment behavior breaks context formatting. | 12 👍, strong signal |
| **#25285** | [Windows stale plugin cache paths break skills](https://github.com/openai/codex/issues/25285) | Deep Windows-specific architectural flaw: volatile hash paths persisted into sessions cause skill degradation post-update. | 7 comments, technical severity |
| **#25203** | [GitHub OAuth fails with "Unable to find Electron app"](https://github.com/openai/codex/issues/25203) | Blocks GitHub integration entirely on Windows; Electron path resolution bug. | 7 comments, 4 👍 |
| **#25317** | [WSL shell poisoning regression post-reboot](https://github.com/openai/codex/issues/25317) | Worsens known Windows+WSL failures; live app-server holds deleted helper paths, breaking shell execution. | 4 comments, regression label |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| **#25345** | [feat(tui): add token activity command](https://github.com/openai/codex/pull/25345) | `/tokens` command with inline bounded card rendering | Account visibility without leaving terminal workflow; replaces disruptive full-screen refresh |
| **#25344** | [feat(app-server): expose account token usage](https://github.com/openai/codex/pull/25344) | Backend client + v2 protocol for ChatGPT token-usage payload | Enables #25345; decouples Codex from direct ChatGPT backend dependencies |
| **#25335** | [feat(tui): add workspace directory commands](https://github.com/openai/codex/pull/25335) | `/cwd [path]`, `/status` with runtime state; 6-of-6 capstone | Completes workspace control suite for multi-directory agent workflows |
| **#25338** | [feat(app-server): project workspace mutation approvals](https://github.com/openai/codex/pull/25338) | Dedicated approval payloads for filesystem mutations | Security-critical: distinguishes `cd`/`mkdir` from generic command execution for informed consent |
| **#25334** | [feat(core): add model workspace mutation tools](https://github.com/openai/codex/pull/25334) | `set_working_directory(path)` with persisted cwd boundary | Enables worktree/stacked-PR workflows; shell `cd` was insufficient for thread state |
| **#25351** | [Lock multi-agent runtime version per thread](https://github.com/openai/codex/pull/25351) | Runtime version pinned at thread creation, not feature-flag lookup | Prevents resume/fork from observing incompatible multi-agent behavior; correctness fix |
| **#25258** | [Queue TUI follow-ups through app-server](https://github.com/openai/codex/pull/25258) | Durable turn queuing with `thread/queue/add`; TUI PoC | Major UX upgrade: no more "wait for turn to finish" blocking; behind `app_server_queue` flag |
| **#24987** | [feat(mcp): load pending tools through lazy search](https://github.com/openai/codex/pull/24987) | Deferred MCP initialization via `tool_search` on demand | Fixes cold-start latency for optional MCP servers; removes from critical path |
| **#24805** | [Add CODEX_ENV_FILE for SessionStart hooks](https://github.com/openai/codex/pull/24805) | `.env` file injection for hook shell state persistence | Enables `PATH`, conda, venv setup without config pollution; dev environment hygiene |
| **#23547** | [Project-local config.override.toml layers](https://github.com/openai/codex/pull/23547) | `.codex/config.override.toml` with higher precedence than checked-in config | Git-clean local customization; solves "disable MCP server for just me" workflow |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Conversation branching / rollback** | #12450 (chat trees), #12564 (renaming, now closed) | Sustained; branching is the next frontier after linear history improvements |
| **Workspace/session scoping** | #25319 (VS Code workspace-scoped chats), #25335 suite | Strong push for project-bound rather than global thread contexts |
| **TUI-native account/usage visibility** | #25345, #25344, #24812 (enterprise limits) | New category; Codex CLI becoming self-contained dashboard |
| **Disable "helpful" automation** | #25144 (no auto .txt), implicit in #25338 (explicit approvals) | User control over model-mediated transformations |
| **Cross-platform session parity** | Mobile ↔ Desktop sync gaps in #23078, #25332 | Ongoing; remote pairing and title sync still flaky |

---

## 6. Developer Pain Points

### Windows Desktop: Systemic Reliability Crisis
The density of Windows-specific regressions is acute: **8 of top 30 issues** are Windows Desktop, spanning path quoting (#25238, #21667), stale caches (#25285, #24390), Electron sandbox (#25322, #25349), OAuth callback routing (#25203, #25297), and UI rendering (#25236, #25256). Root causes cluster around:
- **Path normalization**: `\\?\` prefix mismatches (#24944), spaces in `Program Files` (#25238), unquoted shell arguments
- **Volatile cache directories**: Plugin and binary hashes change across updates; absolute paths persisted into sessions
- **Electron/MSIX packaging**: Store version protocol handlers (`codex://new`), sandbox helper lookup, toast notification argument parsing

### Session Continuity Fragility
Multiple issues describe "data present but invisible" — #25084 (hidden history), #25332 (untitled "New chat"), #25285 (broken skills). The local storage ↔ UI sync layer appears unreliable, particularly after updates.

### TUI Input Handling (Linux)
Wayland/kitty/Sway backspace double-fire (#16716, #18564, #12564 comments) remains unresolved for terminal users; platform-specific key event semantics not fully abstracted.

### Rate Limiting Transparency
#18018 (closed) and #24812 (in progress) highlight confusion around weekly vs. credit limits; users cannot predict spend behavior or observe remaining quota in real time.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-31

## Today's Highlights

The v0.45.0 nightly landed with a critical fix for invalid `preferredEditor` configurations that could trigger spam loops, alongside routine changelog updates. Meanwhile, the community PR queue saw heavy activity with three security and stability fixes targeting command injection, regex backtracking crashes, and oversized bug report URLs. The agent subsystem remains the dominant source of open issues, with generalist agent hangs and subagent recovery failures continuing to attract maintainer attention.

---

## Releases

**[v0.45.0-nightly.20260530.g013914071](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260530.g013914071)** — Nightly build published 2026-05-30

| Change | Author | PR |
|--------|--------|-----|
| Fix: Prevent spam loop when `preferredEditor` is invalid | @Niralisj | [#25324](https://github.com/google-gemini/gemini-cli/pull/25324) |
| Changelog for v0.44.0 | @gemini-cli-robot | [#27569](https://github.com/google-gemini/gemini-cli/pull/27569) |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | EPIC tracking expansion of behavioral eval test suite (76 tests, 6 Gemini versions). Quality infrastructure for agent reliability. | 7 comments, P1 priority, maintainer-only |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, mapping** | Could reduce token waste and turn count via precise method-bound reads. Major efficiency opportunity for codebase investigation. | 7 comments, 👍 1, linked to implementation issues |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** | Severe UX blocker — simple operations like folder creation hang indefinitely. Workaround (disable subagents) degrades capability. | 7 comments, 👍 8, P1, need-retesting |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Silent failure mode hides interruption; `codebase_investigator` claims success when it hit limits without analysis. | 6 comments, 👍 2, P1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills and sub-agents enough** | Core agent orchestration gap — custom skills (gradle, git) ignored even for relevant tasks. Anecdotal but widely felt. | 6 comments, P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck "Waiting input" after completion** | Simple commands falsely appear to await input; breaks workflow automation trust. | 4 comments, 👍 3, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux display protocol incompatibility limits headless/browser automation for growing Wayland userbase. | 4 comments, 👍 1, P1 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction + reduce Auto Memory logging** | Security concern: secrets enter model context before redaction; service logging of skills data persists. | 3 comments, P2 |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Surface/quarantine invalid Auto Memory inbox patches** | Silent skip of malformed patches; aggregate dismiss only handles valid ones. Data integrity risk for memory system. | 3 comments, P2 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done output hook causes crash** | Crash near completion of user summary — reproducible, near-shipping feature instability. | 3 comments, P1, need-information |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#27580](https://github.com/google-gemini/gemini-cli/pull/27580) | **fix(at-command): prevent regex backtracking stack overflow** | Replaces `@` command parser regex with iterative scanner; fixes catastrophic failure on large pasted inputs. Critical for robust input handling. | Open, P1 |
| [#27575](https://github.com/google-gemini/gemini-cli/pull/27575) | **fix(security): prevent command injection in findCommand** | Replaces `execSync` with `spawnSync` in IDE installer and editor utils; closes shell metacharacter injection vector. | Open, P2 |
| [#27591](https://github.com/google-gemini/gemini-cli/pull/27591) | **fix(cli): fall back for oversized bug report URLs** | `/bug` command crashes on Android/Termux when URL exceeds intent limit; adds truncation + fallback flow. | Open, P2 |
| [#27568](https://github.com/google-gemini/gemini-cli/pull/27568) | **fix(core): fall back when ripgrep execution fails** | Graceful degradation to legacy `GrepTool` when `rg` missing or exits 64; preserves ripgrep-only option failures. | Open, P1 |
| [#27588](https://github.com/google-gemini/gemini-cli/pull/27588) | **fix(cli): support WSL2 clipboard image paste** | Detects WSL, uses PowerShell interop for Windows clipboard PNG read; shares helper with native Windows path. | Open, P2, help wanted |
| [#27554](https://github.com/google-gemini/gemini-cli/pull/27554) | **fix(cli): make vim `cc` clear non-last and astral-character lines** | `vim_cc` silently no-op'd on multi-line non-last lines and emoji-containing lines; fixes cursor/buffer edge cases. | Open, P2 |
| [#27555](https://github.com/google-gemini/gemini-cli/pull/27555) | **fix(cli): stop merging shell history commands ending in backslash** | Windows paths (`dir C:\`) corrupted by backslash-continuation logic; preserves command integrity across sessions. | Open, P2 |
| [#27329](https://github.com/google-gemini/gemini-cli/pull/27329) | **fix(core): skip missing includeDirectories instead of crashing** | One invalid `settings.json` directory path aborted entire CLI startup; now logs warning and continues. | Open, P1 |
| [#27412](https://github.com/google-gemini/gemini-cli/pull/27412) | **fix(core): prevent model fabrication on binary read_file** | Stops synthetic "thought" injection + bare string response for PDFs/binaries; reduces hallucination risk. | Open, P2 |
| [#27549](https://github.com/google-gemini/gemini-cli/pull/27549) | **fix(a2a-server): delimit SSE events with blank line** | One-line framing fix for `/executeCommand` streaming; enables spec-compliant `EventSource` parsing. | Open, P2 |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling integration** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) | Strong — three linked issues, explicit tool recommendations (tilth, glyph, ast-grep), efficiency focus |
| **Backgroundable local subagents** | [#22741](https://github.com/google-gemini/gemini-cli/issues/22741) | Moderate — 👍 2, Ctrl+B UX proposed for non-blocking exploration/build tasks |
| **Agent self-awareness / accurate introspection** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) | Moderate — CLI flags, hotkeys, self-execution guidance |
| **Server-driven model management** | [#20878](https://github.com/google-gemini/gemini-cli/issues/20878) | Moderate — large effort, centralized routing via `LoadCodeAssist` |
| **Remote agents: advanced auth & background ops** | [#20303](https://github.com/google-gemini/gemini-cli/issues/20303) | Steady — Sprint 2 EPIC, task-level auth, 1P agent support |

---

## Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|----------------|
| **Agent hangs & false success states** | Very High | Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), MAX_TURNS misreported as GOAL ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), shell "Waiting input" phantom states ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) |
| **Subagent/skill underutilization** | High | Skills ignored without explicit instruction ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), subagents running without permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) |
| **Auto Memory reliability & security** | High | Invalid patches silently skipped ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), indefinite retry on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), secrets in context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) |
| **Terminal/rendering corruption** | Moderate | External editor exit corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), resize flicker ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), vim `cc` edge cases ([#27554](https://github.com/google-gemini/gemini-cli/pull/27554)) |
| **Platform-specific breakages** | Moderate | Wayland browser failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), WSL clipboard gaps ([#27588](https://github.com/google-gemini/gemini-cli/pull/27588)), Android URL limits ([#27591](https://github.com/google-gemini/gemini-cli/pull/27591)) |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-31

---

## 1. Today's Highlights

Three rapid-fire patch releases (v1.0.57-1 through v1.0.57-3) landed in 24 hours, addressing session crash recovery, accessibility contrast, and a new startup tips setting. Meanwhile, issue velocity remains high with 30 updated items—keyboard input regressions on international layouts and MCP ecosystem friction dominate community concern.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.57-3** | High-contrast diff backgrounds darkened for readability; session resume fixed after crashes leaving partial session log data |
| **v1.0.57-2** | General fixes and changes (no detailed notes) |
| **v1.0.57-1** | New `showTipsOnStartup` setting to control startup tip display |

The session resilience fix directly addresses long-standing crash recovery pain points (see #2217, #3593). The tips setting responds to power-user demand for cleaner startup experiences.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#1999** | [German keyboard `@` key broken (Alt-Gr+q)](https://github.com/github/copilot-cli/issues/1999) | Critical usability blocker for DE keyboard users; `@` essential for mentions/MCP refs | 7 comments, 3+ months open, user calls CLI "unusable" |
| **#2203** | [Restore mid-task autopilot mode switching (Shift+Tab)](https://github.com/github/copilot-cli/issues/2203) | Workflow regression from v0.0.421 removed trusted interaction pattern | **9 upvotes** — highest community demand in dataset |
| **#3593** | [Windows crash corrupts `events.jsonl`](https://github.com/github/copilot-cli/issues/3593) | Data loss on unexpected shutdown; undermines session reliability | Fresh (today), no traction yet |
| **#3583** | [MCP token refresh uses deprecated v1 `resource=` param](https://github.com/github/copilot-cli/issues/3583) | Enterprise Azure OAuth breaks after ~60 min idle; AADSTS90009 error | Deep technical repro, Entra-specific |
| **#3576** | [Windows stdio MCP servers fail to spawn (`npx ENOENT`)](https://github.com/github/copilot-cli/issues/3576) | Regression from 1.0.51→1.0.56-1; breaks Node-based MCP ecosystem on Windows | Microsoft employee reporter, detailed shell analysis |
| **#3582** | [`"disabled": true` ignored in MCP config](https://github.com/github/copilot-cli/issues/3582) | Configuration contract violated; security/ops concern for server governance | Reproducible on latest prerelease |
| **#3590** | [`PreToolUse` hook "ask" permission auto-approved by TUI](https://github.com/github/copilot-cli/issues/3590) | **Security-critical**: Permission dialogs flash and bypass user consent | Zero-day feel; hook system trust compromised |
| **#3589** | [Multiple hook `additionalContext` outputs collapsed to last](https://github.com/github/copilot-cli/issues/3589) | Plugin composition broken; breaks modular hook architectures | Synthetic repro provided, plugin ecosystem impact |
| **#3591** | [Accessibility regression: user prompt distinction removed](https://github.com/github/copilot-cli/issues/3591) | #3390 fix sacrificed cognitive accessibility for cosmetics; needs opt-in | Framed as ADA-adjacent concern, zero engagement |
| **#3547** | [Background sub-agent hangs at `total_turns=0` with `gpt-5.5`](https://github.com/github/copilot-cli/issues/3547) | New model integration failure; agent orchestration reliability | Model-specific, background mode affected |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.** All activity is issue-driven, suggesting either:
- Feature freeze/ stabilization period for v1.0.57
- Internal development happening outside public PRs
- Team bandwidth consumed by rapid patch releases

---

## 5. Feature Request Trends

| Trend | Evidence | Maturity |
|-------|----------|----------|
| **Session observability & resilience** | #3581 (local logs), #2217/#3593 (crash recovery), #3575 (hook firing on resume) | Production-critical; partially addressed in v1.0.57-3 |
| **Granular hook/plugin scoping** | #3579 (monorepo sub-directory hooks), #3577 (mid-turn MCP tool rebuild) | Ecosystem expansion phase |
| **Persistent user preferences** | #3571 (default custom agents), #3581 (session logs), #2203 (mode switching restore) | Personalization gap vs. Claude Code/Codex |
| **Enterprise MCP hardening** | #3583 (token refresh), #3576 (Windows spawn), #3582 (disabled flag), #3572 (org agents without GH repo) | Azure/Entra integration debt |
| **Keyboard input internationalization** | #1999 (DE layout), #3587 (Tmux/Ghostty bindings), #3580 (cmd+click), #3592 (VS Code window copy) | Regression cluster; quality concern |

---

## 6. Developer Pain Points

**Input System Fragility**
International keyboard layouts and terminal emulator combinations (Tmux+Ghostty, VS Code terminal windows) are experiencing a **regression cluster**. Four distinct input issues updated in 24h suggest insufficient test matrix coverage for non-US/QWERTY environments and terminal multiplexers.

**MCP Ecosystem Growing Pains**
The MCP subsystem shows **configuration-drift and platform-dependency issues**: token refresh protocol versioning, Windows process spawning semantics, and boolean flag parsing. These are "paper cuts" that compound as MCP adoption scales.

**Session Reliability vs. Observability Trade-off**
The team fixed crash recovery (v1.0.57-3, #2217) but lacks structured session logs (#3581) — forcing users to rely on `events.jsonl` forensics. Competitors (Claude Code, Codex CLI) offer machine-readable logs as first-class features.

**Hook System Trust Erosion**
Two issues (#3590 permission bypass, #3589 context clobbering) indicate the plugin hook architecture has **correctness gaps** that undermine extension developer confidence. The permission auto-approval bug is particularly severe from a security posture perspective.

**Agent Orchestration Opacity**
Background sub-agents (#3547) and main/sub-agent notification (#2923) failures suggest the distributed agent model lacks debugging surface area. Users cannot introspect why agents hang at `total_turns=0`.

---

*Digest compiled from github.com/github/copilot-cli public activity. For corrections or additions, open a discussion in the community forum.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-31

## Today's Highlights

Community tension around product strategy is escalating as users question MoonshotAI's decision to launch Kimi Code CLI alongside the existing kimi-cli, with one highly-visible issue calling it a community-splitting move. On the technical front, ACP (Agent Communication Protocol) support is receiving significant community investment with three stacked PRs from contributor huntharo aimed at interoperability with external agent platforms like PwrAgent and Codex App Server. Meanwhile, closed issues reveal maintainer activity on long-standing UX requests including configurable prompt symbols and hook-based auto-approval workflows.

---

## Releases

*No releases in the past 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2381](https://github.com/MoonshotAI/kimi-cli/issues/2381) | **Why abandon kimi-cli and redo kimi code?** — Accuses MoonshotAI of splitting the community and breaking trust with a non-backward-compatible rewrite rather than iterative improvement | Strikes at core product strategy; threatens subscription churn; 4 comments indicate active debate | 🔥 High emotion; trust erosion risk |
| [#2402](https://github.com/MoonshotAI/kimi-cli/issues/2402) | **[bug] `compaction.failed` APIStatusError: 400 "high risk"** — Session compaction fails with API rejection on Kimi-k2.6/Windows | Blocks production use; data loss risk when compaction fails mid-session | 🐞 Critical workflow blocker |
| [#2401](https://github.com/MoonshotAI/kimi-cli/issues/2401) | **Support loading CLAUDE.md alongside AGENTS.md** — Cross-compatibility with Claude Code's established project context convention | Reduces friction for multi-AI workflows; acknowledges Claude Code market presence | ➕ Practical interoperability ask |
| [#2400](https://github.com/MoonshotAI/kimi-cli/issues/2400) | **Integrate "superpowers" (spec-kit extension)** — Requests spec-kit companion feature "superpowers" following opencode's implementation | Shows ecosystem convergence pressure; users want Kimi to match competitors' extensibility | ➕ Feature parity request |
| [#2155](https://github.com/MoonshotAI/kimi-cli/issues/2155) | **Configurable prompt symbols in config.toml** — Hardcoded emoji (✨💫📋) break terminal search/recall UX | Closed same day; maintainer responsiveness signals UX polish priority | ✅ Resolved |
| [#2154](https://github.com/MoonshotAI/kimi-cli/issues/2154) | **PermissionRequest hook event for auto-approval** — Hooks can block but cannot auto-approve; forces manual confirmation on safe operations | Closed; enables CI/automation workflows; enterprise-relevant | ✅ Resolved |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364) | **feat(acp): support permission mode switching** | Adds protocol-level ACP permission mode negotiation (`default`, `explicit`, `none`) for Kimi sessions; stacks on #2363 | 🟡 Open — review pending |
| [#2363](https://github.com/MoonshotAI/kimi-cli/pull/2363) | **fix(acp): replay loaded session history** | Makes ACP `session/load` replay restored history; builds on #2359's SDK upgrade | 🟡 Open — stacked dependency |
| [#2359](https://github.com/MoonshotAI/kimi-cli/pull/2359) | **fix(acp): assign message ids to streamed content** | Critical for external ACP consumers (PwrAgent, Codex App Server); enables message correlation in streaming | 🟡 Open — foundation for stack |
| [#2388](https://github.com/MoonshotAI/kimi-cli/pull/2388) | **fix(shell): persist pasted text placeholders** | Resolves #1946: recalled prompts lose `[Pasted text #1]` references due to in-memory handler lifecycle | 🟡 Open — data integrity fix |
| [#776](https://github.com/MoonshotAI/kimi-cli/pull/776) | **fix(shell): enhance shell completion navigation and tab handling** | Improves fish/bash/zsh completion UX with better tab-cycle behavior | ✅ Closed — merged |
| [#777](https://github.com/MoonshotAI/kimi-cli/pull/777) | **feat(ui): append space automatically after file completion** | Minor but high-frequency UX polish for shell interaction | ✅ Closed — merged |

**ACP Stack Analysis:** huntharo's three PRs (#2359 → #2363 → #2364) represent a coordinated push to make Kimi a first-class ACP citizen. The dependency chain suggests careful review sequencing is needed; all three updated within 24h indicates active maintainer attention.

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Cross-tool compatibility** | #2401 (CLAUDE.md), #2400 (superpowers/opencode), ACP work | Users operate in poly-AI environments; Kimi is expected to play nice with Claude Code, Codex, and open-source agent standards |
| **Programmatic/headless operation** | #2154 (auto-approval hooks), ACP session loading | Enterprise and automation use cases demand less interactive, more scriptable control surfaces |
| **Extensibility ecosystem** | #2400 (superpowers), existing spec-kit integration | Feature marketplace or plugin architecture may be competitive necessity |

---

## Developer Pain Points

| Pain Point | Frequency | Source Items | Severity |
|------------|-----------|--------------|----------|
| **Product trust / strategic uncertainty** | Emerging | #2381 | 🔴 High — subscription-threatening sentiment |
| **Session reliability / data loss** | Sporadic but critical | #2402 (compaction failure), #2388 (placeholder persistence) | 🔴 High — production blocker |
| **Manual approval fatigue** | Addressed | #2154 | 🟡 Medium — resolved via hooks |
| **Terminal UX friction** | Recurring, now declining | #2155, #776, #777 | 🟢 Low — actively being polished |
| **Interoperability gaps** | Growing | #2401, #2400, ACP PRs | 🟡 Medium — competitive pressure |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-05-30 to 2026-05-31.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-31

---

## 1. Today's Highlights

OpenCode shipped **v1.15.13** with critical fixes for Anthropic Opus 4.7+ adaptive reasoning and new session metadata APIs, while the community continues to grapple with **TUI session visibility limitations**—multiple high-engagement issues confirm the `/sessions` picker only surfaces recent conversations, causing data loss anxiety despite full CLI availability. Meanwhile, **sandboxing and security** resurfaced as a major theme with renewed calls for seatbelt-like isolation on macOS.

---

## 2. Releases

### [v1.15.13](https://github.com/anomalyco/opencode/releases/tag/v1.15.13)

| Change | Impact |
|--------|--------|
| **Gateway Anthropic Opus 4.7+ fix** | Adaptive reasoning now preserves summarized thinking blocks instead of returning empty responses—restores visibility into model reasoning for high-effort prompts |
| **Session custom metadata API/SDK** | Enables programmatic tagging and tracking of sessions for integrations and analytics ([`@shantur`](https://github.com/shantur)) |
| **Config loading from opened location upward** | Project-level `.opencode/` configs now properly override global `~/.opencode` when working in subdirectories |

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT Models takes too long to respond | 🔴 OPEN | **113 comments, 48 👍** — Performance regression affecting GPT 5.4 (xhigh) with simple prompts; inconsistent latency undermines reliability for production use | High frustration; users report minutes-long waits for trivial graph updates |
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | Is there a way to sandbox the agent? | 🔴 OPEN | **39 comments, 49 👍** — Security-critical request for macOS seatbelt-equivalent isolation; competitors (Gemini CLI, Codex CLI) already ship this | Strong demand from security-conscious developers; no native solution after 10 months |
| [#8554](https://github.com/anomalyco/opencode/issues/8554) | Enable programmatic sub-LLM calls for RLM pattern | 🟢 CLOSED | **20 comments, 16 👍** — Recursive Language Model pattern enables autonomous code generation with nested LLM invocations; merged as foundational architecture | Positive reception from AI research community |
| [#20802](https://github.com/anomalyco/opencode/issues/20802) | Custom OpenAI-compatible providers: image attachments not reaching vision models | 🔴 OPEN | **14 comments, 6 👍** — Breaks multimodal workflows for custom providers (e.g., `longent` with `gpt-5.4(xhigh)`); same provider works fine outside OpenCode | Blocks enterprise custom provider adoption |
| [#8625](https://github.com/anomalyco/opencode/issues/8625) | Add MCP search tool to reduce context consumption | 🔴 OPEN | **9 comments, 61 👍** — Highest 👍/comment ratio; MCP tool descriptions exceeding 10% of context window cause automatic deferral, degrading agent capability | Clear UX pain point with proposed solution |
| [#13877](https://github.com/anomalyco/opencode/issues/13877) / [#16270](https://github.com/anomalyco/opencode/issues/16270) / [#16733](https://github.com/anomalyco/opencode/issues/16733) | TUI `/sessions` only shows recent sessions | 🔴 OPEN | **Triplicate issues, 20 comments combined** — Hardcoded 30-day filter in `sync.tsx` hides 584+ historical sessions; CLI `session list` works correctly | Widespread confusion and data-loss anxiety; root cause identified, fix pending |
| [#26772](https://github.com/anomalyco/opencode/issues/26772) | Integrated browser for desktop | 🔴 OPEN | **8 comments, 1 👍** — Requests built-in browser workspace for inspection/interaction without leaving OpenCode | Niche but growing workflow integration ask |
| [#30002](https://github.com/anomalyco/opencode/issues/30002) | opencode-go upstream idle timeout on reasoning-heavy models | 🟢 CLOSED | **4 comments** — `mimo-v2.5-pro` with Build mode + Effort=Max fails consistently; indicates infrastructure scaling limits for long-reasoning models | Quickly resolved, suggests provider-side timeout configuration |
| [#13393](https://github.com/anomalyco/opencode/issues/13393) | Add "hashline" experimental edit mode | 🔴 OPEN | **3 comments, 28 👍** — New edit mode from `oh-my-pi` fork promising faster, more reliable code edits; community eager for A/B testing | High interest, low friction to experiment |

---

## 4. Key PR Progress

| # | PR | Author | Status | What It Does |
|---|-----|--------|--------|--------------|
| [#29068](https://github.com/anomalyco/opencode/pull/29068) | refactor(core): move database schema ownership | [`@thdxr`](https://github.com/thdxr) | 🔴 OPEN | **Architectural refactor**: Migrates Drizzle schema and migrations to `packages/core`; establishes core-owned TypeScript migrations to reduce package coupling |
| [#30034](https://github.com/anomalyco/opencode/pull/30034) | fix(app): support API auth prompts in provider connect dialog | [`@PerceivingAI`](https://github.com/PerceivingAI) | 🔴 OPEN | Fixes Cloudflare Workers AI and similar providers that require additional auth fields beyond API key—unblocks provider onboarding |
| [#30031](https://github.com/anomalyco/opencode/pull/30031) | fix(core): Plugins dialog selection highlight jumps | [`@ahasasjeb`](https://github.com/ahasasjeb) | 🔴 OPEN | Eliminates erratic mouse-driven selection in plugin picker by removing redundant state management |
| [#29217](https://github.com/anomalyco/opencode/pull/29217) | feat(tui): Inline `$skill` invocations with SKILL pill + pasteText | [`@jjdubski`](https://github.com/jjdubski) | 🔴 OPEN | **Major UX enhancement**: Type `$` for skill autocomplete, select with `Tab`, renders as pill; closes 5 related issues including [#15617](https://github.com/anomalyco/opencode/issues/15617), [#10525](https://github.com/anomalyco/opencode/issues/10525) |
| [#29934](https://github.com/anomalyco/opencode/pull/29934) | fix(web): use release version for embedded UI | [`@bernhardberger`](https://github.com/bernhardberger) | 🔴 OPEN | Embedded builds now read version from release metadata instead of `packages/app/package.json`; fixes version drift bugs [#29301](https://github.com/anomalyco/opencode/issues/29301), [#24286](https://github.com/anomalyco/opencode/issues/24286) |
| [#30025](https://github.com/anomalyco/opencode/pull/30025) | fix: support winget opencode upgrades | [`@pascalandr`](https://github.com/pascalandr) | 🔴 OPEN | Adds Windows Package Manager detection for seamless upgrades; detects WinGet shim paths to prevent "already installed" false negatives |
| [#25121](https://github.com/anomalyco/opencode/pull/25121) | fix(opencode): project config overrides global | [`@bainos`](https://github.com/bainos) | 🟢 CLOSED | **Critical fix**: Reverses config merge order so `.opencode/` project configs take precedence over `~/.opencode`; resolves [#19296](https://github.com/anomalyco/opencode/issues/19296), [#21307](https://github.com/anomalyco/opencode/issues/21307) |
| [#25118](https://github.com/anomalyco/opencode/pull/25118) | fix(opencode): make sidebar cost display monotonic | [`@adavila0703`](https://github.com/adavila0703) | 🟢 CLOSED | Adds `total_cost` column to prevent cost drops after message compaction/revert; fixes [#25023](https://github.com/anomalyco/opencode/issues/25023) |
| [#25112](https://github.com/anomalyco/opencode/pull/25112) | feat(cli): add TUI custom provider setup | [`@yanzhanglee`](https://github.com/yanzhanglee) | 🟢 CLOSED | Interactive OpenAI-compatible endpoint configuration in TUI; lowers barrier for self-hosted and regional providers |
| [#25110](https://github.com/anomalyco/opencode/pull/25110) | fix(opencode): DeepSeek reasoning_content round-trips | [`@nahoskins`](https://github.com/nahoskins) | 🟢 CLOSED | Ensures `reasoning_content` preserved across all multi-turn variants; fixes [#24722](https://github.com/anomalyco/opencode/issues/24722) for DeepSeek compatibility |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Sandboxing / Security Isolation** | [#2242](https://github.com/anomalyco/opencode/issues/2242) (49 👍), seatbelt comparisons | 🔥 High — competitive gap |
| **MCP Ecosystem Optimization** | [#8625](https://github.com/anomalyco/opencode/issues/8625) (61 👍), context compression, search tools | 🔥 High — scaling bottleneck |
| **Session Management & Discoverability** | 3+ issues on `/sessions` 30-day limit, historical access | 🔥 High — daily UX friction |
| **RTL / Internationalization** | [#16875](https://github.com/anomalyco/opencode/issues/16875), [#26915](https://github.com/anomalyco/opencode/issues/26915) Persian/Arabic/Hebrew | 🌡️ Moderate — accessibility gap |
| **Integrated Browser / Workspace** | [#26772](https://github.com/anomalyco/opencode/issues/26772) | 🌡️ Moderate — workflow consolidation |
| **RLM / Recursive Agent Patterns** | [#8554](https://github.com/anomalyco/opencode/issues/8554) now closed, enables autonomous coding | ✅ Emerging — architecture enabler |
| **Custom Provider Polish** | [#20802](https://github.com/anomalyco/opencode/issues/20802) vision routing, [#30034](https://github.com/anomalyco/opencode/pull/30034) auth prompts | 🌡️ Moderate — enterprise adoption blocker |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Current Mitigation |
|------------|-----------|--------|------------------|
| **TUI Session Amnesia** | 3+ issues, 20+ comments | 🔴 High — users believe data lost; CLI workaround unknown to many | Use `opencode session list` as temporary bypass; fix requires `sync.tsx` filter removal |
| **Unpredictable GPT Latency** | [#29079](https://github.com/anomalyco/opencode/issues/29079), 113 comments | 🔴 High — breaks iterative development flow | No clear pattern identified; may be provider-side queueing |
| **No Native Sandboxing** | [#2242](https://github.com/anomalyco/opencode/issues/2242), 10 months open | 🔴 High — security audit blocker | Manual `chroot`/Docker workarounds; no seatbelt equivalent |
| **MCP Context Explosion** | [#8625](https://github.com/anomalyco/opencode/issues/8625), 61 👍 | 🟡 Medium-High — degrades agent quality automatically | Automatic deferral at 10% threshold; no user control |
| **Skill Path Resolution Bugs** | [#6900](https://github.com/anomalyco/opencode/issues/6900), [#18370](https://github.com/anomalyco/opencode/issues/18370) | 🟡 Medium — breaks reusable skill packaging | Relative path handling inconsistent vs. Claude Code |
| **Custom Provider Vision Pipeline** | [#20802](https://github.com/anomalyco/opencode/issues/20802) | 🟡 Medium — multimodal adoption for enterprises | No known workaround; requires upstream fix |
| **Windows IME / Input Issues** | [#29993](https://github.com/anomalyco/opencode/issues/29993), [#29999](https://github.com/anomalyco/opencode/issues/29999) | 🟡 Medium — affects CJK users | Partial fixes in flight for dialog focus and underscore rendering |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-05-30 to 2026-05-31. Data source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-31

## Today's Highlights

The Pi team shipped a critical fix for TUI crashes caused by lines exceeding terminal width, while also addressing a nasty regression where pre-prompt threshold compaction would throw in `agent-core`. Meanwhile, the extension API continues to expand with new orchestration helpers and command hooks, and community members are pushing hard on OpenRouter provider compatibility fixes.

---

## Releases

*No new releases in the last 24 hours. The v0.78.0 tag exists but `pi update` was not detecting it—this was reported in [#5220](https://github.com/earendil-works/pi/issues/5220) and subsequently resolved.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#5223](https://github.com/earendil-works/pi/issues/5223) | **Anthropic provider modifies thinking blocks in latest assistant message, causing 400 with Opus 4.8 adaptive thinking** | Breaks multi-turn conversations with Claude's flagship reasoning model mid-session. Root cause is Pi mutating `thinking` blocks that Anthropic now strictly validates. | 2 upvotes, active debugging; high priority for Anthropic power users |
| [#5236](https://github.com/earendil-works/pi/issues/5236) | **Regression: pre-prompt threshold compaction causes agent-core to throw** | Session recovery failure when assistant messages exceed compaction thresholds. Directly impacts long-running agent workflows. | Reported with precise commit bisect; fix PR already opened |
| [#5231](https://github.com/earendil-works/pi/issues/5231) | **Crash on opening very large session files: `Cannot create a string longer than 0x1fffffe8 characters`** | Hard Node.js string limit hit on 600MB+ sessions. Blocks recovery of multi-day `/goal` runs. | Tagged `possibly-openclaw-clanker`; streaming/chunking architecture questioned |
| [#5044](https://github.com/earendil-works/pi/issues/5044) | **OOM for `pi --resume` on large sessions** | Companion to #5231—`buildSessionInfo` loads entire JSONL into memory just to list sessions. Fundamental scalability bottleneck. | Persistent issue; community wants streamed implementation |
| [#5226](https://github.com/earendil-works/pi/issues/5226) | **SDK embed requires package-adjacent package.json at runtime** | Bundler/embedding breakage: Pi's `getPackageDir()` assumes unpacked npm layout, failing in Webpack/esbuild/Rollup outputs. | Follow-up to #5108; affects production deployments |
| [#5208](https://github.com/earendil-works/pi/issues/5208) | **pi crashes with uncaughtException when background process exits late output** | Race condition in `ProcessRegistry`: `output.finish()` called on `exit`, but `data` events can still fire. | Well-diagnosed root cause; needs accumulator lifecycle fix |
| [#5217](https://github.com/earendil-works/pi/issues/5217) | **Extension events `session_before_compact` and `session_compact` lack compaction reason** | Extensions cannot distinguish user-initiated `/compact` from auto-triggered compaction, limiting adaptive behavior. | API design discussion; RPC protocol already carries this info |
| [#5218](https://github.com/earendil-works/pi/issues/5218) | **TUI tab width accounting can undercount sliced output** | Tab character width calculation drifts, causing "exceeds terminal width" crashes. Contributor has local fix ready. | Reproducible; contributor offered PR |
| [#5229](https://github.com/earendil-works/pi/issues/5229) | **MiniMax on OpenRouter is broken** | OpenRouter rejecting `developer` role for MiniMax models; provider-specific protocol mismatch. | Part of ongoing OpenRouter role mapping saga |
| [#5046](https://github.com/earendil-works/pi/issues/5046) | **Create a way to persist thinking level to session only** | Thinking level changes currently mutate global `~/.pi/agent/settings`. Users want per-session granularity. | Tagged `possibly-openclaw-clanker`; UX/config philosophy tension |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#5237](https://github.com/earendil-works/pi/pull/5237) | **fix(coding-agent): avoid continuing after pre-prompt threshold compaction** | Eliminates `agent.continue()` path entirely; adds regression test for #5236. Removes entire class of assistant-tailed context crashes. | 🔵 Open |
| [#5235](https://github.com/earendil-works/pi/pull/5235) | **Feat/issue 5129 tui overlay focus** | Fixes focus theft bug where overlays become non-interactive when editor regains focus mid-flow. TUI state machine improvement. | 🔵 Open |
| [#5233](https://github.com/earendil-works/pi/pull/5233) | **fix(tui): draw Kitty images after reserved rows** | Restores WezTerm Kitty graphics rendering; regression from #4461's cursor positioning change. | 🔵 Open |
| [#5221](https://github.com/earendil-works/pi/pull/5221) | **Fix OpenRouter reasoning instruction role** | Maps reasoning system prompts to `system` role for OpenRouter (keeping `developer` for OpenAI native). Provider-specific protocol compliance. | 🔵 Open |
| [#5224](https://github.com/earendil-works/pi/pull/5224) | **fix(tui): truncate oversized lines instead of crashing** | Defensive rendering: replaces fatal `uncaughtException` with graceful truncation when width accounting drifts. | ✅ Merged |
| [#5232](https://github.com/earendil-works/pi/pull/5232) | **Add Pi agent bus orchestration helpers** | New Agent Bus event schema, projection helpers, mirror/dispatch examples. Enables external session orchestration and Claude dispatch patterns. | ✅ Merged |
| [#5234](https://github.com/earendil-works/pi/pull/5234) | **Add command_start hook to extension system** | Pre-command interception hook with cancellation support. Mirrors existing `tool_call`/`input` hook patterns. | ✅ Merged |
| [#5197](https://github.com/earendil-works/pi/pull/5197) | **fix(coding-agent): guard compaction continue() on assistant-tailed context** | Precedes #5237; added guards for `continue()` post-compaction. Fixed silent overflow + context window exceedance bugs. | ✅ Merged |
| [#5216](https://github.com/earendil-works/pi/pull/5216) | **docs: add Simplified Chinese translations** | Community localization for README, contributing guide, and core coding-agent docs. | ✅ Merged |
| [#5210](https://github.com/earendil-works/pi/pull/5210) | **fix(questionnaire): word-wrap long prompts and descriptions instead of truncating** | Replaces `truncateToWidth` with proper wrapping in questionnaire example extension. | ✅ Merged |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle & scalability** | #5231, #5044, #5046, #5217 | 🔥 High — Large session handling, resume OOM, and compaction introspection are converging themes |
| **Extension API surface expansion** | #5142, #5234, #5232, #5217 | 🔥 High — Remote clients, orchestration buses, and hooks driving ecosystem growth |
| **Provider compatibility & role mapping** | #5221, #5229, #5159, #4210 | 🔥 High — OpenRouter, Anthropic, Bedrock all hitting protocol edge cases |
| **TUI robustness** | #5224, #5218, #5213, #5192, #5233 | Medium — Rendering, focus, and terminal geometry edge cases getting attention |
| **Tooling governance** | #5084, #4643 | Medium — Fine-grained builtin tool control, Codex Fast mode integration |

---

## Developer Pain Points

1. **Large session fragility** — The 512MB string limit (#5231) and OOM on `--resume` (#5044) reveal fundamental architectural tension: Pi's session model assumes in-memory JSONL. Developers running multi-day `/goal` sessions hit hard Node.js/V8 limits. **Ask:** Streaming/chunked session storage, or at least lazy loading.

2. **Provider protocol drift** — OpenRouter's `developer` vs `system` role (#5221, #5229), Anthropic's thinking block validation (#5223), and Bedrock's null responses (#4210) show Pi's abstraction layer leaking. **Ask:** Provider-specific normalization layer with faster iteration cycle.

3. **Bundler-hostile SDK** — Runtime `package.json` reading (#5226) and dynamic resolution paths break standard JS bundlers. **Ask:** Build-time metadata injection or explicit bundler targets.

4. **Compaction opacity** — Extensions and users alike cannot observe or control *why* compaction fires (#5217, #5236, #5212). **Ask:** Rich compaction telemetry and deterministic behavior guarantees.

5. **TUI crash surface area** — Terminal width enforcement (#5224, #5218, #5228), focus management (#5235), and ANSI width accounting create brittle rendering pipeline. **Ask:** Defensive rendering defaults, graceful degradation over correctness exceptions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-31

## 1. Today's Highlights

The v0.17.0 nightly build landed with a critical rewind fix for false "compressed turn" errors, while the community drove intense activity around authentication dead-ends—particularly the discontinued Qwen OAuth method trapping JetBrains IDE users—and memory pressure issues threatening long-running resumed sessions. Three parallel efforts by contributor **yiliang114** (auto-update EACCES handling, OAuth cleanup, and OOM prevention) signal a focused push on installation and runtime reliability.

---

## 2. Releases

**[v0.17.0-nightly.20260530.c699738f9](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260530.c699738f9)**
- Fixes false "compressed turn" error during mid-turn message rewind operations
- Standard nightly build automation via `qwen-code-ci-bot`

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#4637](https://github.com/QwenLM/qwen-code/issues/4637)** — Discontinued `qwen-oauth` still returned in `authMethods`, trapping JetBrains IDE users in dead-end auth state | **P1 priority**: Breaks core IDE integration; users with stale configs cannot authenticate at all | 2 comments, reported by active contributor yiliang114 with detailed reproduction |
| **[#4624](https://github.com/QwenLM/qwen-code/issues/4624)** — `qwen --resume` child process memory grows unbounded until OOM | Critical for long-running development sessions; indicates session history and tool results never release | 2 comments, 1 upvote; user provided detailed memory behavior analysis |
| **[#4627](https://github.com/QwenLM/qwen-code/issues/4627)** — Auto-update fails with EACCES when npm global prefix requires root | Common macOS/system Node.js installation pattern; blocks security patches for many users | 2 comments, 1 upvote; root cause traced to `handleAutoUpdate.ts` |
| **[#4642](https://github.com/QwenLM/qwen-code/issues/4642)** — CLI loading messages ("正在努力搬砖中") cannot be disabled, described as "恶心透了" (disgusting) | UX friction for power users; no configuration escape hatch | 2 comments, closed without resolution (likely redirected) |
| **[#4493](https://github.com/QwenLM/qwen-code/issues/4493)** — Rider IDE cannot log in to Qwen Code, infinite redirect when browser already authenticated | Blocks JetBrains Rider adoption; affects Alibaba Cloud token plan integration | 8 comments, no upvotes; persistent since May 25 |
| **[#2724](https://github.com/QwenLM/qwen-code/issues/2724)** — IntelliJ IDEA 2026.1 fails with local Ollama, forces cloud login | Version-specific regression (works in Rider/WebStorm 2025.3); undermines local/self-hosted workflow | 3 comments, 3 upvotes; highest community signal |
| **[#3757](https://github.com/QwenLM/qwen-code/issues/3757)** — JetBrains AI shows 401, unclear if quota exhausted or misconfiguration | Diagnostic opacity; users cannot distinguish auth failure from billing limits | 3 comments, no upvotes |
| **[#3511](https://github.com/QwenLM/qwen-code/issues/3511)** — JetBrains AI integration requires OAuth, no API key-only path | Forces OAuth dependency for enterprise/headless environments where API keys are preferred | 4 comments, no upvotes; relates to #4637 OAuth deprecation problem |
| **[#4641](https://github.com/QwenLM/qwen-code/issues/4641)** — MCP stability: 8 configured servers, only 3-5 connect, non-deterministic | Flakiness in core extension protocol undermines tool ecosystem reliability on Windows | 0 comments, 0 upvotes; fresh report needing triage |
| **[#4631](https://github.com/QwenLM/qwen-code/issues/4631)** — Korean UI: completed tasks don't disappear from task list | Daemon UI state management bug; affects international user base | 2 comments, 0 upvotes; includes screenshot evidence |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| **[#4639](https://github.com/QwenLM/qwen-code/pull/4639)** — Drop discontinued Qwen OAuth method from ACP auth methods | Unblocks #4637; prevents dead-end auth state in JetBrains IDEs | Critical path for IDE integration stability |
| **[#4644](https://github.com/QwenLM/qwen-code/pull/4644)** — Replace full-history `structuredClone` with shallow/tail variants to prevent OOM on resume | Direct fix for #4624; targets 500+ entry sessions with 5 call sites refactored | Memory sustainability for power users |
| **[#4629](https://github.com/QwenLM/qwen-code/pull/4629)** — Standalone auto-update support (non-npm installations) | Complements #4643; enables self-updating binary installs with SHA256 verification | Distribution infrastructure expansion |
| **[#4643](https://github.com/QwenLM/qwen-code/pull/4643)** — Auto-update fallback to standalone when npm prefix not writable | Pairs with #4627; graceful degradation from EACCES failures | Installation reliability on macOS/system Node |
| **[#4646](https://github.com/QwenLM/qwen-code/pull/4646)** — Clamp oversized inline media on prompt path (default 10MB ceiling) | Prevents token budget explosion and request failures from large image/audio blobs | Production robustness |
| **[#4613](https://github.com/QwenLM/qwen-code/pull/4613)** — Keep model & approval-mode state consistent across multi-client sessions | Fixes daemon state synchronization between chat view, terminal, and IDE companion | Multi-client correctness |
| **[#4647](https://github.com/QwenLM/qwen-code/pull/4647)** — Platform-native clipboard tools for Linux image paste (WSL2+Wayland) | Replaces broken `@teddyzhu/clipboard` X11 dependency; closes #3517, #2885 | Linux/WSL compatibility |
| **[#4333](https://github.com/QwenLM/qwen-code/pull/4333)** — Atomic write rollout for credentials, memory, config, JSONL (Phase 2) | Crash-safe persistence for security-sensitive paths; closes #3681, #4095 | Data integrity guarantee |
| **[#4620](https://github.com/QwenLM/qwen-code/pull/4620)** — CPU profiling support for Chrome DevTools analysis | `SIGUSR1` toggle, env-var trigger, and `--cpu-profile` CLI flag for performance debugging | Developer tooling |
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** — Extract `DaemonWorkspaceService` from `AcpSessionBridge` | Architecture cleanup per #4542; separates session bridge from workspace capabilities | Codebase maintainability |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Smart model routing** (local ↔ cloud) | [#4640](https://github.com/QwenLM/qwen-code/issues/4640) — "Умный роутинг": simple tasks to local model, complex to API | Early; single request with explicit naming wish |
| **SubAgent context injection** | [#4645](https://github.com/QwenLM/qwen-code/issues/4645) — Auto-inject `QWEN_CODE_SESSION_ID`, `QWEN_CODE_AGENT_ID` for traceability | Fresh; detailed spec with variable table |
| **ACP protocol alignment** | [#4503](https://github.com/QwenLM/qwen-code/issues/4503) — Message ID support for v2 Draft (closed, likely implemented) | Standards compliance track |
| **Statusline customization** | [#4633](https://github.com/QwenLM/qwen-code/issues/4633) + [#4634](https://github.com/QwenLM/qwen-code/pull/4634) — Preset ordering and model display behavior | Active; PR in progress |
| **Telemetry/observability expansion** | [#4630](https://github.com/QwenLM/qwen-code/pull/4630), [#4628](https://github.com/QwenLM/qwen-code/pull/4628), [#4410](https://github.com/QwenLM/qwen-code/pull/4410) — Tool spans, client_id, subagent isolation | Sustained investment; ARMS integration |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|--------------|
| **Authentication fragility in JetBrains IDEs** | 🔥🔥🔥🔥🔥 | #4637 (OAuth trap), #4493 (Rider login loop), #3757 (401 ambiguity), #3511 (OAuth-only integration), #2724 (local model blocked) — **5 of 16 active issues** |
| **Memory pressure in long sessions** | 🔥🔥🔥🔥 | #4624 (OOM on resume), #4644 (fix in progress); suggests systematic leak in session/tool history retention |
| **Auto-update permission failures** | 🔥🔥🔥 | #4627 (EACCES npm), #4643 (standalone fallback), #4629 (standalone updater) — macOS/system Node pattern |
| **MCP / tool ecosystem instability** | 🔥🔥 | #4641 (non-deterministic Windows connections), #4622 (orphaned tool calls enforcement) |
| **CLI personality friction** | 🔥 | #4642 (unskippable loading messages); power-user configurability gap |
| **Documentation / trust transparency** | 🔥 | #4648 (HVTracker badge request); external validation seeking |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-31

**Repository:** [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) (formerly DeepSeek-TUI)

---

## 1. Today's Highlights

The v0.8.47 release landed with critical deadlock fixes and composer text selection, while mainland China accessibility dominated community priorities—Baidu AI Search backend PR opened, DuckDuckGo access issues closed, and Feishu/Lark integration planning accelerated. Configuration hardcoding emerged as a persistent theme with three separate PRs/issues targeting `MENTION_MENU_LIMIT`, `COMPLETIONS_WALK_DEPTH`, and config path fragmentation.

---

## 2. Releases

**v0.8.47** — [PR #2233](https://github.com/Hmbown/CodeWhale/pull/2233) (merged 2026-05-30)

| Contributor | Fix/Feature |
|-------------|-------------|
| @Fire-dtx | Deadlock fix: `RwLock` → `Semaphore` |
| @imkingjh999 | Composer text selection + copy/cut |
| @harvey2011888 | Loop guard reports `Failed` on halt |
| @victorcheng | Project context tracing |

**16 commits total**, 9 community PRs harvested. Focus: stability, terminal reliability, sub-agent robustness.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#755](https://github.com/Hmbown/CodeWhale/issues/755) | **Chinese-market improvements tracker** | Meta-issue for platform-aware UI (Alt→Opt), web-search backend alternatives, and AgentScope harness. Anchors v0.9.0 roadmap. | 👍 3, active scoping by maintainer |
| [#2353](https://github.com/Hmbown/CodeWhale/issues/2353) | **Memory config in `config.toml` silently fails** | Core feature broken for users following official docs; error message points to correct fix but implementation gap persists. | 6 comments, reproducible |
| [#2323](https://github.com/Hmbown/CodeWhale/issues/2323) | **Chinese IME unadapted** | Input method editor bugs break composer UX for ~30% of user base; placeholder text leaks, modal interference. | 2 comments, screenshots attached |
| [#2376](https://github.com/Hmbown/CodeWhale/issues/2376) | ~~China DuckDuckGo access blocked~~ **[CLOSED]** | Rapidly resolved by redirecting to Bing/custom provider docs; signals maintainer responsiveness to regional constraints. | 2 comments, closed same day |
| [#2374](https://github.com/Hmbown/CodeWhale/issues/2374) | **Terminal rendering corruption** | Visual degradation under sustained use—core TUI reliability at risk, affects all platforms. | 2 comments, needs repro details |
| [#2211](https://github.com/Hmbown/CodeWhale/issues/2211) | **Sub-agent fanout saturates TUI** | `release-blocker` label; max-agents sidebar hit during v0.8.46 release work. Compound pressure from hidden worktrees + shell tasks. | Maintainer-diagnosed, architectural |
| [#2132](https://github.com/Hmbown/CodeWhale/issues/2132) | **Evaluate Bing→DuckDuckGo default switch** | Bing fails technical queries; DuckDuckGo better but China-inaccessible. Tension between quality and global availability. | Research-driven, pending decision |
| [#2372](https://github.com/Hmbown/CodeWhale/issues/2372) | **`task_shell_start tty:true` breaks `/dev/tty`** | `sshpass`, `sudo` fail without controlling terminal; parity gap with Claude Code/Codex. | 0 comments, well-documented repro |
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config paths fragmented (OS + Cygwin)** | Silent migration bug plus cross-platform inconsistency; breaks dotfile portability. | Patch attached by reporter |
| [#2380](https://github.com/Hmbown/CodeWhale/issues/2380) | **Auto mode routing visibility** | `--model auto` obscures per-turn model selection; breaks debugging, cost tracking, reproducibility. | Fresh (2026-05-31), 0 comments |

---

## 4. Key PR Progress

| # | PR | Status | What It Does | Review Signal |
|---|-----|--------|--------------|---------------|
| [#2233](https://github.com/Hmbown/CodeWhale/pull/2233) | v0.8.47 release | **MERGED** | Deadlock fix, composer selection, context tracing | Shipped |
| [#2377](https://github.com/Hmbown/CodeWhale/pull/2377) | MCP for SubAgents + BrowserMode | **OPEN** | Unblocks `agent_open` MCP tool access; deterministic file browser for `@` menu | Community-critical, evaluation-tested |
| [#2371](https://github.com/Hmbown/CodeWhale/pull/2371) | Baidu AI Search backend | **OPEN** | First-party China-accessible search API; direct response to #2376, #2132 | Regional priority |
| [#2373](https://github.com/Hmbown/CodeWhale/pull/2373) | Keep startup prompts interactive | **OPEN** | Fixes #2370: `--prompt` exits REPL; adds explicit startup input modes | UX polish |
| [#2375](https://github.com/Hmbown/CodeWhale/pull/2375) | Deterministic composer history flush | **OPEN** | Replaces polling loop with test-only flush message; production batching preserved | Test reliability |
| [#2367](https://github.com/Hmbown/CodeWhale/pull/2367) | Java + Vue LSP defaults | **OPEN** | `jdtls`, `vue-language-server --stdio` mappings | Language coverage gap |
| [#1840](https://github.com/Hmbown/CodeWhale/pull/1840) | Force English `reasoning_content` | **MERGED** | When `show_thinking` off, prevents CJK reasoning leakage | i18n edge case |
| [#1823](https://github.com/Hmbown/CodeWhale/pull/1823) | v0.8.40 stability release | **MERGED** | Provider/model correctness, terminal reliability, OCR | Historical reference |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **China-market localization** | #755, #2371, #2376, #2132, #758 (Feishu), #2323 (IME) | 🔥 High — infrastructure + UX + compliance |
| **Configurability surface** | #2360 (`MENTION_MENU_LIMIT`), #2359 (`COMPLETIONS_WALK_DEPTH`), #2369 (config paths), #2379 (per-model `instructions.md`) | 🔥 High — users hitting hardcoded limits |
| **Sub-agent / MCP maturity** | #2377 (PR), #2362 (bug), #2211 (saturation), #1880 (tool studio) | Medium — architectural scaling |
| **Chat-platform frontends** | #757 (Feishu bot), #758 (mobile companion) | Medium — v0.9.0 deferred |
| **Voice input** | #2115, #2116 | Low — pulled from v0.8.45, needs terminal-safe design |
| **Auto-mode observability** | #2380 | Emerging — operational transparency |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Hardcoded constants** | 3 issues + 1 PR in 48h | Moderate — power users blocked in monorepos, deep trees | #2360, #2359, #2368 |
| **Mainland China network constraints** | 4+ issues, 1 PR | **Critical** — search, web tools, community access | #2371, #2376, #2132, #755 |
| **Config system fragility** | 2 issues | Moderate — silent failures, migration bugs, OS/Cygwin drift | #2353, #2369 |
| **Sub-agent / MCP boundary leaks** | 2 issues | Moderate — tool access inheritance broken | #2362, #2211 |
| **Terminal/TTY control** | 2 issues | Moderate — breaks interactive tools (`sshpass`, IME) | #2372, #2323 |
| **Model-switching state management** | 1 issue + 1 PR | Low-emerging — instructions stale, routing opaque | #2379, #2380 |

---

*Digest compiled from 22 issues and 8 PRs updated 2026-05-30/31.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*