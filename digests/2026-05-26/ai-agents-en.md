# OpenClaw Ecosystem Digest 2026-05-26

> Issues: 477 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-26 00:24 UTC

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

# OpenClaw Project Digest — 2026-05-26

## 1. Today's Overview

OpenClaw exhibits **extremely high development velocity** with 977 total items updated in the past 24 hours (477 issues, 500 PRs), indicating a mature project in active maintenance mode with significant community engagement. The project is currently focused on **runtime stability and architectural consolidation** — a massive XL-sized PR (#85341) is internalizing the previously Pi-shaped agent runtime, while numerous fixes target session state reliability, message delivery guarantees, and auth provider resilience. No new releases were cut today, suggesting the team is accumulating fixes for a larger release. The high volume of "platinum hermit" and "diamond lobster" rated items indicates serious production-grade concerns are being actively triaged.

---

## 2. Releases

**No new releases** (0 releases today). The project remains on version `2026.5.22` / `2026.5.24-beta.1` with active development toward the next version.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#81083](https://github.com/openclaw/openclaw/pull/81083) | YB0y | CLI now errors on unknown commands with `--help`/`--version` appended | UX correctness |
| [#86678](https://github.com/openclaw/openclaw/pull/86678) | steipete | **Perf: reduce session and auth cache hotpath work** — lazy immutable snapshots | CPU reduction on gateway |
| [#86291](https://github.com/openclaw/openclaw/pull/86291) | amknight | Restore deadcode unused-file allowlist for Knip | CI stability |
| [#86591](https://github.com/openclaw/openclaw/pull/86591) | brokemac79 | Fix plugin packaging recovery hints (addresses #80490 misdirection) | Developer experience |
| [#86472](https://github.com/openclaw/openclaw/pull/86472) | SebTardif | Trim trailing heartbeat context when no user message follows | Token efficiency |
| [#86682](https://github.com/openclaw/openclaw/pull/86682) | vincentkoc | Fix missing OTel/Prometheus telemetry signals | Observability |
| [#86552](https://github.com/openclaw/openclaw/pull/86552) | TimToxopeus | Perf: reuse manifest metadata during model resolution | Startup performance |
| [#86018](https://github.com/openclaw/openclaw/pull/86018) | asock | QQBot passive group event wording clarification | Documentation |

### Major Architectural Advancement

- **[#85341](https://github.com/openclaw/openclaw/pull/85341)** — **"refactor: internalize OpenClaw agent runtime"** (XL, 50+ extension tags): Removes Pi-shaped dependency architecture, re-integrating as native OpenClaw core/plugin/SDK surfaces. This is a foundational restructuring with `merge-risk: 🚨 compatibility | 🚨 auth-provider | 🚨 security-boundary`.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Core Concern |
|:---|:---:|:---:|:---|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity | 17 | 1 | **Codex runtime parity testing** — QA harness architecture |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost (no retry/notification/restart) | 17 | 0 | **Critical reliability**: Subagent orchestration failures |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) — Configurable streaming watchdog timeout for reasoning models | 13 | 8 | **User pain**: DeepSeek-R1, kimi-k2.5 trigger false watchdog resets |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) — `doctor --fix` migrates `openai-codex/` config to `openai/`, breaking PI+OAuth | 12 | 3 | **Data loss risk**: Config migration destroys auth runtime |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) — Direct Exec Mode for Cron Jobs | 12 | 9 | **Performance**: Eliminate LLM interpretation overhead for simple cron |

### Underlying Needs Analysis

- **Silent failures dominate user pain**: Issues #44925, #80520, #85953, #84945 all involve "silent" message/state loss — users strongly need **observability and retry guarantees**
- **Reasoning model incompatibility**: #68596 shows emerging LLM category (long-thinking) breaking existing timeout assumptions
- **Config/tooling safety**: #84038 reveals `doctor --fix` as dangerous — users need **dry-run/preview modes**

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---:|:---|:---|
| **P1** | [#86599](https://github.com/openclaw/openclaw/issues/86599) | OPEN | None yet | **Windows beta blocker**: Local model calls block gateway event loop (~4 min trivial inference) |
| **P1** | [#86613](https://github.com/openclaw/openclaw/issues/86613) | OPEN | None yet | **FD leak**: >12K read-only file descriptors on `memory/**`; `memory_search` tool never releases handles |
| **P1** | [#86214](https://github.com/openclaw/openclaw/issues/86214) | OPEN | None yet | Codex app-server closes mid-turn during image/tool requests with large `logs_2.sqlite` |
| **P1** | [#85953](https://github.com/openclaw/openclaw/issues/85953) | OPEN | None yet | `sessions_yield` leaves parent transcript lock held, subagent callback timeouts |
| **P1** | [#84038](https://github.com/openclaw/openclaw/issues/84038) | OPEN | None yet | `doctor --fix` destroys `openai-codex/` config → PI+OAuth breakage + 3-4x token inflation |
| **P1** | [#80520](https://github.com/openclaw/openclaw/issues/80520) | OPEN | None yet | Telegram messages silently dropped, no `sendMessage` logged |
| **P1** | [#83959](https://github.com/openclaw/openclaw/issues/83959) | OPEN | None yet | Codex app-server startup retries exhaust before replacement ready |

### Recently Fixed (Today)

| Issue | Fix PR | Resolution |
|:---|:---|:---|
| [#85999](https://github.com/openclaw/openclaw/issues/85999) — Gateway pre-warm blocks event loop ~60s | *closed* | Startup blocking resolved |
| [#68944](https://github.com/openclaw/openclaw/issues/68944) — CLI hangs at WebSocket handshake | *closed* | WebSocket gateway handshake fixed |
| [#86201](https://github.com/openclaw/openclaw/issues/86201) — Slow responses/high CPU after 2026.5.22 upgrade | *closed* | Performance regression addressed |
| [#85306](https://github.com/openclaw/openclaw/issues/85306) — `EmbeddedAttemptSessionTakeoverError` on single Telegram turn | *closed* | Session lane racing fixed |
| [#58479](https://github.com/openclaw/openclaw/issues/58479) — Approval dialog succeeds but exec never consumes | *closed* | Control UI approval flow fixed |

---

## 6. Feature Requests & Roadmap Signals

| Issue | 👍 | Predicted Priority | Rationale |
|:---|:---:|:---|:---|
| [#18160](https://github.com/openclaw/openclaw/issues/18160) Direct Exec Mode for Cron Jobs | 9 | **High** — likely v2026.6 | Strong upvotes, clear perf win, aligns with "reduce LLM overhead" theme |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 8 | **High** — likely v2026.6 | Blocking reasoning model adoption; simple config change |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` option for sub-agent routing | 5 | Medium | Workflow orchestration enabler |
| [#79904](https://github.com/openclaw/openclaw/issues/79904) Cursored SQLite transcript read API | 1 | Medium | Infrastructure for companion ecosystem |
| [#79903](https://github.com/openclaw/openclaw/issues/79903) Durable session lineage across rotations | 2 | Medium | Session reliability foundation |
| [#86169](https://github.com/openclaw/openclaw/issues/86169) Xiaomi MiMo Token Plan provider | 1 | Low | Niche provider, but shows global expansion |

### Emerging Themes for Next Version

1. **Reasoning model compatibility** — watchdog timeouts, context handling
2. **Cron/job reliability** — direct exec, timeout handling, lane scheduling
3. **Session state durability** — lineage, rotation, compaction safety

---

## 7. User Feedback Summary

### Critical Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Silent failures everywhere** | #44925, #80520, #84945, #85953 — "no retry, no notification, no auto-restart" | 🔴 Critical |
| **Session lock/contention** | #85913, #85953, #85306, #77340 — lane racing, livelocks, transcript locks | 🔴 Critical |
| **Config tooling dangerous** | #84038 — `doctor --fix` actively destroys working configs | 🟡 High |
| **Windows performance** | #86599 — beta unusable, 4-minute "hi" responses | 🟡 High |
| **Resource leaks** | #86613 — 12K+ FDs, never released | 🟡 High |

### Use Case Satisfaction

| Satisfied | Dissatisfied |
|:---|:---|
| Multi-channel support (Telegram, Discord, iMessage, WhatsApp, Feishu, QQBot, Zalo) | iMessage lacks typing indicator (#10737), markdown raw (#24943) |
| Plugin ecosystem breadth | Plugin packaging/build UX (#80490, #85048) |
| Codex runtime integration | Codex parity gaps (#80319), startup fragility (#83959, #86214) |
| Local model support | Apple Silicon crashes (#44202), Windows blocking (#86599) |

---

## 8. Backlog Watch

### Long-Unanswered Important Items Needing Maintainer Action

| Issue | Age | Blockers | Risk |
|:---|:---|:---|:---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | **~10 weeks** | `needs-maintainer-review`, `needs-product-decision`, `no-new-fix-pr` | **Production reliability** — multi-agent workflows broken |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) Direct Exec Mode for Cron Jobs | **~15 weeks** | `needs-maintainer-review`, `needs-product-decision`, `needs-security-review` | **Performance** — cron is unnecessarily expensive |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog | **~5 weeks** | `needs-maintainer-review`, `needs-product-decision` | **Adoption blocker** for reasoning models |
| [#79904](https://github.com/openclaw/openclaw/issues/79904) / [#79903](https://github.com/openclaw/openclaw/issues/79903) / [#79905](https://github.com/openclaw/openclaw/issues/79905) SQLite runtime companion APIs | **~2.5 weeks** | `needs-maintainer-review`, `needs-product-decision` | **Ecosystem enablement** — all three from same author (100yenadmin), part of umbrella #79902 |
| [#60858](https://github.com/openclaw/openclaw/issues/60858) `hasRealConversationContent` guards block compaction | **~7 weeks** | `source-repro` | **Data loss** — context never compacts, sessions grow unbounded |

### PRs Ready for Maintainer Review (👀 status) — At Risk of Stale

| PR | Age | Significance |
|:---|:---|:---|
| [#86553](https://github.com/openclaw/openclaw/pull/86553) Telegram targeted bot commands as mentions | 1 day | Message delivery fix |
| [#86671](https://github.com/openclaw/openclaw/pull/86671) Avoid eager alias normalization | 1 day | Model resolution correctness |
| [#86067](https://github.com/openclaw/openclaw/pull/86067) File-scoped prompt-window guard for embedded races | 2 days | **Critical session race fix** |
| [#86270](https://github.com/openclaw/openclaw/pull/86270) Fix stale approval prompts in Control UI | 1 day | Cross-client approval sync |
| [#86578](https://github.com/openclaw/openclaw/pull/86578) Cron opaque session target keys | 1 day | Cron routing flexibility |
| [#86624](https://github.com/openclaw/openclaw/pull/86624) Persist CLI user turns before attempts | 1 day | **Message loss prevention** |
| [#85558](https://github.com/openclaw/openclaw/pull/85558) Preserve runtime external auth snapshots | **automerge armed** | Auth reliability — pending final merge |

---

**Overall Health Assessment**: OpenClaw is a **high-velocity, production-stressed project** with strong engineering response times but accumulating reliability debt in session state management. The Pi→native runtime migration (#85341) is the right long-term architectural bet but introduces short-term compatibility risk. Immediate attention should prioritize: (1) silent failure modes, (2) session lock/lane racing, (3) reasoning model compatibility.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-05-26

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense parallel development** across a dozen+ active projects, with aggregate daily activity exceeding 1,300 GitHub items. The space has bifurcated into **mature production-stressed platforms** (OpenClaw, IronClaw, ZeroClaw) wrestling with reliability at scale, **rapidly maturing challengers** (NanoBot, CoPaw, Moltis) consolidating features for enterprise readiness, and **specialized derivatives** (LobsterAI, NanoClaw) pursuing ecosystem integration niches. A dominant cross-cutting theme is the tension between **agent autonomy** (long-running tasks, subagent orchestration, memory persistence) and **operational control** (sandboxing, cost containment, silent failure prevention). No project has achieved clear market dominance; competition is driving convergent evolution in security, provider diversity, and desktop/web deployment flexibility.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Releases | Health Score | Assessment |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 477 | 500 | ~25 implied | None | ⚠️ **Stressed** | Extreme volume, accumulation mode, reliability debt |
| **IronClaw** | 22 | 50 | ~10 implied | None | ⚠️ **Stressed** | Deep integration backlog, merge contention risk |
| **ZeroClaw** | 26 | 50 | 3 explicit | None | ⚠️ **Stressed** | Security queue bottleneck, major integration pending |
| **CoPaw** | 42 | 44 | 32 | v1.1.9-beta.1 | ✅ **Active** | Highest merge rate, release discipline, P0 backlog concern |
| **NanoBot** | 5 | 118 | 10 | None | ✅ **Active** | Healthy close rate, pre-release consolidation |
| **Moltis** | 5 | 6 | 5 | **20260525.01** | ✅ **Healthy** | Best release cadence, rapid feature→release pipeline |
| **NanoClaw** | 4 | 19 | 5 | None | ⚠️ **Strained** | v2 reliability crisis, review backlog |
| **LobsterAI** | 1 | 29 | 15 | None | ⚠️ **Strained** | High merge volume, stale PR accumulation (8 from April) |
| **Hermes Agent** | 50 | 50 | 7 | None | ⚠️ **Stressed** | Worst open:merged ratio (43:7), Docker liability |
| **PicoClaw** | 9 | 8 | **0** | Nightly only | 🔴 **Blocked** | Zero merges, 3 critical fixes ready, maintainer bottleneck |
| **NullClaw** | 1 | 2 | 1 | None | ✅ **Stable** | Low velocity, intentional consolidation |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | None | ⚪ **Dormant** | No activity |

**Health Score Legend**: ✅ Healthy = sustainable merge rate, release capability, manageable backlog; ⚠️ Stressed/Strained = review bottleneck, reliability debt, or accumulation without release; 🔴 Blocked = zero forward progress despite active contributions.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 977 daily items = ~8× next busiest project | IronClaw/ZeroClaw at ~72, CoPaw at 86 |
| **Multi-channel breadth** | 8+ production channels (Telegram, Discord, iMessage, WhatsApp, Feishu, QQBot, Zalo, etc.) | CoPaw comparable; NanoBot, Moltis fewer |
| **Plugin/SDK ecosystem** | Mature extension architecture, Pi→native migration consolidating control | LobsterAI building sync bridge *to* OpenClaw; ZeroClaw pursuing "everything is a plugin" |
| **Local model support** | Explicit gateway for Ollama, Apple Silicon (with caveats) | Hermes Agent Ollama config broken (#13659); PicoClaw has local focus but narrower scope |
| **Enterprise integration** | Codex runtime parity, OAuth flows, session management | IronClaw's "Reborn" migration playing catch-up |

### Technical Approach Differences

- **Runtime architecture**: OpenClaw's **Pi-shaped→native internalization** (#85341) contrasts with IronClaw's **"Reborn" ground-up rewrite** and ZeroClaw's **"zerocode" TUI + RPC transport** (#6848). OpenClaw favors evolutionary consolidation; peers pursue more disruptive modernization.
- **Session model**: OpenClaw's **lane-based session locking** (source of current P1 bugs #85953, #85306) vs. NanoClaw's **poll-loop deduplication** (also failing, #2506) vs. Moltis's **non-blocking spawn_agent** (#1067 — more advanced orchestration).
- **Security boundary**: OpenClaw's **auth-provider security boundary** (merge-risk flagged) vs. ZeroClaw's **Landlock + Bubblewrap sandboxing** vs. Moltis's **per-turn tool_choice enforcement**.

### Community Size Comparison

OpenClaw's **~977 daily items** likely reflects the largest contributor base, but **engagement quality is strained**: "platinum hermit"/"diamond lobster" ratings indicate production-firefighting rather than greenfield development. By contrast, **NanoBot's 118 PRs with 10 merges** and **Moltis's 5:5 open:closed ratio** suggest healthier contributor retention. **CoPaw's 32 merges from 44 PRs** demonstrates superior review bandwidth utilization.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Reasoning model compatibility** | OpenClaw (#68596), NanoBot (#3867, #3851), CoPaw (#4650) | Configurable watchdog timeouts; `reasoning.effort` parameter propagation; turn-order handling for thinking models (DeepSeek-R1, kimi-k2.5, GLM-5.1, MiMo) |
| **Silent failure prevention** | OpenClaw (#44925, #80520, #85953), LobsterAI (#1510, #1517), NanoClaw (#2506) | Retry guarantees, delivery confirmation, subagent completion notification, deduplication correctness |
| **Session state durability** | OpenClaw (#79903, #60858), CoPaw (#4620, #4653), LobsterAI (#2046), NanoBot (#3990 Dream consolidation) | Cross-rotation lineage, compaction safety, memory retrieval/association, cron vs. interactive isolation |
| **Tool permission enforcement** | ZeroClaw (#6920, #6924), Moltis (#1069), OpenClaw (implicit in auth-boundary work) | Execution-time `allowed_tools`/`denied_tools`, skill-scoped elevation, MCP policy propagation |
| **Provider ecosystem breadth** | All projects | OpenRouter compatibility edge cases (NanoBot #4002, ZeroClaw #5636), Gemini strictness (#6302), StepFun/Arcee/Z.AI niche additions |
| **Docker operational simplicity** | Hermes Agent (#18482, #23402, #14448), Moltis (#1073), NanoClaw (#2609) | Permission models, UID mapping, rootless containers, cross-platform builds |
| **Gateway/WebSocket reliability** | IronClaw (#3701, #4030), ZeroClaw (#6933), NanoClaw (#2613 Socket Mode) | Binding correctness, transcript persistence, disconnection recovery, thread context |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | **Reference implementation / ecosystem hub** | Power users, multi-channel operators, plugin developers | Modular runtime with Pi→native migration; gateway-per-channel |
| **NanoBot** | **Resource efficiency + rapid iteration** | Cost-conscious developers, skill builders | Lean Rust core; Dream memory system; "very small" footprint |
| **Hermes Agent** | **Platform breadth + dashboard** | Self-hosters, small teams | TUI dashboard; Docker-first; skill marketplace |
| **PicoClaw** | **Embedded/hardware edge** | RISC-V/Termux/Apple Silicon edge deployers | Go-based; minimal resource; hardware-specific packages |
| **NanoClaw** | **Enterprise Slack integration** | Slack-native organizations | v1→v2 migration; per-agent model selection; Socket Mode |
| **NullClaw** | **Zig-native + A2A protocol** | Systems programmers, protocol early adopters | Zig codebase; Agent-to-Agent scaffolding; STT gateway |
| **IronClaw** | **Cryptographic attestation + multi-tenancy** | SaaS operators, security-critical deployments | Rust; attested-signing substrate; Reborn migration; wasmtime sandbox |
| **LobsterAI** | **OpenClaw desktop control plane** | OpenClaw users needing GUI management | Electron/Tauri; bidirectional plugin/skill sync; subagent trees |
| **CoPaw** | **Coding Mode + Console UX** | Developers, data analysts | In-browser IDE; Tauri desktop; BI plugin ecosystem (DataPaw) |
| **Moltis** | **Non-blocking agent orchestration** | Production workflow engineers | Per-turn tool controls; background `spawn_agent`; Landlock sandbox |
| **ZeroClaw** | **Skill-scoped security + TUI** | Financial/enterprise skill developers | `zerocode` TUI; DenyWithEdit approval; FINOS-adjacent compliance |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Release-Capable or Near)

| Project | Evidence | Trajectory |
|:---|:---|:---|
| **Moltis** | Same-day feature implementation (#1011 → #1069 in 7 days); clean 5:5 merge ratio; daily releases | **Accelerating** — best-in-class velocity-to-release pipeline |
| **CoPaw** | 32/44 PRs merged; beta releases; Coding Mode major feature landed | **Maturing** — feature-complete for v1.2, stabilizing P0s |
| **NanoBot** | 10/118 PRs merged but healthy close rate; sustained goal fix same-day | **Consolidating** — pre-release feature integration heavy |

### Tier 2: Production-Stressed (High Volume, Accumulation Mode)

| Project | Evidence | Trajectory |
|:---|:---|:---|
| **OpenClaw** | 977 items, zero releases, 7 open P1s, silent failure epidemic | **Stabilizing under load** — architectural bet (#85341) must land before next release |
| **IronClaw** | 40:10 open:merged ratio; 13-PR attested-signing stack; crates.io blocked | **Integration risk** — merge contention threatens Reborn timeline |
| **ZeroClaw** | 50 PRs, 16 merges, security queue bottleneck, "DO NOT MERGE" mega-PR | **Pre-major-release** — beta-2 integration (#6848) is all-or-nothing |

### Tier 3: Strained / Blocked

| Project | Evidence | Trajectory |
|:---|:---|:---|
| **NanoClaw** | v2 reliability crisis (#2506, #2404), no fix PRs, review backlog | **Regression recovery** — core message routing needs redesign |
| **LobsterAI** | 8 stale PRs from April, token burn bug (#2049), memory gap (#2046) | **Stability sprint** — firefighting mode, contributor attrition risk |
| **Hermes Agent** | 43:7 open:merged ratio, Docker systematic failure, 26-day theme issue | **Review bandwidth constrained** — process bottleneck, not engineering |
| **PicoClaw** | **Zero merges with 8 active PRs**, 3 critical fixes ready | **Maintainer crisis** — immediate intervention needed |

### Tier 4: Stable / Dormant

| Project | Evidence | Trajectory |
|:---|:---|:---|
| **NullClaw** | 3 items, 1 merge, intentional consolidation | **Maintenance mode** — awaiting A2A protocol maturation |
| **TinyClaw / ZeptoClaw** | No activity | **Inactive** — possible project abandonment |

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Implication for AI Agent Developers |
|:---|:---|:---|
| **"Reasoning model" as new compatibility category** | OpenClaw #68596, NanoBot #3867/#3851, CoPaw #4650, ZeroClaw #5636 | Developers must **decouple timeout and token-limit assumptions from LLM latency**. Long-thinking models (DeepSeek-R1, kimi-k2.5, GLM-5.1, MiMo, future o3-class) require explicit `reasoning_effort` controls, streaming watchdog configurability, and context-window accounting that includes reasoning tokens. |
| **Silent failures as trust-destroying anti-pattern** | OpenClaw 4+ issues, LobsterAI #1510/#1517, NanoClaw #2506, IronClaw #4022 | **Observable agent execution is becoming table stakes.** Users demand: per-turn status visibility, subagent completion guarantees, automatic retry with backoff, and explicit "failed" terminal states. "No error logs" (#4644) is unacceptable. |
| **Skill security as ecosystem enabler** | ZeroClaw #6920/#6924/#6914-#6917, Moltis #1069, OpenClaw auth-boundary work | **Fine-grained tool permission enforcement** (execution-time `allowed_tools`, skill-scoped elevation, MCP policy filtering) is emerging as the prerequisite for third-party skill marketplaces. Developers building skill platforms should implement defense-in-depth *before* scaling distribution. |
| **Memory persistence as competitive moat** | LobsterAI #2046 (4-tier proposal), CoPaw #4652, NanoBot #3990 (Dream consolidation), OpenClaw #79903 | **Session-scoped agents are insufficient for production use.** Users expect: cross-session memory retrieval, automatic association, summary compaction, and explicit memory management (tiers: filesystem → vector search → embedding infrastructure). This is becoming the differentiation axis between "chatbot" and "personal assistant." |
| **Non-blocking agent orchestration** | Moltis #1067 (`spawn_agent` background), OpenClaw #18160 (Direct Exec for Cron), ZeroClaw #6848 (RPC transport) | **Synchronous agent loops are scaling bottlenecks.** Production workflows need: parent-session responsiveness during subagent execution, cron/job isolation from interactive sessions, and cancelable background tasks. Architecture should separate *control plane* (orchestration) from *data plane* (execution). |
| **Desktop/web deployment convergence** | CoPaw Tauri (#3813) + Console, LobsterAI desktop control plane, Hermes Agent dashboard, NanoBot TUI (#2155) | **Headless server + native GUI is replacing monolithic deployment.** Developers should design: gateway APIs that support multiple frontends, WebSocket transcript persistence for session resumption, and platform-specific packaging (especially macOS notarization, Windows code signing). |
| **Provider diversity as liability** | OpenRouter edge cases (NanoBot #4002, ZeroClaw #5636), Gemini strictness (#6302), Anthropic content blocks (#3993), StepFun/Z.AI/Arcee additions | **"Works with OpenAI" is no longer sufficient.** Each provider requires: dedicated serializer testing, error fallback chains, auth flow validation, and model-list dynamic fetching. Expect to maintain N×M provider×model compatibility matrix. |

---

*Report generated from 12 project digests covering 1,340+ GitHub items, 2026-05-26.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-26

## 1. Today's Overview

NanoBot shows **extremely high development velocity** with 118 PRs updated in the last 24 hours (108 open, 10 merged/closed), indicating a very active contributor community and potentially a pre-release consolidation phase. Issue activity is moderate at 5 updates, with the team maintaining a healthy close rate (2 of 5). No new releases were published today. The project appears to be in a **feature-integration heavy period** with significant architectural work around agent collaboration, Dream memory system refactoring, and provider ecosystem expansion. The high open PR ratio suggests either a pending review bottleneck or intentional batch merging strategy.

---

## 2. Releases

**No new releases** published today. Latest release status remains unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (10 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | **fix(agent): prevent runner from exiting while sustained goal is active** | Critical reliability fix for `/goal` long-running tasks—agent now properly respects sustained objectives instead of incorrectly reporting `stop_reason="completed"` |
| [#3850](https://github.com/HKUDS/nanobot/pull/3850) | **docs(contributing): warn that `ruff format` predates the codebase** | Developer experience improvement; prevents ~2500-line spurious diffs for new contributors |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) | **fix(providers): inject OpenRouter `reasoning.effort` for thinking models** | Follow-up fix ensuring MiMo via OpenRouter properly disables thinking when `reasoning_effort="none"` |
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | **fix(providers): wire MiMo thinking control on gateway providers** | Foundation fix for provider-agnostic thinking model behavior |
| [#3866](https://github.com/HKUDS/nanobot/pull/3866) | **docs(configuration): expand secrets section with more examples** | Better onboarding for environment variable configuration |
| [#3991](https://github.com/HKUDS/nanobot/pull/3991) | **feat(apps): unify CLI apps and MCP** | Major UX consolidation—merges CLI apps and MCP presets into unified "Apps" experience with shared search and sidebar integration |
| [#3988](https://github.com/HKUDS/nanobot/pull/3988) | **feat(providers): add Step Plan support** | New provider for StepFun's Step Plan subscription (enterprise/educational tier) |
| [#3985](https://github.com/HKUDS/nanobot/pull/3985) | **feat: loop guard v2.0 — 循环检测 & 速率限制硬阻断** | Closed as invalid; superseded by ongoing loop detection work |
| [#3978](https://github.com/HKUDS/nanobot/pull/3978) | **fix(agent): propagate maxConcurrentSubagents config to SubagentManager** | Configuration plumbing fix—user's `maxConcurrentSubagents` now actually respected |

**Key Advances:**
- **Agent reliability**: Sustained goal lifecycle now properly handled
- **Provider diversity**: StepFun ecosystem expansion (Step Plan + pending Step ASR)
- **Developer experience**: Contributing docs fixed, secrets configuration clarified
- **System architecture**: Apps unification reduces surface complexity

---

## 4. Community Hot Topics

### Most Significant Open PRs (by architectural impact)

| PR | Topic | Community Need |
|:---|:---|:---|
| [#4005](https://github.com/HKUDS/nanobot/pull/4005) | **GitAgent Protocol (GAP) support** — `agent.yaml` + `SOUL.md` standard | **Interoperability demand**: Contributors want NanoBot to participate in emerging agent portability standards; positions project for ecosystem integration |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | **Dream single-phase consolidation** — AgentLoop-driven with goal-state lifecycle | **Operational complexity reduction**: Current two-phase memory system is brittle; community pushing for simpler, more reliable agent memory architecture |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | **Cross-agent messaging bus** | **Multi-agent orchestration**: Users building complex systems need first-class inter-agent communication beyond isolated instances |
| [#4003](https://github.com/HKUDS/nanobot/pull/4003) | **Dream skill ownership guard** (`dream_managed` frontmatter) | **Safety/control**: Preventing AI-modified skills from corrupting user-created workspace artifacts |

### Active Issues

| Issue | Signal |
|:---|:---|
| [#4000](https://github.com/HKUDS/nanobot/issues/4000) | StepFun ASR gap — provider parity demand for voice features |
| [#3993](https://github.com/HKUDS/nanobot/issues/3993) | Anthropic content block type strictness — API compliance edge case |

**Underlying Needs Analysis:**
- **Standards adoption**: GAP support indicates maturity pressure—project is being evaluated for enterprise/agent-marketplace readiness
- **Multi-agent scale**: Cross-instance messaging + subagent config fixes show users pushing beyond single-agent use cases
- **Provider completeness**: StepFun ASR + Anthropic compliance gaps indicate rapid provider addition outpaces full integration testing

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **High (fixed)** | [#3999](https://github.com/HKUDS/nanobot/pull/3999) Runner exits prematurely on sustained goals | **Merged** | Silent failure mode for `/goal` users—agent appeared complete but abandoned task |
| **Medium (fixed)** | [#3995](https://github.com/HKUDS/nanobot/issues/3995) PowerShell streaming output spam | **Closed** | Terminal rendering bug causing severe UX degradation in Windows environments |
| **Medium (fixed)** | [#3978](https://github.com/HKUDS/nanobot/pull/3978) `maxConcurrentSubagents` ignored | **Merged** | Configuration not propagated—users likely experiencing unnecessary serialization |
| **Medium (fixed)** | [#3867](https://github.com/HKUDS/nanobot/pull/3867) + [#3851](https://github.com/HKUDS/nanobot/pull/3851) MiMo thinking control via OpenRouter | **Merged** | Thinking models burning tokens/cost despite explicit disable request |
| **Medium (open)** | [#4002](https://github.com/HKUDS/nanobot/pull/4002) Tool-call fallbacks broken after empty responses | **PR open** | Kimi 2.6 via OpenRouter returns reasoning-only responses; fallback chain fails—**fix pending review** |
| **Low (open)** | [#3993](https://github.com/HKUDS/nanobot/issues/3993) Anthropic content block type enforcement | **No fix PR** | Bare dict tool returns crash Anthropic path; workaround known (coerce to text) |

**Stability Assessment:** Good recovery velocity—critical sustained-goal bug fixed same day as reported. OpenRouter/Kimi edge case has active fix PR. No unaddressed crashes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **StepFun Step ASR provider** | [#4000](https://github.com/HKUDS/nanobot/issues/4000) | **High** | Complements merged Step Plan PR (#3988); small, well-scoped provider addition |
| **Weather skill → example migration** | [#3958](https://github.com/HKUDS/nanobot/issues/3958) | **High** | Aligns with "lean and mean" philosophy; trivial implementation |
| **Loop detection & rate limiting** | [#3986](https://github.com/HKUDS/nanobot/issues/3986), [#2271](https://github.com/HKUDS/nanobot/pull/2271), [#3985](https://github.com/HKUDS/nanobot/pull/3985) | **Medium-High** | Multiple community attempts; clear user pain; needs maintainer architectural decision on approach |
| **GitAgent Protocol support** | [#4005](https://github.com/HKUDS/nanobot/pull/4005) | **Medium** | External standard adoption; depends on protocol traction |
| **Telegram webhook mode** | [#3996](https://github.com/HKUDS/nanobot/pull/3996) | **Medium** | Production deployment necessity; PR ready |
| **TUI terminal interface** | [#2155](https://github.com/HKUDS/nanobot/pull/2155) | **Medium** | Long-running PR (since March); high user enthusiasm but complex review |
| **Heartbeat reasoning decoupling** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **Medium** | Maturity feature for background agent noise reduction |
| **Cross-agent messaging** | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | **Medium** | Architectural; may coordinate with Dream consolidation |

**Prediction:** Next release likely focuses on **provider parity** (Step ASR) + **reliability** (loop guards, fallback fixes) + **deployment readiness** (Telegram webhook).

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | User Impact |
|:---|:---|:---|
| **Agent loops / wasted tool calls** | Recurring, multiple reports | Token cost, latency, frustration; users implementing own guards |
| **Provider-specific edge cases** | Growing (OpenRouter, Anthropic, StepFun) | "Works with OpenAI, breaks with X" experience fragmentation |
| **Windows/PowerShell UX degradation** | [#3995](https://github.com/HKUDS/nanobot/issues/3995) | Platform parity gap for terminal streaming |
| **Dream memory complexity** | [#3990](https://github.com/HKUDS/nanobot/pull/3990) | Two-phase system hard to reason about, debug |

### Positive Signals

- **Resource efficiency**: User replaced "openclaw" with NanoBot citing "very small" resource consumption ([#2155](https://github.com/HKUDS/nanobot/pull/2155))
- **Extensibility appreciation**: Multiple skill/provider contributions indicate good architecture for third-party extension
- **Active maintenance**: Rapid fix turnaround on reported bugs builds contributor confidence

### Satisfaction/Dissatisfaction Ratio
**Positive trending** — high contribution volume suggests engaged community; main friction is maturity gaps in non-OpenAI paths and agent robustness at scale.

---

## 8. Backlog Watch

### Long-Standing PRs Needing Attention

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat reasoning decoupling | ~3 months | Bitrot; conflicts | Architecture review—silencing heartbeat reasoning is production-critical for background agents |
| [#2155](https://github.com/HKUDS/nanobot/pull/2155) TUI terminal interface | ~2 months | Community enthusiasm decay | Decision: merge, request changes, or close with explanation; blocking contributor energy |
| [#2271](https://github.com/HKUDS/nanobot/pull/2271) Tool call cycle detection | ~2 months | Superseded by #3985/#3986? | Reconcile with newer loop guard proposals; avoid duplicate effort |

### Issues Without PR Response

| Issue | Gap | Concern |
|:---|:---|:---|
| [#3958](https://github.com/HKUDS/nanobot/issues/3958) Weather skill → example | 4 days | Trivial fix; signals maintainer bandwidth or prioritization ambiguity |
| [#4000](https://github.com/HKUDS/nanobot/issues/4000) StepFun ASR | 1 day | New; likely fast-tracked given provider momentum |

**Maintainer Attention Recommended:** The ~3 month PRs (#1443, #2155) represent **decision debt**—clear resolution would improve contributor retention and reduce review queue noise. The 108:10 open:closed PR ratio warrants process inspection.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-26. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-26

## 1. Today's Overview

Hermes Agent shows **high-velocity development with moderate merge throughput**: 50 issues and 50 PRs saw activity in the past 24 hours, but only 7 PRs merged/closed against 43 remaining open. The project is in a **heavy integration phase** with substantial community contribution (Rocket.Chat adapter, WhatsApp ingress, dashboard situation board) but bottlenecked on review capacity. No new releases were cut, suggesting maintainers are prioritizing feature landing over stabilization. Docker and gateway/platform reliability remain the most friction-heavy areas.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs (7 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#32303](https://github.com/NousResearch/hermes-agent/pull/32303) | Runtime local hook recovery coverage | Test infrastructure for resilience paths |
| [#32309](https://github.com/NousResearch/hermes-agent/pull/32309) | Feishu media uploads via HTTP/1.1 | Fixes HTTP/2 stream reset for image/file uploads |
| [#32307](https://github.com/NousResearch/hermes-agent/pull/32307) | Honor `discord.allowed_channels` from config.yaml | Closes config-env parity gap |
| [#32306](https://github.com/NousResearch/hermes-agent/pull/32306) | Scope cron skill index to bound skills | Reduces prompt noise, prevents skill hallucination |
| [#32267](https://github.com/NousResearch/hermes-agent/issues/32267) | Dashboard auth hardening (issue closed) | Security posture improvement from self-pentest |

**Key advances:**
- **Platform reliability**: Feishu, Discord, and cron execution all received targeted fixes
- **Security**: Dashboard plugin path now auth-gated; AWS credential leak in Bedrock subprocess blocked
- **Operational correctness**: Cron jobs no longer leak unbound skills into context

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) — Improved Themes for Dashboard | 19 comments, 27 👍 | **Highest user demand**. TUI readability is a daily friction point; users reject current serif/low-contrast choices. Design debt blocking adoption. |
| [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) — Docker home directory permission denied | 8 comments | Docker UX remains **systematically broken** for new users; permission model needs architectural rethink, not patchwork fixes. |
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) — Platform-Native Rich Interactions | 8 comments, closed | Closed but signals **unmet need**: Telegram/Discord/Slack rich UI components not yet shipped despite March proposal. |
| [#410](https://github.com/NousResearch/hermes-agent/issues/410) — Secure Secrets Management | 7 comments, 6 👍, closed | Security infrastructure gap acknowledged; plaintext `.env` storage is **production blocker** for enterprise users. |
| [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) — Docker HERMES_UID permissions | 7 comments | Companion to #18482; Docker identity mapping is **fragile across platforms** (Unraid, rootless, etc.). |

**Underlying needs**: Visual accessibility, Docker operational simplicity, and enterprise-grade security are the three unaddressed pillars holding back broader adoption.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **P1** | [#13659](https://github.com/NousResearch/hermes-agent/issues/13659) — `tool_use_enforcement: never` ignored for local Ollama models | **OPEN** | None linked; config-system/provider interaction bug |
| **P1** | [#32318](https://github.com/NousResearch/hermes-agent/pull/32318) — OAuth Pro/Max credentials routed to wrong endpoint | PR open | **Fix in review** |
| **P2** | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) — Docker home dir permissions | OPEN | None |
| **P2** | [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) — Docker HERMES_UID dashboard chat permissions | OPEN | None |
| **P2** | [#14448](https://github.com/NousResearch/hermes-agent/issues/14448) — Docker UX "so bad" (mkdir /root, privilege issues) | OPEN | None |
| **P2** | [#32106](https://github.com/NousResearch/hermes-agent/issues/32106) — Skill state corruption after context compression | OPEN | None; French report suggests international user growth |
| **P2** | [#31736](https://github.com/NousResearch/hermes-agent/issues/31736) — SQLite WAL FD pressure in gateway Kanban | OPEN | None |
| **P2** | [#32224](https://github.com/NousResearch/hermes-agent/issues/32224) — Feishu HTTP/2 stream reset | **FIXED** via #32309 | ✅ Merged |
| **P2** | [#32263](https://github.com/NousResearch/hermes-agent/issues/32263) — `discord.allowed_channels` config ignored | **FIXED** via #32307 | ✅ Merged |
| **P2** | [#32295](https://github.com/NousResearch/hermes-agent/issues/32295) — Slack "is thinking..." stuck indicator | OPEN | None |
| **P2** | [#32235](https://github.com/NousResearch/hermes-agent/issues/32235) — Cron skill index not scoped | **FIXED** via #32306 | ✅ Merged |

**Assessment**: Docker remains the **single largest stability liability** — 3 of 6 open P2 bugs, plus the most emotionally charged user feedback. The P1 Ollama config bug suggests provider-specific logic is bypassing global configuration gates.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Image generation fallback controls** | [#32320](https://github.com/NousResearch/hermes-agent/pull/32320) | **High** — PR open, well-scoped |
| **Agent situation board (dashboard)** | [#32317](https://github.com/NousResearch/hermes-agent/pull/32317) | **High** — PR open, observability priority |
| **Rocket.Chat platform adapter** | [#30463](https://github.com/NousResearch/hermes-agent/pull/30463) | **Medium** — mature PR, needs review bandwidth |
| **WhatsApp local ingress** | [#32310](https://github.com/NousResearch/hermes-agent/pull/32310) | **Medium** — early, proof gap acknowledged |
| **Chinese i18n completion** | [#28604](https://github.com/NousResearch/hermes-agent/pull/28604) | **Medium** — large surface, sync overhead |
| **Antigravity toolset** | [#32291](https://github.com/NousResearch/hermes-agent/issues/32291) | **Low** — novelty request, closed same day |
| **Semantic codebase search** | [#489](https://github.com/NousResearch/hermes-agent/issues/489) | **Low** — closed, Roo Code inspiration not prioritized |
| **Per-agent SQLite database** | [#485](https://github.com/NousResearch/hermes-agent/issues/485) | **Low** — closed, Gobii inspiration not prioritized |

**Roadmap signal**: The project is **platform-expansion focused** (Rocket.Chat, WhatsApp, Slack fixes) while **deferring deep architectural features** (semantic search, per-agent storage, rich interactions). This suggests a "land and expand" phase for gateway coverage before core agent intelligence upgrades.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Docker is broken/unusable** | [#14448](https://github.com/NousResearch/hermes-agent/issues/14448) "user experience for ur docker is so bad", [#18482](https://github.com/NousResearch/hermes-agent/issues/18482), [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) | 🔴 Critical — onboarding killer |
| **Dashboard unreadable** | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) "hard to read", "non-standard" fonts | 🟡 High — daily friction |
| **Config ignored / env var required** | [#32263](https://github.com/NousResearch/hermes-agent/issues/32263), [#9105](https://github.com/NousResearch/hermes-agent/pull/9105) | 🟡 High — trust erosion |
| **Local model compatibility** | [#13659](https://github.com/NousResearch/hermes-agent/issues/13659) Ollama + DeepSeek fails despite config | 🟡 High — local-first users blocked |

### Use Cases Emerging
- **Unraid/self-hosted Docker** (#23402): Home lab users need robust containerization
- **Parental monitoring via cron** (#32290): Daily grade checks, rate-limit sensitivity
- **Multi-platform enterprise deployment**: Feishu, Slack, Discord, now Rocket.Chat and WhatsApp

### Satisfaction Signals
- Active skill ecosystem: users building and requesting skills (Pokémon, Twilio, ml.ink, NewAPI)
- Strong maintainer responsiveness on security (#32267 pentest → same-day hardening)

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Dashboard themes | 26 days | **User attrition** | Design decision + CSS refactor |
| [#30463](https://github.com/NousResearch/hermes-agent/pull/30463) Rocket.Chat adapter | 4 days | **Contributor fatigue** | Review, possible rebase |
| [#12740](https://github.com/NousResearch/hermes-agent/pull/12740) Token estimation for streaming providers | 36 days | **Data quality gaps** | Provider testing, merge conflict resolution |
| [#9105](https://github.com/NousResearch/hermes-agent/pull/9105) Anthropic config.yaml api_key | 43 days | **Config system inconsistency** | Final review, cross-provider pattern validation |
| [#12883](https://github.com/NousResearch/hermes-agent/issues/12883) Memory importance scoring | 36 days | **Long-term agent coherence** | Architectural RFC, not quick fix |
| [#12918](https://github.com/NousResearch/hermes-agent/pull/12918) Discord thread routing for watches | 36 days | **Notification reliability** | Rebase, gateway testing |

**Maintainer attention most needed on**: Docker architecture (#18482, #23402, #14448 cluster), dashboard themes (#18080), and aging PR review backlog (#12740, #9105, #12918). The 43:7 open-to-merged PR ratio indicates **review bandwidth is the primary constraint** on project velocity.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-26

## 1. Today's Overview

PicoClaw shows **elevated community activity** with 17 items updated in the last 24 hours (9 issues, 8 PRs), though notably **zero PRs were merged or closed**, suggesting a potential bottleneck in maintainer review capacity. The project pushed one nightly build (`v0.2.9-nightly.20260525.ab6d3946`) but no stable release. A significant portion of activity (6 of 17 items) is marked `stale`, indicating aging contributions awaiting resolution. The issue mix is heavily skewed toward bugs (5 open bugs vs. 1 closed enhancement), with particular concentration on **provider API compatibility** (Anthropic model ID formatting, temperature deprecation) and **platform-specific failures** (RISC-V, Termux, macOS symlinks). Community engagement is moderate with one high-comment thread (#1042, 14 comments) driving substantive technical discussion.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.9-nightly.20260525.ab6d3946](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly (automated) | Automated build from `main`; explicitly flagged as potentially unstable. No manual changelog provided; [full diff available](https://github.com/sipeed/picoclaw/compare/v0.2.9...main). |

**No stable release.** No breaking changes or migration notes documented for nightly.

---

## 3. Project Progress

**⚠️ No PRs merged or closed today.** All 8 updated PRs remain open.

| PR | Status | Impact |
|----|--------|--------|
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) — fix(config): canonical hyphenated model ID for claude-sonnet | Open, 0 comments | Fixes immediate user-facing crash on fresh install |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) — fix(providers): omit temperature for claude-opus-4-7 | Open, 0 comments | Unblocks Anthropic's latest model family |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) — fix(pid): verify gateway identity for stale PID | Open, updated today | Addresses crash loop on gateway restart (high-severity bug #2720) |

**Assessment:** Two critical provider-compatibility fixes and one stability fix are **ready for merge** but awaiting maintainer action. Progress is blocked at the review stage.

---

## 4. Community Hot Topics

| Rank | Item | Activity | Analysis |
|------|------|----------|----------|
| 🔥 1 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` tool `guardCommand` over-blocking | 14 comments, 2 👍 | **Core tension:** Security vs. utility. The regex-based path guard falsely blocks legitimate commands (`curl wttr.in/Beijing?T`) by misinterpreting URL parameters as relative path traversal. Community seeks **context-aware validation** (distinguish URLs from file paths) without weakening workspace sandboxing. |
| 2 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) — Streaming Output for Web Chat | 10 comments, closed today | Enhancement request fulfilled or deprioritized; closure without merge suggests may be addressed elsewhere or deemed out of scope. |
| 3 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) — Stale PID crash loop | 6 comments | Infrastructure reliability concern; [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) provides fix. |

**Underlying needs:** Users want **smarter security boundaries** that don't break common workflows, and **production-grade process management** for long-running gateway deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Available? |
|----------|-------|-------------|--------------|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Stale PID file causes infinite crash loop when OS reuses PID for unrelated process (e.g., `systemd-resolved`) | ✅ [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) ready |
| 🔴 **High** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | Fresh installs broken: default config seeds `claude-sonnet-4.6` (dotted) but Anthropic API requires `claude-sonnet-4-6` (hyphenated) | ✅ [PR #2942](https://github.com/sipeed/picoclaw/pull/2942) ready |
| 🔴 **High** | [#2939](https://github.com/sipeed/picoclaw/issues/2939) | `claude-opus-4-7` calls fail with HTTP 400 due to deprecated `temperature` parameter | ✅ [PR #2940](https://github.com/sipeed/picoclaw/pull/2940) ready |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` tool `guardCommand` false-positives on URL-like command arguments | ❌ No PR yet; active discussion |
| 🟡 **Medium** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | `.deb` package non-functional on RISC-V with OpenAI models | ❌ No fix identified |
| 🟡 **Medium** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | History view truncates multi-message conversations, showing only last user message | ❌ No fix identified |
| 🟢 **Low** | [#2944](https://github.com/sipeed/picoclaw/issues/2944) | Termux/termux-chroot: X509 certificate errors due to Go binary not finding system CA bundle | ❌ Workaround: set `SSL_CERT_FILE` explicitly |
| 🟢 **Low** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) | WeChat channel image upload fails with Zhipu GLM-5 API error 1210 (parameter error) | ❌ No fix identified |

**Critical pattern:** Three high-severity bugs have **same-day fix PRs** ([#2940](https://github.com/sipeed/picoclaw/pull/2940), [#2942](https://github.com/sipeed/picoclaw/pull/2942)) from contributor `LegendAlessandro-Liguori`, suggesting responsive community but **bottlenecked maintainer merge capacity**.

---

## 6. Feature Requests & Roadmap Signals

| Item | Category | Likelihood in v0.3.0 |
|------|----------|----------------------|
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) — Server酱³ Bot (SC3Bot) channel | New channel integration | Medium — PR stale since May 18, needs review |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) — ChatStream support for pico channel | Real-time streaming | Medium — Core architectural change, stale since May 11 |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) — MCP dynamic headers per-request | Enterprise/auth features | Medium — Enables multi-tenant MCP deployments |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) — Skill catalog token optimization | Cost/performance | Higher — Reduces token waste on providers without prompt caching; addresses operational cost concern |

**Predicted for next stable:** Provider compatibility fixes (already PR'd) plus token optimization ([#2781](https://github.com/sipeed/picoclaw/pull/2781)) as low-risk performance win. Streaming features may slip to v0.3.x given stale status and architectural complexity.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **"Works on my machine" platform gaps** | Termux CA certs, RISC-V `.deb` failures, macOS symlink issues | High — undermines cross-platform promise |
| **Provider API drift breaks configs** | Anthropic model ID format, temperature deprecation | High — fresh installs fail, existing configs break silently |
| **Security tools that over-correct** | `guardCommand` blocking benign `curl` commands | Medium — erodes trust in safety features |
| **History/data loss perception** | Multi-message conversations appear truncated | Medium — users fear data loss, actual bug in display layer |
| **Operational fragility** | PID file management causing production outages | High — affects self-hosted deployments |

**Satisfaction signals:** Quick community fix contributions (same-day PRs for Anthropic issues). **Dissatisfaction signals:** Stale PRs accumulating, platform-specific packages unmaintained, no maintainer response on aging issues.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) SC3Bot channel | 7 days stale | Community contribution decay | Maintainer review/merge or explicit rejection |
| [#2890](https://github.com/sipeed/picoclaw/pull/2890) macOS symlink fix | 7 days stale | Platform regression unaddressed | Review; affects test reliability and user installs |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) ChatStream | 14 days stale | Competitive feature gap | Architectural review or roadmap communication |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) MCP dynamic headers | 28 days stale | Enterprise adoption blocker | Review for security implications |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) Token optimization | 19 days stale | Cost optimization unshipped | Low-risk, should be prioritized |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V non-functional | 8 days, no response | Architecture support commitment unclear | Triage: hardware access for reproduction? |

**Maintainer attention urgently needed:** 6 stale PRs with clear scope, plus 1 platform-specific bug (#2887) that risks architecture support claims. The **zero merge rate today** with 8 active PRs suggests either release freeze, maintainer bandwidth constraint, or review process gap — warrants project health monitoring.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-26

## 1. Today's Overview

NanoClaw shows **high development velocity** with 23 updated items in the last 24 hours (19 PRs, 4 issues), indicating an active pre-release push. No new releases were cut, suggesting the project is in a feature-integration phase rather than a stabilization cycle. The activity is heavily weighted toward **v1 parity restoration** (health endpoints, multimodal support) and **Slack enterprise readiness** (Socket Mode, multi-workspace, thread context). With 14 open PRs against 5 merged/closed, maintainers face a significant review backlog that could bottleneck progress.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 items)

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#2592](https://github.com/nanocoai/nanoclaw/pull/2592) | mmahmed | Docs: Teams CLI auto-credentials path | Skill ecosystem documentation |
| [#2612](https://github.com/nanocoai/nanoclaw/pull/2612) | NilanshBansal | `debug-issue` triage skill (Skyler-powered) | **Closed without merge** — incident investigation automation |
| [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) | glifocat | Fix: Cascade delete for `ncl groups delete` | **Fixes [#2525](https://github.com/nanocoai/nanoclaw/issues/2525)** — resolves `FOREIGN KEY constraint failed` |
| [#1968](https://github.com/nanocoai/nanoclaw/pull/1968) | IamAdamJowett | Per-agent provider/model configuration (5-commit chain) | **Major feature landed** — fully chat-driveable model selection |
| [#2344](https://github.com/nanocoai/nanoclaw/pull/2344) | IamAdamJowett | Fix: Test type errors from `RoutableAgentMessage`/`Session` changes | Build stabilization |

**Key advancement:** Per-agent provider/model configuration ([PR #1968](https://github.com/nanocoai/nanoclaw/pull/1968)) finally merged after ~1 month in review — this unblocks multi-model deployments and user-driven model selection.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|:---|:---|:---|
| [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) — Double delivery (send_message MCP + `<message>` blocks) | 3 comments, updated today | **Architectural tension**: MCP tool outputs and XML-style message blocks are competing delivery paths with no deduplication layer |
| [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) — Multi-workspace Slack | 2 comments, active since April | Enterprise deployments need single-instance multi-tenant Slack; registry key collision (`channelType`) is the blocker |
| [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) — 60-second dedup window drops responses | 2 comments, same reporter as #2404 | **Reliability crisis**: Message deduplication logic is too aggressive, breaking real-time conversational flows |
| [#2618](https://github.com/nanocoai/nanoclaw/pull/2618) — Restore v1 multimodal (image/voice/PDF) + reactions | Open, no comments yet | **v2 parity gap**: Users blocked on v1→v2 migration without media handling |

**Analysis:** Two issues ([#2404](https://github.com/nanocoai/nanoclaw/issues/2404), [#2506](https://github.com/nanocoai/nanoclaw/issues/2506)) from the same reporter (mshirel) reveal a **systemic message routing/deduplication problem** in v2's poll-loop architecture. The 60-second dedup window and dual output paths (MCP tools vs. XML blocks) suggest the core turn-processing loop needs redesign, not incremental fixes.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **High** | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) — `ncl groups delete` FK constraint failure | **CLOSED** | ✅ [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) merged |
| 🟡 **High** | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) — Silent response drops (60s dedup) | Open, no PR | ❌ None |
| 🟡 **Medium** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) — Double message delivery | Open, no PR | ❌ None |
| 🟢 **Medium** | [#2610](https://github.com/nanocoai/nanoclaw/pull/2610) — Missing `initGroupFilesystem` on group create | Open PR | 🔄 [#2610](https://github.com/nanocoai/nanoclaw/pull/2610) pending review |
| 🟢 **Medium** | [#2609](https://github.com/nanocoai/nanoclaw/pull/2609) — Apple container file mounts, host networking, user mapping | Open PR | 🔄 [#2609](https://github.com/nanocoai/nanoclaw/pull/2609) pending review |

**Critical gap:** The message deduplication/delivery bugs ([#2506](https://github.com/nanocoai/nanoclaw/issues/2506), [#2404](https://github.com/nanocoai/nanoclaw/issues/2404)) have no fix PRs despite being reliability blockers. These affect **every production deployment** with active users.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request Vehicle | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Slack Socket Mode** | [#2613](https://github.com/nanocoai/nanoclaw/pull/2613) | ⭐⭐⭐⭐⭐ High | PR open, purely additive, auto-detected from env |
| **Thread parent seeding** | [#2614](https://github.com/nanocoai/nanoclaw/pull/2614) + [#2615](https://github.com/nanocoai/nanoclaw/pull/2615) | ⭐⭐⭐⭐⭐ High | Dependency chain complete, both PRs open today |
| **/health endpoint** | [#2619](https://github.com/nanocoai/nanoclaw/pull/2619) | ⭐⭐⭐⭐⭐ High | "Regression fix" framing, production-tested, low risk |
| **v1 multimodal parity** | [#2618](https://github.com/nanocoai/nanoclaw/pull/2618) | ⭐⭐⭐⭐☆ High | Large surface area but critical for v1 migration |
| **Multi-workspace Slack** | [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) | ⭐⭐⭐☆☆ Medium | Requires registry architectural change; no PR yet |
| **Per-group CLAUDE.role.md** | [#2345](https://github.com/nanocoai/nanoclaw/pull/2345) | ⭐⭐⭐☆☆ Medium | Borderline skill vs. source change; maintainer decision pending |
| **Tool-visibility live previews** | [#2211](https://github.com/nanocoai/nanoclaw/pull/2211) | ⭐⭐☆☆☆ Lower | Open since May 3, no recent activity |

**Prediction:** Next release (likely imminent) will focus on **Slack enterprise hardening** (Socket Mode, threads) + **v1 parity restoration** (health, multimodal). Multi-workspace support is the next major architectural lift.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact | Source |
|:---|:---|:---|
| Silent message loss | Clients timeout, conversations break | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) |
| Double delivery | Confusing UX, spam-like behavior | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) |
| `ncl groups delete` corruption | Database integrity failures, CLI unusable for groups | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) |
| Missing v1 features | **Migration blocker** — cannot upgrade from v1 | [#2618](https://github.com/nanocoai/nanoclaw/pull/2618) |
| Apple Silicon container issues | Local dev friction, file mount failures | [#2609](https://github.com/nanocoai/nanoclaw/pull/2609) |

### Use Case Signals
- **Enterprise Slack deployments**: Socket Mode + multi-workspace + thread context = large-team, security-conscious orgs
- **Multi-model routing**: Per-agent configuration enables cost optimization (cheap models for simple tasks, premium for complex)
- **Incident response**: `debug-issue` skill interest suggests platform reliability concerns in production

### Satisfaction/Dissatisfaction
- ✅ **Positive:** Rapid v1 parity restoration, active feature development, per-agent model selection finally landed
- ❌ **Negative:** Core message reliability regressions in v2, deduplication logic appears undertested, review backlog growing

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1804](https://github.com/nanocoai/nanoclaw/issues/1804) Multi-workspace Slack | ~6 weeks | **Architectural debt** — registry key collision blocks enterprise scaling | Design review: change `activeAdapters` key from `channelType` to composite key |
| [#2211](https://github.com/nanocoai/nanoclaw/pull/2211) Tool-visibility skill | ~3 weeks | Stalled innovation | Maintainer decision on skill vs. core integration |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) Unknown slash commands dropped | ~2.5 weeks | **UX regression** — user commands silently fail | Simple fix, needs review/merge |
| [#2345](https://github.com/nanocoai/nanoclaw/pull/2345) Per-group CLAUDE.role.md | ~2.5 weeks | Community contribution at risk of staling | Maintainer call on implementation approach |

**Urgency:** The message routing bugs ([#2404](https://github.com/nanocoai/nanoclaw/issues/2404), [#2506](https://github.com/nanocoai/nanoclaw/issues/2506)) need **immediate maintainer attention** — they represent a v2 reliability crisis with no fix in flight. The deduplication window and dual-output-path architecture require design-level intervention, not patch fixes.

---

*Digest generated from 23 GitHub items (19 PRs, 4 issues) updated 2026-05-25.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-26

## 1. Today's Overview

NullClaw shows **minimal but steady maintenance activity** on 2026-05-26, with 3 total items updated across issues and pull requests. The project appears to be in a **consolidation phase** rather than active feature expansion—no new releases were cut, and the single open issue relates to documentation accuracy rather than core functionality. The merged dependency update suggests ongoing security hygiene, while the open PR for gateway methods indicates incremental platform capability growth. Overall project health reads as **stable but low-velocity**, with maintainer attention split between infrastructure upkeep and modest feature work.

---

## 2. Releases

**No new releases** for 2026-05-26.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|:---|:---|:---|
| [#931](https://github.com/nullclaw/nullclaw/pull/931) | **ci(deps): bump busybox from 1.37 to 1.38** (Dependabot) | Routine Docker base image security/maintenance update. No functional changes to NullClaw itself. |

### In Progress

| PR | Description | Status |
|:---|:---|:---|
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | **Add additional gateway methods** — STT transcription endpoint, extended wizard JSON parsing, hashed token storage with timeout protection | **Open** — represents the day's substantive feature work |

**Technical advance**: PR #933 expands NullClaw's gateway into **speech-to-text (STT) integration** and hardens authentication patterns (hashing paired tokens, adding timeouts). The shared config parser extension suggests architectural consolidation across gateway, A2A (Agent-to-Agent), memory, and media-audio subsystems.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#933](https://github.com/nullclaw/nullclaw/pull/933) — Add additional gateway methods | **Most active substantive item** (open, awaiting review) | **Underlying need**: Users/requestors want NullClaw to serve as a **unified media gateway** with voice/audio capabilities, not just text-based agent orchestration. The STT endpoint and media-audio config signal demand for multimodal agent infrastructure. The security improvements (hashed tokens, timeouts) suggest production deployment concerns—users aren't just experimenting, they're running this in environments requiring audit compliance. |
| [#932](https://github.com/nullclaw/nullclaw/issues/932) — Invalid Zig version in docs | Single open issue, 0 comments | **Barrier to entry**: Documentation drift blocking new contributors/users. The `std.Io.Dir` symbol dependency on Zig 0.16.0+ indicates the project has moved forward while docs lagged. |

**Community dynamic**: Low comment volume across all items suggests either (a) small core contributor base, or (b) decisions happening in other channels (Discord, internal discussions). The undefined comment counts on PRs may indicate API data gaps or genuinely zero discussion.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status |
|:---|:---|:---|
| **Medium** | [#932](https://github.com/nullclaw/nullclaw/issues/932) — Invalid Zig version in docs | **No fix PR yet** — docs specify Zig 0.15.2, actual requirement is ≥0.16.0 for `std.Io.Dir` |

**Impact assessment**: This is a **build-breaker for new users** following official documentation. Existing contributors likely already run 0.16.0+, masking the problem. Risk of contributor churn if not patched quickly—Zig's rapid version evolution makes accurate prerequisite docs critical.

**No crashes, regressions, or security vulnerabilities** reported in the 24h window.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **STT/media transcription gateway** | PR #933 (open) | **High** — actively developed, comprehensive scope |
| **Enhanced security model for gateway tokens** | PR #933 (hashing, timeouts) | **High** — paired with STT work |
| **Unified config parser expansion** | PR #933 (A2A, memory, media-audio) | **High** — architectural, enables future subsystems |
| **A2A (Agent-to-Agent) protocol support** | PR #933 references | **Medium** — scaffolded in config, not yet implemented |

**Prediction**: The next release (when cut) will likely center on **gateway v2 capabilities** with voice/audio ingress, hardened authentication, and broader protocol support. The A2A references align with industry momentum (Google's A2A protocol, April 2025).

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Documentation accuracy** | Issue #932 — build failure following official guide | New contributors, self-hosters |
| **Desire for multimodal agent inputs** | PR #933's STT endpoint | Production deployers, platform integrators |
| **Security hardening for token management** | PR #933's hashed tokens + timeouts | Enterprise/security-conscious users |

**Satisfaction indicators**: Dependabot automation suggests healthy CI/CD maintenance. Low issue volume could indicate stability or low adoption—context insufficient to distinguish.

**Dissatisfaction risk**: The Zig version doc bug creates **first-hour friction**; in a language ecosystem with version sensitivity, this damages trust in project maturity.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#932](https://github.com/nullclaw/nullclaw/issues/932) — Invalid Zig version in docs | **1 day** (new, but blocking) | **High** — contributor onboarding blocker | Simple docs PR; should be <1 hour fix. **Needs maintainer triage or community PR.** |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) — Add additional gateway methods | **1 day** | **Medium** — review pending | Substantial PR (~4 logical changes). Needs architectural review, especially security implications of token hashing scheme. |

**No long-stale items** detected in the 24h window. However, the **rapid close of #931** (same-day Dependabot merge) versus **open status of #933** suggests maintainer bandwidth may be constrained for non-automated reviews. PR #933's complexity warrants attention to prevent bitrot.

---

*Digest generated from NullClaw GitHub activity for 2026-05-26. Data source: github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-26

## 1. Today's Overview

IronClaw shows **exceptionally high development velocity** with 50 PRs and 22 issues updated in the last 24 hours, though no new releases were cut. The project is dominated by two massive parallel workstreams: the **"Reborn" architectural migration** (modernizing the agent runtime and channel surfaces) and the **"attested-signing" security substrate** (a 13+ PR stack for cryptographic transaction signing with multi-tenant isolation). Community engagement is moderate-to-high with active discussion on crates.io publishing delays and several long-running tracking issues. The 40:10 open-to-merged PR ratio suggests a significant integration backlog that may create merge contention.

---

## 2. Releases

**No new releases** — None published today. Notably, [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) remains unresolved: crates.io is stuck at `0.24.0` (March 31) while GitHub tags exist through `v0.27.0` (April 29), blocking downstream consumers due to wasmtime 28.x CVEs.

---

## 3. Project Progress

### Closed Issues (3 Reborn auth milestones completed)
| Item | Link | Significance |
|------|------|------------|
| **Step 1: Auth product contracts + fake-service tests** | [#3810](https://github.com/nearai/ironclaw/issues/3810) | Foundation for Reborn-native authentication; contract-first approach with V1 behavior inventory |
| **Step 2: Reborn-native product auth/secrets composition** | [#3811](https://github.com/nearai/ironclaw/issues/3811) | Production service boundary for WebUI/settings integration |
| **Step 3: Reborn-native OAuth callbacks + setup continuations** | [#3812](https://github.com/nearai/ironclaw/issues/3812) | Completes the OAuth flow modernization; unblocks user-facing setup UX |

### Merged/Closed PRs
No explicit merges listed in data, but 10 PRs in merged/closed state (implied from header). The three closed issues above represent significant Reborn infrastructure progress.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Link | Analysis |
|------|------|----------|------|----------|
| 1 | **Publish 0.25.0–0.27.0 to crates.io** | 9 comments | [#3259](https://github.com/nearai/ironclaw/issues/3259) | **Critical supply-chain blocker** — downstream Rust projects cannot consume security patches. Reflects tension between GitHub-centric development and crates.io distribution promises. |
| 2 | **Slack ProductAdapter MVP (Reborn Lane 10)** | 4 comments | [#3857](https://github.com/nearai/ironclaw/issues/3857) | Enterprise integration demand; preconfigured credentials suggest "batteries included" onboarding priority |
| 3 | **Binary-E2E test framework plan (Reborn)** | 4 comments | [#3702](https://github.com/nearai/ironclaw/issues/3702) | Quality infrastructure for the migration; 88 test files being categorized shows scale of compatibility challenge |

### Underlying Needs
- **Distribution reliability**: crates.io lag signals operational/process debt in release engineering
- **Enterprise channel coverage**: Slack adapter + WebUI porting shows push for production multi-channel deployments
- **Migration confidence**: Heavy investment in E2E testing reflects risk awareness in the Reborn transition

---

## 5. Bugs & Stability

| Severity | Item | Link | Status | Details |
|----------|------|------|--------|---------|
| **HIGH** | **macOS prebuilt: gateway never binds** | [#3701](https://github.com/nearai/ironclaw/issues/3701) | Open, 1 comment | v0.28.2 regression — `doctor` reports enabled but gateway fails to bind. Platform-specific networking issue. |
| **HIGH** | **Discord channel 100% CPU hang** | [#4030](https://github.com/nearai/ironclaw/issues/4030) | Open, 0 comments | `tokio` workers pinned at 100%; triggered by `build_software` tool execution. **No fix PR identified.** |
| **HIGH** | **Nightly E2E failure** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Open, recurring | Failed on commit `030cfeb0` — same commit as Discord bug report, suggesting systemic instability |
| **MEDIUM** | **HTTP response error aborts entire run** (regression from #4014) | [#4022](https://github.com/nearai/ironclaw/issues/4022) | **Fix PR open** | Previously recoverable tool errors now terminate agent runs; fix PR [#4022](https://github.com/nearai/ironclaw/pull/4022) exists |

### Regression Pattern
Two confirmed regressions (#4014 → #4022, and the E2E/Discord issues on `030cfeb0`) suggest **instability in the v0.28.x release branch** that may relate to the tool-execution refactoring.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Feature | Issue | Link | Likelihood in Next Release |
|---------|-------|------|---------------------------|
| **Custom Telegram API host** | #4034 | [#4034](https://github.com/nearai/ironclaw/issues/4034) | **High** — Small scope, common self-hosting need, WASM channel modification |
| **Credit/rate-limit transparency** | #4043 | [#4043](https://github.com/nearai/ironclaw/issues/4043) | **Medium** — UX polish, billing-adjacent, may require backend changes |
| **TrustEnrollment ceremony + connected-wallet registration** | #4052 | [#4052](https://github.com/nearai/ironclaw/issues/4052) | **Very High** — Active PR [#4055](https://github.com/nearai/ironclaw/pull/4055) open, blocks external wallet signing |

### Roadmap Signals from Active Development

| Workstream | Signal |
|------------|--------|
| **Attested-signing substrate** | 13+ PR stack nearly complete; production-durable stores (PG+libSQL) in final PRs. Likely **v0.29.0 flagship feature**. |
| **Reborn WebUI** | Beta route completion (#3807), static WebUI v2 port (#3886), E2E acceptance test (#3613) — approaching **beta readiness**. |
| **Tenant sandbox** | Process capabilities incomplete (#4042) — likely **post-v1 Reborn**. |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|-------|----------|----------|
| **Failed requests may consume credits** | [#4043](https://github.com/nearai/ironclaw/issues/4043) | High — trust erosion in billing |
| **Unclear rate limit behavior** | [#4043](https://github.com/nearai/ironclaw/issues/4043) | Medium — onboarding friction |
| **macOS gateway broken out-of-box** | [#3701](https://github.com/nearai/ironclaw/issues/3701) | High — platform parity failure |
| **Discord reliability (100% CPU hang)** | [#4030](https://github.com/nearai/ironclaw/issues/4030) | Critical — production channel failure |

### Use Cases Emerging
- **Self-hosted Telegram** (#4034): Privacy-conscious deployments, enterprise air-gapping
- **Slack integration** (#3857): Team collaboration workflows, competing with Slack-native AI apps
- **Multi-tenant signing** (#4051): SaaS/hosted IronClaw — operational model for managed deployments

### Satisfaction Signal
The crates.io publishing complaint (#3259, 9 comments) and credit transparency issue (#4043) suggest **growing commercial/userbase expectations** that the project infrastructure is straining to meet.

---

## 8. Backlog Watch

| Item | Age | Link | Risk | Action Needed |
|------|-----|------|------|---------------|
| **crates.io publishing blocked** | 21 days | [#3259](https://github.com/nearai/ironclaw/issues/3259) | **Critical supply-chain** | Maintainer decision on release process; possibly blocked on CI/security audit |
| **macOS gateway binding failure** | 10 days | [#3701](https://github.com/nearai/ironclaw/issues/3701) | Platform regression | Triage for v0.28.3 hotfix? |
| **Nightly E2E failure** | 16 days | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Quality signal degradation | Root cause analysis; may be same as Discord CPU hang |
| **Reborn E2E test framework** | 10 days | [#3702](https://github.com/nearai/ironclaw/issues/3702) | Migration risk | Maintainer review of 88-test-file categorization |

### Merge Contention Risk
With **40 open PRs** and the attested-signing stack creating deep dependency chains (PR2→PR3→PR4→PR6, etc.), the project faces **integration thrashing**. The 13-PR signing stack alone requires careful sequencing; any rebase conflict cascades through the chain.

---

*Digest generated from 22 issues and 50 PRs updated 2026-05-25 to 2026-05-26.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-26

## 1. Today's Overview

LobsterAI shows **high development velocity** with 29 PRs updated in the last 24 hours (14 open, 15 merged/closed) and 1 active issue, indicating an active sprint cycle focused on stability and OpenClaw integration. The project is clearly in a **maturation phase**, with multiple critical bug fixes landing simultaneously alongside ecosystem connectivity features. No new releases were cut today, suggesting the team is accumulating changes for a future version rather than shipping continuously. The single open issue (#2046) signals strong product-market fit on core functionality, with community attention shifting toward **memory architecture** as the next frontier. Overall project health appears **robust but strained**—high merge volume paired with lingering stale PRs from April indicates potential reviewer bandwidth constraints.

---

## 2. Releases

**No new releases** today. The project remains without a recent tagged version.

---

## 3. Project Progress

### Merged/Closed PRs (15 total, key items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2044](https://github.com/netease-youdao/LobsterAI/pull/2044) | fisherdaddy | fix(openclaw): prevent subagent cleanup finalize from blocking on hook failure | **Stability** — eliminates deadlock risk in subagent lifecycle |
| [#2042](https://github.com/netease-youdao/LobsterAI/pull/2042) | btc69m979y-dotcom | feat(plugins): support syncing plugins from OpenClaw extension directory | **Ecosystem** — unifies plugin management across OpenClaw ↔ LobsterAI |
| [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) | fisherdaddy | fix: fixed gateway restart caused by GitHub Copilot token refresh | **Reliability** — stops disruptive gateway cycling |
| [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) | btc69m979y-dotcom | feat: subagent session sidebar display and detail view | **UX** — complete subagent observability infrastructure |
| [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) | btc69m979y-dotcom | fix: context window slider snap-to-preset and K/M text input | **UX polish** — ergonomic context window configuration |
| [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584) | gongzhi-netease | fix(agent): use short UUID instead of name-based Agent ID | **Data integrity** — eliminates ghost data resurrection on agent recreation |

**Key advancement**: The OpenClaw ↔ LobsterAI bidirectional sync ecosystem is now substantially complete, with both **plugins** (#2042) and **skills** (#2045, open) flowing between the two systems. This positions LobsterAI as a viable desktop control plane for OpenClaw deployments.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — Agent Memory Architecture | 1 comment, fresh issue | **Foundational product gap** — user documents systematic memory failure across sessions, with 4-tier prioritized proposal |
| [#2045](https://github.com/netease-youdao/LobsterAI/pull/2045) — Skills sync from OpenClaw | Open, high-priority feature | Community demand for unified skill lifecycle management |
| [#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) — Gateway session patch timeout handling | Critical fix, no comments yet | Production stability issue; silent blocking of chat.send |
| [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) — Aborted tool loop token burn | Critical fix, no comments yet | Financial/operational impact — "thousands of Aborted tool results" |

**Underlying needs**: The community is transitioning from "does it work?" to "does it remember?" — signaling product maturity. The memory issue (#2046) crystallizes a competitive disadvantage against Claude Projects, ChatGPT's memory system, and Cursor's context awareness. The OpenClaw integration work suggests LobsterAI is positioning as an **enterprise agent orchestration layer**, but memory persistence is a blocker for that narrative.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) | Infinite token burn from aborted tool loops — financial impact, runaway costs | **Fix PR open** — adds upstream aborted-loop breaker, enables `tools.loopDetection` by default |
| 🔴 **Critical** | [#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) | Gateway sessions.patch timeouts block chat.send — complete chat interruption | **Fix PR open** — non-blocking timeout handling |
| 🟡 **High** | [#2048](https://github.com/netease-youdao/LobsterAI/pull/2048) | Empty data in LLM streaming output — degraded UX, potential parsing failures | **Fix PR open** |
| 🟡 **High** | [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047) | Session freezing — complete UI unresponsiveness | **Fix PR open** |
| 🟡 **High** | [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) *(closed)* | Gateway restart on GitHub Copilot token refresh — service disruption | **Fixed** |
| 🟡 **High** | [#2044](https://github.com/netease-youdao/LobsterAI/pull/2044) *(closed)* | Subagent cleanup deadlock on hook failure — resource leak, potential cascade | **Fixed** |

**Stability assessment**: Four critical/high severity fixes in flight simultaneously indicates **recent stress on production deployments**. The token burn bug (#2049) is particularly alarming — it implies LobsterAI has been deployed in configurations where aborted runs can accumulate thousands of iterations without termination, suggesting insufficient guardrails in the OpenClaw integration layer. The concentration of fixes from `fisherdaddy` (4 PRs) points to either a single engineer firefighting or a coordinated stability sprint.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Agent Memory System** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) | **High** — architectural foundation | User pain is acute; competitor parity essential; issue is well-specified with 4 implementation tiers |
| **Session Title/Metadata Persistence** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — Tier 1 | **Very High** | Explicitly marked high priority; filesystem persistence is scoped and feasible |
| **Automatic Memory Retrieval/Association** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — Tiers 2-4 | **Medium** | Requires vector store / embedding infrastructure; may be staged |
| **Dynamic Model List Fetching** | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) *(stale)* | **Medium** | PR exists but stale since April; addresses real operational pain |
| **Session Color Coding** | [#1526](https://github.com/netease-youdao/LobsterAI/pull/1526) *(stale)* | **Low-Medium** | Nice-to-have UX; PR ready but deprioritized |
| **Enhanced Connection Test Diagnostics** | [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524) *(stale)* | **Medium** | Quality-of-life; reduces support burden |

**Prediction**: The next release will likely focus on **memory persistence** (filesystem-level) as the headline feature, with the four critical stability fixes as prerequisites. The OpenClaw sync work (#2042, #2045) suggests a broader "unified agent platform" narrative that memory would complete.

---

## 7. User Feedback Summary

### Pain Points (Documented in Issues/PRs)

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Memory amnesia across sessions** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046): "Agent cannot automatically perceive, retrieve, associate historical dialogue" | Existential for power users |
| **Silent failures** | [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510): IM notifications fail silently; [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517): Copilot token lost silently | Trust erosion |
| **Runaway costs** | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049): "continuous token burn during idle periods" | Financial/operational |
| **Manual configuration burden** | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522): manual model entry; [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046): manual session title management | Scalability blocker |
| **Data resurrection / ghost data** | [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584): old agent data reappears on recreation | Data integrity concern |

### Use Case Signals

- **Enterprise team coordination**: Cowork/session features, subagent trees, IM integrations (QQ, Feishu, DingTalk) suggest B2B deployment
- **OpenClaw as hub**: Plugin/skill sync indicates LobsterAI is becoming a **desktop client/control plane** for headless OpenClaw instances
- **Long-running agent workflows**: Memory request implies users expect agents to maintain state over days/weeks, not single sessions

**Satisfaction**: High on OpenClaw integration velocity; low on autonomous agent reliability and memory continuity.

---

## 8. Backlog Watch

### Stale PRs Requiring Maintainer Attention (Updated today but unmerged since April)

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510) | ~7 weeks | UX bug — silent IM notification failures | Review/merge or close with alternative fix |
| [#1514](https://github.com/netease-youdao/LobsterAI/pull/1514) | ~7 weeks | Broken QQ Bot whitelist UI — feature unusable | Review/merge; small scoped fix |
| [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | ~7 weeks | Log export timeout — operational debugging blocked | Review/merge; performance fix |
| [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | ~7 weeks | Copilot OAuth token loss — auth reliability | Review/merge; resource leak fix |
| [#1521](https://github.com/netease-youdao/LobsterAI/pull/1521) | ~7 weeks | Spurious gateway restart on skills change | Review/merge; stability fix |
| [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | ~7 weeks | Dynamic model fetching — feature gap | Review/merge or roadmap response |
| [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524) | ~7 weeks | Better connection error diagnostics | Review/merge; support burden reducer |
| [#1526](https://github.com/netease-youdao/LobsterAI/pull/1526) | ~7 weeks | Session color coding — UX enhancement | Low priority, but PR ready |

**Critical concern**: **8 PRs from early April remain unmerged** despite daily updates, suggesting either:
- CI/quality gates blocking merge (no evidence in data)
- Reviewer bandwidth exhaustion (likely — 29 PRs/day throughput)
- Architectural uncertainty on approach

The pattern of "updated today but created April 7" implies automated rebasing or dependency updates without human review progression. This backlog risks **contributor attrition** and **bug accumulation** — several stale PRs address production issues (silent failures, timeouts, token loss) that remain unfixed in releases.

**Recommendation signal**: Project would benefit from a maintainer triage pass to either merge, close with explanation, or convert stale PRs to tracked issues with assignees.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-05-26.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-26

## 1. Today's Overview

Moltis showed **strong development velocity** on 2026-05-25 with 6 PRs updated (5 merged/closed, 1 open) and 5 issues active (2 open, 3 closed). The project released version `20260525.01` and made significant advances in **agent orchestration** (non-blocking sub-agents, per-turn tool controls), **security hardening**, and **developer experience** (Docker builds, version exposure). Two new bug reports surfaced, including a fresh sandbox escape issue for cron jobs. Overall project health appears **robust** with rapid feature iteration, though security and isolation edge cases warrant attention.

---

## 2. Releases

### [20260525.01](https://github.com/moltis-org/moltis/releases/tag/20260525.01)

Released 2026-05-25. No detailed release notes provided in data. Based on merged PRs, this release likely includes:
- Non-blocking `spawn_agent` with background task management
- Per-turn `tool_choice` + `active_tools` filtering for agent routing
- Sub-agent preset editing in Web UI
- Moltis version exposed to prompts
- Docker build fixes

**Breaking changes**: None explicitly flagged; the `spawn_agent` non-blocking mode is opt-in via `nonblocking: true`.

---

## 3. Project Progress

### Merged/Closed PRs (5)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1073](https://github.com/moltis-org/moltis/pull/1073) | sayotte | Fix Docker build failures (`include_dir!` macro panic) | **Critical infrastructure fix** — unblocks containerized deployments |
| [#1069](https://github.com/moltis-org/moltis/pull/1069) | penso | Per-turn `active_tools` and `tool_choice` controls with provider serialization (Anthropic, OpenAI Responses/Codex) | **Core agent capability** — enables drift-resistant routing for small/cheap LLMs |
| [#1070](https://github.com/moltis-org/moltis/pull/1070) | penso | Sub-agent presets editable in Settings > Agents with markdown round-trip | **UX improvement** — closes loop on preset management |
| [#1068](https://github.com/moltis-org/moltis/pull/1068) | IlyaBizyaev | Expose Moltis version to prompts | **Operational visibility** — aids update tracking in workflows |
| [#1067](https://github.com/moltis-org/moltis/pull/1067) | penso | Non-blocking `spawn_agent` with `spawn_status`, `spawn_result`, `spawn_list`, `cancel_spawn` tools | **Major architecture enhancement** — parent sessions stay responsive during long sub-agent runs |

### Open PR (1)

| PR | Author | Status | Note |
|:---|:---|:---|:---|
| [#1071](https://github.com/moltis-org/moltis/pull/1071) | penso | **Open** — security fixes for CodeQL alerts | Awaiting review; addresses DOM insertion, URL/path construction, cleartext secrets, secret logging |

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#868](https://github.com/moltis-org/moltis/issues/868) — Landlock debug logging | 1 comment, 1 👍, **32 days old** | Long-running observability request. Landlock is Moltis's sandboxing mechanism; users need visibility into *why* access is denied for security debugging. **Underlying need**: Operational transparency in security-critical environments |
| [#1022](https://github.com/moltis-org/moltis/issues/1022) — WebSocket disconnection during LLM modes update | Closed with 1 comment | Stability concern in real-time LLM feature updates. **Underlying need**: Reliable live configuration without session interruption |
| [#1011](https://github.com/moltis-org/moltis/issues/1011) — Per-turn tool_choice + active_tools | Closed (implemented by #1069) | User-driven feature for cheap LLM reliability. **Underlying need**: Cost optimization without sacrificing routing accuracy |

**Pattern**: Community is actively co-designing around **cost-efficient LLM usage** and **production operability** (observability, stability).

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| [#1072](https://github.com/moltis-org/moltis/issues/1072) — Cron jobs with "Execution Target: Host" run in sandbox | **HIGH** | **OPEN** (0 comments, reported today) | None yet | **Sandbox escape misconfiguration** — security boundary violation. Cron jobs explicitly configured for host execution are incorrectly sandboxed, potentially breaking expected host-level automation and creating confusion about actual isolation boundaries |
| [#1022](https://github.com/moltis-org/moltis/issues/1022) — WebSocket disconnected during LLM modes update | MEDIUM | **CLOSED** | Unknown | Transient connectivity issue during live LLM configuration updates |

**Concern**: #1072 is a **fresh, unassigned security-adjacent bug** with no comments. The incorrect sandboxing could indicate broader issues in execution target enforcement.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| Landlock access denial debug logging | [#868](https://github.com/moltis-org/moltis/issues/868) | **High** | 32 days old, security-relevant, small scoped; aligns with security hardening trend (#1071) |
| Complete CodeQL security fixes | [#1071](https://github.com/moltis-org/moltis/pull/1071) | **Very High** | Already in PR, covers DOM insertion, URL/path construction, cleartext secrets, secret logging |
| Cron execution target fix | [#1072](https://github.com/moltis-org/moltis/issues/1072) | **High** | Fresh bug, security-relevant, likely quick fix once triaged |

**Emerging themes**: Security hardening (Landlock, CodeQL, sandbox correctness), agent orchestration sophistication (non-blocking, tool controls), and operational visibility are converging toward a **production-readiness push**.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User | Scenario |
|:---|:---|:---|
| Docker builds failing | sayotte (contributor) | Containerized deployments blocked by `include_dir!` macro panic |
| WebSocket drops during updates | bsarkisov | Live LLM mode changes interrupt sessions |
| Cheap LLMs drift on tool routing | dmitriikeler | Cost-sensitive users hit reliability limits with Haiku-tier models |
| Sub-agent presets not editable | penso (implementing) | UI-created presets couldn't be modified after creation |
| Can't track Moltis version in workflows | IlyaBizyaev | Update-aware prompts needed for compatibility |

### Satisfaction Signals
- Rapid feature turnaround: #1011 and #1004 (both filed by dmitriikeler) were implemented within **7 days**
- Strong contributor response: 5 PRs merged same-day they were updated

### Dissatisfaction Signals
- 32-day-old issue #868 still open despite clear security value
- New bug #1072 suggests execution target enforcement may have systemic issues

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#868](https://github.com/moltis-org/moltis/issues/868) — Landlock debug logging | **32 days** | Medium | Maintainer triage; small scoped, security-relevant, community-supported (1 👍) |
| [#1072](https://github.com/moltis-org/moltis/issues/1072) — Cron sandbox misconfiguration | **1 day** | **High** | Immediate security team review; may affect other execution target enforcement |
| [#1071](https://github.com/moltis-org/moltis/pull/1071) — CodeQL security fixes | **1 day** | Low (in progress) | Code review and merge; comprehensive security patch |

**Recommendation**: Prioritize #1072 for security review and #868 for quick implementation to clear long-standing observability debt.

---

*Digest generated from GitHub activity 2026-05-25. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-26

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 42 issues and 44 PRs updated in the last 24 hours, indicating an active, rapidly evolving project. The v1.1.9-beta.1 release signals continued iteration toward stability after the v1.1.8.post1 release. Console UI polish and backend reliability dominate current efforts, with significant attention to memory management, session isolation, and cross-platform desktop experience. The community is actively engaged with detailed bug reports, particularly around reasoning chain display, tool call visibility, and MCP integration stability. The project appears healthy but faces growing complexity management challenges as features accumulate.

---

## 2. Releases

### v1.1.9-beta.1 (2026-05-25)
- **Version bump**: [`agentscope-ai/QwenPaw/pull/4589`](https://github.com/agentscope-ai/QwenPaw/pull/4589)
- **Console UX improvement**: Auto-reload page on plugin install/uninstall success — [`agentscope-ai/QwenPaw/pull/4588`](https://github.com/agentscope-ai/QwenPaw/pull/4588)
- **Testing**: Integration test expansion (details truncated in source)

*No breaking changes or migration notes indicated in release description.*

---

## 3. Project Progress

### Merged/Closed PRs (32 total updated, key highlights):

| PR | Description | Impact |
|:---|:---|:---|
| [#4671](https://github.com/agentscope-ai/QwenPaw/pull/4671) | Dark mode support for coding mode + bug fixes | UI polish |
| [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) | Fix Windows taskbar icon via Win32 API (`LoadImageW`/`SendMessageW`) | Desktop UX — resolves long-standing Windows branding issue |
| [#4668](https://github.com/agentscope-ai/QwenPaw/pull/4668) | Pydantic validation for `plugin.json` schema (`PluginManifest`) | Reliability — prevents cryptic `KeyError` on malformed plugins |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app support | Platform expansion — wraps Console in native webview |
| [#4665](https://github.com/agentscope-ai/QwenPaw/pull/4665) | Fix DingTalk DM webhook collision (sender_id prefix vs. conversation_id suffix) | Critical bugfix — prevents cross-conversation data leakage |
| [#4667](https://github.com/agentscope-ai/QwenPaw/pull/4667) | QQ channel interactive tool-guard approval cards | Feature parity with WeCom channel |
| [#4565](https://github.com/agentscope-ai/QwenPaw/pull/4565) | Unified access control (whitelist/blacklist/pending) with per-workspace store + Matrix refactor | Security & scalability |
| [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) | **Coding Mode** — VS Code-like in-browser IDE with Git integration | Major feature — specialized system prompt + real-time file management |
| [#4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) | Fix Markdown table `<br>` line breaks | UX — addresses repeated user complaints |
| [#4391](https://github.com/agentscope-ai/QwenPaw/pull/4391) | `uv tool install` quickstart documentation | Developer experience |

### Active Development (Open PRs):
- [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669): Tauri auto-updater building on #3813
- [#4674](https://github.com/agentscope-ai/QwenPaw/pull/4674): Tiered CI integration test gate (Sprints 1.1+1.2)
- [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622): **DataPaw** plugin — 12 BI skills for data analysis

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| Issue | Comments | Status | Core Concern |
|:---|:---|:---|:---|
| [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) Chat history disappeared | 12 | **CLOSED** | Data loss — critical trust issue |
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) Tool calls not displayed until refresh | 10 | **OPEN** | Real-time UI reliability |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) MCP TaskGroup hangs agent | 8 | CLOSED | Backend deadlock/stability |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) MCP GUI config not passed to ReMe | 6 | CLOSED | Configuration architecture confusion |

**Underlying needs analysis:**
- **Session/data integrity** (#4620, #4653): Users need reliable conversation persistence and isolation between automated tasks and interactive use
- **Real-time observability** (#4644, #4650): Tool execution and reasoning chains must be immediately visible without refresh — critical for debugging agent behavior
- **MCP architectural clarity** (#3640, #3445): The dual-MCP system creates confusion; users need transparent configuration flow

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **P0** | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) Chat history loss | CLOSED | Unknown | Intermittent session data disappearance — "existed for a long time" |
| **P0** | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) Tool calls invisible without refresh | **OPEN** | None yet | No error logs; race condition in WebSocket/streaming? |
| **P0** | [#4675](https://github.com/agentscope-ai/QwenPaw/issues/4675) `file` block breaks reasoning_content permanently | **OPEN** | None yet | `_fixup_media_list` passes unknown `file` type; OpenAI formatter skips it |
| **P1** | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) Cron/user session collision | **OPEN** | None yet | Design flaw: shared session interrupts scheduled tasks |
| **P1** | [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) GLM-5.1 reasoning chain missing | **OPEN** | None yet | OpenAI-compatible API parsing inconsistency |
| **P1** | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) Models config lost on new session | **OPEN** | None yet | State corruption requiring restart |
| **P2** | [#4663](https://github.com/agentscope-ai/QwenPaw/issues/4663) `/models` command broken in Telegram/Discord | CLOSED | None listed | Regression from v1.1.5 |
| **P2** | [#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587) Orphaned backend processes on shutdown | CLOSED | None listed | Desktop process management |

**Stability assessment**: Three P0-class issues remain open with no linked fix PRs. The reasoning chain and file block issues suggest fragility in the content block parsing pipeline.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in v1.2.x |
|:---|:---|:---|
| [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) Per-message timestamps in Console | High — simple UI addition, clear user value | **Very High** |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) Memory system: summary-association-reminder | Medium — requires architecture redesign | Medium |
| [#4656](https://github.com/agentscope-ai/QwenPaw/issues/4656) → [#4660](https://github.com/agentscope-ai/QwenPaw/pull/4660) OpenCode model list intersection | **PR exists** | **High (v1.1.9)** |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) Token usage per conversation | Under review | High |
| [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) macOS file path whitelist + sandbox | Under review | Medium |
| [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) File operation rollback | Under review; blocked? | Low-Medium |

**Emerging theme**: Observability and cost transparency (timestamps, token usage) are becoming first-class concerns as users deploy CoPaw in production-like settings.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):

| Category | Quote/Example | Frequency |
|:---|:---|:---|
| **Startup performance** | "Windows version opens slowly" (~40s), "no startup interface" | Recurring (#4043, #4158, #4664) |
| **Desktop polish** | "Taskbar icon shows Python icon" | Recurring (#3405, #3729, #4631) |
| **Memory/context bloat** | "Screenshots constantly compressed, consuming tokens" | #4102 |
| **MCP complexity** | "Two MCP systems internally" — configuration confusion | #3445 |
| **Agent reliability** | "Too easy to error out", "stepped on pitfall again" | #3390, #4652 |

### Satisfaction indicators:
- Detailed, reproducible bug reports with logs (#4644, #4653, #4675) indicate invested user base
- First-time contributors submitting fixes (#4673 shell newlines, #4622 DataPaw plugin)
- Active plugin ecosystem development

### Dissatisfaction indicators:
- Repeated issue filings for same problem (#4497 "3rd time", #4102 screenshot complaints)
- "Exists for a long time" on critical bugs (#4620)

---

## 8. Backlog Watch

### Issues/PRs needing maintainer attention (>30 days old, unresolved):

| Item | Age | Risk | Action needed |
|:---|:---|:---|:---|
| [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) File operation rollback | ~6 weeks | **Data loss recovery** — high user value, complex implementation | Decision: merge scope or defer |
| [#4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) 967 security+agents unit tests | ~9 days | CI gate upgrade blocked? | Review for L1 hard gate merge |
| [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) macOS sandbox file whitelist | ~12 days | Security hardening for macOS | Review for v1.2 scope |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) Token usage visibility | ~11 days | Cost transparency — production blocker | Review for merge |
| [#2584](https://github.com/agentscope-ai/QwenPaw/issues/2584) Code structure confusion | 8+ weeks | Architecture debt; contributor onboarding friction | Documentation or refactor plan |

**Maintainer priority recommendation**: The three open P0 bugs (#4644, #4675, #4653) should take precedence over feature work. The file rollback PR (#3346) has been open since April 13 with no resolution — either commit resources or close with explanation to manage contributor expectations.

---

*Digest generated from GitHub activity data for 2026-05-26. All links reference `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-26

## 1. Today's Overview

ZeroClaw shows **high-velocity development activity** with 50 PRs and 26 issues updated in the last 24 hours, indicating an active pre-release sprint. No new releases were cut today, suggesting the project is in a feature-integration phase rather than stabilization. The community is heavily focused on **security hardening** (tool permission enforcement, sandbox escapes), **provider ecosystem expansion** (OpenAI Codex OAuth, Gemini compatibility, Arcee AI), and **gateway/websocket reliability**. A significant portion of open items are marked `blocked` or `needs-maintainer-review`, indicating potential reviewer bandwidth constraints that could slow merge velocity.

---

## 2. Releases

**No new releases today.** The project remains without a recent tagged version; the last release activity predates this reporting window. The large open PR #6848 ("DO NOT MERGE") suggests a major beta-2 integration is in progress and may precede the next version bump.

---

## 3. Project Progress

### Merged/Closed PRs (16 total; 7 shown with substantive changes)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #6939 | singlerider | **Security fix**: Canvas sandbox hardening — dropped `allow-same-origin`, switched to `srcdoc`, sanitized SVG (GHSA-f385-f6h2-3gqj). *Closed in favor of private fork PR* | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6939) |
| #6940 | singlerider | NO-OP (Lark channel) | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6940) |
| #6941 | singlerider | NO-OP | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6941) |

### Open PRs with Notable Progress

| PR | Author | Status | Key Advancement | Link |
|:---|:---|:---|:---|:---|
| #6848 | singlerider | **OPEN — DO NOT MERGE** | Massive XL PR introducing `zerocode` TUI, RPC socket transport, DenyWithEdit approval flow, beta-2 integration across all channels/providers | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) |
| #6933 | Audacity88 | OPEN | Gateway WebSocket steering transcript preservation — resumes sessions with full conversation structure | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) |
| #6920 | alex-nax | OPEN | `allowed_tools`/`denied_tools` execution-time enforcement for MCP tools (defense-in-depth) | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6920) |
| #6924 | alex-nax | OPEN | Skill-scoped tool elevation for `builtin` and `composio` tool kinds | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) |
| #6938 | vrurg | OPEN | Preserves provider aliases through Codex OAuth flow | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6938) |
| #6928 | Audacity88 | OPEN | Onboarding validates provider catalog aliases against user-selected endpoints | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6928) |
| #6935 | Audacity88 | OPEN | Restores `RouterModelProvider::stream_chat_with_system` override lost in #6074 revert | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6935) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Underlying Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#4710 — Better LOGO](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | 10 | 2 | **Project identity/branding maturity** — community wants visual polish matching technical sophistication; blocked on author action |
| 2 | [#5722 — Shell sandbox blocks Python skills](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | 6 | 0 | **Realistic skill development workflow** — sandbox security vs. usability tension for FINOS-compliant financial tools |
| 3 | [#5122 — `web_fetch` private host bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | 3 | 0 | **Zero-trust networking correctness** — DNS resolution timing breaks allowlist intent |
| 4 | [#6302 — Gemini 400 history serializer](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | 3 | 0 | **Multi-provider compatibility** — Google's strict turn-order requirements clash with ZeroClaw's agent loop architecture |
| 5 | [#6074 — 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2 | 0 | **Institutional memory/recovery** — technical debt from March 2026 emergency rollback still being excavated |

**Community Signal**: Strong demand for **skill developer experience** (sandbox flexibility, tool permissions) and **enterprise-ready provider integrations** (Gemini, Z.AI, OpenAI Codex). The logo issue's high comment count despite low priority suggests community members seek accessible entry points into contribution.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk Summary |
|:---|:---|:---|:---|:---|
| **S1 — Broken** | [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) — zai-cn `glm-5-turbo` error 1214 after context trim | OPEN | ❌ No | Preemptive context trimming corrupts message validity for Z.AI API |
| **S2 — Degraded** | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) — `web_fetch` private host DNS bypass | OPEN | ❌ No | Security boundary failure: domain allowlist circumvented by IP resolution |
| **S2 — Degraded** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) — Gemini 400 on tool_call before user turn | OPEN | ❌ No | Provider compatibility: violates Gemini's conversation invariant |
| **S2 — Degraded** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Shell sandbox blocks Python skills | **CLOSED** | ✅ #5722 itself | Resolved: sandbox config adjusted for realistic patterns |
| **S2 — Degraded** | [#6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878) — Bubblewrap fails on Fedora 43 (missing `/lib64`) | **CLOSED** | ✅ Linked #5126 | Fedora 43 compatibility: library path regression |
| **S2 — Degraded** | [#6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) — Codex OAuth config falls back to API key | OPEN | ✅ [#6938](https://github.com/zeroclaw-labs/zeroclaw/pull/6938) | Alias preservation bug through OAuth flow |
| **S2 — Degraded** | [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) — Windows `setup.bat --minimal` 26MB vs 6MB | **CLOSED** | ✅ #6836 | Documentation/build drift on Windows |
| **S3 — Minor** | [#6889](https://github.com/zeroclaw-labs/zeroclaw/issues/6889) — reqwest error detail hidden | **CLOSED** | ✅ #6889 | Observability: root cause obscured in provider errors |

**Regression Watch**: The March 2026 bulk revert (#6074) continues to yield discovered losses — [#6935](https://github.com/zeroclaw-labs/zeroclaw/pull/6935) found `stream_chat_with_system` still missing after recovery audit. This suggests the 153-commit recovery is incomplete.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Computer-use / screen interaction** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Medium | RFC accepted; follows Codex/Peekaboo pattern; high complexity |
| **Unified "Everything is a plugin" architecture** | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Medium-High | Accepted; phased path; aligns with beta-2 integration PR |
| **Skill-scoped tool elevation** | [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915), [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) | **High** | PR open; security-critical; unblocks skill ecosystem |
| **Execution-time tool policy enforcement** | [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920) | **High** | PR open; defense-in-depth; existing field currently unenforced |
| **Process memory limits for shell/skill tools** | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | Medium | Blocked; needs maintainer review; production OOM observed |
| **Composio action-scope filtering** | [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | Medium | Blocked; security feature; dependent on #6924 elevation |
| **Arcee AI provider** | [#6456](https://github.com/zeroclaw-labs/zeroclaw/issues/6456) | Medium | In-progress; specialist model niche; expands provider diversity |
| **Gateway WebSocket transcript persistence** | [#6932](https://github.com/zeroclaw-labs/zeroclaw/issues/6932), [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) | **High** | PR open; completes #6661 steering work |
| **Nix flake improvements** | [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) | Low-Medium | Blocked; packaging quality-of-life; not release-critical |

**Next Version Prediction (v0.7.6 or beta-2)**: Tool permission enforcement (#6920, #6924) and gateway transcript persistence (#6933) are nearly certain. The "DO NOT MERGE" #6848 suggests a major integration milestone is pending — likely beta-2 with `zerocode` TUI.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Sandbox too restrictive for real skills** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (InvestorClaw/FINOS), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) (OOM in production) | High — blocks adoption for serious skill development |
| **Provider auth/config drift** | [#6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923) (Codex OAuth alias loss), [#6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908) (onboarding auth routing) | High — breaks enterprise SSO flows |
| **Multi-provider compatibility gaps** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) (Gemini), [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) (Z.AI), [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) (network security) | Medium-High — limits deployment flexibility |
| **Windows build/documentation quality** | [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836), [#6102](https://github.com/zeroclaw-labs/zeroclaw/pull/6102) | Medium — platform parity gap |

### Positive Signals

- **Strong skill ecosystem interest**: [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) tracker active; FINOS-adjacent financial use case (#5722)
- **Security-conscious community**: Multiple sandbox hardening PRs; proactive CVE handling (#6939)
- **Channel breadth**: WhatsApp, Signal, Telegram, WeCom, Lark, Slack, Discord all maintained

### Satisfaction/Dissatisfaction

| Satisfied | Dissatisfied |
|:---|:---|
| Rich provider ecosystem | Provider-specific bugs (Gemini, Z.AI) |
| Active security maintenance | Sandbox usability vs. security tradeoffs |
| Responsive issue triage | Long review queues (`needs-maintainer-review` bottleneck) |

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Age | Item | Blocker | Risk if Neglected |
|:---|:---|:---|:---|
| **62 days** | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) Logo redesign | `needs-author-action` | Community morale; contributor onboarding friction |
| **58 days** | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) `web_fetch` private host bypass | None — `accepted` | **Security vulnerability**: SSRF bypass in internal networks |
| **23 days** | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153-commit recovery audit | None — `in-progress` | Continued regressions from lost commits (#6935 found another) |
| **23 days** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) Gemini 400 | None — `in-progress` | Provider support gap for Google Cloud users |
| **20 days** | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) "Everything is a plugin" | None — `accepted` | Architecture debt accumulation; integration complexity |
| **1 day** | [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916), [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | `needs-maintainer-review` | **Security features blocked**: tool enforcement, memory limits, Composio scoping |

**Reviewer Bandwidth Alert**: 4 of today's highest-priority security enhancements (all `priority:p1`/`p2`, `risk:high`) from alex-nax are simultaneously blocked on maintainer review. This creates a **security merge queue bottleneck** that could delay v0.7.6.

### Recommended Triage Actions

1. **Expedite review** of alex-nax's security PRs (#6920, #6924 and linked issues #6914-#6917)
2. **Assign owner** to #5122 security bug — DNS resolution timing is a known SSRF pattern
3. **Complete #6074 audit** — the piecemeal recovery is yielding production regressions
4. **Close or refresh** #4710 — 62 days blocked on author; community energy dissipating

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*