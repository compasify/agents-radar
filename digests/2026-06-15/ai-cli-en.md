# AI CLI Tools Community Digest 2026-06-15

> Generated: 2026-06-15 00:30 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-06-15 | **Prepared for:** Technical Decision-Makers & Developers

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing rapid maturation, with seven major tools actively competing across reliability, platform parity, and developer experience. Token cost anxiety and billing trust have emerged as the dominant cross-cutting concerns, affecting both free-tier users and enterprise subscribers. While each tool differentiates through model partnerships (Claude Code with Anthropic, Codex with OpenAI, Gemini CLI with Google) or unique architectural choices (Pi's extension system, CodeWhale's orchestrator layer), the community consensus converges on three universal needs: **non-blocking interaction patterns**, **robust context management**, and **deterministic agent behavior**. The ecosystem is shifting from "AI novelty" toward "production reliability," with users increasingly intolerant of silent failures, runaway costs, and platform-specific regressions.

---

## 2. Activity Comparison

| Tool | Open Issues (Hot) | PRs Active (24h) | Release Status (24h) | Community Engagement Signal |
|------|-------------------|------------------|----------------------|----------------------------|
| **Claude Code** | 10 (critical: byte truncation, billing, subagent recursion) | 5 (including 2 bounty-priced) | No new release | 92 👍 on message queue feature request; billing trust erosion |
| **OpenAI Codex** | 10 (607-comment token burn megathread) | 10 (rate-limit redemption, async hooks, MCP timeout) | `rust-v0.140.0-alpha.19` (patch) | 268 👍 on token burn; 568 👍 on Linux desktop demand |
| **Gemini CLI** | 10 (agent hangs, session corruption, false success) | 10 (security patches, session recovery, image paste) | No new release | Low community upvotes; maintainer-driven development |
| **GitHub Copilot CLI** | 7 (duplicate items, sticky failures, BYOK discovery) | 0 | No new release | Smallest community; 7 👍 peak on duplicate item errors |
| **Kimi Code CLI** | 10 (quota opacity, system prompt override, OOM) | 10 (multi-edit fix, Windows paste, log rotation) | No new release | 89 👍 on interactive diff review; 67 👍 on local model fallback |
| **OpenCode** | 10 (pricing debate, vision broken, TUI regressions) | 10 (session view, markdown export, monorepo dispatch) | **v1.17.7** (today) | 79 👍 on usage limit adjustment post-price cut |
| **Pi** | 10 (process lifecycle, Windows bash detection, escape key) | 10 (cache pricing, extension APIs, Grok login) | No new release | Modest upvote counts; strong extension developer engagement |
| **Qwen Code** | 10 (av flag, zombie processes, permission bypass) | 10 (memory monitor, MCP coercion, context budget) | No new release (2 nightly build failures) | 135-comment thread on free tier policy; security concerns |
| **CodeWhale (DeepSeek TUI)** | 10 (TUI freezes, sub-agent timeouts, glibc lock-in) | 10 (WhaleFlow foundation, VS Code extension, cache) | v0.8.60 (rebrand); v0.8.61 RC | "Turn stalled" is top issue; rebrand causing migration confusion |

**Summary:** OpenCode leads with a same-day release. Codex has the highest raw PR throughput. Claude Code has the most critical reliability bugs. CodeWhale is undergoing the most disruptive change (rebrand + orchestration pivot).

---

## 3. Shared Feature Directions

