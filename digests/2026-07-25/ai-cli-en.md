# AI CLI Tools Community Digest 2026-07-25

> Generated: 2026-07-25 01:40 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-07-25 | **Scope:** Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI, Grok Build

---

## 1. Ecosystem Overview

The AI CLI tooling landscape is coalescing around three core tensions: **reliability vs. capability**, **enterprise hardening vs. rapid experimentation**, and **cross-platform parity vs. macOS-first defaults**. All major tools are investing heavily in agent orchestration and plugin ecosystems (especially MCP), while users consistently flag context compaction failures, agent hangs, and authentication fragility as top blockers. The pace of iteration remains high: several tools shipped multiple releases or alphas this week alone, and community engagement is substantial (many issues with 30+ comments and 100+ upvotes). However, a recurring pattern emerges: shiny new features (e.g., Claude Opus 5 support, Copilot plan-mode) frequently ship alongside regressions that erode trust and stall adoption, especially on Windows and Linux.

---

## 2. Activity Comparison

| Tool | Notable Issues (listed today) | Notable PRs (listed today) | Release Today? | Release Cande |
|------|-------------------------------|----------------------------|----------------|---------------|
| **Claude Code** | 10 | 1 | Yes (v2.1.219, v2.1.220) | High |
| **OpenAI Codex** | 10 | 10 | Yes (4 Rust alphas) | Very High |
| **Gemini CLI** | 10 | 10 | No | Moderate |
| **Copilot CLI** | 10 | 0 | Yes (v1.0.75) | High (regressions) |
| **Kimi Code** | 5 (selected) | 2 | No | Low |
| **OpenCode** | 10 | 10 | Yes (v1.18.5) | High |
| **Pi** | 10 | 10 | Yes (v0.82.0) | High |
| **Qwen Code** | 10 (top) | 10 (key) | Yes (v0.21.0 + nightly) | High |
| **DeepSeek TUI** | 10 | 10 | Yes (v0.9.1) | High (refactoring) |
| **Grok Build** | 0 | 0 | No | None |

*“Notable Issues/PRs” reflects the counts from the community digest summaries; actual totals may be higher. Release cadence is inferred from recent patterns.*

---

## 3. Shared Feature Directions

Several requirements appear across three or more tool communities:

| Theme | Affected Tools | Specific Needs |
|-------|----------------|----------------|
| **Context compaction failure** | Claude Code, Codex, Copilot CLI, Pi, Qwen Code | Silent degradation, 80% full after compaction, token cap truncation, manual recovery impossible |
| **Agent hangs & false completions** | Gemini CLI, Claude Code, Copilot CLI, OpenCode, DeepSeek TUI | Generalist agent indefinite hang, subagent reports success on MAX_TURNS, stuck on “Waiting input”, permanent retries |
| **Windows process & update fragility** | Codex, Copilot CLI, Claude Code, Kimi Code, Pi | git.exe orphan processes, MSIX update locks file, arrow keys broken in TUI, console window flash |
| **MCP plugin ecosystem maturity** | Claude Code, Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode | Directory opacity, OAuth token refresh failures, multiple connectors of same type, config refresh across threads |
| **Remote control / session persistence** | Claude Code, Kimi Code, DeepSeek TUI, Gemini CLI | Bridging local CLI to mobile, cross-machine mesh, unattended session recovery, durable goals across turns |
| **Corporate proxy & OAuth hardening** | Kimi Code, Gemini CLI, Pi, Copilot CLI, Claude Code | SSL_CERT_FILE support, plain-HTTP tunnel misconfiguration, token invalidation, headless VPS login |
| **Safety filter false positives** | Claude Code, Codex, Copilot CLI, Qwen Code (minor) | Fable safeguards block benign commands, cybersecurity filter blocks after run, plan-mode blocks read-only tools |
| **Enterprise / team features** | Codex, Copilot CLI, Claude Code, Pi | Enterprise plan support (ent26), admin controls, billing confusion, org model availability |
| **Model integration & selection confusion** | Claude Code, Codex, Gemini CLI, OpenCode, Pi, Qwen Code | Model silently falls back, tool_choice rejected in thinking mode, unavailable model errors, model routing ambiguity |

---

## 4. Differentiation Analysis

**Claude Code** leads in **sandboxing & safety** (strictAllowlist, Fable safeguards, Remote Control bridge) but suffers from frequent regressions in core reliability (nested agent spawns, auto-compaction loss). Its plugin ecosystem is the most mature (Telegram, MCP channels), but community frustration around billing and Windows updates is high.

**OpenAI Codex** differentiates with **MCP plugin marketplace investment** and **enterprise plan support** (ent26). Its PR activity is the highest this week (10+ merges), focusing on credential brokering, thread forking, and remote plugin tracking. However, it is plagued by aggressive compaction that wastes Pro quotas and Windows Git process spam, making it less reliable for long sessions.

**Gemini CLI** is unique in its **subagent orchestration model** (caretaker triage, AST-aware code navigation). It has the smallest release cadence recently, but deep architectural PRs (evaluation framework, OAuth token refresh) indicate a focus on quality over quantity. The community’s biggest pain is agent hangs and false subagent success – a trust issue that slows adoption.

**GitHub Copilot CLI** is the most **Windows- and integration-focused** (GitHub ecosystem, /sandbox, plan-mode). However, its high regression rate (plan-mode blocks read-only commands, Ctrl+C broken, OOM on resume) undermines its potential. The strong upvote on CAPI payload limits (10 👍) points to a scalability ceiling for long sessions.

**Kimi Code** has the **smallest community** but a clear niche: **cross-device continuity** (Remote Control requested by 16 👍) and **corporate proxy friendliness** (SSL_CERT_FILE fix). It lacks the feature depth of peers but may appeal to enterprise developers behind restrictive networks.

**OpenCode** is the most **multi-provider focused** (auto-discover models, OpenAI-compatible endpoints), with the highest upvoted feature (188 👍 for model auto-discovery). It also stands out for **performance observability** (per-tool timing) and **lock-free concurrency** (major runner refactor). Agent abrupt stops are its Achilles’ heel.

**Pi** is the most **theoretically rich**, offering constrained tool sampling (JSON Schema/grammars) and deep model switching capabilities. Its community suffers from **compaction failures with Copilot Enterprise** and **local-first setup friction** (llama.cpp default model detection). The O(viewport) transcript rendering PR shows attention to UX at scale.

