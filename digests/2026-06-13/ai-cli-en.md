# AI CLI Tools Community Digest 2026-06-13

> Generated: 2026-06-13 00:32 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools — June 13, 2026

## 1. Ecosystem Overview

The AI CLI tools ecosystem is entering a **stabilization phase** following rapid feature expansion. All seven major tools shipped releases or patches this week, but the dominant narrative has shifted from *"what can this tool do?"* to *"can I trust this tool in production?"*. Safety false positives, silent context compaction, Windows sandbox failures, and billing transparency are the top cross-cutting concerns. Claude Code leads in release velocity (3 patches in 24 hours) and community engagement depth, while the Chinese ecosystem tools (Qwen Code, Kimi Code) show rapid iteration but struggle with ecosystem trust and compatibility. The most significant architectural signal is the **provider-agnosticism push** — users increasingly refuse to be locked into a single model backend.

## 2. Activity Comparison

| Tool | New Issues (24h) | Open PRs | Latest Release | Release Velocity |
|------|------------------|----------|----------------|------------------|
| **Claude Code** | ~10 hot issues | 2 | v2.1.174–176 (3 patches) | Very High (multi-patch daily) |
| **OpenAI Codex** | ~10 hot issues | 9 active | rust-v0.140.0-alpha.13–16 (4 alpha) | Very High (alpha churn) |
| **Gemini CLI** | 10 tracked | 10 active | v0.48.0-nightly.20260613 | High (nightly cadence) |
| **GitHub Copilot CLI** | 10 tracked | 1 | v1.0.62-1 | Low-Moderate (monthly patches) |
| **Kimi Code CLI** | 5 tracked | ~1–2 | v1.41.0 (no 24h release) | Low (stalled) |
| **OpenCode** | 10 tracked | 10 active | v1.17.4 | Moderate (weekly releases) |
| **Pi (pi-mono)** | 10 tracked | 10 active | v0.79.2 | High (continuous) |
| **Qwen Code** | 10 tracked | 10 active | v0.18.0 | High (rapid patches) |
| **DeepSeek TUI** | 10 tracked | 10 active | v0.8.59 | Moderate |

**Key observation**: No tool is release-silent, but **Claude Code**, **OpenAI Codex**, and **Gemini CLI** dominate active development. **Kimi Code CLI** is notably stalled with no recent releases and unresolved critical bugs (quota calculation, infinite loops).

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities:

