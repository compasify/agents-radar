# OpenClaw Ecosystem Digest 2026-06-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-29 00:27 UTC

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

Here is the structured digest for the OpenClaw project based on the data snapshot from June 29, 2026.

---

### OpenClaw Project Digest for 2026-06-29

#### 1. Today's Overview
The OpenClaw project is currently experiencing an extremely high volume of activity, generating **500 updated Issues** and **500 updated Pull Requests** in the last 24 hours. While this indicates a vibrant community, the sheer number of unresolved items (438 open issues, 426 open PRs) suggests a significant maintenance bottleneck. Community attention is heavily focused on **session-state management**, **message delivery reliability**, and **security boundaries** around tool calls and auth scopes. A single new beta release, `v2026.6.11-beta.2`, was published, focusing on channel control and operational improvements.

#### 2. Releases
- **New Release:** `v2026.6.11-beta.2`
- **Key Changes:**
    - **Channel Control:** Introduced Slack relay mode, a native Mattermost `/oc_queue` command, and per-DM model overrides.
    - **Operations:** Associated enhancements that improve granular control over channel automation and tuning.

The release notes were truncated in the provided data, but no explicit breaking changes or migration notes were flagged.

#### 3. Project Progress
In the last 24 hours, **74 PRs were merged or closed** and **62 Issues were closed**. Key advancements include:
- **Developer Experience:** Multiple PRs aim to stabilize the SDK's "happy path" and plugin loaders (e.g., #88681 adds diagnostic progress snapshots for plugin startup).
- **Security & Auth:** PR #96469 fixes a configuration read failure scenario, preventing data loss on `sudo` upgrades. PR #94106 scopes secret scrubbing to prevent accidental deletion of provider credentials.
- **Compatibility:** PRs #90226 and #90226 address thread session preservation and Discord component support for complex user interfaces.
- **Community Contributions:** A significant number of PRs are coming from core maintainers (e.g., `yetval`, `RomneyDa`) focusing on foundational fixes and feature isolation (#97154 splits Slack changes from WhatsApp).

#### 4. Community Hot Topics
The most active discussions revolve around **session integrity** and **silent failures**, which are major user pain points.

- **Most Active Issue:** **[#88838 - Track core session/transcript SQLite migration](https://openclaw/openclaw/issues/88838)** (36 comments, 3 👍). This tracks the critical move to SQLite storage, which is seen as the foundational fix for many session bloat and crash issues.
- **Critical Regression Discussion:** **[#88312 - Turn-completion stall in Codex app-server](https://openclaw/openclaw/issues/88312)** (18 comments, 4 👍). Users are experiencing a regression where agents stall, failing to confirm turn completion. This is a high-priority item as it directly blocks user workflows.
- **Community Pain Point:** **[#79077 - Telegram bot-to-bot support](https://openclaw/openclaw/issues/79077)** (8 comments, 8 👍). The highest number of reactions on a single issue, indicating strong demand for supporting new Telegram platform features.

#### 5. Bugs & Stability
The project is experiencing significant stability challenges, particularly around session state and message loss.

- **Critical Regressions (P1):**
    - **#88312 [Regression]:** Codex app-server turn-completion stall.
    - **#76042:** Clean install of new versions is impossible for some users since the 2026.5.xx release.
    - **#76038:** Stuck Session Recovery mechanism fails entirely, leading to Gateway crashes.
- **High Severity Bugs (P1):**
    - **#74586:** Aborted `memory_search` tool calls in Active Memory plugin.
    - **#75593:** Subagent lists remain empty after a successful spawn.
    - **#77642:** Regressive behavior causing duplicate answers and missing tool results.
- **Stability Issues (P2/P3):**
    - **#94147 (macOS):** `CLLocationManager` is rebuilt every second, causing a flood of TCC permission requests.
    - **#77930:** Discord channel loading fails in recent beta versions.
    - **#78602:** Browser plugin fails consistently in long cron runs due to `targetId` mismatches.

**Note:** Many of these high-priority bugs have PRs open (e.g., #88312 is linked to active fixes), but many are also flagged as `needs-maintainer-review` or `needs-product-decision`.

#### 6. Feature Requests & Roadmap Signals
Several feature requests point toward a need for more flexible and secure deployment modes.

- **Gateway-Lite Mode:** **[#86881 - Gateway-lite mode](https://openclaw/openclaw/issues/86881)** asks for a deployment mode without an AI harness for pure automation and webhook use. This is a strong candidate for a future release.
- **Cross-Backend Context:** **[#79047 - Preserve context across model switches](https://openclaw/openclaw/issues/79047)** requests preserving conversation history when switching between different AI backends (e.g., Anthropic to OpenAI).
- **MCP Tool Approval:** **[#78308 - Channel-mediated approval for MCP tool calls](https://openclaw/openclaw/issues/78308)** is a high-demand security feature to extend existing approval pipelines to third-party MCP servers.

#### 7. User Feedback Summary
User sentiment reflects significant frustration with **instability and silent failures**, balanced by appreciation for the project's extensibility.

- **Pain Points (Dissatisfaction):**
    - High frequency of regressions (notably in session and message delivery).
    - Silent data loss and opaque errors (e.g., `"missing tool result in session history"`).
    - Plugin load failures that produce cryptic runtime errors instead of clear load-time messages.
    - Difficulty in deploying and configuring the system, especially in non-standard environments (Docker, Portainer).
- **Use Cases (Satisfaction):**
    - Advanced users are actively requesting "companion" APIs and cursors (#79904) to build third-party tools on top of OpenClaw's runtime.
    - The Telegram bot community is highly engaged, requesting the latest platform integrations.

#### 8. Backlog Watch
Several critical issues have been open for an extended period without resolution, requiring urgent maintainer attention.

- **High Priority Stale Issues:**
    - **[#55334 - sessions.json unbounded growth](https://openclaw/openclaw/issues/55334)** (Opened: 2026-03-26, 11 comments). A known cause of OOM crashes. Fix PRs exist but are pending review.
    - **[#74484 - Gateway pairing scope deadlock](https://openclaw/openclaw/issues/74484)** (Opened: 2026-04-29, 12 comments). A security deadlock preventing CLI users from approving/ rejecting critical gateway requests.
    - **[#73182 - Reasoning default flipped for Claude](https://openclaw/openclaw/issues/73182)** (Opened: 2026-04-28, 6 comments). A silent change that doubled API costs for Claude users by enabling extended thinking by default.
- **Stale PRs Waiting on Author:**
    - **#83600 [feat(whatsapp)]:** Support list reply actions.
    - **#78964 [fix(feishu)]:** Preserve topic reply anchors.
    - **#83592 [fix(models)]:** Avoid persisting prompt-visible provider secrets.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the personal AI assistant open-source ecosystem based on the June 29, 2026 community digest.

---

### Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-06-29

---

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem on June 29, 2026, is in a phase of **intense, divergent iteration**, characterized by rapid feature development, significant stability challenges, and a growing emphasis on production readiness. While flagship projects like OpenClaw, Hermes Agent, and ZeroClaw drive high-volume change across session management, security, and multi-platform support, a long tail of specialized projects (PicoClaw, Moltis) focus on targeted protocol and performance optimizations. A clear industry consensus is emerging around the need for **deterministic state management**, **granular access control**, and **cost-optimized model interactions**. However, this progress is hampered by widespread regressions and a maintenance bottleneck, particularly in the core OpenClaw project, which indicates the ecosystem is still struggling to balance velocity with stability as user bases expand beyond early adopters.

### 2. Activity Comparison

| Project | Issues (Updated/Open) | PRs (Updated/Open) | Release (Today) | Health Score | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 438 | 500 / 426 | ✅ `v2026.6.11-beta.2` | **Critical** | Extreme volume; maintenance bottleneck; multiple regressions. High community engagement but systemic instability. |
| **NanoBot** | 7 / ~1 (active) | 23 / 13 (active) | ❌ None | **Healthy** | Steady, focused activity. Responsive maintainers. 10 PRs merged today. |
| **Hermes Agent** | 50 / ~20 (active) | 50 / ~40 (active) | ❌ None | **Active** | High activity, strong Windows focus. 9 PRs merged. Security patches in review. |
| **PicoClaw** | 0 / 0 | 2 / 1 | ❌ None | **Maintenance** | Low activity. One feature PR merged (image compression). |
| **NanoClaw** | 1 / 1 | 6 / 5 | ❌ None | **Moderate** | Elevated activity due to security patch cycle. Low community discussion. |
| **NullClaw** | 1 / 0 | 0 / 0 | ❌ None | **Dormant** | Minimal activity; only a single issue closed. |
| **IronClaw** | ~10 / ~10 | 42 / 25 | ❌ None (PR in progress) | **Very Active** | Major push on "Reborn" architecture, testing, and features. Imminent release. |
| **LobsterAI** | 5 / ~3 | 5 / ~2 | ❌ None | **Steady** | Healthy maintenance cadence; closing stale bugs and merging features. |
| **TinyClaw** | 0 / 0 | 0 / 0 | ❌ None | **Dormant** | No activity in the last 24 hours. |
| **Moltis** | 1 / 1 | 2 / 2 | ❌ None | **Quiet** | Low activity but focused on critical fixes (image token overflow, dependency bloat). |
| **CoPaw** | ~5 / ~3 | 6 / 6 | ❌ None | **Moderate** | Focused on test infrastructure and channel integrations (DingTalk). |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | ❌ None | **Dormant** | No activity in the last 24 hours. |
| **ZeroClaw** | 50 / ~45 | 50 / ~47 | ❌ None (Milestones active) | **Very Active** | Three concurrent release tracks. Strong governance and architectural RFCs. |

### 3. OpenClaw's Position

OpenClaw is the **central reference implementation and the most active, but also the riskiest, project in the ecosystem**. Its advantages are its vast feature surface and plugin ecosystem, supported by a large, engaged community (e.g., 500 updated issues/PRs). Technically, it is pioneering complex features like session-state migration to SQLite and granular channel control. However, its primary disadvantage is a **significant instability problem**: a high volume of regressions (e.g., turn-completion stalls, session crashes) creates a poor user experience. Compared to peers:
- **vs. NanoBot**: OpenClaw has a much larger community but is far less stable. Nanobot's smaller codebase allows for more responsive bug fixes.
- **vs. Hermes Agent**: OpenClaw leads in feature scope, while Hermes Agent is winning on Windows platform stability and has a more focused approach to security.
- **vs. ZeroClaw**: Both are highly active, but ZeroClaw’s focus on architectural RFCs and governance (e.g., `wasmtime` pivot) suggests a more deliberate, plan-driven development process compared to OpenClaw's more chaotic growth.

### 4. Shared Technical Focus Areas

Several requirements are emerging as consensus pain points across multiple projects, indicating industry-wide priorities:

- **Session/Prompt State Management:**
    - **Need:** Reliable session persistence and migration to prevent data loss and crashes.
    - **Projects:** **OpenClaw** (#88838 SQLite migration), **NanoBot** (context cache invalidation #4222), **LobsterAI** (session-based skill state PR #1494).

- **Security & Access Control:**
    - **Need:** Granular control over tool/command execution, channel access, and file system to prevent unauthorized actions.
    - **Projects:** **NanoBot** (shell allowlist bypass #4521), **Hermes Agent** (Matrix room isolation #54461), **NanoClaw** (symlink escape #2828), **ZeroClaw** (MCP scoping no-op #7733).

- **Cost Optimization & Latency Reduction:**
    - **Need:** Minimizing token usage to lower API costs and reduce model response times.
    - **Projects:** **NanoBot** (context optimization PR #4581), **IronClaw** (progressive tool disclosure #5149), **Moltis** (image downscaling PR #1138).

- **Multi-Platform / Channel Parity:**
    - **Need:** Consistent behavior and features across messaging platforms (Telegram, Discord, Matrix).
    - **Projects:** **OpenClaw** (Discord component support, Telegram bot-to-bot), **NanoBot** (voice output), **CoPaw** (DingTalk @mention), **ZeroClaw** (Telegram rich messages, multi-message streaming).

### 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architectural Approach |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Extensibility, broad protocol support | Advanced developers, integrators | Monolithic core with extensive plugin system |
| **NanoBot** | Ease of use, reliability, skill workflow | Hobbyists, small teams | Modular, agent-focused with skills as a key primitive |
| **Hermes Agent** | Desktop UX, platform stability | Individual users, Windows ecosystem | Desktop-first with strong gateway abstraction |
| **IronClaw** | Enterprise readiness, production infrastructure | Teams, organizations | "Reborn" architecture with in-process testing, capabilities |
| **ZeroClaw** | Governance, security, architectural purity | Security-conscious teams, power users | RFC-driven development; WASM plugin model |
| **LobsterAI** | Collaborative work (Cowork), skill management | Team collaboration | Rich UI (Cowork module) for multi-person agent interactions |
| **Moltis** | Lightweight, focused fixes | Developers on constrained hardware | Minimalist, targeted bug fixes and performance patches |
| **CoPaw** | Multi-agent communication, channel integration | Asian market (DingTalk) | Dedicated to specific channel parity and multi-agent workflows |

### 6. Community Momentum & Maturity

The ecosystem can be divided into three tiers based on activity and maturity:

- **Tier 1: Hyperactive & High-Risk (Rapid Iteration):**
    - **Projects:** **OpenClaw**, **ZeroClaw**, **Hermes Agent**, **IronClaw**.
    - **Behavior:** High PR/issue churn, multiple concurrent features, frequent regressions. These projects are pushing the boundaries of the technology but are less stable. **IronClaw** and **ZeroClaw** show signs of greater architectural planning, while **OpenClaw**'s sheer volume is outpacing its maintainers' ability to stabilize.

- **Tier 2: Steady & Healthy (Stable Iteration):**
    - **Projects:** **NanoBot**, **LobsterAI**, **CoPaw**.
    - **Behavior:** Moderate activity with clear progress on both features and bug fixes. These projects demonstrate a better feature-to-stability ratio, making them more reliable for production workflows.

- **Tier 3: Dormant/Maintenance (Low Activity):**
    - **Projects:** **NullClaw**, **TinyClaw**, **ZeptoClaw**, **PicoClaw**, **Moltis**.
    - **Behavior:** Minimal or no development. **NullClaw** is effectively stalled. These projects may be abandoned or need a catalyst to restart.

### 7. Trend Signals

From the community feedback and developer activity, three key industry trends emerge:

1.  **The "Cost-Conscious Agent" is the Next Battleground:** User frustration with high API costs (NanoBot #4581, LobsterAI #2216) is driving innovation in context optimization (progressive tool disclosure, image compression, cache invalidation fixes). The next generation of agents will be evaluated not just on capability, but on **token efficiency**.
2.  **Security is Shifting from "Authentication" to "Authorization":** The ecosystem is past the basic login/auth stage. The current focus is on **fine-grained authorization**: which tools an agent can use (MCP scoping), which files it can access (`.ignore` files, symlink protection), and which channels/users it should respond to. This is a sign of growing enterprise usage and a maturing threat model.
3.  **The User Interface is Becoming a Critical Differentiator:** While the agent core is command-line or API-driven, the user experience is increasingly determined by the quality of the front-end. Projects are investing heavily in **Desktop apps** (Hermes Agent, OpenClaw), **WebUIs** (NanoBot, IronClaw), and **rich message rendering** (Telegram/Discord features). The "best agent" will be the one with the most seamless and intuitive interface across platforms.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-29

## Today's Overview

NanoBot shows **sustained high activity** with 23 PRs and 7 issues updated in the last 24 hours, indicating strong community and maintainer engagement. Ten PRs were merged or closed, signaling ongoing progress toward stability and feature completeness. No new releases were published today, but the dense PR pipeline suggests a significant update may be imminent. The project is **healthy and actively maintained**, with contributions addressing both user-reported bugs and requested features across multiple subsystems.

---

## Releases

**None** — No new releases were published in the last 24 hours. The latest available version remains v0.2.2 (as referenced in bug reports).

---

## Project Progress — Merged/Closed PRs (10 items)

### Stability & Bug Fixes
- **[#4565](https://github.com/HKUDS/nanobot/pull/4565) (closed)** — `fix(webui): clear stuck streaming after reconnect and improve stop reliability` — Fixes Bug 2 and Bug 3 from [#4500](https://github.com/HKUDS/nanobot/issue/4500), resolving WebUI "stuck processing" state after gateway restart and "No active task to stop" errors.
- **[#4569](https://github.com/HKUDS/nanobot/pull/4569) (closed)** — `fix(agent): harden tool-call path against malformed relay responses` — Prevents crashes from upstream relays that emit malformed tool-use responses (missing tool names or invalid strings).
- **[#4566](https://github.com/HKUDS/nanobot/pull/4566) (closed)** — `fix(session): repair corrupt legacy-stem files in list_sessions` — Fixes silent drop of session files with legacy non-base64 filenames during listing.
- **[#4564](https://github.com/HKUDS/nanobot/pull/4564) (closed)** — `fix(cron): guard public APIs against unavailable store` — Prevents crashes when cron store is unavailable.

### Features & Improvements
- **[#4504](https://github.com/HKUDS/nanobot/pull/4504) (closed)** — `feat: support skills in subdirectories for better organization` — Enables optional subdirectory grouping under `~/.nanobot/workspace/skills/`.
- **[#4542](https://github.com/HKUDS/nanobot/pull/4542) (closed)** — `feat(mcp): deliver image content from MCP tools as artifacts` — Prevents base64 image payloads from polluting tool-result strings and consuming token budgets.
- **[#2120](https://github.com/HKUDS/nanobot/pull/2120) (closed)** — `feat: add nanobot AI assistant introduction and contributors documentation` — Adds CONTRIBUTORS.md and updates README with contributor documentation.

### Infrastructure & Guidelines
- **[#4575](https://github.com/HKUDS/nanobot/pull/4575) (closed)** — `add repository guidelines` — Establishes contributing guidelines for the project.

---

## Community Hot Topics

### Most Active Issue: Voice Output Support
**[#4010](https://github.com/HKUDS/nanobot/issue/4010) (open)** — *"Feature proposal: text-to-speech / voice output support"*
**Author:** olgagaga | **Created:** 2026-05-26 | **👍 2** | **Comments: 2**

> *"nanobot already understands voice in. It cannot yet speak out: the agent's reply is always text, even on channels that natively support voice notes."*

**Analysis:** This long-running feature request (one month old) represents a high-value UX improvement—closing the bidirectional voice loop. The user argues the hardest channel-side work is already done. No PR is open yet, suggesting this may land as a larger architectural change.

### Most Active PR: Context Optimization
**[#4581](https://github.com/HKUDS/nanobot/pull/4581) (open)** — *"optimization: reducing context usage and thus reducing costs"*
**Author:** hamb1y | **Created:** 2026-06-28 | **Comments: 0**

> *"This PR implements changes to reduce the input tokens/context fed into the model every turn. This reduces costs and lets low-context models go on for longer."*

**Analysis:** This brand-new PR addresses a critical pain point—token costs. It improves upon existing compacting features and targets both cost reduction and extended session length for low-context models.

### Security-Interest PR: Shell Validation
**[#4562](https://github.com/HKUDS/nanobot/pull/4562) (open)** — *"fix(security): validate each shell segment against exec.allowPatterns"*
**Author:** michaelxer | **Created:** 2026-06-26 | **Updated:** 2026-06-28

> *"`exec.allowPatterns` uses `re.search()` on the raw command string, so a chained payload like `echo allowlisted && touch /tmp/evil` passes the allowlist."*

**Analysis:** This security fix closes a reported vulnerability (#4521) where chained commands could bypass allowlist restrictions. It is 2 days old and warrants prompt review.

---

## Bugs & Stability

### High Severity
1. **Shell Allowlist Bypass ([#4521](https://github.com/HKUDS/nanobot/issues/4521), addressed by [#4562](https://github.com/HKUDS/nanobot/pull/4562))**
   - **Status:** Fix PR open (2 days)
   - **Impact:** Security vulnerability—chained commands (`cmd1 && cmd2`) bypass `exec.allowPatterns` validation.
   - **Risk:** Unauthorized command execution despite allowlist configuration.

2. **WebUI Stuck Streaming / Stop Button Failure ([#4500](https://github.com/HKUDS/nanobot/issue/4500))**
   - **Status:** **Fixed** via [#4565](https://github.com/HKUDS/nanobot/pull/4565) (merged today)
   - **Impact:** After self-restart or WebSocket reconnection, WebUI shows "processing" state indefinitely and stop button reports "No active task to stop."
   - **Note:** Both Bug 1 (streaming state) and Bug 2 (processing state) have been fixed.

### Medium Severity
3. **Context Cache Invalidation ([#4222](https://github.com/HKUDS/nanobot/issue/4222))**
   - **Status:** Fix PR open ([#4568](https://github.com/HKUDS/nanobot/pull/4568))
   - **Impact:** `max_messages` truncation and microcompact cause continuous prefix/prompt cache invalidation, increasing API costs and latency by ~30-50%.

4. **Malformed Relay Responses ([#4569](https://github.com/HKUDS/nanobot/pull/4569))**
   - **Status:** **Fixed** (merged today)
   - **Impact:** Crashes or infinite loops when upstream relays return malformed tool-use responses.

5. **Legacy Session Filename Corruption ([#4566](https://github.com/HKUDS/nanobot/pull/4566))**
   - **Status:** **Fixed** (merged today)
   - **Impact:** Silent data loss of sessions with non-base64 filenames in `list_sessions()`.

### Low Severity
6. **Dream Duplicate Skill Creation ([#4554](https://github.com/HKUDS/nanobot/pull/4554))**
   - **Status:** Fix PR open (2 days)
   - **Impact:** Dream agent creates duplicate skill directories instead of editing existing ones.

---

## Feature Requests & Roadmap Signals

### Likely for Next Release (based on open PRs):

| Feature | Issue/PR | Confidence | Rationale |
|---------|----------|------------|-----------|
| **Per-subagent model override** | [#4231](https://github.com/HKUDS/nanobot/issue/4231) / [#4570](https://github.com/HKUDS/nanobot/pull/4570) | High | PR open for 1 day, implements a highly requested capability |
| **Native A2A peer delegation** | [#4179](https://github.com/HKUDS/nanobot/issues/4179) / [#4571](https://github.com/HKUDS/nanobot/pull/4571) | High | PR open, addresses multi-agent collaboration |
| **OAuth proxy for Codex** | [#4578](https://github.com/HKUDS/nanobot/pull/4578) | Medium | New, specific to Codex provider integration |
| **OAuth login as main provider** | [#4573](https://github.com/HKUDS/nanobot/pull/4573) | Medium | Improves setup UX for OAuth-only users |
| **Block-aligned context eviction** | [#4568](https://github.com/HKUDS/nanobot/pull/4568) | High | Directly fixes cache invalidation bug (#4222) |

### Community-Requested Features (No PR yet):

| Feature | Issue | Age | Demand |
|---------|-------|-----|--------|
| **Text-to-speech / voice output** | [#4010](https://github.com/HKUDS/nanobot/issue/4010) | 34 days | 👍 2, active discussion |
| **Group chat message debouncing** | [#3938](https://github.com/HKUDS/nanobot/issue/3938) | 40 days | 1 comment, moderate interest |
| **Session timestamps + markdown export** | [#4579](https://github.com/HKUDS/nanobot/issue/4579) | 1 day | Brand new, likely candidate for quick implementation |
| **Conda environment for subprocesses** | [#4580](https://github.com/HKUDS/nanobot/issue/4580) | 1 day | New, addresses dev workflow needs |

### Prediction:
The **per-subagent model override** ([#4570](https://github.com/HKUDS/nanobot/pull/4570)) and **A2A delegation** ([#4571](https://github.com/HKUDS/nanobot/pull/4571)) are the strongest candidates for inclusion in v0.2.3, as they have ready PRs targeting the next release. **Voice output** and **session timestamps** are likely deferred to v0.3.0 as they require more significant UI/architectural work.

---

## User Feedback Summary

### Pain Points (Voice of the User):
1. **High token costs** — Multiple issues and the context optimization PR ([#4581](https://github.com/HKUDS/nanobot/pull/4581)) highlight cost as a major concern for both hobbyist and production users.
2. **WebUI instability after restart** — The stuck streaming bug ([#4500](https://github.com/HKUDS/nanobot/issue/4500)) frustrated users who experienced non-responsive interfaces after self-restart or reconnect.
3. **Limited subagent customization** — Users want to assign different models to different spawned subagents ([#4231](https://github.com/HKUDS/nanobot/issue/4231)), indicating adoption beyond simple single-agent use cases.
4. **Group chat noise** — Users in Feishu and Telegram group chats report each message triggers a separate agent invocation, leading to context-switching and confusion ([#3938](https://github.com/HKUDS/nanobot/issue/3938)).
5. **Incomplete voice loop** — Voice input without output leaves the conversational experience feeling one-sided ([#4010](https://github.com/HKUDS/nanobot/issue/4010)).

### Satisfaction Indicators:
- The rapid closure of WebUI streaming bugs (same day as fix PR) shows responsive maintainer support.
- The security fix for shell allowlist bypass was addressed within 2 days of the vulnerability report.
- The crowded PR pipeline (23 updated in 24h) suggests a large, active contributor base.

### Use Cases Driving Requests:
- **Multi-agent workflows:** Subagent model override and A2A delegation (Researcher/Writer/Supervisor teams)
- **Production deployments:** Cost optimization, security hardening, stable WebSocket reconnection
- **Collaborative environments:** Group chat debouncing, session organization (timestamps/export)
- **Developer tooling:** Conda environment support, Codex proxy configuration

---

## Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Last Activity | Importance | Reason |
|-------|-----|--------------:|------------|--------|
| **[#3938](https://github.com/HKUDS/nanobot/issue/3938)** — Group chat message debouncing | 40 days | 1 day ago | Medium | No PR, moderate demand; maintainer response needed |
| **[#4010](https://github.com/HKUDS/nanobot/issue/4010)** — Voice output support | 34 days | 1 day ago | Medium | High-value UX improvement, comments suggest user frustration |
| **[#4222](https://github.com/HKUDS/nanobot/issue/4222)** — Context cache invalidation | 23 days | 1 day ago | High | Fix PR open ([#4568](https://github.com/HKUDS/nanobot/pull/4568)), but needs review/merge |
| **[#4231](https://github.com/HKUDS/nanobot/issue/4231)** — Subagent model override | 22 days | 1 day ago | High | Fix PR open ([#4570](https://github.com/HKUDS/nanobot/pull/4570)), needs review |

### Long-Standing PRs Needing Review:

| PR | Age | Last Activity | Status |
|----|-----|--------------:|--------|
| **[#4534](https://github.com/HKUDS/nanobot/pull/4534)** — Reliability & verification layer | 3 days | 1 day ago | Open, no comments |
| **[#4562](https://github.com/HKUDS/nanobot/pull/4562)** — Shell segment security fix | 3 days | 2 days ago | Open, **high priority** (security vulnerability) |
| **[#4554](https://github.com/HKUDS/nanobot/pull/4554)** — Dream duplicate skill guard | 3 days | 2 days ago | Open |

### Recommendation for Maintainers:
- **Prioritize review of security fix [#4562](https://github.com/HKUDS/nanobot/pull/4562)** (shell validation bypass) — this is a vulnerability that could affect all users with `exec.allowPatterns` configured.
- **Merge context cache fix [#4568](https://github.com/HKUDS/nanobot/pull/4568)** — the 3-week-old bug [#4222](https://github.com/HKUDS/nanobot/issue/4222) directly impacts user costs.
- **Provide roadmap signal on voice output [#4010](https://github.com/HKUDS/nanobot/issue/4010)** — the user has been waiting over a month without maintainer indication of priority.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-29

---

## 1. Today's Overview

Project activity remains **very high**, with 50 issues and 50 PRs updated in the last 24 hours. The bug tracker shows sustained pressure from the Windows desktop community, with console window flashing and IME input issues dominating new reports. The PR queue is healthy, with several security-critical patches (#52355) and major feature additions (#54517, #54522) in review. No new releases were cut today, but the maintainers merged multiple Windows-specific fixes (console flash, crash loops) that should significantly improve the out-of-box experience for non-English Windows users. Overall, the project appears in an **active development phase** with a strong focus on platform stability and gateway feature parity.

---

## 2. Releases

**No new releases today.** The latest release remains at a version prior to the significant bug-fix churn seen in the last 48 hours.

---

## 3. Project Progress

**Merged/Closed PRs today (9 total):**

- **[#54515](https://github.com/NousResearch/hermes-agent/pull/54515) [fix]**: Fall back to `HERMES_HOME` for remote file attachments when session workspace is read-only — important for Dockerized WSC deployments.
- **[#54410](https://github.com/NousResearch/hermes-agent/pull/54410) [duplicate, closed]**: QQBot adapter issue (`is_reconnect` keyword argument) — user reported a self-resolved bug.
- **[#53433](https://github.com/NousResearch/hermes-agent/pull/53433) [closed]**: Desktop terminal pane flicker regression from commit `1f950e189`.
- **[#53957](https://github.com/NousResearch/hermes-agent/issues/53957) [closed]**: `gh` auth subprocess console window flash on Windows — root cause identified and targeted for fix.
- **[#53370](https://github.com/NousResearch/hermes-agent/issues/53370) [closed]**: `subprocess.CREATE_NO_WINDOW` flag added for `gh auth token` on Windows.
- **[#53065](https://github.com/NousResearch/hermes-agent/issues/53065) [closed]**: Two Windows-specific bugs — GBK crash loop & terminal window flood — now patched.

**Key feature advances:** Multi-terminal panel (#54517), gateway event dispatcher for Slack native cards (#54522), `/deny <reason>` for approval workflow (#54518), and Hindsight memory provider mental-model injection (#53621, #36083).

---

## 4. Community Hot Topics

**Most discussed issues (by comments):**

| Issue | Title | Comments | 👍 |
|-------|-------|----------|----|
| [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) | [Bug]: Fails to install NeuTTS during setup | 12 | 4 |
| [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) | Telegram typing indicator stuck indefinitely | 7 | 0 |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) | Desktop `/compress` not a quick/plugin/skill command | 6 | 0 |
| [#3846](https://github.com/NousResearch/hermes-agent/issues/3846) | Telegram bot 401 cookie auth error | 6 | 0 |
| [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) | [Tracking] Windows console window flashing | 6 | 0 |
| [#36046](https://github.com/NousResearch/hermes-agent/issues/36046) | Kanban artifact not created/deleted | 5 | 0 |

**Underlying needs analysis:**
- **Windows stability** (#54220, #53370, #53957, #54506) is the dominant pain point — users are experiencing console window flashing every 5-10 seconds, making the desktop app nearly unusable. The tracking issue (#54220) has **6 comments** and is described as "the most-reported active bug on the repo."
- **International users** are a growing segment — IME issues (#39025, #39651) and GBK encoding crashes (#53065) on Chinese Windows systems indicate the Desktop app needs better localization and input-method support.
- **Tool ecosystem friction** — NeuTTS install failures (#3002, 3 months old, 12 comments) and the `/compress` command routing bug (#44456) suggest usability gaps in the desktop/TUI for built-in tools.

---

## 5. Bugs & Stability

**Today's newly reported bugs (ranked by severity):**

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **P2** | [#54506](https://github.com/NousResearch/hermes-agent/issues/54506) | Command prompt blinking constantly on Windows desktop (duplicate) | Yes (part of #54220 tracking) |
| **P2** | [#54447](https://github.com/NousResearch/hermes-agent/issues/54447) | File tools build Docker sandbox with unsanitized host cwd — `search_files` sees empty workspace | No |
| **P2** | [#54461](https://github.com/NousResearch/hermes-agent/issues/54461) | Matrix multi-profile rooms bypass allowed-room isolation (security boundary) | No |
| **P2** | [#54147](https://github.com/NousResearch/hermes-agent/issues/54147) | `hermes chat -m <model>` uses stale `api_mode` from config default → 404 on opencode-go | No |
| **P2** | [#54049](https://github.com/NousResearch/hermes-agent/issues/54049) | DeepSeek streaming broken by OpenResty with custom httpx transport | No |
| **P3** | [#52599](https://github.com/NousResearch/hermes-agent/issues/52599) | Ollama Cloud model picker shows local models instead of cloud models | No |
| **P2** | [#51976](https://github.com/NousResearch/hermes-agent/issues/51976) | Cron tool can schedule gateway lifecycle scripts causing restart loops | No |

**Critical regression note:** The **Windows console window flashing** bug (#54220) has recurred after previous fixes, now with a dedicated tracking issue and multiple duplicate reports (#54506). A new fix (#54297) is in review for the OAuth disconnect flow that was still sending Unix commands to Windows terminals.

**Security issues:** The Matrix room isolation bypass (#54461) and the stale `api_mode` bug (#54147) could lead to data exposure and incorrect model routing respectively.

---

## 6. Feature Requests & Roadmap Signals

**Top user-requested features today:**

| Issue | Feature | Priority | Likely for Next Version? |
|-------|---------|----------|--------------------------|
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | Multi-gateway connections with per-gateway tabs in Desktop | P3 | Unlikely — significant UI rework |
| [#54463](https://github.com/NousResearch/hermes-agent/issues/54463) | Edge-based vertical capability packs (PM, analyst workflows) | P3 | Possible — aligns with plugin/tool ecosystem growth |
| [#54434](https://github.com/NousResearch/hermes-agent/issues/54434) | Custom app icon for Desktop | P3 | Low priority |
| [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | Trigger background memory review at session boundaries | P3 | Moderate — memory infrastructure already exists |
| [#17062](https://github.com/NousResearch/hermes-agent/issues/17062) | Safe customer-support deployment profile (RFC) | P3 | Possible — enterprise deployments are a natural growth vector |

**PRs that signal near-term roadmap direction:**
- **Multi-terminal panel** (#54517) — suggests Desktop app is getting professional IDE-like features
- **Slack native plan/task cards** (#54522) — platform-specific UI enhancements for productivity
- **Gateway event dispatcher** (#54522) — architectural improvement for real-time UX
- **Hindsight mental-model injection** (#53621, #36083) — memory/persona system is maturing

---

## 7. User Feedback Summary

**Common pain points:**
1. **Windows desktop unusability**: Multiple users report the app is "nearly unusable" on non-English Windows (#53065), with "command prompt keeps 'blinking'" every 5-10 seconds (#54506) and "cannot printscreen it, since it blink[s] so fast."
2. **Chinese/IME input failure**: "After typing a message with a Chinese IME, pressing Enter can fail to send the message" (#39025), and the send button incorrectly shows as voice button (#39651). This indicates the Desktop composer lacks proper internationalization support.
3. **NeuTTS installation friction**: A 3-month-old issue (#3002) with 12 comments shows persistent pain installing text-to-speech capability — "No module named pip" suggests a bootstrap dependency problem.
4. **Email gateway session isolation**: Users need subject-based session isolation (#27804) to avoid interruption of running tasks; the current behavior merges all emails into one session.

**Positive signals:**
- Community is actively contributing fixes (e.g., #53370, #53957 closed within 24 hours of reporting)
- Feature requests show sophisticated use cases: multi-host deployment, enterprise customer support, professional workflows
- The `/deny <reason>` feature (#54518) and Hindsight memory injection (#53621) show the community values agent reasoning transparency and long-term context

---

## 8. Backlog Watch

**Issues needing maintainer attention:**

| Issue | Days Open | Summary | Priority |
|-------|-----------|---------|----------|
| [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) | **96** | [Bug]: Fails to install NeuTTS during setup | P2 — 12 comments, 4 👍, no fix PR |
| [#17062](https://github.com/NousResearch/hermes-agent/issues/17062) | **62** | RFC: Safe customer-support deployment profile | P3 — important strategic direction, needs maintainer decision |
| [#3846](https://github.com/NousResearch/hermes-agent/issues/3846) | **91** | Telegram bot 401 cookie auth error | P3 — closed but unresolved; user abandoned |
| [#27804](https://github.com/NousResearch/hermes-agent/issues/27804) | **42** | Email gateway: lack of subject-based session isolation | P2 — affects core email use case |
| [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | **36** | Background memory review at session boundaries | P3 — one comment, no maintainer response |

**Stale PRs needing review:**

| PR | Days Open | Summary | Status |
|----|-----------|---------|--------|
| [#34979](https://github.com/NousResearch/hermes-agent/pull/34979) | **31** | Azure URL validation to prevent SSRF | P2 security fix — has `sweeper:risk-security-boundary` label, no merge |
| [#35785](https://github.com/NousResearch/hermes-agent/pull/35785) | **29** | LINE platform media caching fix | P3 — platform-specific, no maintainer review |
| [#36083](https://github.com/NousResearch/hermes-agent/pull/36083) | **29** | Hindsight injection model (memory) | P3 — significant feature, has multiple commits |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | **25** | Multilingual i18n with 15 languages | P3 — large PR (861 keys), conflicting with upstream i18n skeleton |
| [#39384](https://github.com/NousResearch/hermes-agent/pull/39384) | **25** | Cron test coverage to 70% | P3 — test-only PR, should be quick to merge or comment |

**⚠️ Critical attention item:** The SSRF vulnerability fix for Azure CLI (#34979) has been open **31 days** with security labels and no maintainer activity — it accepts arbitrary URLs and sends API keys without validation. This should be escalated.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-29

## 1. Today's Overview
Project activity on PicoClaw remains moderate but focused. In the last 24 hours, one long-standing issue was automatically closed due to staleness, and one pull request was merged while another remains open. No new releases were published, indicating the core team may be consolidating features for a future tag. Overall, the project shows steady incremental progress, with contributor interest continuing in channel protocol enhancements.

## 2. Releases
No new releases were published today. The last known release tag is still pending.

## 3. Project Progress
- **PR #2964 — [CLOSED] Feat/image input compression** (`afjcjsbx`) — This pull request adds configurable inbound image compression for PicoClaw's vision pipeline. Previously, images were only limited by `max_media_size` without a multi-level compression policy before building the model payload. The merged change reduces bandwidth and processing overhead for vision-enabled agents.  
  GitHub: [sipeed/picoclaw PR #2964](https://github.com/sipeed/picoclaw/pull/2964)

## 4. Community Hot Topics
- **Issue #2984 — [CLOSED] [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients**  
  *Author: Brook-sys | Comments: 4 | 👍: 2*  
  This issue requested a deterministic signal (`turn.complete` or similar) so external WebSocket clients know when the agent has finished processing a user message. The underlying need is for reliable state synchronization in multi-turn conversations — clients currently rely on `typing.stop` as an implicit signal, which can be ambiguous. The issue was closed due to staleness, but the two upvotes suggest real demand from integrators.  
  GitHub: [sipeed/picoclaw Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. The project remains stable with respect to reported issues.

## 6. Feature Requests & Roadmap Signals
- **Turn completion signal** (Issue #2984) — Though closed as stale, the request for an explicit WebSocket turn-complete event is the most upvoted feature request in recent data. It is likely to be revisited if community demand persists, possibly in the next protocol revision.
- **PR #3193 — [OPEN] Added simplex channel type** (`dim`) — This open pull request introduces a new channel type called "simplex" (one-way communication channel). If merged, it would expand PicoClaw's channel architecture, enabling simpler unidirectional integrations. This could be part of the next minor version if the maintainers accept it.  
  GitHub: [sipeed/picoclaw PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

## 7. User Feedback Summary
- **Pain point**: Integrators of Pico WebSocket clients find it difficult to reliably detect when an agent's response is complete, leading to potential race conditions in multi-turn dialogue applications.
- **Use case**: Developers building custom front-ends or chatbot UIs on top of PicoClaw need deterministic lifecycle events for conversation state management.
- **Satisfaction**: The image compression feature (merged today) addresses user feedback about excessive bandwidth usage from unoptimized image uploads, which is a clear positive signal.

## 8. Backlog Watch
- **Issue #2984** — While closed as stale, this issue with two 👍 reactions remains unaddressed and represents a legitimate protocol gap. Maintainers may want to re-open or create a successor issue if the feature is prioritized.
- **PR #3193** — Has been open for 2 days with no maintainer comments yet. Given its non-breaking nature and utility for unidirectional integrations, it would benefit from a review or a status update to avoid stagnation.  
  GitHub: [sipeed/picoclaw PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for June 29, 2026.

---

## NanoClaw Project Digest — 2026-06-29

### 1. Today's Overview
Project activity is **elevated**, driven by a concentrated security patch cycle and a moderate flow of feature contributions. Six pull requests were updated in the last 24 hours, but only one was merged, indicating a build-up of pending review work. A single open issue highlights a major integration gap (OpenAI provider support crashing), which may be a bottleneck for users migrating from third-party providers. While no new releases were published today, the codebase saw meaningful hardening against path-traversal vulnerabilities.

### 2. Releases
**No new releases** were published today. The latest stable version remains **NanoClaw 2.1.1**, as referenced in Issue #2876.

### 3. Project Progress
One pull request was merged/closed today:
- **[#2879 (Merged) - fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles]**  
  *Author: johnmathews*  
  This PR closes a security gap (tracked in #2828) where agent-to-agent attachment forwarding could follow a symlink to write files outside the session root. The fix aligns attack-surface defenses with existing patterns in `session-manager.ts`.

No new features were definitively merged, but several open PRs signal forward progress on integrations and reliability:
- **#2877**: Native rich message rendering for Telegram via Bot API 10.1
- **#2878**: Fix for stale OpenAI secrets blocking Codex reconnection
- **#2880**: Prevention of symlink-based host file writes during attachment handling
- **#2881**: Fix for Discord button `custom_id` parsing when delimiters are present

### 4. Community Hot Topics
Currently, **no issues or PRs** have generated significant community discussion (comments or reactions). The most technically active threads are the security fixes by *johnmathews* (#2879, #2880) and the integration breakage reported in Issue #2876. While engagement is low, the underlying needs are clear:
- **Reliability of provider switching** – users expect `--provider openai` to work transparently without container crashes.
- **Security in multi-tenant/containerized setups** – the symlink-related PRs address real attack vectors raised in a recent audit.

### 5. Bugs & Stability
Two active bug reports and fixes were tracked today, both ranking **Critical** due to security implications:

| Bug | Issue/PR | Severity | Fix Exists? |
|---|---|---|---|
| Symlink escape via forwarded attachments (A2A + host writes) | #2828 / #2879, #2880 | **Critical** | ✅ Merged (#2879), Open (#2880) |
| OpenAI provider crashes container on agent spawn | #2876 | **High** | ❌ No fix yet |

The **OpenAI provider crash** (#2876) blocks a common user workflow (running agents via OpenAI instead of the default provider). A fix involving the container spawner or provider validation logic is likely needed.

### 6. Feature Requests & Roadmap Signals
Today’s dataset shows **one clear feature request** and one capability expansion signal:
- **Native Telegram rich messaging** (#2877) – uses Bot API 10.1 `sendRichMessage` to render formatted text, media, and buttons directly. This is likely to land in the next minor release (2.2.x).
- **OpenAI provider support** (implied by #2876) – although reported as a bug, the underlying user story is a feature request: *“I want to use my own OpenAI API key with NanoClaw agents.”*

**Prediction:** The next release will include the Telegram rich rendering feature and a patch for the OpenAI provider crash. The endpoint/secret reconnection fix in Codex (#2878) may also be fast-tracked.

### 7. User Feedback Summary
Very little direct user sentiment is visible in today’s data, but key pain points emerge from the activity:
- **Configuration acceptance ≠ runtime success** – the user in #2876 successfully configured an OpenAI provider via CLI, only to see the container crash on first message. This erodes trust in configuration persistence.
- **Security anxiety** – the aggressive focus on symlink containment (#2879, #2880) suggests either a recent audit or a production incident involving container breakout attempts.

No positive satisfaction signals were recorded today.

### 8. Backlog Watch
No issues or PRs in today’s data show signs of prolonged inactivity. The oldest updated item (PR #2875, "Deploy/coolify") is 2 days old and may be waiting on CI or maintainer review. It does not yet qualify as stagnant, but bears watching if it remains untouched through the weekend.

---

**Links to tracked items:**
- Issue #2876: https://github.com/nanocoai/nanoclaw/issues/2876
- PR #2881: https://github.com/nanocoai/nanoclaw/pull/2881
- PR #2880: https://github.com/nanocoai/nanoclaw/pull/2880
- PR #2879: https://github.com/nanocoai/nanoclaw/pull/2879
- PR #2878: https://github.com/nanocoai/nanoclaw/pull/2878
- PR #2877: https://github.com/nanocoai/nanoclaw/pull/2877
- PR #2875: https://github.com/nanocoai/nanoclaw/pull/2875

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest — 2026-06-29**

**1. Today's Overview**
NullClaw shows minimal activity over the past 24 hours, with no new commits, pull requests, or releases. The only movement was the closure of Issue #50, which had been open since February. Project velocity remains very low, indicating a maintenance or dormant phase. No new features, fixes, or experimental branches were introduced.

**2. Releases**
No new releases were published today. The project has no tagged releases available.

**3. Project Progress**
No pull requests were updated, merged, or closed in the last 24 hours. No feature advancements or bug fixes were deployed. The project’s feature set remains unchanged.

**4. Community Hot Topics**
The only active community discussion over the past day was Issue #50, which was closed today after receiving four comments.

- **Issue #50** (CLOSED) – *“Can this run on an Esp32?”*  
  Author: ngantrandev | Created: 2026-02-21 | Updated: 2026-06-28 | 💬 4  
  [View Issue](https://github.com/nullclaw/nullclaw/issues/50)  
  **Analysis:** This was a long-dormant question about hardware compatibility. The closure suggests the maintainer either answered the question directly or determined that ESP32 support is out of scope. The community appears to be interested in lightweight, microcontroller-level deployment of NullClaw.

**5. Bugs & Stability**
No new bugs, crashes, or regressions were reported today. The codebase has no open issues flagged as bugs. Stability status is unchanged from previous days.

**6. Feature Requests & Roadmap Signals**
No new feature requests were filed today. The closure of Issue #50 may signal that the maintainer does not plan to add ESP32 (microcontroller) support in the near term. If any roadmap exists, it remains unpublished. No signals point to upcoming features.

**7. User Feedback Summary**
**Pain Points:**
- **Hardware compatibility uncertainty** – A user (ngantrandev) asked whether the project could run on an ESP32, indicating interest in edge/IoT deployment. The closure without a clear public resolution may leave other users unsure about supported platforms.

**Use Cases:**  
The query implies interest in running personal AI agents on low-power microcontrollers—a use case not currently addressed.

**Satisfaction / Dissatisfaction:**  
With no new issues, PRs, or feedback, the user base appears quiet. The lack of recent updates may cause dissatisfaction among users seeking active development.

**8. Backlog Watch**
There are no open issues or pull requests requiring maintainer attention as of today. The backlog is completely clear. This may be positive (no pending problems) or concerning (no development momentum).

**Project Health Verdict:**  
NullClaw is in a low-activity period. The single closed issue indicates some community engagement, but the absence of releases, commits, or roadmap signals suggests stalled active development. The project is not currently showing signs of growth or regression—it is static.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-06-29.

---

## IronClaw Project Digest
**Date:** 2026-06-29
**Data Source:** GitHub (nearai/ironclaw)

### 1. Today's Overview
The IronClaw project is experiencing a period of very high development activity, with **42 pull requests** updated in the last 24 hours, of which **17** were merged or closed. This volume suggests a major push toward code completion and integration, likely preceding an imminent release. The core team is heavily focused on the "Reborn" architecture, specifically enhancing its approval systems, Slack integration, and WebUI stability. A significant amount of engineering effort is also being spent on building and refining a new in-process integration-test framework. While no new releases were published today, a release pull request (#5311) is in progress, signaling that these recent changes are being prepared for a public rollout.

### 2. Releases
**No new releases were published on 2026-06-29.** The most notable release-adjacent activity is the ongoing pull request **#5311 (`chore: release`)**. If this is merged, it will represent a significant update, bumping the main `ironclaw` crate from `0.24.0` to `0.29.1`. This release will include breaking API changes in both the `ironclaw_common` (0.5.0) and `ironclaw_skills` (0.4.0) crates. Upstream projects extending these crates should monitor this PR closely for migration requirements.

### 3. Project Progress
The following key features and fixes were advanced via merged/closed PRs today, indicating strong forward momentum in several critical areas.

- **Integration Testing (Core Infrastructure):** Multiple slices of the new "Reborn" integration-test framework were landed in quick succession. This includes an HTTP matcher and egress assertion API (#5387), and a decision to stop work on a fake `EmbeddingProvider` because the seam is not currently reachable (#5386).
- **WebUI & OAuth Fixes:** A significant fix for the WebUI was merged (#5388), resolving Google SSO `id_token` decoding issues for real `RS256` tokens and hardering the OAuth state creation for preview/custom domains. This directly addresses a security and reliability concern for hosted deployments.
- **Canary Pipeline:** A new "Reborn WebUI v2 live QA canary" lane was added to the CI system (#5354), which will run Playwright tests against live LLM integrations on a scheduled basis to catch regressions earlier.
- **Benchmark Validation:** A throwaway PR (#5393) was merged to re-validate the `/benchmark` harness against the current `main` branch, ensuring the continuous benchmarking pipeline remains functional.

### 4. Community Hot Topics
Discussion activity is concentrated on complex architectural issues and feature implementations.

- **Capability Policy & User Management (#5385, #5394):** The only new user-facing issue today is a detailed proposal for a "Capability Policy" system that defines `Owner`, `Admin`, and `Member` roles for the Reborn WebUI. The underlying need is for fine-grained user access control and configuration within a multi-user deployment. The issue author has also submitted a correlating PR (#5394) to address it, indicating a desire to see this feature implemented quickly.

- **Progressive Tool Disclosure (#5149):** This large PR continues to be updated. It aims to reduce latency and server timeouts by only disclosing relevant tool schemas to the LLM per-call, rather than all ~91 tools. The high volume of work on this (27 comments) points to a major system pain point regarding context window management and model response times.

### 5. Bugs & Stability
No new bugs were reported today. However, a longstanding, severe stability issue remains unaddressed.

- **Critical: Nightly E2E Failure (Issue #4108):** This issue, reporting a failing nightly end-to-end (E2E) test, has been open for over a month (since May 27). The most recent failure was reported just yesterday (June 28). This is a **critical** stability concern as it indicates a broken CI pipeline, which could mask other regressions. A fix PR should be a top priority for the maintainers.

### 6. Feature Requests & Roadmap Signals
The team is signaling a clear roadmap focus on platform stability, developer experience, and access control.

- **In-Process Integration Testing:** The massive PR **#5392** merges multiple slices of a new in-process test framework. This is a strong signal that the team is prioritizing the creation of fast, deterministic tests to improve code quality and reduce regressions for the Reborn backend.
- **Capability Policy (Issue #5385/PR #5394):** This is likely a high-priority feature for the next release. The detailed specification and immediate PR suggest it is a planned, upcoming feature for the Reborn WebUI aimed at enabling multi-tenant or enterprise use cases.
- **Error Recoverability:** The new PR **#5390** introduces a `FailureLane` classifier designed to enforce a "two-bucket" invariant for error types. This signals an upcoming effort to systematically categorize and improve error recovery within the Reborn engine.

### 7. User Feedback Summary
User feedback is primarily derived from developer-led improvements that address known pain points.

- **High Latency & Timeouts:** A major, identified user pain point is model request latency, driven by large context windows. The ongoing work on "Progressive Tool Disclosure" (#5149) is a direct response to this.
- **Authentication Reliability:** The quick turnaround on the Google SSO fix (#5388) suggests that authentication failures were a known user-impacting problem for self-hosted Reborn instances.
- **Configuration Complexity:** The detailed proposal for a user capability policy (#5385) implies that the current lack of fine-grained user management is a pain point for users deploying IronClaw to teams or organizations.

### 8. Backlog Watch
Several issues and PRs have been open for an extended period without maintainer resolution, creating risk for the project.

- **Critical: Nightly E2E Failure (Issue #4108):** Open since **May 27, 2026** (33 days). The project is effectively running without a reliable automated testing safety net. **Action Required: High priority.**
- **Dependency Bumps:**
    - **PR #4002 (bump actions group):** Open since **May 24, 2026** (35 days). Stale dependency updates can lead to security vulnerabilities and CI breaking changes.
    - **PR #4032 (bump wasm group):** Open since **May 25, 2026** (34 days). This lag could block WASM-related feature updates or lead to compatibility issues.
- **Barcelona Hackathon Fork (PR #4787):** Open since **June 12, 2026** (17 days). While marked `[NO MERGE]`, an upstream "maintainer" review might be valuable to see if any of the hackathon-focused stabilization patches could benefit the mainline codebase.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-06-29, structured based on the provided GitHub data.

---

# LobsterAI Project Digest — 2026-06-29

## 1. Today's Overview
Project activity remains steady as the team processes a wave of stale issues and PRs from early April. In the last 24 hours, 5 issues and 5 PRs were updated, with 4 issues closed and 3 PRs merged/closed, indicating a healthy maintenance cadence. The most significant activity involves the closure of long-standing bugs and feature implementations that were caught in merge conflicts or validation loops. However, a new, high-urgency open issue (#2216) concerning Memory Search functionality was filed yesterday, highlighting a potential regression in the 2026.6.1 release. No new releases were cut today, suggesting the team may be consolidating fixes before the next version.

## 2. Releases
- **New Releases:** None

## 3. Project Progress
Three pull requests were successfully merged or closed, moving several key features forward:
- **[PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440) [CLOSED]**: A UX improvement for the Cowork module that moves active skill badges from the cluttered bottom toolbar to a clean position above the input textarea. This improves visual hierarchy, especially when many skills are active.
- **[PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441) [CLOSED]**: A major feature addition that introduces an extensible preview pipeline for artifacts (HTML, React, Mermaid). This PR was a conflict-resolved and bug-fixed version of an older PR (#1011), overcoming 10 file conflicts and 5 runtime bugs to bring this long-awaited capability to the Cowork session.
- **[PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445) [CLOSED]**: A stability fix for the Skills system. It addresses two critical bugs: (1) Zip imports creating directories with random strings instead of the skill name, and (2) a lack of duplication validation across all import methods (zip, folder, GitHub), which previously caused duplicate skills to silently inject into the system prompt.

## 4. Community Hot Topics
The conversation this week is split between stale quality-of-life bugs and a critical new regression.
- **Most Active Issue:** **[#2216 [OPEN] Memory Search cannot switch to local embedding provider; index rebuild blocked by DB lock (EBUSY)](https://github.com/netease-youdao/LobsterAI/issues/2216)**
    - *Comments:* 1 | *Created:* 2026-06-28
    - *Analysis:* This is the highest-priority community concern. The user is locked into the OpenAI embedding provider for Memory Search, and when their API quota runs out (HTTP 429), the entire feature becomes unusable. The inability to switch to a local provider (plus a secondary DB lock bug during index rebuilding) makes this a blocker for self-hosted or offline users.
- **Other Active Issues (from Stale Batch):** Several closed issues from April 3rd received final updates:
    - **[#1443](https://github.com/netease-youdao/LobsterAI/issues/1443):** User request for **OpenClaw** compatibility (breaking change).
    - **[#1437](https://github.com/netease-youdao/LobsterAI/issues/1437):** Bug report on **scheduled task creation** failing silently when "no repeat" is selected.
    - **[#1439](https://github.com/netease-youdao/LobsterAI/issues/1439):** Bug report on **disabled skills still being callable** in conversation.
    - **[#1442](https://github.com/netease-youdao/LobsterAI/issues/1442):** UX confusion about **skill selection** in Agent conversations (skills disappear after first message).

## 5. Bugs & Stability
A new high-severity bug and several resolved items were reported.

**High Severity (New):**
- **[Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)**: **Memory Search Lock-In & Rebuild Failure**.
    - *Symptoms:* UI forces use of OpenAI provider; switching is blocked. Index rebuild fails with a SQLite `EBUSY` error (DB lock).
    - *Impact:* Feature is completely broken for users without OpenAI credits. Potential data integrity risk during rebuild.
    - *No fix PR exists yet.*

**Resolved (Stale, closed today):**
- **[Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439)**: **Skills not deactivating.** Fixed via general skill system improvements (likely related to PR #1445's duplicate handling).
- **[Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)**: **Skill UI disappearing in Agent chat.** Addressed by PR #1440 (UI relocation) and PR #1494 (session-based state).
- **[Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)**: **Scheduled task creation silent failure.** This likely correlates with the ongoing UI overhaul in open PR #1488.

## 6. Feature Requests & Roadmap Signals
- **OpenClaw Compatibility ([Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)):** A user reported breaking changes in OpenClaw v2026.3.24. While this issue is marked stale, it signals a dependency that may need urgent alignment for the next release.
- **Session-Isolated Skill State ([PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)):** This open PR proposes moving skill selection from a global state to a per-session state. Given the UX confusion in Issue #1442, this is highly likely to be merged in the next minor version.
- **Scheduled Task UI Overhaul ([PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)):** This open PR introduces a card grid layout, search filters, and history grouping. It is a large UX upgrade that addresses the bug in Issue #1437 and is a strong candidate for the next release.

## 7. User Feedback Summary
- **Pain Points:**
    - **Vendor Lock-in:** Users are frustrated by the inability to use local embedding providers for Memory Search, creating a hard dependency on OpenAI ([Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)).
    - **State Management Confusion:** The global nature of skill selection is confusing; users expect skills to be specific to a single Agent session, not persistent across all conversations ([Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442), [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)).
    - **Silent Failures:** The scheduled task creation page offers no error feedback when a form is invalid, leading to a poor UX ([Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)).
- **Satisfaction Signals:** The community appears engaged, with users providing detailed screenshots and logs for bug reports. The closure of the artifact preview PR (#1441) is a major positive signal for developers wanting rich outputs in Cowork.

## 8. Backlog Watch
- **[PR #1488 [OPEN] Scheduled Task UI Overhaul](https://github.com/netease-youdao/LobsterAI/pull/1488)**
    - *Status:* Open since April 5, 2026 (stale). This is a large, significant feature improvement dealing with UX bugs. It requires maintainer review and a decision on merging.
- **[PR #1494 [OPEN] Session-Based Skill State](https://github.com/netease-youdao/LobsterAI/pull/1494)**
    - *Status:* Open since April 6, 2026 (stale). Directly addresses a common user complaint (Issue #1442). Needs merging to resolve a known UX flaw.
- **[Issue #2216 [OPEN] Memory Search Lock-In](https://github.com/netease-youdao/LobsterAI/issues/2216)**
    - *Status:* New (June 28). While not "long-unanswered" yet, it represents a critical functional regression in the latest version. Immediate attention from the core team is recommended to prevent user churn among self-hosters.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date: 2026-06-29**

## 1. Today's Overview
Moltis shows a quiet activity day with no new releases and no merged PRs, but two open PRs targeting stability and performance bottlenecks are in motion. The single open bug report (#1137) remains active with maintainer engagement, indicating ongoing triage. Overall project health appears stable with focused maintenance work, though the lack of merged contributions today suggests a lull in forward momentum. The two open PRs address significant user-facing issues — oversized image handling and dependency misconfiguration — which are positive signals for upcoming improvements.

## 2. Releases
No new releases published in the last 24 hours. The latest release remains unavailable as none are recorded in this data window.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. Two open PRs are currently under review:

- **[PR #1139 — fix(gateway): don't force-enable matrix-sdk via the metrics feature](https://github.com/moltis-org/moltis/pull/1139)** — Fixes a build system bug where enabling the `metrics` feature incorrectly forces compilation of `matrix-sdk` even when the Matrix channel is disabled. This addresses an unnecessary dependency bloat issue.

- **[PR #1138 — fix(agents): downscale oversized images before they enter model context](https://github.com/moltis-org/moltis/pull/1138)** — Addresses a critical usability problem: full-resolution phone photos (e.g., 4032×3024) embedded as base64 data-URIs consume ~350K tokens, exceeding the entire context budget. This causes preemptive overflow rejection on every turn, effectively breaking image-based conversations.

## 4. Community Hot Topics
The most actively discussed item today is:

- **[Issue #1137 — [Bug]: Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137)** — Opened 2 days ago with 1 comment. This bug concerns Apple-specific container ID formatting exceeding platform name length constraints. The single comment suggests maintainers are investigating. The underlying need is for proper platform-specific string handling in container deployment configurations, likely affecting macOS/iOS users deploying Moltis in container environments.

Both open PRs have no comments yet, indicating initial submission without community discussion.

## 5. Bugs & Stability
**Critical Severity:**
- **[Issue #1137 — Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137)** — Active, unaddressed. Appears to be a platform-specific compatibility issue with Apple container naming. No fix PR yet. Likely affects containerized deployments on Apple Silicon or macOS environments.

**High Severity (fix PR exists):**
- **Oversized image token overflow** — Addressed by **[PR #1138](https://github.com/moltis-org/moltis/pull/1138)**. While not filed as a separate bug, this fix targets a systemic issue where high-resolution images break chat sessions entirely. This ranks as high severity because it renders image-based interactions non-functional.

**Medium Severity (fix PR exists):**
- **Matrix SDK forced dependency** — Addressed by **[PR #1139](https://github.com/moltis-org/moltis/pull/1139)**. This is a build-system bug that increases binary size and compile times for users who enable `metrics` but do not use Matrix channels.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed in the last 24 hours. However, the two fix PRs reveal implicit roadmap signals:

- **Image preprocessing pipeline** — PR #1138 indicates Moltis currently lacks image downscaling before context injection. This suggests a future feature where agents automatically resize/compress images before embedding them as tokens, potentially with configurable resolution limits.

- **Dependency scoping improvements** — PR #1139 shows ongoing work to make Moltis's feature flags more granular and prevent unnecessary dependency pulls. Expect further refinements to optional dependency management in the next release.

Given the current trajectory, the next minor release (v2.x.x) will likely include both image downscaling and refined feature dependency scoping.

## 7. User Feedback Summary
Based on the available data, user pain points are focused on:

- **Image handling failures** — Users embedding photos in chat sessions are completely blocked by token overflow. This is a top friction point for mobile photographers or document scanners using Moltis.

- **Container deployment issues on Apple platforms** — The Apple Container ID bug suggests users on macOS/iOS face configuration hurdles, potentially blocking deployment in Apple-centric environments.

- **Build complexity** — The unintended Matrix SDK inclusion increases compile times and binary sizes for users who don't need Matrix integration, indicating dissatisfaction with the current feature flag system.

No explicit positive feedback or satisfaction signals appear in today's data.

## 8. Backlog Watch
- **[Issue #1137 — Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137)** — Open for 2 days with no assignee and no fix PR. This is the only open bug and has not yet received maintainer assignment. Given the platform specificity, it may need escalation to macOS/container deployment specialists within the maintainer team.

No long-dormant issues or PRs were identified in this 24-hour window. Both open PRs are recent (submitted yesterday) and are likely under active review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw, generated from the GitHub data snapshot provided.

---

### CoPaw Project Digest — 2026-06-29

#### 1. Today's Overview
Project activity is **moderate** with a focus on feature development and test infrastructure. While no new releases were published, the community submitted several targeted feature requests and bug reports. The engineering team advanced three major unit-test PRs (W1, W2, W3 sprints) adapting to upstream **Agentscope 2.0**, indicating a significant refactoring effort is underway. The most critical open issue involves a cross-agent deadlock loop in Matrix communication, suggesting a need for runtime intervention mechanisms. Overall, the project is healthy, with ongoing work to stabilize the codebase and expand channel integrations.

#### 2. Releases
**No new releases** were created in the last 24 hours. The latest available version remains referenced as `v1.1.11.post2` and `v1.1.12.post2` in issue reports.

#### 3. Project Progress
**No Pull Requests were merged or closed** today. All six open PRs remain active.
- **Agentscope 2.0 Adaptation (Unit Testing):** Three large test-coverage sprints are under active review, covering the `crons` (#5423), `chats` (#5422), and `app-infra` (#5581) backend modules. These indicate a major push to stabilize the codebase before or alongside the Agentscope 2.0 integration.
- **Feature Implementation:** PR #5590 was opened today to support DingTalk `@mention` in proactive sends, a direct response to community feedback.
- **Bug Fix:** PR #5586 addresses a context compaction bug where the `max_input_length` configuration was not respecting the per-conversation model override from the UI.

#### 4. Community Hot Topics
The most active discussions revolve around improving user experience and closing feature gaps:

1.  **[Feature] Support DingTalk @mention (#5564):** With 2 comments, this issue has already triggered a fix PR (#5590) on the same day. The community desire is clear: multi-agent workflows in DingTalk groups are broken without the ability to `@mention` specific agents.
2.  **[Bug] Cross-Agent Infinite Loop in Matrix (#5204):** This closed issue (3 comments) describes a critical architectural flaw where two `QwenPaw` agents endlessly wake each other up via Matrix. The author distinguishes this from single-agent ReAct loops, highlighting a missing *inter-agent* circuit breaker.
3.  **[Feature] Multi-skill Input Box (#5589):** A quality-of-life request. Users want to chain multiple skills (e.g., `/skill1` then `/skill2`) without having to re-type the `/` trigger.
4.  **[Feature] Two-stage Memory Retrieval (#5588):** A user proposes integrating a dedicated Reranker model into `memory_search` to improve accuracy as memory stores grow, suggesting the current single-stage embedding approach has scaling limits.

#### 5. Bugs & Stability
One new bug was reported today. The severity is **Low**, but the existing critical issue remains unaddressed.

-   **Medium Severity [Critical Logic Bug]: Cross-Agent Infinite Loop (#5204) [CLOSED]:** Although closed, this is the most severe bug in the backlog. Two agents in a Matrix channel create an unsolvable feedback loop. A runtime breaker (e.g., max recursion depth or message deduplication) is likely needed. No linked fix PR exists.
-   **Low Severity [Installation]: Qwen-Image Tool install error (#5587):** A user reports a generic installation failure for the `Qwen-Image Tool`. The report lacks specific error logs. No immediate fix PR exists.
-   **Medium Severity [Configuration]: Context compaction ignores model override (#5586):** PR #5586 is a direct fix for a configuration bug. The severity is medium because it can cause silent failures (OOM or truncation) when a user switches to a smaller-context model mid-conversation.

#### 6. Feature Requests & Roadmap Signals
Strong signals for the next minor release include:

-   **DingTalk `@mention` (#5564):** Likely to be included in the next patch. PR #5590 is already open and directly addresses the request.
-   **Multi-skill Input (#5589):** A high-utility UX improvement. Likely a candidate for `v1.2.x` as it involves front-end logic changes.
-   **Two-stage Memory Reranker (#5588):** This is a deeper architectural feature. It will likely be considered for a future minor release (e.g., v1.3+), depending on the roadmap for memory subsystem improvements.
-   **Scroll Context Manager (#5321):** This is a major new feature (durable history + REPL recall) that is still under review. It signals a strategic shift away from pure compression toward retrieval-based context management.

#### 7. User Feedback Summary
- **Pain Point (Collaboration):** The inability to `@mention` agents in DingTalk is blocking production multi-agent workflows.
- **Pain Point (UX):** The `/` skill menu requires too many keystrokes for chaining skills—users expect a more fluid flow.
- **Satisfaction Driver (Testing):** The community is actively contributing to the backend test infrastructure (PRs #5422, #5423, #5581), indicating a desire for a more stable and reliable platform.
- **Dissatisfaction (Stability):** The cross-agent infinite loop (#5204) is a significant concern, as it exposes a fundamental gap in inter-agent communication control.

#### 8. Backlog Watch
The following items require maintainer attention:

-   **[OPEN, No Comments, Under Review] Scroll Context Manager (#5321):** Created 10 days ago, this is a large feature PR with no recent comments from reviewers. It needs a status update or assignee.
-   **[OPEN, High Activity] Cross-Agent Loop (#5204):** While closed, the underlying issue (no runtime breaker for inter-agent loops) is not resolved. The maintainers should either re-open it as a new feature request for a "loop breaker" or document a known limitation. New users may still hit this.
-   **[OPEN, No Fix] Qwen-Image Tool install error (#5587):** The reporter has not provided logs. A maintainer should request full error logs or the platform/OS information to triage this.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-29

## 1. Today's Overview

ZeroClaw continues at a **high activity level** with 50 issues and 50 PRs updated in the last 24 hours. The project is actively executing on **three concurrent release tracks**: the v0.8.3 runtime/WASM/platform release (trackers #8071, #7314, #8073), the v0.8.2 skills platform (tracker #7852 closed today), and the larger v0.9.0 auth/security/breaking-change milestone (tracker #7432). A major governance RFC (#6808) on work lanes and board automation is in active rollout. The WASM plugin system is undergoing a foundational shift from Extism to a direct wasmtime component-model host (PR #8368, RFC #6943). No new releases were cut today, but the PR pipeline is dense with feature work and test coverage improvements.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest version remains at the v0.8.x beta/RC track. Users should watch trackers #8071 (v0.8.3 runtime), #7314 (v0.8.3 WASM), and #7432 (v0.9.0 auth/security) for upcoming releases.

---

## 3. Project Progress

**Merged/closed PRs today:** 3 items (out of 50 updated PRs).

| PR | Title | Type | Significance |
|----|-------|------|-------------|
| [#8446](https://github.com/zeroclaw-labs/zeroclaw/pull/8446) | fix(telegram): stay silent for unauthorized senders in group chats | Bugfix | Critical UX fix — stops bots from spamming group chats with operator-approval prompts when unapproved users send messages. Prevents leakage of bind commands. |
| [#7878](https://github.com/zeroclaw-labs/zeroclaw/issues/7878) | [Feature]: add size/date/retention rotation to zeroclaw-log persistence | Feature (closed) | Log rotation for storage-constrained deployments. |
| [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852) | [Tracker]: v0.8.2 skills platform | Tracker (closed) | The v0.8.2 skills platform milestone is now complete and closed. |

**Notable PRs still open but active:**
- [#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) — wasmtime component-model host for plugins (supersedes #7928, #8144; high-risk, XL size)
- [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) — Native Inkbox channel (email/SMS/voice/iMessage) with Quickstart onboarding
- [#8416](https://github.com/zeroclaw-labs/zeroclaw/pull/8416) + [#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430) — SOP step contract substrate and step routing enforcement (stacked, high-risk)

**Test coverage initiative:** Multiple PRs from contributors Alix-007 and llagy009 are systematically adding unit tests to previously uncovered areas (MediaAttachment, JSON-RPC helpers, web-search routing, hardware board registry, session key sanitization, etc.). This is a healthy sign of engineering rigor.

---

## 4. Community Hot Topics

**Most discussed (by comment count):**

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 12 | **RFC: Work Lanes, Board Automation, Label Cleanup** — Governance RFC in rollout, likely the most consequential organizational change in flight. Rev. 5, accepted. |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | 4 (closed) | Prompt caching broken on Telegram but works on CLI — user reported real degraded behavior with LLM costs. |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) | 4 | **RFC: Deconflict Plugin System Goals** — The Extism→wasmtime pivot. High-risk, accepted, with architectural implications across FND-001. |
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | 4 | Cron/heartbeat `NO_REPLY` sentinel still sends literal text to channels — long-standing bug (since Feb) still in progress. |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | 4 | Per-agent custom environment variables — multi-tenancy for MCP/process lanes. Needs author action. |
| [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) | 3 (closed) | Heartbeat engine reads wrong directory (`data_dir` vs agent workspace) — fixed and closed. |

**Underlying needs analysis:**
- **Governance scaling:** The community (especially @Audacity88) is pushing hard on process automation and label cleanup (#6808) — the project is outgrowing manual triage.
- **Plugin architecture clarity:** The Extism→wasmtime debate (#6943, #8368) shows the community wants a clean, performant, well-documented plugin story. The current Extism integration has "mutually exclusive commitments" that need resolution.
- **Multi-tenant MCP isolation:** Issues #8226, #7733, and #8396 all point to a growing need for per-agent identity, secret scoping, and tool access control — critical for enterprise and multi-user deployments.

---

## 5. Bugs & Stability

**Bugs reported or active today (ranked by severity):**

| Severity | Issue | Title | Status |
|----------|-------|-------|--------|
| **P1** | [#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) | SQLite default memory backend + no embedding model → hybrid search silently degrades to keyword-only | Open, risk:high. Quickstart onboarding doesn't close the gap. |
| **P1** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows (Unix-only commands, path semantics, console encoding) | Open, accepted. CI doesn't catch this (Linux-only). |
| **P1** | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` parsed and shown in Config but never enforced at runtime — silent security no-op | Open, in-progress, risk:high. Critical for per-agent MCP scoping. |
| **P2** | [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | Cron/heartbeat `NO_REPLY` sentinel text still sent to Telegram | Open, in-progress (since Feb 27). Long-running. |
| **P2** | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | ZeroCode TUI keybindings misleading/unreachable on macOS | Open, accepted. UX issue. |
| **P2** | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt caching broken on Telegram (closed) | **Fixed/clarified** — closed today. |
| **P2** | [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) | Heartbeat engine reads wrong directory (closed) | **Fixed** — closed today. |

**Key stability notes:**
- The **Telegram unauthorized sender fix** ([#8446](https://github.com/zeroclaw-labs/zeroclaw/pull/8446)) was merged today — a meaningful stability/UX win for group chat deployments.
- **Windows parity remains a known gap** (#7462): 74 test failures on Windows 11, all CI runs on Linux. This is a platform completeness risk as the user base grows beyond Linux/macOS.
- The **MCP scoping silent no-op** (#7733) is a security concern: configuration that *looks* like it isolates tools per agent in fact does nothing at runtime.

---

## 6. Feature Requests & Roadmap Signals

**High-signal feature requests from today:**

| Issue | Feature | Predictability |
|-------|---------|----------------|
| [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Multi-message streaming for Telegram (per-paragraph, like Discord/Matrix) | **Likely v0.8.3** — mirrors existing Discord/Matrix behavior, relatively contained scope |
| [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) | Telegram Bot API 10.1 Rich Messages (tables, formatting) | **Likely v0.8.3** — UX improvement, filed by active contributor |
| [#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379) | WhatsApp passive group context (store unaddressed messages) | **Possible v0.8.3** — WhatsApp channel is newer; passive context is a common pattern |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | `.ignore` file mechanism for workspace file protection (RFC) | **Possible v0.9.0** — security/access control, matches the v0.9.0 security theme (#7432) |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire-protocol-first provider model (RFC) | **Likely v0.9.0+** — architectural RFC, long-term re-architecture |

**Roadmap signals:**
- **v0.8.3** is the immediate priority, split across three trackers: runtime/agents (#8071), WASM plugins (#7314), and observability/CI/docs (#8073). Expect a release within 2-4 weeks given the PR volume.
- **v0.9.0** (#7432) is the security/auth/breaking-change milestone with 111 open items. This will be a significant release with breaking changes.
- **SOP (Standard Operating Procedures)** is getting heavy investment: PRs #8416 and #8430 (step contract + routing) are stacked and high-risk, aiming for the "5/5" SOP capability milestone (#8288).

---

## 7. User Feedback Summary

**Real user pain points expressed in today's data:**

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Telegram group spam from unauthorized senders** | PR #8446 fix — bots were leaking bind commands and spamming group chats | **High** — directly impacts production deployments |
| **Prompt caching broken on Telegram** | Issue #6360 (closed) — users forced to re-process prompts, increasing costs | **Medium-high** — cost impact for Telegram users |
| **SQLite onboarding silently broken** | Issue #8386 — new users get degraded hybrid search without realizing | **High** — affects all new users who follow quickstart defaults |
| **Windows testing gap** | Issue #7462 — 74 failures unreported by CI | **Medium** — platform exclusion for Windows users |
| **ZeroCode TUI confusing on macOS** | Issue #7800 — keybindings misleading, actions unreachable | **Medium** — UX friction for macOS developers |
| **Per-agent isolation doesn't work** | Issue #7733 — MCP scoping field parsed but not enforced | **High** — security theater, users think they have isolation but don't |

**Positive signals:**
- Users are actively requesting rich message support (Telegram 10.1, Matrix streaming) — indicates growing production usage.
- Multiple contributors (Alix-007, llagy009, ConYel, Nillth) are systematically improving test coverage — signs of a healthy contributor ecosystem.

---

## 8. Backlog Watch

**Long-unanswered or stale items needing maintainer attention:**

| Issue | Age | Topic | Concern |
|-------|-----|-------|---------|
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | ~4 months (Feb 27) | NO_REPLY sentinel still sent to channels | Longest-running open bug in today's list. In progress but no fix PR visible. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~2 months (Apr 24) | 153 commits lost in bulk revert | Audit/recovery tracker — open with no recent PR activity. This is a significant codebase hygiene issue. |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | ~10 days (Jun 19) | Publish full-channel prebuilt assets | Needs maintainer review — affects release packaging. |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | ~6 days (Jun 23) | Per-agent env variables | **Needs author action** — RFC filed but stuck waiting on author response. |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 1 day (Jun 28) | `.ignore` file mechanism RFC | Filed today — needs maintainer review. Follows similar patterns to #8226 (file access control). |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 2 days (Jun 27) | Wire-protocol-first provider model RFC | Needs maintainer review. Large architectural RFC. |

**Watch items:**
- **MCP bundle enforcement** (#7733) has been accepted and is in progress — but it's a P1 security issue. Progress should be tracked.
- **The bulk-revert audit** (#6074) from March remains unresolved. 153 commits were lost; recovery is complex but the issue has only 2 comments. This represents risk of re-introducing old bugs.
- **Windows testing** (#7462) is P1 but has no visible fix PR. As the user base grows, Windows support will become a blocker for adoption.

---

*Data snapshot: 2026-06-29. All links point to zeroclaw-labs/zeroclaw on GitHub.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*