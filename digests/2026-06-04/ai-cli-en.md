# AI CLI Tools Community Digest 2026-06-04

> Generated: 2026-06-04 00:36 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date: 2026-06-04**

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues its rapid maturation, with nine actively maintained tools now competing across developer workflows. The ecosystem is bifurcating between **established players** (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) investing in infrastructure reliability and enterprise controls, and **emerging challengers** (Pi, Kimi Code, Qwen Code, CodeWhale, OpenCode) racing toward feature parity with aggressive release cadences. A defining pattern this week is the **platform parity crisis**—Windows and WSL users across *every* tool report degraded experiences, suggesting the AI CLI paradigm was designed for Linux/macOS and is now paying down cross-platform technical debt under community pressure. Meanwhile, **token transparency** and **context window management** have emerged as universal pain points, indicating that the next competitive battleground will be resource observability rather than raw agent capability.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release (24h) | Community Engagement Signal |
|-----|-------------|-----------|---------------|---------------------------|
| **Claude Code** | 50 issues | 2 PRs | v2.1.162 | High reaction counts (35+ comments on billing issue); low PR velocity suggests review bottleneck |
| **OpenAI Codex** | ~20 hot issues | 10+ significant PRs | 2 alpha releases (0.137.0-alpha.4/.5) | High PR volume (prompt hooks infrastructure); Windows/WSL engagement intense |
| **Gemini CLI** | ~25 active issues | 10 PRs | 3 releases (v0.45.0, v0.46.0-preview.0/.1) | Balanced issue/PR ratio; strong maintainer responsiveness |
| **GitHub Copilot CLI** | 42 issues | 1 PR | None | CJK/IME fixes dominated; single PR suggests development lull |
| **Kimi Code CLI** | 7 issues | 1 PR | None | Low volume but focused; session management bugs surfaced |
| **OpenCode** | 50+ issues | 10+ PRs | None | High PR velocity on V2 runtime; voice input demand surging |
| **Pi** | ~15 hot issues | 10+ PRs | None | Intense provider ecosystem expansion; image lifecycle crises |
| **Qwen Code** | ~20 issues | 10+ PRs | v0.17.1 | Daemon productionization accelerating; doudouOUC contributor driving ops features |
| **CodeWhale (DeepSeek TUI)** | 18+ v0.9.0 milestone issues | ~10 PRs | 3 releases (v0.8.51–v0.8.53) | High strategic ambition; rebrand completed; roadmap-heavy |

**Key observations:**
- **OpenAI Codex** leads substantive PR volume with prompt hooks infrastructure
- **Gemini CLI** ships most releases (3 in 24h) focused on stability
- **CodeWhale** has the most ambitious roadmap but risks execution fragmentation
- **Claude Code** has the highest *community reaction* intensity but lowest *development velocity*

---

## 3. Shared Feature Directions

### Universal Requirements (Appearing Across 4+ Tools)

