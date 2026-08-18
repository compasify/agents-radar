# AI CLI Tools Community Digest 2026-08-18

> Generated: 2026-08-17 23:11 UTC | Tools covered: 9

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
**Date:** 2026-08-18  
**Source:** Community digests for Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, CodeWhale, DeepSeek Harness

---

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing from “demo-grade assistants” toward production infrastructure. The dominant concerns are reliability, resource governance, and session/context integrity — not raw model capability. Communities are increasingly demanding non-interrupting interaction models, first-party cost observability, and hardened MCP/OAuth integration. Windows and macOS desktop regressions are emerging as trust-eroding pain points across multiple tools. At the same time, maintainers are investing in automated eval suites, plugin systems, and agent orchestration as their key differentiators.

---

## 2. Activity Comparison

Counts below reflect issues/PRs/discussions highlighted in today’s digest, not total repo-wide activity. No tool in this digest had Issues/PRs disabled upstream, so no “N/A” entries were required.

| Tool | Issues (highlighted) | PRs (highlighted) | Discussions (highlighted) | Release Status |
|---|---:|---:|---:|---|
| **Claude Code** | 10 | 10 | 0 reported | v2.1.234 |
| **OpenAI Codex** | 10 | 10 | 4 | rust-v0.148.0-alpha.21 |
| **Gemini CLI** | 10 | 10 | 0 reported | v0.56.0-nightly.20260817 |
| **GitHub Copilot CLI** | 10 | 1 | 0 reported | No release in window |
| **OpenCode** | 10 | 10 | 0 reported | No release in window |
| **Pi** | 10 (of 50 updated) | 10 (of 34 updated) | 2 | No release in window |
| **Qwen Code** | 10 | 10 | 0 reported | v0.21.13 + nightly |
| **CodeWhale** | 10 | 10 | 0 reported | No formal release; v0.9.9 release PR landed |
| **DeepSeek Harness** | 0 | 0 | 0 | No activity |

---

## 3. Shared Feature Directions

Several requirements appear across multiple tool communities:

- **Non-interrupting / queue-based interaction**
  - Claude Code: message queue mode (`#50246`, 198 👍)
  - OpenAI Codex: new `codex queue --thread --message` command
  - OpenCode: `/loop` and `/proactive` session commands
  - Qwen Code: scheduled tasks reusing live sessions

- **Context, compaction, and memory lifecycle**
  - Pi: auto-compaction after every agentic turn, append compaction, provider overflow prevention
  - Qwen Code: stale context display after `/compress`, lost context after `/rewind`
  - Copilot CLI: memory-pressure watchdog looping destructive compactions
  - CodeWhale: compact noisy web tool results

- **MCP reliability and security hardening**
  - Codex: MCP OAuth token refresh, updated `rmcp` runtime
  - Copilot CLI: Atlassian and GitLab OAuth metadata failures
  - OpenCode: MCP tools connected but not exposed to the agent
  - Gemini CLI: extension consent bypass and env-var injection fix

- **Windows/macOS platform robustness**
  - Claude Code: Windows desktop GPU crash bricks app; mapped-network-drive session loss
  - OpenCode: Windows ARM64 TUI init failure; broken path/permission config
  - Qwen Code: Ctrl+V paste regression on Windows
  - CodeWhale: Windows/Cygwin config-path fragmentation
  - Codex: macOS zombie MCP helper processes causing HID lag

- **Usage / cost observability**
  - Claude Code: first-party `claude usage` command
  - Codex: weekly reset/bonus credits discussion
  - CodeWhale: per-turn DeepSeek V4 tiered peak/off-peak pricing
  - Pi: OpenRouter missing Anthropic-style cache control → 2.5× cost penalty

- **Agent orchestration and truthful status reporting**
  - Gemini CLI: subagent `MAX_TURNS` misreported as `GOAL` success
  - Codex: background subprocesses not waking calling agent
  - CodeWhale: subagent timeouts leave session stuck
  - Copilot CLI: stale connection item IDs after resume

---

## 4. Differentiation Analysis

- **Claude Code** targets enterprise developers in large codebases. Its differentiation is deep governance: hook systems, sandboxing, plugin lifecycle scripts, and IDE/desktop integration. Current focus is reliability under memory pressure and Windows desktop trust.

- **OpenAI Codex** is pushing hardest on multi-agent and remote orchestration: agents dashboard, queue command, desktop remote control. Its Rust rewrite and GPT-5.6 context-window expansion signal a performance-first, power-user-oriented direction.

- **Gemini CLI** stands out for automated quality engineering: SSR Agent–generated fixes, component-level evals, and aggressive P1 hang resolution. It is rapidly iterating on agent reliability rather than adding surface features.

- **GitHub Copilot CLI** is the most enterprise-governance-centric tool, tightly coupled to GitHub models, ACP, marketplace plugins, and org-level settings. Its PR cadence is low, but issue activity reflects real enterprise deployment pain.

- **OpenCode** differentiates on provider flexibility and plugin/API surfaces. It is the most affected by provider/endpoint fragmentation (Azure, EU OAuth, gateway 403s) and Windows TUI issues, suggesting a broad, tinker-friendly user base.

- **Pi** is the context/compaction specialist: experimental append compaction, provider cache reuse, and fine-grained thinking-budget compatibility. Its community is technical and focuses on local/OpenRouter providers.

- **Qwen Code** is broadening beyond the terminal into Web Shell, Desktop, WeChat, and HTML export. It combines a strong release-validation pipeline (SWE-bench Verified, Terminal-Bench) with automation features like autofix and scheduled tasks.

- **CodeWhale** is the smallest project but has a clear niche: DeepSeek-focused harness with TUI polish. Its release themes (“truth-and-resilience”) and pricing-transparency work show a pragmatic, user-experience-driven maintainer strategy.

---

## 5. Community Momentum & Maturity

- **Claude Code and OpenAI Codex** have the largest and most engaged communities. Claude Code’s 198 👍 on a closed feature and Codex’s 195 👍 on auto-resolve control indicate very high user investment. Both are iterating rapidly.

- **Gemini CLI** has the fastest reliability iteration this cycle: multiple P1 fixes landed in a single day, supported by a nightly release cadence and automated eval infrastructure. Community size is smaller than Codex/Claude, but momentum is strong.

- **Qwen Code** is rapidly shipping and validating end-to-end. The v0.21.13 release with full benchmark validation is a sign of a mature release pipeline.

- **OpenCode and Pi** have healthy, technical communities with steady PR activity and deep feature discussions. OpenCode’s issue tracker is broad but fragmented; Pi’s community is more focused on context engineering.

- **GitHub Copilot CLI** is mature but slower-moving in code terms (only one PR in window). Its issue tracker is active, but community energy is concentrated on enterprise blockers rather than new features.

- **CodeWhale** is steadily improving but remains a smaller ecosystem. The lack of a formal release in the window, despite an active release PR, suggests a cautious, quality-first cycle.

- **DeepSeek Harness** showed no community activity in the window.

---

## 6. Trend Signals

- **Context management is the new battlefront.** Auto-compaction, append compaction, and per-turn memory limits are now core requirements, not edge cases. Tools that mishandle context lose user trust quickly.

- **MCP is becoming the integration standard — and the reliability bottleneck.** OAuth metadata validation, token refresh, tool exposure, and process lifecycle are recurring failures across at least four tools.

- **Silent data loss and misleading status reports are the top severity class.** Cross-session message drops, stale session IDs, subagent false-success reports, and destructive compaction loops are consistently called out as critical.

- **Windows support is a differentiator.** The same issues recur across Claude Code, Codex, OpenCode, Qwen, and CodeWhale: terminal regressions, path handling, sandbox network gaps, and desktop crashes. Tools that solve Windows reliability will win enterprise trust.

- **Users want control over the agent loop.** Queue don’t interrupt, disable auto-resolve, restore prompts on cancel, and reuse sessions on schedule — the demand is for human-paced, non-disruptive agent interaction.

- **First-party cost observability is overdue.** Community members are requesting built-in usage analytics, pricing transparency, and credit fairness across Claude Code, Codex, Pi, and CodeWhale.

- **Security boundaries are being tested.** Extension consent bypasses, env-var injection, supply-chain RCE in CI workflows, and sandbox escape vectors are appearing in community PRs — security hardening is now a visible community contribution area.

---

*Prepared for technical decision-makers and developers evaluating AI CLI tooling alignment, risk, and investment direction.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-18

*Source: github.com/anthropics/skills · PRs and Issues sorted by community comment activity.*

## 1. Top Skills Ranking

The most active PRs are a mix of new skill contributions and fixes to the skill-development tooling itself. All listed PRs are still **open**.

