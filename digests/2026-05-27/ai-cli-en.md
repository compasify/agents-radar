# AI CLI Tools Community Digest 2026-05-27

> Generated: 2026-05-27 00:26 UTC | Tools covered: 9

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
## Community Digest Analysis — 2026-05-27

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape has matured into a multi-polar ecosystem with seven actively maintained alternatives, each converging on agentic coding workflows while diverging in architecture philosophy. Daemon/server modes are becoming table stakes (Qwen Code v0.16, OpenCode's SDK, Gemini's Remote Agents), reflecting a shift from interactive REPLs to persistent background agents. Memory systems, MCP ecosystem integration, and cross-platform terminal reliability dominate engineering investment, while cost control and model transparency have emerged as universal user demands following high-profile billing incidents. The field shows signs of consolidation around shared conventions—`AGENTS.md` configuration, ACP protocol compliance, and OpenAI-compatible API layers—suggesting an interoperability layer is forming beneath vendor differentiation.

---

## 2. Activity Comparison

| Tool | Issues (24h Active) | PRs (24h Active) | Release Status | Notable Activity |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 hot issues tracked | 10 PRs (3 closed, 7 open) | No release | Intense around cost/security; docs/tooling PRs |
| **OpenAI Codex** | 10 hot issues | 10 PRs (3 closed, 7 open) | **rust-v0.134.0** shipped | Local search, `--profile` unification |
| **Gemini CLI** | 10 hot issues | 10 PRs (2 closed, 8 open) | No release | PTY/credential fixes; Auto Memory hardening cluster |
| **GitHub Copilot CLI** | 10 hot issues | **0 PRs** | **v1.0.55-1** shipped | Internal branch work suspected; Windows regressions |
| **Kimi Code CLI** | 6 hot issues | 5 PRs (3 closed, 2 open) | **v1.45.0** shipped | API key pool for concurrency; tool dedup |
| **OpenCode** | 10 hot issues | 10 PRs (1 closed, 9 open) | No release | Fallback system reliability; SDK CORS |
| **Pi** | 10 hot issues | 10 PRs (6 merged, 4 open) | No release | Unicode/TUI fixes; "Working..." spinner resolved |
| **Qwen Code** | 10 hot issues | 10 PRs tracked | **v0.16.1-nightly** | Daemon mode merge; OOM mitigation |
| **DeepSeek TUI / CodeWhale** | 10 hot issues | 10 PRs (harvested 9 community) | **v0.8.46–0.8.47** | Rebrand completion; deadlock fix |

