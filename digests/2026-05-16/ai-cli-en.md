# AI CLI Tools Community Digest 2026-05-16

> Generated: 2026-05-16 00:20 UTC | Tools covered: 9

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
## 2026-05-16 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape has matured into a multi-polar competitive arena with seven actively maintained tools, each backed by distinct AI model providers or independent teams. The sector is characterized by convergent feature evolution—session management, MCP extensibility, remote/headless operation, and cost controls are now table stakes—while differentiation persists in architectural philosophy (Rust vs. Node.js vs. Go), IDE integration depth, and enterprise readiness. Memory pressure and V8 heap exhaustion have emerged as universal scaling bottlenecks for Node.js-based tools, driving defensive engineering across the ecosystem. Community contribution velocity remains asymmetric, with OpenAI Codex and Claude Code showing high internal iteration but limited external PR acceptance, versus Kimi CLI and OpenCode demonstrating more open contributor pipelines.

---

## 2. Activity Comparison

| Tool | Issues (24h/Active) | PRs (24h/Active) | Releases (24h) | Release Cadence |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10+ hot issues tracked | 3 open (low external velocity) | v2.1.143 | ~weekly, versioned |
| **OpenAI Codex** | 10 hot issues | 12+ active PRs | 3 alpha builds (α.19–α.22) | Daily alpha iteration |
| **Gemini CLI** | 10 hot issues | 10 active PRs | v0.44.0-nightly | Nightly channel |
| **GitHub Copilot CLI** | 10 hot issues | **0 updated** | v1.0.49-0 / v1.0.49-1 | Stabilization pause |
| **Kimi CLI** | 15 new issues | 10 new PRs | None | Irregular; security patch pending |
| **OpenCode** | 50 active | 50 active | v1.15.0 / v1.14.51 | Rapid, minor versions |
| **Pi** | 10 hot issues | 10 PRs (6 merged) | None | Refactor-driven ("bigrefactor") |
| **Qwen Code** | 10+ hot issues | 10 active PRs | 3 preview builds (.0–.2) | Daily preview iteration |
| **DeepSeek TUI** | 10 hot issues | 10+ PRs merged/opened | v0.8.38 | Steady patch releases |

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding | Specific Needs |
|:---|:---|:---|
| **Session lifecycle control** | Claude Code, Codex, Kimi, OpenCode, DeepSeek TUI, Qwen Code | `/new` command (Claude Code PR #59275, Kimi #2252), cross-session history isolation (Claude Code #15631), checkpoint/rewind with *code revert* (Codex #11626), ACP playback (Kimi #2306), file restoration (Qwen #4064) |
| **Remote/headless operation** | Claude Code, Codex, Gemini, Qwen Code | Remote phone-to-CLI control (Codex shipped #9224; Claude Code #34255 broken on Apple), daemon/server mode (Qwen #3803, #4156), MCP channel plugins with full TUI parity (Claude Code #59245) |
| **Memory pressure & OOM prevention** | Qwen Code, OpenCode, Claude Code | V8 heap-pressure auto-compaction (Qwen #4186), `/doctor memory` diagnostics (Qwen #4179), memory leak megathread (OpenCode #20695), context cost projections (Claude Code v2.1.143) |
| **MCP ecosystem maturation** | Copilot CLI, Claude Code, Gemini, DeepSeek TUI | Server discovery/install (`/mcp search` Copilot v1.0.49-0), deferred loading (Copilot), lifecycle stability (Claude Code #36800 duplicate spawns), sampling handler (Gemini #27130) |
| **Cost visibility & guardrails** | Claude Code, Codex, DeepSeek TUI, Qwen Code | Per-turn projections (Claude Code v2.1.143), CNY/¥ pricing (DeepSeek #1607), token breakdown footer (DeepSeek #1666), `/goal` circuit breaker (Claude Code #58550; Qwen #4123), rate limit transparency (Codex #22929) |
| **Reasoning/thinking mode interoperability** | Pi, DeepSeek TUI, Claude Code, Qwen Code | Unified `reasoning_content` abstraction across OpenAI/Anthropic/Kimi/MiMo formats (Pi #4251, #4514, #4505), provider-gated display (DeepSeek #1680), adaptive thinking levels (Pi #4555) |
| **Windows/WSL first-class support** | Gemini, Claude Code, Codex, Qwen Code, DeepSeek TUI | Path translation WSL→Windows (Gemini #27025), PTY binary detection (Gemini #26565), installer breakages (Claude Code #47104), PowerShell preference (Gemini #25900), Git Bash stdin (Qwen #2774) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|:---|:---|:---|
| **Architecture & Runtime** | **Codex** (Rust migration), **Pi** (TypeScript/Node), **OpenCode** (Effect-TS) | Codex's Rust rewrite signals performance/correctness priority; OpenCode's Effect system targets functional reliability; Pi emphasizes terminal emulator compatibility breadth |
| **IDE Integration Depth** | **OpenCode** (VS Code bidirectional sync PR #27662), **Copilot CLI** (native GitHub ecosystem) | OpenCode bridges IDE↔TUI gap; Copilot leverages existing editor trust; Claude Code remains TUI-native with Agent View worktrees |
| **Enterprise Hardening** | **Gemini CLI** (OAuth routing, deterministic redaction), **Claude Code** (cost controls, permission profiles) | Gemini targets corporate gateway deployments; Claude Code focuses on spend governance; Qwen developing `/doctor` operational tooling |
| **Agent Orchestration** | **Claude Code** (Agent View git worktrees), **Qwen Code** (`/goal` with LLM judge), **Gemini** (subagent hierarchy) | Claude Code: git-native parallelism; Qwen: judge-driven autonomy; Gemini: skills system (currently underutilized #21968) |
| **Local/Self-Hosted Inference** | **Pi** (LiteLLM proxy #4562, dynamic model discovery #3357), **OpenCode** (LAN mDNS discovery #27554), **DeepSeek TUI** (vLLM/Ollama fixes) | Pi leads provider-agnostic abstraction; OpenCode targets LAN auto-discovery; DeepSeek TUI improving third-party compatibility |
| **Community Openness** | **Kimi CLI** (15 issues/10 PRs in 24h, individual contributor `ktwu01`), **OpenCode** (50/50 activity) | Kimi shows rapid contributor turnaround; OpenCode maintains highest raw volume; Codex/Claude Code more internally driven |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|:---|:---|:---|
| **Highest iteration velocity** | OpenAI Codex, Qwen Code, OpenCode | Codex: 3 daily alphas + 12 PRs; Qwen: 3 previews + memory diagnostic sprint; OpenCode: 50 issues/PRs, v1.15.0 core overhaul |
| **Active but stabilization-focused** | Claude Code, Gemini CLI, DeepSeek TUI | Claude Code: release shipped but critical Apple remote bug (#34255) unresolved; Gemini: nightly with P1 agent hangs; DeepSeek: steady v0.8.38 with production fixes |
| **Contributor-driven surge** | Kimi CLI | 15 issues/10 PRs in 24h, security vulnerability (#2273) with rapid partial fix, hook system maturation by community |
| **Refactor/rearchitecture phase** | Pi | "bigrefactor" milestone closing issues en masse; reasoning-content bugs dominating; 6 PRs merged shows execution |
| **Paused/stabilizing** | GitHub Copilot CLI | Zero PR activity; v1.0.49-x series suggests release lockdown; MCP reliability issues (#2282, #3257) need attention |

**Maturity signals**: Claude Code and Copilot CLI show highest issue-resolution infrastructure (cost controls, enterprise policy) but risk complacency on community contribution. OpenCode and Qwen Code demonstrate most aggressive technical debt addressing (memory, event systems). Kimi CLI's security vulnerability response velocity (#2273→#2298 in <24h) is notable but indicates pre-production hardening gaps.

---

## 6. Trend Signals

| Signal | Evidence | Strategic Implication |
|:---|:---|:---|
| **Node.js/V8 heap exhaustion as architectural ceiling** | Qwen #4149/#4167/#4185, OpenCode #20695, implicit in Claude Code cost controls | Long-session agentic coding requires runtime migration (Rust/Go) or aggressive compaction; tools staying on Node face scaling ceiling |
| **Permission profiles as security primitive** | Codex migration stack (#22923, #22896, #22918), Copilot "None" reasoning effort, Qwen auto-approval classifier (#4151) | Fine-grained sandboxing moving from advanced feature to default requirement; "YOLO" naming being deprecated (Gemini #27026) |
| **Remote/mobile control as workflow standard** | Codex #9224 shipped (401 👍), Claude Code #34255 critical bug, Gemini browser subagent | Phone-to-CLI and headless operation now expected; Apple ecosystem reliability is differentiator |
| **MCP from "connect" to "distribute"** | Copilot `/mcp search`, deferred loading, auto-update (#3331); Claude Code plugin dependency enforcement | MCP ecosystem maturing toward package-manager semantics; lifecycle stability (spawn, orphan, reconnect) is next battleground |
| **Reasoning content as interoperability hazard** | Pi #4251/#4514/#4505, DeepSeek #1680, Qwen #4169 | Provider-specific `reasoning_content`/`thinking`/`reasoning` field proliferation creating abstraction crisis; unified model needed |
| **Cross-tool parity pressure** | Kimi #2252 (Codex-compatible `/goal`), DeepSeek #891 (Codex `/goal`), Claude Code #15631 (history isolation) | Users treating tools as fungible, demanding feature parity; vendor lock-in resistance rising |
| **Operational diagnostics as UX requirement** | Qwen `/doctor memory`, `/stuck` (#4133); Claude Code cost projections; DeepSeek token breakdown | Production users need observability into opaque AI systems; "it just works" insufficient for enterprise adoption |

---

*Report compiled from public GitHub community digests dated 2026-05-16. Data reflects 24-hour activity windows where specified, with longitudinal context where noted.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-16 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Key Functionality | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point affecting *every* document Claude generates; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **PDF Fix** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open | Corrects 8 case-sensitive file reference bugs in `skills/pdf/SKILL.md` | Simple but critical fix for case-sensitive filesystems; breaks on Linux/WSL without this |
| 3 | **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML conversion | Fills open-source/ISO standard document gap; triggers on "ODT", "ODS", "LibreOffice" |
| 4 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation frontend design tasks | Focus on *actionability*—ensuring every instruction Claude can actually execute in one session |
| 5 | **Skill Quality + Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating skill structure (20%), security, documentation, examples, resources | First systematic quality framework for the skills ecosystem itself |
| 6 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Prevents document corruption from `w:id` collisions between tracked changes and existing bookmarks | Deep OOXML expertise; fixes real-world document corruption scenario |
| 7 | **Skill-Creator YAML Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse validation catching unquoted descriptions with YAML special characters (`:`) | Silent failure mode was causing truncated descriptions; early validation prevents broken skills |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Urgency |
|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 👍7) | 🔥 Critical |
| Enterprise teams manually Slack `.skill` files; need shared libraries or direct links |  |  |
| **Skill Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 👍6) | 🔥 Critical |
| `claude -p` has **0% skill trigger rate**; skills/commands never invoked in eval pipeline |  |  |
| **Trust Boundary / Security** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 👍2) | ⚠️ High |
| Community skills impersonating `anthropic/` namespace; permission elevation risk |  |  |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) (2 comments) | ⚠️ High |
| Skills-as-MCPs protocol standard; MCP data compression for large result sets |  |  |
| **Plugin Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍8), [#1087](https://github.com/anthropics/skills/issues/1087) (2 comments, 👍1) | ⚠️ High |
| `document-skills` and `example-skills` load identical content; context window bloat |  |  |
| **Enterprise Auth Compatibility** | [#532](https://github.com/anthropics/skills/issues/532) (closed, 2 comments, 👍1) | Moderate |
| `ANTHROPIC_API_KEY` requirement blocks SSO/enterprise users from skill-creator tools |  |  |

---

## 3. High-Potential Pending Skills

These active PRs show sustained engagement and clear utility, likely to merge with maintainer review:

| Skill | PR | Author | Why It May Land Soon |
|:---|:---|:---|:---|
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Comprehensive testing stack—Testing Trophy, AAA pattern, React Testing Library, MSW; fills major gap in code quality skills |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | Broad enterprise platform coverage (ITSM, ITOM, SecOps, ITAM, FSM, SPM, CSDM); actively updated through April |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | avimak | Full-stack deployment from Claude; public URL provisioning; actively maintained (updated May 4) |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | 4-skill cognitive framework (kernel, advisor, agent, memory); structured knowledge management; updated May 6 |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Native AppleScript/`osascript` alternative to screenshot-based computer use; tiered permission model |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability infrastructure*—org sharing, deterministic skill triggering, trust boundaries, and plugin deduplication—rather than more creative or domain-specific skills, indicating the ecosystem is maturing from experimentation to production deployment at scale.**

---

---

# Claude Code Community Digest — 2026-05-16

## Today's Highlights

Anthropic shipped **v2.1.143** with plugin dependency enforcement and projected context cost visibility, while the community grapples with a critical Remote Control reconnection bug on Apple platforms (37 comments, 75 👍) and ongoing MCP lifecycle issues. The issue tracker shows strong activity around Agent View git worktree behavior, cost controls, and cross-platform TUI stability.

---

## Releases

### [v2.1.143](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)
- **Plugin dependency enforcement**: `claude plugin disable` now blocks removal when other enabled plugins depend on it, with copy-pasteable disable-chain hints; `claude plugin enable` force-enables transitive dependencies
- **Projected context cost**: Per-turn and per-session cost projections added (release notes truncated)

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#34255](https://github.com/anthropics/claude-code/issues/34255) | **Remote Control silent disconnection on macOS/iOS** — auto-reconnection fails without error or recovery | Breaks core remote workflow for Apple ecosystem users; no workaround for headless/remote sessions | 🔥 37 comments, 75 👍 — highest engagement in tracker |
| [#15631](https://github.com/anthropics/claude-code/issues/15631) | **Cross-session command history in up-arrow** — no way to isolate history per session | Privacy and UX friction for shared machines or context-switching developers | 15 comments, 17 👍; marked duplicate but keeps resurfacing |
| [#36800](https://github.com/anthropics/claude-code/issues/36800) | **Duplicate MCP channel plugin spawns** — Telegram plugin respawns mid-session, causing 409 Conflict and tool loss | Data loss scenario; root cause spans harness lifecycle + plugin re-registration gap | 14 comments, detailed repro with logs |
| [#47104](https://github.com/anthropics/claude-code/issues/47104) | **Windows 11: Cowork, Connectors, Claude Code all broken post-update** — `ERR_CONNECTION_RESET` + OAuthError | Complete functionality loss on Windows after auto-update; suggests update pipeline issue | 12 comments, 3 👍 |
| [#14836](https://github.com/anthropics/claude-code/issues/14836) | **`/skills` ignores symlinked directories** | Breaks common dotfiles/monorepo setups where skills are symlinked | 8 comments, 34 👍 — high vote-to-comment ratio signals strong latent demand |
| [#58597](https://github.com/anthropics/claude-code/issues/58597) | **Agent View: configurable git worktree behavior** — closed with resolution | Agent Workers always create worktrees; overkill for trivial edits, yet insufficient for concurrent work | 8 comments, 9 👍; closed — implementation expected |
| [#29058](https://github.com/anthropics/claude-code/issues/29058) | **Docker MCP containers not stopped on session end** | Resource leaks on Linux; orphaned containers accumulate | 7 comments, 4 👍; has repro |
| [#59163](https://github.com/anthropics/claude-code/issues/59163) | **TUI character corruption in VS Code terminal after long sessions** | Render regression on macOS v2.1.141; glyph corruption while ANSI structure preserved | 5 comments; narrow platform-version combo |
| [#53454](https://github.com/anthropics/claude-code/issues/53454) | **Model tic: "load-bearing" overuse** | Meme-tier model behavior report; signals user frustration with repetitive phrasing | 5 comments, 8 👍 |
| [#59572](https://github.com/anthropics/claude-code/issues/59572) | **Weekly "all models" counter drops mid-cycle** — Max plan, Opus 4.7 | Billing/credit integrity concern; no reset triggers false limit enforcement | Fresh (3 comments), needs investigation |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#59508](https://github.com/anthropics/claude-code/pull/59508) | **fix(examples/hooks): bash_command_validator regex false negatives** | Fixes two regex bugs in example hook: `grep` pipeline false exemption and unescaped `awk` pattern; adds test coverage | 🟢 Open |
| [#59275](https://github.com/anthropics/claude-code/pull/59275) | **Add `new-session` plugin with `/new` command** | Bridges `/clear` (same session) and `/branch` (fork history) with clean session start; plugin architecture demonstrates extensibility | 🟢 Open |
| [#59495](https://github.com/anthropics/claude-code/pull/59495) | **docs: fix GitHub capitalization in README** | Trivial brand compliance fix; already consistent elsewhere | 🔴 Closed |

*Only 3 PRs active in window; community contribution velocity remains low relative to issue volume.*

---

## Feature Request Trends

1. **Session lifecycle control** — `/new` command (PR #59275), cross-session history isolation (#15631), and Agent View archival (#58966) all point to users wanting finer-grained session boundary management without data destruction.

2. **Remote/headless operation** — MCP channel plugins (Telegram, iMessage) need full TUI feature parity: `AskUserQuestion` proxying (#59245), stable reconnection (#34255), and notification context (#43861).

3. **Git worktree flexibility** — Agent View's forced worktree creation (#58597) and symlink handling (#14836) reveal friction between Claude Code's git abstractions and developer workflows.

4. **Cost visibility & guardrails** — v2.1.143's projected context cost addresses prior demand; `/goal` circuit breaker (#58550) and counter integrity (#59572) show continued focus on spend control.

---

## Developer Pain Points

| Category | Pattern | Representative Issues |
|----------|---------|----------------------|
| **MCP lifecycle instability** | Duplicate spawns, orphaned containers, auth desync between VS Code and desktop | #36800, #29058, #55021, #59139 |
| **Windows as second-class** | Update breakages, installer failures, VS Code extension stream drops | #47104, #43874, #59374, #59559 |
| **TUI/render regressions** | Character corruption, focus theft, markdown rendering gaps | #59163, #43883, #43664 |
| **Permission system gaps** | `deny` rules not blocking reads, `AskUserQuestion` misreported as decline | #51211, #59550 |
| **Cost/billing opacity** | Mid-cycle counter drops, `/goal` runaway spend, long-context 429s | #59572, #58550, #42616 |

**Meta-observation**: The closed-as-stale rate remains high for legitimate UX issues (#43883, #43874, #43664, #43861, #43856 all from April 5 cluster), suggesting either bulk triage or versioning-off of pre-2.1 reports. Community signal-to-noise on closed items merits monitoring.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-16

---

## 1. Today's Highlights

The Codex team shipped three rapid-fire Rust CLI alphas (v0.131.0-alpha.19–22) as the platform-wide migration to **permission profiles** accelerates across Windows sandbox, TUI, and app-server layers. Remote control infrastructure matured significantly with auth-backed executor registration and improved CLI UX, while community demand for **Linux desktop support** and **checkpoint/rewind functionality** continues to dominate the issue tracker.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.131.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.22) | Rapid iteration continues; no detailed changelog provided in release notes |
| [rust-v0.131.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.21) | — |
| [rust-v0.131.0-alpha.19](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.19) | — |

*Note: Release notes are minimal; users should consult commit history for detailed changes.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | Most-upvoted open feature request (204 👍); macOS power/thermal issues are driving users to Linux workstations | Strong demand; 55 comments spanning 3+ months; considered blocking adoption for Linux-native developers |
| [#9224](https://github.com/openai/codex/issues/9224) | ~~Codex Remote Control~~ **[CLOSED]** | Landmark closure—remote phone-to-CLI control shipped; 401 👍 shows massive pent-up demand | Celebrated as major UX win; discussion references reveal extensive beta anticipation |
| [#11626](https://github.com/openai/codex/issues/11626) | **CLI: Add `/rewind` checkpoint restore** | Critical gap in undo semantics—current `Esc` only rewinds conversation, not code edits | 130 👍, 29 comments; users report destructive edits they cannot fully revert |
| [#22696](https://github.com/openai/codex/issues/22696) | **Failed to authorize remote control** | Post-launch friction with new remote-control feature; auth flow breaking for Pro users | 26 comments in 24h; indicates rollout turbulence affecting paying customers |
| [#22700](https://github.com/openai/codex/issues/22700) | **Revoked remote control access persists on iOS** | Device management UX gap—stale connections cannot be deleted, blocking re-pairing | 15 comments; iOS-specific polish issue following remote control launch |
| [#22694](https://github.com/openai/codex/issues/22694) | **Computer Use requires macOS 26.0** | Undocumented hard dependency breaking on older macOS versions; dyld symbol error | 12 comments; surprises users on stable macOS releases; suggests beta-quality runtime bundling |
| [#21218](https://github.com/openai/codex/issues/21218) | **VS Code extension DNS failures** | Enterprise connectivity blocker—extension cannot resolve hostnames | 11 comments; affects Enterprise tier; possible proxy/VPN interaction |
| [#17447](https://github.com/openai/codex/issues/17447) | **CLI hangs at `_dyld_start` on macOS 26.4.1** | Gatekeeper/AppleSystemPolicy blocking Homebrew installs; notarization gap | 10 comments; root cause identified (missing notarization + quarantine DB); workaround documented by reporter |
| [#20741](https://github.com/openai/codex/issues/20741) | **Desktop chat histories disappeared after update** | Data loss scare—project context vanished post-update | 8 comments; erodes trust in auto-update mechanism; no recovery path stated |
| [#22752](https://github.com/openai/codex/issues/22752) | **Plugins no longer load correctly (regression)** | `@` mention menu broken in latest Desktop build | 3 comments, 4 👍; regression in build 2816; affects core plugin discovery UX |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|------------|
| [#22769](https://github.com/openai/codex/pull/22769) | **exec-server: support auth-backed remote executor registration** | Replaces registry-issued credentials with standard Codex auth (biscuit-only contract) | Hardens remote execution security model; enables scalable fleet management |
| [#22878](https://github.com/openai/codex/pull/22878) | **Improve `codex remote-control` CLI UX** | Foreground-by-default behavior with status messaging; daemon mode opt-in via `--daemon` | Closes UX gap from [#9224](https://github.com/openai/codex/issues/9224); makes remote control discoverable |
| [#22920](https://github.com/openai/codex/pull/22920) | **core: set permission profiles from snapshots** | Refactors config/session bridge to use `ActivePermissionProfile` consistently | Prevents permission state desync bugs; part of major architecture migration |
| [#22929](https://github.com/openai/codex/pull/22929) | **Harden CLI rate limit window labels** | Derives labels from actual API-returned durations instead of hardcoded assumptions | Fixes misleading "weekly" vs. "5h" copy; handles missing secondary windows gracefully |
| [#22924](https://github.com/openai/codex/pull/22924) | ~~app-server-protocol: remove PermissionProfile from API~~ **[CLOSED]** | Removes internal `PermissionProfile` from public app-server protocol | API hygiene win; reduces client coupling to internal sandbox model |
| [#22923](https://github.com/openai/codex/pull/22923) + [#22896](https://github.com/openai/codex/pull/22896) + [#22918](https://github.com/openai/codex/pull/22918) | **Windows sandbox: PermissionProfile migration stack** | Three-PR stack: resolved permissions helper → elevated runner IPC → drive write roots | Completes Windows sandbox modernization; parity with macOS/Linux permission model |
| [#21559](https://github.com/openai/codex/pull/21559) | **tui: add named permission profile picker** | `/permissions` preserves named-profile identity instead of collapsing to anonymous presets | Critical for users managing multiple workspace trust levels |
| [#22510](https://github.com/openai/codex/pull/22510) + [#22509](https://github.com/openai/codex/pull/22509) | **Sync TUI next-turn state [2-3 of 3]** | App-server API + broadcast notifications keep remote TUI clients synchronized | Eliminates stale UI state in multi-client sessions |
| [#22782](https://github.com/openai/codex/pull/22782) + [#22873](https://github.com/openai/codex/pull/22873) | **Add SubagentStart / SubagentStop hooks** | Lifecycle hooks for thread-spawned subagents, matching on `agent_type` | Enables fine-grained observability and control for multi-agent workflows |
| [#22679](https://github.com/openai/codex/pull/22679) | **Support audio input** | Adds `InputModality::Audio` with MCP audio→Responses conversion | Expands multimodal surface; gated by model capability |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Linux first-class support** | [#11023](https://github.com/openai/codex/issues/11023) (204 👍), [#16717](https://github.com/openai/codex/issues/16717) (Windows shell config, related cross-platform demand) | **Highest sustained demand**; macOS thermal issues amplifying urgency |
| **Checkpoint/rewind with code revert** | [#11626](https://github.com/openai/codex/issues/11626) (130 👍) | Strong; safety-critical for autonomous editing |
| **Remote/mobile control polish** | [#9224](https://github.com/openai/codex/issues/9224) (shipped), [#22696](https://github.com/openai/codex/issues/22696), [#22700](https://github.com/openai/codex/issues/22700), [#22857](https://github.com/openai/codex/issues/22857) | Feature is live but auth/UX gaps remain; SSH key management next |
| **Skills system refinements** | [#10585](https://github.com/openai/codex/issues/10585) (implicit vs. explicit invocation), [#22908](https://github.com/openai/codex/issues/22908) (skill-scoped model overrides) | Power-user demand for composable, predictable skill behavior |
| **Custom model provider expansion** | [#19145](https://github.com/openai/codex/issues/19145) (NVIDIA NIM), [#19694](https://github.com/openai/codex/issues/19694) (model picker filtering) | Enterprise/self-hosted inference interest |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **macOS gatekeeping & notarization** | [#17447](https://github.com/openai/codex/issues/17447) (dyld hang), [#22694](https://github.com/openai/codex/issues/22694) (Computer Use symbol error) | **High** — breaks Homebrew installs, requires manual quarantine clearing; suggests CI notarization gap |
| **Remote control auth fragility** | [#22696](https://github.com/openai/codex/issues/22696) (authorization failure), [#22700](https://github.com/openai/codex/issues/22700) (stale iOS connections), [#22701](https://github.com/openai/codex/issues/22701) (no delete in edit mode) | **High** — feature launched with device-management UX incomplete |
| **Data durability fears** | [#20741](https://github.com/openai/codex/issues/20741) (chat history loss) | **Moderate-High** — no stated recovery; undermines update confidence |
| **Sandbox/permission complexity** | [#22889](https://github.com/openai/codex/issues/22889) (bubblewrap arg limit), Windows migration stack | **Moderate** — advanced users hitting implementation limits; team actively refactoring |
| **Rate limit transparency** | [#18018](https://github.com/openai/codex/issues/18018) (weekly limit behavior unclear), addressed in [#22929](https://github.com/openai/codex/pull/22929) | **Moderate** — billing trust issue; PR in flight |
| **Plugin ecosystem regressions** | [#22752](https://github.com/openai/codex/issues/22752) (plugins fail), [#22885](https://github.com/openai/codex/issues/22885) (mention menu hangs), [#21618](https://github.com/openai/codex/issues/21618) (Browser Use unavailable) | **Moderate** — plugin reliability uneven across platforms |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-16

## Today's Highlights

The v0.44.0 nightly landed with enterprise auth improvements and RAG debugging support, while the maintainers pushed hard on model routing reliability with two bot-generated fixes for invalid model IDs and OAuth-aware alias resolution. The community continues to grapple with agent orchestration stability, with multiple P1 issues around subagent hangs, silent failures, and recovery behaviors driving active discussion.

---

## Releases

**[v0.44.0-nightly.20260515.g928a311fb](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260515.g928a311fb)**
- **feat(core):** Expose RAG snippets to local log file for debugging — aids transparency in retrieval-augmented generation pipelines ([#27016](https://github.com/google-gemini/gemini-cli/pull/27016))
- **fix(acp/auth):** Prevent conflicting credentials on enterprise gateways and support optional API keys natively — reduces auth friction for corporate deployments

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | EPIC-level investigation that could dramatically reduce token waste and misaligned reads by understanding code structure rather than treating files as text blobs | 7 comments, maintainer-driven research |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Critical reliability flaw — core agent delegation path is broken for basic operations like folder creation | 7 comments, 7 👍, P1 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | Follow-up to behavioral evals initiative; 76 tests exist but scaling to 6 model variants needs infrastructure hardening | 6 comments, eval infrastructure focus |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports GOAL success after MAX_TURNS interruption | Silent failure mode — users think analysis completed when it actually hit a hard limit, corrupting trust in results | 6 comments, 2 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini doesn't use skills and sub-agents autonomously | Skills system (gradle, git, etc.) is effectively dead weight without explicit user prompting, undermining extensibility design | 6 comments, anecdotal but widely felt |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux display protocol incompatibility blocks headless/browser workflows on modern distributions | 4 comments, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution hangs with "Waiting input" after completion | False-positive interactivity detection breaks basic CLI workflows; simple commands appear stuck | 3 comments, 3 👍 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model scatters tmp scripts across workspace | Cleanup burden falls on users; violates principle of least surprise for version-controlled projects | 3 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | Configuration system has gap between registry initialization and runtime behavior, breaking user expectations for maxTurns etc. | 3 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | Security concern — secrets hit model context before prompt-level redaction; logging surface is overly broad | 2 comments, security area |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-----------|--------|
| [#27131](https://github.com/google-gemini/gemini-cli/pull/27131) | Route personal OAuth users to stable models for auto aliases | Prevents 404/400 errors when `auto-gemini-3` resolves to preview models unavailable to personal OAuth accounts | Open, bot-generated, P1 |
| [#27134](https://github.com/google-gemini/gemini-cli/pull/27134) | Skip hook context for tool continuations | Fixes lifecycle bug where pure function-response continuations incorrectly triggered before-agent hooks | Open, P2 |
| [#27026](https://github.com/google-gemini/gemini-cli/pull/27026) | Add full-access approval controls | Replaces `--yolo` with `--full-access`, adds sandbox defaults, deprecates informal naming | Open, privileged execution UX |
| [#27025](https://github.com/google-gemini/gemini-cli/pull/27025) | Handle Windows paths under WSL | Translates `C:\` paths to `/mnt/c` equivalents when detected in WSL environment | Open, P1, cross-platform |
| [#27130](https://github.com/google-gemini/gemini-cli/pull/27130) | MCP sampling request handler (1/3) | Foundation for MCP client sampling support — pure handler, no UI/policy wiring yet | Open, P2, multi-part feature |
| [#27128](https://github.com/google-gemini/gemini-cli/pull/27128) | Fall back to default model for invalid Gemini model IDs | Defensive fix for stale persisted IDs like `gemini-pro-latest` causing hard failures | Open, bot-generated, P2 |
| [#25643](https://github.com/google-gemini/gemini-cli/pull/25643) | Throttle shell text output to prevent UI jank | Batches React re-renders during high-volume output; `binary_progress` already throttled, text was not | Open, help wanted |
| [#26565](https://github.com/google-gemini/gemini-cli/pull/26565) | Prevent isBinary false-positive on Windows PTY streams | Single null byte check breaks node-pty ANSI sequences; blocks all shell output on Windows | Open, help wanted, P1 |
| [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) | Prefer pwsh.exe over Windows PowerShell 5.1 | Fixes embedded quote stripping in PowerShell 5.1; unblocks modern Windows shell workflows | Open, help wanted, P1/P2 |
| [#27126](https://github.com/google-gemini/gemini-cli/pull/27126) | Enable custom tools model for Vertex auth | Closes gap where Vertex sessions couldn't resolve custom tool models despite participating in Gemini 3.1 launch path | Open, P2 |

---

## Feature Request Trends

1. **AST-aware tooling integration** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) explore structured code understanding via `tilth`, `glyph`, or `ast-grep` to replace naive text-based file operations. Direction: precision over token volume.

2. **Agent self-improvement and skill management** — Requests for periodic trajectory reflection ([#21421](https://github.com/google-gemini/gemini-cli/issues/21421)), better skill autodiscovery ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and backgroundable subagents ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)) suggest the agent orchestration layer needs more autonomy and user control.

3. **Enterprise hardening** — OAuth routing, credential isolation, deterministic redaction, and telemetry buffering indicate production deployment concerns are rising in priority.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Subagent reliability** | Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), unauthorized activation ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), MAX_TURNS handling | Critical — core value proposition at risk |
| **Windows/WSL friction** | Path translation ([#27025](https://github.com/google-gemini/gemini-cli/pull/27025)), PTY binary detection ([#26565](https://github.com/google-gemini/gemini-cli/pull/26565)), PowerShell version preference ([#25900](https://github.com/google-gemini/gemini-cli/pull/25900)) | High — blocks significant user segment |
| **Shell execution state machine bugs** | "Waiting input" false positives ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), output throttling gaps ([#25643](https://github.com/google-gemini/gemini-cli/pull/25643)) | High — breaks basic interactivity |
| **Browser/headless environment gaps** | Wayland failure ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings.json ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), session lock handling ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) | Medium — limits automation scenarios |
| **Auto Memory quality and security** | Infinite retry on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), invalid patch handling ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), redaction timing ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) | Medium — trust and noise concerns |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-16

---

## 1. Today's Highlights

Two releases landed in the past 24 hours, with v1.0.49-0 introducing experimental MCP server search (`/mcp search`) and deferred tool loading, plus a new "None" reasoning effort option to disable model reasoning. The community is actively grappling with MCP connection reliability, enterprise policy access controls, and model routing issues for Claude Opus variants. No pull requests were updated today, signaling a focus on release stabilization rather than new feature merge activity.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.49-1** | Prompt mode (`-p`) now auto-loads workspace MCP sources when the current folder is already trusted — reducing friction for repeat workspace workflows. |
| **v1.0.49-0** | **Experimental:** `/mcp search` command to discover and install MCP servers from registry; deferred loading for MCP/external tools to improve startup performance. New "None" reasoning effort option to fully disable model reasoning. New `COPILOT_PLUGIN_DIR_ONLY` environment variable for plugin directory control. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2282](https://github.com/github/copilot-cli/issues/2282) | **MCP connection failures on Windows** (`github-mcp-server`) | Core platform reliability; Windows/Winget install path is broken for MCP — blocks server adoption | 9 comments, resolved — high engagement indicates widespread hit |
| [#3101](https://github.com/github/copilot-cli/issues/3101) | **Enterprise policy denies model access** | Recurring regression (was #2691); enterprise users locked out despite valid subscriptions | 6 comments, 3 👍 — repeat issue erodes enterprise trust |
| [#3080](https://github.com/github/copilot-cli/issues/3080) | **Claude Opus 4.7-high rejects all requests** | Model picker sends incompatible `reasoning_effort: "medium"`; model completely unusable | 3 comments, 2 👍 — critical for Pro+ users paying for Opus access |
| [#3318](https://github.com/github/copilot-cli/issues/3318) | **Sudden refusal of valid requests** | Perceived safety over-tightening; breaks core workflows (tests, bug fixes, directory listing) | 2 comments, 2 👍 — emerging pattern, user frustration high |
| [#3257](https://github.com/github/copilot-cli/issues/3257) | **HTTP MCP servers fail after idle — dead TCP reuse** | Root-cause networking bug with pooled connections; affects long-running CLI sessions | 2 comments — deep technical issue, needs infrastructure fix |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | **Session forking for parallel contexts** | Top-voted feature request (22 👍); addresses fundamental UX limitation vs. Claude Code | 2 comments, 22 👍 — sustained demand, product differentiation gap |
| [#3330](https://github.com/github/copilot-cli/issues/3330) | **macOS CA cert loading adds 5+ seconds per invocation** | Performance regression on macOS; synchronous `trustd` XPC calls block startup | 1 comment — severe local impact, likely affects all macOS enterprise users |
| [#3331](https://github.com/github/copilot-cli/issues/3331) | **Auto-update plugins via marketplace flag** | Team/plugin maintainer need; manual updates create version drift in orgs | 1 comment, 2 👍 — DevEx scalability concern |
| [#3340](https://github.com/github/copilot-cli/issues/3340) | **Input box too tall in latest update** | Recent UI regression; terminal real estate is precious for developers | 1 comment — fast feedback on v1.0.49 UI change |
| [#3344](https://github.com/github/copilot-cli/issues/3344) | **Messages stranded in Queued state with background subagents** | Race condition in agent orchestration; "submit another message" workaround is placebo | 0 comments, fresh — core agent coordination bug |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** (Total: 0 items)

This suggests the team is in a release stabilization phase following the v1.0.49-x series rather than actively merging new features. Monitor for PR activity resuming post-release.

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **MCP ecosystem maturation** | `/mcp search`, deferred loading, #3331 (auto-update), #3343 (machine-level slash commands) | Moving from "connect to servers" to "discover, manage, and distribute MCP tooling at scale" |
| **Reasoning effort control** | "None" option added; #3080, #3066 (Opus variants hidden) | Users demand fine-grained model behavior control, especially for cost/latency-sensitive workflows |
| **Session/context management** | #1697 (forking), #3128 (alphanumeric session IDs), #3026 (auto-compaction) | Parity with Claude Code's context ergonomics is a recurring theme |
| **Plugin lifecycle automation** | #3331 (auto-update), #3341 (notification hook cancellation) | Enterprise teams need unattended, policy-driven plugin management |
| **Agent orchestration reliability** | #2923 (sub-agent notifications), #3344 (queued messages), #3342 (`/every`, `/after` missing) | Background/multi-agent execution is shipping but still has coordination gaps |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **MCP connection reliability** | 3+ issues (#2282, #3257, #3102 SSH marketplace) | Blocks adoption of extensibility model; Windows and idle-timeout scenarios particularly fragile |
| **Enterprise access/policy regressions** | Recurring (#3101, #3071) | Paying Pro+ and enterprise users locked out; "same as #2691" indicates fix didn't stick |
| **Model picker ↔ model capability mismatch** | #3080, #3066, #3141, #3138 | Opus 4.7 variants misrouted or hidden; reasoning effort defaults wrong — undermines model choice UX |
| **macOS performance penalties** | #3330 (CA certs), #3105/#3104 (keyboard/image paste) | Platform-specific polish gaps; seconds of startup overhead compounds in scripted workflows |
| **Agent coordination "ghost states"** | #2923, #3344, #3327 (ambiguous spinner) | Users can't trust background agent status; messages lost, UI misleading |
| **Terminal rendering/copy fidelity** | #3197 (wrapped lines), #3340 (input height), #2468 (GIF crashes) | Basic terminal interaction quality inconsistent; breaks shell command reuse |

---

*Digest compiled from github.com/github/copilot-cli activity for 2026-05-15/16.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-16

---

## 1. Today's Highlights

The community saw a surge of **hook system improvements** and **UX refinements** with 15 new issues and 10 PRs opened in 24 hours. A critical security vulnerability in the auto-updater ([#2273](https://github.com/MoonshotAI/kimi-cli/issues/2273)) is being actively patched, while multiple contributors independently targeted shell input ergonomics and context UI clutter. Notably, user `ktwu01` single-handedly filed 5 issues and opened 4 PRs, driving significant community momentum.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2077](https://github.com/MoonshotAI/kimi-cli/issues/2077) | **K2.6 model overloaded — unusable under normal load** | Critical infrastructure degradation affecting paid Allegretto subscribers; 13 comments indicate widespread impact on macOS Apple Silicon users | 🔴 High engagement; unresolved since April 26 |
| [#2273](https://github.com/MoonshotAI/kimi-cli/issues/2273) | **Security: Auto-updater lacks integrity verification, uses unsafe `tarfile.extractall`** | Supply-chain attack vector with no SHA256/signature checks; unfiltered tar extraction enables path traversal | ⚠️ Security-critical; partial fix in PR #2298 |
| [#2252](https://github.com/MoonshotAI/kimi-cli/issues/2252) | **Add `/goal` command and Codex-compatible coding plan export** | Cross-tool interoperability demand; Codex/Claude Code parity increasingly expected by professional developers | 9 comments; bilingual engagement (CN/EN) |
| [#2306](https://github.com/MoonshotAI/kimi-cli/issues/2306) | **ACP protocol playback — session history lost on restart** | Breaks Zed IDE integration workflow; data loss on session recovery | Fresh report; affects `kimi acp` and `kimi web` |
| [#2304](https://github.com/MoonshotAI/kimi-cli/issues/2304) | **UserPromptSubmit Hook stdout silently discarded** | Blocks extensibility — developers cannot build prompt enhancement pipelines | Filed with PR #2305 fix already in flight |
| [#2303](https://github.com/MoonshotAI/kimi-cli/issues/2303) | **UserPromptSubmit hook receives empty prompt from shell UI** | Complements #2304; hook system fundamentally broken for shell-based input | Same author as fix PR; rapid turnaround |
| [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) | **Kimi Web refreshes intermittently, disrupting sessions** | Persistent stability issue since March; affects Windows users on kimi-for-coding | 6 comments; long-running, low traction |
| [#1117](https://github.com/MoonshotAI/kimi-cli/issues/1117) | **Shell tool interactive input support** | Blocks `npm init`, password prompts, `read` — basic CLI functionality gap | 2 comments; foundational limitation |
| [#2291](https://github.com/MoonshotAI/kimi-cli/issues/2291) | **Remove constantly-updating context usage indicator** | UI polish affecting daily UX; visual distraction during long sessions | PR #2300 already proposed |
| [#2292](https://github.com/MoonshotAI/kimi-cli/issues/2292) | **Add Shift+Tab to toggle YOLO (auto-accept) mode** | Claude Code parity for power users; reduces friction in trusted workflows | PR #2302 addresses related input ergonomics |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2305](https://github.com/MoonshotAI/kimi-cli/pull/2305) | **fix(hook): capture input text in UserPromptSubmit payload** | Fixes empty prompt bug (#2303); enables functional hook-based extensions | 🆕 Open, ready for review |
| [#2308](https://github.com/MoonshotAI/kimi-cli/pull/2308) | **feat(hook): include LLM response + stop_reason in Stop hook** | Enriches Stop hook with actionable data for external tooling/observability | 🆕 Open, pairs with #2307 |
| [#2302](https://github.com/MoonshotAI/kimi-cli/pull/2302) | **feat(shell): Shift+Enter newline shortcut** | Adds intuitive `s-enter` binding alongside Ctrl-J/Alt-Enter; updates toolbar hints | 🆕 Open, community-driven UX |
| [#2301](https://github.com/MoonshotAI/kimi-cli/pull/2301) | **feat(cli): non-interactive `kimi usage` command** | Enables CI/scripting quota checks with `--json` output; resolves #2169 | 🆕 Open, infrastructure utility |
| [#2300](https://github.com/MoonshotAI/kimi-cli/pull/2300) | **fix(shell): hide context meter below warning threshold** | Suppresses distracting live indicator until 80% usage; resolves #2291 | 🆕 Open, UX polish |
| [#2299](https://github.com/MoonshotAI/kimi-cli/pull/2299) | **docs: clarify quota estimate methodology** | Sets proper expectations for membership "request counts" vs. token-based reality | 🆕 Open, docs trust repair |
| [#2298](https://github.com/MoonshotAI/kimi-cli/pull/2298) | **fix(update): `filter="data"` on tarfile.extractall** | Defense-in-depth for #2273; mitigates path traversal without CDN-side manifest | 🆕 Open, security incremental |
| [#2297](https://github.com/MoonshotAI/kimi-cli/pull/2297) | **fix(install.sh): source uv env after installer** | Fixes `uv` PATH availability in fresh shells; improves first-run experience | 🆕 Open, onboarding fix |
| [#2296](https://github.com/MoonshotAI/kimi-cli/pull/2296) | **docs(readme): add Prerequisites to Development** | Reduces contributor friction by surfacing `make`, `uv` requirements upfront | 🆕 Open, community health |
| [#2295](https://github.com/MoonshotAI/kimi-cli/pull/2295) | **docs(readme): surface install command in Getting Started** | Cuts two redirects + scroll to reach `curl \| bash`; improves conversion | 🆕 Open, docs UX |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Hook system maturity** | #2304, #2307, #2303, #2305, #2308 | Community pushing for event-driven extensibility parity with Claude Code hooks |
| **Input ergonomics** | #2254, #2292, #2302, #1117 | Shift+Enter, Shift+Tab, interactive shell — reducing modality friction |
| **Cross-tool interoperability** | #2252 | Codex plan export, `/goal` command — avoiding vendor lock-in |
| **Session reliability** | #2306, #2290, #2293 | Rewind, export-to-support, ACP playback — resilience and debuggability |
| **Non-interactive/CI usage** | #2301 | Headless quota checks, JSON output — enterprise/automation readiness |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Model availability/reliability** | Recurring since April | 🔴 Critical | #2077 (K2.6 overload), #1623 (Web refreshes) |
| **Hook system broken for real use** | 3 related issues in 24h | 🔴 High | #2303, #2304, #2307 — fixes in PR #2305, #2308 |
| **Security trust in auto-updater** | 1 issue, 1 partial fix | 🟡 Medium-High | #2273 — needs CDN-side manifest signing |
| **Context UI noise** | 1 issue, 1 PR | 🟡 Medium | #2291, #2300 |
| **Missing standard shortcuts** | 2 issues, 1 PR | 🟢 Low-Medium | #2254, #2292, #2302 |
| **Shell interactivity gaps** | Long-standing | 🟡 Medium | #1117 — fundamental architecture limitation |
| **Documentation discoverability** | 3 PRs in 24h | 🟢 Low | #2295-2297 — contributor onboarding friction |

---

*Digest compiled from MoonshotAI/kimi-cli public GitHub activity. For full context, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-16

## Today's Highlights

OpenCode shipped **v1.15.0** with a new Effect-based core event system and experimental background subagents, while the community grapples with a cluster of TUI regressions around scroll behavior, missing slash commands, and Alpine Linux compatibility. Memory concerns remain the top long-running discussion with 77 comments on the central tracking issue.

---

## Releases

### [v1.15.0](https://github.com/anomalyco/opencode/releases/tag/v1.15.0) — Core event system overhaul
- **Effect-based core event system** for reliable cross-session and cross-integration event delivery
- **Bugfixes**: Invalid exports in custom tool modules now ignored (vs. failing tool loading); project instruction lookup errors no longer block session loading

### [v1.14.51](https://github.com/anomalyco/opencode/releases/tag/v1.14.51) — Background subagents & NVIDIA fixes
- **Experimental background subagents** allow tasks to continue running while users work elsewhere
- **NVIDIA billing origin header** added for endpoint compliance
- **Bugfixes**: Worktree creation POST body fix; session-related patch

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Central tracking for memory leaks; maintainers explicitly request heap snapshots (not LLM speculation) | 77 comments, 54 👍 — highest engagement by far |
| [#11176 Official VS Code extension](https://github.com/anomalyco/opencode/issues/11176) | Most-upvoted feature request (81 👍); would eliminate friction for IDE-native users | 17 comments, sustained pressure since January |
| [#26198 Terminal flooded with mouse escape sequences](https://github.com/anomalyco/opencode/issues/26198) | Breaks terminal state on process interruption — forces users to reset terminals manually | 15 comments, actively painful |
| [#26549 /exit and /quit missing from autocomplete](https://github.com/anomalyco/opencode/issues/26549) | Core UX regression in v1.14.42; commands work but are undiscoverable | 22 👍, 14 comments; related to #26684 |
| [#27589 TUI fails on Alpine Linux (musl)](https://github.com/anomalyco/opencode/issues/27589) | Regression from 1.14.48→1.14.50; `getcontext` symbol missing blocks Docker/container usage | 13 comments; ncopa (Alpine founder) reported |
| [#27096 Keybinds broken on Dvorak layouts](https://github.com/anomalyco/opencode/issues/27096) | Scancode vs. keycode regression breaks all Emacs-style bindings for non-QWERTY users | 11 comments, zero 👍 but high severity for affected users |
| [#19947 NVIDIA NIM numeric tool call IDs](https://github.com/anomalyco/opencode/issues/19947) | Provider incompatibility with Zod validation; blocks NVIDIA NIM kimi2.5 tool use | 11 comments, integration-critical |
| [#15728 Read tool cannot pass image data](https://github.com/anomalyco/opencode/issues/15728) | Vision model support gap in tool chain; limits multimodal workflows | 9 comments, 6 👍 |
| [#7659 Don't auto-scroll chat window](https://github.com/anomalyco/opencode/issues/7659) | Long-standing UX complaint; users can't read streaming output in real-time | 8 comments, 12 👍; duplicates closed (#27792, #27784) |
| [#27723 Desktop sidecar crashes with oh-my-opencode](https://github.com/anomalyco/opencode/issues/27723) | Plugin ecosystem stability on Windows; affects popular community plugin | 3 comments, fresh in v1.15.0 |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#27802 fff search tools](https://github.com/anomalyco/opencode/pull/27802) | Implements `fff` pickers for file/content/directory search — fast fuzzy finding integration | Open |
| [#27662 VS Code: push editor selection to TUI](https://github.com/anomalyco/opencode/pull/27662) | Real-time WebSocket sync of active editor file/selection from VS Code extension; bridges IDE↔TUI gap | Open |
| [#27554 Local LAN provider discovery](https://github.com/anomalyco/opencode/pull/27554) | Auto-discovers local OpenAI-compatible servers via mDNS + LAN scanning; closes #6231 | Open |
| [#27804 fix: literal replaceAll replacements](https://github.com/anomalyco/opencode/pull/27804) | Prevents JS replacement token injection (`$&`, `$$`) in edit tool; adds regression test | Open |
| [#27803 Show config error details on startup](https://github.com/anomalyco/opencode/pull/27803) | Surfaces file/path context for config validation failures instead of generic errors | Open |
| [#26944 + #26872 Fix missing child session crashes](https://github.com/anomalyco/opencode/pull/26944) | Two related fixes for TUI crashes when task references stale/deleted child sessions | Open |
| [#27800 Lazy-load CLI commands](https://github.com/anomalyco/opencode/pull/27800) | Defers module loading for `--help`, `--version`, shell completion — faster cold start | Open |
| [#27797 Prefer per-model temperature](https://github.com/anomalyco/opencode/pull/27797) | Fixes agent override clobbering model-specific requirements (kimi-k2, gemini, qwen) | Open |
| [#27795 Visible scrollbar in session chat](https://github.com/anomalyco/opencode/pull/27795) | White, interactive scrollbar for TUI chat — addresses navigation complaints | Open |
| [#27794 Sidebar file diff totals](https://github.com/anomalyco/opencode/pull/27794) | Shows addition/deletion counts next to Modified Files in TUI sidebar | Open |

---

## Feature Request Trends

1. **IDE Integration**: VS Code extension (#11176) and VS Code↔TUI bidirectional sync (#27662) dominate — users want OpenCode *inside* their existing workflows, not parallel to them
2. **Session Navigation & Control**: Scroll behavior (#7659, #27787), timestamps (#26625), and exit commands (#26549, #26684) show TUI interaction polish is a major gap
3. **Privacy by Default**: Default sharing disabled (#17188, 13 👍) reflects enterprise/security-conscious user base
4. **Plugin Security**: Signed receipts for tool calls (#21096) and audit logging indicate production-hardening needs
5. **Local/On-Prem AI**: LAN discovery (#27554) and NVIDIA NIM fixes (#19947) show push toward self-hosted inference

---

## Developer Pain Points

| Category | Specific Issues | Frequency |
|----------|-----------------|-----------|
| **Memory & Stability** | Memory leaks (#20695, #22422, #27778), sidecar crashes (#27723), stale sessions (#26872) | Daily reports; maintainers actively collecting diagnostics |
| **TUI Regressions** | Mouse escape sequences (#26198), keybinds (#27096), Alpine/musl breakage (#27589), missing renderers (#27756, #27447) | Clustered around 1.14.48–1.15.0 releases |
| **Scroll/Readability** | Auto-scroll disrupts reading (#7659, #27792, #20600) — multiple duplicates closed recently | Persistent since January; partial fixes in flight |
| **Provider Compatibility** | NVIDIA NIM numeric IDs (#19947), temperature overrides (#27797), billing headers (v1.14.51) | Integration-specific but blocking |
| **Plugin Ecosystem** | `oh-my-opencode` crashes (#27723), TUI renderer conflicts (#27447), clipboard issues (#10154) | Growing as plugin adoption increases |
| **Build/Tool Chain** | Build commands hanging (#19252), image paste failures (#10154), Read tool vision gap (#15728) | Workflow-blocking for agentic coding |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs active in last 24h.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-16

## Today's Highlights

The Pi team is in the middle of a major refactor ("bigrefactor"), with numerous issues being closed against that milestone while critical reasoning-content bugs with Chinese providers (Kimi k2.6, MiMo) dominate community discussion. Terminal compatibility and TUI rendering remain active pain points, with multiple fixes landing for resize handling and key input across Konsole, Alacritty, Terminal.app, and narrow terminals.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#4251](https://github.com/earendil-works/pi/issues/4251) | Kimi k2.6 `reasoning_content` missing in assistant tool call message | Blocks production use of Kimi k2.6 with OpenCode Go; reasoning-content lifecycle bugs are the #1 provider compatibility issue this week | 17 comments, 5 👍 — most discussed open issue |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | Official local LLM provider extension | Long-standing request to dynamically fetch models from llama.cpp/Ollama/LM Studio via `/models` endpoint; would eliminate manual `models.json` maintenance | 13 comments, 23 👍 — highest-voted open feature |
| [#4514](https://github.com/earendil-works/pi/issues/4514) | Kimi K2.6 400 error: Extra inputs not permitted on `messages[].reasoning` | Closed as duplicate/refactor, but reveals conflicting reasoning field handling between OpenAI-compatible and Anthropic wire formats | 8 comments, 7 👍 |
| [#4522](https://github.com/earendil-works/pi/issues/4522) | Anthropic streaming response body not decompressed on Node.js v26 | Node v26 breaking change — empty `Headers` object prevents gzip detection; affects all Anthropic users on latest Node | 4 comments, open with `closed-because-refactor` |
| [#4315](https://github.com/earendil-works/pi/issues/4315) | `package-lock.json` missing resolved/integrity entries since v0.74.0 | Breaks reproducible builds for Nix and offline CI/CD consumers; regression from recent release | 4 comments, 6 👍 |
| [#4501](https://github.com/earendil-works/pi/issues/4501) | Repeated `pnpm install -g` on every startup with pnpm 11 | Performance regression — adds seconds to every session start for pnpm 11 users; package manager compatibility gap | 3 comments, 1 👍 |
| [#4505](https://github.com/earendil-works/pi/issues/4505) | MiMo models fail with `reasoning_content` not preserved in multi-turn tool use | Pattern match to Kimi issues — Xiaomi's OpenAI-compatible provider mishandles thinking-mode state across tool calls | 3 comments, 2 👍 |
| [#4532](https://github.com/earendil-works/pi/issues/4532) | `parseFrontmatter` rejects valid Claude Code agent files | Interop barrier — Pi's stricter YAML parser breaks agent definitions that work in Claude Code, blocking migration | 3 comments, open |
| [#4556](https://github.com/earendil-works/pi/issues/4556) | Crash with very narrow terminal | TUI robustness — hard error on `Rendered line exceeds terminal width` rather than graceful truncation | 4 comments, closed |
| [#3113](https://github.com/earendil-works/pi/issues/3113) | Shift+Enter not recognized under Konsole | Terminal emulator fragmentation — Konsole's `\x1bOM` sequence for Shift+Enter needs special-casing | 5 comments, closed |

---

## Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4566](https://github.com/earendil-works/pi/pull/4566) | Force TUI redraw on terminal resize | Fixes desynced/corrupted rendering after window resize; preserves Termux soft-keyboard behavior | **Merged** |
| [#4558](https://github.com/earendil-works/pi/pull/4558) | OpenAI completions: throw error on missing `finish_reason` | Hardens provider compatibility layer against non-compliant APIs; adds `hasFinishReason` tracking | Open |
| [#4564](https://github.com/earendil-works/pi/pull/4564) | Add `lockDefaults` option | Session-scoped model/thinking changes no longer persist to `settings.json` — reduces accidental config drift | **Merged** |
| [#4562](https://github.com/earendil-works/pi/pull/4562) | Add LiteLLM provider | Single-proxy access to 100+ backends via existing `openai-completions` wire format; zero new provider code | **Merged** |
| [#4560](https://github.com/earendil-works/pi/pull/4560) | Add Fireworks FirePass provider support | Subscription-based FirePass tier (Kimi k2p6) exposed as built-in; reduces custom `models.json` friction | Open |
| [#4555](https://github.com/earendil-works/pi/pull/4555) | "Adaptive" thinking level for Claude 4.6+/4.7/Sonnet 4.6 | Exposes Anthropic's self-regulating thinking budget as user-selectable `/thinking` option; no effort cap | **Merged** |
| [#4552](https://github.com/earendil-works/pi/pull/4552) / [#4550](https://github.com/earendil-works/pi/pull/4550) | Auto-compact functionality fix | New `shouldStopAfterTurn` lifecycle hook enables robust context window management for long sessions | **Merged** |
| [#4547](https://github.com/earendil-works/pi/pull/4547) | Tokyo Night theme, Unicode progress bars, modern styling | Auto-discovered themes from `themes/` directory; Unicode block bars for context usage; visual polish | **Merged** |
| [#4543](https://github.com/earendil-works/pi/pull/4543) | Preserve `reasoning_content` for Xiaomi provider | Fixes MiMo thinking-mode error by correcting provider format from Anthropic to OpenAI-compatible | **Merged** |
| [#4541](https://github.com/earendil-works/pi/pull/4541) | System prompt XML boundaries | Replaces fragile `##` header separators with `<file>` XML tags for context file merging; improves LLM parsing | Open |

---

## Feature Request Trends

1. **Local/self-hosted LLM ergonomics** — Dynamic model discovery (#3357), LiteLLM proxy support (#4562), and Ollama/llama.cpp integration are converging toward first-class local inference without manual `models.json` editing.
2. **Reasoning/thinking mode interoperability** — Provider-specific handling of `reasoning_content`, `thinking`, and `reasoning` fields is the dominant bug category; community needs a unified abstraction across OpenAI, Anthropic, Kimi, MiMo, and custom providers.
3. **Terminal and shell environment resilience** — Cross-emulator key input (Shift+Enter, backspace), resize handling, and narrow-terminal safety are receiving sustained attention.
4. **Configuration durability and portability** — `lockDefaults` (#4564), `apiKeyCommand` for password managers (#4557), model aliases (#4569), and splash screen disable (#4540) all point to reducing ambient config mutation and improving headless/agent-team workflows.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Reasoning content lifecycle bugs** | Critical | #4251, #4514, #4505, #4526, #4543 — Kimi, MiMo, and generic `defaultThinkingLevel` all break on multi-turn tool use or history compaction |
| **Provider format fragmentation** | High | OpenAI-compatible vs. Anthropic wire format confusion; Node v26 `Headers` behavior change (#4522); custom `models.json` required for every new backend |
| **Package manager / install fragility** | Medium | pnpm 11 re-install loop (#4501), npm permission errors on Ubuntu 26.04 (#4525), missing lockfile integrity (#4315) |
| **TUI rendering edge cases** | Medium | Terminal resize (#4568, #4556), image overflow (#4415), Konsole/Alacritty/Terminal.app key sequences |
| **Context compaction reliability** | Medium | Orphan `toolResult` after chained compactions (#4570), auto-compact triggering logic (#4552, #4550) — session-destroying 400 errors |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-16

## 1. Today's Highlights

The Qwen Code team shipped three rapid-fire preview releases (v0.15.12-preview.0–2) with terminal UX improvements and OpenAI streaming fixes, while community attention remains sharply focused on **memory pressure and OOM crashes** in long sessions—spawning a dedicated diagnostic initiative (`/doctor memory`) and multiple heap-pressure safety PRs. The daemon/server mode architecture is also maturing with a flurry of proposals for production-ready `qwen serve`.

---

## 2. Releases

**v0.15.12-preview.2 / .1 / .0** (2026-05-15)
- **feat(cli)**: Markdown links now wrapped in OSC 8 hyperlinks, preserving clickability when terminal line-wrapping occurs — by @BZ-D ([#4037](https://github.com/QwenLM/qwen-code/pull/4037))
- **fix(core)**: Normalized cumulative OpenAI stream deltas to suffixes, resolving incremental token handling edge cases — by @chiga0 ([#3896](https://github.com/QwenLM/qwen-code/pull/3896))
- **fix(cli)**: Auto-restore functionality stabilized (details in release notes)

*Note: Three identical changelogs suggest iterative preview builds; stable v0.15.12 expected shortly.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — Reduce to 100 req/day, phase out by 2026-05-20 | **125 comments** make this the most-discussed issue by far; impacts all free-tier users and third-party integrations | Intense backlash; users seeking migration paths |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode (`qwen serve`) proposal & open decisions** | 6-chapter design series by core contributor @wenshao; defines architectural future for headless/server deployments | Active technical debate on 1-daemon-1-workspace model |
| [#4167](https://github.com/QwenLM/qwen-code/issues/4167) | **CLI crashed — V8 GC failure** | Fresh OOM report with Mark-Compact heap pressure; symptomatic of epidemic memory issues | Users piling on with similar traces |
| [#4149](https://github.com/QwenLM/qwen-code/issues/4149) | **FATAL ERROR: Ineffective mark-compacts near heap limit** | Classic 4GB V8 heap exhaustion; long-session blocker | Echoes #2868, #4167 — pattern clearly established |
| [#4185](https://github.com/QwenLM/qwen-code/issues/4185) | **OOM in long sessions: V8 heap pressure exceeds limit before token-based compaction** | Root-cause analysis PR by @yiliang114; identifies gap between V8 pressure and application-level compression triggers | Seen as diagnostic breakthrough |
| [#4156](https://github.com/QwenLM/qwen-code/issues/4156) | **Proposal: `qwen --serve` Mode A — TUI + in-process HTTP daemon** | Bridges gap between interactive and headless modes; Stage 1.5b roadmap item | Strong interest from IDE integration users |
| [#4178](https://github.com/QwenLM/qwen-code/issues/4178) | **Close tool_use↔tool_result invariant at failure point** | Defense-in-depth for weak-network/tooling wedge states; companion to PR #4176 | Appreciated by reliability-focused contributors |
| [#4179](https://github.com/QwenLM/qwen-code/issues/4179) | **Add baseline `/doctor memory` diagnostics** | First concrete slice of #3000 memory diagnostics initiative; gives users actionable OOM reporting | Unanimously positive; maintainers requesting rapid merge |
| [#4169](https://github.com/QwenLM/qwen-code/issues/4169) | **Error message overwritten by `status` command** | UX papercut where critical API errors (DeepSeek-V4-Pro reasoning_content) get lost | Frustration at error visibility |
| [#3914](https://github.com/QwenLM/qwen-code/issues/3914) | **API connected, no errors but then fail to fetch** | OpenRouter integration failure; common configuration pitfall | Users struggling with provider-specific auth |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4186](https://github.com/QwenLM/qwen-code/pull/4186) | **fix(core): heap-pressure auto-compaction safety net** | Emergency 70% V8 heapUsed threshold bypasses token-based compaction; direct response to #4185 | Open, ready for review |
| [#4180](https://github.com/QwenLM/qwen-code/pull/4180) | **feat(cli): baseline `/doctor memory` diagnostics** | Lightweight memory report (RSS, V8 heap, handles, metadata) for paste-safe bug reports | Open, implements #4179 |
| [#4176](https://github.com/QwenLM/qwen-code/pull/4176) | **fix(core,cli): close tool_use↔tool_result invariant** | Eliminates unrecoverable wedge on weak networks (train/WiFi handoff) with Anthropic-protocol backends | Open, critical reliability fix |
| [#4123](https://github.com/QwenLM/qwen-code/pull/4123) | **feat(cli): `/goal` command with judge-driven continuation** | Session-scoped objective pinning; LLM judge auto-continues until condition met | Open, novel agentic UX |
| [#4151](https://github.com/QwenLM/qwen-code/pull/4151) | **feat(cli,core): Auto approval mode with LLM classifier** | Fifth approval tier between Auto-Edit and YOLO; risk-classified auto-approval for long autonomous sessions | Open, safety-conscious automation |
| [#4064](https://github.com/QwenLM/qwen-code/pull/4064) | **feat(rewind): file restoration support** | File-history backup/restore for `/rewind` beyond conversation truncation; closes #3697 | Open, significant UX gap closed |
| [#4126](https://github.com/QwenLM/qwen-code/pull/4126) | **feat(telemetry): unify span creation for hierarchical traces** | Fixes flat trace trees; LLM/tool spans become proper children of interaction spans | Open, observability improvement |
| [#4133](https://github.com/QwenLM/qwen-code/pull/4133) | **feat(skills): `/stuck` diagnostic for frozen sessions** | Process scan (CPU, D/T/Z states, hung subprocesses) + log analysis + stack sampling | Open, operational tooling |
| [#4188](https://github.com/QwenLM/qwen-code/pull/4188) | **fix: cache limits to prevent OOM during build/test** | Bounded FIFO eviction for `crawlCache`/`fileReadCache`; `--max-old-space-size=3072` safety net | Open, CI/dev experience |
| [#3970](https://github.com/QwenLM/qwen-code/pull/3970) | **refactor(core): TaskBase envelope + foreground subagent persistence** | Unifies task registry architecture; foundation for robust subagent/session lifecycle | Open, structural groundwork |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Memory diagnostics & OOM prevention** | #3000, #4179–#4184, #4186, PR #4180 | 🔥🔥🔥 Highest priority; 6 sub-issues created in 24h |
| **Daemon/server mode maturity** | #3803, #4156, #4175, #3889, #4113 | 🔥🔥🔥 Architecture converging on Mode A/B split |
| **Session resilience (network/weak connectivity)** | #4176, #4177, #4178, #4139 | 🔥🔥 Train/wifi handoff failures driving defensive design |
| **Approval automation & agentic autonomy** | #4123 (`/goal`), #4151 (Auto mode) | 🔥🔥 Balancing autonomy with safety |
| **Telemetry/observability** | #4126, #4097, #4064 rewind history | 🔥 Growing enterprise/debugging demand |
| **Terminal UX refinements** | #3926 (input editing), #4082 (readline keys), #4120 (status presets) | 🔥 Steady polish |

---

## 6. Developer Pain Points

**1. V8 Heap Exhaustion in Long Sessions**
- **Frequency**: Dominant theme across 5+ issues (#4149, #4167, #4185, #2868, #4116)
- **Manifestation**: 4GB Node.js limit hit during Mark-Compact; tool outputs, diffs, file reads accumulate
- **Workaround gap**: Token-based compaction too slow; community desperate for `/doctor memory` and heap-pressure safety nets

**2. Weak-Network Tool State Corruption**
- **Frequency**: Recurring with Anthropic-protocol backends (DeepSeek-V4-Pro)
- **Manifestation**: Orphan `tool_result` → unrecoverable 400 errors; SSE silent drops hang indefinitely
- **Fix in flight**: PR #4176 + #4177 (idle watchdog) closing failure paths

**3. Windows Terminal Compatibility**
- **Frequency**: Persistent (#2774, #4171, install issues)
- **Manifestation**: Git Bash stdin detection, Tab keybinding conflicts, PowerShell vs. CMD divergence
- **Gap**: First-class Windows TUI testing still lacking

**4. Provider-Specific Integration Friction**
- **Frequency**: Steady (#3914 OpenRouter, #4139 MiniMax, #4138 DashScope custom endpoints)
- **Manifestation**: Auth schema mismatches, tool ID formats, reasoning_content passback requirements
- **Gap**: Generic "OpenAI-compatible" abstraction leaking provider specifics

**5. Free Tier Uncertainty**
- **Frequency**: Acute (#3203)
- **Manifestation**: 10× quota reduction + imminent closure disrupting CI/CD and hobbyist workflows
- **Gap**: No announced replacement tier or migration timeline

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-16

## Today's Highlights

v0.8.38 shipped with critical streaming fixes for OpenAI-compatible backends and improved tool approval scoping. The community is actively addressing Docker permission failures, macOS theme detection, and third-party API compatibility issues, with 10+ PRs merged or opened in the last 24 hours targeting production stability.

---

## Releases

### [v0.8.38](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.38)
Patch release focusing on streaming reliability and agent safety:
- **Fixed**: OpenAI batch tool-call streaming now preserves all `tool_calls` instead of dropping all but the last (fixes vLLM/Ollama/LM Studio integrations)
- **Fixed**: Denied tool approvals now scoped to exact canonical calls, preventing over-broad suppression
- **Fixed**: Loop guard blocks now correctly reported as failures rather than successes
- Distribution via npm wrapper and GHCR (`ghcr.io/hmbown/deepseek-tui:latest`)

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615) Docker garbled output / crash — **CLOSED** | Most-discussed issue (91 comments); user frustration peaked with hostile tone, reflecting onboarding friction for Chinese Docker users | High emotional intensity; documentation gap acknowledged |
| [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683) Force Chinese reasoning chain language | DeepSeek v4 defaults to English `thinking` blocks; users want localized cognitive traces for non-English workflows | 15 comments, ongoing — no native config path yet |
| [#1411](https://github.com/Hmbown/DeepSeek-TUI/issues/1411) Text overflow without wrapping | Breaks novel/outline reading workflows; long content renders as single truncated line | 9 comments; UX blocker for document-heavy use |
| [#1607](https://github.com/Hmbown/DeepSeek-TUI/issues/1607) Add CNY/¥ to token cost estimator | Cost transparency for Chinese developers; current USD-only pricing alienates core user base | 5 comments; straightforward localization ask |
| [#1293](https://github.com/Hmbown/DeepSeek-TUI/issues/1293) OpenAI-compatible API support | Naming implies DeepSeek-only; users want local models, other platforms (Claude, etc.) via standard interface | 5 comments; architectural positioning debate |
| [#891](https://github.com/Hmbown/DeepSeek-TUI/issues/891) Codex /goal long-running task mode | Competitive parity with OpenAI Codex; multi-step autonomous workflows increasingly expected | 4 comments; agent capability gap |
| [#1620](https://github.com/Hmbown/DeepSeek-TUI/issues/1620) Extremely slow reasoning token generation | Performance regression or configuration issue; "one character at a time" suggests buffering/streaming bug | 4 comments; needs profiling |
| [#1565](https://github.com/Hmbown/DeepSeek-TUI/issues/1565) New session command/shortcut missing | `/session` only shows history; no quick way to spawn fresh context in current window | 3 comments; daily workflow friction |
| [#1685](https://github.com/Hmbown/DeepSeek-TUI/issues/1685) Diagnostics tool null array causing 400 — **CLOSED** | Every turn hit API error; `null` passed where array expected in function schema | Rapidly fixed; schema validation gap |
| [#1676](https://github.com/Hmbown/DeepSeek-TUI/issues/1676) "Dual" mode: Pro for reasoning + Flash for execution | Cost optimization proposal (~6× cheaper execution); sophisticated model routing gaining traction | 1 comment; high-quality feature design |

---

## Key PR Progress

| PR | Author | What It Does |
|----|--------|--------------|
| [#1699](https://github.com/Hmbown/DeepSeek-TUI/pull/1699) | mvanhorn | **fix(docker)**: Pre-creates `/home/deepseek/.deepseek` to resolve permission denied on first run — addresses [#1684](https://github.com/Hmbown/DeepSeek-TUI/issues/1684) |
| [#1702](https://github.com/Hmbown/DeepSeek-TUI/pull/1702) | mvanhorn | **fix(core)**: Syncs system prompt hash when overriding via Runtime API; stored `system_prompt` was being discarded before model request — fixes [#1688](https://github.com/Hmbown/DeepSeek-TUI/issues/1688) |
| [#1701](https://github.com/Hmbown/DeepSeek-TUI/pull/1701) | mvanhorn | **chore(deps)**: Bumps `portable-pty` 0.8→0.9 for loongarch64 support, deduplicates `nix` crate — closes [#1531](https://github.com/Hmbown/DeepSeek-TUI/issues/1531) |
| [#1697](https://github.com/Hmbown/DeepSeek-TUI/pull/1697) | lbcheng888 | **fix(tui)**: Claude Code-style color alignment — neutral white/gray base, DeepSeek blue accents, removes warm amber leakage |
| [#1680](https://github.com/Hmbown/DeepSeek-TUI/pull/1680) | LittleBlacky | **fix(tui)**: Guards `reasoning_content` behind provider check; prevents display corruption from third-party OpenAI-compatible APIs — fixes [#1673](https://github.com/Hmbown/DeepSeek-TUI/issues/1673) |
| [#1674](https://github.com/Hmbown/DeepSeek-TUI/pull/1674) | Aitensa | **fix(tui)**: macOS light mode detection for `theme = "system"`; falls back to `AppleInterfaceStyle` when `COLORFGBG` unavailable — fixes [#1670](https://github.com/Hmbown/DeepSeek-TUI/issues/1670) |
| [#1640](https://github.com/Hmbown/DeepSeek-TUI/pull/1640) | KyrieZhang329 | **perf(cache)**: Snapshots system prompt at session creation, wires warmup, shares prefix across sub-agents — major KV cache miss reduction |
| [#1693](https://github.com/Hmbown/DeepSeek-TUI/pull/1693) | Yourdaylight | **feat(acp)**: Multi-turn tool execution for ACP server; 11 built-in tools, permission handling, execution loop |
| [#1666](https://github.com/Hmbown/DeepSeek-TUI/pull/1666) | encyc | **feat**: Session token breakdown in footer/`/status` — input / cache-hit / output tracking (e.g., "12K in / 8.1K cch / 2.5K out") |
| [#1689](https://github.com/Hmbown/DeepSeek-TUI/pull/1689) | InvsGhost | **feat(subagents)**: Configurable `api_timeout_secs` per step; replaces hardcoded 120s for deep-reasoning sub-agents |

---

## Feature Request Trends

1. **Model Routing & Cost Optimization**: "Dual mode" (Pro+Flash), configurable timeouts, and token cost transparency in local currency point to users treating DeepSeek TUI as a production cost center requiring fine-grained control.

2. **OpenAI-Compatible Ecosystem Expansion**: Repeated asks for local model support, third-party API compatibility, and standardized interfaces suggest the project name ("DeepSeek-TUI") is becoming a branding constraint as users want vendor-agnostic tooling.

3. **Session & Context Management**: Startup session picker, new session shortcuts, global `AGENTS.md`, and persistent configuration across projects indicate users are scaling beyond single-chat workflows into multi-project, multi-session development environments.

---

## Developer Pain Points

| Category | Specific Frustrations | Frequency |
|----------|----------------------|-----------|
| **Docker/Installation** | Permission errors on first run, garbled output in containers, WSL crashes, Windows terminal color breakage | Very High — #1615, #1684, #1596, #1687 |
| **Theme/Display** | macOS light mode misdetection, text overflow, white-background checkbox contrast, Powershell color corruption | High — #1670, #1411, #1564, #1687 |
| **Third-Party API Compatibility** | `reasoning_content` field corruption, SSE timeout at 45s, schema validation failures | High — #1673, #1679, #1685, #1683 |
| **Input/Interaction** | No multiline input in Git-Bash/Windows Terminal, mouse scroll conflated with input history, no new session shortcut | Medium-High — #1687, #1677, #1565 |
| **Performance** | Slow reasoning token generation, sub-agent timeout too short, KV cache misses | Medium — #1620, #1689, #1640 |
| **Transparency/Trust** | Undocumented outbound connections, no in-app update mechanism, missing GitHub links in UI | Emerging — #1683, #1678 |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*