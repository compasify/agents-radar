# AI CLI Tools Community Digest 2026-03-25

> Generated: 2026-03-25 00:09 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Community Analysis — March 25, 2026

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive multi-polar ecosystem with six actively developed alternatives. **Claude Code** and **OpenAI Codex** lead in enterprise mindshare, while **Gemini CLI**, **Kimi Code**, **Qwen Code**, and **OpenCode** pursue differentiation through architectural bets (Effect-based reactivity, ACP protocol adoption, multi-registry orchestration). A defining pattern is the shift from "chat-first" to "agent-first" design—persistent memory, subagent hierarchies, and tool orchestration now dominate roadmaps over raw LLM access. The community is increasingly vocal about cross-platform reliability, with Windows stability and IDE parity emerging as universal pain points.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity |
|------|-------------|-----------|----------------|----------------|
| **Claude Code** | 10+ hot issues tracked | 10+ community plugins submitted | None | Stable; community filling gaps |
| **OpenAI Codex** | 10 hot issues | 10 active PRs | **4 alphas** (v0.117.0-alpha.11–14) | 🔥 Rapid iteration (Rust core stabilization) |
| **Gemini CLI** | 10 hot issues | 10 PRs merged/open | **v0.36.0-preview.0** | Steady preview cadence |
| **GitHub Copilot CLI** | 10 hot issues | **None** updated | None | Stagnant; policy/MCP bugs accumulating |
| **Kimi Code** | 8 issues (2 critical regressions) | 7 PRs (2 merged) | None | Post-v1.25.0 stabilization |
| **OpenCode** | 10 hot issues | 10 PRs | **v1.3.2** (with heap debugging) | Active; memory leak crisis response |
| **Qwen Code** | 10 hot issues | 10 PRs | **v0.13.0-nightly** | Nightly cadence; ACP integration focus |

