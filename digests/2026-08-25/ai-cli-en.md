# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-24 23:13 UTC | Tools covered: 9

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
**2026-08-25 community digest analysis**

---

## 1. Ecosystem Overview

The AI CLI agent tool landscape is bifurcating into mature commercial platforms absorbing enterprise-scale pain (Claude Code, GitHub Copilot CLI) and fast-moving challengers shipping daily or weekly (OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code). The dominant cross-cutting concerns are no longer raw model capability but **operational reliability**: memory/context transparency, multi-agent orchestration, MCP integration maturity, resource guardrails, and cost observability. Security hardening — environment-variable sanitization, credential brokering, CI injection defense, consent scoping — is rising to priority across nearly every project. Windows/desktop stability remains the weakest flank for all major tools, with GPU crashes, WSL failures, and path-handling bugs recurring across four different trackers.

---

## 2. Activity Comparison

Counts reflect **hot issues / key PRs with activity in the 24-hour digest window**, not raw total GitHub activity. Channels not surfaced in a tool's digest format are marked **"—"** (not reported), and are *not* implied to be zero or inactive. No repo in this window had Issues/PRs disabled upstream.

| Tool | Hot Issues | Active PRs | Discussions | Release Status (24h) |
|---|---|---|---|---|
| Claude Code | 10 | 3 | — (no data reported) | No new release |
| OpenAI Codex | 10 | 10 | 5 | 3 (1 patch + 2 alphas) |
| Gemini CLI | 13 | ~16 | — | 1 nightly (+ cherry-pick in flight) |
| GitHub Copilot CLI | 10 | 1 | — | 1 (v1.0.81-9) |
| OpenCode | 10 | 10 | — | 1 (v1.18.22) |
| Pi | 10 | 10 | 2 | 1 (v0.84.3) |
| Qwen Code | 10 | 10 | — | 1 nightly |
| CodeWhale | 10 | 10 | — | None (gated 0.9.12 cycle) |
| DeepSeek Harness | 0 | 0 | — | None (no activity) |

**Read:** Gemini CLI and Codex show the highest engineering throughput, followed closely by OpenCode, Pi, Qwen Code, and CodeWhale. Claude Code and Copilot CLI are effectively in patch-maintenance mode for the window, yet carry the highest-severity user-facing regressions (Linux segfault; ~95% HTTP 400 failure rate on code review). Community discussion is concentrated in Codex (5 threads) and Pi (2 threads), with the rest relying on issue-tracker engagement.

---

## 3. Shared Feature Directions

The following requirements appear independently across multiple tool communities:

