# AI CLI Tools Community Digest 2026-03-14

> Generated: 2026-03-14 00:19 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Comparison Report — 2026-03-14

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive, multi-polar market with seven actively maintained tools. Claude Code and OpenAI Codex lead in enterprise mindshare, while Gemini CLI and Qwen Code are rapidly iterating on agentic workflows. GitHub Copilot CLI leverages its IDE integration advantage, and OpenCode/Kimi CLI target power users with extensibility and cross-platform support. The sector is converging on common primitives—plan mode, session management, MCP servers—while differentiation increasingly hinges on reliability, platform coverage, and billing transparency.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | 50 active | 7 | v2.1.75 (patch, 2026-03-13) | Plugin ecosystem accelerating; 3 new plugin PRs |
| **OpenAI Codex** | ~15 tracked | 10 | 7 alpha builds (.15–.21) | Intense Rust CLI stabilization; Windows focus |
| **Gemini CLI** | 10+ | 8+ | v0.35.0 nightly, v0.34.0-preview.3 | Plan mode hardening; security patches |
| **GitHub Copilot CLI** | 9+ | 0 | v1.0.5 (2026-03-13) | Low PR velocity; regression cluster emerging |
| **Kimi CLI** | 6 | 5 | v1.22.0 (2026-03-13) | Shell UX improvements; Windows/macOS bugs |
| **OpenCode** | 10+ | 10+ | v1.2.26 | Critical billing fix in review; plugin SDK expansion |
| **Qwen Code** | 23 | 30 | v0.12.3; v0.13.0 in progress | Highest PR velocity; Node SEA, /review skill |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Session lifecycle management** | Claude Code, Gemini CLI, Qwen Code, OpenCode | List/delete sessions (Claude #34168), persistent approvals (Qwen #2335), compression durability (Gemini #21812), session history pagination (OpenCode v1.2.26) |
| **Plan mode reliability** | Gemini CLI, Claude Code, GitHub Copilot CLI | Context ghosting (Gemini #22266), stale plan display (Gemini #22307), ignored user intent (Copilot #2017), autonomy boundaries |
| **MCP server ecosystem** | Claude Code, GitHub Copilot CLI, Gemini CLI, Qwen Code | Local server detection (Copilot #679), auth UX (Qwen #2327), ACP compatibility (Gemini #22191), rich iframe UIs (OpenCode #15926) |
| **Cross-platform hardening** | OpenAI Codex, Claude Code, Kimi CLI, OpenCode | Windows ARM64 (OpenCode #4340, Codex #10410), Intel Mac support (Codex #10410), FreeBSD (Claude #30640), Linux aarch64 (Claude #34203) |
| **Theme/system integration** | Claude Code, Gemini CLI | Auto light/dark switching (Claude #2990, 174👍), terminal color safety (Gemini #21832) |
| **Voice mode parity** | Claude Code, Gemini CLI, OpenCode | Advertised-but-broken /voice (Claude #33918), animated waveform (Gemini #21115), blocked by SDK gaps (OpenCode #17425) |
| **Billing/usage transparency** | OpenCode, OpenAI Codex | Copilot misclassification (OpenCode #8030, 176 comments), token burn regressions (Codex #14593), rate limit clarity |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach |
|:---|:---|:---|:---|
| **Claude Code** | Plugin extensibility, agent hierarchy | Enterprise teams, power users | TypeScript-based; rich hook/event system; Max plan tiering |
| **OpenAI Codex** | Rust CLI performance, sandboxed execution | Performance-sensitive, security-conscious | Rust rewrite; `codex-exec-server` JSON-RPC; rapid alpha iteration |
| **Gemini CLI** | Plan mode, multi-agent orchestration | Google ecosystem, agentic workflow adopters | ACP (Agent Communication Protocol); Flash-powered heuristics |
| **GitHub Copilot CLI** | IDE integration, GitHub-native workflows | VS Code-centric developers, existing Copilot subscribers | Tight GitHub/VS Code coupling; autopilot autonomy |
| **OpenCode** | Plugin SDK, model flexibility, BYOK | Multi-provider power users, air-gapped enterprises | Effect/Zod architecture; deep MCP integration; Bun/Node targets |
| **Kimi CLI** | Shell UX, PTY session fidelity | Terminal-native developers | Prompt/placeholder abstraction; async input experiments |
| **Qwen Code** | Bundled skills, distribution simplicity | Qwen model users, standalone executable seekers | Node SEA binaries; bundled `/review` skill; agent arenas |

**Key Technical Divides:**
- **Language**: Rust (Codex) vs. TypeScript/Node (Claude, OpenCode, Qwen, Kimi) vs. Go/internal (Gemini, Copilot)
- **Execution model**: Sandboxed exec-server (Codex) vs. PTY sessions (Kimi) vs. ACP-isolated agents (Gemini)
- **Extensibility**: Plugin SDK maturity (Claude, OpenCode) vs. bundled skills (Qwen) vs. MCP-centric (Gemini, Copilot)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **High velocity, stabilizing** | OpenAI Codex, Gemini CLI, Qwen Code | 7 alphas/24h (Codex); 30 PRs/23 issues (Qwen); Plan mode launch-blocking fixes (Gemini) |
| **Mature, friction accumulation** | Claude Code, OpenCode | 2+ year-old issues persist (#2990 theme); plugin ecosystem growth; critical billing fixes |
| **Integration-dependent, slower iteration** | GitHub Copilot CLI, Kimi CLI | Low PR velocity (0 Copilot PRs); regression-focused; IDE coupling constraints |

**Community Health Signals:**
- **Most engaged issue**: OpenCode #8030 (Copilot billing, 176 comments) — indicates production deployment scale
- **Longest-running pain point**: Claude Code #2990 (theme auto-switching, 174👍, 2+ years) — polish gap in mature tool
- **Fastest maintainer response**: Gemini CLI plan mode bugs (maintainer-tagged within hours) — launch-critical prioritization

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **Agent autonomy boundaries** | Ignored user intent (Copilot #2017), infinite loops (Copilot #1532), permission fatigue (Claude #16561) | Design explicit human-in-the-loop checkpoints; expect regulatory scrutiny on autonomous actions |
| **Context window as competitive vector** | 1M token regressions (Claude #26428, OpenCode #12338), compression investments (Gemini epic #21792) | Long-context workflows becoming table stakes; monitor truncation behavior |
| **MCP as emergent standard** | All tools implementing; rich UIs (OpenCode), OAuth flows (Qwen), ACP conflicts (Gemini) | Prioritize MCP server development; expect interoperability pressure |
| **Privacy/feature trade-off tension** | `DISABLE_TELEMETRY` breaks models (Claude #34178), air-gapped deployment blockers (OpenCode #17406) | Enterprise procurement will demand offline capability; telemetry ethics becoming differentiator |
| **Windows as persistent second-class platform** | File deletion risks (Codex #14487), permission races (Kimi #1429), ARM64 gaps | Linux/macOS still primary; Windows investment accelerating but lagging |
| **Billing model complexity** | Agent vs. user request classification (OpenCode #8030), token burn opacity (Codex #14593) | Cost attribution becoming architectural concern; expect usage-based pricing evolution |

---

*Report compiled from 2026-03-14 community digests across 7 active repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-14**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Functionality | Status |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | 🟡 Open (active, updated 2026-03-13) |
| 2 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating Skills across 5 quality dimensions and security auditing | 🟡 Open (stale, last update 2026-01-07) |
| 3 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | Revised for clarity and actionability—ensures every instruction is executable in a single conversation | 🟡 Open (active, updated 2026-03-07) |
| 4 | **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | AI-powered image/video generation via Masonry CLI (Imagen 3.0, Veo 3.1) with job management | 🟡 Open (active, updated 2026-03-12) |
| 5 | **system-documentation** | [#95](https://github.com/anthropics/skills/pull/95) | Comprehensive evidence management system docs with flowcharts, architecture, and lifecycle workflows | 🟡 Open (stale, last update 2025-11-12) |
| 6 | **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory system for AI agents maintaining context across conversations | 🟡 Open (active, updated 2026-03-03) |
| 7 | **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument text creation, template filling, and ODT-to-HTML parsing (LibreOffice/ISO standard) | 🟡 Open (active, updated 2026-03-09) |
| 8 | **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Persistent knowledge capture across Claude Code sessions via tagged Markdown entries in `.claude/knowledge/` | 🟡 Open (active, updated 2026-03-09) |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Agent Memory & Context Persistence** | Top pain point: Claude loses all context between sessions | [#62](https://github.com/anthropics/skills/issues/62) (skill loss), [#154](https://github.com/anthropics/skills/pull/154), [#521](https://github.com/anthropics/skills/pull/521) |
| **Skill-Creator Tooling Improvements** | Meta-tooling for building better Skills is underdeveloped | [#202](https://github.com/anthropics/skills/issues/202) (skill-creator needs rewrite), [#532](https://github.com/anthropics/skills/issues/532) (API key barriers) |
| **MCP Integration & Standardization** | Strong push to expose Skills as MCPs or integrate MCP Apps | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) |
| **Enterprise/SSO Compatibility** | Authentication friction for enterprise deployments | [#532](https://github.com/anthropics/skills/issues/532), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) |
| **Agent Governance & Safety** | Emerging demand for safety patterns in multi-agent systems | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal) |
| **Document Quality & Output Polish** | Typography, formatting, and professional document standards | [#514](https://github.com/anthropics/skills/pull/514), [#143](https://github.com/anthropics/skills/pull/143), [#486](https://github.com/anthropics/skills/pull/486) |

---

## 3. High-Potential Pending Skills

These active PRs show recent momentum and may merge soon:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Addresses universal pain point in AI document generation; actively maintained (9-day update window) |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | Fills critical gap in open-standard document workflows; enterprise-relevant |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Directly solves #1 community pain point (session persistence); minimal scope |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | High-utility multimedia generation; active maintainer engagement |
| **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | Quality upgrade to existing Skill; clear, actionable improvements |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | Addresses technical debt at scale; 10-step systematic workflow |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent agent memory and session continuity**—evidenced by multiple competing implementations (shodh-memory, record-knowledge), high-engagement issues about skill/data loss, and meta-level investment in knowledge management infrastructure.

Secondary concentration: **professional document output quality** (typography, ODT, formatting standards), reflecting enterprise adoption where AI-generated deliverables must meet production standards.

---

*Report generated from anthropics/skills repository data. All links: https://github.com/anthropics/skills*

---

# Claude Code Community Digest — 2026-03-14

## Today's Highlights

A new patch release (v2.1.75) dropped yesterday with no detailed changelog, while the community continues to surface critical UX friction around copy/paste formatting and theme management. Plugin ecosystem activity is accelerating with three new plugin PRs submitted in the last 24 hours, including a highly-requested session management plugin.

---

## Releases

| Version | Date | Notes |
|---------|------|-------|
| [v2.1.75](https://github.com/anthropics/claude-code/releases/tag/v2.1.75) | 2026-03-13 | Patch release; no detailed release notes provided |

---

## Hot Issues

| # | Title | Status | 👍 | Why It Matters |
|---|-------|--------|-----|---------------|
| [#18170](https://github.com/anthropics/claude-code/issues/18170) | Copy/paste from terminal includes unwanted indentation and trailing spaces | 🔴 Open | 98 | **Most-upvoted active issue.** Breaks workflow integration—copied code requires manual cleanup before reuse. 51 comments show sustained frustration; affects daily productivity for terminal-centric users. |
| [#2990](https://github.com/anthropics/claude-code/issues/2990) | Automatic light/dark theme selection? | 🔴 Open | 174 | **Long-standing UX gap.** Users with auto-switching terminals manually toggle themes daily. High engagement (31 comments) suggests this is a polish issue blocking seamless IDE integration. |
| [#26428](https://github.com/anthropics/claude-code/issues/26428) | Sonnet 1M context window disappeared after update — regression on Max plan | 🟢 Closed | 21 | **Revenue-critical bug.** Paying Max subscribers ($200/mo) lost access to a tier-defining feature. Rapid closure (48 comments) indicates Anthropic prioritized this, but trust impact lingers. |
| [#17087](https://github.com/anthropics/claude-code/issues/17087) | Empty read-only dotfiles created during Bash tool execution | 🟢 Closed | 69 | **Workspace pollution.** Silent file creation clutters repos and breaks `.gitignore` assumptions. Closure suggests fix shipped; pattern of "silent side effects" worth monitoring. |
| [#16561](https://github.com/anthropics/claude-code/issues/16561) | Parse compound Bash commands and match each component against permissions | 🔴 Open | 78 | **Security/UX intersection.** Users want granular permissions for `&&`/`\|` chains; current all-or-nothing approval creates friction for safe, complex commands. |
| [#33000](https://github.com/anthropics/claude-code/issues/33000) | `/effort` slash command shown in status bar but returns 'Unknown skill' | 🔴 Open | 25 | **UI/UX inconsistency.** Status bar advertises non-functional feature—suggests either incomplete rollout or documentation drift. Low-effort fix, high visibility. |
| [#30640](https://github.com/anthropics/claude-code/issues/30640) | Native installer doesn't work on FreeBSD | 🔴 Open | 19 | **Platform support gap.** Bot closure without discussion triggered reopening; signals need for better unsupported-platform handling. Niche but vocal BSD community. |
| [#34167](https://github.com/anthropics/claude-code/issues/34167) | Scroll position jumps when Claude streams output during upward scrolling | 🔴 Open | 9 | **Recent regression in v2.1.75.** Breaks reading comprehension during active sessions—users cannot review history while output streams. |
| [#34178](https://github.com/anthropics/claude-code/issues/34178) | `DISABLE_TELEMETRY` silently disables Opus 4.6 1M model on eligible plans | 🔴 Open | 2 | **Privacy/feature trade-off bug.** Users opting out of telemetry lose access to premium models without warning. Ethical and contractual concern for privacy-conscious enterprises. |
| [#34203](https://github.com/anthropics/claude-code/issues/34203) | VS Code Extension Authentication Completely Broken on Linux aarch64 | 🔴 Open | 0 | **Platform-specific blocker.** Complete auth failure on ARM Linux prevents IDE integration; emerging architecture support gap. |

---

## Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#34168](https://github.com/anthropics/claude-code/pull/34168) | Sessions plugin for listing and deleting sessions | 🟡 Open | **Community-requested feature.** Adds `/sessions:list` and `/sessions:delete` with project-scoped defaults and cross-platform path handling. Addresses long-standing session management gap. |
| [#32755](https://github.com/anthropics/claude-code/pull/32755) | Edit-verifier plugin for post-edit verification | 🟡 Open | **Reliability improvement.** Hooks into `Edit` tool to verify changes applied correctly; prevents silent failures from whitespace mismatches. Addresses [#32658](https://github.com/anthropics/claude-code/issues/32658). |
| [#33918](https://github.com/anthropics/claude-code/pull/33918) | Voice-mode plugin with `/voice` command | 🟡 Open | **Fixes broken promise.** Startup banner advertises `/voice` but returns "Unknown skill" for plugin-enabled users. Bridges gap between marketing and implementation. |
| [#23348](https://github.com/anthropics/claude-code/pull/23348) | Windows-null-redirect-fix plugin | 🟡 Open | **Platform-specific bugfix.** Prevents `nul` file creation on Git Bash/MSYS; redirects properly to Windows null device. Addresses [#23343](https://github.com/anthropics/claude-code/issues/23343). |
| [#30596](https://github.com/anthropics/claude-code/pull/30596) | Add CLAUDE.md with codebase structure and conventions | 🟢 Closed | **Documentation foundation.** Comprehensive guide for AI assistants working in repo—plugin architecture, conventions, workflows. Enables better community contributions. |
| [#33710](https://github.com/anthropics/claude-code/pull/33710) | Complete town simulator game with entities, systems, rendering | 🟡 Open | **Demo project.** Vanilla JS/Canvas town simulation—likely community showcase or test case for agent capabilities. |
| [#34010](https://github.com/anthropics/claude-code/pull/34010) | Add three new client websites and building inspection AI app | 🟢 Closed | **Community projects.** Finnish renovation landing page, AI phone service, and building inspection full-stack app. |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Session lifecycle management** | [#34168](https://github.com/anthropics/claude-code/pull/34168), [#30869](https://github.com/anthropics/claude-code/issues/30869) | 🔥 High — unarchive, list, delete operations all requested |
| **Theme/system integration** | [#2990](https://github.com/anthropics/claude-code/issues/2990) | 🔥 High — 174 upvotes, 2+ year old request |
| **Permission granularity** | [#16561](https://github.com/anthropics/claude-code/issues/16561) | Medium — security-conscious users want compound command parsing |
| **Hook/event system expansion** | [#14859](https://github.com/anthropics/claude-code/issues/14859) | Medium — agent hierarchy, intermediate output hooks for external integrations |
| **Voice mode parity** | [#33918](https://github.com/anthropics/claude-code/pull/33918) | Medium — gap between advertised and available features |
| **Desktop UX customization** | [#34194](https://github.com/anthropics/claude-code/issues/34194) | Emerging — decluttering requests suggest power-user friction |

---

## Developer Pain Points

| Issue | Frequency | Impact | Workaround Status |
|-------|-----------|--------|-------------------|
| **Copy/paste formatting corruption** | Chronic | Daily workflow disruption | Manual cleanup required; no fix in sight |
| **Theme switching friction** | Chronic | Accessibility/readability issues | Manual `/theme` commands |
| **Silent tool failures** | Recurring | Incorrect assumptions, debugging overhead | Community plugin (#32755) addresses Edit tool |
| **Permission fatigue on compound commands** | Recurring | Approval spam for safe operations | None; feature request pending |
| **Telemetry/privacy vs. feature access** | Emerging | Forced trade-offs for privacy-conscious users | None documented |
| **Platform support gaps (FreeBSD, Linux aarch64)** | Recurring | Complete exclusion from toolchains | Community workarounds only |
| **UI-advertised features non-functional** | Sporadic | Trust erosion | Case-by-case plugin fixes |

---

*Digest compiled from 50 active issues and 7 pull requests. Data source: [anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-14

---

## 1. Today's Highlights

The Codex team is rapidly iterating on the Rust CLI core with **7 alpha releases** (v0.115.0-alpha.15 through .21) in 24 hours, suggesting intense stabilization work ahead of a broader release. Windows platform reliability remains a critical focus, with multiple PRs addressing CI stability, sandboxing, and execution path normalization. Meanwhile, the community continues to push for expanded platform support (Intel Macs, Remote SSH) and tighter IDE integrations (LSP, multi-account auth).

---

## 2. Releases

| Version | Notes |
|--------|-------|
| `rust-v0.115.0-alpha.15` → `rust-v0.115.0-alpha.21` | Rapid-fire alpha sequence with no detailed changelogs; likely internal CI/build fixes and pre-release stabilization. No user-facing release notes provided. |

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#10410](https://github.com/openai/codex/issues/10410) | macOS Intel (x86_64) support | Large enterprise/developer segment still on Intel hardware; current Apple Silicon-only builds exclude significant user base. | **157 👍, 117 comments** — highest-engagement feature request, persistent since Feb 2026. |
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | Critical gap vs. VS Code workflows; developers need SSH/container remote support for server-side development. | **338 👍, 50 comments** — top-voted open issue, strong enterprise demand. |
| [#12764](https://github.com/openai/codex/issues/12764) | CLI 401 Unauthorized errors | Blocking auth failures affecting Windows users; suggests token refresh or API routing issues. | 68 comments, ongoing troubleshooting with OpenAI staff. |
| [#8745](https://github.com/openai/codex/issues/8745) | LSP integration (auto-detect + auto-install) | Would dramatically improve code intelligence and reduce hallucinations; bridges gap to mature IDE features. | **173 👍**, 33 comments — strong tooling ecosystem demand. |
| [#14331](https://github.com/openai/codex/issues/14331) | GPT-5.3-Codex model fails on paid accounts | Model availability/entitlement bug blocking Pro/Plus subscribers from accessing latest Codex models. | 24 comments, multiple confirmations, severity flagged. |
| [#14593](https://github.com/openai/codex/issues/14593) | Token burn rate excessive after VS Code extension update | Cost control concern for Business-tier users; suggests regression in context management or billing attribution. | 17 comments, urgent tone from affected orgs. |
| [#14346](https://github.com/openai/codex/issues/14346) | Context Compaction Hanging | GPT-5.4 "Extra High" mode stalls on long sessions; impacts productivity for power users with large codebases. | 13 👍, 13 comments — reliability concern for advanced tier. |
| [#14450](https://github.com/openai/codex/issues/14450) | Windows menu bar buttons unresponsive | Basic UI functionality broken on Windows desktop app; users cannot access Help → About to even report versions. | 13 👍, 5 comments — Windows polish gap. |
| [#14487](https://github.com/openai/codex/issues/14487) | **Critical: Unexpected file deletion on Windows 11** | Data loss incident on D: drive during Codex CLI execution; sandbox/permission escalation concern. | 3 comments, flagged as critical — requires immediate investigation. |
| [#12029](https://github.com/openai/codex/issues/12029) | Multi-account support | Corporate + personal account switching is standard developer need; current single-account design blocks real-world adoption. | 3 👍, 4 comments — workflow blocker for consultants/enterprise devs. |

---

## 4. Key PR Progress

| # | Title | Feature/Fix Description |
|---|-------|------------------------|
| [#14645](https://github.com/openai/codex/pull/14645) | Fix Windows CI assertions for guardian and Smart Approvals | Cross-platform path normalization (forward slashes) and deterministic test defaults for Windows/non-Windows parity. |
| [#14648](https://github.com/openai/codex/pull/14648) | Publish codex app-server Python SDK core and bundled packages | Splits Python SDK into runtime-free core + bundled metapackage; enables cleaner dependency management for SDK consumers. |
| [#14170](https://github.com/openai/codex/pull/14170) | Queue slash commands in TUI | UX improvement: `/review` and other slash commands entered mid-turn now queue instead of failing; better async handling. |
| [#13465](https://github.com/openai/codex/pull/13465) | Standardize context fragment handling | Architectural refactor unifying model-visible context injection with typed fragments and envelope builders; improves maintainability. |
| [#14619](https://github.com/openai/codex/pull/14619) | Persist future network host approvals across sessions | Security UX fix: "allow this host in the future" selections now survive session restarts via execpolicy persistence. |
| [#14615](https://github.com/openai/codex/pull/14615) | Move skills loading onto the app-server | Eliminates TUI-specific skills plumbing; consolidates API surface and reduces code duplication across clients. |
| [#14649](https://github.com/openai/codex/pull/14649) | Make defaultPrompt an array, keep backcompat | Plugin system enhancement: supports up to 3 prompt variants (128 char limit each) for richer plugin behaviors. |
| [#12481](https://github.com/openai/codex/pull/12481) | Auto-unarchive resume targets safely | Reliability fix for thread resumption: validates archived rollouts before restoration, prevents corruption of active sessions. |
| [#14643](https://github.com/openai/codex/pull/14643) | Add exec-server transport for unified exec | New `codex-exec-server` crate with JSON-RPC stdio interface; gates behind `experimental_exec_server` flag — foundation for sandboxed execution. |
| [#14611](https://github.com/openai/codex/pull/14611) | Add auth 401 recovery observability | Telemetry improvement: tags Sentry reports with 401 auth recovery events for faster incident response. |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Remote/SSH development parity** | #10450 (338 👍), #14620, #10410 | Users want Codex Desktop to match VS Code's remote capabilities; cloud/VM development is standard. |
| **Enterprise auth & multi-tenancy** | #12029, #14628, #8631 | Corporate users need org-separated billing, multiple accounts, and clear entitlement management. |
| **Windows-first stability** | #14450, #14461, #14364, #14645, #14487 | Windows desktop and CLI reliability is lagging; significant engineering investment visible in PRs. |
| **LSP/IDE ecosystem integration** | #8745 (173 👍), #2153 | Codex as intelligent agent needs to leverage existing language tooling, not replace it. |
| **Model access transparency** | #14331, #14190, #13854 | Confusion over which models are available to which subscription tiers; entitlement UX needs clarity. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestation |
|------------|-----------|---------------|
| **Authentication & entitlement fragility** | Very High | 401 errors (#12764), model access denials on paid accounts (#14331, #14190), rate limit attribution errors (#13854, #14628) — suggests auth pipeline instability. |
| **Windows as second-class platform** | High | Menu bar failures (#14450), WSL integration breaks (#14461), missing runtime dependencies (#14364), file deletion risks (#14487) — Windows users report more critical bugs. |
| **Context/window management reliability** | High | Compaction hangs (#14346), token burn regressions (#14593), thread disappearance (#10917) — long-session stability remains inconsistent. |
| **Intel Mac exclusion** | Medium-High | #10410 is oldest high-vote issue; hardware support decisions directly impact accessibility for cost-conscious developers. |
| **Sandbox/execution safety trust** | Emerging | #14487 (file deletion) and guardian/approval system complexity (#14645) indicate user concern about agent autonomy boundaries. |

---

*Digest compiled from github.com/openai/codex activity for 2026-03-14.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-14

---

## 1. Today's Highlights

The v0.35.0 nightly build landed with internal cleanups including theme screenshot updates and key naming standardization, while the v0.34.0 preview channel received a security patch for keychain fallback handling. Meanwhile, the community is actively stress-testing Plan mode, surfacing critical context-loss bugs and rendering glitches that the core team is tracking for launch stabilization.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.35.0-nightly.20260313** | Theme documentation refresh; internal refactor renaming 'return' to 'enter' key handling; release pipeline fixes. [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-nightly.20260313.bb060d7a9) |
| **v0.34.0-preview.3** | Cherry-picked security patch moving keychain fallback to encrypted file storage (24adacd). [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-preview.3) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22266](https://github.com/google-gemini/gemini-cli/issues/22266) | Agent "ghosts" context after `/plan` approval | **Critical workflow breaker**: Plans generate successfully but execution never starts; user loses entire context. 6 comments indicate rapid team attention. | 🔴 High priority, maintainer-tagged |
| [#21925](https://github.com/google-gemini/gemini-cli/issues/21925) | Hand icon falsely indicates action required | Persistent UI noise during long shell scripts erodes trust in the attention system. Jacob314 (core contributor) filed with repro. | 🟡 UX reliability concern |
| [#22392](https://github.com/google-gemini/gemini-cli/issues/22392) | `tmp/` subdirectory confuses file references | Edge case in path resolution logic where local `tmp/` collides with system assumptions. Fresh report, 2 comments. | 🟡 Triage-needed |
| [#22307](https://github.com/google-gemini/gemini-cli/issues/22307) | Plan mode shows stale plan from previous request | State management bug causing dangerous confusion—users may approve wrong plan. | 🔴 Data integrity risk |
| [#22028](https://github.com/google-gemini/gemini-cli/issues/22028) | VS Code terminal scrolls to top on any click | Daily friction for IDE-embedded workflow; video repro attached. | 🟡 IDE integration polish |
| [#21792](https://github.com/google-gemini/gemini-cli/issues/21792) | Epic: Session Continuity & Coherence | Strategic roadmap item from joshualitt addressing context degradation, compression, and long-running session architecture. | 🔵 Architecture direction |
| [#21688](https://github.com/google-gemini/gemini-cli/issues/21688) | Sub-agent thought messages concatenated without spaces | TUI readability regression; real-time progress tracking becomes illegible. | 🟡 Polish item |
| [#22191](https://github.com/google-gemini/gemini-cli/issues/22191) | Plan mode completely broken under ACP | Agent can't locate plan write directory in sandboxed environments; infinite loop. Blocks enterprise/CI usage. | 🔴 Platform compatibility |
| [#22374](https://github.com/google-gemini/gemini-cli/issues/22374) | `cli_help` agent lacks `get_internal_docs` in Plan mode | Self-documentation feature gap when users need CLI help mid-planning. | 🟡 Feature parity |
| [#21743](https://github.com/google-gemini/gemini-cli/issues/21743) | Double footer render on ESC from expanded plan | Visual glitch indicating TUI state management fragility. | 🟢 Cosmetic |

---

## 4. Key PR Progress

| # | PR | Status | What It Delivers |
|---|-----|--------|------------------|
| [#22332](https://github.com/google-gemini/gemini-cli/pull/22332) | Move keychain fallback to keychain service | ✅ **Merged** | Security hardening: encrypted file fallback now covers all service consumers (extensions, etc.) |
| [#22382](https://github.com/google-gemini/gemini-cli/pull/22382) | Session-specific temp directory for task tracker | ✅ **Merged** | Fixes cross-session collisions in tracker storage; closes [#22198](https://github.com/google-gemini/gemini-cli/issues/22198) |
| [#22305](https://github.com/google-gemini/gemini-cli/pull/22305) | LSP-based post-write diagnostic feedback | ✅ **Merged** | Auto-surfaces compiler errors/warnings after `replace`/`write_file` via language server integration |
| [#21115](https://github.com/google-gemini/gemini-cli/pull/21115) | Animated waveform visualizer for voice mode | 🔄 **Open** | Rich TUI feedback: idle/hidden → green ripples (listening) → yellow pulse (processing) → active waveform (speaking) |
| [#21146](https://github.com/google-gemini/gemini-cli/pull/21146) | `ask` decision support for BeforeTool hooks | 🔄 **Open** | New hook capability allowing tools to pause for explicit user input mid-execution |
| [#21812](https://github.com/google-gemini/gemini-cli/pull/21812) | Preserve saved memory in compression snapshots | 🔄 **Open** | Critical fix for memory durability across compression cycles; closes contract gap |
| [#22389](https://github.com/google-gemini/gemini-cli/pull/22389) | A2A agent acknowledgment + registry discovery | 🔄 **Open** | Trust validation, idempotent client management, and `acknowledge-agent` command for multi-agent ecosystems |
| [#21503](https://github.com/google-gemini/gemini-cli/pull/21503) | Topic-Action-Summary verbosity reduction | 🔄 **Open** | Experimental `topicUpdateNarration` setting to suppress repetitive "Update: still working..." noise |
| [#21650](https://github.com/google-gemini/gemini-cli/pull/21650) | LLM-suggested policy scoping for approvals | 🔄 **Open** | Flash-powered smart scoping when users approve tools—reduces over-permissioning via heuristic fallback |
| [#22386](https://github.com/google-gemini/gemini-cli/pull/22386) | Agents directory check for folder trust | 🔄 **Open** | Migrates from `experimental.enableAgents` config to `.gemini/agents/` presence detection |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Context lifecycle management** | Epic [#21792](https://github.com/google-gemini/gemini-cli/issues/21792), compression enhancements ([#21890](https://github.com/google-gemini/gemini-cli/issues/21890), [#21892](https://github.com/google-gemini/gemini-cli/issues/21892), [#21891](https://github.com/google-gemini/gemini-cli/issues/21891)), checkpoint durability [#21920](https://github.com/google-gemini/gemini-cli/issues/21920) | 🔥 **Highest priority** — entire workstream-rollup tagged |
| **Plan mode hardening** | Context ghosting [#22266](https://github.com/google-gemini/gemini-cli/issues/22266), stale plans [#22307](https://github.com/google-gemini/gemini-cli/issues/22307), ACP incompatibility [#22191](https://github.com/google-gemini/gemini-cli/issues/22191), render glitches [#21743](https://github.com/google-gemini/gemini-cli/issues/21743) | 🔥 **Launch-blocking** |
| **TUI performance & polish** | Resize flickering [#21924](https://github.com/google-gemini/gemini-cli/issues/21924), scroll jumping [#22028](https://github.com/google-gemini/gemini-cli/issues/22028), 256-color safety [#21832](https://github.com/google-gemini/gemini-cli/issues/21832), thought formatting [#21688](https://github.com/google-gemini/gemini-cli/issues/21688) | 🌡️ **Active refinement** |
| **Agent self-awareness** | CLI flags/hotkeys knowledge [#21432](https://github.com/google-gemini/gemini-cli/issues/21432), automatic skill recommendations [#21421](https://github.com/google-gemini/gemini-cli/issues/21421) | 🌡️ **Emerging** |
| **Security hardening** | `disableAlwaysAllow` [#21941](https://github.com/google-gemini/gemini-cli/pull/21941), keychain encryption [#22332](https://github.com/google-gemini/gemini-cli/pull/22332), policy scoping [#21650](https://github.com/google-gemini/gemini-cli/pull/21650) | 🌡️ **Steady investment** |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Frequency |
|------------|-------------|-----------|
| **Plan mode reliability** | Silent context drops, stale plan display, ACP sandbox failures, double-footers | 🔴 **Critical cluster** — 5+ related issues in 48h |
| **Context window degradation** | Lost constraints, forgotten user intent in long sessions; compression feels opaque | 🟡 **Chronic** — driving entire "Session Continuity" epic |
| **False-positive interruptions** | Hand icon spam during long shell commands trains users to ignore real signals | 🟡 **Trust erosion** |
| **TUI fragility** | Scroll position resets, resize flicker, color fallback gaps | 🟡 **Daily friction** |
| **Shell environment gaps** | Aliases unsupported [#21461](https://github.com/google-gemini/gemini-cli/issues/21461), `tmp/` path confusion [#22392](https://github.com/google-gemini/gemini-cli/issues/22392) | 🟢 **Edge cases accumulating** |

---

*Digest compiled from google-gemini/gemini-cli public activity. For real-time updates: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-14

---

## 1. Today's Highlights

GitHub shipped Copilot CLI **v1.0.5** with expanded file mention capabilities and a new `/extensions` command for managing CLI extensions. Meanwhile, the community surfaced critical regressions including broken `copilot init` CLI workflows and terminal state corruption after exit. MCP server authentication and autopilot reliability remain active pain points with multiple new issues filed.

---

## 2. Releases

### v1.0.5 (2026-03-13)
| Change | Impact |
|--------|--------|
| Terminal title preservation fix | Resolves UX papercut after `/clear` or `/new` |
| `/extensions` command | New first-class interface for extension lifecycle management |
| Expanded `@` file mentions | Absolute paths (`@/usr/...`), home directory (`@~/...`), and relative parent paths (`@../...`) now supported |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1202](https://github.com/github/copilot-cli/issues/1202) | Screen flicker with cursor blink on "No, and tell Copilot what to do differently" | Windows Terminal/PowerShell users experiencing disruptive visual artifacts; affects daily workflow reliability | 34 👍, 34 comments — highest engagement |
| [#679](https://github.com/github/copilot-cli/issues/679) | Local MCP server detection broken since 0.0.359 | Regression blocking local tool integration; users pinned to 0.0.358 | 5 👍, ongoing since Nov 2025 |
| [#1532](https://github.com/github/copilot-cli/issues/1532) | Autopilot infinite loop when `task_complete` unavailable | **Cost impact**: consumed ~20% of premium quota before manual cancellation | 2 👍, request for usage recovery |
| [#2002](https://github.com/github/copilot-cli/issues/2002) | `copilot init` CLI command broken (no .md created) | Regression breaking automated setup workflows; `/init` still works | Just filed, 3 comments |
| [#1157](https://github.com/github/copilot-cli/issues/1157) | Global hooks configuration request | Gap vs. Claude Code/Cursor; per-repo `.github/copilot-hooks.json` is repetitive | 14 👍, strong feature demand |
| [#1840](https://github.com/github/copilot-cli/issues/1840) | Auto-update broken since 0.0.420 | "Bad credentials" error blocking security patches | 7 👍, affects update reliability |
| [#2009](https://github.com/github/copilot-cli/issues/2009) | Terminal left broken after quitting | Control sequences leak (`4;5u`, `8;5u`) requiring `reset` | Workaround documented in issue |
| [#1675](https://github.com/github/copilot-cli/issues/1675) | Checkpoint restore permanently deletes untracked files | `git clean -fd` is destructive; data loss risk | 1 comment, severity acknowledged |
| [#2017](https://github.com/github/copilot-cli/issues/2017) | Plan mode "exit and prompt myself" ignored | Autonomy boundary violation — Copilot proceeds despite explicit user choice | 1 👍, just filed |
| [#2022](https://github.com/github/copilot-cli/issues/2022) | `/extensions` documented but unrecognized | Release notes/implementation drift; confusion in v1.0.5 | 1 comment, verification needed |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **BYOK / Custom models** | [#973](https://github.com/github/copilot-cli/issues/973) | 16 👍; enterprise demand for provider flexibility |
| **Global/centralized configuration** | [#1157](https://github.com/github/copilot-cli/issues/1157) | Cross-cutting vs. per-repo repetition |
| **MCP server reliability & UX** | [#679](https://github.com/github/copilot-cli/issues/679), [#2026](https://github.com/github/copilot-cli/issues/2026) | Auth-on-demand, status visibility, startup performance |
| **Autopilot safety controls** | [#1532](https://github.com/github/copilot-cli/issues/1532), [#2025](https://github.com/github/copilot-cli/issues/2025) | Infinite loop prevention, true non-blocking queues |
| **Terminal state integrity** | [#2009](https://github.com/github/copilot-cli/issues/2009), [#2018](https://github.com/github/copilot-cli/issues/2018) | Cleanup on exit, scroll/selection restoration |
| **Granular approval workflows** | [#2015](https://github.com/github/copilot-cli/issues/2015) | Per-file vs. directory-level permissions |

---

## 6. Developer Pain Points

| Category | Specific Issues | Severity |
|----------|---------------|----------|
| **Terminal corruption** | Exit state broken ([#2009](https://github.com/github/copilot-cli/issues/2009)), scroll/selection failure ([#2018](https://github.com/github/copilot-cli/issues/2018)), flicker ([#1202](https://github.com/github/copilot-cli/issues/1202)) | High — daily workflow friction |
| **Autopilot trust & cost** | Infinite loops ([#1532](https://github.com/github/copilot-cli/issues/1532)), ignored user intent ([#2017](https://github.com/github/copilot-cli/issues/2017)) | High — quota and safety concerns |
| **MCP integration fragility** | Local server detection ([#679](https://github.com/github/copilot-cli/issues/679)), auth timing ([#2026](https://github.com/github/copilot-cli/issues/2026)) | Medium-High — ecosystem adoption blocker |
| **Configuration ergonomics** | Global hooks ([#1157](https://github.com/github/copilot-cli/issues/1157)), custom agent name collisions ([#1528](https://github.com/github/copilot-cli/issues/1528), [#2024](https://github.com/github/copilot-cli/issues/2024)) | Medium — scale/team friction |
| **Update mechanism** | Auto-update auth failure ([#1840](https://github.com/github/copilot-cli/issues/1840)) | Medium — security patch delivery |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-03-13 to 2026-03-14.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-14

---

## 1. Today's Highlights

Version 1.22.0 shipped with significant shell UX improvements and expanded test coverage for PTY session management. The release addresses long-standing input handling fragility through a new `PromptPlaceholderManager` abstraction. Meanwhile, the issue tracker shows elevated activity around Windows concurrency bugs and macOS clipboard inconsistencies.

---

## 2. Releases

### [v1.22.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.22.0) — 2026-03-13

| Change | Impact |
|--------|--------|
| **Shell slash command enhancements** | Improved completer and menu functionality for faster terminal workflows |
| **Prompt/placeholder refactor** | New `PromptPlaceholderManager` separates text/image placeholder logic from input handling |
| **E2E test coverage** | Added PTY and session management tests reducing regression risk |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383) | Multi-agent rate limits despite membership | Core value proposition gap—users expect concurrent agent execution | 6 comments, active discussion on OpenClaw API quotas |
| [#1428](https://github.com/MoonshotAI/kimi-cli/issues/1428) | Web attachment button double-submits | Breaks file upload UX in web client | Fresh report, needs repro confirmation |
| [#1433](https://github.com/MoonshotAI/kimi-cli/issues/1433) | Cmd+V ignored for image paste on macOS | Platform parity gap—macOS users blocked from clipboard images | Zero engagement yet, typical platform-specific blind spot |
| [#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429) | Windows concurrent write Permission denied | File system race condition blocking Windows adoption | No comments, severity unclear without repro steps |
| [#1427](https://github.com/MoonshotAI/kimi-cli/issues/1427) | Verbose log output on CLI startup | Noise degrades first-run experience | Fresh report, likely logging level regression |
| [#1426](https://github.com/MoonshotAI/kimi-cli/issues/1426) | Input buffer cleared after agent output | Destroys user work-in-progress during streaming | Regression in 1.21.0's new async input feature |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1432](https://github.com/MoonshotAI/kimi-cli/pull/1432) | Version bump to 1.22.0 | Release orchestration with changelog sync | ✅ Merged |
| [#1430](https://github.com/MoonshotAI/kimi-cli/pull/1430) | Prompt placeholder refactor | Architectural cleanup enabling better image paste handling | ✅ Merged |
| [#1431](https://github.com/MoonshotAI/kimi-cli/pull/1431) | Shell slash command enhancements | Faster tab completion and contextual menus | ✅ Merged |
| [#1424](https://github.com/MoonshotAI/kimi-cli/pull/1424) | E2E tests for shell PTY/session | Test infrastructure for terminal emulation reliability | ✅ Merged |
| [#1131](https://github.com/MoonshotAI/kimi-cli/pull/1131) | AgentHooks for dogfooding | Extensible hook system: security gates (`block-dangerous-commands`) and quality checks (`enforce-tests`) | 🔄 Open since Feb 13 |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | Ruff 0.15.0 upgrade | Linting toolchain maintenance | 🔄 Open, Dependabot |

---

## 5. Feature Request Trends

**Cross-platform input parity** — Clipboard handling (Ctrl vs. Cmd modifiers) and Windows-specific file locking need systematic platform abstraction.

**Agent orchestration transparency** — Users want clearer visibility into why multi-agent scenarios hit rate limits; "membership rights" vs. "actual limits" confusion suggests documentation or enforcement gaps.

**Streaming UX refinement** — The 1.21.0 async input experiment shows promise but needs buffer persistence fixes.

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Platform-specific fragility** | Windows permission errors (#1429), macOS keybinding gaps (#1433) | Medium — affects adoption outside Linux |
| **Logging hygiene** | Startup noise (#1427), unclear log level controls | Low — quick fix likely |
| **State management in streaming** | Input loss on agent completion (#1426) | Medium — breaks async input value prop |
| **API quota clarity** | Multi-agent limits vs. membership expectations (#1383) | High — business model friction |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-03-13*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-14

## Today's Highlights

The community is actively addressing a critical billing issue where Copilot authentication misclassifies agent requests as premium user requests, with a targeted fix already in PR review. Meanwhile, v1.2.26 brings Bun installation improvements and session history pagination, while developers continue pushing for better plugin extensibility and cross-platform ARM64 support.

---

## Releases

**v1.2.26** — Core improvements for schema conversion, Bun compatibility, and performance:
- Scaffolded effect-to-Zod bridge for robust schema conversion
- Serialized configuration for streamlined Bun installations  
- Added text attachment support in the app interface
- Implemented session history pagination to reduce server load
- Fixed session loss bug when running `git init` in existing projects ([`@michaeldwan`](https://github.com/michaeldwan))
- Added fail-fast behavior for config dependency errors

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) **Copilot auth over-counting premium requests** — Agent-initiated requests incorrectly billed as "user" requests, consuming monthly quotas rapidly | **Critical billing/usage impact**; affects all GitHub Copilot users with agent workflows | 176 comments, 62 👍 — highest engagement; fix in active PR review |
| [#4340](https://github.com/anomalyco/opencode/issues/4340) **Windows ARM64 support** — Feature request for native Windows 11 ARM64 builds via WinGet, Chocolatey, npm | **Platform expansion**; unlocks Surface Pro X, Snapdragon dev machines, and Windows on ARM adoption | 32 comments, 23 👍; **closed** — implementation likely in progress |
| [#12338](https://github.com/anomalyco/opencode/issues/12338) **1M token limit for Opus 4.6 not working** — UI shows 200K limit despite 1M context window configuration | **Model capability gap**; blocks effective use of Anthropic's latest long-context model | 27 comments, 24 👍; active debugging on configuration parsing |
| [#12687](https://github.com/anomalyco/opencode/issues/12687) **Severe memory leak → kernel panic (macOS)** — TypeScript implementation causes unbounded growth leading to forced restart | **Stability blocker**; production reliability concern for intensive workflows | 21 comments; detailed reproduction steps provided |
| [#5034](https://github.com/anomalyco/opencode/issues/5034) **Ministral 3 support broken** — "system" role rejection prevents Mistral's latest model from functioning | **Provider compatibility**; blocks adoption of efficient local/edge models | 20 comments, 11 👍; role schema validation issue |
| [#7602](https://github.com/anomalyco/opencode/issues/7602) **Native model fallback/failover support** — No automatic retry across different models when rate-limited | **Reliability engineering**; critical for long-running autonomous agents | 19 comments, 51 👍 — strong demand for production resilience |
| [#17318](https://github.com/anomalyco/opencode/issues/17318) **SSE read timed out during file operations** — Streaming timeout interrupts code generation workflows | **Core stability**; breaks `planning-with-files` skill execution | 18 comments, 7 👍; fresh report from v1.2.25 |
| [#14289](https://github.com/anomalyco/opencode/issues/14289) **Claude Opus 4.6 vision not supported** — Model capability detection fails for latest Anthropic vision features | **Feature parity**; blocks multimodal workflows on newest model | 14 comments, 3 👍; Azure AI catalog reference provided |
| [#17406](https://github.com/anomalyco/opencode/issues/17406) **Web UI requires internet — CDN asset proxying** — Binary proxies all assets to `app.opencode.ai`, breaking air-gapped/corporate environments | **Enterprise/air-gap deployment blocker**; security/compliance concern | 2 comments; fundamental architecture issue |
| [#17425](https://github.com/anomalyco/opencode/issues/17425) **Plugin extensibility gaps blocking voice input** — Dictation/voice plugins cannot access required hooks and context injection | **Ecosystem growth**; highly requested feature (#4695, #9264, #11345) blocked by SDK limitations | 2 comments; detailed technical requirements provided |

---

## Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#17431](https://github.com/anomalyco/opencode/pull/17431) **Track compaction messages as agent-initiated** | Fixes Copilot billing misclassification from [#8030](https://github.com/anomalyco/opencode/issues/8030) | **Critical billing fix** — aligns with GitHub Copilot CLI behavior; under vouched review |
| [#15646](https://github.com/anomalyco/opencode/pull/15646) **Fix memory leaks: SSE, LSP, Bus, process cleanup** | Comprehensive leak remediation across streaming and language server subsystems | Addresses [#12687](https://github.com/anomalyco/opencode/issues/12687) kernel panic root cause; production stability |
| [#17404](https://github.com/anomalyco/opencode/pull/17404) **Prevent xAI/Grok oversized tool payloads** | Grammar complexity protection when reducing `activeTools` | Provider-specific reliability; Grok integration hardening |
| [#17198](https://github.com/anomalyco/opencode/pull/17198) **Add `/btw` background session command** | Lightweight background task execution without blocking main session | Workflow productivity; community-requested feature |
| [#15926](https://github.com/anomalyco/opencode/pull/15926) **MCP Apps support for rich iframe UIs** | Interactive sandboxed interfaces from MCP servers | **Major ecosystem expansion** — enables visual tools and dashboards |
| [#16941](https://github.com/anomalyco/opencode/pull/16941) **Extend plugin SDK: getAuth, routes, model.select** | Auth access, HTTP endpoints, and model sub-selection for plugins | Unblocks GitLab DAP extraction; plugin architecture maturation |
| [#17391](https://github.com/anomalyco/opencode/pull/17391) **Fix long workspace creation time** | Performance regression in desktop app for large codebases | UX improvement for enterprise-scale repositories |
| [#17423](https://github.com/anomalyco/opencode/pull/17423) **Configurable snapshot prune interval** | Prevents unbounded disk usage from automatic snapshots | Resource management; addresses [#17397](https://github.com/anomalyco/opencode/issues/17397) |
| [#15631](https://github.com/anomalyco/opencode/pull/15631) **Clickable URLs and file paths in TUI** | Terminal hyperlink support for tool output navigation | Developer experience; terminal emulator integration |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) **Fix streaming markdown after message completion** | Corrects table rendering bug from unconditional `streaming={true}` | UI polish; message display accuracy |

---

## Feature Request Trends

**Plugin Ecosystem Expansion** — Dominant theme across 4+ issues/PRs: voice input/dictation ([#17425](https://github.com/anomalyco/opencode/issues/17425)), workspace lifecycle hooks ([#17427](https://github.com/anomalyco/opencode/issues/17427)), AI-visible message injection ([#17412](https://github.com/anomalyco/opencode/issues/17412)), and SDK authentication primitives ([#16941](https://github.com/anomalyco/opencode/pull/16941)). Community building external tools needs deeper integration points.

**Cross-Platform & Enterprise Hardening** — Windows ARM64 ([#4340](https://github.com/anomalyco/opencode/issues/4340)), air-gapped deployment ([#17406](https://github.com/anomalyco/opencode/issues/17406)), and configurable resource limits ([#17423](https://github.com/anomalyco/opencode/pull/17423)) signal push beyond individual developer workstations.

**Model Resilience & Fallbacks** — Native model failover ([#7602](https://github.com/anomalyco/opencode/issues/7602)) and rapid support for new model releases (Opus 4.6 vision [#14289](https://github.com/anomalyco/opencode/issues/14289), Ministral 3 [#5034](https://github.com/anomalyco/opencode/issues/5034)) reflect production agent requirements.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Billing/usage transparency** | [#8030](https://github.com/anomalyco/opencode/issues/8030) Copilot misclassification; no visibility into what counts as "agent" vs "user" | **Critical** — direct cost impact |
| **Memory/resource management** | [#12687](https://github.com/anomalyco/opencode/issues/12687) kernel panic, [#17397](https://github.com/anomalyco/opencode/issues/17397) unbounded snapshots, [#8984](https://github.com/anomalyco/opencode/issues/8984) 10K token "hello" | **High** — stability and cost |
| **Configuration complexity** | [#11680](https://github.com/anomalyco/opencode/issues/11680) `--continue --session` syntax confusion, multiple CLI context questions from [`@davidbernat`](https://github.com/davidbernat) | **Medium-High** — onboarding friction |
| **Web/terminal reliability** | [#17376](https://github.com/anomalyco/opencode/issues/17376) auth loop, [#5685](https://github.com/anomalyco/opencode/issues/5685) terminal open failure, [#16864](https://github.com/anomalyco/opencode/issues/16864) session disappearance | **Medium** — workflow interruption |
| **Plugin SDK limitations** | Voice input blocked, auth/routes missing, no context injection — forcing core modifications | **Medium** — ecosystem growth constraint |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-14

## 1. Today's Highlights

The Qwen Code team shipped **v0.12.3** with critical IDE connection fixes and MCP OAuth UX improvements. Meanwhile, the community is actively pushing toward v0.13.0 with major features including a **bundled `/review` skill** for code review, **Node SEA binary builds**, and an **agent collaboration arena**. Developer pain points around session persistence, undo functionality, and Windows shell compatibility remain top-of-mind.

---

## 2. Releases

### [v0.12.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.3)
- **MCP OAuth UX improvements**: Post-authentication feedback, internationalization, clear auth flows, and bug fixes ([#2327](https://github.com/QwenLM/qwen-code/pull/2327))
- **IDE connection fixes**: Resolved VS Code client connection issues and optimized configuration lookup ([#yiliang114](https://github.com/yiliang114))

*Also released: v0.12.2-preview.1 and nightly build 20260313.46d57afb with identical changes.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2329](https://github.com/QwenLM/qwen-code/issues/2329) `AskUserQuestion` not wrapping questions in arrays | Breaks skill file parsing for interactive prompts; affects custom workflow development | 2 comments, actively discussed |
| [#2251](https://github.com/QwenLM/qwen-code/issues/2251) VS Code extension errors after OAuth | "Internal error" and connection failures blocking IDE adoption | 2 comments, unresolved |
| [#2339](https://github.com/QwenLM/qwen-code/issues/2339) **Telegram Bot Mode** (`--telegram` flag) | High-demand feature for remote/mobile access to Qwen Code | **2 upvotes**, 2 comments |
| [#2194](https://github.com/QwenLM/qwen-code/issues/2194) `--worktree` flag for isolated parallel sessions | Critical for CI/CD and multi-task workflows using Git worktrees | 2 comments, design discussion |
| [#2341](https://github.com/QwenLM/qwen-code/issues/2341) `/insight` command generates incomplete HTML reports | Breaks reporting workflow—only headers render, missing content | 1 comment, linked to fix PR |
| [#2216](https://github.com/QwenLM/qwen-code/issues/2216) Skill filtering with allow/exclude lists | Security and control need—prevents unwanted skill activation | 1 comment, awaiting implementation |
| [#2331](https://github.com/QwenLM/qwen-code/issues/2331) Cannot submit custom input in `ask_user_question` | UX bug: Enter key inserts space instead of submitting | 1 comment, user-reported |
| [#2335](https://github.com/QwenLM/qwen-code/issues/2335) Persist session approval whitelist across sessions | High-friction security UX—users re-approve every session | 1 comment, common request |
| [#2342](https://github.com/QwenLM/qwen-code/issues/2342) **`/undo` command missing** | Fundamental gap vs. competitors (Claude Code, Aider); "extremely important" per reporter | 1 comment, emotional urgency |
| [#2360](https://github.com/QwenLM/qwen-code/issues/2360) API Error 400: invalid tool message sequence | Breaking error in conversation state management; "so annoying" per reporter | New, no comments yet |

---

## 4. Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| [#2348](https://github.com/QwenLM/qwen-code/pull/2348) **Bundled `/review` skill** | Out-of-the-box code review without configuration; adds new "bundled" skill level | Open |
| [#2357](https://github.com/QwenLM/qwen-code/pull/2357) **Node SEA binary builds** | Standalone executable distribution—no Node.js required | Open |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912) **Agent collaboration arena** | Multi-model competitive execution with Git worktree isolation (v0.13.0) | Open |
| [#2361](https://github.com/QwenLM/qwen-code/pull/2361) Fix `/insight` LLM failure handling | Prevents total report failure when single LLM call fails; fixes #2341 | Open |
| [#2356](https://github.com/QwenLM/qwen-code/pull/2356) Auto-detect `max_tokens` for non-Qwen models | Fixes truncation with Claude/GPT/Gemini when unset | Open |
| [#2362](https://github.com/QwenLM/qwen-code/pull/2362) Add `deepseek-r1` output token limits | Corrects 64K capacity detection for reasoning model | Open |
| [#2352](https://github.com/QwenLM/qwen-code/pull/2352) Hooks extension mechanism | Lifecycle hooks for extensions at prompt submit/stop events | Open |
| [#2328](https://github.com/QwenLM/qwen-code/pull/2328) Export metadata and statistics | Session info, token usage, file ops in HTML exports | Open |
| [#2337](https://github.com/QwenLM/qwen-code/pull/2337) Clean context + token budget for subagents | Granular control over subagent runtime configuration | Open |
| [#2188](https://github.com/QwenLM/qwen-code/pull/2188) VS Code sidebar view + multi-position chat | Activity Bar entry, drag-and-drop repositioning | **Merged** |

---

## 5. Feature Request Trends

1. **Chat Interface & Platform Expansion** — Telegram bot mode (#2339), sidebar flexibility (#2188), and multi-position layouts dominate UX requests
2. **Session & State Management** — Persistent approvals (#2335), `/undo` (#2342), `--worktree` isolation (#2194), and cross-session state are critical gaps
3. **Built-in Developer Workflows** — `/review` skill (#2348), code review automation, and export enhancements (#2328) signal demand for opinionated tooling
4. **Distribution & Deployment** — Node SEA binaries (#2357), standalone executables, and container-ready deployments
5. **Model Provider Flexibility** — Better non-Qwen model support (token limits, max_tokens auto-detection, DeepSeek R1)

---

## 6. Developer Pain Points

| Category | Issue | Frequency |
|----------|-------|-----------|
| **Windows Compatibility** | Shell quoting (#2222), empty command output (#2244), path handling | Recurring |
| **IDE/Extension Reliability** | Connection drops (#2251, #2279), OAuth flow friction | High |
| **Missing Core Primitives** | No `/undo` (#2342), no persistent approvals (#2335), no worktree isolation (#2194) | Very High |
| **Model Integration Edge Cases** | `max_tokens` truncation (#2358), empty choices crashes (#2364), tool message sequencing (#2360) | Rising |
| **Skill System UX** | Auto-loading failures (#2343), display inconsistencies (#2340), array wrapping bugs (#2329) | Moderate |

---

*Digest compiled from github.com/QwenLM/qwen-code — 23 issues and 30 PRs active in last 24h.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*