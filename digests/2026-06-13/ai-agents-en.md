# OpenClaw Ecosystem Digest 2026-06-13

> Issues: 500 | PRs: 489 | Projects covered: 13 | Generated: 2026-06-13 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the OpenClaw project digest for 2026-06-13.

---

### OpenClaw Project Digest: 2026-06-13

#### 1. Today's Overview
Project activity remains at an extremely high, sustainable level, with **500 updated issues** and **489 updated PRs** in the last 24 hours. This indicates a very large and engaged community in a highly active development cycle. Security hardening is the dominant theme of the latest releases, while maintainers are grappling with a significant volume of high-severity bugs related to session state management, message delivery, and memory system stability.

#### 2. Releases
Two new patch versions were released today, **v2026.6.6** (stable) and **v2026.6.6-beta.2**. The release highlights for both are identical, indicating that the beta candidate was promoted to stable.

- **Highlights (v2026.6.6 & v2026.6.6-beta.2):** This release is a comprehensive security patch. It substantially tightens boundaries across a wide range of attack surfaces and features. Specific areas addressed include:
    - **Transcripts:** Stricter access controls.
    - **Sandbox Binds & Host Environment Inheritance:** Reduces risk of privilege escalation escapes.
    - **MCP stdio:** Hardened the Model Context Protocol stdio transport.
    - **Codex HTTP Access:** Tightened API access controls for the Codex agent.
    - **Native Search Policy:** Refined restrictions on search capabilities.
    - **Elevated Sender Checks & ACP Bypasses:** Fixed vulnerabilities related to agent communication protocol (ACP) for deleted agents.
    - **Loopback Tools & Third-Party Integrations (Discord, Teams):** Moderate improvements for Discord moderation and Teams group actions to prevent abuse.

#### 3. Project Progress
Today saw 129 PRs merged or closed, alongside 360 still open. Key advances and fixes include:

- **CI & Quality Assurance:** A significant wave of work focused on the QA scorecard and validation pipeline.
    - **PR #92558:** Simplified the QA scorecard mapping shape.
    - **PR #92550:** Folded Telegram RTT sampling into live QA evidence, streamlining performance testing.
    - **PR #91587:** Added mapped QA run profiles for `smoke-ci` and `release` cycles.
    - **PR #92555:** Gated stable releases on Windows companion assets, ensuring build pipeline integrity.

- **Platform & Integration Fixes:**
    - **PR #92552:** Fixed iOS "stale" gateway reconnection logic.
    - **PR #84082 (closed):** Fixed a bug where `<blockquote expandable>` tags were being stripped in Telegram HTML output.

- **Bug Fixes & Security:**
    - **PR #92086:** Added a new "Security Matrix" runtime-fact audit model, a preventative security measure for evaluating actor permissions and policy compliance.

#### 4. Community Hot Topics
The community is deeply engaged in discussions about security, session management, and feature gaps. The most active issues highlight critical UX problems and requests for enhanced control.

