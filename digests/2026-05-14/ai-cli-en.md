# AI CLI Tools Community Digest 2026-05-14

> Generated: 2026-05-14 00:25 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-14

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive, multi-polar market with eight actively developed tools serving distinct user segments. Development velocity remains high across the board, with most projects shipping daily or near-daily updates. A clear architectural convergence is underway: all major tools are racing to add daemon/server modes, MCP (Model Context Protocol) integration, multi-agent orchestration, and headless/automation capabilities. Simultaneously, platform stability—particularly Windows support, terminal emulator compatibility, and long-session reliability—has emerged as the primary gating factor for enterprise adoption. The ecosystem is transitioning from "smart chat interfaces" to "production agent platforms," with telemetry, sandboxing, and programmatic control becoming table stakes.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Status |
|------|:-----------:|:---------:|:--------------:|----------------|
| **Claude Code** | 8 hot + ongoing | 9 open | **v2.1.141** | Stable cadence; plugin ecosystem maturing |
| **OpenAI Codex** | 10 hot | 9 open | None | Infrastructure-heavy; POC phase for Code Mode files |
| **Gemini CLI** | 10 hot, 50 active | 10 merged/updated | None | High merge velocity; Google-internal prioritization visible |
| **GitHub Copilot CLI** | 10 hot | 2 closed | **v1.0.47–v1.0.48-0** | Rapid patch releases; regression-prone |
| **Kimi Code CLI** | 10 hot | 10 open | None (v1.44.0 bump closed) | Release process adjustment; quality turbulence |
| **OpenCode** | 10 hot | 10 open | **v1.14.49** | Fast iteration; Effect-based refactoring surge |
| **Pi** | 10+ tracked | 10 merged/updated | None | Refactor consolidation; issue closure without resolution |
| **Qwen Code** | 10 hot | 10+ open, 50 in flight | **v0.15.11** | Daemon architecture transition; performance focus |
| **DeepSeek TUI** | 10 hot, 49 total | 50 updated | **v0.8.33–v0.8.35** | Highest release frequency; rendering stability crisis |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Multi-agent / agent team orchestration** | Claude Code, OpenCode, Gemini CLI, Qwen Code | Claude Code: background agents with `/goal`; OpenCode: #12661 "Agent Teams Equivalent or Better" (110👍); Gemini: subagent recovery (#22323); Qwen: `/goal` with judge-driven continuation (#4123) |
| **MCP (Model Context Protocol) integration hardening** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, DeepSeek TUI | Codex: zombie process leak fixed (#12491); Kimi: stderr TUI corruption (#2263/#2251); Copilot: sub-agent context gaps (#2630); Gemini: 400 error with >128 tools (#24246) |
| **Headless / non-interactive / CI automation** | Claude Code, OpenAI Codex, Qwen Code, GitHub Copilot CLI | Claude Code: `terminalSequence` hooks, `CLAUDE_CODE_PLUGIN_PREFER_HTTPS`; Codex: `--worktree`/`--tmux` flags (#12862); Qwen: daemon mode (`qwen serve`, #3803); Copilot: `--prompt` mode tool gaps (#2630) |
| **Context window / compaction control** | Claude Code, OpenAI Codex, Pi, Qwen Code, OpenCode | Claude Code: `context_management` config (#44521); Codex: configurable compaction model (#22486); Pi: auto-compaction for zero-usage local models (#4496); Qwen: `/compress` fix (#4098); OpenCode: double compaction (#26230), false "exceeds window" (#27315) |
| **Session management / forking / persistence** | Claude Code, GitHub Copilot CLI, Qwen Code, DeepSeek TUI | Copilot: `/fork` shipped (v1.0.47); Qwen: file restoration `/rewind` (#4064); DeepSeek: session artifact metadata (#1220), `exec --resume` (#1530) |
| **Enterprise / corporate environment support** | Claude Code, Gemini CLI, GitHub Copilot CLI, DeepSeek TUI | Claude Code: HTTPS plugin clone, multi-account (500+👍); Gemini: proxy support (#26361), gateway auth (#27021); Copilot: `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` NFS paths (#1433); DeepSeek: proxy support (#1595) |
| **Sandboxing / safety / guardrails** | OpenCode, Gemini CLI, Qwen Code, DeepSeek TUI | OpenCode: seatbelt-like sandboxing (#2242, 46👍); Gemini: destructive behavior guards (#22672); Qwen: command substitution denial (#4093); DeepSeek: file-edit guardrails (#1521) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|:-----------:|:------------:|:----------:|:------------------:|:-------------:|:--------:|:--:|:---------:|:------------:|
| **Primary user** | Professional developers, multi-org | OpenAI ecosystem, power users | Google Cloud/Vertex AI enterprises | GitHub-centric devs, Microsoft shops | Chinese market, Moonshot API users | Effect/TypeScript ecosystem, tinkerers | Extension builders, local-LLM enthusiasts | Alibaba/cloud-native, CI/automation | Cost-sensitive, Chinese-language-first |
| **Architecture philosophy** | TUI-first, plugin-extensible | Model-centric, delegation-heavy | Agent-native, Google-internal tooling | IDE-adjacent, GitHub-integrated | Shell-REPL hybrid, rapid iteration | Effect-based functional, highly configurable | Extension-driven, event-bus architecture | Daemon/server transition, production platform | Terminal-native, npm-distributed |
| **Key differentiator** | Plugin ecosystem maturity; hook system | `/review` flagship; Codex app GUI | Subagent recovery; browser automation | GitHub-native workflows; cloud agent sessions | K2.6 model integration; Chinese UX | Customizability; `opencode.jsonc` schema; web UI | Extension API; local LLM ergonomics | Daemon mode architecture; Alibaba internal dogfooding | i18n depth; theme system; reasoning language control |
| **Key weakness** | Multi-account backlog (500+👍, unaddressed); Windows stability | Session/data durability; Windows workspace loops | Model ignores user skills; silent agent failures | Native addon fragility; ARM64 breakage; MCP context gaps | K2.6 quality regression; MCP stderr leaks | TUX regressions; packaging gaps; context accounting bugs | Refactor-induced issue closure; context telemetry accuracy | Long-session stability; provider fragmentation | Terminal rendering crises; flickering across platforms |
| **Automation posture** | Programmatic hooks (headless TTY) | Delegated sub-sessions; `--prompt` gaps | Subagent MAX_TURNS misreporting | Sub-agent MCP disconnect; hook bypass | `--prompt-interactive` bridging | Server-mode SSE; experimental APIs | Keyless providers; local-first | Daemon mode (`qwen serve`); `--yolo` CI | `exec --resume`; session metadata |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **Highest velocity, scaling challenges** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Mature feature sets, active enterprise adoption, but hitting architectural limits: plugin resource leaks (Claude), MCP lifecycle (Codex), agent reliability (Gemini), daemon transition complexity (Qwen). Community size → incident volume scaling non-linearly. |
| **Rapid iteration, quality turbulence** | Kimi Code CLI, OpenCode, DeepSeek TUI | Shipping frequently but regression-prone. Kimi's v1.43.0 MCP stderr leaks and K2.6 model backlash; OpenCode's 1.14.x TUX regressions; DeepSeek's rendering crisis. Communities are engaged but trust is volatile. |
| **Refactor/consolidation phase** | Pi | High merge velocity but "closed-because-refactor" pattern risks alienating contributors. Extension system and local-LLM focus are differentiated but maturity gap widening vs. daemon-mode competitors. |
| **Incumbent with integration advantage** | GitHub Copilot CLI | Fastest release cadence (3 in 24h) but native addon fragility suggests build pipeline debt. MCP context gaps in automation contexts reveal architectural assumptions from interactive-first design. |

**Community health signals:**
- **Most engaged issue discourse**: Claude Code (multi-account 500👍, 90 comments sustained over months), OpenCode (#12661 agent teams, 34 comments)
- **Fastest maintainer response**: GitHub Copilot CLI (rapid closure of #3287), Gemini CLI (P1/P2 prioritization visible)
- **Highest contributor diversity**: Qwen Code (50 PRs in flight, multiple active contributors), OpenCode (kitlangton's Effect refactoring surge)

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Agent platforms, not chat tools** | Daemon modes (Qwen #3803, Claude headless hooks), `/goal` commands (Claude, Qwen #4123), judge-driven continuation | Plan for headless CI integration, not just interactive use. Session durability and programmatic control are becoming primary design constraints. |
| **MCP as critical infrastructure, not feature** | Zombie process fixes (Codex #12491), stderr leaks (Kimi #2251), tool limit ceilings (Gemini #24246), sub-agent context gaps (Copilot #2630) | MCP integration requires production-grade lifecycle management. Evaluate tools by MCP reliability in automation contexts, not just interactive demos. |
| **Context engineering as core competency** | Configurable compaction (Codex #22486, Claude #44521), double-compaction bugs (OpenCode #26230), false window-exceeded errors (OpenCode #27315) | Token accounting transparency and user control are differentiators. Tools hiding context mechanics will lose power users. |
| **Windows and corporate environments as adoption gate** | Claude HTTPS plugin clone, Gemini proxy/gateway fixes, Copilot NFS paths, DeepSeek proxy request (#1595) | Cross-platform and air-gapped deployment capability is no longer optional. Evaluate proxy support, SSO/OAuth robustness, and offline startup. |
| **Model quality volatility as operational risk** | Kimi K2.6 backlash (#1925, #2268), Codex GPT-5.5 cache misses (#20301), Claude subscription recognition failures (#58625) | Hard-code model versions in production; build abstraction layers for model switching. Vendor "latest" defaults are increasingly hazardous. |
| **Safety/sandboxing demand outpacing supply** | OpenCode seatbelt request (#2242, 46👍), Gemini destructive behavior guards (#22672), Qwen command substitution (#4093) | Security boundaries must be architected in, not bolted on. Tools without sandboxing primitives will be excluded from enterprise procurement. |
| **Internationalization as competitive vector** | DeepSeek Chinese reasoning chains (#683), Kimi zh-CN support (#2270), OpenCode Italian translation (#27187) | Non-English markets are no longer afterthoughts. UI localization alone is insufficient; model reasoning language and documentation depth matter. |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-14 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Universal applicability—"affects every document Claude generates"; debate over whether this should be core behavior vs. optional skill |
| 2 | **PDF Fix** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Case-sensitive file reference corrections in `skills/pdf/SKILL.md` (8 mismatches: `REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) | Cross-platform reliability; breaks on Linux/WSL deployments |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised frontend-design skill for clarity, actionability, and single-conversation executability | Token efficiency vs. comprehensiveness tradeoff; internal coherence of design guidance |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills: 5-dimension quality scoring (structure, examples, validation, etc.) + security vulnerability scanning for Skill marketplace submissions | Meta-skill value proposition; whether marketplace curation should be automated or manual |
| 5 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS/ODF files; LibreOffice integration; ODT→HTML parsing | Open-source format advocacy vs. DOCX dominance; ISO standard compliance |
| 6 | **Skill-Creator YAML Fix** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse validation for unquoted `description` fields containing `:` to prevent silent YAML truncation | Developer experience; silent failure modes in skill authoring |
| 7 | **DOCX Bookmark Collision Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Prevents document corruption when tracked changes overlap with existing bookmarks via shared `w:id` space | OOXML edge case expertise; hardcoded ID anti-pattern |
| 8 | **System Documentation** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Enterprise evidence management system docs: architecture, flowcharts, network topology, evidence lifecycle | Scope creep concerns—whether this belongs in Skills vs. separate documentation repo |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Enterprise sharing & governance** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍), [#492](https://github.com/anthropics/skills/issues/492) (6 comments, trust boundary abuse) | Org-wide skill libraries, SSO-compatible distribution, namespace verification to prevent impersonation |
| **Testing & validation infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍), [#723](https://github.com/anthropics/skills/pull/723) (testing-patterns skill) | Automated skill evaluation (`run_eval.py` reliability), testing philosophy skills, CI/CD for skill quality |
| **MCP interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) (2 comments) | Skills↔MCP bridge, data compression for MCP contexts, standardized API exposure |
| **Plugin architecture fixes** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍), [#1087](https://github.com/anthropics/skills/issues/1087) (2 comments), [#532](https://github.com/anthropics/skills/issues/532) (closed, enterprise SSO) | `marketplace.json` enforcement, deduplication, enterprise auth without API keys |
| **Platform-specific automation** | [#806](https://github.com/anthropics/skills/pull/806) (macOS AppleScript), [#568](https://github.com/anthropics/skills/pull/568) (ServiceNow), [#181](https://github.com/anthropics/skills/pull/181) (SAP) | Native OS integration, enterprise SaaS platform skills, vertical industry solutions |

---

## 3. High-Potential Pending Skills

| Skill | PR | Author | Time Open | Merge Probability | Why It Matters |
|:---|:---|:---|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | ~7 weeks | ⬆️ High | Addresses #556's core complaint; fills critical gap in Claude's testing guidance (Testing Trophy, AAA pattern, React Testing Library) |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | avimak | ~13 weeks | ⬆️ Moderate-High | Direct deployment from Claude to public URLs; lifecycle management; aligns with "vibe coding" deployment trend |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | ~11 weeks | ⬆️ Moderate | 4-skill cognitive framework (kernel/advisor/agent/memory); professional knowledge management; memory persistence is recurring theme |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | ~6 weeks | ⬆️ Moderate | Replaces screenshot-based computer use with native AppleScript; two-tier permission model shows security awareness |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | ~9 weeks | ⬆️ Moderate | Broadest enterprise platform skill yet (ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM); tests Skills' vertical depth limits |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | p19dixon | ~21 weeks | ⬇️ Lower (stale) | Orphaned code detection, documentation gap analysis; 10-step workflow may be too heavy for single-conversation constraint |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, shareable enterprise infrastructure**—skills that can be validated, distributed without friction across organizations, and operate securely within existing IT ecosystems (SSO, case-sensitive filesystems, namespace governance), while the most active development energy flows toward fixing foundational authoring and distribution mechanics rather than expanding creative skill diversity.

---

---

# Claude Code Community Digest — 2026-05-14

## Today's Highlights

Anthropic shipped **v2.1.141** with hook system enhancements for headless environments, while the community continues to push hard on multi-account support (now 500+ upvotes on the oldest request). The plugin ecosystem is maturing rapidly with three new plugin-manager issues filed in a single day around lock file leaks, garbage collection, and migration hooks.

---

## Releases

### [v2.1.141](https://github.com/anthropics/claude-code/releases/tag/v2.1.141)
- **`terminalSequence` field in hook JSON output** — enables desktop notifications, window title updates, and terminal bells in headless/CI environments without a controlling TTY
- **`CLAUDE_CODE_PLUGIN_PREFER_HTTPS`** — clones GitHub plugin sources over HTTPS instead of SSH, unblocking corporate/locked-down environments without GitHub SSH keys

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Multi-account switching in Claude Desktop | The original and most-upvoted feature request (500 👍, 90 comments); professionals managing work/personal orgs are blocked | Sustained pressure; users reference this in every related thread |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | Multi-account in Mobile without shared email | Companion request (222 👍) showing the problem spans all platforms; marked `invalid` but discussion continues | Frustration with closure; users want unified account model |
| [#28077](https://github.com/anthropics/claude-code/issues/28077) | Scrollback broken in CLI TUI | Core UX regression — alt-screen mode destroys terminal history, making long conversations unreviewable | 62 👍; users comparing unfavorably to `aider`, `shell-gpt` |
| [#47104](https://github.com/anthropics/claude-code/issues/47104) | Windows 11: Cowork/Connectors/Claude Code broken post-update | Critical Windows stability issue affecting three major features simultaneously; `ERR_CONNECTION_RESET` + OAuth cascade failure | 11 comments in 24h; urgent tone from enterprise users |
| [#58625](https://github.com/anthropics/claude-code/issues/58625) | API billed instead of Max subscription | Subscription recognition bug costing users money; OAuth response missing `organizationType` | Financial impact; user provided detailed repro with `~/.claude.json` analysis |
| [#58853](https://github.com/anthropics/claude-code/issues/58853) | Agent view display garbled | Rendering regression in new agent orchestration UI; blocks adoption of background agents | Fresh report, likely to accumulate duplicates if unconfirmed |
| [#44521](https://github.com/anthropics/claude-code/issues/44521) | Expose context_management config for long-running agents | Agent SDK power users need programmatic control over context compression to prevent state loss | Referenced closed issue; filed with "concrete production use case" |
| [#58588](https://github.com/anthropics/claude-code/issues/58588) | Programmatic `/rename` and `/color` at session start | Automation/orchestration gap — CI and wrapper scripts can't configure session identity | Low engagement but precise use case; WSL users particularly affected |
| [#58883](https://github.com/anthropics/claude-code/issues/58883) | Global `CLAUDE.md` auto-commit instruction ignored | Instruction hierarchy / prompt injection issue undermining user control guarantees | Trust/safety concern; user provided specific instruction text and failure mode |
| [#58881](https://github.com/anthropics/claude-code/issues/58881) | Plugin `.in_use/<pid>` lock files leak on crash | Reliability issue in new plugin system; orphaned locks prevent plugin updates until manual cleanup | Part of three-issue cluster showing plugin manager immaturity |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#58842](https://github.com/anthropics/claude-code/pull/58842) | `git diff --stat` in commit commands | Fixes context bloat: full `git diff HEAD` was loading entire patch into Claude's context on every `/commit` | Open |
| [#58801](https://github.com/anthropics/claude-code/pull/58801) | Add `agents.txt` v1.0 at repo root | Meta-PR: declares what AI agents may do on this repo; built entirely with Claude Code in autonomous `/goal` mode | Open |
| [#58744](https://github.com/anthropics/claude-code/pull/58744) | `/teach` command for incremental project learning | New slash command for teaching Claude conventions/patterns; auto-writes to `CLAUDE.md` with user confirmation | Open |
| [#58646](https://github.com/anthropics/claude-code/pull/58646) | Git-aware history for worktrees | Fixes session fragmentation across git worktrees; keys history by repo identity not CWD path | Open |
| [#58655](https://github.com/anthropics/claude-code/pull/58655) | Fix positional substitution in `/clean_gone` | Bugfix: Claude's command substitution was stripping literal `$1`, breaking branch/worktree parsing | Open |
| [#58657](https://github.com/anthropics/claude-code/pull/58657) | Clarify instruction precedence docs | Documents hierarchy: user instructions → project instructions, with override semantics | Open |
| [#58656](https://github.com/anthropics/claude-code/pull/58656) | Clarify plugin `bin/` executables | Documents how plugins expose bare Bash commands vs. explicit `/scripts` paths | Open |
| [#58644](https://github.com/anthropics/claude-code/pull/58644) | Chained Bash hook example | Security-focused docs: fail-closed PreToolUse hook for compound shell commands | Open |
| [#56334](https://github.com/anthropics/claude-code/pull/56334) | Windows Developer Mode note for symlinks | Documents silent failure mode where background agents show "0 tokens" without error | Open |
| [#11713](https://github.com/anthropics/claude-code/pull/11713) | `developer-utilities` plugin | 5-command plugin addressing community gaps; evolved through multiple revisions (session commands removed as native features shipped) | Open |

---

## Feature Request Trends

1. **Multi-account / profile switching** — Dominant theme across Desktop (#18435), Mobile (#36151), and CLI auth flows. Users want org-separated contexts without logout/login friction.

2. **Programmatic session control** — Requests for `/rename`, `/color` (#58588), plan file naming (#58884), and context management config (#44521) show Claude Code being embedded in larger automation systems.

3. **Plugin ecosystem hardening** — Three issues in 24h on plugin manager internals (#58880-#58882) indicate the platform is attracting serious plugin developers hitting resource lifecycle gaps.

4. **TUI/terminal fidelity** — Scrollback (#28077), IME compatibility (#53977), and display corruption (#58853) suggest the custom TUI renderer still has edge cases across terminal emulators.

5. **Documentation accuracy** — Multiple docs PRs and issues (#58858, #58864, #58868) around hooks, permissions, and model config show users relying on reference docs for production integration.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Subscription/billing recognition failures** | #58625, #54588, #56281, #58371 — Max/Pro subscriptions not recognized, API billed instead, payment upgrades failing | 🔴 Critical — direct financial impact |
| **Windows as second-class platform** | #47104 (multi-feature breakage), #58856 (auth), #56142 (TUI input), symlink docs gap (#56334) | 🔴 High — enterprise adoption blocker |
| **Agent view / background agent reliability** | #58853 (garbled), #58381 (sleeping agents mis-categorized), #58571 (fallback to static list), #58468 (plan mode scope loss) | 🟡 High — new feature category with stability debt |
| **Plugin manager resource leaks** | #58881 (PID locks), #58880 (orphaned versions), #58882 (no migration hooks) | 🟡 Medium — will compound as plugin usage scales |
| **Instruction hierarchy unpredictability** | #58883 (CLAUDE.md ignored), #58657 (docs needed to clarify precedence) | 🟡 Medium — erodes trust in user control |
| **OAuth/auth fragility** | #47104, #58625, #54707 — token refresh, org type detection, env var precedence all have failure modes | 🟡 Medium — recurring source of "works on my machine" |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-14

## Today's Highlights

The Codex team is actively landing foundational infrastructure for **Code Mode file operations** with three coordinated POC PRs introducing a gated `files` namespace and broker architecture. Meanwhile, a critical **MCP zombie process leak** that caused 1,300+ orphaned processes and 37GB memory bloat was finally closed, and **Windows workspace dependency loops** remain the top platform-specific pain point with multiple fresh reports.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#14860](https://github.com/openai/codex/issues/14860) | **Remote compact task error** — Context compaction fails on Linux with gpt-5.4 | Blocks long-running sessions on a core workflow; 67 comments show deep community investigation | 🔥 49 upvotes, extensive debugging |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP zombie processes + 37GB leak closed** — Codex.app GUI never reaped child processes | Severe production stability issue; fix validates MCP lifecycle management concerns | Resolved after 23 comments |
| [#5547](https://github.com/openai/codex/issues/5547) | **`/review` configurability** — Request to limit issue count in code reviews | `/review` is a flagship feature; users want tuning for noise vs. signal | 59 upvotes, sustained demand |
| [#21527](https://github.com/openai/codex/issues/21527) | **Codex Desktop/VS Code slowness** — Model responses lag across all surfaces | Perceived performance regression affecting daily usability | 7 upvotes, Windows-specific reports |
| [#21000](https://github.com/openai/codex/issues/21000) | **Codex Web cannot open PRs** — "Create PR" fails unconditionally | Breaks end-to-end workflow for web-first users | 8 upvotes, reproducible |
| [#20301](https://github.com/openai/codex/issues/20301) | **Low cache hit rate with GPT-5.5** — Cost/performance regression on latest model | Directly impacts token economics for power users | 4 upvotes, WSL2-specific |
| [#12862](https://github.com/openai/codex/issues/12862) | **`--worktree` and `--tmux` CLI flags** — One-command isolated sessions | Popular power-user workflow; strong CLI ergonomics demand | 53 upvotes, well-specified |
| [#20741](https://github.com/openai/codex/issues/20741) | **Chat histories disappeared after update** — Data loss scare on macOS | Trust-critical; local DB intact but UI filtering broken | 5 upvotes, urgent-labeled |
| [#22368](https://github.com/openai/codex/issues/22368) | **`gpt-5.2` 404 → WebSocket reconnect loop** — Model availability handling fragile | Exposes poor degradation when models are deprecated/renamed | Fresh, 4 comments |
| [#22486](https://github.com/openai/codex/issues/22486) | **Configurable compaction model** — Decouple context compaction from session model | Cost/quality optimization for background operations | 4 upvotes, technically sophisticated |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#22524](https://github.com/openai/codex/pull/22524) | **POC: Expose gated Code Mode files tools** | Adds `files` namespace with materialize, copy, export operations gated behind `experimental_supported_tools` | Open |
| [#22523](https://github.com/openai/codex/pull/22523) | **POC: Add Code Mode file broker** | Runtime boundary for byte movement between refs; owns side effects explicitly | Open |
| [#22525](https://github.com/openai/codex/pull/22525) | **POC: Code Mode files tool golden tests** | Registry + exec-description coverage proving harness integration | Open |
| [#22399](https://github.com/openai/codex/pull/22399) | **Route delegated MCP elicitations to child session** | Fixes `/review` MCP prompts being swallowed by parent session; critical for delegated workflows | Open |
| [#22572](https://github.com/openai/codex/pull/22572) | **Fix remote environment test fixtures** | Unblocks Docker remote-env coverage; prerequisite for reliable remote development | Open |
| [#22576](https://github.com/openai/codex/pull/22576) | **Avoid ambient temp sandbox roots** | Hardens Linux bwrap tests against `/tmp` metadata mount pollution | Open |
| [#22573](https://github.com/openai/codex/pull/22573) | **Simplify TUI startup test coverage** | Removes flaky PTY-based tests; reduces CI brittleness | Open |
| [#22575](https://github.com/openai/codex/pull/22575) | **Support explicit MCP OAuth client IDs** | Enables pre-registered public clients for enterprise MCP servers | Open |
| [#22402](https://github.com/openai/codex/pull/22402) | **App-server: select permission profiles by id** | Server-controlled profile associations without client-side replacement | Open |
| [#22401](https://github.com/openai/codex/pull/22401) | **Permissions: move workspace roots onto thread state** | Unifies `PermissionProfile` as source of truth for sandbox policy | Open |

---

## Feature Request Trends

1. **CLI session isolation ergonomics** — `--worktree`/`--tmux` flags, branch auto-creation, and worktree path visibility dominate CLI requests; users want git-native, disposable environments with zero friction.

2. **Context and cost control** — Configurable compaction models, independent of session model; configurable `/review` depth; explicit cache optimization for GPT-5.x series. Power users are cost-sensitive and want granularity.

3. **Parallel/multi-track execution** — Requests for simultaneous subagents and concurrent tasks within one chat session; current architecture appears serial or delegation-bound.

---

## Developer Pain Points

| Theme | Frequency | Details |
|-------|-----------|---------|
| **Windows workspace dependency loops** | 🔴 Critical | Multiple issues (#19437, #19770, #19811, #21505, #21650) — app spins on startup, white screens, disabled repair buttons; Windows 10 unsupported but UI offers repair anyway |
| **Session/data durability** | 🟡 High | Chat history disappearance (#20741, #21076), `/goal` not saving (#22557), log rotation failures (#16886) — users distrust state management |
| **MCP/tool lifecycle** | 🟡 High | Zombie processes (now fixed), schema degradation (#13746), OAuth gaps — MCP integration maturity lagging adoption |
| **Model availability/versioning** | 🟡 High | `gpt-5.2` 404 loops (#22368), GPT-5.5 cache misses (#20301) — graceful degradation absent when models change |
| **Performance perception** | 🟡 Moderate | Cross-platform slowness (#21527), TUI cursor flicker (#21828), VS Code extension layout issues (#21625) — polish gaps in daily use |
| **Remote development friction** | 🟡 Moderate | SSH agent forwarding ignored (#22567), remote compact failures (#14860), test fixture instability — remote remains second-class |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-14

## Today's Highlights
No new release shipped in the last 24h, but development velocity remains high with **10 PRs merged or updated** and **50 active issues**. The team is heavily focused on **agent reliability** (subagent recovery, browser resilience, memory system hardening) and **core infrastructure** (proxy support, shell execution stability, telemetry buffering). Enterprise features like RAG snippet logging and gateway authentication fixes also saw progress.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | EPIC to scale from 76 behavioral evals to systematic component-level testing—critical for agent quality at scale | 10 comments, P1/P2, maintainer-only |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Silent failures in `codebase_investigator` undermine trust in agent autonomy; misreports interruption as success | 6 comments, 2 👍, P1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills and sub-agents enough** | Core UX gap: users build skills (gradle, git) that the model ignores without explicit prompting | 6 comments, P2 |
| [#26563](https://github.com/google-gemini/gemini-cli/issues/26563) | **`save_memory` tool not found** | Regression in v0.41.1 breaks `/memory add` workflow—basic feature non-functional | 5 comments, P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck "Waiting input"** | Frequent hang after simple commands complete; blocks interactive workflows | 3 comments, 3 👍, P2 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Could reduce token waste and misaligned reads; investigation for `codebase_investigator` improvement | 7 comments, 1 👍, P2/P3 |
| [#21740](https://github.com/google-gemini/gemini-cli/issues/21740) | **Impact of tracker on multiagent workflows** | Tracking overhead may bottleneck multi-agent orchestration—needs measurement | 8 comments, P2/P3 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails in Wayland** | Linux display protocol compatibility gap limits headless/browser automation | 4 comments, 1 👍, P1/P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard API limit hits power users; needs smarter tool scoping | 2 comments, P2 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should stop/discourage destructive behavior** | Safety gap: `git reset --force`, destructive DB ops proceed without guardrails | 2 comments, 1 👍, P2 |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | **Externalize `https-proxy-agent` to fix proxy support** | Fixes `TypeError: HttpsProxyAgent is not a constructor` by removing from esbuild bundle; unblocks corporate proxy users | Open, P1 |
| [#26951](https://github.com/google-gemini/gemini-cli/pull/26951) | **Implement `issue-fixer` skill and mandate selection** | New bot skill for automated issue resolution + manual mandate selection (auto/issue-fixer/metrics/interactive) via `workflow_dispatch` | Open |
| [#27021](https://github.com/google-gemini/gemini-cli/pull/27021) | **Fix ACP auth: prevent conflicting credentials on enterprise gateways** | Supplies empty `apiKey` in `GATEWAY` mode vs. dummy placeholder; fixes `x-goog-api-key` header conflicts for Vertex AI | Open, P1, ACP |
| [#27011](https://github.com/google-gemini/gemini-cli/pull/27011) | **Compact nightly/preview version display** | Parses long pre-release strings (e.g., `0.42.0-nightly.20260428...`) to `0.42.0 [nightly]` in AppHeader | **Merged** |
| [#27022](https://github.com/google-gemini/gemini-cli/pull/27022) | **Add `gemini-2.5-flash-lite` to fallback chain** | Final-resort model for free-tier users (1,000 RPM quota); fills gap after pro/flash exhaustion | **Merged** |
| [#26939](https://github.com/google-gemini/gemini-cli/pull/26939) | **Fix snapshot recovery across sessions** | Resolves context snapshot corruption when resuming interrupted sessions | Open, P2/P3 |
| [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) | **Prefer `pwsh.exe` over Windows PowerShell 5.1** | Fixes `\"` stripping bug in embedded quotes; closes multiple long-standing Windows shell issues | Open, P1/P2 |
| [#27016](https://github.com/google-gemini/gemini-cli/pull/27016) | **Expose RAG snippets to local log file** | Opt-in `general.logRagSnippets` setting writes Code Customization retrieved snippets to `~/.gemini/logs/rag-trace.log` for debugging | Open, P3 |
| [#27020](https://github.com/google-gemini/gemini-cli/pull/27020) | **Buffer chat compression telemetry** | Wraps OTel logging in `bufferTelemetryEvent`; keeps Clearcut immediate—fixes #23445 | Open, P2 |
| [#26955](https://github.com/google-gemini/gemini-cli/pull/26955) | **Throttle shell text output and bound live UI buffer** | 1s throttle + 100k char cap prevents React re-render jank on high-volume shell output | **Merged**, P2 |

---

## Feature Request Trends

1. **Agent Autonomy & Reliability** — Dominant theme: subagents need better self-recovery (MAX_TURNS handling), smarter skill invocation, and clearer success/failure semantics. Multi-agent workflow overhead under investigation.

2. **AST-Aware Code Intelligence** — Strong push for semantic code navigation (method-bound reads, precise search) to replace brittle regex/line-based tools, reducing token waste and turn count.

3. **Memory System Hardening** — Auto Memory needs deterministic redaction, invalid patch quarantining, and retry bounding; security-conscious enterprise users driving requirements.

4. **Enterprise Observability** — Requests for RAG snippet exposure, remote snippet logging, and policy safety warnings indicate production deployment friction.

5. **Cross-Platform Shell Robustness** — Windows PowerShell modernization, alias support, and terminal resize performance are recurring asks.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Silent agent failures** | #22323 (MAX_TURNS → false success), #21983 (browser GOAL on error) | **High** — erodes trust in automation |
| **Shell execution hangs/crashes** | #25166 ("Waiting input" ghost state), #22186 (get-shit-done crash), #25980 (`@`-mention blob crash) | **High** — blocks interactive use |
| **Model ignores user-built skills** | #21968 (gradle/git skills unused without explicit prompting) | **Medium-High** — defeats customization investment |
| **Memory tool regressions** | #26563 (`save_memory` missing in v0.41.1), #26522/#26523/#26525 (Auto Memory retry/redaction/patch bugs) | **Medium** — feature instability |
| **Proxy/corporate environment friction** | #26361 (proxy constructor error), #27021 (gateway auth conflicts), #24828 (sandbox env forwarding) | **Medium** — adoption blocker for enterprises |
| **Tool limit ceiling** | #24246 (>128 tools → 400 error) | **Medium** — scalability cap |

---

*Digest compiled from google-gemini/gemini-cli GitHub activity 2026-05-13 to 2026-05-14.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-14

## Today's Highlights

GitHub shipped three releases in 24 hours (v1.0.47 through v1.0.48-0), addressing critical MCP server startup failures and adding long-requested session forking capabilities. However, a **severe regression on Windows ARM64**—missing `runtime.node` native addon in 1.0.48-0—has rendered the CLI completely unusable for that platform, with multiple duplicate reports emerging. The community is also actively debating MCP server connectivity gaps in non-interactive and sub-agent contexts.

---

## Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.48-0** | 2026-05-14 | Fixed `/ask` dialog prompting for unreachable follow-ups; stripped YAML frontmatter from skill content injected to models; auto-disabled built-in `github-mcp-server` in Azure DevOps-only workspaces for prompt/headless mode |
| **v1.0.47** | 2026-05-13 | Added `/fork` with optional naming and origin tracking in sessions dialog; fixed Copilot Max subscriber model visibility; added `j/k` navigation in `/diff` view; `--resume` now supports cloud agent sessions without branch pushes |
| **v1.0.47-0** | 2026-05-13 | (Prerelease) Same `j/k` navigation and `--resume` improvements as v1.0.47 |

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|------------------|
| [#2630](https://github.com/github/copilot-cli/issues/2630) | Custom agent `mcp-servers` not connected in CLI sub-agent or `--prompt` contexts | 🔴 OPEN | **Core architecture gap**: Custom agents with MCP server declarations silently lose tool access when invoked non-interactively—breaks automation and headless workflows | 9 comments, no upvotes; detailed repro from `sbdoroff`; tagged `area:non-interactive`, `area:agents`, `area:mcp` |
| [#2058](https://github.com/github/copilot-cli/issues/2058) | Add `/fork` command to branch a session for side quests | 🔴 OPEN | **Shipped partially in v1.0.47** but original requester notes gaps; fundamental UX need for multi-threaded agent conversations | 9 comments, 7 👍; high engagement since March; feature now exists but refinement ongoing |
| [#1433](https://github.com/github/copilot-cli/issues/1433) | `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` broken with external/NFS paths | 🔴 OPEN | **Enterprise blocker**: Custom instructions on network-mounted or external drives fail to load—impacts Linux workstations and shared dev environments | 8 comments, 6 👍; persistent since February; no resolution |
| [#3304](https://github.com/github/copilot-cli/issues/3304) | `[ERR_HTTP2_INVALID_SESSION]` causes repeated transient retries | 🔴 OPEN | **Reliability crisis**: HTTP/2 session destruction mid-turn kills long reasoning responses; users lose entire generation progress | 6 comments, fresh report; appears regression-adjacent |
| [#3281](https://github.com/github/copilot-cli/issues/3281) | v1.0.46 unusable: "Cannot find native binding" | 🔴 OPEN | **Installation regression**: npm optional dependency bug bricks CLI startup; workaround (`npm i` after removing lockfiles) not obvious | 6 comments; `softwarezhen` provided detailed logs |
| [#3287](https://github.com/github/copilot-cli/issues/3287) | Copilot 1.0.46 CLI has blocker issue | 🟢 CLOSED | Same native binding failure as #3281; **closed rapidly** suggesting fix in flight | 6 comments, 1 👍; `npechett-wtg` confirmed workaround |
| [#3260](https://github.com/github/copilot-cli/issues/3260) | Copy/Paste broken in SSH+tmux to Windows Server 2025 | 🔴 OPEN | **Remote dev regression**: v1.0.47 breaks clipboard in common remote workflow (macOS/Linux → Windows via tmux) | 4 comments; `kzh125` provided matrix of affected scenarios |
| [#3013](https://github.com/github/copilot-cli/issues/3013) | Hooks don't fire for background (task) agents | 🔴 OPEN | **Security concern**: Sub-agents bypass safety hooks—described as "jailbreak" vector by reporter | 2 comments; `logar16` frames as vulnerability |
| [#3301](https://github.com/github/copilot-cli/issues/3301) | Feature request: local web interface (`opencode web` equivalent) | 🔴 OPEN | **Competitive pressure**: Browser-based UI request directly references OpenCode's `opencode web` as benchmark | 1 comment; signals market expectation shift |
| [#3307](https://github.com/github/copilot-cli/issues/3307) | `runtime.node` missing from prebuilds/win32-arm64 in 1.0.48-0 | 🔴 OPEN | **Critical platform breakage**: Windows ARM64 completely non-functional; missing artifact in release pipeline | 0 comments, 1 👍; `TransientError` identified exact missing file |

---

## Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#772](https://github.com/github/copilot-cli/pull/772) | Add installation script | 🟢 CLOSED | `devm33`'s curl\|bash installer; merged after testing. Addresses #771 for streamlined onboarding |
| [#2587](https://github.com/github/copilot-cli/pull/2587) | Add automated issue classification with GitHub Agentic Workflows | 🟢 CLOSED | `andyfeller` introduced `gh-aw` AI-powered labeling; auto-applies `area:` and `triage` labels on issue open/reopen |

*Note: Only 2 PRs updated in the 24h window. Both closed; no active feature PRs in flight.*

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Web/Browser UI parity** | #3301 explicitly references `opencode web`; terminal-only constraint seen as competitive disadvantage | Emerging — 1 issue, but competitive framing suggests broader demand |
| **Session management enhancements** | `/fork` shipped (#2058); #3300 requests favorites/starring in `--resume`; cloud agent session persistence improved | Active — 3+ issues in cycle |
| **MCP server connectivity expansion** | #2630 (sub-agents), #3302 (`/research` mode), #3299 (re-auth account selection), #3083 (`.mcp.json` loading) | **Highest-frequency theme** — MCP integration gaps across contexts |
| **Agent control & safety** | #3013 (hooks for background agents), #3303 (rejecting model-provided options in plan mode) | Growing — safety and autonomy boundaries |
| **Enterprise observability** | #3305 (org-wide usage monitoring, skill analytics) | New — suggests enterprise adoption scaling |

---

## Developer Pain Points

### 1. **Native Addon / Installation Fragility** 🔥
- **#3281, #3287, #3280, #3296, #3307, #3306**: Cascade of "Cannot find native binding" and missing prebuild errors across Linux (glibc 2.33+ requirement on Ubuntu 20.04) and Windows ARM64 (missing `runtime.node`)
- **Root cause**: npm optional dependency handling + incomplete release artifact matrix
- **Impact**: Complete CLI unusability; workaround requires manual `npm i` after lockfile removal

### 2. **MCP Server Context Gaps** 🔥
- **#2630, #3302, #3083, #3052, #3299**: MCP servers fail to load or authenticate in sub-agents, `--prompt` mode, `/research`, or via deprecated config migration paths
- **Pattern**: MCP works in standard interactive TUI, breaks in automation-adjacent contexts

### 3. **Platform-Specific Regressions**
- **Windows**: SSH+tmux clipboard (#3260), PowerShell discovery (#3259), missing ARM64 prebuild (#3307, #3306), `/keep-alive` loader (#3298)
- **Linux**: glibc compatibility (#3296), large diff crashes (#3288)

### 4. **Non-Interactive / Headless Second-Class Citizenship**
- **#2630, #3013**: Sub-agents and `--prompt` mode lack feature parity with interactive sessions—tools, hooks, and MCP connectivity all degraded

### 5. **Configuration Discoverability & Migration**
- **#1433** (external paths), **#1570** (misleading "no instructions found"), **#3083** (`.mcp.json` migration): Repeated friction in config loading precedence and deprecation handling

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-05-14.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-14

## Today's Highlights

The v1.43.0 release is causing significant turbulence: MCP stderr leaks are breaking TUI rendering for multiple users, while model quality complaints about K2.6 are intensifying with reports of "insane degradation" and overload-related unusability. On the development front, the team is actively addressing the MCP regression with a targeted fix PR, and community members are proposing ambitious additions including a Rust port and official git co-authorship integration.

---

## Releases

*No releases in the last 24 hours. The v1.44.0 bump PR (#2262) was opened and closed on 2026-05-13 without merging.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | API Error 400 with invalid_request_error on Claude Sonnet | Persistent cross-model compatibility bug affecting Windows/PowerShell users since January; 16 comments indicate unresolved systemic API validation issue | Frustrated; long-running with no resolution pattern |
| [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | Request to restore K2.5 with original system prompt | User backlash against K2.6's personality erasure and "thinking drowning out creativity"; signals model deployment strategy misalignment with power users | 11 comments of passionate criticism; zero upvotes suggests voting not capturing sentiment |
| [#2077](https://github.com/MoonshotAI/kimi-cli/issues/2077) | **Critical**: K2.6 model overloaded — unusable under normal load | Allegretto (paid) subscribers experiencing constant retries; directly impacts revenue-tier reliability promises | 8 comments, 1 upvote; severity label but limited visibility |
| [#2268](https://github.com/MoonshotAI/kimi-cli/issues/2268) | "Insane degradation since model change" k2.6 vs kimi-for-coding | Concrete productivity regression: tasks that "just worked" on v1.30.0/kimi-for-coding now fail on k2.6; v1.43.0 implicated | 1 upvote, urgent tone; represents silent majority likely |
| [#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178) | Windows: kimi.exe v1.41.0 blank FileVersionInfo breaks VS Code extension | Integration failure with IDE ecosystem; version metadata regression affecting enterprise/policy-compliant deployments | 3 comments; niche but blocking for VS Code workflow users |
| [#2263](https://github.com/MoonshotAI/kimi-cli/issues/2263) | MCP server stderr leaks into interactive terminal | TUI corruption breaking interactive experience; duplicate of #2265/#2251 showing widespread 1.43.0 regression | Fresh report, no votes yet; pattern emerging |
| [#2265](https://github.com/MoonshotAI/kimi-cli/issues/2265) | MCP subprocess stderr leaks to TUI interface (regression) | Chinese-language confirmation of same regression; Fedora 43 specific; stdio MCP servers affected post-update | Zero engagement; international user base impacted |
| [#2251](https://github.com/MoonshotAI/kimi-cli/issues/2251) | MCP stdio server stderr leaks break TUI rendering after 1.43.0 | macOS confirmation of regression triangulates Linux/Windows/macOS scope; "break TUI rendering" is severity escalation | Zero comments; users may be +1'ing via duplicates |
| [#2267](https://github.com/MoonshotAI/kimi-cli/issues/2267) | Free version (Kimi Code CLI) does not work | Onboarding failure for free tier; complete blocker for new user acquisition | Zero engagement; critical funnel issue |
| [#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269) | Remote Control / Multi-Device Session Handoff | Competitive parity request (vs. Cursor, Claude Code); addresses modern multi-machine developer workflows | Zero comments; visionary request, no traction yet |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771) | fix: always stringify tool message content in Chat Completions provider | Resolves OpenAI API 400 errors when tool results contain multiple ContentParts; critical for multi-modal tool outputs | Open since Apr 6 |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | fix(hooks): extract text from ContentPart for UserPromptSubmit hook | Fixes regex matcher failure when user_input is list[ContentPart] instead of str; hooks were silently receiving empty prompts | Open since May 7 |
| [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) | fix(utils): bound broadcast queues and cap web store cache | Prevents OOM from unbounded asyncio.Queue growth and unlimited session caching; production stability improvement | Open since May 11 |
| [#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231) | fix(aiohttp): reuse TCPConnector to prevent connection leaks | Eliminates per-request TCPConnector creation overhead; reduces FD pressure and improves latency under parallel operations | Open since May 11 |
| [#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259) | **fix: redirect stdio MCP stderr to logs** | **Direct response to today's top regression**: routes MCP stderr to `~/.kimi/logs/mcp/<server>.log` with regression test; unblocks 1.43.0 users | Open, May 13 |
| [#2261](https://github.com/MoonshotAI/kimi-cli/pull/2261) | feat(shell): add slash command alias resolution and display | Improves UX by resolving aliases to canonical commands with UI indication; telemetry normalization for analytics accuracy | Open, May 13 |
| [#2260](https://github.com/MoonshotAI/kimi-cli/pull/2260) | feat: add kill_ring_system_clipboard config option | User-configurable clipboard integration (default true); follows CONTRIBUTING.md small-change exemption | Open, May 13 |
| [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) | feat(shell): support Shift+Enter for inserting newlines | Adds de-facto standard shortcut alongside Ctrl-J/Alt-Enter; closes #2254, addresses #2010, #2121, #1585, #1574 | Open, May 13 |
| [#2246](https://github.com/MoonshotAI/kimi-cli/pull/2246) | feat(shell): add --prompt-interactive option | Enables `kimi -P "query"` to pass initial prompt then remain interactive; bridges scripting and REPL workflows | Open since May 12 |
| [#2262](https://github.com/MoonshotAI/kimi-cli/pull/2262) | chore(release): bump kimi-cli and kimi-code to 1.44.0 | Version bump PR including breaking-changes.md reorganization; closed without merge — suggests release process adjustment | **Closed**, May 13 |

---

## Feature Request Trends

1. **Model Choice & Control**: Users aggressively requesting K2.5 preservation (#1925), /goal command parity with Codex (#2252), and system prompt template refresh on compaction (#2266). Theme: *users want deterministic, controllable model behavior, not opaque upgrades*.

2. **Cross-Platform/Cross-Tool Interoperability**: Codex import/export (#2252), VS Code extension compatibility (#2178), official git `Co-authored-by` trailers (#2256), and multi-device session handoff (#2269). Theme: *Kimi CLI must play nicely with existing developer ecosystems*.

3. **Internationalization**: Explicit zh-CN CLI support request (#2270) joins existing Chinese-language issues; indicates growing non-English user base underserved by English-only interface.

4. **Shell UX Polish**: Shift+Enter newlines (#2254/#2255), background task timeout adjustment (#2232), and `--prompt-interactive` (#2246). Theme: *interactive shell ergonomics still maturing compared to competitors*.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **K2.6 Model Quality Regression** | #1925, #2077, #2268, #2265 | **Critical** — Multiple paid users report productivity collapse; "unusable" and "insane degradation" language |
| **MCP stderr TUI Corruption (1.43.0)** | #2263, #2265, #2251 + fix PR #2259 | **Critical** — Regression affecting all platforms; fix in flight but unmerged |
| **Free Tier Onboarding Failure** | #2267 | **High** — Complete blocker for new user conversion; zero engagement suggests under-triaged |
| **Background Task Timeout Inflexibility** | #2232 | Medium — Wasted compute from optimistic estimates; user-visible efficiency loss |
| **Version Metadata/Enterprise Compliance** | #2178 | Medium — Windows enterprise deployments blocked by missing FileVersionInfo |
| **Memory/Connection Resource Leaks** | PRs #2236, #2231 | Medium — Fixes pending; production stability at scale |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli public activity on 2026-05-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-14

## Today's Highlights

OpenCode shipped **v1.14.49** with a new v2 model/provider listing API and DigitalOcean OAuth integration, while the community continues pushing for multi-agent workflows and sandboxed execution. A surge of Effect-based refactoring PRs from contributor **kitlangton** signals major architectural modernization, and fresh regressions around keyboard input handling and context window compaction are drawing urgent attention.

---

## Releases

### [v1.14.49](https://github.com/anomalyco/opencode/releases/tag/v1.14.49)
- **v2 Model & Provider Listing API** — New structured API for discovering available models and providers
- **DigitalOcean OAuth + Inference Router** — Cloud deployment pathway via @Spherrrical's contribution
- **Auto-generated `opencode.jsonc`** — Global config file created automatically when no configuration exists
- **`customize-opencode` enabled by default** — Full JSON schema linked for IDE-assisted configuration
- **Autocomplete improvements** — Truncated in release notes, suggesting ongoing TUX refinements

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#12661](https://github.com/anomalyco/opencode/issues/12661) | **Agent Teams Equivalent or Better** | Most-upvoted feature request (110 👍); directly competitive with Claude Code's multi-agent orchestration | 34 comments, active design discussion; community sees this as existential parity feature |
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Sandbox the agent** | Security-critical; requests seatbelt-like macOS sandboxing or directory restriction for terminal commands | 33 comments, 46 👍; users comparing unfavorably to gemini-cli/codex-cli safety models |
| [#6209](https://github.com/anomalyco/opencode/issues/6209) | **Cannot scroll on iTerm** | Basic TUX regression breaking terminal workflow on popular macOS terminal emulator | 22 comments; affects daily usability, no clear workaround |
| [#25879](https://github.com/anomalyco/opencode/issues/25879) | **`opencode-cli` TUI missing from Debian package** | Silent removal of CLI binary between patch versions breaks automation and scripts | 20 comments; packaging/communication failure |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | **Official VS Code extension** | Platform expansion request; would unlock large IDE-native user segment | 16 comments, 80 👍; persistent demand since January |
| [#26697](https://github.com/anomalyco/opencode/issues/26697) | **SSE /event stream closes immediately** | Server-sent events broken for real-time integrations; `server.connected` terminates connection | 12 comments, 13 👍; blocking MCP/server-mode consumers |
| [#27096](https://github.com/anomalyco/opencode/issues/27096) | **Keybinds messed up on 1.14.48** | Dvorak keyboard users hit by scancode vs. keycode regression; ctrl+k pastes instead of cutting | 8 comments; accessibility/input method regression |
| [#25832](https://github.com/anomalyco/opencode/issues/25832) | **Image reading broken since April 29** | Vision capability regression; previously working PNG/JPG analysis now fails with "Bad request" | 8 comments; multimodal workflow breakage |
| [#26230](https://github.com/anomalyco/opencode/issues/26230) | **Double compaction for Copilot Opus 4.7** | Token accounting bug causing unnecessary context loss and cost inflation | 10 comments; affects premium model users |
| [#27315](https://github.com/anomalyco/opencode/issues/27315) | **"Input exceeds context window" on empty sessions** | Critical regression: fresh sessions auto-compact with zero context loaded | 3 comments, reported today; likely 1.14.48/49 regression |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#27403](https://github.com/anomalyco/opencode/pull/27403) | **Preserve tool error defects** | Distinguishes permission denials from generic tool failures using `Schema.Defect`; improves error observability | Open |
| [#27402](https://github.com/anomalyco/opencode/pull/27402) | **Expose user message to `experimental.chat.system.transform`** | Plugin hook enhancement enabling context-aware system prompt transformations | Open |
| [#27347](https://github.com/anomalyco/opencode/pull/27347) | **Move models.dev into core** | Architectural consolidation: centralizes model discovery service, flattens test structure | Open |
| [#26949](https://github.com/anomalyco/opencode/pull/26949) | **Virtualize session timeline rows** | Performance optimization for long sessions using `virtua`; upgrades from turn-level to row-level virtualization | Open [beta] |
| [#27187](https://github.com/anomalyco/opencode/pull/27187) | **Italian translation** | i18n expansion covering app, desktop, and UI packages | Open |
| [#27399](https://github.com/anomalyco/opencode/pull/27399) | **Cancel queued prompts in TUI** | UX improvement: message actions dialog gets cancel capability; closes 4 related issues | Open |
| [#27114](https://github.com/anomalyco/opencode/pull/27114) | **Preview native LLM runtime stack** | Major architectural preview: opt-in native runtime alongside AI SDK, with OpenAI Responses native support | Open [beta] |
| [#27152](https://github.com/anomalyco/opencode/pull/27152) | **Migrate filesystem callers to AppFileSystem.Service** | Effect ecosystem migration: Promise-based `Filesystem.*` → Effect methods | Open |
| [#27394](https://github.com/anomalyco/opencode/pull/27394) | **NVIDIA endpoints origin header** | Provider partnership: `X-BILLING-INVOKE-ORIGIN: OpenCode` for NVIDIA-hosted inference tracking | Open |
| [#21907](https://github.com/anomalyco/opencode/pull/21907) | **Free model resolution** | `--model free` with `--variant any` resolves to random free provider model; cost-optimization feature | Open |

---

## Feature Request Trends

1. **Multi-Agent Orchestration** — [#12661](https://github.com/anomalyco/opencode/issues/12661) dominates; community wants Claude Code-style agent teams with specialized roles and handoffs
2. **IDE Integration** — [#11176](https://github.com/anomalyco/opencode/issues/11176) VS Code extension remains top platform request; native extension vs. LSP/server mode tradeoffs discussed
3. **Security Sandboxing** — [#2242](https://github.com/anomalyco/opencode/issues/2242) reflects industry-wide shift toward constrained execution; seatbelt, gVisor, and directory-jail approaches debated
4. **Multi-Project Workspaces** — [#16662](https://github.com/anomalyco/opencode/issues/16662) asks for `/add-dir` equivalent; monorepo and full-stack development workflows need cross-directory context
5. **Cost/Free Tier Optimization** — [#21907](https://github.com/anomalyco/opencode/pull/21907) and provider selection tools indicate price-sensitive user segment

---

## Developer Pain Points

| Category | Symptoms | Root Indicators |
|----------|----------|---------------|
| **TUX Regressions** | Broken scrolling (#6209), keybinds (#27096, #27081), image reading (#25832) | Rapid 1.14.x iteration pace; insufficient input-method/terminal matrix testing |
| **Context Window Management** | Double compaction (#26230), false "exceeds window" (#27315), old messages disappearing (#7380) | Token accounting bugs; compaction heuristics need calibration for new models |
| **Packaging & Distribution** | Missing Debian CLI binary (#25879), broken RPM updater (#23538), NixOS segfaults (#26846) | Platform-specific QA gaps; silent breaking changes in patch releases |
| **SSE/Streaming Reliability** | Connection drops (#26697), boundary parsing failures (#27365), JSON parse errors on tool calls | SSE parser fragility; backend diversity exposing edge cases in `eventsource-parser` |
| **Configuration Propagation** | Model settings not reflected in TUI (#15225), granular permissions ignored (#20307), MCP toggle broken (#26153) | Config layer complexity; headless vs. TUI vs. desktop config divergence |
| **Performance Volatility** | Severe slowdowns (#24771, #27327) with no clear trigger | Likely provider-rate-limit interaction, compaction thrashing, or memory pressure |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-14

## Today's Highlights
The Pi team is in active refactoring mode, with numerous issues tagged `closed-because-refactor` or `closed-because-bigrefactor` as they consolidate toward a major architectural release. Meanwhile, dependency hardening took center stage after a compromised Mistral package was identified, and local LLM support saw meaningful progress with keyless provider registration and auto-compaction fixes for zero-usage APIs.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **Official local LLM provider extension** | Most-discussed open issue (12 comments, 23 👍). Dynamic model list fetching from `{baseUrl}/models` would unify Ollama, llama.cpp, LM Studio, and other local backends under one extension—critical for self-hosted workflows. | Strong demand; julien-c's proposal is effectively the community's preferred design for local provider abstraction. |
| [#4251](https://github.com/earendil-works/pi/issues/4251) | **Kimi k2.6 `reasoning_content` missing in tool calls** | Blocks Moonshot's Kimi k2.6 on OpenCode Go when reasoning is enabled. The provider expects `reasoning_content` in assistant tool call messages but Pi omits it, causing hard 400 errors. | Reported as `closed-because-bigrefactor`—users waiting on refactor to land a systemic fix for reasoning-content handling across providers. |
| [#4323](https://github.com/earendil-works/pi/issues/4323) | **WezTerm `enable_kitty_keyboard` breaks Esc key** | Terminal compatibility bug: kitty keyboard protocol emits `[27;129:3u` instead of recognized escape. Affects a growing WezTerm user segment. | Felixoid provided detailed repro steps and later [submitted a fix](https://github.com/earendil-works/pi/pull/4482). Active collaboration. |
| [#3299](https://github.com/earendil-works/pi/issues/3299) | **Add `max` thinking level for Opus 4.7 sync** | Closed. Anthropic's five-rung API now requires `max` above `xhigh`; Pi's ladder was one rung short. Keeps Pi parity with upstream model capabilities. | Zero 👍 suggests this was treated as a routine capability catch-up rather than controversial change. |
| [#4290](https://github.com/earendil-works/pi/issues/4290) | **Length-aborted messages treated as regular stops** | UX hazard: users wait indefinitely for "Thinking..." that silently died from max-length truncation. No visual distinction between successful stop and hard limit hit. | Frustration-driven report; DanielThomas notes being "caught out a few times." Needs clearer terminal signaling. |
| [#4207](https://github.com/earendil-works/pi/issues/4207) | **Extension API: typed cross-extension service calls** | Proposes moving beyond the untyped event bus to a lightweight service registry. Would reduce ad-hoc RPC boilerplate and enable safer extension composition. | Gotgenes' strawman API well-received (4 comments); tagged `last read`—may resurface post-refactor. |
| [#4319](https://github.com/earendil-works/pi/issues/4319) | **Explicit fences for AGENTS.md in system prompt** | Prompt engineering quality: current bare concatenation of project context files risks model confusion. Fenced blocks with metadata would improve reliability. | frostime's specific diff proposal shows community investment in prompt robustness. |
| [#4462](https://github.com/earendil-works/pi/issues/4462) | **`sanitizeSurrogates` breaks thinking signatures on replay** | Data-loss bug: surrogate sanitization corrupts Claude Opus 4.7's `thinking`/`redacted_thinking` blocks, causing session-exploding 400 errors after ~20 turns at high thinking. | soomin-kevin-sung hit this in production; severity high for long-horizon agent tasks. Open and unassigned. |
| [#4338](https://github.com/earendil-works/pi/issues/4338) | **Agent "working" loop with no progress** | Classic liveness failure: agent spinner loops indefinitely without file I/O or output. | nickybmon's report closed as refactor-related; underlying issue likely in task scheduling/orchestration layer being rewritten. |
| [#4477](https://github.com/earendil-works/pi/issues/4477) | **Fake context window usage size** | Reported 44.2% display vs. actual 155K tokens sent; "Buffer: 262.1k (202%)" suggests double-counting or unit confusion in context accounting. | corrm's screenshot-backed report indicates trust erosion in Pi's context telemetry—critical for users managing window limits. |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4498](https://github.com/earendil-works/pi/pull/4498) | **Keyless providers** | Adds `keyless` boolean to provider config, mutually exclusive with `apiKey`/`oauth`. Consolidates header resolution via `resolveAllHeaders`. Enables cleaner local provider implementations without dummy key workarounds. | ✅ Merged |
| [#4496](https://github.com/earendil-works/pi/pull/4496) | **Auto-compaction for local models with no usage data** | Fixes three bugs: local models (Ollama, LM Studio) return zero usage, preventing compaction; `agent_end` threshold logic; and `willRetry` hardcoded false. Local model users finally get automatic context management. | ✅ Merged |
| [#4486](https://github.com/earendil-works/pi/pull/4486) | **OpenAI Codex SSE: prefer `retry-after`** | Honors `retry-after-ms` and `retry-after` headers for Codex SSE retries instead of blind fallback. Reduces unnecessary backoff and improves latency under rate limits. | 🔄 Open |
| [#4483](https://github.com/earendil-works/pi/pull/4483) | **Harden `.npmrc`, pin `@mistralai/mistralai==2.2.1`** | Security response to [#4432](https://github.com/earendil-works/pi/issues/4432): disables pre-install scripts, pins compromised package lineage. Proactive supply-chain hardening. | ✅ Merged |
| [#4473](https://github.com/earendil-works/pi/pull/4473) | **Fix `inception/mercury-2` `thinkingLevelMap.off`** | Corrects `reasoning: {effort: "none"}` to omitted param for models where `off` means null. Prevents provider-side rejection of invalid reasoning configurations. | ✅ Merged |
| [#4482](https://github.com/earendil-works/pi/pull/4482) | **Edge-case kitty protocol in WezTerm** | Fixes [#4323](https://github.com/earendil-works/pi/issues/4323): detects ESC-ESC sequences that start new escape sequences (`[`, `]`, `O`, `P`, `_`), emitting single ESC and re-parsing. Terminal input reliability. | ✅ Merged |
| [#4463](https://github.com/earendil-works/pi/pull/4463) | **Robust markdown.ts for large files** | Replaces spread-operator-on-array pattern causing `RangeError: Maximum call stack size exceeded` beyond 65,535 elements. Uses iterator-based approach for large benchmark prompts. | ✅ Merged |
| [#4470](https://github.com/earendil-works/pi/pull/4470) | **Replace proxy agent dependencies** | Vendors HTTP(S) proxy resolution; drops `@tootallnate/quickjs-emscripten`, `ast-types`, `basic-ftp`, and 15+ transitive deps. SOCKS and PAC no longer supported. Major dependency diet. | ✅ Merged |
| [#4475](https://github.com/earendil-works/pi/pull/4475) | **Retry watchdog hook for terminal provider errors** | Adds heartbeat to recover idle retryable errors missed by normal retry path. Exposes `retry_watchdog` extension hook for observability and custom delay logic. (Duplicate merges: #4476, #4472) | ✅ Merged |
| [#4458](https://github.com/earendil-works/pi/pull/4458) | **Windows ARM64 binary output** | Requires Bun ≥1.3.10 for native Windows ARM64 support. Expands Pi's platform matrix to Apple Silicon parity on Windows. | 🔄 Open |

---

## Feature Request Trends

1. **Local-first / self-hosted LLM ergonomics** — Dynamic model discovery ([#3357](https://github.com/earendil-works/pi/issues/3357)), keyless auth ([#4498](https://github.com/earendil-works/pi/pull/4498)), and context compaction for zero-usage APIs ([#4496](https://github.com/earendil-works/pi/pull/4496)) show sustained investment in decoupling from cloud-only workflows.

2. **Extension system maturity** — Typed service registries ([#4207](https://github.com/earendil-works/pi/issues/4207)), model filtering APIs ([#4457](https://github.com/earendil-works/pi/issues/4457)), subagent detection ([#4469](https://github.com/earendil-works/pi/issues/4469)), and OpenAPI→tools patterns ([#4500](https://github.com/earendil-works/pi/issues/4500)) indicate the community is pushing Pi beyond "event bus scripting" toward a real plugin platform.

3. **Thinking/reasoning level parity** — `max` level addition ([#3299](https://github.com/earendil-works/pi/issues/3299)) and `thinkingLevelMap` fixes ([#4473](https://github.com/earendil-works/pi/pull/4473)) reflect pressure to stay synchronized with Anthropic's evolving API surface.

---

## Developer Pain Points

| Pain Point | Frequency / Evidence | Severity |
|-----------|---------------------|----------|
| **Refactor-induced issue closure without resolution** | Tags `closed-because-refactor`, `closed-because-bigrefactor`, `closed-because-weekend` appear on >15 issues. Users report bugs (Kimi reasoning, agent loops, compaction, image rendering) and are told to wait for rewrite. | 🔴 High — erodes trust in issue tracker as feedback channel |
| **Context window telemetry accuracy** | [#4477](https://github.com/earendil-works/pi/issues/4477) (fake usage %), [#4497](https://github.com/earendil-works/pi/issues/4497) (auto-compaction never fires). Users cannot trust Pi's own context accounting, leading to manual workarounds or silent failures. | 🔴 High — core functionality |
| **Terminal emulator compatibility matrix** | WezTerm kitty protocol ([#4323](https://github.com/earendil-works/pi/issues/4323)), focus events ([#3896](https://github.com/earendil-works/pi/issues/3896)), image rendering offsets ([#4415](https://github.com/earendil-works/pi/issues/4415)). TUI sophistication outpaces terminal standardization. | 🟡 Medium — affects specific configs |
| **pnpm/Node version fragility** | [#4478](https://github.com/earendil-works/pi/issues/4478) (brew doesn't pin Node), [#4501](https://github.com/earendil-works/pi/issues/4501) (pnpm 11 repeated global installs). Package manager drift breaks sandboxed environments. | 🟡 Medium — install/upgrade friction |
| **Offline startup requirement** | [#4456](https://github.com/earendil-works/pi/issues/4456): Pi refuses to start without internet even for local models. Surprising for a tool with local-first aspirations. | 🟡 Medium — counter to positioning |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-14

## Today's Highlights

Qwen Code shipped **v0.15.11** with critical performance optimizations for session metadata handling, while the daemon mode architecture advanced significantly with wenshao's Stage 2 refactor moving to a 1-daemon-1-workspace model. The community is actively pushing telemetry hardening and CLI ergonomics, with 50 PRs in flight and strong momentum around headless/automation use cases.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.11](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11)** | Bounds session-list metadata reads to head/tail 64KB with pooled buffers and lazy message counting; stabilizes main E2E tests. |
| [v0.15.11-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11-preview.2) | Same core changes as stable. |
| [v0.15.10-nightly.20260513](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.10-nightly.20260513.14512080e) | Pre-release channel with identical perf fixes. |

The v0.15.11 release addresses a known scalability bottleneck: previously, large session histories caused excessive I/O during startup and session enumeration. The 64KB bounding + buffer pooling should materially improve cold-start latency for power users with hundreds of sessions.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode (`qwen serve`) proposal & open decisions** | Foundational architecture for production deployments, remote IDE integration, and multi-user scenarios. wenshao published a 14-chapter design series; Stage 1 merged, Stage 2 in PR. | 4 comments, 👍 1; treated as **the** roadmap anchor by maintainers |
| [#3730](https://github.com/QwenLM/qwen-code/issues/3730) | Auto task-stop regression after update | Breaks long-running autonomous workflows (reported: >1 week tasks now interrupted). Regression severity makes this P1. | 7 comments; user provided detailed repro, awaiting maintainer response |
| [#4035](https://github.com/QwenLM/qwen-code/issues/4035) | DashScope-intl endpoint fetch failure | Blocks international users on Node.js 26; `undici` dispatcher incompatibility with `dashscope-intl.aliyuncs.com`. Root-cause identified, `welcome-pr` label applied. | 4 comments, 👍 2; active debugging with env details |
| [#4076](https://github.com/QwenLM/qwen-code/issues/4076) | Tool calls returning empty content | Affects core functionality (read_file, search); user on SiliconFlow + GLM-5.1 proxy. Likely provider-specific serialization issue. | 3 comments, 👍 1; needs broader repro matrix |
| [#4098](https://github.com/QwenLM/qwen-code/issues/4098) | `/compress` non-functional | Context management broken for long conversations; advertised feature fails silently. Directly impacts token cost and session longevity. | 2 comments; user provided detailed command log |
| [#4111](https://github.com/QwenLM/qwen-code/issues/4111) | SessionStart hook outputs not injected | **Internal Alibaba team report** — hooks API is documented but non-functional for `additionalContext`/`systemMessage`. Specific line cited in source. | 2 comments; high-priority given internal + `roadmap/hooks-events` tag |
| [#4093](https://github.com/QwenLM/qwen-code/issues/4093) | Command substitution denial inconsistent | Security boundary failure: `$()`, backticks, `<()` sometimes pass through in compound commands. Trust model degradation. | 1 comment; detailed security analysis with examples |
| [#4103](https://github.com/QwenLM/qwen-code/issues/4103) | Headless mode lacks runaway protection | CI/automation gap: `--yolo` + non-interactive has no execution budget, turn limits only partially implemented. Risk of infinite loops burning tokens. | 0 comments, but filed by active contributor BZ-D; aligns with daemon mode push |
| [#4108](https://github.com/QwenLM/qwen-code/issues/4108) | Remove OpenRouter OAuth, keep API key | Simplifies auth maintenance; OAuth flows are brittle in headless/CI contexts. Reflects broader trend toward API-key-only providers. | 0 comments; filed by pomelo-nwu (auth UX contributor) |
| [#4033](https://github.com/QwenLM/qwen-code/issues/4033) | High CPU during external process wait | Poll-based waiting burns cycles during `npm install`, compilation. Affects laptop battery life and cloud compute costs. | 2 comments; `welcome-pr`, `category/performance` |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#4113](https://github.com/QwenLM/qwen-code/pull/4113) | **refactor(serve): 1 daemon = 1 workspace** | Reverses Stage 1's M-workspaces-per-daemon routing; simplifies ownership, eliminates cwd-keyed routing complexity. Critical for daemon mode reliability. | Open, wenshao |
| [#4102](https://github.com/QwenLM/qwen-code/pull/4102) | **feat(core): PR-2.5 post-promote stream redirect** | Closes deferred limitations from #3831: background task output remains live after promotion, and registry settles naturally rather than forcing exit. | Open, wenshao |
| [#4125](https://github.com/QwenLM/qwen-code/pull/4125) | fix(ui): trim background task results, newest first | Caps retained terminal entries at 32; fixes UI clutter from long-running background shells. Directly addresses #4094. | Open, wenshao |
| [#4123](https://github.com/QwenLM/qwen-code/pull/4123) | feat(cli): `/goal` command with judge-driven continuation | Session-scoped objective pinning; LLM judge auto-continues turns until condition met. Major UX upgrade for complex multi-step tasks. | Open, qqqys |
| [#4127](https://github.com/QwenLM/qwen-code/pull/4127) | fix(core): memory-based chat compression | Replaces token-threshold compaction with heap-size monitoring; prevents Node OOM on 80+ minute sessions with large file reads. | Open, Dinsmoor |
| [#4126](https://github.com/QwenLM/qwen-code/pull/4126) | feat(telemetry): unify span creation for hierarchical traces | Fixes flat trace trees; makes LLM/tool spans children of interaction spans. Enables proper distributed tracing in production. | Open, doudouOUC |
| [#4064](https://github.com/QwenLM/qwen-code/pull/4064) | feat(rewind): file restoration support | `/rewind` previously only truncated history; now rolls back actual file changes via copy-based backup. Parity with Claude Code's `fileHistory`. | Open, doudouOUC |
| [#4067](https://github.com/QwenLM/qwen-code/pull/4067) | Use bundled Qwen Code for PR review automation | Dogfoods `qwen-code-action@main` with `--yolo --channel=CI --output-format json`. Eating their own cooking on automation. | Open, yiliang114 |
| [#3994](https://github.com/QwenLM/qwen-code/pull/3994) | feat(perf): progressive MCP availability | MCP discovery no longer blocks first input; measured TTI improvement. **Merged** — significant UX win for MCP users. | Closed, chiga0 |
| [#3981](https://github.com/QwenLM/qwen-code/pull/3981) | fix(search): empty-query exit sync + Windows Backspace | Fixes flaky Windows CI test; synchronous exit-to-list mode, normalizes key handling. | Open, B-A-M-N |

---

## Feature Request Trends

1. **Daemon / Server Mode** — The dominant architectural direction. #3803 and its implementation PRs (#4113, #4102) represent the largest coordinated effort. Use cases: remote IDE backends, CI integration, multi-workspace isolation.

2. **Telemetry & Observability** — doudouOUC is driving a concentrated push: hierarchical spans (#4126, #4097), OpenTelemetry hardening (#3731), trace correlation (#4058). Production-readiness signal.

3. **Headless / Non-Interactive Hardening** — #4103 (runaway protection), #4108 (OAuth removal), #4085 (`--quiet-restore`), #4067 (CI automation). Clear shift from "chat tool" to "scriptable agent."

4. **Session Management Ergonomics** — `/goal` (#4123), `/compress` fixes (#4098), batch deletion (#3706), `/status paths` (#4124). Users managing 50+ message sessions need better control surface.

5. **Security Boundaries** — Command substitution (#4093), sandboxing in headless mode. Growing concern as automation expands attack surface.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Long-session stability** | #3730 (auto-stop), #4127 (OOM), #4098 (`/compress` broken), #4033 (CPU spin) | 🔴 Critical — breaks core value prop of autonomous coding |
| **Provider/endpoint fragility** | #4035 (DashScope-intl), #4076 (SiliconFlow empty tools), #2938 (generic "other side closed") | 🟡 High — ecosystem heterogeneity exceeds test matrix |
| **Hook/plugin API gaps** | #4111 (SessionStart hook non-functional), #3803 (daemon extensibility) | 🟡 High — internal teams blocked, extensibility promises unfulfilled |
| **Windows CI/tooling quality** | #3981 (Backspace/CI flake), implicit in several closed issues | 🟢 Medium — parity gaps slow contributor onboarding |
| **Context window configuration** | #4089 (262K setting ignored, shows 1M) | 🟡 High — silently wrong behavior wastes tokens or truncates |

**Bottom line:** Qwen Code is transitioning from "smart CLI" to "production agent platform." The v0.15.11 perf fixes and daemon architecture are necessary foundations, but long-session reliability and provider compatibility remain the gating factors for serious adoption.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-14

## Today's Highlights

The DeepSeek TUI project shipped three patch releases (v0.8.33–v0.8.35) in 24 hours amid intense community activity, with 49 issues and 50 PRs updated. Terminal rendering stability—particularly screen flickering on Ubuntu and Ghostty—dominates bug reports, while localization and session management remain the top feature priorities.

---

## Releases

| Version | Notes |
|---------|-------|
| **v0.8.35** | Latest; no detailed changelog provided in release notes |
| **v0.8.34** | Patch release; installation via npm and Docker/GHCR unchanged |
| **v0.8.33** | Patch release; standard distribution methods maintained |

All three releases use the same npm wrapper and Docker distribution pipeline. No breaking changes or feature announcements were included in release descriptions.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683) | **Forced reasoning language** — Users want Chinese thinking chains instead of default English | Critical for non-English markets; competitors already offer this | 14 comments, active discussion on prompt engineering workarounds |
| [#1411](https://github.com/Hmbown/DeepSeek-TUI/issues/1411) | **Text wrapping failure** — Long content displays as single truncated line | Breaks core UX for document reading workflows | 5 comments, screenshot provided |
| [#1286](https://github.com/Hmbown/DeepSeek-TUI/issues/1286) | **Security alert: fake repository distributing malware** | Impersonation attack via copied README with virus-laden ZIP | 4 comments, 8 upvotes; maintainer awareness raised |
| [#1488](https://github.com/Hmbown/DeepSeek-TUI/issues/1488) | **MCP session ID not propagated** — Subsequent MCP requests rejected | Breaks Model Context Protocol integration | Closed after 4 comments |
| [#1515](https://github.com/Hmbown/DeepSeek-TUI/issues/1515) | **Severe screen flickering on Ubuntu CLI v0.8.32** | Renders tool unusable on major Linux distro | Closed; follow-up [#1557](https://github.com/Hmbown/DeepSeek-TUI/issues/1557) opened—still unresolved |
| [#1112](https://github.com/Hmbown/DeepSeek-TUI/issues/1112) | **1.2TB snapshot accumulation** — Disk exhaustion from unbounded `~/.deepseek/snapshots` | Production-impacting resource leak | Closed after fix; 3 comments documenting severity |
| [#1556](https://github.com/Hmbown/DeepSeek-TUI/issues/1556) | **Ghostty terminal flickering on macOS** | Emerging terminal emulator compatibility gap | 3 comments; rendering engine investigation needed |
| [#1512](https://github.com/Hmbown/DeepSeek-TUI/issues/1512) | **Mouse scroll only shows user messages, hides model output** | Breaks conversation review workflow | 3 comments; UI navigation critical failure |
| [#1557](https://github.com/Hmbown/DeepSeek-TUI/issues/1557) | **Ubuntu flickering persists in v0.8.32** — `/set low_motion` ineffective | Regression or incomplete fix for [#1515](https://github.com/Hmbown/DeepSeek-TUI/issues/1515) | 3 comments; user provided detailed environment info |
| [#1583](https://github.com/Hmbown/DeepSeek-TUI/issues/1583) | **Terminal left in broken raw mode after Ctrl+C** | Forces terminal session kill; violates POSIX expectations | 1 comment; cleanup handler bug |

---

## Key PR Progress

| # | PR | Feature / Fix | Impact |
|---|-----|-------------|--------|
| [#1536](https://github.com/Hmbown/DeepSeek-TUI/pull/1536) | **Task termination: `/jobs cancel-all` + Ctrl+K** | Kill running shell tasks from TUI | Addresses long-standing UX gap in process management |
| [#1521](https://github.com/Hmbown/DeepSeek-TUI/pull/1521) | **File-edit guardrails + shell output truncation** | Exact-match enforcement, bounded head/tail truncation | Reduces model hallucination in edits; safer large-output handling |
| [#1527](https://github.com/Hmbown/DeepSeek-TUI/pull/1527) | **Security docs + custom gateway setup** | Private advisories pipeline, OpenAI-compatible provider docs | Security hygiene; enterprise self-hosting enablement |
| [#1534](https://github.com/Hmbown/DeepSeek-TUI/pull/1534) | **Theme system: Catppuccin/Tokyo Night/Dracula/Gruvbox + `/theme` picker** | Live preview, persistent selection | Major UX customization; wires dormant setting from #657 |
| [#1451](https://github.com/Hmbown/DeepSeek-TUI/pull/1451) | **Range-based `read_file` with bounded output** | `start_line`/`max_lines` params; 200-line default cap | Cuts token waste; enables large-file chunking |
| [#1535](https://github.com/Hmbown/DeepSeek-TUI/pull/1535) | **Chunk parallel-safe tool execution** | Parallel-safe batches separated by serial barriers | Performance optimization; correctness for dependent tools |
| [#1500](https://github.com/Hmbown/DeepSeek-TUI/pull/1500) | **Block review agents from spawning sub-agents** | Disallowed-tools filter in `SubAgentToolRegistry` | Fixes delegation loop bug; closes [#1489](https://github.com/Hmbown/DeepSeek-TUI/issues/1489) |
| [#1126](https://github.com/Hmbown/DeepSeek-TUI/pull/1126) | **Snapshot disk capping** | Prune old snapshots after each turn | Closes [#1112](https://github.com/Hmbown/DeepSeek-TUI/issues/1112); prevents disk exhaustion |
| [#1220](https://github.com/Hmbown/DeepSeek-TUI/pull/1220) | **Session artifact metadata** | Durable storage for spilled tool outputs | Enables multi-turn tool output retrieval; closes [#1216](https://github.com/Hmbown/DeepSeek-TUI/issues/1216) |
| [#1423](https://github.com/Hmbown/DeepSeek-TUI/pull/1423) | **Guard first calls to deferred tools** | Schema validation before execution | Fixes `edit_file`/`checklist_update` first-use failures |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Localization & i18n completeness** | [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683), [#1562](https://github.com/Hmbown/DeepSeek-TUI/issues/1562), [PR #1452](https://github.com/Hmbown/DeepSeek-TUI/pull/1452) (es-419), [PR #746](https://github.com/Hmbown/DeepSeek-TUI/pull/746) (ja), [PR #1306](https://github.com/Hmbown/DeepSeek-TUI/pull/1306) (pinyin aliases) | High — language selection at startup, Chinese reasoning chains, command aliases all converging |
| **Session lifecycle management** | [#1565](https://github.com/Hmbown/DeepSeek-TUI/issues/1565) (new session shortcut), [#1530](https://github.com/Hmbown/DeepSeek-TUI/issues/1530) (`exec --resume`), [PR #1220](https://github.com/Hmbown/DeepSeek-TUI/pull/1220) | Medium-high — CLI automation and TUI ergonomics both need work |
| **Theme/visual customization** | [#1579](https://github.com/Hmbown/DeepSeek-TUI/issues/1579) ("colors are ugly"), [PR #1534](https://github.com/Hmbown/DeepSeek-TUI/pull/1534) | Medium — shipped but user dissatisfaction suggests broader palette/accessibility needs |
| **Media & document input** | [#1552](https://github.com/Hmbown/DeepSeek-TUI/issues/1552) (images, docx) | Medium — closed without resolution; likely deferred |
| **ACP ecosystem integration** | [#1447](https://github.com/Hmbown/DeepSeek-TUI/issues/1447), [PR #1543](https://github.com/Hmbown/DeepSeek-TUI/pull/1543) | Early — registry adoption, community adapter pattern |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Terminal rendering/flickering** | 5+ issues (Ubuntu, Ghostty, Windows) | Critical — tool unusable | [#1515](https://github.com/Hmbown/DeepSeek-TUI/issues/1515), [#1556](https://github.com/Hmbown/DeepSeek-TUI/issues/1556), [#1557](https://github.com/Hmbown/DeepSeek-TUI/issues/1557), [#1106](https://github.com/Hmbown/DeepSeek-TUI/issues/1106) |
| **English-only reasoning chains** | Recurring in i18n issues | High — cognitive load for CJK users | [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683), [#1562](https://github.com/Hmbown/DeepSeek-TUI/issues/1562) |
| **Token/cost efficiency vs. competitors** | Reported, limited traction | Medium — business viability concern | [#1440](https://github.com/Hmbown/DeepSeek-TUI/issues/1440) |
| **npm distribution reliability** | 2 issues, 1 PR fix | Medium — onboarding friction | [#1279](https://github.com/Hmbown/DeepSeek-TUI/issues/1279), [#1532](https://github.com/Hmbown/DeepSeek-TUI/issues/1532), [PR #1339](https://github.com/Hmbown/DeepSeek-TUI/pull/1339) |
| **Signal/terminal state cleanup** | Emerging | Medium — violates CLI conventions | [#1583](https://github.com/Hmbown/DeepSeek-TUI/issues/1583) |
| **Proxy support for corporate environments** | New | Medium — enterprise adoption blocker | [#1595](https://github.com/Hmbown/DeepSeek-TUI/issues/1595) |

---

*Digest compiled from 49 issues and 50 PRs updated 2026-05-13 to 2026-05-14.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*