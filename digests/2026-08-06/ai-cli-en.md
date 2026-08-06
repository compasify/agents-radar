# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 01:24 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date**: 2026-08-06
**Scope**: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI, Grok Build

---

## 1. Ecosystem Overview

The AI CLI landscape is maturing from demo-grade assistants into production infrastructure, and the community feedback reflects that shift: session persistence, MCP interoperability, cost transparency, and agent status honesty dominate discussions across virtually every tool this week. Nine of ten tracked tools showed activity; Grok Build was silent. Release cadence varies dramatically — Codex tagged five alphas in one day while Copilot CLI shipped three stabilizing pre-releases with zero merged PRs — but the trajectory is shared: users are treating these tools as mission-critical and demanding enterprise-grade reliability, data integrity, and billing guardrails. The strongest single community signal (373 👍 on Codex's `/undo` restoration) is about recoverability of work, not model capability.

## 2. Activity Comparison

| Tool | Tracked Issues | Tracked PRs | Releases Today |
|---|---|---|---|
| Claude Code | 10 hot issues | 8 key PRs | **v2.1.223** |
| OpenAI Codex | 10 hot issues | 10 key PRs | **rust-v0.146.1** + 5 alphas |
| Gemini CLI | 10 hot issues | 10 key PRs | **v0.55.0-nightly** |
| GitHub Copilot CLI | 10 hot (23 items touched) | 0 | **3 pre-releases** (v1.0.79-2/-3/-4) |
| Kimi Code CLI | 3 (all) | 3 (all) | none |
| OpenCode | 10 hot issues | 10 key PRs | **v1.18.14** |
| Pi | 10 hot issues | 10 key PRs | none |
| Qwen Code | 10 hot issues | 10 key PRs | **v0.21.6** + nightly + **desktop-v0.1.0** |
| DeepSeek TUI | 4 (all) | 10 key PRs | none |
| Grok Build | — | — | no activity |

*Counts are digest-curated "hot/key" items, not raw GitHub totals.*

**Patterns**: Codex had the fastest iteration loop (10 PRs merged + 5 alpha tags). Qwen shipped three releases including a first desktop build. Copilot CLI is in pure stabilization mode — heavy triage, no merges. Kimi's maintainers opened two PRs within 24 hours of the MCP media-abort bug, the fastest bug-to-fix response in this digest.

## 3. Shared Feature Directions

**MCP reliability & lifecycle management** — The most pervasive theme. Copilot CLI hit FastMCP `server/discover` incompatibility (#4370), OAuth 3LO failure (#4371), enterprise policy blocks (#3934, #4378), and Azure DevOps remote breakage (#4374). Codex reported 1,300+ zombie MCP child processes (#12491) and tools not reaching Desktop threads (#19425). Kimi's image-returning MCP tool aborts mid-task after side effects (#2588). Qwen's `mcp list` hangs on slow SSE servers (#8550). OpenCode fixed cross-process OAuth refresh races (#40768). Expect protocol compliance, OAuth support, and process lifecycle hygiene to remain the #1 integration battleground.

**Cost transparency & budget guardrails** — Claude Code: $411 unattended API charge (#84350) and invisible Max session consumption (#82506). Codex: 600M tokens/day with Sol 5.6 (#32309) and unbounded image compaction payloads (#33493). OpenCode: usage/balance API at 126 👍 (#16017). Pi: negative cost reporting (#7688). Users across tools want usage APIs, budget caps, and honest accounting for autonomous runs.

**Session persistence & portability** — Claude's `--continue` cannot find `-p` sessions (#82536) and background sessions die after daemon restart (#84349). Codex's conversation history vanishes from Desktop UI after updates (#23979). OpenCode's `/sessions` regression wipes chat context (#40759). Gemini's `/compress` fails to reload sessions (#28672). The "start in CI, continue locally" workflow is broken across multiple tools simultaneously.

**Windows desktop stability** — Codex leads with Sysmon BSODs (#31035), taskkill/conhost process storms (#33776), and GPU-process crashes (#35352). Claude Code has case-sensitive path hashing emptying history (#84354). Qwen's desktop v0.1.0 crashes at startup with `EISDIR lstat 'C:'` (#8615). Pi is actively surveying Windows users (#7547). Windows is the weakest platform across the ecosystem.

**Agent status honesty** — Gemini subagents report `MAX_TURNS` interruptions as "GOAL success" (#22323). Claude shows "[Request interrupted by user]" with no actual interrupt (#78915, #84346). Qwen merges stale recaps into new turns (#8573). Pi's wait durations are invisible to the model, biasing it toward busy-polling (#5240). Communities are demanding truthful status, real wall-clock durations, and no phantom events.

**Security guardrails vs. authorized work** — Claude downgrades legitimate pen-testing from Opus 5 to 4.8 even for CVP-approved orgs (#84353, #84340). Codex blocks legitimate fuzzing/static analysis (#37161). Qwen's read-only shell classifier auto-approves command substitution (#8582, P1). Meanwhile users still want *stronger* sandboxing: Gemini sandbox proposals (#19873) and DeepSeek filesystem path allowlists (#5005). The industry is stuck between over-blocking authorized work and under-blocking actual attacks.

**Persistent memory & long-term context** — Kimi's Memory System request (#1283, 19 comments, open 5 months), Gemini's Auto Memory retry loops and privacy gaps (#26522, #26525), Claude's portable-session transcripts (#81946), and OpenCode's AGENTS.md rules being ignored (#40348) all point to one need: durable, privacy-respecting, project-scoped context.

**Undo & edit safety** — Codex's `/undo` is the top community ask at 373 👍 (#9203). Kimi's StrReplaceFile silently corrupts non-UTF-8 bytes outside the edit region (#2591). Claude's session-URL injection into commits should be opt-in (#66504, 46 👍). Byte-safe edits and reversible actions are foundational trust requirements.

## 4. Differentiation Analysis

| Tool | Signature Focus | Target User | Technical Character |
|---|---|---|---|
| **Claude Code** | Enterprise governance, plugin/skill ecosystem | Teams needing org-level controls | Managed settings, marketplace wildcards; mature but review-bottlenecked PR pipeline |
| **OpenAI Codex** | Desktop app, Rust core, fastest model rollout | Power users, CI pipelines | 5 alphas/day cadence; MCP handshake hardening; biggest Windows fragility |
| **Gemini CLI** | Google ecosystem, subagent orchestration | GCA/GCP developers | Nightly builds; 76 behavioral eval tests; PR-generator pipeline |
| **GitHub Copilot CLI** | GitHub-native, MCP registry policy | GitHub Enterprise users | Pre-release stabilization; policy-driven MCP; pinned-prompts UI polish |
| **Kimi Code CLI** | ACP protocol, integration simplicity | ACP/agent-interop developers | Small surface, fast maintainer response, graceful-degradation philosophy |
| **OpenCode** | Open-source plugin ecosystem, Go subscription | OSS/self-hosted users | 134 👍 VS Code extension demand; strong PR throughput; v1→v2 migration |
| **Pi** | Extension API, terminal purity | macOS/Rust terminal power users | pi-mono architecture; XDG compliance; AGENTS.override.md; Qwen/Copilot provider breadth |
| **Qwen Code** | Web Shell + tmux, multi-channel (Feishu/QQ) | Chinese ecosystem, Web Shell users | Tauri desktop; Live Voice; channel cards; CI review fan-out |
| **DeepSeek TUI** | Sandboxed execution, runtime API | Managed/headless clients | Verifier receipts, goal-loop API, checkpointed subagent resumption; 77-commit pending release |

**Structural divide**: Claude Code and Copilot CLI are *governance-first* (org policies, enterprise controls). Codex and Gemini are *model-platform-first* (fast model rollout, safety backports). OpenCode and Pi are *OSS-architecture-first* (extension APIs, plugin ecosystems). Qwen is *ecosystem-channel-first* (Feishu, QQ, Web Shell). DeepSeek is *sandbox-and-API-first* (managed clients, verifier receipts).

## 5. Community Momentum & Maturity

**Fastest iteration**: OpenAI Codex (10 PRs, 5 alphas) and Qwen Code (3 releases, 10 PRs). Codex's internal PRs cluster around rollout migration, MCP handshake hardening, and cyber-model interrupt policies — mature infrastructure concerns. Qwen's CI reliability work (self-hosted ECS runners) shows scaling pains.

**Highest engagement per issue**: Claude Code posts the highest upvote density (46 👍 on opt-in session URLs) and broadest issue surface, but key PRs are months overdue (#41661 open since March, #16929 since January) — community interest is outpacing maintainer throughput.

**Steady nightly cadence**: Gemini CLI closes PRs quickly, maintains 76 behavioral eval tests, and rapidly fixes regressions (thought-signature fix closed in the same window).

**Stabilization mode**: Copilot CLI touched 23 issues, shipped 3 pre-releases, merged 0 PRs — conservative triage-focused engineering.

**Small but responsive**: Kimi Code's 2-PR response within 24h of the MCP abort bug is the fastest fix cycle in this digest; DeepSeek's 77-commit v0.9.4 release train has been pending since August 1, with substantial runtime-API work not yet shipped.

**Signal strength**: The top community demands — Codex `/undo` (373 👍), OpenCode VS Code extension (134 👍), usage/balance API (126 👍) — are about safety, integration, and cost, not model quality.

## 6. Trend Signals

1. **MCP is the new LSP, and it hurts.** Seven of nine active tools reported MCP-specific failures this week: protocol incompatibility (FastMCP), OAuth gaps, SSE hangs, zombie processes, policy blocks, and media-type aborts. Tools with robust MCP lifecycle management — timeouts, OAuth refresh, process reaping, actionable diagnostics — will win enterprise integration budgets.

2. **Cost visibility is becoming a purchase criterion.** Unattended $411 charges, 600M-token days, invisible session consumption, and missing usage APIs are pushing budget caps and usage/balance endpoints onto every roadmap. Autonomous agents without cost guardrails will not be trusted for unattended pipelines.

3. **Agent status honesty is a trust prerequisite.** False success (Gemini), phantom interrupts (Claude), stale recap merges (Qwen), and invisible wait times (Pi, DeepSeek) erode confidence in autonomous operation. Tools that report accurate state — including wall-clock durations and real failure reasons — will be preferred for CI and background workflows.

4. **Windows desktop is the new frontier.** Codex BSODs, Claude MSIX corruption, Qwen startup crashes, Pi's user survey — the macOS/Linux-first development pattern is colliding with enterprise reality. Cross-platform desktop reliability is now a differentiator, not a checkbox.

5. **Security guardrails need context-awareness.** Authorized pen-testing downgraded (Claude), legitimate fuzzing blocked (Codex), read-only shell bypasses (Qwen) — the industry is caught between over-blocking legitimate security work and under-blocking actual attacks. Expect more granular, policy-aware safety systems with better appeals paths.

6. **Persistent memory is the next battleground.** Kimi's Memory System, Gemini's Auto Memory, Claude's portable transcripts, and OpenCode's AGENTS.md complaints converge on one need: durable, privacy-respecting, project-scoped context. Whoever solves redaction, provenance, and trust for agent memory will set the standard.

7. **Edit integrity is foundational.** Kimi's silent byte corruption, Codex's lost untracked files, and Claude's unwanted session URLs in commits are different faces of one demand: *the agent must never corrupt, lose, or leak my work without my consent.* This will drive undo primitives, byte-safe edit tools, and metadata opt-in defaults across the ecosystem.

8. **Release trains are getting longer but safer.** Pre-release trains (Copilot, Codex alphas, DeepSeek's 77-commit integration) indicate a shift toward staged rollout — but also create visibility gaps ("alpha tags without changelogs"). Release-transparency will matter as much as the fixes themselves.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
**Source: github.com/anthropics/skills | Data as of 2026-08-06**

---

## 1. Top Skills Ranking

The most-discussed PRs (by comment activity, all currently **open**) are dominated by fixes to the skill tooling itself plus a few notable new-skill submissions:

**#1298 — skill-creator eval overhaul** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
The most-watched PR. Fixes `run_eval.py`'s chronic `recall=0%` failure by installing the eval artifact as a real skill, and addresses Windows stream reading, trigger detection, and parallel workers. Discussion centers on the 10+ independent reproductions of the bug (#556, #1169) — the description-optimization loop was "optimizing against noise." *Status: Open.*

**#514 — document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
Typographic quality control for AI-generated documents: orphan word wrap, widow/stranded section headers, and numbering misalignment. Discussion highlights that these defects appear in nearly every Claude-generated document and users rarely ask for them explicitly. *Status: Open.*

**#538 — pdf skill case-sensitivity fix** ([PR #538](https://github.com/anthropics/skills/pull/538))
Corrects 8 case-mismatched file references (`REFERENCE.md` → `reference.md`, etc.) in `skills/pdf/SKILL.md` that break skill loading on case-sensitive filesystems. Small, low-risk, clearly correct. *Status: Open.*

**#486 — ODT/OpenDocument skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
New skill for creating, filling, and converting OpenDocument files (.odt/.ods), including ODT→HTML parsing. Triggers on ODT/ODS/ODF/LibreOffice/ISO-standard mentions. Fills a clear format gap alongside the existing docx/pdf skills. *Status: Open.*

**#210 — frontend-design skill revision** ([PR #210](https://github.com/anthropics/skills/pull/210))
Rewrites the frontend-design skill for clarity and actionability, ensuring each instruction is something Claude can execute within a single conversation and specific enough to steer behavior without over-constraining. *Status: Open.*

**#83 — skill-quality-analyzer + skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Two meta-skills for the example-skills marketplace: a quality analyzer evaluating skills across five dimensions (Structure & Documentation 20%, plus resource/examples criteria) and a security analyzer. Directly relevant to the trust concerns raised in Issue #492. *Status: Open.*

**#541 — docx tracked-change w:id collision fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
Prevents document corruption when the DOCX skill adds tracked changes to files with existing bookmarks. Root cause: OOXML shares the `w:id` space across bookmarks, comments, and tracked changes, while SKILL.md examples hardcode low IDs. *Status: Open.*

**#539 — skill-creator YAML validation** ([PR #539](https://github.com/anthropics/skills/pull/539))
Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing `:`, which silently truncate or split YAML frontmatter. A reliability guard for every future skill author. *Status: Open.*

> **Observation:** 4 of the top 8 PRs are bug fixes to skill-creator/pdf/docx tooling, not new skills — reliability of the skill infrastructure is the dominant conversation.

---

## 2. Community Demand Trends

Distilled from the most-commented Issues:

- **Trust & security boundaries** — The single most-discussed issue, [**#492**](https://github.com/anthropics/skills/issues/492) (43 comments), warns that community skills distributed under the `anthropic/` namespace enable trust-boundary abuse, letting users grant elevated permissions to non-official skills. Related: [**#1175**](https://github.com/anthropics/skills/issues/1175) (SharePoint Online security/context-window concerns) and the [**#412**](https://github.com/anthropics/skills/issues/412) agent-governance safety-patterns proposal. **Demand: provenance, permission safety, and governance.**

- **Sharing & distribution infrastructure** — [**#228**](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍, the most-liked issue) asks for org-wide skill sharing in Claude.ai instead of manual file transfers; [**#189**](https://github.com/anthropics/skills/issues/189) (9 👍) reports duplicate skills from overlapping plugins; [**#16**](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as MCPs. **Demand: organizational distribution and cleaner packaging.**

- **Skill-creator reliability** — [**#556**](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and [**#1169**](https://github.com/anthropics/skills/issues/1169) document that `run_eval.py`/`run_loop.py` report 0% recall on every query, and [**#202**](https://github.com/anthropics/skills/issues/202) argues skill-creator itself violates best-practice guidelines. **Demand: working meta-tooling before more domain skills.**

- **Context-window efficiency** — [**#1487**](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill eagerly injecting ~156k tokens in a single tool call; the [**#1329**](https://github.com/anthropics/skills/issues/1329) compact-memory proposal targets prose-heavy agent state. **Demand: lean, token-conscious skills.**

- **Most-requested new skill directions** — Agent self-management and safety: agent-governance (#412), compact-memory (#1329), and the reasoning quality-gate pipeline ([**#1385**](https://github.com/anthropics/skills/issues/1385)). **Meta-cognitive skills are the top proposed new category.**

---

## 3. High-Potential Pending Skills

Active PRs not yet merged that show strong momentum to land soon:

- [**PR #1298**](https://github.com/anthropics/skills/pull/1298) — skill-creator eval fix; critical bug, 10+ reproductions, actively updated (latest 2026-06-23). Highest-priority merge candidate.
- [**PR #538**](https://github.com/anthropics/skills/pull/538), [**#541**](https://github.com/anthropics/skills/pull/541), [**#539**](https://github.com/anthropics/skills/pull/539) — Lubrsy706's trio of small, well-scoped, verifiable fixes to pdf/docx/skill-creator; low-risk and directly address reported breakage/corruption.
- [**PR #514**](https://github.com/anthropics/skills/pull/514) — document-typography; universally applicable to document generation, no dependency risk.
- [**PR #486**](https://github.com/anthropics/skills/pull/486) — ODT skill; well-specified and fills a real format gap.
- [**PR #83**](https://github.com/anthropics/skills/pull/83) — quality/security analyzers; directly responsive to the #492 trust-boundary discussion, making it strategically timely.
- [**PR #1479**](https://github.com/anthropics/skills/pull/1479) — plan-file-hygiene skill (addressing #1417, planning-artifact lifecycle); recently updated and community-framed.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy skill infrastructure — fixing the broken skill-creator evaluation loop and adding security/quality guardrails (analyzers, self-audit, governance) — rather than for any single new domain skill.**

---

# Claude Code Community Digest — 2026-08-06

## Today's Highlights
Release v2.1.223 adds org-level marketplace wildcard controls, while the community reports a cluster of fresh bugs: false-positive cyber-safeguard downgrades to Opus 4.8, phantom "[Request interrupted by user for tool use]" messages, and background sessions lost after daemon restarts. The most-upvoted open request remains making session URLs in commit messages opt-in (46 👍).

## Releases
**v2.1.223** — Added `"owner/*"` wildcard support for `strictKnownMarketplaces` and `blockedMarketplaces` managed settings, enabling org-wide allow/block for all marketplace repos under a GitHub org. Also added a warning when workflow agents, forked skills, slash commands, or resumed background agents are affected.

## Hot Issues

1. **Claude Max session limit consumed without use** — [#82506](https://github.com/anthropics/claude-code/issues/82506) (17 comments, 7 👍). The most-discussed issue today: users report Max session limits being consumed with no visible usage. Community engagement suggests billing/usage transparency is a growing concern.

2. **Session URLs in commits should be opt-in** — [#66504](https://github.com/anthropics/claude-code/issues/66504) (12 comments, 46 👍). The most-upvoted open issue: session URLs are appended to commit messages and PR descriptions by default. Developers want this disabled by default or configurable.

3. **Cowork Desktop: AskUserQuestion never reaches renderer** — [#58750](https://github.com/anthropics/claude-code/issues/58750) (11 comments, 5 👍). On macOS, question cards never render; pending requests silently resolve as "Dismissed" on quit. Open since May with no fix yet.

4. **Claude Desktop crashes near 5-hour usage limit** — [#83403](https://github.com/anthropics/claude-code/issues/83403) (7 comments). The desktop app crashes around the 5-hour mark and requires a full reinstall to reopen — a severe reliability issue for long sessions.

5. **`--continue` cannot find `-p` sessions** — [#82536](https://github.com/anthropics/claude-code/issues/82536) (7 comments). Interactive resume fails to discover sessions created via headless print mode, breaking the "start in CI, continue locally" workflow.

6. **False-positive safeguard downgrades authorized security work** — [#84353](https://github.com/anthropics/claude-code/issues/84353) (filed today). Authorized penetration testing on Opus 5 was silently downgraded to Opus 4.8 after a safeguard flag. Related same-day reports: [#84340](https://github.com/anthropics/claude-code/issues/84340) and [#84352](https://github.com/anthropics/claude-code/issues/84352) (CVP-approved orgs still blocked).

7. **Claude-in-Chrome "Always allow" never persists** — [#74715](https://github.com/anthropics/claude-code/issues/74715) (4 comments). Approved sites are stored with `duration:"once"`, so permission prompts repeat for every browser action. A same-day report ([#84355](https://github.com/anthropics/claude-code/issues/84355)) logs 813 prompts in 90 minutes.

8. **Background sessions die after daemon restart** — [#84349](https://github.com/anthropics/claude-code/issues/84349) (filed today). After a version-change daemon restart, stale workers are refused respawn and later reported dead. Detached workflows silently lose work.

9. **Unattended job racked up $411 in API charges** — [#84350](https://github.com/anthropics/claude-code/issues/84350) (filed today). Claude deployed an unattended job calling a metered paid API with no cost guardrails. Highlights demand for budget caps on autonomous agent work.

10. **"Past Conversations" empty on Windows** — [#84354](https://github.com/anthropics/claude-code/issues/84354) (filed today). Case-sensitive project-path hashing causes history to vanish when drive-letter casing differs. A small but very visible Windows-only regression.

## Key PR Progress

1. **14-plugin marketplace expansion** — [#41661](https://github.com/anthropics/claude-code/pull/41661). Adds 14 security/performance/architecture plugins; open since March, so review has been slow.
2. **`/code-review` respects `--comment` flag** — [#16929](https://github.com/anthropics/claude-code/pull/16929). Fixes #16606 so terminal output is the default and GitHub posting only occurs with `--comment`. Open since January.
3. **Self-signed cert workaround for Cowork** — [#84138](https://github.com/anthropics/claude-code/pull/84138). Addresses Bun not loading system certificates on macOS, closing #24470.
4. **Limit plugin-dev frontmatter parsing** — [#84004](https://github.com/anthropics/claude-code/pull/84004). Parses only the opening YAML block, preventing `---` horizontal rules in Markdown from corrupting settings.
5. **Propagate script failures** — [#84003](https://github.com/anthropics/claude-code/pull/84003). Duplicate-maintenance scripts now return non-zero exit codes instead of swallowing top-level errors.
6. **Validate `gh` flag values** — [#83999](https://github.com/anthropics/claude-code/pull/83999). Rejects incomplete commands like `gh issue list --limit` that previously bypassed wrapper validation.
7. **Validate label option values** — [#83995](https://github.com/anthropics/claude-code/pull/83995). Prevents `--add-label`/`--remove-label` from aborting with `unbound variable` or consuming the next positional argument.
8. **Reject self-referential duplicates** — [#83993](https://github.com/anthropics/claude-code/pull/83993). Stops `comment-on-duplicates.sh` from flagging an issue as its own duplicate.

## Feature Request Trends
- **Opt-in session metadata** — The #1 request by votes is making session URL injection into commits/PRs opt-in ([#66504](https://github.com/anthropics/claude-code/issues/66504)). Users want control over what artifacts leave the repo.
- **Portable sessions** — Transcripts should be project-portable while scratch files stay local ([#81946](https://github.com/anthropics/claude-code/issues/81946)), enabling shared/team workflows.
- **Permission UX** — "Always allow" persistence for Chrome ([#74715](https://github.com/anthropics/claude-code/issues/74715)) and disabling the left-arrow detach gesture ([#84348](https://github.com/anthropics/claude-code/issues/84348)) reflect demand for finer control over repeated prompts and gestures.
- **Cross-machine device identity** — The Chrome extension needs reliable device identification to prevent cross-machine driving ([#77605](https://github.com/anthropics/claude-code/issues/77605)).
- **Mobile parity** — Slash-command typeahead on mobile web ([#56204](https://github.com/anthropics/claude-code/issues/56204), closed) remains a gap versus the CLI.

## Developer Pain Points
- **Misleading interrupt messages** — "[Request interrupted by user for tool use]" appears without any user interrupt, both at subagent dispatch ([#78915](https://github.com/anthropics/claude-code/issues/78915)) and mid-run aborts ([#84346](https://github.com/anthropics/claude-code/issues/84346)). This erodes trust in agent status reporting.
- **Safeguard false positives** — Legitimate security testing is flagged and downgraded to Opus 4.8 even for CVP-approved orgs ([#84340](https://github.com/anthropics/claude-code/issues/84340), [#84352](https://github.com/anthropics/claude-code/issues/84352), [#84353](https://github.com/anthropics/claude-code/issues/84353)). Security teams cannot reliably do authorized work.
- **Background/headless session fragility** — Daemon restarts kill detached sessions ([#84349](https://github.com/anthropics/claude-code/issues/84349)), and `--continue` cannot resume `-p` sessions ([#82536](https://github.com/anthropics/claude-code/issues/82536)), making unattended pipelines risky.
- **Windows-specific regressions** — Case-sensitive path hashing empties history ([#84354](https://github.com/anthropics/claude-code/issues/84354)) and MSIX installs silently enter a modified state ([#84333](https://github.com/anthropics/claude-code/issues/84333)).
- **Usage/billing transparency** — Session limits consumed invisibly ([#82506](https://github.com/anthropics/claude-code/issues/82506)) and $411 in unattended API charges ([#84350](https://github.com/anthropics/claude-code/issues/84350)) point to missing cost guardrails and usage visibility.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-06

## Today's Highlights

Codex CLI `rust-v0.146.1` shipped a safety backport with safer automatic-review defaults for cyber-capable models and clearer permission-change messaging in the terminal UI. Meanwhile, community attention remains focused on restoring `/undo` ([#9203](https://github.com/openai/codex/issues/9203), 373 👍), a long-running demand after users lost untracked/uncommitted work. Windows desktop stability, MCP process leaks, and runaway token consumption continue to dominate recent bug reports, while internal PRs landed around rollout migration, MCP handshake hardening, and skill orchestration.

## Releases

- **rust-v0.146.1** — Bug-fix release: safer automatic-review defaults for cyber-capable models and permission-change explanations in the terminal interface. Backports [#37057](https://github.com/openai/codex/pull/37057).  
  [Release link](https://github.com/openai/codex/releases/tag/rust-v0.146.1)

- **rust-v0.147.0-alpha.13** / **alpha.12** / **alpha.11** / **alpha.10** / **alpha.6.5** — New alpha tags shipped without detailed changelog notes.  
  [alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.13) · [alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.12) · [alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.11) · [alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.10) · [alpha.6.5](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.5)

## Hot Issues

1. **[#9203 — Please make `/undo` back](https://github.com/openai/codex/issues/9203)**  
   The most-requested feature in the current tracker. Users report losing untracked files or uncommitted changes after Codex actions. 70 comments, 373 👍.

2. **[#12491 — MCP child processes not reaped: 1300+ zombies, 37GB memory leak](https://github.com/openai/codex/issues/12491)**  
   Codex.app GUI leaks MCP child processes after task completion, causing severe memory pressure. 31 comments; a major desktop plugin reliability concern.

3. **[#33776 — Windows: hundreds of taskkill.exe/conhost.exe processes](https://github.com/openai/codex/issues/33776)**  
   `ChatGPT.exe` spawns process storms leading to WMI failures and DWM degradation. 30 comments, 27 👍; highlights ongoing Windows process hygiene problems.

4. **[#19425 — Custom stdio MCP server discovered but tools not exposed to Desktop threads](https://github.com/openai/codex/issues/19425)**  
   `tools/list` succeeds, but MCP tools never reach Desktop or `tool_search`. 29 comments; seen as a regression in the app-server exposure layer.

5. **[#23979 — Local project conversation history missing after update](https://github.com/openai/codex/issues/23979)**  
   Threads still exist in `state_5.sqlite` but disappear from the Desktop UI after a macOS update. 26 comments; serious trust issue for local history.

6. **[#31035 — Windows Desktop reinstalls SysmonDrv v13.22 and causes BSODs](https://github.com/openai/codex/issues/31035)**  
   Sysmon driver returns after force-uninstall, and kernel dumps point to `SysmonDrv.sys`. 23 comments; severe OS-level stability impact.

7. **[#35352 — Desktop exits when embedded browser GPU process crashes](https://github.com/openai/codex/issues/35352)**  
   Windows Code Integrity blocks unsigned SwiftShader fallback, killing the whole app. 17 comments; affects in-app browser and OAuth flows.

8. **[#34684 — `codex mcp login` fails on macOS against OAuth server](https://github.com/openai/codex/issues/34684)**  
   Same version works on Linux but fails with “No authorization support detected” on macOS arm64. 10 comments, 5 👍; cross-platform MCP inconsistency.

9. **[#33493 — Local compaction v2 retains unbounded input_image payloads](https://github.com/openai/codex/issues/33493)**  
   Image-heavy threads enter repeated auto-compaction loops because image payloads are never bounded. 8 comments; performance and token-cost concern.

10. **[#32309 — High-frequency polling amplified by large resumed context](https://github.com/openai/codex/issues/32309)**  
   Users report 600M tokens/day vs. the usual 150–200M with Codex Sol 5.6 in code-mode sessions. 7 comments, 4 👍; cost/performance regression.

## Key PR Progress

1. **[#37191 — Preserve legacy semantics during rollout migration](https://github.com/openai/codex/pull/37191)**  
   Prevents legacy rollbacks, compaction checkpoints, and subagent history from being altered during migration into paginated history.

2. **[#37190 — Interrupt cyber model turns after one Guardian denial](https://github.com/openai/codex/pull/37190)**  
   Adds a circuit-breaker policy for cyber-specialty models, interrupting after the first denial while keeping existing thresholds for other models.

3. **[#37189 — Track multi-agent usage hints in world state](https://github.com/openai/codex/pull/37189)**  
   Resumed sessions now retain current multi-agent usage instructions even when configuration changed or history predates hint tracking.

4. **[#37188 — Reserve the `tool_search` namespace for the search tool](https://github.com/openai/codex/pull/37188)**  
   Prevents namespace tools from shadowing the built-in search tool and records collisions explicitly.

5. **[#37175 — Add legacy rollout migration to paginated history](https://github.com/openai/codex/pull/37175)**  
   Adds dry-run/apply migration with throughput limiting and per-rollout outcomes.

6. **[#37168 — Bound remote MCP handshake HTTP requests](https://github.com/openai/codex/pull/37168)**  
   Fixes serial executor blocking when a streamable HTTP MCP handshake times out but the underlying request continues running.

7. **[#37167 — Expose session sources to MCP contributors](https://github.com/openai/codex/pull/37167)**  
   Thread-scoped MCP resolution now receives `SessionSource` through setup, per-step resolution, and runtime refreshes.

8. **[#37166 — Keep textarea cursors and rendering inside the viewport](https://github.com/openai/codex/pull/37166)**  
   Fixes TUI textarea overflow, continuation rows, cursor alignment, and clipping for plain/masked/status text.

9. **[#37151 — Coalesce concurrent Git status scans](https://github.com/openai/codex/pull/37151)**  
   Shares one in-flight `git status --porcelain` call among concurrent workspace metadata requests for the same repo.

10. **[#37154 — Use Azure Key Vault for macOS notarization](https://github.com/openai/codex/pull/37154)**  
    Release hardening: App Store Connect key is now read from Azure Key Vault instead of exported as a base64 `.p8` secret.

## Feature Request Trends

- **Restore `/undo` as a safety primitive** — [#9203](https://github.com/openai/codex/issues/9203) remains the strongest signal (373 👍). Users need protection for untracked/uncommitted work.
- **Per-thread model and reasoning control** — [#34278](https://github.com/openai/codex/issues/34278) asks for Auto mode to route both model and reasoning effort per thread.
- **Reliable MCP tool exposure** — [#19425](https://github.com/openai/codex/issues/19425) and [#32101](https://github.com/openai/codex/issues/32101) show demand for MCP tools being consistently available in Desktop threads and `exec`/`tool_search`.
- **Bounded context and compaction transparency** — [#33493](https://github.com/openai/codex/issues/33493), [#32309](https://github.com/openai/codex/issues/32309), and [#37090](https://github.com/openai/codex/issues/37090) indicate users want clearer control over compaction loops and token consumption.
- **Accessibility improvements** — [#34211](https://github.com/openai/codex/issues/34211) requests JAWS/screen-reader support and navigable headings in chat history.

## Developer Pain Points

- **Windows desktop instability** — Recurring GPU-process crashes, SwiftShader Code Integrity blocks, MSIX “NeedsRemediation” corruption, and Sysmon-related BSODs ([#35352](https://github.com/openai/codex/issues/35352), [#35566](https://github.com/openai/codex/issues/35566), [#35411](https://github.com/openai/codex/issues/35411), [#35737](https://github.com/openai/codex/issues/35737), [#31035](https://github.com/openai/codex/issues/31035)).
- **Process and sandbox hygiene** — MCP zombie processes and memory leaks ([#12491](https://github.com/openai/codex/issues/12491)), plus `taskkill.exe`/`conhost.exe` storms on Windows ([#33776](https://github.com/openai/codex/issues/33776)).
- **Runaway token usage and compaction loops** — Large resumed contexts and repeated auto-compaction are causing abnormal consumption ([#32309](https://github.com/openai/codex/issues/32309), [#37090](https://github.com/openai/codex/issues/37090), [#33493](https://github.com/openai/codex/issues/33493)).
- **Approval and permission inconsistencies** — Approved escalated commands still inherit restricted network policy ([#15309](https://github.com/openai/codex/issues/15309)); existing tasks revert to on-request approvals despite full-access settings ([#32862](https://github.com/openai/codex/issues/32862)).
- **MCP OAuth and discovery gaps** — `codex mcp login` fails on macOS against compliant OAuth servers ([#34684](https://github.com/openai/codex/issues/34684)), and MCP tools discovered via `/mcp` are not exposed to Desktop threads ([#19425](https://github.com/openai/codex/issues/19425)).
- **History loss after updates** — Local conversation threads vanish from the UI even though data remains on disk ([#23979](https://github.com/openai/codex/issues/23979)).
- **Cybersecurity filter false positives** — Legitimate static analysis, fuzzing, and vulnerability research is being blocked ([#37161](https://github.com/openai/codex/issues/37161)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-06

## Today's Highlights

The nightly `v0.55.0` build landed with macOS seatbelt profile fallback and the first PR-generator core modules. Community attention remains concentrated on agent reliability: subagents reporting `MAX_TURNS` interruptions as success, generalist-agent hangs, and shell commands stuck at "Waiting input." On the PR side, core/SDK fixes for malformed tool arguments, `/compress` reload failures, and interrupted-turn message fusion are moving through quickly.

## Releases

### v0.55.0-nightly.20260806.g761f604c1
- [`fix(cli)`](https://github.com/google-gemini/gemini-cli/pull/28551): fall back to embedded macOS seatbelt profiles when expected profiles are missing.
- [`feat(pr-generator-core)`](https://github.com/google-gemini/gemini-cli/pull/28435): add environment config parser, command executor, and GitHub REST client integration for the PR-generator pipeline.

## Hot Issues

- [**#22323 — Subagent recovery after MAX_TURNS reported as GOAL success**](https://github.com/google-gemini/gemini-cli/issues/22323)  
  A subagent that hits `MAX_TURNS` is reported as `status: "success"` with `Termination Reason: "GOAL"`, hiding the interruption from the parent agent. This makes failures look successful and complicates retries and evaluation. 12 comments.

- [**#21409 — Generalist agent hangs**](https://github.com/google-gemini/gemini-cli/issues/21409)  
  When Gemini CLI defers to the generalist agent, it can hang forever — even for simple folder creation. Users report waiting up to an hour. Workaround: explicitly tell the model not to use subagents. 8 comments, 8 👍.

- [**#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**](https://github.com/google-gemini/gemini-cli/issues/19873)  
  Suggests leveraging Gemini models' native bash affinity while keeping command execution sandboxed. Proposes OS-level sandboxing plus intent-based routing after commands run. 8 comments.

- [**#24353 — Robust component-level evaluations**](https://github.com/google-gemini/gemini-cli/issues/24353)  
  Epic to expand behavioral evals beyond the main session and cover subagents/components. The repo now has 76 behavioral eval tests across 6 supported Gemini model families. 7 comments.

- [**#22745 — Assess AST-aware file reads, search, and mapping**](https://github.com/google-gemini/gemini-cli/issues/22745)  
  Investigates whether AST-aware tools can improve method-level reads, reduce token noise, and make codebase navigation more precise. 7 comments.

- [**#21968 — Gemini does not use skills and sub-agents enough**](https://github.com/google-gemini/gemini-cli/issues/21968)  
  Users report custom skills and subagents are rarely invoked autonomously, even when clearly relevant. They work only when explicitly requested. 6 comments.

- [**#26522 — Auto Memory retries low-signal sessions indefinitely**](https://github.com/google-gemini/gemini-cli/issues/26522)  
  The extraction agent can loop forever on sessions it decides not to read because they never get marked as processed. Causes wasted background work and repeated model calls. 5 comments.

- [**#26525 — Add deterministic redaction and reduce Auto Memory logging**](https://github.com/google-gemini/gemini-cli/issues/26525)  
  Auto Memory sends transcript content to the model before any redaction happens, and internal logging may leak skill content. Privacy-sensitive and hard to audit. 4 comments.

- [**#25166 — Shell command stuck with "Waiting input" after command completes**](https://github.com/google-gemini/gemini-cli/issues/25166)  
  Simple CLI commands remain displayed as active and "awaiting user input" after completion, blocking the session. 4 comments, 3 👍.

- [**#22232 — Enhance browser_agent resilience: session takeover and lock recovery**](https://github.com/google-gemini/gemini-cli/issues/22232)  
  `BrowserManager` fail-fast behavior on locked persistent profiles prevents automatic recovery. Request is for session takeover and lock cleanup. 4 comments.

## Key PR Progress

- [**#28607 — Preserve `functionCall.thoughtSignature` when stripping thought parts**](https://github.com/google-gemini/gemini-cli/pull/28607)  
  Fixes a v0.53.0 regression causing `API Error 400: Function call is missing a thought_signature`. Critical for modern Gemini model compatibility. Closed.

- [**#28695 — Don't abort `sendStream` on malformed tool arguments**](https://github.com/google-gemini/gemini-cli/pull/28695)  
  Replaces unguarded `JSON.parse()` on model-provided tool args so a malformed string doesn't kill the whole stream. Closed.

- [**#28660 — Keep `sendStream` alive on malformed tool arguments**](https://github.com/google-gemini/gemini-cli/pull/28660)  
  A parallel/defensive SDK fix that validates decoded arguments are objects and converts invalid args into structured `functionResponse` errors instead of crashing the stream. Open.

- [**#28670 — Correct fallback on model capacity errors for GCA agent mode**](https://github.com/google-gemini/gemini-cli/pull/28670)  
  Prevents infinite retry loops on `MODEL_CAPACITY_EXHAUSTED` / HTTP 429 by falling back to other models like Flash. Important for Gemini Code Assist stability. Closed.

- [**#28672 — Repair `/compress` session reload and quota-fallback tool response loss**](https://github.com/google-gemini/gemini-cli/pull/28672)  
  Fixes two bugs: `/compress` failing to reload resumed sessions, and quota-limit situations dropping tool responses. Closed.

- [**#28700 — Stop new user message fusing into an unanswered tool response**](https://github.com/google-gemini/gemini-cli/pull/28700)  
  Fixes the "model finishes your sentence instead of answering" bug caused by interrupted tool calls merging with the next user message. Closed.

- [**#28688 — Dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows**](https://github.com/google-gemini/gemini-cli/pull/28688)  
  Fixes OAuth in Google Cloud Workstations VMs where static `localhost` redirect URIs fail because the browser runs on the local machine. Open.

- [**#28677 — Add timeout to `IdeClient.getInstance()` process traversal**](https://github.com/google-gemini/gemini-cli/pull/28677)  
  Races IDE process discovery against a 3-second timeout so the TUI doesn't hang on "Initializing..." forever in bare terminals. Priority P1. Open.

- [**#28676 — Forward termination signals to relaunched child process**](https://github.com/google-gemini/gemini-cli/pull/28676)  
  Ensures `kill -TERM` on the bootstrap parent also terminates the spawned CLI child, avoiding orphaned processes in supervised environments. Open.

- [**#28701 — Fix `TRUST_PARENT` rule precedence in folder-trust resolution**](https://github.com/google-gemini/gemini-cli/pull/28701)  
  Corrects "longest match wins" so the most specific folder-trust rule, including `TRUST_PARENT`, is honored as documented. Open.

## Feature Request Trends

- **Agent self-awareness and proactive tool usage**  
  Users want Gemini CLI to autonomously use custom skills, subagents, and accurate CLI/hotkey knowledge. See [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598).

- **AST-aware codebase navigation**  
  Multiple issues propose AST-aware reads, search, and mapping to reduce token usage and improve precision. See [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746).

- **Safer and sandboxed command execution**  
  Requests to combine the model's bash fluency with OS-level sandboxing and post-execution intent routing. See [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672).

- **Browser agent resilience and configuration parity**  
  Community wants the browser subagent to handle lock recovery, respect `settings.json`, and work reliably under Wayland. See [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983).

- **Memory subsystem hardening**  
  Auto Memory needs deterministic redaction, quarantine of invalid patches, and prevention of retry loops. See [#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).

## Developer Pain Points

- **Agent hangs and false completions**  
  The most common complaints are agents hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), getting stuck on finished shell commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), or reporting interrupted runs as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).

- **Configuration is not reliably honored**  
  Users report subagents running even when disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), browser-agent settings overrides being ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and symlinked agent files not being recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

- **Session and terminal-state corruption**  
  Includes `/compress` leaving sessions broken ([#28672](https://github.com/google-gemini/gemini-cli/pull/28672)), external editor exits corrupting terminalBuffer mode ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and resize flicker ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).

- **Auto Memory privacy and efficiency concerns**  
  Transcript content is sent to models before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and low-signal sessions can trigger endless retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

- **Brittleness around tool count and temporary scripts**  
  Models hit 400 errors when too many tools are enabled ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), and often scatter temp scripts across the workspace when shell execution is restricted ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-06

## Today’s Highlights
The Copilot CLI team shipped three new pre-releases in the last 24 hours, including an improved `/worktree new` workflow and refinements to pinned prompts. Community attention remains focused on MCP reliability, with several new issues around registry policy failures, FastMCP incompatibility, and OAuth flows. No pull requests were updated yesterday, but issue activity was heavy: 23 items were touched, including several fresh triage reports.

## Releases
Three new pre-releases were published:

- **v1.0.79-4** — Pre-release build.
- **v1.0.79-3** — Improved: `/worktree new` now starts a new session in a new worktree.
- **v1.0.79-2** — Improved: pinned prompt is moved one row higher to align with the tab bar, saving vertical space. Pinned prompts are now off by default on terminals under 30 rows; configurable via `pinnedPrompts`.

Links:
- [v1.0.79-4](https://github.com/github/copilot-cli/releases/tag/v1.0.79-4)
- [v1.0.79-3](https://github.com/github/copilot-cli/releases/tag/v1.0.79-3)
- [v1.0.79-2](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2)

## Hot Issues
1. **[#1799 How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)** — Users are frustrated by the new alt-screen mode and want a way to return to the original rendering. 12 comments, 8 👍. This issue has been open since March and remains a top community concern.

2. **[#4202 Built-in view reports “Path does not exist” for existing files](https://github.com/github/copilot-cli/issues/4202)** — Regression introduced around v1.0.72: the `view` tool fails on existing text files even though isolated probes with the SDK succeed. 5 comments; developers using file-viewing workflows are directly impacted.

3. **[#4345 Reasoning effort “medium” is not supported for ‘claude-haiku-4.5’](https://github.com/github/copilot-cli/issues/4345)** — When certain feature flags are active, sub-agent execution repeatedly fails because the CLI requests a reasoning effort the model doesn’t support. 4 👍, likely affecting users with mixed-model setups.

4. **[#3934 MCP server “blocked by policy”](https://github.com/github/copilot-cli/issues/3934)** — A locally configured MCP server works in VS Code and IntelliJ but is rejected by the CLI as “blocked by policy.” The error is opaque and user-configured MCP servers are silently dropped.

5. **[#4370 Copilot CLI 1.0.79-1 fails MCP initialization with FastMCP](https://github.com/github/copilot-cli/issues/4370)** — The CLI sends a `server/discover` request that FastMCP doesn’t implement; the resulting `-32602` error is treated as fatal. This is a significant compatibility gap for the popular FastMCP framework.

6. **[#4374 `/mcp search` fails with 400 in repos using Azure DevOps remotes](https://github.com/github/copilot-cli/issues/4374)** — The MCP registry browser fails whenever the git remote is `dev.azure.com`. 4 👍 in less than a day, showing broad interest from users in mixed-remote environments.

7. **[#4378 Cloud agent silently blocks MCP servers on GHEC data residency](https://github.com/github/copilot-cli/issues/4378)** — On Enterprise Cloud with data residency, MCP registry policy fetches return 401/403, causing all user-configured MCP servers to disappear from cloud agent sessions. Only platform defaults remain.

8. **[#4371 MCP OAuth 3LO fails with -32042](https://github.com/github/copilot-cli/issues/4371)** — Tool invocations fail when an MCP Gateway uses Authorization Code grants because the CLI client does not support URL elicitation. This blocks OAuth-protected MCP servers entirely.

9. **[#3172 Strange “Somebody else is owning the clipboard” message](https://github.com/github/copilot-cli/issues/3172)** — A clipboard ownership notification repeatedly appears in the status line and disrupts terminal layout. 7 👍, 2 comments; a long-running annoyance for interactive users.

10. **[#4377 GPT-5.6 Terra delegates to Opus subagent](https://github.com/github/copilot-cli/issues/4377)** — Users are surprised by unexpected subagent delegation: a session configured for `gpt-5.6-terra` spent substantial credits on Opus. This raises transparency concerns around model routing and billing.

## Key PR Progress
No pull requests were updated in the last 24 hours. The project’s current focus appears to be stabilization pre-releases and issue triage.

## Feature Request Trends
- **Model flexibility for BYOM**: [#4376](https://github.com/github/copilot-cli/issues/4376) asks for model discovery and in-session switching for BYOM providers, instead of requiring a fixed `COPILOT_MODEL` and CLI restart.
- **Alternative rendering modes**: [#1799](https://github.com/github/copilot-cli/issues/1799) is a long-running request to disable alt-screen views; users want a supported configuration toggle.
- **MCP interoperability**: Multiple issues ([#4370](https://github.com/github/copilot-cli/issues/4370), [#4371](https://github.com/github/copilot-cli/issues/4371), [#4374](https://github.com/github/copilot-cli/issues/4374), [#4378](https://github.com/github/copilot-cli/issues/4378)) collectively request better MCP protocol compliance, clearer policy errors, and support for OAuth and modern MCP servers.
- **Independent adversarial review**: [#4380](https://github.com/github/copilot-cli/issues/4380) requests that rubber-duck reviews use a different model family from the primary session to preserve review value.
- **Persistent browser canvas auth**: [#4379](https://github.com/github/copilot-cli/issues/4379) reports that GitHub login never persists across browser canvas instances, requesting shared storage/session state.

## Developer Pain Points
- **MCP configuration and policy failures**: The most frequent source of new issues is MCP servers being blocked, silently dropped, or failing initialization due to protocol mismatches.
- **Regression-prone tools**: The `view` tool regression ([#4202](https://github.com/github/copilot-cli/issues/4202)) and `web_search` hallucination reports ([#4093](https://github.com/github/copilot-cli/issues/4093)) point to reliability concerns with built-in tools.
- **Unexpected model delegation**: Users report surprise credit consumption when the CLI selects subagents or model families different from the configured session model.
- **Terminal and session glitches**: Clipboard ownership messages, stuck queued messages ([#4373](https://github.com/github/copilot-cli/issues/4373)), and flipped steering message order ([#4372](https://github.com/github/copilot-cli/issues/4372)) continue to disrupt interactive workflows.
- **Platform-specific crashes**: Reports like [#4026](https://github.com/github/copilot-cli/issues/4026) (Windows native runtime crashes) and [#4382](https://github.com/github/copilot-cli/issues/4382) (Oracle Linux 10 `ENOEXEC`) show lingering execution-environment pain.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-06

## Today's Highlights

No new release shipped in the last 24 hours, but the tracker saw significant motion: the long-running **Memory System** request (#1283) was touched again after months, and two fresh bugs surfaced around MCP media handling and file-corrupting edits (#2588, #2591). Two PRs targeting the MCP failure mode were already opened (#2590, #2592), signaling a fast maintainer response to the "mid-task abort after side effects" problem.

**Note on data scope:** The 24-hour window contained only 3 issues and 3 PRs. All are listed below — no items were fabricated to reach the usual 10-item quota.

## Releases

None in the last 24 hours.

## Hot Issues

*All 3 issues active in the last 24h are listed.*

### 1. [#1283 — Feature Request: Memory System – Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-06 | **Comments:** 19 | 👍 0
- A comprehensive memory layer: automatic memory (AI-managed notes) plus manual memory (user-defined instructions). Open for over five months with 19 comments, this is the most-discussed issue in the window. The 👍-vs-comment gap (0 upvotes, 19 comments) suggests the discussion is rich but the community hasn't consolidated votes behind it — worth watching as a roadmap signal.

### 2. [#2591 — StrReplaceFile corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591)
- **Author:** shoemoney | **Created:** 2026-08-05 | **Updated:** 2026-08-05 | **Comments:** 0
- A serious data-integrity bug: `StrReplaceFile` decodes the whole file with `errors="replace"`, so any non-UTF-8 byte anywhere in the file — far from the actual edit — is silently rewritten as `EF BF BD` on disk. Zero comments yet, but this is a "stop-the-presses" class bug for a coding agent whose edit primitives must be byte-safe.

### 3. [#2588 — Model without capabilities: image-returning MCP tool aborts mid-task with no fix hint](https://github.com/MoonshotAI/kimi-cli/issues/2588)
- **Author:** tic-top | **Created:** 2026-08-05 | **Updated:** 2026-08-05 | **Comments:** 0
- When a model is configured without `capabilities` and an MCP tool returns an image, the run aborts **after** the tool already executed and produced side effects. The error message doesn't say what config key to add. This is a double failure: destructive abort + opaque diagnostics. Two PRs (#2590, #2592) already target it.

## Key PR Progress

*All 3 PRs updated in the last 24h are listed.*

### 1. [#2592 — fix(soul): degrade unsupported tool media instead of aborting mid-task](https://github.com/MoonshotAI/kimi-cli/pull/2592)
- **Author:** rainbowgore | **Created:** 2026-08-06 | **Updated:** 2026-08-06
- Resolves #2588. When a model lacks the capability for image-returning tools (including MCP), `_grow_context` used to raise `LLMNotSupported` **after** the tool ran, discarding already-applied side effects. This PR degrades gracefully instead of aborting. The highest-impact fix in this window because it turns a destructive crash into a recoverable path.

### 2. [#2590 — fix(soul): name the config fix in the unsupported-capability error](https://github.com/MoonshotAI/kimi-cli/pull/2590)
- **Author:** ayaangazali | **Created:** 2026-08-05 | **Updated:** 2026-08-05
- Partially addresses #2588 (the "no hint at the fix" half). Improves the error to tell users exactly which capability to add in `config.toml`. Complements #2592 by fixing the diagnostic side of the same issue.

### 3. [#2589 — docs: mention qwen-audio-agent as a voice ACP client](https://github.com/MoonshotAI/kimi-cli/pull/2589)
- **Author:** x-lixu | **Created:** 2026-08-05 | **Updated:** 2026-08-05
- Adds one sentence to the ACP docs noting `qwen-audio-agent`, an open-source full-duplex voice runtime that launches `kimi acp` as an agent for hands-free use. The author self-discloses involvement in the project. Minor, but it extends the ACP ecosystem story beyond editor/IDE clients into voice interfaces.

## Feature Request Trends

Distilled from the current issue set:

1. **Persistent context / memory** — #1283 remains the flagship ask: the CLI should remember project patterns, user preferences, and notes across sessions, both automatically (AI-managed) and manually (user-defined). No other request in this window approaches its longevity or comment count.
2. **Graceful degradation over hard aborts** — #2588 (and its PRs) reflect a demand for resilience: when a model or tool returns unsupported media, the CLI should degrade the output rather than kill the entire task after side effects have occurred.
3. **Byte-safe file editing** — #2591 signals a need for edit primitives that operate on bytes/with explicit encoding handling, not whole-file string decode/re-encode that risks silent corruption.

## Developer Pain Points

- **Mid-task aborts after irreversible side effects** (#2588): The worst possible failure mode for an agentic tool — work is done, then the run dies, with no recovery path. Expect this to be the community's most hotly felt issue until #2592 lands.
- **Error messages without remediation hints** (#2588): "You're missing capability X" is useless without "add `capabilities = [...]` to your model block." The community clearly expects actionable diagnostics.
- **Silent data corruption** (#2591): Losing bytes outside the edited region in a coding tool is a trust-destroying bug. Even though it has no comments yet, it will likely draw attention fast once awareness spreads.
- **MCP/tool integration edge cases** (#2588, #2591): Both fresh bugs sit at the seam between the CLI, MCP tools, and flexibly-configured models — the integration surface is where the sharp edges are concentrated right now.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-06

## 1. Today's Highlights

OpenCode released **v1.18.14**, simplifying xAI login to a single device-code flow and improving retry behavior for transient provider/network errors while preserving structured mid-stream provider errors. On the community side, the loudest requests continue to be a **Go plan usage/balance API** ([#16017](https://github.com/anomalyco/opencode/issues/16017)) and an **official VS Code extension** ([#11176](https://github.com/anomalyco/opencode/issues/11176)). A newly reported `/sessions` regression ([#40759](https://github.com/anomalyco/opencode/issues/40759)) and the **v1→v2 data migration PR** ([#40723](https://github.com/anomalyco/opencode/pull/40723)) are likely to dominate developer attention this week.

## 2. Releases

**v1.18.14** — [OpenCode releases](https://github.com/anomalyco/opencode/releases)

- Simplified xAI login to a single device-code flow, improving headless/remote environment support.
- Preserved structured mid-stream provider errors so compatible providers can retry failed responses.
- Added retries for more transient provider and network errors.

## 3. Hot Issues

- **[#16017 – Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)** — 32 comments / 126 👍  
  High demand for programmatic access to OpenCode Go subscription usage across rolling/weekly/monthly windows. Users want dashboard parity in an API.

- **[#11176 – Official OpenCode VS Code extension](https://github.com/anomalyco/opencode/issues/11176)** — 27 comments / 134 👍  
  The most-upvoted open feature request. Native VS Code integration remains one of the biggest ecosystem gaps for OpenCode.

- **[#39845 – DeepSeek V4 Flash suddenly requires "Enable models hosted in China"](https://github.com/anomalyco/opencode/issues/39845)** — 17 comments / 22 👍  
  Mid-session failures on the Go subscription are confusing users, especially when the requirement appears without warning.

- **[#23153 – Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)** — 16 comments / 36 👍  
  Community request for crypto payments for OpenCode Go subscriptions, reflecting ongoing interest in alternative payment methods.

- **[#31932 – Cross-project session list/picker for TUI](https://github.com/anomalyco/opencode/issues/31932)** — 14 comments / 6 👍  
  Built-in `/sessions` is scoped to the current project. Users working across multiple repos want a unified session picker.

- **[#34498 – Respect `disable-model-invocation: true` in SKILL.md frontmatter](https://github.com/anomalyco/opencode/issues/34498)** — 13 comments / 49 👍  
  Requests parity with Claude Code/Cursor for skill-level model invocation opt-out.

- **[#37564 – "Auto mode" LLM model classifier auto-approval for permissions](https://github.com/anomalyco/opencode/issues/37564)** — 6 comments / 12 👍  
  Users want permission auto-approval decisions driven by model classification rather than manual heuristics.

- **[#34040 – TUI autocomplete does not list files inside configured references](https://github.com/anomalyco/opencode/issues/34040)** — 5 comments / 2 👍  
  `@alias` completion stops at the alias instead of showing nested files, which hurts workflows with external reference directories.

- **[#40348 – Global `~/.config/opencode/AGENTS.md` rules are repeatedly forgotten](https://github.com/anomalyco/opencode/issues/40348)** — 2 comments  
  Developers report the agent ignoring established constraints like `no auto-commit` across sessions, forcing repeated re-reminders.

- **[#40759 – `/sessions` does not work anymore in v1.18.14](https://github.com/anomalyco/opencode/issues/40759)** — 2 comments  
  New regression: switching past sessions wipes chat history and conversation context once a new message is entered. Urgent for daily TUI users.

## 4. Key PR Progress

- **[#40723 – feat(core): migrate v1 data to v2](https://github.com/anomalyco/opencode/pull/40723)**  
  Adds resumable, REST-triggered V1 session history migration; imports legacy V2 session data and JSON credentials; updates TUI migration flow.

- **[#27554 – feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)**  
  Adds `Local (LAN)` discovery in `/connect` for OpenAI-compatible servers using mDNS, plus automatic model discovery.

- **[#39758 – fix(app): show directories in web project picker on open](https://github.com/anomalyco/opencode/pull/39758)**  
  Fixes the web "Open project" flow showing "No folders found" on a fresh browser profile. Closes multiple related issues.

- **[#40768 – fix(mcp): survive a cross-process OAuth refresh race on connect](https://github.com/anomalyco/opencode/pull/40768)**  
  Prevents MCP OAuth refresh failures when two processes share the same credential row and rotate tokens concurrently.

- **[#40769 – fix(mcp): reuse the registered dynamic client on re-login](https://github.com/anomalyco/opencode/pull/40769)**  
  Stops redundant dynamic client registration on MCP re-login by reusing the registered client from the store.

- **[#40772 – fix(opencode): report a missing auth method instead of crashing](https://github.com/anomalyco/opencode/pull/40772)**  
  Adds a missing guard in `ProviderAuth.authorize` so missing auth methods produce a clear error instead of crashing.

- **[#40765 – refactor(core): deduplicate Copilot endpoint routing](https://github.com/anomalyco/opencode/pull/40765)**  
  Reuses the shared GitHub Copilot endpoint-routing heuristic from `@opencode-ai/ai`, removing duplicated fallback logic.

- **[#40724 – refactor(plugin): split session HTTP hooks](https://github.com/anomalyco/opencode/pull/40724)**  
  Replaces monolithic session HTTP middleware with separate `http.request` and `http.response` hooks and migrates the OpenAI request rewrite.

- **[#38308 – feat(app): optional vertical tab rail](https://github.com/anomalyco/opencode/pull/38308)**  
  Adds an opt-in, resizable vertical tab rail for the desktop/app UI while preserving horizontal tabs as the default.

- **[#31834 – feat(acp): emit plan session updates from todowrite tool calls](https://github.com/anomalyco/opencode/pull/31834)**  
  Ensures ACP plan updates render in OpenCode when tools write todos, closing a parity gap with Claude Code.

## 5. Feature Request Trends

- **Session management & TUI polish**  
  Cross-project session pickers ([#31932](https://github.com/anomalyco/opencode/issues/31932), [#35581](https://github.com/anomalyco/opencode/issues/35581)), session statuses ([#21590](https://github.com/anomalyco/opencode/issues/21590)), and mid-line autocomplete for slash commands and skills ([#40719](https://github.com/anomalyco/opencode/issues/40719), [#40689](https://github.com/anomalyco/opencode/issues/40689)).

- **Editor & desktop integration**  
  Official VS Code extension demand ([#11176](https://github.com/anomalyco/opencode/issues/11176)), plus desktop UX improvements like virtual tab rails and better settings navigation.

- **MCP ecosystem expansion**  
  HTTP Streamable transport support ([#8058](https://github.com/anomalyco/opencode/issues/8058)), MCP sampling ([#11948](https://github.com/anomalyco/opencode/issues/11948)), and external MCP integrations ([#40722](https://github.com/anomalyco/opencode/issues/40722)) remain recurring asks.

- **OpenCode Go plan & billing**  
  Usage/balance API ([#16017](https://github.com/anomalyco/opencode/issues/16017)) and crypto payments ([#23153](https://github.com/anomalyco/opencode/issues/23153)) show strong interest in self-serve billing controls.

- **Agent control & visibility**  
  Skill-level model opt-out ([#34498](https://github.com/anomalyco/opencode/issues/34498)), model-based permission auto-approval ([#37564](https://github.com/anomalyco/opencode/issues/37564)), and visualizing multi-agent workflows ([#40564](https://github.com/anomalyco/opencode/issues/40564)) point toward more granular agent supervision.

## 6. Developer Pain Points

- **Session stability regressions**  
  The `/sessions` history-wipe bug in v1.18.14 ([#40759](https://github.com/anomalyco/opencode/issues/40759)) is the most urgent reliability complaint.

- **Rules and context not reliably honored**  
  Global `AGENTS.md` constraints are repeatedly ignored across sessions ([#40348](https://github.com/anomalyco/opencode/issues/40348)).

- **Authentication and model access friction**  
  Reports include `Forbidden` errors on most models ([#40633](https://github.com/anomalyco/opencode/issues/40633)), sudden China-hosted model opt-in requirements ([#39845](https://github.com/anomalyco/opencode/issues/39845)), and crashes when auth methods are missing ([#40774](https://github.com/anomalyco/opencode/issues/40774)).

- **TUI discoverability gaps**  
  Skills are hidden from root autocomplete ([#40720](https://github.com/anomalyco/opencode/issues/40720)), `/` completions only trigger at prompt start ([#40719](https://github.com/anomalyco/opencode/issues/40719)), and reference-directory files are not completed ([#34040](https://github.com/anomalyco/opencode/issues/34040)).

- **Desktop resource usage and UX**  
  High memory usage on macOS ([#40779](https://github.com/anomalyco/opencode/issues/40779)), mouse-click unresponsiveness ([#40780](https://github.com/anomalyco/opencode/issues/40780)), and unscrollable settings tabs on laptops ([#40775](https://github.com/anomalyco/opencode/issues/40775)) are common desktop complaints.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Today's Highlights

No new release was published in the last 24 hours. Community attention focused on improving Windows onboarding and XDG config compliance, while maintainers landed fixes for Copilot model discovery, extension event-bus leaks, truncated OSC 8 hyperlinks, and `AGENTS.override.md` support. Several PRs also improved model selector sorting, Qwen provider coverage, and extension fullscreen diff browsing.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **Windows usage survey** — [#7547](https://github.com/earendil-works/pi/issues/7547)  
   Maintainers are asking Windows users how they run Pi and where it breaks. 17 comments so far; helps decide what to support in core vs. defer to extensions.

2. **Linux config folder is not XDG-compliant** — [#534](https://github.com/earendil-works/pi/issues/534)  
   Closed, but still heavily discussed with 23 👍 and 14 comments. Users expect Pi to follow the XDG Base Directory spec instead of writing config directly into `$HOME`.

3. **Make in-session model/thinking changes ephemeral by default** — [#5263](https://github.com/earendil-works/pi/issues/5263)  
   12 👍. Wants session-local model overrides by default plus a single global "Default model" surface in `/settings`.

4. **Sessions hang on "Working…" with Anthropic subscription** — [#5291](https://github.com/earendil-works/pi/issues/5291)  
   Enterprise Anthropic users hit intermittent stuck turns; stop/resume is unreliable. High impact for paid-subscription workflows.

5. **Add context window size option** — [#5064](https://github.com/earendil-works/pi/issues/5064)  
   Users want an explicit context-window selector, analogous to Copilot CLI's settings.

6. **Support video/audio content in `prompt` command** — [#3200](https://github.com/earendil-works/pi/issues/3200)  
   `prompt` currently forwards images only; extending it to video/audio would unlock multimodal models.

7. **Configurable thinking level/model for compaction** — [#7553](https://github.com/earendil-works/pi/issues/7553)  
   Auto-compaction inherits the session's thinking budget, which makes summarization cost/quality hard to control on reasoning models.

8. **Add payload size to iTerm2 inline images** — [#7465](https://github.com/earendil-works/pi/issues/7465)  
   `encodeITerm2()` omits `size=`, so `@xterm/addon-image@0.9.0` silently rejects Pi images in xterm.js terminals.

9. **Support `AGENTS.override.md` as per-directory context override** — [#7642](https://github.com/earendil-works/pi/issues/7642)  
   Request to prefer `AGENTS.override.md` over `AGENTS.md` in each directory. Closed quickly and implemented in PRs [#7664](https://github.com/earendil-works/pi/pull/7664) / [#7681](https://github.com/earendil-works/pi/pull/7681).

10. **Copilot models missing after login** — [#7634](https://github.com/earendil-works/pi/issues/7634)  
    `availableModelIds` is empty because the Copilot API now returns models where `model_picker_enabled` is missing/false. Broke `/model` for some Copilot users.

## Key PR Progress

1. **Fix extension event-bus leak** — [#7656](https://github.com/earendil-works/pi/pull/7656)  
   Scopes `pi.events.on()` subscriptions to the extension runtime that created them; removes stale listeners after reload/disposal. Fixes [#7193](https://github.com/earendil-works/pi/issues/7193).

2. **Close truncated OSC 8 hyperlinks** — [#7657](https://github.com/earendil-works/pi/pull/7657)  
   `truncateToWidth()` now closes an active OSC 8 hyperlink before reset/ellipsis, preserving BEL/ST terminators. Fixes [#7399](https://github.com/earendil-works/pi/issues/7399).

3. **Restore Copilot models from account policy** — [#7672](https://github.com/earendil-works/pi/pull/7672)  
   Keeps `model_picker_enabled` as the primary signal but falls back to policy-enabled models when the Individual endpoint has no usable picker models.

4. **Support `thinking_token_budget` on OpenAI-compatible endpoints** — [#7638](https://github.com/earendil-works/pi/pull/7638)  
   Prevents reasoning-heavy turns from using the entire `max_tokens` ceiling and returning empty text or tool calls.

5. **Line ranges in `@file` references** — [#7679](https://github.com/earendil-works/pi/pull/7679)  
   Adds `@file#L122-L145` syntax for 1-based inclusive ranges, aligning with the `read` tool's EOF handling.

6. **Disable bunfig autoload in compiled binaries** — [#7685](https://github.com/earendil-works/pi/pull/7685)  
   Stops Bun-compiled standalone Pi binaries from loading cwd `bunfig.toml` preloads, which could crash even `pi --version`.

7. **Add Qwen Token Plan Individual provider** — [#7659](https://github.com/earendil-works/pi/pull/7659)  
   New built-in provider using the international Token Plan endpoint, `QWEN_TOKEN_PLAN_API_KEY`, and eight documented Individual models.

8. **Support `AGENTS.override.md`** — [#7681](https://github.com/earendil-works/pi/pull/7681)  
   Treats `AGENTS.override.md` as the highest-priority context file per directory, while preserving ancestor layering. Closes [#7642](https://github.com/earendil-works/pi/issues/7642).

9. **Naturally sort both model selectors** — [#7692](https://github.com/earendil-works/pi/pull/7692)  
   Shares a case-insensitive numeric-aware comparator between `/model` and `/scoped-models`, fixing awkward lexical ordering like `@1m` before `@200k`.

10. **Make fullscreen extension selector scrollable for long diffs** — [#7597](https://github.com/earendil-works/pi/pull/7597)  
    Wraps diff title in a `ScrollView` and constrains editor height so huge diffs can be reviewed while yes/no actions remain pinned.

## Feature Request Trends

- **More explicit context/model controls**: context-window selection ([#5064](https://github.com/earendil-works/pi/issues/5064)), ephemeral session model changes ([#5263](https://github.com/earendil-works/pi/issues/5263)), and separate compaction thinking budgets ([#7553](https://github.com/earendil-works/pi/issues/7553)).
- **Context-file ergonomics**: per-directory `AGENTS.override.md` ([#7642](https://github.com/earendil-works/pi/issues/7642)) and line-range `@file` references ([#7673](https://github.com/earendil-works/pi/issues/7673)).
- **Multimodal and provider breadth**: video/audio in `prompt` ([#3200](https://github.com/earendil-works/pi/issues/3200)), JetBrains backend for pi-serena ([#7641](https://github.com/earendil-works/pi/issues/7641)), better Vertex/GCP metadata support ([#5323](https://github.com/earendil-works/pi/issues/5323)).
- **Terminal/platform compatibility**: Windows first-class support ([#7547](https://github.com/earendil-works/pi/issues/7547)), XDG config paths ([#534](https://github.com/earendil-works/pi/issues/534)), iTerm2/xterm image fixes ([#7465](https://github.com/earendil-works/pi/issues/7465)).
- **Extension API growth**: auth.json credential persistence ([#7658](https://github.com/earendil-works/pi/issues/7658)), provider retry callbacks ([#7649](https://github.com/earendil-works/pi/issues/7649)), TUI component mouse-event opt-in ([#7683](https://github.com/earendil-works/pi/issues/7683)).

## Developer Pain Points

- **Update/startup fragility**: `pi update --self` has no retry after one transient failure ([#6675](https://github.com/earendil-works/pi/issues/6675)); Node 20 crashes due to undici `CacheStorage` ([#7601](https://github.com/earendil-works/pi/issues/7601)); compiled binaries can be broken by cwd `bunfig.toml` preload ([#7685](https://github.com/earendil-works/pi/pull/7685)).
- **Auth/login friction**: Anthropic login over SSH redirects to localhost instead of offering a paste-back code ([#7691](https://github.com/earendil-works/pi/issues/7691)); Copilot login leaves model list empty due to strict picker parsing ([#7634](https://github.com/earendil-works/pi/issues/7634)).
- **Extension lifecycle/API gaps**: event-bus listeners survive reloads ([#7193](https://github.com/earendil-works/pi/issues/7193)); no programmatic way to persist API-key credentials ([#7658](https://github.com/earendil-works/pi/issues/7658)); provider retries are invisible to callers ([#7649](https://github.com/earendil-works/pi/issues/7649)).
- **Terminal rendering edge cases**: OSC 8 hyperlink truncation ([#7399](https://github.com/earendil-works/pi/issues/7399)), missing iTerm2 payload size ([#7465](https://github.com/earendil-works/pi/issues/7465)), and selection page-keybindings gaps ([#7680](https://github.com/earendil-works/pi/pull/7680)).
- **Provider-specific runtime issues**: Anthropic subscription hangs ([#5291](https://github.com/earendil-works/pi/issues/5291)), WebSocket retry only handling two error codes ([#7444](https://github.com/earendil-works/pi/issues/7444)), and negative cost reporting for `openrouter/auto-beta` ([#7688](https://github.com/earendil-works/pi/issues/7688)).
- **Bash tool newline handling**: bare newlines in multi-line commands collapse into spaces, turning the next line into arguments of the previous command ([#7666](https://github.com/earendil-works/pi/issues/7666)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-06

## Today's Highlights
Qwen Code shipped **v0.21.6** with experimental native Live Voice support for WebShell on macOS, alongside the **desktop-v0.1.0** release and a nightly test-stability patch. Security remains the sharpest community concern: a P1 read-only shell classifier bypass and a provider-warning sanitizer credential leak both drew active discussion. On the infrastructure side, CI reliability is being addressed by routing heavy review/autofix jobs to self-hosted ECS runners.

## Releases
- [v0.21.6-nightly.20260806.cb3dc107f](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-nightly.20260806.cb3dc107f): Test-only stabilization — the glob external-path test now uses a dedicated empty `mkdtemp` directory instead of `/tmp` ([PR #8604](https://github.com/QwenLM/qwen-code/pull/8604)).
- [v0.21.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6): Adds experimental native Live Voice to WebShell on macOS via a global shortcut ([PR #7859](https://github.com/QwenLM/qwen-code/pull/7859)); Web Shell now keeps conversation turns expanded during active background work.
- [desktop-v0.1.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.1.0): First Qwen Code Desktop v0.1.0 release, including CI container shell default and Web Shell fixes.

## Hot Issues
- [Issue #8136](https://github.com/QwenLM/qwen-code/issues/8136) — Provider warning sanitizer truncates messages containing a port and leaks a password containing `@` (8 comments). Security-sensitive CLI bug in `sanitizeProviderWarning` that can expose credentials in `/status` payloads.
- [Issue #8582](https://github.com/QwenLM/qwen-code/issues/8582) — Read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}` (4 comments). P1 security bypass affecting both AST classification and runtime substitution gates.
- [Issue #8615](https://github.com/QwenLM/qwen-code/issues/8615) — Desktop 0.1.0 on Windows crashes on startup: `EISDIR lstat 'C:'` when opening a workspace (2 comments). New desktop release is broken for Windows workspace workflows.
- [Issue #8550](https://github.com/QwenLM/qwen-code/issues/8550) — `qwen mcp list` hangs indefinitely on an SSE server that never sends `endpoint` (4 comments). No timeout in the SSE transport makes MCP debugging painful.
- [Issue #8560](https://github.com/QwenLM/qwen-code/issues/8560) — Web Shell: refreshing a session deep link returns 401 Unauthorized when `qwen serve` has a bearer token (3 comments). Auth state is not propagated to deep-link refreshes.
- [Issue #8593](https://github.com/QwenLM/qwen-code/issues/8593) — Desktop: markdown links in assistant messages are styled but clicking does nothing (3 comments). Silent dead links in the desktop UI.
- [Issue #8580](https://github.com/QwenLM/qwen-code/issues/8580) — TUI flickers continuously in tmux < 3.5 (2 comments). Full-screen clear/repaint on overflow; also reported in SSH + tmux setups ([Issue #8562](https://github.com/QwenLM/qwen-code/issues/8562)).
- [Issue #8606](https://github.com/QwenLM/qwen-code/issues/8606) — VSCode companion: Edit/Write file links always resolve to `<workspace-root>/<basename>`, causing "file not found" for nested files (2 comments). Breaks model-driven edits in realistic projects.
- [Issue #8597](https://github.com/QwenLM/qwen-code/issues/8597) — CI `/review`: reverse-audit fan-out launch hangs silently until the outer timeout kills the run (2 comments). Caused 12 timeouts on Aug 4 and 9 more by Aug 5, burning full 360-minute budgets.
- [Issue #8538](https://github.com/QwenLM/qwen-code/issues/8538) — copy-response button does nothing on Windows desktop (4 comments). Clipboard remains unchanged even after full restarts.

## Key PR Progress
- [PR #8396](https://github.com/QwenLM/qwen-code/pull/8396) — **fix(hooks): close four trust-boundary holes in hook execution**. Disables HTTP redirects and tightens SSRF/whitelist gaps in repository-controlled hook configuration.
- [PR #8613](https://github.com/QwenLM/qwen-code/pull/8613) — **feat(web-shell): tmux-backed interactive terminal sub-agent**. Lets agents drive REPLs/curses apps inside tmux with a live Web Shell terminal view.
- [PR #8614](https://github.com/QwenLM/qwen-code/pull/8614) — **feat(web-shell): fullscreen view for the right artifact panel**. Adds expand/collapse for artifacts, subagents, review changes, monitors, and scheduled tasks.
- [PR #8388](https://github.com/QwenLM/qwen-code/pull/8388) — **feat(review): capture-tui — rendering claims get pixels, not prose (Phase 2)**. Captures terminal rendering evidence in a private tmux server for review findings.
- [PR #8612](https://github.com/QwenLM/qwen-code/pull/8612) — **fix(autofix): ship core dist in the review CLI bundle**. Fixes missing core build output in review fan-out legs, directly relevant to CI timeout failures.
- [PR #8573](https://github.com/QwenLM/qwen-code/pull/8573) — **fix(web-shell): discard stale automatic recaps**. Prevents a slow recap from being appended into a newly started user turn.
- [PR #8578](https://github.com/QwenLM/qwen-code/pull/8578) — **feat(channels): add Feishu ask-user question cards**. Adds native Card V2 single/multi-select forms correlated to request, card, chat, and prompt owner.
- [PR #8241](https://github.com/QwenLM/qwen-code/pull/8241) — **fix(qqbot): restore per-group session isolation under thread scope**. Removes the forced `sessionScope: 'single'` override and respects configured group scoping.
- [PR #8553](https://github.com/QwenLM/qwen-code/pull/8553) — **fix(core): bound backward transcript pages in long single-turn sessions**. Caps turn-boundary expansion to one extra page window while keeping turns whole.
- [PR #8455](https://github.com/QwenLM/qwen-code/pull/8455) — **fix(cli): echo resume command to main screen on exit**. Ensures the resume-session hint is visible outside the alternate terminal buffer.

## Feature Request Trends
- **Desktop consolidation around Web Shell**: Multiple requests ([#8092](https://github.com/QwenLM/qwen-code/issues/8092), [#8595](https://github.com/QwenLM/qwen-code/issues/8595), [#8596](https://github.com/QwenLM/qwen-code/issues/8596)) ask for a lower-maintenance Tauri desktop app reusing Web Shell, deprecating Electron, and adding QR-code / phone-based "Local Control" access.
- **Async and background execution**: [Issue #8605](https://github.com/QwenLM/qwen-code/issues/8605) proposes `/slow` or `/batch` mode for low-cost async runs; [Issue #8586](https://github.com/QwenLM/qwen-code/issues/8586) asks for `activeWork` tracking and background agent recovery; [Issue #8591](https://github.com/QwenLM/qwen-code/issues/8591) wants hooks support in TypeScript SDK `query()`.
- **Voice/audio expansion**: v0.21.6 Live Voice ([PR #7859](https://github.com/QwenLM/qwen-code/pull/7859)) is complemented by audio attachment bridging ([PR #8332](https://github.com/QwenLM/qwen-code/pull/8332)) and private ASR base URL allowlists ([PR #8350](https://github.com/QwenLM/qwen-code/pull/8350)).
- **Internationalization**: [Issue #8551](https://github.com/QwenLM/qwen-code/issues/8551) requests Korean docs/README language support; [Issue #8592](https://github.com/QwenLM/qwen-code/issues/8592) reports that the desktop language setting has no effect.
- **Tool-output observability**: [Issue #7306](https://github.com/QwenLM/qwen-code/issues/7306) and [Issue #8447](https://github.com/QwenLM/qwen-code/issues/8447) track bounded tool-result display payloads and artifact lifecycle across ACP and headless output.

## Developer Pain Points
- **Terminal rendering reliability**: TUI flicker in tmux < 3.5 ([#8580](https://github.com/QwenLM/qwen-code/issues/8580)), screen flashing over SSH/tmux ([#8562](https://github.com/QwenLM/qwen-code/issues/8562)), and duplicate transcript output when shrinking the terminal ([#8557](https://github.com/QwenLM/qwen-code/issues/8557)).
- **Windows desktop polish**: Startup crash with `EISDIR lstat 'C:'` ([#8615](https://github.com/QwenLM/qwen-code/issues/8615)), broken copy-response button ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)), non-functional language switcher ([#8592](https://github.com/QwenLM/qwen-code/issues/8592)), and unclickable markdown links ([#8593](https://github.com/QwenLM/qwen-code/issues/8593)).
- **Web Shell/auth inconsistencies**: Session deep-link refresh returns 401 with bearer tokens ([#8560](https://github.com/QwenLM/qwen-code/issues/8560)), and stale automatic recaps can pollute new turns ([PR #8573](https://github.com/QwenLM/qwen-code/pull/8573)).
- **MCP hangs**: `qwen mcp list` can hang forever on slow/unresponsive SSE servers ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)).
- **CI instability**: Mocked disk-full tests produce misleading runner `ENOSPC` logs ([#8532](https://github.com/QwenLM/qwen-code/issues/8532)); `/review` fan-out hangs cause massive timeout waste ([#8597](https://github.com/QwenLM/qwen-code/issues/8597)); heavy autofix jobs are being moved to the ECS pool ([PR #8603](https://github.com/QwenLM/qwen-code/pull/8603)).
- **VSCode companion path resolution**: Nested Edit/Write file links resolve incorrectly to `<workspace-root>/<basename>` ([#8606](https://github.com/QwenLM/qwen-code/issues/8606)), causing "file not found" errors for real project structures.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI Community Digest — 2026-08-06

## Today’s Highlights
The v0.9.4 release train remains the centerpiece of integration work, now 77 commits ahead of `main` and superseding the older #5044. A notable wave of Runtime API PRs adds first-class endpoints for memory, MCP server management, goal-loop state, verifier receipts, and skill lifecycle, while TUI-focused PRs improve wait-time visibility for the model and checkpoint-based subagent resumption. No new release was published in the last 24 hours.

## Releases
None in the last 24 hours.

## Hot Issues
Only four issues were updated in the digest window, so all are listed here.

- [#4029 Planning to create an interface similar to Reasonix?](https://github.com/Hmbown/CodeWhale/issues/4029)  
  Open since July, with 4 comments. The continued open question suggests users are looking for UI/UX parity with other agentic coding tools, but there is no strong signal yet on direction.

- [#5005 [enhancement] Support filesystem path whitelist/allowlist in sandbox for accessing external logs and build artifacts](https://github.com/Hmbown/CodeWhale/issues/5005)  
  Closed, but important for real-world build workflows: Xcode writes logs and artifacts under `~/Library/Developer/Xcode/DerivedData`, which the `workspace-write` sandbox blocks. A path allowlist would unblock mobile/macOS builds without opening the whole filesystem.

- [#5250 [enhancement] Only one API key can be saved, which makes it difficult when using across different API providers](https://github.com/Hmbown/CodeWhale/issues/5250)  
  Fresh issue with 1 comment. Users mixing DeepSeek with other providers such as GLM have to re-enter keys on every switch. Per-provider key storage is a clear quality-of-life request.

- [#5244 [enhancement] Unknown model ids silently degrade to the 128K legacy context default — say so out loud](https://github.com/Hmbown/CodeWhale/issues/5244)  
  Open with 1 comment. A residual bug behind #5239: unknown model IDs fall back to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` (128K) without warning, so a 1M-window model can silently compact at 128K. The request is to make fallback behavior explicit.

## Key PR Progress
10 important PRs from the active set:

- [#5135 release: Codewhale v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)  
  The main v0.9.4 integration train, currently 77 commits ahead of `main`. It supersedes #5044 and contains the full 2026-08-01 source candidate.

- [#5225 feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)  
  Makes the ACP server actually execute model tool calls instead of only streaming text. This is critical for editor integrations like Zed and community ACP adapters.

- [#5131 feat: Runtime API memory endpoints — bounded inspection and lifecycle controls](https://github.com/Hmbown/CodeWhale/pull/5131)  
  Adds `/v1/memory` endpoints behind the existing runtime token middleware, allowing managed clients to inspect and control memory scope/provenance.

- [#5130 feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)  
  Adds create/update/delete routes for MCP servers under `/v1/apps/mcp/servers`, removing the need to edit TOML/JSON directly.

- [#5133 feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)  
  Adds goal-loop read/lifecycle endpoints, including `GET /v1/threads/{id}/goal`, so managed clients can monitor and drive goal state through the runtime API.

- [#5132 Runtime API: expose verifier receipts and evidence beyond the aggregate counter](https://github.com/Hmbown/CodeWhale/pull/5132)  
  Adds read-only endpoints under `/v1/fleet/runs/{run_id}/` for durable task receipts, giving clients visibility into which verifier task failed and why.

- [#5129 feat(runtime-api): add skill lifecycle endpoints — install, update, uninstall, trust, audit](https://github.com/Hmbown/CodeWhale/pull/5129)  
  Extends the runtime API beyond skill discovery/enable-disable to full lifecycle management, matching what the TUI can already do.

- [#5240 feat(tui/shell): surface real wait elapsed time in tool content](https://github.com/Hmbown/CodeWhale/pull/5240)  
  Exposes `duration_ms` in the Bash wait result so the model can see actual wall-clock time. Previously every wait looked identical, biasing the model toward busy-polling.

- [#5242 feat(tui/subagent): resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242)  
  Fixes a dead-letter path where interrupted but continuable child agents could never be resumed. Long tasks can now be picked up from saved checkpoints.

- [#5192 fix(tui): pin ratatui to 0.30.0](https://github.com/Hmbown/CodeWhale/pull/5192)  
  Closed fix. Pins `ratatui` to avoid a blocking cursor position query race in newer ratatui-core versions, which could stall the TUI event loop.

## Feature Request Trends
Distilled from active issues:

- **Sandbox flexibility**: Users want filesystem path allowlists/whitelists for external logs and build artifacts, not just broad `workspace-write` enforcement. (#5005)
- **Provider-agnostic key management**: Single API key storage is too restrictive for users running DeepSeek alongside other providers like GLM. (#5250)
- **Context-window transparency**: Unknown model IDs should not silently fall back to a 128K context window; users want an explicit warning or configuration error. (#5244)
- **UI/interface direction**: One issue keeps asking about a “Reasonix-like” interface, indicating continued interest in alternative presentation models. (#4029)

Overall, users are asking for more configurable boundaries, multi-provider support, and less silent fallback behavior.

## Developer Pain Points
- Sandbox permissions block legitimate build toolchains, especially Xcode’s `DerivedData` path.
- Switching API providers is friction-heavy because only one key can be stored at a time.
- Unknown model IDs cause invisible context degradation, leading to subtle quality loss.
- Interrupted long-running subagents cannot be resumed quickly without checkpoint-based follow-up support.
- Tool wait durations are invisible to the model, making it hard to distinguish between short waits and long-running tasks.
- Runtime API gaps force manual editing of TOML/JSON for MCP servers, skills, memory, and goal loops — a recurring theme in the latest PR batch.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*