*Note: "Issues" and "PRs" counts reflect highlighted items in community digests, not exhaustive totals.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Evidence |
|-------------|-------|-----------------|
| **Persistent Memory & Context Bridging** | Claude Code (#27140, #37159), Gemini CLI (#23724), OpenCode (#11819, #15351), Qwen Code (#2335) | Project-level storage replacing `/tmp`, MEMORY.md limits, session continuity across devices |
| **Subagent Orchestration & Tool Filtering** | Gemini CLI (v0.36.0 multi-registry), Claude Code (#38045 lean-agents), OpenAI Codex (implicit in scheduling) | Constrained toolsets for subagents, steering (temperature/persona), approval mode awareness |
| **IDE Extension Parity** | Kimi Code (#1334, #1560), OpenCode (#11176), Qwen Code (#1370, #2629), GitHub Copilot CLI (inherent) | VS Code/JetBrains settings sync, clipboard image paste, behavior consistency with CLI |
| **Scheduling & Automation (/loop, daemon mode)** | OpenAI Codex (#15679 /loop, #8317 time-based), Qwen Code (#2643 /loop), Gemini CLI (SDD DAG tasks) | Shift from interactive to autonomous operation |
| **Windows Platform Hardening** | Claude Code (#35710 BSOD fix, #27897 Cowork), OpenAI Codex (#15277 sandbox, #13905), OpenCode (#16069 PowerShell), Qwen Code (#2645 Git Bash) | Parallel fs ops, sandbox expansion, shell detection, path separator handling |
| **MCP Ecosystem Maturity** | Claude Code (#3426, #27263), OpenAI Codex (#15169 approval UX), Kimi Code (#1380 ACP migration) | Tool exposure reliability, external URL whitelisting, approval persistence |
| **Lifecycle Hooks & Observability** | Claude Code (plugin surge), Kimi Code (#1561 Wire 1.7 hooks), OpenCode (#6629 OpenTelemetry), OpenAI Codex (#15531 PostToolUse) | Audit logging, compliance automation, telemetry integration |

---

## 4. Differentiation Analysis

| Tool | Core Bet | Target User | Technical Distinction |
|------|----------|-------------|----------------------|
| **Claude Code** | **Plugin ecosystem** as extensibility layer | Enterprise teams, Cowork users | Community-driven gap-filling; Cowork containerized environments; MCP-first |
| **OpenAI Codex** | **Rust core + TUI sophistication** | Performance-sensitive developers, automation engineers | Rapid alpha iteration; `/btw` ephemeral threads, `/loop` scheduling; guardian review system |
| **Gemini CLI** | **Multi-agent orchestration & SDD (Structured Development)** | Google Cloud ecosystem, plan-mode users | Multi-registry architecture; DAG-based task planning; GSoC community scaling |
| **GitHub Copilot CLI** | **Policy integration with GitHub/Copilot ecosystem** | Existing Copilot subscribers | Deep GitHub org policy integration; weakest standalone differentiation |
| **Kimi Code** | **ACP (Agent Client Protocol) standardization** | IDE-integrated workflows, JetBrains users | ACP-native; lifecycle hooks parity with Claude Code; v1.25.0 plugin system |
| **OpenCode** | **Effect-based functional reactivity** | TypeScript ecosystem, desktop-first users | Effect architecture for state management; in-app browser; WebRTC P2P remote exploration |
| **Qwen Code** | **Multi-platform deployment (Telegram, cmux, ACP)** | Chinese-speaking developers, messaging-integrated workflows | Telegram/OSC channel integration; CJK localization priority; `/loop` for IoT/scheduled tasks |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **🔥 Highest Momentum** | **OpenAI Codex**, **Claude Code** | 4 alphas/24h (Codex); 10+ community plugins/24h (Claude); sustained high engagement; enterprise-critical issues |
| **🟢 Active & Growing** | **Gemini CLI**, **OpenCode**, **Qwen Code** | Regular preview/nightly releases; GSoC coordination (Gemini); 20+ contributor mobilization (OpenCode memory leaks); ACP/Telegram expansion (Qwen) |
| **🟡 Stabilizing/Recovering** | **Kimi Code** | Post-v1.25.0 regression management; plugin system documentation debt; IDE parity catch-up |
| **🔴 Concerning Stagnation** | **GitHub Copilot CLI** | Zero PR activity; MCP policy drift unaddressed; model availability lag vs. VS Code; terminal regressions accumulating |

**Maturity Signals:**
- **Claude Code**: Mature plugin API, but core platform gaps (ARM, FreeBSD) force community workarounds
- **OpenAI Codex**: Pre-release volatility with Rust rewrite; TUI sophistication outpacing stability
- **Gemini CLI**: Most systematic quality engineering (nightly eval runs 3→10, behavioral evals)
- **OpenCode**: Architectural ambition (Effect) with operational growing pains (memory leaks, auth fragility)

---

## 6. Trend Signals

| Trend | Evidence | Developer Implication |
|-------|----------|----------------------|
| **Agent-First > Chat-First** | `/loop` commands, scheduling PRs, persistent memory systems across all tools | Design workflows assuming autonomous execution, not just interactive assistance |
| **Cross-Platform as Table Stakes** | Windows BSOD fixes, Git Bash/MSYS2 detection, Termux/Android requests | Windows and mobile/remote environments can no longer be tier-2; test accordingly |
| **MCP/ACP as Interoperability Layer** | Claude Code MCP pain points, Kimi Code ACP migration, Qwen Code ACP expansion | Invest in protocol-compliant tool servers; expect vendor-neutral tooling standards |
| **Community Plugin Ecosystems** | Claude Code's 10+ plugin PRs in 24h, Kimi Code's beta marking | Official maintainers ceding extensibility to community; plugin quality/ security governance gaps emerging |
| **Memory & Context Engineering** | 1M token window demand, compaction providers, context bridging | Shift from "prompt engineering" to "context architecture"; budget for retrieval and summarization systems |
| **Remote & Multi-Modal Access** | WebRTC P2P (OpenCode), Telegram integration (Qwen), Cowork remote access | CLI tools becoming distributed systems; consider latency, sync, and offline resilience |
| **Enterprise Policy & Compliance** | Guardian review (Codex), Policy Engine requests (Qwen), OAuth whitelisting (Claude) | Security teams will demand audit trails, approval workflows, and configuration-as-code |

---

*Analysis compiled from community digest data dated 2026-03-25. For real-time tracking, monitor release channels and GitHub Discussions for each project.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-25 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Author | Status | Description | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | [PGTBoos](https://github.com/PGTBoos) | 🟡 Open | Quality control for AI-generated documents: prevents orphan words, widow paragraphs, and numbering misalignment | Addresses universal pain point affecting "every document Claude generates"; zero thumbs but high conceptual engagement |
| 2 | **frontend-design** (improved) | [justinwetch](https://github.com/justinwetch) | 🟡 Open | Revised for clarity and single-conversation actionability | Focus on making instructions actually executable within token limits |
| 3 | **skill-quality-analyzer** + **skill-security-analyzer** | [eovidiu](https://github.com/eovidiu) | 🟡 Open | Meta-skills for evaluating Skill quality across 5 dimensions and security auditing | First systematic approach to Skill validation; addresses governance gap |
| 4 | **system documentation suite** | [TylerALofall](https://github.com/TylerALofall) | 🟡 Open | Comprehensive evidence management system docs with architecture diagrams | Enterprise-grade documentation pattern for complex Skills |
| 5 | **CONTRIBUTING.md** | [narenkatakam](https://github.com/narenkatakam) | 🟡 Open | Community health improvement (repo at 25% on GitHub metrics) | Infrastructure PR addressing maintainer bandwidth |
| 6 | **SAP-RPT-1-OSS predictor** | [amitlals](https://github.com/amitlals) | 🟡 Open | Integration with SAP's open-source tabular foundation model for predictive analytics | Bridges enterprise ERP data with Claude Code |
| 7 | **codebase-inventory-audit** | [p19dixon](https://github.com/p19dixon) | 🟡 Open | 10-step workflow for identifying orphaned code, unused files, documentation gaps | Technical debt management at scale |
| 8 | **foundation/standards series** (8 skills) | [Eaprime1](https://github.com/Eaprime1) | 🟡 Open | tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling, etc. | Broad educational/enterprise enablement push |

---

## 2. Community Demand Trends (From Issues Analysis)

| Trend Category | Evidence | Specific Requests |
|:---|:---|:---|
| **Memory & Persistence** | [#154](https://github.com/anthropics/skills/issues/154), [#522](https://github.com/anthropics/skills/issues/522), [#521](https://github.com/anthropics/skills/issues/521), [#629](https://github.com/anthropics/skills/issues/629) | Session survival, context compaction resilience, team knowledge sharing |
| **Security & Governance** | [#492](https://github.com/anthropics/skills/issues/492), [#412](https://github.com/anthropics/skills/issues/412) | Trust boundary protection, agent governance patterns, audit trails |
| **Enterprise Integration** | [#29](https://github.com/anthropics/skills/issues/29), [#181](https://github.com/anthropics/skills/issues/181) | AWS Bedrock compatibility, SAP/ERP connectors, SSO/enterprise auth |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | Skills-as-MCPs, MCP Apps support in mcp-builder |
| **Skill Quality Tooling** | [#202](https://github.com/anthropics/skills/issues/202), [#556](https://github.com/anthropics/skills/issues/556) | Better skill-creator validation, eval tooling that actually triggers skills |
| **Workspace/Productivity** | [#299](https://github.com/anthropics/skills/issues/299) | Google Workspace integration (email, calendar, tasks) |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Solves #1 user pain (session amnesia); clean implementation with Git-tracked/shared modes |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Companion to plan-task from same author; tagged Markdown persistence |
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | Zero-dependency approach to context compaction survival; recent submission with active iteration |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | ISO standard document format; fills LibreOffice/OpenOffice gap in document skills |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | Enterprise market expansion; structured frameworks (MECE, Porter's, etc.) |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Multimodal generation via Imagen 3.0/Veo 3.1; media production workflow |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for stateful agent operation: solving Claude Code's fundamental session amnesia through persistent memory, task continuity, and cross-session knowledge retention—while simultaneously hardening trust boundaries as Skills gain access to sensitive enterprise systems.**

---

---

# Claude Code Community Digest — 2026-03-25

## Today's Highlights

The community is actively addressing critical platform gaps: ARM support for Cowork dominates discussion with 70 comments and 92 upvotes, while a surge of plugin PRs targets long-standing pain points including terminal scroll regressions, memory leaks, and Windows BSODs from parallel filesystem operations. No new official releases shipped in the last 24 hours.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#30864: Cowork for ARM processor](https://github.com/anthropics/claude-code/issues/30864) | Blocks Apple Silicon and ARM Linux users from Cowork's containerized development environment—critical for modern hardware adoption | 70 comments, 92 👍; users sharing workarounds, no official timeline |
| [#22016: "Fork conversation from here" broken in VSCode](https://github.com/anthropics/claude-code/issues/22016) | Core IDE workflow broken for 2+ months; affects conversation management | 33 comments, 34 👍; **closed today**—fix likely shipped |
| [#30640: Native installer fails on FreeBSD](https://github.com/anthropics/claude-code/issues/30640) | Enterprise/Unix users blocked; bot auto-closed without discussion, reopened by community pressure | 32 comments, 52 👍; frustration with support automation |
| [#27897: Cowork VM broken on Windows 11 Insider](https://github.com/anthropics/claude-code/issues/27897) | EXDEV rename bug persists across updates; affects MSIX installs | 21 comments, 9 👍; related to Dropbox/Cloud Files driver conflicts |
| [#3426: MCP tools fail to expose for local Playwright server](https://github.com/anthropics/claude-code/issues/3426) | Breaks local MCP development workflows; has reproduction | 19 comments, 10 👍; active debugging by community |
| [#9177: User-configurable keyboard shortcuts](https://github.com/anthropics/claude-code/issues/9177) | Long-standing TUX gap; power users need vim/emacs-style customization | 14 comments, 26 👍; chronic feature request |
| [#36582: Terminal auto-scrolls to top on long conversations](https://github.com/anthropics/claude-code/issues/36582) | Severe UX regression making tool unusable for extended sessions | 13 comments, 56 👍; **community PR submitted** (#35683) |
| [#2142: Claude ignores CLAUDE.md security guidelines, exposes API keys](https://github.com/anthropics/claude-code/issues/2142) | Active security risk; credential leakage to version control | 12 comments, 10 👍; reproducible, no fix confirmed |
| [#30854: "Your account does not have access to Claude Code"](https://github.com/anthropics/claude-code/issues/30854) | Auth regression blocking paid users; unclear error messaging | 11 comments, 1 👍; support escalation pattern |
| [#27263: Configurable external URL whitelist for OAuth](https://github.com/anthropics/claude-code/issues/27263) | Blocks enterprise OAuth flows in App Preview; security/UX tradeoff | 11 comments, 45 👍; enterprise-critical |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#36614: git-branch-info plugin](https://github.com/anthropics/claude-code/pull/36614) | Persistent git context display (branch, dirty state, ahead/behind) via SessionStart/UserPromptSubmit hooks | Open |
| [#38182: session-rename plugin with /rename command](https://github.com/anthropics/claude-code/pull/38182) | Custom session titles via `.meta.json` sidecars; non-breaking, closes #38173 | Open |
| [#38045: lean-agents plugin](https://github.com/anthropics/claude-code/pull/38045) | Lightweight subagent variants to bypass "prompt too long" from inherited MCP schemas | Open |
| [#35683: scroll-fix plugin](https://github.com/anthropics/claude-code/pull/35683) | Fixes terminal scroll-to-top regression (#36582) with cursor clamping + freeze toggle | Open |
| [#35710: tool-mutex plugin](https://github.com/anthropics/claude-code/pull/35710) | **Critical**: Prevents Windows BSOD (Wof.sys) from parallel filesystem enumeration; fixes #32870 | Open |
| [#37236: tmp-cwd-cleanup plugin](https://github.com/anthropics/claude-code/pull/37236) | Stops `/tmp/claude-*-cwd` memory leak from Bash tool; **closed** | Closed |
| [#38105: WhatsApp channel plugin](https://github.com/anthropics/claude-code/pull/38105) | Bidirectional WhatsApp integration via Baileys (WhatsApp Web protocol); matches Telegram/Discord parity | Open |
| [#27140: memory-bridge plugin](https://github.com/anthropics/claude-code/pull/27140) | Structured context consolidation at session boundaries; `/bridge` command for persistent memory | Open |
| [#37159: Persistent memory and session management system](https://github.com/anthropics/claude-code/pull/37159) | Comprehensive agent memory with context windowing and automatic learning extraction | Open |
| [#31701: Respect $TMPDIR and os.tmpdir()](https://github.com/anthropics/claude-code/pull/31701) | Fixes hardcoded `/tmp/claude` paths breaking Termux/Android; **closed** | Closed |

---

## Feature Request Trends

1. **Cowork Platform Expansion** — ARM support (#30864), FreeBSD compatibility (#30640), and relocatable project folders (#38469) dominate; users need Cowork to work across heterogeneous infrastructure.

2. **Memory & Context Management** — Persistent thinking effort levels (#34171), MEMORY.md line limit increases (#38452), and automated context bridging (#27140, #37159) reflect 1M token window demand.

3. **MCP Ecosystem Maturity** — Tool exposure reliability (#3426), external URL whitelisting (#27263), and lean agent variants (#38045) show MCP scaling pains.

4. **Cross-Device Session Continuity** — Mobile access to CLI sessions (#33095), remote Cowork access (#38470), and session renaming (#38182) indicate distributed workflow needs.

5. **Voice & Internationalization** — `/voice` language configuration (#31724) for non-English users gaining traction.

---

## Developer Pain Points

| Category | Issue | Frequency |
|----------|-------|-----------|
| **Windows Stability** | BSOD from parallel fs ops (#32870/#35710), Cowork EXDEV rename failures (#27897, #38457), VSCode extension bugs (#22016) | Chronic |
| **Security Gaps** | CLAUDE.md guideline adherence failures (#2142, #35199), credential exposure in output (#34819), permission gate bypasses (#33126, #38473) | High |
| **Terminal UX Regressions** | Auto-scroll-to-top (#36582), keyboard shortcut inflexibility (#9177) | Acute |
| **Installation/Auth** | Platform support gaps (FreeBSD #30640, ARM #30864), cryptic auth errors (#30854) | Persistent |
| **Resource Management** | `/tmp` pollution (#37236, #31701), session loss on directory moves (#33636), remote control TTL issues (#32982) | Recurring |

The community is compensating with a **plugin ecosystem surge**—10+ PRs in 24h targeting core gaps that official releases haven't addressed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-25

---

## 1. Today's Highlights

The Codex team is iterating rapidly on the Rust core with four new alpha releases (v0.117.0-alpha.11–14) in 24 hours, suggesting active stabilization work ahead of a broader release. The TUI is gaining sophisticated new interaction patterns with `/btw` ephemeral side-threads and `/loop` scheduling commands, while the community continues to surface critical Windows sandboxing bugs and persistent rate-limit concerns that are generating significant engagement.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| [rust-v0.117.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.14) | Rapid-fire alpha iteration continues; no detailed changelogs provided—typical for pre-release channels. |
| [rust-v0.117.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.13) | — |
| [rust-v0.117.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.12) | — |
| [rust-v0.117.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.11) | — |

> **Note:** No substantive release notes accompany these alphas; developers should expect breaking changes and monitor the repo for migration guidance.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) | Still burning tokens very fast with today's VS Code extension update | **231 comments, 83 👍** — Business-tier users report aggressive token consumption despite recent patches, suggesting rate-limit accounting remains fundamentally broken for extension users. | High frustration; users sharing detailed usage logs; calls for urgent rollback or compensation. |
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | **439 👍, 78 comments** — Top-voted open feature request; gap between VS Code remote workflows and Codex Desktop is blocking adoption for server-side development. | Sustained advocacy; users outlining SSH/container use cases; no official timeline provided. |
| [#11981](https://github.com/openai/codex/issues/11981) | Codex app 100% CPU Usage even when only one agent is running | Mac users experiencing thermal throttling and battery drain; indicates background process management issues in Electron/Node runtime. | Repro confirmations across Apple Silicon; temporary workarounds involving process killing. |
| [#13784](https://github.com/openai/codex/issues/13784) | Error running remote compact task | "Remote compact task" failures blocking context window management; users losing work when compaction fails mid-session. | Cross-platform reports (Windows, Linux); linked to [#14860](https://github.com/openai/codex/issues/14860). |
| [#14860](https://github.com/openai/codex/issues/14860) | BUG FIX FOR: "Error running remote compact task: timeout waiting for child process to exit" | Community-submitted fix for Linux; highlights sandbox process lifecycle fragility. | Positive reception for proposed patch; awaiting merge. |
| [#15277](https://github.com/openai/codex/issues/15277) | `apply_patch` fails on Windows after first write in sandbox-owned directory | **Regression** in VS Code Extension 26.318.11754; Windows developers blocked from iterative file edits. | Critical path bug; no workaround confirmed; affecting daily workflows. |
| [#15503](https://github.com/openai/codex/issues/15503) | CPU spikes during normal use | Ubuntu users reporting 100ms-interval debug logging causing measurable overhead; performance regression in latest extension. | Debug logs leaked to production; immediate fix expected. |
| [#15620](https://github.com/openai/codex/issues/15620) | High CPU usage when idle: background git/subprocess churn | Root-cause analysis identifies Electron/Node subprocess polling; distinct from [#11981](https://github.com/openai/codex/issues/11981) but same symptom class. | Technical deep-dive appreciated; awaiting architectural fix. |
| [#15169](https://github.com/openai/codex/issues/15169) | Playwright MCP no longer offers or remembers "approve for this session" | **Regression** in macOS app build 1088; MCP tool approval UX degraded, forcing repetitive manual confirmations. | 7 👍; workflow disruption for browser automation users. |
| [#15680](https://github.com/openai/codex/issues/15680) | Codex agent is able to modify its project-level `.codex/config.toml` without permission | **Security concern**: sandbox escape allowing self-modifying configuration; undermines trust boundaries. | Zero 👍 but high severity; requires immediate triage. |

---

## 4. Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#15701](https://github.com/openai/codex/pull/15701) | tui: add ephemeral `/btw` side-question threads | Introduces `/btw` command for isolated side-questions without polluting main agent history; includes `tui_app_server` parity. | Open, fresh (Mar 25) |
| [#15699](https://github.com/openai/codex/pull/15699) | [codex] Defer fork context injection until first turn | Optimizes fork startup by delaying `build_initial_context` until actually needed; reduces memory pressure. | Open |
| [#15597](https://github.com/openai/codex/pull/15597) | feat: local ephemeral screen recording | First v1 implementation of local screen capture in `codex-app-server`; privacy-preserving (process-scoped, ephemeral). | Open |
| [#15531](https://github.com/openai/codex/pull/15531) | [hooks] add non-streaming shell-only PostToolUse support | Completes hook system with `PostToolUse` for shell commands; enables audit logging and reactive controls. | Open, chained behind [#15211](https://github.com/openai/codex/pull/15211) |
| [#15548](https://github.com/openai/codex/pull/15548) | Extract rollout into its own crate | Major refactoring: isolates rollout recorder, session indexing, and policy into `codex-rollout`; improves build times and modularity. | Open |
| [#15667](https://github.com/openai/codex/pull/15667) | [codex] Handle guardian review timeouts explicitly | Increases guardian timeout 90s→120s; adds `TimedOut` terminal status with proper TUI surfacing (not silent rejection). | Open |
| [#15693](https://github.com/openai/codex/pull/15693) | fix: fix old system bubblewrap compatibility | Resolves Linux sandbox failures on older bubblewrap builds (rejects `--argv0`); prefers system bwrap, falls back to vendored only when missing. | Open, fixes [#15283](https://github.com/openai/codex/issues/15283) |
| [#15695](https://github.com/openai/codex/pull/15695) | Migrate config loading to be async | Foundational async refactor starting with `resolve_root_git_project_for_trust`; unblocks future I/O-bound configuration features. | Open |
| [#15601](https://github.com/openai/codex/pull/15601) | [app-server] Add a method to override feature flags | Enables global (not just thread-level) feature flag overrides; critical for staged rollouts and enterprise policy. | Open |
| [#15691](https://github.com/openai/codex/pull/15691) | feat: exec-server prep for unified exec | Architectural preparation for merging execution paths; reduces divergence between CLI and app-server runtimes. | Open |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Remote/SSH Development** | [#10450](https://github.com/openai/codex/issues/10450) (439 👍) | Highest-voted open request; enterprise blocker |
| **Scheduling & Automation** | [#8317](https://github.com/openai/codex/issues/8317) (time-based commands), [#15679](https://github.com/openai/codex/issues/15679) (`/loop` command), [#14110](https://github.com/openai/codex/issues/14110) (persistent agent) | Emerging pattern: users want Codex as daemon, not just interactive tool |
| **Hook/Extension Points** | [#14754](https://github.com/openai/codex/issues/14754) (PreToolUse/PostToolUse), [#15531](https://github.com/openai/codex/pull/15531) | Strong demand for code quality gates and compliance automation |
| **Transparency & Changelogs** | [#4323](https://github.com/openai/codex/issues/4323) (66 👍) | Longstanding documentation gap for IDE extension |
| **Keyboard-First TUI** | [#14939](https://github.com/openai/codex/issues/14939) (YOLO mode shortcut), [#15679](https://github.com/openai/codex/issues/15679) | Power users seeking vim-like efficiency |

---

## 6. Developer Pain Points

| Issue | Frequency | Impact | Current Status |
|-------|-----------|--------|--------------|
| **Rate limit transparency & burn rate** | Daily reports | 🔴 Critical | [#14593](https://github.com/openai/codex/issues/14593) active; no resolution |
| **Windows sandbox/tool-call reliability** | Weekly regressions | 🔴 Critical | [#15277](https://github.com/openai/codex/issues/15277), [#13905](https://github.com/openai/codex/issues/13905), [#10187](https://github.com/openai/codex/issues/10187); patchy fixes |
| **Idle CPU/battery drain (macOS/Linux)** | Multiple reports | 🟡 High | [#11981](https://github.com/openai/codex/issues/11981), [#15620](https://github.com/openai/codex/issues/15620); root causes identified, fixes pending |
| **Context compaction failures** | Sporadic but severe | 🟡 High | [#13784](https://github.com/openai/codex/issues/13784), [#14860](https://github.com/openai/codex/issues/14860); community fix proposed |
| **MCP/tool approval UX friction** | Regressions noted | 🟡 Moderate | [#15169](https://github.com/openai/codex/issues/15169); session persistence broken |
| **Configuration escape hatches** | Security concern | 🔴 Critical | [#15680](https://github.com/openai/codex/issues/15680); newly reported, unassigned |

---

*Digest compiled from github.com/openai/codex public activity. For real-time updates, subscribe to release notifications or join GitHub Discussions.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-25

---

## 1. Today's Highlights

The v0.36.0-preview.0 release introduces **multi-registry architecture and tool filtering for subagents**, enabling more sophisticated agent orchestration workflows. The community is actively debating **workspace boundary security** after a new bug report highlighted inconsistent user-approval workflows between bash and declarative tools. Meanwhile, **Google Summer of Code 2026** preparations are underway with a high-engagement tracking issue for behavioral evals and OSS community improvements.

---

## 2. Releases

### v0.36.0-preview.0
- **Multi-registry architecture and tool filtering for subagents** — enables subagents to operate with constrained toolsets across different registries ([PR #22712](https://github.com/google-gemini/gemini-cli/pull/22712))

### v0.35.0
- **Customizable keyboard shortcuts** — users can now remap key bindings to their preferences ([PR #21945](https://github.com/google-gemini/gemini-cli/pull/21945))
- **AgentLoopContext threading** — core infrastructure improvement for agent state management ([PR #21944](https://github.com/google-gemini/gemini-cli/pull/21944))

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#23331](https://github.com/google-gemini/gemini-cli/issues/23331) GSoC: Behavioral evals, Quality, and OSS Community | **52 comments** — central coordination for 2026 GSoC participation, focusing on making quality contributions accessible to external developers | High engagement; 14 👍; seen as critical for scaling community contributions |
| [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) Optimize test suite output logging | **41 comments** — test verbosity creates hundreds of thousands of characters of noise, slowing CI feedback loops | 9 👍; developers frustrated by debugging friction |
| [#23717](https://github.com/google-gemini/gemini-cli/issues/23717) Bug: Inconsistent User-Approval Workflows for Workspace Boundaries | **Security-critical**: bash tool prompts for out-of-workspace access, but declarative tools bypass approval — creates trust boundary violations | Fresh report (2 comments); likely to escalate |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) Exiting plan mode does not switch model | Plan-to-execution model downgrade (Gemini 3 Flash) fails silently, wasting expensive model calls | 10 comments; affects cost-sensitive workflows |
| [#21109](https://github.com/google-gemini/gemini-cli/issues/21109) Animated waveform visualizer for voice mode | GSoC Project 11 deliverable; voice mode lacks state feedback, hurting UX | 9 comments; part of larger voice mode maturity push |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, and mapping | **EPIC**: Could reduce token waste from misaligned file reads and improve codebase navigation precision | 4 comments; technical evaluation in progress |
| [#23728](https://github.com/google-gemini/gemini-cli/issues/23728) Steer sub-agents | Model steering (temperature/persona) currently unavailable for subagents, limiting specialized agent behaviors | Just opened; fills critical orchestration gap |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) Persistent Project-Level Tracker Storage | Moves task state from ephemeral `/tmp` to `.gemini/tracker/`, enabling Git-trackable collaboration | Part of SDD Phase 3; DAG-based planning replacing Markdown checklists |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) Support passing prompt to `/plan` | `/plan` currently requires interactive mode; single-command planning would streamline automation | 2 comments; workflow efficiency request |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) Subagents Awareness of Active Approval Modes | Subagents lack context on Plan vs. Auto-Edit mode, causing instruction/policy conflicts | 1 comment; architectural consistency issue |

---

## 4. Key PR Progress

| PR | Feature/Fix | Impact |
|----|-------------|--------|
| [#23732](https://github.com/google-gemini/gemini-cli/pull/23732) + [#23731](https://github.com/google-gemini/gemini-cli/pull/23731) | Move flaky Ctrl+C test to non-blocking suite | **CI stability**: Unblocks PRs from macOS-specific signal handling flakes |
| [#23729](https://github.com/google-gemini/gemini-cli/pull/23729) | Conditionally expose `additional_permissions` in shell tool | **Security**: Hides sandboxing complexity from model when disabled; removes hardcoded policy check |
| [#23719](https://github.com/google-gemini/gemini-cli/pull/23719) | Safe and rich themes with true color support | **UX**: Fixes 256-color consistency issues; adds high-visibility mappings for accessibility |
| [#23720](https://github.com/google-gemini/gemini-cli/pull/23720) | CI Skill for automated failure replication | **Developer velocity**: Enables local reproduction of CI failures without passive waiting |
| [#23727](https://github.com/google-gemini/gemini-cli/pull/23727) | Behavioral eval for web tool selection | **Quality**: Tests `web_fetch` vs. `google_web_search` discrimination — closes eval coverage gap |
| [#23282](https://github.com/google-gemini/gemini-cli/pull/23282) | `forbiddenPaths` for OS-specific sandbox managers | **Security**: Cross-platform sandbox hardening (macOS/Linux/Windows) with unified test coverage |
| [#23725](https://github.com/google-gemini/gemini-cli/pull/23725) | Increase nightly eval runs 3→10 | **Reliability engineering**: Eliminates "noisy floor" for statistical confidence in quality signals |
| [#22869](https://github.com/google-gemini/gemini-cli/pull/22869) | Dynamic toggle for alternate buffer mode | **UX**: Switch inline/fullscreen mid-session without restart |
| [#23064](https://github.com/google-gemini/gemini-cli/pull/23064) | Redesign context and compression UI | **UX**: Less intrusive auto-compression; subtle gray italic styling with percentage indicators |
| [#23691](https://github.com/google-gemini/gemini-cli/pull/23691) | Windows sandbox dynamic expansion Phase 1/2.1 | **Platform parity**: Network access and Low Integrity write permissions for Windows sandbox |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Agent orchestration & subagent control** | Multi-registry architecture, steering requests, approval mode awareness, memory routing | 🔥 **High** — core architectural evolution |
| **Persistent, collaborative state** | Project-level tracker storage, memory routing (global vs. project), SDD DAG tasks | 🔥 **High** — shifting from session-based to project-native |
| **Voice mode maturity** | Waveform visualizer, Live API PoC, GSoC project | 🟡 **Medium** — active but scoped |
| **AST-aware tooling** | File read bounds, codebase mapping, method-level precision | 🟡 **Medium** — investigation phase |
| **Theme/accessibility polish** | True color support, safe 256-color themes, dynamic buffer toggle | 🟡 **Medium** — quality-of-life focus |
| **Security boundary consistency** | Workspace approval workflows, sandbox expansion, forbiddenPaths | 🔥 **High** — trust-critical, actively patched |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Status |
|------------|-----------|--------|
| **Test suite noise & CI flakiness** | Recurring (#23328, #23731-23732, #23313) | Active mitigation; tests being moved to non-blocking |
| **Model/context compression opacity** | Recurring (#23556 pathological compression, #23064 UI redesign) | UI improvements shipped; root causes under investigation |
| **Subagent limitations** | High (#23728 steering, #23582 approval awareness, #22745 AST tools) | Architectural work in progress |
| **Workspace security inconsistency** | Emerging (#23717) | Bug report filed; likely priority escalation |
| **Plan mode workflow friction** | Steady (#23230 model switch, #22855 inline prompts, #23577 terminal height) | Iterative improvements; no holistic fix yet |
| **Extension/startup noise** | Steady (#23175 duplicate warnings) | PRs in flight |

---

*Digest compiled from google-gemini/gemini-cli public activity. For real-time updates: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-25

## 1. Today's Highlights

No new releases dropped in the last 24h, but the community is actively wrestling with **MCP server policy enforcement bugs** and **model availability discrepancies** between CLI and VS Code. A surge of fresh issues around **terminal compatibility** (Windows Terminal scrollbars, Warp support) and **session management** suggests users are pushing Copilot CLI into more diverse workflows.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) | **Critical parity gap**: Same org, same account, different model lists between CLI and VS Code. Blocks enterprise users who rely on latest models. | 22 👍, 13 comments — highest engagement; users confirming org settings are correct |
| [#501](https://github.com/github/copilot-cli/issues/501) | `~/.bash_history` truncated | Long-running bug where CLI spawns shells without loading `.bashrc`, destroying user history configurations. Finally closed. | 10 comments, mixed relief; fix validation ongoing |
| [#172](https://github.com/github/copilot-cli/issues/172) | MCP timeouts not respected | Breaks long-running MCP servers; `mcp-config.json` timeout field ignored. Blocking for custom tooling workflows. | 7 comments, 2 👍; workaround requests |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | Org MCP servers disappear — false "disabled by organization" warning | **Regression in v1.0.11**: Servers worked last week, now falsely blocked. Org policy drift between CLI and VS Code. | 7 👍, 3 comments; urgent for enterprise |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | Claude Sonnet 4.6 — HTTP/2 GOAWAY / 503 errors | Model-specific reliability issue; retry logic failing after 84s. Gemini 3 Pro works fine — points to CAPI routing. | 6 comments, 3 👍; reproducible reports |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | "Continuing autonomously" charges premium requests after completion | **Billing/UX concern**: Users charged for "autonomous" continuation after model already finished. Feels like double-dipping. | 7 👍, 6 comments; frustration with pricing transparency |
| [#989](https://github.com/github/copilot-cli/issues/989) | `--acp` mode returns incorrect tool IDs | Breaks ACP protocol compliance; tool call IDs use titles instead of UUIDs. Affects client integrations. | 5 comments, 3 👍; Microsoft employee reported |
| [#1257](https://github.com/github/copilot-cli/issues/1257) | Termux/Android support | Mobile developer demand; `pty.node` native module fails on Android. Expands addressable user base significantly. | 6 👍, 4 comments; workaround attempts shared |
| [#2208](https://github.com/github/copilot-cli/issues/2208) | WSL CPU spin + unresponsive TUI | Performance regression with large state (Claude Opus 4.6 1M context). Trace collected. | 1 comment; needs investigation |
| [#2252](https://github.com/github/copilot-cli/issues/2252) | Windows Terminal scrollbar missing in v1.0.11 | **Fresh regression**: Breaks basic terminal navigation. Ctrl+Shift+Up also broken. | New issue, immediate reports |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

Based on open issues, three clear demand vectors emerge:

| Trend | Evidence | User Need |
|-------|----------|-----------|
| **Granular permission controls** | [#2256](https://github.com/github/copilot-cli/issues/2256), [#2273](https://github.com/github/copilot-cli/issues/2273), [#899](https://github.com/github/copilot-cli/issues/899) | Whitelist binaries (ls, grep), distinguish read-only vs. destructive PowerShell commands, file-type filters |
| **Session persistence & automation** | [#2227](https://github.com/github/copilot-cli/issues/2227), [#2268](https://github.com/github/copilot-cli/issues/2268), [#2108](https://github.com/github/copilot-cli/issues/2108) | Auto-share on exit, launch flags for plan/autopilot mode, session_id in hooks for external tooling |
| **Cross-platform terminal parity** | [#1257](https://github.com/github/copilot-cli/issues/1257), [#2246](https://github.com/github/copilot-cli/issues/2246), [#2271](https://github.com/github/copilot-cli/issues/2271) | Android/Termux, Warp terminal, configurable shell backend (bash vs. PowerShell on Windows) |

---

## 6. Developer Pain Points

**MCP Policy Drift** — The most acute frustration: CLI and VS Code interpret organization Copilot policies differently. Users report [#1707](https://github.com/github/copilot-cli/issues/1707), [#2236](https://github.com/github/copilot-cli/issues/2236) servers working in VS Code but blocked in CLI, or disappearing after version bumps. Suggests policy caching or versioned enforcement logic needs alignment.

**Model Availability Inconsistency** — [#1703](https://github.com/github/copilot-cli/issues/1703) highlights that CLI lags VS Code in exposing org-enabled models (Gemini 3.1 Pro). Creates confusion about whether issues are policy, licensing, or client-side.

**Permission Fatigue** — Repeated approvals for `ls`, `grep`, read-only PowerShell commands [#2256](https://github.com/github/copilot-cli/issues/2256), [#2273](https://github.com/github/copilot-cli/issues/2273) disrupt flow. Users want persistent whitelists or read-only command auto-approval.

**Performance at Scale** — [#2208](https://github.com/github/copilot-cli/issues/2208), [#2269](https://github.com/github/copilot-cli/issues/2269) report CPU saturation with large contexts (1M tokens) or multiple SDK sessions. 4-core Codespaces become unusable — resource efficiency gap for CI/automation use cases.

**Line Ending Corruption** — [#1148](https://github.com/github/copilot-cli/issues/1148) — CLI forces CRLF on LF files, polluting repositories. Cross-platform development friction.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-25

---

## 1. Today's Highlights

The v1.25.0 release is driving significant community activity, with multiple bug reports surfacing around the `writefile` tool and the new plugin system prompting both questions and documentation updates. Meanwhile, two critical PRs merged to resolve hanging issues in yolo/print mode and restore Jinja2 include support for system prompts, improving reliability for automation workflows.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|--------------|
| [#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564) | `writefile` tool frequently errors after v1.25.0 upgrade | **OPEN** | Core workflow regression affecting Windows users; partial workaround identified (chunked writes) but root cause unaddressed |
| [#1565](https://github.com/MoonshotAI/kimi-cli/issues/1565) | `WriteFile`/`Shell` fail with "Invalid arguments" on HTML with quotes | **OPEN** | Blocks basic web development workflows; argument parsing appears to mishandle quoted strings |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) | JetBrains IDE integration broken | **OPEN** | Long-running IDE compatibility issue; affects PyCharm/IntelliJ users with no resolution timeline |
| [#1566](https://github.com/MoonshotAI/kimi-cli/issues/1566) | Plugin system compatibility questions (Claude Code/Open Code plugins) | **OPEN** | Community seeking clarity on plugin ecosystem interoperability; documentation gap evident |
| [#1567](https://github.com/MoonshotAI/kimi-cli/issues/1567) | Disable Ctrl+W clipboard behavior on Mac | **OPEN** | UX friction: destructive clipboard override conflicts with standard terminal expectations |
| [#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560) | VS Code plugin: Skill selection should not auto-submit | **OPEN** | Inconsistency between CLI and VS Code behavior; breaks iterative skill refinement workflow |
| [#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559) | Official download command fails | **OPEN** | Onboarding friction: getting-started documentation contains broken installation instructions |
| [#1380](https://github.com/MoonshotAI/kimi-cli/issues/1380) | ACP terminal tool fails with `module acp has no attribute TerminalHandle` | **CLOSED** | ACP 0.8 API breaking change; resolved via [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) migration |
| [#1476](https://github.com/MoonshotAI/kimi-cli/issues/1476) | Plan mode state desync: "no longer in plan mode" while still in plan mode | **CLOSED** | State management bug; fix likely shipped in recent release |

---

## 4. Key PR Progress

| # | PR | Status | Feature/Fix |
|---|-----|--------|-------------|
| [#1562](https://github.com/MoonshotAI/kimi-cli/pull/1562) | Auto-resolve `QuestionRequest` in yolo/print mode | **MERGED** | Eliminates indefinite hangs in automation pipelines; adds `YoloModeInjectionProvider` to suppress interactive prompts |
| [#1563](https://github.com/MoonshotAI/kimi-cli/pull/1563) | Jinja2 `{% include %}` support for system prompts | **MERGED** | Enables modular prompt composition; critical for teams managing complex agent configurations |
| [#1561](https://github.com/MoonshotAI/kimi-cli/pull/1561) | Lifecycle hooks system (Wire 1.7) | **OPEN** | 13-event hook architecture matching Claude Code; enables custom telemetry, logging, and automation integrations |
| [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | Configurable compaction providers | **OPEN** | Allows dedicated compaction models vs. chat model reuse; cost/performance optimization for long contexts |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | Fix ACP init when `kimi` not in `sys.argv` | **OPEN** | Resolves IDE integration failures (PyCharm, VS Code debugger); addresses `list.index(x): x not in list` error |
| [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) | Replace deprecated `acp.TerminalHandle` with Client methods | **MERGED** | ACP 0.8 compatibility; unblocks terminal tool functionality |
| [#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558) | Mark plugin system as beta | **MERGED** | Documentation transparency; sets expectations for API stability |
| [#1213](https://github.com/MoonshotAI/kimi-cli/pull/1213) | Nix devShell support | **OPEN** | Reproducible development environment for Nix users; community infrastructure contribution |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Plugin ecosystem clarity** | #1566, #1558 | Users want interoperability standards and installation guidance for third-party plugins |
| **Lifecycle extensibility** | #1561 | Demand for hooks/observability matching competitor (Claude Code) capabilities |
| **Context management optimization** | #1549 | Need for cost-efficient compaction strategies in long-running sessions |
| **Cross-IDE parity** | #1334, #1560, #1512 | VS Code and JetBrains integrations require dedicated attention to match CLI reliability |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **v1.25.0 `writefile` regressions** | 2+ reports (#1564, #1565) | Blocking daily coding workflows; Windows and HTML content particularly affected |
| **Argument parsing fragility** | #1565 | Tool calls failing on valid content with special characters |
| **IDE integration gaps** | #1334, #1512, #1560 | JetBrains broken, VS Code behavior inconsistent, debugger contexts fail ACP init |
| **Documentation drift** | #1559, #1566 | Installation instructions outdated; plugin system under-documented |
| **Mac UX friction** | #1567 | Unexpected clipboard behavior violating platform conventions |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity for 2026-03-25.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-25

---

## 1. Today's Highlights

OpenCode shipped **v1.3.2** with critical TUI debugging capabilities including heap snapshot functionality, while the community converged on **memory leak fixes** following a coordinated 20+ contributor investigation. Authentication turbulence continues with **Claude OAuth breakage** affecting all models since March 17, and **v1.3.2's web interface suffered a partial outage** even for users on older versions—suggesting a server-side regression.

---

## 2. Releases

### [v1.3.2](https://github.com/anomalyco/opencode/releases/tag/v1.3.2)
- **TUI debugging**: Added heap snapshot capture for both TUI and server processes via "Write heap snapshot" command; outputs to `tui.heapsnapshot` and `server.heapsnapshot`

### [v1.3.1](https://github.com/anomalyco/opencode/releases/tag/v1.3.1)
- **Poe integration**: Built-in OAuth and API key authentication for poe.com
- **AWS improvements**: Token caching for custom Amazon Bedrock providers
- **Editor support**: Syntax highlighting for Kotlin, HCL, Lua, and TOML
- **UX polish**: Manual lock/unlock for theme mode

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#16470](https://github.com/anomalyco/opencode/issues/16470) — Code output unreadable in light mode | Core accessibility bug making formatted code invisible; affects daily usability | 24 comments, 26 👍 — **top-voted active bug** |
| [#16697](https://github.com/anomalyco/opencode/issues/16697) — Multiple memory leaks, unbounded RAM growth | Critical stability issue; **20+ contributors independently investigated**, resulting in coordinated PR wave | 14 comments, 11 👍; flagged as systemic problem |
| [#17910](https://github.com/anomalyco/opencode/issues/17910) — OAuth auth + cache_control ephemeral causes HTTP 400 on Claude models | **Complete Claude outage** for OAuth users since March 17; regression with no config changes | 11 comments; urgent, affects paying subscribers |
| [#4804](https://github.com/anomalyco/opencode/issues/4804) — High CPU usage (closed) | Long-standing performance issue finally resolved; Mac Intel users particularly affected | 17 comments, resolved after months |
| [#19034](https://github.com/anomalyco/opencode/issues/19034) — `opencode web` completely broken since 1.3.2 | **Severe**: Users on 1.2.27 also affected, implying server-side/API regression; models won't load, sessions lost | 6 comments, rapid closure suggests hotfix deployed |
| [#7467](https://github.com/anomalyco/opencode/issues/7467) — GitHub-based Agent Marketplace | Ecosystem growth enabler; addresses friction in sharing agents across teams | 10 comments; sustained interest since January |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) — Official VS Code extension | **Most-requested platform expansion** (23 👍); would unlock native IDE integration | 9 comments, strong demand |
| [#17418](https://github.com/anomalyco/opencode/issues/17418) — Remote server paths broken on Windows since 1.2.25 | Breaks cross-platform remote workflows; Windows Desktop → Linux server path confusion | 8 comments; regression in recent release |
| [#18950](https://github.com/anomalyco/opencode/issues/18950) — Cannot connect with Claude (web UI) | Auth flow regression: OAuth options disappeared, leaving only API key input | 4 comments; UX confusion post-update |
| [#18364](https://github.com/anomalyco/opencode/issues/18364) — Windows TUI crashes during input, editing state lost | Data loss bug: crashes destroy unsaved work; high severity for Windows users | 4 comments |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#18679](https://github.com/anomalyco/opencode/pull/18679) — Effectify Worktree service | Major architecture migration: Worktree service to Effect pattern with `ChildProcessSpawner` for git ops | Open, beta, vouched |
| [#18900](https://github.com/anomalyco/opencode/pull/18900) — Restore git-backed review modes with Effectful git service | Restores desktop diff inspection; unifies git operations across VCS, worktree, CLI | Open |
| [#19041](https://github.com/anomalyco/opencode/pull/19041) — Auto-re-read stale files in agent loop | Fixes retry loops when formatters modify files between read/write; prevents hundreds of consecutive failures | Open, needs compliance |
| [#18419](https://github.com/anomalyco/opencode/pull/18419) — Switch file search to `fff` | Replaces ripgrep plumbing with unified `fff` layer for search/tree/grep; performance and consistency improvement | Open |
| [#6629](https://github.com/anomalyco/opencode/pull/6629) — OpenTelemetry instrumentation with Aspire Dashboard | Full observability: tools, MCP, sessions, LLM, LSP, plugins; `bun run dev:otel` for local debugging | Open, needs issue |
| [#19038](https://github.com/anomalyco/opencode/pull/19038) — In-app browser for desktop | Native web browsing without leaving OpenCode Desktop | Open |
| [#18433](https://github.com/anomalyco/opencode/pull/18433) — AI SDK v6 support | Major dependency upgrade; WIP with copilot and GitLab AI SDK migrations | Open, beta, vouched |
| [#16069](https://github.com/anomalyco/opencode/pull/16069) — First-class PowerShell support on Windows | Replaces Git Bash `realpath` dependency; native PowerShell path/permission handling | Open |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) — Mobile touch optimization | Responsive touch targets, swipe gestures, mobile-friendly navigation while preserving desktop UX | Open |
| [#19035](https://github.com/anomalyco/opencode/pull/19035) — Copy format options (Markdown, Email-ready HTML) | Replaces single copy button with dropdown: plain text, Markdown, HTML; improves sharing workflows | Open |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **IDE ecosystem expansion** | [#11176](https://github.com/anomalyco/opencode/issues/11176) (VS Code ext, 23 👍), [#7467](https://github.com/anomalyco/opencode/issues/7467) (Agent Marketplace) | Users want OpenCode *inside* existing workflows, not as siloed replacement |
| **Remote/mobile access** | [#19013](https://github.com/anomalyco/opencode/issues/19013) (WebRTC P2P remote), [#18767](https://github.com/anomalyco/opencode/pull/18767) (mobile touch) | Demand for "code anywhere" flexibility beyond desktop tethering |
| **Conversation/memory tools** | [#11819](https://github.com/anomalyco/opencode/issues/11819) (search message history), [#15351](https://github.com/anomalyco/opencode/issues/15351) (chat channels) | Users hitting context limits; need better memory/organization primitives |
| **TUI polish & accessibility** | [#19005](https://github.com/anomalyco/opencode/issues/19005) (clickable paths), [#18195](https://github.com/anomalyco/opencode/issues/18195) (keyboard scroll), theme fixes | Terminal UX still rough vs. web; friction in daily workflows |
| **Voice & output quality** | [#19025](https://github.com/anomalyco/opencode/issues/19025) (Edge TTS server backend) | Browser TTS insufficient; users want production-grade voice output |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Root Cause | Community Sentiment |
|------------|-----------|------------|---------------------|
| **Authentication fragility** | Very high | Claude OAuth breakage ([#17910](https://github.com/anomalyco/opencode/issues/17910)), Poe/Claude API key confusion ([#18950](https://github.com/anomalyco/opencode/issues/18950), [#18811](https://github.com/anomalyco/opencode/issues/18811)) | Frustration with "moving target" auth flows; enterprise users particularly affected |
| **Memory & stability** | High | Multiple leak sources ([#16697](https://github.com/anomalyco/opencode/issues/16697)), unbounded RAM growth, compaction loops ([#18962](https://github.com/anomalyco/opencode/issues/18962)) | **Critical mass reached**: 20+ contributors independently investigating; PR wave emerging |
| **Theme/rendering regressions** | High | Light mode breakage ([#16470](https://github.com/anomalyco/opencode/issues/16470)), system theme transparency issues ([#12184](https://github.com/anomalyco/opencode/issues/12184), [#13363](https://github.com/anomalyco/opencode/issues/13363)) | Accessibility debt; rapid TUI iteration causing visual regressions |
| **Cross-platform path handling** | Moderate | Windows path separators ([#7279](https://github.com/anomalyco/opencode/issues/7279)), remote server path confusion ([#17418](https://github.com/anomalyco/opencode/issues/17418)) | Windows and remote workflows second-class; PowerShell PR ([#16069](https://github.com/anomalyco/opencode/pull/16069)) addresses part |
| **MCP server management** | Moderate | No runtime toggle ([#514](https://github.com/anomalyco/opencode/issues/514)), startup errors with unavailable servers | Context bloat and reliability issues; needs TUI controls |
| **Version synchronization** | Moderate | v1.3.2 web breakage affecting 1.2.27 users ([#19034](https://github.com/anomalyco/opencode/issues/19034)) | Suggests insufficient server/API versioning; breaks trust in "stable" releases |

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-25

---

## 1. Today's Highlights

The Qwen Code team shipped **v0.13.0-nightly.20260324** with continued iteration on the ACP (Agent Client Protocol) integration and permission system refinements. Community activity surged around VS Code extension UX gaps—particularly clipboard image pasting and settings discoverability—while developers continue hitting edge cases with CJK (Chinese/Japanese/Korean) path handling and shell environment detection on Windows/Linux. Notably, a new `/loop` command for periodic task execution and Telegram channel integration via ACP signal expansion into multi-platform agent deployment.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [v0.13.0-nightly.20260324.aebe889b3](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260324.aebe889b3) | 2026-03-24 | Nightly build; full changelog available [here](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.13.0-nightly.20260324.aebe889b3). No detailed release notes provided—typical for nightly channel. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1370](https://github.com/QwenLM/qwen-code/issues/1370) | VSCode extension settings discovery gap | Critical onboarding friction: users cannot locate settings UI or confirm configuration parity between CLI and IDE extension. | 6 comments, sustained activity since Dec 2025; indicates documentation/UX debt. |
| [#241](https://github.com/QwenLM/qwen-code/issues/241) | Shift+Enter sends message instead of newline | Breaks muscle memory from Claude Code and standard chat interfaces; impacts power user efficiency. | 4 comments, 4 upvotes—long-standing (Aug 2025) with clear user expectation mismatch. |
| [#2626](https://github.com/QwenLM/qwen-code/issues/2626) | CLI crashes on permission prompts (Linux/tmux) | Regression affecting Ubuntu Server 24.04.4 users; blocks core workflow in headless environments. | 4 comments, zero workarounds identified beyond version rollback. |
| [#2632](https://github.com/QwenLM/qwen-code/issues/2632) | Responses hang indefinitely (10–15 min) | Severe reliability issue requiring manual ESC interruption; affects trust in agent autonomy. | 3 comments, Chinese-language report suggests regional user base impact. |
| [#1897](https://github.com/QwenLM/qwen-code/issues/1897) | LLM injects spaces into CJK paths | Recurring localization bug breaking file operations in Chinese-named directories; path validation fails. | 3 comments, duplicate pattern with #2496 indicating systemic tokenizer/prompt issue. |
| [#2605](https://github.com/QwenLM/qwen-code/issues/2605) | Windows clipboard image paste unsupported | Feature parity gap vs. macOS/Linux; Windows CLI users forced to manual path entry. | 4 comments, clear feature request with workflow justification. |
| [#2640](https://github.com/QwenLM/qwen-code/issues/2640) | Permission approvals not persisting in session | "Always allow" selections ignored within same session; breaks YOLO mode promise and creates fatigue. | 5 upvotes, 1 comment—high impact, likely regression from permission system refactor. |
| [#2530](https://github.com/QwenLM/qwen-code/issues/2530) | "Empty response text" errors with OpenRouter | Integration reliability with third-party providers (Qwen3-Coder-next, GLM-5-turbo); tool calling failures. | 2 comments, affects multi-model workflows. |
| [#2629](https://github.com/QwenLM/qwen-code/issues/2629) | VS Code: `file_path` required property missing | Recent update broke file read operations; `params must have required property 'file_path'` regression. | 1 comment, immediate post-release report suggests 0.13.0 instability. |
| [#2304](https://github.com/QwenLM/qwen-code/issues/2304) | `<think>` tag causes VS Code extension truncation | Thinking/reasoning content malformed in streaming; wastes API calls and breaks output. | 1 comment, Chinese report—impacts Qwen's native thinking model display. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2643](https://github.com/QwenLM/qwen-code/pull/2643) | `/loop` command for periodic task execution | Adds `LoopManager` and AppContainer integration for scheduled prompt iteration; closes [#2638](https://github.com/QwenLM/qwen-code/issues/2638). | Open |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | Telegram channel integration via ACP | Bridges messaging platforms to Qwen Code CLI using Agent Client Protocol; enables remote/mobile agent interaction. | Open |
| [#2645](https://github.com/QwenLM/qwen-code/pull/2645) | Git Bash/MSYS2 shell detection on Windows | Fixes Windows shell command execution to use `bash` instead of `cmd.exe`/`PowerShell` in MinTTY environments. | Open |
| [#2631](https://github.com/QwenLM/qwen-code/pull/2631) | Fix stale subagent diff confirmation in IDE | Resolves stuck IDE diff tabs after user accept/reject; unblocks ACP-integrated workflows. | Open (0.14.0) |
| [#2637](https://github.com/QwenLM/qwen-code/pull/2637) | Human-readable permission labels + deny rule feedback | Replaces raw rule syntax (`Read(//Users/alice/**)`) with "read files in /Users/alice/"; surfaces blocking rules in errors. | Open |
| [#2642](https://github.com/QwenLM/qwen-code/pull/2642) | Restore `trust: true` for MCP servers | Fixes v0.13.0 regression where MCP `trust` setting stopped working after permission refactor. | Open |
| [#2636](https://github.com/QwenLM/qwen-code/pull/2636) | Accept thought-only responses in GeminiChat | Fixes `InvalidStreamError` for thinking models returning only reasoning content; aligns with Gemini API behavior. | Open |
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | Follow-up suggestions feature (CLI + WebUI) | Implements Claude Code-style NES (Next-Step Suggestions); suggests actions like "commit this" post-task. | Open |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | `/skills` slash command with secondary picker | VS Code IDE companion improvement: secondary picker for skill selection instead of immediate send. | Open (0.14.0) |
| [#2611](https://github.com/QwenLM/qwen-code/pull/2611) | Graceful PTY race condition handling | Prevents crashes from `EIO`/`EBADF` errors when pseudo-terminal exits during pending I/O (macOS/Linux). | Open (0.13.1) |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **IDE parity & clipboard integration** | [#1370](https://github.com/QwenLM/qwen-code/issues/1370), [#1891](https://github.com/QwenLM/qwen-code/issues/1891), [#1951](https://github.com/QwenLM/qwen-code/issues/1951), [#2605](https://github.com/QwenLM/qwen-code/issues/2605) | Users expect seamless image paste and settings sync between CLI and VS Code extension; treating IDE as first-class citizen. |
| **Persistent permission/session management** | [#2335](https://github.com/QwenLM/qwen-code/issues/2335), [#2640](https://github.com/QwenLM/qwen-code/issues/2640), [#2552](https://github.com/QwenLM/qwen-code/issues/2552) | Demand for "Proceed Always" to survive restarts and for customizable system prompts via `settings.json` rather than env vars. |
| **Policy/safety engine** | [#1933](https://github.com/QwenLM/qwen-code/issues/1933) (Gemini CLI-style Policy Engine) | Enterprise users want TOML-based tool/command allowlists for safer autonomous operation. |
| **Multi-channel deployment** | [#2628](https://github.com/QwenLM/qwen-code/pull/2628), [#2528](https://github.com/QwenLM/qwen-code/issues/2528) (OSC notify) | Expansion beyond terminal—Telegram, cmux, and other messaging platforms as agent interfaces. |
| **Follow-up suggestions/NES** | [#2523](https://github.com/QwenLM/qwen-code/issues/2523), [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | Competitive parity with Claude Code's contextual next-action recommendations. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **CJK path handling bugs** | High (multiple reports) | File operations fail in Chinese-named directories; tokenizer/prompt engineering issue injecting spaces. | [#1897](https://github.com/QwenLM/qwen-code/issues/1897), [#2496](https://github.com/QwenLM/qwen-code/issues/2496) |
| **Permission system instability** | High (regressions in 0.13.0) | `trust: true` broken, approvals not persisting, session fatigue; undermines YOLO mode value. | [#2640](https://github.com/QwenLM/qwen-code/issues/2640), [#2642](https://github.com/QwenLM/qwen-code/pull/2642) |
| **VS Code extension fragility** | High (post-0.13.0) | File read breakages, `<think>` truncation, settings discoverability gaps. | [#2629](https://github.com/QwenLM/qwen-code/issues/2629), [#2304](https://github.com/QwenLM/qwen-code/issues/2304), [#1370](https://github.com/QwenLM/qwen-code/issues/1370) |
| **Shell environment detection (Windows/Linux)** | Medium | Git Bash/MSYS2, tmux, and headless Linux environments poorly handled; crashes or wrong shell selection. | [#2645](https://github.com/QwenLM/qwen-code/pull/2645), [#2626](https://github.com/QwenLM/qwen-code/issues/2626) |
| **Third-party provider reliability** | Medium | OpenRouter, Gemini, Anthropic integrations hit "empty response" or token budget errors. | [#2530](https://github.com/QwenLM/qwen-code/issues/2530), [#2508](https://github.com/QwenLM/qwen-code/issues/2508) |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-03-24.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*