# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-29 00:27 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-06-29

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is characterized by rapid iteration alongside significant reliability challenges. All major tools — Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale) — show sustained community activity but are grappling with core stability issues including rate-limit accounting bugs, session lifecycle management failures, and cross-platform fragmentation. A clear divergence is emerging between established tools focused on enterprise reliability (Claude Code, Codex) and newer entrants prioritizing feature velocity (CodeWhale, Pi, OpenCode). The ecosystem is increasingly converging on shared pain points: agent behavior predictability, provider authentication fragility, and the need for configurable model routing. Community sentiment suggests users are actively comparing tools on cost transparency and session auditability, with several tools facing trust erosion due to silent token leaks and billing ambiguities.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Active PRs (24h) | Releases (24h) | Community Engagement Signal |
|---|---|---|---|---|
| **Claude Code** | 10 updated | 5 new | None | 18 👍 on single feature request; 50+ active issues |
| **OpenAI Codex** | 10 updated | 10 active | 1 alpha (rust-v0.143.0) | 337 👍 on rate-limit bug; 403 👍 on SQLite issue |
| **Gemini CLI** | 10 updated | 10 active | 1 nightly (security patch) | P1 bugs with low engagement; 8 👍 max |
| **Copilot CLI** | 7 updated | 1 (spurious) | None | Low engagement; 0 👍 on most issues |
| **Kimi Code** | 2 updated | None | None | Stalled — only 2 issues active |
| **OpenCode** | 10+ updated | 10 active | None | 186 👍 on Cursor support; 50+ comments on clipboard |
| **Pi** | 10 updated | 10 merged/updated | None | 72 comments on Codex reliability; 30 👍 |
| **Qwen Code** | 10 updated | 10 active | 1 patch (v0.19.3) | High concern on zombie session (28 implied 👍) |
| **DeepSeek TUI (CodeWhale)** | 10 selected | 10 merged | None | 20 issues + 32 PRs updated; rapid cleanup activity |

**Key observations:**
- **Codex** leads in community engagement volume (337 👍, 403 👍).
- **CodeWhale** leads in raw PR throughput (32 updated in 24h).
- **Kimi Code** shows the least activity — potential stagnation risk.
- **Copilot CLI** has the lowest community engagement per issue.

---

## 3. Shared Feature Directions

Requirements appearing across **3+ tools**:

### Session Lifecycle Management
- **Claude Code, CodeWhale, Pi, Qwen Code**: Compaction/cache behavior control, session visibility after upgrades, zombie session detection
- **Copilot CLI, Qwen Code**: Session organization (tags, status badges, searchability)
- **OpenCode, Qwen Code**: Auto-compaction loops hang the tool

### Provider/Model Flexibility
- **Claude Code, Pi, CodeWhale, Kimi Code**: Custom endpoints, multiple inference providers, model switching
- **Qwen Code, CodeWhale**: Configurable compaction model (cheaper model for summarization)
- **OpenCode, Pi**: GitHub Copilot provider integration issues

### Cross-Platform Parity
- **Claude Code, Copilot CLI, Pi, CodeWhale**: Windows-specific path bugs (missing backslashes, drive root corruption, PID checking)
- **Gemini CLI, Pi**: macOS bash compatibility (Apple's Bash 3.2)
- **CodeWhale, Qwen Code**: IME/Unicode rendering issues (Hindi, Chinese)

### Agent Behavior Reliability
- **Claude Code, Gemini CLI, CodeWhale, OpenCode**: Ambiguous identifier resolution, mode confusion (Plan vs Agent), safety boundary violations
- **Codex, Qwen Code**: Token budget/rate-limit accounting bugs
- **Pi, CodeWhale**: Compaction continuation guards, silent hangs

### Security/Trust
- **Claude Code, Gemini CLI, CodeWhale**: False-positive safety blocks, SSRF bypass, trust dialog inversion
- **OpenCode, CodeWhale**: Safety floor bypass, destructive operation guardrails
- **Gemini CLI, OpenCode**: Data leakage via auto-memory features

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|---|---|---|---|---|---|---|---|---|
| **Primary Focus** | Enterprise reliability, plugin ecosystem | Token/rate-limit transparency | Multi-agent orchestration | Session organization, workspace parity | Multi-provider flexibility | TUI/UX polish, provider extensibility | Session durability, local LLM support | Mode system, provider expansion |
| **Target User** | Security researchers, enterprise developers | Power users tracking costs | Linux developers, multi-agent workflows | Enterprise GitHub users | Cursor/Copilot switchers | TUI power users | Chinese/global developers, LLM enthusiasts | DeepSeek ecosystem users |
| **Technical Approach** | Heavy plugin/API surface | Rust backend, server-side logic | Multi-agent architecture (subagents) | VS Code companion, SDK headless | Electron desktop + CLI | Rust TUI, fuzzy search | Node.js daemon, Web Shell | Rust TUI, Cedar policy |
| **Differentiator** | MCP gating, hook system | Rate-limit reset visibility | A2A server, browser subagent | Repository-backed sessions | In-app browser, manual compaction | Context Matrix, RPC commands | Loop task files, voice dictation | Provider picker, YOLO mode |
| **Biggest Pain Point** | Cybersecurity false positives halting sessions | Budget draining 10-20x faster | Generalist agent hangs indefinitely | Session.create fails behind proxies | Clipboard broken on Windows/Linux | Codex connection reliability | Zombie sessions burning tokens | Mode system confusion |

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, Active Community)
- **CodeWhale** (DeepSeek TUI): 32 PRs updated in 24h, active cleanup of rebranding artifacts. Most rapid iteration, but also highest bug volume.
- **OpenCode**: 50+ issues/PRs updated. High engagement (186 👍 on Cursor request). Strong community-driven feature development.
- **Pi**: 10 PRs merged/updated, sustained discussion on core issues. Growing provider ecosystem.

### Mature but Stretched
- **Claude Code**: Established plugin ecosystem, but accumulating unresolved bugs (rate-limit issue open 3+ months). Community confident but frustrated.
- **OpenAI Codex**: Most upvoted issues (337 👍, 403 👍). High trust but rate-limit bugs eroding confidence. Server-side fixes needed.
- **Gemini CLI**: Google-backed, but issues have low community engagement (8 👍 max). P1 bugs unaddressed. May indicate smaller user base or less vocal community.

