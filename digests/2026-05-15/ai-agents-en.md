# OpenClaw Ecosystem Digest 2026-05-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-15 00:23 UTC

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

# OpenClaw Project Digest — 2026-05-15

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving project with substantial community engagement. The project released 4 new versions recently, with the latest beta (`v2026.5.14-beta.1`) focusing on dependency streamlining and UI internationalization improvements. The issue-to-PR closure ratio remains heavily skewed toward open items (475 open issues, 450 open PRs), suggesting either rapid growth outpacing resolution capacity or a deliberate open-backlog culture. A significant policy enforcement initiative is underway across multiple XL-sized PRs, indicating maturation toward enterprise-grade governance. The community is actively pushing for cross-platform expansion (Linux/Windows apps), security hardening, and operational reliability improvements.

---

## 2. Releases

### [v2026.5.14-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.1)
- **Dependencies**: Route root ambient Node proxy agents through `@openclaw/proxyline`; drop root `proxy-agent`, `https-proxy-agent`, and `minimatch` dependencies
- **Control UI/i18n**: Add `pnpm ui:i18n:report` baseline report for hardcoded-copy focus areas and locale fallback metadata

### [v2026.5.12](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12)
- **Leaner installs**: WhatsApp, Slack, Amazon Bedrock, Anthropic Vertex, and related provider/plugin dependency cones moved out of core runtime — installs now pull only what you use
- **Telegram resilience**: Isolated polling, durable local spooling, safer group-media handling

### [v2026.5.12-beta.8](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.8) / [v2026.5.12-beta.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.7)
- **Amazon Bedrock**: Externalize Bedrock and Bedrock Mantle provider packages; core installs no longer pull AWS SDK dependencies unless explicitly installed
- **Plugins**: Externalize Slack, OpenShell sandbox, and Anthropic Vertex so their runtime dependency cones install only when needed

**Migration Note**: Users upgrading from pre-2026.5.12 should verify provider/plugin installations post-upgrade, as previously bundled integrations now require explicit installation.

---

## 3. Project Progress

### Merged/Closed Activity (25 issues, 50 PRs closed/merged in 24h)

**Policy & Governance Maturation** — A coordinated multi-PR effort by `giodl73-repo` is advancing OpenClaw toward enterprise policy enforcement:

| PR | Focus | Status |
|:---|:---|:---|
| [#80783](https://github.com/openclaw/openclaw/pull/80783) | Model, network, and MCP conformance checks | Open, XL |
| [#81104](https://github.com/openclaw/openclaw/pull/81104) | Runtime audit metadata and attestation enforcement | Open, XL |
| [#80407](https://github.com/openclaw/openclaw/pull/80407) | Conformance system with channel checks | Open, XL |
| [#80056](https://github.com/openclaw/openclaw/pull/80056) | Tool metadata conformance and runtime checks | Open, XL |

**Notable Fixes & Improvements Today:**

- **[#81965](https://github.com/openclaw/openclaw/pull/81965)** — Slack thread session seeding from true root messages (prevents context confusion in threaded conversations)
- **[#81964](https://github.com/openclaw/openclaw/pull/81964)** — Telegram default send client timeouts bounded (fixes 500-second hangs)
- **[#81704](https://github.com/openclaw/openclaw/pull/81704)** — LINE push silent failure on lowercased recipients fixed
- **[#81721](https://github.com/openclaw/openclaw/pull/81721)** — Diarized JSON transcript segments for media-understanding audio providers
- **[#80922](https://github.com/openclaw/openclaw/pull/80922)** — Command authorization planner with Tree-sitter-backed POSIX corpus
- **[#81389](https://github.com/openclaw/openclaw/pull/81389)** — Config performance: cache `applyPluginAutoEnable` (saves ~600ms dashboard cold-start)
- **[#80751](https://github.com/openclaw/openclaw/pull/80751)** — SSRF guard: scope custom provider baseUrl trust by origin (security hardening)

---

## 4. Community Hot Topics

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 104 | 74 | **Linux/Windows Clawdbot Apps** | Platform parity — macOS/iOS/Android have native apps; enterprise and developer users need desktop Linux/Windows equivalents for full feature parity |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 29 | 17 | **Skill install fails in Docker: `brew not installed`** | Container-native workflows — Homebrew assumption breaks Linux containers; need portable package management |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 26 | 0 | **Text between tool calls leaks to messaging channels** | UX polish — internal processing noise shouldn't reach end users; agent "thinking" needs better routing control |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | **Prebuilt Android APK releases** | Accessibility — compiling from source is barrier for non-technical users |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | 17 | 1 | **Gateway runtime degradation on Windows 11 + Node 24** | Production reliability — chronic network/timer issues across multiple versions suggest platform-specific runtime instability |

**Analysis**: The top community demand is **cross-platform parity** (Linux/Windows desktop apps), with 104 comments and 74 upvotes indicating strong pent-up demand. The second theme is **operational friction in containerized deployments** — Docker assumptions (brew, sandbox workspace binding) create deployment barriers. Third is **agent output hygiene** — users expect surgical control over what reaches messaging surfaces.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway runtime degradation: pricing fetch 60s timeouts, Telegram polling stalls 127–266s, RPC slowdowns — chronic across 4.23/4.25/4.26 on Windows 11 + Node 24 | None identified |
| 🔴 **Critical** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | Stuck processing sessions detected but never aborted — requires external gateway restart | None identified |
| 🔴 **Critical** | [#71412](https://github.com/openclaw/openclaw/issues/71412) | `stopChannel` abort-timeout leaves zombie task, preventing health-monitor restart | None identified |
| 🟡 **High** | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon `stop()` race condition on SIGUSR1 restart — orphaned processes and send failures | None identified |
| 🟡 **High** | [#81368](https://github.com/openclaw/openclaw/issues/81368) | Isolated cron watchdog kills beta.4 runs at `attempt_dispatch` after 60s | Referenced #80888 (closed, but reproduced) |
| 🟡 **High** | [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI requires device identity (HTTPS/localhost secure context) — regression breaking VPS deployments | None identified |
| 🟡 **High** | [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + Sandbox workspace access completely broken (Docker-outside-of-Docker path resolution) | None identified |
| 🟢 **Medium** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` tool doesn't inherit `skills.entries.*.env` environment variables — regression | None identified |
| 🟢 **Medium** | [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in `agentDir` silently ignored — only workspace directory files injected | None identified |
| 🟢 **Medium** | [#70628](https://github.com/openclaw/openclaw/issues/70628) | Telegram DM fabricates silent-reply chatter for no-visible-response turns | None identified |

**Stability Assessment**: Three critical zombie/orphaned-process issues indicate **gateway process management is under stress**, particularly around restarts, timeouts, and health monitoring. Windows 11 + Node 24 combination appears to be a problematic production target. The cron watchdog issue persisting across beta releases suggests release qualification gaps.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Linux/Windows Desktop Apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | Medium-High | 104 comments, 74 👍; cross-platform parity is strategic blocker for enterprise adoption |
| **Direct Exec Mode for Cron Jobs** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | High | 9 👍, clear operational pain; avoids LLM tax on simple scheduled tasks |
| **Masked Secrets / Native Secrets Management** | [#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610) | High | Security is enterprise gating; policy PRs suggest aligned investment |
| **Pre-response Enforcement Hooks (Hard Gates)** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | Medium | Niche but high-value for finance/security verticals; fits policy theme |
| **Slack Block Kit Support** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | Medium | Rich messaging is competitive feature; Slack already externalized, may need re-investment |
| **Session Snapshots (Save/Load)** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | Medium | Developer productivity feature; aligns with subagent/workflow complexity |
| **Multi-Agent Collaboration Enhancement** | [#35203](https://github.com/openclaw/openclaw/issues/35203) | Low-Medium | Architectural RFC with 7 comments; significant design work implied |
| **Built-in Auto-Update** | [#12855](https://github.com/openclaw/openclaw/issues/12855) | Low | Nice-to-have; update primitives exist but full workflow is large scope |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Container deployment friction** | [#14593](https://github.com/openclaw/openclaw/issues/14593) (brew in Docker), [#31331](https://github.com/openclaw/openclaw/issues/31331) (sandbox workspace binding), [#29736](https://github.com/openclaw/openclaw/issues/29736) (exec-approvals path ignores state root) | High — Docker is standard deployment path, multiple breaking assumptions |
| **Windows/Node 24 instability** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | High — chronic, version-spanning, no clear resolution |
| **Agent output hygiene** | [#25592](https://github.com/openclaw/openclaw/issues/25592) (leaked processing text), [#32868](https://github.com/openclaw/openclaw/issues/32868) (block streaming delays), [#70628](https://github.com/openclaw/openclaw/issues/70628) (fabricated replies) | Medium-High — UX credibility at stake |
| **Context/session confusion** | [#32296](https://github.com/openclaw/openclaw/issues/32296) (replies to wrong message), [#80242](https://github.com/openclaw/openclaw/pull/80242) (subagent announce routing) | Medium — architectural complexity emerging |
| **Security/secrets handling** | [#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610), [#8719](https://github.com/openclaw/openclaw/issues/8719) | Medium — enterprise readiness concern |

### Positive Signals
- **Modularization praised**: Externalized providers/plugins (WhatsApp, Slack, Bedrock, Anthropic Vertex) reducing install bloat
- **Telegram improvements**: Resilience work (isolated polling, spooling) acknowledged
- **Policy framework**: Enterprise users likely welcoming conformance/audit capabilities

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Apps | ~4.5 months | Platform parity blocker | Maintainer roadmap commitment; community would contribute if architecture defined |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered Bootstrap Loading | ~3 months | Token waste in large workspaces | Design review; touches core context architecture |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) Multi-Agent Collaboration RFC | ~2 months | Architectural proposal with no maintainer response | RFC process status unclear; needs triage |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) Security Profile v1.1 | ~3.5 months | Comprehensive security model | May be superseded by policy PRs; needs explicit linkage or closure |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/Unsafe ClawdBot (Rust rewrite) | ~3.5 months | Provocative but low-engagement | Close or redirect to memory safety discussion |
| [#44051](https://github.com/openclaw/openclaw/issues/44051) Skills path error (WSL) — **CLOSED** | ~2 months | Regression in official skills loading | Verify fix in stable; WSL is common dev environment |

**Maintainer Attention Needed**: The policy PR quartet (`giodl73-repo`'s #80056, #80407, #80783, #81104) represents significant architectural work that needs coordinated review and merge sequencing. The Linux/Windows app gap remains the longest-running unaddressed feature request with highest community investment.

---

*Digest generated from GitHub activity data for openclaw/openclaw as of 2026-05-15.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
## Community Digest Analysis — 2026-05-15

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **intense development velocity** across multiple projects, with aggregate activity exceeding 1,000 tracked items daily across the top-tier projects. The landscape has bifurcated into **mature, production-hardening platforms** (OpenClaw, LobsterAI) aggressively modularizing for enterprise adoption, **rapidly iterating mid-tier projects** (NanoBot, Hermes Agent, CoPaw, ZeroClaw) racing to close capability gaps, and **architectural rewrites** (IronClaw) betting on next-generation foundations. A dominant cross-cutting theme is the tension between **agent autonomy** (self-improving skills, multi-agent orchestration) and **operational control** (policy enforcement, audit trails, secrets management, output hygiene). Containerized deployment friction, Windows platform gaps, and reasoning-content fidelity for Chinese providers (DeepSeek, MiMo) emerge as universal pain points indicating the ecosystem's transition from developer toys to production infrastructure.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Releases | Health Score | Trajectory |
|:---|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 500 | 50 | v2026.5.14-beta.1, v2026.5.12 | ⭐⭐⭐⭐☆ (High velocity, backlog skew) | Rapid evolution, enterprise maturation |
| **NanoBot** | 21 | 24 | 7 | None (v0.1.5.post3 current) | ⭐⭐⭐⭐☆ (Active triage, growing backlog) | Agent orchestration push |
| **Hermes Agent** | 50 | 50 | 14 | None | ⭐⭐⭐☆☆ (High velocity, low closure ratio, quality pressure) | Strained, TUI crisis |
| **PicoClaw** | 9 | 24 | 1 | v0.2.8-nightly | ⭐⭐⭐☆☆ (Low merge velocity, maintainer bandwidth constraints) | Maintenance mode |
| **NanoClaw** | 1 | 22 | 13 | None | ⭐⭐⭐⭐☆ (High merge rate, zero community visibility) | Skill ecosystem expansion |
| **IronClaw** | 50 | 50 | 6 | None (pre-release Reborn) | ⭐⭐⭐☆☆ (Architectural ambition, integration bottleneck) | Big-rewrite risk zone |
| **LobsterAI** | 0 | 27 | 27 | v2026.5.14 | ⭐⭐⭐⭐⭐ (Exceptional throughput, zero open issues) | Production-hardening |
| **CoPaw** | 50 | 50 | 2 | v1.1.7 | ⭐⭐⭐☆☆ (Contribution surge, review backlog crisis) | Test-coverage sprint |
| **ZeroClaw** | 23 | 50 | 7 | None (v0.7.5 failed Homebrew) | ⭐⭐⭐☆☆ (High velocity, release channel blocked) | Stabilization phase |
| **Moltis** | 2 | 0 | 0 | None | ⭐⭐☆☆☆ (Stagnant, sustainability concerns) | Maintenance/decline? |
| **NullClaw, TinyClaw, ZeptoClaw** | 0 | 0 | 0 | None | ⭐☆☆☆☆ (No activity) | Dormant/inactive |

**Health Score Methodology**: Weighted composite of merge throughput, release cadence, issue resolution rate, critical bug backlog, and community engagement breadth.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Gap |
|:---|:---|:---|
| **Scale** | 500 issues/500 PRs daily — 10-20× raw activity of next tier | NanoBot (21/24), ZeroClaw (23/50) operate at fraction of scale |
| **Enterprise governance** | Policy enforcement PR quartet (#80056, #80407, #80783, #81104) in active development | Only IronClaw's Reborn architecture approaches comparable policy sophistication; others lack systematic conformance frameworks |
| **Modularization maturity** | Externalized providers/plugins (WhatsApp, Slack, Bedrock, Anthropic Vertex) with lean installs | LobsterAI migrating *to* OpenClaw native MCP; NanoClaw still unbundling skills manually |
| **Cross-platform reach** | macOS/iOS/Android native apps; Linux/Windows gap is known and tracked (#75, 104 comments) | Hermes Agent, PicoClaw, ZeroClaw all exhibit Windows as second-class; CoPaw has Chinese-platform strength (WeChat, DingTalk) |
| **Release discipline** | 4 versions in recent window, explicit migration notes | IronClaw (no releases), ZeroClaw (failed Homebrew), Hermes Agent (zero releases despite P1 bugs) |

### Technical Approach Differences

- **vs. LobsterAI**: OpenClaw is platform-agnostic core; LobsterAI is desktop-centric Electron app with NetEase Youdao's controlled ecosystem. OpenClaw's `#openclaw/proxyline` dependency routing versus LobsterAI's local HTTP server for artifacts shows architectural divergence: network-distributed vs. single-user secure sandbox.
- **vs. IronClaw**: OpenClaw iterates incrementally on Node.js/TypeScript runtime; IronClaw is ground-up Rust rewrite with WASM sandboxing. OpenClaw prioritizes shipping; IronClaw prioritizes correctness proofs.
- **vs. NanoClaw**: OpenClaw's community-driven skill marketplace contrasts with NanoClaw's concentrated `fresheldidea` contributor shipping marketing/ops skills. OpenClaw has governance framework; NanoClaw has execution velocity without visible review.

### Community Size Comparison

OpenClaw's 74-upvote Linux/Windows app request (#75) exceeds total engagement on most peer issues. However, **engagement depth per contributor is lower** — LobsterAI's zero open issues with 27 merges suggests smaller but highly effective maintainer team; NanoBot's 17-comment universal failure issue (#2880) shows comparable desperation density. OpenClaw's challenge is converting high-volume participation into maintainable review throughput (450 open PRs is unsustainable).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Policy enforcement & audit** | OpenClaw, IronClaw, Hermes Agent, ZeroClaw | OpenClaw: model/network/MCP conformance checks; IronClaw: event substrate redaction; Hermes: self-improvement provenance (#11692); ZeroClaw: OTel tracing (#6641/#6642) |
| **Container deployment friction** | OpenClaw, NanoBot, Hermes Agent, PicoClaw | OpenClaw: brew-in-Docker (#14593), sandbox workspace binding (#31331); NanoBot: `nanobot doctor` CLI; Hermes: Docker skills missing (#24099); PicoClaw: root Dockerfile (#2812) |
| **Reasoning content fidelity** | NanoBot, CoPaw, ZeroClaw | NanoBot: `deepseek-v4-flash` `reasoning_content` 400s (#3760); CoPaw: MiMo thinking mode + tool calls = 400 (#4314); ZeroClaw: `reasoning_content` stripped in compression (#6269) |
| **Agent output hygiene** | OpenClaw, NanoBot, Hermes Agent | OpenClaw: text between tool calls leaks to channels (#25592); NanoBot: server stream missing `streamid` (#3718); Hermes: terminal resize corruption cluster (7+ issues) |
| **Multi-agent isolation** | OpenClaw, PicoClaw, Hermes Agent, IronClaw | OpenClaw: subagent announce routing (#80242); PicoClaw: child agents inherit root `AGENT.md` (#2775); Hermes: per-user identity boundaries (#21574); IronClaw: tenant-scoped runtime presets (#3045) |
| **Secrets management** | OpenClaw, NanoClaw, IronClaw | OpenClaw: masked secrets (#10659, #13610); NanoClaw: vault secrets docs (#2454); IronClaw: WASM staged credential rules (#3667) |
| **Cron/job scheduling reliability** | OpenClaw, ZeroClaw, NanoBot | OpenClaw: cron watchdog kills beta runs (#81368); ZeroClaw: cron output routing to Telegram broken (#6647), session isolation (#6648); NanoBot: missing `streamid` in cron outputs (#3718) |
| **Windows platform parity** | OpenClaw, Hermes Agent, ZeroClaw, NanoBot | OpenClaw: gateway degradation on Win11+Node24 (#73323); Hermes: install failure (#25551), glyph corruption; ZeroClaw: install script bash 3.2 fix (#5557); NanoBot: file access control without sandbox (#3780) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation, maximal ecosystem breadth | Enterprise integrators, multi-channel deployers | Node.js monorepo with externalized plugin cones, policy framework emerging |
| **LobsterAI** | Desktop-native professional UX, Chinese market optimization | Individual power users, creative professionals | Electron + local HTTP sandbox, NetEase vertical integration |
| **IronClaw** | Security-first WASM sandbox, Rust performance | High-assurance deployments, blockchain-adjacent (NEAR) | Rust async runtime, capability-based security, Reborn rewrite |
| **NanoClaw** | Rapid marketing/ops skill deployment, vendor-agnostic CLI | Growth hackers, performance marketers | Containerized skill execution, Claude/Codex unification |
| **Hermes Agent** | Self-improving agent research, TUI-first interaction | AI researchers, terminal-native developers | Python/Rich TUI, skill forking, provenance experiments |
| **CoPaw** | Chinese model ecosystem integration (MiMo, Zhipu, Qwen) | China-market enterprises, WeChat/DingTalk operators | Python, AgentScope lineage, systematic test investment |
| **ZeroClaw** | Rust performance, proactive cron-agent hybrid | DevOps/SRE, infrastructure operators | Rust, Matrix/Telegram gateway, memory-recall systems |
| **NanoBot** | Lightweight agent orchestration, Feishu enterprise | SMBs, Lark/Feishu-centric teams | Python, hook-based model routing, task planning tools |
| **PicoClaw** | Embedded/hardware-adjacent (Sipeed), minimal footprint | IoT/edge, resource-constrained deployers | Python, V3 config format, Telegram community focus |
| **Moltis** | Decentralized/trustless relay (aspirational) | P2P advocates, privacy-maximalists | Rust (implied), minimal current activity |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Active Feature Development)

| Project | Characteristics | Risk |
|:---|:---|:---|
| **OpenClaw** | 1,000 items/day, policy framework, cross-platform expansion | Review backlog (450 open PRs), zombie process management |
| **LobsterAI** | 27 merges/day, zero open issues, batch stale-PR cleanup | No external community, NetEase-controlled roadmap |
| **NanoClaw** | 13 merges/day, skill ecosystem explosion | Zero public review visibility, security PRs unmerged (#2468) |

### Tier 2: Active Stabilization (Bug Fixes, Quality Investment)

| Project | Characteristics | Risk |
|:---|:---|:---|
| **NanoBot** | Feishu hardening, `doctor` CLI, task planning PRs | #2880 universal failure unassigned, DeepSeek v4 regressions |
| **ZeroClaw** | Cron-Telegram bridge fixes, security advisory response | v0.7.5 release blocked, review bandwidth bottleneck |
| **CoPaw** | Test coverage sprint (Phases 0-5), browser automation | 48:2 open:merged PR ratio, contributor burnout risk |
| **Hermes Agent** | Terminal resize crisis response, provider expansion | Zero releases, P1 bugs unpatched, TUI architectural tension |

### Tier 3: Architectural Transition (High Investment, Pre-Release)

| Project | Characteristics | Risk |
|:---|:---|:---|
| **IronClaw** | Reborn rewrite, WASM sandbox, layered workstreams | Classic big-rewrite risks: integration bottlenecks, v1 neglect (#2902 Telegram down 22 days) |

### Tier 4: Maintenance/Stagnation

| Project | Characteristics | Risk |
|:---|:---|:---|
| **PicoClaw** | Nightly builds, Dependabot surge, session/history debt | #629 retry failure 3 months unaddressed, multi-agent adoption blocked |
| **Moltis** | 2 issues, zero PRs, zero releases | Sustainability concerns, potential abandonment |
| **NullClaw, TinyClaw, ZeptoClaw** | No activity | Dormant |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **"Agent output hygiene" as first-class concern** | OpenClaw #25592 (leaked processing text), NanoBot #25592 (stream delays), Hermes resize crisis | Design streaming architectures with explicit "user-visible" vs. "internal reasoning" channels from day one; avoid retrofitting |
| **Reasoning-content preservation is non-negotiable** | DeepSeek v4, MiMo, Anthropic extended thinking all hit compression/routing bugs | Treat `reasoning_content` as first-class message field, not optional metadata; test with Chinese providers specifically |
| **Cron-to-conversational bridge is incomplete everywhere** | ZeroClaw #6647/#6648, OpenClaw #81368, NanoBot #3718 | Don't assume batch jobs naturally become proactive agents; explicit session_target routing needs dedicated engineering |
| **Windows + Node 24 is a toxic combination** | OpenClaw #73323, Hermes #25551, multiple glyph/terminal issues | For cross-platform tools, prioritize Rust/Go over Node.js for Windows gateway components; test Node 24 specifically |
| **Policy-as-code is the new enterprise gate** | OpenClaw policy PRs, IronClaw tenant blueprints, Hermes provenance RFC | Build conformance hooks into core loop before feature accumulation; retrofitting policy is 10× harder |
| **MCP is consolidating as integration standard** | LobsterAI migrating to OpenClaw native MCP, NanoClaw MCP skill expansion | Adopt MCP early for tool ecosystem; custom bridge architectures (LobsterAI's pre-2026.5.14) are technical debt |
| **Container escape vectors are multiplying** | NanoClaw #2468 (symlink traversal), OpenClaw #31331 (Docker sandbox binding), Hermes #23496 (browser sandbox bypass) | Assume malicious skills/containers; path resolution validation and seccomp profiles are baseline, not extras |
| **Community contribution models are diverging** | OpenClaw high-volume/low-review, NanoClaw zero-visibility merges, LobsterAI maintainer-only, CoPaw test-sprint organization | Projects choosing "open contribution + maintainer bottleneck" (OpenClaw, CoPaw) risk quality debt; "closed maintainer team" (LobsterAI, NanoClaw) risks bus factor |

---

*Report generated from 2026-05-15 community digests across 12 projects. Data reflects single-day snapshot; trend confidence moderate to high where multi-project patterns converge.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-15

## 1. Today's Overview

NanoBot showed **high community activity** with 21 issues and 24 PRs updated in the past 24 hours, indicating an engaged contributor base around this 42.3k-star project. The merge/close rate of 11 issues and 7 PRs suggests maintainers are actively triaging, though the 17 open PRs indicate a growing review backlog. No new releases were published, with the latest version remaining **v0.1.5.post3** (2026-05-13). The day's work centered on **Feishu/Lark channel stability**, **CLI developer experience improvements**, and **security hardening** for enterprise deployments. Multiple feature PRs for task planning, goal state management, and session tooling signal the project is pushing toward more sophisticated agent orchestration capabilities.

---

## 2. Releases

**No new releases** — The project remains on `v0.1.5.post3` (released 2026-05-13 per issue #3790).

---

## 3. Project Progress

### Merged/Closed PRs Today (7 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #3779 | chengyongru | **fix(agent)**: Persist shortcut commands (`/help`, `/pairing`) to session without polluting LLM context; fixes empty WebUI chat after turn end | [PR #3779](https://github.com/HKUDS/nanobot/pull/3779) |
| #3775 | chengyongru | **fix(feishu)**: Register no-op handlers for `im.chat.member.bot.added_v1`/`deleted_v1` events; silences "processor not found" WebSocket errors | [PR #3775](https://github.com/HKUDS/nanobot/pull/3775) |
| #3786 | liflovs | **fix(telegram)**: Wire transcription config fields (`transcription_provider`, `api_key`, `language`) through to channel; voice messages now properly transcribed | [PR #3786](https://github.com/HKUDS/nanobot/pull/3786) |
| #3483 | flyzstu | **docs**: Add OpenCode Go provider entries to configuration documentation | [PR #3483](https://github.com/HKUDS/nanobot/pull/3483) |
| #3783 | HengWeiBin | **fix(web)**: Add `ssl_verify` config for corporate proxy SSL verification (superseded by #3784) | [PR #3783](https://github.com/HKUDS/nanobot/pull/3783) |
| #3121 | JiajunBernoulli | **feat(agent)**: Model routing support via `AgentHookContext`; closes #3070 | [PR #3121](https://github.com/HKUDS/nanobot/pull/3121) |
| #3773 | shen-baise | **closed invalid**: Consolidated `doctor`, session management, `/export` commands (split into #3776, #3777, #3778) | [PR #3773](https://github.com/HKUDS/nanobot/pull/3773) |

**Key Advances:**
- **Feishu enterprise reliability**: Two fixes address production WebSocket stability (#3775) and security (#3789, open but related)
- **Developer experience**: CLI tooling expansion with diagnostic and session management commands
- **Model ecosystem**: OpenCode Go gateway support expands provider options for Chinese models

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | **Issue #2880** — Universal error replies ("无论发什么消息都回复报错") | 17 comments | [Issue #2880](https://github.com/HKUDS/nanobot/issues/2880) |
| | *Open since 2026-04-07, stale* | | **Critical blocker**: Agent mode works, direct chat fails completely even after reinstall. Suggests corrupted state/config migration issue between modes. High comment count reflects user desperation, not resolution. |
| 2 | **Issue #3689** — Interrupted sessions lose chat history | 5 comments | [Issue #3689](https://github.com/HKUDS/nanobot/issues/3689) |
| | *Closed 2026-05-14* | | **Core UX gap**: Users expect interruption to preserve context + task progress. Closed without clear resolution—may resurface. Underlying need: **resumable agent tasks** with checkpointing. |
| 3 | **Issue #3780** — File access control for Windows without sandbox | 3 comments | [Issue #3780](https://github.com/HKUDS/nanobot/issues/3780) |
| | *Closed 2026-05-14* | | **Enterprise security**: Small company shared deployment on Windows needs read-without-write external file access + script review. Closed quickly—likely redirected to docs or deemed out of scope. |

### Underlying Needs Analysis
- **#2880 pattern**: Users stuck in unrecoverable error states need better debuggability (`nanobot doctor` in #3776 directly addresses this)
- **#3689 + #3460 + #3791**: Strong signal for **structured long-task management** with persistence across interruptions
- **#3780 + #3768**: Enterprise/self-hosted users need **security boundaries** without Docker/sandbox overhead

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| 🔴 **High** | #2880 | Universal reply failures in normal mode (agent mode works) — **unresolved, stale** | ❌ No | [Issue #2880](https://github.com/HKUDS/nanobot/issues/2880) |
| 🔴 **High** | #3790 | WebUI session content display corruption after 5.13 update, requires refresh | ❌ No | [Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) |
| 🟡 **Medium** | #3772 / #3787 | Feishu: bot crashes when @mentioned by other bots or on member add/remove events | ✅ Yes — #3775 (merged), #3789 (open) | [Issue #3772](https://github.com/HKUDS/nanobot/issues/3772), [Issue #3787](https://github.com/HKUDS/nanobot/issues/3787) |
| 🟡 **Medium** | #3760 | `deepseek-v4-flash` + post3: `reasoning_content` causes 400 invalid_request_error | ❌ No (closed without PR reference?) | [Issue #3760](https://github.com/HKUDS/nanobot/issues/3760) |
| 🟡 **Medium** | #3754 | `deepseek-v4-flash` ignores external files, hallucinates content for small/common knowledge files | ❌ No | [Issue #3754](https://github.com/HKUDS/nanobot/issues/3754) |
| 🟡 **Medium** | #1998 | Coder models (GLM5, Qwen3.5) fail with `function.arguments` JSON format error | ❌ No (stale, closed) | [Issue #1998](https://github.com/HKUDS/nanobot/issues/1998) |
| 🟢 **Low** | #3718 | Server stream output for cron reminders missing `streamid` | ❌ No | [Issue #3718](https://github.com/HKUDS/nanobot/issues/3718) |
| 🟢 **Low** | #2920 | MS Teams: hardcoded "Reply with quote test" fallback misparses messages | ✅ Yes — merged (closed today) | [Issue #2920](https://github.com/HKUDS/nanobot/issues/2920) |

**Regression Watch**: #3790 (WebUI corruption) and #3760/#3754 (DeepSeek v4 compatibility) suggest **post3 release instability** with new model versions and UI changes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Status | Likelihood in Next Release |
|:---|:---|:---|:---|
| **Task planning & decomposition** | PR #3791 (`plan` tool), PR #3460 (`LongTaskTool`) | Open | **High** — Multiple PRs converging, author overlap (chengyongru) |
| **Goal state streaming & WebUI composer** | PR #3788 | Open | **High** — Large PR, actively updated |
| **CLI diagnostics (`nanobot doctor`)** | PR #3776, Issue #3769 | Open | **High** — Community demand, clean implementation |
| **Session management CLI** | PR #3777 | Open | **Medium-High** — Depends on #3779 merge |
| **Conversation export (`/export`)** | PR #3778 | Open | **Medium-High** |
| **DM sender approval / pairing** | PR #3774, Issue #3768 | Open | **Medium** — Security-focused, depends on #3779 |
| **Token usage tracking (`/insights`)** | Issue #3731 | Open | **Medium** — Clear user need for cost management |
| **Provider-hosted web search tools** | Issue #3741 | Open | **Medium** — Azure OpenAI integration complexity |
| **Streaming tool events in API** | Issue #3698 | Open | **Medium** — Hermes-agent compatibility |
| **Local tokenizer for offline use** | Issue #3647 | Open | **Low-Medium** — Performance optimization, niche need |
| **Model routing** | PR #3121 | **Merged** | ✅ **Shipped** |

**Predicted v0.1.6 themes**: Agent task orchestration (`plan`, `long_task`, goal state), CLI tooling maturity, Feishu enterprise hardening.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Unrecoverable error states** | #2880 (17 comments, reinstall fails), #2898 | Critical |
| **DeepSeek v4 compatibility** | #3754, #3760, #3772 (all v4-flash) | High |
| **Context loss on interruption** | #3689 | High |
| **WebUI instability** | #3790 (post3 regression), #3670 (history leaks) | Medium-High |
| **Enterprise security without sandbox** | #3780 (Windows), #3768 (DM gating) | Medium |
| **Cost visibility** | #3731 (no historical token tracking) | Medium |
| **Offline/air-gapped operation** | #3647 (network-dependent tokenizer) | Low-Medium |

### Use Cases Emerging
- **Small team shared assistant** (#3780): Multi-user, shared memory, Windows server, non-technical users → needs **RBAC-lite + audit logging**
- **Voice-first Telegram bots** (#3786): Transcription config now works, but discovery was poor
- **Corporate proxy environments** (#3784): SSL MITM is common; fix addresses real deployment blocker

### Satisfaction Signals
- Active PR contributions suggest healthy contributor retention
- Issue #3781 (recruiting spam) indicates project prestige attracting external attention

---

## 8. Backlog Watch

### Stale/Neglected Items Needing Attention

| Issue | Age | Problem | Risk |
|:---|:---|:---|:---|
| **#2880** | 38 days open | Universal failure mode, 17 comments, no maintainer diagnosis | **User churn** — Most commented open issue, no assignee visible |
| **#3647** | 9 days, 0 comments | Local tokenizer for offline use | Technical debt — Network dependency causes silent latency |
| **#3698** | 7 days, 0 comments | Streaming tool events for API | Ecosystem compatibility — Hermes-agent parity |
| **#3718** | 5 days, 0 comments | Missing streamid in cron outputs | Data quality — Breaks stream consumers |
| **#3731** | 4 days, 0 comments | `/insights` for token tracking | Cost management — Clear user value, low complexity |
| **#3741** | 4 days, 0 comments | Provider-hosted web search | Platform expansion — Azure OpenAI gap |

### PR Review Backlog

| PR | Age | Blocker |
|:---|:---|:---|
| #3460 (`LongTaskTool`) | 18 days | Needs rebase/merge conflict resolution? |
| #3693 (LLM concurrency gate) | 7 days | Marked `[invalid]` — needs maintainer clarification |
| #3762 (Codex retry) | 3 days | Test coverage ready, needs review |

### Maintainer Action Recommended
1. **Triage #2880 urgently** — Assign maintainer, request debug logs with `nanobot doctor` output
2. **Resolve #3460 vs #3791 vs #3788** — Three overlapping task-planning PRs risk merge conflicts; consolidate or sequence
3. **Review security PRs** — #3789 (Feishu path traversal), #3774 (DM pairing) for v0.1.6 security posture

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-15

## 1. Today's Overview

Hermes Agent shows **high velocity but significant quality pressure**, with 50 issues and 50 PRs active in the last 24 hours and **zero releases** despite substantial bug volume. The project is experiencing a **terminal resize rendering crisis**—at least 7 related issues/PRs in 24 hours—suggesting the TUI/CLI display layer is undergoing major refactoring with regressions. Provider ecosystem expansion (Anthropic, Kimi/Moonshot, LM Studio, OpenRouter) continues, but authentication and caching edge cases are multiplying. The 38:12 open-to-closed issue ratio and 36:14 open-to-merged PR ratio indicate **backlog accumulation** rather than steady-state maintenance.

---

## 2. Releases

**No new releases** (v0.13.0 remains current as of 2026-04-30/2026-05-12 depending on component).

---

## 3. Project Progress

### Merged/Closed PRs (14 total, key items shown)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#26000](https://github.com/NousResearch/hermes-agent/pull/26000) | alaamohanad169-ship-it | Deep-copy fallback chain + prefer entry `base_url` for subagents | Fixes delegate tool using wrong API endpoint in fallback scenarios |
| [#24099](https://github.com/NousResearch/hermes-agent/pull/24099) | helix4u | Fall back to bundled skill files in Docker | Resolves Docker installs missing skills directory |
| [#26007](https://github.com/NousResearch/hermes-agent/pull/26007) | roryford | *Invalid/test PR* — closed | N/A |
| [#25710](https://github.com/NousResearch/hermes-agent/pull/25710) | andkulikov | Fix Telegram streaming MarkdownV2 finalization | Resolves raw Markdown display in Telegram gateway |

**Features advancing:**
- **Speech dictation in Web UI** ([#26013](https://github.com/NousResearch/hermes-agent/pull/26013)) — STT upload endpoint with Whisper hallucination filtering
- **Cron metadata plumbing** ([#26012](https://github.com/NousResearch/hermes-agent/pull/26012)) — exposes `job_id`, `schedule`, `origin` to platform adapters
- **GitHub Enterprise Copilot support** ([#6468](https://github.com/NousResearch/hermes-agent/pull/6468)) — long-running enterprise auth feature
- **Browser tool resilience** ([#25999](https://github.com/NousResearch/hermes-agent/pull/25999)) — automatic Chrome fallback when CDP endpoints fail

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | 12 | Claude Max 20x OAuth → Anthropic native 400 errors | **Enterprise auth reliability**: Users with paid subscriptions expect seamless credential reuse; OAuth token format mismatch suggests provider abstraction gap |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | 9 | Receipts/provenance for self-improving agents | **Governance/auditability**: As Hermes enables self-modification, users need cryptographic or deterministic proof chains for compliance and debugging |
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | 7 | Docker permission denied on NAS (UGOS Pro) | **Consumer hardware deployment**: NAS/SMB users need first-class Docker volume permission handling, not workstation-centric assumptions |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 5 | Per-user agent isolation via identity permissions | **Multi-tenant safety**: Gateway deployments need prompt injection boundaries between users; current shared-session model is unsafe for social demos |

### Analysis

The **#11692** discussion from Tom Farley (FIA/Exchange context implied) signals Hermes is being evaluated for **regulated or high-stakes environments** where self-modification requires audit trails. The **#21574** "girlfriend prompt injection" anecdote reveals a **critical security gap in gateway mode**—identity spoofing works trivially, making this unsuitable for team deployments without the proposed RFC.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | Open | None | Anthropic native 400 with valid OAuth — **blocks paid users** |
| **P1** | [#23496](https://github.com/NousResearch/hermes-agent/issues/23496) | Open | [#25998](https://github.com/NousResearch/hermes-agent/pull/25998) | Browser sandbox bypass no-op due to env var mismatch (`CHROME_FLAGS` vs `ARGS`) |
| **P1** | [#25710](https://github.com/NousResearch/hermes-agent/issues/25710) | **Closed** | [#25710](https://github.com/NousResearch/hermes-agent/pull/25710) | Telegram MarkdownV2 streaming regression |
| **P1** | [#25921](https://github.com/NousResearch/hermes-agent/issues/25921) | Open | None | Infinite preflight compression loop after gateway split — **resource exhaustion risk** |
| **P1** | [#26003](https://github.com/NousResearch/hermes-agent/pull/26003) | Open (PR) | [#26003](https://github.com/NousResearch/hermes-agent/pull/26003) | `os.chmod("/", 0o700)` — **potential system-breaking security bug** |
| **P2** | [#25551](https://github.com/NousResearch/hermes-agent/issues/25551) | Open | None | Windows clean install failure — **new user onboarding blocked** |
| **P2** | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | Open | None | NAS Docker permission denied |
| **P2** | [#24537](https://github.com/NousResearch/hermes-agent/issues/24537) | Open | None | File operations nondeterministic — **data integrity concern** |
| **P2** | [#25970](https://github.com/NousResearch/hermes-agent/issues/25970) | Open | [#26014](https://github.com/NousResearch/hermes-agent/pull/26014) | Kimi/Moonshot excluded from 1h prefix cache |

### Terminal Resize Crisis Cluster

At least **7 issues/PRs** in 24h concern TUI/CLI resize corruption:

| Issue/PR | Symptom | Status |
|:---|:---|:---|
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | Status bar duplication, blank line flooding (macOS) | Closed |
| [#17975](https://github.com/NousResearch/hermes-agent/issues/17975) | Blank lines after resize | Closed |
| [#18449](https://github.com/NousResearch/hermes-agent/issues/18449) | Corrupted glyphs after rapid resize | Open |
| [#24137](https://github.com/NousResearch/hermes-agent/issues/24137) | Composer/scrollbar jumps (Ghostty/Zed) | Open |
| [#25418](https://github.com/NousResearch/hermes-agent/issues/25418) | Layout tearing, broken reflow (Ghostty, iTerm2) | Closed |
| [#25981](https://github.com/NousResearch/hermes-agent/pull/25981) | **Fix: clear-and-replay on resize** | Open PR |
| [#26011](https://github.com/NousResearch/hermes-agent/pull/26011) | **Fix: restrict fast-echo to ASCII for CJK/IME** | Open PR |

**Assessment**: The resize bugs suggest a **fundamental architectural tension** in the display layer—likely between Rich/prompt_toolkit (CLI) and Ink (TUI) rendering models. The repeated "fix and regress" pattern indicates insufficient test coverage for terminal geometry changes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Speech dictation (Web UI)** | [#26013](https://github.com/NousResearch/hermes-agent/pull/26013) | **High** | Complete PR, touches isolated component |
| **Kimi/Moonshot prompt caching** | [#26014](https://github.com/NousResearch/hermes-agent/pull/26014) | **High** | One-line policy fix, clear user benefit |
| **Cron metadata in adapters** | [#26012](https://github.com/NousResearch/hermes-agent/pull/26012) | **Medium** | Clean implementation, needs review bandwidth |
| **GitHub Enterprise Copilot** | [#6468](https://github.com/NousResearch/hermes-agent/pull/6468) | **Medium** | Long-running, enterprise demand, complexity in auth flows |
| **Per-user agent isolation** | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | **Low-Medium** | RFC stage, architectural, security-critical |
| **Self-improvement provenance/receipts** | [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | **Low** | Research/design phase, no implementation proposal |
| **Configurable API headers/User-Agent** | [#12785](https://github.com/NousResearch/hermes-agent/issues/12785) | **Medium** | Simple surface, blocked on config system decisions |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Terminal display reliability** | 7+ resize issues, multiple terminal emulators | Critical — daily workflow disruption |
| **Windows as second-class** | [#25551](https://github.com/NousResearch/hermes-agent/issues/25551) install fail, [#24277](https://github.com/NousResearch/hermes-agent/issues/24277) glyph corruption, [#25073](https://github.com/NousResearch/hermes-agent/issues/25073) `rm` in build scripts | High — platform parity gap |
| **Provider auth fragility** | [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) OAuth 400s, [#25989](https://github.com/NousResearch/hermes-agent/issues/25989) LM Studio config trampling | High — paid user blocking |
| **Docker/NAS deployment friction** | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) permissions, [#24099](https://github.com/NousResearch/hermes-agent/issues/24099) skills missing | Medium — growing non-developer userbase |
| **Gateway security boundaries** | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) trivial prompt injection | High — blocks team/multi-user use |
| **Billing surprises** | [#24029](https://github.com/NousResearch/hermes-agent/issues/24029) free-only config bypassed | Medium — trust erosion |

### Satisfaction Signals

- Active community filing detailed RFCs ([#21574](https://github.com/NousResearch/hermes-agent/issues/21574), [#11692](https://github.com/NousResearch/hermes-agent/issues/11692))
- Enterprise users investing in integrations (GHE Copilot [#6468](https://github.com/NousResearch/hermes-agent/pull/6468))
- Platform diversity expanding (Feishu/Lark, Telegram, Discord, WhatsApp)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) Provenance/receipts | ~28 days | **Architectural** | Design response: is this in-scope for core or plugin? |
| [#12785](https://github.com/NousResearch/hermes-agent/issues/12785) Configurable headers | ~25 days | **Simple, unblocked** | Decision on config schema; could be good-first-issue |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) Per-user isolation | ~7 days | **Security-critical** | RFC review, threat model response |
| [#24537](https://github.com/NousResearch/hermes-agent/issues/24537) Nondeterministic file ops | ~3 days | **Data integrity** | Repro investigation, possibly race condition in async file I/O |
| [#25921](https://github.com/NousResearch/hermes-agent/issues/25921) Infinite compression loop | ~1 day | **Production stability** | Hotfix candidate — resource exhaustion |

### PRs At Risk of Stale

| PR | Age | Blocker |
|:---|:---|:---|
| [#6468](https://github.com/NousResearch/hermes-agent/pull/6468) GHE Copilot | ~36 days | Complex auth review, enterprise validation |
| [#25072](https://github.com/NousResearch/hermes-agent/pull/25072) WebSocket non-loopback | ~2 days | Needs network topology testing |

---

**Project Health Assessment**: ⚠️ **Active but strained**. High throughput (100 items/24h) with low closure ratio suggests either pre-release crunch or insufficient maintainer bandwidth for quality control. The terminal resize cluster and zero releases despite P1 bugs indicate **stability should be prioritized over features** in the immediate term.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-15

## 1. Today's Overview

PicoClaw shows **high maintenance activity but low merge velocity**, with 24 PRs updated in the last 24 hours but only 1 merged/closed. The project released a new nightly build (v0.2.8-nightly.20260514) while 7 of 9 recently updated issues remain open, suggesting a growing backlog. Community engagement is concentrated in bug reports around LLM provider reliability, session management, and multi-agent architecture—areas indicating the project is being stress-tested in production-like scenarios. The disproportionate number of dependency-update PRs (8 from Dependabot alone) versus feature/fix merges points to potential maintainer bandwidth constraints.

---

## 2. Releases

**[v0.2.8-nightly.20260514.eb065307](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** — Nightly Build (Automated)

> ⚠️ **Unstable automated build** — use with caution.

This nightly advances from the v0.2.8 baseline with commits on `main` since that tag. No explicit changelog provided; users should review the [full commit comparison](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) for included changes.

---

## 3. Project Progress

**Merged/Closed Today: 1 PR / 2 Issues**

| Item | Status | Significance |
|------|--------|------------|
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) — Refactor: Move OpenAI endpoints to Responses API | **Closed** | Architecture modernization completed; aligns with OpenAI's recommended API path |
| [#2721](https://github.com/sipeed/picoclaw/issues/2721) — Session history race (`tool_use_id` 400 from Anthropic) | **Closed** | High-priority Anthropic provider bug resolved in current builds |

**Notable Open PRs Advancing:**

| PR | Author | Focus |
|----|--------|-------|
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | SiYue-ZO | **Streaming UX for web chat** — end-to-end streaming with scroll behavior |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | cytown | **Channel architecture refactor** — decouple channel names from provider types |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | SiYue-ZO | **V3 config format documentation sync** (26 files updated) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 🔍 Underlying Need |
|------|----------|----------|------------------|
| 1 | [#629](https://github.com/sipeed/picoclaw/issues/629) — LLM call failed, no retry | **14 comments** | **Reliability engineering for production deployments** — users need resilient LLM orchestration with automatic retry/backoff; current hang-on-failure breaks long-running tasks |
| 2 | [#2171](https://github.com/sipeed/picoclaw/issues/2171) — OpenAI Responses API migration | 11 comments | Future-proofing against API deprecation; adopting OpenAI's preferred patterns |
| 3 | [#2702](https://github.com/sipeed/picoclaw/issues/2702) — Multi-user session attribution | 3 comments | **Enterprise/group chat use cases** — Discord/Slack-style deployments need proper identity threading |

### Telegram Ecosystem Cluster
Four PRs from contributor `bogdanovich` ([#2779](https://github.com/sipeed/picoclaw/pull/2779), [#2778](https://github.com/sipeed/picoclaw/pull/2778), [#2777](https://github.com/sipeed/picoclaw/pull/2777), [#2776](https://github.com/sipeed/picoclaw/pull/2776), [#2772](https://github.com/sipeed/picoclaw/pull/2772)) show concentrated work on **Telegram forum topics, typing indicators, cron suppression, and tool feedback** — indicating active production use in Telegram communities.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM calls fail without retry → task hangs indefinitely | **None identified** |
| **High** | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | Session history race causing Anthropic 400 errors | ✅ **Closed** — fixed in current builds |
| **High** | [#2859](https://github.com/sipeed/picoclaw/issues/2859) | Xiaomi MIMO model fails after 2-3 turns (400 "Param Incorrect") | **None** — model-specific compatibility |
| **Medium** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | Multi-user channels lose sender attribution in history | **None** |
| **Medium** | [#2798](https://github.com/sipeed/picoclaw/issues/2798) | PDF stream breaks Telegram bot session | **None** — PicoClaw-specific vs. OpenClaw working |
| **Medium** | [#2795](https://github.com/sipeed/picoclaw/issues/2795) | Conversation history only shows last user message (compression over-eager) | **None** |
| **Medium** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) | All messages share session `updated` timestamp | **None** |
| **Medium** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) | Child agents inherit root `AGENT.md` → role confusion | **None** |

**Pattern:** Session/history management is the dominant bug category (4 of 8), suggesting architectural debt in state persistence.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| **Streaming web chat UX** | [#2587](https://github.com/sipeed/picoclaw/pull/2587) | **High** — PR open, actively worked |
| **V3 config format (completed docs)** | [#2766](https://github.com/sipeed/picoclaw/pull/2766) | **High** — near completion |
| **Per-topic Telegram triggers** | [#2779](https://github.com/sipeed/picoclaw/pull/2779) | **Medium** — niche but well-scoped |
| **Working summary tool feedback** | [#2778](https://github.com/sipeed/picoclaw/pull/2778) | **Medium** — UX polish for active deployments |
| **Root Dockerfile** | [#2812](https://github.com/sipeed/picoclaw/pull/2812) | **Medium** — AI-augmented PR, needs review |
| **OpenAI Responses API migration** | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | ✅ **Completed** |
| **Channel type decoupling** | [#2551](https://github.com/sipeed/picoclaw/pull/2551) | **Medium** — architectural, touches many systems |

**Emerging Theme:** Multi-agent orchestration improvements (role isolation, spawn behavior) will likely follow the V3 config stabilization.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **"Task hangs without retry"** | [#629](https://github.com/sipeed/picoclaw/issues/629) — production task death | 🔴 Critical |
| **"Session compression hides history from users"** | [#2795](https://github.com/sipeed/picoclaw/issues/2795) — trust/audit issue | 🟡 High |
| **"Child agents think they're the parent"** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) — multi-agent architecture broken | 🟡 High |
| **"PDF works in OpenClaw, breaks PicoClaw"** | [#2798](https://github.com/sipeed/picoclaw/issues/2798) — regression/comparison frustration | 🟡 High |
| **Timestamps wrong for all messages** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) — UI/UX credibility | 🟢 Medium |

### Use Cases Inferred
- **Long-running autonomous agents** (retry needs)
- **Multi-user community bots** (Discord/Telegram groups)
- **Hierarchical agent teams** (Planner/Builder/Auditor patterns)
- **Document-processing workflows** (PDF ingestion)

---

## 8. Backlog Watch

### Stale Items Needing Maintainer Attention

| Age | Item | Risk |
|-----|------|------|
| **~3 months** | [#629](https://github.com/sipeed/picoclaw/issues/629) — No retry on LLM failure | **Production reliability** — 14 comments, no resolution path |
| **~1.5 months** | [#2551](https://github.com/sipeed/picoclaw/pull/2551) — Channel architecture refactor | **Merge conflict drift** — foundational change, needs decision |
| **~3 weeks** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) — Agent role inheritance | **Multi-agent adoption blocker** |
| **~2 weeks** | [#2795](https://github.com/sipeed/picoclaw/issues/2795), [#2798](https://github.com/sipeed/picoclaw/issues/2798), [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Session/history cluster — may share root cause |

### Dependabot PR Surge
**8 dependency PRs** opened 2026-05-14 ([#2863](https://github.com/sipeed/picoclaw/pull/2863)–[#2872](https://github.com/sipeed/picoclaw/pull/2872)) — bulk merge or automated workflow needed to prevent noise.

---

*Digest generated from GitHub activity 2026-05-14. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-15

## 1. Today's Overview

NanoClaw showed **strong engineering velocity** with 22 PRs updated in the last 24 hours (13 merged/closed, 9 open), though community engagement remains shallow with zero reactions and minimal comments across all items. The project is actively expanding its **AI agent skill ecosystem** and **multi-provider CLI support**, while simultaneously hardening security boundaries and fixing platform-specific edge cases. No new releases were cut, suggesting the team is accumulating changes for a larger version bump. The single active issue indicates reasonable runtime stability, though the container race condition warrants attention. Overall health: **productive but low community feedback velocity**.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (13 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #2473 | Koshkoshinsk | **Docs fix**: Removed misleading scratchpad clause from `<internal>` tag description in `destinations.ts` — follow-up to #2467 | [PR #2473](https://github.com/nanocoai/nanoclaw/pull/2473) |
| #2454 | fresholdidea | **Docs**: Added `docs/onecli-secrets.md` vault secrets reference | [PR #2454](https://github.com/nanocoai/nanoclaw/pull/2454) |
| #2453 | fresholdidea | **Skill**: Localized `copy-grader` marketing-copy grader skill from upstream | [PR #2453](https://github.com/nanocoai/nanoclaw/pull/2453) |
| #2450 | fresholdidea | **Skill**: Added LinkedIn Ads playbook skills (`/linkedin-ads-*`) for Ads agent group | [PR #2450](https://github.com/nanocoai/nanoclaw/pull/2450) |
| #2448 | fresholdidea | **Skill**: Added composite `/social-listening` skill (Serper, Reddit MCP, Parallel Search, Brave, RSS, WebSearch) | [PR #2448](https://github.com/nanocoai/nanoclaw/pull/2448) |
| #2449 | fresholdidea | **Skill**: Added agent-browser-based `/linkedin-community` manager skill | [PR #2449](https://github.com/nanocoai/nanoclaw/pull/2449) |
| #2452 | fresholdidea | **Container**: Added Lighthouse 13.3.0 CLI to Dockerfile for site audits | [PR #2452](https://github.com/nanocoai/nanoclaw/pull/2452) |
| #2451 | fresholdidea | **Skill**: Localized `audit-website` skill from `squirrelscan/skills@main` | [PR #2451](https://github.com/nanocoai/nanoclaw/pull/2451) |
| #2455 | fresholdidea | **Skill**: Replaced squirrelscan-based audit with self-hosted composite stack (Lighthouse + axe + linkinator) — **unblocks Cloudflare-blocked environments** | [PR #2455](https://github.com/nanocoai/nanoclaw/pull/2455) |
| #2447 | fresholdidea | **Skill + MCP**: Added read-only Reddit MCP (`reddit-mcp-buddy`) and `/reddit-research` skill | [PR #2447](https://github.com/nanocoai/nanoclaw/pull/2447) |
| #2446 | fresholdidea | **Skill + MCP**: Added Firecrawl MCP integration and `/firecrawl` skill with provider selection guidance | [PR #2446](https://github.com/nanocoai/nanoclaw/pull/2446) |
| #2445 | fresholdidea | **Skill + MCP**: Added Serper.dev MCP env passthrough and `/serper-search` skill | [PR #2445](https://github.com/nanocoai/nanoclaw/pull/2445) |

**Key theme**: `fresheldidea` single-handedly shipped **9 skills/MCP integrations** in 24h, representing a major expansion of NanoClaw's **marketing/ops agent capabilities** (LinkedIn Ads, community management, social listening, competitive research) and **search infrastructure** (Serper, Firecrawl, Reddit, composite fallbacks). The `audit-website` rewrite (#2455) is architecturally significant — eliminates external dependency on squirrelscan which fails under Cloudflare bot protection.

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|:---|:---|:---|
| [#2466 — Container spawn race on wakeContainer](https://github.com/nanocoai/nanoclaw/issues/2466) | 1 | **Only item with any discussion** — reveals concurrency vulnerability in container lifecycle management when script-initiated wakes collide with host sweeps. Low priority but indicates missing idempotency guarantees in orchestration layer. |
| *All PRs* | 0–undefined | **Zero comments, zero reactions** across all 22 PRs. Either: (a) maintainers merge via private review, (b) bot-driven workflow, or (c) genuinely low community engagement. The `undefined` comment counts suggest possible GitHub API data quality issues or private review threads. |

**Underlying need**: The project lacks visible community deliberation. The single commented issue (#2466) involves **operational safety** — duplicate work execution wastes compute and risks data inconsistency, critical for multi-tenant deployments.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **Medium** | [#2466](https://github.com/nanocoai/nanoclaw/issues/2466) — Duplicate container spawn race | **OPEN** | ❌ No | `wakeContainer` non-idempotent under concurrent script + host sweep. Two gamma-expert containers processed same brief independently. **Workaround**: timing isolation; **Fix needed**: distributed lock or spawn-deduplication in host service. |
| **Medium** | [#2469](https://github.com/nanocoai/nanoclaw/pull/2469) — WhatsApp decrypt failure recovery guidance | **OPEN** | ✅ PR open | Misleading operator instructions (`launchctl kickstart` ineffective for Signal session corruption). PR corrects to session deletion + re-auth flow. Also fixes 401 logout recovery path. |
| **High** | [#2468](https://github.com/nanocoai/nanoclaw/pull/2468) — Unsafe forwarded attachments (symlink traversal) | **OPEN** | ✅ PR open | **Security**: `forwardAttachedFiles` follows container-controlled symlinks when copying between agent outbox/inbox. Enables container escape / arbitrary file read. PR hardens with path resolution validation. |

**Stability assessment**: Two security-adjacent PRs open (#2468 path traversal, #2469 auth recovery). The race condition (#2466) is the only runtime bug with reproduction steps. No crashes or regressions reported in merged code.

---

## 6. Feature Requests & Roadmap Signals

| PR | Signal | Likelihood in Next Release |
|:---|:---|:---|
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) — Codex persona/skill parity | **Multi-provider unification** — Codex agents get same tooling as Claude | High — config-driven provider switching is strategic |
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) — AI-coding-CLI picker (Claude Code / Codex / future Aider/Gemini) | **Setup abstraction layer** — registry pattern for CLI adapters | High — blocks broader CLI ecosystem expansion |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) — Restart without NanoClaw | **Operational decoupling** — run skills outside full stack | Medium — unclear scope from summary |
| [#2472](https://github.com/nanocoai/nanoclaw/pull/2472) + [#2471](https://github.com/nanocoai/nanoclaw/pull/2471) — Slack per-message threads | **Platform fidelity** — fixes Slack DM session collapsing | High — paired PRs suggest coordinated merge |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) — CLI mode via `claude --print --resume` | **Quota/cost optimization** — bypasses Agent SDK for interactive quota | Medium — Chinese-language PR may need i18n review; 40 unit tests passed |

**Predicted next version themes**: 
1. **Provider neutrality** (Claude ↔ Codex ↔ future)
2. **Slack UX hardening** (thread isolation)
3. **Cost control pathways** (CLI mode quota optimization)

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Cloudflare blocking external tools** | `squirrel` blocked in containers → forced `audit-website` rewrite (#2455) | High — deployment-blocking |
| **WhatsApp auth fragility** | Decrypt failures require manual session purge; 401 logout recovery unclear (#2469) | Medium — operator toil |
| **Slack session collapsing** | DMs under `per-thread` merge into single endless session (#2471/#2472) | Medium — UX degradation |
| **Vendor lock-in to Claude** | Codex lacks parity; setup hardcodes `claude` CLI (#2474/#2475) | Medium — limits enterprise adoption |
| **Container orchestration races** | Concurrent wakes spawn duplicates (#2466) | Medium — reliability risk |

**Satisfaction indicators**: Rapid skill expansion suggests users are successfully extending the platform. **Dissatisfaction**: Operational rough edges (auth recovery, session management, external tool fragility) indicate the project is still maturing for production multi-tenant use.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2466](https://github.com/nanocoai/nanoclaw/issues/2466) — Container race | 1 day | **Concurrency bug with repro** — could affect any wakeContainer call under load | Assign to orchestration maintainer; add distributed lock or atomic spawn check |
| [#2468](https://github.com/nanocoai/nanoclaw/pull/2468) — Symlink traversal | 1 day | **Security boundary failure** — container escape vector | Priority security review; merge before next release |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) — CLI mode (中文) | 1 day | i18n barrier to review; 40 tests pass but integration unclear | Translation/clarification of scope; verify quota behavior in staging |

**No long-unanswered items** — all open items are ≤1 day old, indicating active triage. However, the **absence of comments/reactions** across all PRs raises questions about review bandwidth versus merge velocity. Recommend monitoring for post-merge issues given the high throughput (13 merges in 24h with zero public review visibility).

---

*Digest generated from github.com/qwibitai/nanoclaw data as of 2026-05-15.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-15

## 1. Today's Overview

IronClaw exhibits **extremely high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though merge throughput remains constrained (only 6 PRs merged/closed versus 44 open). The project is in the critical **"Reborn" architectural migration phase**—a ground-up rebuild of the agent runtime, host kernel, and product surfaces. No new releases were cut, indicating the team is prioritizing landing the Reborn architecture over incremental shipping. Activity is heavily concentrated among core maintainers (serrrfirat, henrypark133, zmanian, ilblackdragon), suggesting this is an **intensive internal integration period** rather than broad community contribution.

---

## 2. Releases

**No new releases.** The project remains in pre-release Reborn development with no versioned artifacts published.

---

## 3. Project Progress

### Merged/Closed PRs Today (6 total, 2 shown with detail)

| PR | Status | Summary | Link |
|---|---|---|---|
| **#3550** | CLOSED | `arch(ws-0)`: Foundation workstream establishing `ironclaw_agent_loop` crate with state, checkpoints, `BoundedRing`, `CapabilityCallSignature`, `NoProgressDetected` — **core Reborn loop infrastructure landed** | [PR #3550](https://github.com/nearai/ironclaw/pull/3550) |
| **#3282** | CLOSED (Issue) | Browser chat routes migrated onto ProductAdapter path; WebChat v2 surface superseded earlier preservation strategy | [Issue #3282](https://github.com/nearai/ironclaw/issues/3282) |

### Key Integration Branches Advancing

| PR | Scope | Significance |
|---|---|---|
| [#3554](https://github.com/nearai/ironclaw/pull/3554) | `arch(level1-merged)` | Integrates ws-1 + ws-2 + ws-3 + ws-3.5 (strategy traits alpha/beta/gamma + loop family registry) |
| [#3557](https://github.com/nearai/ironclaw/pull/3557) | `arch(level2-merged)` | Integrates ws-4 + ws-5 (planner facade + default strategies) |
| [#3596](https://github.com/nearai/ironclaw/pull/3596) | `arch(ws-6a)` | **Canonical loop executor** — turns strategy/family/planner model into reusable loop tick |

### Infrastructure Improvements

- **[#3668](https://github.com/nearai/ironclaw/pull/3668)**: Module sealing across service crates (ilblackdragon) — improves API boundary hygiene
- **[#3666](https://github.com/nearai/ironclaw/pull/3666)**: `FilesystemProcessStore` migrated to unified `put`/`get` on `RootFilesystem`
- **[#3667](https://github.com/nearai/ironclaw/pull/3667)**: Host API credential account resolution for WASM staged credential rules

---

## 4. Community Hot Topics

### Most Active Issues by Comment Volume

| Rank | Issue | Comments | Core Concern | Link |
|---|---|---|---|---|
| 1 | **#2987** [EPIC] Reborn architecture landing strategy | **44** | **Coordination bottleneck**: How to land massive architectural change without "one massive stacked PR"; tracks grouped PR plan through integration | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| 2 | **#3022** Event substrate integration tests (cutover blocker) | **9** | **Quality gate for Reborn cutover**: Cross-service, caller-level test suite proving V1 event producers write redacted, scoped, replayable events | [Issue #3022](https://github.com/nearai/ironclaw/issues/3022) |
| 3 | **#3087** Compose `ironclaw_host_runtime` services | **4** | Host kernel service composition: `CapabilityHost` over `ExtensionRegistry` with dispatcher + authorizer | [Issue #3087](https://github.com/nearai/ironclaw/issues/3087) |
| 4 | **#3036** Configuration-as-Code (tenant blueprints) | **3** | **Operator pain point**: Eliminate hand-editing `.env`, workspace docs, JSON settings with no schema/diff/audit | [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) |
| 5 | **#3266** Outbound egress and subscription policy | **3** | Event streaming governance: who can subscribe, what egresses, with what redaction | [Issue #3266](https://github.com/nearai/ironclaw/issues/3266) |
| 6 | **#3045** Runtime presets and effective runtime policy | **3** | **UX simplification**: Operators/users need understandable operating modes without hand-wiring grants, mounts, backends, network policy | [Issue #3045](https://github.com/nearai/ironclaw/issues/3045) |

### Underlying Needs Analysis

- **Integration anxiety dominates**: #2987's 44 comments reveal the team's struggle with "how to ship a rewrite" — the grouped PR strategy is a response to review capacity constraints
- **Test-driven confidence**: #3022's prominence shows Reborn cutover is blocked on integration testing, not just feature completion
- **Operational ergonomics**: #3036 and #3045 both reflect that IronClaw v1's configuration complexity has become a liability that Reborn must solve

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| **P0** | **#3623** [Reborn WebUI Beta] Add `BeforeInboundPolicy` seam | WebChat v2 user messages need policy-check/reject/rewrite before staging — **beta-critical** | **In progress** (created today, no PR linked) |
| **P0** | **#3612** WebUI-facing `RebornServices` facade | WebUI route authors reaching into internals without stable facade | **In progress** (created today) |
| **P0** | **#3624** (CLOSED) WebUI inbound DTO contract | Route-independent DTOs for thread/message/cancel/gate | **Resolved** |
| P1 | **#2902** Telegram not working for NEAR Foundation instance | Production channel failure for specific tenant | **No fix PR identified**; only 1 comment since April 23 — may be stalled |
| P1 | **#3576** Harvest `pi_agent_rust` runtime/security patterns | Risk: high — external security patterns to adopt | Tracking issue, no implementation |

**Stability assessment**: No crash reports or regressions in today's data. The P0 items are **delivery blockers** for WebUI beta, not runtime failures. The Telegram issue (#2902) is the only apparent production defect and appears under-prioritized relative to Reborn work.

---

## 6. Feature Requests & Roadmap Signals

### User/Operator-Requested Features

| Feature | Issue | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Configuration-as-Code (tenant blueprints)** | [#3036](https://github.com/nearai/ironclaw/issues/3036) | Medium-High | ilblackdragon-authored, P2-suggested; depends on Reborn storage substrate (#3419) |
| **Runtime presets** (dev/prod/locked-down modes) | [#3045](https://github.com/nearai/ironclaw/issues/3045) | High | P1-suggested, directly unblocks operator adoption; small surface area |
| **First-class loop hooks** (inline + event-triggered) | [#3523](https://github.com/nearai/ironclaw/issues/3523), [#3524](https://github.com/nearai/ironclaw/issues/3524) | High | Active PR chain from zmanian (#3633-#3640) in draft; foundational for extensibility |
| **WASM hook execution** | [#3634](https://github.com/nearai/ironclaw/pull/3634) | Medium | Draft scope doc only; security-critical, needs threat model review |
| **WASM ProductAdapters** (Telegram, Slack, WeChat) | [#3572](https://github.com/nearai/ironclaw/issues/3572), [#3579](https://github.com/nearai/ironclaw/issues/3579)-[#3582](https://github.com/nearai/ironclaw/issues/3582) | Medium | Channel parity post-Reborn; depends on adapter contract stability (#3269) |
| **Persistent predicate counters** | [#3635](https://github.com/nearai/ironclaw/pull/3635) | Medium | Infrastructure for hooks; Postgres/libSQL impls needed |

### Predicted Next-Release Contents

Based on PR readiness (draft vs. implementation), the first Reborn release will likely include:
- Agent loop framework (ws-0 through ws-6a) — **nearly landed**
- Basic hook framework with `DenyReasonCode` — **PRs drafted**
- WebUI beta surface (M2 inbound facade) — **active construction**

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Pain Point | Severity |
|---|---|---|
| #3036 | "Hand-edit mix of `.env`, workspace docs, settings JSON, extension installs, runtime flags — with no schema, no diff, no audit trail" | **High** — operational risk |
| #3045 | Operators must "hand-wire low-level grants, mounts, process backends, network policy, secret policy, approval policy, and audit settings" | **High** — adoption friction |
| #2902 | Telegram channel down for NEAR Foundation (production tenant) | **High** — but unaddressed |

### Implicit Signals

- **WebUI v2 urgency**: 5 issues created **today** (#3607, #3612, #3623, #3629, #3630) for WebUI beta, suggesting external deadline pressure
- **"Reborn" naming fatigue**: The term appears 40+ times; the team is investing heavily in differentiation from v1, but this may confuse external observers
- **Contributor concentration**: 90%+ activity from 4 core maintainers; risk of bus factor and review bottleneck (evident in #2987's coordination complexity)

### Satisfaction/Dissatisfaction

- **Satisfied**: Architectural direction — extensive spec documents, layered workstreams, clear module boundaries
- **Dissatisfied**: Delivery predictability — 48/50 issues open, 44/50 PRs open, epic coordination issues needed to manage merge complexity

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|---|---|---|---|
| **#2902** Telegram failure for NEAR Foundation | **22 days** | Production channel down; only 1 comment | Assign owner, determine if v1 fix or Reborn port |
| **#2987** Reborn architecture EPIC | 18 days | Coordination overhead consuming team capacity | Consider automation (merge queues, stacked PR tools) |
| **#3036** Configuration-as-Code | 17 days | P2, but ilblackdragon-authored (leadership priority) | Clarify dependency on #3419 (storage substrate) |
| **#3118** Native Reborn memory storage/search | 15 days | Supersedes #3112; blocks memory subsystem | Needs scope refinement vs. legacy `Workspace` adapter |

### PRs at Risk of Stagnation

| PR | Risk | Mitigation |
|---|---|---|
| **#3550-#3557, #3596** Agent loop workstreams | Merge conflicts across stacked branches | henrypark133 actively maintaining; #3554/#3557 integration branches help |
| **#3633-#3640** zmanian hook successors | All **draft, scope-doc-only** — implementation gap | Risk of spec drift; need implementation owners |

---

## Project Health Assessment

| Dimension | Score | Notes |
|---|---|---|
| **Velocity** | ⭐⭐⭐⭐⭐ | 100 items updated/24h is exceptional |
| **Merge throughput** | ⭐⭐⭐☆☆ | 12% close rate suggests bottleneck |
| **Release discipline** | ⭐⭐☆☆☆ | No releases; unclear when Reborn ships |
| **Operational responsiveness** | ⭐⭐☆☆☆ | #2902 unaddressed for 22 days |
| **Architectural coherence** | ⭐⭐⭐⭐⭐ | Well-documented, layered, modular |
| **Community breadth** | ⭐⭐☆☆☆ | Core-maintainer dominated |

**Overall**: IronClaw is executing a technically ambitious architectural migration with strong design discipline but faces **classic "big rewrite" risks**: integration bottlenecks, prolonged pre-release state, and potential neglect of production v1 issues. The WebUI beta push suggests near-term external pressure to ship.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-15

## 1. Today's Overview

LobsterAI demonstrated **extremely high development velocity** on 2026-05-14 with 27 merged/closed PRs and 1 new release, marking one of the most active single days in the project's recent history. The team shipped the **v2026.5.14** release with substantial improvements across context management, plugin architecture, and artifact rendering. Notably, zero open issues and only one stale dependency-update PR remaining open suggest aggressive maintainer triage and a healthy backlog. The project appears to be in a **mature, production-hardening phase** with focused engineering on stability, cross-platform compatibility, and enterprise-grade features.

---

## 2. Releases

### [LobsterAI 2026.5.14](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.14) (2026-05-14)

| Category | Details |
|----------|---------|
| **Breaking Changes** | **MCP Bridge Removal**: Migration from custom `mcp-bridge` to OpenClaw native MCP Client mode ([PR #1980](https://github.com/netease-youdao/LobsterAI/pull/1980)). Users with custom MCP configurations must update to `mcp.servers` format in `openclaw.json`. |
| **Migration Notes** | Plugin storage path changed: user-installed plugins now persist in `userData` instead of application directory ([PR #1979](https://github.com/netease-youdao/LobsterAI/pull/1979)). Existing plugins should auto-migrate on first launch. |
| **Key Features** | • OpenClaw context compaction with real-time usage indicators ([PR #1969](https://github.com/netease-youdao/LobsterAI/pull/1969))<br>• Advanced plugin management system ([PR #1963](https://github.com/netease-youdao/LobsterAI/pull/1963))<br>• Local HTTP server for secure HTML artifact preview ([PR #1977](https://github.com/netease-youdao/LobsterAI/pull/1977)) |
| **Bug Fixes** | macOS plugin npm installation, Chinese Windows encoding, mid-turn artifact detection, heartbeat token optimization |

---

## 3. Project Progress

### Major Feature Advancements

| PR | Description | Impact |
|:---|:---|:---|
| [#1980](https://github.com/netease-youdao/LobsterAI/pull/1980) | **MCP Native Migration** — Removed mcp-bridge, adopted OpenClaw native MCP Client with stdio/sse/streamable-http support | Architecture simplification, reduced maintenance burden, better Windows env handling |
| [#1977](https://github.com/netease-youdao/LobsterAI/pull/1977) | **Local HTTP Server for HTML Artifacts** — Replaced inline rendering with 127.0.0.1 server, session/token auth, path traversal protection | Security hardening, fixes external resource loading (403) issues |
| [#1983](https://github.com/netease-youdao/LobsterAI/pull/1983) | **Excel/PPTX Renderer Overhaul** — Independent SheetRenderer, dark mode fixes, iframe lifecycle management | Professional document handling quality |
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | **Plugin Management with Advanced Config** | Extensibility foundation |

### Critical Fixes

| PR | Problem | Solution |
|:---|:---|:---|
| [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) | macOS plugins fail to install from Dock/Launchpad (PATH lacks npm) | Bundled `npm-cli.js` resolution, fallback to packaged npm |
| [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) | Garbled Chinese app names in "Open With" dropdown | Force UTF-8 encoding in PowerShell execution |
| [#1982](https://github.com/netease-youdao/LobsterAI/pull/1982) | False artifact detection on tool output paths; regex truncation on spaces | Narrowed detection logic, anchored regex matching, +8 regression tests |
| [#1978](https://github.com/netease-youdao/LobsterAI/pull/1978) | Excessive heartbeat token consumption | `isolatedSession: true` + `lightContext: true`, interval 30m→1h, `target: none` |

---

## 4. Community Hot Topics

**No active community discussions today** — zero open issues and all PRs show `undefined` comments with zero reactions. This indicates:

- **Maintainer-driven development**: NetEase Youdao team operates with internal coordination (Slack/Lark) rather than GitHub-centric community
- **Low external contributor engagement**: Only one Dependabot PR remains open ([#1765](https://github.com/netease-youdao/LobsterAI/pull/1765)), suggesting limited third-party participation
- **Potential concern**: Absence of public discussion may mask real user friction; project may benefit from opening issue templates or discussion forums

**Stale PRs resurrected**: Multiple March 2026 PRs were closed today (#841, #842, #847, #848, #852, #853, #860), suggesting a **batch cleanup event** rather than organic merge activity.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | Main process crash when `event.sender` used after window destruction (async SSE/screenshot operations) | **Fixed** (stale PR, closed today) |
| **🟡 High** | [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) | macOS plugin installation completely broken for standard launch paths | **Fixed in v2026.5.14** |
| **🟡 High** | [#1982](https://github.com/netease-youdao/LobsterAI/pull/1982) | Mid-turn artifact false positives causing workflow disruption | **Fixed in v2026.5.14** |
| **🟡 High** | [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) | Encoding corruption on Chinese Windows systems | **Fixed in v2026.5.14** |
| **🟢 Medium** | [#860](https://github.com/netease-youdao/LobsterAI/pull/860) | Unhandled `JSON.parse` exceptions in SSE streams causing full stream abort | **Fixed** (stale PR, closed today) |
| **🟢 Medium** | [#847](https://github.com/netease-youdao/LobsterAI/pull/847) | Single tilde incorrectly parsed as strikethrough (e.g., "11~21°C") | **Fixed** (stale PR, closed today) |
| **🟢 Medium** | [#841](https://github.com/netease-youdao/LobsterAI/pull/841) | Overlapping runtime poll cycles causing resource contention | **Fixed** (stale PR, closed today) |

**Stability Assessment**: The crash fix (#852) and SSE robustness improvements (#860) address production reliability. However, all fixes being batched in a single release without prior patch releases suggests **risk accumulation** in release strategy.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Security environment scanning** | [#842](https://github.com/netease-youdao/LobsterAI/pull/842) — Skill security scan, 9-category permission system | **High** — Enterprise readiness priority; PR closed as stale but feature complete |
| **Session export formats** | [#853](https://github.com/netease-youdao/LobsterAI/pull/853) — Markdown/JSON/JSONL export for secondary processing | **High** — Data portability demand; implementation complete |
| **Plugin marketplace/ecosystem** | [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963), [#1979](https://github.com/netease-youdao/LobsterAI/pull/1979) — Foundation laid with advanced config, persistent storage | **Medium** — Next logical step: discovery/distribution |
| **Mobile/tablet companion** | No signals | Low — Desktop-first architecture deeply entrenched |
| **Self-hosted/On-premise** | MCP native migration, local HTTP server patterns | Medium — Infrastructure moving toward deployable services |

---

## 7. User Feedback Summary

**Inferred Pain Points** (from fix patterns, no direct user reports available):

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **macOS launch environment fragility** | #1981 PATH issues, #852 window lifecycle crashes | High — Platform parity gap |
| **Chinese locale support gaps** | #1973 encoding bugs | Medium — Core market underserved |
| **Artifact rendering reliability** | #1977, #1982, #1983 series of fixes | High — Core user workflow |
| **Plugin durability across updates** | #1979 path migration | Medium — Trust in extension ecosystem |
| **Token cost anxiety** | #1978 heartbeat optimization (measured 50%+ reduction) | Medium — Enterprise cost sensitivity |
| **Data lock-in concerns** | #853 export formats (implied demand) | Medium — Compliance/workflow integration |

**Satisfaction Indicators**: Aggressive bug-fixing velocity, measured performance improvements (heartbeat tokens), security-focused architecture suggest **professional user base** with quality expectations being met.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) `@headlessui/react` bump 1.7.19 → 2.2.10 | ~24 days | **Low** — Dependency drift, potential security/stability fixes in upstream | Merge or close with rationale; currently only open PR |
| ~~[#842](https://github.com/netease-youdao/LobsterAI/pull/842) Security scanning~~ | ~50 days | ~~High — Complete feature, enterprise blocker~~ | **Resolved**: Closed today |
| ~~[#853](https://github.com/netease-youdao/LobsterAI/pull/853) Export formats~~ | ~50 days | ~~Medium — User data portability~~ | **Resolved**: Closed today |

**Backlog Health**: Dramatically improved. The batch closure of 7 stale PRs eliminates a significant triage debt. Remaining risk is minimal with only Dependabot's UI library update pending.

---

**Project Health Score: 🟢 Strong**

| Metric | Assessment |
|:---|:---|
| Velocity | Excellent (27 PRs/day) |
| Quality | Improving (crash fixes, regression tests added) |
| Community | Weak (no external engagement visible) |
| Stability | Good (proactive hardening, measured optimizations) |
| Transparency | Moderate (detailed PR descriptions, but no public roadmap) |

*Digest generated from GitHub activity 2026-05-14. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-15

## 1. Today's Overview

Moltis exhibited minimal activity in the last 24 hours, with **2 new issues opened** and **zero pull requests or releases**. The project appears to be in a maintenance phase with no active code contributions merging. Both new issues were filed on 2026-05-14 by community members, suggesting continued user engagement despite the lack of development velocity. The absence of PR activity and releases indicates potential maintainer bandwidth constraints or a pre-release stabilization period. Overall project health appears **stable but stagnant**—no regressions are being actively addressed, and no features are advancing through the merge pipeline.

---

## 2. Releases

**No new releases.** The project has no published release history available in the provided data.

---

## 3. Project Progress

**No merged or closed PRs today.** No features advanced or fixes were integrated into the codebase. Development velocity is at a standstill.

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#995 Integration of `portal-tunnel` as a trustless relay channel](https://github.com/moltis-org/moltis/issues/995) | New, 0 comments, 0 👍 | **Emerging architectural direction**: This enhancement request signals community interest in decentralized, trust-minimized infrastructure—likely for peer-to-peer agent communication without centralized relay servers. The `portal-tunnel` naming suggests potential integration with an existing tunneling protocol or a new Moltis-specific abstraction. Underlying need: **reduced trust assumptions in multi-agent orchestration**, critical for enterprise deployments and privacy-sensitive use cases. |
| [#996 Generated TLS certificates only work for localhost, contrary to the docs](https://github.com/moltis-org/moltis/issues/996) | New, 0 comments, 0 👍 | **Documentation/implementation gap**: User reports a mismatch between documented TLS behavior and actual certificate generation scope. This impacts production deployment scenarios requiring non-localhost endpoints. Underlying need: **clear, accurate security configuration guidance** and potentially broader certificate SAN (Subject Alternative Name) support. |

**Neither issue has maintainer response or community discussion yet.**

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| **Medium** | [#996 Generated TLS certificates only work for localhost, contrary to the docs](https://github.com/moltis-org/moltis/issues/996) | ❌ None | Documentation bug with functional impact—users following docs for production TLS setup will encounter certificate validation failures. Workaround likely requires manual certificate generation; no official guidance provided. |

**No critical crashes or regressions reported.** Single bug is contained to configuration/deployment workflow, not runtime stability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| `portal-tunnel` trustless relay integration | [#995](https://github.com/moltis-org/moltis/issues/995) | **Low-Medium** | Architectural feature requiring significant design review; no maintainer engagement yet. However, aligns with broader AI agent industry trend toward decentralized orchestration. If core team has prior tunnel/R&D work, could accelerate. |
| Expanded TLS certificate generation (non-localhost SANs) | [#996](https://github.com/moltis-org/moltis/issues/996) | **High** | Bug fix with clear scope; likely bundled with documentation update. Low implementation cost if using standard cert libraries (cfssl, Let's Encrypt integration, or libp2p TLS). |

**Roadmap signal**: The `portal-tunnel` request suggests Moltis users are pushing beyond local/single-node deployments toward **distributed agent topologies**—a potential strategic priority for the project.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Deployment friction with TLS** | [#996](https://github.com/moltis-org/moltis/issues/996) | DevOps/self-hosters |
| **Need for trust-minimized infrastructure** | [#995](https://github.com/moltis-org/moltis/issues/995) | Security-conscious enterprises, P2P advocates |

**Satisfaction**: Users are proactive in filing detailed issues (preflight checklists completed), indicating investment in project success.
**Dissatisfaction**: Zero maintainer response within 24h on both issues; lack of release activity may signal project abandonment or resource starvation to observant community members.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#996 TLS localhost bug](https://github.com/moltis-org/moltis/issues/996) | 1 day | **Escalating** | Triage for documentation fix vs. code fix; assign maintainer |
| [#995 portal-tunnel integration](https://github.com/moltis-org/moltis/issues/995) | 1 day | **Moderate** | Architectural review; determine if aligns with roadmap |

**Critical observation**: With only 2 open issues total and zero PRs, Moltis has **no long-unanswered backlog** by traditional metrics. However, the complete absence of maintainer activity on any front (issues, PRs, releases) raises **project sustainability concerns**. Both issues require maintainer acknowledgment to prevent community attrition. If this pattern persists beyond 7 days, recommend flagging for **project health review**.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-05-15. All links: [Issues](https://github.com/moltis-org/moltis/issues) | [Pull Requests](https://github.com/moltis-org/moltis/pulls) | [Releases](https://github.com/moltis-org/moltis/releases)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-15

---

## 1. Today's Overview

CoPaw experienced **extremely high community activity** on 2026-05-14 with **50 issues updated** (40 open/active, 10 closed) and **50 pull requests** (48 open, only 2 merged/closed), indicating a **major contribution surge** rather than maintainer merge velocity. The project released **v1.1.7** with enhanced browser automation capabilities. Notably, contributor **aqilaziz** submitted ~15 focused test and fix PRs in a single day, suggesting an organized test-coverage sprint. However, the **48:2 open-to-merged PR ratio** signals potential review backlog risk. Active bug reports span model provider integrations (MiMo, Anthropic, Zhipu), channel routing (WeChat, DingTalk, OneBot), and core stability (ChromaDB segfaults, workspace identity confusion).

---

## 2. Releases

### [v1.1.7](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7)

| Aspect | Details |
|--------|---------|
| **New Features** | **Browser Use — Batch Actions**: Execute multiple browser steps (navigate, click, type, screenshot) in a single tool call ([#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139)); **Browser Use — File Download**: Download files via page element interaction |
| **Breaking Changes** | None explicitly noted |
| **Migration Notes** | Users leveraging browser automation should verify Batch Actions behavior replaces previous sequential call patterns; no config migration required |

---

## 3. Project Progress

### Merged/Closed Today (2 PRs implied by stats; specific PRs not itemized in data)

**Closed Issues with Resolution Patterns:**

| Issue | Resolution | Significance |
|-------|-----------|------------|
| [#4360](https://github.com/agentscope-ai/QwenPaw/issues/4360) Browser CDP mode fails on Ubuntu 26.04 | **Closed** | CDP timeout resolved or superseded |
| [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) `embedding_model_config` reset on update | **Closed** | Config persistence fixed |
| [#4323](https://github.com/agentscope-ai/QwenPaw/issues/4323) `execute_shell_command` missing custom PATH | **Closed** | Environment inheritance fixed |
| [#3864](https://github.com/agentscope-ai/QwenPaw/issues/3864) Backup rotation missing | **Closed** | Storage management addressed |

**Advanced Features (Open PRs):**

- **[#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407)** — `worldcup-en` skill: First-time contributor adding World Cup 2026 match companion with live scores, predictions, injury tracking, video generation
- **[#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387)** — Anthropic provider custom base URL support (removes `freeze_url=True` lock)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342) Unit test coverage Phase 5 (`local_models`, `providers`, `tunnel`, `utils`) | **11** | Core infrastructure debt; maintainer **hanson-hex** orchestrating systematic backend coverage |
| 2 | [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) Wrong info after `copaw app start` | **7** | Long-standing UX papercut (since v1.0.1); users confused by workspace stop messages |
| 2 | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) MiMo thinking mode + tool calls = 400 error | **7** | **Critical model integration bug** — reasoning_content missing in multi-turn tool contexts |
| 2 | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Agent workspace switches incorrectly via channel messages | **7** | **Security-adjacent**: Identity confusion in multi-agent DingTalk deployments |
| 5 | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) AudioContent not supported in Telegram | **6** | Voice message gap limits channel parity |

**Underlying Needs:**
- **Testing infrastructure** is the #1 organizational priority (Phases 0-5, multiple issues)
- **Model provider robustness** — thinking/reasoning modes are fragile with tool use
- **Multi-agent identity isolation** — workspace scoping is leaky in channel contexts

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Impact |
|----------|-------|--------|---------|--------|
| **🔴 Critical** | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) MiMo 400 error with tool calls | Open | ❌ No | Breaks all thinking-mode + tool-use workflows |
| **🔴 Critical** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Workspace identity confusion | Open | [#4394](https://github.com/agentscope-ai/QwenPaw/pull/4394) | Agent impersonation risk in production |
| **🟠 High** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) ChromaDB Rust binding segfault (SIGSEGV) | Open | ❌ No | **45+ crashes/session** — process killer, no Python exception catchable |
| **🟠 High** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) `write_file()` infinite loop / missing args | Open | ❌ No | Core tool failure on long outputs |
| **🟠 High** | [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) Agent response duplication | Open | ❌ No | UX degradation, token waste |
| **🟠 High** | [#4354](https://github.com/agentscope-ai/QwenPaw/issues/4354) Large Excel read forcibly interrupts agent | Open | ❌ No | File processing reliability |
| **🟡 Medium** | [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) Anthropic `content.type 'file'` unsupported | Open | ❌ No | File send breaks subsequent API calls |
| **🟡 Medium** | [#4205](https://github.com/agentscope-ai/QwenPaw/issues/4205) Offline voice transcription requires internet | Open | ❌ No | Contradicts "local whisper" setup |
| **🟡 Medium** | [#3173](https://github.com/agentscope-ai/QwenPaw/issues/3173) WeChat routing + vision model misclassification | Open | [#4388](https://github.com/agentscope-ai/QwenPaw/pull/4388) | Channel message misdirection |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Session lifecycle hooks** (`session.create`, `session.reset`) | [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) | **High** | Clean API surface, frequent enterprise need |
| **Auto-Memory exclude heartbeat/cron** | [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | **High** | Simple filter, high noise reduction value |
| **Configurable base path / reverse proxy support** | [#1853](https://github.com/agentscope-ai/QwenPaw/issues/1853) | **Medium** | Infrastructure need; PR [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) shows similar URL flexibility pattern |
| **"All Chats" pagination** | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) | **Medium** | Performance at scale; UI component exists but broken |
| **DingTalk quoted message support** | [#3109](https://github.com/agentscope-ai/QwenPaw/issues/3109) | **Medium** | [#4390](https://github.com/agentscope-ai/QwenPaw/pull/4390) adds regression tests — feature may already partially work |
| **AgentScope tracing integration** | [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | **Low-Medium** | Requires architectural decision on init hook placement |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Update destroys configuration** | [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) `embedding_model_config` reset | 🔴 High — fixed but trust damage |
| **Offline promises broken** | [#4205](https://github.com/agentscope-ai/QwenPaw/issues/4205) local whisper still needs internet | 🟠 Medium |
| **Channel parity gaps** | Telegram audio, DingTalk quotes, WeChat routing | 🟠 Medium — "works in console, not in X" |
| **Crash loops with no recovery** | ChromaDB segfault [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854), Excel interrupt [#4354](https://github.com/agentscope-ai/QwenPaw/issues/4354) | 🔴 High |
| **Identity confusion in multi-agent** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | 🔴 High — "thinks it's another agent" |

### Use Cases Emerging
- **Enterprise deployment**: Reverse proxy, custom PATH, tracing, session hooks
- **Media-heavy workflows**: Video generation (World Cup skill), voice messages, image handling
- **Long-context document processing**: Excel, file operations failing at scale

### Satisfaction Signals
- Active first-time contributors ([#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407))
- Systematic test investment suggests maintainability confidence

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#1853](https://github.com/agentscope-ai/QwenPaw/issues/1853) Configurable base path | **57 days** (since 2026-03-19) | Deployment blocker for enterprises | Architecture decision on URL routing; PR [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) pattern could extend |
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) Wrong info after app start | **40 days** | UX polish, reflects poorly | Simple logging fix, low effort |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) Telegram AudioContent | **61 days** | Channel feature gap | Needs media pipeline design |
| [#3109](https://github.com/agentscope-ai/QwenPaw/issues/3109) DingTalk quoted messages | **36 days** | Workflow breakage for file+robot | [#4390](https://github.com/agentscope-ai/QwenPaw/pull/4390) tests behavior — verify if fix complete |
| [#3178](https://github.com/agentscope-ai/QwenPaw/issues/3178) Session list corruption → 500 | **35 days** | Data integrity | [#4389](https://github.com/agentscope-ai/QwenPaw/pull/4389) provides recovery — merge candidate |
| [#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054) OneBot cron to group fails | **37 days** | Channel scheduling broken | Needs OneBot API field alignment (`group_id` vs `user_id`) |

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| **Contribution velocity** | 🟢 Exceptional (50 PRs/day surge) |
| **Merge velocity** | 🔴 Concerning (2/50 closed — 4% throughput) |
| **Issue resolution** | 🟡 Moderate (10/50 closed — 20%) |
| **Test coverage investment** | 🟢 Strong (systematic 5-phase plan executing) |
| **Critical bug backlog** | 🔴 Growing (MiMo, ChromaDB, workspace identity unpatched) |
| **Release quality** | 🟡 v1.1.7 ships features while stability issues persist |

**Recommendation**: Prioritize review/merge of [#4394](https://github.com/agentscope-ai/QwenPaw/pull/4394) (workspace fix), [#4389](https://github.com/agentscope-ai/QwenPaw/pull/4389) (chats.json recovery), and [#4388](https://github.com/agentscope-ai/QwenPaw/pull/4388) (WeChat routing) to address critical stability before next feature release. Consider triage process for the 48 open PRs to prevent contributor burnout.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-15

## 1. Today's Overview

ZeroClaw shows **very high engineering velocity** with 73 tracked items updated in 24 hours (23 issues, 50 PRs), though the open-to-closed ratio is heavily skewed toward new work (82% open PRs, 83% open issues). No new release was cut despite significant bug activity. The project is in an **active stabilization phase for v0.7.5**, with critical regressions in cron channel routing, Telegram tool execution, and security advisories dominating maintainer attention. The high volume of `needs-author-action` and `needs-maintainer-review` labels suggests bottlenecked review bandwidth.

---

## 2. Releases

**No new releases.** The latest tracked release remains prior to 2026-05-15. Notably, Issue #6547 confirms **v0.7.5 failed Homebrew merge**, leaving macOS users without official package distribution. This gap between code velocity and release cadence is a project health concern.

---

## 3. Project Progress

### Merged/Closed PRs (7 total, select highlights)

| PR | Author | Summary | Status |
|:---|:---|:---|:---|
| [#6664](https://github.com/zeroclaw-labs/zeroclaw/pull/6664) | Dongik | Auto-close OpenAI OAuth success tab; adds regression test | **Merged** |
| [#6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594) | JordanTheJet | Hermes-style background skill review fork + `skill_manage` tool (XL) | **Merged** |
| [#6286](https://github.com/zeroclaw-labs/zeroclaw/pull/6286) | theonlyhennygod | Fix `mention_only` gate for photo/document/voice in Telegram | **Merged** |
| [#5557](https://github.com/zeroclaw-labs/zeroclaw/pull/5557) | ceo0x | Fix `install.sh` bash 3.2 `unbound variable` error | **Merged** |
| [#5540](https://github.com/zeroclaw-labs/zeroclaw/pull/5540) | tre508 | Harden memory recall and session resume | **Merged** |

**Key advances:** The skill management infrastructure (#6594) finally wires up `SkillImprover` (dormant since #4619), enabling autonomous skill refinement. Telegram reliability improved with media-type mention gating. OAuth UX polished.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | 4 | Cron output not routed to Telegram channels | **Observability/alerting reliability** — users need cron jobs to act as proactive agents, not silent background tasks |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | 4 | `reasoning_content` lost in context compression | **DeepSeek/Chinese provider compatibility** — reasoning chains are first-class content, not discardable metadata |
| [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) | 4 | Homebrew merge failure | **Distribution trust** — blocked release channel undermines adoption |

**Analysis:** The cron→channel routing failures (#6647, #6646, #6105, #6648) reveal architectural tension: cron was designed as isolated batch jobs, but users expect channel-integrated conversational agents. The "session_target=main still isolated" bug (#6648) suggests the bridge between cron and conversational state is incompletely implemented.

---

## 5. Bugs & Stability

### Critical (S1 / P1)

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | runtime/daemon + channel:telegram | Cron job output trapped in dashboard, never reaches Telegram | **#6665** (WIP, "Fix #2") |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | Telegram + tools | `web_search_tool`/`web_fetch` silently fail via Telegram in v0.7.5 | None identified |
| [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) | dependencies/security | `lettre 0.11.21` RUSTSEC-2026-0141: TLS hostname verification disabled with Boring TLS | **#6662** (open, XS) |
| [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) | gateway API | No push API for external notifications into operator gateway session | None; needs design |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | security/tooling | `allowed_private_hosts` bypassed by DNS→private-IP resolution | None |

### High (S2 / P1-P2)

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | context compression | `reasoning_content` stripped from DeepSeek messages | None; tagged `in-progress` |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | runtime/daemon | Cron jobs lack self-context (can't reference own prior messages) | None |
| [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) | cron:scheduler | `session_target=main` still isolates session | None |
| [#6651](https://github.com/zeroclaw-labs/zeroclaw/issues/6651) | channel:matrix | Memory leak (~1MB/reload) from `matrix-sdk` Arc cycle | Blocked on upstream [matrix-rust-sdk#6573](https://github.com/matrix-org/matrix-rust-sdk/issues/6573) |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ci/history | 153 commits lost in bulk revert c3ff635 (2026-03-28), recovery tracking | None; audit trail only |

**Stability assessment:** Two distinct failure modes in cron+Telegram integration suggest a **systemic regression in v0.7.5's channel routing layer**, not isolated bugs. The security advisory (#6657/#6662) is narrowly patchable. The matrix-sdk memory leak is externally blocked.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Release |
|:---|:---|:---|
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) + [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | OTel turn-level tracing + full prompt/completion capture | **High** — JordanTheJet has working downstream fork; alexandme assigned |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | Telegram `update_draft_progress` for tool-call streaming | **Medium** — Audacity88 filed with clear spec; aligns with partial streaming work |
| [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | Preserve streamed output during websocket steering | **Medium** — Follow-up to #5161; gateway team context |
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | Host-architecture policy for `zeroclaw update` | **Low-Medium** — blocked on #5086 supersession decision |
| [#6658](https://github.com/zeroclaw-labs/zeroclaw/issues/6658) | musl aarch64 install script support | **Low** — niche platform, `priority:p2` |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | Native extended thinking for Anthropic/Bedrock | **Uncertain** — Large PR, `needs-author-action` since April, multi-provider scope |

**Prediction:** Observability (#6641/#6642) and Telegram UX (#6663) are the most shovel-ready features. The extended thinking PR (#5652) risks bit-rot without author re-engagement.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"Silent failures"** | #6646: tools "not firing" with no error; #6647: cron output "only appear in web dashboard" | Critical — violates principle of least surprise |
| **Platform/distribution gaps** | #6547 (Homebrew), #6658 (musl aarch64), #6653 (emulated installs) | High — friction at first contact |
| **Memory/session management** | #6651 (matrix leak), #6105 (cron no self-context), #6074 (153 commits lost) | High — erodes trust in runtime reliability |
| **Reasoning content fidelity** | #6269 (DeepSeek reasoning stripped) | Medium — provider-specific but growing user base |

### Use Case Tension
Users deploy ZeroClaw as **persistent proactive agents** (cron-driven, channel-integrated), but the architecture still treats cron as **fire-and-forget batch jobs**. The `session_target` parameter's broken "main" mode (#6648) is the smoking gun: the bridge was designed but not fully implemented.

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action

| Item | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | ~6 weeks | No assignee; security bypass in `web_fetch` | **Security debt** — `allowed_private_hosts` is documented but non-functional |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~3 weeks | Audit process only; no recovery PR | **Technical debt** — 153 commits in limbo, blocking confident development |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | ~5 weeks | `needs-author-action` | **Feature risk** — native thinking is competitive necessity; author may have disengaged |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | 1 day | No fix PR; `needs-maintainer-review` | **Release blocker** — v0.7.5 Telegram tool execution fundamentally broken |
| [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) | 1 day | Design needed for gateway push API | **Architecture gap** — external integrations (klodi-plugin) blocked |

### Review Bandwidth Bottleneck
Multiple PRs carry `needs-author-action` or `needs-maintainer-review` without recent activity: #5592 (Docker.debian, 5 weeks), #5566 (tool decomposition, 5 weeks), #6102 (Windows docs, 3 weeks). The 50 PRs updated today with only 7 closed suggests **review throughput is the limiting factor**, not code production.

---

*Digest generated from 73 items across zeroclaw-labs/zeroclaw. All links verified against provided data.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*