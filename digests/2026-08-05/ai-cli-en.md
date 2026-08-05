# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 01:26 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date: 2026-08-05 | Source: Community digests for 10 major AI CLI tools**

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a period of rapid maturation marked by three simultaneous pressures: **cross-platform desktop quality**, **agent trust/safety boundaries**, and **cost/context management**. Nine of ten tracked tools showed meaningful community activity in the last 24 hours, with six shipping releases or active release trains. Community attention has shifted from raw capability demos to production concerns — Windows stability, MCP lifecycle reliability, session continuity, silent data loss, and background resource consumption now dominate issue trackers. Notably, security incidents (a shell-substitution bypass in Gemini CLI, a credential-leaking sanitizer in Qwen Code, trust-boundary hardening in Claude Code) indicate attackers and auditors are actively probing agent runtimes. The strongest demand signals cluster around desktop app support (Linux/macOS/Windows), session memory/forking, and protocol-level integration via MCP and ACP.

---

## 2. Activity Comparison

*Issues/PR counts reflect hot issues and PRs updated within the 24-hour digest window, not total open counts.*

| Tool | Hot Issues | PRs Updated | Release Status (last 24h) |
|---|---|---|---|
| Claude Code | 10 | 6 | ✅ v2.1.222 (stable, security/isolation fixes) |
| OpenAI Codex | 10 | 10 | ✅ 4× rust-v0.147.0-alpha builds |
| Gemini CLI | 10 | 10 | ⬜ None (10 PRs incl. security fix) |
| GitHub Copilot CLI | 10 | 2 | ✅ v1.0.79-1 (breaking sandbox rename) |
| Kimi Code CLI | 6 | 3 | ⬜ None |
| OpenCode | 10 | 10 | ✅ v1.18.13 (RTL fixes) |
| Pi | 10 | 10 | ⬜ None (10 PRs, release train active) |
| Qwen Code | 10 | 10 | ✅ v0.21.5 stable + v0.21.6-preview.0 + nightly |
| DeepSeek TUI | 10 | 10 | ⬜ None (v0.9.4 train: PR #5135, 77 commits ahead) |
| Grok Build | 0 | 0 | ⬜ No activity |

**Read:** Codex, OpenCode, Qwen, Pi, Gemini, and DeepSeek are iterating fastest by PR velocity. Claude Code and Copilot CLI ship stable patches on a sustained cadence. Grok Build is dormant.

---

## 3. Shared Feature Directions

Requirements recurring across multiple communities:

| Theme | Tools (evidence) | Specific Needs |
|---|---|---|
| **Windows / cross-platform reliability** | Claude Code (#42776 relaunch lock, #83243 Bash EOF), Codex (#33776 taskkill storms, #25453 PowerShell polling, #29499 WMI, #30009 sandbox), Copilot CLI (#4026 native crashes, #4328 WSL2 keybind), Kimi (#2584 IME duplication, #2587 crash), Pi (#6817 `find` patterns, #7427 skill loading, #7547 Windows survey), Qwen Code (#8519 tmux flicker on Linux) | Stable desktop relaunch, no background polling storms, correct input handling, path-separator parity, terminal rendering |
| **Session continuity & memory** | Claude Code (data loss #74260, autocompact thrashing #82131), Codex (session import #36964), Kimi (#1283 memory, #1282 remote continuation, 24👍), Copilot CLI (#1697 session forking), Gemini (Auto Memory retries #26522), Qwen Code (lost turns after abort #8356), Pi (compaction failures #6768/#7413) | Persistent memory layers, session fork/resume, reliable compaction, no silent transcript loss |
| **MCP reliability & lifecycle** | Copilot CLI (#4370 FastMCP init failure), Codex (#19425 tools not exposed, #30408 process leaks 9+ GB), Gemini (#28664 consent shows env/cwd), Qwen Code (#8550 SSE hangs), DeepSeek (PR #5130 lifecycle endpoints) | Fatal init regressions, orphaned process cleanup, transparent config consent, tool exposure in all surfaces |
| **Context-window & quota cost control** | Claude Code (#62466 image errors still bill), Qwen Code (#8452 microcompaction invalidates cache), DeepSeek (#5239/#5244 128K fallback for 1M models), Kimi (#2586 degradation at ~500K), Gemini (#28671/#28672 quota-fallback corruption) | Accurate window detection, no wasted spend on errors, compaction that doesn't destroy prompt cache |
| **Deterministic agent trust boundaries** | Claude Code (v2.1.222 worktree isolation, PreToolUse bypass), Gemini (#28691 shell-expansion bypass fix, #22093 subagents run despite disabled), Qwen Code (#8102 tool-execution boundaries, #8493 cancelled tools still mutate), DeepSeek (#5209 false edit success) | Cancellation safety, enforced permissions, no silent success, sandbox escape hatches |
| **BYOK / local model endpoints** | Copilot CLI (#4139/#4196 BYOK), Gemini (PR #28681 SGLang/local OpenAI-compatible), Pi (#7610 LLM Gateway, #7571 Cortecs providers) | Self-hosted backends, router providers, cost-controlled workflows |
| **ACP protocol completeness** | Kimi (#2583 model discovery/switching, PR #2364 permission modes), Qwen Code (#8544 JetBrains task lists), DeepSeek (PR #5225 tools over ACP) | Model listing, mid-session switching, tool execution, IDE parity |
| **RTL & internationalization** | Claude Code (#38005, 90👍), OpenCode (v1.18.13 RTL fixes), Kimi (Thai IME #2584) | Proper RTL rendering, IME/input handling, accessible TUI themes |
| **Configurable summarization/compaction** | Pi (#7553, PR #7602 independent models), Claude Code (autocompact thrashing #82131) | Dedicated summarization models/thinking levels, independent of session budget |

---

## 4. Differentiation Analysis

- **Claude Code** — The most mature enterprise TUI. Differentiates on **security isolation** (worktree sandboxing, hook restrictions) and a deep **plugin/skills ecosystem**. Community skews toward power users hitting edge cases (PDF dependencies, hook semantics, TUI formatting). Its pain points are data-integrity and Windows desktop issues.

- **OpenAI Codex** — Heavily **desktop-app-centric**; the top three issues are Linux support (917👍), macOS resource runaway (387👍), and restoring `/undo` (372👍). Rapid Rust-client iteration (4 alphas/day). Target: ChatGPT/desktop users, with MCP and exec-server concurrency as technical focus.

- **Gemini CLI** — Emphasizes **subagent autonomy and memory** but is paying the trust tax: false `GOAL` success, agents running despite disabled, Auto Memory privacy. Strong security hardening (GHSA fix, OAuth redirects for Cloud Workstations). Also pushing **local-model support** (SGLang) — unique among the big three.

- **GitHub Copilot CLI** — **Enterprise-first**: org-level agents, managed settings policies, billing entity selection. Slowest PR velocity of active tools (2 PRs) but ships stable patches. Sandbox settings are evolving but breaking renames (allowDevToolCaches→allowDevToolAccess) create migration friction.

- **Kimi Code CLI** — Smallest community, focused on **ACP protocol completeness** and **session continuity** (memory #1283, remote control #1282 at 24👍). Early-stage Windows and IME gaps. Signaled reliability ceiling at ~500K context fill.

- **OpenCode** — The **DeepSeek V4 Flash reliability** struggle dominates (blank responses, 403s, model version mismatch), alongside **Go plan billing API** demand (126👍). Distinctive for its Go gateway (opencode-go) and aggressive API-compatibility work (SSE streams, cache-token parsing) with Codex/OpenAI and Anthropic semantics.

- **Pi** — Differentiates on **provider breadth** (Copilot Enterprise, GHE, Cortecs, LLM Gateway) and **embedded integration** (RPC over sockets, argument completions for web/IDE clients). Compaction reliability is its biggest vulnerability. Maintainer actively investigating Windows support.

- **Qwen Code** — The most **architecture-forward** community: deterministic tool-execution boundaries, five-state workspace runtime, trust-boundary hardening of hooks. Shipping aggressive performance work on `/review` pipelines and migrating macOS Electron→Tauri. Also pushing ACP/IDE parity with Claude Code and Codex.

- **DeepSeek TUI** — Distinctive for **build-time engineering**: a 682K-line monolith crate is being decomposed (epic #5249). Expanding a **Runtime API** surface (goal-loop, memory, verifier receipts, MCP/skill lifecycle) for managed clients — unique among peers. Community is small but deeply technical.

---

## 5. Community Momentum & Maturity

**Highest community engagement:**
- **Claude Code** — Largest and most vocal community: 117-comment issue threads, 90👍 enhancement requests, 72👍 TUI complaints persisting for months. Mature but noisy.
- **OpenAI Codex** — Fast-rising: 917👍 for one feature request, 387👍 for a macOS bug, 372👍 for a restored command. Desktop user base is broad (non-CLI-first users included), amplifying issue volume.

**Rapid iteration (PR velocity + release cadence):**
- **Qwen Code** — Multiple release tracks (stable, preview, nightly) with 10 PRs/day spanning security, performance, and features. Highest build/execution throughput this cycle.
- **OpenCode** — 10 PRs/day across gateway, TUI, and desktop. Shipping RTL fixes and provider reliability patches quickly.
- **Gemini CLI** — 10 PRs/day despite no release; deep security and reliability work. Community smaller than Claude/Codex but technically engaged.
- **DeepSeek TUI** — Ambitious v0.9.4 train (77 commits) plus a 6-issue build-performance epic; engineering-driven momentum.
- **Pi** — 10 PRs/day with clear maintainer direction (Windows investigation, compaction configurability).

**Stable but slower:**
- **Copilot CLI** — 2 PRs/day, one stable patch. Enterprise users depend on it but the community is less voluminous.
- **Kimi** — Modest activity (6 issues, 3 PRs) with clear focus areas; community demand outpaces supply (memory, remote control).

**Dormant:**
- **Grok Build** — Zero activity in 24h.

---

## 6. Trend Signals

1. **Desktop app quality is the new battleground.** The top-voted issues across Codex, Claude Code, and Copilot CLI are desktop-specific: Linux support, macOS resource runaways, Windows process storms. CLI tools are becoming full desktop products, and cross-platform correctness now gates adoption.

2. **Agent trust is a security issue, not a UX nicety.** Evidence: Gemini's shell-expansion bypass (GHSA-wpqr-6v78-jr5g), Qwen's credential-leaking sanitizer, Claude Code's worktree-isolation and hook-bypass fixes, DeepSeek's silent false edit success. Expect continued hardening around cancellation safety, permission enforcement, and secret redaction — and more CVEs.

3. **Context-window management is a cost center.** Microcompaction invalidating prompt caches (Qwen), compression triggering at 128K for 1M models (DeepSeek), image errors still consuming quota (Claude Code), degradation at 500K fill (Kimi) — communities are demanding accurate window accounting and configurable compaction. This is where wasted spend is most visible.

4. **MCP is the standard, but the lifecycle is immature.** Every major tool has at least one open MCP reliability issue: init failures, process leaks, SSE hangs, tools discovered but not exposed. The winners will invest in MCP process lifecycle, config transparency, and graceful degradation.

5. **Session continuity is the next differentiation layer.** Memory systems (Kimi #1283, Gemini Auto Memory), session forking (Copilot #1697, Qwen PR #8274), remote continuation (Kimi #1282), and reliable compaction (Pi, Claude Code) are converging on the same user need: *long-lived agentic work that survives context limits, device switches, and crashes*.

6. **ACP is becoming the integration layer.** Kimi, Qwen, and DeepSeek are all building ACP protocol features (model discovery, permission switching, tool execution, task-list rendering). As IDEs (JetBrains, Zed) and mobile clients adopt it, ACP parity will become a checkbox in enterprise evaluations.

7. **BYOK/local-model demand keeps rising.** Copilot CLI, Gemini, and Pi are all adding or improving BYOK/local endpoints. For cost-controlled or offline workflows, this is a recurring enterprise requirement.

8. **Build/compile performance matters for tool maintainers too.** DeepSeek TUI's monolith-breakup epic and Qwen's review-pipeline parallelization signal that agent tools are now complex enough that their own developer velocity is at risk — a maturity marker for the ecosystem.

---

*Sources: Community digests for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI, and Grok Build — 2026-08-05.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-05

*All PRs shown are open as of the data snapshot. Ranking follows comment activity within the provided dataset.*

## 1. Top Skills Ranking

1. **[skill-creator eval reliability overhaul — #1298](https://github.com/anthropics/skills/pull/1298)**  
   Fixes the long-standing `run_eval.py` “recall = 0%” bug (#556). The PR installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. Discussion emphasizes that the skill-description optimizer was “optimizing against noise” across 10+ independent reproductions.

2. **[document-typography skill — #514](https://github.com/anthropics/skills/pull/514)**  
   Adds typographic quality-control for generated documents: orphan-word wrap, widow paragraphs, and numbering misalignment. Community notes these defects affect nearly every AI-generated document, making this a high-value “guardrail” skill.

3. **[pdf skill case-sensitivity fix — #538](https://github.com/anthropics/skills/pull/538)**  
   Corrects 8 case-mismatched file references in `skills/pdf/SKILL.md`. Discussion highlights the broader need for cross-platform correctness on case-sensitive filesystems.

4. **[ODT / OpenDocument skill — #486](https://github.com/anthropics/skills/pull/486)**  
   Adds ODT/ODS/ODF creation, template filling, and ODT→HTML conversion. The proposal covers ISO-standard document workflows and LibreOffice interoperability.

5. **[frontend-design skill clarity — #210](https://github.com/anthropics/skills/pull/210)**  
   Revises the existing frontend-design skill so every instruction is actionable within a single Claude Code session. Discussion focuses on specificity, coherence, and reducing vague guidance.

6. **[skill-quality-analyzer + skill-security-analyzer — #83](https://github.com/anthropics/skills/pull/83)**  
   Adds two meta-skills for evaluating Skill structure/docs quality and security dimensions. Connects directly to the community’s growing concern about trustworthy, well-governed skills.

7. **[docx tracked-change ID collision fix — #541](https://github.com/anthropics/skills/pull/541)**  
   Prevents DOCX corruption when tracked changes collide with existing bookmark `w:id` values. Shows the ecosystem’s increasing focus on production-grade Office-format fidelity.

8. **[skill-creator YAML frontmatter guard — #539](https://github.com/anthropics/skills/pull/539)**  
   Adds pre-parse validation to warn on unquoted `description` fields containing `:`, preventing silent YAML truncation during skill authoring — a core reliability fix for the skill-development loop.

---

## 2. Community Demand Trends

From the most-discussed issues, the community’s highest-signal demands are:

- **Security and trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) calls out community skills distributed under the `anthropic/` namespace; [Issue #1175](https://github.com/anthropics/skills/issues/1175) raises security/context-window concerns around SharePoint documents. Expect more demand for security analyzers and namespace/identity controls.

- **Org-wide sharing and skill management** — [Issue #228](https://github.com/anthropics/skills/issues/228) requests org-level skill libraries; [Issue #189](https://github.com/anthropics/skills/issues/189) reports duplicate skills from overlapping plugins; [Issue #62](https://github.com/anthropics/skills/issues/62) shows the cost of skill-discovery failures.

- **Context-window and token discipline** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) documents the bundled `claude-api` skill injecting ~156k tokens in one call. [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes a `compact-memory` skill for symbolic, low-token agent state.

- **Skill-creator tooling must be trustworthy** — [Issue #556](https://github.com/anthropics/skills/issues/556), [Issue #1169](https://github.com/anthropics/skills/issues/1169), and [Issue #1061](https://github.com/anthropics/skills/issues/1061) all target the eval/optimization loop: recall=0%, Windows incompatibilities, and broken subprocess handling. The community needs an eval signal it can trust.

- **Quality gates and governance patterns** — [Issue #202](https://github.com/anthropics/skills/issues/202) asks for skill-creator to become a true operational skill; [Issue #1385](https://github.com/anthropics/skills/issues/1385) proposes a three-gate reasoning QA pipeline; [Issue #412](https://github.com/anthropics/skills/issues/412) proposes agent-governance safety patterns.

- **Interoperability** — [Issue #16](https://github.com/anthropics/skills/issues/16) asks to expose skills as MCP tools; [Issue #29](https://github.com/anthropics/skills/issues/29) requests AWS Bedrock usage. Demand is rising for skills to work outside the default Claude Code surface.

---

## 3. High-Potential Pending Skills

These open PRs are active and may land soon:

- **[document-typography skill — #514](https://github.com/anthropics/skills/pull/514)** — typographic QA for generated documents.
- **[ODT / OpenDocument skill — #486](https://github.com/anthropics/skills/pull/486)** — create/fill/convert ODT, ODS, ODF.
- **[testing-patterns skill — #723](https://github.com/anthropics/skills/pull/723)** — full-stack testing guidance: Testing Trophy, unit tests, React Testing Library, and test-philosophy coverage.
- **[pyxel skill — #525](https://github.com/anthropics/skills/pull/525)** — retro/pixel-art game development via `pyxel-mcp`.
- **[SAP-RPT-1-OSS predictor skill — #181](https://github.com/anthropics/skills/pull/181)** — predictive analytics on SAP business data using SAP’s open-source tabular foundation model.
- **[self-audit skill — #1367](https://github.com/anthropics/skills/pull/1367)** — mechanical file verification plus four-dimension reasoning audit before delivery.
- **[plan-file-hygiene skill — #1479](https://github.com/anthropics/skills/pull/1479)** — lifecycle management for accumulated planning artifacts.
- **[color-expert skill — #1302](https://github.com/anthropics/skills/pull/1302)** — color naming systems, color spaces, and “what to use when” guidance.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is not for any single domain skill, but for **trustworthy, production-grade Skills infrastructure** — accurate skill triggering/evaluation, secure distribution, predictable token/context usage, and cross-platform reliability.

---

# Claude Code Community Digest — 2026-08-05

## Today's Highlights
Claude Code shipped **v2.1.222**, focused on isolation and security fixes: worktree-isolated sessions can no longer run destructive git commands against the main checkout, and PreToolUse auto-allow hooks can no longer bypass tool restrictions in background agent tasks. Meanwhile, the community is most engaged with a long-running Windows desktop relaunch bug (117 comments), a 90-reaction RTL support request, and image-processing API errors that are eating into users' usage limits. Several reports around data loss during adaptive thinking/compaction are also gaining traction.

## Releases
**v2.1.222** — [release](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)
- Fixed worktree-isolated sessions and their subagents being able to run destructive git commands against the main checkout; isolation now applies to file edits and Bash in every session type.
- Fixed PreToolUse auto-allow hooks bypassing tool restrictions in background agent tasks.

## Hot Issues
1. **[#42776 — Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock](https://github.com/anthropics/claude-code/issues/42776)**  
   The most-commented issue this week (117 comments, 51 👍). Users are still blocked by a Windows-specific relaunch failure caused by an orphaned file lock; despite the `[invalid]` tag, it continues to generate significant community noise.

2. **[#38005 — RTL Support for Hebrew & Arabic in Claude Desktop / Cowork](https://github.com/anthropics/claude-code/issues/38005)**  
   The top-voted open enhancement (90 👍). Developers and users in RTL-language markets are pushing for proper right-to-left rendering; it is labeled `area:a11y` and `area:cowork`, and duplicates suggest strong pent-up demand.

3. **[#62466 — Repeated "Image couldn't be processed" API errors consuming usage limit](https://github.com/anthropics/claude-code/issues/62466)**  
   A costly failure mode: image-processing errors not only fail but continue consuming API quota. 30 comments show broad frustration, and the impact on paid usage makes this urgent.

4. **[#74260 — Assistant text blocks silently dropped when followed by more thinking](https://github.com/anthropics/claude-code/issues/74260)**  
   A serious data-integrity report: text emitted mid-turn can be missing from both the rendered TUI and the transcript JSONL. Reproduced on 2.1.201 with adaptive thinking; 24 comments and `data-loss` label make it a top concern.

5. **[#23704 — Read tool's PDF support requires poppler-utils but it's undocumented](https://github.com/anthropics/claude-code/issues/23704)**  
   The Read tool advertises PDF support, but it silently depends on `pdftoppm` being installed. 15 comments and 19 👍, with users calling for detection and documentation.

6. **[#13378 — 2-space indent and hard wrap at 80 breaks copy-paste](https://github.com/anthropics/claude-code/issues/13378)**  
   A long-running TUI usability complaint with 72 👍. Developers want configurable formatting to avoid copy-paste corruption; remains open after months.

7. **[#55875 — Notification hooks not firing for permission_prompt in VS Code](https://github.com/anthropics/claude-code/issues/55875)**  
   Closed, but with 14 comments. The tension between hook behavior in the CLI and VS Code extension is a recurring integration headache.

8. **[#72248 — Workflow tool delivers JSON args as string instead of parsed object](https://github.com/anthropics/claude-code/issues/72248)**  
   Workflow scripts receive objects/arrays as JSON-encoded strings, contradicting the documented "verbatim" contract. This is a correctness issue for anyone building complex workflow automation.

9. **[#82536 — `--continue` cannot find sessions created by `-p`](https://github.com/anthropics/claude-code/issues/82536)**  
   A CLI workflow gap: interactive resume can't locate sessions started in print/pipe mode. Small comment count, but it breaks a common scripting pattern.

10. **[#83243 — Bash tool fails on trivial commands with 'unexpected EOF' on Windows](https://github.com/anthropics/claude-code/issues/83243)**  
   A recent Windows regression (v2.1.220) where every Bash-tool invocation fails, even simple commands. Only 2 comments so far, but this is a high-severity platform blocker.

## Key PR Progress
Only 6 PRs were updated in the 24-hour window; all are listed:

1. **[#83993 — fix(scripts): reject self-referential duplicates](https://github.com/anthropics/claude-code/pull/83993)**  
   Prevents the duplicate-issue comment script from flagging an issue as a duplicate of itself.

2. **[#83992 — fix(plugin-dev): assert expected hook decision](https://github.com/anthropics/claude-code/pull/83992)**  
   Adds `--expect allow|deny|ask` to `test-hook.sh` so hook tests can verify the intended outcome, not just that a hook ran. Fixes #83800.

3. **[#83990 — fix(plugin-dev): report missing jq dependency](https://github.com/anthropics/claude-code/pull/83990)**  
   Improves `test-hook.sh` error handling when `jq` is not installed instead of misreporting valid JSON. Fixes #83802.

4. **[#83890 — Create pylint.yml](https://github.com/anthropics/claude-code/pull/83890)**  
   Adds a pylint CI workflow to the repository.

5. **[#83374 — docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374)**  
   Adds the `MessageDisplay` hook event to the bundled Hook Development skill, including trigger description and quick-reference table.

6. **[#83738 — Fix/83484 symlink path expansion](https://github.com/anthropics/claude-code/pull/83738)**  
   Fixes `claude install` creating broken symlinks on Linux when the home path still contains a literal `%h` placeholder. Addresses #83484.

## Feature Request Trends
- **Internationalization & accessibility**: The clearest signal is RTL support for Hebrew and Arabic ([#38005](https://github.com/anthropics/claude-code/issues/38005)) with 90 👍 and a duplicate label — the highest-voted open enhancement.
- **TUI/presentation customization**: Developers are asking for configurable indentation and line wrapping ([#13378](https://github.com/anthropics/claude-code/issues/13378)) and more meaningful desktop session tags based on folder names rather than repo names ([#81628](https://github.com/anthropics/claude-code/issues/81628)).
- **Skills/plugin documentation consistency**: Users want the custom-skills schema and plugin-skills schema aligned and documented ([#83981](https://github.com/anthropics/claude-code/issues/83981)), plus better docs for hidden tool dependencies such as poppler-utils ([#23704](https://github.com/anthropics/claude-code/issues/23704)).
- **Remote/desktop session management**: Issues around persistent project selection across account switches ([#83973](https://github.com/anthropics/claude-code/issues/83973)), plugin-hook sync in desktop SSH sessions ([#83643](https://github.com/anthropics/claude-code/issues/83643)), and SSH key-only fallback ([#83815](https://github.com/anthropics/claude-code/issues/83815)) point to a growing remote-workflow surface.

## Developer Pain Points
- **Data integrity and context management**: Assistant text being dropped from transcripts ([#74260](https://github.com/anthropics/claude-code/issues/74260)), fabricated user/system turns ([#79293](https://github.com/anthropics/claude-code/issues/79293)), autocompact "thrashing" ([#82131](https://github.com/anthropics/claude-code/issues/82131)), and expensive post-compaction skill re-injection ([#82144](https://github.com/anthropics/claude-code/issues/82144)) are all eroding trust in session continuity.
- **Wasted usage/cost**: Image-processing failure loops that still consume quota ([#62466](https://github.com/anthropics/claude-code/issues/62466)) are causing real financial pain for users.
- **Windows reliability**: Multiple platform-specific blockers remain: desktop relaunch locks ([#42776](https://github.com/anthropics/claude-code/issues/42776)), MSIX WebGPU crashes ([#83130](https://github.com/anthropics/claude-code/issues/83130)), and Bash-tool EOF failures ([#83243](https://github.com/anthropics/claude-code/issues/83243)).
- **Subagent/workflow control gaps**: Users report that `effort:` frontmatter is ignored ([#64706](https://github.com/anthropics/claude-code/issues/64706)), Workflow JSON args are stringified ([#72248](https://github.com/anthropics/claude-code/issues/72248)), and internal `agent()` calls are not subject to blocking hooks or budgets ([#79953](https://github.com/anthropics/claude-code/issues/79953)).
- **PDF handling friction**: The Read tool is either silently missing its poppler dependency ([#23704](https://github.com/anthropics/claude-code/issues/23704)) or falsely reporting unencrypted PDFs as password-protected ([#66563](https://github.com/anthropics/claude-code/issues/66563)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — August 5, 2026

## Today’s Highlights

The Codex repository shipped another batch of `rust-v0.147.0-alpha` patch releases, continuing rapid iteration on the Rust client. Community attention this week is heavily focused on desktop app quality: Linux support is the most-upvoted open feature request, while macOS trustd/syspolicyd CPU issues and Windows WMI/PowerShell polling dominate bug reports. On the PR side, recent merged work improves plugin/skill caching, deferred custom tool search, exec-server concurrency, and Amazon Bedrock compaction.

## Releases

Four new alpha builds were published in the last 24 hours; no changelog details were included in the release metadata.

- [rust-v0.147.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7)
- [rust-v0.147.0-alpha.6.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.4)
- [rust-v0.147.0-alpha.6.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.3)
- [rust-v0.147.0-alpha.6.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.1)

## Hot Issues

- [#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) · 198 comments · 917 👍  
  The most-requested platform feature. Users specifically cite the macOS app becoming almost unusable due to a separate bug, making Linux desktop support increasingly urgent.

- [#25719 – Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway](https://github.com/openai/codex/issues/25719) · 80 comments · 387 👍  
  Serious macOS resource issue causing persistent CPU/memory spikes. High engagement indicates many affected desktop users.

- [#9203 – Please make `/undo` back](https://github.com/openai/codex/issues/9203) · 68 comments · 372 👍  
  TUI users want a reliable rollback path for unintended changes to untracked or uncommitted files. Strong emotional reaction from developers who rely on Codex for destructive edits.

- [#16857 – High GPU usage while the app is “thinking” due to tiny useless animation](https://github.com/openai/codex/issues/16857) · 38 comments · 46 👍  
  A small animated UI element causes significant GPU load during thinking, highlighting broader desktop performance concerns.

- [#30009 – `apply_patch` fails with a Windows sandbox related error](https://github.com/openai/codex/issues/30009) · 30 comments · 10 👍  
  File edits through `apply_patch` are broken in Windows sandbox environments, blocking core coding workflow on Windows.

- [#33776 – ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe processes, causing WMI storms and DWM degradation](https://github.com/openai/codex/issues/33776) · 29 comments · 26 👍  
  Extreme Windows performance issue: repeated process spawning degrades the entire desktop session.

- [#19425 – Custom stdio MCP server discovered by `/mcp` but tools not exposed to Desktop threads](https://github.com/openai/codex/issues/19425) · 28 comments · 5 👍  
  MCP tools are discovered but not usable in Desktop threads, a regression in the app-server tool exposure layer.

- [#25453 – Windows Codex Desktop spawns powershell.exe every second for full process polling](https://github.com/openai/codex/issues/25453) · 22 comments · 6 👍  
  Likely a root cause of many Windows CPU/lag complaints: constant `powershell.exe` process polling.

- [#30408 – MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)](https://github.com/openai/codex/issues/30408) · 22 comments · 6 👍  
  Orphaned MCP processes accumulate as threads are archived, leading to unbounded memory growth in the app-server.

- [#29499 – Codex triggers high CPU usage in WMI Provider Host on Windows after startup](https://github.com/openai/codex/issues/29499) · 17 comments · 23 👍  
  Another recurring Windows WMI-related performance issue, affecting systems after startup.

## Key PR Progress

- [#37000 – Keep shared skill caches fresh across plugin loads](https://github.com/openai/codex/pull/37000)  
  Prevents stale plugin data by keying skill snapshots by filesystem/plugin identity and coalescing concurrent loads.

- [#36998 – Support deferred custom tools in tool search](https://github.com/openai/codex/pull/36998)  
  Adds freeform/custom tools to the tool-search index and serializes them as Responses API `custom` tools for deferred execution.

- [#36993 – Support `includeTurns` reads for paginated threads](https://github.com/openai/codex/pull/36993)  
  Reconstructs full projected turns from paginated history so legacy `thread/read` behavior remains compatible.

- [#36992 – Allow injecting model catalog caches](https://github.com/openai/codex/pull/36992)  
  Introduces a public `ModelsCache` contract and lets model providers accept caller-provided cache implementations.

- [#36987 – Add opt-in concurrent exec-server request dispatch](https://github.com/openai/codex/pull/36987)  
  New `--concurrent-requests` flag prevents long-running exec-server requests from blocking health checks and cleanup.

- [#36981 – Enable remote compaction for Amazon Bedrock](https://github.com/openai/codex/pull/36981)  
  Marks Bedrock as v1-only so manual/automatic compaction uses `/v1/responses/compact`.

- [#36976 – Honor explicit-only orchestrator skills](https://github.com/openai/codex/pull/36976)  
  Hides `allow_implicit_invocation: false` skills from the model-visible catalog while preserving direct invocation.

- [#36966 – Allow disabling the built-in image viewer](https://github.com/openai/codex/pull/36966)  
  Adds a `features.view_image` flag that omits the native image viewer tool, including for fresh-context subagents and guardian turns.

- [#36964 – Preserve working directories when importing external sessions](https://github.com/openai/codex/pull/36964)  
  Resolves Cursor `empty-window` sessions to the parent project so imported chats retain working-directory context.

- [#36967 – Skip symlinks when installing plugins](https://github.com/openai/codex/pull/36967)  
  Ignores symlinked skill files/executables during plugin installation instead of rejecting the whole install.

## Feature Request Trends

- **Linux desktop app support** remains the dominant feature request: [#11023](https://github.com/openai/codex/issues/11023) has by far the most upvotes and comments.
- **Restore `/undo` and improve session management**: users want `/undo` back, the ability to delete chats, working archive behavior on WSL, and CLI session import into the desktop app ([#9203](https://github.com/openai/codex/issues/9203), [#33589](https://github.com/openai/codex/issues/33589), [#30658](https://github.com/openai/codex/issues/30658), [#21079](https://github.com/openai/codex/issues/21079)).
- **Reduce desktop background resource usage**: repeated requests to stop GPU animations, WMI/PowerShell polling, and macOS `syspolicyd`/`trustd` runaways ([#16857](https://github.com/openai/codex/issues/16857), [#25719](https://github.com/openai/codex/issues/25719), [#33776](https://github.com/openai/codex/issues/33776)).
- **MCP reliability**: users want discovered MCP tools exposed to Desktop threads and proper cleanup of per-thread MCP server processes ([#19425](https://github.com/openai/codex/issues/19425), [#30408](https://github.com/openai/codex/issues/30408)).
- **Cross-platform parity for Windows/WSL**: Windows sandbox failures, broken archive behavior, and non-clickable file paths remain common requests ([#30009](https://github.com/openai/codex/issues/30009), [#22585](https://github.com/openai/codex/issues/22585)).

## Developer Pain Points

- **Windows desktop performance is the biggest recurring pain point**: WMI Provider Host saturation, one-second PowerShell polling, `taskkill.exe`/`conhost.exe` storms, and system-wide input lag are reported across multiple open issues ([#33776](https://github.com/openai/codex/issues/33776), [#25453](https://github.com/openai/codex/issues/25453), [#29499](https://github.com/openai/codex/issues/29499), [#32562](https://github.com/openai/codex/issues/32562)).
- **macOS resource spikes remain unresolved**: `syspolicyd`/`trustd` CPU/memory runaway and GPU-heavy “thinking” animations create poor desktop experiences ([#25719](https://github.com/openai/codex/issues/25719), [#16857](https://github.com/openai/codex/issues/16857)).
- **TUI safety regression**: removing `/undo` means developers no longer have a recovery path for unwanted changes to untracked or uncommitted files ([#9203](https://github.com/openai/codex/issues/9203)).
- **MCP lifecycle instability**: tools are discovered but not usable in Desktop, while leaked MCP processes can consume gigabytes of RAM ([#19425](https://github.com/openai/codex/issues/19425), [#30408](https://github.com/openai/codex/issues/30408)).
- **Desktop settings/state bugs**: subagents ignore configured model/reasoning settings, local history disappears after switching providers, and project-local instructions get shadowed by host-generated overrides ([#28719](https://github.com/openai/codex/issues/28719), [#31625](https://github.com/openai/codex/issues/31625), [#33238](https://github.com/openai/codex/issues/33238)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

A wave of reliability and security fixes is moving through the repository: a new PR hardens shell substitution detection to close a variable-expansion bypass (GHSA-wpqr-6v78-jr5g), while several contributions target context corruption and quota-fallback crashes. Separately, the Auto Memory subsystem faces scrutiny in a cluster of issues around secret redaction, runaway retries, and silent patch invalidation, and the long-running generalist-agent hang (#21409) remains the community's most-voted pain point.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

- [**#22323 — Subagent recovery after MAX_TURNS reported as GOAL success**](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, 12 comments) — `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the max-turn limit before doing any work. This masks real interruptions and can produce confidently wrong results — a dangerous failure mode for an autonomous agent.

- [**#21409 — Generalist agent hangs**](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, 8 👍) — Deferring to the generalist agent hangs indefinitely, even for trivial tasks like folder creation. Users report waiting up to an hour; disabling sub-agent delegation is the only workaround. High community impact given the 👍 count.

- [**#26525 — Add deterministic redaction and reduce Auto Memory logging**](https://github.com/google-gemini/gemini-cli/issues/26525) (P2, security) — Auto Memory sends local transcript content to the model *before* the prompt instructs redaction, meaning secrets are already exposed to model context. The service can also log skill contents — a meaningful privacy concern for a local-FS-reading feature.

- [**#26522 — Auto Memory retries low-signal sessions indefinitely**](https://github.com/google-gemini/gemini-cli/issues/26522) (P2) — Sessions that the extraction agent decides not to read (low signal) are never marked processed, so they resurface repeatedly. This creates an endless retry loop and wasted background work.

- [**#25166 — Shell command stuck with "Waiting input" after completion**](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, 3 👍) — Simple, non-interactive CLI commands hang while the UI still shows them as active and awaiting input. Recurring and easy to trigger, this undermines trust in shell execution.

- [**#21968 — Gemini doesn't use skills and sub-agents enough**](https://github.com/google-gemini/gemini-cli/issues/21968) (P2) — Anecdotal but resonant: the model ignores user-authored skills (e.g., `gradle`, `git`) unless explicitly instructed. Users invest in custom agents that effectively never get invoked autonomously.

- [**#21983 — Browser subagent fails in Wayland**](https://github.com/google-gemini/gemini-cli/issues/21983) (P1) — Browser agent crashes under Wayland with a spurious `GOAL` termination. Linux/Wayland users lose a headline feature without a clear workaround.

- [**#22093 — Subagents running without permission since v0.33.0**](https://github.com/google-gemini/gemini-cli/issues/22093) (P2) — After auto-updating to v0.33.0, subagents activate despite agents being disabled in *all* configurations. A regression that breaks user consent expectations and may have driven some of the "unexpected agent behavior" reports.

- [**#24246 — 400 error with >128 tools**](https://github.com/google-gemini/gemini-cli/issues/24246) (P2) — The CLI hits a 400 error when tool counts exceed limits; users expect smarter tool scoping based on enabled tools rather than a hard crash.

- [**#20079 — Symlinked agent files not recognized**](https://github.com/google-gemini/gemini-cli/issues/20079) (P2) — A `~/.gemini/agents/` entry that is a symlink is silently ignored. Users managing dotfiles via symlinks lose custom subagents without explanation.

## 4. Key PR Progress

- [**#28691 — Block $VAR / ${VAR} expansion bypass (security)**](https://github.com/google-gemini/gemini-cli/pull/28691) — Closes an incomplete check in `detectBashSubstitution()` / `detectPowerShellSubstitution()` that let variable expansion slip past the GHSA-wpqr-6v78-jr5g security gate; includes defense-in-depth hardening of the issue-dedup workflow.

- [**#28671 — Fix context corruption and quota-error fallback**](https://github.com/google-gemini/gemini-cli/pull/28671) — Adds defensive history hardening (last-mile protection) to prevent model "autocomplete" prefix-continuation bugs when tool executions are interrupted by quota fallbacks or ESC queries.

- [**#28672 — Repair /compress reload and quota-fallback tool-response loss**](https://github.com/google-gemini/gemini-cli/pull/28672) — Two fixes: `/compress` no longer fails with "Failed to load resumed session data," and hitting quota limits no longer corrupts tool responses.

- [**#28681 — Add SGLang and local OpenAI-compatible endpoint support**](https://github.com/google-gemini/gemini-cli/pull/28681) — Large feature (size/l, size/xl) enabling self-hosted/local LLM backends, a frequent community request for offline or cost-controlled workflows.

- [**#28664 — MCP consent shows full server config; hardens stdio env**](https://github.com/google-gemini/gemini-cli/pull/28664) — Previously, consent prompts only showed command/args/httpUrl; now `env`, `cwd`, and `headers` are surfaced and diffed on update, so users can see exactly what an MCP server will execute.

- [**#28688 — Dynamic OAuth redirect for Cloud Workstations**](https://github.com/google-gemini/gemini-cli/pull/28688) — Fixes OAuth failures in Google Cloud Workstations VMs where static `localhost` redirect URIs break because the browser runs on a different host.

- [**#28641 — Fix ghost text wrapping infinite loop at narrow widths**](https://github.com/google-gemini/gemini-cli/pull/28641) (help wanted) — Guards `getGhostTextLines` against an infinite loop when `inputWidth` is narrower than a single wide CJK/emoji codepoint; includes a regression test that previously hung.

- [**#28639 — Guard formatTruncatedToolOutput against non-positive maxChars**](https://github.com/google-gemini/gemini-cli/pull/28639) — Prevents `maxChars <= 0` from inflating output ~2x due to negative `slice()` index behavior; small but important correctness fix.

- [**#28680 — Reject A2A OpenID Connect auth during validation**](https://github.com/google-gemini/gemini-cli/pull/28680) — The CLI currently validates OIDC config for remote A2A agents, then fails at request time; this PR fails fast at config time instead. Security-relevant for agent-to-agent connections.

- [**#28530 — Caretaker triage evaluation framework and judge runner**](https://github.com/google-gemini/gemini-cli/pull/28530) — Adds an LLM-as-a-Judge rubric and parallel Git-Worktree benchmark runner under `tools/caretaker-agent/evals/triage/` — infrastructure to measure issue-triage quality at scale.

## 5. Feature Request Trends

- **AST-aware codebase understanding** — Two linked epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) push toward AST-aware file reads, method-bound extraction, and codebase mapping via tools like `tilth`/`glyph`, aiming to cut token noise and misaligned reads.
- **Subagent observability** — Requests to expose subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and include subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) show a clear desire for transparency into agent-internal behavior.
- **Agent self-awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) wants the CLI to accurately know its own flags, hotkeys, and execution modes so it can act as its own expert guide.
- **Robust evaluations** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) scales behavioral evals (76 tests across 6 models) and [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) demands flaky steering evals be fixed to always pass — the team is investing in measurable agent quality.
- **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery instead of the current fail-fast behavior for locked profiles.

## 6. Developer Pain Points

- **Subagent reliability is the #1 frustration** — Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false `GOAL` success with zero work done ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and agents firing despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) collectively erode trust in delegation.
- **Shell/terminal flakiness** — Commands stuck on "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and getting trapped at interactive prompts (e.g., `vite` scaffolding, [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) are recurring workflow blockers.
- **Privacy/security of the memory system** — Auto Memory sends transcript content to model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), silently skips invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and retries low-signal sessions forever ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — a triple red flag for users with sensitive local data.
- **Unexpected filesystem side effects** — Models scattering temp scripts across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) and using destructive commands like `git reset --force` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) create cleanup overhead and risk.
- **Configuration and environment friction** — Browser agent ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), symlinked agents silently unrecognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and hard 400 errors beyond ~128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) point to a broader theme: configuration is not consistently honored or validated.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-05

## Today's Highlights
Copilot CLI shipped **v1.0.79-1** with a breaking sandbox setting rename: `allowDevToolCaches` is now `allowDevToolAccess`, covering dev-tool config and registries in addition to caches. The issue tracker is active around Windows/WSL terminal input bugs, MCP compatibility problems, and long-running feature requests for custom themes, session forking, and BYOK model support. A new triage issue also flags a potential MCP initialization regression in 1.0.79-1 with FastMCP servers.

## Releases
**v1.0.79-1**
- Improved the sandbox/dev-tool handling.
- **Breaking:** `allowDevToolCaches` renamed to `allowDevToolAccess` because it now covers dev-tool config and registries, not just caches.
- The old key is silently ignored, meaning an existing `false` opt-out reverts to the default (`on`). Users must rename the key in their settings.

## Hot Issues
1. **[#1504 – Add custom theme support](https://github.com/github/copilot-cli/issues/1504)**  
   Open feature request for user-defined, shareable themes (e.g., JSON-based). 8 comments, 23 👍 — one of the most popular theming/accessibility asks.

2. **[#1285 – Organisation level Agent not showing up](https://github.com/github/copilot-cli/issues/1285)**  
   Enterprise users report that agents defined in `${org}/.github-private` never appear in Copilot CLI or VS Code. Important for org-wide agent rollout.

3. **[#4328 – Ctrl+H misinterpreted as Ctrl+Backspace under WSL2](https://github.com/github/copilot-cli/issues/4328)**  
   `/help` says `ctrl+h` deletes the previous character, but WSL2 + Windows Terminal makes it delete the whole word due to `WT_SESSION` leaking. A sharp input-handling regression.

4. **[#4005 – Copilot billing entity isn’t selected](https://github.com/github/copilot-cli/issues/4005)**  
   Enterprise users can no longer save memories with "Copilot billing entity isn't selected", though everything else works. Blocks context/memory on enterprise setups.

5. **[#4202 – Built-in view reports "Path does not exist" for existing files](https://github.com/github/copilot-cli/issues/4202)**  
   Regression starting in 1.0.72/1.0.73: the `view` tool fails on files that work in 1.0.71. High-impact for non-interactive/file workflows.

6. **[#1697 – Session forking with shared context](https://github.com/github/copilot-cli/issues/1697)**  
   Request to branch a conversation into parallel sessions while retaining shared context. 25 👍 — strong community demand for session workflow improvements.

7. **[#4370 – Copilot CLI 1.0.79-1 fails MCP initialization with FastMCP](https://github.com/github/copilot-cli/issues/4370)**  
   New triage issue: CLI sends `server/discover`, FastMCP returns `-32602`, and Copilot treats it as fatal. Could be a release-blocking MCP compatibility bug.

8. **[#4361 – Plugin skill slash commands no longer work after client rewrite change](https://github.com/github/copilot-cli/issues/4361)**  
   Plugin-provided skills invoked as `/skill-name` now fire a doomed `session.commands.invoke` RPC instead of being rewritten to natural language. Significant plugin regression.

9. **[#4349 – Managed settings policy fails closed on valid enum value "enable"](https://github.com/github/copilot-cli/issues/4349)**  
   Enterprise policy fetch fails schema validation because `permissions.disableBypassPermissionsMode` can be `"enable"`, but the CLI only accepts `"disable"`. This blocks all local/custom MCP servers.

10. **[#4026 – Copilot CLI crashes repeatedly on Windows native runtime](https://github.com/github/copilot-cli/issues/4026)**  
    Ongoing Windows native crashes since May 2026, unresolved across at least four versions. Remains a critical stability pain point for Windows developers.

## Key PR Progress
Only 2 PRs were updated in the last 24 hours:

- **[#4355 – Merge](https://github.com/github/copilot-cli/pull/4355)**  
  Open PR titled "Merge" with no description. Appears to be a pending integration/merge PR; needs maintainer review.

- **[#4366 – ACTION REQUIRED: Fundamental security findings resolution](https://github.com/github/copilot-cli/pull/4366)**  
  Automated security remediation PR from `vault-chatops[bot]` for the `copilot-cli` Vault app in `ci` and `production`. Contains placeholder values (`<UPDATE_ME>`) that must be replaced before merging.

## Feature Request Trends
- **Custom theming/accessibility:** Users want fully custom, shareable themes (#1504) and report OSC/color contrast issues (#3898).
- **Session lifecycle management:** Session forking (#1697), cloud-synced sessions (#1947), session deletion (#2019), and remote session heartbeat/status (#1343) are recurring themes.
- **BYOK / custom model endpoints:** Strong interest in bringing own LLM providers, including Azure OpenAI, Google Cloud AI, and local models (#4139, #4196).
- **Plugin ecosystem improvements:** Auto-updating plugins (#1709) and skills invocation as first-class slash commands (#4048, #4361) are trending.
- **Observability:** Persistent token/context usage indicators (#2532) and ACP token/context reporting (#4174).

## Developer Pain Points
- **Terminal/keyboard quirks:** WSL2 key misbinding (#4328), raw escape sequences polluting input in zellij (#4267), and no opt-out for OSC 9;4 progress sequences (#4352).
- **Windows stability:** Recurring native-runtime crashes (#4026) remain unresolved and reproducible across versions.
- **MCP interoperability:** FastMCP `server/discover` failures (#4370), github-mcp-server Web Search errors (#2692), and enterprise policy failures blocking local MCP servers (#4349).
- **Enterprise/configuration friction:** Agent visibility in org repos (#1285), memory-saving blocked by billing entity selection (#4005), and managed settings parsing too strictly (#4349).
- **Regression-prone behaviors:** Built-in `view` path failures (#4202), stashed prompts lost on session switch (#4334), and plugin slash-command regression (#4361).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Today's Highlights

No new Kimi Code CLI release landed in the past 24 hours, but the tracker shows continued momentum on ACP protocol work and Windows reliability. The most significant signal is a closed-but-notable reliability report (#2586) describing agent degradation at ~500K context fill, while PR #2585 and #2364 push forward subprocess environment signaling and ACP permission-mode switching. Community discussion remains strongest around persistent memory (#1283) and remote session continuation (#1282).

## Releases

No new versions were published in the last 24 hours.

## Hot Issues

Only 6 issues were updated in the last 24 hours, so all are listed below.

- [#1283 – Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  Asks for automatic AI-managed memory plus user-defined manual memory to persist context, project patterns, and preferences across sessions. It has 17 comments, indicating active community discussion even though it has no upvotes. A memory layer is increasingly considered essential for long-lived coding agents.

- [#1282 – Remote Control: Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
  Requests the ability to continue a local CLI session from phone, tablet, or browser. With 24 👍 and 12 comments, this is the highest-demand feature request in the current update. It targets workflow continuity while keeping the user’s local environment intact.

- [#2586 – Agent reliability degrades at high context fill (~500K tokens)](https://github.com/MoonshotAI/kimi-cli/issues/2586)  
  Reports repetitive action loops, no escalation, and instruction drift once context fill passes roughly 500K tokens. Status is **CLOSED** with 1 comment. This matters because it points to a practical reliability ceiling for long agentic coding sessions.

- [#2587 – Kimi CLI exits abnormally during normal session advancement](https://github.com/MoonshotAI/kimi-cli/issues/2587)  
  Crash-level bug on Windows 10.0.26200 with Kimi Code v0.29.2 and the K3 high model. No comments yet. A session-ending crash during normal flow is a serious stability issue for Windows users.

- [#2584 – Thai and other IME characters duplicated in prompt on Windows](https://github.com/MoonshotAI/kimi-cli/issues/2584)  
  On Windows 11 with v0.31.1, IME-based input produces duplicated characters in the CLI prompt. No comments yet. This blocks correct text entry for non-Latin languages and highlights a gap in terminal input handling.

- [#2583 – ACP: advertise available models and support mid-session model switching](https://github.com/MoonshotAI/kimi-cli/issues/2583)  
  When driven from an ACP client, `kimi acp` does not expose the model list or support `current_model_update`, making it impossible to switch models mid-session. This is a blocking limitation for mobile and editor ACP clients such as Happy Coder and Zed.

## Key PR Progress

Only 3 PRs were updated in the last 24 hours, so all are listed below.

- [#2200 – fix(shell): adapt timeouts for long commands](https://github.com/MoonshotAI/kimi-cli/pull/2200)  
  Automatically extends shell timeouts for slow command patterns like git clone/fetch, git submodule cleanup, package installs, and builds. Keeps existing 60s default for normal commands and preserves explicit caller-supplied timeouts. Useful for reducing false failures during long-running operations.

- [#2585 – feat(cli): set AI_AGENT for subprocesses](https://github.com/MoonshotAI/kimi-cli/pull/2585)  
  Exposes `AI_AGENT=kimi` to subprocesses launched from both pip/uv and standalone binary entrypoints, while preserving a non-blank value supplied by a wrapper. This helps orchestration tools and plugins reliably detect that they are running under Kimi Code CLI.

- [#2364 – feat(acp): support permission mode switching](https://github.com/MoonshotAI/kimi-cli/pull/2364)  
  Adds protocol-level ACP permission-mode switching for Kimi sessions and resolves issue #1414. Note that it stacks on #2363. This is important for ACP clients that need to switch approval modes mid-session.

## Feature Request Trends

- **Long-term memory**: Persistent automatic/manual memory for context, project patterns, and user preferences (#1283).
- **Remote/any-device continuation**: Continue a local session from other devices while preserving the local environment (#1282).
- **ACP protocol completeness**: Model discovery, mid-session model switching (#2583), and permission-mode switching (#2364) for richer integration with external ACP clients.
- **Long-session reliability**: High-context-fill behavior and instruction stability are becoming first-class concerns, especially as agent sessions grow larger (#2586).

## Developer Pain Points

- **Context-window reliability**: At ~500K tokens, sessions exhibit repetitive loops, instruction drift, and a lack of escalation (#2586).
- **Windows stability and input handling**: Abnormal CLI exits (#2587) and duplicated IME/Thai characters (#2584) point to incomplete Windows support.
- **ACP client limitations**: Clients cannot discover models or switch models mid-session (#2583), and permission-mode control is missing at the protocol level (#2364).
- **Session continuity**: Users need persistence across sessions and devices; the strong interest in memory (#1283) and remote control (#1282) indicates frustration with losing context when switching environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-05

## Today's Highlights
OpenCode released v1.18.13 with TUI and desktop right-to-left (RTL) fixes, while contributor PRs landed to harden tool-call classification, retry empty provider streams, and add model attribution to JSON run output. Community attention remains heavily focused on DeepSeek V4 Flash reliability—across the Go gateway, TUI, and Desktop app—alongside rising demand for a Go plan usage/balance API (#16017, 126 👍).

## Releases
### v1.18.13
- TUI: GitHub PR reviews now include the pull request number and URL in context.
- Desktop: Fixed multiple right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions.
- Desktop: Fixed shared RTL behaviors such as directional icons.

[Release v1.18.13](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)

## Hot Issues
Selected 10 important issues from the last 24h:

- [#16017 – Add Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)  
  The most-supported open feature request (126 👍, 29 comments). Users want programmatic access to rolling/weekly/monthly usage data for OpenCode Go subscription management.

- [#39845 – DeepSeek V4 Flash suddenly requires “Enable models hosted in China”](https://github.com/anomalyco/opencode/issues/39845)  
  Mid-session breakage where the model stops working and forces an opt-in to China-hosted models. 22 👍 and 15 comments show broad confusion.

- [#34498 – Respect `disable-model-invocation: true` in SKILL.md frontmatter](https://github.com/anomalyco/opencode/issues/34498)  
  Feature request with 48 👍 asking for Claude Code-compatible SKILL.md frontmatter handling.

- [#40483 – DeepSeek V4 Flash Free returns blank response in Desktop App on Windows 11](https://github.com/anomalyco/opencode/issues/40483)  
  UI shows “thinking” and plays the completion sound, but no text is rendered. Several duplicate reports appeared within hours.

- [#40485 – deepseek-v4-flash via opencode-go returns 403/hangs](https://github.com/anomalyco/opencode/issues/40485)  
  Other models work on the same key, suggesting a gateway/routing problem specific to `deepseek-v4-flash`.

- [#40409 – opencode-go `deepseek-v4-flash` serves V3.2, not DeepSeek V4 Flash 0731](https://github.com/anomalyco/opencode/issues/40409)  
  Billing/quality mismatch: users are charged for the flash model but receive older V3.2 behavior with a 2025-05 knowledge cutoff.

- [#22235 – VSCode `Context Awareness` doesn’t take effect](https://github.com/anomalyco/opencode/issues/22235)  
  Users expect automatic attachment of selected text/files like Claude Code; 12 comments with no clear resolution.

- [#38723 – `opencode run` intermittently hangs during init](https://github.com/anomalyco/opencode/issues/38723)  
  Reported ~56% failure rate: process stays alive with zero stdout, no error, and no session created.

- [#40171 – Go `/v1/responses` returns HTTP 200 but incomplete SSE stream](https://github.com/anomalyco/opencode/issues/40171)  
  Missing `response.output_item.added` and `response.content_part.added` events breaks Codex-style clients.

- [#40516 – Desktop app fails to load provider/model/MCP on startup](https://github.com/anomalyco/opencode/issues/40516)  
  Appears to be a regression across v1.18.5–v1.18.13; v1.18.4 works correctly for affected organizations.

## Key PR Progress
- [#40545 – Add model attribution to `run --format json` step events](https://github.com/anomalyco/opencode/pull/40545)  
  Adds model information to `step_start` / `step_finish` so headless consumers can attribute tokens/cost correctly.

- [#40549 – Classify malformed Responses tool calls](https://github.com/anomalyco/opencode/pull/40549)  
  Distinguishes successful tool-call decoding from malformed client-tool input; malformed-only responses are normalized as `error`.

- [#40547 – Derive Anthropic tool finish reason](https://github.com/anomalyco/opencode/pull/40547)  
  Tracks locally executed Anthropic tool calls and normalizes benign end reasons to `tool-calls` while preserving the raw native reason.

- [#40546 – Preserve Gemini tool finish semantics](https://github.com/anomalyco/opencode/pull/40546)  
  Treats responses with parsed client tool calls as `tool-calls` even when the terminal event omits `finishReason`.

- [#40535 – Retry empty incomplete streams](https://github.com/anomalyco/opencode/pull/40535)  
  Classifies terminal-less streams as `incomplete-stream` and retries only when no model output has started.

- [#40531 – Retry empty unknown responses](https://github.com/anomalyco/opencode/pull/40531)  
  Prevents silent empty assistant turns by routing unknown-reason empty attempts through the session retry policy.

- [#40541 – Parse `cache_creation_tokens` from OpenAI-compatible usage](https://github.com/anomalyco/opencode/pull/40541)  
  Fixes `cacheWriteInputTokens` always being 0 when using OpenAI-compatible proxies like LiteLLM.

- [#40487 – Retire legacy provider aliases](https://github.com/anomalyco/opencode/pull/40487)  
  Removes Azure Cognitive Services and Google Vertex Anthropic as standalone providers and migrates legacy IDs in configs.

- [#40427 – Experimental renderer performance improvements](https://github.com/anomalyco/opencode/pull/40427)  
  Benchmarks show initial renderer memory dropping from 7.45 MB to 1.82 MB (-75.5%).

- [#40538 / #40537 – Make xAI OAuth device-only](https://github.com/anomalyco/opencode/pull/40538)  
  Replaces loopback OAuth with RFC 8628 device flow, removing PKCE/CORS/callback server complexity and supporting remote setups.

## Feature Request Trends
- **Go plan usage/billing API**: #16017 remains the clearest demand signal—users want usage data outside the dashboard.
- **Claude Code feature parity**: SKILL.md frontmatter controls like `disable-model-invocation` are explicitly requested (#34498).
- **Editor context awareness**: Multiple issues (#22235, #40540) show users expect the VS Code extension to automatically attach active selections and open tabs.
- **Desktop and terminal UX polish**: Requests include configurable Ctrl+D exit confirmation (#40510) and Flatpak-aware auto-updates (#39670).

## Developer Pain Points
- **DeepSeek V4 Flash reliability is the dominant complaint**: blank responses, 403s, hangs, and model version mismatches across Desktop, TUI, and opencode-go (#40483, #40485, #40409, #40460).
- **Desktop app regressions**: Provider/model/MCP startup failures and `ECONNREFUSED 127.9.9.9:443` issues are affecting users on recent versions (#40516, #40525).
- **API compatibility gaps**: Incomplete SSE event streams on `/v1/responses` and cache-token misreporting are breaking OpenAI/Codex-compatible integrations (#40171, #40541).
- **Editor integration frustrates daily workflows**: Context awareness, selection detection, and active-tab awareness either don’t work or require manual setup (#22235, #40540).
- **TUI/terminal instability persists**: `opencode run` hangs during init and copy/paste over Tmux/Kitty/SSH remain unresolved (#38723, #30472, #36646).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-05

## 1. Today's Highlights
Compaction reliability remains the hottest topic, with three separate Copilot Enterprise/GHE issues surfacing 421 "Misdirected Request" and "unknown stamp" failures — and a new PR that finally makes summarization models configurable. Windows support also earned fresh attention via a dedicated discussion thread and several path/skill-loading bugs, while the TUI saw fixes for jumpy scrolling and xterm.js image rendering.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#6768 – Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)**  
   Closed, 19 comments, 18 👍. Compaction fails with 421 errors on Copilot Enterprise seats; normal turns work. High engagement indicates many enterprise users are blocked.

2. **[#7547 – How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)**  
   Open, 12 comments. Maintainer‑led investigation to inventory Windows usage modes and pain points — a signal that Windows support is being actively prioritized.

3. **[#7413 – Compaction fails on GHE.com enterprise accounts — “unknown stamp” error](https://github.com/earendil-works/pi/issues/7413)**  
   Open, 6 comments. `/compact` fails with `400 invalid token: unknown stamp "prod-cus-01"` on GHE.com; only compaction, not normal chat, is affected.

4. **[#7553 – Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)**  
   Open, 6 comments. Users want independent summarization model/thinking settings instead of inheriting the session's reasoning budget. Already tackled by PR #7602.

5. **[#7508 – OAuth refresh has no request timeout — a stalled refresh freezes the session for ~5 minutes](https://github.com/earendil-works/pi/issues/7508)**  
   Closed, 5 comments. A flaky network during token refresh blocks the credential-store lock and freeze the entire session. A practical reliability fix.

6. **[#6817 – find returns no results for path patterns like src/**/*.ts on Windows](https://github.com/earendil-works/pi/issues/6817)**  
   Open, 5 comments. Path-separator patterns are broken in the `find` tool on Windows; plain filenames work. Points to a core path-handling bug.

7. **[#7594 – node:sqlite missing in release binary causing plugin breakage](https://github.com/earendil-works/pi/issues/7594)**  
   Closed, 4 comments. Extensions using the built-in `node:sqlite` module fail in release builds. Affects `pi-total-recall` and future database-backed extensions.

8. **[#7395 – JSON mode serializes cumulative assistant state on every delta, causing quadratic output](https://github.com/earendil-works/pi/issues/7395)**  
   Open, 3 comments. In `--mode json`, each delta re-serializes the whole accumulated message, leading to quadratic output and long stdout drains — a serious performance concern for scripted use.

9. **[#7616 – Chat scroll jumps when tool blocks grow above the viewport; no Page Up/Page Down history scroll](https://github.com/earendil-works/pi/issues/7616)**  
   Closed, 2 comments. The TUI's differential renderer clears the screen when a tool block grows too tall, causing jarring jumps; also lacks PgUp/PgDn history scrolling.

10. **[#7628 – Security: 0.83.0 shrinkwrap pins vulnerable undici and brace-expansion](https://github.com/earendil-works/pi/issues/7628)**  
    Closed, 1 comment. Published package pins `undici@8.5.0` and `brace-expansion@5.0.7`, both with known fixes (`8.9.0`, `5.0.8`). Security-sensitive users should update.

## 4. Key PR Progress

1. **[#7602 – Configurable summarization models](https://github.com/earendil-works/pi/pull/7602)**  
   Adds independent models and thinking levels for compaction/branch summaries, addressing #7553. Also handles provider context-window errors during compaction.

2. **[#7610 – Add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)**  
   OpenRouter-style router support as built-in `openai-completions` providers; contributed by the LLM Gateway team, replacing auto-closed #7480.

3. **[#7571 – Add built-in Cortecs provider support](https://github.com/earendil-works/pi/pull/7571)**  
   Adds the European AI provider/router as a new built-in provider, backed by models.dev, similar to existing Base providers.

4. **[#7604 – Keep $defs in non-strict Anthropic tool schemas](https://github.com/earendil-works/pi/pull/7604)**  
   Fixes dangling `$ref` pointers when sending Anthropic tools built from zod-derived schemas — a subtle schema projection bug.

5. **[#7606 – Let explicit chatgpt-account-id header override JWT extraction for Codex](https://github.com/earendil-works/pi/pull/7606)**  
   Not all ChatGPT tokens carry the `chatgpt_account_id` claim; this allows callers to provide the account ID explicitly.

6. **[#7605 – Keep response bodies out of OAuth error messages](https://github.com/earendil-works/pi/pull/7605)**  
   Prevents token-endpoint response bodies (which may echo request params) from leaking into logs, telemetry, and user-facing dialogs.

7. **[#7599 – RPC over sockets](https://github.com/earendil-works/pi/pull/7599)**  
   Adds `--listen` for RPC over Unix socket or TCP, plus `connectAddress` option for `RpcClient` — useful for remote/embedded integrations.

8. **[#7621 – Expose argument completions via get_argument_completions](https://github.com/earendil-works/pi/pull/7621)**  
   New RPC command lets embedded clients (e.g. web UIs) show slash-command subcommand completions, filling a gap for non-TUI frontends.

9. **[#7619 – Resume failed turn by selecting it in /tree](https://github.com/earendil-works/pi/pull/7619)**  
   Selecting an assistant entry that ended in an error now retries the turn instead of hitting a dead end; the error entry stays in history.

10. **[#7612 – Add size param to iTerm2 image encoder to support xterm.js image addon](https://github.com/earendil-works/pi/pull/7612)**  
   Includes the decoded byte count in OSC 1337 sequences, satisfying `@xterm/addon-image@0.9.0`'s strict validation (issue #7465).

## 5. Feature Request Trends

- **Configurable compaction summarization** — independent model, thinking level, and context-window handling for automatic/manual compaction (#7553).
- **Expanded provider ecosystem** — new built-in providers (Cortecs #7571, LLM Gateway #7610, Qwen Token Plan Individual #7631) and model-list fixes for existing providers (#7560).
- **Windows-first fixes** — path pattern handling (#6817), skill loading (#7427), and a broader call for structured Windows feedback (#7547).
- **Embedded/RPC integration** — exposing auth flows (#7590), argument completions (#7621), and socket-based RPC (#7599) to serve web/IDE clients.
- **Rendering improvements** — Mermaid diagram support (#7623), iTerm2/xterm.js image size metadata (#7465), and less jittery TUI scrolling (#7616, #7574).

## 6. Developer Pain Points

- **Copilot Enterprise compaction failures** keep recurring: 421 "Misdirected Request" (#6768, #7579) and "unknown stamp" on GHE.com (#7413) — a clear enterprise pain point.
- **Windows support gaps** remain systemic: broken `find` patterns (#6817), `loadSkills` RangeError (#7427), and a general lack of documented/testing focus on Windows (#7547).
- **Compaction reliability** is fragile beyond enterprise: sessions freeze during OAuth refresh stalls (#7508), and compaction reuses the wrong base URL (#7579).
- **TUI polish issues** are frequent: random scroll jumps (#5023, #7616), keybinding conflicts in fullscreen (#7574), crashes on wide dialog lines (#7528), and missing PgUp/PgDn handling (#7629).
- **Diagnostics gap**: users don't report runtime (bun vs node) because `version` doesn't show it (#7244), making bug triage harder.
- **Security hygiene**: published packages pin known-vulnerable dependencies (#7628) — a reminder to audit shrinkwrapped artifacts.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-05

## 1. Today's Highlights

Stable **v0.21.5** shipped with a macOS Electron→Tauri migration bridge and detailed execution-level tool-call outcome tracking, while preview builds added browser-extension alpha diagnostics and headless Goal workflow docs. The issue tracker shows the community pushing hard on agent-runtime trust boundaries ([#8102](https://github.com/QwenLM/qwen-code/issues/8102), 17 comments), a severe Linux/tmux rendering bug ([#8519](https://github.com/QwenLM/qwen-code/issues/8519)), and a credential-leaking sanitizer flaw ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)). PR activity is dominated by performance work on the `/review` and autofix pipelines, plus security hardening of hooks and MCP replay handling.

## 2. Releases

- **[v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases)** / **[v0.21.5-nightly.20260805](https://github.com/QwenLM/qwen-code/releases)** — Browser extension alpha readiness diagnostics ([#6739](https://github.com/QwenLM/qwen-code/pull/6739)) and docs for headless Goal workflows.
- **[v0.21.5](https://github.com/QwenLM/qwen-code/releases)** — Opt-in one-time update bridge migrating macOS users from the Electron desktop app to the new Tauri shell ([#8392](https://github.com/QwenLM/qwen-code/pull/8392)); detailed execution-specific outcome tracking for tool calls.
- **[v0.21.4-nightly.20260804](https://github.com/QwenLM/qwen-code/releases)** — Electron→Tauri desktop update bridge and a web-shell table dialog fix.

## 3. Hot Issues

1. **[#8102 — Deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)** — Most-discussed issue (17 comments): proposes keeping the LM outside the trust boundary and making the runtime deterministically constrain, authorize, observe, and evaluate model actions. Signals growing community demand for safety guarantees.
2. **[#8519 — Severe flickering in tmux](https://github.com/QwenLM/qwen-code/issues/8519)** — 11 comments; Qwen Code flickers once or twice per second in tmux on Linux. High-visibility regression affecting terminal-first users.
3. **[#8051 — Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)** — 9 comments; count-only workspace/session limits don't bound bytes held by request bodies, WebSocket assembly, or other memory. Performance/ops concern for `qwen serve`.
4. **[#8136 — Provider warning sanitizer leaks passwords and truncates ports](https://github.com/QwenLM/qwen-code/issues/8136)** — 6 comments; `sanitizeProviderWarning` mis-parses userinfo, exposing credentials containing `@` and truncating messages with ports. Security bug with direct credential-exposure risk.
5. **[#8356 — Turns lost from transcript after APIUserAbortError](https://github.com/QwenLM/qwen-code/issues/8356)** — 5 comments; after abort, subsequent turns are never written to the local session transcript. Session-integrity bug affecting ACP/Web bridge usage.
6. **[#8493 — Cancelled file tools can still mutate files](https://github.com/QwenLM/qwen-code/issues/8493)** — 5 comments; `write_file`/`edit` continue into the filesystem write even after the abort signal fires during async preparation. Safety issue in a core code path.
7. **[#8533 — Content[]/Part[] cannot safely encode per-provider reasoning-replay contracts](https://github.com/QwenLM/qwen-code/issues/8533)** — 4 comments; foundational typing problem for replaying provider-specific reasoning output across sessions. Architecturally significant for multi-provider support.
8. **[#8550 — `qwen mcp list` hangs indefinitely on SSE server](https://github.com/QwenLM/qwen-code/issues/8550)** — New (3 comments); hangs forever when an SSE MCP server never emits `endpoint`. Practical reliability pain for MCP users.
9. **[#8544 — ACP task list not rendered in JetBrains](https://github.com/QwenLM/qwen-code/issues/8544)** — 3 comments; Claude Code and Codex render live task lists via ACP in JetBrains AI Assistant, Qwen Code does not. IDE-parity gap.
10. **[#8452 — Microcompaction repeatedly invalidates the prompt cache](https://github.com/QwenLM/qwen-code/issues/8452)** — 3 comments; size-triggered microcompaction rewrites already-cached conversation prefixes on consecutive ToolResult turns, silently inflating token costs.

## 4. Key PR Progress

1. **[#8482 — fix(core): a never-delivered MCP call is a first delivery, not a replay](https://github.com/QwenLM/qwen-code/pull/8482)** — Fixes a deterministic CI failure in MCP auto-reconnect by correcting replay-safety semantics; important correctness work on the MCP layer.
2. **[#8396 — fix(hooks): close four trust-boundary holes in hook execution](https://github.com/QwenLM/qwen-code/pull/8396)** — Stops HTTP hook redirects (evading URL whitelist/SSRF checks) and closes three other repo-config-vs-execution gaps.
3. **[#8368 — feat(auth): add Kimi and Xiaomi MiMo providers](https://github.com/QwenLM/qwen-code/pull/8368)** — First-class provider presets with regional access choices (China, Singapore, International) in `/auth`.
4. **[#8213 — feat(serve): establish workspace runtime ownership](https://github.com/QwenLM/qwen-code/pull/8213)** — Adds authoritative five-state runtime snapshots, workspace-scoped epochs, physical work leases, and bounded startup/teardown for ACP child lifecycles.
5. **[#8274 — feat: fork from any conversation](https://github.com/QwenLM/qwen-code/pull/8274)** — Makes session branching target any earlier Assistant response safely, handling tool calls, cancellations, rewinds, and metadata.
6. **[#8439 — feat(cli): Ctrl+click hyperlinks and right-click context menu in VP mode](https://github.com/QwenLM/qwen-code/pull/8439)** — Restores native terminal capabilities lost when Virtual Viewport mode enabled SGR mouse tracking.
7. **[#8548 — perf(autofix): build review CLI bundle once per scan](https://github.com/QwenLM/qwen-code/pull/8548)** — Eliminates repeated `npm ci` + `npm run build` per review leg; a shared `build-cli` job fans out to legs.
8. **[#8498 — perf(review): retire dry chunks and pipeline verification in the reverse audit](https://github.com/QwenLM/qwen-code/pull/8498)** — Addresses the main bottleneck for large-PR reviews; stacked on the reverse-audit budget gate.
9. **[#8443 — fix(cli): allow clicking to expand/collapse thought while streaming](https://github.com/QwenLM/qwen-code/pull/8443)** — Removes the disabled click handler on thinking blocks during pending/streaming state.
10. **[#8461 — feat(channels): support local gh authentication](https://github.com/QwenLM/qwen-code/pull/8461)** — Lets GitHub Channels reuse the host's existing `gh auth login` credential via an opt-in `useLocalGh`, with explicit PATs taking priority.

## 5. Feature Request Trends

- **Trustworthy, deterministic agent runtime** — Strongest signal this week: deterministic tool-execution boundaries ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)), cancellation-safe file tools ([#8493](https://github.com/QwenLM/qwen-code/issues/8493)), and hook trust-boundary hardening.
- **Resource governance for `qwen serve`** — Bounded daemon memory/bytes ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)) and per-child ACP memory division ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)) reflect production-deployment concerns.
- **ACP/IDE parity with Claude Code and Codex** — JetBrains users want task-list rendering ([#8544](https://github.com/QwenLM/qwen-code/issues/8544)), `usage_update` session events ([#8513](https://github.com/QwenLM/qwen-code/issues/8513)), and reasoning-effort tiers ([#8514](https://github.com/QwenLM/qwen-code/issues/8514)).
- **Deeper extension/hook system support** — Extensions' own hooks are ignored ([#8539](https://github.com/QwenLM/qwen-code/issues/8539)); users expect full hook compatibility.
- **Background automation** — Auto-fix CI and address-review-comments workflow for active PRs ([#4362](https://github.com/QwenLM/qwen-code/issues/4362)) and session-fork capabilities ([#8274](https://github.com/QwenLM/qwen-code/pull/8274)).

## 6. Developer Pain Points

- **Terminal rendering breakage** — Severe tmux flicker ([#8519](https://github.com/QwenLM/qwen-code/issues/8519)) makes interactive CLI unusable for some Linux users.
- **File-edit reliability and cancellation safety** — Historical "edit failed" destruction of projects ([#2460](https://github.com/QwenLM/qwen-code/issues/2460)) plus cancelled tools still mutating files ([#8493](https://github.com/QwenLM/qwen-code/issues/8493)) erode trust in core file operations.
- **Session transcript integrity** — Turns silently dropped after aborts ([#8356](https://github.com/QwenLM/qwen-code/issues/8356)) and `--resume` reconstructing a dangling-unsigned-thought hazard ([#8535](https://github.com/QwenLM/qwen-code/issues/8535)).
- **MCP reliability** — Indefinite hangs on SSE servers ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)) and stale session registrations after metadata hot reload ([#8492](https://github.com/QwenLM/qwen-code/issues/8492)).
- **Cost/performance regressions** — Prompt-cache invalidation from microcompaction ([#8452](https://github.com/QwenLM/qwen-code/issues/8452)) and timeout errors that never hit the retry path ([#8527](https://github.com/QwenLM/qwen-code/issues/8527)).
- **CI/log noise** — Mocked disk-full tests producing production-looking ENOSPC errors in shared logs ([#8532](https://github.com/QwenLM/qwen-code/issues/8532)), and a copy-response button that does nothing on Windows ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-05

## 1. Today's Highlights

The project is mid-flight on the **v0.9.4 release train** (PR #5135, 77 commits ahead of main) with a wave of Runtime API PRs adding goal-loop, memory, verifier-receipt, MCP lifecycle, and skill lifecycle endpoints for managed clients. In parallel, maintainers opened a **v0.9.5 build-time performance epic** (#5249) plus five companion issues (#5244–#5248) targeting the 682k-line `codewhale-tui` monolith's compile/link/rebuild costs. Community-reported bugs around silent File-edit false successes (#5209) and 128K-context fallback behavior (#5239/#5244) are drawing active attention.

## 2. Releases

No new releases in the last 24 hours. The active v0.9.4 integration train is tracking in [PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135).

## 3. Hot Issues

1. **[#4978 — Anthropic API error: `'type' must be in ["enabled", "disabled", "auto"]`](https://github.com/Hmbown/CodeWhale/issues/4978)** — Intermittent HTTP 400 from `providers.openmodel` (Anthropic-compatible). 6 comments; retries sometimes pass, but the error is non-deterministic — a compatibility regression in how the provider serializes a boolean/feature-flag field.

2. **[#4991 — Compilation times and the TUI crate monolith](https://github.com/Hmbown/CodeWhale/issues/4991)** — Discussion agreeing that the `codewhale-tui` monolith (620 files, 682,959 lines) makes every edit, test, and commit slow. This discussion seeded the v0.9.5 build-time epic.

3. **[#4955 — Zero-sandbox / `--no-sandbox` mode for local dev](https://github.com/Hmbown/CodeWhale/issues/4955)** — The kernel-level Seatbelt sandbox breaks basic shell commands daily; community wants a documented escape hatch. 4 comments, 1 👍.

4. **[#5209 — `File (action=edit)` silently accepts wrong parameter names and reports fake success](https://github.com/Hmbown/CodeWhale/issues/5209)** — Using `new_str` instead of the correct `replace` returns "Replaced successfully" without editing, forcing 3–5× re-edits per location. Trust-destroying defect for agentic workflows; 3 comments.

5. **[#5241 — Pricing endpoint returns 503; all sessions show `unverified_live_pricing`](https://github.com/Hmbown/CodeWhale/issues/5241)** — Cost display broken after upgrading 0.8.67 → 0.9.3; every provider/route shows unpriced sessions. Regression in the live-pricing path.

6. **[#5239 — 1M-context model, but context compression triggers at 128K](https://github.com/Hmbown/CodeWhale/issues/5239)** — `context_window_for_model` only knows legacy 128K for the model in use, so a 1M-window model compacts far too early. Users want configurable/true context windows.

7. **[#5249 — Epic: v0.9.5 build-time lane — stop the monolith tax](https://github.com/Hmbown/CodeWhale/issues/5249)** — Mainline issue quantifying the pain: `codewhale-tui` is 86% of the workspace, recompiles as one unit, commit-SHA stamping invalidates rebuilds, and 25 integration-test binaries each link the full graph.

8. **[#5248 — deps: shrink the 708-package build graph](https://github.com/Hmbown/CodeWhale/issues/5248)** — 95 build-script crates and 52 proc-macros serialize clean builds; 10+ dependencies compile at 2–3 versions; redundant stacks in `codewhale-tui` should be pruned.

9. **[#5244 — Unknown model ids silently degrade to 128K legacy default](https://github.com/Hmbown/CodeWhale/issues/5244)** — Residual bug behind #5239: unknown model IDs silently fall through to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` without any surfaced warning. 0.9.4 already mitigates, but the fallback remains silent.

10. **[#5243 — OAuth login must adopt the token it just minted](https://github.com/Hmbown/CodeWhale/issues/5243)** — After a successful xAI device login, the session still lacks credentials; users must re-open the provider picker and press `e` to actually use the stored token. Dogfooded by the maintainer on 2026-08-04.

## 4. Key PR Progress

1. **[PR #5135 — release: Codewhale v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)** — The integration train, 77 commits ahead of main; supersedes #5044 and contains all 2026-08-01 source candidates plus 18 train commits.

2. **[PR #5242 — feat(tui/subagent): resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242)** — Fixes a dead-letter path where `agents/followup` on an `interrupted_continuable` child preserved a checkpoint but could never resume it; long interrupted tasks now continue instead of re-dispatching.

3. **[PR #5225 — feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)** — Previously the ACP server streamed only model text; now tool calls execute, making Zed and third-party bridges (e.g. `acp-deepseek-adapter`) real code-editing agents instead of chat-only.

4. **[PR #5133 — feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)** — Adds `GET /v1/threads/{id}/goal` plus lifecycle controls so managed clients can read and drive active-goal state through the canonical runtime boundary.

5. **[PR #5132 — Runtime API: expose verifier receipts and evidence](https://github.com/Hmbown/CodeWhale/pull/5132)** — New read-only endpoints (`receipts`, plus per-task failure details) under `/v1/fleet/runs/{run_id}/` so fleets can identify which task failed, why, and whether retry is warranted — not just a `verifier_failed` counter.

6. **[PR #5131 — feat: Runtime API memory endpoints](https://github.com/Hmbown/CodeWhale/pull/5131)** — Adds bounded `/v1/memory` routes for inspecting active memory, understanding scope/provenance, and applying lifecycle controls, gated behind `require_runtime_token`.

7. **[PR #5130 — feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)** — Adds `POST/PUT/DELETE` routes for MCP servers so clients no longer need to hand-edit TOML/JSON to add, update, or remove servers.

8. **[PR #5129 — feat(runtime-api): skill lifecycle endpoints](https://github.com/Hmbown/CodeWhale/pull/5129)** — Install, update, uninstall, trust, and audit routes completing the skill lifecycle over HTTP, matching what the TUI already offers.

9. **[PR #5240 — feat(tui/shell): surface real wait elapsed time in tool content](https://github.com/Hmbown/CodeWhale/pull/5240)** — `duration_ms` previously lived only in tool metadata the model can't see; every wait result looked identical, biasing the model into busy-polling. Now the model sees actual elapsed time.

10. **[PR #5238 — feat(mcp): MCP Registry discovery with Registry-first tool selection](https://github.com/Hmbown/CodeWhale/pull/5238)** — Adds `registry_sync` to consult the public MCP Registry for a matching zero-environment stdio server before the model reaches for `exec_shell`, custom code, or manual implementation.

## 5. Feature Request Trends

- **Build/compile performance (dominant theme):** Break up the `codewhale-tui` monolith, decouple the git-SHA stamp from compilation, consolidate 25 integration-test binaries, split the shipping profile from the local release gate, and shrink the 708-package dependency graph (#5245–#5249, #4991).
- **Context-window correctness:** Honor 1M-token models instead of compressing at the 128K legacy default, and loudly warn when a model ID is unknown and a fallback is applied (#5239, #5244).
- **Sandbox flexibility:** Allow a zero-sandbox mode for local development where kernel-level sandboxing breaks daily shell workflows (#4955).
- **Runtime/API surface expansion:** Goal-loop state, memory inspection, verifier receipts, MCP server lifecycle, and skill lifecycle endpoints for managed clients (PRs #5129–#5133).
- **Authentication UX:** OAuth flows should adopt freshly minted tokens immediately, eliminating the extra trip to the provider picker (#5243).

## 6. Developer Pain Points

- **Compile-wait tax:** The monolith crate recompiles as one unit on every edit; tests spawn 25 full-graph link jobs; local git commits force full rebuilds via SHA stamping; fat LTO applies to every pre-push build (#4991, #5245–#5249).
- **Silent failures eroding trust:** `File(action=edit)` reports success with wrong parameter names (#5209); unknown model IDs silently downgrade context to 128K (#5244); pricing silently degrades to `unverified_live_pricing` after upgrade (#5241).
- **Sandbox breaking daily commands:** Users report the Seatbelt sandbox breaks basic shell commands, and workarounds are exhausted (#4955).
- **Flaky provider compatibility:** Intermittent Anthropic API 400s on `providers.openmodel` with no deterministic repro (#4978).
- **OAuth friction:** Completing device login doesn't yield working credentials without a manual provider-picker revisit (#5243).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*