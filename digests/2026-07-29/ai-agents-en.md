# OpenClaw Ecosystem Digest 2026-07-29

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-29 01:26 UTC

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

# OpenClaw Project Digest — 2026-07-29

## Today's Overview
Project activity remains very high with 500 issues and 500 pull requests updated in the last 24 hours (231 open/active issues, 269 closed; 234 open PRs, 266 merged/closed). The team released `v2026.7.2-beta.5` with substantial state‑safety improvements. The community is most engaged around a long‑standing request for Linux/Windows desktop apps, a critical memory leak in the gateway, and several regressions introduced in recent betas. Maintenance velocity is strong (many closed PRs today), but a backlog of enhancement issues (many tagged `needs‑maintainer‑review`/`needs‑product‑decision`) remains unaddressed.

## Releases
- **v2026.7.2-beta.5** (2026-07-29) [[release](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.5)]
  - **Highlights:** State safety and recovery overhaul.
  - Key changes:
    - Quarantine store that survives primary‑database damage.
    - Crash‑recoverable SQLite snapshots.
    - Crash‑durable filesystem publication.
    - Schema‑upgrade data‑loss rejection.
    - Rollback‑writer snapshot recovery.
  - No breaking changes or migration notes are documented in the release announcement.

## Project Progress
*Closed/merged PRs today (selected):*
- **#115466** – Clarify Codex native subagent completion handoff (docs)
- **#115460** – Unify safe OpenAI tool filtering in Code Mode (refactor)
- **#115459** – Prepare MCP namespaces once per run (refactor)
- **#115467** – Preserve selected Ollama model capabilities during onboarding (fix)
- **#110397** – Preserve restart intent across coalesced config writes (fix, closes #105623)
- **#105402** – Respect agent directory filesystem case sensitivity (fix, closes #105194)

These represent continued investment in Code Mode reliability, documentation quality, and cross‑platform compatibility. Several high‑priority PRs remain open (see *Bugs & Stability*).

## Community Hot Topics

