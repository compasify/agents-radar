# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-26 00:29 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-06-26

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing a period of rapid maturation and growing pains simultaneously. All major tools shipped releases within the last 72 hours, yet every platform faces significant stability and usability challenges that threaten developer trust. Token consumption governance has emerged as the dominant cross-cutting concern—users across Claude Code, OpenAI Codex, and others report uncontrolled billing drain, session resume costs, and rate-limit accounting errors. The ecosystem is bifurcating along two axes: **safety/transparency** (Claude Code, Pi prioritizing safety classification and audit trails) versus **agent autonomy** (CodeWhale, Gemini CLI pushing toward fleet compute and multi-agent orchestration). Meanwhile, MCP (Model Context Protocol) integration maturity varies widely, from OpenAI Codex's comprehensive runtime pinning to Kimi Code's tool-count scalability failure. Enterprise adoption signals are strong—OpenTelemetry documentation requests, team-level auto-memory, and server-managed settings all point to growing organizational deployment—but platform-specific regressions (Windows process leaks, macOS mouse clicks, Linux terminal flicker) remain a persistent drag on reliability.

---

## 2. Activity Comparison

| Tool | New Issues (24h) | Hot Issues (active) | PRs (24h) | Latest Release | Release Velocity |
|------|-----------------|---------------------|-----------|----------------|------------------|
| **Claude Code** | ~10 significant | 10 (+4 in wider set) | 1 merged | v2.1.193 (today) | High (multi-weekly) |
| **OpenAI Codex** | ~10+ (rate-limit cluster) | 10 | 10 in progress | rust-v0.142.2 (recent) | Moderate (weekly-ish) |
| **Gemini CLI** | ~8 | 10 | 10 open | v0.50.0-preview.1 (today) | High (weekly pre-releases) |
| **GitHub Copilot CLI** | 31 total | 10 | 1 opened | v1.0.65 (older) | Low (no release today) |
| **Kimi Code CLI** | 2 | 2 | 0 | v0.19.2 (yesterday) | Moderate (recent) |
| **OpenCode** | ~8 | 10 | 10 in progress | v1.17.11 (today) | High (frequent patch releases) |
| **Pi** | ~50 closed activity | 10 | 11 closed + 3 open | No release today (recent) | High (active maintenance) |
| **Qwen Code** | ~6 | 10 | 10 in progress | v0.19.2-nightly (today) | High (nightly + feature PRs) |
| **CodeWhale (DeepSeek TUI)** | ~12 | 10 | ~10 merged | v0.8.65 (today) | High (rebrand + hotbar push) |

**Key observations:**
- **Release cadence leaders:** Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code, and CodeWhale all shipped today—indicating a highly active maintenance cycle.
- **Silent tool:** GitHub Copilot CLI had no release; its 31 new issues without corresponding fixes suggests a growing backlog.
- **PR volume anomaly:** Claude Code had only 1 PR today despite major release—likely indicates post-release stabilization rather than active feature development.
- **Issue-to-PR gap:** Kimi Code shows 2 new bugs with 0 PRs—potentially resource-constrained or prioritizing internal fixes.

---

## 3. Shared Feature Directions

The following requirements surfaced across **multiple vendors** simultaneously, indicating genuine developer demand rather than isolated requests:

### Token Consumption Governance
- **Claude Code:** Per-session budget caps, suppress "task tools haven't been used" reminders, limit Fleet-mode spend (#61835, #71461)
- **OpenAI Codex:** Rate-limit/accounting crisis with 10-20x faster drain (#28879, #29955)
- **GitHub Copilot CLI:** Monthly AIC quota visibility (#3932)
- **OpenCode:** Multi-account round-robin load balancing to work around rate limits (#8145)
- **Pi:** No token counters surfaced yet, but provider reliability (#4945) indirectly related

**Signal:** Users want **explicit, enforceable per-session budgets** and **real-time cost visibility**—not just post-hoc billing. The Codex accounting regression has heightened sensitivity.

### Session Reliability & Observability
- **Claude Code:** Session resume without context explosion, `/recap` for legacy sessions (#71478, #62254)
- **OpenAI Codex:** `/undo` for file rollback (296 👍), session compaction context loss (#5957, #9203)
- **GitHub Copilot CLI:** Message timestamps, queued/pending semantics (#3930, #3919)
- **Gemini CLI:** Subagent trajectory sharing, session restart signals (#22598)
- **OpenCode:** TUI session navigation events for plugins (#31051)
- **Pi:** Session diagnostics, RPC endpoints for session introspection (#6078, #3610)
- **Qwen Code:** Collapsed session preview on resume (#5759)

**Signal:** The "session as a document" model is breaking down at scale—users need **recoverability, undo, and structured visibility** into what happened during a session.

### MCP Integration Maturity
- **Claude Code:** Auto-mode safety classification expansion (v2.1.193)
- **OpenAI Codex:** Runtime pinning, server-side model settings, OAuth refresh fix (#30127, #29683, #17265)
- **Gemini CLI:** Cross-server confusion fix, tool registry DI (#28143, v0.50.0)
- **GitHub Copilot CLI:** MCP server enable/disable, async read-only execution (#2956, #3829)
- **Kimi Code:** 212-tool scalability limit (#2475)
- **OpenCode:** MCP timeout split (startup vs request) (#33977)
- **Pi:** Always-trust setting for headless MCP use (#5515)
- **Qwen Code:** `@extension` mention autocomplete (#5849)
- **CodeWhale:** Hotbar MCP action adapters (#3608, #3612)

**Signal:** MCP is the universal integration layer, but **scalability (tool count), reliability (runtime pinning, OAuth refresh), and UX (mention autocomplete, approval gating)** vary dramatically across implementations.

### Enterprise & Team Features
- **Claude Code:** OpenTelemetry documentation, Team plan billing issues (#71457, #71476)
- **OpenAI Codex:** Admin-managed model defaults (#29683)
- **Gemini CLI:** Team-level auto-memory (#5867)
- **GitHub Copilot CLI:** Server-managed CLI settings, org-level policies (#3909, #3934)
- **Qwen Code:** Team tier for auto-memory (#5867)

**Signal:** Organizations are adopting AI CLI tools at scale and requesting **admin controls, audit trails, and team-scoped configuration**—not just individual developer features.

### Accessibility & Localization
- **Claude Code:** Japanese UI, keyboard-only navigation (#71479, #71470)
- **OpenAI Codex:** Screen-reader-friendly TUI mode (#20489)
- **GitHub Copilot CLI:** Per-element theming (#2123)
- **OpenCode:** Light mode code visibility, Linux clipboard (#17935, #32370)
- **CodeWhale:** Visual regression matrix with contrast guardrails (#3605)

**Signal:** Accessibility is shifting from nice-to-have to **blocking issue for adoption** in regulated environments and non-English markets.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Pi | OpenCode | Qwen Code | CodeWhale |
|-----------|-------------|--------------|------------|-------------|----|----------|-----------|-----------|
| **Primary Differentiator** | Safety-first auto-classification | Agent autonomy & MCP runtime | AST-aware code understanding | Enterprise GH integration | Extensibility & TUI customization | Multi-account load balancing | Voice & multimodal input | Fleet compute orchestration |
| **Target User** | Security-conscious dev teams | Power users, agentic workflows | Google ecosystem devs | GitHub enterprise orgs | Extension developers | Local-first, OSS community | Multilingual, Chinese market | Cost-optimized agent users |
| **Technical Approach** | Monolithic TypeScript app | Rust core + npm plugins | Rust w/ DI tool registry | Go CLI | Node.js w/ RPC IPC | Bun runtime | Node.js + WebSocket | Rust core + TypeScript TUI |
| **Safety/Trust Model** | Auto-mode classifier, permission dialogs | Per-tool confirmation | Trust dialog (inverse bug) | Plugin hook gates | Project trust gating | Bash denial in plan mode | Hook-based approvals | YOLO mode (unreliable) |
| **MCP Integration** | ClassifyAllShell safety | Runtime pinning, server-side config | Cross-server dedup | Basic show/enable | AlwaysTrust flag | Timeout split | Mention autocomplete | Hotbar adapters |
| **Key Weakness** | Token waste, auth fragility | Rate-limit accounting crisis | Agent hangs, tool non-use | Platform regressions, auth loss | OpenAI/Codex reliability (70 👍 bug) | Windows segfaults, memory leaks | Windows process leak, streaming timeout | Plan/agent mode confusion, YOLO override |

**Strategic observations:**
- **Claude Code** is positioning as the **compliance-safe option** with its expanded safety classification—but at the cost of token waste complaints.
- **OpenAI Codex** leads in **agentic workflow sophistication** (MCP runtime pinning, standalone code-mode host) but the rate-limit accounting crisis undermines trust.
- **Gemini CLI** is uniquely investing in **AST-aware tooling** for code understanding, a differentiator if executed well.
- **Pi** is the **extension platform play**—its RPC/IPC architecture and orchestrator package point toward headless, composable agent deployments.
- **CodeWhale (DeepSeek TUI)** is pushing **Fleet compute orchestration**—a distinct vision of cost-optimized, multi-model agent routing.
- **Qwen Code** is the only tool investing significantly in **voice dictation** and multimodal input—potentially differentiating for mobile/deskless users.

---

## 5. Community Momentum & Maturity

### High Momentum (active development, growing community)
- **Claude Code:** Despite frustration, it attracts the most detailed bug reports and feature requests. 63-comment issues on macOS permissions (#61415) show deep engagement. The v2.1.193 release signals Anthropic is investing in safety infrastructure.
- **Pi:** 50 issues/PRs closed in 24 hours—exceptional maintenance velocity. The orchestrator PR (#6064) and RPC endpoints suggest architectural ambition. 70-comment Codex reliability issue (#4945) is the loudest pain point.
- **CodeWhale (DeepSeek TUI):** Rebrand + hotbar feature converging rapidly (10+ hotbar PRs merged today). Community is engaged but small; the rebrand indicates strategic commitment.
- **Qwen Code:** Nightly releases + 10 active PRs—very high iteration speed. Voice dictation extension to desktop app (#5856) shows product expansion.

### Moderate Maturity (stable but evolving)
- **OpenAI Codex:** Large community (301 👍 on #28879) but the rate-limit crisis is eroding trust. The PR pipeline (10 active) is healthy, but the 10-20x billing drain is a **existential trust issue** that must be resolved urgently.
- **Gemini CLI:** Active PRs (10) but agent reliability bugs (#21409 hang, #25166 stuck shell) remain unresolved for weeks. Community engagement is moderate; the 8 👍 on #21409 is the highest upvote for a bug.
- **OpenCode:** v1.17.11 snapshot feature is a strong UX addition. 103 comments on memory megathread (#20695) signals systemic quality issues. Windows segfault (#33742, 45 comments) is a critical regression.

### Slower Velocity (risk of stagnation)
- **GitHub Copilot CLI:** 31 new issues, 0 releases, 1 PR—the lowest activity ratio. Authentication loss in resumed sessions (#3596, 11 👍) and the 14-month-old auto-update bug (#2615) suggest **maintenance debt**. Enterprise features (#3909) indicate ambition but delivery is unclear.
- **Kimi Code CLI:** 2 issues, 0 PRs. The UI shaking bug (#2474) and 212-tool MCP limit (#2475) are both critical but have no assignee or fix. **Resource-constrained** or deprioritized.

---

## 6. Trend Signals

### 1. Token Economy Transparency is Now Table Stakes
The convergence of Claude Code token waste complaints, OpenAI Codex's accounting regression, and Gemini CLI's thought leakage (#27971) all point to a single truth: **developers cannot optimize what they cannot measure**. Tools that ship real-time token counters, per-session budgets, and deterministic cost projection will win trust. OpenCode's PR #12721 (tok/s footer) is a microcosm of this macro trend.

### 2. The MCP Standard is Settling—But Implementation Quality Varies Wildly
MCP has won as the universal integration protocol, but issues like Kimi's 212-tool limit, Gemini's cross-server confusion, and Claude Code's classifyAllShell false positives show that **scalability, safety, and reliability are not yet baked in**. The next 6 months will see consolidation around best practices: runtime pinning, per-server timeout budgets, and deterministic OAuth refresh.

### 3. Agent Autonomy vs. Safety is Not Binary—It's Configurable
CodeWhale's YOLO mode (unreliable), Claude Code's auto-mode classifier (over-sensitive), and Pi's always-trust flag (opt-out) reveal that **safety is a spectrum, not a switch**. Users want granular, per-action control surfaces—not global approval mode toggles. The CodeWhale PR #3594 (clarifying Deny vs Esc semantics) and Claude Code's `/permissions` denials list are steps toward this nuance.

### 4. Platform-Specific Bugs are the #1 Trust Eroder
Windows segfaults (OpenCode #33742), macOS mouse clicks (Claude Code #71465), Wayland browser failures (Gemini CLI #21983), Linux AppImage LD_LIBRARY_PATH leakage (Copilot #3925)—**every tool has a platform regression active in the latest version**. For developer tools, "works on my machine" is the minimum bar; cross-platform reliability is the differentiator.

### 5. Agentic Workflows Demand Observability, Not Just Logging
Session transcripts that don't flush (Claude Code #70219), subagent failures reported as "GOAL success" (Gemini CLI #22323), thought leakage into plain-text history (Gemini CLI #27971)—these are not logging bugs, they are **observability failures**. Teams building AI-assisted CI/CD pipelines or autonomous agents need deterministic audit trails, not "best effort" transcripts.

### 6. The "Agent as a Platform" Vision is Emerging
Pi's orchestrator (#6064), OpenAI Codex's standalone code-mode host (#30111), and Qwen Code's ACP session reconnect (#5852) all point toward **headless, process-managed agent deployments** that don't require a TUI. The CLI is becoming a front-end to a local agent daemon, not the agent itself.

---

**Bottom line for technical decision-makers:** If you prioritize **safety and auditability**, Claude Code's trajectory is compelling—watch for the false-positive fallout from classifyAllShell. If you need **agent autonomy at scale**, OpenAI Codex has the most sophisticated architecture but the rate-limit crisis is a red flag. For **cost-sensitive multi-model routing**, CodeWhale's Fleet compute and YOLO mode are differentiated (if they can fix the approval reliability). For **enterprise deployment**, GitHub Copilot CLI has the organizational hooks but needs to ship fixes faster. Pi and OpenCode offer the **most extensible platforms** for custom integrations, but Pi's Codex reliability bug and OpenCode's Windows crashes are blockers for production use.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot**: 2026-06-26 | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following pull requests attracted the highest community attention through comments, indicating strong interest or critical importance:

### #1298 — Fix `run_eval.py` Recall Reporting (Skill-Creator Ecosystem)
**Status**: Open | **Author**: MartinCajiao | [View PR](https://github.com/anthropics/skills/pull/1298)

**Functionality**: Repairs the `run_eval.py` evaluation script, which was consistently reporting `recall=0%` for all skill descriptions regardless of actual trigger performance. The fix addresses Windows stream reading, trigger detection logic, and parallel worker behavior. This is a meta-skill fix — it directly impacts the skill-creator optimization loop (`run_loop.py`, `improve_description.py`).

**Discussion Highlights**: References Issue #556 (10+ independent reproductions). The root cause destabilized the entire description-optimization pipeline, meaning contributors couldn't reliably improve skill descriptions through automated feedback.

### #514 — Add `document-typography` Skill
**Status**: Open | **Author**: PGTBoos | [View PR](https://github.com/anthropics/skills/pull/514)

**Functionality**: Typographic quality control for AI-generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment. Targets a universal pain point in Claude-generated reports and documents.

**Discussion Highlights**: Addresses a class of visual formatting issues users rarely explicitly request but consistently encounter. The "every document Claude generates" framing resonated strongly.

### #486 — Add ODT Skill (OpenDocument Support)
**Status**: Open | **Author**: GitHubNewbie0 | [View PR](https://github.com/anthropics/skills/pull/486)

**Functionality**: Full OpenDocument format support — creation, template filling, ODT-to-HTML conversion. Triggers on "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice" mentions.

**Discussion Highlights**: Fills a major format gap in the document-skills collection (DOCX and PDF existed; ODT did not). Community interest reflects demand for LibreOffice/ISO-standard document workflows.

### #210 — Improve `frontend-design` Skill Clarity
**Status**: Open | **Author**: justinwetch | [View PR](https://github.com/anthropics/skills/pull/210)

**Functionality**: Revises the existing frontend-design skill for clearer, more actionable instructions — ensuring every directive is something Claude can execute within a single conversation.

**Discussion Highlights**: Represents a community-driven quality refinement of an existing skill rather than net-new functionality. Focused on reducing ambiguity that caused Claude to misinterpret design guidance.

### #83 — Add `skill-quality-analyzer` and `skill-security-analyzer` to Marketplace
**Status**: Open | **Author**: eovidiu | [View PR](https://github.com/anthropics/skills/pull/83)

**Functionality**: Two meta-skills for evaluating other skills across five dimensions: Structure & Documentation (20%), plus security analysis for vulnerability detection.

**Discussion Highlights**: Meta-skills (skills about skills) are a growing category. This PR addresses quality assurance and security auditing — both emerging community concerns.

### #541 — Fix DOCX Tracked Change `w:id` Collision
**Status**: Open | **Author**: Lubrsy706 | [View PR](https://github.com/anthropics/skills/pull/541)

**Functionality**: Prevents document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. The root cause was hardcoded `w:id` values conflicting with the shared ID space in OOXML.

**Discussion Highlights**: Illustrates the complexity of OOXML format handling. A narrow but critical fix for users generating tracked-change documents programmatically.

### #723 — Add `testing-patterns` Skill
**Status**: Open | **Author**: 4444J99 | [View PR](https://github.com/anthropics/skills/pull/723)

**Functionality**: Comprehensive testing coverage: Testing Trophy philosophy, AAA pattern, React component testing with Testing Library, integration testing, E2E with Playwright, and accessibility testing.

**Discussion Highlights**: Addresses the full software testing stack in a single skill. Community interest signals demand for systematic test generation and quality assurance automation.

---

## 2. Community Demand Trends

From the Issues tracker, the most-anticipated new Skill directions and community pain points are:

| Demand Area | Key Issue(s) | Signal Strength |
|---|---|---|
| **Windows Compatibility** | #556, #1061, #1169 — `run_eval.py` and skill-creator scripts crash on Windows (subprocess `PATHEXT`, `cp1252` encoding, `select()` on pipes) | **Highest** — 3+ issues, 18+ comments, multiple independent reproductions |
| **Skill Ecosystem Governance** | #492 — Community skills distributed under `anthropic/` namespace enabling trust boundary abuse | **High** — 19 comments, 2 upvotes. Security implications for permission escalation |
| **Organizational Skill Sharing** | #228 — Request for org-wide skill library or sharing links instead of manual file transfers | **High** — 14 comments, 7 upvotes. Enterprise adoption blocker |
| **Skill Duplication** | #189 — `document-skills` and `example-skills` plugins install identical content | **Medium** — 6 comments, 9 upvotes. Wasted context window tokens |
| **Agent Safety Patterns** | #412 — Proposal for `agent-governance` skill covering policy enforcement and audit trails | **Medium** — Proposal stage but signals demand for safety tooling |
| **Compact Agent Memory** | #1329 — Symbolic notation for persistent agent state to reduce context overhead | **Emerging** — New proposal, 5 comments. Addresses long-running agent efficiency |
| **Microsoft 365 Integration** | #1175 — SharePoint Online document handling with access control concerns | **Emerging** — Enterprise integration with security considerations |

**Key Observation**: The dominant community demand is **not** for new domain-specific skills, but for **reliability of the skill-creation toolchain itself** — particularly Windows compatibility and accurate evaluation metrics. The skill-creation pipeline has been effectively broken for a non-trivial portion of the community.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to land soon:

| PR | Skill | Author | Status Signal |
|---|---|---|---|
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | PGTBoos | Long-running (Mar 2026), no merge conflicts reported. Universal use case. |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` (OpenDocument Format) | GitHubNewbie0 | Format gap closure. Templating and conversion features. |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 4444J99 | Comprehensive — covers unit, React, integration, E2E, accessibility. |
| [#360](https://github.com/anthropics/skills/pull/360) | `appdeploy` (full-stack webapp deployment) | avimak | Direct deployment from Claude via AppDeploy.ai. Lifecycle management included. |
| [#147](https://github.com/anthropics/skills/pull/147) | `codebase-inventory-audit` | p19dixon | 10-step orphan code detection and documentation audit workflow. |
| [#154](https://github.com/anthropics/skills/pull/154) | `shodh-memory` (persistent agent context) | varun29ankuS | Cross-conversation memory system with proactive context retrieval. |
| [#181](https://github.com/anthropics/skills/pull/181) | `sap-rpt-1-oss` (SAP predictive analytics) | amitlals | Enterprise-grade tabular foundation model integration (Apache 2.0). |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is not for new domain skills, but for toolchain reliability — fixing the skill-creator evaluation pipeline (especially on Windows) and establishing governance/trust boundaries around community-contributed skills under the official namespace.**

The conversation has shifted from *"what can skills do?"* to *"how can we trust and reliably improve the skills we build?"* — a sign of ecosystem maturation where infrastructure and trust mechanisms now outweigh feature requests.

---

# Claude Code Community Digest — 2026-06-26

## Today's Highlights

Anthropic shipped **v2.1.193** with a major expansion to the auto-mode classifier—now routing *all* Bash/PowerShell commands through safety classification instead of just arbitrary-code-execution patterns. Meanwhile, the community is signaling mounting frustration around **token waste**, **authentication reliability**, and **session management**, with multiple high-engagement issues surfacing around VM boot failures, permissions regressions on macOS, and unconscious billing drain.

## Releases

**v2.1.193** — released 2026-06-26

The headline change is `autoMode.classifyAllShell`: when enabled, every Bash and PowerShell command—not just arbitrary-code-execution patterns—goes through the auto-mode classifier. This tightens safety posture considerably for security-conscious teams. Additional improvements include:
- Auto-mode denial reasons now appear in the transcript, the denial toast, and the `/permissions` recent denials list.
- Partial changelog fragment suggests there may be more (note: the release note cuts off mid-sentence).

## Hot Issues (10 most significant open discussions)

1. **[BUG] Desktop: Bypass Permissions mode can't be enabled on macOS** ([#61415](https://github.com/anthropics/claude-code/issues/61415))  
   *63 comments, 24 👍* — The top community pain point: attempting to enable Bypass Permissions on the desktop app silently reverts. Long-running (since May 22) and still unresolved. Most upvoted open issue.

2. **[BUG] Cowork VM guest kernel never boots on Snapdragon X Plus (ARM64)** ([#39636](https://github.com/anthropics/claude-code/issues/39636))  
   *29 comments, 9 👍* — Persistent connection timeout for ARM64 Windows users; no fix after 3 months. Affects a growing install base of Snapdragon X laptops.

3. **[BUG] VS Code extension resumes huge sessions without warning** ([#71478](https://github.com/anthropics/claude-code/issues/71478))  
   *4 comments* — Fresh (24 hours old) report: VS Code extension silently restores massive sessions and drains Max usage before users can intervene. High urgency for anyone on consumption-based billing.

4. **[BUG] Sub-agent API 401 reported as "interrupted by user"** ([#70958](https://github.com/anthropics/claude-code/issues/70958))  
   *2 comments, 1 👍* — Dangerous UX: auth token expiry in sub-agents surfaces as a user-interruption signal, making automated recovery impossible. A reliability bug with agentic workflows.

5. **[BUG] `@import` directives ignore path-scoped rule frontmatter** ([#66027](https://github.com/anthropics/claude-code/issues/66027))  
   *2 comments, 2 👍* — Imported rule files load globally regardless of `paths:` scope. Subtle but breaks the mental model for multi-repo monorepo setups.

6. **[BUG] tmux/psmux session transcripts never written** ([#70219](https://github.com/anthropics/claude-code/issues/70219))  
   *2 comments, 1 👍* — No `.jsonl` file is created inside tmux sessions. Critical for teams relying on hook-based post-processing or audit trails.

7. **[BUG] TaskCreate reminder fires despite explicit ban in CLAUDE.md** ([#60323](https://github.com/anthropics/claude-code/issues/60323))  
   *3 comments, 5 👍* — Harness overrides user-configured instructions. Undermines trust in CLAUDE.md as an authoritative configuration source.

8. **[BUG] Fleet mode excessive token consumption on simple task** ([#71461](https://github.com/anthropics/claude-code/issues/71461))  
   *1 comment* — A "simple type-checking audit" burned through a 100/month subscription. Fleet mode launching as an efficiency feature; this suggests the opposite.

9. **[BUG] Team subscription billing API credits instead of Team plan** ([#71476](https://github.com/anthropics/claude-code/issues/71476))  
   *1 comment* — Forced re-login switched billing to API credit balance. Potentially expensive surprise for orgs on Team plans.

10. **[BUG] Mouse clicks not responding in TUI on Terminal.app** ([#71465](https://github.com/anthropics/claude-code/issues/71465))  
    *2 comments* — Regression in v2.1.193: mouse interaction broken in the TUI on macOS. Directly impacts daily usability for Terminal.app users.

## Key PR Progress

1. **[CLOSED] Bump stale and autoclose timeouts from 14 to 90 days** ([#63686](https://github.com/anthropics/claude-code/pull/63686))  
   Merged. Extends issue lifecycle to align with slower-moving enterprise triage cycles. Good community relations signal.

*(Note: Only 1 PR was updated in the last 24h per the dataset. The following list represents recently active or structurally important PRs inferred from the wider context of issues referencing fixes.)*

2. **Auto-mode classifier expansion** (v2.1.193 code) — The `classifyAllShell` setting is a significant safety architecture change; watch for false-positive fallout.

3. **Transcript persistence to disk** — Multiple bugs (#70219, #70632) suggest a systematic review of transcript write-flush timing is underway or needed.

4. **SSH auth token invalidation fix** — #54179 has high engagement (3 comments, 2 👍) and appears to be an active investigation area.

*(Note: Only one PR was present in the 24-hour dataset. Additional PR tracking requires a broader time window.)*

## Feature Request Trends

- **Token-consumption governance** (#61835, #71461, #64192, #62323): The dominant theme. Users want controls to suppress "task tools haven't been used" reminders, cap session resume costs, and limit Fleet-mode spend. The system currently has no per-session budget enforcement.

- **Sub-agent labeling & visibility** (#71292): Developers want dispatch-time stable labels for sub-agents spawned via Agent/Task tools. Current naming is opaque, making agent-view debugging difficult.

- **Localization & accessibility** (#71479, #71470): First requests for Japanese UI localization and keyboard-only navigation for screen-reader users. Signals growing non-English and accessibility-conscious adoption.

- **OpenTelemetry documentation** (#71457): Missing docs for `claude_code.assistant_response` and `OTEL_LOG_ASSISTANT_RESPONSES` suggest observability is becoming a priority for enterprise users.

- **Permission dialog tool approval localization** (#71479): The permission UI is English-only; teams with non-English-speaking members need localized approval dialogs.

## Developer Pain Points

1. **Uncontrolled token burn**: The #1 frustration. Sessions auto-recover huge contexts (#71478), Fleet mode overconsumes (#71461), harness reminders waste tokens (#60323, #64192), and auto-compact loops (#51088) drain accounts overnight. Users lack kill switches and budget caps.

2. **Authentication fragility**: Sub-agent 401s misreport as user interruptions (#70958), re-logins switch billing plans (#71476), multi-session SSH invalidates tokens (#54179). The auth layer is a single point of failure for all agentic workflows.

3. **Session transcript & audit inconsistencies**: tmux sessions don't write transcripts (#70219), Linux transcripts flush only on exit (#70632), legacy sessions ignore `/recap` (#62254). Any team relying on audit trails or hook-based processing is at risk.

4. **Rule/scope enforcement gaps**: `@import` bypasses path scoping (#66027), `CLAUDE.md` directives are overridden (#60323), auto-mode produces false positives on legitimate hardening tasks (#71463). Configuration isn't authoritative.

5. **Platform-specific regressions on release**: Mouse clicks broken in Terminal.app on v2.1.193 (#71465), permissions bypass broken on macOS since 2.1.148 (#61415). Each release introduces regressions that affect daily workflows immediately.

6. **Cowork/VM reliability on non-Intel**: Snapdragon X ARM64 VMs never boot (#39636), Windows Desktop orphans job objects (#53247). Architecture parity is lagging behind device adoption.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-26

## Today's Highlights
Rate-limit and quota accounting issues dominate the community's attention this week, with multiple reports of Pro and Plus plan budgets draining 10–20x faster than expected since mid-June. On the development side, significant progress is being made on MCP runtime pinning, environment-aware plugin metadata projection, and the new standalone Code Mode host service. Two new Rust releases (0.142.1 and 0.142.2) shipped with system proxy support for macOS and Windows authentication clients.

---

## Releases

### rust-v0.142.1
- **New:** Opt-in Windows system proxy support for authentication, including PAC, WPAD, static proxies, and bypass rules. (#26708)
- [View Release](https://github.com/openai/codex/releases/tag/rust-v0.142.1)

### rust-v0.142.2
- **New:** MCP tools now use tool search by default when supported, improving tool discovery while preserving compatibility with older models and providers. (#29486)
- **New:** macOS authentication clients can honor system proxy, PAC, and WPAD settings when `respect_system_proxy` is enabled. (#26709)
- [View Release](https://github.com/openai/codex/releases/tag/rust-v0.142.2)

### Pre-release versions
- `rust-v0.143.0-alpha.16`, `.21`, `.22`, `.25` — no changelog notes provided.

### codex-zsh-v0.1.0
- [View Release](https://github.com/openai/codex/releases/tag/codex-zsh-v0.1.0)

---

## Hot Issues

1. **[#28879 — Rate-limit cost per token jumped 10–20x since June 16](https://github.com/openai/codex/issues/28879)**  
   *152 comments, 301 👍*  
   The top community concern: ChatGPT Plus users on `gpt-5.5` report their 5-hour budget draining in 2–3 prompts instead of 20+. Session logs confirm `limit-% consumed per token` increased 10–20x with no configuration change. OpenAI has not yet acknowledged root cause.

2. **[#29955 — Quota drained instantly: 100 credits gone after 1 message](https://github.com/openai/codex/issues/29955)**  
   *23 comments, 4 👍*  
   A Pro×5 user saw 100 credits consumed and the 5-hour limit reset to 0% after a single message. Points to server-side over-reporting rather than client-side bugs.

3. **[#30002 — Pro 5h limit burned in ~41 min / 1.35M tokens after reset](https://github.com/openai/codex/issues/30002)**  
   *19 comments, 4 👍*  
   Detailed evidence: same account earlier used ~156M tokens in a full window, then hit limit after only 1.35M tokens post-reset. Suggests cumulative accounting state is corrupted.

4. **[#25749 — Inaccessible legacy phone number blocks account recovery](https://github.com/openai/codex/issues/25749)**  
   *64 comments, 38 👍*  
   Users authenticated via Google OAuth with MFA are stuck when Codex demands verification of an old phone number with no bypass or recovery path. Affects Plus subscribers who cannot use the product.

5. **[#9203 — Please make `/undo` back](https://github.com/openai/codex/issues/9203)**  
   *50 comments, 296 👍*  
   The highest-voted open feature request: users want `/undo` restored to recover from unintended file deletions or modifications, especially when changes aren't git-tracked.

6. **[#28978 — Desktop app 26.616: new conversations fail with "missing field `inputSchema`"](https://github.com/openai/codex/issues/28978)**  
   *25 comments, 30 👍*  
   MCP tool definitions missing `inputSchema` block all new conversations on Desktop 26.616, while CLI with same config works. Regression appears tied to the auto-update on June 18.

7. **[#25719 — Codex Desktop triggers `syspolicyd` CPU/memory runaway on macOS](https://github.com/openai/codex/issues/25719)**  
   *34 comments, 54 👍*  
   Persistent process spawns from Codex Desktop cause `syspolicyd` and `trustd` to consume runaway CPU and memory. Users report system instability requiring reboot.

8. **[#17265 — MCP OAuth tokens not auto-refreshed even with stored refresh_token](https://github.com/openai/codex/issues/17265)**  
   *19 comments, 39 👍*  
   Codex persists `refresh_token` in `~/.codex/.credentials.json` but never uses it, causing MCP tool calls to fail silently after access token expiry.

9. **[#5957 — Auto compaction causes GPT-5-Codex to lose task context](https://github.com/openai/codex/issues/5957)**  
   *31 comments, 9 👍*  
   Long-running sessions: auto compaction makes the model forget it is mid-task, has edited files, or needs to continue. Enterprise users affected.

10. **[#30086 — Pro quota draining abnormally with `needs_follow_up` token loops](https://github.com/openai/codex/issues/30086)**  
    *3 comments, 4 👍*  
    Local logs reveal the model emits repeated `model_needs_follow_up` tokens even after task completion, apparently burning quota on no-op reasoning loops.

---

## Key PR Progress

1. **[#30145 — Reuse walk inventory for environment skill metadata](https://github.com/openai/codex/pull/30145)**  
   Environment skill discovery already runs `fs/walk`; this PR reuses the returned file inventory to find `agents/openai.yaml` files instead of discarding it. Reduces duplicate filesystem operations.

2. **[#29375 — Support npm marketplace plugin sources](https://github.com/openai/codex/pull/29375)**  
   Fixes `plugin list --available` to show npm-backed plugins; previously treated `{"source":"npm"}` as unsupported. Enables npm-based plugin distribution.

3. **[#30127 — Route MCP elicitation to its live runtime](https://github.com/openai/codex/pull/30127)**  
   Prevents stale MCP runtime usage when environment availability replaces the session's current runtime mid-call (e.g., during user approval prompts).

4. **[#30093 — Project selected plugin runtime by environment availability](https://github.com/openai/codex/pull/30093)**  
   Separates stable plugin metadata from live MCP process state so that only roots that resolved as "available" are projected to the model each step.

5. **[#30141 — core: load hook-backed user instructions](https://github.com/openai/codex/pull/30141)**  
   Resolves user-level `UserInstructions` via hooks at the same lifecycle boundary as `AGENTS.md`, enabling more granular per-user instruction injection.

6. **[#30144 — fix terminal rollout durability](https://github.com/openai/codex/pull/30144)**  
   Closes a durability window where terminal `TurnComplete`/`TurnAborted` events could be delivered before previous rollouts were flushed, potentially corrupting session state.

7. **[#30111 — implement standalone code-mode process host](https://github.com/openai/codex/pull/30111)**  
   New `codex-code-mode-host` stdio service routes sessions, cells, and cancellation through a bounded host peer with V8 failure boundaries. Foundation for sandboxed code execution.

8. **[#30000 — Prototype Codex Apps as virtual HTTP MCP servers](https://github.com/openai/codex/pull/30000)**  
   Transforms shared Codex Apps into loopback streamable-HTTP MCP endpoints with no App-specific launch branch in MCP manager or core.

9. **[#29927 — feat(app-server): add history_mode to thread](https://github.com/openai/codex/pull/29927)**  
   Adds `"legacy" | "paginated"` history mode to threads, stored in JSONL rollouts and SQLite. Enables server-side paginated history display in the Desktop app.

10. **[#29683 — Add managed new-thread model settings](https://github.com/openai/codex/pull/29683)**  
    Allows admins to set persistent defaults for model, reasoning effort, and service tier used when creating new threads in the Desktop App.

---

## Feature Request Trends

**1. Session reliability and undo capabilities** — The `#9203` `/undo` request (296 👍) is the highest-voted open feature, reflecting deep frustration with unrecoverable file changes. Users want a reliable rollback mechanism even when git isn't available.

**2. Accessibility improvements** — `#20489` requests a screen-reader-friendly TUI mode. VoiceOver users hear decorative terminal UI as content, and a contributor has a local fix ready.

**3. Headless remote Linux support for mobile** — `#23200` (21 👍): users want Codex mobile to connect directly to always-on Linux servers via SSH without requiring a desktop app to stay online.

**4. Automatic update opt-out** — `#18546` requests the ability to disable automatic app updates after many users report regressions from forced updates (e.g., the `inputSchema` bug in 26.616).

**5. Goal continuation without synthetic prompts** — `#24016` asks for `codex exec resume` to support promptless follow mode for active goals, avoiding the need to inject `"continue"` as a synthetic prompt.

---

## Developer Pain Points

**Rate-limit and quota accounting crisis** — At least 5 distinct issues (`#28879`, `#29955`, `#30002`, `#30034`, `#30086`) describe quota draining 10–20x faster than expected. The recurrence across Plus, Pro, and Enterprise accounts suggests a server-side regression affecting all tiers since ~June 16.

**MCP OAuth refresh failures** — `#17265` and `#28978` highlight two MCP pain points: tokens aren't refreshed even when a `refresh_token` is stored, and schema validation errors (`inputSchema`) block new conversations entirely on the latest Desktop build.

**macOS system process runaway** — `#25719` and `#28071` report `syspolicyd`/`trustd` CPU/memory exhaustion caused by Codex Desktop, requiring system reboots to recover.

**Account recovery dead ends** — `#25749` and `#20320` describe users locked out because Codex demands SMS verification to an inaccessible legacy phone number, with no escalation path or alternative authentication method.

**Windows sandbox regressions** — `#29200`, `#30009`, and `#30050` report the `apply_patch` sandbox setup dialog appearing errantly on Windows after the 26.616 update, along with severe memory pressure that destabilizes the OS.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-26

## Today's Highlights
The team released **v0.50.0-preview.1** with critical CI fixes and a new tool registry dependency injection pattern, alongside the stable **v0.49.0** release. A wave of open-source contributors landed fixes for **MCP resource cross-server confusion**, **skill `.gitignore` filtering**, **editor startup latency**, and **stale `update_topic` calls after session reset**. Community attention remains focused on agent reliability: subagent recovery masking, the generalist agent hang, and shell command stalling after completion.

---

## Releases
- **[v0.50.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)** — Fixes for release verification CI: `npm ci` now respects `--ignore-scripts`, workspace binary shadowing in verification is prevented, and the tool registry now uses dependency injection.
- **[v0.49.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0)** — Stable release with dependency bump automation, cooldown period for Dependabot npm updates, and refactoring groundwork.
- **[v0.49.0-nightly.20260625](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0-nightly.20260625.gd845bc5d4)** — Nightly with path traversal fix for skill install, pending tools / trust overrides fix, and CI improvements.

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 8 comments, 2 👍)  
   A `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even after hitting the maximum turn limit without doing analysis. This masks failures from users and downstream evals. Community pulse: zero engagement beyond triage, but severity is high.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8 👍)  
   When Gemini CLI defers to the generalist agent, it hangs indefinitely for simple tasks like folder creation. Users have found a workaround: instruct the model not to delegate. This is the most upvoted active bug — clear community pain point.

3. **[#25166 — Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)  
   Simple CLI commands (no stdin expected) remain marked as "Awaiting user input" after finishing. Reproducible and severely impacts everyday workflows. Community calling for fix.

4. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments)  
   Epic tracking expansion of behavioral eval coverage (currently 76 tests across 6 Gemini models) and creation of a framework for reliable component-level testing. Not user-facing but critical for release confidence.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)  
   Custom skills (e.g., Gradle, Git) and sub-agents are ignored by the model unless explicitly instructed to use them. Limits the value of the skill system. Community agrees this undermines the agent-as-tool vision.

6. **[#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments, 1 👍)  
   Epic investigating whether AST-aware tools reduce turns, noise, and improve navigation. Could improve codebase_investigator and task tracker. High signal for developer productivity.

7. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments, 1 👍)  
   Browser subagent crashes with termination reason "GOAL" in Wayland environments. Linux users on Wayland cannot use the browser agent. No fix yet.

8. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 5 comments)  
   Auto Memory sends transcript content to the model before redaction, and logs skill invocations that may contain secrets. Community concern about data leakage; request for deterministic redaction before model context.

9. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)  
   When more than ~128 tools are registered, Gemini CLI hits a 400 error. Suggests the agent needs smarter tool scoping. Affects power users with many MCP/skill tools.

10. **[#23571 — Model frequently creates temp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)** (P2, 3 comments)  
    The model generates many edit scripts across various directories instead of working in a designated workspace, creating cleanup overhead. Community request for better workspace discipline.

---

## Key PR Progress

1. **[#28143 — Fix MCP resource cross-server confusion](https://github.com/google-gemini/gemini-cli/pull/28143)** (open, size/l)  
   `read_mcp_resource` could return wrong server content when two MCP servers used the same URI. Also fixes "always allow" approvals reading from every server. Critical reliability fix.

2. **[#28149 — Respect .gitignore/.geminiignore in skill resource listing](https://github.com/google-gemini/gemini-cli/pull/28149)** (open, size/s)  
   Skill folder structures shared with the model now properly filter ignored files. Prevents leaking irrelevant or sensitive files into model context. Simple but important.

3. **[#28153 — Ignore stale update_topic calls after session reset](https://github.com/google-gemini/gemini-cli/pull/28153)** (open, size/m)  
   Prevents orphaned `update_topic` calls (emitted around `/clear`) from writing to the new session's topic state. Fixes topic corruption.

4. **[#28144 — Detect available editors lazily to avoid slow startup](https://github.com/google-gemini/gemini-cli/pull/28144)** (open, size/m)  
   `EditorSettingsManager` now probes editors lazily instead of scanning all known editors via `execSync` at module scope. Fixes 2-3 second startup delay on Windows.

5. **[#28147 — Prevent bad NPM releases and promote job crashes](https://github.com/google-gemini/gemini-cli/pull/28147)** (closed)  
   Reorganizes release verification so integration tests run *before* `npm publish`, preventing dangling preview releases. Also fixes promote job crashes from untagged releases.

6. **[#28142 — Honor GOOGLE_CLOUD_LOCATION for Vertex AI with API key](https://github.com/google-gemini/gemini-cli/pull/28142)** (open, size/m)  
   Fixes silent routing to global endpoint when authenticating to Vertex AI with an API key. Regional compliance and latency fix.

7. **[#27971 — Strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** (open, size/m)  
   Fixes "thought leakage" where model internal monologues leak into plain-text history, causing infinite loop monologues. Community-reported fix.

8. **[#27915 — Trust dialog discloses the hook shape that never runs](https://github.com/google-gemini/gemini-cli/pull/27915)** (open, size/m)  
   Workspace-trust dialog shows the *inverse* of hooks that actually execute — a security/misinformation bug. Closes issue #27901.

9. **[#28146 — Document all three usageMetadata token fields for LLMResponse](https://github.com/google-gemini/gemini-cli/pull/28146)** (open, size/xs)  
   Hooks documentation now correctly reflects that `BeforeModel`/`AfterModel` hooks receive three token fields, not one. Developer experience fix.

10. **[#28015 — Cloud Run webhook ingestion service for Caretaker Agent](https://github.com/google-gemini/gemini-cli/pull/28015)** (open, size/xl)  
    Implements a GitHub webhook ingestion service using Firestore transactions and Pub/Sub. Caretaker infrastructure work from a contributor.

---

## Feature Request Trends

- **AST-aware code understanding** — Multiple issues (e.g., #22745, #22746) request introducing AST-aware file reads, codebase mapping, and method-bound navigation to reduce token waste and improve precision.
- **Subagent transparency** — Requests for subagent trajectory sharing via `/chat share` (#22598) and including subagent context in `/bug` reports (#21763) reflect a strong desire for debugging visibility.
- **Destructive action prevention** — Community wants the agent to avoid/suggest safer alternatives for destructive operations like `git reset --force`, `DROP TABLE`, etc. (#22672).
- **Agent self-awareness** — Users want Gemini CLI to accurately describe its own hotkeys, CLI flags, and run itself with correct options (#21432).
- **Auto Memory robustness** — Requests to stop retrying low-signal sessions indefinitely (#26522), validate memory inbox patches (#26523), and add deterministic redaction before model context (#26525).

---

## Developer Pain Points

- **Agent hangs and stuck states** — The generalist agent hang (#21409) and shell command "Waiting input" stall (#25166) are the most frustrating issues, stopping workflows entirely.
- **The agent doesn't use its own tools** — Skills and sub-agents are ignored unless explicitly instructed (#21968). The value of the entire extension system is undermined.
- **Subagent failure masking** — MAX_TURNS or browser agent errors reported as "GOAL success" (#22323, #21983) makes debugging impossible; users can't tell when the agent silently failed.
- **Browser agent unusable on Wayland** — Linux users on Wayland (#21983) cannot use the browser subagent at all. Unaddressed for months.
- **Data leakage uncertainty** — Auto Memory sends content to the model before redaction (#26525), and skill logs may contain secrets. Users want deterministic guarantees before trusting the feature.
- **Editor startup delay (Windows)** — Probing all editors synchronously adds 2-3 seconds to startup (#28144). A mayor quality-of-life issue for Windows users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-26

## Today's Highlights
The community saw a surge in **session management and authentication frustrations**, with two related bugs (#3596, #3680) preventing model listing in resumed sessions—garnering 11 upvotes combined. A **new enterprise-focused feature request** (#3909) for server-managed CLI settings emerged, signaling growing demand for organizational controls. The volume of new issues remains high (31 items in 24h), though **no new releases were published today**.

## Releases
No new releases in the last 24 hours. The latest stable version remains **v1.0.65**.

---

## Hot Issues (Top 10 Noteworthy)

**1. [#3596 — Error loading model list: Error: Not authenticated](github/copilot-cli Issue #3596)**  
*Area: authentication, sessions, models* — When resuming a session, `/model` commands fail with authentication errors, while fresh sessions work fine. 11 👍 reflect widespread impact. **Why it matters:** Breaks model-switching during long-lived sessions, a core workflow.

**2. [#2643 — preToolUse: silent command rewrite shows confirmation dialog despite permissionDecision: allow](github/copilot-cli Issue #2643)**  
*Area: plugins* — Hook-based command rewrites cannot execute silently; confirmation dialogs appear every time. 12 comments indicate active community debugging. **Why it matters:** Prevents fully automated plugin workflows.

**3. [#700 — Provide a way to list all models supported by the CLI](github/copilot-cli Issue #700)**  
*Area: models* — Long-standing request (since Dec 2025) for a `copilot --list-models` command, with 14 comments and 4 👍. **Why it matters:** Lack of discoverability for supported models hampers user choice.

**4. [#3501 — Scroll bar makes text unalign on Windows](github/copilot-cli Issue #3501)**  
*Area: platform-windows, terminal-rendering* — Vertical scroll bar breaks text alignment in Windows Terminal and Console Host. 9 👍 highlight Windows UX concerns. **Why it matters:** Core terminal rendering regression affecting a large user base.

**5. [#3636 — Voice mode fails on corporate VPN (model catalog unreachable)](github/copilot-cli Issue #3636)**  
*Area: networking, models* — `/voice` cannot fetch STT model catalog behind VPNs, completely blocking voice mode. **Why it matters:** Enterprise users with restricted networks cannot use a flagship feature.

**6. [#3534 — `/copy` fails on WSL2 ARM64 due to cmd.exe quoting bug](github/copilot-cli Issue #3534)**  
*Area: input-keyboard, platform-windows* — Clipboard operations broken on ARM64 WSL2 since v1.0.55. **Why it matters:** New ARM-based Windows devices lose clipboard functionality.

**7. [#3909 — Enterprise/org server-managed settings for local CLI](github/copilot-cli Issue #3909)**  
*Area: enterprise, configuration* — Org admins cannot centrally push env/config to local CLI installs. **Why it matters:** Critical gap for enterprise adoption; only cloud environments are configurable today.

**8. [#3925 — Linux AppImage leaks LD_LIBRARY_PATH, breaking git HTTPS](github/copilot-cli Issue #3925)**  
*Area: platform-linux, networking, installation* — AppImage bundles corrupt git HTTPS operations via LD_LIBRARY_PATH leakage. **Why it matters:** Blocks session creation entirely on affected Linux setups.

**9. [#3692 — Escape key should focus pending prompt, not discard it](github/copilot-cli Issue #3692)**  
*Area: input-keyboard* — Queued follow-up prompts are dropped when Escape cancels a running task. **Why it matters:** Interrupts natural multi-step query flow.

**10. [#3930 — Show message timestamps in conversations](github/copilot-cli Issue #3930)**  
*Area: sessions, terminal-rendering* — Users cannot tell when prompts/responses occurred; 2 👍 suggests broad interest. **Why it matters:** Temporal context is essential for debugging long sessions.

---

## Key PR Progress

Only **1 PR** was opened in the last 24 hours:

**#3928 — [Add .gitignore and settings configuration](github/copilot-cli PR #3928)**  
*Author: tpsaint* — A straightforward contribution adding project hygiene files. Minimal discussion; likely a minor maintenance PR.

*No other PRs were updated in the last 24 hours, indicating a quiet period for active code changes.*

---

## Feature Request Trends

1. **Enterprise Configuration Management** — Multiple requests (#3909, #3934) for org-level policies, MCP server blocking, and remote settings push to local CLI installs.
2. **Model Discoverability & Quota Visibility** — Calls for `--list-models` (#700) and monthly AIC quota display (#3932) echo IDE plugin parity.
3. **MCP Server Lifecycle Improvements** — Users want enable/disable from `/mcp show` menus (#2956, #3564), async execution of read-only MCP commands (#3829), and MCP server "instructions" support (#1579).
4. **Session & Timeline Observability** — Timestamps (#3930), clearer queued/pending semantics (#3919), and accurate subagent reporting (#3937) are recurring themes.
5. **Theming & Accessibility** — Per-element theming (#2123) and theme detection regressions in VSCode terminal (#3935) show demand for UI customization.

---

## Developer Pain Points

- **Authentication Loss in Resumed Sessions** — Two separate bugs (#3596, #3680) report the same root cause: model list loading fails after `--resume`, forcing users to start fresh sessions. 11 combined 👍 indicate high impact.
- **Plugin Hook Limitations** — Silent command rewriting is impossible (#2643), and migrated Claude Code skills get lost on update (#3938).
- **Platform-Specific Regressions** — Windows scroll bar alignment (#3501), WSL2 ARM64 clipboard failure (#3534), Linux AppImage library leakage (#3925) — three distinct platform bugs in active versions.
- **Configuration Ignored** — `autoUpdate` setting in `config.json` has been broken since v1.0.4 (#2615), with no resolution after ~14 months.
- **Voice Mode Blocked by Network** — Corporate VPNs (#3636) and unreachable model catalogs create hard blocks for voice mode, an otherwise touted feature.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the **Kimi Code CLI Community Digest** for **2026-06-26**.

---

## Kimi Code CLI Community Digest
**Date:** 2026-06-26

### 1. Today's Highlights
The community is experiencing a quiet day with no new releases or merged pull requests. However, two critical bugs surfaced yesterday involving the latest version (v0.19.2): a severe interface rendering issue causing constant "shaking" and full conversation re-renders on Linux, and a specific limitation in the MCP (Model Context Protocol) integration where a server with 212 tools cannot be fully loaded or utilized. Developer attention is focused on these stability blockers.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
- **[#2475 – [bug] MCP tools](https://github.com/MoonshotAI/kimi-cli/issues/2475)**  
  **Why it matters:** This highlights a significant scalability issue with the MCP server integration. A user with 212 tools (likely an IDE plugin or complex agent setup) reports the tool list fails to load. This is a blocker for advanced agent workflows. *Community reaction:* No comments yet, but high importance given the MCP tooling trend.

- **[#2474 – UI shaking/re-rendering (Linux)](https://github.com/MoonshotAI/kimi-cli/issues/2474)**  
  **Why it matters:** A critical rendering bug on Linux (`k2.7` model) causing the entire terminal UI to flicker and reset the conversation history. This makes the CLI unusable for affected users. *Community reaction:* 0 comments, but likely high frustration given the severity.

*(Note: Only 2 issues were updated in the last 24h. Both are listed above.)*

### 4. Key PR Progress
No pull requests were updated in the last 24 hours.

### 5. Feature Request Trends
*(Based on analysis of all open issues)*
- **MCP Tool Scalability:** A clear demand for supporting large tool inventories (>100 tools) in MCP servers.
- **Rendering Stability:** Indirectly, users are requesting a robust terminal UI that handles model streaming and state without flicker or full re-renders.

### 6. Developer Pain Points
- **Terminal UI Instability:** The most severe current pain point. Issue #2474 describes a "shaking" interface that resets the conversation, making debugging or long sessions impossible on Linux.
- **MCP Integration Limits:** Issue #2475 exposes that the MCP tool system has a hard or soft limit that breaks when the tool count reaches >200, limiting complex autonomous agent use cases.
- **Version Fragmentation:** Both bugs appear on `v0.19.2`, suggesting a regression in rendering logic and a design limitation in MCP parsing that needs immediate patching.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date: 2026-06-26**

## Today's Highlights

OpenCode v1.17.11 shipped with a significant new session snapshot and revert system, letting users roll back to earlier messages including file changes. The community remains heavily focused on stability issues, with a major Windows crash regression in v1.17.10 driving 45 comments in a single day, while memory and CPU utilization problems continue to dominate the top-voted issues. The SDK-next API is also seeing active development around embedded host configuration and session metadata support.

## Releases

**[v1.17.11](https://github.com/anomalyco/opencode/releases/tag/v1.17.11)** — Two notable changes:
- **Core:** Added session snapshots and revert controls, allowing rollback to earlier messages including associated file changes.
- **Desktop:** Fixed MCP OAuth URL always printing to terminal, so manual sign-in works when browser flow fails to open.

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (103 comments, 74 👍)  
   Central tracking issue for scattered memory leak reports. Maintainers are asking for heap snapshots, not AI guesses. The sheer volume signals a systemic resource management problem.

2. **[#33742 — Windows segfault on v1.17.10](https://github.com/anomalyco/opencode/issues/33742)** (45 comments, 40 👍)  
   Fresh regression: Bun segmentation fault on Windows after upgrading. v1.17.9 is reportedly stable. Downgrade is the only known workaround.

3. **[#15585 — Free usage exceeded on free models](https://github.com/anomalyco/opencode/issues/15585)** (52 comments, 13 👍)  
   Users hitting "free usage exceed" errors on Big Pickle and other free models. Questions whether OpenCode enforces undocumented usage caps.

4. **[#16610 — Hang on startup with inotify exhaustion](https://github.com/anomalyco/opencode/issues/16610)** (14 comments, 7 👍)  
   Blocks startup if .git repo is present and inotify user instances are limited. Workaround requires tweaking systemd parameters.

5. **[#33399 — 99-100% CPU utilization, unresponsive](https://github.com/anomalyco/opencode/issues/33399)** (6 comments)  
   Sporadic CPU spikes causing fans, unresponsive CLI. Long-standing issue since v1.3.3 with no clear root cause.

6. **[#17935 — Light mode makes code invisible](https://github.com/anomalyco/opencode/issues/17935)** (7 comments, 11 👍)  
   Code examples invisible in light terminal themes. Selection also turns text black. Basic accessibility gap.

7. **[#8145 — Multi-account OAuth & round-robin load balancing](https://github.com/anomalyco/opencode/issues/8145)** (7 comments, 19 👍)  
   Popular feature request: support multiple Codex OAuth accounts with automatic round-robin usage to work around rate limits.

8. **[#31051 — TUI session navigation events](https://github.com/anomalyco/opencode/issues/31051)** (6 comments)  
   Plugins using `subscribeAll()` can't detect session switches in the TUI. Missing `tui.session.select` event.

9. **[#23327 — LM Studio auto-detect models](https://github.com/anomalyco/opencode/issues/23327)** (5 comments, 5 👍)  
   LM Studio provider uses a hardcoded model list instead of querying `/v1/models`. Contrasts with Continue extension's behavior.

10. **[#33938 — Desktop ConfigInvalidError after upgrade](https://github.com/anomalyco/opencode/issues/33938)** (3 comments)  
    v1.17.11 desktop upgrade shows `ConfigInvalidError` on Windows non-git directories. Two separate root causes identified.

## Key PR Progress

1. **[#33979 — Stabilize titlebar tab alignment](https://github.com/anomalyco/opencode/pull/33979)**  
   Fixes asymmetric padding in v2 titlebar that caused tab misalignment after first navigation. Contributor bot generated.

2. **[#33918 — Include v2 plugin skills in legacy list](https://github.com/anomalyco/opencode/pull/33918)**  
   Closes #33896. Ensures `/skills` and instance skill API see skills registered by v2 plugins.

3. **[#33974 — Enable auto-accept in session settings](https://github.com/anomalyco/opencode/pull/33974)**  
   Scopes session settings dialog to the active tab's server, fixes session lookup for multi-server setups.

4. **[#33978 — Use dropdown primitives for project picker](https://github.com/anomalyco/opencode/pull/33978)**  
   Refactor of project selector using v2 dropdown primitives. Alternative implementation to #32015, closes #140.

5. **[#33822 — Use Bun canary for beta channel](https://github.com/anomalyco/opencode/pull/33822)**  
   Workaround for Windows segfaults in Bun 1.3.14. The Rust rewrite of Bun is apparently more stable.

6. **[#33967 — Deny bash in plan mode, restrict subagent permission inheritance](https://github.com/anomalyco/opencode/pull/33967)**  
   Plan mode previously blocked edit tools but allowed unrestricted bash. Now denies bash tool and scopes subagent permission inheritance. Closes #22641.

7. **[#33977 — Split MCP timeout configuration](https://github.com/anomalyco/opencode/pull/33977)**  
   Replaces single numeric MCP timeout with `startup` and `request` budgets. Supports per-server overrides and legacy migration.

8. **[#12721 — Add tokens per second to response footer](https://github.com/anomalyco/opencode/pull/12721)**  
   Long-running PR (since Feb) adding tok/s counter to message footers. Helps users compare provider/model speed.

9. **[#32370 — Linux clipboard selection](https://github.com/anomalyco/opencode/pull/32370)**  
   Adds Linux terminal selection support (fixes #29963). Text selection now copies to clipboard as expected.

10. **[#29279 — Emit file metadata instead of error for non-vision models](https://github.com/anomalyco/opencode/pull/29279)**  
    Non-vision models receiving images now return usable metadata instead of raw error text.

## Feature Request Trends

- **Multi-account / load balancing (#8145, #33966):** Multiple requests for OAuth multi-account support and configurable callback hosts for remote setups.
- **Session & UI improvements (#31051, #33932, #33964):** Users want session rename from context menu, TUI session navigation events for plugins, and metadata support in the v2 SDK.
- **Provider auto-discovery (#23327):** LM Studio, Ollama, and other local providers should auto-detect available models via their APIs rather than relying on hardcoded lists.
- **SDK-next configurability (#33963, #33964):** Embedded consumers need host configuration injection and session metadata APIs without depending on internal schemas.

## Developer Pain Points

- **Windows stability (#33742, #31144, #33945):** Multiple crash vectors on Windows — Bun segfaults, FFI polling crashes, and Electron crashes with `ctx_execute`. Windows users are consistently affected.
- **Memory & CPU thrashing (#20695, #33399):** Long-standing resource issues with no clear fix. Heap snapshots are requested but collection requires manual effort.
- **Startup performance (#22227, #16610):** Startup times of ~1 minute reported; inotify exhaustion causes complete startup failures on Linux.
- **Context / compaction bugs (#17557):** `/compact` command increases tokens instead of decreasing them — the tool silently fails.
- **Config persistence (#33775, #33938):** API keys re-requested on provider switch despite being stored in `auth.json`; config errors after desktop upgrade.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-26

## Today's Highlights

The Pi project saw a flurry of closing activity across ~50 issues and PRs, with major progress on extension stability, TUI rendering, and API compatibility. Notably, **openai-codex connection reliability** remains the hottest open issue (70 comments), while the community celebrated the merge of **alpha channel theme support** (`#RRGGBBAA`) and a new **`pi orchestrator` experimental package** for managing Pi daemon instances via IPC. The day also featured 11 closed PRs, including critical fixes for hardcoded RPC timeouts and prompt scope-discipline rules.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

1. **#4945 — openai-codex Connection Reliability Issues** (OPEN, 70 comments, 30 👍)  
   *Link: https://github.com/earendil-works/pi/issues/4945*  
   The top-voted open issue: GPT-5.5 interactive TUI sessions routinely hang on “Working…” with no output, forcing manual Escape-key recovery. Community frustration is high; the author reports repeated occurrences over days. This is the single most impactful usability bug.

2. **#5825 — Streaming markdown forces scroll to bottom** (OPEN, 31 comments)  
   *Link: https://github.com/earendil-works/pi/issues/5825*  
   When “clear on shrink” is enabled, fast-streaming markdown overrides user scroll position — a common reading-experience complaint. The issue is recognized but unfixed, with no assignee yet.

3. **#5103 — pi-windows-x64.zip can't detect git-bash from PATH** (CLOSED, 23 comments, 1 👍)  
   *Link: https://github.com/earendil-works/pi/issues/5103*  
   Windows users faced silent failure: the built-in bash tool reported “no bash found” despite Git Bash being on PATH. Closed after a back-and-forth of debugging and release artifacts.

4. **#6050 — TUI full redraw clears terminal scrollback** (CLOSED, 10 comments)  
   *Link: https://github.com/earendil-works/pi/issues/6050*  
   Core TUI renderer bug: during active turns, the terminal scrollbar jumps to chat beginning. Triggered by custom UI redraws (editor, footer, widgets). Fix landed as part of broader rendering cleanup.

5. **#5595 — openai-completions maxTokens not passing through** (CLOSED, 8 comments, 2 👍)  
   *Link: https://github.com/earendil-works/pi/issues/5595*  
   DeepSeek v4pro (via Together.ai) hit output token limits prematurely because Pi wasn't forwarding `maxTokens` to OpenAI-compatible providers. This mattered for reasoning models that need longer generations.

6. **#5989 — pi update broke extension pi-lovely-codex** (CLOSED, 7 comments)  
   *Link: https://github.com/earendil-works/pi/issues/5989*  
   After a Pi update, the `pi-lovely-codex` extension failed to load with a TypeScript parse error. Highlights ongoing tension between rolling releases and third-party extension compatibility.

7. **#6060 — TypeError: content is not iterable on tool-call-only messages** (CLOSED, 4 comments)  
   *Link: https://github.com/earendil-works/pi/issues/6060*  
   A crash in the TUI footer when rendering token stats for sessions with tool-call-only assistant messages. Revealed that `estimateTextAndImageContentChars` assumed string content — fixed promptly.

8. **#6061 — MiniMax-M2.7-highspeed context budget is smaller than expected** (CLOSED, 4 comments)  
   *Link: https://github.com/earendil-works/pi/issues/6061*  
   Long conversations with MiniMax's high-speed model failed at ~131k tokens — well below advertised limits. The provider's error codes (2013, 999) were opaque; community expects better model-specific budget mapping.

9. **#6002 — SessionManager.open() silently truncates non-session files** (CLOSED, 4 comments)  
   *Link: https://github.com/earendil-works/pi/issues/6002*  
   Dangerous data-loss bug: pointing `--session <path>` at a 3.2MB NDJSON log file silently replaced it with a 133-byte session header. No warning, no backup. Quick fix merged.

10. **#5671 — ~/.pi and cwd/.pi overlap** (CLOSED, 6 comments, 5 👍)  
    *Link: https://github.com/earendil-works/pi/issues/5671*  
    mitsuhiko flagged that `.pi` serves double duty as both global config and project-scoped settings, causing collision in `$HOME`. High community agreement that a cleaner separation is needed — but no concrete plan yet.

## Key PR Progress

1. **#6087 — fix(coding-agent): remove hardcoded RPC wait timeout** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/6087*  
   Replaced a 60-second fixed wait cap with configurable `RpcClientOptions.waitTimeoutMs`. Critical for long-running agent tasks (e.g., code generation). Includes regression tests for exit/error cleanup.

2. **#6081 — feat: add #RRGGBBAA alpha support for theme colors** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/6081*  
   Theme colors now accept 8-digit hex (`#RRGGBBAA`). Alpha channels are blended with terminal background at load time — a clean accommodation of ANSI limitations. Merged same day.

3. **#6064 — feat(experimental): pi orchestrator** (OPEN)  
   *Link: https://github.com/earendil-works/pi/pull/6064*  
   New `pi-orchestrator` package: local daemon managing Pi instances over a Unix socket (`.pi/orchestrator/orchestrator.sock`). Speaks NDJSON IPC; supports start/list/stop/kill. Experimental but ambitious — could enable multi-session workflows.

4. **#6078 — feat(coding-agent): add get_entries and get_tree RPC commands** (OPEN)  
   *Link: https://github.com/earendil-works/pi/pull/6078*  
   Exposes two read-only RPC endpoints: `get_entries` (append-order cursor) and `get_tree` (session tree). Essential for headless integrations building custom UI on top of Pi.

5. **#6084 — fix(tui): preserve custom widget render order on background tick refreshes** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/6084*  
   Fixes a subtle TUI bug where extension-added widgets reordered during timer/turn-refresh ticks. Root cause: `Map.delete/set` insertion order vs. stable ordering. Important for extension developers.

6. **#6067 — fix(prompt): add an overeager scope-discipline rule to the system prompt** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/6067*  
   One-line prompt addition inspired by aider's `overeager_prompt`: the agent should “do what's asked and no more” — no modifying unrelated files. Addresses the most common agent quality complaint.

7. **#6063 — Extension stats** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/6063*  
   Merged by xl0; also fixes OSC garbage output when `PI_STARTUP_BENCHMARK` & `PI_TIMING` environment variables are set. Demonstrates active maintenance of the extension diagnostics surface.

8. **#5515 — feat(coding-agent): add alwaysTrust setting to skip project trust gating** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/5515*  
   Adds an opt-out flag for the project-trust confirmation prompt. Merged after weeks of discussion — responds to power-user demand for frictionless headless/automated use.

9. **#5270 — Ephemeral session model and thinking level selection** (CLOSED)  
   *Link: https://github.com/earendil-works/pi/pull/5270*  
   Critical scoping fix: `setModel()` / `cycleModel()` / `setThinkingLevel()` now default to in-session only. Previously they overwrote global defaults. An explicit `{ persist: true }` flag is required to change defaults. Addresses issue #5886.

10. **#5832 — fix(ai): surface provider HTTP error body instead of opaque SDK message** (OPEN)  
    *Link: https://github.com/earendil-works/pi/pull/5832*  
    Long-running PR (since Jun 17) to improve error messages when behind proxies/gateways. Currently 403 errors surface as opaque `UnknownError` (Bedrock) or `403 status code (no body)`. This fix would expose the actual HTTP response body — widely requested by enterprise users.

## Feature Request Trends

- **Headless/API-first usage**: Multiple issues (e.g., #6070, #6078, #6046) request better programmatic control — deterministic in-memory session IDs, RPC endpoints for session introspection, and combined `/new` + `/name` commands. The `pi orchestrator` PR (#6064) directly addresses this.

- **Provider transparency**: Requests for exposing reasoning token counts (#6057), passing through HTTP error bodies (#5832), and customizing OpenAI adapter fetch (#6034) all point to a desire for deeper provider integration — not just token passthrough but observability and error clarity.

- **Single-binary distribution**: Issue #6065 (3 👍) advocates for shipping Pi as a standalone binary with bundled Node — avoiding version conflicts across projects. Reflects pain from multi-project developers.

- **Shell completions for Pi CLI**: #6086 requests bash/zsh/fish tab-completions for Pi's own arguments (`--provider`, `--tool`, etc.) — a quality-of-life ask from users who frequently switch configurations.

## Developer Pain Points

- **Extension brittleness vs. updates**: Issues #5989, #6066, and #6085 show that Pi updates routinely break third-party extensions — especially those using `setEditorComponent`, npm imports, or compiled-binary resolvers. Extension authors face an unstable target.

- **TUI scroll & viewport thrash**: Despite fixes, scroll-jumping (#6050), tmux-specific jumps (#6073), and crash-on-wide-lines (#6058) persist. The TUI renderer is a recurring pain point — especially for users of tmux/screen or custom widget authors.

- **Silent data loss**: Issue #6002 (file truncation) and #4290 (silent turn abortion) reveal a pattern: Pi's internal state mutations lack validation and rollback. Community response was strong — 4 comments on #6002, 6 on #4290 — demanding safer defaults (backup, confirmation, or error-on-nonsession).

- **OpenAI/Codex reliability**: Issue #4945 (70 comments, 30 👍) is the single loudest pain point. Pi's most popular provider mode (Codex/GPT-5.5) hangs unpredictably with no diagnostics — users can only press Escape. No fix or root-cause has been published, making this the top unresolved user-facing bug.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-26

## Today's Highlights
A significant nightly release (`v0.19.2-nightly`) landed with a critical `web_fetch` JSON fallback fix. The community is actively reporting **two P1 bugs** — a streaming setup timeout (Issue #401) and a severe Windows PowerShell process leak (Issue #5873) — both drawing urgent attention. On the feature front, **voice dictation** is expanding to the desktop app (PR #5856), and a new `@extension` mention autocomplete is in review (PR #5849), signaling a focus on extension ecosystem and multimodal input.

## Releases
- **[v0.19.2-nightly.20260625.b2f11b735](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735)** — Changelog includes `fix(core): allow web_fetch JSON fallback` (PR #5660) and routine release choreography. This patch improves resilience when fetching structured data from the web.

## Hot Issues
| Issue | Title & Summary | Why It Matters |
|-------|----------------|----------------|
| [#401](https://github.com/QwenLM/qwen-code/issues/401) | **[P1/Bug]** Streaming setup timeout after 6s — user hit this after CLI install. 10 comments. | Blocks new users immediately; timeout config suggestion exists but no fix yet. |
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | **[P1/Bug]** Windows: every tool spawn opens a new PowerShell process that never closes until OOM. "100% reproducible." | Severe resource leak on Windows; urgent for Windows user base. 4 comments, strong emotional tone. |
| [#5838](https://github.com/QwenLM/qwen-code/issues/5838) | **[P2/Feature]** Allow user to adjust agent-initiated command timeout. 5 comments. | Complements #401; users want granular control over timeout settings. |
| [#5861](https://github.com/QwenLM/qwen-code/issues/5861) | **[P1/Bug]** Context compression uses `stream: false`, causing gateway timeout. 2 comments. | Affects deployments with API gateways; quick fix (PR welcome). |
| [#5263](https://github.com/QwenLM/qwen-code/issues/5263) | **[P3/Feature]** Auto-generated skills: prompt user to confirm before persisting. 6 comments. | User feedback: one-time operations shouldn't clutter skill list. |
| [#5867](https://github.com/QwenLM/qwen-code/issues/5867) | **[P2/Feature]** Add git-shared "team" tier to auto-memory. 3 comments. | Extends memory model from user/project to team level — useful for org adoption. |
| [#5759](https://github.com/QwenLM/qwen-code/issues/5759) | **[Feature]** `ui.history.collapsePreviewCount` — show last N turns on resume. 3 comments. | Addresses UX pain: collapsed sessions hide all context. |
| [#5866](https://github.com/QwenLM/qwen-code/issues/5866) | **[P2/Feature]** Live syntax highlighting for streaming code blocks in web shell. 2 comments. | Improves readability of real-time code output. Has working branch. |
| [#5789](https://github.com/QwenLM/qwen-code/issues/5789) | **[P3/Feature]** Enable status line preset by default for new users. 3 comments. | Reduces onboarding friction — useful context visible immediately. |
| [#5641](https://github.com/QwenLM/qwen-code/issues/5641) | **[P2/Bug]** Repeated submission of completed shell tool results with OpenAI-compatible providers. 4 comments. | Workflow-breaking for deterministic providers; confirmed by standalone reproducer. |

## Key PR Progress
| PR | Title & Summary | Impact |
|----|----------------|--------|
| [#5849](https://github.com/QwenLM/qwen-code/pull/5849) | **`@extension` mention autocomplete** — Codex-style dropdown for installed extensions. | Streamlines extension invocation directly from input. Early community feedback. |
| [#5856](https://github.com/QwenLM/qwen-code/pull/5856) | **Voice dictation for desktop app** — microphone button, recording bar, live waveform. | Brings parity with CLI/web voice feature (#5755) to desktop users. |
| [#5828](https://github.com/QwenLM/qwen-code/pull/5828) | **Bundled extension-creator skill** — scaffolds, customizes, tests extensions. | Lowers barrier for extension development; promotes ecosystem growth. |
| [#5868](https://github.com/QwenLM/qwen-code/pull/5868) | **Configurable auto-compact threshold** + Stop hook context usage. | Gives users control over when context compression triggers. |
| [#5874](https://github.com/QwenLM/qwen-code/pull/5874) | **Skip `spawnSync` for `qwen serve`** — inline import eliminates extra Node.js process. | Speeds up daemon startup; merged quickly. |
| [#5835](https://github.com/QwenLM/qwen-code/pull/5835) | **Preserve selected model when re-applying provider install plan**. | Eliminates model loss during re-auth or token refresh. |
| [#5848](https://github.com/QwenLM/qwen-code/pull/5848) | **`ui.history.collapsePreviewCount`** — keeps last N turns visible on resume. | Implements feature from #5759; direct UX improvement. |
| [#5852](https://github.com/QwenLM/qwen-code/pull/5852) | **Resume `/acp` session stream via Last-Event-ID** — SSE replay for reconnects. | Robust connection handling for ACP-based sessions. |
| [#5860](https://github.com/QwenLM/qwen-code/pull/5860) | **Loosen autofix issue candidate filters** — helps CI find work to fix automatically. | Maintainer-facing; keeps automation pipeline healthy. |
| [#5629](https://github.com/QwenLM/qwen-code/pull/5629) | **Surface `PreToolUse` hook `"ask"` as TUI confirmation** — instead of deny. | Brings interactive permission model to tool execution hooks. |

## Feature Request Trends
- **Session and memory improvements** — Multiple requests for richer session status queries (#5855, #5863), team-level auto-memory (#5867), and collapsed session preview (#5759). Community wants deeper insight into ongoing agent work.
- **Voice and multimodal expansion** — Voice dictation now spans CLI, desktop, and web shell. Users also request configurable ASR keyterms (#5816) and a fallback vision model via `/model --vision` (#5778).
- **Timeout configurability** — Both streaming setup timeout (#401) and agent command timeout (#5838) are top requests. Users want to tune timeouts to their network/API conditions.
- **Extension ecosystem enablement** — Skills improvement (#5875), extension mention (#5849), and extension creator skill (#5828) point toward making extensions first-class citizens.

## Developer Pain Points
- **Windows process leak (Issue #5873)** — The most emotionally charged report: each tool spawn opens a new PowerShell that never closes until OOM. A P1 that requires immediate investigation.
- **Streaming timeout fragility (Issue #401, #5838)** — The 6-second default timeout is too tight for complex inputs or slow networks. Users want configurable timeouts and better error messages.
- **Context compression blocking (Issue #5861)** — Non-streaming compression requests cause gateway timeouts in deployment with API proxies. A simple `stream: true` fix is needed.
- **Shell tool result duplication (Issue #5641)** — Deterministic OpenAI-compatible providers cause repeated submission of completed tool results. Breaks automated workflows.
- **TUI flicker and rendering (Issue #5722, PR #5396)** — Token speed display bugs and general UI flicker continue to be pain points, especially on Windows. Multiple patches in flight.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-26

**Data source:** github.com/Hmbown/DeepSeek-TUI (now **CodeWhale**)

---

## Today's Highlights

The project officially rebrands to **CodeWhale** with the v0.8.65 release; the legacy `deepseek-tui` npm package is deprecated. The community is actively testing the new Hotbar MVP and Fleet loadout auto features, while two persistent UX bugs — plan/agent mode confusion and YOLO approval overrides — continue to generate discussion. A dozen Hotbar-related PRs merged today, signaling the feature is nearing stability.

---

## Releases

**v0.8.65** — CodeWhale rebrand is live. The canonical project name, CLI command, npm package, and release assets now use the name **CodeWhale**. Users migrating from legacy `deepseek` / `deepseek-tui` should follow `docs/REBRAND.md`.

---

## Hot Issues (Top 10)

1. **#3568 — Plan and agent mode mixed up YET AGAIN**  
   *Author: DracheTek | Comments: 4 | 👍: 1*  
   A reproducible bug report with attached chat export showing that the model does not respect plan/agent mode switches. The agent attempted file modifications in plan mode. Community is calling for stricter runtime enforcement.  
   🔗 [Issue #3568](https://github.com/Hmbown/CodeWhale/issues/3568)

2. **#3606 — Agent asks for confirmation in YOLO mode**  
   *Author: GrG41 | Comments: 1*  
   Users expect YOLO mode to suppress all approvals. After upgrading, `/mode YOLO` + `/config approval_mode AUTO` still triggers permission prompts. Signals a regression in the approval gating logic.  
   🔗 [Issue #3606](https://github.com/Hmbown/CodeWhale/issues/3606)

3. **#3205 — Fleet model classes, loadout auto, and semantic route roles**  
   *Author: Hmbown | Comments: 10*  
   The core issue for Fleet's automatic compute-loadout resolution. Community is debating whether "loadout auto" should pick a model family or a full compute stack. High engagement from power users.  
   🔗 [Issue #3205](https://github.com/Hmbown/CodeWhale/issues/3205)

4. **#2300 — Multi-model compatibility, provider docs, and automatic Fleet loadout**  
   *Author: gavinwang668 | Comments: 7*  
   An older request revived as an acceptance fixture. Users want clear documentation on when to use `provider = vllm` vs. `provider = openai`. The maintainer is using this to validate Fleet routing logic.  
   🔗 [Issue #2300](https://github.com/Hmbown/CodeWhale/issues/2300)

5. **#3541 — Rust-based native runtime / desktop client**  
   *Author: jghwwnq | Comments: 3*  
   Feature request for a compiled native client to eliminate Node.js cold-start and memory overhead. Gains traction as the TypeScript TUI scales.  
   🔗 [Issue #3541](https://github.com/Hmbown/CodeWhale/issues/3541)

6. **#3466 — Approval modal cancellation and review-required semantics (CLOSED)**  
   *Author: Artenx | Comments: 5*  
   User frustration over destructive approvals appearing on every tool call after v0.8.64. The maintainer closed this with a new approval copy PR (#3594) clarifying deny-vs-esc semantics.  
   🔗 [Issue #3466](https://github.com/Hmbown/CodeWhale/issues/3466)

7. **#3582 — install.sh endpoint returns HTML instead of shell script**  
   *Author: noaft | Comments: 1*  
   The recommended `curl ... | sh` installation command is broken — the endpoint serves a Next.js HTML page. Blocks new-user onboarding.  
   🔗 [Issue #3582](https://github.com/Hmbown/CodeWhale/issues/3582)

8. **#3389 — Hotbar MVP command surface and source adapters (EPIC)**  
   *Author: Hmbown | Comments: 1*  
   The umbrella issue coordinating all Hotbar work: config, source adapters, render, key dispatch, wizard, tests. Multiple sub-issues closed today; the feature is converging.  
   🔗 [Issue #3389](https://github.com/Hmbown/CodeWhale/issues/3389)

9. **#3545 — Custom context size for providers**  
   *Author: w1w218 | Comments: 1*  
   Alibaba Bailian models support up to 1M context, but CodeWhale caps them at 128k. User requests a `context_size` override in the provider config.  
   🔗 [Issue #3545](https://github.com/Hmbown/CodeWhale/issues/3545)

10. **#3572 — Windows user environment variables not inherited (CLOSED)**  
    *Author: xsyww | Comments: 1*  
    `exec_shell` commands do not pick up user-level PATH or env vars set via System Properties. Closed quickly, likely patched in a related PR.  
    🔗 [Issue #3572](https://github.com/Hmbown/CodeWhale/issues/3572)

---

## Key PR Progress (Top 10)

1. **#3610 — feat(tui): add redacted session failure diagnostics**  
   Privacy-first tool to classify session failures as environment/tool vs. model issues. Exposes `codewhale session-diagnostics <path>` with redacted JSONL output.  
   🔗 [PR #3610](https://github.com/Hmbown/CodeWhale/pull/3610)

2. **#3612 — fix(tui): gate unsafe hotbar dispatch paths**  
   Enforces safety modes for hotbar actions: direct-fire, prefill, disabled, and approval-gated. Blocks MCP/skill/plugin actions without a wired safety path.  
   🔗 [PR #3612](https://github.com/Hmbown/CodeWhale/pull/3612)

3. **#3608 — refactor(tui): route hotbar actions through source adapters**  
   Introduces `HotbarActionSource` with adapters for app, slash, MCP, skill, and plugin categories. Maintains parity with the command palette.  
   🔗 [PR #3608](https://github.com/Hmbown/CodeWhale/pull/3608)

4. **#3605 — test(tui): add terminal visual matrix guardrails**  
   Documents a visual regression matrix covering contrast, width, sessions, config, sidebar, and transcript. Adds palette contrast guardrails for light/dark surfaces.  
   🔗 [PR #3605](https://github.com/Hmbown/CodeWhale/pull/3605)

5. **#3604 — fix(tui): centralize hotbar recommendations**  
   Shared recommendation engine with stable ordering, disabled-action exclusion, and eligible-category limits. Wires the setup wizard to recommended rows.  
   🔗 [PR #3604](https://github.com/Hmbown/CodeWhale/pull/3604)

6. **#3602 — fix(tui): add hotbar setup wizard**  
   Adds `/hotbar` command with a state machine for slot selection, assign/replace/toggle/clear, and save. Shows disabled actions without assignment.  
   🔗 [PR #3602](https://github.com/Hmbown/CodeWhale/pull/3602)

7. **#3601 — fix(tui): surface provider concurrency status**  
   Adds a real-time `/provider` view showing active request caps and in-flight counts. Especially useful for Zhipu/GLM users hitting SSE timeouts under load.  
   🔗 [PR #3601](https://github.com/Hmbown/CodeWhale/pull/3601)

8. **#3595 — fix(tui): throttle Z.ai provider requests**  
   Adds `max_concurrency` config for providers, defaulting Zhipu/GLM to 3 concurrent in-flight requests to prevent SSE stream timeouts.  
   🔗 [PR #3595](https://github.com/Hmbown/CodeWhale/pull/3595)

9. **#3594 — fix(tui): clarify destructive approval semantics**  
   New copy explaining that YOLO skips ordinary approvals but review rules still apply. Clarifies `Deny` (rejects one call) vs `Esc` (aborts entire turn).  
   🔗 [PR #3594](https://github.com/Hmbown/CodeWhale/pull/3594)

10. **#3591 — chore: use stable rust toolchain channel**  
    Changes `rust-toolchain.toml` from pinned `1.88` to `stable`, keeping the MSRV guard in `Cargo.toml`. Aligns CI with latest stable Rust.  
    🔗 [PR #3591](https://github.com/Hmbown/CodeWhale/pull/3591)

---

## Feature Request Trends

- **Fleet Loadout Automation** — Multiple issues (#3205, #2300) request a clear "Fleet loadout auto" mode that resolves full compute stacks (model + provider + thinking level) for each role, not just a model string.
- **Native Desktop Client** — Growing interest in a Rust-based native runtime (#3541) to eliminate Node.js overhead, improve cold-start latency, and reduce memory for long agent sessions.
- **Custom Provider Context Windows** — Users integrating with large-context models (e.g., Alibaba Qwen 1M) want per-provider `context_size` overrides (#3545).
- **ACP Provider/Model Exposure** — The ACP stdio adapter works but cannot mirror provider/model selection from the TUI; users want ACP integration parity (#3546).
- **Hotbar Customization** — An MMO-style quick action bar (#3389, #2061) is nearing completion; community feedback centers on default bindings and first-run recommendations.

---

## Developer Pain Points

- **Plan/Agent Mode Confusion (#3568)** — The model repeatedly fails to detect mode switches, performing file modifications in plan mode. This is the *third* recurrence of this bug, causing frustration.
- **YOLO Approval Overrides (#3606, #3466)** — The YOLO mode does not reliably suppress approvals; users report that even with `approval_mode AUTO`, the TUI still prompts for confirmation.
- **Installation Barrier (#3582)** — The `install.sh` endpoint serves HTML instead of a script, blocking new users from getting started.
- **Environment Variable Gaps (#3572)** — Windows users find that user-level environment variables are not inherited by the CodeWhale shell, breaking build tools and Python runtimes.
- **Toolchain Locking (#3570)** — The pinned Rust 1.88 toolchain prevented users from building with latest stable Rust; this was patched via PR #3591, but the lock was a temporary friction point.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*