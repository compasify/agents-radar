# AI CLI Tools Community Digest 2026-06-24

> Generated: 2026-06-24 00:23 UTC | Tools covered: 9

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
**Analysis Date: 2026-06-24**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a **security-first maturation phase**, with all major projects simultaneously shipping credential isolation, SSRF protection, and sandbox governance features. Enterprise adoption requirements—audit trails, model restrictions, policy enforcement—are driving architectural changes across the board. Concurrently, **MCP (Model Context Protocol) ecosystem integration** has become a universal priority, though reliability remains uneven across tools. Community frustration is concentrated in cross-platform consistency (especially Windows ARM64 and Wayland Linux), documentation maturity lagging behind feature velocity, and agent autonomy control (tools either too passive or dangerously over-autonomous). The rapid iteration pace—often multiple releases per day—creates both innovation and instability, particularly around provider compatibility.

---

## 2. Activity Comparison

| Tool | Open Issues (Notable) | PRs (Last 24h) | Active Releases | Community Engagement Level |
|---|---|---|---|---|
| **Claude Code** | 30 tracked, 4 high-engagement | 2 (1 new) | v2.1.187 | ★★★★☆ (25+ comments on top issues) |
| **OpenAI Codex** | 10 highlighted, 257👍 top issue | 10 merged | 7 alpha releases (v0.143.0-alpha.2–.9) | ★★★★★ (highest upvote counts) |
| **Gemini CLI** | 10 active, 3 P1 bugs | 10 (4 merged) | None | ★★★☆☆ (moderate, focused discussion) |
| **GitHub Copilot CLI** | 10 triage-tagged, 👍9 top issue | 1 (minor) | v1.0.64 | ★★★☆☆ (active triage push) |
| **Kimi Code CLI** | 1 updated | 0 | None | ★☆☆☆☆ (minimal activity) |
| **OpenCode** | 10 active, 82👍 top issue | 10 (4 closed) | None | ★★★★☆ (intense, pricing-driven) |
| **Pi (pi-mono)** | 10 active, 30 comments top issue | 10 (5 closed) | v0.80.2 | ★★★★☆ (high velocity, reactive) |
| **Qwen Code** | 10 active | 10 (1 closed) | v0.19.0, v0.19.1 | ★★★☆☆ (steady, contributor-driven) |
| **DeepSeek TUI** | 10 active, 29 comments top issue | 10 (8 merged) | None | ★★★★☆ (architectural refactor) |

**Key observations:**
- **OpenAI Codex** dominates raw engagement (257👍 on rate-limit issue) and PR velocity (10 merged)
- **Pi** and **DeepSeek TUI** lead in architectural refactoring velocity
- **Kimi Code** is notably quiet—potentially stalled or low community adoption
- **Claude Code** and **OpenCode** have balanced engagement across security, bugs, and features

---

## 3. Shared Feature Directions

### 3.1 Security & Governance (7/9 tools)
| Requirement | Tools | Specifics |
|---|---|---|
| **Credential/sandbox isolation** | Claude Code, OpenAI Codex, Gemini CLI | Sandbox credential brokers, `sandbox.credentials` settings, SSRF guards |
| **Audit trails & policy enforcement** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Org model restrictions, security event persistence, workspace permissions APIs |
| **Destructive command guards** | Gemini CLI, Qwen Code, DeepSeek TUI | Requests for deterministic blocks on `git reset --hard`, `git clean -fd`, `--force` flags |

### 3.2 MCP Reliability & Expansion (6/9 tools)
| Requirement | Tools | Specifics |
|---|---|---|
| **MCP resource tooling** | OpenCode, Qwen Code, Pi | Resource read/discovery tools, template listing |
| **MCP server lifecycle** | DeepSeek TUI, OpenAI Codex | Duplicate process fixes, startup latency tracing |
| **MCP configuration gaps** | Claude Code, GitHub Copilot CLI | Tilde expansion in args, policy blocking without notice |

### 3.3 Agent Autonomy Control (7/9 tools)
| Requirement | Tools | Specifics |
|---|---|---|
| **Sub-agent reliability** | Claude Code, Gemini CLI, DeepSeek TUI | Cowork MCP failures, false success reporting, turn stalls |
| **Yolo/auto-mode hardening** | Kimi Code, DeepSeek TUI, Qwen Code | Unwanted prompts in auto-approve mode, over-autonomous loops |
| **Skill/sub-agent usage improvement** | Gemini CLI, OpenAI Codex | Skills ignored unless explicitly instructed, subagent model overrides dropped |

### 3.4 Multi-Agent Orchestration (4/9 tools)
| Requirement | Tools | Specifics |
|---|---|---|
| **Concurrent sessions** | Pi, DeepSeek TUI | Background processing while interacting in another session |
| **Agent teams/swarm** | OpenCode, Pi | `/swarm-team`, conductor patterns, hierarchical plans |
| **Async event-driven agents** | Claude Code | Pub/sub agent communication RFC |

### 3.5 Documentation Maturity (5/9 tools)
| Requirement | Tools | Specifics |
|---|---|---|
| **Hook/plugin docs gaps** | Claude Code, GitHub Copilot CLI | Missing tool names, matcher schemas, lifecycle hooks |
| **Provider/model configuration docs** | Pi, Qwen Code, DeepSeek TUI | Provider setup, model routing, env precedence |

### 3.6 Cross-Platform Reliability (5/9 tools)
| Requirement | Tools | Specifics |
|---|---|---|
| **Windows ARM64** | Claude Code, OpenAI Codex | Cowork failure, stale git processes, blank editor panels |
| **Linux Wayland** | Gemini CLI | Browser agent crashes |
| **iPadOS** | Claude Code | SwiftUI stack overflow crash |
| **Terminal rendering** | GitHub Copilot CLI, Qwen Code, Pi | Scroll bar alignment, cursor visibility, streaming scroll-jacking |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **Primary Model** | Anthropic Claude | OpenAI GPT-5.5 | Google Gemini 3 | Multi-model (Claude, GPT, Gemini) | DeepSeek V4 | Multi-provider (BYOK) | Qwen | DeepSeek + multi-provider |
| **Target User** | Enterprise developers | General developers | Google ecosystem | GitHub ecosystem | Cost-conscious developers | Plugin developers | Qwen ecosystem | Chinese market + power users |
| **Key Differentiator** | Org governance, sandbox security | Rate-limit transparency, Rust alpha | Native bash training, SSRF focus | VS Code integration, pay-as-you-go | DeepSeek pricing, skill tracking | Plugin/extension architecture | Daemon-based architecture | Fleet/orchestration, provider routing |
| **Maturity** | Mature, enterprise-grade | High velocity, experimental alpha | Production with P1 bugs | Stable, incremental | Growing rapidly | High architectural ambition | Steady growth | Architectural refactor in progress |
| **Community Style** | Structured, security-focused | Loud, cost-sensitive | Technical, Google-aligned | GitHub-centric, pragmatic | Price-sensitive, feature-demanding | Plugin ecosystem, reactive | Contributor-driven, automated | Multi-provider, Chinese-friendly |

