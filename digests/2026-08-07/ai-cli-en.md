# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:02 UTC | Tools covered: 10

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
**Date:** 2026-08-07 · **Coverage:** 10 tools (9 active, Grok Build idle)

## 1. Ecosystem Overview

The AI CLI landscape is shifting from feature expansion to reliability consolidation: the loudest community signals this cycle are permission-system regressions, MCP lifecycle mismanagement, and session/context integrity failures rather than missing capabilities. Windows desktop remains the weakest cross-platform surface, with process leaks, crash loops, and path-handling bugs reported simultaneously in Claude Code, OpenAI Codex, Copilot CLI, and Qwen Code. MCP's near-universal adoption has created a shared integration layer—and shared growing pains (orphaned processes, serialization edge cases, registry auth failures) across otherwise unrelated codebases. Release velocity diverges sharply: Qwen Code shipped four artifacts in 24 hours while Claude Code and Gemini CLI shipped nothing, reflecting different maturity phases and risk appetites.

## 2. Activity Comparison

Counts reflect hot issues and key PRs tracked in each tool's daily digest; "Release status" covers the last 24 hours.

| Tool | Hot Issues | PRs | Release Status |
|---|---|---|---|
| Claude Code | 10 | 4 | None |
| OpenAI Codex | 10 | 10 | v0.147.0 shipped |
| Gemini CLI | 10 | 10 | None (preview cherry-picks only) |
| GitHub Copilot CLI | 10 | 0 | v1.0.79-6 patch |
| Kimi Code CLI | 8 | 3 | None |
| OpenCode | 10 | 10 | None |
| Pi | 10 | 10 | v0.84.0 (fullscreen TUI) |
| Qwen Code | 10 | 10 | 4 artifacts (v0.21.7, nightly, live-host v0.1.0 + latest) |
| DeepSeek TUI | 10 | 10 | v0.9.4 release train merged |
| Grok Build | 0 | 0 | No activity |

## 3. Shared Feature Directions

