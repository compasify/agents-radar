# OpenClaw Ecosystem Digest 2026-05-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-23 00:24 UTC

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

# OpenClaw Project Digest — 2026-05-23

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active contributor base and rapid development velocity. However, the **imbalanced merge ratio** (386 open PRs vs. 114 merged/closed) suggests a potential bottleneck in code review and maintainer bandwidth. No new releases were published today, despite significant ongoing work across security hardening, platform expansion, and core runtime stability. The project appears to be in a **heavy development phase** with substantial architectural refactoring underway, including a major runtime internalization effort and SQLite migration for state management.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Description | Significance |
|:---|:---|:---|
| [#65212](https://github.com/openclaw/openclaw/pull/65212) | QMD path normalization for direct file collections | Fixes edge case in memory indexing |
| [#81304](https://github.com/openclaw/openclaw/pull/81304) | Preserve existing primary model during provider auth setup | Prevents unwanted model overrides |
| [#80882](https://github.com/openclaw/openclaw/pull/80882) | WhatsApp presence keepalive eliminating ~30-min connection flaps | **Major reliability fix** for WhatsApp channel |
| [#72262](https://github.com/openclaw/openclaw/issues/72262) | WhatsApp 408 disconnect troubleshooting runbook (docs, closed) | Operational documentation |
| [#9303](https://github.com/openclaw/openclaw/issues/9303) | OpenAI Whisper execute permissions (bug, closed) | Quick permission fix |

### Active PRs Nearing Merge

| PR | Description | Status |
|:---|:---|:---|
| [#84649](https://github.com/openclaw/openclaw/pull/84649) | Plugin-system cold start performance optimization | Ready for maintainer look |
| [#85533](https://github.com/openclaw/openclaw/pull/85533) | Codex API key paste authentication fix | Ready for maintainer look |
| [#85541](https://github.com/openclaw/openclaw/pull/85541) | Context pressure preflight for tool-heavy sessions | Ready for maintainer look |
| [#85258](https://github.com/openclaw/openclaw/pull/85258) | QQBot partial tool progress delivery | Ready for maintainer look |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 105 | 75 | **Cross-platform parity** | Enterprise/users need Linux/Windows desktop clients matching macOS feature set; indicates strong demand beyond Apple's ecosystem |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases | 24 | 1 | Mobile distribution | Lowering barrier to entry for non-technical Android users; submitted by AI assistant signals automation in issue reporting |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | 14 | 0 | **Reliability/orchestration** | Production users need guaranteed task completion with observability; silent failures unacceptable for business workflows |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit support | 13 | 0 | Rich messaging | Enterprise Slack users need interactive, formatted outputs for CRM, BI, ops dashboards |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets / API key protection | 12 | 4 | **Security architecture** | Preventing prompt injection exfiltration of credentials; critical for multi-tenant and regulated environments |

### Key PRs with High Engagement Potential

| PR | Focus | Risk Flags |
|:---|:---|:---|
| [#85341](https://github.com/openclaw/openclaw/pull/85341) | **Internalize OpenClaw agent runtime** (steipete) | XL size, compatibility/auth/security boundary risks |
| [#81402](https://github.com/openclaw/openclaw/pull/81402) | **Move runtime state to SQLite** (steipete) | XL size, reverted once already, major architecture change |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **P0** | [#85240](https://github.com/openclaw/openclaw/issues/85240) | **Cross-user privacy leakage** via `relevant-memories` semantic recall without `sender_id` isolation | ❌ Closed—needs verification |
| **P1** | [#85333](https://github.com/openclaw/openclaw/issues/85333) | `openclaw doctor --fix` **4-5x performance regression** (55s → 229s+) from session snapshot path traversal | ❌ Open |
| **P1** | [#55334](https://github.com/openclaw/openclaw/issues/55334) | Gateway **OOM from unbounded `sessions.json` growth** with duplicated `skillsSnapshot` | ❌ Open |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion **silently lost** — no retry, notification, or auto-restart | ❌ Open |
| **P1** | [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP parent session **stuck until refresh** waiting for child completion | ❌ Open |
| **P1** | [#57019](https://github.com/openclaw/openclaw/issues/57019) | Session write lock race — async release can **delete newly-acquired lock** | [#57019](https://github.com/openclaw/openclaw/issues/57019) linked PR |
| **P1** | [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI webchat **duplicates every assistant reply** (regression from #5964/#39469) | ❌ Open |
| **P1** | [#58479](https://github.com/openclaw/openclaw/issues/58479) | Approval dialog succeeds but **exec never consumes approval** (closed—regression) | ✅ Closed |
| **P2** | [#53399](https://github.com/openclaw/openclaw/issues/53399) | Browser control server hangs: chrome-devtools-mcp spawn stuck in Gateway | ❌ Open |
| **P2** | [#25574](https://github.com/openclaw/openclaw/issues/25574) | Config warnings **logged repeatedly** on every reload, spamming logs | ❌ Open |

### Regressions Identified Today
- **Performance**: `doctor --fix` severely degraded in 2026.5.20 ([#85333](https://github.com/openclaw/openclaw/issues/85333))
- **Messaging**: Control UI reply duplication in 2026.4.21 ([#71992](https://github.com/openclaw/openclaw/issues/71992))
- **Approval flow**: Previously working approval consumption broke ([#58479](https://github.com/openclaw/openclaw/issues/58479), now closed)

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (High Demand + Clear Scope)

| Feature | Issue | Signals |
|:---|:---|:---|
| **Native secrets management** (AWS SM, Vault) | [#13610](https://github.com/openclaw/openclaw/issues/13610) | Security-critical, blocks enterprise adoption, config plaintext pain |
| **Filesystem sandboxing config** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | Security-focused, config-driven, partial implementation attempted |
| **Per-model usage logging / cost tracking** | [#13219](https://github.com/openclaw/openclaw/issues/13219) | Operational necessity, users parsing JSONL manually |
| **Auto-update with scheduling** | [#12855](https://github.com/openclaw/openclaw/issues/12855) | Existing primitives present, needs workflow orchestration |
| **Session snapshots (save/load)** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | Common dev workflow, enables experimentation |

### Medium-Term (Architectural or Product Decisions Needed)

| Feature | Issue | Blockers |
|:---|:---|:---|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | Platform expertise, CI/CD, maintenance burden |
| **Slack Block Kit** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | Rich UI complexity, Slack API evolution |
| **Pre-response enforcement hooks** ("hard gates") | [#13583](https://github.com/openclaw/openclaw/issues/13583) | Core agent architecture change, safety-critical |
| **Capability-based permissions** | [#12678](https://github.com/openclaw/openclaw/issues/12678) | Default-deny model, skill manifest changes |
| **Safe/unsafe ClawdBot modes** | [#6731](https://github.com/openclaw/openclaw/issues/6731) | Sandbox architecture, possibly Rust rewrite |

### Predicted for Next Release
- **Gemini 3.1 Flash-Lite GA migration** ([#80380](https://github.com/openclaw/openclaw/issues/80380)) — straightforward model string update
- **QQBot partial tool progress** ([#85258](https://github.com/openclaw/openclaw/pull/85258)) — PR ready for merge
- **LINE Flex message quota optimization** ([#81299](https://github.com/openclaw/openclaw/pull/81299)) — delivery fix

---

## 7. User Feedback Summary

### Critical Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Silent failures in production** | Subagent tasks lost without retry/notification ([#44925](https://github.com/openclaw/openclaw/issues/44925)), approval flows hanging ([#58479](https://github.com/openclaw/openclaw/issues/58479)) | 🔴 Critical |
| **Memory/resource leaks** | Gateway OOM ([#55334](https://github.com/openclaw/openclaw/issues/55334)), unbounded session growth, doctor --fix path traversal ([#85333](https://github.com/openclaw/openclaw/issues/85333)) | 🔴 Critical |
| **Security hardening gaps** | Secrets in plaintext ([#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610)), cross-user memory leakage ([#85240](https://github.com/openclaw/openclaw/issues/85240)), no filesystem sandboxing ([#7722](https://github.com/openclaw/openclaw/issues/7722)) | 🔴 Critical |
| **Platform coverage holes** | No Linux/Windows desktop ([#75](https://github.com/openclaw/openclaw/issues/75)), no prebuilt Android APKs ([#9443](https://github.com/openclaw/openclaw/issues/9443)) | 🟡 High |
| **Messaging channel reliability** | WhatsApp disconnects, Telegram/Discord reply routing failures, LINE quota issues | 🟡 High |

### Positive Signals
- Strong community engagement (105 comments on cross-platform request)
- Active security-conscious contributions (masked secrets, sandboxing, policy enforcement)
- Enterprise-oriented feature requests (Slack Block Kit, AWS deployment guides, cost tracking)

---

## 8. Backlog Watch

### Issues Needing Maintainer Decision (>3 months old, high impact)

| Issue | Age | Blocker | Risk if Stalled |
|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ~5 months | Platform expertise, resource allocation | Losing non-Apple enterprise market |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets | ~3.5 months | Security review, architecture design | Credential exfiltration incidents |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot | ~3.5 months | Product decision on sandbox strategy | Security incidents, "rewrite in Rust" distraction |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre-response enforcement hooks | ~3.5 months | Core architecture change, safety review | Unsuitable for finance/ops high-stakes use |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery | ~3.5 months | Catalog generation system redesign | Stale model lists, poor OpenRouter UX |

### PRs Stalled on Author/Proof

| PR | Stalled Since | Need |
|:---|:---|:---|
| [#82955](https://github.com/openclaw/openclaw/pull/82955) Install script validation | May 17 | Author response on review feedback |
| [#83535](https://github.com/openclaw/openclaw/pull/83535) WhatsApp QA RTT optimization | May 18 | Real-behavior proof, large surface area |
| [#47090](https://github.com/openclaw/openclaw/pull/47090) Session archiving | March 15 | Behavior proof, dirty candidate status |
| [#85341](https://github.com/openclaw/openclaw/pull/85341) Internalize runtime | May 22 | **Massive XL PR**—needs staged review |

### Architectural Debt Accumulating

- **SQLite migration** ([#81402](https://github.com/openclaw/openclaw/pull/81402)): Reverted once, high-risk retry
- **Runtime internalization** ([#85341](https://github.com/openclaw/openclaw/pull/85341)): 40+ extensions touched, compatibility nightmare
- **Plugin system thrash** ([#84649](https://github.com/openclaw/openclaw/pull/84649)): Performance fix needed before further plugin bloat

---

*Digest generated from 500 issues and 500 PRs updated 2026-05-23. Data source: github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
*Date: 2026-05-23 | Data Source: Community Digests*

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **unprecedented development velocity** across multiple parallel projects, with daily issue/PR counts in the hundreds for leading projects. The landscape has bifurcated into **reference-grade platforms** (OpenClaw, IronClaw) pursuing enterprise-grade reliability and **specialized frameworks** (NanoClaw, ZeroClaw, Moltis) optimizing for specific deployment contexts—local-first, containerized, voice-first, or multi-channel messaging. A critical tension pervades all projects: balancing rapid feature iteration against production stability, with channel integration fragility (WhatsApp protocol changes, Slack auth regressions) and memory/state management emerging as universal pain points. The ecosystem shows early signs of **cross-project coordination needs** (LobsterAI↔OpenClaw gateway protocol extensions) and convergent architectural patterns around pluggable memory backends, sandboxed execution, and provider-agnostic model routing.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merge/Close Rate | Health Assessment |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 | 500 | None | 22.8% PR merge (114/500) | ⚠️ **High velocity, bottlenecked review** — 386 open PRs indicate maintainer bandwidth crisis |
| **NanoBot** | 7 | 20 | None | 60% PR merge (12/20) | ✅ Healthy — responsive maintenance, rapid critical bug closure |
| **Hermes Agent** | 50 | 50 | None | 18% PR merge (9/50), 8% issue close (4/50) | ⚠️ **Engaged community, constrained maintainers** — 92% issue open rate concerning |
| **PicoClaw** | 10 | 20 | Nightly (v0.2.8-nightly) | 60% PR merge (12/20), 70% issue close (7/10) | ✅ Stable maintenance — proactive stale cleanup, batch processing |
| **NanoClaw** | 6 | 31 | None | 90% PR merge (28/31) | ✅ **Exceptional throughput** — near-zero backlog, same-day merges |
| **NullClaw** | 0 | 4 | None | 0% merge (0/4) | ⚠️ **Stagnant** — 46-day PR age, zero community engagement |
| **IronClaw** | 23 | 50 | None | 28% PR merge (14/50) | ⚠️ **Rewrite strain** — "Reborn" architecture accumulating debt, 12-day E2E failure |
| **LobsterAI** | 1 | 21 | **2026.5.22** | 57% PR merge (12/21) | ✅ Strong engineering, security backlog risk |
| **Moltis** | 8 | 9 | None | 100% issue resolution (7/7), 100% PR merge (9/9) | ✅ **Exemplary responsiveness** — median <2 day resolution |
| **CoPaw** | 24 | 23 | None | 43% PR merge (10/23), 29% issue close (7/24) | ⚠️ Feature velocity outpacing QA — critical data loss bug unaddressed |
| **ZeroClaw** | 37 | 50 | None | 28% PR merge (14/50) | ⚠️ Pre-release sprint stress — 30:7 open/closed issue ratio |
| **TinyClaw** | 0 | 0 | None | N/A | 🔴 **Inactive** — no activity |
| **ZeptoClaw** | 0 | 0 | None | N/A | 🔴 **Inactive** — no activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-50× larger than any peer — validates reference architecture status |
| **Channel breadth** | WhatsApp, Telegram, Discord, Slack, LINE, QQBot | Most comprehensive messaging integration matrix |
| **Enterprise feature depth** | Subagent orchestration, ACP protocol, memory systems | Leading in multi-agent coordination primitives |
| **Security investment** | Masked secrets, filesystem sandboxing, policy enforcement | Most mature security architecture (though gaps remain) |

### Technical Approach Differences
- **Runtime internalization** (#85341): Aggressive architectural consolidation vs. peers' modular/plugin approaches (NanoBot's CLI-Anything, ZeroClaw's trait-based decoupling)
- **SQLite state migration** (#81402): Centralized state management vs. PicoClaw's per-message timestamping, NanoClaw's transcript rotation
- **Provider abstraction**: Heavyweight auth composition (IronClaw's "RebornProductAuthServices") vs. OpenClaw's direct provider integration

### Community Size Comparison
OpenClaw's **105-comment single issue** (#75 Linux/Windows apps) exceeds total daily issue volume of NanoBot, PicoClaw, and NanoClaw combined. However, this scale creates **inverse health**: 22.8% merge rate vs. NanoClaw's 90% and Moltis's 100%. OpenClaw functions as **ecosystem upstream** (LobsterAI depends on its gateway protocol) but risks **maintainer burnout** from unreviewed contribution backlog.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **WhatsApp reliability** | OpenClaw, Hermes, PicoClaw, NanoClaw, ZeroClaw | Protocol recovery post-April 2026 bump; QR display; keepalive/connection flaps; arm64 builds |
| **Memory/state management** | OpenClaw, NanoBot, NanoClaw, ZeroClaw, IronClaw | Unbounded growth prevention (sessions.json, transcript files); persistence guarantees; consolidation/reflection ("Dream Mode") |
| **Docker/container production readiness** | Moltis, NanoClaw, PicoClaw, Hermes | Sandbox path resolution; host mount detection; rootless Podman; image size optimization (5.6GB→2GB) |
| **Multi-provider model routing** | OpenClaw, NanoBot, NanoClaw, CoPaw, NullClaw | Codex/Claude parity; custom provider auth; parameter mapping (Gemini `max_tokens`); dynamic discovery |
| **Security hardening** | OpenClaw, NanoBot, PicoClaw, LobsterAI, Moltis | Secrets management (AWS SM, Vault); API key masking; SSRF prevention; IPC isolation; filesystem sandboxing |
| **Subagent/orchestration reliability** | OpenClaw, LobsterAI, IronClaw, PicoClaw | Silent failure detection; completion guarantees; parent-child session lifecycle; real-time persistence events |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation, maximum channel coverage | Enterprise multi-channel deployers | Monolithic runtime, heavy internalization |
| **NanoBot** | Local-first image generation, CLI extensibility | Developers, privacy-conscious users | Modular skill system, aggressive i18n |
| **Hermes Agent** | Cross-platform computer-use, federated protocols | Power users, privacy ideologues | Gateway plugin architecture, TUI/dashboard |
| **PicoClaw** | Embedded/IoT deployment, agent-to-agent communication | Raspberry Pi, edge compute | Go-based, lightweight, turn-profile policies |
| **NanoClaw** | Provider choice velocity, multi-channel ops | Cost-conscious operators, OpenAI ecosystem | Bun runtime, scoped permissions, rapid iteration |
| **NullClaw** | Decentralized/Web3 AI (NEAR), cron scheduling | Web3 developers, automation engineers | Zig-based, minimal, blockchain-integrated |
| **IronClaw** | Enterprise SaaS platform, "Reborn" rewrite | NEAR ecosystem, enterprise customers | Rust, lane-based architecture, product adapters |
| **LobsterAI** | Desktop UX polish, subagent observability | End users, knowledge workers | Electron, SQLite persistence, cowork engine |
| **Moltis** | Voice-first telephony, Docker-native | Call centers, voice agents | Rust, Twilio integration, vault opt-out |
| **CoPaw** | Chinese market channels, plugin ecosystem | WeChat/DingTalk enterprise users | Python, Tauri desktop, cron automation |
| **ZeroClaw** | TUI interface, Dream Mode autonomy | Terminal-native developers, researchers | Rust, MemoryStrategy trait, ACP protocol |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Development)
| Project | Indicators | Risk Factor |
|:---|:---|:---|
| **NanoClaw** | 90% merge rate, same-day turnaround | Apple Container branch divergence — skill maintenance |
| **Moltis** | 100% resolution, <2 day median | May mask discovery rate; single maintainer (`penso`) dependency |
| **NanoBot** | Critical bug same-day closure, feature responsiveness | Heartbeat architecture drift (#1443 vs. #3028) |

### Tier 2: Scale Strain (High Volume, Bottlenecked)
| Project | Indicators | Risk Factor |
|:---|:---|:---|
| **OpenClaw** | 500/500 daily, 386 open PRs | Maintainer bandwidth crisis; architectural debt accumulation |
| **IronClaw** | 73 items, 36 open PRs, 12-day E2E failure | Rewrite quality debt; no production releases during Reborn |
| **ZeroClaw** | 87 items, 30 open issues, pre-release sprint | Regression rate rising; 153-commit revert audit unresolved |

### Tier 3: Stabilizing/Maintenance Mode
| Project | Indicators | Risk Factor |
|:---|:---|:---|
| **PicoClaw** | Proactive stale cleanup, nightly builds | Embedded user attrition; unresolved bugs closed as stale |
| **Hermes Agent** | Low merge rate, high open ratio | Community enthusiasm exceeding maintainer capacity |
| **CoPaw** | Channel fixes prioritized, core bugs chronic | Chat history data loss (#4620) eroding trust |

### Tier 4: Stagnant/Inactive
| Project | Status | Concern |
|:---|:---|:---|
| **NullClaw** | 46-day PR, zero issues | Contributor disengagement risk |
| **TinyClaw, ZeptoClaw** | No activity | Project viability |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Provider pluralism over monoculture** | NanoClaw Codex parity (#2580), NanoBot Ollama + OpenAI image gen, CoPaw GPT-5.5 urgency | Design for swapability; avoid Claude/OpenAI lock-in; expect same-day model support demands |
| **Memory as first-class architecture** | ZeroClaw MemoryStrategy trait (#6850), NanoBot MECE consolidation (#3952), OpenClaw SQLite migration | Abstract memory early; plan for consolidation, reflection, and pluggable backends |
| **Channel integration as critical infrastructure** | WhatsApp protocol crisis across 5+ projects, Slack auth regressions | Treat messaging protocols as volatile dependencies; build abstraction layers, not direct integrations |
| **Security as adoption gate** | Enterprise requests for Vault, sandboxing, masked secrets; LobsterAI security PRs stalled 6+ weeks | Security cannot be retrofitted; default-deny, capability-based permissions emerging as standard |
| **Self-hosted / local-first premium** | Ollama image gen, rootless Podman, vault opt-out, bridge daemons | Privacy and cost consciousness driving architecture; cloud-only solutions face adoption friction |
| **Agent orchestration beyond hierarchy** | PicoClaw agent-to-agent (#2929), IronClaw subagent spawn design, OpenClaw ACP | Peer-to-peer and parent-child patterns converging; expect "agent mesh" requirements |
| **Observability as feature** | ZeroClaw OTel spans, NanoClaw context introspection, NanoBot `doctor` command | Operational visibility is user-facing; build diagnostics in, not on |

---

*Report compiled from 12 project digests representing 1,247 GitHub events on 2026-05-22/23.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-23

## 1. Today's Overview

NanoBot showed **strong development velocity** with 20 PRs updated in the last 24 hours (12 merged/closed, 8 open) and 7 active issues (4 still open). The project is in an active **consolidation phase**: no new release was cut, but maintainers merged substantial work across CLI tooling, image generation infrastructure, WebUI polish, and memory system architecture. Notably, the team closed a critical Anthropic API compatibility bug and shipped first-class Ollama image generation support, while simultaneously pushing forward experimental features like BM25-based skill routing and a `nanobot doctor` diagnostic command.

---

## 2. Releases

**No new releases** — Version remains unchanged. No migration notes required.

---

## 3. Project Progress

### Merged/Closed PRs Today (12 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2364](https://github.com/HKUDS/nanobot/pull/2364) | BorisTsang | **Prevent cron job self-duplication** by injecting anti-recursion directive | Fixes critical heartbeat scheduling bug; closes duplicate task creation loop |
| [#3964](https://github.com/HKUDS/nanobot/pull/3964) | yu-xin-c | Fill remaining WebUI locale keys (es, fr, id, ko, vi) | Internationalization completeness for 5 languages |
| [#3965](https://github.com/HKUDS/nanobot/pull/3965) | Re-bin | **CLI Apps Windows CI coverage** — platform-neutral mocking | Removes Unix-only test assumptions; enables Windows CI for PRs |
| [#3928](https://github.com/HKUDS/nanobot/pull/3928) | Hinotoi-agent | **Security fix**: validate redirect targets before fetching | Closes SSRF vulnerability in `web_fetch` redirect handling |
| [#3963](https://github.com/HKUDS/nanobot/pull/3963) | Re-bin | **CLI Apps integration** via CLI-Anything registry | New extensibility surface: install CLI tools as nanobot apps |
| [#3962](https://github.com/HKUDS/nanobot/pull/3962) | yu-xin-c | Fill zh-TW and ja locale keys | East Asian i18n parity |
| [#3929](https://github.com/HKUDS/nanobot/pull/3929) | HaisamAbbas | Unify image provider HTTP handling + document Gemini base URLs | Code health; reduces provider-specific technical debt |
| [#3961](https://github.com/HKUDS/nanobot/pull/3961) | Yuxin-Lou | Deduplicate Responses API replay item IDs | Fixes Codex conversation resumption failures |
| [#3946](https://github.com/HKUDS/nanobot/pull/3946) | HaisamAbbas | **Add Ollama image generation support** | Major local-first feature; enables x/z-image-turbo and similar models |
| [#3954](https://github.com/HKUDS/nanobot/pull/3954) | ZegWe | **OpenAI + Codex image generation provider support** | Expands commercial image gen coverage |
| [#3960](https://github.com/HKUDS/nanobot/pull/3960) | chengyongru | Refactor `apply_patch`: remove deprecated patch mode, keep edits-only | Breaking tool API cleanup; reduces maintenance surface |
| [#3957](https://github.com/HKUDS/nanobot/pull/3957) | Re-bin | Fix misleading WebUI file edit counters | UX polish; removes phantom edit indicators |

**Key themes**: Image generation infrastructure maturation (3 PRs), WebUI internationalization (2 PRs), CLI extensibility launch, security hardening, and memory/execution reliability fixes.

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|:---|:---|:---|
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) WebUI conversation closes after first response | **6 comments** | **Highest engagement**. Root cause: WebSocket channel configuration under Debian gateway-as-service deployment. User `aurel-appsthru` confirmed fix; closed 2026-05-22. Signals: WebUI stability in self-hosted/gateway modes is a **deployment-sensitive pain point**. |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) Keep skill content in multi-turn conversations | 4 comments, 👍: 1 | Architectural enhancement request. Core tension: `read_file` tool is stateless per-turn, forcing redundant skill reloads. Community wants **skill context persistence** for multi-turn reasoning. Likely requires memory system changes or tool output caching. |
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) `/skill` lists disabled skills | 4 comments | Configuration system bug: `disabledSkills` array not respected by skill enumeration. User `mraad` also filed related enhancement [#3958](https://github.com/HKUDS/nanobot/issues/3958) same day — suggests **active skill system redesign** is on their mind. |

**Underlying needs**: (1) **Reliable WebUI in production/self-hosted configs**, (2) **Skill system architecture evolution** — from static file loading to stateful, context-aware capability management, (3) **Configuration truthfulness** — disabled means disabled.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **Critical** | [#3956](https://github.com/HKUDS/nanobot/issues/3956) Anthropic API 400 error from list-typed tool results | **CLOSED** | [#3956](https://github.com/HKUDS/nanobot/issues/3956) (same-day closure) | `read_file` on images produces `list` content blocks; breaks Anthropic API on history replay. **Production-impacting** for vision workflows. |
| **High** | [#3028](https://github.com/HKUDS/nanobot/issues/3028) Heartbeat triggers duplicate cron tasks | **OPEN** | [#2364](https://github.com/HKUDS/nanobot/pull/2364) merged today | Cron self-duplication causing spam greetings. PR #2364 provides directive-based fix; issue still open pending verification. |
| **Medium** | [#3959](https://github.com/HKUDS/nanobot/issues/3959) `/skill` lists disabled skills | **OPEN** | None yet | Configuration leakage; affects user trust in skill governance. |
| **Medium** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) WebUI conversation closes after first response | **CLOSED** | Implied in closure | WebSocket/session management fragility in gateway mode. |

**Stability assessment**: Rapid closure of critical Anthropic bug (same-day) demonstrates responsive maintenance. Heartbeat cron issue has pending fix verification gap — recommend closing #3028 if #2364 resolves it.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Ollama image generation** | [#3941](https://github.com/HKUDS/nanobot/issues/3941) → [#3946](https://github.com/HKUDS/nanobot/pull/3946) merged | **Shipped** | Merged; enables local image models |
| **OpenAI/Codex image generation** | [#3954](https://github.com/HKUDS/nanobot/pull/3954) merged | **Shipped** | Merged; completes commercial provider matrix |
| **CLI Apps / CLI-Anything integration** | [#3963](https://github.com/HKUDS/nanobot/pull/3963) merged | **Shipped** | New extensibility paradigm launched |
| **`nanobot doctor` diagnostic** | [#3776](https://github.com/HKUDS/nanobot/pull/3776) open | **High** | 10-check health command; reduces support burden; PR mature since May 14 |
| **BM25-lite skill router** | [#3865](https://github.com/HKUDS/nanobot/pull/3865) open | **Medium-High** | ~60% system prompt reduction; performance/cost win; needs review bandwidth |
| **MECE memory consolidation** | [#3952](https://github.com/HKUDS/nanobot/pull/3952) open | **Medium** | Deep architectural change; addresses duplication bloat; may need iteration |
| **Manifest LLM router** | [#3568](https://github.com/HKUDS/nanobot/pull/3568) open | **Medium** | Gateway provider addition; stalled since April 30 |
| **Weather skill → example** | [#3958](https://github.com/HKUDS/nanobot/issues/3958) open | **Low-Medium** | Straightforward; blocked by skill system redesign discussion |
| **Skill persistence in multi-turn** | [#3846](https://github.com/HKUDS/nanobot/issues/3846) open | **Uncertain** | Requires design decision; not yet PR'd |

**Prediction**: Next release will likely bundle image generation GA, CLI Apps, and `nanobot doctor`. BM25 router and memory consolidation are candidate dark-horse features if review bandwidth permits.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **WebUI reliability in self-hosted/gateway mode** | [#3884](https://github.com/HKUDS/nanobot/issues/3884), [#3966](https://github.com/HKUDS/nanobot/pull/3966) (CLI image rendering fix) | High — deployment-blocking |
| **Heartbeat/cron spam and poor context awareness** | [#3028](https://github.com/HKUDS/nanobot/issues/3028), [#1443](https://github.com/HKUDS/nanobot/pull/1443) (silent reasoning) | Medium-High — UX degradation |
| **Skill system confusion** (disabled listed, no persistence, bloat) | [#3959](https://github.com/HKUDS/nanobot/issues/3959), [#3846](https://github.com/HKUDS/nanobot/issues/3846), [#3865](https://github.com/HKUDS/nanobot/pull/3865) | Medium — architectural |
| **Anthropic API compatibility** | [#3956](https://github.com/HKUDS/nanobot/issues/3956) | Critical but fixed |
| **Configuration/debugging opacity** | [#3776](https://github.com/HKUDS/nanobot/pull/3776) (doctor command demand) | Medium |

### Use Cases Emerging
- **Local-first AI**: Ollama image generation demand (#3941) — users want full-stack local alternative to OpenAI
- **CLI-heavy workflows**: CLI Apps integration (#3963) suggests power-user automation demand
- **Multi-language deployment**: Aggressive i18n pushes (4 PRs) indicate global user base growth

### Satisfaction Signals
- Rapid bug closure (Anthropic fix same-day)
- Feature responsiveness (Ollama image gen requested May 20, merged May 22)

### Dissatisfaction Signals
- Long-running PRs (#1443 heartbeat since March 2, #3568 Manifest since April 30) suggest review bottleneck
- Skill system accumulating "papercut" issues without cohesive redesign

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat reasoning/notification decoupling | **~82 days** (March 2) | **High** — core UX feature; conflicts with #3028 fix | Maintainer decision on heartbeat architecture; merge or close |
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) Manifest LLM router | **~23 days** (April 30) | Medium — provider addition | Review for gateway provider registry design |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) Heartbeat cron duplication | **~42 days** (April 11) | Medium — fix merged, issue stale | Verify #2364 resolution; close if fixed |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) Skill persistence in multi-turn | **~8 days** (May 15) | Medium — needs design | Awaiting maintainer architectural guidance |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) BM25 skill router | **~7 days** (May 16) | Medium — performance win | Code review; potential milestone feature |

**Critical concern**: PR #1443 (heartbeat redesign) and issue #3028 (heartbeat bug) represent **divergent approaches to the same subsystem**. #2364 merged a tactical fix; #1443 proposes strategic refactor. Maintainers should reconcile these to prevent architectural drift.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-23. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-23

## 1. Today's Overview

Hermes Agent saw **intense development activity** on 2026-05-23 with **50 issues and 50 PRs updated in the last 24 hours**, though **zero new releases** and a concerning **92% open rate** for issues (46/50) and **82% for PRs** (41/50). The project shows **high community engagement but potential maintainer bottleneck**, with only 4 issues and 9 PRs reaching closure. Activity clusters around **gateway stability** (Telegram/Discord/Signal/WhatsApp), **state management reliability**, and **cross-platform expansion** (Windows computer-use, multi-stage Docker builds). The volume of P1-critical bugs suggests production reliability remains a primary concern.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total, 4 shown with significance)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#30664](https://github.com/NousResearch/hermes-agent/pull/30664) | HushUr2Pups8008 | **Security fix**: Hardened scratch workspace cleanup with marker-based provenance validation, path traversal protection | Prevents arbitrary directory deletion in Kanban plugin |
| [#30665](https://github.com/NousResearch/hermes-agent/pull/30665) | orlandoburli | Added `kanban.default_workspace` config option | User-configurable default workspace (superseded by #30668) |
| [#24661](https://github.com/NousResearch/hermes-agent/pull/24661) | briandevans | Fixed `gateway_restart_notification` bridge from `config.yaml` to `PlatformConfig` | Long-standing config wiring bug resolved |
| [#28208](https://github.com/NousResearch/hermes-agent/issues/28208) | jacobburrell | **Closed issue**: WhatsApp gateway silent-response handling | Corrected assumption that all turns require outbound messages |

### Notable Open PRs Advancing Features

| PR | Author | Summary | Stage |
|:---|:---|:---|:---|
| [#30660](https://github.com/NousResearch/hermes-agent/pull/30660) | f-trycua | **Windows computer-use support** via `cua-driver-rs` cross-platform backend | Ready for review — removes macOS-only gate |
| [#27437](https://github.com/NousResearch/hermes-agent/pull/27437) | nthrow | **Multi-stage Docker build**: 5.6GB → 2GB image, 100s → 10s startup | Performance-critical infrastructure |
| [#30663](https://github.com/NousResearch/hermes-agent/pull/30663) | hfm77788 | Deterministic runtime skill bundles + L1 compact context + insights split | Core agent architecture improvement |
| [#30595](https://github.com/NousResearch/hermes-agent/pull/30595) | bubg61 | "Nebula Frost" design system rollout for TUI/dashboard | UI/UX modernization |

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement + significance)

| # | Item | Comments | 👍 | Underlying Need |
|:---|:---|:---:|:---:|:---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | **CLOSED** Response truncation on output length limit | 33 | 4 | **Core reliability**: Users need predictable long-form generation; fix validates output chunking strategy |
| [#15602](https://github.com/NousResearch/hermes-agent/issues/15602) | Google Workspace multi-account support | 4 | 9 | **Professional/enterprise use**: Power users manage multiple identities; high vote count signals strong demand |
| [#19471](https://github.com/NousResearch/hermes-agent/issues/19471) | `--profile` gateway crash loop (SIGTERM→SIGKILL) | 4 | 0 | **Production stability**: Event loop lifecycle management under process supervision |
| [#2988](https://github.com/NousResearch/hermes-agent/issues/2988) | XMPP chat support with OMEMO encryption | 2 | 7 | **Privacy/self-hosting ideology**: Counterweight to proprietary protocol dominance; aligns with open-source ethos |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | Cloud sync for all configurations across devices | 3 | 6 | **Multi-device workflow**: Hermes currently trapped on single machine; friction for laptop/desktop users |

**Analysis**: The 33-comment #7237 closure shows community investment in debugging fundamental generation behavior. The 9-upvote #15602 and 7-upvote #2988 reveal two distinct user segments: **productivity power users** (enterprise tooling) and **privacy-conscious self-hosters** (federated protocols). Both are underserved.

---

## 5. Bugs & Stability

### Critical (P1) — Production-Impacting

| Issue | Description | Fix PR? | Risk |
|:---|:---|:---|:---|
| [#30636](https://github.com/NousResearch/hermes-agent/issues/30636) | `state.db` corruption from SIGTERM during launchd shutdown under high load | **YES**: [#30654](https://github.com/NousResearch/hermes-agent/pull/30654) | Data loss, state reset, session corruption |
| [#30623](https://github.com/NousResearch/hermes-agent/issues/30623) | `hermes -z` oneshot exits 0 silently before API call when stdout is non-TTY | No | Silent failures in automation/CI/SSH |
| [#19471](https://github.com/NousResearch/hermes-agent/issues/19471) | `--profile` gateway crash loop after SIGTERM→SIGKILL | No | Service unavailability, restart storms |

### High (P2) — Significant Degradation

| Issue | Description | Fix PR? | Risk |
|:---|:---|:---|:---|
| [#30653](https://github.com/NousResearch/hermes-agent/issues/30653) | Model picker ignores `key_env` on custom_providers → "0 models listed" | No | Custom provider configuration broken |
| [#18362](https://github.com/NousResearch/hermes-agent/issues/18362) | `/busy` command is `cli_only` despite onboarding hints | **YES**: [#18366](https://github.com/NousResearch/hermes-agent/pull/18366) | UX inconsistency, gateway feature gap |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | Context compression interrupted by gateway messages | No | Context quality degradation, fallback summaries |
| [#30626](https://github.com/NousResearch/hermes-agent/issues/30626) | Gateway "profile-blind": ignores live profile switches | No | Configuration changes require restart |
| [#30586](https://github.com/NousResearch/hermes-agent/issues/30586) | macOS launchd domain hardcodes `gui/` — breaks SSH/non-console users | No | Headless/remote deployment blocked |
| [#30658](https://github.com/NousResearch/hermes-agent/pull/30658) | Model switch via `set_session_model` discards ACP-injected MCP toolsets | **PR open** | ACP/MCP integration fragility |

### Stability Assessment
**Concerning pattern**: Three P1 bugs involve **signal handling and process lifecycle** (SIGTERM, SIGKILL, non-TTY), suggesting fragile shutdown/startup choreography. The WAL corruption fix (#30654) is well-diagnosed but not yet merged. The high volume of gateway-related P2s indicates **platform abstraction layer stress** as adapters proliferate.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Votes | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|:---|
| [#15602](https://github.com/NousResearch/hermes-agent/issues/15602) | Google Workspace multi-account | 9 | **High** | Clear scope, existing OAuth infrastructure, enterprise demand |
| [#2988](https://github.com/NousResearch/hermes-agent/issues/2988) | XMPP with OMEMO encryption | 7 | Medium | Niche but aligned with project values; gateway plugin architecture supports it |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | Cloud/cross-device config sync | 6 | Medium | High user pain, but requires infrastructure decisions (encryption, storage backend) |
| [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) | Microsoft 365 Outlook skill | 0 | **High** | Author has working implementation, mirrors existing Google Workspace skill |
| [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) | Dynamic model routing by task complexity | 0 | Medium | Architectural change; overlaps with existing profile system |
| [#24415](https://github.com/NousResearch/hermes-agent/issues/24415) | OpenRouter as STT provider | 1 | **High** | Trivial provider addition, leverages existing key infrastructure |
| [#30640](https://github.com/NousResearch/hermes-agent/issues/30640) | Cursor SDK integration | 0 | Medium | "Vibe coding" trend alignment; complex two-phase design |

**Emerging themes**: 
- **Productivity suite parity** (Google ↔ Microsoft)
- **Federated/open protocol support** (XMPP counterweight to WhatsApp/Signal)
- **Intelligent resource routing** (model selection, not just model configuration)

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Silent failures / invisible errors** | #30623 (oneshot exits 0 with no output), #30601 (MCP EmbeddedResource dropped silently) | High |
| **Configuration portability** | #20510 (cross-device sync), #30661 (export master environment), #30626 (profile switching ignored) | High |
| **Gateway platform gaps** | #18362 (/busy missing on Telegram), #18848 (WhatsApp silent-skip), #28208 (WhatsApp forced replies) | Medium-High |
| **State durability** | #30636 (DB corruption), #30555 (parent session messages not persisted) | Critical |
| **Multi-identity management** | #15602 (Google multi-account), implied by profile isolation request #30585 | Medium |

### Use Cases (Inferred)

- **Automation/CI integration**: #30623 explicitly mentions SSH `ForceCommand`, cron, subprocess — Hermes used as headless tool
- **Shared/team infrastructure**: #30585 (profile isolation via Docker), #30586 (SSH-only macOS users)
- **Multi-platform personal assistant**: Simultaneous Telegram/Discord/Signal/WhatsApp with consistent behavior

### Satisfaction Signals
- Active PR contributions with working implementations (#25979 Outlook skill, #30660 Windows support)
- Detailed bug reports with logs and reproduction steps (#30636, #19471)

### Dissatisfaction Signals
- **"Onboarding hints" vs. reality mismatch** (#18362): Documentation promises features that don't exist
- **Configuration system complexity**: Multiple issues about `.env` loading order, `key_env` handling, profile propagation

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, significant impact)

| Issue | Age | Problem | Why Stalled? |
|:---|:---|:---|:---|
| [#2988](https://github.com/NousResearch/hermes-agent/issues/2988) | ~2 months | XMPP/OMEMO support | 7 upvotes, no maintainer response; gateway architecture should support |
| [#282](https://github.com/NousResearch/hermes-agent/issues/282) | ~3 months | Terminal blinking seizure-inducing | Closed 2026-05-22 after 2.5 months; fix finally merged — **was neglected too long** |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | ~6 weeks | Response truncation | Just closed; 33 comments suggests excessive debugging burden on users |

### PRs At Risk of Stagnation

| PR | Age | Value | Blocker |
|:---|:---|:---|:---|
| [#18366](https://github.com/NousResearch/hermes-agent/pull/18366) | 3 weeks | Fixes `/busy` gateway availability | Simple fix, unmerged despite clear bug report |
| [#20660](https://github.com/NousResearch/hermes-agent/pull/20660) | 2+ weeks | Native per-OS desktop control | Large scope, may need decomposition |
| [#27437](https://github.com/NousResearch/hermes-agent/pull/27437) | 6 days | 5.6GB→2GB Docker, 10x startup | Infrastructure-critical, needs review priority |

### Maintainer Action Recommended
1. **Merge #30654** (WAL corruption fix) — P1 data loss risk
2. **Triage #2988** (XMPP) — High community value, low implementation risk with plugin system
3. **Resolve #18366** vs. #18362 — Simple 1-line fix languishing
4. **Review #27437** — Massive operational improvement for containerized deployments

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-22/23. Project health: **Active development, high engagement, maintainer bandwidth constrained relative to community velocity**.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-23

## 1. Today's Overview

PicoClaw shows **healthy maintenance velocity** with 30 items updated in the last 24 hours (10 issues, 20 PRs) and an automated nightly build published. The project is actively clearing stale backlog items—7 issues and 12 PRs were closed, many tagged as stale—while 11 open PRs indicate ongoing feature development. Notably, the maintainer team appears to be conducting a **batch stale cleanup**, with multiple items from early May receiving simultaneous closure on 2026-05-22. The open PR pipeline is diverse, spanning security enhancements, provider compatibility, message bus infrastructure, and dependency maintenance.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.8-nightly.20260522.5bbebb5f](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) | Nightly (automated) | Automated build from `main` branch; **may be unstable**. No manual changelog provided. |

**No stable release this cycle.** The nightly build suggests v0.2.9 development is active on `main`. Users requiring stability should remain on v0.2.8.

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#2930](https://github.com/sipeed/picoclaw/pull/2930) | lc6464 | Security patch: bump `golang.org/x/net` to v0.55.0 for `govulncheck` findings | **Production-critical dependency fix** |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | LiusCraft | Add per-message `created_at` timestamps to Session API | Resolves [#2787](https://github.com/sipeed/picoclaw/issues/2787); frontend accuracy fix |
| [#2914](https://github.com/sipeed/picoclaw/pull/2914) | lxowalle | Add request-scoped context policies via `agents.defaults.turn_profile` | **Major feature**: turn-level control over history, system context, skills, tools |
| [#2827](https://github.com/sipeed/picoclaw/pull/2827) | Ashid332 | Fix Matrix `allow_from` filter breaking on MXID colons | Bugfix for [#2815](https://github.com/sipeed/picoclaw/issues/2815) |
| [#2822](https://github.com/sipeed/picoclaw/pull/2822) | bogdanovich | Dismiss child tool feedback after sync subturn completion | Subagent UX polish |
| [#2814](https://github.com/sipeed/picoclaw/pull/2814) | bogdanovich | Allow relative script paths in `exec` guard | Sandbox false-positive fix |
| [#2794](https://github.com/sipeed/picoclaw/pull/2794) | bogdanovich | Preserve origin context for async follow-ups | Routing reliability for async tools |
| [#2791](https://github.com/sipeed/picoclaw/pull/2791) | bogdanovich | Preserve Telegram topic context for final replies | Forum topic threading fix |
| [#2789](https://github.com/sipeed/picoclaw/pull/2789) | bogdanovich | Make tool feedback edit throttle configurable | Agent configurability |
| [#2756](https://github.com/sipeed/picoclaw/pull/2756) | bogdanovich | Preserve Telegram topic context (earlier iteration) | Superseded by #2791 |
| [#2921](https://github.com/sipeed/picoclaw/pull/2921) | dependabot | Bump `gronx` 1.19.7 → 1.20.0 | Cron scheduling library |
| [#2923](https://github.com/sipeed/picoclaw/pull/2923) | dependabot | Bump `line-bot-sdk-go` 8.19.0 → 8.20.0 | LINE channel support |

**Key advancement**: The `turn_profile` feature (#2914) represents a significant architectural enhancement, enabling dynamic turn-scoped policies that could power multi-tenant or safety-constrained deployments.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) — WhatsApp builds for arm64 | 6 comments, 👍1 | **Longest-running active issue** (opened Apr 22). Core need: Raspberry Pi Zero 2 users want pre-built binaries with WhatsApp support to avoid manual compilation. Suggests build system complexity is a barrier for embedded/IoT adopters. |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) — Agent-to-agent communication | 1 comment, created yesterday | **Strategic roadmap signal**. Recognizes gap between hierarchical delegation (`spawn`/`subagent`) and peer-to-peer agent cooperation. Could define v0.3.0 architecture. |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) — Media attachments in `message` tool | Open since May 11 | Rich outbound messaging; blocked on review? High-impact for Telegram users. |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) — Frontmatter tool policy filters | Open since May 9 | Agent capability governance; security-relevant. |

**Underlying needs**: (1) **Build accessibility** for constrained devices, (2) **Multi-agent orchestration** beyond hierarchy, (3) **Rich media UX** competitive with native bots.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#2817](https://github.com/sipeed/picoclaw/issues/2817) — Voice transcription not passed to LLM (receives `[voice]` placeholder) | **CLOSED (stale)** | None merged; root cause: stale `media://` reference after Groq Whisper success |
| 🟡 **Medium** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android v0.2.8 cannot access data from tabs | **CLOSED (stale)** | No linked PR; unclear if truly resolved or closed as stale |
| 🟡 **Medium** | [#2815](https://github.com/sipeed/picoclaw/issues/2815) — Matrix `allow_from` filter blocks all messages | **CLOSED** | ✅ [#2827](https://github.com/sipeed/picoclaw/pull/2827) merged |
| 🟡 **Medium** | [#2816](https://github.com/sipeed/picoclaw/issues/2816) — Matrix sender identity missing from agent context | **CLOSED (stale)** | No fix PR; feature gap remains |
| 🟢 **Low** | [#2785](https://github.com/sipeed/picoclaw/issues/2785) — Feishu notification center shows only first tool call | **CLOSED (stale)** | No fix PR; UX polish |

**Concern**: Two high/critical bugs (#2817 voice pipeline, #2744 Android data access) were closed as **stale without verified fixes**. This risks regressions or silent user frustration. The stale cleanup process may need tighter verification.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Agent-to-agent peer communication** | [#2929](https://github.com/sipeed/picoclaw/issues/2929) | Medium-High | Acknowledged architectural gap; aligns with multi-agent trend |
| **DeepSeek thinking controls** | [#2928](https://github.com/sipeed/picoclaw/pull/2928) | **High** | Open PR, provider parity feature, minimal risk |
| **Media attachments in messages** | [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Medium | Open PR, user-facing, needs review bandwidth |
| **Tool policy filters in frontmatter** | [#2838](https://github.com/sipeed/picoclaw/pull/2838) | Medium | Security feature, open PR, design review likely needed |
| **Pre-exec security scanning (Tirith)** | [#2877](https://github.com/sipeed/picoclaw/pull/2877) | Medium | Security enhancement, marked stale but recently updated |
| **WhatsApp arm64 builds** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Low-Medium | Build system change; may need CI investment |
| **Skill binary validation** | [#2351](https://github.com/sipeed/picoclaw/issues/2351) | Low | Stale since April, no PR |

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Severity |
|-------|-----------|----------|
| **Embedded build friction** | Raspberry Pi Zero 2 users manually compiling for WhatsApp | Workflow blocker |
| **Voice pipeline broken** | Groq Whisper users get `[voice]` placeholder instead of transcript | **Critical functional failure** |
| **Android data inaccessible** | Mobile/Termux users cannot access tab data | Platform adoption barrier |
| **Matrix integration gaps** | Missing sender identity, broken allowlists | Enterprise/self-host friction |
| **Message timestamp accuracy** | Frontend shows wrong times for historical messages | UX degradation (now fixed in #2788) |

### Satisfaction Signals
- **Proactive stale cleanup** indicates responsive maintenance
- **Per-message timestamps** merged after user report (#2787 → #2788)
- **Dependency security patches** applied promptly (#2930)

### Dissatisfaction Signals
- Stale closure of unresolved bugs (#2817, #2744) without fix verification
- Long-open enhancement requests with low engagement (#2625, #2351)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) WhatsApp arm64 builds | 31 days | User attrition on embedded platforms | Maintainer decision on build matrix expansion |
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) Skill binary validation | 47 days | LLM hallucination of capability | Design review; may need breaking change |
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) Tirith security scanning | 7 days (stale-tagged) | Security feature at risk of abandonment | Rebase confirmation, security review |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) Message bus backpressure | 2 days | Infrastructure reliability | Performance benchmarking, merge decision |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) Providers doc unification | 29 days | Documentation debt | Editorial review, low technical risk |

**Critical attention**: #2877 (Tirith security) and #2906 (backpressure) are infrastructure-quality items that should not stall. #2625 represents a **platform accessibility** gap that may affect PicoClaw's positioning for IoT/edge use cases.

---

*Digest generated from GitHub activity 2026-05-22. All links reference `github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-23

## 1. Today's Overview

NanoClaw showed **exceptional development velocity** with 31 PRs updated in the last 24 hours (28 merged/closed, 3 open) and 6 issues (4 active, 2 closed). No new releases were published. The project demonstrates strong maintainer throughput with near-zero PR backlog accumulation. However, **Apple Container support is actively deteriorating** with three newly reported breakages suggesting a neglected skill branch falling behind mainline's migration to Bun. The community is pushing hard on multi-channel reliability (WhatsApp, Signal, Telegram) and expanding AI provider options beyond Claude Code to Codex.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (28 total — selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2580](https://github.com/nanocoai/nanoclaw/pull/2580) | chiptoe-svg | **Full Codex-only installation support** — Codex as AI-coding CLI, sole agent provider, OneCLI credential management; skill catalog and persona parity with Claude Code | 🟢 Major — reduces vendor lock-in, opens to OpenAI ecosystem |
| [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) | IamAdamJowett | **Session transcript rotation** — caps oversized/old `projects/<cwd>/<session>.jsonl` to prevent unbounded growth blocking agent `Read` operations | 🔵 Critical reliability — fixes memory exhaustion in long-lived sessions |
| [#2573](https://github.com/nanocoai/nanoclaw/pull/2573) | matt1995ai | **Context-window introspection** — surfaces usage stats to agent so it can self-pace against token budget | 🟢 UX/performance — enables agent self-regulation |
| [#2572](https://github.com/nanocoai/nanoclaw/pull/2572) | bromleymindfulness | **Rootless Podman dual fix** — resolves `--user` subuid mapping and bind-mount ownership gotchas | 🟢 Platform expansion — enables unprivileged container runtime |
| [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) | ira-at-work | **RTK skill** — installs token-saving CLI proxy (60–90% savings on dev commands) with `PreToolUse` hooks | 🟢 Cost optimization — significant operational savings |
| [#2579](https://github.com/nanocoai/nanoclaw/pull/2579) | cfis | **WhatsApp 401 credential purge** — immediate auth cleanup on forced logout prevents retry loops | 🔵 Stability — prevents boot-loop on restart after ban/disconnect |
| [#2566](https://github.com/nanocoai/nanoclaw/pull/2566) | Hinotoi-agent | **Scoped channel approval** — prevents privilege escalation where scoped admins could claim unauthorized agent groups | 🔴 Security — closes authorization bypass |
| [#2567](https://github.com/nanocoai/nanoclaw/pull/2567) | floflo11 | **CLAUDE.local.md import fix** — per-group memory actually reaches agent (was documented but unimplemented) | 🟢 Fixes broken local memory feature |
| [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) | IamAdamJowett | **Drop `<messages>` batch envelope** — fixes Claude Agent SDK synthetic stub response | 🔵 Fixes multi-message batching regression |
| [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) | IamAdamJowett | **WhatsApp @mention rendering + shutdown race fix** | 🔵 Message fidelity + crash prevention |
| [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | IamAdamJowett | **WhatsApp formatting skill** — agents use protocol-correct `@<phone-digits>` syntax | 🟢 Agent UX for WhatsApp |
| [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) | snymanpaul | **Signal CLI 0.13+ compatibility** — reads `number` field instead of deprecated `account` | 🔵 Fixes Signal auth breakage on newer CLI |

**Infrastructure/Setup fixes:** [#2551](https://github.com/nanocoai/nanoclaw/pull/2551) (WhatsApp QR method docs), [#2557](https://github.com/nanocoai/nanoclaw/pull/2557) (splash text cleanup), [#2558](https://github.com/nanocoai/nanoclaw/pull/2558) (OneCLI URL subdomain), [#2563](https://github.com/nanocoai/nanoclaw/pull/2563) (scoped `--assistant-name`), [#2578](https://github.com/nanocoai/nanoclaw/pull/2578) (Telegram claim link), [#2592](https://github.com/nanocoai/nanoclaw/pull/2592) (Teams CLI docs), [#2593](https://github.com/nanocoai/nanoclaw/pull/2593) (default shared session mode).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **[#2580](https://github.com/nanocoai/nanoclaw/pull/2580) Codex-only installation** | Most impactful merged PR | **Underlying need:** Community wants AI provider choice, not Claude monoculture. Codex integration at parity level suggests strategic pivot or user demand for OpenAI models. |
| **[#2588](https://github.com/nanocoai/nanoclaw/issues/2588) Apple Container branch out of sync** | Critical open issue | **Underlying need:** macOS users want native-feeling container runtime without Docker Desktop. Branch neglect signals either resource constraint or strategic deprioritization of Apple's container ecosystem. |
| **[#2589](https://github.com/nanocoai/nanoclaw/issues/2589) `host.docker.internal` unresolvable in Apple Container** | Open, related to above | **Underlying need:** Network bridge between host services (OneCLI proxy) and microVM guests. Requires Apple Container-specific networking abstraction. |
| **[#2587](https://github.com/nanocoai/nanoclaw/issues/2587) Stale `npm run build` in Apple Container Dockerfile** | Open, related to above | **Underlying need:** Build system migration (Node→Bun) wasn't propagated to skill branches. Indicates need for CI gating on branch freshness or automated merge-forward. |
| **[#2590](https://github.com/nanocoai/nanoclaw/issues/2590) "I hate Node apps" — debugging without containers** | Open, emotional/frustrated tone | **Underlying need:** Better local development ergonomics, clearer Node version requirements, or alternative runtimes. SQLite wrapper's Node 22 requirement created dependency cascade. |

**Pattern:** Apple Container skill has **three blocking issues** reported same day by same user ([snymanpaul](https://github.com/snymanpaul)), suggesting either coordinated testing or sudden breakage discovery. The skill appears **unusable in current state**.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | Apple Container skill completely broken — branch won't execute `/convert-to-apple-container` | **No fix PR** — needs maintainer intervention |
| 🔴 **Critical** | [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | OneCLI proxy unreachable in Apple Container microVM | **No fix PR** — blocked by #2588 |
| 🟡 **High** | [#2587](https://github.com/nanocoai/nanoclaw/issues/2587) | Dockerfile build failure (stale npm script) | **No fix PR** — trivial fix, blocked by branch sync |
| 🟡 **High** | [#2555](https://github.com/nanocoai/nanoclaw/issues/2555) → [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) | Multi-message batching caused synthetic SDK response | **Fixed** ✅ |
| 🟡 **High** | [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) → [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) | Signal auth false-negative on CLI 0.13+ | **Fixed** ✅ |
| 🟢 **Medium** | [#2579](https://github.com/nanocoai/nanoclaw/pull/2579) | WhatsApp 401 → credential retry loop | **Fixed** ✅ |
| 🟢 **Medium** | [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) | WhatsApp mention rendering + shutdown race | **Fixed** ✅ |
| 🟢 **Medium** | [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) | Unbounded session transcript growth | **Fixed** ✅ |

**Regression risk:** The Node→Bun migration (#2587, #2588) created a **skill branch divergence** pattern that may affect other non-mainline branches.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Apple Container resurrection** | 3 blocking issues, same reporter | High — must fix or deprecate; current state damages credibility |
| **Better local dev / containerless debug** | [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) | Medium — may spawn documentation or `docker compose` alternative |
| **Multi-channel transcript metadata** | [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) (open) | High — small, non-breaking, community-requested for dashboards |
| **More AI provider backends** | [#2580](https://github.com/nanocoai/nanoclaw/pull/2580) Codex precedent | High — pattern established for pluggable providers |
| **Token/cost optimization tools** | [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) RTK skill | Medium — may expand to other compression/proxy integrations |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Emotion | Root Cause |
|:---|:---|:---|
| [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) | **Frustration/anger** | Node dependency hell, version pinning unclear, container mandate feels heavy |
| Apple Container trio | **Blocked/disappointed** | Skill branch neglect after mainline migration |
| WhatsApp/Signal auth flows | **Confusion** | External CLI tools (Baileys, signal-cli) version drift |

### Positive Signals
- **High merge velocity** — contributors see fast feedback (same-day merge for many PRs)
- **Provider choice** — Codex support shows responsiveness to ecosystem demands
- **Cost consciousness** — RTK skill, context window introspection show operational maturity

### Use Cases Emerging
- **Multi-channel operations** (Telegram + Discord monitoring dashboards in [#2521](https://github.com/nanocoai/nanoclaw/pull/2521))
- **Long-lived autonomous agents** (session rotation in [#2586](https://github.com/nanocoai/nanoclaw/pull/2586))
- **Security-conscious deployments** (rootless Podman [#2572](https://github.com/nanocoai/nanoclaw/pull/2572), scoped permissions [#2566](https://github.com/nanocoai/nanoclaw/pull/2566))

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **[#2521](https://github.com/nanocoai/nanoclaw/pull/2521) XML channel attributes** | 5 days open | Low — non-breaking, well-scoped | Maintainer review/merge |
| **Apple Container skill branch** | Unknown (predates Bun migration) | 🔴 **High** — completely broken, multiple entry points | Either: (a) fast-forward merge from main, (b) archive with deprecation notice, or (c) dedicated maintainer assignment |
| **General skill branch hygiene** | N/A | Medium | CI check for branch freshness against main; automated issue creation when APIs drift |

**Recommendation:** The Apple Container situation requires **immediate triage**. Three issues from one user in one day indicates either a critical user path or a frustrated contributor who did the testing the maintainers didn't. The cost of branch synchronization will compound daily.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-23

## 1. Today's Overview

NullClaw shows **steady but contained development activity** with four open pull requests updated in the past 24 hours, though no issues or releases emerged. The project appears to be in an **integration-heavy phase**, with contributors finalizing provider expansions, scheduling infrastructure, and POSIX compatibility fixes. All four PRs remain unmerged, suggesting either active review cycles or maintainer bandwidth constraints. No new issues were opened or closed, indicating either stable user experience or potentially reduced community engagement. The lack of releases since the tracked period signals that these in-flight features have not yet reached production readiness.

---

## 2. Releases

**No new releases** published as of 2026-05-23.

---

## 3. Project Progress

**No PRs were merged or closed today.** All four active pull requests remain in open status with recent activity (last updated 2026-05-22):

| PR | Status | Progress Indicator |
|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron subagent engine | Open, updated 2026-05-22 | Likely in final review; comprehensive feature set suggests nearing completion |
| [#922](https://github.com/nullclaw/nullclaw/pull/922) NEAR AI Cloud provider | Open, updated 2026-05-22 | Recently submitted (2026-05-21); initial integration phase |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) Curl probe transport failures | Open, updated 2026-05-22 | Fix refined; awaiting merge |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) POSIX nanosleep fix | Open, updated 2026-05-22 | Cross-platform compatibility work ongoing |

**Features advancing toward merge:**
- **Production-grade cron scheduling** with database persistence, worker queues, and security hardening
- **NEAR AI ecosystem integration** expanding cloud provider options
- **Observability improvements** via granular curl error propagation
- **Runtime correctness** on POSIX systems via proper thread suspension

---

## 4. Community Hot Topics

No issues or comment threads exist to analyze. Among PRs, **engagement metrics are uniformly minimal** (0 reactions, undefined/0 comments across all four), indicating either:
- Quiet, trust-based maintainer review processes
- Limited external community participation in code review
- Early-stage project with small contributor base

**Most structurally significant PR:** [#783](https://github.com/nullclaw/nullclaw/pull/783) — the cron subagent represents a **foundational infrastructure expansion** that enables time-based automation, a critical capability for AI agent platforms competing in the scheduling/orchestration space.

**Underlying need detected:** The NEAR AI provider addition ([#922](https://github.com/nullclaw/nullclaw/pull/922)) signals demand for **decentralized/cloud-agnostic AI inference**, aligning with broader industry movement toward Web3-integrated AI infrastructure.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **Medium** | [#891](https://github.com/nullclaw/nullclaw/pull/891) | Curl transport failures collapsed into generic errors, masking DNS/connect/TLS/timeout/read/write failures in provider health probes | **Fix PR open**, updated 2026-05-22 |
| **Medium** | [#878](https://github.com/nullclaw/nullclaw/pull/878) | `thread.sleep()` uses cooperative yield instead of actual OS suspension on POSIX, causing busy-wait behavior under `std.Io.Threaded` | **Fix PR open**, updated 2026-05-22 |

**No new bugs reported today.** Both known issues have active fix PRs in review. The POSIX sleep issue is particularly notable for **resource efficiency and correctness** in production deployments.

---

## 6. Feature Requests & Roadmap Signals

| Source | Feature | Likelihood in Next Release | Rationale |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | Cron-based scheduled agents/jobs | **High** | Most mature PR (opened 2026-04-07), comprehensive implementation, recent activity suggests finalization |
| [#922](https://github.com/nullclaw/nullclaw/pull/922) | NEAR AI Cloud provider | **Medium-High** | Straightforward provider integration pattern; recently submitted but complete |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | Granular curl error diagnostics | **High** | Small, focused fix; likely fast-tracked |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | POSIX-compliant thread sleep | **Medium** | Platform-specific; may need extended testing |

**Predicted next version focus:** Scheduling infrastructure (cron) + provider ecosystem expansion + reliability hardening.

---

## 7. User Feedback Summary

**No direct user feedback available** — zero issues opened/closed, zero comments on PRs.

**Inferred pain points from PR analysis:**
- **Provider observability gaps:** Users likely encountered undiagnosable probe failures, motivating [#891](https://github.com/nullclaw/nullclaw/pull/891)
- **Cross-platform runtime issues:** POSIX-specific thread behavior problems drove [#878](https://github.com/nullclaw/nullclaw/pull/878)
- **Scheduling needs:** The substantial cron implementation ([#783](https://github.com/nullclaw/nullclaw/pull/783)) suggests either preemptive platform building or responded user demand for time-based automation

**Satisfaction indicator:** Neutral-to-positive — no bug reports or complaints, but also minimal visible community engagement.

---

## 8. Backlog Watch

| PR/Issue | Age | Concern | Action Needed |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | **46 days** (2026-04-07) | Longest-running open PR; substantial feature at risk of merge conflicts or contributor fatigue | Maintainer review/merge or explicit blocking feedback |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | **23 days** (2026-04-30) | Platform correctness fix; extended delay may indicate testing resource constraints | CI validation on POSIX targets, maintainer sign-off |

**No stale issues** require attention (issue count: 0).

**Risk assessment:** The 46-day age of [#783](https://github.com/nullclaw/nullclaw/pull/783) exceeds typical healthy review cycles for active projects. Recommend maintainer prioritization to prevent contributor disengagement or bit-rot in this critical scheduling feature.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-05-23.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-23

## Today's Overview

IronClaw shows **exceptionally high development velocity** with 73 tracked items updated in 24 hours (23 issues, 50 PRs), indicating the project is in an intensive build phase. The "Reborn" architecture rewrite dominates all activity, with work streaming across six parallel "Lanes" and multi-phase feature sequences. No releases were cut today, suggesting the team is accumulating changes toward a larger milestone rather than shipping incrementally. The contributor base is active and specialized, with clear ownership patterns (serrrfirat on infrastructure/auth, henrypark133 on testing/extensions, hanakannzashi on auth lifecycle, zmanian on hooks framework). However, the 19:4 open-to-closed issue ratio and persistent nightly E2E failures signal accumulating technical debt that may require stabilization attention.

---

## Releases

**No new releases** — none published.

---

## Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #3878 | hanakannzashi | **feat(reborn): wire product auth composition seam** — Centralized `RebornProductAuthServices` as single composition point for all product auth flows; local-dev gets in-memory auth, production gets wired persistence | [PR #3878](https://github.com/nearai/ironclaw/pull/3878) |
| #3863 | serrrfirat | **Reborn skill asset access and execution adapter** — Final PR in skills stack; adds scoped skill bundle asset reader with progressive disclosure and first-party skill execution adapter | [PR #3863](https://github.com/nearai/ironclaw/pull/3863) |
| #3837 | henrypark133 | **Google Suite extensions design spec** — Design doc for Google Calendar (9 capabilities) + Gmail (6 capabilities); introduces `ironclaw_oauth` and `ironclaw_native_extensions` crates | [PR #3837](https://github.com/nearai/ironclaw/pull/3837) |

### Closed Issues Today

| Issue | Author | Summary | Link |
|:---|:---|:---|:---|
| #3803 | serrrfirat | **[Reborn] Lane 3: wire existing secrets/egress substrate through production tool composition** — Secrets injection and production composition for native, MCP, and WASM tools | [Issue #3803](https://github.com/nearai/ironclaw/issues/3803) |
| #3611 | serrrfirat | **[Reborn WebUI Beta] Implement minimal native WebChat v2 routes** — Native (non-ProductAdapter/WASM) WebChat v2 route set for beta | [Issue #3611](https://github.com/nearai/ironclaw/issues/3611) |
| #3626 | serrrfirat | **Bind WebUI caller and thread scope to canonical TurnScope** — Tenant/user/thread resolution and binding refs for WebUI | [Issue #3626](https://github.com/nearai/ironclaw/issues/3626) |
| #3625 | serrrfirat | **Add WebUI idempotency and accepted-message ledger** — Duplicate-submit protection for create-thread and send-message | [Issue #3625](https://github.com/nearai/ironclaw/issues/3625) |

### Key Feature Advances

- **Auth infrastructure maturing**: Product auth composition seam (#3878) closes, enabling OAuth, manual token, and credential lifecycle flows to plug into production uniformly
- **Skills system complete**: Asset access + execution adapter (#3863) finishes the Reborn skills stack
- **Google Extensions pipeline active**: 6-phase build sequence in progress (Phases 2-6 all have open PRs: #3894, #3895, #3896, #3898, plus design spec merged)
- **Hooks framework landed**: #3573 merged with follow-up PRs addressing deferred review items (#3911 perf, #3912 refactor, #3913 perf, #3914 tests)
- **Sandbox execution**: Docker sandbox command transport (#3900) adds tenant-isolated process execution

---

## Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#3702 Reborn: revise and implement binary-E2E test framework plan](https://github.com/nearai/ironclaw/issues/3702) | 4 comments | **Core quality infrastructure** — Follow-up to #3698; auditing 88 `tests/*.rs` files for Rust integration-test parity. Signals team recognizes testing debt in Reborn rewrite and is systematically addressing it before production. |
| 2 | [#3803 Lane 3: secrets/egress substrate](https://github.com/nearai/ironclaw/issues/3803) *(now closed)* | 2 comments | **Production readiness** — Closed after PRs merged; secrets injection was blocking tool composition for native/MCP/WASM tools. |
| 3 | [#3798 Design: subagent spawn for Reborn agent loop](https://github.com/nearai/ironclaw/issues/3798) | 2 comments | **Agent orchestration architecture** — Design proposal for spawning child agents within Reborn loop; Phase 4 draft PR #3872 exposed integration gap in blocking spawn parent recovery (#3875). |
| 4 | [#3094 Add approval/auth interaction services](https://github.com/nearai/ironclaw/issues/3094) | 2 comments | **UX safety layer** — P0 item; bridges blocked run-states into UI-safe flows. Now split into focused issues #3889 (approval) and #3888 (auth continuation). |
| 5 | [#3280 Add ProductWorkflow and InboundTurnService facade](https://github.com/nearai/ironclaw/issues/3280) | 2 comments | **Product API surface** — Central facade between ProductAdapters and host-layer services; 11 related issues indicate broad dependency. |

### Underlying Needs Analysis

- **Test confidence**: The E2E framework investment (#3702) and nightly failure (#3447) reveal tension between rewrite velocity and quality assurance
- **Composability**: Multiple "Lane" and "Phase" issues show architectural emphasis on pluggable, scoped services (auth, secrets, tools, workflows)
- **User trust**: Approval/auth services (#3094, #3889, #3891) indicate priority on safe, auditable agent behavior

---

## Bugs & Stability

| Severity | Item | Status | Details | Fix PR? |
|:---|:---|:---|:---|:---|
| **High** | [#3447 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/3447) | Open since 2026-05-10 | Full E2E / E2E (v2-engine) failing; last reported 2026-05-22 04:37 UTC on commit `030cfeb` | **None identified** — persistent failure |
| **Medium** | [#3875 subagent E2E §5.2: blocking spawn parent recovers after child completion](https://github.com/nearai/ironclaw/issues/3875) | Open | Integration gap: blocking `spawn_subagent` leaves parent in hung state after child completes; found during #3872 draft | Draft PR #3872 exists |
| **Medium** | [#3871 Track executor.rs decomposition](https://github.com/nearai/ironclaw/issues/3871) | Open | Architecture guideline violation: `executor.rs` exceeds large-file threshold; subagent handling in #3868 exacerbates | None yet — tracking only |

### Stability Assessment

The **nightly E2E failure is the critical concern** — 12 days without resolution suggests either test flakiness or fundamental v2-engine instability. The subagent blocking recovery gap (#3875) is a real functionality bug discovered during feature development, indicating the Reborn agent loop's concurrency model needs hardening.

---

## Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Google Calendar + Gmail extensions** | #3837 (design), #3894-#3898 (impl PRs) | **Very High** | 6-phase sequence nearly complete; OAuth provider, BlockedAuth resume, composition wiring, and Gmail package all in review |
| **Scheduled/cron trigger workflows** | [#3873 Trigger Loop](https://github.com/nearai/ironclaw/issues/3873) | Medium | New request; synthetic inbound message model fits Reborn architecture but depends on stable inbound workflow (#3280) |
| **Subagent spawn (blocking + async)** | [#3798](https://github.com/nearai/ironclaw/issues/3798), #3875 | High | Design approved, implementation in draft; blocking mode has recoverability bug to fix first |
| **Notion MCP capability** | [#3805](https://github.com/nearai/ironclaw/issues/3805) | Medium | "Lane 5" — blocked on extension-v2 catalog/runtime + secrets/auth composition lanes |
| **GitHub WASM read/write** | [#3806](https://github.com/nearai/ironclaw/issues/3806), #3910, #3909 | **Very High** | Read-only package (#3909) and egress test (#3910) in review; write path follows |
| **Safe user-scoped tool installs** | [#3905](https://github.com/nearai/ironclaw/issues/3905) | Medium | Security enhancement for third-party tool ecosystem; no implementation PR yet |
| **Durable approval-policy port** | [#3891](https://github.com/nearai/ironclaw/issues/3891) | Medium | Extends exact-invocation authority to policy-based pre-approval; depends on #3889 |

---

## User Feedback Summary

### Explicit Pain Points (from Issues)

| Issue | Pain Point | User Scenario |
|:---|:---|:---|
| [#2117 ironclaw-bridge](https://github.com/nearai/ironclaw/issues/2117) | Cloud-hosted IronClaw cannot access local files | Obsidian vaults, local project directories — "blocker for use cases" |
| [#3905](https://github.com/nearai/ironclaw/issues/3905) | No safe third-party tool install scope | Users want community tools without privilege escalation risk |

### Inferred from Development Direction

- **Integration breadth**: Heavy investment in Google, GitHub, Notion suggests users want agent connectivity to existing tool stacks
- **Auth friction**: OAuth + manual token + credential recovery flows (#3881-#3884) indicate current auth experience is incomplete or fragile
- **Deployment flexibility**: Docker sandbox (#3900), filesystem checkpoint store (#3908), and bridge daemon (#2117) show demand for hybrid cloud/local operation

### Satisfaction/Dissatisfaction Signals

- **Positive**: Rapid feature delivery, clear architectural vision ("Reborn"), active maintainer response (same-day issue updates)
- **Negative**: No releases to consume, nightly E2E failures suggest instability, complex issue dependencies may delay user-visible features

---

## Backlog Watch

| Issue/PR | Age | Blocker | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [#3447 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/3447) | 12 days | Unknown root cause | **Critical** — erodes release confidence | Maintainer investigation; consider quarantining flaky test or reverting offending commit |
| [#3702 Binary-E2E test framework](https://github.com/nearai/ironclaw/issues/3702) | 7 days | Requires test audit completion | Medium | henrypark133 progressing; needs review bandwidth |
| [#3094 Approval/auth interaction services](https://github.com/nearai/ironclaw/issues/3094) | 24 days | Split into #3889, #3888; auth side progressing | Medium | Approval side (#3889) needs implementation PR |
| [#2117 ironclaw-bridge](https://github.com/nearai/ironclaw/issues/2117) | 46 days | Design approved, no implementation PR | Low-Medium | Community contribution opportunity or scheduling |
| [#3573 ironclaw_hooks framework](https://github.com/nearai/ironclaw/pull/3573) | 10 days | **Merged** but 4 follow-up PRs needed | Low | #3911, #3912, #3913, #3914 all in review — batch merge? |

### Maintainer Attention Required

1. **E2E failure triage**: Assign owner to #3447 with daily status until resolved
2. **Review bandwidth**: 36 open PRs with 14 merged/closed suggests backlog risk; #3899 (budgets), #3900 (sandbox), #3903 (credentials) are large/complex
3. **Issue hygiene**: #3094 should be closed in favor of #3889/#3888 to reduce confusion

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-23

## 1. Today's Overview

LobsterAI saw **exceptionally high development velocity** on 2026-05-22 with **21 PRs updated** (12 merged/closed, 9 open) and **1 new release** shipped. The project demonstrates strong engineering momentum concentrated in the **subagent session system**, **cowork engine stability**, and **model configuration flexibility**. All merged PRs were authored by core team members `btc69m979y-dotcom` and `fisherdaddy`, indicating focused sprint activity. However, community contribution remains limited—no external PRs merged and **5 dependabot/ stale community PRs** remain unaddressed. The single active issue (#2036) reveals architectural coordination needs with the upstream OpenClaw gateway project.

---

## 2. Releases

### [LobsterAI 2026.5.22](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.22)

| Aspect | Details |
|--------|---------|
| **Release Date** | 2026-05-22 |
| **Focus Areas** | Subagent UX, model customization, thinking block display |

**What's Changed:**
- **feat:** Subagent session sidebar display and detail view — [PR #2011](https://github.com/netease-youdao/LobsterAI/pull/2011) by @btc69m979y-dotcom
- **feat:** Model custom parameters + thinking block display — [PR #2019](https://github.com/netease-youdao/LobsterAI/pull/2019) by @btc69m979y-dotcom
- **feat(cowork):** [Additional cowork-related features, truncated in source data]

**Breaking Changes / Migration Notes:** None explicitly documented. The subagent session persistence change ([PR #2034](https://github.com/netease-youdao/LobsterAI/pull/2034)) introduces automatic lazy backfill of legacy subagent sessions—no user action required.

---

## 3. Project Progress

### Merged/Closed PRs (12 total — all merged same day)

| PR | Author | Area | Summary | Impact |
|----|--------|------|---------|--------|
| [#2038](https://github.com/netease-youdao/LobsterAI/pull/2038) | fisherdaddy | Multi-area release | **Release 2026.5.19** — consolidated release PR covering subagent UX, artifacts preview, cowork engine stability, model config flexibility | 🚀 Major |
| [#2037](https://github.com/netease-youdao/LobsterAI/pull/2037) | fisherdaddy | renderer, main, im | IM-related copywriting optimization | 🔧 Polish |
| [#2035](https://github.com/netease-youdao/LobsterAI/pull/2035) | fisherdaddy | docs | Fix Qwen coding plan for Qwen 3.6 Plus | 🔧 Fix |
| [#2034](https://github.com/netease-youdao/LobsterAI/pull/2034) | btc69m979y-dotcom | main | **Persist subagent session messages to local SQLite DB** — dedicated `subagent_messages` table, lazy backfill, avoids network RPC on revisit | 🚀 Major |
| [#2033](https://github.com/netease-youdao/LobsterAI/pull/2033) | btc69m979y-dotcom | renderer, main, cowork | Fix subagent session sync bugs: missing tool results, sidebar highlight state, empty state handling, spawn error detection | 🐛 Critical fix |
| [#2032](https://github.com/netease-youdao/LobsterAI/pull/2032) | fisherdaddy | docs, main, openclaw | Fix model switch error with custom models | 🐛 Fix |
| [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031) | fisherdaddy | renderer, main, openclaw | Fix browser config invalid | 🐛 Fix |
| [#2030](https://github.com/netease-youdao/LobsterAI/pull/2030) | btc69m979y-dotcom | renderer, main, cowork | **Refactor: Subagent session reuses main conversation rendering pipeline** — extracts `ConversationTurnsView`, converts backend to full `CoworkMessage` format | 🚀 Major |
| [#2029](https://github.com/netease-youdao/LobsterAI/pull/2029) | btc69m979y-dotcom | renderer, main | Fix subagent sidebar style, duplicate tracking (toolCallId vs agentId), missing tool results | 🐛 Critical fix |
| [#2028](https://github.com/netease-youdao/LobsterAI/pull/2028) | fisherdaddy | renderer, im | UI update | 🔧 Polish |
| [#2027](https://github.com/netease-youdao/LobsterAI/pull/2027) | btc69m979y-dotcom | renderer, cowork | Fix subagent page sidebar toggle, draggable header, Mac window control padding | 🔧 Polish |

**Key Technical Advances:**
- **Subagent architecture maturation:** From simple ReactMarkdown rendering → full conversation pipeline reuse → local persistence → bug hardening across 5 iterative PRs
- **Performance:** Subagent sessions now load instantly from local DB after first fetch
- **Cross-platform polish:** Mac-specific window control fixes

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Analysis |
|------|----------|----------|
| [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) — OpenClaw gateway event enhancement | 1 comment, 0 reactions | **Cross-project coordination need**: Requests `agent:turn` or `agent:loop` events from OpenClaw gateway for real-time persistence ("真正实时落盘"). This is architectural—LobsterAI cannot fully implement reliable persistence without upstream protocol changes. |

**Underlying Need:** The subagent local persistence ([PR #2034](https://github.com/netease-youdao/LobsterAI/pull/2034)) appears to be a **workaround** for missing gateway broadcast events. The issue author `woxinsj` recognizes that without gateway-level turn/loop events, local persistence remains best-effort rather than guaranteed. This suggests:
- Tension between LobsterAI's rapid UX iteration and OpenClaw gateway's event protocol maturity
- Potential for data loss race conditions in current architecture

### Stale Community PRs with Engagement Potential

| PR | Age | Topic | Why It Matters |
|----|-----|-------|--------------|
| [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) | ~6 weeks | Theme color UI refactor | UX polish, no new dependencies, single-file change |
| [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) | ~6 weeks | Local usage statistics panel | User-facing analytics, data privacy (local SQLite only) |
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) | ~6 weeks | API proxy log security fix | **Security**: Prevents credential leakage in logs |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) | ~6 weeks | KV store IPC key whitelist | **Security**: Defense in depth for renderer process |

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|----------|------|--------|---------|
| **Critical (fixed)** | Subagent data integrity | ✅ Fixed in [#2033](https://github.com/netease-youdao/LobsterAI/pull/2033), [#2029](https://github.com/netease-youdao/LobsterAI/pull/2029) | Missing tool results, duplicate tracking via wrong ID key, spawn errors undetected |
| **High (fixed)** | Model switching with custom models | ✅ Fixed in [#2032](https://github.com/netease-youdao/LobsterAI/pull/2032) | Breaks user workflows with non-default model configurations |
| **High (fixed)** | Browser config invalid | ✅ Fixed in [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031) | Likely affects web browsing tool functionality |
| **Medium (fixed)** | Qwen 3.6 Plus coding plan | ✅ Fixed in [#2035](https://github.com/netease-youdao/LobsterAI/pull/2035) | Model-specific prompt/plan configuration |
| **Medium (architectural)** | Real-time persistence reliability | ⚠️ Open — [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | Depends on OpenClaw gateway protocol extension |

**Stability Assessment:** The concentrated bug fixes (#2029, #2033) suggest the subagent feature underwent **intensive stabilization** post-initial release. The pattern of "feature → refactor → bugfix → persistence → more bugfix" indicates healthy iterative development rather than instability.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|--------|--------|---------------------------|
| **OpenClaw gateway protocol extension** (`agent:turn`/`agent:loop` events) | Issue [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | Medium — requires upstream coordination |
| **Enhanced subagent observability** | PR [#2034](https://github.com/netease-youdao/LobsterAI/pull/2034) persistence + [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) events | High — clear investment trajectory |
| **Usage analytics dashboard** | Stale PR [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) | Medium — community contribution ready, needs review |
| **Security hardening (logs + IPC)** | Stale PRs [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534), [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) | Medium — mature contributions, security-critical |
| **UI theme system refresh** | Stale PR [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) | Low — aesthetic, lower priority than stability |

**Predicted Next Sprint Focus:** Given the subagent investment pattern, expect **cowork engine multi-agent orchestration** enhancements and **artifacts system** expansion (mentioned in release notes but not detailed in PRs).

---

## 7. User Feedback Summary

### Inferred Pain Points (from PR fix descriptions)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| Subagent sessions felt "second-class" vs. main sessions | Full pipeline reuse, sidebar integration, persistence | Resolved |
| Slow subagent reload / network dependency | Local DB persistence implemented | Resolved |
| Data loss / inconsistency in subagent tool execution | Multiple fixes for missing tool results, error detection | Resolved |
| Mac window control overlap | Specific 68px padding fix | Resolved |
| Model customization friction | Custom params + switch error fixes | Partially resolved |

### Architectural Friction (from #2036)

> "拿到这个事件后，才能真正做到实时落盘"  
> *(Only with this event can we truly achieve real-time persistence)*

**Core Tension:** Users/developers perceive the current persistence as **not truly real-time**. The local DB caching is acknowledged as intermediate solution. This suggests **reliability-conscious user base** — likely developers building on LobsterAI who need guarantees for production use.

---

## 8. Backlog Watch

### Critical: Stale Security PRs

| PR | Age | Risk if Unmerged | Action Needed |
|----|-----|------------------|---------------|
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) | 6+ weeks | **API keys in logs** — credential exposure in plaintext log files | Security review + merge |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) | 6+ weeks | **Renderer escape → sensitive data access** — bypasses intended isolation | Security review + merge |

### Maintenance: Dependency Updates

| PR | Age | Update | Risk of Staleness |
|----|-----|--------|-------------------|
| [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) | 4+ weeks | Vite 5.4.21 → 8.0.13 | Major version jump, build system |
| [#1764](https://github.com/netease-youdao/LobsterAI/pull/1764) | 4+ weeks | React 18.3.1 → 19.2.6 | Major version, concurrent features |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | 4+ weeks | Headless UI 1.7.19 → 2.2.10 | Breaking API changes likely |
| [#1763](https://github.com/netease-youdao/LobsterAI/pull/1763) | 4+ weeks | Vite React plugin 4.7.0 → 6.0.1 | Build toolchain |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 7+ weeks | Electron 40.2.1 → 42.1.0, electron-builder | **Critical runtime dependency** |

### Recommendation

The **Electron 42 upgrade** ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) and **React 19 upgrade** ([#1764](https://github.com/netease-youdao/LobsterAI/pull/1764)) are becoming urgent — Electron in particular has security implications. The security PRs [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) and [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) should be prioritized over feature work given their low implementation cost and high defensive value.

---

*Digest generated from GitHub activity on 2026-05-22. Project health: **Strong engineering velocity, security backlog needs attention, cross-project coordination emerging as architectural constraint**.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-23

## 1. Today's Overview

Moltis demonstrated **exceptional engineering velocity** on 2026-05-22, with **9 PRs merged/closed** against **8 updated issues** (7 resolved, 1 new). The project shows a **95%+ closure rate** on touched issues, indicating a highly responsive maintainer team led by core contributor `penso`. No new releases were cut, suggesting these changes will likely roll into the next versioned release. The activity pattern reveals intense focus on **Docker deployment reliability**, **voice/telephony polish**, and **agent documentation accessibility**—all critical for production adoption.

---

## 2. Releases

**None today.** All changes remain in `main` branch. Given the volume of merged fixes, a patch release (likely `20260523.x` or `20260524.x` based on prior versioning convention `20260518.01`) is **strongly anticipated**.

---

## 3. Project Progress

### Merged/Closed PRs (9 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1044](https://github.com/moltis-org/moltis/pull/1044) | penso | **Expose local Moltis docs to agents** — Multi-source docs resolution (`MOLTIS_DOCS_DIR`, packaged, source, embedded fallback) with local config template generation | Agents now self-document; reduces hallucination, improves onboarding |
| [#1043](https://github.com/moltis-org/moltis/pull/1043) | penso | **Piper TTS WAV metadata fix** — Distinct `AudioFormat::Wav`, proper WAV wrapping for non-PCM requests | Fixes audio format confusion; enables proper browser playback |
| [#1042](https://github.com/moltis-org/moltis/pull/1042) | penso | **Arbitrary chat attachments** — Web UI file uploads with MIME type preservation, document cards in pen stream | Unlocks RAG/document workflows beyond images |
| [#1041](https://github.com/moltis-org/moltis/pull/1041) | penso | **OpenAI TTS MP3 fallback** — Uses MP3 for OpenAI-compatible providers (Speaches), preserves OGG/Opus for others | Resolves compatibility with self-hosted TTS stacks |
| [#1040](https://github.com/moltis-org/moltis/pull/1040) | penso | **Docker sandbox media reads** — Fallback to container reads, `docker cp` stderr preservation, path resolution fixes | Critical Docker deployment reliability |
| [#1039](https://github.com/moltis-org/moltis/pull/1039) | dependabot | **OpenSSL 0.10.79 → 0.10.80** | Security/maintenance |
| [#1033](https://github.com/moltis-org/moltis/pull/1033) | penso | **Vault encryption opt-out** — `auth.vault_enabled` toggle, authenticated disable API with decryption of all secrets | Enables simpler deployments; reduces operational complexity |
| [#1034](https://github.com/moltis-org/moltis/pull/1034) | penso | **Twilio gather speech dispatch** — Fixes `SpeechResult`/`Digits` handling order, adds regression tests | Resolves telephony "deaf agent" bug |
| [#1035](https://github.com/moltis-org/moltis/pull/1035) | penso | **Docker host mount auto-detection** — Container scan fallback for sandbox path resolution and browser profile mounts | Foundation for robust Docker sandboxing |

**Key thematic advances:**
- **Docker production readiness** (3 PRs: #1040, #1035, #1033)
- **Voice/telephony reliability** (2 PRs: #1043, #1034, #1041)
- **Agent capability expansion** (#1044, #1042)

---

## 4. Community Hot Topics

### Most Active: [#977](https://github.com/moltis-org/moltis/issues/977) — Browser sandbox fails when Moltis runs in Docker
- **5 comments** | **CLOSED** via #1035, #1040
- **Author:** TLA020 | **Created:** 2026-05-06
- **Underlying need:** Users running Moltis in containerized environments (Proxmox/LXC → Docker) need **first-class sandbox support** without host privilege escalation. The complexity of nested containerization (Docker-in-LXC) exposes path resolution and mount visibility as architectural pain points.

### Emerging: [#1028](https://github.com/moltis-org/moltis/issues/1028) — Agent should have access to Moltis docs OOTB
- **2 comments** | **CLOSED** via #1044
- **Author:** IlyaBizyaev
- **Underlying need:** Users expect **self-documenting agents** that don't hallucinate Moltis APIs. The rapid resolution (issue filed 2026-05-20, fixed 2026-05-22) signals maintainer prioritization of developer experience.

### Pattern Analysis
Both high-activity issues involve **operational complexity reduction**—users want Moltis to "just work" in sophisticated deployment topologies without manual configuration archaeology.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#1032](https://github.com/moltis-org/moltis/issues/1032) — Twilio: agent greets but never responds | **CLOSED** | #1034 | Complete telephony failure; speech input not dispatched. Regression tests added. |
| 🔴 **High** | [#977](https://github.com/moltis-org/moltis/issues/977) — Browser sandbox fails in Docker | **CLOSED** | #1035, #1040 | Core tool failure in containerized deployments; affects file operations and web browsing |
| 🟡 **Medium** | [#1030](https://github.com/moltis-org/moltis/issues/1030) — OpenAI TTS requires `opus`, Speaches incompatible | **CLOSED** | #1041 | Provider compatibility breakage; self-hosted TTS stacks blocked |
| 🟡 **Medium** | [#1037](https://github.com/moltis-org/moltis/issues/1037) — `send_image`/`send_document` fail in Docker | **CLOSED** | #1040 | Media messaging broken in Docker; related to #977 root cause |
| 🟢 **Low** | [#1045](https://github.com/moltis-org/moltis/issues/1045) — No code block syntax highlighting in light mode | **OPEN** | *None yet* | UI polish; no functional impact |

**Stability assessment:** Exceptional. **100% of high/medium severity bugs closed same-day** they were updated. The single remaining open issue is cosmetic.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Local docs for agents** | #1028 → #1044 | ✅ **Shipped** | Already merged |
| **Arbitrary file attachments** | #1036 → #1042 | ✅ **Shipped** | Already merged |
| **Piper TTS audio conversion** | #1029 → #1043 | ✅ **Shipped** | Already merged |
| **Vault opt-out** | #1033 | ✅ **Shipped** | Already merged |

**Predicted near-term roadmap:**
- **Syntax highlighting fix** (#1045) — trivial, likely next commit
- **Enhanced Docker/Podman sandbox detection** — pattern established, may extend to rootless containers
- **Additional TTS provider normalizations** — OpenAI compatibility layer suggests ongoing multi-provider abstraction work

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Docker deployment fragility** | #977, #1037, #1035, #1040 | 🔴 Critical — multiple users, multiple subsystems |
| **Telephony "silent agent" failures** | #1032 | 🔴 Critical — complete feature breakage |
| **Self-hosted TTS incompatibility** | #1030 | 🟡 Moderate — Speaches users blocked |
| **UI theming inconsistencies** | #1045 | 🟢 Minor |

### Use Cases Emerging
- **Homelab/self-hosted**: Proxmox → LXC → Docker nesting (#977)
- **Voice-first agents**: Twilio telephony with real-time speech (#1032)
- **Document-heavy workflows**: Arbitrary attachments for RAG (#1036)
- **Privacy-conscious deployments**: Vault opt-out for simpler auth (#1033)

### Satisfaction Signal
**Strong positive**: 7/7 resolvable issues closed within 24h of last update; #1028 (docs OOTB) implemented in **2 days** from request. Users `IlyaBizyaev`, `karlmdavis`, `lukemalcolm` all saw their issues resolved with dedicated PRs.

---

## 8. Backlog Watch

**No critical backlog detected.** All updated issues from the past 24h are either closed or trivial (#1045). 

However, **monitoring recommendation**: The rapid closure velocity may mask **issue discovery rate**—if users are finding bugs faster than they file them, the 7-closed pattern could represent backlog clearing rather than steady-state health. No stale issues (>14 days without response) were present in today's data.

**Potential attention needed:**
- [#1045](https://github.com/moltis-org/moltis/issues/1045) — Awaiting assignment; good first issue for new contributors

---

*Digest generated from GitHub activity 2026-05-22. Moltis core team responsiveness: **exceptional** (median issue resolution: <2 days).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-23

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 24 issues and 23 PRs updated in the last 24 hours, indicating an active development cycle despite no new release. The project is currently at **v1.1.8.post1** with a significant bug backlog (17 open vs. 7 closed issues), suggesting quality assurance is lagging behind feature velocity. Community engagement is strong with multiple first-time contributors submitting PRs. Critical stability issues persist around chat history reliability, proxy configuration, and model compatibility—particularly with newer models like GPT-5.5 and MiniMax M2.5. The maintainer team appears responsive to WeChat and DingTalk channel fixes but may be stretched on core backend issues.

---

## 2. Releases

**No new releases** (v1.1.8.post1 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total)

| PR | Author | Description | Status |
|:---|:---|:---|:---|
| [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) | hongxicheng | **fix(DingTalk)**: Decode percent-encoded Chinese filenames in file sending | ✅ Merged |
| [#4627](https://github.com/agentscope-ai/QwenPaw/pull/4627) | hongxicheng | **fix(WeChat)**: Replace instance-level token invalid flag with per-request meta flag | ✅ Merged |
| [#4618](https://github.com/agentscope-ai/QwenPaw/pull/4618) | hongxicheng | **fix(WeChat)**: Skip subsequent sends when context_token becomes invalid | ✅ Merged |
| [#4621](https://github.com/agentscope-ai/QwenPaw/pull/4621) | qbc2016 | **fix(gemini)**: Map `max_tokens` → `max_output_tokens`, unmask validation errors | ✅ Merged |
| [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) | weixizi | **feat(cron)**: Add "Clear Before Run" toggle for scheduled tasks | ✅ Merged |
| [#4395](https://github.com/agentscope-ai/QwenPaw/pull/4395) | aqilaziz | **test(security)**: Cover tool guard utilities | ✅ Merged |
| [#4626](https://github.com/agentscope-ai/QwenPaw/pull/4626) | Osier-Yi | **fix(qwenpaw-pet)**: Fix pet stuck in Done state on consecutive conversations | ✅ Merged |
| [#4623](https://github.com/agentscope-ai/QwenPaw/pull/4623) | zhaozhuang521 | **style(console)**: Update skill market page | ✅ Merged |
| [#4636](https://github.com/agentscope-ai/QwenPaw/pull/4636) | DICKQI | ~~feat(chat): Customizable slash command menu~~ (superseded by #4637) | ❌ Closed |
| — | — | Various duplicate/deprecated PRs | — |

**Key Advances:**
- **Channel reliability**: WeChat iLink token handling received three coordinated fixes, addressing silent message delivery failures
- **Internationalization**: DingTalk Chinese filename encoding resolved
- **Model compatibility**: Gemini/Gemma `max_tokens` parameter mapping fixed (closes [#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605))
- **Automation**: Cron jobs can now auto-clear context to prevent history pollution

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| 1 | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) Chat history disappeared | **12** | Data integrity / trust | Users need **reliable persistence**; this is a "critical bug" per reporter, suggesting database/ORM layer issues in session switching |
| 2 | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) DeepSeek think content parsing | **10** *(closed)* | Model output format compatibility | Standardization of reasoning model outputs (`<think>` tags) across providers |
| 3 | [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) ChatGPT-5.5 support | **8** | Cutting-edge model adoption | Users expect same-day support for new OpenAI models; indicates competitive pressure |
| 4 | [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) NO_PROXY env var ignored | **6** | Enterprise proxy configuration | Corporate/self-hosted deployments need granular proxy bypass control |

**Analysis**: The top issues reveal a tension between **rapid model proliferation** (DeepSeek, GPT-5.5, MiniMax variants) and **core infrastructure stability** (history, proxy, session management). Users are adopting QwenPaw in production environments where data loss and network configuration are blockers.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | Chat history intermittently disappears on session switch | ❌ None | **Data loss**, user trust erosion |
| 🟠 **High** | [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) | `NO_PROXY` environment variable ignored, forces proxy traffic | ❌ None | Enterprise deployment blocker, privacy risk |
| 🟠 **High** | [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | MiniMax-M2.5 returns XML think format, breaks instruction execution | ❌ None | Model provider compatibility, workflow interruption |
| 🟡 **Medium** | [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) | Voice transcription ignores Whisper config, uses browser Speech API | ❌ None | Feature degradation for self-hosted setups |
| 🟡 **Medium** | [#4616](https://github.com/agentscope-ai/QwenPaw/issues/4616) | "Dream awakening" task errors with WeChat channel (unconfigured) | ❌ None | Task system/channel coupling bug |
| 🟡 **Medium** | [#4619](https://github.com/agentscope-ai/QwenPaw/issues/4619) | Web UI visual inconsistencies (alignment, icon shapes) | ❌ None | Polish/UX debt |
| 🟢 **Low** | [#4631](https://github.com/agentscope-ai/QwenPaw/issues/4631) | Desktop app shows Python icon instead of QwenPaw branding | ❌ None | Branding issue |

**Regressions from recent changes**: The Gemini `max_tokens` fix (#4621) suggests v1.1.8.post1 introduced provider parameter validation that broke existing integrations. The chat history bug (#4620) is flagged as "existed for a long time"—chronic, not acute.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) | Mobile-responsive WebUI | **High** | Supports existing multi-channel strategy; large user base on mobile |
| [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) | Window size/position memory (Desktop) | **Medium** | Quality-of-life; Tauri desktop PR (#3813) in progress enables this |
| [#4633](https://github.com/agentscope-ai/QwenPaw/pull/4637) | Customizable slash command menu | **High** | PR already submitted (#4637), low-risk UX improvement |
| [#4624](https://github.com/agentscope-ai/QwenPaw/issues/4624) | Per-model retry/rate-limit config | **High** | Production multi-tenant need; aligns with existing provider manager work |
| [#4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) | Remote Playwright browser endpoint | **Medium** | Infrastructure cost savings; browser_use tool expansion |
| [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) | Plugin agent hooks (`register_agent_hook`) | **Medium-High** | Ecosystem enablement; LightRAG plugin author blocked |
| [#4632](https://github.com/agentscope-ai/QwenPaw/issues/4632) | Multi-line text write tool | **Medium** | Core agent capability gap; workarounds are brittle |
| [#4638](https://github.com/agentscope-ai/QwenPaw/pull/4638) | Session/message lifecycle hooks | **High** | Complements #4613; plugin ecosystem foundation |

**Next version candidates**: Slash command customization (#4637) and cron context clearing (#4434, merged) are likely v1.1.9 material. Per-model rate limiting (#4624) and mobile responsive design (#4635) represent larger architectural investments.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Data reliability** | "Chat history disappeared...critical bug and existed for a long time" ([#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)) | Severe |
| **Model support velocity** | "配置了好像不行" re: GPT-5.5 ([#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474)); MiniMax XML parsing ([#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)) | High |
| **Enterprise deployment friction** | NO_PROXY ignored ([#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)); proxy bypass critical for corporate users | High |
| **Channel reliability** | WeChat "success" but no delivery ([#4521](https://github.com/agentscope-ai/QwenPaw/issues/4521), closed); DingTalk filename encoding ([#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586), closed) | Medium (improving) |
| **Discovery/UX** | 20+ commands hidden, users "never discover without reading docs" ([#4633](https://github.com/agentscope-ai/QwenPaw/issues/4633)) | Medium |

### Positive Signals
- **Plugin ecosystem enthusiasm**: Multiple plugin authors (LightRAG, DataPaw) actively extending platform
- **First-time contributor growth**: 5+ new contributors in 24h indicates healthy onboarding
- **Channel diversity**: Users actively using WeChat, DingTalk, Feishu, QQ—QwenPaw's multi-channel strategy is working

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk if Stale |
|:---|:---|:---|:---|
| [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) Context check splits user/assistant pairs | **23 days** | Open, 3 comments | Chat history corruption; UI orphan messages |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x desktop app support | **29 days** | Open, "Under Review" | Desktop modernization blocked; window memory (#4634) depends on this |
| [#3707](https://github.com/agentscope-ai/QwenPaw/issues/3707) MiniMax M2.7 image support | **31 days** | Closed (fixed?) | May need verification; related to [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) MiniMax XML issue |
| [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) E2E test migration | **6 days** | Open | Testing infrastructure debt |
| [#4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) Security+agents unit tests (967 tests) | **6 days** | Open | CI gate improvement blocked |

**Maintainer attention needed**: 
1. **[#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)** (chat history) — oldest critical bug, highest user impact
2. **[#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984)** — root cause may be same as #4620; context compaction logic needs audit
3. **[#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)** — large architectural PR; needs review bandwidth to unblock desktop roadmap

---

*Digest generated from github.com/agentscope-ai/CoPaw data as of 2026-05-23.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-23

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 87 items updated in the last 24 hours (37 issues, 50 PRs), indicating an active pre-release sprint. The project is currently focused on **v0.8.0 stabilization** with heavy work on the TUI application, memory architecture refactoring, and channel protocol fixes. No new releases were cut today, suggesting the team is consolidating changes before a version bump. The 30:7 open-to-closed issue ratio and 36:14 open-to-merged PR ratio indicate substantial incoming work outpacing resolution—a typical pattern for fast-moving projects but worth monitoring for backlog accumulation. Critical infrastructure work spans WhatsApp protocol recovery, MCP tool filtering correctness, and a major memory strategy decoupling effort.

---

## 2. Releases

**None today.** The project remains on its existing release track with no new tags published.

---

## 3. Project Progress

### Merged/Closed PRs (14 total, key items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#6838](https://github.com/zeroclaw-labs/zeroclaw/pull/6838) | puneetdixit200 | **fix(doctor)**: Use configured model provider credentials | Resolves custom provider authentication failures in `doctor models` |
| [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) | alexandme | **fix(channels/whatsapp)**: Restore Apr-2026 protocol parity via whatsapp-rust 0.6 | Critical WhatsApp Web channel recovery post-protocol bump |
| [#6814](https://github.com/zeroclaw-labs/zeroclaw/pull/6814) | Project516 | Update labeler.yml for accurate CI labeling | DevEx improvement |
| [#6769](https://github.com/zeroclaw-labs/zeroclaw/pull/6769) | Project516 | Fix malformed links in philosophy.md | Documentation quality |
| [#6804](https://github.com/zeroclaw-labs/zeroclaw/pull/6804) | vernonstinebaker | Parametrize service template user | Deploy script hardening |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | alexandme | Enrich OTel tool spans with gen_ai.tool.* semantic conventions | Observability foundation |
| [#6748](https://github.com/zeroclaw-labs/zeroclaw/pull/6748) | Project516 | Optimize image assets | Repository hygiene |

**Key advancement**: WhatsApp channel stability is being restored after the April 2026 protocol disruption, with two related fixes landing (#6706 merged, #6246 closed). The doctor credential fix (#6838) closes a gap where configuration wasn't being respected for model listing.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment volume)

| # | Item | Comments | Core Tension |
|:---|:---|:---:|:---|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | **Dream Mode** — Periodic Memory Consolidation & Reflective Learning | 11 | Long-running P1 feature request; community wants autonomous agent self-improvement during idle periods. PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) in progress with 5-phase engine. |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | ~~WhatsApp Web protocol bump breakage~~ **[CLOSED]** | 6 | Crisis resolution—server-side protocol change broke all WhatsApp channels for ~4 weeks. Fix validates dependency update strategy. |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` no-op for real MCP tools + deferred_loading gap | 6 | **Tool system correctness**: Prefix-check bug causes skill tools to be misidentified as MCP tools, breaking filtering. PR [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) open with origin-based detection fix. |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 4 | **Governance scaling**: Project has outgrown manual triage; needs automated routing as contributor base expands. |

**Underlying needs**: (1) **Autonomous agent capabilities** — Dream Mode represents a shift from reactive to proactive agent behavior; (2) **Reliable channel integrations** — WhatsApp fragility exposed dependency on upstream protocol stability; (3) **Tool system predictability** — MCP/skill boundary confusion affects production deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **S1 — workflow blocked** | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` MCP prefix bug | OPEN | [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) | Skill tools misidentified as MCP; filter groups silently fail |
| **S1** | [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) Infinite tool-call loop on Termux/Android | OPEN, blocked | — | Repro needed; affects mobile/edge deployments |
| **S1** | [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) WhatsApp QR not displaying | OPEN | — | Onboarding regression; likely related to #6246 fix scope |
| **S1** | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) `vision_provider` silently ignored for multimodal | OPEN | — | Images routed to fallback provider; config parsing vs. runtime routing mismatch |
| **S1** | [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) Slack `bot_token` cannot use env var | OPEN | — | Regression of #6237; commit 5c2bfdc didn't fully resolve |
| **S2 — degraded** | [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) `setup.bat --minimal` produces 26 MB vs. expected 6 MB | OPEN | — | Windows build bloat; documentation/expectation mismatch or build config drift |
| **S2** | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) `show_tool_calls` missing from `[channel]` schema v3 | OPEN | — | Feature parity gap in config schema migration |

**Stability assessment**: Three S1 bugs opened in the last 48 hours (#6841, #6844, #6847) suggest recent changes introduced regressions. The WhatsApp and Slack channel integrations remain particularly fragile. The MCP tool filtering bug (#6699) is especially concerning for production use as it causes security/policy features to silently fail.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Maturity | v0.8.0 Likelihood |
|:---|:---|:---|:---:|
| **Dream Mode** (memory consolidation) | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849), [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) | PR in progress, 5-phase engine implemented | **High** — flagship feature |
| **TUI Agent Chat** | [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824), [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | Active integration branch | **High** — major UX initiative |
| **Runtime RPC + Unix socket transport** | [#6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837) | Design complete, implementation started | **Medium** — infrastructure enabler |
| **Session-scoped runtime overrides** | [#6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) | In progress | **Medium** — user flexibility |
| **ACP protocol extensions** (diff/file-proposal) | [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) | Partially shipped | **High** — completes approval flow |
| **MemoryStrategy trait decoupling** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC just opened | **Low** — architectural, likely v0.9.0 |
| **Telegram custom API endpoint** | [#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) | Accepted, unassigned | **Medium** — self-hosting demand |

**Prediction**: v0.8.0 will center on **TUI GA**, **Dream Mode beta**, and **ACP protocol completion**. The MemoryStrategy trait (#6850) signals v0.9.0 architectural direction toward pluggable memory backends.

---

## 7. User Feedback Summary

### Pain Points
- **Channel integration fragility**: WhatsApp protocol changes, Slack auth regressions, and Telegram API limitations (#6807) indicate users struggle with production deployments across messaging platforms. Self-hosting users particularly affected.
- **Configuration surprises**: `~`/`$HOME` in paths (#6079), env var vs. config precedence (#6844), schema v3 feature gaps (#6856) — config system has accumulated rough edges.
- **Windows experience**: Code page issues (#6704, fixed in #6772) and build size bloat (#6836) suggest Windows is a second-class citizen despite user demand.

### Use Cases Emerging
- **Mobile/edge deployment**: Termux/Android infinite loop (#6036) reveals users running agents on phones/tablets.
- **Custom provider integration**: Multiple issues around `custom:` provider handling (#6756, #6243) show enterprise/self-hosted LLM usage.
- **Multimodal workflows**: Vision provider routing (#6841) indicates image-in-message use cases growing.

### Satisfaction Signals
- Strong community engagement (11 comments on Dream Mode)
- Active external contributions (Project516, alexandme, nick-pape)
- "Best tool out there" — [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) opener

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) Audit: 153 commits lost in bulk revert | 29 days | **High** | Maintainer decision on recovery methodology; "help wanted" label but no assignee |
| [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) ARM64 Docker target | 51 days | High | Author action needed; CI complexity blocking merge |
| [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) Streaming decode error hangs runtime | 23 days | High | Reproduction needed; GPU utilization symptom suggests async runtime deadlock |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) Termux infinite loop | 30 days | High | Author needs to provide repro steps; currently blocked |

**Critical concern**: The 153-commit revert audit (#6074) represents significant technical debt. Without recovery, bug fixes and features from March 2026 remain unreleased. The "help wanted" label suggests maintainer bandwidth constraints.

---

*Digest compiled from 87 GitHub events on 2026-05-23. ZeroClaw is a fast-moving Rust-based AI agent framework with active development across runtime, memory, channels, and emerging TUI interfaces.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*