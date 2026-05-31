# OpenClaw Ecosystem Digest 2026-05-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-31 00:26 UTC

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

# OpenClaw Project Digest — 2026-05-31

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature project under heavy active development. The 432:68 open-to-closed issue ratio and 337:163 open-to-merged PR ratio suggest the team is prioritizing throughput over immediate closure, with substantial new work entering the pipeline. The v2026.5.28 release (published within this window) addresses critical Codex runtime stability, reflecting the project's focus on production reliability for agent orchestration. Community engagement is strong with multi-comment threads on channel integrations (Feishu, Telegram, Matrix) and auth provider migrations. However, the backlog of stale issues (multiple marked since early May) indicates accumulating technical debt around gateway stability and channel-specific regressions.

---

## 2. Releases

### v2026.5.28 — "openclaw 2026.5.28"

| Aspect | Details |
|--------|---------|
| **Release Date** | 2026-05-28 |
| **Focus** | Agent/Codex runtime recovery hardening |

**Highlights:**
- **Subagent workspace isolation**: Subagents now maintain proper `cwd`/`workspace` separation
- **Hook context scoping**: Hook context stays prompt-local instead of leaking across turns
- **Session lock safety**: Session locks release properly on timeout abort, while live OpenClaw locks survive cleanup
- **Stale continuation prevention**: Eliminates stale restart continuations that previously caused duplicate or orphaned runs
- **Codex app-server/helper failure resilience**: Better recovery paths when Codex auxiliary services fail