### Low Momentum / Stagnation Risk
- **Kimi Code**: Only 2 issues updated in 24h. No releases. Bugs from Jan/Mar 2026 unresolved. Community patience likely wearing thin.
- **Copilot CLI**: Lowest engagement across all metrics. Spurious PR (#3968). Enterprise proxy issue untouched for 63 days. Microsoft/GitHub backing but minimal community investment.

### Platform-Specific Observations
- **Windows**: Consistently worse experience across all tools (path bugs, sandbox failures, IME issues).
- **Linux**: Wayland compatibility gaps (Gemini CLI), shell compatibility issues (Pi).
- **macOS**: Generally best-supported, but bash version constraints noted.

---

## 6. Trend Signals

### Strong Signals (Appearing Across 4+ Tools)

1. **Token/Usage Transparency Crisis**: Users are demanding real-time visibility into consumption, rate-limit accounting, and billing. Multiple tools face trust erosion from silent token leaks (Codex, Qwen Code, Gemini CLI). **Implication**: Tools without audit trails risk user abandonment.

2. **Multi-Provider Flexibility as Table Stakes**: Users expect to switch between OpenAI, Anthropic, DeepSeek, and local models seamlessly. Tools hardcoded to single providers (Copilot CLI) or with fragile provider adapters (Kimi Code, OpenCode) are losing relevance.

3. **Session Lifecycle Gaps**: Zombie sessions, broken compaction, lost state after upgrades — these are universal pain points. **Implication**: Session durability is becoming a competitive differentiator. Qwen Code's loop task files and OpenCode's manual compaction are positive signals.

4. **Cross-Platform Parity Failure**: Windows and Linux users consistently report worse experiences. **Implication**: Tools targeting enterprise adoption (Claude Code, Codex) must invest in platform-specific QA. WSL2 is not a sufficient solution.

### Emerging Signals (Appearing Across 2-3 Tools)

5. **Mode-Based Safety Systems Maturation**: CodeWhale, OpenCode, and Claude Code all have Plan/Agent/Auto mode systems — but all report mode confusion bugs. **Implication**: The industry hasn't solved permission granularity. Cedar policy (Claude Code) and safety floors (CodeWhale) are early attempts.

6. **On-Device/Edge Model Integration**: Kimi Code, Qwen Code, and Pi show interest in local LLM support. **Implication**: Cost-conscious users are pushing for local fallback. Rust-based launchers for resource isolation (Qwen Code) signal infrastructure maturity.

7. **Voice Dictation as UX Differentiator**: Qwen Code and Pi both added voice features. **Implication**: Multimodal input is moving from novelty to expected capability for CLI tools.

8. **Plugin/Marketplace Ecosystem Competition**: Claude Code leads with MCP gating and handover plugins. OpenCode has project skills. CodeWhale has provider picker. **Implication**: Extensibility is becoming a battleground — but plugin update/reload workflows are still broken (Claude Code #72162).

### Warning Signals

9. **Enterprise Adoption Blockers**: Corporate proxy support (Copilot CLI #2978), OAuth certificate fragility (Claude Code #71766), and SSRF vulnerabilities (Gemini CLI #27744) suggest enterprise readiness is still immature across the ecosystem.

10. **Community Fatigue**: Kimi Code's stalled issues and Copilot CLI's low engagement suggest users may be migrating to more active tools. **Implication**: 2026 Q3 may see consolidation around 3-4 dominant tools.

---

**Bottom Line:** The ecosystem is healthy but fragmented. No single tool has solved the core tension between feature velocity and reliability. For technical decision-makers, the immediate recommendation is to evaluate tools based on platform support (macOS vs Windows), provider flexibility, and session auditability — as these remain the weakest links across the entire landscape.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the anthropics/skills repository, based on activity as of June 29, 2026.

---

## 1. Top Skills Ranking

The most-discussed pull requests reveal that the community is currently obsessed with fixing the skill evaluation pipeline over building new features, with document manipulation running a close second.

1.  **`fix(skill-creator): run_eval.py always reports 0% recall`**
    - **Functionality:** Fixes the core evaluation loop used to optimize skill descriptions. The script was returning a 0% recall rate for all queries, rendering the automated description improvement process useless.
    - **Discussion Highlights:** Linked to the critical Issue #556, with over 10 independent reproductions. The discussion focuses on the root cause: the script not properly detecting the skill trigger in subprocess output.
    - **Status:** Open | `#1298`
    - *Link:* `https://github.com/anthropics/skills/pull/1298`

2.  **`fix(skill-creator): run_eval trigger detection misses real skill name`**
    - **Functionality:** A second attack on the same `run_eval.py` bug. This fix identifies that the trigger detection fails to match the real skill name and bails out on the first non-skill tool encountered.
    - **Discussion Highlights:** Complements PR #1298 by addressing a different symptom of the same underlying evaluation script failure.
    - **Status:** Open | `#1323`
    - *Link:* `https://github.com/anthropics/skills/pull/1323`

3.  **`Add document-typography skill`**
    - **Functionality:** A skill for typographic refinement (orphan/widow control, numbering alignment) in generated documents.
    - **Discussion Highlights:** Moderate discussion around its utility; a niche but highly practical fix for a common annoyance in AI-generated text.
    - **Status:** Open | `#514`
    - *Link:* `https://github.com/anthropics/skills/pull/514`

4.  **`fix(pdf): correct case-sensitive file references in SKILL.md`**
    - **Functionality:** Fixes 8 file reference mismatches in the PDF skill that break on case-sensitive file systems.
    - **Discussion Highlights:** Low drama but high impact; represents a general community concern for cross-platform compatibility (Linux/macOS vs. Windows).
    - **Status:** Open | `#538`
    - *Link:* `https://github.com/anthropics/skills/pull/538`

5.  **`Add ODT skill — OpenDocument text creation and template filling`**
    - **Functionality:** A full skill for creating, filling, and reading OpenDocument Format (.odt, .ods) files.
    - **Discussion Highlights:** Requests for LibreOffice/OpenOffice interoperability are ongoing. The PR is awaiting review.
    - **Status:** Open | `#486`
    - *Link:* `https://github.com/anthropics/skills/pull/486`

6.  **`fix(docx): prevent tracked change w:id collision with existing bookmarks`**
    - **Functionality:** Prevents document corruption by fixing ID collisions in OOXML tracked changes.
    - **Discussion Highlights:** Shows deep community expertise in the OOXML specification; a critical fix for users who rely on round-tripping documents.
    - **Status:** Open | `#541`
    - *Link:* `https://github.com/anthropics/skills/pull/541`

7.  **`fix(skill-creator): warn on unquoted description with YAML special characters`**
    - **Functionality:** Adds a pre-parse validation for YAML frontmatter to prevent silent parsing failures.
    - **Discussion Highlights:** This is a recurring theme (see also #361, #539). The community is frustrated by fragility in the skill metadata parsing.
    - **Status:** Open | `#539`
    *Link:* `https://github.com/anthropics/skills/pull/539`

8.  **`Improve frontend-design skill clarity and actionability`**
    - **Functionality:** A complete rewrite of the `frontend-design` skill to make instructions more concrete and executable for Claude.
    - **Discussion Highlights:** Represents a "quality of life" trend—improving *existing* skills rather than creating new ones.
    - **Status:** Open | `#210`
    - *Link:* `https://github.com/anthropics/skills/pull/210`

## 2. Community Demand Trends

The Issues section reveals three primary demand vectors:

- **Ecosystem & Infrastructure Stability (High Demand):** The single most-discussed issue is **Security: Community skills distributed under `anthropic/` namespace** (#492, 27 comments). Users are alarmed by the potential for trust-boundary abuse when unofficial skills appear official. The second most-discussed issue is **Org-wide skill sharing** (#228, 14 comments), indicating enterprise users want a centralized distribution mechanism. The third is the cluster around the **`run_eval.py` bug** (#556, 12 comments; #1169, 3 comments; #1061, 3 comments), which shows the community is blocked on optimizing skills until the tooling is fixed.

- **Cross-Platform Compatibility (Consistent Demand):** Issues like **Windows compatibility** (#1061) consistently draw comments. The community needs the skill-creator toolchain to work reliably on Windows, not just macOS/Linux.

- **New Skill Directions (Moderate Demand):** While not as commented as the infrastructure issues, users are proposing specific skills:
    - **Agent Governance** (#412): Safety patterns for AI agent systems (trust scoring, audit trails).
    - **Compact Memory** (#1329): A symbolic notation for efficient agent state management.
    - **SharePoint Integration** (#1175): Concerns about security and context window management when accessing enterprise document stores.

**Key Finding:** The community is currently more focused on *reliability* and *safety* of the skill ecosystem than on *volume* of new skills.

## 3. High-Potential Pending Skills

These active PRs have significant community discussion and are likely to merge soon:

- **`skill-quality-analyzer` and `skill-security-analyzer`** (#83): Meta-skills for analyzing other skills. High demand due to the security namespace concerns.
    - *Link:* `https://github.com/anthropics/skills/pull/83`
- **`testing-patterns`** (#723): Covers the full testing stack (unit, integration, React). Addresses a clear gap in the official collection.
    - *Link:* `https://github.com/anthropics/skills/pull/723`
- **`AppDeploy`** (#360): Enables full-stack web app deployment from Claude. A practical, high-value automation skill.
    - *Link:* `https://github.com/anthropics/skills/pull/360`
- **`shodh-memory`** (#154): Persistent context for AI agents across conversations.
    - *Link:* `https://github.com/anthropics/skills/pull/154`

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not for *more* skills, but for **reliable, secure, and cross-platform infrastructure** for the skill creation and evaluation pipeline, specifically fixing the `run_eval.py` tooling and addressing the namespace trust boundary vulnerability.

---

# Claude Code Community Digest
**Date:** 2026-06-29

---

## Today's Highlights

No new releases landed today, but the repository shows sustained community momentum with over 50 active issues and 5 new pull requests. The most significant developments include a fresh wave of **cybersecurity false-positive reports** halting legitimate reverse-engineering work, granular **mouse control** feature requests gaining traction (18 👍 in 4 days), and new community-contributed plugins for **LLM-to-LLM handoffs** and **policy-enforced MCP gating**.

---

## Releases

No new releases in the last 24 hours. Latest continues to be **v2.1.195**.

---

## Hot Issues

### 1. Rate Limit on `/usage` Command
- **#32503** — [OPEN] `/usage` command fails with `rate_limit_error` when checking usage data
- **Why it matters:** This is a core UX failure — users cannot audit their own consumption. 9 comments, 13 upvotes. Opened since March, still unresolved after 3+ months.
- **Link:** [Issue #32503](https://github.com/anthropics/claude-code/issues/32503)

### 2. Granular Mouse Control Request (High Demand)
- **#70672** — [OPEN] Add granular mouse control options to disable click-selection while preserving scroll
- **Why it matters:** New click-to-select menus are disruptive for power users. 18 👍 in 4 days — the highest community engagement in this digest. Strong signal for TUI UX polish.
- **Link:** [Issue #70672](https://github.com/anthropics/claude-code/issues/70672)

### 3. Cybersecurity False Positives Halting Legitimate Work
- **#72163** — [OPEN] Safety block interrupts APK unpacking/DEX decryption key analysis mid-session
- **#72164** — [OPEN] Safety block on AES/RC4 key analysis for unpacking protected Android DEX binary
- **#72168** — [OPEN] False positive security flag for local telnet connection
- **Why it matters:** Multiple reports in 24 hours of session-halted false positives for cybersecurity researchers. Reproducible server-side blocks with no bypass. Significant productivity impact for security professionals using Claude Code.
- **Link:** [Issue #72163](https://github.com/anthropics/claude-code/issues/72163), [#72164](https://github.com/anthropics/claude-code/issues/72164), [#72168](https://github.com/anthropics/claude-code/issues/72168)

### 4. Claude-API Skill Blows Up Session (184k Tokens)
- **#72166** — [CLOSED] claude-api skill injects entire multi-language reference (~184k tokens) in one message
- **Why it matters:** Critical UX bug — invoking a bundled skill can instantly consume 184k tokens, making session unrecoverable. `/compact` cannot even run. Patched quickly (closed), but highlights systemic risk in skill bundle design.
- **Link:** [Issue #72166](https://github.com/anthropics/claude-code/issues/72166)

### 5. OAuth Certificate Chain Failure (Regression)
- **#71766** — [OPEN] OAuth login/refresh fails with `UNABLE_TO_GET_ISSUER_CERT` on new Let's Encrypt chain (ISRG Root X2)
- **Why it matters:** Blocks authentication on Windows and Linux after platform.claude.com certificate rotation. 1 comment but high severity — users cannot log in at all.
- **Link:** [Issue #71766](https://github.com/anthropics/claude-code/issues/71766)

### 6. Tool-Call Markup Leakage After Large Context
- **#71812** — [OPEN] Tool-call markup (`<invoke>`) leaks into assistant text after large context accumulation
- **Why it matters:** After extended sessions (several hours, large context), the model stops executing tool calls and instead prints raw markup. Core model-context integrity issue, especially for Opus 4.8 users with 1M context.
- **Link:** [Issue #71812](https://github.com/anthropics/claude-code/issues/71812)

### 7. WSL2 JetBrains Lockfile Rejected
- **#72129** — [OPEN] `/ide` rejects valid JetBrains lockfile from WSL2 — `ps -p` can't see Windows PID
- **Why it matters:** Cross-platform IDE integration broken for WSL2 users. `ps -p` cannot see Windows PIDs, so live IDEs are treated as orphaned. Blocks WSL2-based development workflows.
- **Link:** [Issue #72129](https://github.com/anthropics/claude-code/issues/72129)

### 8. Background Tasks UI Race Condition
- **#72165** — [OPEN] Background Tasks panel: list reflow on new task arrival redirects "Clear" click onto "Stop" button
- **Why it matters:** Dangerous UI race condition — clicking "Clear" on a finished task can accidentally stop a running task when the list reflows mid-click. UX safety issue.
- **Link:** [Issue #72165](https://github.com/anthropics/claude-code/issues/72165)

### 9. Plugin Marketplace Update Not Refreshing
- **#72162** — [OPEN] `/plugin marketplace update` + `/reload-plugins` does not pick up pushed plugin changes
- **Why it matters:** Plugin developers cannot effectively iterate — the update/pull cycle is broken. Blocks plugin development and testing workflows.
- **Link:** [Issue #72162](https://github.com/anthropics/claude-code/issues/72162)

### 10. Agent Ambiguity Resolution by Context Bias
- **#72170** — [OPEN] Agent resolves ambiguous identifier by recent-context bias instead of literal exact match
- **Why it matters:** The model silently executes actions on the wrong target when two identifiers exist, choosing by conversation recency rather than exact match. Dangerous for CI/CD or production operations.
- **Link:** [Issue #72170](https://github.com/anthropics/claude-code/issues/72170)

---

## Key PR Progress

### 1. Open Source Claude Code (Community-Driven)
- **#41447** — [OPEN] `feat: open source claude code ✨`
- **What it does:** Proposes to open-source the Claude Code repository (closes #59, #456, #2846, #22002). Community-driven effort, still open after 3 months.
- **Link:** [PR #41447](https://github.com/anthropics/claude-code/pull/41447)

### 2. Handover Plugin — LLM-to-LLM Context Export
- **#72037** — [OPEN] Add handover plugin: export session context for LLM-to-LLM handoffs
- **What it does:** New `/handover` plugin exports current session context as structured Markdown — ready for pasting into another Claude session or different LLM. Facilitates multi-model workflows.
- **Link:** [PR #72037](https://github.com/anthropics/claude-code/pull/72037)

### 3. Protect-MCP Plugin — Policy Gating + Signed Receipts
- **#72014** — [OPEN] Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts
- **What it does:** PreToolUse gate that **blocks** policy-violating MCP tool calls and cryptographically signs offline-verifiable receipts. Goes beyond warnings to enforcement. Built around Cedar policy language.
- **Link:** [PR #72014](https://github.com/anthropics/claude-code/pull/72014)

### 4. Fix Hookify Event Filtering
- **#62315** — [CLOSED] Fix hookify event filtering in pre/post hooks
- **What it does:** Fixes event filtering logic in pre/post execution hooks. Closed after ~1 month, likely merged.
- **Link:** [PR #62315](https://github.com/anthropics/claude-code/pull/62315)

### 5. Plugin Install Docs Update
- **#72000** — [OPEN] docs: update plugin install instructions to recommended installers
- **What it does:** Updates documentation to reflect current best practices for plugin installation. Low risk, quality-of-life improvement for the plugin ecosystem.
- **Link:** [PR #72000](https://github.com/anthropics/claude-code/pull/72000)

---

## Feature Request Trends

1. **Granular Mouse/TUI Controls** — Split click-selection from scroll behavior in menus (#70672, 18 👍). Users want mouse-wheel scrolling without accidental click-to-select.

2. **Cybersecurity/Reverse Engineering Workflows** — Multiple reports of false-positive safety blocks on legitimate APK, DEX, and network analysis (#72163, #72164, #72168). Community requesting better heuristics or bypass mechanisms for authorized security work.

3. **Plugin Ecosystem Improvements** — Demands for reliable plugin update/reload cycles (#72162), smaller skill bundle size footprints (#72166), and policy enforcement for MCP tools (#72014).

4. **Cross-Platform IDE Integration** — WSL2 JetBrains support (#72129) and macOS system shortcut passthrough (#39429, 6 👍). Users want seamless IDE integration across all platforms.

5. **Model Behavior Predictability** — Requests for literal identifier matching over context-bias (#72170), fix for tool-call leakage after large context (#71812), and prevention of premature completion signals in multi-agent pipelines (#60142).

---

## Developer Pain Points

- **Session-Halting False Positives** — Most severe issue this week. Cybersecurity researchers unable to complete legitimate reverse-engineering work due to server-side safety blocks with no escape hatch. Multiple reports in 24 hours.

- **OAuth/Certificate Fragility** — Platform certificate rotation broke authentication on Windows and Linux (#71766). Users unable to log in at all — a critical infrastructure failure.

- **Context Bloat from Bundled Skills** — The `claude-api` skill injecting 184k tokens in a single message (#72166) highlights how bundled skills can destroy session viability without warning. Systemic risk for any large-reference skill.

- **Cross-Platform Gaps** — WSL2 PID checking (#72129), MSIX-packaged environment variable stripping (#62574), and JetBrains plugin `NoClassDefFoundError` (#62398) show Linux/Windows remain second-class citizens compared to macOS.

- **Idempotency and Race Conditions** — Background Tasks click reflow (#72165), premature completion signals in multi-agent pipelines (#60142), and TUI input freezing (#62999) point to threading and event-handling issues in the terminal UI layer.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-29

## Today's Highlights
Rate-limit accounting bugs dominate this week's digest, with multiple reports of the 5-hour budget draining 10–20x faster than expected on `gpt-5.5`. A new "writes" approval mode for apps lands in PR, alongside fixes for TUI keyboard handling and slash-command popup dismissal. The SQLite log churn saga sees continued reports on Windows, suggesting the previous fix in `0.142.0` was incomplete.

## Releases
- **rust-v0.143.0-alpha.29** — No changelog notes provided beyond the version bump. Likely a nightly/pre-release build.

## Hot Issues

1. **#28879 — Rate-limit cost per token jumped ~10–20x since June 16**  
   *[bug, rate-limits, app]* — The most-upvoted issue (337 👍) with 194 comments. Users on Plus plan report their 5-hour budget draining in 2–3 prompts. Session logs show `limit-% consumed per token` increased dramatically with no model/plan change.  
   [View Issue](https://github.com/openai/codex/issues/28879)

2. **#28224 — SQLite feedback logs can write ~640 TB/year, consuming SSD endurance**  
   *[bug, CLI, performance]* — 403 👍. Three merged PRs (in 0.142.0) avoided 85% of logs, but remaining 15% still problematic for heavy users.  
   [View Issue](https://github.com/openai/codex/issues/28224)

3. **#29955 — Quota drained instantly: 100 credits gone after 1 message**  
   *[bug, rate-limits, app]* — Pro*5 user reports full quota consumed in a single turn. 30 comments, likely related to the same root cause as #28879.  
   [View Issue](https://github.com/openai/codex/issues/29955)

4. **#30002 — Server-side quota over-reports consumption after 5h reset**  
   *[bug, rate-limits, app]* — Pro accounts hit `usage_limit_reached` after only ~41 minutes / 1.35M tokens, versus ~156M tokens in a full window. Suggests a server-side double-counting bug.  
   [View Issue](https://github.com/openai/codex/issues/30002)

5. **#2847 — Request for a way to exclude sensitive files**  
   *[enhancement, sandbox]* — 447 👍. Long-standing feature request for `.codexignore`-style file exclusion, both repo-local and global. No movement from OpenAI yet.  
   [View Issue](https://github.com/openai/codex/issues/2847)

6. **#30364 — GPT-5.5 reasoning tokens cluster at 516/1034/1552, degrading complex tasks**  
   *[bug, model-behavior, rate-limits]* — 12 comments. Aggregate `token_count` metadata shows disproportionate spikes at fixed boundaries, coinciding with lower reasoning-to-response quality.  
   [View Issue](https://github.com/openai/codex/issues/30364)

7. **#29072 — Windows: apply_patch fails because sandbox-setup.exe cannot launch**  
   *[bug, windows-os, sandbox, tool-calls]* — 25 comments. Core workflow blocker for Windows users — every `apply_patch` call fails on a sandbox setup binary.  
   [View Issue](https://github.com/openai/codex/issues/29072)

8. **#24510 — Desktop high CPU from unbounded active thread metadata**  
   *[bug, app, performance]* — 24 comments. Large number of active threads with heavy `title`/`preview` metadata causes sustained CPU/GPU usage.  
   [View Issue](https://github.com/openai/codex/issues/24510)

9. **#30405 — Windows 26.623.5546.0 still has high-frequency TRACE logs**  
   *[bug, windows-os, performance]* — Opened today. Confirms the SQLite log churn fix from earlier releases is incomplete on Windows specifically.  
   [View Issue](https://github.com/openai/codex/issues/30405)

10. **#28969 — Add setting to disable 60-second auto-resolve for questions**  
    *[enhancement, CLI, config]* — 46 👍. Users want control over CLI's auto-resolution behavior, currently hardcoded to 60 seconds.  
    [View Issue](https://github.com/openai/codex/issues/28969)

## Key PR Progress

1. **#30482 — Add "writes" app approval mode**  
   *[codex-rs]* — New `AppToolApproval` variant. Read-only tools (`readOnlyHint = true`) skip approval; all others prompt. Configurable via `[apps._default].default_tools_approval_mode`.  
   [View PR](https://github.com/openai/codex/pull/30482)

2. **#30493 — Configurable multi-agent mode hint text**  
   *[codex]* — Allows deployments to pin a stable hint policy without model-catalog changes. Adds `features.multi_agent_mode_hint` config.  
   [View PR](https://github.com/openai/codex/pull/30493)

3. **#30492 — Fix slash command popup dismissal**  
   *[tui]* — Escape now properly closes slash-command popups by recording the dismissed command token and suppressing re-sync until text changes.  
   [View PR](https://github.com/openai/codex/pull/30492)

4. **#30487 — Fall back from unsupported reasoning effort**  
   *[codex]* — When a model doesn't support `max` effort, falls back gracefully. Prevents worker threads from getting stuck with a failed inference request.  
   [View PR](https://github.com/openai/codex/pull/30487)

5. **#30488 — Show reset details in redemption picker**  
   *[tui]* — Now displays individual reset credits, their expiry times, and which credit will be consumed — no more blind "Redeem" button.  
   [View PR](https://github.com/openai/codex/pull/30488)

6. **#30395 — Expose rate-limit reset credit details via API**  
   *[app-server]* — Backend support for #30488. New v2 endpoint exposes available credits, expiry, and a consumption path without private API access.  
   [View PR](https://github.com/openai/codex/pull/30395)

7. **#29740 — Use model metadata for skills usage instructions**  
   *[codex]* — Adds `include_skills_usage_instructions` field to model metadata, enabled for `gpt-5.5`. Replaces hardcoded legacy-model matching.  
   [View PR](https://github.com/openai/codex/pull/29740)

8. **#30480 — Fix duplicate unicode keyboard input**  
   *[tui]* — Stops requesting Kitty alternate-key reporting that Codex doesn't consume. Fixes duplicate non-ASCII input on Windows Terminal and Warp.  
   [View PR](https://github.com/openai/codex/pull/30480)

9. **#30467 — Treat `max` as first-class reasoning effort**  
   *[codex]* — Makes `max` a known effort level for Bedrock GPT-5.6, fixing lowercase display and aligning catalog data with UI labels.  
   [View PR](https://github.com/openai/codex/pull/30467)

10. **#30252 — Cache remote Bash environment exports**  
    *[codex]* — Initializes remote Bash exports once per exec-server session and reuses them. Reduces overhead for non-TTY `bash -c` commands with shell snapshots.  
    [View PR](https://github.com/openai/codex/pull/30252)

## Feature Request Trends

- **File exclusion mechanisms** (#2847, 447 👍) — `codexignore`-style patterns remain the top feature ask, with no official response from OpenAI.
- **Configurable auto-resolve** (#28969, 46 👍) — Users want control over the CLI's 60-second automatic question resolution.
- **Per-tool approval granularity** (#30482) — The new "writes" approval mode partially addresses this, but some users want finer-grained control.
- **Multi-agent mode configuration** (#30493) — Deployments need stable hint policies independent of model/catalog changes.
- **Rate-limit transparency** (#30395, #30488) — Multiple PRs this week aim to give users visibility into reset credits and consumption.

## Developer Pain Points

- **Rate-limit accounting bugs** are the dominant pain point this week. Three issues (#28879, #29955, #30002) describe different manifestations of the same problem: budget draining 10–20x faster than expected. Community frustration is high (337 👍 on #28879 alone).
- **Windows sandbox reliability** remains a recurring theme. Issues with `apply_patch` (#29072, 25 comments), sandbox setup EXE (#29427), and SSH/network access after idle (#29866) suggest Windows support is still maturing.
- **SQLite log churn** persists despite three merged fixes. #30405 (opened today) confirms Windows still suffers from high-frequency TRACE logging, with WAL files growing during normal use.
- **Model behavior quirks** — The `gpt-5.5` reasoning token clustering at fixed boundaries (#30364) suggests potential optimization artifacts that may affect quality on complex tasks.
- **GUI regressions** — Multiple reports of UI elements disappearing or behaving incorrectly after updates: file tree/review pane (#30484), traffic-light controls (#27505), and stale popups (#30492).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-29

## Today's Highlights

A security patch landed in today's nightly release enforcing case-insensitive path blocklist enforcement for sensitive files and VS Code HITL prompts. The community remains focused on agent reliability issues, with several high-priority bugs still open around subagent recovery misreporting, shell command hangs, and the generalist agent hanging entirely. On the PR side, multiple community-contributed fixes are progressing on A2A server crash prevention, slash-command deduplication, and VS Code terminal focus preservation.

## Releases

- **[v0.51.0-nightly.20260628.gae0a3aa7b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260628.gae0a3aa7b)** — Fixes a security vulnerability where the sensitive path blocklist was not enforced case-insensitively, and improves VS Code HITL (human-in-the-loop) path handling. (PR #27966 by @luisfelipe-alt)

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** (P1, 8 comments, 2 👍)  
   The `codebase_investigator` subagent hits its turn limit but reports `status: "success"` with `Termination Reason: "GOAL"`, hiding the interruption from users. This is a critical UX bug because users trust the success signal and may miss that analysis was incomplete.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever** (P1, 7 comments, 8 👍)  
   When Gemini CLI defers to the generalist agent for simple tasks (e.g., folder creation), it hangs indefinitely. Users report waiting up to an hour. Workaround exists (instructing the model not to use sub-agents), but the high 👍 count shows this is a widespread frustration.

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution gets stuck with "Waiting input" after completion** (P1, 4 comments, 3 👍)  
   Simple CLI commands finish executing but the UI remains stuck showing "Awaiting user input". Affects basic workflows and is a high-priority core bug.

4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails in Wayland** (P1, 4 comments, 1 👍)  
   The browser subagent fails with `Termination Reason: GOAL` on Wayland display servers, breaking a key agent capability for Linux users.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (P2, 6 comments)  
   Anecdotal but consistent: the model avoids invoking custom skills and sub-agents unless explicitly instructed, even for directly relevant tasks. Points to a fundamental agent routing/planning issue.

6. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (P2, 8 comments, 1 👍)  
   Proposes using Gemini 3's native bash capabilities with sandboxed execution and post-execution intent routing. This would reduce need for custom tools and better align with the model's strengths.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Add deterministic redaction and reduce Auto Memory logging** (P2, 5 comments)  
   Auto Memory reads local transcripts and sends content to the model before redaction happens, creating a potential data leakage path. Also logs sensitive skill outputs. A security/privacy concern for enterprise users.

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Stop Auto Memory from retrying low-signal sessions indefinitely** (P2, 5 comments)  
   Auto Memory only marks a session as processed if the extraction agent successfully reads it. Low-signal sessions get retried forever, wasting compute and potentially leaking data across attempts.

9. **[#22465](https://github.com/google-gemini/gemini-cli/issues/22465) — Gemini CLI gets stuck at interactive prompt creating vite app** (P2, 2 comments)  
   A reproducible UX failure: creating a new Vite app causes the agent to get stuck at an interactive prompt. Suggests deeper issues with non-blocking interactive process handling.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should stop/discourage destructive behavior** (P2, 3 comments, 1 👍)  
    The model occasionally uses `git reset` or `--force` when safer alternatives exist. Community members want guardrails against destructive operations, especially for database and git operations.

## Key PR Progress

1. **[#27966](https://github.com/google-gemini/gemini-cli/pull/27966) — Security: enforce case-insensitive sensitive path blocklist and VS Code HITL** (merged into nightly)  
   Fixes path normalization bypass where uppercase variants of sensitive paths (e.g., `.GIT/config`) could circumvent the blocklist.

2. **[#28183](https://github.com/google-gemini/gemini-cli/pull/28183) — Preserve terminal focus when closing diff tabs (VS Code companion)** (Open, P1)  
   After approving edits in Gemini CLI, the VS Code terminal loses focus. This PR keeps focus in the integrated terminal, fixing a high-friction UX issue for VS Code users.

3. **[#27915](https://github.com/google-gemini/gemini-cli/pull/27915) — Trust dialog discloses the hook shape that never runs** (Open, P1, security)  
   The workspace-trust dialog shows the *inverse* of hooks that actually execute, creating a security gap where users might trust a project that silently runs arbitrary shell.

4. **[#27863](https://github.com/google-gemini/gemini-cli/pull/27863) — Prioritize structured display titles in tool invocation** (Open, P1)  
   Fixes tool invocation display so structured titles take priority, improving readability in non-interactive and rich output modes.

5. **[#27754](https://github.com/google-gemini/gemini-cli/pull/27754) — A2A server: add missing return after 501 response** (Open, P1)  
   Prevents `ERR_HTTP_HEADERS_SENT` crash when A2A server's `/tasks/metadata` endpoint returns 501, fixing a crash-on-error scenario.

6. **[#27867](https://github.com/google-gemini/gemini-cli/pull/27867) — A2A server: prevent crash when tasks metadata returns 501** (Open, P1)  
   Companion fix to #27754, ensuring the A2A server gracefully handles unsupported metadata requests rather than crashing.

7. **[#27860](https://github.com/google-gemini/gemini-cli/pull/27860) — Reset slash-command conflict dedupe when conflicts reappear** (Open, P2)  
   Fixes a bug where resolved conflicts that reappear are not re-notified, thanks to @aniruddhaadak80.

8. **[#27862](https://github.com/google-gemini/gemini-cli/pull/27862) — Preserve executing subagent tool calls in UI** (Open, P2)  
   Ensures subagent tool calls remain visible in the UI while executing, improving debuggability and transparency.

9. **[#27744](https://github.com/google-gemini/gemini-cli/pull/27744) — Resolve DNS before SSRF guard to block hostname-to-private-IP bypass** (Merged)  
   Fixes an SSRF vulnerability where wildcard DNS services (e.g., `127.0.0.1.nip.io`) could bypass the private IP blocklist by not being recognized as IP literals.

10. **[#27878](https://github.com/google-gemini/gemini-cli/pull/27878) — Sniff MCP image MIME types** (Merged, P1)  
    Fixes HTTP 400 errors when WebP images from Figma MCP integration were incorrectly labeled as `image/png`. Implements local binary signature sniffing.

## Feature Request Trends

- **Agent self-awareness & configuration**: Multiple issues request that the agent understand its own CLI flags, hotkeys, and capabilities (#21432, #22267). Users want the model to be its own documentation.
- **AST-aware code understanding**: A dedicated epic (#22745) and investigation (#22746) explore using AST-aware file reads, search, and codebase mapping to reduce token usage and improve precision compared to line-based tools.
- **Component-level evaluations**: There's a push (#24353) to expand behavioral eval tests beyond the current 76 tests to cover specific components systematically, indicating a maturing testing culture.
- **Subagent trajectory sharing**: Users want to see and share subagent trajectories via `/chat share` (#22598) for debugging and eval purposes.
- **Sandboxed execution**: The idea of zero-dependency OS sandboxing (#19873) keeps recurring, suggesting users want the model's native bash capabilities without compromising security.

## Developer Pain Points

- **Agent hangs and stuck states**: The most common complaint — generalist agent hangs (#21409), shell command "Waiting input" (#25166), Vite prompt lockup (#22465), and interactive prompt issues. These fundamentally break the "it just works" promise.
- **Subagent reliability**: Subagents misreport success on turn limits (#22323), ignore settings.json overrides (#22267), run without permission (#22093), and fail in Wayland (#21983). The multi-agent architecture is a top source of friction.
- **Security & trust gaps**: Auto Memory data leakage (#26525), trust dialog inversion (#27915), SSRF bypass (#27744), and inconsistent path blocklist enforcement (#27966) point to ongoing security hardening needs.
- **Tool proliferation**: The 400+ tools causing 400 errors (#24246) and models creating random tmp scripts everywhere (#23571) suggest tool management and cleanup are not well handled.
- **Memory system quality**: Auto Memory retrying low-signal sessions forever (#26522), invalid patch quarantining (#26523), and logging sensitive data (#26525) indicate the memory subsystem needs significant quality improvements before it's ready for production use.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-29

## Today's Highlights
The community is increasingly vocal about session management and workspace organization, with three new feature requests filed in the last 24 hours targeting searchable session tags, plan status badges, and file-tree parity between folder and repository sessions. A critical enterprise networking bug (#2978) involving `session.create` failures behind corporate proxies continues to languish after two months of inactivity, while a regression in soft-wrapped copy behavior (#3964) was closed despite user reports that the fix remains incomplete. The repository saw no new releases or merged PRs today.

## Releases
No new releases in the last 24 hours. Latest stable: **v1.0.65**, preceded by v1.0.49.

## Hot Issues
1. **_#2978_ — `session.create` fails with "fetch failed" in SDK headless mode behind corporate proxy**  
   *Opened 2026-04-26 | Updated 2026-06-28 | 2 comments*  
   A blocking issue for enterprise adoption: the CLI subprocess cannot route through corporate HTTP proxies despite correct env vars, while standalone `undici` 7.22 succeeds. Zero 👍 indicates low community engagement, but the severity is high for any organization using authenticated proxies.  
   [Issue #2978](https://github.com/github/copilot-cli/issues/2978)

2. **_#3964 [CLOSED]_ — Soft-wrapped copy still drops space at wrap boundary (incomplete fix of #3666)**  
   *Opened 2026-06-28 | Updated 2026-06-28 | 1 comment*  
   A regression that glues words together when copying soft-wrapped CLI output. The original fix (#3666) was shipped in v1.0.49, but users report the issue persists through v1.0.59 and v1.0.65. Closed without accepted resolution — indicates a potential "wontfix" or oversight.  
   [Issue #3964](https://github.com/github/copilot-cli/issues/3964)

3. **_#3971 [NEW]_ — Feature Request: Full file-tree browser for repository-backed sessions**  
   *Opened 2026-06-28 | No comments*  
   Repository worktree sessions only show a git "Changes" view in the side panel, lacking the full directory tree that folder sessions provide. This limits navigation efficiency for users working with large repos.  
   [Issue #3971](https://github.com/github/copilot-cli/issues/3971)

4. **_#3970 [NEW]_ — Feature Request: User-defined tags on sessions**  
   *Opened 2026-06-28 | No comments*  
   As session counts grow, organizing by project/feature/workstream becomes impossible. Requesting custom tags that are searchable and filterable — a lightweight alternative to folder hierarchies.  
   [Issue #3970](https://github.com/github/copilot-cli/issues/3970)

5. **_#3969 [NEW]_ — Feature Request: Plan status indicators on session list items**  
   *Opened 2026-06-28 | No comments*  
   No visual cue for a session's plan stage (queued, in-progress, completed, failed). Users must open each session to check, breaking flow when juggling multiple workstreams. Proposed: badges or symbols in the session list.  
   [Issue #3969](https://github.com/github/copilot-cli/issues/3969)

6. **_#3967 [NEW]_ — Copilot disappeared after using two terminals; claims "not installed" on Ubuntu 24.04**  
   *Opened 2026-06-28 | No comments*  
   A fresh user reports CLI installation vanished mid-session after using Guake and Ubuntu Terminal simultaneously. Likely a PATH issue or conflicting shell environments, but no reproduction steps provided.  
   [Issue #3967](https://github.com/github/copilot-cli/issues/3967)

7. **_#3815_ — Windows debug log path missing backslash**  
   *Opened 2026-06-15 | Updated 2026-06-28 | No new comments*  
   The debug log file path (e.g., `C:Users...`) is missing a `\` after the drive letter, making the path invalid for copy-paste into Explorer. Cosmetic but frustrating for Windows developers debugging issues.  
   [Issue #3815](https://github.com/github/copilot-cli/issues/3815)

## Key PR Progress
1. **_#3968 [CLOSED]_ — Rename changelog.md to changelog.md**  
   *Opened 2026-06-28 | Closed 2026-06-28*  
   An apparently spurious PR that proposes renaming a file to itself. Likely a test or accidental submission. No substantive impact.  
   [PR #3968](https://github.com/github/copilot-cli/pull/3968)

_No other pull requests were updated in the last 24 hours._

## Feature Request Trends
- **Session organization** is the dominant theme: three requests today (tags, status badges, repository file tree) all aim to help users manage growing numbers of concurrent sessions. Users want visual, filterable metadata without switching contexts.
- **Enterprise proxy support** remains an open gap: #2978 has been untouched for two months, with no maintainer response. This suggests corporate networking is not yet a strategic priority for the CLI team.
- **Workspace parity** between folder and repository sessions is a recurring sub-theme — users expect identical UI capabilities regardless of session type.

## Developer Pain Points
- **Regression acceptance**: The clip-board copy regression (#3964) was closed despite user evidence that the fix is incomplete. This erodes trust in the release QA process.
- **Installation fragility**: The Ubuntu "disappeared" report (#3967) mirrors earlier unconfirmed reports of CLI state loss. No diagnostic data or reproduce steps exist, making it hard to prioritize.
- **Windows ecosystem friction**: The debug path backslash bug (#3815) persists for 13 days — a simple fix that signals low investment in platform-specific polish.
- **Stale enterprise issues**: #2978 has no maintainer activity for 63 days despite being tagged with `area:enterprise` and `area:networking`. This may deter enterprise users from reporting proxy-related issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-29

**Data sourced from:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## Today’s Highlights

No new releases or pull requests were recorded in the last 24 hours. However, two long-standing bugs remain in active discussion: a persistent file-reading loop affecting Linux users on custom Anthropic endpoints (Issue #640), and a memory leak in the VS Code extension reported under heavy task loads (Issue #1592). Community engagement on these issues remains steady, though resolution progress appears stalled.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

*Only 2 issues were updated in the last 24h. Below are the most noteworthy:*

1. **[Bug] Kimi CLI stuck in reading one file repeatedly (loop)**
   - **Issue:** [#640](https://github.com/MoonshotAI/kimi-cli/issues/640)
   - **Author:** isbafatima90-arch
   - **Why it matters:** Affects CLI v0.76 on Linux (Arch) with custom Anthropic endpoints using `mimo-v2-flash`. The CLI enters an infinite loop reading the same file, rendering the tool unusable. Community discussion (15 comments) suggests this may be a model-specific context handling issue. 1 👍.
   - **Community reaction:** Users are asking for a workaround or configuration toggle, and some suspect the loop originates from the custom endpoint adapter rather than the CLI core.

2. **[Bug] Kimi Code VS Code plugin consumes excessive memory**
   - **Issue:** [#1592](https://github.com/MoonshotAI/kimi-cli/issues/1592)
   - **Author:** xiaochonzi
   - **Why it matters:** Affects plugin v0.4.5 on macOS (Darwin 23.6.0, arm64). Users report memory usage spikes during long-running tasks, impacting IDE performance. Only 1 comment so far, but memory regressions are high-priority for developer tooling.
   - **Community reaction:** No workaround currently shared; request is for profiling logs to identify the memory leak source.

*Only 2 issues were updated; no other issues qualified for this section.*

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

Based on analysis of all open and recently closed issues, the most-requested feature directions are:

- **Custom endpoint and model flexibility** – Many users request better support for non-standard endpoints (e.g., custom Anthropic, OpenAI-compatible proxies), including configuration validation and error recovery.
- **Memory and resource usage optimization** – A recurring theme across both CLI and VS Code plugin, especially for long-running tasks and large workspace loading.
- **File loop detection and termination** – Users desire a watchdog or timeout mechanism to break infinite loops during file reading, particularly when using experimental models.
- **Multi-language assistant improvements** – Requests for better handling of mixed-language codebases (e.g., Python + TypeScript) and selective indexing.

---

## Developer Pain Points

- **Stability on non-standard models:** The file-reading loop bug (#640) highlights a critical lack of resilience when using custom model endpoints, making the tool unreliable for advanced users.
- **VS Code memory leak:** The reported memory consumption (#1592) degrades the experience for developers on resource-constrained machines (especially ARM Macs) and may discourage daily use.
- **Slow issue resolution:** Both hot issues are months old (Jan and Mar 2026) with no fix in sight, suggesting a bottleneck in triage or release cycles. Community patience may be wearing thin.

---

*Generated automatically from GitHub data. Raw data is limited today due to low update activity.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-29

## Today's Highlights
Despite no new releases, the community remains highly active with over 50 issues and PRs updated in the last 24 hours. A major PR introduces **v2 manual compaction** to address long-standing session management issues, while several fixes target MCP OAuth reconnection and desktop UI glitches. The top-voted issue clamoring for **Cursor CLI support** continues to dominate discussion with 186 👍 reactions.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#2072 — Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)** (74 comments, 186 👍)
   Long-running feature request asking OpenCode to support Cursor's recently released CLI. High engagement indicates strong user desire for multi-platform compatibility, though technical feasibility remains uncertain due to undocumented APIs.

2. **[#13984 — Cannot copy and paste in OpenCode CLI](https://github.com/anomalyco/opencode/issues/13984)** (50 comments, 23 👍)
   Persistent clipboard bug on Windows/Linux where the UI reports "copied to clipboard" but Ctrl+V yields nothing. High comment count reflects widespread frustration with a basic workflow blocker.

3. **[#21034 — Gemma-4-26b/31b tool loops/failures](https://github.com/anomalyco/opencode/issues/21034)** (19 comments, 20 👍)
   Gemma 4 models remain unusable in OpenCode despite recent tokenizer fixes and engine patches. Community testing shows tool call reliability is still broken across multiple backends.

4. **[#32420 — Paid Go subscription — charged but not activated](https://github.com/anomalyco/opencode/issues/32420)** (10 comments)
   Multiple users report billing failures with no support response. Serious trust and retention issue for OpenCode Go monetization.

5. **[#33399 — OpenCode CPU utilization 99-100% randomly](https://github.com/anomalyco/opencode/issues/33399)** (7 comments)
   CLI process periodically pegs CPU, making the tool completely unresponsive. Regression since v1.3.3, suggesting a runtime leak.

6. **[#33696 — GitHub Copilot provider broken](https://github.com/anomalyco/opencode/issues/33696)** (4 comments, 4 👍)
   After re-authentication, no models appear from Copilot. Core provider integration regression affecting a large user base.

7. **[#34228 — Project skills inconsistent between sessions](https://github.com/anomalyco/opencode/issues/34228)** (8 comments)
   OpenCode exposes an unstable subset of 35 valid project skills, causing unreliable agent behavior. Critical for reproducibility in skill-driven workflows.

8. **[#34190 — Agent bypassed Plan mode restrictions](https://github.com/anomalyco/opencode/issues/34190)** (3 comments)
   Plan mode agent ran `gh issue comment` without permission — a safety boundary violation. Root cause traced to missing restrictions in system prompt.

9. **[#30680 — Auto-compaction loop stops responses](https://github.com/anomalyco/opencode/issues/30680)** (8 comments)
   OpenCode enters infinite compaction loop even in empty directories, exhausting tokens and halting all generation. Related to [#34336 PR](#34336).

10. **[#34348 — GitHub Copilot billing confusion](https://github.com/anomalyco/opencode/issues/34348)** (2 comments)
    When both "GitHub Copilot" and direct OpenAI providers are configured, Copilot-selected models may incorrectly bill via the OpenAI developer token.

## Key PR Progress

1. **[#34336 — feat(core): add v2 manual compaction](https://github.com/anomalyco/opencode/pull/34336)** (OPEN)
   Kit Langton's contribution adds manual compaction API, shares logic with auto-compaction, and exposes busy/unknown errors. Directly addresses compaction loop issues (#30680).

2. **[#29876 — fix(tui): integrate ServerAuth headers into transport](https://github.com/anomalyco/opencode/pull/29876)** (CLOSED)
   Fixes `OPENCODE_SERVER_PASSWORD` breaking TUI startup. Now only enters external mode from explicit CLI flags. Closes #29847.

3. **[#34355 — fix(app): suppress middle-click tab auxclick](https://github.com/anomalyco/opencode/pull/34355)** (OPEN)
   Agent-authored fix preventing unwanted middle-click navigation after closing tabs in the desktop app.

4. **[#34352 — fix(app): register export logs globally](https://github.com/anomalyco/opencode/pull/34352)** (OPEN)
   Makes "Export Logs" available outside legacy layout, fixing desktop menu integration.

5. **[#34353 — fix(core): fallback to ripgrep when fff fails](https://github.com/anomalyco/opencode/pull/34353)** (OPEN)
   Ensures filesystem search works even if the `fff` search backend fails to initialize — prevents silent search breakage.

6. **[#30849 — fix(opencode): strip MiniMax trailing tool_call leak](https://github.com/anomalyco/opencode/pull/30849)** (OPEN)
   Adds sanitizer for MiniMax response artifact where assistant text leaks tool-call markers. Closes #30684.

7. **[#33920 — fix(mcp): reconnect after OAuth even when server is disabled](https://github.com/anomalyco/opencode/pull/33920)** (CLOSED)
   After successful OAuth, "Unexpected status: disabled" prevented reconnection. Now correctly handles disabled server state.

8. **[#19038 — feat(app): open browser inside the desktop app](https://github.com/anomalyco/opencode/pull/19038)** (CLOSED)
   Merged feature adding in-app browser so users can inspect web content without leaving desktop. Addresses #19036.

9. **[#29778 — fix(opencode): granular subagent edit permission inheritance](https://github.com/anomalyco/opencode/pull/29778)** (CLOSED)
   Fixes overly aggressive deny rules that were incorrectly overriding subagent edit permissions. Closes #27497.

10. **[#29755 — fix(opencode): enforce read deny rules in glob and grep results](https://github.com/anomalyco/opencode/pull/29755)** (CLOSED)
    Three separate bugs meant `**/.env*` deny rules were ineffective. Fixes wildcard matching in search results. Closes #29674.

## Feature Request Trends

- **Cursor CLI Support** — Issue #2072 remains the most-voted feature request (186 👍). Users want OpenCode to work across all major AI CLI tools.
- **Integrated Browser / Visual Editing** — Multiple requests (#26772, #30755) for an in-app browser with click-to-edit capabilities, similar to Codex. PR #19038 has now been merged as an initial step.
- **Session Lifecycle Hooks** — #5409 (17 👍) requests `SessionStart` hooks for automating workflows on session open, mirroring Claude Code's hook system.
- **.claude/CLAUDE.md Compatibility** — #17436 requests support for Claude Code's project file convention, reducing friction when switching between tools.
- **Elixir Language Server Update** — #15512 asks to replace stale Elixir LS with the official "Expert" LS now in RC phase.

## Developer Pain Points

1. **Clipboard/Copy-Paste Failures** — Issues #13984 (50 comments) and related reports show persistent clipboard bugs across platforms, severely impacting developer productivity.

2. **Model Compatibility Regressions** — Gemma 4 (#21034), MiniMax (#30849, #34309), and DeepSeek V4 on NIM (#24264) all suffer from tool call or streaming issues, fragmenting the model ecosystem.

3. **Provider Auth & Billing Problems** — #32420 (charged but not activated), #33696 (Copilot broken), and #34348 (billing confusion) indicate brittle provider authentication that erodes user trust.

4. **Auto-Compaction & CPU Spikes** — #30680 and #33399 point to systemic performance issues where OpenCode becomes unresponsive due to runaway background processes.

5. **Plan Mode Safety Violations** — #34190 highlights that mode-based restrictions can be bypassed by agents calling shell commands directly, a security concern for enterprise adoption.

6. **Inconsistent Configuration Behavior** — #34228 (project skills), #34326 (silently dropped agents), and #7692 (JSON parse errors) suggest configuration parsing and validation is fragile across environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-29

## Today's Highlights
The community remains highly active despite no new releases today, with intense discussion around **OpenAI Codex connection reliability** (72 comments, 30 👍) and a persistent **streaming markdown scroll-jacking bug** (36 comments). A flurry of 12 PRs landed or were updated, including fixes for Anthropic bearer token support, tab/space normalization in the edit tool, and a critical compaction guard. Additionally, multiple community members are pushing for new built-in inference providers (Charm Hyper, Friendli) and better provider extensibility.

## Releases
*No new versions published in the last 24 hours.*

## Hot Issues
1. **[#4945 – openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** (72 comments, 30 👍)  
   *Long-running, high-impact.* The TUI gets stuck on "Working..." with no error when using `openai-codex`/`gpt-5.5`. Only Escape recovers. Community frustration is high — this is the most-commented open issue.

2. **[#5825 – Streaming markdown forces scroll to bottom](https://github.com/earendil-works/pi/issues/5825)** (36 comments)  
   *Common UX pain.* With "clear on shrink" enabled, auto-scroll overrides user reading position. Many users have hit this.

3. **[#6124 – Devnagri breaking the Pi harness](https://github.com/earendil-works/pi/issues/6124)** (3 comments)  
   *Unicode rendering bug.* Typing Hindi/Devanagari characters (`नेटवर्क`) corrupts the TUI display. Critical for international users.

4. **[#6103 – OpenAI Responses API mislabels empty tool results](https://github.com/earendil-works/pi/issues/6103)** (2 comments)  
   *Latent bug exposed by extensions.* Empty tool returns mislabeled as "(see attached image)" — affects any extension overriding the `replace` tool.

5. **[#6104 – `find` drops first path-segment character on Windows drive root](https://github.com/earendil-works/pi/issues/6104)** (3 comments)  
   *Windows-specific path corruption.* Searching from `C:\` yields `I/` instead of `I:/gemma4*`. Platform parity issue.

6. **[#6083 – LLM cache not working with z.ai GLM coding plan](https://github.com/earendil-works/pi/issues/6083)** (2 comments, 9 👍)  
   *High upvote ratio.* Heavy token burn on multi-step tasks. Cache misses are costing users significant session limits.

7. **[#6139 – Strip unsupported reasoning_content for OpenAI-compatible providers](https://github.com/earendil-works/pi/issues/6139)** (2 comments)  
   *Provider compatibility.* Groq and others reject `reasoning_content`. Needs generic sanitization.

8. **[#6088 – RpcClient hardcoded 60s timeout causes failures on long tool sessions](https://github.com/earendil-works/pi/issues/6088)** (2 comments)  
   *MCP integration blocker.* Long-running `searchblitz` sessions fail due to hardcoded wait cap.

9. **[#6150 – Tool edit generates invalid tool calls with GitHub Copilot providers](https://github.com/earendil-works/pi/issues/6150)** (1 comment)  
   *Fresh, critical.* Gemini Flash Preview and Claude Haiku via Copilot produce broken edit tool calls. Affects v0.80.2 on Windows.

10. **[#6128 – Support DiffusionGemma thinking and tool calls](https://github.com/earendil-works/pi/issues/6128)** (3 comments)  
    *New model integration.* DiffusionGemma's thinking block renders as normal output. Community testing new Unsloth Studio models.

## Key PR Progress
1. **[#6148 – fix(ai): support Anthropic bearer token env](https://github.com/earendil-works/pi/pull/6148)** (OPEN)  
   *Critical fix for #5871.* Attempts to handle scoped Anthropic keys without the `sk-ant-oat` prefix. Author notes interface limitations.

2. **[#6115 – feat(coding-agent): add configurable chat padding](https://github.com/earendil-works/pi/pull/6115)** (OPEN)  
   *Highly requested.* Configurable TUI padding. Author (mitsuhiko) notes this is a significant TUI restructuring challenge.

3. **[#6146 – fix(ai): revert #4110 – both models now work on OpenCode Go](https://github.com/earendil-works/pi/pull/6146)** (CLOSED)  
   *Cleanup.* Removes old workaround; MiniMax M2.7 and Qwen 3.6 Plus now work natively via anthropic-messages.

4. **[#6144 – fix: normalize tabs to spaces in edit tool fuzzy matching](https://github.com/earendil-works/pi/pull/6144)** (CLOSED)  
   *Practical fix.* LLMs generate space-indented `oldText` but source files use tabs. Normalization prevents false fuzzy-match failures.

5. **[#6136 – fix(coding-agent): guard compaction continuation with hasQueuedMessages](https://github.com/earendil-works/pi/pull/6136)** (CLOSED)  
   *Correctness fix.* Prevents `agent.continue()` being called on an empty agent after compaction, avoiding silent hangs.

6. **[#6074 – fix(coding-agent): avoid pre-prompt compaction continue](https://github.com/earendil-works/pi/pull/6074)** (CLOSED)  
   *Related compaction fix.* Stops unnecessary continue cycles after pre-prompt compaction.

7. **[#6078 – feat(coding-agent): add get_entries and get_tree RPC commands](https://github.com/earendil-works/pi/pull/6078)** (CLOSED)  
   *API surface expansion.* Exposes session entry history and tree structure for remote clients.

8. **[#6142 – Enable DeepSeek reasoning_effort high for GitHub agent scripts](https://github.com/earendil-works/pi/pull/6142)** (CLOSED)  
   *CI/automation.* Adds configurable `reasoning_effort` for DeepSeek in agent scripts, with token logging.

9. **[#6141 – fix(context-canvas): normalize matrix-run AiCommand response parsing](https://github.com/earendil-works/pi/pull/6141)** (CLOSED)  
   *API robustness.* Fixes Zod validation errors by accepting both bare and wrapped `AiCommand` JSON responses.

10. **[#60 – feat: Fuzzy search for files and folders](https://github.com/earendil-works/pi/pull/60)** (CLOSED)  
    *Long-standing feature.* Enables `@`-based fuzzy file/folder search as alternative to directory walking.

## Feature Request Trends
- **New inference providers are a dominant theme.** Multiple requests for adding Charm Hyper (#6042), Friendli (#6091), and updates for Together.ai deprecations (#6132) show the community wants broader model access without manual API configuration.
- **Provider extensibility.** #6089 requests a payload transform hook for extensions overriding providers — signals demand for a plugin architecture around AI provider integration.
- **Context Matrix (power-user features).** Heonyun's Phase 3 (#6134) and Phase 4a (#6137) proposals for markdown storage projection and template-based sheets indicate advanced users want structured session management and persistence.
- **Slash command UX improvements.** #6147 (argument completions after command acceptance) and #6107 (queue `/reload` while streaming) reflect desire for more polished command workflows.
- **macOS bash compatibility.** #6135 highlights the pain of Apple's ancient Bash 3.2 — users want configurable shell paths rather than hardcoded `/bin/bash`.

## Developer Pain Points
1. **TUI scroll behavior (#5825)** – Auto-scroll during streaming markdown output overrides user reading position. Frequently reported, no fix in sight.
2. **OpenAI Codex reliability (#4945)** – Silent hang with no error recovery path; the most-commented issue. Community is waiting for a core fix.
3. **Provider compatibility friction** – Multiple issues (#6103, #6139, #6150) where provider-specific behavior (empty results, unsupported fields, model name mismatches) causes silent failures. Each requires per-provider workarounds.
4. **Windows path handling (#6104)** – Persistent Windows-specific bugs in tooling (`find`, drive roots) suggest Windows is a secondary testing target.
5. **Slow startup (#6075)** – Reported 10-second TUI load time on Fedora 42 (v0.80.2). Performance regression concern.
6. **Tool renderer fragility (#6098, #6130)** – Exceptions in custom tool renderers are silently swallowed, making debugging "impossible" per one contributor. Falls back to default with no error message.
7. **Compaction/cache issues (#6083, #6136, #6074)** – Multi-layered problems with session compaction and continuation logic are causing unexpected hangs and token waste.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-29

## Today's Highlights
A patch release v0.19.3 shipped with a critical web_fetch JSON fallback fix, but the community remains focused on a cluster of token-wasting and session-management bugs. The most active discussion concerns "zombie sessions" silently burning API credits, alongside growing calls for configurable compaction models and inline model switching. Several high-quality PRs landed around daemon session resumption, loop-based task files, and desktop voice dictation.

---

## Releases
- **[v0.19.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3)** — Patch release with a single fix: allows `web_fetch` to fall back to JSON parsing when standard responses fail. Authored by @tt-a1i.
- **[v0.19.2-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260628.714513df2)** — Nightly build containing the same web_fetch fix ahead of the stable release.

---

## Hot Issues (Top 10)

1. **[#5964 — Zombie sessions burning 30M tokens without logging](https://github.com/QwenLM/qwen-code/issues/5964)**  
   A user reports a "zombie agent" that ran 8 hours unattended, silently consuming DeepSeek credits with zero entries in `usage_record.jsonl`. The community is alarmed: automatic session timeout clearly isn't cutting off and isn't audited. **Priority: P1, 3 comments, 28 upvotes implied by concern level.**

2. **[#5942 — Anthropic provider prompt-cache misses inflating costs](https://github.com/QwenLM/qwen-code/issues/5942)**  
   Side-queries use a different request prefix than main conversation turns, causing ~100% cache miss rate vs. Claude Code's near-perfect cache hits. Directly impacts per-token billing. **3 comments, filed by @xiaoliu10.**

3. **[#5950 — Context window overflow despite 131K limit](https://github.com/QwenLM/qwen-code/issues/5950)**  
   User hits 400 errors at ~135K tokens because `max_tokens` (64K) isn't subtracted from the input budget before compression thresholds are computed. **3 comments, filed by @Data-Wise.**

4. **[#5736 — More frequent full-prompt reprocessing after recent update](https://github.com/QwenLM/qwen-code/issues/5736)**  
   Local LLM users report a regression where `/continue` or even casual conversation turns trigger full re-processing instead of cache-friendly continuation. **7 comments — most active issue.**

5. **[#5800 — Last line of tall replies overwritten on completion](https://github.com/QwenLM/qwen-code/issues/5800)**  
   In default Static TUI mode, replies taller than the terminal lose their final line. Community links this to upstream Ink issue #973. **6 comments.**

6. **[#5837 — Agent response gets cut off mid-output](https://github.com/QwenLM/qwen-code/issues/5837)**  
   Screenshot shows output stopping at `Dependencies added:` while debug logs prove the model generated more. Likely a rendering or stream-finalization issue. **6 comments.**

7. **[#5958 — Web Shell CodeMirror input broken on mobile](https://github.com/QwenLM/qwen-code/issues/5958)**  
   `qwen serve --hostname 0.0.0.0` produces a non-functional input editor on iOS Safari and Android Chrome. **3 comments, filed by @rayzzl.**

8. **[#5949 — `/new` (clear) command sometimes doesn't work](https://github.com/QwenLM/qwen-code/issues/5949)**  
   Issuing `/new` fails to start a new section intermittently, leaving the session in a broken state. **2 comments.**

9. **[#5683 — Subagent token counting wildly inaccurate](https://github.com/QwenLM/qwen-code/issues/5683)**  
   In local LLM mode, subagent token consumption shows 2,900K+ tokens when the limit should be far lower. Could be a counting bug or a runaway tool loop. **4 comments.**

10. **[#5966 — Chinese IME completely broken in 0.19.3 UI](https://github.com/QwenLM/qwen-code/issues/5966)**  
    Users on the latest patch report Chinese input method failures — only pinyin (raw Latin) is accepted. No error messages, no console logs. **2 comments, filed by @aspnmy.**

---

## Key PR Progress (Top 10)

1. **[#5888 — RFC: qwen tag — Multiplayer channel-resident agent](https://github.com/QwenLM/qwen-code/pull/5888)**  
   Proposes a DingTalk-first "tag" agent that lives inside chat groups, built on existing channel adapters and the `qwen serve` daemon. Major architectural concept under discussion.

2. **[#5780 — `qwen update` and `/update` commands with auto-update support](https://github.com/QwenLM/qwen-code/pull/5780)**  
   Adds CLI and slash commands to check npm registry for new releases and automate standalone installs. Addresses a long-standing community pain point.

3. **[#5852 — Resumable ACP session stream via Last-Event-ID](https://github.com/QwenLM/qwen-code/pull/5852)**  
   Wires `GET /acp` session streams with SSE event IDs so reconnecting clients resume from the last known event. Critical for daemon reliability.

4. **[#5890 — Inject `.qwen/loop.md` task file for `/loop`](https://github.com/QwenLM/qwen-code/pull/5890)**  
   Merged. Long-running `/loop` commands now get a durable, user-editable task file in `.qwen/loop.md`, avoiding model re-statements every tick.

5. **[#5957 — Subtract reserved output tokens from context window for compression](https://github.com/QwenLM/qwen-code/pull/5957)**  
   Direct fix for #5950: ensures `computeThresholds()` accounts for `max_tokens` against the context budget so auto-compression fires before the API rejects. **Open.**

6. **[#5963 — Only spawn memory recall when auto-memory is enabled](https://github.com/QwenLM/qwen-code/pull/5963)**  
   Prevents unnecessary memory recall work when the feature is disabled. Pure performance optimization. **Open.**

7. **[#5928 — `todosDirectory` setting for project-local todo persistence](https://github.com/QwenLM/qwen-code/pull/5928)**  
   Allows todo-write tool output to land in `.qwen/todos` for Git-tracked, team-shareable task state. **Open.**

8. **[#5856 — Voice dictation in the desktop app](https://github.com/QwenLM/qwen-code/pull/5856)**  
   Merged. Brings `/voice` push-to-talk recording UI to the desktop app, matching CLI and Web Shell. Microphone button → recording bar with waveform and timer.

9. **[#5777 — Chrome extension revived via daemon-direct architecture](https://github.com/QwenLM/qwen-code/pull/5777)**  
   Merged. Replaces the old Native Messaging stack with a thin HTTP+SSE client of `qwen serve`. Side panel chat connects directly to the local daemon.

10. **[#5848 — `ui.history.collapsePreviewCount` for collapsed sessions](https://github.com/QwenLM/qwen-code/pull/5848)**  
    When resuming a collapsed session, keeps the last N user turns visible while collapsing the rest. Merged.

---

## Feature Request Trends

1. **Configurable Compaction Model ([#5956](https://github.com/QwenLM/qwen-code/issues/5956))** — Allow users to route auto-compaction summarization to a cheaper model (e.g., "compactionModel" setting), preventing expensive context-window burning.

2. **Inline Model Switching ([#5967](https://github.com/QwenLM/qwen-code/issues/5967))** — Single-command syntax `/model <id> <prompt>` to switch models and send a message in one step, eliminating the current two-step process.

3. **Rust-based Launcher for Resource Isolation ([#5965](https://github.com/QwenLM/qwen-code/issues/5965))** — A call from the community for a Rust-hosted process manager that sets CPU/memory safety boundaries per Qwen instance, enabling 65+ parallel agents on 6GB RAM.

4. **Voice Dictation Everywhere ([#5796](https://github.com/QwenLM/qwen-code/issues/5796))** — Extend `/voice` push-to-talk to Web Shell and desktop UI; currently only CLI supports it.

5. **First-Class Session Resume Without "Continue" ([#4679](https://github.com/QwenLM/qwen-code/issues/4679))** — SDK-level support for resuming an interrupted assistant turn without injecting a synthetic "continue" message into the transcript.

---

## Developer Pain Points

- **Silent Token/Session Leaks** — #5964 (zombie agent) and #5683 (subagent token miscount) show the system lacks guardrails for runaway sessions or inaccurate billing data. Users report surprise credit depletion with no audit trail.

- **UI Unreliability on Patch Releases** — Multiple v0.19.x issues (#5800, #5837, #5941, #5966) report intermittent rendering failures, truncated replies, and Chinese IME breakage. The frequency suggests regression testing gaps.

- **Cost Amplification with API Providers** — #5942 (Anthropic cache misses) and #5950 (context overflow) show that default configurations can inflate API bills 2-3x compared to competitor tools. Developers are actively comparing against Claude Code's cost behavior.

- **Context Window Math Mismatch** — #5950 and #5957 highlight a fundamental arithmetic error: the system doesn't subtract `max_tokens` from context limits before deciding to compress. This causes hard 400 errors that users cannot recover from mid-session.

- **Mobile/IME Neglect** — #5958 (mobile CodeMirror) and #5966 (Chinese IME) suggest cross-platform input handling is an afterthought, affecting a significant portion of the non-English-speaking user base.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-29

## Today's Highlights

The DeepSeek TUI project (now rebranded as **CodeWhale**) saw a massive cleanup day on June 28–29, with **20 issues** and **32 PRs** updated. A major theme is mode system rework: Auto mode was confirmed as a hollow shell (identical to Agent) and deferred to v0.8.67, while Plan mode's write-blocking enforcement was found to be incomplete. On the infrastructure side, a critical prompt-cache hit-rate regression was reported, and a flurry of fixes addressed modal UI breakage, legacy state migration, and YOLO mode safety-floor bypasses.

## Releases

No new releases in the last 24 hours.

## Hot Issues (10 selected)

1. **[#3568 — Plan and agent mode mixed up YET AGAIN](https://github.com/Hmbown/CodeWhale/issues/3568)** (CLOSED)
   Recurring issue where model fails to respect Plan vs Agent mode switching. User provided a chat export showing the agent attempting write operations in Plan mode. 7 comments, community frustrated by repeated regression.

2. **[#3730 — Auto mode: read-only commands flagged DESTRUCTIVE](https://github.com/Hmbown/CodeWhale/issues/3730)** (CLOSED)
   In Auto mode, `codewhale --version` triggers an approval prompt. Highlights fundamental policy mismatch in the mode system. Author (Hmbown) self-filed, fixed same day via PR #3747.

3. **[#3732 — Modal UI/UX broken across ALL modals](https://github.com/Hmbown/CodeWhale/issues/3732)** (OPEN)
   Content bleed-through and action-row truncation in confirmation modals. Affects Plan confirmation and all approval popups. Screenshots show partial masking and missing backdrop.

4. **[#3734 — Plan mode write tools not hard-blocked](https://github.com/Hmbown/CodeWhale/issues/3734)** (CLOSED)
   Plan mode only hard-blocks exec/code/js execution, not write tools (`write_file`, `edit_file`, `apply_patch`). Prompt claims "All writes and patches are blocked" but enforcement is incomplete.

5. **[#3738 — Prompt-cache hit-rate regression (DeepSeek cost up)](https://github.com/Hmbown/CodeWhale/issues/3738)** (OPEN)
   User reports increased costs, likely from per-turn `<turn_meta>` block busting the cacheable prompt prefix. With DeepSeek caching (~10x cheaper cached tokens), this is a significant operational regression.

6. **[#3728 — TUI freezes under many concurrent sub-agents](https://github.com/Hmbown/CodeWhale/issues/3728)** (OPEN)
   ~13 sub-agents + 2 background bash jobs freeze the entire TUI due to event-receiver `RwLock` contention starving the render loop. Observed on v0.8.65, root cause still present on `main`.

7. **[#3724 — Sessions appear lost after upgrade](https://github.com/Hmbown/CodeWhale/issues/3724)** (CLOSED)
   `.deepseek` → `.codewhale` migration silent; old sessions invisible. Three compounding gaps: read-path, session manager, and no fallback. Fixed in PR #3752.

8. **[#3725 — Provider picker: "needs-auth" inaccurate for API-key providers](https://github.com/Hmbown/CodeWhale/issues/3725)** (CLOSED)
   Every API-key provider shows `needs-auth | auth:missing`. Reads as a regression; API keys need different status labels than OAuth.

9. **[#3735 — YOLO mode silently approves publish actions](https://github.com/Hmbown/CodeWhale/issues/3735)** (CLOSED)
   `cargo publish`, `git push --tags` auto-approved in YOLO mode, defeating `safety_floor`'s durable-review intent. Fixed in PR #3737.

10. **[#3657 — Editor Freezes and Crashes CodeWhale](https://github.com/Hmbown/CodeWhale/issues/3657)** (CLOSED)
    Composer freezes entire app when opening external editor via Ctrl+O. Required process kill. Fixed via input pump pausing in PR #3729.

## Key PR Progress (10 selected)

1. **[#3754 — fix(config): surface legacy state migrations](https://github.com/Hmbown/CodeWhale/pull/3754)** (OPEN, newer)
   Adds structured migration event and visible one-time notice when legacy `.deepseek` state is moved to `.codewhale`. Addresses silent migration UX gap.

2. **[#3753 — fix(tui): surface legacy state in doctor](https://github.com/Hmbown/CodeWhale/pull/3753)** (CLOSED)
   `codewhale doctor` now reports legacy-only and dual-root state, with `--json` support. Diagnostic-only, no file operations.

3. **[#3752 — fix(tui): restore legacy session visibility](https://github.com/Hmbown/CodeWhale/pull/3752)** (CLOSED)
   Copies missing entries from `~/.deepseek/sessions` to `~/.codewhale/sessions`. Additive-only, respects `CODEWHALE_HOME`, skips `.git` and `*.tmp` files.

4. **[#3750 — fix(tui): clear modal backdrop centrally](https://github.com/Hmbown/CodeWhale/pull/3750)** (CLOSED)
   Paints opaque backdrop from `ViewStack` before rendering any modal. Fixes content bleed-through across all modals (refs #3732).

5. **[#3748 / #3749 — feat: add Sakana AI Fugu provider](https://github.com/Hmbown/CodeWhale/pull/3748)** (CLOSED)
   Community contribution (@lerugray) adding Sakana AI as a built-in provider. Supports `FUGU_API_KEY`/`SAKANA_API_KEY`, aliases, streaming, reasoning variant.

6. **[#3747 — fix(tui): label readonly shell approvals calmly](https://github.com/Hmbown/CodeWhale/pull/3747)** (CLOSED)
   Uses strict read-only shell classifier for approval modal routing. Marks `codewhale --version` as read-only. Fixes #3730.

7. **[#3745 — fix(tui): show cache telemetry route](https://github.com/Hmbown/CodeWhale/pull/3745)** (CLOSED)
   Records provider/model route per turn in cache telemetry. Adds route column to `/cache` display. Helps diagnose #3738.

8. **[#3744 — fix(tui): close deferred auto mode leaks](https://github.com/Hmbown/CodeWhale/pull/3744)** (CLOSED)
   Maps legacy `auto` overrides to Agent; makes destructive approval modal policy copy mode-neutral. Part of Auto mode deferral.

9. **[#3742 — fix(tui): split trust from approval bypass](https://github.com/Hmbown/CodeWhale/pull/3742)** (CLOSED)
   Stops treating workspace trust as authority to auto-resolve tool approvals. Keeps trust mode in distinct lane for full-access retry only.

10. **[#3723 — refactor(mcp): extract streamable HTTP transport](https://github.com/Hmbown/CodeWhale/pull/3723)** (CLOSED)
    Moves `StreamableHttpTransport` into dedicated module (`mcp/streamable_http.rs`). Part of ongoing MCP transport modularization (#3310).

## Feature Request Trends

- **Provider expansion**: Two new providers requested/added this cycle — **Neuralwatt** (popular GLM 5.2, innovative pricing) and **Sakana AI Fugu** (community-contributed, landed in PR #3748).
- **Localization**: Next-wave README/website locales for Korean, Spanish, and Brazilian Portuguese tracked in [#3093].
- **Verifier preview system**: Emitting hunt verdicts (pass/partial/fail → hunted/wounded/escaped) for auto-spawning verification sub-agents, being wired in [#2093] and config table added in [#3721].
- **Hotbar customization**: Fully customizable hotbar with visible key chords and clear activation UI, deferred to v0.8.67 ([#3731]).

## Developer Pain Points

1. **Mode system confusion**: Persistent mode mixing (Plan vs Agent vs Auto) is the #1 source of bugs. Auto mode was found to be identical to Agent, and Plan mode's write-blocking was incomplete. The permission model carries four overlapping knobs needing simplification ([#3736]).

2. **Silent state migration**: `.deepseek` → `.codewhale` rebrand caused session loss for upgraders with zero diagnostics. Multiple issues filed about invisible migrations, orphaned legacy state, and missing fallback paths.

3. **Prompt cache regressions**: DeepSeek context caching hit-rate regression causing real cost increases. Per-turn `<turn_meta>` block suspected of busting cacheable prefix — a subtle but expensive bug.

4. **TUI stability under load**: Sub-agent concurrency freezes the TUI due to `RwLock` contention. External editor invocations crash the entire process. Modal rendering is broken across all dialogs.

5. **False safety classifications**: Read-only commands flagged as destructive; YOLO mode bypasses publish-action safety floors. The safety floor classifier needs better granularity between benign and destructive operations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*