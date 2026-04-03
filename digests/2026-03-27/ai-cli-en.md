# AI CLI Tools Community Digest 2026-03-27

> Generated: 2026-03-27 00:11 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Report — 2026-03-27

## 1. Ecosystem Overview

The AI CLI tool landscape has matured into a competitive six-player market with distinct architectural philosophies: Rust-based systems programming (OpenAI Codex), TypeScript/Node.js rapid iteration (Claude Code, Gemini CLI, OpenCode, Qwen Code), and IDE-integrated experiences (GitHub Copilot CLI, Kimi Code). All tools now converge on MCP (Model Context Protocol) as the interoperability standard, while differentiation increasingly occurs through multi-agent orchestration, permission system sophistication, and enterprise deployment flexibility. The pace of innovation remains high with 8 releases across 5 tools in 24 hours, though stability concerns—particularly around terminal UI reliability, memory management, and sandbox brittleness—dominate community feedback across all platforms.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 10 tracked (high-engagement) | 10 open | v2.1.84–85 shipped | Rapid-fire releases; Agent Teams stress-testing; MCP flexibility expansion |
| **OpenAI Codex** | 10 tracked | 8 open, multiple merged | rust-v0.117.0 stable | Plugin ecosystem launch; major crate modularization (MCP extraction) |
| **Gemini CLI** | 10 tracked | 10 open, 1 merged | v0.35.2 + v0.36.0-preview.4 | P0 fixes for infinite loops; memory optimization (280MB heap reduction) |
| **GitHub Copilot CLI** | 10 tracked | 2 (1 merged) | v1.0.12 + v1.0.12-2 | Terminal UI fixes; plugin hook enhancements |
| **Kimi Code CLI** | 5 tracked | 8 open | No release | ACP authentication rewrite; lifecycle hooks system |
| **OpenCode** | 10 tracked | 11 open | v1.3.3 shipped | TUI performance; Windows ARM64 support; infinite loop fix |
| **Qwen Code** | 10 tracked | 10 open (2 merged) | v0.13.1-preview.0 | Hooks system shipped; Windows permission fixes; messaging integrations |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|:---|:---|:---|
| **MCP Ecosystem Maturity** | Claude Code, OpenAI Codex, Gemini CLI, Kimi Code, Qwen Code | Server discovery reliability, pagination compliance, OAuth/auth flows, schema standardization (Kimi #1595 "Moonshot Flavored JSON Schema" rejection of valid MCP tools) |
| **Multi-Agent/Subagent Orchestration** | Claude Code, OpenCode, Qwen Code, Gemini CLI | Configuration inheritance (Claude #32368), plan mode integrity (Gemini #23858), parent session coordination (OpenCode #13321), subagent diff confirmation (Qwen #2631) |
| **Permission System Granularity** | Claude Code, OpenAI Codex, Qwen Code, Kimi Code | Bypass options for CI/CD (`--dangerously-skip-permissions` regressions), hook-based risk assessment (Bark plugin), human-readable labels (Qwen merged), persistent Windows approvals |
| **Terminal UI Stability** | All tools | Flickering/scrolling (Copilot #239, #1584), infinite re-render loops (Gemini #23948), memory bloat (Gemini 280MB heap), copy-paste reliability (Copilot, OpenCode) |
| **Session/Memory Management** | Claude Code, Gemini CLI, OpenCode, Kimi Code | Cross-directory session preservation (#39148), manual consolidation (`/dream`), global vs. project routing (Gemini #22819), archived session viewing (OpenCode #6680) |
| **Windows Platform Parity** | All except (possibly) Codex | PowerShell preview (Claude), standalone installer (Codex #13993), ARM64 support (OpenCode #4340 closed), permission persistence (Qwen #2669), clipboard conflicts |
| **IDE Integration Depth** | Copilot CLI, Kimi Code, Qwen Code, OpenCode | ACP protocol stability, VS Code extension reliability, auto-reconnect logic, LSP documentation |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target Users | Technical Approach |
|:---|:---|:---|:---|
| **Claude Code** | Enterprise multi-agent workflows, permission sophistication | Teams, DevOps, security-conscious enterprises | Maturest permission hooks system; Agent Teams architecture; rapid iteration on MCP flexibility |
| **OpenAI Codex** | Systems performance, plugin ecosystem, Rust reliability | Performance-sensitive developers, plugin authors | Rust codebase with aggressive modularization; first-class plugin sync; sandbox security hardening |
| **Gemini CLI** | Memory efficiency, SDD/spec-driven development, Google ecosystem | Google Cloud users, structured workflow adopters | TypeScript with V8 optimization focus; `/spec` and `/plan` workflow primitives; ACP for IDE integration |
| **GitHub Copilot CLI** | IDE-adjacent experience, GitHub ecosystem integration | Existing Copilot subscribers, VS Code users | Tighter GitHub service integration; but terminal UI instability suggests architectural debt |
| **Kimi Code CLI** | ACP protocol leadership, lifecycle observability | IDE plugin developers, enterprise tool builders | Wire protocol evolution; comprehensive hook system (13 events); hierarchical AGENTS.md configuration |
| **OpenCode** | Provider flexibility, desktop/TUI parity, internationalization | Multi-model users, China market, desktop-first workflows | Bun/Node runtime; embedded WebUI; broad provider support (Kimi, ZHIPU, Anthropic, NVIDIA) |
| **Qwen Code** | Hooks extensibility, messaging platform integration, China enterprise | Alibaba Cloud ecosystem, WeChat/Telegram workflow users | Rapid hooks parity with Claude Code; channels feature for notifications; ARM64 server support |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **Highest Momentum** | Claude Code, OpenAI Codex, Gemini CLI | Claude: 2 releases/24h, 315👍 on XDG issue, active Agent Teams production use; Codex: plugin ecosystem launch fulfills #8512 (83👍), major architectural refactoring; Gemini: P0 fixes for stability, 280MB memory optimization in progress |
| **Active Iteration** | OpenCode, Qwen Code | OpenCode: 11 PRs, Windows ARM64 milestone, TUI plugin system; Qwen: hooks system shipped, 2 PRs merged, messaging integrations expanding |
| **Stabilizing/Consolidating** | Kimi Code, Copilot CLI | Kimi: ACP auth rewrite (foundational), but fewer issues suggests smaller user base or less production deployment; Copilot: version confusion bugs (#2331), terminal UI issues dominant but fix velocity lower (2 PRs/24h) |

**Maturity Signals**: Claude Code shows deepest production scarring (permission system edge cases, multi-agent inheritance bugs); OpenAI Codex demonstrates systems engineering discipline (crate extraction, protocol compliance); Gemini CLI exhibits resource-constrained optimization focus typical of Google infrastructure teams.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|:---|:---|:---|
| **MCP as Universal Glue** | All tools implementing; Codex extracting `codex-mcp` crate; Claude expanding env-var flexibility; Kimi ACP auth for MCP servers | Standardized tool ecosystem reduces vendor lock-in; expect MCP server marketplace emergence |
| **Permission Systems as Differentiator** | Hook-based risk assessment (Bark), human-readable labels (Qwen), conditional filtering (Claude v2.1.85), lifecycle hooks (Kimi) | Enterprise adoption requires auditability and policy enforcement; compliance automation becoming table stakes |
| **Multi-Agent Architecture Stress** | Configuration inheritance gaps (Claude #32368), plan mode violations (Gemini #23858), subagent coordination fixes (multiple tools) | Single-agent reliability is solved problem; multi-agent orchestration is next complexity frontier |
| **Memory/Context Window Optimization** | Gemini 280MB heap reduction, Claude conversation compaction deadlocks (#20696), Codex context targeting bugs (#8648), Qwen token consumption anomalies (#2685) | Long-context models expose client-side inefficiencies; compression and lifecycle management critical for cost control |
| **Windows as Competitive Battleground** | ARM64 support (OpenCode), PowerShell preview (Claude), standalone installer demand (Codex #13993), permission persistence (Qwen) | Enterprise penetration requires first-class Windows support; historical Unix-first bias creating adoption friction |
| **Terminal UI as Unsolved Problem** | Flickering, scrolling chaos, copy-paste regressions across Copilot, Gemini, OpenCode | TUI engineering harder than expected; potential opportunity for shared terminal component libraries |
| **IDE Protocol Convergence** | ACP (Kimi, Gemini, Qwen), LSP documentation requests, VS Code extension stability focus | CLI tools becoming IDE backends; protocol standardization may follow MCP pattern |

---

*Report compiled from 2026-03-27 community digests. Data represents 24-hour GitHub activity windows.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of March 27, 2026*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents; prevents orphan words, widow paragraphs, and numbering misalignment. Addresses universal document generation pain points. |
| 2 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and actionability; ensures every instruction is executable within a single conversation. Focus on practical design guidance. |
| 3 | **skill-quality-analyzer** + **skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across structure, documentation, security patterns, and best practices. Five-dimension quality scoring system. |
| 4 | **ODT** (OpenDocument) | [#486](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Creation, template filling, and HTML parsing for ISO-standard ODT files. Bridges LibreOffice/Collabora/Google Docs workflows with Claude Code. |
| 5 | **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents; maintains context across conversations via `proactive_context` calls and structured memory retrieval. |
| 6 | **roadmap-pilot** | [#536](https://github.com/anthropics/skills/pull/536) | 🟡 Open | Incremental codebase cleanup autopilot; executes one task per session to prevent context overflow on large refactoring jobs. |
| 7 | **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step systematic audit for orphaned code, unused files, documentation gaps, and infrastructure bloat. Produces `CODEBASE-STATUS.md` as source of truth. |
| 8 | **SAP-RPT-1-OSS** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data. Enterprise ERP bridge. |

---

## 2. Community Demand Trends

Derived from high-engagement Issues, ranked by comment volume and 👍 reactions:

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Skill reliability & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) — community skills impersonating `anthropic/` namespace | Governance and provenance verification systems |
| **Testing & quality automation** | [#723](https://github.com/anthropics/skills/pull/723) `testing-patterns` skill; [#556](https://github.com/anthropics/skills/issues/556) evaluation tooling bugs | Comprehensive test generation, evaluation frameworks, and CI/CD integration |
| **MCP interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#369](https://github.com/anthropics/skills/issues/369) MCP Apps support | Skills as MCP servers; protocol-level API exposure |
| **Enterprise/SSO compatibility** | [#532](https://github.com/anthropics/skills/issues/532), [#29](https://github.com/anthropics/skills/issues/29) Bedrock support | Removal of API key dependencies; cloud-native deployment |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments) — policy enforcement, threat detection, audit trails | Production-grade agent oversight patterns |
| **Skill management infrastructure** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments, 1 👍), [#189](https://github.com/anthropics/skills/issues/189) (4 comments, 6 👍) — duplicate skills, data loss | Robust skill versioning, backup, and deduplication |

---

## 3. High-Potential Pending Skills

Active PRs with demonstrated community interest, likely to merge pending review:

| Skill | PR | Why It Stands Out |
|:---|:---|:---|
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses 25% community health score; foundational for contributor onboarding |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 + Veo 3.1 integration; fills multimedia generation gap |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Novel economic layer for AI services; natural language payment discovery |
| **claude-obsidian-reporter** | [#664](https://github.com/anthropics/skills/pull/664) | Git-to-Obsidian workflow automation; personal knowledge management bridge |
| **Buildr (Telegram bridge)** | [#419](https://github.com/anthropics/skills/pull/419) | Mobile control surface for Claude Code; one-command setup |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack coverage; AAA pattern, Testing Library, React patterns |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability infrastructure** — spanning skill evaluation frameworks, trust boundary verification, persistent memory systems, and enterprise-compatible deployment patterns — as users transition from experimental Skills to mission-critical agent workflows.

---

---

# Claude Code Community Digest — 2026-03-27

## Today's Highlights

Anthropic shipped two rapid-fire releases (v2.1.84–85) adding PowerShell preview support for Windows and expanding MCP server flexibility with environment-variable-driven headers and conditional hook filtering. Meanwhile, the community is actively stress-testing the new Agent Teams feature, surfacing inheritance bugs and permission-system edge cases that suggest the multi-agent architecture is seeing real production use.

---

## Releases

| Version | Key Changes |
|--------|-------------|
| **v2.1.85** | MCP `headersHelper` scripts now receive `CLAUDE_CODE_MCP_SERVER_NAME` and `CLAUDE_CODE_MCP_SERVER_URL` env vars, enabling one helper to serve multiple servers; hooks gain conditional `if` fields using permission-rule syntax (e.g., `Bash(git *)`) |
| **v2.1.84** | PowerShell tool enters opt-in preview on Windows; new `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` env vars allow overriding effort/thinking capability detection for pinned default models |

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#20696](https://github.com/anthropics/claude-code/issues/20696) | Conversation compaction deadlocks chats (claude.ai regression) | **Critical reliability issue** affecting web/mobile users since January; causes unrecoverable session hangs | 56 comments, 8 👍 — high engagement, external reporter |
| [#1455](https://github.com/anthropics/claude-code/issues/1455) | Does not respect XDG Base Directory spec | **Long-standing Linux hygiene issue**; violates freedesktop standards, clutters `$HOME` | 53 comments, 315 👍 — one of the highest-voted open issues |
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | Oversized image permanently breaks conversation | **Data-loss scenario**: single large PNG corrupts chat state with no recovery path | 29 comments, 34 👍 — has repro, affects core UX |
| [#39381](https://github.com/anthropics/claude-code/issues/39381) | VS Code "Not responding" offers no stop/recover action | **UX failure in IDE integration**: modal deadlock forces session kill, losing progress | 28 comments, 20 👍 — fresh, high-impact |
| [#33587](https://github.com/anthropics/claude-code/issues/33587) | Auto mode temporarily unavailable | **Regression in v2.1.74**: core interaction mode broken via Shift+Tab and settings | 23 comments, 37 👍 — macOS-specific, widespread reports |
| [#36168](https://github.com/anthropics/claude-code/issues/36168) | Bypass/dangerously skip permissions broken post-v2.1.77 | **Automation breakage**: CI/CD and sandbox workflows broken by permission system changes | 16 comments, 15 👍 — enterprise-relevant |
| [#32368](https://github.com/anthropics/claude-code/issues/32368) | Agent Teams: teammates don't inherit model config | **Multi-agent architecture gap**: custom model endpoints fail for spawned agents | 14 comments — early-adopter friction |
| [#34751](https://github.com/anthropics/claude-code/issues/34751) | "Request too large" on 99KB PNG | **False-positive validation**: small files rejected, suggests broken size calculation | 11 comments, 3 👍 — has repro, Linux |
| [#39560](https://github.com/anthropics/claude-code/issues/39560) | Constant permission requests, prefers Bash over built-ins | **Tool-selection regression**: model ignores purpose-built tools, degrading reliability | 4 comments, 2 👍 — Windows-specific |
| [#39586](https://github.com/anthropics/claude-code/issues/39586) | Does not follow MCP tools/list pagination | **MCP spec compliance gap**: `nextCursor` ignored, breaks large tool registries | 2 comments — protocol correctness |

---

## Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#39559](https://github.com/anthropics/claude-code/pull/39559) | Modernize pr-review-toolkit agents | Overhauls review-pr command for current Claude capabilities; 5-month-old toolkit refresh | Open |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | preserve-session plugin | Path-independent session history via UUID registry — survives renames, moves, copies | Open |
| [#36625](https://github.com/anthropics/claude-code/pull/36625) | Fix Pre/PostToolUse message visibility | Corrects hookify plugin to show block messages to Claude, not just users | Open |
| [#39370](https://github.com/anthropics/claude-code/pull/39370) | frontend-design-system plugin | Systematic design workflow: wireframes, OKLCH color theory, design tokens before implementation | Open |
| [#39320](https://github.com/anthropics/claude-code/pull/39320) | Bark community plugin | AI-powered permission hook using risk-level assessment for tool calls | Open |
| [#39299](https://github.com/anthropics/claude-code/pull/39299) | /dream command plugin | Manual memory consolidation command matching `/memory` UI hint | Open |
| [#39132](https://github.com/anthropics/claude-code/pull/39132) | terminal-restore plugin | Kitty keyboard protocol cleanup on exit — fixes Ghostty/Kitty/WezTerm Ctrl-C breakage | Open |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | Remove "retro-futuristic" from Frontend Design Skill | Design guidance cleanup | Open |
| [#39417](https://github.com/anthropics/claude-code/pull/39417) | Enhance SKILL.md with design thinking steps | Documentation improvement for frontend development | Open |
| [#39354](https://github.com/anthropics/claude-code/pull/39354) | Fix silent validation failures | Error handling improvements in issue-labeling scripts | Open |

---

## Feature Request Trends

1. **Enterprise Backend Flexibility** — Multiple requests for Amazon Bedrock support in Desktop/Cowork (#32668, 70 👍) and better Vertex API integration, reflecting hybrid-cloud deployment needs.

2. **Permission System Control** — Strong demand for granular permission bypass options (`--dangerously-skip-permissions` fixes, remote-control compatibility #31908) and hook-based risk assessment (Bark plugin).

3. **Session & Memory Management** — Persistent session preservation across directory changes (#39148), manual memory consolidation (`/dream`), and conversation compaction reliability dominate UX requests.

4. **Multi-Agent Orchestration** — Agent Teams feature requests focus on configuration inheritance (#32368), skill scoping (#39579), and lifecycle hooks.

5. **IDE Integration Polish** — VS Code-specific recovery mechanisms and terminal state cleanup indicate production IDE usage is scaling.

---

## Developer Pain Points

| Category | Symptoms | Frequency Indicator |
|----------|----------|---------------------|
| **Permission System Instability** | `dangerously-skip-permissions` regressions, constant re-prompting, hook silent failures | 5+ issues/PRs in 24h |
| **State Corruption & Recovery** | Dead conversations from images, compaction failures, "Not responding" dead-ends | 4 high-engagement issues |
| **Configuration Drift** | XDG non-compliance, model capability detection failures, 1M context window availability | 3 long-standing + 2 fresh |
| **Windows Second-Class Experience** | PowerShell only now entering preview, Bash preference over native tools, path handling | 3 platform-specific issues |
| **MCP Protocol Edge Cases** | Pagination ignored, Authorization header fallback to OAuth, CSP blocking extensions | 3 integration bugs |

**Emerging Pattern**: The shift from single-agent to multi-agent workflows (Agent Teams) is exposing architectural gaps in configuration inheritance and skill scoping that the plugin ecosystem is racing to address.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-27

## 1. Today's Highlights

OpenAI shipped **rust-v0.117.0**, making plugins a first-class workflow with startup sync, `/plugins` browsing, and streamlined auth handling—fulfilling a long-standing community request ([openai/codex#8512](https://github.com/openai/codex/issues/8512)). Meanwhile, the team is aggressively modularizing the Rust codebase: three major PRs landed this week extracting MCP logic and tool schemas into dedicated crates (`codex-mcp`, `codex-tools`). On the issue front, token burn rates remain the top community concern with 288 comments, while Windows sandbox ACL corruption emerged as a critical new bug affecting Chromium browsers.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[rust-v0.117.0](https://github.com/openai/codex/releases/tag/rust-v0.117.0)** | **Plugins are now first-class**: automatic product-scoped plugin sync at startup, `/plugins` directory browsing, and improved auth/setup flows. Six alpha builds (0.117.0-alpha.20 through alpha.25) preceded this stable release. |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#14593](https://github.com/openai/codex/issues/14593) **Burning tokens very fast** | Business-tier user reports rapid token consumption; 288 comments suggest systemic billing transparency concerns | 🔥 96 upvotes, highest engagement in tracker |
| [#8648](https://github.com/openai/codex/issues/8648) **Replies to earlier messages instead of latest** | Context window management bug breaks multi-turn reliability—core to agent UX | 22 comments, persistent since January |
| [#15777](https://github.com/openai/codex/issues/15777) **Sandbox corrupts Windows ACL, breaks GPU sandbox in browsers** | Severe Windows-side effect: Codex installation damages AppData\Local permissions, breaking Opera/Chrome Canary | 22 comments, zero upvotes but critical severity |
| [#11981](https://github.com/openai/codex/issues/11981) **100% CPU with single agent** | Performance regression on macOS affecting Plus subscribers | 21 comments, no resolution |
| [#3049](https://github.com/openai/codex/issues/3049) **Configurable Hotkeys Support** | Accessibility/workflow blocker—hardcoded bindings frustrate power users | 64 upvotes, 18 comments, 7-month backlog |
| [#13993](https://github.com/openai/codex/issues/13993) **Standalone Windows installer** | Corporate/locked-down environments blocked by Microsoft Store dependency | 47 upvotes, enterprise adoption barrier |
| [#8512](https://github.com/openai/codex/issues/8512) **Implement Codex Plugins** | ✅ **CLOSED**—Original feature request fulfilled by v0.117.0 | 83 upvotes, referenced in release notes |
| [#15340](https://github.com/openai/codex/issues/15340) **bwrap lookup in wrong place** | Linux sandbox path resolution fails despite bubblewrap being installed | 14 upvotes, 10 comments |
| [#14794](https://github.com/openai/codex/issues/14794) **Devcontainer workspace appears read-only** | VS Code extension sandbox over-restricts in Linux container environments | 6 comments, affects remote development |
| [#15648](https://github.com/openai/codex/issues/15648) **GPT-5.3-Codex-Spark unsupported with ChatGPT account** | Model availability confusion between CLI auth tiers | 6 comments, Pro subscriber blocked |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#15928](https://github.com/openai/codex/pull/15928) **codex-tools: extract MCP schema adapters** | Moves MCP-specific schema normalization from `core` to `codex-tools` crate | Cleaner architecture, enables plugin ecosystem growth |
| [#15919](https://github.com/openai/codex/pull/15919) **Extract MCP into codex-mcp crate** | Complete MCP server/config logic extraction from `codex-core` | Foundation for third-party MCP server support |
| [#15918](https://github.com/openai/codex/pull/15918) **Remove macOS seatbelt extension profiles** | Eliminates legacy `MacOsSeatbeltProfileExtensions` permission surface | Simplifies macOS security model, reduces approval friction |
| [#15921](https://github.com/openai/codex/pull/15921) **Generic ClientResponse for app-server-protocol** | Symmetrical typed response union to `ClientRequest` | Enables scalable analytics/event ingestion |
| [#15917](https://github.com/openai/codex/pull/15917) **CLI stdin piping for `codex exec`** | `echo "input" \| codex exec "prompt"` parity with Claude Code | Unix-philosophy compliance, scripting workflows |
| [#15922](https://github.com/openai/codex/pull/15922) **Remove legacy TUI split** | Deletes `tui/` directory, deprecates `tui_app_server` feature flag | Codebase simplification, maintenance reduction |
| [#15561](https://github.com/openai/codex/pull/15561) **Add `/create-api-key` slash command** | CLI command to provision `$OPENAI_API_KEY` for API usage | Bridges vibe-coding → production API workflows |
| [#15525](https://github.com/openai/codex/pull/15525) **ChatGPT device-code login in app server** | Enables device-code auth for VS Code/Codex App without browser | Corporate/headless environment support |
| [#12220](https://github.com/openai/codex/pull/12220) **Windows sandbox network proxy support** | Enforces proxy-only runs via `offline` sandbox user | Security hardening for enterprise Windows deployments |
| [#14891](https://github.com/openai/codex/pull/14891) **Preserve detached children in Linux sandbox** | Removes `--die-with-parent` for tool invocations, keeps namespaces | Fixes background process survival in sandboxed tools |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Plugin ecosystem maturity** | #8512 closed, v0.117.0 shipped, MCP extraction PRs active | ⬆️ High—now core product strategy |
| **Windows-native experience** | #13993 (standalone installer), #8537 (PowerShell prefix handling), #15777 (ACL fix) | ⬆️ High—enterprise unblocking |
| **Keyboard-driven workflows** | #3049 (hotkeys), #9849 (tab titles, closed) | → Steady—TUI polish ongoing |
| **Sandbox flexibility** | #14338 (writable gitdir), #15505 (.git read-only bug), #14794 (devcontainer) | → Moderate—security vs. usability tension |
| **API key management** | #15561 (slash command), #15648 (model auth confusion) | → Emerging—onboarding friction |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Symptoms | Tracker Evidence |
|------------|-----------|----------|----------------|
| **Token/billing opacity** | 🔴 Critical | Rapid credit burn, no visibility into per-request costs | #14593 (288 comments), #15648 |
| **Sandbox brittleness** | 🔴 High | bwrap path issues, ACL corruption, read-only workspace surprises | #15340, #15777, #14794, #15505, #15356 |
| **Windows second-class status** | 🟡 High | Store-only distribution, PowerShell quirks, permission side-effects | #13993, #8537, #13182, #13718 |
| **Context window reliability** | 🟡 Moderate | Wrong message targeting, stale thread entries, duplicate responses | #8648, #14162, #15318 |
| **CPU/performance regressions** | 🟡 Moderate | 100% CPU with minimal load | #11981 |
| **TUI/CLI parity gaps** | 🟢 Improving | Missing piping, hardcoded keys—actively being addressed | #3049, #15917, #9849 |

---

*Digest compiled from openai/codex GitHub activity 2026-03-26/27. For real-time updates: https://github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-27

---

## 1. Today's Highlights

The Gemini CLI team shipped **v0.35.2** and a **v0.36.0-preview.4** build while aggressively tackling two critical stability issues: infinite re-render loops causing UI lockups and "Ralph loops" where compression triggers endless agentic cycles. Memory and performance optimization dominates the maintainer backlog, with a new `StyleSpan` abstraction aiming to eliminate 280MB+ of V8 heap bloat from terminal rendering.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.35.2](https://github.com/google-gemini/gemini-cli/compare/v0.35.1...v0.35.2)** | Stable | Patch release; detailed changelog pending in [PR #23960](https://github.com/google-gemini/gemini-cli/pull/23960) |
| **[v0.36.0-preview.4](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.3...v0.36.0-preview.4)** | Preview | Continued iteration toward v0.36.0 stable |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) | Optimize test suite output logging | Successful tests dump hundreds of thousands of characters to stdout/stderr, slowing CI and local development | 🔥 45 comments, 12 👍 — highest engagement |
| [#22648](https://github.com/google-gemini/gemini-cli/issues/22648) | 429 RESOURCE_EXHAUSTED hangs indefinitely with oauth-personal | Google One AI Pro users hit rate limits without error surfacing; silent failure is worst-case UX | 5 comments, 10 👍; workaround in [#23887](https://github.com/google-gemini/gemini-cli/issues/23887) |
| [#23741](https://github.com/google-gemini/gemini-cli/issues/23741) | Eliminate excessive per-character object allocations in terminal UI | 280MB+ heap bloat from `ink` dependency; blocking for large codebase interactions | 4 comments; directly addressed by [PR #23917](https://github.com/google-gemini/gemini-cli/pull/23917) |
| [#23887](https://github.com/google-gemini/gemini-cli/issues/23887) | [Temporary Workaround] Resolving 429 Rate Limit via `/compress` | Community-discovered mitigation for widespread latency/rate-limit issues | 3 comments, 2 👍; spreading as unofficial fix |
| [#23858](https://github.com/google-gemini/gemini-cli/issues/23858) | Files edited while in plan mode | Agent violates its own planning constraints, breaking trust in approval modes | 2 comments; "plan mode" reliability concerns |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | Support passing prompt to `/plan` | Reduces friction: currently requires multi-step interaction for single action | 2 comments, 2 👍; workflow efficiency request |
| [#22822](https://github.com/google-gemini/gemini-cli/issues/22822) | Refine `/spec setup` for existing `/conductor` directory | Migration path needed for legacy users; rename from `conductor` to `sdd` incomplete | 2 comments; enterprise continuity concern |
| [#23962](https://github.com/google-gemini/gemini-cli/issues/23962) | Taking literally 15 minutes to say hello | Extreme cold-start latency on Windows; indicates potential auth or initialization pathologies | 1 comment; severity suggests systemic issue |
| [#23958](https://github.com/google-gemini/gemini-cli/issues/23958) | Plan Mode deadlock: cannot create plan file when parent directory doesn't exist | Sandbox restrictions break plan file creation; circular dependency in workflow | 1 comment; sandbox/policy interaction bug |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Implement memory routing: global vs. project | Critical for multi-repo workflows; prevents pollution of user preferences across codebases | 1 comment, 1 👍; long-term UX architecture |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#23948](https://github.com/google-gemini/gemini-cli/pull/23948) | Prevent infinite re-render loop in `useFlickerDetector` and `useSessionResume` | **P0 fix**: Resolves critical UI lockup where timers stop and input hangs | Open |
| [#23946](https://github.com/google-gemini/gemini-cli/pull/23946) | Prevent compression endless loop in agentic sessions | **P0 fix**: Stops "Ralph loops" where `tryCompressChat` fires repeatedly in tool-call chains | Open |
| [#23917](https://github.com/google-gemini/gemini-cli/pull/23917) | Introduce `StyleSpan` abstraction to reduce per-character allocations | Run-length encoding replacement for `ink`'s `toStyledCharacters()`; targets 280MB+ heap reduction | Open |
| [#23961](https://github.com/google-gemini/gemini-cli/pull/23961) | Structured terminal lifecycle for ACP | Adds `_meta.terminal_info` signaling for Agent Communication Protocol; enables IDE integration | Open |
| [#23957](https://github.com/google-gemini/gemini-cli/pull/23957) | `additionalContext` for `BeforeModel` hooks with aggregation | Extends hook system for multi-source context injection; powers enterprise extensions | Open |
| [#23953](https://github.com/google-gemini/gemini-cli/pull/23953) | Fix/create missing config dir | Eliminates `ENOENT` crash on clean installs; fixes race condition in `projects.json.tmp` | Open |
| [#23956](https://github.com/google-gemini/gemini-cli/pull/23956) | Autocomplete: immediate execution and subcommand disclosure | UX fix for "stuck" command suggestions; restores fluid CLI navigation | Open |
| [#23952](https://github.com/google-gemini/gemini-cli/pull/23952) | Prevent crash on empty response in ACP mode | Graceful handling of `InvalidStreamError` for headless/IDE scenarios | Open |
| [#23851](https://github.com/google-gemini/gemini-cli/pull/23851) | Debug command for DevTools | F12-launched debugger attachment; developer experience improvement | Open |
| [#23843](https://github.com/google-gemini/gemini-cli/pull/23843) | Update Ink to 6.5.0 | Enables `renderBuffer` for reduced flicker; foundation for rendering improvements | **Merged** |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Persistent, project-level state** | [#23724](https://github.com/google-gemini/gemini-cli/issues/23724), [#22819](https://github.com/google-gemini/gemini-cli/issues/22819), [#23925](https://github.com/google-gemini/gemini-cli/issues/23925) | Strong — tracker migration from session-temp to `.gemini/` directory |
| **SDD/Spec workflow hardening** | [#22822](https://github.com/google-gemini/gemini-cli/issues/22822), [#23802](https://github.com/google-gemini/gemini-cli/issues/23802), [#23803](https://github.com/google-gemini/gemini-cli/issues/23803), [#23804](https://github.com/google-gemini/gemini-cli/issues/23804) | Active — DAG-based execution, UUID hiding, migration paths |
| **Memory system intelligence** | [#22809](https://github.com/google-gemini/gemini-cli/issues/22809), [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Emerging — proactive preference capture, global/project routing |
| **ACP/IDE integration maturity** | [#23961](https://github.com/google-gemini/gemini-cli/pull/23961), [#23952](https://github.com/google-gemini/gemini-cli/pull/23952), [#22254](https://github.com/google-gemini/gemini-cli/pull/22254) | Accelerating — structured lifecycles, error handling, documentation |
| **Approval mode refinement** | [#22855](https://github.com/google-gemini/gemini-cli/issues/22855), [#23858](https://github.com/google-gemini/gemini-cli/issues/23858), [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Sustained — subagent awareness, plan mode integrity, single-command plans |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Rate limiting & 429 errors** | 🔴 High | Blocks Google One AI Pro users; silent hangs destroy trust | [#22648](https://github.com/google-gemini/gemini-cli/issues/22648), [#23887](https://github.com/google-gemini/gemini-cli/issues/23887) |
| **Memory/performance degradation** | 🔴 High | 280MB+ heap bloat, slow terminal rendering | [#23741](https://github.com/google-gemini/gemini-cli/issues/23741), [PR #23917](https://github.com/google-gemini/gemini-cli/pull/23917) |
| **UI lockups & infinite loops** | 🔴 High | Critical stability issues in core hooks and compression | [PR #23948](https://github.com/google-gemini/gemini-cli/pull/23948), [PR #23946](https://github.com/google-gemini/gemini-cli/pull/23946) |
| **Sandbox/policy friction** | 🟡 Medium | Plan mode deadlocks, directory creation failures | [#23958](https://github.com/google-gemini/gemini-cli/issues/23958), [#23959](https://github.com/google-gemini/gemini-cli/issues/23959) |
| **Cold-start latency** | 🟡 Medium | 15-minute initialization on Windows | [#23962](https://github.com/google-gemini/gemini-cli/issues/23962) |
| **Test suite noise** | 🟡 Medium | CI slowdown, developer friction | [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) |

---

*Digest compiled from google-gemini/gemini-cli public repository data.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-27

## 1. Today's Highlights

GitHub shipped **v1.0.12** with critical fixes for MCP server startup from git roots, Windows clipboard conflicts, and diff rendering with intra-line highlighting. A follow-up prerelease (**v1.0.12-2**) adds plugin hook environment variables and template support, signaling deeper extensibility work. Meanwhile, terminal UI instability remains the dominant community pain point, with screen flickering and scrolling issues generating the highest engagement.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| [v1.0.12](https://github.com/github/copilot-cli/releases/tag/v1.0.12) | 2026-03-26 | MCP servers now start correctly from git root directories; fixed Windows clipboard shadowing issues; resolved `/diff` line rendering with intra-line highlighting |
| [v1.0.12-2](https://github.com/github/copilot-cli/releases/tag/v1.0.12-2) | 2026-03-26 | Plugin hooks receive `CLAUDE_PROJECT_DIR` and `CLAUDE_PLUGIN_DATA` env vars; support `{{project_dir}}` and `{{plugin_data_dir}}` templates; model header displays reasoning effort level (e.g., "(high)") |

---

## 3. Hot Issues

| # | Status | Title | Engagement | Why It Matters |
|---|--------|-------|------------|--------------|
| [#239](https://github.com/github/copilot-cli/issues/239) | 🔴 OPEN | Screen flickering/starts scrolling down from beginning | 36 comments, 66 👍 | **Long-running blocker**: Conversation length >10 messages triggers severe UI degradation—flickering, duplicate output, and scroll position reset. Highest-voted open issue; affects daily usability. |
| [#1584](https://github.com/github/copilot-cli/issues/1584) | 🔴 OPEN | Incessant scrolling during long running operations | 12 comments, 17 👍 | Related terminal chaos: aggressive auto-scrolling during streaming output disrupts reading. Community suspects "attempt to give me a seizure." |
| [#501](https://github.com/github/copilot-cli/issues/501) | 🟢 CLOSED | `~/.bash_history` truncated | 11 comments, 3 👍 | **Resolution**: Shell commands now properly source `~/.bashrc`. Closed after months of user data loss reports. |
| [#960](https://github.com/github/copilot-cli/issues/960) | 🔴 OPEN | Performance very slow vs. GitHub Copilot Chat | 10 comments, 5 👍 | **12-14 min vs. 1-2 min** for identical prompts with same MCPs/tools. Suggests architectural inefficiency in CLI's request pipeline. |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | 🔴 OPEN | `ctrl+shift+c` no longer copies on Linux | 10 comments, 2 👍 | Standard terminal shortcut broken since v1.0.4. Forces users to retrain muscle memory or use mouse right-click. |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | 🔴 OPEN | Transient API errors → rate limit | 8 comments, 4 👍 | Retry storms trigger Copilot rate limits. Indicates poor backoff strategy or upstream reliability issues. |
| [#424](https://github.com/github/copilot-cli/issues/424) | 🔴 OPEN | Copilot suddenly doesn't recognize MCP servers | 8 comments, 0 👍 | Intermittent MCP discovery failures—critical for users relying on custom tools. "It was working previously" pattern suggests state corruption. |
| [#2143](https://github.com/github/copilot-cli/issues/2143) | 🟢 CLOSED | Text selection copies only first character | 6 comments, 1 👍 | **Fixed**: Copy-paste workflow completely broken for code snippets. Rapid closure shows prioritization of copy regressions. |
| [#1113](https://github.com/github/copilot-cli/issues/1113) | 🔴 OPEN | Support custom slash commands via markdown files | 6 comments, 11 👍 | **Feature gap vs. Claude Code**: Users want `~/.copilot/commands/*.md` for reusable prompts without building VS Code extensions. Strong upvote signal. |
| [#1311](https://github.com/github/copilot-cli/issues/1311) | 🟢 CLOSED | Status line customization | 5 comments, 4 👍 | Closed without implementation? User-requested configurable status bar below chat entry—precursor to current customization requests. |

---

## 4. Key PR Progress

| # | Status | Title | Significance |
|---|--------|-------|------------|
| [#2331](https://github.com/github/copilot-cli/pull/2331) | 🟢 CLOSED | Sort git tags when determining prerelease version | **Build fix**: Lexicographic tag sorting caused version misidentification (v1.0.8 > v1.0.12). Prevents update notification bugs like [#2307](https://github.com/github/copilot-cli/issues/2307). |
| [#2316](https://github.com/github/copilot-cli/pull/2316) | 🔴 OPEN | Dev | Appears to be devcontainer feature addition (`github-cli`). Minimal description; likely infrastructure. |

*Note: Only 2 PRs updated in 24h. [#2331](https://github.com/github/copilot-cli/pull/2331) was the substantive fix.*

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Prompt/Status Customization** | [#2329](https://github.com/github/copilot-cli/issues/2329) (custom symbols), [#2326](https://github.com/github/copilot-cli/issues/2326) (Git auth in status bar), [#1311](https://github.com/github/copilot-cli/issues/1311) (status line scripts), [#2330](https://github.com/github/copilot-cli/issues/2330) (session summary inline) | High: 4 related requests in 24h |
| **Context Window Control** | [#2333](https://github.com/github/copilot-cli/issues/2333) (disable auto-compaction), manual `/compact` only | Frustration with 95% hardcoded threshold |
| **Custom Slash Commands** | [#1113](https://github.com/github/copilot-cli/issues/1113) (markdown-based commands) | Competitive parity with Claude Code |
| **Image/Clipboard Integration** | [#2328](https://github.com/github/copilot-cli/issues/2328) (paste from snipping tool), [#1733](https://github.com/github/copilot-cli/issues/1733) (paste broken) | Workflow friction for visual contexts |
| **LSP Documentation** | [#2204](https://github.com/github/copilot-cli/issues/2204) (C# LSP setup), [#1373](https://github.com/github/copilot-cli/issues/1373) (`.github/lsp.json` vs. user config) | Adoption barrier for enterprise teams |

---

## 6. Developer Pain Points

### 🔴 Critical: Terminal UI Stability
- **Screen flickering, scrolling chaos, and mouse selection breakage** dominate high-engagement issues ([#239](https://github.com/github/copilot-cli/issues/239), [#1584](https://github.com/github/copilot-cli/issues/1584), [#2332](https://github.com/github/copilot-cli/issues/2332))
- Windows Terminal specifically affected; session exit leaves terminal in broken state
- **Impact**: Unusable for long conversations or serious work

### 🟡 High: Copy-Paste Reliability
- Multiple regressions: Linux `ctrl+shift+c` ([#2082](https://github.com/github/copilot-cli/issues/2082)), Windows clipboard shadowing (fixed in v1.0.12), invisible characters in copied commands ([#2285](https://github.com/github/copilot-cli/issues/2285))
- Suggests fragile terminal integration layer

### 🟡 High: MCP Server Fragility
- "Suddenly stops recognizing" pattern ([#424](https://github.com/github/copilot-cli/issues/424), [#2176](https://github.com/github/copilot-cli/issues/2176))
- Configuration discovery inconsistencies (git root vs. user config)

### 🟠 Medium: Performance Disparity
- 6-10x slower than Copilot Chat for equivalent workloads ([#960](https://github.com/github/copilot-cli/issues/960))
- Likely blocking enterprise adoption at scale

### 🟠 Medium: Version/Release Channel Confusion
- Prerelease versions surfacing to stable users ([#2307](https://github.com/github/copilot-cli/issues/2307)), npm tag mismatches ([#2327](https://github.com/github/copilot-cli/issues/2327))
- [#2331](https://github.com/github/copilot-cli/pull/2331) fix indicates systemic versioning issues

---

*Digest compiled from github.com/github/copilot-cli — 50 issues, 2 PRs, 2 releases in 24h window.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-27

## 1. Today's Highlights

The community is actively addressing **MCP ecosystem compatibility** and **authentication infrastructure**, with a major PR landing for ACP server OAuth/Device Flow support. Memory consumption in the VS Code extension and JSON Schema strictness remain unresolved pain points drawing fresh bug reports.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1595](https://github.com/MoonshotAI/kimi-cli/issues/1595) | JSON Schema limitations break standard MCP servers | **Ecosystem blocker**: Kimi's "Moonshot Flavored JSON Schema" rejects valid MCP tools, fragmenting interoperability with the growing MCP server ecosystem | Fresh report, no engagement yet—high impact if unaddressed |
| [#1592](https://github.com/MoonshotAI/kimi-cli/issues/1592) | VS Code extension memory exhaustion | **Production stability**: Long-running tasks cause unbounded memory growth on Darwin/arm64, affecting daily IDE usage | 0 reactions but describes critical resource leak pattern |
| [#1594](https://github.com/MoonshotAI/kimi-cli/issues/1594) | `/init` hangs at shell action | **Onboarding friction**: Cross-platform (Windows/Debian) initialization failure blocks new user adoption | No comments—needs triage |
| [#1589](https://github.com/MoonshotAI/kimi-cli/issues/1589) | YOLO mode should continue past tool call errors | **Reliability UX**: Users want graceful degradation for autonomous workflows rather than hard failures | Feature request aligns with "agentic" reliability trends |
| [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355) | ACP session init fails with `list.index(x): x not in list` | **IDE integration stability**: JetBrains plugin crash with cryptic error; 3 comments suggest reproducibility but no resolution since March 6 | Stale but unresolved; affects commercial IDE users |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | **ACP authentication rewrite: terminal login + OAuth Device Flow** | Complete auth system for ACP servers with `_check_auth()`, terminal protocol login, and OAuth Device Flow—foundational for secure MCP server connectivity | Open, updated 2026-03-26 |
| [#1561](https://github.com/MoonshotAI/kimi-cli/pull/1561) | **Lifecycle hooks system (Wire 1.7)** | 13 hook events (PreToolUse, PostToolUseFailure, SessionStop, etc.) enabling user-defined shell commands at agent lifecycle points—Claude Code parity feature | Open, active development |
| [#1593](https://github.com/MoonshotAI/kimi-cli/pull/1593) | **Async `/feedback` command with error handling** | In-shell feedback collection with metadata (session, version, OS, model) and GitHub fallback—improves telemetry quality | Open, fresh submission |
| [#1591](https://github.com/MoonshotAI/kimi-cli/pull/1591) | **Fix race condition: reject steer messages after turn ends** | Eliminates silent message loss in `WireServer._handle_steer()` via `_turn_active` lifecycle flag—correctness fix for concurrent agent control | Open, 2026-03-26 |
| [#1590](https://github.com/MoonshotAI/kimi-cli/pull/1590) | **Global + local AGENTS.md configuration merging** | Hierarchical agent rules: `~/.kimi/AGENTS.md` → workspace `AGENTS.md` with smart merging and provenance headers—team/enterprise workflow enabler | Open, fresh submission |
| [#1479](https://github.com/MoonshotAI/kimi-cli/pull/1479) | **HTTP proxy support via environment variables** | `aiohttp.ClientSession` with `trust_env` for corporate/restricted network access—long-standing deployment blocker | Open, updated 2026-03-26 |
| [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | **Enable `trust_env` in `aiohttp.ClientSession`** | Lower-level proxy/SSL env var support; companion to #1479's higher-level implementation | Open, aging (Feb 25) |
| [#1345](https://github.com/MoonshotAI/kimi-cli/pull/1345) | **OSC 9 terminal notifications for task completion** | Native desktop notifications via terminal escape sequences (iTerm2, Windows Terminal, WezTerm, tmux)—async workflow UX | **Closed** 2026-03-26 |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **MCP ecosystem compatibility** | #1595 (JSON Schema strictness), #1512 (ACP auth) | Align with standard MCP specs; reduce "flavored" variants that fragment tooling |
| **Autonomous execution resilience** | #1589 (continue past tool errors), #1561 (lifecycle hooks) | Self-healing agents with observability hooks for production deployments |
| **Hierarchical configuration** | #1590 (global/local AGENTS.md) | Team-wide defaults + project-specific overrides, enterprise scalability |
| **Network environment flexibility** | #1479, #1236 (proxy support) | Corporate/restricted region deployment readiness |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|---------------------|
| **Memory/resource leaks** | Recurring | Production instability | #1592 (VS Code extension), pattern suggests unbounded growth in long sessions |
| **Cryptic/unactionable errors** | High | Debugging friction | #1355 (`list.index(x)` in ACP init), #1594 (shell action hang without logs) |
| **Schema compatibility barriers** | Emerging | Ecosystem isolation | #1595 blocks standard MCP servers—strategic risk for tool adoption |
| **Network/proxy configuration gaps** | Persistent | Deployment blockers | #1479, #1236 remain open despite clear enterprise need |
| **Initialization reliability** | Moderate | First-run experience | #1594 cross-platform `/init` hangs, #1355 IDE plugin crashes |

---

*Digest compiled from MoonshotAI/kimi-cli GitHub activity 2026-03-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-27

## Today's Highlights

OpenCode v1.3.3 shipped with significant TUI performance improvements via bypassed local SSE streaming and embedded WebUI in the desktop binary. The community is actively debating Anthropic OAuth ToS compliance after account bans, while Windows ARM64 support finally landed after months of requests. A critical infinite loop bug with non-standard `finish_reason` values is drawing urgent attention from maintainers.

---

## Releases

**v1.3.3** — [Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.3.3)

| Component | Change |
|-----------|--------|
| **TUI** | Bypassed local SSE event streaming in worker for improved performance ([#19183](https://github.com/anomalyco/opencode/pull/19183)); fixed image paste on Windows Terminal 1.25+ with kitty keyboard enabled ([#17674](https://github.com/anomalyco/opencode/pull/17674)) |
| **Desktop** | Embedded WebUI directly in binary with configurable proxy flags ([#19299](https://github.com/anomalyco/opencode/pull/19299)); agent normalization fixes |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#4340](https://github.com/anomalyco/opencode/issues/4340) | **Windows ARM64 support** — CLOSED | Long-awaited platform expansion; unblocks Surface Pro X and Windows Dev Kit users | 38 comments, 23 👍; celebratory closure after 4+ months |
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | **GitHub Copilot + Opus 4.6 prefill error** | Blocks enterprise users relying on Copilot integration; "assistant message prefill" failures break workflows | 37 comments, 16 👍; active debugging, no resolution yet |
| [#6930](https://github.com/anomalyco/opencode/issues/6930) | **Anthropic OAuth ToS violations → account bans** | Critical trust/safety issue; users report bans after upgrading Claude Max tiers via OpenCode OAuth | 21 comments, 13 👍; heated debate on compliance responsibility |
| [#13515](https://github.com/anomalyco/opencode/issues/13515) | **Kimi 2.5 reasoning cutoff via NVIDIA API** | Reasoning/thinking content silently truncated; breaks model's core value proposition | 19 comments; NVIDIA NIM works fine, pointing to OpenCode parsing bug |
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **View archived sessions on desktop** | High-UX friction; users lose access to historical context | 17 comments; strong demand for session management parity with TUI |
| [#12405](https://github.com/anomalyco/opencode/issues/12405) | **"Connection reset by server" on Windows** | Blocks ZHIPU GLM4.7 adoption; proxy-related networking failure | 16 comments; repro attempts ongoing |
| [#1662](https://github.com/anomalyco/opencode/issues/1662) | **`tool_use` IDs without `tool_result` blocks** | Core tool-calling reliability issue; Claude Sonnet 4 specific | 14 comments, 4 👍; recurring pattern, needs systematic fix |
| [#4754](https://github.com/anomalyco/opencode/issues/4754) | **Linux copy/paste buffer behavior** | Deep UX friction for Linux power users; middle-click vs. Ctrl+V inconsistency | 12 comments, 9 👍; detailed technical analysis provided |
| [#16992](https://github.com/anomalyco/opencode/issues/16992) | **Add `/btw` command** | Feature parity with Claude Code; "by the way" async context injection | 9 comments, 32 👍; highly upvoted, clear demand |
| [#19339](https://github.com/anomalyco/opencode/issues/19339) | **Infinite loop on `finishReason: "unknown"`** | Production stability risk; GLM-5 Turbo via gateways triggers unbounded loops | 2 comments, fresh filing; urgent fix in progress ([#19342](https://github.com/anomalyco/opencode/pull/19342)) |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#19347](https://github.com/anomalyco/opencode/pull/19347) | **TUI plugins system** | Technical reference for TUI plugin architecture; external + internal plugin loading via `tui.json` | Open, [beta, Vouched] |
| [#18335](https://github.com/anomalyco/opencode/pull/18335) | **Replace Bun serve with Hono node adapters** | Runtime decoupling: removes Bun.serve dependency, adds structured server info, PTY WebSocket upgrade fixes | Open, [Vouched] |
| [#18433](https://github.com/anomalyco/opencode/pull/18433) | **AI SDK v6 support** | Major dependency upgrade; blocked on upstream GitLab provider MR | Open, [beta, Vouched] |
| [#18308](https://github.com/anomalyco/opencode/pull/18308) | **Replace BunProc with Npm module** | Eliminates `bun` CLI dependency for package operations; uses `@npmcli/arborist` for deterministic installs | Open, [beta, Vouched] |
| [#19345](https://github.com/anomalyco/opencode/pull/19345) | **Reasoning level as separate switcher** | UX improvement: decouples reasoning variants from model selector (closes [#16543](https://github.com/anomalyco/opencode/issues/16543)) | Open |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile touch optimization** | Touch-first UX for OpenCode App while preserving desktop experience | Open |
| [#13321](https://github.com/anomalyco/opencode/pull/13321) | **Robust subagent completion propagation** | Fixes parent session hangs when Task tool completes; `await prune()` fix, completion event guarantees | Open |
| [#18516](https://github.com/anomalyco/opencode/pull/18516) | **Subagent plan escape prevention** | Planning mode fixes: prevents subagents from leaking plans, markdown rendering, exit prompt visibility | Open |
| [#19342](https://github.com/anomalyco/opencode/pull/19342) | **Treat `unknown` finishReason as terminal** | Critical fix for infinite loop with GLM-5 Turbo and other OpenAI-compatible providers | Open, fresh |
| [#19335](https://github.com/anomalyco/opencode/pull/19335) | **Workspace routing integration** | Control plane + workspace router separation; fallback routing logic | Open, [contributor] |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Claude Code parity commands** | `/btw` ([#16992](https://github.com/anomalyco/opencode/issues/16992)), `$skill` picker ([#19331](https://github.com/anomalyco/opencode/issues/19331)), `/fast` mode ([#16499](https://github.com/anomalyco/opencode/issues/16499)) | High — users expect feature equivalence |
| **Vim/keyboard navigation** | Ctrl+J/K menu navigation ([#7056](https://github.com/anomalyco/opencode/issues/7056)) | Moderate — power user accessibility |
| **Session management UX** | Archived session viewing ([#6680](https://github.com/anomalyco/opencode/issues/6680)), `/sessions` CWD filtering regression ([#19340](https://github.com/anomalyco/opencode/issues/19340)) | High — workflow continuity critical |
| **Custom editor integration** | Configurable "Open in" menu ([#15500](https://github.com/anomalyco/opencode/issues/15500)) | Moderate — IDE flexibility demand |
| **Auto-scroll control** | Disable automatic chat scroll ([#7659](https://github.com/anomalyco/opencode/issues/7659)) | Moderate — reading experience friction |

---

## Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Tool-calling reliability** | High — [#1662](https://github.com/anomalyco/opencode/issues/1662), [#5750](https://github.com/anomalyco/opencode/issues/5750), [#11899](https://github.com/anomalyco/opencode/issues/11899) | Critical — breaks agent workflows | Multiple open issues, no systemic fix |
| **Windows platform quirks** | High — [#4340](https://github.com/anomalyco/opencode/issues/4340) (now fixed), [#12405](https://github.com/anomalyco/opencode/issues/12405), [#12595](https://github.com/anomalyco/opencode/issues/12595), [#3563](https://github.com/anomalyco/opencode/issues/3563) | High — copy/paste, networking, file descriptor issues persist | Active but fragmented |
| **Subagent/parent session coordination** | High — [#9003](https://github.com/anomalyco/opencode/issues/9003), [#13321](https://github.com/anomalyco/opencode/pull/13321) | High — hangs block productivity | PR in progress |
| **Provider-specific finish_reason handling** | Emerging — [#18813](https://github.com/anomalyco/opencode/issues/18813), [#19339](https://github.com/anomalyco/opencode/issues/19339) | Critical — infinite loops, context window exceeded not handled | Fix drafted ([#19342](https://github.com/anomalyco/opencode/pull/19342)) |
| **OAuth/ToS compliance uncertainty** | Moderate — [#6930](https://github.com/anomalyco/opencode/issues/6930), [#19321](https://github.com/anomalyco/opencode/issues/19321) | High — account bans, enterprise risk | Needs official guidance |
| **TUI rendering in tmux/terminal multiplexers** | Moderate — [#16566](https://github.com/anomalyco/opencode/issues/16566), [#9269](https://github.com/anomalyco/opencode/issues/9269) | Moderate — blocks headless/server workflows | Repro difficulty slowing fixes |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-27

## 1. Today's Highlights

The v0.13.1-preview.0 release brings critical fixes for extension installation from non-GitHub sources and improved CLI memory visibility. A major community push for **Hooks support** landed with full documentation and UI refactoring, while Windows permission persistence and ACP protocol stability remain active focus areas with multiple PRs in flight.

---

## 2. Releases

### v0.13.1-preview.0
- **Extension flexibility**: Fixed non-GitHub git URL support for extension installation ([#2539](https://github.com/QwenLM/qwen-code/pull/2539))
- **CLI memory visibility**: `/memory show --project` and `--global` now properly display all configured context files ([#23](https://github.com/QwenLM/qwen-code/pull/23))

### v0.13.0-nightly.20260326.28e62882f
Same fixes as above in nightly channel.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2605](https://github.com/QwenLM/qwen-code/issues/2605) | Image paste from clipboard on Windows CMD | Removes friction for visual debugging/screenshot sharing | 6 comments, active engagement |
| [#2669](https://github.com/QwenLM/qwen-code/issues/2669) | Permission options 2/3 not persisting (Windows 11) | Breaks trust-based workflows; users re-prompted every session | 3 comments, PR [#2670](https://github.com/QwenLM/qwen-code/pull/2670) already proposed |
| [#2671](https://github.com/QwenLM/qwen-code/issues/2671) | ACP mode: Failed to initialize OpenAI logger | Blocks Zed editor integration; regression from older versions | 2 comments, affects IDE ecosystem |
| [#2685](https://github.com/QwenLM/qwen-code/issues/2685) | "你好" consumes 20% context window | Suggests fallback context sizing bug; impacts cost efficiency | 1 comment, needs investigation |
| [#2682](https://github.com/QwenLM/qwen-code/issues/2682) | STDOUT buffering behavior | Breaks PIPE-based automation; real-time output expected | 1 comment, infrastructure concern |
| [#2688](https://github.com/QwenLM/qwen-code/issues/2688) | CJK-English filenames get spaces injected | Corrupts file operations; repeated user frustration evident | 0 comments but strong language in report |
| [#2634](https://github.com/QwenLM/qwen-code/issues/2634) | VS Code extension ACP SIGTERM failures | Intermittent connection drops break IDE reliability | 0 comments, critical for VS Code users |
| [#2678](https://github.com/QwenLM/qwen-code/issues/2678) | Messages invisible, stop button unresponsive | UI state corruption requires VS Code restart | 0 comments, severity high |
| [#2676](https://github.com/QwenLM/qwen-code/issues/2676) | ripgrep incompatible with 64K page ARM64 | Blocks deployment on Kunpeng 920 servers | 0 comments, enterprise/China market impact |
| [#2667](https://github.com/QwenLM/qwen-code/issues/2667) | Float-formatted integers cause tokenization instability | Affects local backend consistency; subtle but pernicious | 0 comments, technical debt |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#2690](https://github.com/QwenLM/qwen-code/pull/2690) | Align permission flow across clients | Unifies CLI/VS Code auto-approval logic; removes VS Code-side special casing | Open |
| [#2670](https://github.com/QwenLM/qwen-code/pull/2670) | Fix Windows permission persistence | Case-insensitive path comparison fix for Windows filesystem | Open |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | Channels feature (Telegram/WeChat/DingTalk) | Major expansion to messaging platform integrations via ACP | Open |
| [#2687](https://github.com/QwenLM/qwen-code/pull/2687) | Enhance `/review` with verification & PR comments | Adds false positive control, parallel verification agents, GitHub PR inline comments | Open |
| [#2683](https://github.com/QwenLM/qwen-code/pull/2683) | Parse EDITOR env var with arguments | Fixes `emacsclient -c`, `code --wait` and similar patterns | Open |
| [#2675](https://github.com/QwenLM/qwen-code/pull/2675) | Fix OpenAI logger path in ACP mode | Resolves Zed/ACP initialization failure when `cwd` is `/` | Open |
| [#2666](https://github.com/QwenLM/qwen-code/pull/2666) | VS Code ACP retry logic & auto-reconnect | Exponential backoff reconnection for unstable ACP sessions | Open |
| [#2679](https://github.com/QwenLM/qwen-code/pull/2679) | Hooks documentation & JSON schema fix | Completes hooks system launch with lifecycle docs | Merged to 0.13.1 |
| [#2631](https://github.com/QwenLM/qwen-code/pull/2631) | Fix subagent diff confirmation after IDE accept | Resolves stuck subagent workflows in VS Code | Merged to 0.13.1 |
| [#2637](https://github.com/QwenLM/qwen-code/pull/2637) | Human-readable permission labels | Replaces `Read(//Users/alice/**)` with "read files in /Users/alice/" | Merged to 0.13.1 |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Hooks system** | [#2677](https://github.com/QwenLM/qwen-code/issues/2677), PRs [#2679](https://github.com/QwenLM/qwen-code/pull/2679), [#2602](https://github.com/QwenLM/qwen-code/pull/2602), [#2674](https://github.com/QwenLM/qwen-code/pull/2674) | **Shipped** — parity with Claude Code's extensibility model |
| **Messaging platform integrations** | PR [#2628](https://github.com/QwenLM/qwen-code/pull/2628) (Telegram/WeChat/DingTalk) | In progress — enterprise notification workflows |
| **Enhanced code review automation** | [#2684](https://github.com/QwenLM/qwen-code/issues/2684), PR [#2687](https://github.com/QwenLM/qwen-code/pull/2687) | Active — false positive control, PR comments |
| **Cloud-native CI/CD** | [#2649](https://github.com/QwenLM/qwen-code/issues/2649) (阿里云-云效/Alibaba Cloud Codeup) | Requested — Alibaba ecosystem integration gap |
| **MCP protocol expansion** | [#2681](https://github.com/QwenLM/qwen-code/issues/2681) (streamableHttp mode) | Emerging — protocol compatibility |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Tracking |
|------------|-----------|----------|
| **Windows platform reliability** | High | Permission persistence ([#2669](https://github.com/QwenLM/qwen-code/issues/2669)), Git Bash shell detection ([#2537](https://github.com/QwenLM/qwen-code/issues/2537)), CMD image paste ([#2605](https://github.com/QwenLM/qwen-code/issues/2605)) — multiple PRs in flight |
| **ACP/IDE connection stability** | High | SIGTERM crashes ([#2634](https://github.com/QwenLM/qwen-code/issues/2634)), logger initialization ([#2671](https://github.com/QwenLM/qwen-code/issues/2671)), auto-reconnect ([#2666](https://github.com/QwenLM/qwen-code/pull/2666)) |
| **Context window efficiency** | Medium | Unexpected token consumption ([#2685](https://github.com/QwenLM/qwen-code/issues/2685)), tool call parameter amnesia ([#2686](https://github.com/QwenLM/qwen-code/issues/2686)) |
| **CJK/Internationalization** | Medium | Filename spacing corruption ([#2688](https://github.com/QwenLM/qwen-code/issues/2688)), mixed-language path handling |
| **ARM64/Alternative architectures** | Emerging | ripgrep 64K page size incompatibility ([#2676](https://github.com/QwenLM/qwen-code/issues/2676)) |
| **Subagent/Async workflow bugs** | Medium | Diff confirmation stuck states ([#1203](https://github.com/QwenLM/qwen-code/issues/1203), [#2631](https://github.com/QwenLM/qwen-code/pull/2631)) |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-03-26 to 2026-03-27.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*