| Requirement | Affected Tools | Community Signal |
|-------------|---------------|------------------|
| **Context/Token Transparency** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code | Multiple issues per tool: `resetsAt`, `balance`, `planType`, breakdowns by section; UI currently inadequate |
| **Windows Platform Parity** | **All** | Consistent theme: directory locking, WSL bridge performance, clipboard failures, LSP integration, CJK/IME rendering, terminal resizing |
| **Rate Limit Visibility & Reliability** | Claude Code, OpenAI Codex, Pi, Qwen Code | Billing bugs, display jumps, opacity on accounting; trust erosion in paid tiers |
| **Sandbox/Restricted Execution** | Claude Code (worktree guards), GitHub Copilot CLI (#892, 49👍), Pi (workspace approval), Qwen Code (auto mode hardening) | Enterprise security push: prevent agents from escaping workspace boundaries |
| **Cross-Session Memory Persistence** | Claude Code (#65173), Kimi Code (#2420), Qwen Code (#4747), CodeWhale (#2695) | Auto-memory failing; stale prompts overriding new configs; demand for global user-level memory files |
| **MCP Ecosystem Integration** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi, Qwen Code | 70%+ context bloat from MCP servers; namespace serialization incompatible with non-OpenAI; plugin system maturity gaps |

### Emerging Patterns (2-3 Tools)

| Pattern | Tools | Details |
|---------|-------|---------|
| **Voice/Speech Input** | OpenCode (#4695, 161👍), GitHub Copilot CLI (#3663) | Accessibility and productivity demand; plugin SDK limitations currently block implementation |
| **AST-Aware Tooling** | Gemini CLI (#22745), Qwen Code (workflows) | Precise code navigation to reduce token waste and tool-call turns |
| **Multi-Agent Orchestration** | CodeWhale (WhaleFlow), Qwen Code (Ultracode port), OpenCode (V2 runtime) | Declarative workflow runtimes with topological schedulers; moving beyond single-turn agents |
| **BYOM (Bring Your Own Model)** | GitHub Copilot CLI (#3624), Qwen Code (#3384), Pi (3 new providers this week) | Local/alt-model endpoints (Ollama, LM Studio, vLLM) as competitive differentiator |
| **Auth Fragility & Account Recovery** | Claude Code, OpenAI Codex, Pi, CodeWhale | Phone verification dead-ends, stale SMS records, forced logout unrecoverable; no self-service escape hatches |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----|-----------|-----------|
| **Primary User Base** | Power users, Pro subscribers | VS Code ecosystem, enterprise | Google Cloud, Android devs | GitHub ecosystem, enterprises | Asian market, web-hybrid | Open source, plugin devs | Provider agnosticists | Chinese market, self-hosters | Open-weight/SSD devs |
| **Architecture** | Monolithic agent | Rust CLI + app-server | PTY-native | Plugin + shell | Web-first | V2 runtime (effect-native) | Provider abstraction layer | Daemon + ACP | WhaleFlow declarative |
| **Release Cadence** | Weekly patches | Multiple alphas/week | Daily (3 today) | Slow (<1/week) | Slow (<1/week) | Fast (daily iterations) | Fast (multi-provider) | Fast (nightly + patches) | Very fast (3 today) |
| **Differentiator** | Long context, agent visibility | Prompt hooks, MCP | Multi-model, Google infra | GitHub integration, simplicity | Web/CLI parity, slash UX | Plugin extensibility, voice | Provider proliferation, image handling | Daemon ops, local-first | Workflow orchestration, HF integration |
| **Community Health** | High engagement, low PR velocity | Balanced, production focus | Good maintainer response | Keyboard/SME focus | Low volume, new entrant | Strong PR culture | Contributor-friendly | doudouOUC-driven | High ambition, agentic contribution |
| **Key Weakness** | Billing integration failures | Windows/WSL disabled | Agent hang states | CJK/IME rendering | Session state unpredictability | V2 migration in progress | Image lifecycle crises | Config corruption | Feature bloat risk |

### Technical Approach Variations

- **Provider Philosophy**: Pi and CodeWhale embrace multi-provider as core identity; Claude Code and OpenAI Codex are tied to their respective model ecosystems; Gemini CLI and Qwen Code straddle both.
- **Session Architecture**: Claude Code uses monolithic agent state; OpenCode is migrating to event-sourced V2 runtime; CodeWhale moves toward declarative workflow DAGs; Qwen Code invests in daemon-mode ACP lifecycle.
- **Plugin/MCP Strategy**: GitHub Copilot CLI and OpenCode have the most mature plugin systems but face hook execution gaps; Pi and Qwen Code treat providers as "plugins" of a different kind; Kimi Code's plugin story is least developed.

---

## 5. Community Momentum & Maturity

### Tier 1: Rapid Iteration / High Momentum

**OpenAI Codex** — Highest infrastructure PR velocity with prompt hooks, terminal lifecycle APIs, and workspace mutation protocols. Despite Windows/WSL performance catastrophes, the engineering investment in core architecture (memchr optimizations, workspace series) signals long-term commitment.

**CodeWhale (DeepSeek TUI)** — Most ambitious roadmap of any tool: WhaleFlow workflow runtime, Hugging Face as first-class surface, per-model harness auto-generation, and rebrand completion. Risk: 18+ parallel v0.9.0 workstreams may cause scope creep. The maintainer's self-awareness about AI-agent-driven development chaos (#2720) is unique.

**Gemini CLI** — Three releases in 24h for PTY and Termux stability suggests disciplined maintenance. Model transition work (3.5 Flash GA) shows alignment with Google Cloud product cycles. Balanced issue-to-PR ratio indicates healthy community ecosystem.

**Qwen Code** — Daemon productionization accelerating with OTel metrics, ACP lifecycle optimization, and Workflow tool P1. The doudouOUC contributor is driving enterprise-grade ops features. Self-hosting and local-first adoption creates natural competitive moat vs. cloud-tied tools.

### Tier 2: Stable / Mature

**Claude Code** — Highest raw user base but lowest feature velocity. v2.1.162 is incremental. The 1M context billing crisis (#63060, 35+ comments, 4+ duplicates) dominates community discourse and undermines Pro plan trust. Low PR count (2 in 24h) suggests either release freeze or internal bottleneck.

**Pi** — Strong maintainer responsiveness (Minimax M3 closed same day). Provider proliferation is both feature and burden. Image lifecycle management (#5369) and session compaction are critical stability concerns. Keybinding fragility erodes customization trust.

**OpenCode** — V2 runtime migration is the right architectural bet but creates transitional instability. Voice input (#4695, 161👍) is the most-voted feature request across any tool this week. TUI input handling fragility (#1505, 126 comments) shows high user expectations.

### Tier 3: Early / Niche

**Kimi Code CLI** — Lowest activity volume. Session resume bug (#2420) is a silent configuration killer that suggests deeper architectural issues with prompt generation vs. serialization ordering. Web/CLI parity gaps indicate the CLI is secondary to the web product. Brand-new entrant finding its footing.

**GitHub Copilot CLI** — CJK/IME fixes dominated the week, suggesting internationalization catch-up. Only 1 PR in 24h signals low development velocity. Strong niche demand for sandbox mode (#892, 49👍) and BYOM, but GitHub's corporate constraints may limit agility.

---

## 6. Trend Signals

### For Technical Decision-Makers

1. **Windows/WSL is the new accessibility** — The single biggest cross-tool failure pattern. Teams targeting enterprise adoption *must* prioritize Windows parity. The ecosystem's Linux-first assumption is now a liability.

2. **Token transparency is table stakes** — Users across every tool demand `resetsAt`, `balance`, `planType`, and per-section budget breakdowns. The next competitive differentiator will be *resource observability*, not agent capability. Tools that hide billing/usage data will lose trust.

3. **MCP fragmentation is real** — "Universal" MCP standard is fragmenting in implementation: namespace serialization incompatible with non-OpenAI providers (#26234), 70%+ context bloat from server proliferation (#3539), and lifecycle management gaps. Interoperability requires standardization buy-in that currently doesn't exist.

4. **Local-first is a wedge opportunity** — Qwen Code and Pi are exploiting the self-hosting/vLLM/Ollama segment that cloud-tied tools (Claude Code, OpenAI Codex) cannot serve. This segment will grow as open-weight models improve.

### For Developers Contributing to These Projects

5. **Auth systems need redesign** — Phone verification dead-ends (#25749 Claude Code, #25765 OpenAI Codex), stale SMS records, and no self-service recovery are universal. The single-provider auth model is insufficient for professional use. Multi-account support (#4432 et al., 102+ 👍) is a consistent 9-month demand.

6. **Agent hang states are the #1 user-facing reliability issue** — Gemini CLI (#21409), Qwen Code (#4711), Pi (#4666), and CodeWhale all report indefinite hangs or false success states. Users trust AI agents to *finish or fail visibly*—silent hangs destroy confidence.

7. **Plugin SDK design determines ecosystem velocity** — OpenCode's voice input is blocked by plugin extensibility gaps (#17425); GitHub Copilot CLI's sandbox mode is a hard-coded feature request; Pi's MCP integration lags protocol evolution. Tools that invest in plugin architecture (especially hook-based extensibility like OpenAI Codex's prompt hooks) will attract third-party developers.

8. **AI-agent-driven contribution is a new workflow** — CodeWhale's maintainer explicitly notes agents "jumping into exciting epics before closing stabilization" (#2720). As AI tools contribute to their own development, project governance will need guardrails for agent-authored PR scope management.

### Market Signal

The **emerging winner pattern** may not be any single tool but the **multi-provider, local-first, workflow-orchestrating** architecture that Pi, Qwen Code, and CodeWhale represent. Claude Code and OpenAI Codex have brand and distribution advantages but are structurally tied to their provider ecosystems. The next 6-12 months will test whether open ecosystems can overcome the integration quality of closed ones.

---

*Report compiled from public activity data across 9 AI CLI tool projects on 2026-06-04.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Date:** 2026-06-04 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking (Most-Discussed PRs by Community Attention)

| Rank | Skill | PR | Status | Description | Discussion Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | Quality control for AI-generated documents: prevents orphan words, widow paragraphs, and numbering misalignment | Universal pain point identified—"affects every document Claude generates"; author argues users rarely request good typography but always benefit from it |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 OPEN | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) with LibreOffice/ISO standard support | Fills gap in open-source document workflows; triggers on "ODT", "ODS", "ODF", "LibreOffice" |
| 3 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 OPEN | Revised skill for actionable, single-conversation frontend design guidance | Focus on "clarity, actionability, and internal coherence"—every instruction must be executable within one conversation |
| 4 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN | Two meta-skills: quality analysis (5 dimensions, 20% weighting) and security review for Claude Skills | Meta-skill movement—community building tools to evaluate skills themselves; addresses governance gap |
| 5 | **PDF Fixes** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 OPEN | Corrects 8 case-sensitive file reference bugs in `skills/pdf/SKILL.md` | Breaks on Linux/case-sensitive filesystems; maintenance-critical fix for cross-platform reliability |
| 6 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 OPEN | Pre-parse YAML validation to catch unquoted descriptions with `:` characters | Prevents silent parsing failures; developer-experience improvement for skill authors |
| 7 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 OPEN | Fixes document corruption from `w:id` collisions between tracked changes and existing bookmarks | Deep OOXML expertise—shared ID space across bookmarks, comments, move ranges; hardcoded low IDs caused collisions |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 OPEN | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Intensity |
|:---|:---|:---:|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — 13 comments, 7 👍 | 🔥🔥🔥 |
| **Windows Compatibility** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `run_eval.py` broken on Windows, subprocess/encoding bugs | 🔥🔥🔥 |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — community skills impersonating `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint access control in SKILL.md | 🔥🔥 |
| **Skill-as-MCP Exposure** | [#16](https://github.com/anthropics/skills/issues/16) — "Expose Skills as MCPs" with typed API signatures | 🔥🔥 |
| **Multi-file Skill Bundling** | [#1220](https://github.com/anthropics/skills/issues/1220) — inline bundling for logically separated reference files | 🔥 |
| **Bedrock/Cloud Deployment** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock compatibility | 🔥 |

**Emerging Directions:**
- **Workflow automation** (n8n-builder/debugger in [#190](https://github.com/anthropics/skills/pull/190))
- **Agent governance & safety patterns** (proposed in [#412](https://github.com/anthropics/skills/issues/412))
- **Persistent memory/context** (shodh-memory in [#154](https://github.com/anthropics/skills/pull/154), AURELION suite in [#444](https://github.com/anthropics/skills/pull/444))
- **Testing patterns & quality assurance** ([#723](https://github.com/anthropics/skills/pull/723))

---

## 3. High-Potential Pending Skills (Active, Not Yet Merged)

| Skill | PR | Author | Why It May Land Soon |
|:---|:---|:---|:---|
| **Agent-Creator + Multi-tool Fix** | [#1140](https://github.com/anthropics/skills/pull/1140) | SyedaQurratAI | Addresses Issue #1120 directly; includes Windows path support (`%APPDATA%`) |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Comprehensive coverage (Testing Trophy, AAA pattern, React Testing Library, E2E); fills critical gap in skill ecosystem |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | Broad enterprise ITSM/ITOM/SecOps coverage; single skill replaces narrow scripting helpers |
| **AURELION Cognitive Suite** | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | 4-skill framework (kernel, advisor, agent, memory); structured professional knowledge management |
| **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | junaid1460 | Imagen 3.0, Veo 3.1 integration; media generation is high-visibility use case |
| **Feature-Dev Workflow Fix** | [#363](https://github.com/anthropics/skills/pull/363) | Mr-Neutr0n | Fixes TodoWrite overwrite bug causing Phase 6-7 skips; quality-of-life for existing `/feature-dev` users |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | narenkatakam | Closes #452; raises community health from 25%; low-risk docs addition |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability and organizational scalability**—fixing Windows compatibility gaps, establishing trust boundaries between official and community skills, and enabling secure team-wide skill distribution—while simultaneously pushing toward meta-cognitive capabilities (persistent memory, agent self-governance, and skills that evaluate other skills) that transform Claude Code from individual assistant into enterprise-grade collaborative infrastructure.

---

---

# Claude Code Community Digest — 2026-06-04

## Today's Highlights

The v2.1.162 release brings incremental CLI improvements to agent visibility and tool selection, but the community's attention remains fixated on a persistent billing-related API error blocking Pro plan users from accessing 1M context windows across multiple platforms. Meanwhile, two long-standing Windows-specific bugs around session-environment directory locking were finally closed, suggesting ongoing platform parity efforts.

---

## Releases

### [v2.1.162](https://github.com/anthropics/claude-code/releases/tag/v2.1.162)
- **`claude agents --json`** now exposes `waitingFor` field, showing what blocks a waiting session (e.g., permission prompts) — improves programmatic agent monitoring
- **`--tools` flag fix**: Explicitly listing `Grep`/`Glob` now correctly yields dedicated search tools on native builds with embedded search; previously these names were silently ignored

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#63060](https://github.com/anthropics/claude-code/issues/63060) | **"Usage credits required for 1M context" API error** — Pro users blocked despite paid plans | Critical billing/API integration failure; affects core value proposition of paid tiers | 35 comments, 9 👍; marked duplicate but still attracting reports |
| [#17149](https://github.com/anthropics/claude-code/issues/17149) | **LSP `workspaceSymbol` sends empty query on Windows** | Breaks IDE integration for Windows developers; has repro, stagnant | 29 comments, 20 👍 — high engagement, long-running |
| [#61889](https://github.com/anthropics/claude-code/issues/61889) | **CVP-approved users blocked on benign queries** (claude.ai, not Claude Code) | Trust/safety false positive undermines enterprise adoption | 21 comments; marked invalid but reveals policy tooling gaps |
| [#63908](https://github.com/anthropics/claude-code/issues/63908) | **Duplicate: 1M context credit error with cowork integration** | Shows error propagates across features (cowork, not just base API) | 13 comments; pattern confirms systemic billing check issue |
| [#48769](https://github.com/anthropics/claude-code/issues/48769) | **GitHub re-auth error has no resolution path in settings UI** | Dead-end UX for remote agents; blocks CI/automation workflows | 7 comments, 5 👍; auth flow design debt |
| [#63870](https://github.com/anthropics/claude-code/issues/63870) | **Bash tool calls emitted as raw `<invoke>` text** | Model output formatting regression; 23 malformed calls in one session | 7 comments, 10 👍; detailed JSONL evidence provided |
| [#59628](https://github.com/anthropics/claude-code/issues/59628) | **Worktree sessions can edit parent checkout without guardrails** | Sandbox escape risk; violates git worktree isolation expectations | 6 comments; security-adjacent |
| [#63634](https://github.com/anthropics/claude-code/issues/63634) | **`/compact` fails with 1M credit error even on Sonnet 4.6** | Compaction internally requests wrong model tier; breaks long-session workflows | 5 comments, 2 👍; reveals model selection logic bug |
| [#65216](https://github.com/anthropics/claude-code/issues/65216) | **Worktree background agents crash-loop on reopen** | Data loss + session corruption; "No conversation found with session ID" | 2 comments; fresh, has repro |
| [#65208](https://github.com/anthropics/claude-code/issues/65208) | **Bedrock: Haiku 4.5 sent as bare model ID** | AWS integration broken for scheduled tasks; inference profile mismatch | 2 comments; enterprise Bedrock users affected |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#65223](https://github.com/anthropics/claude-code/pull/65223) | **Spelling: Fix typo in security guidance plugin** | Open | Trivial but emblematic: "reqwest" → "request" in security plugin; suggests code review surface area for community |
| [#22919](https://github.com/anthropics/claude-code/pull/22919) | **feat(plugins): add collab plugin for Socratic mentoring mode** | Closed | Mentorship-mode plugin where Claude asks guiding questions instead of writing code; pedagogical use case |

*Note: Only 2 PRs updated in last 24h. Low PR velocity suggests either release freeze or bottleneck in review pipeline.*

---

## Feature Request Trends

1. **Usage/quota transparency in CLI** — Multiple requests ([#59709](https://github.com/anthropics/claude-code/issues/59709), [#60674](https://github.com/anthropics/claude-code/issues/60674)) to expose plan limits, session percentages, and reset times in statusline JSON and CLI metadata; currently only available via web settings
2. **Cross-session memory persistence** — [#65173](https://github.com/anthropics/claude-code/issues/65173) highlights auto-memory failing to persist, causing token waste; implies architectural gap in session state management
3. **Windows platform parity** — Persistent theme: directory locking, symlink handling, LSP integration all lag macOS/Linux

---

## Developer Pain Points

| Theme | Frequency | Evidence |
|-------|-----------|----------|
| **1M context billing gate** | 🔥 Critical | 4+ duplicate issues (#63060, #63908, #63634, #64349, #64919); blocks Pro users across macOS/Windows/VS Code; `/compact` also affected |
| **Windows session-env filesystem bugs** | High | #49984, #50886 both closed today; #17149 still open; pattern of `mkdir`/`rmdir` races with OneDrive/symlinks |
| **Agent/session reliability** | High | Background tasks reappearing as running (#59456, closed), crash-looping on reopen (#65216), dying on rate limits (#65222) |
| **Auth/dead-end UX** | Medium | GitHub re-auth with no settings path (#48769), Desktop injecting empty API key (#64710, closed) |
| **Model output formatting regressions** | Medium | Raw `<invoke>` text (#63870), malformed tool-call markup (#64112); suggests prompt/template drift |

---

*Digest compiled from 50 issues, 2 PRs, and 1 release updated 2026-06-03 to 2026-06-04.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-04

## 1. Today's Highlights

The Codex team is pushing hard on **prompt hooks infrastructure** with three interrelated PRs landing today to enable model-backed hook handlers and client-visible metadata. Meanwhile, **Windows + WSL performance** remains the top community pain point, with multiple new issues confirming severe latency from cross-filesystem scanning and sandbox mismatches. The Rust CLI saw two rapid alpha releases (`0.137.0-alpha.4` and `.5`), suggesting active iteration on the core runtime.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [rust-v0.137.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.5) | 2026-06-03 | Rapid follow-up to alpha.4; no detailed changelog provided—likely hotfix iteration |
| [rust-v0.137.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.4) | 2026-06-03 | Continued alpha channel progression toward stable 0.137 |

*No substantive release notes were published for either alpha.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#23794](https://github.com/openai/codex/issues/23794) | **CLOSED** — Missing context/token usage indicator in Desktop | Restores critical UX transparency for token budgeting; 163 comments show how essential this visibility is | Resolved to community satisfaction (160 👍); validates that UI regressions get prioritized when loudly reported |
| [#11023](https://github.com/openai/codex/issues/11023) | Linux desktop app request | Largest platform gap; Mac thermal throttling (linked issue #10432) makes Linux a workaround and a primary need | 454 👍, 82 comments—long-running and highly upvoted; OpenAI's silence on roadmap frustrates advocates |
| [#25749](https://github.com/openai/codex/issues/25749) | Auth deadlock: inaccessible legacy phone number blocks Codex | Severe account recovery failure—users can access ChatGPT via Google OAuth + MFA but Codex demands obsolete SMS verification | 34 comments in 2 days; security vs. UX tension with no self-service escape hatch |
| [#21527](https://github.com/openai/codex/issues/21527) | General performance degradation (app + VS Code) | Broad "too slow" complaint spanning surfaces; suggests systemic latency, not isolated regression | 25 comments, scattered +1s; lacks diagnostic specificity, making it hard for maintainers to action |
| [#24675](https://github.com/openai/codex/issues/24675) | Stale app connector links after 401 reauth | Enterprise/team workflow breaker—Linear integration silently fails until cache manually cleared | Well-diagnosed by reporter; 17 comments with reproduction steps; points to missing cache invalidation logic |
| [#25715](https://github.com/openai/codex/issues/25715) | WSL agent environment makes app "unusable slow" | Confirms cross-platform architecture penalty; every command incurs WSL filesystem overhead | 15 👍, 11 comments; users comparing CLI-in-WSL (fast) vs. Desktop-over-WSL (slow) isolate the bug surface |
| [#26253](https://github.com/openai/codex/issues/26253) | Rate limit display crash: 77% → 0% in one minute | Critical billing/trust bug—users on paid Plus with 10x bonus see limits evaporate spuriously | Spanish-language report with "BUG CRÍTICO / URGENTE" urgency; only 2 👍 but high severity |
| [#26234](https://github.com/openai/codex/issues/26234) | MCP tools broken for non-OpenAI providers (Ollama, LM Studio, OpenRouter) | Local/alt-model ecosystem blocker; namespace serialization is OpenAI-proprietary and incompatible | 16 👍, strong technical diagnosis; pits Codex's API abstraction against community's polyglot needs |
| [#26149](https://github.com/openai/codex/issues/26149) | Windows+WSL repeated `.codex/.tmp/plugins` scans over `/mnt/c` | Root-cause level finding: `strace` confirms excessive filesystem traversal; explains #25715 and others | 5 👩, exemplary debugging; community providing profiling data that maintainers can directly use |
| [#25765](https://github.com/openai/codex/issues/25765) | Forced logout → SMS verification loop (Indonesia) | Companion to #25749; regional SMS delivery failures compound auth fragility | 9 comments, 1 👍; pattern suggests emerging market accessibility gap |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Technical Significance |
|---|-----|-------------|------------------------|
| [#26041](https://github.com/openai/codex/pull/26041) | App-server background terminal process APIs | Centralizes terminal lifecycle in app-server vs. local process tree heuristics | Enables reliable long-running task management; foundation for distributed session state |
| [#26267](https://github.com/openai/codex/pull/26267) | Prompt hook runtime | Executes model-backed handlers without coupling `codex-hooks` to inference internals | Provider-agnostic hook execution; prerequisite for extensible agent behaviors |
| [#24634](https://github.com/openai/codex/pull/24634) | Add prompt hooks (base) | Configuration and semantics for prompt-level interception | Core infrastructure PR; #26267 and #26268 build on this |
| [#26268](https://github.com/openai/codex/pull/26268) | Expose prompt hooks to clients | Client-visible metadata: definitions, models, `continueOnBlock` | Transparency requirement for user trust; security-critical before hooks go live |
| [#24852](https://github.com/openai/codex/pull/24852) | Enforce managed permission allowlists | Replaces array-based permission composition with set union; fixes enterprise admin override gaps | Security boundary hardening; affects managed deployments |
| [#26272](https://github.com/openai/codex/pull/26272) | Load plugin hooks without full plugin capabilities | Performance: avoids loading skills, MCP, apps just to read hook declarations | Addresses plugin system bloat; targeted optimization |
| [#26265](https://github.com/openai/codex/pull/26265) | Optimize byte scans with `memchr` | 2.3–4.6× speedups in MCP stdio, Ollama streaming, history newline counting | Low-level Rust perf win; demonstrates attention to CLI efficiency |
| [#25338](https://github.com/openai/codex/pull/25338) | Workspace mutation approvals [5/6] | Dedicated app-server protocol for filesystem mutation consent | Security UX: reviewers see actual state changes, not generic "command execution" prompts |
| [#25334](https://github.com/openai/codex/pull/25334) | Model workspace mutation tools [4/6] | `set_working_directory(path)` primitive for worktree/subtree workflows | Enables stacked-PR and monorepo navigation; shell `cd` was insufficient for sandbox boundaries |
| [#25335](https://github.com/openai/codex/pull/25335) | TUI workspace directory commands [6/6] | `/cwd [path]`, `/status` workspace exposure | User control complement to #25334; completes 6-PR workspace mutation series |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Multi-account auth** | #4432, #9648, #12029, #20500 | Sustained across 9 months; 102+38+12+45 👍; personal/corporate separation is standard dev tooling expectation |
| **Linux desktop support** | #11023 | 454 👍; longest-running open request; no official commitment visible |
| **Rate limit transparency** | #24080, #20310, #26253, #24337 | CLI status line insufficient; users want `resetsAt`, `balance`, `planType`; SDK exposure requested |
| **TUI copy/paste ergonomics** | #12200 | 22 👍; HEREDOCs broken by 2-space indent wrapping; affects shell script workflows |
| **Model selection / rollback** | #26183 | 4 👍 but emotionally resonant—"5.3-codex was better for my workload"; trust erosion when preferred model deprecated |

---

## 6. Developer Pain Points

**Windows + WSL performance catastrophe** — Multiple confirmed vectors (#25715, #26149, #25810, #26037) converge on a pattern: Codex Desktop assumes POSIX-adjacent filesystem locality, but Windows paths, `/mnt/c` traversal, and sandbox state inheritance all degrade catastrophically. The CLI works fine *inside* WSL; the Desktop-to-WSL bridge is the failure mode. Users are doing OpenAI's debugging with `strace`.

**Auth fragility and account recovery dead ends** — Phone number verification as hard gate (#25749, #25765) breaks Google OAuth + MFA users with stale SMS records. No self-service replacement path exists. Forced logout is unrecoverable.

**Rate limit opacity and suspected accounting bugs** — Display jumps from 77% to 0% (#26253), overnight drain without usage (#24818), and faster-than-expected depletion (#24337) erode billing trust. The status line shows percentages only; richer metadata is gated behind internal APIs.

**MCP ecosystem impedance mismatches** — Custom stdio servers discovered but not exposed (#19425); namespace serialization breaks non-OpenAI providers (#26234); local plugins not discovered on Windows (#26037). The "universal" MCP standard fragments in Codex's implementation details.

**Missing multi-account as blocker for professional use** — Four separate issues, hundreds of votes, no shipped solution. The CLI's single `~/.codex/` directory and shared OAuth credential assume hobbyist single-identity usage, contradicting how developers actually work (personal + client + corporate orgs).

---

*Digest compiled from github.com/openai/codex public activity for 2026-06-04.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-04

---

## 1. Today's Highlights

Google shipped **three releases in 24 hours** (v0.45.0 stable, v0.46.0-preview.0, and v0.46.0-preview.1), with critical PTY and Termux stability fixes leading the changelog. Meanwhile, a **path traversal security fix** for skill management landed in PR review, and model resolution PRs closed as the team prepares **Gemini 3.5 Flash GA** rollout behind experiment flags.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.46.0-preview.1** | Patch release cherry-picking fix to preview.0 branch ([Release](https://github.com/google-gemini/gemini-cli/pull/27655)) |
| **v0.46.0-preview.0** | Hardens PTY resize against native crashes; Termux relaunch/resize remount loop fix ([Release](https://github.com/google-gemini/gemini-cli/pull/27496)) |
| **v0.45.0** | Stable release incorporating Termux loop prevention (saymanq) and nightly build pipeline updates ([Release](https://github.com/google-gemini/gemini-cli/pull/27362)) |

**Stability theme:** Both preview and stable channels focused on terminal environment robustness—PTY crashes and Android/Termux edge cases.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | EPIC tracking 76+ behavioral eval tests across 6 Gemini variants; foundational for agent quality measurement | 7 comments, P1, maintainer-only |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core user-facing breakage—simple ops like folder creation deadlock for >1 hour | 7 comments, **8 upvotes**, P1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping** | Could reduce token noise and tool-call turns via precise method-boundary reads | 7 comments, P2, investigation EPIC |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** | Silent failure mode—users think analysis completed when it was truncated | 6 comments, P1 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini ignores custom skills/sub-agents** | Anecdotal but persistent: model won't auto-invoke skills even for relevant tasks | 6 comments, P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs at "Waiting input"** | Simple commands falsely appear to await input; breaks automation flows | 4 comments, 3 upvotes, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux display server compatibility gap; browser automation blocked | 4 comments, P1 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory logging/redaction gaps** | Security: secrets reach model context before redaction; service-side logging concerns | 3 comments, P2 |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Invalid Auto Memory patches silently skipped** | Data integrity: malformed patches ignored without user visibility | 3 comments, P2 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done output hook crashes CLI** | "Almost finished" state triggers fatal crash—reliability issue in productivity workflow | 3 comments, P1 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#27659](https://github.com/google-gemini/gemini-cli/pull/27659) | **Path traversal fix for skill install/link/uninstall** | Mitigates three CVE-class vulnerabilities in agent skill management via frontmatter and filesystem path sanitization | 🔍 Open, needs review |
| [#27572](https://github.com/google-gemini/gemini-cli/pull/27572) | **tmux background detection false positive** | Fixes #ffffff light-background misdetection in tmux/mosh causing theme/regression issues | 🔍 Open |
| [#27619](https://github.com/google-gemini/gemini-cli/pull/27619) | **Atomic MCP tool discovery updates** | Eliminates "tool not found" errors during transient network drops by atomic refresh pattern | 🔍 Open |
| [#27570](https://github.com/google-gemini/gemini-cli/pull/27570) | **Flash GA model transition (experiment-gated)** | Replaces legacy Flash with `gemini-3.5-flash` behind `useGemini3_5Flash` flag | ✅ Closed |
| [#27645](https://github.com/google-gemini/gemini-cli/pull/27645) | **3.5 Flash backend resolution + auto mode** | Prioritizes 3.5 Flash over 3 Flash Preview when flag enabled; aligns 'auto' alias | ✅ Closed |
| [#25786](https://github.com/google-gemini/gemini-cli/pull/25786) | **Enhanced `/copy` with index support + MCP text extraction** | `/copy N` for Nth response; includes MCP tool output in copied content | 🔍 Open |
| [#27614](https://github.com/google-gemini/gemini-cli/pull/27614) | **Gemini 3.5 Flash model family support** | Adds `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview` constants/configs | ✅ Closed |
| [#27505](https://github.com/google-gemini/gemini-cli/pull/27505) | **CJK width-0 continuation cell fix** | Prevents spurious spaces between wide characters; fixes copy-paste for international users | 🔍 Open |
| [#27639](https://github.com/google-gemini/gemini-cli/pull/27639) | **Disable auto-update for corporate paths** | Detects `/google/bin/` installs, suppresses update prompts in managed environments | ✅ Closed |
| [#21541](https://github.com/google-gemini/gemini-cli/pull/21541) | **EBUSY fallback + TOML parse recovery** | File policy resilience: handles locked-file renames and malformed TOML gracefully | ✅ Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware tooling** | #22745, #22746, #22747 | High—three linked EPICs investigating `tilth`, `glyph`, `ast-grep` for precise code navigation |
| **Agent self-awareness** | #21432 | Model should know its own CLI flags, hotkeys, and self-execution patterns |
| **Browser agent resilience** | #22232, #22267, #21983 | Session takeover, lock recovery, settings.json respect, Wayland support |
| **Memory system hardening** | #26525, #26523, #26522, #26516 | Security, validation, retry logic, and deterministic redaction |
| **Remote agent infrastructure** | #20303 | Task-level auth, 1P agent support, background operations |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Tracking |
|------------|-----------|----------|
| **Agent hangs & false success states** | Very high | #21409 (generalist hang), #22323 (MAX_TURNS→GOAL), #25166 (shell "waiting input"), #21983 (browser fail) |
| **Subagent/skill discoverability** | High | #21968 (skills ignored), #22093 (subagents run without permission since v0.33), #24246 (>128 tools → 400 error) |
| **Terminal environment fragility** | High | PTY resize crashes, tmux detection, CJK rendering, external editor corruption (#24935) |
| **Auto Memory reliability/security** | Medium-high | Silent skips, infinite retry loops, redaction timing, symlink handling (#20079) |
| **Model/tool scaling limits** | Medium | #24246 (tool count ceiling), #23571 (tmp script sprawl), #22466 (`\n` escape bugs) |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity through 2026-06-03.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-04

## Today's Highlights

No new release shipped in the last 24 hours, but the team closed 12 issues with heavy focus on **input/keyboard and terminal rendering bugs**, particularly for CJK (Chinese/Japanese/Korean) users and Windows clipboard handling. A **sandbox mode request** continues to gain strong community traction as enterprises seek safer AI agent file access controls.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1481](https://github.com/github/copilot-cli/issues/1481) | **SHIFT+ENTER executes instead of line-breaking** — closed | Fixes a universal UX expectation from chat apps; `CTRL+ENTER` for newlines is non-standard and error-prone | 24 comments, 14 👍 — highly engaged, relief at closure |
| [#892](https://https://github.com/github/copilot-cli/issues/892) | **Sandbox mode to restrict file access to working directory** — open | Critical enterprise/security need; prevents AI agents from escaping workspace boundaries | 49 👍, 10 comments — one of the highest-voted open issues |
| [#1733](https://github.com/github/copilot-cli/issues/1733) | **Paste broken in PowerShell/CMD after reboot** — closed | Breaks fundamental workflow for Windows terminal users; "garbage string" insertion is severe | 9 comments, 7 👍 |
| [#1999](https://github.com/github/copilot-cli/issues/1999) | **Cannot type `@` on German keyboard (Alt-Gr+q)** — open | Renders CLI unusable for German speakers; `@` is essential for mentions | 8 comments, only 1 👍 but severity is critical |
| [#3539](https://github.com/github/copilot-cli/issues/3539) | **MCP/plugins consume 73% of context window (146k/200k)** — open | Architecture-level scaling problem; enterprise MCP adoption hits hard token limits immediately | 5 comments, 2 👍 — niche but severe for power users |
| [#3622](https://github.com/github/copilot-cli/issues/3622) | **Copy to clipboard silently fails on Windows** — open | Regression from v1.0.48; breaks trust in output handling | 2 comments, 2 👍 |
| [#3659](https://github.com/github/copilot-cli/issues/3659) | **Plugin hooks fail on Windows due to PowerShell argument parsing** — open | Blocks all tool use for plugin-dependent workflows; `.ps1` scripts mishandled | Fresh (Jun 3), 2 comments |
| [#3542](https://github.com/github/copilot-cli/issues/3542) | **Enterprise MCP allowlist exceeds token limit → compaction loop** — open | Infinite loop degrades performance; hard-coded limits clash with enterprise governance | 1 comment, 1 👍 |
| [#3172](https://github.com/github/copilot-cli/issues/3172) | **"Somebody else is owning the clipboard" breaks layout** — open | Bizarre UX bug when switching apps; status line corruption | 5 👍, 1 comment |
| [#3664](https://github.com/github/copilot-cli/issues/3664) | **`~` (tilde) not expanded in `preToolUse` hook `cwd`** — open | Silent failure pattern; hooks appear configured correctly but never run | Fresh (Jun 3), 0 comments |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3651](https://github.com/github/copilot-cli/pull/3651) | **Create xcopilotcli** | Appears to be a community fork/experimental wrapper (`xcopilotcli`) — no description provided | Open, no comments |

*Only 1 PR updated in the last 24 hours. No significant feature PRs in flight.*

---

## Feature Request Trends

1. **Sandboxed/Restricted Execution** — The [#892](https://github.com/github/copilot-cli/issues/892) sandbox request (49 👍) represents a broader push for **workspace-scoped AI agents** with filesystem boundaries, especially in enterprise and CI/CD contexts.

2. **BYOM (Bring Your Own Model) Expansion** — [#3624](https://github.com/github/copilot-cli/issues/3624) highlights demand for **generic OpenAI-compatible local endpoints** (LM Studio, Ollama, llama.cpp) beyond Anthropic-specific configurations.

3. **Context Window Transparency & Control** — Multiple issues ([#3539](https://github.com/github/copilot-cli/issues/3539), [#3542](https://github.com/github/copilot-cli/issues/3542), [#3612](https://github.com/github/copilot-cli/issues/3612)) converge on needing **token usage breakdowns** (input vs. output) and **configurable context budgets** for system/tool sections.

4. **Session Management Improvements** — [#3645](https://github.com/github/copilot-cli/issues/3645) (auto-naming) and [#2303](https://github.com/github/copilot-cli/issues/2303) (session retrieval by ID) show demand for **better session discoverability** in multi-tab workflows.

5. **Voice Input Expansion** — [#3663](https://github.com/github/copilot-cli/issues/3663) requests **linux-arm64 voice support**, reflecting WSL/ARM device growth.

---

## Developer Pain Points

| Category | Severity | Summary |
|----------|----------|---------|
| **CJK/IME Input & Rendering** | 🔴 Critical | 5+ closed issues in 24h around invisible/misrendered Chinese/Japanese characters, IME flickering, and post-space glyph disappearance. The cell-based renderer (v1.0.55+) introduced regressions. |
| **Windows Clipboard Reliability** | 🔴 High | Silent failures (#3622), ownership conflicts (#3172), and paste corruption (#1733) plague Windows users. |
| **Keyboard Layout Internationalization** | 🟡 High | German `@` (#1999), Alt-Gr handling, and modifier key regressions (#3587) show insufficient non-US keyboard testing. |
| **Context Window Bloat** | 🟡 High | MCP server proliferation consumes 70%+ of tokens before first user message; no user-visible mitigation. |
| **Hook/Plugin Execution on Windows** | 🟡 High | PowerShell argument parsing (#3659) and path expansion (#3664) silently break plugin systems. |
| **Interrupt/Cancel UX** | 🟡 Medium | No keyboard interrupt for streaming responses (#3607), forcing process kills. |

---

*Digest compiled from 42 issues and 1 PR updated 2026-06-03 to 2026-06-04.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-04

## 1. Today's Highlights

Three issues were closed with quality-of-life improvements for prompt editing and slash command UX, while four new issues surfaced around session management, project organization, and web interface friction. The standout concern is a **critical bug where resuming sessions silently overrides system prompt updates**, preventing new skills and configurations from taking effect.

---

## 2. Releases

**No new releases** in the last 24 hours. Latest stable remains prior version.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|--------------|
| [#2420](https://github.com/MoonshotAI/kimi-cli/issues/2420) | Session resume overrides newly generated system prompt, preventing skill/config updates from taking effect | **OPEN** | **Critical workflow blocker**: Users adding skills or updating configs see zero effect when resuming old sessions. The stale `_system_prompt` from `context.jsonl` unconditionally clobbers freshly generated prompts from `load_agent()`. Zero community engagement yet suggests under-reported impact. |
| [#2421](https://github.com/MoonshotAI/kimi-cli/issues/2421) | Need project model for session organization | **OPEN** | Directly requests parity with Kimi web's project-based session grouping, shared memory, and indexed databases for token reduction. Represents a structural UX gap vs. the web product. |
| [#2419](https://github.com/MoonshotAI/kimi-cli/issues/2419) | `kimi web` cannot copy content in boxes; paste non-functional | **OPEN** | Cross-platform bug (Linux host, Win11 client) breaking basic clipboard operations in web mode. No comments yet—may affect all remote/web hybrid workflows. |
| [#2418](https://github.com/MoonshotAI/kimi-cli/issues/2418) | Replay mode auto-triggers on every session switch in web UI | **OPEN** | User friction: forced replay scroll on session switch disrupts workflow. Requests opt-out or memory of collapsed state. |
| [#751](https://github.com/MoonshotAI/kimi-cli/issues/751) | Slash commands execute immediately upon selection | **CLOSED** | Eliminates extra Enter press for slash commands. Small but high-frequency interaction fix—5 comments show sustained community interest since January. |
| [#1847](https://github.com/MoonshotAI/kimi-cli/issues/1847) | Treat pasted image and text placeholder as unified block | **CLOSED** | Prevents character-by-character deletion of placeholders; enables whole-block cursor navigation. Benchmarked against "other CLIs" with video evidence—polish comparison. |
| [#2306](https://github.com/MoonshotAI/kimi-cli/issues/2306) | APC protocol playback: session history empty after restart | **CLOSED** | Documented dual-mode failure (Zed ACP integration + web). Structured analysis with state table; likely resolved alongside related session persistence work. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#1848](https://github.com/MoonshotAI/kimi-cli/pull/1848) | feat(prompt): edit image and pasted-text placeholders as blocks | **CLOSED** | Implements block-level editing for rich content placeholders. Cursor navigation and deletion now operate on whole placeholders rather than individual characters. Closes #1847. Merged with no review comments—clean implementation. |

*Only one PR updated in the 24h window.*

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Web/CLI parity** | #2421 (projects), #2418 (replay UX) | Users expect web product features (project organization, session state memory) in CLI |
| **Session lifecycle control** | #2420 (prompt override), #2418 (replay), #2306 (history persistence) | Strong demand for predictable, configurable session resume/restore behavior |
| **Prompt editing ergonomics** | #1847/#1848 (block placeholders), #751 (instant slash commands) | Reducing keystrokes and preventing accidental content destruction |
| **Cross-platform clipboard** | #2419 | Web mode needs robust copy/paste across OS boundaries |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity |
|------------|-----------|----------|
| **Session state unpredictability** | 3 issues (#2420, #2418, #2306) | 🔴 High — Silent failures (missing skills, empty history, forced replays) erode trust in long-lived sessions |
| **Web mode as second-class citizen** | 3 issues (#2421, #2419, #2418) | 🟡 Medium — Feature gaps and platform bugs suggest web interface needs dedicated QA pass |
| **Micro-friction in high-frequency interactions** | 2 issues (#751, #1847) | 🟢 Lower — Being addressed; indicates mature attention to UX polish |

**Bottom line**: The session resume bug (#2420) is a silent configuration killer that likely affects every power user relying on skills. Recommend prioritization before more users accumulate "broken" persistent sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-04

## Today's Highlights

The OpenCode team is making significant strides on V2 runtime architecture with multiple core infrastructure PRs landing today, including an embedded session runtime for local-first consumers and a command registry system. Meanwhile, the community continues to voice strong demand for voice input capabilities, with multiple related issues and feature requests surfacing in the past 24 hours.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#1505](https://github.com/anomalyco/opencode/issues/1505) | **Shift+Enter keybinding broken** (CLOSED) | Classic TUX input handling bug affecting daily workflow for terminal users; high engagement shows UX polish matters | 126 comments, 101 👍 — resolved after extensive community debugging |
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | **Speech-to-Text Voice Input** | Most-upvoted active feature request (161 👍); represents accessibility and productivity gap vs. competitors | 32 comments, active discussion on implementation approach |
| [#28996](https://github.com/anomalyco/opencode/issues/28996) | **Crash at startup on Debian/WezTerm** | Critical stability issue blocking users from running the tool at all; limited diagnostics provided | 13 comments, needs better repro steps |
| [#29992](https://github.com/anomalyco/opencode/issues/29992) | **Auto-scroll breaks after manual scroll** | Common TUX pattern failure — breaks flow during long model outputs | 14 👍, well-documented repro |
| [#29548](https://github.com/anomalyco/opencode/issues/29548) | **OpenAI provider header timeout regression** | Clear 1.15.11 regression with known workaround; signals release QA gap | User-provided fix (increase `headerTimeout`) |
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | **High CPU usage in recent versions** | Performance regression affecting multi-session power users — 10→3 session capacity drop | 8 comments, bisecting needed |
| [#12800](https://github.com/anomalyco/opencode/issues/12800) | **macOS clipboard fallback missing** | Platform parity gap — `pbcopy`/`pbpaste` missing while Linux `xclip` hardcoded | 7 👍, straightforward fix awaiting PR |
| [#17425](https://github.com/anomalyco/opencode/issues/17425) | **Plugin extensibility gaps block voice plugins** | Architectural blocker: even if voice input is built, plugin SDK lacks necessary hooks | Links to #4695, #9264, #11345 — ecosystem constraint |
| [#16610](https://github.com/anomalyco/opencode/issues/16610) | **inotify exhaustion hangs startup** | Linux-specific resource leak with `.git` repos; graceful degradation missing | 6 comments, reproducible with `sysctl` tweak |
| [#30611](https://github.com/anomalyco/opencode/issues/30611) | **Sessions fail on transient network errors** | Overly aggressive error classification — only `ECONNRESET` retried, not `ETIMEDOUT`, `ECONNREFUSED`, etc. | 3 comments, fix in PR #30638 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#30632](https://github.com/anomalyco/opencode/pull/30632) | **Embedded V2 session runtime & tool foundation** | Effect-native runtime for local-first consumers (OpenCord); separates prompt admission from execution with durable session event model and replay | OPEN — draft, core architecture |
| [#30624](https://github.com/anomalyco/opencode/pull/30624) | **Command registry (V2)** | Location-scoped `CommandV2` registry with ordered transforms; normalizes legacy `command` → `commands`; loads `.md` definitions via config plugin | OPEN — config system modernization |
| [#30019](https://github.com/anomalyco/opencode/pull/30019) | **MCP/TUI notification bridge** | Enables MCP servers to communicate with active TUI session — closes plugin→UI notification gap | OPEN — MCP ecosystem enabler |
| [#30639](https://github.com/anomalyco/opencode/pull/30639) | **Route nested subagent prompts to ancestor UI** | Fixes permission/question prompts from deeply nested subagents being dropped; resolves #13715, #7654 | OPEN — reliability fix for agent hierarchies |
| [#30638](https://github.com/anomalyco/opencode/pull/30638) | **Classify transport/timeout errors as retryable** | Expands retry policy beyond `ECONNRESET` to `ETIMEDOUT`, `ECONNREFUSED`, etc.; closes #30611 | OPEN — resilience improvement |
| [#30640](https://github.com/anomalyco/opencode/pull/30640) | **Moving sessions between projects** | Control-plane service + HTTP endpoint + TUI flows for relocating sessions with sync handling | OPEN — workflow flexibility |
| [#30636](https://github.com/anomalyco/opencode/pull/30636) | **Database indexes for session/event queries** | Adds `session(time_updated)` and `event(aggregate_id, seq)` indexes — targets performance for large histories | OPEN — scalability |
| [#30641](https://github.com/anomalyco/opencode/pull/30641) | **Shell cancel race fix** | Delegates cancellation to session runner's serialized state machine; fixes idle cancellation timing | OPEN — correctness |
| [#30637](https://github.com/anomalyco/opencode/pull/30637) | **Persist agent name on subagent sessions** | Fixes `deriveSubagentSession` dropping `agent` field, breaking nested subagent chains | OPEN — bugfix for agent identity |
| [#30633](https://github.com/anomalyco/opencode/pull/30633) | **Recover tool calls emitted as plain text** | Handles vLLM/llama.cpp models that output XML-like tool calls as raw text instead of structured JSON | OPEN — model compatibility |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Voice / Speech-to-Text input** | #4695 (161 👍), #30634, #30601, #17425 (plugin extensibility for voice) | **Highest demand** — multiple duplicate requests in 24h show unmet need |
| **Agent presets / configuration** | #29626 — subagent configuration is painful across all coding agents | Moderate — workflow efficiency |
| **Configurable search paths** | #14240 — commands/agents need parity with skills path config | Low but specific — power user request |
| **Local-first / offline capabilities** | #30634 explicitly requests "local-first" STT; #30632 V2 runtime enables local consumers | Emerging — privacy and latency driven |

---

## Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **TUX input handling fragility** | #1505 (shift+enter), #24817 (Ctrl+Z → SIGTSTP), #29992 (auto-scroll) | High — daily friction for terminal users |
| **Network resilience gaps** | #30611 (retry too narrow), #29548 (timeout regression), #25757 (auth header loss on restart) | High — breaks long-running sessions |
| **Platform parity (macOS, Windows, Linux)** | #12800 (macOS clipboard), #24844 (Windows bash paths), #16610 (Linux inotify) | Medium — disproportionately affects non-Linux users |
| **Plugin SDK limitations** | #17425 (voice plugins blocked), #28037 (permission replies dropped), #25293 (stale @latest cache) | Medium — ecosystem growth constrained |
| **Performance regressions** | #30086 (CPU spike), #30627 (Electron main process crashes) | Medium — recent degradation, bisection needed |
| **Nested subagent reliability** | #30635 (prompts dropped), #30637 (agent name lost), #30639 (fix in PR) | Medium — complex agent workflows fragile |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs active in last 24h.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-04

## Today's Highlights

The Pi project saw intense activity around provider ecosystem expansion with three new providers (Anthropic Vertex, Amazon Bedrock Mantle, ZAI Coding Plan China) landing or in review, alongside critical fixes for image-heavy sessions hitting Anthropic's 32MB request limit and session reload semantics. The maintainers also shipped a workspace approval system for security-conscious users while closing a wave of long-standing bugs around retry logic, Fireworks compatibility, and terminal rendering.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#5223](https://github.com/earendil-works/pi/issues/5223) | **Anthropic provider corrupts thinking blocks in multi-turn Opus 4.8 conversations** | Breaks Claude's flagship model mid-session; "adaptive thinking" is Anthropic's differentiating feature and Pi's mutation of `thinking`/`redacted_thinking` blocks causes irrecoverable 400 errors. | 14 comments, 5 👍 — highest engagement item; users confirming reproduction on `high` reasoning mode. |
| [#5271](https://github.com/earendil-works/pi/issues/5271) | **Minimax M3 support** | Minimax M3 launched with 1M context and native multimodality; rapid closure shows maintainer responsiveness to competitive model releases. | Closed same day as creation; community filed duplicate #5315, both resolved quickly. |
| [#4666](https://github.com/earendil-works/pi/issues/4666) | **429 retry-after ignores `maxRetryDelayMs`; Esc and `/new` don't recover** | Rate-limit handling is critical for production use; silent violation of documented config breaks trust. Users stuck in unrecoverable hang states. | 7 comments, resolved with fix; revealed deeper UX issue around escape hatch reliability. |
| [#3834](https://github.com/earendil-works/pi/issues/3834) | **Fireworks provider non-functional** | Fireworks is a major inference provider; `$6 credits wasted` indicates real user impact. Root cause was request validation errors on provider side. | 7 comments, 1 👍; closed after diagnosis of provider-side change. |
| [#5103](https://github.com/earendil-works/pi/issues/5103) | **Windows bash detector fails for non-default Git installs** | Hardcoded `C:\Program Files` assumption excludes users with D: drives or portable Git; breaks shell tool on Windows entirely. | 5 comments; path detection fragility is recurring Windows theme. |
| [#5188](https://github.com/earendil-works/pi/issues/5188) | **`shift+enter` submits instead of newline despite keybindings config** | Violates explicit user configuration; muscle memory conflict with standard textarea behavior. | 3 comments, 1 👍; keybinding system reliability questioned. |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | **Vertex + GCP metadata server auth gaps** | Synchronous `existsSync` check blocks modern GCP auth flows (IMDS, Workload Identity); enterprise Vertex adoption blocked. | 4 comments; architectural limitation in auth pipeline. |
| [#5303](https://github.com/earendil-works/pi/issues/5303) | **Bash tool truncates output on child process stdout timing** | 100ms `destroy()` timeout loses `git commit` pre-commit hook output; data loss in common developer workflow. | 2 comments; references #2630 showing long-standing race condition. |
| [#5369](https://github.com/earendil-works/pi/issues/5369) | **Tool-result images bypass resize/budget → uncompactable sessions** | Browser screenshots accumulate at full resolution, eventually hitting 413 "prompt too long" loops; session death spiral. | Closed with PR #5370; critical for agent-heavy workflows. |
| [#5373](https://github.com/earendil-works/pi/issues/5373) | **24% idle CPU on large sessions from excessive `futex` syscalls** | Performance regression at scale; 45K syscalls in 66s for inactive session. | 1 comment; profiling data provided, needs investigation. |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#5376](https://github.com/earendil-works/pi/pull/5376) | **fix(interactive): reload `steeringMode`/`followUpMode` on `/reload`** | Settings changes no longer require full restart; closes #2753 gap in hot-reload semantics. | ✅ Merged |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | **feat(ai): Anthropic Vertex provider** | Thin adapter reusing Anthropic streaming path for Google Cloud Vertex AI; fills provider gap vs. direct `google-vertex`. | 🔄 Open, under review |
| [#5371](https://github.com/earendil-works/pi/pull/5371) | **fix(coding-agent): space between skill and user messages** | UI polish for `/skill:<name>` command concatenation. | 🔄 Open |
| [#5370](https://github.com/earendil-works/pi/pull/5370) | **fix(coding-agent): recover from request-size overflow by dropping oldest images** | Implements compaction strategy for 413 recovery; drops images oldest-first when `isContextOverflow()` fires. | ✅ Merged |
| [#5332](https://github.com/earendil-works/pi/pull/5332) | **feat(config): Approval system for workspaces** | Security feature: `.pi` and new `.pi.user` extension folders require interactive approval on first load; `-f` to force. | 🔄 Open, needs follow-up |
| [#5348](https://github.com/earendil-works/pi/pull/5348) | **Add selective pi-ai base entrypoints** | Tree-shakeable `@earendil-works/pi-ai/base` for selective transport bundling; reduces bundle bloat for custom builds. | 🔄 Open |
| [#5360](https://github.com/earendil-works/pi/pull/5360) | **fix(coding-agent): isolate tool result status background** | Visual separation of tool call preview vs. result regions in TUI. | ✅ Merged |
| [#5178](https://github.com/earendil-works/pi/pull/5178) | **ai: custom-header support to Bedrock provider** | Closes deferred gap from `d2be648`; corporate proxy/gateway compatibility. | ✅ Merged |
| [#5345](https://github.com/earendil-works/pi/pull/5345) | **fix(coding-agent): move temporary extension cache** | Relocates temp extensions to `~/.pi/agent`, per-user on Linux; cleanup and isolation improvement. | ✅ Merged |
| [#5333](https://github.com/earendil-works/pi/pull/5333) | **feat(ai): ZAI Coding Plan China provider** | Adds `zai-coding-cn` for `open.bigmodel.cn` endpoint; regional provider expansion. | ✅ Merged |

---

## Feature Request Trends

1. **Provider proliferation and maintenance burden** — Three new providers (MiniMax M3, Anthropic Vertex, ZAI CN, Bedrock Mantle) in 48 hours indicates rapid ecosystem fragmentation. Users expect same-day support for new model releases, straining maintenance.

2. **Remote/SSH execution environments** — [#5341](https://github.com/earendil-works/pi/issues/5341) requests SSH-routed `ExecutionEnv`; aligns with broader trend of Pi running locally but executing remotely (containers, cloud instances).

3. **MCP ecosystem integration** — [#5364](https://github.com/earendil-works/pi/issues/5364) requests `structuredContent` support; MCP servers becoming first-class citizens but Pi's tool result model lags protocol evolution.

4. **Session tree UX** — [#5366](https://github.com/earendil-works/pi/issues/5366) branch deletion request shows session management complexity growing with agent autonomy; users need better pruning tools.

5. **Command aliases and muscle memory portability** — [#5340](https://github.com/earendil-works/pi/issues/5340) (`/config`, `/exit` for Claude Code compatibility); Pi competing in CLI agent space where migration friction matters.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Image/session lifecycle management** | #5369, #5370, #5303 — images unbounded, truncation races, compaction failures | 🔴 Critical — causes session death spirals |
| **Configuration reload semantics** | #5376, #5377 — `/reload` partially applied, full restart required for queue modes | 🟡 High — disrupts iterative tuning |
| **Windows path/terminal assumptions** | #5103, #3406 — hardcoded paths, resize scroll jumps, shell detection | 🟡 High — persistent second-class experience |
| **Rate limit / retry opacity** | #4666 — documented caps ignored, no escape hatches | 🟡 High — production reliability concern |
| **Keybinding system fragility** | #5188 — explicit config overridden by hardcoded behavior | 🟠 Medium — trust erosion in customization |
| **Auth model rigidity** | #5323 — synchronous file checks block modern cloud auth | 🟠 Medium — enterprise adoption friction |
| **Idle performance at scale** | #5373 — 24% CPU for inactive large sessions | 🟠 Medium — resource efficiency concern |
| **Extension isolation and security** | #5316, #5332 — name collisions abort startup, workspace trust model evolving | 🟡 High — moving target for extension authors |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-04

## Today's Highlights

Qwen Code shipped **v0.17.1** with a critical rewind fix, while the community drove significant activity around **daemon mode hardening** and **Vim/terminal UX polish**. Three major PRs from core contributor `doudouOUC` landed targeting ACP lifecycle optimization, OpenTelemetry coverage, and subAgent stream isolation—signals of production readiness push for the serve daemon. Meanwhile, user-facing friction around **model configuration corruption**, **shell command timeouts**, and **auto-generated skills** dominated issue volume.

---

## Releases

| Version | Notes |
|--------|-------|
| **[v0.17.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1)** | Patch release fixing a false "compressed turn" error in rewind when mid-turn messages exist. Also available as `v0.17.0-preview.0` and nightly `v0.17.0-nightly.20260603.68408c30c`. |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#3384](https://github.com/QwenLM/qwen-code/issues/3384)** | Unable to add OpenAI-compatible local LLM | **12 comments** — highest engagement in 24h. Users self-hosting via vLLM/Ollama hit configuration gaps; blocks local-first adoption. | 🔥 Active troubleshooting; docs unclear |
| **[#4722](https://github.com/QwenLM/qwen-code/issues/4722)** | Statusline shows model ID instead of name; model ID used as unique key blocks multi-key setups | UI/UX regression affecting power users with multiple API keys; breaks mental model of "friendly name" abstraction. | 5 comments; labeled P2, welcome-pr |
| **[#4554](https://github.com/QwenLM/qwen-code/issues/4554)** | feat(telemetry): cover `qwen serve` daemon end-to-end with OpenTelemetry | Daemon observability gap acknowledged by maintainers; enterprise/ops users need this for production deployments. | 4 comments; roadmap/export-data tagged |
| **[#4729](https://github.com/QwenLM/qwen-code/issues/4729)** | Runtime snapshot prefix leaks into `settings.model.name`, stacks on restart, causes 404 | **Data corruption bug** — config file poisoned with internal `$runtime\|openai\|...` prefixes on every restart. Users report cascading failures. | 3 comments; fix PR already open (#4734) |
| **[#4747](https://github.com/QwenLM/qwen-code/issues/4747)** | Feature: Global user-level auto-memory at `~/.qwen/memories/` | Direct parity request vs. Claude's user memory; per-project isolation hurts cross-project consistency. | 3 comments; strong product positioning need |
| **[#4714](https://github.com/QwenLM/qwen-code/issues/4714)** | Please, disable auto-created skills | **Emotional intensity** — "big mistake," "completely unpredictable." Auto-generated skills overriding user intent is a trust-breaking UX issue. | 3 comments; no maintainer response yet |
| **[#4711](https://github.com/QwenLM/qwen-code/issues/4711)** | API Error: terminated (cause: Body Timeout Error) for slow self-hosted model | 5-minute hard timeout kills long-generation local models at 85% completion; no user-configurable escape hatch. | 3 comments; performance tagged |
| **[#4218](https://github.com/QwenLM/qwen-code/issues/4218)** | MCP Server "filesystem" shows connected but tools unavailable to model | Windows-specific MCP bridge gap; UI lies about connectivity, model never sees tools. Silently breaks agent capabilities. | 4 comments; needs-triage stale |
| **[#4210](https://github.com/QwenLM/qwen-code/issues/4210)** | `/statusline` opens wrong agent instead of StatusLineDialog in TUI | Slash command routing bug — core navigation broken for a built-in feature. | 3 comments; ready-for-agent |
| **[#4740](https://github.com/QwenLM/qwen-code/issues/4740)** | TUI mode: models interrupt mid-run, lose context memory on resume | **Reliability concern** — DeepSeek4, Meituan Longmao 2 Preview affected. Todo list state also desyncs. | 1 comment; critical for long-running sessions |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| **[#4751](https://github.com/QwenLM/qwen-code/pull/4751)** | feat(daemon): optimize ACP child lifecycle — skip relaunch, preheat, idle keep-alive | Eliminates redundant grandchild spawns; adds cgroup-aware memory limits; pre-spawns ACP child at boot. **~2.5s → ~1.5s** cold start target. | Open; doudouOUC |
| **[#4677](https://github.com/QwenLM/qwen-code/pull/4677)** | fix(cli): fix vim mode Esc leak, Enter submit, render lag and implement missing VIM commands | Comprehensive Vim overhaul: Esc no longer leaks to AppContainer, Enter submits properly, missing NORMAL mode commands added. | Open; zzhenyao |
| **[#4749](https://github.com/QwenLM/qwen-code/pull/4749)** | feat(telemetry): add daemon OTel metrics and structured log records | 11 new metric instruments for HTTP, session lifecycle, prompt queue, bridge errors, SSE connections. ObservableGauge fix for memory leaks. | Open; doudouOUC |
| **[#4732](https://github.com/QwenLM/qwen-code/pull/4732)** | feat(core): Workflow tool P1 — minimal `node:vm` sandbox + sequential `agent()` | **Dynamic Workflows / Ultracode port begins** — model-authored JS scripts in sandbox with `agent()` calls. Foundation for multi-agent execution tier. | Open; LaZzyMan |
| **[#4734](https://github.com/QwenLM/qwen-code/pull/4734)** | fix: strip runtime snapshot prefix before persisting `model.name` | Fixes #4729 — prevents `$runtime\|authType\|...` prefix accumulation in settings.json that caused 404 "model not found" on restart. | Open; Rakson0209 |
| **[#4629](https://github.com/QwenLM/qwen-code/pull/4629)** | feat(cli): add standalone auto-update support | Self-update for standalone installs (not npm): download, SHA256 verify, atomic replace. Completes installer independence story. | Open; ready-for-merge; yiliang114 |
| **[#4728](https://github.com/QwenLM/qwen-code/pull/4728)** | feat(acp): support desktop qwen integration | Expands ACP metadata for desktop client consumption without bloating core repo. Tightens dev runtime path. | Open; DragonnZhang |
| **[#4572](https://github.com/QwenLM/qwen-code/pull/4572)** | Harden auto mode self-modification checks | **Security-critical** — prevents Auto Mode classifier bypass via workspace edit fast-paths; splits classifier permissions for finer control. | Open; qqqys |
| **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** | refactor(serve): extract DaemonWorkspaceService from AcpSessionBridge | Architectural cleanup: separates session bridge from workspace ops; enables cleaner facade for HTTP API surface. | Open; doudouOUC |
| **[#4746](https://github.com/QwenLM/qwen-code/pull/4746)** | fix(cli): preserve trustedFolders comments on save | Comment-preserving JSON write for `trustedFolders.json`; small but meaningful DX win for manual config editors. | Open; Zoean-z |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Cross-session user memory** | #4747 (global `~/.qwen/memories/`), #4723 (Rules/Instructions parity with Claude/Copilot) | High — direct competitive parity asks |
| **Dynamic Workflows / Multi-agent orchestration** | #4721, #4732 (Ultracode port), #343 (swarm tool) | Active — P1 implementation in progress |
| **Terminal UX refinements** | #4744 (`/copy N`), #4092 (tab completion spacing), #4652 (IME cursor), #4725 (tmux scrolling) | Steady — community polish contributions |
| **Daemon productionization** | #4554, #4748, #4751, #4749 (OTel, cold start, ACP lifecycle) | **Accelerating** — core team focus area |
| **Model provider flexibility** | #3384 (local LLM), #4750 (OpenRouter deprecation), #4729 (runtime prefix bugs) | High — self-hosting segment growth |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Configuration corruption / model ID poisoning** | Recurring | 🔴 High | #4729, #4734 fix in flight; #4750 related |
| **Timeout rigidity for slow/local models** | Repeated | 🔴 High | #4711, #4604 — 5min body timeout hardcoded, no user knob |
| **Auto-generated skills overriding user intent** | Emerging | 🟡 Medium-High | #4714 — trust/autonomy tension |
| **Windows path handling & SMB/network shares** | Persistent | 🟡 Medium | #4720, #4218 — path mangling, MCP gaps |
| **Shell command reliability (signal handling, hangs)** | Spiking | 🟡 Medium | #4743, #4708 — `sleep` interception too aggressive |
| **Daemon mode transcript corruption ("串台")** | Addressed | 🟢 (fixed) | #4687, #4689 — parallel subAgent interleave resolved |
| **Vim mode polish gaps** | Active | 🟡 Medium | #4677 comprehensive fix in review |

---

*Digest compiled from github.com/QwenLM/qwen-code public activity 2026-06-03/04.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-04

> **Note:** The project has been renamed to **CodeWhale** as of v0.8.51+. Legacy `deepseek`/`deepseek-tui` binaries remain as deprecation shims through v0.8.x and will be removed in v0.9.0.

---

## 1. Today's Highlights

The project shipped three rapid-fire releases (v0.8.51–v0.8.53) completing the **CodeWhale rebrand** and closing a cluster of multi-provider auth/configuration bugs. Simultaneously, the maintainer opened **18+ v0.9.0 milestone issues** defining an ambitious roadmap centered on **WhaleFlow** (branch/leaf workflow runtime), **Model Lab** (Hugging Face integration), and **cache-maximalist** agent harnesses—signaling a shift from chat-TUI toward a full agentic IDE.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.8.53** | Final rebrand release; legacy binary deprecation shims stabilized |
| **v0.8.52** | Rebrand with Arcee provider support, cycle removal, compaction improvements |
| **v0.8.51** | Rebrand + "community harvest" of contributed features |

All releases maintain backward-compatible `deepseek`/`deepseek-tui` binaries that emit a warning and forward to `codewhale`/`codewhale-tui`. These shims **will be removed in v0.9.0**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Status |
|---|-------|--------------|--------|
| [#2663](https://github.com/Hmbown/CodeWhale/issues/2663) | Provider switching: settings/config split can mix MiMo model with Arcee base URL | **Critical data integrity bug**—users could silently route requests to wrong endpoints. Fixed same day it was reported. | ✅ Closed |
| [#2667](https://github.com/Hmbown/CodeWhale/issues/2667) | **EPIC: v0.9.0 WhaleFlow branch/leaf workflow mode** | Defines CodeWhale's next identity: deterministic workflow runtime with background pods, bounded agent fan-out, and validated-lesson promotion. Most-upvoted architectural issue. | 🔓 Open |
| [#2731](https://github.com/Hmbown/CodeWhale/issues/2731) | Xiaomi MiMo models should show price | Community contributor **buko** re-submits harvested feature that didn't land in v0.8.52; signals friction in feature-harvesting process. | 🔓 Open |
| [#2664](https://github.com/Hmbown/CodeWhale/issues/2664) | TUI still surfaces legacy `Application Support/deepseek/settings.toml` path | Rebrand incomplete in UI strings; user-facing debt that undermines new brand. PR #2730 in flight. | 🔓 Open |
| [#2720](https://github.com/Hmbown/CodeWhale/issues/2720) | v0.9.0 Milestone execution map: dependency lanes, issue order, acceptance gates | Meta-issue revealing maintainer concern that **agents jump into "exciting epics" before stabilization**—suggests heavy AI-agent contribution workflow. | 🔓 Open |
| [#2705](https://github.com/Hmbown/CodeWhale/issues/2705) | **EPIC: Make Hugging Face a first-class CodeWhale surface** | Strategic pivot—HF as more than OpenAI-compatible URL; includes datasets, Spaces, model cards, eval metadata. | 🔓 Open |
| [#2695](https://github.com/Hmbown/CodeWhale/issues/2695) | Agentic Harness Creator: evolve per-model harnesses from trace evidence | "Cache-maximalism" thesis: auto-generate model-specific system prompts/tool catalogs from observed behavior. Ambitious but risky. | 🔓 Open |
| [#2721](https://github.com/Hmbown/CodeWhale/issues/2721) | v0.9.0 Stabilization gate: Windows, large-repo, subagent, and live-state blockers | Explicit release-blocker lane to prevent feature bloat from shipping old bugs. Professional milestone hygiene. | 🔓 Open |
| [#2681](https://github.com/Hmbown/CodeWhale/issues/2681) | Tool surface diet: define v0.8.53 deprecation policy and active catalog budget | Acknowledges **tool sprawl confusing models**—unusual self-awareness about LLM UX constraints. | 🔓 Open |
| [#2713](https://github.com/Hmbown/CodeWhale/issues/2713) | First-look UX: opinionated CodeWhale home/welcome screen | Competes with Grok Build/Droid; signals product maturity aspirations beyond power-user TUI. | 🔓 Open |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#2730](https://github.com/Hmbown/CodeWhale/pull/2730) | Prefer canonical `codewhale` settings path, legacy fallback | Completes rebrand migration path; reads old `deepseek` paths, copies forward. | 🔓 Open |
| [#2718](https://github.com/Hmbown/CodeWhale/pull/2718) | Persist provider switches to config | Fixes #2663 split-state bug; Arcee→MiMo transitions now survive restart. | ✅ Closed |
| [#2717](https://github.com/Hmbown/CodeWhale/pull/2717) | Make provider key replacement discoverable | Adds `r` shortcut in provider picker; addresses #2662 UX gap. | ✅ Closed |
| [#2715](https://github.com/Hmbown/CodeWhale/pull/2715) | Clear MiMo auth state after `/logout` | Fixes #2661 credential desync between UI and `auth get`. | ✅ Closed |
| [#2714](https://github.com/Hmbown/CodeWhale/pull/2714) | Clarify `/logout` credential scope | Fixes #2660 ambiguity; points users to `auth clear --provider <id>` for scoped operations. | ✅ Closed |
| [#2708](https://github.com/Hmbown/CodeWhale/pull/2708) | Fix Windows sub-agent completion halving TUI render width | Root cause: double `EnterAlternateScreen` on Windows. Niche but severe for Windows users. | 🔓 Open |
| [#2684](https://github.com/Hmbown/CodeWhale/pull/2684) | Subagent: clearer role vocab, lifecycle signals, eval ergonomics | WhaleFlow precursor work; `normalize_role_alias` unifies reviewer/executor/observer vocabulary. | ✅ Closed |
| [#2688](https://github.com/Hmbown/CodeWhale/pull/2688) | Deprecate `WHALE.md`; add `.codewhale/constitution.json` authority layer | Splits repo guidance: `AGENTS.md` (cross-agent protocol) vs. project-specific constitution. | ✅ Closed |
| [#2482](https://github.com/Hmbown/CodeWhale/pull/2482) | **Add WhaleFlow — declarative multi-agent workflow orchestration** | Major v0.9.0 feature: JSON-config-driven sub-agent swarms with topological scheduler. | 🔓 Open |
| [#2627](https://github.com/Hmbown/CodeWhale/pull/2627) | Support Xiaomi MiMo Token Plan mode | Adds `token-plan` cluster aliases with dedicated env key aliases (`XIAOMI_MIMO_TOKEN_PLAN_API_KEY`). | 🔓 Open |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Workflow orchestration** | #2667, #2482, #2726, #2486 | CodeWhale evolving from chat interface to **agent runtime**; "WhaleFlow" is the new core primitive |
| **Hugging Face native integration** | #2705, #2707, #2712, #2711, #2727 | Open-weight models as first-class citizens; HF as provider + discovery + evaluation platform |
| **Per-model harnesses / "cache maximalism"** | #2695, #2728, #2711 | Rejection of one-size-fits-all system prompts; auto-tuning per model family |
| **Tool surface reduction** | #2681, #2682, #2683, #2686 | Recognition that **too many tools degrades LLM performance**; active deprecation policy |
| **Remote / always-on deployment** | #2724 | AWS Lightsail + Telegram bridge; phone-controlled VM sessions |
| **First-look / onboarding polish** | #2713, #2723 | Competing with polished commercial IDEs; brand-conscious UX |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestation |
|------------|-----------|---------------|
| **Multi-provider credential confusion** | 🔥🔥🔥🔥🔥 | 5 closed issues in 24h (#2660–#2664): `/logout` scope, key replacement discoverability, UI vs. CLI state desync, settings/config split. Suggests auth system was designed for single-provider and patched incrementally. |
| **Rebrand migration debt** | 🔥🔥🔥🔥 | Settings paths, binary names, docs still reference `deepseek`. PR #2730 addresses but issue #2664 shows it's user-visible. |
| **Windows stability** | 🔥🔥🔥 | #2708 (render width), #2721 (stabilization gate). Cross-platform TUI remains fragile. |
| **Feature harvest friction** | 🔥🔥🔥 | #2731—contributor **buko** re-files price-display for MiMo after believing it was "harvested" in prior release. Process gap between community PRs and release inclusion. |
| **Agent-driven development chaos** | 🔥🔥🔥 | #2720 explicitly calls out agents "jumping into exciting epics before closing stabilization." Meta-problem: too many parallel v0.9.0 workstreams, AI agents need guardrails. |
| **Large-file editing safety** | 🔥🔥 | #2719, #2725—files >5,000 lines (config.rs, ui.rs, main.rs) cause "slop risk" for agents. Refactoring blocked behind v0.9.0 planning. |

---

*Digest compiled from github.com/Hmbown/DeepSeek-TUI (now CodeWhale) activity 2026-06-03 to 2026-06-04.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*