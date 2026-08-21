# AI CLI Tools Community Digest 2026-08-21

> Generated: 2026-08-20 23:15 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date:** 2026-08-21 | **Source:** Community digests for 9 tools

---

## 1. Ecosystem Overview

The AI CLI ecosystem is in a high-velocity hardening phase: nearly every major tool shipped a release in the last 24 hours, with the bulk of engineering effort going to reliability (session-state integrity, compaction, Windows support) and security (supply-chain verification, environment sanitization, sandbox isolation) rather than new features. Community attention is concentrated on **data-loss anxiety** — the `Codex /undo` request is the single most-upvoted open item across all repos (394 👍), and OpenCode reports a critical `filesystem_move_file` race that wipes data — signaling that users are now running agentic workflows on real codebases and demanding safety nets. MCP integration remains the dominant cross-tool friction point, spanning policy false-positives, OAuth bridging, and per-server trust. Finally, subagent orchestration has emerged as the next battleground: working-directory control, resource transparency, and honest success reporting are recurring asks across Claude Code, Codex, Gemini CLI, and OpenCode.

---

## 2. Activity Comparison

Counts reflect the last 24 hours as reported in each digest. "Top 10" indicates the digest highlighted 10 noteworthy items; full totals may be higher. N/R = not reported in the digest (channel may exist upstream). No tool in this set uses Discussions as its *only* channel, so no N/A marks apply.

| Tool | Issues (24h) | PRs (24h) | Discussions | Releases (24h) |
|---|---|---|---|---|
| Claude Code | **50 updated** (total) | 0 updated | N/R | 2 patches (v2.1.237, v2.1.238) |
| OpenAI Codex | 10 (top) | 10 (top) | 4 active threads | 1 stable (rust-v0.149.0) + pre-releases |
| Gemini CLI | 10 (top) | 10 (top) | N/R | 1 nightly |
| GitHub Copilot CLI | 10 (top, 9 closed) | 1 updated | None reported | 2 patches (v1.0.81-5, v1.0.81-6) |
| OpenCode | 10 (top) | 10 (top) | N/R | 1 stable (v1.18.19) |
| Pi | 10 (top) | 10 (top) | 2 Q&A threads | None |
| Qwen Code | 10 (top) | 10 (top) | N/R | 1 stable (v0.21.15) + nightly + 3 smoke releases |
| CodeWhale | 10 (top) | 10 (top) | N/R | 1 major (v0.9.10, 76 commits) |
| DeepSeek Harness | No activity | No activity | No activity | None |

**Notable structure signals:** Copilot CLI's issue tracker is dominated by *closed* triage items (9 of 10 hot issues closed), suggesting a mature backlog-clearing workflow but low new-feature throughput. Claude Code is the only repo reporting a total issue count (50 updated). Codex and Gemini CLI both maintain active pre-release channels (alpha/nightly), indicating continuous deployment pipelines.

---

## 3. Shared Feature Directions