**Qwen Code** differentiates with **channel integrations** (DingTalk, GitHub polling, WeChat) and **SWE-bench automation** (66.4% resolved). Its community is more performance-sensitive (cold-start lazy loading, background shell status sidecar). The multi-agent ban override issue (#7679) indicates tension between user control and system guidance.

**DeepSeek TUI (CodeWhale)** is in a **rebranding and refactoring phase** (v0.9.1, Fleet/Workflow/Lane/Runtime model). It stands out for **localization expansion** (Hindi, Ukrainian) and **intent-is-the-artifact agent philosophy**. Its community is vocal about diagnostic false negatives and monolithic file pain. The project is rapidly evolving but still immature.

**Grok Build** – no activity.

---

## 5. Community Momentum & Maturity

| Tool | Community Engagement | Iteration Speed | Stability Signal | Maturity Level |
|------|---------------------|----------------|-----------------|----------------|
| **Claude Code** | High (32 👍, 21 comments on top issue) | High (2 releases today) | Moderate (regressions with each release) | **Mature but volatile** |
| **OpenAI Codex** | High (29 👍, 33 comments) | Very High (4 alphas) | Low (Windows issues, compaction churn) | **Maturing with scaling pains** |
| **Gemini CLI** | Moderate (8 👍, 12 comments) | Low (no release) | Moderate (focused on fixes) | **Solid core, slow expansion** |
| **Copilot CLI** | Moderate (10 👍, 4 comments) | High (1 release, but regressions) | Low (major regressions in v1.0.74/75) | **Feature-rich but fragile** |
| **Kimi Code** | Low (16 👍, low comments) | Low (no release) | Moderate (single pending fix) | **Early but focused** |
| **OpenCode** | Very High (188 👍, 32 comments) | High (1 release, major PRs) | Moderate (agent stops persist) | **Rapidly growing, innovative** |
| **Pi** | Moderate (11 👍, 12 comments) | High (v0.82.0 release) | Moderate (compaction, proxy issues) | **Theoretically advanced, practical gaps** |
| **Qwen Code** | Moderate (8 comments top) | High (v0.21.0 + nightly) | Moderate (UI rendering bugs) | **Balanced, enterprise-ready** |
| **DeepSeek TUI** | Moderate (17 comments top) | High (v0.9.1, many PRs) | Low (architectural churn) | **Early refactoring phase** |
| **Grok Build** | None | None | N/A | **Dormant** |

*Engagement based on max upvotes/comments on top issue; iteration speed based on recent releases; stability signal based on regression reports.*

---

## 6. Trend Signals

Several industry-wide signals emerge from the combined community feedback:

1. **Context management is the #1 scaling bottleneck.** Every tool with long-session users (Claude Code, Codex, Copilot CLI, Pi) reports auto-compaction failing to free meaningful context, leading to truncated summaries, wasted tokens, and manual “continue” spam. The fix is not trivial – it requires smarter summarization, anchor-file plugins, or architectural changes (e.g., lock-free settlement in OpenCode).

2. **Agent reliability is table stakes – and still broken.** Observers might assume agent hangs and false completions would be resolved by now, but Gemini CLI (#21409, 8 👍), Claude Code (#81035, critical safety), and OpenCode (#38731) all report agents that simply stop working. This is the single largest barrier to autonomous workflows.

3. **Windows remains a second-class citizen.** From Codex’s orphan `git.exe` processes to Claude Code’s MSIX update bricking and Kimi Code’s broken arrow keys, Windows users face disproportionate friction. Tools that invest in Windows-specific fixes (Copilot CLI’s zombie process reaping, Pi’s CRLF normalization) gain immediate differentiation.

4. **Corporate proxy and OAuth are the unsung enterprise blockers.** SSL_CERT_FILE env vars, plain-HTTP tunnel misconfiguration, and OAuth token refresh failues (Gemini CLI, Pi, Kimi Code) prevent adoption in regulated environments. This is a low-hanging fruit for enterprise sales.

5. **Model multiplicity is both a feature and a curse.** OpenCode’s auto-discovery request (188 👍) underscores that users want choice, but model switching causes context overflow, tool-call ID mismatches, and thinking mode incompatibilities (Pi, Qwen Code, Claude Code). Tools that handle seamless model switching out of the box will win power users.

6. **Safety and sandboxing are tightening but backfiring.** Claude Code’s Fable false positives, Copilot CLI’s plan-mode blocking read-only commands, and Codex’s cybersecurity filter consuming quota after the run – all indicate that safety measures are being deployed without sufficient contextual understanding. Users are increasingly vocal about false positives that waste time and money.

7. **Plugin ecosystems are maturing but lack transparency.** MCP plugin registries (Claude Code, Codex, Gemini CLI) are criticized for submission opacity (#80263, no propagation), missing OAuth re-auth without disconnect (#81020), and lack of per-thread config isolation. The next wave of innovation will come from plugin marketplace governance and observability.

8. **Remote control and session persistence are emerging as core expectations.** Claude Code’s Remote Control bridge (#78469), Kimi Code’s top-upvoted feature (#1282, 16 👍), and DeepSeek TUI’s durable goals across turns (#4611) point to a future where CLI sessions are not tied to a single terminal window. This is a once-in-a-generation architectural shift for developer tooling.

**Bottom line for technical decision-makers:** If you need stability for production workflows, **Claude Code** and **OpenCode** offer the most robust core but with known pain points around compaction and agent reliability. **OpenAI Codex** is best for MCP-heavy plugin environments but suffers on Windows and compaction churn. **Gemini CLI** is promising for research and subagent-heavy tasks but needs significant reliability work. **Copilot CLI** is ideal for GitHub-centric workflows but only if you can tolerate regressions. For enterprise deployment, **Kimi Code** and **Pi** show potential but require maturation. **Qwen Code** is the strongest option for multi-channel (chat/IDE/automation) and Chinese developer ecosystems. **DeepSeek TUI** is still finding its identity post-rebrand; watch for the v0.9.2 architecture stabilization. **Grok Build** is inactive – avoid dependency.

The tools that will dominate in 2027 are those that solve context compaction, Windows parity, and agent reliability simultaneously while keeping the plugin and model integration ecosystems open.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
**Data snapshot: github.com/anthropics/skills** (2026-07-25)

---

## 1. Top Skills Ranking

**1. Document Typography Skill** — [PR #514](https://github.com/anthropics/skills/pull/514) (OPEN)  
*Function:* Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.  
*Discussion:* Users highlighted these as universal pain points in Claude outputs. The PR has seen steady engagement around edge-case handling.  
*Status:* Open, actively reviewed.

**2. ODT Skill** — [PR #486](https://github.com/anthropics/skills/pull/486) (OPEN)  
*Function:* Creates, fills, reads, and converts OpenDocument format files (.odt, .ods). Includes template filling and ODT-to-HTML conversion.  
*Discussion:* Community interest in LibreOffice/ISO-standard document support is high; maintainers requested additional test coverage.  
*Status:* Open, awaiting revisions.

**3. Frontend-Design Skill Clarity** — [PR #210](https://github.com/anthropics/skills/pull/210) (OPEN)  
*Function:* Revises the existing frontend-design skill to be more actionable – every instruction must be executable within a single conversation.  
*Discussion:* Meta-debate about skill design philosophy: human-readable vs. Claude-optimal instructions.  
*Status:* Open, ongoing refinements.

**4. Skill-Quality & Security Analyzers** — [PR #83](https://github.com/anthropics/skills/pull/83) (OPEN)  
*Function:* Two meta-skills: one evaluates skill quality across 5 dimensions, the other audits skill security.  
*Discussion:* The community sees this as critical for skill curation, but concerns arose about false positives and maintenance burden.  
*Status:* Open, under design review.

**5. Testing-Patterns Skill** — [PR #723](https://github.com/anthropics/skills/pull/723) (OPEN)  
*Function:* Covers the full testing stack: unit (AAA), React Testing Library, integration, e2e, and a “Testing Trophy” philosophy guide.  
*Discussion:* High enthusiasm – many users lack a structured testing approach in their Claude projects.  
*Status:* Open, nearing merge.

**6. Pyxel Retro Game Development Skill** — [PR #525](https://github.com/anthropics/skills/pull/525) (OPEN)  
*Function:* Integrates with Pyxel MCP for retro/pixel-art game creation with an iterative “write → run → inspect → improve” workflow.  
*Discussion:* Niche but passionate following; author is the Pyxel engine creator.  
*Status:* Open, awaiting MCP source inclusion confirmation.

**7. Self-Audit Skill (v1.3.0)** — [PR #1367](https://github.com/anthropics/skills/pull/1367) (OPEN)  
*Function:* Mechanical file verification followed by a four-dimension reasoning audit (damage-severity priority) before delivery.  
*Discussion:* Received positive feedback on the structured quality gate approach; some questioned overhead for simple tasks.  
*Status:* Open, recent PR.

**8. Color-Expert Skill** — [PR #1302](https://github.com/anthropics/skills/pull/1302) (OPEN)  
*Function:* Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, RAL), spaces (OKLCH, CAM16), accessibility, palettes, and color theory.  
*Discussion:* Broad use-case appeal – from design to data visualization. One of the few purely knowledge-focused skills.  
*Status:* Open, active discussion on scope boundaries.

---

## 2. Community Demand Trends

The top issues reveal **four concentrated demand vectors**:

- **Trust & Safety** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) flags that community skills under the `anthropic/` namespace enable trust boundary abuse. This is the single most commented issue, reflecting deep concern about permission escalation.
- **Skill Sharing & Management** — [#228](https://github.com/anthropics/skills/issues/228) (14 comments) requests org-wide skill sharing; [#189](https://github.com/anthropics/skills/issues/189) (6 comments) reports duplicate skills from overlapping plugins; [#62](https://github.com/anthropics/skills/issues/62) (10 comments) about skills disappearing suddenly. Users need reliable storage, deduplication, and team distribution.
- **Quality & Validation Tooling** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments) and [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) both report the `run_eval.py` optimizer returning 0% recall, making the skill-creation loop useless on many systems. The community is actively waiting for a fix.
- **Proposed New Skill Directions** — [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) proposes a `compact-memory` skill for symbolic agent state notation; [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed) proposed `agent-governance` for safety patterns; [#1385](https://github.com/anthropics/skills/issues/1385) (3 comments) proposes a reasoning quality gate pipeline. Users want **meta-cognitive and governance skills**, not just domain-specific ones.
- **Cross-Platform Support** — [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments) and [#29](https://github.com/anthropics/skills/issues/29) (4 comments) request Windows compatibility and Bedrock/AWS integration. The skill ecosystem remains Unix/CLI-first.

---

## 3. High-Potential Pending Skills

These PRs have active comment threads and are likely to land soon:

| Skill | PR | Key Discussion Points |
|-------|----|-----------------------|
| Document Typography | [#514](https://github.com/anthropics/skills/pull/514) | Universal need; edge-case handling refined |
| ODT Creation & Parsing | [#486](https://github.com/anthropics/skills/pull/486) | Template filling depth; test coverage required |
| Testing-Patterns | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive stack; community eager for merge |
| Self-Audit / Quality Gate | [#1367](https://github.com/anthropics/skills/pull/1367) | Novel approach; overhead concerns being addressed |
| Color-Expert | [#1302](https://github.com/anthropics/skills/pull/1302) | Knowledge density vs. actionability balance |

All remain **open** – none have been merged or closed. The pace of reviews suggests several may be accepted within the next month.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **robust skill quality assurance tooling** (especially fixing the broken `run_eval.py` optimization loop) together with **practical domain-specific skills** (typography, testing, document formats, color expertise), while simultaneously raising urgent concerns about **namespace trust and security boundaries** in the official repository.

---

# Claude Code Community Digest — 2026-07-25

## Today’s Highlights

Claude Code v2.1.219 introduced **Claude Opus 5** (1M context, $10/$50 per Mtok) as the default Opus model and a new `sandbox.network.strictAllowlist` for strict sandbox networking. A wave of fresh bugs surfaced around **Fable 5 false-positive safeguards** (three reports today), **Remote Control bridge instability** (intermittent 401s and permanent retry abandonment), and a critical **nested agent spawns unsupervised process** issue. The community is increasingly vocal about auto‑compaction context loss, prompting a PR for a “context-safety-net” plugin.

## Releases

- **[v2.1.220](https://github.com/anthropics/claude-code/releases/tag/v2.1.220)** — Bug fixes and reliability improvements.
- **[v2.1.219](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)** — Added **Claude Opus 5** (`claude-opus-5`) as default Opus model (1M context, fast mode $10/$50 per Mtok). New `sandbox.network.strictAllowlist` setting to deny non‑allowlisted hosts for sandboxed commands without prompting. Added `DirectoryAdded` hook.

## Hot Issues (Top 10)

1. **[#36431 — Telegram plugin: inbound MCP channel notifications not delivered](https://github.com/anthropics/claude-code/issues/36431)**  
   *21 comments, 32 👍*  
   Inbound messages received but never delivered to active conversation; outbound works. High community interest.

2. **[#62644 — “Buy credits” button permanently disabled; $500 limit shown on free tier; HTTP 429 on billing](https://github.com/anthropics/claude-code/issues/62644)**  
   *13 comments*  
   Blocks free-tier users from purchasing. Possible backend misconfiguration.

3. **[#80263 — Plugin submissions stuck at “Published” but never appear in directory](https://github.com/anthropics/claude-code/issues/80263)**  
   *7 comments*  
   Plugin authors cannot get their MCP servers visible; multiple submissions ignored.

4. **[#76357 — Windows MSIX update fails with “Another program is using this file” – app dead until reboot](https://github.com/anthropics/claude-code/issues/76357)**  
   *7 comments, 4 👍*  
   Every update bricks the app; Windows users must reboot. Critical for Windows adoption.

5. **[#78469 — Remote Control bridge intermittently 401s valid OAuth token (~50-70% of requests)](https://github.com/anthropics/claude-code/issues/78469)**  
   *6 comments*  
   Session startup fails; split backend fleet causes race condition. Affects all remote‑control users.

6. **[#80055 — Cannot purchase API credits in Japan; card auth succeeds but purchase fails](https://github.com/anthropics/claude-code/issues/80055)**  
   *6 comments*  
   Multiple cards fail; likely regional payment processor issue.

7. **[#77798 — Fable mid‑turn messages invisible to operator; long text emitted as thinking block](https://github.com/anthropics/claude-code/issues/77798)**  
   *4 comments*  
   Model behavior bug – operator cannot see assistant’s mid‑turn output.

8. **[#81025 — Session defaults to claude-opus-5[1M] which is unavailable to org; silently falls back and overwrites saved model](https://github.com/anthropics/claude-code/issues/81025)**  
   *3 comments*  
   Enterprise orgs with limited model access lose their preference. UX regression.

9. **[#81035 — Nested Agent(subagent_type:"fork") spawns unsupervised background process that takes real external actions](https://github.com/anthropics/claude-code/issues/81035)**  
   *New, 0 comments*  
   **Critical safety bug:** a failed fork call still spawns a live agent that merged PRs and deleted branches without supervision.

10. **[#81032 — macOS sandbox: ProcessPoolExecutor fails due to missing `kern.sysv.semmni` in seatbelt allowlist](https://github.com/anthropics/claude-code/issues/81032)**  
    *New, 0 comments*  
    Any Python `ProcessPoolExecutor` call breaks inside macOS sandbox. Blocks many data‑science workflows.

## Key PR Progress

Only one PR was updated in the last 24h:

- **[#80883 — feat: Add context-safety-net plugin to mitigate auto-compact context loss](https://github.com/anthropics/claude-code/pull/80883)**  
  *Author: jeshiomurmu*  
  Addresses long‑standing silent context degradation (referencing issues #42542, #13112, #28721). Proposes a plugin that deterministically saves “anchor” files before auto‑compaction triggers. Community has expressed strong need for this.

## Feature Request Trends

Based on recent issues, the following feature directions are most requested:

- **Better context visualization & recovery** – clickable pasted images (#81034), git‑worktree sessions in VS Code (#81024), context‑safety‑net plugin (#80883).
- **Improved MCP connector UX** – OAuth re‑authentication without disconnect (#81020), support for multiple connectors of the same service type (e.g., two Notion workspaces) (#81033).
- **Cross‑machine mesh / channels** – self‑hosted Claude‑to‑Claude communication (#81031, `claude/channel` research preview).
- **Platform‑specific enhancements** – Windows update reliability, macOS sandbox compatibility for multiprocessing, iOS session persistence.
- **Model behavior controls** – ability to suppress thinking blocks in copy/paste (#81022), user‑facing toggles for Fable safeguard strictness.

## Developer Pain Points

Recurring frustrations from the community:

1. **Remote Control fragility** – multiple issues report 401 errors on OAuth tokens, JWT refresh races, and permanent bridge abandonment after brief retry windows (#78469, #67360, #81036). Unattended sessions become unreachable.

2. **Auto‑compaction context loss** – silent degradation of long sessions without recovery path. The context‑safety‑net PR (#80883) is a direct response to years of related complaints.

3. **Windows update failures** – MSIX installer locks files, requiring reboot every update (#76357). OneDrive sync roots cause EEXIST errors (#67692).

4. **Fable 5 false‑positive safeguards** – three reports today (#81026, #81027, #81028) all flagging benign coding/admin instructions as content policy violations.

5. **Plugin directory opacity** – submissions stuck at “Published” with no propagation (#80263) and no clear escalation path for plugin developers.

6. **Payment and billing issues** – free‑tier users stuck behind disabled buy buttons (#62644) and regional payment failures (#80055). Enterprise orgs hit model unavailability surprises (#81025).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – July 25, 2026

## Today’s Highlights
A wave of four Rust alpha releases (`v0.146.0-alpha.6` through `v0.146.0-alpha.9`) landed in the last 24 hours, suggesting rapid iteration on the app server. The community remains vocal about **Windows Git-spawning regressions** and **aggressive context compaction wasting Pro quotas**. On the PR front, the team is hardening the MCP plugin ecosystem, adding enterprise plan support, and rolling out improvements to thread forking and credential brokering.

## Releases
Four new Rust app-server alphas were published:
- [`rust-v0.146.0-alpha.6`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.6) through [`rust-v0.146.0-alpha.9`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.9)  
No release notes provided beyond version bumps, but the high cadence indicates active bug fixes or internal infrastructure changes.

## Hot Issues (Top 10 Noteworthy)

1. **[#17229](https://github.com/openai/codex/issues/17229) – Windows App spawns `git.exe status` and orphan processes**  
   *Author: xiaoye-520* | 33 comments, 6 👍  
   The Windows app repeatedly forks `git.exe status --porcelain=v1 -z` and leaves orphan `conhost.exe` processes. A long-running grievance (opened April 9) that still lacks a resolution.

2. **[#19585](https://github.com/openai/codex/issues/19585) – Pro weekly usage depletes unusually fast with unstable compaction**  
   *Author: GGBondBlueWhale* | 33 comments, 29 👍  
   High community agreement. Users report their $200 Pro quota evaporates due to frequent, ineffective context compactions that leave the meter ~80% full, triggering repeated cycles.

3. **[#20880](https://github.com/openai/codex/issues/20880) – App silently creates empty `~/Documents/Codex` on every launch**  
   *Author: DrWaKu* | 20 comments, 39 👍  
   A minor but widely annoying UX issue – the desktop app creates an empty folder on macOS every time, even if unused. Upvoted heavily, indicating strong user desire for less clutter.

4. **[#28078](https://github.com/openai/codex/issues/28078) – Xcode 27 beta sign-in fails for ChatGPT Pro accounts requiring OTP**  
   *Author: guhans6* | 18 comments, 11 👍  
   Regression in the Xcode extension; Pro accounts with email OTP cannot authenticate, while basic accounts work fine. Blocks macOS developers using beta tooling.

5. **[#25928](https://github.com/openai/codex/issues/25928) – Submitted prompts disappear before entering queue (Windows VS Code/Cursor)**  
   *Author: Avnsx* | 16 comments, 8 👍  
   Prompts vanish randomly, likely a race condition in the extension’s queue handling. Frustrating for users who lose work.

6. **[#35032](https://github.com/openai/codex/issues/35032) – Auto-compaction completes but leaves context at 80% full**  
   *Author: grtninja* | 14 comments  
   A detailed bug report showing that compaction reports success but only frees ~20% of context, leading to churn and wasted usage. Directly tied to the Pro quota drain (#19585).

7. **[#22085](https://github.com/openai/codex/issues/22085) – Windows: many Git for Windows processes cause sustained high CPU**  
   *Author: azsama* | 14 comments, 24 👍  
   After a recent update, Codex spawns dozens of `git.exe` instances. Closed now, but the cluster of related Git issues (#17229, #20933, #33450) shows a deeper stability problem on Windows.

8. **[#34133](https://github.com/openai/codex/issues/34133) – Page.captureScreenshot crashes GPU process due to `vk_swiftshader.dll` rejection**  
   *Author: xiaosai72825* | 9 comments  
   Windows Code Integrity blocks bundled Vulkan Swiftshader DLL, crashing the GPU when the in-app browser takes a screenshot. Affects users with strict security policies.

9. **[#31967](https://github.com/openai/codex/issues/31967) – GPT-5.6 Luna resolves to missing internal engine for non-Codex originators**  
   *Author: hiddenest* | 8 comments, 8 👍  
   Using ChatGPT OAuth to access `gpt-5.6-luna` from outside Codex fails with “Model not found”. Points to incomplete routing for the new model.

10. **[#35050](https://github.com/openai/codex/issues/35050) – GPT-5.6 serializes independent Code Mode calls; explicit batching reduces usage by 27–45%**  
    *Author: MakerOfToys* | 7 comments  
    A performance analysis showing the model often runs tool calls sequentially instead of batching them. Users who manually batch save substantial quota – a strong feature request for automatic batching.

## Key PR Progress (Top 10)

1. **[#35275](https://github.com/openai/codex/pull/35275) – Trace remote exec-server connection setup**  
   Adds spans for lazy remote environment startup, improving debuggability of remote execution.

2. **[#29752](https://github.com/openai/codex/pull/29752) – Integrate experimental credential broker**  
   *Author: viyatb-oai*  
   Allows Codex core to opt into proxy-owned credential brokering, enabling per-child dummy credentials for managed subagents.

3. **[#35267](https://github.com/openai/codex/pull/35267) – Harden network approval cancellation and concurrency**  
   Prevents abandoned approvals from blocking subsequent requests; improves reliability of network requests during multi-turn sessions.

4. **[#35266](https://github.com/openai/codex/pull/35266) – Allow disabling in-process code-mode host fallback**  
   Gives users control over whether to fall back to embedded V8 when standalone host fails – useful for security-conscious or resource-constrained environments.

5. **[#35264](https://github.com/openai/codex/pull/35264) – Sign bundled macOS helper binaries**  
   Fixes a signing gap where `rg` and zsh were left unsigned in release packages, ensuring they pass macOS notarization.

6. **[#35262](https://github.com/openai/codex/pull/35262) – Track remote plugin IDs in skill invocation analytics**  
   Improves telemetry for plugin skills by propagating remote plugin IDs, aiding debugging of marketplace plugin performance.

7. **[#35238](https://github.com/openai/codex/pull/35238) – Support the ent26 enterprise plan**  
   Adds recognition for a new enterprise tier (`ent26`) across auth, rate-limiting, and usage guidance – signals ongoing enterprise feature investment.

8. **[#35220](https://github.com/openai/codex/pull/35220) – Support paginated thread forks**  
   Enables forking of threads with paginated history, unblocking an important workflow for users with long sessions.

9. **[#35216](https://github.com/openai/codex/pull/35216) – Refresh MCP config independently across threads**  
   Prevents one thread’s MCP load error from blocking others; logs per-thread errors for easier diagnosis.

10. **[#35205](https://github.com/openai/codex/pull/35205) – Use current MCP authority for elicitation reviews**  
    Ensures reviewers use up-to-date approval settings even after session-level changes, fixing stale authority bugs.

## Feature Request Trends

- **Multi-Agent V2 lifecycle continuity** – [#33314](https://github.com/openai/codex/issues/33314) and follow-ups ask for verifiable full-profile application and persistent custom agent state.
- **MCP plugin marketplace maturity** – Multiple PRs (e.g., #31307, #35262, #35254) and issues (e.g., #35255) indicate high demand for configurable MCP endpoints, publish capabilities, and legacy migration.
- **Context compaction & usage efficiency** – Issues #35032, #35050, #35259 highlight user desire for smarter batching, compaction that actually frees space, and reduced polling overhead.
- **Enterprise and team features** – PR #35238 for `ent26` plan and issue #20930 (remote notifications) suggest growing enterprise adoption needing robust admin controls.
- **Cross-thread consistency** – Several PRs (#35216, #35213) focus on refreshing MCP configs and plugin metadata across all active threads, a clear architectural push.

## Developer Pain Points

- **Windows Git process spam** – At least five open/closed issues (e.g., #17229, #22085, #20933, #33450, #35179) describe Codex spawning dozens of `git.exe` processes per second, causing CPU/disk thrashing and orphan processes. Users on Windows 10/11 are heavily affected.
- **Quota drain from ineffective compaction** – Issues #19585, #35032, and #35259 report that automatic compaction leaves contexts nearly full, forcing repeated cycles and wasting paid tokens.
- **Safety filter false positives** – Issues #34306, #33810, #34257, #35160, #35258 show the cybersecurity filter blocking legitimate requests (or blocking *after* the run, consuming quota). CLI users are particularly vocal about “This content can’t be shown” errors.
- **Model routing confusion** – #34677 and #31967 describe cases where selecting GPT-5.6 Pro behaves like a lower-tier model (Instant or Mini) or fails outside Codex entirely. Erodes trust in model selection.
- **Spurious folder creation & UI clutter** – #20880 (empty `~/Documents/Codex`) and #33579 (pinned tasks not appearing) reflect polish issues that annoy everyday users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-25

## Today’s Highlights
Agent reliability continues to be the dominant theme, with two long-standing P1 bugs—subagent false‑success on `MAX_TURNS` (#22323) and generalist agent hangs (#21409)—seeing renewed activity. On the PR side, the team is making strong progress on infrastructure and security: a caretaker‑agent evaluation framework, MCP OAuth token refresh fixes, and a Windows CRLF‑to‑LF normalization patch for diff views all landed or advanced this week.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 selected)

1. **#22323 – Subagent recovery after `MAX_TURNS` reported as GOAL success**  
   *12 comments, 2 👍*  
   The `codebase_investigator` subagent hits its turn limit but reports `status: "success"` with `Termination Reason: "GOAL"`, masking the interruption. This undermines trust in agent termination logic.  
   [google-gemini/gemini-cli Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 – Generalist agent hangs**  
   *8 comments, 8 👍 (highest 👍 count)*  
   Simple tasks like folder creation cause the agent to hang indefinitely when it defers to the generalist. Workaround: disable sub‑agent usage. The high upvote count shows this affects many users.  
   [google-gemini/gemini-cli Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 – Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing**  
   *8 comments, 1 👍*  
   A large enhancement proposal to let Gemini 3’s native bash skills run safely using POSIX tools without external sandboxes. Post‑execution intent routing would separate command output from file edits.  
   [google-gemini/gemini-cli Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#24353 – Robust component‑level evaluations**  
   *7 comments*  
   This EPIC tracks scaling behavioral evals from 76 tests to a comprehensive suite covering all supported models and components. Critical for catching regressions like the ones in #22323.  
   [google-gemini/gemini-cli Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **#22745 – Assess AST‑aware file reads, search, and mapping**  
   *7 comments, 1 👍*  
   Investigates whether using AST information (e.g., method bounds) can reduce token waste and turn count during code exploration. A potential performance breakthrough for large codebases.  
   [google-gemini/gemini-cli Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **#21968 – Gemini does not use skills and sub‑agents enough**  
   *6 comments*  
   Users report that even with well‑defined custom skills (gradle, git), the model rarely invokes them autonomously. Points to missing heuristics in agent selection.  
   [google-gemini/gemini-cli Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **#25166 – Shell command execution gets stuck with “Waiting input” after completion**  
   *4 comments, 3 👍*  
   Simple CLI commands hang after finishing, still showing “Awaiting user input”. Interferes with automated workflows.  
   [google-gemini/gemini-cli Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#26522 – Auto Memory retries low‑signal sessions indefinitely**  
   *5 comments*  
   The extraction agent only marks sessions as processed when it successfully reads them. Low‑signal sessions stay “unprocessed” and are repeatedly surfaced, causing infinite retries.  
   [google-gemini/gemini-cli Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

9. **#20079 – Symlinked agent files not recognized**  
   *4 comments*  
   Agent `.md` files placed as symlinks inside `~/.gemini/agents/` are silently ignored. Simple fix expected.  
   [google-gemini/gemini-cli Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

10. **#24246 – 400 error when >128 tools available**  
    *3 comments*  
    The API returns a 400 error when the tool count exceeds 128. Users expect the agent to trim tools based on context.  
    [google-gemini/gemini-cli Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

## Key PR Progress (10 selected)

1. **#28530 – Caretaker triage evaluation framework and judge runner**  
   *Large PR, open*  
   Adds an LLM‑as‑a‑Judge rubric and parallel Git worktree benchmark runner for assessing issue triage quality.  
   [google-gemini/gemini-cli PR #28530](https://github.com/google-gemini/gemini-cli/pull/28530)

2. **#28509 – Filter out thought parts from history when context management is disabled**  
   *Closed*  
   Prevents internal monologue parts (`thought: true`) from leaking into history turns, avoiding duplicate reasoning blocks in Gemini 2.x.  
   [google-gemini/gemini-cli PR #28509](https://github.com/google-gemini/gemini-cli/pull/28509)

3. **#28481 – Refresh MCP OAuth tokens with stored client ID**  
   *Open, priority/p1*  
   Fixes MCP OAuth token refresh failure that deleted stored credentials, forcing re‑auth. Prevented local refresh before any network I/O.  
   [google-gemini/gemini-cli PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

4. **#28446 – Use native fetch for OAuth token exchange to avoid “Premature close”**  
   *Open, priority/p1*  
   Switches from `undici` to Node native fetch for OAuth, fixing login failures on headless VPSes.  
   [google-gemini/gemini-cli PR #28446](https://github.com/google-gemini/gemini-cli/pull/28446)

5. **#28531 – Normalize CRLF to LF in `getProposedContent`**  
   *Open*  
   Fixes side‑by‑side diff highlighting on Windows caused by line ending mismatch in code generated by Gemini Code Assist.  
   [google-gemini/gemini-cli PR #28531](https://github.com/google-gemini/gemini-cli/pull/28531)

6. **#28523 – Enforce explicit tag length and validation in file keychain**  
   *Open*  
   Sets 128‑bit authentication tag length for AES‑GCM encryption, preventing runtime errors on some Node.js versions and rejecting malformed ciphertext.  
   [google-gemini/gemini-cli PR #28523](https://github.com/google-gemini/gemini-cli/pull/28523)

7. **#28517 – Enforce HTTPS for `GoogleCredentialsAuthProvider`**  
   *Closed*  
   Blocks transmission of access tokens over cleartext HTTP by verifying the protocol during credential exchange.  
   [google-gemini/gemini-cli PR #28517](https://github.com/google-gemini/gemini-cli/pull/28517)

8. **#28435 – PR generator core utilities (env config parser, GitHub REST client)**  
   *Open*  
   Foundational modules for the SSR Pipeline: config parsing, subprocess execution, and ANSI test output filtering.  
   [google-gemini/gemini-cli PR #28435](https://github.com/google-gemini/gemini-cli/pull/28435)

9. **#28346 – Fix trust dialog disclosure for runnable hooks**  
   *Closed, priority/p1*  
   Stops reporting flat invalid hook entries as runnable commands, preventing misleading trust dialogs. Adds warning for command hooks in project settings.  
   [google-gemini/gemini-cli PR #28346](https://github.com/google-gemini/gemini-cli/pull/28346)

10. **#28526 – Stop leaking disposables in VS Code IDE companion**  
    *Open, priority/p2*  
    Fixes a parenthesis grouping bug that caused `gemini.diff.accept` and workspace folder change listeners to never be properly disposed.  
    [google-gemini/gemini-cli PR #28526](https://github.com/google-gemini/gemini-cli/pull/28526)

## Feature Request Trends
- **AST‑aware code navigation**: Multiple issues (#22745, #22746) propose using AST tools for precise method/class boundary reads, reducing token waste and turn count.  
- **Agent self‑awareness**: Requests for the agent to accurately describe its own CLI flags, hotkeys, and capabilities (#21432).  
- **Subagent trajectory visibility**: Users want subagent traces included in `/chat share` and `/bug` reports for easier debugging (#22598, #21763).  
- **Robust evaluations**: The caretaker‑agent evaluation framework (#24353, #28530) reflects the team’s investment in automated quality gates.  
- **Resilient browser agent**: Features like automatic session takeover and lock recovery (#22232) are repeatedly requested.

## Developer Pain Points
- **Agent hangs and false completions**: The generalist agent hangs (#21409) and subagent false‑success on `MAX_TURNS` (#22323) are the most disruptive bugs.  
- **Shell command stuck after completion**: “Waiting input” state persists even after commands finish (#25166).  
- **Auto‑memory indefinite retries**: Low‑signal sessions are never marked processed, leading to infinite loops (#26522).  
- **Configuration ignored**: Browser agent ignores `maxTurns` and other `settings.json` overrides (#22267).  
- **Symlink support missing**: Custom agent files cannot be symlinked (#20079).  
- **Tool count limit error**: 400 errors when >128 tools are available (#24246).  
- **Secret redaction timing**: Secrets are sent to model before redaction instructions run (#26525).  
- **Destructive command usage**: Model occasionally uses `git reset` or `--force` when safer alternatives exist (#22672).  
- **OAuth token refresh fragility**: Premature close and credential deletion during MCP OAuth refresh (#28446, #28481).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-25

## Today’s Highlights
A new release (v1.0.75) landed yesterday, adding support for **Claude Opus 5**. However, the community is grappling with multiple regressions: plan-mode is blocking read-only shell commands, Ctrl+C cancellation is broken, and zombie processes are leaking under Linux. A critical performance regression in session resume (OOM/CPU-spiking) was also flagged, alongside a persistent CAPI payload-limit failure that auto-compaction can’t prevent.

## Releases
**v1.0.75** (2026-07-24) – [Release page](https://github.com/github/copilot-cli/releases/tag/v1.0.75)  
Key feature: **Added support for Claude Opus 5** as a model option. No other changes documented.

## Hot Issues (10 selected)
1. **#4188 – Regression: Plan mode blocks shell commands**  
   [Issue #4188](https://github.com/github/copilot-cli/issues/4188) – 4 comments, 3 👍  
   Plan mode now erroneously blocks `gh` and other CLI tools that were previously used to enrich plans. Label: `area:permissions`, `area:tools`. 🚨

2. **#4163 – Zombie child processes accumulate under copilot PID**  
   [Issue #4163](https://github.com/github/copilot-cli/issues/4163) – 3 comments, 3 👍  
   Finished subprocesses are not reaped, leaking ~2 zombies/min. Affects Linux. Closed but still unresolved.

3. **#4183 – Auto-compaction fails to prevent CAPI 5 MB body limit**  
   [Issue #4183](https://github.com/github/copilot-cli/issues/4183) – 3 comments, 10 👍  
   Long tool-heavy sessions hit a 5 MB CAPI request limit that compaction doesn’t mitigate. Community strongly upvoted.

4. **#4235 – Ctrl+C no longer cancels active agent run (regression)**  
   [Issue #4235](https://github.com/github/copilot-cli/issues/4235) – 1 comment, 0 👍  
   Closed but confirmed broken; previously a reliable abort key.

5. **#4220 – Plan mode blocks read-only gh API calls**  
   [Issue #4220](https://github.com/github/copilot-cli/issues/4220) – 1 comment, 1 👍  
   `gh api GET` and GraphQL queries are flagged as "may modify workspace". False positives in the command gate.

6. **#4222 – Infinite React/Ink render loop regression (Windows)**  
   [Issue #4222](https://github.com/github/copilot-cli/issues/4222) – 1 comment, 0 👍  
   Main pane freezes; output swallowed. Same bug previously fixed in #2802 has regressed in v1.0.72+.

7. **#4251 – Resume of large session OOM/grinds CPU for ~70 min (regression in 1.0.74)**  
   [Issue #4251](https://github.com/github/copilot-cli/issues/4251) – 0 comments, 0 👍  
   Memory usage jumps 3–4× compared to 1.0.73. Reported as triage issue but critical for power users.

8. **#1128 – Feature request: `awaitingUserInput` hook type**  
   [Issue #1128](https://github.com/github/copilot-cli/issues/1128) – 5 comments, 28 👍  
   Community strongly wants a hook that fires when the CLI is waiting for input, to trigger side-effects.

9. **#4214 – Eternal loading spinner on new sessions**  
   [Issue #4214](https://github.com/github/copilot-cli/issues/4214) – 2 comments, 2 👍  
   “Loading:” or “Loading: 1 skill” never resolves. User reports potential billing concern.

10. **#4242 – `/sandbox` command no longer available**  
    [Issue #4242](https://github.com/github/copilot-cli/issues/4242) – 3 comments, 0 👍  
    Closed but unexplained; `/sandbox` returns `Unknown command` in v1.0.74.

## Key PR Progress
No pull requests were updated or created in the last 24 hours.

## Feature Request Trends
- **Theming & accessibility** – Several requests for better hook support (`awaitingUserInput`), light-theme improvements, and Linux clipboard selection (`PRIMARY` vs `CLIPBOARD`).  
- **Plan mode enhancements** – Users want `/pr` to support SSH host aliases, better markdown rendering for code fences, and a way for agents to invoke `/rename`.  
- **Plugin & marketplace improvements** – Persistent registration, MCP server project-directory resolution, and better error handling for marketplace adds.  
- **Session & worktree management** – Configurable worktree paths, self-cleaning orphaned worktrees, and a 60‑second timeout on `archive_session` causing leaks.  
- **ACP / non-interactive parity** – Emission of `usage_update` events in `--acp` mode for context-window and credit indicators.

## Developer Pain Points
- **Regressions** – Plan-mode command gating is too aggressive; Ctrl+C disabled; React/Ink render loop returns; session resume OOM.  
- **Child process leaks** – Zombie processes under Linux are not being reaped, accumulating over time.  
- **Large session fragility** – CAPI payload limits, compaction gaps, and resume failures (OOM) degrade long-running workflows.  
- **Plugin installation bugs** – Directory path doubling on install; marketplace registrations not persisted.  
- **Password masking issues** – Agent reads masked passwords incorrectly, wastes tokens, and gets stuck.  
- **Platform-specific quirks** – Windows terminal and Linux X11/Wayland clipboard both have lingering integration gaps.

*Digest generated from GitHub data up to 2026-07-25 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the Kimi Code CLI community digest for 2026-07-25.

---

## Kimi Code CLI Community Digest
**Date:** 2026-07-25

### 1. Today's Highlights
Today's digest shows a community focused on enterprise readiness and cross-device workflow. While no new releases dropped in the last 24 hours, a long-standing login bug (#1070) was finally closed, likely resolved by the upcoming SSL_CERT_FILE support from PR #762. The most active discussion remains around a **Remote Control feature request** (#1282) which has garnered significant community support as a top workflow priority.

### 2. Releases
No new releases were published in the last 24 hours. The current stable version is `0.29.1`.

### 3. Hot Issues

1.  **#2556: `kimi login` fails** (OPEN)
    *   *Author: moodmosaic* | 👍: 0
    *   *Context:* A user on Linux ARM64 reports that `kimi login` fails immediately after purchase, creating a poor onboarding experience.
    *   *Why it matters:* This is a critical failure for new users on ARM platforms (e.g., Apple Silicon, Raspberry Pi), potentially blocking adoption. The issue is very recent (opened 2026-07-24).
    *   **Link:** MoonshotAI/kimi-cli Issue #2556

2.  **#2521: [Windows] Cannot use arrow keys to select in `herdr`** (OPEN)
    *   *Author: RambleRainbow* | 👍: 0
    *   *Context:* On Windows, the interactive terminal prompts (likely a TUI component) do not respond to arrow keys for selection.
    *   *Why it matters:* A significant UX blocker for Windows users, who represent a large portion of the developer market.
    *   **Link:** MoonshotAI/kimi-cli Issue #2521

3.  **#2326: VS Code Kimi Freezes** (OPEN)
    *   *Author: pctablet505* | 👍: 0
    *   *Context:* The VS Code extension frequently freezes on Ubuntu, leading to a poor integrated development experience.
    *   *Why it matters:* Extension stability is critical for user retention. This is a high-frequency complaint that impacts the core IDE workflow.
    *   **Link:** MoonshotAI/kimi-cli Issue #2326

4.  **#1282: [Enhancement] Remote Control Feature** (OPEN)
    *   *Author: CatKang* | 👍: **16**
    *   *Context:* Request to continue local CLI sessions from mobile or tablet.
    *   *Why it matters:* This is the most upvoted open issue. It reveals a strong desire for "session persistence" and a cloud-like experience without a full cloud migration.
    *   **Link:** MoonshotAI/kimi-cli Issue #1282

5.  **#1070: [CLOSED] Login failed: Network is unreachable** (CLOSED)
    *   *Author: notedit* | 👍: 0
    *   *Context:* Closed after 7 comments. The issue was a network connectivity problem related to corporate firewalls blocking `auth.kimi.com:443`.
    *   *Why it matters:* While closed, the related PR (#762) is still open, indicating the resolution may be dependent on a broader SSL proxy fix.
    *   **Link:** MoonshotAI/kimi-cli Issue #1070

### 4. Key PR Progress

1.  **#762: fix: respect SSL_CERT_FILE env var for corporate proxy support** (OPEN)
    *   *Author: aaraujodata* | 👍: 0
    *   *Summary:* Adds support for the standard `SSL_CERT_FILE` environment variable for corporate proxies (Zscaler, etc.). Fixes #760.
    *   *Why it matters:* Unblocks enterprise users behind strict corporate networks. This is a high-value fix for security-conscious teams and is directly linked to the high-volume proxy connectivity issues.
    *   **Link:** MoonshotAI/kimi-cli PR #762

2.  **#1637: fix: route MCP server log notifications to loguru instead of TUI** (OPEN)
    *   *Author: he-yufeng* | 👍: 0
    *   *Summary:* Prevents MCP server log notifications (e.g., from SearXNG) from flooding the main TUI by routing them to the `loguru` logging library.
    *   *Why it matters:* This is a quality-of-life fix that cleans up the UI, reducing visual noise from the MCP server backend.
    *   **Link:** MoonshotAI/kimi-cli PR #1637

### 5. Feature Request Trends
The community is strongly signaling a need for **Cross-Device Continuity and Cloud-Like Services**. The standout request is **Remote Control** (#1282, 16 👍), where users want to pick up a local CLI session from a phone or browser. This suggests a desire for a seamless "session-focused" model that outlives a single terminal window, similar to tmux but with better mobile support.

Minor requests include improvements to **interactive TUI selection** (specifically on Windows) and improved **error handling for authentication** flows.

### 6. Developer Pain Points
- **Network & Proxy Configuration:** A recurring theme is the difficulty in connecting from restrictive networks. Issues #1070 and #2556, along with the pending PR #762, show a clear need for robust, out-of-the-box SSL and proxy support.
- **Cross-Platform Inconsistencies:** Windows and Linux ARM64 users are hitting UX failures (arrow keys, login failures) that macOS users may not experience, highlighting a need for platform-specific QA.
- **IDE Integration Stability:** The VS Code extension freezing (#2326) is a major trust-breaker for developers who rely on the IDE as their primary environment.
- **Onboarding Friction:** The login failure immediately after purchase (#2556) represents a critical user acquisition leak.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-25

## Today’s Highlights
The `v1.18.5` patch lands with critical fixes for Claude adaptive thinking, OpenAI response phases, and long-standing Mistral stability issues. Meanwhile, the issue tracker is flooded with reports of agents stopping abruptly (especially with Ling 3.0 and Qwen models) and a growing demand for cross-project session management and per-tool performance metrics. A major PR refactors the core runner to eliminate all step-event locking, promising a lock-free settlement path for V2.

## Releases
**v1.18.5** — [Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.5)  
Core bugfixes:
- Improved Claude adaptive thinking handling across more response shapes.
- Avoided OpenAI Responses phase handling that could break conversations.
- Preserved grep symlink paths in search results (@remixz).
- Preserved Mistral reasoning history across turns and stabilized Mistral overall.

## Hot Issues (Top 10)

1. **#6231 – Auto-discover models from OpenAI-compatible providers**  
   *Author: ochsec | Comments: 32 | 👍 188*  
   Users must manually list models for local providers (LM Studio, Ollama). This is a top-voted feature request.  
   [Issue link](https://github.com/anomalyco/opencode/issues/6231)

2. **#24316 – Progress halts with Qwen 3.6 35b-a3b with naked tool call**  
   *Author: boutell | Comments: 19*  
   Agent stops after a tool call without reasoning—details suggest a llama.cpp/OpenCode interplay issue.  
   [Issue link](https://github.com/anomalyco/opencode/issues/24316)

3. **#31932 – Cross-project session list/picker for TUI**  
   *Author: mskadu | Comments: 13*  
   `/sessions` is per-project; users working across multiple repos need a unified session browser.  
   [Issue link](https://github.com/anomalyco/opencode/issues/31932)

4. **#25038 – Long-running shell commands (e.g., Gradle build) hang after “BUILD SUCCESSFUL”**  
   *Author: universe-st | Comments: 11 | 👍 9*  
   Process hangs despite completion. Affects Java/Android developers heavily.  
   [Issue link](https://github.com/anomalyco/opencode/issues/25038)

5. **#25130 – OpenCode jumping into a different language**  
   *Author: martinjackson | Comments: 10*  
   Sporadic language switch mid-session, likely a model prompt bleed issue.  
   [Issue link](https://github.com/anomalyco/opencode/issues/25130)

6. **#38378 – Kimi-k3 fails on Anthropic-compatible endpoint but works on OpenAI-compatible**  
   *Author: proluct | Comments: 4*  
   Specific gateway discrepancy; upstream request fail only on `/v1/messages`.  
   [Issue link](https://github.com/anomalyco/opencode/issues/38378)

7. **#38731 – “Is OpenCode unstable?” – agent stops repeatedly**  
   *Author: PHDiniiz | Comments: 4*  
   Cannot complete a single task without manual “continue”. Report on v1.18.4.  
   [Issue link](https://github.com/anomalyco/opencode/issues/38731)

8. **#38770 – Background subagent notification reverts manually-selected model**  
   *Author: jessie-amaranthine | Comments: 3*  
   Experimental `BACKGROUND_SUBAGENTS` silently overwrites model picker choice.  
   [Issue link](https://github.com/anomalyco/opencode/issues/38770)

9. **#38666 – Show per-tool elapsed time and turn duration in TUI/web UI**  
   *Author: feng653 | Comments: 3*  
   No visibility into tool execution time; productivity‑focused feature request.  
   [Issue link](https://github.com/anomalyco/opencode/issues/38666)

10. **#38738 – `opencode serve` bind failures print useless “Unexpected error / ServeError”**  
    *Author: dzianisv | Comments: 2*  
    The underlying errno is never surfaced, making debugging bind failures impossible.  
    [Issue link](https://github.com/anomalyco/opencode/issues/38738)

## Key PR Progress (Top 10)

1. **#38783 – fix(core): keep execute tool cache stable**  
   Keeps the native `execute` tool available when Code Mode catalog is empty; covers edge cases for empty/stable-empty/permission-denied states.  
   [PR link](https://github.com/anomalyco/opencode/pull/38783)

2. **#38743 – refactor(core): settle steps lock-free by joining tool fibers first**  
   Deletes all 12 `serialized()` semaphore sites in V2 runner, making settlement ~40 linear lines. Massive concurrency improvement.  
   [PR link](https://github.com/anomalyco/opencode/pull/38743)

3. **#38777 – fix(ai): preserve response message phases**  
   Aligns OpenAI Responses assistant phase handling with official SDK contract (`commentary`, `final_answer`, `null`).  
   [PR link](https://github.com/anomalyco/opencode/pull/38777)

4. **#38759 – fix(core): branch-keyed repository cache with gated reference readiness**  
   Fixes two correctness bugs in `RepositoryCache` – checkouts now keyed by branch instead of shared mutable state.  
   [PR link](https://github.com/anomalyco/opencode/pull/38759)

5. **#38778 – fix(opencode): keep DeepSeek assistant content non-empty**  
   DeepSeek returns `reasoning_content` with empty content; this ensures the assistant turn has actual content. Closes #38654.  
   [PR link](https://github.com/anomalyco/opencode/pull/38778)

6. **#38776 – feat(core): enable fff in node runtimes**  
   Adds `@ff-labs/fff-node` runtime dependency, replacing Node FFF stub with the same search adapter used by Bun.  
   [PR link](https://github.com/anomalyco/opencode/pull/38776)

7. **#38764 – fix(tui): handle Windows path separators in status dialog plugin names**  
   Root paths now display correctly on Windows in `/status` output.  
   [PR link](https://github.com/anomalyco/opencode/pull/38764)

8. **#36781 – feat(auth): add multiple profiles per provider**  
   Allows storing multiple API keys for the same provider with named profiles (e.g., different OpenRouter keys).  
   [PR link](https://github.com/anomalyco/opencode/pull/36781)

9. **#38772 – feat(tui): show model variant in subagent footer**  
   Displays model, provider, and variant details in subagent session footer, matching main-agent footer.  
   [PR link](https://github.com/anomalyco/opencode/pull/38772)

10. **#35195 – fix(session): preserve agent and model on async prompt without explicit fields**  
    Ensures async prompts retain the selected agent and model when fields are omitted. Rebase of #21729.  
    [PR link](https://github.com/anomalyco/opencode/pull/35195)

## Feature Request Trends

- **Model auto‑discovery** (#6231) remains the highest‑voted ask: users want OpenCode to automatically list models from OpenAI‑compatible endpoints.
- **Cross‑project session management** (#31932) – a unified `/sessions` across repos.
- **Performance observability** (#38666, #35496) – per‑tool timing and a native “research command” for automated experimental loops.
- **Provider profile independence** (multiple keys per provider: #36781, #18654 – change/remove email in Zen).
- **New model support** (#38722 – GPT‑5.6 models, #38219 – Kimi/Qwen in Go plan).
- **UX improvements** (#34006 – consistent paste behavior between Desktop and Terminal).

## Developer Pain Points

- **Agent abrupt stops** – multiple reports (#38731, #38766, #38782, #38749, #38756) across diverse models (Ling 3.0, Qwen, generic agents). Users must manually type “continue” repeatedly, breaking workflow.
- **Hanging / freeze after completion** (#25038) – long‑running shell commands (Gradle, builds) hang indefinitely.
- **Session management fragility** (#38771 – close/delete crashes; #38730 – one‑shot `run` hangs before session creation).
- **Model configuration issues** (#38378, #38219 – upstream request failures for Kimi/Qwen; #38770 – background agent reverts model selection).
- **Windows‑specific pain** (#38764 – path separators in TUI; #38715 – console window flash on subprocess spawn).
- **Error message opacity** (#38738 – bind failures hide errno; #38665 – truncated deprecation URL).

*Digest generated from [anomalyco/opencode](https://github.com/anomalyco/opencode) data as of 2026-07-25.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-25

## 1. Today’s Highlights
The `v0.82.0` release ships with constrained tool sampling, enabling strict JSON Schema or grammar-based control over tool calls. Meanwhile, the community is focused on compaction failures with Copilot Enterprise, default model detection for self-hosted `llama.cpp`, and a spate of bugs around model switching that can corrupt sessions. A steady stream of patches for Anthropic OAuth detection, Wayland copy fallbacks, and proxy handling shows the team is actively addressing developer pain points.

## 2. Releases
### [v0.82.0](https://github.com/earendil-works/pi/releases/tag/v0.82.0)
- **Constrained tool sampling** – Tools can now prefer or require strict JSON Schema sampling or use OpenAI Lark/regex grammars. Model capability metadata prevents sending unsupported requests to providers that lack grammar support. Full docs: [Constrained Sampling for Tools](https://github.com/earendil-works/pi/blob/v0.82.0/packages/ai/docs/constrained-sampling.md).

## 3. Hot Issues

1. **[#6768 – Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)**  
   Open, 12 comments, 11 👍. Users on Copilot Enterprise licenses get a `421 Misdirected Request` or summarization failure during compaction. High community interest.

2. **[#6922 – Default model cannot be a llama.cpp model: startup shows "No models available"](https://github.com/earendil-works/pi/issues/6922)**  
   Open, 6 comments, 10 👍. Setting `defaultProvider: "llama.cpp"` fails to pick up loaded models, blocking local-first setups.

3. **[#6951 – Qwen 3.8 Max reasoning effort mapping missing](https://github.com/earendil-works/pi/issues/6951)**  
   Open, 7 comments, 1 👍. Pi’s `thinkingLevelMap` uses incorrect tiers for Qwen models; only `low`, `medium`, `xhigh` are valid.

4. **[#7047 – Gemini 3.x tool-call IDs stripped from function calls/responses](https://github.com/earendil-works/pi/issues/7047)**  
   Open, 4 comments, 1 👍. Multi-turn tool calls against Gemini break because the required `id` field is dropped during history replay.

5. **[#7048 – Compaction summary truncated mid-word when token cap reached](https://github.com/earendil-works/pi/issues/7048)**  
   Open, 3 comments. `generateSummary` ignores `stopReason: "length"`, leading to truncated summaries that silently break context.

6. **[#6970 – GitHub Copilot Plugin integration causes token invalidation](https://github.com/earendil-works/pi/issues/6970)**  
   Open, 3 comments, 1 👍. Using `copilot-lsp` alongside Pi leads to OAuth token invalidation due to conflicting client identifiers.

7. **[#6998 – DeepSeek via Aliyun should use `thinkingFormat: qwen`](https://github.com/earendil-works/pi/issues/6998)**  
   Open, 3 comments. Models override the correct `compat` and `thinkingLevelMap` from DeepSeek, causing incompatibility.

8. **[#7020 – Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)**  
   Open, 3 comments, 1 👍. Long-running coordinator sessions hit compaction warts — silence after compaction, possible race condition.

9. **[#7008 – Connection refused behind corporate proxy with HTTP_PROXY](https://github.com/earendil-works/pi/issues/7008)**  
   Open, 2 comments. Since v0.80.x, HTTP(S)_PROXY env vars break all HTTP requests; npm continues working, pointing to Undici issues.

10. **[#7049 – Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding](https://github.com/earendil-works/pi/issues/7049)**  
    Open, 2 comments. Pi pins Undici 8.5.0 which defaults `proxyTunnel: true`, breaking plain HTTP targets behind proxy.

## 4. Key PR Progress

1. **[#7085 – Add vitest eval harness for Pi SDK](https://github.com/earendil-works/pi/pull/7085)**  
   Open. Adds a private `packages/evals` workspace with `vitest-evals` and an isolated smoke eval.

2. **[#7032 – Expose unavailable scoped models](https://github.com/earendil-works/pi/pull/7032)**  
   Open. Preserves unresolved model patterns in `/models` and renders them with remove/persist actions.

3. **[#7081 – Support Claude Opus 5 on Bedrock](https://github.com/earendil-works/pi/pull/7081)**  
   Open. Configures adaptive thinking for Opus 5; fixes error message disclosure on Bedrock.

4. **[#7082 – O(viewport) transcript rendering](https://github.com/earendil-works/pi/pull/7082)**  
   Closed. Container memoization and viewport windowing eliminate input lag on large transcripts.

5. **[#7072 – Cache llama.cpp model catalog](https://github.com/earendil-works/pi/pull/7072)**  
   Open. Fixes race condition where `defaultModel` isn’t applied at startup (fixes #6948).

6. **[#7061 – Handle array content and missing finish_reason in openai-completions](https://github.com/earendil-works/pi/pull/7061)**  
   Closed. Fixes `[object Object]` content and missing `finish_reason` for Databricks models.

7. **[#7055 – Prevent retry on tool validation errors](https://github.com/earendil-works/pi/pull/7055)**  
   Closed. Stops agent retries when LLM sends malformed tool arguments – prevents infinite loops.

8. **[#7050 – Normalize OpenAI tool schema required arrays](https://github.com/earendil-works/pi/pull/7050)**  
   Closed. Fixes DeepSeek’s rejection of `required: null` by emitting `required: []` for object schemas.

9. **[#7036 – Reload model config in picker](https://github.com/earendil-works/pi/pull/7036)**  
   Closed. `ModelRuntime.refresh()` now reloads `models.json` so `/model` picks up local changes immediately.

10. **[#7009 – Await wl-copy exit code and fall through to xclip](https://github.com/earendil-works/pi/pull/7009)**  
    Closed. Fixes `/copy` false success in sandboxed environments by awaiting exit code and allowing fallbacks.

## 5. Feature Request Trends

- **Constrained sampling for tools** (just released in v0.82.0) was the dominant request; now live.
- **Expanded provider support**: Requests for Eden AI, more OAuth flexibility, and native Qwen reasoning effort maps.
- **Better model switching**: Validate context size, convert thinking blocks, and prevent silent failures when switching between providers.
- **Extension API improvements**: Custom renderers, resource discovery scoping, and safe `ctx.reload()`.
- **Proxy & network robustness**: Upgrade Undici, handle plain-HTTP proxy correctly, support behind corporate proxies.
- **Model catalog caching**: Avoid repeated network calls for local providers like llama.cpp.

## 6. Developer Pain Points

- **Compaction failures** (esp. Copilot Enterprise, token cap truncation, session hangs) remain the most-reported pipeline blocker.
- **Model switching breaks sessions** – switching between providers (e.g., Qwen→GPT) produces HTML errors, context overflow, or tool-call ID mismatches.
- **Authentication confusion** – Anthropic OAuth token detection is hardcoded to `sk-ant-oat`, Copilot Plugin keys get invalidated, and Bedrock provider ignores profile when env vars are set.
- **Local-first setup friction** – `llama.cpp` models are not picked as default at startup, and the model refresh races with session initialisation.
- **Proxy tunnels misconfigured** – Requests to plain HTTP endpoints through `HTTP_PROXY` are incorrectly tunnelled, breaking many corporate setups.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-25

---

## **Today's Highlights**

- **Official v0.21.0 released** alongside a nightly build with a critical CLI fix for insight timezone handling.
- **Multiple DSW SWE-bench Verified POC runs** completed 500/500 cases with 332 resolved (66.4%) – results are quarantined but mark continued progress on the automated benchmark pipeline.
- A batch of **performance and reliability PRs** landed, including lazy-loading of first-use dependencies and a status sidecar to prevent background shell misreads.

---

## **Releases**

### v0.21.0-nightly.20260725.1183a4c82  
- **Fix**: `cli`: measure insight days and hours in local time everywhere (PR #7670) – resolves the inconsistent UTC-vs-local timezone issue in `/insight` reports.

### v0.21.0  
- Full release with no breaking changes. Includes features from the nightly cycle. See the complete change list on GitHub.

### DSW SWE-bench Verified POC Runs (v0.20.0-nightly.20260722 based)  
Four isolated prerelease runs (Runs 2, 3, 4, and an async POC) each completed the full 500-case `swe-bench/swe-bench-verified@2` dataset. Best result: **332 resolved, 107 unresolved, 56 execution errors, 5 infrastructure failures** (Run R3). All results are **QUARANTINED** – not official releases.

[View releases](https://github.com/QwenLM/qwen-code/releases)

---

## **Hot Issues**

1. **#5800** – `bug(cli)`: last line of replies taller than terminal is overwritten on completion (Static mode). Upstream Ink #973. 8 comments. P2, welcome-pr.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/5800)

2. **#7485** – `CLOSED` Large blank area between last message and input prompt after `qwen resume`. 6 comments. P2, UI rendering.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7485)

3. **#7684** – `bug(cli)`: Command mode statusline multiple lines causes input method candidate box to display far from cursor. 5 comments. P2, macOS.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7684)

4. **#7264** – `enhancement`: Cold-start follow-ups – remaining lazy-loading candidates from ACP eager-closure audit. 5 comments. P2, performance.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7264)

5. **#7631** – `bug(core)`: `[AcpBridge] xterm.js: Parsing error` flooding in WeChat channel. 5 comments. Need-information.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7631)

6. **#7669** → PR landed: **Status sidecar** to prevent model relaunch of still-running background shells when output file is empty (long-running buffered jobs). 3 comments. P2.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7626) (linked)

7. **#7697** – `bug(integration)`: Qwen Code VS Code cannot connect to Unity MCP while Claude Code can. 3 comments. P2, integration.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7697)

8. **#7679** – `bug(core)`: QWEN.md multi-agent ban overridden by system default Explore guidance. 3 comments. P2, core.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7679)

9. **#7659** – `bug(core)`: `tool_choice: "required"` rejected in thinking mode – fix requires manual `thinkingMandatory` config. 3 comments. P2.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/7659)

10. **#7696** – `feature-request`: Service Agent Engine – agent-agnostic runtime for background auto-control agents. 2 comments. P3, roadmap.  
    [Issue](https://github.com/QwenLM/qwen-code/issues/7696)

---

## **Key PR Progress**

1. **#7268** – `feat(serve)`: Hot-reload workspace trust changes without daemon restart. Introduces semantic trust-policy snapshots.  
   [PR](https://github.com/QwenLM/qwen-code/pull/7268)

2. **#7680** – `perf(web-shell)`: Paint composer git chip before git status completes – uses cached per-workspace summary.  
   [PR](https://github.com/QwenLM/qwen-code/pull/7680)

3. **#7586** – `feat(integrations)`: Add retrieval-only external context search (Phase 1 of private Direct External Context Provider).  
   [PR](https://github.com/QwenLM/qwen-code/pull/7586)

4. **#7669** – `fix(core)`: Write status sidecar (`shell-<id>.status`) next to background shell output files to prevent model misreads. **Merged.**  
   [PR](https://github.com/QwenLM/qwen-code/pull/7669)

5. **#7686** – `perf(core)`: Lazy-load first-use dependencies – reduces cold-start static import closure.  
   [PR](https://github.com/QwenLM/qwen-code/pull/7686)

6. **#7632** – `feat(channels)`: GitHub polling adapter with notification-as-wakeup architecture – responds to @mentions on issues/PRs.  
   [PR](https://github.com/QwenLM/qwen-code/pull/7632)

7. **#7694** – `fix(acp)`: Sweep review worktree leases at end of each prompt turn – prevents leftover temp branches. **Merged.**  
   [PR](https://github.com/QwenLM/qwen-code/pull/7694)

8. **#7698** – `feat(dingtalk)`: Support outbound image delivery via `[IMAGE: ...]` marker → Media ID upload.  
   [PR](https://github.com/QwenLM/qwen-code/pull/7698)

9. **#7637** – `feat(serve)`: Expose workspace Channel management API – CRUD, lifecycle, pairing-request approval. **Merged.**  
   [PR](https://github.com/QwenLM/qwen-code/pull/7637)

10. **#7656** – `ci`: Add isolated DSW SWE-bench release pipeline – async GitHub Release → PostgreSQL queue → executor → grader → publisher.  
    [PR](https://github.com/QwenLM/qwen-code/pull/7656)

---

## **Feature Request Trends**

From this week’s 27 active issues, the following directions are most requested:

- **Subagent & fork model flexibility**: Multiple requests for spawn-time model grade selection (`model` parameter on `agent` tool, #7685) and fork profiles with tool-restriction presets (#7625).  
- **Background automation**: “Service Agent Engine” (#7696) and managed background auto-control agents.  
- **Image generation**: User-configured image generation models separate from chat model (#7606, #7687 for DingTalk delivery).  
- **External integrations**: GitHub polling adapter (#7632), MCP compatibility improvements (#7697), DingTalk image delivery (#7687).  
- **Performance metrics**: Tokens-per-second and time-to-first-token in `/stats` (#4252).  
- **Configuration enhancements**: Configurable stream rate-limit retry delays (#7658), channel-scoped user-level skills loading (#7575).

---

## **Developer Pain Points**

Several recurring issues reflect developer friction:

- **UI/terminal rendering**: Last-line overwritten (#5800), blank areas after resume (#7485), input method cursor misplacement (#7684), WSL + Windows Terminal duplicate text (#7634).  
- **Background shell handling**: Model relaunches buffered long-running jobs because output file is empty (#7626) – fixed by PR #7669 status sidecar.  
- **Thinking mode tool_choice restriction**: HTTP 400 when using `tool_choice: "required"` with thinking models (#7659).  
- **Plan mode exit**: Model not notified on manual mode switch, unhelpful deny error (#7671).  
- **Rate-limit retry hardcoded**: 60s/120s/240s delays not configurable (#7658).  
- **Timezone inconsistency**: Insight heatmap and streak used UTC vs local time (fixed in nightly #7670, see issue #6835).  
- **Cold-start performance**: Large eager static import closure (17.24 MiB / 2420 modules) delays ACP child process initialization (#7264) – PR #7686 addresses lazy-loading.

*Digest generated from GitHub data on 2026-07-25.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-25

## Today's Highlights

The project officially shipped **v0.9.1**, marking the rebranding to **CodeWhale** (the legacy `deepseek-tui` npm package is deprecated). Under the hood, the v0.9.2 refactor train accelerates: a flurry of architecture issues and PRs land for the Fleet/Workflow/Lane/Runtime orchestration model, alongside major code-splitting epics and the first wave of localization expansion (Hindi, Ukrainian). A critical CI recovery workflow for derived release channels (Docker, Homebrew) was also merged after v0.9.1 left those channels stale.

## Releases

- **v0.9.1** — *Codewhale* becomes the official product name; the `codewhale` command, npm package, and release assets now use lowercase technical identifiers. The legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users migrating from v0.8.x must switch to the `codewhale` binary.  
  [View Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.1)

## Hot Issues (10 noteworthy)

1. **[#2870 – EPIC: staged command-boundary refactor for #2791](https://github.com/Hmbown/CodeWhale/issues/2870)**  
   *comments: 17* — Tracks the layered merge plan for command-boundary separation. A sign of the team’s disciplined approach to large architectural changes.

2. **[#4178 – v0.9.2: Stopship workflow as fleet-backed lane](https://github.com/Hmbown/CodeWhale/issues/4178)**  
   *comments: 12* — Dogfoods the new Fleet/Workflow/Lane/Runtime model against active stopship issues. High community interest in real-world validation of the orchestration model.

3. **[#4175 – v0.9.2 architecture: Fleet / Workflow / Lane / Runtime product model](https://github.com/Hmbown/CodeWhale/issues/4175)**  
   *comments: 11* — The canonical tracker for the new separation of concerns. Prevents conceptual collapse; linked to all Phase 2/3 implementations.

4. **[#689 – deepseek doctor passes but deepseek run fails](https://github.com/Hmbown/CodeWhale/issues/689)**  
   *comments: 8* — A persistent user pain point: diagnostics pass but the TUI silently fails. Multiple environment variables and sandbox configurations suspected.

5. **[#1004 – /dryrun: preview the next chat completion request](https://github.com/Hmbown/CodeWhale/issues/1004)**  
   *comments: 4* — Highly requested feature for long context heavy users; avoids wasted tokens on unwanted requests. Community is actively voting for this.

6. **[#3480 – v0.9.2 EPIC: TUI information architecture and visual UX overhaul](https://github.com/Hmbown/CodeWhale/issues/3480)**  
   *comments: 3* — After dogfooding, the team identified that the TUI shows raw state but not actionable info. This epic promises a ground-up UX rethink for multi-agent work.

7. **[#3313 – Split RuntimeThreadManager into store, executor, events, and types](https://github.com/Hmbown/CodeWhale/issues/3313)**  
   *comments: 3* — A 7,133-line module is being broken up. Reflects the project’s commitment to maintainability as the codebase grows.

8. **[#1829 – SSH connection failure: exit code 255 (sandbox outbound block)](https://github.com/Hmbown/CodeWhale/issues/1829)**  
   *comments: 2* — Users on Windows report the built-in shell sandbox blocks outbound SSH to ports other than 22. A sandbox configuration gap.

9. **[#4790 – Add Hindi localization with Devanagari terminal-shaping spike](https://github.com/Hmbown/CodeWhale/issues/4790)**  
   *comments: 1* — India is a large developer population; this issue opens the first Devanagari locale. Expect community contributions for testing terminal shaping.

10. **[#4796 – Multimodal §8: security, privacy, and billing honesty for audio/image routes](https://github.com/Hmbown/CodeWhale/issues/4796)**  
    *comments: 1* — Sending audio/images off-device without user awareness is called out as a privacy gap. The team plans to add explicit routing disclosures.

## Key PR Progress (10 important)

1. **[#4802 – ci(release): replace unusable recovery input with standalone workflow](https://github.com/Hmbown/CodeWhale/pull/4802)**  
   Fixes the broken `workflow_dispatch` approach from #4801. Now provides a reliable recovery path for Docker and Homebrew channels that missed v0.9.1.

2. **[#4801 – ci(release): add a recovery path for derived channels](https://github.com/Hmbown/CodeWhale/pull/4801)** (closed)  
   Original attempt; dispatching failed due to input schema mismatch. Learned lesson, replaced by #4802.

3. **[#4799 – fix(web): advance the published-release fact to v0.9.1](https://github.com/Hmbown/CodeWhale/pull/4799)**  
   Stale version string on the install page. Manual advancement policy keeps install commands accurate.

4. **[#4793 – chore(workflows): delete seven v0.8.68 lane scripts](https://github.com/Hmbown/CodeWhale/pull/4793)**  
   Cleans up first-generation workflow scripts that were pinned to closed issues. Reduces CI noise.

5. **[#4798 – ci: require every PR to close an issue or say why it doesn't](https://github.com/Hmbown/CodeWhale/pull/4798)**  
   Automation for backlog hygiene: 329 of 342 open issues were touched this month, but many lack closure. This PR adds a check.

6. **[#4776 – ci(web): auto-deploy codewhale.net on push to main](https://github.com/Hmbown/CodeWhale/pull/4776)**  
   Fixes manual deployment gap; the site was drifting behind `main`. Now deploys automatically.

7. **[#4768 – docs(agents): adopt "intent is the artifact" as operating stance](https://github.com/Hmbown/CodeWhale/pull/4768)**  
   Records the new agent development philosophy: generating fresh code against `main` is cheaper than reconciling old code.

8. **[#4792 – ci(triage): stop over-labelling well-specified issues](https://github.com/Hmbown/CodeWhale/pull/4792)**  
   Fixes auto-labelling that was adding `bug, question` to well-written issues (e.g., #4787, #4790). Reduces label noise.

9. **[#4611 – fix(goal): continue durable goals across turns](https://github.com/Hmbown/CodeWhale/pull/4611)**  
   Carries active goal state across live-session turns; adds typed continuations for pause, clear, completion, budget exhaustion, and route changes.

10. **[#4608 – fix(tui): align permission postures and compact approvals](https://github.com/Hmbown/CodeWhale/pull/4608)**  
    Preserves Full Access across subagent handoffs; fail-closed for safety and repository-law holds; makes Auto-Review fully autonomous.

## Feature Request Trends

From the issue set, the most requested directions are:

- **Localization expansion** – Hindi, Ukrainian, and a formal matrix for TUI packs (issues #4790, #4791, #4787). The team is actively building out non-English locale support.
- **Multimodal capability** – Model catalog improvements to make vision/modality a first-class routed capability (#4794), plus security/privacy disclosures for audio/image routes (#4796). Community wants clarity on what gets sent and where.
- **TUI UX overhaul** – A complete information architecture refresh (#3480) and a hotbar command surface (#3389) are in progress. Users find the current TUI too state-heavy and not actionable.
- **Workflow orchestration refinement** – Fleet role gates, handoff semantics, and durable goals across turns (#4177, #4179, #4611). Developers building agent workflows want explicit control flow.
- **User-configurable policies** – Amendments to the constitution (#4783), configurable approval postures (#4608), and per-model routing rules. Power users demand custom guardrails.
- **Performance improvements** – O(N²) streaming thinking cell (#3903), @-mention filesystem re-walk (#3899), and large file splits (multiple refactor epics). The community values responsive tooling.

## Developer Pain Points

- **Diagnostic false negatives** – `deepseek doctor` passes but `deepseek run` silently fails (#689). This erodes trust in the health check.
- **Sandbox limitations** – SSH connections blocked by the built-in shell sandbox (#1829), especially on Windows. Users need more granular outbound network control.
- **Release channel gaps** – v0.9.1 missed Docker and Homebrew updates (#4801, #4802). Community relies on these for CI/CD pipelines.
- **Monolithic files** – Large modules like `RuntimeThreadManager` (7k+ lines) and `ui/tests.rs` (12k lines) make contributions and reviews difficult. Multiple split issues (#3313, #3951, #3948) reflect this pain.
- **Missing preview/debug features** – The `/dryrun` command (#1004) is repeatedly requested to avoid costly wasted turns with large context.
- **Localization gaps** – No Indian language support and no Ukrainian alongside Russian (#4790, #4791). The team is addressing this, but it’s a known friction for global developers.
- **Unclear multimodal security** – Audio/image routes send data off-device without user awareness (#4796). Developers want explicit billing and privacy signals before any non-text media is transmitted.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*