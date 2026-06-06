# AI CLI Tools Community Digest 2026-06-06

> Generated: 2026-06-06 00:27 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Comparison Report
## 2026-06-06 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a multi-polar market with distinct architectural philosophies: closed-source subscription models (Claude Code, Codex, Copilot CLI) compete against open-source alternatives (OpenCode, Pi, Qwen Code, DeepSeek TUI/CodeWhale) and emerging regional players (Kimi CLI). All tools now grapple with the tension between agentic autonomy and user control—cost transparency, sandboxing, and subagent reliability dominate discussions across every project. The field is simultaneously converging on shared primitives (MCP, prompt caching, session management) while diverging on distribution models and trust boundaries.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Notes |
|------|:-----------:|:---------:|:--------:|---------------|
| **Claude Code** | 9 hot issues tracked | 4 (2 substantive) | v2.1.165 | Minimal patch; bug fixes only |
| **OpenAI Codex** | 10 hot issues | 10+ active | v0.138.0-alpha.5, rusty-v8 v149.2.0 | Alpha cadence; analytics/telemetry focus |
| **Gemini CLI** | 10 hot issues | 9 | v0.45.2, v0.46.0-preview.2, v0.47.0-nightly | Triple-release day (banner fix only) |
| **GitHub Copilot CLI** | 10 hot issues | 2 (non-substantive) | v1.0.60 | Terminal multiplexer + Anthropic reasoning fixes |
| **Kimi CLI** | 1 | 7 (3 migration-focused) | v1.47.0 | Migration/sunset release |
| **OpenCode** | 10 hot issues | 10+ | v1.16.2, v1.16.0 | Reasoning gating, edit safety, Bedrock fixes |
| **Pi** | 10 hot issues | 11 | None | Workflow extension, validation hardening |
| **Qwen Code** | 10 hot issues | 10+ | v0.17.1-nightly | Thought-part leak fix, daemon expansion |
| **DeepSeek TUI / CodeWhale** | 10 hot issues | 10+ | None (v0.9.0 pending) | Subagent surfacing, sidebar progress, fallback chain |

