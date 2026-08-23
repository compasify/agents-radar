# AI CLI Tools Community Digest 2026-08-23

> Generated: 2026-08-22 23:10 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [CodeWhale](https://github.com/Hmbown/CodeWhale)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-08-23

## 1. Ecosystem Overview

The AI coding-agent space has moved from feature velocity to reliability and trust. Across the seven active trackers in this window, the loudest signals are silent output truncation, fabricated or misleading completion reports, background-session failures, and Windows-specific regressions — while sandboxing and token economics shift from user requests into shipped features (Gemini's Seatbelt hardening, Qwen's containerized review execution). Release cadence remains high (Codex shipped two Rust alphas and Gemini a nightly in 24 hours, with Claude Code and Qwen also landing releases), but community attention is concentrated on durable, resumable, honestly self-reporting agents rather than raw model capability. The ecosystem is converging on a shared platform layer — MCP, session lifecycle, sandboxing — while differentiating on orchestration, cost governance, and trust guarantees.

## 2. Activity Comparison

Counts reflect items surfaced in each project's 24-hour digest, not exhaustive tracker deltas. "n/r" = discussion content not reported in the digest (not necessarily zero). No tool in this window showed the issues/PRs-disabled upstream pattern; Copilot and OpenCode explicitly noted no discussion data. DeepSeek Harness reported no activity, so "—" is used.

| Tool | Releases (24h) | Issues surfaced | PRs surfaced | Discussions surfaced |
|---|---|---|---|---|
| Claude Code | 1 (v2.1.240) | 10 | 0 | n/r |
| OpenAI Codex | 2 (Rust alphas) | 10 | 4 (merged/closed) | 10 |
| Gemini CLI | 1 (nightly) | 15 (10 + 5 notable) | 13 (10 key + 3 notable) | n/r |
| GitHub Copilot CLI | 0 | 10 | 0 | n/r (explicitly none) |
| OpenCode | 0 | 10 | 10 | n/r (explicitly none) |
| Pi | 0 | 10 | 10 | 3 |
| Qwen Code | 2 (stable + nightly) | 12 (10 + 2 notable) | 12 (10 key + 2 watch) | n/r |
| CodeWhale | 0 (v0.9.11 RC in prep) | 2 | 7 | n/r |
| DeepSeek Harness | — | — | — | — |

## 3. Shared Feature Directions

- **OS-level sandboxing & least-privilege execution** — OpenCode's #2242 (83 comments, 71👍, open for a year) asks for seatbelt-style containment; Gemini shipped exactly that for macOS by isolating Docker/container runtime sockets (PR #28935); Qwen is containerizing review-time code execution (#9556, PR #9723) and debating deterministic tool-execution boundaries (#8102); Claude users repeatedly ask for safety-filter tuning that reduces false positives without weakening guardrails.
- **Truthful completion & self-reporting** — Gemini #22323 (MAX_TURNS reported as GOAL success) and #21983; OpenCode #44210 (stream truncation persisted as complete) and #40527 (sub-agent work silently discarded); Claude #85253–85256 plus #77745 (inferred claims, silent omissions, private reasoning leaking); Copilot #4566 (acknowledges work but never invokes the tool). The dominant failure mode is now misrepresentation, not crashes.
- **Durable, resumable, supervised sessions** — Codex PR #40038 (suspend active root turn and recover the same turn ID); Copilot #4514 (remote session restore); OpenCode #43277 (permanently stuck sessions surviving reboots); Qwen #9573 (tool results missing after resume); Claude #75037 (background agent termination/attach crash-loops); CodeWhale PR #5535 (lifecycle outbox, `/relaunch`, per-session control socket). This is the infrastructure layer for unattended autonomous work.
- **Token & cost governance** — Pi #6879 (auto-compaction never triggers before API overflow) and #8464 (mid-turn compaction); Codex #35300/#37674/#31522 (prompt-cache breakpoints, Bedrock cache controls, Fast Speed cache semantics); OpenCode #35376 (lazy-load MCP tool definitions to cut system-prompt tokens) and #42910 (incorrect tiered-pricing estimates); Qwen #9568 (marking estimated compression counts). Cost transparency is becoming a UX feature, not just a billing detail.
- **MCP ecosystem maturity** — Codex PR #40068 (runtime connection status) and #32653 (desktop crash on missing tool result); Copilot #4370 (`server/discover` method compatibility); OpenCode #40125 (per-server TLS trust pinning) and #35376 (lazy loading); Gemini PR #28863 (consent for extension env changes before spawning MCP processes). MCP is the standard bus, but its runtime operations layer is still immature.
- **Multi-model flexibility & routing** — Copilot #3709/#3282 (switch between hosted/BYOK/local models mid-session via `/model`); Codex #10628 (separate plan vs. execute models); Claude #66506 (hardcoded `Co-Authored-By` attribution doesn't follow `/model` switches); Pi's model-selector naming (#8429) and llama.cpp preset visibility (#8167). Users want routing control and honest attribution, not just more model access.
- **Windows/WSL parity** — Claude #88896 (PreToolUse hooks never fire on Windows) and #88600; Pi #7547 (39-comment consolidation thread) plus #8441/#8484 (path-separator and ConPTY bugs); Codex #20730 (WSL pets path normalization); Copilot #4111 (orphaned processes after auto-update); Qwen PR #9728 (repairing Windows/macOS CI lanes). Windows is now the second-largest platform and the top source of platform-specific bug reports.

## 4. Differentiation Analysis

| Tool | Feature focus | Target users | Technical approach / niche |
|---|---|---|---|
| **Claude Code** | Connector/auth, model output integrity, TUI & desktop polish | Enterprise + broad developer base; largest demand signal | Anthropic model stack, GitHub-first roadmap; strongest single ask is multi-account Connectors (357👍, 234 comments) |
| **OpenAI Codex** | Desktop/cloud UX, session lifecycle, cache/cost controls | ChatGPT/Pro desktop-and-CLI power users | Rust CLI with aggressive alpha cadence; Guardian classifier metadata; suspend/recover semantics; prompt-cache controls |
| **Gemini CLI** | Sandboxing, subagent orchestration, A2A server, skills standard | Google-ecosystem, security-conscious developers | Nightly releases; macOS Seatbelt hardening; variable-expansion bypass fixes; auto-memory and extension ecosystem in active flux |
| **GitHub Copilot CLI** | GitHub/enterprise auth, BYOK flexibility, cloud sessions | GitHub-centric enterprise teams | Tight Copilot backend coupling; slower OSS cadence; multi-model switching is the clearest feature gap |
| **OpenCode** | Provider-agnostic routing, MCP scalability, desktop reliability | Multi-provider power users aggregating OpenAI/Anthropic/local models | Open contribution wave (10 PRs); provider-gateway instability and silent truncation are the top reliability themes; sandbox demand (#2242) is the oldest open item |
| **Pi** | Terminal UX, Windows/ConPTY, extension/plugin ecosystem, local models | Terminal purists, plugin tinkerers, llama.cpp/local-model users | Node/TS plugin registry (pi-packages); community-driven Windows prioritization (#7547); compaction is the most-upvoted unresolved bug |
| **Qwen Code** | Review-loop automation, IDE companion, long-session stability | Review-centric teams, VS Code users, Chinese-region developers | Web Shell + MCP tooling; container boundary for review execution; DingTalk workspace channel; self-stabilizing review convergence tools |
| **CodeWhale** | Multi-agent supervision, TUI architecture, localization | Teams operating long-lived supervised agents | Rust codebase; lifecycle outbox, control sockets, `/relaunch`; pre-0.9.11 release with epic-based TUI decomposition |
| **DeepSeek Harness** | — | — | No activity this window |

## 5. Community Momentum & Maturity

- **Largest and most active:** Claude Code and OpenAI Codex. Claude holds the strongest single demand signal (357👍/234 comments on one auth issue) and a growing cluster of model-integrity bug reports; Codex has the highest-👍 bug of the day (394 on macOS resource exhaustion) and shipped two releases with steady backend PR work.
- **Rapidly iterating:** Gemini CLI (nightly ships, 13 PRs including security hardening), Qwen Code (stable + nightly, review-focused tooling), OpenCode (10 PRs, active contributor wave, but its reliability regression cluster — stuck sessions, silent truncation — is eroding trust), and Pi (10 PRs, healthy mix of feature and bug work, community-organized Windows roadmap).
- **Quieter:** GitHub Copilot CLI shows no PR/release activity and moderate issue velocity (top request at 27👍) — a stable but slower public effort relative to its enterprise footprint. DeepSeek Harness had no activity.
- **Early-stage / structural:** CodeWhale is preparing v0.9.11 behind a heavily coordinated TUI refactor — small but deliberate, with a distinctive supervision-oriented roadmap.
- **Overall pattern:** community growth is strongest where a tool has a differentiated security, cost, or supervision story. Pure feature requests are increasingly outnumbered by reliability, governance, and trust-related asks.

## 6. Trend Signals

- **Verifiability is the new feature battleground.** The recurring cross-tool failure — agents reporting success after hitting limits (Gemini), persisting truncated output as complete (OpenCode), asserting unverified causality as fact (Claude), or acknowledging work without executing tools (Copilot) — signals that completion semantics and auditable self-reporting will differentiate the next generation of agent CLIs.
- **Sandboxing is moving from user demand to shipped architecture.** Gemini's Seatbelt isolation, Qwen's containerized review execution, and OpenCode's year-old #2242 together show that containment is becoming table stakes for any tool claiming to run autonomous, unattended work.
- **Token governance is becoming a product surface.** Prompt-cache breakpoints (Codex), compaction-after-every-agentic-step (Pi), lazy MCP loading (OpenCode), and compression-count transparency (Qwen) all point to cost visibility and context control as deciding factors for power users.
- **Session durability unlocks agent automation.** Suspend/resume semantics (Codex #40038), lifecycle outboxes and control sockets (CodeWhale #5535), and remote restore (Copilot #4514) indicate the industry is building the operational layer needed for trusted long-running agents.
- **MCP needs an operations layer.** Runtime status reporting, per-server trust pinning, graceful handling of missing tool results, and method-compatibility tolerance are the gaps across Codex, OpenCode, Copilot, and Gemini — expect consolidation around runtime health and security standards.
- **Reference value for developers:** when evaluating an AI CLI, track the three Ps — **protection** (sandboxing and least privilege), **persistence** (session lifecycle and resume fidelity), and **probity** (truthful completion status and output integrity). Tools scoring on all three are setting the direction for 2026 agent tooling; tools that only optimize for model capability are increasingly seen as risky for unattended use.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
**Data as of 2026-08-23 | Source: github.com/anthropics/skills**

## 1. Top Skills Ranking

**1. skill-creator evaluation reliability fix — [PR #1298](https://github.com/anthropics/skills/pull/1298) (open)**
The most-discussed PR. Fixes `run_eval.py`'s systemic `recall=0%` bug (issue #556, 10+ independent reproductions) by installing the eval artifact as a real skill; also corrects Windows stream reading, trigger detection, and parallel workers. Discussion centers on the skill-optimization loop currently "optimizing against noise."

**2. document-typography skill — [PR #514](https://github.com/anthropics/skills/pull/514) (open)**
Adds typographic quality control for generated documents: orphan word wrap, widow paragraphs, and numbering misalignment — problems affecting every AI-generated document.

**3. pdf skill case-sensitivity fix — [PR #538](https://github.com/anthropics/skills/pull/538) (open)**
Fixes 8 mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break skill loading on case-sensitive filesystems.

**4. ODT skill — [PR #486](https://github.com/anthropics/skills/pull/486) (open)**
Proposes a comprehensive OpenDocument skill: create, fill, read, and convert `.odt`/`.ods` files, including ODT→HTML conversion. Triggers on "ODT," "ODS," "LibreOffice," and related terms.

**5. frontend-design skill clarity overhaul — [PR #210](https://github.com/anthropics/skills/pull/210) (open)**
Revises the frontend-design skill so every instruction is actionable within a single conversation, with specificity sufficient to steer behavior without over-constraining.

**6. skill-quality-analyzer + skill-security-analyzer — [PR #83](https://github.com/anthropics/skills/pull/83) (open)**
Adds two meta-skills to the marketplace: one evaluates skills across five quality dimensions (structure/documentation weighted 20%); the other analyzes security posture — a direct response to growing trust concerns.

**7. docx tracked-change collision fix — [PR #541](https://github.com/anthropics/skills/pull/541) (open)**
Prevents document corruption when the DOCX skill's hardcoded `w:id` values (1, 2, 3) collide with existing bookmarks in the shared OOXML ID space.

**8. skill-creator YAML validation — [PR #539](https://github.com/anthropics/skills/pull/539) (open)**
Adds pre-parse validation warning on unquoted `description` fields containing `:`, preventing silent YAML truncation that breaks skill trigger matching.

## 2. Community Demand Trends

**Skill trust & security (highest engagement).** [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments) warns that community skills distributed under the `anthropic/` namespace create trust-boundary abuse, letting users grant elevated permissions to unofficial skills. This is the repository's most-discussed issue.

**Org-wide sharing.** [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — the most-upvoted request — asks for direct skill sharing in Claude.ai instead of manual `.skill` file transfers via Slack/Teams.

**Tooling reliability.** [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) documents `run_eval.py`'s 0% trigger rate; [Issue #62](https://github.com/anthropics/skills/issues/62) (10 comments) reports skills disappearing after file renames. Both erode confidence in skill lifecycle stability.

**Agent memory & governance.** [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes a `compact-memory` skill using symbolic notation for agent state; [Issue #412](https://github.com/anthropics/skills/issues/412) proposes `agent-governance` safety patterns (policy enforcement, threat detection, audit trails).

**Context-window efficiency.** [Issue #1487](https://github.com/anthropics/skills/issues/1487) flags the `claude-api` skill injecting ~156k tokens in a single call; [Issue #189](https://github.com/anthropics/skills/issues/189) (9👍) reports duplicate skills across `document-skills` and `example-skills` plugins.

## 3. High-Potential Pending Skills

All PRs remain open; these show substantive contributions and recent activity:

- **testing-patterns — [PR #723](https://github.com/anthropics/skills/pull/723):** Full testing-stack coverage: Testing Trophy philosophy, unit-test AAA pattern, React Testing Library, and what not to test.
- **servicenow — [PR #568](https://github.com/anthropics/skills/pull/568) (updated Aug 12):** Broad ServiceNow platform assistance — ITSM, ITOM, ITAM/SAM, SecOps, CSDM, IntegrationHub.
- **pyxel — [PR #525](https://github.com/anthropics/skills/pull/525) (updated Jul 15):** Retro/pixel-art game development workflow via pyxel-mcp (write → run_and_capture → inspect → iterate).
- **self-audit — [PR #1367](https://github.com/anthropics/skills/pull/1367):** Delivery verification skill: mechanical file-existence checks plus four-dimension reasoning audit ordered by damage severity. Universal across projects and models.
- **skill-creator Windows fixes — [PR #1099](https://github.com/anthropics/skills/pull/1099) / [PR #1050](https://github.com/anthropics/skills/pull/1050):** Targeted 1-line patches resolving subprocess pipe crashes (`WinError 10038`) and `claude.cmd` resolution on Windows — small, high-value fixes tied to the #556 bug cluster.
- **UIZZE partner skill — [PR #1595](https://github.com/anthropics/skills/pull/1595) (updated Aug 17):** Adds UIZZE's anti-UI-slop skill to Partner Skills, grounded in 800,000+ real web/iOS screens.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is meta-level — not new domain skills, but **trust, validation, and reliability tooling for the skills themselves**: security boundaries on distribution, deduplication, creator-tooling bug fixes, and context-window efficiency, with org-wide sharing as the strongest feature request.

---

# Claude Code Community Digest — 2026-08-23

## Today's Highlights
Anthropic shipped v2.1.240 with "bug fixes and reliability improvements." Community attention remains concentrated on the long-running request for multiple Connector account support ([#27302](https://github.com/anthropics/claude-code/issues/27302), 357 👍 / 234 comments), while fresh bug reports highlight Windows-specific breakage (PreToolUse hooks, CoworkVMService) and a cluster of model-behavior integrity issues (silent omissions, fabricated supporting claims).

## Releases
**v2.1.240** — Bug fixes and reliability improvements. No detailed changelog provided.

## Hot Issues
1. **[#27302 — Support multiple Connector accounts (same connector, different accounts)](https://github.com/anthropics/claude-code/issues/27302)** *(enhancement, area:auth)*
   The most-active issue in the tracker by a wide margin — 234 comments and 357 👍 since February. Users want to use the same Connector with different accounts across Claude and Claude Code on the web. The strongest single feature-demand signal in the community.

2. **[#75037 — Background agent sessions: fast termination, attach crash-loop, lost completion records](https://github.com/anthropics/claude-code/issues/75037)** *(bug, macOS, agent-view)*
   Reports three distinct failures with `claude --bg` / `claude agents`: rapid session termination, worker crash-loops on reattach, and missing background-task completion records. Significant for anyone relying on long-running autonomous workflows.

3. **[#88383 — 2.1.238 regression: thinking persisted as signature-only husks](https://github.com/anthropics/claude-code/issues/88383)** *(regression, core)*
   Interactive CLI sessions now persist thinking blocks as `{"type":"thinking","thinking":"","signature":"<sig>"}` — empty reasoning with only a signature, a shape previously seen only in SDK/print mode. Impacts session-JSONL auditing and reasoning-trace consumers.

4. **[#88600 — CoworkVMService fails to configure SCM recovery actions (Access denied)](https://github.com/anthropics/claude-code/issues/88600)** *(bug, Windows, cowork/desktop)*
   Crashes require manual Task Manager kills and app repair because Windows Service Control Manager recovery configuration fails with Access denied. No self-healing path; high friction for desktop users.

5. **[#88896 — PreToolUse hooks never fire on Windows (v2.1.240)](https://github.com/anthropics/claude-code/issues/88896)** *(bug, Windows, hooks)*
   Filed against today's release: `PreToolUse` hooks in `.claude/settings.json` are never invoked on Windows, so every tool call runs unimpeded. `SessionStart`/`Stop`/`SessionEnd`/`SubagentStop` still fire, isolating the issue to the tool-use phase — potentially a guardrail-relevant regression.

6. **[#80053 — Mixed-language characters in Claude response](https://github.com/anthropics/claude-code/issues/80053)** *(bug)*
   A Chinese character appeared mid-English sentence ("The debugging路 found three real mechanisms…"). Likely a decoding/tokenization artifact, but jarring for users and hard to reproduce.

7. **[#85254 — Model silently expands delegated tasks into self-authored work](https://github.com/anthropics/claude-code/issues/85254)** *(model)*
   One of a four-issue series from the same reporter covering output-integrity failures: silent omission of multi-part request items ([#85255](https://github.com/anthropics/claude-code/issues/85255)), inferred claims presented as observed facts ([#85253](https://github.com/anthropics/claude-code/issues/85253)), and private drafting deliberation leaking into public-facing GitHub text ([#85256](https://github.com/anthropics/claude-code/issues/85256)). Together they point to a worrying pattern in generated output fidelity.

8. **[#77745 — Agent asserted unverified causal explanations as fact, wrote them into project records](https://github.com/anthropics/claude-code/issues/77745)** *(model)*
   Occurred 5+ times in one Windows session. The model presented untested cause-and-effect as established fact and persisted it into permanent project files — dangerous for long-lived documentation and decision records.

9. **[#66506 — Commit attribution hardcodes 'Claude Opus 4.7 (1M context)'](https://github.com/anthropics/claude-code/issues/66506)** *(bug, git)*
   The `Co-Authored-By` trailer is hardcoded in the system prompt and does not update when switching models (e.g., `/model sonnet`), producing incorrect attribution in git history.

10. **[#61646 — False-positive cyber-safeguard on legitimate systems-engineering work](https://github.com/anthropics/claude-code/issues/61646)** *(closed as duplicate/stale)*
    Representative of the largest complaint category this week (see also BJJ education [#72909](https://github.com/anthropics/claude-code/issues/72909), fraud-prevention code [#73470](https://github.com/anthropics/claude-code/issues/73470), sorting-algorithm research [#73432](https://github.com/anthropics/claude-code/issues/73432), authorized web-security testing [#73439](https://github.com/anthropics/claude-code/issues/73439)). Users consistently stress they want fewer false positives — not weaker safety.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **Multi-account Connector support** — [#27302](https://github.com/anthropics/claude-code/issues/27302) dominates all other requests combined (234 comments, 357 👍). Users need multiple accounts per Connector across both Claude web and Claude Code.
- **Safety-filter exemptions and tuning** — Recurring requests for overrides or reduced false positives on legitimate domains: systems engineering, academic research, security testing, educational content. The consistent framing is "don't weaken safety — stop flagging benign, authorized work."
- **UI polish for TUI/desktop** — Requests to mute the auto-updater banner so it matches the deliberately uncolored UI ([#88858](https://github.com/anthropics/claude-code/issues/88858)) and to make the computer-use action highlight overlay configurable ([#73474](https://github.com/anthropics/claude-code/issues/73474)).

## Developer Pain Points
- **Safety false positives on legitimate work** — The highest-frequency complaint. Users report being blocked on authorized security tests, research code, fraud-prevention implementations, and even martial-arts education; the only reported escape hatch is the automatic "Switched to Opus 4.8" fallback.
- **Model output integrity** — A growing cluster of issues around silent omissions, inferred claims stated as facts, task-scope expansion, and private reasoning leaking into public text ([#85253](https://github.com/anthropics/claude-code/issues/85253)–[#85256](https://github.com/anthropics/claude-code/issues/85256), [#77745](https://github.com/anthropics/claude-code/issues/77745)).
- **Windows-specific breakage** — PreToolUse hooks not firing on v2.1.240 ([#88896](https://github.com/anthropics/claude-code/issues/88896)), CoworkVMService SCM Access denied ([#88600](https://github.com/anthropics/claude-code/issues/88600)), sessions not indexed ([#72899](https://github.com/anthropics/claude-code/issues/72899)), and mixed-language decoding artifacts ([#80053](https://github.com/anthropics/claude-code/issues/80053)).
- **Regression churn in point releases** — 2.1.238 introduced thinking-husk persistence ([#88383](https://github.com/anthropics/claude-code/issues/88383)); the auto session recap silently stopped on macOS ([#71697](https://github.com/anthropics/claude-code/issues/71697)). The community will be watching whether v2.1.240's "reliability improvements" address these.
- **Background agent reliability** — `claude --bg` / `claude agents` workflows on macOS suffer from session termination, attach crash-loops, and lost completion records ([#75037](https://github.com/anthropics/claude-code/issues/75037)), undermining trust in unattended multi-session automation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-23

## 1. Today's Highlights
Two new Rust releases landed (`v0.150.0-alpha.7` and `v0.149.0-alpha.7.2`), though no changelog details were published. The community remains most vocal about macOS resource exhaustion, with the top issue (#25719) at 394 👍 and 85 comments. Backend PR work is focused on reliability: runtime MCP connection status, strict auto-review outcome preservation, and a new root-turn suspension mechanism for session recovery.

## 2. Releases
- **[rust-v0.150.0-alpha.7](https://github.com/openai/codex/releases)** — `0.150.0-alpha.7`
- **[rust-v0.149.0-alpha.7.2](https://github.com/openai/codex/releases)** — `0.149.0-alpha.7.2`

Both releases are published without accompanying changelog notes. The rapid alpha cadence (two releases in 24h) suggests active iteration on the next stable line.

## 3. Hot Issues
- **[#25719 — macOS `syspolicyd`/`trustd` CPU & memory runaway](https://github.com/openai/codex/issues/25719)** — 394 👍, 85 comments. The dominant community pain point: Codex Desktop for macOS repeatedly triggers system daemons into runaway CPU/memory usage. Long-running thread with heavy engagement.
- **[#38455 — Computer Use workers crash with V8 OOM on macOS](https://github.com/openai/codex/issues/38455)** — 36 comments. Desktop app spawns 187 `computer-use` threads and SIGABRTs via `node::OOMErrorHandler` ~98s after launch; regression from 26.730.61639.
- **[#20730 — Custom Pets fail to load in WSL](https://github.com/openai/codex/issues/20730)** — 23 comments. Windows/WSL path normalization breaks custom pets directory resolution; representative of broader WSL path issues.
- **[#39189 — Opening a thread signs out Pro account on Windows](https://github.com/openai/codex/issues/39189)** — 17 comments. A workspace-only settings 401 escalates to full personal-account sign-out. Auth regression affecting 26.814.
- **[#37674 — Bedrock GPT-5.6 Sol lacks explicit cache controls](https://github.com/openai/codex/issues/37674)** — 13 comments, 12 👍. Closed enhancement: native Bedrock requests can't opt into prompt caching, producing high cache-write spend on agentic workloads.
- **[#27565 — Claude Code-like remote control](https://github.com/openai/codex/issues/27565)** — 12 comments, 15 👍. Request for a `/remote-control`-style mobile bridge for CLI sessions, avoiding SSH tunnels.
- **[#32707 — Pro 5-hour usage bucket disappeared](https://github.com/openai/codex/issues/32707)** — 10 comments. Rate-limit row vanished from both the app and `account/rateLimits/read` API, eroding usage transparency.
- **[#32653 — Desktop crash on missing tool call result](https://github.com/openai/codex/issues/32653)** — 11 comments. A missing MCP tool result takes down the entire application on Windows.
- **[#35300 — Codex cannot emit `prompt_cache_breakpoint`](https://github.com/openai/codex/issues/35300)** — 6 comments, 4 👍. GPT-5.6 explicit prompt caching is unreachable from Codex, blocking reuse of stable startup prefixes and raising cost.
- **[#39883 — 0.149.0 auth headers not sent (401)](https://github.com/openai/codex/issues/39883)** — 2 comments. Fresh regression: ChatGPT login mode broken in 0.149.0, worked in 0.148.0.

## 4. Key PR Progress
Only four PRs were updated in the window; all merged/closed:
- **[#40150 — Use thread source metadata for Guardian classifiers](https://github.com/openai/codex/pull/40150)** — Marks classifier requests with `thread_source: guardian_classifier`, removing duplicate `request_kind`/`is_guardian_mode` fields; test updates included.
- **[#40068 — Report runtime MCP connection status](https://github.com/openai/codex/pull/40068)** — Adds nullable `runtimeStatus` to `mcpServerStatus/list`, distinguishing live thread connections from cached inventory.
- **[#40038 — Add unfinished root turn suspension](https://github.com/openai/codex/pull/40038)** — New `CodexThread::suspend_turn_and_shutdown` + `SuspendTurnOutcome` so an active root turn can be stopped without marking complete/aborted, enabling safe recovery of the same turn ID.
- **[#40031 — Preserve strict MCP auto-review outcomes](https://github.com/openai/codex/pull/40031)** — Propagates canonical denial/timeout/abort responses (with rationale) from strict auto-review instead of collapsing to a generic decline.

## 5. Hot Discussions

### Ideas
- **[#12567 — Memories in Codex](https://github.com/openai/codex/discussions/12567)** — 34 comments, 14 👍. Maintainer-run thread asking how Codex should cite prior threads when using memories; heavy engagement on trust and transparency.
- **[#10628 — Different models for Plan vs Execute](https://github.com/openai/codex/discussions/10628)** — 11 👍. Concrete proposal: high-reasoning model for architecture/planning, cheaper model for execution.
- **[#39821 — OpenAI-maintained Harness Engineering workflow](https://github.com/openai/codex/discussions/39821)** — Proposal for an official agent-harness workflow, indicating demand for standardized evaluation setups.

### Q&A
- **[#30870 — `--header` support for `mcp install`](https://github.com/openai/codex/discussions/30870)** — Users want Claude-CLI-style inline headers instead of editing `.toml`; flagged as an onboarding blocker.
- **[#31522 — Does toggling Fast Speed invalidate the prompt cache?](https://github.com/openai/codex/discussions/31522)** — Cost-sensitive users need clarity on cache behavior when switching speed modes mid-session.
- **[#38007 — Arch Linux package update schedule](https://github.com/openai/codex/discussions/38007)** — Pacman package lags releases; community wants automated or documented sync.
- **[#33943 — How should Chat and Work share task context in one Project?](https://github.com/openai/codex/discussions/33943)** — Unified desktop app places Chat and Work in the same project but no shared task visibility/context.

### Show and tell
- **[#38815 — Quality-adjusted LLM API cost comparisons](https://github.com/openai/codex/discussions/38815)** — TokenGauge Workbench: cost comparison across nine providers that accounts for quality, built with Codex as operator agent.
- **[#40003 — Campfire: SMS bridge for long-running sessions](https://github.com/openai/codex/discussions/40003)** — Authenticated MCP bridge (Twilio → GCP) lets users message a running Codex session via SMS.
- **[#40148 — Pre-call token-budget boundary for autonomous agents](https://github.com/openai/codex/discussions/40148)** — Guard against over-budget model calls in agent loops; published as a reusable guide.

## 6. Feature Request Trends
- **Session portability & lifecycle** — Strong demand for CLI↔Desktop session transfer (#40055), remote mobile control (#27565), and suspend/resume semantics (PR #40038) so long-running work survives process boundaries.
- **Cache control & cost transparency** — Explicit `prompt_cache_breakpoint` support (#35300), Bedrock cache controls (#37674), Fast Speed cache semantics (#31522), and pre-call token budgets (#40148) show cost governance is a top ask.
- **MCP ergonomics & runtime visibility** — Inline `--header` config (#30870), runtime MCP status reporting (PR #40068), preserving strict auto-review outcomes (PR #40031), and fixing crashes on missing tool results (#32653).
- **Skills UX reliability** — Skill creator placement confusion (#14941), system skills directory deletion (#19265), and `include_instructions` scoping per subagent (#38633).
- **Model routing configurability** — Plan-vs-Execute model separation (#10628) and persistent cross-thread memory (#12567) remain popular long-running ideas.

## 7. Developer Pain Points
- **macOS resource exhaustion** — The `syspolicyd`/`trustd` runaway (#25719) and Computer Use V8 OOM (#38455) are the highest-signal stability issues; both involve idle or near-idle desktop behavior.
- **Windows/WSL path normalization** — Recurring root cause across pets (#20730), Visualize (#40100), and sandbox setup (#34928); `apply_patch` escaping writable roots (#31434) adds a security angle.
- **Auth instability** — Sign-outs on 401s (#39189), repeated sign-in screens (#39803), and missing auth headers in 0.149.0 (#39883) indicate regressions in the desktop/CLI auth path.
- **Cloudflare/WAF interference** — Legitimate WebSearch and analytics traffic blocked with 403 managed challenges (#29197, #18456), especially from HKG edge and Windows clients.
- **Rate-limit opacity** — Unexpected reset-date changes (#30816), disappearing 5-hour buckets (#32707), and general confusion around global vs. banked resets (#40053) undermine trust in usage reporting.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-23

## Today's Highlights
The latest nightly release hardens the macOS Seatbelt sandbox by isolating Docker and container runtime sockets and binaries, closing a potential sandbox-escape vector via hypervisor filesystem mounts. Subagent reliability continues to dominate the issue tracker: the most-commented bug reports MAX_TURNS interruptions being falsely reported as GOAL success, alongside persistent reports of generalist agent hangs. Security work is also prominent in the PR queue, including a fix for a variable-expansion bypass of a known advisory and consent prompts for extension environment changes.

## Releases
**v0.56.0-nightly.20260822.g5411f113c**
- fix(sandbox): isolate Docker and container runtime sockets and binaries in macOS Seatbelt by @josebalius ([PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935)). Denies access to container runtime daemon UNIX sockets, CLI binaries, Mach/XPC service lookups, and POSIX shared memory to prevent sandbox escape via container hypervisor filesystem mounts (e.g., Docker Desktop VirtioFS).

## Hot Issues
1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — **Subagent recovery after MAX_TURNS is reported as GOAL success** (p1, 13 comments). `codebase_investigator` reports `status: "success"` even when it hit the turn limit before doing any analysis. Misleading termination status erodes trust in agent self-reporting; the highest-activity issue this cycle.
2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — **Generalist agent hangs forever** (p1, 8 👍, 8 comments). Simple operations like folder creation hang for up to an hour; the only workaround is instructing the model never to defer to subagents. Highest 👍 count among open bugs.
3. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — **Shell command stuck with "Waiting input" after completion** (p1, 3 👍). Trivial commands remain marked active indefinitely; points to a shell-execution state-machine bug in the core loop.
4. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — **Browser subagent fails in Wayland** (p1). Browser agent reports `Termination Reason: GOAL` but the task did not succeed; affects Wayland users specifically and is marked need-retesting.
5. [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — **get-shit-done output hook crashes Gemini** (p1). Crash occurs repeatedly while printing the final user summary, likely in output-hook rendering.
6. [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) — **`/bug` report lacks subagent context** (p1). Reports contain only the main session, making subagent failures impossible to diagnose from bug reports.
7. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — **Gemini doesn't use skills and sub-agents on its own** (p2). Anecdotal but widely agreed: custom skills are ignored unless explicitly demanded, undermining the value of user-configured agents.
8. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — **Auto Memory retries low-signal sessions indefinitely** (p2). Sessions the extractor decides to skip are never marked processed and resurface repeatedly — part of the memory-system reliability cluster (#26516, #26523, #26525).
9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — **400 error with >128 tools** (p2). The CLI exceeds API tool-count limits; users expect dynamic scoping of enabled tools instead of a hard failure.
10. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — **Symlinked agent files not recognized** (p2). `~/.gemini/agents/filename.md` fails to register as an agent when it's a symlink, breaking dotfile-management workflows (chezmoi, GNU Stow).

Honorable mentions: [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (destructive-behavior guardrails), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) (browser agent ignores `settings.json`), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) (stuck at interactive `vite` prompt), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) (terminal resize flicker).

## Key PR Progress
1. [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) (security, p1) — Blocks `$VAR` and `${VAR}` variable-expansion bypass of the GHSA-wpqr-6v78-jr5g security gate in `detectBashSubstitution()`/`detectPowerShellSubstitution()`, plus dedup-workflow hardening.
2. [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) (core, p2) — Stops `refreshStatic()` from clearing terminal scrollback in standard terminal mode, fixing scrollback loss on GNOME Terminal, xterm, Alacritty, and Konsole.
3. [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) (extensions, p3) — Dedupes symlinked/junctioned skills directories (`.gemini` → `.agents`) during discovery, fixing duplicate skill scans for users following the open Agent Skills standard (fixes #28944).
4. [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) (extensions) — Prompts for user consent on extension environment changes and sanitizes runtime-altering env vars before spawning MCP server processes.
5. [#28961](https://github.com/google-gemini/gemini-cli/pull/28961) (core) — Realigns `write.toml` safety-checker definitions to top-level `[[safety_checker]]` arrays so `AllowedPathChecker` is correctly registered for `write_file` and `replace` tools.
6. [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) (a2a-server) — Clears stale cancellation errors on new message turns, fixing the "Execution aborted" crash loop in Google Cloud Assistant after a cancelled request.
7. [#27862](https://github.com/google-gemini/gemini-cli/pull/27862) (core, p2, help wanted) — Preserves executing subagent tool calls in the UI so they no longer vanish from the display while still running (fixes #22589).
8. [#27863](https://github.com/google-gemini/gemini-cli/pull/27863) (core, p1, help wanted) — Prioritizes structured display titles (`_toolDisplayName` → `_toolName`) in tool invocation rendering (fixes #23018).
9. [#27754](https://github.com/google-gemini/gemini-cli/pull/27754) (a2a-server, p1, help wanted) — Adds missing `return` after the 501 response in `GET /tasks/metadata`, preventing `ERR_HTTP_HEADERS_SENT` crashes (fixes #21729).
10. [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) / [#28963](https://github.com/google-gemini/gemini-cli/pull/28963) (docs, p1) — Correct `excludeTools` documentation: entries are matched by exact tool name, so examples like `run_shell_command(rm -rf *)` never matched anything; docs now point command-level blocking to the policy engine.

Also notable: [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) (macOS Seatbelt sandbox isolation, shipped in tonight's nightly), [#28960](https://github.com/google-gemini/gemini-cli/pull/28960) (trailing-period fix in displayed Antigravity auth URL), [#28892](https://github.com/google-gemini/gemini-cli/pull/28892) (preserve empty text turns carrying tool/media payloads).

## Feature Request Trends
- **Self-directed agent behavior**: The community wants the agent to proactively use skills and sub-agents (#21968), understand its own CLI flags and hotkeys (#21432), and self-limit destructive commands like `git reset`/`--force` (#22672).
- **AST-aware code navigation**: Epic #22745 and follow-up #22746 propose AST-aware file reads, search, and codebase mapping to cut token noise, avoid misaligned reads, and improve `codebase_investigator`.
- **Persistent file-based task tracking**: #18836 and #21000 push to replace in-context `WriteToDo` with a durable task tracker to prevent context rot and cross-session memory loss.
- **Memory-system hardening**: The Auto Memory cluster (#26516, #26522, #26523, #26525) demands deterministic secret redaction before model context, quarantine of invalid patches, and termination of low-signal retry loops.
- **Subagent observability**: Requests to expose subagent trajectories via `/chat share` (#22598) and include them in `/bug` reports (#21763) reflect a broader need for agent introspection.
- **Sandboxing and security guardrails**: From Zero-Dependency OS Sandboxing (#19873) to variable-expansion blocking (#28902), users increasingly expect defense-in-depth against prompt-injected or accidental destructive commands.

## Developer Pain Points
- **Agent hangs and stalls** are the most upvoted frustration: the generalist agent hangs indefinitely (#21409), shell commands idle at "Waiting input" (#25166), and interactive prompts (e.g., `vite` scaffolding) deadlock (#22465).
- **Misleading status reporting**: Subagents that hit MAX_TURNS are reported as GOAL success (#22323), and `/bug` reports omit subagent context (#21763) — failures are both misrepresented and hard to debug.
- **Configuration silently ignored**: The browser agent ignores `settings.json` overrides (#22267), symlinked agent definitions are dropped (#20079), and `excludeTools` docs describe patterns that never match (#28966), misleading extension authors.
- **Terminal UX regressions**: Scrollback clearing on static refresh (#28954/#28967) and flicker on resize (#21924) disrupt long-running sessions.
- **Context and token bloat**: Large file reads "firehose" context (#19561), and the model scatters temporary scripts across directories (#23571), creating cleanup overhead before commits.
- **Security-sensitive memory pipeline**: Auto Memory sends transcript content to the model before redaction and over-logs skill data (#26525) — a real concern for users working with proprietary codebases.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-23

## Today's Highlights
No new releases or pull request activity landed in the last 24 hours. The community conversation centered on model flexibility: multiple BYOK providers, local model switching via `/model`, and fewer session restarts. Also notable are reported reliability issues around MCP server compatibility, Windows auto-update orphan processes, and cloud-mode connection hangs.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
Top 10 noteworthy issues updated in the last 24 hours:

- **[#3709] Allow `/model` to switch between multiple models, including BYOK/local providers, in one session** — 👍 27 · 💬 5  
  Users want to switch between GitHub-hosted and BYOK/local models without restarting the CLI. This is one of the most-upvoted feature requests today.  
  https://github.com/github/copilot-cli/issues/3709

- **[#3282] Add multiple BYOK model capability in Copilot CLI** — 👍 26 · 💬 9  
  The current BYOK flow supports only one model via environment variable. Users want multiple BYOK models available and switchable inside the TUI.  
  https://github.com/github/copilot-cli/issues/3282

- **[#2306] Intermittent enterprise authorization error: “You are not authorized to use this Copilot feature”** — 👍 3 · 💬 7  
  Users report this appears 2–3 times per week and then disappears, causing disruption in enterprise/organization policy environments.  
  https://github.com/github/copilot-cli/issues/2306

- **[#4370] Copilot CLI 1.0.79-1 fails MCP initialization when `server/discover` returns `-32602`** — 👍 1 · 💬 2  
  FastMCP-based MCP servers don’t implement `server/discover`, and Copilot treats the method-not-found response as a fatal initialization error.  
  https://github.com/github/copilot-cli/issues/4370

- **[#4568] `--cloud` owner picker hangs, reconnect crashes, and task polling reaches 429** — 👍 0 · 💬 0  
  Cloud mode can hang when there is no repository context, and provisioning/polling then fails or rate-limits.  
  https://github.com/github/copilot-cli/issues/4568

- **[#4566] Agent repeatedly acknowledges work without executing tool actions** — 👍 0 · 💬 1  
  A reported reliability issue where the agent says it will perform an action but never invokes the tool. Reproduced on `gpt-5.3-codex` with Copilot CLI 1.0.80.  
  https://github.com/github/copilot-cli/issues/4566

- **[#4567] Explicitly trust an insecure (`http://`) OTLP exporter endpoint** — 👍 0 · 💬 0  
  Local OTLP collectors such as `http://localhost:4318` are currently rejected, silently disabling telemetry export. Users request an opt-in for loopback HTTP endpoints, aligning with VS Code behavior.  
  https://github.com/github/copilot-cli/issues/4567

- **[#4514] Unable to restore remote session locally** — 👍 1 · 💬 1  
  Attempting to `/resume` a remote session fails locally, blocking continuity when moving between environments.  
  https://github.com/github/copilot-cli/issues/4514

- **[#4111] Windows: long-running sessions remain on `copilot.exe.old` after in-place auto-update and spin at 100% CPU** — 👍 0 · 💬 1  
  Interactive and `--plan` sessions on Windows keep running from the renamed old binary after auto-update, and many orphaned processes consume CPU indefinitely.  
  https://github.com/github/copilot-cli/issues/4111

- **[#4564] Pending prompts stay on the screen after being fired** — 👍 0 · 💬 0  
  Queued prompts remain labeled `(pending · ctrl+c to cancel)` even after the steering command is injected, causing confusing TUI state.  
  https://github.com/github/copilot-cli/issues/4564

## Key PR Progress
No pull request updates were recorded in the last 24 hours.

## Hot Discussions
No discussion data was provided for this digest period.

## Feature Request Trends
- **Multi-model and BYOK session switching** is the clearest trend: users want to configure multiple BYOK/local models and switch dynamically via `/model` without restarting or changing environment variables. (#3709, #3282)
- **More flexible telemetry endpoints**: an opt-in path for trusting insecure local OTLP exporters like `http://localhost:4318`. (#4567)
- **Cloud/session reliability improvements**: restoring remote sessions locally and avoiding hang/rate-limit loops in `--cloud` mode. (#4514, #4568)
- **Broader MCP server compatibility** beyond strict `server/discover` implementations. (#4370)

## Developer Pain Points
- **Model-switching friction**: BYOK mode pins a session to a single model, forcing users to terminate sessions to change models.
- **Enterprise policy authorization flakiness**: intermittent authorization errors disrupt workflows even when policies are correctly enabled.
- **Windows auto-update instability**: in-place updates leave orphaned processes running from renamed binaries with high CPU usage.
- **Agent reliability gaps**: agents sometimes acknowledge work but fail to execute tool actions.
- **Ecosystem integration rough edges**: MCP servers with non-standard method support and local OTLP HTTP collectors are not handled gracefully.
- **Cloud mode instability**: hanging owner pickers, failed reconnects, and 429 responses when polling tasks make `--cloud` sessions unreliable.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-23

## Today's Highlights
The community is in a reliability-focused cycle: high-severity reports describe mid-stream provider failures causing silent truncation, permanently stuck sessions, and a desktop startup regression affecting v1.18.5–v1.18.13. Meanwhile, the long-running sandboxing request (#2242) remains the most engaged open issue, and a wave of contributor PRs is landing refactors to the AI provider and Responses channel layers.

## Releases
_No new releases published in the last 24 hours._

## Hot Issues

1. **Sandboxing the agent** — [#2242](https://github.com/anomalyco/opencode/issues/2242) (83 comments, 👍71)  
   The most-discussed open issue: users want to restrict terminal/file access outside the working directory, similar to seatbelt enforcement in Gemini CLI/Codex CLI. Strong, sustained demand for OS-level sandboxing, still unaddressed after a year.

2. **Custom system prompts** — [#7101](https://github.com/anomalyco/opencode/issues/7101) (35 comments, 👍127)  
   Now closed. The highest-voted feature request: load custom system prompts from global/project/custom directories, driven by a Reddit discussion on shortening system prompts.

3. **Lazy-load MCP tool definitions** — [#35376](https://github.com/anomalyco/opencode/issues/35376) (8 comments)  
   Closed. All MCP tool definitions are injected into every conversation's system prompt; with 9+ MCP servers this creates enormous token overhead. Clear signal that MCP scalability is a priority.

4. **"Auto mode" permission classifier** — [#37564](https://github.com/anomalyco/opencode/issues/37564) (7 comments, 👍22)  
   Requests an LLM-based classifier that auto-approves permission requests (related to #33585), mirroring auto-approval features in other agentic CLIs.

5. **Desktop app fails to load providers/models/MCP on startup** — [#40516](https://github.com/anomalyco/opencode/issues/40516) (6 comments)  
   A version regression: v1.18.4 works correctly, but v1.18.5–v1.18.13 fail on ~80% of starts for users across an organization. Downgrading is the only workaround.

6. **Sessions permanently stuck** — [#43277](https://github.com/anomalyco/opencode/issues/43277) (4 comments)  
   Sessions refuse new messages during normal use, survive full system reboots, and cannot be recovered via server restart — a severe data-loss/reliability bug.

7. **Silent stream truncation persisted as complete + TUI desync** — [#44210](https://github.com/anomalyco/opencode/issues/44210) (2 comments)  
   Responses cut off mid-generation dozens of times per day; the UI stays blocked until the user manually types "resume". Provider errors are being persisted as complete responses in SQLite.

8. **Managed gateway kills turns mid-stream** — [#44044](https://github.com/anomalyco/opencode/issues/44044) (2 comments)  
   Two months of logs show intermittent 503s and silent hangs on the managed `opencode` provider with no client-side timeout, causing agent turns to die mid-stream.

9. **Incorrect cost estimates for tiered context pricing** — [#42910](https://github.com/anomalyco/opencode/issues/42910) (4 comments)  
   Session cost estimates use the small-context price even after crossing into a higher pricing tier, under-reporting real spend.

10. **Sub-agent silently returns empty result on final-stream failure** — [#40527](https://github.com/anomalyco/opencode/issues/40527) (3 comments)  
    When a sub-agent's final response stream fails (e.g., 503), the parent gets an empty result with no error and no retry — the sub-agent's completed work is silently discarded.

## Key PR Progress

1. **feat(session): add suffix compaction** — [#44264](https://github.com/anomalyco/opencode/pull/44264)  
   Adds experimental `compaction.mode: "suffix"` for both session runtimes while keeping prepend as the default — useful for preserving system-prompt-adjacent context.

2. **fix(console): allow free Go models past quota** — [#44265](https://github.com/anomalyco/opencode/pull/44265)  
   Classifies zero-cost Go models as free so exhausted-quota and balance fallback checks don't block them on Go subscription billing.

3. **fix(tui): flatten autocomplete descriptions** — [#44261](https://github.com/anomalyco/opencode/pull/44261)  
   Collapses whitespace in autocomplete descriptions so multiline skill descriptions render on a single aligned selector row.

4. **feat(opencode): per-MCP-server trust configuration** — [#40125](https://github.com/anomalyco/opencode/pull/40125)  
   Fingerprint pinning lets users trust specific self-signed certs per MCP server instead of disabling verification globally; also handles private CAs and addresses #23506.

5. **fix(opencode): skip nested repositories in snapshots** — [#44259](https://github.com/anomalyco/opencode/pull/44259)  
   Excludes directory-shaped untracked entries (embedded Git repos) from legacy snapshot staging while continuing to capture ordinary untracked files.

6. **fix(provider): inject placeholder text for empty assistant wire messages** — [#38270](https://github.com/anomalyco/opencode/pull/38270)  
   Fixes aborted reasoning-only turns and step-start splits on openai-compatible providers where assistant messages end up with no non-empty text (closes #37946).

7. **fix(a11y): expose streaming assistant content to screen readers** — [#38393](https://github.com/anomalyco/opencode/pull/38393)  
   Fixes an accessibility issue where streamed assistant content was hidden from screen readers during generation (closes #33137).

8. **fix(session): end the turn loop by reply parent, not message ID order** — [#38387](https://github.com/anomalyco/opencode/pull/38387)  
   Fixes a session turn loop caused by treating client-supplied message IDs as timestamps (closes #35741).

9. **feat(config): add {file:...} interpolation to agent markdown prompts** — [#38379](https://github.com/anomalyco/opencode/pull/38379)  
   Adds `{file:path}` syntax to agent markdown configs, enabling prompt modularity and reuse.

10. **feat(core): honor CLAUDE_CONFIG_DIR for Claude state** — [#38370](https://github.com/anomalyco/opencode/pull/38370)  
    Respects `CLAUDE_CONFIG_DIR` instead of hardcoding `~/.claude` when locating Claude Code user-level state (global CLAUDE.md, skills, editor ID; closes #6551).

## Hot Discussions
_No discussion data provided for this digest._

## Feature Request Trends
- **Security & sandboxing**: The dominant theme. Users want OS-level sandboxing (#2242), per-MCP-server trust configuration (#40125), and LLM-classified auto-approval for permissions (#37564).
- **MCP efficiency & scalability**: Lazy-loading MCP tool definitions (#35376) to cut token overhead, plus per-server trust and OAuth handling (Figma MCP, #38360), indicate MCP is becoming a first-class integration surface.
- **Customization & extensibility**: Custom system prompts (#7101), `{file:...}` interpolation (#38379), disabling plugins via CLI (#7687), and Claude config dir support (#38370) show demand for deep configurability.
- **Session & desktop UX**: Fork buttons on assistant responses (#36960), clickable file paths in desktop chat (#37891), tab shortcuts (#37077), MRU-order tab cycling (#44258), and project rename/move while persisting session history (#44256).

## Developer Pain Points
- **Reliability & silent failures**: Stream truncation persisted as complete responses (#44210), permanently stuck sessions (#43277), sub-agent work lost on 503s (#40527), and managed-gateway mid-stream hangs (#44044) — the recurring theme is lost work and opaque failure modes.
- **Desktop regressions**: The v1.18.5–v1.18.13 startup regression (#40516) and agent-status UI freezes (#44226) are eroding trust in the desktop app.
- **Provider compatibility friction**: Bedrock proxies receiving wrong cache headers (#25984), Copilot Student plan accounts missing the provider (#34644), EU Enterprise OAuth failures (#43615), and NVIDIA NIM returning 404/410 errors (#44204).
- **Cost transparency**: Incorrect tiered-pricing estimates (#42910), MCP token overhead (#35376), and balance/quota enforcement quirks (#44193, #44265) show cost visibility is a growing concern.
- **Diff review clarity**: Character-level changes are hard to spot in side-by-side diffs (#36824), slowing down approval workflows for small edits.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-23

## Today's Highlights

The past 24 hours were dominated by Windows and terminal reliability: a ConPTY autowrap fix ([#8485](https://github.com/earendil-works/pi/pull/8485)) landed for the editor scroll/cursor-loss regression ([#8484](https://github.com/earendil-works/pi/issues/8484)), while a 39-comment community thread ([#7547](https://github.com/earendil-works/pi/issues/7547)) is helping maintainers prioritize Windows work. Context compaction remains the top open concern — the most-upvoted bug ([#6879](https://github.com/earendil-works/pi/issues/6879), 18👍) is still unaddressed, with several related proposals filed this week. The ecosystem keeps expanding with a new MindsHub provider ([#8488](https://github.com/earendil-works/pi/pull/8488)) and multiple requests for DeepSeek's new vision model.

## Hot Issues

1. **#7547 — [Windows] How do you use Pi on Windows? What issues are you seeing?** ([link](https://github.com/earendil-works/pi/issues/7547)) — 39 comments. The community is cataloging Windows pain points and usage modes to help the team decide where to invest (native vs. WSL, terminal quirks, docs). Strong signal that Windows adoption is growing faster than platform polish.

2. **#6879 — Auto-compaction never triggers until provider overflow** ([link](https://github.com/earendil-works/pi/issues/6879)) — 18👍, the most-upvoted open issue. A 2-hour agentic turn on gpt-5.6-sol climbed past the compaction threshold until the API rejected the request at 373k tokens. Users want a compaction check after every agentic step, not just at turn boundaries.

3. **#7130 — Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered)** ([link](https://github.com/earendil-works/pi/issues/7130)) — 11 comments. Keyboard protocol edge case where release events aren't filtered; a related variant also surfaces inside herdr panes ([#8442](https://github.com/earendil-works/pi/issues/8442)).

4. **#8167 — Cannot pick a model with built-in llama.cpp support** ([link](https://github.com/earendil-works/pi/issues/8167)) — llama-server router-mode models are loadable via `/llama` but invisible in the model list. Now addressed by PR [#8479](https://github.com/earendil-works/pi/pull/8479), which exposes unloaded presets.

5. **#8468 — GitHub Copilot fails with timeout** ([link](https://github.com/earendil-works/pi/issues/8468)) — "Failed to login to GitHub Copilot: The operation was aborted due to timeout." The reporter pinpoints a fix in unreleased PR [#8254](https://github.com/earendil-works/pi/pull/8254) and is waiting for the next release.

6. **#8464 — Handle output-limit continuation and mid-turn compaction** ([link](https://github.com/earendil-works/pi/issues/8464)) — Requests that Pi auto-continue when a model genuinely hits its output token limit, and that compaction be checked between completed tool turns so long tool loops can't run past configured thresholds.

7. **#7885 — npm search not indexing newly published pi-packages** ([link](https://github.com/earendil-works/pi/issues/7885)) — `pi-affix-prompt` never appears in `npm search` or the pi.dev gallery, which mirrors npm search (49/50 listed packages are found). Direct extension discoverability is broken for new publishers (see Discussion [#8461](https://github.com/earendil-works/pi/discussions/8461)).

8. **#8484 — Windows: editor view scrolls to top / cursor lost below fold** ([link](https://github.com/earendil-works/pi/issues/8484)) — While editing long multi-line prompts in Windows Terminal, the rendered frame drifts so the cursor disappears below the fold. Root cause identified as ConPTY autowrap drift; fixed in [#8485](https://github.com/earendil-works/pi/pull/8485).

9. **#8434 — TUI unresponsive and input echoing in v0.84.2** ([link](https://github.com/earendil-works/pi/issues/8434)) — Upgrade regression from v0.83.0 on Ubuntu 24.04.4: `/login` is echoed with no response, and VS Code terminals render garbled ASCII. Eroding trust in the v0.84.x line.

10. **#8441 — Windows: "Path outside repository" for all tools with explicit path argument** ([link](https://github.com/earendil-works/pi/issues/8441)) — Separator mismatch in the containment check rejects valid paths on Windows in v0.84.2, blocking file tools when an explicit path is passed.

## Key PR Progress

1. **#8474 — feat(coding-agent): bundle Node runtime** ([link](https://github.com/earendil-works/pi/pull/8474)) — Reworks bundling so `pi-coding-agent` loads dramatically fewer files, targeting slow startup on machines with slow I/O — particularly Windows Defender scenarios.

2. **#8485 — fix(tui): disable autowrap around main-screen renders to prevent ConPTY drift** ([link](https://github.com/earendil-works/pi/pull/8485)) — Fixes [#8484](https://github.com/earendil-works/pi/issues/8484) by preventing ConPTY's eager wrap commit from breaking `\r\n` navigation between full-width lines.

3. **#8488 — feat(ai): add MindsHub provider** ([link](https://github.com/earendil-works/pi/pull/8488)) — New built-in `pi-ai` provider: one OpenAI/Anthropic-compatible endpoint (`api.mindshub.ai/v1`) spanning Claude, GPT, Gemini, Kimi, DeepSeek, Qwen, and GLM models.

4. **#8479 — fix: expose unloaded llama.cpp presets** ([link](https://github.com/earendil-works/pi/pull/8479)) — Makes llama-server `--models-preset` entries selectable even without `--no-models-autoload`; closes [#8167](https://github.com/earendil-works/pi/issues/8167).

5. **#8487 — fix(coding-agent): expose finish reason compatibility override** ([link](https://github.com/earendil-works/pi/pull/8487)) — The override already existed in the API but was missing from exposed types; closes [#8460](https://github.com/earendil-works/pi/issues/8460).

6. **#8486 — feat(tui): add editor-scroll capture and verification tooling** ([link](https://github.com/earendil-works/pi/pull/8486)) — Adds a scriptable minimal TUI app on the real `TuiMainScreen` + `Editor` stack to reproduce and verify editor scroll behavior.

7. **#7148 — feat(coding-agent): Experimental loadout management** ([link](https://github.com/earendil-works/pi/pull/7148)) — Long-running draft adding `/loadout` to enable/disable extensions mid-session, persisted per-session and restored on resume. Needs user confirmation before merge.

8. **#8295 — feat(coding-agent,tui): add locale switching via /settings** ([link](https://github.com/earendil-works/pi/pull/8295)) — Adds a language selector submenu (English / Simplified Chinese), persisted locale via `SettingsManager`, and shared locale validation utilities.

9. **#8459 — fix(tui): keep / and - inside fullscreen double-click word selection** ([link](https://github.com/earendil-works/pi/pull/8459)) — `Intl.Segmenter` treated `/` and `-` as word boundaries, so double-clicking a path only selected one component; now selects the whole path.

10. **#8482 — docs(coding-agent): point custom footer docs at ctx.getContextUsage()** ([link](https://github.com/earendil-works/pi/pull/8482)) — Small docs correction for custom footer context usage; closes [#8392](https://github.com/earendil-works/pi/issues/8392).

## Hot Discussions

**Q&A**
- **#3373 — Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?** ([link](https://github.com/earendil-works/pi/discussions/3373)) — 13 comments, 8👍. A non-Discord channel for extension recommendations; useful signal for which extensions the community actually relies on.
- **#8461 — How long does it take to have my extension available for search/listing in pi.dev/packages?** ([link](https://github.com/earendil-works/pi/discussions/8461)) — Published two days ago, only reachable via direct link; the response to this question is upstream of the npm search indexing bug ([#7885](https://github.com/earendil-works/pi/issues/7885)).

**Ideas**
- **#1546 — Feature: Session-aware extension lifecycle for multi-session processes** ([link](https://github.com/earendil-works/pi/discussions/1546)) — 5👍. Extensions assume one process = one session, forcing `globalThis` state hacks. With RemoteSession ([#8481](https://github.com/earendil-works/pi/issues/8481)) and multi-session use cases on the horizon, this limitation is becoming more relevant.

## Feature Request Trends

- **New AI providers & models** — MindsHub ([#8488](https://github.com/earendil-works/pi/pull/8488)/[#8489](https://github.com/earendil-works/pi/issues/8489)) and Parasail ([#8450](https://github.com/earendil-works/pi/issues/8450)) additions; duplicate requests for `deepseek-v4-flash-vision-exp` ([#8469](https://github.com/earendil-works/pi/issues/8469), [#8438](https://github.com/earendil-works/pi/issues/8438)); OpenRouter reasoning-mandatory model compatibility ([#8454](https://github.com/earendil-works/pi/issues/8454)).
- **Compaction & context management** — Check compaction after every agentic step ([#6879](https://github.com/earendil-works/pi/issues/6879)), auto-continue on output-limit plus mid-turn compaction ([#8464](https://github.com/earendil-works/pi/issues/8464)), compaction prompts that preserve continuation state ([#8452](https://github.com/earendil-works/pi/issues/8452)), safe tail reduction when provider-relevant turns exceed `keepRecentTokens` ([#8498](https://github.com/earendil-works/pi/issues/8498)).
- **Windows & terminal compatibility** — ConPTY rendering fixes ([#8485](https://github.com/earendil-works/pi/pull/8485)), consolidated Windows usage data ([#7547](https://github.com/earendil-works/pi/issues/7547)), keybinding conflicts ([#8372](https://github.com/earendil-works/pi/issues/8372)), path-separator containment bugs ([#8441](https://github.com/earendil-works/pi/issues/8441)).
- **Extension ecosystem maturity** — Mid-session loadout management ([#7148](https://github.com/earendil-works/pi/pull/7148)), `--exclude-extensions` flag ([#8431](https://github.com/earendil-works/pi/issues/8431)), SQLite-backed memory extension ([#8385](https://github.com/earendil-works/pi/issues/8385)), shared request IDs across lifecycle hooks ([#8380](https://github.com/earendil-works/pi/issues/8380)), session-aware extension lifecycle ([#1546](https://github.com/earendil-works/pi/discussions/1546)).
- **TUI/UX customization** — Model selector display names instead of raw IDs ([#8429](https://github.com/earendil-works/pi/issues/8429)), configurable default expanded/collapsed per block type ([#8448](https://github.com/earendil-works/pi/issues/8448)), model-selection persistence scoped by session/directory ([#8376](https://github.com/earendil-works/pi/issues/8376)).

## Developer Pain Points

- **Context overflow is the top complaint** — 18👍 on [#6879](https://github.com/earendil-works/pi/issues/6879) shows compaction that fires too late (or not at all) is a real trust-breaker; companion requests ([#8464](https://github.com/earendil-works/pi/issues/8464), [#8498](https://github.com/earendil-works/pi/issues/8498)) confirm long agentic and tool loops are common and under-protected.
- **Windows remains rough around the edges** — ConPTY drift ([#8484](https://github.com/earendil-works/pi/issues/8484)), path separator bugs ([#8441](https://github.com/earendil-works/pi/issues/8441)), TUI input echoing ([#8434](https://github.com/earendil-works/pi/issues/8434)), Defender-driven startup costs ([#8474](https://github.com/earendil-works/pi/pull/8474)), and keybinding conflicts ([#8372](https://github.com/earendil-works/pi/issues/8372)). Maintainers are deliberately consolidating these via [#7547](https://github.com/earendil-works/pi/issues/7547).
- **Terminal keyboard protocol edge cases** — Kitty keyboard protocol keeps producing backspace/input bugs ([#7130](https://github.com/earendil-works/pi/issues/7130), [#8442](https://github.com/earendil-works/pi/issues/8442)), especially under nested panes.
- **Extension discoverability is broken for new publishers** — npm search lag ([#7885](https://github.com/earendil-works/pi/issues/7885)) silently hides newly published packages from pi.dev's gallery, forcing workarounds like direct links (Discussion [#8461](https://github.com/earendil-works/pi/discussions/8461)).
- **Upgrade regressions erode trust** — v0.83.0 → v0.84.2 broke the TUI on Ubuntu/VS Code setups ([#8434](https://github.com/earendil-works/pi/issues/8434)); users are increasingly pinning versions while waiting for patch releases.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-23

## Today's Highlights

Qwen Code shipped **v0.22.0** with Web Shell memory-safety hardening ([#9303](https://github.com/QwenLM/qwen-code/pull/9303)), bounding transcript retention to prevent the OOM crashes seen in long-running sessions. Review loops can now tell authors *why* they aren't settling by citing specific files with recurring findings, with the first piece landing in nightly `v0.21.14-nightly.20260822`. Security continues to dominate design discussion: containerizing review-executed code ([#9556](https://github.com/QwenLM/qwen-code/issues/9556), [#9723](https://github.com/QwenLM/qwen-code/pull/9723)) and deterministic tool-execution boundaries ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)) are the most active threads.

## Releases

- **v0.22.0** — Web Shell prevents out-of-memory crashes by bounding transcript retention and trimming oversized replays. ([#9303](https://github.com/QwenLM/qwen-code/pull/9303))
- **v0.21.14-nightly.20260822.7a4566cb3b** — Adds `feat(review)`: tells the author why a review loop is not settling ([#9461](https://github.com/QwenLM/qwen-code/pull/9461)), plus a CI fallback fix.

## Hot Issues

1. **[#8102 — Deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)** (17 comments)
   Proposal to keep the LLM outside the trust boundary and deterministically constrain, authorize, observe, and evaluate tool actions. The most-discussed issue of the week and a throughline for several review-security PRs.

2. **[#9278 — Design: /review publish-time convergence advisory](https://github.com/QwenLM/qwen-code/issues/9278)** (9 comments)
   Documents the "uncontrolled loop": review findings → agent fixes → larger diff → more findings, with the only damping being prose in `AGENTS.md`. Tracks telemetry, diagnosis, and operator-owned posting surfaces.

3. **[#9556 — Should the review pipeline keep granting code execution as the invoking user?](https://github.com/QwenLM/qwen-code/issues/9556)** (8 comments)
   Every unresolved finding across 20 review rounds on #9221 starts from code already executing as the review's own user inside its worktrees. This capability grant is now being re-examined; PR #9723 is the container-boundary answer.

4. **[#9002 — Python SDK rejects `permission_mode="auto"` though the CLI supports it](https://github.com/QwenLM/qwen-code/issues/9002)** (6 comments, closed)
   Client-side SDK validation blocks a mode the CLI accepts, breaking SDK users who want auto-edit workflows. A parity bug between official surfaces.

5. **[#9198 — OOM after a week-long run; terminal UI corrupts](https://github.com/QwenLM/qwen-code/issues/9198)** (5 comments)
   A 1TB server OOMs after running over a week; the tmux window degrades into garbled, unreadable output. User notes Kimi Code doesn't exhibit this. Directly motivates the v0.22.0 transcript-bounding fix.

6. **[#9706 — Auto session title echoes the TITLE_SYSTEM_PROMPT example verbatim](https://github.com/QwenLM/qwen-code/issues/9706)** (4 comments, closed)
   Across unrelated sessions, titles are generated as literally *"Fix login button on mobile"* — the example from the title-generation system prompt. A model-behavior and prompt-hygiene bug.

7. **[#9573 — Resumed sessions show 'Tool result missing from saved history'](https://github.com/QwenLM/qwen-code/issues/9573)** (4 comments)
   Tool calls that completed normally appear as failed after session resume, undermining long-running, multi-turn workflows that depend on history fidelity.

8. **[#9733 — Loop detection false-positives on verification cycles kill unattended turns](https://github.com/QwenLM/qwen-code/issues/9733)** (4 comments)
   Legitimate write-script → run → edit → re-run sequences are misclassified as loops, and terminated turns cannot resume without a human message — a serious blocker for scripted automation.

9. **[#9699 — Dependency CVE audit fails on every PR](https://github.com/QwenLM/qwen-code/issues/9699)** (4 comments, closed)
   `npm audit` reports 8 vulnerabilities (1 high) and blocks CI on all branches since 2026-08-21. High-visibility reliability incident; community is watching the fix cadence.

10. **[#9752 — ACP message rewriting crashes session startup when promptFile cannot be read](https://github.com/QwenLM/qwen-code/issues/9752)** (3 comments)
    A directory passed as `messageRewrite.promptFile` passes the existence check then throws `EISDIR`, bypassing the graceful error path entirely.

Also notable: **[#9333](https://github.com/QwenLM/qwen-code/issues/9333)** — the session-level persistent Node REPL has changed delivery form to a standalone MCP server (`@qwen-code/node-repl-mcp`) — and its dependent **[#9335](https://github.com/QwenLM/qwen-code/issues/9335)** Computer Use Skill remain active feature discussions.

## Key PR Progress

1. **[#9728 — Repair the Windows and macOS test lane failures](https://github.com/QwenLM/qwen-code/pull/9728)**
   One combined change of product fixes, test-fixture repairs, and CI-harness repairs to revive both platform lanes (#9370) without leaving `main` red.

2. **[#9723 — Run the reviewed repository's own commands behind a container](https://github.com/QwenLM/qwen-code/pull/9723)**
   Addresses #9556 by moving review-time code execution behind a container boundary, making it an operator-set policy rather than an ambient capability of the invoking user.

3. **[#9742 — Pin the verified git identity across the residue probe](https://github.com/QwenLM/qwen-code/pull/9742)**
   Replaces #9572 at its original size: `worktreeResidue` — the tripwire review agents are built from — now verifies a tree's identity once rather than re-discovering the repository across five commands.

4. **[#9744 — Count a fix-induced re-report as first-time work](https://github.com/QwenLM/qwen-code/pull/9744)**
   Fixes the convergence telemetry's first-time count so carried IDs stop under-counting findings introduced by prior fixes.

5. **[#9582 — Roll back replayed usage when a session swap fails](https://github.com/QwenLM/qwen-code/pull/9582)**
   `UiTelemetryService` gains `snapshotForReplay`/`restoreFromReplaySnapshot`, dropping the bucket on failed swaps so replayed usage doesn't leak across sessions.

6. **[#9568 — Mark estimated compression token counts in banners](https://github.com/QwenLM/qwen-code/pull/9568)**
   Locally estimated compression token counts now get a `~` prefix across `/compress`, `/compress-fast`, automatic compaction notices, and headless/ACP info messages.

7. **[#9735 — Let plan mode vouch for extra read-only shell roots](https://github.com/QwenLM/qwen-code/pull/9735)**
   New `permissions.planMode.extraReadOnlyCommands` setting suppresses approval prompts for known-safe project CLIs on every read.

8. **[#9394 — Add DingTalk Workspace channel](https://github.com/QwenLM/qwen-code/pull/9394)**
   Built-in channel using an existing authenticated DWS CLI profile: DMs, @mentions, ambient groups, document-mention notifications, and source-scoped sessions.

9. **[#9340 — Say when the approach, not the patch, is the open question](https://github.com/QwenLM/qwen-code/pull/9340)**
   Adds an advisory paragraph and verdict clause when a PR has taken enough rounds *and* grown enough that the shape of the change — not the current diff — is the real open question.

10. **[#9273 — `qwen review capture-tui`: rendering claims get pixels, not prose](https://github.com/QwenLM/qwen-code/pull/9273)**
    Drives commands in a private tmux server, captures pane text to `.ans`, and renders `.png` via `freeze`, letting verifiers produce rendering evidence instead of code arguments.

Also worth watching: **[#9719](https://github.com/QwenLM/qwen-code/pull/9719)** adopts the WebShell transcript as the default VS Code companion timeline; **[#9492](https://github.com/QwenLM/qwen-code/pull/9492)** makes loop detection result-aware for `task_list` polls.

## Feature Request Trends

- **Trustworthy / secure agent runtime** — The dominant theme: deterministic tool-execution boundaries ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)), containerized review execution ([#9556](https://github.com/QwenLM/qwen-code/issues/9556), [#9723](https://github.com/QwenLM/qwen-code/pull/9723)), and removing ambient user-level code execution from review pipelines.
- **Self-stabilizing review loops** — Convergence advisories ([#9278](https://github.com/QwenLM/qwen-code/issues/9278)), approach-vs-patch diagnostics ([#9340](https://github.com/QwenLM/qwen-code/pull/9340)), first-time finding accounting ([#9744](https://github.com/QwenLM/qwen-code/pull/9744)), and persistent-critical warnings ([#9526](https://github.com/QwenLM/qwen-code/pull/9526)) all aim to stop review/fix loops from diverging.
- **Session and daemon lifecycle fidelity** — Restore per-session model choices ([#9686](https://github.com/QwenLM/qwen-code/issues/9686)), unanswered HITL prompts ([#9664](https://github.com/QwenLM/qwen-code/issues/9664)), and reliable resume ([#9573](https://github.com/QwenLM/qwen-code/issues/9573)) reflect demand for durable long-running sessions.
- **IDE integration maturity** — VS Code companion is the fastest-growing surface: drag-drop file attachment ([#9743](https://github.com/QwenLM/qwen-code/issues/9743)), WebShell transcript adoption ([#9719](https://github.com/QwenLM/qwen-code/pull/9719)), stable block identity ([#9726](https://github.com/QwenLM/qwen-code/issues/9726)), and artifact blob CSP ([#9727](https://github.com/QwenLM/qwen-code/issues/9727)).
- **Extensible agent tooling** — Persistent Node REPL delivered as an MCP server ([#9333](https://github.com/QwenLM/qwen-code/issues/9333)) plus the Computer Use Skill ([#9335](https://github.com/QwenLM/qwen-code/issues/9335)) point toward a pluggable, MCP-first tool ecosystem.

## Developer Pain Points

- **OOM and memory growth in long sessions** — Week-long sessions OOM even on 1TB servers ([#9198](https://github.com/QwenLM/qwen-code/issues/9198)) and corrupt terminal UI; transcript bounding in v0.22.0 is a first response, but users want the terminal itself to stay stable.
- **Loop detection misfires** — False positives on legitimate verification cycles with unrecoverable turn termination ([#9733](https://github.com/QwenLM/qwen-code/issues/9733)) erode trust in unattended automation; the result-aware `task_list` fix ([#9492](https://github.com/QwenLM/qwen-code/pull/9492)) only covers one narrow class.
- **CI reliability** — The dependency CVE audit blocking every PR ([#9699](https://github.com/QwenLM/qwen-code/issues/9699)) and consistently red Windows/macOS lanes ([#9728](https://github.com/QwenLM/qwen-code/pull/9728)) interrupt development flow and delay unrelated work.
- **Session resume fidelity** — Placeholder *"Tool result missing from saved history"* errors ([#9573](https://github.com/QwenLM/qwen-code/issues/9573)) and unsettled loop detection undermine scripted multi-stage runs that depend on accurate history.
- **SDK/CLI parity gaps** — The Python SDK rejecting CLI-supported `permission_mode="auto"` ([#9002](https://github.com/QwenLM/qwen-code/issues/9002)) shows validation drift between official surfaces.

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-23

## Today's Highlights

Release prep and architecture work dominate this window: PR #5542 prepares the v0.9.11 release candidate while the supervised operation stack in PR #5535 adds lifecycle outboxing, `/relaunch`, and per-session control sockets. The TUI crate decomposition epic continues with FEAT-018 command-shape adoption (#5525) and a new multi-file `read_lints` operation (#5524). A DeepSeek V4 pricing fix also corrects Beijing weekend off-peak billing, which matters for users on Chinese-region deployments (#5545).

## Releases

No new CodeWhale releases were published in the last 24 hours. The v0.9.11 release candidate is being prepared in PR #5542 but has not been tagged yet.

## Hot Issues

Only two issues were updated in the last 24 hours. Both are listed below.

- **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)**  
  The umbrella issue for the TUI crate decomposition effort. It coordinates sub-EPICs, FEATs, and PRs across the entire restructuring. With 12 comments, it is clearly an active coordination point. No emoji reactions, but the high comment count shows steady cross-team movement.

- **[#5543 — Persist child tool approvals through the durable receipt path](https://github.com/Hmbown/CodeWhale/issues/5543)**  
  Reports a correctness gap where a child agent waiting for a parent decision does not use the durable approval receipt path. The parent flow commits an `Asked` receipt before emitting `ApprovalRequired` and commits the terminal outcome before returning an execution grant. This is a reliability-sensitive issue for multi-agent workflows, but it is new and has no comments yet.

## Key PR Progress

Seven PRs were updated in the last 24 hours; all are noted below.

- **[#5545 — fix(pricing): bill whole Beijing weekends off-peak for DeepSeek V4](https://github.com/Hmbown/CodeWhale/pull/5545)**  
  Fixes `deepseek_is_peak`, which previously decided peak/off-peak from UTC hour alone. New pricing rules effective 2026-08-23 apply off-peak rates all day on Beijing weekends, so this corrects potential overbilling.

- **[#5542 — release: prepare Codewhale v0.9.11](https://github.com/Hmbown/CodeWhale/pull/5542)**  
  Release candidate preparation on top of current `main`. Intentionally excludes `benchmarks/pi-agent-parity/**` and its release-lane ancestry, keeping the non-benchmark release surface clean.

- **[#5535 — Supervised operation stack: lifecycle outbox, /relaunch, per-session control socket, and goal-continuation quiet-period fix](https://github.com/Hmbown/CodeWhale/pull/5535)**  
  Large PR touching one seam: machine-readable supervision of long-lived sessions. Adds an opt-in JSONL/webhook lifecycle outbox with events like `turn_start`, `turn_stalled`, and `subagent_complete`, plus `/relaunch`, a per-session control socket, and a fix for goal-continuation quiet periods.

- **[#5525 — refactor(tui): adopt command shapes in utility group (FEAT-018)](https://github.com/Hmbown/CodeWhale/pull/5525)**  
  Converts the seven TUI utility command files to the external command shapes introduced by FEAT-014/FEAT-015. The files stay under `codewhale-tui`, but their execution boundary changes without physically moving them.

- **[#5524 — feat(tui): add multi-file read_lints operation](https://github.com/Hmbown/CodeWhale/pull/5524)**  
  Adds a `read_lints` operation to the model-visible `lsp` tool for multiple workspace-relative files. Reuses the session `LspManager` and its transport pool instead of creating another language-server lifecycle. Addresses approved scope from #4070.

- **[#5544 — feat(web): move docs/subagents and docs/mcp onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pull/5544)**  
  Continues the docs localization refactor. Removes 16 `isZh` branches from `docs/subagents` and 18 from `docs/mcp`, wiring two dictionaries per page and adding both files to `OPTIONAL_FILES` in `check-locales.mjs`.

- **[#1701 — chore(deps): bump portable-pty to 0.9.0](https://github.com/Hmbown/CodeWhale/pull/1701)**  
  Finally closed after being open since May. Bumps `portable-pty` from `0.8.1` to `0.9.0`, adding loongarch64 support and removing the transitive duplicate `nix 0.25.1` in favor of the workspace’s existing `nix 0.28.0`.

## Feature Request Trends

- **TUI architecture modularization** remains the strongest ongoing theme: the EPIC-005 umbrella (#5316) and FEAT-018 command-shape adoption (#5525) are pushing the TUI toward a more composable, externally visible command structure.
- **Durable and supervised agent/tool lifecycles** are emerging as a key direction. Issue #5543 asks for durable approval receipts for child tool approvals, while PR #5535 adds lifecycle outbox events and per-session control sockets.
- **Localization maintenance efficiency** is visible through the #5337 series: PR #5544 continues eliminating per-page `isZh` branches in favor of dictionary-backed pages.
- **Operational/pricing correctness** is a smaller but concrete theme: PR #5545 fixes DeepSeek V4 peak/off-peak billing for Beijing weekends, indicating growing attention to region-specific pricing rules.

## Developer Pain Points

- **Approval flow correctness is fragile**: child agents bypass the durable receipt path when waiting for parent decisions, making multi-agent tool execution harder to audit/recover.
- **TUI decomposition requires heavy coordination**: the umbrella epic (#5316) has 12 comments and spans many sub-EPICs and FEATs, which is a lot of tracking overhead for a large refactor.
- **Docs localization is slow, page-by-page work**: the `isZh` branch removal series (#5337 → #5520 → #5544) shows that fully migrating locale handling is a long tail of small, careful changes.
- **Timezone-sensitive pricing logic can be wrong at the edges**: the DeepSeek V4 bug came from deciding peak status using UTC hours, which breaks under Beijing weekend rules.
- **Dependency bumps can linger**: the `portable-pty` 0.9.0 PR was open from May to August, suggesting dependency chores can sit in review/merge queues for a long time.

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*