**Migration Notes:** Users on v2026.5.27 experiencing Codex timeout or session lock issues should upgrade immediately. The release specifically targets [#87744](https://github.com/openclaw/openclaw/issues/87744), [#87650](https://github.com/openclaw/openclaw/issues/87650), and related Codex provider/runtime mismatch problems.

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Title | Status | Significance |
|----|-------|--------|------------|
| [#87929](https://github.com/openclaw/openclaw/pull/87929) | `fix(cron): preserve plugin delivery targets` | **CLOSED** | Fixes cron job target stripping that broke plugin-resolved messaging; P1 message-delivery fix |
| — | *(v2026.5.28 release PR)* | **MERGED** | Codex runtime recovery bundle |

### Advancing Features (Open PRs with Momentum)

| PR | Title | Status | Progress |
|----|-------|--------|----------|
| [#88459](https://github.com/openclaw/openclaw/pull/88459) | `refactor: extract normalization core package` | OPEN, XL | Major architecture refactor to `@openclaw/normalization-core`; touches web-ui, gateway, CLI, agents |
| [#81402](https://github.com/openclaw/openclaw/pull/81402) | `refactor: move runtime state to SQLite` | OPEN, XL | Database-first runtime state (reopened after #78595 revert); critical for scalability |
| [#88476](https://github.com/openclaw/openclaw/pull/88476) | `feat: add Twilio SMS channel` | OPEN, XL | New channel expansion; signed webhooks, chunked delivery |
| [#87072](https://github.com/openclaw/openclaw/pull/87072) | `feat(telegram): opt-in interleaved progress lane` | OPEN, XL | UX innovation for Telegram; reasoning + events in live message |
| [#81851](https://github.com/openclaw/openclaw/pull/81851) | `feat(anthropic): claude-cli-interactive backend` | OPEN, XL | Local TLS proxy for streaming Anthropic reasoning; experimental |
| [#88468](https://github.com/openclaw/openclaw/pull/88468) | `fix(configure): migrate stale Codex defaults after OpenAI auth` | OPEN | Auto-fixes legacy `codex/gpt-5.5` → `openai/gpt-5.5` config drift |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

| # | Issue | Comments | Reactions | Core Need |
|---|-------|----------|-----------|-----------|
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | **Feishu message dispatch broken after v2026.5.27** — `TypeError: read property 'run' of undefined` | 12 | 👍1 | **Production channel reliability**; enterprise users blocked on Feishu (Chinese enterprise messaging) |
| [#86820](https://github.com/openclaw/openclaw/issues/86820) | **Codex OAuth compaction falls back to direct OpenAI API without OPENAI_API_KEY** | 12 | 👍6 | **Auth provider stability**; Codex users forced to expose API keys |
| [#73424](https://github.com/openclaw/openclaw/issues/73424) | **Image tool "Failed to optimize image" in preprocessing** | 9 | 👍1 | **Media understanding pipeline**; VLM integration reliability |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | **Matrix thread replies sent as normal replies; /status and /model silent** | 8 | 👍1 | **Matrix protocol compliance**; threading is core to Matrix UX |
| [#86169](https://github.com/openclaw/openclaw/issues/86169) | **Add Xiaomi MiMo Token Plan provider support** | 8 | 👍1 | **Chinese model provider expansion**; localization/token-economy |

### Underlying Needs Analysis

- **Enterprise messaging dominance**: Feishu, Slack, Teams, Matrix issues cluster heavily — OpenClaw's channel abstraction layer is stressed by vendor API drift
- **Codex auth fragility**: Multiple issues trace to OpenAI/Codex OAuth → API key fallback paths; suggests the provider routing logic needs architectural simplification
- **Non-English market expansion**: Xiaomi MiMo, Feishu, Zalo, and QQbot issues indicate growth pressure in APAC markets requiring localized provider support

---

## 5. Bugs & Stability

### Critical (P1) — Active or Recently Fixed

| Issue | Severity | Status | Fix PR? | Description |
|-------|----------|--------|---------|-------------|
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | **CRITICAL** | CLOSED | Yes (in v2026.5.28) | Feishu dispatch crash — `TypeError: Cannot read properties of undefined (reading 'run')`; root cause in `monitor.account-Z4CGfEWQ.js` |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | **CRITICAL** | OPEN | No new fix PR | Codex-backed Telegram turns timeout waiting for `turn/completed`; session state leak |
| [#88020](https://github.com/openclaw/openclaw/issues/88020) | **CRITICAL** | OPEN | No new fix PR | `REPLAY_INVALID_RE` missing Anthropic "Invalid signature in thinking block" — hard session failure instead of retry |
| [#88352](https://github.com/openclaw/openclaw/issues/88352) | **CRITICAL** | OPEN | No new fix PR | Codex transient starts drop prior session context after #88262 regression |
| [#65538](https://github.com/openclaw/openclaw/issues/65538) | **HIGH** | OPEN | Linked PR open | Accessibility: screen readers announce every token during streaming (`aria-live="polite"`) |

### Regressions from Recent Versions (v2026.5.27+)

| Issue | Regression Source | Impact |
|-------|-------------------|--------|
| [#87646](https://github.com/openclaw/openclaw/issues/87646), [#88234](https://github.com/openclaw/openclaw/issues/88234) | v2026.5.27 | Feishu dispatch completely broken |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | v2026.5.27 | Codex Telegram timeouts |
| [#87725](https://github.com/openclaw/openclaw/issues/87725) | v2026.5.27 | Codex missing-terminal fallback leaks to Discord channel |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | v2026.5.22 | Matrix thread behavior regression |

### Stale but Persistent (Updated Today, Open >30 days)

| Issue | Age | Risk |
|-------|-----|------|
| [#76315](https://github.com/openclaw/openclaw/issues/76315) | ~29 days | Gateway instability under subagent load — Linux production risk |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) | ~30 days | Codex harness migration routing bugs — blocks clean adoption |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | ~31 days | Multi-tool turn replay orphans after compaction — data integrity |

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (High Engagement)

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#76952](https://github.com/openclaw/openclaw/issues/76952) | Realtime Talk voice docs, voice-agent role, mobile/phone bridge | **HIGH** | Realtime Talk is flagged as "working" and "genuinely useful"; docs gap is low-hanging fruit |
| [#73699](https://github.com/openclaw/openclaw/issues/73699) | Bridge Discord voice channel I/O to text-channel agent session | **MEDIUM** | Voice-as-IO architecture aligns with Realtime Talk; requires session unification work |
| [#75074](https://github.com/openclaw/openclaw/issues/75074) | `/v1/responses` opt-in flag to surface built-in tool calls | **MEDIUM** | Blocks offline eval tooling; API surface change |
| [#66670](https://github.com/openclaw/openclaw/issues/66670) | `sessions_spawn` populate `agent_id` in `task_runs` SQLite | **HIGH** | Observability gap; small schema change |

### Architecture Signals from PRs

| PR | Direction | Implication |
|----|-----------|-------------|
| [#81402](https://github.com/openclaw/openclaw/pull/81402) | SQLite runtime state | Foundation for multi-instance gateway, better crash recovery |
| [#88459](https://github.com/openclaw/openclaw/pull/88459) | Normalization core package | Plugin SDK stability, reduced import cycles |
| [#88476](https://github.com/openclaw/openclaw/pull/88476) | Twilio SMS channel | Telephony bridge expansion; likely precursor to voice-call enhancements |

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Specific Complaint | Frequency |
|----------|-------------------|-----------|
| **Upgrade fragility** | "After upgrading from v2026.5.26 to v2026.5.27, the feishu channel fails" | **HIGH** — multiple channel regressions on point releases |
| **Codex auth confusion** | "Running `openclaw onboard` did not repair the model provider/runtime mismatch" | **HIGH** — OAuth vs API key vs runtime ID trifurcation |
| **Windows degradation** | "OpenClaw on native Windows getting notably slower and slower with each new version" | **MEDIUM** — performance regression on non-Linux |
| **Silent failures** | "CLI silently falls back to embedded mode, masking gateway behavior" | **MEDIUM** — diagnostic opacity |
| **Config drift** | "Every change requires image rebuild in policy-locked sandboxes" | **MEDIUM** — container/ops friction |

### Satisfaction Signals

- **Realtime Talk**: "genuinely useful and low-latency" — rare unqualified praise
- **Codex integration**: When working, valued for agent orchestration depth
- **Channel breadth**: Users actively expanding to niche platforms (MiMo, Zalo, QQbot)

### Use Case Evolution

| Emerging Pattern | Evidence |
|-----------------|----------|
| **Enterprise multi-channel deployments** | Feishu + DingTalk + Slack + Teams simultaneously |
| **Local/self-hosted model stacks** | Ollama, llama.cpp, LM Studio integration PRs |
| **Regulated/sandboxed environments** | Landlock policy, read-only plugin configs, exec deny patterns |

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Attention (>30 days, P1/P2, no fix PR)

| Issue | Age | Blocker | Action Needed |
|-------|-----|---------|---------------|
| [#76315](https://github.com/openclaw/openclaw/issues/76315) | ~29 days | Linux gateway instability under load | Repro on subagent stress; may relate to event-loop blocking |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) | ~30 days | Codex harness migration routing | Product decision on `agentRuntime.fallback="none"` semantics |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | ~31 days | Anthropic 400 on multi-tool sessions | Session compaction logic; tool_use ID lifecycle |
| [#65156](https://github.com/openclaw/openclaw/issues/65156) | ~49 days | sqlite-vec ABI mismatch | SQLite extension loading; Node.js version matrix |
| [#48780](https://github.com/openclaw/openclaw/issues/48780) | ~75 days | Windows exec/read corruption | `</arg_value>>` suffix suggests XML/argument serialization bug |

### Stalled PRs (Waiting on Author >14 days)

| PR | Title | Stalled Since | Blocker |
|----|-------|---------------|---------|
| [#75128](https://github.com/openclaw/openclaw/pull/75128) | BOOT.md stripping from fallback model args | ~31 days | Video proof requested; author @stainlu pending |
| [#81851](https://github.com/openclaw/openclaw/pull/81851) | claude-cli-interactive backend | ~17 days | Complex security review; MITM proxy architecture |
| [#81830](https://github.com/openclaw/openclaw/pull/81830) | Security audit false-positive fix | ~17 days | Waiting on author revision |

### Maintainer Capacity Signal

The `clawsweeper` labels (`no-new-fix-pr`, `needs-maintainer-review`, `needs-product-decision`) appear on **>40% of open P1 issues**, indicating reviewer bandwidth is the primary constraint. The high volume of "ready for maintainer look" PRs ([#88474](https://github.com/openclaw/openclaw/pull/88474), [#88163](https://github.com/openclaw/openclaw/pull/88163), [#88351](https://github.com/openclaw/openclaw/pull/88351), [#88410](https://github.com/openclaw/openclaw/pull/88410)) queued on 2026-05-30/31 suggests a batch review may be pending.

---

*Digest generated from 500 issues and 500 PRs updated 2026-05-30 to 2026-05-31. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent & Personal Assistant Ecosystem
**Date:** 2026-05-31 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem in mid-2026 exhibits **extreme bifurcation**: a handful of high-velocity projects (OpenClaw, ZeroClaw, IronClaw, Hermes Agent) drive architectural innovation at 50–500 items/day, while the majority languish in maintenance mode or near-stagnation. **Production reliability has overtaken feature novelty as the primary competitive axis**—every active project is grappling with session state integrity, auth provider fragility, and cross-platform channel abstraction. Voice infrastructure, desktop automation, and multi-agent orchestration are emerging as the next battlegrounds, though ZeroClaw's abrupt desktop retreat signals strategic uncertainty. The ecosystem remains **pre-consolidation**: no clear interoperability standards, rampant duplicate effort on channel integrations (Feishu, Telegram, Matrix), and divergent memory architectures.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Closed/Merged | Release Status | Health Score* | Tier |
|:---|:---:|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | 432:68 issues, 337:163 PRs | v2026.5.28 (active) | 🟢 8.5/10 | Hyperactive |
| **ZeroClaw** | 50 | 50 | 39 issues, 34 PRs (68% closure) | None (v0.7.8 pending) | 🟡 7.0/10 | High-velocity |
| **IronClaw** | 3 | 21 | 13 merged/closed | None since v0.24.0 (Mar) | 🟡 6.5/10 | High-velocity |
| **Hermes Agent** | 50 | 50 | 6 merged/closed | None | 🟡 6.0/10 | Active |
| **NanoBot** | 7 | 15 | 10 closed/merged | None (patches landed) | 🟢 7.5/10 | Active |
| **NanoClaw** | 0 | 15 | 4 merged | None | 🟡 5.5/10 | Moderate |
| **PicoClaw** | 7 | 12 | 4 merged/closed | v0.2.9 + nightlies | 🟡 5.0/10 | Moderate |
| **CoPaw (QwenPaw)** | 11 | 3 | 0 merged | None (v1.1.9 latest) | 🟠 4.5/10 | Moderate |
| **NullClaw** | 0 | 2 | 2 merged | v2026.5.29 | 🟢 7.0/10 | Stable/minimal |
| **LobsterAI** | 0 | 2 (stale) | 0 | None | 🔴 3.0/10 | Stagnant |
| **TinyClaw** | — | — | — | — | ⚪ N/A | Dormant |
| **Moltis** | — | — | — | — | ⚪ N/A | Dormant |
| **ZeptoClaw** | — | — | — | — | ⚪ N/A | Dormant |

*\*Health score combines velocity, closure rate, release cadence, and backlog risk. Subjective 0–10.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitor | Gap |
|:---|:---|:---|:---|
| **Raw throughput** | 1,000 items/day | ZeroClaw (100), Hermes (100) | **10×** |
| **Release discipline** | Weekly point releases with migration notes | IronClaw (2-month gap), ZeroClaw (pending) | **Production trust** |
| **Channel breadth** | Feishu, Telegram, Matrix, Twilio SMS (in PR), Discord, Slack, Teams | Hermes (similar breadth, more gaps) | **Enterprise messaging dominance** |
| **Subagent/orchestration depth** | Codex runtime, workspace isolation, hook scoping | IronClaw (emerging triggers), NanoClaw (basic groups) | **Mature agent hierarchy** |
| **Community scale** | 500 issues/PRs implies 100+ active contributors | All others <50 items/day | **Network effects** |

### Technical Approach Differences

| Aspect | OpenClaw | Peers |
|:---|:---|:---|
| **Runtime state** | SQLite migration in progress (#81402) | IronClaw (Rust/WASM), ZeroClaw (orchestrator pipeline RFC), Hermes (Python sync) |
| **Auth architecture** | OAuth ↔ API key fallback paths (problematic but explicit) | IronClaw (ProductAuthAccount migration), NanoBot (registry-driven config) |
| **Memory model** | Implicit via Codex session + compaction | IronClaw (structured compaction summaries, behavioral nudges), NanoBot (Dream system toggle + manual mode) |
| **Deployment target** | Gateway + channel abstraction (Linux-primary, Windows degrading) | ZeroClaw (voice-first, web-UI), IronClaw (Reborn platform, WASM), PicoClaw (embedded/Sipeed) |

### Community Size Comparison

OpenClaw operates at **ecosystem-defining scale**—its issue volume alone exceeds the combined activity of NanoBot, NanoClaw, PicoClaw, CoPaw, and LobsterAI. This creates both **advantages** (rapid bug discovery, diverse use cases) and **liabilities** (reviewer bandwidth constraint: >40% of P1 issues lack maintainer attention). Hermes Agent shows comparable *proportion* of security focus but lacks OpenClaw's channel integration depth. ZeroClaw matches OpenClaw's velocity ambition but with **strategic volatility** (desktop removal).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Feishu/Lark enterprise messaging** | OpenClaw, NanoBot, Hermes, PicoClaw, CoPaw | API drift resilience; thread_id lifecycle; dispatch crash recovery |
| **Codex/OpenAI runtime stability** | OpenClaw, Hermes, PicoClaw | OAuth compaction fallback; session lock safety; reasoning_content preservation |
| **Voice conversation infrastructure** | ZeroClaw (shipped), OpenClaw (Realtime Talk "genuinely useful"), NanoClaw (whisper.cpp PR) | Full-duplex audio; VAD/barge-in; STT provider flexibility |
| **Session state integrity** | OpenClaw (SQLite refactor), NanoBot (per-session locks), IronClaw (interruptible LLM calls), ZeroClaw (context compressor fixes) | Concurrency-safe history; compaction without data loss; timeout abort cleanup |
| **Security hardening** | Hermes (shell=True elimination), NanoBot (SSRF, Matrix bounds), IronClaw (injection scanning, auth architecture), NanoClaw (cross-channel validation) | Sandboxed execution; secret redaction without corruption; prompt injection defense |
| **Cross-provider compatibility** | OpenClaw (Anthropic, DeepSeek, Xiaomi MiMo), Hermes (Anthropic thinking blocks, Cerebras poisoning), NanoBot (Anthropic type coercion), ZeroClaw (DeepSeek reasoning_content) | Provider-native feature preservation; history format normalization; credential routing |
| **Desktop/web UI parity** | CoPaw (IDE-like workflows), ZeroClaw (removed Tauri), LobsterAI (stale macOS fixes), IronClaw (WebUI v2 auth) | Platform-native conventions; modal/chat patterns; shortcut fidelity |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Agent orchestration at scale | Enterprise multi-channel deployments | Node.js gateway, plugin SDK, Codex-native |
| **IronClaw** | Reborn platform (WASM + triggers + auth) | Rust ecosystem, NEAR blockchain integrators | Rust/WASM, crates.io distribution, async I/O |
| **ZeroClaw** | Voice-first personal AI | Voice-interaction power users | WebSocket audio pipeline, orchestrator RFC, strategic pivot risk |
| **Hermes Agent** | Self-improving agent cognition | Research/power users | Python, meta-learning loops, desktop app (Electron) |
| **NanoBot** | Configurable autonomous memory | Self-hosters, privacy-conscious | Dream system toggles, manual memory mode, bwrap sandboxing |
| **NanoClaw** | Enterprise operability (backup, AWS, multi-instance) | DevOps/IT teams | XML monitoring, agent groups, Apple Container support |
| **PicoClaw** | Embedded/hardware-adjacent | Sipeed hardware users, APAC market | Go, lightweight, i18n-first |
| **CoPaw (QwenPaw)** | IDE-integrated agent (Trae/Cursor parity) | Chinese developers, VS Code-like workflows | Desktop client, ACP protocol, Docker packaging |
| **NullClaw** | Minimalist runtime correctness | Systems programmers, embedded services | Zig, POSIX correctness, zero dependencies |
| **LobsterAI** | NetEase Youdao ecosystem integration | Chinese consumers, local AI hub | Tauri desktop, MCP integration |

**Key architectural divergence**: OpenClaw, Hermes, and NanoBot pursue **broad channel abstraction** (universal gateway); IronClaw and ZeroClaw invest in **platform/runtime control** (WASM triggers, voice pipeline); CoPaw and LobsterAI optimize for **desktop-native IDE experience**; NullClaw alone targets **systems-level minimalism**.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics | Risk Signal |
|:---|:---|:---|:---|
| **Rapidly Iterating** | OpenClaw, ZeroClaw, IronClaw | >20 items/day, stacked PR sequences, architectural RFCs | Burnout, review debt, strategic whiplash (ZeroClaw desktop removal) |
| **Active Maintenance** | Hermes Agent, NanoBot, NanoClaw | 10–50 items/day, security responsiveness, feature incubation | Release lag (NanoBot), contributor orphaning (NanoClaw #212) |
| **Stabilizing/Bug-fix** | PicoClaw, CoPaw | Point-release recovery, regression triage, Windows QA gaps | User frustration (PicoClaw release cadence), platform neglect (CoPaw Windows) |
| **Mature/Minimal** | NullClaw | Zero open issues, correctness patches, release discipline | Underreporting risk, low adoption signal |
| **Stagnant/Dormant** | LobsterAI, TinyClaw, Moltis, ZeptoClaw | <2 items/day, stale PRs, no releases | Contributor disengagement, project abandonment |

**Momentum inflection points**:
- OpenClaw risks **maintainer capacity collapse** (>40% P1 issues unassigned)
- ZeroClaw's **desktop removal without community consultation** may trigger contributor exodus
- IronClaw's **crates.io publication gap** threatens Rust ecosystem trust
- NanoBot's **memory system overhaul** (manual mode + RAG + Dream toggle) could define next-generation autonomous agent UX if shipped

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Voice as primary modality** | ZeroClaw shipped full-duplex pipeline; OpenClaw Realtime Talk praised; NanoClaw whisper.cpp incoming | Design for barge-in, VAD, and interruptible LLM calls; audio latency matters more than text latency |
| **Enterprise messaging as table stakes** | Feishu issues dominate OpenClaw, NanoBot, Hermes, PicoClaw, CoPaw | Channel abstraction must handle vendor API drift, thread semantics, and enterprise auth (Azure Identity, OAuth2) |
| **Memory configurability over opacity** | NanoBot Dream toggle + manual mode; IronClaw structured compaction; OpenClaw session compaction orphans | Users demand control over *when* agents remember, *what* they compress, and *how* they persist—autonomous != uncontrolled |
| **Security as UX, not afterthought** | Hermes shell=True elimination; IronClaw injection scanning; NanoBot SSRF/Matrix bounds; NanoClaw cross-channel validation | Sandboxing, secret handling, and prompt injection defense must be invisible or users will disable them |
| **Provider-native feature preservation** | Anthropic thinking blocks (Hermes, OpenClaw, NanoBot, ZeroClaw); DeepSeek reasoning_content (ZeroClaw) | Normalization layers must not strip provider-specific capabilities—users choose providers *for* these features |
| **Desktop uncertainty, web resilience** | ZeroClaw removed Tauri; CoPaw doubles down on desktop; LobsterAI stale | Web-first deployment reduces platform maintenance burden; desktop is high-investment, high-risk |
| **Self-hosted model stack growth** | Ollama, llama.cpp, LM Studio mentions (OpenClaw); local whisper (NanoClaw); Xiaomi MiMo (OpenClaw) | Offline capability and token economics drive APAC adoption; expect regional provider fragmentation |

---

**Conclusion**: OpenClaw leads on throughput and production maturity but faces scaling constraints. The ecosystem is coalescing around voice, enterprise messaging, and memory control as the next competitive vectors, yet remains fragmented on architecture (gateway vs. platform vs. IDE) and release discipline. Developers should prioritize projects with **demonstrated cross-provider resilience** and **explicit memory configurability**—these are the capabilities that will differentiate production deployments in 2026 H2.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-31

## 1. Today's Overview

NanoBot showed **strong engineering velocity** with 22 tracked items updated in the last 24 hours (7 issues, 15 PRs), including 10 closed/merged items and 12 remaining open. The project demonstrates active maintenance with **zero open security vulnerabilities** after today's patches—two security fixes merged for SSRF normalization and Matrix media bounds. However, **no new release was cut** despite significant bug fixes landing, suggesting either a pending release window or release process lag. The community is pushing on multiple fronts: memory system architecture, multi-agent collaboration, provider ecosystem expansion, and WebUI polish.

---

## 2. Releases

**None** — No new version published as of 2026-05-31.

---

## 3. Project Progress

### Merged/Closed PRs Today (6 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#4054](https://github.com/HKUDS/nanobot/pull/4054) | **Dual fix**: Anthropic content block type coercion + Dream system enable toggle | Closes [#3993](https://github.com/HKUDS/nanobot/issues/3993), [#3885](https://github.com/HKUDS/nanobot/issues/3885) — provider compatibility + memory system configurability |
| [#4104](https://github.com/HKUDS/nanobot/pull/4104) | Acquire per-session lock in `process_direct` | Closes [#4080](https://github.com/HKUDS/nanobot/issues/4080) — **critical concurrency bugfix** preventing session history corruption |
| [#4110](https://github.com/HKUDS/nanobot/pull/4110) | Matrix SAS device verification for Element X | Closes [#4042](https://github.com/HKUDS/nanobot/issues/4042) — E2EE UX fix for modern Matrix clients |
| [#4108](https://github.com/HKUDS/nanobot/pull/4108) | WebUI output timeline + model controls refinement | Major UX upgrade: activity timeline, queued composer, better Markdown rendering |
| [#4086](https://github.com/HKUDS/nanobot/pull/4086) | Normalize IPv6-mapped IPv4 in SSRF checks | Security hardening — closes bypass vector |
| [#4106](https://github.com/HKUDS/nanobot/pull/4106) | Bound inbound Matrix media downloads | Security hardening — prevents unbounded memory consumption |

**Key advancement areas**: Security posture (2 fixes), core reliability (dispatch locking), Matrix channel maturity, WebUI user experience, and LLM provider robustness.

---

## 4. Community Hot Topics

### Most Active Discussion: Dream System Configuration ([#3885](https://github.com/HKUDS/nanobot/issues/3885) → [#4054](https://github.com/HKUDS/nanobot/pull/4054))
- **4 comments** — highest engagement in the dataset
- **Underlying need**: Users want **fine-grained control over autonomous background processes**. The unconditional Dream cron registration was perceived as "always-on" bloat, especially for users disabling memory features or running minimal deployments. The `enabled` toggle + manual memory mode ([#4050](https://github.com/HKUDS/nanobot/pull/4050)) together signal a **shift toward user-controlled memory architecture**.

### Emerging: Heartbeat Notification Spam ([#4111](https://github.com/HKUDS/nanobot/issues/4111) / [#4114](https://github.com/HKUDS/nanobot/pull/4114), [#4112](https://github.com/HKUDS/nanobot/pull/4112))
- **Two competing PRs** opened same day for same issue
- **Underlying need**: "Fail-closed" vs "fail-open" philosophy tension in automated notifications. Users want **predictable silence** when no tasks exist, but the system was sending "All clear." due to template-matching fragility. The dual PRs suggest maintainer coordination needed on approach.

### Cross-Agent Messaging ([#3992](https://github.com/HKUDS/nanobot/pull/3992))
- **Architecturally significant**: Enables multi-instance agent swarms
- **Risk**: No comments/reactions yet — may need championing or clearer use-case documentation to gain traction.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#4080](https://github.com/HKUDS/nanobot/issues/4080) / [#4104](https://github.com/HKUDS/nanobot/pull/4104) | `process_direct` bypasses per-session dispatch locks → **history corruption under concurrency** | ✅ **Merged** |
| **Medium** | [#4111](https://github.com/HKUDS/nanobot/issues/4111) | Heartbeat spams "All clear." to Feishu when no actual tasks | 🔄 **Fix PRs open** ([#4114](https://github.com/HKUDS/nanobot/pull/4114), [#4112](https://github.com/HKUDS/nanobot/pull/4112)) |
| **Medium** | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | Custom provider drops empty-string reasoning content in tool_call messages | ❌ **Open, no PR** |
| **Medium** | [#4042](https://github.com/HKUDS/nanobot/issues/4042) / [#4110](https://github.com/HKUDS/nanobot/pull/4110) | Matrix E2EE warnings on Element X due to missing SAS verification | ✅ **Merged** |
| **Low-Medium** | [#3993](https://github.com/HKUDS/nanobot/issues/3993) / [#4054](https://github.com/HKUDS/nanobot/pull/4054) | Anthropic rejects typeless content blocks from tool returns | ✅ **Merged** |

**Stability assessment**: Core dispatch system hardened; remaining open bug (#4105) is provider-edge-case with no fix yet. Heartbeat issue has **active competing fixes** — risk of merge conflict or approach fragmentation.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Maturity Signal | Likelihood in Next Release |
|:---|:---|:---|:---|
| **Manual memory mode** | [#4050](https://github.com/HKUDS/nanobot/pull/4050) | PR open, relates to merged #3885 | **High** — pairs with Dream toggle as coherent memory UX package |
| **Lightweight RAG for memory** | [#4109](https://github.com/HKUDS/nanobot/pull/4109) | PR opened today, local embeddings | **Medium** — depends on memory system refactor completion |
| **Cross-agent messaging bus** | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | PR open since May 24, no engagement | **Low-Medium** — needs architectural review, testing infrastructure |
| **Configurable bwrap sandbox mounts** | [#4107](https://github.com/HKUDS/nanobot/issues/4107) | Issue open, no PR | **Medium** — security/usability improvement, scope-constrained |
| **OpenRouter STT provider** | [#4113](https://github.com/HKUDS/nanobot/pull/4113) | PR open today | **High** — extends existing provider pattern, low risk |
| **Registry-driven provider config** | [#3994](https://github.com/HKUDS/nanobot/pull/3994) | PR open since May 25 | **Medium** — infrastructure change, needs WebUI coordination |
| **Tokenizer pre-warming + perf logging** | [#3997](https://github.com/HKUDS/nanobot/pull/3997) | PR open since May 25 | **Medium** — performance optimization, non-breaking |

**Roadmap prediction**: Next release likely bundles **memory system overhaul** (manual mode + RAG + Dream toggle) with **provider ecosystem expansion** (OpenRouter STT, registry config). Cross-agent messaging may slip without maintainer attention.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Unwanted automation noise** | Heartbeat "All clear." spam (#4111); unconditional Dream cron (#3885) | Medium — erodes trust in autonomous features |
| **E2EE friction in Matrix** | Element X verification warnings (#4042) | Medium — affects professional/secure deployments |
| **Sandbox inflexibility** | Hardcoded bwrap paths block custom toolchains (#4107) | Medium — power user blocker |
| **Provider-specific fragility** | Anthropic type requirements (#3993), custom provider reasoning drops (#4105) | Medium — integration tax |

### Positive Signals
- **WebUI investment appreciated**: [#4108](https://github.com/HKUDS/nanobot/pull/4108) shows responsive UX iteration
- **Security responsiveness**: Two security patches merged promptly
- **Configuration flexibility trending**: Community successfully advocated for Dream toggle, now extending to memory modes and sandbox mounts

### Use Case Evolution
Users are pushing NanoBot from **personal assistant** toward **team-deployable infrastructure** — multi-agent (#3992), bounded resource consumption (#4106, #4107), and noise-free automation (#4111, #3885) all signal enterprise/self-hosted operational needs.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) Cross-agent messaging | 7 days | **Architectural orphan** — significant feature, zero comments | Maintainer review for scope/alignment; needs test suite visibility |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) Registry-driven provider config | 6 days | **Blocked on design consensus?** | WebUI maintainer sign-off on settings payload shape |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) Tokenizer pre-warming | 6 days | **Low risk, unclear priority** | Performance benchmark validation or deferral decision |
| [#4034](https://github.com/HKUDS/nanobot/pull/4034) GitAgent Protocol | 3 days | **Duplicate label applied** | Clarify if duplicate of existing effort; close or redirect |
| [#4105](https://github.com/HKUDS/nanobot/issues/4105) Custom provider reasoning drop | 1 day | **No fix PR, user-reported regression** | Triage for severity; likely quick fix if prioritized |

**Maintainer attention priority**: Cross-agent messaging PR (#3992) risks staleness despite architectural significance; custom provider bug (#4105) needs assignment to prevent user frustration.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-30/31.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-31

## 1. Today's Overview

Hermes Agent shows **high-velocity development activity** with 100 items updated in the last 24 hours (50 issues, 50 PRs), though the 5:1 open-to-closed ratio for both categories indicates a growing backlog. No new releases were cut today, suggesting the project is in an active development phase rather than a stabilization window. The community is particularly focused on **security hardening** (multiple `shell=True` eliminations), **cross-provider compatibility** (Anthropic thinking blocks, Cerebras history poisoning), and **platform gateway robustness** (Telegram, Feishu, Discord). Notably, Hermes Agent instances are now filing their own bug reports (#17861), demonstrating meta-circular development patterns.

---

## 2. Releases

**No new releases** — None published as of 2026-05-31.

---

## 3. Project Progress

### Merged/Closed PRs Today (6 total)

| PR | Description | Significance |
|---|---|---|
| [#35591](https://github.com/NousResearch/hermes-agent/pull/35591) | **fix(codex): salvage streamed output when final response is empty** | Closed — Codex streaming resilience |
| [#35552](https://github.com/NousResearch/hermes-agent/pull/35552) | **fix(process_registry): keep poll() read-only** | Closed — Event delivery reliability |
| [#35551](https://github.com/NousResearch/hermes-agent/pull/35551) | **feat(agent): MemoryManager thread-safe with RLock + multi-provider** | Closed — Duplicate, superseded |
| [#35546](https://github.com/NousResearch/hermes-agent/issues/35546) | *(issue)* Windows MEDIA path quoting | Closed as duplicate |

### Notable Open PRs Advancing

| PR | Description | Area |
|---|---|---|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | **Add Hermes desktop app** (Electron/Vite) — *long-running, major feature* | Gateway/TUI |
| [#35545](https://github.com/NousResearch/hermes-agent/pull/35545) | **Security: convert shell=True to shlex.split** in CLI and MCP catalog | Security |
| [#35596](https://github.com/NousResearch/hermes-agent/pull/35596) | Atomic cleanup of partial kanban attachments on OSError | Reliability |
| [#35594](https://github.com/NousResearch/hermes-agent/pull/35594) | Atomic restore for cron/jobs.json via tempfile + rename | Data integrity |
| [#35354](https://github.com/NousResearch/hermes-agent/pull/35354) | **Self-improvement protocol for agent meta-learning** (OODA-Reflect loop) | Agent cognition |
| [#10993](https://github.com/NousResearch/hermes-agent/pull/10993) | Memory page in web dashboard | UX |
| [#31569](https://github.com/NousResearch/hermes-agent/pull/31569) | Skip Ollama probes for known non-Ollama providers | Performance |

**Key advancement**: The `shell=True` elimination campaign is gaining momentum with [#35545](https://github.com/NousResearch/hermes-agent/pull/35545), addressing a systemic security debt. The desktop app PR [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) represents the largest UX expansion in months.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) | 4 | Anthropic thinking/redacted_thinking blocks lost in multi-turn | **Provider-native feature preservation** — users need reasoning chains to survive context window management |
| [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) | 4 | `/new`, `/clear`, `/reset` freeze terminal | **Session lifecycle reliability** — basic CLI hygiene is broken |
| [#35474](https://github.com/NousResearch/hermes-agent/issues/35474) | 4 | `.md`/`.markdown` MEDIA extraction missing | **Document type completeness** — markdown is core to developer workflows |
| [#27657](https://github.com/NousResearch/hermes-agent/issues/27657) | 3 | Brain-as-source-of-truth integration | **External knowledge system integration** — users have existing PKM systems |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | 2 | Tirith scanner false positives on user-owned executables | **Security UX balance** — over-eager blocking harms legitimate workflows |

**Analysis**: The top issues reveal tension between **Hermes as a self-contained system** and **Hermes as a participant in broader tool ecosystems**. Users want their existing knowledge bases (Brain, Claude skills), document types, and security postures respected rather than replaced.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---:|---|---|---|
| **P0** | [#35584](https://github.com/NousResearch/hermes-agent/issues/35584) | **Security**: Gateway leaks protected `config.yaml` via file attachment when write denied | None yet — *critical, filed today* |
| **P1** | [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) | Anthropic thinking blocks lost in history | None |
| **P1** | [#35543](https://github.com/NousResearch/hermes-agent/issues/35543) | **Closed**: Cross-provider poisoned history (reasoning_content → HTTP 400) | Fixed via closure |
| **P1** | [#35519](https://github.com/NousResearch/hermes-agent/issues/35519) | `redact_sensitive_text` corrupts API keys in config files → 401 errors | None |
| **P1** | [#14141](https://github.com/NousResearch/hermes-agent/issues/14141) | Custom providers with same `base_url` use wrong credentials | None |
| **P2** | [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) | Terminal freeze on `/new`, `/clear`, `/reset` | None |
| **P2** | [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | Tirith scanner blocks legitimate pipe-to-interpreter | None |
| **P2** | [#16560](https://github.com/NousResearch/hermes-agent/issues/16560) | Command injection via `shell=True` in TUI gateway | Partial: [#35545](https://github.com/NousResearch/hermes-agent/pull/35545) |
| **P2** | [#23783](https://github.com/NousResearch/hermes-agent/issues/23783) | Telegram token conflict after update (gateway fails to start) | None |
| **P2** | [#35576](https://github.com/NousResearch/hermes-agent/issues/35576) | Feishu auto-resume fails with stale `thread_id` | None |

**Regressions**: Dashboard v0.14.0 had reverse-proxy breakage ([#34227](https://github.com/NousResearch/hermes-agent/issues/34227)) — now closed. The P0 security issue [#35584](https://github.com/NousResearch/hermes-agent/issues/35584) demands immediate attention: a failed config write becomes a config leak.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Release | Rationale |
|---|---|---|---|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Hermes Desktop App (Electron) | **High** — major investment, active since May 5 |
| [#10993](https://github.com/NousResearch/hermes-agent/pull/10993) | Web Dashboard Memory page | **High** — complements desktop app |
| [#35354](https://github.com/NousResearch/hermes-agent/pull/35354) | Self-improvement protocol / meta-learning | **Medium** — research-aligned, but complex |
| [#35587](https://github.com/NousResearch/hermes-agent/issues/35587) | Claude-to-Hermes migration skill | **Medium** — ecosystem expansion play |
| [#27657](https://github.com/NousResearch/hermes-agent/issues/27657) | Brain-as-source-of-truth integration | **Medium** — user demand clear, architecture work needed |
| [#27579](https://github.com/NousResearch/hermes-agent/issues/27579) | Idle-triggered context compression | **Medium** — performance UX, non-trivial |
| [#28547](https://github.com/NousResearch/hermes-agent/issues/28547) | Guardrail: warn before `/new` with active subagents | **Low-Medium** — safety polish |

**Prediction**: The next release (likely v0.15.0) will center on the **desktop app launch** with supporting dashboard improvements. Security hardening (`shell=True` elimination) may trigger a patch release sooner.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Session management fragility** | Terminal freezes (#33961), Telegram token conflicts (#23783), Feishu stale threads (#35576) | High — basic operations fail |
| **Security tooling overreach** | Tirith false positives (#32737), secret redaction corrupting configs (#35519), file guard leaking paths (#35584) | High — security theater harming usability |
| **Cross-provider rough edges** | History poisoning (#35543, #17861), credential misrouting (#14141), auxiliary provider noise (#35095) | Medium — multi-provider is core value prop |
| **Platform gateway gaps** | Missing `.md` MEDIA (#35474), Discord tool loading (#35527), cron tool cache invalidation (#35561) | Medium — platform parity incomplete |

### Satisfaction Signals

- **Meta-circular usage**: Hermes filing its own bugs (#17861) indicates power-user adoption
- **Migration demand**: Claude skill import request (#35587) shows ecosystem attractiveness
- **Desktop app anticipation**: [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) engagement

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue | Age | Risk | Action Needed |
|---|---|---|---|
| [#5129](https://github.com/NousResearch/hermes-agent/issues/5129) | ~57 days | Memory provider double-instantiation | Architecture review — background memory design |
| [#2743](https://github.com/NousResearch/hermes-agent/issues/2743) | ~68 days | `shell=True` in TTS/transcription | Security audit — partially addressed by [#35545](https://github.com/NousResearch/hermes-agent/pull/35545) |
| [#10692](https://github.com/NousResearch/hermes-agent/issues/10692) | ~45 days | `shell=True` in config-driven execution | **Closed** — verify fix coverage |
| [#16560](https://github.com/NousResearch/hermes-agent/issues/16560) | ~34 days | TUI gateway command injection | Maintainer triage — [#35545](https://github.com/NousResearch/hermes-agent/pull/35545) partial? |
| [#14141](https://github.com/NousResearch/hermes-agent/issues/14141) | ~39 days | Custom provider credential misrouting | Provider config architecture decision |

### PRs Needing Maintainer Attention

| PR | Status | Blocker |
|---|---|---|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Open since May 5 | Large feature — needs final review/merge decision |
| [#10993](https://github.com/NousResearch/hermes-agent/pull/10993) | Open since Apr 16 | Dashboard memory page — may be waiting for desktop app coordination |
| [#28795](https://github.com/NousResearch/hermes-agent/pull/28795) | Open since May 19 | CLI flag parsing — narrow fix, ready for merge? |
| [#28039](https://github.com/NousResearch/hermes-agent/pull/28039) | Open since May 18 | Codex response normalization — P1 bugfix |

**Concern**: The 44:6 open-to-merged PR ratio suggests either **high review latency** or **quality gating**. The P0 security issue [#35584](https://github.com/NousResearch/hermes-agent/issues/35584) filed today with no PR yet is a fire drill waiting to happen.

---

*Digest generated from NousResearch/hermes-agent GitHub data as of 2026-05-31.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-31

## 1. Today's Overview

PicoClaw shows **healthy daily activity** with 19 total updates (7 issues, 12 PRs) and an active nightly release pipeline. The project is in a **bug-fix stabilization phase** following the v0.2.9 release, with multiple regressions reported by early adopters. Community contributions are robust: 4 items were closed/merged today, including two feature implementations (Azure Identity auth, Bangla i18n). However, **9 open PRs await review**, suggesting potential maintainer bandwidth constraints. The v0.2.9 release appears to have introduced Web UI stability issues that are generating urgent user reports.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.9-nightly.20260530.e81d3710](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build from `main`; **no stable release since v0.2.9** |

⚠️ **No stable release today.** The nightly build indicates ongoing development post-v0.2.9, but users in [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) explicitly note frustration with the release cadence ("好久没发新版本了" / "long time no new release"). The changelog comparison suggests incremental fixes since v0.2.9 but no version bump.

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Author | Description | Significance |
|---|---|---|---|
| [#2969](https://github.com/sipeed/picoclaw/pull/2969) | lc6464 | **feat(web): chat image paste & drag-and-drop upload** | UX improvement for web frontend; normalizes MIME types for mixed clipboard payloads |
| [#2971](https://github.com/sipeed/picoclaw/pull/2971) | kunalk16 | **feat(provider): Azure Identity support for Azure OpenAI** | Enterprise security compliance; build-tag-gated to avoid dependency bloat |
| [#2974](https://github.com/sipeed/picoclaw/pull/2974) | kunalk16 | **feat(i18n): Bangla (bn-IN) support** | Expands accessibility to ~230M speakers |
| [#2976](https://github.com/sipeed/picoclaw/pull/2976) | opsec-ai | **fix: Makefile handles spaces in Go 1.25.10 version string** | Build system fix for `go env GOVERSION` parsing |

**Key advancement:** Enterprise authentication (Azure Identity) and global i18n expansion signal production-readiness push. The image upload PR addresses a common web UI friction point.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments/Reactions | Analysis |
|---|---|---|---|
| 1 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) — Gateway starts with no channels in v0.2.8 | 6 comments, stale→closed | **Root cause:** Configuration parsing edge case; fix verified in v0.2.9. Shows channel initialization reliability as recurring pain point. |
| 2 | [#2972](https://github.com/sipeed/picoclaw/issues/2972) — Web UI message chaos after v0.2.9 upgrade | 2 comments, 0 👍 | **Critical regression:** Session isolation broken; old messages leak into new chats. **No fix PR yet.** |
| 3 | [#2952](https://github.com/sipeed/picoclaw/issues/2952) — Composite feature/bug report (Chinese) | 2 comments, 0 👍 | **Meta-concern:** Release cadence, `exec` tool reliability, QQ channel restart loops, model provider UX. Bundled grievances suggest user frustration with polish. |

**Underlying needs:** 
- **Session state hygiene** is paramount for multi-user web deployments
- **Release predictability** — users want clearer versioning, not just nightlies
- **Tool-calling robustness** — `exec` command generation inconsistency breaks agent workflows

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|----------|-------|--------|---------|---------|
| 🔴 **Critical** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) Web UI message history contamination | **OPEN** | ❌ None | New sessions inherit old messages; breaks privacy & context isolation. **Regression from v0.2.9.** |
| 🟡 **High** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) `/context` always shows "Compress at: 76800 tokens" | **OPEN** | ❌ None | Context compression threshold display hardcoded/stuck; misleading for 128K token configs. Same reporter as #2972 — possible FreeBSD-specific or MiniMax-provider issue. |
| 🟡 **High** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) QQ channel restart loop | **OPEN** | ❌ None | Circular restart on message after recovery; requires context wipe to break. Suggests state machine bug in QQ channel handler. |
| 🟢 **Medium** | [#2965](https://github.com/sipeed/picoclaw/pull/2965) Workspace guard misreads scheme-less URLs | **PR OPEN** | ✅ [#2965](https://github.com/sipeed/picoclaw/pull/2965) | `curl wttr.in/Beijing?T` blocked by `restrict_to_workspace`. Security vs. usability tension. |
| 🟢 **Medium** | [#2967](https://github.com/sipeed/picoclaw/pull/2967) Codex OAuth empty responses | **PR OPEN** | ✅ [#2967](https://github.com/sipeed/picoclaw/pull/2967) | Streamed `output_text.delta` events lost when final `response.output` is null. |

**Stability assessment:** v0.2.9 introduced **regressions in session management** that are actively blocking users. The lack of fix PRs for #2972 and #2968 within 24h of reporting is concerning.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Model provider dropdown with key reuse** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | High | Repeated user ask; reduces configuration friction |
| **API connection test + `/models` auto-discovery** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Medium | Common in competing tools; requires UI + backend work |
| **Agent.md compliance improvements** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Medium | Implicit in PR #2838 (tool policy filters), but needs broader adoption |
| **Media attachments in `message` tool** | [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Medium | PR stale since May 11; rich delivery is competitive necessity |
| **Frontmatter tool policy filters** | [#2838](https://github.com/sipeed/picoclaw/pull/2838) | Medium | Security/compliance feature; stale since May 9 |

**Predicted v0.3.0 themes:** Enterprise hardening (Azure Identity ✅), i18n expansion (Bangla ✅, zh-TW pending), session state reliability (must-fix), agent tool predictability.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session pollution** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) | Blocking |
| **Misleading context compression UI** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | Trust erosion |
| **QQ channel instability** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Platform-specific reliability gap |
| **Release uncertainty** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Community confidence |
| **Build fragility** | [#2976](https://github.com/sipeed/picoclaw/pull/2976) | Developer experience |

### Positive Signals
- **Enterprise adoption:** Azure Identity request and merge shows corporate use cases
- **Global community:** i18n contributions (Bangla, zh-TW) indicate diverse user base
- **Active Telegram UX iteration:** Reply-as-mention PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) shows channel-specific polish

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) Media attachments for `message` tool | 19 days, stale | **High** — competitive feature gap | Maintainer review; conflicts likely accumulating |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) Frontmatter tool policy filters | 21 days, stale | **High** — security/compliance feature | Design review; affects AGENT.md spec |
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) Traditional Chinese i18n | 6 days | Medium | Straightforward docs/UI PR; low risk to merge |
| [#2963](https://github.com/sipeed/picoclaw/pull/2963) Lark SDK bump | 2 days | Low | Dependabot; routine but tests needed |
| [#2962](https://github.com/sipeed/picoclaw/pull/2962) Anthropic SDK bump (1.26→1.46) | 2 days | Low-Medium | Major version gap; may contain breaking API changes |

**Maintainer attention priority:** 
1. **#2972 / #2968** — v0.2.9 regressions need immediate triage
2. **#2856 / #2838** — stale feature PRs risk contributor burnout and code rot
3. **SDK bumps** — Anthropic 20-version jump deserves compatibility review

---

*Digest generated from GitHub activity 2026-05-30. All links reference https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-31

## 1. Today's Overview

NanoClaw showed **moderate-to-high development velocity** on 2026-05-30 with 15 PRs updated in 24 hours, though only 4 reached closure. The project exhibits active community contribution with 11 open PRs spanning security fixes, platform compatibility (Apple Container), skills ecosystem expansion, and infrastructure hardening. Notably, **zero new releases** and a **single active issue** suggest maintainers are focused on merging incoming contributions rather than cutting releases. The high open-to-closed PR ratio (11:4) indicates a potential review bottleneck. Overall project health is **stable but accumulation risk in review queue**.

---

## 2. Releases

**No new releases.** Latest releases section is empty.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) | matty271828 | Fixed OneCLI proxy port hardcoding for multi-instance installs by rewriting `HTTPS_PROXY`/`HTTP_PROXY` to respect `ONECLI_BASE_PORT`/`ONECLI_PORT_STRIDE` | **Critical fix** for production multi-tenant deployments; resolves configuration drift |
| [#2645](https://github.com/nanocoai/nanoclaw/pull/2645) | yairixStudio | Added per-agent-group `context_messages` window for group chats — agents now receive last N unseen messages as `[Context — last N messages]` block | **UX improvement** for multi-agent conversations; reduces redundant context |
| [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) | crookies | Added `from-channel` and `from-type` attributes to XML message formatter | **Observability** enhancement for multi-channel monitoring dashboards |
| [#6](https://github.com/nanocoai/nanoclaw/pull/6) | gavrielc | Replaced IPC busy-loop polling with async `fs.watch`; eliminated blocking sync fs calls | **Performance/stability**; reduces CPU waste and event-loop blocking |

**Key advancement:** Infrastructure reliability (multi-instance, IPC, monitoring) dominated closed work, suggesting maturation focus.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [#2044](https://github.com/nanocoai/nanoclaw/issues/2044) — v2 Discord URL handling regression | 👍 2, 1 comment | **Most engaged issue.** Core tension: v2's markdown conversion (`<URL>` → `[URL](URL)`) breaks Discord's native preview suppression. Underlying need: **channel-adapter fidelity** — adapters must preserve platform-native behaviors, not impose uniform markdown. Risk: affects all Discord operators using URL hygiene |
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) — WebUI control panel | OPEN since Feb 13, "Blocked"/"Pending Closure" | **Longest-running open PR.** 11-tab web interface (Lit+Vite+Fastify) with full operational control. Blocked status suggests architectural review or scope concerns. High community interest implied by persistence |

**Signal:** Discord adapter quality and WebUI completeness are friction points between "works everywhere" abstraction and "works right here" platform fidelity.

---

## 5. Bugs & Stability

| Severity | PR/Issue | Description | Fix Status |
|---|---|---|---|
| **🔴 Critical** | [#2649](https://github.com/nanocoai/nanoclaw/pull/2649) | Apple Container: nested file mounts produce phantom inodes — `stat()` returns `0644` but reads `EACCES`, **silently disabling all MCP servers** | Open PR, companion fix [#2650](https://github.com/nanocoai/nanoclaw/pull/2650) adds retry logic |
| **🔴 Critical** | [#2650](https://github.com/nanocoai/nanoclaw/pull/2650) | Apple Container race: `container.json` read fails on first access due to virtio-fs overlay delay | Open PR (companion to #2649) |
| **🟡 High** | [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | Security: `ask_user_question` responses not validated to origin channel — cross-channel answer injection possible | Open PR, fix proposed |
| **🟡 High** | [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) *(closed)* | OneCLI proxy port hardcoded — multi-instance installs break | **FIXED** |
| **🟢 Medium** | [#2044](https://github.com/nanocoai/nanoclaw/issues/2044) | Discord URL preview suppression broken in v2 | Open issue, no PR yet |

**Platform-specific fragility alert:** Two PRs (#2649/#2650) address Apple Container filesystem quirks, indicating **macOS/containerized deployment is a growing pain point**. The silent MCP server failure mode is particularly dangerous.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Predicted Version | Confidence |
|---|---|---|---|
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) | GitHub integration: polling mode (NAT/firewall-friendly) + webhook security warnings | v2.x | High — security + accessibility win |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | Free local voice transcription (whisper/whisper.cpp) | v2.x | High — fills cost/dependency gap |
| [#2084](https://github.com/nanocoai/nanoclaw/pull/2084) | Daily backup + S3 + per-agent restore | v2.x | Medium — infrastructure, needs review bandwidth |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | AWS credential proxy (`paws4claws`) | v2.x | Medium — enterprise/DevOps targeting |
| [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) | `/upload-trace` to Hugging Face | v2.x | Medium — debugging/telemetry ecosystem |
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) | Full WebUI control panel | v3 or major v2 | Low — blocked, likely architectural decision pending |

**Roadmap signal:** Strong push toward **enterprise operability** (backup, AWS auth, multi-instance) and **offline/low-cost AI** (local whisper). The WebUI PR's "Pending Closure" status may indicate a decision to rebuild or integrate differently.

---

## 7. User Feedback Summary

| Pain Point | Source | Evidence |
|---|---|---|
| **Discord UX regression** | #2044 | URL handling worse in v2 than v1; platform-native behavior overridden |
| **macOS/container deployment friction** | #2649, #2650 | Apple Container filesystem quirks cause silent failures; nested mounts unreliable |
| **Multi-instance configuration gaps** | #2652 | Hardcoded ports break scaling patterns |
| **Missing disaster recovery** | #2084 | "`rm -rf` = unrecoverable" cited as motivation |
| **Need for monitoring/observability** | #2521 | User built custom dashboard because built-in telemetry insufficient |
| **Pre-commit hygiene** | #2537 | Contributor experience: wants automated formatting/type-checking |

**Satisfaction:** Active contribution (15 PRs) indicates healthy engagement.
**Dissatisfaction:** Platform-specific bugs (Apple), regression in channel adapters, and long review queues for significant features (#212 since February).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) WebUI control panel | ~3.5 months (Feb 13) | **High** — "Blocked"/"Pending Closure" ambiguous; blocks community expectation, may deter contributors | Maintainer decision: merge, close with explanation, or redirect |
| [#2084](https://github.com/nanocoai/nanoclaw/pull/2084) Backup/restore | ~1 month (Apr 28) | Medium — infrastructure-critical, user-cited as gap | Review for v2.x inclusion |
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) GitHub polling | ~3 weeks (May 6) | Medium — security + accessibility | Review queue |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) Voice transcription | ~3 weeks (May 7) | Medium — feature completeness | Review queue |

**Review bottleneck warning:** 11 open PRs with 4 closed suggests **maintainer capacity constraint**. The #212 ambiguity is particularly damaging to contributor trust — a clear resolution would signal healthy governance.

---

*Digest generated from GitHub activity 2026-05-30. All links: https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-31

## 1. Today's Overview

NullClaw shows minimal but focused maintenance activity over the past 24 hours, with two pull requests closed and no new issues or releases. The project appears to be in a stable, mature phase with attention on low-level runtime correctness rather than feature expansion. Zero open issues indicates either effective triage or limited community reporting volume. The merged work centers on POSIX thread sleep semantics and a routine version bump, suggesting the maintainers are prioritizing reliability and release cadence discipline. Overall project health appears stable with controlled, purposeful activity.

---

## 2. Releases

**No new releases** — The latest version remains **v2026.5.29** (released via PR #938, merged 2026-05-30). No migration notes or breaking changes to report.

---

## 3. Project Progress

### Merged/Closed PRs (2)

| PR | Description | Significance |
|:---|:---|:---|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | **fix(compat): use nanosleep on POSIX in thread.sleep to actually suspend OS thread** | Critical runtime correctness fix — replaces cooperative yield with true OS thread suspension on POSIX systems, preventing CPU spin-wait and improving power efficiency/scheduler fairness |
| [#938](https://github.com/nullclaw/nullclaw/pull/938) | **v2026.5.29** | Routine version bump with validation checks (`zig fmt`, `git diff`) |

**Technical advance:** PR #878 addresses a fundamental compatibility layer issue where `std.Io.sleep()` under `std.Io.Threaded` was performing cooperative yielding instead of actual thread suspension. This fix ensures NullClaw's managed runtime properly delegates to `nanosleep(2)` on Linux/macOS/*BSD while preserving the existing scheduler-backed path for Windows and WASI targets. The change is non-breaking for API consumers but materially improves resource utilization for POSIX deployments.

---

## 4. Community Hot Topics

**No active community discussions identified.** Both closed PRs had zero reactions (👍: 0) and undefined comment counts, indicating limited public engagement during review.

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | 0 reactions, no visible comments | Technical debt fix; likely maintainer-driven with minimal community visibility |
| [#938](https://github.com/nullclaw/nullclaw/pull/938) | 0 reactions, no visible comments | Automated/release process PR; typically low engagement |

**Underlying need:** The absence of discussion on a POSIX correctness fix suggests either (a) the user base trusts maintainers with low-level decisions, or (b) limited POSIX production usage where this bug would manifest observably. The Windows/WASI path preservation indicates cross-platform parity remains a design priority.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|:---|:---|:---|:---|
| **Medium** (fixed) | [#878](https://github.com/nullclaw/nullclaw/pull/878) — POSIX `thread.sleep` not actually suspending OS thread | **Resolved** in v2026.5.29 | Cooperative yield caused unnecessary CPU usage; fix present in release |

**No new bugs reported today.** Zero open issues indicates no unaddressed stability concerns in current tracker state.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests identified** — zero open issues and no PRs with feature tags.

**Inferred signals from recent activity:**
- **POSIX runtime hardening** continues as an implicit priority (nanosleep fix follows pattern of OS abstraction layer refinement)
- **Release automation discipline** is maintained (version bump PR with validation checks)
- **Cross-platform parity** (Windows/WASI/POSIX) remains architectural commitment

**Predicted near-term focus:** Given the maturity signal of routine patch releases with correctness fixes, next version likely continues incremental runtime reliability work rather than major features. Potential areas: additional POSIX syscall direct usage, WASI target improvements, or Zig toolchain compatibility updates.

---

## 7. User Feedback Summary

**No direct user feedback captured in tracker today.**

**Inferred patterns:**
- **Satisfaction signal:** Routine version release with no emergency fixes suggests stable user experience
- **Potential concern:** Zero issue volume may indicate low adoption or passive user base rather than perfection — common in systems/runtime projects where users lack expertise or incentive to report upstream
- **Use case alignment:** Thread sleep semantics fix most relevant to embedded/long-running POSIX services and battery-sensitive deployments

---

## 8. Backlog Watch

**No stale items identified** — zero open issues and zero open PRs indicates clean backlog state.

| Risk Indicator | Assessment |
|:---|:---|
| Maintainer attention needed | Low — no unreviewed contributions |
| Long-unanswered important issues | None present |
| PR merge latency | N/A (all closed) |

**Observation:** The pristine empty backlog is atypical for active open-source projects. Possible explanations: (a) aggressive bot-driven stale issue closure, (b) issue tracking migrated elsewhere (Discord, internal), or (c) genuinely low community volume. Recommend monitoring whether this reflects healthy triage or underreporting.

---

*Digest generated from NullClaw repository data as of 2026-05-31. All links: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-31

## 1. Today's Overview

IronClaw shows **high velocity development** with 21 PRs updated in the last 24 hours (13 merged/closed, 8 open) and moderate issue activity (3 updated). The project is in an intense "Reborn" platform consolidation phase, with core contributors driving multiple stacked PR sequences for authentication, triggers, and outbound communication infrastructure. Notably, **zero new releases** continue a crates.io publication gap since v0.24.0 (March), creating downstream dependency pressure. The 8 open PRs suggest active feature branching with several large-scope changes in flight. Nightly E2E test failures remain unresolved for four days, indicating potential stability concerns beneath the rapid feature merge rate.

---

## 2. Releases

**No new releases.** The crates.io publication backlog persists as a known operational issue (see [Backlog Watch](#8-backlog-watch)).

---

## 3. Project Progress

### Merged/Closed PRs Today (13 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4206](https://github.com/nearai/ironclaw/issues/4206) | henrypark133 | **Async HTTP egress end-to-end** — Converted `RuntimeHttpEgress::execute` from sync to async throughout the stack (`HostHttpEgressService`, `NetworkHttpEgress`, `NetworkHttpTransport`, `reqwest` backend) | **Infrastructure modernization** — Eliminates blocking I/O in runtime; enables better concurrency for agent tool calls |
| [#4254](https://github.com/nearai/ironclaw/pull/4254) | henrypark133 | **Trusted inbound facade for Reborn trigger ingress** — `InboundTurnService::handle_inbound_turn_with_trusted_scope` with sealed trusted request shape, replay-first idempotency, trusted binding resolution | **Trigger system foundation** — PR 8 of trigger-loop plan; enables secure, idempotent trigger processing |
| [#4255](https://github.com/nearai/ironclaw/pull/4255) | henrypark133 | **Outbound delivery resolution domain types** — `CommunicationDeliveryResolutionRequest`, `CommunicationDeliveryIntent`, requested-outbound context in `ironclaw_outbound` | **Communication routing** — PR 3 of delivery-resolution plan; enables preference-aware message routing |
| [#4259](https://github.com/nearai/ironclaw/pull/4259) | serrrfirat | **Synthetic capability introspection fix** — `capability_info` can now inspect itself without `InvalidInvocation` terminal failure; includes DB migration | **Reliability** — Fixes model self-inspection pattern that caused run failures; 15+ scope tags indicate broad surface area |
| [#4258](https://github.com/nearai/ironclaw/pull/4258) | serrrfirat | **Route dispatch failures through PR #4236 disposition + coerce `oneOf`/`anyOf` stringified containers** | **Error handling** — Prevents terminal `Failed` state when LLM passes malformed `builtin.http` headers; completes #4236 elimination of "RecoveryRequired" path |
| [#4247](https://github.com/nearai/ironclaw/pull/4247) | serrrfirat | **Design PR: WebUI v2 auth E2E** — Design-only for #4112 stacked on #4245 | **Planning** — Establishes reviewable design before implementation |
| [#4246](https://github.com/nearai/ironclaw/pull/4246) | serrrfirat | **Migrate NEAR AI MCP credentials to product auth** — Switches `nearai-mcp` from `SecretHandle` to `ProductAuthAccount` | **Security architecture** — Aligns MCP lane with #4236 GitHub WASM migration pattern |
| [#4245](https://github.com/nearai/ironclaw/pull/4245) | serrrfirat | **Product-facing auth HTTP surfaces** — Manual-token onboarding, account list/select/recovery, refresh, cleanup | **WebUI/CLI/API completeness** — Closes #4201; completes auth surface after #4175/#4176 |
| [#4253](https://github.com/nearai/ironclaw/pull/4253) | neoguyverx | **Identity file injection scan** — Read-time detection of prompt-injection patterns in `AGENTS.md`, `SOUL.md`, `USER.md`, `IDENTITY.md` | **Security** — Mitigates prompt injection via compromised identity files |
| [#4252](https://github.com/nearai/ironclaw/pull/4252) | neoguyverx | **Memory write behavioral nudge** — Injected system message after N idle iterations without `memory_write` | **Agent reliability** — Reduces context loss from missing memory persistence |
| [#4251](https://github.com/nearai/ironclaw/pull/4251) | neoguyverx | **Structured compaction summary** — 7-section template replacing free-form LLM summaries; critical-context memory flush | **Context quality** — Improves handoff reliability and preserves essential state |
| [#4250](https://github.com/nearai/ironclaw/pull/4250) | neoguyverx | **Interruptible in-flight LLM calls** — `CancellationToken` in `ChatDelegate` for immediate `/interrupt` processing | **Responsiveness** — Eliminates wait-for-completion on user interruption |
| [#4249](https://github.com/nearai/ironclaw/pull/4249) | henrypark133 | **Trigger trusted ingress contract** — V1 cron-backed scheduled trigger intake contract | **Specification** — Freezes trigger semantics: tenant-scoped fire identity, replay-first, max_concurrent_fires=1, sub-minute rejection |
| [#4248](https://github.com/nearai/ironclaw/pull/4248) | henrypark133 | **Delivery resolution contract** — OutboundPolicyService candidate selection and validation boundary | **Architecture** — Cross-links approvals, auth, adapters, events, conversations, workflows |

**Key themes:** Reborn platform hardening (auth, triggers, outbound communication), agent reliability (memory, interruption, compaction), security (injection scanning, credential architecture).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) — Publish 0.25.0–0.27.0 to crates.io | **12 comments** | **Critical supply-chain blockage.** Downstream consumers (including wasmtime 28.x users with CVE exposure) are pinned to 0.24.0. The 2-month publication gap since v0.27.0 tag suggests either: (a) release process friction, (b) intentional hold for Reborn stability, or (c) crates.io ownership/credential issues. High comment count indicates repeated community inquiry without resolution. **Underlying need:** Predictable, secure dependency management for Rust ecosystem consumers. |

### Emerging Patterns in Open PRs

| PR | Scope | Signal |
|:---|:---|:---|
| [#4260](https://github.com/nearai/ironclaw/pull/4260) — Outbound communication preferences store | Large, low-risk | Preference-aware multi-channel delivery becoming first-class |
| [#4261](https://github.com/nearai/ironclaw/pull/4261) — `ironclaw_triggers` crate skeleton | XL, medium-risk | Trigger system graduating from contracts to implementation |
| [#4257](https://github.com/nearai/ironclaw/pull/4257) — AuthPromptView challenge enrichment + WebUI OAuth card | XL, docs-scoped | OAuth UX consolidation (GSuite, Notion MCP, GitHub PAT) |
| [#4035](https://github.com/nearai/ironclaw/pull/4035) — Slack Reborn ProductAdapter | XL, medium-risk, regular contributor | Third-party adapter ecosystem expansion |

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | **OPEN**, 4 days | None identified | `v2-engine` E2E failing on commit `749f584`; blocks release confidence |
| **High** | [#3259](https://github.com/nearai/ironclaw/issues/3259) — CVE exposure via pinned 0.24.0 | **OPEN**, 26 days | None | wasmtime 28.x CVEs affect downstream; publication is fix |
| Medium | [#4259](https://github.com/nearai/ironclaw/pull/4259) (fixed) | **CLOSED** | Self | `capability_info` self-inspection caused terminal run failures |
| Medium | [#4258](https://github.com/nearai/ironclaw/pull/4258) (fixed) | **CLOSED** | Self | Dispatch failures misrouted to "RecoveryRequired" legacy path; `oneOf`/`anyOf` stringified containers mishandled |

**Stability assessment:** Two persistent high-severity items (E2E failure, publication gap) suggest **release readiness concerns** despite high merge velocity. The E2E failure duration (4 days) is particularly worrying for a project with nightly CI.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Crates.io publication automation** | [#3259](https://github.com/nearai/ironclaw/issues/3259) pressure | High — blocking downstream adoption |
| **Trigger system (cron + event-driven)** | [#4261](https://github.com/nearai/ironclaw/pull/4261), [#4249](https://github.com/nearai/ironclaw/pull/4249), [#4254](https://github.com/nearai/ironclaw/pull/4254) | Very High — major Reborn pillar, multiple PRs in sequence |
| **Multi-channel outbound delivery** | [#4260](https://github.com/nearai/ironclaw/pull/4260), [#4255](https://github.com/nearai/ironclaw/pull/4255), [#4248](https://github.com/nearai/ironclaw/pull/4248) | Very High — preference store + resolution contracts + delivery types all landing |
| **OAuth provider expansion** | [#4257](https://github.com/nearai/ironclaw/pull/4257), [#4229](https://github.com/nearai/ironclaw/pull/4229) | High — GSuite, Notion MCP, GitHub PAT, GitHub SSO |
| **Slack integration (Reborn)** | [#4035](https://github.com/nearai/ironclaw/pull/4035) | Medium — large PR from regular contributor, may need iteration |
| **Agent memory/behavior improvements** | [#4252](https://github.com/nearai/ironclaw/pull/4252), [#4251](https://github.com/nearai/ironclaw/pull/4251), [#4250](https://github.com/nearai/ironclaw/pull/4250) | High — neoguyverx patch series (#3, #6, #8, #10a) shows sustained focus |

**Predicted v0.28.0 scope:** Trigger system MVP, outbound delivery resolution, expanded OAuth providers, agent reliability patches, plus crates.io catch-up.

---

## 7. User Feedback Summary

### Explicit Pain Points
- **Dependency security:** [#3259](https://github.com/nearai/ironclaw/issues/3259) — "downstream pinned to 0.24.0 by wasmtime 28.x CVEs" — *operational risk for production users*
- **E2E reliability:** [#4108](https://github.com/nearai/ironclaw/issues/4108) — nightly failures erode confidence in v2-engine stability

### Inferred from PR Patterns
- **Agent context loss:** Multiple memory/compaction/interruption fixes suggest real-world agent sessions failing to preserve or respond to state
- **OAuth complexity:** Stacked PRs for multiple providers indicate fragmented auth experience being consolidated
- **LLM error fragility:** [#4258](https://github.com/nearai/ironclaw/pull/4258), [#4259](https://github.com/nearai/ironclaw/pull/4259) show LLM output parsing remains brittle — "model issued two parallel tool calls" caused terminal failure

### Satisfaction Indicators
- Active external contribution (neoguyverx patch series, danielwpz Slack adapter, italic-jinxin GitHub SSO)
- Rapid design→implementation cycles (design PR #4247 closed, implementation #4256 open same day)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) — crates.io publication gap | **56 days** since v0.27.0 tag | **Critical** — security exposure, ecosystem friction | Maintainer decision: publish existing tags or explain hold; automate release pipeline |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | **4 days** | **High** — release blocker | Investigate `v2-engine` failure; may relate to recent Reborn auth/trigger merges |
| [#4035](https://github.com/nearai/ironclaw/pull/4035) — Slack Reborn ProductAdapter | **6 days** open, XL scope | Medium — contributor momentum | Review from core team; first external adapter for Reborn boundary |

**Maintainer attention priority:** crates.io publication > E2E failure root cause > external contributor PR review velocity.

---

*Digest generated from GitHub activity 2026-05-30 to 2026-05-31. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-31

---

## 1. Today's Overview

LobsterAI shows minimal activity today with **zero issues updated** and **only 2 stale pull requests** receiving timestamp updates but no substantive engagement. Both PRs date back to early April 2026 and remain unmerged, suggesting a **maintenance lull or reviewer bandwidth constraint**. No new releases were cut, and the project appears to be in a **stable but low-velocity phase**. The absence of open issues indicates either a mature, bug-free codebase or diminished community reporting—likely the former given the project's scope as a personal AI assistant. Overall health reads as **stable but stagnant**, with UI polish PRs accumulating without merge resolution.

---

## 2. Releases

**No new releases.**  
The project has no published release history visible in today's data.

---

## 3. Project Progress

**No merged or closed PRs today.**  
Both active PRs remain in open, unreviewed state:

| PR | Status | Impact |
|---|---|---|
| #1466 Modal fix | Open, stale | UX improvement for MCP server configuration |
| #1467 macOS shortcuts | Open, stale | Platform-native shortcut display |

**No features advanced to completion today.**

---

## 4. Community Hot Topics

The only active discussion points are two UI/UX fix PRs from contributor **linlihua**, both opened April 4, 2026, and last updated May 30, 2026:

- **[PR #1466: fix(mcp): modal close button unreachable when content grows tall](https://github.com/netease-youdao/LobsterAI/pull/1466)**  
  **Underlying need:** MCP (Model Context Protocol) server configuration is becoming complex enough to expose layout limitations. The fix separates scrollable content from fixed header/footer—standardizing modal patterns as the platform scales to more configurable integrations.

- **[PR #1467: fix(shortcuts): display Cmd (⌘) instead of Ctrl on macOS](https://github.com/netease-youdao/LobsterAI/pull/1467)**  
  **Underlying need:** Cross-platform fidelity for a desktop application. Hardcoded Windows/Linux conventions signal early-stage platform abstraction debt now being addressed as macOS user base grows.

**Engagement concern:** Neither PR has comments or reactions (👍: 0), indicating either low community review participation or maintainer bottleneck.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|---|---|---|---|
| **Medium** | MCP modal buttons inaccessible with tall content | Open PR #1466 | ✅ Yes, unmerged |
| **Low** | Incorrect shortcut labels on macOS | Open PR #1467 | ✅ Yes, unmerged |

**No new bugs reported today.** Both known issues are **UI/UX friction, not crashes or data loss**. The modal issue has higher functional impact (blocks workflow completion), while the shortcut issue is cosmetic but affects perceived platform polish.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests in today's data.**  
Inferred signals from open PRs:

| Signal | Likely Near-Term Priority |
|---|---|
| MCP integration complexity growing | Enhanced server management UI, possibly MCP marketplace/hub |
| Cross-platform desktop polish | Systematic platform detection, native OS conventions |
| Modal/layout pattern debt | Design system standardization (reusable Modal component) |

**Prediction:** If either PR merges, a **patch release focusing on desktop UX polish** is plausible. The MCP work suggests broader investment in extensible tool integration—LobsterAI may be positioning as a **local AI hub with rich plugin ecosystem**.

---

## 7. User Feedback Summary

**No direct user feedback captured today** (no issues, no release comments).

**Inferred pain points from PR analysis:**

| Pain Point | Evidence | User Scenario |
|---|---|---|
| Configuration friction in MCP setup | PR #1466 | Power users adding multiple environment variables or headers lose access to primary actions |
| "Feels like a Windows app on Mac" | PR #1467 | macOS users experience cognitive friction with non-native shortcut labeling |

**Satisfaction/dissatisfaction:** Likely **neutral-to-mildly-negative** among macOS users and MCP power users; no signals of core functionality dissatisfaction.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | ~57 days | Medium — functional bug, fix ready | Maintainer review & merge |
| [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467) | ~57 days | Low — polish, fix ready | Maintainer review & merge |

**Assessment:** Two well-scoped, non-controversial UI fixes languishing for **nearly two months** suggests either:
- Maintainer bandwidth constraints on NetEase Youdao side
- Possible organizational shift in project prioritization
- CI/review process friction not visible in data

**Recommendation for project health:** Either PR could be merged with minimal risk. Extended staleness risks contributor disengagement (linlihua has provided two fixes with zero feedback) and signals project dormancy to prospective adopters.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI as of 2026-05-31.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-31

## 1. Today's Overview

CoPaw (QwenPaw) showed **moderate-to-high community activity** on 2026-05-30 with **11 issues updated** (10 open/active, 1 closed) and **3 new pull requests opened** (none merged). No new releases were published. The project appears to be in an active development phase with significant user engagement around Desktop client stability, Windows-specific bugs, and IDE-like workflow enhancements. The high volume of same-day issue creation (5 issues opened on 2026-05-30) suggests growing user adoption but also indicates potential quality assurance challenges, particularly on the Windows platform and ACP protocol interoperability.

---

## 2. Releases

**No new releases.** The latest available version remains v1.1.9 (referenced in multiple issue reports).

---

## 3. Project Progress

**No PRs were merged or closed today.** Three PRs remain open awaiting review:

| PR | Author | Status | Focus Area |
|:---|:---|:---|:---|
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | leoleils | Open | Provider SDK compatibility — routing non-standard `generate_kwargs` to `extra_body` for DashScope parameters |
| [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) | szetohoyan | Open | Config bug fix — `ProviderManager` fallback for `get_model_max_input_length` |
| [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) | szetohoyan | Open | Feishu/Lark integration — group session sharing mode |

**Advancement assessment:** Infrastructure fixes are in progress but no features have landed. The `ProviderManager` fix (#4827) addresses a context compression misconfiguration that could affect all users with custom model settings.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 👍 | Topic | Link |
|:---|:---|:---:|:---:|:---|:---|
| 1 | #4123 Windows console flash on `execute_shell_command` | 7 | 0 | UX degradation on Windows | [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) |
| 2 | #4408 Default workspace file organization | 7 | 0 | Project structure convention | [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) |
| 3 | #4789 Conversation deletion/rollback like Trae | 7 | 1 | **CLOSED** — Feature request | [Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) |
| 4 | #4454 `/mission` command freezes Console | 4 | 0 | Critical functionality broken | [Issue #4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) |

### Underlying Needs Analysis

- **#4123 & #4828/#4829 (duplicate Windows flash):** Users expect seamless background execution. The repeated reporting (3 issues for same bug) indicates poor issue deduplication and Windows QA gaps.
- **#4408:** Desire for `.qwenpaw/` hidden directory convention mirrors VS Code's `.vscode/` pattern — users want workspace cleanliness and version-control-friendly defaults.
- **#4789 (closed):** Strong demand for **checkpoint/rollback workflows** comparable to Trae, Cursor, or Git-like branching. The closure without resolution may indicate prioritization conflict or duplicate tracking.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---:|:---|
| **🔴 High** | #4454 | `/mission` command causes **complete Console freeze**; persists after cache clearing | ❌ No | [Issue #4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) |
| **🔴 High** | #4824 | ACP protocol version mismatch with Claude Code; `delegate_external_agent` broken | ❌ No | [Issue #4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) |
| **🟡 Medium** | #4123 / #4828 / #4829 | Windows `execute_shell_command` flashes console window (3 duplicate reports) | ❌ No | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123), [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828), [#4829](https://github.com/agentscope-ai/QwenPaw/issues/4829) |

**Critical concern:** The `/mission` freeze (#4454) renders a core feature unusable with no workaround documented. The ACP protocol breakage (#4824) threatens multi-agent interoperability, a key architectural promise. Windows flashing has been reported since 2026-05-08 (#4123) with no fix in 22 days despite multiple user confirmations.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Diff view for file changes** | [#4825](https://github.com/agentscope-ai/QwenPaw/issues/4825) | ⭐⭐⭐⭐ High | Explicitly references Trae/Cursor parity; core IDE workflow |
| **Clickable local path links in Desktop** | [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830), [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) | ⭐⭐⭐⭐ High | Duplicate requests same day; low implementation complexity |
| **Conversation checkpoint/rollback** | [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) (closed), [#4825](https://github.com/agentscope-ai/QwenPaw/issues/4825) | ⭐⭐⭐ Medium | Closed without merge suggests may be tracked elsewhere; high user demand |
| **Three-mode message interruption handling** | [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) | ⭐⭐⭐ Medium | Complex state machine change; references Hermes Agent |
| **Hidden workspace directory (`.qwenpaw`)** | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | ⭐⭐⭐ Medium | Breaking change for existing users; needs migration path |
| **Pre-installed Docker packages** | [#4831](https://github.com/agentscope-ai/QwenPaw/issues/4831) | ⭐⭐⭐⭐ High | Trivial image change; prevents recurring support burden |

**Predicted v1.2.0 themes:** Desktop UX polish (paths, diff view), Windows stability, Docker operational resilience.

---

## 7. User Feedback Summary

### Pain Points

| Category | Evidence | Intensity |
|:---|:---|:---:|
| **Windows second-class experience** | Console flashing, cmd popups — "非常影响使用体验" (severely impacts experience) | 🔴 High |
| **File change opacity** | Users cannot see what changed; "需要明确显示更改了什么文件" | 🔴 High |
| **Mission/workflow unreliability** | `/mission` freezes; session management fragile | 🔴 High |
| **Docker state fragility** | Packages lost on rebuild; manual reinstall required | 🟡 Medium |
| **ACP ecosystem friction** | Protocol version mismatch blocks Claude Code integration | 🟡 Medium |

### Satisfaction Indicators

- Users actively compare to **Trae**, **Cursor**, **OpenCode**, **Hermes Agent** — indicates CoPaw is positioned in competitive "AI IDE" category
- Feature requests include screenshots and detailed expected behavior — engaged, sophisticated user base
- One 👍 on #4789 suggests limited but present community voting participation

### Dissatisfaction Signals

- Duplicate issue filing (#4828/#4829 same as #4123) implies search friction or urgency overriding due diligence
- Issue #4789 closed without visible resolution may frustrate requester

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows console flash | **22 days** | User experience degradation on major platform; 3+ reports | Assign Windows specialist; likely `CREATE_NO_WINDOW` flag fix |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) Workspace organization | **15 days** | Breaking change needs RFC | Maintainer decision on convention compatibility |
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) `/mission` freeze | **13 days** | **Critical feature broken** | P0 investigation; repro steps validation; possible regression from v1.1.7 |

**Maintainer attention recommended:** The Windows console flash bug has aged beyond three weeks with escalating duplicate reports. The `/mission` freeze is a functional regression that threatens core value proposition. No maintainer responses are visible in provided data — community may perceive abandonment of critical path issues.

---

*Digest generated from GitHub activity 2026-05-30. Data source: github.com/agentscope-ai/CoPaw (branded as QwenPaw in issues).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-31

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 100 items updated in the last 24 hours (50 issues, 50 PRs) and a **68% closure rate** (39 issues closed, 34 PRs merged/closed). The project is in a **major architectural transition period**: the entire Tauri desktop application was abruptly removed after weeks of intensive macOS desktop development, while voice infrastructure and core runtime stability work continues. No new releases were cut, suggesting the team is consolidating before a versioned release. The high volume of desktop-related closures alongside the removal PR indicates a strategic pivot away from the native desktop client toward web-first or alternative deployment models.

---

## 2. Releases

**No new releases** — v0.7.8 milestone work is in progress but not yet tagged.

---

## 3. Project Progress

### Major Merged/Closed PRs Today

| PR | Author | Description | Impact |
|---|---|---|---|
| [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | hurtdidit | WebSocket binary audio frames with PCM16 validation and VAD pipeline | **Voice foundation** — enables full-duplex audio streaming |
| [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) | hurtdidit | Energy-based Voice Activity Detector (VAD) | Replaces NoopVad placeholder; **critical for barge-in** |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | hurtdidit | Speech capture buffer + STT dispatch | Completes voice pipeline: capture → VAD → transcription |
| [#6761](https://github.com/zeroclaw-labs/zeroclaw/pull/6761) | theonlyhennygod | macOS UI control capability handlers (click, type_keys, notify, read_ax, approval) | **Desktop automation primitives** — now removed with Tauri |
| [#6762](https://github.com/zeroclaw-labs/zeroclaw/pull/6762) | theonlyhennygod | macOS Accessibility permission flow | Permission gating for AX-dependent features |
| [#6763](https://github.com/zeroclaw-labs/zeroclaw/pull/6763) – [#6767](https://github.com/zeroclaw-labs/zeroclaw/pull/6767) | theonlyhennygod | Screen recording, microphone, input monitoring, FDA, Local Network permission flows | Comprehensive **TCC permission revocation detection** |

**Key advancement**: The voice conversation stack ([Issue #5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896)) is now **functionally complete** with three merged PRs forming a full pipeline. This unblocks phone-call-like AI interactions with barge-in support.

**Key reversal**: All desktop/Tauri work from the past month—including the above capability handlers and permission systems—is being **reverted via [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026)**, which removes 94 tracked files from `apps/tauri/`.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Topic | Underlying Need |
|---|---|---|---|---|
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | 4 | **CLOSED** | Context compressor drops `reasoning_content` | **DeepSeek R1 compatibility** — users need reasoning chains preserved through compression for providers that require them |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | 3 | **CLOSED** | Clipboard paste & drag-and-drop images in Web Chat UI | **Frictionless multimodal input** — screenshot-to-chat is a core UX expectation |
| [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) | 3 | **CLOSED** | macOS UI control capability handlers | **Agentic desktop automation** — users want AI to actually *use* their computer |
| [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327) – [#6330](https://github.com/zeroclaw-labs/zeroclaw/issues/6330) | 2 each | **CLOSED** | Desktop menu-bar parity features | **Ambient AI access** — always-available assistant without context switching |
| [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) | 2 | **CLOSED** | Full-duplex voice with barge-in | **Natural voice interaction** — walkie-talkie UX feels broken for personal AI |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 2 | **OPEN** | RFC: Route scheduled tasks through orchestrator | **Reliability** — cron bypassing message pipeline causes "cluster of related bugs" |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | 2 | **OPEN** | RFC: Unified output routing model | **Migration friction from Letta** — users lost per-peer modality preferences |

### Analysis of Underlying Needs

The community is sharply divided between **infrastructure reliability** (orchestrator pipeline, output routing, context compression) and **interface modality expansion** (voice, desktop automation, multimodal input). The desktop removal suggests maintainers are prioritizing the former over the latter, or rethinking the desktop strategy entirely.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|---|---|---|---|---|
| **S2 (High)** | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | **CLOSED** | Merged | `reasoning_content` lost in context compression — **DeepSeek runtime degradation** |
| **P2** | [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) | **CLOSED** | Blocked | Desktop menu-bar renders every tool_call inline (inherited from web #6348) |
| **P2** | [#6331](https://github.com/zeroclaw-labs/zeroclaw/issues/6331) | **CLOSED** | N/A | Launch-at-login and `LSUIElement` behavior verification |
| **P2** | [#6340](https://github.com/zeroclaw-labs/zeroclaw/issues/6340) | **CLOSED** | N/A | Crash reporting / panic capture for desktop |

**Critical pattern**: The [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) fix addresses a **provider-specific runtime regression** that would break DeepSeek reasoning models in long conversations. This is a **production stability issue** for users relying on reasoning-capable models.

**Structural concern**: [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks **153 commits lost in a bulk revert** (c3ff635, 2026-03-28) — this is a **massive technical debt item** with ongoing recovery work. The issue was updated today, indicating active but incomplete recovery.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (v0.7.8 or v0.8.0)

| Feature | Signal Strength | Evidence |
|---|---|---|
| **Voice conversation (full-duplex)** | 🔒 **Shipped** | Three PRs merged, Issue #5896 closed |
| **Web Chat UI image paste/drop** | 🔒 **Shipped** | Issue #5649 closed |
| **Versioned documentation** | 🔄 **In Progress** | PR [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) open, actively worked |
| **XOAUTH2 email + observer mode** | 🔄 **In Progress** | PR [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) open |
| **Scoped tool elevation for Skills** | 🔄 **In Progress** | PR [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) open, large feature |

### Deferred/Uncertain Due to Desktop Removal

| Feature | Previous Status | Current Fate |
|---|---|---|
| Menu-bar chat panel | 10+ issues closed today | **Removed** with Tauri |
| macOS UI automation (click, keys, AX) | Merged in #6761 | **Removed** |
| Universal binary (arm64+x86_64) | Issue #6339 closed | **Moot** |
| Auto-update channel | Issue #6332 blocked | **Moot** |

### Predicted Next Version Priorities

1. **Orchestrator pipeline for cron** ([#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)) — RFC open, addresses root cause of 5+ bugs
2. **Unified output routing** ([#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)) — migration blocker from Letta
3. **Base64 file tools** ([#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004)) — enables binary file handling
4. **TTS provider configurability** ([#6968](https://github.com/zeroclaw-labs/zeroclaw/pull/6968)) — OpenAI-compatible endpoint flexibility

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Pain Point | Severity |
|---|---|---|
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) (RFC) | **Lost Letta feature**: Cannot control *how*/*where* replies are delivered (morning briefings to email, urgent to SMS) | **Migration blocker** |
| [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) (voice) | Walkie-talkie push-to-talk feels unnatural; need phone-call-like experience | **UX gap** |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | Cannot paste screenshots into chat — workflow friction | **Resolved** |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 153 commits of lost work from bulk revert — trust/recovery issue | **Process failure** |

### Implicit Signals

- **Desktop users were invested**: 20+ desktop-specific issues closed today, many with detailed macOS implementation work, now all invalidated by [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026). This will cause **significant community friction**.
- **Voice-first users are vocal**: hurtdidit's sustained 3-PR contribution suggests either sponsored development or deep personal need.
- **Enterprise/email users need OAuth**: [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) XOAUTH2 work indicates Microsoft 365/Exchange deployment requirements.

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Cron through orchestrator | 5 days | **High** — 5 linked bugs | Maintainer review; RFC acceptance decision |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) RFC: Unified output routing | 4 days | **High** — migration blocker | Community input; design decision on `send_via` tool |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits lost in revert | 37 days | **High** — technical debt | Recovery tracking; risk of duplicated/lost work |
| [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) Remove Tauri desktop app | 1 day | **High** — strategic reversal | **Urgent**: Community communication on desktop roadmap; this PR deletes weeks of merged work without clear replacement plan |
| [#6956](https://github.com/zeroclaw-labs/zeroclaw/pull/6956) Remove marketplace sync workflow | 4 days | Medium | CI cleanup; blocking release pipeline simplification |

### Concern: Desktop Strategy Vacuum

The [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) removal PR has **zero comments** despite deleting 94 files and invalidating ~20 closed issues. This suggests either:
- Pre-coordinated maintainer decision (not visible in public issues)
- Risk of community surprise and contributor disengagement

**Recommendation for watchers**: Monitor for a follow-up issue explaining desktop strategy — either web-only, Electron replacement, or deprioritized desktop entirely.

---

## Health Assessment

| Metric | Status |
|---|---|
| **Velocity** | 🟢 Excellent — 100 items/day, high closure rate |
| **Quality** | 🟡 Mixed — bulk revert debt, desktop removal whiplash |
| **Community** | 🟡 Tense — major feature reversal without visible consultation |
| **Direction** | 🟡 Uncertain — pivot away from desktop, voice investment continues |
| **Release Readiness** | 🔴 Blocked — v0.7.8 tracker exists but no tag; docs versioning in flight |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*