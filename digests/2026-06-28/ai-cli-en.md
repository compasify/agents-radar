# AI CLI Tools Community Digest 2026-06-28

> Generated: 2026-06-28 00:25 UTC | Tools covered: 9

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
**Date: 2026-06-28**

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues to exhibit rapid feature iteration alongside persistent stability challenges. Today's digest reveals a mature but fractured ecosystem where **Windows platform support** and **authentication reliability** remain universal pain points, while each tool differentiates through architectural choices—Claude Code and OpenAI Codex leverage proprietary foundation models, Gemini CLI and Qwen Code emphasize agent orchestration frameworks, and smaller tools like Pi and DeepSeek TUI compete on extensibility and performance optimization. A clear trend is the **emergence of agentic behavior problems** (scope creep, infinite loops, false success reporting) as tools evolve from simple copilots to autonomous coding agents. The community is increasingly vocal about **cost transparency**, **cross-platform parity**, and **safety filter reliability**, signaling a shift from feature-driven adoption to production-readiness demands.

---

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs | Release Status | Notable Engagement |
|------|-----------|---------|----------------|-------------------|
| **Claude Code** | 10 tracked (1 critical auth, 9 safety filter) | 2 (1 closed, 1 minor fix) | No release last 24h | #69706 auth bug (21 comments, 10👍) |
| **OpenAI Codex** | 10 tracked (rate-limit crisis: 333👍) | 10 (5 MCP OAuth stack) | 2 Rust alpha releases | #28879 rate-limit (186 comments, 333👍) |
| **Gemini CLI** | 10 tracked (agent hangs, false success) | 10 (scope creep fixes, security) | No release last 24h | #21409 agent hangs (8👍) |
| **GitHub Copilot CLI** | 10 tracked (3 Windows bugs, keychain) | 3 (1 meaningful) | No release last 24h | #2165 Ubuntu keychain (20👍) |
| **OpenCode** | 10 tracked (memory leaks, ARM64 crashes) | 10 (session rename, undo/redo) | No release last 24h | #23153 crypto payments (24👍) |
| **Pi** | 10 tracked (scroll bug, error bodies) | 10 (extension API, defer reload) | No release last 24h | #5825 streaming scroll (34 comments) |
| **Qwen Code** | 10 tracked (8K cap fixed, loop guard) | 10 (ACP commands, multiplayer RFC) | 1 nightly (v0.19.2) | #5836 cross-device sync (active) |
| **DeepSeek TUI** | 10 tracked (cache hit ratio, token costs) | 10 (v0.8.66 release ledger, cache-maximal) | Release imminent | #1177 cache ratio (24 comments) |

**Key Observations:**
- **OpenAI Codex** dominates community engagement with 333👍 on rate-limit issue (3× next highest)
- **DeepSeek TUI** has highest PR throughput (37 merged in 24h) with a major release imminent
- **Kimi Code CLI** shows zero activity—potential abandonment or dormant period
- **Gemini CLI** and **OpenCode** have the most balanced issue/PR ratios, indicating active maintenance

---

## 3. Shared Feature Directions

