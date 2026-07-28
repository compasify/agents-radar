# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-28 01:25 UTC

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

# OpenClaw Project Digest — 2026-07-28

## Today's Overview

OpenClaw shows extremely high activity: **500 issues** and **500 PRs** were updated in the last 24 hours, with a closure rate of over 50% for both (262 issues closed, 219 PRs merged/closed). No new release was published today, but the project is actively processing feedback and fixes. The large number of open items with maintainer review labels indicates a healthy but backlogged review pipeline. Security, session-state, and memory-leak issues remain the top areas of concern.

## Releases

**No new releases today.** The latest stable version appears to be `2026.7.2-beta.4` based on issue reports; no changelog is available for today.

## Project Progress

Today saw **219 merged/closed PRs**. Notable merged fixes include:

- **Plugin loopback host classification** (PR #114832) — fixes security boundary for plugin IP validation.
- **Overlapping scoped processes** (PR #114845) — prevents duplicate survived processes after replacement.
- **Gateway call migration** (PR #112627) — stops local state migrations when using `openclaw gateway call`, fixing automated monitoring.
- **Telegram reply flashing** (PR #114822) — prevents unmodified replies from being briefly visible before plugin rewrites.
- **Auto-reply visible fallback** (PR #114799) — improves decision logic for when no visible reply was delivered.
- **State column migration ordering** (PR #111365) — ensures additive columns run before schema assertion, fixing a beta.2 startup blocker.

Several PRs were opened today for ongoing improvements: session list performance (PR #114842), agent tool rename `cron` → `automations` (PR #114841), and watched-session awareness for the model (PR #114835).

## Community Hot Topics

The following issues and PRs have the highest engagement (comments + reactions):

1. **Issue #75** — *Linux/Windows Clawdbot Apps* (115 comments, 80 👍)  
   *[openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)*  
   The community strongly desires desktop apps beyond macOS/iOS/Android. This long-open feature request (since Jan 2026) remains a top priority signal.

2. **Issue #7707** — *Memory Trust Tagging by Source* (22 comments)  
   *[openclaw/openclaw Issue #7707](https://github.com/openclaw/openclaw/issues/7707)*  
   Users are concerned about memory poisoning from untrusted content. A systematic trust-tagging feature would prevent injection attacks via web pages or third-party skills.

3. **Issue #91588** — *Critical: Gateway Memory Leak* (21 comments, P0)  
   *[openclaw/openclaw Issue #91588](https://github.com/openclaw/openclaw/issues/91588)*  
   RSS grows from 350MB to 15.5GB over days, causing OOM crashes. This is the most severe stability issue in the project.

4. **Issue #102020** — *Second message fails with “reply session initialization conflicted”* (16 comments)  
   *[openclaw/openclaw Issue #102020](https://github.com/openclaw/openclaw/issues/102020)*  
   A cross-channel bug affecting Signal and other platforms after the first turn succeeds.

5. **Issue #86519** — *Agent repeats identical replies 2-10x on Telegram after 5.20 update* (14 comments)  
   *[openclaw/openclaw Issue #86519](https://github.com/openclaw/openclaw/issues/86519)*  
   A regression that only partially improved in 5.22; users still see duplicates.

**Underlying needs:**  
- Cross-platform availability (Linux/Windows) is a major gap.  
- Security and trust boundaries are top-of-mind (memory tags, masked secrets, denylists).  
- Memory/performance stability is critical for production use.

## Bugs & Stability

Today’s bug landscape includes several high-severity issues, many with fix PRs in progress.

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| #91588 | P0 | Gateway memory leak (RSS 350MB → 15.5GB, OOM crashes) | No fix PR referenced |
| #109867 | P0 | Beta.2 state migration creates index before column, blocking startup | Closed (fix merged) |
| #102020 | P1 | Second message fails with “reply session initialization conflicted” | Closed (fix merged) |
| #113306 | P1 | SQLite snapshot restore lacks crash & identity guarantees | Open, no fix PR |
| #84569 | P1 | WhatsApp session stalls on long model_call | Closed (fix merged) |
| #87109 | P1 | Gateway heap grows to 1073MB+ at idle, cron jobs fail silently | Open, no fix PR |
| #113434 | P1 | Codex sessions.reset reuses retired session ID, exhausts RAM | Open, no fix PR |
| #113323 | P1 | LLM idle timeout aborts runs during reasoning-token streaming | Open, no fix PR |
| #86519 | P1 | Agent repeats identical replies 2-10x on Telegram (regression) | Open, no fix PR |
| #87756 | P1 | Prompt-launched Lobster workflow hangs on nested /tools/invoke | Open, no fix PR |
| #85251 | P1 | Codex app-server emits turn/started then goes silent | Open, no fix PR |
| #94846 | P2 | Cron isolated session false positive: tool error marks success as failed | Closed (fix merged) |
| #10659 | P1 | Feature request: Masked Secrets for API keys (also security) | Open, linked PR? No |

Several P1 issues remain open without clear fix PRs, particularly memory-related #87109 and #113434, and the Telegram duplicate regression #86519.

## Feature Requests & Roadmap Signals

Active feature requests today suggest a strong community push toward **security hardening** and **platform expansion**:

- **#75** – Linux/Windows Clawdbot Apps (long-running, high votes)
- **#7707** – Memory Trust Tagging by Source
- **#10659** – Masked Secrets (prevent agent from reading raw API keys)
- **#6615** – Denylist support for exec-approvals
- **#7722** – Filesystem Sandboxing Config
- **#12219** – Skill Permission Manifest Standard
- **#10687** – Fully dynamic model discovery (OpenRouter etc.)
- **#9016** – Expose OpenRouter usage cost to agent runtime
- **#9986** – Trigger model fallback on context length exceeded
- **#8299** – Config option to suppress sub-agent announce
- **#6599** – Add /models test-fallback command

Most of these are marked P2 and still need maintainer/product decisions. Given the security focus, **Masked Secrets** (#10659) and **Memory Trust Tagging** (#7707) are strong candidates for inclusion in the next release, as they align with ongoing security audit PRs (e.g., #112606). The **Linux/Windows desktop apps** (#75) has been open for 7 months and may require a longer roadmap commitment.

## User Feedback Summary

User pain points expressed in today’s most active issues:

- **Memory leaks and crashes** (#91588, #87109, #113434) — users report complete system instability on macOS and Windows, with silent job failures.
- **Duplicate replies** (#86519) — a regression that undermines trust in the assistant.
- **Session initialization conflicts** (#102020) — disrupts the core conversation experience across channels.
- **Unclear error messages** (#64664, #109672) — stale approval buttons show “unknown or expired approval id”, and AWS Guardrail blocks are silent.
- **Missing platform support** (#75) — Linux/Windows users feel neglected.
- **Context bloat** (#67419) — bootstrap files consumed 20-30% of tokens per turn, wasting money and time.
- **No multi-line input** in TUI (#10118) — poor terminal UX for power users.
- **Accessibility** (#9637) — emojis and unicode symbols make TUI unusable with screen readers.

Satisfaction is notable where fixes land quickly: the beta.2 migration blocker (#109867) was fixed the same day, and several P1 bugs were closed with merged PRs (e.g., #102020, #84569).

## Backlog Watch

Several high-importance issues have been open for months and still require maintainer review or product decision:

- **Issue #75** – Linux/Windows Clawdbot Apps (open since Jan 1, 115 comments)  
  *[openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)*  
  Marked `clawsweeper:needs-maintainer-review`, `needs-product-decision`. No PRs exist.

- **Issue #7707** – Memory Trust Tagging by Source (open since Feb 3, 22 comments)  
  *[openclaw/openclaw Issue #7707](https://github.com/openclaw/openclaw/issues/7707)*  
  Same review labels; no fix PR.

- **Issue #10659** – Masked Secrets (open since Feb 6, 15 comments, 4 👍)  
  *[openclaw/openclaw Issue #10659](https://github.com/openclaw/openclaw/issues/10659)*  
  Needs security review and product decision.

- **Issue #67419** – Session context bloat (open since Apr 15, 10 comments)  
  *[openclaw/openclaw Issue #67419](https://github.com/openclaw/openclaw/issues/67419)*  
  Needs live repro and product decision.

- **PR #112606** – Audit live plugin collectors (open since Jul 22, ready for maintainer look)  
  *[openclaw/openclaw PR #112606](https://github.com/openclaw/openclaw/pull/112606)*  
  A security fix that has been waiting for maintainer review for 6 days.

- **PR #112627** – Stop gateway call from running local state migrations (open since Jul 22, ready for maintainer look)  
  *[openclaw/openclaw PR #112627](https://github.com/openclaw/openclaw/pull/112627)*  
  Same; addresses a daily pain point for monitoring setups.

The backlog of items needing priority attention includes both long-standing feature requests and security-sensitive fixes that could unblock users.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Ecosystem
**2026-07-28**

## 1. Ecosystem Overview

The open-source personal AI assistant landscape in mid-2026 is characterized by rapid fragmentation and specialization, with most projects originating as forks or rewrites of the core OpenClaw reference architecture. Activity clusters around two axes: all-in-one agent platforms (OpenClaw, CoPaw, IronClaw, ZeroClaw) competing on feature breadth, and modular frameworks (NanoBot, Hermes Agent, Hermes variants) optimizing for developer experience and channel extensibility. A universal theme across all projects is the tension between rapid feature shipping and production stability—every major project shows evidence of regressions introduced in recent releases, particularly around memory management, session state, and channel-specific reliability. Security hardening has emerged as a cross-cutting priority, driven by both community demand and proactive audits (ZeroClaw, CoPaw). The ecosystem is maturing, with several projects reaching or approaching v1.0 (IronClaw, CoPaw), while others remain in active consolidation (ZeroClaw v0.9.0 milestone, LobsterAI backlog cleanup).

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Project Health |
|---------|---------------------|-------------------|----------------|----------------|
| **OpenClaw** | 500 (262 closed) | 500 (219 merged) | v2026.7.2-beta.4 | 🔶 High activity, large backlog, critical memory leak (P0) |
| **NanoBot** | 64 (63 closed) | 36 (23 merged) | No new release | 🟢 Very active maintenance, high closure rate, backlog cleanup |
| **Hermes Agent** | 50 (11 closed) | 50 (10 merged) | No new release | 🟢 Very active, cross-platform bugs, fast response to regressions |
| **PicoClaw** | 5 (0 closed) | 4 (0 merged) | v0.3.1 | 🟡 Moderate activity, stalled PRs, stale maintainer engagement |
| **NanoClaw** | 0 | 9 (1 merged) | No new release | 🟡 Steady incremental work, review bottleneck on older PRs |
| **NullClaw** | 0 (0 closed) | 1 (0 merged) | No new release | 🔴 Minimal activity, single stale dependabot PR (6+ weeks) |
| **IronClaw** | 39 (4 closed) | 50 (19 merged) | **v1.0.0 released Jul 27** | 🟢 Post-release bug bash, rapid fix turnaround, strong momentum |
| **LobsterAI** | 8 (0 closed) | 9 (5 merged) | No new release | 🟡 Moderate activity, critical data-corruption bug (#2393), stale items |
| **Moltis** | 0 (0 closed) | 5 (0 merged) | No new release | 🟡 Low activity, focused PRs, zero open issues (mature?) |
| **CoPaw** | 50 (35 closed) | 49 (15 merged) | v2.0.0.post3 / v2.0.1 | 🟢 High activity, responsive maintainers, channel reliability issues |
| **ZeptoClaw** | 0 | 0 | No activity | ⚫ Inactive |
| **ZeroClaw** | 48 (4 closed) | 50 (8 merged) | v0.8.3 | 🟢 Very active, security audit wave, pre-v0.9.0 hardening phase |

*Health: 🟢 = Strong (high closure rate, active maintainers); 🟡 = Moderate (some bottlenecks or stale items); 🔴 = Weak (low engagement, critical issues unresolved)*

## 3. OpenClaw's Position

OpenClaw maintains its position as the **largest and most active project** by an order of magnitude—500 issues and 500 PRs updated daily dwarfs even the next most active projects (IronClaw, ZeroClaw, CoPaw at ~50 each). Its advantages include:

- **Community scale**: 115 comments on the Linux/Windows desktop feature request (#75), indicating a deeply engaged user base that actively shapes the roadmap.
- **Plugin ecosystem**: Loopback host classification, Telegram reply flashing fixes, and gateway call migration show ongoing investment in the plugin architecture that many peers emulate.
- **Security focus**: Memory trust tagging (#7707), masked secrets (#10659), and filesystem sandboxing (#7722) are being debated at a maturity level ahead of most peers.

**Key disadvantages** relative to peers:
- **Backlog pressure**: 50% closure rate on issues/PRs is lower than NanoBot (98% issue closure) and CoPaw (70%), suggesting maintainer bandwidth is strained.
- **Critical stability gaps**: The P0 gateway memory leak (#91588, 350MB→15.5GB RSS) and P1 Telegram duplicate reply regression (#86519) have been open for extended periods without fix PRs—contrast with IronClaw, which merged v1.0.0 last week and is fixing bugs same-day.
- **Release cadence**: No stable release today despite intense activity; users on beta.2 face migration blockers (PR #111365, already fixed) and state column ordering issues.

**Technical approach differences**: OpenClaw's monolithic reference architecture prioritizes breadth over depth, while NanoBot (modular, Dream agent autonomy) and IronClaw (ground-up Rust rebuild in v1.0) take more opinionated architectural stances. ZeroClaw's security-by-design approach (postgres sessions, SOP control plane) contrasts with OpenClaw's more organic security evolution.

## 4. Shared Technical Focus Areas

The following requirements emerged across multiple projects, indicating ecosystem-wide priorities:

| Focus Area | Projects Affected | Specific Needs | Ecosystem Maturity |
|------------|------------------|----------------|-------------------|
| **Memory & State Management** | OpenClaw, NanoBot, CoPaw, ZeroClaw, LobsterAI | Trust tagging, consolidation reliability, vector index persistence, session ID stability, context bloat | ⬆️ Rapidly evolving; several projects shipping dedicated memory backends (NanoBot gitstore fix, CoPaw ReMe reranker, Moltis zvec) |
| **Security & Trust Boundaries** | OpenClaw, NanoBot, Hermes, ZeroClaw, CoPaw, LobsterAI, Moltis | Credential masking, tool allowlist bypass prevention, sandbox escaping, channel authorization, emergency stop | ⬆️ Accelerating; ZeroClaw security audit wave (8 S2+ bugs filed in 24h), CoPaw CDP exposure fix, Moltis operators list |
| **Cross-Platform & Channel Reliability** | All active projects | Windows/macOS parity, Feishu/DingTalk/Telegram/Signal specific bugs, localization gaps | ➡️ Steady improvement but persistent regressions; Feishu (CoPaw #5757), Signal (NanoClaw #3142), Telegram duplicates (OpenClaw #86519) |
| **Stability & Performance** | OpenClaw, NanoBot, Hermes, ZeroClaw, LobsterAI | Memory leaks, rate-limit cascading, session initialization conflicts, silent data loss, streaming freezes | ⬇️ Notable regressions; several P0/P1 bugs remain unfixed across major projects |
| **Model & Provider Flexibility** | NanoBot, CoPaw, OpenClaw, ZeroClaw, Hermes | Multi-provider fallback, custom endpoints, rate-limit handling, context length adaptation, provider-specific serialization | ➡️ Standardizing; custom model provider support now expected baseline, but implementations vary in quality |

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|-------|----------|
| **Primary Target User** | Power users, plugin developers | Tinkerers, self-hosters, multi-channel teams | Desktop-first, automation-focused | Enterprise, production deployments | Enterprise (Chinese market), Feishu/DingTalk users | Security-conscious, ops-focused |
| **Architecture** | Monolithic reference, plugin-driven | Modular, Dream autonomous agent | Desktop GUI + CLI, MCP server integration | Rust rearchitecture (v1.0), sandbox-first | Python-based, heavy channel integration | Rust, SOP control plane, declarative security |
| **Key Differentiator** | Community scale & breadth | Dream autonomous agent, skills marketplace | Desktop UX, prompt caching, wake words | Production-hardened v1.0 rewrite | Chinese enterprise channels, computer-use | Security-by-design, postgres sessions |
| **Channel Strategy** | Broad but uneven channel quality | Rich (Feishu, Discord, WhatsApp, etc.) | Desktop-centric, limited channels | Telegram + extension-based | Feishu/DingTalk first, then WeCom | Bluesky, Reddit, LINE, WhatsApp |
| **Memory Architecture** | Git-based (OpenClaw core) | Gitstore (dulwich) | Codex sessions | Reborn storage layer | ReMe with reranker | PostgreSQL session backend |
| **Community Engagement** | High but maintainer-bottlenecked | High closure rate, responsive | Fast regression fixes | Rapid post-release iteration | Responsive, many issues closed | Active security contributors |

## 6. Community Momentum & Maturity

### Tier 1: High Momentum / Rapid Iteration
- **IronClaw** – Peak momentum after v1.0.0 release; bug bash mode with same-day fix turnaround; Rust rearchitecture signals long-term architectural investment.
- **ZeroClaw** – Pre-v0.9.0 security hardening phase; high contribution velocity from security researchers; growing production deployment concerns.
- **CoPaw** – Major feature pipeline (computer-use, Chrome extension, context compression) alongside responsive bug fixing; strongest enterprise channel support.
- **OpenClaw** – Unmatched raw activity volume but showing strain: 50% closure rate, critical memory leak unresolved, long-standing feature requests (#75, #7707) without maintainer decisions.

### Tier 2: Steady Iteration / Stabilization
- **NanoBot** – High issue closure rate (98%) indicating effective backlog management; Dream autonomy and skills marketplace are maturing; approaching a stable release.
- **Hermes Agent** – Strong cross-platform focus with fast regression response; prompt caching and wake words signal investment in latency-sensitive UX.
- **NanoClaw** – Incremental improvements with review bottlenecks; Signal fixes and Dial channel addition show slow but steady expansion.

### Tier 3: Maintenance / Low Activity
- **PicoClaw** – Stalled PRs and stale maintainer engagement; critical MCP hang bug (#3269) unresolved; Japanese i18n PR (#3273) waiting for review.
- **LobsterAI** – Critical data-corruption bug (#2393) and installation blocker (#2395) without fix PRs; three-month-old stale items (#1241, #1277) indicate maintainer attention gaps.
- **Moltis** – Low activity but arguably mature (zero open issues); focused on infrastructure (ACP agent role, instrumentation) rather than user-facing features.
- **NullClaw** – Effectively inactive; single stale dependabot PR for six weeks.
- **ZeptoClaw** – No activity; project may be deprecated or dormant.

## 7. Trend Signals

### 1. Security Hardening Becomes Non-Negotiable
The concentration of security bugs across ZeroClaw (8 S2+ bugs in 24h), OpenClaw (masked secrets, memory trust tagging), CoPaw (tool protection bypass, CDP exposure), and Moltis (operators list) signals that **security is no longer optional** for production AI agents. Expect every major project to ship credential masking, sandbox boundaries, and authorization audit logs within 2-3 releases. For AI agent developers: **prioritize sandbox escape testing and channel authorization reviews** before production deployment.

### 2. Memory as a First-Class Platform Concern
Memory management is transitioning from "nice to have" to **core infrastructure**. Projects are investing in dedicated backends (ZeroClaw PostgreSQL, CoPaw ReMe reranker, Moltis zvec, NanoBot gitstore) and addressing trust boundaries (OpenClaw trust tagging, NanoBot Dream write protection). The convergence toward structured, persistent memory with security boundaries suggests **memory will become a pluggable platform service** akin to databases. For developers: **evaluate memory backends for your use case**—vector stores for semantic search (CoPaw, Moltis) vs. transactional stores for session state (ZeroClaw).

### 3. Multi-Provider Model Flexibility Is Now Baseline
Every active project addresses multi-provider support (NanoBot #1991, ZeroClaw #8720, CoPaw #5609, OpenClaw #9986). The ecosystem is converging on **provider-agnostic interfaces with graceful fallback**—a requirement driven by rate limits (LobsterAI #1240, Hermes #65735), cost management (OpenClaw #9016), and regional provider availability. For developers: **assume no single provider guarantees availability** and design for fallback chains and context-length awareness.

### 4. Autonomous Agents Are Mainstreaming
NanoBot's Dream agent, CoPaw's background tool-call offload (#6151), Hermes' cron/automations (OpenClaw #114841), and ZeroClaw's SOP control plane (#8288) indicate **autonomous agent capabilities are transitioning from experimental to production**. These features introduce new failure modes: Dream overwriting user skills (NanoBot #4667), SOP jobs without cancellation paths (ZeroClaw #9425), and session-semantic confusion between user and agent turns. For developers: **implement explicit guardrails and operator overrides** before enabling autonomous features.

### 5. Platformization & Marketplaces Emerging
NanoBot's skills.sh marketplace (PR #5116), IronClaw's IronHub integration (#6731), and CoPaw's Chrome extension plugin ecosystem (#6157) signal a shift toward **app-store models for agent capabilities**. This mirrors the MCP (Model Context Protocol) momentum and suggests a future where agents discover and install skills dynamically. For developers: **structure skills/tools as self-describing packages with permissions manifests** (OpenClaw #12219) to prepare for marketplace distribution.

### 6. Desktop & Mobile Parity Remains a Gap
OpenClaw's #75 (Linux/Windows desktop apps, 115 comments, 7+ months unresolved) and PicoClaw's headless deployment friction (#3276) highlight **persistent demand for polished desktop experiences**. Meanwhile, Hermes Agent's desktop-centric approach and IronClaw's WebUI focus show partial solutions. For developers targeting consumer or enterprise users: **invest in at least one native desktop interface** or risk alienating users who need always-on, low-friction assistant access.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-28

## 1. Today’s Overview
The project saw a high level of maintenance activity over the past 24 hours: **64 issues** were updated (63 closed, 1 remaining open) and **36 pull requests** were touched (23 merged/closed, 13 open). No new releases were published. The bulk of issue closures appears to be a sweep of long-standing bug reports and feature requests, suggesting the maintainer has been performing a backlog cleanup. On the PR side, several high-priority fixes landed, covering git object ID encoding, WebUI composer jitter, Dream input integrity, and model preset stability. Community engagement remains moderate, with several older threads (from March–July) being resolved or re‑evaluated.

---

## 2. Releases
None. No new versions were released in the past 24 hours.

---

## 3. Project Progress (Merged/Closed PRs Today)
Of the 23 merged/closed PRs, the following represent the most significant advances:

- **`#5124`** – `fix(gitstore): return real git object ids instead of hex-of-hex`  
  Resolved a double‑encoding bug where `dulwich` hex strings were incorrectly passed to `.hex()`, corrupting every memory‑store commit ID.  
  *(merged)* [🔗 PR #5124](https://github.com/HKUDS/nanobot/pull/5124)

- **`#5123`** – `docs: improve README landing page`  
  Revamped the project README with a clear H1, GitHub star CTA, user‑focused feature descriptions, and actionable contribution paths.  
  *(merged)* [🔗 PR #5123](https://github.com/HKUDS/nanobot/pull/5123)

- **`#5121`** – `fix(webui): prevent composer resize scroll jitter`  
  Stopped automatic scroll‑following on textarea resize by distinguishing user input from layout changes; added regression tests.  
  *(merged)* [🔗 PR #5121](https://github.com/HKUDS/nanobot/pull/5121)

- **`#5119`** – `fix(webui): soften model selector emphasis`  
  Reduced the model label weight and corrected an opacity token to match the intended visual priority.  
  *(merged)* [🔗 PR #5119](https://github.com/HKUDS/nanobot/pull/5119)

- **`#5114`** – `fix(memory): preserve Dream input integrity`  
  Ensures the Dream (autonomous agent) receives full conversation history and can write only to canonical memory files; restricts modification of non‑managed skills.  
  *(merged)* [🔗 PR #5114](https://github.com/HKUDS/nanobot/pull/5114)

- **`#5113`** – `fix(webui): stabilize repeated model preset rows`  
  Fixed React key collisions that caused duplicate or missing preset rows when the same fallback preset appeared more than once.  
  *(merged)* [🔗 PR #5113](https://github.com/HKUDS/nanobot/pull/5113)

- **`#5080`** – `feat(brand): migrate README and WebUI assets to SVG`  
  Replaced PNG cover images with scalable SVG, removed font dependency, and updated favicon.  
  *(merged)* [🔗 PR #5080](https://github.com/HKUDS/nanobot/pull/5080)

- **`#5077`** – `feat(webui): switch model presets from the composer`  
  Users can now long‑press a preset label to cycle through all configured models directly from the chat composer.  
  *(merged)* [🔗 PR #5077](https://github.com/HKUDS/nanobot/pull/5077)

- **`#5076`** – `fix(webui): honor custom gateway port with Vite`  
  WebUI now correctly proxies through a non‑default gateway port when `NANOBOT_API_URL` is set.  
  *(merged)* [🔗 PR #5076](https://github.com/HKUDS/nanobot/pull/5076)

Also closed (but not merged as PRs) were several DRY/conflict fixes and documentation tweaks, including `#1683` (LLM logging env var) whose conflict was finally resolved.

---

## 4. Community Hot Topics
The most active discussions (by comment count) that were updated today reflect a mix of long‑standing user needs and newly surfaced regressions:

### Issues
- **`#1991`** – *"希望nanobot可以支持多个custom（support multiple custom model providers）”* (9 comments)  
  User wants the ability to define and switch between multiple custom model providers. The request remained open for months before being closed today.  
  [🔗 Issue #1991](https://github.com/HKUDS/nanobot/issues/1991)

- **`#3123`** – *"Problem with cron/scheduled task message send”* (8 comments)  
  Cron‑sent messages tie to the cron session, preventing users from later asking follow‑up questions or requesting corrections.  
  [🔗 Issue #3123](https://github.com/HKUDS/nanobot/issues/3123)

- **`#2570`** – *"local ollama config - getting 404 page not found”* (7 comments)  
  Users running Ollama locally face connectivity issues – the gateway claims to listen on port 18790 but does not actually bind, and model responses fail with 404.  
  [🔗 Issue #2570](https://github.com/HKUDS/nanobot/issues/2570)

- **`#2329`** – *"custom model provider works on CLI but breaks on feishu channel”* (6 comments)  
  Provider works via `nano agent` but throws HTTP 401 on Feishu, indicating channel‑specific configuration gaps.  
  [🔗 Issue #2329](https://github.com/HKUDS/nanobot/issues/2329)

- **`#1174`** – *"memory consolidation can take long or even fail”* (5 comments, 2 👍)  
  Switching between cloud and local models can leave local models unable to consolidate memory, blocking new sessions.  
  [🔗 Issue #1174](https://github.com/HKUDS/nanobot/issues/1174)

### Pull Requests
- **`#5112`** (open) – *"feat(webui): expose Dream runs as read‑only sessions”*  
  Introduces a collapsible, read‑only session group for Dream outputs, with reasoning, tool calls, and file previews.  
  [🔗 PR #5112](https://github.com/HKUDS/nanobot/pull/5112)

- **`#4667`** (open) – *"fix: protect user skills from dream writes”*  
  Adds a `dream_managed: true` frontmatter requirement so Dream cannot overwrite user‑created skills. Addresses #4075.  
  [🔗 PR #4667](https://github.com/HKUDS/nanobot/pull/4667)

- **`#5116`** (open) – *"feat(webui): add skills.sh marketplace and skill management”*  
  Adds a Discover tab backed by `skills.sh`, including leaderboards, install‑history sparklines, and one‑click installation.  
  [🔗 PR #5116](https://github.com/HKUDS/nanobot/pull/5116)

The underlying needs center on **multi‑provider flexibility**, **cron/follow‑up UX**, **local model compatibility**, and **Dream safety boundaries** – all recurring themes as NanoBot gains autonomous features.

---

## 5. Bugs & Stability
Several critical or high‑priority bugs were reported or confirmed today:

- **`#4792`** – *"/stop silently discards pending queue messages”*  
  The `/stop` command drains the pending queue with `get_nowait()` but never re‑publishes those messages, causing permanent loss. This is a **P0 data‑loss bug**. A fix is not yet attached.  
  [🔗 Issue #4792](https://github.com/HKUDS/nanobot/issues/4792)  
  *Severity: Critical*

- **`#4805`** – *"suppress(Exception) on prepare_call silently swallows tool validation errors”*  
  `prepare_call` is wrapped in `suppress(Exception)`, so any validation bug or type error is silently ignored and the tool runs with un‑prepared arguments.  
  [🔗 Issue #4805](https://github.com/HKUDS/nanobot/issues/4805)  
  *Severity: High* – makes debugging tool issues nearly impossible.

- **`#5120`** (open PR) – *"fix: session consolidation drops uploaded media paths”*  
  When media paths are stored only in the `media[]` field (not inlined), session consolidation discards them. The PR from shakewingo directly addresses this.  
  [🔗 PR #5120](https://github.com/HKUDS/nanobot/pull/5120)  
  *Severity: High* (data loss on file attachments)

- **`#5117`** (open PR) – *"fix(session): tolerate invalid idle‑compaction timestamps”*  
  An invalid persisted `updated_at` can crash auto‑compaction. Guard added.  
  [🔗 PR #5117](https://github.com/HKUDS/nanobot/pull/5117)  
  *Severity: Medium* (could prevent session cleanup)

- **`#5122`** (open PR) – *"fix(agent): read document attachments on demand”*  
  Currently, all document uploads (PDF, DOCX, etc.) are sent to the vision path. The PR separates image and document handling, reading documents via `read_file` only when needed.  
  [🔗 PR #5122](https://github.com/HKUDS/nanobot/pull/5122)  
  *Severity: Medium* (poor UX, but no data loss)

- **`#5126`** (open PR) – *"fix(gitstore): return real git object ids instead of hex-of-hex”*  
  Double‑encoding of commit IDs – same fix as #5124 but in a separate branch.  
  [🔗 PR #5126](https://github.com/HKUDS/nanobot/pull/5126)  
  *Severity: High* (memory store corruption without fix)

- **`#3559`** – *"WebSocket cannot replace webhooks for proactive message delivery”*  
  In multi‑tenant setups, proactive messages (cron, heartbeat) are not delivered through WebSocket, forcing reliance on webhooks.  
  [🔗 Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)  
  *Severity: Medium* (limitation, not a crash)

Older issues with ongoing impact:  
- `#1174` (memory consolidation failure) – still unfixed; users cannot start new sessions when local model fails to consolidate.  
- `#2570` (Ollama 404 / port not binding) – closed today, but workarounds may be needed.  
- `#2329` (Feishu channel vs. custom provider) – closed, but underlying channel‑provider isolation may still be fragile.

---

## 6. Feature Requests & Roadmap Signals
The following feature requests were either closed (suggesting they were addressed or deferred) or are being actively implemented:

### Likely to land in next version
- **Multiple custom model providers** – Issue #1991 closed; a PR or configuration change may already be in the works.
- **Dream read‑only sessions in WebUI** – PR #5112 open and advancing.
- **Skills marketplace integration** – PR #5116 (skill management via skills.sh) is very close to merge.
- **Unified extension platform** – PR #5098 (still open) introduces a native Python extension API. This could be a major milestone for future plugin capabilities.
- **LINE Messaging API channel** – PR #5115 adds support for LINE, the dominant messenger in East Asia.

### User‑requested enhancements with high interest
- **Configurable or removable cat emoji in system prompt** – Issue #2747 ([🔗](https://github.com/HKUDS/nanobot/issues/2747))  
  Low effort, high customization value. Now closed – may be implemented.
- **Memory/tool toggles for low‑quality models** – Issue #1881 ([🔗](https://github.com/HKUDS/nanobot/issues/1881))  
  Users want config switches to disable memory updates and tools when using weak models.
- **Skill/developer shared with channels** – Issue #1328 ([🔗](https://github.com/HKUDS/nanobot/issues/1328))  
  Skills created via agent CLI are not available through gateway – a fundamental multi‑channel usability gap.
- **Whisper turbo model** – Issue #1584 ([🔗](https://github.com/HKUDS/nanobot/issues/1584))  
  Low effort: switch from `whisper-large-v3` to the faster `turbo` variant.

### Longer‑term signals
- **Plugin system (similar to openclaw)** – raised in issue #1881. The new extension platform (PR #5098) is a step in this direction.
- **Rate‑limit handling** – Issue #1558 ([🔗](https://github.com/HKUDS/nanobot/issues/1558))  
  Users want automatic retry on 429 errors.

---

## 7. User Feedback Summary
From the issues touched today, user sentiment and pain points can be summarized:

- **Satisfaction**: Users appreciate the custom provider support when it works (CLI), and the project’s rich channel support (Feishu, Discord, WhatsApp, etc.). The WebUI improvements (model switcher, Dream view) show active investment in UX.
- **Dissatisfaction / friction**:
  - **Local model struggles**: Multiple reports about Ollama, LM Studio, and other local providers failing to connect. Error messages are cryptic (“No API key configured” when key is set). The learning curve for self‑hosters is steep.
  - **Inconsistent behavior between channels**: Custom providers work in CLI but fail on Feishu (#2329); skills created via agent are invisible to gateway (#1328); cron messages are tied to a session (#3123).
  - **Data loss fears**: `/stop` discards pending messages (#4792); session consolidation drops media paths (#5120); memory consolidation can fail entirely (#1174).
  - **Dream (autonomous) safety**: Users explicitly worried about Dream overwriting their skills. PR #4667 directly addresses this with a `dream_managed` frontmatter guard. Positive reception expected.
- **Use case diversity**: Users range from Tinkerers on Raspberry Pi running Qwen 0.5B to enterprise teams integrating Feishu and WhatsApp. The multi‑tenant cron and proactive delivery gaps (#3559) suggest production deployments are growing.

---

## 8. Backlog Watch
Issues and PRs that have languished or lack recent maintainer attention:

- **`#1174`** – *Memory consolidation failure* (created Feb 25, 5 comments, 2 👍)  
  Still open. No fix PR attached. Blocks users with mixed model setups.  
  [🔗 Issue #1174](https://github.com/HKUDS/nanobot/issues/1174)

- **`#1328`** – *Agent and gateway don’t share skills* (created Feb 28, 2 comments)  
  Unanswered by maintainers. A fundamental usability issue for multi‑channel deployments.  
  [🔗 Issue #1328](https://github.com/HKUDS/nanobot/issues/1328)

- **`#1558`** – *Rate limit handling* (created Mar 5, 2 comments)  
  No maintainer response. Growing concern as users integrate rate‑limited providers.  
  [🔗 Issue #1558](https://github.com/HKUDS/nanobot/issues/1558)

- **`#4792`** – */stop data loss* – reported July 6, still not assigned. Critical bug.  
  [🔗 Issue #4792](https://github.com/HKUDS/nanobot/issues/4792)

- **`#3559`** – *WebSocket vs. webhook proactive delivery* – reported April 30, 3 comments. No tagged fix.  
  [🔗 Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)

- **PR `#5098`** – *Unified extension platform* – opened July 26, no activity from maintainers yet. Could become stale.  
  [🔗 PR #5098](https://github.com/HKUDS/nanobot/pull/5098)

Overall, today’s activity indicates strong maintainer engagement on critical regression fixes and WebUI polish, while a few longstanding architectural issues (skill sharing, memory consolidation, rate‑limit resilience) still require attention.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-28

## Today's Overview
The project saw **very high activity** with 50 issues and 50 pull requests updated in the last 24 hours. Of those, 39 issues remain open/active (11 closed) and 40 PRs are open (10 merged/closed). No new release was published today. The majority of activity revolves around **cross-platform bugs** (Windows/macOS), **desktop app regressions**, and **infrastructure improvements** (prompt caching, gateway durability). The community is actively contributing fixes for long-standing platform compatibility issues, and maintainers are responding with targeted PRs.

## Releases
No new releases today.

## Project Progress (Merged/Closed PRs)
Ten pull requests were merged or closed today, including:

- **Auto‑formatting PRs** – Two automated `npm run fix` PRs ([#73023](https://github.com/NousResearch/hermes-agent/pull/73023), [#73019](https://github.com/NousResearch/hermes-agent/pull/73019)) were merged to keep JS codebase clean.
- **Desktop UI improvement** – [#72893](https://github.com/NousResearch/hermes-agent/pull/72893) (merged) collapses a turn’s tool activity into a single, live‑ticking line, reducing visual clutter in the transcript.
- **Other closed PRs** – Several smaller fixes were merged, including improvements to MCP server lifecycle ([#72667](https://github.com/NousResearch/hermes-agent/pull/72667)), desktop i18n config ([#66757](https://github.com/NousResearch/hermes-agent/pull/66757)), and keyboard layout handling ([#46369](https://github.com/NousResearch/hermes-agent/pull/46369)).

These changes signal ongoing investment in **desktop UX** and **code quality automation**.

## Community Hot Topics
The most discussed issues and PRs (by comment count) reveal key user concerns:

- **#67600** – *Desktop session sidebar empty for `default` profile only* (13 comments). Users report that after an update, the sidebar shows no sessions for the default profile while named profiles work fine. Backend confirms data is served. [Issue link](https://github.com/NousResearch/hermes-agent/issues/67600)
- **#61396** – *macOS terminal spawn‑helper execute bit missing* (5 comments). Users on Apple Silicon see `posix_spawnp failed` because `node-pty`’s helper loses its executable flag in the app bundle. [Issue link](https://github.com/NousResearch/hermes-agent/issues/61396)
- **#63177** – *Windows search_files fails with absolute paths* (5 comments, 1 👍). `rg` cannot resolve MSYS‑rewritten paths (`/d/...`) when invoked via native Windows ripgrep. [Issue link](https://github.com/NousResearch/hermes-agent/issues/63177)
- **#68339** – *Mixed‑batch tool execution changes early‑session behavior* (4 comments). Users observe front‑loaded tool calls after a recent commit, affecting enforcement‑gated models. [Issue link](https://github.com/NousResearch/hermes-agent/issues/68339)
- **#46369** – *Keyboard shortcuts ignore Dvorak layouts* (3 comments, 1 👍). Closed today via a merged PR – a welcome fix for non‑QWERTY users. [Issue link](https://github.com/NousResearch/hermes-agent/issues/46369)

The underlying needs are **cross‑platform parity** (Windows, macOS), **regression stability**, and **respect for user‑configurable keyboard layouts**.

## Bugs & Stability
Several **critical and high‑priority bugs** were reported or updated today, with fix PRs already open for some:

| Severity | Bug | Status | Fix PR? |
|----------|-----|--------|---------|
| **P1** | [**#72975**](https://github.com/NousResearch/hermes-agent/issues/72975) – Interrupt/abort silently no‑ops when `force_close_tcp_sockets()` finds 0 sockets, leaving requests alive for minutes. | Open | None yet |
| **P1** | [**#72905**](https://github.com/NousResearch/hermes-agent/issues/72905) – HTTP 422 on tool‑content permanently kills a session. OpenRouter users affected. | Open | [#73027](https://github.com/NousResearch/hermes-agent/pull/73027) (classify 422) |
| **P2** | [**#72971**](https://github.com/NousResearch/hermes-agent/issues/72971) – Desktop GUI sends prompt to wrong session after switching while model is streaming. | Open | None yet |
| **P2** | [**#42376**](https://github.com/NousResearch/hermes-agent/issues/42376) – macOS `LimitLoadToSessionType` breaks `launchctl bootstrap` on macOS Tahoe. | Open | None yet |
| **P2** | [**#62397**](https://github.com/NousResearch/hermes-agent/issues/62397) – Background review fork can’t patch skills due to read‑before‑write guard. | Open | None yet |
| **P2** | [**#69107**](https://github.com/NousResearch/hermes-agent/issues/69107) – TUI `truncate_before_user_ordinal` rejects valid ordinals when another client writes. | Open | None yet |
| **P1 (gateway)** | [**#73020**](https://github.com/NousResearch/hermes-agent/pull/73020) – PR to flush pending messages before shutdown clear, preventing data loss. | Open PR | [#73020](https://github.com/NousResearch/hermes-agent/pull/73020) |

Additionally, a **fix for Windows GitBash path normalization** is proposed in [#69605](https://github.com/NousResearch/hermes-agent/pull/69605), and a **fix for stale MCP `serve` processes** was closed with [#72667](https://github.com/NousResearch/hermes-agent/pull/72667).

## Feature Requests & Roadmap Signals
Notable feature requests and PRs suggest the following directions:

- **Prompt‑cache prewarm** – [#73017](https://github.com/NousResearch/hermes-agent/pull/73017) aims to reduce first‑message latency from ~20s to ~4s in TUI/desktop. Likely to land in the next minor release.
- **On‑device wake words** – [#70509](https://github.com/NousResearch/hermes-agent/pull/70509) adds open‑vocabulary wake phrases and voice routing (CLI/TUI/desktop). Experimental but heavily invested by the contributor.
- **Multiple OpenAI/Codex subscriptions** – [#65735](https://github.com/NousResearch/hermes-agent/issues/65735) requests fallback between subscriptions when rate‑limited. Already has a merge on `main` (sweeper:implemented‑on‑main).
- **Slack gateway progress cards** – [#29483](https://github.com/NousResearch/hermes-agent/issues/29483) (2 comments, 1 👍) asks for rich plan cards instead of plain text progress updates.
- **Discord durable thread lifecycle** – [#73008](https://github.com/NousResearch/hermes-agent/pull/73008) adds a run‑start marker, explicit timeout classification, and terminal message. Strengthens gateway reliability.

**Prediction for next version (v0.17.x?)**: Prompt‑cache prewarm and the Discord thread lifecycle PR are likely candidates for inclusion, along with the 422 classification fix and the gateway shutdown data‑loss fix.

## User Feedback Summary
Users express **dissatisfaction** with regressions introduced in recent updates (empty sidebar, session switching confusion, tool behavior shifts) and ongoing **platform‑specific issues** (Windows path handling, macOS exec bits, Dvorak keyboard). The community appreciates **quick resolution** of reported bugs (e.g., Dvorak fix merged today) and is **enthusiastic** about performance optimizations (cache prewarm) and new UX features (desktop pet animations, collapsed tool rows). Pain points cluster around **session state consistency** and **cross‑platform compatibility**, especially for Windows and macOS users.

## Backlog Watch
Issues and PRs that have remained open for an extended period with no maintainer response or merge:

| Item | Created | Last Update | Description | Priority |
|------|---------|-------------|-------------|----------|
| [#12299](https://github.com/NousResearch/hermes-agent/pull/12299) (PR) | Apr 18 | Jul 28 | Mattermost fix: prefer metadata thread root over stale reply_to. Still open after 3+ months. | P3 |
| [#26037](https://github.com/NousResearch/hermes-agent/issues/26037) | May 15 | Jul 27 | Feishu: reply‑to‑image loses parent context. 4 comments, no fix PR. | P3 |
| [#33489](https://github.com/NousResearch/hermes-agent/issues/33489) | May 27 | Jul 27 | BlueBubbles adapter: need group chat filtering. 2 comments. | P3 |
| [#29483](https://github.com/NousResearch/hermes-agent/issues/29483) | May 20 | Jul 28 | Slack progress draft cards. 2 comments, 1 👍, no movement. | P3 |
| [#61396](https://github.com/NousResearch/hermes-agent/issues/61396) | Jul 9 | Jul 28 | macOS terminal spawn‑helper execute bit. 5 comments, no fix PR. | P2 |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | Jul 12 | Jul 27 | Windows search_files absolute path. 5 comments, 1 👍, no fix PR. | P2 |

These items represent **unresolved community requests and bugs** that may benefit from maintainer prioritization, especially the Feishu context loss and Windows path issues.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-28

## 1. Today's Overview
Project activity is moderate, with 5 open issues and 4 open pull requests updated in the last 24 hours. No issues or PRs were closed or merged today, indicating a steady state of ongoing work rather than a sprint closure. Several items carry the `[stale]` label, suggesting they have not seen maintainer interaction for some time despite recent user updates. The community continues to file both bug reports and feature requests, with a focus on deployment automation, localization, and robustness of the agent loop.

## 2. Releases
No new releases today. The latest known version remains v0.3.1 (referenced in issue #3281). No migration notes or breaking changes to report.

## 3. Project Progress
No PRs were merged or closed today. The following open PRs received updates, indicating ongoing development:

- **#3273** (feat: Japanese localization) – Updated with no new comments; awaiting review.
- **#3271** (chore: refresh default model names for 9 providers) – Updated; likely pending merge.
- **#3270** (feat: DashScope TTS + WeChat audio sending) – Updated; still open.
- **#3200** (feat: configurable default fallback chain) – Last updated 2026-07-27, but open since July 1 with no maintainer feedback.

## 4. Community Hot Topics
All issues and PRs have exactly one comment and zero reactions, so no single item dominates discussion. However, the following topics are worth highlighting due to their practical impact:

- **#3276** – [Feature] Launcher support for externally-managed gateway (systemd) – Discusses friction in headless deployments where the launcher assumes ownership of the gateway lifecycle. Shows demand for better system integration.
- **#3272** – [Feature] Japanese localization – Complemented by PR #3273. A clear user-driven request backed by a nearly complete translation.
- **#3269** – [Bug] Agent loop hangs on MCP server failure – Directly affects usability; the chat interface becomes unresponsive.

Links:  
[#3276](https://github.com/sipeed/picoclaw/issues/3276)  
[#3272](https://github.com/sipeed/picoclaw/issues/3272)  
[#3269](https://github.com/sipeed/picoclaw/issues/3269)

## 5. Bugs & Stability
Three bug reports were updated today, ranked by severity:

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| #3269 | **High** | Agent loop hangs when MCP server connection fails; chat stops replying. | No |
| #3281 | **Medium** | Web UI chat input becomes very laggy with long history. | No |
| #3268 | **Low** | `exec` tool requires `action` parameter; default should be `"run"`. | No |

None of these bugs have associated fix PRs yet. The MCP hang (#3269) is the most urgent because it breaks the core user experience.

## 6. Feature Requests & Roadmap Signals
The following features were requested or prototyped today, indicating likely roadmap direction:

- **Systemd gateway detection** (#3276) – Suggests official support for running PicoClaw as a headless system service.
- **Japanese localization** (#3272, PR #3273) – A full translation is ready; high probability of inclusion in next minor release.
- **DashScope TTS and WeChat audio sending** (PR #3270) – Expands voice and messaging capabilities, likely for Asian markets.
- **Default model updates** (PR #3271) – Keeps provider lists current; maintenance work.  
Predict next version (0.4.0) will include the Japanese i18n, refreshed model defaults, and possibly the systemd gateway improvements.

## 7. User Feedback Summary
Real pain points expressed in today’s updates:

- **Deployment friction**: Running both `picoclaw gateway` and `picoclaw-launcher` as systemd services is not smooth; the launcher should detect external management and not fail on unknown channel types (#3276).
- **Missing localization**: Japanese-speaking users cannot use the WebUI in their language despite translated docs (#3272).
- **Tool reliability**: AI agents fail unpredictably when the `exec` tool’s `action` parameter is omitted; a simple default fix is requested (#3268).
- **Agent hang critical**: One user reports the entire chat freezes when an MCP server is unreachable (#3269).
- **UI performance**: Typing becomes slow after moderate conversation history, a clear UX regression (#3281).

Overall sentiment is constructive but frustrated by the lack of timely fixes or maintainer responses on these items.

## 8. Backlog Watch
Several important items have remained open without maintainer engagement:

- **#3200** – [PR] Configurable default fallback chain (opened Jul 1, last updated Jul 27, no comments). A substantial feature that adds UI and API support for model fallback. Needs maintainer review or feedback.
- **#3268** – [Bug] exec tool default action (opened Jul 19, 1 comment, no maintainer reply). Simple fix that could prevent many user errors.
- **#3269** – [Bug] MCP hang (opened Jul 20, 1 comment, no maintainer reply). Critical stability issue.
- **#3276** & **#3272** – Both marked `[stale]` yet updated recently, indicating they may be stuck awaiting triage. Maintainers should prioritize confirming or rejecting these feature requests.

Links:  
[#3200](https://github.com/sipeed/picoclaw/pull/3200)  
[#3268](https://github.com/sipeed/picoclaw/issues/3268)  
[#3269](https://github.com/sipeed/picoclaw/issues/3269)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-28

## Today's Overview
Activity on NanoClaw remains steady, with **9 pull requests updated in the last 24 hours**, all but one still open. One PR (#2598) was merged/closed, fixing a configuration loading issue. The project shows continued focus on **Signal integration fixes**, **composer reliability**, and **new channel support** (Dial). No new issues or releases were reported, indicating a period of stabilization and incremental improvement rather than major feature drops. The lower issue count suggests ongoing triage is moving quickly, though several open PRs have been pending for weeks, hinting at potential review bottlenecks.

---

## Releases
**None** — no new releases in the tracked period.

---

## Project Progress
**Merged/closed PRs today (1):**
- **#2598** (closed/merged) — `fix: load per-group CLAUDE.local.md by adding 'local' to settingSources`  
  Author: jonnychesthair-crypto | [PR #2598](https://github.com/nanocoai/nanoclaw/pull/2598)  
  ✅ Fixes how per-group local configuration fragments are resolved, improving agent customization across workspaces.

**Other notable open PRs advancing important areas:**
- **#2971** (open) — Adds `ncc` utility skill for host operational & health CLI.  
- **#3137** (open, core-team) — Fixes engagement consistency and exposes self-serve wiring controls (rejected invalid JS regexes, lets agents inspect their wirings).  
- **#3143** (open, core-team fix) — Preserves resolved approval card content (title, request details) after resolution, preventing disappearing UI state.  
- **#2685** (open) — Docs update for Signal: group typing indicators, outbound reactions, quote-reply fix.  
- **#3142** (open) — Fixes Signal attachment forwarding path (was dead `/workspace/extra/signal-attachments/`), now routes through mounted inbox.  
- **#3050** (open) — Adds Dial as a new channel choice in the setup wizard (feature skill).  
- **#3141** (open) — Fixes compose to respect `container.json` skill selection when building CLAUDE.md fragments.  
- **#2346** (open) — Fixes unknown slash commands being misclassified as `passthrough`, causing silent drops—now treated as normal chat.

---

## Community Hot Topics
**The most active PRs (updated today, no comments or reactions recorded) are all development-driven.** No strong community discussion signal is present in the data. The following attracted attention from multiple core-team contributors:

- **#3137** (Koshkoshinsk) — Engagement consistency and wiring controls. This touches agent autonomy and group-scoped behaviour, likely of interest to users running multi-agent deployments.  
- **#3050** (OmriBenShoham) — Dial integration. The addition of a new channel signals growing demand for messaging diversity beyond Signal and Slack.  
- **#3142** (ira-at-work) — Signal attachment fix. Image/file attachments are a critical feature for non-text communication; this fix addresses a clear pain point for Signal users.

No issues were opened or commented on, so community sentiment must be inferred from PR activity patterns.

---

## Bugs & Stability
Bugs fixed or addressed in open PRs (ranked by potential user impact):

| Severity | Bug | Fix PR | Summary |
|----------|-----|--------|---------|
| **High** | Signal image/file attachments broken (dead path) | #3142 | Attachments were unreachable in container; fix routes through mounted inbox. |
| **High** | Unknown slash commands silently dropped | #2346 | Misclassification caused `<message>` blocks to be absent; fix falls through to `category: 'none'`. |
| **Medium** | Resolved approval card buttons not cleared, body lost | #3143 | UI state inconsistency after approval; fix retains title/details. |
| **Medium** | `container.json` skill selection ignored when building CLAUDE.md | #3141 | Compose now respects explicit skill configuration. |
| **Low** | Per-group CLAUDE.local.md not loading properly | #2598 (merged) | Configuration loading now includes `local` in setting sources. |

All fix PRs are authored by core-team members or regular contributors, indicating active internal quality assurance.

---

## Feature Requests & Roadmap Signals
The following new features are in open PRs and likely candidates for the next release:

- **Dial channel integration** (#3050) — Adds Dial to the setup wizard and channel picker. A significant expansion of supported messaging platforms.  
- **Utility skill `ncc`** (#2971) — Host operational & health CLI tool, useful for debugging and monitoring agents in production.  
- **Group typing indicators & outbound reactions** for Signal (docs in #2685, not yet merged but implies code changes exist).  
- **Self-serve engagement wiring controls** (#3137) — Allows agents to inspect and request approved engagement-policy updates, empowering agent autonomy and group management.

No new issues request features, but the active pipeline suggests the maintainers are prioritising **multi-channel support**, **operational tooling**, and **agent self-service**.

---

## User Feedback Summary
No direct user comments were recorded in issues or PR comments today. However, the contents of the active PRs reveal implicit user pain points:

- **Signal attachment handling** (#3142) has been broken for users relying on multi-modal messaging.  
- **Slash command confusion** (#2346) likely frustrated users expecting familiar Slack-like commands to work.  
- **Approval card UI** (#3143) bug caused loss of context during decision-making.  
- **Custom configuration loading** (#2598, #3141) issues impacted users who use per-group CLAUDE.md overrides or skill-specific fragments.

Overall sentiment appears neutral-to-positive, as the community is actively contributing fixes and features rather than filing complaints.

---

## Backlog Watch
The following older open PRs have not been acted upon recently and may require maintainer attention:

| PR | Author | Opened | Last Updated | Days Open | Notes |
|----|--------|--------|--------------|-----------|-------|
| **#2346** (fix(formatter)) | SidhayaPravda618 | 2026-05-08 | 2026-07-27 | **81 days** | Oldest open PR; addresses silent message drop—moderate user impact, needs review. |
| **#2685** (docs(signal)) | ira-at-work | 2026-06-04 | 2026-07-27 | 54 days | Documentation PR; would benefit from merging to keep Signal docs in sync with code. |
| **#2971** (utility skill `ncc`) | zivisaiah | 2026-07-07 | 2026-07-27 | 21 days | Feature addition with guidelines followed; waiting for final approval. |
| **#2598** (per-group config fix) | jonnychesthair-crypto | 2026-05-23 | 2026-07-28 (merged) | — | Now closed; no longer a backlog item. |

The total of **8 open PRs** (excluding the just-merged #2598) indicates a healthy but slightly accumulating review queue. No commits or reviews are visible on the older items, so a maintainer-driven triage session would be beneficial.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-28

## 1. Today's Overview
Project activity remains minimal over the past 24 hours. No issues were updated, and only one pull request was refreshed (updated on 2026-07-27). No new releases or merges occurred. The single active PR is an automated dependency bump, indicating that no manual feature work or bug fixes were advanced today. The project appears to be in a low‑activity or maintenance phase.

## 2. Releases
No releases were published in the last 24 hours or in the recent data window.

## 3. Project Progress
No pull requests were merged or closed today. There are no features advanced or fixes completed to report.

## 4. Community Hot Topics
The only active pull request is:

- **[#956 – [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)**  
  Author: `dependabot[bot]` | Created: 2026-06-15 | Updated: 2026-07-27 | Comments: 0 | 👍: 0  
  This PR updates the base Docker image from Alpine 3.23 to 3.24. No community discussion or reactions are present, suggesting low engagement from users or maintainers.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted or discussed in the observed period. No clear roadmap signals can be inferred.

## 7. User Feedback Summary
No user feedback, pain points, or use‑case reports are available in the recent data. The project appears to lack active user engagement in issues or PR discussions.

## 8. Backlog Watch
- **PR #956** – The Docker dependency bump has been open for over six weeks (since 2026‑06-15) with no maintainer action. While low‑risk, it remains unmerged and may indicate a need for maintainer attention to keep CI/Docker builds current.  
  [View PR #956](https://github.com/nullclaw/nullclaw/pull/956)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-28

## 1. Today’s Overview

The project is in a period of intense activity following yesterday’s landmark **v1.0.0 stable release** — a ground‑up rearchitecture of the agent runtime, storage, extension host, and web UI. In the last 24 hours, 39 issues and 50 pull requests were updated, with 19 PRs merged/closed and 4 issues resolved. The community is heavily engaged in bug‑bash testing of the new Reborn architecture, surfacing multiple production‑readiness regressions (e.g., streaming reconnection loops, OAuth failures, and incorrect model hallucinations about available integrations). The maintainers are responding rapidly, with several fix PRs already in flight. Overall project health is strong, with clear momentum toward hardening the v1 release for general availability.

## 2. Releases

**ironclaw‑v1.0.0** — released 2026-07-27  
[Release page](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.0.0)

> *First stable release of a rearchitected IronClaw.*  
> This is **not** an increment on the 0.29.x line — it is a ground‑up rebuild of the agent runtime, storage, extension host, and web UI.  
> **Migration note:** The `ironclaw` binary is now the rearchitected CLI. The previous v1 monolith is available as `ironclaw-legacy`. Users upgrading from the 0.x series should consult the migration guide (tracked in [#6725](https://github.com/nearai/ironclaw/issues/6725)). Breaking changes are expected; no automatic migration path exists for legacy databases or extension configurations.

No other releases were published today.

## 3. Project Progress

The following pull requests were **merged/closed** in the last 24 hours, representing concrete progress across several workstreams:

| PR | Description | Impact |
|---|---|---|
| [#6723](https://github.com/nearai/ironclaw/pull/6723) | Add unwired credential‑firewall primitives (CA + obligation staging) in the sandbox | Foundation for persistent, per‑user sandbox containers |
| [#6692](https://github.com/nearai/ironclaw/pull/6692) | Restructure docs site – stop leaking internal engineering docs publicly | Security fix; 33 internal paths now properly excluded |
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | Collapse five failure‑kind enums into one `FailureKind` (epic #6284 item) | Fixes six wrongful‑terminal / mis‑retry bugs, each with regression tests |
| [#3847](https://github.com/nearai/ironclaw/pull/3847) | Add filesystem‑backed Reborn skill bundle source | Enables discovery of `SKILL.md` bundles from configured roots |
| [#6687](https://github.com/nearai/ironclaw/pull/6687) | Dependency bumps (everything‑else group, 33 updates) | Hygiene; keeps CI green |
| [#6060](https://github.com/nearai/ironclaw/issues/6060) | Fixed routine delivery target leak (issue closed) | Each automation now respects its own delivery channel |

Key infrastructure advances: the sandbox now has a working certificate authority and outbound‑intercept seam ([#6740](https://github.com/nearai/ironclaw/pull/6740) is open), the memory provider contract is being rebuilt around declared capabilities ([#6724](https://github.com/nearai/ironclaw/pull/6724)), and extension lifecycle records are being normalized into typed filesystem records ([#6655](https://github.com/nearai/ironclaw/pull/6655)).

## 4. Community Hot Topics

The most‑commented issues in the last 24 hours highlight deep infrastructure concerns:

- **[#6284 – Error‑recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)** (14 comments, epic)  
  The goal: every mid‑run error must satisfy a five‑clause recoverability contract. The high engagement signals that runtime robustness is the #1 internal priority. This epic now has a dedicated workstream with PRs like [#6697](https://github.com/nearai/ironclaw/pull/6697) (correct finish‑reason reporting) and [#6684](https://github.com/nearai/ironclaw/pull/6684) already merged.

- **[#6524 – Hermetic capability and journey testing platform](https://github.com/nearai/ironclaw/issues/6524)** (3 comments, epic)  
  Seeks deterministic, meaningful coverage for every supported capability and critical user journey. The team is investing in isolating test state (PRs [#6738](https://github.com/nearai/ironclaw/pull/6738) and [#6728](https://github.com/nearai/ironclaw/pull/6728) landed today).

- **[#6581 – 429 Too Many Requests on agent‑stg](https://github.com/nearai/ironclaw/issues/6581)** (3 comments, v1‑launch‑checklist)  
  WebChat v2 SSE live‑update channel returns 429 under multi‑thread usage, causing “Disconnected” badge. Critical for user experience on the hosted instance.

- **[#4548 – DeepSeek duplicate `model` field](https://github.com/nearai/ironclaw/issues/4548)** (2 comments, bug, closed)  
  Chat completion requests with tools send duplicate top‑level `model` field, rejected by DeepSeek. This was fixed and closed, but the underlying need for robust provider‑specific serialization remains.

- **[#6522 – IronClaw unaware how to setup Telegram](https://github.com/nearai/ironclaw/issues/6522)** (2 comments, v1‑launch‑checklist)  
  Users need clear, agent‑provided instructions for Telegram pairing. This is part of a broader Telegram production‑hardening epic ([#6483](https://github.com/nearai/ironclaw/issues/6483)).

**Underlying needs:** The community (mostly internal QA and early adopters) is pressing for *deterministic error recovery*, *isolated test infrastructure*, *rate‑limit management on hosted services*, and *complete setup guidance for messaging channels*.

## 5. Bugs & Stability

Several bugs were reported or updated today. Ranked by severity:

| Severity | Issue | Summary | Fix Status |
|---|---|---|---|
| **Critical** | [#6720](https://github.com/nearai/ironclaw/issues/6720) (bug_bash_P1) | Task runs indefinitely; stop button fails to cancel execution on Railway instance. | No PR yet; being investigated |
| **High** | [#6741](https://github.com/nearai/ironclaw/issues/6741) (new) | Extension OAuth fails for Gmail/Calendar after completing sign‑in flow. | No PR yet |
| **High** | [#6718](https://github.com/nearai/ironclaw/issues/6718) (v1‑launch‑checklist) | Streaming only resumes after switching pages; “Reconnecting” state never heals without page navigation. | No PR yet |
| **High** | [#6719](https://github.com/nearai/ironclaw/issues/6719) (v1‑launch‑checklist) | Conversation history fails to load after backend errors (503, CSP violations). | No PR yet |
| **Medium** | [#6716](https://github.com/nearai/ironclaw/issues/6716) (v1‑launch‑checklist) | Model incorrectly claims Slack integration is unavailable, provides misleading instructions. | No PR yet (likely an LLM prompt fix) |
| **Medium** | [#6717](https://github.com/nearai/ironclaw/issues/6717) (v1‑launch‑checklist) | After successful Telegram pairing, model still tells user to pair. | No PR yet |
| **Low** | [#6575](https://github.com/nearai/ironclaw/issues/6575) (bug, closed) | `systemd` service error after `ironclaw onboard` on Ubuntu. | Fixed and closed |
| **Low** | [#6060](https://github.com/nearai/ironclaw/issues/6060) (bug, closed) | Routine delivery target leaks across all routines. | Fixed and closed |

*Note: These bugs were mostly caught during the v1 launch‑checklist bug bash. The team is triaging them as P0/P1.*

## 6. Feature Requests & Roadmap Signals

Several enhancement requests and epics point toward the next development cycles:

- **[#6743 – In‑app feedback / bug report widget](https://github.com/nearai/ironclaw/issues/6743) (new)**  
  Users want to report issues without leaving the WebUI. Likely to be addressed in a near‑term UX release.

- **[#6742 – User profile details view in WebUI](https://github.com/nearai/ironclaw/issues/6742) (new)**  
  Currently no way to see which account is active. A low‑effort, high‑value improvement.

- **[#6734 – Agent access to its own documentation](https://github.com/nearai/ironclaw/issues/6734) (epic)**  
  Give the running agent access to `docs/` so it can accurately guide configuration. This directly addresses the model hallucination bugs seen in bug bash.

- **[#6731 – Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731) (epic)**  
  Turn the agent’s tool set into an extensible marketplace. A major architectural enhancement likely for v1.1 or v2.

- **[#6727 – Support custom/arbitrary MCP server](https://github.com/nearai/ironclaw/issues/6727) (epic)**  
  Today only two host‑bundled MCP servers are wired in. Users want to bring their own. Expected in a subsequent release.

- **[#6641 – Skill Self‑Creation Design Doc](https://github.com/nearai/ironclaw/issues/6641) (design)**  
  Hot‑swappable, manifest‑based skill creation following the pattern established for memory. This is a core platform capability.

- **[#6484 – Shared Messaging Capability Layer](https://github.com/nearai/ironclaw/issues/6484) (epic)**  
  Standardise agent operations (send, edit, delete, react) across all channel extensions. Aligns with Telegram hardening.

**Prediction:** The next minor release (v1.0.1 or v1.1.0) will likely include the in‑app feedback widget, user profile view, a fix for agent documentation access, and initial support for custom MCP servers.

## 7. User Feedback Summary

**Pain points voiced in the last 24 hours:**

- **OAuth setup friction** – Connecting Gmail/Calendar fails silently after completing the browser flow ([#6741](https://github.com/nearai/ironclaw/issues/6741)).
- **Model hallucination of capabilities** – The agent confidently claims Slack is not installed even when it is ([#6716](https://github.com/nearai/ironclaw/issues/6716)).
- **Telegram pairing confusion** – Instructions are missing (no onboarding guide) and after successful pairing the model continues to ask the user to pair ([#6522](https://github.com/nearai/ironclaw/issues/6522), [#6717](https://github.com/nearai/ironclaw/issues/6717)).
- **Stability on hosted instances** – 429 rate limits, 503 backend errors, streaming that breaks until page switch ([#6581](https://github.com/nearai/ironclaw/issues/6581), [#6719](https://github.com/nearai/ironclaw/issues/6719), [#6718](https://github.com/nearai/ironclaw/issues/6718)).
- **Run cancellation unreliability** – Long‑running tasks cannot be stopped via UI ([#6720](https://github.com/nearai/ironclaw/issues/6720)).
- **Missing user identity display** – No way to verify which account is logged in ([#6742](https://github.com/nearai/ironclaw/issues/6742)).
- **Delivery target leakage** – Fixed today, but earlier affected multiple users ([#6060](https://github.com/nearai/ironclaw/issues/6060), closed).

**Overall satisfaction** – The v1.0.0 release is clearly a major milestone, but the bug‑bash results indicate the hosted instance needs immediate hardening before general GA. The community appreciates the rapid iteration (multiple fix PRs merged same day bugs were filed).

## 8. Backlog Watch

A few important items remain open with little recent maintainer activity:

| Item | Created | Last Updated | Notes |
|---|---|---|---|
| [#4548](https://github.com/nearai/ironclaw/issues/4548) – DeepSeek duplicate model field | 2026-06-08 | 2026-07-27 (closed) | Now closed – but the fix may need backporting to older deployments? |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) – chore: release (crate version bumps) | 2026-07-03 | 2026-07-27 | Still open despite many newer PRs. Contains breaking API changes for `ironclaw_common` and `ironclaw_skills`. Needs maintainer review. |
| [#6428](https://github.com/nearai/ironclaw/pull/6428) – build(deps): bump tokio‑ecosystem | 2026-07-21 | 2026-07-27 | Open for a week; could cause CI drift. |
| [#6361](https://github.com/nearai/ironclaw/pull/6361) – build(deps): bump serialization group | 2026-07-20 | 2026-07-27 | Open 8 days. Minor updates, but should be merged to keep deps fresh. |

None of these appear to be critical blockers, but the release PR (#5598) should be resolved to prevent crate version fragmentation as the project moves forward with the Reborn architecture.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-28

## 1. Today's Overview

Project activity remains moderate but shows a clear near-term focus on stability and security fixes. **8 issues** were updated in the last 24 hours, with all 8 remaining open (0 closed), signaling a backlog of unsolved user reports. The **9 PRs** updated today show better momentum: **5 were merged or closed**, including a security fix for email attachment path traversal and a fix for tool‑loop exhaustion. However, **4 PRs are still open**, including a stale PR for setting’s unsaved‑change detection (#1241) and a dependency update (#1277), which may require maintainer attention. No new releases were published today, and the project’s last tag likely predates several outstanding bugs.

## 2. Releases

- **No new releases** were published in the last 24 hours.

## 3. Project Progress

Five pull requests were merged or closed today, advancing several feature areas and fixing critical issues:

- **[#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) [merged]** — `feat(artifacts): 新增预览工具栏分享与部署入口` (share & deploy entry point in artifact preview toolbar). This adds a share button to the artifact file preview toolbar and a deploy entry in the browser toolbar, with unit tests to avoid wrong deployment of HTML previews. It also adds telemetry entry‑point tracking.
- **[#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) [merged]** — `Feat/2026.7.20 sites` (site‑related feature update). Details not fully disclosed, but the branch name and summary suggest a feature update for the “sites” module.
- **[#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) [merged]** — `fix(email): prevent attachment path traversal` (security fix). Sanitizes attachment filenames and enforces download directory boundaries, with cross‑platform security tests, bumping the bundled email skill version.
- **[#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) [merged]** — `fix(agentEngine): terminate no-progress tool loops before token budget exhaustion` (stability fix). Prevents excessive tool loops that waste token budget.
- **[#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) [merged]** — `fix(cowork): narrow input-too-long error classification`. Previously, any upstream message containing `max_tokens` (including unrelated errors) was misclassified as “input too long”. Now the classification is stricter.

These merges show that the team is prioritizing **security** (path traversal), **stability** (tool‑loop termination), and **UX polish** (artifact sharing, error classification).

## 4. Community Hot Topics

The most commented and emotionally charged issues today revolve around **installation failures** and **data integrity**:

- **[#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) – "无法安装" (Installation Failure)**  
  *Comments: 1, Created 2026-07-28*  
  The update fails with “user skills could not be backed up”, leaving the previous installation unreplaced. This is a **blocker** for anyone trying to upgrade. The user posted a log path.  
  *Needs:* Immediate investigation—likely a file‑permissions or backup‑corruption issue during the update process.

- **[#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) – "加速器把 `\f` 字节对替换为 `\x0C`" (data‑silent corruption in accelerator)**  
  *Comments: 0, Created 2026-07-27*  
  The `LobsterAI 加速器` silently replaces literal `\f` bytes (0x5C 0x66) with a form feed character (0x0C), corrupting any file containing tokens like `\firecrawl` or `\foo`. The user reports 100% reproducibility.  
  *Reactions:* 0 reactions but the severity label is 🔴. Users may not have discovered this bug yet, but its impact is wide (PS scripts, Windows paths, JSON).  
  *Needs:* Hotfix – this is a data‑loss bug.

- **[#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) – "exec 工具默认 Shell 及中文路径编码问题"**  
  *Comments: 0, Created 2026-07-27*  
  The `exec` tool hard‑codes `powershell.exe` (Windows PowerShell 5.1) instead of using the system’s PowerShell 7. When Windows usernames contain Chinese characters (e.g., `M幸福`), this causes encoding failures.  
  *Needs:* Platform‑aware default shell selection and UTF‑8 support.

- **[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) [stale] – "现有大模型受限后无法切换到其他大模型" (model‑rate‑limit cascading)**  
  *Comments: 1, Created 2026-04-01*  
  Once one API becomes rate‑limited (Volcano Engine), ALL other models (including Gemini) appear “受限” to the same session. Reverting `openclaw.json` didn’t help. The user had to wait for the rate limit to expire to restore functionality.  
  *Needs:* Per‑model rate‑limit tracking rather than per‑session.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|---|---|---|---|
| 🔴 Critical (Data Integrity) | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | Accelerator replaces `\f` with form feed, silent corruption. 100% reproducible. | None yet |
| 🔴 Critical (Installation) | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | Update fails because user skills cannot be backed up. Blocker for new versions. | None yet |
| 🟠 High (API Availability) | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) [stale] | Rate limit on one model cascades to all others in the same session. Session‑wide paralysis. | None yet |
| 🟠 High (Settings Loss) | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) [stale] | Closing Settings without Save silently discards API Key and provider config. | PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) (open since Apr 1) |
| 🟡 Medium (Shell/Path Encoding) | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | Hard‑coded PowerShell 5.1 path and Chinese‑character encoding failure. | None yet |
| 🟡 Medium (Task Duration) | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) [stale] | Long‑running tasks (e.g., 24‑hour continuous) get automatically killed without clear UI feedback. | None yet |

**Summary:** The most severe bug is the **accelerator’s silent data corruption** (#2393) – it can damage any file that includes a literal `\f` sequence. The **installation blocker** (#2395) is also urgent. Fix PRs are **absent** for both. The Settings‑loss issue (#1237) has a long‑stale PR (#1241) that needs attention.

## 6. Feature Requests & Roadmap Signals

From today’s issues, the community is requesting:

- **Skill renaming** ([#2391](https://github.com/netease-youdao/LobsterAI/issues/2391)) – Users want the ability to rename skills. This is a straightforward UX request that does not require new architecture.
- **Scheduled task flexibility** ([#2392](https://github.com/netease-youdao/LobsterAI/issues/2392)) – Currently, scheduled tasks cannot choose which agent or skill to run. This is a functional gap for automation.
- **PowerShell 7 support** ([#2390](https://github.com/netease-youdao/LobsterAI/issues/2390)) – Users on Windows 11 with non‑Latin usernames are blocked from using `exec` tools.
- **Settings confirmation** ([#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)) – Unsaved‑change detection, with a PR already open.

**Predicted for next version:**
- Skill renaming is likely a low‑effort, high‑value addition.
- Scheduled task agent/skill selection is a natural extension of the current scheduler.
- The Settings confirmation (#1237) is already code‑ready in PR #1241.
- PowerShell 7 support (#2390) may need a broader platform strategy but is important for Windows users.

## 7. User Feedback Summary

User pain points expressed today reflect real‑world use cases:

- **Installation reliability**: “The LobsterAI update stopped because user skills could not be backed up. The previous installation was not replaced.” – This suggests the update mechanism does not gracefully handle backup failures and leaves the system in a broken state.
- **Data integrity**: “I wanted to save MEMORY.md with the write tool, and after file landing I found bytes were abnormal.” – The accelerator’s `\f` replacement bug undermines trust in file operations.
- **Configuration safety**: “I modified the API Key in Settings, closed without Save, all changes were lost silently.” – Users expect warnings for unsaved changes.
- **Rate‑limit empathy**: “I switched to another agent (Gemini 3.1 Pro Preview), but it also showed ‘受限’. So now LobsterAI is completely paralyzed.” – The current model‑selection logic does not isolate rate limits.
- **Long‑duration task visibility**: “I don’t know if the task is stopped or still running in the background.” – The task‑timeout UI does not clearly indicate state.

Overall, users are **dissatisfied** with the update process, data integrity, and lack of feedback during configuration changes. The community is active in reporting, but many reports are reaching staleness without resolution.

## 8. Backlog Watch

Several important issues and PRs are neglected and need maintainer review:

| Item | Type | Created | Last Updated | Status | Reason for Watch |
|---|---|---|---|---|---|
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Issue | 2026-04-01 | 2026-07-27 | Stale open | Settings‑loss bug. Fix PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) open since Apr 1 (stale). No recent activity from maintainer. |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | Issue | 2026-04-01 | 2026-07-27 | Stale open | Rate‑limit cascading bug paralyzes all models – high impact. No fix PR. |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | Issue | 2026-05-27 | 2026-07-27 | Stale open | Long‑duration task timeout UX. User reports confusion about whether task continues. |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | PR | 2026-04-01 | 2026-07-27 | Stale open | Adds task‑bar/Dock flashing on task completion. No maintainer feedback or merge. |
| [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | PR | 2026-04-01 | 2026-07-27 | Stale open | Fix for settings‑loss (#1237). Code is ready but remains unreviewed. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR | 2026-04-02 | 2026-07-27 | Stale open | Dependency bump for `electron` (40 → 43) and `electron-builder`. Security‑related? Outdated for 3 months. |

**Action required:** The project has **six stale items** that have been untouched for >3 months, including an unreviewed fix for a high‑impact bug (#1237/#1241) and an outdated dependency update (#1277). These are risks to both stability and security.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-28

## Today's Overview

The Moltis project saw no new issues or releases in the last 24 hours, but maintainers remained active on five open pull requests—all of which received updates. No PRs were merged or closed during this period, indicating a focus on polishing and review rather than rapid shipping. The project’s open‑issue count stands at zero, which may reflect either a mature codebase with few uncovered bugs or a recent cleanup of tracked items. Overall, the development pulse is moderate, with steady work on vector memory backends, ACP protocol extension, security hardening, observability infrastructure, and PWA reliability.

## Releases

No new releases were made available since the last digest. The latest tagged release (if any) remains unchanged.

## Project Progress

No pull requests were merged or closed in the last 24 hours. All activity centred on five open PRs that are still under review:

- **#1158 – feat(memory): add zvec vector database memory backend**  
  *Updated 2026-07-28* – A new optional memory backend using ZVec and Redb, feature‑gated behind the `zvec` Cargo feature. This is marked as an experimental “vibe‑coded” alternative for users running their own embedding model (e.g., via a local llama.cpp server).  
  [PR #1158](https://github.com/moltis-org/moltis/pull/1158)

- **#1169 – feat(acp): expose Moltis as an ACP agent over stdio**  
  *Updated 2026-07-27* – Previously Moltis was only an ACP client; this PR reverses the role, adding a new `crates/acp` that implements the agent side of the ACP protocol, enabling tools like Zed’s ACP harness or `buzz-acp` to use Moltis as the underlying agent.  
  [PR #1169](https://github.com/moltis-org/moltis/pull/1169)

- **#1170 – fix(channels): gate /sh and privileged tools behind a per-account operators list**  
  *Updated 2026-07-27* – Security fix: the `/sh` command (shell execution) was incorrectly protected only by the channel’s access gate; on shared channels (Discord guilds, group chats) any member who passed the gate could execute arbitrary host commands. This PR introduces a per‑account operators list to restrict access to `/sh` and other privileged tools.  
  [PR #1170](https://github.com/moltis-org/moltis/pull/1170)

- **#1174 – Add instrumentation and feedback collection infrastructure**  
  *Updated 2026-07-27* – New agent instrumentation using a pluggable fan‑out (`ObservationSink`) with export profiles, plus end‑user feedback collection built on top. This establishes a foundation for observability and user‑driven improvement loops.  
  [PR #1174](https://github.com/moltis-org/moltis/pull/1174)

- **#1173 – feat(pwa): make push notifications reliable and non-disruptive**  
  *Updated 2026-07-27* – Fixes a critical UX bug in Progressive Web App push notifications: notifications were silently replaced by subsequent messages because the `renotify` flag was never set. The PR also ensures notifications remain non‑disruptive (no sound/alert for repeated messages) while making them reliable.  
  [PR #1173](https://github.com/moltis-org/moltis/pull/1173)

## Community Hot Topics

None of the five active PRs have attracted comments or reactions (👍 = 0 for all). No issues are open, so there are no discussion‑heavy threads to highlight. The low community engagement may be due to the project still being in an early or private‑focused phase, or because most contributors are the same core team members (authors identified as `demyanrogozhin` and `penso`). No external questions, debates, or feature requests are visible in the last 24 hours.

## Bugs & Stability

No new bugs were reported in the last 24 hours. However, the open PR **#1170** directly addresses a **high‑severity** security vulnerability: arbitrary shell command execution on shared channels (e.g., Discord guilds). The current code allowed any channel member who passed the group’s access gate to run `/sh`. The fix gates this and other privileged tools behind a per‑account operator list. This PR is still open; until merged, instances on multi‑user platforms remain exposed. No other stability or regression items were observed.

## Feature Requests & Roadmap Signals

No feature requests were filed today, but the set of open PRs gives clear signals about near‑term priorities:

- **Memory extensibility** – The experimental zvec backend (#1158) suggests interest in lightweight, locally‑hosted vector stores as an alternative to heavy cloud databases.
- **ACP interoperability expansion** – Making Moltis an ACP agent (#1169) positions it as a drop‑in replacement for other ACP agents, broadening its utility across different ACP hosts.
- **Observability and user feedback** – PR #1174 introduces an instrumentation framework, hinting at a future where usage patterns and user‑rated responses can feed into model and behaviour improvements.
- **PWA reliability** – Fixes to push notifications (#1173) show a commitment to the web‑app UX, likely targeting mobile or desktop users who rely on persistent notifications.

Given that these PRs are still under review, they are likely candidates for the next minor release (v0.x). No roadmap document or milestone tags are available in the provided data.

## User Feedback Summary

No user feedback—neither positive nor negative—was recorded in the last 24 hours. The absence of issues and comments makes it impossible to gauge user satisfaction or specific pain points. The only direct user‑facing improvement is the PWA notification fix (#1173), which addresses a real annoyance (silently replaced notifications). The security fix (#1170) is critical for users running Moltis in group‑chat environments. No other usability feedback is available.

## Backlog Watch

There are **no long‑unanswered issues or PRs** that require maintainer attention. The entire open worklist consists of the five PRs above, all updated within the last two days. The zero‑issue count is notable but may indicate that all known problems have been either addressed or are tracked elsewhere (e.g., in a separate project board). No stale or ignored items are present in this snapshot.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-28

## 1. Today’s Overview

CoPaw (formerly QwenPaw) remains highly active, with 50 issues and 49 pull requests updated in the last 24 hours. 35 issues were closed (70% closure rate), indicating responsive maintainer engagement. 15 PRs were merged or closed, while 34 remain open – a healthy pipeline of feature work. No new releases were cut today; the project is currently at versions 2.0.0.post3 (core) and 2.0.1 (reported in one issue). Community activity centres on integration pain points (Feishu, DingTalk, Windows) and performance regressions after the 2.0.0 major release. On the development side, major feature branches for **computer-use**, **Chrome extension**, **third-party agent integration**, and **context compression** are progressing through review.

## 2. Releases

No new releases were published today. The latest available versions remain as reported by users: **v1.1.12.post2**, **v2.0.0.post3**, and **v2.0.1**. Users upgrading from 1.x to 2.0.0 should be aware of the history‑migration issues described in [#5964](https://github.com/agentscope-ai/CoPaw/issues/5964) (chat‑list mapping loss) – a fix PR [#6068](https://github.com/agentscope-ai/CoPaw/pull/6068) is under review.

## 3. Project Progress

**Merged/closed PRs today (15 total):**  
The visible merged PR is [#6462](https://github.com/agentscope-ai/CoPaw/pull/6462) – documentation clarifying native Windows sandbox support (AppContainer/restricted‑token isolation). This corrects outdated guidance that only WSL2 was supported.

**Notable features advancing (open PRs):**
- **Desktop GUI automation** ([#6424](https://github.com/agentscope-ai/CoPaw/pull/6424)) – native `computer_use` for Windows & macOS, accessibility‑first + Tauri control mode.
- **Chrome extension plugin** ([#6157](https://github.com/agentscope-ai/CoPaw/pull/6157)) – pairing & native messaging bridge, depends on unified browser backend ([#6276](https://github.com/agentscope-ai/CoPaw/pull/6276)).
- **Unified browser SDK** ([#6276](https://github.com/agentscope-ai/CoPaw/pull/6276)) – one agent‑facing surface for any browser backend.
- **Third‑party agent integration** ([#6397](https://github.com/agentscope-ai/CoPaw/pull/6397)) – introduces backend‑neutral architecture with Codex, Qoder, Skills, MCP.
- **Reranker support for ReMe memory** ([#6398](https://github.com/agentscope-ai/CoPaw/pull/6398)) – over‑fetches + re‑ranks for improved memory search results.
- **Visual context compression (PawFocus)** ([#6456](https://github.com/agentscope-ai/CoPaw/pull/6456)) – compresses long agent histories into visual summaries with exact‑content recovery.
- **Safe model discovery** ([#6302](https://github.com/agentscope-ai/CoPaw/pull/6302)) – foundational infra for automatic provider model lists.
- **Background tool‑call offload** ([#6151](https://github.com/agentscope-ai/CoPaw/pull/6151)) – dual‑deadline architecture fixing cancel/hint bugs.
- **On‑demand channel installation** ([#6387](https://github.com/agentscope-ai/CoPaw/pull/6387)) – moves channel SDKs to optional deps.
- **Inline gallery for tool‑card images** ([#5490](https://github.com/agentscope-ai/CoPaw/pull/5490)) – improves media viewing in console chat.

**Bug fixes in review:**
- [#6508](https://github.com/agentscope-ai/CoPaw/pull/6508) – inherit session `approval_level` in spawned sub‑agents.
- [#6068](https://github.com/agentscope-ai/CoPaw/pull/6068) – preserve session IDs during Scroll history migration.
- [#6500](https://github.com/agentscope-ai/CoPaw/pull/6500) – make unauthenticated CDP exposure opt‑in (security fix).

## 4. Community Hot Topics

**Most commented issues (last 24h):**

| Issue | Comments | Topic |
|-------|----------|-------|
| [#5757](https://github.com/agentscope-ai/CoPaw/issues/5757) – *Feishu not replying after first message* | 14 | Feishu channel breaks after first reply; affects Docker & AgentScope Platform |
| [#5725](https://github.com/agentscope-ai/CoPaw/issues/5725) – *Console streaming causes browser lag* | 6 | Browser freezes during streaming output; comparison with DeepSeek |
| [#4895](https://github.com/agentscope-ai/CoPaw/issues/4895) – *Infinite image compression loop* | 5 | Image upload leads to hallucination cycle |
| [#5090](https://github.com/agentscope-ai/CoPaw/issues/5090) – *Tool protection bypass* | 5 | `rm` command blocked but agent uses Python to delete files |
| [#5259](https://github.com/agentscope-ai/CoPaw/issues/5259) – *Windows vector index not persisted* | 5 | `memory_search` fails when “rebuild on startup” disabled |
| [#5561](https://github.com/agentscope-ai/CoPaw/issues/5561) – *Feishu long messages not received* | 5 | Agent replies longer than threshold sent as files instead of messages |
| [#5964](https://github.com/agentscope-ai/CoPaw/issues/5964) – *Upgrade to 2.0.0 breaks chat mapping* | 5 | Session mapping lost; data exists in DB but UI returns 500 |

**Analysis:** The most active threads all relate to **channel integration reliability** (Feishu, DingTalk) and **fundamental stability regressions** after the 2.0.0 release. Users are frustrated that core features (messaging, memory) break in production setups. The high comment count on [#5757](https://github.com/agentscope-ai/CoPaw/issues/5757) suggests many users have hit the same Feishu non‑response bug.

**Most notable PRs:** While none have high comment counts, the **computer‑use** ([#6424](https://github.com/agentscope-ai/CoPaw/pull/6424)) and **third‑party agents** ([#6397](https://github.com/agentscope-ai/CoPaw/pull/6397)) PRs represent significant roadmap milestones and have attracted multiple reviewer assignments.

## 5. Bugs & Stability

**High severity (affects core functionality):**

1. **OpenAI `max_tokens` not applied** ([#6258](https://github.com/agentscope-ai/CoPaw/issues/6258)) – `max_output_tokens` setting ignored for OpenAI‑compatible models. User reports truncation of outputs. *No fix PR yet.*
2. **Response truncation with MiniMax‑M3** ([#6324](https://github.com/agentscope-ai/CoPaw/issues/6324)) – Agent responses cut short. Possibly related to token setting bug above.
3. **Memory search breaks OpenCode (DeepSeek) requests** ([#5773](https://github.com/agentscope-ai/CoPaw/issues/5773), [#5859](https://github.com/agentscope-ai/CoPaw/issues/5859)) – `auto_memory_search` injects messages missing `reasoning_content` field, causing OCG gateway errors. *Closed – likely fixed, but issue remains in 1.1.12.post3.*
4. **High CPU in Edge/Wayland** ([#6460](https://github.com/agentscope-ai/CoPaw/issues/6460)) – Single Chrome/Edge tab uses 100% CPU when viewing conversations with ComfyUI results. Possibly WebSocket or rendering bottleneck. *Open.*

**Medium severity:**

5. **Task mode floods history with duplicate conversations** ([#6457](https://github.com/agentscope-ai/CoPaw/issues/6457)) – Users see many unwanted sessions in the history list after running task mode.
6. **Windows PATH concatenation drops semicolons** ([#6239](https://github.com/agentscope-ai/CoPaw/issues/6239)) – Child processes lose npm globals. *Closed – possibly fixed.*

**Low severity (closed with fixes available):**

- Infinite image compression loop ([#4895](https://github.com/agentscope-ai/CoPaw/issues/4895))
- Tool protection bypass via Python ([#5090](https://github.com/agentscope-ai/CoPaw/issues/5090))
- Windows vector index not persisted ([#5259](https://github.com/agentscope-ai/CoPaw/issues/5259))
- Browser process/temp directory locks on Windows ([#4844](https://github.com/agentscope-ai/CoPaw/issues/4844))
- Uncompressed context inflation on new sessions ([#4872](https://github.com/agentscope-ai/CoPaw/issues/4872))
- Feishu interactive card parsing failure ([#5708](https://github.com/agentscope-ai/CoPaw/issues/5708))
- DingTalk card streaming too slow ([#5603](https://github.com/agentscope-ai/CoPaw/issues/5603))

## 6. Feature Requests & Roadmap Signals

**Top user‑requested features from recent issues:**

- **Custom model protocols** – Users want support for non‑standard API endpoints (e.g. image generation, custom schemas). See [#5609](https://github.com/agentscope-ai/CoPaw/issues/5609).
- **DingTalk image preview** – Upload images as previewable messages instead of files ([#5593](https://github.com/agentscope-ai/CoPaw/issues/5593)).
- **Kimi K2 Code provider support** – Need Anthropic‑compatible API integration ([#5427](https://github.com/agentscope-ai/CoPaw/issues/5427)).
- **Plugin/session ID exposure** – Tool authors want access to current `sessionId` / `userId` for MCP permissioning ([#5547](https://github.com/agentscope-ai/CoPaw/issues/5547)).

**Roadmap signals from PRs under review:**

The following features are actively being developed and are strong candidates for the next minor release (2.1.0 or 2.0.2):

- **Safe model discovery** ([#6302](https://github.com/agentscope-ai/CoPaw/pull/6302)) – eliminates manual model ID entry for OpenAI, Anthropic, etc.
- **Visual context compression** ([#6456](https://github.com/agentscope-ai/CoPaw/pull/6456)) – addresses context inflation complaints.
- **On‑demand channel installation** ([#6387](https://github.com/agentscope-ai/CoPaw/pull/6387)) – simplifies channel setup.
- **Background tool‑call offload** ([#6151](https://github.com/agentscope-ai/CoPaw/pull/6151)) – improves tool reliability.
- **Chrome extension & unified browser** ([#6157](https://github.com/agentscope-ai/CoPaw/pull/6157), [#6276](https://github.com/agentscope-ai/CoPaw/pull/6276)) – major UX leap for browser automation.

## 7. User Feedback Summary

**Pain points (frequent complaints):**

- **Feishu channel reliability** – Messages after the first reply are silently dropped; long messages are converted to files. Users report this across both Docker and hosted instances.
- **Upgrade breakage** – Moving from 1.x to 2.0.0 caused loss of session mapping and required always‑on “rebuild memory index” on Windows. Multiple users express frustration.
- **Streaming performance** – Browser UI freezes during streaming (especially on low‑end machines or remote servers). Compare to DeepSeek web, which handles streaming smoothly.
- **Model configuration quirks** – Users struggle with Ollama cloud models, custom provider endpoints, and model‑specific token limits.
- **Security limitations** – Tool‑protection bypass (rm → Python) undermines user trust in the sandbox.

**Satisfaction signals:**

- Many issues are closed quickly (often within days), indicating responsive maintainers.
- The community actively submits detailed bug reports with reproduction steps.
- Feature PRs like computer‑use and Chrome extension are generating positive attention.
- Users appreciate the platform’s extensibility (plugin system, MCP, custom agents).

**Common use cases:**
- Enterprise chat assistants (Feishu, DingTalk, WeCom)
- Code generation and debugging (Qoder, Codex integrations)
- Memory‑augmented agents for knowledge work
- Desktop automation (browser, file operations)

## 8. Backlog Watch

No critically old open issues were identified. The oldest open issues with ongoing discussion are:

- [#6258](https://github.com/agentscope-ai/CoPaw/issues/6258) – OpenAI max tokens (open since Jul 19, 4 comments) – no fix PR assigned. This is a moderate‑severity bug affecting all OpenAI users.
- [#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) – High CPU in Edge+Wayland (open since Jul 25, 3 comments) – may require frontend or WebSocket optimization.
- [#6457](https://github.com/agentscope-ai/CoPaw/issues/6457) – Task mode conversation duplication (open since Jul 24, 3 comments) – likely minor but confusing.

**PRs needing maintainer attention:**

- [#5490](https://github.com/agentscope-ai/CoPaw/pull/5490) – Inline gallery for tool‑card images (opened Jun 24, last updated Jul 27). This visual enhancement has been open for over a month; it may need UI review.
- [#6397](https://github.com/agentscope-ai/CoPaw/pull/6397) – Third‑party agents (large PR, 4+ days since last review). Complex integration that would benefit from broader maintainer input.

**Overall project health:** CoPaw is shipping at a rapid cadence with a strong contributor base. The main risks are post‑upgrade stability (2.0.0 migration issues) and channel‑specific regressions that affect enterprise adopters. The active PR pipeline suggests these will be addressed in the next 1–2 weeks.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-28

## Today’s Overview

The ZeroClaw project remains highly active with **48 issues** and **50 pull requests** updated in the last 24 hours. Of those, **44 issues remain open** and **8 PRs have been merged or closed**. No new releases were published. Activity is dominated by a wave of security-focused bug reports (many filed by contributor `belumume`) and an ongoing push to stabilise CI, fix test flakiness, and harden the runtime’s auth & policy surfaces. The project is clearly in a **consolidation and hardening phase ahead of the upcoming v0.9.0 milestone**, which is tracked via a dedicated issue (#7432). Developer attention is split between shipping new features (e.g. PostgreSQL session backend, Matrix progress drafts) and addressing regressions introduced in the latest `master` commits.

## Releases

No new releases were published today. The latest published version remains **v0.8.3** (as reported by binary and workspace metadata).

## Project Progress

Eight pull requests were merged or closed in the last 24 hours. Significant advances include:

- **PostgreSQL session backend (#9251)** – Merged. Adds PostgreSQL as the first supported session storage backend, replacing an earlier multi-backend design. This is a foundational change that will enable persistent multi-turn sessions.
- **Governance documentation (#9388)** – Closed. Retires the non‑existent `CONTRIBUTORS.md` and grounds maintainer roles in governance document FND‑003.
- **CI and test fixes** – Several small CI-related PRs were closed: #9429 (fixes flaky wall‑clock timeouts in channel tests), #9238 (fixes Windows test isolation for `config_save_isolation`), and #7808 (issue closed – CLI secret prompt UX fix).
- **Inbound channel approval fixes** – PR #9423 (still open but discussed) addresses a flaw where unanswerable approvals were reported as user denials.

## Community Hot Topics

The most actively commented issues and pull requests reveal strong community concern around **security and reliability**.

- **#9357** – `[Bug]: cargo test -p zeroclaw-runtime --lib fails on master in 19 of 20 runs`  
  *Comments: 5* | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)  
  A critical CI flakiness issue that poisons a global mutex, affecting all subsequent test runs. Community members are pressing for a fix.

- **#8973** – `[Bug]: Landlock blocks shell access to required system files on Fedora`  
  *Comments: 4* | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)  
  A security sandbox regression that prevents the shell tool from working on Fedora. Has been open since July 11 and is marked `status:in-progress`.

- **#9386** – `[Bug]: Gemini API key in request URL survives sanitize_api_error`  
  *Comments: 4* | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)  
  A credential‑leak bug: API keys are exposed in error messages posted back to chat channels. Very high risk; a fix is expected soon.

- **#9363** – `[Bug]: Config metadata remains English in localized ZeroCode and web surfaces`  
  *Comments: 3* | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)  
  Localisation regression – even with non‑English locales, config group headings stay untranslated.

- **#8279** – `[Bug]: delegate bypasses parent's tool allowlist`  
  *Comments: 3* | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)  
  A critical security vulnerability (S0 – data loss/security risk) where a sub‑agent can invoke tools the parent explicitly disallows. Open since June 24 and still `in-progress`.

## Bugs & Stability

The project is experiencing a wave of high‑severity bugs, many uncovered by a recent security audit (issues filed by `belumume`). Key reports ranked by severity:

| ID | Title | Severity | Status | Fix PR? |
|----|-------|----------|--------|---------|
| #8279 | Delegate bypasses tool allowlist | **S0** – data loss/risk | In progress | Not yet |
| #9425 | Running SOP jobs have no operator cancellation path | **S1** – workflow blocked | In progress | No |
| #9421 | Incomplete terminal responses reported as successful | **S1** – workflow blocked | In progress | #9424 (draft) |
| #9386 | Gemini API key leaked in error messages | **S2** – degraded behavior/security | Accepted | Not yet |
| #9393 | Bluesky & Reddit lack sender authorization | **S2** – degraded/security | Accepted | Not yet |
| #9392 | LINE group messages skip allowlist & pairing handshake | **S2** – degraded/security | Accepted | Not yet |
| #9417 | WhatsApp approval token leaked on send failure | **S2** – degraded/security | Needs author action | Not yet |
| #9390 | Emergency stop state file not read by runtime | **S2** – degraded/security | Accepted | Not yet |
| #9389 | Unauthenticated POST /api/pair keys lockout to attacker header | **S2** – degraded/security | Accepted | Not yet |
| #9340 | CLI‑created cron jobs discard output (delivery hardcoded to none) | **S1** – workflow blocked | In progress | No |
| #9357 | Runtime tests flaky on master (19/20 failures) | **S2** – degraded | Accepted | No |
| #9465 | Inbound channel message declined by precheck sends no text to sender | **S2** – degraded | Accepted | No |

Several of these bugs have corresponding fix PRs in progress (e.g., #9424, #9447 for incomplete terminal responses; #9475 for test flakiness). The project has also seen new compile‑time regressions on Windows (#9422) and WASM plugin tests never executed in CI (#9462).

## Feature Requests & Roadmap Signals

- **RFC: AI‑assisted PR pre‑review and re‑review (#9330)** – Proposed use of CI results to trigger automated initial review while keeping final approval human‑owned. This could streamline the workflow for a project with high PR volume.
- **Category‑scoped memory sharing (#8983)** – Request for a more granular permission model for cross‑agent memory reads, enabling patterns like “shared research context but private credentials”.
- **Anthropic stored‑profile OAuth alias contract (#9464)** – RFC for an explicit `auth_mode = "oauth"` path for Anthropic provider. Likely to land in v0.9.0 given the security/auth focus.
- **WASM memory plugins into runtime (#9463)** – Feature request to wire existing WASM channel and memory plugin backends into production. Currently only tool plugins are active.
- **Disable cachePoint for Bedrock Nova 2 Lite (#8720)** – User request for a config toggle to avoid caching errors. Remains open with `status:in-progress`.
- **SOP capability roadmap (#8288)** – Tracker aiming to bring the daemon‑owned SOP control plane to “5/5” status. This is a long‑running epic.

The **v0.9.0 milestone** (#7432) is the central coordination point for auth, security, gateway, and breaking changes. Expect the next release to include many of the fixes currently in progress.

## User Feedback Summary

User pain points centre on **security flaws, CI instability, and missing operational features**:

- **Security audit revelations** – Multiple contributors (especially `belumume`) have uncovered serious authorization gaps (LINE, Bluesky, Reddit, WhatsApp) and credential leaks. While reported as bugs, these are effectively user requests for a security‑hardened product.
- **CI reliability** – Developers are frustrated by flaky tests that waste time on repeated runs (#9357, #9429). A common request: “use bounded waits instead of fixed sleeps” (#9475).
- **Localisation gaps** – Even after locale switching, config metadata stays English (#9363). This affects non‑English speaking users of ZeroCode/web dashboards.
- **Missing operator tooling** – No way to cancel running SOP jobs (#9425), no feedback after CLI secret paste (#7808 closed but UX still poor), and cron jobs that run silently without delivering output (#9340).
- **Configuration pains** – Fresh config generated by `config init` is broken under strict validation (#9436), and Windows test gates fail to run config tests (#9238, #9422).

Satisfaction is visible in the quantity of community contributions – many PRs and issues are filed with detailed root‑cause analysis – but the high number of S2/S1 bugs indicates the project is still maturing toward production‑grade stability.

## Backlog Watch

The following issues and PRs have gone **without direct maintainer action for extended periods** and may need review or escalation:

| ID | Item | Age | Note |
|----|------|-----|------|
| #8279 | Delegate bypasses tool allowlist | Open since June 24 (34 days) | **S0** severity, still `in-progress`. Needs committed fix or decision to accept risk. |
| #7432 | v0.9.0 auth/security/boundary tracker | Open since June 9 (49 days) | The master tracker for breaking changes. Some sub‑issues may be stale. |
| #8720 | Bedrock cachePoint disabling | Open since July 4 (24 days) | User request with `status:in-progress` but no committer assigned. |
| #9330 | AI‑assisted PR review RFC | Open since July 24 (4 days) – recent, but no maintainer comment yet. | RFCs often need a maintainer check‑in. |
| #8692 | Maintainer decision queue | Open since July 4 (24 days) | Tracker for RFCs and design issues waiting for maintainer sign‑off. Listed issues may be blocked. |

Additionally, PR #8966 (feat: carry provider identity on usage events) has been open since July 11 with no recent maintainer activity and `needs-author-action` label. PR #8443 (Matrix single-message progress drafts) is a large feature from a trusted contributor that has been open since June 28. Both risk becoming stale if not merged or moved forward.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*