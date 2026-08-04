# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 01:22 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date: 2026-08-04**

## 1. Ecosystem Overview

The AI CLI tool landscape shows eight actively developed projects and one dormant (Grok Build), with the center of gravity shifting from raw model access toward session lifecycle management, multi-agent orchestration, and enterprise trust controls. The two largest ecosystems — Claude Code and OpenAI Codex — are converging on the same pain points: cross-session coordination, quota transparency, and platform-specific network reliability. A middle tier (Gemini CLI, Qwen Code, OpenCode, Pi, DeepSeek TUI) is investing heavily in agent-runtime robustness, with recurring issues of false-success reporting, hung sessions, and Windows/WSL breakage. Notably, persistent memory and mid-execution control are demanded across nearly every community, signaling the next competitive battleground.

## 2. Activity Comparison

*Hot Issues = curated high-signal issues tracked in each digest; total open issue counts are larger.*

| Tool | Hot Issues | Key PRs | Releases (24h) | Top Engagement Signal |
|---|---|---|---|---|
| Claude Code | 10 | 2 (docs) | v2.1.221 | #13585 — 115 👍 (quota visibility) |
| OpenAI Codex | 10 | 10 | 2 Rust alphas | #20214 — 88 comments (Windows freeze) |
| Gemini CLI | 10 | 10 (1 closed) | 1 nightly | #22323 — 12 comments (false success) |
| GitHub Copilot CLI | 10 | 0 | 2 (v1.0.78, v1.0.78-3) | #3282/#3709 — 20 👍 each (BYOK) |
| Kimi Code CLI | 3 | 8 (2 merged) | 0 | #1283 — 15 comments (memory system) |
| OpenCode | 10 | 10 | v1.18.12 | #27167 — 123 👍 (session goals) |
| Pi | 10 | 10 | 0 | #6187 — 20 comments (WSL login hang) |
| Qwen Code | 10 | 10 | v0.21.4 | #8102 — 13 comments (trusted runtime) |
| DeepSeek TUI | 10 | 10 (0 merged, release train) | 0 (v0.9.4 train, 77 commits ahead) | #3192/#3205 — 13 comments each |
| Grok Build | 0 | 0 | 0 | — |

**Read:** Claude Code and Copilot CLI are in stable release windows (docs-only PRs / release-focused triage). OpenAI Codex has the most aggressive engineering cadence (10 PRs, 2 alphas, no changelogs). DeepSeek and Gemini show high PR throughput but low community reaction volume relative to their output, suggesting maintainer-driven rather than community-driven momentum.

## 3. Shared Feature Directions