### Most Active Issues
| Issue | Title | Comments | 👍 |
|-------|-------|----------|----|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 115 | 80 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 22 | 0 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak (RSS 350MB→15.5GB, OOM) | 20 | 1 |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | Normal tool text outputs degrade to “(see attached image)” | 15 | 4 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets – Prevent Agent Access to Raw API Keys | 14 | 4 |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | LLM request failed: provider rejected schema (2026.7.1 regression) | 11 | 1 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash‑loop breaker suppresses Discord/WhatsApp permanently | 10 | 0 |
| [#108182](https://github.com/openclaw/openclaw/issues/108182) | Control UI is worse (missing pages) | 10 | 2 |

**Analysis:** The overwhelming demand for native Linux/Windows apps (#75) shows that the user base extends beyond macOS/iOS. Memory reliability (#91588) and credential safety (#10659, #7707) are top concerns. Regressions in the latest beta releases (#108075, #115326) are causing significant disruption.

### Notable Open PRs
- **#115473** – fix(ui): contain model picker scrolling (UI polish)
- **#115472** – fix(ui): keep disabled microphone picker background neutral
- **#115242** – fix(sessions): incremental forward‑indexing to avoid O(n) rebuilds
- **#115453** – fix(whatsapp): resolve WA Web version to avoid 405 handshake rejections
- **#115305** – feat(agents): add Code Mode model acceptance matrix (docs+test infrastructure)

## Bugs & Stability

### Critical (P0)
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** – Gateway memory leak: RSS grows from ~350 MB to 15.5 GB over 2–3 days, causing repeated OOM crashes and `launchd-handoff` restart cycles. No fix PR linked. **Severity:** production outage risk.

### High (P1)
- **[#115326](https://github.com/openclaw/openclaw/issues/115326)** – Crash‑loop breaker permanently suppresses Discord/WhatsApp; documented recovery (`channels.start`) fails with WebSocket 1006. Regression.
- **[#108075](https://github.com/openclaw/openclaw/issues/108075)** – LLM request schema rejection after upgrading to 2026.7.1. Regression; closed (resolved? appears CLOSED in list).
- **[#114137](https://github.com/openclaw/openclaw/issues/114137)** – Visible channel turns dispatch with no queued reply payloads – final text persisted but never delivered (2026.7.1‑2).
- **[#113434](https://github.com/openclaw/openclaw/issues/113434)** – Codex `sessions.reset` reuses retired session ID; catalog/file scans can exhaust Gateway RAM (2026.7.2‑beta.4).
- **[#98790](https://github.com/openclaw/openclaw/issues/98790)** – Concurrent agent‑to‑agent turn forks session tree; Anthropic rejects assistant‑terminal message; retry loop poisons transcript permanently.
- **[#111519](https://github.com/openclaw/openclaw/issues/111519)** – Telegram DM replies fall back after stale DM‑scope cleanup (regression in 2026.7.2‑beta.3) – *closed*.
- **[#98435](https://github.com/openclaw/openclaw/issues/98435)** – MCP loopback transport does not auto‑reconnect after gateway restart; `recovered=1` is misleading.
- **[#102268](https://github.com/openclaw/openclaw/issues/102268)** – Silent empty tool results in long‑running Sonnet 5 sessions after large tool result.
- **PR [#114598](https://github.com/openclaw/openclaw/pull/114598)** – Fix embedded‑runner run budget deadline on progress activity (open, needs proof).
- **PR [#89039](https://github.com/openclaw/openclaw/pull/89039)** – Prevent silent message loss from `EmbeddedAttemptSessionTakeoverError` (open, waiting on author).
- **[#106403](https://github.com/openclaw/openclaw/issues/106403)** – Terminal‑main reconciliation gate silently resets healthy main session due to mtime race – *closed* (fix merged?).

### Medium (P2) – Regressions & Behavioural Bugs
- **#115001** – Hybrid memory search returns spurious 1.0 similarity scores via FTS LIKE‑fallback.
- **#74378** – CLI commands remain alive as orphaned `node.exe` processes on Windows.
- **#113323** – LLM idle timeout aborts agent runs during reasoning‑token streaming on local models – *closed*.
- **#108182** – Control UI missing navigation to Skill Proposals, Dreaming (2026.7.1 regression) – *closed*.
- **#115326** also noted above; multiple PRs attempting fixes.

## Feature Requests & Roadmap Signals
Top community‑requested features that are likely candidates for the next minor release:

| Issue | Feature | Votes / Interest | Status |
|-------|---------|------------------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 80 👍, 115 comments | Open since Jan, `help wanted` |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets (agent cannot see raw API keys) | 4 👍, high security impact | Open, P1 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 22 comments | Open, P2 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Denylist support for exec‑approvals | 8 👍 | Open, P2 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config (`tools.fileAccess`) | 4 👍 | Open, P2 |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | Production‑readiness stability label for releases | 2 👍, heartfelt user feedback | Open, P2 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent‑triggered context compaction (self‑compact tool) | 2 👍 | Open, P2 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions reuse existing session for multi‑turn | 0 👍 but 11 comments, linked PR | Open, P2 |

**Prediction:** Given the safety focus of the latest release and the high priority on security, **#10659 (Masked Secrets)** and **#7707 (Memory Trust Tagging)** may see movement in `2026.7.3`. The Linux/Windows app issue (#75) remains a large undertaking but continues to gather strong community support.

## User Feedback Summary
- **Pain points:** Memory instability (OOM crashes) and session‑related message loss dominate active complaints. Several users report regressions after upgrading to `2026.7.x` beta releases, especially in Telegram, Discord, and the Control UI. Windows users note orphaned processes (#74378) and build issues (#102755, closed). The lack of Linux/Windows native apps is the single most requested feature.
- **Use cases:** Family/business assistants (Telegram, Home Assistant), code agent work (Code Mode), automated cron tasks. Users express deep appreciation for the project (#73537: “it has genuinely become part of our daily workflow”), but the instability of recent releases erodes trust.
- **Dissatisfaction:** The Control UI redesign (#108182) removed formerly accessible pages, and the crash‑loop breaker lockout (#115326) is causing complete loss of channel connectivity until a fix is deployed.

## Backlog Watch
Several important issues and PRs have been open for months with no maintainer action. These require triage:

| Issue/PR | Since | Last Update | Notes |
|----------|-------|-------------|-------|
| [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows apps) | Jan 2026 | Jul 28 | Longest‑standing open enhancement; 80 👍, `help wanted` |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) (Memory Trust Tagging) | Feb 2026 | Jul 28 | Needs product decision |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) (Masked Secrets) | Feb 2026 | Jul 28 | P1, high security impact, needs decision |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) (Denylist for exec) | Feb 2026 | Jul 28 | Linked PR open, no maintainer review |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) (Filesystem Sandbox) | Feb 2026 | Jul 28 | Needs product decision |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) (Fallback on context length) | Feb 2026 | Jul 28 | Could reduce “context overflow” user pain |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) (Event‑loop stall fix) | Jun 2026 | Jul 29 | P1, waiting on author, 90+ days |
| [#112227](https://github.com/openclaw/openclaw/pull/112227) (Split session group mutations) | Jul 21 | Jul 29 | P1, waiting on author, fix for concurrent add loss |
| [#89039](https://github.com/openclaw/openclaw/pull/89039) (Silent message loss fix) | Jun 2026 | Jul 29 | P1, needs proof, 60+ days |

**Maintainer attention is especially needed** on the P0 memory leak (#91588) and the open P1 session‑corruption bugs (#98790, #113434) that are causing production outages. The backlog of enhancement requests from February remains entirely unaddressed, which may frustrate power users looking for security hardening and better platform support.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-07-29

## Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a surge in activity, with core reference projects and specialized forks all iterating rapidly on state reliability, multi-platform support, and agent-to-agent communication. A clear tension has emerged between shipping new features vs. stabilizing regressions, with several projects facing memory leaks, session corruption, and credential management issues that erode user trust. The landscape is fragmenting along platform priorities (macOS-first vs. cross-platform), provider dependencies (Anthropic-centric vs. multi-provider), and deployment models (desktop apps vs. headless/containerized agents). Despite this diversity, common pain points around token consumption, session persistence, and security hardening are unifying themes across virtually all active projects.

## Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (today) | Health Score | Notes |
|---------|---------------------|--------------------|------------------|-------------|-------|
| **OpenClaw** | 500 | 500 | v2026.7.2-beta.5 | ⚠️ **Moderate** | High activity but P0 memory leak + regressions |
| **NanoBot** | 7 | 37 | None | ✅ **Good** | Rapid regression fixes, CI stabilization |
| **Hermes Agent** | 50 | 50 | None | ✅ **Good** | Strong merge velocity, 15 issues closed |
| **PicoClaw** | 4 | 10 | None | ⚠️ **Moderate** | Steady bug fixes, stale Android blocker |
| **NanoClaw** | 0 | 7 | None | ✅ **Good** | Quiet but focused; security fixes merged |
| **NullClaw** | 0 | 0 | None | ⬜ **Inactive** | No activity detected |
| **IronClaw** | 50 | 50 | None | ✅ **Good** | Epic-driven progress, 13 epics closed |
| **LobsterAI** | 4 | 7 | None | ✅ **Good** | Burst of Windows + side-chat fixes |
| **Moltis** | 1 | 8 | None | ✅ **Good** | Low issue count, steady PR trajectory |
| **CoPaw** | 18 | 50 | None | ⚠️ **Moderate** | High bug volume, critical install/data issues |
| **ZeptoClaw** | 0 | 2 | None | ⬜ **Low** | Only dependency bumps |
| **ZeroClaw** | 49 | 50 | None | ⚠️ **Moderate** | Heavy RFC churn, several S1/S2 bugs open |

**Health Score Criteria** — Good: fast regression response, low open critical bugs, active maintainer engagement. Moderate: high open bug count, critical P0s unaddressed, or regression velocity concerning. Low: minimal development activity. Inactive: zero activity.

## OpenClaw's Position

**Advantages vs. Peers:**
- Largest community by far (500 issues, 500 PRs daily — 10x most peers)
- Most comprehensive state-safety infrastructure (quarantine store, crash-recoverable SQLite snapshots, rollback writer recovery)
- Best-in-class documentation for core architecture
- Strongest Code Mode integration among reference agents

**Technical Approach Differences:**
- OpenClaw employs a **crash-durable filesystem publication** model vs. NanoBot's in-memory session consolidation approach
- Hermes Agent relies on **session compression lineages** (which leak — see PR #48525); OpenClaw uses incremental forward-indexing (#115242)
- IronClaw's fault-tolerance is **recovery-per-run** (WS9 of #6284); OpenClaw focuses on **store-level durability**

**Community Size Comparison:**
- OpenClaw: ~500 daily commenters across issues (est. community: 5,000–10,000 active users)
- Hermes Agent: ~50 daily participants (est. 2,000–4,000)
- NanoBot: modest issue volume but 37 PRs/day suggests ~500–1,000 active developers
- IronClaw: high PR churn but limited community discussion (est. 2,000–3,000)

OpenClaw's biggest vulnerability: the P0 memory leak (#91588) that causes 15.5GB RSS growth is unaddressed while NanoBot and Hermes have similar but smaller-scale issues with faster fixes.

## Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Expression |
|-------------|------------------|-------------------|
| **Memory leak / OOM prevention** | OpenClaw (#91588), Hermes (#113434 via session scans), ZeroClaw (#9332 context undercount) | Growing RSS from gateway, session scans exhausting RAM, context meter undercount |
| **State/persistence safety** | OpenClaw (quarantine store), NanoBot (#5118 media path loss), CoPaw (#6520 agent.json corruption), ZeroClaw (#9284 config flush overwrite) | Crash recovery, data integrity on write, rollback resilience |
| **Cross-platform desktop apps** | OpenClaw (#75 Linux/Windows), PicoClaw (#3182 Android), Hermes (#71527 multi-profile) | Unified demand for native apps beyond macOS |
| **Credential / secret security** | OpenClaw (#10659 masked secrets), OpenClaw (#7707 memory trust tagging), Hermes (#62325 OAuth pinning), IronClaw (#6814 API key denylist) | Raw API key exposure, credential leakage via overridden URLs, prompt-content filters |
| **MCP / agent-to-agent reliability** | OpenClaw (#98435 MCP auto-reconnect), NanoBot (#5138 MCP shutdown errors), CoPaw (#6524 MCP session recovery), ZeroClaw (#9418 MCP stdio multiplexing) | Transport-level reconnection, cancellation, backpressure |
| **Session reliability & message delivery** | OpenClaw (#114137 undelivered replies, #98790 poisoned transcripts), NanoBot (#5118 media path loss), Hermes (#69107 TUI session stale), LobsterAI (#1236 plugin ID mismatch) | Lost messages, stale sessions, incorrect routing |

## Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|-------------|----------|-------|----------|
| **Primary user** | Power users, family assistants | Developers, CI/CD | Desktop users, researchers | Enterprise, platform teams | Multi-agent developers | Plugin/architecture-focused devs |
| **Core architecture** | Monolithic reference with microservices gateway | Modular, skill-based with extension platform | Session-compression, TTS/STT-first | Epic-driven, zero-trust, journey-testing | Multi-tenant agent isolation | Runtime-plugin WASM architecture |
| **Platform focus** | macOS (native app) with demand for Linux/Win | Cross-platform (Python-based) | Desktop + Docker | Cloud + containerized | Desktop automation (Win/Mac) | CLI + container |
| **Provider strategy** | Multi-provider with Ollama focus | Broad provider support | Anthropic/Gemini heavy | Anthropic + OpenAI | HuggingFace / open models | Anthropic + OpenAI + ACP |
| **Risk profile** | Stability regressions in recent betas | Regression cycle from feature merges | Telephony/TTS integration instability | Infrastructure fragility (libSQL) | Data integrity + install | Dependency security + serialization |
| **Community engagement** | Highest volume, vocal feedback | Active but lower volume | Growing, buzz feature requests | Moderate but epic-driven | High bug reports, active fix PRs | RFC-driven, low comment volume |
| **Release velocity** | Weekly betas | ~Monthly | ~Biweekly | Stable epics, no recent release | Moderate (no new release today) | No recent release |

## Community Momentum & Maturity

**Tier 1 — Rapid iteration, high churn:**
- **OpenClaw, Hermes Agent, IronClaw, ZeroClaw** — All have 50+ daily PRs/issues. OpenClaw and Hermes are shipping features and fixes at high speed but accumulating regression debt. IronClaw is epic-driven and closing sub-epics systematically. ZeroClaw is the most RFC-heavy, signaling significant architectural change.

**Tier 2 — Steady progress, stabilizing:**
- **NanoBot, Moltis, LobsterAI, NanoClaw, CoPaw** — These projects have lower issue throughput but are either actively fixing regressions (NanoBot, CoPaw) or maturing their feature set (Moltis with ACP integration). LobsterAI and NanoClaw had bursts of focused fixes. PicoClaw fits here but with slower pace.

**Tier 3 — Low activity / maintenance mode:**
- **ZeptoClaw** — Only dependency bumps; no community engagement or feature work.
- **NullClaw** — Inactive.

**Maturity signals:**
- OpenClaw is the most mature in terms of architecture (state safety, Code Mode) but is suffering from **stabilization fatigue** — users report regressions eroding trust.
- IronClaw has the most structured development process (epics, journey testing, hermetic testing platform) but lacks recent releases.
- NanoBot balances high fix velocity with minimal new bug introductions.
- CoPaw and ZeroClaw are still in heavy bug-fix mode before maturity.

## Trend Signals

1. **State safety is the new reliability baseline.** Multiple projects investing in crash-recovery (quarantine store, rollback writers, compression lineages, checkpoint management). Agents are becoming mission-critical for daily workflows, and data loss is unacceptable.

2. **Multi-platform demand is explicit and growing.** OpenClaw (#75), PicoClaw (#3182 Android), and Hermes (#71527 multi-profile) all face pressure to expand beyond macOS. The Linux/Windows desktop app is the single most-voted feature in the ecosystem.

3. **Zero-trust credential handling becomes non-negotiable.** With masked secrets (#10659), OAuth pinning (#62325), and high-entropy token redaction (#9486), the community expects agent systems to treat API keys and secrets as isolated privileges, not data accessible to models.

4. **Agent-to-agent protocols are converging but not standardized.** MCP (Model Context Protocol) reliability is a universal pain point (6+ projects have MCP-related bugs). ACP (Agent Communication Protocol) adoption is emerging in Moltis and ZeroClaw. The ecosystem needs stable transport layers before multi-agent workflows become reliable.

5. **Telephony and audio channels are a growing pain point.** Hermes (TTS streaming, Silk preprocessing, WhatsApp audio), PicoClaw (Feishu audio/video), and ZeroClaw (Signal/Voice crashloops) all struggle with voice. This is early-stage — expect standardization in the next 6 months.

6. **Windows installation is systematically broken.** LobsterAI (#2394 blocked overwrite, #2398 skills backup), CoPaw (#6534 infinite installer loop), and OpenClaw (#74378 orphaned processes) all have Windows-specific bugs. Cross-platform portability requires dedicated maintainer attention.

7. **Token consumption transparency is demanded.** NanoBot (#1332 token waste), IronClaw (#6837 info-level logging for usage stats), and CoPaw (#6512 shell output truncation) all reflect user frustration with opaque or excessive token usage. This is a commercial pressure point — every token costs money, and users want control.

**Value for AI Agent Developers:**
- Prioritize **state persistence** and **crash recovery** — users now expect agent memory to survive restarts and corruptions.
- Invest in **multi-platform client UIs** before community forks your project for Windows/Linux support.
- Design **credential models that isolate API keys from model prompt context** — this is a security differentiator.
- **MCP transport reliability** (auto-reconnect, backpressure, cancellation) is the single highest-ROI infrastructure investment.
- **Token accounting and user-facing cost controls** are the next frontier for commercializing open-source agents.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-29

## 1. Today’s Overview
The project saw **very high activity** over the past 24 hours, with 7 issues updated and **37 pull requests updated** (18 merged or closed). Most PRs are focused on fixing regressions, stabilizing CI, and closing bugs that affect core functionality. Several feature PRs (extension platform, LINE channel, image-aware presets) are still open but have received maintainer attention. No new releases were cut. The overall health is **strong**, with a clear emphasis on reliability and closing down regressions introduced in recent development.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
**18 PRs** were merged or closed today. Notable among them:

- **#5145** [fix(ci): stabilize and speed up CI](https://github.com/HKUDS/nanobot/pull/5145) — Replaced timing-dependent tests with stdin-gated handshake, batched dependency installs.
- **#5144** [fix(ci): scope PR path detection to head changes](https://github.com/HKUDS/nanobot/pull/5144) — Fixed CI targeting for Pull Requests.
- **#5143** [fix(webui): animate reasoning drawer transitions](https://github.com/HKUDS/nanobot/pull/5143) — UI polish for the reasoning drawer.
- **#5110** [feat(config): add actionable startup diagnostics and WebUI recovery](https://github.com/HKUDS/nanobot/pull/5110) — Extended `nanobot status` command with offline readability checks.
- **#5142** [fix(webui): open threads at latest message](https://github.com/HKUDS/nanobot/pull/5142) — Fixed scroll behavior when restoring conversation threads.

Several regression-fix PRs (e.g., #5155, #5154, #5153, #5152, #5151, #5150, #5147, #5146) are still **open** but received commits today.

## 4. Community Hot Topics

| Issue/PR | Title | Comments | 👍 | Link |
|----------|-------|----------|---|------|
| #5 (closed) | uv install | 7 | 3 | [Issue #5](https://github.com/HKUDS/nanobot/issues/5) |
| #5000 (open) | Proposal: evolve subagent system toward multi-agent collaboration | 5 | 0 | [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) |
| #1332 (closed) | 消耗的token好多啊 (high token consumption) | 4 | 0 | [Issue #1332](https://github.com/HKUDS/nanobot/issues/1332) |

**Analysis**:  
- **#5** (uv install) remains popular even after closure, indicating strong user interest in leveraging `uv` for faster, stable installs.  
- **#5000** proposes a fundamental architecture shift toward true multi-agent collaboration with persistent identities and shared state. This signals a long-term roadmap direction that could significantly change agent orchestration.  
- **#1332** (token consumption) highlights a consistent usability pain point — users are unhappy with large token usage even for simple queries.

## 5. Bugs & Stability

**High severity bugs reported today (all open):**

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) | Session consolidation drops uploaded media paths stored only in `media[]` – data loss | Fix PR [#5120](https://github.com/HKUDS/nanobot/pull/5120) and [#5139](https://github.com/HKUDS/nanobot/pull/5139) both open |
| [#5133](https://github.com/HKUDS/nanobot/issues/5133) | `finish_reason='length'` with `tool_calls` and blank content misrouted to empty-response retry instead of length recovery | No fix PR yet |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | No audio output on WhatsApp channel (receive works, send fails) | No fix PR yet |
| [#5138](https://github.com/HKUDS/nanobot/issues/5138) | MCP stdio shutdown errors (cancel-scope teardown, stdout pollution) | Tracking issue, no dedicated PR |

**Additional regressions being fixed** (PRs open but not yet merged):  
- Pairing store `None` approved map crash ([#5155](https://github.com/HKUDS/nanobot/pull/5155))  
- Responses API parser crashing on primitive items ([#5154](https://github.com/HKUDS/nanobot/pull/5154))  
- Memory raw archive handling non-string timestamps ([#5153](https://github.com/HKUDS/nanobot/pull/5153))  
- Weak session lock leaks ([#5151](https://github.com/HKUDS/nanobot/pull/5151))  
- Unbounded exec session output ([#5150](https://github.com/HKUDS/nanobot/pull/5150))  
- Pairing approvals erased on transient read failures ([#5147](https://github.com/HKUDS/nanobot/pull/5147))  
- Malformed token-usage day keys in WebUI ([#5146](https://github.com/HKUDS/nanobot/pull/5146))

The volume of regression fixes suggests that recent feature merges introduced several edge-case vulnerabilities, but the maintainers are reacting quickly.

## 6. Feature Requests & Roadmap Signals

**New feature proposals gaining traction:**
- **Multi-agent collaboration** ([Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)) — Likely to be considered for next major release; several PRs (e.g., subagent partial results #5152) are already aligned with this direction.
- **Unified extension platform** ([PR #5098](https://github.com/HKUDS/nanobot/pull/5098) — open) — A small Python extension boundary to fill gaps not covered by skills/Apps/MCP. Could appear in v2.1.
- **LINE Messaging API channel** ([PR #5115](https://github.com/HKUDS/nanobot/pull/5115) — open) — High demand for Asian market expansion.
- **Skill marketplaces and management** ([PR #5116](https://github.com/HKUDS/nanobot/pull/5116) — open) — Brings a discover and install UI for third-party skills.
- **Image-aware model presets** ([PR #5148](https://github.com/HKUDS/nanobot/pull/5148) — open) — Adds tri-state `supportsImageInput` per model preset, streamlining vision model config.
- **Stable resource path aliases** ([PR #5131](https://github.com/HKUDS/nanobot/pull/5131) — open) — Improves agent/media/package path management.

**Prediction:** The next minor release will likely include the extension platform, LINE channel, and image-aware presets, while multi-agent collaboration may be a longer-term roadmap item.

## 7. User Feedback Summary

- **Pain point: token overconsumption** (Issue #1332). Even a simple “hello” consumes thousands of tokens. Many community reactions (👍) indicate this is a broad concern.  
- **Audio sending broken on WhatsApp** (Issue #5149). Users are unable to send audio files, though receiving works. No fix yet.  
- **Media path loss** (Issue #5118) caused files to become unrecoverable after archiving — a major data integrity concern raised by multiple users.  
- **MCP stdio shutdown warnings** (Issue #5138) are a persistent annoyance for users running MCP tools.  
- **Installation speed** (Issue #5) remains a point of desire: users want native `uv` support for faster, more reliable setups.

Overall sentiment is **mixed**: users appreciate the rapid bug fixes and new features but are frustrated by regressions and high token usage.

## 8. Backlog Watch

- **#1332 (token consumption, closed as stale)** — Despite closure, this issue represents a recurring complaint. Maintainers may want to re-evaluate token efficiency strategies.
- **#5000 (multi-agent proposal)** — Open with 5 comments, but no maintainer response yet. Given its architectural scope, early engagement would help align community expectations.
- **#5118 (media path loss)** — Has two competing fix PRs (#5120 and #5139); a maintainer decision is needed to avoid duplicate work.
- **#5138 (MCP SDK migration)** — Only a tracking issue with no assigned owner. Need to ensure the upstream MCPv2 migration is planned.

No long-dormant issues with maintainer inaction were identified; most recent activity is being addressed promptly.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-29

## 1. Today’s Overview

Hermes Agent saw a highly active development day with 50 issues and 50 pull requests updated in the last 24 hours, including 37 PRs merged or closed and 15 issues resolved. The project remains in a fast-moving state, balancing urgent bug fixes (notably around streaming, authentication, and Docker environments) with community-driven feature requests. Several long-standing issues gained traction, while maintainers pushed through critical security patches and compatibility improvements.

## 2. Releases

*No new releases today.* No changes, no breaking changes, no migration notes.

## 3. Project Progress

37 pull requests were merged or closed today, spanning multiple components and priority levels. Key advancements include:

- **Streaming & TTS fixes** – [PR #70307](https://github.com/NousResearch/hermes-agent/pull/70307) (closed): *fix(tts): honor OpenAI config for streaming* – resolves Desktop TTS for local/compatible endpoints by respecting `tts.openai.base_url` instead of hardcoded env vars.
- **Security hardening** – [PR #62325](https://github.com/NousResearch/hermes-agent/pull/62325) (closed): *fix(xai): pin OAuth TTS/STT requests to resolved xAI base URL* – prevents credential leakage via overridden base URLs.
- **Anthropic streaming stability** – [PR #45922](https://github.com/NousResearch/hermes-agent/pull/45922) (open, high importance): *fix(agent): shape partial-stream recovery stub for anthropic_messages mode* – eliminates retry storms on malformed Anthropic streams.
- **Session management** – [PR #48525](https://github.com/NousResearch/hermes-agent/pull/48525) (open): *fix(sessions): delete entire compression lineages* – prevents “onion peeling” bug where deleted compressed sessions resurface.
- **Docker & cron improvements** – [PR #43310](https://github.com/NousResearch/hermes-agent/pull/43310) (open): *fix(desktop): restore stable cron jobs position, compact strip* – UI regressions fixed; [PR #43233](https://github.com/NousResearch/hermes-agent/pull/43233) (open): *fix(cron): end-to-end fix for cron session rendering on Desktop*.
- **STT robustness** – [PR #11593](https://github.com/NousResearch/hermes-agent/pull/11593) (closed): *fix(stt): preprocess .silk voice notes before transcription* – extends transcription support for Silk-encoded voice notes.

Additionally, multiple PRs addressed TTS lazy-install fallbacks (#53489, #53289, #46127) and Desktop installation reliability (#39845).

## 4. Community Hot Topics

The most active discussions and reaction-heavy issues reflect a community focused on platform expansion and polish:

- **[#68871 – Add messaging support for Buzz](https://github.com/NousResearch/hermes-agent/issues/68871)** (closed) – ★ 18 comments, 16 👍. A feature request to integrate with Block’s open-source Buzz workspace for team-agent messaging. High engagement signals strong demand for collaborative agent environments.
- **[#71527 – Desktop does not pass active profile as ?profile= query param to WebSocket](https://github.com/NousResearch/hermes-agent/issues/71527)** (open) – 7 comments. Multi-profile workspace users face session mismatches; the Desktop client stores the active profile locally but omits it from WebSocket connections.
- **[#49253 – Photon iMessage: Markdown Bold-Formatting corrupts Unicode](https://github.com/NousResearch/hermes-agent/issues/49253)** (closed) – 6 comments. A persistent rendering bug with non-ASCII text in Markdown bold formatting, now resolved.
- **[#16257 – google_api.py crashes on Python 3.9](https://github.com/NousResearch/hermes-agent/issues/16257)** (open, 4 comments) – Still impacting macOS system Python users; the fix in setup.py missed google_api.py.
- **[#17575 – fix: only set HERMES_INTERACTIVE when stdin/stdout are real terminals](https://github.com/NousResearch/hermes-agent/issues/17575)** (open, 4 comments) – Container users face sudo prompts when invoked in non-TTY contexts.
- **[#1468 – Feature Request: Parallel Task Execution for Concurrent User Requests](https://github.com/NousResearch/hermes-agent/issues/1468)** (open, 4 comments) – A long-standing feature ask for non-blocking concurrent task handling.
- **[#17266 – add yaml schema for yaml-language-server](https://github.com/NousResearch/hermes-agent/issues/17266)** (open, 4 👍, 1 comment) – Config editing pain point; schema support would dramatically improve user experience.

## 5. Bugs & Stability

Today’s report includes several open bugs, some with corresponding fix PRs:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| P2 | [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) | Desktop WebSocket missing active profile param | None yet |
| P2 | [#17575](https://github.com/NousResearch/hermes-agent/issues/17575) | `HERMES_INTERACTIVE` set in non-TTY containers | No |
| P2 | [#17576](https://github.com/NousResearch/hermes-agent/issues/17576) | Gateway `/restart` bash watcher causes zombie processes in Docker | No |
| P2 | [#18421](https://github.com/NousResearch/hermes-agent/issues/18421) | `/goal` judge gives false positive on silent file write failures | No |
| P2 | [#69107](https://github.com/NousResearch/hermes-agent/issues/69107) | TUI stales when another client writes to same session | No |
| P2 | [#66587](https://github.com/NousResearch/hermes-agent/issues/66587) | Gemini HTTP 400 missing `thought_signature` in functionCall | No |
| P2 | [#32196](https://github.com/NousResearch/hermes-agent/issues/32196) | WeChat Silk voice notes skip STT, Russian transcription broken | No (PR #11593 addresses .silk preprocessing but not Russian pipeline) |
| P3 | [#16257](https://github.com/NousResearch/hermes-agent/issues/16257) | `google_api.py` crashes on Python 3.9 (missing `from __future__ import annotations`) | No |
| P3 | [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) | Node sidecar NPM error on Podman install | No |
| P3 | [#72763](https://github.com/NousResearch/hermes-agent/issues/72763) | Photon setup stale token reuse (401) | No |
| P3 | [#69960](https://github.com/NousResearch/hermes-agent/issues/69960) | Cron jobs cannot deliver to Photon (sidecar/token unavailable) | No |

Several bugs had associated PRs merged today: #70307 (TTS streaming), #62325 (xAI OAuth), #11593 (Silk preprocessing), #46127 (STT lazy-install error logging). Overall, the bug landscape shows a healthy churn of reported issues and active fixes.

## 6. Feature Requests & Roadmap Signals

Community feature requests today highlight three emerging themes:

- **Platform integration** – [#68871 (Buzz messaging)](https://github.com/NousResearch/hermes-agent/issues/68871), [#47435 (ACP Registry for Zed/JetBrains/VS Code)](https://github.com/NousResearch/hermes-agent/issues/47435), [#73423 (Hetzner AI Inference provider)](https://github.com/NousResearch/hermes-agent/issues/73423). These signal a desire for broader agent ecosystem connectivity.
- **Developer experience** – [#17266 (YAML schema for config)](https://github.com/NousResearch/hermes-agent/issues/17266), [#16636 (Expandable tool call messages in TUI)](https://github.com/NousResearch/hermes-agent/issues/16636), [#20307 (ephemeral API-message transformation hook)](https://github.com/NousResearch/hermes-agent/issues/20307). Users want better tooling and transparency.
- **Scalability & concurrency** – [#1468 (Parallel task execution)](https://github.com/NousResearch/hermes-agent/issues/1468) remains a top-voted feature. Combined with [#10164 (context-aware skills prompt budget management)](https://github.com/NousResearch/hermes-agent/issues/10164), the community is pushing for more robust long-session handling.

Given the PR activity around session compression (#48525) and streaming fixes (#45922, #70307), the next minor release (likely 0.6.x or 0.7.x) may include:
- Buzz integration (if accepted)
- ACP Registry support
- YAML schema for config
- Improved desktop session rendering for cron jobs
- TTS/STT fallback enhancements

## 7. User Feedback Summary

User pain points extracted from today’s issues:

- **Configuration complexity** – Repeated complaints about config.yaml editing without LSP support (#17266, #72763). Users find the current workflow “really, really pain into the ass.”  
- **Container/Docker friction** – Issues #17575, #17576, #62975 collectively describe broken experiences in non-interactive environments (cron, Paperclip, Podman).  
- **Multi-profile session confusion** – Issue #71527 and #69107 both expose multi-client/session state mismatches, causing invisible stale data or profile routing errors.  
- **Silent failures** – Issue #18421 highlights a trust gap: the agent claims success but writes fail silently, making `/goal` unreliable.  
- **Photon/iMessage reliability** – Issues #49253, #49793, #50755, #69960, #72763 show ongoing user frustration with the Photon plugin (Markdown corruption, authentication errors, cron delivery failures).  
- **Language/regional support** – Issues #32196 (Russian transcription broken) and #49253 (Unicode corruption) indicate non-English users hit extra barriers.  
- **Positive signals** – The rapid closure of 15 issues and 37 PRs merged today suggests maintainers are responsive. High 👍 counts on #68871 and #17266 show users are engaged and hopeful.

## 8. Backlog Watch

Several important items remain unresolved and need maintainer attention:

| Issue | Age | Priority | Reason for Watch |
|-------|-----|----------|------------------|
| [#16257](https://github.com/NousResearch/hermes-agent/issues/16257) – `google_api.py` Python 3.9 crash | 94 days | P3 | Impacts macOS system Python users; trivial fix (add `from __future__ import annotations`) yet unmerged. |
| [#1468](https://github.com/NousResearch/hermes-agent/issues/1468) – Parallel task execution | 136 days | P3 | High community demand (4 comments, 1 👍), but no assignee or PR. Core architecture decision. |
| [#10164](https://github.com/NousResearch/hermes-agent/issues/10164) – Context-aware skills prompt budget | 105 days | P3 | Marked `needs-decision`; fundamental to long-session stability. |
| [#17575](https://github.com/NousResearch/hermes-agent/issues/17575) – `HERMES_INTERACTIVE` in non-TTY | 91 days | P2 | Blocks container/cron workflows; PR #17575 itself is a proposed fix but open. |
| [#17576](https://github.com/NousResearch/hermes-agent/issues/17576) – Gateway restart race condition in Docker | 91 days | P2 | Another container-specific stability issue with proposed fix pending. |
| [#17157](https://github.com/NousResearch/hermes-agent/issues/17157) – Discord slash command sync timeout | 92 days | P2 | Operational issue on live gateways; no maintainer response visible. |
| [#18421](https://github.com/NousResearch/hermes-agent/issues/18421) – `/goal` false positive | 89 days | P2 | Undermines trust in goal-oriented workflow; no fix PR yet. |
| [#32196](https://github.com/NousResearch/hermes-agent/issues/32196) – WeChat Silk/STT broken for non-Chinese | 65 days | P2 | Platform-specific but affects multiple users; STT preprocessing was added (#11593) but transcription pipeline still defaults to Chinese. |

These items, if left unaddressed, may erode user confidence in Hermes Agent’s reliability for container deployments, non-English locales, and multi-client scenarios.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-29

## Today's Overview

The PicoClaw project shows moderate activity with 4 issues and 10 pull requests updated in the last 24 hours. Three issues were closed (including a long-standing high‑priority feature request), and three PRs were merged or closed, reflecting steady bug‑fix and minor feature work. No new releases were published, and the seven remaining open PRs indicate ongoing development effort across authentication, provider support, and UI features.

## Releases

None (no new versions or release notes in the data).

## Project Progress

Three pull requests were merged or closed today, advancing stability and provider compatibility:

- **#3256** ([PR](https://github.com/sipeed/picoclaw/pull/3256)) — fixed Feishu (飞书) media delivery by sending audio/video as native message types instead of generic files, enabling inline playback.
- **#3254** ([PR](https://github.com/sipeed/picoclaw/pull/3254)) — fixed model reference resolution in `lookupModelConfigByRef` so that verbatim model matches take priority over provider‑alias splits, preventing incorrect model selection.
- **#3228** ([PR](https://github.com/sipeed/picoclaw/pull/3228)) — fixed the Anthropic Messages provider to send `SystemParts` as system blocks with `cache_control`, enabling prompt caching on that provider.

Three issues were also closed:
- **#3088** (CLOSED) — Feature request to replace libolm with vodozemac for security; likely considered resolved or superseded.
- **#3255** (CLOSED) — DingTalk chat list preview always showing “PicoClaw” instead of message content.
- **#3300** (CLOSED) — Tool set missing `read_file` causing conversation deadlock when `RULES.md` is referenced.

## Community Hot Topics

The most active discussion continues around security and platform compatibility:

- **#3088** ([Issue](https://github.com/sipeed/picoclaw/issues/3088)) — “use vodozemac instead of libolm” (10 comments, 2 👍). Although closed, the volume of engagement reflects strong user desire to move away from unmaintained cryptographic dependencies.
- **#3182** ([Issue](https://github.com/sipeed/picoclaw/issues/3182)) — “Android version” (5 comments, 0 👍). An open, stale bug where the Android service fails to launch; users are blocked from using PicoClaw on that platform.
- **#3255** ([Issue](https://github.com/sipeed/picoclaw/issues/3255)) — DingTalk preview bug (2 comments) affecting enterprise users in China.

Underlying needs: users want a production‑ready Android client, better Chinese IM platform integration, and proactive security updates.

## Bugs & Stability

| Issue | Description | Severity | Status | Fix PR? |
|-------|-------------|----------|--------|---------|
| #3182 | Android service cannot launch; permission issues, path settings broken | **High** – blocks platform usage | Open (stale) | None identified |
| #3300 | Toolset missing `read_file` causes deadlock in every conversation | **High** – breaks core agent flow | Closed (likely fixed) | Not linked |
| #3255 | DingTalk chat list preview shows fixed text instead of reply content | **Medium** – UI annoyance | Closed | Not linked |

Two additional open PRs address stability:
- **#3280** ([PR](https://github.com/sipeed/picoclaw/pull/3280)) — fixes browser OAuth login failures on headless/remote setups (critical for headless deployments).
- **#3279** ([PR](https://github.com/sipeed/picoclaw/pull/3279)) — prevents tool‑call format leakage into LLM summaries via the seahorse store.
- **#3251** ([PR](https://github.com/sipeed/picoclaw/pull/3251)) — captures prompt cache token usage in Anthropic providers, important for cost monitoring.

## Feature Requests & Roadmap Signals

- **#3299** ([PR](https://github.com/sipeed/picoclaw/pull/3299)) — Adds native Exa web search provider. This is a new feature under review, likely to be merged in the next release.
- **#3200** ([PR](https://github.com/sipeed/picoclaw/pull/3200)) — Configurable default fallback chain for models in the web UI, with backend persistence. This improves model reliability for users.
- **#1951** ([PR](https://github.com/sipeed/picoclaw/pull/1951)) — Migration of installation scripts from the docs repo to the main repo, making self‑hosting easier.
- **#3259** ([PR](https://github.com/sipeed/picoclaw/pull/3259)) — Updated project description to note better parallelization, suggesting continued performance improvements.

The next version (likely v0.x) may include Exa search, model fallback chains, and the Anthropic cache metrics fix.

## User Feedback Summary

- **Pain points**: Android incompatibility (issue #3182) is the most significant user blocker. Several Chinese users report issues with DingTalk and Feishu integrations, though Feishu audio/video has been fixed.
- **Use cases**: Security‑minded users pushed for vodozemac; developers want flexible model fallback and web search; enterprise deployments need reliable OAuth on headless servers.
- **Satisfaction**: Bug fixes for Feishu, DingTalk preview, and deadlock are positive signals. However, the stale Android bug persists without clear maintainer response.

## Backlog Watch

- **#3182** ([Issue](https://github.com/sipeed/picoclaw/issues/3182)) — Android version bug, open since June 26, stale. No maintainer comments or assignee. This is the highest‑priority item needing attention.
- **#1951** ([PR](https://github.com/sipeed/picoclaw/pull/1951)) — “chore: move installation scripts”, open since March 24. No recent activity; reviewing this could improve the developer onboarding experience.
- **#3200** ([PR](https://github.com/sipeed/picoclaw/pull/3200)) — Model fallback chain feature, open since July 1, with no maintainer feedback yet.
- **#3251** ([PR](https://github.com/sipeed/picoclaw/pull/3251)) — Anthropic cache token capture, open since July 12, also awaiting review.

These items represent either critical bugs or features that would significantly improve the project’s polish and user trust.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-29

## Today's Overview
NanoClaw saw no new releases or issues today, but maintainers merged/closed **4 pull requests** and updated **7 more** in the last 24 hours. The project remains actively maintained, with a clear focus on reliability and operational polish: three of the four merges address silent failures in the update mechanism and container lifecycle, while the open PRs cluster around database migrations, webhook configurability, and dual-engine quota fallback. The absence of new bug reports suggests the recent fixes are holding, but the volume of open fix PRs indicates ongoing hardening of edge cases.

## Releases
No new releases today.

## Project Progress
Four PRs were merged or closed today, all fixing or improving core infrastructure:

- **#3060** `fix(container): add --init to agent container spawn args so PID 1 reaps zombie processes` – Merged. Eliminates a known PID-1 reaping gap when using `--entrypoint bash`; also corrects related documentation in `docs/build-and-runtime.md`. (tenequm)
- **#1255** `feat: add MiniMax OAuth (Coding Plan) as model provider` – Closed. Adds an alternative model provider without requiring an Anthropic API key or Claude subscription OAuth. Includes device‑code OAuth flow, token refresh, and a login script. (shockalotti)
- **#2197** `fix(update-nanoclaw): guard merge state to prevent silent single-parent commits` – Closed. Prevents `/update-nanoclaw` from producing a non‑merge commit on forked repos when git auto‑merge resolves cleanly but incorrectly. (davekim917)
- **#1136** `feat(update-nanoclaw): add auto-merge audit and container smoke test` – Closed. Adds two safety steps that catch silent code deletions during upstream merges – a real problem discovered via a leaked secrets incident. (davekim917)

## Community Hot Topics
No issues or PRs generated comments or reactions today. The most discussion-worthy PRs by scope are:

- **#3057** – Dual‑engine quota fallback (Claude→Codex), production‑tested on WhatsApp since July 6. This is a major feature that enables fallback to Codex on quota exhaustion, with handoff recaps and proactive warnings. (elia-ben-cnaan) [Link](https://github.com/nanocoai/nanoclaw/pull/3057)
- **#1255** – MiniMax OAuth provider (merged today). Lowers the barrier to entry for users without Anthropic token access. [Link](https://github.com/nanocoai/nanoclaw/pull/1255)

These represent the two biggest community-facing enhancements in the pipeline or just delivered.

## Bugs & Stability
Seven fix PRs were updated today, indicating a strong focus on reliability. No new bugs were reported via issues; all fixes are proactive or address latent flaws.

| Severity | Bug / Issue | Fix PR(s) | Status |
|----------|-------------|-----------|--------|
| **High** | Agent containers not reaping zombie processes (PID 1 issue) | #3060 | Merged |
| **High** | `/update-nanoclaw` produces single-parent commit on fork merges | #2197 | Merged |
| **Medium** | Auto‑merge silently drops code during upstream merges (secrets leak vector) | #1136 | Merged |
| **Medium** | Resolved approval cards lose content after resolution | #3143 | Open (core-team) |
| **Medium** | `WEBHOOK_PORT` not honored from `.env` | #3148 | Open |
| **Low–Med** | Agent‑runner reply context leaks to wrong destination | #3147 | Open |
| **Low** | Missing channel destinations for existing messaging‑group wirings | #3145 | Open |
| **Low** | Two dev scripts (`test-v2-host.ts`, another) broken by architectural changes | #3146 | Open |

All open fix PRs have been authored by core‑team or trusted contributors and appear to be actively maintained (no stale updates).

## Feature Requests & Roadmap Signals
The dual‑engine quota fallback (#3057) is the most significant feature in flight; it is production‑tested but still open. Likely candidate for next minor release. Additionally:

- **#3144** – `WEBHOOK_HOST` env var (default `0.0.0.0`) to restrict bind address. Requested for deployments that need to avoid exposing webhook on all interfaces. (jonnychesthair-crypto) – Open, fix PR.
- **#1255** (merged) – MiniMax OAuth provider is now available; may reduce dependency on Anthropic for some users.

No formal roadmap document is present in the data, but the PR trends suggest the project is prioritising security (zombie reaping, merge safety) and operational flexibility (webhook config, quota fallback).

## User Feedback Summary
No direct user feedback (issues, comments) appeared today. However, the merged PRs reflect pain points that have been reported previously:

- **Zombie processes** – users running agents in containers likely experienced resource leaks. Fix #3060.
- **Fork merge corruption** – customizers of NanoClaw were getting broken commit history. Fix #2197.
- **Silent code drops** – one user lost secrets during an update. Fix #1136.
- **Missing MiniMax support** – a barrier for users without Anthropic tokens. Resolved with #1255.

Overall satisfaction appears to be high enough that no new bugs are being filed, but maintainers are still actively cleaning up known issues.

## Backlog Watch
No long‑unanswered issues or PRs are apparent from today’s data. The oldest PR that is still open (#1255) was closed today. The dual‑engine quota PR (#3057) has been open since July 15 – it may benefit from a final review pass to merge, as it has been production tested for over three weeks. No maintainer‑attention gaps detected.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-29

## Today's Overview

IronClaw shows sustained high development velocity with **50 issues** and **50 pull requests** updated in the last 24 hours. Activity is spread across multiple concurrent epics: error-recoverability endgame ([#6284](https://github.com/nearai/ironclaw/issues/6284)), hermetic capability and journey testing ([#6524](https://github.com/nearai/ironclaw/issues/6524)), and the Reborn IRonHub integration ([#6754](https://github.com/nearai/ironclaw/pull/6754)). **16 issues were closed** and **15 PRs were merged or closed**, signaling steady progress toward completion of several sub-epics. The project remains in a highly active state, with security and stability fixes dominating recent contributions.

## Releases

No new releases were published today. The last known release tag is `ironclaw 1.0.0` (referenced in issue [#6814](https://github.com/nearai/ironclaw/issues/6814)).

## Project Progress

**Closed/Merged PRs (today):**  
Only one PR from the top 20 was closed: [#6816](https://github.com/nearai/ironclaw/pull/6816) – *fix(channels): centralize ingress and scope manifest commands* – which introduces a fail‑closed manifest allowlist for channel commands. Beyond the top 20, the summary reports **15 total merged/closed PRs** in the last 24 hours, indicating a healthy merge rate for smaller tasks and bug fixes.

**Closed Issues (today):**  
A notable batch of **13 issues** were closed, all authored by `BenKurrek` and dated 2026-07-22. These complete sub‑epics under the extension lifecycle ([#6486](https://github.com/nearai/ironclaw/issues/6486)) and messaging framework ([#6484](https://github.com/nearai/ironclaw/issues/6484)) tracks, including:

- [#6516](https://github.com/nearai/ironclaw/issues/6516) – Canonical critical journey catalog defined  
- [#6517](https://github.com/nearai/ironclaw/issues/6517) – Journey coverage gaps mapped to evidence tiers  
- [#6518](https://github.com/nearai/ironclaw/issues/6518) – Release gates enforced for journey health  
- [#6511](https://github.com/nearai/ironclaw/issues/6511) – Tenant extension publication API/UI  
- [#6512](https://github.com/nearai/ironclaw/issues/6512) – Extension policy precedence and locked-user UX  
- [#6509](https://github.com/nearai/ironclaw/issues/6509) – Per‑user credentials bound to tenant‑managed extensions  
- [#6508](https://github.com/nearai/ironclaw/issues/6508) – Provider events synchronized to canonical conversation history  
- [#6507](https://github.com/nearai/ironclaw/issues/6507) – Channel provenance surfaced in WebUI  
- [#6506](https://github.com/nearai/ironclaw/issues/6506) – External‑conversation binding contract defined  
- [#6502](https://github.com/nearai/ironclaw/issues/6502) – Slack messaging tools migrated to shared profiles  
- [#6501](https://github.com/nearai/ironclaw/issues/6501) – Manifest opt‑in for messaging operations  
- [#6500](https://github.com/nearai/ironclaw/issues/6500) – Provider‑neutral messaging profiles and schemas  
- [#6497](https://github.com/nearai/ironclaw/issues/6497) – Telegram lifecycle and live‑canary release gate  

Also closed: [#6729](https://github.com/nearai/ironclaw/issues/6729) (normalized extension installation persistence) and [#6730](https://github.com/nearai/ironclaw/issues/6730) (corrected memory provider lifecycle).

**Key PRs still open but nearing readiness:**  
- [#6691](https://github.com/nearai/ironclaw/pull/6691) – Composition assembly refactor (−9,421 lines) – core cleanup  
- [#6740](https://github.com/nearai/ironclaw/pull/6740) – TLS termination seam for sandbox egress proxy  
- [#6780](https://github.com/nearai/ironclaw/pull/6780) – IRonHub deep‑link register/install gateway  
- [#6831](https://github.com/nearai/ironclaw/pull/6831) – Standardized messaging framework (host‑owned standard ops)

## Community Hot Topics

| # | Issue / PR | Comments | Topic |
|---|------------|----------|-------|
| 1 | [#6284](https://github.com/nearai/ironclaw/issues/6284) | 15 | **Error‑recoverability endgame** – the model must recover from 100% of errors. Epic defining the contract (run survives, model sees cause + remedy, no false success). High engagement indicates critical demand for reliability. |
| 2 | [#6524](https://github.com/nearai/ironclaw/issues/6524) | 3 | **Hermetic capability & journey testing platform** – aim to mechanically answer whether every capability has deterministic, meaningful coverage. Linked to multiple workstreams; a core infrastructure epic. |
| 3 | [#6820](https://github.com/nearai/ironclaw/issues/6820) | 2 | **IRonHub unsigned catalog URL** – trust‑boundary issue where agent reaches for an unsigned URL when discovery fails. Reported from live preview build of #6780. |
| 4 | [#6814](https://github.com/nearai/ironclaw/issues/6814) | 1 | **Third‑party skills denylist** – “API key” in description kills all runs, even after certified skills were exempted. Affects released 1.0.0. |

The underlying need across these threads is **predictable, secure, and reliable agent behavior** – especially error recovery, trust boundaries, and tool discoverability. Community attention is concentrated on making IronClaw safe and robust for production deployments.

## Bugs & Stability

**Critical / P1 (service‑impacting):**  
- [#6805](https://github.com/nearai/ironclaw/issues/6805) – Railway instance intermittently returns `service_unavailable` every ~30 minutes. Affects all functions. No fix PR identified.  
- [#6815](https://github.com/nearai/ironclaw/issues/6815) – Turn‑state store latches degraded forever after one write‑behind flush failure, requiring manual restart. Observed on libSQL QA deploy. No fix PR yet.  
- [#6835](https://github.com/nearai/ironclaw/issues/6835) – MCP auth failures never raise a re‑auth gate; `AuthRequired` classified as `Client` instead of proper type, so the agent never retries authentication. Found during WS6 crossing test. Fix likely in [#6825](https://github.com/nearai/ironclaw/pull/6825).

**High (functional regressions, user‑visible):**  
- [#6814](https://github.com/nearai/ironclaw/issues/6814) – Third‑party skills containing “API key” in description fail every run on 1.0.0. Follow‑up to #5169/#5258. No open fix PR.  
- [#6833](https://github.com/nearai/ironclaw/issues/6833) – Notion tool installation fails/hangs without clear error.  
- [#6834](https://github.com/nearai/ironclaw/issues/6834) – Slack integration setup fails (near.foundation account).  
- [#6806](https://github.com/nearai/ironclaw/issues/6806) – Automations do not appear in web chat; user must navigate to separate page.  
- [#6829](https://github.com/nearai/ironclaw/issues/6829) – Telegram forum‑topic delivery has no whole‑path coverage; missing `message_thread_id` could cause misdelivery.  

**Medium (defense in depth / correctness):**  
- [#6807](https://github.com/nearai/ironclaw/issues/6807) – `NetworkTargetPattern` validators not enforced at type level; 92 struct‑literal construction sites bypass validation.  
- [#6820](https://github.com/nearai/ironclaw/issues/6820) – IRonHub agent reaches for unsigned catalog URL (trust boundary).  
- [#6821](https://github.com/nearai/ironclaw/issues/6821) – IRonHub free‑text matches read as complete catalog (agent reports 3 tools when catalog has 18).  

**Fixed by open PRs today:**  
- [#6824](https://github.com/nearai/ironclaw/pull/6824) – Stops silent retry of model‑stage failures that cannot succeed (e.g., `InvalidInvocation`, `PolicyDenied`).  
- [#6826](https://github.com/nearai/ironclaw/pull/6826) – Stops reading rate limits as auth failures and stops retrying missing models.  
- [#6832](https://github.com/nearai/ironclaw/pull/6832) – Bounds recovery per RUN, not per stage (WS9 of #6284).  
- [#6817](https://github.com/nearai/ironclaw/pull/6817) – Closes four TOCTOU escapes in the filesystem backend (security fix).

## Feature Requests & Roadmap Signals

**Most‑requested forward features:**  
- [#6810](https://github.com/nearai/ironclaw/issues/6810) – **Progressive tool disclosure as default** – make large capability surfaces stay within bounded prompt budget without degrading everyday use. Currently under enhancement; likely to land in next release as it aligns with Reborn stack optimisations.  
- [#6837](https://github.com/nearai/ironclaw/issues/6837) – **Info‑level logging for growth/usage stats** – currently zero `info!` calls in growth‑related code. A minimal analytical signal for future product decisions.  
- [#6524](https://github.com/nearai/ironclaw/issues/6524) (epic) – **Hermetic testing platform** – deterministic coverage for every capability and journey. Many workstreams are already completing (WS4, WS6, WS8 closed via PRs today).  
- Extension lifecycle improvements – the closed issues today (##6511, #6509, #6506, etc.) lay groundwork for **tenant‑admin governance, credential binding, and canonical thread binding**. These are roadmap items likely to appear in 1.1.0 or 2.0.0.

**Prediction for next version:**  
The combination of IronHub deep‑link install ([#6780](https://github.com/nearai/ironclaw/pull/6780)), standardized messaging framework ([#6831](https://github.com/nearai/ironclaw/pull/6831)), and error‑recoverability fixes (multiple PRs from #6284 workstreams) suggests the next release will be a **stability and extensibility release**, possibly `1.1.0`. Tool disclosure defaults and tenant‑admin UIs may follow.

## User Feedback Summary

**Real pain points reported today:**  
- **Tool installation failures**: Notion ([#6833](https://github.com/nearai/ironclaw/issues/6833)) and Slack ([#6834](https://github.com/nearai/ironclaw/issues/6834)) setup both broken – likely credential or lifecycle issues.  
- **Prompt content denylist hits**: Third‑party skill authors cannot describe their tools with common terms like “API key” without breaking the entire run ([#6814](https://github.com/nearai/ironclaw/issues/6814)).  
- **Automations invisible**: Users cannot see automation output without leaving the chat ([#6806](https://github.com/nearai/ironclaw/issues/6806)).  
- **Service reliability**: The `service_unavailable` spike every 30 minutes ([#6805](https://github.com/nearai/ironclaw/issues/6805)) and turn‑state store latch degradation ([#6815](https://github.com/nearai/ironclaw/issues/6815)) indicate underlying infrastructure fragility on the libSQL tier.  
- **IRonHub discoverability**: Agent reports incomplete catalog items, leading users to believe fewer extensions are available than exist ([#6821](https://github.com/nearai/ironclaw/issues/6821)).

**Satisfaction signals:**  
- Positive closure of multiple long‑standing epics (e.g., messaging profiles, tenant extension governance) suggests the team is delivering on promised UX improvements.

## Backlog Watch

**Important issues/PRs lacking maintainer response or action:**

1. [#5598](https://github.com/nearai/ironclaw/pull/5598) – **Release PR** opened July 3 (26 days) – blocks publishing of `ironclaw_common` and `ironclaw_skills` new versions. Waiting for approval/merge.  
2. [#5659](https://github.com/nearai/ironclaw/pull/5659) – **Security‑critical fix** for tool‑disclosure surface (three leak vectors) – open since July 5. Despite `risk: low` label, the PR is a production change fixing active information leaks. Needs review.  
3. [#6745](https://github.com/nearai/ironclaw/pull/6745) – **Skill usability fix** – installed and agent‑authored skills not working (two bugs). Open since July 28 but has no comments from other maintainers.  
4. [#6837](https://github.com/nearai/ironclaw/issues/6837) – Enhancement issue opened today, but likely low‑priority; still should be triaged.  
5. [#6807](https://github.com/nearai/ironclaw/issues/6807) – **Type‑level validation gap** with 92 construction sites – a hardening task that may be deferred but could be exploited.

These items represent **release blockers** (#5598), **security fixes** (#5659), and **hard usability bugs** (#6745) that should be prioritised in the upcoming days.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-29

## 1. Today's Overview
LobsterAI saw a burst of activity on July 28, with 7 pull requests updated (6 merged or closed) and 4 issues updated (all still open). No new releases were cut. The team focused on fixing Windows installer edge cases, enforcing runtime safety contracts, and shipping a new side‑chat feature (`/btw`). However, two critical bugs surfaced: a Windows‑specific shell wrapper issue (Issue #2396) and a lingering plugin ID mismatch warning (Issue #1236). Overall project momentum is strong, with rapid integration of feature and bug‑fix PRs, though stale issues (two older than 3 months) indicate areas needing sustained maintainer attention.

## 2. Releases
No new releases were published in the last 24 hours. The latest available release remains the one dated 2026‑05‑27 (referenced in Issue #2071). No migration notes or breaking changes to report.

## 3. Project Progress
Six pull requests were merged or closed today, covering multiple areas:

- **Runtime Safety & Reliability**  
  - [#2400 – fix(openclaw): enforce runtime/config safety-contract gate](https://github.com/netease-youdao/LobsterAI/pull/2400) – Prevents false‑stop token burns by validating build info and config at startup.  
  - [#2402 – fix(update): reject Windows installer redirects](https://github.com/netease-youdao/LobsterAI/pull/2402) – Improves updater robustness against untrusted redirects.

- **Windows Installer Fixes**  
  - [#2398 – fix(installer): drive Skills backup outcome from helper exit codes](https://github.com/netease-youdao/LobsterAI/pull/2398) – Corrects a misclassification of “no user skills” that caused spurious restore‑backup‑missing errors.  
  - [#2394 – Fix/windows install manual overwrite blocked](https://github.com/netease-youdao/LobsterAI/pull/2394) – Resolves a scenario where manual overwrite was blocked.

- **New Feature: Side Chat**  
  - [#2397 – feat(cowork): add isolated /btw side chat](https://github.com/netease-youdao/LobsterAI/pull/2397) – Introduces a floating, resizable side panel for assistant text, with drag‑and‑drop and eight‑direction resizing. History is isolated from the main conversation.

- **UI Polish**  
  - [#2399 – feat(renderer): hide sites nav entry outside test mode](https://github.com/netease-youdao/LobsterAI/pull/2399) – Cleans up navigation for production users.

One PR remains open: [#1233 – feat(model): add official site links and API key guidance](https://github.com/netease-youdao/LobsterAI/pull/1233) has been stale since April.

## 4. Community Hot Topics
The most active discussion this cycle centers on **skill‑related licensing and tool compatibility**:

- **[Issue #2401 – skill技能](https://github.com/netease-youdao/LobsterAI/issues/2401)**  
  *User asks whether LobsterAI’s PDF, Docs, PPTX, XLSX skills use Anthropic’s official implementation and whether those skills can be used commercially.*  
  This reflects growing community concern around third‑party skill licensing. The issue has 1 comment – a maintainer response is needed to clarify.

- **[Issue #1236 – [bug]插件 ID 不匹配警告](https://github.com/netease-youdao/LobsterAI/issues/1236)**  
  A long‑standing (stale since April) bug where the MCP‑bridge plugin entry key mismatches the manifest ID, causing repeated warnings on gateway restart. Despite being stale, it received an update yesterday, suggesting renewed interest.

- **[Issue #2396 – [Bug] exec tool default shell wrapper = Windows PowerShell 5.1](https://github.com/netease-youdao/LobsterAI/issues/2396)**  
  Opened July 28 with detailed reproduction steps. User reports that commands using special characters or Linux‑style inline scripts silently fail because the default shell is PowerShell 5.1. High visibility – no comments yet but likely to attract attention from Windows users.

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR? |
|----------|-----|--------|---------|
| **Critical** | [#2396 – exec tool default shell wrapper breaks Linux/PowerShell 7 commands on Windows](https://github.com/netease-youdao/LobsterAI/issues/2396) | Open, no comments | None yet |
| Medium | [#1236 – Plugin ID mismatch warning on every gateway restart](https://github.com/netease-youdao/LobsterAI/issues/1236) | Open, stale | No linked PR (still awaiting fix) |
| Medium | [#2071 – Scheduled task creation error (version 2026.5.27)](https://github.com/netease-youdao/LobsterAI/issues/2071) | Open, stale (no activity since May) | None |

No crashes or regressions were reported today. The critical shell wrapper bug (#2396) may affect many Windows users who rely on pwsh or Node inline scripts. No fix PR has been opened yet.

## 6. Feature Requests & Roadmap Signals
- **Side‑chat (`/btw`) is now a reality** – PR #2397 merged today, shipping an isolated floating panel. This directly addresses user requests for non‑intrusive assistant interactions.
- **Model provider linking** (PR #1233) – Adding official website and API key guidance to each provider card is on the backlog. This feature has been stalled since April but would improve onboarding.
- **Skill commercial licensing** (Issue #2401) – User demand for clear licensing terms around Anthropic‑based skills suggests that a policy or documentation update may be prioritized in the next release.

Next version (likely >2026.5.27) can be expected to include the side‑chat feature, Windows installer improvements, and possibly the runtime safety gate. The stale provider‑link PR may be revived, especially if the team sees enough community interest.

## 7. User Feedback Summary
- **Satisfaction**: The rapid merge of multiple PRs indicates responsive development. The new `/btw` feature is a clear win for power users.
- **Pain points**:
  - Windows users are frustrated by the default PowerShell 5.1 shell wrapper (#2396) – it silently fails on common scripts.
  - Plugin configuration warnings persist (#1236) and erode trust in the stability of the gateway.
  - The skill licensing ambiguity (#2401) is causing hesitation around commercial deployment.
- **Use case**: One user (Issue #2401) is evaluating whether to use LobsterAI’s document skills in a commercial product – so enterprise‑grade clarity on skills is a gap.

## 8. Backlog Watch
The following important issues/PRs have been unanswered or stale for over a month:

- **[PR #1233 – feat(model): add official site links and API key guidance](https://github.com/netease-youdao/LobsterAI/pull/1233)** – Stale since 2026-04-01. A clear user‑experience improvement; maintainer review needed.
- **[Issue #1236 – Plugin ID mismatch warning](https://github.com/netease-youdao/LobsterAI/issues/1236)** – Stale bug, but updated recently. No assignee or linked fix PR. Could benefit from a maintainer response or a timeline.
- **[Issue #2071 – Scheduled task creation error (version 2026.5.27)](https://github.com/netease-youdao/LobsterAI/issues/2071)** – No activity since May. Should be verified against current nightly builds.

Maintainers should consider triaging these items to reduce user frustration and clear the backlog.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-29

## 1. Today’s Overview
Moltis saw moderate activity over the past 24 hours, with **1 issue closed** and **8 pull requests updated** (6 open, 2 merged/closed). No new releases were published. The project remains in a high‑velocity development phase, focused on expanding ACP (Agent Communication Protocol) integration, improving Slack channel reliability, adding instrumentation infrastructure, and polishing the PWA and web UI. The closed issue (#1111) and one of the merged PRs (#1172) together resolve a reported bug where archiving cron sessions had no visible effect, reflecting prompt attention to user‑reported stability issues.

## 2. Releases
*No new releases today.*

## 3. Project Progress
Two pull requests were merged/closed in the last 24 hours, both moving the codebase forward:

- **#1172** `fix(web): hide archived cron sessions by default` (merged) – Applies the shared archived‑session preference to the Cron tab, adds a Playwright regression test, and directly addresses the root cause of the issue reported in #1111.  
  [PR #1172](https://github.com/moltis-org/moltis/pull/1172)

- **#1171** `Move ACP selection into the chat model picker` (merged) – Consolidates the UI by moving installed ACP clients into the composer model selector alongside provider‑backed models, removing the separate header selector and the redundant “Built‑in LLM agent” option. Preserves per‑session binding and reasoning control.  
  [PR #1171](https://github.com/moltis-org/moltis/pull/1171)

These merges indicate progress on both user‑experience polish and architectural simplification.

## 4. Community Hot Topics
No issues or PRs accumulated comments or reactions in the reporting period. The lack of user discussion suggests either that the project’s issues are being resolved quickly or that community engagement currently happens outside GitHub (e.g., in dedicated chat channels). The most recently updated items are all maintainer‑driven, reflecting a top‑down development rhythm.

## 5. Bugs & Stability
One bug was resolved today:

- **#1111** `[Bug]: Archiving a cron session has no visible effect` (closed) – Reported by IlyaBizyaev on 2026‑06‑06, closed after PR #1172 was merged. The fix ensures archived cron runs are hidden by default while keeping the “Show archived sessions” control available. **Severity: Low** – the bug was cosmetic and isolated to the Cron tab. No other crashes, regressions, or new bugs were reported.  
  [Issue #1111](https://github.com/moltis-org/moltis/issues/1111)

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed in the last 24 hours, the open PRs signal the features likely to appear in the next release:

- **ACP agent over stdio** (#1169) – Exposes Moltis as an ACP agent through a new `moltis acp` command, enabling protocol‑based interoperability.  
- **Instrumentation & feedback collection** (#1174) – Adds agent instrumentation with Langfuse v4 export, OTLP backends, and end‑user reaction feedback. Points to growing emphasis on observability.  
- **Reliable PWA push notifications** (#1173) – Improves multi‑tab behavior, privacy (generic titles), and non‑disruptive re‑alerts.  
- **Terminal‑Bench chat runner** (#1175) – Introduces `moltis-ctl chat` commands for headless benchmarking, suggesting a push toward evaluation tooling.  
- **Per‑message acknowledgment reactions for Slack** (#1166) – Continues enhancement of Slack integration with phased feedback and Block Kit rendering.  
- **Privileged‑command gating** (#1170) – Separates access from operator privileges with a per‑account `operators` list, improving security posture.

These features are all in open PRs; any could land in the next minor release depending on review speed.

## 7. User Feedback Summary
Direct user feedback is minimal in the tracked data. The single closed issue (#1111) reflects a pain point: a user expected archiving a cron session to immediately hide it, but the UI did not update. The fix addresses that expectation. The response (PR #1172 merged one day after the issue was last updated) shows a satisfactory resolution cycle. No other satisfaction or dissatisfaction signals are available from GitHub alone.

## 8. Backlog Watch
No issues or PRs show signs of long‑term neglect. All open PRs have been updated within the last 2–3 days, and no item has remained unanswered for an extended period. The project appears to be actively maintained with a responsive team. No items warrant special attention at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the GitHub data from CoPaw (github.com/agentscope-ai/CoPaw) for 2026-07-29, here is the project digest.

---

### CoPaw Project Digest - 2026-07-29

#### 1. Today's Overview
Project activity remains very high with 50 PRs and 18 Issues updated in the last 24 hours. The community is actively submitting and reviewing contributions, with a notable number of first-time contributors addressing critical bugs. However, the volume of newly opened bugs, particularly around installation, data persistence (agent.json, skill tags), and agent isolation, signals ongoing stability challenges. The project’s health is characterized by rapid iteration and active community patching, but several core infrastructure issues are eroding user trust and require prioritized resolution.

#### 2. Releases
- **None.** No new releases were published in the last 24 hours.

#### 3. Project Progress
Several important features and fixes have been merged or are near completion today. Key advances include:

- **Fix for Video Delivery to Models:** PR [#6495](https://github.com/agentscope-ai/QwenPaw/pull/6495) (by qbc2016) was closed, fixing a critical bug where `view_video` would return "Video loaded" but the actual video data was never sent to the model across OpenAI, Anthropic, and chat completion providers.
- **Plugin Compatibility Fixes:** Two significant PRs address plugin issues:
    - PR [#6497](https://github.com/agentscope-ai/QwenPaw/pull/6497) (by YMG001) fixes a bug in `_version_compat.py` that was silently disabling all legacy plugins on QwenPaw 2.0+.
    - PR [#6532](https://github.com/agentscope-ai/QwenPaw/pull/6532) (by XiuShenAl) temporarily disables the upper-bound version check for plugins to resolve compatibility issues with the `2.1.0b1` pre-release.
- **Mission Mode Bugfix:** PR [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) (by axelray-dev) patches CloudPaw’s mission-mode to accept the newer `verification_instructions` and `max_retries_per_story` kwargs, fixing a `TypeError` in the `/mission` command.
- **Agent File Workspace Hardening:** PR [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) (by rayrayraykk) introduces a unified project directory model and hardens file workspace across all agent session types.
- **New Feature: Desktop GUI Automation:** A new feature PR [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) (by jinglinpeng) adds a `computer_use` tool for native desktop automation on Windows and macOS using an accessibility-first approach.

#### 4. Community Hot Topics
The most active discussions revolve around agent isolation and data privacy, indicating a critical community need.

- **Agent Isolation and Data Privacy ([#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509), [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)):** These issues have the most reactions (👍 2) and significant community engagement. Users report that sub-agents can communicate and access each other’s memories, leading to severe data leaks between private and public agents. The community is demanding a "complete isolation" option. This is a high-priority roadmap signal for enterprise or multi-user deployments.
- **MCP Session Recovery Failure ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)):** Remains a hot topic with 3 comments. The inability for QwenPaw to automatically reconnect to a restarted MCP server is a significant workflow disruptor for users relying on remote tool execution.

#### 5. Bugs & Stability
The project is facing a cluster of high-severity bugs, many related to data persistence and core installation.

- **Critical – Systematic `agent.json` Corruption ([#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)):** This bug causes complete system failure on Windows due to BOM headers, missing quotes, and double-encoded text. **Fix exists in PR [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528)** by mohitdebian.
- **Critical – Windows Installer Infinite Loop ([#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534)):** The NSIS installer falsely detects QwenPaw as running, creating an infinite retry loop that makes installation on Windows impossible.
- **High – Mission Mode Unbounded Loop ([#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505)):** Mission mode can spawn worker sub-sessions without a server-side cap, only stopping when the user’s LLM account runs out of credit. This is a potential cost-explosion vector.
- **High – Skill Tags Disappear on Restart ([#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)):** Regression of a previous fix (#3270). Tags are saved via API but lost on startup, indicating a flaw in the manifest reconciliation process.
- **Medium – ACP `models` Field Missing ([#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529)):** External clients cannot discover available models, breaking integration with external tools like Multica or OpenCode. **Fix exists in PR [#6531](https://github.com/agentscope-ai/QwenPaw/pull/6531)** by niuda-kok.
- **Medium – Session Approval Level Not Inherited ([#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506)):** Disabling tool approval for a parent session is not passed to sub-agents spawned by `spawn_subagent`, leading to unexpected approval prompts.
- **Low – Video Data Dropped ([#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474)):** A previously critical bug where video is silently dropped. **Fix was merged in PR [#6495](https://github.com/agentscope-ai/QwenPaw/pull/6495).**

#### 6. Feature Requests & Roadmap Signals
The community is strongly signaling a need for two major architectural features:

1.  **Robust Agent Isolation ([#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509), [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)):** This is the most requested feature. The underlying need is for a secure multi-agent/multi-tenant system. This is likely being prioritized for the next major version.
2.  **Streaming / File-based Shell Output ([#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512), [#6513](https://github.com/agentscope-ai/QwenPaw/issues/6513), [#6514](https://github.com/agentscope-ai/QwenPaw/issues/6514)):** Users needing to run long scripts are being hit by a hard ~30KB output truncation limit. The community is requesting automatic output to a file or a streaming read mechanism. This is a practical blocker for data analysis or code review use cases.

**Predictions for Next Version:** The prevalence of bugs reported in this snapshot, along with the fix PRs that have been created, suggests the next release (likely 2.0.2 or 2.1.0b2) will focus on stability and data integrity. It is highly likely to include fixes for: MCP session recovery, agent isolation, Windows installer, `agent.json` corruption, and skill tag persistence.

#### 7. User Feedback Summary
- **Pain Points:** The primary user-reported pain points are **data integrity** (`agent.json` corruption, skill tag loss), **installation failures** (Windows installer bug), and **a lack of data privacy controls** (agent memory leaks). The MCP reconnection issue is a major blocker for advanced users running remote servers.
- **Use Cases:** The community is actively using CoPaw for complex, multi-agent workflows (Mission Mode for stock analysis, remote tool serving via MCP) and multi-user deployments (e.g., one agent for personal assistant, another for a group chat).
- **Satisfaction/Dissatisfaction:** The high number of bug reports and feature requests suggests an engaged but frustrated user base. Users are pushing the project to its limits and encountering fundamental issues. The rapid creation of fix PRs by the community indicates a "helping to fix it ourselves" attitude, which is a strong positive signal for the project’s ecosystem health.

#### 8. Backlog Watch
The following items appear to be important but have not received a maintainer response or have remained open for over a week with no clear path to resolution:

- **PR [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) "refactor(tool_calls): background tool call offload mechanism"**: An open PR since July 15th addressing three bugs from a related issue. It is a significant refactor that needs review and is currently blocking a potential stability improvement.
- **Issue [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403) "Add RobotFramework syntax highlighting"**: A feature request from July 23rd with a PR that has been closed, but no official feature has been announced. It remains in a "waiting" state.
- **PR [#6267](https://github.com/agentscope-ai/QwenPaw/pull/6267) "fix(scroll): retry once after context overflow"**: Opened on July 20th, this is a critical fix for reliability during context overflow events. The PR has been actively updated but not yet merged, suggesting it may be complex.
- **PR [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) "feat(checkpoints): add workspace checkpoint management"**: A substantial feature from July 20th that adds recoverable conversation history. This is a high-value feature that may require significant architectural review before merging.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest – 2026-07-29

## Today’s Overview
ZeptoClaw is currently in a low-activity phase, with no issues opened or updated in the last 24 hours and no new releases. Two pull requests were updated, both from Dependabot, focusing on incremental Rust base image upgrades for the Docker environment. One of these PRs (#613) was merged on 2026-07-28, and the other (#649) remains open. The project appears stable but is not seeing significant feature development or community engagement at this time.

## Releases
**No new releases.** The latest release information is not available from the provided data. There are no version changes, breaking changes, or migration notes to report.

## Project Progress
- **Merged/Closed PR (last 24h):**  
  - **#613** – `chore(deps): bump rust from 1.95-slim-trixie to 1.96-slim-trixie`  
    *Author:* dependabot[bot] – *Merged/Closed*  
    This dependency update moves the Rust base image forward one minor version. No functional changes to the ZeptoClaw codebase were introduced.  
    [View PR #613](https://github.com/qhkm/zeptoclaw/pull/613)

- **Open PR (updated today):**  
  - **#649** – `chore(deps): bump rust from 1.95-slim-trixie to 1.97-slim-trixie`  
    *Author:* dependabot[bot] – *Open*  
    Another incremental Docker image bump, targeting Rust 1.97. The previous bump (#613) was still on 1.96, so this PR appears to skip an intermediate version. It is awaiting review and merge.  
    [View PR #649](https://github.com/qhkm/zeptoclaw/pull/649)

No other feature development or bug fixes were observed today.

## Community Hot Topics
There are no issues or pull requests with comments or reactions in the provided data. The two active PRs are automated dependency bumps with no discussion. Community engagement is currently negligible; underlying needs cannot be inferred from silence.

## Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. Project stability appears to be maintained, though the lack of active issues may also indicate minimal usage or testing.

## Feature Requests & Roadmap Signals
No feature requests were recorded in the provided data. Without community input, it is difficult to predict upcoming features. The project continues to focus on routine dependency maintenance rather than new functionality.

## User Feedback Summary
No user feedback, pain points, or satisfaction signals were captured. The absence of issues and comments suggests either a very stable project or low user engagement. No conclusions can be drawn from the available data.

## Backlog Watch
- **Open PR #649** (bump rust to 1.97) has been open for only one day (created 2026-07-28) and does not yet require urgent attention.  
- No long‑standing unanswered issues or PRs are present in the data. The project’s backlog appears clean.

*Note: All links are based on the repository `github.com/qhkm/zeptoclaw`.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-29

## Today's Overview

ZeroClaw remains in a high-activity cycle with **49 issues** and **50 pull requests** updated in the last 24 hours. The project is processing a surge of RFC-driven architecture changes and bug fixes, with 7 issues closed and 5 PRs merged/closed today. The open issue count is elevated (42 open/active issues, 45 open PRs), indicating heavy churn around security, runtime stability, and channel improvements. A critical CI test failure that poisoned global state (#9357) was closed today, but several high-severity bugs (e.g., #9284, #9492, #9486) remain in-flight. The roadmap is shifting toward runtime plugin architecture and unified session ownership, as reflected in multiple RFCs.

## Releases

No new releases were published today.

## Project Progress

**Merged/Closed PRs (5 total):** While specific PR numbers are not listed, the following closed issues indicate that related PRs were merged:

- **#9357** (CLOSED) – `cargo test -p zeroclaw-runtime --lib` flaky failure and poisoned mutex was fixed.  
- **#9474** (CLOSED) – Auth profile store failing due to missing `model_provider` migration was resolved.  
- **#9471** (CLOSED) – Dormant cron test module in zeroclaw-runtime was retired.  
- **#9380** (CLOSED) – Vendored wit/v0 drift detection was improved.  
- **#9178** (CLOSED) – ACP embedded resource blob + `deliver_file` feature was completed.

**Features advanced via open PRs:**  
- Slack channel lifecycle progress (#8985) and thread context hydration (#8969) are under active development.  
- MCP stdio multiplexing (#9418) and tool/approval localization (#9517) are in review.  
- Config serialization fix (#9519) and skills `always-inject` restoration (#9520) were proposed today.

## Community Hot Topics

The following issues and PRs attracted the most discussion:

- **#9127** [OPEN] *RFC: Abstract a `KeySource` trait — classify master-key material by source / deployment form* (8 comments)  
  [Link](zeroclaw-labs/zeroclaw Issue #9127) — Underlying need: standardize secret sourcing across on-prem and cloud deployments, currently lacking a unified key material interface.

- **#6157** [OPEN] *[Bug]: Nextcloud Talk use correct bot message API* (6 comments)  
  [Link](zeroclaw-labs/zeroclaw Issue #6157) — Persistent issue with wrong API endpoint; a fix PR (#9181) is open.

- **#9357** [CLOSED] *cargo test flakiness and global mutex poison* (6 comments)  
  [Link](zeroclaw-labs/zeroclaw Issue #9357) — Community relief after a long-standing CI headache was resolved.

- **#8654** [OPEN] *skill-review fork panic (out-of-range slice) → daemon SIGSEGV* (5 comments)  
  [Link](zeroclaw-labs/zeroclaw Issue #8654) — High-risk crash after tool-heavy turns, still in progress.

- **#9397** [OPEN] *RFC: Treat empty WhatsApp Web allowed_groups as permit-none* (3 comments)  
  [Link](zeroclaw-labs/zeroclaw Issue #9397) — Security-sensitive design decision to close a default-permit vulnerability.

## Bugs & Stability

**High Severity (S1/S2):**  
- **#9492** [OPEN] *`auth refresh` dead-ends when external client rotated shared OpenAI-Codex refresh token* (S1 - workflow blocked) — No known fix PR yet.  
  [Link](zeroclaw-labs/zeroclaw Issue #9492)  
- **#9284** [OPEN] *config flush can overwrite concurrent writes* (S2 - degraded behavior) — Fix PR #9519 submitted today.  
  [Link](zeroclaw-labs/zeroclaw Issue #9284)  
- **#9332** [OPEN] *multimodal context meter severely undercounts image-heavy requests* (S2 - major workflow degradation) — Still in accepted state.  
  [Link](zeroclaw-labs/zeroclaw Issue #9332)  
- **#8654** [OPEN] *skill-review fork panic* (S2 - degrades to SIGSEGV) — In progress.  
  [Link](zeroclaw-labs/zeroclaw Issue #8654)  
- **#9486** [OPEN] *High-entropy detector redacts Solana wallet addresses even with high_entropy_tokens=false on channel path* (S2) — Needs investigation.  
  [Link](zeroclaw-labs/zeroclaw Issue #9486)  
- **#9465** [OPEN] *inbound channel message precheck declined produces only reaction, no text* (S2) — In progress.  
  [Link](zeroclaw-labs/zeroclaw Issue #9465)  

**Medium Severity:**  
- **#6724** [OPEN] *Enabled Signal/Voice Call channel with empty credentials crashloops supervisor* — Fix PR #9524 opened today.  
  [Link](zeroclaw-labs/zeroclaw Issue #6724)  
- **#9383** [OPEN] *npm audit failed — 6 high/critical findings* — Dependencies, no fix PR yet.  
  [Link](zeroclaw-labs/zeroclaw Issue #9383)  

**New Today (2026-07-29):**  
- **#9521** [OPEN] *Map MCP tools/call type:image content blocks into vision pipeline* — Feature request, not a bug.  
  [Link](zeroclaw-labs/zeroclaw Issue #9521)

## Feature Requests & Roadmap Signals

Several RFCs and enhancement issues indicate major architectural directions:

- **RFC #9487** — Runtime-owned conversation sessions and transport surface adapters (`needs-author-action`)  
  [Link](zeroclaw-labs/zeroclaw Issue #9487) — Would centralize session lifecycle and decouple transports.
- **RFC #9488** — Unified attachment architecture for web chat and channels (`needs-author-action`)  
  [Link](zeroclaw-labs/zeroclaw Issue #9488) — Single attachment model across all interfaces.
- **RFC #9323** — Define execution-tree iteration budget ownership (`needs-maintainer-review`)  
  [Link](zeroclaw-labs/zeroclaw Issue #9323) — Bounds agentic delegation loops.
- **RFC #8850** (tracker) — Move optional channels/tools from compile-time feature flags to runtime WASM plugins (`in-progress`)  
  [Link](zeroclaw-labs/zeroclaw Issue #8850) — Shrinks binary size, enables plugin ecosystem.
- **RFC #9464** — Anthropic stored-profile OAuth alias contract (`needs-maintainer-review`)  
  [Link](zeroclaw-labs/zeroclaw Issue #9464) — Standardizes OAuth for Anthropic provider.
- **#9521** [OPEN] — Map MCP image content blocks into vision pipeline  
  [Link](zeroclaw-labs/zeroclaw Issue #9521) — Enhances multimodal support.

**Predictions for next release:** The `always-inject` skill frontmatter fix (#9520) and config flush serialization (#9519) are likely candidates. The ACP embedded resource blob (#9178) was already closed, so that feature should ship. The Slack progress and thread hydration PRs (#8985, #8969) are near-complete.

## User Feedback Summary

Real user pain points captured in today's issues:

- **Empty credential crashloops** (#6724): Users report that enabling Signal/Voice Call channels without credentials causes infinite restart loops — a usability blocker.
- **High-entropy token redaction on Solana addresses** (#9486): Telegram users cannot receive wallet addresses even after disabling the filter, breaking cryptocurrency use cases.
- **Auth profile migration failure** (#9474, now fixed): Users upgrading from older releases were locked out of `zeroclaw auth` commands — a workflow-blocking regression.
- **Channel precheck silent rejection** (#9465): Telegram senders see only an emoji reaction with no explanation when a reply is declined, leading to confusion.
- **Context meter undercount** (#9332): Image-heavy requests cause context overrun and silent trimming — developers using multimodal providers are frustrated.
- **Empty WhatsApp allowed_groups default** (#9397): Current behavior admits all groups by default, a security concern for enterprise users.

Overall, users are pushing for stronger security defaults, better error messaging, and smoother migration paths.

## Backlog Watch

Items requiring maintainer attention (labeled `needs-maintainer-review` or stale with no progress):

- **#9127** — RFC: KeySource trait (8 comments, no maintainer decision yet).  
  [Link](zeroclaw-labs/zeroclaw Issue #9127)  
- **#9397** — RFC: empty WhatsApp allowed_groups permit-none (3 comments, needs review).  
  [Link](zeroclaw-labs/zeroclaw Issue #9397)  
- **#9464** — RFC: Anthropic OAuth alias contract (2 comments, needs review).  
  [Link](zeroclaw-labs/zeroclaw Issue #9464)  
- **#9323** — RFC: execution-tree iteration budget ownership (2 comments, needs review).  
  [Link](zeroclaw-labs/zeroclaw Issue #9323)  

**PRs with unmeted `needs-author-action` (may stall without maintainer nudging):**  
- **#9424** (fix(runtime): reject semantic-empty terminal completions) — Critical for Reliable fallback, needs author action.  
- **#9453** (fix(runtime): estimate context usage when provider omits token counts) — Local provider users need this.  
- **#8985** (feat(slack): lifecycle progress) — Long-running, size XL, needs author action.  
- **#8969** (feat(slack): thread context hydration) — Also size XL, needs author action.  
- **#9418** (fix(mcp): multiplex stdio calls) — High-priority MCP fix, needs author action.  

The maintainer decision queue tracker (#8692) lists 1 comment and is still active — it may help triage these items.  
[Link](zeroclaw-labs/zeroclaw Issue #8692)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*