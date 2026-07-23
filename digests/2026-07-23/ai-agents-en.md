# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 434 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-23 01:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the project digest for OpenClaw on 2026-07-23.

---

## OpenClaw Project Digest — 2026-07-23

### 1. Today's Overview

The OpenClaw project is exhibiting **very high activity** with 434 issues and 500 pull requests updated in the last 24 hours. The ratio of 149 closed issues to 285 open, and 204 merged/closed PRs to 296 open, suggests a **healthy but strained maintenance pipeline**, with maintainers actively triaging a massive influx of work. No new releases were cut today, indicating a focus on stabilization and feature development rather than packaging. The heavy volume of "ClawSweeper" labeling (an internal review bot) suggests the project is scaling its review process via automation to keep up with the community.

### 2. Releases

**None.** No new versions of the project were released in the last 24 hours.

### 3. Project Progress

Today saw significant movement on major feature branches and critical bug fixes:

- **Localization & Internationalization (i18n):** A large batch of PRs from contributor `giodl73-repo` advanced the localization framework. `PR #112784` (Feat: prove catalog authoring and refresh loop) and `PR #112801` (Feat: require new surface dispositions) build the pipeline for translating the user interface. `PR #111543` (Docs: add contributor ownership guide) and `PR #111544` (Feat: localize TUI status summary) formalize the workflow for community translators. These represent a **significant infrastructure push** toward multi-language support.
- **Plugin Development Kit (PDK):** `PR #112820` and `PR #112818` expanded the Plugin SDK to allow plugins to open Gateway-managed realtime voice sessions and return emitted events from the realtime session harness. This gives third-party developers the ability to build voice-enabled integrations (e.g., an avatar plugin that reacts to speech) without handling complex agent or provider logic.
- **Claw Manifest System:** `PR #112773` (Feat: add portable agent policy settings) and `PR #112391` (Add CLAW.md manifest support) were merged, establishing a new standard for portable agent definitions. This is a **foundational architectural change** for packaging and sharing agents across different OpenClaw installations.
- **Stability & Platform Fixes:** `PR #112836` (Fix: keep user footer controls in reading order) addressed an accessibility issue. `PR #112816` (Fix(slack): publish Socket Mode transport liveness) targets a long-standing bug where Slack connections appear healthy while silently dropping inbound events. `PR #112829` (Fix(plugins): keep versioned installs off source checkout paths) closes a critical packaging bug where plugin installs could break after a repository checkout was removed.

### 4. Community Hot Topics

The following issues generated the most discussion and engagement from the user base:

- **#75: Linux/Windows Clawdbot Apps** (115 comments, 80 👍) — [Link](https://github.com/openclaw/openclaw/issues/75)
  - *Analysis:* This remains the **most requested feature** by a wide margin. Users are demanding parity with macOS/iOS, emphasizing that the project is currently incomplete for a large segment of users. The high comment count (including labeling noise) indicates deep user frustration and strong desire for a solution. This is likely a **major roadmap priority** for the next major release cycle.

- **#85333: Performance Regression in `doctor --fix`** (17 comments) — [Link](https://github.com/openclaw/openclaw/issues/85333)
  - *Analysis:* A 4-5x performance regression in the diagnostic and auto-fix tool is a **major quality-of-life blocker** for operators. The detailed logs and bisection data provided by user `samson1357924` show it's a specific bottleneck in session snapshot path traversal. The community is actively helping to narrow the root cause, indicating a collaborative debugging effort.

- **#13583: Pre-response enforcement hooks (hard gates)** (16 comments) — [Link](https://github.com/openclaw/openclaw/issues/13583)
  - *Analysis:* This feature request for mandatory tool-call rules before the agent emits an answer reflects a growing need for **enterprise and high-stakes workflows** (finance, security, operations). Users are signaling that "soft" instructions in system prompts are insufficient for safety-critical deployments. This is a strong signal that OpenClaw is being used in production environments where agent behavior must be deterministic and secure.

### 5. Bugs & Stability

A significant number of high-severity bugs and regressions are currently open, indicating a period of churn following recent releases.

| Issue ID | Summary | Severity | Fix PR Available? |
| :--- | :--- | :--- | :--- |
| #108435 | **Gateway fails to start** after update to 2026.7.1 (regression). | **P0** (Crash) | No |
| #91009 | Codex PreToolUse hook spawns CPU-bound processes, stalling RPC. | **P1** (Crash/Loss) | No |
| #10659 | Feature Request: Masked Secrets (protection against leak/injection). | **P1** (Security) | No |
| #92043 | 180s compaction timeout fails identically every turn with no progress reuse. | **P1** (Crash) | No |
| #99054 | Teams app removal/re-add retains prior DM session history. | **P1** (Data/Security) | `PR #112816` (partial fix for Slack) |
| #96857 | Normal tool text outputs degrade to “(see attached image)” placeholders. | **P1** (UX/Data Loss) | No |
| #90840 | Subagent run completion delivered as raw output to user instead of parent summary. | **P1** (Behavior) | No |

### 6. Feature Requests & Roadmap Signals

Several feature requests have gained traction and appear to be shaping the project's direction:

- **Agent Packaging & Portability:** The merged `CLAW.md` manifest PR (#112391, #112773) suggests the team is building a formal system for **sharing and deploying agents**. This is likely a precursor to an "app store" or agent marketplace, and is a strong candidate for the next stable release.
- **Localization Infrastructure:** The large batch of i18n PRs (#111543, #112784, etc.) is a clear roadmap signal. OpenClaw is investing heavily in **multi-language support**, likely to expand its user base beyond English-speaking markets.
- **Plugin Voice SDK:** The new Plugin SDK for voice sessions (#112820) opens the door for **rich, custom voice interfaces**. This could be the foundation for a "Talk" plugin ecosystem, enabling custom UI overlays, avatars, or accessibility tools.
- **Hard-gate Enforcement (#13583) & Masked Secrets (#10659):** These are critical for **enterprise security and compliance**. Given the project's focus on production deployments, expect these to be actively worked on for the next milestone (potentially 2026.8.x).

### 7. User Feedback Summary

The community feedback reveals a dual narrative: **satisfaction with the project's power and flexibility**, but **frustration with its stability and documentation gaps during this rapid development cycle**.

- **Pain Points:** The most frequent complaints involve **broken regressions** after updates (#108435, #85333), **unreliable channel connectivity** (Slack in #77249, LINE in #94626, Zalo in #110803), and **steep learning curves** for deployment on non-macOS platforms. The "missing Linux/Windows apps" (#75) is the single largest source of user dissatisfaction.
- **Use Cases:** Users are clearly running OpenClaw in **production**, with reports detailing complex fallback chains (#85103), high-availability deployments (#87314), and integrations with enterprise tools like Teams (#99054) and Slack (#112816).
- **Satisfaction:** Despite the bugs, the high volume of detail in bug reports (e.g., `samson1357924`'s bisection in #85333) and the willingness to test new features indicate a **deeply engaged and technically sophisticated community** that sees long-term value in the project.

### 8. Backlog Watch

Several critical items are in a state of staleness or awaiting a maintainer decision, creating risk for the project.

- **#41199: Agent-to-Agent Communication Tool Parameter Conflicts** — *P1, stale, linked PR open.* This bug blocks reliable multi-agent cooperation. Despite having a linked PR, it has had no activity in over a week and is marked `stale`. This is a **critical path item for the A2A (agent-to-agent) feature set**.
- **#39807: Billing error (402) causes infinite retry death spiral** — *P1, stale, source repro available.* This is a catastrophic bug that can burn unlimited API credits. Although a root cause is identified, the issue has been open since March and has lost maintainer review attention (`clawsweeper:needs-maintainer-review`).
- **#108435: Gateway Fails to Start (P0 regression)** — *Open, no fix PR.* This is a release-blocking regression for the latest version (2026.7.1). The fact that it has no linked fix PR indicates either the root cause is still being found or the fix is not yet public. This should be the **top priority for the core engineering team**.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source landscape on July 23, 2026 reveals a high-velocity ecosystem where **OpenClaw** dominates as the reference implementation, while specialized projects carve distinct niches in edge deployment, enterprise security, and specific platform integrations. The ecosystem is undergoing a major architectural shift toward **portable agent definitions** (manifest files, session-scoped configurations) and **multi-agent orchestration**, with five projects actively investing in agent-to-agent communication patterns. Production reliability remains the community's primary pain point—projects with rapid release cycles (CoPaw, IronClaw) surface regression complaints, while more conservative projects (NullClaw, Moltis) earn trust through focused bug fixes. A clear **platform parity gap** exists: desktop/mobile clients for non-macOS systems represent the single largest cross-project user demand.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Signal |
|---------|-------------|-----------|---------------|---------------|
| **OpenClaw** | 434 (149 closed) | 500 (204 merged) | None | Strained but productive; scaling automation |
| **NanoBot** | 6 (2 closed) | 63 (40 merged) | None | Highly efficient pipeline; strong merging cadence |
| **Hermes Agent** | 50 (4 closed) | 50 (9 merged) | None | Heavy development phase; platform parity focus |
| **IronClaw** | 50 (14 closed) | 50 (21 merged) | None | Intense pre-launch stabilization; architectural refactoring |
| **ZeroClaw** | 50 (active) | 50 (14 merged) | None | Sustained v0.9.0 push; Windows CI gap |
| **CoPaw** | 31 active | 50 updated | **v2.0.0.post4** | High velocity with regression risks |
| **PicoClaw** | 4 updated | 5 updated | None | Moderate; focused on bug fixes |
| **NanoClaw** | 1 open | 3 open | None | Low maintainer velocity; pending reviews |
| **LobsterAI** | 1 closed | 5 merged | None | Healthy; stability + UI polish |
| **NullClaw** | 1 closed | 1 merged | None | Low but responsive; critical fix turnaround |
| **Moltis** | 0 | 1 open | None | Quiet; UX polish phase |
| **ZeptoClaw** | 0 | 0 | None | No activity |

**Scale tiers**: OpenClaw operates at **10x the activity volume** of the next tier (Hermes, IronClaw, ZeroClaw, CoPaw), confirming its position as the ecosystem's primary development target. NanoBot's exceptional PR merge ratio (63%) suggests a well-oiled review pipeline despite lower absolute volume.

## 3. OpenClaw's Position

**Advantages over peers:**
- **Community gravity**: 434 issues and 500 PRs updated in 24 hours—5-10x more engagement than any other project. This creates a superior feedback environment for bug discovery and feature validation.
- **Architectural leadership**: First to implement `CLAW.md` portable agent manifests (PR #112391) and session-scoped plugin voice SDKs (PR #112820)—capabilities that other projects will likely adopt.
- **Review automation maturity**: The "ClawSweeper" labeling bot handles triage at scale, a pattern ZeroClaw and NanoBot are beginning to replicate.
- **Production depth**: Community reports detail complex fallback chains and high-availability deployments (issues #85103, #87314), indicating enterprise-grade usage that rivals IronClaw's enterprise push.

**Technical approach differences:**
- Unlike NanoBot's session-scoped model presets (PR #4866) and IronClaw's `ProductSurface` abstraction, OpenClaw's architecture emphasizes **gateway-managed plugin ecosystems** and **agent packaging portability**—a more consumer-focused, "app store" model.
- OpenClaw's i18n infrastructure investment (multiple PRs from `giodl73-repo`) surpasses Hermes Agent's platform-specific localization, aiming for true multi-language support rather than just UI translation.

**Weaknesses relative to peers:**
- **Platform gap**: OpenClaw lacks Linux/Windows desktop apps (issue #75, 115 comments)—a gap that PicoClaw and ZeroClaw partially address with cross-platform support.
- **Stability churn**: The P0 gateway regression (#108435) and 5 P1 bugs without fix PRs suggest OpenClaw's rapid feature pace outpaces stabilization—a problem CoPaw also exhibits but IronClaw is actively managing.
- **No release today**: Unlike CoPaw (v2.0.0.post4), OpenClaw's last release predates this digest, potentially delaying critical fixes.

## 4. Shared Technical Focus Areas

The following requirements emerge across **three or more projects**, signaling ecosystem-wide priorities:

| Requirement | Affected Projects | Specific Manifestations |
|-------------|------------------|------------------------|
| **Portable agent/packaging format** | OpenClaw, ZeroClaw, CoPaw | CLAW.md manifests (OpenClaw), agent-card.json (ZeroClaw), skills management (CoPaw) |
| **Multi-agent orchestration** | OpenClaw, NanoBot, IronClaw, Hermes Agent | Subagent evolution (NanoBot #5000), Agent-to-Agent (ZeroClaw #7218), delegation model selection (Hermes #69694) |
| **Enterprise OAuth/SSO** | OpenClaw, IronClaw, ZeroClaw | OIDC auth provider (ZeroClaw #7141), Google OAuth config (IronClaw #6534), masked secrets (OpenClaw #10659) |
| **Voice/real-time session support** | OpenClaw, PicoClaw, CoPaw | Plugin voice SDK (OpenClaw #112820), ESP32 voice gateway (CoPaw via Xiaozhi PR #2584) |
| **Cross-platform desktop parity** | OpenClaw, Hermes Agent, ZeroClaw | Linux/Windows apps (OpenClaw #75), Desktop SSH mode (Hermes #69551), Windows CI (ZeroClaw #7462) |
| **Platform channel reliability** | Hermes Agent, PicoClaw, NullClaw, IronClaw, CoPaw | Matrix reconnection (PicoClaw #3203), Telegram uploads (Hermes #62936), Discord gateway (NullClaw #977), Telegram pairing loop (IronClaw #6475) |
| **Observability/telemetry** | ZeroClaw, IronClaw, LobsterAI | OTel span correlation (ZeroClaw #6641), benchmarking mode (IronClaw #6539), transcript OOM guard (LobsterAI #2375) |

**Emerging pattern**: **Four projects** (OpenClaw, NanoBot, IronClaw, ZeroClaw) are independently building **session-scoped model configuration**—allowing per-conversation LLM selection without global agent changes. This suggests the community has converged on a shared requirement that isn't yet standardized across projects.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | IronClaw | ZeroClaw | CoPaw |
|-----------|----------|---------|----------|----------|-------|
| **Target user** | Power users, plugin developers | Multi-channel operators | Enterprise deployments | Scalable multi-node | Creative/Multimedia |
| **Primary architecture** | Gateway + Plugin SDK | Provider-agnostic runtime | ProductSurface abstraction | Daemon node mesh | Agent + scroll context |
| **Distribution model** | Agent marketplace (emerging) | Session-scoped configs | REST APIs + admin console | Firmware + daemons | Docker + pip |
| **Differentiator** | World's largest community | Best merge-to-close ratio | Enterprise security focus | Hardware integration (ESP32) | Creative tools (qwenpaw-creator) |
| **Platform support** | macOS/iOS (biased) | Cross-platform (WebUI) | Hosted + CLI | Linux-heavy, Windows issues | Windows-compatible (fixes in progress) |
| **Provider strategy** | Any LLM via plugins | 80+ providers (broadest) | Anthropic-heavy | Any LLM; Anthropic reliability stack | GLM, DeepSeek, MiniMax |

**Key architectural divergence**: OpenClaw and IronClaw are both investing in abstraction layers (Plugin SDK vs. ProductSurface), but OpenClaw's is **outward-facing** (third-party developers) while IronClaw's is **inward-facing** (system stability and testing). This reflects fundamentally different scaling strategies—community ecosystem vs. enterprise platform.

**Niche plays**:
- **PicoClaw**: Focused on long-polling channels (Matrix, IRC, DingTalk) and edge hardware—complements OpenClaw's heavy gateway model.
- **LobsterAI**: Windows-first desktop experience with cowork features—unique among projects targeting enterprise communication.
- **Moltis**: Session history UX polish—low activity but addressing a specific pain point shared across all projects.

## 6. Community Momentum & Maturity

### Tier 1: High-Velocity Iteration (Rapid development, stability trade-offs)
- **OpenClaw**: 10x volume, scaling automation, but P0 regressions and platform gaps. **Maturity**: Producing, not yet stabilizing.
- **CoPaw**: Released v2.0.0.post4 today, but user-reported crashes (issue #6376) and a 42-day-old vision bug (#5135). **Maturity**: Feature-rich but quality assurance lagging.
- **IronClaw**: Most organized engineering cadence (14 issues closed + 21 PRs merged today), but in pre-launch stabilization with launch-blocker bugs. **Maturity**: Disciplined refactoring; highest potential for reliability improvement.

### Tier 2: Steady-State Optimization (Stable core, incremental improvements)
- **NanoBot**: Exceptional PR efficiency (40 merged today), session-scoped presets, focused on performance (SQLite indexing). **Maturity**: Well-oiled pipeline; features without regressions.
- **ZeroClaw**: Methodical v0.9.0 RFC process (OIDC, A2A, per-model config). Windows CI gap is the main risk. **Maturity**: Architectural rigor but platform blind spot.
- **Hermes Agent**: Heavy feature work (WhatsApp skills, delegation model selection) but sustained platform-specific bugs (Telegram, Desktop). **Maturity**: Broad capability, uneven reliability.

### Tier 3: Focused Maintenance (Bug fixing, UI polish)
- **NullClaw**: Critical Discord bug fixed same-day—exemplary responsiveness. **Maturity**: Focused, reliable.
- **LobsterAI**: Merged 5 stability PRs (Windows installer, OOM prevention). **Maturity**: Low activity, high quality.
- **Moltis**: Single UX PR open. **Maturity**: Stagnating but stable.

### Tier 4: Stalled/Low Engagement
- **PicoClaw**: Critical Matrix bug (#3203) unaddressed for 21 days. **Maturity**: Maintainer bandwidth risk.
- **NanoClaw**: WhatsApp fix pending 7 days, Telegram PR waiting 25 days. **Maturity**: Community outstrips maintainers.
- **ZeptoClaw**: No activity. **Maturity**: Inactive.

## 7. Trend Signals

**From community feedback across all projects, the following industry trends emerge:**

1. **Portable, shareable agents are the next growth vector**: OpenClaw's `CLAW.md` manifest, ZeroClaw's `agent-card.json`, and NanoBot's multi-agent collaboration proposal (issue #5000) all point toward a future where agents are distributed as packages, not configured from scratch. **Signal for developers**: Invest in manifest/package formats that can span ecosystems.

2. **Platform parity is the #1 adoption blocker**: The most-requested feature across the ecosystem is Linux/Windows desktop support (OpenClaw #75, 115 comments). ZeroClaw's 74 Windows test failures (#7462) and Hermes Agent's Desktop SSH bug (#69551) show that even established projects struggle with cross-platform parity. **Signal for developers**: Prioritize CI for at least Linux + Windows before scaling features.

3. **Enterprise security requirements are accelerating**: Masked secrets (OpenClaw #10659), OIDC SSO (ZeroClaw #7141), hard-gate enforcement (OpenClaw #13583), and admin-managed content policies (IronClaw #6527) all landed in high-priority queues this week. The ecosystem is rushing to meet enterprise compliance demands. **Signal for developers**: Build security (OAuth, credential isolation, audit logging) as a first-class feature, not an afterthought.

4. **Multi-agent orchestration is the next frontier, but undefined**: Four projects are exploring agent-to-agent communication, but with divergent approaches: subagent delegation (NanoBot), built-in A2A discovery (ZeroClaw), delegation model selection (Hermes Agent), and portable agent policies (OpenClaw). No standard has emerged. **Signal for developers**: Early ecosystem play now—contributing to an open A2A protocol could be highly valuable.

5. **Channel reliability is a silent crisis**: Every project with platform integrations (Hermes Agent, PicoClaw, NullClaw, IronClaw, CoPaw) has open bug reports about silent disconnections, event loss, or reconnection failures on Telegram, Matrix, Slack, and Discord. These bugs persist across multiple releases. **Signal for developers**: Robust WebSocket resumption and event replay are table-stakes features, not differentiators.

6. **LLM provider dependency is a growing pain point**: CoPaw's MiniMax-M3 vision bug (42 days, #5135) and Moonshot/Kimi tool schema breakage (NanoBot #5040) highlight that tight coupling to specific providers creates brittle systems. **Signal for developers**: Build provider-agnostic abstractions (tool schemas, capability negotiation) that survive provider changes.

7. **Observability investment is accelerating**: ZeroClaw's OTel span correlation (PR #8752) and IronClaw's benchmarking infrastructure (PR #6539) suggest the ecosystem is maturing beyond "works on my machine" toward production monitoring. **Signal for developers**: OpenTelemetry integration, structured logging, and performance budgets will become expected, not optional.

---

**Summary for decision-makers**: OpenClaw remains the ecosystem's center of gravity for community innovation but carries stability risk. NanoBot and IronClaw offer the best balance of velocity and reliability. For production deployments today, IronClaw's disciplined approach to testing and ZeroClaw's RFC-driven process provide the strongest confidence. For developers building on the ecosystem, investing in **portable agent formats**, **cross-platform CI**, and **provider-agnostic abstractions** will yield the most cross-project value. Watch: the next major release cycle will likely ship agent manifests and multi-agent communication as standardized features.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-23

## Today's Overview

The project shows extremely high activity with **63 PRs updated** and **6 issues updated** in the last 24 hours, the vast majority of which (40) were merged or closed — indicating a highly productive day. The open-to-closed ratio for PRs (~2.9:1) suggests an efficient review pipeline, though **23 PRs remain open**, many carrying `priority: p1` labels. No new releases were published. The issue tracker remains healthy with 4 active issues against 2 closed. Overall, the project is in a strong engineering cadence with major work on provider integrations, channel fixes, and infrastructure performance.

## Releases

No new releases were published in the last 24 hours. The latest available release remains from earlier in the project's history.

## Project Progress

**40 PRs were merged/closed** today. Notable features that advanced:

- **[PR #4866]** `feat(agent): make model presets session-scoped` — merged. A significant architectural change making model preset selection persist only explicit per-session overrides, with a single immutable `LLMRuntime` per turn for consistent provider behavior.
- **[PR #5003]** `perf(webui): index conversation history in SQLite` — opened, targeting a major performance bottleneck by replacing JSONL transcript reads with an indexed SQLite WAL read model, moving disk operations off the event loop.
- **[PR #5035]** `feat(providers): add xAI Grok OAuth with capability-gated X Search` — opened, adding native OAuth 2.0 + PKCE for xAI Grok subscriptions, a new `grok-4.5` provider, and capability-gated web search.
- **[PR #5033]** `feat(telegram): support multiple bot instances in WebUI` — opened, adding backward-compatible multi-bot configuration with independent runtime names, token validation, and proxy settings.
- **[PR #5017]** `feat(webui): show the actual fallback model` — opened, improving WebUI transparency by publishing chat-scoped model-attempt events and showing fallback transitions in real time.

Multiple **bug fixes** were merged, including `fix(agent): keep background turns silent when the model ends empty` (PR #4988), which prevents spurious "I completed the tool steps" messages in cron/background contexts.

## Community Hot Topics

- **[Issue #5000]** — **Proposal: evolve subagent system toward multi-agent collaboration**  
  *Author: bingqilinweimaotai | 4 comments | Most discussed open issue*  
  This is the most active discussion. The author argues the current subagent system is closer to "background task delegation" than true multi-agent collaboration, lacking persistent identities, shared task state, and inter-agent communication. This signals strong community interest in architectural evolution toward more sophisticated agent orchestration.

- **[PR #2584]** — **Feature/xiaozhi support**  
  *Author: zavaruev | Longest-running open PR (since March)*  
  Despite no comment count data, this PR for ESP32 voice gateway support with WebSocket + Opus has been open for nearly 4 months, suggesting either complexity or stalled review. It may require maintainer attention.

- **[PR #4494]** — **PWA support and mobile swipe gesture for sidebar**  
  *Author: zpljd258 | Open since June*  
  A community-requested mobile UX enhancement that has been waiting for review for nearly a month. Given the project's WebUI focus, this could see movement soon.

**Underlying need**: The multi-agent collaboration proposal (Issue #5000) reflects a broader community desire for NanoBot to move beyond single-agent-with-tools toward distributed, persistent agent systems — a feature that would differentiate it from simpler chatbot frameworks.

## Bugs & Stability

Today's bug reports and fixes arranged by severity:

| Severity | Bug | Status | Fix PR? |
|----------|-----|--------|---------|
| **High** | **MCP tool schema with non-`#/$defs/` $ref disables entire model on Kimi/Moonshot** (Issue #5040) | **Open** | None yet |
| **High** | **Dream batches with no diff can starve all later history indefinitely** (Issue #5041) | **Open** | None yet |
| **High** | **Null schedule/runHistory in cron `jobs.json` quarantines entire store** (Issues #5042, #5043) | **Reported** | PRs #5042, #5043 (both open) |
| **Medium** | **Null `approved` channel lists in `pairing.json` crash load** (Issue via PR #5044) | **Reported** | PR #5044 (open) |
| **Medium** | **Fenced markdown tables corrupted in Slack/Feishu card rendering** (Issues via PRs #5045, #5046) | **Reported** | PRs #5045, #5046 (both open) |
| **Medium** | **Media path vs workspace restriction conflict with Feishu uploads** (Issue #5028) | **Open** | None yet |

**Critical note**: Issue #5040 is particularly severe — a single MCP tool with a self-referential `$ref` in its schema completely disables model inference on strict providers (Kimi/Moonshot), breaking all tool-using workflows on those platforms.

## Feature Requests & Roadmap Signals

- **Multi-agent collaboration** (Issue #5000) — The most impactful feature request. Likely candidate for a future minor release given strong community support.
- **Parallel Search MCP preset** (PR #5047) — New integration with `search.parallel.ai`, free and API-key-less. Low effort, high usability gain.
- **Idle compaction scan interval configuration** (PR #5036) — Requested by a Raspberry Pi user experiencing 30-40% CPU usage during idle. Practical performance enhancement targeting edge hardware.
- **xAI Grok OAuth** (PR #5035) — New provider integration with capability-gated search. Signals interest in broader LLM provider support, especially for models with web search capabilities.
- **DingTalk private chat gating** (PR #4446) — Community request for group-only operation modes, especially in enterprise messaging channels.

**Prediction for next release**: The session-scoped model presets (PR #4866) and the WebUI SQLite indexing (PR #5003) are high-impact infrastructure improvements likely to ship soon. Multi-bot Telegram support (PR #5033) and fallback model display (PR #5017) are polished UX features also close to merge.

## User Feedback Summary

**Pain points**:
- **Performance on resource-constrained hardware**: User running NanoBot on Raspberry Pi reports continuous 30-40% CPU consumption during idle due to aggressive compaction scanning (PR #5036).
- **MCP schema strictness**: User reports that tools with non-standard `$ref` patterns completely break Kimi/Moonshot integrations (Issue #5040), suggesting real-world usage with custom MCP tools.
- **Media file access confusion**: Feishu channel user reports uploaded media files stored outside the workspace boundary become inaccessible after workspace restrictions are enabled (Issue #5028).
- **WebUI visibility loss**: User reports multi-turn conversations break when subagent completion timing creates orphaned system turns that the WebUI cannot display (Issue #4948, closed).

**Satisfaction signals**:
- High volume of community-contributed features (multiple PRs from different authors) indicates a healthy ecosystem of active users building on NanoBot.
- The multi-agent collaboration proposal (Issue #5000) represents sophisticated usage — users are not just requesting fixes but proposing architectural evolution.

## Backlog Watch

| Item | Age | Status | Risk |
|------|-----|--------|------|
| **[PR #2584] Feature/xiaozhi support** | ~118 days open | Open, commented | Stale — core ESP32 voice gateway support may drift from `main` |
| **[PR #4439] feat(tools): add read-only search_history tool** | ~32 days open | Open, commented | Low risk but may conflict with memory system refactoring |
| **[PR #4494] PWA support and mobile swipe gesture** | ~29 days open | Open, commented | Community contribution may be abandoned if not merged soon |
| **[PR #4446] feat(dingtalk): gate private chats** | ~31 days open | Open, commented | Low complexity — likely waiting for reviewer bandwidth |

**Maintainer attention needed**: PR #2584 (Xiaozhi ESP32 support) is the most urgent backlog item due to its age and potential for merge conflicts. PR #4494 (PWA/mobile) is a quality-of-life improvement that would benefit the many mobile users reporting WebUI issues.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 23, 2026.

---

## Hermes Agent Project Digest: 2026-07-23

### 1. Today's Overview
Activity remains very high, with 50 issues and 50 PRs updated in the last 24 hours. The project sustains a high volume of work, processing 4 closed issues and 9 merged/closed PRs today. However, there were zero new releases, suggesting the team is currently in a heavy development and stabilization phase rather than a release cycle. A significant portion of the open work deals with session state integrity, SSH/profile configuration, and platform-specific bugs, indicating a focus on core reliability and multi-platform parity.

### 2. Releases
**No new releases today.**

### 3. Project Progress
The following 9 PRs were merged or closed today, advancing project stability and features:
- **PR #69729 (Closed):** Added Desktop E2E tests for "queued" and "steer" turn boundaries, improving test coverage for complex user-agent interactions.
- **PR #7176 (Closed):** Updated documentation to clarify the `api_mode` configuration for custom endpoints, reducing configuration guesswork for users.
- **PR #33180 (Closed):** Merged a feature for the Feishu platform, converting markdown tables to interactive card elements, enhancing the richness of responses on that platform.
- **PR #69721 (Closed):** Implemented typing indicators for relay-fronted platforms, improving the user experience by showing "Agent is typing..." during response generation.
- **PR #69699 (Open):** A CI fix to publish inline E2E evidence, strengthening the build pipeline's integrity and auditability.
- **PR #69725 (Open):** Fixed a desktop warm-resume race condition where a user's correction could be dropped if submitted during an active inference turn.
- **PR #69664 (Open):** Fixed a bug in Desktop SSH remote mode where the client hardcoded the SSH token directory, breaking when a non-default profile was active.
- **PR #58004 (Open):** Addressed a long-standing issue where `hermes update` could fail, adding a self-healing mechanism for corrupted virtual environments.
- **PR #69683 (Open):** A bot-driven PR to apply formatting fixes automatically.

### 4. Community Hot Topics
The community is currently most engaged with session state persistence and cross-platform consistency.
- **Cross-platform session sharing ([#4335](https://github.com/NousResearch/hermes-agent/issues/4335), 9 comments):** A key feature request for sharing context between CLI and Telegram instances. This remains a highly desired capability but carries significant architectural risk ("sweeper:risk-session-state").
- **Desktop session navigation bug ([#66875](https://github.com/NousResearch/hermes-agent/issues/66875), 7 comments):** A high-traffic bug report where switching between tabs (e.g., Plugins) and back breaks session selection. This is frustrating core functionality, signaling a regression in the Desktop UI's session management.
- **Telegram large file upload failure ([#62936](https://github.com/NousResearch/hermes-agent/issues/62936), 6 comments):** A persistent bug where environment variables meant to control timeouts for media uploads are ignored, causing all uploads over ~15 MB to fail. This is a sticking point for users relying on the Telegram gateway.

### 5. Bugs & Stability
The project is experiencing a high volume of bug reports, several involving sessions and platform parity.
- **Critical (P1):**
    - **Silent Context Overflow ([#62708](https://github.com/NousResearch/hermes-agent/issues/62708)):** A severe user-experience bug where the agent silently stops working due to context overflow without any user notification.
- **High (P2):**
    - **Desktop SSH / Profile Mistmatch ([#69551](https://github.com/NousResearch/hermes-agent/issues/69551)):** The SSH remote mode for the desktop app is completely broken when using non-default profiles. A fix PR ([#69664](https://github.com/NousResearch/hermes-agent/pull/69664)) is already open.
    - **Failed Uploads / Cron Disconnects ([#62936](https://github.com/NousResearch/hermes-agent/issues/62936), [#63395](https://github.com/NousResearch/hermes-agent/issues/63395)):** Both Telegram uploads and Matrix cron delivery are experiencing critical failures that disconnect or hang the respective platform adapters.
    - **Provider Error Retry Loops ([#65631](https://github.com/NousResearch/hermes-agent/issues/65631)):** A subtle bug where provider error responses during streaming are misclassified, causing the agent to retry forever and making the user wait indefinitely.
- **Medium (P3):**
    - **Desktop Keyboard Shortcuts ([#46369](https://github.com/NousResearch/hermes-agent/issues/46369)):** Keyboard shortcuts in the Desktop app are hardcoded for QWERTY, ignoring Dvorak and other layouts.

### 6. Feature Requests & Roadmap Signals
- **Next-Gen Session Context:** The request for cross-platform session sharing ([#4335](https://github.com/NousResearch/hermes-agent/issues/4335)) is the strongest roadmap signal. The "needs-decision" label suggests it's on the table but awaiting an architectural decision.
- **Incoming Features:** Several recently opened PRs signal features likely to land soon:
    - **WhatsApp Skill Bindings ([#69726](https://github.com/NousResearch/hermes-agent/issues/69726)):** Porting the `channel_skill_bindings` config option to WhatsApp, allowing for auto-loaded skills per group chat.
    - **Delegation Model Selection ([#69694](https://github.com/NousResearch/hermes-agent/issues/69694)):** Allowing users to specify different LLMs for different sub-agents in a `delegate_task`.
    - **Durable Clarify Prompts ([#44845](https://github.com/NousResearch/hermes-agent/issues/44845)):** A suggestion to change clarify prompts from short-lived timers to durable, ID-addressable decisions, which would be a major improvement for asynchronous communication.

### 7. User Feedback Summary
User sentiment reveals a mix of satisfaction with the agent's intelligence and frustration with platform-specific reliability.
- **Pain Points:** The primary pain points are around session management (e.g., navigation bugs on Desktop) and platform-specific failures (e.g., Telegram uploads breaking). Users are frustrated when features don't work as expected, especially environment variables that are documented but have no effect ([#62936](https://github.com/NousResearch/hermes-agent/issues/62936)).
- **Use Cases:** Users are actively trying to use Hermes for complex, multi-platform workflows (this is implied by the cross-platform sharing request) and for performing real-world tasks (e.g., making an agent work with Apple Notes via PR [#69724](https://github.com/NousResearch/hermes-agent/pull/69724)).
- **Satisfaction:** Users invested enough to report detailed bugs and request sophisticated features (e.g., per-task model selection) indicate a high degree of engagement and confidence in the project's potential.

### 8. Backlog Watch
Several important issues show signs of being stalled or overlooked:
- **NixOS Module Bug ([#21341](https://github.com/NousResearch/hermes-agent/issues/21341), P2, since May):** A specific NixOS installation bug appears to be languishing. It has 5 comments and no assignee, suggesting a lack of maintainer focus on NixOS packaging.
- **macOS CLI Installer ([#45279](https://github.com/NousResearch/hermes-agent/issues/45279), P2, since June):** A persistent bug where the installer creates broken shims for Node/npm on macOS, interfering with Homebrew. Despite a previous fix attempt (PR #38889), the bug persists, which could be eroding trust in the installer's reliability on macOS.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

## Today’s Overview
The PicoClaw project shows **moderate activity** today, with 4 open issues and 5 pull requests updated in the last 24 hours. No new releases have been published. The team appears focused on **bug fixes and incremental improvements**, with one PR merged (a documentation revert) and a new vulnerability patch PR opened. Two issues have been marked stale, and the open PRs touch on infrastructure (Go version update, Bedrock caching) and channel-specific fixes (DingTalk, IRC). The overall health is stable, though several long-standing issues (Matrix reconnection, hook deserialization) remain open without resolution.

## Releases
**No new releases.** The latest release remains at v0.2.9 and v0.3.1 (referenced in issue reports). Maintainers should consider a follow-up patch release to address the Matrix reconnection bug (#3203) and the hook deserialization defect (#3258).

## Project Progress
**Merged/Closed PRs today:**
- **#3285** (CLOSED) — `docs: remove picopaw` (reverts a previous PR). A documentation cleanup, rolled back a change from #3096. Link: https://github.com/sipeed/picoclaw/pull/3285

**Open PRs of note:**
- **#3222** (stale) — DeltaChat refactor: removes legacy features, 200 LOC reduction, improved invite logic and secrets management. Link: https://github.com/sipeed/picoclaw/pull/3222
- **#3163** (stale) — AWS Bedrock prompt caching via Converse API cache points. Potentially significant cost-saving feature for Bedrock users. Link: https://github.com/sipeed/picoclaw/pull/3163
- **#3286** (new) — Go and `x/text` update to address `govulncheck` findings. Immediate security fix. Link: https://github.com/sipeed/picoclaw/pull/3286
- **#3283** (new) — DingTalk inbound picture/image message support. New feature for one of the lesser-used channels. Link: https://github.com/sipeed/picoclaw/pull/3283

## Community Hot Topics
- **#3203** — [BUG] Matrix sync loop reconnection failure (5 comments, 2 👍). The community is concerned about silent death after network disruption. This issue has been open for three weeks with no fix PR attached. Link: https://github.com/sipeed/picoclaw/issues/3203
- **#3258** — [BUG] Process hook `before_tool` `modify` defect (1 comment). A nuanced deserialization bug that discards decision fields and misparses args. Affect hook-based workflows. Link: https://github.com/sipeed/picoclaw/issues/3258
- **#3257** — Feature request for stateless/no-history mode in gateway sessions (1 comment). User wants CLI-like session isolation in gateway mode. Link: https://github.com/sipeed/picoclaw/issues/3257

**Underlying community needs**: Users are crying out for **robust reconnection logic** in long-polling channels (Matrix #3203), **reliable hook middleware** (#3258), and **session isolation** in gateway mode (#3257). These are quality-of-life issues that affect production reliability, especially for always-on agent deployments.

## Bugs & Stability
Ranked by severity:

1. **HIGH** — #3203: Matrix sync loop silent death. No reconnection after any network/server disruption. Systemd does not restart process because main process stays alive. **No fix PR exists.** Link: https://github.com/sipeed/picoclaw/issues/3203
2. **MEDIUM** — #3258: Process Hook `before_tool` `modify` broken. Decision field discarded, args misparsed due to deserialization defect (Go struct tag mismatch? interface{} vs concrete type?). Affects any hook-middleware usage. **No fix PR exists.** Link: https://github.com/sipeed/picoclaw/issues/3258
3. **LOW** — #3287: IRC long message splitting. IRC clients split >512-byte messages; PicoClaw does not reassemble them. User experience fragmentation. **No fix PR exists.** Link: https://github.com/sipeed/picoclaw/issues/3287

**Security fix PR**: #3286 updates Go and `x/text` for `govulncheck`-identified vulnerabilities — an important health indicator that the team is watching CVEs. Link: https://github.com/sipeed/picoclaw/pull/3286

## Feature Requests & Roadmap Signals
- **#3287** — Better long message support in IRC (IRCv3). Request from a lead community member (superuser-does). Likely to be picked up if IRC channel maintainers see value. Link: https://github.com/sipeed/picoclaw/issues/3287
- **#3257** — Stateless/no-history mode for gateway sessions. A direct request to support ephemeral chatbot interactions where conversation state should not persist. Could be a prelude to a **privacy-preserving mode**. Link: https://github.com/sipeed/picoclaw/issues/3257
- **#3283** (PR) — DingTalk image message inbound. Signal of interest in Alibaba ecosystem integration. Link: https://github.com/sipeed/picoclaw/pull/3283

**Prediction**: The next minor release (v0.3.2) will likely include:
- The Go/x/text security patch (#3286)
- DingTalk image support (#3283)
- Possibly the stale PRs #3222 (DeltaChat refactor) and #3163 (Bedrock caching) if maintainers finalize reviews.

The stateless gateway mode (#3257) may appear in v0.4.0 as it represents a more architectural change.

## User Feedback Summary
**Pain points:**
- **Unreliable channels**: Matrix users fear silent disconnects (#3203). This is a production blocker for anyone relying on Matrix-based agents.
- **Hook middleware broken**: #3258 reporter (Shiniese) is using DeepSeek + Telegram with custom RTK rewrite hooks; the defect breaks their entire workflow. User dissatisfaction is clear — they filed a thorough bug report and used "Quick Summary" as placeholder, suggesting frustration with response time.
- **Session management complexity**: #3257 user wants the same `--session` behavior from CLI in gateway mode. Current gateway session derivation from channel/chat ID is inflexible.

**Use case signals:**
- **IRC community** growing: #3287 reporter (superuser-does) wants robust IRC interaction — implies more IRC channel users adopting PicoClaw.
- **DingTalk support** emerging: #3283 PR shows Chinese market users adopting the agent for enterprise messaging (Alibaba ecosystem).
- **AWS Bedrock users** interested: #3163 stale PR shows demand for cost optimization via prompt caching.

**Satisfaction**: Generally positive where core functionality works. Users file detailed, actionable bug reports (good community). However, staleness of key PRs/issues (21+ days for #3203) may erode trust over time.

## Backlog Watch
Issues/PRs needing maintainer attention:

- **#3203** (Matrix reconnection, open 21 days) — **Critical**. No maintainer response. Could be the single highest-impact fix. Link: https://github.com/sipeed/picoclaw/issues/3203
- **#3258** (Hook deserialization, open 8 days) — **Important**. Exact reproduction steps and environment provided. Link: https://github.com/sipeed/picoclaw/issues/3258
- **#3222** (DeltaChat refactor PR, open 19 days, stale) — Significant code cleanup, no review comments. Link: https://github.com/sipeed/picoclaw/pull/3222
- **#3163** (Bedrock caching PR, open 30 days, stale) — Users want this cost optimization. Link: https://github.com/sipeed/picoclaw/pull/3163

**Recommended action**: The maintainers should prioritize reviewing #3203 (Matrix reconnection fix) and #3258 (hook bug fix) before they compound into user churn. The stale PRs #3222 and #3163 should at least receive a status comment to signal ongoing interest.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-23

## Today's Overview

Project activity remains moderate today with 1 open issue and 3 open pull requests updated in the last 24 hours, though no merges or new releases occurred. The community continues to contribute feature skills (a Waybar status indicator, a Telegram rich rendering enhancement) while a critical bug fix for WhatsApp sender identity divergence remains pending review. A security documentation issue has been raised regarding credential isolation claims that may overstate protection for self-hosted OneCLI OAuth connections, which could impact trust in the project's security posture. Overall, the project shows steady community engagement but lacks maintainer velocity in merging contributions.

## Releases

No new releases today. The latest available release remains the previous version (not specified in data).

## Project Progress

No PRs were merged or closed today. The following open PRs were updated but remain unmerged:

- **#3070** — Fix WhatsApp sender identity divergence between Baileys and Cloud paths (updated July 22, open since July 16) — resolves a bug where the same phone number gets two different user IDs depending on the channel path
- **#3117** — New utility skill: Waybar status indicator for NanoClaw (updated July 22, opened July 22) — adds a Linux desktop status indicator
- **#2877** — Native rich rendering via Telegram Bot API 10.1 `sendRichMessage` (updated July 22, open since June 28) — feature skill for enhanced Telegram message formatting

## Community Hot Topics

All items have zero comments and zero reactions, indicating low community engagement on these specific items. The most notable issues/PRs by recency and topic importance:

- **Issue #3118** — [SECURITY.md overclaims per-group credential isolation](https://github.com/nanocoai/nanoclaw/issues/3118) — Raised by bradfeld, highlighting that the documentation's claim of per-group credential isolation for OAuth is inaccurate on self-hosted OneCLI gateways (OAuth connections are account-level, not group-level). This could constitute a real security gap if users rely on the documented isolation guarantees.

- **PR #3070** — [Fix WhatsApp sender identity divergence](https://github.com/nanocoai/nanoclaw/pull/3070) — Critical integration bug fix that has been open for 7 days without movement, suggesting maintainer bandwidth constraints.

## Bugs & Stability

**High severity**:
- **Issue #3118** (open since July 22) — Documentation bug: SECURITY.md makes an incorrect claim about per-group credential isolation for OAuth connections on self-hosted OneCLI. This is a **security documentation inaccuracy** rather than a code bug, but could lead users to make incorrect security assumptions. No fix PR exists. Ranked high because it could mislead self-hosted operators into believing credential isolation exists when it doesn't.

**Medium severity**:
- **PR #3070** addresses WhatsApp sender identity divergence (open since July 16) — a functional bug affecting WhatsApp message routing consistency. The fix exists but is not yet merged. Ranked medium because it affects user experience but has a clear proposed solution.

No new bugs, crashes, or regressions were reported today beyond these.

## Feature Requests & Roadmap Signals

- **PR #3117** — Waybar status indicator skill (mmneimne) — adds Linux desktop integration, indicating user demand for system tray/notification support for personal AI assistant monitoring. Likely to be merged as a utility skill (no source code changes needed).

- **PR #2877** — Native rich rendering for Telegram via Bot API 10.1 (robbyczgw-cla) — enhances Telegram channel capabilities, suggesting users want richer interactive UI within Telegram. This PR has been open since June 28 (25 days), which may indicate maintainer hesitation or lower priority.

**Prediction**: The Waybar skill (#3117) is more likely to merge next given it's a zero-touch utility skill with no risk to core code. The Telegram rich rendering (#2877) and WhatsApp fix (#3070) may require more maintainer review.

## User Feedback Summary

- **Security concern** (Issue #3118): A user (bradfeld) identified a discrepancy between documented security guarantees and actual behavior for self-hosted OneCLI OAuth connections. This signals dissatisfaction with misleading documentation and potential trust erosion.

- **WhatsApp integration pain** (PR #3070): The WhatsApp sender identity bug (diverging user IDs between Baileys and Cloud paths) has been open for 7 days without merge, indicating users are experiencing fragmented messaging identity tracking.

- **Desktop integration demand** (PR #3117): A user created a Waybar status indicator, suggesting active usage of NanoClaw as a personal AI assistant on Linux desktops and desire for better status visibility.

## Backlog Watch

No long-unanswered issues were identified in today's data (all items are recent, with the oldest being PR #2877 from June 28, 2026 — 25 days old). However, this PR merits attention:

- **PR #2877** — Telegram rich rendering feature (robbyczgw-cla) — Open since June 28, last updated July 22. This PR has followed the contributing guidelines (tagged `[follows-guidelines]`) but remains unmerged after nearly a month. Likely blocked by maintainer review bandwidth or pending clarifications. The author may need a status update.

No other items showed signs of long-term neglect based on available data.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-23

## Today's Overview

NullClaw saw a quiet but productive day with a single closed issue and a single merged PR, both addressing critical stability concerns in the Discord integration. The issue (#977) reported a severe bug where the Discord gateway becomes permanently deaf after processing exactly one MESSAGE_CREATE event, effectively making the bot unresponsive until restart. The fix PR (#978) was merged on the same day, suggesting a fast response from maintainers. No new releases were published today, but the bugfix is likely destined for the next patch version. Overall, activity is low but focused, with a positive signal in maintainer responsiveness to high-severity bugs.

## Releases

No new releases were published on 2026-07-23. The latest available release remains unchanged.

## Project Progress

**1 merged Pull Request today:**

- **PR #978** (CLOSED/MERGED) — *discord: run typing thread on the heavy runtime stack*
  - Author: Tetraslam
  - Summary: The Discord typing-indicator thread was running on a 512KB auxiliary stack (`AUXILIARY_LOOP_STACK_SIZE`), which caused process aborts when `std.http.Client` and `std.crypto.tls` performed large inline memcpys. The fix moves the typing thread to the heavy runtime stack, solving the crash.
  - Link: [nullclaw/nullclaw PR #978](https://github.com/nullclaw/nullclaw/pull/978)

This PR directly addresses the root cause of crashes related to typing indicators, which likely contributed to event handling instability.

## Community Hot Topics

**#977** — *Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE*
- Status: Closed | Comments: 1 | 👍: 0
- Summary: A critical bug where the bot processes exactly one message, then silently drops all subsequent events while maintaining heartbeat connectivity.
- Link: [nullclaw/nullclaw Issue #977](https://github.com/nullclaw/nullclaw/issues/977)

This was the only issue updated today and was promptly closed after PR #978. The underlying need appears to be a reliable long-running Discord gateway connection—a fundamental requirement for any operational Discord bot.

## Bugs & Stability

**Severity: Critical**

- **Bug:** *Discord gateway becomes permanently deaf after first MESSAGE_CREATE* — Event frames are read but silently discarded after processing one message, with heartbeats still flowing, giving the illusion of a healthy connection. 100% reproducible.
  - Status: Closed (fix merged in PR #978)
  - Link: [nullclaw/nullclaw Issue #977](https://github.com/nullclaw/nullclaw/issues/977)

**Severity: High**

- **Bug:** *Process abort due to stack overflow during HTTPS requests from typing thread* — The auxiliary stack (512KB) was insufficient for `tls.Client.init` memcpys.
  - Status: Fixed (merged in PR #978)
  - Link: [nullclaw/nullclaw PR #978](https://github.com/nullclaw/nullclaw/pull/978)

Both stability issues were addressed rapidly, indicating good bug response hygiene.

## Feature Requests & Roadmap Signals

No new feature requests were filed today. The activity focused entirely on stability and bug fixing. Based on the nature of the bugs, the next version is likely to include:
- Increased stack sizes or improved thread management for Discord I/O
- Better error recovery for gateway event loops (potentially automatic reconnection on event-silence detection)

## User Feedback Summary

With only one issue and one PR today, user feedback was minimal but significant:
- **Pain point:** Bot "silent death" after processing one message is a severe usability issue for any production deployment. Users cannot rely on NullClaw for Discord interaction without this fix.
- **Satisfaction signal:** The rapid turnaround (issue opened and closed on the same day) suggests high maintainer attentiveness, which likely offsets frustration from the bug itself.

## Backlog Watch

No long-unanswered issues or PRs requiring maintainer attention were identified in today's data. The single issue and PR were both addressed promptly within the same 24-hour window. No dormant items of significance were flagged.

**Summary:** Despite low activity, today was a net positive for project health—two critical bugs were identified and fixed on the same day, with no unresolved regressions left behind.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## 1. Today's Overview

IronClaw is in an intense pre-launch stabilization and refactoring phase, with 50 issues and 50 PRs updated in the last 24 hours. The team is actively closing foundational work items (14 issues closed, 21 PRs merged/closed) while simultaneously shipping a large architectural migration toward the `ProductSurface` abstraction layer. Launch-blocker bugs are being triaged aggressively (issues #6523, #6534, #6522, #6478, #6475, #6474), and a major testing infrastructure push is underway with the hermetic capability platform epic (#6524) and multiple E2E test PRs. No new releases were cut today, indicating the team is consolidating work ahead of a likely upcoming release candidate.

## 2. Releases

**None.** No new releases were published in the last 24 hours. The release automation PR (#5598) remains open since July 3, suggesting the project is holding releases pending the current wave of architectural changes and bug fixes.

## 3. Project Progress

Today saw significant forward momentum across several parallel workstreams:

**Architecture & Refactoring (ProductSurface migration):**
- PR #6538 (OPEN) routes OpenAI-compatible Chat Completions and Responses through `ProductSurface` instead of `ProductWorkflow`
- PR #6536 (OPEN) routes channel ingress through `ProductSurface::admit_channel_inbound`
- PR #6480 (OPEN) continues ProductSurface conversion for operator, project, admin, automation, and view APIs
- PR #6529 (OPEN) moves outbound preferences facade out of composition into a dedicated `ironclaw_outbound` crate
- PR #6442 (OPEN) unifies Reborn runtime composition, collapsing local and production assembly onto a single path
- PR #6441 (CLOSED) named the `ProductSurface` boundary trait and moved WebUI/composition bundle to depend on it

**Testing Infrastructure:**
- PR #6539 (OPEN) adds opt-in `BENCHMARKING_MODE` system-prompt addendum for unattended evaluation
- PR #6535 (CLOSED) added Slice 0 reference model oracles for turn/run lifecycle coverage
- PR #6528 (OPEN) adds typed `ProviderOperationCase` registry with capability arguments
- PR #6525 (OPEN) isolates mutable Emulate provider state between QA journeys
- PR #6526 (OPEN) inventories provider capability coverage, classifying 123 capabilities
- PR #6540 (OPEN) masks ambient `NEARAI_*` env variables in tests to prevent CI flakiness

**Feature Work:**
- PR #6527 (OPEN) adds admin-managed user security foundation with content-access policies
- PR #6531 (OPEN) fixes admin OAuth config application at runtime (removes Google-specific readiness map)
- PR #6520 (OPEN) makes extension readiness and channel delivery generic, collapsing lifecycle to three states
- PR #6232 (OPEN) auto-activates web-access and Brave-backed web_search so agents discover real web search

**Completed Foundations (Closed Issues):**
Seven retrospective completion records were filed today (issues #6519, #6515, #6514, #6513, #6510, #6505, #6499, #6498, #6495, #6494, #6493, #6489) documenting that foundational work for testing playbooks, operator config, extension runtime, OAuth hardening, thread models, Telegram support, manifest systems, and memory retrieval has been delivered in recent PRs.

## 4. Community Hot Topics

The most active discussion this cycle centers on the **error-recoverability endgame**:

- **[#6284: Error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)** — 4 comments. The epic proposes that every mid-run error must satisfy a four-part recoverability contract: the run survives, the model sees the error, the error carries the cause and remediation, and the model gets a turn to act. This signals deep architectural thinking about reliability—the team is codifying exactly when and how the system can recover versus when terminal failure is appropriate.

- **[#6105: Extension/channel lifecycle state-machine test](https://github.com/nearai/ironclaw/issues/6105)** — 3 comments. The extension lifecycle (install→connect→disconnect→reconnect→uninstall) is identified as the "#1 user-facing bug family of the past two weeks," regressing across four QA bug-bash waves. This issue calls for putting channel canary lanes on cron, demonstrating the team's commitment to catching regressions before they reach users.

- **[#5459: Configurable skills and tools](https://github.com/nearai/ironclaw/issues/5459)** — 2 comments. A longer-running feature request for admin vs. user installation scoping of WASM tools and skills, with per-user visibility. Underlying need: enterprise multi-tenant authorization for custom integrations.

## 5. Bugs & Stability

**Critical / P1 Bugs (active today):**

| Issue | Description | Status | Linked Fix |
|-------|-------------|--------|------------|
| [#6523](https://github.com/nearai/ironclaw/issues/6523) | Agent fails to create during onboarding if testing flag is set | OPEN, 1 comment | Not yet identified |
| [#6534](https://github.com/nearai/ironclaw/issues/6534) | Google OAuth config can't be applied in hosted deployments | OPEN, 1 comment | Partially addressed by PR #6533 (container-supervised mode) |
| [#6475](https://github.com/nearai/ironclaw/issues/6475) | Telegram `/pair` command not recognized, trapping user in pairing loop | OPEN, P1 label | Not yet identified |
| [#6474](https://github.com/nearai/ironclaw/issues/6474) | Telegram delivery channel not configurable in Delivery Defaults | OPEN, P1 label | Not yet identified |

**High-Impact Bugs:**

| Issue | Description | Status |
|-------|-------------|--------|
| [#6478](https://github.com/nearai/ironclaw/issues/6478) | Agent doesn't recognize connected Telegram, redirects to Slack auth | OPEN, P2 label |
| [#6522](https://github.com/nearai/ironclaw/issues/6522) | IronClaw lacks user instructions for Telegram setup (contrast with Google) | OPEN |
| [#6521](https://github.com/nearai/ironclaw/issues/6521) | `ironclaw` CLI not available on agent staging (CLOSED as fixed) | CLOSED |

**Stability Infrastructure:**
- PR #6537 (OPEN) ensures full Reborn test/E2E gates run on release-fix branches (triggered by #6533 missing heavy gates)
- PR #6540 (OPEN) masks ambient `NEARAI_*` env in tests to eliminate CI flakiness caused by developer-local environment variables

**Regression Trend:** The extension lifecycle continues to be the most fragile area, with multiple Telegram and Slack-related bugs surfacing despite prior fixes. The team's response—PR #6520 making extension readiness generic and collapsing to three lifecycle states—directly addresses the complexity that enabled these regressions.

## 6. Feature Requests & Roadmap Signals

**Near-term (likely next release):**

1. **Attested signing + Ledger hardware-wallet support** ([#6532](https://github.com/nearai/ironclaw/issues/6532)) — A design and Phase A plan for blockchain transaction capability where the agent acts on behalf of the user without unilateral fund movement. This is a major new capability signal: IronClaw is extending beyond communication/collaboration into financial transactions.

2. **Hermetic capability and journey testing platform** ([#6524](https://github.com/nearai/ironclaw/issues/6524)) — An epic aimed at answering "Does every supported capability and critical user journey have deterministic, meaningful coverage?" The 123-capability inventory in PR #6526 shows the team is quantifying coverage gaps explicitly.

3. **ProductSurface routing completion** — Multiple PRs (#6538, #6536, #6480, #6529, #6442) are progressively routing all system boundaries through the new `ProductSurface` trait. This is the largest architectural refactoring in flight and will likely land before any major release.

**Medium-term signals:**

- **Configurable skills and tools** ([#5459](https://github.com/nearai/ironclaw/issues/5459)) — Admin/user installation scoping remains open since June 30, suggesting multi-tenant customization is a priority but not immediate.
- **Unified extension model** ([#2246](https://github.com/nearai/ironclaw/issues/2246)) — MCP tools as single-tool extensions + provider deduplication, open since April 10. This architectural unification would simplify the model's tool selection surface.
- **Routine notifications with context** ([#1519](https://github.com/nearai/ironclaw/issues/1519)) — Open since March 21, this would improve the user experience for routine-triggered notifications by including them in the user's main chat thread.
- **Tool schema message routing clarity** ([#1330](https://github.com/nearai/ironclaw/issues/1330)) — Open since March 18, improving how the model understands channel-specific delivery semantics.

## 7. User Feedback Summary

**Pain Points (directly observed from bug reports):**

- **Telegram onboarding friction:** Users are stuck in pairing loops (#6475), cannot find Telegram in Delivery Defaults (#6474), and receive no setup instructions (#6522). The agent also confuses Telegram with Slack (#6478), creating a confusing multi-app authentication experience.
- **Hosted deployment OAuth:** Google OAuth config cannot be applied in hosted environments (#6534), blocking Google/Gmail integrations for cloud-hosted instances.
- **Onboarding blocker:** A simple flag (testing build) prevents agent creation entirely (#6523), suggesting insufficient validation of combined UI state.
- **Missing CLI on staging:** Operators cannot restart services via `ironclaw` CLI on `agent-stg.near.ai` (#6521, now fixed).

**Satisfaction Signals:**
- The rapid closure of foundational issues (14 closed today alone) and the systematic classification of 123 capabilities shows organizational discipline that likely translates to improving product quality.
- The error-recoverability endgame epic (#6284) suggests the team is prioritizing reliability as a core differentiator rather than a nice-to-have.

## 8. Backlog Watch

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | Since May 6 (78 days) | OPEN, 2 comments | Reborn: production/scoped capability lifecycle admin parity — a parent epic for extension/skill/MCP lifecycle UX. Last updated July 22, but no new comments since May. Critical for enterprise multi-tenancy. |
| [#2246](https://github.com/nearai/ironclaw/issues/2246) | Since April 10 (104 days) | OPEN, 1 comment | Unify extension model (MCP as single-tool extensions). The Telegram bugs suggest the current extension model complexity is causing real user-facing issues. |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | Since March 21 (124 days) | OPEN, 1 comment | Routine notifications lack context. Core UX gap—users receiving notifications with no thread context. Updated July 22 but no resolution plan visible. |
| [#1330](https://github.com/nearai/ironclaw/issues/1330) | Since March 18 (127 days) | OPEN, 1 comment | Tool schema needs clearer message routing semantics. Dormant but updated July 22, suggesting the team is aware. Could affect model understanding of delivery channels. |
| [#5459](https://github.com/nearai/ironclaw/issues/5459) | Since June 30 (23 days) | OPEN, 2 comments | Configurable skills and tools (admin/user scoping). Last updated July 22, suggesting maintainer attention but no PR yet. |

**PR Needing Attention:**
- **[#5598](https://github.com/nearai/ironclaw/pull/5598)** (Release automation) — Open since July 3 (20 days). An automated release PR with API-breaking changes in `ironclaw_common` and `ironclaw_skills`. The prolonged open state may indicate the team is deliberately holding releases while the current refactoring wave completes, but it could also indicate merge conflicts or unresolved concerns.

**Project Health Assessment:**
The project is in a **high-velocity stabilization phase** with strong organizational rigor. The volume of v1-launch-checklist bugs suggests the team is methodically working through a launch readiness checklist. The architectural refactoring (ProductSurface) is large and risky but addresses the root cause of the extension lifecycle regressions that have plagued recent QA cycles. The testing infrastructure investment (PRs #6525, #6526, #6528, #6535, #6539) is a positive signal that the team is investing in preventing future regressions rather than only fixing current ones. The main risk is the growing backlog of long-open issues (#3288, #2246, #1519, #1330) that could become technical debt if left unresolved while the team focuses on launch-blocking bugs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-23**.

---

# LobsterAI Project Digest (2026-07-23)

## 1. Today's Overview
Project activity remains moderate today, with 5 merged pull requests and 1 closed issue. No new releases were published. The development focus was split between critical stability improvements—specifically hardening the Windows installer and preventing out-of-memory (OOM) crashes during transcript loading—and user-facing enhancements to the cowork export modal and scheduled tasks UI. The closure of a long-stale issue regarding duplicate scheduled task names suggests ongoing maintenance cleanup, though no new feature-level issues were opened. Overall, the project appears healthy with a clear emphasis on reliability and UI polish.

## 2. Releases
**No new releases today.**

## 3. Project Progress
Five pull requests were merged today, advancing stability, UI, and feature maturity:

- **[#2377] feat: windows update installer hardening** (Author: fisherman) — Enhanced the Windows installer to improve update robustness. *Area: renderer, main, platform: windows*
- **[#2376] fix(cowork): render export modal above sidebar** (Author: liuzhq1986) — Fixed an export modal stacking context conflict by mounting it via a body portal. *Area: renderer, cowork*
- **[#2375] fix(openclaw): guard against oversized transcript OOM crashes** (Author: fisherman) — Blocks oversized transcripts before they crash the gateway with a JS heap-out-of-memory, and prevents zombie reconnections after a heap-OOM restart. *Area: renderer, docs, main, openclaw*
- **[#1346] Feat/skills management** (Author: leefinder) — Long-stale PR (since April 2) finalized and merged; completes a skills management feature aligned with upstream requirements. *Area: general*
- **[#1347] feat(scheduledTask): 新增 Cron 自定义调度、Agent 选择器及交互体验优化** (Author: swuzjb) — Enhancements to the scheduled task module including a visual Cron builder, Agent/Model binding, and UX unification. *Area: general*

## 4. Community Hot Topics
- **Issue #1348** (Closed, 2 comments) — *定时任务名称重复没有校验* (Scheduled task name duplication not validated). The complaint was about missing duplicate-check logic for scheduled task names. The issue was automatically tagged as stale and ultimately closed, suggesting the behavior may be by design or no longer reproducible.
- **PR #1347** (Merged) — The most feature-rich PR of the day. It introduced a **visual Cron builder** with real-time expression preview, a raw expression editor with validation, and presets (daily 9:00, weekdays 9:00, hourly, etc.). This suggests high user demand for more flexible and user-friendly scheduling.

## 5. Bugs & Stability
- **Severity: High — OOM crash prevention** — **PR #2375** addresses a critical crash where loading an oversized transcript would exhaust the JavaScript heap in the OpenClaw gateway. The fix blocks oversized transcripts pre-load and handles zombie reconnections after an OOM restart. This is a serious stability issue that could affect data integrity. **(Fixed)**
- **Severity: Medium — UI stacking bug** — **PR #2376** fixed the export modal rendering behind the sidebar in cowork mode, a visual regression that degraded the user experience. **(Fixed)**
- **Severity: Low — Duplicate task name** — **Issue #1348** (Closed) raised a missing validation for duplicate scheduled task names. No fix PR is linked, and the issue was closed as stale.

## 6. Feature Requests & Roadmap Signals
- **Scheduled Task Enhancement (PR #2375 merged)** — The addition of a visual Cron editor, Agent/Model binding, and interactive presets signals that the team is actively improving the scheduled task module. Expect further UX refinements in upcoming releases.
- **Skills Management (PR #1346 merged)** — The long-pending skills management feature has been finalized. This may underpin future agent customization capabilities.
- **Windows Installer Hardening (PR #2377 merged)** — This suggests a focus on improving the Windows update/install experience, possibly in anticipation of broader deployment or enterprise adoption.

## 7. User Feedback Summary
- **Pain Point: Export modal overlap in cowork** (PR #2376) — A specific inline styling issue caused the export options modal to be hidden behind the sidebar. Users likely experienced confusion or an inability to complete exports. This has been resolved.
- **Pain Point: OOM crashes during transcript processing** (PR #2375) — Users dealing with very large transcripts faced hard crashes. The fix is a critical reliability improvement.
- **Satisfaction Signal: Scheduling UX depth** (PR #1347) — The introduction of both a visual and raw Cron editor, along with presets, indicates a direct response to user demand for more flexible scheduling without needing to learn Cron syntax manually.

## 8. Backlog Watch
- **Issue #1348** (Closed as stale, April 2 → July 22) — The issue about duplicate scheduled task name validation was closed without resolution after 111 days. If this remains a real-world pain point for users, it may resurface. No linked fix PR exists.
- **No long-unanswered open issues or PRs** currently require immediate maintainer attention. The backlog appears well-controlled, with only stale items being pruned.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-23

## Today's Overview
The Moltis project is in a low-activity period today, with zero issues updated in the last 24 hours and no new releases. A single open pull request (#1162) was updated yesterday, focusing on a user-facing improvement to session date displays. No closed or merged PRs were recorded, indicating no feature or fix deployments today. Overall project health appears stable but quiet, with development momentum currently centered on polish rather than new features.

## Releases
No new releases were published today. The last release remains the previously available version.

## Project Progress
No pull requests were merged or closed today. The only activity was an update to an existing open PR (#1162), which remains in review.

## Community Hot Topics
- [#1162 [OPEN] fix(web): show dates for older sessions](https://github.com/moltis-org/moltis/pull/1162) — This is the only active PR today, authored by shixi-li. It aims to improve the session history view by intelligently showing time labels: localized `HH:MM` for today's sessions, "yesterday" and weekday labels for recent prior days, and full calendar dates (including year when needed) for older entries. While it has no comments or reactions yet, the PR addresses a common UX pain point where generic timestamps lose context for sessions more than a day old. The underlying need is for clearer, more human-readable session history navigation.

## Bugs & Stability
No bugs, crashes, or regressions were reported in issues today. The open PR (#1162) is a UX enhancement, not a bug fix. The project currently shows no active stability concerns.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, PR #1162 signals a user-facing quality-of-life improvement that could indicate broader interest in session management enhancements. Given the quiet state of activity, the next version may prioritize completing this date-display improvement and possibly address any accumulated technical debt.

## User Feedback Summary
With no issues or comments today, direct user feedback is absent. The only signal is the PR itself, which suggests users have encountered confusion with session timestamps for older entries. The requested change (showing "yesterday", weekday names, and full dates) indicates that users rely on session history for revisiting past work and need clearer temporal context beyond raw timestamps.

## Backlog Watch
No long-unanswered issues or PRs were identified today. The project's backlog appears well-maintained with no items requiring immediate maintainer attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-23

## 1. Today's Overview
CoPaw demonstrated high development velocity today with 50 PRs updated and 31 issues active in the last 24 hours, reflecting a mature project under active maintenance. The release of v2.0.0.post4 addresses critical agent reasoning optimizations, but the update also surfaced several regression complaints from the community. A significant influx of first-time contributor PRs (at least 10) from user `patrick-andstar` indicates growing external engagement, though multiple unresolved bugs—particularly around process freezes, token usage persistence, and tool execution failures—suggest the v2.0 line still requires stabilization. Overall project health is strong in terms of activity but warrants attention to quality assurance processes.

## 2. Releases
**v2.0.0.post4** was released today.

- **Changes**: Optimized agent reasoning to mitigate redundant thinking loops and duplicate tool invocations.
- **Breaking Changes**: None documented.
- **Migration Notes**: No special migration steps indicated; standard pip install upgrade.
- **Link**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4

**Note**: The release was immediately met with a bug report from user `lijikai1206` (Issue #6376) claiming the new "loop functionality" causes the main process to crash, with an explicit request for better pre-release stress testing.

## 3. Project Progress
**Merged/Closed PRs Today (15 total):**

- **#6375** (closed) — `fix(token-usage): retry token usage persistence` — Fixes transient write failures in token usage tracking.
- **#6359** (closed) — `fix: change context injection role from system to user` — Resolves `ValueError` on GLM/OpenAI APIs where system messages injected mid-conversation caused API rejection.

**Notable Open PRs Advancing Today:**
- **#6284** — `feat(apps): add qwenpaw-creator app` — New plugin for script→video creation workflow; under review.
- **#6323** — `feat(scroll): add staged compaction and durable task continuity` — Redesigns Scroll context management with `history.db` as source of truth; significant architectural change.
- **#6353** — `feat(crons): support per-job model overrides` — Allows cron jobs to pin a specific model without changing the agent's default.

**Infrastructure Fixes:**
- **#6365** — Windows compatibility fix for Console test scripts.
- **#6367** — Stabilizes flaky Gate coverage test (timeout increased to 30s).
- **#6356** — Fixes mission parser to preserve quoted `--verify` commands.
- **#6352** — Prevents directory collision when two missions start in the same second.
- **#6350** — Fixes git commit failures in CI/Docker environments missing global identity.
- **#6349** — Adds sorting (downloads, update time, favorites) to the plugin market.

## 4. Community Hot Topics
| Issue/PR | Comments | Type | Summary |
|---|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 18 | Bug (Closed) | Sub-agent context compaction freezes entire process; requires manual restart |
| [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) | 8 | Question (Closed) | Platform domain redirects to ad pages on mobile networks |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 8 | Bug (Open) | `RemoteProtocolError`: QwenPaw actively closes connection mid-response |
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | 6 | Feature (Open) | Request to set model per conversation, not per agent |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 4 | Performance (Open) | v2.0 introduces ~2s fixed overhead per reply vs v1.x |
| [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | 4 | Feature (Closed) | Drag-and-drop file upload for images, PDFs, Office docs |

**Analysis**: The community is actively reporting v2.0 regressions. The top concern (#5218) is a process-freezing bug that has been open since June 16 with 18 comments. Users are also frustrated by performance regression (#6307) and connectivity issues (#6314). The most requested feature (#6318) reflects a desire for finer-grained model control, indicating users operate complex multi-model setups.

## 5. Bugs & Stability
**Critical Severity:**
- **#5218** (Open, 33 days old) — Sub-agent context compaction freezes QwenPaw process completely; no recovery except restart.
- **#6376** (Open, new today) — v2.0.0.post3/post4 "loop" feature crashes the main process; user explicitly criticizes lack of pre-release testing.
- **#6314** (Open) — `RemoteProtocolError`: QwenPaw actively closes connection mid-response, causing incomplete replies.

**High Severity:**
- **#6363** (Open) — Tool call arguments polluted with markdown fences/XML tags; breaks all tool execution for GLM-5-Turbo, DeepSeek-V3. **Fix PR #6364 exists.**
- **#6358** (Open) — Context injection as `role='system'` causes `ValueError` on GLM/OpenAI APIs. **Fix PR #6359 merged; duplicate #6360 open.**
- **#6362** (Open) — MiniMax-M3 vision capability broken; model cannot recognize uploaded images.
- **#5135** (Open, 42 days old) — Same MiniMax-M3 vision bug, reported in v1.1.11; still unresolved.
- **#6372** (Open) — Idle cleanup can remove a newly recreated queue state, causing consumer tracking loss. **Fix PR #6373 exists.**
- **#6374** (Open, 0 comments) — Token usage persistence does not retry after transient write failure. **Fix PR #6375 closed.**
- **#6370** (Open) — File download fallback chain broken; `subprocess.TimeoutExpired` escapes instead of advancing to next downloader. **Fix PR #6371 exists.**

**Medium Severity:**
- **#6366** (Open) — Console coverage test flaky due to fixed 15s timeout under V8 instrumentation. **Fix PR #6367 exists.**
- **#6361** (Open) — Console test scripts do not start on Windows. **Fix PR #6365 exists.**
- **#6354** (Open) — Approval dialog UI design risks accidental permanent permissions; "Always Allow" button visually prominent over "Once."
- **#6324** (Open) — Model responses truncated (MiniMax-M3).
- **#6176** (Closed) — `cron update` CLI resets untouched runtime/metadata fields.
- **#6320** (Closed) — LaTeX formulas not rendering correctly in Docker.

**Severity Note**: Multiple bug fixes from first-time contributor `patrick-andstar` (#6365, #6367, #6369, #6371, #6373, #6375) suggest the core team may be resource-constrained on these stability issues.

## 6. Feature Requests & Roadmap Signals
**User-Requested Features (Likely for Next Release):**
- **#6318** — Per-conversation model specification (6 comments; strong demand). PR #6353 partially addresses this for cron jobs.
- **#6297** — Drag-and-drop file upload for images/PDFs/Office docs (4 comments; closed but likely in pipeline).
- **#6344** — Docker Web UI hot-update to avoid container rebuilds (2 comments; references AstrBot implementation as precedent).
- **#6316** — Allow cron jobs to specify model per job (PR #6353 already implements this).
- **#6326** — Explicitly document required Node.js version for Console development.
- **#6342** — Verify ReMe embedding model activation; user cannot confirm vector storage is working.

**Roadmap Signals:**
- PR #6284 (`qwenpaw-creator`) signals expansion into multimedia content creation.
- PR #6323 (staged compaction for Scroll) indicates major architectural work on context management, likely targeting the freeze bugs in #5218.
- PR #6349 (plugin market sorting) shows continued investment in the plugin ecosystem.

## 7. User Feedback Summary
**Positive Signals:**
- The closing of #6297 (drag-and-drop file upload) suggests the feature was implemented and well-received.
- PR #6349 indicates the plugin market is actively used; sorting by downloads/updates/favorites addresses real discoverability needs.

**Pain Points & Dissatisfaction:**
- **v2.0 Performance Regression** (#6307): A user clearly documents ~2s fixed overhead per reply compared to v1.x, calling it "absent in v1.x." This is a significant downgrade for users with simple conversational use cases.
- **MiniMax-M3 Vision Broken** (#5135, #6362): Two separate reports (June 11 and today) confirm the model's vision capability has been broken for over a month. Users report "complete hallucination" on image content.
- **Process Stability** (#5218, #6376): Users are experiencing crashes that require manual process restart. The explicit criticism of pre-release testing in #6376 is a strong signal of frustration.
- **Multi-User/Multi-Tenant** (#6335): A potential enterprise user asks about multi-user support for company deployment; current status appears to be single-user only.
- **Channel UI Bug** (#6341): Deleting a channel still shows it as default for new agents—a confusing UX issue.
- **Docker User** (#6344): Frequent updates cause container rebuilds that wipe installed tool environments; user wants hot-update capability.

**Use Cases Emerging:**
- **Contract review** (#6297): Windows user needs drag-and-drop document upload for contract review workflows.
- **Enterprise deployment** (#6335): Company wants to deploy as a platform with internal system agent integration.

## 8. Backlog Watch
| Issue/PR | Age | Status | Reason for Attention |
|---|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 37 days | Open | Highest-comment bug (18); process freeze with no workaround |
| [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) | 42 days | Open | MiniMax-M3 vision broken; duplicate #6362 filed today confirms still unfixed |
| [#6176](https://github.com/agentscope-ai/QwenPaw/issues/6176) | 6 days | Closed | `cron update` data loss bug closed without public resolution details |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 2 days | Open | Performance regression affecting all v2.0 users; no response from maintainers yet |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 1 day | Open | Connection closure bug with detailed packet capture evidence; needs maintainer triage |

**Maintainer Attention Needed:**
The long-standing MiniMax-M3 vision bug (#5135, 42 days) and the process-freeze bug (#5218, 37 days) should be prioritized given their severity and user impact. Multiple first-time-contributor PRs (#6365, #6367, #6369, #6371, #6373, #6375) from `patrick-andstar` are ready for review and would substantially improve stability. The performance regression (#6307) has not received any maintainer response, which may erode user trust in v2.0 adoption.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-23

## Today's Overview

ZeroClaw shows **moderate to high activity** today with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were published. The project continues a sustained push toward **v0.9.0** with several high-priority RFCs still in progress (OIDC auth, per-model capability config, A2A agent discovery). A significant **cross-cutting Anthropic reliability stack** (4+ interrelated PRs authored by IftekharUddin) is advancing through review, addressing server-side fallback detection, client-side fallback routing, and typed refusal errors. CI remains a pain point: a Windows test regression with **74 failures** (Issue #7462) persists without resolution, and a new npm audit failure (Issue #9235) was auto-filed today.

## Releases

**None** — no new releases were published in the last 24 hours.

## Project Progress

**Merged/Closed PRs today (14 total):**

- **PR #9070** (closed) — **fix(providers/anthropic)**: flush open `tool_use` block at `message_stop` to fix streaming divergence between Anthropic's two completion paths.
- **PR #8684** (closed) — **feat(runtime)**: surface model fallback notice on direct-turn surfaces; `ReliableModelProvider` now records requested-vs-served provider/model.
- **PR #8447** (closed) — **chore(firmware)**: share protocol parsing with ESP32 using the common `zeroclaw-fw-protocol` crate.
- **PR #8752** (closed) — **feat(obs)**: nest memory `recall`, `store`, and `rag.retrieve` OTel spans under the turn trace, completing the observability correlation work.
- **PR #9105** (closed) — **fix(memory)**: allow Lucid ARM cold starts by raising bounded recall timeout from 500ms to 3s and store timeout from 800ms to 3s; also made timeouts configurable.

**Key feature advances from open PRs today:**

- **PR #9266, #9265, #9262, #9268** (IftekharUddin) — Four-PR Anthropic reliability stack: native Anthropic refusals as typed errors → server-side fallback detection → client-side fallback routing → safeguard notice surfacing in channels. Represents a significant architecture investment in provider reliability.
- **PR #9269** (Audacity88) — New Dependabot config for weekly web npm updates, capping open PRs at two to reduce noise.
- **PR #9267** (Audacity88) — Typed per-platform installation documentation generated from a single validated source specification.

## Community Hot Topics

**Most Active Issues (by comment count):**

1. **Issue #7462** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) — **[Bug]: 74 test failures on Windows** (11 comments). No fix PR exists. The CI gap (Linux-only testing) means Windows regressions go undetected until users report them. The underlying need is clear: the project needs Windows CI or a cross-platform test strategy before v0.9.0 hardening.

2. **Issue #6641** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)) — **Turn-level OTel trace correlation** (8 comments). Now **closed** — PR #8752 merged today, completing the observability correlation work. This was a high-value feature for multi-agent deployments.

3. **Issue #7141** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) — **RFC: OIDC authentication provider support** (7 comments). Umbrella tracking issue for v0.9.0's pluggable auth work. Active and in-progress — indicates enterprise/SSO demand is strong.

4. **Issue #7184** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)) — **RFC: Move translated .ftl and .po files into git submodule** (7 comments). Now **closed**. This repo-structure change isolates i18n churn from the main tree — a quality-of-life improvement for maintainers.

5. **Issue #7218** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)) — **RFC: A2A agent discovery** (7 comments). Now **closed**. Defines `/.well-known/agent-card.json` for multi-agent ZeroClaw installs — groundwork for interoperability.

## Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **S2 - Degraded** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows 11 (Simplified Chinese, code page 936) — Unix-only test commands, path semantics, console encoding. CI only runs on Linux. | None |
| **S2 - Degraded** | [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) | History trimming occurs silently even with history pruning disabled — agent loses context mid-session without explanation. | None (issue closed without fix noted) |
| **High** | [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) | npm audit failed (2026-07-21) — 3 high/critical findings in `@redocly/openapi-core` and transitive deps. Auto-filed. | None yet |
| **High** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Enabled Signal/Voice Call channel with empty credentials crashes the supervisor in a 2-second restart loop. | None |
| **Medium** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime command replies bypass Fluent localization — hard-coded English strings even with `zh-CN` locale. | None |
| **Medium** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channel supervisor restart loop on empty credentials. | None |
| **Low** | [#9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) | Ctrl+C during WhatsApp Web channel starts restart loop (fix PR open). | PR #9197 open |

**Fixed today:**
- **PR #9070** — Anthropic streaming `tool_use` block divergence fixed.
- **PR #9105** — Lucid ARM cold start memory timeout fixed (raised default timeouts).

## Feature Requests & Roadmap Signals

**Likely for v0.9.0 (based on priority:P1/P2, status:in-progress):**

1. **RFC: OIDC authentication** (Issue #7141) — Enterprise SSO support; tracking issue with clear Definition-of-Done. High maturity signal.
2. **RFC: Per-model capability config** (Issue #7100) — `vision`, `context_window` per model alias; wires into capability checks, context budget, and UI. Strong user demand for accurate context limits.
3. **Agent evaluation harness** (Issue #7065) — `zeroclaw eval` with replay and live modes, pluggable graders, LLM-as-judge. Foundational for quality at scale.
4. **Process-memory limits on shell/skill_tool** (Issue #6916) — Prevents child process OOMs in containers. High risk, P1 priority.

**Notable new feature requests (last 24h):**

- **PR #9268** — Surfacing safeguard fallback notices in channels (part of the Anthropic reliability stack).
- **PR #9269** — Dependabot monitoring for web npm updates — maintenance/quality, not user-facing but prevents supply-chain risk.

**Long-term roadmap signals:**
- **Multi-channel expansion** continues: Zulip (Issue #6437), Rocket.Chat (Issue #6435), Twilio SMS (Issue #6427), Mastodon/ActivityPub (Issue #6423) are all in `status:accepted` backlog.
- **"Everything is a plugin"** (Issue #6489) — collapsing Integrations + Plugins into a unified plugin catalog. Closed but the architectural aspiration remains.

## User Feedback Summary

**Pain points voiced by users:**
- **Windows unreliability** (Issue #7462) — A Chinese-language Windows 11 user discovered 74 test failures that CI never catches. This suggests Windows is a second-class platform despite being listed as supported.
- **Silent context loss** (Issue #8837) — User reported agent "suddenly loses its context without explanation" even with pruning disabled. The agent had to be asked what it remembered to discover the issue.
- **Configuration confusion** (Issue #8925) — User struggled to configure AWS Bedrock credential profiles and systemd service setup, finding documentation insufficient.
- **Cold start failures** (PR #9105, now fixed) — ARM/Lucid users hit memory recall timeouts on first use. The fix raised timeouts from 500ms to 3s.

**Satisfaction signals:**
- OTel trace correlation (Issue #6641) closed successfully — users in multi-agent deployments will benefit from correlated `memory.recall`, `memory.store`, and `rag.retrieve` spans under turn traces.
- Anthropic reliability improvements (4 PRs in flight) signal active investment in provider resilience — likely appreciated by Anthropic-heavy users.

## Backlog Watch

**Issues needing maintainer attention (long-unanswered, high priority):**

1. **[#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) — Process-memory limits on shell/skill_tool** (P1, risk:high, no-stale). Created 2026-05-25, still open with no fix PR. Production OOM scenario with a clear proposed solution (cgroups/rlimit). Sustained discussion over 2 months.

2. **[#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) — Real heartbeat tracking for daemon nodes** (P2, risk:high, no-stale). Created 2026-05-05, no fix PR. Dashboard shows nodes as "Online" even when WebSocket is dead — stale state misleads operators.

3. **[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — RFC: Per-model capability & context-window config** (P1, risk:high, accepted). Created 2026-06-02, no implementation PR yet despite being a P1 RFC for v0.9.0. May be waiting on schema decisions.

4. **[#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) — Channel runtime command replies bypass Fluent localization** (P2, no-stale). Created 2026-05-09, no PR. Internationalization regression undermines the i18n investment.

**Notable:** The project has 40 open/active issues and 36 open PRs — a substantial queue. The `needs-author-action` tag appears on at least 4 PRs today (#8746, #9197, #9013, #9075, #8781), suggesting some contributors are blocked on author follow-up.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*