**Cross-session orchestration & persistent memory** — the most widely demanded capability across the ecosystem:
- Claude Code: inter-session communication for parallel workflows (#24798, 61 comments), cross-session coordination on shared working trees (#76727)
- Kimi Code CLI: AI-managed plus manual persistent memory (#1283, open since February)
- OpenCode: native session goals via `/goal` (#27167, 123 👍) and persistent session memory (#16077)
- DeepSeek TUI: cross-session memory (#2492) and a compaction survival contract (#4394)

**Quota & usage transparency** — cost trust is eroding:
- Claude Code: CLI-visible quota/rate info (#13585, highest-reacted issue of the day at 115 👍)
- OpenAI Codex: weekly limit draining in one session (#33685), account-wide usage attribution (#28985)
- Qwen Code: microcompaction invalidating prompt cache on long runs, raising cost/latency (#8452)

**Windows/WSL reliability** — the weak spot across nearly every tool:
- OpenAI Codex: freezes (#20214), OneDrive-backed disconnects (#35420), Git misdetection (#35119), sandbox path mismatches (#29639)
- Pi: WSL login hangs (#6187), Windows absolute path mishandling (#7064), maintainer-led Windows survey (#7547)
- Qwen Code: desktop sessions silently deleted after restart (#8400), ConEmu flickering (#8385)
- Kimi: Windows stream hangs (#2582), GBK console codec crashes (#2577)
- DeepSeek: PowerShell/cmd shell assumptions (#1754), Chinese IME compatibility (#2323)

**Mid-execution steering & interruption** — users want to redirect agents without losing context:
- Claude Code: priority message channel for real-time steering (#30492, 60 👍)
- DeepSeek TUI: `/stop` command plus runtime STOP-word interception (#4959)
- Qwen Code: prompt restoration on Ctrl+C (#8316), abort classification (#8398)

**Agent trust & deterministic execution** — an emerging enterprise-grade concern:
- Gemini CLI: subagents report GOAL success after hitting MAX_TURNS with no work done (#22323)
- Qwen Code: deterministic tool-execution boundaries for a trustworthy runtime (#8102), external tool guard provider (PR #8125)
- DeepSeek TUI: verifier receipts and evidence exposed via runtime API (PR #5132)
- OpenAI Codex: `gpt-5.6-luna` advertised but rejected by MultiAgent V2 `spawn_agent` (#35097, 37 👍)

**MCP standardization & lifecycle** — the integration surface is maturing:
- OpenAI Codex: MCP client conformance regression gates (PR #36810), per-surface tool exposure (PR #36781)
- DeepSeek TUI: runtime MCP server lifecycle over HTTP (PR #5130); missing OAuth2.1 support (#1409)
- Gemini CLI: OAuth token refresh fix for dynamically registered servers (PR #28481)
- Copilot CLI: MCP registry policy fetch returning 403 in Actions CI (#4346)
- Claude Code: Gmail MCP URL tracking/privacy bug (#66010)

**Multi-model / BYOK flexibility**:
- Copilot CLI: multiple BYOK models switchable in-session (#3282, #3709)
- Qwen Code: first-class Kimi and Xiaomi MiMo provider presets (PR #8368)
- DeepSeek TUI: OpenCode Go/Zen access to DeepSeek-V4 (#1481)
- Pi: generic sampling parameter passthrough for llama.cpp/vLLM engines (PR #7568)

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Distinctive Technical Approach |
|---|---|---|---|
| **Claude Code** | IDE integration, connectors, hooks/plugins | Enterprise teams on Anthropic stack | VSCode Focus view, sandbox credential masking, mature plugin/skill system; docs-stable release |
| **OpenAI Codex** | Multi-agent runtime, cloud/app surfaces, session architecture | OpenAI platform users, cloud-first teams | Rust rewrite, SQLite-backed session state, MCP conformance harness, dual-WebSocket transport |
| **Gemini CLI** | Agent framework (subagents, browser agent), Auto Memory | Gemini API / Code Assist users | Nightly releases, quota-fallback model switching, Agent Registry |
| **Copilot CLI** | GitHub-centric workflow, enterprise policy | GitHub-centric enterprises | Stable v1.x, ACP mode (Zed), skills, managed settings — policy integration is the moat |
| **Kimi Code CLI** | Moonshot API ergonomics, Web UI, ACP | Kimi/Moonshot API users | Fix-driven; hooks via proper fire-and-forget, prompt-cache key scoping |
| **OpenCode** | TUI/desktop UX, plugins, session lifecycle | OSS devs wanting provider-agnostic agent | Request-scoped `chat.model` plugin hook, localhost browser preview, strong feature-demand culture |
| **Pi** | SDK/library, JSON streaming, server backends | Developers building on coding-agent SDKs | Harness v2, PiServer JSONL persistence, delta-only streaming, linear compaction |
| **Qwen Code** | Web Shell desktop app, ACP serve, provider breadth | Qwen/DashScope users + enterprise security | External tool guard provider, Web Shell desktop lifecycle, prompt-cache preservation |
| **DeepSeek TUI** | Fleet, runtime API, autonomous execution | DeepSeek API users, Zed/ACP ecosystem | Full runtime HTTP API (goals, memory, skills, MCP), Rust; addressing 464 dead-code attributes pre-stabilization |

**Key contrasts:** Claude Code differentiates on IDE/enterprise integration maturity; OpenAI Codex on architectural investment in multi-agent and session state; Copilot CLI on GitHub/enterprise policy depth; Pi on being an SDK rather than an end-user app; Qwen Code and DeepSeek TUI are both racing toward production-ready desktop/ACP experiences but from different angles (Web Shell maturity vs. runtime API surface).

## 5. Community Momentum & Maturity

- **Claude Code** — most mature ecosystem. Highest raw engagement (top issues averaging 40–60 comments; quota issue at 115 👍). Low PR churn reflects a stable release window, not stagnation.
- **OpenAI Codex** — fastest engineering iteration. 10 PRs and 2 alphas in 24h, with the highest-signal bug thread (88 comments) and roughly 250+ reactions across top issues. The Rust/SQLite migration signals architectural commitment.
- **OpenCode** — strongest feature-demand-per-capita. Two issues exceed 115 👍 (#27167, #1168) with regular releases and 10 PRs — notable momentum relative to community size.
- **Gemini CLI** — steady nightly cadence with maintainers shipping targeted fixes for P1 bugs (subagent hangs, false-success reporting) within the same cycle. Community is engaged but smaller.
- **Copilot CLI** — mature and release-stable, but the issue backlog shows enterprise policy integration (managed settings, MCP registry) as a fragile, high-pain area. Zero PR activity indicates a deliberate release window.
- **Qwen Code** — rapidly maturing Web Shell with 10 PRs including a security guard provider. Community is small but enterprise-security interest is growing (#8102).
- **Pi** — SDK-focused momentum (10 PRs: harness v2, server session backend, linear streaming). Maintainer actively surveying Windows users (#7547) — responsive but niche community.
- **DeepSeek TUI** — highest PR output relative to community engagement; 10 PRs on a release train 77 commits ahead of main. The dead-code sweep issue (#4785) suggests pre-stabilization churn.
- **Kimi Code CLI** — smallest tracked community (3 hot issues) with steady contributor-driven PRs; one very active external contributor (ayaangazali) is doing most of the heavy lifting.
- **Grok Build** — dormant; no signal to evaluate.

## 6. Trend Signals

1. **Persistent session memory is the consensus gap.** Kimi, OpenCode, DeepSeek, and Claude Code communities all independently request cross-session memory/orchestration. Developers evaluating tools should treat conversation lifecycle (resume, fork, compaction survival) as a core selection criterion, not a nice-to-have.
2. **Cost and quota transparency is a trust issue, not a UX nicety.** 115 👍 on Claude's quota visibility request, Codex weekly-limit confusion, and Qwen's prompt-cache churn all point to users being burned by opaque metering. Expect usage instrumentation to become a differentiator.
3. **Windows/WSL remains the least reliable platform across the board.** Codex, Pi, Qwen, Kimi, and DeepSeek all carry Windows/WSL-specific blockers. Teams standardizing on Windows for AI-assisted development should verify their tool's WSL path handling, process cleanup, and desktop stability before committing.
4. **Trustworthy agent execution is emerging as the next battleground.** Gemini's false-success reports, Qwen's proposed deterministic tool-execution boundary, and DeepSeek's verifier-receipt endpoints show a shift from "can the agent do it" to "can we audit and constrain what it did." Security-conscious adopters should watch these runtime-guard features closely.
5. **MCP is becoming a compliance surface.** Conformance harnesses (Codex), OAuth refresh fixes (Gemini), policy-fetch failures (Copilot), and lifecycle APIs (DeepSeek) indicate the ecosystem is standardizing fast. Favor tools with investment in MCP conformance testing and first-class server lifecycle management.
6. **Multi-model BYOK is table stakes.** Copilot's model-picker rigidity is the loudest complaint, but Qwen, Pi, and DeepSeek all ship provider-expansion work. Lock-in resistance via BYOK/local-provider support is now a baseline expectation for new adopters.

**Bottom line for decision-makers:** Claude Code and OpenAI Codex lead on ecosystem scale and engineering investment but share unresolved reliability and transparency gaps. OpenCode and Qwen Code offer the most responsive feature momentum relative to community size. Pi is the strongest choice for teams building on an agent SDK rather than adopting a CLI. Windows/WSL users should validate their specific workflow before standardizing on any tool, and enterprise adopters should prioritize the emerging trust/audit controls in Qwen, DeepSeek, and Codex.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights  
*Data snapshot: 2026-08-04 · github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Most-discussed PRs in the official `anthropics/skills` repo, ordered by community comment activity. All listed PRs are currently **open**.

| # | Skill / PR | Functionality & Discussion | Status |
|---|---|---|---|
| 1 | **[#1298 – fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** | Fixes the broken evaluation pipeline in `run_eval.py`, `run_loop.py`, and `improve_description.py`. The core issue: skill descriptions were being scored against noise because the eval artifact was never installed as a real skill. Also addresses Windows stream reading, trigger detection, and parallel workers. This is the hub of the long-running `recall=0%` saga (#556, #1169). | Open |
| 2 | **[#514 – Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | A typographic quality-control skill for AI-generated documents: prevents orphan word wraps, stranded widow headings, and numbering misalignment. Discussion centers on its broad applicability to every document Claude produces. | Open |
| 3 | **[#538 – fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)** | Fixes 8 broken references in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Critical for case-sensitive filesystems and a good example of community-driven documentation rigor. | Open |
| 4 | **[#486 – Add ODT skill](https://github.com/anthropics/skills/pull/486)** | New skill for OpenDocument formats: create, fill, read, and convert `.odt`/`.ods` files, plus ODT-to-HTML parsing. Triggers on LibreOffice, OpenDocument, ISO-standard document requests. | Open |
| 5 | **[#210 – Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)** | Large revision of the `frontend-design` skill to make instructions concrete, actionable, and executable within a single conversation. Community discussion focuses on reducing vague guidance in official skills. | Open |
| 6 | **[#83 – Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Two meta-skills for the example marketplace: one evaluates skill quality across structure, documentation, and examples; the other audits skill security. Directly relevant to the community’s trust concerns. | Open |
| 7 | **[#541 – fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** | Fixes document corruption when the DOCX skill adds tracked changes to files that already contain bookmarks. Explains the OOXML shared `w:id` namespace issue and proposes safer ID generation. | Open |
| 8 | **[#539 – fix(skill-creator): warn on unquoted YAML descriptions](https://github.com/anthropics/skills/pull/539)** | Adds pre-parse validation in `quick_validate.py` to catch unquoted `description` fields containing `:`, preventing silent truncation or split-key failures in YAML frontmatter. | Open |

---

## 2. Community Demand Trends

The issues list reveals where the community is pushing hardest:

- **Skill reliability and tooling**  
  The biggest cluster is around `skill-creator` itself: broken evaluation (#556, #1169), Windows incompatibility (#1061), and outdated guidance (#202). Users want the skill-creation pipeline to be trustworthy before they invest in new domain skills.

- **Security and trust boundaries**  
  Issue [#492](https://github.com/anthropics/skills/issues/492) is the most-commented in the repo: community skills distributed under the `anthropic/` namespace create a permission/trust boundary vulnerability. Security is now a first-class concern for the skills ecosystem.

- **Enterprise sharing and governance**  
  [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing in Claude.ai. There is also strong interest in agent governance, audit trails, and policy enforcement as a skill direction (#412).

- **Memory and persistent state**  
  A concrete new-skill proposal, [#1329](https://github.com/anthropics/skills/issues/1329), asks for a `compact-memory` skill using symbolic notation to reduce a long-running agent’s context overhead.

- **Context-window efficiency**  
  [#1487](https://github.com/anthropics/skills/issues/1487) reports that the bundled `claude-api` skill eagerly injects ~156k tokens. Community expectation is shifting toward skills that are lean and context-aware.

- **Interoperability**  
  Older but still open: exposing skills as MCP tools (#16) and using skills with AWS Bedrock (#29).

---

## 3. High-Potential Pending Skills

These open PRs are actively commented and may land soon:

- **[#1479 – Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)**  
  Addresses the lifecycle problem of planning artifacts: plans accumulate with no cleanup or expiration. New skill proposal with recent discussion (updated July 27).

- **[#1302 – Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**  
  A self-contained color expertise skill covering naming systems, color spaces, and “what to use when” decisions. Updated July 21.

- **[#525 – Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**  
  New skill wrapping `pyxel-mcp` for pixel-art/8-bit Python game development: write → run_and_capture → inspect → iterate. Updated July 15.

- **[#1367 – Add self-audit skill (quality gate)](https://github.com/anthropics/skills/pull/1367)**  
  Universal skill that performs mechanical file verification first, then a four-dimension reasoning audit before delivery. Updated July 2.

- **[#1261 – fix(skill-creator): isolate trigger-eval command files](https://github.com/anthropics/skills/pull/1261)**  
  Fixes the side effect where eval writes synthetic command files into the user’s live `.claude/commands/` directory, causing interference with real sessions. Updated July 8.

- **[#1323 – fix(skill-creator): run_eval trigger detection](https://github.com/anthropics/skills/pull/1323)**  
  Another repair for the `recall=0%` problem: trigger detection misses real skill names and bails on the first non-Skill tool. Updated June 25.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not for new domain knowledge, but for **reliable, secure, and shareable skill infrastructure** — especially fixing `skill-creator`’s broken evaluation loop, enforcing official namespace trust, and enabling controlled distribution inside organizations.

---

# Claude Code Community Digest — 2026-08-04

## Today's Highlights
Release v2.1.221 adds a VSCode Focus view for collapsing tool activity and introduces Linux sandbox credential masking. Community attention remains concentrated on multi-session orchestration, quota visibility, and real-time steering, while support load is dominated by macOS network errors and a GitHub connector regression.

## Releases
- [v2.1.221](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)
  - **VSCode:** Added Focus view — a chat-menu toggle that hides tool activity behind an expandable per-turn summary with a live running-tool indicator. Toggle with `Ctrl+Alt+F` or the "Claude Code: Toggle Focus view" command.
  - Added `mode: "mask"` for sandbox credential files on Linux.

## Hot Issues
1. [Inter-session communication for multi-Claude workflows (#24798)](https://github.com/anthropics/claude-code/issues/24798)  
   61 comments, 20 👍. Users want direct orchestration between parallel Claude Code sessions so dependent, higher-level workflows can be sequenced. One of the most active feature discussions and a strong signal for first-class multi-session coordination.

2. [Persistent ECONNRESET Errors on macOS (#5674)](https://github.com/anthropics/claude-code/issues/5674)  
   52 comments, 48 👍. Long-running macOS-only network failure causing connection errors and task disconnects. Community notes it does not reproduce on Windows or Linux, pointing to platform-specific networking instability.

3. [GitHub connector links repositories but cannot access content (#71542)](https://github.com/anthropics/claude-code/issues/71542)  
   48 comments, 42 👍. Account-wide regression: the connector authenticates, but Claude cannot access content from any repository, public or private. Flagged as recent and highly blocking for GitHub-centric development workflows.

4. [Real-time steering: priority message channel for redirecting Claude mid-execution (#30492)](https://github.com/anthropics/claude-code/issues/30492)  
   31 comments, 60 👍. Requests a way to interrupt and redirect Claude during complex multi-step pipelines without losing context. Strong demand for richer interactive control than the current edit/cancel loop.

5. [Add Quota Information Access to Claude Code CLI (#13585)](https://github.com/anthropics/claude-code/issues/13585)  
   24 comments, 115 👍. Highest-reacted issue in the batch. Developers want CLI-visible quota/rate information to avoid unexpected throttling and plan usage more effectively.

6. [Claude Desktop App Crashing After the Latest Update on Windows (#80468)](https://github.com/anthropics/claude-code/issues/80468)  
   12 comments. A newer Windows stability regression where the desktop app crashes after updating. High-impact for users relying on the desktop wrapper around Claude Code.

7. [Unexpected token usage spike and continued consumption while inactive (#65687)](https://github.com/anthropics/claude-code/issues/65687)  
   10 comments. Reports of token consumption continuing while Claude Code is idle. Raises cost-accounting and trust concerns for metered usage.

8. [Cross-session coordination for independently-launched Claude Code sessions (#76727)](https://github.com/anthropics/claude-code/issues/76727)  
   9 comments. Detailed write-up from a heavy user: multiple sessions sharing one working tree have no first-party coordination story, and the PreToolUse `deny` hook workaround has silent holes. Complements #24798.

9. [--continue cannot find sessions created by -p (#82536)](https://github.com/anthropics/claude-code/issues/82536)  
   5 comments. Interactive resume does not discover non-interactive `-p` sessions, breaking mixed interactive/scripted workflows.

10. [GMail MCP rewrites URL with Google tracking URLs (#66010)](https://github.com/anthropics/claude-code/issues/66010)  
    5 comments, 4 👍. Privacy-sensitive MCP bug where the Gmail connector rewrites URLs with Google tracking redirects. Relevant to trust in third-party MCP servers.

## Key PR Progress
Only two PRs were updated in the last 24 hours; both are documentation-focused.

- [docs(plugin-dev): document MessageDisplay streaming semantics (#83374)](https://github.com/anthropics/claude-code/pull/83374)  
  Adds `MessageDisplay` to the bundled Hook Development skill, covering its trigger description, event guidance, and quick-reference table.

- [docs(plugin-dev): document skipLfs marketplace sources (#77977)](https://github.com/anthropics/claude-code/pull/77977)  
  Documents the `skipLfs` option for `github` and `git` marketplace sources and adds examples for GitHub shorthand and generic Git URLs. References #63035.

## Feature Request Trends
- **Cross-session orchestration:** Multiple issues ask for first-party coordination between parallel Claude Code sessions working on the same repo (#24798, #76727).
- **Mid-execution steering:** A priority message channel to redirect Claude while it is running long workflows (#30492).
- **Cost and quota transparency:** CLI-visible quota information (#13585), read-only usage scope for `claude setup-token` (#81015), and accurate Bedrock spend-meter pricing (#83690).
- **Expanded access controls:** Per-plan enablement of Microsoft 365 write tools (#81317) and restoring access to older model variants (#83683).
- **Network/egress policy:** RemoteTrigger egress blocking legitimate image domains such as Openverse and Wikimedia (#82090).

## Developer Pain Points
- **macOS/Desktop network failures:** Recurring ECONNRESET issues in both the standalone CLI and Desktop in-app Claude Code (#5674, #77733).
- **GitHub connector reliability:** Authentication succeeds but content reads and write operations fail with "403 Resource not accessible" (#71542, #80874).
- **Silent hook/agent failures:** Stop hook verdicts are discarded without logging (#83687), PreToolUse hooks can be inert with no diagnostic (#82323), and subagents hang on Windows when tmux pane creation fails (#83366).
- **Session and token lifecycle bugs:** `--continue` misses `-p` sessions (#82536), mobile attach breaks after token rotation (#83677), and Remote Control retains stale bridge handles (#83378).
- **Cost anomalies:** Token consumption while inactive (#65687) and per-model rate miscalculations (#83690) continue to undermine trust in usage accounting.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

## Today's Highlights

Two new Rust alpha releases (`v0.147.0-alpha.6` and `v0.147.0-alpha.1.2`) landed with no published changelog details. Community attention remains concentrated on Windows/WSL reliability — the Codex App freeze/stutter report has crossed 88 comments — and on a high-👍 cluster of bugs where `gpt-5.6-luna` is advertised as available but rejected by MultiAgent V2 `spawn_agent`. On the engineering side, the PR pipeline is heavily invested in MCP conformance testing, SQLite-backed session state, and subprocess lifecycle cleanup.

## Releases

- [rust-v0.147.0-alpha.6](https://github.com/openai/codex/releases) — 0.147.0-alpha.6
- [rust-v0.147.0-alpha.1.2](https://github.com/openai/codex/releases) — 0.147.0-alpha.1.2

No changelog details were published for either release in the last 24 hours.

## Hot Issues

1. **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)** — The top community bug this cycle: 88 comments, 78 👍. Users report UI jank on Ryzen 5 / 32 GB systems, making this the highest-signal Windows performance report.

2. **[#35420 — Stream disconnects with OneDrive-backed workspaces](https://github.com/openai/codex/issues/35420)** — Work/Codex requests fail with `stream disconnected before completion` when the selected Windows workspace is OneDrive-backed and OneDrive is degraded. 30 comments.

3. **[#35097 — `gpt-5.6-luna` marked as MultiAgent V1, so V2 `spawn_agent` rejects it](https://github.com/openai/codex/issues/35097)** — 37 👍. Related reports in [#34700](https://github.com/openai/codex/issues/34700) (24 👍) and [#34964](https://github.com/openai/codex/issues/34964) (11 👍) show a clear pattern: the model selector advertises a model the subagent API refuses.

4. **[#33685 — Weekly limit drains like the old 5-hour limit](https://github.com/openai/codex/issues/33685)** — 25 comments, 10 👍. Users report the weekly quota being consumed within a single normal GPT-5.5 High session, calling limit accounting into question.

5. **[#35119 — Valid WSL repositories marked as non-Git](https://github.com/openai/codex/issues/35119)** — App build `26.721.3404` reports "Git is unavailable" for valid WSL2/ext4 repos. 14 comments, 13 👍; a regression from the previous working build.

6. **[#29639 — Browser Use Node REPL fails in Windows Desktop + WSL](https://github.com/openai/codex/issues/29639)** — The auto-generated `node_repl` MCP server sends Linux/WSL `sandboxCwd` values to a Windows `node_repl.exe`. 14 comments; another Windows/WSL path-mapping failure.

7. **[#12029 — Ability to use more than one account](https://github.com/openai/codex/issues/12029)** — The second-most-upvoted open request at 62 👍. Users need personal + corporate accounts on one machine, with separate org policies and billing.

8. **[#19504 — Full RTL text direction support for Arabic & Hebrew](https://github.com/openai/codex/issues/19504)** — 24 comments, 19 👍. Arabic text renders incorrectly in alignment and punctuation placement; flagged as a Papercuts candidate.

9. **[#15477 — Codex Cloud auto review: silent fail + quota mismatch](https://github.com/openai/codex/issues/15477)** — GitHub auto code review silently fails while the dashboard shows available quota; three bugs in one report spanning stale credentials and rate-limit state.

10. **[#28080 — Desktop thread tools intermittently lose handlers](https://github.com/openai/codex/issues/28080)** — `No handler registered` errors appear mid-session in the Windows Desktop app, pointing at instability in the app-server tool dispatch layer. 12 comments.

## Key PR Progress

1. **[#36812 — Dual-WebSocket transport for code mode](https://github.com/openai/codex/pull/36812)** — Negotiates a second token-scoped WebSocket so large nested-tool callbacks can no longer block unrelated session operations on the same connection.

2. **[#36810 — MCP client conformance regression gates](https://github.com/openai/codex/pull/36810)** — Adds a harness running the Codex executable against the official MCP conformance suite across protocol versions, HTTP/stdio transports, and OAuth scenarios.

3. **[#36809 — Prefer the state database for `exec resume --last`](https://github.com/openai/codex/pull/36809)** — Successful resume lookups no longer need to audit every rollout file; the SQLite state DB is queried first.

4. **[#36808 — SQLite-first session archive commands](https://github.com/openai/codex/pull/36808)** — Resolves `archive`/`delete`/`unarchive` targets from SQLite before falling back to rollout scanning and repair.

5. **[#36800 — Avoid reinjecting permissions after command approvals](https://github.com/openai/codex/pull/36800)** — Tracks approved command prefixes separately so only newly approved prefixes are emitted instead of appending the full permissions block.

6. **[#36793 — Terminate timed-out Git process trees](https://github.com/openai/codex/pull/36793)** — Runs Git metadata commands in a Unix process group / Windows Job Object so timeout cleanup kills helper processes too.

7. **[#36796 — Agent Plugins MCP config parsing](https://github.com/openai/codex/pull/36796)** — Translates Agent Plugins v1 `mcp.json` into Codex MCP server configuration, including `PLUGIN_ROOT`/`PLUGIN_DATA` expansion and stdio/streamable-HTTP normalization.

8. **[#36781 — Per-surface MCP tool exposure controls](https://github.com/openai/codex/pull/36781)** — Adds `omit_tools_from` so servers can opt out of direct exposure, tool search, or Code Mode independently.

9. **[#36792 — Gate plugin usage instructions by model capability](https://github.com/openai/codex/pull/36792)** — Adds `include_plugin_usage_instructions` to model metadata (default false), enabled for interactive model presets.

10. **[#36815 — Identify agents by name in token budget context](https://github.com/openai/codex/pull/36815)** — Replaces thread IDs in `<context_window>` metadata with canonical agent paths (`/root` for root sessions, subagent paths for children).

## Feature Request Trends

- **Multi-account / multi-identity workflows** — [#12029](https://github.com/openai/codex/issues/12029) (multiple accounts in the VS Code extension) and [#30418](https://github.com/openai/codex/issues/30418) (multiple named Gmail accounts in connectors) show demand for first-class identity separation, not just token swapping.
- **Localization / RTL** — [#19504](https://github.com/openai/codex/issues/19504) requests full RTL support for Arabic and Hebrew across App and Chat panels.
- **Quota transparency** — [#28985](https://github.com/openai/codex/issues/28985) asks for account-wide usage attribution by client, session, and timestamp; [#33685](https://github.com/openai/codex/issues/33685) and [#32791](https://github.com/openai/codex/issues/32791) reflect confusion over how the weekly limit is consumed.
- **Proactive agent behavior** — [#29922](https://github.com/openai/codex/issues/29922) proposes an agent-callable `monitor` tool that wakes Codex on background events (logs, files, builds, CI) without polling.
- **CLI UI polish** — [#10562](https://github.com/openai/codex/issues/10562) requests a setting to disable distracting inline "ghost" suggestions in the CLI TUI input box.

## Developer Pain Points

- **Windows + WSL remains the reliability hotspot** — Freezes ([#20214](https://github.com/openai/codex/issues/20214)), OneDrive-backed disconnects ([#35420](https://github.com/openai/codex/issues/35420)), Git misdetection ([#35119](https://github.com/openai/codex/issues/35119)), sandbox path mismatches ([#29639](https://github.com/openai/codex/issues/29639)), missing clipboard screenshots ([#30529](https://github.com/openai/codex/issues/30529)), and orphaned processes on timeout ([#35393](https://github.com/openai/codex/issues/35393)) share one root theme: Windows/WSL integration is fragile.
- **Multi-agent model gating** — The `gpt-5.6-luna` / MultiAgent V1-vs-V2 mismatch ([#35097](https://github.com/openai/codex/issues/35097), [#34700](https://github.com/openai/codex/issues/34700), [#34964](https://github.com/openai/codex/issues/34964)) is drawing strong reaction: users are told a model is available, then blocked by `spawn_agent`.
- **Quota and rate-limit confusion** — The disappearance of the 5-hour limit ([#32791](https://github.com/openai/codex/issues/32791)) and the weekly limit draining "like the old limit" ([#33685](https://github.com/openai/codex/issues/33685)) have eroded trust in quota accounting; silent failures ([#15477](https://github.com/openai/codex/issues/15477)) compound it.
- **Session-state inconsistency** — Lost tool handlers ([#28080](https://github.com/openai/codex/issues/28080)), workspace root leakage between concurrent sessions ([#24224](https://github.com/openai/codex/issues/24224)), and `exec resume` appending to Desktop transcripts without UI updates ([#28259](https://github.com/openai/codex/issues/28259)) indicate persistent session-state bugs across surfaces.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-04

## 1. Today's Highlights
The Gemini CLI project shipped nightly release v0.55.0-nightly.20260803 while maintainers concentrated on a cluster of agent-reliability bugs: false-success reporting after MAX_TURNS, generalist agent hangs, and subagent permission regressions. On the PR side, a wave of robustness fixes landed for context corruption, malformed GitHub JSON handling, and model-capacity fallback, alongside new model configuration support for Gemini 3.6 Flash and 3.5 Flash-Lite.

## 2. Releases
- **v0.55.0-nightly.20260803.gf47d6c6f7** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260803.gf47d6c6f7) \| [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7). No detailed changelog published; routine nightly build.

## 3. Hot Issues
1. **Subagent recovery after MAX_TURNS reported as GOAL success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) — P1 bug: `codebase_investigator` returns `status: "success"` with `Termination Reason: "GOAL"` even when it hit MAX_TURNS without performing any analysis. Misleading success signals undermine trust in agent reporting. 12 comments, the most-discussed issue today.
2. **Generalist agent hangs** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) — P1: deferring to the generalist agent hangs indefinitely (users waited up to an hour) for trivial tasks like folder creation. Workaround: instruct the model never to use subagents. Highest community reaction at 8 👍.
3. **Shell command stuck at "Waiting input" after completion** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) — P1: simple CLI commands that never prompt for input remain in an active state with "Awaiting user input" after finishing. Reproducible, 3 👍.
4. **Auto Memory retries low-signal sessions indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — P2: sessions the extraction agent skips as low-signal stay unprocessed and resurface repeatedly, wasting background turns.
5. **Deterministic redaction and reduced Auto Memory logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — P2 security: transcript content enters model context before prompt-based redaction occurs, and the service may log existing skills. Sensitive for users concerned about local transcript privacy.
6. **400 error when too many tools are available** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) — P2: the client hits a 400 error with a large tool surface; expectation is smarter tool-scoping based on enabled tools/context.
7. **Gemini doesn't use skills and sub-agents enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — P2: anecdotal but recurring; custom skills (e.g., `gradle`, `git`) are ignored unless explicitly requested, limiting the value of agent customization.
8. **Subagents running without permission since v0.33.0** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) — P2: subagents execute even when agents are disabled in all configs and only MCP was expected — a serious opt-out regression.
9. **Browser Agent ignores settings.json overrides** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) — P2: `AgentRegistry` reads but never applies overrides like `maxTurns` from global/project settings.
10. **Browser subagent fails on Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) — P1: Browser Agent exits with `Termination Reason: GOAL` without doing work in Wayland sessions.

## 4. Key PR Progress
1. **Gemini 3.6 Flash & 3.5 Flash-Lite model configurations** ([#28673](https://github.com/google-gemini/gemini-cli/pull/28673)) — Adds base model definitions, capabilities (`thinking`, `multimodalToolUse`), aliases, and Code Execution configs for two new model families in `packages/core`.
2. **Context corruption & quota-fallback hardening** ([#28671](https://github.com/google-gemini/gemini-cli/pull/28671)) — Defensive history hardening prevents "autocomplete" prefix-continuation behavior when tool executions are interrupted by quota errors or user ESC queries.
3. **/compress session reload & quota-fallback tool response loss** ([#28672](https://github.com/google-gemini/gemini-cli/pull/28672)) — Two fixes: `/compress` no longer hard-throws when reloading the on-disk session file, and tool responses lost during quota fallback are preserved.
4. **GCA agent mode capacity fallback** ([#28670](https://github.com/google-gemini/gemini-cli/pull/28670)) — Prevents infinite retry loops on `MODEL_CAPACITY_EXHAUSTED` / HTTP 429 in Gemini Code Assist agent mode by falling back to other available models (e.g., Flash).
5. **MCP OAuth token refresh with stored client ID** ([#28481](https://github.com/google-gemini/gemini-cli/pull/28481)) — Fixes OAuth refresh for dynamically registered MCP servers, which previously failed locally, deleted stored credentials, and forced re-auth on every run.
6. **Harden fetchJson against malformed GitHub JSON** ([#28657](https://github.com/google-gemini/gemini-cli/pull/28657) / [#28663](https://github.com/google-gemini/gemini-cli/pull/28663)) — Two open PRs address the same root cause: uncaught `JSON.parse()` exceptions and missing stream error handlers in `fetchJson()` crash extension operations. Likely candidates for consolidation.
7. **Embedded macOS seatbelt profile fallback** ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551), closed) — Resolves a critical startup crash in sandbox mode (`-s`) on macOS when static `.sb` profiles are absent from runfiles or the bundle.
8. **Preserve thoughtSignature in functionCall parts** ([#28586](https://github.com/google-gemini/gemini-cli/pull/28586)) — Fixes a v0.53.0 regression causing 400 Bad Request errors during parallel tool calls when `thoughtSignature` was stripped.
9. **GlobTool workspace directory validation** ([#28666](https://github.com/google-gemini/gemini-cli/pull/28666)) — Aligns `validateToolParamValues()` with `execute()` so an omitted `dir_path` is scoped consistently, preventing out-of-scope directory searches.
10. **MCP full server config in consent prompt** ([#28664](https://github.com/google-gemini/gemini-cli/pull/28664)) — Extension-update consent now surfaces execution-affecting fields (`env`, `cwd`, `headers`) that were previously hidden, and hardens stdio environment handling.

## 5. Feature Request Trends
- **AST-aware code tooling** — Two linked EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) propose AST-aware file reads, search, and codebase mapping (via `tilth` or `glyph`) to reduce token noise and improve method-level precision.
- **Agent self-awareness** — Requests for the agent to accurately explain its own CLI flags, hotkeys, and mechanics ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Component-level evals** — The eval-infrastructure EPIC ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) tracks scaling behavioral evals beyond the current 76 tests across 6 Gemini models.
- **Subagent trajectory sharing** — Make subagent trajectories visible and shareable via `/chat share` for easier review and evals ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
- **Browser agent resilience** — Automatic session takeover and lock recovery in `BrowserManager.ts` for persistent-profile scenarios ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Native file tools for the task tracker** — Experiment with native file tools instead of shell-based task-tracker maintenance ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).

## 6. Developer Pain Points
- **Hangs and misleading terminal states** — Recurring complaints about agents hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck at "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompts deadlocking (Vite app creation, [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **False success reporting** — Subagents report GOAL success after hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), making agent output hard to trust.
- **Context/session corruption** — Multiple reports of broken compression, altered context, and response loss after quota fallbacks, external editor exits, and interrupted tool executions ([#28672](https://github.com/google-gemini/gemini-cli/pull/28672), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935), [#22466](https://github.com/google-gemini/gemini-cli/issues/22466)).
- **Autonomy vs. control** — Tension between agent autonomy and user control: subagents running despite disabled configs ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), destructive git/DB commands not being discouraged ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and skills/tools not being used when they should be ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Auto Memory privacy and noise** — Local transcripts sent to the model before deterministic redaction and excessive service logging ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)); low-signal sessions retried indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
- **Tool-scoping and workspace hygiene** — Models hitting 400 errors with large tool surfaces ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and scattering temp scripts across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) create reliability and cleanup overhead.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-04

## Today's Highlights

Two new releases landed: v1.0.78 adds live timing headers for tool calls plus automatic first-party plugin updates, while v1.0.78-3 introduces an experimental `/new-worktree` command and fixes desktop login flow defaults. Community attention remains concentrated on configuration flexibility — multiple BYOK models, project-scoped plugins, and better session/queue behavior — with several new triage issues around enterprise policy fetching and CI/MCP reliability. No pull requests were updated or merged in the last 24 hours.

## Releases

### v1.0.78
- Tool call timeline headers now show how long each call took, right-aligned and ticking live for calls lasting at least 5 seconds. On by default; disable with `/settings showToolDurations`.
- First-party plugins automatically update to the latest version at session start.
- Additional experimental command-line additions were included (release notes truncated in data source).

### v1.0.78-3
- **Added:** experimental `/new-worktree` command to create a new worktree and start a fresh conversation in it.
- **Improved:** interactive shell shortcut now launches on Enter and shows an inline hint when `$` is armed.
- **Fixed:** Copilot login now defaults to browser flow for local desktop.

## Hot Issues

1. **Multiple BYOK model capability**  
   [#3282](https://github.com/github/copilot-cli/issues/3282) — Users want multiple bring-your-own-key models configurable and switchable inside the TUI; currently changing a BYOK model requires terminating the session and setting a new env var. High community demand: 20 👍.

2. **Project- or repo-scoped plugins**  
   [#1665](https://github.com/github/copilot-cli/issues/1665) — Plugins are installed per-user and globally loaded, making repo-specific plugin setups difficult. The issue is closed but has 18 👍 and 14 comments, indicating strong interest in scoped plugin configuration.

3. **Allow `/model` to switch between multiple models including BYOK/local providers**  
   [#3709](https://github.com/github/copilot-cli/issues/3709) — The model picker only lists GitHub-hosted models; local BYOK providers are pinned via `COPILOT_MODEL` and cannot be selected mid-session. 20 👍.

4. **Skills beyond alphabetical position ~32 are unreachable when many skills are installed**  
   [#1464](https://github.com/github/copilot-cli/issues/1464) — With ~63 skills installed, the system prompt truncates to 32 skills due to token limits, and lower-alphabetical skills are never selected. This is a significant practical limitation for heavy skill users.

5. **Scheduled prompts kill the existing prompt queue**  
   [#4078](https://github.com/github/copilot-cli/issues/4078) — When a `/every` or `/after` scheduled prompt fires, queued prompts are not processed afterward; the queue silently stalls. Important reliability issue for automation-heavy workflows.

6. **Resuming a session has strange UX with model and reasoning effort**  
   [#4340](https://github.com/github/copilot-cli/issues/4340) — `--resume` honors `reasoningEffort` from CLI/settings but not the requested model, causing surprising behavior when resuming sessions created with different models.

7. **ACP `toolCall.title` hides the actual shell command in approval modals**  
   [#4335](https://github.com/github/copilot-cli/issues/4335) — In Agent Context Protocol mode with editors like Zed, `toolCall.title` contains a high-level natural-language summary instead of the executable command, making approval decisions less transparent.

8. **MCP registry policy fetch returns 403 for Actions `GITHUB_TOKEN`**  
   [#4346](https://github.com/github/copilot-cli/issues/4346) — The documented PAT-less GitHub Actions setup fails at the MCP registry policy fetch, blocking all non-default MCP servers in CI. This is a blocker for teams adopting the new Actions-native auth flow.

9. **Managed settings policy fetch fails closed on valid enum value**  
   [#4349](https://github.com/github/copilot-cli/issues/4349) — Enterprise GHE returns `"enable"` for `permissions.disableBypassPermissionsMode`, but the CLI validator expects only `"disable"`, causing startup failure and blocking all local/custom MCP servers. A classic fail-closed validation bug.

10. **Stashed prompt discarded on session switch**  
    [#4334](https://github.com/github/copilot-cli/issues/4334) — A prompt stashed with `ctrl+s` is lost when switching sessions; pressing pop later restores nothing. This is a frustrating UX regression for multitaskers.

## Key PR Progress

No pull requests were updated, merged, or opened in the last 24 hours. The repository is currently in a release-focused window with issue triage outpacing PR activity.

## Feature Request Trends

- **Multi-model BYOK support:** The strongest recurring request is the ability to configure and switch between multiple BYOK/local models in a single session without restarting the CLI.
- **Plugin lifecycle controls:** Users want project-scoped plugin installation and quick enable/disable toggling without uninstalling.
- **Terminal rendering customization:** Requests include custom color themes, opt-out controls for OSC 9;4 progress sequences, and better handling of streamed Markdown tables.
- **Conversation navigation:** Ability to scroll through current conversation history with mouse wheel or PageUp/PageDown is desired.
- **Sandbox/tool permission granularity:** Users want settings.json controls to selectively enable/disable bundled tools rather than all-or-nothing sandbox config.

## Developer Pain Points

- **BYOK configuration is rigid:** Pinning a single model via env var prevents in-session model switching and forces session restarts.
- **Enterprise policy integration is fragile:** Schema validation failures and 403s on managed-settings or MCP registry fetches can block all MCP servers or completely fail startup.
- **Session state bugs undermine trust:** Lost stashed prompts, killed prompt queues, and model/resume mismatches are recurring sources of frustration.
- **Terminal/input quirks persist:** WSL2 Ctrl+H misinterpretation, native-Windows zellij DA1 escape sequence leaking into the input box, and poor table rendering remain open issues.
- **Large skill/plugin setups hit token ceilings:** Skills beyond position ~32 become invisible to the model, making extensive skill libraries impractical.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Today's Highlights

No new release shipped in the last 24 hours, but the project saw active triage on three open issues and eight pull requests. The most pressing signals are stability complaints around the Web UI session switcher and CLI stream hangs, while the community continues to push for a persistent Memory System. On the PR side, ayaangazali remains highly active with fixes touching hooks, shell execution, and legacy console compatibility.

## Releases

No new releases in the last 24 hours.

## Hot Issues

- [#1283 [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  Still open with 15 comments, this is the strongest feature signal in the queue. Users want automatic AI-managed memory plus manual user-defined instructions so Kimi Code CLI can retain project patterns and preferences across sessions. It has been open since February and continues to receive attention, indicating sustained demand for long-term context.

- [#2573 Bug: Web UI "Connecting to session..." infinite spinner when switching sessions](https://github.com/MoonshotAI/kimi-cli/issues/2573)  
  Reported on kimi-cli 1.48.0, macOS 26.4, Chrome 150. This is a technical preview blocker: switching between sessions in the Web UI leaves users stuck on an infinite spinner. One comment so far, but it represents a core usability regression for the Web-based workflow.

- [#2582 [bug] CLI stream hangs indefinitely during generation, session becomes unusable](https://github.com/MoonshotAI/kimi-cli/issues/2582)  
  On Windows 10 x64 with Moonshot Platform API and `kimi-k2.7-code`, generation hangs indefinitely and the session can’t be recovered afterward. No comments yet, but severity is high because it makes the CLI completely unusable in that environment.

## Key PR Progress

- [#2577 fix(web,vis): do not crash printing the startup banner on legacy console codecs](https://github.com/MoonshotAI/kimi-cli/pull/2577)  
  Fixes a crash on consoles that cannot represent U+279C, e.g. GBK on Chinese Windows. Prevents startup banner printing from taking down `kimi web` and `kimi vis`.

- [#2575 fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger](https://github.com/MoonshotAI/kimi-cli/pull/2575)  
  Resolves #2564. Previously hooks were fired via bare `asyncio.create_task` and the handle was dropped, allowing pending hook tasks to be garbage-collected before completion. This routes them through the proper fire-and-forget mechanism.

- [#2554 fix(tools): count StrReplaceFile replacements against running content](https://github.com/MoonshotAI/kimi-cli/pull/2554)  
  Correctness fix for the `StrReplaceFile` success message: replacement counts should be computed against the running content, not stale state.

- [#2530 fix(shell): stop blocking until timeout when a detached child holds the pipes](https://github.com/MoonshotAI/kimi-cli/pull/2530)  
  Resolves #2468. In foreground shell execution, commands like `some_daemon & echo done` could keep stdout/stderr pipes open and force the CLI to wait until timeout instead of checking the exit code promptly.

- [#2507 fix(acp): signal QuestionNotSupported instead of resolving empty answers](https://github.com/MoonshotAI/kimi-cli/pull/2507)  
  Resolves #2495. In ACP server mode, unanswered `QuestionRequest`s were indistinguishable from user dismissals. This PR makes unsupported questions explicit to the model.

- [#2581 chore(release): bump kosong to 0.56.0](https://github.com/MoonshotAI/kimi-cli/pull/2581)  
  Merged release chore: bumps `kosong` to 0.56.0, moves release notes, and updates the `kosong[contrib]==0.56.0` dependency pin.

- [#2580 fix(kosong): omit empty anthropic-beta header when no beta features declared](https://github.com/MoonshotAI/kimi-cli/pull/2580)  
  Merged fix: the Anthropic provider no longer sends an empty `anthropic-beta` header when no beta features are declared. Improves compatibility with strict API gateways.

- [#2535 fix(llm): scope prompt cache keys to Moonshot APIs](https://github.com/MoonshotAI/kimi-cli/pull/2535)  
  Resolves #2534. Third-party Kimi-compatible endpoints no longer receive Moonshot-specific `prompt_cache_key` parameters, while official Kimi/Moonshot APIs retain session caching.

## Feature Request Trends

The clearest feature demand in the current issue queue is a **persistent Memory System** for cross-session context. Users want both automatic memory (AI-managed notes) and manual memory (user-defined instructions and project preferences). Beyond that, the remaining issues are defect reports rather than new feature asks, so the broader trend is less about new capabilities and more about making existing sessions and Web UI interactions reliable.

## Developer Pain Points

- **Session reliability**: Both the Web UI infinite spinner and CLI stream hang make sessions unusable, which is especially damaging for long-running AI-assisted workflows.
- **Context loss across sessions**: The long-standing Memory System request highlights frustration with having to re-establish project context and preferences on every new session.
- **Windows and legacy console compatibility**: Windows-specific hangs and GBK console codec crashes show that cross-platform robustness remains a recurring concern.
- **Detached processes and hooks**: Developers are hitting subtle issues where background child processes block CLI completion and async hooks are silently dropped, causing flaky automation behavior.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-04

## Today's Highlights

OpenCode shipped **v1.18.12** with a critical Azure GPT-5.5+ reasoning fix and desktop performance improvements for large pasted content. On the community side, the most visible demand remains **session persistence and lifecycle features** — the `/goal` proposal continues to dominate with 123 👍 — while providers and desktop stability issues generated the most troubleshooting activity. Several promising PRs landed around stream retries, Unicode patch handling, and configurable TUI permissions.

## Releases

### v1.18.12
**Core**
- Fixed Azure GPT-5.5+ completion requests failing when reasoning is enabled. ([@frederiknsgo](https://github.com/anomalyco/opencode))

**Desktop**
- Reduced composer lag when drafts include large pasted images or attachments.
- Project search now matches any known recent project instead of only the first five.

## Hot Issues

1. **[#27167 [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** — 67 comments, 123 👍  
   The most popular open feature request. Users want a persistent session goal/lifecycle mechanism beyond custom slash commands. Strong community consensus around this gap.

2. **[#1168 Feature Request: Make Links Clickable (Ctrl+Left Click to Open)](https://github.com/anomalyco/opencode/issues/1168)** — 10 comments, 118 👍  
   A long-standing usability issue: URLs rendered in the TUI/desktop should be openable with a simple keybind. Frequently requested by developers working with provider logs and tool output.

3. **[#36942 [FEATURE]: Vertical tabs](https://github.com/anomalyco/opencode/issues/36942)** — 10 comments, 16 👍  
   The new horizontal tab UI makes it hard to see more than ~5 sessions at once. Users want vertical tabs for better multi-session navigation.

4. **[#16077 [FEATURE] Persistent Session Memory](https://github.com/anomalyco/opencode/issues/16077)** — 12 comments, 3 👍  
   Requests loading previous conversation context from a local file at startup. Complements the `/goal` idea: longer-term continuity across sessions is a recurring theme.

5. **[#38932 Pasting a long text in prompt box makes Desktop app hang](https://github.com/anomalyco/opencode/issues/38932)** — 4 comments  
   Desktop app freezes indefinitely when pasting ~5000+ characters. Notably related to the new v1.18.12 composer lag fix, but users report the hang still occurs.

6. **[#40314 Unable to connect to the first certificate](https://github.com/anomalyco/opencode/issues/40314)** — 4 comments  
   Network/certificate failure when using MTN Broadband. Points to a gap in TLS error reporting and retry behavior for non-standard networks.

7. **[#20600 Desktop app v1.3.13 randomly scrolls to middle of conversation during chat](https://github.com/anomalyco/opencode/issues/20600)** — 4 comments, 2 👍  
   Intermittent viewport jumps disrupt chat reading. Reopened several times via related issues, suggesting the scroll bug is persistent.

8. **[#29094 Reading chat history during LLM responses still re-snaps the viewport](https://github.com/anomalyco/opencode/issues/29094)** — 2 comments, 1 👍  
   Re-open of #4196: scrolling up mid-response snaps back to bottom on every token. Makes reading older history while waiting for completion effectively impossible.

9. **[#40171 Go service /v1/responses emits incomplete SSE event stream](https://github.com/anomalyco/opencode/issues/40171)** — 2 comments, 2 👍  
   Streaming Responses-API compatibility bug: missing `response.output_item.added` and `response.content_part.added` events breaks Codex-style clients.

10. **[#37096 Web UI Session List Empty — Project Auto-Registration Fails on Windows/WSL](https://github.com/anomalyco/opencode/issues/37096)** — 3 comments, 5 👍  
   Windows/WSL users see an empty session list in Web UI because project auto-registration fails. Cross-platform path handling remains a pain point.

## Key PR Progress

1. **[#40268 fix(session): retry top-level stream request timeouts](https://github.com/anomalyco/opencode/pull/40268)**  
   Closes #39221. Handles OpenAI Responses-compatible providers that return HTTP 200 followed by an SSE `error` event; adds retry logic for top-level stream requests.

2. **[#40265 fix: gpt-5.5+ in combination with azure fails with reasoningEffort](https://github.com/anomalyco/opencode/pull/40265)**  
   Closes #40257. Aligns with today's v1.18.12 release — Azure GPT-5.5/5.6 reasoning effort handling is corrected.

3. **[#40198 fix(opencode): match canonically equivalent Unicode in patches](https://github.com/anomalyco/opencode/pull/40198)**  
   Closes #31651. Adds a Unicode canonical-equivalence matching pass so patch verification no longer fails when files use composed vs decomposed characters.

4. **[#40144 fix(tui): reject unavailable project destinations](https://github.com/anomalyco/opencode/pull/40144)**  
   Closes #39903. Prevents deleted project directories from remaining selectable in the TUI project picker.

5. **[#36710 fix(core): bound event log compaction](https://github.com/anomalyco/opencode/pull/36710)**  
   Closes #33356. Adds read-only event-log status and dry-run-by-default bounded compaction via `--session`/`--all` and `--apply`.

6. **[#40188 feat(plugin): add request-scoped chat.model hook](https://github.com/anomalyco/opencode/pull/40188)**  
   Closes #18793, addresses #24006. Lets plugins replace the model for a single request before provider/auth resolution — valuable for routing and A/B testing.

7. **[#40334 feat(tui): make permission mode keybind configurable](https://github.com/anomalyco/opencode/pull/40334)**  
   Closes #40331. Users can now bind a custom key to toggle auto-approve permission modes instead of relying on the default.

8. **[#40337 feat(desktop): localhost browser preview for sessions](https://github.com/anomalyco/opencode/pull/40337)**  
   Adds an in-app Browser Preview panel for the current session's dev server. Marked `[needs:compliance]`, but it's a strong UX addition for web developers.

9. **[#40316 fix(core): apply safe defaults to all agents](https://github.com/anomalyco/opencode/pull/40316)**  
   Moves external-directory and `.env` read policies into universal agent defaults, while allowing managed tool output and temp directories for built-in and custom agents.

10. **[#38790 feat(app): add workspace flows to new layout](https://github.com/anomalyco/opencode/pull/38790)**  
    Adds Local/New/Existing workspace selection for new sessions with persisted, validated drafts and per-project defaults. Improves the redesigned app layout for multi-project work.

## Feature Request Trends

- **Session persistence and lifecycle** — `/goal` (#27167), persistent memory (#16077), and message timestamps (#35348) all point toward richer session state and resumability.
- **Desktop/TUI usability** — Vertical tabs (#36942), clickable links (#1168), MCP/skill GUI for desktop (#31399, #40335), and attaching arbitrary files (#40341) are prominent asks.
- **Configuration flexibility** — `{cmd:}` config placeholders for credential helpers (#12710), configurable permission-mode keybinds (#40334), and build-time base URL support (#18209).
- **Provider robustness** — Users increasingly request better handling of non-SSE streams, connection retries, and Azure/OpenAI compatibility fixes (#26487, #40171, #40330).

## Developer Pain Points

- **Desktop freezes and lag** — Large pastes, images, and attachments still cause hangs (#38932) and composer lag, despite patch releases.
- **Scroll/viewport instability** — Random mid-chat jumps (#20600) and viewport re-snapping during responses (#29094) disrupt reading and reviewing history.
- **Silent/unbounded retries** — `opencode run` can hang for 60+ seconds without surfacing connection errors when a provider's base URL is unreachable (#40319, #40330).
- **Authentication and signup issues** — GitHub OAuth login failing on empty email (#39207) and Zen signup rejecting valid Google/GitHub emails (#39414).
- **RTL/bidi rendering** — Mixed Arabic/Persian + Latin text renders scrambled in TUI and desktop (#40286).
- **Version mismatch between desktop and CLI** — Updating desktop doesn't update the global CLI, causing session sync issues (#35122).
- **Provider-specific regressions** — DeepSeek V4 Flash corrupted outputs (#40321), native OpenAI runtime dropping cache keys (#40278), and Azure GPT-5.5 reasoning failures (#40265).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

## Today’s Highlights

Pi’s latest activity is concentrated on reliability: multiple fixes landed for JSON streaming output, compaction race conditions, and context-limit handling. On the issue tracker, Windows/WSL usability remains the top community concern, with several high-traffic threads around WSL login hangs, Windows path handling, and Copilot Enterprise compaction failures.

## Releases

No new releases published in the last 24 hours.

## Hot Issues

- [**#6768** — Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)  
  Open, 17 comments, 18 👍. Compaction fails with `421 Misdirected Request` on OpenAI and Anthropic paths when using Copilot Enterprise. Strongly upvoted, likely affecting enterprise users significantly.

- [**#6187** — Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)  
  Open, 20 comments. Device authorization completes in the browser, but the WSL client never detects it. This is a common WSL workflow and a frustrating onboarding blocker.

- [**#7064** — WSL absolute windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064)  
  Open, 11 comments. `read`, `write`, and `edit` tools fail on Windows absolute paths under WSL, causing the agent to fall back to shell-based full-file rewrites.

- [**#7020** — Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)  
  Closed, 9 comments. Long-running "coordinator" sessions frequently get stuck after compaction. Highlights remaining rough edges in compaction for long-lived conversations.

- [**#7161** — anthropic-messages never sends x-client-request-id, unlike all OpenAI paths](https://github.com/earendil-works/pi/issues/7161)  
  Open, 9 comments. Proxies and gateways that use request IDs for session affinity cannot group Anthropic conversations correctly. This is a meaningful interoperability bug.

- [**#7547** — How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)  
  Open, 6 comments. Maintainer-led discussion to map Windows usage modes and focus areas. Useful signal for where Windows support is heading.

- [**#7299** — Expose the existing shouldStopAfterTurn callback through AgentOptions](https://github.com/earendil-works/pi/issues/7299)  
  Closed, 6 comments. Developers want access to the existing low-level loop hook from `AgentOptions`, but it remains unexposed after the big refactor.

- [**#7395** — JSON mode serializes cumulative assistant state on every delta](https://github.com/earendil-works/pi/issues/7395)  
  Open, 3 comments. In `--mode json`, every update includes the full accumulated assistant message, causing quadratic output and slow stdout drains. Important for scripted integrations.

- [**#7399** — truncateToWidth() leaves dangling OSC 8 hyperlink when it truncates inside one](https://github.com/earendil-works/pi/issues/7399)  
  Open, 5 comments. Terminal output can be left with unbalanced OSC 8 hyperlink sequences, breaking rendering in terminals that support hyperlinks.

- [**#7130** — Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered)](https://github.com/earendil-works/pi/issues/7130)  
  Open, 5 comments. Kitty keyboard protocol release events are not being filtered, causing double-deletion. A narrow but very visible TUI input bug.

## Key PR Progress

- [**#7503** — feat(agent): implement harness v2 for in-memory storage](https://github.com/earendil-works/pi/pull/7503)  
  Adds the experimental Harness v2 session foundation with backend-neutral session APIs and an in-memory backend. Likely a stepping stone for more durable session architectures.

- [**#7396** — feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396)  
  Adds a durable server backend for `PiServer`, persisting sessions as JSONL with cross-process locking and crash recovery.

- [**#7451** — fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451)  
  Fixes multiple model-catalog refresh issues, including cancellation and queuing problems. Closes several related issues at once.

- [**#7394** — fix(coding-agent): make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394)  
  Emits delta-only `message_update` records in JSON/RPC modes and applies stdout backpressure. A companion PR, [**#7561**](https://github.com/earendil-works/pi/pull/7561), also landed with similar delta-only streaming changes.

- [**#7540** — fix(coding-agent): resume after context-limited length stops](https://github.com/earendil-works/pi/pull/7540)  
  Treats length stops near the context window as context overflow and resumes after compaction. Also handles reasoning tokens emitted before an incomplete response.

- [**#7370** — fix(coding-agent): prevent auto-compaction race during manual compaction](https://github.com/earendil-works/pi/pull/7370)  
  Fixes the double-compaction and infinite-compaction loop reported around manual `/compact` commands. Includes regression coverage.

- [**#7569** — fix(coding-agent): normalize find root results](https://github.com/earendil-works/pi/pull/7569)  
  Reworks `find` path relativization, fixing Windows path corruption and selector-handling issues.

- [**#7552** — fix(coding-agent): discover sessions through symlinked directories](https://github.com/earendil-works/pi/pull/7552)  
  Fixes session discovery for symlinked directories under the global sessions root, with tests for broken and non-directory links.

- [**#7568** — Add support for generic sampling parameters in `models.json`](https://github.com/earendil-works/pi/pull/7568)  
  Adds a generic sampling-parameter passthrough for llama.cpp/vLLM-style inference engines, e.g. `dry_multiplier`, `xtc_probability`, and `repetition_penalty`.

- [**#7562** — feat(ai): support Anthropic server-side fallbacks](https://github.com/earendil-works/pi/pull/7562)  
  Adds opted-in Anthropic server-side fallback payload/beta support and preserves fallback transitions during replay.

## Feature Request Trends

- **Windows/WSL first-class support**: There is sustained demand for reliable Windows and WSL behavior — path translation, `find` patterns, process-tree cleanup, login flows, and clearer docs. Issue #7547 is a direct maintainer response to this trend.
- **Configurable compaction**: Users want independent thinking level/model for compaction, better retry behavior, and no interaction between manual and automatic compaction. See #7553, #7020, and #7253.
- **Provider and gateway compatibility**: Continued interest in custom provider auth, request IDs, server-side fallbacks, generic sampling parameters, and model-list visibility across subscriptions. See #7161, #7568, #7560, and #7546.
- **Terminal/TUI robustness**: Requests to handle wide lines, truncated diffs, hyperlink balance, input latency, and terminal resize crashes. See #7399, #7130, #7541, #7554, and #911.
- **SDK/API ergonomics**: Developers want exposed hooks like `shouldStopAfterTurn`, linear JSON streaming, and less dependency friction for library consumers. See #7299, #7395, and #7564.

## Developer Pain Points

- **Windows/WSL friction is the biggest recurring theme**: broken absolute path handling, `find` path corruption, `taskkill` ENOENT, WSL login hangs, and confusion about supported Windows execution modes.
- **Compaction is still unreliable**: failures with Copilot Enterprise, hangs after compaction, double-triggering, and insufficient control over the summarization model.
- **JSON/streaming performance can be pathological**: serializing cumulative assistant state on every delta creates quadratic output and can block long-running stdout pipelines.
- **Terminal edge cases keep surfacing**: crashes on oversized lines, dangling OSC 8 hyperlinks, Kitty protocol backspace bugs, and clipped full-screen diff selectors.
- **Provider quirks create integration burden**: missing request IDs, dropped Gemini tool-call IDs, hidden Grok models, and provider-prefix stripping all force workarounds in gateways and proxies.
- **Session and dependency management friction**: symlinked session directories are ignored, exact dependency pins cause duplicate SDK copies in consumers, and long image-heavy sessions suffer TUI input lag.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-04

## Today's Highlights

Web Shell continues to mature quickly: it is now positioned as a release-ready desktop app with native lifecycle management, single-instance behavior, and automatic updates ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)), while history pagination now handles oversized turns gracefully. The community is also pushing hard on runtime trust and session reliability, with the most-discussed proposal being deterministic tool-execution boundaries for a trustworthy agent runtime ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)). On the release front, v0.21.4 shipped as the latest patch release.

## Releases

- **v0.21.4** — Published without detailed release notes. The release window otherwise overlaps with Web Shell desktop-readiness work and several reliability fixes in progress.

## Hot Issues

- [**#8102 — Deterministic tool-execution boundaries for a trustworthy agent runtime**](https://github.com/QwenLM/qwen-code/issues/8102)  
  The highest-activity issue this cycle (13 comments). Proposes keeping the LLM outside the trust boundary and making the runtime deterministically constrain, authorize, observe, and evaluate model actions. Signals growing enterprise/security interest in Qwen Code.

- [**#8316 — Prompt not restored to input box when canceling (ctrl+c)**](https://github.com/QwenLM/qwen-code/issues/8316)  
  Users cancel a prompt to revise it and lose the entire draft. Retyping is annoying; the community wants cancellation to restore the cancelled prompt.

- [**#8382 — Duplicate provider tool call id**](https://github.com/QwenLM/qwen-code/issues/8382)  
  Users hit `Duplicate provider tool call id` and `not recorded` errors, especially during retries. It makes multi-tool sessions fragile and is a common cause of environment failures.

- [**#8470 — Model name too long with Alibaba token plan**](https://github.com/QwenLM/qwen-code/issues/8470)  
  Long `ModelStudio token plan` prefixes truncate model names in mobile/phone-triggered model lists, making it hard to tell which model is selected.

- [**#8281 — Add an Email channel with IMAP and SMTP support**](https://github.com/QwenLM/qwen-code/issues/8281)  
  Feature request for official email-based agent communication: receive messages via IMAP, reply via SMTP. Popular with users who want asynchronous/background agent workflows.

- [**#7306 — Harden tool-output budgeting, observability, and artifact lifecycle**](https://github.com/QwenLM/qwen-code/issues/7306)  
  Long-running enhancement with continued discussion (5 comments). Phase 1 correctness is largely merged; the community is pushing for stronger artifact-lifecycle and observability guarantees.

- [**#8400 — Desktop sessions silently auto-deleted after app restart when ACP session/load fails**](https://github.com/QwenLM/qwen-code/issues/8400)  
  P1 Windows desktop bug: after restarting the app, sessions disappear from the UI because a workspace cwd mismatch makes the loader return 0 messages. Serious data-loss risk.

- [**#8319 — New agent thinking presentation is hard to read**](https://github.com/QwenLM/qwen-code/issues/8319)  
  The dynamic thinking panel keeps moving up and down, disrupting reading of both thinking and non-thinking content. UI regression with strong user frustration.

- [**#8398 — isAbortError does not recognize OpenAI SDK's APIUserAbortError**](https://github.com/QwenLM/qwen-code/issues/8398)  
  Cancellation is misclassified on OpenAI-compatible providers, leading to wrong error handling. Important for the most common auth path.

- [**#8452 — Size-triggered microcompaction repeatedly invalidates prompt cache**](https://github.com/QwenLM/qwen-code/issues/8452)  
  Microcompaction rewrites cached conversation prefixes on consecutive tool results, defeating prompt caching and increasing cost/latency on long agentic runs.

## Key PR Progress

- [**#8125 — Add a required external tool guard provider**](https://github.com/QwenLM/qwen-code/pull/8125)  
  Optional pre-execution policy provider for `qwen serve` ACP deployments, with an authenticated loopback handshake. Directly supports the trustworthy-runtime direction from #8102.

- [**#8496 — Run read-only info commands immediately mid-turn in Web Shell**](https://github.com/QwenLM/qwen-code/pull/8496)  
  `/stats`, `/about`, and `/context` now execute while a turn is streaming instead of being silently swallowed.

- [**#8274 — Fork from any conversation**](https://github.com/QwenLM/qwen-code/pull/8274)  
  Replaces unsafe branching from latest state with a reliable branch point targeting any earlier assistant response, handling tool calls, cancellations, and transcript pagination.

- [**#8445 — Allow Web Shell session refresh with daemon auth**](https://github.com/QwenLM/qwen-code/pull/8445)  
  Lets exact session-document navigation load the public HTML shell before bearer auth while keeping session APIs protected.

- [**#8488 — Harden Qwen 3.8 reasoning effort wire shape**](https://github.com/QwenLM/qwen-code/pull/8488)  
  Fixes DashScope request shape for reasoning effort: removes competing thinking knobs and corrects effort-tier serialization.

- [**#8482 — A never-delivered MCP call is a first delivery, not a replay**](https://github.com/QwenLM/qwen-code/pull/8482)  
  Fixes a red `mcp-tool.test.ts` caused by replay-safety logic incorrectly treating never-delivered calls as replays.

- [**#8399 — Recognize OpenAI SDK APIUserAbortError as an abort**](https://github.com/QwenLM/qwen-code/pull/8399)  
  Companion fix to #8398; teaches `isAbortError` to correctly classify OpenAI SDK user cancellations.

- [**#8276 — Preserve prompt cache across deferred tool discovery**](https://github.com/QwenLM/qwen-code/pull/8276)  
  Keeps provider tool declarations and cached system instructions stable while deferred tools are discovered, avoiding prompt-cache invalidations.

- [**#8467 — Add Git diff sources and existing branch switching in Web Shell**](https://github.com/QwenLM/qwen-code/pull/8467)  
  Expands Git tooling with Uncommitted, Unstaged, Staged, Committed, and Branch comparison sources plus searchable branch selectors.

- [**#8368 — Add Kimi and Xiaomi MiMo providers**](https://github.com/QwenLM/qwen-code/pull/8368)  
  Adds first-class `/auth` presets for Kimi (Coding Plan/API Key) and Xiaomi MiMo (pay-as-you-go, regional options).

## Feature Request Trends

- **Trustworthy/secure agent runtime** — Strong interest in deterministic tool-execution boundaries, external tool guard providers, and auditability ([#8102](https://github.com/QwenLM/qwen-code/issues/8102), [#8125](https://github.com/QwenLM/qwen-code/pull/8125)).
- **Background & asynchronous channels** — Users want agents reachable outside interactive terminals: email/IMAP/SMTP ([#8281](https://github.com/QwenLM/qwen-code/issues/8281)), Plan & Review workflows for daemon sessions ([#8389](https://github.com/QwenLM/qwen-code/issues/8389)), and second-opinion `/advisor` conversations ([#7567](https://github.com/QwenLM/qwen-code/pull/7567)).
- **Session resilience & state preservation** — Repeated asks for better cancellation semantics, transcript recovery, and preventing silent session loss ([#8316](https://github.com/QwenLM/qwen-code/issues/8316), [#8356](https://github.com/QwenLM/qwen-code/issues/8356), [#8400](https://github.com/QwenLM/qwen-code/issues/8400)).
- **Provider breadth & auth polish** — New providers (Kimi, Xiaomi MiMo) and fixes for long model names and stale token-plan model lists ([#8368](https://github.com/QwenLM/qwen-code/pull/8368), [#8470](https://github.com/QwenLM/qwen-code/issues/8470), [#8432](https://github.com/QwenLM/qwen-code/issues/8432)).
- **Web Shell / desktop maturity** — Desktop lifecycle, secure session refresh, Git tooling, and safe artifact actions are converging into a full desktop coding-agent experience ([#8132](https://github.com/QwenLM/qwen-code/pull/8132), [#8467](https://github.com/QwenLM/qwen-code/pull/8467), [#8494](https://github.com/QwenLM/qwen-code/issues/8494)).

## Developer Pain Points

- **Cancellation breaks state** — Ctrl+C does not restore the prompt ([#8316](https://github.com/QwenLM/qwen-code/issues/8316)); OpenAI cancellations are misclassified ([#8398](https://github.com/QwenLM/qwen-code/issues/8398)); stream-json interrupts can abort session-lifetime controls ([#8495](https://github.com/QwenLM/qwen-code/issues/8495)).
- **Silent data loss** — Desktop sessions auto-delete after restart ([#8400](https://github.com/QwenLM/qwen-code/issues/8400)); transcripts stop being written after `APIUserAbortError` ([#8356](https://github.com/QwenLM/qwen-code/issues/8356)).
- **Tool/MCP reliability** — Duplicate provider tool call IDs ([#8382](https://github.com/QwenLM/qwen-code/issues/8382)); MCP tools fail on resumed sessions ([#8433](https://github.com/QwenLM/qwen-code/issues/8433)); stale MCP metadata after hot reload ([#8492](https://github.com/QwenLM/qwen-code/issues/8492)).
- **Terminal UX regressions** — Ctrl+Shift+C copy broken ([#8317](https://github.com/QwenLM/qwen-code/issues/8317)); ConEmu/Cmder output flickering ([#8385](https://github.com/QwenLM/qwen-code/issues/8385)); Warp tab-switching conflicts ([#8330](https://github.com/QwenLM/qwen-code/issues/8330)); jumpy thinking panel ([#8319](https://github.com/QwenLM/qwen-code/issues/8319)).
- **Performance/cache churn** — Microcompaction invalidates prompt cache on consecutive tool-result turns ([#8452](https://github.com/QwenLM/qwen-code/issues/8452)), raising latency and cost for long agent sessions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

## 1. Today's Highlights

No new release was published in the last 24 hours. Development activity is focused on the **v0.9.4 release train** ([#5135](https://github.com/Hmbown/CodeWhale/pull/5135)), which is accumulating runtime API endpoints, lint hygiene fixes, and web contract updates. Community issues continue to cluster around v0.9.3 architecture consolidation, additional model providers, Chinese/Windows UX, and safer interruption controls for autonomous runs.

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

- [#3192 Put it up for agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192) — 13 comments  
  Requests listing the project in the Agent Client Protocol registry so Zed can discover and install it more easily. Signals growing interest in editor/agent ecosystem interoperability.

- [#3205 v0.9.3: Fleet model classes, loadout auto, and semantic route roles](https://github.com/Hmbown/CodeWhale/issues/3205) — 11 comments  
  Core architecture issue for a shared model/loadout selector across TUI, CLI, exec, subagents, and Fleet workers. High importance because it defines how "Fleet loadout auto" should resolve compute resources.

- [#1481 Support OpenCode Go/Zen please, it provides DeepSeek-V4 as well](https://github.com/Hmbown/CodeWhale/issues/1481) — 10 comments, 1 👍  
  Community request for cheap DeepSeek-V4 access through OpenCode Go/Zen. Shows demand for more provider routes beyond first-party endpoints.

- [#4959 proposed 'stop' command](https://github.com/Hmbown/CodeWhale/issues/4959) — 7 comments  
  Proposes a `/stop` command plus runtime STOP-word interception. Important for safety when the model is in YOLO mode or deep autonomous workflows and ignores plain text stop commands.

- [#4949 Discussion: The Chinese Translation of "Constitution" — "宪法", "协作准则", or Something Else?](https://github.com/Hmbown/CodeWhale/issues/4949) — 7 comments  
  Active localization debate after PR #4908 reverted the Chinese translation of "Constitution" to "宪法". Raises both linguistic and cultural-sensitivity concerns in the Chinese-speaking community.

- [#4022 v0.9.3: define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022) — 7 comments  
  TUI-only subagent controls risk being inaccessible to future cloud/remote clients. The issue calls for explicit parity between terminal UI and programmatic control surfaces.

- [#2492 不具备跨会话记忆](https://github.com/Hmbown/CodeWhale/issues/2492) — 5 comments  
  Users report the tool lacks persistent cross-session memory: it forgets previous sessions after restart and does not proactively read saved memory. Common complaint from ongoing workflow users.

- [#2984 v0.9.3: OpenAI Codex/ChatGPT OAuth route verification and usage display](https://github.com/Hmbown/CodeWhale/issues/2984) — 5 comments  
  Wants end-to-end verification of the OpenAI Codex/ChatGPT OAuth route before it can move from preview to supported. Relevant to provider reliability.

- [#4785 Dead-code sweep: 464 #[allow(dead_code)] attributes are hiding drift](https://github.com/Hmbown/CodeWhale/issues/4785) — 4 comments  
  Identifies 464 allow-dead-code attributes across 143 files that prevent the compiler from reporting drift. Strong signal that the codebase needs structural cleanup before v0.9.3/v0.9.4 stabilizes.

- [#1675 QUESTION: Chinese garbled characters in Agent real-time output](https://github.com/Hmbown/CodeWhale/issues/1675) — 4 comments  
  Real-time agent output displays garbled Chinese characters, affecting Obsidian/Word content generation. Recurring pain point for Chinese-language users.

## 4. Key PR Progress

- [#5135 release: Codewhale v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)  
  The v0.9.4 integration train, currently 77 commits ahead of `main`. Supersedes #5044 and contains the 2026-08-01 source candidate.

- [#5133 feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)  
  Adds `/v1/threads/{id}/goal` endpoints so managed clients can read and drive active goal state through the canonical runtime API.

- [#5132 Runtime API: expose verifier receipts and evidence beyond the aggregate counter](https://github.com/Hmbown/CodeWhale/pull/5132)  
  Adds read-only endpoints under `/v1/fleet/runs/{run_id}/` for receipts and task evidence, enabling better failure diagnosis and retry decisions.

- [#5130 feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)  
  Introduces POST/DELETE style mutation routes for MCP servers instead of forcing clients to edit TOML/JSON directly.

- [#5131 feat: Runtime API memory endpoints — bounded inspection and lifecycle controls](https://github.com/Hmbown/CodeWhale/pull/5131)  
  Adds `/v1/memory` routes for inspecting memory scope/provenance and applying lifecycle controls, all behind the runtime token middleware.

- [#5129 feat(runtime-api): add skill lifecycle endpoints — install, update, uninstall, trust, audit](https://github.com/Hmbown/CodeWhale/pull/5129)  
  Brings the full skill lifecycle to the HTTP API, matching what the TUI already offers.

- [#5225 feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)  
  Critical for ACP clients: `session/prompt` now executes tool calls instead of streaming text only, enabling real code editing from Zed and community ACP adapters.

- [#5192 fix(tui): pin ratatui to 0.30.0](https://github.com/Hmbown/CodeWhale/pull/5192)  
  Pins `ratatui` and `ratatui-core` to avoid a blocking cursor position report race introduced in ratatui-core 0.1.1+.

- [#5231 style(tui): clear deny-level clippy lints blocking the v0.9.4 train](https://github.com/Hmbown/CodeWhale/pull/5231)  
  Fixes 30 deny-level clippy lints across `codewhale-tui` bin and test targets, unblocking the train-to-main PR.

- [#5228 refactor(tui): rail unification stack (rebased onto train)](https://github.com/Hmbown/CodeWhale/pull/5228)  
  Rebases a 12-commit rail-unification refactor onto the v0.9.4 release train, consolidating TUI panel/rail architecture.

## 5. Feature Request Trends

- **Provider and registry expansion**  
  Users want broader integration: the Agent Client Protocol registry ([#3192](https://github.com/Hmbown/CodeWhale/issues/3192)), OpenCode Go/Zen ([#1481](https://github.com/Hmbown/CodeWhale/issues/1481)), OAuth2.1 support for MCP servers ([#1409](https://github.com/Hmbown/CodeWhale/issues/1409)), and `winget` packaging ([#1561](https://github.com/Hmbown/CodeWhale/issues/1561)).

- **Runtime API and lifecycle management**  
  The v0.9.4 PR stack shows a clear direction: expose goals, memory, MCP servers, skills, and verifier evidence over HTTP so managed clients and Fleet workers do not depend on the TUI.

- **Safer autonomous execution**  
  Repeated requests for `/stop`, universal Cancel/Pause/Resume hooks ([#1917](https://github.com/Hmbown/CodeWhale/issues/1917)), permission profiles, and nonblocking execution defaults ([#3211](https://github.com/Hmbown/CodeWhale/issues/3211)).

- **Chinese and Windows UX improvements**  
  Chinese IME compatibility ([#2323](https://github.com/Hmbown/CodeWhale/issues/2323)), garbled output ([#1675](https://github.com/Hmbown/CodeWhale/issues/1675)), Windows Terminal as default launch ([#1854](https://github.com/Hmbown/CodeWhale/issues/1854)), and simplified Chinese documentation ([#5229](https://github.com/Hmbown/CodeWhale/pull/5229)).

- **Memory and context persistence**  
  Cross-session memory ([#2492](https://github.com/Hmbown/CodeWhale/issues/2492)) and a structured compaction survival contract ([#4394](https://github.com/Hmbown/CodeWhale/issues/4394)) reflect user anxiety about losing context.

## 6. Developer Pain Points

- **Chinese input/rendering friction**  
  IME composition leaks into command input, and real-time Chinese output is sometimes garbled. These issues block daily use for Chinese-speaking developers.

- **Windows environment issues**  
  Commands fail because the model assumes PowerShell or cmd incorrectly ([#1754](https://github.com/Hmbown/CodeWhale/issues/1754)); raw `.exe` launch degrades terminal rendering ([#1854](https://github.com/Hmbown/CodeWhale/issues/1854)); linker paths with spaces break OpenHarmony builds ([#5095](https://github.com/Hmbown/CodeWhale/pull/5095)).

- **No reliable cross-session memory**  
  The tool is fast but forgets previous sessions, making long-running projects feel stateless.

- **Cannot reliably interrupt autonomous workflows**  
  Text commands like `stop` are ignored when the model is in YOLO/autonomous mode, creating a safety and control gap.

- **Missing MCP OAuth2.1 support**  
  Users cannot connect OAuth2.1-protected MCP servers, limiting real-world service integration.

- **Architecture debt hidden by dead code**  
  464 `#[allow(dead_code)]` attributes and duplicate runtime managers make refactoring and reliability work harder than necessary.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*