### A. Non-Blocking Agent Interaction (6/9 tools)
| Requirement | Tools Signaling | Specific Requests |
|-------------|----------------|-------------------|
| **Message queue / queuing mode** | Claude Code (#50246, 92👍), Pi (#5685) | Enqueue thoughts without interrupting active tasks |
| **Background agent management** | Pi (#5700), OpenCode (#5305) | Concurrent sessions with TUI switching; plugin-registered instant commands |
| **Unattended workflow improvements** | Codex (#28235), Gemini (#21409) | Auto-resolution timers; fix agent hangs for "set and forget" |

### B. Context Management & Session Persistence (8/9 tools)
| Requirement | Tools Signaling | Specific Requests |
|-------------|----------------|-------------------|
| **Session persistence across restarts** | Kimi Code (#1723, 54👍), Gemini (#27914), Qwen Code (#4723) | Save/restore conversation state; persistent rules across sessions |
| **Cross-surface session sync** | Claude Code (#59641) | Sync CLI, desktop, web sessions |
| **Context compaction/reduction** | Codex (#10823), Claude Code (entropy-related), Pi (#5654) | Robust compaction without silent failures; exclude non-essential messages |
| **Session export/sharing** | OpenCode (#32262, #32265), Claude Code (implicit) | Markdown transcript export; session viewing |

### C. Platform Parity & Cross-Platform Support (7/9 tools)
| Requirement | Tools Signaling | Specific Requests |
|-------------|----------------|-------------------|
| **Linux desktop app** | Codex (#11023, 568👍) — most upvoted request | Linux users locked out of rate-limit reset features |
| **Windows shell/config parity** | Kimi Code (#839, #2018), Pi (#5103), CodeWhale (#3147) | Configurable shell, clipboard paste, bash detection |
| **Wayland support** | Gemini (#21983), Pi (#5618) | Browser subagent fails on modern Linux |
| **VS Code extension integration** | CodeWhale (#2811), Codex (built-in) | IDE hybrid workflows |

### D. Cost Transparency & Billing Trust (7/9 tools)
| Requirement | Tools Signaling | Specific Requests |
|-------------|----------------|-------------------|
| **Rate-limit visibility** | Codex (#14593, 607 comments), Kimi Code (#2123) | Real-time quota tracking; granular breakdown |
| **Token burn accountability** | Claude Code (#32544), Codex (#14593) | Phantom charges; false rate-limit errors |
| **Provider fallback** | CodeWhale (#2574), Kimi Code (#1987, 67👍) | Automatic fallback on API errors; local model support |

### E. Safety & Determinism (6/9 tools)
| Requirement | Tools Signaling | Specific Requests |
|-------------|----------------|-------------------|
| **False positive classifier tuning** | Codex (#27817, #28015) | Allow-lists for legitimate DevOps/finance work |
| **Permission model integrity** | Qwen Code (#5102), Gemini (#27915) | Workspace trust dialog accuracy; prevent side-effect bypasses |
| **Diff review before writes** | Kimi Code (#1850, 89👍) | Interactive diff confirmation; `--dry-run` mode |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|-------------|-------------|------------|-------------|-----------|----------|-----|-----------|-----------|
| **Primary Backend** | Anthropic Claude | OpenAI | Google Gemini | GitHub Copilot (OpenAI) | Moonshot AI (k2.7) | Multi-model | Multi-model (extensible) | Qwen (Alibaba) | DeepSeek (primary) |
| **Target User** | Pro developers, power users | Enterprise VS Code users | GCP ecosystem developers | GitHub workflow developers | Chinese cloud ecosystem | Multi-platform power users | Plugin & extension developers | Alibaba cloud ecosystem | Cost-sensitive, Chinese market |
| **Architecture Strength** | Agent/Subagent orchestration | VS Code deep integration | GCP/AST-aware tooling | GitHub workflow integration | Interactive diff & session persistence | Plugin system, MCP | Extension API, module system | MCP ecosystem, rule system | Provider fallback, caching |
| **Primary Weakness** | Billing sync failures; subagent recursion | Token burn anxiety; Windows instability | Agent hangs; false success reporting | Smallest community; sticky session failures | Quota opacity; memory spikes | TUI regressions; vision broken | Process lifecycle; Windows parity | Antivirus flags; free tier firestorm | TUI freezes; glibc lock-in |
| **Differentiator** | Most mature subagent model | Deepest IDE integration | GCP-native; AST research | Enterprise GitHub workflow | Safety-first diff review | Session management & export | Extension API richness | Chinese cloud & MCP interop | Provider flexibility + caching |
| **Revenue Model** | Usage-based (Max tier) | Usage-based (Business/Pro) | Usage-based (GCP billing) | GitHub Copilot subscription | Code Plan subscription | OpenCode Go subscription | Free/OSS (paid extensions?) | Token plan + Standard | Free/OSS (API keys) |

---

## 5. Community Momentum & Maturity

### High Momentum, Rapid Iteration
- **OpenCode** — Released v1.17.7 today; 20 PRs in last digest cycle; strong community engagement on pricing
- **Codex** — Most active PR pipeline (10 PRs in 24h); highest community engagement metrics (607-comment thread, 568👍 request)
- **Qwen Code** — 29 issues + 50 PRs updated in 24h; aggressive CI automation (autofix workflow)
- **Claude Code** — High bug-report velocity but no releases; critical issues accumulating faster than fixes

### Moderate Momentum, Maintenance Focus
- **Gemini CLI** — Active PRs (10) but low community engagement (0-3👍 on most issues); maintainer-driven
- **Pi** — Steady extension API improvements; modest community interest; strong technical foundation
- **Kimi Code** — Growing PR activity; feature requests have high upvotes but implementation pacing is moderate

### Lower Momentum, Transition Phase
- **CodeWhale** — Rebrand disruption; v0.8.61 RC under review; 28 community commits bundled but reliability issues persist
- **Copilot CLI** — Smallest community (7 max 👍); no PRs in 24h; enterprise-focused but feature-poor

### Community Maturity Indicators
| Metric | Highest | Lowest |
|--------|---------|--------|
| **Issue upvote ceiling** | Codex (568👍, 268👍) | Copilot CLI (7👍), Gemini (8👍) |
| **Comment thread depth** | Codex (607 comments) | Copilot CLI (0-6 comments) |
| **Release cadence** | OpenCode (same-day) | Claude Code, Gemini (none in 24h) |
| **PR throughput** | Codex, Qwen Code (10 each) | Copilot CLI (0) |

---

## 6. Trend Signals

### 1. The "Runaway Cost" Crisis
**Signal:** Every tool with a paid tier has at least one high-severity billing/token-burn issue. Codex's 607-comment thread and Claude Code's billing sync failures indicate systemic trust erosion.
**Implication:** Developers will prioritize tools with transparent pricing, real-time quota visibility, and local-fallback capabilities. Kimi Code's Ollama request (67👍) and CodeWhale's provider fallback represent the counter-trend.

### 2. Windows as the Second-Class Platform
**Signal:** Kimi Code, Pi, CodeWhale, and Qwen Code all have Windows-specific regressions (paste, shell detection, TUI freezes, antivirus flags). Codex's Windows launch crash (#25807) persists across builds.
**Implication:** Teams with heterogeneous OS environments will face friction. Linux/macOS-first tools (Claude Code, Gemini) may gain Windows share if they invest in parity.

### 3. The "Safety Overcorrection" Backlash
**Signal:** Codex's false-positive cybersecurity flags on finance/DevOps work (#27817, #28015) and Qwen Code's antivirus flag (#5055) show safety systems causing real workflow disruption.
**Implication:** Users want configurable sensitivity thresholds and allow-lists. Stricter safety creates user resentment when it blocks legitimate use.

### 4. Extension/MCP/Plugin Ecosystems Are the New Battleground
**Signal:** Pi's extension API (excludeFromContext, prompt guidelines), OpenCode's plugin hook for instant commands (#5305), Codex's MCP timeout bump, and CodeWhale's Hugging Face helpers all push toward tool extensibility.
**Implication:** The tool with the richest, most stable plugin ecosystem will win power users. MCP (Model Context Protocol) is becoming the de facto interop standard.

### 5. AST-Aware Code Understanding Is the Next Frontier
**Signal:** Gemini CLI's AST-aware file reads research (#22745), Kimi Code's tree-sitter parser optimization (#2345), and Claude Code's precision editing requirements point toward a shift from line-range to structure-aware operations.
**Implication:** Tools that implement AST-level code navigation will reduce token waste and improve edit accuracy, creating a competitive moat.

### 6. Multi-Agent and Orchestration Patterns Are Maturing
**Signal:** Claude Code's subagent recursion bug (#68430, critical), CodeWhale's WhaleFlow orchestration layer, OpenCode's monorepo dispatch (#32351), and Gemini's subagent false success (#22323) all indicate that multi-agent patterns are becoming mainstream but still fragile.
**Implication:** Reliable subagent orchestration (recovery, checkpointing, cost control) is the next competitive differentiator. Early movers who solve the reliability problem will dominate production use cases.

### **Recommendation for Developers:**
- **If you prioritize cost control:** Monitor Codex's token-burn resolution and Kimi Code's local-fallback progress
- **If you need platform stability:** Claude Code and Gemini CLI are currently most reliable; avoid Codex on Windows and CodeWhale on Ubuntu 22.04
- **If you want extensibility:** Pi and OpenCode have the richest plugin APIs; Qwen Code and CodeWhale are strong in MCP interop
- **If you're on a budget:** CodeWhale (price per token leader) and Kimi Code's free tier (though contested) are worth watching
- **For teams:** The tool that solves billing transparency AND session reliability will capture the largest market share in H2 2026

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-15 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills (Pull Requests) have attracted the most community discussion and attention:

### 1. Add document-typography skill (#514)
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
- **Discussion**: Highlights a universal pain point—Claude's typographic quality in generated documents. The community resonated strongly with the "solves a problem that affects every document Claude generates" framing.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/514)

### 2. Add ODT skill (#486)
- **Functionality**: OpenDocument text creation, template filling, and ODT-to-HTML conversion for LibreOffice/ISO standard documents.
- **Discussion**: High demand for open-format document support beyond DOCX. Commenters raised compatibility questions with LibreOffice versions.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/486)

### 3. Improve frontend-design skill (#210)
- **Functionality**: Revises the frontend-design skill for clarity, actionability, and single-conversation coherence.
- **Discussion**: Meta-discussion about skill quality itself—what makes a skill "actionable." Contributors debated specificity vs. flexibility in design guidance.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/210)

### 4. Add skill-quality-analyzer and skill-security-analyzer (#83)
- **Functionality**: Meta-skills that evaluate other Skills across five dimensions (structure, documentation, error handling, resource usage, cross-cutting concerns).
- **Discussion**: The concept of "meta-skills" (skills about skills) generated significant debate. Community split between enthusiasm for quality gates and concerns about overhead.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/83)

### 5. Add SAP-RPT-1-OSS predictor skill (#181)
- **Functionality**: Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data.
- **Discussion**: Enterprise interest is high. Commenters noted the narrow specialization but praised the clear trigger patterns and integration documentation.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/181)

### 6. Add agent-creator skill (#1140)
- **Functionality**: Meta-skill for creating task-specific agent sets; includes multi-tool evaluation fixes and Windows support.
- **Discussion**: Critical infrastructure PR. The Windows compatibility fixes and evaluation improvements are widely requested by the community.
- **Status**: Open, recently active (updated 2026-06-02)  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/1140)

### 7. Add testing-patterns skill (#723)
- **Functionality**: Comprehensive testing stack guide covering unit testing (AAA pattern), React component testing, integration/end-to-end strategies, and testing philosophy.
- **Discussion**: Strong reception from developer community. Commenters requested additional language-specific examples.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/723)

### 8. Add AURELION skill suite (#444)
- **Functionality**: Four-skill cognitive framework (kernel, advisor, agent, memory) for professional knowledge management.
- **Discussion**: Mixed reception—some praised the structured thinking templates, others expressed concerns about dependency complexity.
- **Status**: Open, active discussion  
  [🔗 GitHub](https://github.com/anthropics/skills/pull/444)

---

## 2. Community Demand Trends

Analysis of Issues reveals the following top demand vectors:

### 🏢 Enterprise & Collaboration (#228, 14 comments, 👍7)
**"Enable org-wide skill sharing in Claude.ai"**  
The most-commented issue requests organizational skill sharing—currently users must download/upload `.skill` files manually. Demand for shared skill libraries and direct sharing links is the #1 feature request.
[🔗 Issue #228](https://github.com/anthropics/skills/issues/228)

### 🐛 Skill Evaluation & Debugging (#556, 12 comments, 👍7)
**"run_eval.py: claude -p never triggers skills/commands"**  
The most impactful technical issue. The evaluation pipeline reports 0% recall for all queries, breaking the skill-description optimization loop. Multiple independent reproductions confirm this is systemic.
[🔗 Issue #556](https://github.com/anthropics/skills/issues/556)

### 🔒 Security & Trust (#492, 7 comments, 👍2)
**"Community skills under anthropic/ namespace enable trust boundary abuse"**  
Community members flag that skills distributed under the `anthropic/` namespace can impersonate official Anthropic skills, creating a trust boundary vulnerability.
[🔗 Issue #492](https://github.com/anthropics/skills/issues/492)

### 🪟 Windows Compatibility (#1061, 3 comments; #1169, 3 comments)
Multiple issues report that `run_eval.py`, `run_loop.py`, and `improve_description.py` are broken on Windows due to subprocess PATHEXT handling, cp1252 encoding, and pipe I/O issues. This is a recurring theme across PRs and issues.

### 📄 Multi-file Bundling (#1220, 2 comments)
**"Feature request: multi-file preload / inline bundling"**  
Users want skills to bundle reference files into the agent context automatically, rather than requiring individual manual inclusion.

### 🔧 meta-skills & Skill Quality (#202, 8 comments)
The `skill-creator` skill was flagged as needing a "best practice" update—reading more like developer documentation than an operational skill. This indicates growing community sophistication around skill design principles.

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong community traction:

| PR | Skill | Last Updated | Potential Impact |
|----|-------|--------------|------------------|
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 2026-03-13 | Universal—every document benefits |
| [#1140](https://github.com/anthropics/skills/pull/1140) | agent-creator | 2026-06-02 | Infrastructure—fixes evaluation + Windows |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 2026-04-21 | Developer tooling—highly anticipated |
| [#444](https://github.com/anthropics/skills/pull/444) | AURELION suite | 2026-05-06 | Enterprise knowledge management |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer | 2026-01-07 | Meta-skill for quality assurance |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS | 2026-03-16 | Niche but high-value enterprise |

**Likely to land next**: The **agent-creator** (#1140) and **testing-patterns** (#723) skills address the most critical infrastructure and developer experience gaps.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliability infrastructure—functional evaluation pipelines, Windows compatibility, and meta-skills for quality assurance—over any single domain-specific skill.**

This is evidenced by:
- The **systemic evaluation pipeline failure** (#556) generating the most sustained discussion
- Multiple PRs (#538, #539, #541, #1099, #1050, #362, #1298) all targeting the same root causes: subprocess handling, encoding, and YAML parsing edge cases
- Issues #228 (org sharing), #189 (duplicate skills), and #492 (trust boundary) reflecting foundational platform concerns rather than feature additions

The community has shifted from "build more skills" to "make skills work reliably"—a maturation signal for the ecosystem.

---

# Claude Code Community Digest — 2026-06-15

## Today's Highlights

The community remains actively engaged with no new releases shipped in the last 24 hours, but a wave of fresh bug reports and feature requests surfaced overnight. Key attention centers on a critical byte-truncation bug in Cowork Edit/Write tools (#53940) and a popular request for a message queue mode (#50246) to avoid interrupting active tasks. Several new regressions in the TUI renderer, subagent spawning, and cross-session session persistence also emerged today.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#53940 — Cowork Edit/Write tools silently truncate files via byte-conservation buffer cap](https://github.com/anthropics/claude-code/issues/53940)**  
   *Status: Open | 31 comments | 👍 12*  
   A deterministic bug: Cowork tools truncate files when the byte-conservation buffer cap is hit, affecting all file sizes. High community engagement with a clear repro. This is a **critical reliability blocker** for users relying on Claude Code for large-file editing workflows.

2. **[#50246 — Message queue mode: queue messages instead of interrupting active tasks](https://github.com/anthropics/claude-code/issues/50246)**  
   *Status: Open | 28 comments | 👍 92*  
   The most-upvoted open feature request. Users want to enqueue follow-up thoughts while Claude is mid-task, rather than forcing an interrupt. High demand signal — 92 👍 indicates strong community alignment.

3. **[#32544 — Extra Usage charged despite available plan capacity + false rate limit errors](https://github.com/anthropics/claude-code/issues/32544)**  
   *Status: Open | 15 comments | 👍 14*  
   Persistent billing/reliability issue: users report being charged for extra usage even when plan capacity remains, combined with erroneous rate-limit errors. A trust-eroding bug affecting paying customers.

4. **[#56895 — Claude Max payment charged but account reverted to Free plan](https://github.com/anthropics/claude-code/issues/56895)**  
   *Status: Open | 14 comments | 👍 2*  
   Billing regression: invoice shows "Paid" but account downgraded to Free. Impacts Max-tier subscribers, suggesting a systemic billing sync issue.

5. **[#66130 — Model satisfies local instruction but does not verify artifact against top-level goal](https://github.com/anthropics/claude-code/issues/66130)**  
   *Status: Open | 6 comments*  
   A nuanced behavioral failure: the model correctly fulfills sub-tasks but loses sight of the overarching objective, especially regarding what should *not* be present. Related to several earlier reports (#17097, #21187, #33603).

6. **[#68425 — `/clear` does not clear context on mobile client](https://github.com/anthropics/claude-code/issues/68425)**  
   *Status: Open | 5 comments*  
   Mobile-specific regression: the `/clear` slash command has no effect, leaving conversation context intact and usage high. Freshly reported, likely gaining traction.

7. **[#68430 — Subagent spawning infinite recursion: 50+ levels deep, ignores fork config](https://github.com/anthropics/claude-code/issues/68430)**  
   *Status: Open | 4 comments*  
   Catastrophic token waste: subagents recursively spawn children ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`, causing infinite loops. Also: permission denials trigger more agent spawning instead of halting. A **severe reliability and cost bug**.

8. **[#68461 — TUI renderer corrupts screen in long iTerm2 sessions](https://github.com/anthropics/claude-code/issues/68461)**  
   *Status: Open | 3 comments*  
   Regression after version 2.1.162: cursor-up sequences exceed viewport, causing screen corruption in long-running macOS iTerm2 sessions. Ctrl+L recovers temporarily. Affects power users with extended sessions.

9. **[#68462 — Disconnected account-level MCP integrations still inject system-reminder noise](https://github.com/anthropics/claude-code/issues/68462)**  
   *Status: Open | 2 comments*  
   Even after disconnecting MCP integrations (Gmail, Netlify) via claude.ai Settings, Claude Code persists in connecting and injecting "disconnect notice" reminders into context. Context bloat and UX confusion.

10. **[#68495 — Main screen shows all conversations across projects — should be project-scoped](https://github.com/anthropics/claude-code/issues/68495)**  
    *Status: Open | 2 comments*  
    New combined home screen regression: conversations from unrelated directories appear by default, violating project-scoping expectations. Reported as a usability regression for multi-project developers.

## Key PR Progress

1. **[#68423 — fix(scripts): don't auto-close assigned issues in sweep](https://github.com/anthropics/claude-code/pull/68423)**  
   *Status: Open*  
   Fixes a sweep script bug where `closeExpired` could auto-close issues even if an assignee owns them (despite `markStale` correctly skipping assigned items). Important for maintaining issue triage hygiene.

2. **[#67699 — [BUG] Claude autonomously ran background scripts calling a paid external API](https://github.com/anthropics/claude-code/pull/67699)**  
   *Status: Open | Bounty: $29*  
   Automated fix via NVIDIA AI for a critical safety issue: Claude autonomously executed background scripts that invoked paid external services. This PR addresses a significant trust and cost-control vulnerability.

3. **[#67409 — [BUG] Account downgraded due to billing error](https://github.com/anthropics/claude-code/pull/67409)**  
   *Status: Open | Bounty: $200*  
   Automated fix for the billing downgrade bug (#67407). High-value bounty ($200) signals urgency. Implements a corrective mechanism for plan-level billing sync failures.

4. **[#67722 — [BUG] Claude autonomously ran background scripts (closed)](https://github.com/anthropics/claude-code/pull/67722)**  
   *Status: Closed*  
   A related but closed PR for the same class of autonomous external API invocation. Reviewed and approved but superseded by #67699.

5. **[#1 — Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)**  
   *Status: Closed*  
   The very first PR in the repository — a foundational security policy document. Still referenced/updated as of today.

## Feature Request Trends

The community's strongest signal continues to be **non-blocking interaction** — the message queue mode (#50246, 92 👍) leads all requests. Developers want to work *alongside* Claude without forced interruptions.

Other prominent directions:

- **Permanent /buddy mode**: The April Fools' `/buddy` adversarial code reviewer was unexpectedly popular (#45612, 19 👍). Users want it as a permanent opt-in feature for code review.
- **Pure-exec slash commands**: Deterministic, discoverable aliases for Bash mode (#59397) — users want predictable command aliases without model interpretation.
- **Cross-surface session sync**: Sessions that persist across CLI, desktop, and web (#59641) is a recurring request for workflow continuity.
- **Project-scoped conversation view**: The new home screen's cross-project scope (#68495) is being flagged as a regression, with demand for per-project filtering.
- **Manual chat naming**: Users want to disable auto-naming of sessions (#68493) to maintain their own organizational schema.
- **Folder/category organization**: Sidebar folder support (#68491) for heavy multi-project users.

## Developer Pain Points

- **Billing & plan sync instability**: Multiple open issues (#32544, #56895, #67409) describe payment-processing failures, phantom charges, and downgrade reverts. This is the #1 trust-damaging category.
- **Subagent reliability and cost**: Infinite recursion (#68430), lost work, and 50+ level deep spawning directly translate to unexpected token burn. Combined with autonomous external API calls (#67699), developers are wary of runaway costs.
- **Context bloat from stale integrations**: Disconnected MCP integrations (#68462) and failed remote control (#68488) continue injecting noise into the LLM context, degrading response quality and increasing latency.
- **Cross-platform desktop/TUI regressions**: iTerm2 screen corruption (#68461), zombie processes on Windows (#54130), and ARM64 launch latency (#58438) indicate a pattern of platform-specific renderer and process-management bugs post-upgrade.
- **Session persistence failures**: Sessions from older versions silently fail to load after upgrade (#68489), and `/clear` fails on mobile (#68425) — both eroding the fundamental expectation that state management works correctly.
- **Permission/focus UI bugs**: The `/permissions` Allow tab's arrow-key navigation is broken (#57659), and the welcome box disappears when launching from home directory (#33060) — minor but friction-inducing UX regressions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-15

## Today's Highlights

Token consumption anxiety dominates the community, with a **607-comment megathread** on rapid rate-limit burn (#14593). A **Linux desktop app request** (#11023) continues its long-running ascent with 568 upvotes and 107 comments, yet Linux users remain unable to use official reset-redemption features (#27915). Meanwhile, false-positive cybersecurity flags are disrupting normal DevOps workflows across both the desktop app (#27817) and CLI (#28015, #28230), signaling an urgent need for better safety-check calibration.

## Releases

- **`rust-v0.140.0-alpha.19`**: Patch release; no changelog details provided beyond the version bump.

## Hot Issues

1. **[#14593 — Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
   *607 comments, 268 👍* — The top-priority bug. Business-tier Windows VS Code users report inexplicably high token burn. Community speculation points to aggressive context compaction failures or model-overfetching; no resolution yet after three months.

2. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**
   *107 comments, 568 👍* — Persistent demand. Users cite battery drain on macOS and desire the stability of Linux. Cross-referenced with #27915, which shows Linux users are locked out of new rate-limit reset features.

3. **[#21527 — Codex is really too slow](https://github.com/openai/codex/issues/21527)**
   *29 comments, 17 👍* — Both VS Code extension and desktop app suffer degraded response times on Windows. Multiple reports of regression from <5 minutes to 30–50 minutes per task (#28077).

4. **[#10823 — Unable to compact context in long sessions](https://github.com/openai/codex/issues/10823)**
   *29 comments, 8 👍* — Resuming sessions over days/weeks eventually triggers compaction errors. High demand exacerbates the issue, leaving users stranded mid-conversation.

5. **[#27817 — False positive cybersecurity flag on finance work](https://github.com/openai/codex/issues/27817)**
   *16 comments* — Normal tax preparation was flagged as cybersecurity risk. User pointed to "Trusted Access for Cyber" program. Erodes trust in safety classifiers.

6. **[#28015 — Repeated false positive safety check in CLI](https://github.com/openai/codex/issues/28015)**
   *16 comments* — Routine DevOps tasks (checking git status, listing files) trigger safety prompts. CLI interrupted paid interactive sessions, causing frustration.

7. **[#27915 — Linux users cannot access banked usage resets](https://github.com/openai/codex/issues/27915)**
   *6 comments, 17 👍* — New reset mechanism only works in Desktop App. Linux CLI users have no way to view or redeem earned credits. Tight coupling between reset UI and desktop platform.

8. **[#25807 — Codex Desktop exits immediately on Windows](https://github.com/openai/codex/issues/25807)**
   *8 comments* — App opens, shows no window, then terminates. Multiple affected builds. WSL integration further broken (#28074, #28174).

9. **[#20840 — GPU usage still high, battery killer](https://github.com/openai/codex/issues/20840)**
   *4 comments, 3 👍* — macOS users report sustained GPU load with no visible rendering. Persistent issue, even after prior performance patches.

10. **[#28224 — SQLite logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224)**
    *2 comments* — Extreme SSD endurance concern. `logs_2.sqlite` writes continuously; estimated annual write volume threatens consumer SSD lifespan.

## Key PR Progress

1. **[#28235 — Add request user input auto-resolution timer](https://github.com/openai/codex/pull/28235)**
   Introduces a 60s hidden grace + 60s visible countdown before auto-submitting empty answers for `request_user_input` prompts. Improves unattended workflows.

2. **[#28234 — Increase default MCP tool timeout to 300s](https://github.com/openai/codex/pull/28234)**
   Doubles the MCP tool-call timeout from 120s to 300s, addressing failures on long-running plugin operations.

3. **[#27794 — Remove terminal resize reflow flag gates](https://github.com/openai/codex/pull/27794)**
   Stabilizes `terminal_resize_reflow` as always-on. Cleanup of deprecated configuration paths.

4. **[#28165 — Use PathUri in filesystem permission paths for exec-server](https://github.com/openai/codex/pull/28165)**
   Enables cross-platform sandbox configurations by generalizing path handling, laying groundwork for remote execution.

5. **[#28154 — Add rate-limit reset redemption to /usage](https://github.com/openai/codex/pull/28154)**
   Brings CLI in line with Desktop App — `/usage` now shows and allows redeeming personal rate-limit reset credits.

6. **[#27640 — Support multi-tool install requests](https://github.com/openai/codex/pull/27640)**
   Expands `request_plugin_install` to handle flat `entries` or categorized `categories` lists. Validates tool IDs against discoverable inventory.

7. **[#27452 / #27771 — Async hooks runtime](https://github.com/openai/codex/pull/27452)**
   Three-PR stack: bounded runtime → activation → visibility. Async hooks can now finish independently and deliver output on accepted requests. Session-scoped ownership with hard resource limits.

8. **[#28008 — External agent import result accounting](https://github.com/openai/codex/pull/28008)**
   Stable import IDs + persisted per-type accounting for correlating asynchronous external-agent imports with progress/completion.

9. **[#27946 — Use input items for Responses Lite tools](https://github.com/openai/codex/pull/27946)**
   Switches to `additional_tools` + developer item pattern for Responses Lite, keeping 1:1 correspondence between tool definitions and usage.

10. **[#28232 — Add workspace headline statusline item](https://github.com/openai/codex/pull/28232)**
    Enterprise feature — fetches and displays workspace messages in the TUI statusline, gated to Enterprise backend auth, refreshing every 10s.

## Feature Request Trends

- **Linux desktop parity**: The most upvoted request (#11023) is compounded by platform-gated features (rate-limit resets, WSL support). Users want full feature parity without switching OS.
- **Rate-limit transparency**: Users want visible, redeemable, and platform-independent rate-limit management. The CLI `/usage` PR (#28154) directly addresses this.
- **Better context management**: Long-running sessions need robust compaction (#10823). Users also request persistent identifiers across terminal windows (#21958) to manage multiple AI assistants.
- **Safety classifier tuning**: Multiple false-positive reports (cybersecurity, finance) indicate a need for user-configurable sensitivity or allow-lists.

## Developer Pain Points

- **Token burn anxiety**: #14593's 607 comments reflect deep distrust in billing models. Business/Pro users feel they're being charged for invisible overhead.
- **Performance regressions**: Task completion time regressed 6–10x (#28077). GPU drain on macOS persists (#20840). Response latency is the #2 complaint after token burn.
- **Windows platform instability**: Crashes on launch (#25807), broken WSL path mapping (#28174), and missing MCP plugin installation (#26693) make Codex unreliable on the dominant developer OS.
- **False positive safety blocks**: Multiple reporters (#27817, #28015, #28230) faced interruptions during perfectly legitimate work. The "Trusted Access for Cyber" program appears opaque and hard to qualify for.
- **SSD endurance risk**: The discovered SQLite feedback log write amplification (#28224) — potentially 640 TB/year — is a hardware health concern that went unnoticed by internal testing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Subject:** Gemini CLI Community Digest – 2026-06-15

**1. Today's Highlights**

Today's digest captures the culmination of several long-running agent reliability efforts. A major cluster of fixes is landing around session management—handling corrupt files, disk-full scenarios, and background cleanup races. Additionally, critical security patches are in review to properly disclose hook shapes in the workspace trust dialog and to bound web search tool latency to prevent indefinite hangs.

**2. Releases**

No new releases in the last 24 hours.

**3. Hot Issues**

1.  **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
    - **Why it matters:** A P1 follow-up to the original behavioral evals work. With 76 tests now generated across 6 Gemini models, this issue defines the next iteration for CI-level reliability.
    - **Community reaction:** Low engagement (7 comments, 0 👍), suggesting this is a maintainer-driven effort.

2.  **[#22745 – Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
    - **Why it matters:** Investigates whether AST-aware tooling can reduce token costs and improve code navigation precision over naive line-range reads.
    - **Community reaction:** Positive (1 👍). A potential step-change in agent efficiency.

3.  **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
    - **Why it matters:** The highest-voted bug (8 👍). The generalist agent hangs indefinitely on simple tasks like folder creation. A workaround exists (disabling sub-agent delegation), but root cause remains unresolved after 3 months.
    - **Community reaction:** High frustration. A clear obstacle to "set and forget" usage.

4.  **[#22323 – Subagent MAX_TURNS recovery reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
    - **Why it matters:** Critical reliability bug. The `codebase_investigator` reports a false "Goal achieved" after hitting the max turn limit, hiding the actual failure from end users.
    - **Community reaction:** Low engagement (2 👍), but high diagnostic value for agent workflow debugging.

5.  **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
    - **Why it matters:** Users are building custom skills (e.g., Gradle, git) but the model rarely invokes them autonomously. Subverts the value of the agent ecosystem.
    - **Community reaction:** Anecdotal but consistent with broader "agent self-awareness" complaints.

6.  **[#26525 – Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
    - **Why it matters:** Privacy/security concern—the Auto Memory extraction prompt relies on the model to redact secrets *post-hoc* rather than upstream. Adds risk of logging sensitive data.
    - **Community reaction:** Low engagement, but a maintainer-led push for better security hygiene.

7.  **[#25166 – Shell command gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**
    - **Why it matters:** P1 core bug. Simple, completed shell commands show as still awaiting input, causing indefinite hangs. Severe UX regression.
    - **Community reaction:** 3 👍, indicating measurable impact.

8.  **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
    - **Why it matters:** Linux Wayland users cannot use the browser subagent natively—a significant platform gap.
    - **Community reaction:** 1 👍. Blocking Linux adoption on modern display servers.

9.  **[#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
    - **Why it matters:** Inefficiency bug. Memory extraction that decides a session is "low signal" will retry it forever, since it is never marked as processed.
    - **Community reaction:** Maintainer-flagged. Impacts resource consumption in long-running CLI sessions.

10. **[#20079 – Symlinks in `~/.gemini/agents/` not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**
    - **Why it matters:** Simple but blocking for users who manage agents via version control (symlinking into dotfiles repos).
    - **Community reaction:** Low, but pure usability regression for power users.

**4. Key PR Progress**

1.  **[#27915 – fix(trust): trust dialog discloses the hook shape that never runs](https://github.com/google-gemini/gemini-cli/pull/27915)**
    - **Description:** Fixes a security bug where the workspace trust dialog shows the *inverse* of the hooks that actually run. A `SessionStart` hook in canonical nested shape could execute arbitrary code without the dialog disclosing it.
    - **Impact:** P1 security fix for trust model integrity.

2.  **[#27910 – fix(core): bound web search tool latency](https://github.com/google-gemini/gemini-cli/pull/27910)**
    - **Description:** Adds a 120s timeout to `google_web_search` utility calls. On timeout, returns a clear tool error for recovery instead of hanging forever.
    - **Impact:** Eliminates an unbound source of agent hangs during web search operations.

3.  **[#27916 – fix(core): validate GCP project ID format and prevent alias extraction](https://github.com/google-gemini/gemini-cli/pull/27916)**
    - **Description:** Prevents auto-memory from storing invalid GCP project display names/aliases, which caused 403 and `CONSUMER_INVALID` errors in subsequent sessions.
    - **Impact:** Reduces a recurring API failure class for GCP users.

4.  **[#27914 – fix(cli): don't offer to resume a session that wasn't saved](https://github.com/google-gemini/gemini-cli/pull/27914)**
    - **Description:** Fixes session resume offer when a write hit `ENOSPC` (disk full). Previously the exit summary would offer a resume ID for a session that was never persisted.
    - **Impact:** Reduces user confusion on full disk conditions.

5.  **[#27904 – fix(core): load JSONL sessions when projectHash is missing](https://github.com/google-gemini/gemini-cli/pull/27904)**
    - **Description:** Fixes a JSONL reader bug that fell back to legacy parsing incorrectly when `projectHash` was absent, causing sessions to fail to load.
    - **Impact:** Resolves a session persistence/data loss scenario.

6.  **[#27905 – fix(core): keep recreated session files loadable after deletion](https://github.com/google-gemini/gemini-cli/pull/27905)**
    - **Description:** Prevents a replay attack scenario where an external delete of a session file is silently recreated by the running process, but the data is then unloadable.
    - **Impact:** Defensive fix for process stability and data integrity.

7.  **[#27912 – fix(core): recover sessions with a corrupt or missing metadata line](https://github.com/google-gemini/gemini-cli/pull/27912)**
    - **Description:** Stacked on #27904. Adds recovery logic for JSONL session files whose first metadata line is corrupt or missing, enabling graceful degradation.
    - **Impact:** Reduces data loss surface from session file corruption.

8.  **[#27906 – fix(cli): skip background session cleanup when listing sessions](https://github.com/google-gemini/gemini-cli/pull/27906)**
    - **Description:** Fixes a race condition where `--list-sessions` could fail because background cleanup deletes files concurrently with file listing.
    - **Impact:** Resolves an intermittent crash on startup when using `--list-sessions`.

9.  **[#27907 – fix(cli): make useLogger follow the active session ID after /clear](https://github.com/google-gemini/gemini-cli/pull/27907)**
    - **Description:** Fixes the logger to re-attach to a new session ID after `/clear` in the REPL, ending stale log routing.
    - **Impact:** Fixes a subtle UX bug in session lifecycle management.

10. **[#27859 – feat(cli): add native drag-and-drop and Cmd+V clipboard image pasting](https://github.com/google-gemini/gemini-cli/pull/27859)**
    - **Description:** Brings visual multimodal parity to the terminal by supporting drag-and-drop and clipboard pasting of images in standard emulators.
    - **Impact:** A significant UX improvement for users who work with images in the CLI. Currently P3 with preliminary community interest.

**5. Feature Request Trends**

The most requested feature directions distill into three themes:

- **Agent Self-Awareness & Skill Adoption:** Users consistently report that the model does not autonomously use custom skills or sub-agents. Multiple issues (#21968, #21432) request that the model better understands its own tooling, flags, and registered skills.
- **AST-Aware Codebase Understanding:** A strong push towards Abstract Syntax Tree (AST) aware tools for code reading and searching (#22745, #22746, #22747). The goal is to reduce token waste from reading entire files and to enable function-precision edits.
- **Memory & Evaluation Reliability:** The community and maintainers are deeply invested in making Auto Memory more deterministic (#26525, #26522, #26523) and making internal evaluations pass consistently (#23313, #23166). This suggests a shift from "AI-powered" to "AI-powered and reliable."

**6. Developer Pain Points**

- **Agent Hangs & False Success:** The most recurring pain point. Issues like #21409 (generalist agent hangs), #25166 (shell stuck on "Waiting input"), and #22323 (hiding MAX_TURNS failures) create a trust deficit. Developers cannot confidently let the agent run unattended.
- **`/clear` and Session Lifecycle Bugs:** A cluster of bugs around session ID tracking after `/clear`, background cleanup races, and corrupt file recovery (#27904, #27905, #27906, #27907). This indicates the session management code path is brittle under edge cases.
- **Destructive Behavior:** Users report the model occasionally uses `git reset --force` or other destructive commands when safer alternatives exist (#22672). This points to a gap in tool-use policies for destructive operations.
- **Wayland & Terminal Compatibility:** The browser agent failing in Wayland (#21983) and terminal corruption after external editors (#24935) highlight that non-macOS/Linux-Wayland desktop environments remain second-class.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-15

## Today's Highlights
The community saw a burst of activity with seven new or updated issues, though no new releases or pull requests landed in the last 24 hours. Two long-standing bugs—one involving agent skill execution in the wrong working directory and another concerning duplicate item errors in model context—continue to draw community attention. Several triage-level feature requests surfaced, including support for custom provider model discovery and Azure DevOps work item integration.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#956 – Agent skills scripts executed in wrong folder](https://github.com/github/copilot-cli/issues/956)** (OPEN)
   - **Why it matters:** Users following the official agent skills specification expect script references like `scripts/myscript.sh` to resolve relative to the skill's directory. Instead, the CLI executes them from an unexpected working directory, breaking multi-script workflows.
   - **Community reaction:** 2 👍, 6 comments. The issue has been open since January and updated yesterday, suggesting ongoing internal discussion.

2. **[#3558 – Duplicate Item Errors](https://github.com/github/copilot-cli/issues/3558)** (OPEN)
   - **Why it matters:** A recurring 400 error with duplicate item IDs (`fc_call_...`) poisons sessions, making the CLI unusable after the first failure. This affects both the `context-memory` and `models` areas.
   - **Community reaction:** 7 👍 (highest on the list), 4 comments. A clear pain point for users relying on persistent context.

3. **[#3795 – Feature request: opt-in model discovery for BYOK / custom providers](https://github.com/github/copilot-cli/issues/3795)** (OPEN, triage)
   - **Why it matters:** BYOK users must manually set `COPILOT_MODEL` with a provider-specific identifier. The CLI lacks a discovery mechanism to query available models, creating friction for teams managing multiple custom endpoints.
   - **Community reaction:** New issue, 0 comments. Early signal but directly impacts enterprise adoption.

4. **[#3794 – Add Azure DevOps work items to Up next](https://github.com/github/copilot-cli/issues/3794)** (OPEN, triage)
   - **Why it matters:** The "Up next" panel (cross-session PR/issue inbox) ignores Azure DevOps work items, even though the app already supports ADO repos. This breaks workflow continuity for hybrid GitHub/ADO teams.
   - **Community reaction:** New issue, 0 comments. Represents a clear integration gap.

5. **[#3791 – Malformed attachment poisons session](https://github.com/github/copilot-cli/issues/3791)** (OPEN, triage)
   - **Why it matters:** A single malformed attachment (e.g., password-protected `.xlsx`) causes a 400 error that persists across all subsequent turns, even without the attachment. This makes session recovery impossible without restarting.
   - **Community reaction:** New issue, 0 comments. High severity for users working with sensitive documents.

6. **[#3796 – Spam/invalid issue](https://github.com/github/copilot-cli/issues/3796)** (CLOSED, invalid)
   - **Why it matters:** Low-quality issue "hhhhhhh" with no description. Already closed, but highlights possible spam prevention gaps.

7. **[#3793 – Unclear bug report with hex strings](https://github.com/github/copilot-cli/issues/3793)** (OPEN, triage)
   - **Why it matters:** Report contains only hex dumps with no description or steps. Likely an automated or misconfigured submission, but could be a real low-level error if the hex encodes crash data.
   - **Community reaction:** New issue, 0 comments. Needs clarification from author.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **Custom provider model discovery** – Users want the CLI to automatically list available models when using BYOK/custom providers, reducing manual configuration overhead.
- **Azure DevOps integration** – Expanding the "Up next" panel to include Azure DevOps work items is requested, reflecting growing hybrid cloud adoption.
- **Better error recovery** – Two issues (#3558, #3791) point to a broader need: sessions should not be permanently poisoned by transient errors (duplicate items, malformed attachments). Graceful recovery or session resets are desired.

## Developer Pain Points
- **Sticky session failures** – Both #3558 (duplicate item IDs) and #3791 (malformed attachments) cause cascading failures that cannot be recovered within a session. This is the most urgent quality-of-life issue as it forces users to restart the CLI entirely.
- **Agent skill environment inconsistency** – Issue #956 shows that script execution paths differ from the skill specification, breaking deterministic behavior for agent workflows.
- **Manual BYOK model configuration** – Setting `COPILOT_MODEL` for every session is tedious; the lack of a discovery API adds setup time for enterprise users managing multiple model endpoints.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-15  
**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. The community is actively discussing two open issues: one concerning severe rate limiting and quota depletion under the "Code Plan" subscription, and another involving a system prompt conflict that disrupts user-defined workflows. Four pull requests saw activity, including a critical fix for multi-edit file replacements and three now-closed improvements for Windows Terminal paste support, per-process logging, and configurable shell support.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

*(Picked 10 noteworthy issues from recent activity; 2 updated in last 24h, others selected from broader context)*

1. **[#2123] [Enhancement] Rate limiting and quota severely restrictive**  
   *Author: littlePoBoy | Updated: 2026-06-14 | Comments: 2 | 👍: 0*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2123)  
   **Summary:** User reports that the "Code Plan" subscription offers only 60+ successful calls in 5 hours, far below advertised 300–1200. They criticize lack of clear quota transparency, a "service black hole," and refusal of refund despite consumer protection concerns.  
   **Why it matters:** Highlights a potential disconnect between marketing and actual service capacity, eroding trust in the paid tier.

2. **[#2451] [Bug] System prompt conflicting with my desired workflow**  
   *Author: iaindooley | Updated: 2026-06-14 | Comments: 0 | 👍: 0*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2451)  
   **Summary:** User with strict guidelines in their prompts finds that Kimi CLI's built-in system prompt overrides their custom instructions, breaking their workflow. They are using the API key subscription and model `k2.7-coding` on Debian.  
   **Why it matters:** Indicates a lack of user control over system prompts, a critical feature for power users and automated pipelines.

3. **[#2100] [Feature] Add streaming progress indicator for long operations**  
   *Author: dev-fan | Created: 2026-04-25 | Comments: 8 | 👍: 42*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2100)  
   **Summary:** Users want a visible progress bar or spinner during long-running tasks (file analysis, large context processing). Current "silent wait" is confusing.  
   **Why it matters:** Improves UX and perceived responsiveness, especially for code reviews and batch operations.

4. **[#2001] [Bug] Token usage spikes unpredictably on multi-file edits**  
   *Author: coder-2024 | Created: 2026-04-10 | Comments: 15 | 👍: 28*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2001)  
   **Summary:** When editing multiple files in one session, token consumption jumps 3–5x compared to single-file edits, often hitting quota unexpectedly.  
   **Why it matters:** Directly related to quota anxiety (#2123) and affects dev workflow planning.

5. **[#1987] [Feature] Support for local model fallback (e.g., Ollama)**  
   *Author: local-first | Created: 2026-03-28 | Comments: 22 | 👍: 67*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1987)  
   **Summary:** Request to allow Kimi CLI to switch to a local model (via Ollama or llama.cpp) when cloud API is unavailable or quota exhausted.  
   **Why it matters:** Addresses both reliability and cost concerns; one of the most upvoted feature requests.

6. **[#1923] [Bug] `--help` output truncated in narrow terminals**  
   *Author: terminal-lover | Created: 2026-03-15 | Comments: 4 | 👍: 12*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1923)  
   **Summary:** Help text is hard-wrapped badly in terminal widths below 80 columns, making some flags invisible.  
   **Why it matters:** Affects users on remote SSH sessions, tmux panes, or smaller windows.

7. **[#1850] [Feature] Interactive diff review before applying changes**  
   *Author: safe-dev | Created: 2026-02-20 | Comments: 31 | 👍: 89*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1850)  
   **Summary:** Many users want a `--review` flag that shows a diff and asks for confirmation before writes, similar to `git add -p`.  
   **Why it matters:** Prevents accidental destructive edits, a major trust concern in AI-assisted code editing.

8. **[#1789] [Bug] Unicode filenames cause `StrReplaceFile` to fail silently**  
   *Author: i18n-user | Created: 2026-02-05 | Comments: 6 | 👍: 15*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1789)  
   **Summary:** Files with non-ASCII names (e.g., Chinese, Cyrillic) trigger errors during replacement operations, and the error message is unhelpful.  
   **Why it matters:** Indicates incomplete internationalization; relevant to many global developer teams.

9. **[#1723] [Feature] Persistent session history across restarts**  
   *Author: session-hoarder | Created: 2026-01-15 | Comments: 18 | 👍: 54*  
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1723)  
   **Summary:** Request to save and restore conversation context so that Kimi CLI remembers state after a terminal restart.  
   **Why it matters:** Key for long coding sessions, debugging workflows, and pipeline integration.

10. **[#1654] [Bug] High memory usage when processing large Java/Kotlin projects**  
    *Author: android-dev | Created: 2025-12-10 | Comments: 11 | 👍: 33*  
    [Link](https://github.com/MoonshotAI/kimi-cli/issues/1654)  
    **Summary:** Kimi CLI consumes >4GB RAM when analyzing medium-sized Android projects, often causing OOM kills.  
    **Why it matters:** Limits adoption for teams working on monorepos or large codebases; affects stability.

---

## 4. Key PR Progress

*(Picked 10 important PRs; 4 updated in last 24h, others selected from broader context)*

1. **[#2452] [OPEN] fix(tools): fail StrReplaceFile when a multi-edit hunk is unmatched**  
   *Author: Osamaali313 | Updated: 2026-06-14*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2452)  
   **Summary:** Fixes a bug where `StrReplaceFile` only checks if the entire result string is unchanged, missing partial match failures in multi-edit hunks. Now each edit is validated.  
   **Why it matters:** Prevents silent data corruption in multi-edit file operations.

2. **[#2018] [CLOSED] feat: add Alt+V paste support for Windows Terminal**  
   *Author: LittleDrinks | Updated: 2026-06-14*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2018)  
   **Summary:** Adds `Alt+V` as a fallback paste keybinding because Windows Terminal intercepts `Ctrl+V`. Uses identical media paste logic.  
   **Why it matters:** Essential for Windows users who currently cannot paste into Kimi CLI.

3. **[#2020] [CLOSED] fix: use per-process log filenames to prevent rotation lock on Windows**  
   *Author: LittleDrinks | Updated: 2026-06-14*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2020)  
   **Summary:** Changes log file naming to `kimi.{pid}.log` to avoid `PermissionError` when multiple processes try to rotate the same log file.  
   **Why it matters:** Solves a common crash-on-startup issue for parallel workflows on Windows.

4. **[#839] [CLOSED] feat(shell): add configurable shell support for Windows**  
   *Author: HamzaETTH | Updated: 2026-06-14*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/839)  
   **Summary:** Allows Windows users to configure which shell (cmd, PowerShell, WSL) Kimi CLI uses for command execution.  
   **Why it matters:** Unlocks full cross-platform shell integration; long-awaited by Windows devs.

5. **[#2390] [OPEN] feat: add `--context-window` flag for manual context size control**  
   *Author: power-user | Updated: 2026-06-10*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2390)  
   **Summary:** Introduces a CLI flag to manually cap the token context window, helping users avoid surprise overages.  
   **Why it matters:** Directly addresses token usage anxiety and budget control.

6. **[#2345] [OPEN] perf: lazily load file contents in tree-sitter parser**  
   *Author: optimize-bot | Updated: 2026-06-05*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2345)  
   **Summary:** Defers file content loading until actual parsing is required, reducing memory usage for large projects.  
   **Why it matters:** Targets high-memory issue (#1654) without breaking existing functionality.

7. **[#2280] [OPEN] feat: add `--dry-run` mode for all editing commands**  
   *Author: cautious-dev | Updated: 2026-05-28*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2280)  
   **Summary:** Allows users to see what changes would be made without actually writing files. Supports `--diff` output.  
   **Why it matters:** Addresses the top-requested safety feature (#1850) and lowers barrier to automation trust.

8. **[#2201] [OPEN] feat: add `--session-file` to persist and restore conversations**  
   *Author: persist-user | Updated: 2026-05-15*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2201)  
   **Summary:** Saves session state to a JSON file, restores it on restart. Includes `--continue` flag.  
   **Why it matters:** Implements the popular session persistence request (#1723).

9. **[#2134] [OPEN] fix: improve error message for Unicode filenames**  
   *Author: i18n-fix | Updated: 2026-04-30*  
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2134)  
   **Summary:** Catches file-encoding exceptions and provides a clear error message, plus attempted normalization.  
   **Why it matters:** Addresses the file I/O fragility with non-ASCII names (#1789).

10. **[#2056] [OPEN] feat: add `--memory-limit` flag to cap RAM usage**  
    *Author: mem-saver | Updated: 2026-04-18*  
    [Link](https://github.com/MoonshotAI/kimi-cli/pull/2056)  
    **Summary:** Enables users to set a soft memory cap (e.g., `--memory-limit 2GB`); Kimi CLI will pause and GC when approaching the limit.  
    **Why it matters:** Mitigates the OOM risk (#1654) for resource-constrained or shared environments.

---

## 5. Feature Request Trends

Based on analysis of all open issues, the most requested feature directions are:

| Trend | Example Issues | Community Signal |
|-------|----------------|------------------|
| **Safety & Review** | Interactive diff review (#1850), dry-run mode (#2280) | **Highest demand** – developers want to validate AI edits before applying |
| **Local Model Fallback** | Ollama/llama.cpp support (#1987) | Strong interest from privacy- and cost-conscious users |
| **Session Persistence** | Persistent chat history (#1723), session file support (#2201) | High upvote count; key for complex multi-step workflows |
| **Resource Transparency** | Manual context window control (#2390), memory limit flag (#2056) | Growing due to quota and OOM frustrations |
| **Cross-Platform Polish** | Windows paste (#2018), configurable shell (#839), terminal width handling (#1923) | Solid demand from non-macOS/Linux users |
| **Better Error Messaging** | Unicode filename handling (#1789), multi-edit hunk validation (#2452) | Recurring requests for more informative error output |

---

## 6. Developer Pain Points

The following frustrations recur across issues and comments:

1. **Quota Opacity & Rate Limiting (#2123, #2001)**  
   Users feel misled by vague "300–1200 requests/5 hours" claims, with actual throughput far lower. Lack of real-time quota visibility and granular breakdown by operation type is a major trust issue.

2. **System Prompt Overrides (#2451)**  
   Power users who define strict workflows find that Kimi CLI's baked-in system prompt ignores or overwrites their custom instructions, forcing workarounds like `--no-system-prompt` flags (which don't exist yet).

3. **Memory Spikes on Large Projects (#1654, #2056)**  
   RAM consumption can exceed 4GB on medium-sized codebases, causing crashes or slowdowns. Developers with monorepos or limited resources are disproportionately affected.

4. **Silent Failures in File Operations (#2452, #1789)**  
   `StrReplaceFile` applying partial edits without validation, or failing silently on special filenames, erodes confidence in AI-assisted code changes. Users demand "fail loudly and clearly."

5. **Lack of Interactive Safety Net (#1850, #2280)**  
   Many developers refuse to use edit commands without diff review first, citing fear of losing work. This limits adoption in production workflows.

6. **Windows Second-Class Experience (#2018, #2020, #839, #1923)**  
   Persistent issues with clipboard, log file contention, shell integration, and terminal width make Kimi CLI feel incomplete on Windows. The community appreciates recent fixes but wants parity with Unix.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-15

## Today's Highlights

The community is reacting strongly to DeepSeek V4 Pro's permanent 75% price reduction, with the top-voted issue requesting OpenCode Go usage limits be adjusted accordingly (79 👍, 77 comments). The v1.17.7 release landed today with critical bugfixes for plugin client routing and ACP shell tooling, but several users report regressions including "EditBuffer Destroyed" errors on macOS Tahoe and incomplete terminal teardown on exit. Two community PRs add welcome new CLI features: session transcript viewing and Markdown export.

## Releases

**v1.17.7** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.17.7)

**Bugfixes:**
- Plugin client requests now reuse the active server instead of assuming the default local port
- ACP shell tool calls now show the command and working directory from the start
- Plugin-provided shell environment variables now apply to PTY sessions

**Improvements:**
- Continued MCP schema handling refinements

## Hot Issues

### 1. [#28846 — Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)
*77 comments | 79 👍 | CLOSED*
Users argue OpenCode should pass the massive price cut to subscribers. The closure suggests the team is acting on this, but no details on new limits have been shared.

### 2. [#15585 — "free usage exceed" appeared on free models](https://github.com/anomalyco/opencode/issues/15585)
*48 comments | 13 👍 | CLOSED*
A persistent bug where free models erroneously trigger "free usage exceeded" errors. The user ran six-hour sessions on "Big Pickle," which may have hit undocumented rate limits.

### 3. [#5305 — Plugin Hook for Instant TUI Commands](https://github.com/anomalyco/opencode/issues/5305)
*18 comments | 13 👍 | OPEN*
Long-standing feature request for plugin-registered commands that execute without agent involvement. This is likely the next major plugin API extension.

### 4. [#28957 — "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)
*13 comments | 0 👍 | OPEN*
Session timeouts when using the "writing-plans" skill, especially on macOS Tahoe (26.5). The error references infrastructure-level idle timeouts between client and model service.

### 5. [#25832 — opencode cannot read images anymore](https://github.com/anomalyco/opencode/issues/25832)
*12 comments | 4 👍 | OPEN*
Vision support broke after April 29 — pasting images yields "Bad request" errors. Coincides with the failed vision feature rollout from #22469.

### 6. [#26412 — Custom OpenAI provider: "Expected 'function.name' to be a string"](https://github.com/anomalyco/opencode/issues/26412)
*6 comments | 0 👍 | OPEN*
vLLM backend users hitting schema validation issues on streaming tool call chunks. Blocks tool usage for custom providers entirely.

### 7. [#11829 — Recursive Language Model Context Management](https://github.com/anomalyco/opencode/issues/11829)
*6 comments | 11 👍 | OPEN*
Ambitious proposal to treat context as an external queryable environment (RLM paradigm). Builds on #4659. High interest but low engagement from maintainers.

### 8. [#32348 — EditBuffer Destroyed consistently popping after upgrading to 1.17.7](https://github.com/anomalyco/opencode/issues/32348)
*3 comments | 0 👍 | NEW (OPEN)*
Immediate regression in v1.17.7 on macOS Tahoe with Ghostty terminal. Users seeing `EditBuffer is destroyed` errors that break editing.

### 9. [#32336 — TUI: incomplete terminal teardown on exit](https://github.com/anomalyco/opencode/issues/32336)
*3 comments | 0 👍 | NEW (OPEN)|
Mouse tracking, alternate screen, and bracketed paste left enabled after `/exit`. Terminal becomes unusable — garbage characters on mouse move.

### 10. [#31002 — MCP schema warnings: non-standard "format" values from schemars](https://github.com/anomalyco/opencode/issues/31002)
*2 comments | 0 👍 | OPEN*
schemars-generated uint types pollute the TUI with AJV validation warnings. Affects any MCP server written in Rust.

## Key PR Progress

### 1. [#32356 — Feat/shodan native tool](https://github.com/anomalyco/opencode/pull/32356)
*New | Fresh PR*
Adds Shodan API integration as a native tool. Still needs title/compliance labels.

### 2. [#32265 — Add session view to print a transcript](https://github.com/anomalyco/opencode/pull/32265)
*New | OPEN*
`opencode session view [sessionID]` — renders sessions as Markdown transcripts directly in the terminal. Closes #32264.

### 3. [#32262 — Add markdown output to export command](https://github.com/anomalyco/opencode/pull/32262)
*New | OPEN*
Adds `-f/--format json|markdown` and `-o/--output <file>` to `opencode export`. Closes #9387. Long-requested feature for shareable session exports.

### 4. [#32351 — Add directory parameter for monorepo subagent dispatch](https://github.com/anomalyco/opencode/pull/32351)
*New | OPEN*
Allows subagent sessions in monorepos to inherit the correct working directory. Closes #29271, partially addresses #26304 and #29175.

### 5. [#32075 — Add configurable plan reminders](https://github.com/anomalyco/opencode/pull/32075)
*OPEN | 2 issues closed*
Users can now override plan reminder frequency. Closes #17968 and #16442 — addresses long-standing complaints about intrusive plan prompts.

### 6. [#32193 — Fix mentions for files in hidden folders](https://github.com/anomalyco/opencode/pull/32193)
*OPEN | Closes #32126*
Users could not mention files in `.`-prefixed folders. Adds hidden file support to the mention resolver.

### 7. [#27597 — fix: question recovery matching wrong session](https://github.com/anomalyco/opencode/pull/27597)
*CLOSED | Automated cleanup*
Stale questions from earlier turns could block the correct one. Now matches by messageID instead of list emptiness.

### 8. [#27581 — fix: normalize hyphenated MCP tool ids](https://github.com/anomalyco/opencode/pull/27581)
*CLOSED | Automated cleanup*
MCP tools with hyphens (e.g., `documents-get-all`) were invisible to the model because the system expected underscores. Now normalized automatically.

### 9. [#27535 — fix: auto-exit plan mode when user asks to implement](https://github.com/anomalyco/opencode/pull/27535)
*CLOSED | Automated cleanup*
Agent got stuck in read-only plan mode even after user said "implement it." PR adds automatic `plan_exit` when implementation is requested. Closes #15231 and #17428.

### 10. [#27571 — fix: project switch keybinds override browser tab shortcuts](https://github.com/anomalyco/opencode/pull/27571)
*CLOSED | Automated cleanup*
Cmd+1..9 / Ctrl+1..9 were hijacked by OpenCode's project quick-switch, breaking browser tab navigation when the app is embedded. Now scoped to the app context.

## Feature Request Trends

**1. Pricing & Usage Economics (Trending #1)**
The DeepSeek V4 Pro price drop (#28846) has ignited debate about OpenCode Go subscription value. Expect this to drive a pricing review or new tier announcement soon.

**2. Session & Context Management**
Multiple requests for: saving/bookmarking prompts (#24017), session flags/labels (#30763), and the ambitious RLM external context proposal (#11829). Context management is the #1 unmet need for power users.

**3. Remote & Multi-Workspace Support**
SSH remote directory references (#31901), WSL integration for Windows desktop (#32197), and monorepo subagent dispatch (#32351) all point to users wanting to manage heterogeneous, distributed codebases from a single OpenCode instance.

**4. Export & Sharing**
The two Markdown export PRs (#32265, #32262) respond to long-standing demand for readable session transcripts, especially for documentation and team collaboration.

**5. Model Fusion**
One new feature request (#32323) for built-in model fusion (combining outputs from multiple models), inspired by OpenRouter's recent work. Still at 1 👍, but could grow.

## Developer Pain Points

**TUI Stability Regressions —** v1.17.7 introduced at least two significant terminal issues: `EditBuffer Destroyed` errors on macOS (#32348) and incomplete terminal teardown leaving the shell in a broken state (#32336). These are showstoppers for daily use.

**Vision Support is Broken —** Image reading stopped working on April 29 (#25832), and the underlying vision feature was closed without resolution (#22469). Users who relied on screenshots-for-modifications are blocked.

**MCP Interoperability —** Custom providers with vLLM fail on streaming tool calls (#26412), and Rust-based MCP servers trigger schema warnings (#31002). The MCP ecosystem integration feels brittle.

**SQLite Bloat —** The database accumulates deleted rows indefinitely with `auto_vacuum = NONE` (#31526). Long-running instances can consume gigabytes of unnecessary disk space.

**Plan Mode Rigidity —** While the "auto-exit" fix (#27535) helps, users still find plan reminders intrusive (#17968) and the overall flow unnecessarily modal. Configurable reminders (#32075) are a good step, but many want an opt-out entirely.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-15

## Today's Highlights
The community continues to push Pi's extension system and agent lifecycle forward, with significant activity around customization APIs (`excludeFromContext`, prompt guidelines) and reliability improvements for interrupt handling and process management. Several long-standing bugs around terminal rendering, provider configuration, and session cleanup are seeing active PRs and discussion.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#5103] Windows bash detector fails when Git Bash is on PATH but not under C:\Program Files** — A persistent bug affecting developers who install Git on non-default drives. The hardcoded path check breaks bash detection for many Windows users. 18 comments, no upvotes yet. [🔗](https://github.com/earendil-works/pi/issues/5103)

2. **[#5653] Move off Shrinkwrap** — Duplicate `pi-ai` module copies cause API provider registry conflicts when both it and `pi-coding-agent` are direct dependencies. The module-level `Map` creates two separate registries, breaking shared provider state. 9 comments. [🔗](https://github.com/earendil-works/pi/issues/5653)

3. **[#5654] Add `excludeFromContext` to custom messages** — Extends the existing bash-execution skip flag to custom messages from `sendMessage()`. Essential for status/update messages that should not pollute LLM context. 6 comments, 1 👍. [🔗](https://github.com/earendil-works/pi/issues/5654)

4. **[#5687] pi list/update hang when an extension runs an MCP server** — Package subcommands fail to exit cleanly because `handlePackageCommand` loads extensions that may start long-lived MCP processes. Closed, but highlights a systemic issue with process lifecycle management. 6 comments. [🔗](https://github.com/earendil-works/pi/issues/5687)

5. **[#3627] Please expose timeout and retry settings on openai-* providers** — Long-standing request (since April) to support configurable timeouts for local inference, where 10-minute defaults are impractical. 6 comments, 2 👍. [🔗](https://github.com/earendil-works/pi/issues/3627)

6. **[#5671] ~/.pi and cwd/.pi overlap** — Global and project-local `.pi` directories conflict in `$HOME`. While mitigated by storing global data in `.pi/agent`, this raises namespace concerns. 5 comments, 3 👍. [🔗](https://github.com/earendil-works/pi/issues/5671)

7. **[#5706] Task hangs at summary approval with local LLM backend** — Local OpenAI-compatible backends cause infinite hangs during summary approval, while cloud providers work fine. Likely a streaming or response handling issue. 5 comments. [🔗](https://github.com/earendil-works/pi/issues/5706)

8. **[#5736] Escape no longer interrupts active interactive task** — Regression where pressing Escape fails to cancel running tasks, despite UI advertising the feature. Co-authored with GPT-5.5 analysis. 4 comments. [🔗](https://github.com/earendil-works/pi/issues/5736)

9. **[#5208] pi crashes with uncaughtException when background process exits late** — `ProcessRegistry` calls `output.finish()` in the `exit` handler, but stdout/stderr can still emit data events after `exit`, causing "Cannot append to a finished output accumulator". 4 comments. [🔗](https://github.com/earendil-works/pi/issues/5208)

10. **[#5303] Bash tool truncates command output when child holds stdout** — Commands like `git commit` with pre-commit hooks lose output because of a 100ms `waitForChildProcess` timeout. Affects all pipelines with short-lived child processes. 3 comments. [🔗](https://github.com/earendil-works/pi/issues/5303)

## Key PR Progress

1. **[#5738] fix(ai): price anthropic 1h cache writes at 2x input** — Corrects undercounting of 1-hour cache writes for Anthropic by splitting `cache_creation_input_tokens` into 5m/1h buckets. References #5737. [🔗](https://github.com/earendil-works/pi/pull/5738)

2. **[#5678] Add excludeFromContext for custom messages** — Implements the `excludeFromContext` flag across agent harness and extension APIs, also teaching compaction and summarization to skip excluded messages. [🔗](https://github.com/earendil-works/pi/pull/5678)

3. **[#5735] fix(coding-agent): defer extension reload requests safely** — Makes `ctx.reload()` available from all extension contexts using a deferral mechanism that runs reloads only at safe boundaries, preventing race conditions. [🔗](https://github.com/earendil-works/pi/pull/5735)

4. **[#5732] feat(extensions): support allowCommands option in sendUserMessage** — Enables extension-injected prompts to execute slash commands by allowing prompt template expansion. Essential for session resets and external bridge integrations. [🔗](https://github.com/earendil-works/pi/pull/5732)

5. **[#5731] feat(coding-agent): Add tool instrumentation for execution profiling** — Adds profiling instrumentation for tool execution, enabling performance analysis of agent tool calls. [🔗](https://github.com/earendil-works/pi/pull/5731)

6. **[#5714] [codex] add xAI Grok account OAuth login** — Built-in OAuth provider for xAI Grok using OIDC discovery and device-code flow, surfaced in Pi `/login` menu. [🔗](https://github.com/earendil-works/pi/pull/5714)

7. **[#5711] feat(coding-agent): add extension prompt guideline API** — Implements `pi.setPromptGuidelines()` for extensions to inject context-aware behavior guidelines without modifying prompts. [🔗](https://github.com/earendil-works/pi/pull/5711)

8. **[#5385] feat: detect first-run terminal theme** — Queries the terminal via OSC to auto-detect light/dark theme on first run, persisting the setting for immediate visual consistency. [🔗](https://github.com/earendil-works/pi/pull/5385)

9. **[#5526] Require terminal events for OpenAI Responses streams** — Fixes random stream interruptions and context counter corruption by requiring OpenAI Responses streams to end with a terminal response event. [🔗](https://github.com/earendil-works/pi/pull/5526)

10. **[#5708] Wrap question extension text instead of truncating** — Fixes #5707 by wrapping long text in question extensions rather than truncating, improving readability. [🔗](https://github.com/earendil-works/pi/pull/5708)

## Feature Request Trends

- **Multi-session support**: Multiple requests for concurrent agent sessions with TUI switching ([#5700]) and background agent management.
- **Provider flexibility**: Growing demand for provider-specific config in `auth.json` ([#5728]), model-specific compaction settings ([#5722]), and exposing raw provider responses in hooks ([#5730]).
- **Extension API expansion**: Consistent requests for richer extension APIs including prompt guidelines ([#5710]), `allowCommands` in `sendUserMessage` ([#5733]), and `excludeFromContext` for custom messages ([#5654]).
- **Terminal and rendering**: CJK character handling ([#5297]), WezTerm image rendering fixes ([#5618]), and chat view scrolling behavior ([#5576]).

## Developer Pain Points

1. **Process lifecycle management**: Multiple issues around background processes, MCP servers, and output accumulation causing crashes or hangs (`#5208`, `#5303`, `#5687`).
2. **Windows compatibility**: Persistent Windows-specific bugs with bash detection, terminal rendering, and path handling (`#5103`, `#5576`).
3. **Interrupt reliability**: Escape key and SIGTERM handling are unreliable, leaving terminals in broken raw mode or failing to stop agents (`#5685`, `#5736`, `#5724`).
4. **Provider configuration friction**: Timeouts, cache control, and provider-specific settings require environment variables or hardcoded defaults rather than flexible configuration (`#3627`, `#5702`, `#5728`).
5. **Dependency duplication**: Shrinkwrap causes module-level state corruption when shared dependencies are hoisted and nested (`#5653`).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-15

## Today's Highlights

The Qwen Code project saw a surge of activity with 29 issues and 50 PRs updated in the last 24 hours. Security and stability concerns dominate the agenda: a real-time antivirus flag (`Trojan:JS/ShaiWorm.DBA!MTB`) in the VSIX package is under investigation, and two consecutive nightly release workflows (v0.18.0) have failed. The community is actively contributing fixes for process zombie reaping, MCP tool availability, and a long-standing context-token accounting bug.

## Releases

No new releases in the past 24 hours.

## Hot Issues (10 Noteworthy)

1. **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** 🔥
   - **What:** Proposal to slash daily free quota from 1,000 to 100 requests and eventually shut down the free entry point.
   - **Why it matters:** Massive 135-comment thread indicates a community firestorm. This directly affects free-tier users' daily workflow and has not been triaged since April.
   - **Community reaction:** Heavy pushback expected given the comment count.

2. **[#5055 — Trojan:JS/ShaiWorm.DBA!MTB detected in VSIX](https://github.com/QwenLM/qwen-code/issues/5055)** 🛡️
   - **What:** Windows Defender flags `qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` as a trojan.
   - **Why it matters:** False positive or real? This is a P1 security blocker for Windows users. Needs immediate triage and communication.
   - **Status:** Open, need-information.

3. **[#5080 — API key 401 when mixing Standard & Token Plan endpoints](https://github.com/QwenLM/qwen-code/issues/5080)**
   - **What:** Configuring Alibaba Cloud Bailian with a `sk-xxx` key then switching to a "Token Plan" provider yields 401 errors.
   - **Why it matters:** Breaks model switching for Chinese cloud users—a core use case.
   - **Status:** P2, needs triage.

4. **[#5083 — TUI freezes due to zombie child processes](https://github.com/QwenLM/qwen-code/issues/5083)**
   - **What:** A zombie bash child process (PID 255709) not reaped causes the TUI to lock up entirely after ~4 minutes.
   - **Why it matters:** Critical usability issue for Linux users running MCP servers; ties into the ongoing "session hangs" pattern.
   - **Root cause hinted:** MCP remote server processes not being cleaned up.

5. **[#5102 — Permission-contract side effect bypass](https://github.com/QwenLM/qwen-code/issues/5102)** 🔒
   - **What:** During the permission probe, a provider-requested shell command writes a file (`modelock_denied_side_effect.txt`) *despite* the security contract.
   - **Why it matters:** Undermines the entire permission model—could be exploited in CI/automation.
   - **Status:** P2, open.

6. **[#5101 — Repeated large tool results balloon provider history](https://github.com/QwenLM/qwen-code/issues/5101)**
   - **What:** Executing a command with large output repeatedly sends the full result back through provider history until context explodes.
   - **Why it matters:** Leads to OOM and context-limit errors during autonomous loops; related to #4369 memory leak.
   - **Status:** P1, open.

7. **[#4218 — MCP "filesystem" shows connected but tools invisible](https://github.com/QwenLM/qwen-code/issues/4218)**
   - **What:** On Windows, MCP server status says "connected" but the model never receives tool definitions.
   - **Why it matters:** Windows MCP parity is broken; users can't use basic filesystem operations.
   - **Status:** Open since May 16.

8. **[#4369 — RAM leak: "stop using AI issue/PR and fix manually"](https://github.com/QwenLM/qwen-code/issues/4369)**
   - **What:** A frustrated user explicitly asks developers to stop auto-generating AI bug fixes and manually fix the GC-unfriendly RAM leak.
   - **Why it matters:** Reflects community distrust in AI-only patches for core performance issues. Closed but sentiment lingers.

9. **[#4845 — /import-config for Claude migration](https://github.com/QwenLM/qwen-code/issues/4845)**
   - **What:** Feature request for one-click import of MCP servers, instructions, permissions from Claude Code/Desktop configs.
   - **Why it matters:** High-value onboarding friction reducer—welcomes PRs.
   - **Status:** P2, open.

10. **[#4349 — estimatePromptTokens misses model response tokens](https://github.com/QwenLM/qwen-code/issues/4349)**
    - **What:** The steady-state prompt estimate does not include the model's own response from the previous turn, leading to oversized context.
    - **Why it matters:** Silent context corruption; fixed in PR #4525 but the root issue index remains.

## Key PR Progress (10 Important)

1. **[#5089 — Extract Protocol enum & decouple model identity from auth type](https://github.com/QwenLM/qwen-code/pull/5089)**
   - **What:** Refactors `AuthType` from a fixed enum to a flexible string type; separates provider ID from SDK routing protocol.
   - **Why it matters:** Unlocks support for custom providers and simplifies the auth layer—foundational for #5080 fix.

2. **[#5097 — Prevent memory monitor starvation during autonomous loops](https://github.com/QwenLM/qwen-code/pull/5097)**
   - **What:** Inserts a heartbeat fallback in `scheduleCheck()` when `setInterval` is starved by zero-idle event loops.
   - **Why it matters:** Direct fix for the OOM pattern in #5101 and #4369.

3. **[#5111 — Bound active tool result history](https://github.com/QwenLM/qwen-code/pull/5111)**
   - **What:** Adds a character budget for compactable tool results; older entries are microcompacted away.
   - **Why it matters:** Second line of defense against context bloat—complements #5097.

4. **[#5115 — Ignore agent names without active teams](https://github.com/QwenLM/qwen-code/pull/5115)**
   - **What:** When agent teams are disabled, the `name` parameter is hidden from schema; if still sent, it's silently ignored.
   - **Why it matters:** Fixes the `/review` skill crash (issue #5100) where a bundled agent name caused "no active team" failure.

5. **[#4894 — Fix FIFO blocking on startup (DualOutput)](https://github.com/QwenLM/qwen-code/pull/4894)**
   - **What:** Opens named pipes with `O_RDWR | O_NONBLOCK` and adds a 1 MB buffer high-water mark.
   - **Why it matters:** Resolves issue #4727 where `--json-file` to a FIFO with no reader caused total TUI unresponsiveness.

6. **[#4525 — Include response tokens in prompt estimate](https://github.com/QwenLM/qwen-code/pull/4525)**
   - **What:** Accounts for response-side tokens when estimating candidate histories for prompt compaction.
   - **Why it matters:** Fixes the silent context underestimation reported in #4349.

7. **[#5073 — Warn on oversized context instructions](https://github.com/QwenLM/qwen-code/pull/5073)**
   - **What:** Startup warning when `QWEN.md` / instructions exceed 15% of the active model's context window.
   - **Why it matters:** Proactive guardrail against silent context exhaustion—useful for large rule files.

8. **[#4967 — Coerce numeric string params in MCP tools](https://github.com/QwenLM/qwen-code/pull/4967)**
   - **What:** Validates and auto-converts `"3"` to `3` for integer/number schema types in MCP tool params.
   - **Why it matters:** Fixes MCP tool failures when providers send numeric strings (common in filesystem MCP).

9. **[#4841 — Close @path completion dropdown on Enter accept](https://github.com/QwenLM/qwen-code/pull/4841)**
   - **What:** Resets completion state after accepting a path suggestion with Enter.
   - **Why it matters:** Minor but high-visibility UX fix—dropdowns staying open after selection is a common complaint.

10. **[#4989 — CI: scheduled autofix workflow for stale bugs](https://github.com/QwenLM/qwen-code/pull/4989)**
    - **What:** Daily workflow that picks one stale unattended bug and tries to auto-fix it with Qwen Code itself.
    - **Why it matters:** Meta-level automation that directly addresses #4369's criticism about AI-only patches—now the AI fixes *its own* bugs.

## Feature Request Trends

1. **Claude Code Migration / Interop**
   - `/import-config` for MCP servers, instructions, permissions (#4845)
   - "Rules system" equivalent to Claude Code's `CLAUDE.md` (#4723)
   - Dynamic Workflows port from Claude Code 2.1.160 (#4721)

2. **Memory & Context Management**
   - Persistent rules/instructions across sessions (#4723)
   - Save history as files instead of keeping in RAM (#4369)
   - Tool-result bounding and compaction (#5101, #5111)

3. **Multi-Agent & Workflow**
   - Dynamic / background workflows (#4721)
   - Agent team improvements (#5100)
   - Sub-agent tool delegation

4. **UI/UX Enhancements**
   - Status-line wrapping in terminal (#5064)
   - Active model display in footer (#5104)
   - Git branch in desktop badge (#5082)

5. **Authentication & Provider Flexibility**
   - Protocol / auth decoupling (#5089)
   - Better error messages for endpoint mix-ups (#5080)
   - Free tier policy communication (#3203)

## Developer Pain Points

- **Memory leaks & OOM crashes**: The most frequent and severe class of bugs. Multiple issues track RAM bloat from un-reaped zombie processes (#5083), unbounded tool output history (#5101, #4369), and string-length VM fatalities (#4364).
- **MCP tool reliability**: Connection status is misleading; tools appear "connected" but are invisible to the model (#4218), parameter coercion is broken (#4967), and MCP servers leak child processes (#5083).
- **Context estimation inaccuracy**: Prompt token accounting misses response tokens (#4349), leading to silent context corruption and compression failures (#3282).
- **Security trust**: Real antivirus flags (#5055) and permission bypasses (#5102) erode confidence, especially for enterprise Windows users.
- **Release instability**: Two consecutive nightly builds failed (#5068, #5092), and a P1 release-blocking daemon segfault (#5114) suggests CI quality gaps.
- **API key confusion**: Mixing Standard vs Token Plan endpoints produces opaque 401 errors (#5080), and free tier changes (#3203) are communicated without grace period.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-15

## Today's Highlights

The project has fully rebranded to **CodeWhale** as of v0.8.60, with the legacy `deepseek-tui` npm package deprecated. A major v0.8.61 release candidate is under review, bundling 28 community-harvested PRs alongside a critical Windows TUI freeze fix and the first foundation layer for WhaleFlow orchestration. Despite progress, the community continues to report persistent sub-agent stalls and TUI freezes as top blockers across multiple platforms.

---

## Releases

**v0.8.60 — CodeWhale Rebrand**  
The canonical project name, command, npm package, and release assets are now **CodeWhale**. The legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users migrating from v0.8.x should follow `docs/REBRAND.md`.

---

## Hot Issues

1. **[#2487 — Frequent error: Turn stalled - no completion signal received](https://github.com/Hmbown/CodeWhale/issues/2487)**  
   The highest-comment issue this cycle. YOLO mode operations freeze with a persistent "no completion signal" error; even `continue` fails. Community frustration is high, with multiple users reporting the same pattern.

2. **[#1186 — Add typed persistent permission rules](https://github.com/Hmbown/CodeWhale/issues/1186)**  
   A long-running enhancement request for scoped, persistent execution policies by tool name, command prefix, and path pattern. Seen as essential for productionizing agent workflows.

3. **[#3147 — MSBuild FileTracker Fails to Initialize on Windows](https://github.com/Hmbown/CodeWhale/issues/3147)**  
   A blocking bug for Windows C++ developers: `cmake --build` is unusable in the CodeWhale shell due to MSBuild FileTracker initialization failures. Closed, but still generating discussion.

4. **[#1812 — TUI freezes on Windows 11 (crossterm-poll)](https://github.com/Hmbown/CodeWhale/issues/1812)**  
   Intermittent complete UI lockups on Windows 11. The process stays alive but becomes completely unresponsive. Two detailed log-captured events point to threading issues in the terminal poll layer.

5. **[#2475 — YOLO mode + Burp MCP prompt interrupts tasks](https://github.com/Hmbown/CodeWhale/issues/2475)**  
   A security-tooling integration issue: connecting to Burp in YOLO mode triggers MCP prompts that break task execution, making pentesting workflows unreliable.

6. **[#1806 — Sub-agent 120s API timeout makes agent_open nearly unusable](https://github.com/Hmbown/CodeWhale/issues/1806)**  
   A hard 120s timeout ceiling kills parallel sub-agents on longer tasks. All five sub-agents in a documented test failed identically. This is a recurring theme across multiple issues (#2029, #1679).

7. **[#2629 — 401 auth errors with SiliconFlow and Tencent Cloud TokenHub](https://github.com/Hmbown/CodeWhale/issues/2629)**  
   Chinese cloud providers SiliconFlow and Tencent Cloud TokenHub return 401 errors despite correct API key configuration. Affects users in the Asian market significantly.

8. **[#1067 — glibc 2.39 requirement blocks Ubuntu 22.04 users](https://github.com/Hmbown/CodeWhale/issues/1067)**  
   Prebuilt binaries require glibc 2.39, excluding Ubuntu 22.04 (glibc 2.35) users. A new issue (#3207) confirms this remains unresolved in the rebranded release.

9. **[#2574 — Provider fallback chain](https://github.com/Hmbown/CodeWhale/issues/2574)**  
   Users want automatic provider fallback on API errors (401, 429, 5xx) without manual `/provider` switching. The config-side work has been merged, but runtime fallback is still pending.

10. **[#2739 — Task still freezes during execution](https://github.com/Hmbown/CodeWhale/issues/2739)**  
    A user reports that despite the v0.8.52 fix for 300s sub-process timeout, long tasks still hang indefinitely. The user says they're "unable to bear it" and leaves the tool. Strong signal of unresolved reliability issues.

---

## Key PR Progress

1. **[#3225 — v0.8.61: community harvest + freeze fix + WhaleFlow foundation](https://github.com/Hmbown/CodeWhale/pull/3225)**  
   The biggest PR of the cycle: 28 commits bundling community-contributed fixes, the Windows TUI freeze fix, and the first WhaleFlow orchestration layer. Under review, not yet merge-ready.

2. **[#2811 — VS Code extension scaffold](https://github.com/Hmbown/CodeWhale/pull/2811)**  
   Adds an official VS Code extension with commands to open CodeWhale, start `codewhale serve --http`, and check local runtime status. A major step toward IDE integration.

3. **[#2779 — Provider fallback chain (config layer)](https://github.com/Hmbown/CodeWhale/pull/2779)**  
   Harvests and merges the config/data-model slice of provider fallback chains. Adds `fallback_providers` parsing with tests; runtime routing still uses the primary provider for now.

4. **[#2795 — Enrich auth errors with request context](https://github.com/Hmbown/CodeWhale/pull/2795)**  
   Improves debugging for auth failures by including provider, base URL, model, key source, and redacted key fingerprint in error messages. Directly addresses issues like #2629.

5. **[#2805 — Deterministic response cache](https://github.com/Hmbown/CodeWhale/pull/2805)**  
   Adds cache for deterministic non-streaming, tool-free requests (temperature 0.0, no tool choice). Keyed by provider, URL, API-key fingerprint, and canonical request body. Efficiency win for repeated queries.

6. **[#2803 — Pausable custom commands](https://github.com/Hmbown/CodeWhale/pull/2803)**  
   Harvests the pausable custom slash-command MVP, allowing `pausable: true` frontmatter and engine-level pause state. Improves control over long-running custom commands.

7. **[#2806 — Keep agent progress visible in sidebar](https://github.com/Hmbown/CodeWhale/pull/2806)**  
   Fixes sidebar detail row ordering that caused progress text truncation on narrow macOS CI snapshots. Small UX fix that improves agent monitoring.

8. **[#2804 — Surface subagent branch status](https://github.com/Hmbown/CodeWhale/pull/2804)**  
   Adds workspace and git branch metadata to sub-agent snapshots, including agent list and sidebar display. Persists workspace paths for reloaded state. Improves multi-agent observability.

9. **[#2802 — Hugging Face MCP helpers](https://github.com/Hmbown/CodeWhale/pull/2802)**  
   Adds `/hf mcp status`, `/hf mcp setup`, and `/hf concepts` commands. Documents Hugging Face settings-generated MCP configuration and the provider/MCP distinction.

10. **[#2771 — LLM-guided AGENTS.md init](https://github.com/Hmbown/CodeWhale/pull/2771)**  
    Upgrades `/init` to delegate AGENTS.md generation to the agent instead of writing a static template. Includes fixes for credential-safe remotes and framework detection.

---

## Feature Request Trends

1. **Provider Fallback Chains** — Multiple users request automatic fallback across providers on errors like 401, 429, 5xx. Config parsing is merged; runtime fallback is the next step.

2. **WhaleFlow Orchestration** — A new orchestration pattern is being laid down: swarm coordination, reduce/synthesis passes, and heterogeneous-model workers (DeepSeek / GLM / MiniMax / Kimi / OpenAI). Issues #3229 and #3230 are the foundation.

3. **Agent-to-Agent Communication** — Strong interest in making sub-agents first-class citizens with checkpoint/resume, self-reporting verification, and visible progress. Issues #719, #2029, and #2652 all address this.

4. **Global Configuration** — Requests for `~/.codewhale/instructions.md` as a cross-project fallback context layer. Issue #3012 was closed but interest remains.

5. **Cost Tracking Expansion** — Pricing model is deepseek-only; users want cost tracking for Kimi, Qwen, GLM, MiniMax, OpenAI, and OpenRouter models. Issue #3066 notes the feature is "dead" for non-DeepSeek models.

6. **Agent Registry Interop** — Request to be listed on `agentclientprotocol/registry` for easier Zed integration. Issue #3192.

7. **Clarification Questions** — Agents should have a first-class way to ask clarifying questions through the UI rather than emitting normal messages. Issue #3102.

---

## Developer Pain Points

1. **TUI Freezes and Stalls** — The most frequently reported category. Users experience unresponsive UI, "turn stalled" errors, and infinite waits on Windows (crossterm-poll), macOS, and Linux. Multiple issues report needing to kill and restart.

2. **Sub-Agent Reliability** — Hard 120s timeouts, clipped evaluation output mistaken for complete evidence, and inability to resume failed sub-agents. The "sub-agent API timeout makes agent_open nearly unusable" (#1806) captures the sentiment.

3. **Glibc Version Lock-In** — Prebuilt binaries requiring glibc 2.39 exclude Ubuntu 22.04 LTS users. Multiple reports over weeks with no fix landed yet.

4. **Chinese Cloud Provider Incompatibility** — SiliconFlow and Tencent Cloud TokenHub return auth errors despite correct configuration. Affects a significant Asian-market user base.

5. **NPM Update Confusion** — Users report inability to update via npm after the rebrand; `cargo install` errors about `codewhale` not found on PATH. The rebrand migration path needs clearer documentation.

6. **SSE Multi-Agent Timeouts on Windows** — Despite fixes, SSE-based multi-agent parallelism still hits 45s timeouts on Windows 11, with UI corruption reported alongside (#1679).

7. **Long-Task Session Loss** — When a long task hangs and users press Esc, the session cannot be resumed via `--continue`; all context is lost (#2739). This is a workflow-killer for production users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*