1.  **(#25592, Diamond Lobster): Text between tool calls leaks to messaging channels.**
    - [Link](openclaw/openclaw Issue #25592)
    - **Analysis:** The most commented-on issue. Users are intensely frustrated that internal agent processing text (error messages, acknowledgments) is sent to channels like Slack as visible messages. This is a severe UX flaw and potential information leak.

2.  **(#9443, Diamond Lobster): Request: Prebuilt Android APK releases.**
    - [Link](openclaw/openclaw Issue #9443)
    - **Analysis:** A long-standing, high-demanded request. The absence of pre-built APKs is a significant barrier to entry for mobile users, forcing them to compile from source.

3.  **(#32473, Diamond Lobster): Control UI requires HTTPS/localhost.**
    - [Link](openclaw/openclaw Issue #32473)
    - **Analysis:** A significant regression for users deploying on VPS/Docker setups. The control UI is now inaccessible without HTTPS, creating a hard block for many self-hosters. The high number of upvotes (5) signals a widespread pain point.

4.  **(#18160, Diamond Lobster): Direct Exec Mode for Cron Jobs.**
    - [Link](openclaw/openclaw Issue #18160)
    - **Analysis:** A highly requested feature (11 upvotes). Users find the current cron system, which forces LLM interpretation of every command, to be unreliable and wasteful for simple automated tasks.

5.  **(#57326, Diamond Lobster): CLI-backed helper paths bypass `runCliAgent()`.**
    - [Link](openclaw/openclaw Issue #57326)
    - **Analysis:** A subtle but critical regression where CLI-based models' helper functions bypass the intended dispatch system, potentially breaking model-specific logic and routing.

#### 5. Bugs & Stability
Today's data reveals several critical stability and regression issues, many of which have open fix PRs.

- **Critical (P0) - Memory Leak (#91588, Silver Shellfish).**
    - [Link](openclaw/openclaw Issue #91588)
    - RSS grows from 350MB to 15.5GB over days, leading to OOM kills and restart cycles. **No fix PR linked.**

- **High (P1) - Memory Search Broken (#91778, Platinum Hermit).**
    - [Link](openclaw/openclaw Issue #91778)
    - Memory search (vector index) has been completely broken since v2026.6.1. This is a "P0" experience for users relying on persistent memory. **No fix PR linked.**

- **High (P1) - `exec` Tool Ignores `env` Variables (#31583, Diamond Lobster).**
    - [Link](openclaw/openclaw Issue #31583)
    - A regression where environment variables configured for skills are not passed to `exec` tool subprocesses. This breaks secret injection workflows.

- **High (P1) - Duplicate Message Content (#88951, Silver Shellfish).**
    - [Link](openclaw/openclaw Issue #88951)
    - A recent regression (post v2026.5.4) causing messages to be duplicated 2-4 times. **No fix PR linked.**

- **Medium (P1) - `exec` Tool Bare Metal Approval Path Bug (#29736, Diamond Lobster).**
    - [Link](openclaw/openclaw Issue #29736)
    - `exec-approvals.json` incorrectly writes to `~/.openclaw` instead of the configured state root. **No fix PR linked.**

#### 6. Feature Requests & Roadmap Signals
The community is requesting enhanced control and more sophisticated agent operations.

- **Advanced Orchestration:** The volume and popularity of requests like **"Post-subagent completion extension hook" (#22358)**, **"Direct Exec Mode for Cron Jobs" (#18160)**, and **"announceTarget option for sub-agent completion" (#27445)** all point to a strong desire for more robust, programmatic agent orchestration and workflow automation, moving beyond simple "chat" interactions.

- **Plugin System Expansion:** Requests for **"Pre-response enforcement hooks" (#13583)** and **"Expose before_tool_call/after_tool_call in hooks system" (#13364)** signal a need for a more powerful and secure plugin ecosystem. The community wants to write code that enforces rules and intercepts processes, not just suggest them via prompts.

- **Next Version Prediction:** Given the community demand and the presence of an open PR, **PR #88815 (Channel Echo / Session Pinning)** is a strong candidate for inclusion in a future release. This feature would allow a session to mirror its turns to other threads, enabling powerful multi-channel coordination.

#### 7. User Feedback Summary
- **Pain Points (Active Frustration):**
    - **Broken Core Features:** Users who upgraded to v2026.6.x are reporting that fundamental features like `memory_search` are completely broken (#91778), causing immediate workflow disruption.
    - **Non-Standard Deployments:** Users on VPS/Docker (#32473), WSL2 (#47975), and Windows (#84644) are reporting significant, sometimes blocking, regressions or incompatibilities.
    - **Loss of Control:** The inability to enforce "must call tool X before responding" (#13583) or set up "denylist for exec-approvals" (#6615) is a source of insecurity and dissatisfaction for power users.

- **Use Cases & Needs:**
    - **Programmatic Automation:** Users are trying to use OpenClaw as a backend for automated workflows (cron jobs, webhooks) but are hitting reliability and latency issues (#18160, #11665).
    - **Trust & Security:** Users are increasingly concerned about memory poisoning (#7707), secret management (#13610), and preventing agents from leaking internal processing text (#25592).
    - **Mobility:** The push for a prebuilt Android APK (#9443) underscores a strong unmet need for mobile access.

#### 8. Backlog Watch
Several high-importance and long-standing issues remain unaddressed by maintainers, representing growing risk to project health and user retention.

- **Issue #9443 (Prebuilt Android APK):** Created on **2026-02-05** (over 4 months old). Despite 25 comments and 2 upvotes, there is no maintainer decision or fix PR. This is a significant barrier to mobile adoption.

- **Issue #7707 (Memory Trust Tagging):** Created on **2026-02-03** (over 4 months old). It requires a security review and a product decision. As memory becomes more critical, this vulnerability to memory poisoning becomes a larger liability.

- **Issue #13610 (Native Secrets Management):** Created on **2026-02-10**. It requires a security review. The current practice of storing plaintext secrets in `openclaw.json` is a glaring security gap that becomes more dangerous as OpenClaw is deployed in more production environments.

- **Issue #40418 (Automated Session Memory Preservation):** Created on **2026-03-09** (3 months old). Requires a security review and product decision. The current state where a `/new` command wipes all context is a pain point for users who want continuous, learning interactions.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digests.

---

### AI Agent Ecosystem Cross-Project Report: 2026-06-13

#### 1. Ecosystem Overview
The personal AI assistant and agent open-source landscape is currently characterized by a high-volume, post-release stabilization and rapid feature iteration cycle. Projects are intensely focused on hardening security boundaries, improving context management, and expanding multi-platform delivery (e.g., Telegram, Discord, Slack). A clear bifurcation is emerging between "core reference" projects (e.g., OpenClaw) that prioritize security and model communication protocols, and more specialized tools (e.g., PicoClaw, NullClaw) that target specific runtimes or developer workflows. The ecosystem shows strong community engagement with a focus on reliability and production readiness, as evidenced by the high volume of bug reports and fix PRs across all major projects.

#### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status (24h) | Activity Category |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 489 | v2026.6.6 (Stable + Beta) | Extremely High |
| **Hermes Agent** | 50 | 50 | None | Very High |
| **IronClaw** | 50 | 50 | None | Very High |
| **CoPaw** | 23 | 27 | v1.1.12b1 (Pre-release) | High |
| **ZeroClaw** | 14 | 35 | None (v0.8.0 ongoing stabilization) | High |
| **NanoBot** | 6 | 30 | None | High |
| **LobsterAI** | 1 | 17 | None | Moderate |
| **PicoClaw** | 6 | 14 | v0.2.9-nightly | Moderate |
| **NullClaw** | 1 | 3 | None | Low |
| **Moltis** | 3 | 1 | None | Low |
| **TinyClaw** | 0 | 0 | None | Inactive |
| **ZeptoClaw** | 0 | 0 | None | Inactive |
| **NanoClaw** | 5 | 9 | None | Moderate (Feature dev) |

#### 3. OpenClaw's Position
OpenClaw maintains its position as the clear **ecosystem reference and most mature framework**, defining standards that others follow. Its key advantages include:
- **Community & Scale**: An order of magnitude higher activity than any peer (500 issues/489 PRs vs. <100 for others), indicating the largest and most engaged developer ecosystem.
- **Security Leadership**: The v2026.6.6 release focused on comprehensive security hardening (transcripts, sandbox binds, MCP, ACP bypasses), setting a benchmark for the industry.
- **Architectural Depth**: It is the only project discussing advanced orchestration features like "Security Matrix" audits (`#92086`) and "Agent Communication Protocol (ACP)" fixes, highlighting a more complex and robust underlying architecture.
- **Primary Risk**: While it leads in activity, it also grapples with a correspondingly high volume of **critical stability bugs** (memory leaks, broken memory search, silent message leaks) that can degrade user trust.

#### 4. Shared Technical Focus Areas
Several requirements are emerging across multiple projects, indicating shared pain points and technical trends:

- **Memory & Context Management (PROBLEM)**:
    - **OpenClaw**: Memory search broken (#91778); memory leak (#91588).
    - **NanoBot**: Short-term memory loss (#4044); context consolidation wipes assistant messages (#4307).
    - **CoPaw**: Empty memory search tool results (#5098, fixed).
    - **Hermes Agent**: Context compression pollution (#38389, fixed).
    - **NullClaw**: Incomplete answers with local models (Issue #952).

- **Session/State Persistence (PROBLEM)**:
    - **OpenClaw**: Control UI requires HTTPS (#32473); Cron job inefficiencies (#18160).
    - **NanoClaw**: Silent message drops on rapid turns (#2506); budget-exhausted drops (#2751).
    - **Hermes Agent**: State.db drops messages on interrupt (#43936).
    - **ZeroClaw**: Gateway session legacy path confusion (#7541); subagent `cwd` in ACP (#7263).

- **Security Hardening (SOLUTION)**:
    - **OpenClaw**: Comprehensive patch release (v2026.6.6) covering transcripts, sandbox binds, MCP, ACP.
    - **Hermes Agent**: Blocking writes to shell startup files (#45293); smart approval prompt injection fix (#21426).
    - **NanoClaw**: Container capability dropping (#2748); npm age-gating (#2749).
    - **Moltis**: Request for Kubernetes-native sandbox (#1118).

- **Multi-Platform Reliability (PROBLEM/NEED)**:
    - **PicoClaw**: Telegram forum reply misrouting (#3110).
    - **Hermes Agent**: Slack bot messages dropped (#30091); Telegram video ignored (#41366).
    - **ZeroClaw**: `ask_user` fails in WebSocket sessions (#7542); streaming card messages for Chinese platforms (#7531).
    - **NullClaw**: Discord gateway disconnection (#953).

#### 5. Differentiation Analysis

| Project | Primary Focus / Strength | Target User | Key Technical Differentiator |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Reference agent, security, protocol standards | Advanced developers, integrators | Largest ecosystem; MCP/ACP protocol leadership; security benchmarks. |
| **Hermes Agent** | Cross-platform, desktop, context management | Multi-platform power users | Strong desktop experience (Tauri); active Claude Code feature adaptation. |
| **NanoBot** | Agent SDK, Python ecosystem | Python developers | Python SDK expansion (#4296); modular tool audit system (#4320). |
| **IronClaw** | Reborn architecture (Engine V2), Quality Assurance | Enterprise / high-volume deployments | "Record/replay" for deterministic CI (#4773); 22 new e2e test suites. |
| **CoPaw** | AgentScope migration, automated workflows | Automation & workflow users | Focus on scheduled tasks (#5064); migration to AgentScope 2.0 (#4727). |
| **ZeroClaw** | Post-release stabilization, new user onboarding | Small-to-medium self-hosters | Platform-specific onboarding friction (Mac/Win/Docker); high community PR volume. |
| **PicoClaw** | Lightweight, WASM, Telegram-first | Edge / IoT developers | Nightly builds; focus on Telegram forum compliance and WebSocket protocol. |
| **NanoClaw** | Container security, MCP tools, provider abstraction | Security-conscious, multi-tenant | Container capability dropping (#2748); provider capability registry (#2746). |
| **LobsterAI** | Computer Use, Voice Input, Artifacts | End-users, task management | Most focused on multimodal output; "Computer Use" MVP is a flagship feature. |
| **NullClaw / Moltis** | Stability, niche integrations | Contributors / Specific integrations | Light activity; targeted fixes (e.g., Ollama, WhatsApp, Slack). |

#### 6. Community Momentum & Maturity
The ecosystem can be divided into distinct activity tiers:

- **Tier 1: Extremely High / Core (OpenClaw)**.
    - **Status**: Rapid iteration. Launching security patches while dealing with critical, long-standing bugs. High risk of user churn due to instability.
- **Tier 2: Very High / Stabilizing & Feature-Dev (Hermes, IronClaw, CoPaw, ZeroClaw)**.
    - **Status**: In a heavy feature development and post-release stabilization phase. Focused on platform unification, multi-platform support, and quality assurance.
- **Tier 3: Moderate / Feature-Advancing (NanoBot, PicoClaw, LobsterAI, NanoClaw)**.
    - **Status**: Shipping new features (TTS, mem scaffold, Computer Use) while addressing targeted bugs. Showing healthy, sustainable growth.
- **Tier 4: Low / Maintenance (NullClaw, Moltis, TinyClaw, ZeptoClaw)**.
    - **Status**: Low engagement. The latter two are inactive, suggesting projects have been abandoned or are in a deep freeze.

#### 7. Trend Signals
- **From "Chat" to "Workflow Orchestration"**: Community demands are shifting from conversational AI to reliable programmatic backend agents. Requests for **cron jobs, scheduled tasks, and webhook integrations** are prominent across OpenClaw, CoPaw, and NanoBot, signaling a desire for autonomous, trigger-based operation.
- **The "Memory Wars" Are a Core Problem**: Every major project is fighting with context windows and memory fragmentation. This is the single biggest bottleneck for user trust and long-session utility.
- **Security is the New Feature**: Security hardening is no longer a background task. It is being shipped as a headline feature (OpenClaw v2026.6.6, Hermes #45293, NanoClaw #2748), indicating that production use-cases are driving standards.
- **Platform Fragmentation is Costly**: The ecosystem is struggling to maintain consistency across multiple chat platforms (Telegram, Discord, Slack, WeChat, etc.). Bugs related to message routing, delivery, and format are a dominant theme across all multi-platform projects.
- **Desktop is Maturing**: Projects like **Hermes Agent** and **CoPaw** are investing in desktop-specific features (system tray, i18n, build reliability), signaling a move from mobile-first to professional desktop use cases.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-13

## Today's Overview
The NanoBot project shows **high activity** over the last 24 hours, with 30 PRs updated (21 open, 9 merged/closed) and 6 issues updated (3 open, 3 closed). No new releases were published. The development cadence is robust, with multiple contributors pushing substantial feature work (audit module, TTS system, WebUI/config parity) alongside targeted bug fixes and test infrastructure. The community continues to engage around memory, context window, and tool-discipline bugs. The project appears to be in a **rapid feature development phase** with parallel stability hardening.

## Releases
**None.** No new versions were published in the reporting period.

## Project Progress
Nine PRs were merged or closed in the last 24 hours, including:

- **#4320 → #4319 / #4318 (audit module pipeline):** A new `tools.audit` configuration and `AuditTool` for agent action observability was iterated through three PRs and merged. Supports scope filtering and four transports (loguru, HTTP webhook, JSONL file, programmatic callback). Integrated into `AgentLoop` and `AgentRunSpec`. *(Author: bjoshuanoah)*
- **#4304 (fix/cron):** Cron jobs that spawn subagents now wait for spawned tasks before marking the job complete, preventing premature completion and background-task confusion. *(Author: michaelxer)*
- **#4303 (fix/mcp):** Fixed a `RuntimeError` crash in `streamableHttp` MCP server sessions caused by a cancel-scope task mismatch during reconnection. *(Author: michaelxer)*
- **#4305 (closed enhancement):** Issue requesting multiple custom provider support was closed, indicating a solution is already in progress or deferred.

Feature PRs advancing toward mainline (still open):
- **#4313 (WebUI/config parity):** Closes the gap between WebUI settings and `config.json` with new write endpoints and UI controls. *(Author: La-Volpe)*
- **#4316 (TTS system):** Multi-provider TTS (OpenAI, Groq Orpheus, ElevenLabs) with WebUI exposure and agent-facing docs. *(Author: tobrien)*
- **#4314 (config schema decoupling):** Breaks the dependency of config schema on tool runtime modules for cleaner architecture. *(Author: chengyongru)*
- **#4296 (Python SDK expansion):** Upgrades the Python SDK with richer `RunResult` metadata, stable session/runtime controls. *(Author: Re-bin)*
- **#4317 (WhatsApp mentions):** Adds sender mentions and the ability to mention other users on WhatsApp channel. *(Author: tiagosantosvdl)*

**Test infrastructure** continues to grow: #4193 (memory lifecycle harness), #3983 (blocked tool-call finish reasons), #3982 (scripted agent runner harness) all remain open, signaling a sustained investment in regression coverage.

## Community Hot Topics

- **#4044 [OPEN] "short term memory loss"** (5 comments, 3 days since last update) — The highest-comment issue. User reports that NanoBot asks a question, receives an answer, and then has no memory of having asked. Root cause analysis points to context window pressure from large system prompts (SOUL.md, USER.md, MEMORY.md). This is a **core UX frustration** around conversational continuity. [View Issue](https://github.com/HKUDS/nanobot/issues/4044)

- **#4307 [OPEN] "Post-turn consolidation wipes the agent's own delivery message"** (1 comment, created 2026-06-12) — A complementary memory bug: when `context_window_tokens` is modest (~40k), a long multi-iteration turn accumulates >100k tokens, and consolidation archives the assistant's own delivery message, losing user follow-up references. [View Issue](https://github.com/HKUDS/nanobot/issues/4307)

- **#4203 [CLOSED] "find_legal_message_start drops all messages"** (3 comments) — A logic defect in session truncation where orphaned tool results after a user message cause all prior messages to be discarded. Fixed and closed. [View Issue](https://github.com/HKUDS/nanobot/issues/4203)

**Underlying need:** Users are hitting the boundary between context window limits and conversational coherence. The community is actively pushing for more intelligent context management—cursor-based trimming (see #4044 and #4307) and orphaned-tool-result handling (#4203, #4006) are the same class of problem.

## Bugs & Stability

| Severity | Bug | Status | Fix PR Exists? |
|----------|-----|--------|----------------|
| **Critical** | **#4307** — Post-turn consolidation wipes agent's own delivery message, losing user follow-up context | Open | None yet |
| **High** | **#4309** — `/v1/chat/completions` always returns zero usage tokens (`prompt_tokens: 0`) | Open | None yet |
| **Medium** | **#4321** (in PR) — Dream cursor never advances when `dream.enabled = false`, causing prompt bloat | PR open | Yes (#4321) |
| **Medium** | **#4315** (in PR) — Malformed history.jsonl entries crash prompt/Dream reads | PR open | Yes (#4315) |
| **Medium** | **#4312** (in PR) — Malformed media attachments (string instead of array) split into per-character attachments | PR open | Yes (#4312) |
| **Low** | **#4311** (in PR) — Non-positive file pagination limits cause bad line-window calculations | PR open | Yes (#4311) |

The **#4309 bug** (zero usage tokens) is notable because it breaks observability for anyone using the OpenAI-compatible API endpoint, though it does not affect core agent operation. The **#4307 bug** is more insidious—it silently drops context that users expect to be preserved.

## Feature Requests & Roadmap Signals

- **#4305 (closed)** — "Multiple custom providers" was requested and closed. Likely to land in an upcoming release, possibly through the template-parameter mechanism suggested.
- **#4316 (TTS system)** — In active PR review; has high community value for voice-enabled agents. Likely in next minor release.
- **#4320 (Audit module)** — Merged today. Will appear in next release for observability-conscious deployments.
- **#4296 (Python SDK expansion)** — If merged, this makes NanoBot more attractive as a programmable agent framework rather than just a chat UI.

**Prediction for next version (v0.x):** The audit module, TTS support, WebUI/config parity, and multiple custom providers are the most likely additions. The overarching theme is **production readiness**—observability, configurability, and SDK ergonomics.

## User Feedback Summary

**Pain Points (explicit):**
1. **Conversational amnesia:** Users report that NanoBot forgets recent interactions within the same session (#4044), undermining the core value proposition of a personal AI assistant.
2. **Token usage opacity:** The `/v1/chat/completions` endpoint returning zero usage (#4309) frustrates users who need billing/metadata for their integrations.
3. **Context window fragility:** Under modest token limits, the consolidation system can delete critical assistant messages (#4307), causing confusion when users try to follow up.

**Satisfaction signals:**
- The rapid fix of **#4203 and #4006** (orphaned tool results) shows the team is responsive to conversation-structure bugs.
- Community PRs like **#4317 (WhatsApp mentions)** and **#4316 (TTS)** indicate active ecosystem contributions—users are building on NanoBot, not just filing complaints.

**Use cases emerging:**
- Multi-platform deployments (WhatsApp, WebUI)
- SDK-based agent development (#4296)
- Observability and compliance (audit module)

## Backlog Watch

| Issue/PR | Age (days) | Status | Concern |
|----------|------------|--------|---------|
| **#4044** — Short term memory loss | 16 | Open, 5 comments | High user pain, no fix PR yet. Needs maintainer attention. |
| **#4006** — Orphaned tool results (closed) | 18 | Closed | Already fixed, but root cause may resurface. |
| **#3982** — Scripted agent runner harness (test infra) | 20 | Open | Large test PR; risk of bit-rot if not merged soon. |
| **#3983** — Blocked tool-call finish reason coverage | 20 | Open | Companion to #3982; same risk. |
| **#4119** — Symlink workspace escape | 13 | Open | Security fix; should be prioritized. |
| **#4053** — Read-only root write protection | 15 | Open | Security fix; should be prioritized alongside #4119. |

**High-priority item for maintainers:** **Issue #4044** (memory loss) has been open for 16 days with no associated fix PR. It is the most-commented issue and represents a fundamental UX failure. **PRs #4119 and #4053** (filesystem security) should be reviewed and merged to close security gaps.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 13, 2026

## Today's Overview

Hermes Agent is in a period of **very high development velocity**, with 50 issues and 50 PRs updated in the last 24 hours. A significant portion of activity centers on **context compression pollution** (3 closed duplicates), **session persistence bugs**, and **provider-specific issues** (MiniMax, Copilot, Minimax-OAuth). The project closed 9 issues and merged/closed 14 PRs today, while 41 issues and 36 PRs remain open. **11 new issues were filed today alone** (June 12–13), indicating strong community engagement but also emergent quality concerns. No new releases were cut.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

**14 PRs were merged or closed today.** Key forward-looking changes:

### Memory & Context
- **[#45297] feat(memory): agentic PARA routing and retrieval** — Merged. LLM-driven routing replaces regex keyword matching for memory classification; adds two-step retrieval (manifest scan → LLM file selection → content return) and session-to-knowledge distillation.
- **[#45281] fix(agent): metadata flag on compression summary messages, wire-safe key** — Merged. Closes #38389 and duplicates #38391/38392 by adding an in-process `_compressed_summary: True` metadata flag so frontends can identify compression summaries without fragile content-prefix heuristics.

### Delegation & Titles
- **[#45298] feat: inject delegation context preamble** — Merged. Adds optional `delegation.context_preamble` / `delegation.context_preamble_file` config keys, injecting a preamble near the top of child agent system prompts (max 12k chars).
- **[#45296] feat(titles): language-aware session titles** — Open. Session titles now follow conversation language; optional `auxiliary.title_generation.language` pins to a specific language.

### Cron & Skills
- **[#45294] fix(cron): pass target_model to resolve_runtime_provider** — Open. Fixes cron jobs resolving runtime config from `model.default` instead of the job's actual target model.
- **[#43785] fix(skills): resolve .env via HERMES_HOME across all skills** — Merged. Skills now use `$HERMES_HOME/.env` instead of hardcoded `~/.hermes/.env`, fixing credential fallbacks in Docker.

### Infrastructure & Security
- **[#45293] feat(security): deny writes to secondary shell startup files and global git config** — Open. Inspired by Claude Code v2.1.160, blocks persistence/code-execution attacks via `~/.zshenv`, `~/.zlogin`, `~/.bash_login`, `~/.gitconfig`.
- **[#45299] fix(install.ps1): guard uv venv stderr from terminating install** — Open. Fixes Windows install script failing under PowerShell 5.1 when uv prints to stderr.
- **[#45292] docs(contributing): document repository CI checks** — Open. Adds contributor-facing notes on OSV scanning, supply-chain auditing.

## Community Hot Topics

### Most Active Issues

1. **[#7237 — Response truncated due to output length limit](https://github.com/NousResearch/hermes-agent/issues/7237)** (CLOSED)
   - **41 comments**, **5 👍**
   - Long-standing issue (April 2026) affecting CLI and gateway (Telegram/Discord/Slack) when generating long-form responses. The truncation breaks mid-stream output. **Underlying need:** Users need reliable long-form generation without arbitrary truncation, particularly for multi-platform chat where buffer limits vary.

2. **[#26689 — Accessibility improvements for blind VoiceOver users](https://github.com/NousResearch/hermes-agent/issues/26689)** (OPEN)
   - **10 comments**
   - From a totally blind macOS VoiceOver user. The report describes extremely powerful backend/agent ecosystem but UX that is "very difficult" for screen-reader users. **Underlying need:** Critical accessibility gap — this is a real user actively trying to use Hermes but encountering barriers; unaddressed risk of excluding disabled users.

3. **[#44497 — Agent generates duplicate responses to same message](https://github.com/NousResearch/hermes-agent/issues/44497)** (OPEN, P2)
   - **4 comments**
   - Agent delivers two independently generated responses to a single user message in WeChat gateway. **Underlying need:** Message deduplication and thread isolation are failing, causing confusion in multi-platform deployments.

4. **[#44976 — MiniMax-M3 nested single-element arrays collapse](https://github.com/NousResearch/hermes-agent/issues/44976)** (OPEN, P2)
   - **3 comments**
   - MiniMax-M3 provider collapses `[{"item": X}]` into `{"item": X}` in MCP tool arguments, breaking tools that expect array inputs. **Underlying need:** Provider-specific array serialization bugs break MCP tool compatibility.

### Most Active PRs

- **[#42703 — fix(dashboard): start MCP tool discovery for Desktop/Dashboard sessions](https://github.com/NousResearch/hermes-agent/pull/42703)** — Open, P2. Desktop/Dashboard mode bypasses MCP server discovery, leaving configured tools absent.
- **[#45052 — fix(desktop): support mTLS remote gateways](https://github.com/NousResearch/hermes-agent/pull/45052)** — Open, P3. Enables TLS client-certificate authentication for Desktop remote gateway connections.
- **[#38846 — feat(desktop): add multilingual i18n support with 15 languages](https://github.com/NousResearch/hermes-agent/pull/38846)** — Open, P3. Adds 15-language JSON locale system (861 keys) alongside upstream TS-based i18n skeleton (345 keys, en+zh).

## Bugs & Stability

### Critical/P1 Issues (with fix PRs)

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| [#38389 / 38391 / 38392](https://github.com/NousResearch/hermes-agent/issues/38389) | Context compression summaries injected as ordinary assistant messages, polluting visible conversation | **CLOSED** (3 duplicates) | [#45281](https://github.com/NousResearch/hermes-agent/pull/45281) — Merged |
| [#29824](https://github.com/NousResearch/hermes-agent/issues/29824) | WebUI shows context compaction block instead of latest assistant response | CLOSED | — |
| [#33256](https://github.com/NousResearch/hermes-agent/issues/33256) | Context compression summary leaks into user-visible chat output | CLOSED | — |
| [#44837](https://github.com/NousResearch/hermes-agent/issues/44837) | Session DB turn-end flush drops assistant after repair_message_sequence compacts list | CLOSED | — |
| [#23473](https://github.com/NousResearch/hermes-agent/issues/23473) | Gateway leaks VIRTUAL_ENV into subprocesses; `uv sync` bricks Hermes' own venv | **OPEN** (P1, 1 comment, since May 11) | None linked |

### High-Severity Bugs (P2, no fix PR)

| Issue | Description |
|-------|-------------|
| [#44976](https://github.com/NousResearch/hermes-agent/issues/44976) | MiniMax-M3 nested single-element arrays collapse into `{"item": X}` |
| [#43936](https://github.com/NousResearch/hermes-agent/issues/43936) | State.db drops assistant messages on interrupt; .jsonl log no longer available |
| [#41366](https://github.com/NousResearch/hermes-agent/issues/41366) | Telegram video messages cached but never exposed to AI agent |
| [#30091](https://github.com/NousResearch/hermes-agent/issues/30091) | Slack: bot-to-bot messages silently dropped even with `allow_bots=all` |
| [#44866](https://github.com/NousResearch/hermes-agent/issues/44866) | MCP OAuth polls 30s on probe failure before returning |
| [#21426](https://github.com/NousResearch/hermes-agent/issues/21425 / PR [#21426](https://github.com/NousResearch/hermes-agent/pull/21426)) | Smart approval prompt injection via interpolated command string |

### Medium-Severity Bugs (P3)

| Issue | Description |
|-------|-------------|
| [#41499](https://github.com/NousResearch/hermes-agent/issues/41499) | Apple code-signing identity breaks desktop build on macOS |
| [#41693](https://github.com/NousResearch/hermes-agent/issues/41693) | Desktop renderer crashes with `tapClientLookup: Index N out of bounds` |
| [#44964](https://github.com/NousResearch/hermes-agent/issues/44964) | `/sessions` CLI command only shows `source=cli` sessions |
| [#45029](https://github.com/NousResearch/hermes-agent/issues/45029) | `/new` does not refresh model metadata (KV cache size) |
| [#45106](https://github.com/NousResearch/hermes-agent/issues/45106) | SELinux breaks Docker Backend volume mounts |
| [#45137](https://github.com/NousResearch/hermes-agent/issues/45137) | ollama-cloud rejects bare model IDs (`deepseek-v4-flash`) |
| [#45175](https://github.com/NousResearch/hermes-agent/issues/45175) | `/voice` invisible in Telegram command menu (30-command cap) |
| [#45146](https://github.com/NousResearch/hermes-agent/issues/45146) | copilot provider fails for Copilot Business/Enterprise (404 on token exchange) |

### Duplicate/Minor
- **[#45242 / #45241](https://github.com/NousResearch/hermes-agent/issues/45242)** — `auxiliary_client.py`: unhandled `auth_type 'oauth_minimax'` breaks all auxiliary tasks for minimax-oauth users. Duplicate, closed.

### Windows-Specific Issues
- **[#17999](https://github.com/NousResearch/hermes-agent/issues/17999)** (P2, 3 comments) — Windows `read_file` tool cannot access D: drive paths; terminal tool fails basic commands. **Open since April 30** with no fix PR.

## Feature Requests & Roadmap Signals

### Likely Next-Release Features

1. **Delegation context preamble** (PR [#45298](https://github.com/NousResearch/hermes-agent/pull/45298) — Merged) — Already shipped; injection of customizable preamble into child agent system prompts.
2. **Agentic PARA routing and retrieval** (PR [#45297](https://github.com/NousResearch/hermes-agent/pull/45297) — Merged) — LLM-driven memory classification, retrieval, and session distillation.
3. **Language-aware session titles** (PR [#45296](https://github.com/NousResearch/hermes-agent/pull/45296) — Open) — High likelihood given it adapts Claude Code's `language` setting.

### Strong Community Demand

- **Accessibility (blind/VoiceOver)** — Issue [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) (10 comments) — Real user pain, but no PR exists. May be deferred unless a contributor steps up.
- **Desktop GUI improvements** — Issue [#44140](https://github.com/NousResearch/hermes-agent/issues/44140) (2 comments, 2 👍) — Auto-scroll, sidebar overlap fix, custom session groups. Likely upcoming given PR [#45273](https://github.com/NousResearch/hermes-agent/pull/45273) (worktree-aware sidebar grouping).
- **Signal adapter enhancements** — Issue [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) (1 comment) — Native quote/reply, edit, remote-delete for Signal.
- **Dependency Review gate** — Issue [#45041](https://github.com/NousResearch/hermes-agent/issues/45041) (2 comments) — Block vulnerable dependency changes via GitHub Action.
- **Multilingual i18n** — PR [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) — 15 languages, 861 keys, but sits alongside upstream skeleton; merging timeline unclear.

### Security / Hardening Signals

- **Safe mode troubleshooting flag** — PR [#45300](https://github.com/NousResearch/hermes-agent/pull/45300) — `--safe-mode` disables all customizations for isolation. Claude Code-inspired.
- **Shell/file write denial** — PR [#45293](https://github.com/NousResearch/hermes-agent/pull/45293) — Blocks writes to `.zshenv`, `.gitconfig`, etc. Claude Code v2.1.160-inspired.

## User Feedback Summary

### Pain Points

1. **Context compression pollution** — Multiple separate reports (3 duplicates closed today) confirm compression summaries injected into visible chat is a widespread, high-impact issue blocking normal conversation flow. Fix PR [#45281](https://github.com/NousResearch/hermes-agent/pull/45281) now merged.
2. **Session persistence fragility** — Assistant messages lost from `state.db` on interrupts ([#43936](https://github.com/NousResearch/hermes-agent/issues/43936)); the removed `.jsonl` fallback made this worse.
3. **Windows file access broken** — Issue [#17999](https://github.com/NousResearch/hermes-agent/issues/17999) (April 30, no fix) makes Hermes nearly unusable on Windows for file operations on non-C: drives.
4. **Provider-specific tool compatibility** — MiniMax-M3 array collapsing ([#44976](https://github.com/NousResearch/hermes-agent/issues/44976)) and Copilot Business/Enterprise 404 ([#45146](https://github.com/NousResearch/hermes-agent/issues/45146)) show provider integration quality varies.
5. **Gateway message handling** — Duplicate responses on WeChat ([#44497](https://github.com/NousResearch/hermes-agent/issues/44497)), missing Telegram video ([#41366](https://github.com/NousResearch/hermes-agent/issues/41366)), dropped Slack bot messages ([#30091](https://github.com/NousResearch/hermes-agent/issues/30091)) — multi-platform reliability is inconsistent.

### Satisfaction Signals

- Strong community contributions: 11 new issues and ~20 PRs in 24 hours from diverse users (macOS blind user, Windows users, Docker users, WeChat/Slack/Telegram users across multiple timezones).
- Active maintainer response: Key compression pollution fix merged same day; session DB flush fix PR [#45277](https://github.com/NousResearch/hermes-agent/pull/45277) open for [#43936](https://github.com/NousResearch/hermes-agent/issues/43936).
- Feature adoption from competitors (Claude Code security patches repurposed for Hermes in PRs [#45293](https://github.com/NousResearch/hermes-agent/pull/45293), [#45300](https://github.com/NousResearch/hermes-agent/pull/45300), [#45296](https://github.com/NousResearch/hermes-agent/pull/45296)) signals maintainer awareness of best practices.

## Backlog Watch

### Long-Unanswered Critical Issues

| Issue | Created | Comments | Severity | Status |
|-------|---------|----------|----------|--------|
| [#17999](https://github.com/NousResearch/hermes-agent/issues/17999) — Windows `read_file` cannot access D: drive | 2026-04-30 | 3 | P2 | **No fix PR** |
| [#23473](https://github.com/NousResearch/hermes-agent/issues/23473) — Gateway leaks VIRTUAL_ENV into subprocesses | 2026-05-11 | 1 | P1 | **No fix PR** |
| [#21426](https://github.com/NousResearch/hermes-agent/pull/21426) — Smart approval prompt injection fix | 2026-05-07 | — | P1 | **Open PR, unreviewed** |
| [#30091](https://github.com/NousResearch/hermes-agent/issues/30091) — Slack bot-to-bot messages dropped | 2026-05-21 | 2 | P2 | **No fix PR** |

### Stalled PRs

- **PR [#21426](https://github.com/NousResearch/hermes-agent/pull/21426) — fix(approval): use XML delimiters in smart approval prompt** — Open since May 7, P1 security fix. No apparent maintainer review. This prevents prompt injection in the security reviewer prompt.
- **PR [#38563](https://github.com/NousResearch/hermes-agent/pull/38563) — fix(gateway/mattermost): replace aiohttp.ClientTimeout** — Open since June 4, P3. No review.

### Accessibility Gap

- Issue [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) (macOS VoiceOver blind user, 10 comments, since May 16) — **No assignee, no PR, no maintainer response.** This is the only accessibility-related issue and represents a significant inclusion gap.

### What This Means

The project's rapid development and large community are generating a commensurate volume of issues. While maintainers are closing high-priority bugs quickly (compression pollution fixed same day), the Windows platform (non-WSL) and accessibility remain underserved. The **P1 `VIRTUAL_ENV` leak** and **P1 smart approval injection fix** have been open for over a month — these represent real security and reliability risks for users running the gateway or non-CLI modes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-13

## 1. Today's Overview
PicoClaw is in a period of **high activity**, with 6 issues updated and 14 pull requests modified in the last 24 hours. The project shipped a **nightly build (v0.2.9-nightly)** and resolved 3 PRs, including important serialization error handling fixes. Activity is concentrated around **Telegram forum compliance**, **Gemini 3.5 Flash compatibility**, **channel permission scoping**, and **WebSocket protocol maturity**. The community is contributing steadily with fresh features (Delta Chat gateway, remote agent mode) and targeted bug fixes, indicating a healthy contributor ecosystem. One issue has gone stale (token consumption bug, 8 days without resolution).

## 2. Releases
**New Release: `nightly` (v0.2.9-nightly.20260612.413d3749)**
- Automated nightly build derived from `main` — may be unstable.
- No explicit breaking changes or migration notes published.
- Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- *Recommendation for users:* Not for production use; test in isolated environments.

## 3. Project Progress
### Merged/Closed PRs (3 total)
- **#3113** — *fix(channels): check json marshal/unmarshal errors in toChannelHashes* (closed) — Silently discarded JSON serialization/deserialization errors in channel manager now raise proper errors. Stability win.
- **#3112** — *fix(tools): handle json.Marshal error in toolloop tool call arguments* (closed) — Prevents silent data loss when tool call arguments are non-serializable.
- **#2551** — *refactor: standardize channel identification and decouple name from provider type* (closed, stale) — Structural refactor enabling multiple instances of the same channel provider; improves message routing stability.

### Other Notable Activity
- **#3117** (open) — Routes media turns to image models instead of text-only fallback (fixes #3108).
- **#3118** (open) — Adds `picoclaw agent --remote ws://...` mode for remote Pico WebSocket operation.
- **#3116** (open) — Completes `turn.done` lifecycle signaling for WebSocket clients.

## 4. Community Hot Topics
### Most Active Discussions

| Issue/PR | Type | Comments | 👍 | Topic |
|----------|------|----------|----|-------|
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Issue | 2 | **2** | Explicit turn completion signal for WebSocket clients |
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Issue | 2 | 0 | Continuous token consumption with Evolution enabled |
| [#3109](https://github.com/sipeed/picoclaw/issues/3109) | Issue (closed) | 1 | 0 | Channel-level permission scoping |
| [#3114](https://github.com/sipeed/picoclaw/issues/3114) | Issue | 0 | 0 | Telegram channel permission control by conversation type |
| [#3097](https://github.com/sipeed/picoclaw/pull/3097) | PR | 0 | 0 | Shift+Enter hint in Web UI chat composer |

**Analysis:** The community is deeply focused on **channel security and permission boundaries** (#3109/#3114) and **protocol completeness** (#2984 → #3116). The request for turn completion signals (👍2) indicates real demand from external integrators building on the Pico WebSocket protocol. The Chinese-language issue #3114 duplicates #3109’s intent for Telegram specifically — signaling confusion about existing permission controls.

## 5. Bugs & Stability
### Active Bugs (Ranked by Severity)

| # | Severity | Issue | Status | Notes |
|---|----------|-------|--------|-------|
| 🔴 High | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Continuous token consumption every minute with Evolution enabled | **Stale (8 days)** | No fix PR linked; affects FreeBSD + MiniMax; not yet triaged |
| 🔴 High | [#3111](https://github.com/sipeed/picoclaw/issues/3111) | Tool execution fails with Gemini 3.5 Flash — "Missing thought_signature in schema" | Open, 0 comments | Blocks use of new Gemini model; no workaround discussed |
| 🟡 Medium | [#3110](https://github.com/sipeed/picoclaw/issues/3110) | Telegram adapter ignores `message_thread_id` — replies default to #General in forums | Open, 0 comments | Breaks functionality in Telegram Supergroup forums |
| 🟢 Low | [#3115](https://github.com/sipeed/picoclaw/pull/3115) (PR) | Inline data URL in tool output treated as real media — session history corruption | Fix PR open | Fix ready for review at #3115 |

**Fixes Available:** 
- #3116 fixes the turn completion lifecycle gap in #2984.
- #3117 fixes the media routing regression from #3108.
- #3115 fixes session history corruption from inline data URLs.
- #3112/#3113 (already merged) fix silent JSON error discards.

## 6. Feature Requests & Roadmap Signals
### Requested Features
- **Channel-level permission scoping by conversation type** ([#3109](https://github.com/sipeed/picoclaw/issues/3109), [#3114](https://github.com/sipeed/picoclaw/issues/3114)) — Distinguish dangerous operations in private vs. group vs. channel Telegram chats.
- **Explicit turn completion signal for WebSocket clients** ([#2984](https://github.com/sipeed/picoclaw/issues/2984)) — Deterministic end-of-turn event for external integrators.
- **Delta Chat gateway** ([#3063](https://github.com/sipeed/picoclaw/pull/3063)) — Adds a new communication channel for email-like messaging.
- **Remote Pico WebSocket agent mode** ([#3118](https://github.com/sipeed/picoclaw/pull/3118)) — Enables remote control of PicoClaw via WebSocket.
- **Image compression pipeline** ([#2964](https://github.com/sipeed/picoclaw/pull/2964)) — Configurable inbound image compression before model payload building.

### Roadmap Predictions (Next Release Likely Targets)
- **v0.3.0 candidate features:** Channel permission scoping, turn completion signaling, media routing fix, and serialization stability patches (all with active PRs).
- **Lower probability:** Delta Chat and NEAR AI Cloud provider may be deferred to v0.3.x or later.

## 7. User Feedback Summary
### Pain Points
- **Gemini 3.5 Flash incompatibility** (#3111): Users cannot use the newest model for tool execution — a blocker for adopters migrating to Google's latest.
- **Telegram forum reply misrouting** (#3110): Bot replies land in #General instead of the correct topic thread, significantly degrading usability in group communities.
- **Token drain with Evolution** (#3012): Unchecked token consumption erodes user trust in the Evolution feature.
- **Missing permission boundaries in group chats** (#3109/#3114): Real security concern — users worry about exposing `exec`, `write_file`, and `delete_file` in multi-user Telegram groups.

### Positive Signals
- **WebSocket protocol maturation** (#2984 → #3116): PR #3116 directly addresses a previously incomplete integration point, showing responsiveness to developer integration needs.
- **Defensive coding culture**: PRs #3112 and #3113 fixing silent error discards indicate a growing focus on reliability and debuggability — likely appreciated by power users.

## 8. Backlog Watch
### Items Needing Maintainer Attention

| Issue/PR | Age | Type | Reason for Watch |
|----------|-----|------|------------------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 8 days | Bug (stale) | High-severity token consumption bug with Evolution; no assignee, no linked fix PR. Risk of continued user dissatisfaction. |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | 16 days | PR (stale) | Image compression feature PR — significant UX/cost improvement for vision users; unmerged and inactive. |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | 23 days | PR (stale) | NEAR AI Cloud provider integration — extends model variety for privacy-minded/blockchain-adjacent users. |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | 58 days | PR (just closed) | Channel identification refactor — just merged after long staleness; watch for regression reports. |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) | 6 days | Bug fix PR | Matrix user ID `@user:server.com` parsing fix — no maintainer review yet; impacts Matrix channel users. |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) | 5 days | Bug fix PR | Evolution lock store type-assertion panic risk — no review yet. |

**Maintainer Action Recommended:** Triage #3012 (token consumption) and assign or respond to #3111 (Gemini 3.5 Flash) as these block key workflows. Review #3045 and #3053 for merge — small, safe fixes with clear impact.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-13

## Today's Overview

NanoClaw shows **high activity** today with **9 open pull requests** and **5 updated issues** in the last 24 hours, indicating a significant development push. The project saw **zero merged PRs** and **one issue closed**, suggesting a focus on landing new features and security hardening rather than clearing backlog. Three maintainers (omri-maya, boazdori, sturdy4days) contributed substantial PRs touching core architecture, container security, and database reliability. The community is actively surfacing bugs around message deduplication, timeout handling, and permission gating, which the team appears to be addressing in parallel.

## Releases

**No new releases today.** The project remains at approximately v2.0.64 (per issue #2711 reference). No migration notes or changelogs to report.

## Project Progress

No pull requests were merged or closed today. However, **9 new PRs were opened**, signaling significant development momentum:

- **Container Security Hardening** (#2748) — boazdori proposed dropping all Linux capabilities (`--cap-drop=ALL`), enabling no-new-privileges, and setting PID limits on agent containers — defense-in-depth against container escape or fork bombs.
- **npm Package Age Gating** (#2749) — boazdori extended the host's 3-day `minimumReleaseAge` policy to agent-requested npm installs, preventing use of freshly-published (potentially malicious) packages.
- **Agent-Surfaces Capability Seam** (#2746) — omri-maya added a host-side registry enabling providers to declare agent-facing capabilities (e.g., message editing, file uploads), decoupling UI features from platform implementation.
- **Persistent Memory Scaffold** (#2745) — omri-maya introduced an opt-in `usesMemoryScaffold` provider capability and container contract for cross-session memory persistence.
- **OneCli SDK 2.2.1 Upgrade** (#2747) — omri-maya bumped the SDK, added credential-stub mounts, and machine-checkable pins for cloud authentication.
- **Outbound DB Journal Recovery** (#2750) — sturdy4days fixed two related failure modes where stale SQLite journals or poll races caused data loss after container kills.
- **Poisoned-Resume Crash Loop Fix** (#2670) — ddaniels submitted a fix for sessions stuck in infinite crash loops due to corrupt resumed transcripts containing `thinking` blocks.
- **Discord Attachment Fix** (#2752) — jsigwart fixed a bug where Discord file/image attachments never reached agents in readable form.
- **Pre-commit Hook Fix** (#2753) — sturdy4days fixed a broken pre-commit hook that failed when `pnpm` was not in PATH.

## Community Hot Topics

- **[Issue #2506 — Silent response drops on rapid turns](https://github.com/nanocoai/nanoclaw/issues/2506)** (3 comments) — The longest-running open issue, describing two scenarios where agent responses are silently dropped and clients time out. The core issue is that the deduplication logic in `send_message` doesn't account for rapid successive turns (<60s) or follow-ups arriving mid-stream. **Underlying need:** Reliable, non-silent message delivery under concurrency — users cannot trust the system for real-time or high-throughput interactions.

- **[Issue #2632 — Telegram swarm status in v2](https://github.com/nanocoai/nanoclaw/issues/2632)** (1 comment) — A user planning v1→v2 migration asks for clarity on whether the old `/add-telegram-swarm` multi-bot identity feature is still supported. **Underlying need:** Migration path clarity for forks that depend on swarm capabilities; risk of blocked upgrades if feature is deprecated without alternative.

- **[Issue #2711 — Ungated agent creation MCP tool](https://github.com/nanocoai/nanoclaw/issues/2711)** (1 comment) — A security concern: the `create_agent` MCP tool is described as admin-only but has no role check, allowing any container to create agent groups. **Underlying need:** Proper authorization enforcement — users expect documented security boundaries to be enforced, not aspirational.

- **[Issue #2668 — No per-tool timeout for MCP calls](https://github.com/nanocoai/nanoclaw/issues/2668)** (1 comment) — Hung MCP tools can block sessions for up to 30 minutes before forced kill. **Underlying need:** Granular timeout control — users need protection against single tool failures consuming entire session budgets.

## Bugs & Stability

| Issue | Severity | Summary | Fix PR Exists? |
|-------|----------|---------|----------------|
| [#2751 — Budget-exhausted LLM turns silently dropped](https://github.com/nanocoai/nanoclaw/issues/2751) | **Critical** | Cloud spend-cap causes fabricated HTTP 200 with budget notice; agent treats as success and shows "spending limit reached" to user with no reply | No (closed, needs attention) |
| [#2506 — send_message dedup drops responses](https://github.com/nanocoai/nanoclaw/issues/2506) | **High** | Silent response loss when turns complete <60s apart or follow-up arrives mid-stream | No |
| [#2668 — No per-tool timeout for MCP calls](https://github.com/nanocoai/nanoclaw/issues/2668) | **High** | Hung tool blocks session up to 30 min | No |
| [#2670 — Poisoned-resume crash loop](https://github.com/nanocoai/nanoclaw/issues/2670) | **High** | Corrupt `thinking` blocks cause infinite crash loops | ✅ [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) |
| [#2516/#2640 — Stale outbound.db after container kill](https://github.com/nanocoai/nanoclaw/pull/2750) | **Medium** | Data loss from un-recovered SQLite journals and poll races | ✅ [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) |
| [#2753 — Pre-commit hook broken without pnpm](https://github.com/nanocoai/nanoclaw/issues/2753) | **Low** | Developer workflow friction for contributors without full toolchain | ✅ [#2753](https://github.com/nanocoai/nanoclaw/pull/2753) |

**Top concern:** Issue #2751 (budget-exhaustion silent drops) was closed without resolution — this is a **critical user-facing bug** where users get no reply when their cloud spend cap is hit. The issue description suggests the agent SDK treats the budget notice as a normal successful response.

## Feature Requests & Roadmap Signals

Today's PRs reveal **clear roadmap priorities**:

1. **Provider capability system** ([#2746](https://github.com/nanocoai/nanoclaw/pull/2746)) — A declarative seam for providers to advertise supported features (message editing, file uploads, etc.). Likely in next release (~v2.1.0) as it's a foundational architecture change.

2. **Persistent memory scaffold** ([#2745](https://github.com/nanocoai/nanoclaw/pull/2745)) — Opt-in cross-session memory for providers. Coupled with the capability seam, this enables memory-as-a-feature per platform.

3. **OneCli SDK upgrade** ([#2747](https://github.com/nanocoai/nanoclaw/pull/2747)) — Credential-stub mounts and machine-checkable pins suggest cloud authentication improvements.

**User-requested features not yet addressed:**
- Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632) — Telegram swarm/multi-bot identity status remains unresolved; users need migration guidance.
- Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) — Proper role-based access control for MCP tools.

**Prediction:** The capability seam and memory scaffold will likely merge within the week, forming the basis for a v2.1 release. No PR addresses the per-tool timeout request (#2668) or the dedup bug (#2506) yet — these may slip to v2.2.

## User Feedback Summary

**Pain points surfaced this week:**
- **Unreliable message delivery** — Two issues (#2506, #2751) describe scenarios where agents silently drop responses, leaving users with no reply and timeouts. This erodes trust in the platform for production use.
- **Missing timeout controls** — Users find the 30-minute session block for a single hung tool call unacceptable for interactive use cases.
- **Security gaps** — The `create_agent` MCP tool's lack of authorization enforcement (issue #2711) concerns users evaluating NanoClaw for multi-tenant deployments.
- **Migration uncertainty** — Users with swarm-dependent forks face blocked upgrades without clarity on Telegram multi-bot support in v2.

**Satisfaction signals:**
- High engagement on security hardening PRs (#2748, #2749) suggests users value proactive defense improvements.
- The memory scaffold and provider capability PRs address long-requested extensibility features.

## Backlog Watch

| Issue/PR | Age (days) | Status | Why It Matters |
|----------|------------|--------|----------------|
| [#2506 — send_message dedup drops responses](https://github.com/nanocoai/nanoclaw/issues/2506) | 28 | Open, 3 comments | Critical reliability bug; longest open without fix PR |
| [#2632 — Telegram swarm status in v2](https://github.com/nanocoai/nanoclaw/issues/2632) | 16 | Open, 1 comment | Blocks migration for forks; needs maintainer clarification |
| [#2668 — No per-tool timeout for MCP](https://github.com/nanocoai/nanoclaw/issues/2668) | 12 | Open | Affects session stability; no fix PR in sight |
| [#2711 — Ungated agent creation](https://github.com/nanocoai/nanoclaw/issues/2711) | 6 | Open | Security vulnerability; no fix PR yet |

**Top maintainer attention needed:** Issue #2506 (28 days open, critical bug, no fix PR) and issue #2632 (16 days, needs authoritative response on feature status). The closed-but-unresolved issue #2751 (budget silent drops) should be reopened or formally addressed — closing without a fix path risks user trust.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-13

## 1. Today's Overview
The NullClaw project shows light but focused activity today, with **1 open issue** and **3 open pull requests** updated in the last 24 hours. No new releases or merges occurred, indicating the maintainer team is actively reviewing contributions but not pushing new versions to users. The three open PRs all address meaningful quality-of-life and reliability concerns — configuration flexibility, error handling in agent output, and Discord gateway resilience. Community engagement remains moderate, with one user reporting a concrete usage blocker with Ollama-based models.

## 2. Releases
**None.** No new releases were published in the last 24 hours.

## 3. Project Progress
No pull requests were merged or closed today. All three recently updated PRs remain open under review:
- **PR #949** — `fix: make queue_mode configurable from config.json` (authored by vernonstinebaker)
- **PR #951** — `fix(agent_runner): suppress stderr initialization logs on agent failure` (authored by vernonstinebaker)
- **PR #953** — `fix(discord): recover closed gateway sockets` (authored by vernonstinebaker)

These represent progress toward configuration ergonomics, cleaner error reporting, and platform-specific reliability.

## 4. Community Hot Topics
- **Issue #952** ([link](nullclaw/nullclaw Issue #952)) — `[bug] Local model using ollama returns incomplete answers`  
  *Reported by bloodgroup-cplusplus, 0 comments, no reactions yet.*  
  **Analysis:** This is the only open issue updated today. The user describes a reproducible problem where the agent fails to produce complete sentences when using a locally pulled Gemma model via Ollama. With zero comments, this has not yet attracted community discussion, but it touches a core use case — local model inference — and could indicate a deeper issue in stream handling or response truncation logic.

- **PR #953** ([link](nullclaw/nullclaw PR #953)) — `fix(discord): recover closed gateway sockets`  
  *Authored by vernonstinebaker, 3 comments (estimated from previous data), 0 reactions.*  
  **Analysis:** This PR addresses Discord gateway disconnection handling — a classic reliability pain point for Discord bots. The fix includes closing active sockets before heartbeat thread cleanup and adding a bounded grace window for stalled reconnects. This signals that platform integration robustness is a current maintainer focus.

## 5. Bugs & Stability
**High severity:**
- **Issue #952** ([link](nullclaw/nullclaw Issue #952)) — Incomplete agent responses when using local Ollama models. No fix PR exists yet. Severity is elevated because it blocks users relying on local inference, which is a core NullClaw feature. The bug may relate to stream-backed response accumulation or a timeout cutoff.

**Medium severity (addressed by open PRs):**
- **PR #951** ([link](nullclaw/nullclaw PR #951)) — Agent failure currently posts initialization logs (memory plans, MCP server registration, channel startup) as fallback agent responses, polluting channels. The PR suppresses stderr output on non-zero exit.
- **PR #953** ([link](nullclaw/nullclaw PR #953)) — Discord gateway sockets not recovering cleanly, requiring manual reconnection. The PR adds proper cleanup and health checks.

No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
- **PR #949** ([link](nullclaw/nullclaw PR #949)) — Configuration-driven `default_queue_mode` for new sessions. This is a clear user-quality feature: allowing operators to set queue behavior (`latest`, `all`, etc.) via `config.json` without code changes. This is likely to land in the next release as it's already implemented and under review.
- PR #953's Discord gateway recovery logic suggests the team is investing in production-grade platform reliability, possibly ahead of a broader Discord integration push.

**Prediction for next release:** Expect PR #949 and PR #951 to merge, providing configurable queue mode and cleaner agent failure handling. PR #953 may require additional testing before merge.

## 7. User Feedback Summary
- **Positive signal:** The PRs by vernonstinebaker show ongoing community contribution and maintainer receptivity to quality improvements.
- **Pain point (moderate):** Issue #952 (Ollama incomplete answers) indicates frustration with local model reliability. The user provided a screenshot and steps, suggesting a concrete, reproducible blocker for self-hosted setups.
- **No explicit satisfaction/dissatisfaction comments** were recorded in the last 24h.

## 8. Backlog Watch
No long-unanswered issues or PRs were identified in the current data. The only open issue (#952) was created on 2026-06-11 and has been open for 2 days — within normal response time. All three open PRs have recent maintainer interaction (updated within 24h). The project's triage appears current and healthy.

**No items require urgent maintainer attention at this time.**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-13

## Today's Overview

IronClaw shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a major development push. The project is in a **rapid stabilization phase** for the Reborn architecture (Engine V2), with feature work, bug fixes, and infrastructure improvements proceeding in parallel. **17 issues were closed** and **19 PRs were merged/closed** today, demonstrating strong throughput. The absence of new releases suggests the team is consolidating changes before a version bump. Core contributors are driving multiple parallel tracks: approval persistence, attachment support, Slack integration, and deferred message handling.

## Releases

**No new releases today.** The project appears to be between releases, accumulating significant changes across the Reborn codebase.

## Project Progress

Notable merged/closed PRs today:

- **#4834** — Promote to QA branch (merged) — large batch promotion indicating readiness for testing
- **#4773** — Record/replay machinery for QA-phrase traces on Reborn runtime (merged) — enables deterministic CI testing of agent behavior
- **#4769** — Added 22 new Reborn QA use-case e2e suites on binary-E2E harness (merged) — no external services required
- **#4562** — Record auth continuation dispatch failures (merged) — improves audit trail for authorization failures
- **#4568** — Bound before-capability dispatch fan-out (merged) — prevents runaway hook execution
- **#4569** — Enforce aggregate tenant predicate key caps (merged) — resource management for predicate storage

Key feature advancements:
- **Attachment support (#4644)** — Multiple stacked PRs (#4654, #4655, #4668, #4670, #4738) progressing through the pipeline: format registry → transcript contract → byte storage → bridge → frontend UX
- **Approval persistence fix (#4835)** — Open PR to make "always allow" approvals durable across threads
- **DeferredBusy drain (#4812)** — Open PR enabling automatic drain of messages sent while thread was blocked on a gate

## Community Hot Topics

1. **#4825 — Always-allow approval persistence** (3 comments)
   - *Link:* nearai/ironclaw Issue #4825
   - *Analysis:* Users reported being re-prompted for capabilities they already approved across threads. The fix (#4835) removes `thread_id` from persistent approval scope, making approvals truly durable. This addresses a fundamental UX friction in the Reborn architecture.

2. **#4703 — NEAR AI model picker saves display name instead of model ID** (3 comments, CLOSED)
   - *Link:* nearai/ironclaw Issue #4703
   - *Analysis:* Configuration bug causing model picker to persist display names instead of model IDs, breaking provider configuration. Closed with fix deployed.

3. **#4817 — DeferredBusy drain follow-ups** (2 comments)
   - *Link:* nearai/ironclaw Issue #4817
   - *Analysis:* Tracks deferred design decisions from the drain implementation: architectural questions about resubmission doorways, stale-intent policy for abandoned threads, and startup sweep for orphaned deferred messages. Indicates careful engineering rigor.

4. **#4705 — NEAR AI SSO setup fails in local environment** (2 comments, CLOSED)
   - *Link:* nearai/ironclaw Issue #4705
   - *Analysis:* SSO integration breakage in local Reborn affecting multiple auth providers (GitHub, Google, NEAR Wallet). Closed with fix.

5. **#4738 — Attachment web UX** (large PR, undefined comments)
   - *Link:* nearai/ironclaw PR #4738
   - *Analysis:* Major feature PR wiring upload UX into WebChat v2. Stacked on extensive backend work, this completes the end-to-end attachment story. High community interest given attachment support is a flagship feature.

## Bugs & Stability

### Critical Severity
- **#4824 — cargo-deny failing repo-wide** (OPEN) — New RUSTSEC advisories against postgres crates block all CI on main. *Fix PR:* Not yet linked. **Blocks all PRs from merging.**

### High Severity
- **#4762 — Failed tool workflow causes inconsistent message ordering** (OPEN) — After a tool failure, follow-up messages and activity ordering become inconsistent. *No fix PR identified.*
- **#4759 — Workspace path duplication** (OPEN) — Workspace-relative paths are doubled (e.g., `workspace/demo/a.txt` becomes `workspace/workspace/demo/a.txt`). *No fix PR identified.*
- **#4697 — Active provider status inconsistent in Inference settings** (OPEN) — UI shows one provider as active but actual execution uses a different one. *No fix PR identified.*

### Medium Severity
- **#4696 — Ollama Test connection reports success when unavailable** (OPEN) — False positive during provider setup misleads users. *No fix PR identified.*
- **#4796 — LLM lacks awareness of current date/time** (OPEN) — Model answers time-sensitive questions with incorrect dates even when a time tool is available. *No fix PR identified.*
- **#4823 — No UI feedback when deleting a running conversation fails** (OPEN) — Silent failure with no error indication. *No fix PR identified.*

### Low Severity (UX polish)
- **#4819 — Attachment warning banner difficult to read in Light theme** (OPEN)
- **#4723 — Composer hover state only highlights top border** (OPEN)
- **#4719 — Conversation content area flickers when returning** (CLOSED)

## Feature Requests & Roadmap Signals

**Near-term (likely in next release):**
1. **Attachment support (#4644)** — 5 stacked PRs in progress spanning backend contract changes through frontend UX. This is the flagship feature for Reborn.
2. **Deferred message drain (#4812, #4831, #4832)** — Automatic recovery of messages sent while thread was blocked. Batching optimization requested to avoid serial N-run cost.
3. **Slack as product-adapter extension (#4778)** — Moving Slack from hardcoded channel to pluggable extension architecture.
4. **Outbound delivery awareness (#4779, #4828)** — Giving the model knowledge of connected channels and delivery targets.
5. **Filesystem DeferredBusy index (#4833)** — Performance optimization to avoid full transcript scans when checking for deferred messages.

**Medium-term signals:**
- **LLM usage tracking for Engine V2 (#4822)** — Admin monitoring gap for Reborn paths
- **CI test sharding (#4813)** — Infrastructure improvement for faster PR feedback
- **Slack delivery.rs decomposition (#4818)** — Code quality/architecture work

## User Feedback Summary

**Pain points:**
- Approval gates reappearing across threads despite "always allow" — fundamental UX friction addressed by #4825/#4835
- SSO setup failures in local environment (GitHub, Google, NEAR Wallet) — closed with fix
- Conversations not showing user/assistant identity — closed with fix
- Unsent draft lost when navigating away from new conversation — closed with fix
- Attachment warning persists across conversations — closed with fix
- Links in responses navigate away from active conversation (not opening in new tab) — closed with fix
- Composer remains interactive-looking during Working state — closed with fix

**Satisfaction indicators:**
- Multiple closed UX issues suggest responsive bug fixing
- 22 new e2e test suites and record/replay machinery indicate investment in quality
- Active feature development (attachments, Slack integration) suggests user-visible improvements planned

## Backlog Watch

**Long-unanswered important issues needing attention:**
- **#3708 — chore: release** (OPEN since May 16) — Release PR with breaking changes in `ironclaw_common` and `ironclaw_skills`. Blocked for nearly a month; may be waiting on feature completion before cut.
- **#4561 — Record MCP direct-lease denials in SecurityAuditSink** (OPEN since June 8) — Part of security audit infrastructure, awaiting merging.

**Trend analysis:** The project shows healthy velocity with many issues being closed within 1-2 days of opening. The bottleneck appears to be the release pipeline (#3708) and CI blocking (#4824) rather than maintainer responsiveness. The Reborn architecture transition is progressing methodically with strong engineering practices (deferred design decisions tracked, code size budgets enforced).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI project digest** for **2026-06-13**, generated from the provided GitHub activity data.

---

## LobsterAI Project Digest — 2026-06-13

### 1. Today's Overview
The project is in a **post-release stabilization phase** following the merge of the `2026.6.11` release branch into `main`. **Activity is very high**, with 17 PRs updated in the last 24 hours, but dominated by **housekeeping, regression fixes, and stale PRs being resolved**. The team merged 11 pull requests, primarily targeting the renderer, cowork, and OpenClaw areas. The single issue updated was a closed user report from February, indicating no new major user-facing regressions were discovered today. The backlog also saw significant movement with several stale PRs (from April) being closed or updated, suggesting a focused effort to clean up technical debt.

### 2. Releases
**None.** No new releases were tagged today. The latest release is the `2026.6.11` release branch, which was merged into `main` via PR #2158.

### 3. Project Progress
The following merged/closed PRs represent the **majority of today's progress**, focusing on the new Computer Use feature, voice input improvements, and artifact sharing.

- **Computer Use (MVP & Runtime):** PR [#2158](https://github.com/netease-youdao/LobsterAI/issues/2158) merged the release branch, officially adding the Computer Use MVP and a built-in computer use kit. PR [#2156](https://github.com/netease-youdao/LobsterAI/issues/2156) bumped the managed runtime to v1.0.7, which includes UIA breadcrumbs for diagnosing unexpected helper exits, improving stability.
- **Voice Input (Cowork):** PR [#2155](https://github.com/netease-youdao/LobsterAI/issues/2155) fixed a race condition causing duplicate real-time ASR start requests. Real-time ASR for cowork prompts was a highlight of the latest release.
- **Artifact Sharing:** The release merge ([#2158](https://github.com/netease-youdao/LobsterAI/issues/2158)) introduced HTML artifact public sharing mode selection and image/SVG artifact sharing support.
- **Stale PR Cleanup:** Maintainers closed 7 old branches related to `AgentCreateModal`, `AgentSettingsPanel`, and `MCP server form` (stale PRs #1473-#1477). These added "unsaved changes" confirmation dialogs to prevent data loss, which are likely now considered stable and complete.
- **Image Saving Fix:** PR [#2157](https://github.com/netease-youdao/LobsterAI/issues/2157) fixed a critical bug where generated images (PNG content) were saved with incorrect file extensions (`.jpg/.jpeg/.webp`).
- **OpenClaw & Cowork Fixes:** PR [#2154](https://github.com/netease-youdao/LobsterAI/issues/2154) fixed a bug where model metadata was not shown after manually stopping streaming responses. PR [#2153](https://github.com/netease-youdao/LobsterAI/issues/2153) fixed an issue where package-models with the same name could lose their explicit selection state.

### 4. Community Hot Topics
Activity is low on the user-facing issue tracker, but the development side is highly engaged.

- **Issue #1 (Closed):** [hit API error with OpenAI API Type](https://github.com/netease-youdao/LobsterAI/issues/1) was the only issue updated. This is a long-standing (Feb 2026) user report regarding an API error when using the OpenAI message type with a MiniMaxi API key. It received 7 comments before being closed. The closure likely indicates the issue was resolved by the configuration or integration logic, not the core API, or was deemed a duplicate/user error after investigation.
- **Stale PR Backlog:** The most "active" PRs today were not new but were the **6 long-standing open PRs** (from April 3, 2026) being updated. This suggests the maintainer team is performing a **major backlog grooming** session. The underlying community/development need is for **stability and polish**, as these PRs address infinite restart loops, i18n gaps, and session management.

### 5. Bugs & Stability
No new bugs were reported via issues in the last 24 hours. However, several critical fixes were merged:

| Severity | Bug Description | Status & Link |
| :--- | :--- | :--- |
| **High** | Incorrect file extensions when saving generated images (PNG saved as .jpg). | Fixed in PR [#2157](https://github.com/netease-youdao/LobsterAI/issues/2157) |
| **Medium** | Duplicate real-time ASR start requests in cowork voice input. | Fixed in PR [#2155](https://github.com/netease-youdao/LobsterAI/issues/2155) |
| **Medium** | Stopped streaming responses losing model metadata in cowork. | Fixed in PR [#2154](https://github.com/netease-youdao/LobsterAI/issues/2154) |
| **Low** | Package models with same name losing their selection state. | Fixed in PR [#2153](https://github.com/netease-youdao/LobsterAI/issues/2153) |
| **High (Open)** | **OpenClaw gateway infinite restart loop** (PR #1446) and **disabled skills still being injected** (PR #1453) are still open. | **Stale PRs**, updated but not merged. |

### 6. Feature Requests & Roadmap Signals
- **Computer Use:** The MVP is now live. The next step (implied by PR #2156) is improving the runtime's **stability and diagnostics**.
- **ASR & Voice:** The team is actively investing in voice input for cowork. The fix in [#2155](https://github.com/netease-youdao/LobsterAI/issues/2155) suggests the real-time ASR feature is maturing after an initial rollout.
- **Artifacts:** The addition of **image/SVG sharing** and **public mode selection** completes a significant feature set. The roadmap likely shifts to refinement (e.g., permissions UX) rather than new formats.
- **Session Management:** The stale PR [#1449](https://github.com/netease-youdao/LobsterAI/issues/1449) proposes **grouping scheduled task executions** in the sidebar. This is a high-value UX improvement that could land in the next minor release.

### 7. User Feedback Summary
- **Pain Points:** The only direct user feedback signal comes from **Issue #1** (API error with OpenAI type) and the core issue behind the **"stale" PRs**—users are frustrated by instability (gateway loops) and data loss (unsaved changes, lost drafts).
- **Satisfaction:** The high volume of merged fixes suggests the team is responsive to these pain points. The fixes for saving images with wrong extensions and lost draft content address clear user complaints.
- **Use Cases:** The dominant use case is **AI-powered task management** (cowork) with an increasing focus on **multi-modal output** (images, SVGs, artifacts) and **computer control** (Computer Use).

### 8. Backlog Watch
The following **critical and stale** PRs from April 2026 are still open and demand maintainer attention. They were updated today but not merged, signaling they are being reviewed but may have blockers.

- **PR #1446:** [fix(openclaw): 修复网关反复启动失败导致的无限重启循环](https://github.com/netease-youdao/LobsterAI/pull/1446) — **High Severity.** This is a stability bug that can render the entire application unusable. It has been open since April 3.
- **PR #1453:** [fix(skills): 修复已停用技能仍被注入对话提示词的问题](https://github.com/netease-youdao/LobsterAI/pull/1453) — **High Severity.** A data privacy and control issue where disabled skills remain active.
- **PR #1448:** [fix(i18n): Agent 设置页面删除按钮及技能选择器显示英文](https://github.com/netease-youdao/LobsterAI/pull/1448) — **Medium Severity.** Blocks international user experience.
- **PR #1456:** [fix(shortcuts): 修复快捷键设置缺少重复检测的问题](https://github.com/netease-youdao/LobsterAI/pull/1456) — **Low Severity (UX).** Users can assign the same shortcut to multiple actions without warning, causing silent failures.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026-06-13**

---

### 1. Today's Overview
Project activity today is **low but targeted**. Three issues have been updated in the last 24 hours, all open, with zero closed issues or merged PRs—indicating a day of ongoing triage and review rather than rapid feature landing. The single open pull request, a WhatsApp delivery fix, is the most actionable item and has been active since yesterday. No new releases have been published, so the latest stable version remains unchanged. Overall, the project appears stable but with a modest maintenance cadence.

---

### 2. Releases
**No new releases today.**  
No release tags or changelogs were published since the last digest. Users should continue using the latest available release.

---

### 3. Project Progress
**No PRs were merged or closed today.**  
The only PR activity is an open fix:
- **[#1116 – fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116)** – Author: juanlotito – Addresses silent message drops when replying to privacy-enabled (`@lid`) chats on WhatsApp. This is still open and awaiting maintainer review.

No feature advances or bug fixes were finalized today.

---

### 4. Community Hot Topics
The most active discussions today revolve around **integration improvements** and **sandbox security**:

- **[#1115 – Bug: Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)** (2 comments) – Reporting an authentication failure when using the Fastmail Model Context Protocol (MCP) integration. The user confirmed they are on the latest version. Underlying need: reliable OAuth/MCP authentication for third-party email services.

- **[#1118 – Feature: Add Kubernetes-native sandbox backend with runtimeClassName support](https://github.com/moltis-org/moltis/issues/1118)** (1 comment) – Proposes a new `kubernetes` sandbox backend to run ephemeral agent pods with VM-level isolation (e.g., Kata Containers, gVisor). Underlying need: enterprise-grade sandboxing for untrusted LLM code execution. This signals growing demand for production-grade security.

- **[#1102 – Feature: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102)** (1 comment) – Latest update was yesterday. Proposes ultra-fast local speech-to-text (<70ms latency). Underlying need: real-time, privacy-preserving voice interfaces.

---

### 5. Bugs & Stability
One new bug report has been filed today:
- **[#1115 – Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)** – Severity: **Medium**. Users cannot authenticate with Fastmail via MCP, blocking email agent workflows. No associated fix PR yet. The reporter has pre-checked for duplicates and confirmed latest version, increasing credibility.

No regression reports or crash logs were submitted. All other active bugs remain unchanged from previous days.

---

### 6. Feature Requests & Roadmap Signals
Two notable feature requests have surfaced:
1. **Kubernetes-native sandbox backend** ([#1118](https://github.com/moltis-org/moltis/issues/1118)) – High-impact request for enterprise security. If maintainers prioritize sandbox hardening, this could appear in the next minor release (v0.8.x).
2. **FunASR/SenseVoice local STT** ([#1102](https://github.com/moltis-org/moltis/issues/1102)) – Low latency and streaming support align with Moltis’s voice assistant goals. Could be fast-tracked for a future feature release if maintainers see community interest.

Both are open and have received at least one comment from the team, suggesting they are under active consideration.

---

### 7. User Feedback Summary
- **Pain Points:**
  - WhatsApp `@lid` chat delivery failures (PR #1116) – messages are produced but never delivered to users.
  - Fastmail MCP authentication failures (Issue #1115) – prevents email automation from working.
  - No current workaround for either issue, suggesting friction for users relying on these integrations.

- **Use Cases:**
  - Voice-first assistants needing ultra-fast local STT (Issue #1102).
  - Production deployments wanting sandboxed, Kubernetes-native agent execution (Issue #1118).

- **Satisfaction/Dissatisfaction:**  
  No explicit satisfaction reports today. Dissatisfaction is implied by the open bug reports, but no negative sentiment is expressed in comments.

---

### 8. Backlog Watch
- **[#1102 – FunASR/SenseVoice local STT engine](https://github.com/moltis-org/moltis/issues/1102)** – Opened 2026-06-04, last updated 2026-06-12. **No maintainer response since initial comment.** 9 days without a formal acknowledgment or roadmap label. This is the most urgent backlog item needing triage or a status update.

All other open issues are recent (within 2 days) and have received at least minimal engagement from the team.

---

**Overall Project Health:**  
Stable but sleepy. No regressions, no merges, and no releases today. The open PR on WhatsApp delivery and the Kubernetes sandbox feature request indicate useful community contributions awaiting review. The backlog watch item (#1102) suggests a responsiveness gap that maintainers may want to address to keep the contributor community engaged.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-13

## Today's Overview

CoPaw is in a period of **high development activity** and **significant community engagement**, with 23 issues and 27 PRs updated in the last 24 hours. The project shows strong momentum toward the upcoming **v1.1.12 beta release**, with two version-bump PRs created and one merged today. However, the project is dealing with **multiple regressions introduced in v1.1.11.post2**, including critical bugs in file downloads, Windows process management, and core functionality like scheduled tasks and mathematical rendering. The community is actively reporting bugs and requesting features, while maintainers are responding with targeted fixes — particularly in the console UI (memory config, session routing, GitPanel styling) and CI pipeline improvements. The major **AgentScope 2.0 migration** (Issue #4727) continues to be a top priority, alongside emerging architectural work on **Runtime 2.0** (PR #5078) and an **Agent OS Driver abstraction** (PR #5067).

---

## Releases

**No new releases today.** The project is preparing for **v1.1.12b1** as indicated by two version-bump PRs today: [#5157 (merged)](https://github.com/agentscope-ai/QwenPaw/pull/5157) bumped to `1.1.12.beta1`, and [#5159 (closed)](https://github.com/agentscope-ai/QwenPaw/pull/5159) corrected the format to `1.1.12b1`. No official release has been published yet.

---

## Project Progress

**11 PRs were merged or closed today**, reflecting strong engineering velocity:

### Bug Fixes (Merged/Closed)
- **[#5144](https://github.com/agentscope-ai/QwenPaw/pull/5144)** — **Critical fix**: Resolves memory config loss when saving workspace settings without expanding collapsed panels (fixes Issue #5137). The fix forces `Collapse` panel rendering and fixes merge logic in `useAgentConfig`.
- **[#5147](https://github.com/agentscope-ai/QwenPaw/pull/5147)** — Fixes session routing in Coding Mode: refreshing the page no longer redirects to the first session. Adds a shared `sessionRoute.ts` utility.
- **[#5154](https://github.com/agentscope-ai/QwenPaw/pull/5154)** — Fixes the empty memory search tool results rendering bug (Issue #5098), which showed `unknown` file paths instead of actual sources.
- **[#4144](https://github.com/agentscope-ai/QwenPaw/pull/4144)** — Fixes desktop command readiness check when binding to wildcard address `0.0.0.0` on Windows.
- **[#5022](https://github.com/agentscope-ai/QwenPaw/pull/5022)** — Guards agent workspace restore targets, preventing workspace placement inside QwenPaw-managed directories (security hardening).
- **[#5121](https://github.com/agentscope-ai/QwenPaw/pull/5121)** — **Infrastructure**: Introduced a Release Verification Gate that runs end-to-end installation and health checks before publishing.

### Feature/Refactoring (Merged/Closed)
- **[#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)** — **Breaking Change**: Merged the **Runtime 2.0 modular architecture** that replaces the monolithic `Runner` + `stream_query` path with composable units and a `ToolCoordinator` layer for fine-grained tool-call lifecycle control.

### Version Management
- **[#5157](https://github.com/agentscope-ai/QwenPaw/pull/5157)** — Version bump to `1.1.12.beta1`.
- **[#5159](https://github.com/agentscope-ai/QwenPaw/pull/5159)** — Version format correction to `1.1.12b1`.

---

## Community Hot Topics

### Most Active Discussions

1. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) — [Bug] Agent-generated scheduled tasks fail to trigger** (11 comments, open 3 days)
   - **Analysis**: Users report that `v1.1.10`-generated scheduled tasks appear in the UI but never execute. Additionally, such auto-generated tasks cannot be manually edited. This is a **core functionality regression** affecting cron/trigger-based automation workflows. The high engagement suggests this affects many users relying on agent scheduling.

2. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — [Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0** (10 comments, 2 👍, open 17 days)
   - **Analysis**: The most significant upcoming change. Users are actively discussing the implications — the migration from `agentscope==1.0.20` + `agentscope-runtime==1.1.6` to AgentScope 2.0's new architecture and APIs. This is the project's top strategic priority.

3. **[#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) — [Bug] v1.1.11.post2 file download regression** (5 comments)
   - **Analysis**: Text files download correctly, but `docx`/`pdf` attachments return 404 errors. This is a clear regression in the download pipeline introduced in `.post2`.

### Community Sentiment
The community is **actively engaged but frustrated** by regressions in `.post2`. Users are reporting bugs with detailed reproduction steps and screenshots, suggesting a technically sophisticated user base invested in the tool. The underlying need is clearly **stability** — users want new features but are experiencing breakage in existing workflows.

---

## Bugs & Stability

### Critical Severity

1. **[#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) — Windows client process accumulation** (3 comments)
   - **Impact**: Opens QwenPaw desktop client → processes multiply continuously → memory usage climbs to 90%+. System-killer level bug. **No fix PR yet.**

2. **[#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) — File download 404 regression** (5 comments)
   - **Impact**: `v1.1.11.post2` breaks non-text file downloads (docx, pdf). Core usability feature broken. **No fix PR yet.**

3. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) — Scheduled tasks never trigger** (11 comments)
   - **Impact**: Agent-generated cron tasks show in UI but never execute. Automation capability completely broken. **No fix PR yet.**

4. **[#5155](https://github.com/agentscope-ai/QwenPaw/issues/5155) — Auto-crash/restart loop in Docker** (2 comments)
   - **Impact**: Docker deployment of `v1.1.11` results in periodic crashes. Server-side reliability issue. **No fix PR yet.**

5. **[#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) — Gemini tool calling regression** (1 comment)
   - **Impact**: Confirmed regression between `v1.1.10` and `v1.1.11.post2` — Gemini can no longer use built-in tools. **No fix PR yet.**

### High Severity

6. **[#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098) — Memory search tool renders empty results** (4 comments) → **FIXED** in PR [#5154](https://github.com/agentscope-ai/QwenPaw/pull/5154)
7. **[#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137) — Vector model config lost on save** (5 comments) → **FIXED** in PR [#5144](https://github.com/agentscope-ai/QwenPaw/pull/5144)
8. **[#5142](https://github.com/agentscope-ai/QwenPaw/issues/5142) — Coding Mode session lost on refresh** (1 comment) → **FIXED** in PR [#5147](https://github.com/agentscope-ai/QwenPaw/pull/5147)

### Medium Severity

9. **[#5148](https://github.com/agentscope-ai/QwenPaw/issues/5148) / [#5143](https://github.com/agentscope-ai/QwenPaw/issues/5143) — Math formula rendering: square root displayed as a single line** (2 comments each)
10. **[#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) — Conversation thinking logic enters infinite loop** (1 comment)
11. **[#5127](https://github.com/agentscope-ai/QwenPaw/issues/5127) — Langfuse traces fragmented across ReAct loop** (2 comments)
12. **[#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) — TeamChat plugin fails on Python 3.13: `No module named 'imghdr'`** (1 comment)
13. **[#5132](https://github.com/agentscope-ai/QwenPaw/issues/5132) — `enable_thinking: false` config ignored** (2 comments)

### Stability Assessment
**Significant regression risk.** The `.post2` release introduced multiple functional regressions across downloads, process management, tool calling, and automation. The team is fixing bugs at pace but not all critical issues have associated PRs yet. **Users on `v1.1.10` may want to delay upgrading to `v1.1.11.post2`** until critical issues are resolved.

---

## Feature Requests & Roadmap Signals

### Top Feature Requests Today

1. **[#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) — Support Kimi-for-Coding / add `uv` to allowlist** (3 comments)
   - **Need**: Users subscribed to Kimi Coding cannot use it within QwenPaw, which only supports official API. **High-value feature** for Chinese-market users with existing subscriptions.

2. **[#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) — Native Agent Team/Swarm collaboration** (3 comments)
   - **Need**: Multi-agent collaboration similar to WorkBuddy and JiuwenSwarm, for solving complex tasks through agent teams. Aligns with emerging industry trends.

3. **[#5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) — Desktop: system tray, auto-start, background daemon** (2 comments)
   - **Need**: Proper desktop lifecycle management — tray icon, minimize to tray, auto-start on boot, service management. **Core UX gap** for desktop deployment.

4. **[#5152](https://github.com/agentscope-ai/QwenPaw/issues/5152) — Slack channel support** (1 comment)
   - **Need**: Extend channel ecosystem to include Slack for enterprise users.

### What Might Ship Next

Based on the activity signal:
- **Kimi-for-Coding support** — High user demand, moderate implementation complexity.
- **Agent Team/Swarm** — Already several PRs working on multi-agent coordination (PR #5078 Runtime 2.0 includes `ToolCoordinator`).
- **Desktop UX improvements** — PR [#5153](https://github.com/agentscope-ai/QwenPaw/pull/5153) already replicates Tauri instant-window startup to pywebview client, suggesting desktop improvements are in-flight.
- **AgentScope 2.0 migration** (#4727) — top strategic priority, likely to be the defining feature of v1.2.

---

## User Feedback Summary

### Pain Points (Explicit from Issues)

| Pain Point | Frequency | Severity |
|------------|-----------|----------|
| Regressions in `.post2` breaking existing workflows | 5+ reports | Critical |
| File download broken (non-text formats) | Repeated across versions | High |
| Windows client memory/process explosion | 1 report with severe symptoms | Critical |
| Docker auto-crash/restart loops | 1 report with production impact | High |
| Scheduled tasks non-functional | 1 report with detailed reproduction | High |
| Memory search UI confusion | 1 report with clear rendering bug | Medium |
| Math formula rendering broken | 2 reports (duplicate issue) | Medium |
| Agent dialogue gets stuck (long conversations) | 1 report | Medium |

### What Users Like
- **Visual model fallback** feature (PR #5069) — adding text-only → visual model transcription is being actively developed.
- **Token/context usage popover** (PR #5130) — per-turn usage tracking is well-received (UI enhancement).
- **Data analysis plugin** (PR #4622) — DataPaw plugin with 12 BI skills was contributed by the community.

### Overall Sentiment
Users are **technically sophisticated but frustrated** by the pace of regressions. Multiple issues include "fixed in previous version, broken again" language. The community is **actively participating in bug reporting** with screenshots and reproduction steps, but there is an underlying expectation for **more rigorous regression testing** before releases.

---

## Backlog Watch

### Long-Unanswered Critical Issues

1. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — AgentScope 2.0 migration** (17 days open, 10 comments, 2 👍)
   - **Status**: Active discussion continues. This is a planned breaking change — the project needs to publish a clear migration timeline, compatibility matrix, and documentation. Users asking "When?" (Issue #5149: "when can I upgrade to AgentScope 2.0?") suggest this is top of mind.

2. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) — Scheduled tasks never trigger** (3 days, 11 comments)
   - **Status**: **No maintainer has assigned, labeled, or responded.** This is the most-commented active bug with zero maintainer engagement. Risk of user frustration.

3. **[#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) — Windows process accumulation** (logged today, 3 comments)
   - **Status**: New, no maintainer response. Critical severity.

### Oldest Open PRs Needing Attention

4. **[#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) — DataPaw data-analysis plugin** (21 days open, `Under Review`, first-time contributor)
   - **Status**: Large plugin contribution (12 BI skills) from a first-time contributor. Needs code review and maintainer attention to avoid discouraging new contributors.

5. **[#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) — Decouple plugin loader from agent startup** (10 days open)
   - **Status**: Fixes a critical bug in frozen environments (PyInstaller/Tauri). Has been open for 10 days with no updates — important for desktop deployment stability.

### Maintainer Engagement Gap
Several high-engagement issues (#5064, #5138, #5140) lack any maintainer response. The community is providing detailed reproduction steps and screenshots but receiving no acknowledgment. **This creates a risk of contributor burnout and user churn** — even a short acknowledgment ("we've reproduced this, working on a fix") would significantly improve community sentiment.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-13

## Today's Overview

ZeroClaw continues at an elevated activity pace following the v0.8.0 release, with 14 issues updated and 35 pull requests active in the last 24 hours. The project is in a **heavy post-release stabilization and unification phase**, with maintainers executing a major architectural consolidation — the three-agent turn engine unification (RFC #7415) has already been implemented as a single PR (#7540). Bug reports are flowing in from new users on macOS and Windows, indicating growing adoption but also exposing onboarding friction. The community is highly engaged, submitting both critical bug fixes and substantial feature PRs across channels, providers, and the gateway.

## Releases

**No new releases today.** The project remains on v0.8.0, with the release queue tracker (#7112) now closed, indicating the Stable-tier promotion and breaking-change cleanup for that version is complete. The v0.8.1 PR queue tracker (#6970) remains active as the next release target.

## Project Progress

**Merged/closed PRs (4 total):**
- **#7545** — `fix(runtime): auto-include discovered MCP tools in risk_profile allowed_tools` (closed) — Critical fix: after flipping `mcp.enabled` default to `true`, MCP tools enumerated at startup were invisible to agents with explicit `allowed_tools` in their risk profile. A follow-up PR (#7547) remains open with the same approach.
- **#7529** — `fix(gateway): only print dashboard URL when web_dist_dir is available` — UX improvement to avoid misleading users with a non-functional dashboard URL.
- **#7528** — `fix(update): use .tar.gz for Windows assets in gnu-vs-android test` — Test fix for asset selection logic.
- **#7530** — `fix(update): accept .zip release assets on Windows targets` — Enables `zeroclaw update` on Windows, previously blocked because the updater only accepted `.tar.gz`/`.tgz`.

**Significant open PRs advancing core architecture:**
- **#7540** (refactor, open) — Consolidation of the three agent turn engines onto `run_tool_coll_loop`, directly implementing RFC #7415 as a single commit. This is the highest-impact refactor in progress, affecting channels, gateway, CLI, and embedded agent usage.
- **#7549** (fix, open) — Aligns `zeroclaw plugin install` paths with runtime discovery paths, fixing a silent invisibility bug for CLI-installed WASM plugins. Also adds legacy migration.

## Community Hot Topics

1. **RFC: Unify agent turn engines (#7415)** — 3 comments, 0 reactions. The most architecturally significant discussion this week. The author Nillth reported that maintainers directed a single consolidation PR (#7540) rather than the phased migration originally proposed. This indicates strong maintainer alignment on rapid architectural cleanup. [Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)

2. **Multi-session gateway web chat UI (#7543)** — New feature request from NiuBlibing asking for session sidebar with new/switch/rename/delete. This is the top feature request by user demand signal, as the single-session-per-agent limitation is a clear usability blocker for anyone running multiple conversations. [Issue #7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)

3. **`ask_user` fails in gateway WebSocket sessions (#7542)** — S1 severity bug reported by the same user (NiuBlibing). The `ask_user` tool fails immediately with "Channel closed before receiving a response" when used from the web dashboard. No fix PR exists yet. [Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)

4. **V3 legacy path issues in gateway (#7541)** — Reported by NiuBlibing: since the `Config.workspace_dir` → `Config.data_dir` rename, legacy paths still use the shared `data_dir` as agent workspace, causing incorrect default session directories for gateway WebSocket sessions and one-shot channel sends. [Issue #7541](https://github.com/zeroclaw-labs/zeroclaw/issues/7541)

## Bugs & Stability

**S1 — Workflow Blocked (4 new today):**

| Bug | Component | Status | Fix PR? |
|-----|-----------|--------|---------|
| Dashboard not available on macOS brew install (#7523) | web dashboard | Needs maintainer review | No |
| `ask_user` fails in gateway WebSocket sessions (#7542) | gateway/api | New, unassigned | No |
| `zeroclaw quickstart` fails on Windows 10 — "no map-keyed/list section at peer-groups" (#7537) | runtime/daemon | New, needs triage | No |
| macOS app not working — permission detection fails, empty window (#7527) | runtime/daemon | New, needs triage | No |
| Docker build failure — missing g++ for cargo web build (#7533) | unknown | Fix PR exists (#7534) | ✅ #7534 open |
| Subagents not inheriting "cwd" in ACP sessions (#7263) | ACP channel | CLOSED/accepted | Fix not tracked |

**S2 — Degraded Behavior (1 new):**
- V3 legacy paths use shared `data_dir` as agent workspace_dir (#7541) — gateway WS default session cwd and one-shot channel send builder still point to old paths. Impact: incorrect file locations for chat sessions. Fix standards unknown.

**S3 — Minor:**
- No new S3 bugs today.

**Stability pattern:** The wave of S1 bugs on macOS, Windows, and Docker suggests v0.8.0 has significant platform-specific onboarding friction. The macOS app (#7527) and Windows quickstart (#7537) blockers will likely deter new users. The gateway session bugs (#7542, #7541) affect core usability for existing users running the web dashboard.

## Feature Requests & Roadmap Signals

**High-signal user-requested features:**

1. **Multi-session gateway web chat UI (#7543)** — A session sidebar for independent conversations per agent. Currently the strongest UX feature request. Likely targeted for v0.8.1 given the gateway refactoring underway.

2. **llama.cpp model router (#7539)** — Quick model switching for local models. User "abdulhakam" reports the default only works with the first model loaded. Indicates growing interest in local/fine-tuned model usage that requires runtime model swapping.

3. **Streaming card messages for QQ/DingTalk/WeChat/Feishu (#7531)** — User "jokewithme110" reports current card message sending blocks the UI, causing wait time and anxiety. Suggests Chinese market users are deploying in high-interaction chatbot scenarios where perceived latency matters.

4. **Twitch chat channel (#6443)** — Already closed as accepted, with the description stating it's a thin IRC wrapper. Likely merged into v0.8.0 or will land in v0.8.1.

**Predictions for v0.8.1:**
- Multi-session gateway UI (evidenced by #7543 + active gateway refactoring)
- llama.cpp model router (high community interest, small scope)
- Streaming card messages for Chinese platforms (clear user demand)
- NEAR AI Cloud provider (#6842) — open since May 21, risk medium, seems ready for merge

## User Feedback Summary

**Pain points from real users:**

1. **Onboarding friction** — Three different new users reported installation failures across platforms:
   - "swellee" on macOS 15.7.7: app can't detect permissions, shows empty page, windows disappear on restart (#7527)
   - "hejiangda" on Windows 10: `zeroclaw quickstart` fails with cryptic config parsing error (#7537)
   - "rushidesai" on Docker: build fails due to missing C++ compiler (#7533)

2. **Usability regression in v0.8.0** — "luckbyte" reports the web dashboard is "not valiable" (sic) after brew install, with the error message suggesting the build step was missed in packaging (#7523).

3. **Workspace confusion** — "tidux" reported subagents don't inherit `cwd` in ACP sessions (#7263), where repos exist outside the expected workspace directory. Fixed in v0.8.0.

4. **Gateway session issues** — "NiuBlibing" filed three related bugs (#7542, #7541, #7543) showing the gateway WebSocket session management is fragile post-V3 schema rename.

**Satisfaction signals:**
- The llama.cpp router request (#7539) starts with "I recently tried this app and found it very useful for working on smaller tasks with small local models" — indicating successful use cases exist.
- RFC #7415 was executed rapidly per maintainer direction, suggesting the core team is responsive to community-submitted architectural proposals.

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

1. **#6970 — v0.8.1 integration/channel/provider/tool PR queue tracker** — Updated June 12, 0 comments. This operational tracker has no maintainer engagement since creation. Risk medium. If maintainers are ignoring their own queue tracker, PR routing may be fragmented.

2. **#6443 — Twitch chat channel** — CLOSED and accepted May 6, but no release or merge confirmation. The feature may be in a PR bundle not linked to the issue. Users looking for this feature have no visibility into delivery timeline.

3. **#6842 — NEAR AI Cloud provider** — Open since May 21, last updated June 12, 0 comments from maintainers. Risk medium, developer "PierreLeGuen" has done significant config schema work but is blocked on review.

**PRs needing maintainer review (duration > 24h with no activity):**
- **#7424** — fix(web_fetch): wildcard private host resolution (June 9, last updated June 12)
- **#7429** — feat(plugins): wasmtime dependency (June 9, last updated June 12)
- **#7516** — fix(quickstart): stdin TTY check (June 11, last updated June 12)
- **#6842** — NEAR AI Cloud provider (May 21, last updated June 12)

**Overall health assessment:** The project is in a healthy post-release surge with strong community contribution, but maintainer bandwidth appears stretched — critical S1 bugs on new platforms lack responses, and several substantial PRs sit unreviewed for weeks. The architectural consolidation (#7540) is a positive signal for long-term maintainability, but the onboarding failures risk losing the new users that v0.8.0 was meant to attract.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*