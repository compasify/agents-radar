# AI CLI Tools Community Digest 2026-08-22

> Generated: 2026-08-21 23:13 UTC | Tools covered: 9

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
**Date:** 2026-08-22 | **Coverage:** 9 tools, community digest data

---

## 1. Ecosystem Overview

The AI CLI tool landscape is in a rapid-iteration phase with two distinct tiers: well-funded commercial tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI) shipping frequent stable and prerelease builds, and open-source challengers (OpenCode, Pi, Qwen Code, CodeWhale) competing on extensibility and provider flexibility. Across all tools, the community is converging on a common set of concerns — safety/reversibility of agent actions, MCP reliability, subagent orchestration controls, and Windows platform stability. Notable this cycle: OpenAI Codex shipped **6 alpha releases in 24 hours**, while Claude Code posted **zero PRs**, illustrating divergent engineering cadences. DeepSeek Harness showed no activity, leaving an 8-tool competitive core.

---

## 2. Activity Comparison

*Counts reflect items highlighted in each project's daily digest (curated top issues/PRs/discussions), not raw tracker totals. Some repos use Discussions as their primary community channel; where a digest explicitly reported no discussion data, 0 is shown.*

| Tool | Hot Issues | Key PRs | Discussions | Releases (24h) |
|---|---|---|---|---|
| Claude Code | 10 | 0 | 0 | v2.1.239 — **stable** |
| OpenAI Codex | 10 | 10 | 10 | 6× Rust alpha tags |
| Gemini CLI | 10 | 10 | 0 | 1× nightly |
| GitHub Copilot CLI | 10 | 0 | 0 | v1.0.81-7 — **prerelease** |
| OpenCode | 10 | 10 | 0 | v1.18.20 + v1.18.21 — **stable** |
| Pi | 10 | 7 | 3 | None |
| Qwen Code | 10 | 10 | 0 | 1× nightly + benchmark validation |
| CodeWhale | 10 | 10 | 0 | None |
| DeepSeek Harness | 0 | 0 | 0 | None (no activity) |

**Notes:** Claude Code and Copilot CLI had no PR activity in the window despite active issue trackers. Codex is the only tool with a fully populated Discussion section (ideas, general, show-and-tell). Pi and CodeWhale show sustained issue/PR throughput without releases, indicating stabilization cycles.

---

## 3. Shared Feature Directions