**Observation**: Kimi CLI shows clear wind-down activity (single issue, migration-focused PRs). All other projects maintain high velocity; open-source tools (OpenCode, Pi, Qwen Code, CodeWhale) match or exceed commercial tools in PR throughput.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Cost/context guardrails** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | `--max-context` flag (Claude #34650); upfront model disclosure before Opus escalation (Claude #60093); usage limit accuracy (Codex #12299); zero-quota fail-fast (Gemini #27698); prompt cache invalidation prevention (Qwen #4777) |
| **Subagent/orchestration primitives** | OpenAI Codex, Gemini CLI, Pi, DeepSeek TUI, Claude Code | Status visibility + parent-child wait (Codex #16900, #22099); hang recovery + correct MAX_TURNS reporting (Gemini #21409, #22323); workflow extension with context firewall (Pi #5426); subagent branch surfacing (CodeWhale #2804); Cowork model switching (Claude #49649) |
| **Sandboxing/containment** | OpenCode, Claude Code, Gemini CLI, Codex | Seatbelt/seatbelt-equivalent for agent file system access (OpenCode #2242: 51👍); zero-dependency OS sandboxing (Gemini #19873); Windows sandbox spawn reliability (Codex #24391, #25362) |
| **Windows parity** | OpenAI Codex, GitHub Copilot CLI, DeepSeek TUI | Standalone installer (Codex #13993: 135👍); WSL2 CPU spin (Copilot #3700); Windows sandbox failures (Codex #24391); Windows stabilization gate (CodeWhale #2721) |
| **MCP lifecycle hardening** | Kimi CLI, GitHub Copilot CLI, DeepSeek TUI, Qwen Code | Connection error suppression (Kimi #2434); process leak fixes (Copilot #3698, #3701); underscore parsing (CodeWhale #2744); deferred-tools cache busting (Qwen #4777) |
| **Session durability/forking** | Qwen Code, OpenAI Codex, DeepSeek TUI, Pi | HTTP-native session branching (Qwen #4812); older chat accessibility (Codex #26104); `--continue` context loss (CodeWhale #2739); compaction crash recovery (Pi #5420, #4945) |
| **Declarative configuration** | GitHub Copilot CLI, Qwen Code, Claude Code | Permissions defaults file (Copilot #2398); shared `baseUrl` for multiple models (Qwen #4813); API key/subscription conflict resolution (Claude #8327) |

---

## 4. Differentiation Analysis

| Dimension | Closed-Source Stack (Claude/Codex/Copilot/Gemini) | Open-Source Stack (OpenCode/Pi/Qwen/CodeWhale) | Transition State (Kimi CLI) |
|-----------|---------------------------------------------------|------------------------------------------------|----------------------------|
| **Feature focus** | Cost optimization, enterprise governance, IDE integration | Extensibility, local/self-hosted model support, protocol interoperability | Migration tooling, successor handoff |
| **Target users** | Individual developers on subscription plans; enterprise IT-managed deployments | Power users, privacy-conscious teams, model-agnostic workflows, China-market users | Legacy maintainers; being redirected to Kimi Code CLI |
| **Technical approach** | Proprietary models only; heavy telemetry; cloud-native session state | Pluggable providers (OpenAI-compatible, Bedrock, local LLMs); minimal telemetry; file-based config | N/A—sunsetting |
| **Trust model** | User trusts vendor with data, cost control, and model selection | User controls data locality, model choice, and cost exposure; assumes operational burden | N/A |
| **Distribution** | Package managers, app stores, OAuth-gated | GitHub releases, npm/cargo, source builds | Migration command to new binary |
| **Unique differentiators** | Claude: Cowork VM isolation; Codex: subagent depth; Copilot: GitHub ecosystem; Gemini: Antigravity transition | OpenCode: V2 prompt cache + HTTP recorder; Pi: extension API + workflow system; Qwen: daemon/ACP mode; CodeWhale: provider fallback chains | `/upgrade` path as reference for graceful deprecation |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High momentum, maturing** | OpenCode, Pi, Qwen Code, DeepSeek TUI | Sustained PR velocity (10+/day); architectural PRs (V2 cache, workflow extensions, daemon services); community-contributed features merging; issue depth shows production usage |
| **High momentum, stressed** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI | High issue volume with cost/auth/cross-platform crises; rapid releases but reactive patches; community frustration signals growing pains at scale |
| **Declining/transitioning** | Kimi CLI | Single-digit daily issues; migration-focused releases; repository rename; explicit successor promotion |

**Maturity signals**: 
- **Most production-hardened**: Claude Code (Cowork VM) and OpenCode (V2 architecture, HTTP recorder) show deliberate systems thinking
- **Fastest architectural evolution**: Pi (workflow extension system, validation layers) and Qwen Code (daemon/ACP mode expansion)
- **Greatest enterprise readiness gap**: Gemini CLI (subagent reliability), Copilot CLI (MCP leaks, WSL regressions), CodeWhale (session data loss)

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Cost transparency as competitive requirement** | Claude Code's $1,050 overcharge (#60093), 5× quota burn from 1M context, and Codex usage limit confusion (#12299) are generating highest-engagement issues | Users will migrate to tools offering spend ceilings, model choice locks, and pre-flight cost estimates; "surprise billing" tolerance is exhausted |
| **Agent reliability > agent capability** | Subagent hangs dominate Gemini (#21409), Pi (#4945), Copilot (#3547), CodeWhale (#2739); MAX_TURNS misreporting (#22323); compaction crashes (#5420) | The industry is hitting the "uncanny valley" of agentic UX—users prefer slower, correct execution over fast, broken autonomy; convergence detection and explicit failure modes are emerging patterns |
| **MCP as critical infrastructure with critical bugs** | Process leaks (Copilot #3698/#3701), connection churn (Kimi #2434), cache invalidation (Qwen #4777), parsing bugs (CodeWhale #2744) | MCP server lifecycle management is immature across all tools; developers should assume MCP integrations need operational monitoring and build retry/fallback logic |
| **Terminal-native vs. IDE-native tension** | Copilot CLI alt-screen backlash (#2334: 28👍), CodeWhale IDE integration requests (#2580), Codex VS Code session tabs (#20951) | Pure TUI is hitting ergonomics ceiling; successful tools will offer both terminal and rich IDE surfaces without sacrificing either |
| **Regional model ecosystem fragmentation** | MiMo Token Plan (CodeWhale #2621), Kimi K2.6 auth (CodeWhale #2754), Qwen3.7-plus multimodal (Qwen #4802), DeepSeek via proxy (Pi #5384) | Developers need provider-agnostic routing layers; single-model tools face pressure to become universal LLM gateways |
| **Self-hosted/local LLM as permanent segment** | LM Studio refresh failures (OpenCode #2047), local vLLM config pain (Qwen #3384, #4813), undici timeout (Pi #3715), 5-min stream cap | Cloud-only tools cede this segment; even commercial tools face pressure for local-compatible endpoints |
| **Security sandboxing as enterprise gate** | OpenCode #2242 (51👍, 51 comments, sustained since Aug 2025); Gemini zero-dependency proposal (#19873); Copilot hook disable request (#3697, citing Miasma worm) | Without deterministic containment, AI CLI tools will be blocked by security teams; this is becoming table stakes, not differentiator |

---

*Report compiled from 9 project digests covering 89 issues and 70+ PRs. Data current as of 2026-06-06.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-06 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Open | Quality control for AI-generated documents—fixes orphan words, widow paragraphs, and numbering misalignment. Addresses a near-universal pain point in Claude document output. |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | Open | Create, fill, read, and convert ODT/ODS/ODF files and parse ODT to HTML. Targets open-source/ISO-standard document workflows. |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | Open | Revises the existing frontend-design skill for clarity and actionability, ensuring every instruction is executable in a single conversation. |
| 4 | **Skill Quality Analyzer + Skill Security Analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Open | Two meta-skills that audit other skills across structure, documentation, security, and prompt-injection risk. |
| 5 | **PDF Skill Fixes** | [#538](https://github.com/anthropics/skills/pull/538) | Open | Fixes 8 case-sensitive filename mismatches in `skills/pdf/SKILL.md` that break references on Linux/macOS. |
| 6 | **Skill-Creator YAML Validation** | [#539](https://github.com/anthropics/skills/pull/539) | Open | Adds early validation to catch unquoted `description` fields containing `:`, preventing silent YAML parsing failures. |
| 7 | **DOCX Tracked-Change Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Open | Prevents DOCX corruption by resolving `w:id` collisions between tracked changes and existing bookmarks. |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Open | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data. |

**Discussion highlights:** The most active PRs cluster around **document quality** (typography, ODT, PDF/DOCX fixes) and **meta-tooling** (skill validation, quality analysis). Notably, three of the top PRs are bug-fixes to existing document skills rather than new capabilities, signaling heavy real-world use of the document toolchain.

---

## 2. Community Demand Trends

From the most-commented Issues, the community is asking for:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Org-wide skill sharing & distribution** | #228 (13 comments, 7 👍) | [#228](https://github.com/anthropics/skills/issues/228) — Enable org-wide skill sharing in Claude.ai |
| **Skill-creator tooling reliability** | #556 (11 comments, 6 👍), #202 (8 comments) | [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 0% trigger rate; [#202](https://github.com/anthropics/skills/issues/202) — skill-creator needs best-practice rewrite |
| **Trust, security & namespace governance** | #492 (7 comments, 2 👍) | [#492](https://github.com/anthropics/skills/issues/492) — Community skills under `anthropic/` namespace enable trust-boundary abuse |
| **Plugin packaging clarity** | #189 (6 comments, 8 👍) | [#189](https://github.com/anthropics/skills/issues/189) — `document-skills` and `example-skills` install identical content |
| **MCP interoperability** | #16 (4 comments), #1220 (2 comments) | [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCPs; [#1220](https://github.com/anthropics/skills/issues/1220) — Multi-file preload / inline bundling |
| **Windows compatibility** | Multiple PRs (#1099, #1050) | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `run_eval.py` and `run_loop.py` Windows fixes |
| **Agent governance & safety patterns** | #412 (4 comments) | [#412](https://github.com/anthropics/skills/issues/412) — Skill proposal: agent-governance |

---

## 3. High-Potential Pending Skills

These active, unmerged PRs have significant community attention and appear close to landing:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Agent-Creator + Multi-Tool Evaluation Fix** | [#1140](https://github.com/anthropics/skills/pull/1140) | Addresses Issue [#1120](https://github.com/anthropics/skills/issues/1120); adds a meta-skill for task-specific agent sets plus critical `evaluation.py` stability fixes and Windows path support. |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Broad, well-scoped skill covering testing philosophy through E2E—fills a clear gap in the skills catalog. |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Large enterprise IT footprint; covers ITSM, ITOM, SecOps, FSM, SPM, CSDM, and IntegrationHub. |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Four interlocking skills (kernel, advisor, agent, memory) around structured cognitive frameworks—aligns with rising memory/agent-governance demand. |
| **Masonry Image & Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Media-generation skill integrating Imagen 3.0 and Veo 3.1; taps into multimodal demand. |
| **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory across conversations; directly adjacent to the agent-governance and context-management trend. |
| **n8n Builder + n8n Debugger** | [#190](https://github.com/anthropics/skills/pull/190) | Workflow-automation skills for the popular n8n platform; production-tested by the community. |
| **Feature-Dev Workflow Fix** | [#363](https://github.com/anthropics/skills/pull/363) | Fixes a known TodoWrite overwrite bug causing phase skips; narrow, mergeable scope. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade document and enterprise-automation skills, but the loudest friction is around trust, tooling reliability, and cross-platform compatibility—suggesting the ecosystem is shifting from "more skills" to "skills that work safely at scale."**

---

# Claude Code Community Digest — 2026-06-06

## Today's Highlights

The community is grappling with critical cost-control and transparency issues as 1M context windows auto-trigger without consent, burning through quotas and usage credits. A new patch release (v2.1.165) landed with minimal changes, while authentication edge cases—particularly stale OAuth tokens and API key overrides conflicting with subscriptions—continue to generate significant support volume.

---

## Releases

| Version | Changes |
|--------|---------|
| [v2.1.165](https://github.com/anthropics/claude-code/releases/tag/v2.1.165) | Bug fixes and reliability improvements only — no feature additions or breaking changes. |

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#8327](https://github.com/anthropics/claude-code/issues/8327) | "Organization has been disabled" error when ANTHROPIC_API_KEY overrides Max/Pro subscription | **Fundamental auth/billing conflict**: API key authentication bypasses subscription entitlements, leaving paying users locked out. 118 comments indicate widespread confusion and no clear resolution path. | 🔥 118 comments, 15 👍 — highest engagement in dataset; users demanding documentation clarity |
| [#22543](https://github.com/anthropics/claude-code/issues/22543) | Cowork feature creates 10GB VM bundle that severely degrades performance | **Performance regression with root cause identified**: 10GB VM bundle in `~/Library/Application Support/` causes progressive slowdown. Users have self-diagnosed; fix needed from Anthropic. | 74 comments, 200 👍 — strongest vote signal; treated as high-priority bug |
| [#63060](https://github.com/anthropics/claude-code/issues/63060) | API Error: "Usage credits required for 1M context" | **Cost barrier blocking core functionality**: Users with credits enabled still hit walls at 1M context. Duplicate clustering suggests systemic billing/policy issue, not user error. | 72 comments, 21 👍; multiple duplicates (#65756, #62709) |
| [#12433](https://github.com/anthropics/claude-code/issues/12433) | macOS Activity Monitor shows version number instead of 'claude' as process name | **Polish/UX issue affecting power users**: Process identification broken since at least v2.0.53; complicates debugging, automation, and resource monitoring. | 19 comments, 22 👍; persistent across versions |
| [#34650](https://github.com/anthropics/claude-code/issues/34650) | Add --max-context flag to cap context window usage | **Cost control feature gap**: Opus 4.6's 1M context caused 5× quota burn. No user override exists. Directly addresses #22543/#63060 class of problems. | 13 comments, 24 👍; clear demand for user agency |
| [#60093](https://github.com/anthropics/claude-code/issues/60093) | Model switched to Opus without consent — $1,050 overcharge | **Severe transparency failure**: Silent model escalation with financial impact. Seven "cost amplifiers" identified by user; no UI disclosure. | 8 comments, 0 👍; high severity, low visibility |
| [#49649](https://github.com/anthropics/claude-code/issues/49649) | Model switching for existing Cowork tasks within Projects | **Cowork flexibility gap**: Locked to model selected at task creation; expensive to restart. 20 👍 shows strong demand from power users. | 4 comments, 20 👍; feature request with clear use case |
| [#65699](https://github.com/anthropics/claude-code/issues/65699) | False-positive Usage Policy block on biomedical research (Opus 4.8) | **Regression in safety filtering**: Opus 4.8 blocks legitimate academic work; 4.7 unaffected. Blocking research workflows is high severity. | 3 comments, 0 👍; newly filed, likely to grow |
| [#65722](https://github.com/anthropics/claude-code/issues/65722) | AWK variable syntax ($2) stripped from skill definitions | **Skill system bug breaking shell scripting**: Variable interpolation corrupts stored skills. Workaround requires manual fix every load. | 3 comments, 0 👍; niche but frustrating for automation users |
| [#65761](https://github.com/anthropics/claude-code/issues/65761) | Stale OAuth refresh token causes persistent 401; `/login` fails to recover | **Auth reliability gap**: Manual credential deletion required. `/login` falsely reports success. Breaks CI/automated workflows. | 1 comment, 0 👍; newly filed, clear repro |

---

## Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#65666](https://github.com/anthropics/claude-code/pull/65666) | Fix dev container issues | Resolves DNS/firewall domain blocks in devcontainer build; adds local env key injection for Claude Code startup | Open — infrastructure fix |
| [#65619](https://github.com/anthropics/claude-code/pull/65619) | fix(plugins): align frontend-design author with marketplace entry | Corrects malformed `author.name`/`author.email` fields in plugin.json (dual authors crammed into single strings) | Open — plugin metadata fix |
| [#65723](https://github.com/anthropics/claude-code/pull/65723) | Claude/subscription debate chat rx ewi | Unclear scope from minimal description; appears to be subscription-related UI or logic change | Open — needs clarification |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | s | Single-character title; no description. Likely spam or accidental submission | Open — probably invalid |

*Only 4 PRs active in last 24h; 2 appear substantive.*

---

## Feature Request Trends

1. **Context window user control** — `--max-context` flag (#34650) and context eviction hooks (#41810) show demand for *opt-in* limits, not automatic expansion
2. **Cowork hardening** — deterministic VM mounts (#54483), model switching (#49649), and performance fixes (#22543) indicate the feature is being adopted but needs production polish
3. **Cost transparency & guardrails** — Multiple issues demand upfront model disclosure, spend alerts, and blocking mechanisms before automatic Opus escalation

---

## Developer Pain Points

| Theme | Frequency | Manifestation |
|-------|-----------|---------------|
| **Silent cost amplification** | 🔴 Critical | Automatic 1M context triggers, unannounced model switches to Opus, usage credit requirements mid-session — collectively generating $1,000+ surprise bills |
| **Authentication fragility** | 🔴 High | Stale OAuth tokens (#65761), API key/subscription conflicts (#8327), Pro→Max upgrade recognition failures (#54414) — all requiring manual intervention |
| **Cowork resource bloat** | 🟡 High | 10GB VM bundles, non-deterministic mounts, no model flexibility — feature is powerful but operationally immature |
| **Skill system interpolation bugs** | 🟡 Medium | AWK variables stripped (#65722), context hooks unable to remove data (#41810) — automation primitives are unreliable |
| **Cross-platform parity gaps** | 🟡 Medium | Windows Git Bash PATH stripping (#57435), iOS branch selector missing (#55500), IntelliJ Escape key handling (#63092) — secondary platforms lag macOS |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-06

## 1. Today's Highlights

The past 24 hours saw heavy activity around Windows reliability, with multiple top issues covering sandbox spawn failures, WSL performance degradation, and Computer Use helper path errors on recent Desktop builds. On the engineering side, the team merged several analytics and telemetry PRs while advancing work on Responses Lite, MCP UI capabilities, and permission-profile allowlists.

---

## 2. Releases

- **rusty-v8 v149.2.0** — V8 binding update; tracked in [PR #26464](https://github.com/openai/codex/pull/26464).
- **Codex CLI v0.138.0-alpha.5** — Latest alpha pre-release of the CLI.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#14860](https://github.com/openai/codex/issues/14860) Error running remote compact task | A long-running context/compact bug affecting remote task execution; 92 comments make it the noisiest thread in the dataset. | 72 upvotes; active triage across Pro users on Linux. |
| [#13993](https://github.com/openai/codex/issues/13993) Support standalone Windows installer (`codex-setup.exe`) | The highest-upvoted Windows request (135); corporate/locked-down environments can't use the Microsoft Store. | Strong, sustained demand; framed as an accessibility issue. |
| [#25715](https://github.com/openai/codex/issues/25715) Codex App unusably slow with WSL as agent environment | WSL2 as the agent backend causes routine turns to take 15–60s, making the Desktop app impractical for Windows developers. | 29 upvotes; multiple "me too" reports with similar configs. |
| [#24391](https://github.com/openai/codex/issues/24391) Windows sandbox: spawn setup refresh fails on CLI 0.133.0 | Breaks shell command execution on Windows after the 0.133.0 update; blocks basic CLI usage. | 22 upvotes; users rolling back or manually refreshing sandbox. |
| [#25719](https://github.com/openai/codex/issues/25719) macOS Desktop triggers `syspolicyd`/`trustd` CPU/memory runaway | Repeated notarization/security checks cause system-level resource exhaustion on Apple Silicon. | 16 upvotes; users reporting fans spinning and battery drain. |
| [#12299](https://github.com/openai/codex/issues/12299) "You've hit your usage limit" despite 10% remaining | Rate-limit accounting appears inconsistent in the IDE extension; erodes trust in quota dashboards. | Low upvotes but 18 comments of frustrated debugging. |
| [#26104](https://github.com/openai/codex/issues/26104) Desktop Codex cannot open older chat sessions after update | A recent Desktop update broke backward session compatibility; data loss scare even though JSONL persists. | 18 comments; users scrambling to recover project history. |
| [#16900](https://github.com/openai/codex/issues/16900) Ability to check agent status and parent-child wait mechanism | Subagents can duplicate work when parents don't know children are still healthy but slow; core multi-agent reliability. | 10 comments; design-level discussion. |
| [#22099](https://github.com/openai/codex/issues/22099) Parallel-first subagents and nonblocking background task management | A meta-issue collecting subagent lifecycle gaps; references a community fork exploring solutions. | 10 comments; signals appetite for more agent orchestration primitives. |
| [#25362](https://github.com/openai/codex/issues/25362) Windows sandbox failed spawn setup refresh OS error 740 | OS error 740 (`ERROR_ELEVATION_REQUIRED`) suggests UAC/elevation handling is broken in Windows sandbox setup. | 7 comments; overlaps with #24391 but distinct error code. |

---

## 4. Key PR Progress

| PR | Feature / Fix |
|----|---------------|
| [#26680](https://github.com/openai/codex/pull/26680) report compaction analytics details | Adds `retained_image_count` and `compaction_summary_tokens` to compaction events for v1.5 investigations. |
| [#24852](https://github.com/openai/codex/pull/24852) permissions: enforce managed permission profile allowlists | Map-based permission-profile composition across managed requirements layers; enterprise security boundary. |
| [#25731](https://github.com/openai/codex/pull/25731) support v2 personal access tokens | Introduces `at-` PAT v2 support for `codex login --with-access-token` and `CODEX_ACCESS_TOKEN`. |
| [#26698](https://github.com/openai/codex/pull/26698) Deduplicate skill load warnings | Suppresses repeated invalid `SKILL.md` warnings during watcher reloads while keeping first warning visible. |
| [#26618](https://github.com/openai/codex/pull/26618) fix(tui): avoid duplicated streamed markdown lines | Prevents CommonMark list continuations from being committed to scrollback before their block boundary is stable. |
| [#26687](https://github.com/openai/codex/pull/26687) Pair thread environment settings | Treats thread cwd and environment as a single logical setting to prevent silent desync of execution context. |
| [#26686](https://github.com/openai/codex/pull/26686) feat(mcp): propagate client UI capabilities | Adds semantic MCP app UI capabilities to the app-server handshake; TUI advertises an explicit empty profile. |
| [#26479](https://github.com/openai/codex/pull/26479) Speed up local nextest runs | Switches `just test` to bounded local parallelism so dev machines no longer serialize app-server integration tests. |
| [#26694](https://github.com/openai/codex/pull/26694) Cache tool search handler for `append_tool_search_executor` | Caches a hot path averaging ~113ms per call; performance optimization. |
| [#26230](https://github.com/openai/codex/pull/26230) fix: preserve auto review across config and delegation | Ensures Auto Review remains the effective reviewer across config round trips and delegated work. |

---

## 5. Feature Request Trends

1. **Windows distribution parity** — Standalone installer (#13993) and non-Store channels dominate requests; the Store-only model is a recurring blocker.
2. **Subagent orchestration primitives** — Users want status visibility (#16900), parallel-first delegation (#22099), and background lifecycle management.
3. **MCP ergonomics** — Requests for server-level approval defaults in CLI (#25442), UI capability propagation (#26686), and better Windows STDIO MCP support (#26659).
4. **IDE/extension integration depth** — VS Code users want sessions as full editor tabs (#20951) and per-instance model selection (#25560).
5. **Configuration flexibility** — Selectable `config.toml` profiles (#4849) and repository-scoped marketplace/plugins (#18115) point to team/enterprise scaling needs.

---

## 6. Developer Pain Points

- **Windows is a first-class friction zone.** Sandbox spawn failures (#24391, #25362), WSL slowness (#25715, #20967), Computer Use helper path errors (#25571, #26661), update relaunch failures (#24047), and UI transparency/glitch bugs (#25347) cluster heavily. The lack of a standalone installer (#13993) compounds every other issue.
- **Session and data durability anxiety.** Users report older chats becoming inaccessible (#26104) and project threads disappearing from UI views while JSONL remains intact (#25463).
- **Rate-limit and usage accounting confusion.** Discrepancies between displayed remaining quota and hard blocks (#12299, #23188) create support churn.
- **macOS system resource impact.** `syspolicyd`/`trustd` runaway (#25719) and paste-triggered freezes (#26697) degrade the Apple experience.
- **Feedback/debugging loop gaps.** Missing feedback IDs (#26654) and opaque error messages make it hard for users to tie reports to logs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-06

## 1. Today's Highlights

Google shipped three releases in 24 hours, including a stable patch (v0.45.2), a preview patch (v0.46.0-preview.2), and a new nightly (v0.47.0-nightly.20260605.g4196596f7), all driven by a single transition-banner fix. On the development front, the team is actively landing model-availability updates for Gemini 3.1 Flash Lite GA and Gemini 3.5 Flash support, while community reports continue to surface agent reliability issues—especially around subagent hangs, MAX_TURNS misreporting, and shell execution stalls.

---

## 2. Releases

| Version | Type | What's New |
|---------|------|------------|
| [v0.47.0-nightly.20260605.g4196596f7](https://github.com/google-gemini/gemini-cli/compare/v0.47.0-nightly.20260604.g4196596f7...v0.47.0-nightly.20260605.g4196596f7) | Nightly | Automated nightly build; no user-facing changelog. |
| [v0.46.0-preview.2](https://github.com/google-gemini/gemini-cli/pull/27699) | Preview patch | Cherry-picks [f40498d](https://github.com/google-gemini/gemini-cli/commit/f40498db644ac570a4bba90bb8711239d802ddc6) to v0.46.0-preview.1, extending the Antigravity transition banner display limit so deprecation/reroute messages remain visible. |
| [v0.45.2](https://github.com/google-gemini/gemini-cli/pull/27700) | Stable patch | Same banner fix backported to v0.45.1 stable line. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | A large enhancement to let Gemini 3 models use native bash toolchains safely without extra dependencies. Central to the product's agent architecture. | 8 comments, active design discussion |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | Follow-up to behavioral evals; with 76 tests running across 6 models, reliability of internal evals directly impacts shipping confidence. | 7 comments, internal tracking |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | Could reduce token noise and misaligned reads by letting the agent navigate code structure instead of raw text. | 7 comments, exploratory |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | User reports indefinite hangs on simple tasks when the generalist subagent is invoked; disabling subagents is the only workaround. | 7 comments, 8 upvotes — high user impact |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption | A correctness bug where the agent silently claims success after hitting its turn limit, misleading users about completion. | 6 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | Anecdotal but recurring: custom skills (gradle, git) are ignored unless explicitly prompted, limiting automation value. | 6 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | Security concern: Auto Memory sends transcript content to a model before redaction and may log sensitive skill data. | 4 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions indefinitely | Background extractor reprocesses skipped sessions repeatedly, wasting quota and user resources. | 4 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" after command completes | A core UX bug where finished commands still appear active; breaks trust in tool execution loop. | 4 comments, 3 upvotes |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | Linux/Wayland compatibility gap for the browser agent. | 4 comments |

---

## 4. Key PR Progress

| # | PR | What It Does | Status |
|---|-----|--------------|--------|
| [#27705](https://github.com/google-gemini/gemini-cli/pull/27705) | Promote Gemini 3.1 Flash Lite to GA and support Gemini 3.5 Flash | Unifies three change lines: retires preview aliases, adds stable `gemini-3.1-flash-lite`, and introduces `gemini-3.5-flash` support across the CLI. | Open |
| [#27704](https://github.com/google-gemini/gemini-cli/pull/27704) | (Same as above, earlier iteration) | Superseded by #27705. | Closed |
| [#27702](https://github.com/google-gemini/gemini-cli/pull/27702) | Changelog for v0.46.0-preview.2 | Automated release notes for the preview patch. | Open |
| [#27703](https://github.com/google-gemini/gemini-cli/pull/27703) | Changelog for v0.45.2 | Automated release notes for the stable patch. | Open |
| [#27701](https://github.com/google-gemini/gemini-cli/pull/27701) | fix(core): treat configured includeDirectories as optional to prevent startup crash | Switches from strict `addDirectory` to lenient `addDirectories` so missing optional config dirs (e.g., `.kilocode/rules`) no longer crash on startup. | Closed |
| [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) | fix(core): Ensure zero-quota limits fail fast to prevent retry loop hang | Stops a 10-attempt retry loop when users hit a hard `0` quota, replacing hang with a clear, immediate error. | Open |
| [#27676](https://github.com/google-gemini/gemini-cli/pull/27676) | update the max amount of times the Antigravity transition banner can be displayed | The fix behind v0.45.2/v0.46.0-preview.2; ensures transition messaging isn't hidden after 5 views. | Closed |
| [#27572](https://github.com/google-gemini/gemini-cli/pull/27572) | fix(cli): handle tmux false positive background detection | Resolves theme-switching bugs when running inside tmux/mosh on light terminals. | Open |
| [#27695](https://github.com/google-gemini/gemini-cli/pull/27695) / [#27694](https://github.com/google-gemini/gemini-cli/pull/27694) | Deduplicate home-directory agent loading | Two related fixes stopping duplicate agent warnings when the project and user agent directories resolve to the same path (e.g., `~`). | #27695 closed, #27694 open |
| [#27678](https://github.com/google-gemini/gemini-cli/pull/27678) | fix(core): hide ignored folders from session context | Keeps `.gitignore` / `.geminiignore` excluded directories out of the initial session tree, reducing context noise. | Open |

---

## 5. Feature Request Trends

- **AST-aware tooling for code navigation** — Multiple issues (#22745, #22746, #22747) explore structured parsing to replace fuzzy text search and imprecise file reads, with `ast-grep`, `tilth`, and `glyph` mentioned as candidates.
- **Smarter subagent orchestration** — Requests for better skill/sub-agent utilization (#21968), local subagent sprint work (#20195), and remote agent auth/background operations (#20303) show sustained investment in multi-agent workflows.
- **Self-aware agent behavior** — #21432 asks the CLI to accurately explain its own flags, hotkeys, and invocation patterns, reflecting a maturing UX need.
- **Zero-dependency sandboxing** — #19873 proposes a security model that lets Gemini 3 lean into native bash without expanding the trust surface.

---

## 6. Developer Pain Points

- **Subagent reliability** — Hangs (#21409), incorrect success reporting (#22323), ignored settings (#22267), and unwanted autonomous invocation (#22093) are the dominant frustration cluster. Users are actively disabling subagents to stay productive.
- **Shell execution UX** — Commands falsely appearing to await input (#25166) and terminal rendering glitches in tmux (#27572) or after external editors (#24935) erode trust in the CLI's core loop.
- **Quota and retry handling** — Zero-quota scenarios causing hangs (#27698) and Auto Memory reprocessing low-signal sessions (#26522) point to poor failure-mode UX around API limits and background jobs.
- **Security hygiene in memory/logging** — Deterministic redaction (#26525) and invalid patch handling (#26523) highlight concerns about sensitive data reaching models or logs.
- **Tooling scale limits** — #24246 reports 400 errors when >128 tools are registered, indicating the agent needs smarter tool scoping as the ecosystem grows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-06

---

## 1. Today's Highlights

GitHub shipped **Copilot CLI v1.0.60** with critical fixes for terminal multiplexers and Anthropic reasoning controls, while the community surfaced severe regressions including a **WSL2 CPU spin bug** and **MCP server process leaks** that degrade system stability. Windows ARM64 users report fatal crashes under load, and the permissions/configuration area remains the most active source of friction.

---

## 2. Releases

### [v1.0.60](https://github.com/github/copilot-cli/releases/tag/v1.0.60) (2026-06-05)

| Change | Impact |
|--------|--------|
| Tab completes `..` parent traversal in slash-command path arguments | Fixes accidental tab-switching during path navigation |
| Max reasoning effort level for Anthropic models; all effort levels available on every plan | Removes plan-gating for reasoning depth |
| Blank screen after sleep/wake in terminal multiplexers fixed | Critical fix for tmux/screen users |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2101](https://github.com/github/copilot-cli/issues/2101) | Transient API errors → rate limit cascade (27 comments, 17 👍) | **Most-engaged open issue**; users hitting opaque retry loops that terminate in hard rate limits. Suggests resilience gap in request backoff. | High frustration; requests for retry transparency |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | Bring back `no-alt-screen` (28 👍) | **Top-voted feature request**; alt-screen breaks scrollback, find-in-terminal, and copy workflows. Users consider this a regression in terminal ergonomics. | Strong consensus; "so much worse for usability" |
| [#3700](https://github.com/github/copilot-cli/issues/3700) | WSL2: 215% CPU spin, frozen TUI (High severity, regression of #2208) | **Critical regression** in v1.0.60; reproducible on clean boot, renders CLI unusable. Regression tag implies prior fix was reverted or incomplete. | 1 👍, but severity label signals urgency |
| [#3687](https://github.com/github/copilot-cli/issues/3687) | Windows ARM64 fatal abort (BEX64 / 0xc0000409) | Hard crashes under memory pressure/session restore; graceful degradation failure. Affects Windows on ARM adoption. | New, zero votes but severe crash signature |
| [#3698](https://github.com/github/copilot-cli/issues/3698) | MCP stdio server connect leak: unbounded child processes | **Resource exhaustion bug**; stuck MCP servers spawn indefinitely, pinning CPU. Production stability risk for MCP-dependent workflows. | Fresh, no votes yet—operational criticality |
| [#3701](https://github.com/github/copilot-cli/issues/3701) | Runaway MCP server spawning (IDE lock-file watcher loop) | Related to #3698 but distinct trigger: VS Code workspace integration causes re-init loops. Suggests MCP lifecycle management is systemically broken. | Fresh, IDE integration context |
| [#2398](https://github.com/github/copilot-cli/issues/2398) | Default config file for permissions (10 👍) | Permissions setup is session-scoped, forcing repetitive configuration. Users want declarative, repo-level or user-level defaults. | Clear feature gap; security/UX tension |
| [#3563](https://github.com/github/copilot-cli/issues/3563) | Tool approvals silently lost in parallel sessions | Race condition in `~/.copilot/permissions-config.json`; parallel workflows corrupt state. Data loss in security-critical path. | Microsoft employee reported; internal awareness |
| [#3547](https://github.com/github/copilot-cli/issues/3547) | Background sub-agent hangs at `total_turns=0` with `gpt-5.5` | Agent orchestration deadlock; background tasks never progress. Blocks agent-dependent automation. | Fresh model-specific bug |
| [#3697](https://github.com/github/copilot-cli/issues/3697) | Disable repository hooks to reduce config-injection risk (2 👍) | Security feature request citing [Miasma worm](https://safedep.io/blog/miasma); supply-chain attack surface via auto-run hooks. | Emerging security concern |

---

## 4. Key PR Progress

*Note: Only 2 PRs updated in the last 24h; both appear non-substantive.*

| # | PR | Assessment |
|---|-----|-----------|
| [#3651](https://github.com/github/copilot-cli/pull/3651) | Create xcopilotcli | No description; appears to be personal fork/experiment. **Not actionable for upstream.** |
| [#3473](https://github.com/github/copilot-cli/pull/3473) | Update project name in README | Spam/phishing content (TEMU/GCash referral link). **Should be reported/closed.** |

**Observation:** No meaningful external PR activity. Core development appears internally driven; community contribution pipeline is stalled or closed.

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Terminal-native ergonomics** | #2334 (alt-screen), #2344/#2998/#3693 (copy/paste/keyboard) | Users want Copilot CLI to respect standard terminal conventions, not override them |
| **Declarative configuration** | #2398 (permissions defaults), #3688 (agent/skill path consistency) | Shift from interactive/session-state to file-based, versionable config |
| **Security hardening** | #3697 (disable hooks), #3684 (subagent permission context), #3563 (parallel state safety) | Supply-chain awareness; least-privilege demands |
| **Agent observability & reliability** | #3547 (hung agents), #3684 (permission context), #3415 (session naming) | Background/sub-agent execution needs better debugging surface |
| **Cross-platform parity** | #3690 (linux-arm64 voice), #3696 (Alpine/musl auto-update), #3687 (Windows ARM64 crashes) | ARM64 and musl are underserved; auto-update platform detection is brittle |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Clipboard/keyboard interaction broken** | Recurring, multi-issue | High | #2344, #2998, #3693 — "standard behavior for lots of people using terminal" |
| **MCP server lifecycle chaos** | 2 critical bugs in 24h | Critical | #3698, #3701 — process leaks, CPU exhaustion, IDE integration loops |
| **Windows stability regressions** | Per-release pattern | Critical | #3700 (WSL2 CPU), #3687 (ARM64 crash) — "regression of #2208" suggests fix validation gap |
| **Permissions as friction point** | 4+ issues | Medium-High | #2398, #3563, #3684, #3699 — session-scoped approvals, race conditions, non-interactive gaps |
| **Alt-screen breaking terminal workflows** | Sustained, top-voted | High | #2334 — scrollbar, find, history access all blocked |
| **Rate limiting & resilience** | Long-running | Medium | #2101 — opaque retry behavior, hard limits disrupt flow |

---

*Digest compiled from github.com/github/copilot-cli public activity 2026-06-05 to 2026-06-06.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-06

## 1. Today's Highlights

The Kimi CLI project has officially begun its transition to the next-generation **Kimi Code CLI** successor, with v1.47.0 releasing migration tooling including an `/upgrade` command for seamless config/session transfer. The repository has been renamed from "Kimi Code CLI" back to "Kimi CLI" to avoid naming collision with the new standalone binary. Meanwhile, community contributions continue addressing edge cases in MCP error handling, terminal UX on Linux, and agent loop architecture.

---

## 2. Releases

### v1.47.0 — Migration & Polish Release
**Full Changelog:** [v1.47.0 Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.47.0)

| Change | Author | PR |
|--------|--------|-----|
| **Tool error rendering**: Trailing output now included in error briefs; briefs render as plain text instead of markdown | @liruifengv | [#2389](https://github.com/MoonshotAI/kimi-cli/pull/2389) |
| **Documentation rename**: Project rebranded to "Kimi CLI" with clear successor link to `MoonshotAI/kimi-code` | @RealKai42 | [#2431](https://github.com/MoonshotAI/kimi-cli/pull/2431) |

**Migration tooling** (shipped via [#2432](https://github.com/MoonshotAI/kimi-cli/pull/2432), [#2433](https://github.com/MoonshotAI/kimi-cli/pull/2433)):
- New `/upgrade` command installs standalone Kimi Code CLI with automatic config + session migration
- Welcome-screen nudge and help-text references guide users without forced prompts or sunset countdowns

---

## 3. Hot Issues

> *Note: Only 1 issue updated in the last 24h. Digest covers this single item with context.*

| # | Status | Title | Author | Why It Matters |
|---|--------|-------|--------|--------------|
| [#2430](https://github.com/MoonshotAI/kimi-cli/issues/2430) | **CLOSED** | [bug] auto logged out in the middle of a task | [TheKevinWang](https://github.com/TheKevinWang) | **Session stability regression** — User on Windows 10 + kimi-k2.6 reported mid-task authentication drops, breaking long-running agent workflows. Zero community engagement (no comments, no upvotes) suggests either isolated incident or users migrating to successor. Closed without visible resolution; may indicate wontfix as focus shifts to Kimi Code CLI. |

**Pattern observation**: Single issue volume indicates either (a) project maturity with low bug velocity, or (b) community attention migrating to `MoonshotAI/kimi-code` repository.

---

## 4. Key PR Progress

| # | Status | Title | Author | Feature / Fix | Technical Significance |
|---|--------|-------|--------|-------------|------------------------|
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | **CLOSED** | feat(soul): RalphFlow architecture with ephemeral context and convergence detection | [ORDL-AMF](https://github.com/ORDL-AMF) | **Agent loop architecture** | Introduces isolated iteration contexts and convergence detection to prevent infinite loops in multi-step workflows. Major agentic systems contribution—closure without merge may indicate architectural divergence with successor project. |
| [#2434](https://github.com/MoonshotAI/kimi-cli/pull/2434) | **OPEN** | fix: suppress MCP connection errors and handle LLM double-serialization | [wintrover](https://github.com/wintrover) | **MCP reliability** | Three-part fix: (1) event-loop cleanup for dropped MCP servers (Notion, code-index), (2) prevents crash reporter from surfacing internal connection teardowns as user-facing errors, (3) resolves LLM output double-serialization. Critical for production MCP tool usage at scale. |
| [#2429](https://github.com/MoonshotAI/kimi-cli/pull/2429) | **OPEN** | fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals | [GH-ytym](https://github.com/GH-ytym) | **Terminal UX** | Resolves [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422): cursor blink events (~1Hz) steal scroll position, making history unreadable. Root cause likely in TUI renderer's cursor position management without viewport lock. Linux-specific; affects productivity on long outputs. |
| [#2433](https://github.com/MoonshotAI/kimi-cli/pull/2433) | **CLOSED** | chore(release): bump kimi-cli to 1.47.0 | [RealKai42](https://github.com/RealKai42) | **Release engineering** | Version bump with synced `kimi-code` wrapper. Standard maintenance. |
| [#2432](https://github.com/MoonshotAI/kimi-cli/pull/2432) | **CLOSED** | feat(shell): guide users to upgrade to the new Kimi Code | [RealKai42](https://github.com/RealKai42) | **Migration UX** | Non-intrusive upgrade path: `/upgrade` command, welcome nudges, no forced prompts. Demonstrates mature product sunsetting strategy—retains user trust during transition. |
| [#2431](https://github.com/MoonshotAI/kimi-cli/pull/2431) | **CLOSED** | docs: rename project to Kimi CLI and link to Kimi Code CLI successor | [RealKai42](https://github.com/RealKai42) | **Branding clarity** | Prevents repository naming collision. Explicit "legacy" positioning without deprecation language. |

---

## 5. Feature Request Trends

> *Limited new issue volume; trends inferred from PR activity and release direction*

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Successor migration tooling** | [#2432](https://github.com/MoonshotAI/kimi-cli/pull/2432), [#2431](https://github.com/MoonshotAI/kimi-cli/pull/2431), [#2433](https://github.com/MoonshotAI/kimi-cli/pull/2433) | MoonshotAI investing in smooth user transition rather than abrupt deprecation |
| **MCP ecosystem hardening** | [#2434](https://github.com/MoonshotAI/kimi-cli/pull/2434) | Production MCP usage exposing connection lifecycle edge cases; reliability becoming table stakes |
| **Agent loop safety** | [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | Community interest in preventing runaway agent iterations; convergence detection as emerging pattern |
| **Cross-platform terminal fidelity** | [#2429](https://github.com/MoonshotAI/kimi-cli/pull/2429) | Linux terminal behavior (cursor events, scroll semantics) requiring platform-specific handling |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Severity | Source | Mitigation Status |
|------------|---------------------|--------|-----------------|
| **Mid-session authentication drops** | Isolated; high impact when occurs | [#2430](https://github.com/MoonshotAI/kimi-cli/issues/2430) | **Unresolved** — closed without visible fix; may be addressed in successor |
| **MCP server connection churn** | High-frequency in production tool use | [#2434](https://github.com/MoonshotAI/kimi-cli/pull/2434) | **In progress** — open PR with event-loop cleanup fix |
| **Terminal scroll position hijacking** | Linux-specific; moderate frequency | [#2429](https://github.com/MoonshotAI/kimi-cli/pull/2429) | **In progress** — open PR targeting cursor blink events |
| **Migration uncertainty / dual-product confusion** | Emergent; moderate | [#2431](https://github.com/MoonshotAI/kimi-cli/pull/2431), [#2432](https://github.com/MoonshotAI/kimi-cli/pull/2432) | **Addressed** — clear naming, `/upgrade` path, non-intrusive guidance |
| **LLM output serialization quirks** | Production-specific; low frequency | [#2434](https://github.com/MoonshotAI/kimi-cli/pull/2434) | **In progress** — double-serialization fix included in open PR |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-06-05 to 2026-06-06. For the next-generation successor, see [MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-06

## Today's Highlights

OpenCode shipped v1.16.2 with critical reasoning and edit safety fixes, while the community grapples with sandboxing demands (#2242, 51 comments) and Bedrock provider regressions in the v1.16.0 release. Core contributors landed a wave of V2 hardening PRs around binary-safe reads, prompt caching, and process management.

---

## Releases

### [v1.16.2](https://github.com/anomalyco/opencode/releases/tag/v1.16.2) — Patch Release
- **Reasoning summaries** now gate on provider capability, preventing GPT-5 request failures on compatible backends
- **Edit operations** tightened: rejects loose matches that could overwrite wrong code or accidentally replace files
- **Bedrock session hangs** partially addressed (note truncated in release notes)

### [v1.16.0](https://github.com/anomalyco/opencode/releases/tag/v1.16.0) — Minor Release
- Managed workspace cloning preserving dirty/untracked files
- Session mobility between workspaces and directories
- Full OpenAI model support through AWS Bedrock
- Skill discovery and file-based agent loading
- Updated GitHub Copilot integration

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Sandbox the agent** — restrict terminal commands to current directory | Security-critical gap vs. competitors (Gemini CLI, Codex CLI use seatbelt on macOS); enterprise adoption blocker | **51 comments, 51 👍** — highest engagement in dataset; sustained since Aug 2025 |
| [#2047](https://github.com/anomalyco/opencode/issues/2047) | LM Studio model refresh fails after add/remove | Local/self-hosted workflow breakage; auth cycle doesn't clear cache | 15 comments; workaround-seeking |
| [#29992](https://github.com/anomalyco/opencode/issues/29992) | Auto-scroll dies after manual scroll + return to bottom | Core UX friction in streaming-heavy product; recently closed | 13 comments, 15 👍; fix validated |
| [#29808](https://github.com/anomalyco/opencode/issues/29808) | Desktop UI toggles disappear after layout/advanced settings changes | V1.16 UI regression; keyboard shortcuts only recovery path | 11 comments; active troubleshooting |
| [#29059](https://github.com/anomalyco/opencode/issues/29059) | **Dynamic workflows** (Claude Code-style repeatable automation) | Competitive parity request; multi-step automation is emerging standard | 7 comments, **12 👍**; strong feature demand |
| [#30948](https://github.com/anomalyco/opencode/issues/30948) | Bedrock-compatible gateway returns empty output in 1.16.0 | **Regression** from working prior version; breaks non-AWS Bedrock deployments | 7 comments, 4 👍; rapid close suggests hotfix path |
| [#31000](https://github.com/anomalyco/opencode/issues/31000) | Copilot provider constructs non-existent `copilot-api.github.com` domain | Hardcoded URL bug blocks github.com users from model discovery | 6 comments; precise root-cause analysis provided |
| [#20067](https://github.com/anomalyco/opencode/issues/20067) | Multi-user auth and per-user provider credentials for opencode web | Enterprise/shared deployment blocker; security isolation requirement | 5 comments, **12 👍** |
| [#7801](https://github.com/anomalyco/opencode/issues/7801) | Plan Mode + Question tool auto-switch to Build mode | Workflow friction: manual mode switching interrupts flow | 5 comments, **18 👍** — highest feature 👍 count |
| [#12716](https://github.com/anomalyco/opencode/issues/12716) | Doom loop not caught during reasoning/output | Reliability/safety issue; infinite generation burns tokens and time | 8 comments; paired with related bug #25254 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#31043](https://github.com/anomalyco/opencode/pull/31043) | **Bound owned process output drains** — separate child exit from stdout/stderr drain, time-bound Windows process-tree cleanup, propagate drain failures | Prevents zombie/phantom processes (linked to #13001 orphan issue) | Open |
| [#31038](https://github.com/anomalyco/opencode/pull/31038) | **V2 media-aware binary-safe reads** — classify image media before text/binary handling, reject unsupported binary, preserve image tool results across providers | Closes security/robustness gap in file reading | **Merged** |
| [#31039](https://github.com/anomalyco/opencode/pull/31039) | **parentID-based assistant turn check** — replaces brittle lexicographic ID ordering, fixes duplicate generations in multi-process setups | Race condition fix for distributed/session scenarios | Open |
| [#31018](https://github.com/anomalyco/opencode/pull/31018) | **HTTP recorder public beta** — declarative redaction, cassette persistence, binary body handling, secret management | Testing/debugging infrastructure for integrations | Open |
| [#31036](https://github.com/anomalyco/opencode/pull/31036) | **Session-scoped V2 prompt cache** — `promptCacheKey` tied to durable Session ID vs. shared prefix | Cache isolation prevents cross-session pollution | **Merged** |
| [#31003](https://github.com/anomalyco/opencode/pull/31003) | **Recover V2 context overflow** — forced compaction when provider rejects despite local preflight | Reliability for long-context workflows | **Merged** |
| [#31034](https://github.com/anomalyco/opencode/pull/31034) | **Desktop V2 tab architecture experiment** — navigation records over stable session host, explicit ownership scoping | Major UI architecture refactor | Open |
| [#29126](https://github.com/anomalyco/opencode/pull/29126) | **Prune messages on prompt submit** (not mid-stream) + upstream sticky-scroll fix | Streaming UX stability; depends on opentui 0.2.16 | Open |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | **Local LAN provider discovery** — mDNS + broadcast discovery, auto-detect models for OpenAI-compatible servers | Self-hosted/local AI workflow enablement | Open |
| [#11303](https://github.com/anomalyco/opencode/pull/11303) | **ACP client exposes input/output properly** — fixes Zed integration rendering, replaces opaque `tool_call` execution | IDE ecosystem interoperability | Open |

---

## Feature Request Trends

1. **Security & Sandboxing** — Explicit containment for agent file system and terminal access (#2242, seatbelt parity). Enterprise-ready isolation is the dominant unmet need.

2. **Workflow Automation** — Project-local, repeatable multi-step automation ("Dynamic workflows" #29059, Plan→Build auto-switch #7801). Users want Claude Code-style composability, not just chat.

3. **Enterprise Multi-Tenancy** — Per-user credentials and auth isolation for shared web deployments (#20067). Team/organization features lagging individual developer experience.

4. **Provider Robustness** — Better gateway compatibility (Bedrock-compatible endpoints #30948), local server discovery (#27554), and model refresh reliability (#2047). The "it works with curl but not opencode" pattern repeats.

5. **Desktop UI Polish** — Settings persistence, toggle visibility (#29808), OS integration (#29875), and scroll behavior (#29992). V1.16 layout changes introduced regressions.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Agent safety & containment** | #2242 (51 comments, 51 👍), #12716/#25254 (doom loops), #30985 (Git init failures from bulk downloads) | 🔴 Critical — blocks trust and enterprise use |
| **Provider integration fragility** | #30948 (Bedrock gateway empty output), #31000 (Copilot wrong domain), #30993 (GPT 5.4/5.5 Bedrock config), #2047 (LM Studio cache) | 🔴 High — each release risks breaking existing configs |
| **Process/resource management** | #13001 (orphaned processes, ~500MB each), #26416 (idle CPU), #31043 (drain bounds) | 🟡 Medium — operational overhead for long-running use |
| **Context/compression reliability** | #31003 (overflow recovery), #25254 (doom loop detection gaps) | 🟡 Medium — silent failures in long sessions |
| **Desktop/web parity gaps** | #9604 (read-only plan mode needs build button), #29808 (UI regressions), #29799 (WSL session migration) | 🟡 Medium — fragmented experience across platforms |

---

*Digest compiled from github.com/anomalyco/opencode activity through 2026-06-06.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-06

## Today's Highlights

The Pi ecosystem saw intense activity around agent reliability and extensibility, with a critical fix landing for the infamous "Cannot continue from message role: assistant" crash that has plagued long-running sessions. Meanwhile, the community is pushing hard on multi-agent orchestration, with two competing PRs for native subagents and a new workflow extension system entering the merge queue.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` hangs on "Working..." with zero-usage aborted turns | Most-discussed open issue (53 comments). Affects GPT-5.5/Codex users with complete TUI freezes requiring Escape to abort. Impacts daily productivity for OpenAI-powered workflows. | 28 upvotes; active debugging with "possibly-openclaw-clanker" tag suggesting core renderer involvement |
| [#5420](https://github.com/earendil-works/pi/issues/5420) | Auto-compaction crashes with `Cannot continue from message role: assistant` | Critical session-destroying bug in long contexts (203k+ tokens). Auto-compaction produces invalid message sequences that break continuation. | 3 upvotes; emergent issue with same root cause as #5445 |
| [#5188](https://github.com/earendil-works/pi/issues/5188) | `shift+enter` submits instead of creating new line | Keybinding regression breaking muscle memory for power users. `ctrl+j` workaround exists but non-obvious. | 2 upvotes; configuration-specific, suggesting parser precedence bug |
| [#2023](https://github.com/earendil-works/pi/issues/2023) | Add `pi.runWhenIdle()` for post-settlement scheduling | Long-standing extension API gap. Current `sendUserMessage` hack in reload-runtime example is race-prone. | 5 upvotes; "inprogress" since March, indicating design complexity |
| [#3715](https://github.com/earendil-works/pi/issues/3715) | `local-llm` streams terminate at 5 min from undici `bodyTimeout` | Local LLM users (vLLM, etc.) hit hardcoded undici cap despite `timeoutMs` config. Closed as weekend fix but pattern suggests deeper timeout architecture issues. | 3 upvotes; workaround requires undici-level override |
| [#5384](https://github.com/earendil-works/pi/issues/5384) | DeepSeek via OpenRouter still sends `role: "developer"` after #1048 | Provider compatibility detection is URL/model-id brittle. Proxy users broken by direct-API-only fix. | Reported with precise `detectCompat` analysis; closed quickly |
| [#5416](https://github.com/earendil-works/pi/issues/5416) | `sanitizeSurrogates()` invalidates Anthropic signature | Security/integrity bug: content mutation breaks cryptographic verification of thinking blocks. | 0 upvotes but high severity; niche Anthropic feature |
| [#5389](https://github.com/earendil-works/pi/issues/5389) | macOS Speech-to-Text freezes TUI during workload | Accessibility integration conflict with renderer. STT input races with active agent output. | 0 upvotes; "possibly-openclaw-clanker" tag |
| [#5419](https://github.com/earendil-works/pi/issues/5419) | `cd` in bash tool doesn't persist across calls | Fundamental shell session isolation misunderstanding by agent. Breaks multi-step project initialization. | 0 upvotes; common novice trap, indicates need for better cwd state management |
| [#5431](https://github.com/earendil-works/pi/issues/5431) | DeepSeek API key not persisted despite save confirmation | Auth storage regression. Save succeeds, restart fails. Suggests config loading priority bug. | 0 upvotes; blocking basic onboarding |

---

## Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#5437](https://github.com/earendil-works/pi/pull/5437) | Neutralize `SUMMARIZATION_SYSTEM_PROMPT` for non-coding agents | Removes hardcoded "AI coding assistant" bias from compaction, enabling general-purpose agents | **Merged** |
| [#5435](https://github.com/earendil-works/pi/pull/5435) | Validate LLM messages after extension transforms | Catches invalid sequences (e.g., orphaned `toolResult`) before provider rejection; improves error clarity for extension authors | **Merged** |
| [#5434](https://github.com/earendil-works/pi/pull/5434) | Tolerate extraneous keys in `edits[]` | Robustness fix for noisy/weak models that hallucinate extra fields in edit tool calls; drops `additionalProperties: false` | **Merged** |
| [#5429](https://github.com/earendil-works/pi/pull/5429) | Fix `models.json` migration error path | UX improvement: reports parse errors with resolved file path instead of raw stack trace | **Merged** |
| [#5439](https://github.com/earendil-works/pi/pull/5439) | Export coding-agent package path helpers | Exposes `getPackageDir()`, `getReadmePath()`, etc. for extension authors building on coding-agent | **Merged** |
| [#5426](https://github.com/earendil-works/pi/pull/5426) | Workflow extension for multi-agent orchestration | Major feature: `workflow-core` library + `\run_workflow` tool with context firewall for subagent isolation | **Merged** |
| [#5441](https://github.com/earendil-works/pi/pull/5441) / [#5440](https://github.com/earendil-works/pi/pull/5440) | Codex/native subagents | Two duplicate PRs suggesting internal coordination issue; likely OpenAI Codex integration for native subagent spawning | **Closed** (duplicates) |
| [#5442](https://github.com/earendil-works/pi/pull/5442) | `@pi-mono/self-evolver` — 5D gene/genome equivalent | Experimental: treats 5D memory system as evolutionary genome for self-modifying agents | **Closed** (speculative) |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | Anthropic Vertex provider | Adds Google Cloud Vertex AI adapter for Claude; thin wrapper reusing existing Anthropic streaming path | **Open**, awaiting review |
| [#5332](https://github.com/earendil-works/pi/pull/5332) | Approval system for workspaces | Security feature: interactive approval for `.pi` and `.pi.user` extension directories on first load | **Open**, "inprogress" |
| [#5385](https://github.com/earendil-works/pi/pull/5385) | Detect first-run terminal theme | UX polish: auto-detect light/dark terminal via OSC query, persist to settings | **Open**, "inprogress" |

---

## Feature Request Trends

1. **Multi-agent orchestration** — Strongest signal: workflow extension (#5426), duplicate Codex subagent PRs (#5440/#5441), and `pi-ensemble` extension patterns all point to demand for first-class subagent spawning with context isolation.

2. **WebSocket transport expansion** — Requests for WebSocket in `openai-responses` (#3442, closed) and general OpenAI API endpoint (#5446, closed) indicate streaming reliability concerns, especially for long-running reasoning models.

3. **Extension API maturation** — `runWhenIdle` (#2023), `waitForIdle`/`reload` exposure (#5443, merged), and path helper exports (#5439) show ecosystem growth pains as extensions need deeper lifecycle hooks.

4. **Non-coding agent support** — #5437's merge and neutral prompt requests signal user base expanding beyond software engineering use cases.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Session continuity crashes** | #5420, #5445, #4945 all involve broken `continue()` after compaction/retry/abort | **Critical** — data loss in long sessions |
| **Keybinding regressions** | #5188 (shift+enter), prior art in #4180 (links broken) | **High** — daily friction for power users |
| **Timeout architecture** | #3715 (undici 5-min cap), #4945 (hang with no timeout) | **High** — local LLM and slow-reasoning model users blocked |
| **Provider compatibility whack-a-mole** | #5384 (DeepSeek via proxy), #5416 (Anthropic signatures) | **Medium** — each fix is provider-specific, not systematic |
| **Extension auth/config lifecycle** | #5431 (key not persisted), #5433 (OAuth UI mirroring), #5409 (model default not persisted) | **Medium** — state management inconsistencies across sessions |
| **TUI renderer fragility** | #5422 (width crash), #5389 (STT freeze), "possibly-openclaw-clanker" tag proliferation | **Medium** — terminal environment assumptions too brittle |

---

*Digest compiled from [earendil-works/pi](https://github.com/earendil-works/pi) activity. For real-time updates, watch the [repository](https://github.com/earendil-works/pi).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-06

## 1. Today's Highlights

The v0.17.1 nightly build landed with a critical CLI fix for thought-part handling in copy output, while the community aggressively tackled memory stability with multiple OOM-related fixes in flight. The daemon/ACP mode ecosystem saw substantial expansion with session forking, workspace service extraction, and 13 previously unsupported slash commands now enabled for web-shell.

---

## 2. Releases

**[v0.17.1-nightly.20260605.715266537](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260605.715266537)**

Patch release with two changes:
- **Chore**: Automated release pipeline update ([PR #4742](https://github.com/QwenLM/qwen-code/pull/4742))
- **Fix**: CLI now skips thought/reasoning parts when copying output to clipboard, preventing leakage of internal chain-of-thought into user-facing content ([commit](https://github.com/QwenLM/qwen-code/commit/))

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#4815](https://github.com/QwenLM/qwen-code/issues/4815)** | **Severe OOM with `qwen --resume` + broken Escape key** | P1 bug combining memory exhaustion with complete UI unresponsibility; makes session recovery unusable for long-running tasks | 2 comments, 100% reproducible report from `zzhenyao` |
| **[#4801](https://github.com/QwenLM/qwen-code/issues/4801)** | **Dedicated `web_search` tool request** | Core gap in tool ecosystem—current `web_fetch` requires model to guess URLs rather than perform actual search; blocks research-heavy workflows | 3 comments, strong use-case articulation |
| **[#4777](https://github.com/QwenLM/qwen-code/issues/4777)** | **Deferred-tools bust prompt cache on MCP discovery** | Performance regression in MCP integration: every tool reveal invalidates cached system prompt, causing token/cost explosion | 2 comments, detailed root-cause analysis by `qqqys` |
| **[#4813](https://github.com/QwenLM/qwen-code/issues/4813)** | **Shared `baseUrl` cannot be set once for multiple models** | Configuration DX pain: local vLLM/Ollama users must duplicate endpoint config N times; scales poorly with model proliferation | 1 comment, clean repro with JSON |
| **[#4514](https://github.com/QwenLM/qwen-code/issues/4514)** | **Daemon capability gaps tracking (post v0.16-alpha)** | Meta-issue for `qwen serve` HTTP/SSE surface completeness; defines prioritized backlog for remote/headless usage | 12 comments, actively maintained by `doudouOUC` |
| **[#4802](https://github.com/QwenLM/qwen-code/issues/4802)** | **`qwen3.7-plus` multimodal support missing** | Model capability mismatch: Plus variants support image/video but modality detection regex falls through to text-only | 2 comments, `welcome-pr` label applied |
| **[#4814](https://github.com/QwenLM/qwen-code/issues/4814)** | **Custom Provider model addition UX is painful** | Onboarding friction: users must manually construct JSON schemas instead of wizard-driven configuration | 1 comment, comparative analysis with Third-party flow |
| **[#4794](https://github.com/QwenLM/qwen-code/issues/4794)** | **Compact mode tool merge causes full-screen flash** | TUI rendering bug: array shrinkage on merge triggers Ink `<Static>` remount, visible flicker every tool batch | 1 comment, precise code pointer provided |
| **[#4748](https://github.com/QwenLM/qwen-code/issues/4748)** | **Daemon cold start latency: 2.5s → ~1.5s target** | Performance benchmark with clear metrics; daemon startup is 3.5× slower than CLI init, hurting scripting use cases | 1 comment, includes test file reference |
| **[#3384](https://github.com/QwenLM/qwen-code/issues/3384)** | **Unable to add OpenAI-compatible local LLM** | Long-running configuration support issue (13 comments); represents ongoing friction for self-hosted model integration | 13 comments, 1 👍, active since April |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| **[#4811](https://github.com/QwenLM/qwen-code/pull/4811)** | Enable `/remember`, `/forget`, `/dream` in ACP mode | Closes 13-command gap for web-shell; adds `supportedModes: ['interactive', 'acp']` and error handling | Open |
| **[#4812](https://github.com/QwenLM/qwen-code/pull/4812)** | `POST /session/:id/branch` for session forking | HTTP-native session branching without history replay; 409 guard on active prompts | Open |
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** | Extract `DaemonWorkspaceService` from `AcpSessionBridge` | Architectural refactor: separates session concerns from workspace ops (status, init, tool-toggle, MCP-restart) | Open |
| **[#4793](https://github.com/QwenLM/qwen-code/pull/4793)** | Coerce non-string tool params for self-hosted LLMs | Compatibility fix for LMStudio/vLLM/sglang returning numbers/booleans where strings expected | Open |
| **[#4803](https://github.com/QwenLM/qwen-code/pull/4803)** | Multimodal support for `qwen3.7-plus` | Implements Plus=multimodal, Max=text-only convention in modality detection | Open |
| **[#4795](https://github.com/QwenLM/qwen-code/pull/4795)** | Skip cross-group tool merge in `<Static>` mode | Eliminates compact-mode flash by preserving array stability for Ink rendering | Open |
| **[#4810](https://github.com/QwenLM/qwen-code/pull/4810)** | Isolate OpenAI SDK abort listener leak | Memory stability: per-request child controllers prevent signal listener accumulation | Open |
| **[#4760](https://github.com/QwenLM/qwen-code/pull/4760)** | Fix background auto-update breaking cross-authType switching | Race condition: `npm install -g` mutates `chunks/` while dynamic imports in flight | Open |
| **[#4677](https://github.com/QwenLM/qwen-code/pull/4677)** | Vim mode Esc leak, Enter submit, render lag fixes | Comprehensive VIM overhaul: NORMAL mode commands, key event isolation, buffer management | Open |
| **[#4647](https://github.com/QwenLM/qwen-code/pull/4647)** | Platform-native clipboard tools on Linux | Replaces native module with `wl-paste`/`xclip` for WSL2+Wayland compatibility | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Web search as first-class tool** | #4801, #4514 (daemon search capabilities) | High — explicit gap vs. competitors |
| **Desktop companion / pixel-art skills** | #4807, #4808, #4806 (closed as duplicate) | Moderate — whimsical but well-specified |
| **Session management primitives** | #4812 (forking), #4514 (daemon gaps), #4815 (resume OOM) | High — enterprise/remote usage driver |
| **Model provider UX simplification** | #4814, #4813, #3384 | High — onboarding friction consistently reported |
| **Multimodal parity with model capabilities** | #4802, #4803 | Moderate — naming convention confusion indicates docs gap |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues | Severity |
|------------|-----------|----------------------|----------|
| **OOM / Memory instability** | Chronic | #4815, #4167, #3326, #2562, #2223, #1031, #604, #546 | 🔴 Critical — GC crashes across versions, Node.js runtime limits |
| **Configuration verbosity for local/self-hosted models** | High | #3384, #4813, #4814 | 🟡 High — JSON duplication, schema construction burden |
| **Daemon/ACP mode maturity gaps** | High | #4514, #4809, #4811, #4748 | 🟡 High — web-shell command coverage, latency, documentation |
| **TUI rendering glitches** | Moderate | #4794, #4795, #4677, #2982 | 🟡 High — Ink/React terminal complexity, cross-platform edge cases |
| **MCP/prompt cache invalidation** | Emerging | #4777 | 🟢 Moderate — cost/performance impact, architectural fix needed |
| **CI/stale merge safety** | Low but sharp | #4805 | 🟢 Moderate — infrastructure risk |

---

*Digest compiled from 25 issues and 50 PRs updated 2026-06-05 to 2026-06-06.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-06

## Today's Highlights

The v0.9.0 release train is accelerating with two major stabilization PRs merged (#2804 subagent branch surfacing, #2806 sidebar progress fixes) and the provider fallback chain finally landing in PR #2773 after active community demand. Meanwhile, the project officially rebranded to "CodeWhale" in URLs while retaining the DeepSeek TUI legacy name, creating some documentation inconsistency that contributors are actively patching.

---

## Releases

*No new releases in the last 24 hours.* The v0.8.53 release remains current; v0.9.0 is in active stewardship integration via PR #2762 without a targeted release date.

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|------------------|
| [#2766](https://github.com/Hmbown/CodeWhale/issues/2766) | UI refactor needed | 🟢 OPEN | Core UX complaint: output copyability and modal interference are daily friction points for terminal power users | 8 comments in 24h, no upvotes—suggests silent agreement rather than controversy |
| [#2574](https://github.com/Hmbown/CodeWhale/issues/2574) | Provider fallback chain — auto-switch on API failure | 🟢 OPEN | Addresses single-provider fragility; critical for production reliability when quotas or outages strike | 3 comments, now has implementing PR #2773; Chinese-language proposal shows global user base |
| [#2621](https://github.com/Hmbown/CodeWhale/issues/2621) | Support Xiaomi MiMo Token Plan API Endpoint | 🟢 OPEN | Xiaomi's subscription pricing diverges from pay-as-you-go; missing this blocks enterprise MiMo adoption | 4 comments, author provided detailed tier breakdown |
| [#2625](https://github.com/Hmbown/CodeWhale/issues/2625) | Port to HarmonyOS | 🟢 OPEN | Strategic platform expansion for China's domestic OS ecosystem; blocked on `nix` crate compatibility | 3 comments, active PR #2634 with partial progress |
| [#2739](https://github.com/Hmbown/CodeWhale/issues/2739) | Task execution hangs with session loss on resume | 🟢 OPEN | Data loss bug: long-running tasks deadlock, `--continue` loses context; reported as "unbearable" by user | 2 comments, regression from v0.8.51; 300s timeout fix in v0.8.52 insufficient |
| [#2721](https://github.com/Hmbown/CodeWhale/issues/2721) | v0.9.0 Stabilization gate: Windows, large-repo, subagent, live-state blockers | 🟢 OPEN | Maintainer-declared release blocker ensuring v0.9.0 doesn't ship with known correctness bugs | 1 comment, structured triage approach |
| [#1874](https://github.com/Hmbown/CodeWhale/issues/1874) | Configurable OpenAI endpoint path (`/v1/chat/completions` vs `/chat/completions`) | 🔴 CLOSED | Third-party API compatibility; hardcoded path breaks non-standard providers | Resolved via closure, 4 comments |
| [#2754](https://github.com/Hmbown/CodeWhale/issues/2754) | Kimi K2.6 auth failure locks IDE, can't switch back | 🔴 CLOSED | Critical failure mode: provider misconfiguration bricks the entire interface | 2 comments, severity warranted faster closure |
| [#2744](https://github.com/Hmbown/CodeWhale/issues/2744) | MCP tool name parsing breaks on underscores | 🔴 CLOSED | `split_once('_')` bug in `McpPool::parse_prefixed_name` breaks valid server naming conventions | 3 comments, clean technical report with repro steps |
| [#2758](https://github.com/Hmbown/CodeWhale/issues/2758) | Sessions footer shows wrong resume command | 🔴 CLOSED | CLI UX papercut: `--resume` vs `resume` causes user confusion | 2 comments, quick doc fix |

---

## Key PR Progress

| # | Title | Status | Feature / Fix |
|---|-------|--------|-------------|
| [#2773](https://github.com/Hmbown/CodeWhale/pull/2773) | Complete provider fallback chain | 🟢 OPEN | Implements #2574: automatic provider failover on 429/5xx/timeout via `fallback_providers` TOML array |
| [#2762](https://github.com/Hmbown/CodeWhale/pull/2762) | v0.9.0 stewardship integration | 🟢 OPEN | Integration branch coordinating harvest PRs; explicitly excludes release actions to avoid premature shipping |
| [#2753](https://github.com/Hmbown/CodeWhale/pull/2753) | Multi-tab system with cross-tab collaboration | 🟢 OPEN | `TabManager` with persisted history, `TaskDelegator` for cross-tab work, `Ctrl+`` switcher—major UX expansion |
| [#2520](https://github.com/Hmbown/CodeWhale/pull/2520) | Cross-session prompt base section disk cache | 🟢 OPEN | SHA-256 keyed disk cache for immutable system prompt segments; reduces session startup latency |
| [#2782](https://github.com/Hmbown/CodeWhale/pull/2782) | `/hf` command with MCP detection, Hub search, docs | 🔴 CLOSED | Full Hugging Face integration: `mcp status/setup`, model search, dataset/model/repo commands; closes #2709 |
| [#2805](https://github.com/Hmbown/CodeWhale/pull/2805) | Harvest deterministic response cache from #2501 | 🔴 CLOSED | Narrows #2501 to safe subset: `temperature: 0.0`, tool-free, non-streaming requests only; key includes API-key fingerprint |
| [#2804](https://github.com/Hmbown/CodeWhale/pull/2804) | Surface subagent branch status | 🔴 CLOSED | Fixes stale parent workspace display; adds git branch metadata to subagent snapshots and sidebar |
| [#2803](https://github.com/Hmbown/CodeWhale/pull/2803) | Harvest pausable custom command MVP from #2732 | 🔴 CLOSED | Minimal pause/resume for custom slash commands with `pausable: true` frontmatter; engine gate before tool execution |
| [#2806](https://github.com/Hmbown/CodeWhale/pull/2806) | Keep agent progress visible in sidebar | 🔴 CLOSED | Reorders Agents sidebar rows: active progress precedes branch/duration metadata, fixes macOS CI snapshot truncation |
| [#2781](https://github.com/Hmbown/CodeWhale/pull/2781) | Ghost-text follow-up prompt suggestion | 🟢 OPEN | Post-turn v4-flash call generates dimmed suggestion; Tab to accept, type to dismiss; mirrors Claude Code behavior |

---

## Feature Request Trends

1. **IDE Integration Beyond TUI** — Three separate requests (#1264 VSCode plugin, #2580 VSCode Agent View native adaptation, #2086 contribution workflow) signal terminal-only is a growth ceiling for coding workflows.

2. **Provider Ecosystem Breadth** — MiMo Token Plan (#2621), custom search endpoints (#2436), configurable OpenAI paths (#1874), and fallback chains (#2574) all point to users treating CodeWhale as a universal LLM router, not DeepSeek-specific.

3. **Platform Expansion** — HarmonyOS port (#2625) and Windows stabilization (#2721) show demand beyond Linux/macOS core.

4. **Project-Local Configuration** — `.codewhale/mcp.json` auto-merge (#2749) and workspace-scoped tooling indicate team/enterprise usage patterns.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Session reliability / data loss** | #2739 (hangs + `--continue` loses context), #2365 (stream timeout kills slow local LLM) | 🔴 Critical |
| **Multi-provider configuration fragility** | #2754 (Kimi auth locks IDE), #2665 (generic auth errors hide provider/endpoint), #2735 (MiMo endpoint drift) | 🔴 Critical |
| **Terminal UI limitations** | #2766 (copy/output friction), #2694 (sidebar truncation), #2580 (TUI inadequate for coding) | 🟡 High |
| **MCP tooling maturity** | #2744 (underscore parsing), #2787 (status bar count errors), #2749 (project-level config gap) | 🟡 High |
| **Release process brittleness** | #2643 (Cargo/npm publish recovery ad-hoc), #2722 (stale PR accumulation) | 🟢 Medium |
| **Command dispatch maintainability** | #2791 (200-line `match` block in `commands/mod.rs`) | 🟢 Medium |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*