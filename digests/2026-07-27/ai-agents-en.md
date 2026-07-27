# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 344 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-27 01:51 UTC

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

# OpenClaw Project Digest — 2026-07-27

## 1. Today’s Overview

OpenClaw saw exceptionally high activity over the past 24 hours: **344 issues** and **500 pull requests** were updated, with **247 open/active issues** and **170 open PRs**. 330 PRs were merged or closed, indicating strong forward momentum, but the project also carries a large number of high‑severity open issues (many rated platinum or diamond lobster). No new releases were published today. The volume of regressions and long‑standing feature requests suggests the community is both deeply engaged and feeling the strain of rapid iteration on a complex agent platform.

## 2. Releases

**None.** No new versions were published today.

## 3. Project Progress

Today saw **330 PRs merged or closed**, reflecting sustained engineering effort. Notable changes include:

- **`#114117`** – *fix: reduce reply delay when model policy is configured* – Cuts seconds‑long repeated plugin manifest discovery in reply turns by snapshotting metadata once per model‑selection run. (Closed, merged)
- **`#114226`** – *fix(auth): complete profile migration when main already owns an OAuth credential* – Resolves a gateway startup failure after the SQLite‑only auth profile cutover (#114033). (Closed, merged)
- **`#114224`** – *fix(ui): show real cron failure detail in the sidebar attention tooltip* – The Web UI sidebar now displays actual error messages instead of repeating the “1 cron job(s) failed” label. (Closed, merged)
- **`#112654`** – *fix(qqbot): expand media paths when HOME is blank* – Corrects QQ Bot media path resolution when `HOME` is empty but `USERPROFILE` is set. (Closed, merged)
- **`#112805`** – *refactor(agents): absorb model helper fragments* – Removed seven tiny model helper fragments from `src/agents` to reduce file/import overhead. (Closed, merged)
- **`#112812`** – *refactor(config): move Discord and Teams schemas to plugins* – Shifts Zod schema ownership from core to the Discord and Microsoft Teams plugins, aligning with plugin‑first architecture. (Closed, merged)

Several open PRs reached key review stages (e.g., `#113834`, `#114219`, `#114220` are marked ready for maintainer look), signaling that additional fixes are close to merging.

## 4. Community Hot Topics

The most active issues (by comment count and reactions) reflect two major themes: **platform gaps** and **session‑state fragility**.

| Issue | Comments | 👍 | Topic |
|-------|----------|----|-------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 115 | 80 | **Linux/Windows Clawdbot Apps** – Users strongly desire native desktop apps beyond macOS/iOS/Android. Requires product decision and security review. |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 24 | 2 | **Tool outputs as unreadable image attachments** – In long‑running or ANSI‑heavy workflows, agent cannot read its own tool results, causing message loss. P1, platinum rating. |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | 15 | 1 | **Second message fails: “reply session initialization conflicted”** – Cross‑channel, position‑dependent bug affecting Signal and other channels. P1 gold shrimp. |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | 13 | 2 | **Latency & crash loops with Active Memory + Codex** – Combines memory backend, context engine, and Codex to cause long response times and startup aborts. P1 diamond lobster. |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 12 | 1 | **Duplicate identical replies on Telegram after 5.20 update** – Regression; severity reduced from 8‑10x to 2‑3x after 5.22, but still unfixed. P1 diamond lobster. |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 12 | 3 | **180s compaction timeout fails identically every turn** – No partial‑progress reuse makes long compactions unrecoverable. P1 diamond lobster. |

The underlying needs are clear: **better cross‑platform support**, **more resilient session management**, and **fixes for regressions that erode user trust** in the agent’s reliability.

## 5. Bugs & Stability

Several new or updated high‑severity bugs demand attention:

### P1 – Platinum / Diamond Lobster (most critical)
- **[`#113434`](https://github.com/openclaw/openclaw/issues/113434) (new, updated today)** – *Codex sessions.reset reuses retired session ID; catalog/file scans exhaust Gateway RAM* – On Windows 11, repeated session scans cause Gateway‑wide memory growth until crash. **Fix PR not yet linked.**
- **[`#113315`](https://github.com/openclaw/openclaw/issues/113315) (updated today)** – *Telegram inbound update permanently lost after offset persistence* – Offset acknowledged but no ingress log produced; **linked PR open** (though not yet merged).
- **[`#111519`](https://github.com/openclaw/openclaw/issues/111519) (updated today)** – *Telegram DM replies fall back after stale DM‑scope cleanup in 2026.7.2‑beta.3* – Reply ownership lost; recovery only through conversations.send fallback. P1 diamond lobster.
- **[`#106403`](https://github.com/openclaw/openclaw/issues/106403) (updated today)** – *Terminal‑main reconciliation gate silently resets healthy session* – Post‑run transcript mtime race causes silent roll‑over. P1 diamond lobster.
- **[`#94536`](https://github.com/openclaw/openclaw/issues/94536) (updated today)** – *Commitment marked ‘sent’ but never delivered* – PR #92231 fix incomplete; second case still failing. P2 silver shellfish.
- **[`#95840`](https://github.com/openclaw/openclaw/issues/95840) (updated today)** – *contextPruning cache‑ttl never fires for OpenAI models* – Provider exclusion leaves highest‑volume provider without idle‑gap firebreak. No fix PR yet.

### Recent Regressions
- **[`#112696`](https://github.com/openclaw/openclaw/issues/112696) (new, updated today)** – *Control UI 2026.7.1‑2: agent avatar + session list regressions in multi‑agent setups* – Workspace‑relative avatars not loading; session list misordering. P1 silver shellfish.
- **[`#113474`](https://github.com/openclaw/openclaw/issues/113474) (closed today)** – *Gateway crash loop on Raspberry Pi 5* – Systemd restart sawtooth. Instrumentation added but root cause not yet identified.

### Resolved Today
- **`#99263`** – *ERR_INVALID_STATE crash on Node 26 (file handle closed by GC)* – Closed, fix merged.
- **`#98673`** – *sanitizeContentBlocksImages incorrectly converts text tool results to image blocks* – Closed, fix merged.
- **`#99346`** – *WebChat direct restart recovery splits session across boot/main* – Closed, fix merged.

**Overall**, stability is the dominant concern. Many P1 issues remain open with no fix PRs (despite “no-new-fix-pr” labels suggesting they are queued for later). The volume of regressions after recent updates indicates a need for more regression testing before beta releases.

## 6. Feature Requests & Roadmap Signals

Top user‑requested features (by reactions and discussion activity):

| Issue | 👍 | Feature | Likelihood for next release |
|-------|----|---------|-----------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 80 | **Linux/Windows native apps** (Clawdbot) | **High** – Long‑standing, high demand, product decision in progress. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | 8 | **Denylist for exec‑approvals** – “Allow all except X” policies. | **Medium** – Linked PR open, needs security review. |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 5 | **Per‑agent dreaming configuration** – Avoid OOM kills by controlling memory‑core dreaming per workspace. | **Medium** – Linked PR open, diamond lobster rating. |
| [#42026](https://github.com/openclaw/openclaw/issues/42026) | 3 | **Distributed Agent Runtime** – Split gateway into control plane + agent runtime. | **Low** – Still RFC stage, requires major architectural change. |
| [#82336](https://github.com/openclaw/openclaw/issues/82336) | 1 | **Expose plugin approval APIs for HITL** – Allow external human‑in‑the‑loop gating. | **Medium** – Narrow scope, product decision needed. |
| [#38520](https://github.com/openclaw/openclaw/issues/38520) | 1 | **Pre‑compaction agent notification + deferral** – Safer compaction for long workflows. | **Low** – No linked PR, still conceptual. |

Given the maintenance focus on stability, feature work is likely to proceed only for **#75** (apps) and **#6615** (denylist), which have existing PRs or clear designs. The distributed runtime (#42026) is a longer‑term strategic initiative.

## 7. User Feedback Summary

User sentiment is a mix of **enthusiasm for the platform’s capabilities** and **frustration with regressions and missing fundamentals**.

### Common Pain Points
- **Session reliability**: Frequent complaints about “reply session initialization conflicted”, duplicate replies, lost tool outputs, and silent message drops. Users on Telegram and Signal are especially affected.
- **Migration issues**: Upgrades (e.g., 5.28→6.1, 6.11→7.2‑beta) break cron stores, auth profiles, or UI behaviour, requiring manual `doctor --fix` steps.
- **Missing platforms**: #75 shows strong desire for Linux/Windows native apps; many users likely self‑host on those OSes.
- **Performance under load**: Compaction timeouts, memory spikes, and event‑loop stalls plague setups with Active Memory or large histories.
- **Tool restrictions**: Lack of per‑spawn/denylist controls forces users to trust sub‑agents with full tool access, raising security concerns.

### Use Cases Evident
- Personal assistant / automation (multi‑agent, Telegram/Discord)
- Development workflows (Codex integration, CLI)
- Enterprise deployment (Azure Foundry, HITL, policy enforcement)

### Satisfaction Indicators
- High reaction counts on feature requests show strong community alignment.
- Many users contribute detailed bug reports and test cases, indicating active investment.
- 330 PRs merged/closed today signals responsiveness from maintainers.

### Dissatisfaction Indicators
- High proportion of P1 open bugs with no fix PRs.
- Repeated regressions after minor updates erode trust in release quality.
- Long‑pending product decisions (“needs‑product‑decision” label on many issues) frustrate contributors.

## 8. Backlog Watch

Several important items have been awaiting maintainer action for weeks or months:

| Item | Since | Label | Status |
|------|-------|-------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) – Linux/Windows apps | 2026‑01‑01 | `needs‑product‑decision`, `needs‑security‑review` | No decision yet despite 115 comments. |
| [#42026](https://github.com/openclaw/openclaw/issues/42026) – Distributed Runtime RFC | 2026‑03‑10 | `needs‑product‑decision`, `needs‑security‑review` | Stale; no PR. |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) – Per‑spawn tool restrictions | 2026‑02‑12 | `needs‑product‑decision`, `needs‑security‑review` | Linked PR open but stalled. |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) – Suppress sub‑agent announce | 2026‑02‑03 | `needs‑product‑decision` | No movement; user workaround fails. |
| [#11955](https://github.com/openclaw/openclaw/issues/11955) – Memory/Context improvements | 2026‑02‑08 | `needs‑product‑decision`, `needs‑security‑review` | Broad scope, no PR. |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) – Second message fails | 2026‑07‑08 | `needs‑maintainer‑review`, `needs‑info` | New but already tagged; maintainer review pending. |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) – Codex RAM exhaustion | 2026‑07‑24 | `needs‑maintainer‑review` | Critical memory leak; no fix PR yet. |

The `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels appear on dozens of issues, suggesting a bottleneck in maintainer capacity for triage and strategic decisions. Community contributors are actively submitting PRs (e.g., #114172, #113966), but many remain in “needs proof” or “waiting on author” states.

---

*Data as of 2026‑07‑27, collected from the [openclaw/openclaw](https://github.com/openclaw/openclaw) repository. All links reference GitHub issue/PR numbers.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Analysis Date:** 2026-07-27

## 1. Ecosystem Overview

The personal AI agent open-source landscape is undergoing a period of intense differentiation, with projects largely converging on modular, plugin-based architectures but diverging sharply in stability maturity and target deployment environments. Most projects are Python/TypeScript-based agents built on shared patterns (session management, channel adapters, model routing, tool execution sandboxes), yet each faces a common tension between rapid feature iteration and the reliability demands of production personal assistants. Community engagement remains vigorous—across the tracked projects, hundreds of PRs and issues move daily—but maintainer bottlenecks and regression-prone releases suggest the ecosystem is still in an "early majority" phase where stability is the primary barrier to broader adoption. A notable sub-trend is the emergence of Rust-based components (IronClaw, ZeroClaw) for performance-critical subsystems, signaling a maturation beyond pure scripting-language implementations.

## 2. Activity Comparison

| Project | Issues (Open/Total) | PRs (Open/Merged Today) | Release Status | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 247 / 344 | 170 / 330 | No release | ⚠️ **High velocity, stability struggling** |
| **ZeroClaw** | 50 (all open) | 48 / 2 | No release, v0.8.4 imminent | ✅ **High velocity, active bug-fixing** |
| **Hermes Agent** | 41 / 50 | 42 / 8 | No release (v0.19.0 latest) | ✅ **High activity, security-focused** |
| **IronClaw** | 4 / 4 | 11 / 6 | No release, release PR blocked | ✅ **Deep engineering, slow release cadence** |
| **NanoBot** | 2 / 9 | 7 / 22 | No release | ✅ **Healthy, rapid bug turnaround** |
| **CoPaw** | 12 / 13 | 8 / 0 | No release (QwenPaw 2.0.1 latest) | ⚠️ **Moderate activity, no merges today** |
| **Moltis** | 0 / 0 | 8 / 0 | No release | ✅ **Feature velocity high, no bugs reported** |
| **PicoClaw** | 2 / 4 | 6 / 1 | No release | ⚠️ **Moderate, stale high-severity bugs** |
| **NanoClaw** | 2 / 2 | 6 / 2 | No release | ✅ **Active, catching regressions quickly** |
| **LobsterAI** | 1 / 2 | 7 / 1 | No release | ❌ **Low activity, stale PR backlog** |
| **NullClaw** | 1 / 1 | 0 / 0 | No release (v2026.5.29) | ❌ **Critical unaddressed crash, minimal activity** |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | No activity | 💤 **Dormant** |

*Health Score: ✅ active & stable; ⚠️ active but with stability concerns; ❌ low activity or critical issues; 💤 dormant

**Key observation:** The ecosystem is bimodal—projects with high issue/PR volume (OpenClaw, ZeroClaw, Hermes) experience both rapid advancement and regression pain, while lower-activity projects (LobsterAI, NullClaw) risk accumulating unresolved critical bugs.

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community engagement:** 344 issues and 500 PRs touched in 24 hours—exceeds ZeroClaw (50 each) and Hermes (50 each) by an order of magnitude. This creates richer bug reporting and community-driven feature validation.
- **Most extensive channel support:** Discord, Telegram, Signal, QQ Bot, Mattermost, plus a reference Web UI—broader than any single peer project.
- **Plugin-first architecture:** PR #112812 (moving schemas to plugins) and the Clawdbot app ecosystem indicate a deliberate modularity strategy that rivals only Moltis's ACP-based approach.

**Technical approach differences:**
- OpenClaw uses a centralized gateway model with `Clawdbot` native apps, while ZeroClaw and IronClaw lean toward more distributed runtime architectures (Rust-based gateways, sandboxed subprocesses).
- OpenClaw's session management is more fragile than peers: issues like #102020 (reply session initialization conflicted) and #99241 (unreadable tool outputs) are unique to OpenClaw's session state model. NanoBot and Hermes have addressed analogous bugs more rapidly.

**Community size comparison:**
- OpenClaw's 115-comment thread on Linux/Windows native apps (#75) dwarfs similar requests in LobsterAI (#273, 2 comments) or NullClaw (none), confirming dominant market position for feature demand signaling.
- However, OpenClaw's `needs-product-decision` label on many high-interest issues (including the long-standing #75) suggests strategic bottlenecks that lower-volume projects (NanoBot, Moltis) avoid through more agile maintainer decision-making.

**Risk:** OpenClaw's scale may become a liability—344 daily issues vs. 2-50 in peers indicates potential signal-to-noise problems and maintainer overwhelm. The 7-month-open #75 with no decision is a cautionary signal.

## 4. Shared Technical Focus Areas

Multiple projects are converging on the same requirements, indicating ecosystem-level gaps:

| Requirement | Affected Projects | Specific Needs |
|---|---|---|
| **Cross-platform desktop apps (Linux/Windows)** | OpenClaw (#75), LobsterAI (#273), NullClaw (#976 aarch64) | Native clients beyond macOS/iOS; ARM64 stability for low-power servers |
| **Session reliability & message integrity** | OpenClaw (#99241, #102020), Hermes (#72348), NanoClaw (#3140, #3136), CoPaw (#6470, #6474) | Silent message drops, duplicate replies, corrupted routing, tool output loss |
| **Security hardening** | Hermes (#71682, #72355), PicoClaw (#3297), ZeroClaw (#9233, #9386), Moltis (#1170) | Sandbox escapes, credential leaks, container privilege escalation, remote exec controls |
| **Provider/model compatibility** | OpenClaw (context pruning cache), NanoBot (#5040 MCP schema), CoPaw (#6470 MCP transport), ZeroClaw (#9386 Gemini key leak) | MCP transport flexibility, schema normalization, tool output format parity |
| **Configuration & migration UX** | OpenClaw (#99263, #114033 auth cutover), Hermes (#72093 WAL-reset warning), NanoClaw (#3140 explicit migration), IronClaw (#6575 systemd quoting) | Breaking changes causing silent data loss; insufficient rollback paths |
| **Extensibility / plugin systems** | OpenClaw (plugin-first), NanoBot (#5098 extension platform), Moltis (#1169 ACP agent), CoPaw (#6387 on-demand install) | Standardized plugin lifecycle; per-agent/per-profile tool restrictions |

**Most widespread pain point:** **Silent message loss** appears across 5 of 8 active projects—a systemic reliability gap that undermines user trust in AI agents for personal automation.

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | IronClaw | CoPaw | Moltis |
|---|---|---|---|---|---|---|---|
| **Primary language** | TypeScript/Node | Rust | TypeScript/Node | TypeScript/Node | Rust | TypeScript | Rust |
| **Core architecture** | Centralized gateway + native apps | Rust daemon, cross-platform CLI | Gateway with multi-profile | Unified session, rapid fix cycles | Wasmtime-based Reborn runtime | QwenPaw overlay on OpenClaw | ACP-native, multi-protocol |
| **Target users** | Broad (personal assistant, enterprise) | CLI power users, self-hosters | Enterprise, security-conscious | Developers, Raspberry Pi users | High-integrity automation (crypto, signing) | Chinese-language users | Developers, Buzz/Nostr communities |
| **Key feature differentiator** | Largest channel & plugin ecosystem | Comprehensive sandboxing (Landlock) | Profile isolation, multi-platform | Bug fix velocity (24-48h turnaround) | Error-recoverability contract | Visual Compact, Chinese localization | ACP agent → multi-protocol bridge |
| **Stability posture** | Regression-prone, high volume | Actively hardening for v0.8.4 | Security patches + salvage merges | Rapid "fix and merge" | Deep testing (mutation, recoverability) | Moderate, regressions in 2.0.1 | Low bug surface, features-focused |
| **Community contribution model** | Large, diverse, but bottlenecked | Contributor-driven with PRs | First-time contributor friendly | Quick maintainer response | Architectural RFCs + reference implementations | First-time contributor friendly | Maintainer-heavy, PRs from team |

**Key insight:** No project has yet solved the stability-vs-velocity tradeoff. OpenClaw and CoPaw prioritize feature breadth at the cost of regressions; IronClaw and Moltis prioritize architectural quality at slower release cadences; NanoBot demonstrates that small-team agile can achieve both but may not scale.

## 6. Community Momentum & Maturity

**Tier 1: High Velocity, Large Community**
- **OpenClaw**, **ZeroClaw**, **Hermes Agent** — Hundreds of daily updates, active PR pipelines, strong contributor bases. These projects are defining the ecosystem's direction but carry significant stability baggage. ZeroClaw shows the best balance of high activity plus structured release planning (v0.8.4 imminent with explicit changelog).

**Tier 2: Active, Small-to-Medium Community**
- **NanoBot**, **CoPaw**, **Moltis**, **IronClaw** — Fewer daily updates but higher signal-to-noise. NanoBot's 22 merges/day with only 2 open issues is exemplary. IronClaw's deep engineering (mutation testing, recoverability conformance) represents the most sophisticated quality investment. Moltis's zero open bugs is notable.

**Tier 3: Moderate Activity, Niche Focus**
- **PicoClaw**, **NanoClaw** — Smaller contributor bases, focused feature sets (PicoClaw: lightweight agent; NanoClaw: privacy/resource-constrained). Risk of stagnation if critical bugs aren't addressed (PicoClaw's deltachat startup error, 8 days stale).

**Tier 4: Low Activity / Stalled**
- **LobsterAI** — 7 stale PRs (3 months), a critical gateway restart bug (#1243) unaddressed. Requires maintainer intervention to avoid atrophy.
- **NullClaw** — Single critical crash (#976) unaddressed for 11 days; no recent PRs. Shows signs of project abandonment or maintainer hiatus.
- **ZeptoClaw** — Dormant.

**Maturity assessment:** The ecosystem is **early growth**—no project has achieved "stable production" status. NanoBot and IronClaw have the highest stability signals but lack the breadth of channel support. OpenClaw has breadth but not depth of reliability. The next 6 months will likely see consolidation around 2-3 dominant platforms.

## 7. Trend Signals

### 1. **"Asynchronous Agent" is the next UX frontier**
Multiple projects (CoPaw #6475 notice_after_complete, OpenClaw tool output handling, NanoBot Dream batch progress) point to user demand for agents that can multitask—start a background job, notify later, and continue the conversation. Single-turn blocking agents are insufficient for real-world workflow automation.

### 2. **Cross-platform is the unaddressed elephant**
Despite being the #1 feature request across projects (OpenClaw #75, LobsterAI #273, NullClaw aarch64 crash), native Linux/Windows desktop support remains absent. The common architecture pattern (gateway + web UI) suggests mobile-first design, but power users on Linux/Windows self-host. This is a strategic opportunity for any project that ships robust desktop clients.

### 3. **Security is moving from optional to architectural**
Hermes's container privilege escalation fix (#71682), ZeroClaw's Landlock sandbox (#9233), Moltis's operator authorization (#1170), and PicoClaw's remote exec hardening (#3297) all emerged in a single day. The ecosystem is internalizing that personal AI agents with tool execution capabilities require permission models, not just sandboxes. Expect more OAuth (ZeroClaw #9420) and attestation (IronClaw #6672) integrations.

### 4. **Provider/model compatibility is the new "dependency hell"**
NanoBot's MCP schema normalization (#5057), CoPaw's MCP transport hardcoding (#6470), OpenClaw's context pruning cache gaps (#95840), and ZeroClaw's Gemini key leak (#9386) all stem from the same root: agents are only as reliable as their most finicky LLM provider integration. This will drive either standardization (MCP profiles) or provider-agnostic validation layers.

### 5. **Fork-based development is accelerating**
The emergence of NanoClaw (fork of NanoBot?), NullClaw (aarch64-focused fork?), and CoPaw (QwenPaw overlay) suggests the ecosystem is fragmenting as users fork to fix specific pain points rather than waiting for upstream. This is both a strength (the OSS model working) and a risk (duplicate effort, incompatible plugin ecosystems).

### 6. **Rust is winning for performance-critical subsystems**
ZeroClaw (Rust daemon), IronClaw (Wasmtime runtime), and Moltis (Rust core) represent a clear architectural trend toward Rust for agent infrastructure. OpenClaw and Hermes remain TypeScript-dominant, which may become a competitive disadvantage for CPU-bound tasks (compaction, sandboxing, MCP serving) on resource-constrained devices.

---

**Bottom line for developers/decision-makers:**
- **For maximum reach:** OpenClaw's ecosystem is unmatched, but allocate time for regression testing.
- **For production reliability today:** NanoBot (rapid fixes) or IronClaw (deep engineering) offer the best stability-to-feature ratios.
- **For security-sensitive deployments:** Hermes (profile isolation) or ZeroClaw (Landlock + CI hardening) lead the pack.
- **The cross-platform desktop gap** is the single largest unmet user need across the ecosystem—any project that ships solid Linux/Windows native apps will capture significant market share.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-27

## 1. Today's Overview
The project saw **high activity** over the past 24 hours: **9 issues** were updated (2 remain open, 7 closed) and **29 pull requests** were touched (7 open, 22 merged or closed). No new release was published, but a significant volume of bug fixes and minor features were integrated. The community is actively reporting and helping resolve edge‑case reliability issues, and maintainers are responding quickly – most reported bugs already have merged fix PRs. The open PR for a **unified extension platform** (#5098) signals ongoing architectural work.

## 2. Releases
None.

## 3. Project Progress
**22 PRs were merged or closed** in the last 24 hours. Key advances:

- **Heartbeat routing for unified sessions** – PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) merged. Fixes the bug where heartbeat delivery failed when using a single unified session (Issue #4924). Now persists the latest `channel:chat_id` route and uses it for target selection.
- **MCP tool schema normalization** – PR [#5057](https://github.com/HKUDS/nanobot/pull/5057) merged. Resolves #5040 by converting local JSON‑Pointer `$ref`s to `#/$defs/` – critical for providers like Kimi/Moonshot that reject arbitrary refs.
- **Dream batch progress fix** – PR [#5054](https://github.com/HKUDS/nanobot/pull/5054) merged. Prevents completed no‑op Dream batches from starving later history (Issue #5041). Now correctly advances the cursor even when durable memory has no diff.
- **Length recovery improvement** – PR [#5056](https://github.com/HKUDS/nanobot/pull/5056) merged. Accumulates all output segments after `finish_reason="length"` instead of losing earlier segments (Issue #5051).
- **Pending message runtime context** – PR [#5084](https://github.com/HKUDS/nanobot/pull/5084) merged. Fixes Issue #4064 by resolving trusted metadata blocks and `RuntimeContextProvider` entries before injecting pending messages into an active turn.
- **Extra bwrap bind roots** – PR [#4625](https://github.com/HKUDS/nanobot/pull/4625) merged. Adds `tools.exec.sandbox.extra_bind_roots` configuration so deployments can expose user‑level tool directories (e.g., `~/.local/bin`) inside the bwrap sandbox.
- **Idle compaction scan interval** – PR [#5036](https://github.com/HKUDS/nanobot/pull/5036) merged. Makes the idle compaction interval configurable, addressing high CPU usage on resource‑constrained devices (e.g., Raspberry Pi).
- **DingTalk chat improvements** – PR [#4446](https://github.com/HKUDS/nanobot/pull/4446) merged. Adds `disable_private_chat` flag and group‑reply sender mention.
- **CLI Codex OAuth support** – PR [#4939](https://github.com/HKUDS/nanobot/pull/4939) merged. Exposes OpenAI Codex in Quick Start with OAuth flow.
- **Null‑safe loading** – Several PRs prevent crashes from null values in `pairing.json`, `triggers.json`, and Feishu card extraction ([#5088](https://github.com/HKUDS/nanobot/pull/5088), [#5087](https://github.com/HKUDS/nanobot/pull/5087), [#5089](https://github.com/HKUDS/nanobot/pull/5089)).
- **WebUI mobile layout** – PR [#5100](https://github.com/HKUDS/nanobot/pull/5100) merged. Prevents long messages from widening the thread view on mobile.

## 4. Community Hot Topics
- **Extension platform (PR #5098)** – [PR #5098](https://github.com/HKUDS/nanobot/pull/5098) (open, 0 comments) proposes a unified, governed extension platform. This is a large feature that would make extensions a first‑class capability. The community is likely watching closely as it touches the core agent loop.
- **`/stop` message loss (Issue #4792)** – [Issue #4792](https://github.com/HKUDS/nanobot/pull/4792) (open, 2 comments) describes a critical bug where the `/stop` command silently discards queued messages instead of re‑publishing them. No fix PR exists yet. This is a high‑impact bug for any user relying on message queues.
- **Subagent profiles (Issue #1012)** – [Issue #1012](https://github.com/HKUDS/nanobot/pull/1012) (open, stale, 2 comments) requests configurable subagent types with different tools/skills. Despite being opened in February, it remains a frequently referenced feature.

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | `/stop` silently discards pending messages – permanent message loss ([#4792](https://github.com/HKUDS/nanobot/pull/4792)) | **Open** | None yet |
| High | Dream no‑op batches starve later history ([#5041](https://github.com/HKUDS/nanobot/pull/5041)) | Closed | [#5054](https://github.com/HKUDS/nanobot/pull/5054) |
| High | Length recovery loses earlier output segments ([#5051](https://github.com/HKUDS/nanobot/pull/5051)) | Closed | [#5056](https://github.com/HKUDS/nanobot/pull/5056) |
| High | MCP schema with non‑`#/$defs/` refs disables entire model on strict providers ([#5040](https://github.com/HKUDS/nanobot/pull/5040)) | Closed | [#5057](https://github.com/HKUDS/nanobot/pull/5057) |
| Medium | Pending mid‑turn messages lose runtime context ([#4064](https://github.com/HKUDS/nanobot/pull/4064)) | Closed | [#5084](https://github.com/HKUDS/nanobot/pull/5084) |
| Medium | Heartbeat fails with unified session ([#4924](https://github.com/HKUDS/nanobot/pull/4924)) | Closed | [#4928](https://github.com/HKUDS/nanobot/pull/4928) |
| Low | Null values in pairing/triggers/Feishu cards cause crashes ([#5088](https://github.com/HKUDS/nanobot/pull/5088), [#5087](https://github.com/HKUDS/nanobot/pull/5087), [#5089](https://github.com/HKUDS/nanobot/pull/5089)) | Closed | Respective PRs |

All bugs except #4792 have been addressed with merged fix PRs – a strong sign of project health and quick turnaround.

## 6. Feature Requests & Roadmap Signals
- **Extension platform** – PR [#5098](https://github.com/HKUDS/nanobot/pull/5098) (open) is a major architectural addition. If accepted, it could appear in the next release as a core capability.
- **Subagent profiles** – Issue [#1012](https://github.com/HKUDS/nanobot/pull/1012) (stale) remains the oldest open feature request. Its long dormancy may indicate it is not a priority, but community interest persists.
- **Idle compaction configurability** – PR [#5036](https://github.com/HKUDS/nanobot/pull/5036) (merged) responded directly to a real‑world pain point (Raspberry Pi CPU usage). Such low‑resource optimizations may be a recurring theme.
- **Skill caching** – PR [#4301](https://github.com/HKUDS/nanobot/pull/4301) (open, conflict label) would improve agent startup performance. It is blocked by conflicts and may need maintainer attention to merge.
- **Image provider proxy** – PR [#5101](https://github.com/HKUDS/nanobot/pull/5101) (open) and PR [#5095](https://github.com/HKUDS/nanobot/pull/5095) (open) indicate ongoing work on provider image URL downloading and SSRF hardening. Likely to be included in the next release.

## 7. User Feedback Summary
- **Satisfaction drivers**: Rapid bug fixes (48‑hour turnaround for most reported issues), attention to edge cases (null maps, MCP schema compatibility, Dream cursor), and responsiveness to resource‑constrained deployments.
- **Pain points**: The `/stop` command message loss is an unresolved reliability gap. Users also experienced confusion with heartbeat failures in unified session mode and length recovery dropping content – both now fixed. The lack of configurable subagent types continues to be a requested feature.
- **Use cases**: Production deployments on Raspberry Pi (idle compaction), enterprise DingTalk bots (private chat control), and multi‑provider setups (Kimi/Moonshot, Gemini, Codex) are actively supported.

## 8. Backlog Watch
- [Issue #1012](https://github.com/HKUDS/nanobot/pull/1012) – **Subagent profiles** (created Feb 2026, stale). Needs a maintainer decision: adopt, close, or mark as postponed.
- [PR #4301](https://github.com/HKUDS/nanobot/pull/4301) – **Skill caching** (open with conflict label). Awaiting rebase or conflict resolution.
- [Issue #4792](https://github.com/HKUDS/nanobot/pull/4792) – **`/stop` message loss** (open, no fix PR). High‑severity bug that should be prioritised.
- [PR #5098](https://github.com/HKUDS/nanobot/pull/5098) – **Extension platform** (open). Large feature that may require extended review; community input will help shape the final design.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-27

## Today’s Overview

The project is experiencing a **high-activity day** with 50 issues and 50 PRs updated in the last 24 hours, indicating strong community and maintainer engagement. Nine issues were closed, and eight PRs were merged or closed, reflecting steady progress on bug fixes and feature work. No new releases were published, but the volume of open work (41 open issues, 42 open PRs) suggests that several important fixes and features are approaching readiness for a future release. Security and stability concerns dominate today's contributions, with multiple P0–P1 patches addressing session state loss, container privilege escalation, and system prompt cache breakpoints.

## Releases

No new releases were made today. The latest stable version remains v0.19.0 (as referenced in issue #72351). No migration notes are available.

## Project Progress

### Merged / Closed PRs Today
- [#72373](https://github.com/NousResearch/hermes-agent/pull/72373) — Fix `NameError` for `_history_media_paths` in gateway message handler.
- [#72368](https://github.com/NousResearch/hermes-agent/pull/72368) — Tighten TCPConnector keepalive for WeChat Work (WeiXin) to drain CLOSE_WAIT sockets.
- [#72375](https://github.com/NousResearch/hermes-agent/pull/72375) — Parse “exceeds maximum output tokens” error for retry logic (fixes #72281).
- [#72374](https://github.com/NousResearch/hermes-agent/pull/72374) — Mattermost adapter warns instead of silently ignoring unknown `reply_mode`.
- [#72358](https://github.com/NousResearch/hermes-agent/pull/72358) — Session pruning now preserves recently active conversations (salvage of #71043).
- [#72359](https://github.com/NousResearch/hermes-agent/pull/72359) — Telegram fallback transport no longer leaks file descriptors on connect failure.
- [#72356](https://github.com/NousResearch/hermes-agent/pull/72356) — Compaction summary retained on turn-end override (salvage of #72145).
- [#72361](https://github.com/NousResearch/hermes-agent/pull/72361) — Lazy deps activation stops phantom backend refreshes during `hermes update`.
- [#72366](https://github.com/NousResearch/hermes-agent/pull/72366) — Platform reconnect watcher now uses task-level supervision (salvage of #71867).
- [#72362](https://github.com/NousResearch/hermes-agent/pull/72362) — Move CVE pins to current fixed versions (`cryptography`, `starlette`, `python-multipart`).
- [#72353](https://github.com/NousResearch/hermes-agent/pull/72353) — System cache breakpoints preserved across provider failover (P0 fix, salvage of #72099).

### Closed Issues (significant)
- [#71576](https://github.com/NousResearch/hermes-agent/issues/71576) — [P0] Nous Portal prompt caching bug (39% vs 100% hit rate) fixed.
- [#70480](https://github.com/NousResearch/hermes-agent/issues/70480) — Docker image SQLite WAL-reset vulnerability addressed.
- [#71851](https://github.com/NousResearch/hermes-agent/issues/71851) — Duplicate report of Docker SQLite bug closed.
- [#72093](https://github.com/NousResearch/hermes-agent/issues/72093) — Stale WAL-reset warning on every `hermes update` fixed.
- [#60783](https://github.com/NousResearch/hermes-agent/issues/60783) — `huggingface-hub` pin conflict resolved.
- [#33595](https://github.com/NousResearch/hermes-agent/issues/33595) — Telegram model picker skipping providers without `api_key` fixed.
- [#46169](https://github.com/NousResearch/hermes-agent/issues/46169) — Desktop Ctrl+F/Cmd+F search feature implemented.

## Community Hot Topics

### Most Active Issues (by comment count)
1. **[#68871](https://github.com/NousResearch/hermes-agent/issues/68871) — Add messaging support for Buzz** (15 comments, 13 👍)  
   Feature request to integrate with Block’s open‑source Buzz workspace for human‑agent messaging. High community interest.

2. **[#62936](https://github.com/NousResearch/hermes-agent/issues/62936) — Telegram uploads >15 MB fail with TimedOut** (7 comments)  
   Persistent timeout issue for large media uploads; `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` ineffective.

3. **[#60783](https://github.com/NousResearch/hermes-agent/issues/60783) — `huggingface-hub` pin conflict** (7 comments, closed)  
   Dependency conflict breaking Hindsight local embeddings; resolved via new pin.

4. **[#12651](https://github.com/NousResearch/hermes-agent/issues/12651) — .env sanitizer does not remove `KEY=***` placeholders** (5 comments)  
   Old issue still open; documented as not removing stale placeholders.

5. **[#51184](https://github.com/NousResearch/hermes-agent/issues/51184) — Cron job false-positive delivery with broken LINE adapter** (4 comments)  
   Degraded adapter state not detected, leading to misleading success reports.

### Most Active PRs
While comment counts are not available, the following PRs received significant attention due to their criticality:
- [#72355](https://github.com/NousResearch/hermes-agent/pull/72355) — Fix multiline session env shell injection (P1 security).
- [#72353](https://github.com/NousResearch/hermes-agent/pull/72353) — System cache breakpoints across failover (P0).
- [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) — Stop container privilege escalation via s6 gateway log symlink (P1 security).

**Underlying need**: The community is demanding **security hardening**, **reliable session state**, and **better caching performance** (especially for Anthropic models routed through Nous Portal). The Buzz integration request signals a desire for more collaborative, room‑based human‑agent workflows.

## Bugs & Stability

### High Severity (P0–P1)
- **[#72351](https://github.com/NousResearch/hermes-agent/issues/72351) [P2? but new]** — GPT‑5.6 auto‑title sends unsupported `temperature` parameter, causing rejection. Fix PR [#72375](https://github.com/NousResearch/hermes-agent/pull/72375) addresses similar token exceed errors.
- **[#72348](https://github.com/NousResearch/hermes-agent/issues/72348) [P2]** — Discord allow/deny gates are process‑global, breaking per‑profile isolation under multiplex_profiles. No fix PR yet.
- **[#65208](https://github.com/NousResearch/hermes-agent/issues/65208) [P2]** — Cron inactivity timeout closes SessionDB while agent worker still running → silent session‑write loss. Fix PR [#72358](https://github.com/NousResearch/hermes-agent/pull/72358) partially addresses session pruning.
- **[#20577](https://github.com/NousResearch/hermes-agent/issues/20577) [P2]** — `<think>` blocks stripped from assistant history on replay to vLLM/custom provider, degrading multi‑turn reasoning. No fix PR.
- **[#67165](https://github.com/NousResearch/hermes-agent/issues/67165) [P2]** — CUA driver on macOS: ScreenCaptureKit returns `display_count=0` despite TCC permissions. Affects computer use feature.

### Medium Severity (P2–P3)
- **[#72383](https://github.com/NousResearch/hermes-agent/issues/72383) [new]** — Initiative to separate profile cloning from backup/restore (organizational improvement).
- **[#68756](https://github.com/NousResearch/hermes-agent/issues/68756) [P2]** — Desktop startup blocked ~11s on `/api/status` due to eager plugin resolution of `lark_oapi`. Performance regression.
- **[#72361](https://github.com/NousResearch/hermes-agent/pull/72361) [P3]** — Lazy deps activation fixes phantom backend refreshes.
- **[#55081](https://github.com/NousResearch/hermes-agent/issues/55081) [P2]** — MCP schema normalization renames tool parameter named `definitions` to `$defs` (unexpected behavior).
- **[#9812](https://github.com/NousResearch/hermes-agent/issues/9812) [P2]** — ACP sessions drop provider/base_url snapshot on first persist (data loss risk).

### Regressions Fixed Today
- Multiple “salvage” PRs (e.g., #72356, #72353) indicate regressions from prior merges were caught and patched quickly.

## Feature Requests & Roadmap Signals

### High Interest
- **[#68871](https://github.com/NousResearch/hermes-agent/issues/68871) — Buzz messaging integration** (13 👍)  
  Likely candidate for next major feature.
- **[#50643](https://github.com/NousResearch/hermes-agent/issues/50643) — GUI‑only Desktop installation for remote gateway** (3 👍)  
  Lightweight client demand.

### Emerging Patterns
- **Profile lifecycle improvements** — [#72383](https://github.com/NousResearch/hermes-agent/issues/72383) proposes separating clone/backup/restore; [#56802](https://github.com/NousResearch/hermes-agent/issues/56802) exposes multi‑profile gateway issues.
- **Session‑wide caps** — PR [#66600](https://github.com/NousResearch/hermes-agent/pull/66600) implements runaway‑loop caps for web_search and subagent spawning (Claude Code‑inspired).
- **Configurable compression warnings** — PR [#53958](https://github.com/NousResearch/hermes-agent/pull/53958) adds `warn_after_compressions` threshold.

**Prediction for next version**: Buzz adapter support, profile cloning overhaul, and session‑wide loop caps are likely to land. The compression warning config may also be included.

## User Feedback Summary

### Positive Signals
- Community actively contributes fixes and features (high PR volume).
- Users appreciate the rapid response to security issues (SQLite WAL‑reset, container privilege escalation).

### Pain Points
- **Telegram media uploads** remain unreliable for large files (issue #62936, no fix yet).
- **Docker image** continues to ship vulnerable SQLite despite warnings (though workaround documented).
- **Multi‑profile isolation** is broken for Discord (#72348) and cron/kanban (#56802).
- **Desktop startup performance** degraded by plugin import (e.g., Feishu/`lark_oapi`).
- **Model pickers** inconsistent: missing K3 flagship (#68153), custom provider model names with colons (#70650).
- **`hermes update** still prints WAL‑reset warning even after fix (#72093 closed, but user frustration noted).

### Satisfaction
- Prompt fix for Nous Portal prompt caching (#71576) received positive attention.
- Ctrl+F in Desktop (#46169) and `/approvals` command (#63517) were well-received additions.

## Backlog Watch

Issues that have been open for extended periods without maintainer response or resolution:

| Issue | Age (created) | Priority | Summary |
|-------|---------------|----------|---------|
| [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) | 2026-04-19 (99 days) | P2 | `.env` sanitizer does not remove `KEY=***` placeholders |
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) | 2026-03-28 (121 days) | P3 | Durable feedback routing for memory/skills |
| [#20577](https://github.com/NousResearch/hermes-agent/issues/20577) | 2026-05-06 (82 days) | P2 | `<think>` blocks stripped on replay to custom providers |
| [#9812](https://github.com/NousResearch/hermes-agent/issues/9812) | 2026-04-14 (104 days) | P2 | ACP sessions drop provider/base_url snapshot |
| [#42727](https://github.com/NousResearch/hermes-agent/issues/42727) | 2026-06-09 (48 days) | P2 | Agent‑led self‑configuration can persist redacted credentials |
| [#35892](https://github.com/NousResearch/hermes-agent/issues/35892) | 2026-05-31 (57 days) | P3 | `/whoami` shows in autocomplete but prints “Unknown command” |
| [#65265](https://github.com/NousResearch/hermes-agent/issues/65265) | 2026-07-15 (12 days) | P3 | Blackbox CLI “open-source” link points to 404 |

These items, especially the long‑standing `KEY=***` sanitizer issue (#12651) and the ACP session persistence bug (#9812), may need maintainer triage to determine if they are still reproducible or have been implicitly fixed. The `think` block stripping (#20577) is a multi‑turn reasoning blocker that has not seen a fix PR despite being P2.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-27

## 1. Today’s Overview
PicoClaw shows **moderate activity** in the last 24 hours: 4 issues and 7 pull requests were updated, with 1 PR merged and 1 issue closed. The merged PR (Go toolchain bump) addresses a security vulnerability, and a new bug-fix PR (#3295) directly targets a reported hanging issue. Three fresh PRs and one feature request were opened today, indicating steady contribution flow. No new releases were published; the project remains in an active development cycle with several open bug fixes and feature additions awaiting review.

## 2. Releases
No new releases have been published in the last 24 hours.

## 3. Project Progress
- **Merged/Closed PR:**  
  - [#3248 – fix: bump Go to 1.25.12](https://github.com/sipeed/picoclaw/pull/3248) – Remediated two `govulncheck` findings (`GO-2026-5856` in `crypto/tls` and `GO-2026-4970` in `os`) by upgrading the pinned Go toolchain.  
- **Closed Issue:**  
  - [#3252 – splitKnownProviderModel strips provider prefix](https://github.com/sipeed/picoclaw/issues/3252) – A bug that incorrectly removed the provider prefix from model IDs containing known provider aliases; was closed after a fix.

Other than the merged PR, no PRs were closed or merged today, so no additional features or bug fixes advanced to `main`.

## 4. Community Hot Topics
Activity on issues and PRs remains low in terms of comments; no item has more than two comments. The most notable items are:

- **Issue #3298 – [Feature] Add AI Router provider preset**  
  [Link](https://github.com/sipeed/picoclaw/issues/3298) – Opened today with zero comments, but signals a user’s desire for a **named provider** instead of using the generic `openai` endpoint. The author maintains AI Router and is willing to contribute.  
- **PR #3299 – Add native Exa web search provider**  
  [Link](https://github.com/sipeed/picoclaw/pull/3299) – A new feature PR opened today. Exa is a popular web search API; users likely want a first-class integration rather than a generic `web_search` adapter.  
- **PR #3297 – fix(security): harden remote prompt and exec boundaries**  
  [Link](https://github.com/sipeed/picoclaw/pull/3297) – A substantial security enhancement that keeps remote sender metadata in a normalized envelope, disables remote exec by default, and requires per-call approval. This PR addresses both user security concerns and compliance requirements.

**Underlying needs:** Users are asking for easier provider setup (AI Router, Exa) and stronger security boundaries for remote interactions.

## 5. Bugs & Stability
Two open bugs were updated today, both carrying the “stale” label:

- **#3265 – Gateway startup fails with ‘channel deltachat has unknown type deltachat’**  
  [Link](https://github.com/sipeed/picoclaw/issues/3265) – **Severity: High** (service cannot start). The error occurs even when deltachat is not configured, suggesting a config validation bug. No direct fix PR exists yet; a related fix for token refresh (#3267) touches antigravity but not deltachat.  
- **#3264 – SplitMessage hangs on oversized fenced-code info string**  
  [Link](https://github.com/sipeed/picoclaw/issues/3264) – **Severity: High** (infinite loop). A regression in message splitting. A fix PR **#3295** (opened today) directly addresses this with a bounded raw split fallback.  
- **#3295 – fix(channels): prevent SplitMessage hang**  
  [Link](https://github.com/sipeed/picoclaw/pull/3295) – Created today. Includes regression tests. This should resolve #3264.  
- **#3267 – fix scope bug for refresh agy token** (antigravity)  
  [Link](https://github.com/sipeed/picoclaw/pull/3267) – A bug that caused “PERMISSION_DENIED” after token refresh. Remains open and stale; may need maintainer attention.

**Summary:** Two high-severity bugs remain open; one has a fix PR (#3295), the other (#3265) lacks a clear solution. The deltachat startup error could be a configuration or registration issue.

## 6. Feature Requests & Roadmap Signals
- **#3298 – AI Router provider preset** – Would simplify connecting to AI Router by adding a dedicated provider entry in the config. Likely to be included in the next minor release if the contributor provides the implementation.  
- **#3299 – Exa web search provider** – A new native web search provider. Given the project’s focus on agent tools, this is a natural addition.  
- **#3296 – i18n: complete Czech code wrap labels** – A localization PR, indicating ongoing internationalisation efforts.

**Prediction for next version (e.g., v0.12.0):** At least one of the new provider PRs (#3299 or #3298) is likely to land, along with the security hardening (#3297) and the split-message fix (#3295). The Go version bump has already been merged.

## 7. User Feedback Summary
- **Pain points:**  
  - Confusing startup errors when an unused channel (deltachat) is reported as unknown (#3265).  
  - Message splitting can hang if a code fence info string is too long (#3264).  
  - Provider prefix stripping when the model ID itself looks like a provider name (#3252, fixed).  
- **Use cases:**  
  - Users want to integrate with external LLM routers (AI Router) and alternative web search APIs (Exa) without manual endpoint configuration.  
  - Security-conscious users require stricter boundaries for remote prompt execution (#3297).  
- **Satisfaction:** The closure of #3252 and the active bug-fix PRs indicate responsive maintenance. However, the two stale high-severity bugs (#3265, #3264) may frustrate users until they are resolved.

## 8. Backlog Watch
The following items have been open for over a week without a maintainer response or assignment:

- **#3265 – Gateway startup fails with deltachat error** (open since Jul 19). No assignee, no fix PR.  
- **#3264 – SplitMessage hang** (open since Jul 18). A fix PR (#3295) exists but is not yet merged. Needs review.  
- **#3267 – fix scope bug for refresh agy token** (open since Jul 19). Stale, no reviewer assigned.  
- **#3202 – fix(routing): strip leading/trailing underscores in ID normalization** (open since Jul 1). This PR has been idle for nearly four weeks and may affect user-facing agent IDs.

These items **require maintainer attention** to either merge, request changes, or provide guidance. The deltachat issue in particular could indicate a deeper channel registration problem.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-27

## Today’s Overview
NanoClaw saw moderate activity with two new issues and eight pull requests updated in the past 24 hours. Two PRs were merged—one fixing duplicate replies and another adding per-agent-group timezone support—while six remain open, covering WhatsApp shared-number silencing, delivery of internal thinking messages, engagement consistency, and a Dial integration. No new releases were made. The two issues both report silent message loss after recent breaking changes, signaling possible regressions that are already drawing contributor attention.

---

## Releases
None.

---

## Project Progress
Two pull requests were merged/closed today:

- **#3028** – `fix: avoid duplicate replies after send_message` – Prevents redundant final summaries when `send_message` already wrote a reply. *Status: Closed/Merged*  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/3028)

- **#3125** – `feat: per-agent-group timezone override` – Adds an optional IANA timezone per agent group (migration 020), with CLI support (`ncl groups config update --timezone`). *Status: Closed/Merged*  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/3125)

These represent progress on bot-avoidance behaviour and location-aware scheduling.

---

## Community Hot Topics
No issues or PRs generated comments today, but two newly opened issues highlight critical user concerns:

- **#3140** – `Explicit-destinations migration: pre-existing wirings have no own-chat destination — all replies silently dropped after update`  
  Author reports that after the breaking change requiring a named `to` destination, every reply in long-standing chat groups is silently dropped.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/3140)

- **#3136** – `sendToDestination stamps a foreign in_reply_to on outbound rows, silently losing messages to destinations with no inbound history`  
  Fallback to the waking batch’s `in_reply_to` corrupts return-path routing for destinations without prior inbound messages.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/3136)

Both issues are open, unassigned, and have no replies yet. Given their severity (silent message loss), they are expected to attract maintainer and community attention soon.

---

## Bugs & Stability
Two new bugs reported today, each with **high severity** (data loss):

| Issue | Description | Severity | Fix PR? |
|-------|-------------|----------|---------|
| [#3140](https://github.com/nanocoai/nanoclaw/issues/3140) | All replies silently dropped in pre-existing chat groups after explicit-destinations migration | **Critical** – no recovery path | None yet |
| [#3136](https://github.com/nanocoai/nanoclaw/issues/3136) | `sendToDestination` stamps foreign `in_reply_to`, breaking routing for destinations with no inbound history | **High** – silent loss, corner case but systematic | None yet |

Additional bugs addressed by open PRs today:

- **#3139** – Fixes WhatsApp shared-number mode where owner messages were incorrectly blanket-dropped.  
- **#3126** – Prevents delivery of silence or `<internal>` thinking messages.  
- **#3138** – Chat SDK attachment fallback to `fetch(url)` when `fetchData` is missing.  
- **#3122** – Fixes opencode compatibility for custom-endpoint transport and memory parity.

These are not yet merged but indicate active mitigation.

---

## Feature Requests & Roadmap Signals
Several open PRs hint at near-term roadmap items:

- **#3137** (Open) – `Fix engagement consistency and expose self-serve wiring controls`  
  Allows group-scoped agents to inspect wirings and request approved engagement-policy updates, while preserving global task group selection and rejecting invalid JavaScript regexes.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/3137)

- **#3050** (Open) – `feat(setup): add Dial to the channel picker + wizard/skills`  
  Implements a full Dial channel integration with `runChannelSkill` model. *Open since July 14.*  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/3050)

- **#3122** (Open) – `fix(opencode): main compatibility, custom-endpoint transport, memory parity`  
  Enhances opencode interoperability. *Open since July 23.*  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/3122)

The merged per-group timezone feature (#3125) is the only new feature landed today; the others are still maturing.

---

## User Feedback Summary
User pain points centre on **breaking changes and silent data loss**:

- **grtwrn** (Issue #3140) – After updating to the explicit-destinations model, pre-existing chat groups lose all replies without any error surface. The user explicitly reported the silent drop with poll-loop logs.
- **JoshuaJFogg** (Issue #3136) – Describes a subtle routing corruption that silently loses messages to destinations without inbound history. The bug is accompanied by a clear trace of the faulty `in_reply_to` fallback.

Both users are also active contributors (grtwrn submitted PR #3139; JoshuaJFogg’s profile suggests prior contributions). Their engagement signals a capable community that is willing to both report and fix issues. No explicit satisfaction or dissatisfaction was expressed beyond the bug reports.

---

## Backlog Watch
No long-unanswered issues or PRs were identified. The two new issues (#3140, #3136) are only one day old. However, the following open PRs have been pending for over a week and may benefit from maintainer review:

- **#3050** – Dial integration (opened July 14, last updated July 26) – Awaiting review/merge.
- **#3122** – opencode compatibility (opened July 23, last updated July 26) – Awaiting review.

These items are feature work rather than critical fixes, but their age suggests they are either low priority or blocked. The project health remains positive, with daily contributor activity and swift merges of smaller fixes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-27

## Today’s Overview
Project activity over the last 24 hours was minimal: a single open issue was updated (no new issues or PRs were created or closed). No new releases were published. The sole point of activity is a severe crash bug affecting aarch64 Linux deployments, which remains unresolved. This likely indicates a focused debugging effort or a lull in contributions. Overall project health is stable but warrants attention to a blocking stability issue.

## Releases
No new releases were published today. The latest tagged version remains **v2026.5.29**.

## Project Progress
No pull requests were closed or merged in the last 24 hours. No feature advancements or fixes were recorded.

## Community Hot Topics
Only one issue has seen recent discussion:
- **[#976 – SIGSEGV on every inbound Telegram message (Open)](https://github.com/nullclaw/nullclaw/issues/976)**  
  Author: wonhotoss | Comments: 3 | 👍: 0  
  This issue describes a **SIGSEGV crash** on every inbound Telegram message when running NullClaw (v2026.5.29) as a `systemd` service on aarch64 Linux. The root cause is identified as an inbound worker thread being spawned with a **~512 KB stack** that overflows. The crash-loop effectively drops all incoming messages, making the gateway unusable. The three comments likely include debugging observations and potential workarounds. The underlying need is for a *stable Telegram gateway* on ARM64 platforms, a common deployment choice for low-power devices.

## Bugs & Stability
One critical bug is actively affecting users:
- **Issue #976 – SIGSEGV on every inbound Telegram message (Severity: Critical)**  
  The crash occurs on aarch64 Linux for *every* inbound message, causing a crash-loop when `Restart=always` is used. No fix PR has been submitted yet.  
  **Impact:** Blocks all Telegram functionality on affected platforms. Users cannot receive replies.  
  **Status:** Open, no fix in progress visible.  
  **Suggested action:** The stack size for inbound worker threads should be increased (or made configurable), and contributors should test the fix on aarch64.

No other bugs, regressions, or stability reports were filed today.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the crash bug implicitly highlights a user need for *robust ARM64 support* and *configurable thread stack sizes*. The next version may include a hotfix for this specific crash if the maintainers prioritize platform stability.

## User Feedback Summary
The only expressed user pain point comes from the crash bug: Telegram messages are silently lost because the process restarts before replying. This indicates high dissatisfaction among aarch64 users, especially those relying on NullClaw as a gateway in headless environments. No positive feedback or testimonials were posted.

## Backlog Watch
No long-unanswered issues or PRs were identified beyond the single active issue. Issue #976 has been open for 11 days and updated yesterday, so it is being tracked. However, given its critical nature, the lack of a maintainer response or a fix PR is noteworthy. Maintainers should provide an update or assign resources to resolve this quickly.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-27

## Today’s Overview

Activity is **high** with 4 open issues and 17 pull requests updated in the last 24 hours. No new releases were published. The project is in an intensive engineering phase: 6 PRs were merged/closed (including significant refactors for error recoverability and a struct-ratchet hardening), while 11 remain open across feature branches, dependency bumps, and a pending release. The community is engaged around a large error-recoverability epic (#6284), and the daily failure taxonomy (#6682) points to ongoing model-quality improvements.

## Releases

None.

## Project Progress — Merged/Closed PRs

- **#6679** (merged) — *Harden struct ratchet and remove dead Gemini API*  
  Addresses review findings from the production struct ratchet, replaces line-oriented scanning with `syn` parsing for multi-line attributes/impl headers, and adds regression coverage. Also removes the unused Gemini API code.  
  [PR #6679](https://github.com/nearai/ironclaw/pull/6679)

- **#6677** (merged) — *test(reborn): compile-forced recoverability conformance matrix (§11.7 / #6284 item 7)*  
  Adds an exhaustive classifier (`RecoverabilityClass`) for seven error enums, enforcing the recoverability conformance matrix from the architecture doc. Supersedes #6677’s earlier draft.  
  [PR #6677](https://github.com/nearai/ironclaw/pull/6677)

- **#5369** (merged) — *fix(reborn): suppress Cranelift debug log floods*  
  Adds Cranelift/Wasmtime compiler targets to the noisy log guard, keeping `IRONCLAW_REBORN_LOG=debug` useful without flooding hosted logs. Includes a regression test.  
  [PR #5369](https://github.com/nearai/ironclaw/pull/5369)

- **#6365** (closed, superseded) — *[reference] P2b: per-user hosted-MCP discovery*  
  Reference PR from a deploy branch; superseded by a clean reimplementation (#6683) rebased on main.  
  [PR #6365](https://github.com/nearai/ironclaw/pull/6365)

- **#6640** & **#4032** (merged) — Regular dependency bumps (async-trait, thiserror, uuid, wit-component, wit-parser, etc.) to keep the build up to date.  
  [PR #6640](https://github.com/nearai/ironclaw/pull/6640) | [PR #4032](https://github.com/nearai/ironclaw/pull/4032)

## Community Hot Topics

- **Issue #6284 — [EPIC] error-recoverability endgame**  
  The most active issue with 8 comments. It defines a strict “recoverability contract”: every mid-run error must survive, be visible to the model, carry cause + corrective action, and give the model a turn to act without ever reporting a non-success. This epic is driving multiple PRs (#6684, #6677) and is a core architectural shift.  
  [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)

- **Issue #6682 — Daily ironclaw failure taxonomy — 2026-07-26**  
  Provides a benchmark-driven breakdown of failures (82 non-pass cases). Dominated by “genuine model-quality partial completions” — the agent produces valid but incomplete self-verifying outputs. This reflects a persistent user pain point around agent completion quality.  
  [Issue #6682](https://github.com/nearai/ironclaw/issues/6682)

## Bugs & Stability

**High severity:**  
- **Wrongful-terminal bugs** exposed by the failure-kind collapse PR (#6684). This open PR fixes four such bugs, each with a regression test. The bugs cause the run to incorrectly report terminal errors when recovery is possible.  
  [PR #6684](https://github.com/nearai/ironclaw/pull/6684) (open, directly addresses #6284)

- **`WorkingDirectory=` quoting bug** in the systemd unit file (issue #6575). Causes `Loaded: bad-setting` after `ironclaw onboard` on Linux. An open PR (#6652) fixes it by not quoting `Path`-type directives.  
  [Issue #6575](https://github.com/nearai/ironclaw/issues/6575) | [PR #6652](https://github.com/nearai/ironclaw/pull/6652)

**Medium severity:**  
- **Cranelift debug log floods** — fixed by merged PR #5369.  
- **Dead code: `DockerProcessSandboxBackend`** — identified as unused and superseded by the persistent sandbox. Issue #6686 proposes deliberate removal.  
  [Issue #6686](https://github.com/nearai/ironclaw/issues/6686)

**Low severity / ongoing:**  
- **Model-quality partial completions** — captured in daily taxonomy (#6682) as the leading failure category. Not a crash but a reliability/quality concern.

## Feature Requests & Roadmap Signals

- **Error-Recoverability Endgame (Epic #6284)**  
  Central roadmap item. PR #6684 (one failure vocabulary) and PR #6677 (conformance matrix) are key deliveries. Likely to land in the next release.

- **Unified model-visible safe text** (Issue #6688)  
  Proposes collapsing overlapping wrappers (`SafeSummary`, `LoopSafeSummary`, `ToolResultSafeSummary`, `ModelResultPreview`) into a single screened core. New, no comments yet — may be prioritized post-recoverability.  
  [Issue #6688](https://github.com/nearai/ironclaw/issues/6688)

- **Per-user hosted-MCP discovery** (PR #6683)  
  Clean reimplementation of P2b on top of post-refactor main. Enables worker agents with per-hire connector tools. Likely next feature after recoverability.  
  [PR #6683](https://github.com/nearai/ironclaw/pull/6683)

- **Attested-signing Phase B — signed intent + per-agent key lifecycle** (PR #6672)  
  Open XL PR implementing the cryptographic attestation that an agent crafted exactly the transaction for exactly the approver. Part of the Ledger revival plan.  
  [PR #6672](https://github.com/nearai/ironclaw/pull/6672)

- **Mutation test harness and escape-history targets** (PR #6681)  
  Runs next mutation-audit targets; also fixes a harness bug that had silently prevented output. Shows increasing investment in test quality.  
  [PR #6681](https://github.com/nearai/ironclaw/pull/6681)

## User Feedback Summary

- **Recoverability contract** (Issue #6284) — the community (author serrrfirat) is driving an ambitious standard for error handling. No dissent, but the complexity suggests cautious rollout.  
- **Model-quality concerns** (Issue #6682) — the daily taxonomy highlights that the agent’s dominant failure mode is partial completions, not crashes. Users likely experience runs that produce plausible but incomplete outputs — a dissatisfier that the recoverability epic aims to address.  
- **Systemd setup friction** (Issue #6575, PR #6652) — Linux users hit a “bad-setting” error on onboarding. The fix is small but affects user experience for new deployments.  
- **No direct user complaints** captured beyond these; feature PRs (#6683, #6672) indicate forward-looking demand for MCP and signing capabilities.

## Backlog Watch

- **PR #5598 — Release (chore: release)**  
  Open since 2026-07-03 with 0.5.0 breaking changes in `ironclaw_common` and `ironclaw_skills`. Updated 3 days ago but not merged. This blocks publishing a tagged release.  
  [PR #5598](https://github.com/nearai/ironclaw/pull/5598)

- **PR #5664 — Dependency bump (actions group, 16 updates)**  
  Open since July 5, includes critical CI tooling updates (GitHub Actions checkout, Claude Code action, etc.). Stale without new comments.  
  [PR #5664](https://github.com/nearai/ironclaw/pull/5664)

- **PR #6361 — Dependency bump (serde, serde_json)**  
  Open since July 20. Minor but should be merged to keep the serialization stack current.  
  [PR #6361](https://github.com/nearai/ironclaw/pull/6361)

- **PR #6428 — Dependency bump (tokio ecosystem)**  
  Open since July 21. Tokio updates may contain security fixes.  
  [PR #6428](https://github.com/nearai/ironclaw/pull/6428)

- **Issue #6686 — Dead code removal (DockerProcessSandboxBackend)**  
  No maintainer response yet. Low severity but cleanup maintains code health.  
  [Issue #6686](https://github.com/nearai/ironclaw/issues/6686)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-27

## Today’s Overview
Project activity over the past 24 hours has been low. Only **2 issues** were updated (one closed, one open with a serious bug), and **8 pull requests** were updated—all of which are marked `[stale]`, having been created in early April and untouched until yesterday’s refresh. No new releases or commits outside of PR comments were recorded. The volume suggests the maintainers are in a maintenance/bug-fix phase rather than active feature development. The stale PR queue (7 open, 1 recently closed) indicates a backlog that, if unaddressed, could slow future progress.

## Releases
No new releases were published. (The last recorded release is from earlier in 2026.)

## Project Progress
Only **one PR was closed/merged** in the last 24 hours:

- **#1325** (closed) – *feat(ui): 为新建对话图标按钮添加悬停提示* – Added `title` attributes to the “New conversation” icon button in collapsed sidebar and various views, providing native tooltips on hover. This is a minor but user-friendly accessibility improvement.

No other PRs advanced to merge; the remaining 7 open PRs are still under review or awaiting maintainer attention.

## Community Hot Topics
The most active issue by comment count (2 comments) and the only suggestion thread is:

- **#273** – *[Suggestion] 能否开发Ubuntu Linux版本？*  
  https://github.com/netease-youdao/LobsterAI/issues/273  
  **Status:** Closed (no further action taken).  
  **Underlying need:** Users running Linux (Ubuntu) cannot use LobsterAI natively; the request was acknowledged but closed, suggesting no immediate Linux support is planned.

The most discussed bug topic (1 comment, but high impact) is:

- **#1243** – *[BUG] qwen-portal-auth 插件配置循环写入导致网关频繁重启*  
  https://github.com/netease-youdao/LobsterAI/issues/1243  
  **Underlying need:** Stability – users face gateway restarts every 5–20 minutes, severely impacting usability. This is the only open bug issue and has received no fix confirmation.

## Bugs & Stability
One critical stability bug remains open:

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | **High** – Gateway restarts every 5–20 min | `qwen-portal-auth` plugin configuration loop causes OpenClaw gateway to repeatedly restart. Users see “AI 引擎正在启动网关...” popup frequently. | No direct fix PR is linked, but PR [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247) (“fix openclaw model switch recovery after provider limits”) may address related restart logic. However, #1247 is also stale and unmerged. |

No new bugs were reported today. The existing stale bugs continue to undermine reliability.

## Feature Requests & Roadmap Signals
The only explicit feature request in the last 24h was the closed Linux port suggestion (#273). However, several stale PRs signal planned improvements that could land in the next release if merged:

- **#1256** – *定时任务配置优化：支持自然语言*  
  Adds LLM-based natural language → cron conversion for scheduled tasks.  
- **#1252 / #1258** – *定时任务表单未保存更改确认弹窗*  
  Both implement “unsaved changes” confirmation dialogs, improving UX.  
- **#1249** – *fix(cowork): DiffView 不渲染*  
  Fixes tool name matching for `str_replace_editor`, `TextEditor`, `file_editor`, etc., enabling visual diff in Cowork sessions.  
- **#1257** – *fix(i18n): add missing ‘edit’ and ‘delete’ translation keys*  
  Completes internationalisation coverage.

These features (natural language scheduling, diff rendering, i18n polish) are likely candidates for the next minor release if maintainers review and merge the stale PRs.

## User Feedback Summary
- **Linux users** (Issue #273) express a clear desire for platform support beyond Windows, but the closure of the issue suggests the team is not prioritising this.
- **Stability frustration** (Issue #1243) – the gateway restart bug is a severe pain point, as it interrupts all AI interactions unpredictably. The lack of a confirmed fix is a source of dissatisfaction.
- **Positive signals** – the closed PR #1325 (tooltips) and the pending UX improvements (unsaved changes, natural language scheduling) show the team is listening to usability feedback, even if progress is slow.

## Backlog Watch
The following items have been **stale for months** and require maintainer attention. All were created on 2026-04-01/02 and updated on 2026-07-26 (likely by automated stale labelling). None have been merged or addressed.

### Open issues needing attention
- **#1243** (BUG) – Gateway restart loop. No fix merged yet.  
  https://github.com/netease-youdao/LobsterAI/issues/1243

### Open pull requests overdue for review
- **#1247** – Fix OpenClaw model switch recovery (affects stability, related to #1243)  
- **#1249** – Fix DiffView rendering for multiple tool names  
- **#1252** – Unsaved changes confirmation for scheduled tasks (duplicate of #1258)  
- **#1256** – Natural language support for scheduling  
- **#1257** – Missing i18n keys  
- **#1258** – Unsaved changes confirmation (alternative implementation)  
- **#1259** – Refactor OpenClaw bundling & dependency handling  

All 7 open PRs have no maintainer response. The project risks accumulating technical debt and user frustration if these are not triaged soon.

---

*Digest generated from LobsterAI GitHub data (github.com/netease-youdao/LobsterAI) for 2026-07-27.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-27

## Today’s Overview
Moltis remained in a high-feature velocity period with 8 open pull requests updated in the last 24 hours (none merged or closed) and zero new issues or releases. Activity is concentrated on expanding agent connectivity (ACP, Nostr, Slack) and hardening security, with no reported regressions or crashes. The absence of merged PRs today suggests maintainers are reviewing a large batch of interdependent changes before a likely near-term release.

## Releases
No new releases this period. The latest release remains the previous version; no migration notes are applicable.

## Project Progress
No pull requests were merged or closed today. All 8 updated PRs remain open, indicating ongoing review and iteration. Notable open PRs advancing core capabilities include:

- **ACP agent exposure (#1169)** – Allows Moltis to act as the backend agent for ACP harnesses (e.g., Zed, buzz-acp), a significant architectural inversion.
- **Slack per-message reactions & Block Kit (#1166)** – Improves Slack integration with acknowledgment reactions, phase feedback, and reconnect supervision.
- **Nostr NIP-29 group chat (#1168)** – Adds Buzz channel support via Nostr relay integration.
- **Memory backend with Zvec (#1158)** – Experimental vector database backend using `zvec` and `redb`, feature-gated behind a cargo feature.

## Community Hot Topics
All PRs had zero comments and zero reactions; no single issue drew community discussion. The most substantial technical conversation is likely occurring on PR #1166 (Slack) and #1169 (ACP agent), given their scope. These represent the main areas of active design debate. No issues were filed, so community engagement is concentrated on implementation proposals rather than bug reports or feature requests.

- [#1166 – Slack acknowledgments & Block Kit](https://github.com/moltis-org/moltis/pull/1166)
- [#1169 – Expose Moltis as ACP agent over stdio](https://github.com/moltis-org/moltis/pull/1169)

## Bugs & Stability
No new bugs were reported today. However, a **high-severity security issue** was addressed in [#1170 – Gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170). This fix prevents arbitrary host command execution via `/sh` in group chats (Discord, etc.) where any member who clears the channel access gate could previously execute shell commands. The PR adds an explicit operator authorization layer.

No other crashes or regressions were observed in the last 24 hours.

## Feature Requests & Roadmap Signals
Today’s open PRs all originate from maintainers and signal clear roadmap priorities:

- **Agent interoperability** – Moltis as both ACP client and agent (#1169) and moving ACP selection into the chat model picker (#1171) point toward a more unified agent integration UX.
- **Reliable PWA notifications** – #1173 fixes silent replacement of notifications; likely to land in the next patch release.
- **Memory flexibility** – #1158 (Zvec backend) is experimental but indicates user demand for local-first vector database options beyond the default.
- **Nostr group chat** – #1168 opens Moltis to Buzz/Nostr workspace environments, expanding collaboration use cases.

Predict for next release: #1170 (security fix) and #1173 (PWA reliability) are the strongest candidates for immediate merge, followed by #1171 (ACP UI refactor) and #1172 (archived Cron UX fix).

## User Feedback Summary
No explicit user feedback was captured in this period. The absence of bug reports and new issues may indicate general stability, but also suggests community feedback is happening outside GitHub (e.g., Discord). The PRs for PWA notifications (#1173) and Slack reliability (#1166) implicitly address user pain points around notification loss and non-typing indicator feedback.

## Backlog Watch
All open PRs are recent (created July 17–26) and under active update, so no long-unanswered items require attention. The oldest PR (#1158, opened July 17) is an experimental feature and likely undergoing slower review due to its nature. No issues are currently open.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-27

**Project**: CoPaw (github.com/agentscope-ai/CoPaw) — an open-source AI agent and personal assistant framework (code repository under `agentscope-ai/QwenPaw`).

---

## 1. Today’s Overview

The project shows moderate community activity with 13 issues and 8 pull requests updated in the last 24 hours. However, **no pull requests were merged or closed**, and no new releases were published, indicating a commit/merge freeze or a day focused on triage and discussion. The single closed issue (#6342) was a user question marked resolved, while the remaining 12 open issues highlight ongoing bugs, feature requests, and documentation gaps. The community is actively contributing first-time PRs (4 out of 8 PRs are from first-time contributors), which is a positive sign for newcomer engagement. Overall, project health appears stable but with several unresolved regressions that need maintainer attention.

---

## 2. Releases

**No new releases** since last digest. Latest stable version remains **QwenPaw 2.0.1** (noted in several issue reports). No migration notes or changelog updates.

---

## 3. Project Progress

**No pull requests were merged or closed today.** All 8 PRs remain open:

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#6483](https://github.com/agentscope-ai/QwenPaw/pull/6483) | test: cover streamable HTTP MCP transport | kayky233 (first-time) | Open |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | feat(channels): support on-demand installation and version repair | hongxicheng | Open |
| [#6481](https://github.com/agentscope-ai/QwenPaw/pull/6481) | fix(crons): add keepalive task so cron jobs fire when event loop is idle | WilShi (first-time) | Open |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | feat(browser): unified browser — one SDK, any backend | xiaoming-qxm | Open |
| [#6479](https://github.com/agentscope-ai/QwenPaw/pull/6479) | fix(providers): sync MiniMax model baseline | FittyAr (first-time) | Open |
| [#6477](https://github.com/agentscope-ai/QwenPaw/pull/6477) | docs(faq): align zh sub-section headings with en | WilShi (first-time) | Open |
| [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | feat(context): Visual Compact (DO NOT MERGE) | Leirunlin | Open |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | feat(apps): add qwenpaw-creator app (Under Review) | xuanrui-L | Open |

Notable advances: The **Visual Compact** feature (#6456) and **PawApp Creator** (#6284) are under active development. The **browser unification** PR (#6276) has been updated but still open. No functional changes have landed today.

---

## 4. Community Hot Topics

The most active discussion this period is:

- **[#6470 – MCP driver ignoring transport config](https://github.com/agentscope-ai/QwenPaw/issues/6470)**  
  *4 comments, 0 reactions* – This bug report describes how the MCP client hard-codes `sse_client` instead of respecting the YAML `transport: streamable_http` setting, causing all Streamable HTTP servers to fail. A first-time contributor has already opened a test PR (#6483) to lock down the fix, showing swift community response.

Other issues with noticeable discussion:

- **[#6342 – [CLOSED] How to verify ReMe embedding is active?](https://github.com/agentscope-ai/QwenPaw/issues/6342)**  
  *Closed today, 1 reaction, 3 comments* – User concerned about missing vector storage files after configuring embedding models. Likely resolved with documentation or a confirmation message.

- **[#6239 – Windows PATH concatenation drops semicolon](https://github.com/agentscope-ai/QwenPaw/issues/6239)**  
  *3 comments* – A long-standing Windows environment variable bug affecting npm global tools; still open but not updated today.

Underlying needs: Users are actively testing MCP integrations, especially the newer `streamable_http` protocol, and encountering configuration regressions. The Windows PATH issue continues to frustrate power users. The community is proactive in offering test coverage and small fixes.

---

## 5. Bugs & Stability

**High severity:**

- **[#6470 – MCP transport hardcoded SSE](https://github.com/agentscope-ai/QwenPaw/issues/6470)** – Blocks all Streamable HTTP MCP servers. **Fix PR exists** (#6483 – test coverage, not yet merged).  
- **[#6474 – `view_video` silently drops video DataBlocks](https://github.com/agentscope-ai/QwenPaw/issues/6474)** – Agent reports "Video loaded" but no code path actually sends video bytes to the LLM. No fix PR yet.  
- **[#6471 – Cron jobs misfire on idle event loop](https://github.com/agentscope-ai/QwenPaw/issues/6471)** – APScheduler AsyncIOScheduler fails to trigger after long idle. **Fix PR exists** (#6481 – add keepalive task).  

**Medium severity:**

- **[#6473 – Plugin "Agent Kanban" fails to install](https://github.com/agentscope-ai/QwenPaw/issues/6473)** – Missing module `qwenpaw.pawapp` in Desktop 2.0.1.  
- **[#6472 – JSON file line numbers missing after upgrade to 2.0.1](https://github.com/agentscope-ai/QwenPaw/issues/6472)** – Regression in programming mode.  
- **[#6476 – Matrix end-to-end encryption broken](https://github.com/agentscope-ai/QwenPaw/issues/6476)** – olm library installation fails; manual steps work but not automated.  

**Low severity:**

- **[#6460 – High CPU on Edge+Wayland](https://github.com/agentscope-ai/QwenPaw/issues/6460)** – Rendering/WebSocket issue, nuanced environment.  
- **[#6482 – UI stutter when switching chat/agent in Console](https://github.com/agentscope-ai/QwenPaw/issues/6482)** – Windows-only, likely performance optimization.  

**New bugs opened today (2026-07-27):**  
- #6482 (UI stutter)  
- #6480 (nohup command freezes agent) – user base issue.  
Additional bug reports from yesterday (2026-07-26): #6470, #6471, #6472, #6473, #6474, #6476.

---

## 6. Feature Requests & Roadmap Signals

- **[#6475 – `notice_after_complete` tool](https://github.com/agentscope-ai/QwenPaw/issues/6475)** – User wants agents to respond "task started, will notify you" and continue chatting while background tasks run. **Likely to be considered** for next minor release as it aligns with the project’s multitasking roadmap.  
- **[#6478 – Traditional Chinese localization](https://github.com/agentscope-ai/QwenPaw/issues/6478)** – A user has already translated frontend/backend but requests permission before pushing. **Low effort, high impact** – could be integrated quickly.  
- **[#6480 – `nohup` / `&` shell commands hang agent](https://github.com/agentscope-ai/QwenPaw/issues/6480)** – Reported as a question but effectively a feature gap: agent doesn't detach from background processes. Overlaps with #6475.  

These signals point to a growing demand for **asynchronous agent behavior** – agents that can multitask, notify, and handle background jobs without blocking the conversation.

---

## 7. User Feedback Summary

**Pain points:**

- **MCP configuration ignored** (multiple users) – configurations not respected, breaking integrations.
- **Plugin installation broken on Desktop** (chendasui) – trusted plugin from App Center fails.
- **High CPU / UI stutter** (dayofyear, tangsuiyong) – negatively affects daily use on both Linux and Windows.
- **Missing video delivery** (xiaoka76) – core agent functionality broken for multimodal use cases.
- **Cron misfire** (tina0501853) – time-sensitive automation unreliable.
- **PATH issues on Windows** (604731578) – hampers npm-based workflows.

**Satisfaction signals:**

- First-time contributors are comfortable submitting PRs (4 today) – indicates good community health.
- Users provide detailed reproduction steps (environment, version, logs) – suggests engaged power users.
- The ReMe embedding question (#6342) was closed resolved – support response was acceptable.

**Overall sentiment:** Active but frustrated. Many users are hitting regressions in 2.0.1. The project’s rapid pace may be outrunning quality assurance in some areas.

---

## 8. Backlog Watch

Issues and PRs needing maintainer attention (no recent updates or responses):

- **[#6239 – Windows PATH semicolon drop](https://github.com/agentscope-ai/QwenPaw/issues/6239)** (updated 2026-07-26, but no maintainer comment since July 18) – Critical for Windows users with complex PATH.  
- **[#6276 – Unified browser SDK PR](https://github.com/agentscope-ai/QwenPaw/pull/6276)** – Large PR, under review since July 20, no maintainer feedback visible. Needs review to avoid stagnation.  
- **[#6284 – QwenPaw Creator app PR](https://github.com/agentscope-ai/QwenPaw/pull/6284)** – Marked "Under Review" since July 20, no updates.  
- **[#6387 – On-demand channel installation PR](https://github.com/agentscope-ai/QwenPaw/pull/6387)** – Open since July 23, needs review.  

Additionally, the **[#6456 – Visual Compact (DO NOT MERGE)](https://github.com/agentscope-ai/QwenPaw/pull/6456)** PR is explicitly marked not to merge, but it’s been open for 3 days without comment – maintainers should clarify its status.

---

*Generated from GitHub data as of 2026-07-27 23:59 UTC.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-27

## Today's Overview
Project activity remains very high, with **50 issues** and **50 pull requests** updated in the last 24 hours — all open issues are actively triaged, and 48 of the PRs are still open. No new releases were cut today. The development focus is heavily on **cross‑platform stability** (74 Windows test failures, #7462), **security hardening** (Landlock sandbox fixes, credential leaks, attestation consolidation), and **channel‑specific bug fixes** (Telegram, Nextcloud Talk, WhatsApp). Two PRs merged/closed today, including a critical Landlock self‑lock fix (#9233). The project appears to be in a **high‑velocity bug‑fixing and preparation phase** ahead of a planned v0.8.4 release.

## Releases
**None** – No new versions were published on 2026‑07‑27.

## Project Progress (Merged/Closed PRs)
- **#9233** (closed) – `fix(runtime/security): Prevent landlock locks zeroclaw itself` – Merged. Prevents the Landlock sandbox from locking the daemon process after the first sandboxed shell command, a critical fix for all Linux security‑conscious deployments.
- One additional PR (not visible in top‑20 list) was merged/closed today, bringing the total to 2. The PR list shows 48 open, 2 closed in the 24‑hour window.

## Community Hot Topics
The most active discussions (by comment count) highlight **cross‑platform, security, and channel integration challenges**:

- **#7462** (`[Bug]: 74 test failures on Windows`) – 14 comments. User `NiuBlibing` reports that the test suite fails on Windows due to Unix‑only test commands, path semantics, and console encoding. CI only runs on Linux, masking the issue. This is a high‑priority P1 bug with high risk; the community is pushing for a Windows CI matrix.
- **#9101** (`Consolidate release attestation mechanisms`) – 7 comments. `JordanTheJet` proposes reducing three parallel signing mechanisms (cosign, GitHub attestations, SLSA) into one to cut CI time and asset count. Merged in v0.8.3 but still under refinement.
- **#5514** (`batch Telegram media groups into one multimodal turn`) – 6 comments. User `aq-uua` reports that multiple images in a Telegram group are sent as separate LLM requests, causing redundant agent output. In‑progress fix.
- **#6157** (`Nextcloud Talk use correct bot message API`) – 6 comments. `rhinterndorfer` identifies a bot message URL construction bug that breaks replies. A fix PR (#9181) is open.
- **#8654** (`skill‑review fork panics – SIGSEGV after tool‑heavy turn`) – 5 comments. `tw‑360vier` reports a slice out‑of‑range panic that crashes the agent. In‑progress risk‑high fix.

## Bugs & Stability
### S1 – Workflow Blocked (Severity Critical)
- **#8559** – Agents stop when exiting web dashboard chat window. User `susyabashti` reports work is interrupted. In‑progress.
- **#8560** – `browser_open` hangs the agent turn if the launcher cannot open a window (also affects ffmpeg, TTS). `singlerider` reported unbounded subprocess wait. In‑progress.
- **#7527** – macOS desktop app can reopen blank or without window after granting permissions. Blocked (needs reproducibility).
- **#9085** – Nested runtime panic in `try_enable_pgvector` when pgvector is enabled. `d6f5g4123-arch` reports gateway/agent startup crash. In‑progress.
- **#9035** – Docker Compose gateway remains loopback‑bound behind published port, causing “Connection refused”. User `knoppix2`. In‑progress.
- **#9386** (new today) – Gemini API key in request URL survives `sanitize_api_error` and leaks into chat. `belumume`. No fix PR yet.
- **#6350** – WhatsApp Web allowed‑numbers bypassed for LID‑based contacts, silent message drops. In‑progress.

### S2 – Degraded Behaviour
- **#7462** – 74 test failures on Windows (see Hot Topics). Fix discussion ongoing; PRs expected.
- **#8973** – Landlock blocks shell access to required system files on Fedora (`/dev/null`). `perillamint`. A fix PR (#9114) is open.
- **#8731** – Stdio‑based MCP servers accumulate as zombie processes. `susyabashti`. In‑progress.
- **#9046** – `models_cache.json` is read but never written; “run zeroclaw models refresh” hint cannot resolve. In‑progress.
- **#9089** – Tool output supports `[IMAGE:]` markers but not `[AUDIO:]` markers; audio markers reach model as literal text. In‑progress.
- **#7808** – CLI secret prompts give no feedback after paste (hidden input). In‑progress.

### S3 – Minor Issues
- **#5514** – Telegram media groups not batched (see Hot Topics).
- **#6157** – Nextcloud Talk wrong bot API (see Hot Topics).
- **#7269** – Docs build warning noise (low risk, accepted).
- **#8810** – Telegram documentation example is wrong (low risk, in‑progress).

### Notable Bugs with Existing Fix PRs
- **#8973** (Landlock Fedora) → PR #9114 open.
- **#6157** (Nextcloud Talk) → PR #9181 open.
- **#7527** (macOS blank window) → No fix PR; blocked.
- **#9386** (Gemini key leak) → No fix PR yet.

## Feature Requests & Roadmap Signals
- **#9101** – Consolidate release attestation – High priority, likely to land in v0.8.4.
- **#7108** – Improve Rust CI caching and critical path – In‑progress; community wants faster PR builds (currently 15–20 min).
- **#7099** – Route `zeroclaw status` through CLI i18n – P3 but accepted; aligns with internationalisation efforts.
- **#8409** – Cron shell jobs should support raw stdout output – Requested by cron users; in‑progress.
- **#8337** – Herdr agent reporting integration – Large feature PR open; heavy interest from CLI users.
- **#9376** – Release PR for v0.8.4 (chore) – Cutting new version with many fixes, crates.io publishing, and crate removals. This is the strongest roadmap signal.
- **#9420** – Anthropic OAuth profile support – New PR today; adds `auth_mode = "oauth"` to Anthropic model aliases.
- **#9419** – Rotate live credentials after rate limits – New PR for reliable‑provider credential rotation.

**Prediction:** v0.8.4 will ship within days, including attestation consolidation, Landlock fixes, Nextcloud Talk fix, CI improvements, and OAuth support.

## User Feedback Summary
**Pain points** expressed in issues and PRs:
- **Windows and cross‑platform incompatibility** – The 74‑failure suite (#7462) shows the project is effectively Linux‑only today. Users request a CI matrix.
- **Telegram media groups** – Agent sends multiple messages for multiple images (#5514). Users expect a single, combined turn.
- **WhatsApp Web** – Silent message drops (#6350) and policy enforcement gaps (PR #9382) frustrate business‑mode users.
- **MCP subprocess management** – Zombie processes (#8731) and memory growth (#8642) hurt long‑running reliability.
- **Sandboxing friction** – Landlock blocks legitimate files (#8973), causing agent failures on Fedora.
- **Documentation inaccuracies** – Telegram example (#8810) and Nextcloud Talk API (#6157) confuse new users.
- **Requested improvements**:
  - Raw stdout for cron shell jobs (#8409)
  - Audio output markers for tools (#9089)
  - Configurable cache disabling for Bedrock Nova 2 Lite (#8720)

**Positive signals:** Users actively contribute PRs (e.g., `belumume`, `perillamint`, `IftekharUddin`) and engage in detailed bug reports. The community is technically sophisticated and pushes for security and reliability.

## Backlog Watch
Several important issues and PRs lack recent maintainer action or remain blocked:

- **#7527** (macOS blank window) – Blocked (needs reproducibility) since June 12. Risk‑high, S1. No fix PR.
- **#7911** (Android/Termux install selects wrong binary) – Open since June 18, no‑stale label. Needs a platform‑detection fix.
- **#7269** (docs build warning noise) – Accepted, no‑stale since June 5. Low risk but accumulates tech debt.
- **#7870** (agent runtime options leak from first configured provider) – Tracker issue, open since June 17. No PR yet.
- **#7828** (audit byte‑limited string truncation) – Tracker, open since June 17. No recent activity.
- **#7872** (QQ group replies need `msg_id`) – Tracker, open since June 17. Still waiting on QA after #9180 merge.
- **PRs needing maintainer attention** (labeled `needs-author-action`): #9193, #9385, #9382, #9114, #8826, #9416, #8337, etc. These require maintainer review and possible merge.

**Top priority backlog item:** The Windows test failure (#7462) is the most commented issue and blocks any claim of cross‑platform support. A P1, risk‑high, accepted issue with no fix PR yet. Addressing it would require CI matrix work (#7461).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*