- **Undo / rollback / reversible execution** — The strongest cross-tool signal. Codex users demand `/rewind` (#9618, 105👍) plus pre-apply edit review; Codex PRs add sandbox approvals and cancellation propagation. CodeWhale builds a supervised-operation stack (control socket, lifecycle events, `/relaunch` in #5535). Pi proposes forward-looking "Context Curation" (#8437). Claude Code's safety-filter false positives are the same problem from the opposite direction: unwanted interruption of legitimate work.

- **Per-subagent / adaptive reasoning control** — Claude Code wants configurable reasoning effort for subagents (#43083, 59👍). Codex proposes adaptive subtask control (#39862) and Plan-vs-Execute model separation (#10628). Copilot CLI wrestles with unsupported reasoning-effort values (#4345). All three want granular cost/quality routing beyond model selection.

- **MCP reliability and token efficiency** — Near-universal pain: Copilot CLI (BigInt serialization, late-connecting servers, stale reloads), Qwen Code (Windows MCP -32000 failures, tools disappearing between sessions), Claude Code (user-level MCP missing in worktrees), OpenCode (lazy-load MCP tool definitions to cut token waste, #35376), Gemini CLI (MCP config integration), Pi (missing `cache_control` → 2.5× cost penalty via OpenRouter).

- **Session lifecycle and self-awareness** — Agents need to know their own context: Claude Code (#88671 self-introspection, #87114 peer discovery), Codex (stale SQLite thread titles), Copilot CLI (session branching #1313, restore in v1.0.81-7), OpenCode (unarchive #24153, ephemeral sessions #43656), Qwen Code (archive conflicts #9688, per-session model restore #9686), Pi (session rebuild corruption fix #8428).

- **Windows reliability** — Every tool reports Windows-specific breakage: Claude Code MSIX self-bricking, Codex EFS-encrypted WindowsApps copy failures and NUL-filled sandbox state, OpenCode Electron renderer freezes and IME issues, Qwen Code MCP/STDIO failures, Pi Windows Terminal backspace regression, Copilot CLI PowerShell console flashing.

- **Cost and usage transparency** — Codex (status-polling credit burn #35259, Bedrock cache-write spend #37674, Pro quota mislabeling #38157), Claude Code (persistent usage indicator #80261, data-residency cost estimates), OpenCode (cost-tracking RFC #12377), Pi (cache-control cost penalty #7995).

---

## 4. Differentiation Analysis

- **Claude Code** — Most mature feature surface (subagents, auto-memory, MCP, desktop app) and enterprise compliance focus (data-residency premium). Its 0-PR day and long-standing Windows packaging issues suggest consolidation over feature velocity. Safety-filter false positives are the top trust risk.

- **OpenAI Codex** — Fastest mover: Rust rewrite, Guardian V2 risk classification, sandbox approval policies, browser/computer-use configuration, Bedrock setup endpoints. Target user: multi-agent and safety-conscious teams willing to ride alpha builds. Uniquely transparent about internal safety infrastructure.

- **Gemini CLI** — Differentiates on sandbox hardening (macOS Seatbelt Docker isolation), A2A server protocol support, and automated PR-generation infrastructure (Caretaker). Targets the Google/A2A ecosystem while its p1 hangs and false `GOAL` completions are the key reliability gap.

- **GitHub Copilot CLI** — Deepest GitHub/Microsoft integration (`copilot app`, Enterprise model governance). Community is pushing hard for BYOK/multi-model switching (#3282, #3709), implying users want the CLI as an aggregator, not a locked endpoint. Prerelease regressions (memory-store, TUI stalls) erode trust in its fast channel.

- **OpenCode** — Open-source MIT/Apache-style competitor with the broadest provider compatibility surface (AI SDK-based). Emergent strengths: session lifecycle features, desktop MCP management, and an unusually engaged RFC culture. Pain points concentrate in provider quirks and streaming reliability.

- **Pi** — Terminal-purist tool with the deepest provider-agnostic credential handling (OpenRouter, xAI, Bedrock IMDS). Its community is the most technical — discussing keyboard protocols, cache-control formats, and compaction internals. The ThinkRail Web GUI debate (#8449/#8420) signals an identity question: terminal-native or broader?

- **Qwen Code** — Uniquely focused on CI/CD security and review-loop convergence: it runs SWE-bench/Terminal-Bench validation, ships review-loop diagnostics, and is debating whether pipeline agents should run as the invoking user (#9556). Targets Qwen/multimodal model users and enterprise review workflows, particularly in Chinese-language environments.

- **CodeWhale** — Smallest ecosystem but clearly product-led: supervised unattended operation, TUI crate decomposition, and an ignore-file request (#4069) for privacy. Positioned as the automation/supervisor-friendly TUI (herdr, CI), with sub-agent reliability as its critical dependency.

---

## 5. Community Momentum & Maturity

- **Highest velocity:** **OpenAI Codex** (10 PRs, 6 releases, 10 discussions in 24h) and **Gemini CLI** (10 PRs, p1 issue focus, internal PR-generation tooling). Both are heavily investing in safety infrastructure and show strong maintainer responsiveness.

- **Stable but slower:** **Claude Code** commands the highest community engagement per issue (59👍 subagent effort, 27-comment threads) but zero PR throughput signals a bigger release cycle. **Copilot CLI** is similarly issue-rich but release-scarce, with prerelease regressions dominating user sentiment.

- **Open-source momentum:** **OpenCode** and **Qwen Code** both shipped stable/nightly releases alongside 10-PR days — the most balanced activity profiles in the cohort. **Pi** is iterating steadily on reliability (7 PRs, no release) with a highly technical following. **CodeWhale** is the smallest but most cohesive community, rallying around a maintainer-driven roadmap.

- **Maturity ranking by release discipline:** Claude Code (stable, enterprise) > OpenCode (patch releases) > Qwen Code/Gemini CLI (nightly + validation) > Codex (alpha treadmill) > Copilot CLI (prerelease regressions).

---

## 6. Trend Signals

1. **Reversibility is the new feature battleground.** Every major tool has a safety-gap complaint: false-positive blockers (Claude Code), no `/rewind` (Codex), fake `GOAL` completions (Gemini CLI), silent workflow failures (CodeWhale). Expect built-in undo/rollback and explainable termination to become table stakes.

2. **MCP is crossing the chasm — and showing its seams.** The conversation shifted from "does it work?" to "how expensive and reliable is it?" — token overhead (OpenCode), serialization edge cases (Copilot CLI), and Windows process handling (Qwen Code). Tool-definition lazy-loading and server lifecycle management are the next MCP standards fights.

3. **Windows is the universal weak spot.** No tool is exempt. MSIX packaging, EFS encryption, sandbox state corruption, IME input, and terminal protocols are all recurring. Teams with significant Windows populations should treat platform reliability as a selection criterion.

4. **Subagent orchestration deepens.** The industry is moving from "choose a model" to "choose reasoning effort, cost ceiling, and behavior per subtask" (Claude Code #43083, Codex #39862, Copilot CLI #4345). This will reshape pricing and UX in the next generation of agent tools.

5. **Agents are becoming self-aware systems.** Session introspection, peer discovery, cross-session messaging (Qwen Code inbound gate, Gemini A2A, Codex multi-agent), and control sockets (CodeWhale) all point toward agents as addressable, observable system components rather than ephemeral conversations.

6. **Cost transparency drives trust.** Credit burn during polling, missing cache controls, and quota mislabeling are disproportionately damaging complaints because they undermine financial trust. Tools that instrument cost accurately (Claude Code's data-residency estimates, Codex's Guardian logging) will have a durable advantage.

7. **For developers choosing a tool:** prioritize based on ecosystem (GitHub vs. OpenAI vs. Google vs. self-hosted providers), verify Windows support before adoption, and evaluate the tool's safety/reversibility story — not just model quality. The open-source tier (OpenCode, Pi, CodeWhale) now offers comparable session features with better provider flexibility, at the cost of more self-managed reliability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-22

## 1. Top Skills Ranking

Most-discussed skill-related PRs by community attention/comment activity. All are currently **open** and not merged as of the data date.

1. **skill-creator eval reliability fix** — [#1298](https://github.com/anthropics/skills/pull/1298)  
   Fixes `run_eval.py` always reporting `recall=0%`, which breaks the description-optimization loop. Proposes installing the eval artifact as a real skill and fixes Windows stream reading, trigger detection, and parallel workers. Discussion references #556 and 10+ independent reproductions.

2. **document-typography skill** — [#514](https://github.com/anthropics/skills/pull/514)  
   Adds typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, stranded headers, and numbering misalignment. Discussion focuses on problems that affect nearly every generated document.

3. **ODT skill** — [#486](https://github.com/anthropics/skills/pull/486)  
   Adds OpenDocument creation, template filling, and ODT-to-HTML conversion. Triggers on “ODT”, “ODS”, “ODF”, “OpenDocument”, and “LibreOffice document” requests.

4. **frontend-design skill clarity/actionability** — [#210](https://github.com/anthropics/skills/pull/210)  
   Revises `frontend-design` so every instruction is actionable in a single conversation. Discussion emphasizes specificity and internal coherence over broad guidance.

5. **skill-quality-analyzer + skill-security-analyzer** — [#83](https://github.com/anthropics/skills/pull/83)  
   Adds two meta-skills to the marketplace: a five-dimension quality analyzer and a security analyzer for Claude Skills. Positioned as ecosystem tooling for skill review.

6. **self-audit skill** — [#1367](https://github.com/anthropics/skills/pull/1367)  
   Mechanical verification of claimed output files, followed by a four-dimension reasoning audit in damage-severity order. Intended to work across projects, tech stacks, and models.

7. **testing-patterns skill** — [#723](https://github.com/anthropics/skills/pull/723)  
   Comprehensive testing guidance: Testing Trophy philosophy, unit-testing patterns, edge cases, React component testing, and Testing Library usage.

8. **ServiceNow platform skill** — [#568](https://github.com/anthropics/skills/pull/568)  
   Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.

---

## 2. Community Demand Trends

From the most-commented Issues:

- **Security and trust boundaries**  
  [#492](https://github.com/anthropics/skills/issues/492) — 43 comments, 2 👍  
  Community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust-boundary vulnerability. Strong demand for provenance and namespace verification.

- **Org-wide skill sharing**  
  [#228](https://github.com/anthropics/skills/issues/228) — 16 comments, 8 👍  
  Users want direct org-wide skill sharing in Claude.ai instead of manually transferring `.skill` files.

- **Skill evaluation reliability**  
  [#556](https://github.com/anthropics/skills/issues/556) — 12 comments, 7 👍  
  `run_eval.py` never triggers skills, producing a 0% trigger rate across all queries. This is driving multiple fix PRs (#1298, #1099, #1050).

- **Duplicate/conflicting skill installation**  
  [#189](https://github.com/anthropics/skills/issues/189) — 6 comments, 9 👍  
  Installing both `document-skills` and `example-skills` results in identical bundled skills, wasting context window.

- **Governance and quality-gate skills**  
  [#412](https://github.com/anthropics/skills/issues/412) — 6 comments  
  Proposal for an `agent-governance` skill covering policy enforcement, threat detection, trust scoring, and audit trails.  
  Related: [#1385](https://github.com/anthropics/skills/issues/1385) — reasoning quality gate pipeline.

- **Context-window efficiency**  
  [#1487](https://github.com/anthropics/skills/issues/1487) — 4 comments  
  The `claude-api` skill eagerly injects ~156k tokens, exhausting context in one tool call.  
  Related: [#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory symbolic notation proposal.

---

## 3. High-Potential Pending Skills

Active, unmerged PRs likely to land soon:

- **pyxel skill for retro game development** — [#525](https://github.com/anthropics/skills/pull/525)  
  Adds a skill for `pyxel-mcp` covering write → run_and_capture → inspect → iterate workflows for pixel-art/8-bit games.

- **skill-creator Windows pipe crash fix** — [#1099](https://github.com/anthropics/skills/pull/1099)  
  Fixes `run_eval.py` on Windows where every query is recorded as “not triggered” due to subprocess pipe errors.

- **skill-creator Windows subprocess/encoding fixes** — [#1050](https://github.com/anthropics/skills/pull/1050)  
  Handles `claude.cmd` on Windows and encoding issues; two small compatibility fixes.

- **pdf skill case-sensitivity fix** — [#538](https://github.com/anthropics/skills/pull/538)  
  Corrects 8 case mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`).

- **docx tracked-change ID collision fix** — [#541](https://github.com/anthropics/skills/pull/541)  
  Prevents document corruption when tracked changes collide with existing bookmarks in OOXML’s shared `w:id` space.

- **skill-creator YAML validation** — [#539](https://github.com/anthropics/skills/pull/539)  
  Warns on unquoted `description` fields containing `:` to avoid silent YAML parsing failures.

- **Agent Skills spec conformance fix** — [#1538](https://github.com/anthropics/skills/pull/1538)  
  Brings two skills back under the official Agent Skills spec, including a `template/SKILL.md` name/directory mismatch.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for hardening the Skills layer itself — reliable evaluation, security/trust boundaries, context-window discipline, and org-wide distribution — rather than simply adding more domain-specific skills.

---

# Claude Code Community Digest — 2026-08-22

## Today's Highlights

v2.1.239 landed with cost-estimate transparency for data-residency workspaces and a wider rollout of the fullscreen renderer. Community attention is split between a highly-upvoted feature request for subagent reasoning-effort controls and a growing cluster of Windows MSIX packaging bugs that brick desktop updates and repairs. Safety-filter false positives also continue to surface as a recurring source of interrupted workflows.

## Releases

**v2.1.239**
- Cost estimates (`/cost`, status line, `--max-budget-usd`) now include the 1.1× US-only-inference premium for data-residency workspaces.
- Added the one-time fullscreen renderer offer on Bedrock, Vertex, Foundry and other previously excluded setups; new installs there now start in the renderer.

## Hot Issues

- [**#43083**](https://github.com/anthropics/claude-code/issues/43083) — *Feature: configurable reasoning effort level for subagents* (27 comments, 59 👍). The most active thread this week: users want low/medium/high reasoning control when dispatching subagents via the Agent tool, not just model selection. Closed, but clearly a high-demand direction.
- [**#47733**](https://github.com/anthropics/claude-code/issues/47733) — *User-level MCP servers don't load in worktree sessions* (10 comments). MCP servers in `~/.claude/settings.json` fail to load under `claude -w <worktree>`. Marked `needs-repro`, but multiple users are hitting it on macOS.
- [**#33619**](https://github.com/anthropics/claude-code/issues/33619) — *Auto-Memory folder not opening on Windows in /memory command* (8 comments). Long-standing Windows-specific issue; `/memory` cannot locate or open the Auto-Memory folder, blocking a core workflow for Windows users.
- [**#70542**](https://github.com/anthropics/claude-code/issues/70542) — *Don't anonymize user-assigned browser names sent to the model* (7 comments, 6 👍). Users want `Browser 1`/`Browser 2` labels to retain user-assigned names so browser-control prompts are unambiguous.
- [**#88101**](https://github.com/anthropics/claude-code/issues/88101) — *Windows MSIX: CoworkVMService blocks every desktop update, then blocks relaunch* (3 comments). An auto-start service running from the package directory holds package identity, breaking updates (`0x80073D02` / `0x80070020`) and forcing users into manual repair.
- [**#82361**](https://github.com/anthropics/claude-code/issues/82361) — *Agent tool registry fails to discover subset of valid .claude/agents/*.md files* (3 comments). Only 8 of 15 valid custom agent definitions are exposed as dispatchable subagent types — points to a silent discovery bug in the agent registry.
- [**#88323**](https://github.com/anthropics/claude-code/issues/88323) — *Claude Desktop (Windows MSIX) bricks itself — Code Integrity blocks vk_swiftshader.dll* (2 comments). The package is flagged "Modified" after a Code Integrity block, effectively bricking the desktop app on Windows 10. Fresh and severe.
- [**#80261**](https://github.com/anthropics/claude-code/issues/80261) — *Show usage limits on main screen / persistent usage indicator in desktop app* (2 comments, 10 👍). A clear signal that users want always-visible usage awareness instead of hunting through menus.
- [**#87114**](https://github.com/anthropics/claude-code/issues/87114) — *ListAgents omits live named sessions and returns inconsistent names across namespaces* (1 comment). Agent-to-agent messaging breaks when a live, roster-registered peer session is missing from `ListAgents`.
- [**#88671**](https://github.com/anthropics/claude-code/issues/88671) — *Sessions cannot introspect themselves: no way to read the current session's id, title, branch, or linked PR* (1 comment). Fresh enhancement request; `list_sessions` excludes the current session and `get_session` rejects it, leaving agents blind to their own metadata.

## Key PR Progress

No pull requests were created or updated in the last 24 hours.

## Feature Request Trends

- **Subagent configuration depth**: Beyond choosing Opus/Sonnet/Haiku, users want per-subagent reasoning-effort controls ([#43083](https://github.com/anthropics/claude-code/issues/43083)) and reliable discovery of custom agents ([#82361](https://github.com/anthropics/claude-code/issues/82361)).
- **Agent/session self-awareness**: Agents need access to their own session metadata — id, title, branch, linked PR ([#88671](https://github.com/anthropics/claude-code/issues/88671)) — and accurate peer-session discovery for agent-to-agent messaging ([#87114](https://github.com/anthropics/claude-code/issues/87114)).
- **Usage visibility in the desktop app**: Persistent, on-screen usage indicators were requested with strong upvote ratio ([#80261](https://github.com/anthropics/claude-code/issues/80261)).
- **Lossless tool context**: Preserve user-assigned names for browser instances instead of anonymizing them ([#70542](https://github.com/anthropics/claude-code/issues/70542)).

## Developer Pain Points

- **Safety-filter false positives are widespread**: A cluster of reports (e.g. [#73173](https://github.com/anthropics/claude-code/issues/73173), [#88693](https://github.com/anthropics/claude-code/issues/88693), [#88684](https://github.com/anthropics/claude-code/issues/88684)) shows legitimate work — code audits, defensive hardening, decompiling one's own apps — being halted mid-session by AUP/cyber flags, often triggered by innocuous phrasing. These are frequently filed as duplicates, indicating an urgent need for tuning.
- **Windows desktop packaging is fragile**: The MSIX install pattern causes update loops ([#88101](https://github.com/anthropics/claude-code/issues/88101)), permanently broken Repair/Reset ([#88689](https://github.com/anthropics/claude-code/issues/88689)), and self-bricking via Code Integrity blocks ([#88323](https://github.com/anthropics/claude-code/issues/88323)).
- **Worktree and MCP friction**: User-level MCP servers silently fail in git worktrees ([#47733](https://github.com/anthropics/claude-code/issues/47733)), and Windows users still can't open the Auto-Memory folder ([#33619](https://github.com/anthropics/claude-code/issues/33619)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-22

## Today's Highlights

The Codex project shipped another rapid batch of Rust alpha releases, continuing the `0.149` → `0.150` pre-release cadence. Community attention remains concentrated on Windows-specific plugin/sandbox failures and Android Remote session reliability, while the PR queue shows heavy internal investment in Guardian review flows, sandbox approvals, browser/computer-use configuration, and Amazon Bedrock setup support.

## Releases

Six new Rust alpha tags were published in the last 24 hours:

- [rust-v0.150.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.6)
- [rust-v0.150.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.5)
- [rust-v0.150.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.3)
- [rust-v0.150.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.2)
- [rust-v0.149.0-alpha.7.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.7.1)
- [rust-v0.149.0-alpha.4.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.1)

The release notes only state the version numbers, so no user-facing changelog is available yet.

## Hot Issues

1. [ChatGPT desktop repeatedly spawns Computer Use workers and crashes with V8 OOM on macOS (#38455)](https://github.com/openai/codex/issues/38455)  
   A macOS regression with 35 comments and 15 👍. The app crashes ~98 seconds after launch, with 187 threads named `computer-use`. This is a high-signal stability issue for Computer Use on Apple Silicon.

2. [Bundled plugins unavailable on Windows — copyfile fails on EFS-encrypted WindowsApps files (#25220)](https://github.com/openai/codex/issues/25220)  
   27 comments. Computer Use, Browser, Chrome, and LaTeX plugins all fail to install on Windows 11 when the app is installed via Microsoft Store. This is one of the most persistent Windows plugin availability problems.

3. [Codex Desktop re-enters the model during wait/status polling, consuming credits (#35259)](https://github.com/openai/codex/issues/35259)  
   15 comments, 8 👍. Users report that polling turns consumed 19.8% of raw local token volume. Important for anyone doing multi-agent or Ultra work under rate limits.

4. [Native Bedrock lacks explicit cache controls, producing high cache-write spend (#37674)](https://github.com/openai/codex/issues/37674)  
   12 comments, 12 👍. Production users of Amazon Bedrock cannot opt into prompt caching for GPT-5.6 Sol, leading to materially higher costs. Related to #35300.

5. [Windows host pairs with Android Remote, but conversations fail to load; `/wham/tasks/list` returns 503 (#39815)](https://github.com/openai/codex/issues/39815)  
   11 comments. Remote pairing succeeds, but the mobile view cannot load conversations. Part of a broader cluster of Windows + Android Remote regressions this week.

6. [ChatGPT on the web: “Too many requests” blocks chat access and disrupts Work tasks (#38503)](https://github.com/openai/codex/issues/38503)  
   9 comments, 11 👍. Users are hitting rate-limit modals even when they are not near quota, disrupting both chat and Work tasks. Strong community reaction.

7. [ChatGPT Pro (20x) accounts appear to receive Pro 5x Codex usage capacity (#38157)](https://github.com/openai/codex/issues/38157)  
   7 comments, 5 👍. Accounts still show `plan_type: "pro"` but are throttled like the smaller Pro 5x tier. This is a high-impact entitlement/usage bug for paying users.

8. [MCP `tools/call` fails with "Unexpected response type" when valid results decode as CustomResult (#29002)](https://github.com/openai/codex/issues/29002)  
   6 comments, 7 👍. MCP tools returning custom result types break Codex CLI calls. Relevant for users running MCP servers with non-standard result shapes.

9. [NUL-filled `.sandbox/deny_read_acl_state.json` permanently breaks Windows sandbox setup (#35718)](https://github.com/openai/codex/issues/35718)  
   6 comments. A corrupt state file survives uninstall/reinstall because it lives in `CODEX_HOME`. Windows users can get stuck on “Windows setup didn’t finish” indefinitely.

10. [Thread rename updates `session_index.jsonl` but leaves SQLite thread title stale (#16405)](https://github.com/openai/codex/issues/16405)  
    7 comments, 3 👍. A long-standing split-brain state issue between the append-only session index and the SQLite metadata store. Still affecting resume/list workflows.

## Key PR Progress

1. [Log Guardian V2 classification results (#40028)](https://github.com/openai/codex/pull/40028)  
   Adds structured logging for Guardian V2 risk classifications, including thread/turn context, tool call, risk score, and whether the score was accepted or superseded.

2. [Honor granular sandbox approvals in unified exec (#40024)](https://github.com/openai/codex/pull/40024)  
   Unified exec now uses the shared approval-policy check, so `require_escalated` commands can prompt when granular sandbox approval is enabled and stay rejected when disabled.

3. [Cancel Guardian reviews with their tool calls (#40021)](https://github.com/openai/codex/pull/40021)  
   Propagates tool cancellation tokens into Guardian approval reviews, so interrupting a tool also aborts its pending review. Also applies to server-initiated MCP approval elicitation.

4. [Add browser and computer use configuration (#40018)](https://github.com/openai/codex/pull/40018)  
   Adds typed settings for browser history access, per-origin access/download/upload policies, full CDP control, and Computer Use app allowlists via macOS bundle IDs and Windows AUMIDs.

5. [Harden remote installed plugin cache reconciliation (#40015)](https://github.com/openai/codex/pull/40015)  
   Scopes remote installed-plugin snapshots to the active account and serializes bundle reconciliation with direct installs/uninstalls, reducing remote plugin cache corruption.

6. [Reuse Guardian reviews in async risk scoring (#40013)](https://github.com/openai/codex/pull/40013)  
   Passes bounded evidence from completed synchronous Guardian allow/deny reviews into subsequent async Guardian v2 classifier samples, keeping review context isolated from the conversation transcript.

7. [Implement Amazon Bedrock setup in the app server (#40007)](https://github.com/openai/codex/pull/40007)  
   Adds `account/bedrock/discover` and `account/bedrock/setup` endpoints for AWS profile discovery and credential setup, including region and profile persistence.

8. [Route escalated commands through synchronous Guardian review (#40005)](https://github.com/openai/codex/pull/40005)  
   Commands requesting `sandbox_permissions=require_escalated` now get a full synchronous Guardian review even when they are not retries.

9. [Preserve managed deny-read rules across permission updates (#40004)](https://github.com/openai/codex/pull/40004)  
   Runtime permission updates no longer weaken managed filesystem `deny_read` requirements; disallowed profiles are rejected instead of merged.

10. [Hide Fast mode status for unsupported models (#39999)](https://github.com/openai/codex/pull/39999)  
    Fixes the misleading `Fast off` status item when the current model does not support Fast mode; the status is now hidden for unsupported models.

## Hot Discussions

### Ideas

- [How is there not a /rewind or /revert feature? (#9618)](https://github.com/openai/codex/discussions/9618)  
  19 comments, 105 👍. The most-liked recent idea. Users want built-in undo/revert similar to OpenCode and Claude Code instead of relying on manual commits.

- [Using different models for Plan vs Execute (#10628)](https://github.com/openai/codex/discussions/10628)  
  3 comments, 11 👍. Proposes separating model configuration so planning can use a high-reasoning model and execution can use a faster/cheaper model.

- [Feature Proposal: Adaptive SubTask Control for Codex (#39862)](https://github.com/openai/codex/discussions/39862)  
  New proposal for controlling model selection, reasoning effort, usage, and long-running task behavior per subtask.

- [Codex CLI: pre-apply interactive edit review like Claude Code CLI (#39943)](https://github.com/openai/codex/discussions/39943)  
  Requests an interactive pending-edit workflow in the terminal before files are written, with diff review and approve/reject flow.

### General

- [Experimental rollback/safety wrapper for Codex CLI — looking for testers (#39832)](https://github.com/openai/codex/discussions/39832)  
  TimeAgent is an npm package + VS Code extension providing protected agent sessions and before/after diffs. Seeking testers.

- [Ability to control whether to compact successful activities (#39878)](https://github.com/openai/codex/discussions/39878)  
  Users want control over compaction behavior introduced by #38921, which automatically compacts successful command activities.

- [Proposal: an OpenAI-maintained Harness Engineering workflow for Codex (#39821)](https://github.com/openai/codex/discussions/39821)  
  Community-built plugin translating OpenAI’s Harness Engineering article into a first-party-style Codex workflow.

### Show and tell

- [Campfire: an SMS bridge for long-running Codex sessions (#40003)](https://github.com/openai/codex/discussions/40003)  
  Gives running Codex sessions an SMS channel so users can check status or answer questions remotely.

- [Urusilla: a falsifiable agent-communication experiment built with Codex (#39912)](https://github.com/openai/codex/discussions/39912)  
  Open-source experiment for communication between unfamiliar AI agents using declarative “Capsules” and non-installing design.

- [Concilium: cross-model research review using Codex as an independent seat (#39828)](https://github.com/openai/codex/discussions/39828)  
  A Claude Code plugin that invokes Codex CLI as an independent model-family reviewer for research and engineering problems.

## Feature Request Trends

- **Undo/rollback/revert and safety layers** are the strongest recurring theme: `/rewind`, TimeAgent, harness-engineering plugins, and pre-apply edit review all point to wanting safer, reversible agent execution.
- **Smarter model orchestration** is a close second: Plan vs Execute model separation and adaptive subtask control would let users route reasoning effort and cost more granularly.
- **Control over session behavior** is also emerging: users want to disable compaction for successful activities, avoid status-polling credit consumption, and fix stale session metadata.
- **Browser and Computer Use policy management** is moving from “should exist” to “should be configurable,” especially for Windows users blocked by sandbox and plugin-install failures.

## Developer Pain Points

- **Windows reliability is the top cluster:** EFS-encrypted WindowsApps copy failures, NUL-filled sandbox state files, plugin unavailability, and sandbox setup failures repeatedly block Windows users.
- **Android/iOS Remote is fragile:** pairing succeeds but session attach/load fails across multiple builds, with 503s, `Transport unavailable`, and `nextConnectionCount=0` errors.
- **Credit and rate-limit waste is a major concern:** status-polling re-entry, “Too many requests” false positives, Pro quota anomalies, and Bedrock cache-write costs all reduce trust in usage accounting.
- **MCP and custom-provider compatibility remains inconsistent:** CustomResult decoding errors and missing Bedrock cache controls show that non-ChatGPT provider paths still need hardening.
- **Session state is still split-brained:** stale SQLite titles, “already has an active writer” errors, hidden overlay threads, and ownership transfer on multi-window open continue to undermine resume workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-22

## Today's Highlights

The only release in this window was a nightly build, bringing a symlink-handling fix for ignore paths plus cleanup of unsafe type assertions in shell execution. The issue tracker remains dominated by p1 reliability reports: generalist agent hangs, shell commands stuck at “Waiting input,” and subagent `MAX_TURNS` interruptions being falsely reported as success. Meanwhile, the PR queue shows strong momentum on sandbox hardening, A2A cancellation state fixes, and a large wave of automated PR-generation/triage evaluation tooling.

## Releases

**v0.56.0-nightly.20260821.g30573d2e4**

- `fix(core): ensure consistent symlink evaluation in ignore path handling` by @luisfelipe-alt — [PR #28915](https://github.com/google-gemini/gemini-cli/pull/28915)
- `refactor(core): remove eslint-disable and type-asserts from shellExecutionService` by @DavidAPierce — [PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862)

No stable release was published in the past 24 hours.

## Hot Issues

1. **#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption**  
   A `codebase_investigator` subagent reports `success` / `GOAL` even when it hit `MAX_TURNS` before doing any analysis. This is especially dangerous because downstream agents and users are given a false success signal. 13 comments, 2 👍.  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 — Generalist agent hangs**  
   `gemini-cli` hangs indefinitely when deferring to the generalist agent, even for simple operations like folder creation. Users have waited up to an hour before cancelling. Workaround: explicitly instruct the model not to use subagents. 8 comments, 8 👍.  
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#25166 — Shell command execution gets stuck with “Waiting input” after command completes**  
   Simple CLI commands finish but the shell UI remains stuck in an “Awaiting user input” state, forcing repeated manual cancellation. This is a core reliability issue with high user impact. 4 comments, 3 👍.  
   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

4. **#21983 — Browser subagent fails in Wayland**  
   The browser agent exits with `Termination Reason: GOAL` but actually fails under Wayland. Another example of false success masking a broken agent path. 4 comments, 1 👍.  
   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

5. **#21968 — Gemini does not use skills and sub-agents enough**  
   Users report that custom skills and sub-agents are essentially ignored unless explicitly requested, even when task descriptions clearly match. This weakens the extensibility story of Gemini CLI. 6 comments.  
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely**  
   Auto Memory only marks a session as processed after a successful `read_file`, so low-signal sessions are reprocessed forever. Wasted background work and repeated model calls. 5 comments.  
   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7. **#19873 — Leverage model’s bash affinity via zero-dependency OS sandboxing & post-execution intent routing**  
   Proposal to let Gemini 3 models use native bash/POSIX tools safely, with intent routing after execution. Large-effort enhancement with broad implications for codebase exploration and editing. 8 comments.  
   [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

8. **#22745 — Assess the impact of AST-aware file reads, search, and mapping**  
   Epic tracking whether AST-aware tools can reduce token noise and improve method-boundary precision. Potentially major for long-session context efficiency. 7 comments.  
   [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

9. **#26525 — Add deterministic redaction and reduce Auto Memory logging**  
   Auto Memory sends local transcript content into model context before prompt-time redaction, and can log existing skills. Security/privacy concern for users with sensitive local data. 4 comments.  
   [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

10. **#24246 — Gemini CLI encounters 400 error with >128 tools**  
    When enabled tools exceed the API tool-count limit, requests fail with a 400 error. Users expect the agent to dynamically scope tools instead of hitting the ceiling. 3 comments.  
    [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

## Key PR Progress

1. **#28955 — Update dependencies, add MCP configuration, and integrate ECC bundles**  
   Open, p1, size/xl. Large dependency/config update adding MCP configuration and ECC bundle integration.  
   [PR #28955](https://github.com/google-gemini/gemini-cli/pull/28955)

2. **#28934 — History rollback and retry nudge optimizations**  
   Optimizes tool-call cancellation by rolling back history instead of appending synthetic results, reducing context bloat, API request volume, and improving prefix-cache reuse on retries.  
   [PR #28934](https://github.com/google-gemini/gemini-cli/pull/28934)

3. **#28827 — fix(core): avoid false authentication errors for 401 substrings**  
   Fixes #28203 by ensuring `isAuthenticationError` does not treat unrelated values containing `401` — such as ports or exit codes — as authentication failures.  
   [PR #28827](https://github.com/google-gemini/gemini-cli/pull/28827)

4. **#28935 — fix(sandbox): isolate Docker and container runtime sockets and binaries in macOS Seatbelt**  
   Denies access to Docker daemon sockets, CLI binaries, XPC/Mach service lookups, and POSIX shared memory in Seatbelt profiles, closing sandbox-escape paths via container hypervisor filesystem mounts.  
   [PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935)

5. **#28940 — fix(a2a-server): clear stale cancellation error on new message turns**  
   Fixes “Execution aborted” state corruption in the A2A server so subsequent user prompts after a cancellation no longer crash immediately.  
   [PR #28940](https://github.com/google-gemini/gemini-cli/pull/28940)

6. **#28862 — refactor(core): remove eslint-disable and type-asserts from shellExecutionService**  
   Removes unsafe `any`-based typing around `ptyProcess` listeners and eliminates lint suppressions. Part of the `fix/mac-pty-resource-leak` branch.  
   [PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862)

7. **#20238 — fix: mitigate antivirus false positive detections on generated JSON files**  
   Moves generated error reports out of the system temp directory into `~/.gemini/tmp/<hash>/error-reports/` and adjusts content heuristics to reduce antivirus false positives. Closed / help wanted.  
   [PR #20238](https://github.com/google-gemini/gemini-cli/pull/20238)

8. **#28951 — feat(pr-generation): add Cloud Run job, Workflow orchestration, and deployment pipeline**  
   Adds production Cloud Run job configuration, Cloud Workflow orchestration, and deployment automation for the Caretaker PR-generation pipeline.  
   [PR #28951](https://github.com/google-gemini/gemini-cli/pull/28951)

9. **#28948 — feat(pr-generation): add evaluation suite harness and e2e benchmark runner**  
   Introduces `eval_suite.py`, `eval_orchestrator.py`, `eval_config.py`, and an end-to-end chained runner for benchmarking the automated PR code generation agent across curated issues.  
   [PR #28948](https://github.com/google-gemini/gemini-cli/pull/28948)

10. **#28949 — feat(pr-generation): add LLM diff judge evaluation module and rubric**  
    Implements an LLM-as-a-Judge module for scoring generated PR diffs against ground-truth pull requests, with a reusable scoring rubric.  
    [PR #28949](https://github.com/google-gemini/gemini-cli/pull/28949)

## Feature Request Trends

- **Agent transparency and observability**  
  Users want truthful termination reasons, subagent trajectories visible via `/chat share`, and more subagent context included in `/bug` reports — see [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763).

- **Smarter context and tool management**  
  The community is pushing for AST-aware file reads/search/mapping, “tactful extraction” to avoid large-file firehosing, and persistent file-based task tracking instead of in-context WriteToDo — see [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561), [#18836](https://github.com/google-gemini/gemini-cli/issues/18836).

- **Security and safe execution**  
  Strong recurring demand for better sandboxing, deterministic redaction of Auto Memory data, and guardrails against destructive commands — see [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672).

- **Browser agent resilience**  
  Browser subagent improvements are highly requested: automatic session takeover, lock recovery, respecting `settings.json` overrides, and Wayland support — see [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983).

- **Memory system hardening**  
  Auto Memory needs better lifecycle handling: stop retrying low-signal sessions, quarantine invalid patches, and reduce background logging — see [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516).

## Developer Pain Points

- **Hangs and false completions**  
  The most frustrating recurring issues are agent hangs and fake success reports: generalist agent hangs forever ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck at “Waiting input” ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and subagents reporting `GOAL` after `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).

- **Context bloat and token waste**  
  Large file reads, in-context task tracking, and retry nudges consume too many tokens. Related asks include persistent todo files ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836)), tactical extraction ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), and rollback optimizations ([#28934](https://github.com/google-gemini/gemini-cli/pull/28934)).

- **Tool-count limits**  
  Too many enabled tools cause API-level 400 errors, forcing users to manually reduce scope — see [#24246](https://github.com/google-gemini/gemini-cli/issues/24246).

- **Subagent autonomy gaps**  
  Custom skills are underused, browser agents ignore configuration overrides, and locked profiles are not recovered automatically — see [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232).

- **Security and privacy friction**  
  Auto Memory can expose transcript content to model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), generated error reports trigger antivirus false positives ([#20238](https://github.com/google-gemini/gemini-cli/pull/20238)), and the model occasionally uses risky commands like `git reset --force` when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-22

## Today's Highlights

A new prerelease, `v1.0.81-7`, shipped with automatic session restore and richer model metadata, signaling continued focus on recovery and model transparency. Community activity was dominated by two themes: demand for flexible multi-model/BYOK switching inside a session, and reliability issues around MCP servers and reasoning-effort configuration. Several prerelease regressions — memory-store failures, TUI stalls, and patch-retry loops — are drawing attention from users on the latest channel.

## Releases

### [v1.0.81-7](https://github.com/github/copilot-cli/releases/tag/v1.0.81-7)

- **Startup session restore** — Copilot CLI now offers to restore sessions that were still open when the CLI exited, reducing manual terminal reopening after crashes or restarts.
- **Model metadata** — `models.list` now includes service-published `infoMessages` and `warningMessages` per model, giving better visibility into model status.
- **New command** — Added `copilot app` to open the GitHub app (release notes truncated in source).

## Hot Issues

1. **[#3282 — Add multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282)**  
   Users want to configure and switch between multiple BYOK models rather than being pinned to one via environment variable. With 26 👍 and 8 comments, this is one of the strongest current feature signals.

2. **[#3709 — Allow `/model` to switch between multiple models, including BYOK/local providers](https://github.com/github/copilot-cli/issues/3709)**  
   BYOK mode pins a session to `COPILOT_MODEL`, and the `/model` picker only shows GitHub-hosted models. At 27 👍, this is the most upvoted issue in the current window and closely related to #3282.

3. **[#4345 — Reasoning effort 'medium' not supported for claude-haiku-4.5](https://github.com/github/copilot-cli/issues/4345)**  
   A server-side feature-flag combination causes repeated sub-agent execution failures. Active discussion (8 comments) suggests this is affecting real workflows.

4. **[#1313 — Session Branching](https://github.com/github/copilot-cli/issues/1313)**  
   Request to fork a session while preserving full conversation history. 7 comments and 13 👍 indicate steady interest in more advanced session-tree workflows.

5. **[#4211 — Copilot CLI couldn't handle BigInt in structured MCP response](https://github.com/github/copilot-cli/issues/4211)**  
   A large number from an MCP server aborts all ongoing tasks with `Do not know how to serialize a BigInt`. MCP users need practical safeguards for non-JSON-safe values.

6. **[#4535 — `store_memory` fails in v1.0.81 prereleases: `Instance id is required`](https://github.com/github/copilot-cli/issues/4535)**  
   A regression in the native memory writer. Especially important for users on the prerelease channel who rely on persistent memory.

7. **[#4422 — All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)**  
   Enterprise users report losing access to Claude models despite them being enabled in settings. Closed, but the impact and recent comments make it noteworthy.

8. **[#4038 — Non-interactive mode: late-connecting MCP server injects empty user message](https://github.com/github/copilot-cli/issues/4038)**  
   In `copilot -p` mode, a slow MCP server can cause the model to answer an empty turn and echo system-prompt tool lists. This breaks scripted pipelines and is triaged.

9. **[#4521 — Sandbox cannot be disabled](https://github.com/github/copilot-cli/issues/4521)**  
   Config reports sandbox as disabled, but runtime still enforces it. 4 👍 show this is not an isolated config misunderstanding.

10. **[#4533 — Terminal UI stops consuming events when a turn spawns parallel subagents](https://github.com/github/copilot-cli/issues/4533)**  
   On prerelease builds, the TUI freezes (input + scroll dead) while the Rust runtime keeps running. This is a serious usability regression for complex agent turns.

## Key PR Progress

No pull requests were updated in the last 24 hours. The repository currently shows 0 PRs in the digest window.

## Feature Request Trends

- **Multi-model flexibility in one session**  
  The clearest trend is the desire to mix GitHub-hosted, BYOK, and local models in a single session, with `/model` as the switching surface. Issues #3282 and #3709 are the highest-signal examples.

- **Session lifecycle improvements**  
  Users want session branching (#1313), better recovery after crashes (now partially addressed by session restore in v1.0.81-7), and a way to bypass cwd/repo relevance grouping in the `/resume` picker (#4554).

- **Richer plan and interaction controls**  
  Newer requests include inline annotations on plan steps (#4563) and bringing back interactive `ask_user`-style question prompts (#4557).

- **Marketplace/plugin configuration**  
  There is interest in server-managed extra marketplaces actually being registered and surfaced, rather than silently skipped (#4556).

## Developer Pain Points

- **MCP reliability is the top recurring frustration**  
  Problems include BigInt serialization (#4211), late-connecting servers inserting empty turns (#4038), workspace `.mcp.json` detected but not connected (#4542), stale reloads after config changes (#4562), and unavailable servers being mislabeled as “waiting on ide” (#4552).

- **Model and reasoning-effort configuration friction**  
  Users report unsupported reasoning-effort values (#4345), `auto` forcing `reasoningEffort: null` and rejecting overrides (#4560), and enterprise/model access inconsistencies (#4422).

- **Prerelease regressions erode trust in fast-moving builds**  
  `store_memory` failures (#4535), TUI event stalls (#4533), and infinite `apply_patch` retry loops (#4553) all appeared in recent prereleases, causing users to question stability.

- **Platform-specific annoyances remain visible**  
  Windows users see constant PowerShell console flashing on every shell command (#4549), plus `wta.exe` path quoting issues (#4540). macOS users report SSH remote copy reporting success while the clipboard stays empty (#4551).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-22

## 1. Today's Highlights

Two patch releases landed today focused on response reliability: v1.18.20 adds retries for network-error finish reasons and resumable subagent failures, while v1.18.21 handles unknown finish reasons and improves Vertex AI multi-region routing. In parallel, the community is heavily engaged on streaming/provider compatibility, MCP tool overhead, and session-lifecycle features such as ephemeral sessions and unarchiving archived sessions.

## 2. Releases

### v1.18.21
- **Core**
  - Continue responses when a model reports an unknown finish reason instead of stopping early.
  - Route Vertex AI `eu` and `us` multi-region Gemini requests through REP endpoints.
- **Desktop**
  - Keep file search results visible while the next search is loading.

### v1.18.20
- **Core**
  - Surface failed subagent tool calls with a resumable `task_id`.
  - Retry provider responses that end with `finish_reason: network_error`.
  - Retry more network error variants, including `network-error` and `network_error`.
  - Surface resumable subagent failures instead of returning incomplete/opaque errors.

## 3. Hot Issues

- [#785 – Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785)  
  Users with proxy providers that do not support streaming are blocked entirely. High engagement: 31 comments, 38 👍.

- [#6245 – ctrl+p in VSCode doesn't work](https://github.com/anomalyco/opencode/issues/6245)  
  Keybinding conflict in the VSCode extension. Popular and still relevant: 11 comments, 24 👍.

- [#12377 – [RFC] Cost Tracking Architecture: Subagent Aggregation + Multi-Model Correctness](https://github.com/anomalyco/opencode/issues/12377)  
  Proposes fixing inaccurate cost display for multi-agent and multi-model workflows. Important for power users running complex sessions.

- [#24153 – [FEATURE]: Add unarchive/restore for archived sessions](https://github.com/anomalyco/opencode/issues/24153)  
  Archiving is currently one-way, making old sessions effectively disappear. Strong demand: 9 comments, 11 👍.

- [#35376 – [Feature] Lazy-load MCP tool definitions to reduce token overhead](https://github.com/anomalyco/opencode/issues/35376)  
  All MCP tool definitions are injected into every prompt; users with multiple MCP servers report significant token waste.

- [#30906 – Desktop v1.16.0 Windows: renderer unresponsive / UI freeze when computing diff of large files](https://github.com/anomalyco/opencode/issues/30906)  
  Regression causing complete Electron renderer freezes on large files; project worked fine in v1.15.13.

- [#41847 – Permission dialogs not rendered: backend blocks on invisible prompts, app appears frozen](https://github.com/anomalyco/opencode/issues/41847)  
  Critical UX bug: 3,270 permission prompts were created over 27 days but never shown to the user, blocking backend execution invisibly.

- [#43829 – Deepseek-v4-flash-free Not Available](https://github.com/anomalyco/opencode/issues/43829)  
  Users report DeepSeek free-tier models disappeared from the model list. Related to [#43805](https://github.com/anomalyco/opencode/issues/43805), where the model exists in the Zen API but is missing from the TUI dropdown.

- [#43911 – textVerbosity injected for gpt-5.x on @ai-sdk/openai-compatible providers, breaks Bedrock Mantle via LiteLLM gateway](https://github.com/anomalyco/opencode/issues/43911)  
  Auto-injecting `textVerbosity` based solely on model ID breaks requests through gateways like LiteLLM to AWS Bedrock.

- [#42657 – TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657)  
  Typing delays and stuttering spinners with 2–4 concurrent subagents, reproduced across multiple terminals.

## 4. Key PR Progress

- [#43656 – feat(opencode): OpenCode ephemeral sessions](https://github.com/anomalyco/opencode/pull/43656)  
  Adds ephemeral sessions as a core server concept, exposing a long-requested session-lifecycle feature.

- [#43719 – feat(desktop): add MCP server setup and connection testing](https://github.com/anomalyco/opencode/pull/43719)  
  Adds a Desktop MCP settings page so users can manage servers without hand-editing config files.

- [#44009 – fix(tui): auto-approve background tab permissions](https://github.com/anomalyco/opencode/pull/44009)  
  Fixes a V2 TUI issue where `--auto` only approved permissions for the active tab, leaving background tabs blocked. Closes [#44007](https://github.com/anomalyco/opencode/issues/44007).

- [#44002 – fix(core): recover partial provider failures](https://github.com/anomalyco/opencode/pull/44002)  
  Retries retryable provider-internal failures after partial model output, as long as no tool activity occurred.

- [#44005 – fix(core): recover and validate session locations](https://github.com/anomalyco/opencode/pull/44005)  
  Allows session locations to recover when a deleted directory is recreated, and rejects moves into invalid location runtimes.

- [#44016 – fix(core): harden portable shell authorization](https://github.com/anomalyco/opencode/pull/44016)  
  Tightens the portable shell permission scanner so uncertain shell input cannot execute under a narrower saved approval.

- [#43844 – fix(server): reject requests for missing project directories](https://github.com/anomalyco/opencode/pull/43844)  
  Prevents requests from failing mysteriously when a saved project directory has been deleted or moved. Fixes [#39471](https://github.com/anomalyco/opencode/issues/39471).

- [#43999 – fix(server): match project copy errors by _tag instead of instanceof](https://github.com/anomalyco/opencode/pull/43999)  
  Fixes brittle error matching when `@opencode-ai/core` is loaded more than once, avoiding false `forceRequired` behavior. Closes [#43995](https://github.com/anomalyco/opencode/issues/43995).

- [#44011 – fix(core): stabilize forked message IDs](https://github.com/anomalyco/opencode/pull/44011)  
  Makes copied message identities deterministic when durable fork events are replayed, preventing inconsistent child sessions.

- [#44021 – fix(core): resolve device verification URL](https://github.com/anomalyco/opencode/pull/44021)  
  Fixes OpenCode Console device authorization when the API returns an origin-rooted verification path.

## 5. Hot Discussions

No discussion data was provided for this digest; this section is omitted.

## 6. Feature Request Trends

- **Provider & streaming compatibility**  
  Users are asking for non-streaming mode support ([#785](https://github.com/anomalyco/opencode/issues/785)), better handling of missing `finish_reason` ([#43882](https://github.com/anomalyco/opencode/issues/43882)), and dropped `reasoning` fields ([#35283](https://github.com/anomalyco/opencode/issues/35283)).

- **MCP ergonomics and token efficiency**  
  Lazy-loading MCP tool definitions to reduce context overhead ([#35376](https://github.com/anomalyco/opencode/issues/35376)) is a recurring theme, alongside desktop MCP management and cleaner MCP error display in the sidebar.

- **Session lifecycle control**  
  Strong demand for unarchive/restore ([#24153](https://github.com/anomalyco/opencode/issues/24153)), ephemeral sessions ([#43656](https://github.com/anomalyco/opencode/pull/43656)), and reliable fork/migration behavior.

- **Cost and usage transparency**  
  Users want accurate subagent cost aggregation ([#12377](https://github.com/anomalyco/opencode/issues/12377)) and API-key-accessible usage history for OpenCode Go ([#43983](https://github.com/anomalyco/opencode/issues/43983)).

- **Performance under load**  
  Large-file diff freezes ([#30906](https://github.com/anomalyco/opencode/issues/30906)) and TUI lag with concurrent subagents ([#42657](https://github.com/anomalyco/opencode/issues/42657)) highlight the need for better renderer and diff performance.

## 7. Developer Pain Points

- **Fragile provider quirks:** OAuth failures ([#43850](https://github.com/anomalyco/opencode/issues/43850)), provider-specific injection like `textVerbosity` ([#43911](https://github.com/anomalyco/opencode/issues/43911)), and model availability mismatches cause frequent setup friction.
- **Streaming/network reliability:** Random response stops ([#34473](https://github.com/anomalyco/opencode/issues/34473)) and network-error finish reasons remain common pain points.
- **Invisible or incomplete permission flows:** Hidden permission dialogs ([#41847](https://github.com/anomalyco/opencode/issues/41847)) and `--auto` not covering background tabs ([#44007](https://github.com/anomalyco/opencode/issues/44007)) block agent execution in confusing ways.
- **Versioning inconsistencies:** Web UI version lag ([#36232](https://github.com/anomalyco/opencode/issues/36232)) and model options not reflected in the UI ([#17588](https://github.com/anomalyco/opencode/issues/17588)) erode trust in configuration.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-22

## 1. Today's Highlights

Context-window reliability dominates the tracker: auto-compaction still fails to trigger until provider overflow (#6879), and long sessions continue to crash with Node heap OOM (#2644). The maintenance train is moving, though — PRs landed for session-rebuild corruption (#8428), xAI Grok Build's reasoning-field HTTP 400 (#8422), and fullscreen path double-click selection (#8459). The community is also buzzing about ThinkRail, a JetBrains-backed web GUI, and whether Pi needs an official Web UI base.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

- **[#6879 — Auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** *(19 comments, 17 👍)* — The most-voted issue this cycle. A 2-hour agentic turn on gpt-5.6-sol pushed the footer past 100% and compaction only fired when the API rejected the request at 373k tokens. Community consensus: the check must run after every agent turn, not just at response boundaries.
- **[#2733 — Backspace and Delete keys broken in Windows Terminal](https://github.com/earendil-works/pi/issues/2733)** *(closed, 11 comments)* — Regression introduced between 0.62.0 and 0.64.0. Closed, but it kicked off a broader keyboard-protocol investigation.
- **[#7130 — Backspace deletes 2 chars in Kitty](https://github.com/earendil-works/pi/issues/7130)** *(9 comments)* — Kitty protocol release events aren't filtered, so a single press consumes two characters. Same editor-input bug family as #2733 and #8442.
- **[#7995 — openai-responses lacks anthropic cacheControlFormat support](https://github.com/earendil-works/pi/issues/7995)** *(7 comments)* — Filed on behalf of OpenRouter from an 870-trial benchmark: missing `cache_control` in the responses implementation causes a **2.5× measured cost penalty** for Claude via OpenRouter. Cost-sensitive users will feel this one.
- **[#7553 — Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** *(in-progress, 8 comments)* — Compaction unconditionally reuses the session's thinking level, making summarization budgets inseparable from normal turns on reasoning models.
- **[#8157 — Migrate grok-mermaid → lovely-mermaid](https://github.com/earendil-works/pi/issues/8157)** *(8 comments)* — The original mermaid renderer was a 1:1 automated port of Grok's build and inherited many corner cases; lovely-mermaid has had real parser effort invested.
- **[#8134 — Agent hangs after first tool call via plain-HTTP provider + forward proxy](https://github.com/earendil-works/pi/issues/8134)** *(4 comments)* — Regression since 0.84.0: `http://` baseUrl with `HTTP_PROXY` set stalls on the follow-up model call after a tool result.
- **[#8133 — Per-model compaction settings](https://github.com/earendil-works/pi/issues/8133)** *(3 👍)* — Proposes a `compaction.profiles` map keyed by model id, with global values as fallback. Pairs naturally with #7553.
- **[#8454 — OpenRouter reasoning-mandatory models rejected with HTTP 400](https://github.com/earendil-works/pi/issues/8454)** — The adapter explicitly sends `reasoning:{effort:"none"}` for background calls (e.g. session-title generation), which `stealth/ox-alpha` rejects outright. Affects any caller omitting reasoning on mandatory-thinking endpoints.
- **[#2644 — Long sessions crash with JavaScript heap OOM (SIGABRT)](https://github.com/earendil-works/pi/issues/2644)** *(closed)* — ~30+ minutes of heavy tool use exhausts the Node heap. Closed, but still a reference point for long-running-session reliability.

## 4. Key PR Progress

- **[#8428 — fix(coding-agent): re-pair tool results when rebuilding session context](https://github.com/earendil-works/pi/pull/8428)** *(closed)* — Fixes the session-corruption bug in #8166: resume, compaction, and branch navigation now correctly re-pair tool results with the issuing assistant message and drop orphans.
- **[#8459 — fix(tui): keep `/` and `-` inside fullscreen double-click word selection](https://github.com/earendil-works/pi/pull/8459)** *(closed)* — `Intl.Segmenter` was splitting paths on `/` and `-`; now a double-click selects the whole `extensions/starline/fixed-editor/compositor.ts` instead of one segment. Resolves #7746.
- **[#8422 — fix(ai): omit reasoning effort for xAI Grok Build](https://github.com/earendil-works/pi/pull/8422)** *(open)* — xAI rejects `grok-build-0.1` requests containing `reasoning.effort`; adds a Responses compatibility flag to suppress the field on both explicit and default paths.
- **[#8424 — fix(coding-agent): discard failed extension factory state](https://github.com/earendil-works/pi/pull/8424)** *(open)* — Staged provider defaults and event-bus listeners are now cleaned up if an extension factory throws, preventing half-initialized extensions from poisoning later calls.
- **[#8433 — feat(coding-agent): add `--exclude-extensions`](https://github.com/earendil-works/pi/pull/8433)** *(closed)* — Extension loading was all-or-nothing; this adds granular opt-out so users can keep auto-discovery minus specific named extensions.
- **[#8443 — feat(interactive-mode): share via Radius artifacts under experimental flag](https://github.com/earendil-works/pi/pull/8443)** *(closed)* — `/share` can now publish to Radius artifacts (with auth flow) instead of gist when the experimental flag is enabled.
- **[#4537 — feat: `/exit` alias for `/quit`](https://github.com/earendil-works/pi/pull/4537)** *(closed)* — The long-requested alias matching codex/claude/opencode conventions; ties into #6193.

*Note: [#8232 "DONT MERGE: dev branch"](https://github.com/earendil-works/pi/pull/8232) is open for CI/commenting purposes only.*

## 5. Hot Discussions

### Show and tell
- **[#8449 — Introducing ThinkRail: a web-based GUI for Pi](https://github.com/earendil-works/pi/discussions/8449)** — JetBrains-backed, Apache 2.0, minimalist aesthetics, aiming to make Pi approachable without losing capabilities. 3 👍 on day one.

### Ideas
- **[#8437 — Experimental fork: proactive "Context Curation" via autonomous tool use](https://github.com/earendil-works/pi/discussions/8437)** — Argues current compaction is backward-looking (summarizes work done) and proposes forward-looking curation: the agent autonomously curates context as it works.
- **[#8420 — Is Pi missing an official Web UI base? (from the DSH plugin ecosystem)](https://github.com/earendil-works/pi/discussions/8420)** — Observes that the DSH (DeepSeek Harness) community overwhelmingly writes UI-oriented plugins, and asks whether Pi's plugin ecosystem needs an official Web UI foundation rather than community-built ones. Bilingual EN/中文 post.

## 6. Feature Request Trends

- **Granular context management** — The strongest signal this cycle: per-model compaction profiles (#8133), dedicated thinking budgets for compaction (#7553), explicit manual full-span compaction (`/compact --all`, #8453), and higher-fidelity compaction prompts that preserve continuation state (#8452).
- **Provider & adapter compatibility** — Repeated asks for new providers (SiliconFlow #4742, Parasail #8450, Bedrock IMDS/AgentCore credentials #8455) plus fixes for provider-specific quirks: reasoning-mandatory endpoints (#8454), Gemini MINIMAL-thinking rejection (#8456), and Grok Build's rejected reasoning field (#8422).
- **Web UI / GUI direction** — ThinkRail (#8449), official Web UI base debate (#8420), and RPC-mode provider login (#8451) all point at making Pi more accessible beyond the terminal.
- **TUI ergonomics** — Runtime-configurable wheel scroll sensitivity (#8446, #8370), sticky/pinned block headers (#8447), per-block-type expanded/collapsed defaults (#8448), and path-aware double-click (#7746).
- **Input & skills UX** — Skills invocable mid-sentence like prompt templates (#8457) and `/exit` alias (#6193).

## 7. Developer Pain Points

- **Context reliability & cost** — Auto-compaction silently failing until API rejection (#6879), OOM crashes on long sessions (#2644), and a 2.5× cost penalty from missing Anthropic-style cache control (#7995) are the top recurring frustrations.
- **Terminal/keyboard protocol fragmentation** — Backspace/Delete regressions span Windows Terminal (#2733), Kitty (#7130), and herdr panes (#8442). KKP release-event filtering and legacy `0x7f` handling are recurring culprits.
- **Transport fragility** — Plain-HTTP providers stall behind forward proxies (#8134), and TLS/certificate errors aren't classified as retryable (#8458).
- **Provider reasoning quirks** — Reasoning-mandatory endpoints reject explicit `"none"` effort (#8454), Gemini 3.7 Flash rejects MINIMAL thinking in `/tree` summarization (#8456), and xAI Grok Build rejects the field entirely (#8422) — each requiring adapter-level special-casing.
- **Session & extension robustness** — Session corruption on rebuild paths (#8428/#8166), failed extension factories leaving stale listeners (#8424), and all-or-nothing extension loading (#8433) continue to erode trust in long-lived workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-08-22

### 1. Today's Highlights

The project is currently focused on security hardening and review-loop convergence: a new review feature explains why a review loop is not settling, and a fresh discussion issue asks whether CI should continue granting code execution as the invoking user. A new nightly release and successful SWE-bench / Terminal-Bench validation runs were published. Top user friction remains concentrated around Windows MCP reliability, IME input issues, and session lifecycle edge cases.

### 2. Releases

- [v0.21.14-nightly.20260821.9f2342d323](https://github.com/QwenLM/qwen-code/releases)  
  Includes:
  - `feat(review): tell the author why a review loop is not settling`
  - `fix(ci): stop the fallback c...` (description truncated in source)

- Benchmark validation runs:
  - `dsw-eas-tb-smoke-20260821-r1`: SWE-bench Verified smoke + Terminal-Bench smoke — **SUCCEEDED**
  - `dsw-eas-full-20260821-r1`: SWE-bench Verified (500) + Terminal-Bench 2.0 (89) — **SUCCEEDED**  
  Both reference `v0.21.15` and validate DSW Harbor execution and GitHub Release result writeback.

### 3. Hot Issues

1. [**#9556**](https://github.com/QwenLM/qwen-code/issues/9556) — `[security/ci-cd]` Decide whether the pipeline should keep granting code execution as the invoking user  
   Central security question raised by multiple unresolved review rounds. The review agent already runs as the invoking user in its own worktrees, so the issue asks whether that capability should remain. 7 comments.

2. [**#9699**](https://github.com/QwenLM/qwen-code/issues/9699) — `[P1/security/ci-cd]` Dependency CVE audit fails on every PR as of 2026-08-21  
   `npm audit --omit=dev --audit-level=high` reports 8 vulnerabilities and blocks all PRs regardless of author/branch. High CI availability impact. 2 comments.

3. [**#9693**](https://github.com/QwenLM/qwen-code/issues/9693) — `[P2/MCP/Windows]` Qwen Desktop reports MCP -32000 Connection closed at startup even when MCP is not activated  
   STDIO MCP servers fail on Windows with `MCP error -32000`; reproducible with official reference servers. 4 comments.

4. [**#9675**](https://github.com/QwenLM/qwen-code/issues/9675) — `[P2/MCP/Windows]` MCP server becomes disconnected/unavailable between sessions  
   MCP tools work initially but become unavailable after switching Qwen Desktop sessions, even though the server reports “connected.” 3 comments.

5. [**#8993**](https://github.com/QwenLM/qwen-code/issues/8993) — `[P2/extensions/Linux]` Public extension installs require Git 2.37, but Ubuntu 22.04 apt provides only 2.34.1  
   Still-supported LTS users cannot install public extensions from standard apt Git. Now addressed by PR #9690. 6 comments.

6. [**#5180**](https://github.com/QwenLM/qwen-code/issues/5180) — `[P2/long-context/subagent]` Main session acts as PM, but subagents crash mid-task  
   Long-running multi-agent sessions fail when subagents exit before completing delegated work. Important for agent-team reliability. 7 comments.

7. [**#5966**](https://github.com/QwenLM/qwen-code/issues/5966) — `[P2/UI]` Chinese input method completely invalid in 0.19.3 UI  
   IME failure in the UI forces users to type pinyin without compositing. Recurring UI/input pain point. 6 comments.

8. [**#9688**](https://github.com/QwenLM/qwen-code/issues/9688) — `[P2/session-management]` Archiving a live session can recreate the active transcript and leave an active+archived conflict  
   Archive succeeds but the active writer recreates the old transcript, causing duplicate session state in the Web UI. 2 comments.

9. [**#9686**](https://github.com/QwenLM/qwen-code/issues/9686) — `[P2/feature-request/daemon]` Restore each daemon session onto the model it last used  
   Daemon session load/resume currently uses the process-wide default model rather than the per-session model. Important for ACP/model-switching workflows. 2 comments.

10. [**#9639**](https://github.com/QwenLM/qwen-code/issues/9639) — `[P2/security]` Auto-mode permission classifier resilience: fail-open on unavailability  
   During provider-side instability, the permission classifier can fail open, reproducing a previously fixed regression. Needs deterministic short-circuits and configurable fallback. 3 comments.

### 4. Key PR Progress

1. [**#9678**](https://github.com/QwenLM/qwen-code/pull/9678) — `perf(review): give review agents their own subagent type`  
   Review dimension agents no longer inherit every session tool; they declare only the six tools actually used.

2. [**#9690**](https://github.com/QwenLM/qwen-code/pull/9690) — `fix(core): support public GitHub extensions with older Git`  
   Adds a secure fallback for anonymous public GitHub extension repos when system Git is older than 2.37, fixing #8993.

3. [**#9638**](https://github.com/QwenLM/qwen-code/pull/9638) — `fix(cli): deliver teammate messages at tool-round boundaries, not whole-task end`  
   Teammate-to-leader messages in Agent Team now arrive between tool-call rounds instead of waiting for the leader task to finish.

4. [**#9668**](https://github.com/QwenLM/qwen-code/pull/9668) — `fix(core): detect long verbatim repetition loops in content and reasoning streams`  
   Adds long-period repetition detection for repeated units longer than ~75 characters on both visible content and reasoning channels.

5. [**#9572**](https://github.com/QwenLM/qwen-code/pull/9572) — `fix(review): pin the verified git identity across the residue probe`  
   Hardens the review residue probe against a writable `.git` file by re-verifying git identity across all commands.

6. [**#9634**](https://github.com/QwenLM/qwen-code/pull/9634) — `feat(review): validate Aone inline anchors against the captured diff before posting`  
   Prevents malformed Aone `/review --comment` anchors by validating them against captured diff hunks before posting.

7. [**#9673**](https://github.com/QwenLM/qwen-code/pull/9673) — `fix(autofix): stop counting idle timeouts toward the timeout cap`  
   Idle watchdog kills no longer consume the cumulative timeout budget; only timeouts the agent can actually respond to count.

8. [**#9560**](https://github.com/QwenLM/qwen-code/pull/9560) — `fix(web-shell): stable pinned-section order and instant pin feedback`  
   Pinned sessions now keep stable ordering based on pin time, with immediate visual confirmation.

9. [**#9576**](https://github.com/QwenLM/qwen-code/pull/9576) — `feat(core): accept cross-session messages behind an inbound gate`  
   Qwen Code sessions can securely exchange messages over a UNIX domain socket behind an explicit policy gate.

10. [**#9602**](https://github.com/QwenLM/qwen-code/pull/9602) — `fix(core): clear tool display list before awaiting completion callback`  
   Removes stale tool UI state before completion callbacks resolve, with a regression test.

### 5. Hot Discussions

No discussion data was provided, so this section is omitted.

### 6. Feature Request Trends

- **Per-session model memory for daemon sessions**: users want `session/load` and `session/resume` to restore the model each session last used, rather than the global default (#9686).
- **More configurable permission controls**: extend Plan mode’s read-only command allowlist so custom CLIs are not prompted on every invocation (#9694).
- **Expanded detail mode by default**: request to start the terminal UI with thinking blocks/tool outputs expanded, replacing the retired `ui.compactMode` setting (#9670).
- **Aone Code parity with GitHub review flows**: self-PR detection (#9616) and incremental cache support for single-commit AGit-Flow CRs (#9618).
- **Session lifecycle recovery**: restore unanswered `ask_user_question` HITL prompts after daemon resume (#9664), and prevent active/archived transcript conflicts (#9688).

### 7. Developer Pain Points

- **MCP instability on Windows/Desktop**: repeated startup connection failures (#9693) and MCP tools disappearing between sessions (#9675).
- **IME/Chinese input issues**: broken Chinese input method in the UI (#5966) and low-contrast IME candidate boxes on Windows terminals (#9666).
- **Review loops that do not converge**: multiple issues track review rounds stuck on critical findings, with new tooling trying to explain and resolve the non-settling loops (#9556, #9526).
- **CI friction blocking all PRs**: the dependency CVE audit now fails on every run (#9699), and CI runner isolation remains an open security concern (#9089).
- **Session/transcript edge cases**: archiving a live session can duplicate transcripts (#9688), and transport-continuation recovery can resume mid-sentence (#8094).
- **Toolchain compatibility gaps**: Ubuntu 22.04 users cannot install public extensions because of Git 2.37 requirements (#8993).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-22

## Today’s Highlights
No new releases were published in the last 24 hours. The main story is a coordinated push around **supervised operation**: M-Maciej filed several enhancement issues for lifecycle events, a control socket, and `/relaunch`, and consolidated the work into PR #5535. At the same time, the TUI refactor continues with command-shape adoption (#5525) and tool-loop extraction (#5523), while maintainers are addressing stale shell completions and sub-agent reliability.

## Releases
None in the last 24 hours.

## Hot Issues

- [Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316) – **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**  
  The tracking issue for the TUI crate decomposition effort. With 11 comments, it is the coordination point for the ongoing FEAT refactors, including command shapes and tool-call extraction.

- [Issue #5526](https://github.com/Hmbown/CodeWhale/issues/5526) – **Deprecated shell completion**  
  PowerShell users are seeing generated completion scripts that still invoke the old `codewhale-tui` binary. The repo does not clearly document where to fix it. Addressed by PR #5530.

- [Issue #5541](https://github.com/Hmbown/CodeWhale/issues/5541) – **Feature: DeepSeek-V4-Flash-Vision-Exp**  
  Request to add DeepSeek’s first multimodal model to CodeWhale. The author flags vision support as high-impact for website and visual tasks.

- [Issue #5534](https://github.com/Hmbown/CodeWhale/issues/5534) – **Goal-continuation cadence is bypassed on the within-turn dispatch path**  
  `continuation_delay_seconds` is ignored in resumed/CLI sessions, so goal continuation passes fire instantly. The fix is included in the supervised-operation PR #5535.

- [Issue #5533](https://github.com/Hmbown/CodeWhale/issues/5533) – **Feature: the control surface for supervised operation**  
  Proposes a per-session control socket for message/interrupt/relaunch/status, plus `RuntimeBackendKind::External`, so external supervisors can manage CodeWhale sessions programmatically.

- [Issue #5532](https://github.com/Hmbown/CodeWhale/issues/5532) – **Feature: /relaunch — switch a running session to the current binary**  
  After `/update`, users must manually restart. This feature would let a running session relaunch itself with the newly installed binary without leaving the TUI.

- [Issue #5531](https://github.com/Hmbown/CodeWhale/issues/5531) – **Feature: local lifecycle event outbox (JSONL + webhook)**  
  Adds `turn_stalled` / `turn_failed` lifecycle events for long-running, unattended sessions. Aimed at supervisors like `herdr` and CI-driven agent runs.

- [Issue #4069](https://github.com/Hmbown/CodeWhale/issues/4069) – **Indexing privacy controls (.codewhaleignore)**  
  CodeWhale lacks a first-class ignore file. Operators cannot exclude secrets, vendor trees, or local artifacts from agent discovery. Long-running enhancement open since July.

- [Issue #5529](https://github.com/Hmbown/CodeWhale/issues/5529) – **Sub-agents cannot reliably execute**  
  Wall-time deaths lose uncommitted work, provider-route failures block dispatch, and shell tooling requires workarounds. Filed by Hmbown; directly impacts Fleet’s core value proposition.

- [Issue #5528](https://github.com/Hmbown/CodeWhale/issues/5528) – **Workflow runs fail silently: dispatch/schema errors never surface in the TUI**  
  Two workflow runs failed at script-evaluation time with no toast, status line, or workflow panel entry — operators only see a workflow that appears to be “working.”

## Key PR Progress

- [PR #5535](https://github.com/Hmbown/CodeWhale/pull/5535) – **Supervised operation stack**  
  Combines lifecycle event outbox, `/relaunch`, per-session control socket, and the goal-continuation quiet-period fix. This is the main integration point for the supervised-operation feature set.

- [PR #5530](https://github.com/Hmbown/CodeWhale/pull/5530) – **Fix: route legacy completions through public binary**  
  Fixes #5526. Legacy `codewhale completions <shell>` now uses the canonical generator and emits scripts with the public `codewhale` command name instead of `codewhale-tui`.

- [PR #5525](https://github.com/Hmbown/CodeWhale/pull/5525) – **Refactor: adopt command shapes in utility group (FEAT-018)**  
  Converts the TUI utility command group to the external command shapes introduced by FEAT-014/FEAT-015. Registers `/accept` and related commands without physically moving files.

- [PR #5523](https://github.com/Hmbown/CodeWhale/pull/5523) – **Refactor: extract tool call stages from turn loop**  
  Splits tool-call handling into `plan_tool_calls`, `execute_planned_tools`, and `process_tool_results`, preserving cancellation and control flow.

- [PR #5524](https://github.com/Hmbown/CodeWhale/pull/5524) – **Feat: multi-file `read_lints` operation**  
  Extends the model-visible `lsp` tool to read lints for multiple workspace-relative files, reusing the existing `LspManager` and transport pool.

- [PR #5390](https://github.com/Hmbown/CodeWhale/pull/5390) – **Deps: bump rmcp from 2.2.0 to 3.1.2**  
  Updates the MCP Rust SDK. This is a significant version jump and deserves review for breaking changes in MCP tool/transport behavior.

- [PR #5538](https://github.com/Hmbown/CodeWhale/pull/5538) – **Deps: bump jsonschema from 0.46.10 to 0.49.9**  
  Brings in schema-validation improvements and bug fixes. Relevant for workflow schema evaluation, especially given #5528.

- [PR #5539](https://github.com/Hmbown/CodeWhale/pull/5539) – **Deps: bump rio-vt from 0.5.19 to 0.5.25**  
  Routine terminal-emulator crate update with upstream fixes.

- [PR #5540](https://github.com/Hmbown/CodeWhale/pull/5540) – **Deps: bump similar from 3.1.2 to 3.2.0**  
  Adds structured diff capabilities. Low-risk dependency update.

- [PR #5537](https://github.com/Hmbown/CodeWhale/pull/5537) – **CI: bump docker/setup-buildx-action from 4.2.0 to 4.3.0**  
  Routine CI dependency update for Docker Buildx setup.

## Feature Request Trends

- **Supervised / unattended operation**: Multiple requests around external supervision — lifecycle event outbox (#5531), per-session control socket (#5533), `/relaunch` (#5532), and the combined implementation in #5535.
- **TUI modularization and command architecture**: EPIC-005 (#5316) continues to drive PRs that extract command shapes (#5525) and tool-call stages (#5523), making the TUI more maintainable and testable.
- **Model support expansion**: Users want newer model families like DeepSeek-V4-Flash-Vision-Exp (#5541) available for vision tasks.
- **Privacy and indexing controls**: The `.codewhaleignore` request (#4069) reflects demand for first-class exclusion of secrets, vendor trees, and local artifacts.
- **Reliability and observability**: Recurring asks for visible workflow failures (#5528), reliable sub-agent execution (#5529), and correct goal-continuation timing (#5534).

## Developer Pain Points

- **Stale shell completions**: Generated scripts still reference the old `codewhale-tui` binary, confusing PowerShell users and breaking tab completion.
- **Unreliable sub-agent execution**: Wall-time deaths lose uncommitted work, provider-route failures can block dispatch, and shell tooling needs workarounds.
- **Silent workflow failures**: Dispatch/schema errors produce no visible feedback in the TUI, making it hard to know whether a workflow is actually progressing.
- **Hard to supervise long-lived sessions**: Users running CodeWhale under terminal multiplexers, CI, or automation need lifecycle events, control sockets, and self-relaunch to safely run unattended.
- **No ignore-file support**: Operators cannot prevent secrets or vendor directories from being indexed during search and context assembly.
- **Missing multimodal model support**: Vision-capable models are not yet assignable in CodeWhale, limiting website and visual-task workflows.

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*