*Note: Issue/PR counts reflect highlighted items in digests, not exhaustive totals.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **MCP Server Lifecycle Management** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Lazy loading (Codex #2335), runtime add/remove (Qwen #4552), orphaned process cleanup (Claude #1935), atomic refresh on timeout (Gemini #27383) |
| **Cost Transparency & Guardrails** | Claude Code, OpenCode, Gemini CLI | Proactive model disclosure before expensive tiers activate (Claude #60093), spending limits, context-tier gating (OpenCode #28846) |
| **Daemon/Server Mode** | Qwen Code, OpenCode, Gemini CLI, OpenAI Codex | HTTP/SSE/ACP transports (Qwen #4472), session persistence, remote client connectivity, headless operation |
| **Global/Project Agent Configuration** | DeepSeek/CodeWhale, Qwen Code, Claude Code | `~/.agents/AGENTS.md` hierarchy (CodeWhale #2156/#2236, Qwen #4534), `CLAUDE.md` precedent, cross-tool instruction sharing |
| **Non-Latin Keyboard/Terminal Compatibility** | Claude Code, GitHub Copilot CLI, Pi, OpenCode, Qwen Code | Cyrillic Ctrl shortcuts (Claude #36549, Qwen #4116), CJK string slicing (CodeWhale #2165), IME collision (Copilot #1972), Unicode word boundaries (Pi #5022) |
| **Session State Reliability** | Gemini CLI, Pi, Copilot CLI, Claude Code | PTY descriptor crashes (Gemini #27371, #27461), deterministic resumption (Pi #5018), resume session loss (Copilot #3434) |
| **OpenAI API Compatibility** | Kimi Code CLI, Pi, OpenCode | Base URL + schema standardization (Kimi #2208), device code login (Pi #3424), provider ecosystem integration |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek/CodeWhale |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Primary User** | Individual pros, small teams | Enterprise, OpenAI ecosystem | Google Cloud users, multi-modal | GitHub Enterprise, Microsoft shops | China market, cost-sensitive | Local-first, self-hosters | TUI purists, extension builders | Alibaba Cloud, Chinese enterprise | DeepSeek users, Rust community |
| **Architecture** | Desktop app + CLI bridge | Rust-native, sandbox-heavy | Node/TypeScript, PTY-centric | TypeScript, VS Code-integrated | Wrapper around `kimi-code` | Node.js, plugin-extensible | TypeScript, highly modular | TypeScript, V8-based, daemonizing | Rust, crossterm-native |
| **Key Differentiator** | Routines/hooks ecosystem, Max plan gating | Sandboxing, `/compact`, profile system | Auto Memory, subagent orchestration, Google ecosystem | GitHub-native integration, enterprise policy | Cost efficiency, parallel subagents | Open-source core, provider flexibility | Extension API, skill mentions | Daemon mode, ACP protocol, Chinese cloud | Rebrand agility, composer UI, CJK focus |
| **Technical Debt Profile** | Model-tier confusion, remote auth fragility | Windows/WSL instability, log bloat | PTY lifecycle, credential persistence | TUI library compatibility, internal dev opacity | Rate limits under concurrency, ecosystem lock-in | Streaming hangs, fallback fragility, OOM | Provider parameter drift, installation | V8 heap limits, auth fragmentation | Windows TUI freezes, rebrand migration |
| **Openness** | Closed source | Partial (Rust CLI open) | Partial | Closed source | Partial | Open core | Open source | Open source | Open source |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|:---|:---|:---|
| **Highest Velocity** | **Pi**, **DeepSeek/CodeWhale**, **Qwen Code** | Pi: 6 PRs merged in 24h with precise, community-driven fixes. CodeWhale: 9 community PRs harvested into release, maintainer responsiveness. Qwen Code: major branch merge, architectural RFCs with sustained engagement. |
| **Steady Enterprise** | **OpenAI Codex**, **Claude Code**, **Gemini CLI** | Codex: quality regressions drawing vocal response, but release cadence consistent. Claude: high issue volume with sustained engagement since February. Gemini: maintainer-driven EPICs, structured evaluation frameworks. |
| **Release-Focused, Low Transparency** | **GitHub Copilot CLI** | v1.0.55-1 shipped but zero public PRs in 24h; fixes appearing without visible development process. Suggests mature product team with internal workflow, less community co-creation. |
| **Emerging/Niche** | **Kimi Code CLI**, **OpenCode** | Kimi: focused iteration on specific pain points (rate limits, dedup). OpenCode: high issue engagement (55 comments on latency) but resource-constrained; SDK and CORS work shows platform ambition. |

**Maturity Signals:**
- **Most mature process**: Gemini CLI (structured P1/P2 severity, evaluation EPICs)
- **Most responsive to community**: DeepSeek/CodeWhale (direct PR harvesting, documentation of review expectations)
- **Highest risk of stagnation**: GitHub Copilot CLI (closed development, persistent long-neglected issues like #1972 IME with 46 👍)

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Agent interoperability conventions** | `AGENTS.md` emerging across CodeWhale, Qwen, Claude; ACP protocol in Qwen #4472; OpenAI-compatible layers in Kimi/Pi | Developers should design agent instructions for portability; vendor lock-in decreasing for configuration layer |
| **Background/daemon execution as default** | Qwen `qwen serve`, Gemini Remote Agents, Codex remote exec-server, OpenCode SDK | CLI is becoming control plane for persistent agents; interactive TUI is secondary interface |
| **Memory systems as competitive battlefield** | Gemini Auto Memory (3 P2 issues), Claude context tiers, Codex compaction extensibility | Context management is where models differentiate; users will demand visibility and control |
| **Terminal emulator as liability** | PTY crashes, CJK panics, Kitty protocol misdetection, Wayland gaps across all tools | Cross-platform TUI is unsolved; expect convergence on web-based or simplified rendering alternatives |
| **Rate limiting as architectural constraint** | Kimi API key pools, Claude 429 classifier blocks, Codex auto-resume requests | Multi-tenancy and credential rotation becoming infrastructure, not configuration |
| **Quality regression visibility** | Codex weekend slowdown (#24649), Claude silent Opus escalation (#60093), OpenAI stream hangs (#29129) | User trust requires real-time quality telemetry; "it feels slower" is now trackable and demands response |
| **Sandboxing as enterprise prerequisite** | OpenCode #2242 (47 👍), Codex seatbelt, Gemini implicit model | Security isolation will separate production tools from experimental; open-source tools lagging closed alternatives |

---

*Report compiled from community digest data dated 2026-05-27. For real-time tracking, monitor repository release feeds and starred issue notifications.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Date:** 2026-05-27 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | Typographic quality control preventing orphan words, widow headers, and numbering misalignment in AI-generated documents | Universal pain point; affects every document Claude generates; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 OPEN | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) with LibreOffice/ISO standard compliance | Enterprise open-source document workflow demand; bridges gap with proprietary formats |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 OPEN | Revised frontend-design skill with actionable, conversation-scoped instructions | Meta-concern about skill quality; ensuring instructions are actually executable in single conversations |
| 4 | **Skill Quality + Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN | Two meta-skills: 5-dimension quality analysis (structure, examples, resources) and security vulnerability scanning for skills | Self-improving ecosystem; addresses trust and standardization at scale |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 OPEN | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP/BI crossover; Apache 2.0 model released at SAP TechEd 2025 |
| 6 | **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 OPEN | 4-skill cognitive framework: structured thinking templates, advisory reasoning, autonomous agent orchestration, and persistent memory | Most ambitious architectural proposal; "cognitive OS" for knowledge management |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 OPEN | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, component vs. integration vs. E2E guidance | Developer experience completeness; fills critical gap in code quality skills |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 OPEN | Broad enterprise platform coverage: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SecOps, SPM/PPM, CSDM, IntegrationHub | Largest enterprise ITSM scope; reflects ServiceNow's dominant market position |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Intensity |
|:---|:---|:---:|
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) — org-wide libraries, direct sharing links, eliminating Slack/Teams manual distribution | 🔥🔥🔥 |
| **Skill Ecosystem Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) — namespace impersonation risks; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint access control in SKILL.md | 🔥🔥🔥 |
| **Workflow Automation (n8n, MCP)** | [#190](https://github.com/anthropics/skills/pull/190) — n8n-builder/debugger; [#16](https://github.com/anthropics/skills/issues/16) — expose Skills as MCPs | 🔥🔥🔥 |
| **Windows/Platform Parity** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `run_eval.py`, subprocess, encoding failures | 🔥🔥 |
| **Memory & Persistent Context** | [#154](https://github.com/anthropics/skills/pull/154) — shodh-memory; AURELION memory skill | 🔥🔥 |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) — policy enforcement, threat detection, audit trails (closed but referenced) | 🔥🔥 |

---

## 3. High-Potential Pending Skills

These active PRs show sustained engagement and clear merge trajectory:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | Critical bugfix — breaks on case-sensitive filesystems; 8 documented mismatches; minimal review surface |
| **DOCX Tracked Changes ID Collision** | [#541](https://github.com/anthropics/skills/pull/541) | Data corruption bug with root cause analysis; fixes OOXML `w:id` shared namespace conflict |
| **YAML Description Validation** | [#539](https://github.com/anthropics/skills/pull/539) | Prevents silent parsing failures; early-catch validation; quality-of-life for all skill creators |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses #452; repo at 25% community health score; single highest-impact documentation addition |
| **Windows Subprocess + Encoding** | [#1050](https://github.com/anthropics/skills/pull/1050) | Two 1-line fixes; validated on Windows 11; unblocks `run_loop.py` for majority enterprise users |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade trust infrastructure** — spanning organizational skill distribution (#228), namespace verification (#492), cross-platform reliability (Windows parity cluster), and memory-persistent agent contexts that don't leak between security boundaries.

The Skills ecosystem has shifted from "more capabilities" to "production-safe capabilities at scale."

---

*Report generated from 50 PRs and 15 Issues sorted by community engagement. All 🔗 link to github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-05-27

## Today's Highlights
No new releases shipped in the last 24 hours, but community activity remains intense around cost control, remote connectivity, and keyboard accessibility. A fresh wave of issues highlights persistent model-tier confusion and non-Latin keyboard layout problems, while several documentation and tooling PRs aim to improve the developer experience.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#26302](https://github.com/anthropics/claude-code/issues/26302) | **Severe UI lag and mouse stutter on Windows** (Claude Desktop 1.1.3189) | Performance regression affecting core usability; 39 comments show sustained impact | 🔥 34 upvotes, highly active since February |
| [#1935](https://github.com/anthropics/claude-code/issues/1935) | **MCP servers orphaned on exit** (macOS) | Resource leak in multi-process architecture; long-running pain point | 36 comments, 15 upvotes, has repro |
| [#34290](https://github.com/anthropics/claude-code/issues/34290) | **Remote Control missing on Max plan** (`--help` omits option) | Plan-tier feature gating confusion; docs/implementation mismatch | 10 comments, marked duplicate |
| [#45942](https://github.com/anthropics/claude-code/issues/45942) | **"Always allow" permission breaks tool calls** (Android → WSL) | Security/convenience trade-off fails silently; breaks remote workflow | 9 comments, has repro |
| [#48845](https://github.com/anthropics/claude-code/issues/48845) | **Routines not triggering on GitHub PR open** | Automation reliability gap; hooks are key selling point | 8 comments, fresh (April) |
| [#29928](https://github.com/anthropics/claude-code/issues/29928) | **VS Code: no completion notifications** | `Notification` hook fails in IDE extension; breaks async workflow | 16 upvotes, 8 comments, cross-surface parity issue |
| [#60093](https://github.com/anthropics/claude-code/issues/60093) | **Model switched to Opus without consent — $1,050 overcharge** | Trust/cost emergency: silent model escalation with no UI disclosure | 7 comments, zero upvotes (likely too new) |
| [#61929](https://github.com/anthropics/claude-code/issues/61929) | **Inverted judgment: confirms trivial, decides major silently** | UX design philosophy critique; touches core agent autonomy | 7 comments, resonant pattern |
| [#36549](https://github.com/anthropics/claude-code/issues/36549) | **Ctrl shortcuts fail on Cyrillic layouts** (Kitty protocol) | International accessibility; closed but pattern persists | 6 comments, 5 upvotes, see also #58076, #62628 |
| [#60438](https://github.com/anthropics/claude-code/issues/60438) | **Persistent HTTP 429 on auto-mode classifier** | Rate-limiting logic blocks core functionality; account-level config issue | 6 comments, detailed repro on 2.1.144 |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#62622](https://github.com/anthropics/claude-code/pull/62622) | Fix 10 bugs across scripts/workflows | **Closed** | Replaced hardcoded `REPO` with `GITHUB_REPOSITORY` env var; added null-safety for scheduled workflow events |
| [#62597](https://github.com/anthropics/claude-code/pull/62597) | Fix 10 bugs across scripts/workflows | **Open** | Identical fix set; likely superseded #62622 or awaiting merge path |
| [#62592](https://github.com/anthropics/claude-code/pull/62592) | Update security-guidance plugin | **Closed** | README-only change for security plugin |
| [#62586](https://github.com/anthropics/claude-code/pull/62586) | Update security-guidance plugin | **Closed** | Full plugin update: automatic security reviewer at code-generation time |
| [#60427](https://github.com/anthropics/claude-code/pull/60427) | Standard GitHub capitalization in README | **Open** | Trivial docs polish; stalled since May 19 |
| [#60732](https://github.com/anthropics/claude-code/pull/60732) | Polish plugins README wording | **Open** | Single-sentence clarity improvement; low friction |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | `s` | **Open** | Placeholder/typo PR; likely needs cleanup or closure |
| [#4943](https://github.com/anthropics/claude-code/pull/4943) | Shell completions (bash, zsh, fish) | **Open** | Long-running (since Aug 2025); static completion scripts for CLI ergonomics |
| [#62264](https://github.com/anthropics/claude-code/pull/62264) | Block-build-commands hook example | **Open** | Hard guardrail for `make`, `cargo`, `npm build` etc. via PreToolUse hook |
| [#62346](https://github.com/anthropics/claude-code/pull/62346) | Document `CLAUDE_CODE_ATTRIBUTION_HEADER` | **Open** | Fixes cache-miss pain for third-party API providers using custom base URLs |

---

## Feature Request Trends

1. **Cost transparency and control** — Multiple issues demand clearer model selection, context-tier gating, and spending guardrails. Users want proactive disclosure before expensive models activate.

2. **Remote/mobile workflow maturity** — `/remote-control` and push notifications are high-friction: auth failures, stale bridges, silent notifications, and permission bugs across Android/iOS/Windows.

3. **IDE integration parity** — VS Code extension lags behind CLI in hooks, notifications, and status visibility; users want unified behavior across surfaces.

4. **Accessibility and internationalization** — Non-Latin keyboard layouts (Cyrillic, Greek, Arabic) repeatedly break Ctrl shortcuts; screen reader users flag "clever" status text as noise.

5. **Agent configurability** — Requests for mid-session agent switching, simpler thinking indicators, and clearer autonomy boundaries.

---

## Developer Pain Points

| Theme | Frequency | Severity | Summary |
|-------|-----------|----------|---------|
| **Silent model/cost escalation** | 🔴 High | Critical | Opus selection without consent; 1M context defaults on Pro; misleading "usage limit" errors |
| **Remote Control reliability** | 🔴 High | High | Auth bridge failures, stale sessions, orphaned MCPs, silent mobile notifications |
| **Non-Latin keyboard support** | 🟡 Medium | Medium | Ctrl+key bindings fail across macOS/Linux; Kitty protocol issues; multiple duplicates |
| **Hook/notification parity** | 🟡 Medium | Medium | `Notification` hook absent in VS Code; `idle_prompt` unreliable; async completion invisible |
| **MCP lifecycle management** | 🟡 Medium | Medium | Servers leak on exit; HTTP transport regressions in v2.1.147; 404 misinterpreted as expiry |
| **TUI status verbosity** | 🟢 Emerging | Low | "Wandering/Synthesizing/Reflecting" cycles criticized as distracting; requests for plain "Thinking..." |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-27

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.134.0** with local conversation history search and a consolidated `--profile` selector across CLI, TUI, and sandbox flows. Meanwhile, the community is actively wrestling with Windows-specific connectivity regressions, massive log bloat from nested tracing spans, and ongoing quality/speed concerns that surfaced over the weekend and remain unresolved.

---

## 2. Releases

### rust-v0.134.0
- **Local conversation history search**: Case-insensitive content matching with result previews across past sessions ([#23519](https://github.com/openai/codex/pull/23519), [#23921](https://github.com/openai/codex/pull/23921))
- **`--profile` as primary selector**: Unified profile selection across CLI, TUI permissions, and sandbox flows; legacy profile configs now require migration

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#21671](https://github.com/openai/codex/issues/21671) — `/compact` fails with `unknown service_tier` in 0.129.0 | **Closed** — Regression broke context compaction for multiple users after upgrade; fix validates parameter handling across API tiers | 21 comments, 5 👍 — high engagement, confirmed fix |
| [#23340](https://github.com/openai/codex/issues/23340) — `/goal` loop produces 480 KB log lines, 34 GB/day | Extreme log bloat from chain-nested `turn{}` tracing spans makes Codex unusable for long-running agent tasks; impacts observability costs | 10 comments — active debugging, no resolution |
| [#24373](https://github.com/openai/codex/issues/24373) — Google Drive Sheets read works, write fails after reinstall | Plugin auth scope regression breaks a core enterprise integration pattern; shared read quota 429s suggest rate-limit misconfiguration | 9 comments, 2 👍 — workaround hunting |
| [#23482](https://github.com/openai/codex/issues/23482) — macOS remote control stalls, manager stays disconnected | Host-app responsive but remote manager disconnects — blocks remote development workflow for macOS Studio users | 8 comments, 2 👍 — version mismatch (0.131.0-alpha.9 vs 0.125.0) suspected |
| [#24260](https://github.com/openai/codex/issues/24260) — gpt-5.5 xhigh turn stalled 30m before first output | 30-minute "Thinking" state with no feedback erodes trust in reasoning-heavy workflows; resumed normally after, suggesting backend queuing | 7 comments, 4 👍 — quality concern pattern |
| [#22876](https://github.com/openai/codex/issues/22876) — `/responses/compact` sends `service_tier` with provider-scoped API key | Auth-scoped API keys incorrectly receive tier parameters, causing compaction failures for Azure/custom provider users | 6 comments — root cause identified, fix pending |
| [#2335](https://github.com/openai/codex/issues/2335) — Optional / Lazy Loading of MCP Servers | Long-standing enhancement (since Aug 2025) for slow-starting MCP servers; 60s timeout blocks CLI startup feel | 6 comments, 31 👍 — **top-voted open issue**, strong consensus |
| [#23698](https://github.com/openai/codex/issues/23698) — Plugin Extension Point for Custom Compaction | Power users want to hook `ContextManager.for_prompt()` for domain-specific compaction strategies | 6 comments — architectural proposal stage |
| [#24649](https://github.com/openai/codex/issues/24649) — "When exactly will Codex fix the recent slowdown and quality degradation?" | Weekend-perceived quality regression now extending into Tuesday; tasks slower, more errors, incomplete outputs | 2 comments, 0 👍 — frustration vent, no official response |
| [#24580](https://github.com/openai/codex/issues/24580) — Codex app keeps launching `calc.exe` | **Closed** — Sandbox escape/rogue tool call launches Windows calculator; "On request" approval policy bypassed | 4 comments — alarming security-adjacent behavior |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#21311](https://github.com/openai/codex/pull/21311) — Preserve reopened descendants under read denies | Fixes `FileSystemSandboxPolicy` edge case where most-specific deny rules incorrectly override reopened paths | Open |
| [#24666](https://github.com/openai/codex/pull/24666) — API-key auth for remote exec-server registration | Enables `--remote` registration with `CodexAuth::ApiKey`, reducing Agent Identity friction for headless setups | Open |
| [#24639](https://github.com/openai/codex/pull/24639) — **Breaking**: remove installer flag inputs | Makes release selection environment-only; unifies automated install and updater input contracts | Open |
| [#24637](https://github.com/openai/codex/pull/24637) — Run standalone updates noninteractively | Fixes update flow where installer prompts block unattended managed installs | Open |
| [#24669](https://github.com/openai/codex/pull/24669) — Keep standalone web search schema within tool budget | Removes redundant command-family descriptions to prevent schema compaction from stripping nested argument guidance | Open |
| [#24658](https://github.com/openai/codex/pull/24658) — Remove obsolete goal continuation turn marker | Cleans up dead `continuation_turn_id` code post-#20523 heuristic removal | **Closed** |
| [#23514](https://github.com/openai/codex/pull/23514) — Box descendant resume future to avoid stack overflow | Reduces async stack pressure in subtree-resume path; fixes isolated test failure | **Closed** |
| [#23230](https://github.com/openai/codex/pull/23230) — Add `list_installable_plugins` tool | New `plugins` extension for discoverable plugin installation, gated behind `plugin_install_list_tool` | **Closed** |
| [#22866](https://github.com/openai/codex/pull/22866) — Persist sandbox security events | Adds bounded local audit trail for agent/security review workflows; separates storage from export plumbing | Open |
| [#24650](https://github.com/openai/codex/pull/24650) — Add `CODEX_ENV_FILE` hook persistence | Parity with Claude's `CLAUDE_ENV_FILE`; enables `SessionStart` hooks to persist `PATH`, virtualenv, conda across commands | Open |

---

## 5. Feature Request Trends

1. **MCP Server Lifecycle Management** — Lazy loading ([#2335](https://github.com/openai/codex/issues/2335)) and timeout configurability dominate; users want MCP startup decoupled from CLI readiness
2. **Compaction Extensibility** — Custom compaction hooks ([#23698](https://github.com/openai/codex/issues/23698)) and metadata visibility ([#24368](https://github.com/openai/codex/pull/24368)) reflect demand for user-controlled context windows
3. **Profile/Auth Switching** — Work/personal profile toggles ([#22026](https://github.com/openai/codex/issues/22026)), API-key remote auth ([#24666](https://github.com/openai/codex/pull/24666)), and Azure provider history preservation ([#20184](https://github.com/openai/codex/issues/20184)) show enterprise multi-tenant needs
4. **Subagent Orchestration** — Parent-assigned goals ([#24607](https://github.com/openai/codex/issues/24607)) and subagent scaling fixes ([#24668](https://github.com/openai/codex/issues/24668)) indicate growing multi-agent workflow adoption
5. **Auto-Recovery from Limits** — Auto-resume when rate limits reset ([#21073](https://github.com/openai/codex/issues/21073)) for unattended long tasks

---

## 6. Developer Pain Points

| Category | Pattern | Frequency |
|----------|---------|-----------|
| **Windows/WSL Stability** | Connectivity drops, auth token refresh failures, PowerShell intrusions, `calc.exe` sandbox leaks | Very high — 6+ active issues |
| **Observability / Logging** | Unbounded trace spans ([#23340](https://github.com/openai/codex/issues/23340)), missing progress indicators ([#10534](https://github.com/openai/codex/issues/10534)), "Thinking" stalls with no feedback | High |
| **Quality Regressions** | Perceived weekend slowdown ([#24649](https://github.com/openai/codex/issues/24649)), 30-min xhigh stalls ([#24260](https://github.com/openai/codex/issues/24260)), incomplete outputs | Emerging — vocal but unquantified |
| **Context/Compaction Reliability** | `service_tier` parameter bugs ([#21671](https://github.com/openai/codex/issues/21671), [#22876](https://github.com/openai/codex/issues/22876)), rate-limit errors during compact ([#19607](https://github.com/openai/codex/issues/19607)) | Recurring |
| **Remote / Dev Container Auth** | VS Code extension blank panels ([#24601](https://github.com/openai/codex/issues/24601)), Dev Container re-auth failures ([#24633](https://github.com/openai/codex/issues/24633)), SSH session persistence ([#22438](https://github.com/openai/codex/issues/22438)) | High |
| **App-Server Environment Consistency** | CWD-scoped env contracts ([#24638](https://github.com/openai/codex/issues/24638)), implicit daemon reuse vs. `-c` override spawning different topologies | Technical debt surfacing |

---

*Digest compiled from openai/codex GitHub activity on 2026-05-27.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-27

## Today's Highlights

The past 24 hours saw heavy activity around session reliability and credential management, with multiple PRs landing to fix PTY descriptor crashes and `refresh_token` persistence issues. Memory system quality and Auto Memory robustness emerged as a major theme with three related P2 issues filed. No new release was cut.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | Follow-up to behavioral evals initiative; 76 tests running across 6 Gemini models. Critical for measuring agent quality regressions at sub-system granularity. | 7 comments, maintainer-driven EPIC |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | Could dramatically reduce token waste and misaligned reads by using syntax-aware boundaries instead of line-based heuristics. | 7 comments, 1 👍; linked to tooling investigation |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | Severe UX regression—simple operations like folder creation hang indefinitely when delegated to generalist subagent. Workaround exists but degrades capability. | 7 comments, 8 👍; high user impact |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Silent failure mode: `codebase_investigator` claims success after hitting turn limits without analysis, corrupting downstream decision-making. | 6 comments, 2 👍; reliability concern |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | Anecdotal but widespread: custom skills (gradle, git) are ignored even for highly relevant tasks, suggesting routing/prompting gaps. | 6 comments; feature underutilization |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck with "Waiting input" | UI state desync—completed commands still appear active, blocking workflow. Affects simple, non-interactive commands. | 4 comments, 3 👍; frequent interruption |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | Linux compatibility gap; browser automation broken on modern compositors. | 4 comments, 1 👍; platform coverage |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction and reduce Auto Memory logging | Security: secrets reach model context before redaction; service-side logging of skills data. Part of Auto Memory hardening cluster. | 3 comments; privacy-sensitive |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | Surface or quarantine invalid Auto Memory inbox patches | Silent data loss: malformed patches skipped without visibility; aggregate dismiss only handles valid patches. | 3 comments; data integrity |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions indefinitely | Resource waste: unprocessed low-signal sessions resurface repeatedly, burning extraction cycles. | 3 comments; efficiency |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#22590](https://github.com/google-gemini/gemini-cli/pull/22590) | Include all Executing subagent tool calls in useToolScheduler state | Fixes state tracking for subagents that bypass approval and go straight to Executing; prevents orphaned UI states. | Open, help wanted |
| [#27383](https://github.com/google-gemini/gemini-cli/pull/27383) | Prevent eager tool wipe on network timeout | Atomic MCP tool refresh—retains existing tools when `discoverTools` fails transiently, eliminating "tool not found" errors. | Open |
| [#27453](https://github.com/google-gemini/gemini-cli/pull/27453) | Re-seed metadata when chat session file is recreated mid-session | Hardens `ChatRecordingService` against external cleanup/rotation by re-initializing files atomically. | Open |
| [#27465](https://github.com/google-gemini/gemini-cli/pull/27465) | Surface extension disable/enable feedback to terminal | UX fix: commands previously appeared broken due to silent debug-log-only output. | Open |
| [#27461](https://github.com/google-gemini/gemini-cli/pull/27461) | Suppress PTY resize EBADF errors | Matches upstream `node-pty` fix; prevents crashes during rapid resizes on exiting processes. | **Closed** |
| [#27463](https://github.com/google-gemini/gemini-cli/pull/27463) | Preserve refresh_token in file-based cacheCredentials | Completes fix for #21691: default file-based storage no longer loses refresh tokens (encrypted storage was fixed in #26924). | Open |
| [#27464](https://github.com/google-gemini/gemini-cli/pull/27464) | Support nested directories in Plan Mode | Enables `plans/tracks/feature-x/spec.md` structure; tools updated to resolve relative paths correctly. | Open |
| [#27371](https://github.com/google-gemini/gemini-cli/pull/27371) | Handle EBADF when PTY fd is stale on session resume | Fixes `gemini --resume` crash from stale descriptors; adds EBADF to ignored error codes in `resizePty()`. | Open, P1 |
| [#27389](https://github.com/google-gemini/gemini-cli/pull/27389) | Bypass routing classifiers to prevent orphaned function response errors | Fixes 400 Bad Request from history pruning breaking function call/response pairing. | **Closed** |
| [#27054](https://github.com/google-gemini/gemini-cli/pull/27054) | Windows image pasting and clipboard styling | Enables bracketed-paste image handling in Windows Terminal; adds visual styling for pasted images. | Open |

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple issues (#22745, #22746, #22747) investigate syntax-aware reads, search, and codebase mapping using tools like `ast-grep`, `tilth`, and `glyph`. Direction: reduce token noise and improve precision.

2. **Backgroundable local agents** — #22741 requests Ctrl+B backgrounding for non-blocking subagent tasks (exploration, linting). Aligns with Remote Agents Sprint 2 (#20303) infrastructure.

3. **Agent self-awareness** — #21432 wants the CLI to accurately explain its own flags, hotkeys, and execution modes to users—meta-cognition for better onboarding.

4. **Server-driven model management** — #20878 EPIC proposes `LoadCodeAssist` endpoint for remote model lists, deprecating client-side routing tables.

5. **Enhanced browser automation resilience** — #22232 requests session takeover and lock recovery for `browser_agent`, beyond current fail-fast behavior.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Session/state corruption** | #27453, #27461, #27371, #25166, #24935 | **Critical** — PTY/file descriptor lifecycle issues dominate; resume and resize paths particularly fragile |
| **Subagent reliability** | #21409, #22323, #21968, #22093, #22590 | **High** — Hangs, false success signals, ignored skills, and unauthorized launches erode trust in agent delegation |
| **Credential/token loss** | #27463, #21691 | **High** — Refresh token persistence gaps across storage backends force re-authentication |
| **Auto Memory quality** | #26525, #26523, #26522, #26516 | **Medium-High** — Security redaction gaps, silent patch failures, and infinite retry loops in new memory subsystem |
| **Terminal/PTY compatibility** | #21983 (Wayland), #26088 (F10 fallback), #27054 (Windows paste), #21924 (resize flicker) | **Medium** — Cross-platform terminal behavior highly variable; Windows and modern Linux compositors under-tested |
| **Tool scope/routing limits** | #24246 (>128 tools → 400 error), #27389 (orphaned function responses) | **Medium** — Scale limits and routing classifier edge cases break complex workflows |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-27

## Today's Highlights
GitHub Copilot CLI shipped **v1.0.55-1** with improved accessibility and extension visibility, while the community actively tracked down a cluster of Windows/WSL regressions introduced in recent 1.0.4x builds. The issue tracker shows heavy engagement around terminal rendering, input handling, and enterprise MCP registry configurations—signal that the CLI is seeing increased production adoption across diverse environments.

---

## Releases

### [v1.0.55-1](https://github.com/github/copilot-cli/releases/tag/v1.0.55-1)
| Change | Detail |
|--------|--------|
| **Improved** | Selection background contrast increased across all color themes for better visibility |
| **Improved** | `/env` now displays loaded extensions with their status and source |
| **Fixed** | Terminal bell no longer fires on turn completion unless explicitly enabled via config |
| **Fixed** | `/resume` picker no longer shows blank/placeholder entries ("bla") |

The `/env` extension visibility fix directly addresses [Issue #3479](https://github.com/github/copilot-cli/issues/3479), which was closed yesterday—showing responsive iteration on plugin ecosystem needs.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#3385](https://github.com/github/copilot-cli/issues/3385) | **WSL startup hang after 1.0.49 upgrade** — CLI appears stuck on launch in WSL2 6.6.114.1 | Critical blocker for Windows developers using WSL as primary environment; no clear workaround posted | 🔥 13 comments, 9 👍 — active troubleshooting |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | **Mouse scroll hijacked in Terminator** — scrolls through input history instead of agent output | Breaks fundamental terminal UX expectation; `--no-mouse` doesn't restore old behavior | 10 comments, 12 👍 — long-running, cross-terminal concern |
| [#3439](https://github.com/github/copilot-cli/issues/3439) | **TUI rendering lag in tmux on mintty/Cygwin (1.0.49 regression)** — bursts, freezes, spinner stutter | Confirmed regression from 1.0.43→1.0.48→1.0.49; affects Git Bash and legacy Windows terminal workflows | 7 comments; bisected by reporter, awaiting fix |
| [#2758](https://github.com/github/copilot-cli/issues/2758) | **Sub-agent model downgrade guard blocks intended model selection** | Cost-multiplier override silently prevents frontmatter/task-specified models; limits agent architecture flexibility | 6 comments, 2 👍 — enterprise/power-user feature gap |
| [#3436](https://github.com/github/copilot-cli/issues/3436) | **`/mcp search` constructs wrong URL for custom registries** — missing `/v0.1/` segment | Breaks self-hosted MCP registry integration for enterprise deployments; 404 on org-level settings | 5 comments, 1 👍 — clear bug with enterprise impact |
| [#3442](https://github.com/github/copilot-cli/issues/3442) | **Remote sessions disabled error in 1.0.51 despite no explicit policy** | Closed; caused confusion about enterprise policy propagation vs. local state | 5 comments, 10 👍 — high engagement, resolution unclear |
| [#3049](https://github.com/github/copilot-cli/issues/3049) | **File write failures in autopilot mode** — "create" tool unavailable during plan-only workflows | Permission model inconsistency between planning and execution phases | 3 comments, 1 👍 — workflow-breaking |
| [#3123](https://github.com/github/copilot-cli/issues/3123) | **`/research` cannot write its own report** — "create" tool unavailable to research agent | Research sub-agent lacks tool access that parent session has; defeats purpose of `/research` | 3 comments, 2 👍 — agent capability gap |
| [#1972](https://github.com/github/copilot-cli/issues/1972) | **IME input causes accidental submission** — Enter key collision between IME confirmation and prompt send | Accessibility/internationalization blocker for CJK users; no configurable submit key | 3 comments, **46 👍** — highest-voted open issue, long-neglected |
| [#3529](https://github.com/github/copilot-cli/issues/3529) | **"Copilot encountered an error" on PR reviews** — affects both CLI and GitHub UI | Suggests upstream service issue bleeding into CLI; paid Actions minutes wasted | 2 comments — emerging, needs triage |

---

## Key PR Progress

**No Pull Requests updated in the last 24 hours.** ([verify](https://github.com/github/copilot-cli/pulls))

This zero-PR state, combined with active issue closure (5 issues closed yesterday), suggests the team may be working from internal branches or prioritizing direct release cadence over public PR review for current sprint items.

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Agent model control & sub-agent flexibility** | [#2758](https://github.com/github/copilot-cli/issues/2758) (model override), [#3525](https://github.com/github/copilot-cli/issues/3525) (programmatic context/reasoning), [#3532](https://github.com/github/copilot-cli/issues/3532) (skills frontmatter) | High — three related requests in 48h show agent architecture maturation |
| **BYOK/multi-model provider expansion** | [#3282](https://github.com/github/copilot-cli/issues/3282) (multiple BYOK models), [#3250](https://github.com/github/copilot-cli/issues/3250) (BYOK crash), [#2705](https://github.com/github/copilot-cli/issues/2705) (Managed Identity) | Medium — enterprise Azure adoption pushing beyond single-model limitation |
| **MCP ecosystem hardening** | [#3436](https://github.com/github/copilot-cli/issues/3436) (registry URL), [#3486](https://github.com/github/copilot-cli/issues/3486) (scrollable tool list), [#3337](https://github.com/github/copilot-cli/issues/3337) (MCP tool visibility) | Medium — MCP feature is experimental and rough edges showing at scale |
| **Session persistence & observability** | [#1791](https://github.com/github/copilot-cli/issues/1791) (global history), [#3434](https://github.com/github/copilot-cli/issues/3434) (restart session loss), [#3525](https://github.com/github/copilot-cli/issues/3525) (programmatic session control) | Medium — operational maturity requests from production users |

---

## Developer Pain Points

### 🔴 Terminal Rendering & Input (Highest Frequency)
- **Windows/WSL/Cygwin/mintty**: Three distinct rendering regressions ([#3385](https://github.com/github/copilot-cli/issues/3385), [#3439](https://github.com/github/copilot-cli/issues/3439), [#3308](https://github.com/github/copilot-cli/issues/3308)) cluster around 1.0.49, suggesting a TUI library or terminal detection change with broad compatibility fallout.
- **Mouse/keyboard interaction**: Scroll behavior ([#2205](https://github.com/github/copilot-cli/issues/2205)), text selection ([#3526](https://github.com/github/copilot-cli/issues/3526)), copy/paste ([#3483](https://github.com/github/copilot-cli/issues/3483)), and IME ([#1972](https://github.com/github/copilot-cli/issues/1972)) all show active friction—indicates the custom TUI layer is fighting native terminal expectations.

### 🟡 Permission & Tool Availability Model
- Inconsistent `create`/`write` tool access across autopilot, `/research`, and plan-only workflows ([#3049](https://github.com/github/copilot-cli/issues/3049), [#3123](https://github.com/github/copilot-cli/issues/3123)) creates unpredictable agent behavior. Users cannot reason about when tools are available.

### 🟡 Enterprise Deployment Rough Edges
- MCP registry URL construction ([#3436](https://github.com/github/copilot-cli/issues/3436)), remote session policy propagation ([#3442](https://github.com/github/copilot-cli/issues/3442)), and Managed Identity gaps ([#2705](https://github.com/github/copilot-cli/issues/2705)) show the CLI's enterprise features lagging behind GitHub's platform ambitions.

### 🟢 Extension Ecosystem Growing Pains
- Lifecycle hook breakage ([#3508](https://github.com/github/copilot-cli/issues/3508)) and `/env` visibility ([#3479](https://github.com/github/copilot-cli/issues/3479)) were both fixed in 1.0.55-1, but the velocity of plugin-related issues suggests the extension API surface is still stabilizing.

---

*Digest compiled from [github/copilot-cli](https://github.com/github/copilot-cli) public activity. For real-time updates, watch the repository or subscribe to release notifications.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-27

## Today's Highlights

The Kimi Code CLI team shipped **v1.45.0** with improved tool call deduplication and shell UI polish, while the community is actively addressing parallel execution scalability through a new API key pool system. A notable bug fix landed for misleading 403 error messages that incorrectly blamed quota limits.

---

## Releases

**v1.45.0** — [PR #2373](https://github.com/MoonshotAI/kimi-cli/pull/2373)  
Released 2026-05-26. Syncs the `kimi-code` wrapper dependency and moves release notes under the new version. No breaking changes reported.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) | **Foreground subagents exhaust single API key rate limit** | Critical scalability blocker for multi-agent workflows — concurrent `coder`/`explore` subagents hit 429s and hang | Fresh (0 comments), but author immediately submitted fix PR |
| [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) | **OpenAI-compatible API endpoint** | Would unlock Cursor/IDE ecosystem integration without custom adapters; high ecosystem leverage | 3 comments, steady interest since May 9 |
| [#2141](https://github.com/MoonshotAI/kimi-cli/issues/2141) | **`reasoning_content` missing on assistant messages breaks DeepSeek V4** | Cross-provider compatibility gap — breaks multi-turn tool calls with thinking mode | 1 comment, 👍 1; niche but high severity for DeepSeek users |
| [#2367](https://github.com/MoonshotAI/kimi-cli/issues/2367) | **LLM provider 400 error on `ReadMediaFile`** | Opaque error with minimal repro info; indicates potential media handling regression | 👍 1, needs triage attention |
| [#2370](https://github.com/MoonshotAI/kimi-cli/issues/2370) | **Add Steer (⚡) button to Web UI queue panel** | UX gap in `kimi web` — queued messages lack interrupt/steer capability vs. terminal | Fresh, Windows PowerShell context |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | **Plan mode file paths not clickable in VSCode webview** | Breaks navigation flow in plan mode; Darwin/arm64 specific | 2 comments, VSCode extension quality issue |

---

## Key PR Progress

| # | PR | Status | Feature / Fix |
|---|-----|--------|---------------|
| [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) | **API key pool for parallel subagent execution** | 🟢 Open | Round-robin `APIKeyPool` allocator; directly addresses #2368 rate-limit contention |
| [#2372](https://github.com/MoonshotAI/kimi-cli/pull/2372) | **Toolset dedup with sparse reminders + canonical args** | 🔴 Closed | Smarter repeat detection, reduces token waste; makes `/clear` a true `/new` alias |
| [#2342](https://github.com/MoonshotAI/kimi-cli/pull/2342) | **Fix misleading "Quota exceeded" on all 403s** | 🔴 Closed | Stops blaming quota for auth/config errors; improves debuggability |
| [#2260](https://github.com/MoonshotAI/kimi-cli/pull/2260) | **`kill_ring_system_clipboard` config option** | 🔴 Closed | Opt-out of system clipboard pollution for Emacs-style kill ring users |
| [#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) | **Log hook task exceptions instead of silent discard** | 🔴 Closed | Fixes silent failures in PreToolUse/PostToolUse/SubagentStop hooks |
| [#1689](https://github.com/MoonshotAI/kimi-cli/pull/1689) | **ACP: return invalid params for unsupported session mode** | 🟢 Open | Protocol correctness fix for ACP (Agent Communication Protocol) edge cases |

---

## Feature Request Trends

1. **OpenAI API compatibility layer** — Repeated ask for standard base URL + schema to plug into Cursor, Continue.dev, and other IDE-native tools
2. **Web UI parity with terminal** — Steer/interrupt controls and clickable navigation elements lagging behind CLI experience
3. **Multi-tenancy / key rotation** — Moving from single-key to pooled or per-subagent credential isolation for scale

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Rate-limiting under concurrency** | #2368 + #2369 PR | 🔴 High — blocks production multi-agent use |
| **Opaque 400/403 errors** | #2367, #2342 | 🟡 Medium — error message quality inconsistent |
| **Cross-provider compatibility gaps** | #2141 (DeepSeek V4), #2208 (OpenAI schema) | 🟡 Medium — ecosystem lock-in friction |
| **VSCode extension polish** | #2317 | 🟢 Lower — papercut UX, not blocking |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-05-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-27

## Today's Highlights

The OpenCode team shipped multiple critical fixes for fallback system reliability and provider compatibility, including patches for empty task outputs and infinite API socket hangs that previously bypassed retry logic. On the feature front, there's active development around plugin request context passing and SDK CORS support, while the community continues to surface performance and sandboxing concerns at the top of the issue tracker.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT Models takes too long to respond | Core UX degradation with OpenAI's latest models (GPT 5.4 xhigh); inconsistent latency undermines production reliability | 55 comments, 39 👍 — highest engagement, users sharing timing logs and workarounds |
| [#29129](https://github.com/anomalyco/opencode/issues/29129) | OpenAI stream intermittently freezes in working state with high CPU | Streaming deadlock without crash = silent failure; burns CPU and requires manual restart, breaking automation workflows | 46 comments, 45 👍 — active debugging with strace/tcpdump traces |
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | Is there a way to sandbox the agent? | Security gap vs. competitors (Gemini CLI, Codex CLI use seatbelt); enterprise adoption blocker | 37 comments, 47 👍 — long-running request, users requesting macOS seatbelt equivalent and cross-platform sandboxing |
| [#16100](https://github.com/anomalyco/opencode/issues/16100) | Numpad keys not working in VS Code 1.110 integrated terminal | Accessibility/productivity regression for laptop users with numpad; terminal emulator compatibility gap | 30 comments, 18 👍 — confirmed reproducible, VS Code version-specific |
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction | Pricing economics misalignment; competitor tools likely already adjusted | 17 comments, 30 👍 — business-critical for OpenCode Go subscribers |
| [#19081](https://github.com/anomalyco/opencode/issues/19081) | reasoning_content stripped on replay, causing KV cache invalidation | Silent performance degradation for local inference; breaks reasoning model efficiency | 13 comments, 18 👍 — technical deep-dive on prompt caching internals |
| [#4279](https://github.com/anomalyco/opencode/issues/4279) | Failure to call tool due to extra space in tool name | Robustness issue with model output parsing; causes quota-burning loops | 11 comments — specific to Kimi K2 Thinking, needs parser hardening |
| [#18131](https://github.com/anomalyco/opencode/issues/18131) | Write tool called with invalid parameters | Tool schema validation gap with local models (Qwen 3.5 via LM Studio) | 10 comments, 3 👍 — local model ecosystem friction |
| [#29462](https://github.com/anomalyco/opencode/issues/29462) | Skills tool enumerates all discovered skills into system prompt with no upper bound | O(n) scaling failure for large skill libraries (100K skills); prompt bloat and cost explosion | 5 comments — architectural concern, needs pagination design |
| [#28362](https://github.com/anomalyco/opencode/issues/28362) | task() subagents unexpectedly require workspace billing with external providers | Unexpected cloud dependency for fully local setups; trust/privacy concern | 4 comments — billing architecture clarification needed |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#29048](https://github.com/anomalyco/opencode/pull/29048) | fix(tool): trigger fallback on empty task output | Closes #29054 and #24447; fixes silent failures when tasks return empty (rate limits, empty responses), enabling proper fallback chain execution | Open |
| [#29470](https://github.com/anomalyco/opencode/issues/29470) | fix(opencode): infinite API socket hangs bypass fallback system | Addresses socket hang without timeout by adding proper error propagation; companion to #29048 for fallback reliability | Closed (resolved) |
| [#29474](https://github.com/anomalyco/opencode/pull/29474) | fix(opencode): add LiteLLM Bedrock noop tools | Prevents Bedrock follow-up request rejections when replaying tool calls; fixes AWS provider compatibility | Open |
| [#29473](https://github.com/anomalyco/opencode/pull/29473) | feat(plugin): pass request context to provider fetch | Enables custom providers to access request-scoped metadata (auth, tracing, routing); experimental plugin API enhancement | Open |
| [#29472](https://github.com/anomalyco/opencode/pull/29472) | fix(opencode): route agent list by directory | Fixes #29468; allows web client to load project-local primary agents before workspace lookup | Open |
| [#29469](https://github.com/anomalyco/opencode/pull/29469) | fix(opencode): defer summarize default agent lookup | Closes #29277; uses last user message agent for summarization instead of hardcoded default, preserving context | Open |
| [#29467](https://github.com/anomalyco/opencode/pull/29467) | fix(opencode): require read before write overwrite | Closes #29451; enforces documented write tool contract (must read first), preventing accidental overwrites | Open |
| [#29466](https://github.com/anomalyco/opencode/pull/29466) | fix(opencode): resolve absolute glob roots | Closes #29437; fixes ripgrep cwd mismatch with absolute glob patterns | Open |
| [#29421](https://github.com/anomalyco/opencode/pull/29421) | feat(opencode): add single session status endpoint | Adds `GET /session/:sessionID/status` for lightweight status polling; reduces client overhead | Open |
| [#24865](https://github.com/anomalyco/opencode/pull/24865) | feat: add cors option to sdk ServerOptions | Closes #24715; enables CORS origin configuration in JS SDK for embedded/frontend integrations | Open |

---

## Feature Request Trends

1. **Sandboxing & Security** — Persistent demand for agent isolation (seatbelt equivalent, directory restrictions) spanning from 2025 to present; enterprise readiness gap vs. OpenAI Codex and Google Gemini CLI.

2. **Reasoning Model UX** — Requests for configurable reasoning block defaults (#29456 collapsed by default is tedious) and proper handling of reasoning tokens across conversation replay (#19081).

3. **Session Navigation** — `/tree` command for fork/branch navigation (#22067, 22 👍) and timestamp precision (#20406) indicate users building complex multi-branch workflows.

4. **Provider Economics Integration** — Rapid response to pricing changes (#28846 DeepSeek) and accurate model catalog maintenance (#27695 Xiaomi) expected as table stakes.

5. **Terminal/Input Compatibility** — Kitty protocol support (#29196), numpad in VS Code (#16100), multiplexer notifications (#29099) — TUI maturity across diverse terminal emulators.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Streaming reliability** | #29079, #29129, #29312, #29470 — OpenAI provider specifically slower and prone to hangs vs. alternatives | 🔴 Critical — affects daily workflow, no workaround |
| **Fallback system fragility** | #29054, #29470, #29048 — empty outputs and socket hangs bypass retry logic; only now being patched | 🔴 Critical — silent failures worst kind |
| **Tool call robustness** | #4279 (extra spaces), #18131 (invalid params), #15585 (free tier limits) — parser/schema edge cases with diverse models | 🟡 High — local model ecosystem friction |
| **Billing/cloud dependency surprises** | #28362 (subagents need workspace billing), #15585 (free limits unclear) — trust erosion for local-first users | 🟡 High — positioning vs. fully local tools |
| **Context/scaling limits** | #29462 (unbounded skills), #28355 (orchestration leakage), #19081 (KV cache invalidation) — architectural limits emerging at scale | 🟡 High — needs design-level fixes |
| **TUI/terminal compatibility matrix** | #16100, #29196, #29099, #29221 — growing surface of terminal emulator edge cases | 🟢 Moderate — workaround available (external terminal) |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-27

## Today's Highlights

The Pi team merged a critical fix for the persistent "Working..." spinner that has plagued interactive sessions (#4945), alongside Unicode-aware editor improvements using `Intl.Segmenter`. Meanwhile, the community continues pushing for better local LLM integration and session management primitives, with 14 PRs and 50 issues showing active development across TUI reliability, provider compatibility, and extension API surface.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` hangs on "Working..." with zero-usage aborted turns | Most-discussed bug (25 comments); breaks core interactive loop, requires Escape to recover | 16 👍, active debugging; [PR #5005](https://github.com/earendil-works/pi/pull/5005) merged with root cause identified |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | Official local LLM provider extension | 22 comments, 31 👍; dynamic model fetching from `{baseUrl}/models` would unlock Ollama/llama.cpp/LM Studio workflows | Long-standing request, blocked on provider architecture decisions |
| [#4984](https://github.com/earendil-works/pi/issues/4984) | Interactive mode crash on transient terminal EPIPE | `edit` tool calls crashing with `write EPIPE`—regression affecting daily users | No fix yet; users reporting increased frequency |
| [#4879](https://github.com/earendil-works/pi/issues/4879) | Expose `promptGuidelines` on `ToolInfo` | Extensions need runtime access to per-tool guidelines for proper context assembly | Small but precise API gap; awaiting core team review |
| [#4801](https://github.com/earendil-works/pi/issues/4801) | DeepSeek v4 pro `xhigh` reasoning_effort rejected on OpenRouter | Provider parameter mapping bug—`xhigh` valid per OpenRouter but rejected by Pi's validation | Affects power users on frontier models; workaround is `high` |
| [#3424](https://github.com/earendil-works/pi/issues/3424) | ChatGPT device code login for headless/SSH | SSH and CI workflows blocked by browser-only OAuth; [PR #4911](https://github.com/earendil-works/pi/pull/4911) in progress | Strong use-case; PR near completion |
| [#5035](https://github.com/earendil-works/pi/issues/5035) | Background subagents compete on Telegram `getUpdates` polling | HTTP 409 conflicts when child processes inherit `PI_CODING_AGENT_DIR` and discover `telegram.json` | Niche but breaking for automation workflows; needs env isolation |
| [#5046](https://github.com/earendil-works/pi/issues/5046) | Thinking level persists globally instead of session-scoped | Users want per-session reasoning control without mutating `~/.pi/agent/settings` | UX friction; likely quick fix |
| [#5018](https://github.com/earendil-works/pi/issues/5018) | Deterministic named session resumption/creation | `cmux` and multi-instance workflows broken—`pi` creates duplicate sessions, `--resume` is non-deterministic | Infrastructure gap for power users |
| [#5009](https://github.com/earendil-works/pi/issues/5009) | kimi-code bans potentially linked to Pi usage | 403 `permission_error` mass reports from kimi-code users; possible rate/behavioral detection | Community concern; no official response yet |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#5022](https://github.com/earendil-works/pi/pull/5022) | `fix(tui)`: `Intl.Segmenter` for Unicode word boundaries | Replaces brittle regex word movement with proper grapheme-aware segmentation; fixes CJK/editor navigation | **Merged** |
| [#4979](https://github.com/earendil-works/pi/pull/4979) | `fix(codex)`: timeouts for websockets | Adds 15s connect timeout and inactivity timeout matching Codex CLI behavior; related to #4945 hang mitigation | **Open** |
| [#4991](https://github.com/earendil-works/pi/pull/4991) | `fix(ai)`: disable hidden provider 429 retries | Stops infinite retry loops on `retry-after` measured in days (e.g., opencode go quota exhaustion) | **Merged** |
| [#5037](https://github.com/earendil-works/pi/pull/5037) | `fix(tui)`: JetBrains terminal capabilities | Declares true-color support for WebStorm/IDEA terminal; explicitly disables images/OSC 8 | **Open** |
| [#5032](https://github.com/earendil-works/pi/pull/5032) | `fix(tui)`: progressive enhancement keyboard negotiation | Fixes Zellij false-positive Kitty protocol detection; Alt and Shift+Enter restored | **Merged** |
| [#5030](https://github.com/earendil-works/pi/pull/5030) | `feat`: stream idle timeout watchdog | Revives #3019; adds `withStreamIdleTimeout()` and `StreamIdleTimeoutError` for hanging provider streams | **Merged** |
| [#5029](https://github.com/earendil-works/pi/pull/5029) | `fix(coding-agent)`: abort in-flight LLM on `AgentSession.dispose()` | Prevents orphaned HTTP requests during `switchSession`/`newSession`/`fork`/`clone` | **Open** |
| [#4911](https://github.com/earendil-works/pi/pull/4911) | `feat(ai)`: Codex device code login | Adds headless/SSH-friendly OAuth flow; closes #3424 | **Open** |
| [#5005](https://github.com/earendil-works/pi/pull/5005) | `fix(interactive)`: clear `workingVisible` on `agent_end` | Root fix for persistent "Working..." spinner; `stopWorkingLoader()` now resets state flag | **Merged** |
| [#4998](https://github.com/earendil-works/pi/pull/4998) | `feat`: inline skill mentions in editor | `/skill-name` anywhere in prompt loads skill as context constraint without full prompt replacement | **Merged** |

---

## Feature Request Trends

1. **Local/self-hosted LLM first-class support** — Dynamic model lists (#3357), Ollama/llama.cpp/LM Studio integration remains the top architectural gap
2. **Session lifecycle control** — Deterministic resumption (#5018), named sessions, session-scoped settings (#5046), and proper disposal (#5029)
3. **Headless/automation readiness** — Device code login (#3424/#4911), stdin/stdout reliability (#5031), background subagent isolation (#5035)
4. **Extension API completeness** — Typed settings schemas (#4981), `promptGuidelines` exposure (#4879), background task handles (#4850), legacy compatibility (#4996)
5. **Provider ecosystem breadth** — Anthropic Vertex (#4449), OpenRouter edge cases (#4943, #4801), custom base URL flexibility

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **TUI reliability** | Spinner hangs (#4945/#5005), keyboard protocol misdetection (#5033/#5032), EPIPE crashes (#4984), image rendering (#4883) | *Very high* — daily friction |
| **Provider parameter drift** | `reasoning_effort` mapping (#4801), context overflow detection (#4943), header encoding (#4927), session header naming (#4967) | *High* — each provider adds maintenance surface |
| **Installation/update confusion** | `pnpm`/`minimumReleaseAge` silent staleness (#4929), dependency bloat (#4966) | *Moderate* — onboarding friction |
| **Token/accounting accuracy** | Image token counting asymmetry (#4983), compaction edge cases (#4951) | *Moderate* — affects cost/performance |
| **Integration breakages** | kimi-code bans (#5009), Telegram polling conflicts (#5035), AGENTS.md 404 (#5041) | *Emerging* — ecosystem fragility |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-27

## Today's Highlights

The Qwen Code project is accelerating toward **v0.16 production-ready daemon mode** with a major branch merge (`daemon_mode_b_main` → `main`) landing this week and a flurry of architectural PRs targeting the `qwen serve` HTTP/SSE surface. Simultaneously, **memory pressure remains the dominant operational pain point**, with 8+ OOM-related issues active in the last 24h alone—suggesting the v0.16 release cycle will need significant hardening around V8 heap management before stable.

---

## Releases

| Version | Notes |
|---------|-------|
| **v0.16.1-nightly.20260526.e8b79d772** | Build fix: cleans stale TypeScript outputs before `tsc --build` to prevent TS5055 errors ([PR #4453](https://github.com/QwenLM/qwen-code/pull/4453)). Release commit for v0.16.1. |
| **sdk-typescript-v0.1.8-preview.1 / preview.0** | TypeScript SDK previews bundling CLI **0.16.1** (built from source) and fallback CLI **0.15.3** (stable from npm). |

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|--------------|----------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | Mode B feature-priority roadmap toward v0.16 production-ready | **OPEN** | The canonical tracking issue for daemon mode maturity; defines branching strategy and staged feature gates. 40 comments indicate active design iteration. | High engagement; referenced by multiple PRs |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | Daemon mode (`qwen serve`): proposal & open decisions | **OPEN** | Foundational 6-chapter design series by core contributor `wenshao`. Still the "source of truth" for architectural decisions. | Sustained attention; 25 comments |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | Daemon capability gaps & prioritized backlog (post v0.16-alpha) | **OPEN** | Concrete gap analysis of what's missing from HTTP/SSE surface after slash-command passthrough. Directly feeds implementation PRs like #4552. | Recently opened; becoming central hub |
| [#4149](https://github.com/QwenLM/qwen-code/issues/4149) | FATAL ERROR: Ineffective mark-compacts near heap limit — JS heap OOM | **CLOSED** | Representative of the dominant crash class. Detailed GC logs show heap at ~4GB limit before Mark-Compact failure. | Part of cluster of OOM issues; 12 comments |
| [#4351](https://github.com/QwenLM/qwen-code/issues/4351) | OOM with local Qwen 3.6 + llama.cpp under Linux | **CLOSED** | Cross-component memory pressure: local inference + Qwen Code competing for RAM. Reproducible scenario. | 7 comments; 👍1 |
| [#4534](https://github.com/QwenLM/qwen-code/issues/4534) | Support global `~/.agents/AGENTS.md` to prevent cross-tool duplicate prompting | **OPEN** | Ecosystem-level UX request: multi-agent CLI users (Claude Code, Goose, Kilo, etc.) need shared instruction layers. | 4 comments; emerging pattern |
| [#4542](https://github.com/QwenLM/qwen-code/issues/4542) | L2 capability分层 — DaemonWorkspaceService for file/auth/agents/memory | **OPEN** | Architecture proposal to unify 4 missing capability categories for `/acp` REST equivalence. Design-first approach. | 2 comments; needs review |
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | Rider IDE cannot log in to Qwen Code (OAuth redirect loop) | **OPEN** | JetBrains ecosystem blocker; affects enterprise Aliyun token plan users. | 2 comments; needs-info |
| [#4361](https://github.com/QwenLM/qwen-code/issues/4361) | Global hooks in `~/.qwen/hooks` ignored | **OPEN** | Configuration gap: user expectation mismatch on hook scoping. | 3 comments; needs-information |
| [#4116](https://github.com/QwenLM/qwen-code/issues/4116) | Critical error — session crash with Cyrillic prompt | **CLOSED** | Internationalization/encoding edge case in interactive mode. | 14 comments; resolved |

---

## Key PR Progress

| # | Title | Author | Feature / Fix |
|---|-------|--------|-------------|
| [#4490](https://github.com/QwenLM/qwen-code/pull/4490) | Merge `daemon_mode_b_main` into main — F1-F4 prereq + F5 alpha docs | `doudouOUC` | **Integration milestone**: Periodic merge of Mode B feature branch; unblocks v0.16-alpha documentation batch |
| [#4472](https://github.com/QwenLM/qwen-code/pull/4472) | ACP Streamable HTTP transport at `/acp` [RFD #721] | `chiga0` | **Core protocol**: Official ACP transport as second northbound API; shared session bus with REST+SSE |
| [#4552](https://github.com/QwenLM/qwen-code/pull/4552) | Runtime MCP server add/remove (T2.8 #4514) | `doudouOUC` | **Daemon ops**: Mutate-gated HTTP routes for live MCP registry changes without daemon restart |
| [#4555](https://github.com/QwenLM/qwen-code/pull/4555) | Serve-bridge MCP server & rename `mcp` → `daemon-mcp` | `jifeng` | **Ecosystem bridge**: Stdio MCP bridge for Qoder, Claude Desktop, Cursor to connect to `qwen serve` |
| [#4507](https://github.com/QwenLM/qwen-code/pull/4507) | Server-pushed `followup_suggestion` SSE event for webui | `doudouOUC` | **UX parity**: Ghost-text "next question" suggestions pushed to web clients; mirrors CLI behavior |
| [#4510](https://github.com/QwenLM/qwen-code/pull/4510) | Cross-client sync follow-up cleanup | `chiga0` | **Reliability**: Epoch-reset resync, approval-mode serialization, catch-up indicator fixes |
| [#4511](https://github.com/QwenLM/qwen-code/pull/4511) | Daemon side-channel coordination design (A1/A2/A4/A5) | `chiga0` | **Design docs**: Docs-only proposal for follow-up architectural patterns; review-before-implement |
| [#4432](https://github.com/QwenLM/qwen-code/pull/4432) | Telemetry Phase 4b: retry visibility for `qwen-code.llm_request` | `doudouOUC` | **Observability**: Per-attempt HTTP-status retry telemetry; previously invisible `retryWithBackoff` path |
| [#4520](https://github.com/QwenLM/qwen-code/pull/4520) | Truncate model-facing tool output | `Jerry2003826` | **OOM mitigation**: Hard limit on tool output strings; spills to temp file with `[CONTENT TRUNCATED]` summary |
| [#4525](https://github.com/QwenLM/qwen-code/pull/4525) | Include response tokens in prompt estimate | `Jerry2003826` | **Compaction accuracy**: GeminiChat carries previous response token count into next prompt estimate for better auto-compaction decisions |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Daemon/Server Mode (`qwen serve`)** | #4175, #3803, #4514, #4542, #4472, #4552, #4507, #4555 | 🔥 **Highest** — Core v0.16 theme; REST/SSE/ACP transport unification, runtime MCP management, web UI parity |
| **Cross-tool Agent Configuration** | #4534 (`~/.agents/AGENTS.md`) | Emerging — Ecosystem interoperability becoming explicit requirement |
| **Notification/Hook System** | #2922 (completion/approval hooks), #4361 (global hooks broken), #4377 (prompt expansion hooks PR) | Active — Lifecycle hooks expanding in scope |
| **ACP Protocol Compliance** | #4503 (Message ID v2 Draft), #4472 (RFD #721 transport) | Tracking — Aligning with evolving Agent Client Protocol standards |
| **Auto-improve / Autonomous Loops** | #4161 (`/auto-improve` slash command) | Experimental — Session-scoped self-improvement with local verification |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Status |
|------------|-----------|----------|--------|
| **V8 Heap OOM / Memory Exhaustion** | 🔥🔥🔥 **Critical mass** — 8+ issues in 24h, multiple duplicates closed | **P0** | Partially mitigated by #4520 (tool output truncation), #4525 (better token estimation), #4526 (bounded compression retries); root cause likely in long-session retention + YOLO mode amplification |
| **Daemon Mode Authentication & OAuth** | Moderate — #4493 (Rider), #4323 (Anthropic key), #4361 (hooks auth) | **P1** | Fragmented; IDE integrations and global config scoping inconsistent |
| **MCP Transport Compatibility** | Moderate — #4326 (Spring AI GET SSE), #4521 (compatibility wrapper PR) | **P1** | Being addressed reactively; spec drift between MCP SDK and server implementations |
| **CLI UI Test Flakiness** | Low but persistent — #4429 | **P2** | CI noise; cross-platform timing issues in vitest assertions |
| **Model Provider Edge Cases** | Low — #4518 (DeepSeek cache prefix), #4519 (output language in side queries) | **P2** | Active polish by `Jerry2003826`; provider-specific normalization ongoing |

---

*Digest compiled from github.com/QwenLM/qwen-code activity for 2026-05-26/27.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-27

## 1. Today's Highlights

The project completed its **rebrand to CodeWhale** with v0.8.46–v0.8.47, shipping deprecation shims for legacy `deepseek`/`deepseek-tui` binaries that will be removed in v0.9.0. Meanwhile, v0.8.47 landed substantial community contributions including a critical **deadlock fix** (RwLock→Semaphore), **composer text selection with mouse/keyboard support**, and **auto-loading of project-level `AGENTS.md`** without requiring `/anchor`. The maintainer also closed a wave of infrastructure issues around Nix builds, Homebrew packaging, and state directory migration from `~/.deepseek` to `~/.codewhale`.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.8.46** | Official rebrand to **CodeWhale**; legacy binaries `deepseek`/`deepseek-tui` now print deprecation warnings and forward to `codewhale`/`codewhale-tui`; removal scheduled for v0.9.0. See [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md). |
| **v0.8.47** | Harvested **9 community PRs**: deadlock fix (PR #1856), composer text selection + copy/cut (PR #2228), loop guard halt reporting (PR #1859), YOLO mode env var fix (PR #1870), auto model state restoration (PR #1885), transcript copy without visual wraps (PR #1906), configurable DeepSeek base URL (PR #1967), macOS title layout fix (PR #1837), and completion marker `[✓]` localization (PR #1935). Plus project context tracing and `AGENTS.md` auto-loading. |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|---------------|-------------------|
| [#1579](https://github.com/Hmbown/CodeWhale/issues/1579) | 这个颜色真的很丑 (These colors are really ugly) | 🟢 OPEN | Highest-comment open issue (7 comments); UI theming remains a persistent pain point for Chinese users. No maintainer response yet. | User-driven aesthetic complaints; no consensus on alternative palette |
| [#1871](https://github.com/Hmbown/CodeWhale/issues/1871) | QoL: taskbar progress, animated title spinner, and configurable completion sound | 🟢 OPEN | 4 comments; addresses async UX gap—users alt-tabbing away from long model runs lose all progress visibility. | Well-scoped, +1 upvote; fits broader "background awareness" trend |
| [#1934](https://github.com/Hmbown/CodeWhale/issues/1934) | How to copy previous command? | 🔴 CLOSED | Closed with 4 comments; reveals discoverability failure in history interaction patterns. | Resolved via documentation/UX clarification |
| [#2165](https://github.com/Hmbown/CodeWhale/issues/2165) | TUI panic: end byte index is not a char boundary (CJK) | 🔴 CLOSED | Critical Windows+CJK crash; byte-index truncation in `ui.rs:1492` affects all CJK users. | Fast turnaround; root cause in string slicing logic |
| [#2177](https://github.com/Hmbown/CodeWhale/issues/2177) | Community PR pipeline: document review expectations, CI gates, and autonomous-ready workflow | 🔴 CLOSED | Maintainer-authored; acknowledges 40+ open PRs and first-time Rust contributor friction. | Meta-infrastructure; signals scaling challenges |
| [#2104](https://github.com/Hmbown/CodeWhale/issues/2104) | Homebrew distribution: failed to spawn `codewhale` | 🔴 CLOSED | Rebrand broke Homebrew PATH resolution; deprecation shim couldn't find new binary. | Packaging regression; fixed in v0.8.47 cycle |
| [#1978](https://github.com/Hmbown/CodeWhale/issues/1978) | Validate OpenRouter-compatible custom base_url reasoning/cache support | 🟢 OPEN | 3 comments; DeepSeek-native vs. OpenRouter feature parity matrix shows gaps in reasoning_effort and cache pricing. | Power-user infrastructure; blocks vendor portability |
| [#1806](https://github.com/Hmbown/CodeWhale/issues/1806) | Sub-agent 120s API timeout renders agent_open nearly unusable | 🟢 OPEN | 3 comments; parallel sub-agents failing en masse on real workloads (280-line document → 5 SOPs). | Core feature broken at scale; no fix committed |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | TUI freeze on Windows (crossterm poll) | 🟢 OPEN | 3 comments with logs + thread-state analysis; intermittent complete UI lockup on Win11. | High-quality bug report; root cause elusive |
| [#2156](https://github.com/Hmbown/CodeWhale/issues/2156) | Feat: Support global ~/.agents/AGENTS.md rules | 🟢 OPEN | 2 comments; extends project-level AGENTS.md to home directory for cross-project consistency. | Community PR #2236 opened in response |

---

## 4. Key PR Progress

| # | Title | Author | Feature/Fix |
|---|-------|--------|-------------|
| [#2236](https://github.com/Hmbown/CodeWhale/pull/2236) | feat: read global AGENTS.md from ~/.agents/ | [mvanhorn](https://github.com/mvanhorn) | Vendor-neutral global agent instructions; falls back from `~/.claude/CLAUDE.md` precedent |
| [#2235](https://github.com/Hmbown/CodeWhale/pull/2235) | feat(/new): add new session command | [reidliu41](https://github.com/reidliu41) | Explicit `/new [--force]` for fresh saved sessions; disambiguates `/clear` behavior |
| [#1856](https://github.com/Hmbown/CodeWhale/pull/1856) | fix(tools): replace cross-await RwLock with Semaphore | [Fire-dtx](https://github.com/Fire-dtx) | **Critical deadlock fix**—eliminates re-entrant tool lockups and serial↔parallel blocking |
| [#2228](https://github.com/Hmbown/CodeWhale/pull/2228) | feat(composer): mouse + keyboard text selection with copy/cut | [imkingjh999](https://github.com/imkingjh999) | Mouse drag, Shift+arrows, Ctrl+C/X, word-jump; rebased from #1726 |
| [#2233](https://github.com/Hmbown/CodeWhale/pull/2233) | build: v0.8.47 — deadlock fix, composer text selection, project context tracing | [Hmbown](https://github.com/Hmbown) | Maintainer rollup of 16 commits harvesting 9 community PRs |
| [#1906](https://github.com/Hmbown/CodeWhale/pull/1906) | fix(tui): copy transcript selections without visual wraps | [knqiufan](https://github.com/knqiufan) | Preserves logical newlines while stripping TUI soft-wrap artifacts in clipboard |
| [#1967](https://github.com/Hmbown/CodeWhale/pull/1967) | feat(tui): support configurable DeepSeek base URL in /config | [cyq1017](https://github.com/cyq1017) | Persisted-only setting with restart requirement; avoids hot-reload complexity |
| [#1837](https://github.com/Hmbown/CodeWhale/pull/1837) | fix: 修复 macOS 终端标题悬浮居中，改为贴顶布局 | [PurplePulse](https://github.com/PurplePulse) | macOS title vertical alignment fix (floating→top-fixed) |
| [#1935](https://github.com/Hmbown/CodeWhale/pull/1935) | feat(tui): replace [x] with [✓] completion marker | [IIzzaya](https://github.com/IIzzaya) | Localization polish for Chinese users ("more Chinese style lol") |
| [#2062](https://github.com/Hmbown/CodeWhale/pull/2062) | feat(tui): persist permission rules from approval prompts | [greyfreedom](https://github.com/greyfreedom) | Typed execpolicy persistence directly from tool approval UI with preview |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Global/local AGENTS.md hierarchy** | Issues #2156, #2227; PR #2236 | 🔥 High — converging on `~/.agents/AGENTS.md` → project `AGENTS.md` → `/anchor` override |
| **Background operation awareness** | Issue #1871 (taskbar progress, sounds), #1927 (input stall) | Medium — async UX gaps while model runs |
| **Vendor-agnostic provider support** | Issues #1978 (OpenRouter), #2169 (vLLM reasoning_effort), #1945 (loongarch64) | High — users running private endpoints, non-DeepSeek infra |
| **Windows stability & CJK correctness** | Issues #2165, #1812, #1720, #2134 | Critical — platform-specific bugs dominating open issues |
| **Session lifecycle clarity** | PR #2235 (`/new`), ambiguity around `/clear` vs. new session | Medium — power users want explicit control |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Status |
|------------|-----------|----------|--------|
| **Rebrand migration friction** | Homebrew (#2104, #2229), npm (#1914, #2222), Nix (#2221, #2223), state dir (#2231) | 🔴 High | Mostly resolved in v0.8.47; `~/.deepseek`→`~/.codewhale` migration explicit |
| **Windows TUI freezes/panics** | #1812 (crossterm poll freeze), #2165 (CJK panic), #1720 (arrow key behavior) | 🔴 High | Partial fixes; #1812 root cause still open |
| **Sub-agent reliability at scale** | #1806 (120s timeout), #2157 (deadlocks spawning 7–10 agents) | 🔴 High | Deadlock fixed (#1856); timeout issue persists |
| **Clipboard/selection broken on niche platforms** | #1920 (niri/Wayland), #1934 (history copy), #2134 (paste triggers submit) | 🟡 Medium | Composer selection fixed (#2228); Wayland niri still open |
| **Large project performance** | #1827 (267GB project → "hello" freezes) | 🟡 Medium | No fix committed; indexing/traversal bottleneck |
| **Currency/display inconsistency (zh-Hans)** | #1901 (USD vs. CNY in /config) | 🟢 Low | Open; localization debt |

---

*Digest compiled from [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) activity 2026-05-26→2026-05-27.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*