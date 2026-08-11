# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-11 00:52 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools — 2026-08-11

## 1. Ecosystem Overview

The AI CLI tool landscape is commercially mature and deeply competitive, with Anthropic, OpenAI, Google, GitHub, Alibaba, xAI, and independent OSS projects all shipping in the same week. Release velocity is high (8 releases across 6 tools in 24 hours), but the dominant signal is reliability: Windows desktop instability, MCP/OAuth fragility, and session/state corruption recur across nearly every tool. Enterprise governance (entitlement verification, policy enforcement, org-level approvals) is becoming a first-class concern, while user demand is shifting from raw model capability toward persistent memory, cross-surface session continuity, and multi-agent orchestration. Notably, OSS projects (OpenCode, Pi, Qwen Code) are iterating as fast or faster than vendor-backed tools, closing the feature gap with differentiated bets like embedded web UIs, LAN provider discovery, and native plugin ecosystems.

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs (24h) | Release Status |
|---|---|---|---|
| Claude Code | 10+ | 3 | **v2.1.227 stable** (transcript regression reported) |
| OpenAI Codex | 10 | 10 | 2 alphas (`rust-v0.148.0-alpha.6`, `...0.147.0-alpha.6.6`) |
| Gemini CLI | 10+ | 10+ | `v0.56.0-nightly` |
| GitHub Copilot CLI | 10 | 0 | **v1.0.79 stable** (sandbox policy controls) |
| Kimi Code CLI | 1 | 0 | None |
| OpenCode | 10+ | 10 | **v1.18.16 stable** + v2 desktop beta in flight |
| Pi (pi-mono) | 10+ | 9 | None (heavy bugfix phase) |
| Qwen Code | 10 | 10 | **v0.21.9 stable** + nightly |
| DeepSeek TUI (CodeWhale) | 2 | 3 | None (v0.9.6 release-prep PR closed) |
| Grok Build | 0 | 0 | No activity |

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|---|---|---|
| **Cross-session/cross-surface memory** | Claude Code, Kimi, Qwen, Copilot | CLI↔desktop history sync (#28791, #15881), persistent memory system (#1283), scheduled-prompt/rewind history fidelity (#8837, #8885), session recovery past 5 MB limits (#4424) |
| **MCP reliability** | Copilot, Gemini, Codex | Handshake timeouts/retries (#4421), interim fail-closed policies (#4419), OAuth token refresh (#28481), MCP form support and auth-loop fixes |
| **Windows/desktop stability** | Codex, Claude Code, Copilot, OpenCode, Qwen | UI freezes/crashes (#20214), install failures (#85663), plugin update locks (#4095), input focus loss (#40866), TUI rendering artifacts (#8124) |
| **Subagent observability & control** | Gemini, Codex, Copilot, DeepSeek TUI, Claude Code | False-success reporting on MAX_TURNS (#22323), live nested-exec handles (#35613), per-subagent model fallback (#4416), depth-budget capping (#5317), sandbox cache corruption (#67585) |
| **Enterprise entitlement/policy consistency** | Copilot, Claude Code | Valid orgs blocked from models (#1595, #4390, #4422), CVP-approved orgs still blocked (#84352), Max-plan billing bugs (#80749) |
| **Context budget & compaction** | Claude Code, Copilot, Gemini, OpenCode | Compaction loops/freezes (#41984), unbounded edit-snapshot growth (#40816), AST-aware tooling to cut token noise, deterministic compaction replay |
| **Security hardening** | Gemini, Claude Code, Pi, Qwen | SSRF in web fetch (#28557), spoofed system-reminder integrity (#74636), Bedrock tool-argument sanitization (#7882), cross-worktree Git mutation guards (#8687) |

## 4. Differentiation Analysis

- **Claude Code** is positioned as the enterprise-grade incumbent: subscription-tier entitlement logic, CVP org governance, Fable/Cowork product integration, and a plugin ecosystem. Its risk is regression frequency in a large surface area (transcripts, sandboxing, Windows).
- **OpenAI Codex** is the most desktop/agentic-experience-focused vendor tool: Computer Use, Browser Use, remote control, and a Rust codebase with rapid alpha churn. It targets Pro/Plus subscribers who want GUI automation alongside CLI; Windows bugs are its biggest liability.
- **Gemini CLI** differentiates on engineering rigor: the strongest security posture of the week (SSRF fix, OAuth fixes), an evaluation infrastructure (eval:validate, tool-call timeline formatter), and an Auto Memory system. It reads as the most "systems-engineering-driven" CLI, with subagent reliability as the top open problem.
- **GitHub Copilot CLI** is the enterprise policy play: sandbox policy controls, managed-settings enforcement, proxy URL enforcement, and deep GitHub ecosystem integration. Its Pain points are catalog/entitlement visibility and hard failure modes on long sessions; zero PR activity suggests a more conservative cadence.
- **OpenCode** is the OSS innovation leader: v2 desktop beta, embedded web UI (`opencode web`), mDNS LAN provider discovery, and architectural refactors (side-effect-free core modules). Performance regression (#30086 high CPU) is its most urgent blocker.
- **Pi (pi-mono)** focuses on terminal fidelity and provider correctness: legacy terminal compatibility (tmux/SSH ESC timeouts), Bedrock/Cloudflare gateway support, fullscreen TUI search, and config inheritance. It is the "TUI craftsman" choice.
- **Qwen Code** is building a multi-agent "fleet" runtime (RFC #8718 with staged implementation), plus Qoder plugin installation from any source (npm, Git, URLs) and Chrome/WebBridge control. It is the most ambitious on orchestration and browser integration.
- **DeepSeek TUI / CodeWhale** is in architectural consolidation: crate decomposition, command-boundary refactors, and ownership cleanup. Small community, correctness-first.
- **Kimi Code CLI** is nearly dormant but has a clear signal: the community's single active issue demands a persistent memory system (automatic + manual memory modes).

## 5. Community Momentum & Maturity

**Most mature / highest engagement:** Claude Code leads in absolute issue volume (issue numbers in the 80k range) and feature-request traction (120 👍 on CLI↔desktop sync alone), indicating the largest installed base. Copilot CLI shows strong enterprise reach but more moderate community velocity.

**Fastest iterating:** Gemini CLI and OpenCode are the week's PR leaders (10+ each), with Gemini matching Codex's PR count while shipping a security fix and 10+ tracked issues. Qwen Code is close behind (10 PRs) with a stable release plus nightly, signaling high investment. Codex's two-alpha-per-day cadence is the most aggressive release train in the ecosystem.

**Rapidly growing OSS:** OpenCode and Pi are shipping at vendor pace from independent maintainers; DeepSeek TUI is moving deliberately but steadily. Grok Build has no observable community activity.

**Quiet but high-demand:** Kimi Code is the "sleeping giant" — minimal activity, but the memory-system issue (#1283, 31 comments) demonstrates an engaged user base waiting on one flagship feature.

## 6. Trend Signals

1. **"Remember everything" is the next battleground.** Cross-surface sync (Claude Code), persistent memory (Kimi), Auto Memory hardening (Gemini), and history fidelity (Qwen) all point to context persistence as the defining feature of the next 12 months. Tools without a memory story will feel disposable.

2. **Windows is the universal weak point — and the universal opportunity.** Every multi-platform tool reports Windows-specific blockers. The tool that stabilizes Windows first — installs, TUI rendering, Computer Use, plugin updates — gains a significant market advantage.

3. **Multi-agent orchestration is moving from research to production.** Qwen's fleet RFC, Gemini's subagent observability work, Codex's nested-exec session tracking, and Copilot's parallel subagent rate-limit issues all converge: teams are running multi-agent architectures now, and the pain is visibility, depth control, and accurate completion semantics.

4. **MCP is the integration fabric, but it is not production-ready yet.** OAuth refresh loops, hardcoded timeouts, fail-closed interim policies, and stale connection pools appear across Copilot, Gemini, and Codex simultaneously. Expect MCP resilience tooling to become a differentiator.

5. **Enterprise governance complexity is exploding.** Policy-driven model blocking, org-level verification, entitlement-tier bugs, and managed settings are now core operational concerns — not edge cases. Tools that surface clear entitlement state and predictable policy enforcement will win procurement.

6. **Context budget is an operational crisis, not a UX nicety.** Compaction loops, unbounded part-table growth, 5 MB hard limits, and token-waste from non-AST-aware reads are costing teams real work. Expect AST-aware tooling, smarter compaction, and budget-aware context plugins to be the next wave of ecosystem add-ons.

7. **Security is moving from "capability" to "trust prerequisite."** SSRF fixes, prompt-integrity concerns (spoofed system reminders), sandbox escape hardening, and OAuth hygiene are all landing in the same week. For agentic tools that execute shell commands, security posture will be a purchase blocker.

8. **TUI depth is a differentiator.** From Pi's legacy-terminal compatibility and fullscreen search to OpenCode's session-scoped drafts and Claude Code's keybinding configurability, the terminal UX is being treated as a first-class product surface — not a fallback.

**Bottom line for decision-makers:** If you need enterprise governance and the broadest ecosystem, Claude Code remains the default; Copilot CLI is the managed-sandbox alternative. For agentic desktop automation, Codex is the bet to watch (if Windows reliability improves). Gemini CLI offers the strongest security and evaluation discipline.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-11

## 1. Top Skills Ranking

Most-discussed PRs by comment activity, all currently open.

1. **[#1298 — skill-creator: fix `run_eval.py` always reporting 0% recall](https://github.com/anthropics/skills/pull/1298)**  
   A critical fix for the skill-creator evaluation loop: the eval artifact is not installed as a real skill, so `run_eval.py` reports `recall=0%` for every description. Discussion centers on Windows subprocess handling, trigger detection, and parallel worker behavior.  
   Status: Open

2. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
   Adds typographic quality control for generated documents: orphan lines, widow paragraphs, and numbering misalignment. Highly relevant to any document-producing skill.  
   Status: Open

3. **[#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**  
   Fixes 8 case mismatches (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break the PDF skill on case-sensitive filesystems.  
   Status: Open

4. **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
   Adds OpenDocument support: creating/filling `.odt`/`.ods` files and converting ODT to HTML. Triggered by mentions of ODT, ODS, ODF, or LibreOffice.  
   Status: Open

5. **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**  
   Rewrites the frontend-design skill to make instructions concrete, actionable, and executable within a single conversation.  
   Status: Open

6. **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**  
   Two meta-skills that evaluate Claude Skills across structure, documentation, and security dimensions. Directly relevant to community trust concerns.  
   Status: Open

7. **[#541 — fix(docx): prevent tracked change `w:id` collision](https://github.com/anthropics/skills/pull/541)**  
   Fixes document corruption when the DOCX skill adds tracked changes to files with existing bookmarks. Root cause is a shared OOXML ID space.  
   Status: Open

8. **[#539 — fix(skill-creator): warn on unquoted YAML descriptions](https://github.com/anthropics/skills/pull/539)**  
   Adds pre-parse validation for unquoted description fields containing `:`, preventing silent YAML truncation in skill frontmatter.  
   Status: Open

---

## 2. Community Demand Trends

The most active issues reveal several strong demand clusters:

- **Security and trust boundaries** — [#492](https://github.com/anthropics/skills/issues/492) is the highest-commented issue: community skills distributed under the `anthropic/` namespace create trust-boundary abuse risk. This is the clearest signal of demand for skill provenance and security review.
- **Org-level skill sharing** — [#228](https://github.com/anthropics/skills/issues/228) requests direct org-wide sharing instead of manual `.skill` file transfer. Demand for skill distribution infrastructure is high.
- **Reliable skill authoring/evaluation tooling** — [#556](https://github.com/anthropics/skills/issues/556) and [#1169](https://github.com/anthropics/skills/issues/1169) document the `recall=0%` skill-creator issue, which has driven multiple PRs. The community wants trustworthy evaluation loops, not just new skills.
- **Context-window efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487) reports a skill injecting ~156k tokens in one tool call. Demand for lightweight, lazy-loading skills is emerging.
- **New skill proposals** — [#412](https://github.com/anthropics/skills/issues/412) proposes agent-governance skills, [#1329](https://github.com/anthropics/skills/issues/1329) proposes compact-memory notation, and [#1385](https://github.com/anthropics/skills/issues/1385) proposes a reasoning quality-gate pipeline. The community is moving toward meta-skills for agent state, safety, and output verification.
- **Duplicate/package hygiene** — [#189](https://github.com/anthropics/skills/issues/189) highlights duplicate skills between plugins, showing demand for curated, non-overlapping skill packages.

---

## 3. High-Potential Pending Skills

These open PRs have recent activity and address clear community needs; they may land soon.

1. **[#1367 — Add self-audit skill: mechanical verification + reasoning quality gate](https://github.com/anthropics/skills/pull/1367)**  
   Audits AI output before delivery: first verifies claimed files exist, then applies a four-dimension reasoning review. Aligns with the broader quality-gate demand.

2. **[#1479 — Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)**  
   Addresses the lifecycle gap for planning artifacts. Open and recently updated; likely to gain maintainer attention.

3. **[#1302 — Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**  
   A self-contained color expertise skill covering naming systems, color spaces, and usage guidance. Recent updates suggest active iteration.

4. **[#525 — Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**  
   Integrates with `pyxel-mcp` for retro/pixel-art/8-bit game creation. Long-lived PR with recent updates.

5. **[#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**  
   Covers testing philosophy, unit testing, React Testing Library, and broader testing stack patterns. A high-demand skill that is still open.

6. **[#83 — Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
   Would directly address the trust/security concerns raised in issue #492. High potential if maintainers prioritize ecosystem safety.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand at the Skills level is not for any single domain skill, but for **meta-capabilities and infrastructure: secure skill provenance, reliable skill evaluation, lifecycle management, and lightweight context-efficient design**.

---

# Claude Code Community Digest — 2026-08-11

## 1. Today's Highlights
Claude Code shipped v2.1.227 with fixes for a subscription-tier feature-flag bug that could wrongly gate Fable for Max plan users, plus a fix for Bash command failures under `claude-code-action`. However, a new regression report claims 2.1.227 interactive sessions no longer write transcript JSONL, which could affect auditability and session history. Meanwhile, cross-surface conversation sync between CLI and desktop remains the most upvoted open feature request.

## 2. Releases
**v2.1.227** ([release notes](https://github.com/anthropics/claude-code/releases))
- Fixed feature flags being evaluated without the user's subscription tier when a session started with an expired login token; this could wrongly prompt Max plan users to enable usage credits for Fable.
- Fixed every Bash command failing under `claude-code-action` with a truncated `allowed_no…` error.

## 3. Hot Issues
- [#84352 — CVP-approved Claude.ai organization still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352) · 32 comments. A previously approved org is flagged as “Under review” in the Verification Portal and still gets blocked in Claude Code. High community engagement; raises trust/enterprise governance concerns.
- [#28791 — Sync conversation history between CLI and Claude Code desktop app](https://github.com/anthropics/claude-code/issues/28791) · 120 👍. The most upvoted open feature request: users want seamless CLI ↔ desktop history continuity. Community expects this to be a first-class product capability.
- [#15881 — Seamless session sharing between Claude Code and Claude Desktop](https://github.com/anthropics/claude-code/issues/15881) · 60 👍. Similar to #28791, focused on sharing context without manual export/import. Strong demand for cross-surface workflows.
- [#80749 — Fable 5 gated behind “requires usage credits” in interactive TUI on Max plan](https://github.com/anthropics/claude-code/issues/80749) · Closed. A billing/entitlement regression where Max plan users were incorrectly prompted for credits. Important because it points to subscription-tier evaluation bugs.
- [#67585 — Cowork stale-cache corruption under Claude Fable 5: host writes clean, sandbox read truncates](https://github.com/anthropics/claude-code/issues/67585) · 7 comments. Detailed data-loss bug report with a full diagnosis; sandbox read view diverges from disk state. Significant for workflows relying on Cowork.
- [#85665 — 2.1.227: interactive sessions never write transcript JSONL (regression from 2.1.226)](https://github.com/anthropics/claude-code/issues/85665) · New. Headless `-p` works, but interactive sessions lose transcript persistence — a serious regression for audit/history.
- [#85666 — Killed sandboxed command leaks SOCKS socket; main thread spins on EPIPE at 100%+ CPU](https://github.com/anthropics/claude-code/issues/85666) · New. A SIGKILLed sandboxed command leaks a socket, causing an infinite EPIPE loop and pegged CPU. Perf/correctness issue for long-running hosts.
- [#85663 — Windows: all install methods fail with “defines.json” Syntax Error referencing C:\Program Files\nodejs](https://github.com/anthropics/claude-code/issues/85663) · New. npm/ps1/cmd/winget all fail on Windows with a syntax error. Blocking new installs and updates.
- [#74636 — Spoofed “Note: file was modified... don't tell the user” system-reminder after Claude's own Write/Edit calls](https://github.com/anthropics/claude-code/issues/74636) · 5 comments. A false system-reminder appearing in tool results is a prompt-integrity/security concern, potentially used for injection-like confusion.
- [#41984 — Frequent premature compaction + infinite loop + prompt freezing with Opus 4.6 on 1M context](https://github.com/anthropics/claude-code/issues/41984) · Closed. Persistent reports of context compaction loops and freezes; significant UX/performance impact for long-session users.

## 4. Key PR Progress
Only 3 PRs were updated in the last 24 hours, so this section is limited to the current snapshot.

- [#34951 — feat: add automatic GitHub/GitLab detection and GitLab support for /code-review](https://github.com/anthropics/claude-code/pull/34951) · Open. Adds multi-platform `code-review` support with automatic platform detection, including self-hosted GitLab. Addresses issue #26932; long-lived PR still awaiting review.
- [#85464 — plugins: add entroly-context for budget-aware context management](https://github.com/anthropics/claude-code/pull/85464) · Closed. New community plugin that uses Entroly to select context when codebases exceed the context window — demonstrates continued ecosystem interest in context budgeting.
- [#9262 — docs: enforce task tool and model metadata](https://github.com/anthropics/claude-code/pull/9262) · Closed. Documentation-only change requiring Task tool usage for context isolation and documenting `claude-3-5-haiku-latest` metadata.

## 5. Feature Request Trends
- **Cross-surface session continuity**: Users consistently request syncing/sharing conversation history between CLI, Claude Code desktop, and Claude Desktop (#28791, #15881). This is the dominant feature direction.
- **Configurable TUI/keybindings**: Requests for opt-in submit key behavior (`Enter` vs `Mod+Enter`) and the ability to disable session switching (#74655, #85667) show demand for more terminal ergonomics.
- **Context and budget management**: Community plugins (e.g., entroly-context) and requests for skills to opt out of post-compaction replay (#85138) point to growing need for explicit control over context lifecycle and compaction.
- **Remote/SaaS integration polish**: Concerns around CVP approval state, GitHub App re-auth, and SSH remote file handling (#84352, #85661, #78493) suggest enterprise/remote users want better identity and environment handling.

## 6. Developer Pain Points
- **Windows instability**: Multiple recent reports — GPU process crashes, fullscreen TUI corruption form child-process output, and install failures with `defines.json` (#85663, #85651, #83744) — indicate Windows remains a rough edge.
- **Entitlement/auth inconsistencies**: Bugs where Max users are prompted for credits, CVP-approved orgs still get blocks, or reconnect flows silently fail (#80749, #84352, #85661) erode trust in billing/verification.
- **Data loss and missing transcripts**: Transcripts not written in 2.1.227 interactive sessions (#85665) and Cowork sandbox cache divergence (#67585) are high-severity issues for teams relying on session logs.
- **Performance regressions and hangs**: CPU-spinning socket leaks (#85666), premature compaction loops (#41984), and sandboxed process leaks hurt long-running and background-task workflows.
- **Prompt/reminder integrity**: Spoofed system-reminder text (#74636) raises concerns about tool-stream trustworthiness, especially in automated or agentic pipelines.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-11

## Today's Highlights

Two new Rust alpha releases were published in the last 24 hours, though without detailed changelog notes. Community attention remains heavily focused on Windows app reliability, Computer Use/browser-use bugs, and MCP/auth regressions, while maintainers are landing a steady wave of PRs around image handling, Windows sandbox behavior, MCP form support, and telemetry hygiene.

## Releases

- **rust-v0.148.0-alpha.6** — Published; no additional release notes provided.
- **rust-v0.147.0-alpha.6.6** — Published; no additional release notes provided.

## Hot Issues

**[Windows] Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources**  
[Issue #20214](https://github.com/openai/codex/issues/20214) — The top-voted issue in the report with 93 comments and 81 👍. Users report persistent UI freezes on capable hardware, making the desktop app effectively unusable for some Plus subscribers.

**Codex extension fails to start: "The extension couldn't load its resources"**  
[Issue #37458](https://github.com/openai/codex/issues/37458) — 31 comments. A Windows/VSCode blocker where the Codex panel cannot initialize after opening VSCode, breaking the extension workflow.

**Windows Computer Use reuses a stale node_repl exec context across JS calls**  
[Issue #37013](https://github.com/openai/codex/issues/37013) — 18 comments. Computer Use on Windows works only until the first JS execution finishes; subsequent `node_repl/js` calls fail because the old `@oai/sky` Windows helper transport is reused.

**Computer Use on Windows fails during app/window discovery with 0x80070003**  
[Issue #37383](https://github.com/openai/codex/issues/37383) — 13 comments. Pro users on Windows 11 cannot complete app/window discovery, blocking Computer Use entirely.

**Codex App notification doesn't work when using remote connection**  
[Issue #20930](https://github.com/openai/codex/issues/20930) — 10 comments, 16 👍. Users expect turn-completion notifications from the desktop app when connected to remote Linux hosts, but no notification appears.

**[Windows] Codex App exits after task completion when Browser Use session tears down**  
[Issue #36645](https://github.com/openai/codex/issues/36645) — 8 comments. The desktop app quits entirely after a Browser Use task completes and the session tears down.

**Code mode can report completion with live nested exec sessions but no model-visible handles**  
[Issue #35613](https://github.com/openai/codex/issues/35613) — 6 comments. A correctness concern: Code mode says it is done while nested exec sessions are still alive, and the model has no handle to those sessions.

**[macOS][regression] Desktop cannot resume Remote Control / CLI thread: `already has an active writer`**  
[Issue #37403](https://github.com/openai/codex/issues/37403) — 5 comments, 4 👍. A regression introduced after the August 7 update breaks resuming CLI threads from the desktop or via Remote Control.

**gpt-5.6-sol: "Script completed" is reported while the nested shell session is still running**  
[Issue #34866](https://github.com/openai/codex/issues/34866) — 5 comments. Users with gpt-5.6-sol see early completion messages while underlying shell processes continue running, leading to confusing/incorrect state.

**Restore GPT-5.6 Sol's 372k Codex context window, or provide an opt-in setting**  
[Issue #34619](https://github.com/openai/codex/issues/34619) — 5 comments but 18 👍. A popular feature request asking for the large context window back, or at least an explicit user opt-in.

## Key PR Progress

**[#37902](https://github.com/openai/codex/pull/37902): Defer `view_image` processing to history insertion**  
Passes image bytes through unchanged for direct and code-mode calls, leaving decoding/resizing to the shared history-insertion path.

**[#37892](https://github.com/openai/codex/pull/37892): Validate images before returning `view_image` output**  
Adds decoding/validation in the `view_image` handler and returns clear errors for invalid or unsupported image data.

**[#37891](https://github.com/openai/codex/pull/37891): Use thread configuration for `app/read`**  
Adds an optional `threadId` parameter so `app/read` loads the thread's effective configuration before feature gating, workspace policy, and plugin attribution.

**[#37895](https://github.com/openai/codex/pull/37895): Add configurable Responses API request metadata**  
Adds `responses_api_metadata` for product-owned key/value metadata on every Responses API turn, including parent and subagent requests.

**[#37896](https://github.com/openai/codex/pull/37896): Add hermetic Windows SDK and MSVC runtime repositories**  
Pins Windows SDK and MSVC runtime repos for x64/arm64, with explicit EULA acceptance via `--repo_env`.

**[#37889](https://github.com/openai/codex/pull/37889): Ignore Unix socket proxy settings on Windows**  
Prevents macOS-only Unix socket proxy permissions from clamping Windows proxy listeners to loopback or emitting warnings.

**[#37878](https://github.com/openai/codex/pull/37878): Add configurable goal token budget limits**  
Introduces `goals.max_goal_token_budget` as a positive-integer config option and uses it as the default budget for new goals.

**[#37875](https://github.com/openai/codex/pull/37875): Honor the configured Windows sandbox level for managed networking**  
Fixes managed networking to select the Windows sandbox backend purely from `WindowsSandboxLevel` instead of implicitly using the elevated backend.

**[#37867](https://github.com/openai/codex/pull/37867): Reject duplicate resolved paths in `apply_patch`**  
Rejects patches containing multiple operations that resolve to the same file, such as `duplicate.txt` and `./duplicate.txt`.

**[#37864](https://github.com/openai/codex/pull/37864): Support MCP form input in full-access user threads**  
Recognizes the `openai/standard-form-input` client extension and surfaces non-approval forms even when tool permissions are auto-approved.

## Feature Request Trends

- **Larger or restorable context windows** — Users want GPT-5.6 Sol's 372k context window back or an opt-in setting to restore it.  
  [Issue #34619](https://github.com/openai/codex/issues/34619)

- **Desktop UX configurability** — Requests include disabling hover-triggered sidebar reveal, fixing sidebar ordering after pin/unpin, and addressing scrolling regressions.  
  [Issue #33362](https://github.com/openai/codex/issues/33362), [Issue #35090](https://github.com/openai/codex/issues/35090), [Issue #37884](https://github.com/openai/codex/issues/37884)

- **Remote/automation continuity** — Community interest in same-thread heartbeat creation, reliable remote pairing across Android/Linux/macOS, and notifications over remote connections.  
  [Issue #35601](https://github.com/openai/codex/issues/35601), [Issue #37403](https://github.com/openai/codex/issues/37403), [Issue #37897](https://github.com/openai/codex/issues/37897)

- **Deeper agent observability** — Requests for pre-execution inspection of delegated instructions in Multi-Agent V2, voice screen context for active Codex threads, and better triage tooling for the huge issue backlog.  
  [Issue #33284](https://github.com/openai/codex/issues/33284), [Issue #37880](https://github.com/openai/codex/issues/37880), [Issue #37873](https://github.com/openai/codex/issues/37873)

## Developer Pain Points

- **Windows app reliability** — Freezes, stutters, full crashes, and in some cases entire weekly Pro usage consumed by repeated failures.  
  [Issue #20214](https://github.com/openai/codex/issues/20214), [Issue #35606](https://github.com/openai/codex/issues/35606), [Issue #30906](https://github.com/openai/codex/issues/30906)

- **Windows Computer Use/Browser Use instability** — Stale exec contexts, app/window discovery failures, and app exits after Browser Use teardown are recurring blockers.  
  [Issue #37013](https://github.com/openai/codex/issues/37013), [Issue #37383](https://github.com/openai/codex/issues/37383), [Issue #36645](https://github.com/openai/codex/issues/36645)

- **WebSocket disconnect handling** — Broken-pipe disconnects leave turns stuck in "Thinking" or tasks permanently hung.  
  [Issue #37894](https://github.com/openai/codex/issues/37894), [Issue #32555](https://github.com/openai/codex/issues/32555)

- **MCP/OAuth friction** — OAuth reauthentication loops, trailing-slash issuer mismatches, and repeated access-grant requests after authorization are hurting MCP server workflows.  
  [Issue #37219](https://github.com/openai/codex/issues/37219), [Issue #37373](https://github.com/openai/codex/issues/37373), [Issue #37549](https://github.com/openai/codex/issues/37549)

- **Execution state mismatches** — Reports of "Script completed" while sessions still run, or Code mode finishing with live nested exec sessions, undermine trust in completion status.  
  [Issue #34866](https://github.com/openai/codex/issues/34866), [Issue #35613](https://github.com/openai/codex/issues/35613)

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-11

## Today's Highlights

Agent reliability continues to dominate the issue tracker: the most-discussed bug ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), 12 comments) shows subagents that hit `MAX_TURNS` are falsely reported as successful, hiding real interruptions. On the security front, a serious SSRF fix ([#28557](https://github.com/google-gemini/gemini-cli/pull/28557)) landed for `web-fetch.ts`, plus two OAuth-related PRs for MCP token refresh and Cloud Workstations redirects. The nightly release train continued with v0.56.0-nightly.20260810.gcf22ac7e8.

## Releases

- [v0.56.0-nightly.20260810.gcf22ac7e8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260810.gcf22ac7e8) — Routine nightly build; no feature notes beyond the standard changelog diff vs. the previous nightly.

## Hot Issues

1. [**#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success**](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, bug, 12 comments)  
   A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the turn limit before doing any analysis. This hides real failures and can corrupt downstream workflows. The top-voted discussion this cycle.

2. [**#21409 — Generalist agent hangs**](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, bug, 8 👍)  
   The CLI hangs indefinitely (up to an hour) whenever it defers to the generalist agent — even for trivial tasks like folder creation. Workaround: instructing the model never to use subagents. High community impact.

3. [**#25166 — Shell command stuck with "Waiting input" after completion**](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, bug, 3 👍)  
   Simple, non-interactive CLI commands remain shown as active with "Awaiting user input" long after finishing. Core-shell reliability issue that forces manual intervention.

4. [**#26522 — Auto Memory retries low-signal sessions indefinitely**](https://github.com/google-gemini/gemini-cli/issues/26522) (P2, bug)  
   Sessions the extraction agent decides not to read are never marked processed, so they resurface repeatedly — wasting background compute and polluting the memory pipeline.

5. [**#26525 — Add deterministic redaction and reduce Auto Memory logging**](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, security/bug)  
   Transcript content is sent to the extraction model *before* prompt-based redaction occurs, and the service may log existing skill content. Privacy-sensitive; part of the broader memory-quality epic ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516)).

6. [**#21968 — Gemini does not use skills and sub-agents enough**](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, bug)  
   Anecdotally, the model ignores custom skills (e.g., gradle/git) and subagents unless explicitly instructed. Users want autonomous adoption of configured capabilities.

7. [**#21983 — Browser subagent fails in Wayland**](https://github.com/google-gemini/gemini-cli/issues/21983) (P1, bug)  
   Browser agent terminates with `GOAL` on Wayland sessions, likely a display-server interaction issue. Linux desktop users are affected.

8. [**#24246 — 400 error with > 128 tools**](https://github.com/google-gemini/gemini-cli/issues/24246) (P2, bug)  
   The CLI hits a 400 error when tool count exceeds limits; users expect smarter scoping of enabled tools rather than hard failure.

9. [**#22093 — (Sub)agents running without permission since v0.33.0**](https://github.com/google-gemini/gemini-cli/issues/22093) (P2, bug)  
   Users with agents mode disabled still see subagents (e.g., generalist) invoked after updating. Config-regression bug that erodes trust in permission settings.

10. [**#22672 — Agent should stop/discourage destructive behavior**](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, bug)  
    The model occasionally uses `git reset` / `--force` and risky DB operations when safer alternatives exist. Users want guardrails encouraging least-destructive commands.

Also notable: [**#22267**](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent ignores `settings.json` overrides like `maxTurns`; [**#20079**](https://github.com/google-gemini/gemini-cli/issues/20079) — symlinked agent files in `~/.gemini/agents/` are not recognized; [**#22465**](https://github.com/google-gemini/gemini-cli/issues/22465) — CLI gets stuck at interactive prompts (e.g., Vite scaffolding).

## Key PR Progress

1. [**#28557 — fix: resolve SSRF vulnerability in web-fetch.ts**](https://github.com/google-gemini/gemini-cli/pull/28557) (P1, security)  
   Replaces sync `isPrivateIp()` with async DNS resolution so hostnames resolving to `169.254.169.254` or internal ranges are blocked. Fixes a real SSRF hole in the web fetch tool.

2. [**#28481 — fix(core): refresh MCP OAuth tokens with the stored client ID**](https://github.com/google-gemini/gemini-cli/pull/28481) (P1, security, closed)  
   Fixes MCP OAuth refresh failures for servers configured via OAuth discovery + dynamic client registration — refresh was failing before network I/O and deleting stored credentials, forcing re-auth every time.

3. [**#28734 — fix(core): handle EACCES in resolveToRealPath**](https://github.com/google-gemini/gemini-cli/pull/28734) (P1)  
   Prevents a CLI startup crash on macOS when Seatbelt sandboxing blocks `realpathSync` inside a Git repo. Previously only `ENOENT`, `EISDIR`, `ENAMETOOLONG`, and `ENOTDIR` were recovered.

4. [**#28730 — fix(core,cli): resolve false model capacity exhaustion**](https://github.com/google-gemini/gemini-cli/pull/28730)  
   Fixes spurious "model capacity exhausted" errors, corrects the client-side quota lookup mapping, and preserves the "Keep trying" UI option during transient capacity surges.

5. [**#28764 — fix(vscode-ide-companion): track all activate() Disposables**](https://github.com/google-gemini/gemini-cli/pull/28764) (P2)  
   A comma-expression bug meant only the last Disposable of each pair was tracked, breaking `gemini.diff.accept` and related command cleanup on extension deactivation.

6. [**#28688 — fix(core): dynamically resolve Cloud Workstations proxy redirect URI**](https://github.com/google-gemini/gemini-cli/pull/28688) (P3, security)  
   OAuth flows now work from Cloud Workstations VMs by resolving the proxy redirect URI dynamically instead of hardcoding `localhost:<port>`.

7. [**#28729 — fix(core): resolve swallowed directory mismatch in IDE connections**](https://github.com/google-gemini/gemini-cli/pull/28729)  
   Fixes CLI-to-IDE companion connection failures under Cider and VS Code remote/fork setups where FUSE or virtual directory paths differ from the workspace path.

8. [**#28305 — feat(evals): add tool call formatter and integrate failure summaries**](https://github.com/google-gemini/gemini-cli/pull/28305) (P3, help wanted)  
   Failed behavioral evals now print a compact, numbered timeline of the agent's tool calls (arguments, status, errors) directly in the console output — a big debugging win for eval authors.

9. [**#28344 — Feat/eval validate**](https://github.com/google-gemini/gemini-cli/pull/28344) (P3, help wanted)  
   Adds `eval:validate`, a static analysis CLI that checks eval source files against 9 rules and exits non-zero on violations — suitable for CI gating.

10. [**#28624 — fix(core): prevent boolean thought parts leaking as [Thought: true]**](https://github.com/google-gemini/gemini-cli/pull/28624) (P2)  
    Stops internal boolean `thought` fields from rendering as literal `[Thought: true]` text in model output. Fixes the user-visible artifact from [#23525](https://github.com/google-gemini/gemini-cli/issues/23525).

Also merged: [**#28758**](https://github.com/google-gemini/gemini-cli/pull/28758) automated nightly version bump; [**#27283**](https://github.com/google-gemini/gemini-cli/pull/27283) bumps `ws` dependency to 8.20.1 (security maintenance); [**#28613**](https://github.com/google-gemini/gemini-cli/pull/28613) replaces stray `console.error` with `debugLogger` in the SDK.

## Feature Request Trends

- **AST-aware tooling**: Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) investigate AST-aware file reads, search, and codebase mapping to cut token noise and turn count.
- **Better agent self-control**: Users want the model to respect permissions more strictly ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), avoid destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and autonomously use configured skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Memory system hardening**: A cluster of issues ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) calls for deterministic redaction, quarantine of invalid patches, and process-state fixes in Auto Memory.
- **Browser agent resilience**: Requests for session takeover/lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and honoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Evaluation infrastructure**: Growing investment in component-level behavioral evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) with matching PR momentum (`eval:validate`, tool-call timeline formatter).
- **Subagent observability**: Trajectories should be visible/shareable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and included in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

## Developer Pain Points

- **Hangs and stuck states**: Recurring reports of the CLI hanging indefinitely — generalist agent deferral ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompts during scaffolding ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)). These block daily work and force manual kills.
- **Hidden failures**: Subagent interruptions are masked as successes ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and subagent context/trajectories are absent from bug reports and shares ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) — making debugging and trust difficult.
- **Permission & control regressions**: The v0.33.0 behavior where subagents ran despite disabled agent mode ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) mirrors broader user demand for predictable, least-privilege execution.
- **Tool/session limits**: Hard 400 errors beyond tool-count thresholds ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and model-created temp scripts scattered across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) create cleanup overhead.
- **Config & environment quirks**: Symlinked agent files silently ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), Browser Agent skipping `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and Wayland browser failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) — each forces non-obvious workarounds.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-08-11

### Today’s Highlights
v1.0.79 shipped with improved sandbox configuration visibility and new enterprise sandbox policy controls. The issue tracker remains dominated by enterprise model availability and MCP reliability problems, with multiple high-signal bugs around blocked Claude models, MCP handshake failures, and unrecoverable long-running sessions. No pull request activity was recorded in the last 24 hours.

### Releases
- **v1.0.79** (2026-08-10) — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.79)
  - The `/sandbox` configuration dialog now shows where sandbox settings are stored in `settings.json`.
  - Added support for the enterprise `allow-auto-only` policy so `/allow-all auto` works while full allow-all remains blocked.
  - Enterprise-managed sandbox policies can now enforce a proxy URL during credential/sandbox flows.

### Hot Issues
- **Sporadic policy blocking when retrieving models** — [#1595](https://github.com/github/copilot-cli/issues/1595) *(Open, 29 comments, 11 👍)*  
  Enterprise users with valid subscriptions and remaining quota are sometimes blocked from `/models` with “access denied by Copilot policy.” The high comment count suggests many organizations are affected.

- **Enabled organization models missing from catalogue** — [#4390](https://github.com/github/copilot-cli/issues/4390) *(Open, 2 comments, 3 👍)*  
  Models explicitly enabled by Copilot Business orgs, such as Claude Sonnet 5/Opus 5 and Kimi K3, do not appear in the CLI catalogue or are incorrectly reported as disabled.

- **All Claude models disabled under CLI model selection** — [#4422](https://github.com/github/copilot-cli/issues/4422) *(Open, 1 comment, 1 👍)*  
  Users report losing access to all Claude models overnight despite settings showing them enabled. Rolling back the CLI does not fix it, pointing to server-side policy or entitlement issues.

- **Windows plugin update fails while VS Code is running** — [#4095](https://github.com/github/copilot-cli/issues/4095) *(Open, 1 comment, 13 👍)*  
  `copilot plugin update` fails with “Access is denied (os error 5)” because the VS Code Copilot extension holds watcher handles on installed plugins. The high reaction count indicates broad Windows frustration.

- **Custom Agent YAML frontmatter should support reasoning effort** — [#2904](https://github.com/github/copilot-cli/issues/2904) *(Open, 4 comments, 19 👍)*  
  The most-upvoted feature request: allow per-agent `reasoning_effort` in `.agent.md`, not just a global `--effort` flag. Teams with multiple agents want cost/latency control per agent.

- **`explore` tool hardcodes `gpt-5.4-mini`, ignoring custom/DeepSeek API config** — [#3954](https://github.com/github/copilot-cli/issues/3954) *(Open, 2 comments, 3 👍)*  
  When a custom model endpoint is configured, the `explore` subagent still sends `gpt-5.4-mini`, breaking DeepSeek and other custom API setups.

- **Parallel explore subagent fan-out dies to per-model 429s** — [#4416](https://github.com/github/copilot-cli/issues/4416) *(Open, 0 comments)*  
  Parallel subagents all default to the same lightweight model (`claude-haiku-4.5`), hit tight burst limits, and have no backoff or automatic model switch despite `eligibleForAutoSwitch`.

- **`/compact` cannot recover a session after CAPI 5 MB limit** — [#4424](https://github.com/github/copilot-cli/issues/4424) *(Open, 0 comments)*  
  Once a session reaches the 5 MB CAPI Responses limit, normal prompts and `/compact` both fail, leaving no way to preserve and continue a long session.

- **MCP initialize handshake has fixed 60s budget and no retry** — [#4421](https://github.com/github/copilot-cli/issues/4421) *(Open, 0 comments)*  
  `npx`-launched stdio MCP servers fail roughly 29% of sessions after the hard-coded 60-second timeout, and the server is never respawned for the rest of the session.

- **Managed-settings interim fail-closed drops user MCP servers** — [#4419](https://github.com/github/copilot-cli/issues/4419) *(Open, 0 comments)*  
  During managed-settings resolution, the CLI installs an empty MCP allow-list (`[[]]`), temporarily rejecting user-configured MCP servers that register in that window — even for accounts with no managed policy.

### Key PR Progress
No pull requests were updated in the last 24 hours, so there is no PR progress to report.

### Feature Request Trends
- **Per-agent reasoning and model control** — Users want `.agent.md` to support reasoning effort, not just model selection ([#2904](https://github.com/github/copilot-cli/issues/2904), [#4345](https://github.com/github/copilot-cli/issues/4345)).
- **Configurable HUD / session visibility** — Users request a configurable status display and a GUI prompt composer to reduce input errors and make session state easier to inspect ([#4417](https://github.com/github/copilot-cli/issues/4417), [#4418](https://github.com/github/copilot-cli/issues/4418)).
- **Prompt caching and token-cost optimization** — Claude Sonnet users want visible prompt caching to reduce latency and cost on repeated contexts ([#3808](https://github.com/github/copilot-cli/issues/3808)).
- **MCP resilience controls** — Requests for configurable initialize timeouts, retries, and avoiding fail-closed interim policies ([#4421](https://github.com/github/copilot-cli/issues/4421), [#4419](https://github.com/github/copilot-cli/issues/4419)).
- **Smarter model fallback in subagents** — Auto-switch or configurable fallback when the default `explore` model is rate-limited or custom APIs are in use ([#4416](https://github.com/github/copilot-cli/issues/4416), [#3954](https://github.com/github/copilot-cli/issues/3954)).
- **Session compaction and recovery** — Tools to survive payload/size limits, including compacting sessions beyond 5 MB or V8 string limits ([#4424](https://github.com/github/copilot-cli/issues/4424), [#4325](https://github.com/github/copilot-cli/issues/4325)).

### Developer Pain Points
- **Enterprise entitlement/policy inconsistency** — Valid enterprise subscriptions are blocked from model discovery, and enabled models disappear from the catalogue ([#1595](https://github.com/github/copilot-cli/issues/1595), [#4390](https://github.com/github/copilot-cli/issues/4390), [#4422](https://github.com/github/copilot-cli/issues/4422)).
- **MCP handshake and connection fragility** — Fixed timeouts, dead pooled TCP connections, and interim fail-closed policies make MCP integrations unreliable ([#4421](https://github.com/github/copilot-cli/issues/4421), [#4419](https://github.com/github/copilot-cli/issues/4419), [#3257](https://github.com/github/copilot-cli/issues/3257)).
- **Unrecoverable long sessions** — Large `events.jsonl` files, 5 MB payload limits, and dropped kickoff prompts can permanently kill sessions ([#4325](https://github.com/github/copilot-cli/issues/4325), [#4424](https://github.com/github/copilot-cli/issues/4424), [#4423](https://github.com/github/copilot-cli/issues/4423)).
- **Subagent and parallel execution problems** — Tasks freeze, hit rate limits, and parallel tool responses arrive out of order, confusing agents ([#4306](https://github.com/github/copilot-cli/issues/4306), [#4416](https://github.com/github/copilot-cli/issues/4416), [#4420](https://github.com/github/copilot-cli/issues/4420)).
- **Windows-specific friction** — Plugin updates blocked by watcher handles and quoted paths not being stripped by `/cwd` ([#4095](https://github.com/github/copilot-cli/issues/4095), [#4426](https://github.com/github/copilot-cli/issues/4426)).
- **Hardcoded model routing** — Ignoring custom model endpoint configuration breaks non-default providers like DeepSeek ([#3954](https://github.com/github/copilot-cli/issues/3954)).
- **Resource usage** — High CPU usage even when only waiting on background tasks ([#4415](https://github.com/github/copilot-cli/issues/4415)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-11

## Today's Highlights
No new releases or pull requests landed in the last 24 hours. The community's attention remains focused on Issue #1283, which proposes a persistent Memory System for Kimi Code CLI, with 31 comments and an active discussion around cross-session context retention. This issue appears to be the primary signal for upcoming user expectations around long-running agentic workflows.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
Only one issue was updated in the last 24 hours:

- **[#1283 [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  Author: CatKang · Created: 2026-02-27 · Updated: 2026-08-10 · Comments: 31  
  **Why it matters:** This is the clearest community demand for persistent memory in Kimi Code CLI. It asks for automatic memory (AI-managed notes) and manual memory (user-defined instructions) so the tool can retain context, project patterns, and user preferences between sessions. With 31 comments, the discussion is active and likely reflects real friction in day-to-day usage. Community reaction suggests this feature is considered critical for making the CLI more useful as a long-running coding assistant.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
The latest activity centers on a single major direction: **persistent memory and context retention across sessions**. Users want Kimi Code CLI to be able to remember prior conversations, project conventions, and user preferences without requiring repeated manual setup. Both automatic memory and explicit user-defined instructions are requested, indicating a desire for a hybrid memory model rather than a simple cache.

## Developer Pain Points
- **Loss of context between sessions:** The main recurring frustration is that the CLI forgets project history, prior decisions, and user preferences, forcing developers to re-explain the same context.
- **Lack of persistent project-level configuration:** The request for manual memory suggests users want a stable, file-based or tool-managed way to persist instructions across sessions.
- **Desire for AI-managed memory:** Beyond manual config, users expect the CLI to autonomously accumulate and apply relevant memory, reducing repetitive prompting.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-11

## Today’s Highlights
OpenCode shipped **v1.18.16** with more tolerant config parsing and desktop project-menu improvements. On the development side, the project is moving quickly toward **v2 desktop beta builds**, an **embedded web UI**, and core refactors that remove filesystem side effects from low-level modules. Community attention remains fixed on performance regressions — especially the high-CPU issue (#30086) — and on desktop/TUI state-handling bugs.

## Releases

### v1.18.16
- **Core bugfixes**
  - Unknown top-level config fields are now ignored instead of failing config parsing.
  - Projects opened from Home are registered so they are available to the rest of the app.
- **Desktop improvements**
  - Right-click in Home now opens the project menu.
  - Fallback listing behavior improved (minor fix).

No breaking changes or major features were documented.

## Hot Issues

- [#30086 High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086) — [OPEN]  
  Still the most active issue: 46 comments and 22 👍. Users report CPU usage has spiked so much that 10+ concurrent sessions are no longer viable; even 3 sessions can cause sluggish mouse response.

- [#26220 Infinite loop after tool calls complete](https://github.com/anomalyco/opencode/issues/26220) — [OPEN]  
  OpenCode enters an infinite loop after tool calls in “Zen/big-pickle” builds. The process stays alive but stops responding, blocking normal agentic workflows.

- [#40958 DeepSeek V4 Flash Free metadata shows 200K context instead of 1M](https://github.com/anomalyco/opencode/issues/40958) — [OPEN]  
  Models.dev metadata caps DeepSeek V4 Flash Free at 200K context despite native 1M support. Users view this as an avoidable limitation for long-context coding.

- [#35432 Config `tool_call: false` does not disable tools](https://github.com/anomalyco/opencode/issues/35432) — [OPEN]  
  The model-level config is ignored by the prompt loop; tool calls are still sent with `tool_choice: "auto"`, breaking providers that do not support tool calls.

- [#40816 Edit tool snapshots cause unbounded part-table growth](https://github.com/anomalyco/opencode/issues/40816) — [OPEN]  
  Full-file before/after snapshots are stored per edit and every prompt hydrates all parts, making long-lived sessions progressively slower.

- [#38458 SSE stream closes mid-turn](https://github.com/anomalyco/opencode/issues/38458) — [OPEN]  
  `opencode serve` SSE is not persistent as documented, which breaks external monitoring and orchestration use cases.

- [#40866 Desktop input fields lose focus](https://github.com/anomalyco/opencode/issues/40866) — [OPEN]  
  On Windows, dialog and settings inputs are effectively unusable: Tab and click cannot move focus between fields.

- [#41614 TUI drafts should persist per session](https://github.com/anomalyco/opencode/issues/41614) — [OPEN]  
  Unfinished TUI messages carry over when switching sessions. Drafts should be scoped to the original session; related issue #36203 describes the opposite bug where text is cleared on switch-back.

- [#41598 `/undo` and “Revert Message” only roll back chat history, not file edits](https://github.com/anomalyco/opencode/issues/41598) — [CLOSED]  
  Desktop users expect undo to revert code changes, but only conversation history is rolled back — creating a dangerous mismatch between what the UI says and what happened on disk.

- [#10517 VS Code plugin install instructions ambiguous](https://github.com/anomalyco/opencode/issues/10517) — [CLOSED]  
  Still one of the most-upvoted docs/UX issues (24 👍). Users continue to struggle with automatic install and cannot reliably identify the correct VS Code extension to install manually.

## Key PR Progress

- [#14743 fix(cache): improve Anthropic prompt cache hit rate](https://github.com/anomalyco/opencode/pull/14743) — [OPEN]  
  Stabilizes system-prompt split and tool definitions to fix cross-repo/cross-session cache misses. Closes #5416 and #5224.

- [#41626 feat(desktop): publish v2 beta builds](https://github.com/anomalyco/opencode/pull/41626) — [OPEN]  
  Sets up desktop beta releases from the v2 branch with the V2 CLI bundled; V2 npm stays on the `next` channel.

- [#41525 feat(cli): embed web UI](https://github.com/anomalyco/opencode/pull/41525) — [OPEN]  
  Embeds the web app in Bun/Node CLI distributions, adds `opencode web` and a TUI `/web` command, and serves UI + API together from `opencode serve`.

- [#27554 feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554) — [OPEN]  
  Adds `/connect` discovery for local OpenAI-compatible servers via mDNS and automatic model discovery. Closes #6231 and #27553.

- [#37834 fix(desktop): handle async EPIPE on process.stderr](https://github.com/anomalyco/opencode/pull/37834) — [CLOSED]  
  Prevents desktop crashes when the parent terminal is closed while the app is still running.

- [#41625 fix(app): wire desktop menu accelerators to renderer commands](https://github.com/anomalyco/opencode/pull/41625) — [OPEN]  
  Fixes Windows/Linux desktop menu accelerators when menus are rendered in-app instead of natively. Closes #41592.

- [#41619 fix(util): no filesystem side effects at global module load](https://github.com/anomalyco/opencode/pull/41619) — [CLOSED]  
  Removes top-level awaits and disk writes from `@opencode-ai/util/global`, improving startup behavior and enabling Cloudflare workerd.

- [#41622 refactor(core): skill service stores values, config plugin owns the filesystem](https://github.com/anomalyco/opencode/pull/41622) — [CLOSED]  
  Makes the skill service a pure registry and moves filesystem scanning/watching into the config plugin — a good architectural cleanup.

- [#41618 refactor(core): move plugin discovery and watching to the config side](https://github.com/anomalyco/opencode/pull/41618) — [CLOSED]  
  `PluginSupervisor` now handles only import/selection/lifecycle; filesystem discovery moves to config, reducing core service responsibilities.

- [#41620 fix(provider): scope DeepSeek V4 Flash sampling defaults](https://github.com/anomalyco/opencode/pull/41620) — [OPEN]  
  Sets `top_p: 0.95` for versioned/rolling DeepSeek V4 Flash aliases while preserving defaults for third-party and self-hosted deployments.

## Feature Request Trends

- **Copy message as raw markdown**  
  Requested repeatedly in #14041 and again in #41609. Users want a native action to copy LLM responses as markdown instead of manually selecting text.

- **Session-scoped TUI state**  
  #41614 and #36203 both ask for unsent drafts to be scoped to a session, preserved on switch, and restored on return. #41560 also asks that focused files/scroll state survive tab switches.

- **Worktree-based workspace switching**  
  #36048 requests CLI-level worktree support (`opencode worktree create|list|remove|...`) with stash-based switching, indicating growing multi-workspace workflow demands.

- **Desktop/white-label configurability**  
  #38010 asks for an opt-in way to disable the exit splash for embedded/white-label usage, pointing to broader interest in customizing the desktop app surface.

- **Local/LAN provider discovery**  
  PR #27554 and its linked issues show demand for zero-config onboarding of local OpenAI-compatible endpoints and automatic model discovery.

- **Model metadata and defaults validation**  
  #40958 and #41620 both highlight that model metadata/aliases need better scoping: correct context limits and sampling parameters should be applied per model/alias without breaking third-party providers.

## Developer Pain Points

- **Performance regressions in multi-session and long-lived usage**  
  #30086 (high CPU, 46 comments) plus #40816 (unbounded part-table growth) are the most painful recurring themes. #39339 also reports intermittent “internal server error” retries during normal analysis.

- **Config handling is inconsistent or leaks internal fields**  
  `tool_call: false` is ignored (#35432), agent `fallbacks`/`persona` are forwarded to the provider API and rejected (#41593), and Anthropic-via-Bedrock fails only through OpenCode when using an LLM proxy (#40797).

- **Desktop and TUI state bugs erode trust**  
  `/undo` does not revert file edits (#41598), Windows input fields lose focus (#40866), focused files jump back to the git overview when switching tabs (#41560), and drafts leak between sessions (#41614).

- **VS Code extension docs remain a recurring friction point**  
  Issues #10517, #16217, and #31500 all describe confusion around automatic install, manual install links, and extension-marketplace naming.

- **Billing/support escalation gaps**  
  #41557 and #41584 both report slow/no response from billing support for OpenCode Go, including refund requests. This is an operational concern for commercial users.

- **SSE/streaming reliability**  
  #38458 shows that SSE streams are not persistent as documented, hampering developers trying to build external orchestration and monitoring on top of `opencode serve`.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Today's Highlights

No new Pi release landed in the last 24 hours; the project is in a heavy bugfix/PR phase. Community attention is concentrated on TUI reliability (Alt+Enter interruptions, fullscreen search, scroll behavior) and provider correctness (Bedrock tool-call sanitization, Cloudflare AI Gateway support). The longest-running pain point remains WSL + GitHub Copilot login hanging (#6187), now with 21 comments.

## Releases

No new releases in the last 24 hours.

## Hot Issues

- [#6187 Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187) — WSL users can complete Copilot device auth, but the Pi client never detects it and hangs forever. Open for over a month with 21 comments, making it the most-discussed issue in this window.

- [#7855 Pi stops with "Response was truncated before completion."](https://github.com/earendil-works/pi/issues/7855) — Occurs randomly with OpenAI-compatible APIs, including local VLLM. The model/toolchain refuses to continue automatically, forcing manual prompting. Closed as no-action, but still a concern for long local generations.

- [#7850 GitHub Copilot login fails with 429 for organizations with many activated models](https://github.com/earendil-works/pi/issues/7850) — Device authorization succeeds, then Pi hits `429 Too Many Requests` during Copilot login. Impacts large orgs with 20+ available models; received 2 👍 from the community.

- [#7782 Invalid tool call from Bedrock poisoned pi session](https://github.com/earendil-works/pi/issues/7782) — A Bedrock-generated tool call with an empty key (`""`) was executed, persisted, and replayed on every turn, permanently bricking the session. A major session-integrity bug; PR #7882 addresses it.

- [#7876 Alt+Enter intermittently aborts the running task — 10ms StdinBuffer ESC timeout splits ESC+CR](https://github.com/earendil-works/pi/issues/7876) — In tmux/SSH without Kitty protocol, Alt+Enter arrives as `ESC+CR`; a 10ms timeout can flush the lone ESC and abort the active task. Addressed by PR #7899.

- [#7836 Edit fuzzy match misses lines with differences in whitespace length](https://github.com/earendil-works/pi/issues/7836) — `normalizeForFuzzyMatch` does not collapse whitespace runs, so small models fail valid edits when indentation differs. Open with 1 👍.

- [#7846 Unable to start 0.84.0, 0.84.1 with bun runtime](https://github.com/earendil-works/pi/issues/7846) — Crashing on startup with `TypeError: zlib.createZstdDecompress is not a function` under Bun. Blocks Bun-based installations; open with 1 👍.

- [#7791 Global Undici dispatcher inherits 16 KiB maxHeaderSize, causing UND_ERR_HEADERS_OVERFLOW](https://github.com/earendil-works/pi/issues/7791) — Pi installs `EnvHttpProxyAgent` globally without raising `maxHeaderSize`, so valid larger headers are rejected. An infrastructure-level bug affecting many providers.

- [#7861 Scroll position keeps jumping back while streaming long output](https://github.com/earendil-works/pi/issues/7861) — In the TUI, scrolling up during streaming repeatedly snaps back to the live bottom, making it impossible to review earlier tool output while generation continues.

- [#7915 Pi always adds `cd <project root>` to any bash command it executes](https://github.com/earendil-works/pi/issues/7915) — Unwanted `cd` prefix is added even when already at the project root; users find it noisy compared to Claude or Opencode behavior.

## Key PR Progress

- [#7913 feat(tui): add fullscreen transcript search](https://github.com/earendil-works/pi/pull/7913) — Adds `Ctrl+Shift+f` search over the transcript in fullscreen TUI mode, a highly requested navigation feature.

- [#7910 feat(coding-agent): add canonical message identity to markdown transformer context](https://github.com/earendil-works/pi/pull/7910) — Enables extension markdown transformers to correlate per-message state across stream, redraw, and restore renders. Closes #7828.

- [#7882 fix(ai): sanitize empty Bedrock tool argument keys](https://github.com/earendil-works/pi/pull/7882) — Preserves streamed tool arguments but strips empty property names when replaying to Bedrock; directly fixes the session-poisoning bug in #7782.

- [#7906 feat(coding-agent): add fullscreen fixed top bar](https://github.com/earendil-works/pi/pull/7906) — Adds a fullscreen-only top bar showing abbreviated cwd, git branch, context usage, and auto-compaction state.

- [#7901 feat(ai): AI Gateway transport over the Cloudflare AI binding](https://github.com/earendil-works/pi/pull/7901) — Implements the Cloudflare Workers AI Gateway transport requested in #7838, for Pi apps running inside Cloudflare Workers.

- [#7899 fix(tui): prevent split Alt+Enter from interrupting](https://github.com/earendil-works/pi/pull/7899) — Extends the ESC-sequence timeout from 10ms to 100ms when the Kitty protocol is unavailable, preventing accidental aborts in tmux/SSH.

- [#7904 fix(edit): normalize single-object edits argument to array](https://github.com/earendil-works/pi/pull/7904) — Accepts `{oldText, newText}` as well as `[{oldText, newText}]`, improving compatibility with models that wrap the edit tool arguments differently.

- [#7905 fix(config): refine pnpm detection and validate managed install before suggesting update command](https://github.com/earendil-works/pi/pull/7905) — Avoids false-positive pnpm detection inside `$PNPM_HOME` globals and only suggests a pnpm update command when the install is actually pnpm-managed.

- [#7903 feat(tui): add unbound single-line transcript scrolling actions](https://github.com/earendil-works/pi/pull/7903) — Adds `tui.altScreen.lineUp` and `lineDown` keybinding actions, unbound by default, for one-line viewport scrolling in fullscreen mode.

- [#7897 fix(coding-agent): inherit subagent session config](https://github.com/earendil-works/pi/pull/7897) — Makes subagents follow the current model/thinking config of the originating session rather than an arbitrary session’s last setting.

## Feature Request Trends

- **Cloudflare/edge integration**: Multiple requests around Cloudflare Workers AI Gateway transport over the AI binding (#7838, #7901). Users want Pi to work natively inside Workers and treat Cloudflare as a first-class provider.

- **TUI usability and terminal compatibility**: Requests range from sticky headers with the last prompt (#7802), responsive footers that keep context visible (#7884), fullscreen transcript search (#7913), and three-state exported tool output (#7907). There is also a clear push to improve legacy terminal behavior (tmux/SSH, non-Kitty protocols).

- **Provider fidelity and configuration accuracy**: Users want Pi to preserve provider-specific nuances: recognize OpenAI Codex request-buffer exhaustion as context overflow (#7867), keep models.dev cost tiers for all providers (#7912), respect `strict:false` for Cloudflare gateway tools (#7896), and handle case-insensitive provider base URLs (#7886).

- **Documentation and package discoverability**: A request to ship a proper `pi.1` man page (#7888) and a report that npm search is not indexing newly published pi-packages (#7885) show growing demand for better developer-facing docs and package ecosystem visibility.

## Developer Pain Points

- **Authentication failure modes**: GitHub Copilot login is a recurring source of frustration: WSL hangs (#6187), 429 rate limits for large organizations (#7850), and case-sensitive base URL quirks (#7886) all block otherwise working setups.

- **Session fragility and corruption**: A single malformed tool call from Bedrock can poison a session permanently (#7782), while unexpected truncation messages (#7855) and request-buffer exhaustion misclassified as transient (#7867) interrupt long-running work.

- **TUI behavior under real-world terminals**: Legacy terminal users face Alt+Enter aborts (#7876), scroll jumping during streaming (#7861), fullscreen rendering corruption in embedded terminals (#7917), and false activity indicators on focus loss (#7892).

- **Tool execution annoyance**: Models emitting unnecessary `cd` prefixes (#7915), edit fuzzy matching that is too strict on whitespace (#7836), and piped stdin/CLI prompts being concatenated without separators (#7863) all degrade day-to-day agent reliability.

- **Runtime/environment blockers**: Bun users cannot start Pi at all due to `zlib.createZstdDecompress` (#7846), and the global Undici dispatcher’s 16 KiB header limit breaks otherwise valid provider responses (#7791).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-11

## Today's Highlights
The big news is **v0.21.9**, which adds native installation of Qoder plugins from directories, archives, Git repos, URLs, and npm packages, plus QR-code pairing for Local Control. Issue/PR activity is dominated by **terminal rendering fixes**, **session/history consistency in `qwen serve`**, and the ongoing **multi-agent fleet roadmap**. A nightly release also landed with memory-behavior test coverage.

## Releases
- [v0.21.9-nightly.20260811.8c90697ace](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9-nightly.20260811.8c90697ace) — Adds test coverage for context-refresh marker carry-over turns ([#8809](https://github.com/QwenLM/qwen-code/pull/8809)).
- [v0.21.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9) — Stable release. Highlights:
  - Native Qoder plugin installation from directories, archives, Git repos, URLs, and npm packages, with automatic system-prompt loading ([#8661](https://github.com/QwenLM/qwen-code/pull/8661)).
  - Local Control pairing via QR code.

## Hot Issues
1. [#8124](https://github.com/QwenLM/qwen-code/issues/8124) — **Startup banner missing top lines on first paint** (TUI, Windows). 10 comments; intermittent first-frame rendering issue correlated with pending provider updates.
2. [#8718](https://github.com/QwenLM/qwen-code/issues/8718) — **RFC: Native coordination for independent Qwen sessions**. 8 comments; the umbrella issue for the multi-agent “fleet” architecture.
3. [#8557](https://github.com/QwenLM/qwen-code/issues/8557) — **Shrinking terminal reprints transcript blocks in scrollback** (macOS/Warp). 8 comments; duplicate output on resize causes significant UX disruption.
4. [#8504](https://github.com/QwenLM/qwen-code/issues/8504) — **Provider update prompt repeats when custom models are preserved**. 4 comments; users cannot dismiss the update prompt if custom model entries remain.
5. [#8871](https://github.com/QwenLM/qwen-code/issues/8871) — **ACP child process fails with "Unknown argument: acp" in `qwen serve`**. 4 comments; directly breaks authentication and HTTP bridging in serve mode.
6. [#8888](https://github.com/QwenLM/qwen-code/issues/8888) — **Autofix pushes cancel in-progress review-pr workflow**, creating a bot-PR cancellation loop. 3 comments; CI automation fights itself on bot-authored PRs.
7. [#8885](https://github.com/QwenLM/qwen-code/issues/8885) — **Rewind indexes misaligned with automatic user-role history entries** (P1). 3 comments; cron prompts, background notifications, and mid-turn input break rewind correctness.
8. [#8837](https://github.com/QwenLM/qwen-code/issues/8837) — **Scheduled prompts are missing from restored ACP transcripts**. 3 comments; live messages appear, but cold-session restore loses them.
9. [#8877](https://github.com/QwenLM/qwen-code/issues/8877) — **Microphone permission warning shows on every macOS startup** even when voice dictation is never used. 3 comments; noisy and often appears twice.
10. [#8863](https://github.com/QwenLM/qwen-code/issues/8863) — **Built-in provider update silently overwrites `model.name` and `model.baseUrl`** when the current model belongs to another provider (P1 regression from #5819). 2 comments; closed after prompt handling, but caused silent config loss.

## Key PR Progress
1. [#8675](https://github.com/QwenLM/qwen-code/pull/8675) — **feat(web-shell): model-specific reasoning controls** — Adds a reasoning-controls registry for Thinking/Effort tiers across Core, ACP, daemon, SDK, and WebShell.
2. [#8831](https://github.com/QwenLM/qwen-code/pull/8831) — **fix(cli): eliminate banner duplication and drag flicker on resize/wake** — Targets the rendering artifacts investigated in #8557.
3. [#8838](https://github.com/QwenLM/qwen-code/pull/8838) — **fix(cli): persist scheduled cron prompts** — Records automatically fired scheduled prompts in the transcript before the model turn runs.
4. [#8707](https://github.com/QwenLM/qwen-code/pull/8707) — **feat(chrome): Qwen WebBridge direct browser control** — Exposes Kimi WebBridge-compatible `/command` and `/status` endpoints from `qwen serve`.
5. [#8368](https://github.com/QwenLM/qwen-code/pull/8368) — **feat(auth): add Kimi and Xiaomi MiMo providers** — Adds first-class third-party provider presets with multiple authentication access choices.
6. [#8687](https://github.com/QwenLM/qwen-code/pull/8687) — **feat(daemon): guard cross-worktree Git mutations** — Blocks model-issued shell commands that escape the session workspace via `-C`, `--work-tree`, or `--git-dir`.
7. [#8895](https://github.com/QwenLM/qwen-code/pull/8895) — **fix(ci): stream autofix agent progress** — Lets the idle watchdog distinguish active tool work from a stalled headless Qwen process.
8. [#8848](https://github.com/QwenLM/qwen-code/pull/8848) — **feat(web-shell): redesign Channel policy and workspace management** — Adds shared direct-message, group-access, session-routing, and workspace-ownership controls for Web Shell adapters.
9. [#8732](https://github.com/QwenLM/qwen-code/pull/8732) — **feat(cli): adopt Goal v3 in ACP sessions** — Replaces the legacy Stop-hook `/goal` with the canonical Goal v3 state machine used by the CLI.
10. [#8866](https://github.com/QwenLM/qwen-code/pull/8866) — **fix(desktop): support enterprise LAN addresses** — Allows Local Control to use non-RFC1918 addresses while still limiting connections to the selected interface's subnet.

## Feature Request Trends
- **Native multi-agent fleet orchestration** is the clearest roadmap theme: umbrella #8718 plus staged implementation issues #8840 (in-process preview), #8841 (supervised teammate runtime), #8842 (persistence/recovery), and #8843 (terminal attach + legacy cleanup).
- **Web Shell/Channel management** needs more operational controls: shared Channel access, session isolation, workspace ownership, and clearer connection-state UX (#8845, #8848, #8887).
- **History/session fidelity is a high-demand area**: scheduled cron prompts, automatic user-role entries, rewind indexes, and restore timeouts must be handled consistently (#8837, #8838, #8885, #8678).
- **Provider configuration durability**: users want custom models and provider settings to survive built-in provider updates without silent overwrites or repeated prompts (#8504, #8863).

## Developer Pain Points
- **TUI rendering artifacts recur**: missing banner lines, duplicated scrollback on window shrink, and input-box jitter during resize (#8124, #8557, #8849).
- **Provider update/config management is fragile**: repeated built-in update prompts and silent `model.name`/`model.baseUrl` overwrites erode trust (#8504, #8863).
- **Daemon/serve session lifecycle issues** are frequent: ACP child process argument failures, large-restore timeouts, and lost scheduled prompts (#8871, #8678, #8837).
- **CI automation can self-sabotage**: autofix pushes cancelling review workflows creates deadlock loops on bot PRs (#8888).
- **Observability defaults are dangerous**: `logs/openai` grows without rotation or retention, reaching ~95 GB / 340k files in two months (#8860).
- **CLI polish gaps remain**: registered flags like `--approval-mode` and `--auth-type` are missing from `qwen --help`, and permission warnings appear when unrelated to user actions (#8897, #8877).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-08-11

## Today's Highlights
No new DeepSeek TUI release landed in the last 24 hours. The project is in an active refactoring/planning phase: two umbrella EPIC issues are driving command-boundary cleanup and crate decomposition, while three PRs advance subagent depth-capping, request-ownership migration, and v0.9.6 release preparation. The move toward smaller, staged architecture changes is the dominant signal in today’s update.

## Releases
No new releases in the last 24 hours.

## Hot Issues
Only two issues were updated in the last 24 hours; both are included.

- [#2870 — EPIC: staged command-boundary refactor for #2791](https://github.com/Hmbown/CodeWhale/issues/2870) — **CLOSED** · 20 comments  
  This umbrella issue tracks the staged, mergeable layers for the command-boundary refactor originally discussed in #2791. Its 20 comments suggest active planning and significant care around breaking the work into safe increments. The closure implies the refactor plan has been fully tracked or absorbed into follow-up work.

- [#5316 — EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316) — **OPEN** · 0 comments  
  A fresh umbrella EPIC for decomposing the TUI crate. It is designed as the central tracking issue where every sub-EPIC, feature, and PR reports. The lack of comments so far indicates this was just opened, but it signals a clear architectural direction: breaking the monolith into smaller, more maintainable crates.

## Key PR Progress
Three PRs were updated in the last 24 hours; all are listed below.

- [#5317 — fix(subagents): cap nested max_depth by inherited budget](https://github.com/Hmbown/CodeWhale/pull/5317) — **OPEN**  
  Fixes a real edge case where `child_max_spawn_depth_for_spawn` dropped the inherited absolute budget when `max_depth` was explicitly set. This could allow nested subagent spawns to exceed the depth chosen by the root/session, violating #5253. The PR applies `inherited.min(..)` in the explicit-depth arm, matching the profile-hint arm.

- [#5300 — refactor(core): own primary request preparation](https://github.com/Hmbown/CodeWhale/pull/5300) — **CLOSED**  
  Removes the synthetic `ChatRequest` scaffold from `codewhale-core` and replaces it with the production `MessageRequest` DTO family previously owned by the TUI crate. Also adds a pure `prepare_primary_turn_request` constructor and routes production paths through it. This reduces TUI/core duplication and gives core clearer ownership over request preparation.

- [#5315 — chore(release): ship v0.9.6](https://github.com/Hmbown/CodeWhale/pull/5315) — **CLOSED**  
  Release-prep PR for v0.9.6. The release is “subtractive”: fewer runtime guards, one stable base prompt, truthful provider endings, and a smaller compaction path. Notably, release state is tracked in a private release ledger rather than a public issue.

## Feature Request Trends
The only two issues in the 24-hour window are both umbrella EPICs, so no end-user feature requests are visible today. The clear trend is architectural: **command-boundary refactoring** and **TUI crate decomposition**. Community/team effort is focused on modularizing the TUI, reducing cross-crate ownership confusion, and enabling safer incremental PRs.

## Developer Pain Points
Recurring pain points visible from today’s PRs and issues include:

- **Subagent recursion depth bugs**: Explicit `max_depth` values could be bypassed for nested spawns, requiring a dedicated fix to cap depth by inherited budget.
- **Unclear request-preparation ownership**: The TUI previously owned production DTOs while core had an unused synthetic scaffold; PR #5300 resolves that duplication.
- **Command-boundary complexity**: The command-boundary logic required an EPIC with staged layers, indicating the current implementation is hard to refactor safely.
- **Release/runtime guard churn**: v0.9.6’s “subtractive” nature suggests earlier releases carried excess runtime guards and provider-ending inconsistencies that developers are now cleaning up.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*