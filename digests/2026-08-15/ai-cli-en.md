# AI CLI Tools Community Digest 2026-08-15

> Generated: 2026-08-14 23:11 UTC | Tools covered: 9

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
**Date: 2026-08-15**

## 1. Ecosystem Overview

The AI CLI developer-tools ecosystem remains in a hyper-iteration phase. Across eight tracked projects, the dominant themes are subagent orchestration (forking, delegation, and honest termination reporting), desktop-app stability (with Windows performance and process-management failures as the most widespread shared regression), and enterprise concerns around model catalog management, identity, and telemetry. Cost and quota transparency has emerged as a trust issue across Claude Code, OpenAI Codex, and Copilot CLI. Meanwhile, community demand is pushing all tools toward richer continuity features — memory, context compaction, and session restore — and more reliable MCP/platform integration. Release cadence is intense (five Codex alphas and three Qwen Code releases in one day), indicating strong competitive pressure.

## 2. Activity Comparison

| Tool | Releases (24h) | Issues (highlighted) | PRs (highlighted) | Discussions (highlighted) |
|---|---|---|---|---|
| Claude Code | 2 (v2.1.232, v2.1.233) | 8 (of 50 updated) | 4 | — |
| OpenAI Codex | 5 (alpha .14–.18) | 10 | 10 | 8 |
| Gemini CLI | 1 (nightly) | 10 | 10 | — |
| GitHub Copilot CLI | 2 (v1.0.80, v1.0.80-1) | 10 | 3 | — |
| OpenCode | 0 | 10 | 10 | — |
| Pi | 1 (v0.84.2) | 10 | 10 | 3 |
| Qwen Code | 3 stable/preview (plus nightly + e2e tags) | 10 | 10 | — |
| CodeWhale | 1 (v0.9.8) | 10 | 17 | 3 |
| DeepSeek Harness | 0 | 0 | 0 | N/A (no activity) |

Notes: counts reflect notable/highlighted items in each digest, not raw totals. Codex's five alphas carry generic release notes only. Qwen Code's release family also includes a nightly and four e2e-validation tags. DeepSeek Harness saw no activity in the window.

## 3. Shared Feature Directions