**Session safety & undo capability** — The strongest cross-tool signal. Codex users demand `/undo` (#9203, 394 👍) after untracked-file deletions; Copilot CLI users want session recovery after Ctrl+Z (#4539) and interruption (#4529); Pi's `/exit` alias campaign (#5340, #4538, #5161, #5863, #6193, #8081) is driven by muscle memory from Claude Code/Codex. Underlying need: agentic actions need reversible, auditable session models.

**Subagent orchestration & resource transparency** — Claude Code requests a `cwd` parameter for Task tool (#12748, 26 👍); Codex shipped `/cd`, `/pwd`, `/cwd` and faces subagent disk blowups (#34061) and per-agent overhead (#39808); Gemini CLI's generalist agent hangs (#21409) and false GOAL-success reports (#22323) erode trust; OpenCode's TUI lags at 97% CPU with 2–4 concurrent subagents (#42657). Requirements cluster: working-directory control, honest termination reporting, resource limits.

**Context/compaction management** — Pi's auto-compaction fails until provider overflow (#6879, 17 👍) and users request per-model compaction profiles (#8133); Qwen Code faces compression token-count inaccuracies (#9309) and unbounded History memory (#2128, P1); CodeWhale hit early compaction at ~85–105K tokens (#5518) and a `max_tokens` regression (#5516). OpenCode proposes a "Dynamic Context Runtime" (#43649) and reports a memory leak from `structuredClone` per part update (#35107).

**MCP reliability & trust** — Copilot CLI has the deepest pain: false "blocked by policy" reports (#3162), OAuth tokens not bridging to CLI (#4096), GitLab issuer mismatch (#4439), and stalled handshakes (#4206). OpenCode adds per-MCP-server fingerprint pinning (PR #40125). Claude Code extended plugin-marketplace header injection. Gemini CLI requires consent for extension env changes (PR #28863).

**Windows & WSL parity** — Codex: completed threads stuck "Thinking" (#34026), archive failures (#39161). Gemini: 13 env-dependent test failures (#28832), MAX_PATH clone issues (#28926). Copilot: sandbox breaks git on Windows (#4524), WSL state fragmentation across two `session-store.db` files (#4543). Pi: redraw-per-keystroke (#6300). CodeWhale: IME candidate instability (#5023). Qwen: Web Shell clipboard over HTTP (#9485).

**Security hardening** — Codex verifies app codesign signatures before launch (PR #39776); Gemini sanitizes `GIT_CONFIG_*` triplets (PR #28938) and drops the unsafe `diff.external` override (PR #28930); Qwen made its CVE dependency audit a hard gate (PR #9584) and disabled install scripts in CI (PR #9577); Claude Code users report cyber-safeguard false positives against approved orgs (#84352, 132 comments).

**Model output quality** — Claude Code's most-upvoted bug (#77136, 314 👍) reports repetitive rhetorical tics across recent Claude versions; Gemini silently substitutes preview models without entitlement (PR #28828 adds a warning). Users increasingly treat model behavior as a debugging target.

---

## 4. Differentiation Analysis

| Tool | Distinctive Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise trust & safety, plugin marketplaces, output-style control | Claude.ai subscribers, orgs with compliance needs | Node-based, deep Claude model integration, `/config`-driven UX |
| **OpenAI Codex** | Desktop app + Rust CLI, agents dashboard, ChatGPT Remote Control | ChatGPT Pro/Max subscribers, heavy multi-agent users | Rust core, WebSocket exec-server, multi-agent V1/V2 protocol work |
| **Gemini CLI** | OS-level sandboxing, Auto Memory, eval infrastructure | Google ecosystem, research-minded developers | Seatbelt/container isolation, AST-aware tool research epics, behavioral evals |
| **GitHub Copilot CLI** | Enterprise policy, MCP OAuth bridge, GitHub-native provenance | Copilot Business/Enterprise orgs | SDK-server architecture, ACP client support, `--with-token` login |
| **OpenCode** | Modular open-source platform, plugin host, web/desktop/TUI | OSS community, self-hosters, cloud-console users | Bun/TypeScript, opentui, v2 migration with session vertical slices |
| **Pi** | Minimal, fast Rust TUI; provider-agnostic hub | Power users hopping between many model providers | Rust, theme/color refactor (mitsuhiko PR #8398), per-provider compat flags |
| **Qwen Code** | Web Shell as primary UI, ACP daemon, review-pipeline automation | Qwen/Alibaba Cloud users, China market, CI-minded teams | TypeScript, daemon architecture, DingTalk channel, DSW EAS regression smokes |
| **CodeWhale** | DeepSeek-focused niche, CJK UX quality | DeepSeek API users, non-English speakers | Rust TUI, LSP-manager tool reuse, dictionary-spine i18n |

The clearest strategic split: **Codex, Claude Code, and Gemini CLI** are vertically integrated with their respective model families and differentiate on model capabilities and subscription entitlements; **OpenCode, Pi, and CodeWhale** are provider-neutral and compete on UX, extensibility, and ecosystem fit; **Copilot CLI and Qwen Code** are carving out workflow-specific niches (enterprise GitHub governance / Web Shell + CI review loops).

---

## 5. Community Momentum & Maturity

**Most active / highest-signal communities:** Codex leads on raw engagement — the `/undo` issue (394 👍, 71 comments) plus 10 substantive PRs spanning supply-chain and protocol work indicate both demand and throughput. Claude Code has the largest raw issue volume (50/day) and the most-commented thread (132 comments on the cyber-safeguard issue) but **zero PR activity** in 24h, suggesting a slower, more centralized release process. Gemini CLI pairs a p1-tagged bug backlog with a steady stream of security-focused PRs — mature, safety-conscious, but with visible core-stability gaps (shell hangs, subagent misreporting).

**Rapid iteration:** Codex (stable + alphas, agents dashboard shipping), Qwen Code (stable + nightly + 3 regression smokes in one day — the fastest release pipeline observed), and Gemini CLI (nightly cadence with p1 hardening) are the most aggressively shipping. Pi shows unusually strong maintainer-driven velocity for its size, with 10 PRs and a foundational theme refactor from a core maintainer.

**Slower / stalling:** Copilot CLI has 1 PR and mostly-closed issue triage — steady but low feature velocity, consistent with an enterprise-focused product. DeepSeek Harness is dormant (no activity). OpenCode's web-UI terminal-button regression (#30158) has gone unresolved for ~3 months at 14 👍 — a concerning signal for a tool otherwise shipping daily.

**Maturity profile:** Claude Code and Codex have the most diversified issue ecosystems (billing, trust-and-safety, plugin marketplaces, desktop apps) — a sign of broad production usage. Copilot CLI's issues skew toward enterprise integration (org policy, OAuth, model catalogs). Pi and CodeWhale show early-adopter patterns: muscle-memory requests, provider-compat fixes, and UX polish dominate over enterprise concerns.

---

## 6. Trend Signals

1. **Safety nets are the new feature race.** `/undo`, session recovery, atomic file operations, and sandboxing are now core requirements, not nice-to-haves. Tools that cannot guarantee reversibility will lose trust as agentic workloads scale. Expect "rollback-first" session models to become table stakes.

2. **Subagent economics need visibility.** Disk blowups (Codex #34061), per-agent overhead inflation (#39808), false success reporting (Gemini #22323), and render-thread saturation (OpenCode #42657) all point to the same gap: multi-agent orchestration lacks observability, quotas, and honest lifecycle signals. This will drive demand for subagent-level billing/resource dashboards.

3. **Context management is becoming a first-class primitive.** Auto-compaction failure modes (Pi), per-model token budgets (#8133), AST-aware file reading (Gemini #22745), and bounded transcript retention (Qwen #9303) all address the same problem: context windows are a scarce resource that current tools manage crudely. Expect model-aware context budgeting and surgical context injection to differentiate.

4. **Enterprise governance is moving into the CLI.** `co-authored-by: Codex` (78 👍), hard CVE gates (Qwen), codesign verification (Codex), and command-execution-as-invoking-user reviews (Qwen #9556) show compliance requirements arriving at the agent layer. Provenance, entitlement verification, and policy consistency across config paths will be purchase-blocking for regulated teams.

5. **MCP integration quality is the ecosystem's weakest link.** Across five tools, the failures are consistent: policy false-positives, OAuth handoff gaps, issuer validation strictness, and silent handshake stalls. The protocol exists; the client-side integration maturity does not. This is a high-leverage area for any tool that wants to win enterprise developers.

6. **Model-quality drift is now a tracked bug class.** Claude Code's 314 👍 issue on repetitive rhetorical tics — with version-specific regression reports — signals that users treat model behavior as a debuggable, contract-bound component. Tools that can't pin model versions, surface substitution warnings (Gemini's fix), or offer fallback/rollback will face backlash as models update under their users.

7. **Windows/WSL support is the last frontier of trust.** Almost every tool has a Windows-specific blocker that breaks core workflows. As AI coding moves beyond early adopters (largely macOS/Linux), Windows parity — or explicit, documented non-support — will determine which tools reach the broader enterprise developer population.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data source: github.com/anthropics/skills | As of 2026-08-21*

## 1. Top Skills Ranking

Ranked by community attention (PR comment volume). All are currently **Open**.

- **[#1298 — fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)**  
  Repairs the skill evaluation pipeline so `run_eval.py`, `run_loop.py`, and `improve_description.py` no longer optimize against noise. Fixes Windows subprocess/pipe reading, trigger detection, and parallel workers. Discussion centers on resolving the widely reproduced `recall=0%` failure reported in issue #556.

- **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
  A typographic quality-control skill for AI-generated documents: catches orphan words, widow headings, and numbering misalignment. Discussion highlights its broad applicability to virtually every Claude-generated document.

- **[#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**  
  Fixes 8 mismatches between uppercase references and lowercase actual filenames (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Important for users on case-sensitive filesystems.

- **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
  Adds OpenDocument support: create, fill, read, and convert `.odt`/`.ods` files, including template handling and ODT-to-HTML conversion. Discussion focuses on LibreOffice and ISO-standard document workflows.

- **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**  
  Revises the frontend-design skill so every instruction is concrete and executable within a single session. The goal is to reduce vague guidance and improve behavioral steering of Claude.

- **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**  
  Proposes two meta-skills: a quality analyzer covering structure, docs, and examples, and a security analyzer for trust-boundary reviews. Discussion reflects strong community interest in skill governance.

- **[#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**  
  Fixes document corruption when adding tracked changes to DOCX files containing bookmarks. Root cause is OOXML’s shared `w:id` ID space; the PR avoids hardcoded low IDs.

- **[#539 — fix(skill-creator): warn on unquoted description with YAML special characters](https://github.com/anthropics/skills/pull/539)**  
  Adds pre-parse validation in `quick_validate.py` to catch unquoted `description` fields containing `:`, preventing silent YAML truncation and malformed skill frontmatter.

## 2. Community Demand Trends

From the most-discussed Issues, several clear demand clusters emerge:

- **Security and trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments) is the top issue: community skills distributed under the `anthropic/` namespace create impersonation and privilege-escalation risks. There is strong demand for namespace separation and security review tooling.

- **Skill distribution, sharing, and lifecycle management** — [Issue #228](https://github.com/anthropics/skills/issues/228) asks for org-wide skill sharing; [#62](https://github.com/anthropics/skills/issues/62) reports disappearing skills; [#189](https://github.com/anthropics/skills/issues/189) flags duplicate skills from overlapping plugins. The community needs robust install, versioning, and sharing infrastructure.

- **Skill creation/evaluation reliability** — [Issue #556](https://github.com/anthropics/skills/issues/556) documents the `run_eval.py` 0% trigger rate; [#202](https://github.com/anthropics/skills/issues/202) argues `skill-creator` itself needs to become more operational and token-efficient. The demand is for trustworthy skill-testing tooling.

- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill injecting ~156k tokens in one tool call; [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint security/context concerns. Users want skills that are lean and safe by default.

- **Agent memory and governance patterns** — [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes a `compact-memory` skill for symbolic state notation; [#412](https://github.com/anthropics/skills/issues/412) proposes `agent-governance` safety patterns; [#1385](https://github.com/anthropics/skills/issues/1385) outlines a reasoning-quality gate pipeline. Advanced meta-skills for long-running agents are an emerging category.

- **Platform interoperability** — [Issue #29](https://github.com/anthropics/skills/issues/29) asks for AWS Bedrock usage; [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as MCPs. There is steady demand for multi-platform, protocol-level integration.

## 3. High-Potential Pending Skills

These open PRs are actively discussed and represent likely near-term additions to the ecosystem:

- **[#514 — document-typography](https://github.com/anthropics/skills/pull/514)** — A universally useful quality-control skill for document generation.
- **[#486 — ODT skill](https://github.com/anthropics/skills/pull/486)** — Fills a gap for LibreOffice/OpenDocument users.
- **[#723 — feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — Comprehensive testing guidance: philosophy, unit tests, React Testing Library, and the Testing Trophy model.
- **[#568 — feat: add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** — Broad ServiceNow coverage: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, and IntegrationHub.
- **[#525 — Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)** — Integrates with the Pyxel retro game engine via `pyxel-mcp`; covers write → run → inspect → iterate workflows.
- **[#1367 — feat(skills): add self-audit](https://github.com/anthropics/skills/pull/1367)** — Mechanical file verification plus a four-dimension reasoning audit as a universal delivery gate.
- **[#83 — skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — Meta-skills that could become the foundation for community skill review and trust.

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **trustworthy, well-tested, and context-efficient Skills tooling** — security review, reliable evaluation, sharing/governance, and lean execution — rather than simply more domain-specific skills.

---

# Claude Code Community Digest — 2026-08-21

## Today's Highlights
Two patch releases landed today, adding a `keybindingFlavor` setting for Bash-like editing and a built-in "Concise" output style, plus a prompt-caching fix for LLM gateways. On the issue tracker, the highest-activity thread remains cyber-safeguard false positives affecting CVP-approved organizations, while the most-upvoted bug concerns model output quality across recent Claude versions. No pull requests were updated in the last 24 hours.

## Releases
- [v2.1.238](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)
  - New `keybindingFlavor` setting: `"readline"` makes Ctrl+W delete back to previous whitespace as in Bash; default remains `"classic"`.
  - Plugin marketplaces: `headersHelper` on a URL marketplace or catalog entry now runs a command to supply headers.

- [v2.1.237](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)
  - Fixed prompt caching for sessions using an LLM gateway or custom base URL.
  - Added a built-in "Concise" output style: Claude leads with results, skips preamble/narration, and does the work just as thoroughly. Selectable under Output style in `/config`.

## Hot Issues
Total: 50 issues updated in the last 24h. Showing 10 noteworthy items:

- [#84352 — CVP-approved Claude.ai organization still receives cyber safeguard blocks in Claude Code](https://github.com/anthropics/claude-code/issues/84352)  
  132 comments, 21 👍. A previously approved organization is blocked again; the Verification Portal shows "Under review" despite a prior approval email. High engagement around trust and safety-filter reliability.

- [#77136 — Claude 4.7, 4.8, 5.0, and Fable increasingly default to repetitive rhetorical tics and struggle to produce coherent prose](https://github.com/anthropics/claude-code/issues/77136)  
  49 comments, 314 👍. The most-upvoted open issue. Users report degradation in long-form prose and style adherence despite explicit instructions.

- [#12748 — Add cwd parameter to Task tool for setting subagent working directory](https://github.com/anthropics/claude-code/issues/12748)  
  16 comments, 26 👍. Would enable Git worktree-based workflows by letting agents run in different directories.

- [#61172 — /clear inherits previous session name instead of resetting it, causing duplicate-named sessions in /resume](https://github.com/anthropics/claude-code/issues/61172)  
  12 comments, 15 👍. Reproduced on macOS; breaks session hygiene and makes `--resume` ambiguous.

- [#64480 — Claude Max invoice paid but account remains past_due; Claude Code access blocked](https://github.com/anthropics/claude-code/issues/64480)  
  10 comments. Billing state desync blocks access despite successful payment, leaving users unable to use the tool.

- [#88370 — MCP Apps widgets stopped rendering after staged rollout of server/discover version negotiation](https://github.com/anthropics/claude-code/issues/88370)  
  3 comments. A server-side change around `server/discover` broke MCP widget rendering for some users, with no client update.

- [#88320 — Desktop app's GhRestClient burns GitHub GraphQL rate limit](https://github.com/anthropics/claude-code/issues/88320)  
  2 comments. ~640 points per session focus and ~2,000 per turn start; exhausts the 5,000 points/hr limit within minutes.

- [#77384 — Linux self-upgrade races npm postinstall chmod → daemon self-respawn dies with EACCES](https://github.com/anthropics/claude-code/issues/77384)  
  2 comments. Reproduced on Linux npm-local install; binary write vs. `chmod +x` race causes update failure and `install_failed`.

- [#76509 — Bash permission rules vs docker image-tag colons: silent dead rules, settings.json rejects patterns --allowedTools accepts](https://github.com/anthropics/claude-code/issues/76509)  
  4 comments. Permission config is inconsistent between `settings.json` and `--allowedTools`, causing silent rule failures for legitimate scoped commands.

- [#77243 — dark-ansi theme: expanded message background collides with subtle/inactive text](https://github.com/anthropics/claude-code/issues/77243)  
  3 comments, 3 👍. In fullscreen mode, expanded tool calls become unreadable because background and dimmed text map to the same ANSI slot.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Distilled from open issues and enhancement requests:

- **Agent orchestration ergonomics** — Subagent working directory support, agent-teams external inbox contracts, and `--bare` mode respecting `--tools` are recurring asks for more flexible agent workflows.
- **Rule adherence and memory persistence** — Users want stronger enforcement of `CLAUDE.md` and memory, including hard enforcement of SessionStart hooks.
- **TUI/editor quality-of-life** — Keyboard shortcuts for context-chip toggle, dismissible jump-to-bottom indicator, project-scoped LSP configuration, and an `/lsp` status command.
- **Permissions/security configurability** — Consistent pattern matching between `settings.json` and `--allowedTools`, plus better support for narrowly scoped command rules.

## Developer Pain Points
- **Trust and safety friction** — Cyber-safeguard false positives and blocks against approved organizations continue to interrupt legitimate work.
- **Model output quality** — Recent model versions show repetitive rhetorical patterns and prose coherence issues despite explicit style instructions.
- **Billing/account reliability** — Paid invoices leaving accounts in `past_due` blocks tool access and creates support escalations.
- **Session/data integrity** — `/clear` naming bugs, stale messages after context compaction, and Windows path encoding issues threaten user data and workflow continuity.
- **Configuration inconsistency** — Silent permission rule failures, settings rejecting valid patterns, and ignored plugin hooks increase setup friction.
- **Update and resource reliability** — Linux self-upgrade races, desktop GraphQL rate-limit exhaustion, and theme readability issues add operational overhead.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-21

## Today's Highlights

[`rust-v0.149.0`](https://github.com/openai/codex/releases) shipped with an interactive `codex agents` dashboard and new TUI working-directory commands (`/cd`, `/pwd`, `/cwd`), while maintainers landed a wave of hardening PRs around app signature verification, unified shell execution, and exec-connection retries. The community's strongest signal remains the demand to restore `/undo` ([#9203](https://github.com/openai/codex/issues/9203), 394 👍), as users report data-loss risk from untracked-file deletions and uncommitted changes. Windows desktop session-state bugs (stuck "Thinking", archive failures) continue to dominate the tracker.

## Releases

**rust-v0.149.0** — the only release with substantive notes in the last 24h:
- New interactive `codex agents` dashboard for searching, starting, opening, renaming, and stopping tasks, with configurable shortcuts ([#39094](https://github.com/openai/codex/pull/39094), [#39112](https://github.com/openai/codex/pull/39112), [#39114](https://github.com/openai/codex/pull/39114), [#39142](https://github.com/openai/codex/pull/39142)).
- Added `/cd`, `/pwd`, `/cwd` commands for managing the working directory in TUI sessions ([#38894](https://github.com/openai/codex/pull/38894)).

Pre-release versions (`rust-v0.150.0-alpha.1`, `rust-v0.149.0-alpha.7/4/3`) were published without detailed changelogs.

## Hot Issues

1. **[#9203 — Bring back `/undo`](https://github.com/openai/codex/issues/9203)** (71 comments, 394 👍) — The most-upvoted open request. Users report Codex deleting untracked files or modifying uncommitted work with no way to revert; strong demand for a session-level undo as a safety net.

2. **[#38455 — Computer Use workers crash with V8 OOM on macOS](https://github.com/openai/codex/issues/38455)** (33 comments) — Desktop app 26.810.41047 spawns 187 named `computer-use` threads and SIGABRTs ~98s after launch, even while idle. Regression from 26.730.61639; makes the app effectively unusable on Apple Silicon.

3. **[#39162 — Opening a conversation invalidates ChatGPT auth](https://github.com/openai/codex/issues/39162)** (28 comments) — On macOS 26.814.41407, opening an existing conversation redirects to sign-in. Auth regression blocks access to prior work.

4. **[#38350 — Scheduled tasks silently disable themselves](https://github.com/openai/codex/issues/38350)** (25 comments) — Recurring automations flip from enabled to paused after successful runs without user action; four unrelated tasks disabled in one occurrence. Undermines trust in unattended workflows.

5. **[#34061 — Subagents cause excessive disk usage](https://github.com/openai/codex/issues/34061)** (20 comments) — CLI sessions with subagents consume "insane" disk space under gpt-5.6; no obvious cleanup path for subagent session artifacts.

6. **[#35746 — Paginated history drops rollout records and reuses ordinals](https://github.com/openai/codex/issues/35746)** (16 comments) — `RolloutLine` decoding is inconsistent across pages; valid history entries are lost and ordinal values reused, raising data-integrity concerns for session replay.

7. **[#34026 — Windows: completed threads stay "Thinking"](https://github.com/openai/codex/issues/34026)** (12 comments) — Finished threads never resolve, and new messages queue locally without starting a turn. Blocks all subsequent work in the session.

8. **[#39161 — Cannot archive conversation on Windows MSIX](https://github.com/openai/codex/issues/39161)** (9 comments, 14 👍) — Archiving fails reproducibly on Windows 25H2 builds; related to the broader legacy-task archiving breakage in [#39627](https://github.com/openai/codex/issues/39627).

9. **[#38157 — Pro (20x) accounts get Pro 5x capacity](https://github.com/openai/codex/issues/38157)** (6 comments) — Official usage API reports `plan_type: "pro"` while effective allowances behave like the smaller 5x tier. Entitlement mismatch is hard to detect and affects multiple accounts.

10. **[#39771 — High-reasoning WebSocket idle timeout is a false dead-stream](https://github.com/openai/codex/issues/39771)** (3 comments) — Model resumed after 8.5 minutes of no text frames, but clients already treated the stream as dead. Affects long-thinking turns on Pro with `codex-cli 0.148.0-alpha.15`.

## Key PR Progress

1. **[#39776 — Verify Codex app signatures before launch or install](https://github.com/openai/codex/pull/39776)** — Enforces strict `codesign` verification for the Codex bundle ID and OpenAI signing team on macOS, for both downloaded and existing apps. Important supply-chain hardening.

2. **[#39772 — Standardize shell execution on unified exec](https://github.com/openai/codex/pull/39772)** — Moves all shell tooling to `exec_command`/`write_stdin` and removes legacy `default`/`local`/`shell_command` metadata paths, consolidating execution and approval behavior.

3. **[#39786 — Support host-accepted exec-server WebSockets](https://github.com/openai/codex/pull/39786)** — Adds `EnvironmentManager::from_accepted_websocket` so embedding hosts can construct remote environments from already-authenticated Axum WebSockets; enables deeper host integration.

4. **[#39804 — Use multi-agent V1 for Amazon Bedrock models](https://github.com/openai/codex/pull/39804)** — Bedrock doesn't support the response items required by multi-agent V2, so model catalogs are normalized to advertise V1 for both remote and static Bedrock runtimes.

5. **[#39785 — Turn cost telemetry for custom model providers](https://github.com/openai/codex/pull/39785)** — Routes turn-cost queries through the configured provider endpoint for non-OpenAI providers (excluding Bedrock), enabling cost observability for BYO-model setups.

6. **[#39782 — Support standalone named function call outputs](https://github.com/openai/codex/pull/39782)** — Allows `function_call_output` items without a `call_id` (carrying optional `name`/`namespace`) so external tool events can enter thread history without a preceding call.

7. **[#39784 — Classify rollout migration failures](https://github.com/openai/codex/pull/39784)** — Adds a serialized `RolloutMigrationFailureReason` to failed outcomes, grouping failures across reading, conversion, and SQLite migration without parsing free-form text.

8. **[#39777 — Retry transient registry failures during initial exec connection](https://github.com/openai/codex/pull/39777)** — Retries timeouts, interrupted bodies, retryable HTTP statuses, and offline environments while opening the Noise rendezvous connection; improves resilience for flaky network setups.

9. **[#39795 — Add hostname to the configurable TUI status line](https://github.com/openai/codex/pull/39795)** — New `hostname` status-line item with setup previews; reads normalized OS hostname without DNS resolution, omitted when unavailable.

10. **[#39779 — Make tool-result telemetry limits configurable](https://github.com/openai/codex/pull/39779)** — Adds `otel.tool_result.max_bytes` (default 2048) to decouple telemetry truncation from model-visible output limits, preserving UTF-8 safety when centralizing emission.

Also notable: [#39809](https://github.com/openai/codex/pull/39809) preserves `WINDIR` in core Windows shell environments, and [#39798](https://github.com/openai/codex/pull/39798) upgrades `rmcp` to 3.1.3 with improved fallback classification for MCP discovery.

## Hot Discussions

### Ideas
- **[#2807 — `co-authored-by: Codex` support](https://github.com/openai/codex/discussions/2807)** (10 comments, 78 👍) — Long-running request for a GitHub-recognized co-author trailer on Codex-generated commits, driven by transparency/auditability requirements in regulated teams.
- **[#39801 — Add a `/loop` with safe cancellability and missed-wakeup tracking](https://github.com/openai/codex/discussions/39801)** — Proposes cron-style self-wakeups so Codex can poll external data sources or take guided idle breaks without a permanent foreground loop.

### General
- **[#9956 — Updating Codex Contribution Guidelines](https://github.com/openai/codex/discussions/9956)** (9 comments, 22 👍) — Maintainers discuss adapting open-source contribution norms for an era where AI generates large code volumes cheaply; implications for review load and contribution quality.

### Show and tell
- **[#38815 — Built with Codex: quality-adjusted LLM API cost comparisons across nine providers](https://github.com/openai/codex/discussions/38815)** — TokenGauge Workbench, built and operated by Codex, compares LLM API costs using quality-adjusted metrics rather than raw cheapest-token pricing.
- **[#39579 — A conservative script to clean stale Codex Desktop global state](https://github.com/openai/codex/discussions/39579)** — A zsh workaround that clears stale sidebar/UI global-state mappings (e.g., `limit: 20` page objects with `total > 20`) without deleting conversation data.

## Feature Request Trends

- **Session control & safety**: The cluster of `/undo`, `/loop`, `/cd`, `/pwd`, `/cwd`, and hostname-in-status-line requests signals a push for a more terminal-like, scriptable, and recoverable session model.
- **Subagent cost/resource transparency**: Users want visibility and limits on subagent disk usage ([#34061](https://github.com/openai/codex/issues/34061)) and per-agent fixed overhead that inflates usage ([#39808](https://github.com/openai/codex/issues/39808)).
- **Remote control expansion**: Requests to support Linux as a ChatGPT Remote Control host ([#38115](https://github.com/openai/codex/issues/38115)) and host general/projectless chats ([#22947](https://github.com/openai/codex/issues/22947)) show demand for broader remote-control reach.
- **Attribution & governance**: The `co-authored-by` idea ([#2807](https://github.com/openai/codex/discussions/2807)) plus the contribution-guidelines discussion ([#9956](https://github.com/openai/codex/discussions/9956)) reflect growing enterprise/regulatory interest in AI-code provenance.
- **Localization correctness**: Minor but sticky i18n bugs like the zh-CN reasoning-effort collision ([#31963](https://github.com/openai/codex/issues/31963)) recur and erode trust in non-English UIs.

## Developer Pain Points

- **Session state desync**: Completed threads stuck on "Thinking" on Windows ([#34026](https://github.com/openai/codex/issues/34026)), hidden `avatarOverlay` owning finished threads ([#39178](https://github.com/openai/codex/issues/39178)), and subagent panels showing completed agents as Active ([#38364](https://github.com/openai/codex/issues/38364)) — all point to broken UI/runtime state reconciliation.
- **Data-loss anxiety**: Without `/undo`, users fear untracked-file deletion; rollout history drops ([#35746](https://github.com/openai/codex/issues/35746)) and archive failures ([#39161](https://github.com/openai/codex/issues/39161), [#39627](https://github.com/openai/codex/issues/39627)) compound the concern.
- **Auth & entitlement instability**: Auth invalidation on conversation open ([#39162](https://github.com/openai/codex/issues/39162)), MFA enrollment dead-ends ([#34934](https://github.com/openai/codex/issues/34934)), and silent Pro-tier downgrades ([#38157](https://github.com/openai/codex/issues/38157)) disrupt paid users.
- **Resource blowups**: Subagent disk consumption ([#34061](https://github.com/openai/codex/issues/34061)), V8 OOM crashes from Computer Use workers ([#38455](https://github.com/openai/codex/issues/38455)), and fan-out overhead ([#39808](https://github.com/openai/codex/issues/39808)) make resource usage unpredictable.
- **Tooling friction on Windows**: `apply_patch` hangs ([#38190](https://github.com/openai/codex/issues/38190)), Dart `build_runner` stalls mid-build ([#39580](https://github.com/openai/codex/issues/39580)), and relaunch failures (`0x800701C0`, [#35215](https://github.com/openai/codex/issues/35215)) indicate platform-specific execution gaps.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-21

## Today's Highlights

The project shipped a nightly release with a core fix preserving empty text turns, while the PR queue is dominated by reliability and security hardening: a critical `GIT_CONFIG_*` environment sanitization fix, removal of an unsafe `diff.external` override, and warnings for silently substituted preview models. On the issue tracker, the community's most heated topics remain subagent failure modes — especially false GOAL-success reports and generalist agent hangs — alongside a growing cluster of Auto Memory privacy and correctness bugs.

## Releases

**v0.56.0-nightly.20260820.ge90c63fa1**
- `fix(core)`: preserve empty text turns with tools or media by @DavidAPierce ([#28892](https://github.com/google-gemini/gemini-cli/pull/28892))
- Changelog for v0.57.0-preview.0 by @gemini-cli-robot ([#28918](https://github.com/google-gemini/gemini-cli/pull/28918))

Full changelog: [v0.56.0-nightly.20260820.ge90c63fa1](https://github.com/google-gemini/gemini-cli/releases)

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** (p1, bug, 12 comments)
   The `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it actually hit the turn limit before doing any analysis. This masks real failures and produces misleading trajectories — a significant trust issue for agent-driven workflows.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (p1, bug, 8 comments, 8 👍)
   Simple actions like folder creation hang indefinitely when the CLI defers to the generalist agent, forcing users to wait up to an hour or cancel. Instructing the model not to use subagents is the only workaround. High community upvote count signals broad impact.

3. **[#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (p2, enhancement, 8 comments)
   Proposes letting Gemini 3 models use native POSIX tools (`grep`, `cat`, `sed`, `awk`) freely behind a zero-dependency OS sandbox, with post-execution intent routing for security. A long-running architectural discussion about balancing model preferences against safety.

4. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (p1, epic, 7 comments)
   Follow-up to the behavioral evals initiative (#15300): the repo now has 76 eval tests across 6 Gemini model variants, and this epic tracks hardening them into dependable component-level evaluation infrastructure.

5. **[#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (p2, epic, 7 comments)
   Investigates whether AST-aware tools can reduce context noise and turn counts by precisely reading method bounds and navigating code structures. Companion issue [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) suggests `tilth` or `glyph` as starting points.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (p2, bug, 6 comments)
   Anecdotal but recurring: the model ignores custom skills/subagents unless explicitly instructed, even for highly relevant tasks like Gradle or Git operations. Points to a gap in agent self-selection heuristics.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (p2, bug, 5 comments)
   Sessions that the extraction agent deliberately skips as low-signal are never marked processed, so they resurface repeatedly — wasting background model calls and extending memory-processing queues.

8. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (p2, security, bug, 4 comments)
   Auto Memory sends transcript content to the model before prompt-based redaction happens, and the service may log existing skill content. Community is pushing for deterministic, pre-context redaction rather than relying on model behavior.

9. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (p1, core, 4 comments, 3 👍)
   Simple CLI commands that should never prompt for input leave the shell hanging in an "Awaiting user input" state. A high-priority core stability issue affecting everyday usage.

10. **[#22232 — Enhance browser_agent resilience: Automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** (p3, feature, 4 comments)
    The `BrowserManager` fail-fast strategy aborts on locked profiles (e.g., orphaned processes with `sessionMode: 'persistent'`). Requests automatic lock recovery and session takeover.

## Key PR Progress

1. **[#28938 — fix(core): keep GIT_CONFIG_* environment triplets internally consistent](https://github.com/google-gemini/gemini-cli/pull/28938)** (p1, size/l)
   Fixes a sanitizer bug where malformed `GIT_CONFIG_*` environment triplets caused git to abort **every** invocation (reproduced against git 2.50.1). Environment sanitization that breaks all git commands is a serious regression source.

2. **[#28930 — fix(core): drop unsafe `diff.external` override](https://github.com/google-gemini/gemini-cli/pull/28930)** (p1, size/m)
   Reverts an override from #28792 that set `diff.external` to an empty string — git treats that as an active external tool, not a disable. Subtle config semantics with potentially confusing failure modes.

3. **[#28939 — fix(core): avoid persisting interrupted response placeholder](https://github.com/google-gemini/gemini-cli/pull/28939)** (size/l)
   Fixes #28927: the synthetic "[The previous response was interrupted...]" text was persisted in model-authored history, polluting subsequent context. Important for conversation integrity after interruptions.

4. **[#28828 — fix(core): warn when a preview model is silently substituted](https://github.com/google-gemini/gemini-cli/pull/28828)** (p1/p2, size/m)
   Fixes #28825: requesting a preview model without entitlement silently rewrites to `auto-gemini-2.5` with zero signal. Adds a warning so users aren't unknowingly running on a different model.

5. **[#28935 — fix(sandbox): isolate Docker and container runtime sockets and binaries in macOS Seatbelt](https://github.com/google-gemini/gemini-cli/pull/28935)** (size/l)
   Denies access to Docker Desktop UNIX sockets, Mach/XPC service lookups, and POSIX shared memory in Seatbelt profiles to block sandbox escape via VirtioFS container hypervisor mounts. Meaningful macOS security hardening.

6. **[#28863 — fix(extensions): prompt for consent on environment changes and sanitize runtime-altering env vars](https://github.com/google-gemini/gemini-cli/pull/28863)** (size/m)
   Closes a consent bypass where extension updates could inject unauthorized environment variables into MCP server processes; incorporates env configs into consent strings and sanitizes custom variables.

7. **[#28934 — (FIX) history rollback and retry nudge optimizations](https://github.com/google-gemini/gemini-cli/pull/28934)** (size/l)
   Optimizes tool-call cancellations and retry nudges to prevent context-window bloat, reduce API request volume, and maximize prefix-cache hits on retries — directly addressing token-cost pain points.

8. **[#28862 — refactor(core): remove eslint-disable and type-asserts from shellExecutionService](https://github.com/google-gemini/gemini-cli/pull/28862)** (size/l)
   Cleans up `any`-typed `ptyProcess` casts in `shellExecutionService.ts` on the `fix/mac-pty-resource-leak` branch — a sign the team is addressing the Mac PTY resource leak systematically.

9. **[#28910 — feat(core,cli): add Gemini 3.7 Flash and 3.6 Flash model configurations and selection](https://github.com/google-gemini/gemini-cli/pull/28910)** (p2, size/xl, closed)
   Adds complete model resolution for Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite across core and CLI. Large surface-area change; closed in the last 24h.

10. **[#28867 — [SSR Agent] Prevent subagents from running when agents mode is disabled](https://github.com/google-gemini/gemini-cli/pull/28867)** (p2, size/s, closed)
    Fixes #22093: a regression since v0.33.0 where subagents (including the generalist agent) were initialized and run despite agents mode being disabled. Config-respecting behavior restored.

Also notable: **[#28917](https://github.com/google-gemini/gemini-cli/pull/28917)** atomic Whisper model downloads with failure cleanup, **[#28916](https://github.com/google-gemini/gemini-cli/pull/28916)** line-buffering for partial Whisper stdout chunks, and **[#28832](https://github.com/google-gemini/gemini-cli/pull/28832)** skipping environment-dependent Windows tests with reasons instead of failing.

## Feature Request Trends

- **Agent reliability & observability**: False success reports, hidden subagent trajectories, and missing bug-report context dominate. Users want subagent state visible and shareable (e.g., via `/chat share`).
- **AST-aware code tools**: A strong push (issues #22745, #22746, #19561) toward surgical, token-frugal file reads using AST boundaries rather than raw `read_file` firehosing.
- **Sandboxing & security**: Multiple threads seek zero-dependency OS sandboxing (bash affinity), deterministic secret redaction, and container-runtime isolation — safety without crippling the model's native shell abilities.
- **Memory system self-management**: Auto Memory needs better lifecycle handling — stop low-signal retries, quarantine invalid patches, and redact before sending content to model context.
- **Smarter tool/model selection**: Complaints about >128 tools causing 400 errors, preview models silently substituted, and agents not using available skills suggest a desire for adaptive tool scoping and clearer model provenance.

## Developer Pain Points

- **Subagents misreport or hang**: MAX_TURNS reported as GOAL success (#22323), generalist agent hangs (#21409), and browser agent failures on Wayland (#21983) erode confidence in delegated tasks.
- **Shell execution gets stuck**: "Waiting input" states after completed commands (#25166) and interactive-prompt deadlocks (e.g., creating a Vite app, #22465) are frequent high-severity complaints.
- **Environment sanitization breaking git**: The `GIT_CONFIG_*` triplet bug (#28938) and the `diff.external` empty-string override (#28930) show how "helpful" environment normalization can silently break core workflows.
- **Auto Memory privacy concerns**: Transcript content reaches model context before redaction (#26525), and invalid patches are silently skipped with no quarantine or logging (#26523).
- **Windows friction**: Deep MAX_PATH issues on clone (#28926) and 13 environment-dependent test failures out of the box (#28832) make Windows contributions unnecessarily painful.
- **Messy workspace artifacts**: Models creating ad-hoc tmp scripts across directories (#23571) and destructive git operations without guardrails (#22672) create cleanup and safety overhead.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-21

## Today's Highlights

Two patch releases shipped today: **v1.0.81-6** adds configurable startup modes (`defaultMode`, `defaultPermissionMode`) and stdin token login (`--with-token`), while **v1.0.81-5** fixes a duplicate `(pending)` transcript bug. Issue activity remains heavily concentrated around MCP integration — OAuth bridging, policy false-positives, and issuer validation — while a wave of new triage issues highlights WSL/sandbox friction, session-state fragmentation, and skills-discovery gaps.

## Releases

**v1.0.81-6**
- **Added:** `defaultMode` and `defaultPermissionMode` settings to choose startup mode and approval behavior for new interactive sessions; `--with-token` flag for `copilot login` to read an auth token from stdin.
- **Improved:** ACP clients now receive subagent IDs, raw event subscriptions, and live title/mod updates.

**v1.0.81-5**
- **Fixed:** A prompt sent while the agent is working no longer leaves a second copy of itself stuck as `(pending)` at the bottom of the transcript after being answered.

## Hot Issues

1. **[#1481 — SHIFT+ENTER executes prompt instead of inserting line break](https://github.com/github/copilot-cli/issues/1481)** *(CLOSED, 28 comments, 17 👍)* — The most-engaged issue this cycle. Users expect the universal `SHIFT+ENTER` chat convention for line breaks, but the CLI executes the prompt instead, requiring the less-standard `CTRL+ENTER`. Open since February, it remains a top UX friction point.

2. **[#4390 — Enabled organization models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)** *(CLOSED, 15 comments, 7 👍)* — Copilot Business orgs report that explicitly enabled models (Claude Sonnet 5/Opus 5, Kimi K3) are absent from the CLI's effective catalogue, throwing `This model is disabled by your organization` despite being enabled — a significant blocker for enterprises standardizing on Anthropic models.

3. **[#3162 — Registry-listed custom MCP servers falsely reported as blocked by policy](https://github.com/github/copilot-cli/issues/3162)** *(CLOSED, 7 comments)* — Since v1.0.42, custom MCP servers already present in the MCP registry are flagged as "blocked by policy" — a false negative in registry validation that breaks legitimate setups.

4. **[#4096 — OAuth-bridged MCP tools missing from CLI sessions](https://github.com/github/copilot-cli/issues/4096)** *(CLOSED, 6 comments, 2 👍)* — Third-party MCP servers (e.g., Atlassian Remote MCP) show "Connected" in the GitHub Copilot app, but the OAuth token is never bridged into CLI sessions, so tools never appear. A core gap in the app-to-CLI MCP handoff.

5. **[#4503 — SDK server reports ready without auth, then Slack sessions fail generically](https://github.com/github/copilot-cli/issues/4503)** *(CLOSED, 5 comments)* — The SDK server reports "ready" without a `COPILOT_SDK_AUTH_TOKEN` in its environment, then Slack DM integrations fail with an opaque "I couldn't create a session" error.

6. **[#4439 — GitLab MCP OAuth metadata rejected with RFC 8414 issuer mismatch](https://github.com/github/copilot-cli/issues/4439)** *(CLOSED, 5 comments, 3 👍)* — v1.0.79 fails OAuth 2.0 Dynamic Client Registration against GitLab Self-Managed MCP servers due to overly strict issuer validation, blocking a common self-hosted enterprise setup.

7. **[#4206 — Environment footer stuck on "Loading:" forever](https://github.com/github/copilot-cli/issues/4206)** *(CLOSED, 4 comments, 3 👍)* — The status footer permanently shows `◎ Loading: 1 instruction, 40 skills…` even though `/env` confirms everything loaded — a stalled handshake with the built-in GitHub MCP under org MCP policy.

8. **[#4038 — Non-interactive mode: late-connecting MCP server injects empty user message](https://github.com/github/copilot-cli/issues/4038)** *(CLOSED, 3 comments)* — With MCP servers exposing 7+ tools, `copilot -p` appends an empty user turn after the real prompt; the model then answers the empty turn, sometimes echoing fragments of its own system prompt.

9. **[#4524 — Sandbox won't let copilot use git anymore](https://github.com/github/copilot-cli/issues/4524)** *(CLOSED, 3 comments)* — The enforced-sandbox build is reported as overly restrictive on Windows: even with the working directory and `~/.copilot` enabled, git operations fail, breaking workflows that depend on cross-session state sharing.

10. **[#4535 — `store_memory` fails in v1.0.81 prereleases: "Instance id is required"](https://github.com/github/copilot-cli/issues/4535)** *(OPEN, 3 comments)* — A fresh regression on the prerelease channel: the native memory writer is invoked without a required instance ID, breaking `store_memory` for agents relying on memory persistence.

## Key PR Progress

Only one PR was updated in the last 24 hours:

- **[#4510 — Remove GitHub Copilot CLI documentation from README](https://github.com/github/copilot-cli/pull/4510)** *(OPEN, created 2026-08-17)* — This PR strips installation instructions and usage guidelines from the README. The motivation is unclear from the summary alone — likely a docs relocation to a dedicated site — but it's notable since README docs are a primary onboarding entry point for new CLI users. Community visibility is low (0 👍) as of this digest.

## Hot Discussions

No discussion data was provided for this period; this section is omitted.

## Feature Request Trends

- **Session/mode persistence:** Users repeatedly ask for settings to persist across restarts — most recently reasoning effort (#4530, `/config model` persists but effort resets to Medium) and session recovery after interruptions (#4539, #4529).
- **Multi-turn and richer interaction in auxiliary flows:** `/ask` currently supports only one turn (#4538); the queue editor lacks an Add action and should pause dequeueing while open (#4541); image pasting is unsupported in freeform question input (#4544).
- **Conventional chat keybindings:** `SHIFT+ENTER` for line breaks (#1481) remains the highest-voted UX request with 17 👍.
- **First-class WSL/remote-environment support:** Sessions anchoring to the Windows host instead of WSL (#4543) and VSCode remote sandbox failures (#4546) reflect growing demand for containerized and WSL-based development workflows.

## Developer Pain Points

- **MCP integration reliability is the dominant theme.** False "blocked by policy" reports (#3162), OAuth tokens not bridging to CLI sessions (#4096), issuer validation failures against GitLab (#4439), stalled handshakes (#4206), empty-message injection (#4038), and workspace `.mcp.json` servers detected but not connected (#4542) all point to a fragmented, fragile MCP experience across versions.
- **Sandbox and enterprise policy friction.** Sandboxed mode breaks git and editor launches (#4524, #4546); non-interactive sessions bypass `disableBypassPermissionsMode` (#4528) while managed-settings validation fails on valid enum values (#4349) — policy enforcement is simultaneously over- and under-restrictive in different paths.
- **Terminal UI rendering regressions.** Pending chat lines duplicate and accumulate (#4532), and the TUI stops consuming events when turns spawn parallel subagents (#4533) — both degrade long interactive sessions.
- **Session state fragmentation across environments.** VS Code Remote-SSH reconnects show empty transcripts (#4529), WSL sessions split state across two `session-store.db` files (#4543), and Ctrl+Z interruptions lose recent sessions (#4539).
- **Skills discovery gaps.** Personal skills in `~/.copilot/skills/` are documented as a source but never discovered (#4545), undermining a core extensibility promise.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-21

## Today's Highlights

v1.18.19 shipped with Cloudflare AI Gateway passthroughs for OpenAI/Anthropic models and tighter Codex rate-limit parity, but community attention is focused on a cluster of TUI crashes (`remove expects a renderable child object`), a long-running web UI regression where the terminal button vanishes, and a newly surfaced `filesystem_move_file` race condition flagged as critical data loss. The PR queue is dominated by automated cleanup merges plus a notable v2 subagent blocker where the `sessionID` schema contradicts its own docs.

## Releases

### v1.18.19
**Core — Improvements**
- Native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models
- Codex rate limits now more closely mirror ChatGPT subscription limits (@GameOn223)

**Core — Bugfixes**
- Removed built-in Qwen sampling defaults that could send unsupported settings
- (Changelog truncated in source data)

## Hot Issues

1. **[#30158 — Terminal button in web UI mysteriously disappears since v1.15.12](https://github.com/anomalyco/opencode/issues/30158)** — The top-right terminal icon (and several others) vanish from the web UI since v1.15.12; downgrading to v1.15.11 restores them. 12 comments, 14 👍, open for nearly 3 months. High visibility, no fix yet.

2. **[#27474 — TypeError: Failed to fetch](https://github.com/anomalyco/opencode/issues/27474)** — Clicking Explore or agent views throws `TypeError: Failed to fetch` when navigation doesn't land on a sub-agent. 10 comments, reported in Chinese; reproduction remains unresolved.

3. **[#7675 — Install script ignores OPENCODE_INSTALL_DIR environment variable](https://github.com/anomalyco/opencode/issues/7675)** — Installer hardcodes `$HOME/.opencode/bin` instead of honoring `OPENCODE_INSTALL_DIR` → `XDG_BIN_DIR` → `$HOME/bin` precedence. 10 comments, 9 👍; closed, but the issue still resonates with users managing custom layouts.

4. **[#43619 — [2.0] subagent: required sessionID prevents spawning first child session](https://github.com/anomalyco/opencode/issues/43619)** — The `subagent` tool's schema requires `sessionID` even though docs say to omit it for new sessions, blocking all first-child delegation workflows in v2. 9 comments; created yesterday, one of the hottest v2 items.

5. **[#20458 — mouse escape sequences garbled after TUI exit](https://github.com/anomalyco/opencode/issues/20458)** — After quitting the TUI, raw mouse escape sequences (`35;89;19M...`) spew into the terminal. 8 comments, 5 👍; distinct from the in-session garbling issue (#3199).

6. **[#35107 — fix(session): Memory keeps growing until the bun process is killed](https://github.com/anomalyco/opencode/issues/35107)** — `updatePart` calls `structuredClone(part)` per update; text parts accumulate up to 488 KB each across ~93K PartUpdated events, creating massive heap pressure under Bun/mimalloc. 4 comments; a strong root-cause analysis.

7. **[#43054 — Models other than hy3-free / deepseek flash free fail with Forbidden: {model:big-pickle}](https://github.com/anomalyco/opencode/issues/43054)** — Any model outside the two free tiers returns `Forbidden: {"model":"big-pickle"}`. 4 comments, 2 👍; suggests a broken model-mapping fallback on the console gateway.

8. **[#31074 — OpenCode Desktop on macOS keeps opening old project folder after project was moved](https://github.com/anomalyco/opencode/issues/31074)** — Desktop app persists a stale absolute path after projects are relocated. 4 comments, 3 👍; reproducible path-staleness bug.

9. **[#42657 — TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657)** — 2–4 concurrent subagents make typing lag 1–3s and freeze spinners, consistently across Warp, Windows Terminal, and WezTerm. 3 comments; a key scaling ceiling for agent-heavy workflows.

10. **[#43726 — CRITICAL: filesystem_move_file race condition causes data loss](https://github.com/anomalyco/opencode/issues/43726)** — `filesystem_move_file` with `source == destination` silently wipes data 3/10 runs (Mammouth v1.17.11.2 Go binary). 2 comments; severity labeled CRITICAL with reproduction stats.

Also notable: **#43699/#43696/#43693** — three near-identical TUI crashes today (`remove expects a renderable child object`) filed by the same reporter across closed/open/2.0 variants, signaling a fast-moving regression.

## Key PR Progress

1. **[#43718 — feat(plugin): expose session selection methods](https://github.com/anomalyco/opencode/pull/43718)** — Exposes `session.switchAgent` and `session.switchModel` to Effect and Promise plugins via the core plugin host. Merged.

2. **[#43725 — chore: upgrade opentui 0.5.6](https://github.com/anomalyco/opencode/pull/43725)** — Bumps the TUI framework; likely relevant to the day's `remove expects a renderable child object` crashes. Merged.

3. **[#40125 — feat(opencode): Allow per-MCP-server trust configuration](https://github.com/anomalyco/opencode/pull/40125)** — Adds fingerprint pinning and `caFile` support for self-signed MCP servers, enabling trust without global `insecure: true`. Addresses #40111 and partially #23506.

4. **[#43637 — refactor(app): establish session vertical slice](https://github.com/anomalyco/opencode/pull/43637)** — Decomposes a 2,005-line `pages/session.tsx` that mixed route resolution, data projection, review IO, timeline scrolling, and context reads into a proper vertical slice.

5. **[#43728 — fix(tui): align informational dialogs](https://github.com/anomalyco/opencode/pull/43728)** — Normalizes Debug/Status dialog sizing and alignment; closes #42180 and #42181.

6. **[#37994 — [automated-pr-cleanup] replace Intelephense with PHPantom as default PHP LSP](https://github.com/anomalyco/opencode/pull/37994)** — Swaps Intelephense for PHPantom, a faster, MIT-licensed PHP language server.

7. **[#37987 — [automated-pr-cleanup] fix(core): publish domain updates after committed state is readable](https://github.com/anomalyco/opencode/pull/37987)** — Fixes #37422 on `dev` (v2 fix is #38983): state domains could publish update events from `finalize` before the rebuilt state was readable.

8. **[#37983 — [automated-pr-cleanup] fix(tui): rehydrate sessions after reconnect](https://github.com/anomalyco/opencode/pull/37983)** — Closes #32175: the TUI could stop receiving events after a transient global SSE failure; sessions mounted before the gap now rehydrate.

9. **[#37980 — [automated-pr-cleanup] fix(core): serialize prompt settlement](https://github.com/anomalyco/opencode/pull/37980)** — Closes #34853: concurrent replies could settle the same form/question/permission request multiple times. Now serialized.

10. **[#37968 — [automated-pr-cleanup] fix(core): bound tool structured output](https://github.com/anomalyco/opencode/pull/37968)** — Caps durably published tool `structured` values at 16 KiB; oversized values spill to managed tool-output storage as compact receipts, preventing SQLite row bloat.

Also worth watching: **#37936** (most-specific-pattern-wins permission matching, replacing last-match-wins, closes 4 issues), **#37979** (config directory edit reload), **#37991** (block reported model providers on console), **#37929** (assistant turn completion time in TUI), and **#37965** (omit undefined optional keys from glob/grep permission metadata).

## Feature Request Trends

- **Session forking from chat UI** (#36960) — A "Fork" action button directly on assistant messages to branch conversations from any response point.
- **Persistent UI configuration** (#40086) — Users want `ui.sidebar.enabled: false` in `opencode.json`; the Context sidebar currently reappears on every restart with no config escape hatch.
- **Installation and storage layout control** (#7675, #43700) — Requests to honor `OPENCODE_INSTALL_DIR`/`XDG_BIN_DIR` and to consolidate OpenCode root files into a single user-selectable directory (e.g., not scattered in a home-assistant root).
- **Config hot-reload for headless serve** (#43698) — With 2.0 reload work underway, developers want an HTTP/SDK trigger to reload config for `opencode serve` without a restart.
- **Bounded/selective context management** (#43649) — A "Dynamic Context Runtime" proposal for bounded attention over unbounded history, aimed at long-running agent sessions.
- **Per-server trust for MCP** (PR #40125) — Fingerprint pinning instead of global disable-verification, showing demand for granular security controls.

## Developer Pain Points

- **TUI instability** — The `remove expects a renderable child object` crash hit three separate issues today (#43693, #43696, #43699); combined with mouse-garble on exit (#20458) and subagent-induced render lag (#42657), the TUI is the top stability sore spot.
- **Memory leaks in long-running sessions** — Two independent reports (#35107, #34574) document unbounded heap growth: `structuredClone` on every part update, and EventTarget listeners never cleaned up in the Effect runtime, growing RSS from ~127MB to ~4.9GB in ~20 minutes.
- **v2 subagent workflow blockers** — Required `sessionID` for child sessions (#43619) plus a segfault crash on Windows PowerShell (#43591) are slowing early v2 adoption for delegation-heavy workflows.
- **Console/gateway errors and pricing frustration** — "Free usage exceeded" persisting past the reset window (#38869), `Forbidden: big-pickle` model mapping failures (#43054), and one frustrated paid-tier report about repeated interruptions and degraded `ds4f` performance (#43730) point to reliability gaps in the hosted console.
- **Silent data-loss risk** — The `filesystem_move_file` race condition (#43726) is the most alarming entry: a logical no-op wiping files 30% of the time in a Go binary build.
- **Web UI regressions** — The disappearing terminal button (#30158) has been unresolved for ~3 months and remains the most-upvoted active bug (14 👍).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-21

## Today's Highlights

No new releases landed in the last 24 hours, but the project saw a burst of activity across TUI fixes, provider compatibility patches, and provider-add requests. The long-running `/exit` alias campaign finally produced actionable PRs, while the most-upvoted open bug — auto-compaction failing to trigger until provider overflow (#6879) — continues to draw community attention. A notable theme-refactor PR by mitsuhiko (#8398) promises to reshape how Pi exposes color and styling.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6879 — Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)** · 17 👍 · 18 comments
   The highest-signal bug on the board today. A 2-hour agentic turn on gpt-5.6-sol blew past the compaction threshold and only compacted when the API rejected the request at 373k tokens. Commenters strongly support checking after every agent turn rather than waiting for overflow. This is a reliability issue that affects long-running autonomous work.

2. **[#7547 — [Windows] How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** · 35 comments
   The most-discussed issue: a community survey from petrroll to map the fragmented Windows landscape (WSL, native, MSYS, etc.) so maintainers know where to focus bug fixes and docs vs. what should be delegated outside core. A good example of the project using GitHub issues for structured research.

3. **[#5023 — Terminal scrolls to beginning without reason](https://github.com/earendil-works/pi/issues/5023)** · 2 👍 · 17 comments
   Long-standing intermittent bug where the terminal buffer jumps to the session start and fast-scrolls back to the bottom while the model is working. Now closed, but the comment volume shows how disruptive this was to daily use.

4. **[#6300 — Windows: Input line is redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300)** · 8 comments
   Windows TUI rendering bug where each character appears on a new line in both cmd.exe and Windows Terminal. Pairs with #7547 as evidence that native Windows remains a weak spot.

5. **[#8157 — Migrate grok-mermaid → lovely-mermaid](https://github.com/earendil-works/pi/issues/8157)** · 1 👍 · 7 comments
   Proposes replacing the grok-derived mermaid renderer (a 1:1 port with inherited corner cases) with the more mature lovely-mermaid parser. A quality-of-rendering upgrade that touches tables, edge cases, and diagram fidelity.

6. **[#6996 — Gemini 3.x models fail during tool use due to missing thought_signature](https://github.com/earendil-works/pi/issues/6996)** · 5 comments
   Gemini 3.x tool-use sessions fail when replaying history back to the model because `thought_signature` is missing. Provider-specific and blocking for Gemini users relying on multi-turn tool calls.

7. **[#8133 — Per-model compaction settings](https://github.com/earendil-works/pi/issues/8133)** · 3 👍 · 3 comments
   Requests a `compaction.profiles` map keyed by model ID so reserve-token budgets can differ per model, with global values as fallback. Signals growing demand for finer-grained context management as models have wildly different context windows.

8. **[#8409 — Regression: aborted turns end with stopReason: "error" instead of "aborted"](https://github.com/earendil-works/pi/issues/8409)** · 3 comments
   In 0.84.2, aborting during a tool call can produce `stopReason: error` with "This operation was aborted" instead of `aborted`, depending on timing. Fresh regression report, untriaged, but relevant to anyone building on top of Pi's session state.

9. **[#8081 — Unknown slash commands silently sent to the model as chat messages](https://github.com/earendil-works/pi/issues/8081)** · 2 comments
   Typing `/exit` (muscle memory from Claude Code/Codex/opencode) is treated as a normal chat message: costs tokens, lands in the transcript, and can produce confusing provider errors. Community wants a warning on unknown commands — closely tied to the `/exit` alias cluster below.

10. **[#8417 — Background git package update check prompts for SSH passphrase on top of the TUI](https://github.com/earendil-works/pi/issues/8417)** · 2 comments
    On startup, the package update check for SSH-installed git packages can trigger an SSH passphrase prompt directly over the TUI if no agent holds the key. A real edge-case UX/security annoyance for users with password-protected keys.

## Key PR Progress

1. **[#8398 — feat: add color values and theme styling](https://github.com/earendil-works/pi/pull/8398)** · Open
   A significant refactor by mitsuhiko exposing colors directly through the TUI/theme layer. Keeps the old API for backward compatibility but opens the door to color math, more adventurous agent styling, and eventually non-terminal UIs. Worth watching closely — this is a foundational change.

2. **[#8395 — fix(coding-agent): prevent TUI crash on large diffs by avoiding spread in push](https://github.com/earendil-works/pi/pull/8395)** · Closed
   Fixes #8036: rendering ~14.5MB diffs crashed the TUI because `lines.push(...contentLines)` exceeded V8's max call-stack size. Replaced with a loop. A small change preventing a nasty crash for users working with huge generated diffs.

3. **[#8416 — fix: hold triggerTurn-false custom messages until the tool batch ends](https://github.com/earendil-works/pi/pull/8416)** · Closed
   `sendCustomMessage({ triggerTurn: false })` during a stream could land between an assistant `toolCall` and its `toolResult`, causing strict providers to reject the next turn. Messages now wait until the tool batch finishes — a correctness fix for extension authors.

4. **[#8405 — Normalize kimi-coding thinking signatures to base64url](https://github.com/earendil-works/pi/pull/8405)** · Closed
   Fixes repeated 400 errors on second+ turns with kimi-coding reasoning mode: "malformed encrypted reasoning content: invalid base64url encoding." The provider now normalizes signatures, unblocking multi-turn reasoning sessions on kimi-coding.

5. **[#8407 — fix(tui): preserve logical lines when copying soft-wrapped text](https://github.com/earendil-works/pi/pull/8407)** · Closed
   In fullscreen alt-screen mode, mouse selections joined visual rows with `\n`, turning soft wraps into hard newlines in the clipboard and breaking paragraphs, URLs, and lists. Now preserves logical line boundaries during selection copy.

6. **[#8383 — fix(ai): send LOW to disable thinking on gemini-3.7-flash](https://github.com/earendil-works/pi/pull/8383)** · Open
   Disabling thinking on gemini-3.7-flash fails every call with `400 INVALID_ARGUMENT` because the code sends `thinkingLevel: MINIMAL`, which the model doesn't support. The fix sends `LOW` instead. Another data point in the Gemini provider-compat saga.

7. **[#8363 — fix(tui): prevent wrapped table link color leaks](https://github.com/earendil-works/pi/pull/8363)** · Closed
   Resets link colors before table padding/borders so wrapped markdown tables no longer bleed link styling into surrounding content. Includes tests; fixes #8335.

8. **[#8302 — feat(ai): amazon bedrock mantle](https://github.com/earendil-works/pi/pull/8302)** · Open (WIP)
   Adds support for Amazon's Mantle API surface, which hosts models (mainly OpenAI GPT-5.x) that don't work via the existing Converse path. Currently blocked waiting on API key perms for e2e testing. Addresses #5363.

9. **[#8118 — feat(ai): add requiresNonNullAssistantContent compat flag](https://github.com/earendil-works/pi/pull/8118)** · Open
   Some OpenAI-compatible gateways reject replayed assistant messages with null content (tool-call-only turns). This adds a compat flag to send `""` instead, addressing a gap the existing `requiresAssistantAfterToolResult` flag doesn't cover.

10. **[#8399 — feat(settings-selector): show & make default searchable for model and thinking](https://github.com/earendil-works/pi/pull/8399)** · Closed
    With Ctrl+S now persisting model/thinking choices to settings, this adds a "default" label in `/model` and `/thinking` pickers and makes it searchable. Small UX polish that clarifies the new persistence behavior.

Also notable: **[#5268](https://github.com/earendil-works/pi/pull/5268)** (render hardware cursor by default so the prompt cursor hollows on terminal blur) and the long-awaited exit-alias PRs **[#4537](https://github.com/earendil-works/pi/pull/4537)** / **[#5160](https://github.com/earendil-works/pi/pull/5160)** both resurfaced with activity.

## Hot Discussions

**Q&A**

- **[#8397 — System Prompt in Session](https://github.com/earendil-works/pi/discussions/8397)** · 1 👍
  A user learning session observability asks why the system prompt isn't included in the session `jsonl` document, noting that without it, understanding the true nature of a session between the LLM and the harness is difficult. Touches on whether session logs should be self-contained for auditing/replay.

- **[#8389 — Repeated Kitty command-finish notifications](https://github.com/earendil-works/pi/discussions/8389)** · 1 👍
  Pi emits OSC 133 sequences around assistant messages, which Kitty interprets as shell-integration command markers — causing repeated command-finish notifications. Related to issue #8264 (currently marked not-planned); the author is leaving a discussion thread instead of opening a PR, hoping to revisit triage.

## Feature Request Trends

- **`/exit` (and `/bye`/`/config`) aliases — the dominant request.** At least six issues (#5340, #4538, #5161, #5863, #6193, #8081) and two PRs (#4537, #5160) are dedicated to matching Claude Code/Codex muscle memory for exit commands. The volume of duplicate issues is itself a signal that unknown-slash-command handling needs a better default (warn instead of sending to the model).
- **New provider and gateway additions.** Multiple requests landed this cycle: Umans AI (#8404), Concentrate (#8412), OpenAI Daybreak Blue (#8126), and Amazon Bedrock Mantle support (#8302). The pattern shows Pi's role as a multi-provider hub where users expect rapid onboarding of every new API surface.
- **Smarter compaction.** Beyond the #6879 bug, #8133 requests per-model compaction profiles — users want context budgeting to be model-aware, not global.
- **Session observability.** #8397 asks for system prompts in session logs; #8348 notes forked sessions lose prompt-cache hits because `prompt_cache_key` is derived from session ID. Both point to a desire for better session introspection and cost efficiency.
- **Terminal integration polish.** OSC 133 markers (#8389, #8415), terminal focus events (#8414), and kitty image overlay ordering (#6995) show ongoing demand for first-class behavior across modern terminal emulators.

## Developer Pain Points

- **Windows remains a second-class citizen.** Native TUI issues (#6300 redraw-per-keystroke) plus the broad Windows usage survey (#7547) confirm fragmented, buggy experiences. Expect maintainers to use the survey to decide what to support in core.
- **Provider strictness is a constant tax.** Gemini `thought_signature` (#6996), kimi-coding base64url signatures (#8405), gemini-3.7-flash thinking levels (#8383), null-content assistant replay (#8118), and WebSocket transport missing (#3442) — each provider has its own quirks that require targeted compatibility fixes.
- **Context-window management anxiety.** The auto-compaction failure (#6879) and per-model compaction requests (#8133) reflect real pain running long agentic sessions without safe guardrails.
- **Muscle memory wastes tokens.** Users repeatedly type `/exit` and accidentally spend a model call on it (#8081). The sheer number of duplicate issues suggests Pi should either add the aliases or fail loudly on unknown commands.
- **Forked sessions lose caching efficiency.** #8348 highlights that forked sessions get a new session ID, hence a new `prompt_cache_key` and zero cache hits — wasteful for users who fork to explore alternative paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-21

## Today's Highlights
Qwen Code v0.21.15 shipped with Web Shell file-attachment insertion via the composer or `@` selection, faster streaming, and immediate sidebar synchronization. The release pipeline cleared a full batch of DSW EAS regression smokes (SWE-bench Verified + Terminal-Bench 2.0) against v0.21.14, and the nightly channel turned approval/ask-user dialogs into in-flow sheets. Security also moved forward: a CVE-baseline PR ([#9584](https://github.com/QwenLM/qwen-code/pull/9584)) upgrades production dependencies and converts the dependency audit into a hard gate.

## Releases
- **v0.21.15** — Latest stable, focused on Web Shell: file attachments via composer or `@` selection, improved streaming performance, and immediate sidebar synchronization ([#9405](https://github.com/QwenLM/qwen-code/pull/9405), [#9477](https://github.com/QwenLM/qwen-code/pull/9477)).
- **v0.21.11-nightly.20260820.b414f135fa** — Nightly: approval and ask-user dialogs rendered as in-flow sheets; fixes a background-agent false failure ([releases](https://github.com/QwenLM/qwen-code/releases)).
- **dsw-eas-tb-smoke-20260820-r1/r2/r3** — End-to-end regression smokes succeeded after sandbox bootstrap, Harbor cache-gate, and immutable cache-manifest repairs; reference v0.21.14.

## Hot Issues
1. [#8382 Duplicate provider tool call id](https://github.com/QwenLM/qwen-code/issues/8382) — P2 core/session-management bug causing repeated "Duplicate provider tool call id" failures; 7 comments, still open after roughly three weeks.
2. [#8724 Cross-session messaging](https://github.com/QwenLM/qwen-code/issues/8724) — Request for same-machine Qwen Code sessions to discover and message one another with a fail-closed gate; 7 comments.
3. [#2128 Memory grows unboundedly during long sessions](https://github.com/QwenLM/qwen-code/issues/2128) — Long-standing P1: the UI History array accumulates without limit, and process memory never decreases over multi-hour sessions.
4. [#9485 Web Shell copy buttons fail over HTTP](https://github.com/QwenLM/qwen-code/issues/9485) — Clipboard API unavailable when the daemon is served over plain HTTP from a non-localhost address, a common remote-Linux setup.
5. [#9309 Compression seems incorrect](https://github.com/QwenLM/qwen-code/issues/9309) — `/compress-fast` followed by `/compress` produces suspect token counts; drove a follow-up to centralize the `~` estimated-token marker ([#9603](https://github.com/QwenLM/qwen-code/issues/9603)).
6. [#9573 Resumed sessions show "Tool result missing"](https://github.com/QwenLM/qwen-code/issues/9573) — P1 regression: normally completed tool calls display failure placeholders after session resume.
7. [#9597 Hierarchical memory loads QWEN.md twice](https://github.com/QwenLM/qwen-code/issues/9597) — A symlinked workspace-level `QWEN.md` is loaded twice through an alias, duplicating context.
8. [#9571 Confirmation boxes steal focus while typing](https://github.com/QwenLM/qwen-code/issues/9571) — Approval dialogs grab keyboard focus while the user is typing in the composer; sibling issue tracked in [#9611](https://github.com/QwenLM/qwen-code/issues/9611).
9. [#9465 Web Shell sidebar pinning slow/unstable](https://github.com/QwenLM/qwen-code/issues/9465) — Pin/unpin is sluggish and pinned-section ordering shifts after sidebar refetch.
10. [#9556 Review pipeline still grants code execution as invoking user](https://github.com/QwenLM/qwen-code/issues/9556) — Security decision on whether CI should keep executing reviews as the invoking user; 5 comments, needs a call.

## Key PR Progress
1. [#9584 Clear high-severity CVE baseline, harden security gate](https://github.com/QwenLM/qwen-code/pull/9584) — Upgrades affected production dependencies (OpenTelemetry 0.221.x) and makes the dependency CVE gate hard-fail instead of report-only.
2. [#9577 Disable install scripts in release CI](https://github.com/QwenLM/qwen-code/pull/9577) — npm release and stable-release finalizer run installs without lifecycle scripts; finalizer avoids persisting a write-capable PAT.
3. [#9609 Web Shell: don't steal approval focus while typing](https://github.com/QwenLM/qwen-code/pull/9609) — Tool-approval dialog yields when the active element is editable; addresses [#9571](https://github.com/QwenLM/qwen-code/issues/9571).
4. [#9602 Clear tool display list before completion callback](https://github.com/QwenLM/qwen-code/pull/9602) — Moves the display-clear out of `finally` so the UI updates before awaiting the callback; adds a regression test.
5. [#9303 Bound daemon transcript retention to stop renderer OOM](https://github.com/QwenLM/qwen-code/pull/9303) — Releases raw replay snapshots after injection and caps replay rebuilds to prevent browser memory crashes.
6. [#9596 Ask each review fix for its test, rule on non-convergence](https://github.com/QwenLM/qwen-code/pull/9596) — Findings now carry their own acceptance criteria, shrinking the review-fix-re-review loop.
7. [#9527 Bind sandbox image to pulled digest](https://github.com/QwenLM/qwen-code/pull/9527) — Salvaged from the frozen #9214; pins exported sandbox images to the digest returned by the pull report.
8. [#9500 Sync loaded-skill state with history eviction](https://github.com/QwenLM/qwen-code/pull/9500) — Reconciles Skill-tool dedup tracking when microcompaction or `/compress-fast` evicts skill bodies.
9. [#8927 Per-channel sessionRotation](https://github.com/QwenLM/qwen-code/pull/8927) — Bounds route session lifetime via `maxTurns` or message-based limits; new messages start a fresh session past the bound.
10. [#8332 Audio bridge for attachments](https://github.com/QwenLM/qwen-code/pull/8332) — Transcribes user-supplied audio via the configured batch voice model when the primary model lacks audio support.

## Feature Request Trends
- **Web Shell UX maturity** — Attachment insertion ([#9405](https://github.com/QwenLM/qwen-code/pull/9405)), focus management ([#9609](https://github.com/QwenLM/qwen-code/pull/9609)), sidebar pinning performance ([#9465](https://github.com/QwenLM/qwen-code/issues/9465)), and clipboard support over HTTP ([#9485](https://github.com/QwenLM/qwen-code/issues/9485)) show the Web Shell becoming a primary interface needing desktop-grade polish.
- **Session lifecycle & memory management** — Bounded history ([#2128](https://github.com/QwenLM/qwen-code/issues/2128)), transcript retention caps ([#9303](https://github.com/QwenLM/qwen-code/pull/9303)), session rotation ([#8927](https://github.com/QwenLM/qwen-code/pull/8927)), cross-session messaging ([#8724](https://github.com/QwenLM/qwen-code/issues/8724)), and resume correctness ([#9573](https://github.com/QwenLM/qwen-code/issues/9573)).
- **Review pipeline automation** — Convergence advisories ([#9526](https://github.com/QwenLM/qwen-code/pull/9526), [#9461](https://github.com/QwenLM/qwen-code/pull/9461)), capture-tui rendering evidence ([#9273](https://github.com/QwenLM/qwen-code/pull/9273)), and content-anchored incremental rounds ([#9190](https://github.com/QwenLM/qwen-code/pull/9190), [#9191](https://github.com/QwenLM/qwen-code/pull/9191)).
- **Security hardening** — Hard CVE gates ([#9584](https://github.com/QwenLM/qwen-code/pull/9584)), sandbox digest binding ([#9527](https://github.com/QwenLM/qwen-code/pull/9527)), CI install-script lockdown ([#9577](https://github.com/QwenLM/qwen-code/pull/9577)), and git identity pinning ([#9557](https://github.com/QwenLM/qwen-code/issues/9557)).
- **Multi-modal & channels** — Audio attachment bridge ([#8332](https://github.com/QwenLM/qwen-code/pull/8332)) and a built-in DingTalk Workspace channel ([#9394](https://github.com/QwenLM/qwen-code/pull/9394)).

## Developer Pain Points
- **Duplicate tool-call IDs** keep breaking ACP daemon sessions ([#8382](https://github.com/QwenLM/qwen-code/issues/8382)) and can leave persisted calls without terminal results ([#9586](https://github.com/QwenLM/qwen-code/issues/9586)).
- **Long-session memory growth** remains an unresolved P1 ([#2128](https://github.com/QwenLM/qwen-code/issues/2128)) despite active mitigation work.
- **Session resume is fragile**: tool results missing after resume ([#9573](https://github.com/QwenLM/qwen-code/issues/9573)) and compression token-count inaccuracies ([#9309](https://github.com/QwenLM/qwen-code/issues/9309)).
- **Web Shell friction**: clipboard failures over HTTP ([#9485](https://github.com/QwenLM/qwen-code/issues/9485)), focus stealing ([#9571](https://github.com/QwenLM/qwen-code/issues/9571)), slow pinning ([#9465](https://github.com/QwenLM/qwen-code/issues/9465)), and repeated catalog refreshes ([#9561](https://github.com/QwenLM/qwen-code/issues/9561), [#9562](https://github.com/QwenLM/qwen-code/issues/9562)).
- **Context duplication**: symlinked `QWEN.md` files loaded twice by hierarchical memory ([#9597](https://github.com/QwenLM/qwen-code/issues/9597)).
- **Model access friction**: 403 "Access to model denied" onboarding problems ([#9605](https://github.com/QwenLM/qwen-code/issues/9605)) and leaked thinking-tag API errors ([#9348](https://github.com/QwenLM/qwen-code/issues/9348)).
- **Homebrew update-notification noise**: the banner shows whenever npm `latest` is newer, regardless of brew-managed installs ([#9493](https://github.com/QwenLM/qwen-code/issues/9493)).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-21

## Today’s Highlights

v0.9.10 shipped as a 76-commit release focused on retention, identity, first-run experience, and release hardening, while formally deprecating the legacy `deepseek-tui` npm package. Engineering activity centered on TUI architecture refactors (extracting tool-call and stream stages from the turn loop), continued web i18n cleanup around the dictionary spine, and two community-reported token/context-budget regressions that will need close follow-up.

## Releases

**v0.9.10** — [Release PR #5513](https://github.com/Hmbown/CodeWhale/pull/5513)

- Codewhale is now the public product identity; `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers.
- Legacy npm package `deepseek-tui` is deprecated and receives no further releases; v0.8.x legacy `deepseek` / `deepseek-tui` users are expected to migrate.
- Release train includes 76 commits: retention, identity, first-run experience, and release-hardening work plus accepted community changes.

## Hot Issues

1. **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)** — Open, 10 comments. The central tracking issue for the TUI crate decomposition; every sub-EPIC/FEAT reports here. Important for anyone tracking the structural health of the TUI codebase.

2. **[#5518 — Emergency compaction at ~85–105K tokens on DeepSeek V4 despite 327,680-token context](https://github.com/Hmbown/CodeWhale/issues/5518)** — Closed, 3 comments. A reproducible early-compaction report involving output-headroom budgeting and possible handoff-state contamination. High impact for long-running sessions.

3. **[#5516 — HTTP 400: max_tokens=384000 exceeds model limit after v0.9.9 upgrade](https://github.com/Hmbown/CodeWhale/issues/5516)** — Closed, 1 comment. A no-config regression after upgrading to v0.9.9; every request failed because the client asked for more tokens than the model allows. Important release-quality signal.

4. **[#5337 — Web: finish dictionary spine, retire every isZh branch](https://github.com/Hmbown/CodeWhale/issues/5337)** — Closed, 6 comments. The i18n cleanup effort to eliminate inline `{ en, zh }` modules and route all locales through the dictionary spine. Directly enables maintainable localization.

5. **[#4070 — Standalone `read_lints` tool for on-demand diagnostics](https://github.com/Hmbown/CodeWhale/issues/4070)** — Open, 2 comments. Requests an on-demand way for the agent to read lints/errors for files it has not just edited. Addressed by PR #5524.

6. **[#5522 — v0.9.10: make first run progressive instead of front-loading configuration](https://github.com/Hmbown/CodeWhale/issues/5522)** — Open, 0 comments. Direct user feedback: first launch has too much psychological cost, especially for non-English users. Proposes progressive onboarding.

7. **[#5508 — Continuous loop / infinite turn option](https://github.com/Hmbown/CodeWhale/issues/5508)** — Closed, 3 comments. Useful for users running AI coordinators that need to keep gathering reports and assigning jobs until interrupted.

8. **[#5023 — IME candidate window jumps/unstable position during input](https://github.com/Hmbown/CodeWhale/issues/5023)** — Closed, 2 comments. Windows TUI issue with CJK IME input. Significant for non-English users.

9. **[#5512 — Header status indicator never renders since 0.9.7](https://github.com/Hmbown/CodeWhale/issues/5512)** — Closed, 2 comments. Windows regression affecting the `cw` / `whale` / `dots` status indicator; worked in the 0.8.64 era.

10. **[#5442 — Discoverability debt: advanced commands hidden, config-only capabilities](https://github.com/Hmbown/CodeWhale/issues/5442)** — Closed, 1 comment. Product audit finding that ~34 advanced commands never show at the discovery root and the welcome surface teaches governance rather than capability.

## Key PR Progress

1. **[#5524 — feat(tui): add multi-file `read_lints` operation](https://github.com/Hmbown/CodeWhale/pull/5524)** — Open. Implements the approved scope of #4070 by adding a model-visible `read_lints` operation that reuses the existing `LspManager` transport pool instead of spawning new language-server lifecycles.

2. **[#5525 — refactor(tui): adopt command shapes in utility group (FEAT-018)](https://github.com/Hmbown/CodeWhale/pull/5525)** — Open. Converts the seven TUI utility command files to the external command shapes introduced by FEAT-014/FEAT-015 without physically moving them.

3. **[#5523 — refactor(tui): extract tool call stages from turn loop](https://github.com/Hmbown/CodeWhale/pull/5523)** — Open. Splits tool-call planning, approval/execution, and result projection into separate functions while preserving control order and cancellation behavior.

4. **[#5520 — feat(web): move docs/sandbox and docs/web onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5520)** — Closed. Removes 14 + 15 `isZh` branches; both sections now use per-page dictionaries and are held to key/token parity by `check-locales.mjs`.

5. **[#5521 — chore(tui): drop a single-argument concat!](https://github.com/Hmbown/CodeWhale/pull/5521)** — Closed. Small clippy fix for `-D warnings` failure in `runtime_handoff.rs`.

6. **[#5515 — fix(tui): forward MCP image results as typed content](https://github.com/Hmbown/CodeWhale/pull/5515)** — Closed. Converts standard MCP `image` content into CodeWhale’s provider-neutral rich tool-result block, removes inline base64 from the text receipt, and preserves `structuredContent` / `isError` semantics.

7. **[#5513 — release: Codewhale v0.9.10 — retention, identity, and durable approvals](https://github.com/Hmbown/CodeWhale/pull/5513)** — Closed. The official v0.9.10 release PR, carrying the complete 76-commit release lane rebased over public `main`.

8. **[#5509 — fix(tui): restore /title as an independent terminal window title](https://github.com/Hmbown/CodeWhale/pull/5509)** — Closed. Reverts the accidental merge of `/title` and `/rename`; `/title` now controls terminal tab/window title while `/rename` maintains the session name.

9. **[#5514 — refactor(tui): extract stream processing from turn loop](https://github.com/Hmbown/CodeWhale/pull/5514)** — Closed. Extracts the response-stream state machine into `process_stream`, returns stream-produced state via `StreamOutcome`, and keeps request timing/retry behavior intact.

10. **[#5517 — feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5517)** — Closed. Phase 2 of the #5337 series; removes 14 `isZh` branches per section and wires two dictionaries per page.

## Feature Request Trends

- **Multiline input and customizable send shortcuts** — Strong demand from CJK users (#5345, #5023) plus UI polish requests for truncated text (#998, #1682).
- **On-demand diagnostics and richer tool capabilities** — Requests for a standalone `read_lints` tool (#4070) and MCP capability metadata (#4170) show the direction toward more inspectable agent tooling.
- **Long-running agent control** — Continuous-loop / infinite-turn mode for coordinator-style AI usage (#5508).
- **Discovery and first-run experience** — Progressive onboarding (#5522), better command palette discovery (#5442), and up-to-date shell completions (#5526).
- **Chinese localization and docs** — Both web i18n cleanup (#5337) and a full docs-localization epic (#5482) are active.

## Developer Pain Points

- **Context budgeting and token limit regressions** — Early compaction (#5518) and `max_tokens` exceeding model limits after upgrade (#5516) break long sessions and create hard request failures.
- **Flaky network/retry behavior** — Intermittent “request failed” errors against the DeepSeek completions API (#4683).
- **Windows TUI reliability** — Header indicator regressions (#5512), IME candidate window instability (#5023), and default terminal behavior (#1854) remain recurring frictions.
- **Release/CI flakes** — Parallel-load and config-fixture flakes (#5355) and uncapped release workflow jobs (#5496) are known sources of release gate friction.
- **Migration and naming debt** — Legacy `deepseek-tui` deprecation plus stale `codewhale-tui` shell completions (#5526) add confusion for existing users.

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*