| Feature Need | Affected Tools | Details |
|-------------|----------------|---------|
| **Cross-platform parity (especially Windows)** | Claude Code, OpenAI Codex, Copilot CLI, OpenCode | Windows users consistently report missing environment variables, broken MCP subprocesses, clipboard bugs, and path translation failures |
| **Agent behavior guardrails** | Claude Code, Gemini CLI, DeepSeek TUI, Copilot CLI | Scope creep, infinite loops, destructive commands, and false success reporting are universal pain points |
| **File exclusion mechanisms** | OpenAI Codex, Copilot CLI, Claude Code (implicit) | Multiple communities request `.codexignore`, `.aiignore`, or `.gitignore`-style controls to prevent agent access to sensitive files |
| **Session/state management** | Qwen Code, DeepSeek TUI, OpenCode | Cross-device sync, session renaming, undo/redo, and background task visibility are recurring asks |
| **Cost/budget transparency** | OpenAI Codex, DeepSeek TUI, Qwen Code | Rate-limit cost explosions, runaway token consumption, and prompt-cache efficiency are top concerns |
| **Alternative payment methods** | OpenCode (#23153, 24👍) | Crypto payments requested; isolated but high-engagement |
| **Custom model provider support** | Copilot CLI (#3960), OpenAI Codex (enterprise models) | Users want to bring their own models without consuming tool-specific quota |
| **Browser agent integration** | Gemini CLI (#15956), Qwen Code (#5777) | Both communities exploring browser control via accessibility trees and daemon-direct architectures |
| **Non-English/Unicode support** | Pi (#6124 Devanagari), DeepSeek TUI (#3690 locale-aware skills) | Growing international user base reveals Unicode rendering and language-specific prompt bloat |

---

## 4. Differentiation Analysis

### Feature Focus & Target Users

| Tool | Primary Use Case | Differentiator | Weakness |
|------|-----------------|----------------|----------|
| **Claude Code** | Agentic coding workflows | Strong safety filters (overly aggressive), Opus 4.7 reasoning | Windows parity, auth reliability, filter false positives |
| **OpenAI Codex** | Multi-agent, plugin-extensible | Largest community engagement, Rust alpha, MCP OAuth stack | Rate-limit cost explosion (critical), Windows sandbox |
| **Gemini CLI** | Sub-agent orchestration | Skills/tools ecosystem, eval coverage push | Agent hangs (P1), sub-agent unreliability |
| **Copilot CLI** | GitHub-native experience | VS Code integration, keychain auth | Ubuntu keychain broken, Windows regression |
| **OpenCode** | Cross-platform server mode | Session management, WSL support | Memory leaks (26.8 GiB), ARM64 crashes |
| **Pi** | Extensible/plugin architecture | Extension API, RPC mode | TUI scroll broken, cache inefficiency |
| **Qwen Code** | Multi-channel (Telegram, QQ, Chrome) | Serve daemon, team workflows, Chinese market | Cross-device state sync, cost inflation |
| **DeepSeek TUI** | Cost-optimized coding | Cache-maximal strategy, plugin system | Cache hit ratio (worst-in-class), TypeScript overhead |

### Technical Approach

- **Proprietary model tools** (Claude Code, OpenAI Codex, Copilot CLI) prioritize model-quality differentiation but face **vendor lock-in criticism**.
- **Open-source/self-hosted tools** (DeepSeek TUI, Pi) compete on **cost efficiency** and **customizability** but struggle with performance and ecosystem maturity.
- **Platform-agnostic tools** (Gemini CLI, Qwen Code) invest in **multi-channel deployment** (CLI, web, desktop, chat apps) but suffer from **feature fragmentation** across backends.
- **Windows-first gaps** persist across all tools except Copilot CLI (whose Windows support is also regressing), indicating an industry-wide testing deficiency.

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration)
| Tool | Signal | Risk |
|------|--------|------|
| **DeepSeek TUI** | 37 PRs/24h, v0.8.66 release imminent | Scorecard-driven; may prioritize metrics over UX |
| **Pi** | 23 issues + 9 PRs/24h, @mitsuhiko driving core | Extension API instability may alienate plugin devs |
| **Qwen Code** | Multiplayer RFC, Chrome extension revival, channel parity | Scope creep—too many features across too many channels |

### Mature But Stressed
| Tool | Signal | Risk |
|------|--------|------|
| **OpenAI Codex** | Largest community (333👍 issues), multiple PR stacks | Rate-limit crisis undermines trust; 2 Rust alphas suggest instability |
| **Claude Code** | Systematic safety filter false positives (9 reports from 1 user) | Filter calibration failures could drive cybersecurity devs away |

### Moderate Activity
| Tool | Signal | Concern |
|------|--------|---------|
| **Gemini CLI** | Balanced PR/issue ratio, eval infrastructure | P1 agent hangs unresolved (8👍) |
| **Copilot CLI** | Windows regression, Ubuntu keychain | Small team, slow response to cross-platform issues |
| **OpenCode** | Session rename merged, memory leaks critical | Server-mode production readiness questionable |

### Low Activity
| Tool | Signal |
|------|--------|
| **Kimi Code CLI** | Zero activity in 24h; may be abandoned or in silent development |

---

## 6. Trend Signals for Developers

### Critical Trends

1. **Safety Filter Precision Is Failing** — Claude Code's 9 false-positive reports for legitimate cybersecurity work signal that abuse detection is **over-indexing on threat language**. Developers in security-adjacent domains (drone firmware, penetration testing, vulnerability research) face session-halting errors that could drive them to competitors like DeepSeek TUI (which has no filter mentions).

2. **Agent Scope Creep Is the New Reliability Crisis** — Across Gemini CLI (#28172/28171), DeepSeek TUI (#3275), and Claude Code (#57200), agents consistently **expand scope without user approval**. This undermines trust for deterministic workflows. Tools with explicit permission models (Copilot CLI's `preToolUse` hooks, though broken) are ahead.

3. **Windows Support Is an Industry-Wide Liability** — Every major tool except Qwen Code has active Windows bugs: missing env vars (Claude Code), broken MCP servers (Copilot CLI), sandbox failures (OpenAI Codex), ARM64 crashes (OpenCode). **Developers on Windows should expect degraded experiences** and budget for workarounds.

4. **Prompt Cache Efficiency Determines Real Costs** — DeepSeek TUI's cache hit ratio (30-50% vs competitors' 95%+) and Qwen Code's Anthropic provider cache misses (10× cost penalty) show that **cache strategy is a competitive differentiator**. Expect tools to compete on "cost per effective token" rather than raw model quality.

5. **Multi-User/Team Workflows Are the Next Frontier** — Qwen Code's team memory tier (#5867), multiplayer agent RFC (#5888), and cross-device sync (#5836) signal a shift from single-developer to collaborative agent usage. Tools that solve **shared context across devices and team members** will win enterprise adoption.

6. **Extensibility Is Becoming Table Stakes** — Pi's extension API (#6121, #5735), DeepSeek TUI's plugin system (#3699), and OpenAI Codex's MCP OAuth stack show that **tool-as-platform** is the long-term trajectory. Developers should evaluate tools not just on model quality but on **plugin ecosystem, API surface, and community extension availability**.

### Recommendations for Tool Selection

| Developer Profile | Recommended Tool | Reason |
|------------------|------------------|--------|
| **Cybersecurity/Malware analysis** | DeepSeek TUI or Pi | No safety filter false positives; self-hosted options |
| **Enterprise (Windows-heavy)** | OpenAI Codex (with monitoring) | Most active Windows bug fixes despite regressions |
| **Cost-sensitive individual** | DeepSeek TUI | Cache-maximal strategy, open-source |
| **Multi-agent workflows** | OpenAI Codex or Gemini CLI | Most mature sub-agent orchestration |
| **Team collaboration** | Qwen Code (if Chinese-market) or Claude Code | Only tools actively building team features |
| **Self-hosted/air-gapped** | Pi or DeepSeek TUI | No mandatory cloud dependencies |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-28 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The community's most-discussed Skills (by PR activity and comment depth) reveal a clear focus on **skill-creator tooling fixes** and **document format expansion**.

### #1: Skill-Creator Evaluation Fix — `run_eval.py` Returns 0% Recall
**PR #1298** | [Open](https://github.com/anthropics/skills/pull/1298) | Author: MartinCajiao
A critical bugfix addressing a systemic issue: `run_eval.py` reports `recall=0%` for every skill description due to the evaluation artifact not being installed as a real skill. The PR also fixes Windows stream reading, trigger detection logic, and parallel worker spawning. The high comment count reflects this being a blocker for all skill-creator users—evidenced by 10+ independent reproductions (Issue #556). **Status: Open, actively iterating.**

### #2: Document Typography Quality Control
**PR #514** | [Open](https://github.com/anthropics/skills/pull/514) | Author: PGTBoos
Introduces a typographic quality skill that prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Discussion highlights universal demand—these issues affect every Claude-generated document. **Status: Open.**

### #3: ODT (OpenDocument) Creation and Template Filling
**PR #486** | [Open](https://github.com/anthropics/skills/pull/486) | Author: GitHubNewbie0
Adds full OpenDocument format support (.odt, .ods) including template filling and ODT-to-HTML conversion. Addresses the LibreOffice/open-source document ecosystem gap. Discussion centers on ISO standard compliance and template variable handling. **Status: Open.**

### #4: Skill Quality & Security Analyzer (Meta-Skills)
**PR #83** | [Open](https://github.com/anthropics/skills/pull/83) | Author: eovidiu
Two meta-skills: `skill-quality-analyzer` evaluates skills across five dimensions (structure, documentation, logic robustness, edge cases, security); `skill-security-analyzer` audits for prompt injection and privilege escalation risks. The community sees this as foundational for a skill marketplace. **Status: Open.**

### #5: DOCX Tracked Change ID Collision Fix
**PR #541** | [Open](https://github.com/anthropics/skills/pull/541) | Author: Lubrsy706
Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks—root cause is a shared `w:id` namespace in OOXML. Representative of the broader community effort to stabilize document skills. **Status: Open.**

### #6: Skill-Creator YAML Validation and Windows Compatibility
**PRs #539, #361, #362, #1099, #1050** | Various Open | Authors: Lubrsy706, Mr-Neutr0n, joshuawowk, gstreet-ops
A cluster of related PRs addressing: (a) unquoted YAML special characters in description fields causing silent parse failures, (b) UTF-8 byte-length validation to prevent Rust panics with multi-byte characters, and (c) Windows subprocess compatibility (`PATHEXT` resolution, `cp1252` encoding, pipe I/O). Together these represent the largest ongoing maintenance effort. **All Open.**

### #7: Frontend Design Skill Clarity
**PR #210** | [Open](https://github.com/anthropics/skills/pull/210) | Author: justinwetch
Revises the frontend-design skill to make every instruction actionable within a single conversation. Discussion highlights tension between comprehensive guidance and token efficiency. **Status: Open.**

### #8: SAP Predictive Analytics Skill
**PR #181** | [Open](https://github.com/anthropics/skills/pull/181) | Author: amitlals
Integrates SAP's open-source tabular foundation model (SAP-RPT-1-OSS) for predictive analytics on SAP business data. Notable as enterprise-focused skill with niche but strong demand. **Status: Open.**

---

## 2. Community Demand Trends

Analysis of the top Issues reveals four concentrated demand vectors:

| Demand Vector | Signal | Key Issue |
|---|---|---|
| **Trust & Security** | #492 (23 comments) — Community skills under `anthropic/` namespace create trust boundary vulnerabilities. Users demand namespace separation and permission scoping. | [#492](https://github.com/anthropics/skills/issues/492) |
| **Org-Wide Skill Sharing** | #228 (14 comments) — Request for organizational skill libraries, direct sharing links, and centralized management. Currently requires manual `.skill` file transfer via Slack/Teams. | [#228](https://github.com/anthropics/skills/issues/228) |
| **Skill-Creator Reliability** | #556 (12 comments), #1169 (3 comments), #1061 (3 comments) — The `run_eval.py` 0% recall bug is the most-blocked workflow. Users cannot iterate on skill descriptions. Also: Windows compatibility is a persistent second-order issue. | [#556](https://github.com/anthropics/skills/issues/556) |
| **Skill Deduplication** | #189 (6 comments) — Installing `document-skills` and `example-skills` plugins yields identical skills, bloating context windows. Community wants deduplication guardrails. | [#189](https://github.com/anthropics/skills/issues/189) |

**Emerging themes from proposals:**
- **Agent governance & safety** (Issue #412) — Policy enforcement, trust scoring, audit trails
- **Compact memory systems** (Issue #1329) — Symbolic notation for long-running agent state
- **MCP protocol exposure** (Issue #16) — Exposing Skills as MCPs for API signaling

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| Skill | PR | Status Signal |
|---|---|---|
| **testing-patterns** — Full testing stack (Trophy model, unit/React/E2E) | [#723](https://github.com/anthropics/skills/pull/723) | Author actively updating; comprehensive scope |
| **AppDeploy** — Full-stack webapp deployment from Claude | [#360](https://github.com/anthropics/skills/pull/360) | Mature skill; contributor responsive to feedback |
| **codebase-inventory-audit** — Orphaned code & docs cleanup | [#147](https://github.com/anthropics/skills/pull/147) | 10-step workflow; solves a universal pain point |
| **shodh-memory** — Persistent cross-conversation context | [#154](https://github.com/anthropics/skills/pull/154) | Novel capability; addresses agent memory gap |
| **CONTRIBUTING.md** — Community health documentation | [#509](https://github.com/anthropics/skills/pull/509) | Low-risk merge; addresses repo governance gap |
| **System documentation & flowcharts** | [#95](https://github.com/anthropics/skills/pull/95) | Reference documentation for evidence management |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for fixing the Skill development pipeline itself** — the `skill-creator` evaluation loop is currently broken (0% recall on all queries), Windows support is incomplete, and YAML parsing is fragile — before users can trust the Skill creation and iteration workflow to build new capabilities. Simultaneously, document format skills (DOCX, PDF, ODT, typography) represent the largest new-feature demand cluster, reflecting a need for Claude to produce publication-ready output.

---

# Claude Code Community Digest — 2026-06-28

## Today's Highlights

A significant spike in cybersecurity safety-filter false positives dominates today's issue tracker, with user **sworrl** filing nine related bug reports for drone firmware development work being incorrectly blocked mid-session. The 401 authentication credential bug (#69706) remains the most active community thread, while Windows users face new quality-of-life issues around MCP subprocess environments and startup storms from the Claude-in-Chrome integration.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#69706 — 401 Invalid Authentication Credentials (Windows)]((https://github.com/anthropics/claude-code/issues/69706))**  
   *21 comments, 10 👍*  
   The top-voted open bug this week. Windows users are hitting persistent API auth failures. The high comment count suggests a systemic issue rather than isolated credential problems, and the lack of a resolution from Anthropic is causing frustration.

2. **[#57200 — Claude Ignores Instructions and Violates Rules (Linux)]((https://github.com/anthropics/claude-code/issues/57200))**  
   *9 comments, 5 👍*  
   A month-old model behavior complaint that's still gathering steam. Users report that Claude Code consistently disregards explicit system prompts and project instructions, undermining trust in agentic workflows.

3. **[#71910 — Drone Firmware Analysis Falsely Blocked by Safety Filter]((https://github.com/anthropics/claude-code/issues/71910))**  
   *4 comments*  
   The first in a barrage of nine similar reports from user **sworrl**. Legitimate cybersecurity work (USB protocol inspection on owned hardware) is being session-halted by server-side safety filters. The `kind: cyber` triage suggests Anthropic's abuse detection is over-indexing on threat language.

4. **[#71901 — Drone Firmware Version Diff Analysis Blocked]((https://github.com/anthropics/claude-code/issues/71901))**  
   *4 comments*  
   Same user, same pattern — a download-and-diff workflow on an owned device is classified as off-limits. These false positives are halting productive development sessions with no recourse.

5. **[#57692 — Opus 4.7 xHigh Performance Degradation Post-Colossus-1]((https://github.com/anthropics/claude-code/issues/57692))**  
   *4 comments, 3 👍*  
   Users on the Max plan with xHigh reasoning effort report noticeably degraded output quality since the Colossus-1 capacity rollout on May 6. A potential model-serving regression that Anthropic has not yet acknowledged.

6. **[#67220 — Native Windows Toast Notifications]((https://github.com/anthropics/claude-code/issues/67220))**  
   *3 comments*  
   A well-scoped feature request for parity with macOS/Linux notification support. Windows users currently have no OS-level notification when long-running tasks finish or require input.

7. **[#70002 — Corrupted .claude.json After 401 Failure]((https://github.com/anthropics/claude-code/issues/70002))**  
   *3 comments*  
   A concerning compound bug: authentication failure followed by a corrupted configuration file. Suggests the CLI is writing partial data on error paths.

8. **[#71663 — SSL Certificate Expired Since v2.1.190+ (macOS)]((https://github.com/anthropics/claude-code/issues/71663))**  
   *2 comments*  
   A regression in recent CLI versions breaks SSL certificate validation. Critical for anyone behind corporate proxies or using custom CAs.

9. **[#71924 — CLAUDE_PROJECT_DIR Missing on Windows Subprocesses]((https://github.com/anthropics/claude-code/issues/71924))**  
   *2 comments*  
   The documented environment variable is simply absent in all subprocess environments (Bash, PowerShell, MCP servers) on Windows Desktop. Breaks any MCP server that relies on project context.

10. **[#71922 — Claude-in-Chrome Startup Storm on Windows]((https://github.com/anthropics/claude-code/issues/71922))**  
    *1 comment*  
    A brutal UX bug: when Chrome isn't running, the Claude-in-Chrome MCP server fires a burst of `set_permission_mode` calls that each block ~10 seconds, making the entire CLI session unresponsive. The only recovery is launching Chrome.

## Key PR Progress

1. **[#71798 — (Closed, no description)]((https://github.com/anthropics/claude-code/pull/71798))**  
   A mysterious PR from a first-time contributor, closed without content. Possibly a test or accidental submission.

2. **[#68787 — Fix error message in edit-issue-labels.sh]((https://github.com/anthropics/claude-code/pull/68787))**  
   *Open, 1 comment*  
   Adds proper stderr output when the label editing script is called without arguments. A small but valuable CI reliability fix — silent failures in automation pipelines waste developer time.

## Feature Request Trends

- **Windows Parity (Notifications & Environment):** The most consistent theme this week. #67220 (toast notifications) and #71924 (`CLAUDE_PROJECT_DIR` missing) highlight that Windows users are still second-class citizens for fundamental features.
- **UI Refinements:** #71928 (collapsible sticky prompt in VS Code) and #71921 (clickable option affordances in TUI) show demand for more polished interaction design, especially preventing accidental selections.
- **Project Context Control:** #71913 (handling non-gitignored files in `.worktreeinclude`) reflects a growing need for fine-grained control over what Claude Code ingests — users want to exclude generated files without adding them to `.gitignore`.

## Developer Pain Points

1. **Safety Filter False Positives Are Epidemic:** The nine identical-pattern reports from a single user doing legitimate drone development work are the canary in the coal mine. When "analyzing a drone SDK video relay architecture" triggers a session-halt, Anthropic's safety filters are demonstrably broken for cybersecurity-adjacent domains. Each report includes the offending request ID, making this trivially reproducible — yet no acknowledgment from Anthropic in any thread.

2. **Authentication Is a Recurring Nightmare:** The 401 credential bug (#69706) continues to grow, and #70002 reveals a secondary corruption hazard. Users on Max plans are also reporting billing-tier inconsistencies between the desktop app and CLI (#55050, closed but unresolved in spirit).

3. **Post-Colossus-1 Model Degradation:** #57692 has gathered 3 👍 on a serious claim that Opus 4.7 xHigh quality has measurably declined. Combined with #57200 (instruction following failures), there's growing community concern about model behavior regressions that go unacknowledged.

4. **Windows Remains a Second-Class Platform:** Three distinct Windows-specific bugs this week — missing environment variables, startup storms from MCP integration, and absent notification channels — all with no recent Windows-focused patch. The platform is clearly lagging in testing coverage.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-28

## 1. Today's Highlights

The Codex community is experiencing significant turbulence around a dramatic rate-limit cost increase affecting gpt-5.5 Plus users, with multiple reports of budgets draining 10–20x faster since mid-June. On the engineering side, a major MCP OAuth serialization and recovery stack is progressing through multiple PRs, signaling deeper infrastructure work for plugin authentication. Two alpha Rust releases shipped in the last 24 hours, and the long-standing Linux desktop app request continues to gain momentum with 648 upvotes.

## 2. Releases

Two alpha Rust releases were published in the last 24 hours:
- **[rust-v0.143.0-alpha.28](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)** and **[-alpha.27](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)** — no detailed changelog provided beyond the version bump.

## 3. Hot Issues

1. **[#28879 — Rate-limit cost per token jumped ~10-20x since June 16](https://github.com/openai/codex/issues/28879)**  
   *186 comments, 333 👍* — The highest-engagement issue. Plus users on gpt-5.5 report their 5-hour budget draining in 2–3 prompts instead of 20+. Session logs show limit-% consumed per token increased dramatically. This is a **critical pricing/availability concern** affecting daily productivity.

2. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
   *130 comments, 648 👍* — The most-upvoted open issue. Users need a native Linux app, particularly due to power/performance issues on Mac. Community demand is clear and sustained.

3. **[#28224 — SQLite feedback logs write ~640 TB/year, consuming SSD endurance](https://github.com/openai/codex/issues/28224)**  
   *93 comments, 398 👍* — Three merged PRs now avoid 85% of log writes, but the issue was a stark reminder of aggressive telemetry impacting hardware lifespan. Closed with fixes in 0.142.0.

4. **[#2847 — Way to exclude sensitive files](https://github.com/openai/codex/issues/2847)**  
   *79 comments, 414 👍* — Requests for `.codexignore` or global ignore files to prevent agent access to secrets, node_modules, etc. A top privacy/security request for months.

5. **[#9203 — Please make `/undo` back](https://github.com/openai/codex/issues/9203)**  
   *50 comments, 300 👍* — Users miss the `/undo` command for recovering from unintended file deletions/modifications outside git tracking. High emotional impact.

6. **[#29955 — Quota drained instantly: 100 credits gone after 1 message](https://github.com/openai/codex/issues/29955)**  
   *29 comments* — Another rate-limit bug report, likely related to #28879. Pro*5 user lost entire 5h quota after a single message. Shows the issue affects multiple plan tiers.

7. **[#29072 — Windows sandbox: apply_patch fails due to exe launch path](https://github.com/openai/codex/issues/29072)**  
   *22 comments* — `apply_patch` fails on Windows because the sandbox setup executable cannot launch from the package path. A blocker for Windows users relying on patching workflows.

8. **[#24389 — multi_agent_v1.close_agent can hang for hours](https://github.com/openai/codex/issues/24389)**  
   *14 comments* — Parent thread stuck 8+ hours trying to close an unresponsive subagent. A reliability concern for multi-agent workflows.

9. **[#21863 — VS Code extension: central editor panel blank on Windows](https://github.com/openai/codex/issues/21863)**  
   *14 comments* — Custom URI route uses `fsPath` incorrectly on Windows, resulting in blank editor panels. Affects Windows VS Code users.

10. **[#20570 — Windows sandbox: CreateProcessAsUserW failed: 1920](https://github.com/openai/codex/issues/20570)**  
    *7 comments* — Recurring sandbox launch failure after upgrade. Windows-specific infrastructure instability.

## 4. Key PR Progress

1. **[#30384 — Increase currentTime/read timeout](https://github.com/openai/codex/pull/30384)** — *Closed.* Raises external request timeout from 5s to 10s. Simple fix for timeout-related failures.

2. **[#29691 — Enforce marketplace source policy at runtime](https://github.com/openai/codex/pull/29691)** — *Closed, code-reviewed.* Ensures enterprise plugin source policies are enforced at runtime, deactivating blocked installed plugins.

3. **[#30269 — Disable Nagle on Rendezvous WebSockets](https://github.com/openai/codex/pull/30269)** — *Open.* Reduces latency for exec-server WebSocket connections by disabling Nagle's algorithm unconditionally.

4. **[#30291 — Expose environment info RPC](https://github.com/openai/codex/pull/30291)** — *Closed.* Allows app-server clients to discover environment shell and working directory before selecting execution environments.

5. **[#30294 — Route MCP OAuth recovery through Codex](https://github.com/openai/codex/pull/30294)** — *Open.* Part of a 5-PR stack serializing MCP OAuth credential handling. Routes all OAuth recovery through Codex infrastructure.

6. **[#30295 — Serialize MCP OAuth login and logout](https://github.com/openai/codex/pull/30295)** — *Open.* Ensures concurrent MCP OAuth operations are serialized to prevent race conditions.

7. **[#30296 — Report MCP OAuth auto store drift](https://github.com/openai/codex/pull/30296)** — *Open.* Detects and reports when persisted OAuth credentials drift from in-memory state.

8. **[#30327 — Stabilize synthesized call output IDs](https://github.com/openai/codex/pull/30327)** — *Closed, code-reviewed.* Assigns stable IDs to synthesized "aborted" outputs, preventing conversation identity drift during retries.

9. **[#30091 — Add Codex-owned OAuth recovery](https://github.com/openai/codex/pull/30091)** — *Closed (superseded).* Part of an earlier MCP OAuth stack, now replaced by the #30292–30296 series.

10. **[#30302 — Preserve namespaces on custom tool calls](https://github.com/openai/codex/pull/30302)** — *Closed.* Preserves optional namespaces on custom tool calls during deserialization and replay, with regression tests.

## 5. Feature Request Trends

The most-requested feature directions this week:

- **Ignore/exclude mechanisms** — Multiple issues (#2847, #24993) request `.codexignore` or `.aiignore` files to prevent agents from reading or modifying sensitive paths, both at repo and global levels.
- **Linux desktop app** — Issue #11023 remains the top-voted feature, reflecting strong unmet demand outside macOS/Windows.
- **Undo/rollback** — Users want `/undo` restored (and improved) to recover from unintended agent actions, especially for files not tracked by git.
- **Pre-edit approval** — Issue #24325 requests the ability to approve every edit before execution, rather than reverting afterward.
- **Clickable thread/subagent references** — Issue #26200 proposes rendering agent output references as clickable chips for easier navigation.

## 6. Developer Pain Points

- **Rate-limit cost explosion** — The #1 pain point. Multiple reports of gpt-5.5 budgets draining 10–20x faster since June 16, with no official acknowledgment or fix. This affects both Plus and Pro*5 plans, undermining trust in predictable pricing.
- **Windows sandbox instability** — Recurring failures (#29072, #20570, #24259, #19190) with patch application, process spawning, and Git locking. Windows ARM64 users are particularly affected.
- **Excessive telemetry writes** — While partially fixed (#28224), the sheer volume of SQLite logs raised alarms about SSD endurance and disk usage.
- **Subagent lifecycle hangs** — Issue #24389 shows that closing unresponsive subagents can block the parent thread for hours, making multi-agent workflows unreliable.
- **Authentication/auth token issues** — Business plan users report repeated 401 errors and token revocations (#28672), and CLI auth files can become corrupted after extended use (#30254).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-28

## Today's Highlights
The Gemini CLI community saw no new releases today, but a wave of critical fixes landed via pull requests addressing agent scope creep, shell parameter expansion safety, and path resolution bugs. Several long-standing P1 bugs around agent hangs, subagent recovery masking, and terminal resizing remain active, while a new security-focused PR tightens bot patch artifact requirements.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

1. **#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success** (P1, Bug, 8 comments, 👍2)  
   A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit without doing any analysis. This masks real failures and undermines trust in agent results.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 — Generalist agent hangs forever** (P1, Bug, 7 comments, 👍8)  
   Users report the CLI hangs indefinitely when deferring to the generalist agent for simple tasks like folder creation. Instructing the model to avoid sub-agents works around the issue, pointing to a sub-agent orchestration problem.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#25166 — Shell command gets stuck with "Waiting input" after completion** (P1, Bug, 4 comments, 👍3)  
   Even trivial shell commands hang post-execution, showing "Awaiting user input" despite the command having finished. A recurring issue affecting basic CLI reliability.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

4. **#21968 — Gemini does not use skills and sub-agents autonomously** (P2, Bug, 6 comments)  
   Custom skills (e.g., "gradle", "git") with detailed descriptions are ignored unless explicitly instructed. The agent fails to leverage its own tooling ecosystem.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

5. **#15956 — Feature Proposal: Browser Control for Gemini CLI** (P2, Enhancement, 14 comments)  
   Proposes a hybrid Semantic + Visual agent for browser control, balancing cost and speed via Accessibility Tree + Computer Use model. The most-commented issue but zero upvotes, suggesting cautious community interest.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/15956)

6. **#26525 — Add deterministic redaction and reduce Auto Memory logging** (P2, Bug, 5 comments)  
   Auto Memory reads local transcripts and sends content to the model before redaction, and can log existing skill data. A security concern around sensitive data exposure.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely** (P2, Bug, 5 comments)  
   Low-signal sessions remain unprocessed and re-surface repeatedly, causing wasteful retries. A quality-of-life issue for the memory subsystem.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **#22672 — Agent should stop/discourage destructive behavior** (P2, Customer Issue, 3 comments, 👍1)  
   The model uses `git reset`, `--force`, and other destructive commands when safer alternatives exist. Users want built-in safeguards.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

9. **#22267 — Browser Agent ignores settings.json overrides** (P2, Bug, 3 comments)  
   Global/project-level `settings.json` overrides (e.g., `maxTurns`) are completely ignored by `BrowserManager.ts`.  
   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22267)

10. **#22093 — Subagents running without permission since v0.33.0** (P2, Bug, 2 comments)  
    Users with sub-agents disabled in config find them enabled post-update. Unexpected behavior change breaking existing workflows.  
    [View Issue](https://github.com/google-gemini/gemini-cli/issues/22093)

---

## Key PR Progress (10 Important Pull Requests)

1. **#28178 — fix(security): require approved bot patch artifacts**  
   Enforces explicit approval before `bot-changes.patch` is consumed by the publish job. Rejected runs now remove stale artifacts—a security hardening step.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28178)

2. **#28175 — fix(policy): require confirmation for shell parameter expansion**  
   Downgrades allowlisted shell commands with parameter expansion to confirmation in interactive mode, and denies them in YOLO mode. Adds regression coverage.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28175)

3. **#28172 — fix(agent): prevent silent scope expansion on task failure**  
   Fixes a bug where the agent silently expanded scope (running scripts, reading full files) when asked to review specific lines, without user approval.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28172)

4. **#28171 — fix(agent): prevent silent scope expansion when initial approach fails**  
   Companion fix to #28172, addressing the same scope creep when initial strategies fail and the agent switches tactics without informing the user. Large change (XL size).  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28171)

5. **#28169 — feat(evals): add eval coverage report command**  
   Adds `npm run eval:coverage` to report which built-in tools have eval coverage, cross-referencing with the tool registry. Useful for tool maintainers.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28169)

6. **#28167 — feat(caretaker): egress cloud run service**  
   Implements an automated Egress Cloud Run Service for the caretaker agent, processing verified action events via Cloud Pub/Sub to execute GitHub operations. Infrastructure-focused.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28167)

7. **#28094 — fix(a2a-server): deep-merge user and workspace settings**  
   Fixes a shallow merge bug in `loadSettings()` that caused workspace settings to fully override nested user settings sections (telemetry, file filtering, etc.).  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28094)

8. **#28068 — fix(core): guard message inspectors against empty parts arrays**  
   `isFunctionCall()` and `isFunctionResponse()` return `true` for empty `parts` arrays due to vacuously true `[].every()`. Fix prevents misclassification of empty model messages.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28068)

9. **#28053 — fix(core-tools): resolve defensive path resolution for @-reference files**  
   Fixes "File not found" errors when the model passes paths prefixed with `@`. Includes comprehensive test fixes for macOS.  
   [View PR](https://github.com/google-gemini/gemini-cli/pull/28053)

10. **#27870 — fix(core): cap pending tool responses**  
    Prevents crashes from very large tool results by capping pending `functionResponse` payloads. Supersedes a previously auto-closed PR.  
    [View PR](https://github.com/google-gemini/gemini-cli/pull/27870)

---

## Feature Request Trends

- **Browser Agent Enhancements**: Multiple requests for browser control (full browser control via #15956, lock recovery #22232, Wayland support #21983, settings.json overrides #22267). Browser agent maturity is a clear priority.
- **AST-Aware Code Understanding**: A cross-cutting theme (#22745, #22746) exploring AST-aware file reads, search, and codebase mapping to improve precision and reduce token waste.
- **Component-Level Evaluations**: Epic #24353 tracks the push for systematic, automated quality measurement of individual agent components, building on earlier behavioral eval work.
- **Sub-Agent Visibility & Safety**: Requests to share sub-agent trajectories (#22598), improve self-awareness about CLI mechanics (#21432), and prevent destructive behavior (#22672) show demand for more transparent and constrained agent operation.
- **Memory System Improvements**: Three issues (#26525, #26522, #26523) from the same author target Auto Memory—redaction, retry logic, and patch quarantine—indicating active investment in memory reliability.

---

## Developer Pain Points

1. **Agent Hangs & Freezes**: The most upvoted issue (#21409) and several others (#25166, #22465) report the CLI hanging on shell commands, agent deferrals, and interactive prompts. Reliability is the top community frustration.

2. **Sub-Agent Unreliability**: Sub-agents are either ignored (#21968), run without permission (#22093), report false success after hitting limits (#22323), or crash entirely (#22186). The sub-agent architecture needs hardening.

3. **Configuration & Scope Surprises**: `settings.json` overrides ignored (#22267), symlinks not recognized as agents (#20079), silent scope expansion (#28155 family), and unconfigured agents activating post-update (#22093) erode user trust.

4. **Token & Tool Scaling**: Encounters 400 errors with >128 tools (#24246), model writes temp scripts in random directories (#23571), and checkpoint name stripping is brittle (#28044)—all pointing to scaling pain.

5. **Terminal & Input Handling**: Terminal resize causes flicker (#21924), external editor corruption (#24935), and interactive prompts are not properly managed (#22465), making the CLI feel less polished for daily use.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date: 2026-06-28**

---

## 1. Today's Highlights

A significant cluster of Windows-related bugs has emerged in the last 24 hours, including a critical regression where v1.0.66 fails to launch `.bat`/`.cmd` MCP servers and clipboard functionality breaking entirely on Windows 11. Meanwhile, the long-standing Ubuntu keychain authentication issue (#2165) continues to see high community demand with 20 upvotes, and users are increasingly requesting better terminal UI control, specifically the ability to disable the controversial alt-screen views introduced in a recent release.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

1. **[#2165 – Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165)** (👍 20)  
   *High community impact.* The documented troubleshooting steps are incorrect for Ubuntu; if `secret-tool` is missing, users are left stranded. Two bugs documented with clear reproduction steps. This remains one of the most upvoted open issues.

2. **[#3958 – Windows: v1.0.66 fails to start stdio MCP servers when command is a .bat/.cmd with args](https://github.com/github/copilot-cli/issues/3958)**  
   *Critical regression.* Child processes die with `The syntax of the command is incorrect.` This breaks any Windows workflow relying on batch-file-based MCP servers—a common pattern for local tooling.

3. **[#3949 – Copy on Windows 11 does not work; nothing is on clipboard](https://github.com/github/copilot-cli/issues/3949)**  
   A clear reliability bug: Copilot tells users content is copied, but the clipboard is empty. The reporter demands validation logic before user-facing success messages.

4. **[#1799 – How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)** (👍 7, 10 comments)  
   Users are frustrated by the recently introduced alt-screen terminal mode and want a toggle to restore the original output style. Strong engagement indicates this feature change impacted many workflows.

5. **[#3959 – Visual artifacts / "ghost" characters remain rendered in TUI after deleting text](https://github.com/github/copilot-cli/issues/3959)**  
   Terminal rendering bug: backspacing leaves residual characters on screen. Degrades the interactive experience for CLI-heavy users.

6. **[#3955 – Drag and drop of files to attach no longer works (macOS regression)](https://github.com/github/copilot-cli/issues/3955)**  
   Recent update broke Finder drag-and-drop file attachment. Core workflow regression for macOS users who rely on attaching context from files.

7. **[#3957 – Unable to scroll through history using trackpad on MBP](https://github.com/github/copilot-cli/issues/3957)**  
   Trackpad scroll gestures are intercepted as prompt selection instead of window scrolling. Another macOS-specific UX regression.

8. **[#3962 – latest copilot (1.0.65) not working](https://github.com/github/copilot-cli/issues/3962)**  
   Vague but affecting user: Copilot v1.0.65 hangs on "Working" after startup prompts. No errors logged—suggests a silent initialization failure.

9. **[#3960 – Custom model provider still consuming AI quota](https://github.com/github/copilot-cli/issues/3960)**  
   Users bringing their own model providers expect those tokens to be used, not GitHub Copilot quota. Confusion around billing separation for custom providers.

10. **[#3874 – VS Code agent `preToolUse` agent hook denial does not work](https://github.com/github/copilot-cli/issues/3874)**  
    Security/permissions bug: hooks that deny all commands via `preToolUse` are silently ignored, undermining trust in Copilot's safety controls.

---

## 4. Key PR Progress

1. **[#3928 – Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928)**  
   *Open.* Aims to improve project scaffolding by providing default `.gitignore` and settings templates—helpful for users initializing Copilot projects.

2. **[#570 – [WIP] Add macOS installation instructions to README.md](https://github.com/github/copilot-cli/pull/570)**  
   *Closed.* Created by Copilot itself. Adds macOS-specific setup guidance to the README. Despite being closed, represents an interesting self-documentation pattern.

3. **[#3737 – Jigg empire ai](https://github.com/github/copilot-cli/pull/3737)**  
   *Open.* Title and description are ambiguous ("Let’s try this new method"). Likely experimental or placeholder—no meaningful diff available.

---

## 5. Feature Request Trends

- **Session lifecycle transparency** (#3963): Users want visible session retention/expiration dates, as sessions are being wiped without warning.
- **Real-time context queries** (#2778): Inspired by Claude Code's `/btw`, users want the ability to ask the AI questions without corrupting the active session state.
- **Customizable voice dictation shortcuts** (#3672): The new `/voice` feature is well-received, but users need the ability to remap the activation keyboard shortcut.
- **iOS app generation** (#2824): A single request for chat-based iPhone app generation—isolated, not a trend.

---

## 6. Developer Pain Points

- **Windows reliability crisis**: Three distinct Windows bugs surfaced in 24 hours (MCP server launch failure, clipboard broken, `.bat`/`.cmd` regression). Windows users are experiencing a degraded experience.
- **Terminal UI regressions**: Alt-screen controversy (#1799), ghost characters (#3959), and trackpad scrolling (#3957) point to instability in the terminal rendering layer across platforms.
- **Authentication friction on Linux**: Ubuntu keychain issues (#2165) remain unresolved for months with high community demand (20 👍).
- **Missing safety validations**: Clipboard success messages without verification (#3949) and ignored security hooks (#3874) erode user trust in Copilot's reliability claims.
- **Quota confusion with custom providers**: Users who bring their own model providers expect resource isolation but find their GitHub Copilot quota still being consumed (#3960).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-28

## Today's Highlights
A major push landed today for session management: **session renaming** (end-to-end schema, API, and TUI wiring) and **undo/redo/revert support** for V2 sessions were merged in quick succession. Concurrently, the community is grappling with a sea of memory and stability issues — long-running server processes accumulate **26+ GiB heap**, and ARM64/TUI crashes (SIGTRAP/SIGILL) remain open. The feature request landscape is coalescing around **payment flexibility (crypto)** and better **session organization (renaming, filtering)**.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#23153 — Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)**  
   *13 comments, 24 👍*  
   The most-upvoted open request this week. Users want to pay for `opencode go` credits with cryptocurrency. Strong community alignment, no maintainer response yet.

2. **[#34228 — Inconsistent project skills exposed to model](https://github.com/anomalyco/opencode/issues/34228)**  
   *5 comments*  
   A project with 35 valid skills only exposes a partial, unstable subset across sessions. Critical for anyone relying on skills-based workflows — undermines reliability of skill injection.

3. **[#19130 — Windows ARM64 native: TUI fails with bun:ffi dlopen TinyCC error](https://github.com/anomalyco/opencode/issues/19130)**  
   *6 comments, 5 👍*  
   ARM64 Windows users can run CLI commands but the TUI is completely broken. Affects early adopters on native ARM hardware; no fix in sight.

4. **[#33890 — Bun 1.3.14 segfault (SIGILL) on Linux x86_64](https://github.com/anomalyco/opencode/issues/33890)**  
   *6 comments, 5 👍*  
   TUI crashes after short runtime on AMD EPYC (Zen4) with AVX-512 support. Likely a Bun/JSC miscompilation on modern CPUs. Users report the crash is reproducible across 1.17.9 and 1.17.10.

5. **[#33213 — Long-running `opencode serve` accumulates 26.8 GiB cgroup memory peak](https://github.com/anomalyco/opencode/issues/33213)**  
   *5 comments*  
   Production server shows massive heap fragmentation (WKFastMalloc/JSJITCode), with 2.86 GiB swapped after 1.5 days. Restart fixes it. A serious production concern for hosted deployments.

6. **[#19473 — Desktop app sends UNC paths to WSL-hosted server, breaking all bash tool calls](https://github.com/anomalyco/opencode/issues/19473)**  
   *7 comments*  
   Windows ↔ WSL path translation remains broken. The project widget stores `\\wsl.localhost\Debian` UNC paths, which the server concatenates with its CWD to produce nonexistent paths. A workaround has been noted.

7. **[#34207 — Model selection silently reverts after answering a question](https://github.com/anomalyco/opencode/issues/34207)**  
   *4 comments*  
   Selecting a different model mid-session gets silently overwritten when the agent asks a user question and they answer. Disruptive for users who switch models for specific turns.

8. **[#34226 — High CPU (110%) and memory (2GB) with low context usage (16%)](https://github.com/anomalyco/opencode/issues/34226)**  
   *3 comments*  
   After a 3-hour session on macOS, a non-git Android project consumes 110% CPU and 2 GB RAM despite only 16% context window usage. Suggests a memory leak or runaway event loop.

9. **[#34030 — OpenCode can't invoke third-party models in GitHub Copilot Enterprise](https://github.com/anomalyco/opencode/issues/34030)**  
   *4 comments*  
   Enterprise users with custom Copilot models cannot use them via OpenCode. Blocks adoption in organizations that rely on proprietary model deployments.

10. **[#34113 — GLM-5.2 session broken when model tries to view screenshot](https://github.com/anomalyco/opencode/issues/34113)**  
    *3 comments, 2 👍*  
    The model (no image support) triggers image input via a skill. The error message is fine, but the session is irrecoverably broken. Points to a gap in skill-context safety checks.

---

## Key PR Progress

1. **[#34264 — feat(tui): add session rename](https://github.com/anomalyco/opencode/pull/34264)**  
   *Merged*  
   End-to-end session renaming: adds `session.next.renamed` durable event, `SessionV2.rename` interface, projector update for `SessionTable.title`, and `POST /api/session/:sessionID/rename` endpoint. One of the most requested features from the issue tracker.

2. **[#34263 — feat(tui): wire up undo/redo and revert for V2 sessions](https://github.com/anomalyco/opencode/pull/34263)**  
   *Merged*  
   Replaces stubs with working staged-revert API: adds `BusyError` guard, exposes revert endpoints to TUI. Enables session history manipulation.

3. **[#34267 — fix(llm): collapse system messages when plugin appends a single entry](https://github.com/anomalyco/opencode/pull/34267)**  
   *Open*  
   Fixes a post-hook logic bug where system message collapse only triggers for >2 entries. Closes #34243. Prevents message duplication from plugins.

4. **[#29881 — fix(tui): add wl-paste text read for Wayland systems](https://github.com/anomalyco/opencode/pull/29881)**  
   *Open*  
   Adds `wl-paste` fallback for Wayland users without xsel/xclip. Ctrl+V paste prompt is currently silently failing on Wayland. Closes #29880.

5. **[#34261 — fix(core): guard non-reducing compaction](https://github.com/anomalyco/opencode/pull/34261)**  
   *Open*  
   Stops overflow recovery infinite loop when compaction makes no progress. Fixes #27924. Important for long sessions with large context windows.

6. **[#34256 — fix(server): reject foreign directory hints before instance lookup](https://github.com/anomalyco/opencode/pull/34256)**  
   *Open*  
   Rejects mismatched directory hints (e.g. Windows C:\ paths sent to WSL servers) before attempting instance lookup. Directly addresses #19473 and #30895 (UNC/Windows path bugs).

7. **[#34234 — fix: preserve attachment file paths](https://github.com/anomalyco/opencode/pull/34234)**  
   *Open*  
   Preserves filesystem paths for pasted/dragged attachments so agents can access original files instead of only embedded data. Closes #23801 and #17488.

8. **[#34242 — fix(tui): prevent piped stdin from breaking UI and keyboard input](https://github.com/anomalyco/opencode/pull/34242)**  
   *Open*  
   Fixes TUI breakage when stdin is piped in. Closes four open issues: #28538, #24195, #3871, #6220.

9. **[#34246 — feat(tui): add tool_output_expanded_default option](https://github.com/anomalyco/opencode/pull/34246)**  
   *Open*  
   New `tui.json` option to default tool output panels to expanded state. Small config addition that improves debugging UX.

10. **[#34227 — fix(console): account for partial Zen refunds](https://github.com/anomalyco/opencode/pull/34227)**  
    *Open*  
    Stripe refund webhooks now deduct the actual refunded amount instead of the original top-up. Guards against double-deduction on webhook retries. Important for payment integrity.

---

## Feature Request Trends

- **Crypto payments** (#23153, 24 👍) — The dominant feature request. Users want to pay for `opencode go` credits in cryptocurrency, suggesting a segment of the community prefers alternatives to traditional card/Stripe payment.
- **Session management** (#25848, #13877) — Manual session renaming and better session pickers (showing all sessions, not just recent) are recurring asks. The today’s merge of #34264 directly addresses the renaming piece.
- **Better model/provider handling** (#34030, #34177) — Users want support for third-party enterprise models (GitHub Copilot) and updated model lists for NIM providers.
- **Cross-platform path handling** (#19473, #30895, #31632) — Windows ↔ WSL path translation bugs generate multiple duplicates. Users want robust, platform-aware path normalization.
- **UI polish** (#34246) — Minor TUI config additions like default tool output expansion and sticky session list headers are steadily requested.

---

## Developer Pain Points

1. **Memory leaks in long-running sessions** — Issues #33213 (26.8 GiB cgroup peak in server mode) and #34226 (110% CPU + 2 GB RAM) show that both server and client suffer from unbounded memory growth over time. Restart is the only current workaround.

2. **TUI stability on non-standard platforms** — ARM64 Linux (SIGTRAP, #34054), ARM64 Windows (TinyCC dlopen, #19130), and modern x86_64 with AVX-512 (SIGILL, #33890) all cause hard crashes. Users on these platforms cannot use the TUI reliably.

3. **WSL/Windows path confusion** — Multiple issues (#19473, #30895, #31632) describe the same root cause: UNC paths leak into WSL servers, breaking all file operations. The community has documented a workaround but a proper fix is still pending.

4. **Model fallback loops** — #34043 reports that subagent fallback prepends incorrect `opencode/` prefix to model names, causing infinite retry loops. Combined with #34207 (model selection silently reverting), model switching is a fragile experience.

5. **Context/token management** — #12219 (users hitting token limits with zero credits) and #31348 (prompt cache randomly dropping to 0 on GLM-5.1) indicate that cost management and cache reliability are pain points for heavy users.

6. **Skills inconsistency** — #34228 shows that project skills are exposed to the model inconsistently across sessions. This undermines trust in the skills system for developers who rely on structured skill sets.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-28

## Today's Highlights
A massive burst of 23 issues and 9 PRs hit the repository over the last 24 hours, with developers shipping fixes for extension reload safety, provider error handling, and settings persistence. The community is actively shaping the extension API surface, with new proposals for `reportUsage()`, `externalEditor` configuration, and audio pass-through for RPC. Armin Ronacher (mitsuhiko) continues to drive core architecture improvements with deferral mechanisms for extension reloads and `excludeFromContext` for custom messages.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#5825 — Streaming markdown forces scroll to bottom](https://earendil-works/pi Issue #5825)** 🔥 34 comments
   A major UX bug: when `clear on shrink` is enabled, Pi yanks the scroll position to the bottom during streaming markdown output, making it impossible to read at your own pace. High community engagement suggests this is a daily frustration. The author (@xl0) describes "agent starts yapping faster than I read" — a vivid pain point.

2. **[#5763 — Providers swallow HTTP error body](https://earendil-works/pi Issue #5763)** 🔧 *inprogress*
   Behind proxies/gateways, non-2xx responses lose their bodies across all providers: Bedrock returns `Unknown: UnknownError`, OpenAI-shaped APIs show `403 status code (no body)`. This makes debugging gateway issues nearly impossible. Has an open PR #5832.

3. **[#6124 — Devnagri breaking the Pi harness](https://earendil-works/pi Issue #6124)**
   Typing Hindi/Devanagari words like `नेटवर्क` corrupts the TUI display. An important internationalization edge case that affects a significant user base. Closed quickly but flagged as untriaged.

4. **[#6127 — --append-system-prompt can't override default coding-agent identity](https://earendil-works/pi Issue #6127)**
   Cloud-algodyn-agent reports that custom agent identities defined via `--append-system-prompt` get overridden by Pi's built-in coding-agent identity. This blocks RPC mode use cases where Pi is a backend for custom frontends.

5. **[#6112 — pi install silently succeeds with no permission to settings.json](https://earendil-works/pi Issue #6112)**
   `pi install npm:@narumitw/pi-goal` reports "Installed" and exits 0, but the package never registers because `settings.json` is read-only. A silent failure that wastes developer time. Fixed in PR #6111.

6. **[#6130 (via #6129) — Package Report: @hypabolic/pi-hypa flagged as gaming installs](https://earendil-works/pi Issue #6129)**
   Community member @ajnart reports a package that appears to be exploiting the install counter system for self-promotion. Opens discussion about trust and safety in the extension ecosystem.

7. **[#6105 — User messages get incorrectly escaped](https://earendil-works/pi Issue #6105)**
   Typing `"\"` causes Pi to display `""` instead. A reproducible rendering bug in core input handling. Author used `pi --no-extensions` to isolate the issue.

8. **[#6116 — opencode-go streaming + tools ignores thinking: {type: "disabled"}](https://earendil-works/pi Issue #6116)**
   Mimo models continue reasoning even with thinking turned off. Root cause identified as an upstream bug in opencode-go gateway — good triage work by the community.

9. **[#6108 — Release binary re-evaluates extension dependency side effects on /reload](https://earendil-works/pi Issue #6108)**
   The Linux binary re-runs dependency module top-level code on `/reload`, causing duplicate registration of themes and other side effects. Fixed in PR #6109.

10. **[#6110 — Extension session_start fires before initTheme in pi-web](https://earendil-works/pi Issue #6110)**
    Web UI extensions that access `theme` during `session_start` crash with "Theme not initialized." An initialization ordering bug unique to the web client.

## Key PR Progress

1. **[#5735 — Defer extension reload requests safely](https://earendil-works/pi PR #5735)** *(OPEN)*
   @mitsuhiko's architecture improvement: `ctx.reload()` becomes available on base `ExtensionContext` with a deferral mechanism that runs reloads only at safe boundaries. Enables extensions to trigger reloads from any context (not just slash commands).

2. **[#5678 — Add excludeFromContext for custom messages](https://earendil-works/pi PR #5678)** *(OPEN)*
   Another @mitsuhiko core change: custom messages can be marked `excludeFromContext` to persist in UI and history without entering the LLM context. Teaches compaction and branch summarization to skip these messages. Powerful for meta-messages and agent state.

3. **[#6123 — Add externalEditor setting for Ctrl+G](https://earendil-works/pi PR #6123)** *(CLOSED)*
   @slybootslion solves a Windows/Git Bash pain point: users can now configure the external editor via `settings.json` instead of relying on unchangeable `$EDITOR` environment variables.

4. **[#6119 — add reportUsage API for extensions](https://earendil-works/pi PR #6119)** *(CLOSED)*
   @austinsr1 adds `pi.reportUsage(input)` to let extensions feed token/cost data into the session footer. Required for multi-agent setups where subagent costs were previously invisible.

5. **[#5832 — Surface provider HTTP error body instead of opaque SDK message](https://earendil-works/pi PR #5832)** *(OPEN)*
   Fixes #5763: Instead of dropping the body, Pi now surfaces the raw HTTP error body from providers/gateways. Vastly improves debuggability for proxy issues.

6. **[#6115 — Add configurable chat padding](https://earendil-works/pi PR #6115)** *(OPEN, to-discuss)*
   @mitsuhiko responds to frequent Discord requests for removing/shrinking TUI padding. Notes it's architecturally complex but opens discussion about a TUI-level flag system.

7. **[#6099 — Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'](https://earendil-works/pi PR #6099)** *(CLOSED)*
   @vamshi9666 fixes an Azure OpenAI model name mismatch. The model `5.2-chat-latest` doesn't exist in Azure's 5.2 family; the correct name is `gpt-5.2-chat`.

8. **[#6111 — Report settings write failures in install/remove](https://earendil-works/pi PR #6111)** *(CLOSED)*
   @jiangge fixes silent install failures: when `settings.json` is read-only, `pi install` now reports the error instead of silently succeeding with no package registration.

9. **[#6109 — Preserve dependency cache on extension reload](https://earendil-works/pi PR #6109)** *(CLOSED)*
   @dmasiero fixes #6108 by ensuring the release binary reuses cached dependency modules on `/reload`, preventing duplicate side effects.

10. **[#6121 — Allow extensions to execute registered tools](https://earendil-works/pi Issue #6121)** *(CLOSED)*
    @janbam proposes an API for extensions to call Pi's registered tools programmatically — enabling "codemode" extensions like `pi-eval` that script tool usage.

## Feature Request Trends

- **Extension API deepening**: Multiple requests focus on giving extensions more capabilities — executing tools (#6121), reporting usage (#6120), reloading from any context (#5735), and controlling what enters LLM context (#5678).
- **Configuration flexibility**: Users want to override Pi's behavior via settings rather than environment variables — external editor (#6122), npm install args (#6126, #6125), and chat padding (#6115).
- **Non-English / Unicode support**: The Devanagari breakage (#6124) highlights a broader need for full Unicode support in the Pi harness.
- **RPC expansion**: Audio pass-through (#6118), custom agent identity override (#6127), and RPC stability improvements point to growing use of Pi as a backend service.

## Developer Pain Points

- **TUI scroll behavior is broken**: The streaming scroll-jacking (#5825) is the most-commented issue, reflecting a critical UX failure that affects daily use.
- **Extension reload is unsafe**: Side effects from dependency re-evaluation (#6108) and initialization ordering (#6110) make extension development error-prone.
- **Silent failures waste time**: Install succeeding without write permission (#6112) and error bodies being swallowed (#5763) are recurring "it looks like it works but it doesn't" bugs.
- **Provider model mappings are fragile**: Multiple issues this week (#6116, #6114, #6099) involve incorrect model names or provider-specific quirks in Pi's built-in definitions, requiring constant maintenance.
- **API surface instability**: `createAgentSession` import paths not matching test instances (#6117) and `session_start` timing issues (#6110) create friction for extension authors building on the SDK.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date: 2026-06-28**

---

## Today's Highlights

A dense day of cross-cutting progress: the `qwen serve` daemon path picks up two major ACP command gaps (`/cd`, `/lsp`) alongside a new multiplayer "qwen tag" channel-resident agent RFC. On the stability front, a long-standing 8K output cap that caused silent truncation loops was fixed, and a new always-on loop guard halts repeated shell inspection spirals. Community energy is high around **cross-device sync** for todos/plans/memories, browser extension revival via the daemon, and deeper Telegram/QQ bot integration.

---

## Releases

**v0.19.2-nightly.20260627.d93bec905** — *Released 2026-06-27*

A minor nightly release containing a core fix for `web_fetch` JSON fallback behavior. No breaking changes or new features.
- **Commit:** `d93bec905`
- **Fix:** `web_fetch` now falls back gracefully when JSON parsing fails, rather than crashing or returning opaque errors.

---

## Hot Issues (Top 10)

1. **[#4175](https://github.com/QwenLM/qwen-code/issues/4175) — Mode B feature-priority roadmap toward v0.16 production-ready** *(CLOSED)*  
   *Summary:* A comprehensive tracking issue for the `qwen serve` daemon's Stage 1 (HTTP/SSE routes, auth, session multiplexing). Closure signals the team considers the Mode B foundation stable enough to focus on Stage 2. The 43 comments captured extensive community feedback on auth flows and workspace isolation.  
   *Why it matters:* Marks a significant architectural milestone; downstream extension and MCP integrators now have a stable serving target.

2. **[#5838](https://github.com/QwenLM/qwen-code/issues/5838) — Allow user to adjust agent-initiated cmd timeout** *(OPEN, P2)*  
   *Summary:* Users want a setting to control the timeout for shell commands spawned by the AI agent. Screenshots show agents getting stuck waiting for long-running processes.  
   *Community reaction:* +6 comments, active discussion about whether the timeout should be per-tool or global. Labeled `welcome-pr`.  
   *Why it matters:* Directly impacts developer productivity when agents manage build/test pipelines.

3. **[#5823](https://github.com/QwenLM/qwen-code/issues/5823) — /loop cron tasks fire silently with no visibility** *(OPEN, P2)*  
   *Summary:* A user reports that `/loop` cron tasks they didn't realize were scheduled continued firing across sessions, causing the assistant to auto-start work on stale tasks. No UI to list, inspect, or cancel loops.  
   *Community reaction:* The reporter is clearly frustrated ("I came back days later…"). Labeled `autofix/skip`, indicating it needs design discussion first.  
   *Why it matters:* A fundamental UX gap for background automation — invisible state erodes trust.

4. **[#5836](https://github.com/QwenLM/qwen-code/issues/5836) — Enable cross-device sync for todos/plans/memories** *(OPEN, P2)*  
   *Summary:* User requests that `create todos` be persisted *inside* the project directory (e.g., `.qwen/todos/` or `docs/todos/`) instead of `~/.qwen/todos/`, enabling Git version control and cross-device sync. Same request for plans and memories.  
   *Why it matters:* One of the highest-friction pain points for multi-machine developers. +4 comments all in agreement.

5. **[#5756](https://github.com/QwenLM/qwen-code/issues/5756) — Default 8K output cap truncates large outputs, causing failed-retry loops** *(CLOSED, P2)*  
   *Summary:* When no explicit `max_tokens` is set, Qwen Code caps output at 8K tokens (hardcoded). This silently truncates large `write_file` operations (e.g., generating a wiki page), then the agent retries in a loop believing the file was written incorrectly.  
   *Community reaction:* The user provided a detailed reproduction. Issue was closed after the fix in #5934.  
   *Why it matters:* Eliminates a major silent productivity killer for large-file generation tasks.

6. **[#5867](https://github.com/QwenLM/qwen-code/issues/5867) — Add a git-shared "team" tier to auto-memory** *(CLOSED, P2)*  
   *Summary:* Proposes a third memory tier — **TEAM** — stored in `.qwen/memories/` and committed to Git, so project-level facts (e.g., coding conventions) are shared across the team. User and project tiers remain private.  
   *Why it matters:* Moves memory from a single-user concept to a collaborative one, directly enabling team workflows.

7. **[#5889](https://github.com/QwenLM/qwen-code/issues/5889) — [loop] Add a `.qwen/loop.md` task file injected at fire time** *(OPEN, P2)*  
   *Summary:* Currently `/loop` has no user-editable persistent task definition. Proposal: create `.qwen/loop.md` that the model reads every tick, allowing mid-run editing and reusability.  
   *Why it matters:* Would make `/loop` a viable long-running assistant mode, not just a fire-and-forget command.

8. **[#5922](https://github.com/QwenLM/qwen-code/issues/5922) — cua-driver.exe consumes high CPU even when idle** *(CLOSED, P2)*  
   *Summary:* The `cua-driver.exe` process (computer-use tools) remains active and CPU-hungry after agent tasks complete. Task manager screenshots show sustained usage. Closed after the team acknowledged and likely patched.  
   *Why it matters:* Background CPU drain is a top complaint for Windows users; affects battery life and system responsiveness.

9. **[#5942](https://github.com/QwenLM/qwen-code/issues/5942) — Anthropic provider: avoidable prompt-cache misses inflate cost** *(OPEN, P2)*  
   *Summary:* Two independent bugs cause prompt-cache misses on Anthropic endpoints: (a) side-queries use a different prefix, busting the cache; (b) the conversation breakpoint sits on the moving last message. Claude Code, on the same backend, achieves ~100% cache hit rate.  
   *Why it matters:* Directly impacts API cost; a cache hit is billed at ~10% of a standard token. High-value fix for cost-conscious users.

10. **[#5941](https://github.com/QwenLM/qwen-code/issues/5941) — Scrolling up during generation jumps to top** *(OPEN, P2)*  
    *Summary:* On Windows, scrolling up one notch during model output generation causes the viewport to jump to the top of the document, instead of scrolling smoothly. Reported on Qwen Code 0.19.2.  
    *Why it matters:* A regression in UX that breaks the reading experience during streaming output — especially painful for long generations.

---

## Key PR Progress (Top 10)

1. **[#5888](https://github.com/QwenLM/qwen-code/pull/5888) — [OPEN] feat(channels): qwen tag — RFC + Phase 0 (multiplayer channel-resident agent)**  
   A significant RFC introducing a channel-resident, multiplayer agent for DingTalk (and future channels). The agent lives inside chat groups via the existing `qwen tag` daemon. Phase 0 covers the architecture, authentication, and basic command parsing. *This is a potential game-changer for team workflows.*

2. **[#5777](https://github.com/QwenLM/qwen-code/pull/5777) — [OPEN] feat(browser-ext): revive Chrome extension via daemon-direct architecture**  
   Revives the Chrome extension (from #1432) as a thin client of the `qwen serve` daemon over HTTP+SSE, replacing the old Native Messaging host stack. Side panel chat connects directly to the local daemon. *Critical for browser-centric developers.*

3. **[#5903](https://github.com/QwenLM/qwen-code/pull/5903) — [CLOSED] feat(acp): support /cd command in ACP sessions**  
   Adds the server-side `/cd` command for ACP multi-session architecture. Validates directory, checks trust/sandbox policies, updates the session's logical working directory. *Closes a key gap in the serve parity tracking (#5677).*

4. **[#5944](https://github.com/QwenLM/qwen-code/pull/5944) — [OPEN] fix(core): halt repeated shell inspection variants**  
   Adds an always-on loop guard: if the model repeatedly calls `run_shell_command` with similar read-only git commands (status, diff, ls-files), Qwen Code halts the run. *Directly addresses user complaints about infinite loop behavior (#5823 is related).*

5. **[#5030](https://github.com/QwenLM/qwen-code/pull/5030) — [OPEN] feat(core,cli,sdk): resume an interrupted turn without a synthetic "continue" message**  
   Adds first-class support for resuming an unfinished assistant turn after crash/ interruption without injecting a synthetic `"continue"` user message. Continuation is classified from persisted chat state. *Large PR (squashed) — a fundamental quality-of-life improvement.*

6. **[#5943](https://github.com/QwenLM/qwen-code/pull/5943) — [OPEN] feat(web-shell): add error boundaries so a render crash can't white-screen the embed**  
   Adds three-layer error boundaries (generic, message-level, code-block-level) so a rendering crash in any one subtree degrades gracefully instead of taking down the entire web shell. *Addresses users' most common web-shell complaint.*

7. **[#5856](https://github.com/QwenLM/qwen-code/pull/5856) — [OPEN] feat(desktop): voice dictation in the desktop app**  
   Brings `/voice` dictation to the desktop app (matching CLI and WebShell). Microphone button in composer → recording bar with waveform and timer. *Brings parity to the desktop experience.*

8. **[#5938](https://github.com/QwenLM/qwen-code/pull/5938) — [CLOSED] perf(cli): enable compile cache and defer getCliVersion for serve**  
   Two small optimizations for `qwen serve` daemon startup: V8 compile cache (re-parses cached bytecode on restart) and lazy CLI version resolution. *Noticeable improvement for developers who start/stop the daemon frequently.*

9. **[#5911](https://github.com/QwenLM/qwen-code/pull/5911) — [OPEN] fix(desktop): normalize source slug validation errors**  
   Keeps the stricter source-slug path-traversal guard (#5829) and normalizes remaining invalid/legacy-slug paths so callers get predictable validation output. *Security hardening follow-up.*

10. **[#5902](https://github.com/QwenLM/qwen-code/pull/5902) — [OPEN] fix(qqbot): streaming improvements — idle flush, remove splitText, replyMsgId TTL, markdown pipe**  
    Refactors QQ Bot streaming: replaces block coalescing with 2-second idle flush, removes a 2000-char limit, adds 5-minute TTL to passive reply tracking, and fixes markdown table detection. *Shows deep investment in the China-market messaging channel.*

---

## Feature Request Trends

- **Multiplayer & Team Workflows** — Multiple issues (#5867, #5888, #5836) push for shared memory tiers, cross-device sync, and channel-resident agents. The "qwen tag" RFC (#5888) is the most ambitious, enabling a single agent to serve an entire chat group.
- **Daemon-as-Platform** — Two parallel efforts to extend the `qwen serve` daemon: Chrome extension (#5777) and Telegram bot command menu (#5919). The daemon is increasingly treated as the universal API surface.
- **Background Automation UX** — The `/loop` system lacks visibility and control (#5823, #5889). Users want editable task files, a way to list/cancel loops, and non-silent firing.
- **Channel Parity** — Both Telegram (#5907) and QQ (#5902) bots are being brought to feature parity with the CLI, with tracking issues and multiple PRs active.

---

## Developer Pain Points

1. **No cross-device state sync** — `todos`, `plans`, and `memories` are all stored locally under `~/.qwen/`. Users working across multiple machines or with teams lose all context on each switch (#5836, #5867).
2. **Invisible background state** — `/loop` cron tasks and `/skill` commands fire without notification or a management UI. Users discover stale tasks days later (#5823, #5889).
3. **Cost inflation on Anthropic** — Two independent prompt-cache bugs cause avoidable cache misses, costing ~10× per token compared to Claude Code on the same backend (#5942).
4. **Lack of agent timeout configuration** — Agents can hang indefinitely waiting for spawned shell commands; no knob exists to set timeouts per-tool or globally (#5838).
5. **Windows-specific regressions** — `cua-driver.exe` CPU drain (#5922) and scroll-jump-to-top during streaming (#5941) remain unresolved, eroding the Windows experience.
6. **Loop/recursion hazards** — Despite recent fixes, users still encounter cases where the agent enters infinite inspection loops (#5944) or edit-retry cycles (#5756). The new always-on guard is a good step, but more systematic detection may be needed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-28

## Today's Highlights
The v0.8.66 release is nearing completion after a massive burst of 37 PRs merged in the last 24 hours, including cache-maximal context mode, ACP streaming protocol support, and a plugin system. The team is aggressively closing out the **Token/Cache/Context discipline release gate** with a new scorecard, while community reports still highlight persistent **cache hit ratio** and **excessive token consumption** issues. Notably, a PR to allow **base prompt overrides from config** passed quickly, signaling growing demand for non-coding use cases.

## Releases
None in the last 24 hours. v0.8.66 release ledger (PR #3707) was just finalized, indicating a release is imminent.

## Hot Issues (10 noteworthy)

1. **[#1177 – Input cache hit ratio too low](https://github.com/Hmbown/CodeWhale/issues/1177)** (24 comments, open 50 days) — Comparison to DeepSeek-Reasonix (95%+ hit rate) shows sharp disparity. Oldest still-active grievance; community sees this as the project's most critical performance gap.

2. **[#1120 – Cache hit problems persist](https://github.com/Hmbown/CodeWhale/issues/1120)** (21 comments) — Follow-up confirming v0.8.17 didn't fully resolve the miss-rate bug. English/Chinese bilingual discussion suggests the fix was incomplete.

3. **[#743 – Token consumption exploded](https://github.com/Hmbown/CodeWhale/issues/743)** (13 comments) — User reporting **400M tokens in half a day** with abnormally dense request patterns. Raised alarm about runaway token usage before any optimization work began.

4. **[#3192 – Agent Client Protocol registry listing](https://github.com/Hmbown/CodeWhale/issues/3192)** (12 comments) — Request to get CodeWhale listed in the ACP registry for native Zed editor integration. Active PRs this week addressed the underlying streaming/cancel support needed.

5. **[#3275 – CodeWhale over-extending work scope](https://github.com/Hmbown/CodeWhale/issues/3275)** (12 comments) — Agent enters a self-questioning/answering loop, deviating from user intent. Regression from a prior fix; community calling for better behavioral boundaries.

6. **[#3568 – Plan vs Agent mode mixing (persistent regression)](https://github.com/Hmbown/CodeWhale/issues/3568)** (6 comments, 👍1) — User provides concrete chat export proving the model ignores mode switches. Pattern has recurred across multiple versions, frustrating deterministic users.

7. **[#1747 – Cache hit problem + UI readability](https://github.com/Hmbown/CodeWhale/issues/1747)** (4 comments, 👍3) — User coming from opencode/deepseek finds cache performance poor and UI hard to follow during coding sessions.

8. **[#3495 – Adopt Moraine as memory backend](https://github.com/Hmbown/CodeWhale/issues/3495)** (4 comments) — Core team issue proposing a lossless session ingestion via MCP tools. Important for long-running agent contexts.

9. **[#3541 – Rust native desktop client request](https://github.com/Hmbown/CodeWhale/issues/3541)** (3 comments) — Proposes replacing Node.js TUI with native Rust runtime; cites cold-start latency and event-loop stalls during long sessions. Signals frustration with the TypeScript architecture for heavy use.

10. **[#528 – Cache-maximal context mode](https://github.com/Hmbown/CodeWhale/issues/528)** (3 comments) — Core thesis: DeepSeek V4's cheap cached input means re-reading full active file contents per turn beats summarization. **Just closed by PR #3697**, marking a strategic shift.

## Key PR Progress (10 important)

1. **[#3707 – v0.8.66 release ledger](https://github.com/Hmbown/CodeWhale/pull/3707)** — PR by Hmbown documenting the release candidate state, changelog with token/cache scorecard. Final pre-release housekeeping.

2. **[#3706 – Command-boundary refactor Layer 4.2](https://github.com/Hmbown/CodeWhale/pull/3706)** — Completes the registry cleanup and source-verified command architecture for the staged refactor (refs #2870). Aboimpinto's long-running epic.

3. **[#3696 – Base prompt override from config](https://github.com/Hmbown/CodeWhale/pull/3696)** — Closes #3638. Allows swapping the system prompt for non-software use (writing, document review). First-class support for non-coding users.

4. **[#3702 – ACP streaming session/prompt deltas](https://github.com/Hmbown/CodeWhale/pull/3702)** — Follow-up to #3698. Replaces buffered turns with streaming chunks for real-time Zed rendering. Essential for editor integration (#3192).

5. **[#3697 – Cache-maximal context mode](https://github.com/Hmbown/CodeWhale/pull/3697)** — Implements #528. Opt-in mode that injects full file contents instead of path lists. Major architectural change for token efficiency.

6. **[#3693 – Token/cache/cost scorecard](https://github.com/Hmbown/CodeWhale/pull/3693)** — First concrete slice of the #3388 release gate. Adds regression detection for token, cache, and cost metrics. Foundation for ongoing performance tracking.

7. **[#3699 – Lightweight plugin system](https://github.com/Hmbown/CodeWhale/pull/3699)** — New plugin discovery, registry, and injection system. Enables external skills and MCP servers as self-contained plugins. Potentially transformative for extensibility.

8. **[#3698 – ACP cancel in-flight sessions](https://github.com/Hmbown/CodeWhale/pull/3698)** — Fixes the blocking bug where `session/cancel` couldn't be observed until the turn completed. Critical for editor UX responsiveness.

9. **[#3705 – Direct URL fallback after repeated search errors](https://github.com/Hmbown/CodeWhale/pull/3705)** — Addresses #1641. When web search fails repeatedly, suggests direct URL fetch using already-collected domains. Smart degradation.

10. **[#3690 – Locale-aware skill descriptions](https://github.com/Hmbown/CodeWhale/pull/3690)** — Refs #3354. Chinese-language skills now provide Chinese descriptions, reducing token waste from English-only descriptions in non-English sessions.

## Feature Request Trends
- **Non-coding use cases** emerging strongly: literary writing, document review, background reading (#3638 → #3696). Users want to repurpose the TUI away from its software-engineering DNA.
- **Editor integration** reaching critical mass: ACP protocol support (#3192) with streaming and cancel now solved, enabling Zed and other ACP-compatible editors.
- **Plugin/extensibility systems** gaining traction: new plugin system (#3699) alongside the Moraine memory backend (#3495) suggest a platform play.
- **Native performance** demanded: Rust runtime request (#3541) reflects TypeScript/Node overhead becoming a pain point at scale.
- **Cache-maximalism** becoming official strategy: Prompt slimming (#2953), transcript reduction (#2956), and active-file re-reading (#528) all point to a systematic attack on token costs.

## Developer Pain Points
- **Cache hit ratio is the #1 pain**: Multiple issues (#1177, #1120, #1747, #1732) with bilingual community consensus that CodeWhale underperforms competitors by a wide margin. The v0.8.66 scorecard (#3693) suggests the team is finally measuring this rigorously.
- **Token costs remain alarming**: Reports of 400M tokens/half-day (#743) and "huge consumption" (#1818) indicate runaway usage in real workflows. The #2953/#2956 optimization series directly targets this.
- **Agent behavioral reliability erodes trust**: Plan/agent mode mixing (#3568, #3275) and over-enthusiastic self-driving loops (#3275) frustrate users who expect predictable tool behavior. Repeated regression suggests deeper architectural issues.
- **UI readability suffers under load**: Multiple users (#1747, #3275) find the TUI cramped and hard to follow during complex sessions. The #3480 TUI UX overhaul EPIC recognizes this.
- **Stale issue backlog harms community**: The team reactivated stale-cleanup (#3607) after months of neglect. Users see open issues going unanswered (#3089), which may reduce reporting quality.
- **File path inconsistencies for contributors**: PR #3680 had to fix stale paths in CONTRIBUTING.md, reflecting documentation drift as the codebase evolves.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*