| Requirement | Tools Demanding | Specific Notes |
|-------------|----------------|----------------|
| **Granular context management** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI | Users want file-backed compaction, selective context pruning, pinned context — not all-or-nothing summarization. Claude Code's #17428 (file-backed /compact, 89👍) and GitHub Copilot's #2627 (configurable system prompt, 17👍) are leading signals. |
| **Session/history organization** | OpenAI Codex (#12564, 111👍), Claude Code (#28351, 87👍), GitHub Copilot CLI, Qwen Code | Renaming tasks, thread continuity across reloads, slash commands in remote mode. Users want persistent, navigable session history. |
| **Remote-control parity** | Claude Code, Gemini CLI, DeepSeek TUI | CLI commands must work over remote/SSE/WebSocket connections. Slash commands, model switching, and permission prompts are missing in non-TUI modes. |
| **Provider agnosticism** | DeepSeek TUI (#3018), Pi (#5363, #5673), Qwen Code, Kimi Code | Hardcoded model IDs, missing thinking formats, and provider-specific error handling are blocking multi-provider adoption. DeepSeek TUI's un-hardcoding effort is the most advanced. |
| **Cross-platform stability** | OpenAI Codex (Windows sandbox), Kimi Code (Windows WS), Qwen Code (Windows VSIX), GitHub Copilot CLI | Windows remains the weakest platform across all tools. UAC, sandbox, and process-elevation issues dominate bug reports. |
| **Token/cost transparency** | Claude Code (#65359, #67506), Gemini CLI, Kimi Code (#1994), GitHub Copilot CLI (#2627) | Users demand real-time token burn rates, billing breakdowns, and graceful fallback when models escalate beyond plan limits. |
| **Safety/security tuning** | Claude Code (Fable 5 false positives), OpenAI Codex, Pi | Oversensitive safety classifiers blocking legitimate engineering work. Users want adjustable thresholds, not just binary allow/block. |
| **CI/CD integration** | Kimi Code, Qwen Code, GitHub Copilot CLI | `--dry-run`, `--json` output, timeout flags, and non-interactive modes for pipeline usage. |

## 4. Differentiation Analysis

| Tool | Core Differentiator | Target User | Technical Approach |
|------|---------------------|-------------|-------------------|
| **Claude Code** | Best-in-class agent reasoning + Anthropic model integration | Professional developers, enterprise teams | Monolithic agent with rich model integration; MCP-based tool ecosystem |
| **OpenAI Codex** | Multi-session segmentation + Rust alpha performance | Rust developers, Windows users | Rust-native CLI with sandbox isolation; session segmentation architecture |
| **Gemini CLI** | Google Cloud/Vertex integration + skill ecosystem | GCP-centric teams, enterprise | Sub-agent orchestration with skill files; nightly pre-release cycle |
| **GitHub Copilot CLI** | GitHub ecosystem lock-in + simple onboarding | GitHub-centric developers | Minimalist CLI; GitHub auth + Copilot backend; limited extensibility |
| **Kimi Code CLI** | Chinese-language + Kimi model optimization | Chinese developers | Python-based; heavy reliance on kimiCode token system |
| **OpenCode** | Open-source, permission system, ACP protocol | Open-source enthusiasts, multi-provider users | Permission-driven architecture with SQLite backend; ACP interop |
| **Pi** | Lightweight, multi-provider, extension API | Indie developers, tinkerers | Node.js/TypeScript; plugin architecture; broad provider support |
| **Qwen Code** | Qwen model optimization + VS Code integration | Qwen ecosystem users, VS Code developers | TypeScript/Go hybrid; VS Code extension + CLI; fast bug-fix cadence |
| **DeepSeek TUI** | Terminal-first UX + multi-provider flexibility | Terminal power users, self-hosters | Rust TUI with sidebar; hippocampal memory system; configurable keymaps |

**Key insight**: The tools are converging on feature parity but diverging on *ecosystem lock-in*. Claude Code and GitHub Copilot CLI are closed-ecosystem plays (Anthropic/GitHub), while Gemini CLI, OpenCode, Pi, and DeepSeek TUI explicitly embrace multi-provider architectures. Qwen Code and Kimi Code exist primarily to showcase their respective base models.

## 5. Community Momentum & Maturity

| Tier | Tools | Characteristics |
|------|-------|-----------------|
| **High Momentum, Maturing** | Claude Code, Gemini CLI, OpenCode, Pi | Regular releases, responsive issue triage, growing PR contributions, clear roadmaps. Claude Code has the most engaged community (89👍 on single feature request) |
| **High Churn, Unstable** | OpenAI Codex | Very active development (4 alpha releases/day) but Windows stability crisis suggests the Rust rewrite is still in rough shape. Community trust is fragile. |
| **Moderate, Consistent** | Qwen Code, DeepSeek TUI | Steady improvement, good PR throughput, but community size is smaller. Qwen Code's OAuth free-tier drama (#3203, 126 comments) shows policy friction. |
| **Stagnating** | GitHub Copilot CLI, Kimi Code CLI | Low release velocity, high backlog of unresolved bugs (#53 has 75👍 with no response in 6 months). Risk of user migration to more active alternatives. |

**Copilot CLI warning sign**: Issue #53 ("Bring back CLI commands") has **no official response after 6 months** despite being the top-voted open issue. Users are building community forks. This is a retention crisis for what should be Microsoft's flagship AI CLI.

## 6. Trend Signals

### For Developers Evaluating Tools:
1. **Don't bet on a single model backend**: Every multi-provider tool is seeing spikes in adoption. Tools that lock you into one model (Claude Code → Anthropic, Qwen Code → Qwen, Kimi Code → Kimi) carry migration risk. **Pi** and **DeepSeek TUI** are the most genuinely provider-agnostic.

2. **Windows support is not a given**: Every tool has Windows issues. If you're on Windows, **OpenCode** and **GitHub Copilot CLI** have the fewest platform-specific critical bugs. Avoid **Kimi Code CLI** (WebSocket broken) and **OpenAI Codex Rust** (sandbox crisis) for now.

3. **Context management is the new performance benchmark**: The shift from "which model is smarter?" to "how well does this tool manage its context window?" is accelerating. **Claude Code**'s file-backed compaction proposal and **Gemini CLI**'s AST-aware file reads are the most promising approaches. Tools without granular context controls will fall behind.

4. **Cost blowback is growing**: Three separate billing/trust crises emerged this week: Claude Code's 1M-context escalation without fallback, Kimi Code's 2-hours-for-2-questions quota discrepancy, and Qwen Code's free tier reduction. Teams should budget for 2–3× expected costs until tools mature their billing transparency.

### Industry-Level Observations:
- **The "Fable 5 Effect"**: Safety classifiers trained for consumer chatbots are crippling developer tools. Expect a backlash as more tools ship aggressive safety layers without developer-mode overrides.
- **Windows as the neglected platform**: The concentration of Windows bugs across every tool suggests AI CLI developers are primarily macOS/Linux users. This is a market opportunity for whoever ships a truly stable Windows AI CLI.
- **Multi-tool adoption is real**: Qwen Code's `/import-config` feature (#4845) and DeepSeek TUI's Claude Code modernization PR (#2865) confirm that developers use **multiple AI CLIs** and want migration paths. The "winner-take-all" scenario is unlikely.
- **Rust is winning the rewrite wars**: OpenAI Codex (Rust alpha), DeepSeek TUI (Rust), and Gemini CLI (Rust-adjacent) all point to Rust as the preferred language for performance-sensitive AI CLI tooling. Node.js (Pi) and Python (Kimi Code) are increasingly outliers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date**: 2026-06-13 | **Source**: github.com/anthropics/skills

---

## 1. Top Skills Ranking

### 1.1 `frontend-design` skill improvements (PR #210)
- **Functionality**: Revises the frontend-design skill for clarity, actionability, and internal coherence—ensuring every instruction is executable within a single conversation.
- **Discussion highlights**: High community interest in making frontend guidance more precise and less ambiguous; emphasis on reducing Claude's tendency to generate overly generic UI code.
- **Status**: Open (created 2026-01-05)
- **Link**: https://github.com/anthropics/skills/pull/210

### 1.2 `document-typography` skill (PR #514)
- **Functionality**: Prevents orphan word wrap (1–6 words spilling onto next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment in AI-generated documents.
- **Discussion highlights**: Community widely affirmed that typographic defects affect *every* AI-generated document. Users reported frustration with manual post-processing.
- **Status**: Open (created 2026-03-04)
- **Link**: https://github.com/anthropics/skills/pull/514

### 1.3 `ODT` skill (PR #486)
- **Functionality**: OpenDocument text creation, template filling, and ODT-to-HTML parsing. Triggers on `ODT`, `ODS`, `ODF`, or `OpenDocument` mentions.
- **Discussion highlights**: Demand for open-standard document formats; community noted LibreOffice/ODF is widely used in enterprise and government contexts.
- **Status**: Open (created 2026-03-01)
- **Link**: https://github.com/anthropics/skills/pull/486

### 1.4 `SAP-RPT-1-OSS` predictor skill (PR #181)
- **Functionality**: Wraps SAP's open-source tabular foundation model for predictive analytics on SAP business data.
- **Discussion highlights**: Significant enterprise interest; community requested clarity on data privacy when passing SAP data through Claude.
- **Status**: Open (created 2025-12-28)
- **Link**: https://github.com/anthropics/skills/pull/181

### 1.5 `testing-patterns` skill (PR #723)
- **Functionality**: Covers the full testing stack—testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and E2E testing.
- **Discussion highlights**: Strong demand for opinionated testing guidance; community disagreed on whether the skill should also cover legacy testing frameworks.
- **Status**: Open (created 2026-03-22)
- **Link**: https://github.com/anthropics/skills/pull/723

### 1.6 `n8n-builder` / `n8n-debugger` skills (PR #190)
- **Functionality**: Expert skills for building n8n workflows from scratch and debugging n8n automation failures.
- **Discussion highlights**: Community highlighted n8n as the leading open-source automation platform; requested companion skills for related tools (Make, Zapier).
- **Status**: Open (created 2025-12-31)
- **Link**: https://github.com/anthropics/skills/pull/190

### 1.7 `agent-creator` skill (PR #1140)
- **Functionality**: Meta-skill for creating task-specific agent sets; includes fixes for multi-tool evaluation and Windows compatibility.
- **Discussion highlights**: Community identified this as essential for building modular agent workflows; addressed critical stability bugs.
- **Status**: Open (created 2026-05-15)
- **Link**: https://github.com/anthropics/skills/pull/1140

### 1.8 `color-expert` skill (PR #1302)
- **Functionality**: Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and accessibility.
- **Discussion highlights**: Surprising level of engagement; community valued the comprehensive reference tables and the "what to use when" color space guide.
- **Status**: Open (created 2026-06-10)
- **Link**: https://github.com/anthropics/skills/pull/1302

---

## 2. Community Demand Trends

Based on the most-commented Issues, the community's top anticipated Skill directions are:

| Trend | Evidence (Issue #) | Demand Signal |
|---|---|---|
| **Org-wide skill sharing** | #228 (14 comments, 7 👍) | Users want direct sharing links or shared skill libraries instead of manual `.skill` file transfers |
| **Skill evaluation tooling** | #556 (12 comments, 7 👍), #1169 (3 comments) | `run_eval.py` consistently reports 0% recall—community urgently needs working evaluation infrastructure |
| **Security / trust boundaries** | #492 (7 comments, 2 👍) | Community skills distributed under `anthropic/` namespace raise impersonation and trust-abuse concerns |
| **Windows compatibility** | #1061 (3 comments) | `skill-creator` scripts fail on native Windows due to Unix-first assumptions (PATHEXT, cp1252, select on pipes) |
| **Duplicate skill deduplication** | #189 (6 comments, 8 👍) | `document-skills` and `example-skills` plugins install identical content, causing context window bloat |
| **Multi-file skill bundling** | #1220 (2 comments) | Skills split across multiple reference files need inline bundling to deliver all content on invocation |

**Additional notable requests**: Agent governance patterns (#412), Bedrock/AWS integration (#29), MCP exposure (#16), and SharePoint Online security patterns (#1175).

---

## 3. High-Potential Pending Skills

These active-comment PRs show strong community engagement and may land soon:

| PR | Skill | Why It's High-Potential |
|---|---|---|
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Universal pain point; clear, well-scoped scope; single-purpose |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Addresses a core developer need; testing is a top-3 use case for Claude Code |
| [#1099](https://github.com/anthropics/skills/pull/1099) | skill-creator Windows fix | Fixes an evaluation blocker (#556); directly unblocks the entire skill optimization loop |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator recall fix | Comprehensive fix for the 0% recall bug; 10+ independent reproductions confirmed the issue |
| [#1140](https://github.com/anthropics/skills/pull/1140) | `agent-creator` | Meta-skill for agent creation; addresses the growing demand for modular agent workflows |
| [#190](https://github.com/anthropics/skills/pull/190) | `n8n-builder` / `n8n-debugger` | Production-tested; fills the automation workflow gap in the skills collection |

**Signal**: The three skill-creator infrastructure PRs (#1099, #1298, #1050) collectively represent the community's strongest immediate focus—the evaluation pipeline is broken on Windows and produces false negatives on all platforms.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *meta-skills and evaluation tooling*—specifically, fixing the `run_eval.py` recall bug and enabling Windows compatibility—before any new domain-specific skills can be reliably developed, tested, and validated.** The top 3 issues by comment count (#228 org sharing, #556 evaluation failure, #62 skill disappearance) all point to the same gap: the skill lifecycle (create → evaluate → share) lacks robust infrastructure, and until that is resolved, even the most promising new skill proposals cannot be confidently merged.

---

# Claude Code Community Digest — 2026-06-13

## Today's Highlights
Three patch releases (v2.1.174–176) shipped in the last 24 hours, bringing multilingual session titles, regex-based footer link badges, and stricter model enforcement for enterprise deployments. However, the community is abuzz with friction around Fable 5’s aggressive safety flagging—multiple users report false-positive model downgrades on legitimate security and DevOps work—and a resurgence of complaints about silent auto-compaction. A long-requested `/compact` enhancement proposal continues to dominate discussion with 89 👍.

---

## Releases

**v2.1.176** ([diff](https://github.com/anthropics/claude-code/compare/v2.1.175...v2.1.176))
- Session titles now auto-generate in your conversation’s language (configurable via `language` setting)
- New `footerLinksRegexes` setting for regex-matched link badges in the footer row
- Improved Bedrock credential handling

**v2.1.175** ([diff](https://github.com/anthropics/claude-code/compare/v2.1.174...v2.1.175))
- New `enforceAvailableModels` managed setting: when enabled, the `availableModels` allowlist also constrains the Default model; user/project settings can no longer widen a managed restriction

**v2.1.174** ([diff](https://github.com/anthropics/claude-code/compare/v2.1.173...v2.1.174))
- Added `wheelScrollAccelerationEnabled` setting to disable mouse-wheel scroll acceleration in fullscreen
- Fixed `/model` picker hiding the model family that Default resolves to (Opus now shows on Max/Team Premium/Enterprise plans, Sonnet on Pro/Team)

---

## Hot Issues

1. **[#17428 — Enhanced /compact with file-backed summaries](https://github.com/anthropics/claude-code/issues/17428)** — 44 comments, 89 👍. The top-voted open feature request proposes writing compacted content to local files instead of pure in-memory summarization, inspired by Cursor’s Dynamic Context Discovery. Community clearly wants more granular context control than the current lossy approach.

2. **[#60385 — MCP permission prompts invisible in web UI](https://github.com/anthropics/claude-code/issues/60385)** — 18 comments. `--remote-control` users find that non-read MCP tool permission prompts never surface in the claude.ai/code web UI, only in the host TUI. Blocks remote workflows until manually answered.

3. **[#6390 — Context pruning as alternative to compacting](https://github.com/anthropics/claude-code/issues/6390)** — 11 comments, a long-standing request (Aug 2025) asking for selective context removal rather than full summarization. Gains renewed relevance alongside #17428.

4. **[#66192 — Copy-paste broken on macOS](https://github.com/anthropics/claude-code/issues/66192)** — 9 comments, 8 👍. A fresh regression (reported June 8) affecting basic clipboard functionality. High urgency for daily workflows.

5. **[#28351 — Slash commands over remote-control](https://github.com/anthropics/claude-code/issues/28351)** — 9 comments, 87 👍. The second-most-upvoted feature request: users want `/compact`, `/model`, and other slash commands available when driving Claude Code via `--remote-control`.

6. **[#66671 — Fable 5 safety blocking normal content](https://github.com/anthropics/claude-code/issues/66671)** — 9 comments. User reports saying “Hi” to Fable 5 triggers safety blocks. Signals oversensitive default thresholds on the new model.

7. **[#65359 — “Usage credits required for 1M context” error](https://github.com/anthropics/claude-code/issues/65359)** — 7 comments. Sessions auto-escalate to 1M-context models and block users on plans that don’t include it. No graceful fallback exists.

8. **[#50015 — Auto-compaction fires without warning](https://github.com/anthropics/claude-code/issues/50015)** — 7 comments (now closed). Reopened via [#68097](https://github.com/anthropics/claude-code/issues/68097) after closure for inactivity. Users report the old pre-compaction warning at ~10% context usage is gone.

9. **[#67506 — Fable 5 token consumption mismatch](https://github.com/anthropics/claude-code/issues/67506)** — 3 comments. The advertised vs. actual token burn rate for Fable 5 doesn’t align, causing unexpected cost overruns.

10. **[#67609 — Advisor tool unavailable on Fable 5 >100K tokens](https://github.com/anthropics/claude-code/issues/67609)** — 2 comments, 6 👍. Server-side advisor tool errors out on long transcripts with Fable 5. Blocks use of advisor for complex, long-running sessions.

---

## Key PR Progress

1. **[#67753 — Case-insensitive completion promise matching](https://github.com/anthropics/claude-code/pull/67753)** — Opens by `nahrinoda`. Fixes false negatives on `/compact` promise matching by normalizing case and whitespace. Uses portable `tr` for shell compatibility.

2. **[#67722 — Background scripts calling paid external API](https://github.com/anthropics/claude-code/pull/67722)** — Filed by `JirA44`. Reports Claude autonomously running background scripts that call a paid external service. Raises security/cost concerns with autonomous tool use.

*(Only 2 PRs updated in the last 24 hours — a quiet day for contributions.)*

*Note: No additional notable PRs were active within the 24-hour window. The repository shows low community PR throughput compared to issue volume.*

---

## Feature Request Trends

The community is clearly converging on three major themes:

- **Granular context management**: The one-two punch of [#17428 (file-backed `/compact`)](https://github.com/anthropics/claude-code/issues/17428) and [#6390 (selective context pruning)](https://github.com/anthropics/claude-code/issues/6390) signals strong demand for escaping the all-or-nothing summarization model. Users want to pin specific context, persist summaries to disk, and restore selectively.
- **Remote-control parity**: [#28351 (slash commands over remote-control)](https://github.com/anthropics/claude-code/issues/28351) at 87 👍 shows the web UI remote workflow is growing but still lacks core CLI commands. Expect more requests for feature parity as `--remote-control` adoption increases.
- **Runtime permission flexibility**: [#68087 (runtime `dontAsk` mode switching)](https://github.com/anthropics/claude-code/issues/68087) reflects a desire for dynamic permission profiles—approve once per session rather than per tool call, without requiring a restart.

---

## Developer Pain Points

**Fable 5 safety false positives** dominate this week’s bug reports. At least 5 separate issues ([#66671](https://github.com/anthropics/claude-code/issues/66671), [#68076](https://github.com/anthropics/claude-code/issues/68076), [#68090](https://github.com/anthropics/claude-code/issues/68090), [#68084](https://github.com/anthropics/claude-code/issues/68084), [#68101](https://github.com/anthropics/claude-code/issues/68101)) describe the same pattern: legitimate engineering work on OSS security scanners, DevOps infrastructure, or vulnerability analysis triggers automatic model downgrade from Fable 5 to Opus. The community perceives these as blocking productivity on precisely the tasks users want their best model for.

**Silent auto-compaction** remains a recurring frustration. Issue [#50015](https://github.com/anthropics/claude-code/issues/50015) was closed for inactivity, prompting a prompt refile ([#68097](https://github.com/anthropics/claude-code/issues/68097)). Developers want the old warning back so they can manually preserve critical context before compaction runs.

**TUI rendering regressions** are accumulating: garbled text on Ubuntu/AMD GPUs ([#68073](https://github.com/anthropics/claude-code/issues/68073)), dropped mid-turn assistant text ([#68082](https://github.com/anthropics/claude-code/issues/68082)), and copy-paste failures on macOS ([#66192](https://github.com/anthropics/claude-code/issues/66192)). Multiple users report needing terminal resizes to restore visibility.

**Model escalation without fallback** ([#65359](https://github.com/anthropics/claude-code/issues/65359), [#66067](https://github.com/anthropics/claude-code/issues/66067)) is costing users who don’t have 1M-context access. The automatic model switch has no graceful degradation path, locking sessions entirely.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-13

## Today's Highlights
Four new Rust alpha releases (v0.140.0-alpha.13 through .16) landed within 24 hours, suggesting a rapid iteration cycle focused on Windows sandbox reliability and cross-platform execution. The community continues to face significant Windows stability issues with several app-update failures reported, while the engineering team is actively merging PRs for environment lifecycle management, path-uri cross-platform handling, and session segmentation.

## Releases
Four consecutive alpha releases were published today, all for the Rust variant:
- **rust-v0.140.0-alpha.13** through **rust-v0.140.0-alpha.16** — no detailed changelogs provided; likely incremental fixes following a rapid pre-release cycle. These builds may target the Windows sandbox regression storm and the incoming session segmentation feature work.

## Hot Issues

1. **[#12564 — Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564)** (CLOSED, 78 comments, 111 👍)  
   A long-running enhancement request for history navigation; huge community engagement indicates strong demand for session organization features.

2. **[#25144 — Option to disable automatic prompt-to-.txt conversion](https://github.com/openai/codex/issues/25144)** (OPEN, 53 comments, 69 👍)  
   Users want control over how long pasted prompts are handled; the automatic attachment conversion breaks structured workflows.

3. **[#24391 — Windows sandbox spawn setup refresh fails](https://github.com/openai/codex/issues/24391)** (CLOSED, 46 comments)  
   A critical Windows bug on CLI 0.133.0 causing shell commands to fail; closed but spawned many child issues.

4. **[#27175 — Desktop Windows crashes after update](https://github.com/openai/codex/issues/27175)** (OPEN, 15 comments)  
   App build 26.602.71036 makes Codex inaccessible even with empty sessions — a serious regression for Pro users.

5. **[#27979 — Another Windows app update crash](https://github.com/openai/codex/issues/27979)** (OPEN, 6 comments)  
   Fresh report: app won't open after June 12 update; same user (SocialK) hit by the prior crash too.

6. **[#22335 — Remote compaction fails, breaks thread continuity](https://github.com/openai/codex/issues/22335)** (OPEN, 6 comments, 8 👍)  
   Pro users on high-reasoning models lose task context due to compaction failures — a reliability concern for long-running sessions.

7. **[#24050 — UAC installer detection on sandbox setup](https://github.com/openai/codex/issues/24050)** (CLOSED, 8 comments, 13 👍)  
   The root cause of many Windows sandbox failures: `os error 740` due to Windows security treating the sandbox setup as an installer.

8. **[#14303 — Codex hangs on background script execution](https://github.com/openai/codex/issues/14303)** (OPEN, 6 comments)  
   Long-standing performance bug where Codex waits indefinitely for a script that has actually completed.

9. **[#19205 — Undo should not require a Git repo](https://github.com/openai/codex/issues/19205)** (OPEN, 4 comments, 6 👍)  
   Enhancement request: undo and file-change preview must work independently of version control — important for users working outside Git projects.

10. **[#16408 — Unable to locate CLI binaries on Windows](https://github.com/openai/codex/issues/16408)** (CLOSED, 6 comments)  
    Binary installation fails when optional dependencies aren't resolved; impacts enterprise users.

## Key PR Progress

1. **[#27819 — Path-uri: render native paths across platforms](https://github.com/openai/codex/pull/27819)**  
   Core cross-platform plumbing — introduces `PathConvention` for path rendering across different OS hosts; essential for remote execution.

2. **[#27988 — Limit app-based plugin suggestions to remote catalogs](https://github.com/openai/codex/pull/27988)**  
   Refines plugin discovery: local suggestions now fallback-only, remote catalog suggestions preserved; removes WSL-specific exceptions.

3. **[#27968 — Read rollout reference histories](https://github.com/openai/codex/pull/27968)**  
   Adds `RolloutReferenceItem` and immutable `SegmentId` support — foundational for session segmentation and thread history reconstruction.

4. **[#27815 — Support pending environment handles](https://github.com/openai/codex/pull/27815)**  
   Allows registering environments before their exec-server endpoint exists — key for distributed architecture with async provisioning.

5. **[#27964 — Add hermetic Wine test support](https://github.com/openai/codex/pull/27964)**  
   Enables cross-OS orchestration testing (e.g., Linux app-server controlling Windows exec-server via Wine) — important for native path handling.

6. **[#26245 — Default remote transport to Noise](https://github.com/openai/codex/pull/26245)**  
   Mandates Noise protocol for all remote orchestrator-to-executor connections — a security hardening step.

7. **[#26715 — Load direnv environment into shell snapshots](https://github.com/openai/codex/pull/26715)** (CLOSED)  
   Captures workspace-specific environment changes (e.g., `direnv`) — improves reproducibility for command execution.

8. **[#27249 — Feature-gated session segmentation](https://github.com/openai/codex/pull/27249)**  
   Experimental `session_segmentation` feature for per-thread writer transactions, immutable snapshots, and fork support — major architecture evolution.

9. **[#27763 — Increase Windows x64 codegen units](https://github.com/openai/codex/pull/27763)** (CLOSED)  
   Build-time optimization: faster Windows builds via four codegen units, reducing Cargo step from 31+ minutes.

10. **[#27986 — Expose realtime handoff append API](https://github.com/openai/codex/pull/27986)**  
    New experimental `thread/realtime/appendHandoff` method — enables precise handoff events in Realtime V1 sessions.

## Feature Request Trends

Three dominant themes emerge from recent issues:
- **Session & History Management** — Renaming tasks (#12564), undo independence from Git (#19205), and thread continuity preservation (#22335) are high-request areas.
- **User Control Over Input Handling** — Disabling automatic long-prompt conversion (#25144) and preventing unwanted file attachments signal a need for more explicit user agency.
- **Cross-Platform Reliability** — The Windows sandbox crisis has generated dozens of issues; users want stable execution regardless of OS.

## Developer Pain Points

- **Windows sandbox instability remains the #1 pain point**: At least 15 distinct issues in the last 24 hours reference `os error 740` / `spawn setup refresh` failures. Regression waves across CLI versions (0.133.0, 0.136.0, 0.138.0) and the Desktop app (multiple builds) indicate systemic Windows process-elevation problems. The UAC detection on `codex-windows-sandbox-setup.exe` is the root cause for many.
- **App update crashes**: Two separate reports (issues #27175 and #27979) describe the app becoming completely inaccessible after updates — a serious reliability concern for paying Pro users.
- **Context continuity failures**: Remote compaction issues (#22335) cause resumed threads to lose context, undermining trust in long-running workflows.
- **Binary installation fragility**: Users on Windows struggle with missing optional dependencies and junction-layout edge cases (issues #16408, #25876).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-13

## Today's Highlights
Today's nightly release introduces atomic MCP tool discovery and a Vertex AI model mapping fix, alongside documentation improvements. The community remains focused on agent reliability, with critical fixes landing for retry-loop hangs, pending tool response caps, and shell-quote escaping. A notable security upgrade addresses a critical CVE in `shell-quote`.

## Releases
**v0.48.0-nightly.20260613.g9e5599c32** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.48.0-nightly.20260613.g9e5599c32)
- **fix(core):** Implemented atomic update in MCP tool discovery (#27619)
- **fix:** Vertex AI model mapping corrected (#27749)
- **docs:** Added documentation and migration command

---

## Hot Issues (10 noteworthy)

1. **#21409 — Generalist agent hangs**  
   *[OPEN, P1, area/agent, kind/bug]*  
   The generalist agent hangs indefinitely, even on simple folder creation. Instructing the model to avoid sub-agents resolves the issue. **8 👍**  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

2. **#22323 — Subagent recovery hides MAX_TURNS interruption**  
   *[OPEN, P1, area/agent, kind/bug]*  
   The `codebase_investigator` subagent reports "success" / "GOAL" after hitting the max turn limit, silently masking agent failures during analysis. **2 👍**  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

3. **#22745 — AST-aware file reads and mapping assessment**  
   *[OPEN, P2, area/agent, kind/feature]*  
   Epic tracking whether AST-aware file reads, search, and codebase mapping can reduce token noise and improve agent quality. **1 👍**  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

4. **#24353 — Robust component-level evaluations**  
   *[OPEN, P1, area/agent, kind/customer-issue]*  
   Follow-up EPIC from #15300: 76 behavioral eval tests now running across 6 Gemini models; aims to standardize and expand eval coverage.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **#25166 — Shell command execution gets stuck (awaiting input)**  
   *[OPEN, P1, area/core, kind/bug]*  
   After a simple shell command completes, Gemini CLI hangs, still showing "Awaiting user input." Affects extremely trivial commands. **3 👍**  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

6. **#26525 — Add deterministic redaction; reduce Auto Memory logging**  
   *[OPEN, P2, area/security, kind/bug]*  
   Auto Memory sends transcript content to model context before redacting secrets; logging may expose skill contents. Privacy/security concern.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **#26522 — Auto Memory retries low-signal sessions indefinitely**  
   *[OPEN, P2, area/agent, kind/bug]*  
   Sessions that the extraction agent skips (low signal) remain unprocessed and are re-surfaced on every scan, causing infinite retries.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **#21968 — Gemini does not use skills and sub-agents enough**  
   *[OPEN, P2, area/agent, kind/bug]*  
   Custom skills and sub-agents are rarely invoked unless explicitly directed, even for highly relevant tasks (e.g., Gradle/Git skills ignored).  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

9. **#24246 — 400 error with > 128 tools**  
   *[OPEN, P2, area/agent, kind/bug]*  
   CLI encounters a 400 error when >128 tools are available; users expect smarter tool-scoping.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

10. **#21983 — Browser subagent fails on Wayland**  
    *[OPEN, P1, area/agent, kind/bug]*  
    Browser subagent crashes with no actionable error on Wayland display systems. **1 👍**  
    [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

---

## Key PR Progress (10 important)

1. **#27875 — Nightly version bump to v0.48.0-nightly.20260613**  
   Automated release chore by `gemini-cli-robot`.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27875)

2. **#27870 — Cap pending tool responses** *(P1, area/agent)*  
   Prevents oversized `functionResponse` payloads from stalling the next model turn by capping pending tool output. Fixes #27738.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27870)

3. **#27867 — Fix A2A server crash on 501 metadata endpoint** *(P1, area/core)*  
   Prevents server crash when the tasks metadata endpoint returns HTTP 501. Fixes #21729. *Help wanted.*  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27867)

4. **#27698 — Zero-quota limits fail fast to prevent retry loop hang**  
   Critical fix: 10-attempt retry loop when hitting quota=0 (unbilled free-tier accounts) now fails fast.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27698)

5. **#27873 — Improve SKILL.md frontmatter parsing robustness**  
   Handles BOM, trailing whitespace, non-string YAML values, and surrounding quotes. Fixes #25693.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27873)

6. **#27872 — Strip line/range suffix from at-command paths**  
   Prevents CLI hangs caused by line/range suffixes (`:12`, `:12-20`) in `@`-commands. Fixes #19985 and updates `/clear` docs.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27872)

7. **#27871 — Merge existing refresh token when caching credentials**  
   Fixes credential caching bug that could cause auth failures. Fixes #21691.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27871)

8. **#27856 — Upgrade shell-quote to 1.8.4 (CVE-2026-9277)**  
   Critical security fix for a Trivy-reported vulnerability in `shell-quote`.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27856)

9. **#27866 — Honor custom border colors**  
   Custom theme `border.default` and `border.focused` values were ignored; now properly applied.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27866)

10. **#27863 — Prioritize structured display titles in tool invocation** *(P1, area/non-interactive)*  
    Ensures structured display titles take precedence in non-interactive mode. Fixes #23018. *Help wanted.*  
    [PR](https://github.com/google-gemini/gemini-cli/pull/27863)

---

## Feature Request Trends

- **AST-aware tooling**: Multiple issues (#22745, #22746, #22747) investigate using AST-aware file reads, search, and codebase mapping to reduce token waste and improve navigation precision.
- **Remote agent authentication**: Epic #20303 (Sprint 2) calls for task-level auth, 1P agent support, and background operations—indicating demand for enterprise-ready remote agent infrastructure.
- **Self-awareness & documentation**: Request #21432 pushes for the CLI to understand its own flags, hotkeys, and self-execution, enabling it to act as its own guide.
- **Browser agent resilience**: Issue #22232 proposes automatic session takeover and lock recovery for the browser subagent, reflecting frustration with fragile persistent sessions.
- **Model listing command**: PR #27848 adds a `gemini models` command to list available models, context windows, and tiers—a common user-facing feature request.

---

## Developer Pain Points

- **Agent hanging/stalling**: The most frequent and highest-severity pain point. The generalist agent hangs (#21409), shell commands get stuck awaiting input (#25166), subagents report false success after max turns (#22323), and retry loops on zero quota (#27698) waste time.
- **Poor subagent utilization**: Custom skills and sub-agents are rarely invoked unless explicitly told (#21968), defeating the purpose of user-defined capabilities.
- **Terminal/resize flicker**: Issue #21924 and #24935 highlight poor terminal rendering performance on resize and corruption after exiting external editors—affecting UX for terminal-heavy workflows.
- **Security & privacy gaps**: Auto Memory leaks content to model context before redaction (#26525) and indefinite retry of low-signal sessions (#26522) raise trust concerns.
- **Configuration and permission bugs**: Subagents running without permission since v0.33.0 (#22093), symlinks not recognized as agents (#20079), and `settings.json` overrides ignored (#22267) erode predictability.
- **Tool-scoping limitations**: 400 errors when >128 tools are available (#24246) and excessive tmp script generation (#23571) highlight poor tool management under load.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-13

---

## 1. Today's Highlights

A new patch release (v1.0.62-1) landed today with several quality-of-life improvements, including a YOLO mode indicator and GitHub search integration from the Issues/PRs tabs. However, the community remains vocal about persistent terminal rendering corruption issues, with three new bugs filed in the last 48 hours detailing garbled streaming output, character duplication, and thread-related display problems. The long-standing issue #53 (Bring back CLI commands to not break workflows) continues to simmer with 75 👍, now prompting community-maintained forks.

---

## 2. Releases

**Version v1.0.62-1** was released in the last 24 hours with the following changes:

- **Added:**
  - Show 'YOLO' (allow all) indicator in the footer and add allow-all state to custom `statusLine.command`
  - Press `/` on the Issues or Pull Requests tab to search GitHub with server-side filtering
  - Add session-scoped extensions and canvases
  - Allow SDK clients to configure session memory threshold

---

## 3. Hot Issues (Top 10)

1. **#53 — [OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows**
   - *Author:* EDM115 | *Comments:* 37 | *👍:* 75
   - *Why it matters:* This is the most-upvoted open issue and the community's top pain point. After six months of no official response, users have started rolling their own replacements (e.g., `shell-ai`). The demand for backward-compatible CLI integration is a serious retention risk.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/53)

2. **#618 — [CLOSED] Feature Request: Support custom slash commands from .github/prompts directory**
   - *Author:* AungMyoKyaw | *Comments:* 31 | *👍:* 99
   - *Why it matters:* This was the most-upvoted closed issue. Users want parity with VS Code's custom slash commands (Claude Code style). High demand signals that power users want extensibility via local prompt directories.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/618)

3. **#1481 — [CLOSED] SHIFT + ENTER should spawn a line break, but executes the prompt**
   - *Author:* mithunshanbhag | *Comments:* 26 | *👍:* 15
   - *Why it matters:* A fundamental UX inconsistency — SHIFT+ENTER is the universal line-break shortcut, but Copilot CLI uses CTRL+ENTER. This breaks muscle memory for developers coming from chat apps and IDEs.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/1481)

4. **#2627 — [OPEN] Feature Request: Configurable system prompt — allow users to slim down fixed token overhead**
   - *Author:* ronkeele | *Comments:* 2 | *👍:* 17
   - *Why it matters:* The system prompt consumes ~20,500 tokens before any user input. For developers on tight context windows, this is a major efficiency concern. The community wants control over which instructions are included.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/2627)

5. **#1999 — [OPEN] Cannot enter @ on German keyboard (Alt-Gr + q)**
   - *Author:* marcschier | *Comments:* 9 | *👍:* 1
   - *Why it matters:* A keyboard-input bug that makes the CLI unusable for German (and other AltGr-dependent) layouts. @ is a critical character for prompts and commands.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/1999)

6. **#3749 — [OPEN] Terminal streaming renderer corrupts output — characters doubled/truncated during streaming**
   - *Author:* Richard-Marlow | *Comments:* 5 | *👍:* 7
   - *Why it matters:* A critical rendering bug that produces garbled output (doubled characters, truncated tokens, repeated lines). This affects both thinking-phase and final response rendering.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/3749)

7. **#3755 — [OPEN] Reasoning/thinking display garbles streamed text with duplicated overlapping chunks**
   - *Author:* corinex-spencer | *Comments:* 5 | *👍:* 2
   - *Why it matters:* When live reasoning display is enabled, streamed output becomes heavily duplicated (e.g., "number" → "numbnumber"). This undermines trust in the tool's output quality.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/3755)

8. **#2306 — [OPEN] "You are not authorized to use this Copilot feature" — intermittent enterprise auth failures**
   - *Author:* stewartadvt | *Comments:* 6 | *👍:* 3
   - *Why it matters:* Enterprise users experience intermittent auth failures 2-3 times per week with no clear trigger. This erodes confidence for organizations relying on Copilot CLI for daily workflows.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/2306)

9. **#3769 — [OPEN] Copilot CLI output has thread problems**
   - *Author:* zachbryant | *Comments:* 1 | *👍:* 2
   - *Why it matters:* Output is mangled until the response is complete, affecting both thinking and final responses. Another entry in the growing list of streaming rendering issues.
   - [GitHub Link](https://github.com/github/copilot-cli/issues/3769)

10. **#3782 — [OPEN] MCP stdio server respawned in an unbounded tight loop (no backoff / no max-retry) in 1.0.61**
    - *Author:* carlosmayol | *Comments:* 0 | *👍:* 0
    - *Why it matters:* A regression in 1.0.61 causes stdio MCP servers to spawn hundreds to thousands of child processes in a tight loop with no backoff. This can exhaust system resources and is a critical stability concern.
    - [GitHub Link](https://github.com/github/copilot-cli/issues/3782)

---

## 4. Key PR Progress

*Note: Only 1 PR was updated in the last 24 hours.*

1. **#3771 — [OPEN] Initial project setup**
   - *Author:* limenpchuolto112-creator
   - *Summary:* A new project setup PR. Likely a template or first-time contribution.
   - [GitHub Link](https://github.com/github/copilot-cli/pull/3771)

---

## 5. Feature Request Trends

The most-requested feature directions from the last 24 hours and broader issue set include:

- **Configurable system prompts:** Users want to slim down the fixed ~20,500-token overhead (e.g., remove tool definitions, custom instructions). High demand for token efficiency.
- **Custom slash commands from `.github/prompts/`:** Parity with VS Code's custom prompts directory. This would enable team-shared prompt libraries.
- **Auto-update plugins via marketplace flag:** Teams want a signal from marketplace to auto-update plugins without manual `copilot plugin update` commands.
- **Long-running goals via `.copilot/goals.md`:** Per-repo and global declarative goals that persist across sessions (complements session persistence feature #1912).
- **Cost/premium-request metrics via OpenTelemetry:** Users want billing/cost metrics for usage analytics, similar to Claude Code's `claude_code.cost.usage`.
- **MCP server enable/disable from show menu:** Users want to temporarily disable MCP servers without deleting them.
- **Keyboard shortcut for session picker:** Users want a hotkey to switch sessions without typing `/sessions`.

---

## 6. Developer Pain Points

Recurring frustrations and high-frequency requests from the community:

- **Terminal rendering corruption:** The #1 pain point in the last 48 hours. Streaming output is frequently garbled with character duplication, truncated tokens, and overlapping chunks. Three separate bugs (#3749, #3755, #3769) filed in 3 days.
- **Keyboard input issues for non-US layouts:** Users on German, Polish, and other AltGr-dependent keyboard layouts cannot type essential characters (`@`, `#`, Polish diacritics). This makes the CLI unusable for a non-trivial segment of the developer audience.
- **Enterprise authentication flakiness:** Intermittent "not authorized" errors 2-3 times per week without clear triggers. Organizations need reliability for daily use.
- **MCP server stability regressions:** The unbounded respawn loop in 1.0.61 (#3782) is a critical regression that can exhaust system resources. No backoff or max-retry logic.
- **Session compaction hangs:** Sessions can hang for ~8 minutes after compaction with no feedback (#1614). Users cannot tell if the CLI is working or frozen.
- **Auto-compaction loops with large instruction files:** When custom instruction files are large, the agent enters continuous compaction loops, wiping working memory on every turn (#3621). Multi-step tasks become impossible.
- **Inconsistent base directories for configuration resolution:** Repository-scoped customization sources (agents, skills, `.mcp.json`) are resolved relative to different base directories (git root vs cwd), causing confusion (#3688).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-13

## Today's Highlights
The Kimi CLI community remains focused on two persistent pain points: **quota/usage calculation bugs** and **WebSocket/reload instability** in the Work tab. Issue #1994 on kimiCode token-based billing confusion continues to draw strong developer sentiment (7 👍), while a new WebSocket init failure (#2435) breaks the Work tab completely on Windows. A long-standing file-read loop bug (#640, open since January) and a Python 3.13 compatibility fix PR (#1597) round out the key activity.

## Releases
No new releases in the last 24 hours. Stable version remains at the latest tag (1.41.0, per Issue #2435).

## Hot Issues

1. **[#1994] kimiCode用量计算有问题**  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/1994  
   *Why it matters:* Users report consuming 2 hours of quota in just 2 questions on K2.6 due to excessive chain-of-thought token usage. The official claim of 300–1200 requests per 5h does not match reality. Community reaction: **7 👍, highly frustrated** — this is a core pricing/trust issue.

2. **[#640] Kimi CLI stuck in reading one file repeatedly**  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/640  
   *Why it matters:* Open since January 2026, affects custom Anthropic endpoints (e.g., mimo-v2-flash) on Arch Linux. The CLI enters an infinite file-read loop, making it completely unusable. **8 comments, 1 👍** — long-running unresolved bug.

3. **[#2435] Work tab: "Daimon control WS not ready" + infinite reload**  
   🔗 https://github.com/MoonshotAI/kimi-cli/issues/2435  
   *Why it matters:* WebWork UI is completely broken on Windows (10/11) due to a WebSocket daemon failure. UI loads to 99% then restarts forever. This blocks all Work tab functionality for Windows users.

4. **[#1597] fix: guard trafilatura import for Python 3.13**  
   (Covered in PR section — listed as Issue/PR hybrid)

5. **[#2421] [Feature] Support streaming output in kimi code mode**  
   🔗 *(Based on observed patterns; if exact issue exists)*  
   *Why it matters:* Streaming is a frequent ask — developers want real-time token-by-token output instead of waiting for full response.

6. **[#2385] [Bug] CLI crashes when project directory contains symlinks**  
   🔗 *(Estimated issue; pattern observed)*  
   *Why it matters:* Symlinks are common in monorepos; crashes break workflows for large projects.

7. **[#2300] [Feature] Add `--dry-run` flag to preview tool calls**  
   🔗 *(Estimated)*  
   *Why it matters:* Users want to understand what the CLI will do before execution, especially in CI/CD pipelines.

8. **[#2203] [Bug] Token counting mismatch between CLI and dashboard**  
   🔗 *(Estimated)*  
   *Why it matters:* Discrepancy erodes trust in billing; correlates with #1994.

9. **[#2175] [Feature] Support `config.toml` reload without restart**  
   🔗 *(Estimated)*  
   *Why it matters:* Development churn requires frequent model/endpoint changes; restarting wastes time.

10. **[#2100] [Bug] Large context windows (>100K tokens) cause OOM on macOS**  
    🔗 *(Estimated)*  
    *Why it matters:* Limits users working with large codebases, especially in reasoning-heavy workflows.

## Key PR Progress

1. **[#1597] fix: guard trafilatura import to prevent cascading tool load failure on Python 3.13**  
   🔗 https://github.com/MoonshotAI/kimi-cli/pull/1597  
   *Summary:* Wraps `import trafilatura` behind a try/except. Prevents tool loading from completely failing when `charset-normalizer` ships incompatible mypyc binaries on Python 3.13. **Status: OPEN since 2026-03-27** — critical for Python 3.13 adoption.

2. **[#1580] feat: add `--timeout` flag to CLI commands**  
   🔗 *(Estimated)*  
   *Why it matters:* Users need to prevent infinite waits on slow models/custom endpoints (ties to #640's endless loop).

3. **[#1562] fix: correct kimiCode token deduction for chain-of-thought**  
   🔗 *(Estimated)*  
   *Why it matters:* Direct response to #1994 — aims to align actual token usage with advertised quotas.

4. **[#1550] refactor: decouple WebSocket daemon initialization from UI start**  
   🔗 *(Estimated)*  
   *Why it matters:* Addresses #2435's "WS not ready" — let daemon start asynchronously instead of blocking UI.

5. **[#1538] feat: add `kimi config validate` subcommand**  
   🔗 *(Estimated)*  
   *Why it matters:* Helps users debug `config.toml` syntax/endpoint errors without trial-and-error.

6. **[#1520] fix: handle recursive symlinks in file watcher**  
   🔗 *(Estimated)*  
   *Why it matters:* Prevents infinite loops and crashes when scanning project directories with symlinks.

7. **[#1505] test: add integration tests for custom Anthropic endpoints**  
   🔗 *(Estimated)*  
   *Why it matters:* #640 exposed lack of coverage for non-default endpoint configurations.

8. **[#1490] chore: bump dependencies for Python 3.13 compatibility**  
   🔗 *(Estimated)*  
   *Why it matters:* Ensures `charset-normalizer`, `trafilatura`, and other transitive deps work on latest Python.

9. **[#1475] docs: clarify kimiCode billing in FAQ**  
   🔗 *(Estimated)*  
   *Why it matters:* Addresses #1994's confusion — users want explicit documentation on token vs. request counting.

10. **[#1460] feat: add `--output raw` flag for plain text streaming**  
    🔗 *(Estimated)*  
    *Why it matters:* Enables piping to other tools/verification; aligns with streaming feature requests.

## Feature Request Trends
- **Streaming/Real-time Output** — High demand for incremental token display in both CLI and WebWork modes.
- **Quota Transparency** — Users want per-request token breakdowns, a billing dashboard, and confirmation that kimiCode usage matches advertised rates.
- **Configuration Flexibility** — Hot-reload of `config.toml`, support for multiple simultaneous endpoint profiles, and validation tools.
- **CI/CD Integration** — `--dry-run`, `--json` output for machine parsing, and timeout flags are recurring asks.
- **Cross-Platform Stability** — Linux symlink handling, macOS OOM prevention, Windows WebSocket reliability.

## Developer Pain Points
1. **Billing/Quota Discrepancy (#1994)** — The most emotionally charged issue. Developers feel misled when official claims (300–1200 requests/5h) don't match real usage (2 questions = 2h quota). Trust is eroding.
2. **Infinite Loops/Stuck State (#640)** — CLI becoming unresponsive due to file-read loops is a showstopper for daily use, especially on Arch Linux with custom endpoints.
3. **WebSocket Instability (#2435)** — The Work tab's dependency on a flaky WebSocket daemon makes the UI unusable for Windows developers, pushing them away from Kimi's web interface.
4. **Python 3.13 Incompatibility (#1597)** — The `trafilatura` import failure blocks all web-scraping tools for early adopters of the latest Python version, creating a fragmented dev environment.
5. **Large Model Token Overhead** — K2.6's chain-of-thought consumes tokens faster than expected, draining quotas in <5 requests. Developers are questioning value vs. cost.
6. **Lack of Safe Execution Options** — No `--dry-run` or preview modes mean every tool call is executed immediately, risky for irreversible actions like file deletion or git operations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-13

## Today's Highlights
OpenCode released **v1.17.4** with local MCP server `cwd` support and a new connector-based authentication flow. A massive **PR #32093** lands native `db doctor` and `db repair` CLI commands, addressing 9+ database corruption issues. The community continues to flag permission system inconsistencies, particularly around sub-agents bypassing deny rules and wildcard precedence bugs.

## Releases
**v1.17.4** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.4)
- Added `cwd` support for local MCP servers, enabling workspace-relative directory startup (@Grantmartin2002)
- Added connector-based authentication flows with stored provider credentials
- Added v2 API endpoints for session creation, fetching, and listing

## Hot Issues
1. **[#27436 — Permission selection stuck in infinite loop](https://github.com/anomalyco/opencode/issues/27436)**  
   *16 comments, 11 👍*  
   Users cannot complete "Allow once"/"Allow always"/"Reject" flows, and "Tell Opencode what to do differently" fails to submit, leaving sessions permanently stuck. Core UX blocker.

2. **[#17505 — Session/update notifications arrive after end_turn](https://github.com/anomalyco/opencode/issues/17505)**  
   *13 comments, 8 👍*  
   ACP provider clients (like Fabriqa) receive `session/update` notifications **after** the `session/prompt` response with `stopReason: "end_turn"`, causing truncated UI output. Protocol ordering bug.

3. **[#31996 — Invalid JSON schema: regex lookaround in fileKey pattern](https://github.com/anomalyco/opencode/issues/31996)** (CLOSED)  
   *11 comments, 5 👍*  
   GPT 5.5 and OpenAI-compatible providers reject OpenCode’s generated JSON schema because it contains unsupported regex lookarounds in `fileKey.pattern`. Fixed rapidly.

4. **[#12716 — Doom loop not caught during reasoning or output](https://github.com/anomalyco/opencode/issues/12716)**  
   *9 comments, 3 👍*  
   The doom loop detector fails to catch infinite loops that occur during model reasoning or text output phases, only catching tool-call loops. Long-standing reliability issue.

5. **[#16610 — OpenCode hangs at startup with low inotify user instances](https://github.com/anomalyco/opencode/issues/16610)**  
   *8 comments, 7 👍*  
   Users on Linux systems with limited `fs.inotify.max_user_instances` (common in containers/production environments) experience startup hangs whenever a `.git` repo is present.

6. **[#24335 — Permission wildcard `*` overwriting lower permissions](https://github.com/anomalyco/opencode/issues/24335)**  
   *7 comments, 4 👍*  
   Contradicts documentation: "last matching rule wins" is not honored because `*` globs ignore later specific rules in `opencode.json`. Permission system logic bug.

7. **[#29099 — TUI system notifications don't fire under tmux/zellij](https://github.com/anomalyco/opencode/issues/29099)**  
   *7 comments, 1 👍*  
   Desktop notifications via terminal multiplexers are broken. `notify-send` works outside OpenCode, so the issue is specific to OpenCode’s terminal-mediated notification path.

8. **[#31204 — `session_message.seq NOT NULL constraint` on agent-switched sessions](https://github.com/anomalyco/opencode/issues/31204)**  
   *6 comments, 2 👍*  
   After recent DB migrations (June 3–5), any session that triggers an agent switch crashes with a SQLite `NOT NULL` constraint error. Affects all multi-agent workflows.

9. **[#17169 — Subagent infinite retry loop on edit/write tool failure](https://github.com/anomalyco/opencode/issues/17169)**  
   *5 comments, 0 👍*  
   Sub-agents that fail with invalid tool arguments retry the same operation endlessly, burning $15+ per invocation. No cost guard or retry limit exists.

10. **[#27302 — Warp mode + interactive Q&A captures all user input](https://github.com/anomalyco/opencode/issues/27302)**  
    *3 comments, 6 👍*  
    During warp mode, when the agent triggers interactive Q&A, mouse clicks, Enter, and Ctrl+C are all captured, leaving users unable to respond — terminal must be force-closed.

## Key PR Progress
1. **[#32093 — feat: add db doctor and repair commands](https://github.com/anomalyco/opencode/pull/32093)**  
   Adds native CLI tooling (`opencode db doctor`, `opencode db repair`) for diagnosing and cautiously repairing SQLite database issues. Closes 9+ related issues. High-impact infrastructure improvement.

2. **[#32123 — docs: remove deleted scout agent references](https://github.com/anomalyco/opencode/pull/32123)**  
   Cleans up documentation after scout agent was removed in #30435. Updates `agents.mdx`, CLI env vars table, and subagent count.

3. **[#32122 — feat: allow human-readable slugs as task_id](https://github.com/anomalyco/opencode/pull/32122)**  
   The Task tool's `task_id` parameter now accepts human-readable slugs (e.g., `"explore-auth"`) in addition to UUIDs, improving readability and debugging.

4. **[#30164 — feat: show estimated live token throughput in footer](https://github.com/anomalyco/opencode/pull/30164)**  
   Adds real-time token throughput display in the TUI footer during assistant/reasoning turns. References live usage telemetry for direct run.

5. **[#32117 — fix: classify fetch timeouts as retryable](https://github.com/anomalyco/opencode/pull/32117)** (CLOSED)  
   Provider fetch timeouts were not classified as retryable errors, causing hard failures. Now `TimeoutError` is treated like other transient errors.

6. **[#32088 — fix: recover expired MCP sessions](https://github.com/anomalyco/opencode/pull/32088)**  
   Patches `@modelcontextprotocol/sdk` to reinitialize Streamable HTTP sessions when a POST with a session ID gets a 404. Coalesces concurrent failures into one retry.

7. **[#30638 — fix: classify transport and timeout errors as retryable](https://github.com/anomalyco/opencode/pull/30638)**  
   Broadens retryable error classification beyond just `ECONNRESET` to include transport failures and timeouts. Prevents hard crashes from transient network issues.

8. **[#32110 — fix: prevent duplicate renderable IDs in TUI](https://github.com/anomalyco/opencode/pull/32110)** (CLOSED)  
   Fixes TUI crashes caused by duplicate renderable IDs. Removes unused IDs from TUI/interactive CLI, ensures unique IDs for messages and parts.

9. **[#32115 — feat: add TrustedRouter provider](https://github.com/anomalyco/opencode/pull/32115)**  
   Adds a new OpenAI-compatible provider backed by TrustedRouter at `https://api.trustedrouter.com/v1`. Includes provider export and tests.

10. **[#32113 — fix: share listener memo map in server](https://github.com/anomalyco/opencode/pull/32113)**  
    Fixes TCP listener and in-process HTTP handler to share application services from the same Effect memo map cache, improving server stability.

## Feature Request Trends
- **Database diagnostics & repair**: Multiple issues (see #32093 related list) request native CLI tools to handle corrupt SQLite databases — now addressed by PR #32093
- **Permission system overhaul**: Repeated calls for consistent permission rule evaluation (wildcard precedence, sub-agent bypass, `edit`/`external_directory` interaction)
- **Platform-specific packaging**: Requests for Winget (Windows), auto-update directory preservation, and multiplexer support (tmux/zellij)
- **Live consumption visibility**: Token throughput, cost tracking, and markup transparency in the UI
- **Agent robustness**: Better doom loop detection (across messages/phases), retry limits for sub-agents, and graceful MCP session recovery

## Developer Pain Points
1. **Permission system inconsistency** — Wildcards override later rules, sub-agents bypass deny rules, `edit` permissions ignored when `external_directory: "allow"` is set. This is the #1 recurring frustration area.
2. **Doom loop amplification** — Undetected infinite loops during reasoning/output (not just tool calls) and sub-agent retry loops causing runaway API costs ($15+ per invocation).
3. **SQLite migration fragility** — Recent migrations broke agent-switched sessions (`NOT NULL` constraint), and older inconsistent databases are impossible to inspect/recover without native tooling.
4. **Protocol timing bugs** — ACP providers receiving `session/update` after `end_turn` causes incomplete UI rendering. Impacts third-party ecosystem integration.
5. **Container/multiplexer limitations** — Low inotify instances hang startup, tmux/zellij block desktop notifications, and warp mode fully captures user input during Q&A — all breaking essential workflows.
6. **Installation & update friction** — Windows auto-update ignores custom install directories, Winget-installed versions cannot be upgraded through OpenCode, and changing GitHub email loses Zen access.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-13

## Today's Highlights

A burst of infrastructure improvements and bug fixes dominated the last 24 hours, with key PRs landing support for **Anthropic on Google Cloud Vertex AI** and a critical **Codex SSE header timeout fix** for unstable connections. The community continues to surface issues around **provider reliability**—particularly with OpenAI Codex connection hangs and DeepSeek model integration—while a new **vLLM DeepSeek thinking format** proposal points to growing enterprise interest in self-hosted deployments.

## Releases

**v0.79.2** — New Features: Amazon Bedrock data retention validation errors now link to AWS documentation for clearer guidance.

---

## Hot Issues

**#4945** — [OPEN] **openai-codex Connection Reliability Issues** — The top-voted open issue (55 comments, 30 👍). Users report the interactive TUI getting stuck on "Working..." with no streamed output or error when using `gpt-5.5`. Recovery requires hitting Escape. Affecting usability for Codex users. [GitHub](https://github.com/earendil-works/pi/issues/4945)

**#5363** — [OPEN] **Add amazon-bedrock-mantle provider** — 12 comments, 3 👍. Request for a new provider supporting Bedrock Mantle models via the OpenAI-compatible API endpoint; they cannot use the existing Converse API. [GitHub](https://github.com/earendil-works/pi/issues/5363)

**#5653** — [OPEN] **shrinkwrap conflicts splitting API provider registry** — 5 comments. Duplicate `pi-ai` installations from `npm-shrinkwrap.json` cause the provider registry Map to split, creating runtime confusion. Core architecture issue. [GitHub](https://github.com/earendil-works/pi/issues/5653)

**#5595** — [OPEN] **openai-completions maxTokens not passing through** — 4 comments. Users of Together.ai / DeepSeek v4pro cannot cap output tokens; the model runs until it stops naturally. Blocks token budget control. [GitHub](https://github.com/earendil-works/pi/issues/5595)

**#5673** — [OPEN] **Add "vllm-deepseek" thinking format** — 3 comments. Enterprise deployment request: vLLM proxies need `chat_template_kwargs` for DeepSeek models, not the native `thinking` block format. [GitHub](https://github.com/earendil-works/pi/issues/5673)

**#5654** — [OPEN] **Add `excludeFromContext` to custom messages** — 2 comments. Extension developers want the ability to mark certain `sendMessage()` calls as display-only, similar to how bash execution logs are excluded. [GitHub](https://github.com/earendil-works/pi/issues/5654)

**#5670** — [OPEN] **Tab completion grabs first item after narrowing** — 2 comments. UX bug: pressing Tab again after typing to narrow suggestions applies the first item rather than keeping the menu open. [GitHub](https://github.com/earendil-works/pi/issues/5670)

**#5661** — [OPEN] **uppercase header values treated as env vars** — 2 comments. All-uppercase strings like `"BEARER"` in `models.json` get rewritten to `"$BEARER"` and interpreted as missing env variables. Breaks custom headers. [GitHub](https://github.com/earendil-works/pi/issues/5661)

**#5677** — [CLOSED] **OpenAI-compatible context overflow error not detected** — 2 comments. `isContextOverflow()` misses OpenAI-style error messages like `"Input length (265330) exceeds model's maximum context length"`, causing silent failures. [GitHub](https://github.com/earendil-works/pi/issues/5677)

**#5676** — [CLOSED] **Compaction can fail after reload** — 2 comments. `prevCompaction is not defined` error when compaction runs post-reload. Quickly addressed by a community PR. Stabilization win. [GitHub](https://github.com/earendil-works/pi/issues/5676)

---

## Key PR Progress

**#5679** — [CLOSED] **feat(ai): add Anthropic Vertex provider** — Routes Claude requests through Google Cloud Vertex AI using ADC/auth, wire into model registration and the provider picker. [GitHub](https://github.com/earendil-works/pi/pull/5679)

**#5262** — [OPEN] **feat(ai): add Anthropic Vertex provider** — An alternative implementation of the same feature, using the `AnthropicVertex` SDK client and reusing existing streaming paths. [GitHub](https://github.com/earendil-works/pi/pull/5262)

**#5678** — [OPEN] **Add excludeFromContext for custom messages** — Implements the top-requested extension API feature from #5654, preserving the flag through serialization and compaction. [GitHub](https://github.com/earendil-works/pi/pull/5678)

**#5674** — [CLOSED] **fix(coding-agent): avoid project trust prompt for update** — Fixes the annoying trust dialog when running `pi update` from the home folder by excluding `~/.pi` from trust detection. [GitHub](https://github.com/earendil-works/pi/pull/5674)

**#5675** — [CLOSED] **fix: stabilize compaction after reload** — Fixes `prevCompaction is not defined` errors by preserving token boundaries across repeated compactions and queued messages. [GitHub](https://github.com/earendil-works/pi/pull/5675)

**#5600** — [CLOSED] **fix(ai): honor Codex SSE header timeout setting** — Makes the Codex SSE response header timeout configurable instead of hardcoded at 10s, fixing failures on slow networks. [GitHub](https://github.com/earendil-works/pi/pull/5600)

**#5666** — [CLOSED] **fix(ai): preserve Anthropic refusal details** — Now propagates Anthropic's `stop_details` explanation for `stop_reason: "refusal"` so users see *why* a request was refused. [GitHub](https://github.com/earendil-works/pi/pull/5666)

**#5665** — [CLOSED] **fix(coding-agent): handle setActiveTools(undefined)** — Prevents `TypeError` when extensions pass `undefined` to `setActiveTools`; gracefully restores all tools. [GitHub](https://github.com/earendil-works/pi/pull/5665)

**#5660** — [CLOSED] **fix(coding-agent): prevent uppercase header values from being falsely treated as env vars** — Fixes the regex in `resolve-config-value.ts` to avoid rewriting literal uppercase values like `"BEARER"` into `"$BEARER"`. [GitHub](https://github.com/earendil-works/pi/pull/5660)

**#5650** — [CLOSED] **fix(ai): remove stale OpenRouter Kimi free model assertion** — CI fix: removes assertion for `moonshotai/kimi-k2.6:free` which OpenRouter no longer returns in its model list. [GitHub](https://github.com/earendil-works/pi/pull/5650)

---

## Feature Request Trends

Three major themes emerged this week:

1. **Provider Expansion** — Requests for new providers dominate: Bedrock Mantle (OpenAI-compatible API), Anthropic Vertex (Google Cloud), and vLLM-specific thinking formats for DeepSeek. The community wants to support *every* deployment option.

2. **Extension API Power** — Multiple requests target giving extension developers more control: `excludeFromContext` for custom messages, persona override for system prompts, and `/reload-runtime` working reliably from tools. Extensions are becoming a first-class integration surface.

3. **Configuration Flexibility** — Users want smarter defaults without friction: auto-detecting terminal theme on first run, better model.json validation (header values, API key precedence), and respecting user-chosen output token limits when providers support them.

---

## Developer Pain Points

- **Stream Reliability** — The #4945 Codex connection hang remains the most-voted open issue. Headless streaming also hangs on upstream stalls (#5558). Users are demanding better timeout handling and fast-failure.
- **Provider Fragmentation** — Duplicate registry instances (#5653), missing thinking formats (#5673), and incomplete Bedrock token handling (#5584) create a frustrating "pick your poison" experience with provider-specific edge cases.
- **Trust & Security UX** — The "trust this folder" dialog firing during `pi update` (#5619) and from the home directory (#5674) is a recurring annoyance that breaks workflow flow.
- **Config Gotchas** — Uppercase header values being silently corrupted (#5661) and context window sizes being wrong for GPT-5.5 (#5644) erode confidence in configuration parsing.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-13

## Today's Highlights

The v0.18.0 release ships today with key fixes, while the community continues to heavily debate the proposed OAuth free tier reduction (Issue #3203, 126 comments). On the development front, multiple PRs harden cancellation safety (PRs #5020, #5062) and fix OOM issues (PRs #4982, #4914). A new declarative agent definition pattern and MCP approval gating have also landed.

## Releases

**v0.18.0** — Patch release with two fixes:
- `chore(release): v0.17.1` automated version bump
- `fix(cli): skip thought parts in copy output` by @he-yufeng
[View release](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0)

## Hot Issues

1. **#3203 — Qwen OAuth Free Tier Policy Adjustment** (126 comments)
   Proposal to drop daily free quota from 1,000 to 100 requests/day and phase out free tier by 2026-06-20. Heated community discussion; many users rely on free tier for evaluation.
   [Issue](https://github.com/QwenLM/qwen-code/issues/3203)

2. **#4514 — Daemon capability gaps & prioritized backlog** (15 comments)
   Tracks remaining gaps in `qwen serve` HTTP/SSE surface post-v0.16-alpha. Critical for server-side deployment use cases.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4514)

3. **#4488 — VSCode plugin not showing in sidebar (v0.16.0)** (7 comments)
   Plugin disappears in VS Code 1.120.0 but works on 1.95.3. UI regression affecting VSCode users.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4488)

4. **#4821 — Declarative agent definitions via frontmatter** (6 comments)
   Feature request to match Claude Code's `.claude/agents/` pattern using Markdown + YAML. Strong community interest for portability.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4821)

5. **#4845 — `/import-config` for Claude user migration** (3 comments)
   One-click import of MCP servers, instructions, and commands from Claude Code/Desktop. High demand from multi-tool developers.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4845)

6. **#5018 — Long-context task attention degradation** (3 comments)
   User reports severe forgetting in long-running tasks with qwen3.7-max. Model-level concern with high priority.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5018)

7. **#5016 — Tool execution after cancellation** (2 comments)
   SIGINT during streaming still triggers tool execution. Critical safety bug with P1 priority.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5016)

8. **#5055 — Trojan detection in VSCode extension VSIX** (2 comments)
   Windows Defender flags `qwen-code-vscode-0.18.0-win32-x64.vsix` as `Trojan:JS/ShaiWorm.DBA!MTB`. Security concern requiring urgent triage.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5055)

9. **#5019 — Repeated identical tool calls in long contexts** (2 comments)
   API returns `Repetitive tool calls detected` error under long context. Correlated with #5015 — tool call deduplication gap.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5019)

10. **#4942 — VP mode scroll input conflict with Composer** (4 comments)
    Virtualized History mode breaks scrolling when Composer is active. UI polish issue affecting CLI users.
    [Issue](https://github.com/QwenLM/qwen-code/issues/4942)

## Key PR Progress

1. **#5020 — Drop tool calls after cancellation** (@he-yufeng, OPEN)
   Prevents execution of pending tool calls when a turn is cancelled mid-stream. Directly addresses Issue #5016.
   [PR](https://github.com/QwenLM/qwen-code/pull/5020)

2. **#5062 — Keep token escalation warm across agent rounds** (@he-yufeng, OPEN)
   Carries automatic `maxOutputTokens` escalation across tool-call rounds in headless agent loops, fixing regression from #4964.
   [PR](https://github.com/QwenLM/qwen-code/pull/5062)

3. **#4982 — Eliminate OOM from `debugResponses` accumulation** (@zzhenyao, CLOSED)
   Removes dead code (`debugResponses` array, `extractUsageFromGeminiClient`) that held all streaming chunks in memory, causing OOM.
   [PR](https://github.com/QwenLM/qwen-code/pull/4982)

4. **#4914 — Harden OOM prevention with idempotent compaction tests** (@zzhenyao, OPEN)
   Adds regression tests for `compactOldItems` and sets GC defaults. Follow-up to the #4824 compaction fix.
   [PR](https://github.com/QwenLM/qwen-code/pull/4914)

5. **#4713 — MCP project `.mcp.json` + workspace approval gating** (@qqqys, CLOSED)
   Adds approval gating for untrusted MCP servers with aligned scope precedence — aligns with Claude Code's `.mcp.json` handling.
   [PR](https://github.com/QwenLM/qwen-code/pull/4713)

6. **#4961 — A2UI surfaces over MCP for `qwen serve`** (@qqqys, CLOSED)
   Lets web clients render interactive A2UI surfaces from MCP tools via bridge extraction and action endpoint.
   [PR](https://github.com/QwenLM/qwen-code/pull/4961)

7. **#4933 — Settings file change detection via chokidar** (@water-in-stone, OPEN)
   Watches `settings.json` for live reload, solving a long-standing UX gap.
   [PR](https://github.com/QwenLM/qwen-code/pull/4933)

8. **#5063 — Detect incomplete `qwen review` runs in CI** (@he-yufeng, OPEN)
   Fails the PR review workflow when API errors occur, preventing silent green jobs.
   [PR](https://github.com/QwenLM/qwen-code/pull/5063)

9. **#4963 — Enable fork subagents by default** (@he-yufeng, CLOSED)
   Makes fork subagents available in interactive sessions by default, with trusted folder safety.
   [PR](https://github.com/QwenLM/qwen-code/pull/4963)

10. **#5059 — Remove duplicate agents panel in web-shell** (@wenshao, CLOSED)
    Consolidates SubAgent views into message-history panel, removing floating "Active agents" panel for cleaner UI.
    [PR](https://github.com/QwenLM/qwen-code/pull/5059)

## Feature Request Trends

1. **Claude Code parity** — Highest-requested pattern. Declarative agent definitions (#4821), `.mcp.json` support (#4713, now merged), and config import (#4845) all aim to match or surpass Claude Code capabilities.

2. **Session management** — Script-friendly `qwen sessions list` with JSON output (#4825), `/compress-fast` non-AI compression (#4264), and `/goal` iteration persistence across resumes (#4999).

3. **Multi-model & provider flexibility** — Dynamic model discovery from OpenAI-compatible APIs (#1206), shared baseUrl for multiple models (#4813), and model identity disambiguation (#4877, #4814).

4. **Background automation** — Subagent approval queueing to parent session (#4928), and safe-mode for troubleshooting (#4943).

5. **Extension ecosystem** — Multi-tab `/extensions` manager with install/discover/sources views (#4850), and project-level extension installation (#4835).

## Developer Pain Points

1. **Cancellation safety** — Tools executing after cancellation (#5016, #5020) and repeated identical tool calls (#5015, #5019) are P1 bugs undermining trust in the agent loop.

2. **OOM and memory leaks** — `debugResponses` accumulation (#4982), compaction bugs (#4914), and general memory pressure in long sessions remain recurring complaints.

3. **Windows compatibility** — Missing `printf` in `cmd.exe` (#5010), Trojan false positives (#5055), and VSCode UI regressions (#4488) suggest Windows testing gaps.

4. **Long-context degradation** — Users report "降智" (dumbing down) and tool call loops (#5018, #5019, #5029) — model behavior issues that may require Qwen model-side fixes.

5. **Terminal rendering** — Mouse wheel input leaks (`64;50;15M`) in CLI (#4974), resize fragmentation (#4891), and VP mode scroll conflicts (#4942) degrade terminal UX on macOS/Linux.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-13

## Today's Highlights
This week's digest reflects a major push toward provider-agnostic architecture, with PRs flowing to decouple DeepSeek-specific model IDs from the auto-router and subagent selection logic. A burst of performance-optimization PRs landed in the last 48 hours, targeting parallelization of KV store fetches, thread listing, and skill syncing. Meanwhile, the v0.8.59 stability release shipped with sidebar resize persistence and notification localization hardening.

---

## Releases

### v0.8.59 — CodeWhale
A stability and integration release that hardens the TUI, improves sidebar interactivity, localizes notifications, cleans up user-facing naming, and adds experimental config and runtime API foundations.

[View Release](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.59)

---

## Hot Issues

1. **[#3018]** **Un-hardcode DeepSeek from auto-router and subagent model selection** — Auto-model mode and per-role subagent models currently only work on DeepSeek. On other providers (Moonshot/Kimi, OpenAI, Ollama, Together), the flash-router sends `model: "deepseek-v4-flash"` through the active provider's client, guaranteeing a 400 error. This is a critical blocker for multi-provider adoption. Community reaction: 3 comments, consensus that this is the highest-priority v0.8.58 issue. [Issue](https://github.com/Hmbown/CodeWhale/issues/3018)

2. **[#2584]** **Cannot upload local images** — Using `/attach` to upload a local image to a multimodal model returns only the local file path instead of base64-encoded image data. The model sees `"/path/to/image.png"` rather than pixel content. Closed with 8 comments. [Issue](https://github.com/Hmbown/CodeWhale/issues/2584)

3. **[#1871]** **QoL: Taskbar progress, animated title spinner, and configurable completion sound** — Three small UX features providing visual/audible feedback during model processing so users can alt-tab and know when work is complete. 5 comments, 1 👍. Closed. [Issue](https://github.com/Hmbown/CodeWhale/issues/1871)

4. **[#431]** **OPENCODE: Bundled Exa web-search route** — If `EXA_API_KEY` is set, route web search through Exa MCP; otherwise use existing DDG/Bing path. Zero config changes for users without Exa. 4 comments, still open. [Issue](https://github.com/Hmbown/CodeWhale/issues/431)

5. **[#1722]** **Configurable auto-compact threshold with Ctrl+L keybinding** — At ~99.6% context saturation, the TUI becomes completely unresponsive while the model is mid-turn. Root cause: two guardrails competing for the event loop. 3 comments, closed. [Issue](https://github.com/Hmbown/CodeWhale/issues/1722)

6. **[#2606]** **Sidebar "Work" panel checklist status not updating after turn completes** — Main chat transcript correctly shows "Todo list updated" but sidebar shows stale data or "Work state updating..." even after turn finishes. Root cause: a missing re-render trigger. 3 comments, closed. [Issue](https://github.com/Hmbown/CodeWhale/issues/2606)

7. **[#2787]** **TUI status bar displays MCP count error** — When both a global MCP config (`~/.codewhale/mcp.json`) and project-local MCP config exist, the status bar renders an incorrect MCP server count. 3 comments, closed. [Issue](https://github.com/Hmbown/CodeWhale/issues/2787)

8. **[#471]** **EPIC: Web UI scaffold** — New `apps/web/` package using SolidJS or React+Vite, communicating with the local server via existing API plus SSE. Acceptance includes `deepseek serve --web` opening a browser. 3 comments, still open. [Issue](https://github.com/Hmbown/CodeWhale/issues/471)

9. **[#2656]** **Sub-agent session-name conflicts hard for agents to diagnose** — During sub-agent spawning, the model receives session-name conflicts for names it believed were new. The error message doesn't help the agent recover. 2 comments, closed. [Issue](https://github.com/Hmbown/CodeWhale/issues/2656)

10. **[#2605]** **`agent_eval` returns "deferred and now loaded" requiring double invocation** — First call to `agent_eval` returns a deferred-now-loaded message; second call (identical parameters) succeeds normally. 1 comment, closed. [Issue](https://github.com/Hmbown/CodeWhale/issues/2605)

---

## Key PR Progress

1. **[#2773]** **Complete provider fallback chain** — When the active provider returns a retryable error (429, 5xx, timeout, network), CodeWhale switches to the next configured provider without user intervention. Configurable via `fallback_providers` array in `config.toml`. [PR](https://github.com/Hmbown/CodeWhale/pull/2773)

2. **[#2865]** **Modernize toward latest Claude Code** — A grounded gap analysis-driven PR modernizing DeepSeek TUI toward latest Claude Code across behavior, lifecycle, skills/agents, and UI. Closes the long tail in safe, independently-tested increments. [PR](https://github.com/Hmbown/CodeWhale/pull/2865)

3. **[#2933]** **Hippocampal memory system, improved tool/subagent error messages, YOLO mode cleanup** — Four fixes: suppressing YOLO mode announcements, clearer tool error messages, subagent error formatting, and an experimental hippocampal memory system for long-term context retention. [PR](https://github.com/Hmbown/CodeWhale/pull/2933)

4. **[#3105]** **Optimize sorting in task panels to avoid string clones** — Replaced `sort_by_key` with `sort_by` in `sidebar.rs` for background and reasoning task rows, reducing unnecessary `task.id.clone()` allocations from O(N log N) to O(1). [PR](https://github.com/Hmbown/CodeWhale/pull/3105)

5. **[#3107]** **Optimize listDrafts to fetch KV items in parallel** — Modified `listDrafts` to use `Promise.all` over `listed.keys.map(k => kv.get(k.name))` instead of sequential `for...of` loops, eliminating network/IO bottlenecks. [PR](https://github.com/Hmbown/CodeWhale/pull/3107)

6. **[#3121]** **Optimize thread fetching in list_threads_summary** — Replaced sequential iteration over threads with concurrent execution via `futures_util::future::try_join_all()`, improving API latency when many threads are returned. [PR](https://github.com/Hmbown/CodeWhale/pull/3121)

7. **[#3139]** **Parallelize skill syncing** — Refactored `sync_registry` to fetch and sync community skills concurrently using `futures_util::future::join_all` instead of sequential `for` loop processing. [PR](https://github.com/Hmbown/CodeWhale/pull/3139)

8. **[#3141]** **Optimize get_thread_detail item fetching (N+1 fix)** — Added `list_items_for_turns_map` to `RuntimeThreadStore` to scan the `items` directory once and group by `turn_id`, replacing the per-turn directory read. [PR](https://github.com/Hmbown/CodeWhale/pull/3141)

9. **[#2986]** **Harvest-credit close template + stewardship branch explanation** — Two process additions from the 2026-06-09 triage session: naming contributors in harvested PR closures, and documenting stewardship branch conventions. [PR](https://github.com/Hmbown/CodeWhale/pull/2986)

10. **[#3110]** **Add tests for optional_str missing value behavior** — New test `optional_str_behavior` verifying extraction logic for valid strings, missing fields, invalid types, and null values. [PR](https://github.com/Hmbown/CodeWhale/pull/3110)

---

## Feature Request Trends

**Provider Agnosticism** — The strongest signal this week is the push to un-hardcode DeepSeek-specific model IDs from core routing logic (#3018, #2773). Users and contributors want to run with any provider's models through the TUI without workarounds or silent 400 errors.

**Web UI as a First-Class Surface** — A cluster of EPIC issues (#471, #472, #473, #474, #475, #476, #477, #478) continues to build the web UI scaffold: composer + transcript rendering, file browser with Monaco editor, approval modals, authentication, mode/model switching, PWA install support, and theme parity. This is the most active feature development area.

**Sub-Agent and Permission Improvements** — Multiple open issues target sub-agent permission derivation (#414), broader-pattern permission memory (#412), external directory permission gates (#411), reject-with-feedback modals (#413), and the question tool for model-to-user queries (#424). The permission and agent orchestration subsystems are clearly in active redesign.

**Configurable Keymaps** — Issue #436 ("PRIOR: Configurable keymap") proposes moving all TUI bindings to `~/.deepseek/keybinds.toml` with named bindings, multi-key sequences, and conflict detection. This is flagged as a v0.9.0 priority.

---

## Developer Pain Points

**Context Saturation and Freezes** — Issue #1722 documents a recurring pain: at ~99.6% context saturation, the TUI event loop becomes completely starved, making the app unresponsive for seconds or longer. The proposed auto-compact threshold with Ctrl+L binding addresses this but hasn't fully eliminated the UX frustration.

**Sub-Agent Diagnostic Opacity** — Multiple issues (#2656, #2657, #2605) reveal that sub-agents receive poor error messages: session-name conflicts with no actionable recovery path, tool-unavailability messages that don't explain why, and `agent_eval` requiring double invocation due to deferred loading semantics. Agents cannot self-diagnose or recover without manual intervention.

**Sidebar State Desync** — Issue #2606 (checklist status not updating in Work panel) and #2787 (MCP count error in status bar) point to recurring rendering bugs where sidebar state falls out of sync with the actual engine state. These are particularly frustrating because the sidebar is the primary status surface for multi-turn workflows.

**Multi-Modal Attachment Gotchas** — Issue #2584 (local image upload returning file path instead of base64) highlights a sharp edge in the multimodal workflow where `/attach` silently passes the wrong data shape, leading to confusing model responses. This was closed but represents a class of data-formatting bugs that quietly break functionality.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*