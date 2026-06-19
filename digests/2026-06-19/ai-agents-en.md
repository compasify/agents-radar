# OpenClaw Ecosystem Digest 2026-06-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-19 00:36 UTC

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

Here is the project digest for **OpenClaw** on **2026-06-19**.

---

## OpenClaw Project Digest: 2026-06-19

### 1. Today's Overview

OpenClaw is in a **high-activity, reactive maintenance phase**, processing roughly 1,000 updated issues and PRs in the last 24 hours. The project shows no new releases, indicating the team is focused on stabilizing the platform following several recent releases (e.g., `2026.5.12`). The overwhelming sentiment from the community is frustration with **message delivery failures** across Telegram, Discord, and Slack, alongside **critical regressions** introduced in the last two updates. The maintainers are actively triaging these issues, with several "linked PR open" tags, but the high number of items awaiting maintainer or product decisions (e.g., #78308, #79902) suggests a backlog in strategic decision-making.

### 2. Releases

**None.** No new versions were published today. The community is largely operating on versions `2026.5.7` and `2026.5.12`, both of which are the subject of several regression reports.

### 3. Project Progress (Merged/Closed PRs)

In the last 24 hours, **36 PRs were merged or closed**, indicating a moderate pace of fixes being landed. Notable closures and progress include:

- **1Password Skill Fix (PR #81825):** Merged. Stops the bundled skill from forcing `tmux` for desktop app authentication, fixing the desktop app integration path.
- **Plugin SDK Compatibility (PR #83590):** Still open (waiting on author). Aims to restore legacy helper exports for `openclaw/plugin-sdk/compat`, crucial for non-migrated channel plugins.
- **Gateway Startup Race (PR #83489):** Ready for maintainer look. Fixes a race condition where one service-mode gateway could kill a healthy listener during startup.
- **OpenAI/Codex Spark (PR #88906):** Waiting on author. Allows `openai/gpt-5.3-codex-spark` via the Codex harness transport while keeping it suppressed for direct API routes.

### 4. Community Hot Topics

The community is highly engaged on a narrow set of high-severity issues, primarily revolving around **message reliability** and **session state corruption**.

- **#80319: QA tool-defaults suite conflates Codex-native tools...** [17 comments] - ([link](openclaw/openclaw Issue #80319))
    - **Analysis:** A deep, technical investigation into how the testing harness categorizes tools, potentially masking runtime failures. The author's analysis suggests the original bug report may have been overclaimed, but the discussion reveals confusion about OpenClaw's tool execution model.

- **#78308: Channel-mediated approval for MCP tool calls** [13 comments] - ([link](openclaw/openclaw Issue #78308))
    - **Analysis:** A highly requested **security feature**. Users want the same "approve/deny" prompt that exists for `shell-exec` to be available for MCP tools (like sending emails, writing to vaults). This is a critical guardrail for agent autonomy.

- **#54531: Force reply to originating channel (Telegram/Discord/WhatsApp)** [11 comments] - ([link](openclaw/openclaw Issue #54531))
    - **Analysis:** A **long-standing, high-severity P1** issue. The agent generates a response but fails to route it back to the user's chat app, forcing users to search for replies in the web UI. This is a fundamental UX failure for multi-channel users.

- **#80520: Telegram messages silently dropped** [11 comments, 3 👍] - ([link](openclaw/openclaw Issue #80520))
    - **Analysis:** A core stability bug for the Telegram channel. Messages are processed but replies are never sent. The fix PR (#85403) is in a "waiting on author" state, suggesting the fix is non-trivial.

### 5. Bugs & Stability

The project is experiencing significant stability challenges, with many reports fitting the "regression" category.

- **Critical (P1 - Message Loss/Dropped Replies):**
    - **#80520 (Telegram):** Messages silently dropped, no `sendMessage` logged. (*Fix PR #85403 open*)
    - **#83184 (Heartbeat):** `pendingFinalDelivery` field sticks, blocking future heartbeats. (*New bug, no fix PR yet*)
    - **#54531 (Cross-Channel):** Agent fails to reply to the originating channel. (*Long-standing P1*)
    - **#79308 (Telegram Replies):** Replies sent to DM instead of group chat (regression in 2026.5.7).
    - **#77561 (Slack):** Responses generated but never delivered to Slack.

- **Critical (P1 - Regressions/Performance):**
    - **#81934 (macOS):** Multiple failures (Gmail, Dropbox, PDF) after upgrading to 2026.5.12. (*Critical "everything broke" regression*).
    - **#82070 (CLI):** ~14-second cold-start lag on all CLI commands after 2026.5.12 update.
    - **#81484 (Discord):** Guild reply regression with malformed send payloads and outbound loops.

- **High Priority (P2 - Session State & Security):**
    - **#82662 (Cron Agent Turn):** Isolated cron jobs failing with "setup timed out before runner start" on the latest release.
    - **#80040 (Cascading Failure):** A complex bug report detailing how an invalidated OAuth token leads to empty replies, duplicate tool calls, and context loss.
    - **#78301 (Plugin Loader):** Silent failures on invalid legacy plugin contracts cost users hours of debugging.
    - **#94032 (LAN Access):** `exec` fails to reach a private-LAN host while the GUI terminal succeeds, pointing to an environment/network sandboxing issue on macOS.

### 6. Feature Requests & Roadmap Signals

The community is pushing for more **plugin/memory maturity** and **security controls**.

- **Likely for Next Release:**
    - **SQLite Transcript API (#79902, #79903, #79904):** A series of related features for a database-first runtime. This suggests a major internal refactor of session storage is nearing public consumption, offering faster and more reliable transcript access. (*Status: "needs-product-decision"*)
    - **Skill Setup Hooks (#80213):** Users want skills to be able to run custom install scripts (e.g., for database migrations). This is a clear roadmap item for the skill ecosystem.
- **Mid-Term Pipeline (Wait for Decision):**
    - **MCP Tool Approval (#78308):** The community strongly desires this security feature. It is gated by a "security review" and "product decision" label.
    - **Channel Bridging Hook (#81061):** A `before_route_inbound_message` hook for complex proxy/bridging use cases. This would enable advanced multi-platform setups.

### 7. User Feedback Summary

- **Frustration (High):** Users are frustrated with **inconsistent message delivery** ("reply appears in webchat but not Telegram/Discord"). This is the #1 pain point, impacting the reliability of the platform for daily use. The "stale" tag on issue #54531 suggests this core problem has been neglected for months.
- **Confusion (Medium):** There is confusion around the **tool execution model** (#80319), especially around the difference between Codex-native and OpenClaw dynamic tools. Users are unsure why some tool calls fail silently.
- **Desire for Control (Medium):** Users are asking for more granular **security controls** (MCP approval) and **customization** (custom provider onboarding flow, i18n for slash commands). They want to trust the agent with more powerful capabilities.
- **Dissatisfaction (Low, but vocal):** A subset of users are experiencing **total regressions** (#81934) and are dissatisfied with the stability of release `2026.5.12`.

### 8. Backlog Watch

The following high-impact items have been open for an extended period and lack visible forward motion:

- **#54531 (P1 - Force Channel Reply):** Stale for ~3 months. This is a blocking UX bug for multi-channel users. The lack of a fix is a significant project health concern.
- **#78308 (MCP Approval):** Open for ~1.5 months. A high-value security feature that is stalled on decision-making.
- **#79902, #79903, #79904 (SQLite API):** Open for ~1.5 months. These are blockers for the new database runtime to be useful for plugin developers.
- **#78041 (Cold Path Auth):** Open for ~1.5 months. A performance issue causing ~4-second delays on every cold dispatch for self-hosted users, impacting all providers.
- **#78061 (Slack Delivery):** Open for ~1.5 months. A core channel integration bug that makes Slack effectively unusable for some users.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date:** 2026-06-19

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **divergent maturity phase** in mid-2026. While established reference implementations like OpenClaw and IronClaw are in reactive maintenance mode, processing high volumes of regression reports and community frustration around message reliability, several newer projects (NanoBot, NullClaw, ZeroClaw) are in rapid feature-accumulation phases with high community contribution velocity. A common pattern across nearly all projects is the emergence of **multi-agent orchestration, context compression reliability, and channel integration stability** as critical pain points. Security posture is becoming a differentiator—TinyClaw and LobsterAI received critical vulnerability disclosures this week, while ZeroClaw and NanoClaw are actively hardening SSRF, path traversal, and authorization boundaries. The ecosystem remains fragmented across Python (NanoBot, CoPaw), Go (PicoClaw), Zig (NullClaw), and Rust/TypeScript stacks, with no clear convergence on a dominant runtime.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score | Dominant Phase |
|---------|-------------|-----------|---------------|--------------|----------------|
| **OpenClaw** | ~1,000 updated | 36 merged | None | 🔴 📉 Declining stability | Reactive maintenance / regression firefighting |
| **IronClaw** | 33 updated | 44 updated (17 merged) | None | 🟡 🔄 High-velocity churn | Feature delivery + bug triage |
| **ZeroClaw** | 28 updated | 50 updated (14 merged) | None (v0.8.1 pending) | 🟢 🔥 High development | Pre-release hardening + new features |
| **CoPaw** | 50 updated | 32 updated (17 merged) | **v1.1.12.post1** | 🟡 ⚠️ Stable with critical bugs | Patch release + multi-agent reliability |
| **NanoBot** | 5 updated | 25 updated (5 merged) | None | 🟢 ✅ Healthy iteration | Feature accumulation + community contributions |
| **NanoClaw** | 5 updated | 21 updated (6 merged) | None (v2.1.18 latest) | 🟢 ✅ Healthy iteration | Security hardening + stability |
| **Hermes Agent** | 50 updated | 50 updated (8 merged) | None | 🟡 🔄 Intense churn | Feature + bug pipeline |
| **PicoClaw** | 2 touched | 15 updated (7 merged) | None | 🟢 ✅ Steady maintenance | Dependency updates + targeted fixes |
| **NullClaw** | 4 active | 5 new (0 merged) | None | 🟢 ✅ Contributor momentum | Community-driven features |
| **LobsterAI** | 1 new (critical) | 15 updated (14 merged) | None | 🟡 🚨 Security alert | Release preparation + vulnerability response |
| **Moltis** | 1 updated | 0 | None | 🟢 💤 Low activity | Stable / maintainer focus elsewhere |
| **TinyClaw** | 3 new (all critical) | 0 | None | 🔴 🚨 Security crisis | Unaddressed vulnerability disclosure |
| **ZeptoClaw** | 0 | 0 | None | 🟢 💤 Inactive | No observable activity |

**Health Score Key:** 🟢 Healthy / 🟡 Watchlist / 🔴 Critical attention needed

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community & issue volume:** Processing ~1,000 issues daily—an order of magnitude more than any peer—indicating the widest deployment base and most diverse use cases.
- **Mature feature surface:** MCP tool approval (Issue #78308), channel bridging hooks, and SQLite transcript API signal sophisticated enterprise-grade requirements that newer projects haven't reached.
- **Plugin ecosystem:** Bundled skills (1Password fix PR #81825) and Plugin SDK compatibility work show investment in extensibility.

**Technical Approach Differences:**
- OpenClaw's **Codex-native vs. dynamic tool execution model** (Issue #80319) creates confusion absent in simpler projects like NullClaw or NanoBot that use a single, unified tool model.
- The **session state corruption** pattern (OAuth cascading failures Issue #80040) suggests a more complex state machine than peers—more powerful but harder to debug.

**Community Size Comparison:**
- OpenClaw's issue volume (1,000/day) dwarfs the next busiest projects (IronClaw: 33, ZeroClaw: 28, CoPaw: 50). This likely reflects 10-50x more active users, but also indicates **scaling strain**—backlog items like Issue #54531 (channel reply routing, stale 3 months) persist despite high activity.

**Key Weakness:** The **message delivery reliability crisis** (Telegram silent drops, Slack non-delivery, cross-channel routing failures) is OpenClaw's most acute pain point and is not mirrored at this severity in any peer project. This suggests a core transport layer issue specific to OpenClaw's architecture.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **3+ projects** this week:

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Context Compression Reliability** | CoPaw (#5218, #5171), NanoBot (#4307), Hermes (#48629) | Multi-agent freeze, total context loss, delivery message wipe—all projects report compression-related data loss |
| **Channel Message Delivery** | OpenClaw (#80520, #54531, #77561), ZeroClaw (#7787), PicoClaw (#3094), CoPaw (#5264) | Silent drops, wrong-channel routing, duplicate messages—fundamental UX failure across ecosystems |
| **Multi-Profile / Multi-Instance** | Hermes (#48519, #48649), ZeroClaw (#7941, #7907), NanoBot (#4390) | Session data loss between profiles, cron misrouting, state persistence ordering bugs |
| **Security Hardening** | ZeroClaw (#7947), TinyClaw (#282-284), LobsterAI (#2176), NanoClaw (#2807) | SSRF bypass, unauthenticated API access, arbitrary file reads, confused deputy attacks |
| **OAuth Token Management** | IronClaw (#4907, #5071), OpenClaw (#80040), Hermes (#48706) | Token expiry breaks workflows, successful auth doesn't resume runs, stale tokens cause cascading failures |
| **MCP Tool Integration** | OpenClaw (#78308), ZeroClaw (#7756), CoPaw (#4849), NanoClaw (#2793) | Missing approval gates, tools not delivered to models, reuse across agents |
| **Windows Portability** | ZeroClaw (#7462), Hermes (#40137), CoPaw (#5298) | Path handling, shell compatibility, certificate store differences |
| **Configurable Memory Controls** | NullClaw (PR #961), NanoBot (PR #4403), ZeroClaw (#7949) | Auto-recall toggle, recall limits, context byte budgets, embedding identity persistence |

**Notable:** Context compression reliability is the **most painful cross-project issue**—four projects have active bugs causing data loss or process freezes. This is a fundamental unsolved problem in the agent memory layer.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | CoPaw | NanoBot | NullClaw |
|-----------|----------|----------|----------|-------|---------|----------|
| **Primary Language** | TypeScript/Node | Rust/TypeScript | Rust | Python | Python | Zig |
| **Target User** | Power users, multi-channel | Enterprise, automation | Developers, self-hosters | Research/education | General tinkerers | Minimalists, edge |
| **Key Feature** | Mature plugin ecosystem | Projects + automations | Voice channels, real-time | Multi-agent research | Memory consolidation | Tiny footprint |
| **Architecture** | Monolithic with plugins | Microservices (Reborn) | Modular with channels | AgentScope-based | Plugin-based | Zig-native, small |
| **Channel Maturity** | Telegram, Discord, Slack, WhatsApp | Web, OAuth integrations | Slack, Discord, GitHub (coming) | Feishu, DingTalk, custom | Feishu, WebUI | WeChat, Anthropic |
| **Security Posture** | ⚠️ Reactive (many regressions) | 🟡 Proactive (bug bounty?) | 🟢 Active hardening | ⚠️ Critical bugs open | 🟢 Responsive | 🟢 Minimal attack surface |
| **Deployment Model** | Docker, self-hosted | Railway, self-hosted | Docker, binaries, Termux | pip, uv | pip, local | Binary, minimal |
| **Community Maturity** | 🟢 Mature, high-scale | 🟢 High velocity | 🟡 Growing fast | 🟡 Established | 🟢 Healthy | 🟡 Small but contributing |

**Key Differentiators:**
- **IronClaw** leads in **automation features** (fire-once triggers, concurrent turn execution, Projects CRUD)—no other project matches this workflow sophistication.
- **ZeroClaw** is the only project targeting **real-time voice** and **IoT/ESP32** deployment, positioning for ambient computing.
- **NullClaw** (Zig) is the **lightest-weight option**, generating interest for edge/IoT use cases (Issue #50: "Can this run on an ESP32?").
- **CoPaw** has the deepest **multi-agent research** focus, with sub-agent spawning and SharedMCPPool, but pays for it with critical context compression bugs.
- **TinyClaw** and **ZeptoClaw** are effectively dormant or in crisis—not viable for production use.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Risk/High Reward)
- **ZeroClaw** — Highest raw velocity (50 PRs/day). Pre-release energy, ambitious features (voice, GitHub channel), but carries 6+ P1 bugs. Best for early adopters who can tolerate instability.
- **IronClaw** — Sustained high throughput with features (Projects, concurrent execution) and infrastructure (CI overhaul). Most professional engineering discipline.
- **Hermes Agent** — Intense churn with 50 PRs and 50 issues/day. Multi-profile bugs suggest scaling pains from rapid adoption.

### Tier 2: Healthy Maturation
- **NanoBot** — Responsive maintainers, community-contributed PRs, all critical bugs have active fixes. Best contributor experience.
- **NanoClaw** — Security-conscious iteration with multiple replacement PRs showing maturing quality standards. v2 architecture is stabilizing.
- **CoPaw** — Regular patch releases, large integration test suite. But unresolved 54-day-old backup bug (#3821) and critical compression issues erode trust.

### Tier 3: Stabilizing / Maintenance
- **PicoClaw** — Routine dependency updates, targeted fixes. Low drama but low feature velocity.
- **NullClaw** — Small but high-quality contributor community. 5 PRs in a day from external authors is a strong signal for a niche project.

### Tier 4: Stagnant / At-Risk
- **OpenClaw** — Despite massive user base, the 3-month stale P1 (Issue #54531) and concentrated regression wave suggest **maintainer bandwidth shortage** relative to community size.
- **TinyClaw** — Zero maintainer response to 3 critical CVEs in 24 hours. **Project health crisis.**
- **ZeptoClaw** — Zero activity. Effectively abandoned.
- **Moltis** — Single minor bug, no development. Possibly between cycles.

---

## 7. Trend Signals

### 1. Multi-Agent is the Next Frontier—and the Biggest Pain Point
Every project with sub-agent capabilities (CoPaw, PicoClaw, Hermes, ZeroClaw) reports bugs in message routing, context sharing, and state persistence between agents. The **spawn/sub-agent pattern is becoming standard**, but the infrastructure for inter-agent communication (a2a protocol, message deduplication, approval gates) is immature. NullClaw's Issue #190 (subagent spawning) and ZeroClaw's Issue #7947 (confused deputy in pipelines) signal that **authorization boundaries between agents** will be a major 2026-2027 focus.

### 2. Voice and Real-Time Are the New Differentiator
ZeroClaw's voice satellite (PR #7943, #7944) and the real-time ASR transition in LobsterAI (PR #2160, #2177) indicate a shift beyond text-based chat. The ecosystem is moving toward **ambient voice interfaces** with physical hardware (ESP32) and approval buttons—a significant expansion of the "personal assistant" concept beyond messaging apps.

### 3. Context Compression is Unsolved
Across four projects, context compression causes **data loss, process freezes, and workflow-breaking behavior**. No project has a reliable solution. CoPaw's Headroom compression (PR #5244) and NanoBot's eager consolidation (PR #4402) are promising but unproven. This is the **most impactful open problem** in the ecosystem—a reliable, lossless compression strategy would benefit every project.

### 4. Security Posture is Becoming a Moat
Projects actively hardening (ZeroClaw, NanoClaw, IronClaw) are differentiating from those reacting to disclosures (TinyClaw, LobsterAI). The pattern of **critical CVEs going unaddressed for 24+ hours** (TinyClaw Issues #282-284) will erode trust for production deployments. Expect security audits and bug bounties to become standard within 6-12 months.

### 5. Windows Support Remains an Afterthought
Despite Windows being the dominant desktop OS, no project has first-class Windows support. ZeroClaw reports 74 test failures on Windows (#7462). Hermes' Windows issues (#40137, #48716) generate recurring requests for native integration. This is a **significant market gap**—the first project to deliver a seamless Windows experience (without WSL/Docker) will capture a large underserved user base.

### 6. The "Normie" Market is Underserved
NanoBot's Issue #4390 (hidden settings for non-technical users) and ZeroClaw's focus on Docker images with docs (Issue #7950) reflect growing demand for **consumer-friendly deployments**. The current ecosystem requires GitHub accounts, terminal familiarity, and config file editing—barriers for mainstream adoption. Projects that simplify onboarding (QR code login, one-click installers, GUI-first configuration) will expand the total addressable market.

---

**Bottom Line for Decision-Makers:**
- **For production reliability:** IronClaw (best engineering discipline) or NanoBot (responsive maintainers, all bugs have active fixes)
- **For cutting-edge features:** ZeroClaw (voice, real-time, IoT) — but expect instability
- **For multi-agent research:** CoPaw (deepest agent spawning) — but budget for compression bugs
- **For minimal footprint:** NullClaw (Zig, tiny binary) — but small ecosystem
- **Avoid for new deployments:** TinyClaw (security crisis), ZeptoClaw (abandoned), and consider whether OpenClaw's scale is worth the regression risk

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-19

## Today's Overview
NanoBot shows **high development velocity** today, with **25 PRs updated** in the last 24 hours (20 open, 5 merged/closed) and **5 issues updated** (4 active). The project is in an intense feature-development phase, with contributions concentrated on memory consolidation, workspace security, sandbox configuration, and WebUI usability improvements. No new releases were cut today, suggesting the team is accumulating changes for a future minor release. The high PR-to-issue ratio indicates maintainers are actively addressing community feedback.

## Releases
**No new releases today.** The last release remains unknown; the project appears to be in a pre-release cycle accumulating features and fixes.

## Project Progress
**5 PRs merged/closed today**, representing meaningful advances:

- **[PR #4403]** — feat(webui): make Firecrawl a keyless Web Data app (switches from local `npx firecrawl-mcp` to hosted MCP endpoint, removes API key requirement)
- **[PR #4400]** — ci: skip docs-only changes (CI optimization, reduces unnecessary pipeline runs)
- **[PR #4391]** — feat(feishu): add QR scan-to-create bot CLI login command (new Feishu channel onboarding via device-code flow)
- **[PR #1391]** — feat: add `consolidation_model` for cheaper memory consolidation (long-standing feature, allows routing consolidation to cheaper LLM)
- **[PR #4375]** — [bug] Git Command Execution Blocked by Workspace Security Policy (closed with fix merged via #4380)

## Community Hot Topics

**1. Memory Consolidation & Context Preservation (#4307)** — *3 comments*
- The most active open issue, reporting that post-turn consolidation wipes the agent's own delivery message, breaking user follow-up references when `context_window_tokens` is set low (40k). This is a critical UX bug for long-turn conversations.
- **Fix PR exists:** [#4373](https://github.com/HKUDS/nanobot/pull/4373) "fix(memory): preserve delivery context during consolidation"

**2. Project Workspace Read/Write Asymmetry (#4374)** — *2 comments*
- SOUL.md/USER.md files are read from the project directory but written to the default workspace, causing data fragmentation. This is a clear design bug in the project workspaces feature (#4007).
- **Fix PR exists:** [#4387](https://github.com/HKUDS/nanobot/pull/4387) "fix(context): fall back to default memory bootstrap"

**3. Multi-Instance Configuration for Non-Technical Users (#4390)** — *0 comments, but high-signal request*
- User requests hiding UI settings sections to create "normie-friendly" multi-instance deployments. Underlying need: making NanoBot accessible to less technical users in shared/enterprise environments.
- **Fix PR exists:** [#4399](https://github.com/HKUDS/nanobot/pull/4399) "feat(webui): add configurable hidden_settings_sections to strip UI noise"

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | #4307 — Post-turn consolidation wipes delivery context (breaks follow-up references) | Open, 3 comments | [#4373](https://github.com/HKUDS/nanobot/pull/4373) |
| **High** | #4374 — Project workspace SOUL.md/USER.md read/write asymmetry | Open, 2 comments | [#4387](https://github.com/HKUDS/nanobot/pull/4387) |
| **High** | #4408 — `Nanobot.run()` per-run hooks not concurrency-safe (shared `_extra_hooks` clobbered) | Open, 1 comment | [#4409](https://github.com/HKUDS/nanobot/pull/4409) (draft) |
| **Medium** | #4375 — Git commands blocked by workspace security guard in subdirectories | **Closed/Fixed** | [#4380](https://github.com/HKUDS/nanobot/pull/4380) |

**Key observation:** All three critical/high-severity bugs have active fix PRs, showing responsive maintainers. The concurrency bug (#4408) is particularly concerning for production deployments using multiple agents.

## Feature Requests & Roadmap Signals

**Likely candidates for next release:**
1. **Eager memory consolidation** ([PR #4402](https://github.com/HKUDS/nanobot/pull/4402)) — Archives completed conversation slices without trimming live session; closes long-standing #2604
2. **Configurable `bwrap` bind roots** ([PR #4404](https://github.com/HKUDS/nanobot/pull/4404)) — Allows exposing `~/.local/bin`, `~/.cargo/bin` in sandbox; closes #4107
3. **Serper.dev web search provider** ([PR #4406](https://github.com/HKUDS/nanobot/pull/4406)) — New Google Search API backend for web search tool
4. **Keyless Keenable search** ([PR #4405](https://github.com/HKUDS/nanobot/pull/4405)) — Free tier (1,000 req/hr) without API key
5. **WebUI hidden settings sections** ([PR #4399](https://github.com/HKUDS/nanobot/pull/4399)) — Enables "normie-friendly" UI simplification
6. **Optional feature enablement** ([PR #4396](https://github.com/HKUDS/nanobot/pull/4396)) — Plugin management for CLI/WebUI; moves Bedrock to optional

**Possible future signals:**
- Multi-instance orchestration (#4390) suggests demand for enterprise/deployment features
- WhatsApp LID→phone mapping (#4407) indicates growing channel maturity

## User Feedback Summary

**Pain points expressed:**
- Memory consolidation losing conversation context (#4307) — "breaks my workflow" sentiment
- Workspace asymmetry confusing project structure (#4374) — clean separation expected
- Settings UI overwhelming for non-technical users (#4390)
- Git operations failing in legitimate subdirectories (#4375) — wasteful troubleshooting

**Positive signals:**
- Keenable free tier without API key (#4405) — community contributing to reduce barriers
- Feishu QR code onboarding (#4391) — channel usability improvements appreciated
- Audio transcription improvements (#4353) — fixing real WhatsApp integration issues

**General satisfaction:** The volume of community-contributed PRs (waelantar, franciscomaestre, IlyaGusev, bllackhu) suggests an engaged developer base, though the three open memory/context bugs indicate ongoing friction in the core conversation loop.

## Backlog Watch

**No long-unanswered high-priority items detected.** The oldest updated issue among active items is #4307 from June 12 (7 days), which already has a fix PR. The project maintainers appear to be keeping pace with community input.

**Worth monitoring:**
- [#4307](https://github.com/HKUDS/nanobot/issues/4307) — delivery context bug (though actively addressed)
- [#4390](https://github.com/HKUDS/nanobot/issues/4390) — multi-instance normie UX (no engagement from maintainers yet, created June 17)
- PR [#4409](https://github.com/HKUDS/nanobot/pull/4409) — concurrency fix still in draft status (created June 18)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for June 19, 2026.

---

## Hermes Agent Project Digest — 2026-06-19

### 1. Today's Overview
Today reflects a period of intense, high-volume activity for the Hermes Agent project. With 50 issues and 50 PRs updated in the last 24 hours, the community and maintainers are heavily engaged in bug fixing, feature development, and stabilization. The "open/active" status on the majority of items (40 open issues, 42 open PRs) suggests a strong pipeline of in-progress work. The absence of a formal release suggests the project is consolidating a large batch of changes across core systems, multi-profile support, and platform integrations into a future stable version. Overall, project health is robust but currently in a "churn" phase focused on resolving regressions and addressing edge cases.

### 2. Releases
No new releases were made today. The latest non-release state appears to be post-v0.16.0 (v2026.6.5). Users are currently operating with a mix of published packages and bleeding-edge `main` branch fixes.

### 3. Project Progress
The following 8 PRs were closed or merged today, indicating tangible progress on several critical components:
- **[PR #48707]** *Closed — opened in error* (No functional change).
- **[PR #48709]** *feat(dashboard): add Observatory theme* (Dashboard customization).
- **[PR #48629]** *memory tool: unconditionally returns all entries...* (Identified a token-waste bug and confirmed it was already fixed in `main`).
- **[PR #44794]** *Duplicate bug: /compress deletes original messages* (Closed; related to upstream fix).
- **[PR #39704]** *Session Hygiene compression overwrites original messages* (Closed; related fix).
- **[PR #47202]** *Context compression silently loses unflushed messages* (Closed; related fix).
- **[PR #37369]** *FD leak: response_store.db* (Closed; P1 bug resolved).
- **[PR #32243]** *OAuth Pro/Max credential returns "out of extra usage"* (Closed; P1 auth bug resolved).

### 4. Community Hot Topics
The most active discussions reveal significant user engagement around configuration, stability, and feature gaps:

- **[Issue #40166]** *Desktop app: add font size / zoom control* (5 comments, 6 👍). A high-demand quality-of-life request for the Electron desktop app on macOS. Users are blocked by basic text scaling in a long-lived app.
    - Link: https://github.com/NousResearch/hermes-agent/issues/40166

- **[Issue #40297]** *Desktop: make workspace selectable per session* (2 comments, 5 👍). Users want a dynamic workspace selector, not just a launch-time default, to match multi-folder workflows.
    - Link: https://github.com/NousResearch/hermes-agent/issues/40297

- **[Issue #33314]** *Feature request: post-update check hooks for skill/profile drift* (4 comments). Power users are requesting post-update automation to manage skill/profile drift, indicating a need for better version control integration.
    - Link: https://github.com/NousResearch/hermes-agent/issues/33314

- **[Issue #38478]** *camofox browser screenshots are cropped* (5 comments). A long-standing browser provider bug (since June 3) remains unresolved, causing friction for users relying on the Camofox browser integration.
    - Link: https://github.com/NousResearch/hermes-agent/issues/38478

### 5. Bugs & Stability
Today’s reports highlight several critical and high-severity issues. Many have PRs open for them:

- **P1: [Issue #48706]** *fix(anthropic): use platform.claude.com for OAuth token exchange*. A live outage affecting all Anthropic OAuth users, as the old endpoint now returns 404. A fix PR (also #48706) is immediately open.
    - Link: https://github.com/NousResearch/hermes-agent/pull/48706

- **P1: [Issue #48700]** *fix(gateway): don't resolve node symlink into profile dir (multi-profile flap)*. A critical stability bug causing 5-minute restart loops in multi-profile systemd setups. A fix PR is open.
    - Link: https://github.com/NousResearch/hermes-agent/pull/48700

- **P1: [Issue #48519]** *Sub-profile gateway: sessions.json populated but state.db remains empty*. Complete session data loss for non-default profiles. This is a high-impact data-loss vulnerability.
    - Link: https://github.com/NousResearch/hermes-agent/issues/48519

- **P2: [Issue #47689]** *hermes doctor reports stale npm vulnerability and false-positive gemini API key*. A diagnostic tool bug that reduces user trust in health checks.
    - Link: https://github.com/NousResearch/hermes-agent/issues/48689

- **P2: [Issue #48649]** *Cron jobs not profile-aware: skills and storage use global paths*. An architectural bug where cron scheduling fails under multi-profile scenarios.
    - Link: https://github.com/NousResearch/hermes-agent/issues/48649

- **P2 (Confirmed Fixed): [Issue #48629]** *memory tool: unconditionally returns all entries*. A token-waste bug confirmed fixed in `main`, but still present in the v0.16.0 pip package.

**Performance Regression:** [Issue #45924] *hermes + gemma 4 12b* — A P3 open bug, but it blocks local-first users running popular small models on consumer hardware (MacBook). No fix PR identified.
    - Link: https://github.com/NousResearch/hermes-agent/issues/45924

### 6. Feature Requests & Roadmap Signals
Several new feature requests point toward the next release's likely focus:

- **[Issue #48716]** *Windows Native Integration Package* (1 comment, created today). A high-demand request for first-class Windows support without Docker/WSL2. This has been a long-standing barrier for Windows users, and the influx of requests signals market pressure.
    - Link: https://github.com/NousResearch/hermes-agent/issues/48716

- **[Issue #48667]** *Track PTB Bot API 10.1 delay and Telegram Rich Message compatibility shim*. Proactive feature tracking for upstream dependencies, signal of a robust engineering team.
    - Link: https://github.com/NousResearch/hermes-agent/issues/48667

- **[Issue #48011]** *Feature: first-class Mission / Project source-of-truth primitive*. A thoughtful request for a new primitive to handle strategic, multi-turn tasks—a likely roadmap candidate.
    - Link: https://github.com/NousResearch/hermes-agent/issues/48011

- **[Issue #43784]** *Shareable Profile Templates*. A strong community feature request for profile reusability and sharing.
    - Link: https://github.com/NousResearch/hermes-agent/issues/43784

**Prediction:** The next release is likely to include fixes for the Anthropic OAuth endpoint, multi-profile gateway/data persistence bugs, and potentially the new "Observatory" dashboard theme (#48709) and i18n support (#38846) PRs.

### 7. User Feedback Summary
- **Satisfaction:** Users are actively configuring and using Hermes in complex, multi-profile setups, signaling high engagement. The open-source community is contributing high-quality PRs (e.g., Windows `subprocess` fixes, i18n, Docker fixes).
- **Dissatisfaction/Pain Points:**
    - **Multi-Profile Reliability:** Several P1/P2 bugs (session data loss, cron misrouting, gateway restarts) directly impact users who rely on this core feature.
    - **Data Loss:** The `/compress` and session hygiene bugs, while fixed, damaged user trust regarding message persistence.
    - **Desktop Usability:** Lack of basic features like zoom control and dynamic workspace selection in a "long-lived" desktop app is a recurring complaint.
    - **Diagnostic Reliability:** The `hermes doctor` tool reporting false-positive errors (stale npm vuln, invalid Gemini key) frustrates users trying to troubleshoot real issues.

### 8. Backlog Watch
The following items have been open without significant maintainer resolution for an extended period, risking community frustration:

- **[Issue #38478]** *camofox browser screenshots are cropped* (Open since June 3). A P2 tool bug affecting a supported browser provider, with 5 comments and no fix PR in sight. This is the oldest open bug in the top 30.
    - Link: https://github.com/NousResearch/hermes-agent/issues/38478

- **[Issue #40137]** *Terminal wrapper injects Windows paths when running in WSL* (Open since June 5). A P2 bug that breaks core terminal tooling for Windows/WSL users, with only 1 comment from the author. This may be a less-trafficked but painful issue.
    - Link: https://github.com/NousResearch/hermes-agent/issues/40137

- **[Issue #33055]** *qwen3.7-max returns 401 via OpenCode Go* (Open since May 27). An incompatibility with a specific provider and model pair that has not been resolved in over three weeks.
    - Link: https://github.com/NousResearch/hermes-agent/issues/33055

- **[PR #26021]** *feat(web): add Gemini Google Search Grounding provider* (Open since May 15). A significant feature addition (web search provider) that has been in limbo for over a month. This likely requires careful review of security and rate-limiting implications.
    - Link: https://github.com/NousResearch/hermes-agent/pull/26021

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-19

## Today's Overview

The PicoClaw project shows moderate activity today with 15 PRs updated and 2 issues touched, placing it in a steady maintenance phase. A significant merged PR addresses a security hardening fix for SSRF protection via ISATAP literal detection (closing #3074), while an open PR targets a high-impact duplicate message bug in asynchronous sub-agent workflows. The project continues to receive routine dependency updates, with a notable bump of the Copilot SDK from v0.2.0 to v1.0.x. No new releases were published today. Overall, the project is healthy but lacks major feature velocity.

## Releases

No new releases on 2026-06-19.

## Project Progress

**Merged/Closed PRs (7 items):**

- [#3144](https://github.com/sipeed/picoclaw/pull/3144) — **build(deps): bump actions/checkout from 6 to 7** (dependabot, closed)
- [#3146](https://github.com/sipeed/picoclaw/pull/3146) — **build(deps): bump golang.org/x/term** (dependabot, closed)
- [#3147](https://github.com/sipeed/picoclaw/pull/3147) — **build(deps): bump Azure SDK azidentity** (dependabot, closed)
- [#3149](https://github.com/sipeed/picoclaw/pull/3149) — **build(deps): bump anthropic-sdk-go from 1.46.0 to 1.50.2** (dependabot, closed)
- [#3148](https://github.com/sipeed/picoclaw/pull/3148) — **build(deps): bump golang.org/x/sys** (dependabot, closed)
- [#3107](https://github.com/sipeed/picoclaw/pull/3107) — **build(deps): bump Copilot SDK from 0.2.0 to 1.0.1** (dependabot, closed)
- [#3141](https://github.com/sipeed/picoclaw/pull/3141) — **fix(web_search): add diagnostic logging for Brave empty results** (jincheng-xydt, closed) — Adds logging to detect silent failures when Brave API returns HTTP 200 with zero results, aiding diagnosis of the issue reported in #3125.

## Community Hot Topics

### Most Active Issues

1. **#3094 — [Bug] 异步子代理(spawn)任务完成时，ForUser字段被同时用于直接推送和主代理汇总，导致重复消息**  
   [Issue Link](https://github.com/sipeed/picoclaw/issues/3094)  
   *2 comments, open since June 10*  
   This is the most significant community-discussed bug. Users report receiving duplicate messages on Feishu/Telegram channels when using the `spawn` tool to dispatch asynchronous sub-agents. The duplication degrades user experience in multi-agent chat scenarios.

2. **#3125 — [BUG] web_search tool fails silently when using Brave API key from .security.yml**  
   [Issue Link](https://github.com/sipeed/picoclaw/issues/3125)  
   *0 comments, closed*  
   Although closed, this issue drove the solution in PR #3141. Users migrating API keys to the new `.security.yml` format experienced silent search failures.

### Analysis of Underlying Needs
The #3094 duplicate message bug reveals a growing community reliance on the spawn/sub-agent pattern for complex workflows, and users expect clean, non-redundant message delivery. The #3125 silent failure underscores a need for better error reporting when configuration migrations break core tools.

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | #3094 — Duplicate messages from asynchronous sub-agent (`spawn`) completion | Open, needs review | [#3142](https://github.com/sipeed/picoclaw/pull/3142) — open, clears `ForUser` in sub-turn ToolResult |
| **Medium** | #3125 — `web_search` silent failure with Brave API key from `.security.yml` | Closed | [#3141](https://github.com/sipeed/picoclaw/pull/3141) — merged, adds diagnostic logging |
| **Resolved** | #3074 — SSRF bypass via ISATAP IPv6 literals (web_fetch) | Closed | [#3143](https://github.com/sipeed/picoclaw/pull/3143) — merged, blocks private IPv4 embeds in ISATAP literals |

## Feature Requests & Roadmap Signals

No explicit feature requests surfaced in today's data. However, the Copilot SDK bump from v0.2.0 to v1.0.x (PR #3145, #3107) suggests the project is integrating GitHub Copilot capabilities more formally. This may appear in a future release as enhanced AI pairing or assistant features. The web frontend continues to receive modern tooling updates (Vite 8.0.x, ESLint 10.x, shadcn 4.x), indicating an active Web UI refresh is in progress.

## User Feedback Summary

- **Pain point — duplicate messages:** The #3094 bug report vividly describes a workflow disruption where users receive two identical messages when using spawned agents, one raw and one formatted. This directly impacts satisfaction for multi-agent users.
- **Pain point — silent configuration failures:** The #3125 report shows users adopting the new `.security.yml` architecture are encountering confusing "No results" errors without knowing the root cause (API key format incompatibility).
- **Use case — web search integration:** The diagnostic logging fix (#3141) indicates that Brave search is a commonly used tool; silent failures erode trust in the agent's capabilities.

## Backlog Watch

### Stale Issues/PRs Needing Maintainer Attention

- [#3094](https://github.com/sipeed/picoclaw/issues/3094) — **[Bug] Duplicate messages in spawn sub-agents**  
  *Open since June 10, 2 comments, no maintainer response yet.*  
  Fix PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) is open but unapproved. This is the highest-impact open issue that requires maintainer review.

- [#3105](https://github.com/sipeed/picoclaw/pull/3105) — **build(deps-dev): bump eslint from 10.2.1 to 10.4.1**  
  *Open since June 11, stale, no comments.*  
  A routine frontend dependency upgrade that may be blocked by test failures or merge conflicts.

- [#3104](https://github.com/sipeed/picoclaw/pull/3104) — **build(deps): bump shadcn from 4.7.0 to 4.11.0**  
  *Open since June 11, stale.*  
  A significant jump (4 minor versions) that could introduce breaking UI changes; requires manual review.

- [#3103](https://github.com/sipeed/picoclaw/pull/3103), [#3101](https://github.com/sipeed/picoclaw/pull/3101), [#3100](https://github.com/sipeed/picoclaw/pull/3100) — **Multiple stale frontend dependency PRs**  
  *All open since June 11, untouched.*  
  The accumulation of stale frontend dependency PRs suggests potential CI/tooling friction or lack of maintainer bandwidth for web UI updates.

### Recommendation
Prioritize review of PR #3142 (spawn duplicate fix) and PR #3145 (Copilot SDK v1.0.2 bump) as they address a known bug and a significant external dependency upgrade respectively. The stale frontend PRs should be resolved in batch to prevent accumulation of technical debt.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-19

## Today's Overview
NanoClaw shows **high development velocity** with 21 pull requests updated in the last 24 hours, of which 6 were merged or closed. The project is actively **tightening security and stability**, with a cluster of PRs addressing path traversal vulnerabilities, socket transport robustness, and database constraint bugs. Community engagement remains healthy with 5 issues updated, including a **new medium-severity security advisory** (Issue #2807) regarding unauthorized child agent creation. The maintainer team appears to be **deepening test coverage** across security fixes and feature PRs.

## Releases
No new releases were published today. The latest version remains **v2.1.18**, as referenced in PR #2808.

## Project Progress
**6 Pull Requests were merged/closed today:**

- **feat(agent-to-agent): per-message approval policies on connected agents** — PR #2793 (closed) adds an optional, directed approval gate for agent-to-agent communication, holding messages from A→B until B's owner approves. Fully backward-compatible (no policy = free flow).

- **fix(setup): allow env-selected agent provider** — PR #2811 (merged) enables configuration of the agent provider via environment variable.

- **refactor: mirror .claude skills + CLAUDE.md into .agents via symlinks** — PR #2810 (merged) creates `.agents/skills` → `../.claude/skills` and `AGENTS.md` → `CLAUDE.md` symlinks for Codex/agents-convention compatibility, keeping `.claude` as single source of truth.

- **refactor: remove dead resolveGroupIpcPath** — PR #2803 (merged) cleans up a function with no production callers, as IPC was removed in the v2 architecture.

- **docs: add Korean README** — PR #2806 (merged) adds a full Korean translation (`README_ko.md`) with cross-links from existing English, Japanese, and Chinese READMEs.

- **Two earlier PRs** also closed, including bugfixes for the CLI and container runner.

## Community Hot Topics

**Most Active Issues (by comments + reactions):**

1. **Issue #957** (CLOSED, 10 comments, 👍7) — Suggesting Podman as an alternative to Docker. Closed but represents enduring user desire for **container runtime flexibility**, especially among macOS/Linux users facing Docker Desktop licensing changes.

2. **Issue #29** (CLOSED, 7 comments, 👍4) — Add Signal as messaging channel. Closed but the pattern of new channel integrations (Telegram, Slack, Discord) remains a commonly requested feature category.

3. **Issue #2632** (OPEN, 2 comments) — Clarification on Telegram agent-swarm/multi-bot identity status in v2. A user planning a v1→v2 migration is blocked on understanding whether `add-telegram-swarm` still works. **This needs maintainer attention** as the ambiguity may stall real-world upgrades.

**Most Active Pull Requests (by comment count):**
PR #2809 (Apple Container runtime + remote OneCLI gateway) and PR #2795 (CLI-derived dashboard skill) are attracting significant discussion.

## Bugs & Stability

**Security Bugs (High Severity):**

- **Issue #2807** (OPEN) — **Non-owner members can create persistent child agents without approval** in owner-initialized groups. No fix PR exists yet, and no comments from maintainers. This is a privilege escalation vulnerability with real deployment impact. **No fix PR yet.**

- **PR #2818 / PR #2817** (OPEN) — `send_file` path traversal confinement. Two competing PRs (followed from #2799) restrict `send_file` reads from all of `/workspace` to `/workspace/agent`, blocking access to sibling mounts and symlink escape. Merge conflicts need resolution.

**Database / Integrity Bugs (Medium Severity):**

- **Issue #2784** (OPEN) — Container runner staleness check only watches `index.ts`, missing `ipc-mcp-stdio.ts` changes. Sessions may run stale code silently. **No fix PR yet.** This is a reliability concern for container-based deployments.

- **PR #2804** (OPEN) — `ncl messaging-groups create` always throws `NOT NULL constraint failed: messaging_groups.instance` — the CLI create path is completely dead. **Fix proposed**, under review.

- **PR #2808** (OPEN) — Two fixes: (1) `insertMessage` is not idempotent on duplicate IDs, causing uniqueness failures on re-insertion; (2) `agent_group_id` is missing on approval rows, making audit queries fail. **Fix proposed**, self-contained with regression tests.

**Runtime Robustness (Medium Severity):**

- **PR #2802 / PR #2813** (OPEN) — Socket transport has no request timeout and no response-size cap, enabling permanent hanging connections or unbounded memory growth. PR #2813 replaces #2802 with a byte-based cap (better for UTF-8). Under review.

- **PR #2812 / PR #2816** (OPEN) — Discord adapter truncates replies over 2000 characters instead of chunking. PR #2816 replaces #2812 with regression coverage. Under review.

- **PR #2801 / PR #2815** (OPEN) — `safeParseContent` returns non-object JSON parse results, causing `undefined` values in caller code. PR #2815 replaces #2801 with regression test. Under review.

## Feature Requests & Roadmap Signals

**Container / Deployment Extensibility:**
- **Podman support** (Issue #957, closed — but demand persists for Docker alternative)
- **Apple Container runtime + remote OneCLI gateway** (PR #2809, open) — env-gated `CONTAINER_RUNTIME=container` for macOS native containerization and remote gateway support. This is a **substantial new feature** and may land in v2.2.

**Channel Integrations:**
- **Signal messaging channel** (Issue #29, closed) — completed feature request
- **iMessage support** (PR #2792, open) — fixes file system issue during channel setup

**CLI and Developer Experience:**
- **`/add-clidash` skill** (PR #2795, open) — read-only CLI-derived dashboard, a utility skill
- **Agent-to-agent approval policies** (PR #2793, merged today) — significant governance feature

**Prediction for next release:** Based on the volume of merged PRs and actively reviewed fixes, v2.1.19 is likely soon and should include:
- The security fix for `send_file` path confinement (PR #2817/2818)
- The CLI messaging-groups create fix (PR #2804)
- Socket transport timeout/cap (PR #2813)
- Database idempotency fixes (PR #2808)
- Discord chunking (PR #2816)

## User Feedback Summary

**Pain Points:**
- **v1→v2 migration ambiguity** (Issue #2632) — Telegram swarm feature status unclear, blocking forking teams
- **Docker dependency** (Issue #957) — Users want Podman as alternative, especially on macOS/Linux
- **CLI dead commands** (PR #2804) — `ncl messaging-groups create` is completely broken, blocking a core administrative workflow
- **Discord truncation** (PR #2812) — Agent replies cut off for Discord users without warning

**Satisfaction:**
- Positive community engagement demonstrated by the Korean README translation (PR #2806) and continued contributions from diverse authors
- Multiple "replacement" PRs (e.g., #2816 replacing #2812) show community following the maintainer's request for regression tests — a sign of maturing contribution standards

## Backlog Watch

**High-priority items needing maintainer action:**

1. **Issue #2807** (Security, 0 comments) — Unauthorized child agent creation vulnerability. **No maintainer response**, no fix PR. This is a **critical security gap** needing immediate triage.

2. **Issue #2632** (2 comments, 0 maintainer) — User blocked on v1→v2 migration over Telegram swarm ambiguity. A clear statement from maintainers could unblock real-world upgrades.

3. **Issue #2784** (Container staleness, 1 comment) — Container runner misses source file changes. Impacts reliability of container-based deployments. **No fix PR.**

4. **PR stack conflict resolution:** PR #2817/#2818 (send_file security) and PR #2813/#2816/#2815 (competing replacement PRs with regression tests) need maintainer review and merge decisions. Having multiple PRs for the same fix indicates contributor friction that could be reduced with clearer guidance.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-19

## 1. Today's Overview

NullClaw saw a burst of community-driven development activity on 2026-06-18, with **5 new pull requests** opened and **4 active issues** updated — all remaining open. There were no new releases or merged PRs, indicating the maintainers are currently reviewing contributions rather than cutting new versions. The spike in PRs suggests strong external contributor momentum, particularly around streaming tool-calls, memory configuration, and documentation. The issue queue remains stable with no new bug reports or regressions today, but several long-standing feature requests continue to generate discussion.

## 2. Releases

**No new releases** on 2026-06-18. The last published version remains unreported. No migration notes or breaking changes to document.

## 3. Project Progress

**Merged/closed PRs today: 0** — All 5 PRs opened on 2026-06-18 remain open for review. Notable contributions advancing the codebase:

- **[PR #964](https://github.com/nullclaw/nullclaw/pull/964)** — `mtdphn` proposes enabling native API-level tool calls during streaming by fixing `agent/root.zig` which currently disables native tools when streaming is enabled. This is a root-level fix for a well-known limitation.
- **[PR #965](https://github.com/nullclaw/nullclaw/pull/965)** — Companion PR from the same author adds structured streaming tool-call support for the SSE parser, handling the case where model-emitted XML remains in `delta.content`.
- **[PR #961](https://github.com/nullclaw/nullclaw/pull/961)** — `valonmulolli` adds three new configurable memory controls (`auto_recall`, `recall_limit`, `max_context_bytes`), giving users granular control over memory injection behavior.
- **[PR #963](https://github.com/nullclaw/nullclaw/pull/963)** — `vernonstinebaker` fills a documentation gap by adding a **Weixin Personal WeChat QR Code login channel** to both English and Chinese config docs (references Issue #817).
- **[PR #962](https://github.com/nullclaw/nullclaw/pull/962)** — Same author documents the **native Anthropic provider** with API key and OAuth support, closing Issue #767.

## 4. Community Hot Topics

- **[Issue #50 — "Can this run on an Esp32?"](https://github.com/nullclaw/nullclaw/issues/50)** (4 comments, oldest open issue from Feb 2026) — Continues to generate interest. Community wants to know if NullClaw can be deployed on resource-constrained IoT hardware. Underlying need: edge deployment for autonomous agents.

- **[Issue #190 — "Subagent spawn"](https://github.com/nullclaw/nullclaw/issues/190)** (2 comments, opened Mar 2026) — User `superhero75` asks about subagent spawning and intercommunication with different providers per agent. This signals demand for hierarchical multi-agent architectures.

- **[Issue #913 — "a2a performance?"](https://github.com/nullclaw/nullclaw/issues/913)** (1 comment, opened May 2026) — User `jacktang` reports that raw NullClaw messaging/response is faster than the a2a protocol implementation and requests benchmark data. This is a quality-of-implementation concern for the a2a feature.

- **[Issue #817 — "WeChat QR code login"](https://github.com/nullclaw/nullclaw/issues/817)** (2 comments) — Directly addressed today by PR #963, which is nearing resolution. Strong alignment between community request and contributor response.

## 5. Bugs & Stability

**No new bugs, crashes, or regressions reported today.** The only performance-related concern is:

- **Moderate severity: a2a protocol performance deficit** — Issue #913 reports that the a2a protocol underperforms compared to raw messaging. No fix PR exists yet, but the reporter is asking for benchmark data rather than reporting a crash.

All other open issues are feature requests, not stability problems. Project appears stable from a bug perspective.

## 6. Feature Requests & Roadmap Signals

Several features being actively contributed via today's PRs are likely candidates for the next release:

- **Streaming + native tool calls** (PR #964/#965) — Highly anticipated fix that enables API-level tools during streaming. This has been a known limitation and is now being resolved.
- **Configurable memory recall** (PR #961) — Users will gain ability to disable auto-recall, set recall limits, and control context byte budgets. Directly addresses memory bloat concerns.
- **WeChat QR login documentation** (PR #963) — Likely to land soon given the PR is marked as closing Issue #817.
- **Native Anthropic provider** (PR #962) — Documents existing but undocumented feature; not a new capability but improves discoverability.

Community signals from open issues:
- **ESP32 support** (Issue #50) — Not on the immediate roadmap but continues to gather interest. Predict this may be considered for a future "lightweight" build target.
- **Subagent spawning** (Issue #190) — Hierarchical multi-agent with per-agent provider selection is a complex feature, likely not in the next release but a strong mid-term roadmap signal.
- **a2a performance benchmarking** (Issue #913) — May trigger optimization work in the a2a implementation before the next release.

## 7. User Feedback Summary

**Pain points expressed:**
- Streaming currently disables native tool calls (PR #964 description) — a significant workflow blocker for users who need real-time tool-using agents.
- Memory recall is not user-configurable (PR #961 description) — leads to uncontrolled context growth.
- WeChat QR login (Issue #817) — a specific integration need for Chinese market users, now being addressed.
- ESP32 feasibility (Issue #50) — edge deployment remains an open question with no maintainer response yet.
- a2a performance (Issue #913) — the protocol's speed advantage is questioned versus raw messaging.

**Satisfaction signals:**
- Active community contributors are submitting quality PRs (5 today) — suggests contributors find the codebase approachable and the maintainers responsive.
- Documentation gaps are being proactively filled by community members (PRs #962, #963).

## 8. Backlog Watch

High-priority items needing maintainer attention:

- **[Issue #50 — ESP32 support](https://github.com/nullclaw/nullclaw/issues/50)** — Oldest open issue (Feb 2026, 4 comments). No maintainer response. High community interest but no official roadmap signal.
- **[Issue #190 — Subagent spawning](https://github.com/nullclaw/nullclaw/issues/190)** — No maintainer comment since March 2026. Important architectural question left unanswered.
- **[Issue #913 — a2a performance](https://github.com/nullclaw/nullclaw/issues/913)** — Opened May 2026, only 1 comment. Could benefit from a maintainer benchmark or acknowledgment.

No PRs require urgent maintainer attention — all 5 opened today are fresh and under review window.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-19

## 1. Today's Overview
Project activity remains **very high** with 33 issues and 44 PRs updated in the last 24 hours, indicating sustained development velocity. The team closed 14 issues and merged/closed 17 PRs during this period, demonstrating strong forward momentum. **Reborn** continues to be the dominant theme, with bug fixes, UX improvements, and new feature work (Projects, concurrent turn execution, automation redesign) progressing across multiple fronts. No new releases were cut today, but the volume of merged PRs suggests a release may be imminent.

---

## 2. Releases
**None** — no new releases were published today.

---

## 3. Project Progress
### Merged/Closed PRs (17 total)
Key accomplishments from today's merged/closed PRs:

- **#5065** — `feat(triggers): fire-once (one-shot) scheduled triggers` (XL, by henrypark133) — Adds `completion_policy` to trigger creation, enabling one-time automations. A significant new capability for automation users.
- **#5055** — `fix(webui): soften automation run errors` (L, by henrypark133) — Changes error state presentation from red to yellow "Needs attention" for non-terminal automations; fixes duplicate empty-state text.
- **#5018** — `feat(reborn): Projects — WebChat v2 endpoints (4/5)` (L, by ilblackdragon) — Adds 9 HTTP routes for projects + membership CRUD, completing the backend for the Projects feature.
- **#5067** — `fix(reborn): keep OAuth auth gates visible without auth URL` (XL, by hanakannzashi) — Preserves OAuth card visibility when authorization URL is unavailable, improving the auth failure UX.
- **#5070** — `fix: Auth gate cancel after approval...` (by hanakannzashi) — Closes linked issue about OAuth prompt replay after cancel.
- **#5079** — Small documentation upload (XS, by dat-Devvv).

### Open PRs Worth Watching
- **#5085** — `feat(reborn): concurrent turn execution via TurnRunScheduler` (XL, by henrypark133) — Moves from serial to concurrent run execution with per-user caps. Addresses a core performance bottleneck.
- **#5019** — `feat(reborn): Projects — light up the Projects page (5/5)` (XL, by ilblackdragon) — Completes the Projects feature with frontend wiring.
- **#5084** — `Redesign the automations page` (XL, by achalvs) — Frontend redesign for denser, scannable layout.
- **#5072** — `feat(reborn): generic host-ingress for Slack` (XL, by serrrfirat) — Architectural refactor making Slack a generic ingress; foundational work for future channel additions.

---

## 4. Community Hot Topics
**Most Active Issues:**

1. **[#4761] [CLOSED] Agent stops after repeated tool failures instead of recovering** — 5 comments, 0 👍  
   *Link: https://github.com/nearai/ironclaw/issues/4761*  
   The highest-comment issue (5 comments). User reports that the Reborn agent fails to recover after repeated tool call failures, instead terminating the run. This signals a fundamental reliability concern with the engine v2 runtime's error recovery logic. *Now closed.*

2. **[#4907] [CLOSED] Run may fail after successful Google OAuth instead of resuming execution** — 3 comments, 0 👍  
   *Link: https://github.com/nearai/ironclaw/issues/4907*  
   A critical user-facing bug: successful OAuth authentication causes the run to fail rather than resume. This undermines the core OAuth integration experience for Google services.

3. **[#4942] [CLOSED] Tool calls failed won't appear until re-fetch/reload** — 3 comments, 0 👍  
   *Link: https://github.com/nearai/ironclaw/issues/4942*  
   SSE/WebUI display issue where tool failure notifications are not pushed in real-time; users must manually refresh to see failures.

4. **[#1520] [OPEN] qwen error — Method Not Allowed** — 3 comments, 0 👍  
   *Link: https://github.com/nearai/ironclaw/issues/1520*  
   Long-standing issue (since March 2026) with the Qwen provider returning HTTP 405. User reports it works on other platforms. This is the **oldest still-open issue** and may indicate a provider-specific integration gap.

**Most Active PRs:**  
- **#5086** (XL, CI spike) — Experimental full-suite CI gate with nextest + mold + sccache + sharding. High interest as it aims to speed up CI workflows.
- **#5085** (XL, concurrent turn execution) — Potentially transformative performance improvement for Reborn.
- **#5084** (XL, automations redesign) — Community-facing UX improvement.

---

## 5. Bugs & Stability
### Critical / High Severity
- **[#5078] [OPEN] Approval modal becomes difficult to review when displaying large tool commands**  
  *Link: https://github.com/nearai/ironclaw/issues/5078*  
  **Severity: Medium** (UX/security concern). Large shell commands overflow the approval modal, making it impossible to review actions before approving. **Fix PR exists:** [#5082] `fix(reborn): bound approval command previews` (XL, by aiworkbot) — truncates with scrollable preview toggle.

- **[#5060] [CLOSED] GitHub analysis workflows may enter repeated approval loops**  
  *Link: https://github.com/nearai/ironclaw/issues/5060*  
  **Severity: High** (functional blocking). Agent enters infinite approval loop, never producing results. *Now closed* — likely fixed.

- **[#4992] [OPEN] Local-dev SSO access mismatch can make Railway automations fail**  
  *Link: https://github.com/nearai/ironclaw/issues/4992*  
  **Severity: High** (platform stability). Automation runs fail before thread creation due to SSO token mismatch. Affects Railway-hosted instances.

- **[#5071] [OPEN] Proactively refresh Google OAuth tokens before expiry**  
  *Link: https://github.com/nearai/ironclaw/issues/5071*  
  **Severity: Medium** (reliability). Google tokens expire after ~1 hour; users must reauthenticate. No fix PR yet.

### Medium / Low Severity
- **[#5076] [OPEN] Sidebar keeps chat thread highlighted on non-chat pages** — UX bug.
- **[#5077] [OPEN] Invalid chat URLs should redirect to new chat** — UX/onboarding.
- **[#5083] [OPEN] Triggers: active automations list scans unbounded completed-row prefix** — Performance concern in automation listing.

### Nightly E2E Failure
- **[#4108] [OPEN] Nightly E2E failed** — `2026-06-18` failure; extensions job failed. This has been open since May 27 and is a persistent stability signal.  
  *Link: https://github.com/nearai/ironclaw/issues/4108*

---

## 6. Feature Requests & Roadmap Signals
**Likely in Next Version:**

1. **Projects feature (PRs #5018, #5019)** — Complete end-to-end (backend + frontend) for project management. This is the most mature feature and appears ready for release.

2. **Fire-once triggers (PR #5065)** — One-shot scheduled automations is a major usability improvement for automation users.

3. **Automation UX redesign (PR #5084, Issue #5069)** — Multiple contributors working on streamlining the automations UI, indicating this is a priority for the next release.

4. **Concurrent turn execution (PR #5085)** — Performance optimization that transforms Reborn from serial to concurrent run execution.

**Speculative Mid-Term:**

- **Google OAuth token refresh (#5071)** — Proactive refresh would dramatically improve Google integration UX.
- **Slack as generic host-ingress (#5072)** — Architectural work for easier channel additions.
- **Channel badge improvements (#3840)** — WeChat/Telegram visual enhancements requested since May.

---

## 7. User Feedback Summary
**Pain Points (from issues filed by testing team):**

- **OAuth flow fragility** — Multiple issues (#4907, #5070, #5071) report that OAuth authentication breaks run execution. Successful auth should resume, not fail.
- **Tool failure recovery** — Agent does not gracefully handle repeated tool failures (#4761), terminating runs that could self-recover.
- **Approval modal unusable for large commands** — The improved command visibility (#5078) inadvertently made approval harder for complex operations.
- **Validation UX friction** — Skills validation errors persist after field correction (#5007); users must re-submit.
- **Automations hard to diagnose** — No logs displayed for automation runs (#4918); "Needs attention" state still confusing.

**Positive Signals:**
- The team is actively closing bugs (14 closed today) and responding to feedback.
- Approval modal truncation fix (#5082) directly addresses user-reported UX issue.
- Fire-once triggers (#5065) and Projects (#5018) show the team is delivering on roadmap features.

---

## 8. Backlog Watch
**Longest-Standing Open Issues:**

1. **[#1520] [OPEN] qwen error — Method Not Allowed** (2026-03-21, 3 comments)  
   *Link: https://github.com/nearai/ironclaw/issues/1520*  
   **Open for 90 days.** Provider integration issue with Qwen's coding endpoint. User reports it works on other platforms; may need provider-side fix or IronClaw workaround.

2. **[#4108] [OPEN] Nightly E2E failed** (2026-05-27, 0 comments)  
   *Link: https://github.com/nearai/ironclaw/issues/4108*  
   **Open for 23 days.** Bot-reported nightly failure; may need triage to determine root cause.

3. **[#3840] [OPEN] Improve channel badges in Web UI** (2026-05-21, 0 comments)  
   *Link: https://github.com/nearai/ironclaw/issues/3840*  
   **Open for 29 days.** Enhancement request with no assignee or milestone.

**Unanswered PRs:**
- **None of the open PRs appear abandoned** — all have recent activity (last 24 hours). Most have core team contributors.

**Maintainer Attention Needed:**
- **[#1520] qwen error** — The oldest issue at 90 days; needs a decision (wontfix, external dependency, or internal fix).
- **[#4992] Local-dev SSO mismatch** — Affects Railway users; core infrastructure issue with high impact.
- **[#4500] Channel onboarding system event written to wrong conversation** — Bug affecting WeCom and Telegram channels; open since June 5 without clear resolution.

---

**Health Assessment:** ⚠️ **Stable with high velocity** — The project is shipping significant features (Projects, fire-once triggers, concurrent execution) while addressing a steady stream of bugs. However, 90-day-old unanswered issues (#1520, #4108) and persistent OAuth reliability problems suggest some technical debt in the integration layer. The upcoming release appears well-stocked with quality-of-life improvements.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the provided GitHub data for **LobsterAI (github.com/netease-youdao/LobsterAI)**, here is the project digest for **2026-06-19**.

---

## LobsterAI Project Digest

**Date:** 2026-06-19

### 1. Today's Overview
The project is finishing a significant release cycle, showing high velocity with 15 PRs updated in the last 24 hours, the majority of which (14) were merged or closed today. A major security vulnerability (Issue #2176) was reported, requiring immediate attention. The team successfully merged the `release/2026.6.11` branch into `main`, bringing substantial new features including document sharing (DOCX, PDF, etc.) and finalized the shift to a real-time ASR voice input system. Despite the security alert, the overall activity indicates strong development health and a focus on delivering a stable, feature-rich update.

### 2. Releases
No new official releases or tags were created in the last 24 hours. However, the project is clearly in a release preparation phase. The primary activity was the merge of **PR #2179** (`chore(release): merge release/2026.6.11 into main`). This merge sets the stage for what appears to be an imminent **v2026.6.18** release, which will bundle the extensive work from the `2026.6.11` release branch.

### 3. Project Progress
The 14 merged/closed PRs today indicate a major push toward finalizing the next release. Key advances include:

- **Finalization of Release Branch:** **PR #2179** merged the `release/2026.6.11` branch into `main`, consolidating features like document sharing (DOCX, PPTX, PDF) and Markdown/Mermaid file support.
- **Voice Input Maturity:** The team finalized the transition to a real-time-only ASR system. **PR #2160** removed the legacy upload-based ASR, and **PR #2177** polished the user-facing terminology from "dictation" to "voice input."
- **Artifact Sharing Expansion:** **PR #2178** added support for sharing Markdown and Mermaid files directly from the Artifact panel, including complex packaging logic for resources.
- **UI Polish:** **PR #2150** addressed a UI regression, ensuring the expert suite page controls (toolbar, header) remain "sticky" during scrolling.
- **Computer Use Runtime Bump:** **PR #2156** updated the managed Computer Use runtime to version 1.0.7, which includes diagnostic tweaks for stability.

### 4. Community Hot Topics
- **Security Vulnerability Report:**
    - **Issue #2176** (Open): *"LobsterAI automatic artifact loading allows message-derived arbitrary local file reads"* — This is the most critical community item. It details a serious security flaw where the system automatically parses `MEDIA:` references and could expose arbitrary local files. This single issue, created yesterday, already has high importance.
    - **Link:** [Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176)

- **UI/UX Bug:**
    - **Issue #1422** (Stale/Open): *"MCP-自定义页面，对应的服务名称较长时，删除弹框那展示不友好"* (MCP custom page: long service names cause poor display in delete dialog). Although stale, it remains the only other open issue. It highlights a persistent but low-urgency UX problem with text overflow in modals.
    - **Link:** [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422)

### 5. Bugs & Stability
One new critical bug was reported:

- **Critical:** **Issue #2176** (`automatic artifact loading allows message-derived arbitrary local file reads`) presents a **high-severity security vulnerability**. The advisory summary indicates a path traversal or injection risk that could lead to arbitrary file reads. This requires an immediate fix. As of the data snapshot, no fix PR has been linked.
    - **Severity:** Critical (Security)
    - **Link:** [Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176)

### 6. Feature Requests & Roadmap Signals
The closed PRs strongly signal the roadmap for the upcoming release:

- **Inline Document Support:** The shift toward sharing and previewing binary documents (DOCX, PPTX, XLSX, PDF) in the Artifact panel is a major feature. This is cued by **PR #2179** and **PR #2178**.
- **Predictions for Next Version:**
    1.  **Security Patch:** A hotfix or patch release addressing the vulnerability in Issue #2176 is the most likely next step.
    2.  **Release v2026.6.18 / v2026.6.11:** The merged features (document sharing, real-time voice, Computer Use updates) will be officially tagged and released.
    3.  **Computer Use Expansion:** The active development of the "Computer Use" module (represented by PR #2143 and PR #2156) suggests this is a core roadmap item for future iterations.

### 7. User Feedback Summary
Direct positive user feedback is not visible in this data. However, user pain points are reflected in the issues:

- **Pain Point:** Users are likely concerned about the system's security after the publication of Issue #2176. Trust may be temporarily impacted.
- **Pain Point (Usability):** The staleness of Issue #1422 suggests that a UI polish for form controls (like delete confirmation dialogs) has been a long-standing, albeit minor, annoyance for users.
- **Satisfaction:** The high volume of merged PRs suggests a responsive development team that actively refines features based on internal testing, likely leading to high satisfaction with the upcoming release's polish and new capabilities.

### 8. Backlog Watch
- **Issue #1422 (Stale):** *"MCP-自定义页面，对应的服务名称较长时，删除弹框那展示不友好"* — This issue was created over two months ago (2026-04-03) and was last updated yesterday. It is a low-severity, pure UI bug. While not blocking, its age suggests it has been deprioritized. The maintainers should review and either schedule a fix or close it if it is no longer relevant.
    - **Link:** [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422)

- **PR #1277 (Open):** *"chore(deps-dev): bump the electron group across 1 directory with 2 updates"* — This Dependabot PR is attempting to bump Electron from 40.x to 42.x. It has been open since April 2, 2026, which is unusual for a dependency update. This could indicate a dependency conflict, significant breaking changes requiring a major refactor, or simply maintainer oversight. Given that security patches are often included in major Electron bumps, this should be investigated to prevent future CVEs.
    - **Link:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the TinyClaw project digest for **2026-06-19**.

---

## TinyClaw Project Digest – 2026-06-19

### 1. Today's Overview
The project is currently in a **high-alert security remediation phase**, with zero feature development activity in the last 24 hours. The community (specifically a security researcher) has filed three critical-severity vulnerabilities, all opened within the last 24 hours, and none have received maintainer responses or comments yet. There are no merged PRs, no new releases, and no ongoing development activity visible on the surface. The project appears stable in terms of uptime but faces immediate risk regarding its default authentication and file-handling posture.

### 2. Releases
**None.** No new releases were published today. The latest available release remains unchanged from prior periods.

### 3. Project Progress
**No pull requests were merged or closed today.** There is no evidence of any code changes, bug fixes, or feature work advancing through the PR pipeline in the last 24 hours.

### 4. Community Hot Topics
All three open issues are security reports filed by the same researcher (**YLChen-007**) and are the sole focus of community attention. None have comments or reactions yet, but they represent the most urgent topics:

- **[Issue #284 – [Security] TinyAGI allows unauthenticated API messages to invoke Claude with provider permission checks disabled by default](https://github.com/TinyAGI/tinyagi/issues/284)**  
  The most severe: a `POST /api/message` endpoint allows any unauthenticated user to send prompts to Claude (or other providers) without permission checks. This is a fundamental authorization bypass.

- **[Issue #283 – [Security] Unauthenticated `prompt_file` agent configuration allows arbitrary local file disclosure to the model provider](https://github.com/TinyAGI/tinyagi/issues/283)**  
  A path traversal / file disclosure vulnerability where attackers can force the agent to read arbitrary files from the host and send them to the LLM provider.

- **[Issue #282 – [Security] Untrusted `[send_file: ...]` response tags allow arbitrary host file attachment delivery](https://github.com/TinyAGI/tinyagi/issues/282)**  
  An injection-style flaw where the system trusts file paths from agent output, enabling an attacker to trick the system into sending arbitrary host files as attachments.

**Underlying need:** The community (and likely soon, downstream users) urgently needs a security release that enforces authentication by default, sanitizes file paths, and validates agent output tags. The zero-comment status suggests the maintainers have not yet triaged these issues.

### 5. Bugs & Stability
**Three critical security vulnerabilities were reported today.** Ranked by severity:

| Rank | Issue | Risk | Fix Status |
|------|-------|------|------------|
| 1 | [#284 – Unauthenticated `POST /api/message` bypassing provider permissions](https://github.com/TinyAGI/tinyagi/issues/284) | **Critical** – Full unauthenticated access to LLM API (cost, data leakage, abuse) | No fix PR |
| 2 | [#283 – Arbitrary local file disclosure via `prompt_file`](https://github.com/TinyAGI/tinyagi/issues/283) | **Critical** – Server-side file read to external provider | No fix PR |
| 3 | [#282 – Arbitrary file attachment delivery via response tags](https://github.com/TinyAGI/tinyagi/issues/282) | **High** – Attacker-controlled file exfiltration | No fix PR |

All three are brand new and lack any fix attempts or maintainer acknowledgment.

### 6. Feature Requests & Roadmap Signals
No traditional feature requests were filed today. However, the three security issues implicitly create a **strong roadmap signal**: the next release must include:
- Mandatory authentication for all API endpoints.
- Input validation and whitelist-based path checking for `prompt_file`.
- Output sanitization blocking dynamic `[send_file: ...]` tags from untrusted agent output.

The project may also need a security hardening guide or a configuration option for "strict mode." These are likely to become blocking items for any future feature work.

### 7. User Feedback Summary
**No positive or negative user feedback was recorded in the last 24 hours.** The only user activity is from a security researcher filing detailed vulnerability reports. This suggests either low end-user engagement on GitHub or a community that reports issues privately. The absence of user complaints about broken features may indicate the project is functionally stable, but the security issues represent a substantial trust risk for anyone deploying the default configuration.

### 8. Backlog Watch
All three new issues (**#282**, **#283**, **#284**) are critical and currently unanswered. There are no older unanswered issues that stand out from the data provided. **Maintainer attention required immediately** on all three to triage severity, acknowledge the reports, and communicate a patching timeline. The lack of any maintainer comment within 24 hours of a critical vulnerability disclosure is a concern for project health.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Project Digest for Moltis — 2026-06-19**

**1. Today’s Overview**  
Moltis is currently in a low-activity period. In the last 24 hours, one issue was updated (still open), no pull requests were merged or closed, and no new releases were cut. The single active bug report suggests minor friction around session management, but overall the project appears stable with no active feature development or hotfix activity visible today. Maintainer attention may be focused elsewhere, but the community has not yet escalated any critical concerns.

**2. Releases**  
No new releases were created today. The latest available release remains the version users are already on (see previous digests for details). No migration notes or breaking changes are pending.

**3. Project Progress**  
No pull requests were merged or closed in the last 24 hours. No feature advancements or fixes were recorded on this date.

**4. Community Hot Topics**  
Only one issue is currently active, and it has zero comments or reactions, so no “hot” discussion exists.  
- **Issue #1132** ([link](https://github.com/moltis-org/moltis/issues/1132)) – [bug] “main” session can’t be deleted/archived. The lack of comments suggests either the bug is straightforward or has not yet drawn community attention. Underlying need: users expect full control over all session states, including the default “main” session (likely a reserved/fixed session in the UI).

**5. Bugs & Stability**  
One bug was reported today:  
- **Issue #1132** ([link](https://github.com/moltis-org/moltis/issues/1132)) – Users cannot delete or archive the “main” session.  
  **Severity:** Low-to-Medium (functional, but not a crash; prevents session cleanup).  
  **Fix status:** No fix PR exists yet. No workaround documented.

No crashes, regressions, or high-severity stability issues were reported.

**6. Feature Requests & Roadmap Signals**  
No explicit feature requests were opened today. However, the existence of Issue #1132 implies an implicit request: allow users to manage the default “main” session with the same delete/archive options available for custom sessions. A future release may introduce either a UI toggle to hide/disable the “main” session, or a backend change to treat it as a deletable session (with a reset fallback).

**7. User Feedback Summary**  
The only user signal today is from the bug reporter (vvuk), who indicates they have searched for existing issues and are using the latest Moltis version. The pain point is clear: inability to clean up the default session creates friction when users want a fresh start or to remove unused sessions. No positive feedback or satisfaction signals were recorded in this 24-hour window.

**8. Backlog Watch**  
No long-unanswered important issues or PRs were identified in today’s data. The single open issue (#1132) was created less than 24 hours ago, so it does not yet qualify for backlog watch. All prior backlog items from previous digests should continue to be monitored.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-19

## 1. Today's Overview

CoPaw shows **high development velocity** with 50 issues and 32 PRs updated in the last 24 hours. A **new patch release (v1.1.12.post1)** was published, addressing critical memory and build infrastructure bugs. The project's **community engagement remains strong**, particularly around context compression reliability and channel-specific regressions. However, **several long-standing bugs (context compaction freezing, skill re-enabling on upgrade, backup failures)** remain unresolved or are being re-reported, indicating recurring user pain points. The merge of **17 PRs today** signals sustained maintainer attention, with notable fixes for SSL certificate issues, token usage display, and context management migration to AgentScope 2.0.

---

## 2. Releases

### v1.1.12.post1 — Patch Release
**What's Changed:**
- **Bug fix (scripts):** Corrected prerelease arguments expansion in build scripts (#5288)
- **Bug fix (memory):** Renamed ChromaDB probe collection to `'probe-test'` to avoid naming conflicts

**Breaking Changes:** None  
**Migration Notes:** No special migration steps required; this is a minor patch release.  
**Link:** [Release v1.1.12.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12.post1)

---

## 3. Project Progress

**Merged/Closed PRs Today (17 total):** Key advancements include:

| PR | Description | Impact |
|---|---|---|
| [#5270](https://github.com/agentscope-ai/QwenPaw/pull/5270) | Sprint 3.1–3.4 integration tests (64 cases covering ACP, Plugin, Security) | Strengthens CI pipeline |
| [#5309](https://github.com/agentscope-ai/QwenPaw/pull/5309) | Migrate context management to AgentScope 2.0 native compression | Core architectural improvement |
| [#5291](https://github.com/agentscope-ai/QwenPaw/pull/5291) | Fix DingTalk SSL certificate configuration for `uv` installs | Fixes channel connectivity error |
| [#5298](https://github.com/agentscope-ai/QwenPaw/pull/5298) | Handle Windows certificate store SSL errors in build verification | Fixes `discord.py` import crash on Windows |
| [#5303](https://github.com/agentscope-ai/QwenPaw/pull/5303) | Fix token usage display to use active model's `max_input_length` | UI accuracy improvement |
| [#5306](https://github.com/agentscope-ai/QwenPaw/pull/5306) | Fix chat turn context usage denominator | Console UI fix |
| [#5293](https://github.com/agentscope-ai/QwenPaw/pull/5293) | Change history chat list from Drawer to embedded right panel | UI/UX enhancement |
| [#5008](https://github.com/agentscope-ai/QwenPaw/pull/5008) | Add uninstall hooks and expose skill provider API | Plugin system improvement |
| [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | Add SharedMCPPool to reuse MCP servers across agents | Performance optimization |
| [#4860](https://github.com/agentscope-ai/QwenPaw/pull/4860) | Clean up stale Windows skill directories | Stability fix |

---

## 4. Community Hot Topics

The most active discussions center around **context compression reliability** and **channel-specific regressions**:

1. **[#5218 — Sub-agent context compaction causes process freeze](https://github.com/agentscope-ai/QwenPaw/issues/5218)** (16 comments, OPEN)  
   *Analysis:* A critical stability issue—when a sub-agent triggers context compression, the entire QwenPaw process becomes unresponsive. This is the most commented issue today, indicating many users hit this in multi-agent setups. **No fix PR currently linked.**

2. **[#5171 — Context compression retains by token count, discarding character files entirely](https://github.com/agentscope-ai/QwenPaw/issues/5171)** (8 comments, OPEN)  
   *Analysis:* When a persona file's token count exceeds the compression threshold, the system compresses context to zero, causing total information loss and task interruption. This reflects a design flaw in the compression strategy. **No fix PR linked.**

3. **[#5063 — Feature request: Integrate Headroom compression (60-95% token reduction)](https://github.com/agentscope-ai/QwenPaw/issues/5063)** (7 comments, OPEN)  
   *Underlying need:* Users want lossless, reversible compression to avoid information loss from current compaction. A PR ([#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244)) implementing this as a `HeadroomContextManager` is open.

4. **[#5262 — Built-in skills re-enable after every upgrade](https://github.com/agentscope-ai/QwenPaw/issues/5262)** (7 comments, OPEN)  
   *Analysis:* Recurring frustration—user-disabled skills revert to enabled on each version upgrade. This was previously reported in #4807 but remains unfixed.

5. **[#5319 — Console always shows "Answers have stopped"](https://github.com/agentscope-ai/QwenPaw/issues/5319)** (3 comments, OPEN)  
   *Analysis:* A UI regression where the web console displays a spurious stop message despite successful backend responses. Likely a frontend bug.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **Critical** | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) — Sub-agent context compaction freezes process | OPEN | None |
| **Critical** | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) — Context compression discards all context when persona file too large | OPEN | None |
| **High** | [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) — Console always shows "Answers have stopped" | OPEN | None |
| **High** | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) — Feishu group replies go to private chat when user has active DM | OPEN | None |
| **Medium** | [#5253](https://github.com/agentscope-ai/QwenPaw/issues/5253) — Custom channel listener crashes after any save | OPEN | None |
| **Medium** | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) — Disabled skills re-enable on upgrade | OPEN | None |
| **Medium** | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) — docx/pdf download fails with 404 | CLOSED | Fixed in earlier release |
| **Low** | [#5313](https://github.com/agentscope-ai/QwenPaw/issues/5313) — MCP Authorization header loses "Bearer" prefix | CLOSED | Fix merged today |

**Critical regression:** Two open bugs (#5218, #5171) directly impact multi-agent reliability and could cause full system unavailability—**no fix PRs exist for either.**

---

## 6. Feature Requests & Roadmap Signals

**High-likelihood next-version features:**

1. **Headroom Context Compression (#5063)** — PR [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) is open and under review. Given strong community demand (7 comments) and the severity of current compression bugs, this is likely to land soon.

2. **Scroll Context Manager (PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321))** — A retrieval-driven alternative to native compression, filed as a first-time contributor PR today. Addresses the same pain points as #5171/#5218.

3. **Separate Vision Model Routing (#3940)** — Allows routing image inputs to a vision-capable model without switching the entire conversation model. 5 comments, open since April. Likely to be prioritized as multimodal usage grows.

4. **DataPaw Plugin (PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622))** — A data-analysis plugin with 12 BI skills. Open since May, under review.

5. **Terminal Coding Mode (PR [#5304](https://github.com/agentscope-ai/QwenPaw/pull/5304))** — Introduces an interactive coding-mode terminal. Filed today, early stage.

**Less likely but notable:**
- **Bubblewrap Linux Sandbox (PR [#5310](https://github.com/agentscope-ai/QwenPaw/pull/5310))** — First-time contributor, security-focused isolation for tool execution.

---

## 7. User Feedback Summary

**Common Pain Points:**
- **Context compression is unreliable** — Users report process freezes (#5218) and total information loss (#5171) during compaction. This is the #1 source of frustration.
- **Upgrade experience is broken** — Disabled skills re-enable (#5262) and backup fails silently (#3821, still open since April). Users feel upgrades are disruptive.
- **Channel-specific regressions** — Feishu replies misrouted (#5264), DingTalk SSL fails on `uv` install (#5237), custom channel listeners crash (#5253). Multi-channel deployments are unstable.
- **UI inconsistencies** — Console shows "Answers have stopped" falsely (#5319), history messages leak system instructions (#3975), token usage display uses wrong model (#5300, now fixed).

**Positive Signals:**
- Users appreciate the new chat history sidebar panel (PR #5293 merged today)
- Community actively contributes first-time PRs (scroll context, bubblewrap sandbox)
- MCP pool reuse (#4849) addresses performance scaling concerns for multi-agent deployments

**Satisfaction indicators:** All closed issues today (34) indicate maintainers are responsive, but the recurrence of skill re-enabling (#5262 as a re-report of #4807) suggests certain fixes are not being properly verified.

---

## 8. Backlog Watch

The following issues/PRs require maintainer attention:

| Item | Days Open | Detail |
|---|---|---|
| [#3821](https://github.com/agentscope-ai/QwenPaw/issues/3821) — Backup never succeeds | **54 days** | Reported 2026-04-25, last updated 2026-06-18 but **no fix or resolution**. User reports backup hangs across multiple versions. |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) — ChromaDB Rust binding segfault | **52 days** | CLOSED, but root cause (SIGSEGV on Linux) is a process-killer. No clear evidence of a permanent fix. |
| [#2174](https://github.com/agentscope-ai/QwenPaw/issues/2174) — Multi-agent query fails (non-default agents) | **86 days** | CLOSED but user reports only 1/5 success rate. May need re-investigation. |
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) — Separate vision model routing | **50 days** | OPEN, no maintainer response. Growing need for multimodal support. |
| PR [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) — Decouple plugin loader from agent startup | **17 days** | OPEN, no updates since 2026-06-02. Critical for PyInstaller/Tauri frozen environments. |
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) — Skills re-enable on upgrade (re-report) | **2 days** | Previous issue #4807 was not properly fixed. Needs root cause analysis. |

**Maintainer alert:** The unresolved backup issue (#3821) has been open for **54 days** without any official acknowledgment or fix plan, and it is not the only long-standing stability bug.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-19

## Today's Overview

The ZeroClaw project is in a high-activity pre-release state with **28 issues** and **50 pull requests** updated in the past 24 hours, signaling intense development velocity ahead of the anticipated **v0.8.1 release**. The issue tracker shows strong maintainer engagement with 27 active issues and 1 closed, while the PR queue reveals a healthy 14 merged/closed items against 36 open — indicating sustained throughput. The project is addressing a concentrated backlog of **critical stability bugs** (P1 severity), **security hardening measures**, and **Windows portability gaps**, while also laying groundwork for significant architectural features like voice channels and context compression. Community interest is rising, as evidenced by multiple new feature requests and support queries appearing within the last day.

## Releases

**No new releases today.** The latest published version remains **v0.8.0**, though PR #7938 (open, authored by singlerider) is actively bumping all version references from 0.8.0 to 0.8.1 in preparation for the next release. The release author is awaiting team approval gates before merging.

## Project Progress

**14 PRs merged/closed in the last 24 hours**, reflecting substantial progress on multiple fronts:

- **Critical bug fixes:**
  - [PR #7934](https://github.com/zeroclaw-labs/zeroclaw/pull/7934) — Fixed cron deletion diagnostics leaking to stdout, routing through structured logs (closed)
  - [PR #7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) — Added DEBUG-level diagnostics for native tool delivery decisions across OpenAI, Anthropic, and compatible providers (closed)
  - [PR #7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) — Fixed Windows path and shell portability in tests, covering environment variable differences (closed)
  - [PR #7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) — Auto-includes discovered MCP tools in `risk_profile allowed_tools` so agents can actually use them (closed)
  - [PR #7826](https://github.com/zeroclaw-labs/zeroclaw/pull/7826) — Moved credential redaction from tool-execution data path to rendering layer, fixing HMAC receipt corruption (closed)

- **Documentation & i18n:**
  - [PR #7774](https://github.com/zeroclaw-labs/zeroclaw/pull/7774) — Preserved protected literals (product/provider/channel names) across translation catalogs (closed)
  - [PR #7939](https://github.com/zeroclaw-labs/zeroclaw/pull/7939) — Refreshed Fluent `.ftl` catalogs and mdbook translations for v0.8.1 (closed)

- **Security:**
  - [PR #7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902) — Pins `http_request` requests to vetted DNS addresses, closing an SSRF gap (open)
  - [PR #7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937) — Caps shell subprocess memory via new `shell_max_memory_mb` config (open)

## Community Hot Topics

The most active discussions reveal concentrated concern around **provider tool compatibility** and **security boundaries**:

- **[Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) — Prebuilt v0.8.0 binaries missing Slack/Discord channels** (👍 1, 3 comments, P1) — This regression from 0.7.x has blocked Slack integration for users of prebuilt binaries. High community impact as it makes the latest release effectively broken for Slack/Discord users. A mitigation PR [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) is open, adding CLI detection for configured-but-missing channels.

- **[Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) — Native/MCP tools unavailable on OpenAI Responses and Anthropic turns** (1 comment, P1) — Workflow-blocking (S1) issue where MCP server tools register but models don't receive them. Community member `perlowja` reports this depends on the model. PR [#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) adds diagnostic tracing that may help debug this.

- **[Issue #2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) — Restore GitHub as a native channel** (7 comments, oldest open issue) — This long-standing enhancement request for GitHub integration as a first-class channel remains open since February 2026, with consistent community interest. It's accepted for v0.8.1 per the tracker [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970).

- **[Issue #7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) — Voice satellite (ESP32/smartphone/PWA + approval buttons)** (1 comment) — A visionary feature request from `metalmon` for physical voice assistants, leveraging the voice-host contract from PR #7943. This signals growing community interest in real-time voice interfaces.

## Bugs & Stability

**14 distinct bugs reported or active today**, with concerning concentrations at P1 severity:

**Critical (S1 — workflow blocked):**

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | **S0** — security risk | `execute_pipeline` bypasses per-agent tool gating (confused deputy) | No fix PR yet |
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | S1 | Native/MCP tools unavailable on OpenAI/Anthropic turns | Diagnostic PR #7933 open |
| [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) | S1 | Agent delete can purge owned state before config persistence | No fix PR |
| [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) | S1 | Agent rename can move owned state before config persistence | Fix PR #7940 open |
| [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) | S1 | Code history sending non-alternating Anthropic messages (400 errors) | Needs repro |
| [#7871](https://github.com/zeroclaw-labs/zeroclaw/issues/7871) | P1 | Shell tool hangs when grandchild processes inherit pipe handles | Fix PR #7935 open |

**Degraded behavior (S2):**

| Issue | Description |
|-------|-------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows (Unix-only commands, path semantics, encoding) |
| [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) | Model cost not captured for schedules, CLI, web agents |
| [#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949) | `[[embedding_routes]]` silently degrades to NoopEmbedding |
| [#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) | Resumed Code sessions reopen with blank transcript (closed) |

**Priority P1 regressions are the dominant theme** — particularly the Slack/Discord channel regression (#7787), which forces users to downgrade to v0.7.5. The state persistence ordering bugs (#7907, #7941) are concerning as they can permanently lose agent configuration.

## Feature Requests & Roadmap Signals

*New requests appearing today reflect growing sophistication in the community:*

- **[#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) — Voice satellite device** (ESP32/smartphone/PWA + physical approval buttons) — Suggests enterprise/IoT interest in physical ZeroClaw instances

- **[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) — Realtime voice-host channel** (backend-agnostic WS client) — Would enable integration with CrispASR, sherpa-onnx; architecturally ambitious

- **[#7948](https://github.com/zeroclaw-labs/zeroclaw/issues/7948) — Persist embedding identity and auto-migrate vectors** — Addresses a painful upgrade path when changing embedding models

- **[#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Unify slash-command registries** across web UI, TUI, and channel runtime — Quality-of-life improvement for multi-surface users

- **[#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) — Include docs in Docker images** — Practical request from `pauldoo` to enable agents to self-document

**Likely for v0.8.1:** Based on the tracker [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) and PR #7938, the following are queued: GitHub native channel (#2079), Slack/Discord binary fix (#7787), shell memory caps (#6916, PR #7937), credential boundary RFC (#6971), and typed delete-with-cascade (#7175).

## User Feedback Summary

**Pain points surfacing from real users:**

1. **"The latest release is broken for my use case"** — Issue #7787 is the clearest example: Slack/Discord users on v0.8.0 prebuilt binaries must downgrade. One 👍 on the issue.

2. **"I can't trust the tool delivery"** — Issue #7756 (MCP tools not delivered to models) blocks anyone relying on MCP servers. S1 severity.

3. **"Installation on non-standard platforms is rocky"** — Issue #7911 from `state-space-swarm` reports ZeroClaw installs wrong binary on Android Termux (aarch64 without embedded assets).

4. **"Chinese/Japanese/Spanish users get English fallback"** — Issue #7917 flags that `file_download` tool strings are untranslated in zh-CN/ja/es/fr locales. `NiuBlibing` also reported 74 Windows test failures (#7462) with Chinese locale causing path issues.

5. **"Why can't agents answer questions about themselves?"** — Issue #7950 from `pauldoo` expresses frustration that ZeroClaw agents don't know ZeroClaw's own features, proposing docs-in-Docker solution.

**Positive signals:** Multiple "good first issue" labels (e.g., #7694, #7917) and `help wanted` tags indicate maintainer openness to community contributions. The fast response to issues (many created hours ago already have labels, priorities, and linked PRs) reflects a responsive maintainer team.

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) — GitHub native channel | **112 days** (Feb 27) | Accepted, P2 | Oldest open feature request; community wants GitHub integration but no PR exists |
| [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) — Model cost tracking | **78 days** (Apr 2) | Accepted, no assignee | Users can't track costs for scheduled/CLI/web agents; impacts enterprise adoption |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — v0.8.1 tracker | **23 days** (May 27) | Accepted, P2 | Operational tracker — last updated today, but no completion ETA |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — Security UX RFC | **23 days** (May 27) | RFC, needs-author-action | Security posture inventory stalled; no consensus reached |

**PRs needing review or merge decisions:**

- [#7938](https://github.com/zeroclaw-labs/zeroclaw/pull/7938) — v0.8.1 version bump (open, blocked on team approval) — Holding up the entire release
- [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) — CLI channel inventory (open, 2 days) — Critical for diagnosing the Slack/Discord regression
- [#7932](https://github.com/zeroclaw-labs/zeroclaw/pull/7932) — Docker Node 24 digest pins — Simple CI fix, open

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*