- **Memory & context transparency** — Users across **Claude Code** (#82056 auto-memory load state), **Codex** (#21777 expose compaction to agent), **Copilot CLI** (#4572 background compaction losing tool results), **Gemini CLI** (#26522/#26523 Auto Memory retries & invalid patches), **OpenCode** (#16077 persistent session memory), **Pi** (#6879 compaction not triggering at threshold), and **Qwen Code** (#9378 recall/forget scan asymmetry) are demanding that context/memory become *visible, controllable state* rather than an implicit black box.
- **Multi-agent orchestration & subagent trust** — **Claude Code** (A2A protocol #28300, stable peer addressing #89338), **Codex** (Multi-Agent V2 model compatibility #35097, parent-authority reload #40477, root turn IDs #40486), **Gemini CLI** (false "GOAL success" #22323, trajectory sharing #22598), **CodeWhale** (silent subagent destruction #5596, Degraded→Completed collapse #5582), and **Copilot CLI** (missing subagent billing attributes #4224) all point to durable, addressable, honestly-reporting agent networks as the next platform layer.
- **MCP maturity & OAuth correctness** — **Copilot CLI** (RFC 8414 issuer mismatch #4490, missing Entra `scope` #4582, 60s handshake timeout #4421), **Qwen Code** (reconnect "success" with dead tools #9944), **OpenCode** (OAuth metadata challenges #44808), **Gemini CLI** (extension consent for env changes #28863, A2A credential cleanup #29018), and **Claude Code** (plugin MCP scope confusion, PR #75252) show MCP is now the primary integration battleground.
- **Resource guardrails & cost observability** — **Claude Code** (13.6 GB unbounded grep #86238, 88 MB transcript bricking #82419), **Codex** (turn-cost OTEL metric #40488), **Copilot CLI** (billing attrs on subagent spans #4224), **CodeWhale** (detached-agent usage lost from cost totals #5597, tool-schema cost display #5603), and **Gemini CLI** (tool-count 400 errors #24246) — long-running autonomous agents require memory/time limits and per-tool cost telemetry.
- **Stream reliability & abort semantics** — **Pi** (OpenAI streams ignoring abort #8586, `stopReason` regression #8409), **Qwen Code** (120s stream timeouts #5975, Anthropic-wire safety gaps #9005), **Codex** (disconnected streams #37996), **Copilot CLI** (repeated 400s #1274/#4572), and **OpenCode** (`finish_reason: network_error` cluster) indicate provider-stream handling is a systemic weak point.
- **Provider neutrality** — **CodeWhale** (18 DeepSeek-exclusive gates #5588, MiniMax/Xiaomi 404s #5601), **OpenCode** (model-specific breakage for Ox/Kimi/Grok), **Pi** (stale provider catalogs #8546, Grok Build compat #8422, Bedrock Mantle #8573), **Qwen Code** (provider-aware reasoning #9590), and **Codex** (managed AWS Bedrock keys #40481): tools are converging on adapter-based, provider-agnostic architectures.
- **Security hardening at the environment boundary** — **Gemini CLI** (GIT_ENV sanitization #29008, GIT_CONFIG_* consistency #28938, consent for env changes #28863, destructive-command guardrails #22672), **Qwen Code** (CI injection defusing #9871, registry-level `permissions.allow` #9829, scoped Git credentials #9870), **Copilot CLI** (read-only tool whitelist #1973), and **OpenCode** (free-tier VPN rotation exploit #34344).

---

## 4. Differentiation Analysis

- **Claude Code** — The broadest commercial package: plugin/marketplace ecosystem, `.claude/rules/` engines, subagent dispatch, and an A2A roadmap. Target: enterprise and mainstream professional developers. Current identity friction: release-channel trust (Linux segfault in 2.1.242, NFS symlink breakage) and desktop-app stability (GPU-compositing crashes).
- **OpenAI Codex** — Highest-velocity Rust codebase: Multi-Agent V2 ownership semantics, OTEL cost/metrics instrumentation, credential brokering, and managed AWS/Bedrock auth. Target: cloud-native and enterprise teams wanting deep observability and cloud integration. Distinctively alpha-first shipping cadence.
- **Gemini CLI** — Strongest security posture of the cohort (env sanitization, consent strings, A2A credential hygiene) plus the most sophisticated memory system (Auto Memory with extraction, redaction, quarantine). Target: Google-ecosystem developers and security-conscious orgs. Disciplined p1 triage around false-success signals.
- **GitHub Copilot CLI** — Deep GitHub/VS Code workflow coupling; the only tool whose digest shows heavy enterprise-identity friction (Entra ID OAuth, Atlassian MCP, Enterprise auth). Cost accounting is GitHub-AIU-specific. Slower PR cadence but steady patch releases; interactive-mode permission granularity is the top community demand.
- **OpenCode** — Provider-agnostic aggregator spanning free tiers, console models, and local hardware; TUI-first UX; 2.0 plugin API in beta; strong CI/automation focus (GitHub Actions OIDC, ephemeral sessions). Most exposed to upstream provider instability because it brokers the widest model surface.
- **Pi** — Terminal-purist niche with best-in-class TUI ergonomics (click-to-cursor, denser rows, configurable prefixes), a robust extension system, and a deliberate Windows first-class push (PowerShell tool). Strong llama.cpp/local-model support. Differentiator: session data integrity (torn-append JSONL bounds) and precise abort semantics.
- **Qwen Code** — Multi-surface footprint: IDE, WebShell, business channels (DingTalk), and vendored computer-use (CUA) drivers. Alibaba/Qwen ecosystem centricity with aggressive feature velocity (session rotation, review automation, cross-session messaging). Distinct security discipline around CI injection and model-facing permission schemas.
- **CodeWhale** — Indie Rust project emerging from DeepSeek-origin into provider-neutral territory; unusually rigorous release hygiene (gated integration branch, P0 milestone tracker, provider-neutrality audit). Target: workflow-automation users who need subagent lifecycle persistence and honest status projection.

---

## 5. Community Momentum & Maturity

- **Most mature:** **Claude Code** and **Copilot CLI** have the largest install bases and the most enterprise-shaped pain (desktop bricking, auth invalidation, billing attribution), but their windows show minimal code activity — community attention is absorbed by regressions rather than new capability.
- **High velocity, growing trust:** **Codex** (3 releases, 10 PRs incl. OTEL metrics and Multi-Agent V2 fixes), **Gemini CLI** (~16 PRs, nightly + preview trains), **OpenCode** (10 PRs, release plus 2.0 beta), **Pi** (10 PRs, v0.84.3), and **Qwen Code** (10 PRs, nightly w/ CUA binaries) are shipping continuously and turning community feedback into fixes within days.
- **Active but gated:** **CodeWhale** shows strong contributor energy but deliberately holds releases behind a P0 milestone gate — a discipline that small projects rarely maintain.
- **Community engagement hotspots (by thread heat):** Claude Code's GPU/MSIX thread (50+ comments) and Linux segfault root-cause analysis; Codex's auth-invalidation issue (51 comments); Copilot's HTTP 400 review failures (27 comments); Pi's Windows mega-thread (44 comments) and compaction bug (19 👍); OpenCode's network-error cluster (19 comments); Gemini's p1 subagent false-success issue (13 comments); Qwen's 120s stream timeout (12+ comments).
- **Dormant:** DeepSeek Harness (no activity — likely a focus-shift or maintenance pause, worth watching).

---

## 6. Trend Signals

1. **Reliability is the new competitive battleground.** Critical regressions shipped this window — Claude Code's pre-`main` Linux segfault, Copilot's MCP OAuth breakage persisting into a prerelease, OpenCode's months-long hidden sidebar — indicate release velocity is outrunning test coverage. Expect canary releases, rollback tooling, and regression suites to become differentiators.
2. **Memory is becoming explicitly managed state.** Seven of eight active tools have open work on compaction visibility, auto-memory quarantine, load-state indicators, or session-memory persistence. The implicit context window is being refactored into an observable, controllable, durable substrate.
3. **Multi-agent orchestration is leaving the feature phase.** A2A protocols, stable peer addressing, parent-authority reload, and subagent lifecycle persistence constitute a shared roadmap toward durable, addressable agent networks. Communities are already feeling production pain from its absence (dead sockets on resume, silent subagent cancellation, lost cost attribution).
4. **MCP client maturity is now a differentiator.** OAuth correctness (RFC 8414, Entra ID scopes), reconnection semantics, handshake retries, and tool-schema deferral dominate four separate trackers. Tools that nail MCP lifecycle management will win the enterprise integration race.
5. **Security hardening is moving from prompts to the environment boundary.** The surprise theme of the window: sanitizing `GIT_*` env vars, consent-gating environment changes, defusing CI workflow-command injection, and filtering credentials from A2A metadata. Supply-chain and environment-leakage concerns are being formalized into tool-level controls.
6. **Resource limits and cost telemetry are becoming table stakes.** With single tool calls consuming 13.6 GB and orphaned transcripts bricking sessions, expect RLIMIT-style caps, wall-clock timeouts, and per-turn/per-tool cost metrics to migrate from nice-to-have to default.
7. **Provider neutrality is the end state.** DeepSeek-exclusive gates, model-specific endpoint bugs, and stale provider catalogs are being reworked into adapter-based abstractions. Tools tied to a single model family will increasingly compete on their provider adapters, not their default model.
8. **Windows/desktop remains the weakest flank** — an opportunity. GPU-process crashes, MSIX bricking, WSL terminal failures, and path-separator bugs recur across Claude, Codex, Copilot, Pi, and Qwen. Cross-platform parity is a clear, unsolved wedge for new entrants.

**Reference value for developers:** choose tools by workflow and provider stack — GitHub-centric work suggests Copilot CLI; Google/security-sensitive environments suggest Gemini CLI; multi-provider or local-model flexibility suggests OpenCode or Pi; enterprise cloud with observability needs suggests Codex; Qwen-ecosystem or multi-channel teams suggest Qwen Code. Before adopting any tool for long autonomous runs, inspect its MCP reconnect behavior, compaction transparency, and resource guardrails — those three areas account for the majority of today's community-reported failures.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights

*Data snapshot: 2026-08-25 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skill proposals and Skill-related PRs lead the community discussion activity:

### 🔧 #514 — Document Typography Skill
- **Functionality:** Typographic quality control for AI-generated documents; catches orphan word wrap, widow paragraphs, section headers stranded at page bottom, and numbering misalignment.
- **Discussion highlights:** Argues that typographic defects affect every document Claude generates, but users rarely request good typography explicitly — making a dedicated quality-control Skill highly valuable.
- **Status:** Open  
  [PR #514](https://github.com/anthropics/skills/pull/514)

### 🖥️ #1615 — SCNet HPC Skill
- **Functionality:** Skill for operating SCNet HPC clusters via profile-based SSH and Slurm workflows; includes Slurm job generation, cluster discovery, profile refresh, and compute-node guidance.
- **Discussion highlights:** Covers a full HPC workflow niche — connection setup, partition/memory/module/accelerator selection, and job submission — rather than just a narrow CLI wrapper.
- **Status:** Open, recently updated 2026-08-24  
  [PR #1615](https://github.com/anthropics/skills/pull/1615)

### 📄 #486 — ODT Skill
- **Functionality:** Create, fill, read, and convert OpenDocument Format files (`.odt`, `.ods`), plus parse ODT to HTML; triggers on LibreOffice, OpenDocument, ODF mentions.
- **Discussion highlights:** Addresses a clear document-format gap: users need open-source/ISO-standard document handling alongside the existing DOCX/PDF skills.
- **Status:** Open  
  [PR #486](https://github.com/anthropics/skills/pull/486)

### 🎨 #210 — Frontend-Design Skill Improvement
- **Functionality:** Revises the frontend-design Skill for clarity, actionability, and internal coherence; ensures each instruction is executable within a single conversation.
- **Discussion highlights:** Focused on making Skill guidance specific enough to steer Claude’s behavior without being so verbose that it becomes impractical.
- **Status:** Open  
  [PR #210](https://github.com/anthropics/skills/pull/210)

### 🧪 #83 — Skill-Quality Analyzer + Skill-Security Analyzer
- **Functionality:** Two meta-skills: one evaluates Skills across structure/documentation/examples/resources, and one analyzes Skill security posture.
- **Discussion highlights:** Represents community interest in “skills about skills” — quality assurance, maintainability, and security auditing for the Skills ecosystem itself.
- **Status:** Open  
  [PR #83](https://github.com/anthropics/skills/pull/83)

### 🤖 #1628 — Hivemind: Multi-Agent Orchestration Skill
- **Functionality:** Lets Claude Code delegate mechanical work to headless opencode workers running on free models, while Claude Code remains the only planner, reviewer, and merger.
- **Discussion highlights:** Argues that the expensive model’s context window is the scarce resource, not raw intelligence — so outsourcing mechanical tasks is a direct cost/context optimization.
- **Status:** Open, recently updated 2026-08-24  
  [PR #1628](https://github.com/anthropics/skills/pull/1628)

### 🛡️ #1367 — Self-Audit Skill
- **Functionality:** Mechanical file verification first, then a four-dimension reasoning-quality audit ordered by damage severity. Universal across projects and tech stacks.
- **Discussion highlights:** Positions audit as a pre-delivery quality gate rather than a post-hoc review; versioned as v1.3.0.
- **Status:** Open  
  [PR #1367](https://github.com/anthropics/skills/pull/1367)

### 🧪 #723 — Testing-Patterns Skill
- **Functionality:** Comprehensive testing coverage: Testing Trophy philosophy, unit testing patterns, React component testing with Testing Library, and guidance on what **not** to test.
- **Discussion highlights:** Addresses a broad, high-demand engineering domain — test strategy and implementation patterns — rather than a single tool or vendor.
- **Status:** Open  
  [PR #723](https://github.com/anthropics/skills/pull/723)

---

## 2. Community Demand Trends

From Issues, the most concentrated demand directions are:

- **Security and trust boundaries** — Community Skills distributed under the `anthropic/` namespace create a trust-boundary risk; users want clear provenance and permission safety.  
  [Issue #492](https://github.com/anthropics/skills/issues/492)

- **Org-wide sharing and enterprise distribution** — Users want to share Skills inside organizations without manual `.skill` file downloads and Slack/Teams transfers.  
  [Issue #228](https://github.com/anthropics/skills/issues/228)

- **Evaluation reliability** — `run_eval.py` reporting 0% trigger rates makes Skill-description optimization effectively random; robust evaluation is a prerequisite for Skill quality.  
  [Issue #556](https://github.com/anthropics/skills/issues/556)

- **Context-window efficiency** — Bundled Skills that eagerly inject ~156k tokens are harmful; the community wants Skills that are compact, lazy, or otherwise context-aware.  
  [Issue #1487](https://github.com/anthropics/skills/issues/1487)

- **Duplicate/conflicting Skill packaging** — Overlapping plugin content causes duplicate Skills in the context window; clean packaging and deduplication are expected.  
  [Issue #189](https://github.com/anthropics/skills/issues/189)

- **Agent governance and memory** — Proposals for agent-governance safety patterns and compact-memory symbolic notation show demand for managing long-running agent behavior and state.  
  [Issue #412](https://github.com/anthropics/skills/issues/412) · [Issue #1329](https://github.com/anthropics/skills/issues/1329)

- **Platform/extensibility gaps** — Enterprise integration with Bedrock, SharePoint Online, and MCP-style Skill APIs remains a recurring request.  
  [Issue #29](https://github.com/anthropics/skills/issues/29) · [Issue #1175](https://github.com/anthropics/skills/issues/1175) · [Issue #16](https://github.com/anthropics/skills/issues/16)

---

## 3. High-Potential Pending Skills

These PRs are open, actively updated, and appear positioned to land soon:

- **SCNet HPC Skill** — recent activity and a complete SSH/Slurm workflow make it a strong near-term addition.  
  [PR #1615](https://github.com/anthropics/skills/pull/1615)

- **Hivemind Multi-Agent Orchestration** — very recent updates; directly addresses context-window cost pressure.  
  [PR #1628](https://github.com/anthropics/skills/pull/1628)

- **ServiceNow Platform Skill** — broad enterprise coverage across ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, SecOps, and IntegrationHub; updated mid-August.  
  [PR #568](https://github.com/anthropics/skills/pull/568)

- **Pyxel Retro Game Development Skill** — MCP-server-based workflow for retro/pixel-art/8-bit games; still open with continued updates.  
  [PR #525](https://github.com/anthropics/skills/pull/525)

- **Self-Audit Skill** — mechanical verification plus reasoning-quality gate; updated in early July and directly aligned with the reproducibility/quality concerns in the Issues.  
  [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **well-scoped, trustworthy Skills that are secure to distribute, reliable in triggering and evaluation, and packaged without bloating or duplicating the agent’s context window.**

---

# Claude Code Community Digest — 2026-08-25

## Today's Highlights

No new releases landed in the last 24 hours; attention is instead consumed by a critical Linux regression — v2.1.242 segfaults before `main` on every invocation, making even `claude --version` crash ([#89334](https://github.com/anthropics/claude-code/issues/89334)) — and a worsening cluster of Claude Desktop GPU crashes that can leave the Windows MSIX package entirely unlaunchable ([#80444](https://github.com/anthropics/claude-code/issues/80444), [#83028](https://github.com/anthropics/claude-code/issues/83028)). A separate report shows the bundled Grep tool can allocate 13.6 GB with no memory limits ([#86238](https://github.com/anthropics/claude-code/issues/86238)), underscoring a broader theme of missing resource guardrails.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **v2.1.242 segfaults on every launch (Linux x64)** — [#89334](https://github.com/anthropics/claude-code/issues/89334)  
   A pre-`main` crash hits every invocation after 2.1.242 began exporting bundled mimalloc with versioned glibc allocator symbols; `newlocale` calls `free(NULL)` before main. v2.1.241 is unaffected, making this an urgent rollback candidate. The report includes a precise root-cause analysis and already has community traction.

2. **Windows desktop GPU-process crash bricks MSIX installs** — [#80444](https://github.com/anthropics/claude-code/issues/80444)  
   Fatal GPU-process crash (0x060C201E) via the in-app browser tab leaves the app unlaunchable (appxState=2) until Repair. Reproduced across two NVIDIA driver versions; at 50 comments, this is the most-discussed open issue.

3. **Second GPU crash report: Intel integrated GPUs** — [#83028](https://github.com/anthropics/claude-code/issues/83028)  
   Reproducible Claude Desktop crash during browser-pane use on Intel iGPUs, with no workaround. Combined with #80444, this suggests a GPU-compositing issue affecting both discrete and integrated adapters.

4. **`ugrep` runs with no memory limit or timeout** — [#86238](https://github.com/anthropics/claude-code/issues/86238)  
   The Grep tool re-execs the Claude Code binary as `ugrep` with no RLIMIT_AS, RLIMIT_CPU, or wall-clock timeout. A model-generated regex consumed 13.6 GB and thrashed the host — a clear call for resource caps on tool execution.

5. **Dispatch permanently bricked by an 88 MB orchestrator transcript** — [#82419](https://github.com/anthropics/claude-code/issues/82419)  
   On Windows, once the orchestrator transcript grows large, every resume exits with code 1 — the session becomes unrecoverable. A severe data-loss vector for long-running agent workflows.

6. **Disable the welcome banner** — [#2254](https://github.com/anthropics/claude-code/issues/2254)  
   The longest-running quality-of-life request (open since June 2025) still draws steady interest: 110 👍 and 43 comments asking for a setting to suppress the welcome screen and tips.

7. **Multi-agent collaboration across machines (A2A protocol)** — [#28300](https://github.com/anthropics/claude-code/issues/28300)  
   A 44-comment feature thread proposing an agent-to-agent protocol for cross-machine collaboration, reflecting growing demand for distributed orchestration beyond single-session subagents.

8. **Cross-session peer addressing breaks on resume** — [#89338](https://github.com/anthropics/claude-code/issues/89338)  
   Fresh report: peer names/sockets resolve to `/tmp/cc-socks/<PID>.sock` and silently invalidate after session resume, with no stable addressing or self-identification. Shows multi-agent messaging is moving from feature request to production pain.

9. **Auto-memory index load state is opaque** — [#82056](https://github.com/anthropics/claude-code/issues/82056)  
   Sessions cannot tell whether their auto-memory index loaded whole, was truncated, or never loaded. The community wants explicit in-session visibility into what memory actually reached context.

10. **Prompt-topic triggers for `.claude/rules/`** — [#87804](https://github.com/anthropics/claude-code/issues/87804)  
    `paths:` matches files but nothing matches prompt subjects; this request asks for conditional rule loading based on topic — part of a trend toward more declarative, context-aware rule engines.

## Key PR Progress

Only 3 PRs saw activity in the window; all are listed below.

1. **Add Claude apps gateway on AWS example deployment assets** — [#79898](https://github.com/anthropics/claude-code/pull/79898) *(closed)*  
   Adds `examples/gateway/aws/` reference deployment artifacts for running the Claude apps gateway on AWS with Amazon Bedrock, as a sibling to the existing GCP example.

2. **Docs: clarify plugin MCP configuration scope** — [#75252](https://github.com/anthropics/claude-code/pull/75252) *(closed)*  
   Reopened from #74857 after fork deletion. Clarifies that plugin `mcpServers` config is for plugin-bundled MCP server definitions, separate from Claude Code's user-level allow/deny list in `~/.claude.json` — addressing recurring configuration confusion.

3. **Create pylint.yml** — [#83890](https://github.com/anthropics/claude-code/pull/83890) *(open)*  
   A small community-contributed CI workflow adding pylint to the repo; still open for review.

## Hot Discussions

No discussion data was provided for this digest.

## Feature Request Trends

- **Distributed, multi-session agent orchestration**: [#28300](https://github.com/anthropics/claude-code/issues/28300) (A2A protocol across machines) and [#89338](https://github.com/anthropics/claude-code/issues/89338) (stable peer addressing) show the community pushing beyond single-session subagents toward durable, addressable agent networks.
- **Context and memory transparency**: [#82056](https://github.com/anthropics/claude-code/issues/82056) (exposing auto-memory load state) and [#87804](https://github.com/anthropics/claude-code/issues/87804) (subject-based rule triggers) both ask for more visibility and control over what the model sees and when rules apply.
- **Desktop app stability**: A dense cluster of GPU/compositing crashes ([#80444](https://github.com/anthropics/claude-code/issues/80444), [#83028](https://github.com/anthropics/claude-code/issues/83028), [#88504](https://github.com/anthropics/claude-code/issues/88504)) makes desktop reliability the most urgent fix area.
- **Hardened resource controls**: [#86238](https://github.com/anthropics/claude-code/issues/86238) and the dispatch transcript failure ([#82419](https://github.com/anthropics/claude-code/issues/82419)) point to demand for memory/timeout limits and anti-bricking protections for long-running sessions.

## Developer Pain Points

- **Unrecoverable desktop state**: GPU crashes leave MSIX packages unlaunchable until manual Repair ([#80444](https://github.com/anthropics/claude-code/issues/80444)) — no graceful recovery path.
- **Unbounded tool execution**: Grep with no memory/timeout caps allowed a 13.6 GB spike ([#86238](https://github.com/anthropics/claude-code/issues/86238)); resource guardrails are a top concern.
- **Silent session invalidation**: Long-running workflows are derailed when state changes unnoticed — branch swaps between concurrent sessions ([#60295](https://github.com/anthropics/claude-code/issues/60295)), auto-memory truncation without notice ([#82056](https://github.com/anthropics/claude-code/issues/82056)), and cross-session sockets that die on resume ([#89338](https://github.com/anthropics/claude-code/issues/89338)).
- **Release regressions in core packaging**: The v2.1.242 Linux segfault ([#89334](https://github.com/anthropics/claude-code/issues/89334)) and the updater recreating absolute symlinks that break NFS-mounted homes ([#80797](https://github.com/anthropics/claude-code/issues/80797)) erode trust in the update channel.
- **Plugin/marketplace configuration friction**: `strictKnownMarketplaces` rejecting local installs ([#82621](https://github.com/anthropics/claude-code/issues/82621)), intelephense ignoring project-level settings ([#83470](https://github.com/anthropics/claude-code/issues/83470)), and lingering plugin MCP scope confusion addressed by PR [#75252](https://github.com/anthropics/claude-code/pull/75252).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-25

## 1. Today's Highlights

The Codex project shipped a new patch release (`rust-v0.149.1`) and two pre-release builds (`rust-v0.150.0-alpha.8`, `rust-v0.149.0-alpha.4.3`) while the community continues to focus on desktop auth/session reliability and Windows-specific regressions. On the engineering side, the latest PR batch centers on hardening credential brokering, improving Multi-Agent V2 ownership semantics, and adding more granular observability for cost and Guardian reviews.

## 2. Releases

- [rust-v0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8) — Pre-release alpha build.
- [rust-v0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1) — Patch release. No dedicated changelog; see the [full changelog](https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1).
- [rust-v0.149.0-alpha.4.3](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.3) — Pre-release alpha build.

## 3. Hot Issues

1. [Opening an existing conversation invalidates ChatGPT auth and redirects to sign-in (#39162)](https://github.com/openai/codex/issues/39162) — A macOS desktop regression where resuming a thread signs the user out. 51 comments and 31 👍 show it is affecting many desktop users.
2. [gpt-5.6-luna is marked as MultiAgent V1, so V2 spawn_agent rejects it (#35097)](https://github.com/openai/codex/issues/35097) — Model versioning and agent-compatibility mismatch. High community interest with 51 👍, as it blocks V2 workflows for a current model.
3. [Paginated history drops valid flattened rollout records and reuses ordinals (#35746)](https://github.com/openai/codex/issues/35746) — CLI session history can lose valid records during pagination, making long-session recovery unreliable.
4. [[Windows][WSL] Integrated terminal silently fails before PTY/WSL startup; bottom and side panel cannot open (#37104)](https://github.com/openai/codex/issues/37104) — A desktop blocker for WSL users, with 19 comments and 9 👍.
5. [Recent Thread history wiped in app, present in CLI (#17354)](https://github.com/openai/codex/issues/17354) — App-only history loss while the CLI retains threads; a long-running desktop reliability complaint.
6. [Stream disconnected before completion (#37996)](https://github.com/openai/codex/issues/37996) — Intermittent connection drops during responses; common with Pro users on Linux.
7. [Auto compaction — expose compaction to agent (#21777)](https://github.com/openai/codex/issues/21777) — Developers want the agent to be aware of context compaction to avoid wasteful restarts during long goal runs.
8. [Workspace terminal fails to start with “setup refresh had errors” (#39841)](https://github.com/openai/codex/issues/39841) — Windows desktop terminal startup regression, likely sandbox/setup related.
9. [Windows Codex Chrome/Computer Use browser control fails (#40048)](https://github.com/openai/codex/issues/40048) — Browser automation is broken in multiple Windows configurations: blank pages, JS timeouts, and URL detection failures.
10. [Codex Desktop update lost project/sidebar conversation history mapping (#26157)](https://github.com/openai/codex/issues/26157) — After an update, projects lose their sidebar conversation mapping even though local session files still exist.

## 4. Key PR Progress

1. [Hide ephemeral system threads from TUI routing (#40494)](https://github.com/openai/codex/pull/40494) — Prevents hidden system/helper threads from polluting TUI thread routing and the agents overview.
2. [Honor response budgets when reading skill resources (#40491)](https://github.com/openai/codex/pull/40491) — Fixes `skills.read` pagination so each page respects the current tool-call response budget.
3. [Harden project config when credential brokering is active (#40490)](https://github.com/openai/codex/pull/40490) — Stops project config from influencing credential-provider env vars or shell startup during brokering.
4. [Export turn cost as an OTEL metric (#40488)](https://github.com/openai/codex/pull/40488) — Adds `codex.turn.cost_microusd` counter with turn, conversation, interruption, speed, and reasoning-effort attributes.
5. [Add root turn IDs to turn and tool analytics (#40486)](https://github.com/openai/codex/pull/40486) — Associates subagent activity with top-level turns, improving traceability of multi-agent work.
6. [Broker credential aliases in child environments (#40484)](https://github.com/openai/codex/pull/40484) — Credentials inherited from the parent are now discovered and brokered even when canonical provider variables are filtered out.
7. [Support managed AWS access keys for Amazon Bedrock (#40481)](https://github.com/openai/codex/pull/40481) — Adds experimental `amazonBedrockAccessKeys` login and SigV4-signed Bedrock requests, unblocking managed AWS auth.
8. [Add a computer-use-only Guardian v2 review scope (#40480)](https://github.com/openai/codex/pull/40480) — Allows asynchronous classification and fast approvals only for browser/computer-use tools; other tools stay on synchronous approval.
9. [Reload Multi-Agent V2 children through their parent (#40477)](https://github.com/openai/codex/pull/40477) — Ensures resuming V2 subagents respects the parent’s current authority instead of caller-provided settings.
10. [Prevent Unix PTY I/O from blocking runtime shutdown (#40460)](https://github.com/openai/codex/pull/40460) — Makes PTY reads/writes nonblocking so detached children or output backpressure cannot stall Tokio shutdown.

## 5. Hot Discussions

### Ideas

- [Please offer a fixed-price high-usage individual plan for Codex and agent features (#40291)](https://github.com/openai/codex/discussions/40291) — Users doing heavy multi-step agent work want an effectively-unlimited fair-use plan instead of usage-limit anxiety.
- [Prompt queue / draft prompts without steering (#40384)](https://github.com/openai/codex/discussions/40384) — Requests a way to prepare follow-up prompts while an agent is running without sending them as immediate steering instructions.

### Q&A

- [Windows — Connections -> control other devices option not found (#40385)](https://github.com/openai/codex/discussions/40385) — Remote Connections is available in docs but the Windows desktop app does not expose the expected control-other-devices entry point.
- [How to solve “Pull request object state is invalid” (#40316)](https://github.com/openai/codex/discussions/40316) — A GitHub integration error causing PR-related operations to fail.

### Show and tell

- [Harness Lens: inspect which Codex rules, skills, hooks, and memory can affect a workspace (#40309)](https://github.com/openai/codex/discussions/40309) — A maintainer-shared tool for auditing the behavioral context Codex will load for a given workspace.

## 6. Feature Request Trends

- **High-usage / fixed-price plans**: The top discussion asks for an individual plan without hard usage ceilings for serious agent-driven development.
- **Context and compaction control**: Developers want to expose compaction state to the agent and avoid losing work when context limits trigger mid-task.
- **Multi-Agent V2 model compatibility**: The community is pushing for consistent model-to-agent-version mapping and proper subagent parent/child ownership semantics.
- **Cloud and remote workflows**: AWS Bedrock/GovCloud support and Windows Remote Connections continue to be requested.
- **Editor and terminal ergonomics**: VS Code users want multiple independent Codex views; CLI users want better TUI thread routing and clickable Markdown links.

## 7. Developer Pain Points

- **Desktop auth/session fragility**: Multiple issues report lost history, invalidated auth tokens, and threads disappearing after app updates — often with the CLI unaffected.
- **Windows-specific instability**: WSL terminal failures, MSIX updater loops, sandbox ACL problems, browser automation breakage, and even a kernel crash on Insider builds are recurring themes.
- **Streaming and connectivity reliability**: Users on Pro/Plus plans hitting premature stream disconnects and WebSocket timeouts behind proxies.
- **Hook and MCP gaps**: `PostToolUse` lacks failure signals, and MCP `tools/list_changed` notifications do not invalidate cached tool lists.
- **Config migration pitfalls**: Auto-migrated `config.toml` can fail strict parsing, and some sandbox network settings are silently ignored.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — August 25, 2026

## Today's Highlights
Agent reliability remains the dominant community concern: maintainers are tracking false "GOAL success" reports from subagents, endless generalist-agent hangs, and shell commands stuck on "Waiting input." The PR queue shows a strong security-hardening push—Git environment sanitization, A2A credential cleanup, and extension consent checks—alongside performance work to preserve prefix caching on retries and reduce context bloat. A v0.57.0-preview.1 cherry-pick is in flight while nightly builds continue.

## Releases
- **v0.56.0-nightly.20260824.g5411f113c** — Latest nightly build; no user-facing changelog beyond the commit diff. [Compare changes](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)

## Hot Issues
1. **Generalist agent hangs forever** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (8 👍, 8 comments). Simple operations like folder creation stall indefinitely when the CLI defers to the generalist agent; users work around it by explicitly forbidding subagent use. High-impact reliability bug.
2. **Subagent MAX_TURNS reported as GOAL success** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (p1, 13 comments). `codebase_investigator` reports `status: "success"` even after hitting the turn limit, masking real failures and eroding trust in automation signals.
3. **Shell "Waiting input" after command completes** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (p1, 3 👍). Simple CLI commands hang and appear active after finishing, forcing manual cancellation.
4. **Auto Memory retries low-signal sessions indefinitely** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (p2). Sessions skipped as low-signal remain unprocessed and resurface repeatedly, wasting background extraction turns.
5. **Auto Memory sends secrets into model context before redaction** — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (p2, security). Transcript content reaches the extraction model before prompt-based redaction runs, and logging may expose skill content. Relevant for privacy-conscious users.
6. **Zero-dependency OS sandboxing + intent routing** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) (p2, effort/large). Proposal to let Gemini 3 models use native bash workflows (`grep`, `sed`, `awk`) safely, with post-execution intent routing for security.
7. **AST-aware file reads EPIC** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (p2). Multi-issue investigation into AST-aware tools for precise method-bound reads, search, and codebase mapping to reduce token noise and misaligned reads.
8. **Gemini doesn't proactively use skills/sub-agents** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (p2). Anecdotal but widely relatable: custom `gradle`/`git` skills are ignored unless the user explicitly names them.
9. **400 error when tool count exceeds limit** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (p2). Requests fail when too many tools are available; users want smarter tool scoping based on enabled extensions.
10. **Agent should stop/discourage destructive behavior** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (p2, customer-issue). Model occasionally uses `git reset` or `--force` when safer alternatives exist; needs guardrails for destructive commands.

Also notable: browser subagent fails on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), symlinked agent files not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and bug reports lacking subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

## Key PR Progress
1. **Strip execution-affecting GIT_\* env vars** — [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) (p1, security). Fixes [#29003](https://github.com/google-gemini/gemini-cli/issues/29003): trusted `.env` values loaded into `process.env` could leak into git operations; adds sanitization in `getSafeGitEnv`.
2. **Keep GIT_CONFIG_\* triplets internally consistent** — [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) (p1). Prevents redaction from breaking numbered key/value pairs, which made Git environments unparsable; also stops `ShellExecutionService` from restoring sensitive config.
3. **Inject retry nudge into contents to preserve prefix caching** — [#28914](https://github.com/google-gemini/gemini-cli/pull/28914). Moves the on-retry nudge from `systemInstruction` to the end of `contents`, preserving static prompt prefix caching and ensuring the model sees the nudge immediately before generating.
4. **Don't persist interrupted response placeholder** — [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) (p1). Fixes [#28927](https://github.com/google-gemini/gemini-cli/issues/28927): the CLI no longer persists "[The previous response was interrupted...]" as a synthetic model response that models later repeat.
5. **History rollback & retry nudge optimizations** — [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) (closed, size/l). Optimizes tool-call cancellations and retry nudges to reduce context window bloat, API request volume, and maximize prefix-cache efficiency.
6. **A2A: clear stale cancellation error on new turns** — [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) (closed). Fixes state corruption where subsequent prompts crash with "Execution aborted" after a cancellation, addressing Google Cloud Assistant execution-stopped reports.
7. **A2A: remove misleading security schemes & hardcoded credentials** — [#29018](https://github.com/google-gemini/gemini-cli/pull/29018) (security). Fixes [#29001](https://github.com/google-gemini/gemini-cli/issues/29001): agent metadata no longer advertises authentication that doesn't exist, and insecure hardcoded credentials are stripped.
8. **Extension consent for environment changes** — [#28863](https://github.com/google-gemini/gemini-cli/pull/28863). Incorporates MCP server environment configurations into consent strings and sanitizes runtime-altering variables, closing a consent-bypass vector on extension updates.
9. **Dedupe symlinked skill directories** — [#29017](https://github.com/google-gemini/gemini-cli/pull/29017). Fixes [#28944](https://github.com/google-gemini/gemini-cli/issues/28944): supports `.gemini` ↔ `.agents` junction/symlink layouts without duplicate skill discovery—important for cross-tool Agent Skills standards.
10. **`eval:from-log` reviewable eval drafts** — [#29019](https://github.com/google-gemini/gemini-cli/pull/29019) (help wanted). New command to turn real session logs into behavioral eval starting points, capturing realistic prompts, tool usage, and failure scenarios.

Also active: write-policy safety checker declaration fix ([#28961](https://github.com/google-gemini/gemini-cli/pull/28961)), `ask_user` question retention in text history ([#29022](https://github.com/google-gemini/gemini-cli/pull/29022)), CI workflow permissions ([#29015](https://github.com/google-gemini/gemini-cli/pull/29015)), and a documentation cleanup batch covering missing CLI flags, ACP flags, and env var redaction keys ([#29013](https://github.com/google-gemini/gemini-cli/pull/29013), [#29011](https://github.com/google-gemini/gemini-cli/pull/29011), [#29009](https://github.com/google-gemini/gemini-cli/pull/29009)).

## Feature Request Trends
- **Subagent orchestration & transparency**: browser agent session takeover and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), subagent trajectory sharing via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), subagent context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and CLI self-awareness of flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Token & context efficiency**: AST-aware file reads/search/mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)), "tactful extraction" surgical read hierarchy ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), reduced tmp-script sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), persistent file-based task tracking to replace `WriteToDo` ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836)).
- **Memory system hardening**: surface/quarantine invalid Auto Memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), deterministic redaction and reduced logging ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), bounded retries for low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
- **Security & consent**: destructive-command guardrails ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), environment variable sanitization (PRs [#29008](https://github.com/google-gemini/gemini-cli/pull/29008), [#28938](https://github.com/google-gemini/gemini-cli/pull/28938), [#28863](https://github.com/google-gemini/gemini-cli/pull/28863)), zero-dependency sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
- **Documentation completeness**: missing CLI flags, corrected ACP flags, and env redaction setting keys ([#29013](https://github.com/google-gemini/gemini-cli/pull/29013), [#29011](https://github.com/google-gemini/gemini-cli/pull/29011), [#29009](https://github.com/google-gemini/gemini-cli/pull/29009)).

## Developer Pain Points
- **Hangs & stuck states**: generalist agent stalls ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompts like `create-vite` ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), browser agent failures on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **False success signals**: MAX_TURNS interruptions reported as GOAL success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) make automated workflows hard to trust.
- **Subagent opacity**: no trajectory visibility via share links ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), `/bug` reports missing subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and settings overrides ignored by browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Context bloat & API cost**: retry nudge duplication, large "firehose" file reads ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), tool-count limits causing 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), and scattered tmp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Environment leakage**: `.env` values flowing into git/spawned processes (PRs [#29008](https://github.com/google-gemini/gemini-cli/pull/29008), [#28938](https://github.com/google-gemini/gemini-cli/pull/28938), [#28863](https://github.com/google-gemini/gemini-cli/pull/28863)).
- **Auto Memory noise**: indefinite retries, invalid patches silently skipped, and secrets reaching model context before redaction ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## Today's Highlights

The Copilot CLI team shipped v1.0.81-9, adding model data-retention warnings to the `/model` picker. The most active issue is **#1274**, where users report frequent HTTP 400 errors during code-review diffs. Meanwhile, MCP OAuth and reliability regressions remain a dominant theme, and the community continues to push hard for granular tool permission controls in interactive mode.

## Releases

- **v1.0.81-9** ([releases](https://github.com/github/copilot-cli/releases))  
  Improved: the `/model` picker now shows model data-retention warnings with links.

## Hot Issues

- [#1274 – CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274)  
  Users report ~95% failure rates when using Copilot for diff-based code reviews. With 27 comments and 11 reactions, this is the most active issue in the window.

- [#1973 – Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)  
  Strongly requested feature: allow read-only tools like `grep`, `cat`, and `git status` without requiring per-call approval or unsafe `/allow-all`. 27 👍 show clear community demand.

- [#4490 – Atlassian MCP OAuth authentication broken in 1.0.80](https://github.com/github/copilot-cli/issues/4490)  
  Marked closed, but the underlying RFC 8414 issuer-mismatch error is still reported as persisting in the 1.0.81 prerelease, making it a recurring regression.

- [#4582 – MCP OAuth authorize request omits 'scope' for Entra ID](https://github.com/github/copilot-cli/issues/4582)  
  Remote MCP servers using Entra ID with static OAuth client IDs fail with AADSTS900144 because no `scope` parameter is sent.

- [#4421 – MCP initialize handshake has fixed 60s timeout with no retry](https://github.com/github/copilot-cli/issues/4421)  
  `npx`-launched stdio MCP servers fail roughly 29% of the time, and the CLI never respawns failed servers for the rest of the session.

- [#4224 – OTel spans for subagents omit billing attributes](https://github.com/github/copilot-cli/issues/4224)  
  External cost accounting undercounts actual AI credit usage because subagent spans lack `github.copilot.nano_aiu` and `github.copilot.cost`.

- [#4588 – Tool search disabled for all non-Anthropic models](https://github.com/github/copilot-cli/issues/4588)  
  MCP tool deferral is only active for Claude models; OpenAI, Gemini, Grok, and MAI models ship all tool schemas every turn, inflating even trivial prompts to 21k+ input tokens.

- [#4572 – Background compaction can lose parallel GPT tool results](https://github.com/github/copilot-cli/issues/4572)  
  Long-context sessions can fail with `HTTP 400 No tool output found` after automatic background compaction, even when the tool executed successfully.

- [#4570 – Windows plugin install/update fails while VS Code is running](https://github.com/github/copilot-cli/issues/4570)  
  `copilot plugin install` and `update` fail with `Access is denied (os error 5)` whenever VS Code holds plugin files. Closing VS Code resolves it.

- [#4592 – Interactive mode activates 0 plugin custom agents while --prompt activates 4](https://github.com/github/copilot-cli/issues/4592)  
  Plugin-discovered custom agents work in non-interactive `--prompt` mode but are silently absent in interactive mode, breaking parity between execution paths.

## Key PR Progress

Only one PR was updated in the 24-hour window, and there was no substantive code activity:

- [#4573 – Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573)  
  Opened by phuongnam467 with no description. This appears to be a non-functional documentation/file rename rather than a feature or fix.

## Feature Request Trends

- **Granular interactive-mode permissions:** The most-supported request is a tool whitelist for read-only operations without disabling safety entirely ([#1973](https://github.com/github/copilot-cli/issues/1973)).
- **Multi-turn `/ask`:** Multiple duplicate requests ask for `/ask` to support follow-up questions without polluting main conversation history ([#4577](https://github.com/github/copilot-cli/issues/4577), [#4579](https://github.com/github/copilot-cli/issues/4579), [#4538](https://github.com/github/copilot-cli/issues/4538)).
- **Better `/fork` workflows:** Users want `/fork` to open a new terminal and a `copilot --fork` startup option for parallel sessions ([#4578](https://github.com/github/copilot-cli/issues/4578), [#4580](https://github.com/github/copilot-cli/issues/4580)).
- **Status/footer customization:** Requests include end-aligned truncation for paths/branches and raw token counts in the status line ([#4591](https://github.com/github/copilot-cli/issues/4591), [#4589](https://github.com/github/copilot-cli/issues/4589)).
- **Richer asset support:** Users want PDF upload/analysis and image generation for developer assets like icons, favicons, and OG images ([#4583](https://github.com/github/copilot-cli/issues/4583), [#4581](https://github.com/github/copilot-cli/issues/4581)).
- **Tool-deferral parity across models:** Non-Anthropic models should get the same MCP tool-search optimization to reduce token costs ([#4588](https://github.com/github/copilot-cli/issues/4588)).

## Developer Pain Points

- **MCP OAuth remains the top friction point:** RFC 8414 issuer mismatches ([#4490](https://github.com/github/copilot-cli/issues/4490), [#4584](https://github.com/github/copilot-cli/issues/4584)), missing `scope` for Entra ID ([#4582](https://github.com/github/copilot-cli/issues/4582)), and Copilot Enterprise MCP authentication failures ([#4408](https://github.com/github/copilot-cli/issues/4408)) are all unresolved or recurring.
- **MCP reliability is fragile:** Fixed timeouts with no retry cause permanent session-level MCP failures ([#4421](https://github.com/github/copilot-cli/issues/4421)).
- **Request failures waste developer time:** Repeated HTTP 400 errors ([#1274](https://github.com/github/copilot-cli/issues/1274)), compaction-related 400s ([#4572](https://github.com/github/copilot-cli/issues/4572)), and BYOK providers returning local 403s ([#4414](https://github.com/github/copilot-cli/issues/4414)) are severely disrupting workflows.
- **Session state and lifecycle issues:** Stale `inuse.<pid>.lock` files after crashes ([#3255](https://github.com/github/copilot-cli/issues/3255)) and origin verification blocking all local sessions on SSH/GHE remotes ([#4585](https://github.com/github/copilot-cli/issues/4585)) make sessions unreliable in real-world setups.
- **Agent behavior unpredictability:** Agents can get stuck acknowledging without executing tools ([#4566](https://github.com/github/copilot-cli/issues/4566)), cloud-mode sessions hang or hit 429s ([#4568](https://github.com/github/copilot-cli/issues/4568)), and plugin agents behave differently between interactive and `--prompt` modes ([#4592](https://github.com/github/copilot-cli/issues/4592)).
- **Cost observability gaps:** Missing billing attributes in OTel spans for subagent calls makes accurate cost tracking impossible ([#4224](https://github.com/github/copilot-cli/issues/4224)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-25

## Today's Highlights

OpenCode shipped v1.18.22 with targeted provider-compatibility fixes, while the community's attention is dominated by a wave of `finish_reason: network_error` reports affecting Ox Alpha Free and Console Go models. A long-standing TUI regression (hidden "Modified Files" sidebar) finally has a fix in review, and the 2.0 beta plugin API is drawing scrutiny over event delivery failures.

## Releases

**v1.18.22** ([release](https://github.com/anomalyco/opencode/releases/tag/v1.18.22)) — Bugfix release:
- Removed outdated OpenCode Go first-month discount messaging and pricing.
- Fixed OpenCode device login links when servers return relative verification URLs or use a base path.
- Fixed `textVerbosity` being sent to OpenAI-compatible providers that do not support it.

## Hot Issues

1. **[#44528 — Network error with Big Pickle on OpenCode Go / Ollama Cloud](https://github.com/anomalyco/opencode/issues/44528)** — A once-working setup (v1.18.21, Windows 10, Big Pickle model) now fails persistently. With 19 comments, this is the most active thread today, pointing to a possible provider-side regression affecting multiple backends.

2. **[#30877 — TUI sidebar "Modified Files" section completely hidden](https://github.com/anomalyco/opencode/issues/30877)** — A v1.16.0 regression made uncommitted files invisible in the sidebar; 14 👍 signal wide impact. [PR #44796](https://github.com/anomalyco/opencode/pull/44796) now targets this exact bug.

3. **[#37823 — GitHub Action fails on repos created after 2026-07-15 (OIDC "p.rest" error)](https://github.com/anomalyco/opencode/issues/37823)** — New GitHub OIDC `sub` format breaks the action's JSON parsing. High community relevance (11 👍) since it silently breaks CI for all newly created repos.

4. **[#4489 — Feature: ephemeral one-off sessions for `opencode run`](https://github.com/anomalyco/opencode/issues/4489)** — 15 👍 and an offer from the author to implement. Persistent session storage isn't always desired for CI/automation use cases; this has broad momentum.

5. **[#16077 — Feature: persistent session memory loaded from local file](https://github.com/anomalyco/opencode/issues/16077)** — Users want cross-session continuity by loading prior conversation context at startup. Active for months, reflecting demand for agent memory.

6. **[#37815 — Kimi K3 fails with "Upstream request failed" on Console Go](https://github.com/anomalyco/opencode/issues/37815)** — Model appears in the picker but always errors (6 👍), while sibling models work fine. Isolation to one model suggests a routing or capability metadata issue.

7. **[#44379 — Ox Alpha Free (unlimited): persistent `network_error` banners](https://github.com/anomalyco/opencode/issues/44379)** — Errors persist within a session; only a new chat clears them. Part of the larger Ox Alpha Free incident cluster today.

8. **[#34344 — Unlimited usage exploit via VPN rotation](https://github.com/anomalyco/opencode/issues/34344)** — Rate limits tie to IP; rotating VPNs instantly resets limits, enabling non-stop free-tier use. A trust/safety concern the maintainers will need to address.

9. **[#44788 — [2.0] Plugin API: `event.subscribe` delivers zero events; context hooks never reach the model prompt](https://github.com/anomalyco/opencode/issues/44788)** — On beta `0.0.0-beta-18050`, the V2 plugin API is effectively non-functional for context injection via all three documented call forms. High impact for early 2.0 adopters.

10. **[#44807 — [2.0] Crashed run leaves zombie "running" session blocking all message delivery](https://github.com/anomalyco/opencode/issues/44807)** — A dead run permanently marks the session as running; subsequent prompts are enqueued into a never-delivered steer inbox, and ghost forms remain stuck in the UI.

## Key PR Progress

1. **[#44796 — fix(tui): restore TUI sidebar modified-files diff](https://github.com/anomalyco/opencode/pull/44796)** — Closes #30877 by reverting the `Session.diff` behavior that returned `[]` and published empty `session.diff` events. The fix for the most-upvoted open regression.

2. **[#44242 — feat(opencode): model capability tiers for small/local models](https://github.com/anomalyco/opencode/pull/44242)** — Introduces a minimal system prompt for small-context models (e.g., Qwen 4B) so they stop triggering endless compaction loops. Expands OpenCode's reach to local hardware.

3. **[#44743 — fix(ai): enforce chat finish reasons](https://github.com/anomalyco/opencode/pull/44743)** — Requires non-empty finish reasons by default and correctly classifies `end`, `content-filter`, and unknown outcomes. Directly addresses the recurring `finish_reason: network_error` class of bugs.

4. **[#44683 — feat(app): queue and steer follow-up prompts](https://github.com/anomalyco/opencode/pull/44683)** — Implements the composer queue pullout: queue/steer submit, inline editing, drag-to-reorder, hotkey hints, and stopped-turn flow.

5. **[#44808 — fix(core): honor MCP OAuth metadata challenge](https://github.com/anomalyco/opencode/pull/44808)** — Preflights remote MCP endpoints before OAuth discovery and honors exact `resource_metadata` URL/challenge scopes through the authorization-code exchange.

6. **[#44104 — fix: GitHub Copilot Grok models endpoint error](https://github.com/anomalyco/opencode/pull/44104)** — Stops `copilot-grok-4.6` from inheriting the generic OpenAI SDK path, fixing the endpoint error.

7. **[#44789 — fix(core): validate JSON schema tool input](https://github.com/anomalyco/opencode/pull/44789)** — Imports Draft 2020-12 and Draft-07 tool schemas into Effect Schema; decodes raw tool args before execution and surfaces failures as tool errors.

8. **[#44794 — fix(ai): recover missing reasoning item ids](https://github.com/anomalyco/opencode/pull/44794)** — Assigns synthetic identities when Responses reasoning items omit required IDs, keeping streams consistent without leaking synthetic IDs to provider metadata.

9. **[#44792 — feat(ai): add partial JSON parser](https://github.com/anomalyco/opencode/pull/44792)** — A robust internal partial JSON parser with configurable partial strings/numbers/collections, using Effect Schema for strict and repaired decoding.

10. **[#44806 — fix(core): recover missing assistant responses](https://github.com/anomalyco/opencode/pull/44806)** — Treats clean `stop` with no answer or tool call as incomplete provider output, rerouting into retry/continuation paths so empty or reasoning-only responses can't silently idle a session.

## Feature Request Trends

- **Session lifecycle control**: Strong demand for both ephemeral one-off runs ([#4489](https://github.com/anomalyco/opencode/issues/4489)) and persistent cross-session memory ([#16077](https://github.com/anomalyco/opencode/issues/16077)) — users want explicit control over when state is kept and when it isn't.
- **Small/local model support**: The capability-tier PR ([#44242](https://github.com/anomalyco/opencode/pull/44242)) addresses a growing class of users running OpenCode on local or low-context models without triggering compaction loops.
- **Prompt queueing UX**: Queue-and-steer follow-up prompts ([#44683](https://github.com/anomalyco/opencode/pull/44683)) point toward a more deliberate, batch-oriented interaction model.
- **MCP ecosystem maturity**: Scoped server config with keychain storage ([#44803](https://github.com/anomalyco/opencode/pull/44803)) and OAuth metadata challenge handling ([#44808](https://github.com/anomalyco/opencode/pull/44808)) show MCP moving toward production-grade auth and scoping.

## Developer Pain Points

- **Provider instability is the #1 gripe**: The `finish_reason: network_error` / "Endpoint is unavailable" cluster spans Ox Alpha Free ([#44379](https://github.com/anomalyco/opencode/issues/44379), [#44332](https://github.com/anomalyco/opencode/issues/44332), [#44742](https://github.com/anomalyco/opencode/issues/44742), [#44750](https://github.com/anomalyco/opencode/issues/44750)), Big Pickle ([#44528](https://github.com/anomalyco/opencode/issues/44528)), and generic Console Go ([#44328](https://github.com/anomalyco/opencode/issues/44328), [#44689](https://github.com/anomalyco/opencode/issues/44689)). Users are seeing these as OpenCode bugs even when the failure is upstream.
- **Model-specific breakage**: Kimi K3 ([#37815](https://github.com/anomalyco/opencode/issues/37815)), GPT 5.6 Luna ([#44768](https://github.com/anomalyco/opencode/issues/44768), [#44135](https://github.com/anomalyco/opencode/issues/44135)), and Ox Alpha Free are each failing in distinct ways — regional unavailability, `invalid_encrypted_content`, and silent generation stalls.
- **GitHub Action OIDC breakage**: The "p.rest" parse error on new repos ([#37823](https://github.com/anomalyco/opencode/issues/37823), [#33060](https://github.com/anomalyco/opencode/issues/33060)) is frustrating CI users and driven by an upstream GitHub change, not OpenCode itself.
- **Release regressions erode trust**: The hidden "Modified Files" sidebar ([#30877](https://github.com/anomalyco/opencode/issues/30877)) shipping in v1.16.0 and persisting for months is a reminder of the cost of under-tested UI changes.
- **Free-tier abuse**: The VPN rotation exploit ([#34344](https://github.com/anomalyco/opencode/issues/34344)) is a known, public vulnerability in the unlimited free model rate limiting.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-25

## Today's Highlights

Pi shipped **v0.84.3**, adding an optional native **PowerShell tool** for Windows and a safer staged-managed-update flow. Community energy is concentrated on Windows support (a 44-comment mega-thread), a high-impact **auto-compaction bug** (#6879, 19👍) that forces providers to overflow before compacting, and recurring **llama.cpp model-discovery friction**. Several important fixes landed: OpenAI streams now honor abort signals, session JSONL torn-append corruption is surfaced, and Codex request threading is preserved.

## Releases

**v0.84.3**
- **PowerShell tool** — Optional native PowerShell command execution on Windows, addressing long-standing Git Bash path-handling pain. [Docs](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool)
- **Safer managed updates** — Updates are now staged, verified, and atomically activated to avoid partial-failure states.

## Hot Issues

1. [**#6879 — auto-compaction never triggers after context grows past 100% until provider overflow**](https://github.com/earendil-works/pi/issues/6879) *(OPEN, 22 comments, 19👍)* — A 2-hour agentic turn on GPT-5.6-sol climbed past the compaction threshold and only compacted when the API rejected the request at 373k tokens. The proposed fix is to check compaction after every agentic step, not just turn boundaries. This is the most-upvoted open bug and a core reliability concern.

2. [**#7547 — [Windows] How do you use Pi on Windows? What issues are you seeing?**](https://github.com/earendil-works/pi/issues/7547) *(OPEN, 44 comments)* — A deliberate community call for Windows usage patterns to prioritize fixes, docs, and out-of-box experience. The high engagement signals strong demand for first-class Windows support.

3. [**#6922 — Default model cannot be a llama.cpp model: startup shows "No models available"**](https://github.com/earendil-works/pi/issues/6922) *(CLOSED, 11 comments, 14👍)* — Setting `defaultProvider: "llama.cpp"` with a configured ini model caused a false "No models available" startup warning. Closed with a fix, but highlights llama.cpp integration gaps.

4. [**#8167 — Cannot pick a model with built-in llama.cpp support**](https://github.com/earendil-works/pi/issues/8167) *(CLOSED, 11 comments)* — Router-mode llama-server models never appeared in the model list despite `/llama` load/unload working. Related to preset-exposure logic; addressed by PRs #8479 and #8558.

5. [**#8166 — custom message injected mid-tool-batch breaks tool_calls→tool adjacency on next turn (DeepSeek 400)**](https://github.com/earendil-works/pi/issues/8166) *(OPEN, 7 comments)* — An extension calling `pi.sendMessage(..., { triggerTurn: false })` mid-batch corrupts the message sequence, causing every subsequent turn to fail with a DeepSeek 400. A correctness bug in extension/tool interaction that needs core attention.

6. [**#8409 — Regression: aborted turns end with stopReason: "error" instead of "aborted"**](https://github.com/earendil-works/pi/issues/8409) *(CLOSED, 4 comments)* — In 0.84.2, aborting during a tool call can surface `stopReason: "error"` with "This operation was aborted," making it hard for callers to distinguish real errors from user aborts.

7. [**#8441 — Windows: "Path outside repository" for all tools with explicit path argument**](https://github.com/earendil-works/pi/issues/8441) *(CLOSED, 3 comments)* — A separator mismatch in the containment check rejects valid Windows paths. Part of the broader Windows path-handling theme.

8. [**#8546 — DeepSeek vision model deepseek-v4-flash-vision-exp missing from built-in catalog**](https://github.com/earendil-works/pi/issues/8546) *(CLOSED, 3 comments)* — The new multimodal model (released 2026-08-21) is live on DeepSeek's API but not selectable in Pi. Provider catalogs lagging behind upstream releases is a recurring complaint.

9. [**#8586 — OpenAI streams ignore abort signal mid-turn**](https://github.com/earendil-works/pi/issues/8586) *(CLOSED, 1 comment)* — OpenAI Responses/Completions loops don't check the abort signal during iteration, unlike the Anthropic path. RPC aborts hang until the HTTP stream closes. Fixed by PR #8585.

10. [**#8584 — TUI row corruption during streaming: assistant text rendered one word per line after long tool output**](https://github.com/earendil-works/pi/issues/8584) *(CLOSED, 1 comment)* — After tools print long lines, assistant text streams garbled with one word per line. A terminal-rendering regression that hurts usability in long sessions.

## Key PR Progress

1. [**#8585 — fix(ai): abort OpenAI streams immediately when signal fires**](https://github.com/earendil-works/pi/pull/8585) — Closes #8586. Adds abort-signal checks to OpenAI Responses and Completions iteration loops, matching the Anthropic path's behavior. Important for reliable RPC cancellation.

2. [**#8575 — fix(coding-agent): surface + bound the torn-append replay loss in session JSONL files**](https://github.com/earendil-works/pi/pull/8575) — A malformed session line containing both a torn entry prefix and a complete following entry silently costs two replay entries. Adds visibility and bounds for the loss — a data-integrity fix that session replay reliability depends on.

3. [**#8479 — fix: expose unloaded llama.cpp presets**](https://github.com/earendil-works/pi/pull/8479) — Related to #8167. Makes `--models-preset` entries selectable even when not autoloaded, and improves llama-swap compatibility.

4. [**#8512 — feat(coding-agent): add optional PowerShell tool**](https://github.com/earendil-works/pi/pull/8512) — Landed in v0.84.3. The author explicitly cites giving up on Git Bash on Windows due to path handling; PowerShell is the pragmatic native alternative.

5. [**#8570 — fix(ai): preserve Codex thread affinity headers**](https://github.com/earendil-works/pi/pull/8570) — Adds the missing `thread-id` affinity header alongside the existing `session-id` and `prompt_cache_key`, matching upstream Codex client behavior for request routing.

6. [**#8573 — feat(ai): bedrock mantle anthropic messages**](https://github.com/earendil-works/pi/pull/8573) — Follow-up to #8572. Routes Amazon Bedrock Mantle models (including GPT-5.x) through the existing Anthropic Messages adapter. Addresses Converse failing on Mantle-only models.

7. [**#8580 — feat(coding-agent): drop extra vertical padding on tool rows**](https://github.com/earendil-works/pi/pull/8580) — Removes 2–3 empty lines per tool call from transcripts, tightening the most verbose part of the TUI.

8. [**#8422 — fix(ai): omit reasoning effort for xAI Grok Build**](https://github.com/earendil-works/pi/pull/8422) — xAI rejects `grok-build-0.1` requests containing `reasoning.effort`. Adds a compatibility flag to suppress the field, fixing HTTP 400 on that model.

9. [**#8547 — feat(tui): move editor cursor on click**](https://github.com/earendil-works/pi/pull/8547) — Mouse selection works, but clicking doesn't move the prompt cursor. A small UX gap that this PR closes for mouse-enabled terminals.

10. [**#8559 — feat(coding-agent): attach clipboard images as atomic markers**](https://github.com/earendil-works/pi/pull/8559) — Pasted images currently insert raw temp-file paths into the prompt. This makes images first-class attachment markers in the editor, improving prompt readability and intent clarity.

## Hot Discussions

### Q&A

- [**#8563 — Connecting a local llama-server without an API key**](https://github.com/earendil-works/pi/discussions/8563) — A new user is blocked by Pi's API-key prompt when connecting to a local llama-server with no auth. Common onboarding friction for local-model users.

### General

- [**#1637 — Benchmarking pi's harness**](https://github.com/earendil-works/pi/discussions/1637) *(31👍)* — A user wants objective evidence comparing Pi against Codex CLI and Claude Agent SDK to justify migrating their team's internal coding agent. High engagement suggests the community wants a standardized, in-distribution benchmark suite for agentic harnesses.

## Feature Request Trends

- **Provider expansion is the loudest signal**: SiliconFlow (#4742), Merge Gateway (#5986), Eden AI (#6403), Parasail.io (#8450), plus DeepSeek catalog updates for the new vision model and peak/off-peak pricing (#8546, #8491). Users expect Pi's built-in catalogs to track the fast-moving model landscape.
- **llama.cpp integration polish**: Expose unloaded presets (#8167, PR #8479), show presets when autoload is enabled (PR #8558), and fix the default-model startup failure (#6922). The local-model experience is still rough around the edges.
- **Windows as a first-class platform**: The 44-comment usage thread (#7547), PowerShell tooling (#8582, PR #8512), and path-separator bugs (#8441) all point to Windows support as a strategic priority.
- **Session portability and lifecycle**: Portable agent presets via `pi preset` (#8588), moving sessions into a new working directory/git worktree (#8554), and renderer hooks for extension-provided compaction (#8589) target teams that need reproducible, movable, scriptable agent setups.
- **TUI ergonomics**: Configurable prompt prefix (PR #8291), click-to-place cursor (PR #8547), fullscreen overlay selection policy (#8475), and denser tool rows (PR #8580) show steady investment in terminal UX.

## Developer Pain Points

- **Compaction reliability** — Auto-compaction doesn't trigger at the threshold (#6879) and summaries can be truncated mid-word when hitting token caps (#7048). Both erode trust in long-running sessions.
- **Windows path and shell friction** — Separator-mismatched containment checks (#8441), PowerShell 5.1 vs pwsh inconsistency (#8582), and the overall "too many ways to run Pi on Windows" problem (#7547) are the top Windows complaints.
- **llama.cpp model discovery** — Models hidden from the picker unless loaded (#8167) and false "No models available" on startup (#6922) make local-model setup confusing.
- **Abort and error semantics** — `stopReason` regressions (#8409) and OpenAI streams ignoring abort signals (#8586) break automation and RPC callers that depend on precise termination states.
- **Session data integrity** — Torn JSONL appends silently losing replay entries (PR #8575) and compaction summaries persisting truncated (#7048) are subtle data-loss bugs that only surface in long sessions.
- **Stale provider catalogs** — New models like `deepseek-v4-flash-vision-exp` go live upstream but aren't selectable in Pi (#8546), forcing users to file tickets for what should be routine catalog updates.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-25

## Today's Highlights

The team shipped a new nightly release featuring a WebShell workspace-cwd fix and prebuilt CUA driver v0.20.0 binaries for macOS, Linux, and Windows. Meanwhile, issue triage is dominated by MCP reconnect reliability, stream-safety gaps on the Anthropic wire, and terminal rendering regressions. On the PR side, permission hardening, multi-agent session delivery, and `/review` automation continue to be the busiest areas.

## Releases

- [v0.22.0-nightly.20260824.3a1f86d805](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260824.3a1f86d805)
  - `fix(web-shell)`: pass session workspace cwd when opening from overview panel — [#9730](https://github.com/QwenLM/qwen-code/pull/9730)
  - CUA driver `cua-driver-rs` v0.20.0 prebuilt binaries vendored under `packages/cua-driver`
    - macOS: codesigned + notarized universal binary and `QwenCuaDriver.app`
    - Linux: unsigned x86_64 + arm64, glibc 2.31 floor
    - Windows: unsigned x86_64 + arm64

## Hot Issues

1. [API Error: No stream activity for 120000ms after 19 chunks — #5975](https://github.com/QwenLM/qwen-code/issues/5975)  
   Long-running P2 bug: users still hit frequent 120-second stream timeouts after model “thought” pauses. 12 comments; one of the most active reliability threads.

2. [qwen mcp reconnect reports success but MCP tools remain unavailable — #9944](https://github.com/QwenLM/qwen-code/issues/9944)  
   HTTP-transport MCP servers rotate `mcp-session-id`, yet `qwen mcp reconnect` reports success while tool calls fail with “Tool not found”. High-impact integration bug for MCP users.

3. [Architecture review: core + cli structural issues — #4063](https://github.com/QwenLM/qwen-code/issues/4063)  
   Community architecture review identifies P0/P1 problems, including the core type system being coupled to `@google/genai` across 136 files. Worth following for long-term contributor direction.

4. [Anthropic wire is missing stream-safety protections — #9005](https://github.com/QwenLM/qwen-code/issues/9005)  
   P1 core bug: the Anthropic content generator lacks the stream-safety guards already present on the OpenAI wire, leaving headless/interactive sessions vulnerable to silent stalls.

5. [Migrate TUI rendering from ink to OpenTUI — #8662](https://github.com/QwenLM/qwen-code/issues/8662)  
   Proposal to move off heavily patched ink + React 19 to OpenTUI for flicker-free rendering and first-class mouse support. Needs discussion but resonates with terminal-heavy users.

6. [NO_TOOL_RESULT_PROGRESS hard-fails headless runs — #9026](https://github.com/QwenLM/qwen-code/issues/9026)  
   Closed bug but important regression pattern: headless runs abort when a model ends a turn quietly after a tool result. Critical for CI/automation users.

7. [Artifact updatedAt stays stale; write_file intermediates linger — #9927](https://github.com/QwenLM/qwen-code/issues/9927)  
   Session artifact `updatedAt` only moves on registration-field changes, not content changes, and intermediate `write_file` state remains visible. Confusing for WebShell session history.

8. [Hide skill commands from top-level slash completion — #9942](https://github.com/QwenLM/qwen-code/issues/9942)  
   With many skills installed, `/` completion becomes overcrowded. Users want skill commands separated from built-in slash commands.

9. [Recall/forget scan-cap asymmetry — #9378](https://github.com/QwenLM/qwen-code/issues/9378)  
   Auto-memory can recall documents beyond the 200-doc cap but forget/extraction still uses the capped scan, leaving some memories unmanageable.

10. [ACP debug logs can cross session boundaries — #9534](https://github.com/QwenLM/qwen-code/issues/9534)  
   In a multiplexed `qwen --acp` process, one session’s debug messages can be written into another session’s log file. Important session-isolation bug.

## Key PR Progress

1. [feat(channels): add DingTalk Workspace channel — #9394](https://github.com/QwenLM/qwen-code/pull/9394)  
   Adds a built-in DingTalk Workspace channel with DMs, @mentions, ambient groups, document notifications, and native todo changes.

2. [feat(channels): bound session lifetime with sessionRotation — #8927](https://github.com/QwenLM/qwen-code/pull/8927)  
   Introduces per-channel `sessionRotation` with `maxTurns` or time-based bounds, starting a fresh session when the current one expires.

3. [fix(ui): bottom-align short VP content — #9305](https://github.com/QwenLM/qwen-code/pull/9305)  
   Fixes the blank gap between the last message and composer in VP mode by bottom-aligning short conversation content.

4. [fix(core): expose resolved agent execution mode — #9955](https://github.com/QwenLM/qwen-code/pull/9955)  
   Agent tool displays now carry the runtime-resolved foreground/background mode, and WebShell transcript normalization treats it as authoritative.

5. [fix(ci): neutralize legacy ##[ commands in autofix stdout echoes — #9871](https://github.com/QwenLM/qwen-code/pull/9871)  
   Closes a CI injection gap by defusing both modern `::name::` and legacy `##[name]` workflow-command syntaxes.

6. [feat: support provider-aware reasoning controls — #9590](https://github.com/QwenLM/qwen-code/pull/9590)  
   Adds WebShell reasoning controls matched to DeepSeek V4, GLM 5.2, and Kimi routes: toggle-only hybrids, effort tiers, and mandatory-thinking models.

7. [feat(review): add a --topology minimal single-pass A/B arm — #9919](https://github.com/QwenLM/qwen-code/pull/9919)  
   Lets `/review` run as one careful senior-engineer pass instead of the full multi-agent pipeline, reporting at most 15 findings.

8. [fix(core): make permissions.allow restrict tool schemas sent to model — #9829](https://github.com/QwenLM/qwen-code/pull/9829)  
   Turns `permissions.allow` into a true registry-level allowlist: unapproved built-ins disappear from `/tools` and are no longer sent to the model.

9. [fix(core): allow scoped Git credential config — #9870](https://github.com/QwenLM/qwen-code/pull/9870)  
   Centralizes Git client construction for extension clone/update and authorizes scoped config paths, protocol overrides, and config-count limits.

10. [feat(core): accept cross-session messages behind an inbound gate — #9576](https://github.com/QwenLM/qwen-code/pull/9576)  
    Lets a Qwen Code session receive newline-delimited JSON from sibling sessions over a UNIX domain socket, subject to policy.

## Feature Request Trends

- **Channel and collaboration expansion** — DingTalk Workspace channel, session rotation, outbound file delivery, and cross-session messaging are all active directions.
- **WebShell/UI ergonomics** — Requests include hiding skills from slash completion, collapsing MCP tool results, migrating TUI to OpenTUI, and restoring VS Code message edit/rewind.
- **Smarter `/review` automation** — Multiple PRs add new review arcs, minimal topology modes, deferred-suggestion recoverability, and thread-aware finding replies.
- **External context and memory providers** — Support for open-source Mem0 protocol with configurable `baseUrl`, plus extending the interactive test harness with a mem0 OSS variant.
- **Computer Use architecture** — Community roadmap proposes a three-stage migration to persistent Node REPL + reusable SDK + Qwen Skill, reducing model-visible atomic tools.
- **Security and permission hardening** — Strong demand for `permissions.allow` as a real model-facing allowlist, scoped Git credentials, and guarded cross-session inbound messages.

## Developer Pain Points

- **Stream reliability and progress signals** — Users continue to face 120s stream timeouts ([#5975](https://github.com/QwenLM/qwen-code/issues/5975)), Anthropic-wire safety gaps ([#9005](https://github.com/QwenLM/qwen-code/issues/9005)), and hard failures in headless runs ([#9026](https://github.com/QwenLM/qwen-code/issues/9026)).
- **MCP integration friction** — Reconnect can report success while tools remain unavailable ([#9944](https://github.com/QwenLM/qwen-code/issues/9944)), and MCP tool results are always expanded in the transcript ([#9934](https://github.com/QwenLM/qwen-code/issues/9934)).
- **Session and artifact inconsistencies** — Stale artifact `updatedAt`, lingering intermediates ([#9927](https://github.com/QwenLM/qwen-code/issues/9927)), cross-session ACP debug logs ([#9534](https://github.com/QwenLM/qwen-code/issues/9534)), and memory recall/forget asymmetry ([#9378](https://github.com/QwenLM/qwen-code/issues/9378)).
- **Terminal UI regressions** — VP mode height-budget overflows, skill-command clutter, and pinned-task grouping issues reduce day-to-day usability.
- **CI/sandbox friction** — Missing sandbox images kill CI lanes without actionable errors ([#9961](https://github.com/QwenLM/qwen-code/issues/9961)), and tests that assume non-root execution can fail in containerized CI ([#9909](https://github.com/QwenLM/qwen-code/issues/9909)).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-25

## Today's Highlights

The v0.9.12 release cycle is the main focus: the integration branch (#5576) is now gated and code-complete for release blockers, with a milestone tracker (#5573) coordinating P0 fixes. A provider-neutrality audit (#5588) and several workflow/subagent lifecycle bugs (#5582, #5596) are drawing active attention. Useful UX and reliability PRs also landed, including Windows output decoding (#5602), Linux CI coverage (#5590), and tool/MCP token-cost display (#5603).

## Releases

None published in the last 24 hours.

## Hot Issues

- [**#5588 — Provider neutrality: 18 DeepSeek-exclusive gates that should be provider-neutral**](https://github.com/Hmbown/CodeWhale/issues/5588) [OPEN]  
  A full audit found 18 behavior gates hardcoded to DeepSeek that conceptually should apply to any provider. One NVIDIA NIM environment leak is already fixed. 4 comments, active review.

- [**#5573 — v0.9.12 milestone tracker**](https://github.com/Hmbown/CodeWhale/issues/5573) [OPEN]  
  Central tracker for the release cycle, listing P0 must-fix items around money/safety before v0.9.12 can ship. Useful for anyone following the release.

- [**#5586 — Decompose the mega files**](https://github.com/Hmbown/CodeWhale/issues/5586) [OPEN]  
  Calls out 10k+-line files: `lib.rs` (18.7k), `config.rs` (12.3k), `client.rs` (11.1k), and `runtime_threads.rs` (9.3k). Maintenance pain is driving the request for decomposition.

- [**#5583 — Workflow responseSchema failures need bounded repair and raw-output receipts**](https://github.com/Hmbown/CodeWhale/issues/5583) [OPEN]  
  When a workflow child returns prose or malformed JSON, the schema failure is surfaced but the run is lost. The request is to add a bounded repair path and preserve raw output.

- [**#5582 — Workflow owner snapshots collapse Degraded into Completed**](https://github.com/Hmbown/CodeWhale/issues/5582) [OPEN]  
  Degraded workflow runs are currently projected as Completed, which hides partial failures from users and automation.

- [**#5596 — Turn end silently cancels turn-owned subagents and destroys resumable work**](https://github.com/Hmbown/CodeWhale/issues/5596) [OPEN]  
  Long-running reviewer children are destroyed when the parent turn ends, despite UI/model context suggesting they continue in the background. High impact for autonomous workflows.

- [**#5597 — Detached interactive agents lose post-turn usage from session cost totals**](https://github.com/Hmbown/CodeWhale/issues/5597) [OPEN]  
  Detached children outlive the parent turn, but usage after `TurnComplete` never reaches session/turn cost projections, making cost tracking misleading.

- [**#5595 — Read-only inspection children reject in-workspace absolute `git -C` at execute time**](https://github.com/Hmbown/CodeWhale/issues/5595) [OPEN]  
  A live reviewer child spent ~347k tokens and produced no findings because the allowed `git -C <workspace> log` command was rejected at the final execution envelope.

- [**#5589 — Fleet config view: Enter loops back, model switching is buried**](https://github.com/Hmbown/CodeWhale/issues/5589) [OPEN]  
  TUI UX issue: selecting a fleet role row and pressing Enter appears to land on the same screen, with no clear state change or model-switching affordance.

- [**#5601 — Fresh install: MiniMax and Xiaomi models return 404 on first configuration**](https://github.com/Hmbown/CodeWhale/issues/5601) [OPEN]  
  New users cannot configure MiniMax or Xiaomi because the built-in endpoint URLs appear wrong. DeepSeek works, so this blocks non-DeepSeek first-run experiences.

## Key PR Progress

- [**#5606 — feat(runtime): 0.9.12 relay integration — unify managed Chat with native runtime threads**](https://github.com/Hmbown/CodeWhale/pull/5606) [OPEN]  
  Rebased standby lane for 0.9.12. Managed Chat now rides native runtime threads, includes the R2 approval fix, and `doctor --fix` with consent.

- [**#5576 — 0.9.12 integration: must-fix + UX fixes**](https://github.com/Hmbown/CodeWhale/pull/5576) [OPEN]  
  Integration branch with 72 commits. Now gated and code-complete for release blockers; remaining work is version bump and changelog/RC gates.

- [**#5590 — ci: run Linux workspace tests on pull requests**](https://github.com/Hmbown/CodeWhale/pull/5590) [CLOSED]  
  Fixes CI coverage gap by running Linux workspace tests, doctests, and lockfile checks directly on GitHub Ubuntu runners regardless of branch prefix.

- [**#5602 — fix(shell): decode Windows output reliably**](https://github.com/Hmbown/CodeWhale/pull/5602) [OPEN]  
  Preserves UTF-8 and Windows ANSI-code-page characters split across reads; falls back to ACP only after strict UTF-8 decoding fails.

- [**#5603 — feat(tui): show tool and MCP schema costs**](https://github.com/Hmbown/CodeWhale/pull/5603) [OPEN]  
  Addresses the display-only slice of #5553. The context inspector now shows estimated token costs for the tool catalog and MCP server tools.

- [**#5604 — feat(tui): make Fleet roster editing discoverable**](https://github.com/Hmbown/CodeWhale/pull/5604) [OPEN]  
  Selected fleet members now show an `[edit]` affordance, the footer advertises `m model`, and pressing `m` opens the Fleet detail editor.

- [**#5584 — fix(subagents): persist child approval receipts**](https://github.com/Hmbown/CodeWhale/pull/5584) [OPEN]  
  Closes #5543. Child runtimes now inherit the session approval receipt store, committing `Asked` before showing prompts and terminal outcomes before closing.

- [**#5591 — Fix: goal continuation cadence fix**](https://github.com/Hmbown/CodeWhale/pull/5591) [CLOSED]  
  `continuation_delay_seconds` was only wired into one of two goal-continuation paths; this applies the quiet-period wait to the within-turn dispatch hook.

- [**#5594 — control socket - part d (final)**](https://github.com/Hmbown/CodeWhale/pull/5594) [OPEN]  
  Opt-in, Unix-only, newline-framed JSON-RPC socket per running session. Default is off, preserving existing behavior.

- [**#5593 — /relaunch command - part c**](https://github.com/Hmbown/CodeWhale/pull/5593) [OPEN]  
  Adds self-relaunch after `/update` so a session can switch to a newly installed binary in one step, while still saving state and flushing telemetry.

## Feature Request Trends

- **Provider-neutral architecture**: Multiple requests push for removing DeepSeek-specific behavior gates and fixing broken third-party provider setup ([#5588](https://github.com/Hmbown/CodeWhale/issues/5588), [#5601](https://github.com/Hmbown/CodeWhale/issues/5601)).
- **Supervised operation and lifecycle observability**: Lifecycle outbox, control sockets, `/relaunch`, and goal-continuation cadence are all active feature lanes ([#5592](https://github.com/Hmbown/CodeWhale/pull/5592), [#5594](https://github.com/Hmbown/CodeWhale/pull/5594), [#5593](https://github.com/Hmbown/CodeWhale/pull/5593)).
- **Workflow/subagent hardening**: Users want Degraded status preserved ([#5582](https://github.com/Hmbown/CodeWhale/issues/5582)), bounded schema-failure repair ([#5583](https://github.com/Hmbown/CodeWhale/issues/5583)), durable approval receipts ([#5584](https://github.com/Hmbown/CodeWhale/pull/5584)), and no silent subagent cancellation ([#5596](https://github.com/Hmbown/CodeWhale/issues/5596)).
- **TUI observability and UX polish**: Tool/MCP token-cost display ([#5553](https://github.com/Hmbown/CodeWhale/issues/5553), [#5603](https://github.com/Hmbown/CodeWhale/pull/5603)), fleet editing discoverability ([#5589](https://github.com/Hmbown/CodeWhale/issues/5589), [#5604](https://github.com/Hmbown/CodeWhale/pull/5604)), and terminal capability-guarded cursor accents ([#5554](https://github.com/Hmbown/CodeWhale/issues/5554)).
- **Code health and CI reliability**: Decomposing mega files ([#5586](https://github.com/Hmbown/CodeWhale/issues/5586)), dead-code sweeps ([#5587](https://github.com/Hmbown/CodeWhale/issues/5587)), and Linux CI coverage for all PR branches ([#5547](https://github.com/Hmbown/CodeWhale/issues/5547), [#5590](https://github.com/Hmbown/CodeWhale/pull/5590)).

## Developer Pain Points

- **Hardcoded provider behavior breaks real setups**: MiniMax/Xiaomi 404s on fresh install and DeepSeek-specific gates create friction for non-DeepSeek users ([#5601](https://github.com/Hmbown/CodeWhale/issues/5601), [#5588](https://github.com/Hmbown/CodeWhale/issues/5588)).
- **Long-running work is fragile**: Turn-owned subagents are silently destroyed, detached agent usage disappears from cost totals, and Degraded workflows masquerade as Completed ([#5596](https://github.com/Hmbown/CodeWhale/issues/5596), [#5597](https://github.com/Hmbown/CodeWhale/issues/5597), [#5582](https://github.com/Hmbown/CodeWhale/issues/5582)).
- **Large files and stale dead code make contribution harder**: Multi-thousand-line modules and hundreds of stale `allow(dead_code)` markers keep increasing review and refactoring cost ([#5586](https://github.com/Hmbown/CodeWhale/issues/5586), [#5587](https://github.com/Hmbown/CodeWhale/issues/5587)).
- **CI still has trust gaps**: Linux workspace tests were missing on non-mirrored PR branches, and some tests remain flaky under parallel load ([#5547](https://github.com/Hmbown/CodeWhale/issues/5547), [#5605](https://github.com/Hmbown/CodeWhale/issues/5605)).
- **TUI interactions lack clear feedback**: Enter loops in Fleet config, buried model switching, and role posture drift across independent definitions all create user confusion ([#5589](https://github.com/Hmbown/CodeWhale/issues/5589), [#5575](https://github.com/Hmbown/CodeWhale/issues/5575)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*