### Key Differentiators:
- **Claude Code** leads in **enterprise governance**—org model restrictions, sandbox credentials, audit hooks
- **OpenAI Codex** is the **velocity leader**—7 alpha releases/day, highest community engagement, rapid PR merging
- **Gemini CLI** has unique **SSRF protection depth**—DNS resolution before guard, OAuth metadata validation
- **Pi** has the most **flexible provider architecture**—BYOK, plugin system, swarm mode
- **DeepSeek TUI** is pioneering **Fleet/sub-agent orchestration** with profiled workers and role-based delegation
- **Kimi Code** shows **minimal activity**—potential risk of abandonment or very small user base

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
| Tool | Signal | Risk |
|---|---|---|
| **OpenAI Codex** | 10 PRs merged in 24h, 7 alpha releases, 257👍 issue | Alpha instability, rate-limit volatility |
| **Pi (pi-mono)** | 5 PRs closed, rapid v0.80.x releases | Every minor release breaks providers (3 consecutive versions) |
| **DeepSeek TUI** | 8 PRs merged, architectural refactor | P1 bugs (turn stalled, #2487) unresolved for months |

### Stable / Mature
| Tool | Signal | Risk |
|---|---|---|
| **Claude Code** | Security-first release, enterprise governance | Documentation lags feature velocity (15+ DOCS issues) |
| **GitHub Copilot CLI** | v1.0.64, Windows regression fixed | Low PR velocity, session state bloat |
| **Qwen Code** | v0.19.0, steady contributor input | Input validation gaps across 15+ issues |

### Emerging / Niche
| Tool | Signal | Risk |
|---|---|---|
| **OpenCode** | Pricing-driven growth (82👍 on DeepSeek V4 issue) | Destructive action incident (#32080) erodes trust |
| **Kimi Code** | 1 issue updated in 24h | Potential stagnation; only "yolo mode" bug tracked |
| **Gemini CLI** | SSRF focus, OAuth fix | 3 concurrent P1 bugs eroding agent trust |

### Community Health Signals:
- **Highest user frustration**: OpenAI Codex (rate-limit costs), Pi (provider breakage), DeepSeek TUI (turn stalls)
- **Strongest contributor ecosystem**: OpenCode (10 PRs, multiple authors), Qwen Code (tt-a1i contributor series)
- **Documentation debt leaders**: Claude Code (15+ issues from single reporter), Pi (no deprecation warnings for API changes)
- **Security maturity leaders**: Claude Code (sandbox credentials, org restrictions), Gemini CLI (SSRF triple-layer protection)

---

## 6. Trend Signals for Developers

### 6.1 Enterprise Security is Non-Negotiable
Every major tool is investing in credential isolation, SSRF protection, and policy enforcement. **Developers deploying AI CLI tools in CI/CD or multi-tenant environments should prioritize tools with:** sandbox credential brokers (Claude Code, OpenAI Codex), DNS-resolution SSRF guards (Gemini CLI), and org-configured model restrictions (Claude Code).

### 6.2 MCP Ecosystem is the Standard—But Unreliable
MCP is adopted universally, but every tool has open issues about: server lifecycle management, tool persistence across sessions, and configuration ambiguity. **Expect MCP reliability to be the #1 integration pain point for the next 3-6 months.** Teams building on MCP should budget for debugging infrastructure.

### 6.3 Agent Autonomy vs. Control is Unsolved
No tool has cracked the "correct" level of agent autonomy. Gemini CLI's subagents trigger without permission; DeepSeek TUI's agents over-engineer loops; Kimi Code's yolo mode still prompts. **The industry is converging on middleware/hook architectures** (Claude Code's BeforeModel/AfterModel RFC) as the solution—expect this to become table stakes by Q4 2026.

### 6.4 Multi-Model Routing is the New Battleground
DeepSeek TUI's Fleet architecture, Pi's provider-agnostic design, and OpenAI Codex's multi-model support all point to **commoditization of the model layer**. The competitive advantage is shifting from "which model you support" to "how well you route, manage costs, and enforce policies across models."

### 6.5 Documentation Debt is Systemic
Across all tools, documentation maturity lags feature velocity by 3-6 months. **For developer tooling adopters: factor 10-20% time for reverse-engineering behavior** through issue threads and PRs. Tools with strong community documentation (GitHub Copilot CLI's VS Code integration) are the exception, not the norm.

### 6.6 Cross-Platform Parity Remains Elusive
Windows ARM64, Linux Wayland, and iPadOS are consistently second-class citizens. **If your team is heterogeneous or uses non-macOS platforms, budget for platform-specific bugs** and consider binding to tools that invest in cross-platform testing (GitHub Copilot CLI's triage push, Claude Code's iOS crash attention).

### 6.7 Pricing Transparency is a Growing Demand
OpenAI Codex's rate-limit cost anomaly (#28879, 257👍) signals that **users are hypersensitive to token accounting shifts**. DeepSeek's 75% price cut drove OpenCode's highest-engagement issue. Developers should demand transparent billing instrumentation and consider tools that offer cost tracking hooks (Claude Code's proposed audit logging) or fixed-price plans (GitHub Copilot CLI's pay-as-you-go).

### 6.8 Windows Developer Experience Gap
Claude Code (ARM64 cowork), OpenAI Codex (stale processes, blank editor), GitHub Copilot CLI (scroll bar, mouse wheel), and DeepSeek TUI (crossterm freeze) all have Windows-specific bugs. **Windows-first teams should set explicit expectations with vendors** and prioritize tools with demonstrated Windows investment (GitHub Copilot CLI's v1.0.64 Windows fixes, though fragile).

---

**Bottom Line for Decision-Makers:**  
- **Enterprise security**: Claude Code (sandbox credentials + org governance)  
- **Velocity + cost sensitivity**: OpenAI Codex (but budget for alpha instability and rate-limit surprises)  
- **Multi-model flexibility**: Pi (BYOK, plugin architecture) or DeepSeek TUI (Fleet routing)  
- **GitHub ecosystem integration**: GitHub Copilot CLI (VS Code synergy, but Windows UX concerns)  
- **Chinese market + cost optimization**: DeepSeek TUI (multi-provider, GLM-5.2 incoming)  
- **Risk of abandonment**: Monitor Kimi Code closely—low activity suggests potential sunsetting

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the anthropics/skills repository, based on the most active pull requests and issues.

---

## anthropics/skills Community Highlights Report
**Analysis Period:** Data as of 2026-06-24 | **Focus:** Most-Watched Pull Requests & Community Issues

### 1. Top Skills Ranking (Most-Discussed Pull Requests)

The following table ranks Skills submissions by the highest community engagement (comments, attention, and cross-referencing across Issues).

| Rank | Skill / PR Title | Functionality | Discussion Highlights | Status |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Skill-Creator Fix (run_eval.py)**<br>[PR #1298](https://github.com/anthropics/skills/pull/1298) | Fixes a critical bug where `run_eval.py` reports 0% recall for all skill descriptions, breaking the optimization loop. Fixes Windows stream reading, trigger detection, and parallel workers. | The **most active PR** in the repository. Links directly to Issue #556 (12 comments, 7👍), a blocker for Windows users and skill optimizer development. Deep discussion on cross-platform subprocess handling. | **Open** |
| **2** | **Document Typography Skill**<br>[PR #514](https://github.com/anthropics/skills/pull/514) | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. | High user interest as a "quality-of-life" fix for all generated documents. Discussion focused on edge cases for multi-column layouts and PDF output. | **Open** |
| **3** | **ODT Skill (OpenDocument)**<br>[PR #486](https://github.com/anthropics/skills/pull/486) | Creates, fills, reads, and converts ODT/ODS files. Triggers on mentions of 'ODT', 'ODS', 'OpenDocument', or 'LibreOffice'. | Addresses a gap for open-source document format support. Community discussed integration with existing `pdf` and `docx` skills and template handling. | **Open** |
| **4** | **SAP-RPT-1-OSS Predictor**<br>[PR #181](https://github.com/anthropics/skills/pull/181) | Uses SAP's open-source tabular foundation model for predictive analytics on SAP business data. | A niche but high-engagement skill for enterprise users. Discussion centered on API key management and model versioning. | **Open** |
| **5** | **Testing-Patterns Skill**<br>[PR #723](https://github.com/anthropics/skills/pull/723) | Full-stack testing guidance: unit testing (AAA pattern), React components (Testing Library), integration, and E2E tests. | Community requested stronger examples for mocking strategies and testing async data flows. | **Open** |
| **6** | **AppDeploy Skill**<br>[PR #360](https://github.com/anthropics/skills/pull/360) | Deploys and manages full-stack web apps via AppDeploy.ai directly from Claude. | Discussion on lifecycle management (status checks, versioning, rollback). Users noted the skill's high utility for prototyping and demos. | **Open** |
| **7** | **Shodh-Memory Skill**<br>[PR #154](https://github.com/anthropics/skills/pull/154) | Persistent memory system for AI agents, maintaining context across conversations using proactive context retrieval. | Engaged discussion on memory overlap with "compact-memory" proposals and token budget optimization for long-running agents. | **Open** |

### 2. Community Demand Trends (From Issues)

The following are the most-anticipated new Skill directions distilled from Issue activity:

- **Org-Wide Skill Sharing & Libraries** ([Issue #228](https://github.com/anthropics/skills/issues/228), 14 comments, 7👍): The highest-voted feature request. Users want a shared Skill library or direct sharing links within Claude.ai to avoid manual `.skill` file distribution via Slack/Teams.
- **Windows Compatibility & Cross-Platform Stability** ([Issue #556](https://github.com/anthropics/skills/issues/556), [Issue #1061](https://github.com/anthropics/skills/issues/1061)): The most persistent pain point. The `skill-creator` tools (`run_eval.py`, `run_loop.py`) are broken on Windows due to subprocess, encoding, and pipe handling. This blocks a significant portion of the user base.
- **Meta-Skills & Agent Governance** ([Issue #412](https://github.com/anthropics/skills/issues/412)): The community is actively proposing skills for safety patterns—policy enforcement, threat detection, and audit trails for AI agent systems.
- **Security & Trust Boundaries** ([Issue #492](https://github.com/anthropics/skills/issues/492), 9 comments): A trust concern where community skills under the `anthropic/` namespace impersonate official skills, prompting calls for namespace validation or a verified badge system.
- **MCP/API Exposure** ([Issue #16](https://github.com/anthropics/skills/issues/16)): Users want Skills to be exposable as MCPs (Model Context Protocol) to standardize programmatic access to Skill functionality (e.g., `generateAlgorithmArt({ prompt })`).

### 3. High-Potential Pending Skills (Active PRs Nearing Merge)

These PRs have active discussion and multiple fix assertions, indicating they may land in the repository soon:

- **Skill-Creator Fix: Windows Subprocess + Encoding**<br>
  [PR #1050](https://github.com/anthropics/skills/pull/1050) — Fixes `[WinError 2]` (PATHEXT) and cp1252 encoding bugs. **1-line changes**; high chance of merge as a companion to PR #1298.

- **Skill-Creator Fix: UTF-8 Multi-byte Panic**<br>
  [PR #362](https://github.com/anthropics/skills/pull/362) — Replaces character-based length checks with byte-length validation to prevent Rust panics. Likely to merge alongside other `skill-creator` fixes.

- **YAML Unquoted Special Character Detection**<br>
  [PR #361](https://github.com/anthropics/skills/pull/361) — Adds pre-parse validation in `quick_validate.py` for unquoted `description` fields. Directly addresses a silent parsing failure pattern reported by multiple users.

- **Skill Packaging (skill-quality-analyzer & skill-security-analyzer)**<br>
  [PR #83](https://github.com/anthropics/skills/pull/83) — Meta-skills for quality and security analysis. Has been open since 2025-11-06 but recently gained traction as the `skill-creator` debugging tools mature.

### 4. Skills Ecosystem Insight

**The community's most concentrated demand is for stabilizing the skill-creator toolchain on all platforms (specifically Windows), enabling org-wide sharing of skills, and defining governance/security boundaries for community-contributed skills.**

---

# Claude Code Community Digest
**2026-06-24**

---

## Today's Highlights

A security-first release lands with **v2.1.187**, introducing sandbox credential isolation and organization-level model restrictions that give enterprises tighter control over their AI tooling. Meanwhile, the community continues to surface **cowork-mode instability on ARM64 Windows** (25 comments) and a **critical iOS crash on iPadOS** (25 comments), while a long-running MCP issue (#27492) remains open after four months with strong community engagement. Notably, user **coygeek** has filed an extensive series of documentation gaps across hooks, MCP, CLI, and interactive mode—signaling that the project's documentation maturity lags behind its feature velocity.

---

## Releases

### v2.1.187 — Sandbox Security & Org Governance
[View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.187)

- **`sandbox.credentials` setting**: Blocks sandboxed commands from reading credential files and secret environment variables — a major security hardening step for multi-tenant or CI environments.
- **Org-configured model restrictions**: The model picker, `--model`, `/model`, and `ANTHROPIC_MODEL` now respect organization policy. Restricted models are surfaced with a "restricted by your organization's settings" notice, preventing inadvertent use of unauthorized model variants.

---

## Hot Issues *(10 of 30 tracked)*

1. **[#50674](https://github.com/anthropics/claude-code/issues/50674) — Cowork fails on ARM64 Snapdragon X** 🆕
   - **Tags:** bug, duplicate, platform:windows, area:cowork
   - **25 comments | 0 👍**
   - **Why it matters:** A blocker for the new Snapdragon X Windows laptops; despite passing readiness checks, cowork mode silently fails. Duplicate status suggests the team is consolidating reports.

2. **[#27492](https://github.com/anthropics/claude-code/issues/27492) — Cowork MCP Issue persists** 🏷
   - **Tags:** bug
   - **25 comments | 22 👍**
   - **Why it matters:** Open since February, this is the highest-voted active bug. Users are frustrated that MCP tool integration within cowork mode remains unreliable. Community feels this should be a priority.

3. **[#70144](https://github.com/anthropics/claude-code/issues/70144) — iPadOS crash with SwiftUI stack overflow** 🆕
   - **Tags:** bug, platform:ios
   - **25 comments | 19 👍**
   - **Why it matters:** A total crash on opening any session in the Code tab on iPadOS 1.260618.0. Stack overflow in SwiftUI suggests a rendering regression that blocks tablet users entirely.

4. **[#10223](https://github.com/anthropics/claude-code/issues/10223) — Inconsistent network behavior in cloud environment**
   - **Tags:** bug, has repro, platform:macos, area:tui, area:security
   - **11 comments | 2 👍**
   - **Why it matters:** Open since October 2025, this longstanding issue about unclear networking UX in the default cloud environment remains unresolved, affecting new users' onboarding.

5. **[#69336](https://github.com/anthropics/claude-code/issues/69336) — Connection closed mid-response on Linux** 🆕
   - **Tags:** bug, platform:linux, area:api, area:agent-sdk
   - **6 comments | 4 👍**
   - **Why it matters:** Immediate disconnection errors when opening a new context window suggest a transport-layer bug specific to Linux deployments.

6. **[#21531](https://github.com/anthropics/claude-code/issues/21531) — BeforeModel / AfterModel hooks for LLM interception**
   - **Tags:** enhancement, area:cost, area:core, area:security
   - **8 comments | 3 👍**
   - **Why it matters:** A frequently requested middleware pattern. Would enable audit logging, cost tracking, prompt injection detection, and response filtering—critical for enterprise adoption.

7. **[#55981](https://github.com/anthropics/claude-code/issues/55981) — Async/event-driven agent communication (RFC)**
   - **Tags:** enhancement, area:hooks, area:agents
   - **4 comments | 0 👍**
   - **Why it matters:** Proposes making async pub/sub communication a first-class capability for agents. This would unlock event-driven workflows (e.g., "watch a file, then act") that today require polling or hacks.

8. **[#37580](https://github.com/anthropics/claude-code/issues/37580) — MCP `~` tilde not expanded in args**
   - **Tags:** bug, has repro, platform:macos, area:mcp
   - **6 comments | 0 👍**
   - **Why it matters:** A subtle but frustrating UX issue: `~` works in paths but not in `args` for MCP servers, causing ENOENT failures for users following standard shell conventions.

9. **[#69939](https://github.com/anthropics/claude-code/issues/69939) — Opening chat appends duplicate JSONL records (CLOSED)** ✅
   - **Tags:** bug
   - **3 comments | 0 👍**
   - **Why it matters:** Already closed, but the behavior—reordering recent chats via unnecessary file writes—was a notable annoyance for session-heavy users. Fix appears to be shipping.

10. **[#26702](https://github.com/anthropics/claude-code/issues/26702) — Hooks reference lists incomplete tool names**
    - **Tags:** DOCS
    - **6 comments | 0 👍**
    - **Why it matters:** Developer-facing docs for hooks are missing matchable tool names and input schemas, making it impossible to build correct hook matchers without reverse-engineering.

---

## Key PR Progress *(2 tracked in last 24h)*

1. **[#20448](https://github.com/anthropics/claude-code/pull/20448) — `web4-governance` plugin for AI governance** 📜
   - **Status:** OPEN (since January 2026)
   - **What it does:** Adds a plugin implementing T3 trust tensors, entity witnessing, and R6 audit trails for AI agent governance. Targets verifiable accountability in multi-agent environments.
   - **Why it matters:** Long-lived PR (5 months) that signals architectural interest in trust-layer infrastructure. Not merged, but the concept aligns with enterprise governance trends.

2. **[#70173](https://github.com/anthropics/claude-code/pull/70173) — Fix `/clean_gone` branch detection** 🛠️
   - **Status:** OPEN (since yesterday)
   - **What it does:** Fixes `git branch -v` → `git branch -vv` to correctly detect `[gone]` branches, which was silently broken. Also handles spaces in branch names and edge cases.
   - **Why it matters:** A concrete bug fix for a popular command. `/clean_gone` has been effectively a no-op—this restores its utility.

---

## Feature Request Trends

### 1. Middleware / Hook Architecture (High Priority)
Multiple issues (#21531, #55981) request an expanded hooks system for LLM request/response interception and event-driven agent communication. The community wants to **inspect, log, filter, and transform** model interactions without modifying core tooling. This is the #1 architectural gap for enterprise adoption.

### 2. Documentation Completeness (Systemic Gap)
User **coygeek** has filed over a dozen documentation issues (#26702, #30935–#30944, #31675, #34281, #38560–#38572, #39112, #47628) covering hooks, MCP, CLI, interactive mode, permissions, and remote control. The pattern is clear: **features ship faster than their documentation**, leaving developers to guess at behavior.

### 3. Security & Credential Management
The new `sandbox.credentials` feature (v2.1.187) and ongoing demand for model restriction (#50674 context) indicate a growing focus on **sandboxing, credential isolation, and policy enforcement** driven by organizational deployment requirements.

### 4. Cross-Platform Reliability
ARM64 Windows cowork failures (#50674), Linux connection drops (#69336), and iPadOS crashes (#70144) show that **platform-specific bugs remain the leading source of user friction**, outpacing feature requests in community engagement.

---

## Developer Pain Points

| Pain Point | Evidence | Frequency |
|---|---|---|
| **MCP server reliability** | Cowork MCP issues (#27492, #50674), tilde expansion (#37580), binary output docs (#30942) | Very High |
| **Documentation gaps** | 15+ separate DOCS issues from a single reporter—hooks, MCP, CLI, permissions | Very High |
| **Cloud/network behavior** | Unclear UX (#10223), connection drops (#69336), non-streaming fallback undocumented (#38569) | High |
| **Session & state management** | Duplicate JSONL records (#69939), transcript search undocumented (#38560) | Medium |
| **Permission & security UX** | Bash auto-approval allowlist undocumented (#31675), permission-picker behavior undocumented (#30944) | Medium |

---

*Digest generated from `anthropics/claude-code` repository data as of 2026-06-24 23:59 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-24

## Today's Highlights
A major rate-limit cost anomaly (#28879) has drawn 257 upvotes and 130 comments, with Plus users reporting 10–20× token cost increases since June 16. The team shipped seven Rust alpha releases today (v0.143.0-alpha.2 through .9) and merged critical fixes for SQLite log bloat that could write 640 TB/year. Infrastructure work is underway for Ultra reasoning effort, multi-agent mode consolidation, and a credential broker for sandbox security.

## Releases
Seven **rust-v0.143.0-alpha** releases published in the last 24 hours (alpha.2 through alpha.9). Release notes are minimal; these appear to be iterative CI/nightly builds rather than feature announcements.

## Hot Issues (10 selected)

**#28879** — [[bug, rate-limits, app]](https://github.com/openai/codex/issues/28879) Rate-limit cost per token jumped 10–20× since June 16, draining 5-hour budgets in 2–3 prompts. **257 👍, 130 comments.** Highest-engagement open issue; impacts all Plus users on gpt-5.5. Users report no model or plan changes, only backend token accounting shifts.

**#28224** — [[bug, CLI, performance]](https://github.com/openai/codex/issues/28224) SQLite feedback logs could write ~640 TB/year, rapidly consuming SSD endurance. **328 👍, 71 comments.** Author closed the issue today after three merged PRs reduced log volume by 85%. A cautionary tale on aggressive telemetry defaults.

**#16767** — [[bug, sandbox, app, performance]](https://github.com/openai/codex/issues/16767) Codex Desktop triggers sustained syspolicyd/trustd CPU spikes on macOS. **26 👍, 18 comments.** Persists for months; impacts M-series Mac users running Codex sandbox features.

**#29197** — [[bug, windows-os, tool-calls, app, connectivity]](https://github.com/openai/codex/issues/29197) Codex WebSearch receives Cloudflare managed challenge (403) on search endpoint. **12 comments.** Windows-only; breaks web search functionality for users behind certain networks.

**#25667** — [[bug, app]](https://github.com/openai/codex/issues/25667) macOS app leaves ~965MB `code_sign_clone` directories per launch after quit. **17 👍, 9 comments.** Persistent storage leak accumulating on developer machines.

**#21863** — [[bug, windows-os, extension]](https://github.com/openai/codex/issues/21863) VS Code extension central editor panel opens blank on Windows due to fsPath URI routing. **11 comments.** Breaks VS Code integration on Windows; impacts enterprise users with custom workspace setups.

**#23496** — [[bug, CLI, skills, subagent]](https://github.com/openai/codex/issues/23496) Skill instructions to use subagents are ignored unless repeated in the prompt. **3 👍, 7 comments.** Subtle behavioral bug undermines skill composability and multi-agent workflows.

**#29546** — [[bug, exec, CLI, app, connectivity]](https://github.com/openai/codex/issues/29546) gpt-5.5 returns "404 Model not found" while gpt-5.4 works. **4 comments.** Fresh issue; suggests rollout or routing problems for the newer model tier.

**#29729** — [[bug, windows-os, app, performance]](https://github.com/openai/codex/issues/29729) Windows Codex app may leave stale git.exe process/token objects, RAM >30 GB on 32 GB machines. **4 comments.** Closed today; severe memory leak during Git-heavy sessions.

**#15508** — [[bug, mcp, app, plugins]](https://github.com/openai/codex/issues/15508) MCP tools disappear in existing sessions after reload or time, but work in new sessions. **3 👍, 6 comments.** Long-standing MCP reliability issue; undermines confidence in plugin persistence.

## Key PR Progress (10 selected)

**#29750** — [chore: assign `amsg_` IDs to agent messages](https://github.com/openai/codex/pull/29750) — Fixes missing stable item IDs for `ResponseItem::AgentMessage`, making agent messages fully addressable in conversation history. Critical for session resume and toolcall referencing.

**#29710** — [Derive multi-agent mode from Ultra effort](https://github.com/openai/codex/pull/29710) — Eliminates competing sources-of-truth by deriving multi-agent mode from turn-level Ultra effort selection. Simplifies thread lifecycle across start, fork, resume, and subagent spawn.

**#29709** — [Add gated Ultra reasoning effort](https://github.com/openai/codex/pull/29709) — Introduces Ultra as a product-level maximum reasoning selection, gated behind both model catalog and `multi_agent_mode` feature flags. No new backend tokens required.

**#28034** — [experimental local credential broker](https://github.com/openai/codex/pull/28034) — Moves injectable credentials behind a managed network proxy so child processes cannot exfiltrate real values. Code-reviewed; foundation for sandbox credential security.

**#29752** — [integrate experimental credential broker](https://github.com/openai/codex/pull/29752) — Integration layer for the proxy-owned broker (#28034), preserving brokered values across shell snapshots while removing proxy-scoped dummies outside containment.

**#29690** — [Add marketplace source admission requirements](https://github.com/openai/codex/pull/29690) — Enterprise-keyed TOML policy to restrict which marketplace sources Codex may clone. Composable across requirements layers without array merge ambiguity.

**#29745** — [add `wait_for_environment` for starting environments](https://github.com/openai/codex/pull/29745) — Enables models to wait for asynchronous environment startup within the same turn, using the same executor the environment will run on. Required for `DeferredExecutor` architecture.

**#29521** — [reset context for token budget compaction](https://github.com/openai/codex/pull/29521) — Closed-merged today. Token-budget compaction now starts a fresh context window (like `new_context` tool) instead of summarizing old history. Keeps budget-sensitive workflows predictable.

**#28630** — [trace MCP startup latency](https://github.com/openai/codex/pull/28630) — Adds trace-level instrumentation around per-server MCP setup, client construction, initialization, and tool listing. Attaches `server_name` for attribution of slow MCP servers.

**#22866** — [persist sandbox security events](https://github.com/openai/codex/pull/22866) — Long-running open PR normalizing sandbox violations into a useful agent audit trail, exportable through OTel with stable low-cardinality dimensions (backend, resource, reason).

## Feature Request Trends

1. **HTTPS-only transport** (#27381): Force HTTPS without WebSocket fallback for corporate proxies and VPN-restricted environments. 4 👍, recurring request from enterprise users.

2. **Private/hidden projects in sidebar** (#21528): Support for hiding project/thread names during screen sharing. Low upvotes but consistent ask from professional users.

3. **TUI transcript navigation shortcuts** (#21732): Keyboard shortcuts (`Alt+Up`/`Alt+Down`) to jump between user prompts in CLI TUI. 4 👍, signals desire for power-user CLI ergonomics.

4. **Visual project vs thread distinction** (#29161): Better sidebar differentiation between projects/folders and individual threads in the Desktop app. Low engagement but UX-focused.

## Developer Pain Points

- **Rate-limit cost volatility (#28879):** The dominant concern this week. Users report unpredictable token accounting that destroys budget predictability. No official acknowledgment yet.
- **SQLite log bloat (#28224):** Fixed but highlighted how silent telemetry defaults can threaten hardware (SSD endurance). A wake-up call for aggressive default logging.
- **MCP tool reliability (#15508):** Tools disappearing mid-session erodes trust in plugin infrastructure. Long-standing issue still open.
- **Cross-platform inconsistencies:** Persistent gaps between Windows and macOS—stale git processes (#29729), Windows blank editor panels (#21863), Cloudflare challenges (#29197). Each is individually moderate but together paint a pattern of Windows as a second-class target.
- **Model availability gaps (#29546):** gpt-5.5 returning 404 while older models work suggests rollout or entitlement inconsistencies causing hard-to-diagnose failures.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-24

## Today's Highlights

No new releases landed in the past 24 hours, but the community remains highly engaged around agent reliability and security hardening. Three high-priority bugs continue to generate discussion: subagent success reporting failures, generalist agent hangs, and shell command stalling. On the PR front, a critical OAuth fix for Node.js ≥24.17.0 and two SSRF protection PRs for MCP and web-fetch signal a strong focus on production-grade security.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. Subagent recovery after MAX_TURNS reported as GOAL success
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
The `codebase_investigator` subagent falsely reports `status: "success"` and `Termination Reason: "GOAL"` when it actually hit the maximum turn limit before performing any analysis. This is a P1 bug that undermines trust in agent termination signals and could mask deeper failures. 8 comments, 2 👍.

### 2. Generalist agent hangs
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
P1 bug where `gemini-cli` hangs indefinitely when deferring to the generalist agent for simple tasks like folder creation. Users report waiting up to an hour before cancelling. Workaround: instructing the model not to use sub-agents. 8 👍, 7 comments — one of the most-upvoted open bugs.

### 3. Leverage model's bash affinity via Zero-Dependency OS Sandboxing
[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)
P2 enhancement proposing that Gemini 3 models — inherently trained as native bash users — should execute POSIX tools (`grep`, `cat`, `sed`, `awk`) in a zero-dependency OS sandbox. This would unlock the model's native capabilities while maintaining security. 8 comments, 1 👍.

### 4. Shell command execution gets stuck with "Waiting input"
[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
P1 bug: after Gemini executes a simple CLI command, it hangs, showing "Awaiting user input" even after the command has finished. Affects extremely simple shell commands. 3 👍, 4 comments. Workflow-breaking for daily users.

### 5. Browser subagent fails on Wayland
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
P1 bug: browser subagent crashes on Wayland with `Termination Reason: GOAL` despite failure. Linux Wayland users cannot use browser agent functionality. 1 👍, 4 comments.

### 6. Gemini does not use skills and sub-agents enough
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
P2 behavioral bug: even with custom skills and sub-agents defined (e.g., "gradle" and "git" skills), the model rarely uses them autonomously. It only does so when explicitly instructed. 6 comments.

### 7. Agent should stop/discourage destructive behavior
[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)
P2 customer-issue: the agent occasionally uses dangerous commands like `git reset` or `--force` when safer alternatives exist. The community is asking for built-in guardrails against destructive operations, especially for DB and resource management. 1 👍, 3 comments.

### 8. Subagents running without permission since v0.33.0
[Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)
P2 regression: since v0.33.0, sub-agents (like generalist) are used even when explicitly disabled in all configuration files. User expected only MCP functionality but got unwanted agent delegation. 2 comments.

### 9. Browser agent ignores settings.json overrides
[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
P2 bug: the browser agent completely ignores `maxTurns` and other overrides from global or project-level `settings.json`. The `AgentRegistry` correctly reads settings, but the browser agent bypasses them. 3 comments.

### 10. Model frequently creates tmp scripts in random spots
[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
P2 bug: when restricted to shell execution, the model generates multiple edit scripts across various directories, creating significant cleanup overhead for users wanting clean commits. 3 comments.

---

## Key PR Progress

### 1. fix(core): avoid keep-alive socket reuse during OAuth token exchange
[PR #28103](https://github.com/google-gemini/gemini-cli/pull/28103)
Critical fix for "Sign in with Google" failing on Node.js ≥24.17.0 due to an `http.Agent` socket-reuse regression causing `ERR_STREAM_PREMATURE_CLOSE`. Priority P2, size M. Opened yesterday, already active.

### 2. Fix DNS resolution before SSRF guard to block hostname-to-private-IP bypass
[PR #27744](https://github.com/google-gemini/gemini-cli/pull/27744) *(CLOSED)*
Merged fix closing a critical SSRF gap where hostnames like `127.0.0.1.nip.io` could bypass `isBlockedHost()` because the guard only checked IP literals, not resolved IPs. Size M/L.

### 3. fix(web-fetch): prevent SSRF via DNS hostnames and redirects
[PR #27739](https://github.com/google-gemini/gemini-cli/pull/27739) *(CLOSED)*
Companion merged PR fixing two SSRF gaps: non-IP-literal hostnames bypassing the guard, and redirects to private IPs not being re-checked. Both now resolved.

### 4. fix(mcp): add SSRF protection to OAuth metadata discovery
[PR #28112](https://github.com/google-gemini/gemini-cli/pull/28112)
Adds SSRF validation (using existing `isLoopbackHost()` and `resolveAndValidateDns()`) to the OAuth discovery flow, closing a coverage gap relative to `web-fetch.ts`. Size L, opened yesterday.

### 5. fix(core): strip thoughts from scrubbed history turns
[PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)
Resolves "Thought Leakage" where internal model reasoning leaks into plain-text history turns, confusing the model and causing infinite loop monologues. Implements surgical stripping of think blocks during history scrubbing. Size M.

### 6. fix(security): enforce case-insensitive sensitive path blocklist
[PR #27966](https://github.com/google-gemini/gemini-cli/pull/27966)
Implements robust case-insensitive blocklist for `.git`, `.env`, `node_modules` directories plus VSCode HITL enforcement. Fixes a prompt injection bypass vulnerability. Size M.

### 7. Add JSON output for eval inventory
[PR #28058](https://github.com/google-gemini/gemini-cli/pull/28058) *(CLOSED)*
Adds `--json` flag to the eval inventory command for CI/script consumption and improves `--root` path handling. Size L, merged.

### 8. Feat/tool registry discovery
[PR #28113](https://github.com/google-gemini/gemini-cli/pull/28113)
Adds a small tool registry for eval reporting plus AST extraction for tool names used in eval assertions. Groups built-in tools into categories (files, search, shell, etc.). Size L, opened yesterday.

### 9. fix(core): drop late tool calls after SIGINT cancellation
[PR #28096](https://github.com/google-gemini/gemini-cli/pull/28096)
Fixes a race condition where a SIGINT delivered mid-turn could still execute delayed tool-call chunks, running side effects after the user cancelled. Closes #28091. Size M, area/agent.

### 10. fix(cli): show descriptive sandbox label in footer instead of 'current process'
[PR #28099](https://github.com/google-gemini/gemini-cli/pull/28099)
Fixes #26697: when launched with `sandbox-exec` on macOS, the footer now shows the actual sandbox profile name instead of the generic "current process". Size S, priority P2.

---

## Feature Request Trends

- **AST-Aware Code Understanding**: Multiple issues (#22745, #22746, #21000) advocate for AST-aware file reads, search, and codebase mapping to reduce turns, improve token efficiency, and enable precise method-bound navigation.
- **Sub-Agent Trajectory Sharing**: Community wants sub-agent trajectories visible via `/chat share` (#22598) and included in `/bug` reports (#21763) for better debugging and evaluation.
- **Agent Self-Awareness**: Requests (#21432) for the CLI to understand its own mechanics — accurate hotkeys, CLI flags, and self-execution — to serve as its own expert guide.
- **Robust Component-Level Evaluations**: Epic #24353 tracks expanding from 76 behavioral eval tests to comprehensive sub-agent, tool, and end-to-end evaluations across 6+ Gemini models.
- **Zero-Dependency OS Sandboxing**: Issue #19873 proposes leveraging Gemini 3's native bash training with secure sandbox execution for POSIX tools, balancing capability with safety.

---

## Developer Pain Points

- **Agent Reliability**: The most common frustration — agents hanging (#21409, #25166), false success reporting (#22323), and silent permission violations (#22093) erode trust in autonomous mode.
- **Destructive Command Execution**: Developers report that the agent occasionally uses dangerous git operations (`--force`, `git reset`) and lacks guardrails for resource management (#22672).
- **Configuration Ignorance**: Multiple issues (#22093, #22267) show that settings.json overrides (agent enablement, maxTurns) are silently ignored, causing unexpected behavior.
- **Autonomous Skill Avoidance**: Even with custom skills defined, the model rarely uses them unless explicitly instructed (#21968), defeating the purpose of custom agent configuration.
- **Cleanup Overhead**: The model's tendency to scatter temporary scripts across directories (#23571) creates significant manual cleanup work for users wanting clean commits.
- **Wayland and Terminal Issues**: Browser agent failure on Wayland (#21983), terminal corruption after external editors (#24935), and flickering on resize (#21924) affect Linux and terminal-power users disproportionately.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-24

## Today's Highlights
A flurry of 15 triage-tagged issues landed today, signaling a major community testing push. The release v1.0.64 improves security transparency by showing resolved symlink targets in path prompts and adds better pay-as-you-go budget feedback. A critical Windows regression (mouse wheel scroll capture) was closed after three months, but a new scroll-bar alignment bug (#3501) is drawing significant attention (👍9).

## Releases
**v1.0.64** (2026-06-23)
- Path access prompt now shows resolved symlink targets for full transparency.
- Pay-as-you-go additional usage budget is shown at launch; budget is refreshed after a request is rejected for hitting the spend limit; a friendly message is displayed when the additional spend limit is hit.

## Hot Issues (Top 10)

1. **#3501 — Scroll bar makes text unalign (OPEN, 👍9)**  
   *[area:platform-windows, area:terminal-rendering]*  
   Since the vertical scroll bar was introduced on Windows, text rendering is misaligned. Affects both Windows Console Host and Terminal. Workarounds are not available. High community upvote count suggests this is a priority polish regression.  
   https://github.com/github/copilot-cli/issues/3501

2. **#1944 — Mouse wheel scroll captured by input box (CLOSED, 👍3)**  
   *[Windows regression]*  
   After three months, this Windows scroll regression is finally closed. Users could not scroll conversation history—the scroll event was stolen by the text input box. A welcome fix for daily usability.  
   https://github.com/github/copilot-cli/issues/1944

3. **#3892 — Session state directory never pruned → EMFILE crash (OPEN)**  
   *[triage]*  
   `~/.copilot/session-state/` accumulates thousands of GUID folders (from background automations, heartbeats, memory-consolidation runs), causing file-descriptor exhaustion that crashes VS Code Copilot Chat. A systemic housekeeping gap.  
   https://github.com/github/copilot-cli/issues/3892

4. **#2486 — MCP server blocked by policy on personal Pro+ account (CLOSED)**  
   *[area:mcp]*  
   User's MCP server suddenly blocked despite no policy change. Only a fragile hack worked. Issue closed, but no public resolution detail—community may still be at risk of silent blocking.  
   https://github.com/github/copilot-cli/issues/2486

5. **#3881 — Quota subtraction error: 5% instead of 2% for 6x model (OPEN)**  
   *[area:models]*  
   A Claude Sonnet 4.5 (6x multiplier) request consumed 5% of the monthly quota instead of the expected 2%. User asks for a 3% refund. Points to possible billing calculation bugs under the premium request system.  
   https://github.com/github/copilot-cli/issues/3881

6. **#3866 — "Thinking…" reasoning text unreadable on dark backgrounds (OPEN, 👍2)**  
   *[area:theming-accessibility]*  
   Hardcoded dim foreground color makes model reasoning text nearly invisible on dark terminals. A recurring accessibility concern across dark-theme users.  
   https://github.com/github/copilot-cli/issues/3866

7. **#3900 — Secret filtering blocks the UI thread (OPEN)**  
   *[triage]*  
   Secret scanning runs synchronously on the UI thread, freezing the TUI on large responses. The recursive structured-object scanning is said to be inefficient. A potential DoS vector for heavy users.  
   https://github.com/github/copilot-cli/issues/3900

8. **#3898 — Black text on dark blue background due to OSC 11 (OPEN)**  
   *[triage]*  
   Custom terminal background colors (set via OSC 11) cause black-on-dark-blue text—effectively invisible. A new-install experience regression for power users with custom terminals.  
   https://github.com/github/copilot-cli/issues/3898

9. **#3899 — `/rubber-duck` availability unclear under `/model auto` (OPEN)**  
   *[triage]*  
   The `/rubber-duck` command is not discoverable when using `/model auto`, even though `auto` typically resolves to an eligible model. Documentation gap or logic bug in command visibility.  
   https://github.com/github/copilot-cli/issues/3899

10. **#3894 — `agentStop` hook triggers on sub-agent → `/review` never finishes (OPEN)**  
    *[triage]*  
    A custom hook on `agentStop` fires during sub-agent activity, causing `/review` commands to hang indefinitely. Plugin architecture edge case with no current workaround.  
    https://github.com/github/copilot-cli/issues/3894

## Key PR Progress
Only 1 PR updated in the last 24 hours:

- **#3873 — Add initial console log for greeting (OPEN)**  
  A minor quality-of-life PR adding a startup greeting log. Community discussion minimal (0 comments).  
  https://github.com/github/copilot-cli/pull/3873

## Feature Request Trends
- **Scheduled/recurring agent prompts** (#2056, 👍4): Users want Copilot CLI agents to run autonomously at set intervals (e.g., nightly maintenance, periodic reports), unblocked from manual input.
- **Extended thinking as independent control** (#3888): Users of Anthropic models want the ability to toggle extended thinking on/off separately from adjusting reasoning effort level—a missing API parameter mapping.
- **Restore web_fetch access to private networks** (#3731, 👍2): Enterprise users whose agents rely on reading internal templates/standards are blocked by the tightened network sandbox; they request an opt-in flag to restore private-network access.

## Developer Pain Points
1. **Housekeeping neglect** — Session state directories (Issue #3892) are never cleaned, causing EMFILE crashes that cascade into VS Code. A recurring theme of unchecked state growth.
2. **Terminal rendering regressions on Windows** — The scroll-bar misalignment (#3501, 👍9) and the mouse-wheel capture regression (#1944, now fixed) show that Windows terminal UX remains fragile under rapid development.
3. **Silent policy and quota surprises** — MCP servers blocked without notice (#2486), incorrect quota subtraction (#3881), and hidden `/rubber-duck` unavailability (#3899) erode trust in deterministic behavior.
4. **Plugin/MCP isolation gaps** — Sub-agent model overrides silently dropped in BYOK mode (#3891), MCP servers with duplicate names silently overwritten (#3893), and hooks firing on sub-agents (#3894) all point to insufficient sandboxing in the plugin runtime.
5. **Accessibility regressions** — Hardcoded colors (#3866, #3898) make the TUI partially unusable on custom/dark terminals, suggesting theme and contrast testing is not integrated into the release pipeline.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-24

## Today's Highlights
Activity is minimal today with no new releases or pull requests in the last 24 hours. The most notable development is a single open bug report (#2448) where Kimi CLI continues to prompt for approval even in "yolo mode," affecting users relying on fully autonomous workflows. The community remains focused on improving agent autonomy and reducing unnecessary interruptions.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*Only one issue updated in the last 24 hours.*

1. **[[bug] Kimi CLI is prompting for approval in yolo mode](https://github.com/MoonshotAI/kimi-cli/issues/2448)** — *Opened 2026-06-10, updated 2026-06-23*  
   Reported by @iaindooley on Kimi Code v0.12.0 using the API key subscription and model k2.6 on Debian. The user runs in yolo mode (which should auto-approve all actions) but still receives approval prompts, breaking intended autonomous behavior. Only one comment so far, and zero reactions — likely still under triage. This is critical for users automating CI/CD or scripted workflows.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Based on the broader issue landscape, the most-requested feature directions include:
- **True "yolo mode" reliability** — Users expect zero confirmations when yolo mode is enabled, but edge cases (e.g., risky file operations, API calls) still trigger prompts.
- **Improved `k2.6` model stability** — Multiple issues report inconsistent behavior with the k2.6 model, especially around tool-calling accuracy and response time.
- **Headless/CI integration** — Requests for better support in non-interactive environments (Docker, GitHub Actions) without workarounds.

## Developer Pain Points
- **yolo mode not trusted** — The #2448 bug undermines confidence in the flag's core promise of full autonomy, a recurring frustration across multiple releases.
- **Silent failures on API key validation** — Sporadic reports of the CLI accepting invalid keys without clear error messages, leading to mysterious timeouts.
- **Platform-specific glitches on Linux (Debian)** — Debian users disproportionately report permission and path issues, suggesting untested edge cases in the new v0.12.0 binary packaging.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-24

## Today's Highlights

Development activity is intense today with major progress on MCP resource support and a new standalone session flow in the CLI. A critical bug fix addresses large file writes failing silently, while the ecosystem grows with a local-first memory plugin. Community discussion remains focused on DeepSeek V4 pricing, UI/UX improvements for the desktop app, and session management reliability.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#28846 — Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** [CLOSED]
   - **Why it matters:** DeepSeek slashed API pricing by 75%, and the community wants OpenCode Go subscription limits updated accordingly. With 82 upvotes and 83 comments, this is the most discussed issue—reflecting how pricing shifts directly impact user quotas. *Closed, likely resolved.*

2. **[#4714 — TUI: Search for and find string in session buffer](https://github.com/anomalyco/opencode/issues/4714)** [OPEN]
   - **Why it matters:** Developers need in-session text search akin to editor find. At 35 upvotes and 28 comments, this is a long-standing UX gap in the TUI that many consider essential for navigating agent output.

3. **[#15035 — About agent-teams](https://github.com/anomalyco/opencode/issues/15035)** [CLOSED]
   - **Why it matters:** A straightforward question about when multi-agent team orchestration will arrive, generating 25 comments. Indicates strong demand for collaborative agent workflows.

4. **[#19604 — Write tool fails silently on large files (~1000+ lines)](https://github.com/anomalyco/opencode/issues/19604)** [OPEN]
   - **Why it matters:** A high-impact bug: the `Write` tool silently fails on files ~1000+ lines with no error message, breaking core functionality. 12 comments, several workarounds discussed.

5. **[#11111 — VIM Keyboard Layout](https://github.com/anomalyco/opencode/issues/11111)** [OPEN]
   - **Why it matters:** 34 upvotes for Vim-style message input—a strong signal from the developer community. 12 comments exploring implementation approaches.

6. **[#14212 — Support more DBMS' for OpenCode state storage](https://github.com/anomalyco/opencode/issues/14212)** [OPEN]
   - **Why it matters:** Drizzle migration opened the door to PostgreSQL and other DBMS backends. 21 upvotes, 11 comments—users want to self-host with their preferred database.

7. **[#22225 — Add skill usage tracking to CLI](https://github.com/anomalyco/opencode/issues/22225)** [OPEN]
   - **Why it matters:** Developers want visibility into which skills they actually use. The proposal leverages a local JSON file—simple but effective analytics for power users.

8. **[#32080 — opencode deleted Node.js and corrupted PATH](https://github.com/anomalyco/opencode/issues/32080)** [CLOSED]
   - **Why it matters:** An alarming incident where OpenCode's Graphviz installation apparently removed Node.js and itself. 5 comments, but highlights risks of tool-execution permissions.

9. **[#30895 — Desktop v1.16.0 converts WSL /mnt/c/... workspace to Windows C:\ path](https://github.com/anomalyco/opencode/issues/30895)** [OPEN]
   - **Why it matters:** WSL path transformation breaks file/session lists on the desktop app. A regression specific to v1.16.0 affecting WSL users.

10. **[#20817 — 为什么是台湾而不是中国台湾](https://github.com/anomalyco/opencode/issues/20817)** [CLOSED]
    - **Why it matters:** A geopolitical naming issue: user flagged "Taiwan" without "China" prefix, contrasting with "Hong Kong, China" and "Macau, China." 6 upvotes, 6 comments—prompting localization policy discussion.

---

## Key PR Progress

1. **[#33281 — feat(cli): add standalone v2 session flow](https://github.com/anomalyco/opencode/pull/33281)** [OPEN]
   - Adds `--standalone` mode running an authenticated private server child process for the TUI, with v2 API sessions and `DataProvider` integration. A major architecture improvement.

2. **[#33560 — fix(core): simplify opencode connection flow](https://github.com/anomalyco/opencode/pull/33560)** [OPEN]
   - Streamlines OAuth setup: uses Console URL directly, selects first org alphabetically, renames methods for clarity. Improves onboarding UX.

3. **[#33483 — feat(mcp): add resource read tools](https://github.com/anomalyco/opencode/pull/33483)** [CLOSED]
   - Adds model-callable MCP resource list/read tools, treats URIs as opaque identifiers, and fixes @-mentioned resource reads. Fixes #15535 and #17543.

4. **[#33546 — feat(mcp): add resource template listing](https://github.com/anomalyco/opencode/pull/33546)** [CLOSED]
   - Introduces MCP resource template discovery via `resources/templates/list`, extending the MCP tool ecosystem. Related to #28567.

5. **[#33553 — feat: enforce tagged error messages](https://github.com/anomalyco/opencode/pull/33553)** [OPEN]
   - Adds a custom Oxlint rule requiring tagged error classes to expose messages, with migration of operational errors. Improves error observability.

6. **[#33555 — feat(core): add opencode integration](https://github.com/anomalyco/opencode/pull/33555)** [CLOSED]
   - Exposes OAuth method registration and v2 plugin hooks, adds built-in OpenCode OAuth/API-key integration with org-scoped credentials.

7. **[#33559 — fix(app): clear followup queue on session revert, add remove button](https://github.com/anomalyco/opencode/pull/33559)** [OPEN]
   - Fixes queued messages persisting after session revert/undo. Adds a "Remove" button for individual followup messages.

8. **[#33554 — fix: Home and End keys not working](https://github.com/anomalyco/opencode/pull/33554)** [OPEN]
   - Fixes Home/End key cursor movement in the prompt—a regression likely from a keybinding refactor. Closes #29053.

9. **[#33549 — feat(tui): redesign crash screen](https://github.com/anomalyco/opencode/pull/33549)** [CLOSED]
   - Replaces the bare error boundary with a branded, responsive crash fallback—much better UX when things go wrong.

10. **[#33556 — docs: add agentcairn to the ecosystem (local-first memory plugin)](https://github.com/anomalyco/opencode/pull/33556)** [OPEN]
    - Adds **agentcairn**—a local-first memory plugin offering recall, summarization, and durable storage—to the ecosystem documentation.

---

## Feature Request Trends

- **Multi-agent orchestration**: Multiple issues ask for agent teams, conductor patterns, and hierarchical plans (#15035, #13928, #6792).
- **Session management improvements**: Export to desktop app (#31453), session restore (#26505), and skill usage tracking (#22225) indicate users want better history and analytics.
- **Input method flexibility**: Vim keybindings (#11111), customizable newline/submit (#11898), and TUI text search (#4714) show demand for editor-like UX.
- **Extended storage backends**: PostgreSQL and other DBMS support (#14212) for self-hosted deployments.
- **Granular permissions**: Per-agent tool allow/deny (#17607) and filesystem sandboxing remain requested for security-conscious teams.

---

## Developer Pain Points

- **Large file handling**: The `Write` tool failing silently on 1000+ line files (#19604) is a critical regression affecting real workloads.
- **WSL/Windows path issues**: Desktop v1.16.0 breaking WSL `/mnt/c/...` paths (#30895), and CLI input issues on WSL (#7297) create friction for Windows developers.
- **Sub-agent and tool configuration**: Agent `@` autocomplete missing Scout (#28100), ProviderModelNotFoundError for subagent model assignment (#21615), and Task tool timeouts in multi-agent patterns (#6792) plague advanced usage.
- **Unexpected destructive actions**: OpenCode deleting Node.js and corrupting PATH (#32080) raises trust and safety concerns for tool-execution features.
- **Plugin API ambiguity**: Developers unsure about supported patterns for registering agents/commands from plugins (#24065) and accessing image bytes (#20001)—indicating documentation gaps.
- **Desktop feature parity**: Missing `/export` (#31453) and session management features (#26505) in the desktop app vs. TUI frustrate users who prefer the GUI.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-24

---

## 1. Today's Highlights

A major wave of provider breakage hit v0.80.x: DeepSeek, Nvidia, Cloudflare Workers AI, and local models all failed after the upgrade to v0.80.1, primarily due to a refactored `streamSimpleOpenAICompletions` export and a `developer` role that DeepSeek cannot parse. The team responded rapidly, closing most issues within hours, while the community also landed a fix for Codex reasoning replay and a normalization PR for Microsoft Foundry endpoints. Meanwhile, TUI ergonomics remain a friction point—streaming scroll-jacking and multi-line session names breaking the footer are still open.

---

## 2. Releases

**v0.80.2** (latest, published <24h ago):
- Changed inherited `pi-ai` API key credential structure: discriminator now uses `type: "api_key"` (was `"api-key"`), and provider-scoped `env` values replaced metadata-based configuration.
- Renamed the harness shell execution options type from `ExecutionEnvExe` (continued from v0.80.0).

**v0.80.1** (published ~24h ago):
- Fixed Amazon Bedrock `AWS_PROFILE` endpoint resolution for built-in inference profiles.
- Fixed Fireworks Anthropic-compatible requests to apply session-affinity and unsupported tool-field defaults for custom models.
- Fixed Together AI streaming compatibility.

**v0.80.0** (published ~48h ago):
- Added `Ctrl+J` as a default newline keybinding alongside `Shift+Enter`.
- Renamed the `zai` provider display label to "ZAI Coding Plan (Global)" for clarity ([#5965](https://github.com/earendil-works/pi/issues/5965)).
- Removed old `pi-ai` global API (`stream`/`complete`/`completeSimple`).

[View all releases](https://github.com/badlogic/pi-mono/releases)

---

## 3. Hot Issues

1. **[#5825 — Streaming markdown forces scroll to bottom](https://github.com/earendil-works/pi/issues/5825)** (OPEN, 30 comments)  
   *Why it matters:* When `clear on shrink` is enabled, Pi aggressively auto-scrolls during streaming markdown output, making reading impossible for fast typists. This is the most-commented open issue and a core UX regression for heavy users.

2. **[#6020 — DeepSeek provider broken in 0.80](https://github.com/earendil-works/pi/issues/6020)** (CLOSED, 11 comments)  
   *Why it matters:* DeepSeek’s API rejects the `developer` role introduced in v0.80. The error `unknown variant 'developer'` points to a schema mismatch between Pi’s internal role model and DeepSeek’s expected `system`/`user`/`assistant` enum. Closed rapidly after the fix was identified.

3. **[#5700 — Support multiple live agent sessions with TUI switching](https://github.com/earendil-works/pi/issues/5700)** (CLOSED, 8 comments)  
   *Why it matters:* Users want concurrent agent sessions (e.g., one processing while they work in another). The current `switchSession` tears down the old session, preventing background execution. This feature request has high community alignment with the pi-swarm brand direction.

4. **[#6016 — Nvidia provider broken in 0.80.1](https://github.com/earendil-works/pi/issues/6016)** (CLOSED, 7 comments)  
   *Why it matters:* `streamSimpleOpenAICompletions` is not a function after upgrade. This same error appeared for local models ([#6017](https://github.com/earendil-works/pi/issues/6017)), indicating a shared regression in the provider refactoring. Rolling back to v0.79.10 is the only workaround.

5. **[#5989 — pi update broke extension pi-lovely-codex](https://github.com/earendil-works/pi/issues/5989)** (CLOSED, 6 comments)  
   *Why it matters:* A user who installed an extension the same day found it immediately incompatible after update. Core API changes (likely the credential/type rename in v0.80.2) can break third-party extensions without version pinning.

6. **[#5996 — Footer rendering breaks when session name contains newlines](https://github.com/earendil-works/pi/issues/5996)** (CLOSED, 4 comments)  
   *Why it matters:* LLM-generated session names with literal `\n` characters leak content outside the editor box. A one-line sanitization fix was accepted; the issue shows how unvalidated LLM output can corrupt TUI layout.

7. **[#6011 — AgentSwarm missing TUI status display](https://github.com/earendil-works/pi/issues/6011)** (CLOSED, 2 comments)  
   *Why it matters:* Users of AgentSwarm/AgentTeam get no visual feedback—only final JSON output. The request for a real-time TUI with per-agent status bars aligns with kimi-code’s design and the community’s desire for swarm mode.

8. **[#6002 — SessionManager.open() silently truncates non-session files](https://github.com/earendil-works/pi/issues/6002)** (OPEN, 2 comments)  
   *Why it matters:* Opening a non-session file (e.g., a 3.2 MB NDJSON log) via `--session` truncates it to 133 bytes with no warning. Potentially destructive data loss—critical for power users who might accidentally use the flag on wrong files.

9. **[#5976 — /model replaces defaultModel setting unexpectedly](https://github.com/earendil-works/pi/issues/5976)** (CLOSED, 2 comments)  
   *Why it matters:* `/model` silently persists to the config file instead of changing only the live session. No extension hook exists to override this behavior—a design tension between ephemeral vs. persistent settings.

10. **[#6021 — Cloudflare Workers.AI 404 on 0.80.1](https://github.com/earendil-works/pi/issues/6021)** (CLOSED, 1 comment)  
    *Why it matters:* URL template expansion fails: `{CLOUDFLARE_ACCOUNT_ID}` is not resolved, producing literal `%7B...%7D` in the URL. Downgrading to v0.79.10 is the fix; the issue was closed without a patch (likely a config documentation fix).

---

## 4. Key PR Progress

1. **[#6026 — fix(tui): stabilize working status row](https://github.com/earendil-works/pi/pull/6026)** (OPEN)  
   *Attempts to fix the scroll-to-bottom issue (#5825) by stabilizing the status row during streaming markdown rendering.*

2. **[#6022 — fix(ai): omit reasoning replay items for Codex responses](https://github.com/earendil-works/pi/pull/6022)** (CLOSED)  
   *Adds a shared conversion option to strip replayed `reasoning` items with `encrypted_content`—fixing Codex response rejection on follow-up requests.*

3. **[#6018 — feature(coding-agent): show context estimates in session tree](https://github.com/earendil-works/pi/pull/6018)** (OPEN)  
   *Displays token/tool counts per entry in the session tree for quick scanning of context-heavy sessions. A direct quality-of-life improvement for power users.*

4. **[#5832 — fix(ai): surface provider HTTP error body instead of opaque SDK message](https://github.com/earendil-works/pi/pull/5832)** (OPEN)  
   *Long-running PR to expose raw HTTP error bodies from provider SDKs (currently dropped on 403/429). Would drastically improve debugging for proxy/gateway setups.*

5. **[#5526 — Require terminal events for OpenAI Responses streams](https://github.com/earendil-works/pi/pull/5526)** (CLOSED)  
   *Fixes random stream termination by requiring a terminal response event before marking completion. Addresses "type continue" workaround and context counter corruption.*

6. **[#6004 — feat: Normalize modern Microsoft Foundry Responses API endpoints](https://github.com/earendil-works/pi/pull/6004)** (CLOSED)  
   *Adds support for `*.ai.azure.com` endpoints (modern Foundry) to the normalization logic, fixing incompatibility when pasting from Foundry UI.*

7. **[#5784 — fix(coding-agent): sort threaded sessions by latest activity in the subtree](https://github.com/earendil-works/pi/pull/5784)** (CLOSED)  
   *Sorts fork-heavy session trees by newest subtree activity instead of root timestamp—critical for users who fork repeatedly over days.*

8. **[#5999 — fix(coding-agent): normalize session names](https://github.com/earendil-works/pi/pull/5999)** (CLOSED)  
   *Sanitizes newline characters in session names to prevent TUI footer breakage (#5996). Simple but impactful.*

9. **[#5262 — feat(ai): add Anthropic Vertex provider](https://github.com/earendil-works/pi/pull/5262)** (OPEN)  
   *Adds a built-in `anthropic-vertex` provider for Claude on Google Cloud Vertex AI, reusing the existing Anthropic streaming path. Open for ~3 weeks; potential for enterprise/GCP users.*

10. **[#5994 — fix(ai): route OpenCode Go models through Anthropic](https://github.com/earendil-works/pi/pull/5994)** (CLOSED)  
    *Fixes routing for OpenCode Go models (e.g., `minimax-m2.7`, `qwen3.6-plus`) that expose Anthropic metadata—prevents them from hitting the incorrect `/v1/chat/completions` path.*

---

## 5. Feature Request Trends

- **Multi-session concurrency:** Users want to run background agent sessions while interacting with another, with TUI-based switching ([#5700](https://github.com/earendil-works/pi/issues/5700), [#6011](https://github.com/earendil-works/pi/issues/6011)).
- **Swarm as default workflow:** Community requests for `/swarm` and `/swarm-team` slash commands and prompt-detected parallel execution ([#6012](https://github.com/earendil-works/pi/issues/6012), [#6013](https://github.com/earendil-works/pi/issues/6013)).
- **Visual swarm TUI:** Real-time per-agent status display with progress bars, similar to kimi-code ([#6011](https://github.com/earendil-works/pi/issues/6011), [#6014](https://github.com/earendil-works/pi/issues/6014)).
- **Provider & model flexibility:** Qualified model strings (`provider/model`), Merge Gateway as a built-in provider, and unified provider registration from community examples ([#5972](https://github.com/earendil-works/pi/issues/5972), [#5986](https://github.com/earendil-works/pi/issues/5986), [#6024](https://github.com/earendil-works/pi/issues/6024)).
- **Community package index:** Unofficial index of pi packages proposed for upstream integration ([#6027](https://github.com/earendil-works/pi/issues/6027)).

---

## 6. Developer Pain Points

1. **Provider breakage after minor version bumps:** Every `.x` release in the 0.80 line has broken at least one provider (DeepSeek, Nvidia, Cloudflare, Together). Developers are frustrated by the lack of backward compatibility and must keep v0.79.10 as a fallback.
2. **Opaque error messages:** Providers surface useless SDK errors like `streamSimpleOpenAICompletions is not a function` instead of meaningful diagnostics (#6016, #6017). PR #5832 aims to fix this but is still open.
3. **Silent data loss:** `SessionManager.open()` truncates non-session files without warning (#6002). No backup or confirmation UX exists.
4. **Persistent vs. ephemeral setting confusion:** `/model command silenty writes to `defaultModel` in config (#5976), violating user expectations for runtime-only changes.
5. **Third-party extension fragility:** Core API changes (credential type renames, function removals) break community extensions immediately, with no versioning contracts or deprecation warnings (#5989).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-24

## Today's Highlights
Two patch releases (v0.19.0, v0.19.1) shipped in the last 24 hours, bringing CLI MCP resource completion matching and server discovery improvements. A major input validation cleanup series from contributor **tt-a1i** landed across 15+ issues, systematically hardening integer-only parameters against fractional values. Community attention also turned toward daemon architecture, with multiple PRs proposing voice dictation, daemon-registered cron scheduling, and workspace permission APIs.

---

## Releases
**v0.19.0** (2026-06-23) & **v0.19.1** (2026-06-24)
- `feat(cli)`: MCP resource completions now match by name; servers are auto-discovered ([PR #5733](https://github.com/QwenLM/qwen-code/pull/5733))
- `chore(release)`: CI pipeline updated to auto-publish VSCode companion extension after stable releases ([PR #5558](https://github.com/QwenLM/qwen-code/pull/5558))

---

## Hot Issues (Top 10 by Relevance)

1. **#4488** — **[CLOSED]** Qwen Code v0.16.0 not showing in VS Code sidebar. User on VS Code 1.120.0 reported the plugin flashes then disappears. Root cause still under triage. (7 comments)  
   [Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488)

2. **#5708** — **[CLOSED]** `session list` cursor accepts negative/unsafe values. Pagination cursors from `mtimeMs` were not validated for feasibility, risking malformed requests. (6 comments, welcome-pr)  
   [Issue #5708](https://github.com/QwenLM/qwen-code/issues/5708)

3. **#5758** — **[OPEN]** `Protocol / AuthType Decoupling` — proposed mapping `providerId` to protocol to fix config interoperability between CLI, ACP, and VSCode. Discussion ongoing. (5 comments)  
   [Issue #5758](https://github.com/QwenLM/qwen-code/issues/5758)

4. **#3877** — **[CLOSED]** `.env` file with `OPENCODE_GO_API_KEY` ignored; CLI forces auth selection. User reported regression in env precedence. (5 comments)  
   [Issue #3877](https://github.com/QwenLM/qwen-code/issues/3877)

5. **#5736** — **[OPEN]** Recent update causes more frequent full prompt reprocessing when continuing conversations. LLM backend (llama.cpp) shows "forcing full prompt re-process". Performance concern. (4 comments, welcome-pr)  
   [Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736)

6. **#5562** — **[CLOSED]** CLI TUI input box background rendering breaks on line wrap — visual gap in Chinese/ long-text input. (4 comments)  
   [Issue #5562](https://github.com/QwenLM/qwen-code/issues/5562)

7. **#5713** — **[CLOSED]** Semi-invisible cursor in Alacritty terminal; works in xterm. (4 comments, welcome-pr)  
   [Issue #5713](https://github.com/QwenLM/qwen-code/issues/5713)

8. **#5761** — **[CLOSED]** Model selector UI bug: two items checked simultaneously, status bar shows wrong plan after selecting Coding Plan. (3 comments)  
   [Issue #5761](https://github.com/QwenLM/qwen-code/issues/5761)

9. **#5749** — **[CLOSED]** Request for deterministic guards blocking destructive git commands (`git reset --hard`, `git clean -fd`) in auto mode. (2 comments)  
   [Issue #5749](https://github.com/QwenLM/qwen-code/issues/5749)

10. **#5734** — **[CLOSED]** Fork subagent hardening gaps: unbounded turn count (runaway token burn) and permission-gated tools silently auto-denied. (2 comments, welcome-pr)  
    [Issue #5734](https://github.com/QwenLM/qwen-code/issues/5734)

---

## Key PR Progress

1. **#5785** — **[OPEN]** `perf(cli): Optimize serve daemon startup` — makes `qwen serve` reach HTTP listener earlier by deferring UI/Ink/settings until after listener is ready.  
   [PR #5785](https://github.com/QwenLM/qwen-code/pull/5785)

2. **#5788** — **[OPEN]** `fix(cli): replace emoji thinking/summary icons with Unicode text symbols` — aligns with existing glyph vocabulary for terminal-agnostic rendering.  
   [PR #5788](https://github.com/QwenLM/qwen-code/pull/5788)

3. **#5780** — **[OPEN]** `feat: add qwen update and /update commands` — checks npm registry for latest version; supports auto-update for standalone installs.  
   [PR #5780](https://github.com/QwenLM/qwen-code/pull/5780)

4. **#5755** — **[OPEN]** `feat(serve): voice dictation over daemon for Web Shell` — browser microphone streams 16 kHz PCM via WebSocket; daemon transcribes server-side.  
   [PR #5755](https://github.com/QwenLM/qwen-code/pull/5755)

5. **#5743** — **[OPEN]** `feat(cli): Add workspace permissions rules API` — adds REST surface (`GET/POST /workspace/permissions`) for persistent allow/ask/deny lists.  
   [PR #5743](https://github.com/QwenLM/qwen-code/pull/5743)

6. **#5781** — **[OPEN]** `Expose MCP resource read tool` — lets the model call a configured MCP resource by server name/URI during a normal tool-call turn.  
   [PR #5781](https://github.com/QwenLM/qwen-code/pull/5781)

7. **#5773** — **[OPEN]** `feat(cli): add /config key=value slash command` — set any dot-path setting from prompt without opening settings UI or editing `settings.json`.  
   [PR #5773](https://github.com/QwenLM/qwen-code/pull/5773)

8. **#5779** — **[OPEN]** `ci: add /resolve command` — maintainer-triggered `@qwen-code /fix_conflicts` to auto-resolve merge conflicts on eligible PRs.  
   [PR #5779](https://github.com/QwenLM/qwen-code/pull/5779)

9. **#5657** — **[OPEN]** `fix(cli): stop repeated duplicate provider responses` — breaks infinite tool-result loops when a provider re-sends the same tool-call id.  
   [PR #5657](https://github.com/QwenLM/qwen-code/pull/5657)

10. **#5731** — **[CLOSED]** `fix(config): fall back to user env files` — chains workspace `.env` → `~/.qwen/.env` → `<QWEN_HOME>/.env` → `~/.env` for better env resolution.  
    [PR #5731](https://github.com/QwenLM/qwen-code/pull/5731)

---

## Feature Request Trends

- **Daemon as a System Service** — Multiple requests (#5768, #5626, #5755) advocate for a long-running `qwen daemon` that can be registered as a systemd/launchd service to host crons, voice pipelines, and browser extensions persistently without a foreground session.
- **Permission / Safety Guards** — Growing demand (#5749, #5782, #5734) for deterministic guards against destructive git commands and credential leakage in auto-mode; also safer subagent turn caps.
- **Model Switching Enhancements** — Requests (#5597, #5758) for `/model --vision` fallback and decoupling of `providerId` from `protocol` to simplify multi-model workflows across CLI, VSCode, and ACP.
- **Terminal UX Consistency** — A push (#5787, #5788) to replace emoji with Unicode text symbols for wider terminal compatibility and consistent TUI rendering.

---

## Developer Pain Points

- **Input Validation Gaps** — A major batch of issues (15+ by `tt-a1i`) showed that integer-only parameters across sessions, caching, tool schemas, and CLI flags accept fractional or unsafe values, silently producing off-by-one or logic errors.
- **Environment Precedence Confusion** — Users report (#3877, #5731) that `.env` files in `~/.qwen/` are ignored or overwritten by workspace configs; the fix chain in PR #5731 directly addresses this.
- **Prompt Reprocessing Regressions** — Issue #5736 hints at a recent behavioral regression causing full prompt re-processing more often, increasing latency for local LLM users.
- **UI Rendering Inconsistencies** — Cross-terminal cursor issues (Alacritty, #5713) and TUI line-wrap rendering (#5562) suggest terminal abstraction is still a pain point for the Ink-based CLI.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-24

## Today's Highlights
The v0.8.65 provider/model/Fleet architecture refactor is moving at high velocity, with 10+ PRs merged in the last 24 hours spanning config module splitting, Fleet task-spec schemas, and pricing projection infrastructure. The security-hardening tracker (#3368) and the persistent "turn stalled" freeze bug (#2487) remain the two most active community threads, both showing sustained discussion without resolution. A significant Chinese-language feature request (#3439) for GLM-5.2 provider support signals growing demand for multi-model, multi-region routing.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#3368 — Security hardening/code-scanning fixes tracker (29 comments)](https://github.com/Hmbown/CodeWhale/issues/3368)**  
   *Why it matters:* The release gate for v0.8.64 security work. The community is closely watching this as the public signal for when exploit-related fixes land. Maintainer explicitly avoids publishing exploit details in the issue.

2. **[#2487 — "Turn stalled" freeze in yolo mode (17 comments)](https://github.com/Hmbown/CodeWhale/issues/2487)**  
   *Why it matters:* The highest-voted open bug. Users report the TUI becomes completely unresponsive after "no completion signal received." `continue` commands fail to resume. This is blocking production usage for many.

3. **[#3275 — Agent over-engineering loops (11 comments)](https://github.com/Hmbown/CodeWhale/issues/3275)**  
   *Why it matters:* Users report CodeWhale self-generates its own work, proposing and executing tasks without user confirmation. Tagged as a regression from #3061. High frustration in the thread.

4. **[#3439 — Support for GLM-5.2 model provider (6 comments)](https://github.com/Hmbown/CodeWhale/issues/3439)**  
   *Why it matters:* First major Chinese-provider integration request. User provides detailed API specs, use cases (long-document understanding, Chinese creative writing), and notes that the Constitution already has `model_strength` mapping planned for the GLM family.

5. **[#3222 — Reasoning stream style overrides for inline `<think>` blocks (9 comments)](https://github.com/Hmbown/CodeWhale/issues/3222)**  
   *Why it matters:* Community member @buko contributed a patch direction for handling OpenAI-compatible gateways that emit inline thinking blocks. This directly affects users running local LLM backends.

6. **[#1812 — Windows TUI freeze via crossterm polling (8 comments)](https://github.com/Hmbown/CodeWhale/issues/1812)**  
   *Why it matters:* Windows 11 specific, with two confirmed freeze events captured—logs, session files, and thread-state analysis included. Despite being open since May, this remains unaddressed.

7. **[#2766 — UI refactor: output copying and modal overlay (8 comments)](https://github.com/Hmbown/CodeWhale/issues/2766)**  
   *Why it matters:* Core UX complaint: output is hard to copy, and confirmation pop-ups obscure the main interface with mostly useless info. Pure usability feedback with broad implications.

8. **[#3461 — MCP duplicate server process lifecycle (4 comments)](https://github.com/Hmbown/CodeWhale/issues/3461)**  
   *Why it matters:* Single `mcp.json` entry spawns two processes—one orphaned, wasting ~4MB RAM, sharing stdio pipes so killing either kills both. Classic "silent resource leak" that will affect all MCP users.

9. **[#2608 — EPIC: Separate provider facts, model facts, offerings, and routes (7 comments)](https://github.com/Hmbown/CodeWhale/issues/2608)**  
   *Why it matters:* The foundational architecture issue driving most of today's PR activity. Establishes the invariant: "A model string alone is never enough to select a route."

10. **[#2492 — Cross-session memory loss (5 comments)](https://github.com/Hmbown/CodeWhale/issues/2492)**  
    *Why it matters:* User reports that restarting the app forgets inter-session memory entirely, and forced memory writes are not read on restart. "Responses are fast, but the experience isn't good."

## Key PR Progress

1. **[#3512 — Fleet loadout intent in task specs (merged)](https://github.com/Hmbown/CodeWhale/pull/3512)**  
   Adds `agent_profile`, `loadout`, and `model_class` intent fields to task specs. This is the first Fleet profile/loadout schema slice for #3167/#3367/#3205.

2. **[#3510 — Centralize AppMode helpers (merged)](https://github.com/Hmbown/CodeWhale/pull/3510)**  
   Moves mode parsing, display names, cycle transitions, and picker hints onto `AppMode`. Eliminates duplicated `/mode` command helpers.

3. **[#3509 — Token usage projected to canonical billing classes (merged)](https://github.com/Hmbown/CodeWhale/pull/3509)**  
   Routes existing cost math through canonical `TokenUsage` classes (cache hit vs miss vs embedding). Behavior-preserving but sets up pricing infrastructure.

4. **[#3508 — Route limits carried through resolver (merged)](https://github.com/Hmbown/CodeWhale/pull/3508)**  
   Adds `RouteLimits` seam for context/input/output token limits, preserving Models.dev limit facts through `ReadyRouteCandidate`.

5. **[#3515 — Approval modal clarity (merged)](https://github.com/Hmbown/CodeWhale/pull/3515)**  
   Harvests @donglovejava's UX improvement: adds a visual divider between approve group (once/always) and deny/abort, with a `?` keybinding hint.

6. **[#3507 — Harness posture types extracted (merged)](https://github.com/Hmbown/CodeWhale/pull/3507)**  
   Third config split slice (#3311): moves harness posture/profile domain out of `lib.rs` into dedicated module. Behavioral preservation verified.

7. **[#3502 — Provider descriptor conformance suite (merged)](https://github.com/Hmbown/CodeWhale/pull/3502)**  
   Network-free conformance tests for all 27 shipped `ProviderKind`s. Adding a new provider without wiring its descriptor will now fail CI here.

8. **[#3501 — Offering pricing projection with provenance (merged)](https://github.com/Hmbown/CodeWhale/pull/3501)**  
   Maps catalog offerings into provider/offering-scoped pricing rows with explicit provenance. Pricing is now owned by the offering, not the model string.

9. **[#3516 — Fleet setup loadout TUI view (open)](https://github.com/Hmbown/CodeWhale/pull/3516)**  
   Adds a `/fleet` TUI panel with left-to-right lanes for role, profile, loadout, policy, and recursion. Surfaces provider/model route, concurrency, token/timeout policy, and `.codewhale/agents` profile location.

10. **[#3513 — Workspace agent profile loading (open)](https://github.com/Hmbown/CodeWhale/pull/3513)**  
    Discovers `.codewhale/agents/*.toml` files and normalizes them into `FleetProfile` vocabulary. Explicitly rejects hidden provider/model policy fields and permission-expanding posture requests.

## Feature Request Trends

- **Multi-provider, multi-model routing** is the dominant theme: every third issue touches provider/model separation, offering catalogs, route resolution, or Fleet profiles. The project is clearly evolving from a single-model TUI into a multi-provider execution harness.
- **Chinese-provider integration** is emerging: the GLM-5.2 request (#3439) is detailed and well-researched, referencing existing `model_strength` planning in the Constitution. Expect more region-specific provider requests.
- **Fleet/sub-agent orchestration** is the second major wave: #3167, #3205, #3154, #3367 all deal with profiled workers, role-based delegation, and multi-agent execution at scale.
- **Visual/UX polish** continues: approval modals (#3437/#3515), provider readiness dashboards (#3083), and cross-provider model search (#3075) show attention to daily workflow friction.

## Developer Pain Points

1. **TUI freezes and stalls** — #2487 (17 comments) and #1812 (8 comments) are the most urgent. Both involve the UI becoming completely unresponsive, often forcing process kills. No fix has shipped for either.

2. **Agent over-autonomy** — #3275 (11 comments) describes agents that self-generate work, deviating from user intent. This is a regression, suggesting the architecture changes around provider routing may have introduced behavioral drift.

3. **Cross-session state loss** — #2492 (5 comments) and related memory/complaints indicate that session persistence is not reliable. Memory writes and reads across restarts are broken, reducing the tool's utility for sustained work.

4. **Configuration opacity** — #3303 (3 comments) captures a broader frustration: documented config keys exist but cannot be discovered, edited, or persisted from the TUI. Users feel locked into default behavior even when the underlying model supports customization.

5. **Resource leak visibility** — #3461 (4 comments, MCP duplicate processes) and #2666 (agent token/resource visibility) both point to a lack of instrumentation. Developers want to see what resources their tools are consuming, especially during long-running agent tasks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*