- **Subagent reliability & orchestration semantics** — Claude Code made subagent forking the default; Gemini CLI is fixing false "GOAL success" after MAX_TURNS and enabling agent-to-agent delegation; Codex is discussing task-board orchestration; Copilot CLI users report frozen subtasks in autopilot; Qwen Code is exposing valid subagent IDs in tool schemas. The common need: predictable delegation, honest termination reporting, and resumable child tasks.
- **Windows platform parity** — Codex desktop performance regressions (mouse lag, CPU busy loops, WMI exhaustion), Claude Code's Git Bash permission-prompt regression, Gemini's WSL2 clipboard and ripgrep issues, Pi's Windows/WSL gaps, and Qwen Code's Windows testing collectively make Windows the ecosystem's weakest platform.
- **Context continuity & compaction** — Codex's compaction drops operational steps; Claude Code's archived sessions cannot be unarchived; Gemini's Auto Memory retries low-signal sessions and leaks secrets pre-redaction; OpenCode's ID-timestamp wraparound wedged all pre-existing sessions; Qwen's large-session restore times out. Users want lossless, resumable long sessions.
- **MCP ecosystem hardening** — Copilot CLI's RFC 8414 OAuth issuer mismatches against Atlassian/GitLab, Claude Code's ignored >60s MCP timeouts, Codex's MCP discovery metrics, and Pi's pnpm extension-loader failures point to MCP interoperability as a key adoption blocker.
- **Model catalog & provider discovery** — Copilot CLI's org-enabled models missing from catalogs (#4390), OpenCode's `/v1/models` auto-discovery PR closing six issues, Pi's additions of SiliconFlow/Vertex/Bedrock/xAI providers, and CodeWhale's provider templates all signal demand for zero-config provider onboarding.
- **Review/autofix governance** — Qwen Code's round-aware convergence posture, CodeWhale's model-guardian tier and denial rationale, and Claude Code's silent workflow-review failures indicate a shift from "generate code" to "govern changes."
- **Cost & quota transparency** — Claude Code image-processing token waste (#60334) and Max 20x weekly-limit confusion, Codex rate-limit reset bugs, Copilot CLI BYOK prompt-cache invalidation, and OpenCode billing/credit confusion all erode trust in usage accounting.

## 4. Differentiation Analysis

- **Claude Code** is the most feature-complete enterprise agent: subagent forking with prompt-cache inheritance, GitLab MR support, identity-forwarding gateways, and desktop/VS Code parity. Its community is the largest and most cost-sensitive, with high engagement on UX ergonomics and billing correctness.
- **OpenAI Codex** is investing heavily in a Rust rewrite and desktop app while its community pushes for headless/daemon mode and remote control from mobile ChatGPT. Windows stability is its biggest near-term risk; the 5-alpha/day cadence signals aggressive iteration.
- **Gemini CLI** targets Google-infrastructure users with distinctive features like Auto Memory and skills; its roadmap emphasizes subagent recovery semantics, PTY/FD leak fixes, and browser-agent resilience — a reliability-focused posture.
- **GitHub Copilot CLI** is differentiated by enterprise GitHub integration: org policies, model catalogs, BYOK, and autopilot unattended mode. Its pain points (MCP OAuth strictness, stale model catalogs, autopilot OOMs) are enterprise-shape problems.
- **OpenCode** differentiates on provider flexibility and a V2 protocol; it absorbed a serious infrastructure incident (ID wraparound) this week and is responding with dynamic model discovery and per-tool execution timeouts. The community is builder-oriented and self-host friendly.
- **Pi** is architecturally the most extensible — extensions run unmodified on DeepSeek Harness (pi2dsh) and inside JetBrains via ACP (pi-acp-jetbrain). It positions itself as a harness/ecosystem rather than a single-vendor tool.
- **Qwen Code** focuses on review/autofix pipelines and a Web Shell frontend, with channel integrations (DingTalk) and a daemon/serve architecture. Development is heavily inward-facing (CI stabilization, architecture cleanup) but shipping steadily.
- **CodeWhale** is the smallest independent tool; its community drives DeepSeek-specific setups, plugin-ecosystem ambitions, and ACP registry listing, while maintainers fix CI assertion drift and TUI regressions — a young but energetic project.

## 5. Community Momentum & Maturity

- **Claude Code** has the highest raw engagement (50 issues updated/day; 147-👍 feature requests) and mature stewardship patterns — release notes, rapid hot-issue triage, and several closed threads per day. Momentum is high, but cost/compliance issues are accumulating.
- **OpenAI Codex** is iterating fastest by release count and shows strong discussion traction (188 👍 on the remote-control idea), but the cluster of Windows performance regressions (#20214, #34260, #38547, #38583) is a maturity red flag maintainers must clear.
- **Gemini CLI** exhibits disciplined reliability engineering — SSR PR batches closing P1 issues (subagent termination, TUI hangs, PTY leaks) — suggesting a maturing codebase even as nightly-only cadence signals caution about stability.
- **GitHub Copilot CLI** is shipping stable releases (1.0.80.x) and closing regression loops quickly, but multiple open enterprise-catalog issues indicate the server-side/policy integration surface is still rough.
- **OpenCode** maintains strong contributor momentum (model-discovery PR closing six issues) and resolved a critical availability incident within a day — evidence of a responsive maintainer team.
- **Pi** is steadily growing an ecosystem (pi2dsh with 39/50 top extensions mounting; JetBrains adapter), with a healthy mix of provider PRs, TUI fixes, and community Q&A. It is the most "portable" community of the group.
- **Qwen Code** ships the widest release family (stable + previews + nightly + e2e) and merges ~10 notable PRs/day, but CI/release flakiness (#9143, #9137) and architectural debt (#4063) suggest the codebase is expanding faster than its test infrastructure.
- **CodeWhale** shows the highest contributor-to-issue ratio (17 PRs) for its size, with rapid fixes for data-safety and panic paths; however, red CI on release day indicates a young project still institutionalizing release hygiene.
- **DeepSeek Harness** is dormant this window; watch for whether activity is cyclical or indicative of reduced investment.

## 6. Trend Signals

1. **Subagents are becoming a first-class runtime concern.** Default forking (Claude Code), agent-to-agent delegation (Gemini), and task-board orchestration proposals (Codex) point to hierarchical agent execution as the next architectural battleground.
2. **Windows is the weak underbelly of AI CLI tools.** Codex desktop stutter, Claude Code Git Bash prompts, Gemini WSL2 gaps, and Pi's Windows test failures show that cross-platform maturity — not model capability — is the current differentiator.
3. **Autonomous/headless operation is rising in importance.** Copilot autopilot, Codex daemon-mode requests, Qwen headless runs, and Pi's CLI-flags-only requests indicate users want unattended agents with crash safety, not just interactive chat.
4. **Cost and quota observability is a trust boundary.** Token-waste bugs, silent prompt-cache invalidation, and quota-reset errors are treated as correctness issues, not billing nits. Tools with deterministic cost accounting will earn disproportionate confidence.
5. **MCP interoperability is converging, painfully.** RFC 8414 strictness, timeout limits, schema normalization, and extension-loader isolation are the integration seams the ecosystem must standardize before MCP becomes a commodity layer.
6. **Enterprise model catalog management is broken everywhere.** Orgs enable models that never appear, stale caches persist, and "Copilot app" vs. "Copilot CLI" policy splits confuse users — a greenfield opportunity for identity-aware catalog sync.
7. **Memory and session persistence are the next killer features.** Codex's "memories" feedback solicitation, Gemini's Auto Memory privacy work, and Claude Code session-restore demand all point to durable memory as a key churn driver.
8. **Ecosystem portability is emerging via ACP.** Pi on JetBrains, CodeWhale's DeepSeek Harness bridge, and DeepSeek Harness running Pi extensions unmodified signal a market shift from siloed agents to interoperable agent harnesses.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights
**Data snapshot: 2026-08-15 · Source: github.com/anthropics/skills**

All referenced PRs remain **open** as of the snapshot date; the ranking below follows the repository's most-commented PR ordering.

---

## 1. Top Skills Ranking

**#1298 — skill-creator eval reliability fix** ⭐ Most-discussed PR
Fixes `run_eval.py`'s systemic 0% recall bug — the description-optimization loop was "optimizing against noise." The PR installs the eval artifact as a real skill and addresses Windows stream reading, trigger detection, and parallel workers. This is the community's most active fault line: the same bug is tracked in issue #556 (12 comments, 7 👍) with 10+ independent reproductions.
[github.com/anthropics/skills/pull/1298](https://github.com/anthropics/skills/pull/1298)

**#514 — document-typography skill**
Typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs (stranded section headers), and numbering misalignment. Directly targets a class of defects users rarely ask for but consistently encounter in Claude-generated output.
[github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)

**#486 — ODT / OpenDocument skill**
Create, fill, read, and convert OpenDocument files (.odt, .ods) with LibreOffice/ISO-standard coverage. Complements the existing office-format family (docx, pdf) and fills a clear format gap.
[github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)

**#210 — frontend-design skill overhaul**
Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is executable within a single conversation. Representative of the broader "make existing skills operational rather than educational" pressure (see issue #202).
[github.com/anthropics/skills/pull/210](https://github.com/anthropics/skills/pull/210)

**#83 — skill-quality-analyzer + skill-security-analyzer (meta-skills)**
Two meta-skills for the example-skills marketplace. The quality analyzer evaluates skills across five dimensions (structure & documentation 20%, examples, resources…); the security analyzer audits trust boundaries. High resonance given the security demand signal in issues.
[github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)

**#723 — testing-patterns skill**
Comprehensive testing stack coverage: Testing Trophy philosophy, what to test vs. not, AAA pattern, unit testing, React component testing with Testing Library, queries, and edge cases. One of the most broadly applicable new-skill proposals.
[github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)

**#568 — ServiceNow platform skill**
A broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub. The longest-lived active PR (Mar→Aug 2026), indicating sustained maintainer investment.
[github.com/anthropics/skills/pull/568](https://github.com/anthropics/skills/pull/568)

**#1367 — self-audit skill (v1.3.0)**
Mechanical file verification first (every claimed output file), then a four-dimension reasoning audit ordered by damage severity. Model-agnostic and universally applicable; paired with a fresh proposal issue (#1385) for a three-gate quality pipeline.
[github.com/anthropics/skills/pull/1367](https://github.com/anthropics/skills/pull/1367)

*Also drawing significant attention — reliability fix-PRs:* #538 (pdf case-sensitivity), #541 (docx `w:id` collisions with bookmarks), #539 (YAML unquoted-description warning), #1099 and #1050 (Windows subprocess/encoding bugs in skill-creator), #1538 (spec compliance for two skills). These are small, well-scoped fixes and are the likeliest to merge quickly.

---

## 2. Community Demand Trends

**Security & trust boundaries** — the strongest signal in the entire issue tracker. Issue #492 (43 comments) documents community skills distributed under the `anthropic/` namespace impersonating official Anthropic skills, creating a trust-boundary vulnerability that could trick users into granting elevated permissions.
[github.com/anthropics/skills/issues/492](https://github.com/anthropics/skills/issues/492)

**Reliable skill tooling & evaluation** — the skill-creator eval loop returning 0% recall (#556, 12 comments/7 👍; #1169) dominates developer pain. The community wants trustworthy evaluation before it can trust skill optimization.

**Enterprise sharing & collaboration** — issue #228 (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai, replacing the manual download/Slack/re-upload workflow.
[github.com/anthropics/skills/issues/228](https://github.com/anthropics/skills/issues/228)

**Agent memory & state management** — issue #1329 (9 comments) proposes a compact-memory skill using symbolic notation to reduce long-running agents' context spend on their own notes and persistent memory.
[github.com/anthropics/skills/issues/1329](https://github.com/anthropics/skills/issues/1329)

**Governance, safety & quality gates** — issue #412 proposes an agent-governance skill (policy enforcement, threat detection, trust scoring, audit trails), and issue #1385 proposes a reasoning quality-gate pipeline (pre-task calibration → adversarial review → delivery verification). Issue #1487 adds urgency: the `claude-api` skill injects ~156k tokens in one tool call, exhausting context.

**Reliability & duplicate-content friction** — issue #62 (10 comments) reports skills disappearing with errors; issue #189 (6 comments, 9 👍) reports `document-skills` and `example-skills` plugins installing identical content, doubling context-window cost.

**Platform integrations** — recurring interest in Bedrock compatibility (#29) and exposing Skills as MCPs (#16), plus SharePoint Online security/context concerns (#1175).

---

## 3. High-Potential Pending Skills

Actively-discussed PRs that may land soon:

| PR | Skill | Why it may land soon |
|---|---|---|
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Broad applicability, no dependencies, well-scoped scope |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform | Maintainer actively updating through Aug 2026 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | Fresh proposal momentum; versioned (v1.3.0) |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Small, high-value, universally relevant |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT / OpenDocument | Fills a format gap in the office family |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel retro game dev | Well-defined MCP workflow; updated Jul 2026 |
| [#83](https://github.com/anthropics/skills/pull/83) | quality/security analyzers | Aligns directly with #492 security demand |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | Addresses a named lifecycle gap (#1417) for accumulating planning artifacts |

The reliability fix-PRs (#538, #541, #539, #1099, #1050, #1538) are small and surgical — these are the strongest candidates for near-term merge.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand at the Skills level is for **trustworthy, production-grade Skill infrastructure** — reliable evaluation tooling, security/quality gates, and enterprise document and platform coverage — rather than creative or novelty skills.

---

# Claude Code Community Digest — 2026-08-15

## Today's Highlights

Two releases landed in the last 24 hours: **v2.1.232** makes subagent forking the default behavior, and **v2.1.233** adds GitLab merge request support plus an opt-in identity-forwarding gateway setting. Community attention is focused on cost/API reliability concerns, a Windows Git Bash permission-prompt regression tied to v2.1.232, and continued demand for keyboard/input UX improvements.

## Releases

See the [Claude Code releases page](https://github.com/anthropics/claude-code/releases) for details.

- **v2.1.233**
  - Added GitLab merge request URL support to `--worktree` and the `claude agents` view, where MRs display as `!N`.
  - Added an opt-in `forward_user_identity` apps gateway setting on Anthropic upstreams that forwards the signed-in user's identity as headers for proxies.

- **v2.1.232**
  - Subagent forking is now on by default: `subagent_type: "fork"` subagents inherit the full conversation and prompt cache.
  - Non-teammate agent spawns in interactive sessions now run in the background by default.
  - Type `@` in the prompt to mention another Claude session by name.

## Hot Issues

Out of 50 issues updated in the last 24 hours, these are the most noteworthy:

- [**#60334 — Image processing failures causing conversation token waste**](https://github.com/anthropics/claude-code/issues/60334)  
  Users report API errors removing "images" from conversations even when no image is present, burning significant quota. 73 comments and 19 👍 make it one of the most active cost/reliability complaints.

- [**#2054 — Option to insert a new line with Enter instead of sending**](https://github.com/anthropics/claude-code/issues/2054)  
  Long-running request with 147 👍 and 28 comments. Especially painful for CJK IME users, where Enter is used to confirm input and messages are accidentally sent too early.

- [**#30869 — Unarchive Claude Code sessions in desktop app**](https://github.com/anthropics/claude-code/issues/30869)  
  Closed feature request with 57 👍 and 29 comments. Session archiving without unarchive support is a significant desktop workflow gap.

- [**#27780 — Analytics Admin API does not return subscription/OAuth users**](https://github.com/anthropics/claude-code/issues/27780)  
  Enterprise admins cannot see usage for subscription/OAuth-based users in the Analytics Admin API. 26 comments and 23 👍 indicate strong demand for better admin observability.

- [**#16837 — MCP_TIMEOUT values longer than 60 seconds are ignored**](https://github.com/anthropics/claude-code/issues/16837)  
  Has repro on Linux. Users cannot configure MCP timeouts beyond 60 seconds, which breaks slower MCP servers. 15 comments and 16 👍.

- [**#82092 — Apps gateway OTLP endpoint missing `otlpHeaders`**](https://github.com/anthropics/claude-code/issues/82092)  
  Claude Desktop telemetry flush is rejected with `missing_token` because the gateway supplies a bearer-gated OTLP endpoint but no headers. Affects telemetry reliability for gateway deployments.

- [**#11791 — Browser automation tools incompatible with web sandbox proxy**](https://github.com/anthropics/claude-code/issues/11791)  
  Playwright, Puppeteer, and Selenium cannot run in the Claude Code web sandbox because HTTPS CONNECT tunneling is unsupported. 16 👍 and 11 comments; users want this documented or fixed.

- [**#86619 — Windows Git Bash static analysis false positives since 2.1.232**](https://github.com/anthropics/claude-code/issues/86619)  
  New regression: read-only `cd`-compound commands trigger constant, unsuppressible permission prompts. Onset correlates exactly with the v2.1.232 auto-mode rollout. 8 comments and 9 👍 in under a day.

- [**#79773 — Max 20x upgrade not reflected in weekly limits**](https://github.com/anthropics/claude-code/issues/79773)  
  Users report that upgraded weekly limits still deplete at the Max 5x rate or worse. Directly impacts trust in quota/billing transparency.

- [**#71992 — Cyber safety-filter false positive halting authorized work**](https://github.com/anthropics/claude-code/issues/71992)  
  Representative of a larger cluster of closed reports from the same author about cyber/AUP filters blocking legitimate drone-firmware analysis, reverse engineering, and local device work. The related issues were closed as duplicates/stale, but the underlying false-positive pain point remains notable.

## Key PR Progress

Only 4 PRs were updated in the last 24 hours; all remain open.

- [**#86746 — fix(security-guidance): preserve Python probe errors**](https://github.com/anthropics/claude-code/pull/86746)  
  Fixes #86709 by preserving stderr from Python interpreter probes and reporting diagnostics when all candidate interpreters fail, instead of hiding the real errors.

- [**#86626 — feat: add shell completions for bash, zsh, and fish**](https://github.com/anthropics/claude-code/pull/86626)  
  Adds tab-completion scripts for the `claude` CLI, including support for stock macOS bash 3.2 and an install README.

- [**#83890 — Create pylint.yml**](https://github.com/anthropics/claude-code/pull/83890)  
  Adds a GitHub Actions workflow to run pylint, presumably for CI linting hygiene.

- [**#41611 — add the missing source to claude code**](https://github.com/anthropics/claude-code/pull/41611)  
  Small PR adding a missing source reference; no further context was provided in the PR summary.

## Feature Request Trends

- **Input and editor UX**  
  High demand for configurable Enter behavior ([#2054](https://github.com/anthropics/claude-code/issues/2054)), disabling prompt suggestions ([#66117](https://github.com/anthropics/claude-code/issues/66117)), and collapsible long prompts in VS Code ([#72707](https://github.com/anthropics/claude-code/issues/72707)).

- **Session management and desktop/VS Code parity**  
  Users want archived sessions to be restorable ([#30869](https://github.com/anthropics/claude-code/issues/30869)) and a VS Code "Background Tasks" panel matching the desktop app ([#75863](https://github.com/anthropics/claude-code/issues/75863)).

- **Enterprise and observability**  
  Strong interest in broader Analytics Admin API coverage ([#27780](https://github.com/anthropics/claude-code/issues/27780)), identity forwarding through gateways (v2.1.233), and working OTLP telemetry configuration ([#82092](https://github.com/anthropics/claude-code/issues/82092)).

- **CLI ergonomics**  
  Shell completions for bash/zsh/fish ([#86626](https://github.com/anthropics/claude-code/pull/86626)) and more predictable shell behavior on Windows ([#86619](https://github.com/anthropics/claude-code/issues/86619)).

- **Sandbox and safety controls**  
  Users want browser automation support in the web sandbox ([#11791](https://github.com/anthropics/claude-code/issues/11791)) and fewer false-positive cyber/AUP blocks ([#71992](https://github.com/anthropics/claude-code/issues/71992)).

## Developer Pain Points

- **Cost and quota anxiety**  
  Image-processing errors can burn significant conversation window time ([#60334](https://github.com/anthropics/claude-code/issues/60334)), and upgraded plan limits sometimes appear not to take effect ([#79773](https://github.com/anthropics/claude-code/issues/79773)).

- **False-positive safety blocks**  
  Legitimate work on firmware, reverse engineering, and device tooling can still be halted by cyber/AUP filters, forcing users to file duplicates and work around interruptions ([#71992](https://github.com/anthropics/claude-code/issues/71992)).

- **Platform regressions**  
  Windows Git Bash users are facing constant permission prompts after v2.1.232 ([#86619](https://github.com/anthropics/claude-code/issues/86619)).

- **Silent failures**  
  Workflow-backed review posts can report success while the PR comment never appears ([#84474](https://github.com/anthropics/claude-code/issues/84474)), and Python probe errors were previously hidden from users ([#86746](https://github.com/anthropics/claude-code/pull/86746)).

- **Integration and timeout limitations**  
  MCP timeouts above 60 seconds are not honored ([#16837](https://github.com/anthropics/claude-code/issues/16837)), and browser automation does not work behind the web sandbox proxy ([#11791](https://github.com/anthropics/claude-code/issues/11791)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-15

## Today's Highlights

The Codex project shipped five Rust alpha releases today (`0.148.0-alpha.14` → `0.148.0-alpha.18`), though no release notes were attached. The community’s attention is heavily focused on Windows desktop performance regressions — mouse lag, CPU busy loops, and system-wide stutter in the latest `26.810.x` / `26.813.x` builds — while maintainers merged a large batch of cleanup and hardening PRs around Windows sandbox enforcement, TUI startup behavior, and MCP/Guardian configuration.

## Releases

- [rust-v0.148.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.18)
- [rust-v0.148.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.17)
- [rust-v0.148.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.16)
- [rust-v0.148.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.15)
- [rust-v0.148.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.14)

All five alpha tags only contain the generic “Release” note, so the actual changes need to be inspected via commit diffs. No stable release was published in the last 24 hours.

## Hot Issues

1. [Issue #20214 — Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources](https://github.com/openai/codex/issues/20214)  
   Long-running, high-signal Windows performance issue with 101 comments and 84 👍. Still open after several months; community reports repeated freezes even on capable hardware.

2. [Issue #34260 — Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)  
   A severe Windows-specific process-cleanup loop that spawns hundreds of `taskkill`/`conhost` processes and drains WMI provider quotas. The 35-comment thread suggests this is both a performance and reliability problem.

3. [Issue #29356 — Context compaction loses operational continuity in long Codex tasks](https://github.com/openai/codex/issues/29356)  
   Users report that automatic context compaction drops the last operational steps, making long-running tasks hard to resume. The request to “preserve the last 5 operational steps verbatim” has broad workflow implications.

4. [Issue #28855 — Codex Desktop causes intermittent system input lag on Windows](https://github.com/openai/codex/issues/28855)  
   Whole-system mouse and keyboard lag appears while Codex is open, even with clean logs and disabled plugins. 17 comments and 20 👍.

5. [Issue #22733 — Android ChatGPT remote connection to Windows Codex stuck on “Waiting for desktop…”](https://github.com/openai/codex/issues/22733)  
   Remote Codex sessions from Android fail to establish a connection, a major blocker for mobile workflows.

6. [Issue #35871 — Windows sandbox: CreateProcessAsUserW fails with error 5 when the resolved shell is the MSIX build of pwsh](https://github.com/openai/codex/issues/35871)  
   Packaged PowerShell cannot be launched under the restricted sandbox token. Affects Windows users who install PowerShell from the Microsoft Store.

7. [Issue #38547 — Codex Windows 26.810.4967 idle main-process CPU busy loop in app-server hashing](https://github.com/openai/codex/issues/38547)  
   New regression after update: Codex burns CPU while idle. Community quickly tied it to Electron main-process hashing behavior. 11 comments on the first day.

8. [Issue #38583 — Windows 11 / 26.813.12317: persistent system-wide mouse lag and ~10% CPU while idle](https://github.com/openai/codex/issues/38583)  
   Another fresh Windows performance regression, with users reporting that fully exiting Codex immediately fixes system responsiveness.

9. [Issue #35823 — logs_2.sqlite never reclaims freed pages; file grows monotonically](https://github.com/openai/codex/issues/35823)  
   SQLite `auto_vacuum=INCREMENTAL` is configured but never executed, so desktop logs grow without bound despite retention working. Important for long-term disk usage.

10. [Issue #38323 — Codex CLI 0.146.0: `/backend-api/codex/responses/compact` returns 404](https://github.com/openai/codex/issues/38323)  
    CLI context compaction is broken for some users on `0.146.0`, returning `404 {"detail":"Not Found"}`. Significant for developers relying on CLI session compaction.

## Key PR Progress

1. [PR #38660 — Enforce managed deny-read rules in the Windows sandbox](https://github.com/openai/codex/pull/38660)  
   Hardens Windows sandboxing by preserving filesystem deny rules across execution paths and failing closed on unsupported policies.

2. [PR #38651 — Move permission profile snapshots into the protocol](https://github.com/openai/codex/pull/38651)  
   Makes `PermissionProfileSnapshot` a protocol-level model, improving how permission state is stored and applied.

3. [PR #38645 — Deliver gRPC code-mode notifications without truncation](https://github.com/openai/codex/pull/38645)  
   Removes the previous 1,024-byte truncation limit for code-mode notifications, with tests for oversized multibyte text.

4. [PR #38634 — Add MCP protocol discovery metrics](https://github.com/openai/codex/pull/38634)  
   Adds counters/durations for MCP client discovery, tagged by `legacy` vs `auto` mode and outcome.

5. [PR #38630 — Remove the gRPC code-mode open session limit](https://github.com/openai/codex/pull/38630)  
   Allows more open sessions in gRPC code-mode while keeping in-flight/control limits intact.

6. [PR #38628 — Make Guardian v2 risk classification configurable](https://github.com/openai/codex/pull/38628)  
   Adds configurable classifier instructions, thresholds, token limits, and transcript controls for Guardian v2.

7. [PR #38647 — Add an override to skip project configuration](https://github.com/openai/codex/pull/38647)  
   Introduces `LoaderOverrides::ignore_project_config`, useful for environments where project-root discovery should be bypassed.

8. [PR #38642 — Keep the composer editable during TUI startup](https://github.com/openai/codex/pull/38642)  
   Shows a provisional composer while startup work runs, preserving text and cursor position.

9. [PR #38641 — Harden TUI startup input handling](https://github.com/openai/codex/pull/38641)  
   Prevents buffered terminal probes or partial control sequences from accidentally selecting/confirming actions during startup.

10. [PR #38639 — Render the initial TUI session header before input](https://github.com/openai/codex/pull/38639)  
    Fixes the TUI viewport so the session header is properly rendered before terminal input is processed.

## Hot Discussions

### Ideas

- [Discussion #9200 — Add the ability to remote control Codex from ChatGPT app](https://github.com/openai/codex/discussions/9200)  
  44 comments, 188 👍. The most popular feature idea right now: run Codex headless/daemon mode and drive it from mobile ChatGPT.

- [Discussion #12567 — Memories in Codex](https://github.com/openai/codex/discussions/12567)  
  OpenAI staff soliciting feedback on “memories” — how much users want Codex to cite previous threads when using memory.

- [Discussion #37045 — Proposal: Open, community-extensible taskboard and agent orchestration for Codex](https://github.com/openai/codex/discussions/37045)  
  Proposes issue boards, priorities, dependencies, and assignee-style orchestration on top of Codex.

### Q&A

- [Discussion #6109 — How can I create custom agents (e.g., Review, Test, Refactor) using the Codex CLI?](https://github.com/openai/codex/discussions/6109)  
  Answered thread about building specialized agent setups similar to Claude Code.

- [Discussion #38633 — Can `include_instructions` mute skills for Worker/Explorer?](https://github.com/openai/codex/discussions/38633)  
  User asking whether disabling skill instructions in subagent role configs still allows skills generally.

- [Discussion #38588 — Codex reads/writes incorrect files in workspace](https://github.com/openai/codex/discussions/38588)  
  User reports Codex is not honoring folder limits and instead reads/writes files outside the specified workspace.

### Show and tell

- [Discussion #38563 — Tiny Windows HUD for monitoring parallel Codex Desktop sessions](https://github.com/openai/codex/discussions/38563)  
  Community-built overlay that shows the state of multiple Codex Desktop sessions at the edge of the screen.

- [Discussion #38520 — Engineer Software: a bounded evidence-driven workflow for Codex software tasks](https://github.com/openai/codex/discussions/38520)  
  MIT-licensed Codex plugin that routes software work through bounded, evidence-driven modules before implementation.

## Feature Request Trends

- **Remote/mobile control for Codex** remains a top request: see [Discussion #9200](https://github.com/openai/codex/discussions/9200) and the related Android connection bug in [Issue #22733](https://github.com/openai/codex/issues/22733).
- **Persistence / memory across sessions** is a recurring theme: [Discussion #12567](https://github.com/openai/codex/discussions/12567), repository-aware task handoff in [Issue #34582](https://github.com/openai/codex/issues/34582), and context-compaction continuity in [Issue #29356](https://github.com/openai/codex/issues/29356).
- **Task orchestration and project management** ideas are appearing: [Discussion #37045](https://github.com/openai/codex/discussions/37045).
- **Per-project and per-chat environment selection** on Windows/WSL is requested in [Issue #36098](https://github.com/openai/codex/issues/36098), along with simpler navigation features like a `/cd` command in [Issue #38585](https://github.com/openai/codex/issues/38585).
- **Better client-side session controls** for the Chrome side panel were requested in [Issue #32610](https://github.com/openai/codex/issues/32610).

## Developer Pain Points

- **Windows desktop performance regressions dominate.** Users report stutters, mouse lag, CPU busy loops, and WMI exhaustion across the latest builds ([#20214](https://github.com/openai/codex/issues/20214), [#34260](https://github.com/openai/codex/issues/34260), [#38547](https://github.com/openai/codex/issues/38547), [#38583](https://github.com/openai/codex/issues/38583), [#38666](https://github.com/openai/codex/issues/38666)).
- **Context compaction is still unreliable.** Developers lose operational continuity, hit transport disconnects, or get 404 errors on the compact endpoint ([#29356](https://github.com/openai/codex/issues/29356), [#31375](https://github.com/openai/codex/issues/31375), [#38323](https://github.com/openai/codex/issues/38323)).
- **Windows sandbox compatibility is brittle.** The MSIX PowerShell issue ([#35871](https://github.com/openai/codex/issues/35871)) and lack of clean uninstall path ([#15343](https://github.com/openai/codex/issues/15343)) make Windows sandboxing hard to adopt.
- **Desktop app resource management needs work.** Monotonic SQLite log growth ([#35823](https://github.com/openai/codex/issues/35823)), high upload bursts during session resume ([#33796](https://github.com/openai/codex/issues/33796)), and IDE-triggered process storms ([#35775](https://github.com/openai/codex/issues/35775)) are all recurring complaints.
- **Rate-limit and usage-reset bugs keep appearing.** Users report weekly limits not resetting correctly ([#37442](https://github.com/openai/codex/issues/37442), [#38652](https://github.com/openai/codex/issues/38652)), which erodes trust in usage reporting.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-15

Generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity.

## Today's Highlights

A new nightly release adds context-aware silent retries and availability TTLs for capacity errors, alongside e2e test stabilization for slower CI runners. In parallel, a large batch of “SSR Agent” PRs closed several P1 reliability issues, including subagent termination misreporting and TUI hangs during initialization. Community discussion continues to focus on subagent reliability, shell-command hangs, and permission-control regressions.

## Releases

- [v0.56.0-nightly.20260814.gc0d192452](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260814.gc0d192452)
  - `test(e2e)`: stabilize file-system-interactive test on slow runners by @DavidAPierce ([PR #28793](https://github.com/google-gemini/gemini-cli/pull/28793))
  - `fix(core)`: implement context-aware silent retries and availability TTL for capacity errors ([PR #28761](https://github.com/google-gemini/gemini-cli/pull/28761))

No stable release was published in the last 24 hours.

## Hot Issues

- [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) — **Subagent recovery after MAX_TURNS is reported as GOAL success**. P1 bug with 12 comments. The `codebase_investigator` subagent signals success even when it hit the turn limit, hiding real interruptions from users.
- [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) — **Generalist agent hangs forever**. 8 comments, 8 👍. Even simple folder creation can hang for up to an hour; users report that telling the model not to defer to subagents avoids the issue.
- [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) — **Shell command execution gets stuck with “Waiting input” after command completes**. P1, 4 comments, 3 👍. Simple non-interactive commands remain visually active after finishing.
- [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) — **Gemini does not use skills and sub-agents enough**. 6 comments. Users with custom `gradle` and `git` skills report the model still won’t invoke them unless explicitly instructed.
- [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522) — **Stop Auto Memory from retrying low-signal sessions indefinitely**. 5 comments. Low-value sessions are never marked processed and keep being surfaced to the background extractor.
- [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525) — **Add deterministic redaction and reduce Auto Memory logging**. 4 comments. Transcript content is sent to the model before redaction happens, and existing skills can be logged unintentionally.
- [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232) — **Enhance browser_agent resilience: automatic session takeover and lock recovery**. 4 comments. Persistent browser sessions fail fast on locked profiles instead of recovering.
- [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983) — **Browser subagent fails on Wayland**. P1, 4 comments, 1 👍. The browser agent terminates with GOAL even while failing under Wayland sessions.
- [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093) — **(Sub)agents running without permission since v0.33.0**. 3 comments. Users with agents disabled in all configs still see subagent execution, indicating a permission regression.
- [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672) — **Agent should stop/discourage destructive behavior**. 3 comments, 1 👍. The model may use `git reset`, `--force`, or risky DB commands when safer alternatives exist.

## Key PR Progress

- [PR #28815](https://github.com/google-gemini/gemini-cli/pull/28815) — **Preserve original termination reason during subagent recovery**. Fixes [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) so `MAX_TURNS`/`TIMEOUT` isn’t misreported as `GOAL` success.
- [PR #28812](https://github.com/google-gemini/gemini-cli/pull/28812) — **Prevent indefinite TUI hang by adding execution timeouts**. Fixes [#21477](https://github.com/google-gemini/gemini-cli/issues/21477) for bare-Linux “Initializing...” hangs caused by slow `ps` subprocess calls.
- [PR #28816](https://github.com/google-gemini/gemini-cli/pull/28816) — **Fix silent hang in `MessageBus.request` when publish fails**. Fixes [#22588](https://github.com/google-gemini/gemini-cli/issues/22588). Previously a failed `publish()` left a floating promise and caused a 60-second hang.
- [PR #28817](https://github.com/google-gemini/gemini-cli/pull/28817) — **Retain executing subagent tool calls in hook state**. Fixes [#22589](https://github.com/google-gemini/gemini-cli/issues/22589) by ensuring background subagent tool calls are not dropped from hooks.
- [PR #20916](https://github.com/google-gemini/gemini-cli/pull/20916) — **Prevent PTY file descriptor leak in ShellExecutionService**. Fixes [#15945](https://github.com/google-gemini/gemini-cli/issues/15945). Long-running sessions could exhaust macOS PTYs.
- [PR #27154](https://github.com/google-gemini/gemini-cli/pull/27154) — **Prevent PTY memory leak by synchronously deleting active entries**. Complements the FD-leak fix by ensuring PTY entries are garbage-collected even when log-stream cleanup stalls.
- [PR #28738](https://github.com/google-gemini/gemini-cli/pull/28738) — **Allow agents to call agents**. Fixes [#22092](https://github.com/google-gemini/gemini-cli/issues/22092). Lets subagents delegate to other subagents, or recurse, via `tools:` frontmatter.
- [PR #25378](https://github.com/google-gemini/gemini-cli/pull/25378) — **Fix Windows ripgrep `spawn EFTYPE` error**. Fixes [#22784](https://github.com/google-gemini/gemini-cli/issues/22784) by validating downloaded binaries before `grep_search` executes them.
- [PR #27588](https://github.com/google-gemini/gemini-cli/pull/27588) — **Support WSL2 clipboard image paste**. Fixes [#22274](https://github.com/google-gemini/gemini-cli/issues/22274) by using PowerShell interop to read Windows clipboard images.
- [PR #28597](https://github.com/google-gemini/gemini-cli/pull/28597) — **Load environment variables before resolving settings placeholders**. Fixes a load-order race condition where `.env` values were not ready when user/workspace settings were expanded.

## Feature Request Trends

- **Subagent autonomy and recovery semantics**: Users want agents to invoke skills/subagents proactively and to delegate reliably across subagent boundaries. Representative: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968), [PR #28738](https://github.com/google-gemini/gemini-cli/pull/28738).
- **Safer and sandboxed shell execution**: Demand for OS-level sandboxing, post-execution intent routing, and guardrails against destructive `git`/DB commands. Representative: [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873), [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672).
- **AST-aware codebase tooling**: File reads, search, and codebase mapping should understand AST structure to reduce token noise and tool calls. Representative: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745), [Issue #22746](https://github.com/google-gemini/gemini-cli/issues/22746).
- **Browser agent resilience**: Persistent-session lock recovery, `settings.json` overrides, and Wayland support are all recurring asks. Representative: [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232), [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267).
- **Auto Memory quality and privacy**: Stop infinite retry loops, quarantine invalid patches, and redact secrets before sending transcript content to model context. Representative: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522), [Issue #26523](https://github.com/google-gemini/gemini-cli/issues/26523), [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525).
- **Platform compatibility**: More Windows/WSL2 fixes, including clipboard paste and ripgrep binary handling. Representative: [PR #27588](https://github.com/google-gemini/gemini-cli/pull/27588), [PR #25378](https://github.com/google-gemini/gemini-cli/pull/25378).
- **Smarter tool-scope management**: More than 128 available tools can trigger 400 errors; users want automatic scoping of relevant tools. Representative: [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246).

## Developer Pain Points

- **Subagent reliability remains the top frustration**: False “success” after `MAX_TURNS`, indefinite generalist-agent hangs, and missing subagent context in bug reports. Representative: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323), [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409).
- **Shell/PTY instability**: Commands stuck on “Awaiting user input,” PTY FD/memory leaks on long sessions, and deadlocks at interactive prompts (e.g., Vite scaffolding). Representative: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166), [PR #20916](https://github.com/google-gemini/gemini-cli/pull/20916), [Issue #22465](https://github.com/google-gemini/gemini-cli/issues/22465).
- **Permission-control regressions**: Subagents run even when disabled in configs, causing trust and safety concerns. Representative: [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093).
- **Auto Memory privacy and noise**: Secrets reach model context before redaction, and low-signal sessions are retried indefinitely. Representative: [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525), [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522).
- **Platform-specific sharp edges**: Windows `spawn EFTYPE` on ripgrep, WSL2 clipboard gaps, and terminal resize/flicker issues. Representative: [PR #25378](https://github.com/google-gemini/gemini-cli/pull/25378), [Issue #21924](https://github.com/google-gemini/gemini-cli/issues/21924).
- **Configuration and docs friction**: Symlinked agent files are ignored, `/clear` docs omit context reset, environment-variable placeholders race with `.env` loading, and browser agent overrides are not respected. Representative: [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079), [PR #28810](https://github.com/google-gemini/gemini-cli/pull/28810), [PR #28597](https://github.com/google-gemini/gemini-cli/pull/28597).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-15

## 1. Today's Highlights

The 1.0.80 release line landed with model-configuration updates and a quick hotfix (1.0.80-1), but the community conversation is dominated by two regression clusters: MCP OAuth failures (RFC 8414 issuer mismatches) against Atlassian and GitLab servers, and enterprise model-catalog issues where org-enabled Claude models remain unavailable or report as disabled. Autopilot reliability is also under scrutiny, with a fatal host-RAM OOM crash, frozen subtasks, and BYOK prompt-caching regressions all reported in the last 24 hours.

## 2. Releases

- **v1.0.80** (2026-08-14) — Update model configurations
- **v1.0.80-1** (2026-08-14) — Fixes and changes

Release notes are terse; the notable signal is that 1.0.79's OAuth/MCP regressions do not appear to be fully resolved in 1.0.80 (see #4490, #4480).

## 3. Hot Issues

1. **[#4345 — Reasoning effort 'medium' is not supported for 'claude-haiku-4.5'](https://github.com/github/copilot-cli/issues/4345)** [OPEN]
   When both `copilot_cli_opus_medium_effort_default` and `copilot_cli_gpt_5_4_mini_for_explore` flags are active, sub-agent execution fails repeatedly with an unsupported-reasoning-effort error. 6 comments, 4 👍 — a sign that server-side flag combinations are outrunning client model configs.

2. **[#4390 — Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5 and Kimi K3)](https://github.com/github/copilot-cli/issues/4390)** [OPEN]
   Models explicitly enabled by a Copilot Business org are absent from the effective catalogue; selecting `claude-sonnet-5` reports "disabled by your organization." 6 comments, 4 👍. Enterprise admins cannot use models they've already approved.

3. **[#4480 — Atlassian MCP OAuth fails with "Incompatible authorization server (RFC 8414 §3.3)" on 1.0.79](https://github.com/github/copilot-cli/issues/4480)** [CLOSED]
   Regression from 1.0.71; OAuth discovery against `mcp.atlassian.com` fails on issuer/metadata URL mismatch. The highest-reaction issue in 24h (6 👍) even though closed — users are waiting on the fix to land in a release.

4. **[#4422 — All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)** [OPEN]
   Personal Enterprise account loses all Claude models (sonnet 5, 4.8) despite appearing enabled in GitHub settings; persists across CLI version rollbacks, suggesting a server-side or policy-side cause. 3 👍.

5. **[#4439 — Copilot CLI 1.0.79 rejects GitLab MCP OAuth metadata with an RFC 8414 issuer mismatch](https://github.com/github/copilot-cli/issues/4439)** [OPEN]
   Same RFC 8414 §3.3 failure class as #4480, but against GitLab Self-Managed MCP servers using OAuth 2.0 Dynamic Client Registration. Broader pattern: the 1.0.79 OAuth client is too strict for real-world authorization servers.

6. **[#4499 — v1.0.79 fatal "Committing semi space failed" OOM in autopilot with V8 heap only ~0.6/4.3 GB](https://github.com/github/copilot-cli/issues/4499)** [OPEN]
   `copilot.exe` crashes with a JavaScript heap OOM even though heap usage was ~607 MB of 4.30 GB — a host-RAM commit failure, not a heap-limit hit. Long-running autopilot sessions on Windows are at risk of hard crashes.

7. **[#4500 — BYOK: autopilot nudge turn re-serializes previously-sent transcript items, breaking prompt caching](https://github.com/github/copilot-cli/issues/4500)** [OPEN]
   On the completion-nudge turn, the CLI rebuilds the whole `input` array from parsed internal state instead of resending prior items byte-for-byte. Item IDs survive but bytes change, silently defeating prompt caching for BYOK `responses` API users.

8. **[#4306 — Subtasks freeze and stop responding](https://github.com/github/copilot-cli/issues/4306)** [OPEN]
   In autopilot mode, `/fleet use speckit-automate implement skill` loops through multiple agents and eventually hangs mid-session with no further output. 3 comments, 2 👍. Multi-agent orchestration stability remains a pain point.

9. **[#4346 — MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN, blocking all non-default MCP servers in CI](https://github.com/github/copilot-cli/issues/4346)** [CLOSED]
   The documented PAT-less Actions setup (`copilot-requests: write`) fails the MCP registry policy fetch, so all non-default MCP servers are unusable in CI. 3 👍 — important for teams adopting the new tokenless flow.

10. **[#4494 — Newly enabled model remains unavailable until local Copilot state/cache/login is cleared](https://github.com/github/copilot-cli/issues/4494)** [OPEN]
    Sonnet 5 enabled in GitHub settings stays unavailable in CLI and VS Code until the local model catalog is manually reset. Complements #4390/#4422: both server-side and client-side catalog staleness are breaking enterprise model rollout.

## 4. Key PR Progress

1. **[#4497 — Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497)** [OPEN]
   Fixes the trusted invalid-label writer for fork-originated PR workflow runs where GitHub omits the pull-request association. Falls back to trusted workflow-run metadata and requires exactly one open PR match, preventing mislabeled writes.

2. **[#4449 — Migrate pull request automation away from pull_request_target](https://github.com/github/copilot-cli/pull/4449)** [CLOSED]
   Removes `pull_request_target` from invalid-label automation. Closes invalid issues with an issue-scoped write token, uses a no-permission `pull_request` signal for mergeable-PR handling, and runs privileged steps only when safe. A meaningful supply-chain hardening change for the repo's own CI.

3. **[#4496 — [canary] Verify pull request workflow migration](https://github.com/github/copilot-cli/pull/4496)** [CLOSED]
   Documentation-only draft PR used to validate the migrated fork-PR automation before deleting the temporary fork. Not intended for review; part of the #4449 rollout verification.

## 5. Feature Request Trends

- **Finer model reasoning control** — Users want explicit selection of reasoning effort/mode: `medium` support for Claude Haiku 4.5 (#4345) and a `reasoning.mode` parameter ("standard"/"pro") for GPT-5.6 (#4495).
- **Fresh model catalog without manual resets** — Multiple reports of newly enabled models not appearing until local cache/login state is cleared (#4494, #4390); users want automatic catalog refresh.
- **Plugin ecosystem infrastructure** — A dependency model for marketplace plugins (inter/intra-marketplace), automatic installation of plugin dependencies (#4487), and relief for file-lock conflicts during plugin updates (#4488).
- **MCP spec compliance** — Following `tools/list` pagination via `nextCursor` (#4006) and correct RFC 8414 OAuth discovery (#4480, #4439).
- **Session continuation polish** — Persisting the active agent across session resumes (#4489), `/restart` support for `-w` worktree sessions (#4493), and clearer repo-scoped `copilot-instructions.md` messaging (#4475).

## 6. Developer Pain Points

- **MCP OAuth regressions** — The RFC 8414 issuer-mismatch failure recurs across Atlassian and GitLab MCP servers in 1.0.79/1.0.80 despite working in 1.0.71/1.0.78 (#4480, #4439, #4490). This is the most consistent and disruptive recent regression.
- **Enterprise model gating is confusing and sticky** — Models enabled in org settings surface as "disabled," stale local caches persist after enablement, and the "Copilot app" vs. "Copilot CLI" policy split adds further confusion (#4390, #4422, #4481, #4494).
- **Autopilot mode is not yet trustworthy for long runs** — Fatal OOM at low heap usage (#4499), frozen subtasks (#4306), session/prompt loss on stop (#4477), and broken prompt caching for BYOK (#4500) all undermine unattended operation.
- **Permission UX regressions** — Edit-permission requests time out when sessions are left open overnight (#4486), and `allowed_directories` in `permissions-config.json` fails to suppress path prompts (#4482).
- **CI/auth friction** — MCP registry policy fetch 403s with the new tokenless `GITHUB_TOKEN` flow (#4346), and `GITHUB_TOKEN`-based authentication remains fragile for non-default MCP servers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 1. Today's Highlights

The biggest story is a **48-bit timestamp wraparound in opencode’s ID generator** (#42608) that silently wedged pre-existing sessions on 2026-08-14, matching the surge of “agent stopped responding” reports (#42605). Separately, community attention is split between a **Desktop v1.18.1 UI regression** that hides Plan/Build agent switching (#36997) and promising contributor work on **dynamic model discovery for custom providers** (#42660). No new release was published in the last 24 hours.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

- **[#42608 — 48-bit ID timestamp wraparound wedges all pre-existing sessions](https://github.com/anomalyco/opencode/issues/42608)**  
  Critical: all sessions created before `2026-08-14 12:39:55 UTC` stopped processing prompts due to timestamp wraparound in the ID generator. Closed with 3 👍 and 5 comments, and likely explains the related “agent stops responding” reports.

- **[#42605 — The session remains open, but the agent does not process subsequent prompts](https://github.com/anomalyco/opencode/issues/42605)**  
  Users report Desktop sessions becoming permanently unresponsive after a task completes. Open and actively discussed as a likely symptom of the timestamp issue above.

- **[#36997 — Desktop App v1.18.1 new layout hides agent (Plan/Build) switching UI](https://github.com/anomalyco/opencode/issues/36997)**  
  A widely upvoted UI regression (6 👍, 12 comments): the new layout hides the active-agent indicator and breaks Tab-based switching.

- **[#41518 — gpt-5.6-luna via OpenCode Go relay returns 403 “not available in your region”](https://github.com/anomalyco/opencode/issues/41518)**  
  Users hitting regional availability restrictions through the OpenCode Go relay; 6 comments, no maintainer resolution yet.

- **[#38791 — Run loop can never exit when message ids are not time-sortable](https://github.com/anomalyco/opencode/issues/38791)**  
  Imported sessions with non-chronological message IDs can put the run loop into an endless cycle until the provider returns 400. Important edge case for session portability.

- **[#37489 — Performance issue: Context cache invalidation when switching modes or during compaction](https://github.com/anomalyco/opencode/issues/37489)**  
  Local-LLM users report significant slowdowns caused by context-cache invalidation. Relevant for anyone using vLLM/Ollama with long sessions.

- **[#42657 — TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657)**  
  The TUI becomes nearly unusable with 2–4 concurrent subagents: 1–3 second typing delays and stuttering spinners across multiple terminals.

- **[#42385 — DeepSeek V4 Flash Free returns FreeUsageLimitError on OpenCode Zen](https://github.com/anomalyco/opencode/issues/42385)**  
  Authentication works but free-tier usage is rejected inconsistently. Frustrating for users relying on free models.

- **[#27553 — Feature: Auto-discover models from OpenAI-compatible providers](https://github.com/anomalyco/opencode/issues/27553)**  
  Highly requested (4 👍): users want `/v1/models` auto-discovery instead of manually listing models for Ollama, LM Studio, llama-swap, etc.

- **[#4581 — Feature: Ollama Cloud AUTH Login](https://github.com/anomalyco/opencode/issues/4581)**  
  Long-running feature request (14 comments) to use Ollama Cloud directly without a local/server Ollama instance. Closed but shows continued demand for cloud-provider auth support.

## 4. Key PR Progress

- **[#42660 — feat(provider): add dynamic model discovery for custom providers](https://github.com/anomalyco/opencode/pull/42660)**  
  Closes six related issues (#13891, #29308, #28999, #25624, #23327, #26863). Adds `/v1/models` auto-discovery for OpenAI-compatible providers.

- **[#42656 — refactor(protocol): move worktree routes out of experimental namespace](https://github.com/anomalyco/opencode/pull/42656)**  
  Promotes worktree APIs to stable top-level routes, e.g. `/api/worktree/:projectID`.

- **[#36869 — feat(opencode): per-tool execution timeout with abort + session recovery](https://github.com/anomalyco/opencode/pull/36869)**  
  Tools can hang the agent loop indefinitely; this adds configurable timeouts and session recovery for built-in and MCP tools.

- **[#36863 — feat(opencode): make webfetch response size limit configurable via env](https://github.com/anomalyco/opencode/pull/36863)**  
  Adds `OPENCODE_WEBFETCH_MAX_SIZE` for users who need larger webfetch payloads.

- **[#36862 — fix(desktop): validate openExternal URLs by protocol](https://github.com/anomalyco/opencode/pull/36862)**  
  Security fix: prevents dangerous protocols like `file://` and `javascript://` from being opened via `shell.openExternal`.

- **[#36861 — fix(session): recover cache tokens from openai-compatible metadata usage fallback](https://github.com/anomalyco/opencode/pull/36861)**  
  Better cache-token accounting for custom baseURL providers using OpenAI-compatible SDK metadata.

- **[#36860 — fix(opencode): strip MiniMax trailing tool_call leak suffix from assistant text](https://github.com/anomalyco/opencode/pull/36860)**  
  Fixes malformed MiniMax responses that append serialized tool-call artifacts to plain assistant messages.

- **[#36870 — fix(core): load documented provider packages](https://github.com/anomalyco/opencode/pull/36870)**  
  Accepts documented provider/model `package` and `settings` fields, and properly promotes `settings.baseURL` for OpenAI-compatible routes.

- **[#36883 — fix(core): expose valid subagent IDs to the model in the subagent tool](https://github.com/anomalyco/opencode/pull/36883)**  
  Stops models from guessing agent names like `explorer` by listing valid IDs directly in the tool schema.

- **[#36943 — fix(core): keep interrupted sessions stopped](https://github.com/anomalyco/opencode/pull/36943)**  
  Fixes race conditions in the V2 run coordinator so interrupted sessions don’t resume processing stale prompts.

## 5. Feature Request Trends

- **Automatic model discovery for OpenAI-compatible providers** — The strongest trend: users repeatedly request `/v1/models` auto-discovery (#27553, PR #42660).
- **Authentication and account configuration** — Requests include Ollama Cloud login (#4581) and making `OAUTH_CALLBACK_HOST` configurable (#33966).
- **Runtime permission controls** — Users want `/approve on|off` to toggle approval mode per session at runtime (#41909).
- **Performance and context management** — Context-cache invalidation (#37489) and TUI/subagent render performance (#42657) are recurring concerns.
- **Desktop/TUI UX refinements** — Restoring the Plan/Build agent switcher (#36997) and improving system-theme refresh behavior (#42635).

## 6. Developer Pain Points

- **Sessions becoming unresponsive or wedged** — The timestamp wraparound (#42608), non-time-sortable message IDs (#38791), and open “agent stops responding” reports (#42605) are causing significant trust issues.
- **Provider compatibility and gateway errors** — Region-blocked models (#41518), DeepSeek reasoning-content errors (#25000), GLM/Kimi tool-call failures (#42616, #41120), and free-tier quota inconsistencies (#42385) remain common.
- **UI/UX regressions** — The Desktop v1.18.1 layout hiding agent switching (#36997) and TUI lag under concurrent subagents (#42657) disrupt daily workflows.
- **Configuration friction** — Manual model list maintenance (#27553), undocumented flags like `OPENCODE_ENABLE_EXA` (#40568), and non-configurable OAuth callback hosts (#33966) add setup overhead.
- **Billing and credit confusion** — Reports of paid credits not being usable (#42637, #42606) and unclear free-tier rate-limit reset behavior (#42215) show friction in the Zen/Go monetization flow.


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-15

## 1. Today's Highlights
v0.84.2 shipped with a fullscreen transcript search mode and configurable default tools. The community is particularly focused on Windows support (#7547) and resolving auth/rate-limit pain points; meanwhile, multiple provider-oriented PRs are progressing, including SiliconFlow, Anthropic Vertex, and an xAI Responses API migration.

## 2. Releases
### [v0.84.2](https://github.com/earendil-works/pi/releases/tag/v0.84.2)
- **Fullscreen transcript search** — search and navigate matches in the TUI fullscreen viewport ([keybindings docs](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)).
- **Configurable default tools** — choose which tools are available at startup.

## 3. Hot Issues
1. [Issue #7547](https://github.com/earendil-works/pi/issues/7547) — [Windows] How do you use Pi on Windows? What issues are you seeing?  
   The most-commented open issue (27 comments). Maintainers are using the thread to decide where to focus Windows bug fixes/docs vs. delegating to extensions.

2. [Issue #6187](https://github.com/earendil-works/pi/issues/6187) — Pi login hangs in WSL after browser-based GitHub Copilot device authorization  
   Closed, but a major WSL workflow blocker: the terminal never detects completed auth despite the device successfully registering.

3. [Issue #5223](https://github.com/earendil-works/pi/issues/5223) — Anthropic provider modifies thinking blocks in latest assistant message, causing 400 with Opus 4.8 adaptive thinking  
   17 comments; closed. Multi-turn Claude sessions would fail mid-conversation with `invalid_request_error` when thinking blocks were rewritten incorrectly.

4. [Issue #5023](https://github.com/earendil-works/pi/issues/5023) — Terminal scrolls to beginning without reason  
   Closed. Random jumps to the session start and back to the end while the model is streaming eroded trust in the TUI.

5. [Issue #6665](https://github.com/earendil-works/pi/issues/6665) — TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild  
   Open and in-progress. Long sessions hit ~100% CPU from rendering alone, reproduced without extensions.

6. [Issue #7850](https://github.com/earendil-works/pi/issues/7850) — GitHub Copilot login fails with 429 for organizations with many models  
   Enterprise blocker: device auth succeeds, but login requests are rate-limited for orgs with 20+ available models.

7. [Issue #8096](https://github.com/earendil-works/pi/issues/8096) — Z.AI Coding Plan defaults reference a removed model  
   Closed quickly. Generated catalogs no longer contain `glm-5.1`, but `defaultModelPerProvider` still selected it.

8. [Issue #8092](https://github.com/earendil-works/pi/issues/8092) — Extension loader fails to resolve declared dependencies of extensions installed with pnpm  
   Closed. jiti’s resolver doesn’t handle pnpm’s isolated `node_modules` layout, breaking extension imports.

9. [Issue #8047](https://github.com/earendil-works/pi/issues/8047) — Pi Server tests fail to bind Unix sockets on Windows  
   Open. 31 tests fail because Unix-transport tests always try to bind filesystem sockets, hit `EACCES`, and block CI.

10. [Issue #7761](https://github.com/earendil-works/pi/issues/7761) — TUI copy shows "Copied!" but clipboard stays empty on VTE terminals  
    Closed. OSC 52 writes are not honored by GNOME Terminal/Tilix, so the TUI flashed a false success.

## 4. Key PR Progress
1. [PR #8113](https://github.com/earendil-works/pi/pull/8113) — Adds SiliconFlow as a built-in OpenAI-compatible provider.  
2. [PR #5262](https://github.com/earendil-works/pi/pull/5262) — Adds Anthropic Vertex provider, reusing the existing Anthropic Messages streaming path.  
3. [PR #6216](https://github.com/earendil-works/pi/pull/6216) — Adds Amazon Bedrock Mantle OpenAI Responses provider.  
4. [PR #8124](https://github.com/earendil-works/pi/pull/8124) — Routes xAI models through Responses API and changes default model to Grok 4.6.  
5. [PR #8139](https://github.com/earendil-works/pi/pull/8139) — Adds ChatGPT OAuth image generation transport.  
6. [PR #8120](https://github.com/earendil-works/pi/pull/8120) — Experimental append compaction: reuses active context, prompt cache, and routing session.  
7. [PR #8112](https://github.com/earendil-works/pi/pull/8112) — Realpath extension entries before jiti import; fixes pnpm extension loading (#8092).  
8. [PR #8110](https://github.com/earendil-works/pi/pull/8110) — Routes TUI selection copy through host clipboard, making "Copied!" truthful.  
9. [PR #8119](https://github.com/earendil-works/pi/pull/8119) — Tracks Kimi top-level `cached_tokens` as cache-read input usage.  
10. [PR #8146](https://github.com/earendil-works/pi/pull/8146) — Caps Baseten DeepSeek V4 Flash output at 384k tokens to match server limits.

## 5. Hot Discussions
### Show and tell
- [Discussion #8090](https://github.com/earendil-works/pi/discussions/8090) — **pi2dsh**: Pi extensions now run unmodified on DeepSeek Harness. Top-50 verified: 39/50 mount, 32/50 tested working.
- [Discussion #8142](https://github.com/earendil-works/pi/discussions/8142) — **pi-acp-jetbrain**: run Pi inside JetBrains IDEs via an Agent Client Protocol adapter.

### Q&A
- [Discussion #8136](https://github.com/earendil-works/pi/discussions/8136) — `$ref` in extension tool schemas breaks strict OpenAI-compatible providers (Dahl, LMSpeed, etc.). The community is requesting a schema-normalization workaround.

## 6. Feature Request Trends
- **Windows/WSL parity** — recurring requests for first-class Windows support, including server test fixes and WSL auth reliability (#7547, #8047, #6187).
- **Scripting and CI/CD usability** — several ask to run Pi with only CLI flags or environment variables, no config file (#8114).
- **Per-model configuration** — per-model compaction profiles and autocomplete positioning continue to be popular ideas (#8133, #8132).
- **Model catalog accuracy** — requests to sync default models and documented limits with actual provider servers (#8096, #8146, #8147).
- **Ecosystem portability** — Pi extension compatibility layers are generating interest: running unmodified Pi extensions in other harnesses and IDEs (#8090, #8142).

## 7. Developer Pain Points
- **Auth/rate-limit failures** — GitHub Copilot login is repeatedly hitting 429s for organizations and individual accounts (#7850, #8010).
- **Windows/WSL gaps** — terminal hangs, Unix-socket test failures, and unclear Windows launch options (#7547, #6187, #8047).
- **Clipboard integration** — OSC 52 writes are unreliable across VTE terminals; users see false "Copied!" feedback (#7761, #8110).
- **Extension loader/dependency issues** — pnpm’s isolated module layout breaks extension resolution (#8092, #8112).
- **TUI performance and rendering crashes** — streaming CPU spikes and large-diff rendering crashes disrupt long sessions (#6665, #8036).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-15

## Today's Highlights

Qwen Code shipped v0.21.12, adding Web Shell workspace file uploads and a diff-growth brake for autofix reviews, while preview/nightly builds continued to stabilize Web Shell session handling. Active development is strongly focused on review/autofix infrastructure — convergence posture, evidence capture, and pipeline defect repairs. Community-reported issues continue to center on session/daemon resource management, a new image-load regression, and CI/release flakiness.

## Releases

- [v0.21.12](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12) — Added Web Shell composer workspace file uploads via drag-and-drop or the `@` file panel, with progress tracking ([#8874](https://github.com/QwenLM/qwen-code/pull/8874)). Also implemented an autofix review diff-growth brake to limit runaway diffs.
- [v0.21.12-preview.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.4) / [v0.21.12-preview.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.3) — Both include `fix(web-shell): preserve standalone session target` and `feat(web-shell): support workspace file uploads`.
- [v0.21.11-nightly.20260814.45c2e73080](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260814.45c2e73080) — Nightly build carrying the same Web Shell session-target fix and workspace upload support.
- [dsw-eas-tb-e2e-20260814-r6](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-e2e-20260814-r6) / [r3](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-e2e-20260814-r3) / [r2](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-e2e-20260814-r2) / [r1](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-e2e-20260814-r1) — End-to-end validation builds for the SWE-bench Verified / Terminal-Bench pipeline; r6 reports a successful full E2E run, while earlier runs show infrastructure or validation caveats.

## Hot Issues

- [#8957 [Regression] Qwen Code crashes on image load since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957) — High-impact regression: image reading worked in 0.21.1 but crashes on newer versions. 12 comments; maintainers have added need-information/retesting labels.
- [#8678 fix(serve): Preserve current session when a large restore times out](https://github.com/QwenLM/qwen-code/issues/8678) — P1 session-management bug, closed as partially addressed/superseded. Shows how difficult large-session restore edge cases remain.
- [#8051 tracking(serve): Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051) — Count-only limits don’t bound bytes held by request bodies, WebSocket assembly, etc. 9 comments; important for production `qwen serve` users.
- [#4063 refactor: core + cli architecture review — 12 structural issues](https://github.com/QwenLM/qwen-code/issues/4063) — Flags `@google/genai` coupling across 136 files and other P0 structural problems. 8 comments; a long-running refactor discussion.
- [#9143 Main CI failed: E2E Tests on c5bf22247432](https://github.com/QwenLM/qwen-code/issues/9143) — Automated CI failure tracking. 7 comments; recurring pipeline instability continues to draw community attention.
- [#9002 SDK Python rejects permission_mode="auto" although the CLI supports it](https://github.com/QwenLM/qwen-code/issues/9002) — SDK/CLI parity bug where valid CLI options fail client-side validation in Python SDK.
- [#8582 security: read-only shell classifier auto-approves command substitution hidden by line continuation or ${var@P}](https://github.com/QwenLM/qwen-code/issues/8582) — P1 security bypass in the read-only shell classifier; closed but highlights shell-safety edge cases.
- [#9026 NO_TOOL_RESULT_PROGRESS hard-fails headless runs when a model ends a turn quietly after a tool result](https://github.com/QwenLM/qwen-code/issues/9026) — Breaks headless automation for legitimate quiet completions; a targeted fix is already in progress.
- [#8871 ACP child process fails with "Unknown argument: acp" in qwen serve mode](https://github.com/QwenLM/qwen-code/issues/8871) — ACP mode in `qwen serve` is broken, causing token auth failures; 5 comments.
- [#2128 Memory grows unboundedly during long sessions — UI History accumulates without limit](https://github.com/QwenLM/qwen-code/issues/2128) — P1 memory leak in long-running sessions; the UI History array never shrinks.

## Key PR Progress

- [#9196 fix(core): accept quiet post-tool-result completions after retry exhaustion](https://github.com/QwenLM/qwen-code/pull/9196) — Directly targets the `NO_TOOL_RESULT_PROGRESS` headless failure in #9026.
- [#9127 feat: support session media references end-to-end](https://github.com/QwenLM/qwen-code/pull/9127) — Adds session-scoped media IDs and metadata across daemon, ACP bridge, TypeScript SDK, and Web Shell.
- [#9175 fix(review): repair seven pipeline defects found by live runs](https://github.com/QwenLM/qwen-code/pull/9175) — Structural fixes for review pipeline issues discovered by running complete reviews against live PRs.
- [#9118 feat(review): adopt a round-aware convergence posture for posted findings](https://github.com/QwenLM/qwen-code/pull/9118) — Raises the posting bar as review rounds accumulate, helping review→fix loops converge.
- [#9027 feat(cli): plain-prose /review comments; severity markers follow review.attribution](https://github.com/QwenLM/qwen-code/pull/9027) — Makes posted review comments more readable and separates phrasing from severity metadata.
- [#9096 feat(review): absorb prose gh commands into platform-backed subcommands](https://github.com/QwenLM/qwen-code/pull/9096) — Replaces raw `gh` commands in review prompts with first-class subcommands for repo resolution and head-SHA fetching.
- [#9082 fix(ci): force-push release branch so retries replace failed attempts](https://github.com/QwenLM/qwen-code/pull/9082) — Fixes release retries failing when a stale per-release branch remains on the remote.
- [#9049 feat(channels): add DingTalk Workspace channel](https://github.com/QwenLM/qwen-code/pull/9049) — New built-in channel supporting DMs, mentions, docs, todos, and source-scoped sessions via existing DWS CLI profile.
- [#9122 feat(web-shell): improve sidebar session management](https://github.com/QwenLM/qwen-code/pull/9122) — Adds hover details, folder previews, overflow-aware titles, and clearer running-session indicators.
- [#9171 fix(devx): fail with actionable message when unit-test build prerequisites are missing](https://github.com/QwenLM/qwen-code/pull/9171) — Vitest globalSetup guard that explains missing `dist/` outputs clearly instead of failing cryptically.

## Feature Request Trends

- **Web Shell as a richer frontend**: workspace file uploads, session media references, sidebar session management, Goal v3 controls, an [Electron host evaluation](https://github.com/QwenLM/qwen-code/issues/9168), and [HTML export via WebShellTranscript](https://github.com/QwenLM/qwen-code/issues/9186).
- **Review/autofix maturity**: round-aware convergence, [capture-tui evidence images](https://github.com/QwenLM/qwen-code/pull/8894), typed deferrals, [runner-level isolation for PAT-bearing jobs](https://github.com/QwenLM/qwen-code/issues/9089), and [growth-divergence comparability windows](https://github.com/QwenLM/qwen-code/issues/9114).
- **More channels/providers**: DingTalk Workspace channel, Kimi and Xiaomi MiMo auth providers, and continued third-party platform integration.
- **Daemon resource governance**: byte-aware buffer limits, bounded memory use, and safer session restore behavior for long-running / multi-workspace `qwen serve`.
- **Architecture cleanup**: reduce `@google/genai` coupling, make `utils/` a leaf layer, and remove ACP integration dependencies on serve internals.

## Developer Pain Points

- **CI/release flakiness**: Multiple "Main CI failed" issues ([#9143](https://github.com/QwenLM/qwen-code/issues/9143), [#9159](https://github.com/QwenLM/qwen-code/issues/9159), [#9160](https://github.com/QwenLM/qwen-code/issues/9160)) plus a failed release workflow ([#9137](https://github.com/QwenLM/qwen-code/issues/9137)).
- **Memory/resource growth**: Unbounded session history ([#2128](https://github.com/QwenLM/qwen-code/issues/2128)) and insufficient daemon resource caps ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)).
- **Security edge cases**: Shell classifier bypasses ([#8582](https://github.com/QwenLM/qwen-code/issues/8582)) and autofix PAT exposure risks ([#9089](https://github.com/QwenLM/qwen-code/issues/9089)).
- **SDK/CLI parity gaps**: `permission_mode="auto"` rejected by Python SDK ([#9002](https://github.com/QwenLM/qwen-code/issues/9002)) and Shell ignoring `truncateToolOutputThreshold` ([#8922](https://github.com/QwenLM/qwen-code/issues/8922)).
- **Headless/automation breakages**: Quiet post-tool-result completions failing headless runs ([#9026](https://github.com/QwenLM/qwen-code/issues/9026)) and ACP child process failure in serve mode ([#8871](https://github.com/QwenLM/qwen-code/issues/8871)).
- **Review pipeline roughness**: Defects found only through live runs ([#9175](https://github.com/QwenLM/qwen-code/pull/9175)), deferred findings, and imprecise test pins ([#9044](https://github.com/QwenLM/qwen-code/issues/9044)).

*No Discussion data was provided; the Hot Discussions section is omitted.*

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

## CodeWhale Community Digest — 2026-08-15

### Today’s Highlights

v0.9.8 shipped in the last 24 hours, with the release notes confirming the lowercase `codewhale` technical branding and the deprecation of the legacy `deepseek-tui` npm package. The immediate post-release focus is on CI assertion drift and two P0 surface issues: the public web UI is reported as “totally broken,” and several macOS users see corrupted agent text in the TUI. Contributor momentum is high — PRs for local DS4 setup, Auto-Review hardening, and state/data-safety fixes all landed in the same window.

### Releases

- **[v0.9.8](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.8)** — Published in the last 24 hours. Release notes restate that `codewhale` is the public product from Shannon Labs, that all technical identifiers remain lowercase, and that the legacy `deepseek-tui` npm package is deprecated with no further releases. Surrounding v0.9.8-cycle work adds first-class local DS4 setup, a model-guardian tier for Auto-Review, Moonshot schema degradation, and several TUI rendering/state fixes.

### Hot Issues

- [#5374 – The writing its weird (the agent)](https://github.com/Hmbown/CodeWhale/issues/5374)  
  macOS user reports agent output is corrupted/unreadable while streaming. This is a core TUI usability blocker; the reporter praises the project but cannot read the agent’s text.

- [#5370 – P0: web UI looks broken — audit and rebuild look/features against harness references](https://github.com/Hmbown/CodeWhale/issues/5370)  
  Maintainer reports the public web UI is “totally broken” in both look and feature surface. Scoping currently separates the public `web/` Next.js app from the managed CWC product.

- [#5383 – main is red on v0.9.8: cli provider-count assertions still hold the pre-release numbers](https://github.com/Hmbown/CodeWhale/issues/5383)  
  CI failure on `main`: provider-count assertions expect 43 registry kinds, but v0.9.8 ships 45. Red main blocks contributor work; the fix PR is already open.

- [#5324 – agent tool: simplify the 32-field schema so models stop erroring on it](https://github.com/Hmbown/CodeWhale/issues/5324)  
  The model-facing `agent` tool has 32 properties, zero required fields, eight actions, and a parser accepting alias bags. This schema complexity is causing model-side errors; follow-up work like #5369 is starting to address it.

- [#5322 – Regression: output area doesn't fill wide terminals (worked in v0.8.65)](https://github.com/Hmbown/CodeWhale/issues/5322)  
  v0.9 caps the transcript/output area at a max width, leaving wasted space on wide monitors. Users want the v0.8 behavior restored.

- [#1004 – feat(commands): /dryrun — preview the next chat completion request without sending it](https://github.com/Hmbown/CodeWhale/issues/1004)  
  For long DeepSeek V4 Pro turns, users want to inspect exactly what will be sent — system prompt, cached repo files, tools, attached @mentions — before paying for the request. 9 comments show strong interest.

- [#5350 – Simplify third-party model config with pre-built templates](https://github.com/Hmbown/CodeWhale/issues/5350)  
  Setting up OpenCode Zen, OpenCode Go, Agnes, and Sensenova requires manual Base URL/model/key config, and models often stay stuck in `not checked` / `cache failed`. Requests: built-in templates, embedded docs, and a “test connection” button.

- [#5293 – TUI: make deny-by-default approval selection configurable and clearly explained](https://github.com/Hmbown/CodeWhale/issues/5293)  
  v0.9.4 changed the default highlighted option in the TUI permission dialog. Users worry about accidentally denying actions when intending to approve; the ask is a configurable default.

- [#4326 – Perf: explain and bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326)  
  High fan-out is responsive, but RSS increases after cancellation instead of settling. Maintainers need to distinguish allocator retention from a real worker/runtime leak.

- [#3192 – Put it up for agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)  
  Listing CodeWhale in the ACP registry would make it much easier for Zed to install and use. At 13 comments, this is the most active open issue in the current batch — a clear sign of ecosystem demand.

### Key PR Progress

- [#5365 – feat(provider): add first-class local DS4 setup](https://github.com/Hmbown/CodeWhale/pull/5365)  
  Adds `/setup provider ds4`, `/provider setup ds4`, and a `D` provider-picker shortcut that opens a prefilled keyless loopback preset, reusing the OpenAI-compatible transport.

- [#5353 – feat(tui): model guardian tier for Auto-Review (v0.9.8)](https://github.com/Hmbown/CodeWhale/pull/5353)  
  Auto-Review becomes a true two-layer mode: a non-bypassable deterministic floor plus a one-shot “model guardian” escalation instead of silent blocking.

- [#5358 – feat(engine): auto-review denial rationale + turn circuit breaker](https://github.com/Hmbown/CodeWhale/pull/5358)  
  Denied Auto-Review actions now include rationale, and a circuit breaker prevents the model from re-attempting the same denied action until the step budget is exhausted.

- [#5364 – feat(tui): render markdown blockquotes with a quote rail](https://github.com/Hmbown/CodeWhale/pull/5364)  
  Adds proper blockquote rendering in the TUI transcript with support for nesting, inline formatting, wrapping, and selection-copy behavior.

- [#5369 – fix(tools): degrade Moonshot schemas instead of refusing conditionals](https://github.com/Hmbown/CodeWhale/pull/5369)  
  Sends Moonshot a safer downgraded schema rather than failing on conditional schemas. This is also a prerequisite for the larger #5324 schema simplification.

- [#5382 – fix(state): serialize session-index writes to prevent silent data loss](https://github.com/Hmbown/CodeWhale/pull/5382)  
  `session_index.jsonl` append/rewrite/rename operations now run inside the same `Arc<Mutex<Connection>>` that guards SQLite writes, closing a concurrent-clone data-loss race.

- [#5381 – fix(hooks): do not panic when webhook HTTP client fails to build](https://github.com/Hmbown/CodeWhale/pull/5381)  
  Replaces the `.expect("build fallback HTTP client")` panic path with proper error propagation, avoiding a hard host crash on transient client-build failures.

- [#5376 – fix(tui): keep internal runtime events out of the session peek](https://github.com/Hmbown/CodeWhale/pull/5376)  
  Stops internal projection/runtime events from leaking into the user-visible session peek stream, with a repro included.

- [#5339 – fix(engine): suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339)  
  Filters child-owned background shell completion events out of the parent model stream while preserving parent completions and task/status visibility.

- [#5368 – fix(tui): confine unguarded tests to the isolated state root](https://github.com/Hmbown/CodeWhale/pull/5368)  
  Fixes four tests from #5359 by ensuring lock-holder tests cannot route to the real user environment. Test isolation is now enforced rather than assumed.

Also in flight: CI re-pins [#5384](https://github.com/Hmbown/CodeWhale/pull/5384) and [#5378](https://github.com/Hmbown/CodeWhale/pull/5378), plus dependency bumps for rusqlite, rmcp, thiserror, ratatui, and tower-http ([#5391](https://github.com/Hmbown/CodeWhale/pull/5391), [#5390](https://github.com/Hmbown/CodeWhale/pull/5390), [#5389](https://github.com/Hmbown/CodeWhale/pull/5389), [#5388](https://github.com/Hmbown/CodeWhale/pull/5388), [#5387](https://github.com/Hmbown/CodeWhale/pull/5387)).

### Hot Discussions

**General**

- [#5273 – In a galaxy far, far away - The Marker Strikes Again. 🌚](https://github.com/Hmbown/CodeWhale/discussions/5273)  
  A user shares long-context behavior from a 400K+ token session that eventually reached 548K tokens. 9 comments — mostly community commiseration about context-window pressure and model quirks.

**Q&A**

- [#5386 – Behavioural shift? How much? And Why?](https://github.com/Hmbown/CodeWhale/discussions/5386)  
  A user reports a “massive shift” in how CodeWhale operates compared with 3–4 weeks ago and asks how much is due to DeepSeek-v4-Flash versus CodeWhale’s own updates. No replies yet, but the question is likely to draw maintainer attention.

**Show and tell**

- [#5385 – codewhale-dsh: 把 DeepSeek Harness 变成 codewhale 的子 agent（MCP bridge + 官方 ACP）](https://github.com/Hmbown/CodeWhale/discussions/5385)  
  Community member shows how DeepSeek Harness can run as a CodeWhale sub-agent via MCP bridge + official ACP, with real-time output, permission prompts, cancellation, and token accounting.

### Feature Request Trends

- **Provider/model onboarding**: Pre-built third-party provider templates, built-in docs, “test connection” buttons, and first-class local DS4 setup are a clear theme ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350), [#5365](https://github.com/Hmbown/CodeWhale/pull/5365)).
- **Plugin ecosystem expansion**: Users want a Kimi-level plugin system, federated marketplaces, ACP registry listing, and deeper integrations like the DeepSeek Harness bridge ([#5311](https://github.com/Hmbown/CodeWhale/issues/5311), [#3192](https://github.com/Hmbown/CodeWhale/issues/3192), [#5385](https://github.com/Hmbown/CodeWhale/discussions/5385)).
- **TUI/UX polish**: Wide-terminal output, update notices with one-chord relaunch, localized web clickability, clearer sub-agent identity, and configurable approval defaults are all recurring asks ([#5322](https://github.com/Hmbown/CodeWhale/issues/5322), [#5053](https://github.com/Hmbown/CodeWhale/issues/5053), [#5290](https://github.com/Hmbown/CodeWhale/issues/5290), [#5287](https://github.com/Hmbown/CodeWhale/issues/5287), [#5293](https://github.com/Hmbown/CodeWhale/issues/5293)).
- **Predictability and review control**: Users want `/dryrun` request previews, model-guardian review layers, denial rationale, and structured compaction survival contracts ([#1004](https://github.com/Hmbown/CodeWhale/issues/1004), [#5353](https://github.com/Hmbown/CodeWhale/pull/5353), [#5358](https://github.com/Hmbown/CodeWhale/pull/5358), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394)).
- **Maintainability**: Simplifying the agent tool schema, sweeping dead-code attributes, and automating CI assertion re-pins are top maintainer-focused requests ([#5324](https://github.com/Hmbown/CodeWhale/issues/5324), [#4785](https://github.com/Hmbown/CodeWhale/issues/4785), [#5383](https://github.com/Hmbown/CodeWhale/issues/5383)).

### Developer Pain Points

- **CI/main breakage from stale hardcoded assertions**: Provider-count and reasoning-effort tests still pinned pre-v0.9.8 values, turning `main` red on multiple platforms ([#5383](https://github.com/Hmbown/CodeWhale/issues/5383), [#5377](https://github.com/Hmbown/CodeWhale/issues/5377)).
- **Model-facing tool schema complexity**: The 32-field `agent` schema and conditional Moonshot schemas cause model errors; developers are asking for smaller, degraded, and more forgiving schemas ([#5324](https://github.com/Hmbown/CodeWhale/issues/5324), [#5369](https://github.com/Hmbown/CodeWhale/pull/5369)).
- **TUI rendering and interaction regressions**: Corrupted agent text, capped output width, changed approval defaults, and internal runtime events leaking into user-visible surfaces create a rough v0.9 experience ([#5374](https://github.com/Hmbown/CodeWhale/issues/5374), [#5322](https://github.com/Hmbown/CodeWhale/issues/5322), [#5293](https://github.com/Hmbown/CodeWhale/issues/5293), [#5376](https://github.com/Hmbown/CodeWhale/pull/5376)).
- **Data safety and panic paths**: Unsynchronized session-index writes and a panicking webhook client builder can cause silent data loss or hard crashes; both were fixed this cycle ([#5382](https://github.com/Hmbown/CodeWhale/pull/5382), [#5381](https://github.com/Hmbown/CodeWhale/pull/5381)).
- **Memory stability after heavy fan-out**: RSS does not settle after cancelling a 32-worker storm, making it hard to distinguish allocator retention from a real leak ([#4326](https://github.com/Hmbown/CodeWhale/issues/4326)).
- **Provider config friction**: Manual third-party provider setup and mismatched model catalog limits continue to cost users setup and debugging time ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350), [#5373](https://github.com/Hmbown/CodeWhale/issues/5373)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*