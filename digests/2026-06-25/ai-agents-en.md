# OpenClaw Ecosystem Digest 2026-06-25

> Issues: 346 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-25 00:28 UTC

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

Here is the OpenClaw project digest for **2026-06-25**.

---

## OpenClaw Project Digest — 2026-06-25

### 1. Today's Overview

OpenClaw remains in a high-velocity development cycle, with **346** issues and **500** PRs updated in the last 24 hours. While the project maintains a healthy release cadence (two new versions, including a beta), the sheer volume of open items—particularly **281** open issues—signals a significant maintenance gap. The community is highly engaged, driving 65 issue resolutions yesterday, but the project faces mounting technical debt, especially in channel parity (Feishu, Google Chat, Telegram) and session state management. The most active discussions center on critical regressions introduced in the latest v2026.6.9 and v2026.6.10 releases.

### 2. Releases

Two new releases were published:
- **v2026.6.10**: Introduces "Automatic fast mode for talks," allowing the agent to switch to a faster model for short conversational turns and return to normal mode for longer runs.
- **v2026.6.11-beta.1**: Brings "More capable channel control," including Slack relay mode, native Mattermost `/oc_queue`, and per-DM model overrides.

**⚠️ Migration Note:** Users upgrading from v2026.6.8 to v2026.6.9 (and thus to these releases) should be aware of a silent memory store relocation bug (Issue #95495) that forces a full re-embedding of up to 1,499 files with zero upgrade-time warning. This issue is resolved by PR #96152 in the current main branch.

### 3. Project Progress

**Merged/Closed Activity:**
- **52** PRs were merged or closed today.
- **65** issues were resolved.

**Key Fixes & Features:**
- **HTTP Ingress Diagnostics (PR #96152, #96227)**: A major gap was closed where `model.usage` diagnostic events (carrying token and cost data) were only emitted for channel turns and cron runs. HTTP ingress paths (`/v1/responses`, `/v1/chat/completions`) are now visible to all diagnostic sinks. This is a critical win for users relying on OTel or custom analytics.
- **Session Lock Fix (PR #90419)**: Resolved an issue where sub-agent termination via `dispose()` could leave orphaned session write locks, permanently breaking a session until gateway restart.
- **Provider Auth Failures (PR #96599)**: Users sending messages to a bot in a channel now receive a proper error message instead of a silent failure when the model provider rejects the request with HTTP 401.
- **UTF-16 Boundary Sanitization (Series of PRs by @llagy009)**: A systematic effort to fix emoji-truncation bugs across multiple channels (IRC, Synology Chat, Slack, MSTeams, QQbot), migrating raw `.slice()` operations to code-point-aware helpers. This prevents lone surrogate characters from breaking message rendering.

### 4. Community Hot Topics

**Most Active Discussions:**

1.  **[#75: Linux/Windows Clawdbot Apps](https://openclaw/openclaw/issues/75)** — 109 comments, 80 👍
    - **Analysis:** The highest-voted "help wanted" issue. The community is visibly frustrated with the lack of desktop parity. The core team appears to be prioritizing mobile/cloud, but power users on desktop are demanding native apps with feature parity (including Clawdbot integration). This is a strategic decision point for the project's product roadmap.

2.  **[#88838: SQLite Migration via Accessor Seam](https://openclaw/openclaw/issues/88838)** — 35 comments
    - **Analysis:** A deep technical discussion about how to safely migrate the session/transcript store from a raw file-backed system to a structured SQLite database. This is a critical infrastructure effort to improve reliability and prevent data loss. The complexity of the "Path 3" approach indicates this will likely span multiple releases.

3.  **[#29387: Silent Ignoring of Agent Bootstrap Files](https://openclaw/openclaw/issues/29387)** — 14 comments, 5 👍
    - **Analysis:** A frustrating UX bug where per-agent configuration files (SOUL.md, AGENTS.md) are silently ignored. Community members are relying on this for custom agent personalities. The lack of any feedback (no warning, no error) makes this particularly disruptive.

4.  **[#12602: Slack Block Kit Support](https://openclaw/openclaw/issues/12602)** — 13 comments
    - **Analysis:** Enterprise users are pushing for richer Slack integration. The current plain-text/markdown-only output limits usefulness for CRM summaries, database results, and action confirmations. This is a recurring theme in feature requests across channels.

### 5. Bugs & Stability

**Critical Regressions (P1, Impact: Session State/Message Loss):**

| Issue | Channel/Feature | Summary | Fix PR |
|---|---|---|---|
| [#95495](https://openclaw/openclaw/issues/95495) | Memory Store | v2026.6.9 silently relocates memory store, forcing full re-embed. | [#96152](https://openclaw/openclaw/pull/96152) (merged) |
| [#91804](https://openclaw/openclaw/issues/91804) | General | Internal reasoning/thinking leaked to users in responses (privacy + UX). | None yet |
| [#86996](https://openclaw/openclaw/issues/86996) | Active Memory + Codex | Long response latency, hook timeouts, startup aborts when using specific model backends. | None yet |
| [#85844](https://openclaw/openclaw/issues/85844) | Auto-Update | Running gateway can use stale hashed bundle imports post-update. | None yet |
| [#87109](https://openclaw/openclaw/issues/87109) | Gateway (macOS) | Heap grows to 1073MB+ at idle; cron jobs fail silently under memory pressure. | None yet |
| [#94228](https://openclaw/openclaw/issues/94228) | Anthropic Path | Replaying historical `thinking` bricks tool-use threads permanently. | None yet |

**High-Severity Bugs (P1, Impact: Auth/Security/Data Loss):**
- **[#32473](https://openclaw/openclaw/issues/32473):** Control UI requires HTTPS/localhost for device identity. VPS/Docker users are locked out.
- **[#22676](https://openclaw/openclaw/issues/22676):** Signal daemon `stop()` race condition on restart creates orphaned processes.
- **[#72031](https://openclaw/openclaw/issues/72031):** `image` tool fails for Bedrock when using IAM role (no explicit API key).
- **[#29387](https://openclaw/openclaw/issues/29387):** Per-agent bootstrap files silently ignored.
- **[#40001](https://openclaw/openclaw/issues/40001):** `write` tool has no append mode; cron sessions overwrite shared files.

**Stability Warning:** The number of "diamond lobster" (rating: 🦞) issues—indicating severe impact—is alarmingly high. Many remain unassigned or blocked on maintainer decisions.

### 6. Feature Requests & Roadmap Signals

**High-Impact User Requests:**

1.  **Filesystem Sandboxing ([#7722](https://openclaw/openclaw/issues/7722))**: Users want configurable `allowedPaths`/`denyPaths` for the `tools.fileAccess` module. Currently, no sandboxing exists for file write/read operations.

2.  **Built-in Auto-Updater ([#12855](https://openclaw/openclaw/issues/12855))**: Users want a scheduled, confirmation-prompt-based auto-update workflow with post-update notifications.

3.  **Capability-Based Permissions ([#12678](https://openclaw/openclaw/issues/12678))**: A call for an explicit permission model for skills/tools at the gateway level to prevent malicious or compromised skills from causing damage.

4.  **Backup/Restore Utility ([#13616](https://openclaw/openclaw/issues/13616))**: Request for standardized backup of config, cron jobs, and session history for disaster recovery.

**Prediction for Next Release:** The `Doctor` tool lint profiles (PR #96471) is likely to land soon, providing deeper/configurable diagnostic checks. The systematic UTF-16 fixes (PRs #96572-#96578) will probably be batched into a minor release.

### 7. User Feedback Summary

**Persistent Pain Points:**
- **Desktop Parity (Issue #75):** "We have apps for macOS, iOS, and Android... Linux and Windows are missing."
- **Silent Failures (Issues #29387, #87109, #86827):** Multiple users report that OpenClaw silently drops messages, ignores config, or fails to deliver errors to the user.
- **Upgrade Anxiety (Issue #95495):** One user reported a forced full re-embed of 1,499 files after a silent store relocation during an upgrade.
- **Channel Fragmentation (Issues #58514, #53486, #12602):** Users repeatedly report that rich features (Block Kit, cards, thread replies) work on one channel but not others.

**Satisfaction Signals:**
- **HTTP Ingress Telemetry (PR #96227):** Community members explicitly thanked the contributor for fixing a long-standing blind spot in usage tracking.
- **New Channel Features (v2026.6.11-beta):** Slack relay mode and per-DM overrides are positively received by power users.

### 8. Backlog Watch

**Long-Unanswered Critical Issues:**

| Issue | Age | Last Activity | Why It Matters |
|---|---|---|---|
| [#75](https://openclaw/openclaw/issues/75) — Linux/Windows Apps | 175 days | 2026-06-24 | Highest-voted "help wanted". No maintainer response. Strategic roadmap gap. |
| [#7722](https://openclaw/openclaw/issues/7722) — Filesystem Sandboxing | 142 days | 2026-06-24 | Requested sandboxing is absent. Security implications for production deployments. |
| [#12678](https://openclaw/openclaw/issues/12678) — Capability Permissions | 136 days | 2026-06-24 | No permission model for tools/skills. High risk for enterprise adoption. |
| [#88838](https://openclaw/openclaw/issues/88838) — SQLite Migration | 24 days | 2026-06-24 | Critical infrastructure work; stalled on maintainer review. |

**Stalled PRs Needing Maintainer Attention:**
- **[#67818](https://openclaw/openclaw/pull/67818) (WhatsApp QR Login):** Waiting on author for 70 days. A foundational piece for WhatsApp Web reliability.
- **[#66444](https://openclaw/openclaw/pull/66444) (Systemd Unit Migrations):** Waiting on author for 72 days. Affects Linux server deployments.
- **[#67077](https://openclaw/openclaw/pull/67077) (Auth Profiles Non-Fatal Saves):** Waiting on author for 71 days. Fixes a Windows-only crash on concurrent config reload.

**Note:** Many P1 issues carry the `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` labels, indicating a bottleneck in the core team's capacity for triage and decision-making.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

### Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date:** 2026-06-25

#### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is characterized by intense, high-velocity development, with leading projects integrating dozens of pull requests daily. A clear bifurcation is emerging between "reference" platforms (like OpenClaw, ZeroClaw) offering broad, extensible infrastructure, and more focused, application-specific agents (like Hermes Agent, CoPaw). **Security hardening** and **enterprise-grade features** (RBAC, SSO, audit trails) are the dominant themes, signaling a maturation from hobbyist projects towards production deployment. However, this rapid iteration is creating significant technical debt, with many projects suffering from regression bugs, silent failures, and mounting critical issues that threaten user trust.

#### 2. Activity Comparison

| Project | Open Issues | Open PRs | Release Today | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 281 | 248 | **2 (incl. beta)** | **Moderate** - High velocity, but elevated technical debt and critical regressions. |
| **ZeroClaw** | 50+ | 50 | No | **Strong** - High activity with significant architectural work (Auth, WASM, Supply Chain). |
| **Hermes Agent** | 38 | 37 | No | **Strong** - Focused on stability and performance optimization (lazy tool loading, gateway liveness). |
| **IronClaw** | 19 | 24 | No | **Moderate** - Aggressive bug fixing but critical new bugs surfaced (prompt safety false positive). |
| **NanoBot** | 10 | 27 | No | **Moderate** - Active but unstable due to regressions from rapid rich message rollout. |
| **CoPaw** | 14 | 44 | No | **Moderate** - High issue and PR volume, but significant frontend stability problems. |
| **PicoClaw** | 3 (batch closed) | 8 | No | **Strong (Hardening)** - Mostly quiet, handling a coordinated security disclosure. |
| **LobsterAI** | 1 | 2 | No | **Strong (Stabilizing)** - High merge rate, all critical bugs fixed, preparing for release. |
| **NanoClaw** | 1 | 18 | No | **Moderate** - Active development, but high open PR to merged ratio suggests review bottleneck. |
| **TinyClaw** | 0 | 0 | No | **Stable / Dormant** - Quiet period, single Windows compatibility fix merged. |
| **NullClaw** | N/A | N/A | No | **Unknown / Inactive** - No activity. |
| **Moltis** | N/A | N/A | No | **Unknown / Inactive** - No activity. |

#### 3. OpenClaw's Position

OpenClaw remains the **largest and most feature-rich reference platform**, with a massive community (346 issues, 500 PRs updated daily) and the broadest channel support (Slack, Telegram, Mattermost, Feishu, IRC, etc.). Its primary advantage is its **extreme extensibility** and high-level architecture as a "gateway" for all agent interactions. However, this comes at a cost: its health score is dragged down by a high volume of critical regressions (e.g., silent memory store relocation, session poisoning) and a significant maintenance backlog. Compared to **ZeroClaw**, which is also a general platform, OpenClaw is more "batteries-included" but less polished, while ZeroClaw appears more focused on secure, enterprise-ready architecture. Compared to focused agents like **Hermes Agent**, OpenClaw is less performant by default (due to tool overhead) but offers vastly more integration points.

#### 4. Shared Technical Focus Areas

The following needs are emerging across multiple projects, indicating critical gaps in the ecosystem:

- **Tool Permission/Access Control:** Strong demand for granular, capability-based permissions for tools and skills.
    - *Requests:* OpenClaw (#12678), IronClaw (#5196), ZeroClaw (#5982).
- **Security Hardening (MCP/Auth):** A major uptick in security advisories and fixes, focusing on MCP isolation and authorization bypasses.
    - *Issues/Fixes:* PicoClaw (10 advisories), NanoBot (#4434/#4435, MCP bypass), ZeroClaw (#7733, MCP scoping).
- **Desktop/Cross-Platform Parity:** Frustration with missing or broken desktop applications for Linux and Windows.
    - *Complaints:* OpenClaw (#75, Linux/Windows apps), TinyClaw (PR #281, Windows CLI fix).
- **Streaming/Rich Message Stability:** Rollout of rich messaging (e.g., Block Kit) is causing regressions, including silent failures and rendering issues.
    - *Regressions:* NanoBot (Telegram rich messages), CoPaw (provider crashes), Hermes (long message formatting).
- **Observability & Diagnostics:** Users demand better telemetry on token usage, costs, and internal agent failures.
    - *Work:* OpenClaw (HTTP Ingress Diagnostics PR #96227), IronClaw (#5182), Hermes (#4379, token overhead analysis).

#### 5. Differentiation Analysis

| Project | Target User | Core Differentiator | Technical Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Power Users / "Swiss Army Knife" | Universal gateway with massive channel/plugin support. | Monolithic gateway, optional modular extensions. |
| **ZeroClaw** | Enterprise / Security-Conscious Teams | Pluggable auth, RBAC, supply-chain signing, WASM plugins. | Modular, protocol-driven (A2A), strong RFC governance. |
| **Hermes Agent** | Developers / "Agent for Agents" | Focus on performance (lazy tool loading) and multi-agent orchestration (ACP). | Optimized for low token overhead and fast execution. |
| **NanoBot** | Hobbyists / Developers seeking rapid prototyping | Ultra-lightweight branding, rapid provider integrations (Kimi, OpenCode). | Python/Node.js stack, favoring speed over stability. |
| **CoPaw** | Desktop Users / Multilingual Markets | Strong support for Chinese enterprise channels (Feishu, DingTalk) and local models. | Desktop-first (Tauri), deep integration with AgentScope. |
| **LobsterAI** | End-Users / Task Automation | Stable, direct experience with a focus on scheduled tasks (CoWork). | Closed-loop merge cycle, high stability once deployed. |

#### 6. Community Momentum & Maturity

- **Tier 1 (Hyper-Active / High Risk):** **OpenClaw** and **ZeroClaw** are the most active, with hundreds of daily updates. They are the primary drivers of ecosystem infrastructure but face significant scaling and quality challenges.
- **Tier 2 (Stabilizing / Feature-Rich):** **Hermes Agent** and **IronClaw** show high activity but focus on fixing regressions and polishing core features. They are moving from "wild west" to "reliable."
- **Tier 3 (Rapid Feature Iteration):** **NanoBot**, **NanoClaw**, and **CoPaw** are iterating rapidly on new features (rich messages, new channels) but are currently unstable and carrying regressions. They are high-risk for production use.
- **Tier 4 (Maintenance / Hardening):** **PicoClaw** and **LobsterAI** are in a hardening phase, processing security disclosures and stabilizing for releases. **TinyClaw** is dormant.

#### 7. Trend Signals

1.  **Enterprise Pressure is Dominating the Roadmap:** The most voted issues and most active RFCs across all projects are about security, authentication, and access control (RBAC, SSO). This is the primary market signal—these projects are no longer just for individual enthusiasts.
2.  **The "Token Tax" is a Critical UX Problem:** Community-built analytics (Hermes #4379) confirming ~73% overhead is a major alarm. The ecosystem is actively seeking "lazy loading" solutions (OpenClaw, Hermes, IronClaw) to address this, which will be a key differentiator for performance.
3.  **Multi-Agent Orchestration (ACP/A2A) is the Next Frontier:** There is growing demand for agents to command other agents (Hermes #5257, ZeroClaw's work on A2A protocol). This is the logical next step for creating complex, autonomous workflows.
4.  **Community is Vocal about "Honest" Documentation:** Rapid branding mismatches (NanoBot's "ultra-lightweight") and silent failures (OpenClaw's silent store relocation) are eroding trust. **Transparency about resource usage, limitations, and security constraints will become a competitive advantage.**
5.  **Supply Chain Security Awareness is Growing:** PicoClaw’s batch of advisories and ZeroClaw’s RFC on SLSA provenance and hardware PGP keys show that users and contributors are increasingly concerned about the integrity of the AI agent supply chain.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-25

---

## 1. Today's Overview

NanoBot shows **high but healthy activity** with 18 issues updated in the past 24 hours (10 active) and 46 pull requests in motion (27 open). The project is processing roughly 19 merged/closed PRs per day, indicating a strong development cadence with active maintainer response. Two **security vulnerabilities** have been filed around MCP `enabledTools` bypasses (issues *4434* and *4435*), with corresponding fix PRs already open, demonstrating swift security incident handling. The community is converging on **rich message formatting improvements** across Telegram, DingTalk, and WebUI channels, while the *ultra-lightweight* branding controversy (issue *660*) continues to attract both comments and 👍 reactions. No new releases were cut today.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest official version remains **v0.2.2**, referenced in several current bug reports.

---

## 3. Project Progress — Merged/Closed PRs Today

A total of **19 PRs were merged or closed** today. Notable items:

- **#4464** (merged) — Added a dedicated `kimi_coding` provider for Kimi Coding Plan, supporting Anthropic Messages API endpoint. New provider registration.
- **#4475** (closed) — Added OpenCode Zen and OpenCode Go as new provider options for coding agents.
- **#4463** (closed) — Feature request for Kimi Coding Plan support, delivered in the same session as #4464.
- **#4465** (closed) — Fixed WebUI rendering of `<thinking/>` tags as visible text instead of reasoning blocks.
- **#4470** (closed) — Fixed Telegram display bugs: line breaks not respected and message flickering during generation.
- **#4499** (closed) — Fixed empty message bug on Telegram channel where responses arrived as blank bubbles.
- **#4442** (closed) — Fixed duplicate `tool_use` IDs in streamed responses that poisoned entire sessions.
- **#4388** (closed) — Fixed iOS Safari input field auto-zoom issue on WebUI.
- **#4487** (closed) — Fixed WebUI multi-file `apply_patch` edits to keep file edit records distinct by path.
- **#4498** (closed, invalid) — Sync/upstream attempt, closed as invalid.

**Emerging pattern**: The project is rapidly closing **regression bugs** introduced in v0.2.2's rich messaging features, while simultaneously landing **new provider integrations**.

---

## 4. Community Hot Topics

The following issues attracted the most community engagement (comments and reactions):

### 🔥 #660 — Project claims 'ultra-lightweight' but includes bloated Node.js dependency  
**URL**: https://github.com/HKUDS/nanobot/issues/660  
**Comments**: 11 | **👍**: 5  
**Age**: 4+ months (since Feb 2026)  
**Analysis**: Despite being an old issue, it remains the most-reacted item in the 24h window. The community is pushing back on the "ultra-lightweight" branding given the Docker image requires both Python and Node.js. This is a **branding and documentation gap** rather than a functional bug; however, the persistent attention suggests users value accurate claims about resource footprint.

### 🔄 #4413 — Telegram Bot API 10.1 rich messages  
**URL**: https://github.com/HKUDS/nanobot/issues/4413  
**Comments**: 2 | **Status**: Closed  
**Analysis**: This feature request closed quickly, but implementations are **reverberating through regressions** — multiple Telegram bugs (issues *4488*, *4470*, *4499*) were directly caused by the rich message feature, indicating rushed deployment.

### 🛡️ #4434 / #4435 — MCP `enabledTools` security bypasses  
**URLs**: https://github.com/HKUDS/nanobot/issues/4434 | https://github.com/HKUDS/nanobot/issues/4435  
**Comments**: 1 each  
**Analysis**: Two related security vulnerabilities filed by the same reporter (`YLChen-007`). The `enabledTools` deny-all policy and allowlist both bypass resource/prompt capability registration. **Critical severity** — fix PRs #4436 and #4452 are already open.

**Underlying need**: Users want **trustworthy and honest documentation** (issue #660), **stable rich messaging** (Telegram regressions), and **secure MCP isolation** (bypass vulnerabilities). The MCP security issues suggest growing enterprise/security-conscious adoption.

---

## 5. Bugs & Stability

### 🔴 Critical — MCP enabledTools security bypasses  
- **#4434** (open) — Deny-all policy bypass exposes MCP resources/prompts to the model.  
- **#4435** (open) — Allowlist bypass with same exposure.  
- **Fix PRs**: #4436 and #4452 already submitted.  
- **Severity**: **Critical**. Unauthenticated model access to MCP resources.

### 🔴 Critical — Session poisoning via duplicate tool_use IDs  
- **#4442** (closed, fixed) — Duplicate IDs in streamed responses cause "tool_use ids must be unique" 400 errors, halting all subsequent requests.  
- **Impact**: Complete session failure until manual reset.  
- **Fix**: Merged.

### 🟠 High — Telegram channel sends empty messages  
- **#4499** (closed, fixed) — Responses arrive as completely empty bubbles.  
- **Root cause**: Rich message formatting introduced in Bot API 10.1 support.  
- **Fix**: Merged. Confirmed working for basic cases.

### 🟠 High — WebUI <thinking/> tags leaking as visible text  
- **#4465** (closed, fixed) — Model control/template text displayed in chat UI.

### 🟠 High — Telegram Web "This message is not supported"  
- **#4488** (open) — Rich messages break Telegram Web client (works fine on Android).  
- **Fix PR**: #4505 (open) adds `rich_message` config option to disable rich formatting for Web clients.  
- **Status**: Not yet merged; config toggle being debated.

### 🟡 Medium — DingTalk richText and timeout bugs  
- **#4497** (open) — `ConnectTimeout` and unsupported richText message types.  
- **Fix PR**: #4501 (open) with HTTP timeout config and rich text preservation.

### 🟡 Medium — WebUI voice transcription fails with Xiaomi MiMo ASR  
- **#4492** (open) — WebM/Opus format not accepted; only WAV/MP3.  
- **Fix PR**: #4493 (open) adds frontend WebM→WAV conversion.

### 🟡 Medium — WebUI home page send doesn't navigate / stuck streaming  
- **#4500** (open) — Multiple UX bugs: no navigation from welcome screen, self-restart leaves stuck stream, stop button reports "No active task".

### 🟢 Low — iOS Safari input auto-zoom  
- **#4388** (closed, fixed) — UI deformation on iPhone.

**Pattern**: The **telegram rich messages feature** (issue #4413) has caused at least **3 regressions** (#4470, #4488, #4499). A single config toggle to opt out of rich formatting is under review across multiple PRs (#4505, #4495).

---

## 6. Feature Requests & Roadmap Signals

### Likely in next release (v0.2.3)

| Feature | Issue/PR | Status | Likelihood |
|---|---|---|---|
| PWA support + mobile swipe gestures | #4479 | Open | **High** — PR submitted, almost ready |
| Gateway webhook triggers | #4502 | Open | **High** — active PR, strong use case |
| Skills in subdirectories | #4504 | Open | **High** — clean, non-breaking enhancement |
| Mattermost channel support | #4459 | Open | **Medium** — new channel, significant surface |
| Kimi Coding Plan provider | #4464 ✅ | Merged | **Shipped** — already in main |
| OpenCode Zen/Go providers | #4475 ✅ | Merged | **Shipped** — already in main |
| Dream prompt override | #4491 | Open | **Medium** — workspace customization |
| MCP security fixes | #4436, #4452 | Open | **Critical** — must ship in next release |

### Possible longer-term roadmap signals

- **Auth for OpenAI-compatible API** (#4490) — currently unauthenticated on all interfaces.
- **HVTracker trust badge** (#4503) — community member proposing supply-chain transparency.
- **Read-only search_history tool** (#4439) — memory recall for long-term context.
- **CLI cross-channel sends** (#4496) — responding to Telegram/slack from CLI mode.
- **Custom provider thinking style config** (#4482) — enables VolcEngine/Doubao reasoning for custom providers.

**Prediction**: The **next minor release (v0.2.3) will prioritize**:
1. MCP security fixes (#4436, #4452)
2. Telegram rich message toggle (#4505 or variant)
3. PWA support (#4479)
4. Webhook triggers (#4502)
5. DingTalk format/timeout fixes (#4501)

---

## 7. User Feedback Summary

### Pain Points

- **"Ultra-lightweight" branding mismatch**: Issue #660 (5 👍, 11 comments) — users feel misled by Node.js requirement. Suggests either removing the claim or making Node optional.
- **Regression fatigue**: Multiple users (#4470, #4488, #4499) report *new* bugs after the v0.2.2 release. Telegram users on Web and X clients are particularly affected by the rich messages rollout.
- **MCP isolation concerns**: Security reporter `YLChen-007` identified that deny-all `enabledTools` doesn't actually block resource/prompt exposure. This erodes trust in the security model.
- **Missing auth**: The OpenAI-compatible API binds to all interfaces with no credential (#4490). Users deploying for multi-user access find this a blocker.
- **WebUI UX friction**: Stuck streaming, non-navigating home page, stop button failure (#4500) — freshly filed today, suggesting v0.2.2 introduced these issues.

### Satisfaction Signals

- **New providers welcomed**: Kimi Coding and OpenCode additions were closed quickly, showing maintainers are responsive to integration requests.
- **Transparency in bug fixes**: Multiple PRs explicitly reference GitHub issues in descriptions, showing good traceability.
- **Rapid fix velocity**: Issues filed on June 24 (#4497, #4499, #4500) have PRs dated June 24 — same-day or next-day fix attempts.

### Use Cases Emerging

1. **Enterprise deployment**: Security concerns (#4434, #4435) and auth requests (#4490) suggest enterprise users are evaluating NanoBot.
2. **Multi-channel workflows**: Cross-channel CLi sends (#4496) and webhooks (#4502) point to users wanting agent responses to flow across teams.
3. **Memory and persistence**: search_history tool (#4439) and Dream prompt overrides (#4491) suggest advanced users want long-term agent memory and prompt customization.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Comments | Why Unanswered |
|---|---|---|---|
| **#660** (ultra-lightweight branding) | **131 days** | 11 | Stale but still active. Project has not addressed the Node.js dependency question. |
| **#4434** (MCP security bypass) | **4 days** | 1 | Fix PR #4436 is open, but maintainer has not officially acknowledged the severity. |
| **#4490** (auth for OpenAI API) | **1 day** | 0 | New. No maintainer response yet. |
| **#4500** (WebUI stuck streaming) | **1 day** | 0 | Freshly reported regression. Needs triage. |
| **#4503** (HVTracker badge) | **1 day** | 0 | Maintainer has not responded to external contributor offering a trust registry integration. |

### PRs Awaiting Review

| PR | Age | Description | Risk |
|---|---|---|---|
| **#4436** (MCP security fix) | **4 days** | Gates resource/prompt registration — **critical security** | High — needed for next release |
| **#4452** (MCP enforcement) | **3 days** | Alternate approach to #4436 — possibly duplicate effort | Medium — may supersede #4436 |
| **#4505** (Telegram Web compat) | **1 day** | Adds config toggle for rich messages | High — directly fixes #4488 |
| **#4495** (Telegram X compat) | **1 day** | Overlaps with #4505 — similar fix, different approach | Medium — potential merge conflict |

**Recommendation**: Prioritize reviewing and merging **#4436/#4452** (security) and **#4505** (Telegram Web regression) before any new feature work. The backlog of Telegram-related fixes suggests the v0.2.2 rich message feature needs a config toggle as a hotfix.

---

## Health Assessment

| Metric | Status |
|---|---|
| Development velocity | ✅ **High** — ~19 merges/day |
| Issue response time | ✅ **Good** — most issues get same-day PRs |
| Regression rate | ⚠️ **Moderate** — new format features broke existing channels |
| Security posture | ⚠️ **Needs improvement** — MCP isolation has known gaps |
| Documentation accuracy | ⚠️ **Disputed** — "ultra-lightweight" branding challenged |
| Community engagement | ✅ **Active** — contributor PRs and issue reporters |
| Release cadence | ℹ️ **Unknown** — no new release today; last v0.2.2 |

**Verdict**: NanoBot is in a **productive but slightly unstable** phase — the project is shipping new features and providers quickly, but the rich messaging rollout has introduced regressions that are frustrating Telegram users. The highlighted maturity concern is the **unresolved branding debate** (#660) and the **MCP security bypass** (#4434/#4435). Addressing these before v0.2.3 will strengthen both user trust and security posture.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for **2026-06-25**.

---

## Hermes Agent Project Digest — 2026-06-25

### 1. Today's Overview
The project shows **very high activity**, with 50 Issues and 50 PRs updated in the last 24 hours. The ratio of open (38) to closed (12) issues suggests a healthy rate of triage, though the backlog remains substantial. No new releases were published today, but critical infrastructure work is ongoing through a large volume of pull requests. A significant portion of the activity focuses on **bug fixes for stability** (gateway liveness, Discord heartbeat stalling, desktop updates) and **initial groundwork for scale-to-zero hosting**. The community is most engaged with performance and agent orchestration features.

### 2. Releases
**None.** There are no new releases or release candidates published in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs)
**13 PRs** were merged or closed in the last 24 hours. Key changes advanced include:

- **Gateway Liveness & Reliability:** PRs #52151 and #52199 were closed, fixing a stale runtime-status false positive in gateway liveness checks by validating the PID command line against the active profile.
- **Clarify Timeout Security:** PR #51705 was merged, closing issue #43466. It now requires explicit user approval after a clarify timeout, preventing silent (and potentially risky) auto-approval.
- **Bug Fixes:** PR #52158 (closed) fixed markdown code fence mangling during streaming in the CLI.
- **Docker & Dependencies:** PR #51136 (closed) addressed lazy-installed dependencies being unavailable in the official Docker image.

### 4. Community Hot Topics
The most active discussions focus on **token performance** and **multi-agent orchestration**:

- **#6839 — Lazy Tool Schema Loading** (27 comments, 14 👍 ): A **major performance pain point**. Users are demanding schema injection optimization, as 50+ tools cost 3.5K-5K tokens per call. This is a high-impact feature request.
- **#4379 — Token Overhead Analysis** (15 comments): A user-built dashboard confirmed that **73% of every API call** (~13.9K tokens) is fixed overhead. This provides hard data supporting the need for #6839.
- **#5257 — Generalized ACP Client** (11 comments, 16 👍 ): Strong community desire for Hermes to orchestrate other coding agents like Claude Code and aider via ACP, turning Hermes into a universal orchestrator.
- **#3725 — Rocket Chat Support** (11 comments, 10 👍 ): A popular request for adding a new messaging gateway.

### 5. Bugs & Stability
Several high-severity bugs were reported or fixed today, with immediate fix PRs for the most critical:

| Issue | Severity | Description | Fix PR? |
| :--- | :--- | :--- | :--- |
| **#52197** | **P1** | Discord gateway stalls blocking heartbeats due to cache cleanup holding a lock. | ✅ **#52200** (Open) |
| **#19566** | **P1** | OpenAI-Codex credential pool can drop newly added credentials during rotation. | ❌ Open |
| **#52126** | **P2** | Telegram channel file attachments silently dropped. | ❌ Open |
| **#52137** | **P3** | Russian localization request (feature) | ❌ Open |
| **#51045** | **P3** | `openai/gpt-5.5` via Nous Portal returning Azure 500 errors since June 20. | ❌ Open |
| **#50663** | **P2** | z.ai rate limiting Hermes during "peak hours" (OpenCode/Claude work). | ❌ Open |

**Stability/Security Regression:** Merged PR #51705 fixes a security boundary bug where a delegate child could inherit `send_message` and `cronjob` capabilities despite `DELEGATE_BLOCKED_TOOLS`.

**Platform Specific:** PR #52204 is open to fix cron job execution on Windows, where a bare `bash` lookup was finding the WSL launcher instead of Git Bash.

### 6. Feature Requests & Roadmap Signals
The highest-signal feature requests signal a focus on **performance**, **orchestration**, and **extensibility**:

- **Performance (High Priority):** The demand for **lazy tool loading** (Issues #6839, #39691) is the strongest signal. It is the most commented-on issue and aligns with the hard data from #4379. Expect this to be a focus for the next minor release.
- **Orchestration (Medium Priority):** The **Generalized ACP client** (#5257) is a strong candidate for the next major feature, potentially enabling Hermes as a central agent commander.
- **Platform (Medium Priority):** Requests for **Rocket Chat** (#3725) and **Russian localization** (#52137) indicate a desire for wider platform support and accessibility.
- **Infrastructure (Early Stage):** PR #52207 ("scale-to-zero idle detection") is an architectural signal that the project is planning for hosted, cost-optimized deployments.

### 7. User Feedback Summary
- **Dissatisfaction (Performance & Cost):** A major pain point is token waste. Users are frustrated that ~73% of tokens are "fixed overhead," making Hermes expensive or slow, especially on local models. A user built their own dashboard to prove this.
- **Pain Point (Stability):** Several users report that official clients (OpenAI Codex CLI, Claude) work fine on their machines while Hermes fails (e.g., #13834, #50663), indicating configuration or provider integration fragility. The Discord heartbeat stall (#52197) is a severe regressions for self-hosters.
- **Use Case (Automation):** Users are actively trying to use Hermes for autonomous research via `delegate_task` but hitting HTTP 404 errors (#17945) and credential management bugs (#19566), blocking core workflows.

### 8. Backlog Watch
- **#13834 (P2, 12 comments):** `openai-codex` failure on a machine where official Codex CLI works. Marked as `needs-repro`, but has 12 comments and 3 👍 . This is a high-friction issue for users trying to switch to Hermes.
- **#31600 (P1, 3 comments):** A hardcoded `MINIMUM_CONTEXT_LENGTH` of 64K causes infinite tool loops on high-context models. This is a significant blocking bug that has gone 30 days without a maintainer resolution.
- **#8427 (Feat, Open since April 12):** Vertex AI provider support for Gemini. This PR is over two months old with no maintainer activity, blocking enterprise users with GCP investments.
- **#32660 (P2, 3 comments):** Tools array missing from API calls to custom Ollama endpoints. This breaks local model functionality and has been open for a month.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-25

## Today's Overview
A significant security patch cycle dominated PicoClaw activity over the past 24 hours: **13 issues were batch-closed**, including 10 security advisories published on 2026-06-09, all marked as stale and closed on 2026-06-24. **8 pull requests remain open**, with 5 of those updated in the last 24 hours — none were merged or closed. No new releases were published. The project is in a **consolidation and hardening phase**, processing a coordinated disclosure of vulnerabilities while continuing to accept feature and bug-fix PRs on the `openai_compat` provider, evolution engine, and Delta Chat gateway. Activity is moderate but concentrated on security remediation.

## Releases
None. No new releases were published today.

## Project Progress
No pull requests were merged or closed today. Eight PRs remain open, with several updated in the last 24 hours:

- **#3063** — [feat: add deltachat gateway](https://github.com/sipeed/picoclaw/pull/3063) (trufae) — New Delta Chat messaging gateway, pending review since 2026-06-08.
- **#3116** — [fix(pico): complete turn.done lifecycle signaling](https://github.com/sipeed/picoclaw/pull/3116) (afjcjsbx) — Completes Pico `turn.done` lifecycle, fixing three gaps in the initial implementation.
- **#3115** — [Fix inline data URL media extraction for generic tool output](https://github.com/sipeed/picoclaw/pull/3115) (jp39) — Fixes a session-history corruption bug where `data:image/...;base64,...` strings in plain text tool output were misidentified as real media attachments.
- **#3118** — [Add remote Pico WebSocket mode to picoclaw agent](https://github.com/sipeed/picoclaw/pull/3118) (jp39) — Adds optional remote mode (`--remote ws://...`) to the `picoclaw agent` command.
- **#3165** — [fix(openai_compat): recover Seed XML tool calls](https://github.com/sipeed/picoclaw/pull/3165) (Alix-007) — Recovers Volcengine Doubao Seed `<seed:tool_call>` XML blocks from OpenAI-compatible responses.
- **#3166** — [fix(openai_compat): use structured logger for native_search warning](https://github.com/sipeed/picoclaw/pull/3166) (Alix-007) — Fixes a build failure from a stray `log.Printf` call.
- **#3168** — [fix(model): handle error response read failures](https://github.com/sipeed/picoclaw/pull/3168) (Alix-007) — Returns body read errors when fetching model lists from a non-200 response.
- **#3169** — [fix(evolution): skip cold path for heartbeat turns](https://github.com/sipeed/picoclaw/pull/3169) (Alix-007) — Prevents draft-mode evolution from spending tokens on periodic heartbeat checks.

## Community Hot Topics
The most active discussion this period was:

- **#2404** — [[Feature] Add in config to send streaming HTTP request](https://github.com/sipeed/picoclaw/issues/2404) (OuSatoru) — **13 comments, 1 👍**. This closed enhancement request proposes adding a `"streaming": true` config flag to enable streaming HTTP requests to LLM backends, analogous to the OpenAI Python client. The high engagement and long lifespan (opened 2026-04-07) signal strong community desire for native streaming support.

All other closed issues have minimal discussion (2 comments each), characteristic of security advisory handling.

## Bugs & Stability
**High severity**: Ten security advisories were disclosed and closed on 2026-06-09, all updated to closed on 2026-06-24. These cover:

| Issue | Vulnerability | Impact |
|-------|--------------|--------|
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Feishu reply-context expansion bypasses `allow_from` for fetched parent messages | Authorization bypass |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) | Approval hook `cwd` symlink race allows `exec` in different directory | Directory traversal |
| [#3079](https://github.com/sipeed/picoclaw/issues/3079) | `exec` command whitelist allows jq environment disclosure | Information disclosure |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | `web_fetch` SSRF protection bypass via environment-configured HTTP proxy | SSRF |
| [#3076](https://github.com/sipeed/picoclaw/issues/3076) | WeCom group trigger policy bypass | Message routing bypass |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) | Untrusted `skills/` metadata auto-loaded into system prompt | Prompt injection |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | `web_fetch` SSRF guard bypass via ISATAP IPv6 literals | SSRF |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | Signed LINE webhook replay allows duplicate inbound event execution | Replay attack |
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | CSRF in Launcher first-run password setup | Local control-plane takeover |
| [#3071](https://github.com/sipeed/picoclaw/issues/3071) | Authenticated Pico WebSocket clients can trigger unauthorized config reload | Privilege escalation |
| [#3068](https://github.com/sipeed/picoclaw/issues/3068) | MQTT `allow_from` authorization bypass via spoofed `client_id` | Authorization bypass |

**Medium severity**:
- **#3167** — [咨询：PageAgent Vue MVVM 适配](https://github.com/sipeed/picoclaw/issues/3167) (Wavekip) — User reports that PageAgent struggles with Vue 2 + Element UI dynamic DOM (v-model, component state, watchers). No fix PRs open yet.

The three open bug-fix PRs (##3165, #3166, #3168) address compilation and response handling issues in the OpenAI compatibility layer and evolution engine, none related to the closed security advisories.

## Feature Requests & Roadmap Signals
- **Streaming HTTP** (##2404, closed): High-engagement request for streaming LLM responses. Likely to be prioritized given widespread community interest.
- **Delta Chat gateway** (PR #3063): A new messaging backend, pending since June 8. Indicates expanding platform support.
- **Remote Pico WebSocket mode** (PR #3118): Enables agents to connect to remote Pico WebSocket endpoints. Likely to land in the next release.
- **PageAgent Vue/MVVM support** (##3167): New inquiry about supporting reactive frontend frameworks, suggesting growing enterprise adoption.

**Prediction**: Streaming config and remote WebSocket mode are the most likely features for the next version. PageAgent Vue support is a candidate for a future enhancement.

## User Feedback Summary
- **Pain point**: The security disclosures highlight a widespread concern — multiple authorization bypasses in messaging channels (Feishu, WeCom, LINE, MQTT) and SSRF vulnerabilities in the `web_fetch` tool. Users running PicoClaw in multi-tenant or permissive environments should urgently review configurations.
- **Use case**: One user (Wavekip) is actively testing PageAgent on Vue 2 + Element UI enterprise backends, reporting that the agent cannot handle dynamic DOM from component state and watchers. This signals growing enterprise interest in GUI agents, but also reveals current limitations.
- **Satisfaction**: The community appears engaged, with contributors submitting multiple bug fixes and features simultaneously. The batch closure of security advisories without public outcry suggests responsible disclosure was handled well.

## Backlog Watch
- **PR #3063 (Delta Chat gateway)** — [Open since 2026-06-08](https://github.com/sipeed/picoclaw/pull/3063), stale for 16 days. No reviewer comments. Significant new integration that may need maintainer attention.
- **PR #3115 (Inline data URL media bug)** — [Open since 2026-06-12](https://github.com/sipeed/picoclaw/pull/3115), stale for 12 days. Fixes a session-corruption bug for generic tools — moderate impact but no review activity.
- **Issue #2404 (Streaming config)** — Closed, but with 13 comments and high community interest. If not already implemented, this feature request may resurface and should be tracked for the next roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-25

## Today's Overview
High development activity with **18 pull requests** updated in the last 24 hours, though only **2 merged/closed** (PR #2849 and #2799) and **0 new releases**. The single open issue (#2852) highlights a lingering user pain point around Telegram multi-bot support that is being actively addressed. The project shows strong momentum across multiple fronts: infrastructure hardening (container runner, socket security), new channel capabilities (Matrix E2EE, remote MCP servers), and test reliability fixes. The 9:1 open-to-merged PR ratio suggests significant development work in progress but not yet landed.

## Releases
No new releases today. The last release remains unspecified in the data window. Users should monitor PRs #2849 and #2799 which were the only items closed today; once these are included in a release they will bring Telegram multi-bot support and a security fix for CVE-2026-29611 respectively.

## Project Progress
**Merged/Closed PRs (2):**
- **PR #2849** [CLOSED] — `feat(telegram): support multiple bot instances via TELEGRAM_BOT_TOKEN_<SUFFIX>` by grantland. This directly addresses the community's multi-bot request. Adds ability to run multiple Telegram bots from a single NanoClaw instance by discovering environment variable suffixes.
- **PR #2799** [CLOSED] — `fix(security): confine send_file reads to /workspace (CVE-2026-29611)` by sturdy4days. A security patch fixing a path traversal vulnerability where a compromised agent could read files outside `/workspace` via the `send_file` function.

**Advanced Features (Open PRs):**
- **PR #2844** — Native Matrix E2EE adapter via `matrix-bot-sdk`, replacing the Beeper Chat SDK bridge with Rust-based crypto bindings for persistent encryption.
- **PR #2847** — URL-based (remote) MCP server support via HTTP/SSE, extending beyond local stdio processes.
- **PR #2843** — New `/learn` skill that distills reusable skills from any source (directory, URL, past conversation).
- **PR #2846** — Docker-in-Docker support for agent groups, mounting the Docker socket with proper group permissions.

## Community Hot Topics
**Most Active Issue:**
- **#2852** [OPEN] — `telegram multi-bot` by Kwisss (0 comments, 0 reactions). User reports that multi-bot support was previously available then removed; the "instance" feature doesn't work properly with Claude. This issue was filed only 24 hours ago but already has an associated merged PR (#2849) that directly resolves it.

**Most Active PRs:**
- **PR #2844** — `feat(matrix): native persistent E2EE adapter via matrix-bot-sdk` — Significant architectural change replacing a third-party bridge with native code (Rust crypto bindings). No comments or reactions yet but represents substantial infrastructure work.
- **PR #2850** — `fix(signal): set isMention and isGroup on inbound group messages` — Addresses a usability gap where Signal bots couldn't distinguish directed vs. ambient group traffic.
- **PR #2853** — Duplicate/successor of the now-merged #2849 for Telegram multi-bot support, suggesting additional refinement.

**Underlying Need:** Users are demanding robust multi-instance support for messaging channels (Telegram, Signal, Matrix) and easier integration with third-party services via MCP protocol extensions.

## Bugs & Stability
**High Severity:**
- **PR #2799** (already merged) — **CVE-2026-29611**: Path traversal in `send_file` allowing arbitrary file reads. Fix confirmed.
- **PR #2802** [OPEN] — `ncl socket hardening` — No request timeout or response buffer limit in socket transport, leaving promises unsettled forever or allowing unbounded memory growth.
- **PR #2800** [OPEN] — `folder path traversal + image tag restriction` — `ncl groups create --folder` bypasses folder validation allowing writes outside `GROUPS_DIR`.

**Medium Severity:**
- **PR #2851** [OPEN] — Abandoned poll loops in tests stealing subsequent tests' messages, causing intermittent test failures.
- **PR #2750** [OPEN] — Stale `outbound.db` journals after container SIGKILL, causing data loss on unclean shutdowns.
- **PR #2815** / **PR #2801** [OPEN] — `safeParseContent` mishandling primitive JSON (numbers, booleans) in the router, causing undefined behavior for non-object payloads.

**Low Severity:**
- **PR #2854** [OPEN] — macOS Rancher Desktop gateway CA mount issue causing self-signed certificate errors.
- **PR #2845** [OPEN] — Missing positional parameter forwarding in `q.ts` utility.

## Feature Requests & Roadmap Signals
**Likely Next-Release Features:**
1. **Telegram Multi-Bot** (#2849 merged) — Clear win for users wanting multiple Telegram bots per instance.
2. **Remote MCP Servers** (#2847) — Enables cloud-hosted LLM integrations beyond local processes.
3. **Path Traversal Fix** (#2799 merged) — Already merged; security patch for CVE.

**In Development (next version candidates):**
4. **Native Matrix E2EE** (#2844) — Major upgrade for Matrix channel reliability.
5. **Docker-in-Docker Support** (#2846) — Critical for agent groups needing Docker access.
6. **Generic Extension-Point Seams** (#2842) — Adds plugin hooks without breaking existing behavior.

**Speculative (longer horizon):**
- The `/learn` skill (#2843) could fundamentally change how users create custom skills — turning any source into a reproducible agent capability.
- URL-based MCP servers could enable a marketplace of remote AI services.

## User Feedback Summary
**Pain Points:**
- Telegram multi-bot support was removed ("we had it, and then it got removed") — user explicitly asking whether to look elsewhere (#2852).
- Matrix integration unreliable via Beeper Chat SDK bridge (#2844 rewrite evidence).
- Signal group messages not properly parsed for bot-specific mentions (#2850).
- DNS/SSL issues on macOS Rancher Desktop (#2854).

**Satisfaction Signals:**
- Multiple contributors submitting PRs (grantland, sturdy4days, foxsky, avri-schneider) suggesting active, engaged community.
- The `/learn` skill (#2843) was created by `robbyczgw-cla` indicating community-driven feature development.

**Use Cases Emerging:**
- Enterprise deployment with multi-channel bots (Telegram, Matrix, Signal simultaneously).
- Security-conscious deployments requiring strict file access controls.
- CI/CD pipelines needing DIND support for agent groups.

## Backlog Watch
**Aged Issues & PRs Requiring Maintainer Attention:**

- **PR #2750** [OPEN - June 12] — `fix: recover stale outbound.db journals` — 13 days without merge. Unclean shutdown fix for two reported issues (#2516, #2640). Addresses production reliability concern.
- **PR #2800** [OPEN - June 17] — `fix(security): validate folder + restrict --image-tag` — 8 days open. Second CWE-22 vulnerability fix still awaiting review.
- **PR #2801** [OPEN - June 17] — `fix(router): harden untrusted router input` — 8 days open. Being replaced by PR #2815 which has regression tests.
- **PR #2802** [OPEN - June 17] — `ncl socket hardening` — 8 days open. Server-side DoS vulnerability (no timeout, unbounded buffer).
- **PR #2815** [OPEN - June 18] — Router primitive JSON fix with tests — 7 days open. Better test coverage than #2801.
- **PR #2842** [OPEN - June 23] — Extension-point seams + MCP server name reservation — 2 days open. Architectural change that could impact future plugin development.

**Recommendation:** The three security-related PRs (#2800, #2801/#2815, #2802) have been open for over a week and should be prioritized for review given they address path traversal, input validation, and DoS vulnerabilities respectively.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-25

## Today's Overview
IronClaw remains in high-velocity development with **41 PRs updated** in the last 24 hours (24 open, 17 merged/closed) and **19 active issues**, reflecting sustained investment across the Reborn agent framework, WebUI v2, and infrastructure layers. Two blocking regressions were closed (#5139, web/research task wedge; #5187, settings localization), but a dangerous new prompt-safety false positive (#5169) surfaced that can kill benign requests on clean setups. The team is executing a deliberate decomposition of the monolith (`ironclaw_reborn_composition` god-crate being split into targeted crates) while simultaneously shipping user-facing fixes for tool permissions, multi-tenancy logging, and observability. No new releases were published today.

## Releases
*No new releases published in the last 24 hours.*

## Project Progress
**17 PRs merged/closed** today, highlighting several systemic fixes and feature completions:
- **CLOSED** [#5186](https://github.com/nearai/ironclaw/issues/5187) — Localized Reborn settings labels and adjusted automation filters (i18n, Chinese label shortening)
- **CLOSED** [#5193](https://github.com/nearai/ironclaw/pull/5193) — Fixed CI duplicate workflow key + missed subagent test ignore, restoring green `main`
- **CLOSED** [#5194](https://github.com/nearai/ironclaw/pull/5194) — Recovered SSE turn-event stream from rebase on reconnect (critical Slack+WebUI session fix)
- **Merged** [#5180](https://github.com/nearai/ironclaw/pull/5180) — Populated provider on runtime auth-required gates (WASM credential saving fix)
- **Merged** [#5160](https://github.com/nearai/ironclaw/pull/5160) — Delivered every tool's live activity across resumed SSE drains (WebUI v2 multi-tool view)

Key feature work remains open but advancing: context management (#5149, progressive tool disclosure to cut token overhead), memory M2 lift (#5163), and the large composition decomposition (#5137).

## Community Hot Topics
| Item | Type | Comments | 👍 | Summary |
|------|------|----------|----|---------|
| [#5169](https://github.com/nearai/ironclaw/issues/5169) | Bug | 2 | 0 | Bundled skill vocabulary ("Authorization", "Bearer") trips safety denylist on clean setup, kills benign requests with misleading "temporary system issue" |
| [#5197](https://github.com/nearai/ironclaw/issues/5197) | Bug | 0 | 0 | Disabled tool causes assistant to invoke unrelated tools instead of reporting unavailability |
| [#5196](https://github.com/nearai/ironclaw/issues/5196) | Bug | 0 | 0 | "Ask each time" tool permission fails with authorization error, triggers duplicate approval flow |
| [#5192](https://github.com/nearai/ironclaw/issues/5192) | Bug | 0 | 0 | Denying a tool approval can still lead to additional approval requests |

The **underlying need** across these hot issues is consistent tool permission lifecycle handling — users are experiencing erratic approval flows, duplicate dialogs, and tool availability misdirection, which erodes trust in the Reborn automation experience. Issue #5169 has the most concerning blast radius since it blocks all bundled skills on new installations.

## Bugs & Stability

### Critical (high blast radius, no workaround)
- **#5169** — Bundled skills trigger prompt-safety vocabulary denylist → benign request gets "temporary system issue" error on clean setup. No fix PR yet.
- **#5197** — Disabled tools cause the assistant to call unrelated tools instead of reporting unavailability. No fix PR.
- **#5196** — "Ask each time" tool approval → authorization error + duplicate approval flow. No fix PR.

### High (production-impacting, partial workaround)
- **#5190** — Invalid bearer token in WebUI allows entry but later actions silently hang. No fix PR.
- **#5192** — Denying a tool approval still triggers additional approval requests. No fix PR.
- **#5184** — Reborn startup fails when NEAR AI MCP product-auth lookup is unavailable. Fix PR [#5180](https://github.com/nearai/ironclaw/pull/5180) merged.
- **#5189** — Successful tool runs don't show activity details while in progress (failed runs do). No fix PR.

### Medium
- **#5191** — Internal skill orchestration/debug messages leaked into chat UI. No fix PR.
- **#5179** — Web UI logs unavailable for multi-tenancy users. Fix PR [#5199](https://github.com/nearai/ironclaw/pull/5199) open.
- **#4986** — Recurring automation permanently blocked waiting for tool approval. No fix PR.
- **#4108** — Nightly E2E still failing (persistent since May 27). No fix.

### Closed Today
- **#5139** — Web/research tasks hanging at init (0 LLM calls) — closed as fixed.
- **#5187** — Localization scope issues — closed as addressed by [#5186](https://github.com/nearai/ironclaw/pull/5186).

## Feature Requests & Roadmap Signals
Three notable design/feature PRs signal where IronClaw is heading next:

1. **[PR #5149](https://github.com/nearai/ironclaw/pull/5149)** — Progressive tool disclosure: cuts per-call prompt tokens from ~25.8k (all 91 tools) to only relevant ones. **Likely next release** — directly addresses production timeout issues.
2. **[PR #5068](https://github.com/nearai/ironclaw/pull/5068)** — Tool permissions + global auto-approve settings surface for WebUI. **Likely next release** — closes #4960, heavily requested for automation usability.
3. **[PR #5134](https://github.com/nearai/ironclaw/pull/5134)** — GitHub bug-fix workflow design docs (engineering design, subsystem boundaries, implementation plan). **Medium-term** — extends Reborn beyond chat into CI/debug workflows.
4. **[Issue #5182](https://github.com/nearai/ironclaw/issues/5182)** — Reborn hosted observability: meaningful logs + failure diagnostics from binary. **High priority signal** — operators need better tooling to diagnose production failures.

## User Feedback Summary
Real user pain points visible in this snapshot center on **tool permission management** and **production reliability**:

- **Permission confusion**: Users report that denying a tool approval leads to further approval requests (#5192), disabled tools redirect to unrelated calls (#5197), and "ask each time" creates authorization loops (#5196). This suggests the permission model needs clear state management and user-facing explanation.
- **Silent failures**: Invalid tokens let users into the UI but then hang (#5190); successful tool runs show no progress (#5189); recurring automations block indefinitely on tool approval (#4986). Users cannot easily tell if the system is working.
- **Observability gap**: Operators cannot extract meaningful diagnostics from the binary (#5182), multi-tenancy users can't see logs (#5179), and successful tool runs lack activity details (#5189). Debugging production issues requires manual log scraping.
- **False positives**: The prompt-safety denylist catching ordinary API vocabulary (#5169) is a serious usability and trust issue — users on clean setups see misleading errors for safe, intended functionality.

**Satisfaction signals**: The rapid closure of two blocking regressions today (#5139, #5187) and the ongoing memory architecture lift (#5163) suggest the team is responsive to systemic issues. The WebUI v2 redesign and permissions work (#5068, #5084) address core automation UX gaps.

## Backlog Watch
| Item | Age | Type | Priority | Status |
|------|-----|------|----------|--------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failure | 29 days | CI stability | Critical | No action since report; failing since May 27 |
| [#4986](https://github.com/nearai/ironclaw/issues/4986) — Recurring automation blocked on tool approval | 9 days | Bug (automation) | High | No fix PR; 1 comment |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) — Dependabot PR with 16 updates | 32 days | Dependencies | Medium | Open, 0 human comments; risk of dependency drift |
| [#4860](https://github.com/nearai/ironclaw/pull/4860) — Local service lifecycle backend | 11 days | Feature | Medium | Large open PR; no merge activity |
| [#5134](https://github.com/nearai/ironclaw/pull/5134) — GitHub bug workflow design docs | 3 days | Documentation | Medium | Open, no maintainer comment on docs |
| [#5068](https://github.com/nearai/ironclaw/pull/5068) — Tool permissions UI settings | 7 days | Feature | High | Large open PR; needs review/merge |

The **longest-standing item** (#4108, Nightly E2E failures since May 27) is concerning for CI reliability and should be prioritized to prevent regressions from going undetected. The **most impactful backlog item** is #4986 (automation stuck on tool approval), which directly blocks the recurring automation use case central to Reborn's value proposition.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the GitHub data for **LobsterAI (netease-youdao/LobsterAI)** as of **2026-06-25**, here is the project digest.

---

## LobsterAI Project Digest — 2026-06-25

### 1. Today's Overview
The project is in a **high-volume merge cycle**, with **41 PRs merged/closed** in the last 24 hours, indicating a significant batch of backlog clearing or a coordinated release stabilization push. Only **2 PRs remain open**, suggesting most fixes land quickly. Issue activity is low (1 open issue), but the merged PRs cover critical areas including OpenClaw tool loops, session freezing, and garbage collection. No new releases were tagged today, but the volume of merged work suggests a release candidate may be imminent.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs Today)
The 41 merged PRs represent a **broad stability and performance push** across the core architecture:

- **OpenClaw / Gateway Stability**: Multiple PRs fixed the OpenClaw gateway restart loop (#2043), prevented infinite aborted tool loops from burning tokens (#2049, #2051), and corrected snapshot spawning on Windows vs macOS/Linux (#2195, #2196).
- **CoWork / Assistant** : Deduplicated final summaries after history fallback (#2197), tightened grace periods for short assistant chunks (#2058), and fixed session freezing bugs (#2047).
- **Renderer / UI** : Fixed model selection UI (#2053), updated kits UI (#2088), and added Minimax M3 / Mimo v2.5 models (#2089, #2102).
- **Cross-Platform**: Replaced deprecated VBScript launcher with PowerShell (#2057).
- **General Fixes** : Filtered empty LLM streaming data (#2048), fixed a WeChat update/reinstall bug (#2086), and fixed gateway session patch timeouts (#2050).

### 4. Community Hot Topics
The sole open issue is **#1394** (created 2026-04-03, updated 2026-06-24, 1 comment):

- **Summary**: User reports that when a scheduled task is set to "no repeat", the task is **permanently deleted** after one execution. The user expects the task to remain (as "completed" or editable) for future reuse.
- **Analysis**: This is a **conflicting UX expectation** between "cleanup after one-shot" (developer intent) and "retain for editing/re-execution" (user desire). The issue is now 82 days old with no maintainer answer, suggesting either a design decision is pending or the fix is queued.
- **Link**: [Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394)

### 5. Bugs & Stability
| Severity | Issue / Symptom | Fix Status |
|----------|----------------|------------|
| **Critical** | Aborted tool loops burning tokens continuously during idle periods (#2049, #2051) | **Merged** — upstream loop breaker added |
| **High** | Session freezing (#2047) | **Merged** |
| **High** | Gateway restarts caused by GitHub Copilot token refresh (#2043) | **Merged** |
| **High** | Subagent cleanup blocking on hook failure (#2044) | **Merged** |
| **Medium** | Duplicate final summaries in CoWork after history fallback (#2197) | **Merged** |
| **Medium** | Windows VBScript launcher deprecation causing update failures (#2057) | **Merged** — replaced with PowerShell |
| **Low** | WeChat bugs during updates/reinstalls (#2086) | **Merged** |

**Verdict**: All reported stability issues from this window have associated merged fixes. **No new regressions reported today.**

### 6. Feature Requests & Roadmap Signals
- **Model Updates (Already Landed)**: Minimax M3 (#2089) and Mimo v2.5 (#2102) — these are live in the **open** branch, suggesting rapid model support.
- **Skill Routing (CoWork)**: PR #2078 emits selected-skill metadata instead of inlining prompts — a significant architecture improvement for plugin/agent extensibility.
- **Predicted Next Release**: Given the 41 merged PRs and no release tag today, expect a **vX.Y.Z patch or minor release** within the next 48–72 hours, likely focused on stability and gateway reliability.

### 7. User Feedback Summary
- **Pain Point**: "Idle token burn" — users reported continuous API token consumption even when idle (#2049, #2051). **Fixed today**.
- **Pain Point**: Sessions freezing / becoming unresponsive (#2047). **Fixed today**.
- **Satisfaction Risk**: The stale scheduled-task deletion issue (#1394) remains unresolved for 82 days, potentially frustrating users who rely on repeatable but non-repeating task templates.
- **Positive Signal**: Rapid merge velocity suggests the team is responding to user reports.

### 8. Backlog Watch
| Issue | Created | Last Update | Comments | Status |
|-------|---------|-------------|----------|--------|
| **#1394** Scheduled task permanent deletion | 2026-04-03 | 2026-06-24 | 1 | **No maintainer response** — oldest open issue; user expectation vs current behavior unresolved. |
| **#2195, #2196** OpenClaw spawn / snapshot | 2026-06-24 | 2026-06-24 | 0 | **Merged** — resolved quickly. |
| **#2043** Gateway restart (token refresh) | 2026-05-25 | 2026-06-24 | 0 | **Merged** — but took 30 days to close; possible tracking duration concern. |

**Maintainer Attention Advised**: Issue #1394 is the single longest-standing unresolved item and is a pure UX design question. If the design decision favors "keep after execution," a small patch would resolve user frustration. If "delete on completion" is intentional, clear documentation/user communication is needed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-06-25

## Today's Overview
TinyClaw’s activity remained very low over the past 24 hours with no new issues, no releases, and only a single pull request merged. The project shows a quiet phase, indicating that recent development work may have concluded a sprint cycle. The sole merged PR addresses cross‑platform compatibility for Windows, improving the CLI’s usability for non‑WSL users. No fresh bug reports or feature requests were filed, suggesting the codebase is stable in the short term. Overall, the project appears healthy but currently dormant in terms of community engagement.

## Releases
No new releases were published today.

## Project Progress
One pull request was closed/merged in the last 24 hours:

- **PR #281 – fix: Windows cross-platform support in CLI**  
  Merged on 2026-06-24 | Author: mperkins0155  
  [GitHub Link](https://github.com/TinyAGI/tinyagi/pull/281)  
  **Summary:** This PR fixes three Windows‑only bugs that prevented the `tinyagi` CLI from running natively on Windows (outside WSL):  
  1. **Doubled drive letter** – `new URL('.', import.meta.url).pathname` returns `/C:/Users/…` on Windows, which, when passed to `path.resolve`, causes Node to misinterpret the path.  
  2. **Module resolution failure** – Lead to `MODULE_NOT_FOUND` errors.  
  3. Two additional unspecified Windows path‑handling issues.  
  **Impact:** Enables native Windows users to run TinyClaw without requiring WSL, lowering the barrier for Windows‑based developers.

## Community Hot Topics
No issues or pull requests received comments or reactions in the last 24 hours. The only activity was PR #281, which was merged without discussion. Community engagement remains minimal during this period.

## Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. The merged PR #281 provides a stability fix for Windows users by correcting path resolution issues that previously prevented the CLI from running. No outstanding bug reports remain open.

## Feature Requests & Roadmap Signals
No feature requests were filed today. Given the completion of Windows cross‑platform support, the next logical steps could include:
- Enhanced Windows path robustness (e.g., handling of UNC paths, long paths, or drive letters with colons)
- Cross‑platform CI/CD testing improvements to prevent future platform‑specific regressions
- Documentation updates for Windows installation and usage

These are speculative but align with the trajectory of the recent fix.

## User Feedback Summary
No explicit user feedback was recorded in the last 24 hours. The only implicit feedback comes from the merging of PR #281, which addresses a real pain point for Windows users who previously could not run the tool natively. The fix likely improves satisfaction for that user segment, though no quantitative data is available.

## Backlog Watch
The issue and PR backlog is currently empty of unresolved items.  
- **Open Issues:** 0  
- **Open PRs:** 0  
- **Long‑standing unanswered items:** None  

Maintainers have cleared all outstanding items, leaving no items requiring attention. This is a healthy state but also means the project currently lacks community‑driven contributions or questions to guide future development.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for **CoPaw** (GitHub: `agentscope-ai/CoPaw`), based on the provided data snapshot from **2026-06-25**.

---

### 1. Today's Overview

CoPaw is experiencing a **very high activity day**, driven by a significant number of both community issues and development pull requests. With **23 issues** and **50 PRs** updated in the last 24 hours, the project is actively being worked on, albeit with a large backlog of open PRs (44) and issues (14). The focus appears split between the stable `v1.1.x` branch and the upcoming `v2.0.0` beta, with several cross-version bugs reported. While no new release was published today, the sheer volume of fixes in the pipeline suggests a patch release is imminent. Community sentiment points to stability and performance concerns, particularly around the frontend and memory usage.

---

### 2. Releases

**None.**

No new releases were published in the last 24 hours.

---

### 3. Project Progress

**6 Pull Requests were merged or closed today.** Key advancements include:

- **Security & Compatibility Fix:** `qbc2016` fixed a critical compatibility issue with GLM models by inlining `$ref`/`$defs` in tool schemas ([PR #5496](https://github.com/agentscope-ai/QwenPaw/pull/5496)).
- **Context & Caching Improvement:** Two PRs by `lecheng2018` addressed time-stamp staleness by moving the "Current date" from the system context to a dynamic per-message prefix ([PR #5498](https://github.com/agentscope-ai/QwenPaw/pull/5498), follow-up [#5499](https://github.com/agentscope-ai/QwenPaw/pull/5499)). This improves prompt cache stability.
- **Bug Fix:** `weidankong` merged a fix to update the detectors cache key to prevent outdated security patterns from being used ([PR #5500](https://github.com/agentscope-ai/QwenPaw/pull/5500)).
- **API Alignment:** `XiuShenAl` fixed a broken streaming protocol translation that was causing tool calls to render incorrectly in the frontend for the v2.0 runtime ([PR #5495](https://github.com/agentscope-ai/QwenPaw/pull/5495)).
- **UI/Frontend:** `yuanxs21` restored the token/context usage display ring and popover, which had broken after the AgentScope 2.0 migration ([PR #5493](https://github.com/agentscope-ai/QwenPaw/pull/5493)).

---

### 4. Community Hot Topics

The most active discussions highlight significant pain points with custom providers and channel routing.

- **[Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345): Custom Providers (e.g. OMLX) Don't Support Function Calling** (👍: 0, Comments: 8)
    - *Analysis:* This is the most active issue. A user verified that the OMLX provider implements the correct OpenAI API, but CoPaw fails to execute tool calls (function calling) with it, while it works with Ollama. This reveals a potential incompatibility or missing implementation in the custom provider adapter logic.
- **[Issue #5264](https://github.com/agentscope-ai/QwenPaw/issues/5264): Feishu Group Chat Replies Sent to Private Chat** (👍: 0, Comments: 5)
    - *Analysis:* A critical channel bug where the routing logic incorrectly sends group replies to a user's private chat if that user has an active private conversation. Log evidence is provided, demonstrating a core flaw in session-ownership management for the Feishu channel.
- **[Issue #5455](https://github.com/agentscope-ai/QwenPaw/issues/5455): Why not make the current time a per-user-message prefix?** (Comments: 3)
    - *Analysis:* This thoughtful question about prompt engineering and caching is driving two related PRs today. The community is actively discussing best practices for context management, showing a sophisticated user base concerned with performance and cost.

---

### 5. Bugs & Stability

Several high-severity bugs were reported, with immediate fixes available for some.

- **Critical (Crashes/Data Loss):**
    - **[Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401): Console crashes on large tool-use histories.** Frontend renders a white screen/blank page when opening sessions with many tool calls. A fix was merged today in [PR #5495](https://github.com/agentscope-ai/QwenPaw/pull/5495).
    - **[Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479): Console crashes on large session files (>500KB).** Similar root cause to #5401; the frontend cannot handle large payloads.
- **High (Core Feature Malfunction):**
    - **[Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345): Custom providers (like OMLX) don't support function calling.** This breaks a core feature for users who rely on alternative model providers.
    - **[Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379): `Internal Server Error` on startup.** A critical regression breaking the entire application for some users after a fresh install.
- **Medium (UX/Performance):**
    - **[Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480): Long message formatting is broken.** Markdown rendering fails on first load but is fixed by switching tabs. This is a frontend CSS rendering bug.
    - **[Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441): High memory usage (1.4GB) on idle.** A significant concern for desktop users, flagged without a current fix.
- **Resolved/In-Fix:**
    - The GLM model crash ([#5472](https://github.com/agentscope-ai/QwenPaw/issues/5472)) was fixed by [PR #5496](https://github.com/agentscope-ai/QwenPaw/pull/5496).
    - The shell command parsing issue ([#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373)) and the mobile agent switching issue ([#5476](https://github.com/agentscope-ai/QwenPaw/issues/5476)) were closed, implying fixes were applied.
    - The invalid YAML skill zip issue ([#5474](https://github.com/agentscope-ai/QwenPaw/issues/5474)) is open, but a fix for tool input JSON decoding ([PR #5486](https://github.com/agentscope-ai/QwenPaw/pull/5486)) may be related.

---

### 6. Feature Requests & Roadmap Signals

Community feature requests today point towards better ecosystem integration and developer tooling.

- **High Likelihood for Next Release:**
    - **[Issue #5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) / [PR #5492](https://github.com/agentscope-ai/QwenPaw/pull/5492): Pip-based plugin installation.** This is a major quality-of-life improvement for developers, bringing CoPaw in line with standard Python ecosystem practices. A first-time contributor has submitted a working PR.
    - **[Issue #5489](https://github.com/agentscope-ai/QwenPaw/issues/5489): Support OpenAI response format.** This suggests a move towards wider API compatibility, potentially for more seamless integration with other tools.
- **Moderate Likelihood:**
    - **[Issue #5427](https://github.com/agentscope-ai/QwenPaw/issues/5427): Support for Anthropic-compatible API endpoints (like Kimi K2).** High demand from users of cutting-edge models.
    - **[Issue #5231](https://github.com/agentscope-ai/QwenPaw/issues/5231): MCP tool name readability and file card default expansion.** A UX improvement request from a power user.

---

### 7. User Feedback Summary

User feedback this week is a **mix of high engagement and significant dissatisfaction** with stability and UX.

- **Pain Points:**
    - **Frontend Stability:** "加载不流畅...会话切换卡顿" (slow loading, laggy session switching) and crashes on "large sessions" are the most common complaints.
    - **Memory Bloat:** "刚启动...内存占用已经1.4g" (1.4GB memory at idle) is a major red flag for desktop users.
    - **Configuration Complexity:** Users struggle with custom providers (OMLX, Kimi) and channel setup (DingTalk sessions invisible, Feishu routing broken).
- **Use Cases:**
    - **Multi-channel communication:** Heavy reliance on enterprise messaging platforms like Feishu and DingTalk.
    - **Custom model usage:** A sophisticated "power user" segment is actively trying to hook up non-standard model providers.
- **Satisfaction:**
    - The "first-time contributor" PRs for pipeline improvements (scroll context manager, CLI cron updates) suggest a healthy and welcoming development community.
    - However, the volume of "bug" and "question" tags indicates that the current stable version is not meeting user expectations for reliability.

---

### 8. Backlog Watch

Several issues and PRs remain unresolved and could become roadblocks or sources of frustration.

- **[PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669): Tauri Auto Updater.** Open for over a month. This is a critical feature for a desktop application, yet it remains unmerged. Lack of an auto-update mechanism forces users to manually reinstall, which is a poor experience.
- **[Issue #5177](https://github.com/agentscope-ai/QwenPaw/issues/5177): DingTalk sessions invisible in Console.** While closed, this bug was open for over a week and prevented users from viewing their history. It highlights a fragility in the channel-to-database persistence layer.
- **[Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015): Windows desktop frontend not smooth.** Closed today, but the underlying issue of poor frontend performance on Windows has been a known problem for over two weeks. The fix for this is not explicit in today's merges.
- **Volume of Open PRs:** With **44 open PRs** and only **6 closed/merged** today, the review and merge capacity may be a bottleneck. PRs like the promising `scroll context manager` ([#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)) are still under review, representing a high-value feature that is locked in the pipeline.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-25

## Today's Overview

ZeroClaw is in an intense period of development, with 50 issues actively updated and 50 pull requests in motion over the past 24 hours. The project is undergoing significant security and architecture transformation, with major efforts focused on authentication (OIDC provider support), multi-tenant access control, supply-chain security, and WASM plugin infrastructure. The v0.8.3 milestone is being actively shaped, with particular attention to runtime stability, tool execution reliability, and the new SOP out-of-band approval plane. Despite no new releases today, the rate of RFC contributions and tracking-issue-driven work suggests a mature project with strong contributor governance.

## Releases

No new releases were published in the last 24 hours. The latest release remains v0.8.2 (based on the v0.8.3 milestone tracker in Issue #8071 which indicates active shaping of the next release).

## Project Progress

**4 pull requests were merged or closed in the last 24 hours:**

- **[PR #7747]** — `fix(runtime): wire mcp_bundles into agent loop — enforce per-agent MCP server scoping`  
  *Critical security fix:* The `mcp_bundles` config field was previously only schema-level; the runtime was giving every agent access to all MCP servers. This PR (authored by @Yyukan) finally wires the per-agent scoping into the agent loop, closing a silent security gap.  
  [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/7747)

- **[PR #8125]** — `[Feature]: Automatically set risk profile to yolo in quickstart`  
  Closed after discussion. The feature was deemed more appropriate as a quickstart UX adjustment rather than a permanent config change.

- **[PR #8075]** — `Keybinds vs. OS globals`  
  Closed; likely superseded by other zerocode keybinding work tracked in #7800.

- **[PR #8151]** — `[Bug]: deferred image attachment loses its re-loadable reference in cached history`  
  Bug fix merged for the Matrix channel, resolving a workflow-blocking issue (S1 severity) where deferred images were lost from history on subsequent turns.

## Community Hot Topics

### Highest Activity Issues

1. **[#5982 — Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** (9 comments)
   - Author: @metalmon | Risk: High | Priority: P2
   - *Analysis:* This feature request reflects a growing need for enterprise-grade multi-tenancy. Users want a single ZeroClaw instance to securely serve customers, operators, and developers with isolated workspaces, tool sets, and rate limits. The high engagement suggests this is a blocker for production deployments.

2. **[#7141 — OIDC Authentication Provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (6 comments)
   - Author: @singlerider | Risk: High | Priority: P1
   - *Analysis:* This tracking issue for v0.9.0's pluggable authentication system is a major architectural undertaking. The community is closely following this because it enables SSO integration—critical for enterprise adoption. Child issues like #8076 (local username/password AuthProvider) are already branching off.

3. **[#8177 — RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (5 comments)
   - Author: @ConYel | Risk: High | Priority: P2
   - *Analysis:* This RFC signals ZeroClaw's commitment to enterprise/regulated environments. Hardware-backed PGP keys, multi-party quorum, and SLSA provenance are advanced practices typically seen in security-conscious infrastructure projects. The community interest indicates concern about supply-chain attacks.

4. **[#6289 — Prompt-triggered install suggestions for missing skills and plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** (5 comments)
   - Author: @Audacity88 | Risk: High | Priority: P2
   - *Analysis:* This UX improvement addresses a fundamental discovery problem: users don't know what skills exist. The suggestion to auto-detect capability gaps and prompt installation would significantly lower the barrier to entry. Related to the growing skills/plugin ecosystem.

### Most Active PR

- **[#8304 — feat(sop): out-of-band approval plane with fail-closed timeout and PriorityBased gate fix](https://github.com/zeroclaw-labs/zeroclaw/pull/8304)** (just opened today)
   - Author: @Nillth | Size: Large | Risk: High
   - This PR implements the SOP (Standard Operating Procedure) approval plane—a fail-closed gate for tool approvals that supports CLI, web dashboard, and agent-mediated approvals. This is foundational for enterprise governance.

## Bugs & Stability

### Highest Severity Open Bugs

| Issue | Component | Severity | Priority | Summary |
|-------|-----------|----------|----------|---------|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio | S0-style (accumulating orphans) | P1 | Child processes leak per heartbeat tick; 48 orphans per day at default interval |
| [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | DelegateTool / Provider | S2 | P1 | OAuth sub-agents still receive coordinator's API key after #7266 fix |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | MCP bundles | S2 | P1 | Per-agent MCP scoping is parsed but never enforced (now fixed in PR #7747 ✅) |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | Channel security | S2 | P1 | No per-sender auth check on `/model --agent` scope override |

### Critical Fixes In Flight

- **MCP per-agent scoping** — Bug #7733 has an associated fix **PR #7747** which was merged today. This closes a year-old silent security gap.
- **Session TTL truncation** — Issue #8134 proposes implementing the stale `session_ttl_hours` config parameter. No fix PR yet, still needs maintainer review.
- **MCP dashboard visibility** — PR #8305 (just opened) fixes bug #8302 where MCP servers were invisible in the dashboard when the first agent has no MCP bundles configured.

## Feature Requests & Roadmap Signals

### Likely for Next Release (v0.8.3)

Based on the v0.8.3 tracker ([#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)) and active PRs:

1. **Per-agent environment variables** ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)) — `runtime_context` and `runtime_secrets` blocks for multi-tenancy across process lanes and MCP instances
2. **Plugin registry search and install by name** ([PR #8264](https://github.com/zeroclaw-labs/zeroclaw/pull/8264)) — CLI commands for discovering and installing plugins from registries
3. **Opt-in bounded SKILL.md reflection** ([PR #8261](https://github.com/zeroclaw-labs/zeroclaw/pull/8261)) — Autonomous skill creation with AI-synthesized documentation
4. **Live gateway pricing** ([PR #8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233)) — Filling unpriced model costs from live gateway APIs

### Roadmap Signals (v0.9.0+)

- **WASM component-model plugin host** ([PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)) + **lifecycle hooks** ([#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)) — Major plugin architecture overhaul
- **OpenRouter model fallbacks** ([#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)) — Request for automatic failover arrays
- **Telegram webhook mode** ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)) — Alternative to long-polling
- **DingTalk streaming** ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)) — Real-time message delivery for Eixin channel
- **Goal mode** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — First-class bounded autonomous session work

## User Feedback Summary

**Pain Points:**

1. **Onboarding friction:** Users report bad experiences with restrictive risk profiles during quickstart (Issue #8125). The team is considering auto-setting risk to "yolo" during onboarding.
   
2. **Session history bloat:** Teams operating through Slack/Telegram channels accumulate unbounded session history, consuming excessive tokens and slowing response times (#8134). The `session_ttl_hours` config exists but isn't implemented.

3. **Discovery gap:** Users don't know what skills/plugins are available, leading to "I didn't know ZeroClaw could do that" frustration (#6289). The community wants automatic capability suggestions.

4. **MacOS keybinding conflicts:** ZeroCode terminal keybinds clash with OS globals (ctrl+up) on MacOS (#7800). Currently under investigation with zerocode maintainers.

5. **Stale MCP orphan processes:** Running zeroClaw daemon with heartbeat enabled forces MCP processes to leak, consuming system resources (#5903). This is a particularly painful production issue.

**Satisfaction Signals:**

- The quick adoption of the A2A (Agent-to-Agent) protocol and per-sender authorization work indicates users are pushing ZeroClaw into multi-user, multi-tenant enterprise scenarios.
- High engagement with RFCs (5+ comments on supply-chain signing, deconflict plugin system, zerocode pre-submission gate) suggests a technically sophisticated user base actively shaping the roadmap.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Risk | Last Update | Reason for Concern |
|-------|-----|----------|------|-------------|-------------------|
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | 76 days | P2 | High | 2026-06-24 | Blocked status, no PR. Pre-hook skip gates for cron jobs—a simple but valuable feature that's been sitting |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | 67 days | P1 | High | 2026-06-24 | Critical memory leak (orphan MCP processes). No fix PR despite high severity |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | 54 days | P1 | High | 2026-06-24 | Auth middleware extraction—foundational security architecture work |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) | 30 days | P2 | High | 2026-06-24 | Plugin system deconfliction RFC—large architectural impact, needs maintainer sign-off |
| [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | 11 days | P1 | High | 2026-06-24 | DelegateTool API key bleed—security bug that survived a previous fix |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | 10 days | P1 | High | 2026-06-24 | ✅ Fixed by PR #7747 (merged today) |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | 5 days | P1 | High | 2026-06-24 | Authorization bypass in `/model --agent` scope—critical security gap |
| [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | 3 days | P2 | Medium | 2026-06-24 | Needs maintainer review; straightforward feature request |
| [#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) | 4 days | P2 | High | 2026-06-24 | zerocode pre-submission gate RFC—interesting but requires maintainer guidance |

**Notable:** Several P1 security bugs (especially #5903 and #7623) remain open without associated fix PRs despite their age and severity. The project's security posture would benefit from prioritization of these items.

---

*Generated from ZeroClaw GitHub data for 2026-06-25. All links point to zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*