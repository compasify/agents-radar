# AI CLI Tools Community Digest 2026-07-31

> Generated: 2026-07-31 01:46 UTC | Tools covered: 10

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
**Coverage window: 2026-07-31 (24h community digest data for 9 tools; Grok Build inactive)**

---

## 1. Ecosystem Overview

The AI CLI ecosystem is in a consolidation phase: no vendor shipped a major stable release in the last 24 hours, and activity concentrated in reliability hardening, security fixes, and architectural refactoring rather than net-new features. Community issues across all nine tools converge on the same themes — runaway token spend, untrustworthy subagent behavior, Windows instability, silent configuration regressions, and MCP/authentication interoperability gaps. The landscape is bifurcating: incumbents (Claude Code, Codex, Gemini CLI, Copilot CLI) are absorbing enterprise-scale support load, while newer entrants (OpenCode, Pi, CodeWhale) use the quiet window to reshape architecture (hot-reloadable plugins, remote session protocols, single-binary refactors). Grok Build is currently dormant.

## 2. Activity Comparison

Counts reflect hot issues and PRs surfaced as updated/significant within the last 24h per each community digest.

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Notes |
|------|:---:|:---:|:---:|-------|
| Claude Code | 10 | 1 (spam, closed) | None | High-severity cost-safety issues dominate (750,460-token post-kill bill, ugrep 4–17 GB memory blowup) |
| OpenAI Codex | 10 | 10 | None | Infrastructure PRs: sandbox event normalization, proxy policy, enterprise automation account auth |
| Gemini CLI | 10 | 10 | None | 10 targeted fixes incl. SSRF patch (CVSS 8.6), MCP OAuth refresh, capacity-exhaustion handling |
| GitHub Copilot CLI | 10 | 0 | v1.0.77, v1.0.77-0 | Shipped browser OAuth web flow; v1.0.76 regressions still echoing in community reports |
| Kimi Code CLI | 3 | 1 | None | Smallest signal; provider 429 blocks all usage; memory system request (#1283) continues |
| OpenCode | 10 | 10 | v1.18.10 | Modal model auto-discovery; v2 TUI momentum (hot-reload plugins, session/project open menu) |
| Pi | 10 | 10 | None | Remote session wire protocol + runtime-neutral client landing; markdown extension API shipped |
| Qwen Code | 10 | 10 | v0.21.1 nightly | Nightly cadence; credential-leak sanitizer fix (#8136); Goal v3 adopted in interactive TUI |
| CodeWhale | 10 | 10 | v0.9.2 finalized | Public release; monolithic-crate refactor and "context diet" EPICs ongoing |
| Grok Build | 0 | 0 | None | No activity in window |

## 3. Shared Feature Directions

**1. Cost/usage transparency and runaway-work protection** *(Claude Code, Codex, Copilot CLI, OpenCode, Kimi)*
- Claude Code: subagents kept running after kill and billed 750,460 tokens (#82104); no live usage visibility or spend cap.
- Codex: Pro 5-hour usage bucket disappeared from app and rate-limit API (#32707); status-line rate-limit tokens requested (#24080).
- Copilot CLI: credits consumed after all visible work completed (~97.8% usage, #4308/#4309); near-limit warnings requested (#4295).
- OpenCode: users locked out by "free limit" after subscribing; unclear promo-cost accounting.
- Kimi: provider HTTP 429 makes the CLI completely unusable (#2571).

**2. Subagent reliability, observability, and control** *(Claude Code, Codex, Gemini, Copilot, Qwen, CodeWhale)*
- Gemini: subagent reports `GOAL`/`success` despite hitting MAX_TURNS (#22323); subagents execute even when disabled (#22093); browser agent ignores `settings.json` overrides (#22267).
- Copilot: full-tool subagents silently return nothing (#4293); autopilot subtasks freeze in agent/skill loops (#4306).
- Claude: `TaskStop` on a parent doesn't terminate children (#82104); explicit sub-agent model control requested (#78217).
- Codex: evicted MultiAgentV2 subagents resume with the wrong parent model (#34821); capability metadata can reject valid subagents (#35097).
- Qwen: teammate messages queued for the entire duration of long multi-tool turns (#8172); host tool invocation guard added (#8032).
- CodeWhale: subagent/runtime control surfaces must not stay trapped in the TUI sidebar (#4022).

**3. MCP interoperability and OAuth dynamic client registration** *(Claude Code, Codex, Gemini, Copilot)*
- Codex: Slack MCP login fails with "Dynamic client registration not supported" (#13200); MCP tools serialized as `namespace` tools, blocking OpenRouter/Bedrock/local models (#26234).
- Gemini: MCP OAuth refresh now uses the stored client ID (#28481); `tools/list` discovery timeout prevents 10-minute startup freezes (#28410).
- Copilot: MCP `anyOf: [array, string]` unions stringified before reaching the server (#4301); excessive MCP servers linked to broken subagents (#4303).
- Claude: Cowork GitHub connector unusable because OAuth DCR unsupported (#59854).

**4. Windows and cross-platform desktop maturity** *(Codex, Qwen, OpenCode, Copilot, Kimi, Pi, CodeWhale, Claude)*
- Codex: desktop crashes in `CrBrowserMain` (#32683); MSIX package corruption via Code Integrity violations (#35681); PowerShell AST parser leaking ~185 GB (#29317).
- Qwen: three crashes on v0.21.1 (#7972); desktop app hangs with LM Studio (#8146); portable Windows test suite (#8050).
- OpenCode: 16-bit `opencode.exe` wrapper for nvm users (#37628); Windows desktop Ollama integration issues (#37762).
- CodeWhale: AltGr-typed `/` triggers help chord on ABNT2 keyboards (#4977); devcontainer HOME expansion fixed for Windows (#4990).
- Pi: input line redrawn per keystroke on Windows (#6300); Wayland clipboard paste fixed via `wl-paste` (#7261).
- Kimi: intermittent "spinning moon" freeze correlated with browser tab state on Windows 11 (#2570).
- Claude: ugrep memory blowup on Linux/WSL2 (#78834); macOS hooks never firing (#6305).

**5. Context/token efficiency and compaction reliability** *(Claude, Codex, Gemini, CodeWhale, Pi)*
- Claude: `/claude-api` skill spikes context ~77% unconditionally (#63566); `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` silently became a no-op (#82761).
- Codex: compaction repeatedly embeds full base64 images (#23257); some threads compact endlessly (#20983); forked threads persist full parent rollouts (#35647).
- Gemini: auto-compress chat history on context overflow (`model.autoCompressOnOverflow`, #28488).
- CodeWhale: "context diet" EPIC suite covering prompt dedup, hard budgets, and compaction survival contracts (#4704/#4707/#4709/#4710).
- Pi: model-catalog refresh stalls block `/scoped-models` and `/login` indefinitely (#7153, #7027).

**6. Security and agent guardrails as first-class features** *(Gemini, Qwen, OpenCode)*
- Gemini: SSRF via DNS resolution bypass in `web-fetch` (CVSS 8.6, #28555); CI/CD `workflow_run` supply-chain PoC (#28594).
- Qwen: provider-warning sanitizer truncates messages and leaks passwords containing `@` (#8136); proposal for deterministic tool-execution boundaries (#8102).
- OpenCode: plan mode bypasses write-tool restriction by using bash to create files (#39491).
- Gemini: requests for built-in guardrails against destructive commands like `git reset --force` (#22672).

**7. Persistent memory with workspace isolation** *(Kimi, Qwen, Gemini, Claude)*
- Kimi: long-running request for persistent cross-session memory (#1283, open since February).
- Qwen: workspace-qualified managed memory (`remember/forget/dream`, #8056); configurable background-agent turn limits (#8171).
- Gemini: Auto Memory retries low-signal sessions indefinitely (#26522); secret redaction ordering concerns.
- Claude: in-memory storage option for background task outputs to prevent disk leakage (#82734).

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|--------------|--------------|-------------------|
| Claude Code | Enterprise reliability & cost governance; hooks/skills/Cowork ecosystem | Enterprises, Max subscribers | Node/TS; broadest plugin/skill surface; heaviest cost-observability pain |
| OpenAI Codex | Sandbox correctness, Windows desktop, enterprise auth (automation accounts) | ChatGPT subscribers, enterprises | Rust; AGENTS.md conventions; app-server protocol expansion; sandbox event normalization |
| Gemini CLI | Agent behavior correctness, MCP auth lifecycle, model availability for all auth modes | Google/Gemini users, API-key users | TS/Node; deep Gemini model integration; Auto Memory; security-responsive |
| GitHub Copilot CLI | GitHub-native automation (autopilot, task tool), sandbox approvals, OAuth UX | GitHub Copilot subscribers | Rust; tight GitHub integration; fast release cadence with patch-regression risk |
| Kimi Code CLI | Minimal surface; provider-bound | Moonshot/Kimi users | Small community; reliability and memory gaps dominate |
| OpenCode | Open-source community TUI/desktop; provider-agnostic workflows | Self-hosters, local-model users, plugin authors | TS; v2 TUI with hot-reloadable plugins; web/desktop parity as open problem |
| Pi | Embeddable/remote sessions, extension API, terminal polish | Extension developers, embedded production use (screenpipe) | TS; new wire protocol + runtime-neutral client; render-only markdown hooks; provider edge-case whack-a-mole |
| Qwen Code | Nightly feature velocity, memory system, bilingual (CN/EN) community | Qwen users, CN enterprises | TS; Goal v3 lifecycle; Web Shell desktop packaging; fastest bug-fix loop |
| CodeWhale | Radical TUI UX (ocean, phase rail, delegate cards), single-binary consolidation | Power users seeking an alternative UX | Rust; staged monolith-crate refactor; explicit "context diet" research tracks |
| Grok Build | — | — | Dormant this cycle |

Structural takeaway: **Claude Code and Codex** carry the largest enterprise support burden (cost blasts, auth, Windows sandboxing). **Gemini CLI and Qwen Code** are investing most heavily in agent-behavior correctness and security fixes. **OpenCode, Pi, and CodeWhale** are using the quiet release window to reshape architecture — plugins, remote protocols, single binary — positioning for the next growth phase while incumbents stabilize.

## 5. Community Momentum & Maturity

**Mature, high-volume (demand-side strong, regression-prone):**
- **Claude Code** — largest community signal (530 👍 and 148 comments on mobile account switching), but zero meaningful PRs this cycle and ten unresolved high-severity issues. Momentum is demand-side, not contribution-side.
- **OpenAI Codex** — high engagement (66 👍 auth blocker, 58 👍 Slack MCP DCR) with steady infrastructure PR throughput (10). Windows desktop instability is the dominant support load.
- **Gemini CLI** — strongest fix velocity among incumbents: 10 targeted PRs addressing real hangs, OAuth refresh failures, a CVSS 8.6 SSRF, and preview-model access. Responsive security posture.
- **GitHub Copilot CLI** — shipping releases (v1.0.77) but v1.0.76 regressions (Rust type-conversion failure, log-level launch crash) show patch-release risk. Community engaged but frustrated.

**Rapidly iterating, architecture-first:**
- **OpenCode** — 10 PRs alongside v1.18.10: plugin hot-reload, session/project open menu, LAN provider discovery, session request hooks. Highest contributor momentum per community size.
- **Pi** — 10 PRs laying the foundation for remote and embeddable sessions (wire protocol, runtime-neutral client, harness shutdown lifecycle). Community is technically sophisticated (protocol design, extension isolation).
- **Qwen Code** — nightly release cadence; 10 PRs including security sanitizer fix, Goal v3, memory isolation, PR-autofix watcher. Fastest bug-fix-to-release loop; still paying down Windows/platform debt.
- **CodeWhale** — early but organized: public v0.9.2 just finalized, and the community is aligned on a v0.9.3 refactor (one binary, context diet). Small userbase, high signal-to-noise.

**Low activity:**
- **Kimi Code CLI** — only 3 issues and 1 PR; provider availability is the blocker. Community is small and reliability-focused.
- **Grok Build** — dormant; no community signal.

## 6. Trend Signals

1. **Token spend is now a safety issue, not just a cost issue.** The 750k-token post-kill billing incident (Claude), post-completion credit consumption (Copilot), and missing usage buckets (Codex) show developers being burned by invisible work. Expect spend caps, live usage meters, and "kill = kill" semantics to become table-stakes.

2. **Subagents are the new reliability frontier.** Across every tool, subagents misreport success, ignore disable flags, hang silently, or inherit the wrong model. The industry is shifting from "can agents do work?" to "can we trust agents to report what they actually did?" — expect subagent trajectory observability, deterministic execution boundaries, and host-level tool guards.

3. **MCP's OAuth DCR gap is a universal blocker.** Four independent tools (Claude Cowork, Codex, Gemini, Copilot) fail identically on dynamic client registration and namespace/union schema handling, especially with Slack and enterprise gateways. This is a standards-level opportunity for the MCP ecosystem.

4. **Windows is the least mature surface across the board.** From Chromium-level desktop crashes and MSIX corruption (Codex) to ABNT2 keyboard conflicts (CodeWhale) and LM Studio hangs (Qwen), every tool has Windows-specific failure modes. Vendors that treat Windows sandbox/packaging as first-class will differentiate significantly.

5. **Security incidents are shifting from model behavior to the toolchain itself.** SSRF in `web-fetch` (Gemini, CVSS 8.6), credential leakage in sanitizers (Qwen), `workflow_run` supply-chain PoCs, and plan-mode bash escapes (OpenCode) show the attack surface is now the agent's own tools and CI pipelines. Deterministic tool-execution boundaries and guardrails will become a growing investment area.

6. **Context/compaction mechanics are becoming a UX battleground.** Users consistently report context spikes, compaction loops, and opaque failures. Auto-compression on overflow (Gemini), context-diet EPICs (CodeWhale), and workspace-qualified memory (Qwen) point to a future where context management is an explicit, user-visible feature rather than an internal detail.

7. **Provider-agnostic and local/self-hosted workflows are gaining real demand.** LiteLLM proxy as a built-in provider, mDNS LAN discovery (OpenCode), LM Studio support (Qwen), and Bedrock Mantle (Pi) all signal that developers want the same CLI experience regardless of model backend — including local models and OpenAI-compatible proxies.

8. **Persistent memory with strict workspace isolation is the next competitive battleground.** Cross-session memory (Kimi), workspace-qualified managed memory (Qwen), Auto Memory correctness (Gemini), and in-memory background outputs (Claude) all address the same gap: remembering context without leaking data across projects. This is where the next round of differentiation will likely occur.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Source: github.com/anthropics/skills | Data as of 2026-07-31*

---

## 1. Top Skills Ranking

The comment-sorted PR list is unusually dominated by **skill-creator tooling fixes** rather than new Skills — a signal in itself. The most-discussed items:

**#1298 — skill-creator evaluation overhaul** · [PR #1298](https://github.com/anthropics/skills/pull/1298) · *Open*
Fixes the infamous `run_eval.py` bug where every skill description scores `recall=0%` regardless of content — by installing the eval artifact as a *real* skill, and patching Windows stream reading, trigger detection, and parallel workers. Discussion references Issue #556 (the "optimizing against noise" bug, 12 comments, 7 👍). This is the single most-commented PR and the flagship of a cluster of ~8 related skill-creator fixes (#538, #541, #539, #1099, #1050, #1323, #1261).

**#514 — document-typography skill** · [PR #514](https://github.com/anthropics/skills/pull/514) · *Open*
Typographic quality control for AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment — problems that affect nearly every multi-page document Claude generates.

**#486 — ODT skill** · [PR #486](https://github.com/anthropics/skills/pull/486) · *Open*
OpenDocument Format (.odt/.ods) creation, template filling, and ODT→HTML parsing. Triggers on "ODT/ODS/ODF/OpenDocument/LibreOffice" mentions and produces ISO-standard open-source documents.

**#210 — frontend-design skill revision** · [PR #210](https://github.com/anthropics/skills/pull/210) · *Open*
Full rewrite of the frontend-design skill for clarity and actionability. Goal: every instruction must be executable by Claude *within a single conversation*, with guidance specific enough to steer behavior without being prescriptive.

**#83 — skill-quality-analyzer + skill-security-analyzer** · [PR #83](https://github.com/anthropics/skills/pull/83) · *Open*
Two meta-skills: a quality analyzer scoring Skills across five dimensions (structure/docs 20%, examples, resources…), and a security analyzer. Directly anticipates the trust-boundary concerns raised in Issue #492.

**#723 — testing-patterns skill** · [PR #723](https://github.com/anthropics/skills/pull/723) · *Open*
Comprehensive testing-stack skill: Testing Trophy philosophy, what *not* to test, unit testing (AAA pattern, pure functions, edge cases), and React component testing with Testing Library and queries.

**#1367 — self-audit skill (v1.3.0)** · [PR #1367](https://github.com/anthropics/skills/pull/1367) · *Open*
Mechanical file-verification first (does every claimed output actually exist?), then a four-dimension reasoning audit in damage-severity order. Claimed to be universal across projects, stacks, and models.

**#1302 — color-expert skill** · [PR #1302](https://github.com/anthropics/skills/pull/1302) · *Open*
Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS), plus a "what to use when" color-space table (OKLCH for scales, OKLAB for gradients, CAM16 for perception).

---

## 2. Community Demand Trends

Distilled from the Issues list:

1. **Security & trust boundaries** — Issue #492 (43 comments, the most-commented issue by 3x) exposes that community Skills distributed under the `anthropic/` namespace impersonate official Anthropic Skills, enabling trust-boundary abuse and permission escalation. This is the community's loudest concern.
2. **Enterprise / org-wide sharing** — Issue #228 (16 comments, 8 👍) demands org-shared skill libraries instead of manual `.skill` file transfer via Slack/Teams.
3. **Skill-development tooling reliability** — Issues #556, #1169, #1061 form a cluster: `run_eval.py` never triggers skills (recall=0%), Windows subprocess/encoding breakage, and the optimizer loop "optimizing against noise."
4. **Context-window efficiency** — Issue #1487: the bundled `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting context. Reinforces Issue #202's complaint that skills read like developer docs rather than token-efficient operational instructions.
5. **Agent governance & long-running state** — Issue #412 (agent-governance safety patterns), #1385 (reasoning quality-gate pipeline), and #1329 (compact-memory symbolic notation for agent state, 9 comments) show demand for skills that manage agent behavior and memory over time.
6. **Deduplication / plugin hygiene** — Issue #189 (9 👍): `document-skills` and `example-skills` install identical content, flooding the context window with duplicate skills.
7. **Platform integration** — Issue #16 (Expose Skills as MCPs) and #29 (AWS Bedrock usage) remain open with steady interest.

---

## 3. High-Potential Pending Skills

All sampled PRs are **open** at collection time; these have the strongest discussion momentum and/or most recent activity, meaning they may land soon:

- **#1479 — plan-file-hygiene skill** · [PR #1479](https://github.com/anthropics/skills/pull/1479) · Updated 2026-07-27
  Addresses #1417: planning artifacts accumulate with no lifecycle. Explicitly collaborative — credits commenters for the "lifecycle gap" framing. Freshest active PR.
- **#1302 — color-expert skill** · [PR #1302](https://github.com/anthropics/skills/pull/1302) · Updated 2026-07-21
  Broad color-science coverage with practical decision tables; sustained discussion over 6 weeks.
- **#525 — pyxel skill (retro game development)** · [PR #525](https://github.com/anthropics/skills/pull/525) · Updated 2026-07-15
  Wraps `pyxel-mcp` for retro/pixel-art/8-bit game development: write → run_and_capture → inspect → iterate workflow.
- **#1367 — self-audit skill** · [PR #1367](https://github.com/anthropics/skills/pull/1367) · Updated 2026-07-02
  Mechanical verification + reasoning quality gate; companion proposal #1385 keeps the thread alive.
- **#723 — testing-patterns skill** · [PR #723](https://github.com/anthropics/skills/pull/723) · Updated 2026-04-21
  High-demand domain (testing) with a comprehensive scope; steady comment trail.
- **#486 — ODT skill** · [PR #486](https://github.com/anthropics/skills/pull/486) · Updated 2026-04-14
  Enterprise document-format coverage with clear triggers; one of the few "new capability" Skills in the top comment tier.
- **#514 — document-typography skill** · [PR #514](https://github.com/anthropics/skills/pull/514) · Updated 2026-03-13
  Narrow, universally applicable quality-control niche; high in the comments ranking.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is meta-level — making Skill development itself reliable, secure, and safe — with the top PR cluster fixing skill-creator's systematic `recall=0%` eval bug and the top issue demanding trust-boundary protection against community Skills abusing the `anthropic/` namespace, both outpacing demand for any individual end-user Skill.**

---

# Claude Code Community Digest — 2026-07-31

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the community surfaced several high-severity reliability and cost issues: a `TaskStop` bug that let subagents keep running past a kill signal and bill **750,460 tokens** ([#82104](https://github.com/anthropics/claude-code/issues/82104)), a memory explosion in the bundled `ugrep` engine that allocates 4–17 GB on a 64 KB file ([#78834](https://github.com/anthropics/claude-code/issues/78834)), and a silent regression where `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` stopped taking effect after 2026-07-14 ([#82761](https://github.com/anthropics/claude-code/issues/82761)). The most active thread remains the long-running request for multi-account switching in Claude Mobile ([#36151](https://github.com/anthropics/claude-code/issues/36151), 148 comments, 530 👍).

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

1. **Multi-account switching in Claude Mobile app** — [#36151](https://github.com/anthropics/claude-code/issues/36151)  
   The most-discussed issue this cycle (148 comments, 530 👍). Users want to switch between multiple Claude accounts in mobile without sharing an email. This has been open since March 2026 and clearly has broad demand, but no official path has appeared.

2. **TaskStop does not stop subagent children — 750k tokens billed after kill** — [#82104](https://github.com/anthropics/claude-code/issues/82104)  
   Three compounding defects: `TaskStop` on a parent doesn't terminate children, there's no live usage visibility, and no spend cap exists. The reporter consumed 750,460 tokens after killing the parent — a serious cost-safety gap that resonated with users.

3. **Bundled ugrep allocates 4–17 GB to search a 64 KB file** — [#78834](https://github.com/anthropics/claude-code/issues/78834)  
   On Linux/WSL2 (v2.1.214), a regex combining a trailing `.{N}` bound with a variable inner bound causes memory to grow at ~230 MB/s. A pathological perf bug in the Grep tool that can take down dev machines.

4. **`/claude-api` bundled skill saturates context unconditionally** — [#63566](https://github.com/anthropics/claude-code/issues/63566)  
   A neutral question triggers an ~77% context spike on Windows. The skill design burns context budget regardless of need — a real problem for users running long sessions.

5. **Cowork GitHub connector unusable: OAuth DCR unsupported** — [#59854](https://github.com/anthropics/claude-code/issues/59854)  
   OAuth DCR is unsupported, the UI shows misleading state, and the Disconnect button is dead. 12 👍 from users clearly frustrated with Cowork integration quality.

6. **Background agent transcripts become unresumable across session-identity boundary** — [#77730](https://github.com/anthropics/claude-code/issues/77730)  
   Background agent IDs stop resolving, forcing full-context respawns and token burn. Transcripts and outputs remain on disk but can't be resumed — a reliability and cost issue for Max subscribers.

7. **Auto-update wiped my Cowork session disk** — [#43719](https://github.com/anthropics/claude-code/issues/43719)  
   A data-loss regression where an auto-update destroyed Cowork session data. Flagged `data-loss`; users are asking for project restoration and safer update paths.

8. **Scheduler catch-up storm on restart** — [#74055](https://github.com/anthropics/claude-code/issues/74055)  
   On restart, daily tasks re-fire, `enabled: false` tasks ghost-fire, and `lastRunAt` isn't updated, causing duplicate runs. Reliability concern for routine automation.

9. **`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` silently stopped working** — [#82761](https://github.com/anthropics/claude-code/issues/82761)  
   Worked until 2026-07-14, then silently became a no-op in v2.1.220. The variable is still present in the binary and process environment — a silent config regression that erodes trust.

10. **Post/PreToolUse Hooks Not Executing on macOS** — [#6305](https://github.com/anthropics/claude-code/issues/6305)  
   A long-standing hook system bug (38 comments, open since August 2025) where `PreToolUse`/`PostToolUse` hooks configured via `settings.local.json` never fire on macOS. Still unresolved after nearly a year.

## 4. Key PR Progress

Only one PR appeared in the last 24 hours: [#82555](https://github.com/anthropics/claude-code/pull/82555) ("Claude/youtube instagram mcp yn2u6s") — it is closed and appears to be an unrelated/spam MCP link submission with no description. No meaningful community PRs or merges to report this cycle.

## 5. Feature Request Trends

- **Account & auth flexibility** — Multi-account switching ([#36151](https://github.com/anthropics/claude-code/issues/36151), 530 👍) dominates, alongside enterprise networking support such as recognizing Microsoft Global Secure Access synthetic IPs (`6.6.0.0/16`) for gateway `/login` ([#82762](https://github.com/anthropics/claude-code/issues/82762)).
- **Sub-agent model control** — Managed default for sub-agent models ([#78217](https://github.com/anthropics/claude-code/issues/78217)): orchestrators want explicit, configurable control over which model child agents use.
- **Data privacy for background tasks** — In-memory storage option for background task outputs to prevent sensitive data leaking to disk ([#82734](https://github.com/anthropics/claude-code/issues/82734)).
- **Reliability of scheduled/background execution** — Users increasingly request robust scheduled routines and background jobs that survive restarts, network changes, and session boundaries.

## 6. Developer Pain Points

- **Runaway cost and billing** — Subagents continuing after kill ([#82104](https://github.com/anthropics/claude-code/issues/82104)) and unresumable background transcripts forcing token-burning respawns ([#77730](https://github.com/anthropics/claude-code/issues/77730)) are the top cost concerns this week.
- **Silent configuration/CLI regressions** — `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` becoming a no-op ([#82761](https://github.com/anthropics/claude-code/issues/82761)), `--agents` accepting invalid JSON with exit 0 while `--settings`/`--mcp-config` reject it ([#79527](https://github.com/anthropics/claude-code/issues/79527)), and custom themes reverting after `/rename` ([#80712](https://github.com/anthropics/claude-code/issues/80712)) all point to inconsistent config handling.
- **Resource waste on routine operations** — The `/claude-api` skill spiking context ~77% ([#63566](https://github.com/anthropics/claude-code/issues/63566)) and the ugrep memory blowup ([#78834](https://github.com/anthropics/claude-code/issues/78834)) burn context and RAM on ordinary tasks.
- **Background/scheduled task flakiness** — Scheduler catch-up storms ([#74055](https://github.com/anthropics/claude-code/issues/74055)), scheduled routines failing at the network layer with CONNECT tunnel 403 ([#82760](https://github.com/anthropics/claude-code/issues/82760)), and macOS background jobs detached from the Aqua bootstrap namespace breaking DNS/TLS after VPN reconnect ([#82756](https://github.com/anthropics/claude-code/issues/82756)).
- **Cowork reliability** — Broken OAuth connector ([#59854](https://github.com/anthropics/claude-code/issues/59854)), kernel-mode heap corruption on Windows ([#72377](https://github.com/anthropics/claude-code/issues/72377)), plugins running despite being disabled ([#68020](https://github.com/anthropics/claude-code/issues/68020)), and session data loss after auto-update ([#43719](https://github.com/anthropics/claude-code/issues/43719)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-31

## Today’s Highlights

No new Codex releases were published in the last 24 hours. Community activity remains concentrated on Windows desktop stability, MCP/auth interoperability, and rate-limit visibility, with several high-engagement bug reports around sandbox crashes and CLI regressions. Meanwhile, a batch of infrastructure PRs advanced sandbox event normalization, remote metadata coalescing, toolkit-free helper threads, and app-server protocol exports.

## Releases

None in the last 24 hours.

## Hot Issues

- [**#31573**](https://github.com/openai/codex/issues/31573) — OAuth authentication fails at issuer validation. High-signal auth blocker with 66 👍 and 31 comments, affecting free-tier CLI users.
- [**#32683**](https://github.com/openai/codex/issues/32683) — Windows Codex App crashes inside `CrBrowserMain` when Browser Use opens a page. Chromium-level crash with 29 comments.
- [**#26234**](https://github.com/openai/codex/issues/26234) — MCP tools are not callable through non-OpenAI Responses API providers because Codex serializes them as `namespace` tools. Blocks local models, OpenRouter, and Bedrock workflows; 40 👍.
- [**#13200**](https://github.com/openai/codex/issues/13200) — `codex mcp login` fails for the official Slack MCP server with “Dynamic client registration not supported.” Enterprise pain point with 58 👍.
- [**#26478**](https://github.com/openai/codex/issues/26478) — Windows Desktop spellcheck detects misspellings but always reports “No Guesses Found,” making the feature unusable. 18 comments and 25 👍.
- [**#35420**](https://github.com/openai/codex/issues/35420) — Work/Codex streams repeatedly disconnect when the Windows workspace is OneDrive-backed and OneDrive is degraded. Impacts real-world developer setups.
- [**#35362**](https://github.com/openai/codex/issues/35362) — VS Code extension: full Codex Review/diff page crashes while inline diff works. Received 13 👍 from users blocked on review workflows.
- [**#32707**](https://github.com/openai/codex/issues/32707) — Pro account’s 5-hour usage bucket disappeared from both the Codex App and `account/rateLimits/read`, making usage tracking impossible.
- [**#31754**](https://github.com/openai/codex/issues/31754) — Regression in `codex-cli 0.143.0`: resuming existing conversations fails with “Unknown parameter: input[...].namespace,” while 0.142.0 works.
- [**#24080**](https://github.com/openai/codex/issues/24080) — Feature request to expose rate-limit reset times, balance, and plan type as `status_line` tokens instead of only percentage limits.

## Key PR Progress

- [**#36217**](https://github.com/openai/codex/pull/36217) — Runs code mode exclusively through the standalone host, removing the embedded runtime fallback from the Codex process.
- [**#36237**](https://github.com/openai/codex/pull/36237) — Ignores symbolic `/tmp` permissions on Windows, preventing Unix-style path semantics from affecting Windows sandbox decisions.
- [**#36228**](https://github.com/openai/codex/pull/36228) — Adds support for Enterprise automation account plans across auth, backend responses, and app-server rate-limit APIs.
- [**#36207**](https://github.com/openai/codex/pull/36207) — Records normalized sandbox violation events, giving filesystem denials and network blocks a unified structured shape.
- [**#36188**](https://github.com/openai/codex/pull/36188) — Makes thread history projection resilient to malformed rollouts, preventing valid retries from being skipped.
- [**#36187**](https://github.com/openai/codex/pull/36187) — Refreshes environment `<current_date>` from the session’s configured clock rather than letting it diverge.
- [**#36184**](https://github.com/openai/codex/pull/36184) — Coalesces concurrent remote metadata requests for the same path, reducing duplicate `fs/getMetadata` RPCs.
- [**#31458**](https://github.com/openai/codex/pull/31458) — Routes executor-local proxy policy decisions through the process-scoped core policy decider, with fail-closed behavior on disconnect.
- [**#31922**](https://github.com/openai/codex/pull/31922) — Adds opt-in tool-free thread mode, skipping MCP, skill, and plugin startup for lightweight helper threads.
- [**#31591**](https://github.com/openai/codex/pull/31591) — Adds a disabled-by-default `codex_apps_parallel_tool_calls` feature for parallel tool calls in Codex Apps MCP servers.

## Feature Request Trends

- **Rate-limit transparency and fairness** — Users repeatedly ask for richer usage data and fairer limits: expose reset times/balance/plan in status line ([#24080](https://github.com/openai/codex/issues/24080)), investigate missing 5-hour buckets ([#32707](https://github.com/openai/codex/issues/32707)), and increase Plus limits or secondary rate limits on smaller models ([#36213](https://github.com/openai/codex/issues/36213)).
- **MCP interoperability with non-OpenAI ecosystems** — Demand continues for namespace flattening on custom providers ([#26234](https://github.com/openai/codex/issues/26234)) and support for OAuth dynamic client registration in MCP login flows ([#13200](https://github.com/openai/codex/issues/13200)).
- **Session continuity and portability** — Requests include reopening closed side chats ([#27716](https://github.com/openai/codex/issues/27716)), workspace continuity across devices ([#34804](https://github.com/openai/codex/issues/34804)), and preserving reasoning effort across delegations/continuations ([#26930](https://github.com/openai/codex/issues/26930)).

## Developer Pain Points

- **Windows sandbox and packaging instability is dominating support load.** Recurring failures include `CreateProcessWithLogonW 1326/1909` ([#18620](https://github.com/openai/codex/issues/18620)), Code Integrity violations corrupting the MSIX package ([#35681](https://github.com/openai/codex/issues/35681)), corrupted dependency bundles that “Diagnose” reports as healthy ([#35803](https://github.com/openai/codex/issues/35803)), and a PowerShell AST parser leaking ~185 GB on Windows ([#29317](https://github.com/openai/codex/issues/29317)).
- **Rate-limit frustration is boiling over.** One hostile issue appeared ([#35552](https://github.com/openai/codex/issues/35552)), alongside more substantive complaints about Plus users losing effective capacity after GPT-SOL 5.6 ([#36213](https://github.com/openai/codex/issues/36213)).
- **CLI regressions erode trust in rapid releases.** Resuming conversations broke in 0.143.0 ([#31754](https://github.com/openai/codex/issues/31754)), model capability metadata can reject valid subagents ([#35097](https://github.com/openai/codex/issues/35097)), and evicted MultiAgentV2 subagents resume with the wrong parent model ([#34821](https://github.com/openai/codex/issues/34821)).
- **Session storage is expanding unnecessarily.** Forked threads persist full parent rollouts in child JSONL files ([#35647](https://github.com/openai/codex/issues/35647)), compaction repeatedly embeds full image base64 blobs ([#23257](https://github.com/openai/codex/issues/23257)), and some threads compact endlessly even at lower usage percentages ([#20983](https://github.com/openai/codex/issues/20983)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-31

## Today's Highlights
No new release landed in the last 24h. The most significant developments are a freshly reported **SSRF vulnerability in `web-fetch` (CVSS 8.6)** and a **security PoC exposing a CI/CD supply chain risk** — both are now open/closed for patching. On the reliability front, several PRs target long-standing **agent hangs**, **MCP OAuth refresh failures**, and **preview-model access issues**, all of which have drawn strong community engagement.

## Releases
None in the last 24 hours.

## Hot Issues
1. **[Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** — 12 comments, 2 👍  
   A subagent can exhaust its turn limit yet still report `Termination Reason: "GOAL"` and `status: "success"`, masking an incomplete run. This makes failures hard to detect in multi-step agent workflows.

2. **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — 8 comments, 8 👍  
   When the CLI defers to the generalist agent, simple tasks like folder creation can hang indefinitely (users waited up to an hour). Instructing the model not to use subagents works around the issue, but the community clearly wants a durable fix.

3. **[Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — 4 comments, 3 👍  
   Particularly annoying for automation: simple non-interactive commands are left in an active state with "Awaiting user input" even after finishing. Often reproducible with plain shell commands.

4. **[Security: SSRF via DNS Resolution Bypass in web-fetch Tool (CVSS 8.6)](https://github.com/google-gemini/gemini-cli/issues/28555)** — 1 comment  
   `isPrivateIp()` performs synchronous IP checks without DNS resolution, allowing attackers to bypass SSRF protection by using domains that resolve to internal addresses. This one needs immediate attention.

5. **[Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — 4 comments, 1 👍  
   The browser subagent exits with `Termination Reason: GOAL` but doesn't actually complete its work under Wayland. Likely a compositor/sandbox integration issue, and a blocker for Linux users.

6. **[Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — 3 comments  
   A regression where subagents (e.g., generalist) execute even when agents are explicitly disabled in all configurations. Users only expect MCP functionality, raising both correctness and permission concerns.

7. **[Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — 6 comments  
   Community feedback: custom skills like `gradle` and `git` are rarely used unless explicitly requested. The agent misses obvious opportunities to leverage user-defined tools, limiting autonomy.

8. **[Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — 3 comments, 1 👍  
   For complex git operations or database maintenance, the model occasionally uses `git reset` or `--force` when safer alternatives exist. Users want built-in guardrails and clearer warnings about destructive commands.

9. **[Browser Agent ignores settings.json overrides (e.g., maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)** — 3 comments  
   The `AgentRegistry` merges settings correctly, but the browser agent doesn't consume them. Global and project-level overrides like `maxTurns` are silently ignored, limiting configurable agent behavior.

10. **[Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — 5 comments  
   If the extraction agent doesn't read a low-signal session, it stays in the index as unprocessed and keeps being surfaced. This causes repeated retries and wasted background processing.

## Key PR Progress
1. **[fix(core,cli): propagate InvalidStreamError details to UI for specific empty response guidance](https://github.com/google-gemini/gemini-cli/pull/28566)**  
   Pushes error `type`/`message` from the backend to the CLI UI, enabling contextual tips like using `/compress` for empty responses. High-priority UX improvement.

2. **[fix(core): refresh MCP OAuth tokens with the stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)**  
   Fixes token refresh for MCP servers configured via OAuth discovery + dynamic client registration. Previously refresh failed before network I/O and deleted stored credentials, forcing re-auth every run.

3. **[fix(core): classify capacity exhaustion as terminal to prevent retry hangs](https://github.com/google-gemini/gemini-cli/pull/28599)**  
   Treats `MODEL_CAPACITY_EXHAUSTED` as a terminal limit when no retry delay is specified, avoiding indefinite client-side hangs and triggering the fallback chain faster.

4. **[fix(core): shorten MCP tools/list discovery timeout so it fails fast](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   Prevents a silent 10-minute startup freeze when an MCP server doesn't respond to `tools/list` (e.g., mismatched JSON-RPC id). Now fails fast with a short default timeout.

5. **[fix(availability): apply modelIdResolutions to tool sub-agent model configs](https://github.com/google-gemini/gemini-cli/pull/28406)**  
   Fixes `INVALID_MODEL` errors for API-key users without preview access on tools like `web-search`/`web-fetch`, which hardcoded preview model IDs.

6. **[fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)**  
   Resolves a load-order race condition where workspace `.env` was parsed after settings files were expanded against `process.env`, causing placeholder and config resolution failures.

7. **[fix(cli): fall back to embedded macOS seatbelt profiles if missing](https://github.com/google-gemini/gemini-cli/pull/28551)**  
   Fixes a startup crash in sandbox mode (`-s`) on macOS/gMac by providing embedded `.sb` profiles when static assets are absent from runfiles or the bundle.

8. **[feat(cli): add --list-all-sessions option to list sessions across all workspaces](https://github.com/google-gemini/gemini-cli/pull/28596)**  
   New CLI flag that lists chat sessions across registered workspaces, grouped by path. Addresses the common problem of forgetting which folder a session was created in.

9. **[feat(cli): auto-compress chat history on context window overflow](https://github.com/google-gemini/gemini-cli/pull/28488)**  
   Adds `model.autoCompressOnOverflow` setting. When context is about to overflow, the CLI cancels the submit, informs the user, and automatically compresses history instead of stopping with a warning.

10. **[Security PoC: workflow_run supply chain vulnerability](https://github.com/google-gemini/gemini-cli/pull/28594)**  
    A researcher demonstrated a CI/CD supply chain issue: `trigger_e2e.yml` runs on `pull_request` (including forks) and saves execution artifacts. Closed as a benign PoC, but it's a timely reminder for pipeline hardening.

## Feature Request Trends
- **Sub-agent observability & transparency** – Users want subagent trajectories visible via `/chat share` and included in `/bug` reports so failures can be diagnosed outside the main session.
- **AST-aware codebase tooling** – Multiple EPICs request AST-based file reads, search, and codebase mapping for more precise method/file retrieval, fewer turns, and less token noise.
- **Browser agent robustness** – Automatic session takeover, lock recovery, adherence to `settings.json` overrides, and Wayland support are recurring asks.
- **Auto Memory improvements** – Deterministic handling of low-signal sessions, deterministic secret redaction, and quarantining invalid inbox patches to avoid silent data loss.
- **Context & tool management** – Auto-compression on overflow, smart tool scoping when >128 tools are enabled, and cleaner handling of the model's temp script generation.
- **Model availability for all users** – Keeping the Auto model visible without preview access, and surfacing new flash models in the selector across auth modes.

## Developer Pain Points
- **Hangs and stuck states** are the top frustration: generalist agent hangs, shell commands stuck on "Waiting input", MCP startup freezes, and retry loops on capacity exhaustion.
- **Misleading success signals** – Subagents report GOAL/success despite hitting MAX_TURNS, and subagents can execute even when disabled, eroding trust in the agent's reporting.
- **Poor subagent visibility** – Bug reports and shared sessions lack subagent-level context, making debugging deep agent workflows unnecessarily hard.
- **Workspace pollution** – The model frequently creates ad-hoc temp/edit scripts in random directories, adding cleanup overhead for clean commits.
- **Configuration & settings reliability** – Overrides ignored by browser agent, symlinked agent files not recognized, and env-var load order bugs undermine custom setups.
- **Security & privacy concerns** – SSRF bypass in `web-fetch`, secrets entering model context before redaction in Auto Memory, and EOL Node runtimes in the sandbox all raise red flags for production users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-31

## Today's Highlights

v1.0.77 ships browser-based OAuth login by default on local interactive terminals, adds Ctrl+G editing for `ask_user` freeform answers, and improves sandbox behavior for autopilot approvals when bypass is allowed. Community reports are clustered around v1.0.76 regressions and agent reliability issues, including silent sub-agent failures and autopilot subtask freezes. No pull requests were updated in the last 24 hours.

## Releases

- [v1.0.77](https://github.com/github/copilot-cli/releases/tag/v1.0.77) — 2026-07-30
  - Unconditional autopilot approval now disables sandbox for the current session when bypass is allowed.
  - Ctrl+G opens your editor to edit `ask_user` freeform answers without closing the prompt.
  - Browser-based OAuth login flow is now the default for `copilot login` on local interactive terminals.

- [v1.0.77-0](https://github.com/github/copilot-cli/releases/tag/v1.0.77-0)
  - Adds browser-based web OAuth login flow as the default for local interactive terminals.
  - Device-code flow remains the default on remote/headless terminals.
  - Users can force mode via `--web-flow`/`--device-code` or choose inside the interactive `/login` command.

## Hot Issues

- [Issue #3767](https://github.com/github/copilot-cli/issues/3767) (closed, 13 comments) — Oversized attachments can permanently wedge a session at CAPI’s 5 MB native request limit, with no recovery path. A single bad attachment can kill a long-running session.

- [Issue #4293](https://github.com/github/copilot-cli/issues/4293) — Sub-agents launched via the `task` tool return no response when the agent type has full tool access. Restricted-tool agent types work, making this hard to debug and trust.

- [Issue #4306](https://github.com/github/copilot-cli/issues/4306) — Autopilot subtasks freeze and stop responding during agent/skill loops. Directly impacts long-running automation workflows.

- [Issue #4305](https://github.com/github/copilot-cli/issues/4305) (closed) — Upgrading to v1.0.76 triggered `Failed to convert JavaScript value 'Undefined' into rust type 'String'` on nearly any command. A sharp regression that generated immediate community reports.

- [Issue #4297](https://github.com/github/copilot-cli/issues/4297) — `copilot --log-level error` crashes at launch for any log level other than `all` or `default`. Startup crashes on valid CLI flags are high-impact.

- [Issue #4299](https://github.com/github/copilot-cli/issues/4299) — Typing latency becomes severe over long sessions, especially with background agents running. Users report the CLI becoming nearly unusable.

- [Issue #4301](https://github.com/github/copilot-cli/issues/4301) — MCP tool parameters using `anyOf: [array, string]` unions are stringified before reaching the server. This breaks valid MCP schemas in a subtle way.

- [Issue #4310](https://github.com/github/copilot-cli/issues/4310) — When a routed model has no capability limits, the engine silently falls back to a 128K-token budget. Dangerous default for large-context models such as 1M-token Anthropic models.

- [Issue #4308](https://github.com/github/copilot-cli/issues/4308) — Sessions appeared to continue consuming AI credits after all visible tasks completed (~97.8% credit usage). Duplicate report: [Issue #4309](https://github.com/github/copilot-cli/issues/4309).

- [Issue #1381](https://github.com/github/copilot-cli/issues/1381) (10 👍) — `rewind` only works inside git repositories, excluding users of Jujutsu (jj) and other VCSs. VSCode Copilot supports this without git, so users want CLI parity.

## Key PR Progress

None. No pull requests were updated in the last 24 hours.

## Feature Request Trends

- **AI credit/resource visibility:** Near-limit warnings ([#4295](https://github.com/github/copilot-cli/issues/4295)) and better reporting of post-task credit consumption ([#4308](https://github.com/github/copilot-cli/issues/4308)).
- **Auth flexibility for enterprises:** Support for `bearerToken` or custom brokers for BYO-K ([#4300](https://github.com/github/copilot-cli/issues/4300)); browser/device flow selection is already emerging in `/login`.
- **Sandbox tool controls:** Selective enablement/whitelisting of bundled tools in sandbox config ([#4298](https://github.com/github/copilot-cli/issues/4298)).
- **Non-git VCS support:** `rewind` and git-dependent features should work with jj and other VCSs ([#1381](https://github.com/github/copilot-cli/issues/1381)).
- **Terminal/platform compatibility:** Mouse scroll in SSH alt-screen sessions ([#2841](https://github.com/github/copilot-cli/issues/2841)), Cmd+V paste in iTerm2 ([#4296](https://github.com/github/copilot-cli/issues/4296)), and sidebar keyboard navigation ([#4304](https://github.com/github/copilot-cli/issues/4304)).
- **MCP schema preservation:** Preserve array-or-string union schemas in MCP tool arguments ([#4301](https://github.com/github/copilot-cli/issues/4301)).

## Developer Pain Points

- **Patch-release regressions:** v1.0.76 introduced a Rust type conversion failure ([#4305](https://github.com/github/copilot-cli/issues/4305)) and a log-level launch crash ([#4297](https://github.com/github/copilot-cli/issues/4297)).
- **Agent reliability gaps:** Full-tool sub-agents can silently return nothing ([#4293](https://github.com/github/copilot-cli/issues/4293)); autopilot subtasks can freeze with no error ([#4306](https://github.com/github/copilot-cli/issues/4306)).
- **Session lifecycle limits:** Oversized attachments permanently wedge sessions ([#3767](https://github.com/github/copilot-cli/issues/3767)); long sessions degrade into severe typing latency ([#4299](https://github.com/github/copilot-cli/issues/4299)).
- **AI credit transparency:** Credit consumption can continue after visible work completes ([#4308](https://github.com/github/copilot-cli/issues/4308), [#4309](https://github.com/github/copilot-cli/issues/4309)).
- **MCP/configuration friction:** MCP `anyOf` arguments are stringified before sending ([#4301](https://github.com/github/copilot-cli/issues/4301)); excessive MCP servers have been linked to broken sub-agents ([#4303](https://github.com/github/copilot-cli/issues/4303)).
- **Terminal environment quirks:** SSH mouse scroll ([#2841](https://github.com/github/copilot-cli/issues/2841)), iTerm2 paste behavior ([#4296](https://github.com/github/copilot-cli/issues/4296)), and injected `COLORTERM=truecolor` on resumed sessions ([#4294](https://github.com/github/copilot-cli/issues/4294)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-31

## 1. Today's Highlights

No new release was published in the last 24 hours. The most notable signals are a long-running enhancement request for a persistent memory system (#1283) and two new bug reports: one user unable to use Kimi Code CLI at all due to HTTP 429 “LLM Overloaded” (#2571), and another experiencing intermittent freezes linked to browser tab state (#2570). On the code side, a single PR (#2565) targets a hook task lifetime bug that could make fire-and-forget hooks unreliable.

## 2. Releases

None.  
There were no new releases or changelog entries in the last 24 hours.

## 3. Hot Issues

Only 3 issues were updated in the last 24 hours. All are highlighted below.

### [#1283 [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-07-30 | **Comments:** 7 | 👍: 0
- **Summary:** Requests a comprehensive memory system with both automatic, AI-managed notes and manual, user-defined instructions so Kimi Code CLI can retain project patterns, context, and preferences across sessions.
- **Why it matters:** Persistent context is one of the most impactful gaps for agentic coding CLIs. The 7 comments show continued community interest, even though the issue has been open since February.

### [#2571 [bug] LLM Overloaded! Can't use Kimi at all](https://github.com/MoonshotAI/kimi-cli/issues/2571)
- **Author:** andrew-sz | **Created:** 2026-07-30 | **Updated:** 2026-07-30 | **Comments:** 1 | 👍: 0
- **Summary:** On Kimi Code CLI v1.49.0 using the Moderato platform with Kimi K3, the user receives provider error `429` and cannot use the tool at all.
- **Why it matters:** A 429 from the LLM provider is an availability/rate-limit failure, not a client bug. The severity is high because it completely blocks development workflows.

### [#2570 [bug] CLI intermittently freezes with spinning moon; correlated with browser tab state](https://github.com/MoonshotAI/kimi-cli/issues/2570)
- **Author:** XbackMK | **Created:** 2026-07-30 | **Updated:** 2026-07-30 | **Comments:** 0 | 👍: 0
- **Summary:** On Windows 11, Kimi Code CLI v0.29.2 becomes unresponsive with the “spinning moon” indicator, and the freeze appears correlated with browser tab state.
- **Why it matters:** Intermittent hangs degrade trust in the CLI, especially when they appear tied to external UI state such as browser tabs. This may point to an authentication or event-loop handling issue.

## 4. Key PR Progress

Only 1 PR was updated in the last 24 hours.

### [#2565 [fix(hooks): keep a strong reference to fire-and-forget hook triggers](https://github.com/MoonshotAI/kimi-cli/pull/2565)
- **Author:** LHMQ878 | **Created:** 2026-07-28 | **Updated:** 2026-07-30 | **Comments:** N/A | 👍: 0
- **Summary:** Fixes #2564. The PR addresses an `asyncio` issue where running tasks are held in a `WeakSet`; without a strong reference, fire-and-forget hook tasks may be garbage-collected before completion.
- **Why it matters:** Hooks are critical for automation and CI/CD integration. This fix prevents silent hook-trigger failures caused by early task cleanup.

## 5. Feature Request Trends

Based on the currently updated issues, the main feature direction is:

- **Persistent memory and cross-session context** — Developers want Kimi Code CLI to remember project conventions, past decisions, and user preferences between sessions. This is the only explicit feature request in the current window, but it has generated meaningful discussion.

Other signals are reliability-related rather than additive features:

- **Provider overload resilience** — Users need graceful handling or retry behavior when the upstream LLM returns 429.
- **Stable non-blocking operation** — The “spinning moon” freeze indicates users expect the CLI to remain responsive even when underlying services are slow or UI state changes.

## 6. Developer Pain Points

- **LLM provider 429s make the CLI unusable:** The “LLM Overloaded” error (#2571) is a critical blocker; developers cannot proceed until the provider or client applies backoff/retry.
- **Context loss between sessions:** The memory system request (#1283) reflects pain around re-explaining project patterns and preferences every time.
- **Intermittent freezes/hangs:** The Windows freeze (#2570) is especially frustrating because it is hard to reproduce and correlated with browser state.
- **Hook reliability concerns:** The fix in #2565 suggests early task garbage collection can silently break fire-and-forget hooks, which is dangerous for users relying on automated workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-31

## Today's Highlights

OpenCode v1.18.10 shipped with automatic Modal model discovery plus several desktop UX refinements, while the community’s attention is on provider reliability and upgrade regressions — the top issue reports persistent `server overloaded` errors with the Sol model, and desktop/TUI users are hitting broken mode switching and startup crashes after recent releases. Contributor momentum remains high on the v2 TUI, with hot-reloadable plugins, a new session/project open menu, and more robust session title handling moving through PRs.

## Releases

### [v1.18.10](https://github.com/anomalyco/opencode/releases/tag/v1.18.10)

- **Core:** Available Modal models are now discovered automatically. (@devennavani)
- **Desktop improvements:**
  - Prevent adding the same attachment more than once.
  - Always show the new session button.
  - Better toast notifications with improved stacking, dismissal, and mobile layout.
  - Refined tab hover and active states.

## Hot Issues

1. **[#39653 — GPT-5.6 Sol, server overloaded errors](https://github.com/anomalyco/opencode/issues/39653)** · 16 comments, 10 👍  
   The most active issue today: Sol repeatedly returns `server overloaded` while Pi and Codex work. High visibility for paid-model reliability.

2. **[#39288 — OpenCode error after upgrade to 1.18.8](https://github.com/anomalyco/opencode/issues/39288)** · 6 comments, 1 👍  
   Desktop app fails on launch with `AutoScroller plugin depends on Scroller plugin`. A clear upgrade regression blocking the main screen.

3. **[#38655 — Can’t switch between plan and build after latest update](https://github.com/anomalyco/opencode/issues/38655)** · 5 comments  
   Mode switching is broken post-update; the app stays stuck in build mode. Workflow-critical regression for agentic coding.

4. **[#37628 — npm install opencode-ai gives 16-bit issue](https://github.com/anomalyco/opencode/issues/37628)** · 5 comments  
   Windows/nvm users hit an incompatible `opencode.exe` wrapper. Points to ongoing Windows packaging/launcher friction.

5. **[#37762 — Problems with responses via Ollama](https://github.com/anomalyco/opencode/issues/37762)** · 8 comments  
   Desktop on Windows struggles with local Ollama responses despite ample RAM. Highlights the difficulty of reliable local-model integration.

6. **[#39491 — Plan mode can write and edit files via bash](https://github.com/anomalyco/opencode/issues/39491)** · 4 comments  
   A model in plan mode bypassed the write-tool restriction by using bash to create files. Important guardrail/safety issue for mode enforcement.

7. **[#27837 — Web UI: session list empty on left panel when using web server mode](https://github.com/anomalyco/opencode/issues/27837)** · 4 comments, 2 👍  
   `/api/session` returns sessions, but the SSE-driven frontend never renders them. Longstanding web-mode visibility bug.

8. **[#39655 — Web shows “No folders found” although backend returns projects](https://github.com/anomalyco/opencode/issues/39655)** · 4 comments  
   Home page and Open Project dialog are empty despite correct API responses. Another web frontend/backend mismatch.

9. **[#39771 — Fast failure on network errors and concise error output](https://github.com/anomalyco/opencode/issues/39771)** · 3 comments  
   Network flakiness causes 60–120s hangs with no fallback, especially when GitHub HTTPS is blocked but SSH works. Strong operational pain point.

10. **[#29935 — Add LiteLLM proxy as a built-in provider](https://github.com/anomalyco/opencode/issues/29935)** · 3 comments, 5 👍  
   Popular feature request: a unified OpenAI-compatible proxy in front of 100+ LLM providers would simplify provider configuration considerably.

## Key PR Progress

1. **[#39776 — feat(tui): hot-reload local TUI plugins](https://github.com/anomalyco/opencode/pull/39776)**  
   Editing a local TUI plugin now takes effect without restarting the TUI; broken plugins are contained instead of crashing the app.

2. **[#39787 — fix(core): map xAI native options](https://github.com/anomalyco/opencode/pull/39787)**  
   Explicitly maps supported xAI settings to native provider options, validates values, and omits unsupported keys.

3. **[#39764 — feat(plugin): add session request hook](https://github.com/anomalyco/opencode/pull/39764)**  
   Exposes `session.request` on the plugin boundary, allowing plugins to mutate final outgoing native LLM headers and serialized request bodies.

4. **[#39748 — fix(session): retry failed title generation](https://github.com/anomalyco/opencode/pull/39748)**  
   Automatic title generation retries after a failed first execution step and preserves the original user prompt as the source.

5. **[#39747 — feat(session): make generated titles optional](https://github.com/anomalyco/opencode/pull/39747)**  
   Sessions remain genuinely untitled until auto-generation succeeds or the user renames them; all client surfaces handle missing titles.

6. **[#39752 — feat(tui): add open menu for sessions and projects](https://github.com/anomalyco/opencode/pull/39752)**  
   Adds `ctrl+o` open menu in v2 TUI: jump to recent sessions or open other projects, replacing the projects-only dialog.

7. **[#39783 — fix(tui): default tabs to global scope](https://github.com/anomalyco/opencode/pull/39783)**  
   Session tabs now use one global tab set by default, with per-directory tabs available as an opt-in setting.

8. **[#39784 — fix(tui): align session picker scope](https://github.com/anomalyco/opencode/pull/39784)**  
   The session picker’s initial project scope follows the Tabs > Scope setting, making global vs per-directory behavior consistent.

9. **[#39767 — fix(app): prevent stale session tab reads](https://github.com/anomalyco/opencode/pull/39767)**  
   Fixes desktop crashes like `Stale read from <Show>` when switching or closing sessions, closes #39704.

10. **[#27554 — feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)**  
    Adds mDNS-based discovery for local OpenAI-compatible servers and automatic model discovery — a major step for local/self-hosted workflows.

## Feature Request Trends

- **Provider flexibility and discovery:** automatic Modal model discovery, local LAN provider discovery, and LiteLLM as a built-in proxy all point to a desire for easier, more flexible model-provider onboarding.
- **Network resilience:** requests need fast failure, concise errors, and fallbacks rather than long 60–120s hangs on flaky networks.
- **Web UI parity:** users expect the web mode to correctly render sessions/projects returned by the backend; empty panels are a recurring complaint.
- **Configuration clarity:** docs should explicitly state naming conventions such as camelCase vs snake_case for `variants` sub-configurations.
- **More plugin control:** plugin authors want deeper request lifecycle hooks and safer hot-reload behavior.

## Developer Pain Points

- **Upstream/model instability:** repeated `server overloaded` errors, `Upstream request failed` with newer models like `gemini-3.6-flash`, NVIDIA 429s, and OpenCode Go 401s for paid models.
- **Upgrade regressions:** desktop startup errors, broken plan/build switching, and new crashes such as `Stale read from <Show>` after minor version bumps.
- **Windows packaging/launcher problems:** corrupted executables, 16-bit compatibility errors, and nvm-wrapped launcher failures.
- **Web-mode data mismatches:** session lists and project folders missing in the UI even though the backend API responds correctly.
- **Billing/credit confusion:** users report being locked out by “reached your free limit” after subscribing, and unclear token/cost accounting for promo “2x usage” models.
- **Local/self-hosted friction:** Ollama response quality, oMLX LAN `ENETUNREACH` failures, and models like DeepSeek “giving up” after a few seconds remain unresolved for local users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest – 2026-07-31

### Today's Highlights
Pi's development today focused on laying the foundation for remote and embeddable sessions: new protocol/client packages are landing (#7344, #7348) and the harness gained a proper shutdown lifecycle (#7343). On the extension side, the requested markdown-rendering API shipped via PR #7231, closing the most-commented issue of the cycle (#6747). No new releases were published in the last 24 hours.

### Releases
None in the last 24 hours.

### Hot Issues

1. [#6747 – An API for enhancing agent message markdown](https://github.com/earendil-works/pi/issues/6747) — *Closed.* The most active thread today (12 comments, 2👍) requested a render-only hook for markdown formatting, so extensions can change display without altering LLM payloads. Addressed by PR #7231.

2. [#7194 – Pi does a full re-render every 1s when an active tool card scrolls outside the viewport](https://github.com/earendil-works/pi/issues/7194) — *Closed.* Remote-sandbox users reported constant transcript repaints. The 7-comment thread identifies a visibility-triggered re-render loop, a real performance concern for long sessions.

3. [#7153 – `/scoped-models` appears to do nothing for ~5 minutes while awaiting stalled catalog refresh](https://github.com/earendil-works/pi/issues/7153) — *Open.* The REPL command blocks on a model-catalog refresh before rendering any UI. Six comments; part of a broader "stalled refresh" reliability pattern.

4. [#6300 – Windows: Input line is redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300) — *Open.* On Windows Terminal and cmd, each character appears on a new line. Six comments and still unfixed; important for Windows TUI parity.

5. [#5990 – TUI flickers when confirm/select dialog content is taller than terminal height](https://github.com/earendil-works/pi/issues/5990) — *Closed.* Six comments, 3👍. Dialog overflow causes continuous repainting until the terminal is zoomed out. Closed, but the underlying rendering fragility remains relevant.

6. [#7047 – Gemini 3.x tool-call IDs stripped from function calls/responses](https://github.com/earendil-works/pi/issues/7047) — *Open.* Gemini 3 requires echoing tool-call IDs, but Pi drops them during history replay. Five comments, 1👍; high impact for multi-turn Gemini tool use.

7. [#7187 – Silent crash caused by inconsistent error handling and schema validation](https://github.com/earendil-works/pi/issues/7187) — *Closed.* A third-party package manifest typo can permanently kill all chat and scheduled sessions. Four comments, but severity is high, especially for embedded production uses like screenpipe.

8. [#7248 – Ctrl+V text paste silently fails on Wayland](https://github.com/earendil-works/pi/issues/7248) — *Open.* `readClipboardText()` is X11-only, so Wayland users get no paste at all. Four comments; now fixed by PR #7261.

9. [#7027 – API-key login can hang after saving credential when model catalog refresh stalls](https://github.com/earendil-works/pi/issues/7027) — *Open.* `/login openrouter` leaves the TUI stuck even though credentials are already saved. Only 3 comments but 4👍, showing broad agreement on the catalog-stall diagnosis.

10. [#7334 – Referencing a skill treats the skill's install directory as the user's project directory](https://github.com/earendil-works/pi/issues/7334) — *Closed.* Slash-command skills with `disable-model-invocation: true` can make Pi operate in the wrong working directory. Three comments; a sharp edge in the skills system.

### Key PR Progress

1. [#7231 – Markdown API](https://github.com/earendil-works/pi/pull/7231) — *Closed.* Closes #6747. Adds the extension API for transforming rendered agent markdown without mutating LLM-bound content.

2. [#7344 – feat(protocol): add remote session wire protocol](https://github.com/earendil-works/pi/pull/7344) — *Closed.* Adds `@earendil-works/pi-protocol` with validated commands, events, snapshots, and bounded CBOR framing.

3. [#7343 – feat(agent): add harness shutdown lifecycle](https://github.com/earendil-works/pi/pull/7343) — *Closed.* Adds idempotent `AgentHarness.shutdown()` that aborts active turns/compaction and prevents post-shutdown persistence.

4. [#7348 – feat(client): add runtime-neutral session client](https://github.com/earendil-works/pi/pull/7348) — *Open.* Introduces `@earendil-works/pi-client` with a discriminated-union lifecycle, multi-session handles, and connection setup isolation.

5. [#7261 – fix(coding-agent): read clipboard via wl-paste on Wayland](https://github.com/earendil-works/pi/pull/7261) — *Closed.* Closes #7248. Uses `wl-paste` on Wayland, `xclip`/`xsel` on X11, fixing silent Ctrl+V failures.

6. [#7011 – fix(coding-agent): share host modules with native esm extensions](https://github.com/earendil-works/pi/pull/7011) — *Closed.* Stops extensions from loading private copies of Pi packages, preventing module-state divergence between host and extensions.

7. [#7061 – fix(openai-completions): handle array content and missing finish_reason](https://github.com/earendil-works/pi/pull/7061) — *Closed.* Fixes `[object Object]` content stringification and missing `finish_reason` from Databricks/Qwen3/gpt-oss streaming responses.

8. [#6987 – fix(tui): align grapheme widths with terminal cells](https://github.com/earendil-works/pi/pull/6987) — *Closed.* Improves rendering of wide/ambiguous Unicode characters, relevant to Devanagari and other non-Latin input.

9. [#7148 – feat(coding-agent): Experimental loadout management](https://github.com/earendil-works/pi/pull/7148) — *Open.* Draft `/loadout` command to enable or disable extensions mid-session, with session persistence for resumption.

10. [#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216) — *Open.* Adds Bedrock Mantle support via OpenAI's Bedrock provider, superseding an earlier attempt.

### Feature Request Trends

- **Extension/UI customization:** Developers want more control over presentation and lifecycle — render-only markdown hooks (#6747), `shouldStopAfterTurn` exposure (#7299), stateful ACP extension backends (#7320), and themeable cursor colors (#7141).

- **Provider/API parity:** Requests cluster around making provider behavior configurable and spec-compliant: Anthropic OAuth token detection (#5871), `x-client-request-id` for Anthropic gateways (#7161), Gemini tool-call ID preservation (#7047), OpenAI Responses stateful continuation (#7317), and a context-window selector (#5064).

- **Model-catalog refresh resilience:** Multiple issues ask for non-blocking, cancellable, and recoverable catalog/availability refreshes. See `/scoped-models` stalls (#7153), login hangs (#7027), and permanently stuck availability refreshes (#7301).

- **Cross-platform terminal support:** Recurring asks for better Windows, Wayland, iTerm2, and Unicode behavior, including Windows input redraws (#6300), Wayland clipboard (#7248), iTerm2 rendering (#6784), and Devanagari text handling (#6124).

### Developer Pain Points

- **Stalled async operations that never settle:** Model-catalog and availability refreshes are coalesced onto promises that can hang indefinitely, blocking commands like `/scoped-models` and `/login` (#7153, #7027, #7301).

- **TUI rendering/input instability:** Full re-renders, dialog flicker, per-keystroke redraws, and invisible bold text on light backgrounds make the terminal UI feel fragile (#7194, #5990, #6300, #7340).

- **Provider edge-case whack-a-mole:** Hardcoded OAuth detection, missing request IDs, stripped tool IDs, array content, and stream parser gaps keep requiring one-off patches (#5871, #7161, #7047, #7061, #7283).

- **Extension isolation and lifecycle gaps:** ESM extensions load duplicate Pi internals, concurrent custom prompts can deadlock, and lifecycle hooks like shutdown/stop are not consistently exposed (#7011, #7007, #7299, #7343).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-31

## Today's Highlights

Today's nightly release focuses on CI and Web Shell fixes. Community attention is centered on a security-sensitive provider-warning sanitizer bug that can leak passwords (#8136) and a cluster of Anthropic converter issues that can corrupt conversation history (#8159–#8162). On the development side, Goal v3 is being wired into the interactive TUI (#8005), the Web Shell is being packaged as a release-ready desktop app (#8132), and several Windows stability fixes are in flight.

## Releases

- [v0.21.1-nightly.20260731.702932cc7](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7) — Nightly release with two documented changes: a CI fix adding a default bash shell to container jobs in qwen-triage ([#7838](https://github.com/QwenLM/qwen-code/pull/7838)), and a Web Shell fix whose full title was truncated in the release feed. No new stable release.

## Hot Issues

- [#8172 Agent Team: teammate messages queue for the entire duration of a long multi-tool-call turn](https://github.com/QwenLM/qwen-code/issues/8172) — P2, 3 comments. Teammate → leader messages only deliver when `streamingState === Idle`, so long tool loops delay coordination messages well beyond a single response. This breaks real-time multi-agent collaboration.

- [#8136 Provider warning sanitizer truncates messages containing a port, and leaks a password containing `@`](https://github.com/QwenLM/qwen-code/issues/8136) — P2, 4 comments. A security-sensitive bug in `sanitizeProviderWarning`: messages can be truncated, and worse, credentials containing `@` can leak into `/status` payloads.

- [#8162 Anthropic converter: stale thinking signatures not pruned on historical turns after a sibling tool_use is removed](https://github.com/QwenLM/qwen-code/issues/8162) — P2, 4 comments. Part of the ongoing Anthropic compatibility bug cluster; orphaned `thinking` blocks can cause API rejections or corrupted context after history compaction.

- [#8138 Worktree settings.json writes to project root .qwen instead of worktree's .qwen](https://github.com/QwenLM/qwen-code/issues/8138) — P2, 4 comments. Saving settings inside a git worktree mutates the wrong project configuration, impacting worktree-based agent isolation workflows.

- [#8146 Desktop app not work with LMStudio](https://github.com/QwenLM/qwen-code/issues/8146) — P2, 4 comments. On Windows, the desktop app appears to hang without sending requests to LM Studio's local API — a significant integration gap for local-model users.

- [#8124 Startup banner sometimes missing top lines on first paint](https://github.com/QwenLM/qwen-code/issues/8124) — P2, 9 comments. Highest-comment issue today; intermittent TUI rendering bug in `AppHeader`, apparently correlated with pending provider updates.

- [#7972 0.21.1使用 奔溃3次 / crashes three times](https://github.com/QwenLM/qwen-code/issues/7972) — P2, 4 comments. Windows crash reports after upgrading to v0.21.1; related to broader VP-mode crash investigations.

- [#8083 design(core): make derived Config context ownership explicit](https://github.com/QwenLM/qwen-code/issues/8083) — P1, 5 comments. Architecture issue: ad hoc `Object.create(base)` overrides in derived `Config` instances are fragile across subagents, scoped memory agents, and approval-mode paths.

- [#8102 proposal(core): deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102) — P3, 4 comments. Proposes constraining, authorizing, observing, and evaluating model-produced actions deterministically — signals growing interest in agent trust/safety primitives.

- [#4063 refactor: core + cli 架构 Review — 12 项结构性问题清单](https://github.com/QwenLM/qwen-code/issues/4063) — 5 comments, 1 👍. Long-running architecture debt review: `@google/genai` types leak across 136 files, plus 14 categorized structural issues in `packages/core` and `packages/cli`.

## Key PR Progress

- [#8005 feat(cli): adopt Goal v3 in interactive TUI](https://github.com/QwenLM/qwen-code/pull/8005) — Adds canonical `/goal` lifecycle commands, persistent lifecycle cards, Goal-aware resume/branch recovery, and a two-lane input queue.

- [#8132 feat(desktop): package Web Shell as a release-ready desktop app](https://github.com/QwenLM/qwen-code/pull/8132) — Turns the Tauri PoC into a production desktop shell that owns native lifecycle around the existing Web Shell.

- [#8163 fix(anthropic): don't strip a trailing tool_use and dedup duplicate tool_result blocks](https://github.com/QwenLM/qwen-code/pull/8163) — Fixes [#8159](https://github.com/QwenLM/qwen-code/issues/8159); prevents silent history loss in Anthropic conversion by distinguishing "no result yet" from "orphaned."

- [#8137 fix(cli): scope warning credential stripping to the URL authority](https://github.com/QwenLM/qwen-code/pull/8137) — Fixes [#8136](https://github.com/QwenLM/qwen-code/issues/8136); replaces whole-message `indexOf` credential heuristics with proper URL-authority parsing.

- [#8088 fix(cli): prevent silent VP-mode crash by adding uncaughtException handler and error visibility](https://github.com/QwenLM/qwen-code/pull/8088) — Related to [#7971](https://github.com/QwenLM/qwen-code/issues/7971) / [#7972](https://github.com/QwenLM/qwen-code/issues/7972); ensures crashes in VP mode are visible instead of silently exiting.

- [#8056 fix(serve): isolate managed memory by selected workspace](https://github.com/QwenLM/qwen-code/pull/8056) — Adds workspace-qualified remember/forget/dream operations and an opt-in exact-workspace storage mode for managed project memory.

- [#8171 feat(memory): configure background agent turn limits](https://github.com/QwenLM/qwen-code/pull/8171) — Implements `memory.agentMaxTurns` for dream and auto-skill agents; `0` disables the limit. Fixes [#8168](https://github.com/QwenLM/qwen-code/issues/8168).

- [#8032 feat(core): add a host tool invocation guard](https://github.com/QwenLM/qwen-code/pull/8032) — Adds an optional in-process guard before final tool execution, receiving call ID, canonical tool name, structured params, and abort signal.

- [#8121 feat(core): add current PR Autofix watcher](https://github.com/QwenLM/qwen-code/pull/8121) — Adds `/autofix status|on` for the current branch's PR, including CI/review state, mode counters, and auto-commit/auto-push options.

- [#8050 fix: make the test suite portable on Windows](https://github.com/QwenLM/qwen-code/pull/8050) — Makes platform-sensitive runtime paths and test assertions consistent on Windows while preserving POSIX-only semantics.

## Feature Request Trends

- **Trustworthy, observable agent execution** — Requests for deterministic tool-execution boundaries ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)), host tool invocation guards ([#8032](https://github.com/QwenLM/qwen-code/pull/8032)), and subagent status monitoring ([#8128](https://github.com/QwenLM/qwen-code/issues/8128)) show a clear push toward auditable, controllable agent loops.

- **Memory and workspace ownership** — Users want configurable background agents (`memory.agentMaxTurns`, [#8168](https://github.com/QwenLM/qwen-code/issues/8168)), workspace-isolated managed memory ([#8056](https://github.com/QwenLM/qwen-code/pull/8056)), and explicit derived-`Config` ownership ([#8083](https://github.com/QwenLM/qwen-code/issues/8083)) to avoid cross-workspace contamination.

- **PR/CI automation** — The long-standing "Auto Fix CI & Review Comments" request ([#4362](https://github.com/QwenLM/qwen-code/issues/4362)) is being realized through the PR Autofix watcher ([#8121](https://github.com/QwenLM/qwen-code/pull/8121)) and bot-filed CI failure issues ([#8173](https://github.com/QwenLM/qwen-code/issues/8173)).

- **Cross-platform and desktop maturity** — Windows compatibility (installer, file paste, tests), local-provider support like LM Studio ([#8146](https://github.com/QwenLM/qwen-code/issues/8146)), and packaging the Web Shell as a desktop app ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)) are recurring themes.

## Developer Pain Points

- **Windows remains the weakest platform** — Crash reports ([#7972](https://github.com/QwenLM/qwen-code/issues/7972)), installer SHA-256 failure ([#7118](https://github.com/QwenLM/qwen-code/issues/7118)), desktop file-reference search failures ([#8123](https://github.com/QwenLM/qwen-code/issues/8123)), LM Studio connectivity ([#8146](https://github.com/QwenLM/qwen-code/issues/8146)), and missing Explorer paste support ([#7957](https://github.com/QwenLM/qwen-code/pull/7957)) continue to generate friction.

- **Anthropic converter/history bugs** — Multiple P2 issues ([#8159](https://github.com/QwenLM/qwen-code/issues/8159), [#8160](https://github.com/QwenLM/qwen-code/issues/8160), [#8161](https://github.com/QwenLM/qwen-code/issues/8161), [#8162](https://github.com/QwenLM/qwen-code/issues/8162)) around orphaned `tool_use`, stale `thinking` signatures, unsanitized IDs, and mixed-content ordering risk API errors and conversation corruption.

- **Flaky CI and E2E tests** — Numerous auto-filed CI failures ([#8072](https://github.com/QwenLM/qwen-code/issues/8072), [#8076](https://github.com/QwenLM/qwen-code/issues/8076), [#8108](https://github.com/QwenLM/qwen-code/issues/8108), [#8133](https://github.com/QwenLM/qwen-code/issues/8133), [#8153](https://github.com/QwenLM/qwen-code/issues/8153), [#8173](https://github.com/QwenLM/qwen-code/issues/8173)) point to test reliability issues that slow merges and require bot-driven re-runs.

- **Configuration/workspace isolation** — Worktree settings writing to the wrong `.qwen` ([#8138](https://github.com/QwenLM/qwen-code/issues/8138)), fragile `Object.create` config overrides ([#8083](https://github.com/QwenLM/qwen-code/issues/8083)), and memory not being workspace-qualified ([#8056](https://github.com/QwenLM/qwen-code/pull/8056)) create subtle cross-project contamination.

- **Security and secret handling** — The provider-warning sanitizer can leak passwords ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)), and the broader community discussion around trustworthy tool execution ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)) reflects ongoing unease about unfettered model-driven actions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest — 2026-07-31

## Today's Highlights

Codewhale v0.9.2 is now the public product from Shannon Labs, and the legacy `deepseek-tui` npm package is formally deprecated in favor of the lowercase `codewhale` command. The past 24 hours show the community converging on v0.9.3 refactoring work: breaking up the monolithic TUI crate, converging runtime ownership, and reducing model-facing context bloat. A new desktop-app request, discussions about long compile times, and growing Windows/ABNT2 keyboard feedback are also active.

## Releases

- **v0.9.2** — Codewhale public release. The `codewhale` command, npm package, and release assets are the canonical lowercase technical identifiers. The legacy npm package `deepseek-tui` is deprecated and receives no further releases; v0.8.x users should migrate to `codewhale`. Finalization happened via [PR #4982](https://github.com/Hmbown/CodeWhale/pull/4982).

## Hot Issues

1. [#2870 — EPIC: staged command-boundary refactor for #2791](https://github.com/Hmbown/CodeWhale/issues/2870)  
   Tracks smaller mergeable layers for the command-boundary refactor. 19 comments make it one of the most-discussed coordination issues right now.

2. [#3306 — v0.9.3 Refactor: converge runtime ownership, delete duplication, ship one executable](https://github.com/Hmbown/CodeWhale/issues/3306)  
   The workspace has 18 Rust packages, but ~87% of code still lives in `codewhale-tui`. The community sees this duplication as the root of several maintainability and reliability problems.

3. [#2369 — CodeWhale config paths fragmented across OS and Cygwin plus silent migration bug](https://github.com/Hmbown/CodeWhale/issues/2369)  
   Config/secret resolution varies by environment, and a legacy migration can silently leave users with wrong paths. Important for Windows and Cygwin users.

4. [#4022 — Define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)  
   Subagent controls currently live mainly in the TUI sidebar. The issue argues these control surfaces must not be trapped inside the TUI if a cloud app or remote workflow client is to work later.

5. [#4949 — Chinese translation of "Constitution": 宪法, 协作准则, or something else?](https://github.com/Hmbown/CodeWhale/issues/4949)  
   A localization debate from PR #4908. Native speakers are split on whether "宪法" conveys authority or carries unwanted political overtones. Good signal that the project is attracting international contributors.

6. [#4991 — Compilation times and the TUI crate monolith: are others feeling this?](https://github.com/Hmbown/CodeWhale/issues/4991)  
   A fresh discussion from the slash-command refactor work. Developers are spending significant time waiting on compiles because of the oversized TUI crate.

7. [#4906 — Show, don't tell: record a real Codewhale session for the site and a README GIF](https://github.com/Hmbown/CodeWhale/issues/4906)  
   The product has no visual demo anywhere. Community asks for a real session recording showing the Work surface, phase rail, delegate cards, and ambient ocean.

8. [#4986 — First-class desktop app for project and agent workflows](https://github.com/Hmbown/CodeWhale/issues/4986)  
   A user requests a Codex Desktop-like experience rather than managing terminals, working directories, and background processes manually.

9. [#4978 — Frequent Anthropic API error: `'type' must be in ["enabled", "disabled", "auto"]`](https://github.com/Hmbown/CodeWhale/issues/4978)  
   Reproducible with `providers.openmodel` as an Anthropic-compatible provider. Sporadic 400 errors interrupt otherwise working sessions.

10. [#4930 — Enter during foreground shell should detach it before steering](https://github.com/Hmbown/CodeWhale/issues/4930)  
    Typing a message while a foreground `cargo build` or `sleep 30` is blocking currently fails confusingly. Closed after a fix, but it remains a strong example of TUI interaction friction.

## Key PR Progress

1. [#4982 — release: finalize Codewhale v0.9.2](https://github.com/Hmbown/CodeWhale/pull/4982)  
   Finishes the paused v0.9.2 handoff fixes: permission truth, Fleet setup, reasoning inspection, compaction errors, sub-agent supervision, sandbox truth, credential UX, and ambient silhouettes.

2. [#4980 — docs(permissions): publish and lock authorization order](https://github.com/Hmbown/CodeWhale/pull/4980)  
   Documents the implemented authorization order and locks precedence with engine-level contract tests.

3. [#4979 — fix(tui): detach foreground shell before steering](https://github.com/Hmbown/CodeWhale/pull/4979)  
   Moves a blocking Bash wait to `/jobs` before enqueueing same-turn steering. Keeps busy-Enter queue behavior intact.

4. [#4992 — Layer 5.2: User command dispatch precedence, shadowing, and error semantics](https://github.com/Hmbown/CodeWhale/pull/4992)  
   Adds Gherkin coverage for user-command shadowing of built-ins/aliases, fallback behavior, and invalid-command errors.

5. [#4990 — fix(devcontainer): support Windows development](https://github.com/Hmbown/CodeWhale/pull/4990)  
   Uses a dedicated dev image with Rust toolchain, rustfmt, pkg-config, and DBus headers. Replaces host HOME bind mounts with named volumes, fixing Windows HOME expansion issues.

6. [#4981 — feat(tui): LaTeX environments, text, and command support for math rendering](https://github.com/Hmbown/CodeWhale/pull/4981)  
   Extends LaTeX math rendering with environment blocks, common inline/accent commands, command-aware sub/superscripts, and case-insensitive matching.

7. [#4977 — fix(tui): let AltGr-typed "/" reach the composer instead of opening help](https://github.com/Hmbown/CodeWhale/pull/4977)  
   Fixes Windows ABNT2 layout issue where `AltGr+Q` arrives as `Ctrl+Alt+Q` and triggers the global `Ctrl-/` help chord.

8. [#4942 — fix(tools): preserve CRLF edits](https://github.com/Hmbown/CodeWhale/pull/4942)  
   Maps `edit_file` searches back to original CRLF bytes and normalizes replacements to the base file style without rewriting untouched content.

9. [#4896 — [codex] move terminal clipboard writes off event loop](https://github.com/Hmbown/CodeWhale/pull/4896)  
   Routes OSC 52 and SSH/tmux clipboard transport through a serialized background worker, with a bounded queue to prevent clipboard backlog.

10. [#4985 — feat(runtime-api): scope task listing by workspace](https://github.com/Hmbown/CodeWhale/pull/4985)  
    Adds an optional `workspace` filter to `GET /v1/tasks` and includes workspace paths in `TaskSummary`, enabling GUI consumers to scope task lists correctly.

## Feature Request Trends

- **Consolidation to one binary / one runtime** — Many v0.9.3 issues ask to converge runtime ownership, make `main.rs` a thin CLI dispatcher, and ship a single executable: [#3306](https://github.com/Hmbown/CodeWhale/issues/3306), [#3948](https://github.com/Hmbown/CodeWhale/issues/3948), [#4747](https://github.com/Hmbown/CodeWhale/issues/4747), [#4174](https://github.com/Hmbown/CodeWhale/issues/4174).
- **Context and token efficiency** — A broad "context diet" effort spans prompt deduplication, hard prompt budgets, cross-model ablation gates, and compaction survival contracts: [#4704](https://github.com/Hmbown/CodeWhale/issues/4704), [#4707](https://github.com/Hmbown/CodeWhale/issues/4707), [#4709](https://github.com/Hmbown/CodeWhale/issues/4709), [#4710](https://github.com/Hmbown/CodeWhale/issues/4710), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394).
- **Desktop and visual demo experience** — Users want a first-class desktop app and a real recorded session/GIF for the README and website: [#4986](https://github.com/Hmbown/CodeWhale/issues/4986), [#4906](https://github.com/Hmbown/CodeWhale/issues/4906).
- **Subagent steering and CLI/TUI parity** — Repeatedly requested as durable, context-efficient subagent control that works outside the TUI: [#4022](https://github.com/Hmbown/CodeWhale/issues/4022), [#4989](https://github.com/Hmbown/CodeWhale/issues/4989).
- **Localization and keyboard-layout support** — More shipped locales, translation debates, and AltGr/ABNT2 fixes: [#4949](https://github.com/Hmbown/CodeWhale/issues/4949), [#4977](https://github.com/Hmbown/CodeWhale/pull/4977), [#4856](https://github.com/Hmbown/CodeWhale/pull/4856).

## Developer Pain Points

- **Long compilation times** caused by the monolithic `codewhale-tui` crate; developers are actively waiting on cargo builds during refactor work ([#4991](https://github.com/Hmbown/CodeWhale/issues/4991)).
- **Config/secret path fragmentation** across macOS, Windows, and Cygwin, including silent migration bugs that make saved credentials appear missing ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369), [#4987](https://github.com/Hmbown/CodeWhale/issues/4987)).
- **Windows input and dev environment friction**: AltGr-typed `/` triggering help and devcontainers breaking on Windows HOME expansion ([#4977](https://github.com/Hmbown/CodeWhale/pull/4977), [#4990](https://github.com/Hmbown/CodeWhale/pull/4990)).
- **Opaque compaction failures**: developers cannot tell whether context headroom, provider quota, malformed transcripts, or local trimming caused a failure ([#4988](https://github.com/Hmbown/CodeWhale/issues/4988), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394)).
- **Blocking foreground shell interrupts steering**: pressing Enter mid-turn with a running Bash command behaves confusingly; fixes are landing but the UX was a notable pain point ([#4930](https://github.com/Hmbown/CodeWhale/issues/4930), [#4979](https://github.com/Hmbown/CodeWhale/pull/4979)).
- **Duplicate registries and parallel runtime paths**: TUI vs abstract tool registries, duplicated config/session/hook paths, and overlapping prompt sources create maintenance burden ([#3306](https://github.com/Hmbown/CodeWhale/issues/3306), [#3950](https://github.com/Hmbown/CodeWhale/issues/3950), [#4174](https://github.com/Hmbown/CodeWhale/issues/4174)).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*