1. **skill-creator eval fix** — [#1298](https://github.com/anthropics/skills/pull/1298)  
   Fixes `run_eval.py` and its consumers so skill descriptions are no longer evaluated against noise. The PR installs the eval artifact as a real skill, adds Windows stream-reading fixes, and improves trigger detection and parallel workers. It directly targets the widely reported `recall=0%` bug in [#556](https://github.com/anthropics/skills/issues/556).

2. **document-typography skill** — [#514](https://github.com/anthropics/skills/pull/514)  
   New skill for typographic quality control in AI-generated documents: orphan word wrap, widow paragraphs, stranded headers, and numbering misalignment. The discussion highlights how broadly these issues affect Claude-generated documents.

3. **ODT / OpenDocument skill** — [#486](https://github.com/anthropics/skills/pull/486)  
   Adds creation, template filling, reading, and ODT-to-HTML conversion for `.odt`/`.ods`/`.odf` files. Community interest is driven by demand for open-standard document support beyond DOCX/PDF.

4. **frontend-design skill improvement** — [#210](https://github.com/anthropics/skills/pull/210)  
   Revises the existing frontend-design skill to be more actionable and internally coherent. The goal is to make every instruction concrete enough for Claude to follow within a single conversation.

5. **skill-quality-analyzer + skill-security-analyzer** — [#83](https://github.com/anthropics/skills/pull/83)  
   Two marketplace meta-skills that evaluate Claude Skills across structure/documentation quality and security posture. This PR reflects growing community interest in skill validation and safe distribution.

6. **self-audit skill** — [#1367](https://github.com/anthropics/skills/pull/1367)  
   Universal skill that performs mechanical file verification first, then a four-dimension reasoning audit in damage-severity order. It is designed to work across projects, stacks, and models, and aligns with the quality-gate discussion in [#1385](https://github.com/anthropics/skills/issues/1385).

7. **testing-patterns skill** — [#723](https://github.com/anthropics/skills/pull/723)  
   Comprehensive testing skill covering testing philosophy, the Testing Trophy model, unit testing, React component testing with Testing Library, and anti-patterns. Positions well as a general-purpose engineering companion skill.

8. **ServiceNow platform skill** — [#568](https://github.com/anthropics/skills/pull/568)  
   Broad ServiceNow skill covering ITSM, ITOM, ITAM/SAM, FSM, SecOps, SPM, and IntegrationHub. One of the largest enterprise-platform skill proposals in the current open PR set.

---

## 2. Community Demand Trends

The highest-signal Issues show several recurring directions:

- **Security and trust boundaries around Skills** — [#492](https://github.com/anthropics/skills/issues/492), 43 comments. Community-made skills distributed under the `anthropic/` namespace create impersonation and permission risks. Demand is for provenance, namespace separation, and clearer trust controls.

- **Org-wide sharing and discoverability** — [#228](https://github.com/anthropics/skills/issues/228), 16 comments. Users want shared skill libraries or direct sharing links instead of manually sending `.skill` files through Slack/Teams.

- **Reliable skill-development tooling** — [#556](https://github.com/anthropics/skills/issues/556), 12 comments, and [#202](https://github.com/anthropics/skills/issues/202), 8 comments. The community needs evaluation scripts and skill-creator workflows that are trustworthy and cross-platform.

- **Context-window efficiency** — [#1487](https://github.com/anthropics/skills/issues/1487), 4 comments, and the compact-memory proposal in [#1329](https://github.com/anthropics/skills/issues/1329), 9 comments. Skills that eagerly inject large token payloads are a major pain point. Interest is growing in compact symbolic memory and lazy-loading strategies.

- **Agent governance and reasoning quality gates** — [#412](https://github.com/anthropics/skills/issues/412), 6 comments, and [#1385](https://github.com/anthropics/skills/issues/1385), 4 comments. Proposed skill directions include policy enforcement, threat detection, audit trails, pre-task calibration, adversarial review, and delivery verification.

- **Document fidelity** — [#12](https://github.com/anthropics/skills/issues/12), 4 comments, and [#1362](https://github.com/anthropics/skills/issues/1362), 3 comments. DOCX/OOXML formatting corruption and broken web-artifact bundling remain important practical issues, especially in enterprise document workflows.

---

## 3. High-Potential Pending Skills

These open PRs have active comment threads and appear likely to land next:

- **document-typography** — [#514](https://github.com/anthropics/skills/pull/514)  
- **ODT / OpenDocument skill** — [#486](https://github.com/anthropics/skills/pull/486)  
- **testing-patterns skill** — [#723](https://github.com/anthropics/skills/pull/723)  
- **ServiceNow platform skill** — [#568](https://github.com/anthropics/skills/pull/568)  
- **Pyxel retro game development skill** — [#525](https://github.com/anthropics/skills/pull/525)  
- **skill-quality-analyzer + skill-security-analyzer** — [#83](https://github.com/anthropics/skills/pull/83)  
- **self-audit skill** — [#1367](https://github.com/anthropics/skills/pull/1367)  

These are not yet merged but represent the most concrete near-term additions to the Skills ecosystem.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **meta-level reliability**: Skills that are easy to evaluate, safe to install, disciplined about context usage, and backed by stronger governance — while new domain coverage expands mainly into enterprise platforms, testing, documents, and agent-safety workflows.

---

# Claude Code Community Digest — 2026-08-18

## Today's Highlights

Release v2.1.234 shipped a new `selection:clear` keybinding action and the `CLAUDE_CODE_PROJECT_DIR_NAME` environment variable for per-project transcript directories. On the issue tracker, the long-running message-queue request closed with 198 👍 after months of community support, while memory-leak/OOM reports in Bash tooling and a Windows desktop GPU crash that bricks the app dominate the bug queue. A large cluster of plugin-dev script robustness fixes from a single contributor also landed in the PR queue.

## Releases

**[v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)**
- Added the optional `CLAUDE_CODE_PROJECT_DIR_NAME` environment variable: hosts that give each session its own config directory can choose a short name for the per-project transcript directory.
- Added the `selection:clear` keybinding action, so a key can be bound to clear an in-app selection.

## Hot Issues

1. **[Message queue mode](https://github.com/anthropics/claude-code/issues/50246)** — *Closed, 60 comments, 198 👍.* The community's most-supported open feature: users want to queue follow-up messages while Claude is mid-task instead of interrupting and potentially derailing the current work. Its closure after months suggests it was consolidated or addressed elsewhere — worth confirming in upcoming releases.

2. **[Windows desktop app fatal GPU crash](https://github.com/anthropics/claude-code/issues/80444)** — *Open, 39 comments.* The in-app Browser tab triggers a fatal GPU-process crash (0x060C201E) that leaves the MSIX package unlaunchable (appxState=2) until a manual Repair. Reproduced across two NVIDIA driver versions — a crash plus a broken recovery path makes this especially severe.

3. **[Built-in usage analytics command (`claude usage`)](https://github.com/anthropics/claude-code/issues/33978)** — *Open, 20 comments.* Consolidates 10+ open issues requesting token and cost visibility. Community clearly wants first-party CLI analytics instead of third-party cost-tracking wrappers.

4. **[Cross-session messages silently dropped on Windows](https://github.com/anthropics/claude-code/issues/86298)** — *Open, 13 comments, has repro.* Regression since desktop app 1.28929.0: messages are held for an approval the UI never offers, then expire after ~5 minutes. Silent data loss in a chat product is a top-priority bug class.

5. **[Esc in `/btw` mode rejects the pending tool-use prompt](https://github.com/anthropics/claude-code/issues/64568)** — *Open, 10 comments, reproduced.* Pressing Esc to exit `/btw` mode gets routed to the pending permission prompt and declines the tool call instead of just exiting. A subtle mode-routing trap with real consequences (unintended tool rejection).

6. **[Bash `grep` shim catastrophic backtracking → OOM](https://github.com/anthropics/claude-code/issues/82179)** — *Open, 4 comments, reproduced.* The ugrep emulation blows up to 6.6 GB RSS on a 20 KB file when `-o` combines with bounded quantifiers around alternations. A tiny input causing an OOM kill is a sharp edge in the Bash tool.

7. **[Per-tool-call helper process leaks 11.6 GB](https://github.com/anthropics/claude-code/issues/87238)** — *Closed, 3 comments.* An ephemeral helper ballooned to 11.6 GB anonymous RSS during a slow sandboxed Bash command and was OOM-killed at the cgroup ceiling. Closed same-week — likely fixed or tracked internally.

8. **[Whole message renders as raw markdown when first construct starts after ~char 500](https://github.com/anthropics/claude-code/issues/87185)** — *Open, 1 comment.* Strong root-cause analysis: the renderer only scans the first ~500 characters to decide markdown vs. plaintext rendering. This elegantly explains a long-running class of intermittent "raw markdown" reports.

9. **[MCP elicitation form dialog clipped in fullscreen TUI](https://github.com/anthropics/claude-code/issues/69087)** — *Open, 3 comments.* The form's action buttons fall below the viewport and the dialog isn't scrollable, making MCP tools that require input effectively unusable in fullscreen terminals.

10. **[Mapped network drive sessions show "No sessions yet"](https://github.com/anthropics/claude-code/issues/78461)** — *Open, 2 comments.* VSCode workspaces on mapped SMB drives (`Z:\` → `\\SERVER\share`) have empty Local session lists due to a realpath mismatch, even though `claude --resume` works from a terminal.

## Key PR Progress

1. **[Remove statsig.anthropic.com from init-firewall.sh](https://github.com/anthropics/claude-code/pull/72451)** — *Closed.* The hostname no longer resolves, so devcontainer startup fails during firewall init. Small fix, but unblocks containerized development environments.

2. **[Don't abort validate-settings.sh when no lowercase frontmatter keys match](https://github.com/anthropics/claude-code/pull/79131)** — *Open.* `grep` returning 1 under `set -euo pipefail` kills the script with zero diagnostics; the fix also reports keys skipped by the pattern.

3. **[ralph-wiggum: use `disable-model-invocation` so the model can't self-invoke `/ralph-loop`](https://github.com/anthropics/claude-code/pull/87395)** — *Closed.* The plugin relied on an unsupported `hide-from-slash-command-tool` frontmatter key that silently did nothing, letting Claude start an infinite loop unprompted. Filed and fixed same day.

4. **[Add container isolation example with guard hook](https://github.com/anthropics/claude-code/pull/30692)** — *Closed.* Adds `examples/container/` with a complete Podman/Docker setup plus a PreToolUse guard hook intercepting force push, hard reset, branch -D, `rm -rf`, and PR merges.

5. **[Docs: clarify `excludedCommands` requires `:*` suffix](https://github.com/anthropics/claude-code/pull/29284)** — *Closed.* Documents that `"docker"` only matches the bare command while `"docker:*"` matches with arguments — preventing a confusing sandbox misconfiguration.

6. **[Limit plugin frontmatter parsing](https://github.com/anthropics/claude-code/pull/84004)** — *Closed.* Stops the range-based `sed` from restarting at every `---` horizontal rule in a Markdown body; now only the opening YAML block is parsed.

7. **[Propagate top-level failures in maintenance scripts](https://github.com/anthropics/claude-code/pull/84003)** — *Closed.* Both duplicate-maintenance scripts used `.catch(console.error)`, which reported failures but resolved successfully; they now return a failing process status.

8. **[Validate `gh` wrapper flag values](https://github.com/anthropics/claude-code/pull/83999)** — *Closed.* Missing values (e.g. `gh issue list --limit`) previously slipped through and bypassed the wrapper's argument validation; now rejected.

9. **[Validate label option values](https://github.com/anthropics/claude-code/pull/83995)** — *Closed.* Fixes `$2: unbound variable` aborts and prevents a following option from being consumed as a label value for `--add-label`/`--remove-label`.

10. **[Assert expected hook decisions in test-hook.sh](https://github.com/anthropics/claude-code/pull/83992)** — *Closed.* Adds `--expect allow|deny|ask` so hook tests can catch a hook that allows an operation it was intended to deny, instead of treating every run as success.

*The remaining PRs in the queue (#83993, #83990) are additional script-robustness fixes from the same author: rejecting self-referential duplicate reports and surfacing a missing `jq` dependency.*

## Hot Discussions

No discussion data was provided for this digest period.

## Feature Request Trends

- **Non-interrupting interaction**: The message queue mode request ([#50246](https://github.com/anthropics/claude-code/issues/50246)) remains the highest-signal community ask (198 👍) — users want to compose follow-ups without derailing active work.
- **First-party usage analytics**: The `claude usage` command ([#33978](https://github.com/anthropics/claude-code/issues/33978)) consolidates 10+ issues asking for built-in token/cost visibility in the CLI.
- **Persistent voice sessions**: A paramedic using Claude Code as a full personal assistant ([#83434](https://github.com/anthropics/claude-code/issues/83434)) requests no idle disconnects for voice conversations — evidence of real-world mobile/voice demand beyond the terminal power-user base.
- Overall, the pattern is: more control over the interaction loop (queue vs. interrupt), better cost observability, and always-on voice/async operation.

## Developer Pain Points

- **Memory blowups in the Bash toolchain**: Catastrophic grep-shim backtracking ([#82179](https://github.com/anthropics/claude-code/issues/82179)), a per-tool helper leak ([#87238](https://github.com/anthropics/claude-code/issues/87238)), and a post-command background-runner leak ([#87319](https://github.com/anthropics/claude-code/issues/87319)) all OOM at 10+ GB on small inputs. This is the week's most serious stability theme.
- **Windows desktop reliability**: GPU crash bricking the app until Repair ([#80444](https://github.com/anthropics/claude-code/issues/80444)) and silent cross-session message drops ([#86298](https://github.com/anthropics/claude-code/issues/86298)) are eroding trust in the desktop app.
- **TUI mode-routing and rendering bugs**: Esc declining tool calls in `/btw` mode ([#64568](https://github.com/anthropics/claude-code/issues/64568)), clipped MCP dialogs ([#69087](https://github.com/anthropics/claude-code/issues/69087)), and markdown rendering decided by the first 500 characters ([#87185](https://github.com/anthropics/claude-code/issues/87185)).
- **Windows session/path mismatches**: Mapped network drives show empty session lists ([#78461](https://github.com/anthropics/claude-code/issues/78461)) and unloadable legacy sessions silently fall back to Local instead of the derived default ([#87398](https://github.com/anthropics/claude-code/issues/87398)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-18

## Today’s Highlights
Community attention is focused on control and reliability: the top issues ask for a way to disable auto-resolve, fix MCP OAuth token refresh, and address a macOS Desktop regression with remote sessions. On the code side, new PRs add an agents overview dashboard to the TUI and a `codex queue` command for messaging existing sessions, while a GPT-5.6 context-window increase was proposed. A new Rust alpha release also landed.

## Releases
- [rust-v0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) — New alpha release published; no detailed changelog was provided in the data.

## Hot Issues
1. [**#28969**](https://github.com/openai/codex/issues/28969) — Add setting to disable the auto-resolve in 60 seconds for questions  
   Users want control over Codex automatically resolving prompts after a timeout. High engagement: 78 comments, 195 👍.

2. [**#17265**](https://github.com/openai/codex/issues/17265) — Codex does not auto-refresh routed MCP OAuth tokens even when a refresh token is stored  
   MCP tool calls fail after token expiry despite persisted refresh credentials. 31 comments, 57 👍.

3. [**#24990**](https://github.com/openai/codex/issues/24990) — Codex ChatGPT login flow  
   ChatGPT Plus subscribers report being redirected to auth.openai.com/add-phone instead of completing Codex login. 26 comments, 22 👍.

4. [**#37403**](https://github.com/openai/codex/issues/37403) — [macOS][regression] Desktop cannot resume Remote Control / CLI thread: “already has an active writer”  
   A recent Desktop update broke an existing mobile-to-desktop remote workflow. 21 comments, 17 👍.

5. [**#25744**](https://github.com/openai/codex/issues/25744) — Codex for macOS accumulates Computer Use / MCP helper processes and unreaped zombie children, causing HID lag  
   Long-running sessions degrade macOS performance through process/resource leaks. 19 comments.

6. [**#15723**](https://github.com/openai/codex/issues/15723) — Background subprocesses/subagents do not wake the calling agent on completion  
   Multi-agent workflows stall when subagents finish without notifying the parent agent. 18 comments.

7. [**#17793**](https://github.com/openai/codex/issues/17793) — Backspace deletes more than one character, making prompting harder  
   A basic but annoying TUI input bug affecting prompt editing. 16 comments.

8. [**#34268**](https://github.com/openai/codex/issues/34268) — Multi-agent V2 full-history forks duplicate historical compaction snapshots and inline images, causing >100 GiB session storage growth  
   Severe local storage bloat from duplicated session history. 9 comments, 6 👍.

9. [**#33282**](https://github.com/openai/codex/issues/33282) — Codex Desktop create_thread does not inherit auto-approval mode for worktree tasks  
   Desktop worktree tasks do not respect inherited auto-approval settings, causing permission friction. 9 comments.

10. [**#33599**](https://github.com/openai/codex/issues/33599) — Desktop app silently fails to attach node_repl MCP tools to new tasks — breaks Browser, Chrome, and Computer Use  
   Desktop tasks miss critical MCP tools while CLI with the same config works. 7 comments, 4 👍.

## Key PR Progress
1. [**#39094**](https://github.com/openai/codex/pull/39094) — Add an agents overview dashboard to the TUI  
   New `/agents` full-screen dashboard with search, navigation, and grouping by project/status.

2. [**#39092**](https://github.com/openai/codex/pull/39092) — Add a command to queue messages for existing sessions  
   Adds `codex queue --thread --message` for sending messages through the app-server API.

3. [**#39102**](https://github.com/openai/codex/pull/39102) — Raise the GPT-5.6 maximum context window  
   Allows `gpt-5.6-sol`, `gpt-5.6-terra`, and `gpt-5.6-luna` context-window overrides up to 872,000 tokens.

4. [**#39101**](https://github.com/openai/codex/pull/39101) — Update rmcp to 3.1.2  
   Upgrades the MCP runtime with native JSON-RPC decoding, improved SSE metadata, and OAuth protected-resource handling.

5. [**#39083**](https://github.com/openai/codex/pull/39083) — Harden Windows sandbox provisioning against reparse points  
   Prevents ACLs from being applied through directory junctions or symlinks to unintended locations.

6. [**#39082**](https://github.com/openai/codex/pull/39082) — Prompt for project trust in remote TUI workspaces  
   Remote TUI sessions now query the app server for project config layers and show a trust prompt when needed.

7. [**#39081**](https://github.com/openai/codex/pull/39081) — Bound TUI thread replay buffers by delta size  
   Coalesces adjacent deltas and limits buffer growth, avoiding unbounded memory retention.

8. [**#39079**](https://github.com/openai/codex/pull/39079) — Apply user MCP policy to selected executor plugins  
   Enforces MCP server enablement, tool allow/deny lists, and approval modes for executor-plugin roots.

9. [**#39091**](https://github.com/openai/codex/pull/39091) — Make codex-otel OTLP HTTP exporters proxy-aware  
   Routes OTLP logs/traces/metrics through proxy-aware transports while preserving TLS and enterprise CA support.

10. [**#39084**](https://github.com/openai/codex/pull/39084) — Preserve filesystem permission path conventions  
   Avoids prematurely converting ambiguous paths like `/C:/secret` or Windows UNC paths, improving Windows correctness.

## Hot Discussions

### Ideas
- [**#12567**](https://github.com/openai/codex/discussions/12567) — Memories in Codex  
  Maintainers are asking how much users want Codex to cite previous threads when memory is used. 33 comments, 14 👍.

- [**#39048**](https://github.com/openai/codex/discussions/39048) — Weekly reset / bonus credits for Codex users  
  Proposal for recurring usage resets or bonus credits, similar to other AI providers.

### Show and tell
- [**#36262**](https://github.com/openai/codex/discussions/36262) — Codex How To v0.3: engineering loop + review-first Living Wiki  
  Community-built engineering-first curriculum and reusable workflow package for Codex.

- [**#39044**](https://github.com/openai/codex/discussions/39044) — Is Codex Working? Windows tray app to show when Codex is actually making progress  
  A tiny Windows tray utility that visualizes whether long-running Codex tasks are making progress.

## Feature Request Trends
- **Approval and auto-resolve control** — Requests to disable 60-second auto-resolve ([#28969](https://github.com/openai/codex/issues/28969)) and inherit auto-approval modes in Desktop worktrees ([#33282](https://github.com/openai/codex/issues/33282)).
- **Persistent memory and cross-session context** — Strong interest in Codex memories and using prior thread context ([#12567](https://github.com/openai/codex/discussions/12567)).
- **MCP reliability and lifecycle management** — Demands for OAuth refresh ([#17265](https://github.com/openai/codex/issues/17265)), proper MCP process cleanup ([#38754](https://github.com/openai/codex/issues/38754)), and consistent MCP tool attachment in Desktop ([#33599](https://github.com/openai/codex/issues/33599)).
- **TUI/terminal polish** — Requests include fixing Backspace behavior ([#17793](https://github.com/openai/codex/issues/17793)), collapsing progress code snippets ([#32817](https://github.com/openai/codex/issues/32817)), and separate font settings ([#25281](https://github.com/openai/codex/issues/25281)).
- **Usage fairness** — Community interest in weekly resets/bonus credits ([#39048](https://github.com/openai/codex/discussions/39048)) and reward credits for high-quality bug reports ([#37585](https://github.com/openai/codex/issues/37585)).

## Developer Pain Points
- **Authentication friction** — Plus subscribers unable to complete ChatGPT login ([#24990](https://github.com/openai/codex/issues/24990)) and MCP OAuth tokens not refreshing automatically ([#17265](https://github.com/openai/codex/issues/17265)).
- **Unbounded resource usage** — Zombie MCP/helper processes on macOS ([#25744](https://github.com/openai/codex/issues/25744)), >100 GiB session storage ([#34268](https://github.com/openai/codex/issues/34268)), and repeated Windows stdio MCP spawning ([#38754](https://github.com/openai/codex/issues/38754)).
- **Agent orchestration gaps** — Subagents/background processes not waking the caller ([#15723](https://github.com/openai/codex/issues/15723)) and forked workers misinterpreting inherited user intent ([#13491](https://github.com/openai/codex/issues/13491)).
- **Desktop/remote regressions** — Remote Control resume failures after updates ([#37403](https://github.com/openai/codex/issues/37403)) and remote-created worktree threads not appearing in the Desktop sidebar ([#23418](https://github.com/openai/codex/issues/23418)).
- **Windows sandbox and permission issues** — DPAPI credential loss in elevated sandbox ([#35841](https://github.com/openai/codex/issues/35841)) and unsafe reparse-point handling during provisioning ([#39083](https://github.com/openai/codex/pull/39083)).
- **Basic terminal editing defects** — Backspace deleting multiple characters ([#17793](https://github.com/openai/codex/issues/17793)) and task cycling shortcuts not working reliably ([#32878](https://github.com/openai/codex/issues/32878)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-18

## 1. Today's Highlights
Agent reliability remains the dominant theme: a wave of SSR Agent–generated fixes landed to address subagent termination misreporting (#28815), TUI and MessageBus hangs (#28812, #28816), and silent hook-state drops (#28817). On the security front, a new community PR (#28863) targets extension consent bypass and environment variable injection into MCP subprocesses. The only release is a minor nightly, mostly carrying infra housekeeping for the SSR Agent.

## 2. Releases
**v0.56.0-nightly.20260817.g9a15c45fb** — Adds the `composite` flag to the packages/cli tsconfig, fixing an SSR Agent packaging build issue. No user-facing behavior changes.
[View release](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260816.g2a87e7be1...v0.56.0-nightly.2)

## 3. Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** · P1, 12 comments · The `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit its turn limit without doing any analysis. Misleading success signals undermine trust in agent output and are now targeted by PR #28815.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** · P1, 8 comments, 8 👍 · The most-reacted issue this cycle: any deferral to the generalist agent can hang indefinitely (up to an hour). Community workaround — instructing the model to never use subagents — points to a systemic executor problem rather than a prompt issue.

3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** · P2 enhancement, 8 comments · Proposes leaning into Gemini 3's native bash proficiency by sandboxing shell execution and routing post-execution intent, balancing model capability with security.

4. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** · P1 EPIC, 7 comments · Follow-up to the behavioral evals initiative; tracks scaling the existing 76 eval tests across six Gemini models and adding component-level coverage.

5. **[#22745 — Assess AST-aware file reads, search, and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** · P2 EPIC, 7 comments · Investigates whether AST-aware tools can reduce token noise and tool-call turns by precisely reading method bounds and navigating code structure in a single call.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** · P2, 6 comments · Anecdotal but widely relatable: the model ignores custom skills/sub-agents unless explicitly instructed, even when user-defined skills describe highly relevant workflows (e.g., gradle, git).

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** · P2, 5 comments · The background extraction agent re-surfaces already-skipped low-signal sessions forever because only successful `read_file` marks a session as processed — causing wasted tokens and repeated work.

8. **[#25166 — Shell command gets stuck with "Waiting input" after completing](https://github.com/google-gemini/gemini-cli/issues/25166)** · P1, 4 comments, 3 👍 · Simple CLI commands that cannot prompt still leave the shell in an "awaiting input" state indefinitely. Another entry in the recurring hang family.

9. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** · P2, 3 comments · Regression report: subagents execute despite agents being disabled in all configurations. Permission-boundary regressions like this are high-impact for enterprise users.

10. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** · P2, 3 comments · The CLI hits API 400s when more than ~128 tools are available; users expect scoping/selection rather than a hard failure as the tool ecosystem grows.

## 4. Key PR Progress
1. **[#28815 — Preserve original termination reason during subagent recovery](https://github.com/google-gemini/gemini-cli/pull/28815)** · P1, closed · Fixes #22323: when a subagent hits `MAX_TURNS`/`TIMEOUT` and succeeds on the final grace-recovery turn, the original interruption reason is now preserved instead of being rewritten as `GOAL`.

2. **[#28812 — Prevent indefinite TUI hang by adding execution timeouts](https://github.com/google-gemini/gemini-cli/pull/28812)** · P1, closed · Addresses #21477: initializes hang on bare Linux terminals because `getProcessInfo()` blocks on `ps`; adds execution timeouts to break the deadlock.

3. **[#28816 — Fix silent hang in MessageBus.request when publish fails](https://github.com/google-gemini/gemini-cli/pull/28816)** · P2, closed · The floating `publish()` promise could hang requests for the full 60s timeout window; failures are now registered and propagated immediately.

4. **[#28863 — Prompt for consent on environment changes and sanitize runtime-altering env vars](https://github.com/google-gemini/gemini-cli/pull/28863)** · Open · Closes a consent bypass where extension updates could inject unauthorized environment variables into spawned MCP server processes; also sanitizes runtime-altering vars.

5. **[#28740 — Prevent supply chain RCE in eval-pr workflows](https://github.com/google-gemini/gemini-cli/pull/28740)** · Security, open · Splits the eval workflow into a safe `pull_request` build step and a trusted `workflow_run` execution, fixing untrusted fork code executing in a privileged `pull_request_target` context (#28336).

6. **[#28817 — Retain executing subagent tool calls in hook state](https://github.com/google-gemini/gemini-cli/pull/28817)** · P2, open · Fixes #22589: first-seen subagent tool calls in `Executing` status were filtered out before entering hook state, breaking hooks that observe in-flight tool activity.

7. **[#28744 — Don't start a fresh chat before resuming; it poisons the session file](https://github.com/google-gemini/gemini-cli/pull/28744)** · P1, open · Partially addresses #28693 by removing one of two fresh-chat starts on the ACP session load path, which corrupted session state.

8. **[#28624 — Prevent boolean thought parts leaking as `[Thought: true]` text](https://github.com/google-gemini/gemini-cli/pull/28624)** · P2, closed · Fixes #23525: internal thought parts with `thought: true` were rendered literally into model thought text; now properly filtered.

9. **[#28834 — Suppress spurious ENOENT warning for transient subdirs in workspace scan](https://github.com/google-gemini/gemini-cli/pull/28834)** · Open · Eliminates the noisy `Could not read directory ... ENOENT` warning caused by transient lock files (e.g., `projects.json.lock`) disappearing during BFS traversal.

10. **[#27863 — Prioritize structured display titles in tool invocation](https://github.com/google-gemini/gemini-cli/pull/27863)** · P1, open · Fixes #23018: display titles now prefer `_toolDisplayName` over `_toolName`, improving readability of tool calls in non-interactive output.

## 5. Hot Discussions
No discussion data was provided for this digest period.

## 6. Feature Request Trends
- **AST-aware code intelligence**: Multiple EPICs (#22745, #22746) push toward AST-aware file reads, search, and codebase mapping to cut token usage and turn counts.
- **Safer, more capable shell execution**: Sandboxing with post-execution intent routing (#19873) and discouraging destructive git/DB commands (#22672) reflect a desire for powerful-but-guarded bash workflows.
- **Subagent observability & management**: Users want subagent trajectories in `/chat share` (#22598), subagent context in bug reports (#21763), and resilient browser-agent session takeover/lock recovery (#22232).
- **Agent self-awareness**: Requests for the CLI to accurately document its own flags, hotkeys, and self-execution behavior (#21432) signal a need for better built-in guidance.
- **Evaluation infrastructure**: Component-level evals (#24353) and making steering tests `ALWAYS_PASSES` (#28818) show the project doubling down on regression coverage.

## 7. Developer Pain Points
- **Hangs are the #1 frustration**: Generalist agent hangs (#21409), shell "Waiting input" after completion (#25166), TUI init hangs (#28812), and silent MessageBus timeouts (#28816) collectively dominate the issue tracker and PR queue.
- **Misleading agent status reporting**: Subagents reporting `GOAL` success after being interrupted (#22323) erode confidence and complicate debugging.
- **Auto Memory reliability & privacy**: Indefinite retries on low-signal sessions (#26522), invalid patch handling (#26523), and secret redaction happening only *after* content enters model context (#26525) are recurring concerns.
- **Tool bloat and messiness**: 400 errors with large tool counts (#24246) and models scattering tmp scripts across the workspace (#23571) create cleanup and compatibility overhead.
- **Permission/regression anxiety**: Reports of subagents running despite being disabled (#22093) and browser agents ignoring `settings.json` overrides (#22267) highlight sensitivity around configuration trust boundaries.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-18

## Today's Highlights

No new release was published in the last 24 hours, but issue activity remains high: 29 issues were updated, with MCP OAuth regressions and session-state bugs dominating. The most-discussed item is the long-running `SHIFT+ENTER` input behavior issue (#1481), which was closed after 28 comments and 17 👍 reactions. The only active PR (#4510) proposes removing Copilot CLI documentation from the README, with no code changes or merges in the window.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. [SHIFT + ENTER should spawn a line break, but executes the prompt instead](https://github.com/github/copilot-cli/issues/1481)  
   Closed after 28 comments and 17 👍. Developers expect the standard chat-app shortcut for multi-line input; the current `CTRL+ENTER` behavior remains a common usability trap.

2. [Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5 and Kimi K3)](https://github.com/github/copilot-cli/issues/4390)  
   Models explicitly enabled by a Copilot Business org are unavailable in the CLI and report “This model is disabled.” 8 comments, 7 👍. This is a significant enterprise model-delivery blocker.

3. [Atlassian MCP OAuth fails with “Incompatible authorization server” on 1.0.79 — regression from 1.0.71](https://github.com/github/copilot-cli/issues/4480)  
   Connecting to `mcp.atlassian.com` fails during OAuth discovery after the upgrade. 5 comments, 6 👍. Highlights fragility in MCP OAuth metadata handling.

4. [Copilot CLI 1.0.79 rejects GitLab MCP OAuth metadata with an RFC 8414 issuer mismatch](https://github.com/github/copilot-cli/issues/4439)  
   GitLab Self-Managed MCP servers fail authentication due to issuer validation. Closed, but a strong signal that MCP OAuth compatibility needs hardening.

5. [SDK server reports ready without auth, then Slack session creation fails generically](https://github.com/github/copilot-cli/issues/4503)  
   The SDK server starts without `COPILOT_SDK_AUTH_TOKEN` and later fails with “I couldn't create a session for this chat.” Opaque failure for SDK and Slack integrations.

6. [Memory-pressure watchdog force-compacts the conversation at 23% context usage, recovers 0.003% of tokens, then loops until OOM](https://github.com/github/copilot-cli/issues/4506)  
   A long-running session was compacted repeatedly despite low context usage, driven by process memory rather than context pressure. High severity for heavy users.

7. [Resumed session retains stale connection item IDs after interrupted response](https://github.com/github/copilot-cli/issues/4505)  
   After resuming, every prompt fails with `CAPIError: 400 input item ID does not belong to this connection`; `/fork` does not recover the session.

8. [--no-alt-screen was silently removed with no replacement — alt-screen is now unavoidable and broken](https://github.com/github/copilot-cli/issues/4509)  
   Users report alt-screen regressions going back months, and the previous opt-out flag disappeared without deprecation. Strong contributor frustration.

9. [Repository-level enabledPlugins in .github/copilot/settings.json is ignored in non-interactive mode](https://github.com/github/copilot-cli/issues/4507)  
   `copilot -p` does not apply the same plugin overrides as interactive mode or `copilot plugins list`, causing inconsistent behavior across surfaces.

10. [Copilot CLI couldn't handle BigInt in structured MCP response](https://github.com/github/copilot-cli/issues/4211)  
    An MCP server returning large numbers aborts all tasks with `TypeError: Do not know how to serialize a BigInt`. 4 comments, 2 👍.

## Key PR Progress

Only one PR was updated/created in the last 24 hours:

- [Remove GitHub Copilot CLI documentation from README](https://github.com/github/copilot-cli/pull/4510)  
  This open PR removes detailed CLI installation and usage guidelines from the README. No maintainer comments or code changes are visible. No other PR activity was present in the window.

## Hot Discussions

No discussion data was provided for this digest.

## Feature Request Trends

- **MCP ecosystem hardening**: Users want more tolerant OAuth metadata validation, proper `structuredContent` handling, BigInt-safe serialization, support for local `stdio` MCP servers when policy fetch fails, and cleanup of Docker-based MCP containers after session close.
- **Session lifecycle improvements**: Requests include scrolling through current conversation history, restoring remote sessions locally, reloading `.github/instructions` mid-session, and avoiding destructive memory-pressure compactions.
- **Plugin and marketplace management**: The community wants a dependency model for marketplace plugins, parity for repository-level `enabledPlugins` in non-interactive mode, and cache keys that include the Git ref for multi-branch marketplace sources.
- **Terminal and accessibility UX**: Recurring asks include bringing back an alt-screen opt-out, supporting conventional line-break shortcuts, improving theme contrast in the session picker, and fixing overnight theme changes.
- **Model governance parity**: Requests for ACP `contextTier` configuration, honoring custom agent models from `agent.md`, and properly surfacing org-enabled model catalogs.

## Developer Pain Points

- MCP OAuth interoperability is brittle: both GitLab and Atlassian MCP servers fail on strict RFC 8414 issuer checks in recent CLI versions.
- Session state can become unrecoverable after interrupted responses, stale connection item IDs, or failed `/fork` attempts.
- Long-running sessions are at risk of destructive, ineffective compaction cycles caused by the memory watchdog rather than actual context pressure.
- Non-interactive/ACP mode continues to lag behind interactive mode for plugin settings, context tier, and other configuration options.
- Silent removal of workaround flags such as `--no-alt-screen` without deprecation notice is a recurring source of frustration.
- Plugin marketplace caching can share the wrong branch checkout when multiple projects pin different refs to the same marketplace source.
- MCP structured outputs with `BigInt` or both `content` and `structuredContent` can crash or pollute conversation context.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-18

## Today's Highlights

The community is focused on two fronts: provider/endpoint reliability — legacy inference 410s, `Forbidden` model errors, and Azure DeepSeek adapter gaps — and Windows/TUI platform bugs. Feature request momentum is centered on session lifecycle controls, richer plugin surfaces, and smarter Plan-to-Build transitions. On the PR side, the most notable open change is an Azure DeepSeek adapter fix (#43135), alongside a continuation-state refactor (#42810).

## Hot Issues

- **[Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error #19130](https://github.com/anomalyco/opencode/issues/19130)** — 18 comments, 12 👍. Long-standing blocker for Windows ARM64 users: the native binary works for non-interactive commands, but the TUI cannot initialize due to an FFI/TinyCC failure.

- **[[2.0] BUG: enpoint error #43105](https://github.com/anomalyco/opencode/issues/43105)** — 15 comments. Users report `410 Gone: Legacy inference endpoint retired` when using `https://opencode.ai/inference/v1`; only the opencode beta accepts it. Confusing migration and compatibility story for existing CLI users.

- **[[FEATURE] Plan Mode + Question tool can auto switch to Build mode #7801](https://github.com/anomalyco/opencode/issues/7801)** — 11 comments, 32 👍. Highly requested: after a Plan Mode question, automatically transition to Build mode instead of requiring a manual toggle.

- **[Bug: Big Pickle stops response early #22861](https://github.com/anomalyco/opencode/issues/22861)** — 10 comments. The model consistently stops at the same point and cannot be prompted to continue, indicating a context or stop-token handling bug.

- **[ChatGPT OAuth rejects GPT-5.6 models for an EU-resident workspace, while official Codex CLI succeeds #40243](https://github.com/anomalyco/opencode/issues/40243)** — 9 comments. EU data-residency OAuth works in Codex CLI but fails in OpenCode, pointing to a token or model-discovery mismatch.

- **[[BUG] MCP tools connected but not exposed to agent #33027](https://github.com/anomalyco/opencode/issues/33027)** — 8 comments. MCP server connects and lists tools, but the agent never sees them — one of the most common MCP integration failure modes.

- **[[FEATURE] Add unarchive/restore for archived sessions #24153](https://github.com/anomalyco/opencode/issues/24153)** — 8 comments, 11 👍. Archiving is currently one-way; users want a restore path and better sidebar visibility.

- **[[Bug] Windows path references and permissions on external directory path not working #36681](https://github.com/anomalyco/opencode/issues/36681)** — 7 comments. Windows path syntax and permission config are undocumented and effectively broken, blocking file access controls.

- **[Models other than hy3-free / deepseek flash free fail with Forbidden: {model:big-pickle} #43054](https://github.com/anomalyco/opencode/issues/43054)** — The public gateway rejects every non-free model with `Forbidden: {"model":"big-pickle"}`, making paid model selection unusable.

- **[opencode run --continue injects the prompt into a session actively in use by another running opencode instance #43133](https://github.com/anomalyco/opencode/issues/43133)** — New, low comment count but high severity: `--continue` has no liveness check, so a second instance can silently inject prompts into a foreign active session.

## Key PR Progress

Several older PRs were touched by automated cleanup in the last 24 hours; the following are the most substantive.

- **[fix(provider): select Azure DeepSeek adapter #43135](https://github.com/anomalyco/opencode/pull/43135)** — Open. Fixes #43106 by selecting the dedicated `deepseek()` adapter for Azure DeepSeek deployments, enabling custom `reasoningEffort` variants.

- **[refactor(core): simplify interrupt continuation #42810](https://github.com/anomalyco/opencode/pull/42810)** — Open. Replaces the complex continuation state machine with a three-line post-cleanup check in `SessionExecution`, simplifying interrupt resume behavior.

- **[feat(plugin): add session request hook #37549](https://github.com/anomalyco/opencode/pull/37549)** — Adds `ctx.session.hook("request", ...)` APIs for mutable model headers and JSON bodies before authentication and signing, including WebSocket payloads.

- **[fix(opencode): restore session diff summary #37542](https://github.com/anomalyco/opencode/pull/37542)** — Closes #30877, #32852, #17797. Restores session-level diff summaries that were removed alongside the expensive full-snapshot diff.

- **[fix(tui): preserve system palette colors #37537](https://github.com/anomalyco/opencode/pull/37537)** — Generates a native V2 system theme directly from the detected terminal palette, preserving literal ANSI hues.

- **[fix(opencode): sanitize Bedrock document names from file attachments #37535](https://github.com/anomalyco/opencode/pull/37535)** — Fixes #37191. Strips invalid characters from synthetic MCP binary attachment filenames before sending to Bedrock.

- **[fix(core): restore external directory defaults #37530](https://github.com/anomalyco/opencode/pull/37530)** — Allows discovered skill and materialized reference directories by default while keeping exact denials and managed shell output protected.

- **[fix(core): refresh console auth before catalog load #37517](https://github.com/anomalyco/opencode/pull/37517)** — Refreshes Console credentials before catalog loading, preventing stale tokens from reaching legacy Zen on cold V2 startup.

- **[feat(opencode): add session loop command #37504](https://github.com/anomalyco/opencode/pull/37504)** — Adds a built-in `/loop` command and `/proactive` alias, closing #23578.

- **[feat: add /workflow slash command for multi-step YAML pipelines #37499](https://github.com/anomalyco/opencode/pull/37499)** — Adds user-defined multi-step workflows under `.opencode/workflows/`.

## Feature Request Trends

- **Session lifecycle automation** — Restore/unarchive for archived sessions (#24153), auto-pause/resume when rate limits have a known reset time (#43126), and `/loop`/`/proactive` session commands (#37504).
- **Richer plugin and automation surfaces** — Plugin UI for the web/desktop app mirroring the TUI plugin API (#43132), session request hooks for plugins (#37549), and YAML workflow pipelines via `/workflow` (#37499).
- **Smarter mode transitions** — Plan Mode + Question tool auto-switching to Build mode (#7801) remains the most upvoted current feature request.
- **Provider/endpoint flexibility** — Requests to log in to Console/OpenCode inference via API key (#43131), plus ongoing model/endpoint compatibility fixes from the community (#43135, #43054).

## Developer Pain Points

- **Windows remains the top platform sore spot** — ARM64 TUI initialization fails (#19130), path and permission config is broken (#36681), cmdlet permissions don't work (#36696), ripgrep extraction fails with MSIX PowerShell 7 (#40623), npm postinstall leaves a 479-byte stub (#41370), and the TUI crashes with an orphan-text error (#41595).
- **Provider/endpoint confusion is widespread** — Legacy inference endpoint 410s (#43105), unavailable upstream endpoints (#43102), model lists that advertise undeployable models (#42962), EU OAuth rejection (#40243), and gateway `Forbidden` errors for non-free models (#43054).
- **Agent/tool integration is fragile** — MCP tools not surfaced to the agent (#33027), websearch/webfetch returning HTTP 403 (#43053), and provider-rendered control tokens corrupting tool output (#37472).
- **Session state and concurrency bugs disrupt real work** — Compact mode falsely hits usage limits (#41990), models truncate consistently (#22861), `--continue` can inject into an active session (#43133), and forked sessions copy stale reasoning state (#37453).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-18

## Today’s Highlights

No new releases were published in the last 24 hours. The project is primarily focused on reliability work: auto-compaction gaps are getting attention after long agentic turns overflowed context windows ([#6879](https://github.com/earendil-works/pi/issues/6879), [#8229](https://github.com/earendil-works/pi/issues/8229)), while an experimental append-compaction PR is now available ([#8120](https://github.com/earendil-works/pi/pull/8120)). TUI stability fixes and provider-compatibility patches also landed, including Anthropic refusal fallbacks ([#8258](https://github.com/earendil-works/pi/pull/8258)) and nested skill discovery ([#8255](https://github.com/earendil-works/pi/pull/8255)).

## Releases

No new releases in the last 24 hours.

## Hot Issues

Selected from 50 updated issues:

- **[#6879 — Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)** · 18 comments · 17 👍  
  A long agentic turn ran past the compaction threshold and only stopped when the API rejected the request at 373k tokens. The community is calling for compaction checks after every agentic turn, not only when the provider overflows.

- **[#534 — Config folder is out of place on Linux](https://github.com/earendil-works/pi/issues/534)** · 15 comments · 39 👍  
  Closed but still heavily referenced: Pi writes config directly into `$HOME` instead of following the XDG Base Directory spec. Linux users see this as a major polish gap.

- **[#8029 — Very slow performance when moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)** · 9 comments  
  With ~7,000 lines in the prompt buffer, a single arrow press took 1650 ms. The editor needs virtualization or a line index to avoid linear scanning of the full buffer.

- **[#3200 — Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200)** · 8 comments · 5 👍  
  Requests extending the `prompt` RPC command beyond `images` so video and audio can be forwarded to multimodal models such as Gemma 4 / GPT-4o.

- **[#7995 — openai-responses: no cacheControlFormat 'anthropic' support](https://github.com/earendil-works/pi/issues/7995)** · 4 comments  
  From an 870-trial OpenRouter benchmark: the `openai-responses` implementation lacks Anthropic-style prompt caching, producing a measured 2.5× cost penalty for Claude via OpenRouter.

- **[#8036 — Edit tool crashes TUI when rendering a large diff](https://github.com/earendil-works/pi/issues/8036)** · 4 comments  
  A successful edit containing a ~14.5 MB diff crashed the interactive TUI, and the crash also reproduced during session resume.

- **[#8166 — Custom message injected mid-tool-batch breaks tool_calls→tool adjacency](https://github.com/earendil-works/pi/issues/8166)** · 3 comments  
  An extension call to `pi.sendMessage(..., { triggerTurn: false })` inserts a message between a `tool_calls` block and its `tool` results, causing DeepSeek to reject every subsequent turn with a 400 error.

- **[#8017 — Support Anthropic refusal server side fallback](https://github.com/earendil-works/pi/issues/8017)** · 3 comments  
  Compaction can fail when Anthropic’s classifier returns a refusal. The request is to support `allowed_fallback_models` so compaction can recover automatically.

- **[#8135 — Google Generative AI streamSimple ignores thinkingLevelMap and drops thinkingLevel](https://github.com/earendil-works/pi/issues/8135)** · 3 comments  
  Custom thinking levels such as `xhigh` or `max` mapped through `thinkingLevelMap` are silently omitted from the actual request for Gemini 3 models.

- **[#8229 — Local providers can still overflow between tool turns](https://github.com/earendil-works/pi/issues/8229)** · 2 comments  
  On `main`, a large tool result can trigger the next provider request before post-run auto-compaction finishes. A llama.cpp server rejected a request at ~87k tokens.

## Key PR Progress

Selected from 34 updated PRs:

- **[#8120 — Experimental append compaction](https://github.com/earendil-works/pi/pull/8120)** · Open  
  `PI_EXPERIMENTAL=1` enables append compaction, which reuses the active system prompt, tools, transformed context, and routing session so the compacted prefix can reuse provider prompt caches. Standalone remains the default.

- **[#8258 — Anthropic refusal error and fallbacks](https://github.com/earendil-works/pi/pull/8258)** · Closed  
  Addresses [#8017](https://github.com/earendil-works/pi/issues/8017). Adds Anthropic’s API-level `allowed_fallback_models` metadata to the generated model registry and uses it during compaction failures.

- **[#8255 — Load nested markdown skills](https://github.com/earendil-works/pi/pull/8255)** · Closed  
  Fixes [#6479](https://github.com/earendil-works/pi/issues/6479). Nested standalone skill markdown files such as `~/.agents/skills/third-party/child-skill.md` are now discovered reliably.

- **[#8262 — Dispatch hooks on every turn-start path](https://github.com/earendil-works/pi/pull/8262)** · Open  
  Fixes `sendCustomMessage(triggerTurn: true)` skipping the `input` hook and `before_agent_start`, adding a cancellable turn preflight.

- **[#8246 — OpenAI completions reasoning details](https://github.com/earendil-works/pi/pull/8246)** · Open  
  Addresses [#7994](https://github.com/earendil-works/pi/issues/7994). Preserves signed `reasoning.text` / `reasoning.summary` entries from `delta.reasoning_details` so assistant replay does not drop non-encrypted reasoning.

- **[#8275 — Generalize thinking token budget fields](https://github.com/earendil-works/pi/pull/8275)** · Closed  
  Follow-up to [#7638](https://github.com/earendil-works/pi/issues/7638). Adds a `compat.thinkingTokenBudgetField` selector for vLLM, Qwen/SGLang, and llama.cpp variants.

- **[#8253 — Avoid full-screen flashing in long transcripts](https://github.com/earendil-works/pi/pull/8253)** · Closed  
  Improves differential rendering so changes above the viewport in 10k+ line transcripts no longer clear scrollback and reprint every visible line.

- **[#8240 — Align Qwen Token Plan model catalogs](https://github.com/earendil-works/pi/pull/8240)** · Closed  
  Unifies `qwen-token-plan` and `qwen-token-plan-cn` to share the same eight-model text catalog while keeping `qwen-token-plan-individual` separate.

- **[#8242 — Use agent_settled instead of agent_end in examples](https://github.com/earendil-works/pi/pull/8242)** · Closed  
  Fixes [#7350](https://github.com/earendil-works/pi/issues/7350). Extension examples no longer report “Ready for input” while Pi is still retrying, compacting, or running queued follow-ups.

- **[#8241 — Emit compaction failed for extensions](https://github.com/earendil-works/pi/pull/8241)** · Closed  
  Adds a `session_compact_failed` extension event carrying the failure payload, so handlers no longer miss internal `compaction_end` errors.

## Hot Discussions

### Q&A
- **[Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?](https://github.com/earendil-works/pi/discussions/3373)** · 11 comments · 8 👍  
  Community thread for sharing extension setups and workflows, particularly for users who avoid Discord.

### Ideas
- **[Hashline: Edit by Content Hash](https://github.com/earendil-works/pi/discussions/5474)** · 2 comments · 3 👍  
  Proposes an edit tool that points at content hashes instead of retyping target lines, reducing whitespace and “string not found” failures.

## Feature Request Trends

The following directions recur across issues and discussions:

- **Smarter context / compaction lifecycle**: Check compaction after every agentic turn and between tool batches, support append compaction, and automatically resume sessions after provider rate-limit resets ([#6879](https://github.com/earendil-works/pi/issues/6879), [#8229](https://github.com/earendil-works/pi/issues/8229), [#8120](https://github.com/earendil-works/pi/pull/8120), [#8277](https://github.com/earendil-works/pi/issues/8277)).

- **Broader multimodal support**: Extend `prompt` RPC to video/audio, support clipboard image paste, and include vision models such as GLM-4.6V in built-in catalogs ([#3200](https://github.com/earendil-works/pi/issues/3200), [#2144](https://github.com/earendil-works/pi/issues/2144), [#8220](https://github.com/earendil-works/pi/issues/8220)).

- **Provider compatibility shims**: Anthropic-style `cache_control`, reasoning-detail round-tripping, configurable thinking-token budget field names, and refusal fallbacks ([#7995](https://github.com/earendil-works/pi/issues/7995), [#7994](https://github.com/earendil-works/pi/issues/7994), [#8275](https://github.com/earendil-works/pi/pull/8275), [#8017](https://github.com/earendil-works/pi/issues/8017)).

- **TUI ergonomics and performance**: Configurable vertical padding, content-hash editing anchors, and fixes for large-buffer / large-diff rendering ([#6757](https://github.com/earendil-works/pi/issues/6757), [#5474](https://github.com/earendil-works/pi/discussions/5474), [#8029](https://github.com/earendil-works/pi/issues/8029), [#8036](https://github.com/earendil-works/pi/issues/8036)).

## Developer Pain Points

Recurring frustrations across the tracker:

- **Context overflow and hidden costs**: Auto-compaction often triggers too late, local providers can overflow between tool turns, and missing OpenRouter cache-control support creates a large cost penalty ([#6879](https://github.com/earendil-works/pi/issues/6879), [#8229](https://github.com/earendil-works/pi/issues/8229), [#7995](https://github.com/earendil-works/pi/issues/7995)).

- **TUI breaks under large content**: Prompt editing becomes linearly slower, huge diffs crash rendering, some outputs exceed V8 string limits, and long transcripts cause full-screen flashing ([#8029](https://github.com/earendil-works/pi/issues/8029), [#8036](https://github.com/earendil-works/pi/issues/8036), [#8028](https://github.com/earendil-works/pi/issues/8028), [#8253](https://github.com/earendil-works/pi/pull/8253)).

- **Cross-provider schema edge cases**: DeepSeek tool-call adjacency breaks, Gemini custom thinking levels get dropped, Bedrock rejects root-composed tool schemas, and stale provider model catalogs cause failures ([#8166](https://github.com/earendil-works/pi/issues/8166), [#8135](https://github.com/earendil-works/pi/issues/8135), [#8279](https://github.com/earendil-works/pi/issues/8279), [#8187](https://github.com/earendil-works/pi/issues/8187)).

- **Extension event semantics confuse users**: `agent_end` fires too early, compaction failures are invisible to extensions, and custom turn-start paths miss hooks ([#7350](https://github.com/earendil-works/pi/issues/7350), [#8241](https://github.com/earendil-works/pi/pull/8241), [#8262](https://github.com/earendil-works/pi/pull/8262)).

- **Platform and packaging friction**: Non-XDG config location, incorrect pnpm install detection, SELinux volume-label requirements, and terminal-specific input issues ([#534](https://github.com/earendil-works/pi/issues/534), [#7756](https://github.com/earendil-works/pi/issues/7756), [#8276](https://github.com/earendil-works/pi/issues/8276), [#8278](https://github.com/earendil-works/pi/issues/8278)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-18

## Today's Highlights
Qwen Code v0.21.13 shipped with two notable UX upgrades: the Web Shell composer now accepts text files as named attachments via drag-and-drop or paste, and users can fork a conversation from any specific Assistant response. The release was also put through full end-to-end validation — including 500 SWE-bench Verified and 89 Terminal-Bench 2.0 runs — with corrected smoke runs stabilizing at 1/1 resolved.

## Releases

**v0.21.13** ([release](https://github.com/QwenLM/qwen-code/releases))
- Web Shell composer now supports dragging, dropping, and pasting text files as named attachments alongside images ([#9180](https://github.com/QwenLM/qwen-code/pull/9180)).
- Conversations can now be forked from any specific Assistant response.
- Completed full release-validation runs (release → DSW Harbor → SWE-bench Verified 500 → Terminal-Bench 2.0 89 → same release publication), with a bootstrap-parent fix applied in the final run.

**v0.21.11-nightly.20260817.195128a17a** ([release](https://github.com/QwenLM/qwen-code/releases))
- Includes `feat(autofix)`: deny-by-default footprint gate and positional window censuses ([#9156](https://github.com/QwenLM/qwen-code/pull/9156)), plus web-shell fixes.

## Hot Issues

1. [**#9324 — Messages delivered in multiple copies without user redirection**](https://github.com/QwenLM/qwen-code/issues/9324) (7 comments): Qwen Desktop Code (Qwen 3.8 Max) appears to receive the same request multiple times, interrupting focused work. Serious user-facing UX bug requiring root-cause triage.
2. [**#9061 — Ctrl+V paste completely unresponsive in CLI on Windows — regression since 0.21.x**](https://github.com/QwenLM/qwen-code/issues/9061) (6 comments, P1): Clipboard paste works in plain PowerShell but not in Qwen Code CLI; downgrading to 0.21.0 restores it. High-priority Windows blocker.
3. [**#9320 — Lost context after /compress-fast and /rewind**](https://github.com/QwenLM/qwen-code/issues/9320) (5 comments): After compressing 102k→87k tokens and reconnecting to a new model server, users lose conversation history. Context-management correctness is a recurring concern.
4. [**#6806 — Status line context usage does not refresh after /compress or /compress-fast**](https://github.com/QwenLM/qwen-code/issues/6806) (6 comments): Footer percentage stays stuck at pre-compression values until the next model request. Misleading during long interactive sessions.
5. [**#8316 — Prompt not restored to input box when canceling (Ctrl+C)**](https://github.com/QwenLM/qwen-code/issues/8316) (9 comments): Cancelling an agent run discards the drafted prompt entirely, forcing users to retype. Long-standing workflow friction.
6. [**#8051 — Tracking: Bound multi-workspace daemon resource usage**](https://github.com/QwenLM/qwen-code/issues/8051) (9 comments): Count-only workspace/session limits don't bound bytes held by request bodies, WebSocket buffers, or other daemon memory. Community tracking issue for production `qwen serve`.
7. [**#9296 — Qwen Autofix: review-event storms and duplicate address dispatch waste runner capacity**](https://github.com/QwenLM/qwen-code/issues/9296) (4 comments, P1): ~500 autofix runs in ~3 hours with 59% cancelled; reviews on closed/merged PRs still trigger runs. CI efficiency problem for maintainers.
8. [**#9307 — Weixin channel corrupts 64-bit message IDs**](https://github.com/QwenLM/qwen-code/issues/9307) (4 comments, P1): `message_id` values above `Number.MAX_SAFE_INTEGER` are rounded by `Response.json()`, breaking message tracking in the Weixin channel.
9. [**#9300 — VP mode: blank space between last message and composer**](https://github.com/QwenLM/qwen-code/issues/9300) (6 comments): In terminal-buffer mode (the default), content isn't bottom-aligned, leaving awkward whitespace in the UI.
10. [**#9194 — Mutation-verified test-pin gaps from PR #9096 review rounds 5–6**](https://github.com/QwenLM/qwen-code/issues/9194) (10 comments): Automated review flagged tests that under-pin their contracts — mutations in production code ship the suite green. Real but non-blocking hardening work.

## Key PR Progress

1. [**#9180 — Web Shell: drag/drop/paste text files as named attachments**](https://github.com/QwenLM/qwen-code/pull/9180): Extends composer attachments beyond images; landed in v0.21.13.
2. [**#9364 — Configurable serve new-file mode (QWEN_SERVE_NEW_FILE_MODE)**](https://github.com/QwenLM/qwen-code/pull/9364): Adds a daemon-level opt-in so `qwen serve` text writes honor umask-derived modes instead of hard-coded 0600.
3. [**#9361 — Scheduled tasks can reuse an existing session**](https://github.com/QwenLM/qwen-code/pull/9361): Adds optional `sessionId` to scheduled-task endpoints with live-session validation, avoiding duplicate sessions.
4. [**#9367 — Global expand/collapse control for exported HTML viewer**](https://github.com/QwenLM/qwen-code/pull/9367): Adds "Expand all / Collapse all" toolbar to the `/export` HTML template, covering thinking and tool-result sections.
5. [**#9358 — Weixin typing indicator keep-alive for long turns**](https://github.com/QwenLM/qwen-code/pull/9358): Re-sends TYPING every 4 seconds so long-running prompts don't appear idle to WeChat users.
6. [**#9303 — Bound daemon transcript retention to stop renderer OOM**](https://github.com/QwenLM/qwen-code/pull/9303): Releases raw replay snapshots after injection and applies block caps to replay rebuilds, preventing browser crashes.
7. [**#9295 — Omit image media the model endpoint cannot safely consume**](https://github.com/QwenLM/qwen-code/pull/9295): Stops forwarding undecodable or unsupported MIME images (HEIC/TIFF) that break responses-compatible request validation.
8. [**#9342 — Clear the deferred-suggestion backlog from #9175**](https://github.com/QwenLM/qwen-code/pull/9342): Resolves 19 non-critical review findings accumulated across 15 rounds; roughly half are behavior fixes.
9. [**#9247 — Budget the composed review body against GitHub's 65,536-char limit**](https://github.com/QwenLM/qwen-code/pull/9247): Trims in a fixed order — the Chinese translation fold first, preserving as much content as possible.
10. [**#8927 — Bound session lifetime with sessionRotation**](https://github.com/QwenLM/qwen-code/pull/8927): Adds per-channel `maxTurns`/time-based rotation so routes don't reuse the same session forever.

## Feature Request Trends

- **Session & context reliability**: Multiple requests target compression correctness, context-usage reporting accuracy, and session continuity — `/compress` stale indicators (#6806), lost context after `/rewind` (#9320), incorrect compression math (#9309), and disabled skills counted as context consumers (#9344).
- **Daemon resource governance**: Continued demand for byte-level memory bounds (#8051, #8091) and configurable file permissions in `qwen serve` (#9250, #9364).
- **Export & transcript portability**: Global expand/collapse in HTML export (#8208, #9367) and a cross-host transcript contract for Web Shell, Desktop, VS Code, and HTML export (#9354).
- **Weixin channel maturity**: Typing indicators (#9353, #9358), outbound file delivery (#9352), and 64-bit message-ID safety (#9307).
- **Automation ergonomics**: Scheduled tasks reusing live sessions (#8906, #9361) and dynamically fetching model lists for ModelStudio Token/Coding Plan presets (#9368).

## Developer Pain Points

- **Windows CLI regressions**: Ctrl+V paste broken since 0.21.x (#9061) and selected text no longer copyable in the new interactive UI on Ubuntu (#9315) — both are terminal-interaction regressions.
- **Compression data-loss anxiety**: Context disappears or is miscalculated after `/compress-fast` + `/rewind` flows, and status indicators don't reflect real token counts (#6806, #9309, #9320).
- **Disruptive message duplication**: Multi-copy message delivery interrupts agent work and confuses users (#9324).
- **Lost work on cancel**: Cancelling a prompt discards the draft entirely; users must retype (#8316).
- **CI/autofix waste**: Review events on closed/merged PRs and duplicate dispatches burn runner capacity — nearly 60% of autofix runs cancelled (#9296).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-18

## Today's Highlights

v0.9.9 is being finalized as a “truth-and-resilience” release: the release PR ([#5476](https://github.com/Hmbown/CodeWhale/pull/5476)) landed with a soft-fail fix for shell stream creation ([#5465](https://github.com/Hmbown/CodeWhale/pull/5465)), per-turn DeepSeek V4 peak/off-peak pricing ([#5470](https://github.com/Hmbown/CodeWhale/pull/5470)), and two community fixes for context compaction and model casing ([#5474](https://github.com/Hmbown/CodeWhale/pull/5474), [#5475](https://github.com/Hmbown/CodeWhale/pull/5475)). No formal GitHub Release was published in the last 24 hours. Meanwhile, the community is tracking a 0.9.7 TUI crash ([#5424](https://github.com/Hmbown/CodeWhale/issues/5424)), Windows/Cygwin config-path fragmentation ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369)), and persistent CI failures on `main` ([#5403](https://github.com/Hmbown/CodeWhale/issues/5403)).

## Hot Issues

- [#2369 Config Paths Fragmented Across OS and Cygwin (Plus Silent Migration Bug)](https://github.com/Hmbown/CodeWhale/issues/2369) — Open · 8 comments  
  Config and secret paths resolve differently across Windows/Cygwin environments, and a legacy migration can silently mis-handle data. High impact for cross-platform users.

- [#5056 Test reliability: flaky verifier background tests, /workspace-sensitive fixtures, 12 untriaged #[ignore] tests](https://github.com/Hmbown/CodeWhale/issues/5056) — Open · 8 comments  
  Flaky background verifier tests and workspace-sensitive fixtures continue to undermine full-suite parallelism; 12 ignored tests are still untriaged.

- [#5324 agent tool: simplify the 32-field schema so models stop erroring on it](https://github.com/Hmbown/CodeWhale/issues/5324) — Closed · 8 comments  
  A 32-property JSON schema with zero required fields plus 8 actions is causing model-side errors. Simplification is critical for agent reliability.

- [#5424 v0.9.7: Codewhale TUI crashing](https://github.com/Hmbown/CodeWhale/issues/5424) — Closed · 7 comments  
  TUI exits by itself about a minute after prompting when started with `codewhale --continue`. A serious stability regression for daily users.

- [#1425 Large-text processing after session interruption causes stuck session](https://github.com/Hmbown/CodeWhale/issues/1425) — Open · 7 comments  
  Processing a 3M+ character text spawns 10 subagents, then `agent_wait` timeouts leave the session stuck. Highlights subagent orchestration scaling limits.

- [#5123 Agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED](https://github.com/Hmbown/CodeWhale/issues/5123) — Open · 7 comments  
  Dogfood failure: a delegate labeled `builder` has a read-only tool contract, causing self-blocked execution. The agent role/configuration surface needs simplification.

- [#1651 VS Code crashes or exits unexpectedly when YOLO Agent is running test scripts](https://github.com/Hmbown/CodeWhale/issues/1651) — Open · 6 comments  
  Autonomous YOLO test execution can crash VS Code, a significant integration stability issue.

- [#1829 SSH connection failure exit code 255 (DeepSeek TUI shell sandbox TCP 22 outbound block)](https://github.com/Hmbown/CodeWhale/issues/1829) — Open · 6 comments  
  Shell sandbox appears to block outbound SSH/scp on TCP 22, breaking remote-server workflows from Windows.

- [#5374 “The writing its weird” — corrupted agent output on macOS](https://github.com/Hmbown/CodeWhale/issues/5374) — Closed · 5 comments  
  Agent-written text renders corrupted in the TUI on macOS, making output unreadable.

- [#5337 Web: finish the #4934 dictionary spine — retire every isZh branch and inline { en, zh } module](https://github.com/Hmbown/CodeWhale/issues/5337) — Open · 4 comments  
  A large i18n refactor remains half-migrated; many docs/shared components still branch on `locale === "zh"` instead of using the dictionary spine.

## Key PR Progress

- [#5476 release: 0.9.9](https://github.com/Hmbown/CodeWhale/pull/5476) — v0.9.9 “truth-and-resilience”: shell tool can no longer wedge sessions on disk/descriptor exhaustion; unverified context windows and pricing are labeled honestly.

- [#5465 fix(tui): exec stream creation must fail soft and never wedge the shell tool](https://github.com/Hmbown/CodeWhale/pull/5465) — Fixes the `Failed to create streaming shell output` failure that affected every `bash` call under memory/disk pressure.

- [#5470 fix(tui): DeepSeek V4 tiered peak/off-peak pricing resolved per turn](https://github.com/Hmbown/CodeWhale/pull/5470) — Replaces flat model rates with UTC-hour tiered pricing resolved from each turn.

- [#5474 perf(context): compact all noisy web tool results](https://github.com/Hmbown/CodeWhale/pull/5474) — Applies the noisy-result soft limit to `Web`, `web_search`, `web.run`, and `fetch_url`, reducing context bloat.

- [#5475 fix(config): resolve owned direct model casing safely](https://github.com/Hmbown/CodeWhale/pull/5475) — Prevents lowercase saved selectors such as `glm-5.2` from being misclassified as foreign models.

- [#5491 fix(tui): persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491) — Implements durable, fail-closed approval receipts before execution, closing [#5360](https://github.com/Hmbown/CodeWhale/issues/5360).

- [#5485 fix(models): bring first-party model rows and pricing current as of 2026-08-17](https://github.com/Hmbown/CodeWhale/pull/5485) — Re-verifies model catalog entries and pricing against official sources.

- [#5480 feat(tui): show and open the live /rc session link; send a stable device id](https://github.com/Hmbown/CodeWhale/pull/5480) — Surfaces the live web session URL and stops minting a new “computer” per `/rc`.

- [#5483 web: de-slop the site copy](https://github.com/Hmbown/CodeWhale/pull/5483) — Rewrites customer-facing codewhale.net copy with a new `WEB_VOICE.md` style sheet; no structural changes.

- [#5484 feat(dsh): ambient ocean scene — whales and glyph fish behind the DSH UI](https://github.com/Hmbown/CodeWhale/pull/5484) — Adds a subtle animated ocean backdrop for the Codewhale DeepSeek Harness bundle.

## Feature Request Trends

- **Simplified third-party model onboarding** — Users want prebuilt provider templates, “test connection” buttons, and auto-refreshed model lists instead of manual Base URL/env configuration ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350)).

- **Richer plugin ecosystem and MCP metadata** — Requests continue for a Kimi-level plugin system, federated marketplaces ([#5311](https://github.com/Hmbown/CodeWhale/issues/5311)), and spec-compatible MCP capability metadata ([#4170](https://github.com/Hmbown/CodeWhale/issues/4170)).

- **Multimodal agent visibility** — Agents need first-class screenshot/image reading, not incidental file-read support ([#5102](https://github.com/Hmbown/CodeWhale/issues/5102)).

- **Durable approval/audit trails** — Approval outcomes should be persisted and fail closed, especially for one-shot decisions ([#5360](https://github.com/Hmbown/CodeWhale/issues/5360)).

- **Full i18n and Chinese documentation** — Community asks to retire `isZh` branches ([#5337](https://github.com/Hmbown/CodeWhale/issues/5337)), fix non-English route controls ([#5290](https://github.com/Hmbown/CodeWhale/issues/5290)), and localize docs into Chinese ([#5482](https://github.com/Hmbown/CodeWhale/issues/5482)).

- **Better subagent/context orchestration** — Large-text pipelines need to avoid subagent timeout hangs ([#1425](https://github.com/Hmbown/CodeWhale/issues/1425)), and context compression should respect large-context models ([#5239](https://github.com/Hmbown/CodeWhale/issues/5239)).

## Developer Pain Points

- **TUI/IDE instability under agent workload** — Crashes and hangs after long waits, subagent timeouts, and YOLO test execution ([#5424](https://github.com/Hmbown/CodeWhale/issues/5424), [#1425](https://github.com/Hmbown/CodeWhale/issues/1425), [#1651](https://github.com/Hmbown/CodeWhale/issues/1651)).

- **CI flakiness and red `main`** — Parallel-load flakes, `/workspace`-sensitive fixtures, and failed runs on both macOS and Windows are eroding trust in CI ([#5056](https://github.com/Hmbown/CodeWhale/issues/5056), [#5355](https://github.com/Hmbown/CodeWhale/issues/5355), [#5403](https://github.com/Hmbown/CodeWhale/issues/5403)).

- **Cross-platform configuration and sandbox network gaps** — Config/secret paths differ across Windows/Cygwin, and shell sandbox outbound SSH is blocked ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369), [#1829](https://github.com/Hmbown/CodeWhale/issues/1829)).

- **Overly complex model-facing tool schemas** — Large schemas and overlapping agent knobs cause model errors and self-blocked delegates ([#5324](https://github.com/Hmbown/CodeWhale/issues/5324), [#5123](https://github.com/Hmbown/CodeWhale/issues/5123)).

- **Pricing and context transparency** — Confusion remains around unverified live pricing ([#5241](https://github.com/Hmbown/CodeWhale/issues/5241)) and context-compression thresholds vs. advertised model context ([#5239](https://github.com/Hmbown/CodeWhale/issues/5239)).

- **Input/output corruption** — Large pasted prompts can be byte-corrupted before submission ([#4719](https://github.com/Hmbown/CodeWhale/issues/4719)), and rendered agent output can appear corrupted on macOS ([#5374](https://github.com/Hmbown/CodeWhale/issues/5374)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*