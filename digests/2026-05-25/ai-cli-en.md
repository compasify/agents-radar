# AI CLI Tools Community Digest 2026-05-25

> Generated: 2026-05-25 00:25 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-05-25

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive, feature-dense market with seven actively developed tools vying for developer mindshare. Agent orchestration—hierarchical sub-agents, background task management, and cross-session continuity—has emerged as the defining architectural battleground for 2026, with every major tool showing significant investment in this area. Simultaneously, all projects struggle with production reliability: context window management, session durability, and transparent billing/rate-limiting represent universal failure modes. The ecosystem is bifurcating between "batteries-included" proprietary experiences (Claude Code, Codex, Copilot CLI) and extensible open-core platforms (Pi, OpenCode, Qwen Code, CodeWhale) that prioritize protocol interoperability and self-hosting.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Notes |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50 | 15 | — | Intense issue velocity; billing crisis (#38335) driving sustained engagement |
| **OpenAI Codex** | 50 | 37 | — | Highest PR activity; TUI polish (vim, search) vs. Windows stability crisis |
| **Gemini CLI** | 50 | 27 | — | Balanced dev velocity; internal 🔒 issues suggest Google-scale process |
| **GitHub Copilot CLI** | 24 | 0 | **v1.0.54** | Release-focused; zero PR activity suggests stabilization period or internal branching |
| **Kimi CLI** | 0 | 7 | — | Minimal surface activity; ACP ecosystem investment from external contributor |
| **OpenCode** | 50+ | 10 | — | High issue churn around free-tier limits and provider reliability |
| **Pi** | ~10 | 10 | — | Moderate activity; stability fixes and provider expansion (DashScope) |
| **Qwen Code** | ~6 | 10 | **v0.16.1-nightly** | Structured release chain (F5); Mode B production hardening |
| **CodeWhale** (ex-DeepSeek TUI) | 11 new | 10 | **v0.8.42–44** | Rebrand-driven activity spike; migration uncertainty |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Hierarchical agent orchestration** | Claude Code, Gemini CLI, CodeWhale, OpenCode | Nested sub-agents (Claude #61993), hang recovery (Gemini #21409), "whale-accurate" parallel workers (CodeWhale #2007), background subagents (OpenCode #11865) |
| **Context compaction / transparency** | Codex, Pi, Gemini CLI, OpenCode | Atomic `/rewind` with code state (Codex #11626), compaction metadata in turn headers (Codex #24368), `/compress` ACP command (Gemini #27151), auto-compact loop fix (OpenCode #29150), compaction data loss fix (Pi #4046) |
| **Session continuity & cross-surface sync** | Claude Code, Codex, Gemini CLI, Qwen Code, CodeWhale | CLI-desktop sync (Claude #61969), hidden conversations (Codex #21128), ephemeral mode (Gemini #27365), cross-client SSE sync (Qwen #4484), PEEK continuity layer (CodeWhale #1889) |
| **Pre-execution safety guardrails** | Claude Code, Pi, Qwen Code | Credential-guard plugin (Claude #62099), destructive tool dry-runs (post-#62091), preflight-triage AI review (Qwen #4359) |
| **Non-interactive / CI automation** | Claude Code, Gemini CLI, OpenCode, Pi | `--continue` + `-p` regression (Claude #43013), non-interactive shell hardening (Gemini #27418), non-interactive fragility (OpenCode #26855), RPC backpressure (Pi #4897) |
| **MCP ecosystem maturity** | Claude Code, Copilot CLI, CodeWhale | OAuth propagation to sub-agents (Claude #46228), auth success/failure clarity (Copilot #3269), CR handling in SSE (CodeWhale #2020) |
| **Token/usage transparency** | Claude Code, OpenCode, Qwen Code | Max plan session limits (Claude #38335), free-tier hidden limits (OpenCode #15585), daily token stats (Qwen #4479) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **Primary user** | Enterprise teams, agent-heavy workflows | IDE-centric developers, TUI power users | Google Cloud ecosystem, research | GitHub-centric developers, IDE parity seekers | Cost-conscious, multi-provider | Rust/CLI purists, extensibility-focused | China-market, self-hosting enterprises | DeepSeek API loyalists, Chinese developers |
| **Architecture bet** | MCP-native, GrowthBook-gated features | Local app-server, heavy TUI investment | Subagent delegation, ACP protocol | VS Code feature parity, skills/agents | Effect-based functional core, plugin npm | RPC-first, embeddable agent kernel | Mode B daemon (`qwen serve`), F5 release chain | Whale-themed multi-agent, PEEK continuity |
| **Key strength** | Deepest MCP integration; Opus reasoning | Best-in-class TUX (vim, search, transcripts) | Strongest safety/reliability engineering | Tightest GitHub integration | Most provider-agnostic | Cleanest architecture (Mitsuhiko pedigree) | Most structured production roadmap | Most distinctive agent UX branding |
| **Key weakness** | Billing opacity; dark launch practices | Windows neglect; context management broken | Subagent hangs; skills underutilized | Scrollbar regression vector; config gaps | Free-tier trust erosion; undo broken | Process lifecycle fragility; niche community | Memory instability; token opacity | Rebrand migration chaos; Windows TUI leaks |
| **Openness** | Closed source | Closed source | Closed source | Closed source | Open source (anomalyco) | Open source (earendil-works) | Open source (QwenLM) | Open source (Hmbown) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|:---|:---|:---|
| **🔥 Highest momentum** | Claude Code, OpenAI Codex | Sustained 50-issue days, intense comment velocity (732 on single Claude issue), rapid TUI iteration at Codex. Mature but stressed under scale. |
| **Strong engineering velocity** | Gemini CLI, OpenCode, Qwen Code | Gemini: 27 PRs with P1/P2 discipline; OpenCode: active Effect refactoring; Qwen: structured F5 chain with explicit scope freeze criteria. |
| **Niche but focused** | Pi, CodeWhale | Pi: smaller community, high architectural coherence (Mitsuhiko); CodeWhale: rebrand-driven spike, uncertain if sustainable. |
| **Concerning stagnation** | Kimi CLI, Copilot CLI | Kimi: zero issues, dependency on single external contributor (huntharo) for ACP; Copilot: zero PRs, release-only activity suggests team constraint or internal pivot. |

**Maturity signals**: Claude Code and Codex show "large product" dysfunction—billing crises, platform neglect, feature gate opacity. Gemini CLI and Qwen Code demonstrate more disciplined engineering process. Pi and OpenCode represent cleaner architectural foundations but smaller communities.

---

## 6. Trend Signals

| Trend | Evidence | Developer Implications |
|:---|:---|:---|
| **Agent orchestration as core differentiator** | Every tool investing; hierarchical delegation, background tasks, multi-agent coordination | Developers should evaluate orchestration depth over raw model quality; expect "agent teams" to become table stakes |
| **Context management as universal bottleneck** | Compaction bugs, false "compacted" states, OOM from tool output, silent token burn | Design workflows assuming context limits will be misreported; implement external checkpointing |
| **Protocol interoperability (ACP/MCP) as competitive moat** | Kimi's 4 stacked ACP PRs, Qwen's `/acp` transport, Claude's MCP-native architecture | Bet on tools with protocol completeness; avoid vendor-locked execution environments |
| **Windows as systematic second-class platform** | Codex (6+ failures), CodeWhale (logging leaks), Claude Code (UI deception) | Windows-first teams should bias toward Copilot CLI or web-based alternatives; native CLI TUI stacks show consistent Linux/macOS bias |
| **Transparency as trust prerequisite** | Billing audits (Claude #38335), token visibility (Qwen #4479), free-tier clarity (OpenCode #15585), GrowthBook skepticism (Claude #61637) | Users are organizing around demand for auditable usage; tools without this will face churn |
| **Safety guardrails as reactive necessity** | Repo deletion (Claude #62091), credential scanning (#62099), bash_history truncation (Copilot #2317) | Destructive operations require mandatory dry-runs and version control integration; current guardrails are insufficient |
| **Rebrand/migration risk** | CodeWhale transition uncertainty (#1969) | Favor tools with stable identity and documented migration paths; avoid betting on projects in identity flux |

---

*Report compiled from 2026-05-25 community digests across 9 AI CLI tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-25 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (Most-Discussed PRs by Community Attention)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Universal applicability; addresses pain point in every document Claude generates |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert ODT/ODS/ODF files; LibreOffice/ISO standard interoperability | Enterprise open-source document workflow demand |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and single-conversation actionability; more specific behavioral steering | Meta-improvement: making skills actually executable by Claude |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating SKILL.md structure (20%), security posture, examples, and resources | Quality assurance for the skills ecosystem itself |
| 5 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model leverage |
| 6 | **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | 4-skill cognitive framework: kernel (structured thinking), advisor, agent, memory | Professional knowledge management system |
| 7 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM, IntegrationHub | IT service management consolidation |
| 8 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, E2E strategies | Developer productivity and code quality |

**Note:** All top PRs show `Comments: undefined` in raw data; ranking derived from repository sort order and update velocity. All remain **open**—no merges in top tier, indicating active review backlog.

---

## 2. Community Demand Trends (From Issues Analysis)

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Organizational Skill Sharing** | #228 (13 comments, 7 👍) — highest-engagement issue | [Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228) |
| **Reliability & Data Integrity** | #62, #61 — skill disappearance, 404 loading errors | [Skills disappeared](https://github.com/anthropics/skills/issues/62), [Not found error](https://github.com/anthropics/skills/issues/61) |
| **Evaluation & Validation Tooling** | #556 (8 comments, 6 👍), #202 — `run_eval.py` failures, skill-creator best practices | [0% trigger rate bug](https://github.com/anthropics/skills/issues/556), [skill-creator update needed](https://github.com/anthropics/skills/issues/202) |
| **Trust & Security Boundaries** | #492 (6 comments, 2 👍) — namespace impersonation risk | [Trust boundary abuse](https://github.com/anthropics/skills/issues/492) |
| **MCP Interoperability** | #16, #1102 — expose skills as MCPs, context compression for MCP data | [Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16), [MCP excess data](https://github.com/anthropics/skills/issues/1102) |
| **Plugin Architecture Fixes** | #189 (6 comments, 8 👍), #1087 — duplicate skills, marketplace.json enforcement | [Duplicate skills](https://github.com/anthropics/skills/issues/189), [Plugin loads all skills](https://github.com/anthropics/skills/issues/1087) |
| **Platform Portability** | #29 — AWS Bedrock compatibility | [Usage with Bedrock](https://github.com/anthropics/skills/issues/29) |

**Emerging Directions:**
- **Workflow automation** (n8n-builder in [#190](https://github.com/anthropics/skills/pull/190))
- **Agent governance & safety** (proposed in [#412](https://github.com/anthropics/skills/issues/412))
- **Persistent memory systems** (shodh-memory in [#154](https://github.com/anthropics/skills/pull/154))
- **Codebase intelligence** (inventory-audit in [#147](https://github.com/anthropics/skills/pull/147))

---

## 3. High-Potential Pending Skills (Active, Unmerged)

| Skill | PR | Last Activity | Why It May Land Soon |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Addresses universal document output quality; narrowly scoped, technically complete |
| **ODT/OpenDocument** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Enterprise interoperability demand; ISO standard alignment; recent activity |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Comprehensive coverage of established industry patterns; fills clear gap |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-04-23 | Broad enterprise ITSM coverage; actively maintained by author |
| **Windows Compatibility Fixes** (skill-creator) | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | 2026-05-24 | Critical path fixes; 1-line changes; high merge readiness |
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 2026-04-16 | Bugfix with clear root cause analysis; prevents document corruption |

**Windows compatibility cluster** ([#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099)) shows concentrated contributor effort (Lubrsy706, joshuawowk, gstreet-ops) and recent activity through May 24, 2026—likely near-term merges.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, shareable enterprise infrastructure—specifically organizational skill distribution, cross-platform reliability, and clear trust boundaries between official and community skills—while the pending PR pipeline reveals strong momentum toward document quality, enterprise system integration, and developer tooling depth.**

---

---

# Claude Code Community Digest — 2026-05-25

---

## 1. Today's Highlights

No new release dropped in the last 24h, but community activity remains intense with **50 issues updated** and **15 PRs in flight**. The dominant themes are **agent orchestration reliability** (nested sub-agents, background task deduplication, workflow gating) and **MCP ecosystem maturity** (permission flows, HTTP transport bugs, OAuth in team contexts). A documentation hero emerged: user **giruuuuj** opened **8 troubleshooting PRs** in a single day, systematically addressing recent regressions.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Claude Max plan session limits exhausted abnormally fast** (CLI usage) | **732 comments, 457 👍** — the highest-engagement issue in the repo. Users on $100-200/mo Max plans report burning through multi-hour sessions in minutes since late March. Fundamental billing/trust issue. | Intense, sustained pressure. Users compiling usage logs, demanding audit trails. Some threatening churn. |
| [#61734](https://github.com/anthropics/claude-code/issues/61734) | **Context window status bar shows 200k for Sonnet 4.6, model supports 1M** | UI/UX deception — users think they're capped at 200k when the model actually handles 1M tokens. Misleading telemetry affects architectural decisions. | Frustration at stale UI; Windows users particularly vocal. |
| [#43013](https://github.com/anthropics/claude-code/issues/43013) | **`--continue` and `-p` seriously broken together in 2.1.90** | Regression breaking non-interactive CI/CD workflows. `--continue` is critical for resuming long agentic tasks; `-p` is the programmatic interface. | Repro confirmed, duplicate pile growing. Users pinned to 2.1.89. |
| [#60133](https://github.com/anthropics/claude-code/issues/60133) | **Socket connection closed unexpectedly during long agentic sessions** | Root-caused to Bun lacking `SO_KEEPALIVE` + feature flags disabling keepalives. Affects all long-running agent workflows across platforms. | Strong technical analysis from community; 7 👍 indicates broad impact. |
| [#61993](https://github.com/anthropics/claude-code/issues/61993) | **Sub-agents cannot spawn other sub-agents: `Task`/`Agent` primitive not exposed** | Blocks hierarchical agent architectures — a core promise of "agent teams." Recursive delegation fails silently. | Disappointment from power users building complex automation. |
| [#61689](https://github.com/anthropics/claude-code/issues/61689) | **Background tasks silently relaunched as duplicates** | Race condition in task scheduler + context compaction strips metadata. Wastes compute, corrupts state. | Detailed community root-cause analysis; workaround PR already filed. |
| [#46228](https://github.com/anthropics/claude-code/issues/46228) | **Background subagents cannot access OAuth-authenticated MCP servers** | Auth context doesn't propagate to sub-agent processes. Breaks any MCP-reliant team workflow. | Niche but blocking for enterprise MCP adopters. |
| [#61637](https://github.com/anthropics/claude-code/issues/61637) | **Workflow tool gated behind GrowthBook, `CLAUDE_CODE_WORKFLOWS=1` insufficient** | Feature announced in changelog but unavailable via documented env var. Suggests internal A/B infrastructure leaking into user experience. | Confusion and skepticism about "dark launch" practices. |
| [#62091](https://github.com/anthropics/claude-code/issues/62091) | **Agent deleted user's main project repo via `gh repo fork` misinterpretation** | **Severe data loss.** Opus 4.7 misread fork-rename semantics, destroyed years of work (377 issues/PRs, 50+ releases). | Shock; calls for destructive tool guardrails, pre-flight dry-runs. |
| [#62048](https://github.com/anthropics/claude-code/issues/62048) | **Desktop app OOM on 8 GB M2 Mac — 4 GB VM allocation** | Accessibility concern: Claude Code effectively requires 16+ GB RAM. Excludes developers on base-model Macs. | Resignation from Apple Silicon base-model users. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#62099](https://github.com/anthropics/claude-code/pull/62099) | **Add credential-guard plugin for hardcoded secret detection** | PreToolUse hook scanning `Write`/`Edit`/`Bash` for 20+ credential patterns before disk. Addresses [#62095](https://github.com/anthropics/claude-code/issues/62095). | 🔍 Open — security-critical, likely fast-tracked |
| [#61969](https://github.com/anthropics/claude-code/pull/61969) | **CLI-desktop conversation sync** | Bidirectional sync of CLI session history (`~/.claude/projects/**/*.jsonl`) into desktop app. Closes [#61967](https://github.com/anthropics/claude-code/issues/61967). | 🔍 Open — high UX value |
| [#62023](https://github.com/anthropics/claude-code/pull/62023) | **Fix word-boundary `@claude` trigger in workflow** | Prevents `@claude-*` marketplace names from falsely triggering `claude.yml`. Regex hygiene fix. | 🔍 Open — small, correct |
| [#61968](https://github.com/anthropics/claude-code/pull/61968) | **Docs: AskUserQuestion rewind checkpoint gap** | Documents why AskUserQuestion answers don't create rewind points (tool_result inside assistant turn vs. user-message boundary). Workaround: echo-back pattern. | 🔍 Open |
| [#61966](https://github.com/anthropics/claude-code/pull/61966) | **Docs: Unauthorized messages in tmux** | Phantom keypresses from tmux focus-events. Workaround: disable focus-events or exit tmux. | 🔍 Open |
| [#61964](https://github.com/anthropics/claude-code/pull/61964) | **Docs: SSH remote failure from corrupted plugin archive** | Auto-uploaded plugins can corrupt; documents detection and manual purge. | 🔍 Open |
| [#61708](https://github.com/anthropics/claude-code/pull/61708) | **Docs: Invalid model identifier after update** | Root cause: `AWS_REGION` + `CLAUDE_CODE_USE_BEDROCK` env conflict causes model ID prefix mismatch. | 🔍 Open |
| [#61697](https://github.com/anthropics/claude-code/pull/61697) | **Docs: Background task duplicate relaunch** | Three-layer fix proposed: heartbeat metadata, scheduler dedup, compaction preservation. | 🔍 Open |
| [#61702](https://github.com/anthropics/claude-code/pull/61702) | **Docs: Stats cache freeze (`lastComputedDate` stagnation)** | Cache versioning with auto-migration proposed for compound cache invalidation bugs. | 🔍 Open |
| [#61696](https://github.com/anthropics/claude-code/pull/61696) | **Docs: System-reminder blocks leaking into WebFetch** | v2.1.150 regression. Downgrade to v2.1.149 workaround documented; fix approach outlined. | 🔍 Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Hierarchical agent orchestration** | [#61993](https://github.com/anthropics/claude-code/issues/61993) (nested sub-agents), [#42852](https://github.com/anthropics/claude-code/issues/42852) (multi-agent chat room), Workflow tool gating [#61637](https://github.com/anthropics/claude-code/issues/61637) | 🔥🔥🔥 High — core architecture gap |
| **Conversation portability** | [#61969](https://github.com/anthropics/claude-code/pull/61969) (CLI-desktop sync), implicit in many workflow complaints | 🔥🔥 Medium — UX polish |
| **Transparent feature gating** | [#61637](https://github.com/anthropics/claude-code/issues/61637) (GrowthBook), general frustration with "announced but unavailable" features | 🔥🔥 Medium — trust issue |
| **Pre-execution safety guardrails** | [#62099](https://github.com/anthropics/claude-code/pull/62099) (credential-guard), [#62091](https://github.com/anthropics/claude-code/issues/62091) (repo deletion) aftermath | 🔥🔥🔥 High — reactive to incidents |
| **Better long-session resilience** | [#60133](https://github.com/anthropics/claude-code/issues/60133) (socket keepalive), [#61689](https://github.com/anthropics/claude-code/issues/61689) (task dedup) | 🔥🔥🔥 High — reliability blocker |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Session/billing transparency** | Chronic | 🔴 Critical | [#38335](https://github.com/anthropics/claude-code/issues/38335) — 732 comments, months unresolved |
| **Agent state management** | High | 🔴 Critical | [#61689](https://github.com/anthropics/claude-code/issues/61689), [#61993](https://github.com/anthropics/claude-code/issues/61993), [#60133](https://github.com/anthropics/claude-code/issues/60133) |
| **MCP auth & permission propagation** | High | 🟡 High | [#46228](https://github.com/anthropics/claude-code/issues/46228), [#47685](https://github.com/anthropics/claude-code/issues/47685), [#46392](https://github.com/anthropics/claude-code/issues/46392) |
| **Context/compaction correctness** | Medium | 🟡 High | [#49605](https://github.com/anthropics/claude-code/issues/49605), [#61734](https://github.com/anthropics/claude-code/issues/61734), [#61706](https://github.com/anthropics/claude-code/pull/61706) |
| **Desktop resource efficiency** | Medium | 🟡 High | [#62048](https://github.com/anthropics/claude-code/issues/62048) — 4 GB VM on 8 GB Mac |
| **Regression velocity in 2.1.x** | Medium | 🟠 Medium | [#43013](https://github.com/anthropics/claude-code/issues/43013), [#47114](https://github.com/anthropics/claude-code/issues/47114), [#61696](https://github.com/anthropics/claude-code/pull/61696) |

---

*Digest compiled from 50 issues and 15 PRs updated 2026-05-24 → 2026-05-25.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-25

---

## 1. Today's Highlights

The Codex team shipped a massive batch of TUI improvements including vim text-object bindings and transcript search, while Windows Desktop users continue to face a cluster of critical stability issues around sandbox failures, app freezes, and SQLx migration checksum mismatches. Community attention remains fixated on context window management, with multiple open issues tracking `/compact` failures and misleading "Context compacted" UI states.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **#20161** [Phone number verification broken with SSO](https://github.com/openai/codex/issues/20161) | **CLOSED** — High-impact auth regression where SSO login unexpectedly demanded phone verification, breaking cross-device workflows. 156 comments show this affected many users. | 102 👍, resolved but left frustration about auth friction |
| **#11626** [Add `/rewind` to restore both chat context and code edits](https://github.com/openai/codex/issues/11626) | **OPEN** — Top enhancement request (141 👍). Current `Esc` rewind only reverts conversation state, leaving workspace edits orphaned; users want atomic rollback. | Strong consensus this is essential for reliable iterative coding |
| **#9046** [Context window exhausted at start of chat](https://github.com/openai/codex/issues/9046) | **OPEN** — Persistent bug where fresh sessions hit `context_length_exceeded` immediately, suggesting broken token accounting or leaked system prompts. | Frustration at inability to start basic conversations |
| **#22696** [Remote control auth failure after update](https://github.com/openai/codex/issues/22696) | **CLOSED** — Pro users lost remote-control setup post-update; 32 comments indicate setup flow brittleness. | Relief at closure, but pattern of update-breaking-config noted |
| **#19563** [Desktop thrashes resume/unsubscribe with heartbeat automations](https://github.com/openai/codex/issues/19563) | **OPEN** — Niche but severe: >4 heartbeat automations cause infinite loop in subscription management, burning CPU/battery. | Zero 👍 but detailed repro; signals enterprise automation use |
| **#21128** [Desktop hides project conversations outside recent-50 window](https://github.com/openai/codex/issues/21128) | **OPEN** — "Not an edge case" — active project work disappears from UI, making Desktop unreliable as project memory. | 15 👍, described as "not just cosmetic" |
| **#23777** [WSL app-server fails on CRLF/LF SQLx checksum mismatch](https://github.com/openai/codex/issues/23777) | **OPEN** — Windows-specific migration failure blocking launch entirely; CRLF handling bug in Rust SQLx tooling. | 9 👍, clear Windows/WSL neglect pattern |
| **#24002** [Regression: long resumed conversations fail remote compact](https://github.com/openai/codex/issues/24002) | **OPEN** — Bisected to 0.132.0+; downgrading to 0.131.0 works around. Context compaction broken for resumed threads. | Explicit downgrade instructions helping community |
| **#24048** [App-server OOM-killed at ~27GB handling large tool output](https://github.com/openai/codex/issues/24048) | **OPEN** — Memory leak/unbounded growth in app-server processing tool calls; SIGKILL is hard failure mode. | Enterprise-scale blocker, no workaround yet |
| **#24361** [Skills listing polluted with 1000+ foreign ecosystem apps](https://github.com/openai/codex/issues/24361) | **OPEN** — Desktop sync contaminates local skills with Korean marketplace apps (`엘포인트`, etc.). Bizarre data leakage bug. | Fresh (3 comments), but alarming privacy/curation failure |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| **#24382** [Vim text object bindings](https://github.com/openai/codex/pull/24382) | Adds `ciw`, `daw`, `di(`, quote/bracket objects to TUI composer | Closes major vim fidelity gap; daily-driver quality improvement |
| **#24380** [Complete vim word-end and line-end behavior](https://github.com/openai/codex/pull/24380) | Fixes `e` motion stuck-at-end bug; adds `C` (change to EOL) | Companion to #24382, polishes core editing loop |
| **#23539** [Transcript search](https://github.com/openai/codex/pull/23539) | `Ctrl+F` in transcript overlay; final piece of 3-PR navigation stack | Essential for long-session archaeology |
| **#23346** [Optimize transcript prompt selection](https://github.com/openai/codex/pull/23346) | Eliminates redundant rescans on prompt navigation | Performance fix for resumed/lengthy sessions |
| **#23344** [Improve transcript overlay UX](https://github.com/openai/codex/pull/23344) | Prompt-to-prompt jumps, cleaner copy feedback, action discoverability | Foundation for #23539 and #23346 |
| **#24376** [Reject empty base64 image inputs](https://github.com/openai/codex/pull/24376) | Maps `invalid_value` 400s to recovery path; replaces empty images with text | Robustness against malformed vision inputs |
| **#24368** [Add compaction metadata to turn headers](https://github.com/openai/codex/pull/24368) | Tags ordinary vs. compaction vs. detached-memory requests with `window_id` | Observability foundation for debugging context issues |
| **#24371** [Avoid modifyOtherKeys for unknown tmux formats](https://github.com/openai/codex/pull/24371) | Fixes iTerm2 control-mode breakage from 0.131 tmux extended-keys fallback | Terminal compatibility regression fix |
| **#24358** [Interactive review story cockpit](https://github.com/openai/codex/pull/24358) | `/story` TUI entry point for navigating model-authored review narratives | New review UX paradigm for large changes |
| **#24356** [Nudge users toward auto-compaction](https://github.com/openai/codex/pull/24356) | Soft-prompts manual compacters about auto-compact benefits | Acknowledges user backlash at hiding context usage; behavioral design pivot |

---

## 5. Feature Request Trends

- **Atomic session rewind**: #11626's `/rewind` combining chat + code state is the dominant enhancement theme — users view partial rollback as data loss risk
- **Context transparency**: Requests for visible context window usage, reliable compaction, and honest "compacted" status (#23589, #24002, #24356) — users distrust current UI promises
- **Configurable worktree locations**: #10599 (49 👍) represents broader desire for workspace hygiene control in Desktop
- **Review narrative UX**: #24358/#24350/#24353 show investment in story-driven code review; community interest in alternatives to flat diffs

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows as second-class platform** | #23777 (CRLF/LF), #22428 (sandbox `CreateProcessAsUserW`), #21232/#20214/#21299 (freezes), #23740 (ANSI regression), #23803 (path mismatch), #24362 (env var inheritance) | **Critical** — 6+ distinct Windows-specific failures in 24h |
| **Context window management broken** | #9046 (immediate exhaustion), #24002 (regression), #23589 (false "compacted" success), #24048 (OOM from large output) | **High** — core value proposition compromised |
| **Session durability / resume failures** | #21128 (hidden conversations), #23803 (path mismatch), #24369 (NUL bytes in persisted calls), #23403 (remote control disappearance) | **High** — trust in long-running work eroding |
| **Auth fragility** | #20161 (SSO/phone mismatch), #9418 (device code), #24365 (refresh token reuse) | **Medium-High** — repeated authentication regressions |
| **Desktop app-server stability** | #24287 (stuck Thinking), #19563 (heartbeat thrash), #24048 (SIGKILL at 27GB) | **High** — local server architecture showing strain |

---

*Digest compiled from 50 issues and 37 PRs updated 2026-05-24 to 2026-05-25.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-25

---

## 1. Today's Highlights

No new release shipped in the last 24h, but development velocity remains high with **27 active PRs** and **50 updated issues**. The community is heavily focused on **agent reliability**—particularly subagent hang recovery, shell execution stability, and memory system hardening—alongside **infrastructure improvements** for ephemeral sessions and non-interactive workflows.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **#24353** | [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | Follow-up to behavioral evals initiative; 76 tests running across 6 Gemini variants. Critical for measuring agent quality at scale. | 🔒 Internal; 7 comments, active EPIC tracking |
| **#22745** | [Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Could reduce token waste and turn count by reading precise method bounds instead of line ranges. Major efficiency opportunity. | 🔒 Internal; 7 comments, linked to #22746/#22747 |
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | **Top user pain point**: subagent delegation causes indefinite hangs on simple tasks (folder creation). Workaround is disabling subagents entirely. | 8 👍, 7 comments; marked `need-retesting` |
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Silent failure mode: `codebase_investigator` claims success despite hitting turn limits, masking incomplete analysis. | 2 👍, 6 comments; reliability concern |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | Custom skills (gradle, git) are ignored unless explicitly instructed, defeating the purpose of extensible agent architecture. | 6 comments; anecdotal but recurring |
| **#25166** | [Shell command execution stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | Simple commands falsely report awaiting user input after completion. Breaks non-interactive and CI workflows. | 3 👍, 4 comments; `effort/medium` |
| **#26525** | [Deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Security: secrets pass through model context before redaction; service logging of skill files is excessive. | 🔒 Internal; 3 comments |
| **#26523** | [Surface or quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523) | Invalid patches silently skipped; aggregate dismiss only handles valid ones. Creates invisible data quality debt. | 🔒 Internal; 3 comments |
| **#22186** | [get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | Crash during summary generation near task completion. Frustrating UX: work completes but CLI dies before user sees result. | 3 comments; `effort/medium` |
| **#24246** | [400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | API limit hit when many tools registered; needs smarter tool scoping. Blocks power users with rich MCP setups. | 3 comments; `need-information` |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| **#27365** | [Add ephemeral session mode (`--ephemeral`)](https://github.com/google-gemini/gemini-cli/pull/27365) | Headless/data annotation use case: prevents session log pollution from repeated automated runs. Human + AI co-authored. | 🟢 Open; `need-issue` |
| **#27418** | [Non-interactive shell respects `enableInteractiveShell: false`](https://github.com/google-gemini/gemini-cli/pull/27418) | Hardens native bridge for non-UTF-8 bytes and heap-exceeded buffers. Fixes #27419. | 🟢 Open; P1 |
| **#27348** | [Wrap Ajv validate() in try/catch](https://github.com/google-gemini/gemini-cli/pull/27348) | Prevents crash on malformed schemas in `write_file`/`replace` tools: `Cannot read properties of undefined (reading 'type')`. | 🟢 Open; P1 |
| **#27389** | [Bypass routing classifiers to prevent orphaned function response errors](https://github.com/google-gemini/gemini-cli/pull/27389) | Fixes 400 Bad Request from history pruning breaking tool-use turn sequences. | 🟢 Open; `need-issue` |
| **#27415** | [Emergency abort + touch interface input fixes](https://github.com/google-gemini/gemini-cli/pull/27415) | Safety-critical: Termux/Android users couldn't interrupt agents. Adds emergency abort, fixes mouse race conditions. | 🟢 Open; P2, `help wanted` |
| **#27412** | [Prevent model fabrication on binary file reads](https://github.com/google-gemini/gemini-cli/pull/27412) | Stops model from hallucinating content when `read_file` returns PDFs/binaries. Fixes #27408. | 🟢 Open; P2 |
| **#27153** | [Serialize concurrent edits to same file](https://github.com/google-gemini/gemini-cli/pull/27153) | Eliminates race condition in `EditTool`/`WriteFileTool` where concurrent ops cause last-write-wins data loss. | 🟢 Open; P1 |
| **#27154** | [Prevent PTY memory leak](https://github.com/google-gemini/gemini-cli/pull/27154) | Synchronous cleanup of PTY entries; fixes file descriptor leak when background log stream stalls. | 🟢 Open; P2 |
| **#27151** | [Add `/compress` ACP slash command](https://github.com/google-gemini/gemini-cli/pull/27151) | First-class ACP support for history compaction; prevents silent token burn on long sessions. | 🟢 Open; P2 |
| **#27391** | [Filter internal session context from history resumption](https://github.com/google-gemini/gemini-cli/pull/27391) | Fixes TUI leak of `<session_context>` XML blocks on resume. **Closed** (merged or superseded). | 🔴 Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | #22745, #22746, #22747 | 🔥 High — triangulated investigation across reads, search, and codebase mapping |
| **Backgroundable local agents** | #22741 (2 👍) | Medium — users want Ctrl+B for non-blocking subagents |
| **Server-driven model management** | #20878 | Medium — centralize model routing via `LoadCodeAssist` |
| **Agent self-awareness** | #21432 | Lower — accurate CLI flags, hotkeys, self-execution guidance |
| **Ephemeral / headless modes** | #27365 | Emerging — automation/CI use cases |

---

## 6. Developer Pain Points

| Theme | Frequency | Key Issues / PRs |
|-------|-----------|----------------|
| **Subagent hangs & silent failures** | 🔴 Critical | #21409 (generalist hangs), #22323 (MAX_TURNS → false success), #21983 (browser/Wayland), #22093 (unauthorized subagent activation) |
| **Shell execution reliability** | 🔴 Critical | #25166 (stuck "Waiting input"), #27418 (non-interactive shell), #27154 (PTY leaks) |
| **Memory system quality** | 🟡 High | #26525–#26523 (redaction, invalid patches, retry loops), #26516 (rollup) |
| **Tool registration limits** | 🟡 Moderate | #24246 (>128 tools → 400 error), #24246 needs smarter scoping |
| **Model ignoring custom skills** | 🟡 Moderate | #21968 — skills exist but aren't auto-invoked |
| **Terminal rendering / TTY** | 🟢 Niche | #21924 (resize flicker), #24935 (editor exit corruption) |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity. 🔒 = maintainer-only visibility.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-25

---

## 1. Today's Highlights

The Copilot CLI team shipped **v1.0.54** with fixes for multiline prompt rendering, `--config-dir` handling in `/skills`, and a critical bash shell hang when `PS0`/`PROMPT_COMMAND` is set. Meanwhile, the issue tracker saw **24 active items** in 24 hours — with significant community energy around terminal rendering regressions, IME input bugs on macOS, and expanding agent/skill configuration flexibility.

---

## 2. Releases

### [v1.0.54](https://github.com/github/copilot-cli/releases/tag/v1.0.54) (2026-05-24)
Patch release addressing three user-reported issues:
- **Multiline prompts** now render fully without content clipping or cursor offset
- **`/skills` picker** correctly respects `--config-dir` when persisting skill preferences (fixes [#2926](https://github.com/github/copilot-cli/issues/2926))
- **Bash shell hangs** eliminated when `PS0` or `PROMPT_COMMAND` environment variables are set (fixes [#2350](https://github.com/github/copilot-cli/issues/2350))

### v1.0.53 series (2026-05-24)
Rapid iteration builds (v1.0.53-0 through v1.0.53-2) with incremental fixes, culminating in the stable v1.0.54 release.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3502](https://github.com/github/copilot-cli/issues/3502) | **Chinese Zhuyin IME preedit text accumulates in lower-right corner on macOS** | Breaks CJK input for a major user demographic; IME positioning is fundamental to CLI usability | **18 👍** — highest engagement of the day; affects daily productivity for Chinese-speaking developers |
| [#3497](https://github.com/github/copilot-cli/issues/3497) | **Terminal output clipped after resize/reflow; hidden text unreachable via scrollbar** | Data loss in long outputs; scrollbar introduced in recent versions appears related | **6 👍**; multiple users confirming — suggests regression in reflow logic |
| [#3501](https://github.com/github/copilot-cli/issues/3501) | **Scrollbar makes text unalign on Windows** | Rendering regression affecting Windows Terminal and Console Host equally | **5 👍**; user notes Copilot cannot self-diagnose/fix the issue |
| [#2317](https://github.com/github/copilot-cli/issues/2317) | **`~/.bash_history` truncated after Copilot executes Bash command** | Data destruction — user shell history is permanently lost; `HIST*` env vars ignored | **8 👍**; long-running issue (since March), user requests reopening of #501 |
| [#3333](https://github.com/github/copilot-cli/issues/3333) | **Android/Termux support broken in v1.0.48+ (runtime.node requires glibc)** | Complete platform exclusion for mobile/embedded Linux users; Node.js on Android uses Bionic libc | **1 👍**, 5 comments; niche but passionate user base with no workaround |
| [#3414](https://github.com/github/copilot-cli/issues/3414) | **Paste regression on GNOME Wayland in 1.0.49** | Clipboard broken on default Linux desktop environment; worked in 1.0.48 | **1 👍**, 3 comments; regression pattern suggests Wayland-specific input handling change |
| [#3496](https://github.com/github/copilot-cli/issues/3496) | **Copy/Paste broken when selecting single-line text from Timeline** | UX friction in session review; multi-line selection works, single-line doesn't | **2 👍**; inconsistent behavior indicates logic bug in selection handler |
| [#3507](https://github.com/github/copilot-cli/issues/3507) | **`COPILOT_CUSTOM_INSTRUCTIONS_DIRS` only half-honored by instruction loader (1.0.54)** | New in v1.0.54: env var works for `AGENTS.md` and `.github/instructions/**` but **not** `.github/copilot-instructions.md` / `CLAUDE.md` / `GEMINI.md` | Fresh report; immediately filed against latest release — suggests incomplete feature implementation |
| [#3269](https://github.com/github/copilot-cli/issues/3269) | **MCP "Authorization successful" messages confusing for failed flows** | Security/UX: misleading success messages on failed auth create false confidence | **0 👍** but critical trust issue; MCP adoption depends on clear auth feedback |
| [#3486](https://github.com/github/copilot-cli/issues/3486) | **`/mcp show` unable to scroll all tools for MCP server** | MCP tooling discovery broken for servers with many tools; blocks plugin evaluation | **0 👍**; filed by active community member doggy8088 (3 issues in 24h) |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

This is notable — all activity is issue-driven, suggesting either:
- Pre-release code freeze for v1.0.54
- Team focused on release stabilization vs. new feature development
- Possible shift to internal/private development branches

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Agent/skill scaffolding commands** | [#3503](https://github.com/github/copilot-cli/issues/3503): Request for `/create-*` skills (skill, agent, hook, prompt) matching VS Code experience | New; parity with IDE extension |
| **Multi-directory agent loading** | [#3505](https://github.com/github/copilot-cli/issues/3505): Support multiple agent directories like skills already have | New; configuration ergonomics |
| **Sub-agent tool provisioning** | [#3506](https://github.com/github/copilot-cli/issues/3506): Plugins need to declare tool requirements for custom agents spawned via `task` | New; advanced plugin architecture |
| **Custom instructions directory completeness** | [#3507](https://github.com/github/copilot-cli/issues/3507): `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` partial implementation | Bug/feature gap; env var parity expected |

**Direction:** The community is pushing Copilot CLI toward **VS Code feature parity** in agent/skill management, plus more **flexible configuration** for multi-project and plugin-heavy workflows.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|-----------|-----------|----------|----------|
| **Terminal rendering regressions** | 🔥🔥🔥🔥🔥 | High | [#3497](https://github.com/github/copilot-cli/issues/3497), [#3501](https://github.com/github/copilot-cli/issues/3501), [#3500](https://github.com/github/copilot-cli/issues/3500), [#3486](https://github.com/github/copilot-cli/issues/3486), [#3426](https://github.com/github/copilot-cli/issues/3426) — **5 issues** |
| **Input method/editor integration** | 🔥🔥🔥 | High | [#3502](https://github.com/github/copilot-cli/issues/3502) (Zhuyin IME), [#3414](https://github.com/github/copilot-cli/issues/3414) (Wayland paste), [#3496](https://github.com/github/copilot-cli/issues/3496) (Timeline copy) |
| **Shell integration fragility** | 🔥🔥🔥 | Critical (data loss) | [#2317](https://github.com/github/copilot-cli/issues/2317) (bash_history), [#2350](https://github.com/github/copilot-cli/issues/2350) (PS0 hang — fixed in 1.0.54) |
| **Cross-platform support gaps** | 🔥🔥 | Medium-High | [#3333](https://github.com/github/copilot-cli/issues/3333) (Android/Termux), [#3498](https://github.com/github/copilot-cli/issues/3498) (GitHub Mobile remote sessions) |
| **Configuration discoverability** | 🔥🔥 | Medium | [#812](https://github.com/github/copilot-cli/issues/812) (AGENTS.md reload docs), [#3507](https://github.com/github/copilot-cli/issues/3507) (incomplete env var support) |

**Critical insight:** The scrollbar feature introduced in recent versions appears to be a **major regression vector** — causing text misalignment, clipping, and scrollability failures across Windows, Linux, and macOS. Multiple users report Copilot cannot self-diagnose these rendering issues, creating support burden.

---

*Digest compiled from github.com/github/copilot-cli activity for 2026-05-24.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-25

## Today's Highlights

The ACP (Agent Communication Protocol) ecosystem saw significant community investment with four interconnected PRs from contributor **huntharo** addressing SDK compatibility, session persistence, and permission workflows—indicating mature third-party integration demand. A critical cross-platform file editing bug affecting CRLF/LF preservation also received attention, alongside documentation corrections for the hooks system that had been propagating broken examples since late 2025.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

*No issues updated in the last 24 hours. (Total: 0)*

---

## Key PR Progress

| # | PR | Author | Description |
|---|-----|--------|-------------|
| **#2359** | [fix(acp): assign message ids to streamed content](https://github.com/MoonshotAI/kimi-cli/pull/2359) | huntharo | Adds ACP SDK 0.10.0 compatibility by assigning `messageId` values to streamed content and enables terminal-based auth login invocation. Unblocks PwrAgent and other ACP-compatible agent integrations. |
| **#2363** | [fix(acp): replay loaded session history](https://github.com/MoonshotAI/kimi-cli/pull/2363) | huntharo | **Stacks on #2359.** Restores ACP `session/load` history replay functionality, enabling persistent multi-turn agent sessions across restarts. Critical for production agent deployments. |
| **#2364** | [feat(acp): support permission mode switching](https://github.com/MoonshotAI/kimi-cli/pull/2364) | huntharo | **Stacks on #2363.** Implements protocol-level ACP permission mode switching (`default`, `accept`, `reject`), resolving long-standing request #1414. Enables programmatic control over tool execution approvals. |
| **#2362** | [fix: retain original line break style, fix CRLF/LF issues](https://github.com/MoonshotAI/kimi-cli/pull/2362) | Sisyphbaous-DT-Project | Fixes `StrReplaceFile` and `WriteFile` tools corrupting Windows-style line endings. Root cause: `readtext()` universal newlines mode silently converted `\r\n` → `\n`. Resolves #1952, #2191. |
| **#2361** | [[codex] docs: clarify hooks notification example](https://github.com/MoonshotAI/kimi-cli/pull/2361) | Randy-sin | Corrects non-functional `permission_prompt` Notification hook example; clarifies that matchers use notification *types*, not sink names, and that approval requests are *not* emitted as Notification events. |
| **#2335** | [docs: fix Notification hook matcher example](https://github.com/MoonshotAI/kimi-cli/pull/2335) | he-yufeng | Earlier documentation fix (created 2026-05-20, updated today) that replaces the same broken `permission_prompt` example with real background-task notification types. Updates both English and Chinese hook docs plus test fixtures. |
| **#2358** | [fix(build): correct module-name type in pyproject.toml files](https://github.com/MoonshotAI/kimi-cli/pull/2358) | 60ke | Fixes regression in `uv` build backend configuration where `module-name` used incorrect table syntax instead of string for single-module packages. Root package fix follows earlier commit `b75c9973` (2025-11-17). |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **ACP ecosystem maturity** | 4 stacked PRs from single external contributor building PwrAgent integration | Kimi CLI is becoming a node in broader agent interoperability networks; protocol completeness (session persistence, permissions, auth) is now a competitive requirement |
| **Cross-platform file integrity** | #2362 addressing CRLF/LF corruption | Windows/enterprise developer experience gaps persist; tooling must preserve file system invariants |
| **Hooks system documentation debt** | Two separate PRs (#2335, #2361) fixing same broken example | Developer onboarding friction from stale docs; hooks architecture may be under-documented for extension use cases |

---

## Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **ACP integration gaps** | External contributors filing stacked PRs for basic protocol features (message IDs, session replay, permissions) that block production agent deployments | 🔴 High — indicates core protocol implementation lags behind spec/adoption |
| **Documentation accuracy** | Broken `permission_prompt` example persisted for months, translated across EN/CN docs, embedded in test fixtures | 🟡 Medium — erodes trust in hooks as extension point; suggests docs lack automated validation |
| **Build toolchain regressions** | `pyproject.toml` `module-name` syntax regression (#2358) | 🟢 Low — isolated, but signals configuration drift in packaging modernization (uv migration) |
| **Cross-platform line ending handling** | Universal newlines default silently corrupting files (#2362) | 🟡 Medium — affects Windows developers and CI/CD pipelines; "works on my machine" class bug |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli. No maintainer responses or community reactions (👍/comments) recorded on today's items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-25

## Today's Highlights

No new releases shipped in the last 24h, but community activity remains intense with 50+ issues updated and significant engineering effort landing across core infrastructure. The team is actively merging stability fixes for session management, TUI keybindings, and provider error handling while users continue to report friction with free-tier limits, GPT model latency, and undo functionality.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | Free models hit "free usage exceed" error | Core trust issue: users question whether free models have hidden limits; 6-hour session context suggests aggressive rate limiting | 🔥 36 comments, 10 👍 — heated debate |
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT models intermittently take minutes to respond | Performance regression affecting paid users on GPT 5.4 xhigh; undermines reliability claims | 25 comments, 9 👍 — active investigation |
| [#4704](https://github.com/anomalyco/opencode/issues/4704) | `/undo` and `/timeline undo` don't revert file edits | Fundamental workflow broken: users expect git-aware undo, get silent failures | 18 comments, 15 👍 — long-standing, highly upvoted |
| [#11865](https://github.com/anomalyco/opencode/issues/11865) | Subagents hang forever with Codex/OpenAI, no timeout | Session-killing bug for power users; invalid session ID errors cascade | 17 comments, 11 👍 — enterprise concern |
| [#27530](https://github.com/anomalyco/opencode/issues/27530) | Startup crash: "4 of 5 requests failed" provider errors | Complete startup failure; suggests server-side dependency fragility | 11 comments, 8 👍 — blocking |
| [#28035](https://github.com/anomalyco/opencode/issues/28035) | [FEATURE] Sticky last prompt line at top of screen | Small TUI UX improvement with outsized workflow value for context switching | 7 comments — constructive design discussion |
| [#6156](https://github.com/anomalyco/opencode/issues/6156) | Config file location inconsistent in docs/AI responses | Closed: docs hygiene issue where OpenCode itself gave wrong paths | 6 comments, 5 👍 — resolved |
| [#24334](https://github.com/anomalyco/opencode/issues/24334) | DeepSeek `reasoning_content` must be passed back in thinking mode | Closed: provider API contract violation for reasoning models | 6 comments, 2 👍 — edge case fixed |
| [#26382](https://github.com/anomalyco/opencode/issues/26382) | Google Stitch MCP fails "Failed to get tools" | Closed: remote MCP compatibility gap despite curl working | 5 comments — integration friction |
| [#24264](https://github.com/anomalyco/opencode/issues/24264) | Nvidia NIM hangs on DeepSeek v4 without `chat_template_kwargs` | Open: provider-specific parameter requirement not documented | 4 comments, 1 👍 — niche but blocking for NIM users |

---

## Key PR Progress

| # | PR | Status | What's Changing |
|---|-----|--------|-----------------|
| [#28422](https://github.com/anomalyco/opencode/pull/28422) | Stabilize virtual session timeline interactions | 🟡 Open | Fixes TUI jank when streaming content changes row heights; patches `virtua` library for synchronous remeasurement |
| [#28666](https://github.com/anomalyco/opencode/pull/28666) | wip: stats | 🟡 Open | Stats infrastructure in progress; likely usage/performance analytics |
| [#29150](https://github.com/anomalyco/opencode/pull/29150) | Break auto-compact loop when compaction makes no progress | 🟡 Open | Fixes infinite loop (#28543) when model context window config undershoots provider reality |
| [#29068](https://github.com/anomalyco/opencode/pull/29068) | Move database schema ownership to core | 🟡 Open | Major refactor: migrates Drizzle schema from `opencode` → `packages/core`; centralizes migration system |
| [#29145](https://github.com/anomalyco/opencode/pull/29145) | Wire `prompt.skills` keybinding to gather call | 🟡 Open | Fixes #29148: TUI keybinding was defined but never connected to handler |
| [#29046](https://github.com/anomalyco/opencode/pull/29046) | Migrate skill tests to Effect fixtures | ✅ Closed | Test modernization: `it.instance` fixtures, `AppFileSystem.use`, `Skill.use` accessor |
| [#29045](https://github.com/anomalyco/opencode/pull/29045) | Migrate LSP client tests to Effect harness | ✅ Closed | Same pattern for LSP tests; keeps subprocess interactions on live Effect |
| [#29147](https://github.com/anomalyco/opencode/pull/29147) | Preserve session update time during project migration | ✅ Closed | Prevents Drizzle auto-timestamp from clobbering `time_updated` on project ID changes |
| [#29138](https://github.com/anomalyco/opencode/pull/29138) | Document plugin URL specs | ✅ Closed | Documents `file://` and `git+` npm plugin specs; closes #16669 |
| [#29139](https://github.com/anomalyco/opencode/pull/29139) | Open docs from help button | ✅ Closed | Routes help button to `https://opencode.ai/docs` instead of Discord feedback flow; closes #28703 |

---

## Feature Request Trends

1. **Mobile/remote development workflows** — [#29121](https://github.com/anomalyco/opencode/issues/29121) proposes Android phone as portable terminal for remote OpenCode instances; signals demand for cloud-dev hybrid models
2. **TUI ergonomics** — Sticky prompts ([#28035](https://github.com/anomalyco/opencode/issues/28035)), double-Ctrl+C exit guard ([#26371](https://github.com/anomalyco/opencode/issues/26371)), and voice input ([#29136](https://github.com/anomalyco/opencode/issues/29136)) show sustained UX polish demand
3. **Provider expansion** — CommandCode ([#26338](https://github.com/anomalyco/opencode/issues/26338)) and broader MCP ecosystem support indicate users want vendor flexibility
4. **Session lifecycle management** — Background subagents (landed in [#24174](https://github.com/anomalyco/opencode/pull/24174)), unarchive ([#24154](https://github.com/anomalyco/opencode/pull/24154)), `/uptime` ([#24161](https://github.com/anomalyco/opencode/pull/24161)), and `/context` ([#24210](https://github.com/anomalyco/opencode/pull/24210)) reflect maturing operational needs

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Free tier transparency & billing** | [#15585](https://github.com/anomalyco/opencode/issues/15585), [#29141](https://github.com/anomalyco/opencode/issues/29141), [#29135](https://github.com/anomalyco/opencode/issues/29135), [#29116](https://github.com/anomalyco/opencode/issues/29116) | 🔴 Critical — trust erosion, payment system bugs |
| **Undo/reversibility gaps** | [#4704](https://github.com/anomalyco/opencode/issues/4704) | 🔴 Critical — data loss risk, fundamental expectation |
| **Provider reliability & timeouts** | [#29079](https://github.com/anomalyco/opencode/issues/29079), [#11865](https://github.com/anomalyco/opencode/issues/11865), [#27530](https://github.com/anomalyco/opencode/issues/27530), [#29129](https://github.com/anomalyco/opencode/issues/29129) | 🟡 High — session hangs, CPU burns, startup failures |
| **Desktop stability** | [#29149](https://github.com/anomalyco/opencode/issues/29149), [#29119](https://github.com/anomalyco/opencode/issues/29119), [#15431](https://github.com/anomalyco/opencode/issues/15431) | 🟡 High — renderer crashes, lock screen corruption |
| **Non-interactive mode fragility** | [#26855](https://github.com/anomalyco/opencode/issues/26855), [#29131](https://github.com/anomalyco/opencode/issues/29131) | 🟡 High — missing events break downstream tooling |
| **GDPR/account management** | [#29092](https://github.com/anomalyco/opencode/issues/29092) | 🟢 Moderate — compliance gap, no self-service deletion |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-25

## Today's Highlights

The Pi team shipped a wave of critical stability fixes addressing RPC backpressure crashes, TUI rendering failures, and CLI process hangs. Meanwhile, community contributions expanded provider support with Alibaba DashScope and Codex device-code login, while long-standing pain points around XDG compliance and path handling finally saw resolution.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#4916](https://github.com/earendil-works/pi/issues/4916) | **Collapse file read output to single line** | CLI verbosity is a daily friction point; this setting mirrors the existing "hide thinking" feature and reduces scroll fatigue during long sessions | 19 comments, actively discussed UX tradeoffs |
| [#2870](https://github.com/earendil-works/pi/issues/2870) | **Follow XDG Base Directory** | Resolves years of Linux home directory clutter; critical for dotfiles hygiene and enterprise environments | 26 👍, strong consensus, finally closed |
| [#4897](https://github.com/earendil-works/pi/issues/4897) | **RPC mode: "write ENOBUFS" crash** | Breaks JSONL protocol reliability for IDE integrations and headless automation; high-volume stdout streaming is core to Pi's agent architecture | 13 comments, spawned PR #4950 investigation |
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex hangs on "Working..."** | Zero-usage aborted turns waste tokens and break flow; suspected provider-side issue but needs client-side resilience | 9 comments, "possibly-openclaw-clanker" tag |
| [#4046](https://github.com/earendil-works/pi/issues/4046) | **Compaction deletes everything** | Data loss severity; session compaction is supposed to preserve context, not destroy it | 8 comments, closed as weekend fix |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | **Session folder collision** | Path sanitization bug causes distinct projects to share state (`/a/b/c/d` ↔ `/a-b/c-d`); subtle but correctness-breaking | 7 comments, still open awaiting fix |
| [#4946](https://github.com/earendil-works/pi/issues/4946) | **TUI crash on over-width tool output** | Terminal width edge case causes hard crashes; affects split terminals and narrow windows | 6 comments, same-day PR #4944 fix |
| [#4879](https://github.com/earendil-works/pi/issues/4879) | **Expose promptGuidelines on ToolInfo** | Extension ecosystem needs runtime access to tool metadata for dynamic prompt construction | 6 comments, open, small API surface change |
| [#4687](https://github.com/earendil-works/pi/issues/4687) | **Accessibility: Screen reader support** | ASCII art borders create noise for assistive tech; inclusivity gap in TUI design | 5 comments, broader a11y concern raised |
| [#4707](https://github.com/earendil-works/pi/issues/4707) | **Agent hangs on 429 rate limits** | Undici fetch regression causes indefinite "Working" state; provider errors should always surface | 4 comments, 3 👍, linked to PR #4759 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#4950](https://github.com/earendil-works/pi/pull/4950) | **fix(rpc): backpressure retry abort** | Attempted backpressure fix for #4897; reverted due to breaking compatibility with non-awaitable interfaces. Mitsuhiko notes need for deeper investigation into async boundaries | Closed, needs redesign |
| [#4873](https://github.com/earendil-works/pi/pull/4873) | **fix(coding-agent): clean up path handling** | Comprehensive path joining audit; fixes cross-device issues and establishes consistency across packages. Addresses #4780 | Closed, merged |
| [#4651](https://github.com/earendil-works/pi/pull/4651) | **feat(coding-agent): fetch portable git bash on Windows** | Auto-downloads git bash (~350MB) to `~/.pi` like existing rg/find tooling; tradeoff between convenience and disk usage under evaluation | Open, draft |
| [#3795](https://github.com/earendil-works/pi/pull/3795) | **Properly track fromId in branch_summary events** | Fixes documentation/implementation mismatch in session branch metadata; critical for correct session replay and merge logic | Open, awaiting review |
| [#4911](https://github.com/earendil-works/pi/pull/4911) | **feat(ai): add Codex device code login** | OAuth device flow for Codex, adding secondary login screen; closes #3424 | Open, feature-complete |
| [#4926](https://github.com/earendil-works/pi/pull/4926) | **Add Alibaba DashScope provider with Qwen 3.7 Max** | First-class provider for Bailian platform with deep thinking controls (`enable_thinking`, `thinking_budget`) and reasoning stream support | Open, new provider expansion |
| [#4954](https://github.com/earendil-works/pi/pull/4954) | **feat(coding-agent): expose getToolDefinition to command context** | Enables `/tool` command extension for manual tool invocation with schema-driven UI; improves tool authoring workflow | Open, extensibility focus |
| [#4759](https://github.com/earendil-works/pi/pull/4759) | **fix(coding-agent): configure HTTP idle timeout** | Makes timeout configurable, defaults to 5min; defensive fix for #4707's hang behavior | Closed, merged |
| [#4952](https://github.com/earendil-works/pi/pull/4952) | **refactor(agent): remove duplicate stream finalization** | Eliminates double `done`/`error` handling in `streamAssistantResponse()`; reduces race condition surface | Closed, merged |
| [#4939](https://github.com/earendil-works/pi/pull/4939) | **Guard pre-prompt compaction continue() on assistant tails** | Fixes crash `Cannot continue from message role: assistant` by preventing invalid continuation after compaction; shared helper for both paths | Closed, merged |

---

## Feature Request Trends

1. **Provider-native tool execution** — [#4955](https://github.com/earendil-works/pi/issues/4955) requests first-class support for provider-hosted tools (e.g., OpenAI's built-in tools) alongside local execution, reflecting Pi's need to bridge local and cloud agent paradigms.

2. **Custom/freeform tool shapes in `packages/ai`** — [#4948](https://github.com/earendil-works/pi/issues/4948) pushes beyond JSON-schema function tools toward raw-string/custom tool definitions for provider-specific capabilities.

3. **Settings UI modernization** — [#4949](https://github.com/earendil-works/pi/issues/4949) proposes tabbed settings to exploit terminal width, part of broader TUX polish requests.

4. **Expanded terminal graphics protocol detection** — [#4947](https://github.com/earendil-works/pi/issues/4947) wants Kitty graphics detection beyond `TERM` string heuristics, improving image rendering reliability.

5. **Multi-environment sandboxing** — [#4938](https://github.com/earendil-works/pi/issues/4938) asks for pluggable virtual filesystems and execution sandboxes (Cloudflare Workers, etc.), signaling demand for Pi as an embeddable agent kernel.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **State management fragility** | Session collisions (#4877), compaction data loss (#4046), auth lock staleness (#4919) | High — core reliability |
| **RPC/CLI process lifecycle** | ENOBUFS crashes (#4897), zombie child detection (#4764), main() promise leaks (#4942) | High — automation blocker |
| **Provider error handling gaps** | 429 hangs (#4707), context overflow misdetection (#4943), "Working..." stalls (#4945) | High — user trust erosion |
| **TUI rendering edge cases** | Over-width crashes (#4946), URL hyphen-break (#4923), newline binding failures (#4406, #4918) | Medium — daily friction |
| **Configuration discoverability** | `PI_CONFIG_DIR` partial respect (#2390), `modelOverrides` footer ignore (#4841), `minimumReleaseAge` confusion (#4929) | Medium — config sprawl |
| **Windows tooling gaps** | Missing git bash automation (#4651) | Low — platform parity |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-25

## 1. Today's Highlights

The v0.16.1 nightly release landed with a critical build fix for stale TypeScript outputs, while the team executed a coordinated **F5 release chain** for the v0.16-alpha scope freeze—merging PR 27 (known limits + SDK token fallback) and pushing PR 30a (local launch templates) as the next step toward production-ready `qwen serve`. Community energy is concentrated on **Mode B daemon stability**, **token consumption visibility**, and **cross-client sync reliability** in multi-user deployments.

---

## 2. Releases

**[v0.16.1-nightly.20260524.84f408017](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260524.84f408017)**
- **fix(build)**: Cleans stale outputs before `tsc --build` to prevent TS5055 errors — resolves incremental compilation failures in watch/CI modes ([PR #4453](https://github.com/QwenLM/qwen-code/pull/4453) by @doudouOUC)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | **Mode B feature-priority roadmap toward v0.16 production-ready** | The canonical tracking issue for `qwen serve` stabilization; defines the F5 release chain (PR 27→30a→28→31) and scope freeze criteria. 38 comments indicate intense design negotiation around "text-only chat / coding with local-only deployment" as the alpha boundary. | High engagement; author @doudouOUC driving consensus on staged deliverables |
| [#4276](https://github.com/QwenLM/qwen-code/issues/4276) | **OOM crash with GC pressure at ~4GB heap** | Production blocker for long-running sessions; V8 scavenge logs show memory not releasing under sustained load. Suggests leak in streaming or context retention path. | 8 comments, no resolution path yet; needs memory profiling data |
| [#4421](https://github.com/QwenLM/qwen-code/issues/4421) | **Local-first diagnostics framework (ring buffer + diagnostic ID + /bug collect)** | Addresses the "can't reproduce" support burden with privacy-preserving design — explicit user consent, no auto-upload, sensitive data filtering. Fills a gap between zero telemetry and full OpenTelemetry. | 3 comments; @yiliang114 proposing concrete architecture; aligns with growing trust/transparency demands |
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) | **Daily token consumption statistics** | User shocked by 30M tokens in single session; exposes complete opacity in current usage tracking. Revenue/cost management critical for enterprise adoption. | 2 comments; urgency validated by same-day PR attempt (#4480, now closed) |
| [#4481](https://github.com/QwenLM/qwen-code/issues/4481) | **English-only instruction ignored; model rewrites identically** | Instruction-following regression or system prompt override issue. "Rewrite in English only" produces same output, suggesting prompt parsing or grounding failure. | 1 comment; needs-reproduction label applied |
| [#4475](https://github.com/QwenLM/qwen-code/issues/4475) | **AUTO mode telemetry and classifier parity** | Safety-critical follow-up to recent AUTO mode alignment work. Missing fleet-level visibility into denial patterns limits operational confidence in classifier behavior. | 1 comment; linked to active PR #4476 |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#4473](https://github.com/QwenLM/qwen-code/pull/4473) | **v0.16-alpha known limits + SDK `QWEN_SERVER_TOKEN` env fallback** | First F5 chain PR: documents alpha constraints; adds env fallback for server token to reduce config friction. **Merged** 2026-05-24 15:57Z. | ✅ Closed |
| [#4483](https://github.com/QwenLM/qwen-code/pull/4483) | **Local launch templates for v0.16-alpha (PR 30a)** | Second F5 chain PR: operational templates for self-hosted deployment. Depends on PR 27 merge. | Open |
| [#4472](https://github.com/QwenLM/qwen-code/pull/4472) | **ACP Streamable HTTP transport at `/acp`** | Implements emerging [RFD #721](https://github.com/agentclientprotocol/agent-client-protocol/pull/721) standard as second northbound transport alongside REST+SSE. Positions Qwen Code for MCP/ACP ecosystem interoperability. | Open, draft |
| [#4477](https://github.com/QwenLM/qwen-code/pull/4477) | **Live per-agent progress display** | Replaces collapsed `Agent × N` with individual agent tracking for `/review` and other fan-out commands. Critical UX improvement for multi-minute parallel operations. | Open |
| [#4484](https://github.com/QwenLM/qwen-code/pull/4484) | **Cross-client real-time sync completeness (5 fixes)** | Closes bridge-layer gaps where one client's actions didn't propagate to SSE-subscribed peers. Fixes `user_message_chunk` echo, `tool_call_batch` broadcast, and 3 other mechanical issues in Mode B. | Open |
| [#4476](https://github.com/QwenLM/qwen-code/pull/4476) | **AUTO mode denial observability and caps** | Structured reason boundaries, `PermissionDenied` hook for classifier blocks, cumulative denial cap beyond existing consecutive caps. Safety infrastructure for production AUTO mode. | Open |
| [#4390](https://github.com/QwenLM/qwen-code/pull/4390) | **W3C traceparent + first-party-scoped session ID propagation** | Telemetry header propagation with differential privacy defaults: traceparent off by default, session ID scoped to first-party only. Addresses #4384, sub-issue of #3731. | Open, on-hold |
| [#4359](https://github.com/QwenLM/qwen-code/pull/4359) | **Preflight-triage AI review + PR compliance gates** | `pr-gate.yml` for template/size checks; `qwen-code-pr-review` for AI-assisted triage. Infrastructure for maintainer scalability. | Open, oversized-ok |
| [#4482](https://github.com/QwenLM/qwen-code/pull/4482) | **LogToSpan bridge error info and TUI handling** | Fixes empty error messages in OTLP log bridging (e.g., Alibaba Cloud ARMS); improves TUI rendering when backend lacks native log support. | Open |
| [#4332](https://github.com/QwenLM/qwen-code/pull/4332) | **Session-scoped `/model` switches** | Prevents accidental global model changes; adds `/model --default` for explicit persistence. Fixes surprising UX where dialog selection mutated settings. | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Token consumption visibility** | #4479, #4480 (same-day PR attempt) | Demand acute; needs product decision on aggregation scope (session vs. daily vs. project) |
| **Local-first diagnostics / privacy-preserving telemetry** | #4421, #4475, #4390 | Architecture emerging; ring buffer + explicit consent pattern gaining traction |
| **Mode B / `qwen serve` production hardening** | #4175, #4483, #4484, #4472 | In active execution via F5 chain; alpha freeze in progress |
| **Multi-channel expansion** | #4379 (Feishu/Lark), #4464/#4465 (Weixin fixes) | Weixin maturing; Feishu adds enterprise China market coverage |
| **Hook lifecycle extensibility** | #4377 (prompt expansion hooks), #4454 (post-tool-batch hooks) | Platformization trend: allowing user/enterprise customization points |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Memory instability in long sessions** | #4276 (OOM at 4GB+), no clear workaround | 🔴 High — production blocker |
| **Token cost opacity** | #4479 (30M surprise), #4480 closed without merge | 🔴 High — financial/operational risk |
| **Cross-client sync reliability** | #4484 (5 gaps found in audit), #4481 (possible related?) | 🟡 Medium — affects multi-user Mode B credibility |
| **Build toolchain fragility** | #4453 (TS5055 stale outputs), nightly release required | 🟡 Medium — CI/dev experience |
| **Model instruction adherence** | #4481 (English-only ignored) | 🟡 Medium — quality/regression concern |
| **AUTO mode operational blindness** | #4475, #4476 | 🟡 Medium — safety systems need observability to be trusted |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-05-24.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-25

> **Note:** The project has been renamed to **CodeWhale** as of v0.8.42-v0.8.44. Legacy `deepseek`/`deepseek-tui` binaries remain as deprecation shims until v0.9.0.

---

## 1. Today's Highlights

The project completed its rebrand to **CodeWhale** with three rapid-fire releases (v0.8.42–v0.8.44), shipping deprecation shims for backward compatibility while clearing the path for v0.9.0. Maintainer activity surged with 11 new issues opened in 24 hours targeting v0.8.45 milestones, including multi-agent orchestration, whale-themed agent naming, and provider profile registries. Community concern is elevated around migration safety—users are asking whether sessions and skills survive the rename.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **v0.8.44** | Rebrand to CodeWhale; legacy `deepseek`/`deepseek-tui` binaries print deprecation warning and forward to `codewhale`/`codewhale-tui`; removal scheduled for v0.9.0. [See docs/REBRAND.md](https://github.com/Hmbown/CodeWhale) |
| **v0.8.43** | Identical rebrand changes |
| **v0.8.42** | Identical rebrand changes |

The rapid patch sequence suggests release-gate fixes; [PR #2030](https://github.com/Hmbown/CodeWhale/pull/2030) confirms v0.8.44 metadata was repaired post-release.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1969](https://github.com/Hmbown/CodeWhale/issues/1969) | **Migration: Are sessions and skills preserved after rebrand?** | Critical user concern; no clear migration path documented in `REBRAND.md` for manual directory workflows | 7 comments, Chinese-speaking user base actively seeking clarity |
| [#2007](https://github.com/Hmbown/CodeWhale/issues/2007) | **Multi-agent orchestration surface ("whale-accurate" coordinated runs)** | Replaces "School-mode" with bounded parallel workers, role assignment, disagreement reconciliation—core v0.8.44+ architecture | 4 comments, maintainer-authored roadmap item |
| [#1806](https://github.com/Hmbown/CodeWhale/issues/1806) | **Sub-agent 120s API timeout renders `agent_open` unusable** | Breaks advertised parallel task offload; 5 identical failures on real 280-line document workload | 3 comments, Windows user, no maintainer response yet |
| [#1889](https://github.com/Hmbown/CodeWhale/issues/1889) | **Slash command receipts via PEEK continuity layer** | Makes `/relay`, `/context`, `/memory` etc. durable across sessions, agents, and surfaces—foundational for long-running work | 3 comments, deep infrastructure work |
| [#1934](https://github.com/Hmbown/CodeWhale/issues/1934) | **How to copy previous command?** | UX friction in history navigation; suggests discoverability gap | 3 comments, simple ask getting attention |
| [#1676](https://github.com/Hmbown/CodeWhale/issues/1676) | **"Dual" mode: Pro for reasoning + Flash for execution** | ~6× cost reduction proposal with quality preservation; addresses token economics directly | 2 comments, well-specified community proposal |
| [#2009](https://github.com/Hmbown/CodeWhale/issues/2009) | **Yield control during background work (Claude Code-style)** | Closed; enables TUI usability during long shell commands/sub-agents—competitive parity feature | 2 comments, fast maintainer resolution |
| [#1982](https://github.com/Hmbown/CodeWhale/issues/1982) | **Workbench loop: close delegation→integration→verification visually** | UI coherence gap in v0.8.43 prep; parent delegates but UI doesn't show closed loop | 2 comments, maintainer quality gate |
| [#1978](https://github.com/Hmbown/CodeWhale/issues/1978) | **ZenMux/OpenRouter-compatible provider support with reasoning+cache parsing** | Feature parity matrix shows gaps in reasoning extraction and cache reporting across providers | 2 comments, detailed testing data provided |
| [#2010](https://github.com/Hmbown/CodeWhale/issues/2010) | **Session artifact hygiene: auto-prune, no repo-local JSON buildup** | P0 for v0.8.44; hundreds of `session_*.json` files pollute workspaces despite gitignore | 2 comments, maintainer-flagged safety issue |

---

## 4. Key PR Progress

| # | Title | Feature/Fix | Status |
|---|-------|-----------|--------|
| [#2035](https://github.com/Hmbown/CodeWhale/pull/2035) | **Cancellable `list_dir` with timeout** | Moves blocking `fs::read_dir` to `tokio::spawn_blocking` with `CancellationToken`; control-plane workstream for v0.8.45 | 🟢 Open |
| [#1848](https://github.com/Hmbown/CodeWhale/pull/1848) | **ShellDispatcher, ExternalTool wrappers, pluggable tool registry** | Shell-agnostic execution + git/gh/rustc wrappers + plugin architecture; supersedes #2008, #2031 | 🟢 Open |
| [#1910](https://github.com/Hmbown/CodeWhale/pull/1910) | **Suppress Windows CLI logging leak (missing commit from #1776)** | Critical Windows TUI fix; second commit was never merged, causing `stderr` to leak into alt-screen | 🟢 Open |
| [#2020](https://github.com/Hmbown/CodeWhale/pull/2020) | **Handle CR in MCP SSE fields** | Fixes endpoint discovery with mixed CRLF/LF; regression coverage included | 🟢 Open |
| [#1992](https://github.com/Hmbown/CodeWhale/pull/1992) | **Upgrade `portable-pty` to 0.9 for LoongArch64** | Unblocks `loongarch64` builds via `nix` ioctl support; dependency-only change | 🟢 Open |
| [#1967](https://github.com/Hmbown/CodeWhale/pull/1967) | **Configurable DeepSeek base URL in `/config`** | Treats `base_url` as persisted-only setting with restart requirement; avoids hot-reload complexity | 🟢 Open |
| [#1908](https://github.com/Hmbown/CodeWhale/pull/1908) | **Parse YAML block scalars in `SKILL.md` frontmatter** | Fixes `>`/`|` multi-line descriptions being stored as literal indicator character | 🟢 Open |
| [#611](https://github.com/Hmbown/CodeWhale/pull/611) | **`/pin` and `/unpin` for resident file context** | Cache-maximal file retention across turns; community contribution | 🟢 Open |
| [#1843](https://github.com/Hmbown/CodeWhale/pull/1843) | **English thinking when hidden** | Fixes `## Language` rule forcing Chinese reasoning even when `show_thinking` is disabled | 🟢 Open |
| [#2030](https://github.com/Hmbown/CodeWhale/pull/2030) | **Repair v0.8.44 release gates** | Stops auto-opening session picker on plain `codewhale` startup; preserves explicit resume paths | 🔴 Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-agent orchestration UX** | #2007, #1981, #2016, #2024, #1982 | 🔥 High — whale-themed naming, readable roles, delegation routing, visual workbench loops; core v0.8.45 theme |
| **Provider ecosystem flexibility** | #1978, #1967, #1919, #2017 | 🔥 High — OpenRouter, ZenMux, custom endpoints, open-weight model family profiles |
| **Session lifecycle & continuity** | #1889, #2010, #2021, #2022, #2032 | High — PEEK-backed receipts, artifact hygiene, context capping, failure classification |
| **Cost/performance optimization** | #1676, #1551, #1735 | Moderate — dual-model routing, API balance visibility, statusline customization |
| **Platform parity (Windows + niche arch)** | #1909, #1945, #1992, #1987 | Moderate — logging leaks, LoongArch64, NSIS installer |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|-----------|-----------|----------------------|
| **Rebrand migration uncertainty** | 🚨 Critical | #1969 — users fear session/skill loss; documentation gap on manual directory workflows |
| **Windows TUI stability** | High | #1909, #1910, #1904, #1994 — logging leaks into alt-screen, flaky async tests, CI timing issues |
| **Sub-agent reliability at scale** | High | #1806 — 120s timeout breaks advertised parallel offload; no maintainer engagement yet |
| **MCP connection flakiness** | Moderate | #1922, #2020 — latency, failures, CR handling in SSE |
| **History/clipboard UX friction** | Moderate | #1934, #1911 — copying commands, restoring cleared composer drafts |
| **Custom endpoint configurability** | Moderate | #1919, #1967, #1873 — users locked to official API, path auto-completion rigid |

---

*Digest compiled from github.com/Hmbown/CodeWhale (formerly DeepSeek-TUI) activity 2026-05-24.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*