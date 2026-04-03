# OpenClaw Ecosystem Digest 2026-03-30

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-30 00:57 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-30

---

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial community engagement. The 388:112 open-to-closed issue ratio and 331:169 open-to-merged PR ratio suggest ongoing feature expansion outpacing resolution, typical of a growth-phase platform. A new release (v2026.3.28) shipped with breaking authentication changes for Qwen users. Key focus areas include Windows platform parity, memory/QMD system hardening, and multi-channel reliability fixes. The project demonstrates strong maintainer velocity with multiple XL-sized PRs landing for core infrastructure improvements.

---

## 2. Releases

### [v2026.3.28](https://github.com/openclaw/openclaw/releases/tag/v2026.3.28) — 2026.3.28

| Category | Details |
|----------|---------|
| **Breaking Changes** | **Qwen OAuth Migration**: Removed deprecated `qwen-portal-auth` OAuth integration for `portal.qwen.ai`. Users must migrate to Model Studio via `openclaw onboard --auth-choice modelstudio-api-key`. [PR #52709](https://github.com/openclaw/openclaw/pull/52709) — thanks @pomelo-nwu |
| | **Config/Doctor**: Dropped automatic config migrations older than two months; users on ancient configs must manually migrate or reinstall |

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected High-Impact)

| PR | Description | Impact |
|----|-------------|--------|
| [#57351](https://github.com/openclaw/openclaw/pull/57351) | QMD `--glob` flag compatibility fix | Resolves [Issue #55123](https://github.com/openclaw/openclaw/issues/55123) — collection creation failures |
| [#57354](https://github.com/openclaw/openclaw/pull/57354) | QMD sync parity hooks (`watch` + `onSessionStart`) | Fixes [Issue #47482](https://github.com/openclaw/openclaw/issues/47482) — memory indexing now triggers properly |
| [#57342](https://github.com/openclaw/openclaw/pull/57342) | Remove xAI auth trace logging | Cleanup of provider-specific noise in core |
| [#57338](https://github.com/openclaw/openclaw/pull/57338) | Control UI: clear queued connect timeout on stop | Prevents ghost connection states |
| [#57166](https://github.com/openclaw/openclaw/pull/57166) | `/v1/responses` tool schema flat format fix | Responses API compliance |
| [#45443](https://github.com/openclaw/openclaw/pull/45443) | Telegram `/fast` menu callback routing | Native command parity |
| [#41549](https://github.com/openclaw/openclaw/pull/41549) | Exec login shell PATH resolution for sandbox-off | Phantom sandbox fix |

### Major In-Flight Features

| PR | Size | Description |
|----|------|-------------|
| [#57332](https://github.com/openclaw/openclaw/pull/57332) | **XL** | Windows support MVP: docs, diagnostics, tray companion — addresses [Issue #75](https://github.com/openclaw/openclaw/issues/75) |
| [#57361](https://github.com/openclaw/openclaw/pull/57361) | **XL** | Task ledger SQLite migration + audit CLI — infrastructure for multi-tenant task management |
| [#55513](https://github.com/openclaw/openclaw/pull/55513) | **L** | Claim Check pattern for large attachments — prevents OOM via `media://inbound/<id>` contract |
| [#57368](https://github.com/openclaw/openclaw/pull/57368) | **L** | Web UI sidebar chat sessions — discoverability fix for multi-session management |
| [#52951](https://github.com/openclaw/openclaw/pull/52951) | **XL** | `tools.fs.roots` — per-agent filesystem roots with access modes — security-critical for multi-tenant |
| [#43501](https://github.com/openclaw/openclaw/pull/43501) | **XL** | OpenAI Realtime API voice mode — ~200-400ms latency vs. 2-3s pipeline |

---

## 4. Community Hot Topics

### Top Issues by Engagement

| Rank | Issue | Comments | 👍 | Core Need |
|------|-------|----------|-----|-----------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 60 | 66 | **Platform parity** — macOS/iOS/Android have native apps; Linux/Windows users excluded from full feature set |
| 2 | [#44851](https://github.com/openclaw/openclaw/issues/44851) Kimi web_search 401 auth error | 32 | 3 | **Provider reliability** — tool-specific auth broken while chat API works; inconsistent OAuth scope handling |
| 3 | [#14593](https://github.com/openclaw/openclaw/issues/14593) Skill install fails in Docker: `brew not installed` | 18 | 14 | **Container ergonomics** — Docker image lacks Homebrew, breaking skill installation |
| 4 | [#26322](https://github.com/openclaw/openclaw/issues/26322) OAuth token refresh race condition | 15 | 12 | **Multi-agent auth safety** — concurrent refresh causes `refresh_token_reused` failures |
| 5 | [#53353](https://github.com/openclaw/openclaw/issues/53353) Matrix E2EE broken: missing WASM file | 14 | 3 | **Security regression** — encryption completely non-functional since v2026.3.23 |

### Underlying Needs Analysis

- **Cross-platform ubiquity** dominates (#75) — the 66 👍 signals strong enterprise/self-host demand
- **Auth system fragility** is systemic: OAuth races (#26322), provider-specific breakages (#44851, #49191), token scope gaps (#50474, #52625)
- **Memory/QMD reliability** is emerging as a theme — multiple indexing, sync, and tool-naming issues

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **Critical** | [#53353](https://github.com/openclaw/openclaw/issues/53353) | Matrix E2EE completely broken (missing WASM) — messages silently dropped | None identified |
| 🔴 **Critical** | [#53955](https://github.com/openclaw/openclaw/issues/53955) | QMD 0/10 files indexed after 2026.3.23-2 — memory_search returns empty | [#57351](https://github.com/openclaw/openclaw/pull/57351), [#57354](https://github.com/openclaw/openclaw/pull/57354) |
| 🟡 **High** | [#53959](https://github.com/openclaw/openclaw/issues/53959) | openai-codex/gpt-5.3-codex no tool execution after 2026.3.23-2 | None identified |
| 🟡 **High** | [#26322](https://github.com/openclaw/openclaw/issues/26322) | OAuth token refresh race condition — spurious failovers | None identified |
| 🟡 **High** | [#51012](https://github.com/openclaw/openclaw/issues/51012) | WhatsApp relink → 401 session drop | None identified |
| 🟡 **High** | [#52875](https://github.com/openclaw/openclaw/issues/52875) | Session_send "no session found" regression | None identified |
| 🟢 **Medium** | [#52585](https://github.com/openclaw/openclaw/issues/52585) | SafeOpenError on plugin install (regression from 2026.2.23) | None identified |
| 🟢 **Medium** | [#48873](https://github.com/openclaw/openclaw/issues/48873) | Cannot call second skill in one session | None identified |

### Regressions Cluster
- **v2026.3.23-2** introduced multiple regressions: QMD indexing (#53955), openai-codex tool execution (#53959), Matrix E2EE (#53353)
- **v2026.3.13** plugin install failures (#52585)

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows native apps | **High** — [#57332](https://github.com/openclaw/openclaw/pull/57332) (Windows MVP) is XL-sized and active |
| [#12176](https://github.com/openclaw/openclaw/issues/12176) | Anthropic `speed: "fast"` parameter | Medium | Clean passthrough feature; depends on provider SDK update |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | Medium | Token optimization; architectural change |
| [#56130](https://github.com/openclaw/openclaw/pull/56130) | visionOS node app | **High** — PR is XL and merged; Apple Vision Pro spatial peripheral |
| [#43501](https://github.com/openclaw/openclaw/pull/43501) | OpenAI Realtime voice mode | **High** — Active XL PR, addresses core latency pain point |

### Predicted v2026.4.x Themes
1. **Windows GA** — tray companion, native installer, parity docs
2. **Voice/Realtime** — OpenAI Realtime API integration
3. **Spatial/AR** — visionOS peripheral for ambient agent presence
4. **Memory system hardening** — QMD stability, sync reliability, FTS-only mode

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Feedback | Frequency |
|----------|----------|-----------|
| **Platform exclusion** | "Linux and Windows are missing" [#75](https://github.com/openclaw/openclaw/issues/75) | Dominant |
| **Auth fragility** | "Token refresh failed: 401", "missing scope: operator.read" | High |
| **Silent failures** | "messages not processing", "memory_search always returns empty" | High |
| **Container gaps** | "brew not installed" in Docker — skill install broken | Moderate |
| **Provider quirks** | Kimi "漏传 path 参数", Gemini reasoning leaks | Moderate |

### Satisfaction Signals
- Strong engagement (60 comments on #75) indicates invested user base, not abandonment
- Active maintainer response on critical regressions (QMD fixes landed same day as reports)
- XL-sized platform expansion PRs suggest resource commitment

### Dissatisfaction Signals
- Multiple "regression" labels on recent issues — quality perception risk
- "Stale" bot activity on legitimate bugs (#12590, #22438) — frustration with triage velocity

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Issue | Age | Problem | Risk |
|-------|-----|---------|------|
| [#11202](https://github.com/openclaw/openclaw/issues/11202) | ~52 days | **Security**: API keys injected into LLM prompts via resolved model catalog | Credential exposure; compliance risk |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | ~50 days | `memoryFlush` fires every other cycle — dedup logic bug | Data loss, inconsistent state |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | ~38 days | Tiered bootstrap loading — token waste for large workspaces | Cost/performance at scale |
| [#28708](https://github.com/openclaw/openclaw/issues/28708) | ~32 days | ACP runs fail via OpenClaw, succeed via direct `acpx` CLI | ACP integration reliability |

### PRs Needing Maintainer Attention

| PR | Status | Blocker |
|----|--------|---------|
| [#52951](https://github.com/openclaw/openclaw/pull/52951) | Open, XL | `tools.fs.roots` — security-critical for multi-tenant; needs review bandwidth |
| [#43501](https://github.com/openclaw/openclaw/pull/43501) | Open, XL | Realtime voice — large surface area, needs audio/infra expertise |
| [#55513](https://github.com/openclaw/openclaw/pull/55513) | Open, L | Claim Check pattern — architectural decision needs sign-off |

---

*Digest generated from GitHub data as of 2026-03-30. All links reference github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-30

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **intense, fragmented innovation** with over 1,000 combined PR updates across 10+ projects in 24 hours. Three distinct tiers have emerged: **mature platforms** (OpenClaw, NanoBot, IronClaw) with institutional-grade complexity; **rapidly iterating mid-tier projects** (PicoClaw, CoPaw, NanoClaw) balancing feature velocity with stability debt; and **maintenance-mode or nascent tools** (NullClaw, EasyClaw, TinyClaw). The landscape is defined by **converging technical requirements**—memory systems, multi-agent orchestration, and security hardening—yet **divergent architectural philosophies**, from OpenClaw's monolithic extensibility to IronClaw's financial-security-first kernel design and NanoClaw's container-native isolation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|:---|:---:|:---:|:---:|:---|:---:|
| **OpenClaw** | 500 | 500 | 169 merged | v2026.3.28 shipped | ⭐⭐⭐⭐⭐ |
| **NanoBot** | 19 | 97 | 5 merged | None | ⭐⭐⭐⭐☆ |
| **PicoClaw** | 22 | 51 | 17 merged | v0.2.4-nightly | ⭐⭐⭐⭐☆ |
| **NanoClaw** | 17 | 50 | 1 merged | None | ⭐⭐⭐☆☆ |
| **IronClaw** | 8 | 50 | 7 merged | None | ⭐⭐⭐⭐☆ |
| **CoPaw** | 37 | 34 | 16 merged | v0.2.0.post1 | ⭐⭐⭐⭐☆ |
| **ZeptoClaw** | 2 | 6 | 1 merged | None | ⭐⭐⭐☆☆ |
| **Moltis** | 6 | 3 | 1 merged | None | ⭐⭐⭐⭐☆ |
| **LobsterAI** | 4 | 7 | 0 merged | None | ⭐⭐⭐☆☆ |
| **NullClaw** | 2 | 2 | 0 merged | None | ⭐⭐☆☆☆ |
| **EasyClaw** | 1 | 0 | 0 merged | v1.7.8 | ⭐⭐☆☆☆ |
| **TinyClaw** | 0 | 0 | 0 | None | ⭐☆☆☆☆ |

*Health Score: weighted by velocity, merge ratio, release cadence, critical bug response, and community engagement*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 PRs/24h, 388:112 issue ratio | 5-10x larger than nearest active competitor (NanoBot: 97 PRs) |
| **Platform breadth** | Native apps: macOS, iOS, Android; Windows MVP in flight (#57332) | PicoClaw/CoPaw web-first; NanoBot Telegram-centric; IronClaw headless/server |
| **Release discipline** | Daily patch releases, documented breaking changes | Most peers: accumulation mode or nightly-only |
| **Memory system maturity** | QMD (Queryable Memory Documents) with FTS, sync hooks, glob indexing | NanoBot building equivalent (#2618-2620); others file-based or absent |
| **Voice/Realtime** | OpenAI Realtime API integration ~200-400ms latency (#43501) | Unique; competitors at 2-3s pipeline latency |

### Technical Approach Differences

| Aspect | OpenClaw | Alternative Approaches |
|:---|:---|:---|
| **Architecture** | Monolithic core with compile-time WASM sandboxing, runtime MCP | IronClaw: proposed OS-like kernel/extension model; NanoClaw: container-per-agent isolation |
| **Auth model** | OAuth-first with provider-specific integrations (breaking changes: Qwen migration) | Moltis: vault-sealed session history; NanoClaw: token cost tracking infrastructure |
| **Multi-agent** | Task ledger + SQLite migration for multi-tenant (#57361) | PicoClaw: Phase 2 multi-agent discovery/delegation; CoPaw: ACP protocol for external agents |
| **Security posture** | Per-agent filesystem roots (#52951), sandbox-off PATH fixes | IronClaw: financial execution layer with human-in-the-loop; NanoClaw: Landlock sandboxing (#463) |

### Community Size

OpenClaw's **66 👍 on Linux/Windows parity (#75)** exceeds total engagement on most peer projects' top issues. Its 60-comment threads indicate **institutional user investment** (enterprise self-hosting demand) versus NanoBot's security-anxiety-driven engagement or PicoClaw's research-oriented memory discussions.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Memory/Context Systems** | OpenClaw, NanoBot, PicoClaw, NanoClaw, CoPaw | OpenClaw: QMD sync parity, FTS-only mode; NanoBot: hybrid BM25+vector (#2618), async consolidation (#2609); PicoClaw: "Seahorse" biologically-inspired memory (#1919); NanoClaw: MemStack persistent memory (#1495), Headroom/RTK compression (#1493-1494) |
| **Multi-Agent Orchestration** | PicoClaw, CoPaw, IronClaw, OpenClaw | PicoClaw: Phase 2 discovery/delegation (#2148); CoPaw: ACP external agent protocol (#1544); IronClaw: secure financial execution with policy enforcement (#1712); OpenClaw: task ledger + audit CLI |
| **Security Hardening** | IronClaw, Moltis, NanoClaw, OpenClaw | IronClaw: async transaction approvals (#1739), WalletConnect; Moltis: vault sealing UX (#518); NanoClaw: container isolation, conversational approval (#1537); OpenClaw: per-agent filesystem roots |
| **Provider Diversity & Routing** | ZeptoClaw, CoPaw, Moltis, IronClaw, OpenClaw | ZeptoClaw: OpenRouter vendor-prefix routing (#468); CoPaw: MiniMax, GLM compatibility; Moltis: Z.AI Coding Plan (#517); IronClaw: Bedrock tool block stripping; OpenClaw: 10+ provider OAuth integrations |
| **Cost/Token Optimization** | NanoBot, NanoClaw, IronClaw, CoPaw | NanoBot: 560k token/heartbeat crisis (#2375); NanoClaw: token cost tracking (#1528); IronClaw: anti-drift self-checks (#1662); CoPaw: AI compression with domain awareness (#2482) |
| **Windows Platform Parity** | OpenClaw, PicoClaw, CoPaw, NanoBot | OpenClaw: XL Windows MVP (#57332); PicoClaw: config persistence fixes; CoPaw: installer PATH fixes (#2489); NanoBot: Docker build hangs (#87, 8 weeks stale) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Cross-platform ubiquity + voice realtime | Power users, enterprises needing full-stack deployment | Monolithic, channel-native apps, compile-time WASM |
| **NanoBot** | Telegram-first personal assistant + research memory | Individual power users, Chinese market | Python, hybrid search, async consolidation |
| **PicoClaw** | Multi-agent collaboration + "serious" agent framework | Agent developers, research users | Web-first, Phase 2 delegation, biologically-inspired memory |
| **IronClaw** | Financial security + crypto/DeFi agent infrastructure | Blockchain developers, institutional custody | Rust, NEAR ecosystem, human-in-the-loop signing |
| **NanoClaw** | Container-native isolation + vendor-agnostic tooling | Developers, healthcare/enterprise (privacy-critical) | Docker-per-agent, dashboard observability |
| **CoPaw** | Enterprise China integration (DingTalk, Feishu) + ACP protocol | Chinese enterprise teams | Python, extensive channel testing, skills-hub |
| **Moltis** | Vault-sealed security + session portability | Security-conscious professionals, air-gapped ops | Rust, SQLite-backed, SSH runtime |
| **ZeptoClaw** | Composability + browser automation | Technical builders, custom tool authors | Rust, runtime registry, Landlock sandboxing |
| **LobsterAI** | Cowork chat UX + executable artifacts | NetEase ecosystem, visual thinkers | Claude SDK (transitioning?), HTML/React/Mermaid rendering |
| **NullClaw** | Minimal maintenance fork | Users wanting stability over features | OpenClaw-compatible, reduced scope |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity Risk)

| Project | Pattern | Risk |
|:---|:---|:---|
| **NanoBot** | 97 PRs, 5% merge ratio, critical security unaddressed (#2439) | Security incident + contributor fatigue |
| **NanoClaw** | 50 PRs, 2% merge ratio, 49 open PRs | Review bottleneck, container instability |
| **IronClaw** | 50 PRs, 14% merge ratio, 11 staging promotions queued | Release process friction, architectural fragmentation |

### Tier 2: Balanced Growth

| Project | Pattern | Trajectory |
|:---|:---|:---|
| **OpenClaw** | High volume, healthy merge ratio (34%), daily releases | Maturing toward platform stability |
| **PicoClaw** | Pre-release stabilization, rapid critical fixes | v0.2.4 → v0.3.0 multi-agent headline |
| **CoPaw** | Strong close rate (47% issues, 47% PRs), enterprise focus | Production hardening for Chinese market |

### Tier 3: Maintenance / Stagnation

| Project | Pattern | Concern |
|:---|:---|:---|
| **LobsterAI** | 0 PRs merged, engine architecture uncertainty (#418) | Strategic direction uncommunicated |
| **NullClaw** | 2 PRs, individual contributor, WeChat demand unaddressed | Competitive divergence from forks |
| **EasyClaw** | Documentation-only release, zero community engagement | Deprioritized vs. commercial QClaw |
| **TinyClaw** | No activity | Effectively dormant |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Memory as competitive battleground** | 6+ projects investing in semantic search, compression, persistence | Standardize on QMD-like document models; expect hybrid BM25+vector as baseline |
| **Human-in-the-loop for high-stakes actions** | IronClaw #1739, NanoClaw #1537, Moltis vault patterns | Design approval flows early; "autonomous" is becoming a liability term |
| **Container-native agent isolation** | NanoClaw's Docker-per-agent, IronClaw's WASM sandbox | Security boundary clarity: process vs. VM vs. container tradeoffs |
| **Multi-agent interoperability protocols** | CoPaw ACP, PicoClaw delegation, IronClaw kernel proposal | Avoid vendor lock-in; MCP + ACP emerging as standards |
| **Cost visibility as core feature** | NanoBot token crisis, NanoClaw tracking PR, IronClaw anti-drift | Build metering infrastructure; users will demand accountability |
| **Eastern provider prioritization** | Qwen, MiniMax, Z.AI, DashScope, Kimi integrations across projects | China-market compatibility is table stakes; OAuth scope handling is fragile |
| **Realtime voice latency race** | OpenClaw 200-400ms vs. 2-3s pipeline | Sub-second voice is becoming differentiable; WebRTC/OpenAI Realtime API skills valuable |
| **Platform parity as adoption blocker** | OpenClaw #75 (66 👍), NanoBot #87 (8 weeks), CoPaw Windows fixes | macOS-first development excludes majority of enterprise/self-host users |

---

*Report generated from 12 project digests dated 2026-03-30. Data sources: GitHub issue/PR activity, release notes, community comments.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-30

## 1. Today's Overview

NanoBot shows **extremely high development velocity** with 97 PRs updated in 24 hours (92 open, 5 merged/closed) and 19 active issues. The project is experiencing a **community surge** around Telegram integrations, memory system improvements, and multi-tenant deployment scenarios. However, **critical security concerns** and **architectural debt** around token management and prompt handling are emerging as significant risks. No new releases were published, suggesting the team is accumulating changes for a larger version bump.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#2626](https://github.com/HKUDS/nanobot/pull/2626) | Telegram forum topics support (closed as duplicate) | Community demand for threaded conversations |
| [#2624](https://github.com/HKUDS/nanobot/pull/2624) | Telegram forum threads with unit tests (closed) | Iteration toward proper implementation |
| [#2622](https://github.com/HKUDS/nanobot/pull/2622) | Configurable markdown header conversion for Telegram | UX polish for Telegram channel |
| [#2612](https://github.com/HKUDS/nanobot/issues/2612) | Config validation: `sendMaxRetries` limit explanation | Documentation/clarity improvement |
| [#2563](https://github.com/HKUDS/nanobot/issues/2563) | Nightly branch refresh announcement | Infrastructure maintenance |

### Active Development Themes

**Memory System Overhaul**: Three stacked PRs by [Mihir-Null](https://github.com/Mihir-Null) represent a major architectural investment:
- [#2618](https://github.com/HKUDS/nanobot/pull/2618): Semantic memory index with hybrid BM25+vector search
- [#2619](https://github.com/HKUDS/nanobot/pull/2619): `IndexService` with file watching and pre-retrieval injection
- [#2620](https://github.com/HKUDS/nanobot/pull/2620): Optional QMD sidecar for LLM-based re-ranking

**Telegram Channel Maturation**: Heavy activity on production-readiness features:
- Forum topic support ([#2628](https://github.com/HKUDS/nanobot/pull/2628), [#2627](https://github.com/HKUDS/nanobot/issues/2627))
- Silent tool hints ([#2608](https://github.com/HKUDS/nanobot/pull/2608))
- Proper flood control handling ([#2552](https://github.com/HKUDS/nanobot/pull/2552))
- Command suffix support for groups ([#2553](https://github.com/HKUDS/nanobot/pull/2553))

**Performance & Reliability**: Critical path optimization in [#2609](https://github.com/HKUDS/nanobot/pull/2609) eliminates blocking LLM calls during memory consolidation.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Core Concern |
|:---|:---:|:---:|:---|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) Heartbeat session history causes ENORMOUS token usage | 10 | 1 | **Cost/performance crisis**: 560k tokens per heartbeat due to unbounded `heartbeat.jsonl` growth |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) Architectural issue: nanobot does not preserve exact prompt prefix | 8 | 0 | **Correctness/reproducibility**: History serialization ≠ actual prompts sent, breaking OpenAI's deterministic guarantees |
| [#2439](https://github.com/HKUDS/nanobot/issues/2439) **CRITICAL: Malicious code in `litellm_init.pth`** | 6 | 4 | **Security**: Supply chain attack in PyPI package `v0.1.4.post5` |

### Underlying Needs Analysis

- **Token Economics**: Users deploying NanoBot in production are hitting cost-prohibitive scaling limits. The heartbeat mechanism's linear growth model is unsustainable.
- **Deterministic AI**: Advanced users need exact prompt reproducibility for debugging, testing, and compliance—currently impossible.
- **Supply Chain Trust**: The security incident reveals gaps in dependency auditing and release verification.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) Malicious data-exfiltration code in `litellm_init.pth` | Open, under investigation | ❌ No |
| 🟠 **High** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) 560k token heartbeat consumption | Open | ❌ No |
| 🟠 **High** | [#2613](https://github.com/HKUDS/nanobot/issues/2613) Agent stops mid-command with `NoneType` error | Open, no comments | ❌ No |
| 🟡 **Medium** | [#2601](https://github.com/HKUDS/nanobot/issues/2601) Cron reminders not delivered in agent mode | Open | ❌ No |
| 🟡 **Medium** | [#2591](https://github.com/HKUDS/nanobot/issues/2591) CLI terminal error repetition (ANSI escape sequences) | Open | ❌ No |
| 🟡 **Medium** | [#2630](https://github.com/HKUDS/nanobot/issues/2630) `Lemonade/model_not_found` — agent unresponsive after 0.1.4-post6 | Open | ❌ No |
| 🟢 **Low** | [#87](https://github.com/HKUDS/nanobot/issues/87) Docker build hangs on Windows | Open (since Feb 4) | ❌ No |

**Regression Alert**: [#2630](https://github.com/HKUDS/nanobot/issues/2630) suggests `v0.1.4.post6` introduced breaking changes affecting model routing, with users downgrading to `post5`.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---:|
| **HTTP Streaming Channel for multi-tenant architectures** | [#2602](https://github.com/HKUDS/nanobot/issues/2602) | ⭐⭐⭐ High — aligns with containerized deployment trends |
| **Ollama provider support** | [#2617](https://github.com/HKUDS/nanobot/pull/2617) | ⭐⭐⭐ High — PR open, addresses 3+ user requests |
| **DashScope Coding Plan provider** | [#2629](https://github.com/HKUDS/nanobot/pull/2629) | ⭐⭐⭐ High — PR ready |
| **Xiaozhi voice gateway + ESP32 MCP tools** | [#2584](https://github.com/HKUDS/nanobot/pull/2584) | ⭐⭐ Medium — specialized IoT use case |
| **SelfTool for runtime self-inspection** | [#2521](https://github.com/HKUDS/nanobot/pull/2521) | ⭐⭐ Medium — experimental, needs review |
| **Home Assistant knowledge/tool integration** | [#2588](https://github.com/HKUDS/nanobot/issues/2588) | ⭐⭐ Medium — user demand clear, implementation unclear |
| **Asynchronous memory consolidation** | [#2604](https://github.com/HKUDS/nanobot/issues/2604) | ⭐⭐⭐ High — PR [#2609](https://github.com/HKUDS/nanobot/pull/2609) addresses this |

**Predicted v0.1.5 Focus**: Memory system (3 stacked PRs), Telegram production hardening, Ollama/DashScope providers, and HTTP gateway for multi-tenant ops.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Uncontrolled costs** | [#2375](https://github.com/HKUDS/nanobot/issues/2375) 560k tokens/heartbeat | 🔴 Critical |
| **Security anxiety** | [#2439](https://github.com/HKUDS/nanobot/issues/2439) malicious code discovery | 🔴 Critical |
| **Debugging opacity** | [#2463](https://github.com/HKUDS/nanobot/issues/2463) non-reproducible prompts | 🟠 High |
| **Tool use reliability** | [#2588](https://github.com/HKUDS/nanobot/issues/2588) Home Assistant tools fail; [#2613](https://github.com/HKUDS/nanobot/issues/2613) mid-command crashes | 🟠 High |
| **Version instability** | [#2630](https://github.com/HKUDS/nanobot/issues/2630) post6 regression | 🟠 High |

### Positive Signals

- **Telegram as primary interface**: Heavy investment in forum topics, silent notifications, flood control suggests users are deploying NanoBot as personal/team assistants
- **Multi-tenant ambition**: [#2602](https://github.com/HKUDS/nanobot/issues/2602) indicates commercial/service-oriented deployments
- **Local model preference**: Ollama PR and Qwen model usage show demand for self-hosted, cost-controlled inference

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk |
|:---|:---|:---|
| [#87](https://github.com/HKUDS/nanobot/issues/87) Docker Windows build hangs | ~8 weeks | Platform support gap; blocks Windows developers |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) Prompt prefix preservation | 5 days | Architectural debt; affects determinism guarantees |
| [#2439](https://github.com/HKUDS/nanobot/issues/2439) Security incident | 6 days | **Unacknowledged in public** — no maintainer response visible |
| [#2576](https://github.com/HKUDS/nanobot/issues/2576) Agent loop termination logic | 2 days | Production reliability; Chinese-language report may need translation |

### PRs At Risk of Stagnation

- [#2521](https://github.com/HKUDS/nanobot/pull/2521) SelfTool — innovative but complex, needs architectural review
- [#2584](https://github.com/HKUDS/nanobot/pull/2584) Xiaozhi support — large surface area (WebSocket, Opus, OTA, MCP)

---

## Project Health Assessment

| Dimension | Score | Notes |
|:---|:---:|:---|
| Velocity | ⭐⭐⭐⭐⭐ | 97 PRs/24h is exceptional |
| Security | ⭐⭐☆☆☆ | Critical unaddressed supply chain issue |
| Stability | ⭐⭐⭐☆☆ | Active regression in latest release |
| Community | ⭐⭐⭐⭐⭐ | High engagement, diverse use cases |
| Maintainability | ⭐⭐⭐☆☆ | Architectural debt accumulating; long-open issues |

**Recommendation**: Immediate security response and hotfix release for [#2439](https://github.com/HKUDS/nanobot/issues/2439) and [#2630](https://github.com/HKUDS/nanobot/issues/2630) before proceeding with feature development.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-30

---

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 51 PRs and 22 issues updated in 24 hours, indicating an active pre-release stabilization period for v0.2.4. The project is addressing critical configuration persistence bugs affecting multiple channels (Discord, Telegram, QQ) while simultaneously advancing major architectural work on multi-agent collaboration. A nightly build was released, suggesting the team is iterating rapidly toward a stable release. The community is particularly engaged around memory systems and agent coordination features, signaling strong interest in PicoClaw's positioning as a serious AI agent framework.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.4-nightly.20260330.93f4c4a8](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)** | Nightly | Automated build, marked unstable. No detailed changelog beyond commit range. |

**⚠️ Caution Advised:** This is an automated nightly build. Users on v0.2.3 should await stable v0.2.4 given the configuration bug fixes in flight.

---

## 3. Project Progress

### Merged/Closed PRs Today (17 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#2123](https://github.com/sipeed/picoclaw/pull/2123) | Fix token/secret loss when saving channel config | **Critical fix** for v0.2.4 regression affecting all channel secrets |
| [#2024](https://github.com/sipeed/picoclaw/pull/2024) | Persist Discord token updates from channel settings | Fixes Discord configuration breakage |
| [#2147](https://github.com/sipeed/picoclaw/pull/2147) | Remove `deliver`/`type` params from cron, unify agent execution path | Simplifies cron architecture, removes technical debt |
| [#2166](https://github.com/sipeed/picoclaw/pull/2166) | Fix Web Launcher skills page dark mode contrast | UI polish |
| [#2162](https://github.com/sipeed/picoclaw/pull/2162) | Add logger test case for console log format | Test coverage |
| [#2154](https://github.com/sipeed/picoclaw/pull/2154) | Enhanced logger with highlighted components | Developer experience |
| [#1834](https://github.com/sipeed/picoclaw/pull/1834) | Fix Gemini API keys through OpenAI-compatible endpoint | Provider compatibility |
| [#2040](https://github.com/sipeed/picoclaw/pull/2040) | Preserve media store across config reloads | Data persistence |

**Key Advances:**
- **Configuration system stabilization:** Multiple PRs close the loop on secret persistence bugs introduced in v0.2.4
- **Cron system refactoring:** Unified execution path reduces complexity
- **Developer tooling:** Improved logging and test coverage

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | 8 | **Seahorse: Biologically-inspired Memory System** | Users want human-like memory (short-term context compaction, long-term consolidation) for more coherent long-horizon agent behavior |
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) | 6 | **Multi-Agent Collaboration within Single Pico** | Demand for orchestrated agent teams, not isolated single agents |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | 4 | **Progress feedback during tool execution** | Transparency into agent "thinking" — users feel blind during multi-step operations |
| [#1228](https://github.com/sipeed/picoclaw/issues/1228) | 4 | **Pre-install dev tools in Docker image** | Friction in deployment — base image too minimal for real tasks |

### Analysis

The community is **pushing beyond basic functionality** toward sophisticated agent cognition. The Seahorse memory proposal (#1919) and multi-agent roadmap (#1934) indicate users want PicoClaw to compete with frameworks like LangGraph and AutoGen. The progress feedback issue (#571) reveals a UX gap: agents feel opaque compared to chat-native expectations.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#2027](https://github.com/sipeed/picoclaw/issues/2027) | **CLOSED** | #2024 | Telegram config save failure — "Bot Token required" error |
| **🔴 Critical** | [#2072](https://github.com/sipeed/picoclaw/issues/2072) | **CLOSED** | #2123 | Discord token persistence failure |
| **🔴 Critical** | [#2033](https://github.com/sipeed/picoclaw/issues/2033) | **CLOSED** | #2024 | QQ `app_secret` parameter loss |
| **🔴 Critical** | [#2005](https://github.com/sipeed/picoclaw/issues/2005) | **CLOSED** | #2024 | Discord completely non-functional in v0.2.4 |
| **🟡 High** | [#2140](https://github.com/sipeed/picoclaw/issues/2140) | OPEN | [#2143](https://github.com/sipeed/picoclaw/pull/2143) | `model_fallbacks` inherits wrong provider config — cross-provider fallbacks broken |
| **🟡 High** | [#1532](https://github.com/sipeed/picoclaw/issues/1532) | OPEN | — | `picoclaw cron add` command has serious bug (Chinese description, needs translation) |
| **🟡 High** | [#1582](https://github.com/sipeed/picoclaw/issues/1582) | OPEN | — | "model not found" on multi-agent setup with per-channel agents |
| **🟢 Medium** | [#2168](https://github.com/sipeed/picoclaw/pull/2168) | OPEN | — | Media store lost on `/reload` (re-fix of #2040?) |
| **🟢 Medium** | [#1996](https://github.com/sipeed/picoclaw/issues/1996) | OPEN | — | Web UI only shows "pico" channel sessions, hides others |
| **🟢 Medium** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | OPEN | — | Cron task channel errors on hourly scheduling |

**Stability Assessment:** v0.2.4 introduced **significant configuration regressions** across multiple channels. The rapid fix turnaround is positive, but the pattern suggests insufficient integration testing for config flows. The open `model_fallbacks` bug (#2140) with PR #2143 in review is the last major blocker for cross-provider reliability.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Multi-agent discovery & delegation** | [#2148](https://github.com/sipeed/picoclaw/issues/2148), [#2158](https://github.com/sipeed/picoclaw/pull/2158) | **High** | Active implementation PR merged today, roadmap issue created |
| **Live task list / progress indicators** | [#2137](https://github.com/sipeed/picoclaw/issues/2137), [#571](https://github.com/sipeed/picoclaw/issues/571) | Medium | Strong user demand, architectural work in Phase 2 may enable |
| **Mattermost channel** | [#1587](https://github.com/sipeed/picoclaw/issues/1587), [#1586](https://github.com/sipeed/picoclaw/pull/1586) | Medium | PR open since March 15, needs review momentum |
| **Chatmail/Delta Chat channel** | [#2167](https://github.com/sipeed/picoclaw/pull/2167) | Medium | New PR today, privacy-focused messaging integration |
| **Seahorse memory system** | [#1919](https://github.com/sipeed/picoclaw/issues/1919) | Low-Medium | Research-phase, significant architectural undertaking |
| **`/stop` command for task cancellation** | [#2009](https://github.com/sipeed/picoclaw/issues/2009) | Medium | Marked "recruiting" — needs contributor |
| **Enhanced hook system for MCP** | [#2160](https://github.com/sipeed/picoclaw/issues/2160) | Medium | Aligns with industry trend (MCP standard), fresh proposal |
| **Model switching UX (Telegram)** | [#2145](https://github.com/sipeed/picoclaw/issues/2145) | Low | Nice-to-have, competing priorities |

**Prediction:** v0.2.5 or v0.3.0 will likely ship with **multi-agent collaboration** as the headline feature, given the active Phase 2 implementation.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | User Quote / Symptom |
|:---|:---:|:---|
| **Silent agent execution** | Recurring | "Long-running multi-tool iterations leave users staring at a blank screen" (#571) |
| **Configuration fragility** | **Acute** | Multiple reports of token/secret loss across channels — "always says 'Bot Token' field is required" (#2027) |
| **Model management friction** | Moderate | "User cannot see list of models... need to manually type `/switch model to llama-3.3-70b`" (#2145) |
| **Docker image limitations** | Moderate | "Current Docker image only includes `picoclaw`, lacking essential tools" (#1228) |
| **Web UI session visibility** | Moderate | "Chat history only shows pico (web) sessions, hides all other channels" (#1996) |

### Satisfaction Signals
- Strong engagement with advanced features (memory systems, multi-agent)
- Active contribution of PRs for new channels (Mattermost, Chatmail)
- Users investing in complex deployments (cron scheduling, multi-agent setups)

### Dissatisfaction Signals
- v0.2.4 upgrade path was **disruptive** for channel configurations
- Perceived opacity in agent operations
- Configuration UI/UX inconsistencies

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#1532](https://github.com/sipeed/picoclaw/issues/1532) | 16 days | Critical cron bug, Chinese-only description | **Needs triage:** Translate, reproduce, assign |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | 15 days | Mattermost channel implementation ready | **Needs review:** Community contribution at risk of staleness |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | 26 days | Authentication/authorization framework (Authula) | **Needs decision:** Security-critical, no maintainer response |
| [#1567](https://github.com/sipeed/picoclaw/issues/1567) | 16 days | WhatsApp native build failing | **Needs owner:** Mobile channel reliability |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | 37 days | Progress feedback — high-comment, no implementation | **Needs prioritization:** UX gap affecting all users |

**Risk Assessment:** The Mattermost PR (#1586) and Authula proposal (#1067) represent **community energy that may dissipate** without maintainer engagement. The cron bug (#1532) is a stability risk with unclear severity due to language barrier.

---

*Digest generated from GitHub activity 2026-03-29 to 2026-03-30. All links reference `github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-30

## 1. Today's Overview

NanoClaw shows **extremely high development velocity** with 50 PRs and 17 issues updated in the last 24 hours, indicating an active, rapidly evolving project. However, the **merge ratio is concerning**: only 1 of 50 PRs was merged/closed, suggesting either strict review standards or potential bottlenecks in maintainer bandwidth. No new releases were published. The community is heavily focused on **security hardening**, **memory/context optimization**, and **alternative AI backend support**, with multiple research-oriented issues exploring external tools for compression and persistence. The project appears to be in a **feature-expansion phase** with growing operational complexity.

---

## 2. Releases

**No new releases** (v0.0.0 or version bump not indicated in data).

---

## 3. Project Progress

**Merged/Closed Today: 1 PR/Issue**

| Item | Type | Summary |
|------|------|---------|
| [#127](https://github.com/qwibitai/nanoclaw/issues/127) | Issue (CLOSED) | Opencode setup guidance — resolved with 6 comments, 9 👍 |

**Notable Advancement**: The closed issue addressed alternative IDE integration (OpenCode vs. Claude), showing community demand for vendor flexibility.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| 1 | [#127](https://github.com/qwibitai/nanoclaw/issues/127) Opencode setup? | 6 | 9 | **Core need**: Vendor-agnostic tooling. Users want NanoClaw without Claude lock-in. High 👍/comment ratio = broad latent demand. |
| 2 | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) Invalid SSL cert on nanoclaw.dev | 5 | 0 | **Operational trust issue**. Infrastructure reliability concerns blocking adoption. |
| 3 | [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) Host idle-state detection bug | 2 | 0 | **Technical debt**: Race condition in container lifecycle management. |

### Research Cluster (3 related issues by same author)

| Item | Focus | Underlying Need |
|------|-------|---------------|
| [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) Headroom (API compression) | Token cost reduction | **Scaling economics** — context window costs at scale |
| [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) RTK (CLI output compression) | 60-90% compression for tool outputs | **Agent efficiency** — reducing noise in context |
| [#1495](https://github.com/qwibitai/nanoclaw/issues/1495) MemStack (persistent memory) | Cross-session memory | **Stateful agents** — current file-based system inadequate |

**Pattern**: Community is proactively solving context/memory limitations that core project hasn't addressed. Risk of fragmentation if not integrated.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| 🔴 **Critical** | [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) | Container self-termination loop — "crashes hard, brings down Claude Code and container's shell" | ❌ None linked |
| 🔴 **Critical** | [#1531](https://github.com/qwibitai/nanoclaw/issues/1531) | Infinite retry loop from failed container sessions | ❌ Reported today, no PR |
| 🟡 **High** | [#1454](https://github.com/qwibitai/nanoclaw/issues/1454) | Sidecar exits immediately when env vars unset — design flaw in async task handling | ❌ None |
| 🟡 **High** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | Production SSL certificate invalid | ❌ Infrastructure issue |
| 🟢 **Medium** | [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) | Idle-state conflation causing premature container recycling | ❌ None |

**Stability Assessment**: **Concerning**. Two critical container lifecycle bugs with no linked fixes. The infinite retry loop (#1531) and container suicide (#1487) suggest orchestrator robustness issues. SSL cert lapse indicates operational maturity gaps.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Maturity Signal | Likelihood in Next Release |
|---------|----------|-----------------|---------------------------|
| **Web Dashboard** | [#1514](https://github.com/qwibitai/nanoclaw/pull/1514) | PR open, comprehensive (port 3333, SQLite read-only, real-time metrics) | ⭐⭐⭐⭐⭐ High |
| **Token Cost Tracking** | [#1528](https://github.com/qwibitai/nanoclaw/pull/1528) | PR open, touches agent-runner, container-runner, DB schema | ⭐⭐⭐⭐⭐ High |
| **AWS Bedrock Support** | [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) | Issue open, 2 👍, enterprise demand | ⭐⭐⭐⭐☆ Medium-High |
| **GitHub Copilot Backend** | [#1351](https://github.com/qwibitai/nanoclaw/pull/1351) | PR open since Mar 22, needs review | ⭐⭐⭐⭐☆ Medium-High |
| **Graphiti Knowledge Graph** | [#1458](https://github.com/qwibitai/nanoclaw/issues/1458) | Research issue, detailed proposal | ⭐⭐⭐☆☆ Medium |
| **Conversational Approval Flow** | [#1537](https://github.com/qwibitai/nanoclaw/issues/1537) | Issue opened today, security-critical for remote agents | ⭐⭐⭐⭐☆ Medium-High |
| **Docker-in-Docker Support** | [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | Security concern (supply chain), architectural change | ⭐⭐⭐☆☆ Medium |

**Prediction**: Dashboard (#1514) and token tracking (#1528) are closest to merge-ready. Bedrock support (#1492) addresses enterprise blocker and may accelerate.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Container instability** | #1487, #1531, #1454 | Critical — "used to work, now crashes" |
| **Security anxiety** | #1424 (fork privacy), #1500 (OAuth token exposure), #1485 (curl pipe security) | High — users handling sensitive data (healthcare, enterprise) |
| **Vendor lock-in friction** | #127 (Opencode), #1492 (Bedrock), #1351 (Copilot) | Medium-High — multi-model demand |
| **Memory/context limitations** | #1458, #1493-1495 (research issues) | Medium — workarounds emerging externally |
| **Remote agent safety** | #1537 (no approval flow for Telegram/WhatsApp) | High — destructive action risk |

### Use Cases Emerging

- **Healthcare**: #1424 mentions "home user's health care system" — privacy-critical
- **Enterprise multi-tenant**: #1490 (strict isolation requirements), #1492 (AWS Bedrock)
- **Consumer automation**: #1382 (Instacart), #1447 (LinkedIn)

### Satisfaction Signals

- High engagement (50 PRs) = strong contributor interest
- Proactive research contributions (#1493-1495) = ecosystem investment
- Closed issue #127 with 9 👍 = responsive support

### Dissatisfaction Signals

- SSL cert lapse = operational unreliability
- "That is all" (#1503) = terse frustration
- "quite nasty, and very vulnerable" (#1485) = security distrust

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1351](https://github.com/qwibitai/nanoclaw/pull/1351) Copilot SDK | 8 days | Stale PR, backend diversity | Review/merge or close |
| [#1385](https://github.com/qwibitai/nanoclaw/pull/1385) Host networking fix | 6 days | "Needs QA" label | QA completion |
| [#1424](https://github.com/qwibitai/nanoclaw/issues/1424) Fork security | 5 days | Privacy-sensitive users blocked | Guidance on private forks |
| [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) Container crashes | 3 days | **Critical regression** | Reproduction + fix |
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL cert | 2 days | Production trust | Infrastructure response |

### Review Bottleneck Indicator

With 49 open PRs and only 1 merged in 24h, **maintainer bandwidth appears constrained**. Risk of contributor fatigue if turnaround doesn't improve.

---

*Digest generated from GitHub activity 2026-03-29 to 2026-03-30. Data source: qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-30

## 1. Today's Overview

NullClaw shows **moderate development activity** with 2 active PRs and 2 open issues updated in the past 24 hours. No new releases were published. The project appears focused on **internal tooling refinements** (shared helpers, scheduler normalization) rather than user-facing features. Both PRs are from contributor `manelsen`, suggesting concentrated individual contribution rather than distributed maintainer activity. Community interest in **platform expansion** (WeChat integration) is evident but unaddressed by core team. Overall project health: **stable but maintenance-focused**, with no critical blockers but growing feature gap relative to forks.

---

## 2. Releases

**No new releases** — no version updates, changelogs, or migration notes to report.

---

## 3. Project Progress

**No merged or closed PRs today.** Both active PRs remain open:

| PR | Status | Description |
|:---|:---|:---|
| [#745](https://github.com/nullclaw/nullclaw/pull/745) | Open | Refactors tool helpers for file/web search operations — code deduplication, no user-facing changes |
| [#744](https://github.com/nullclaw/nullclaw/pull/745) | Open | Fixes Ollama scheduler tool alias normalization — addresses naming inconsistency in LLM adapter |

**Assessment:** Incremental technical debt reduction. No feature advancement.

---

## 4. Community Hot Topics

### Most Active: WeChat Plugin Integration Request
- **Issue [#714](https://github.com/nullclaw/nullclaw/issues/714)** — 8 comments, 0 reactions, opened 2026-03-25
- **Underlying need:** Access to China's 1.3B+ WeChat user base; competitive parity with other OpenClaw forks
- **Signal:** Strong user demand for **platform diversification beyond Western messaging ecosystems**

### Emerging: Scheduler Tool Access Bug
- **Issue [#743](https://github.com/nullclaw/nullclaw/issues/743)** — 0 comments, opened yesterday by `ats-bcon`
- **Correlation:** Directly related to open PR #744's fix scope — suggests active user impact

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status |
|:---|:---|:---|
| **Medium** | [#743](https://github.com/nullclaw/nullclaw/issues/743): Scheduler tool inaccessible despite correct config | **Fix pending** — PR [#744](https://github.com/nullclaw/nullclaw/pull/744) addresses root cause (alias normalization) |
| **Low** | None additional reported | — |

**Note:** The scheduler bug appears to be a **configuration/adapter mismatch** rather than core logic failure. PR #744's targeted fix suggests maintainers are aware and responding.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **WeChat Plugin Support** | [#714](https://github.com/nullclaw/nullclaw/issues/714) | **Low** — no maintainer engagement, 5 days open; depends on community PR or fork merge |
| **Improved Tool Discovery/Documentation** | Implied by #743 confusion | **Medium** — PR #745's refactoring may enable better abstractions |

**Prediction:** Next release likely contains **bug fixes and refactors only**. Major feature additions (WeChat, new LLM providers) require sustained maintainer bandwidth not currently visible.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Platform lock-in / geographic exclusion** | WeChat request urgency; reference to "other OpenClaw forks" | China/Southeast Asia users |
| **Configuration opacity** | Scheduler tool "correct config" claim failing | Self-hosting users |
| **Documentation gaps** | Screenshot-based bug reports suggest CLI output unclear | New adopters |

**Satisfaction:** Neutral-to-concerned. Users see active forks outpacing core development.

---

## 8. Backlog Watch

| Item | Age | Risk |
|:---|:---|:---|
| [#714 WeChat Plugin](https://github.com/nullclaw/nullclaw/issues/714) | 5 days | **High** — competitive divergence; user may migrate to forks |
| [#743 Scheduler Bug](https://github.com/nullclaw/nullclaw/issues/743) | 1 day | **Low** — fix PR #744 exists, pending review |

**Maintainer attention needed:** Issue #714 requires **explicit roadmap communication** — even a "help wanted" or "under evaluation" label would reduce user uncertainty.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-03-30.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-30

## 1. Today's Overview

IronClaw shows **extremely high development velocity** with 50 PRs updated in 24 hours (43 open, 7 merged/closed) and 8 active issues. The project is in a heavy **staging-to-main promotion cycle** with 11 automated CI promotion PRs queued, indicating a mature but complex release pipeline. Core architectural work dominates: secure financial execution layers, async transaction approvals, and a proposed "OS-like" kernel/extension model suggest the project is maturing from an extensible framework toward a production-grade agent platform. Risk levels are elevated with multiple "high" risk PRs in flight.

---

## 2. Releases

**No new releases** — 0 releases published in the last 24 hours.

The project appears to be accumulating substantial changes in staging (evidenced by 11 promotion PRs) without a stable release cut. This suggests either:
- A major version release is being prepared
- The team prioritizes continuous deployment over tagged releases
- Release process friction exists given the promotion queue depth

---

## 3. Project Progress

### Merged/Closed PRs (7 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#1571](https://github.com/nearai/ironclaw/pull/1571) | fix(mcp): deserialize tool annotations with camelCase per MCP spec | **Standards compliance** — fixes MCP spec violation that could break tool discovery |
| [#1605](https://github.com/nearai/ironclaw/issues/1605) | feat: DB-backed user management with registration, invitation, and API token CRUD | **Infrastructure maturity** — replaces static env-based auth with runtime user management |
| [#1611](https://github.com/nearai/ironclaw/issues/1611) | Execution failed: max iterations (50) exceeded | **Stability fix** — addresses Docker Sandbox Worker loop with Ollama_API empty completions |
| [#1629](https://github.com/nearai/ironclaw/issues/1629) | fix(bedrock): strip tool blocks from messages when toolConfig is absent | **AWS compatibility** — resolves Bedrock Converse API validation errors |
| [#1664](https://github.com/nearai/ironclaw/issues/1664) | feat(skills): support recursive discovery for grouped/bundled skill directories | **Developer experience** — enables nested skill organization |

### Notable Advancements

- **User management infrastructure**: Migration from static `GATEWAY_USER_TOKENS` env var to full CRUD database system removes deployment friction for multi-user scenarios
- **MCP ecosystem health**: Tool annotation fix maintains interoperability with growing MCP server ecosystem
- **Local model reliability**: Iteration limit fix improves Ollama local model experience

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1739](https://github.com/nearai/ironclaw/issues/1739) Async transaction approval system with WalletConnect | 4 | **Security-critical architecture** — two-phase approval for high-stakes financial actions. Strong engagement indicates this addresses a real blocker for DeFi/ crypto agent use cases. |
| 2 | [#1712](https://github.com/nearai/ironclaw/issues/1712) Architect secure financial execution layer | 1 | **Foundational infrastructure** — builds on NEAR intents work (#1622). Labels: `risk: high`, `scope: safety`, `scope: secrets` signal this is a trust-layer priority. |

### Underlying Needs Analysis

- **Trust and custody**: Both #1739 and #1712 reveal demand for **human-in-the-loop financial controls**. Users want agent autonomy *with* cryptographic guarantees of human oversight.
- **WalletConnect integration**: #1739 specifically targets mobile/web wallet workflows, suggesting IronClaw is positioning for consumer-facing crypto agents rather than just institutional custody.

### Major Architectural Proposal

| Item | Scope | Significance |
|:---|:---|:---|
| [#1741](https://github.com/nearai/ironclaw/issues/1741) design: kernel/extension architecture — move toward OS-like extensibility model | `scope: channel`, `scope: tool/wasm`, `scope: llm`, `scope: extensions`, `scope: hooks` | **Paradigm shift proposal** — acknowledges that despite extensibility "bones" (WASM, MCP, skills), too much functionality remains compile-time. Proposes runtime kernel with extension loading, hook system, and reduced core binary size. |

This signals potential **v3 architecture** thinking — moving from framework to platform.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| 🔴 **High** | [#1742](https://github.com/nearai/ironclaw/issues/1742) MiniMax API is not used correctly | **OPEN, no fix PR** | 401 Unauthorized errors on MiniMax-M2.7 provider. Blocks users of this Chinese LLM provider. |
| 🟡 **Medium** | [#1611](https://github.com/nearai/ironclaw/issues/1611) Execution failed: max iterations (50) exceeded | **CLOSED** | Docker Sandbox Worker loop with local models — fix deployed. |
| 🟡 **Medium** | [#1629](https://github.com/nearai/ironclaw/issues/1629) Bedrock tool blocks validation error | **CLOSED** | AWS Bedrock compatibility fixed. |

### Stability Assessment

- **Provider diversity risk**: MiniMax failure (#1742) suggests insufficient test coverage for non-Western API providers
- **Local model fragility**: The Ollama iteration loop (#1611) indicates edge cases in tool completion parsing that may recur with other local inference engines
- **No critical regressions** in core functionality

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Async transaction approvals / WalletConnect** | [#1739](https://github.com/nearai/ironclaw/issues/1739) | ⭐⭐⭐⭐⭐ High | Active discussion, security-critical, aligns with NEAR ecosystem priorities |
| **Secure financial execution layer** | [#1712](https://github.com/nearai/ironclaw/issues/1712) | ⭐⭐⭐⭐⭐ High | P1 priority, builds on existing NEAR intents work, risk-labeled |
| **OS-like kernel/extension architecture** | [#1741](https://github.com/nearai/ironclaw/issues/1741) | ⭐⭐⭐☆☆ Medium | Architectural proposal, likely v3.0 scope, requires substantial design iteration |
| **Tool invoke HTTP endpoint** | [#1740](https://github.com/nearai/ironclaw/pull/1740) | ⭐⭐⭐⭐☆ High | PR already open (XL size), enables Tauri desktop integration |
| **Anti-drift self-checks** | [#1662](https://github.com/nearai/ironclaw/pull/1662) | ⭐⭐⭐⭐☆ High | PR open, addresses token cost optimization — attractive for production deployments |
| **Aliyun Coding Plan support** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | ⭐⭐⭐☆☆ Medium | XL PR open since March 20, may need rebase given staging velocity |
| **Unified Thread-Capability-CodeAct engine (v2)** | [#1557](https://github.com/nearai/ironclaw/pull/1557) | ⭐⭐☆☆☆ Lower | 7,275 lines, "can be swapped in when it passes all acceptance tests" — likely post-stabilization |

---

## 7. User Feedback Summary

### Pain Points

| Issue | Evidence | User Impact |
|:---|:---|:---|
| **Static user management** | [#1605](https://github.com/nearai/ironclaw/issues/1605) | "Adding/removing a user requires an env var change and a process restart" — ops friction for multi-tenant deployments |
| **Local model reliability** | [#1611](https://github.com/nearai/ironclaw/issues/1611) | Empty tool completions causing iteration exhaustion — degrades self-hosted experience |
| **Financial action security gaps** | [#1712](https://github.com/nearai/ironclaw/issues/1712) | "We do not yet have a secure architecture for custody, signing, approvals, policy enforcement" — blocks production financial agents |
| **Extension development friction** | [#1741](https://github.com/nearai/ironclaw/issues/1741) | "Huge amount of functionality is still compile-time" — limits community contribution velocity |

### Satisfaction Indicators

- **Strong extensibility foundation**: Multiple references to "trait objects everywhere," WASM sandbox, MCP support, skills system — users recognize solid architecture
- **Active CI/CD**: Automated staging promotions indicate reliable (if complex) delivery pipeline
- **Responsive maintenance**: 4/8 issues closed in 24h, including user-reported bugs

### Use Case Signals

- **DeFi/Crypto agents**: Dominance of financial security issues suggests primary user segment
- **Enterprise multi-tenancy**: DB-backed user management request indicates B2B deployment needs
- **Local/edge deployment**: Ollama bug reports and MiniMax integration show geographic/provider diversity

---

## 8. Backlog Watch

### Long-Running Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---:|:---:|:---|
| [#1557](https://github.com/nearai/ironclaw/pull/1557) Unified Thread-Capability-CodeAct engine | 8 days | **Architecture fragmentation** | 7,275-line PR with "bridge adapters" — needs maintainer decision on integration timeline vs. parallel maintenance burden |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan support | 10 days | **Provider diversity** | XL PR from new contributor; may need rebase given 11 staging promotions since creation — maintainer review to prevent staleness |
| [#1529](https://github.com/nearai/ironclaw/pull/1529) Gmail Content-Length fix | 9 days | **Gmail integration reliability** | Simple fix (size: M), new contributor — quick win if reviewed |

### Maintainer Attention Recommended

- **Staging promotion queue**: 11 stacked promotion PRs suggests either:
  - Intentional batching for major release
  - Potential merge conflict accumulation risk
  - Review bottleneck in core team

- **#1741 kernel architecture**: Zero comments since creation — high-impact proposal that may need explicit "accepted/deferred/rejected" status to guide community expectations

---

## Project Health Summary

| Metric | Assessment |
|:---|:---|
| **Velocity** | ⬆️ Exceptional — 50 PR updates, active CI pipeline |
| **Stability** | ➡️ Stable — no critical regressions, responsive bug fixes |
| **Community** | ➡️ Growing — new contributors visible, but review bandwidth may be constrained |
| **Architecture** | ⬆️ Evolving — major security and extensibility proposals in flight |
| **Release Cadence** | ⬇️ Concerning — no releases, deep staging queue suggests release process friction |

**Overall**: IronClaw is in **intensive development mode** with strong technical momentum but potential release management challenges. The convergence of financial security features and kernel architecture proposals suggests a maturation inflection point — likely preparing for a significant version milestone.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-30

## 1. Today's Overview

LobsterAI shows **high development velocity** with 7 active pull requests submitted or updated in the last 24 hours, all currently open and awaiting review. No new releases were published. Community activity is moderate with 4 open issues, including one critical stability concern regarding Agent Engine infinite restarts and architectural questions about the project's future direction. The project appears to be in an **active feature development phase** with significant UX improvements in progress, though maintainer bandwidth for code review may be a bottleneck given the unmerged PR backlog.

---

## 2. Releases

**No new releases** — No version tags or release notes published in the last 24 hours.

---

## 3. Project Progress

**No PRs merged or closed today.** All 7 active PRs remain in open status, indicating potential review queue congestion. Key features in development include:

| PR | Feature | Status | Significance |
|:---|:---|:---|:---|
| [#644](https://github.com/netease-youdao/LobsterAI/pull/644) | Qwen OAuth one-click login | Open | Reduces onboarding friction to ~10 seconds |
| [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) | Slash-triggered skill picker | Open | Inline skill selection without context switching |
| [#1012](https://github.com/netease-youdao/LobsterAI/pull/1012) | Conversation-based skill creation | Open | AI-assisted skill authoring workflow |
| [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) | Extensible artifacts preview (HTML/React/Mermaid) | Open | Executable code outputs, competitive with Claude Artifacts |
| [#1010](https://github.com/netease-youdao/LobsterAI/pull/1010) | Reveal-in-folder for output files | Open | File management UX polish |
| [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) | Prompt template library with variables | Open | Reusable prompt assets, team collaboration |
| [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | 6 new preset agent templates | Open | Expanded vertical coverage |

**Assessment**: Strong focus on **Cowork chat UX**, **skill ecosystem**, and **content rendering capabilities**. No progress on engine/architecture concerns raised in community.

---

## 4. Community Hot Topics

### Most Engaged Discussions

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#418](https://github.com/netease-youdao/LobsterAI/issues/418) — Engine switch to OpenClaw? | 1 comment, 0 👍 | **Critical strategic concern**. User detected branch activity suggesting migration from Claude Agent SDK to "OpenClaw" engine. Questions maintenance commitment to Claude-based `cowork` feature and whether SDK unpredictability drove the decision. |
| [#595](https://github.com/netease-youdao/LobsterAI/issues/595) — Windows autostart failure | 1 comment, 0 👍 | **High-impact reliability issue**. Process exits silently (~3s) with no logs. Suggests crash in early initialization, possibly permissions or logging path issues in per-user installs. |

### Underlying Needs

- **Transparency**: Users need official roadmap clarity on engine strategy (#418)
- **Reliability**: Silent failures without logs block debugging (#595)
- **Discoverability**: Third-party tools (Dispatch) seeking metadata for skill indexing (#1014)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | **Agent Engine infinite restart loop** — User reports frequent occurrence, requests configuration workaround. No response yet. | ❌ No fix PR |
| 🟡 **Medium** | [#595](https://github.com/netease-youdao/LobsterAI/issues/595) | Windows autostart fails silently, no logs generated. Per-user install path (`%LOCALAPPDATA%`) suspected. | ❌ No fix PR |

**Stability Assessment**: Two unresolved runtime stability issues with no associated fixes. The infinite restart loop (#1007) appears to be a **recurring, unresolved systemic problem** affecting core functionality.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Qwen OAuth integration** | PR #644 (ready) | **High** — Complete implementation, reduces friction |
| **Slash commands for skills** | PR #1013 (ready) | **High** — Improves power-user workflow |
| **Executable artifacts (HTML/React/Mermaid)** | PR #1011 (ready) | **Medium-High** — Major differentiator vs. competitors |
| **Prompt template library** | PR #1009 (ready) | **Medium** — Team/enterprise use case |
| **Engine architecture clarity** | Issue #418 | **Uncertain** — Requires maintainer decision |

**Predicted vNext focus**: UX refinement for Cowork chat, expanded model provider support (Qwen), and content rendering parity with Claude Artifacts.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Root Cause |
|:---|:---|:---|
| Silent crashes | "进程启动后约3秒退出且无日志写入" (#595) | Logging initialization failure or early exception handling gap |
| Unstable agent runtime | "经常遇到 Agent Engine 无限重启" (#1007) | Engine lifecycle management, possibly resource contention or provider API failures |
| Skill discovery friction | "每次都需要跳转到技能页面" (#1013) | No inline skill invocation mechanism |
| Prompt repetition | "反复输入结构相近的 Prompt" (#1009) | No template/asset management system |

### Use Cases Emerging
- **Team/enterprise**: Prompt template sharing (#1009)
- **Visual thinkers**: Mermaid/executable diagram support (#1011)
- **Low-friction onboarding**: OAuth-first authentication (#644)

### Satisfaction Signals
- Active PR contributions suggest engaged contributor base
- Third-party integration interest (Dispatch #1014) indicates ecosystem relevance

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#418](https://github.com/netease-youdao/LobsterAI/issues/418) | 15 days | **High** — Strategic uncertainty affecting contributor confidence | Official maintainer response on engine roadmap |
| [#595](https://github.com/netease-youdao/LobsterAI/issues/595) | 10 days | Medium — Windows user retention impact | Diagnostic guidance or fix for silent startup failures |
| [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | 1 day | Medium — Recurring stability complaint | Configuration documentation or engine hardening |

**Maintainer Attention Required**: The unanswered engine architecture question (#418) poses **reputational and contribution risk** if left unaddressed. The 7 open PRs suggest review bandwidth may be constrained.

---

*Digest generated from GitHub activity 2026-03-29. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-30

---

## 1. Today's Overview

Moltis shows **steady maintenance activity** with 6 issues and 3 PRs updated in the last 24 hours. The project demonstrates **balanced velocity**: 3 issues closed with 3 remaining open, and 1 PR merged against 2 active ones. No new releases were cut. Activity centers on **provider integrations** (Z.AI), **security/UX improvements** (vault sealing, SSH runtime), and **platform expansion** (Matrix protocol). The maintainer (`penso`) is highly responsive, closing a provider bug and advancing multi-session features within 24 hours of PR creation.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|:---|:---|:---|
| [#517](https://github.com/moltis-org/moltis/pull/517) | **feat(providers): add zai-code provider for Z.AI Coding plan** | Resolves billing/endpoint mismatch for Z.AI Coding plan subscribers; unblocks paid users previously hitting "insufficient balance" errors |

### Active Development

| PR | Description | Status |
|:---|:---|:---|
| [#518](https://github.com/moltis-org/moltis/pull/518) | Allow unencrypted session history while vault sealed | **Open** — security UX fix; narrows HTTP guard scope, removes misleading UI placeholder |
| [#503](https://github.com/moltis-org/moltis/pull/503) | Add session recall, managed SSH runtime UX, and skill portability | **Open** — major feature bundle: cross-session recall, auto-checkpoints, Cursor-compatible context ingestion, portable skill bundles |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#176](https://github.com/moltis-org/moltis/issues/176) — Add datetime to system prompt context | **15 comments, 1 👍** | **Most discussed** — Closed after extensive debate. Reveals tension between deterministic reproducibility (no datetime) and agent awareness of time. Community wants opt-in flexibility. |
| [#414](https://github.com/moltis-org/moltis/issues/414) — z.ai does not work out of the box | **8 comments, 0 👍** | **Provider friction** — Closed via #517. Highlights onboarding pain: paid Z.AI users confused by endpoint/billing mismatch. Documentation gap between "general" and "Coding plan" endpoints. |
| [#185](https://github.com/moltis-org/moltis/issues/185) — Add Z.AI Coding Plan | **5 comments, 5 👍** | **High demand** — Top-voted open issue. Directly addressed by merged #517; likely closable pending verification. |
| [#233](https://github.com/moltis-org/moltis/issues/233) — Matrix Support | **3 comments, 2 👍** | **Protocol expansion** — Decentralized chat demand. No maintainer response yet; signals enterprise/self-hosted user interest. |

**Underlying needs**: Better provider onboarding docs, time-aware agent modes, and decentralized communication channels.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|:---|:---|:---|:---|
| [#414](https://github.com/moltis-org/moltis/issues/414) — z.ai network errors | **Medium** (blocks paid users) | ✅ Closed | #517 merged |
| [#485](https://github.com/moltis-org/moltis/issues/485) — Built-in tools generate invalid JSON Schema for strict providers | **Medium** (provider compatibility) | ✅ Closed | Unknown (1 comment, rapid closure suggests quick fix) |

**Assessment**: Two provider-compatibility bugs resolved swiftly. No critical crashes or regressions reported. JSON Schema strictness suggests ongoing alignment with OpenAI/Anthropic spec evolution.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| [#185](https://github.com/moltis-org/moltis/issues/185) Z.AI Coding Plan | 5 👍 | **vNext** | Implementation merged (#517), pending close |
| [#233](https://github.com/moltis-org/moltis/issues/233) Matrix Support | 2 👍 | Medium | Channel expansion; competes with Discord/Slack priorities |
| [#490](https://github.com/moltis-org/moltis/issues/490) Local thinking | 0 👍 | Low-Medium | Privacy/local-first trend; may align with #503's portable skills |

**Emerging themes**: 
- **Session continuity** (#503) — checkpointing, recall, portability becoming core differentiator
- **Security UX** (#518) — vault behavior refinement for operational workflows
- **Local/privacy-preserving execution** (#490) — early signal, watch for upvotes

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|:---|:---|:---|
| **Provider onboarding confusion** | #414, #185, #517 | 😤 → 😊 (resolved) |
| **Vault UX friction** | #518 | 😐 (improvement in progress) |
| **Session/state loss between chats** | #503 | 😤 (addressed in open PR) |
| **Time-unaware agents** | #176 | 🤔 (debated, closed without full resolution) |
| **Need for decentralized/self-hosted options** | #233 | 🤞 (unanswered) |

**Use cases surfacing**: 
- Professional developers needing reliable Z.AI integration
- Teams requiring air-gapped or vault-sealed operational security
- Users wanting agent state portability across devices/sessions

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#233](https://github.com/moltis-org/moltis/issues/233) Matrix Support | 33 days | **Medium** — 2 👍, no maintainer comment | Triage: evaluate against channel roadmap; assign or defer |
| [#490](https://github.com/moltis-org/moltis/issues/490) Local thinking | 5 days | Low — early stage, 0 votes | Monitor for community traction; may duplicate #503 local execution themes |

**No stale PRs** — both open PRs (#518, #503) are <48 hours old with active maintainer engagement.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-03-30.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-30

## 1. Today's Overview

CoPaw shows **high community momentum** with 37 issues and 34 PRs updated in the last 24 hours, indicating an active development cycle. The project is currently in a **bug-fixing and stabilization phase** following the v0.2.0.post1 release, with no new version cut today. Community engagement is strong with 26 open/active issues and 18 open PRs, including significant first-time contributor activity. The maintainers appear responsive with 11 issues closed and 16 PRs merged/closed. Key focus areas include Windows installer fixes, UI/UX refinements, and enterprise channel integrations (DingTalk, Feishu).

---

## 2. Releases

**No new releases** — Latest version remains v0.2.0.post1.

---

## 3. Project Progress

### Merged/Closed PRs Today (16 total, selected highlights):

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#1544](https://github.com/agentscope-ai/CoPaw/pull/1544) | YingchaoX | **ACP (Agent Client Protocol) external agent support** — Enables CoPaw to invoke external agents via ACP protocol (OpenCode, Qwen-code, Gemini CLI) | **Major architectural feature** — Extends interoperability |
| [#2489](https://github.com/agentscope-ai/CoPaw/pull/2489) | xieyxclack | Fix PowerShell cmdlet typo (`SetItemProperty` → `Set-ItemProperty`) in Windows installer | **Critical fix** — Unblocks Windows PATH configuration |
| [#2496](https://github.com/agentscope-ai/CoPaw/pull/2496) | xieyxclack | Documentation updates for README and intro docs | Maintenance |
| [#2486](https://github.com/agentscope-ai/CoPaw/pull/2486) | xieyxclack | Magic command documentation updates | Maintenance |

### Notable Open PRs Advancing:

| PR | Author | Description | Status |
|:---|:---|:---|:---|
| [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506) / [#1837](https://github.com/agentscope-ai/CoPaw/pull/1837) | hanson-hex | **Channel testing infrastructure** — Contract tests for all 11 channels, 19 verification points, 4-layer protection | Testing framework foundation |
| [#2426](https://github.com/agentscope-ai/CoPaw/pull/2426) | qzcpl | **Channel lazy loading refactor** — On-demand loading for startup performance | Performance optimization |
| [#2501](https://github.com/agentscope-ai/CoPaw/pull/2501) | carlos999-hqsama | **Feishu streaming typewriter cards** — Real-time character-by-character display | UX enhancement |
| [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | zjncs | **DingTalk AI table/document operations** | Enterprise feature expansion |
| [#2484](https://github.com/agentscope-ai/CoPaw/pull/2484) | lukangyu | **Knowledge base import pipeline** — Multi-format parsing for `/kb import` | Core knowledge feature |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement):

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) | 36 | **"Help Wanted: Open Tasks"** — Community contribution coordination | **Structured onboarding** — Users want clear entry points to contribute; maintainers need distributed development help |
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 17 | **100% CPU at idle** — Busy-polling epoll loop | **Production stability** — Critical resource waste affecting server deployments |
| [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) | 9 | **Power user pain points** (CN) — Context deletion, AI compression, file reading | **Advanced user workflow control** — Heavy users hitting context management limits; need surgical memory control |
| [#2303](https://github.com/agentscope-ai/CoPaw/issues/2303) | 5 | **MiniMax provider 404** — `/models` endpoint unsupported | **Multi-provider compatibility** — Anthropic-compatible APIs failing validation checks |
| [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | 5 | **Skills-hub management page** | **Discoverability** — Users can't easily find/install skills; marketplace UX gap |

### Key Insight:
The [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) "Help Wanted" issue's high engagement (36 comments) reveals a **healthy contributor funnel** but also suggests maintainer bandwidth constraints. The concentration of Chinese-language issues (#2482, #2418, #2377) indicates strong adoption in Chinese-speaking markets with localization and regional provider support as differentiators.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 100% CPU at idle — busy-polling epoll loop | **Open** — No fix PR identified |
| **🔴 Critical** | [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | Gateway restart causes permanent Agent deadlock (100% reproducible) | **Closed** — Fixed in recent build |
| **🟡 High** | [#2488](https://github.com/agentscope-ai/CoPaw/issues/2488) → [#2489](https://github.com/agentscope-ai/CoPaw/pull/2489) | Windows installer PATH update fails (typo) | **Fixed** — PR #2489 merged |
| **🟡 High** | [#2431](https://github.com/agentscope-ai/CoPaw/issues/2431) / [#2269](https://github.com/agentscope-ai/CoPaw/issues/2269) | Language setting not persisted across restarts | **Partially fixed** — Multiple related issues, PR #2498 addresses agent language |
| **🟡 High** | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377) | Batch file processing auto-interrupts (1500 files) | **Open** — Reliability issue for automation workflows |
| **🟡 High** | [#2439](https://github.com/agentscope-ai/CoPaw/issues/2439) | Voice message transcription non-functional | **Open** — Media processing regression |
| **🟢 Medium** | [#2303](https://github.com/agentscope-ai/CoPaw/issues/2303) | MiniMax `check_connection()` 404 error | **Open** — Provider compatibility |
| **🟢 Medium** | [#2494](https://github.com/agentscope-ai/CoPaw/issues/2494) | Model selector dropdown closes too fast (CSS timing) | **Open** — UX polish |
| **🟢 Medium** | [#2503](https://github.com/agentscope-ai/CoPaw/issues/2503) | MiniMax-M2.7 model ID format rejection | **Open** — Model validation |

**Stability Assessment:** Two critical issues remain open, with [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) being the most concerning for production deployments. The rapid closure of [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) (deadlock) and [#2488](https://github.com/agentscope-ai/CoPaw/issues/2488) (installer) shows maintainer responsiveness to blockers.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **ACP external agent protocol** | [#1544](https://github.com/agentscope-ai/CoPaw/pull/1544) | **Merged** — Available now | Major architectural addition |
| **Knowledge base import (`/kb`)** | [#2484](https://github.com/agentscope-ai/CoPaw/pull/2484) | **High** | Active PR, roadmap task #18 |
| **DingTalk AI tables/documents** | [#2451](https://github.com/agentscope-ai/CoPaw/issues/2451), [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | **High** | PR open, enterprise demand |
| **Feishu streaming cards** | [#2501](https://github.com/agentscope-ai/CoPaw/pull/2501) | **Medium-High** | UX differentiator, PR active |
| **Agent message queue with priority** | [#2469](https://github.com/agentscope-ai/CoPaw/pull/2469) | **Medium** | Complex feature, first-time contributor |
| **User asset backup/migration** | [#2443](https://github.com/agentscope-ai/CoPaw/issues/2443) | **Medium** | Strong user need, no PR yet |
| **GitHub Copilot model support** | [#406](https://github.com/agentscope-ai/CoPaw/issues/406) | **Low-Medium** | Long-standing request, competitor parity |
| **Skills-hub management UI** | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | **Medium** | Discoverability pain point |
| **MCP tool visibility** | [#2495](https://github.com/agentscope-ai/CoPaw/issues/2495) | **Medium** | Post-configuration UX gap |

**Prediction:** v0.2.1 or v0.3.0 will likely include knowledge base improvements, DingTalk enterprise features, and channel testing infrastructure. The ACP protocol merge signals a strategic shift toward **agent interoperability**.

---

## 7. User Feedback Summary

### Pain Points (Real Usage Patterns):

| Category | Feedback | Source |
|:---|:---|:---|
| **Context Management** | "One bad message corrupts entire day's work; need physical deletion from context" | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) |
| **Context Compression** | AI-compressed context loses coherence; needs domain-aware compression (e.g., preserve natural language, strip debug/code) | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) |
| **File Reading** | Large files truncated, AI refuses single read, iterative reads cause errors | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482), [#2500](https://github.com/agentscope-ai/CoPaw/issues/2500) |
| **Batch Reliability** | Long-running tasks (1500 files) interrupt without recovery despite checkpointing | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377) |
| **Windows Experience** | Language persistence, installer PATH issues | [#2269](https://github.com/agentscope-ai/CoPaw/issues/2269), [#2431](https://github.com/agentscope-ai/CoPaw/issues/2431), [#2488](https://github.com/agentscope-ai/CoPaw/issues/2488) |
| **Enterprise Integration** | DingTalk automation brittle (UI popups block), need better headless/CLI support | [#2490](https://github.com/agentscope-ai/CoPaw/issues/2490) |

### Positive Signals:
- Heavy daily usage ("重度copaw用户，码农，每天重度折腾") — [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482)
- Strong enterprise adoption (DingTalk, Feishu channels actively used)
- Active contribution willingness (Help Wanted issue traction)

### Satisfaction Gap:
Users are **committed but frustrated** — they rely on CoPaw for production work but hit reliability and control limitations. The project is past "early adopter" tolerance; users expect **production-grade robustness**.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 6 days | 100% CPU idle bug — no assignee, no fix PR | **Production blocker** — affects all server deployments |
| [#406](https://github.com/agentscope-ai/CoPaw/issues/406) | 27 days | GitHub Copilot model support — competitor parity | Market positioning |
| [#1456](https://github.com/agentscope-ai/CoPaw/issues/1456) | 16 days | Empty tool call names cause silent failures | Debugging nightmare — invisible errors |
| [#2042](https://github.com/agentscope-ai/CoPaw/issues/2042) | 8 days | GLM `thinking` field error — model compatibility | Provider support gap |
| [#2459](https://github.com/agentscope-ai/CoPaw/issues/2459) | 2 days | Multi-agent `/approve` forwarding broken | Enterprise workflow blocker |

### PRs Stalled:

| PR | Age | Status | Action Needed |
|:---|:---|:---|:---|
| [#1512](https://github.com/agentscope-ai/CoPaw/pull/1512) | 15 days | OpenAI-style tool calls for local models | Review/merge for local model support |
| [#2051](https://github.com/agentscope-ai/CoPaw/pull/2051) | 8 days | Docker optimization (-30% size, -10s startup) | Review for infrastructure improvement |

**Recommendation:** Prioritize [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) (CPU bug) and establish SLA for critical bug response given production user reliance.

---

*Digest generated from GitHub activity 2026-03-29 to 2026-03-30. Data source: agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-30

## 1. Today's Overview

ZeptoClaw shows **high development velocity** with 6 PRs and 2 issues updated in the last 24 hours, all from contributor **stuartbowness**. The project is actively addressing core infrastructure gaps: provider routing for OpenRouter, custom tool parameter handling, context management at scale, and security sandboxing. No releases were cut today. All activity centers on reliability, observability, and extensibility—suggesting the project is maturing from prototype to production-ready. The single closed PR (#464) fixed a significant CLI discoverability gap where 11 tools were invisible to users.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#464](https://github.com/qhkm/zeptoclaw/pull/464) | Register missing tools in tool registry | **Major UX fix** — `zeptoclaw tools list` now surfaces all 33 tools instead of 22; users can discover `git`, `pdf_read`, `project`, `stripe`, `transcribe` and their config requirements |

### Active Development (Open PRs Advancing)

| PR | Stage | Significance |
|:---|:---|:---|
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) | Multi-layered context compaction | **Critical reliability** — replaces crash-prone single-pass word-count with defense-in-depth token overflow prevention |
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) | BrowserTool with agent-browser | **Major capability** — adds browser automation with SSRF protection, Lightpanda/Chrome fallback |
| [#468](https://github.com/qhkm/zeptoclaw/pull/468) | OpenRouter vendor-prefixed routing | **Integration fix** — enables `google/gemini-3-flash-preview` and similar models to route correctly |
| [#467](https://github.com/qhkm/zeptoclaw/pull/467) | `raw_string` param type | **Custom tool fix** — unblocks CLI wrapper use cases (e.g., `gws {{args}}`) by skipping shell escaping |
| [#463](https://github.com/qhkm/zeptoclaw/pull/463) | Landlock workspace access | **Security fix** — makes sandboxing actually usable by wiring up workspace permissions |

---

## 4. Community Hot Topics

**No commented or reacted items today** — all issues and PRs show 0 comments and 0 reactions. This indicates:
- Either low community engagement (stuartbowness appears to be the sole active contributor)
- Or rapid self-merging without external review

**Most significant open items by technical weight:**

| Item | Link | Underlying Need |
|:---|:---|:---|
| #465 — Runtime registry for tools list | [Issue #465](https://github.com/qhkm/zeptoclaw/issues/465) | **Architectural coherence** — CLI and runtime tool discovery must stay synchronized; current hardcoded array is technical debt blocking plugin/MCP ecosystem growth |
| #466 — Shell escaping breaks CLI wrappers | [Issue #466](https://github.com/qhkm/zeptoclaw/issues/466) | **Power user flexibility** — users need to pass raw argument strings to external CLI tools without mangling; #467 proposes `raw_string` type as fix |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#466](https://github.com/qhkm/zeptoclaw/issues/466) | Custom tool shell escaping breaks CLI wrappers (`{{args}}` becomes single-quoted blob) | **Fix PR open**: [#467](https://github.com/qhkm/zeptoclaw/pull/467) |
| 🟡 **Medium** | [#463](https://github.com/qhkm/zeptoclaw/pull/463) | Landlock sandboxing non-functional — workspace inaccessible despite `allow_read_workspace: true` | **Fix PR open**: [#463](https://github.com/qhkm/zeptoclaw/pull/463) |
| 🟡 **Medium** | [#468](https://github.com/qhkm/zeptoclaw/pull/468) | Vendor-prefixed models fail routing to OpenRouter (runtime/preflight mismatch) | **Fix PR open**: [#468](https://github.com/qhkm/zeptoclaw/pull/468) |
| 🟢 **Low** (fixed) | [#464](https://github.com/qhkm/zeptoclaw/pull/464) | 11 tools invisible in `zeptoclaw tools list` | **Resolved** |

**Pattern**: All active bugs have corresponding fix PRs — project maintenance is responsive.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Browser automation** | [#459](https://github.com/qhkm/zeptoclaw/pull/459) | High — substantial PR ready, addresses common agent need |
| **Context compaction v2** | [#460](https://github.com/qhkm/zeptoclaw/pull/460) | High — fixes production-blocking crashes |
| **Raw string parameters** | [#467](https://github.com/qhkm/zeptoclaw/pull/467) | High — unblocks #466, small surface area |
| **Runtime-based tool discovery** | [#465](https://github.com/qhkm/zeptoclaw/issues/465) | Medium — architectural, may need design iteration |
| **MCP tool visibility** | [#465](https://github.com/qhkm/zeptoclaw/issues/465) | Medium — depends on registry refactor |

**Emerging theme**: ZeptoClaw is positioning as a **composable agent platform** — custom tools, MCP integration, browser automation, and pluggable providers.

---

## 7. User Feedback Summary

**Inferred pain points from issue/PR descriptions:**

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Tool discoverability** | "Users had no way to discover tools like `git`, `pdf_read`..." — #464 | High (fixed) |
| **Token overflow crashes** | "Users were hitting the..." — #460 | Critical (fix in progress) |
| **Custom tool limitations** | CLI wrappers broken by over-eager escaping — #466 | Medium (fix in progress) |
| **Sandboxing unusable** | Landlock config ignored — #463 | Medium (fix in progress) |
| **Provider routing confusion** | Vendor-prefixed models fail — #468 | Medium (fix in progress) |

**Satisfaction indicator**: Rapid iteration on reported issues suggests healthy maintainer responsiveness. No user complaints about ignored issues visible in this window.

---

## 8. Backlog Watch

**No stale items detected** — all open issues and PRs are from 2026-03-27 to 2026-03-29 (last 3 days).

**Items needing broader review attention:**

| Item | Age | Risk |
|:---|:---|:---|
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) Context compaction | 3 days | Large architectural change — needs review for edge cases |
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) BrowserTool | 3 days | Security-sensitive (SSRF, browser automation) — needs security review |

**Recommendation**: Given stuartbowness's solo contributor pattern, consider establishing CODEOWNERS or seeking co-maintainer review for security-critical PRs (#459, #463).

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-30

---

## 1. Today's Overview

EasyClaw/RivonClaw shows **minimal daily activity** with only one issue update and no pull request movement. The project published a patch release (v1.7.8) addressing macOS installation friction, indicating ongoing maintenance focus on accessibility rather than feature expansion. Community engagement remains low with zero comments on the sole active issue. The single open issue reveals a **critical compatibility conflict** with Tencent's competing QClaw product, suggesting ecosystem fragmentation challenges in the AI assistant tooling space. Overall project health appears stable but stagnant—maintained but not actively evolving.

---

## 2. Releases

### [v1.7.8: RivonClaw](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8) — Published 2026-03-30

| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Focus** | macOS user experience / distribution |
| **Key Change** | Documented Gatekeeper bypass for unsigned app installation |

**Changes:**
- Added bilingual (EN/CN) installation instructions for macOS
- Documented workaround for "'RivonClaw' is damaged and can't be opened" Gatekeeper error
- Standard terminal-based quarantine attribute removal: `xattr -cr /Applications/RivonClaw.app`

**Breaking Changes:** None

**Migration Notes:** Not applicable—new install guidance only

---

## 3. Project Progress

**No merged or closed PRs in the last 24 hours.**

No feature advancement or bug fixes landed today. Release v1.7.8 appears to have been cut directly from main without associated PR activity, suggesting direct maintainer commits for documentation-only changes.

---

## 4. Community Hot Topics

### [#30: rivonclaw和QClaw能不能同时使用](https://github.com/gaoyangz77/rivonclaw/issues/30)
| Metric | Value |
|--------|-------|
| Status | 🔴 Open |
| Author | @zgcgreat |
| Created | 2026-03-29 |
| Comments | 0 |
| Reactions | 0 👍 |

**Issue Summary:** Mutual exclusivity between RivonClaw and Tencent QClaw—opening QClaw after RivonClaw causes both to lose network connectivity; QClaw works only after RivonClaw is terminated.

**Underlying Needs Analysis:**
- **Port/resource conflict:** Likely both applications bind to identical local ports (common with WebSocket/HTTP proxy implementations)
- **System-level interception collision:** Both tools may register overlapping network hooks or proxy configurations
- **User workflow demand:** Power users want to run multiple AI assistant tools simultaneously for comparison or task-specific optimization
- **Ecosystem lock-in concern:** Implicit competition between open-source (RivonClaw) and commercial (Tencent) solutions creating friction

**Signal:** Zero engagement (no comments, no maintainer response) suggests either under-resourced maintenance or deprioritization of interoperability issues.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Medium** | [#30](https://github.com/gaoyangz77/rivonclaw/issues/30) | Port/proxy conflict with QClaw causes mutual network failure | ❌ None |

**No new crash reports, regressions, or stability issues reported today.**

The QClay conflict is the sole active bug. While not a crash, it represents **functional breakage** for users in mixed-tooling environments. No reproduction steps or logs provided yet.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests opened today.**

**Inferred from #30:**
- **Multi-instance/port configuration:** Users need configurable local ports to avoid conflicts
- **Compatibility mode:** Detection and graceful degradation when competing tools are active
- **Network stack isolation:** Sandboxed proxy implementation preventing system-wide interference

**Likelihood in next version:** Low—requires architectural changes; current release pattern suggests maintenance mode.

---

## 7. User Feedback Summary

| Category | Insight |
|----------|---------|
| **Pain Point** | Cannot use RivonClaw alongside Tencent's QClaw—forced tool exclusivity |
| **Use Case** | Comparative AI assistant usage; fallback tooling; task-specific selection |
| **Satisfaction** | Neutral to frustrated—installation friction (addressed in v1.7.8) but runtime conflicts persist |
| **Dissatisfaction** | No maintainer visibility on interoperability; zero response time on active issue |

**Emerging Pattern:** Users treat AI assistants as **composable infrastructure**, not monolithic replacements. Projects ignoring interoperability will face adoption friction in multi-tool workflows.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#30](https://github.com/gaoyangz77/rivonclaw/issues/30) | 1 day | 🟡 Medium | Maintainer acknowledgment, port conflict triage, reproduction guidance |

**Assessment:** The project has **no long-unanswered critical issues** due to low issue volume overall. However, the complete absence of maintainer response to #30 within 24 hours—during a release day—suggests **reactive rather than proactive community management**.

**Recommendation for maintainers:** 
1. Acknowledge #30 with request for logs (`lsof -i`, proxy settings)
2. Document known incompatibilities
3. Consider dynamic port allocation in future architecture

---

*Digest generated from gaoyangz77/easyclaw and gaoyangz77/rivonclaw repositories. Data cutoff: 2026-03-30.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*