- **MCP lifecycle & reliability** (Codex, Copilot CLI, Kimi, Gemini, DeepSeek). Codex wants project-scoped process pools (#20883) and suffers 10.9 GB subagent MCP memory leaks (#33531); Copilot CLI has orphaned stdio servers after auth rebuilds (#4392) and BigInt serialization crashes (#4211); Kimi requests lazy MCP schema injection (#2147); Gemini hits 400 errors past 128 tools (#24246); DeepSeek ships Registry-first tool discovery (#5238).

- **Permission & trust-boundary hardening** (Claude, Copilot, Qwen, Gemini). Security regressions topped multiple digests: Claude's `ask`-list bypass when Bash is allowlisted (#6527); Copilot's permission mode stuck in "auto" after switching back (#4388); Qwen's read-only shell bypass via command substitution (#8582) plus three trust-boundary flaws (#8627, #8643, #8645); Gemini's subagents executing despite opt-out (#22093).

- **Context & memory management** (Claude, Codex, Gemini, OpenCode, Pi, DeepSeek, Kimi). Users want proactive/smarter compaction (Claude #33026, Pi #6879), context-usage transparency (OpenCode #6152 at 129👍, DeepSeek #5244), and persistent memory (Kimi #1283). Codex raised the correctness alarm: compaction can promote interrupted partial output into confirmed state (#35355).

- **Session integrity & resume reliability** (Copilot, Claude, OpenCode). Copilot's large-session resume OOMs (#4251); Claude's session rename mid-tool-call corrupts transcripts (#73638) and session limits are misattributed between Desktop/CLI (#54750); OpenCode's `/sessions` briefly wiped history.

- **Terminal UX professionalization** (Pi, Copilot, Codex, OpenCode, DeepSeek). Pi shipped fullscreen mode with draggable scrollbars; users want scrollable history (Copilot #4313), multi-line status lines (Codex #21653 at 58👍), clickable links (OpenCode #1168 at 119👍), and mouse/copy fixes (Pi 4 PRs, DeepSeek #5234).

- **Subagent governance** (Gemini, Codex, DeepSeek). Gemini's subagent reports GOAL success despite hitting MAX_TURNS before doing work (#22323); Codex's overnight subagent run drained a full week's quota (#35463); DeepSeek's nested `max_depth` widens the root session budget (#5253).

## 4. Differentiation Analysis

- **Claude Code** is the most permission-centric: allowlists, hook schemas, and git-proxy authorization dominate discourse. It targets enterprise teams via managed Cowork features; its quiet release day contrasts with a large, precise user base that files security regressions with unusual specificity.

- **OpenAI Codex** takes a platform-engineering posture: Bubblewrap sandbox hardening, MCP lifecycle fixes, per-agent context-window lineage, and routing hints. It is Rust-based and invests in foundational infrastructure (thread ID generation, exec yield timeouts) rather than user-facing features.

- **Gemini CLI** differentiates on agent orchestration (codebase_investigator, generalist) and Auto Memory, tightly coupled to Google's model line (Vertex, Gemini 3.6). Its P1 hang/freeze cluster signals the orchestration layer is still stabilizing.

- **GitHub Copilot CLI** is the most conservative: one patch release, zero PRs. Its niche is GitHub-native workflows (MCP registry, Actions CI, `.agents` convention, BYOM), with issues skewing to enterprise edge cases (Azure DevOps remotes, org-enabled model catalogs).

- **Qwen Code** is the fastest shipper with the broadest surface (CLI, desktop, live-host, ACP agents) and the only tool with a folder-trust security model (DO_NOT_TRUST/TRUST_FOLDER). It leads on provider-side cache sharing (DashScope → OpenAI-compatible → Gemini/Vertex) and Chinese-market localization.

- **OpenCode** is the most user-voice-driven OSS project: 129👍 context-usage and 119👍 clickable-link requests, with a TUI feature pipeline (prompt queueing, session-scoped models) outpacing its subscription backend's reliability—the paid-model outage is its dominant story.

- **Pi** is the TUI innovator: fullscreen mode, runtime theme switching, scrollback preservation, and the broadest provider surface (Ollama Cloud, Qwen, DeepSeek, Vertex, Codex backend). Its 0.84.0 release is the most visible UI progress this week.

- **Kimi Code CLI** and **DeepSeek TUI** are niche players. Kimi focuses on VSCode-extension parity and lightweight MCP; DeepSeek (CodeWhale) pushes Rust-based ACP server extensibility for embedding in Zed/third-party bridges. Kimi's community is the smallest; DeepSeek shows healthy contributor diversity (Copilot-authored PRs) and disciplined epic management.

## 5. Community Momentum & Maturity

**Fastest shippers:** Qwen Code (4 artifacts, nightly builds, new live-host product line) and Pi (v0.84.0 with major TUI work) are iterating at weekly-or-faster cadence. **Highest PR throughput:** Codex, Gemini, OpenCode, Pi, Qwen, and DeepSeek each logged ~10 PRs in 24h; Codex's are the most foundational (MCP recovery, routing hints, per-agent context tracking). **Loudest community engagement:** OpenCode's paid-subscription outage (10+ issues, 90+ comments) and Qwen's free-tier policy thread (150 comments) drove negative noise; Claude Code's #6527 permission regression (23 comments, 19👍) shows a mature user base reporting security-sensitive defects precisely. **Maturity leaders:** Claude Code and Copilot CLI are the quietest—but both still carry unresolved permission and session-integrity regressions, indicating the reliability debt is industry-wide, not startup-specific. **At-risk fast movers:** Gemini CLI (P1 hang cluster) and OpenCode (outage + feature velocity) are shipping fast but paying in stability incidents.

## 6. Trend Signals

1. **MCP is the new compiler boundary.** Community pain has shifted from connectivity to lifecycle governance: process pooling, schema lazy-loading, serialization edge cases, and registry policy. Codex and DeepSeek treat MCP as first-class architecture; others are accumulating debt visible in orphaned processes and memory bloat.

2. **Permission systems are the adoption gate.** The most severe issues this week are permission bypasses/widening (Claude #6527, Qwen #8582, Copilot #4388). As agents gain autonomy, deterministic, auditable, least-privilege execution—and transparency about *why* a prompt fired—becomes a competitive differentiator.

3. **Subagent trust is breaking down.** GOAL-success-on-failure (Gemini #22323), silent quota drain (Codex #35463), and depth-budget escapes (DeepSeek #5253) degrade trust in multi-agent orchestration. Correct status propagation and usage attribution are prerequisites to scaling subagent architectures.

4. **Session is the new unit of truth.** Transcript corruption, resume OOMs, and compaction-confirmed hallucinated state indicate session persistence is a correctness boundary. Expect "session integrity" to be treated with the same seriousness as prompt-injection resistance.

5. **Windows is the battleground platform.** Process storms (Codex #33776), desktop crash loops (Qwen #8615), path bugs, and IME/rendering issues cluster on Windows across five tools. A vendor that wins Windows desktop reliability has a clear differentiation opportunity.

6. **Privacy/telemetry pushback is organized.** OpenCode's 44👍 privacy-wording issue (#39875) and Gemini's redaction-ordering complaint (#26525) show users auditing both policy text and data-flow order. Redaction must precede model context, not follow it as an instruction.

7. **Integrated models vs. BYO providers is a fork in the road, not a merge.** Qwen and Gemini bet on built-in cloud ecosystems (DashScope, Vertex); OpenCode, Pi, and Copilot BYOM bet on provider-agnostic flexibility. OpenCode's gateway outage illustrates the integrated model's fragility—and its differentiation value when it works.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights

Data snapshot: 2026-08-07 · Source: github.com/anthropics/skills

## 1. Top Skills Ranking

The most active PRs are dominated by two themes: **fixing the `skill-creator` evaluation pipeline** and **hardening document-format skills**.

| PR | Skill / Change | Functionality & Discussion Highlights | Status |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Fixes `run_eval.py` always reporting 0% recall, which made description optimization useless. Windows stream reading, trigger detection, and parallel worker fixes. | Open |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | New skill for typographic QC in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Highly relevant to all document generation. | Open |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF skill fix | Corrects 8 case-sensitive file references in `SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`), preventing breakage on case-sensitive filesystems. | Open |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | New skill for creating, filling, and converting OpenDocument formats (`.odt`, `.ods`), including ODT-to-HTML parsing. Strongly requested for LibreOffice interoperability. | Open |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` improvement | Revises the frontend-design skill for clarity and actionability, ensuring each instruction can actually be followed in a single conversation. | Open |
| [#83](https://github.com/anthropics/skills/pull/83) | Meta analyzer skills | Adds `skill-quality-analyzer` and `skill-security-analyzer`; evaluates skills across structure, documentation, security, and quality dimensions. | Open |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX skill fix | Prevents document corruption when tracked changes collide with existing bookmark `w:id` values in OOXML. | Open |
| [#539](https://github.com/anthropics/skills/pull/539) | `skill-creator` validation | Adds pre-parse validation for unquoted YAML `description` fields containing `:`, preventing silent frontmatter truncation. | Open |

## 2. Community Demand Trends

From the most active Issues, the community is asking for:

- **Trust, security, and namespace governance**  
  [#492](https://github.com/anthropics/skills/issues/492) is the most-commented issue: community skills distributed under the `anthropic/` namespace create trust-boundary abuse risk. Related concerns appear in [#1175](https://github.com/anthropics/skills/issues/1175) about SharePoint permission logic inside SKILL.md.

- **Reliable skill tooling and evaluation**  
  [#556](https://github.com/anthropics/skills/issues/556) and [#1169](https://github.com/anthropics/skills/issues/1169) report the same critical bug: `run_eval.py` never triggers skills, so the optimization loop reports `recall=0%` on every iteration. Users need the `skill-creator` pipeline to be trustworthy before they can author better skills.

- **Sharing, distribution, and lifecycle**  
  [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing instead of manual file transfer. [#189](https://github.com/anthropics/skills/issues/189) highlights duplicate skill collisions between plugins. [#16](https://github.com/anthropics/skills/issues/16) asks to expose Skills as MCP tools.

- **Agent memory, governance, and output quality**  
  Users are proposing skills for the agent itself: compact-memory notation ([#1329](https://github.com/anthropics/skills/issues/1329)), agent governance/safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), and a reasoning quality gate pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)).

- **Context-window discipline**  
  [#1487](https://github.com/anthropics/skills/issues/1487) reports that the bundled `claude-api` skill eagerly injects ~156k tokens, exhausting context in one tool call. This is a growing concern as skills become more powerful.

## 3. High-Potential Pending Skills

These open PRs add new capabilities and are receiving continued community attention — likely candidates to land soon:

- [**document-typography**](https://github.com/anthropics/skills/pull/514) — typographic quality control for generated documents
- [**ODT skill**](https://github.com/anthropics/skills/pull/486) — OpenDocument creation, filling, and conversion
- [**testing-patterns**](https://github.com/anthropics/skills/pull/723) — full testing-stack guidance: unit tests, React Testing Library, testing philosophy
- [**pyxel**](https://github.com/anthropics/skills/pull/525) — retro/pixel-art game development with the Pyxel engine and its MCP server
- [**self-audit**](https://github.com/anthropics/skills/pull/1367) — mechanical file verification plus a four-dimension reasoning quality gate before delivery
- [**color-expert**](https://github.com/anthropics/skills/pull/1302) — color naming systems, color spaces, and a "what to use when" reference
- [**plan-file-hygiene**](https://github.com/anthropics/skills/pull/1479) — lifecycle management for accumulated planning artifacts

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not just for more skills, but for **trustworthy skill infrastructure**: reliable evaluation tooling, secure distribution, manageable context size, and meta-skills that validate and govern agent behavior.

---

# Claude Code Community Digest — 2026-08-07

## Today's Highlights
No new releases landed in the last 24 hours. Community attention is concentrated on permission-system regressions (allowlist bypass and compound-command prompting), Windows Desktop stability, and a Cowork git-proxy change that blocks PAT-authenticated pushes. Separately, a set of plugin-dev and script tooling fixes are the latest open PRs.

## Releases
None in the last 24 hours.

## Hot Issues

1. [**#6527** — `ask` list ignored when `Bash` is in allowlist](https://github.com/anthropics/claude-code/issues/6527)  
   Security-relevant permission bug on Linux: users report the `ask` list is bypassed once `Bash` is allowlisted. 23 comments and 19 👍 make it the most actively discussed issue today.

2. [**#57371** — Claude Desktop (Windows): allow disabling bundled Cowork background service](https://github.com/anthropics/claude-code/issues/57371)  
   Users who don't use Cowork want a supported way to stop `CoworkVMService`. High community interest with 42 👍, indicating Windows resource/control concerns.

3. [**#54750** — Session limit reaches 100% despite low visible local usage](https://github.com/anthropics/claude-code/issues/54750)  
   Users are being blocked by an exhausted session limit even though local usage appears minimal. Suggests a possible accounting mismatch between Desktop and CLI.

4. [**#76248** — Cowork git proxy blocks all pushes; PAT pass-through no longer works](https://github.com/anthropics/claude-code/issues/76248)  
   A significant workflow regression for cloud/Cowork sessions: pushes to repositories outside the "authorized set" are blocked even with a user-supplied PAT. 14 comments indicate broad impact.

5. [**#79584** — Assistant text before a tool call intermittently never rendered](https://github.com/anthropics/claude-code/issues/79584)  
   On Windows, text emitted before tool calls (especially `AskUserQuestion`) can disappear. Intermittent UI bugs like this are disruptive for plugin-driven workflows.

6. [**#73638** — Session rename mid-server-tool-call permanently corrupts transcript](https://github.com/anthropics/claude-code/issues/73638)  
   Renaming a session while a server tool call is in flight injects a synthetic user turn, causing a 400 on every future prompt. A severe data-integrity bug.

7. [**#26581** — Feature request: system notifications when Claude needs attention](https://github.com/anthropics/claude-code/issues/26581)  
   Long-running request with 32 👍: users want terminal/VSCode notifications for task completion or attention, similar to GitHub Copilot.

8. [**#33026** — Feature request: allow Claude to self-initiate context compaction](https://github.com/anthropics/claude-code/issues/33026)  
   Users want Claude to proactively compact context rather than waiting for the system threshold, improving multi-step task reliability.

9. [**#78775** — Desktop regression: session time-range filter only appears with Group by = State](https://github.com/anthropics/claude-code/issues/78775)  
   UI regression affecting Windows and macOS. High visibility at 23 👍, likely because session filtering is a core daily workflow.

10. [**#72173** — `CLAUDE_CODE_DISABLE_MOUSE_CLICKS=1` no longer preserves text selection](https://github.com/anthropics/claude-code/issues/72173)  
    Regression in VS Code terminal on macOS with 12 👍. Users relying on mouse-disabled mode for copy/paste are affected.

## Key PR Progress

Only 4 PRs were opened/updated in the last 24 hours.

1. [**#84600** — Enable frontend-design plugin at project scope](https://github.com/anthropics/claude-code/pull/84600)  
   Registers the official marketplace and enables the `frontend-design` skill via `.claude/settings.json` for anyone using Claude Code in this repo.

2. [**#84427** — fix(plugin-dev): prevent `validate-agent.sh` exiting on first warning](https://github.com/anthropics/claude-code/pull/84427)  
   Fixes Bash counter expressions returning non-zero under `set -e`, so validation continues past the first warning or error.

3. [**#84381** — fix(plugin-dev): handle wrapped hook schemas and optional matchers in `validate-hook-schema.sh`](https://github.com/anthropics/claude-code/pull/84381)  
   Improves hook schema validation by supporting top-level `"hooks"` wrappers and optional matchers in `hooks.json`.

4. [**#84365** — fix(scripts): allow any user to prevent auto-close with thumbs down](https://github.com/anthropics/claude-code/pull/84365)  
   Addresses #79146 by matching the dedupe bot's behavior: any user's thumbs-down reaction can prevent automatic issue closure.

## Feature Request Trends

- **System-level notifications** continue to be a popular request for long-running agent tasks.
- **More control over background services**, particularly on Windows, where the bundled Cowork service runs even for non-Cowork users.
- **Proactive context management**: users want Claude to initiate compaction or otherwise manage context limits autonomously.
- **Terminal/tmux integration improvements**, e.g. tab titles reflecting agent state.
- A large batch of stale documentation issues (mostly from coygeek) asks for docs covering undocumented slash-command aliases, environment variables, and plugin/marketplace behaviors.

## Developer Pain Points

- **Permission-system friction**: `ask` list bypasses and repeated prompting on compound commands are causing security concerns and workflow paralysis.
- **Windows instability**: Desktop crashes, background service overhead, and TUI rendering bugs are recurring themes.
- **Session and transcript integrity**: incorrect session limits, corrupted transcripts after rename, and git-proxy authorization failures erode trust in long-running sessions.
- **Network/streaming reliability**: `ECONNRESET` errors from the bundled Bun client—while Node/curl succeed—point to lingering HTTP client issues on Windows.
- **UI regressions**: text-selection breakage and missing desktop filters indicate that recent UI changes need better cross-platform regression coverage.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-07

## 1. Today's Highlights

Rust v0.147.0 shipped with portable Agent Plugins — searchable across local, personal, workspace, and remote catalogs — plus persistent, manually ordered conversation sections for long-running sessions. Meanwhile, the community's loudest signal was stability: a Windows Desktop bug where ChatGPT.exe spawns hundreds of `taskkill.exe`/`conhost.exe` processes (#33776) topped the charts at 32 comments, while three separate macOS reports of zombie-child-process leaks were filed and closed within 24 hours. On the engineering side, the project landed a dense batch of MCP lifecycle fixes, sandbox hardening, and telemetry/routing improvements.

## 2. Releases

**rust-v0.147.0 (0.147.0)**
- Install portable Agent Plugins and search across local, personal, workspace, and remote plugin catalogs (#36544, #36409, #36919, #36796).
- Organize conversations into persistent, manually ordered sections and browse long transcripts incrementally (#35722, #36007, #36380, #36948).

## 3. Hot Issues

1. **[#33776 — Windows Desktop spawns hundreds of taskkill/conhost processes, causing WMI storms and DWM degradation](https://github.com/openai/codex/issues/33776)** · 32 comments · 27 👍
   The highest-activity issue this week. A single session produced 287 leaked processes, degrading the Windows desktop compositor. Commenters are split between workarounds and demanding a process-lifecycle fix.

2. **[#28080 — Desktop thread tools intermittently lose handlers ("No handler registered")](https://github.com/openai/codex/issues/28080)** · 21 comments
   Windows Desktop sessions randomly hit unregistered tool handlers mid-session. The long tail of comments suggests users consider this a top reliability blocker for daily driver use.

3. **[#20883 — Codex Desktop should use a project-scoped MCP process pool](https://github.com/openai/codex/issues/20883)** · 17 comments
   stdio MCP servers are spawned per chat/session rather than shared per project, multiplying process overhead and duplicate connections. Strong community consensus that this needs architectural change.

4. **[#19694 — Desktop model picker filters out models from model_catalog_json](https://github.com/openai/codex/issues/19694)** · 14 comments · 35 👍 (CLOSED)
   Custom/enterprise catalog models were silently hidden from the picker. Closed after resolution, but the high 👍 count signals how much users care about custom-model parity.

5. **[#21653 — Support multi-line status line in TUI](https://github.com/openai/codex/issues/21653)** · 12 comments · 58 👍
   The most-upvoted open issue. Users configuring multiple statusline items get truncation with no linebreak support — a pure UX quality-of-life request with broad appeal.

6. **[#33967 — ChatGPT for Windows cannot complete setup or enter limited-access mode](https://github.com/openai/codex/issues/33967)** · 9 comments
   Desktop app stuck on the "Complete Windows setup" screen, blocking use entirely. Another entry in the growing Windows onboarding/installer bug cluster.

7. **[#33531 — MCP suites persist after subagents complete, reaching 10.9 GB private memory](https://github.com/openai/codex/issues/33531)** · 5 comments
   Windows App spawns a full stdio MCP subprocess suite per subagent and never reclaims it; memory balloons into double-digit GB. Related to the MCP lifecycle complaints in #20883.

8. **[#35355 — Compaction can promote partial output from interrupted commands into falsely confirmed task state](https://github.com/openai/codex/issues/35355)** · 5 comments
   Serious model-behavior concern: ephemeral observations from interrupted commands can survive compaction as "confirmed" state and mislead later turns. A correctness issue, not just a crash.

9. **[#37192 — OAuth fallback silently uses hardcoded "dummy" API key after network change, causing 401](https://github.com/openai/codex/issues/37192)** · 4 comments
   On WiFi→hotspot/VPN toggle, CLI silently falls back to a hardcoded dummy key instead of re-authenticating. Authentication-state handling under network changes is fragile.

10. **[#35463 — Codex subagents drain full week quota overnight — usage counting broken](https://github.com/openai/codex/issues/35463)** · 4 comments
   Pro users report a single overnight subagent run exhausting the entire week's quota, implying usage accounting doesn't attribute subagent token consumption correctly.

## 4. Key PR Progress

1. **[#37337 — Recover MCP servers after OAuth reauthentication](https://github.com/openai/codex/pull/37337)** — Failed OAuth-backed Streamable HTTP MCP servers now become available after credential refresh, without a full client restart.

2. **[#37344 — Fix subagent MCP startup status settling](https://github.com/openai/codex/pull/37344)** — Clears stale MCP startup expectations for active subagents so the TUI no longer shows MCP startup as "running" indefinitely.

3. **[#37273 — Reuse MCP handlers across sampling steps](https://github.com/openai/codex/pull/37273)** — Caches immutable MCP tool handlers per session, eliminating redundant schema construction on every sampling step.

4. **[#37349 — Mount a minimal /dev in full-filesystem Bubblewrap sandboxes](https://github.com/openai/codex/pull/37349)** — Overlays a minimal device tree in network-isolated sandboxes, preventing host device files from leaking into full-filesystem containers.

5. **[#37345 — Send model routing hints to the Codex backend](https://github.com/openai/codex/pull/37345)** — Adds an `x-codex-routing-hint` header (model + service tier) across Responses requests, remote compaction, and WebSocket handshakes.

6. **[#37347 — Track context windows per agent](https://github.com/openai/codex/pull/37347)** — Forked subagents now get distinct context-window lineage metadata instead of inheriting the parent's compacted history identity.

7. **[#37352 — Configure the default code-mode exec yield timeout](https://github.com/openai/codex/pull/37352)** — New `features.code_mode.default_exec_yield_time_ms` (default 30s) applies to exec calls omitting `yield_time_ms` and is reflected in the tool description.

8. **[#37350 — Allow ThreadManager to customize thread ID generation](https://github.com/openai/codex/pull/37350)** — Adds `with_thread_id_generator` for root/child/forked thread ID allocation, keeping UUIDv7 as default and preserving stored IDs on resume.

9. **[#37341 — Support content references for inline visualizations](https://github.com/openai/codex/pull/37341)** — Structured `visualize` content references now work in cached, streaming, and finalized TUI rendering; absolute paths are resolved only when safe.

10. **[#37267 — Support plugin roots in the host skill loader](https://github.com/openai/codex/pull/37267)** — Carries plugin identity/namespace/root through host skill loading and enforces direct-child discovery for Agent Plugins — foundational for the 0.147.0 plugin search feature.

## 5. Feature Request Trends

- **MCP lifecycle as a first-class concern** — The strongest theme: project-scoped process pools (#20883), deterministic tool ordering (#37351), memory reclamation after subagents (#33531), and graceful recovery after OAuth changes (#37192).
- **Sandbox configurability and least privilege** — Users want a configurable default Windows session shell (#16579) and RFC-style host-enforced authority ceilings for subagent delegation (#36381).
- **Terminal UX polish** — Multi-line status line (#21653) leads a cluster of TUI ergonomics requests; inline viewport repaint and visualization reference fixes (#37341, #37335) align with this direction.
- **Model/context control** — Explicit `prompt_cache_breakpoint` emission for GPT-5.6 prefix reuse (#35300) and model-catalog parity in the picker (#19694) show demand for finer-grained control over model behavior.

## 6. Developer Pain Points

- **Process/resource leaks on Desktop** — The dominant complaint across platforms: Windows `taskkill`/`conhost` storms (#33776), 10.9 GB MCP memory bloat (#33531), WFP firewall re-arming causing constant UAC prompts (#31556), and macOS zombie-child-process exhaustion (#37247, #37249, #37236 — three near-duplicate reports in one day).
- **OAuth/network instability** — Silent fallback to a hardcoded dummy API key after network changes (#37192) and quota-draining subagent usage accounting (#35463) both erode trust in the CLI's auth/usage layer.
- **State-integrity risks after compaction** — Two reports (#35355, #37325) describe Codex promoting ephemeral/checkpoint prose into authoritative project state, handing materially incomplete work to human review. This is the most concerning correctness pattern this week.
- **Windows Desktop reliability cluster** — Setup screens that never complete (#33967), PTY/WSL terminals that silently fail (#37104), and intermittent "No handler registered" errors (#28080) collectively paint Windows as the platform with the most open stability debt.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-07

## Today's Highlights
No new releases shipped in the last 24 hours, but release automation stayed busy with cherry-picks for v0.55.0-preview.2 ([#28719](https://github.com/google-gemini/gemini-cli/pull/28719)) and version bumps to 0.54.2 ([#28712](https://github.com/google-gemini/gemini-cli/pull/28712)). The most impactful merged change was [#28700](https://github.com/google-gemini/gemini-cli/pull/28700), fixing the "model finishes your sentence instead of answering" bug by preventing new user messages from fusing into interrupted tool turns. Meanwhile, a fresh P1 bug ([#28714](https://github.com/google-gemini/gemini-cli/issues/28714)) reports that attaching any image triggers `UNKNOWN_UPSTREAM_ERROR` and freezes the chat until a new session is started.

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments, 2👍) — `codebase_investigator` reports `status: "success"` with termination reason `"GOAL"` even after hitting the max-turn limit before doing any analysis. This masks real failures and undermines trust in subagent status signals — the most-discussed issue today.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 8👍) — The CLI hangs indefinitely whenever it defers to the generalist agent, even for trivial tasks like folder creation. Users wait up to an hour before cancelling; the workaround is instructing the model to never use subagents. High community engagement.

3. **[#28714 — UNKNOWN_UPSTREAM_ERROR when attaching any image; chat freezes](https://github.com/google-gemini/gemini-cli/issues/28714)** (P1, new, 1 comment) — Reproduced on Windows 11 with `gemini-3.6-flash-high` in both the raw terminal and the AionUi wrapper, so it's not wrapper-specific. A regression worth watching closely.

4. **[#25166 — Shell command execution stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3👍) — Simple CLI commands that never prompt for input still leave the shell hanging in "Awaiting user input" state. Directly blocks automation workflows.

5. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 3 comments) — Subagents like `generalist` execute even though agents mode is disabled in all configurations. A permission/opt-out regression that surprised users expecting MCP-only behavior.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security, 4 comments) — Auto Memory sends local transcript content to the extraction model *before* redaction happens, and service logs can expose existing skill definitions. Privacy-sensitive: redaction must occur before content enters model context, not as an instruction.

7. **[#24246 — Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments) — The CLI fails once enabled tools exceed the API limit; users expect smarter runtime scoping of tools rather than a hard failure.

8. **[#22186 — get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1, 3 comments) — The CLI crashes reproducibly when a get-shit-done output finishes printing its user summary.

9. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments, 1👍) — The browser subagent terminates with GOAL status but no useful result under Wayland sessions, making browser automation unusable for affected Linux users.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 3 comments, 1👍) — The model reaches for `git reset` / `--force` when safer alternatives exist, and lacks guardrails around destructive DB/resource modifications.

## Key PR Progress

1. **[#28700 — fix(core): stop a new user message fusing into an unanswered tool response](https://github.com/google-gemini/gemini-cli/pull/28700)** (CLOSED) — Fixes the "model finishes your sentence" bug: after a tool call is interrupted (stream failure or ESC), the next user message was merged into the interrupted turn and treated as continuation text. Pairs with cherry-pick [#28710](https://github.com/google-gemini/gemini-cli/pull/28710) into the 0.54.x stable line.

2. **[#28716 — Reclassifying Capacity Exhaustion as Terminal Error](https://github.com/google-gemini/gemini-cli/pull/28716)** (CLOSED) — Capacity exhaustion and insufficient credit are now terminal errors, triggering immediate model fallback or graceful degradation instead of futile retry loops. Cherry-picked to preview via [#28719](https://github.com/google-gemini/gemini-cli/pull/28719).

3. **[#28718 — fix(core): record usage already received when a stream is aborted](https://github.com/google-gemini/gemini-cli/pull/28718)** (OPEN) — `usageMetadata` is captured from every chunk but only flushed on the success path; aborted streams lose usage accounting. Closes [#28682](https://github.com/google-gemini/gemini-cli/issues/28682).

4. **[#28673 — feat(core): add Gemini 3.6 Flash and 3.5 Flash-Lite model configurations](https://github.com/google-gemini/gemini-cli/pull/28673)** (OPEN, P2) — Adds base model definitions, capabilities (`thinking`, `multimodalToolUse`), aliases, and Code Execution support for the new model family.

5. **[#19638 — fix(core): cap search results and clarify context overflow message](https://github.com/google-gemini/gemini-cli/pull/19638)** (OPEN, P1/P2, help wanted) — Caps `SearchText` (grep/ripgrep) output so broad queries returning thousands of matches can't overflow the context window, and makes the overflow message actionable.

6. **[#28586 — fix(core): preserve thoughtSignature in functionCall parts to fix 400 error](https://github.com/google-gemini/gemini-cli/pull/28586)** (OPEN, P2) — Fixes a v0.53.0 regression where stripping `thoughtSignature` caused 400 Bad Request errors during parallel tool calls.

7. **[#28641 — fix(cli): prevent ghost text wrapping infinite loop at narrow widths](https://github.com/google-gemini/gemini-cli/pull/28641)** (OPEN, P2, help wanted) — `getGhostTextLines` could loop forever when `inputWidth` is narrower than a single wide codepoint (CJK/emoji); includes a regression test that previously hung. Fixes [#19985](https://github.com/google-gemini/gemini-cli/issues/19985).

8. **[#28640 — fix(core): point ProjectIdRequiredError at current auth docs](https://github.com/google-gemini/gemini-cli/pull/28640)** (OPEN, P1) — Replaces the broken `goo.gle/gemini-cli-auth-docs` short link (404) with the canonical `geminicli.com` docs URL and adds a redirect.

9. **[#28405 — fix: prevent scroll position jump when user scrolls up during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** (OPEN, P1/P2) — Fixes [#5009](https://github.com/google-gemini/gemini-cli/issues/5009): auto-scroll re-sticks to bottom too aggressively when new content arrives while the user is reviewing earlier output.

10. **[#28679 — fix(auth): improve Vertex AI 401 error message when using standard API keys](https://github.com/google-gemini/gemini-cli/pull/28679)** (OPEN, P2, security) — Previously the CLI made the request and failed opaquely when `vertex-ai` auth was selected with only a standard Gemini API key; the new message explains the missing Google Cloud credentials up front.

## Feature Request Trends

- **AST-aware code tooling** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) form an epic investigating AST-aware file reads, search, and codebase mapping to reduce token noise, improve method-boundary precision, and cut down turns from misaligned reads.
- **Agent observability and self-awareness** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) wants subagent trajectories exposed via `/chat share`; [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) wants subagent context included in `/bug` reports; [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks for the agent to know its own CLI flags and hotkeys to act as its own expert guide.
- **Memory system reliability and privacy** — The Auto Memory epic ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) bundles requests for deterministic secret redaction before content enters model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), quarantining invalid inbox patches instead of silently skipping them ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and stopping retries on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
- **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery instead of the current fail-fast behavior on locked profiles; [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) wants `settings.json` overrides (e.g., `maxTurns`) honored by the browser agent.
- **Component-level evaluation infrastructure** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) is an epic to build robust component-level evals on top of the existing 76 behavioral eval tests.

## Developer Pain Points

- **Hangs and freezes** — The dominant frustration this cycle: the generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck at "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and chat freezing on image attach ([#28714](https://github.com/google-gemini/gemini-cli/issues/28714)).
- **Misleading status reporting** — Subagents report GOAL success despite hitting MAX_TURNS before doing any work ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and browser subagents terminate with GOAL without useful output ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), hiding real failures from users.
- **Subagent control and configurability** — Subagents run despite being disabled in configs ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), yet conversely the model under-uses custom skills and subagents when they *would* help ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and browser agent settings are silently ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Memory system friction and privacy** — Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently skips invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and sends transcript content to the model before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — a privacy concern for users with sensitive local code.
- **Context and tool limits** — 400 errors when >128 tools are enabled ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and context overflow from broad grep queries ([#19638](https://github.com/google-gemini/gemini-cli/pull/19638)) indicate the CLI needs smarter tool scoping and output truncation.
- **Workspace hygiene and destructive operations** — The model scatters tmp edit scripts across directories when shell execution is restricted ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and reaches for `git reset`/`--force` when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-07

## 1. Today's Highlights

Copilot CLI shipped a small patch release, v1.0.79-6, fixing an interactive-UI diagnostic warning and a session-history load failure that could leave transcripts stuck blank. Community attention is concentrated on session-resume regressions, permission-mode bugs, and MCP interoperability issues in CI, NixOS, and non-GitHub Git remotes. No pull requests were updated or created in the last 24 hours.

## 2. Releases

### v1.0.79-6
[Release page](https://github.com/github/copilot-cli/releases)

**Fixed**
- A rare internal delay no longer prints a diagnostic warning on top of the interactive UI.
- A failed session-history load no longer leaves the timeline permanently empty; previously the failure was silently discarded and the transcript stayed blank for the rest of the session.

## 3. Hot Issues

1. **#4313 – Allow scrolling through the current conversation history**  
   [github/copilot-cli/issues/4313](https://github.com/github/copilot-cli/issues/4313)  
   Community request to support mouse wheel / PageUp / PageDown navigation through current transcripts. 4 comments; touches keyboard input and terminal rendering.

2. **#3392 – Bash tool breaks on NixOS with version >=1.0.49**  
   [github/copilot-cli/issues/3392](https://github.com/github/copilot-cli/issues/3392)  
   Long-standing Linux regression with 7 👍, the highest on this list. The agent fails to start any bash process, making tool use impossible on NixOS. The strace evidence points to process-start failure.

3. **#4251 – Resume of a large session OOMs / grinds one CPU core for ~70 min**  
   [github/copilot-cli/issues/4251](https://github.com/github/copilot-cli/issues/4251)  
   A clear regression vs 1.0.73: resuming a long-lived session uses ~3–4× memory. Critical for users who rely on daily session resumption.

4. **#4212 – Prompt box and highlighted menu items render invisible inside tmux**  
   [github/copilot-cli/issues/4212](https://github.com/github/copilot-cli/issues/4212)  
   Dark-on-dark rendering inside tmux makes the prompt and selected menu items unreadable. Theme/accessibility issue with no workaround confirmed.

5. **#4211 – Copilot CLI couldn't handle BigInt in structured MCP response**  
   [github/copilot-cli/issues/4211](https://github.com/github/copilot-cli/issues/4211)  
   A BigInt returned by an MCP server causes `TypeError: Do not know how to serialize a BigInt` and aborts all ongoing tasks. Real interoperability blocker for MCP users with large numeric values.

6. **#4392 – Post-authentication MCP client rebuild leaves orphaned stdio MCP server processes**  
   [github/copilot-cli/issues/4392](https://github.com/github/copilot-cli/issues/4392)  
   At startup, MCP servers are spawned before auth completes; after auth, the entire client is rebuilt and the first generation of stdio child processes is never killed or reaped. Process leak with potential resource-exhaustion risk.

7. **#4346 – MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN**  
   [github/copilot-cli/issues/4346](https://github.com/github/copilot-cli/issues/4346)  
   Blocks all non-default MCP servers in GitHub Actions CI, even with the documented PAT-less setup. Important for teams trying to use MCP in automated workflows.

8. **#4374 – /mcp search fails with 400 Bad Request in repos with a non-GitHub (Azure DevOps) git remote**  
   [github/copilot-cli/issues/4374](https://github.com/github/copilot-cli/issues/4374)  
   Despite 0 comments, it has 4 👍 — a strong signal for enterprise users. The MCP registry policy fetch appears to assume a GitHub remote and fails in Azure DevOps repos.

9. **#4388 – Permissions stuck in auto mode after changing back to interactive**  
   [github/copilot-cli/issues/4388](https://github.com/github/copilot-cli/issues/4388)  
   The agent keeps making code changes without permission prompts after switching back to interactive mode. A related duplicate is [#4389](https://github.com/github/copilot-cli/issues/4389). This is a serious safety/consent regression in 1.0.78.

10. **#4376 – Support model discovery and in-session switching for BYOM providers**  
    [github/copilot-cli/issues/4376](https://github.com/github/copilot-cli/issues/4376)  
    BYOM currently requires a single `COPILOT_MODEL` value and a restart to change models. Users with Vertex AI / OpenAI-compatible endpoints want dynamic model discovery and in-session switching.

## 4. Key PR Progress

No pull requests were updated or created in the last 24 hours (0 items). No PR progress to report.

## 5. Feature Request Trends

- **Richer model control**: BYOM model discovery and in-session switching ([#4376](https://github.com/github/copilot-cli/issues/4376)); independent model for rubber-duck reviews ([#4380](https://github.com/github/copilot-cli/issues/4380)); correct reasoning-effort selection ([#3053](https://github.com/github/copilot-cli/issues/3053)); missing org-enabled models in the catalogue ([#4390](https://github.com/github/copilot-cli/issues/4390)).
- **Better terminal and conversation UX**: scrollable conversation history ([#4313](https://github.com/github/copilot-cli/issues/4313)); shell-mode Tab should do normal shell completion instead of switching to Issues ([#4387](https://github.com/github/copilot-cli/issues/4387)); preserving steering-message order ([#4372](https://github.com/github/copilot-cli/issues/4372)).
- **Expand `.agents` convention**: users want `.agents` to cover instructions, agents, and hooks in any opened folder, not just Git repos ([#4204](https://github.com/github/copilot-cli/issues/4204)).
- **Permission transparency**: approval prompts should show the exact rule or command characteristic that triggered the request ([#4386](https://github.com/github/copilot-cli/issues/4386)).
- **MCP ecosystem hardening**: registry policy must work outside GitHub remotes and with Actions tokens ([#4374](https://github.com/github/copilot-cli/issues/4374), [#4346](https://github.com/github/copilot-cli/issues/4346)); BigInt-safe serialization ([#4211](https://github.com/github/copilot-cli/issues/4211)); no orphaned MCP servers ([#4392](https://github.com/github/copilot-cli/issues/4392)).

## 6. Developer Pain Points

- **Session-resume reliability**: large sessions cause OOM/CPU spikes ([#4251](https://github.com/github/copilot-cli/issues/4251)), and transcript rendering can blank until a width change or new message ([#4311](https://github.com/github/copilot-cli/issues/4311)).
- **Permission-mode bugs**: switching from auto back to interactive mode does not reliably restore approvals, leading to unprompted code changes ([#4388](https://github.com/github/copilot-cli/issues/4388), [#4389](https://github.com/github/copilot-cli/issues/4389)).
- **Process/tool execution failures**: NixOS bash tool fails ([#3392](https://github.com/github/copilot-cli/issues/3392)); background tasks appear finished but the model waits forever ([#4385](https://github.com/github/copilot-cli/issues/4385)); queued messages can get stuck and ignore Ctrl-C ([#4373](https://github.com/github/copilot-cli/issues/4373)).
- **MCP friction in CI and mixed environments**: 403 with `GITHUB_TOKEN` ([#4346](https://github.com/github/copilot-cli/issues/4346)); 400 with Azure DevOps remotes ([#4374](https://github.com/github/copilot-cli/issues/4374)).
- **Terminal compatibility**: tmux dark-on-dark text ([#4212](https://github.com/github/copilot-cli/issues/4212)); copying text clears the screen on Windows codepage 936 ([#4391](https://github.com/github/copilot-cli/issues/4391)); terminal title incorrectly changes to “Windows PowerShell” ([#4384](https://github.com/github/copilot-cli/issues/4384)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-07

## Today's Highlights

The main story today is a serious **file-corruption bug** in `StrReplaceFile`: invalid UTF-8 bytes anywhere in a file are being replaced with U+FFFD, even outside the edited region. Two open PRs (#2594, #2595) propose fixes, but the underlying issue (#2591) remains open. No releases shipped in the last 24 hours. Meanwhile, the community continues to push for persistent memory (#1283) and better VSCode extension UX (#2593, #2317).

## Releases

No new releases in the last 24 hours.

## Hot Issues

### #1283 — [enhancement] Feature Request: Memory System — Persistent context across sessions  
**Author:** CatKang | Created: 2026-02-27 | Updated: 2026-08-06 | Comments: 20  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1283  
The most-discussed open feature request. Wants both automatic memory and manually defined project/user context to persist across sessions. High community engagement suggests this is a major missing capability for long-running projects.

### #2317 — [bug] [VSCode Extension] Plan mode file path not clickable in chat webview  
**Author:** vlad-at-work | Created: 2026-05-17 | Updated: 2026-08-06 | Comments: 4 | 👍: 1  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/2317  
VSCode users cannot click file paths shown in Plan mode chat. A UX friction point that slows down reviewing proposed edits. Noted against extension `moonshot-ai.kimi-code@0.5.10`.

### #2591 — StrReplaceFile corrupts undecodable bytes outside the edited region  
**Author:** shoemoney | Created: 2026-08-05 | Updated: 2026-08-07 | Comments: 3  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/2591  
Critical bug: the whole file is decoded with `errors="replace"`, edited, then re-encoded. Any non-UTF-8 byte in the file — even far from the edit — becomes `EF BF BD`. Can silently corrupt arbitrary binary or mixed-encoding files. This is the primary incident of the day.

### #2474 — [bug] CLI interface keeps shaking / re-rendering whole conversation  
**Author:** yudichimiantiao | Created: 2026-06-25 | Updated: 2026-08-06 | Comments: 2 | 👍: 2  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/2474  
Terminal rendering instability on Linux. The interface repeatedly re-renders the full conversation from scratch, making the TUI hard to use. Upvotes suggest other users have hit similar behavior.

### #621 — [bug] First WriteFile always errors "Invalid path", then uses absolute path  
**Author:** footerzch | Created: 2026-01-15 | Updated: 2026-08-06 | Comments: 2  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/621  
Older issue, now closed. The first WriteFile in a session fails with `Invalid path` before relative/absolute path handling recovers. Useful historical signal for tooling path-resolution regressions.

### #2147 — [Feature] Lazy-load MCP tool schemas into context — only inject when tools are needed  
**Author:** Evan-Kim2028 | Created: 2026-05-02 | Updated: 2026-08-06 | Comments: 1 | 👍: 1  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/2147  
With multiple MCP servers configured, all tool schemas consume thousands of context tokens before the first user message. Proposes lazy injection to preserve context budget. Important for MCP-heavy workflows.

### #2593 — [enhancement] VSCode plugin: quick switch auto/yolo/manual modes + status bar quota  
**Author:** xuchengpu | Created: 2026-08-06 | Updated: 2026-08-06 | Comments: 0  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/2593  
New request asking for one-click permission-mode switching in the VSCode panel, plus a status bar indicator for remaining 5-hour quota. Straightforward QoL feature for extension users.

### #821 — [Security] Missing authorization checks + dependency updates needed  
**Author:** devatsecure | Created: 2026-01-31 | Updated: 2026-08-06 | Comments: 0  
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/821  
Security review finding: 2 web API vulnerabilities (IDOR/missing authorization) and 5 dependency CVEs. Closed, but the reported severity was high. Worth monitoring whether the fixes have been fully shipped.

## Key PR Progress

### #2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8  
**Author:** shoemoney | Created: 2026-08-06 | Updated: 2026-08-06 | Open  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/2595  
Resolves #2591 by refusing to edit non-UTF-8 files instead of corrupting them. Safe conservative approach, but may break existing workflows that previously relied on partial edits around invalid bytes.

### #2594 — fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits  
**Author:** 686f6c61 | Created: 2026-08-06 | Updated: 2026-08-06 | Open  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/2594  
Alternative fix for #2591: applies `old`/`new` as UTF-8 byte substrings on the raw buffer, preserving invalid bytes outside the edit region. More surgical than #2595 and avoids rejecting files entirely.

### #2255 — feat(shell): support Shift+Enter for inserting newlines  
**Author:** donbeave | Created: 2026-05-13 | Updated: 2026-08-06 | Closed  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/2255  
Adds Shift+Enter as a newline shortcut in the interactive prompt, complementing Ctrl-J and Alt-Enter. Referenced multiple related issues (#2254, #2010, #2121, #1585, #1574), so it resolves a long-standing terminal input ergonomics ask.

## Feature Request Trends

- **Persistent memory & context:** Users want the CLI to remember project patterns, preferences, and instructions across sessions (#1283).
- **MCP token efficiency:** Lazy-loading MCP tool schemas is a clear direction to reduce prompt overhead in MCP-heavy setups (#2147).
- **VSCode extension parity:** Users expect panel-level controls for mode switching and quota visibility, plus clickable file paths in chat (#2593, #2317).
- **Terminal input ergonomics:** Shift+Enter for multiline prompts (and related newline handling) has broad community demand, gathered across multiple linked issues (#2255).

## Developer Pain Points

- **Silent file corruption:** `StrReplaceFile` can destroy non-UTF-8 bytes during ordinary edits — a high-severity reliability issue (#2591).
- **TUI instability:** Full-conversation re-rendering and “shaking” make the CLI interface frustrating on some Linux setups (#2474).
- **Path handling flakiness:** First WriteFile failing with `Invalid path` creates a bad first impression in scripting and agentic workflows (#621).
- **MCP context budget exhaustion:** Injecting all MCP tool schemas upfront can consume the usable context before the user starts working (#2147).
- **VSCode UX gaps:** Non-clickable paths and missing mode/quota controls reduce the extension’s usability for plan/review workflows (#2317, #2593).
- **Security debt:** Closed issues about authorization failures and dependency CVEs remain a reminder to audit historical fixes (#821).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-07

## Today's Highlights

The community is dominated by a **widespread outage of paid OpenCode Go/Zen subscription models**, with multiple issues reporting `401 Request blocked by upstream provider` errors on all paid endpoints while free models continue to work. On the development side, the project is actively shipping TUI and core improvements: prompt queueing, session-scoped model selection, and a workspace environment foundation. No new releases landed in the last 24 hours.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#38257 — OpenCode Go: return 401 Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38257)** — 44 comments, 11 👍
   The canonical thread for the Go subscription outage: all models fail on `chat/completions` while `/v1/models` works fine. Users report this started 2026-07-22 and it appears to be a server-side issue.

2. **[#38218 — All subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)** — 31 comments, 13 👍
   Confirms the outage is not client-specific: every model under opencode-go uniformly fails after login, across installs.

3. **[#38195 — 401 AuthError on all Go subscription models](https://github.com/anomalyco/opencode/issues/38195)** — 24 comments, 17 👍
   Reports reproduction across OpenCode Desktop and Hermes on Windows and macOS, reinforcing that free models work while paid tiers are blocked.

4. **[#6152 — [FEATURE] Session context usage breakdown (like /context in Claude)](https://github.com/anomalyco/opencode/issues/6152)** — 22 comments, 129 👍
   One of the most-upvoted feature requests: a TUI dialog showing the current session's context-window composition. High demand for better visibility into token consumption.

5. **[#40234 — Go subscription not activated after payment](https://github.com/anomalyco/opencode/issues/40234)** — 13 comments
   Chinese-language report: subscription email received, but the UI still shows "please subscribe" and requests error with `No payment method`. Billing state synchronization is broken for some users.

6. **[#14332 — Amazon Bedrock Opus 4.6 compaction failure](https://github.com/anomalyco/opencode/issues/14332)** — 13 comments, 8 👍
   Conversation compaction fails with an error about modified `thinking`/`redacted_thinking` blocks in the latest assistant message — a provider-specific contract violation during compaction.

7. **[#1168 — [FEATURE] Make links clickable (Ctrl+Left Click)](https://github.com/anomalyco/opencode/issues/1168)** — 11 comments, 119 👍
   Long-standing UX request (since July 2025) that URLs in the TUI open in the default browser. Consistently high community demand.

8. **[#39827 — [Zen] AuthError on all Zen models after account recreation](https://github.com/anomalyco/opencode/issues/39827)** — 9 comments, 4 👍
   Extends the outage scope to Zen: every paid and free Zen model fails, while direct provider API keys (DeepSeek, Anthropic) work — strongly indicating an upstream gateway issue.

9. **[#39875 — [FEATURE] Revert silent removal of Go privacy wording and add telemetry + retention policy](https://github.com/anomalyco/opencode/issues/39875)** — 6 comments, 44 👍
   Privacy-focused feature request: two recent commits silently changed provider-attribution and privacy wording; users want explicit telemetry/retention transparency. Builds on several earlier related issues.

10. **[#32157 — [FEATURE] Configurable mid-run prompt delivery: queue vs steer with compaction-aware semantics](https://github.com/anomalyco/opencode/issues/32157)** — 5 comments, 67 👍
    Proposes a first-class distinction between `queue`, `steer`, and `break` for prompts submitted while a response is running — a power-user workflow improvement with strong upvote support.

## Key PR Progress

1. **[#40971 — feat(tui): expose prompt action commands](https://github.com/anomalyco/opencode/pull/40971)** — Exposes stable prompt action commands (`form.option.previous`, etc.) to TUI plugins, enabling programmatic control of form and permission prompts.

2. **[#40929 — feat(core): bound tool output](https://github.com/anomalyco/opencode/pull/40929)** — Enforces configured `tool_output` line/byte limits, retains full truncated text in managed files (cleaned up after 7 days), and honors producer-owned truncation metadata.

3. **[#40922 — feat(tui): queue prompts with Option+Enter](https://github.com/anomalyco/opencode/pull/40922)** — Enter steers the active response while Option/Alt+Enter queues prompts in a compact composer dock, summarized as `<count> queued · <first prompt>`.

4. **[#40969 — fix(llm): treat empty tool call identity as absent](https://github.com/anomalyco/opencode/pull/40969)** — Fixes streaming failures with OpenAI-compatible endpoints like Alibaba DashScope that send empty-string `id` on continuation deltas.

5. **[#40967 — feat(core): add workspace environment foundation](https://github.com/anomalyco/opencode/pull/40967)** — Pure-addition architecture where spawn is the driver contract: `Files` derives from a `ChildProcessSpawner` Effect, with optional native fast-path overrides.

6. **[#40960 — fix(tui): dismiss stale permission prompts](https://github.com/anomalyco/opencode/pull/40960)** — Permission prompts are removed from local state when the server reports `PermissionNotFoundError`, eliminating stale-dialog accumulation in the TUI.

7. **[#40943 — fix(ai): preserve Responses item IDs](https://github.com/anomalyco/opencode/pull/40943)** — Preserves response item IDs for reasoning/assistant messages/function calls regardless of `store`, and replays provider-hosted output items instead of synthesizing references. Aligns OpenAI, Azure, and Open Responses.

8. **[#40965 — fix(ai): support streams without finish reasons](https://github.com/anomalyco/opencode/pull/40965)** — Adds `compatibility.requireFinishReason` option; when disabled, synthesizes an `unknown` terminal finish on clean EOF, finalizing accumulated tool calls robustly.

9. **[#40964 — fix(api): require session selection](https://github.com/anomalyco/opencode/pull/40964)** — Requires explicit `agent` and `model` at session creation in the V2 API and `opencode run`, propagating selection through generated clients and plugin contexts.

10. **[#40954 — fix(core): reload changed skill sources](https://github.com/anomalyco/opencode/pull/40954)** — Hot-reloads local skill directories (including global/explicit sources outside the project) — additions, edits, removals, and symlink changes invalidate the catalog and publish `skill.updated` without restart.

## Feature Request Trends

- **Session context visibility & management**: The most-upvoted requests revolve around session introspection — context-window breakdowns ([#6152](https://github.com/anomalyco/opencode/issues/6152), 129 👍), cross-project session pickers ([#31932](https://github.com/anomalyco/opencode/issues/31932)), searching session contents ([#38973](https://github.com/anomalyco/opencode/issues/38973)), and per-directory session stats ([#37760](https://github.com/anomalyco/opencode/issues/37760)).
- **TUI usability**: Clickable links ([#1168](https://github.com/anomalyco/opencode/issues/1168), 119 👍) and configurable interactive behavior ([#32157](https://github.com/anomalyco/opencode/issues/32157), 67 👍) remain high-demand quality-of-life improvements.
- **Privacy & transparency**: A notable cluster of issues ([#39875](https://github.com/anomalyco/opencode/issues/39875), 44 👍) requests re-adding provider-attribution wording and explicit telemetry/retention policies in the privacy policy.
- **Integrated task management**: A Todo Sidebar with Linear integration ([#38081](https://github.com/anomalyco/opencode/issues/38081)) extends the flat per-session todo list into project-scoped issue management.

## Developer Pain Points

- **Paid subscription outage — dominant issue**: The recurring `401 Request blocked by upstream provider` on all Go/Zen paid models (at least 10 open issues, 90+ combined comments) is the single biggest pain point. Free models work; paid models do not. Users report it affects multiple apps, OSes, and accounts, and persists for over two weeks.
- **Billing activation failures**: Subscriptions sometimes don't propagate to the workspace ([#40234](https://github.com/anomalyco/opencode/issues/40234)), leaving users with "No payment method" errors despite confirmation emails.
- **TUI stability on Linux/Windows**: Freezes on Debian/XFCE requiring `kill -9` ([#35494](https://github.com/anomalyco/opencode/issues/35494)), garbled terminal output in PowerShell after exit ([#11748](https://github.com/anomalyco/opencode/issues/11748)), and startup failures on Windows 10 with Node 26 ([#40957](https://github.com/anomalyco/opencode/issues/40957)).
- **Session data loss and sync gaps**: The web interface doesn't auto-refresh conversations ([#40502](https://github.com/anomalyco/opencode/issues/40502)), and `/sessions` briefly wiped chat history in v1.18.14 ([#40759](https://github.com/anomalyco/opencode/issues/40759), closed).
- **Provider metadata inaccuracies**: Model metadata mismatches, such as DeepSeek V4 Flash Free being capped at 200K context in models.dev despite native 1M support ([#40958](https://github.com/anomalyco/opencode/issues/40958)), reduce the utility of long-context models.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-07

## 1. Today's Highlights

v0.84.0 launches the new fullscreen TUI mode with runtime switching, sticky editor/footer, and draggable scrollbars. Meanwhile, the community is focused on TUI edge-case stability and context reliability: crashes on over-wide lines, X11 connection leaks, and auto-compaction only triggering after provider overflow are the most visible concerns. PR activity is strong around provider expansion (Ollama Cloud, Qwen Token Plan), agent lifecycle hardening, and TUI selection/copy fixes.

## 2. Releases

- [v0.84.0](https://github.com/earendil-works/pi/releases/tag/v0.84.0)  
  **Fullscreen TUI mode** — switch between regular and fullscreen modes at runtime, with a sticky editor and footer, independently scrollable transcript, and draggable scrollbars. See [UI & Display docs](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settings.md).

## 3. Hot Issues

- [#7547 – [Windows] How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)  
  A high-engagement community thread (22 comments) trying to map the many ways Pi runs on Windows so maintainers can prioritize docs, bug fixes, and out-of-box support.

- [#6879 – auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)  
  15 👍. One agentic turn ran past the compaction threshold until the provider rejected the request at 373k tokens. The proposed fix is to check for compaction after every agent turn, not only at API boundaries.

- [#7128 – New default PI_* guideline in system prompt over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)  
  The default prompt guideline “Inspect PI_* environment variables” biases the agent toward needless `env`-inspection bash calls, adding noise and slowing tasks.

- [#7413 – Compaction fails on GitHub Copilot GHE.com enterprise accounts — “unknown stamp” error](https://github.com/earendil-works/pi/issues/7413)  
  `/compact` fails for GHE.com Copilot users with `invalid token: unknown stamp "prod-cus-01"`, while normal chat works fine. This blocks enterprise users from a core workflow.

- [#5323 – Improve Vertex + GCP metadata server support](https://github.com/earendil-works/pi/issues/5323)  
  Pi’s synchronous `existsSync` auth check does not work with GCP metadata server credentials, so Vertex users on GCE/GKE need a non-file-based auth path.

- [#7702 – 400: reasoning_content must be passed back for DeepSeek models via opencode zen gateway](https://github.com/earendil-works/pi/issues/7702)  
  Multi-turn/tool-call conversations with DeepSeek through the opencode zen gateway fail because `reasoning_content` is not round-tripped.

- [#7600 – pi-coding-agent leaks X11 connections: fills the X server client table](https://github.com/earendil-works/pi/issues/7600)  
  A long-running Pi process leaked 182 X server connections over ~8 days, exhausting Xorg’s 256-client table and breaking new X clients.

- [#7736 – Uncaught exception when exceeded terminal width](https://github.com/earendil-works/pi/issues/7736)  
  v0.84.0 TUI crashes with `Rendered line 409 exceeds terminal width (76 > 74)` instead of truncating. Reported with 1 👍 and 3 comments.

- [#7321 – Multi-line paste broken on terminals without bracketed paste support (e.g. Termux)](https://github.com/earendil-works/pi/issues/7321)  
  On terminals without bracketed paste, the first `\r` submits instead of inserting the pasted block, making multi-line paste unusable.

- [#7689 – Handle end_turn: false for codex](https://github.com/earendil-works/pi/issues/7689)  
  The Codex backend can return `response.completed` with `end_turn: false`; Pi currently needs to handle this provider extension so turns are not ended prematurely.

## 4. Key PR Progress

- [#7742 – feat(ai): Ollama Cloud support](https://github.com/earendil-works/pi/pull/7742)  
  Adds Ollama Cloud as a provider using `OLLAMA_API_KEY`, while preserving hybrid local/cloud workflows via `ollama launch pi`.

- [#7710 – feat(agent): restore suspended harness operations](https://github.com/earendil-works/pi/pull/7710)  
  Implements the large R3 item from the harness v2 plan: create/load a harness from session state with recovery, query, reducer, and restore support.

- [#7717 – fix(agent): reject reset during active runs](https://github.com/earendil-works/pi/pull/7717)  
  Fixes the assistant-only transcript bug by rejecting `Agent.reset()` while a run is active and preserving transcript state until the in-flight response settles.

- [#7715 – feat(agent): allow blocked tool calls to terminate](https://github.com/earendil-works/pi/pull/7715)  
  Adds an optional `terminate` hint to blocked `beforeToolCall` results and exposes it to coding-agent extension `tool_call` handlers.

- [#7681 – Support AGENTS.override.md as a per-directory context override](https://github.com/earendil-works/pi/pull/7681)  
  Adds `AGENTS.override.md` as the highest-priority context file, loading only the override when both override and `AGENTS.md`/`CLAUDE.md` exist.

- [#7718 – fix(tui): preserve scrollback on content-driven full redraws](https://github.com/earendil-works/pi/pull/7718)  
  Prevents scrollback loss in normal-screen mode when streaming markdown reflows above the visible viewport.

- [#7721 – fix(tui): avoid unwanted newlines when copying in fullscreen](https://github.com/earendil-works/pi/pull/7721)  
  Fullscreen mouse selection now tracks wrapped rows so copying a long line does not insert artificial newlines.

- [#7733 – fix(tui): correct multi-click text selection](https://github.com/earendil-works/pi/pull/7733)  
  Fixes double-click word selection including trailing whitespace and related multi-click behavior regressions.

- [#7722 – feat(coding-agent): add theme override](https://github.com/earendil-works/pi/pull/7722)  
  Adds `--use-theme dark` and appearance-based notation like `--use-theme dayowl/nightowl` to override the stored theme for the current run.

- [#7685 – fix(coding-agent): disable bunfig autoload in compiled binaries](https://github.com/earendil-works/pi/pull/7685)  
  Prevents standalone Pi binaries from autoloading project `bunfig.toml` preloads, which could crash even `pi --version` in broken environments.

## 5. Feature Request Trends

- **TUI interaction polish** — Fullscreen TUI users are requesting word-selection on double-click, select-to-copy toggles, half-page scroll bindings, and theme overrides.
- **Provider breadth and auth flexibility** — Strong demand for Ollama Cloud, Qwen Token Plan Individual, LLM Gateway, Bedrock Mantle, and better GCP/Vertex metadata-server authentication.
- **Extensibility and lifecycle control** — Requests for `terminate` hints on blocked tool calls, session reload APIs, better reset semantics, and read-only auth preflight checks.
- **Performance/context management** — Auto-compaction after each agent turn, SQLite query optimizations, and avoiding O(n²) tool-call buffer re-parsing during streaming.

## 6. Developer Pain Points

- **Compaction/context reliability** — Auto-compaction fires too late, and `/compact` fails for GitHub Copilot GHE.com enterprise accounts.
- **TUI stability at the edges** — Crashes on over-wide lines, undefined tool-result content, scrollback loss, and copy/selection quirks are common in the new fullscreen mode.
- **Terminal/platform gaps** — Windows usage is fragmented, Termux lacks bracketed-paste multi-line support, and SSH-based Anthropic login redirects to localhost instead of offering a copyable code.
- **Provider-specific API quirks** — DeepSeek requires `reasoning_content` round-tripping, GLM models on Fireworks break with prompt caching, and the Qwen model list is out of sync.
- **Long-running resource leaks** — X11 connection leaks and inefficient streaming re-parsing hurt developers running Pi for extended sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-07

## Today's Highlights

Qwen Code shipped **v0.21.7**, removing the 50-turn limit for Goals and adding inline terminal image rendering for model outputs in the interactive CLI. The team also published **Qwen Live Host v0.1.0** as a new stable installer feed. Community attention is clustered around a serious hooks regression in 0.21.6 ([#8622](https://github.com/QwenLM/qwen-code/issues/8622)) and several Windows path/security bugs affecting the new desktop app.

## Releases

- [v0.21.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7)  
  - Removed the 50-turn limit for Goals, allowing tasks to resume beyond previous boundaries ([#8421](https://github.com/QwenLM/qwen-code/pull/8421)).  
  - Enabled inline terminal image rendering from model outputs in the interactive CLI, covering the terminal support requested in [#8090](https://github.com/QwenLM/qwen-code/issues/8090).

- [v0.21.7-nightly.20260807.fca8f3c1f](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260807.fca8f3c1f)  
  - CI-only fix: surface blocked autofix takeover admission ([#8410](https://github.com/QwenLM/qwen-code/pull/8410)).

- [live-host-v0.1.0](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.1.0)  
  - First Qwen Live Host release; includes Windows merge-queue test CI and evidence-image tooling preparation.

- [live-host-latest](https://github.com/QwenLM/qwen-code/releases/tag/live-host-latest)  
  - Stable installer feed for Qwen Live Host.

## Hot Issues

1. [Qwen OAuth Free Tier Policy Adjustment (#3203)](https://github.com/QwenLM/qwen-code/issues/3203)  
   The highest-engagement item this cycle, with 150 comments. The proposal would cut the free tier from 1,000 to 100 requests/day and phase it out entirely. Closed, but signals strong pricing sensitivity among OAuth users.

2. [Qwen Coder connection "Internal Error" (#6565)](https://github.com/QwenLM/qwen-code/issues/6565)  
   An authentication/connection failure surfaced in Chinese and Japanese localized environments. Still waiting on more information; highlights the need for clearer i18n error reporting.

3. [Prompt not restored after Ctrl+C cancel (#8316)](https://github.com/QwenLM/qwen-code/issues/8316)  
   Cancelling an agent run does not restore the prompt to the input box, forcing users to retype. 8 comments; a small but noticeable UX regression.

4. [0.21.6 hooks regression: PreToolUse/PostToolUse/PreCompact/SessionStart never fire (#8622)](https://github.com/QwenLM/qwen-code/issues/8622)  
   Critical for automation: only `UserPromptSubmit` and `Stop` are dispatched. Hook-driven tool gating and workflow automation silently break after upgrading from 0.21.5.

5. [Read-only shell classifier bypass via command substitution (#8582)](https://github.com/QwenLM/qwen-code/issues/8582)  
   Security bug: read-only shell classification auto-approves commands hiding arbitrary code behind line continuations or `${var@P}`. Actively discussed by maintainers.

6. [`.env` loaded from DO_NOT_TRUST ancestor in serve fast path (#8643)](https://github.com/QwenLM/qwen-code/issues/8643)  
   Trust is evaluated once for the start directory, so an explicitly trusted workspace can load `.env` from an untrusted ancestor. Credential-leak risk.

7. [DO_NOT_TRUST loses to ancestor TRUST_FOLDER (#8627)](https://github.com/QwenLM/qwen-code/issues/8627)  
   An untrusted workspace can be silently trusted if any ancestor is trusted, potentially letting it inject the `qwen serve` bearer token. Important trust-model fix.

8. [Desktop 0.1.0 on Windows crashes at workspace open (#8615)](https://github.com/QwenLM/qwen-code/issues/8615)  
   P1 Windows blocker: bundled runtime crashes with `EISDIR lstat 'C:'` when opening any workspace in the new desktop app.

9. [Terminal shrink reprints transcript blocks (#8557)](https://github.com/QwenLM/qwen-code/issues/8557)  
   On macOS/Warp, shrinking the terminal window causes previously printed transcript blocks to be duplicated in scrollback. 6 comments.

10. [Proposal: list qwen-audio-agent in README Ecosystem (#8629)](https://github.com/QwenLM/qwen-code/issues/8629)  
    Community proposal to document a realtime full-duplex voice frontend for ACP agents. Signals growing interest in voice-driven coding workflows.

## Key PR Progress

1. [Confirm read-only git commands when repo config executes programs (#8645)](https://github.com/QwenLM/qwen-code/pull/8645)  
   Closes a security hole where whitelisted `git status/diff/log` commands could execute repository-local config programs.

2. [Run ACP agent fan-outs concurrently and past the tool-call cap (#8631)](https://github.com/QwenLM/qwen-code/pull/8631)  
   Aligns daemon batch execution with the core scheduler, preventing long `/review`-style agent fan-outs from serializing and being killed.

3. [Share compression caches with OpenAI providers (#8418)](https://github.com/QwenLM/qwen-code/pull/8418)  
   Extends prefix-preserving cache sharing beyond DashScope to any OpenAI-compatible endpoint, reducing latency and compression cost.

4. [Share compression cache with Gemini and Vertex AI (#8425)](https://github.com/QwenLM/qwen-code/pull/8425)  
   Same caching benefit for Google GenAI models, with fallback to cold compression on provider errors.

5. [Add cooperative pause and resume to workflows (#8320)](https://github.com/QwenLM/qwen-code/pull/8320)  
   Adds a pause-aware scheduler: new agent dispatches stop, in-flight work converges, and results are gated until the run resumes.

6. [Improve parallel agent activity feedback in Web Shell (#8559)](https://github.com/QwenLM/qwen-code/pull/8559)  
   Keeps active parallel-agent status at the conversation tail and auto-expands details while work is running.

7. [Add repository context manifest for /review (#8654)](https://github.com/QwenLM/qwen-code/pull/8654)  
   Introduces a manifest with bounded review domains, related-path scopes, recommended tests, and required configurations.

8. [Resolve Qwen 3.8 reasoning budget conflicts (#8525)](https://github.com/QwenLM/qwen-code/pull/8525)  
   Prevents DashScope requests from carrying both `reasoning_effort` and `thinking_budget` when set from different config layers.

9. [Strip Windows verbatim prefix from desktop workspace paths (#8619)](https://github.com/QwenLM/qwen-code/pull/8619)  
   Switches to `dunce::canonicalize` for desktop workspace paths, fixing Windows `\\?\`-prefixed path failures.

10. [Sanitize internal daemon secrets from shell subprocess environments (#6606)](https://github.com/QwenLM/qwen-code/pull/6606)  
    Long-running security PR that prevents daemon secrets from leaking into shell subprocess environments.

## Feature Request Trends

- **Terminal and rendering reliability**: Inline terminal image support is now shipping, but users still want fixes for VP-mode line expansion ([#8634](https://github.com/QwenLM/qwen-code/issues/8634)), duplicate transcript rendering ([#8557](https://github.com/QwenLM/qwen-code/issues/8557)), tmux flicker ([#8562](https://github.com/QwenLM/qwen-code/issues/8562)), and WSL display corruption ([#7634](https://github.com/QwenLM/qwen-code/issues/7634)).

- **Localization and i18n**: Requests for Korean docs ([#8551](https://github.com/QwenLM/qwen-code/issues/8551)), persistent desktop UI language ([#8592](https://github.com/QwenLM/qwen-code/issues/8592), [#8641](https://github.com/QwenLM/qwen-code/issues/8641)), and better Chinese IME visibility in Windows terminals ([#8625](https://github.com/QwenLM/qwen-code/issues/8625)).

- **Voice and multimodal frontends**: The qwen-audio-agent proposal ([#8629](https://github.com/QwenLM/qwen-code/issues/8629)) and the Omni multimodal experiments ([#8185](https://github.com/QwenLM/qwen-code/issues/8185), [#8197](https://github.com/QwenLM/qwen-code/issues/8197)) point toward voice-driven and multimodal agent interactions as a growing direction.

## Developer Pain Points

- **Hook regression after upgrade**: The 0.21.6 loss of `PreToolUse`, `PostToolUse`, `PreCompact`, and `SessionStart` hooks ([#8622](https://github.com/QwenLM/qwen-code/issues/8622)) is a major reliability concern for users relying on hook-based security or workflow orchestration.

- **Windows path handling is fragile**: Desktop startup crashes ([#8615](https://github.com/QwenLM/qwen-code/issues/8615)), URL-encoded drive letters in chat file links ([#8644](https://github.com/QwenLM/qwen-code/issues/8644)), and verbatim path prefixes are all causing Windows-specific breakage.

- **Trust boundary complexity**: Multiple security issues revolve around the folder-trust model: `.env` loading from untrusted ancestors ([#8643](https://github.com/QwenLM/qwen-code/issues/8643)), `DO_NOT_TRUST` precedence failures ([#8627](https://github.com/QwenLM/qwen-code/issues/8627)), and git config command execution ([#8645](https://github.com/QwenLM/qwen-code/pull/8645)).

- **Terminal glitches across platforms**: Duplicate scrollback, tmux flicker, WSL re-rendering, and poor IME visibility remain recurring frustrations for interactive-CLI users.

- **OAuth free tier anxiety**: The 150-comment discussion on [#3203](https://github.com/QwenLM/qwen-code/issues/3203) shows strong community concern about quota reductions and the eventual phase-out of the free OAuth entry point.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-07

## Today's Highlights

The v0.9.4 release train (#5135) and the long-running command-boundary refactor epic (#2870) both closed, consolidating the 0.9.4 line. Important fixes landed for TUI mouse-wheel scrolling (#5234), subagent checkpoint resume (#5242), and MCP Registry-first tool selection (#5238). Several Copilot-authored PRs are also pushing a broad Runtime API expansion for memory, goals, skills, and MCP lifecycle management.

## Hot Issues

1. **[#2870 – EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** *(closed, 20 comments)*  
   The main coordination item for the command-boundary refactor. Closure indicates the staged layers are now integrated and ready for follow-up work; high comment activity shows heavy cross-contributor review.

2. **[#4978 – Anthropic API 400: 'type' must be in ["enabled", "disabled", "auto"]](https://github.com/Hmbown/CodeWhale/issues/4978)** *(closed, 6 comments)*  
   Intermittent errors with `providers.openmodel` on Anthropic-compatible endpoints. Users report retries sometimes succeed, pointing to fragile enum handling in request serialization.

3. **[#5250 – Only one API key can be saved](https://github.com/Hmbown/CodeWhale/issues/5250)** *(open, 2 comments)*  
   Multi-provider users want separate stored keys for DeepSeek, GLM, etc., instead of overwriting the previous provider’s key. A clear credential-management feature request.

4. **[#5244 – Unknown model IDs silently degrade to 128K context](https://github.com/Hmbown/CodeWhale/issues/5244)** *(open, 2 comments)*  
   If a model ID isn’t recognized, the TUI falls back to a 128K window without warning. This can silently compact 1M-window model conversations.

5. **[#4828 – macOS: underwater shell breaks open/osascript/launchctl](https://github.com/Hmbown/CodeWhale/issues/4828)** *(closed, 2 comments)*  
   v0.9.0’s underwater shell causes `exit code -54` / “operation not permitted” for common macOS commands. Downgrading to v0.8.67 was the reported workaround.

6. **[#5253 – Nested max_depth can widen root depth budget](https://github.com/Hmbown/CodeWhale/issues/5253)** *(open, 1 comment)*  
   A descendant subagent can supply an explicit `max_depth` and bypass the root session’s recursion budget. Important for agent governance and resource limits.

7. **[#5223 – Mouse wheel scrolls input history instead of content](https://github.com/Hmbown/CodeWhale/issues/5223)** *(closed, 1 comment)*  
   Long transcript content does not scroll with the wheel; instead the composer history changes. Root cause was mouse-capture/alternate-scroll interference, fixed in PR #5234.

8. **[#5035 – Workflow authoring failures hidden by parallel fan-out](https://github.com/Hmbown/CodeWhale/issues/5035)** *(closed, release-blocker)*  
   `task(...)` rejected options accepted by direct Agent dispatch, and failed parallel slots became `null`, making a failed workflow look successful. Serious orchestration reliability issue.

9. **[#5178 – Admin digest "post" returns ok:true while posting nothing](https://github.com/Hmbown/CodeWhale/issues/5178)** *(closed)*  
   The digest endpoint falsely reports success and leaves drafts pending forever. A classic silent false-success API bug.

10. **[#5246 – Split shipping profile from local release gate](https://github.com/Hmbown/CodeWhale/issues/5246)** *(closed)*  
   Fat LTO and `codegen-units = 1` on every pre-push release build is expensive. Separating the dist profile from the local dev gate improves contributor iteration time.

## Key PR Progress

1. **[#5135 – Codewhale v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)** *(closed)*  
   Integration train 77 commits ahead of `main`, superseding #5044. Central to the v0.9.4 delivery line.

2. **[#5238 – MCP Registry discovery with Registry-first tool selection](https://github.com/Hmbown/CodeWhale/pull/5238)** *(closed)*  
   Adds `registry_sync` and lets the model consult the public MCP Registry for matching zero-environment stdio servers before reaching for `exec_shell`.

3. **[#5242 – Resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242)** *(closed)*  
   Fixes the dead-letter path for `interrupted_continuable` runs. Long tasks interrupted mid-way can now be resumed through `agents/followup`.

4. **[#5234 – Keep alternate scroll off while mouse capture is active](https://github.com/Hmbown/CodeWhale/pull/5234)** *(closed)*  
   Fixes #5223. Disables DECSET alternate-scroll mode when mouse capture is active so wheel input scrolls the transcript instead of the composer history.

5. **[#5077 – Progressively disclose fresh context](https://github.com/Hmbown/CodeWhale/pull/5077)** *(closed)*  
   Keeps `AGENTS.md`/`CLAUDE.md` eager, caps ambient skills at 2,400 chars, and keeps skill bodies lazy. Reduces prompt overhead while preserving discoverability.

6. **[#5225 – Expose file/search/git/patch/shell tools over ACP session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)** *(closed)*  
   Makes the ACP server execute model tool calls, turning chat-only adapters into real code-editing agents for Zed and third-party bridges.

7. **[#5255 – Layer 5.3: Palette, completion, and discovery filtering](https://github.com/Hmbown/CodeWhale/pull/5255)** *(open)*  
   Validates user-command integration in the command palette and slash-completion surfaces. Next step in the command-boundary refactor.

8. **[#5252 – Allow embedders to isolate runtime state roots](https://github.com/Hmbown/CodeWhale/pull/5252)** *(open)*  
   Adds optional `EngineConfig::subagent_state_root` so embedding hosts can keep session-owned delegated-agent state isolated without changing existing defaults.

9. **[#5254 – Build fix for FreeBSD](https://github.com/Hmbown/CodeWhale/pull/5254)** *(open)*  
   rquickjs has no FreeBSD bindings, so compilation fails. This PR works around the platform gap, likely via the `bindgen` feature.

10. **[#5131 – Runtime API memory endpoints](https://github.com/Hmbown/CodeWhale/pull/5131)** *(open)*  
    Adds `/v1/memory` routes for bounded inspection, provenance, and lifecycle controls behind the existing runtime token. Strong enabler for managed desktop/web clients.

## Feature Request Trends

- **Multi-provider credential management**  
  Users want separate API keys stored per provider, not a single overwrite-all slot (#5250).

- **Model capability transparency**  
  Unknown model IDs should surface fallback context-window choices instead of silently defaulting to 128K (#5244).

- **Fleet and subagent policy enforcement**  
  Named agents should bind strictly to configured roles, and nested `max_depth` should never widen the root session budget (#5046, #5253).

- **TUI state ergonomics**  
  Persistent workflow status should move out of the composer area, and mouse wheel input should control content scrolling, not composer history (#5040, #5223).

- **Build and release ergonomics**  
  Separate the shipping profile from local release gates, and avoid HEAD-sha-triggered rebuilds on every commit (#5246, #5245).

## Developer Pain Points

- **Provider API compatibility**  
  Intermittent Anthropic-compatible 400s and missing `task` tool errors break OpenModel/GLM-style setups (#4978, #5002).

- **Expensive local builds**  
  Fat LTO, `codegen-units = 1`, and SHA-stamp rebuilds make pre-push release builds and ordinary commits disproportionately slow (#5246, #5245).

- **Silent success failures**  
  Admin digest returns `ok:true` while posting nothing, and failed Workflow parallel slots become `null`, hiding real failures (#5178, #5035).

- **macOS integration regressions**  
  The underwater shell breaks system commands like `open`, `osascript`, and `launchctl` with permission-style errors (#4828).

- **Session and state isolation gaps**  
  A single API key slot and shared subagent state roots make multi-provider and multi-tenant embedding harder than necessary (#5250, #5252).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*